// Look Alive: habitat 2, the banded water (dishes 11, 12, 13, 18, 14 and 19; the player sees them as numbers 11 to 16). Data only.
// Plain script: global LookAliveLevels2 in a browser, module.exports in Node. Load after levels.js and before sim.js.
// Side effect (the only one): the six dishes are pushed onto LookAliveLevels.DISHES, and carry / standard are wrapped so ids 11 to 14, 18 and 19 come from here.
var LookAliveLevels2 = (function () {
  'use strict';
  var Lv = typeof LookAliveLevels !== 'undefined' ? LookAliveLevels : require('./levels.js');

  // ---------------------------------------------------------------- constants (HABITAT-2 section 3)
  var M = { base: 45, width: 10, heatDeath: 0.10, grazeTop: 40, grazeRamp: 6, flow: 0.06, gripDiffuse: 0.7, rDiffuse: 0.055, o2Night: 0.9, nightHurry: 6, hurryFrom: 0.93,   // nightHurry: on night dishes the dark kills a cell faster the further its Pace multiplier is above hurryFrom (Pace 3)
            bands: { hot: 0.45, mat: 1.15, rim: 0.9, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } };
  var BAND2 = { lo: 0.03, hi: 0.12, need: 0.7, warm: 30 };   // "Stay between 3% and 12% of the dish": your cell can only live in part of the water
  var NIGHTS = { first: 50, period: 80, dur: 40, depth: 0.95, bustDeath: 0.12 };
  var GOAL2 = 'Stay between 3% and 12% of the dish, without the guards noticing you.';

  var NONE = { type: 'none', tick: -1, announce: -1, rMult: 0, aMult: 0, depth: 0, dur: 0, bustDeath: 0 };
  // Every night of a run: first, first + period, ... while the night starts inside the run.
  function nights(ticks) {
    var ev = [], t;
    for (t = NIGHTS.first; t < ticks; t += NIGHTS.period) {
      ev.push({ type: 'bust', tick: t, announce: t - 20, rMult: 0, aMult: 0, depth: NIGHTS.depth, dur: NIGHTS.dur, bustDeath: NIGHTS.bustDeath });
    }
    return ev;
  }
  function temp(hot, cool, graze, withNights, flow, swing) {   // flow: optional per-dish current, else M.flow
    var o = { hot: hot, cool: cool, graze: graze || 0, base: M.base, width: M.width, heatDeath: M.heatDeath, grazeTop: M.grazeTop, grazeRamp: M.grazeRamp,
      flow: flow != null ? flow : M.flow, gripDiffuse: M.gripDiffuse, rDiffuse: M.rDiffuse, bands: M.bands };
    if (swing) o.swing = swing;   // dishes 18 and 19: the whole water warms and cools; see sim.js
    if (withNights) { o.o2Night = M.o2Night; o.nightHurry = M.nightHurry; o.hurryFrom = M.hurryFrom; }
    return o;
  }

  // ---------------------------------------------------------------- shared lists (HABITAT-2 section 6)
  var SLOTS = ['power', 'envelope', 'insides', 'division', 'signal', 'reflex'];
  var WORLD1_PARTS = ['wall', 'quorum', 'naps', 'clock', 'radio', 'copier', 'repair', 'pump', 'lipids', 'acidproof', 'shell'];
  var NEW_PARTS = ['chaperones', 'polyamines', 'tetraether', 'filament'];
  var MOTOR_PARTS = ['pili', 'flagellum'];
  var BIO2 = ['stringent', 'sporulate', 'sos', 'nightferm'];
  var SENSORS2 = ['food', 'density', 'native', 'share', 'susp_growth', 'susp_waste', 'ttev', 'temp'];
  var ACTIONS2 = ['pause', 'fast', 'sloppy', 'toward', 'away', 'hotter', 'cooler'];
  var METAB2 = ['respiration', 'fermentation', 'fuelcell', 'heatps'];
  // The world-1 exam shelves plus the new cards (Biology: the Heat-stable photosystem, chaperones, polyamines, tetraether, filament, and the Motor cards).
  var SHELF_BIO = ['respiration', 'fermentation', 'pump', 'lipids', 'acidproof', 'quorum', 'naps', 'wall', 'heatps', 'chaperones', 'polyamines', 'tetraether', 'filament', 'pili', 'flagellum'];
  var SHELF_MACHINE = ['fuelcell', 'clock', 'shell', 'radio', 'copier', 'repair'];

  // Exam tips shared by every exam dish (copied from world 1; dish 14 adds its own through examTips()).
  var EXAM_TIPS = {
    other: ['One of the stat bars went out of its zone, and that lost the dish.', 'This is an exam, so there is no answer here: find the bar that is out of its zone and open "What changes this?" under it.'],
    'exposed:casualties': ['Your colony grew so big that it ate the natives\' food, and the guards noticed.', 'Something has to hold your births down. Open "What changes this?" under Growth: it lists the dials and slots that move your share.'],
    'exposed:waste': ['Your waste trail did not match the natives\', and here everyone smells the same.', 'Look at the Power slot: the energy cards leave different trails, and the Smell bar shows which one is off.'],
    'exposed:growth': ['You were dividing at a rate the natives do not, and the guards noticed.', 'Open "What changes this?" under Growth. Pace, Sloppiness and several cards all move your births, up or down.'],
    overgrew: ['Your colony grew past the top of the band and stayed there.', 'Something has to hold your births down. Open "What changes this?" under Growth: it lists the dials and slots that move your share.'],
    band: ['You drifted in and out of the band and spent less than 70% of the run inside it.', 'The goal is a steady share, not a fast or a slow one. Open "What changes this?" under Growth.']
  };
  function examTips(own) { var t = {}, k; for (k in EXAM_TIPS) t[k] = EXAM_TIPS[k]; for (k in own) t[k] = own[k]; return t; }

  var TIP_BELOW = ['Your colony is too small to stay in the band.', 'Turn the Pace up a little, or take off a card that slows you and does nothing here.'];
  // Reused word for word from levels.js (EXAM_TIPS.overgrew, and the regularity tip of dish 8); every sentence is also true on dishes 11 to 13.
  var TIP_OVERGREW = ['Your colony grew past the top of the band and stayed there.', 'Something has to hold your births down. Open "What changes this?" under Growth: it lists the dials and slots that move your share.'];
  var TIP_REGULAR = ['Your cells divided in step, and the inspector read that as a machine.', 'Look at the Division slot, the Sloppiness dial, and the Machine cards you added: a reflex rule that fires everywhere at once also looks like a machine.'];
  var FORECAST_LO = 1.15;   // the Growth forecast must clear the band floor by this factor to read Safe (the 32x32 forecast is optimistic against the 64x64 run)
  var TIP_STARVED = ['Your colony died out before the run ended.', 'It made too few cells to replace the ones it lost. Turn the Pace up, or take off a card that slows you and does nothing here.'];
  // Night dishes: a faster Pace is not free there (the dark kills fast dividers sooner), so these two do not tell the player to turn it up.
  var TIP_BELOW_NIGHT = ['Your colony is too small to stay in the band.', 'Take off a card that slows you and does nothing here. A faster Pace costs you in the dark, so look at the Reflex slot first.'];
  var TIP_STARVED_NIGHT = ['Your colony died out before the run ended.', 'It made too few cells to replace the ones it lost. A faster Pace costs you in the dark, so look at the Reflex slot first.'];
  var TIP_OTHER = ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.'];
  var TIP_COOKED_12 = ['Your cell is cooking in the hot middle.', 'Keep a heat card from the last dish.'];

  // ---------------------------------------------------------------- the four dishes
  function dish(o) {
    var motor = o.slots.indexOf('motor') >= 0;
    var d = { id: o.id, title: o.title, energy: o.energy, slots: o.slots, opens: o.opens || [], reflexSlot: true, dials: ['pace', 'slop'], stats: o.stats, checked: o.stats,
      ticks: 300, acid: 0, suspicion: true, channels: o.channels, problem: o.problem, goal: o.goal,
      show: { pace: true, slop: true, metabolism: true, reflex: { bio: BIO2, rule: true }, channels: o.channels,
        shelves: { biology: SHELF_BIO, machine: SHELF_MACHINE } },
      allowed: { metabolism: METAB2, parts: WORLD1_PARTS.concat(NEW_PARTS, motor ? MOTOR_PARTS : []), bio: BIO2, sensors: SENSORS2, actions: ACTIONS2 },
      band: BAND2, event: NONE, forecastN: 32, forecastLoMult: o.forecastLoMult || FORECAST_LO, crashSafe: 0.024, world: 2,
      temp: o.temp, tips: o.tips, tipFixes: o.tipFixes || {}, fixes: o.fixes || [],
      nbTitle: o.nbTitle, notebook: o.notebook, fieldNote: o.fieldNote, reading: o.reading, colony: o.colony };
    if (o.nights) { d.events = nights(d.ticks); d.event = d.events[0]; }
    if (o.exam) { d.exam = true; d.regWeight = o.regWeight; d.peakSafe = o.peakSafe; }
    return d;
  }

  var SWING = { amp: 17.5, period: 100, span: 30, dMult: 3, hurry: 60 };   // amp: C either way; span: how far below its heat tolerance a cell still works; dMult and hurry: how hard the swing kills, and the extra a fast divider pays
  var CH_PLAIN = ['casualties', 'regularity'];
  var CH_EXAM = ['growth', 'casualties', 'regularity'];

  var DISHES2 = [
    dish({ id: 11, title: 'Hotter Than Home', energy: 5, slots: SLOTS, stats: ['heat', 'growth', 'natural'], channels: CH_PLAIN, temp: temp(70, 58, 0, false, 0.02),
      problem: 'The water here is 58 to 70 C. Your cell was made for acid, and acid is not the problem now.', goal: GOAL2,
      fixes: [
        { id: 'chap', label: 'Swap Acid-proof insides for Heat-shock chaperones (Insides)', changes: { remove: ['acidproof'], add: ['chaperones'] } },
        { id: 'tetra', label: 'Add the Tetraether membrane (Envelope)', changes: { add: ['tetraether'] } },
        { id: 'heatps', label: 'Swap Fermentation for the Heat-stable photosystem (Power)', changes: { set: { metabolism: 'heatps' } } }
      ],
      tipFixes: { cooked: ['chap', 'tetra', 'heatps'] },
      tips: {
        cooked: ['Your cell is cooking. Nothing in it is made for hot water.', 'Your Acid-proof insides do nothing here. The Insides, Envelope and Power slots each have a card for heat.'],
        below: TIP_BELOW, overgrew: TIP_OVERGREW, starved: TIP_STARVED, 'exposed:regularity': TIP_REGULAR, other: TIP_OTHER
      },
      nbTitle: 'Living in hot water',
      notebook: 'Thermus aquaticus was found in 1969 in Mushroom Spring, Yellowstone, at about 70 C, and its heat-proof copying enzyme (Taq) is now used in every DNA lab. Cells survive heat in several ways at once: chaperones such as GroEL refold proteins the heat unfolds, Thermus thermophilus wraps its DNA and ribosomes in long polyamines (mutants without them fail above about 75 C), and heat-loving archaea build membranes of single long lipids, with more rings the hotter the water. No living cell has all of these. Here, each slot had one.',
      fieldNote: ['Our cell was made for sour water. Here the water is hot, and the locals do not seem to notice it.'],
      reading: 'The crowds here stand in heat that would cook ours. We think they are not braver than us. They are made of different stuff.',
      colony: 'We pay for heat the way we paid for acid: in growth.' }),

    dish({ id: 12, title: 'The Comfortable End', energy: 5, slots: SLOTS.concat(['motor']), opens: ['motor'], stats: ['heat', 'growth', 'grazing', 'natural'], channels: CH_PLAIN, temp: temp(75, 30, 0.25, false, 0.065), forecastLoMult: 1.3,
      problem: 'A cell that settles where the water is comfortable is eaten.', goal: GOAL2,
      fixes: [
        { id: 'pili', label: 'Add Twitching pili (the Motor slot is open)', changes: { add: ['pili'] } },
        { id: 'filament', label: 'Add Filament form (Division)', changes: { add: ['filament'] } },
        { id: 'compass', label: 'Machine rule: when temperature here is less than 60, move toward heat; Heat-stable photosystem; Pace 5', heavy: true,
          changes: { set: { pace: 5, metabolism: 'heatps' }, reflex: { kind: 'machine', sensor: 'temp', cmp: 'lt', value: 60, action: 'hotter' } } }
      ],
      tipFixes: { grazed: ['pili', 'filament', 'compass'] },
      tips: {
        grazed: ['The current carried your cells to the cool edge, and something there eats them.', 'Hold your cells in place (the new Motor slot), or make them too big to eat (Division), or steer them away from the cool water (a Machine rule).'],
        cooked: TIP_COOKED_12, below: TIP_BELOW, overgrew: TIP_OVERGREW, starved: TIP_STARVED, 'exposed:regularity': TIP_REGULAR, other: TIP_OTHER
      },
      nbTitle: 'Why the cool edge is eaten',
      notebook: 'Paracoenia turbida is a brine fly. Its eggs do not hatch and its youngest larvae die above about 40 C, so it lays them only at the cool edge of a hot spring, and the larvae eat almost all of the mat below the place where the eggs were laid. Late in their growth they even eat the mat dams that shield them from the hot water. The hot, flowing water above that line stays whole. Smaller grazers, such as amoebae and flagellates, are kept off by size: bacteria that grow as long filaments or clumps are too big to swallow. A fly is thousands of times the size of a cell. To a cell it is not an animal; it is a landslide.',
      fieldNote: ['Our cell lived. It also settled at the comfortable end, and the comfortable end is where the shadow is. We have stopped trusting comfort.'],
      reading: 'The crowds that survive live where we would not. We think a city that chooses the hot end on purpose is not a city. It is a plan.',
      colony: 'We had a name for things that act on whole crowds at once. We called it weather.' }),

    dish({ id: 13, title: 'Night Shift', energy: 5, slots: SLOTS.concat(['motor']), stats: ['heat', 'growth', 'natural', 'night'], channels: CH_PLAIN, temp: temp(68, 44, 0, true, 0.04), nights: true,
      problem: 'The light goes out every 80 ticks, and the water runs out of oxygen in the dark.', goal: 'Stay in the band through every night.',
      fixes: [
        { id: 'nightferm', label: 'Swap Sporulate for Night fermentation (Reflex)', changes: { reflex: { kind: 'bio', id: 'nightferm' } } },
        { id: 'sos', label: 'Swap Sporulate for the SOS response (Reflex)', changes: { reflex: { kind: 'bio', id: 'sos' } } }
      ],
      tipFixes: { bust: ['nightferm', 'sos'] },
      tips: {
        bust: ['The light went out and your colony fell out of the band.', 'Sporulate is too slow for a dark that comes back every 80 ticks. Look at the Reflex slot for something that reacts to the dark itself.'],
        cooked: TIP_COOKED_12, below: TIP_BELOW_NIGHT, overgrew: TIP_OVERGREW, starved: TIP_STARVED_NIGHT, 'exposed:regularity': TIP_REGULAR, other: TIP_OTHER
      },
      nbTitle: 'Day and night in a mat',
      notebook: 'One millimetre inside a mat at Octopus Spring, about 55 C, the water after noon holds about 900 micromoles of oxygen per litre, far more than it can hold in balance with air, at pH 9.4. Before sunrise the same spot has no oxygen at all and pH 7.2. By day the cyanobacteria store sugar (glycogen); at night they ferment it into acetate and propionate, and the mat fixes nitrogen in the dark. Thermostichus also moves: it crawls toward light on thin threads called type IV pili.',
      fieldNote: ['The light goes out on a schedule. Every crowd stops when it goes and starts when it comes back, and we cannot find the signal.'],
      reading: 'Every crowd keeps the same clock, and none of them sends it. We think one larger body keeps time for all of them.',
      colony: 'Every crowd changes what it eats twice a day, and none of them is told to. We cannot tell who keeps the clock.' }),

    dish({ id: 14, title: 'Greetings from the Banded Water', energy: 3, exam: true, regWeight: 2, peakSafe: 6, slots: SLOTS.concat(['motor']),
      stats: ['heat', 'growth', 'grazing', 'natural', 'night'], channels: CH_EXAM, temp: temp(85, 30, 0.35, true), nights: true,
      // The spec gives no problem line for the exam; this one is the dish 13 goal and the field note's own words, nothing new.
      problem: 'Hot, cold, dark, the slow shadow.', goal: 'Stay in the band through every night.',
      tips: examTips({
        cooked: ['The middle of this dish is 85 C, and your cell cooked there.', 'Look at what each heat card costs in energy and births. This dish gives you 3 energy.'],
        grazed: ['The current carried you to the cool edge and the shadow ate you.', 'Something has to keep you out of water under 40 C, or keep you from being eaten. Count what each answer costs.'],
        bust: ['The night took your share below the band.', 'The Reflex slot decides this, but a strict inspector watches any rule that fires everywhere at once.'],
        below: ['Your colony was too slow to last on 3 energy.', 'Check what each card takes from Growth, then look at Pace and your Power card.'],
        'exposed:regularity': ['Your cells moved or divided too neatly, and this inspector reads that as a machine.', 'Look at Sloppiness, your Division card, and any Machine rule.']
      }),
      nbTitle: 'Where complex life stops',
      notebook: 'Hot springs sort life by temperature. Light-using bacteria stop at about 72 to 73 C; above that only chemical-eaters such as Thermocrinis grow, in pink streamers up to about 89 C. Cells with a nucleus were long thought to stop near 60 C (Tansey and Brock, 1972), and the record amoeba was Echinamoeba thermarum at 57 C. In 2026 a new amoeba from Lassen Volcanic National Park, Incendiamoeba cascadensis, was reported dividing at 63 C and still moving at 64 C. So the grazers have a ceiling, and the hot water above it is the safest place in the spring.',
      fieldNote: ['Hot, cold, dark, the slow shadow: every crowd here has its place, and none of them chose it.'],
      reading: 'We think a city is not the largest kind of thing. The crowds stand in bands by heat, and something larger keeps them there.',
      colony: 'The shadow cannot follow into the heat. Nothing we know arranges a crowd by heat on purpose; we think something larger does.' })
    ,
    dish({ id: 18, title: 'Cold Snap', energy: 5, slots: SLOTS.concat(['motor']), stats: ['heat', 'growth', 'natural'], channels: CH_PLAIN, temp: temp(64, 30, 0, false, 0.04, SWING),
      problem: 'The whole river warms and cools. A cell that works in one kind of water stops in the other.', goal: GOAL2,
      fixes: [
        { id: 'spore', label: 'Swap Night fermentation for Sporulate (Reflex)', changes: { reflex: { kind: 'bio', id: 'sporulate' } } }
      ],
      tipFixes: { below: ['spore'] },
      tips: {
        below: ['The water swung hot, then cold, and your cell stopped each time it left its range.', 'Making your cell tougher does not widen the range. Look at the Reflex slot for something that waits out a bad spell instead of fighting it.'],
        cooked: ['The swing was more than your cell could stand.', 'Making your cell tougher does not widen the range. Look at the Reflex slot for something that waits out a bad spell instead of fighting it.'],
        starved: ['Your colony died out before the run ended.', 'The water left your cell\'s range and the cell was not ready for it. Look at the Reflex slot: the dark taught you one answer, and this is a different kind of bad time.'],
        overgrew: TIP_OVERGREW, 'exposed:regularity': TIP_REGULAR, other: TIP_OTHER
      },
      nbTitle: 'When the water will not hold still',
      notebook: 'A hot spring is never perfectly steady. Wind, rain and the time of day shift the temperature of the water, and the edges move the most. A cell grows over only a range of temperatures, often 30 to 40 degrees wide: warm it past the top and it cooks, cool it past the bottom and its membrane stiffens and its proteins slow to a stop. A cell cannot widen that range much. What it can do is stop and wait. Bacillus subtilis seals itself into a spore when conditions turn bad, and the spore survives boiling water and freezing alike until the water comes back.',
      fieldNote: ['The water here does not hold still. It heats, then it chills, and every crowd goes quiet for a while and then comes back.'],
      reading: 'The crowds that live here are not tougher than ours. We think they simply know how to wait.',
      colony: 'Some of our cells keep still through a bad spell and some do not. The ones that keep still are the ones we still have.' })
    ,
    dish({ id: 19, title: 'Leaving the River', energy: 5, exam: true, regWeight: 2, peakSafe: 6, slots: SLOTS.concat(['motor']),
      stats: ['heat', 'growth', 'grazing', 'natural', 'night'], channels: CH_EXAM, temp: temp(66, 30, 0.2, true, null, { amp: 8, period: 100, span: 26, dMult: 3, spore: 1 }), nights: true,
      problem: 'Hot water, a cool edge, the dark, and a river that warms and chills.', goal: 'Stay in the band through every night.',
      tips: examTips({
        cooked: ['Your cell stopped where the water left its range, hot or cold.', 'Look at what each heat card costs in energy and births. The water does not stay one temperature, and a cell that sits out the swing as a spore is worn away by it.'],
        grazed: ['The current carried you to the cool edge and the shadow ate you.', 'Something has to keep you out of water under 40 C, or keep you from being eaten. Count what each answer costs.'],
        bust: ['The dark took your share below the band.', 'The Reflex slot decides this, and the water also swings between hot and cold on a slower clock. A strict inspector watches any rule that fires everywhere at once.'],
        below: ['Your colony was too slow to last here.', 'Check what each card takes from Growth, then look at Pace and your Power card.'],
        'exposed:regularity': ['Your cells moved or divided too neatly, and this inspector reads that as a machine.', 'Look at Sloppiness, your Division card, and any Machine rule.']
      }),
      nbTitle: 'Where a spring runs out',
      notebook: 'Hot spring water leaves the vent at 70 to 90 C and cools as it runs downhill, until it spreads into a marsh or sinks into dry ground. Each stretch has its own crowd: the thin pink streamers near the vent, then dense mats of Mastigocladus laminosus up to about 60 C, and farther down more and more kinds of cell, with grazers at the cool end. At any one spot the temperature also changes with the hour and the weather. A cell that wants to leave has to live through all of it: heat, cool, dark and swing.',
      fieldNote: ['The river runs out here. The crowds that go on past the heat are the ones that learned to wait.'],
      reading: 'We think a city is a place that stays. The crowds here keep moving through the heat, the cool, the dark and the cold, and some of them go on past the end of the river.',
      colony: 'The river ends in dry ground. Some crowds go on, and we think that is where the salt is.' })
  ];

  // ---------------------------------------------------------------- carried and standard cells (HABITAT-2 section 6.1)
  function mk(pace, slop, met, parts, reflex) { return { pace: pace, slop: slop, metabolism: met, parts: parts, reflex: reflex || null }; }
  var CARRY2 = {
    11: mk(3, 6, 'fermentation', ['acidproof'], { kind: 'bio', id: 'sporulate' }),            // the walkthrough's dish-10 winner
    12: mk(3, 6, 'fermentation', ['chaperones'], { kind: 'bio', id: 'sporulate' }),           // dish 11: swap Acid-proof insides for chaperones
    13: mk(3, 6, 'fermentation', ['chaperones', 'pili'], { kind: 'bio', id: 'sporulate' }),   // dish 12: add Twitching pili
    14: mk(3, 6, 'fermentation', ['polyamines', 'pili'], { kind: 'bio', id: 'nightferm' }),   // a dish-13 winner that fits energy 3
    18: mk(3, 6, 'fermentation', ['chaperones', 'pili'], { kind: 'bio', id: 'nightferm' }),   // the simplest winner of dish 13 (its first fix)
    19: mk(3, 6, 'fermentation', ['chaperones', 'pili'], { kind: 'bio', id: 'sporulate' })   // the dish-18 winner (it sporulates through the swing; this exam wears spores away)
  };
  var STANDARD2 = { 14: mk(3, 0, 'fermentation', ['polyamines', 'pili'], null) };   // fails two ways: Naturalness (stage 3) and dies at night
  function copy(c) { return c ? JSON.parse(JSON.stringify(c)) : null; }

  // ---------------------------------------------------------------- text (HABITAT-2 section 7)
  var WORLD2 = {
    name: 'The banded water',
    facts: [
      'We followed the warm mountain\'s trail to a hot river. The crowds here stand in bands, hot to cold, like a map.',
      'Near the source the water would cook any of our cells. Only thin pink streamers live there.',
      'Below that line, a green layer lies on an orange one, like the bands in a rock.',
      'At the cool edge something very slow wears the layers away. We think it is weather.',
      'The light comes and goes. When it goes, the water runs out of air.',
      'Our samples name the locals: Thermocrinis, Thermus aquaticus, Thermostichus, Roseiflexus, Chloroflexus, Fischerella.'
    ],
    badge: 'Each crowd keeps to its own heat. Real Thermostichus lineages do: one isolate from Octopus Spring grows at about 58 to 70 C, another at about 53 to 60 C.',
    mission: 'Our lab grows each dish from the scouts\' new samples and tests your microbe in it. Pass as a local and we add a page to our notes.'
  };
  var INTRO2 = [
    ['Cover held', 'We passed.', 'Our samples came back with a stamp: cover held. We think the city let us in. The scouts are already somewhere new.'],
    ['The trail', 'A hot river.', 'We followed the warm mountain\'s trail to a river that steams. The crowds here stand in bands, hot to cold, like a map someone drew.'],
    ['The shadow', 'Something at the edge.', 'Something at the cool end is wearing the crowds away. It is very slow. We think it is weather.']
  ];
  // The completion card, shown after the last hot river dish (19). HABITAT-2 7.6 gives the title and the Next line; the three other rows are that last exam dish's own field note, reading and colony line.
  var DLAST = DISHES2[DISHES2.length - 1];
  var COMPLETE2 = {
    title: 'SAMPLING COMPLETE · The banded water · six sites',
    rows: [
      ['Finding', DLAST.fieldNote[0]],
      ['Conclusion', DLAST.reading],
      ['Anomaly', DLAST.colony],
      ['Next', 'A place where the water itself is the problem: a salt flat.']
    ]
  };
  // Cover names (7.8). Genus by Power card; epithets are added to the world-1 lists; "calidus" is added when the tolerance is 75 C or more.
  var COVER2 = {
    genus: { fermentation: 'Thermostichus', respiration: 'Thermus', heatps: 'Thermostichus', fuelcell: 'Thermocrinis' },
    epithet: { chaperones: 'tutelaris', polyamines: 'catenatus', tetraether: 'loricatus', pili: 'reptans', filament: 'filamentosus', flagellum: 'natans',
      nightferm: 'nocturnus', heatrule: 'thermometricus', heatps: 'lucidus' },
    calidus: { epithet: 'calidus', fromHeat: 75 }
  };

  // ---------------------------------------------------------------- registration
  DISHES2.forEach(function (d) { if (!Lv.dish(d.id)) Lv.DISHES.push(d); });
  var carry1 = Lv.carry, standard1 = Lv.standard;
  Lv.carry = function (id) { return CARRY2[id] ? copy(CARRY2[id]) : carry1(id); };
  Lv.standard = function (id) { var c = STANDARD2[id] || CARRY2[id]; return c ? copy(c) : standard1(id); };

  return { M: M, WORLD: WORLD2, INTRO: INTRO2, ORDER: [11, 12, 13, 18, 14, 19], DISHES: DISHES2, COMPLETE: COMPLETE2, COVER: COVER2 };
})();
if (typeof module !== 'undefined') module.exports = LookAliveLevels2;

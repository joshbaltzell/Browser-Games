// Look Alive: the city and the dishes. Data only, no logic except a lookup helper.
// Plain script: global LookAliveLevels in a browser, module.exports in Node.
var LookAliveLevels = (function () {
  'use strict';

  // One city (Gastropolis, a stomach), one native species. Every number here is a tuning knob of the simulation.
  var PLANET = {
    name: 'Gastropolis',
    ticks: 300,
    settle: 250,            // native-only ticks run once to reach the dish's starting state
    startShare: 0.09,       // robots start as this share of the dish
    foodHalf: 0.3,          // food level giving half speed
    regrow: 0.02,           // food regrowth per tick toward the patch map
    foodDiffuse: 0.06, popDiffuse: 0.05, wasteDiffuse: 0.10, wasteDecay: 0.12,
    foodPerBirth: 0.2,      // food used per birth
    cross: 0.5,             // competition of robots on natives (below 1: the species coexist)
    native: { rate: 0.12, death: 0.03, crowd: 0.042, mixA: 0.7, sigma: 0.05 },
    robot: {
      death: 0.02, crowd: 0.20, cross: 0.05,            // robot crowding is mostly on themselves: the coexistence rule
      paceBase: 0.72, pacePer: 0.07,                    // births multiplier = paceBase + pacePer * pace (pace 4 = 1.0)
      slopCost: 0.02,                                   // each slop step: births -2%
      sigmaBase: 0.0025, sigmaPerSlop: 0.0059375        // timing noise sd (slop 8 = the natives' 0.05)
    },
    quorum: { emit: 0.5, decay: 0.10, diffuse: 0.12, max: 0.45, half: 0.25 },
    radio: { target: 0.10, gain: 6, lo: 0.3, hi: 1.2 },
    senses: { foodAlpha: 0.30, noise: 0.20, attackAlpha: 0.30 },   // biology reflexes: delayed (about 3 ticks) and noisy
    event: { ramp: 10 },
    suspicion: {
      growthScale: 0.15, growthScaleSlow: 0.40, growthSlowMax: 1.8, wasteScale: 6.0, casualtyScale: 0.07,
      regTiming: 1.5, regFlat: 1.2, regFactory: 0.5, regRuleInstall: 0.2, regRuleFire: 0.9, flatRef: 0.004,
      flatWindow: 20,
      deadzone: [1.0, 1.0, 2.14, 0.5],       // growth, waste, casualties, regularity
      weight: [1.0, 1.5, 1.3, 2.4],
      cap: [6, 6, 6, 6],                    // soft cap on each channel's excess (compresses the top)
      fastKeep: 0.90, slowKeep: 0.99, slowGain: 0.02,
      stage: [1.5, 4.5, 8.0],               // curiosity, inspection, response
      kill: 0.004, killFrom: 8.0, killCap: 0.15, killTough: 0.25
    },
    extinct: 0.002
  };

  var NONE = { type: 'none', tick: -1, announce: -1, rMult: 0, aMult: 0, depth: 0, dur: 0, bustDeath: 0 };
  var BAND = { lo: 0.05, hi: 0.15, need: 0.7, warm: 30 };
  var BAND_GOAL = 'Stay between 5% and 15% of the dish, without the lab noticing you.';
  var ALL_PARTS = ['wall', 'quorum', 'naps', 'clock', 'radio', 'copier', 'repair', 'pump', 'lipids', 'acidproof', 'shell'];
  // The Motor slot is locked in this city, so the Flagellum is not offered. Offered cards = this list, intersected with the open slots.
  var BIO_REFLEX = ['stringent', 'sporulate', 'sos'];
  var SENSORS = ['food', 'density', 'native', 'share', 'susp_growth', 'susp_waste', 'ttev'];
  var ACTIONS = ['pause', 'fast', 'sloppy', 'toward', 'away'];
  // The Factory unit comes with Respiration in Power and the Sync pulse in Division. A slot that is not open yet is locked with its factory part fitted.
  var FACTORY = { power: 'respiration', division: 'clock' };
  var SLOT_ORDER = ['power', 'envelope', 'insides', 'division', 'signal', 'motor', 'reflex'];

  var WORLD = {
    name: 'Gastropolis',
    facts: [
      'You took the inside of a huge warm creature for a city. The microbes are its citizens.',
      'The water is acid. Anything unprotected dissolves.',
      'Food pours in with every meal. The citizens keep their own numbers down.',
      'The city\'s guards leave citizens alone and inspect anyone who stands out.',
      'Everyone leaves a sour trail. The wrong waste, or none, stands out.',
      'Our samples name the citizens: Lactobacillus, Streptococcus, Helicobacter pylori.'
    ],
    badge: 'The locals can tell you apart because real colonies can: Proteus mirabilis swarms check each other\'s identity proteins, and a visible border line forms between strangers.',
    mission: 'A lab in Gastropolis, the city inside the creature, keeps these dishes. Pass as a citizen and you get a page of their notebook.'
  };


  // Fix = { id, label, changes: { set: {pace, slop, metabolism}, add: [part ids], remove: [part ids], reflex: {...} }, heavy? }.
  // `heavy` marks a route that needs more than two changes.
  var DISHES = [
    { id: 1, title: "Don't Dissolve", energy: 4, slots: ['envelope', 'insides'], opens: ['envelope', 'insides'], reflexSlot: false, dials: [], stats: ['acid', 'growth'], checked: ['acid'],
      ticks: 300, acid: 0.35, aliveOnly: true, suspicion: false, channels: [],
      problem: 'The water is acid. A cell with nothing to keep the acid out dissolves.',
      goal: 'Be alive at the end of the run.',
      show: { pace: false, slop: false, metabolism: false, reflex: false, channels: [],
        shelves: { biology: ['pump', 'lipids', 'acidproof'], machine: ['clock', 'shell'] } },
      allowed: { metabolism: ['respiration'], parts: ['clock', 'pump', 'lipids', 'acidproof', 'shell'], bio: [], sensors: [], actions: [] },
      band: { lo: 0.05, hi: 0.15, need: 0, warm: 30 }, event: NONE,
      tips: {
        acid: ['The acid is getting in. Nothing in your cell keeps it out.', 'Try the Proton pump in the Envelope slot. The Tight membrane and the Sealed shell also fit there, and Acid-proof insides goes in the Insides slot.'],
        other: ['Your colony is too small to last.', 'Keep a full acid defence, the Proton pump or the Sealed shell, and keep the Pace at 4.']
      },
      tipFixes: { acid: ['pump', 'lipids', 'shell', 'acidproof'] },
      fixes: [
        { id: 'pump', label: 'Add the Proton pump', changes: { add: ['pump'] } },
        { id: 'lipids', label: 'Add the Tight membrane (barely enough)', changes: { add: ['lipids'] } },
        { id: 'shell', label: 'Add the Sealed shell', changes: { add: ['shell'] } },
        { id: 'acidproof', label: 'Add Acid-proof insides (it takes 3 energy)', changes: { add: ['acidproof'] } }
      ],
      notebook: 'Picrophilus torridus is an archaeon that grows best in acid roughly as strong as battery acid, and can still grow at around pH 0. Most acid-loving microbes keep their insides near neutral by pumping acid back out, which costs energy all the time, but Picrophilus lets its insides go acidic too and builds every protein to cope, inside a membrane that lets almost no acid through. In Gastropolis the water dissolves anything unprotected, and a sealed ceramic shell would keep it out completely, while a real cell can never be sealed: even a diatom\'s glass shell is full of pores so life can pass through.' },
    { id: 2, title: "Don't Take Over", energy: 5, slots: ['envelope', 'insides', 'signal'], opens: ['signal'], reflexSlot: false, dials: ['pace'], stats: ['acid', 'growth'],
      ticks: 300, acid: 0.18, abundance: { food: 13, crowd: 2.8, death: 0.03, cross: 6, run: 15, runFrom: 0.8 }, suspicion: true, channels: ['casualties'],
      problem: 'Food is everywhere and nothing eats you, so a cell that divides at its usual pace floods the dish.',
      goal: BAND_GOAL,
      show: { pace: true, slop: false, metabolism: false, reflex: false, channels: ['casualties'],
        shelves: { biology: ['pump', 'lipids', 'acidproof', 'quorum'], machine: ['clock', 'shell', 'radio'] } },
      allowed: { metabolism: ['respiration'], parts: ['clock', 'pump', 'lipids', 'acidproof', 'shell', 'quorum', 'radio'], bio: [], sensors: [], actions: [] },
      band: BAND, event: NONE,
      tips: {
        'exposed:casualties': ['Your colony is taking over the dish. There is plenty of food and nothing to hold you back.', 'Turn the Pace down to 2, or add the Head count (quorum signal) on the Biology shelf.'],
        overgrew: ['Your colony is taking over the dish. There is plenty of food and nothing to hold you back.', 'Turn the Pace down to 2, or add the Head count (quorum signal) on the Biology shelf.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little: Pace 1 or 2 is about right.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { 'exposed:casualties': ['pace', 'quorum'], overgrew: ['pace', 'quorum'] },
      fixes: [
        { id: 'pace', label: 'Turn Pace down to 2', changes: { set: { pace: 2 } } },
        { id: 'quorum', label: 'Add the Head count (quorum signal)', changes: { add: ['quorum'] } },
        { id: 'radio', label: 'Add the Radio mesh (Machine answer)', changes: { add: ['radio'] } }
      ],
      notebook: 'Aliivibrio fischeri bacteria live packed inside the light organ of the bobtail squid, and every dawn the squid vents about 90% of them and lets the survivors regrow. Each bacterium leaks a small molecule and listens for it, so once enough of them are crowded together they all switch on their lights at the same moment. A colony never grows without limit: in the squid something always resets it. In Gastropolis the locals keep their own numbers down and nothing keeps yours down, so you have to do it yourself.' },
    { id: 3, title: 'Smell Right', energy: 5, slots: ['power', 'envelope', 'insides', 'signal'], opens: ['power'], reflexSlot: false, dials: ['pace'], stats: ['acid', 'growth', 'smell'],
      ticks: 300, acid: 0.35, suspicion: true, channels: ['casualties', 'waste'],
      problem: 'Everyone in Gastropolis leaves the same sour trail. Your cell leaves a different one.',
      goal: BAND_GOAL,
      show: { pace: true, slop: false, metabolism: true, reflex: false, channels: ['casualties', 'waste'],
        shelves: { biology: ['respiration', 'fermentation', 'pump', 'lipids', 'acidproof', 'quorum'], machine: ['fuelcell', 'clock', 'shell', 'radio'] } },
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ['clock', 'pump', 'lipids', 'acidproof', 'shell', 'quorum', 'radio'], bio: [], sensors: [], actions: [] },
      band: BAND, event: NONE,
      tips: {
        'exposed:waste': ['Your waste trail is wrong for Gastropolis. The locals smell it.', 'Swap Respiration for Fermentation in the Power slot: its waste matches the natives\'.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { 'exposed:waste': ['ferment'] },
      fixes: [
        { id: 'ferment', label: 'Swap Respiration for Fermentation', changes: { set: { metabolism: 'fermentation' } } }
      ],
      notebook: 'Lactic acid bacteria ferment sugar without oxygen, which is fast and gets little energy out of it, and they leave lactic acid behind. Cells that use oxygen break sugar down completely and get far more energy from the same meal. The waste a cell leaves is a chemical fingerprint of how it makes its energy. In Gastropolis the locals ferment, so everyone leaves the same sour trail, and a cell that respires leaves a different one.' },
    { id: 4, title: 'Be Messy', energy: 6, slots: ['power', 'envelope', 'insides', 'division', 'signal'], opens: ['division'], reflexSlot: false, dials: ['pace', 'slop'], stats: ['acid', 'growth', 'smell', 'natural'],
      ticks: 300, acid: 0.35, suspicion: true, channels: ['casualties', 'waste', 'regularity'],
      problem: 'Machine parts make every cell divide on the same schedule. Real cells are messier.',
      goal: BAND_GOAL,
      show: { pace: true, slop: true, metabolism: true, reflex: false, channels: ['casualties', 'waste', 'regularity'],
        shelves: { biology: ['respiration', 'fermentation', 'pump', 'lipids', 'acidproof', 'quorum', 'naps', 'wall'], machine: ['fuelcell', 'clock', 'shell', 'radio', 'copier', 'repair'] } },
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ALL_PARTS, bio: [], sensors: [], actions: [] },
      band: BAND, event: NONE,
      tips: {
        'exposed:regularity': ['Your cells divide in perfect step. Nothing natural does that.', 'Take off the Sync pulse, or swap it for Random naps, or raise Sloppiness to 4 or more.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little, or take a slow part off.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { 'exposed:regularity': ['noclock', 'naps', 'slop'] },
      fixes: [
        { id: 'noclock', label: 'Remove the Sync pulse', changes: { remove: ['clock'] } },
        { id: 'naps', label: 'Swap the Sync pulse for Random naps (one Division part fits)', changes: { remove: ['clock'], add: ['naps'] } },
        { id: 'slop', label: 'Raise Sloppiness to 4', changes: { set: { slop: 4 } } }
      ],
      notebook: 'In a growing colony of Escherichia coli, a small fraction of cells at random stop growing for a while. Those sleepers survive drugs that attack growing cells, and when the drug is washed away they wake and rebuild the colony. This variety is not genetic: once they wake, the sleepers are as drug-sensitive as their parents. In Gastropolis anything perfectly regular stands out, so a machine has to learn to be messy.' },
    { id: 5, title: 'When Things Change', energy: 6, slots: ['power', 'envelope', 'insides', 'division', 'signal', 'reflex'], opens: ['reflex'], reflexSlot: true, dials: ['pace', 'slop'], stats: ['acid', 'growth', 'smell', 'natural', 'crash'],
      ticks: 300, acid: 0.5, suspicion: true, channels: ['growth', 'waste', 'casualties', 'regularity'],
      problem: 'Partway through the run the food crashes.',
      goal: 'Stay in the band through the food crash.',
      show: { pace: true, slop: true, metabolism: true, reflex: { bio: BIO_REFLEX, rule: true }, channels: ['growth', 'waste', 'casualties', 'regularity'],
        shelves: { biology: ['respiration', 'fermentation', 'pump', 'lipids', 'acidproof', 'quorum', 'naps', 'wall'], machine: ['fuelcell', 'clock', 'shell', 'radio', 'copier', 'repair'] } },
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ALL_PARTS, bio: BIO_REFLEX, sensors: SENSORS, actions: ACTIONS },
      band: BAND, event: { type: 'bust', tick: 50, announce: 30, rMult: 0, aMult: 0, depth: 0.945, dur: 85, bustDeath: 0.07 },
      tips: {
        bust: ['The food crashed and your cell had no way to react.', 'Put the Stringent response, the Sporulate reflex or the SOS response in the Reflex slot.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little, or put a reflex in the Reflex slot.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { bust: ['stringent', 'sporulate', 'sos'] },
      fixes: [
        { id: 'stringent', label: 'Add the Stringent response', changes: { reflex: { kind: 'bio', id: 'stringent' } } },
        { id: 'sporulate', label: 'Add the Sporulate reflex', changes: { reflex: { kind: 'bio', id: 'sporulate' } } },
        { id: 'sos', label: 'Add the SOS response', changes: { reflex: { kind: 'bio', id: 'sos' } } },
        { id: 'rule', label: 'Add a machine rule (pause when food is low) and push Pace and Sloppiness to 8', heavy: true,
          changes: { set: { pace: 8, slop: 8 }, reflex: { kind: 'machine', sensor: 'food', cmp: 'lt', value: 0.35, action: 'pause' } } }
      ],
      notebook: 'When it starves, Bacillus subtilis builds a tough spore, packs a copy of its DNA inside, and lets the mother cell dissolve away. The spore has almost no water and no metabolism, and it can survive boiling, drying and radiation for a very long time. Making one takes hours and cannot be undone, and waking one costs a full rebuild, so a spore cannot take advantage of a brief return of food. In Gastropolis the locals react in a few ticks and only to what is near them, so a unit that reacts to things it could not know gives itself away.' }
  ];

  // ---------------------------------------------------------------- exam dishes 6 to 10 (GAMEPLAY-V2 section 14)
  // No new mechanics, cards or slots: only dish parameters. Every slot opened so far is open (the Motor stays locked), and every card the city has is offered.
  // Parameters used here that dishes 1 to 5 do not set: `acidLoad` (holding off stronger acid costs more births, see RULES.md), `regWeight` (a stricter Naturalness line),
  // `events` (two food crashes), `checked` (which of the shown stats can lose the dish), `exam: true`.
  var EXAM_SLOTS = ['power', 'envelope', 'insides', 'division', 'signal', 'reflex'];
  var ALL_STATS = ['acid', 'growth', 'smell', 'natural', 'crash'];
  var ALL_CHAN = ['growth', 'waste', 'casualties', 'regularity'];
  // Exam tips name the problem and the family of levers (a slot, a shelf, a dial) but never the winning build. Causes shared by every exam dish live in EXAM_TIPS;
  // each dish adds its own through the `tips` option of exam(), which is merged over EXAM_TIPS.
  var EXAM_TIPS = {
    other: ['One of the stat bars went out of its zone, and that lost the dish.', 'This is an exam, so there is no answer here: find the bar that is out of its zone and open "What changes this?" under it.'],
    'exposed:casualties': ['Too many of your cells died, and the lab noticed the bodies.', 'Find what is killing them: the acid getting in, or a food crash. The stat bar that is out of its zone says which, and "What changes this?" lists the levers.'],
    'exposed:waste': ['Your waste trail did not match the natives\', and in Gastropolis everyone smells the same.', 'Look at the Power slot: the energy cards leave different trails, and the Smell bar shows which one is off.'],
    'exposed:growth': ['You were dividing at a rate the natives do not, and the lab noticed.', 'Open "What changes this?" under Growth. Pace, Sloppiness and several cards all move your births, up or down.'],
    overgrew: ['Your colony outgrew the band and took over the dish.', 'Something has to hold your births down: Pace, Sloppiness, or a card on the Biology shelf that makes cells count each other.'],
    band: ['You drifted in and out of the band and never stayed in it long enough.', 'Open "What changes this?" under Growth: the goal is a steady share, not a fast or slow one.']
  };
  function examTips(own) { var t = {}, k; for (k in EXAM_TIPS) t[k] = EXAM_TIPS[k]; for (k in own) t[k] = own[k]; return t; }
  function crash(tick, dur, bd) { return { type: 'bust', tick: tick, announce: tick - 20, rMult: 0, aMult: 0, depth: 0.945, dur: dur, bustDeath: bd }; }
  function exam(o) {
    var d = { id: o.id, title: o.title, exam: true, energy: o.energy, slots: EXAM_SLOTS, opens: [], reflexSlot: true, dials: ['pace', 'slop'], stats: ALL_STATS, checked: o.checked,
      ticks: 300, acid: o.acid, suspicion: true, channels: ALL_CHAN, problem: o.problem, goal: o.goal || BAND_GOAL,
      show: { pace: true, slop: true, metabolism: true, reflex: { bio: BIO_REFLEX, rule: true }, channels: ALL_CHAN,
        shelves: { biology: ['respiration', 'fermentation', 'pump', 'lipids', 'acidproof', 'quorum', 'naps', 'wall'], machine: ['fuelcell', 'clock', 'shell', 'radio', 'copier', 'repair'] } },
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ALL_PARTS, bio: BIO_REFLEX, sensors: SENSORS, actions: ACTIONS },
      band: BAND, event: o.events ? o.events[0] : NONE, tips: examTips(o.tips || {}), tipFixes: {}, fixes: [], notebook: o.notebook };
    if (o.events) d.events = o.events;
    d.peakSafe = 6;   // exam dishes: Smell and Naturalness count as safe only while their weighted peak is under 6 (the usual line is 7.5), because on these dishes several channels share the 8 that ends a run
    ['abundance', 'acidLoad', 'regWeight'].forEach(function (k) { if (o[k] != null) d[k] = o[k]; });
    return d;
  }
  DISHES.push(
    exam({ id: 6, tips: {
        acid: ['The acid is much stronger here, and your defence was not enough to stop it dissolving you.', 'A thin membrane will not do in this acid. Look at the Envelope and Insides slots, and at what a full defence takes from your energy and your births.'],
        below: ['Your colony faded out of the band. Holding this acid out costs births, and yours could not replace the losses.', 'Check what your defence takes from Growth, then look at Pace and Sloppiness: a cell can pay for protection in births, but not more than it earns.'],
        starved: ['Your colony faded out. Holding this acid out costs births, and yours could not replace the losses.', 'Check what your defence takes from Growth, then look at Pace and Sloppiness: a cell can pay for protection in births, but not more than it earns.'],
        'exposed:regularity': ['Your cells divided in step, and the inspector read that as a machine.', 'Look at the Division slot and the Sloppiness dial, and at which Machine cards you fitted to keep the acid out: some of them look plainly like machine parts.']
      }, title: 'Strong Acid', energy: 5, acid: 0.8, acidLoad: 1.8, checked: ['acid', 'growth', 'smell', 'natural'],
      problem: 'The acid is much stronger here. A thin membrane is not enough, and holding the acid out takes more from you.', notebook: 'Acid-loving archaea such as Picrophilus grow in acid roughly as strong as battery acid, and can still grow at around pH 0. Holding any difference in acidity between a cell and its surroundings costs continuous proton pumping, so protection is paid for in energy all the time. Picrophilus lowers the bill by letting its insides go acidic too, but that means building every protein to cope with acid. In Gastropolis a thin membrane is not enough in strong acid, and every full defence costs something: energy, growth, or looking like a machine.' }),
    exam({ id: 7, tips: {
        acid: ['The acid got in. Your defence was too weak, or your energy would not stretch to a better one.', 'Energy is 2 on this dish, so every card is a trade. Check what each defence costs before you fit it, and what a different Power card could save.'],
        below: ['Your colony was too slow to last. A defence plus a tight energy budget left you with too few births.', 'Check what each card takes from Growth. The Pace dial, and your Power card, change how many births the same energy buys.'],
        starved: ['Your colony was too slow to last. A defence plus a tight energy budget left you with too few births.', 'Check what each card takes from Growth. The Pace dial, and your Power card, change how many births the same energy buys.'],
        'exposed:regularity': ['Your cells divided in step, and the inspector read that as a machine.', 'A cheap card can be a machine part. Look at the Division slot and the Sloppiness dial before you trust a cheap card.'],
        'exposed:growth': ['You were dividing at a rate the natives do not, and the lab noticed.', 'Open "What changes this?" under Growth. With energy this tight, what you cut changes your births as much as the Pace dial does.']
      }, title: 'Lean Times', energy: 2, acid: 0.5, acidLoad: 1.8, checked: ['acid', 'growth', 'smell', 'natural'],
      abundance: { food: 13, crowd: 2.8, death: 0.02, cross: 6, run: 15, runFrom: 0.8 },
      problem: 'Food is plentiful again, but your energy budget has been cut.', notebook: "Everything a cell builds has to be paid for out of the energy it can make, so a cell cannot have every defence at once. Picrophilus shows the price of going all in: it is so specialised for acid that it cannot grow above pH 4.0, trapped in its niche. A bigger protein set and a tighter membrane mean less energy for everything else. In Gastropolis the lab has cut your energy, and the cells that pass are the ones that cover a missing part's job some other way." }),
    exam({ id: 8, tips: {
        acid: ['The acid dissolved you before the crashes even mattered.', 'The acid is not strong, but it is still there. Look at the Envelope and Insides slots for something that keeps it out, then deal with the crashes.'],
        bust: ['The food crashed and your share fell out of the band: your cell did not react in time.', 'The Reflex slot decides this. A cell with no reflex rides the crash down. If you have one, ask whether it senses hunger and acts before the share drops, and whether it does so for both crashes.'],
        below: ['Your colony fell below the band and did not come back after the food crashed.', 'Look at the Reflex slot, and at what your build can do while food is short. The Biology shelf has reflexes that sense hunger.'],
        starved: ['Your colony died out through the food crashes.', 'Look at the Reflex slot, and at what your build can do while food is short. The Biology shelf has reflexes that sense hunger.'],
        'exposed:regularity': ['Your cells divided in step, and the inspector read that as a machine.', 'Look at the Division slot, the Sloppiness dial, and the Machine cards you added: a reflex rule that fires everywhere at once also looks like a machine.']
      }, title: 'Twice Bitten', energy: 5, acid: 0.5, checked: ALL_STATS, events: [crash(35, 100, 0.03), crash(145, 100, 0.03)],
      problem: 'The food crashes twice, close together.', goal: 'Stay in the band through both food crashes.', notebook: 'Bacteria hedge their bets. In a growing Escherichia coli colony a small fraction of cells at random stop growing for a while: they forgo growth while their neighbours multiply, but they survive attacks that kill growing cells, and wake to rebuild the colony. Bacillus subtilis makes spores when it starves, but making one takes hours and cannot be undone, and waking one costs a full rebuild, so a spore cannot take advantage of a brief return of food. In Gastropolis a colony that sleeps through both crashes is still there when the natives have starved, and ends up looking like a take-over.' }),
    exam({ id: 9, tips: {
        acid: ['The acid got in. Your defence was too weak, or your energy would not stretch to a better one.', 'Energy is 3 on this dish, so every card is a trade. Check what each defence costs before you fit it.'],
        starved: ['Your colony died out. With energy this tight, there were too few births to survive.', 'Check what each card takes from Growth, then look at the Pace dial and your Power card.'],
        below: ['Your colony faded out of the band. With energy this tight, there were too few births.', 'Check what each card takes from Growth, then look at the Pace dial and your Power card.'],
        'exposed:regularity': ['Your cells divided too neatly, and this inspector reads even a little order as a machine.', 'Perfect timing is the tell. Look at the Sloppiness dial, at your Division card, and at any Machine card that adds order. Real colonies are messy.']
      }, title: 'The Inspector', energy: 3, acid: 0.5, regWeight: 2, checked: ['acid', 'growth', 'smell', 'natural'],
      problem: 'The inspector is stricter about anything that looks like a machine, and your energy is tight.', notebook: 'Cells in one population differ even when they have the same genes. Single-cell microscopy of Escherichia coli showed cells switching at random between a growing state and a non-growing state, and the sleepers were as drug-sensitive as their parents once they woke, so this variety is not genetic. A real colony is never uniform. In Gastropolis the inspector expects that mess, and a colony whose units behave in perfect step looks like a machine.' }),
    exam({ id: 10, tips: {
        acid: ['The acid dissolved you. It is the strongest in the city, and a plain defence does not hold it out.', 'Look at the Envelope and Insides slots, and at what a full defence costs in energy and births. Then there is still a crash to get through.'],
        starved: ['Your colony died out. Holding this acid out, with a crash on top, took more than your births could pay.', 'Every defence costs energy or births, and the crash is coming. Check Pace, your Power card, and the Reflex slot.'],
        below: ['Your colony fell below the band and did not come back.', 'Look at what the defence takes from Growth, and at the Reflex slot: the food crash is where cells on this dish usually go under.'],
        bust: ['The food crashed and your share fell out of the band: your cell did not react in time.', 'The Reflex slot decides this. The Biology shelf has reflexes that sense hunger, but strong acid and a strict inspector leave little room to fit one, so something else has to give.'],
        'exposed:regularity': ['Your cells divided too neatly, and this inspector reads even a little order as a machine.', 'Perfect timing is the tell. Look at the Sloppiness dial, at your Division card, and at any Machine card, including a reflex rule that fires everywhere at once.']
      }, title: 'Greetings from Gastropolis', energy: 5, acid: 0.8, acidLoad: 2.4, regWeight: 2, checked: ALL_STATS, events: [crash(50, 85, 0.05)],
      abundance: { food: 13, crowd: 2.8, death: 0.02, cross: 6, run: 15, runFrom: 0.8 },
      problem: 'Strong acid, plentiful food, a food crash and a strict inspector, all at once.', goal: 'Stay in the band through the food crash.', notebook: 'A summary from the lab. Acid-lovers such as Picrophilus pay energy or build a whole acid-proof set of proteins. Escherichia coli and Bacillus subtilis hedge against hunger with sleepers and spores. Aliivibrio fischeri in a bobtail squid count their neighbours, and the squid vents about 90% of them every dawn so the colony never grows without limit. No living cell has everything: each defence costs energy, growth, or a place in the dish. A passing local is one that balanced them.' })
  );

  function dish(id) { for (var i = 0; i < DISHES.length; i++) if (DISHES[i].id === id) return DISHES[i]; return null; }
  function mk(pace, slop, met, parts, reflex) { return { pace: pace, slop: slop, metabolism: met, parts: parts, reflex: reflex || null }; }
  // The simplest intended winner of each dish: the build that starts the next one. carry(1) is the Factory unit.
  var CARRY = {
    1: mk(4, 0, 'respiration', ['clock']),
    2: mk(4, 0, 'respiration', ['clock', 'pump']),                // dish 1: add the Proton pump
    3: mk(2, 0, 'respiration', ['clock', 'pump']),                // dish 2: Pace down to 2
    4: mk(2, 0, 'fermentation', ['clock', 'pump']),               // dish 3: swap to Fermentation
    5: mk(2, 0, 'fermentation', ['pump']),                        // dish 4: remove the Crystal clock
    // Exam dishes: the simplest winner of the dish before (fewest parts, lowest energy, dials nearest the factory settings).
    6: mk(2, 0, 'fermentation', ['pump'], { kind: 'bio', id: 'stringent' }),   // dish 5: the pace 2 pump cell plus the Stringent response
    7: mk(4, 0, 'fermentation', ['pump']),                        // dish 6: the pump, with Pace back at the factory 4 (the pump's cost makes Pace 2 too slow)
    8: mk(5, 2, 'fermentation', ['pump']),                        // dish 7: Pace 5 and Sloppiness 2 hold the band on energy 2
    9: mk(5, 2, 'fermentation', ['pump'], { kind: 'bio', id: 'stringent' }),   // dish 8: the same cell plus the Stringent response
    10: mk(3, 3, 'fermentation', ['pump'])                        // dish 9: Sloppiness 3 stands in for the machine parts
  };
  // A known-legal cell for each exam dish that loses it the way the stat bars explain. For dishes 1 to 5 it is the carried build.
  var STANDARD = {
    6: mk(4, 0, 'fermentation', ['lipids']),                      // Tight membrane alone: Acid defence too low
    7: mk(2, 0, 'fermentation', ['pump']),                        // too slow for the pump's cost: Growth too slow, then Naturalness
    8: mk(3, 2, 'fermentation', ['pump']),                        // no reflex: Crash survival too low
    9: mk(3, 0, 'fermentation', ['pump']),                        // perfectly regular timing: Naturalness too low
    10: mk(3, 2, 'fermentation', ['pump'])                        // no reflex under strong acid and a strict inspector: Crash survival and Naturalness too low
  };
  function standard(id) { var c = STANDARD[id] || CARRY[id]; return c ? JSON.parse(JSON.stringify(c)) : null; }
  function carry(id) { var c = CARRY[id]; return c ? JSON.parse(JSON.stringify(c)) : null; }
  // Apply a fix (or tip fix) to a build: returns a new build.
  function applyFix(build, fix) {
    var b = JSON.parse(JSON.stringify(build)), c = fix.changes || {};
    if (c.set) for (var k in c.set) b[k] = c.set[k];
    if (c.remove) b.parts = b.parts.filter(function (id) { return c.remove.indexOf(id) < 0; });
    if (c.add) c.add.forEach(function (id) { if (b.parts.indexOf(id) < 0) b.parts.push(id); });
    if (c.reflex) b.reflex = JSON.parse(JSON.stringify(c.reflex));
    return b;
  }
  // Tip for a loss cause (the cause string from LookAlive.autopsy): exact match, then 'other'. Returns [level1, level2].
  function tip(dishObj, cause) { var t = dishObj.tips; return t[cause] || t.other; }

  return { PLANET: PLANET, WORLD: WORLD, FACTORY: FACTORY, SLOT_ORDER: SLOT_ORDER, DISHES: DISHES, dish: dish, carry: carry, standard: standard, applyFix: applyFix, tip: tip };
})();
if (typeof module !== 'undefined') module.exports = LookAliveLevels;

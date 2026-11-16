// Look Alive: the planet and the dishes. Data only, no logic except a lookup helper.
// Plain script: global LookAliveLevels in a browser, module.exports in Node.
var LookAliveLevels = (function () {
  'use strict';

  // One planet (Acidica), one native species. Every number here is a tuning knob of the simulation.
  var PLANET = {
    name: 'Acidica',
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
  var ALL_PARTS = ['wall', 'quorum', 'errors', 'flagellum', 'clock', 'radio', 'copier', 'repair', 'pump', 'lipids', 'shell'];
  var BIO_REFLEX = ['stringent', 'chemotaxis', 'sos'];
  var SENSORS = ['food', 'density', 'native', 'share', 'susp_growth', 'susp_waste', 'ttev'];
  var ACTIONS = ['pause', 'fast', 'sloppy', 'toward', 'away'];

  var WORLD = {
    name: 'Acidica',
    facts: [
      'The water is acid. Anything unprotected dissolves.',
      'Food is everywhere, and nothing here eats microbes. The locals keep their own numbers down.',
      'Everyone leaves a sour trail. A cell with the wrong waste, or no waste, stands out.'
    ],
    mission: 'A lab on Acidica keeps these dishes. Pass as a local and you get a page of their notebook.'
  };

  // Fix = { id, label, changes: { set: {pace, slop, metabolism}, add: [part ids], remove: [part ids], reflex: {...} }, heavy? }.
  // `heavy` marks a route that needs more than two changes.
  var DISHES = [
    { id: 1, title: "Don't Dissolve", energy: 3, partSlots: 2, reflexSlot: false, dials: [],
      ticks: 300, acid: 0.35, aliveOnly: true, suspicion: false, channels: [],
      problem: 'The water is acid. A cell with nothing to keep the acid out dissolves.',
      goal: 'Be alive at the end of the run.',
      show: { partSlots: 2, pace: false, slop: false, metabolism: false, reflex: false, channels: [],
        shelves: { biology: ['pump', 'lipids'], machine: ['clock', 'shell'] } },
      allowed: { metabolism: ['respiration'], parts: ['clock', 'pump', 'lipids', 'shell'], bio: [], sensors: [], actions: [] },
      band: { lo: 0.05, hi: 0.15, need: 0, warm: 30 }, event: NONE,
      tips: {
        acid: ['The acid is getting in. Nothing in your cell keeps it out.', 'Try the Proton pump on the Biology shelf. The Tight membrane and the Sealed shell also help.'],
        other: ['Your colony is too small to last.', 'Keep a full acid defence, the Proton pump or the Sealed shell, and keep the Pace at 4.']
      },
      tipFixes: { acid: ['pump', 'lipids', 'shell'] },
      fixes: [
        { id: 'pump', label: 'Add the Proton pump', changes: { add: ['pump'] } },
        { id: 'lipids', label: 'Add the Tight membrane (barely enough)', changes: { add: ['lipids'] } },
        { id: 'shell', label: 'Add the Sealed shell', changes: { add: ['shell'] } }
      ],
      notebook: 'Some microbes thrive in water as acidic as stomach acid. They keep their insides close to neutral by pumping protons out of the cell, and some build membranes of tightly packed lipids that acid can barely cross. Both defences cost energy, which is one reason acid-loving microbes grow slowly. On Acidica the acid is stronger than anything in nature, and a ceramic shell would beat it, but no real cell has one.' },
    { id: 2, title: "Don't Take Over", energy: 5, partSlots: 3, reflexSlot: false, dials: ['pace'],
      ticks: 300, acid: 0.35, abundance: { food: 4, crowd: 2.5, death: 0.02, cross: 6 }, suspicion: true, channels: ['casualties'],
      problem: 'Food is everywhere and nothing eats you, so a cell that divides at its usual pace floods the dish.',
      goal: BAND_GOAL,
      show: { partSlots: 3, pace: true, slop: false, metabolism: false, reflex: false, channels: ['casualties'],
        shelves: { biology: ['pump', 'lipids', 'quorum'], machine: ['clock', 'shell', 'radio'] } },
      allowed: { metabolism: ['respiration'], parts: ['clock', 'pump', 'lipids', 'shell', 'quorum', 'radio'], bio: [], sensors: [], actions: [] },
      band: BAND, event: NONE,
      tips: {
        'exposed:casualties': ['Your colony is taking over the dish. There is plenty of food and nothing to hold you back.', 'Turn the Pace down to 2, or add the Quorum signal on the Biology shelf.'],
        overgrew: ['Your colony is taking over the dish. There is plenty of food and nothing to hold you back.', 'Turn the Pace down to 2, or add the Quorum signal on the Biology shelf.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little: Pace 2 or 3 is about right.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { 'exposed:casualties': ['pace', 'quorum'], overgrew: ['pace', 'quorum'] },
      fixes: [
        { id: 'pace', label: 'Turn Pace down to 2', changes: { set: { pace: 2 } } },
        { id: 'quorum', label: 'Add the Quorum signal', changes: { add: ['quorum'] } },
        { id: 'radio', label: 'Add the Radio mesh (Machine answer)', changes: { add: ['radio'] } }
      ],
      notebook: 'A growing population follows an S-shaped curve: slow at first, fast while food is plentiful, then flat at the carrying capacity, the most the habitat can feed. With nothing to hold it back, a population overshoots that limit and then crashes as it runs out of food. Real populations are held in check by food, disease and predators. On Acidica the locals keep their own numbers down and nothing keeps yours down, so you have to do it yourself.' },
    { id: 3, title: 'Smell Right', energy: 5, partSlots: 3, reflexSlot: false, dials: ['pace'],
      ticks: 300, acid: 0.35, suspicion: true, channels: ['casualties', 'waste'],
      problem: 'Everyone on Acidica leaves the same sour trail. Your cell leaves a different one.',
      goal: BAND_GOAL,
      show: { partSlots: 3, pace: true, slop: false, metabolism: true, reflex: false, channels: ['casualties', 'waste'],
        shelves: { biology: ['respiration', 'fermentation', 'pump', 'lipids', 'quorum'], machine: ['fuelcell', 'clock', 'shell', 'radio'] } },
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ['clock', 'pump', 'lipids', 'shell', 'quorum', 'radio'], bio: [], sensors: [], actions: [] },
      band: BAND, event: NONE,
      tips: {
        'exposed:waste': ['Your waste trail is wrong for Acidica. The locals smell it.', 'Swap Respiration for Fermentation in the Metabolism slot: its waste matches the natives\'.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little, or swap back to Respiration only if its waste is not a problem.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { 'exposed:waste': ['ferment'] },
      fixes: [
        { id: 'ferment', label: 'Swap Respiration for Fermentation', changes: { set: { metabolism: 'fermentation' } } }
      ],
      notebook: 'Cells with oxygen respire: they break sugar down completely and get about 15 times more energy than fermentation does. Without oxygen they ferment, which is fast and wasteful and leaves acids behind, such as lactic acid. The waste a cell leaves is a chemical fingerprint of how it makes its energy. On Acidica the locals ferment, so their trail is sour, and a cell that respires leaves a different trail.' },
    { id: 4, title: 'Be Messy', energy: 6, partSlots: 3, reflexSlot: false, dials: ['pace', 'slop'],
      ticks: 300, acid: 0.35, suspicion: true, channels: ['casualties', 'waste', 'regularity'],
      problem: 'Machine parts make every cell divide on the same schedule. Real cells are messier.',
      goal: BAND_GOAL,
      show: { partSlots: 3, pace: true, slop: true, metabolism: true, reflex: false, channels: ['casualties', 'waste', 'regularity'],
        shelves: { biology: ['respiration', 'fermentation', 'pump', 'lipids', 'quorum', 'errors', 'wall', 'flagellum'], machine: ['fuelcell', 'clock', 'shell', 'radio', 'copier', 'repair'] } },
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ALL_PARTS, bio: [], sensors: [], actions: [] },
      band: BAND, event: NONE,
      tips: {
        'exposed:regularity': ['Your cells divide in perfect step. Nothing natural does that.', 'Take off the Crystal clock, or add Copying errors, or raise Sloppiness to 4 or more.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little, or take a slow part off.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { 'exposed:regularity': ['noclock', 'errors', 'slop'] },
      fixes: [
        { id: 'noclock', label: 'Remove the Crystal clock', changes: { remove: ['clock'] } },
        { id: 'errors', label: 'Add Copying errors', changes: { add: ['errors'] } },
        { id: 'slop', label: 'Raise Sloppiness to 4', changes: { set: { slop: 4 } } }
      ],
      notebook: 'No two cells in a colony are quite the same. Copying DNA is never perfect, and each cell divides at its own moment in its cycle. That variation is why real colonies look ragged, and why some cells survive when conditions change. On Acidica anything perfectly regular stands out, so a machine has to learn to be messy.' },
    { id: 5, title: 'When Things Change', energy: 6, partSlots: 3, reflexSlot: true, dials: ['pace', 'slop'],
      ticks: 300, acid: 0.5, suspicion: true, channels: ['growth', 'waste', 'casualties', 'regularity'],
      problem: 'Partway through the run the food crashes.',
      goal: 'Stay in the band through the food crash.',
      show: { partSlots: 3, pace: true, slop: true, metabolism: true, reflex: { bio: BIO_REFLEX, rule: true }, channels: ['growth', 'waste', 'casualties', 'regularity'],
        shelves: { biology: ['respiration', 'fermentation', 'pump', 'lipids', 'quorum', 'errors', 'wall', 'flagellum'], machine: ['fuelcell', 'clock', 'shell', 'radio', 'copier', 'repair'] } },
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ALL_PARTS, bio: BIO_REFLEX, sensors: SENSORS, actions: ACTIONS },
      band: BAND, event: { type: 'bust', tick: 50, announce: 30, rMult: 0, aMult: 0, depth: 0.945, dur: 85, bustDeath: 0.07 },
      tips: {
        bust: ['The food crashed and your cell had no way to react.', 'Put the Stringent response or the SOS response in the Reflex slot.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little, or put a reflex in the Reflex slot.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { bust: ['stringent', 'sos'] },
      fixes: [
        { id: 'stringent', label: 'Add the Stringent response', changes: { reflex: { kind: 'bio', id: 'stringent' } } },
        { id: 'sos', label: 'Add the SOS response', changes: { reflex: { kind: 'bio', id: 'sos' } } },
        { id: 'rule', label: 'Add a machine rule (pause when food is low) and push Pace and Sloppiness to 8', heavy: true,
          changes: { set: { pace: 8, slop: 8 }, reflex: { kind: 'machine', sensor: 'food', cmp: 'lt', value: 0.35, action: 'pause' } } }
      ],
      notebook: 'Bacteria sense their surroundings with chemistry: a receptor binds a molecule and the cell changes which genes are on within minutes. A starving cell makes an alarm signal, the stringent response, that pauses growth until food returns, and a damaged cell switches on repair, the SOS response. On Acidica the locals react in a few ticks and only to what is near them, so a unit that reacts to things it could not know gives itself away.' }
  ];

  function dish(id) { for (var i = 0; i < DISHES.length; i++) if (DISHES[i].id === id) return DISHES[i]; return null; }
  function mk(pace, slop, met, parts, reflex) { return { pace: pace, slop: slop, metabolism: met, parts: parts, reflex: reflex || null }; }
  // The simplest intended winner of each dish: the build that starts the next one. carry(1) is the Factory unit.
  var CARRY = {
    1: mk(4, 0, 'respiration', ['clock']),
    2: mk(4, 0, 'respiration', ['clock', 'pump']),                // dish 1: add the Proton pump
    3: mk(2, 0, 'respiration', ['clock', 'pump']),                // dish 2: Pace down to 2
    4: mk(2, 0, 'fermentation', ['clock', 'pump']),               // dish 3: swap to Fermentation
    5: mk(2, 0, 'fermentation', ['pump'])                         // dish 4: remove the Crystal clock
  };
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

  return { PLANET: PLANET, WORLD: WORLD, DISHES: DISHES, dish: dish, carry: carry, applyFix: applyFix, tip: tip };
})();
if (typeof module !== 'undefined') module.exports = LookAliveLevels;

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
  var ALL_PARTS = ['wall', 'quorum', 'naps', 'clock', 'radio', 'copier', 'repair', 'pump', 'lipids', 'acidproof', 'shell'];
  // The Motor slot is locked on this planet, so the Flagellum is not offered. Offered cards = this list, intersected with the open slots.
  var BIO_REFLEX = ['stringent', 'sporulate', 'sos'];
  var SENSORS = ['food', 'density', 'native', 'share', 'susp_growth', 'susp_waste', 'ttev'];
  var ACTIONS = ['pause', 'fast', 'sloppy', 'toward', 'away'];
  // The Factory unit comes with Respiration in Power and the Sync pulse in Division. A slot that is not open yet is locked with its factory part fitted.
  var FACTORY = { power: 'respiration', division: 'clock' };
  var SLOT_ORDER = ['power', 'envelope', 'insides', 'division', 'signal', 'motor', 'reflex'];

  var WORLD = {
    name: 'Acidica',
    facts: [
      'The water is acid. Anything unprotected dissolves.',
      'Food is everywhere, and nothing here eats microbes. The locals keep their own numbers down.',
      'Everyone leaves a sour trail. A cell with the wrong waste, or no waste, stands out.'
    ],
    badge: 'The locals can tell you apart because real colonies can: Proteus mirabilis swarms check each other\'s identity proteins, and a visible border line forms between strangers.',
    mission: 'A lab on Acidica keeps these dishes. Pass as a local and you get a page of their notebook.'
  };

  // Fix = { id, label, changes: { set: {pace, slop, metabolism}, add: [part ids], remove: [part ids], reflex: {...} }, heavy? }.
  // `heavy` marks a route that needs more than two changes.
  var DISHES = [
    { id: 1, title: "Don't Dissolve", energy: 4, slots: ['envelope', 'insides'], opens: ['envelope', 'insides'], reflexSlot: false, dials: [],
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
      notebook: 'Picrophilus torridus is an archaeon that grows best in acid roughly as strong as battery acid, and can still grow at around pH 0. Most acid-loving microbes keep their insides near neutral by pumping acid back out, which costs energy all the time, but Picrophilus lets its insides go acidic too and builds every protein to cope, inside a membrane that lets almost no acid through. On Acidica the water dissolves anything unprotected, and a sealed ceramic shell would keep it out completely, while a real cell can never be sealed: even a diatom\'s glass shell is full of pores so life can pass through.' },
    { id: 2, title: "Don't Take Over", energy: 5, slots: ['envelope', 'insides', 'signal'], opens: ['signal'], reflexSlot: false, dials: ['pace'],
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
      notebook: 'Aliivibrio fischeri bacteria live packed inside the light organ of the bobtail squid, and every dawn the squid vents about 90% of them and lets the survivors regrow. Each bacterium leaks a small molecule and listens for it, so once enough of them are crowded together they all switch on their lights at the same moment. A colony never grows without limit: in the squid something always resets it. On Acidica the locals keep their own numbers down and nothing keeps yours down, so you have to do it yourself.' },
    { id: 3, title: 'Smell Right', energy: 5, slots: ['power', 'envelope', 'insides', 'signal'], opens: ['power'], reflexSlot: false, dials: ['pace'],
      ticks: 300, acid: 0.35, suspicion: true, channels: ['casualties', 'waste'],
      problem: 'Everyone on Acidica leaves the same sour trail. Your cell leaves a different one.',
      goal: BAND_GOAL,
      show: { pace: true, slop: false, metabolism: true, reflex: false, channels: ['casualties', 'waste'],
        shelves: { biology: ['respiration', 'fermentation', 'pump', 'lipids', 'acidproof', 'quorum'], machine: ['fuelcell', 'clock', 'shell', 'radio'] } },
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ['clock', 'pump', 'lipids', 'acidproof', 'shell', 'quorum', 'radio'], bio: [], sensors: [], actions: [] },
      band: BAND, event: NONE,
      tips: {
        'exposed:waste': ['Your waste trail is wrong for Acidica. The locals smell it.', 'Swap Respiration for Fermentation in the Power slot: its waste matches the natives\'.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.']
      },
      tipFixes: { 'exposed:waste': ['ferment'] },
      fixes: [
        { id: 'ferment', label: 'Swap Respiration for Fermentation', changes: { set: { metabolism: 'fermentation' } } }
      ],
      notebook: 'Lactic acid bacteria ferment sugar without oxygen, which is fast and gets little energy out of it, and they leave lactic acid behind. Cells that use oxygen break sugar down completely and get far more energy from the same meal. The waste a cell leaves is a chemical fingerprint of how it makes its energy. On Acidica the locals ferment, so everyone leaves the same sour trail, and a cell that respires leaves a different one.' },
    { id: 4, title: 'Be Messy', energy: 6, slots: ['power', 'envelope', 'insides', 'division', 'signal'], opens: ['division'], reflexSlot: false, dials: ['pace', 'slop'],
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
      notebook: 'In a growing colony of Escherichia coli, a small fraction of cells at random stop growing for a while. Those sleepers survive drugs that attack growing cells, and when the drug is washed away they wake and rebuild the colony. This variety is not genetic: once they wake, the sleepers are as drug-sensitive as their parents. On Acidica anything perfectly regular stands out, so a machine has to learn to be messy.' },
    { id: 5, title: 'When Things Change', energy: 6, slots: ['power', 'envelope', 'insides', 'division', 'signal', 'reflex'], opens: ['reflex'], reflexSlot: true, dials: ['pace', 'slop'],
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
      notebook: 'When it starves, Bacillus subtilis builds a tough spore, packs a copy of its DNA inside, and lets the mother cell dissolve away. The spore has almost no water and no metabolism, and it can survive boiling, drying and radiation for a very long time. Making one takes hours and cannot be undone, and waking one costs a full rebuild, so a spore cannot take advantage of a brief return of food. On Acidica the locals react in a few ticks and only to what is near them, so a unit that reacts to things it could not know gives itself away.' }
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

  return { PLANET: PLANET, WORLD: WORLD, FACTORY: FACTORY, SLOT_ORDER: SLOT_ORDER, DISHES: DISHES, dish: dish, carry: carry, applyFix: applyFix, tip: tip };
})();
if (typeof module !== 'undefined') module.exports = LookAliveLevels;

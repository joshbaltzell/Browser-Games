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
      death: 0.04, crowd: 0.20, cross: 0.05,            // robot crowding is mostly on themselves: the coexistence rule
      paceBase: 0.72, pacePer: 0.07,                    // births multiplier = paceBase + pacePer * pace (pace 4 = 1.0)
      slopCost: 0.02,                                   // each slop step: births -2%
      sigmaBase: 0.0025, sigmaPerSlop: 0.0059375        // timing noise sd (slop 8 = the natives' 0.05)
    },
    quorum: { emit: 0.5, decay: 0.10, diffuse: 0.12, max: 0.45, half: 0.25 },
    radio: { target: 0.10, gain: 6, lo: 0.3, hi: 1.2 },
    senses: { foodAlpha: 0.30, noise: 0.20, attackAlpha: 0.30 },   // biology reflexes: delayed (about 3 ticks) and noisy
    event: { ramp: 10 },
    suspicion: {
      growthScale: 0.15, growthScaleSlow: 0.40, growthSlowMax: 1.8, wasteScale: 2.0, casualtyScale: 0.10,
      regTiming: 2.0, regFlat: 1.2, regFactory: 0.5, regRuleInstall: 0.2, regRuleFire: 0.9, flatRef: 0.004,
      flatWindow: 20,
      deadzone: [1.0, 1.0, 1.5, 0.5],       // growth, waste, casualties, regularity
      weight: [1.0, 1.0, 1.0, 2.0],
      cap: [6, 6, 6, 6],                    // soft cap on each channel's excess (compresses the top)
      fastKeep: 0.90, slowKeep: 0.99, slowGain: 0.02,
      stage: [1.5, 4.5, 8.0],               // curiosity, inspection, response
      kill: 0.004, killFrom: 8.0, killCap: 0.15, killTough: 0.25
    },
    extinct: 0.002
  };

  var NONE = { type: 'none', tick: -1, announce: -1, rMult: 0, aMult: 0, depth: 0, dur: 0, bustDeath: 0 };

  var DISHES = [
    { id: 0, title: 'Match the Ghost', energy: 0, partSlots: 0, reflexSlot: false, cannotFail: true, dials: ['pace'],
      ticks: 120, suspicion: false,
      allowed: { metabolism: ['respiration'], parts: [], bio: [], sensors: [], actions: [] },
      band: { lo: 0, hi: 1, need: 0, warm: 30 }, event: NONE,
      notebook: 'Bacteria multiply by binary fission: one cell grows, copies its DNA and splits in two, so a colony doubles again and again. With plenty of food the count climbs in a steep curve, and when food runs short the curve flattens. On Acidica the natives follow the same curve, so your units only have to divide at the same pace.' },
    { id: 1, title: 'Stay Small, Eat Quietly', energy: 3, partSlots: 2, reflexSlot: false, dials: ['pace', 'slop'],
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ['wall', 'quorum', 'errors', 'clock'], bio: [], sensors: [], actions: [] },
      band: { lo: 0.05, hi: 0.15, need: 0.7, warm: 30 }, event: NONE,
      notebook: 'Every habitat has a carrying capacity: the most cells its food can feed. Species that share a food supply compete, but a small group that eats a little can live alongside a bigger one. On Acidica the natives expect a small, quiet newcomer, and the immune system notices anyone whose waste or growth does not look like theirs.' },
    { id: 3, title: 'Be Messy', energy: 6, partSlots: 3, reflexSlot: false, dials: ['pace', 'slop'],
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ['wall', 'quorum', 'errors', 'flagellum', 'clock', 'radio', 'copier', 'repair'], bio: [], sensors: [], actions: [] },
      band: { lo: 0.05, hi: 0.15, need: 0.7, warm: 30 },
      event: { type: 'bloom', tick: 150, announce: 100, rMult: 0.25, aMult: 0.2, depth: 0, dur: 0, bustDeath: 0 },
      notebook: 'No two cells in a colony are quite the same, because copying DNA is imperfect and each cell lands at a slightly different moment in its cycle. That variation is why real colonies look ragged, and why some cells survive when conditions change. On Acidica anything perfectly regular stands out, so a machine has to learn to be messy.' },
    { id: 4, title: 'When Things Change', energy: 6, partSlots: 3, reflexSlot: true, dials: ['pace', 'slop'],
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell'], parts: ['wall', 'quorum', 'errors', 'flagellum', 'clock', 'radio', 'copier', 'repair'],
        bio: ['stringent', 'chemotaxis', 'sos'], sensors: ['food', 'density', 'native', 'share', 'susp_growth', 'susp_waste', 'ttev'],
        actions: ['pause', 'fast', 'sloppy', 'toward', 'away'] },
      band: { lo: 0.05, hi: 0.15, need: 0.7, warm: 30 },
      event: { type: 'bust', tick: 150, announce: 100, rMult: 0, aMult: 0, depth: 0.9, dur: 80, bustDeath: 0.075 },
      notebook: 'Bacteria sense their surroundings with chemistry: a receptor binds a molecule, and the cell changes what its genes are doing within moments. A starving cell makes an alarm signal that pauses growth, and a damaged cell switches on repair. On Acidica the natives react in a few ticks and only to what is near them, so a unit that reacts to things it could not know gives itself away.' }
  ];

  function dish(id) { for (var i = 0; i < DISHES.length; i++) if (DISHES[i].id === id) return DISHES[i]; return null; }

  return { PLANET: PLANET, DISHES: DISHES, dish: dish };
})();
if (typeof module !== 'undefined') module.exports = LookAliveLevels;

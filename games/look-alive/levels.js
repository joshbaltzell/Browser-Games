// Look Alive: the planet, the three dishes and the card vocabulary. Data only, no logic.
var LookAliveLevels = (function () {
  'use strict';

  // One planet, one native species. Every number here is a tuning knob of the rules spike.
  var PLANET = {
    ticks: 300,
    settle: 250,            // native-only ticks run once to reach the dish's starting state
    startShare: 0.09,       // robots start as this share of the dish
    foodHalf: 0.3,          // Kh: food level giving half speed
    regrow: 0.02,           // food regrowth per tick toward the patch cap (slow)
    foodDiffuse: 0.06, popDiffuse: 0.05, wasteDiffuse: 0.10, wasteDecay: 0.12,
    foodPerBirth: 0.2,      // food used per birth (before efficiency)
    cross: 0.5,             // competition coefficient between species (below 1: they can coexist)
    native: { rate: 0.12, death: 0.03, crowd: 0.042, mixA: 0.7, sigma: 0.05 },
    robot: {
      death: 0.02, crowd: 0.60, cross: 0.05,
      rateBase: 0.7, ratePerDiv: 0.25,      // division rate = native * (0.7 + 0.25 d)
      toughSlow: 0.04, toughDeath: 0.06,    // each toughness step: births -4%, base death -6%
      effBirth: 0.06, effWaste: 0.12,       // each efficiency step: births +6%, waste -12%
      jitSigma: 0.010, jitBase: 0.005, jitCost: 0.04,  // timing noise sd = 0.005 + 0.010 j; each step: births -4%
      wasteCost: 0.03,                      // each matching step: births -3%
      mixStart: 0.2,                        // robot waste mix (share of chemical A) with no matching; 3 steps match the natives
      wasteSteps: 3,
      fastMult: 1.6, matchCost: 0.15, awayMove: 0.15
    },
    suspicion: {
      growthScale: 0.15, wasteScale: 0.012, casualtyScale: 0.0012, regularityGain: 1.6,
      deadzone: [1.0, 1.0, 1.0, 0.5],       // growth, waste, casualties, regularity
      weight: [1.0, 1.5, 1.0, 2.4],
      fastKeep: 0.90, slowKeep: 0.994, slowGain: 0.012,
      stage: [1.5, 4.5, 8.0],               // curiosity, inspection, response
      kill: 0.08, killTough: 0.5, window: 20
    },
    band: { lo: 0.05, hi: 0.15, need: 0.7, warm: 30 },
    extinct: 0.002          // robot or native density below this means that species is gone
  };

  var ATTR = ['div', 'tough', 'eff', 'jit', 'waste'];
  var ATTR_MAX = [4, 4, 4, 4, 3];

  var DISHES = [
    { id: 1, name: 'First Swab', slots: 0, budget: 9,
      event: { tick: -1, announce: -1, rMult: 0, aMult: 0 },
      blurb: 'Hold a 5 to 15 percent share. Match your waste to theirs. No surprises.' },
    { id: 2, name: 'Weather Turns', slots: 0, budget: 11,
      event: { tick: 150, announce: 100, rMult: 0.22, aMult: 0.0 },
      blurb: 'At tick 150 the natives bloom. A robust build rides it out.' },
    { id: 3, name: 'The Great Bloom', slots: 1, budget: 11,
      event: { tick: 150, announce: 100, rMult: 0.50, aMult: 0.2 },
      blurb: 'The bloom is too big for any fixed build. One reflex card is required.' }
  ];

  var SENSORS = [
    { id: 'density', name: 'own density here', values: [0.05, 0.1, 0.2, 0.4] },
    { id: 'share', name: 'own share here', values: [0.04, 0.07, 0.12, 0.2] },
    { id: 'food', name: 'food here', values: [0.15, 0.3, 0.5, 0.8] },
    { id: 'native', name: 'native density here', values: [0.8, 1.0, 1.2, 1.5] },
    { id: 'susp_growth', name: 'growth suspicion', values: [0.5, 1, 2] },
    { id: 'susp_waste', name: 'waste suspicion', values: [0.5, 1, 2] },
    { id: 'susp_casualties', name: 'casualties suspicion', values: [0.5, 1, 2] },
    { id: 'susp_regularity', name: 'regularity suspicion', values: [0.5, 1, 2] },
    { id: 'phase', name: 'event phase (1 announced, 2 happened)', values: [0, 1] }
  ];
  var ACTIONS = ['pause', 'fast', 'waste', 'jitter', 'toward', 'away'];
  var ACTION_NAMES = {
    pause: 'pause dividing', fast: 'divide faster', waste: 'switch waste to native mix',
    jitter: 'add jitter', toward: 'move toward food', away: 'move away from food'
  };

  // Every card the vocabulary can express: sensor x comparator x value x action.
  function allCards() {
    var out = [];
    for (var s = 0; s < SENSORS.length; s++) {
      for (var v = 0; v < SENSORS[s].values.length; v++) {
        for (var c = 0; c < 2; c++) {
          for (var a = 0; a < ACTIONS.length; a++) {
            out.push({ sensor: SENSORS[s].id, cmp: c ? '>' : '<', value: SENSORS[s].values[v], action: ACTIONS[a] });
          }
        }
      }
    }
    return out;
  }
  function cardText(r) {
    var sn = SENSORS.filter(function (x) { return x.id === r.sensor; })[0];
    return 'WHEN ' + sn.name + ' ' + r.cmp + ' ' + r.value + ' THEN ' + ACTION_NAMES[r.action];
  }

  // Every legal attribute allocation for a dish (each attribute within its max, total within the budget).
  function allBuilds(dish) {
    var out = [], a, b, c, d, e;
    for (a = 0; a <= ATTR_MAX[0]; a++) for (b = 0; b <= ATTR_MAX[1]; b++) for (c = 0; c <= ATTR_MAX[2]; c++)
      for (d = 0; d <= ATTR_MAX[3]; d++) for (e = 0; e <= ATTR_MAX[4]; e++) {
        if (a + b + c + d + e <= dish.budget) out.push({ div: a, tough: b, eff: c, jit: d, waste: e, rules: [] });
      }
    return out;
  }
  function spent(b) { return b.div + b.tough + b.eff + b.jit + b.waste; }

  return { PLANET: PLANET, DISHES: DISHES, SENSORS: SENSORS, ACTIONS: ACTIONS, ACTION_NAMES: ACTION_NAMES, ATTR: ATTR, ATTR_MAX: ATTR_MAX,
    allCards: allCards, cardText: cardText, allBuilds: allBuilds, spent: spent };
})();
if (typeof module !== 'undefined') module.exports = LookAliveLevels;

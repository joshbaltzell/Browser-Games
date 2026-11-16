// Look Alive: card data. Plain script: global LookAliveCards in a browser, module.exports in Node.
// The `fx` object on each card holds the numbers the simulation uses (sim.js reads them, predict() turns them into chips),
// so the card text and the model cannot drift apart. `effect` is the player-facing effect line from the spec.
var LookAliveCards = (function () {
  'use strict';

  var parts = [
    // ---- Biology shelf (safe from suspicion) ----
    { id: 'respiration', name: 'Respiration', shelf: 'biology', kind: 'metabolism', energy: 0, counterpart: 'fuelcell',
      real: 'Uses oxygen to get about 15 times more energy from sugar than fermentation does.',
      game: 'High yield. On Acidica the waste is wrong, so it raises Waste.',
      effect: 'Metabolism. Yield +20%. Waste mix differs from natives.',
      fx: { yield: 1.20, mix: 0.2, waste: 1 } },
    { id: 'fermentation', name: 'Fermentation', shelf: 'biology', kind: 'metabolism', energy: 0, counterpart: 'fuelcell',
      real: 'Breaks sugar down without oxygen. Fast, low yield, and it leaves acid behind.',
      game: 'Your waste matches the sour natives. You get fewer births per meal.',
      effect: 'Metabolism. Yield -15%. Waste mix equals natives.',
      fx: { yield: 0.85, mix: 0.7, waste: 1 } },
    { id: 'wall', name: 'Cell wall', shelf: 'biology', kind: 'part', energy: 2, counterpart: 'repair',
      real: 'A stiff mesh around the membrane that stops the cell bursting.',
      game: 'You survive the planet\'s events better. It costs energy to build, so you divide a little slower.',
      effect: 'Toughness +2. Births -6%.',
      fx: { births: 0.94, tough: 2 } },
    { id: 'quorum', name: 'Quorum signal', shelf: 'biology', kind: 'part', energy: 2, counterpart: 'radio',
      real: 'Cells leak a small molecule. When enough builds up, the whole group changes behaviour.',
      game: 'Your cells slow down where they are crowded. The signal is slow and fades with distance.',
      effect: 'Births fall as the local signal rises. The signal lags by a few ticks and diffuses.',
      fx: { quorum: 1 } },
    { id: 'errors', name: 'Copying errors', shelf: 'biology', kind: 'part', energy: 1, counterpart: 'copier',
      real: 'Copying DNA is not perfect. Mistakes make each cell slightly different.',
      game: 'Some daughters fail. That is normal, and it makes you look natural.',
      effect: 'Natural variance: lowers Regularity. Death rate up slightly.',
      fx: { sigma: 0.02, deathAdd: 0.008 } },
    { id: 'flagellum', name: 'Flagellum', shelf: 'biology', kind: 'part', energy: 2, counterpart: null,
      real: 'A spinning tail driven by a tiny motor. Bacteria run, tumble and run again, drifting toward food.',
      game: 'Your colony spreads toward food.',
      effect: 'Movement biased toward food. Births -4%.',
      fx: { births: 0.96, moveFood: 0.06 } },

    // ---- Machine shelf (powerful, raises Regularity) ----
    { id: 'fuelcell', name: 'Fuel cell', shelf: 'machine', kind: 'metabolism', energy: 1, counterpart: 'respiration',
      real: 'No cell does this. It burns sugar completely and leaves nothing.',
      game: 'Best yield. You leave no trail, and on Acidica everyone leaves a trail.',
      effect: 'Metabolism. Yield +35%. No waste: raises Waste strongly.',
      fx: { yield: 1.35, mix: 0.7, waste: 0, reg: 0.5 } },
    { id: 'clock', name: 'Crystal clock', shelf: 'machine', kind: 'part', energy: 1, counterpart: null,
      real: 'No cell has one. Every unit divides at the same instant.',
      game: 'No wasted cycles, so more growth. Dividing in unison is a tell.',
      effect: 'Births +15%. Regularity up.',
      fx: { births: 1.15, reg: 1.0 } },
    { id: 'radio', name: 'Radio mesh', shelf: 'machine', kind: 'part', energy: 2, counterpart: 'quorum',
      real: 'No cell has one. Every unit knows the exact head count at once.',
      game: 'Holds your share at a target. A perfectly flat line is a tell.',
      effect: 'Global feedback holds share near the band centre. Regularity up, more when the share graph is flat.',
      fx: { radio: 1, reg: 0.5 } },
    { id: 'copier', name: 'Perfect copier', shelf: 'machine', kind: 'part', energy: 1, counterpart: 'errors',
      real: 'No cell has one. Copies never fail.',
      game: 'Nothing ever dies, so you grow faster. Nothing ever dying looks wrong.',
      effect: 'Death rate near zero. Regularity up strongly.',
      fx: { deathMult: 0.1, reg: 1.6 } },
    { id: 'repair', name: 'Self-repair', shelf: 'machine', kind: 'part', energy: 2, counterpart: 'wall',
      real: 'No cell does this so well. Damaged units rebuild themselves.',
      game: 'You shrug off the planet\'s events.',
      effect: 'Toughness +4. Regularity up.',
      fx: { tough: 4, reg: 0.8 } }
  ];

  // Counterpart links are symmetric pairs: fermentation/respiration with fuel cell, quorum with radio,
  // copying errors with perfect copier, cell wall with self-repair. The `counterpart` field above points one way for display.
  var pairs = [['respiration', 'fuelcell'], ['fermentation', 'fuelcell'], ['quorum', 'radio'], ['errors', 'copier'], ['wall', 'repair']];

  var bioReflexes = [
    { id: 'stringent', name: 'Stringent response', shelf: 'biology', sentence: 'When food here is low, pause dividing.',
      real: 'Starved bacteria make an alarm molecule that shuts growth down until food returns.',
      fx: { foodBelow: 0.30, softness: 0.10, deathMult: 0.12 } },
    { id: 'chemotaxis', name: 'Chemotaxis', shelf: 'biology', sentence: 'When food is richer nearby, move toward it.',
      real: 'Bacteria compare food now with a moment ago, and keep swimming while it improves.',
      fx: { move: 0.3 } },
    { id: 'sos', name: 'SOS response', shelf: 'biology', sentence: 'When under attack, stop dividing and repair.',
      real: 'Damage switches on repair genes and halts division until the damage is fixed.',
      fx: { attackAbove: 0.012, softness: 0.02, repair: 0.6, deathMult: 0.25 } }
  ];

  // Machine rule vocabulary. Readings are exact and instant; global and suspicion sensors are things no cell could know.
  var sensors = [
    { id: 'food', name: 'food here', global: false, values: [0.15, 0.25, 0.35, 0.5], unit: '', note: 'Local sugar. Natives settle near 0.4.' },
    { id: 'density', name: 'own density here', global: false, values: [0.05, 0.1, 0.2], unit: '', note: 'Your units per cell, against the natives\' normal of 1.' },
    { id: 'native', name: 'native density here', global: false, values: [0.6, 0.8, 1.0, 1.2], unit: '', note: 'Natives per cell, against their normal of 1.' },
    { id: 'share', name: 'own share of the dish', global: true, values: [0.05, 0.08, 0.10, 0.12, 0.15], unit: '', note: 'Global. No cell could know this.' },
    { id: 'susp_growth', name: 'Growth suspicion', global: true, values: [0.5, 1, 2], unit: '', note: 'Global. Reads the immune system\'s mind.' },
    { id: 'susp_waste', name: 'Waste suspicion', global: true, values: [0.5, 1, 2], unit: '', note: 'Global. Reads the immune system\'s mind.' },
    { id: 'ttev', name: 'ticks until the event', global: true, values: [10, 25, 50], unit: 'ticks', note: 'Global. Counts down to the next event, then reads 0.' }
  ];
  var actions = [
    { id: 'pause', name: 'pause dividing', note: 'Births stop where the rule fires, and idle units die more slowly.' },
    { id: 'fast', name: 'divide faster', note: 'Births x1.5 where the rule fires, and so are deaths: more daughters, more failures. Divides unusually fast: a Growth tell.' },
    { id: 'sloppy', name: 'add sloppiness', note: 'Adds timing noise where the rule fires, but a rule that fires is itself a tell.' },
    { id: 'toward', name: 'move toward food', note: 'Some units drift to the richest neighbour cell.' },
    { id: 'away', name: 'move away from natives', note: 'Some units drift to the emptiest neighbour cell.' }
  ];
  var ruleFx = { pauseDeath: 0.15, fastMult: 1.5, fastDeath: 1.5, sloppyBirths: 1.0, sloppySigma: 0.015, move: 0.15 };

  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function part(id) { return byId(parts, id); }
  function bio(id) { return byId(bioReflexes, id); }
  function sensor(id) { return byId(sensors, id); }
  function action(id) { return byId(actions, id); }
  function ruleText(r) {
    var s = sensor(r.sensor), a = action(r.action);
    return 'When ' + (s ? s.name : r.sensor) + ' is ' + (r.cmp === 'lt' ? 'less than' : 'more than') + ' ' + r.value + ', then ' + (a ? a.name : r.action) + '.';
  }

  return { parts: parts, pairs: pairs, bioReflexes: bioReflexes, sensors: sensors, actions: actions, ruleFx: ruleFx,
    part: part, bio: bio, sensor: sensor, action: action, ruleText: ruleText };
})();
if (typeof module !== 'undefined') module.exports = LookAliveCards;

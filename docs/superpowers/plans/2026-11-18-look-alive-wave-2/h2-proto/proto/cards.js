// Look Alive: card data. Plain script: global LookAliveCards in a browser, module.exports in Node.
// The `fx` object on each card holds the numbers the simulation uses (sim.js reads them, predict() turns them into chips),
// so the card text and the model cannot drift apart. `effect` is the player-facing effect line from the spec.
var LookAliveCards = (function () {
  'use strict';

  var parts = [
    // ---- Biology shelf (safe from suspicion) ----
    { id: 'respiration', slot: 'power', name: 'Respiration', shelf: 'biology', kind: 'metabolism', energy: 0, counterpart: 'fuelcell',
      real: 'Cells that use oxygen break sugar down completely and get far more energy from it than fermentation does.',
      game: 'High yield. Here the waste is wrong, so it raises Waste.',
      effect: 'Metabolism. Yield +20%. Waste mix differs from natives.',
      fx: { yield: 1.20, mix: 0.2, waste: 1 } },
    { id: 'fermentation', slot: 'power', name: 'Fermentation', shelf: 'biology', kind: 'metabolism', energy: 0, counterpart: 'fuelcell',
      real: 'Lactic acid bacteria break sugar down without oxygen. Fast, low yield, and it leaves acid behind.',
      game: 'Your waste matches the sour natives. You get fewer births per meal.',
      effect: 'Metabolism. Yield -15%. Waste mix equals natives.',
      fx: { yield: 0.85, mix: 0.7, waste: 1 } },
    { id: 'wall', slot: 'envelope', name: 'Cell wall', shelf: 'biology', kind: 'part', energy: 2, counterpart: 'repair',
      real: 'A stiff mesh around the membrane that stops the cell bursting.',
      game: 'You survive the events here better. It costs energy to build, so you divide a little slower.',
      effect: 'Toughness +2. Births -6%.',
      fx: { births: 0.94, tough: 2 } },
    { id: 'quorum', slot: 'signal', name: 'Head count (quorum signal)', shelf: 'biology', kind: 'part', energy: 2, counterpart: 'radio',
      real: 'Cells leak a small molecule and listen for it. Packed inside a bobtail squid, glowing Aliivibrio fischeri bacteria hear each other and all light up together.',
      game: 'Changed for the game: here the signal makes your cells slow down where they are crowded. It is slow and fades with distance.',
      effect: 'The Biology answer to overgrowth: births fall as the local signal rises. The signal lags by a few ticks and diffuses.',
      fx: { quorum: 1 } },
    // Random naps: a small, constant two-way flow between awake and napping. Napping cells do not eat or divide, are not hit by a food
    // crash and die at a fraction of the usual rate (death); they wake at `wake` a tick, but only when local food is back (wakeLo to wakeHi).
    { id: 'naps', slot: 'division', name: 'Random naps', shelf: 'biology', kind: 'part', energy: 1, counterpart: 'copier',
      real: 'In any colony a few cells randomly stop growing for a while. Sleepers survive what kills the rest, then wake and rebuild.',
      game: 'Some of your cells nap at random. You grow a little slower, you look natural, and the nappers ride out a food crash.',
      effect: 'Natural variance: lowers Regularity. Births -3%. A few cells nap and survive a food crash, then wake when food returns.',
      fx: { sigma: 0.03, births: 0.97, nap: { enter: 0.008, wake: 0.12, death: 0.6, wakeLo: 0.18, wakeHi: 0.33 } } },
    { id: 'pump', slot: 'envelope', name: 'Proton pump', shelf: 'biology', kind: 'part', energy: 2, counterpart: 'shell',
      real: 'Acid-loving archaea keep their insides near neutral by pumping acid back out. It costs a lot of energy.',
      game: 'You survive the acid. The pumping is expensive, so you divide slower.',
      effect: 'Full acid protection. Births -15%.',
      fx: { births: 0.85, acid: 1 } },
    { id: 'lipids', slot: 'envelope', name: 'Tight membrane', shelf: 'biology', kind: 'part', energy: 1, counterpart: 'shell',
      real: 'Acid-loving archaea such as Picrophilus build membranes that let almost no acid through.',
      game: 'Most of the acid stays out. Cheap, and not quite enough alone in strong acid.',
      effect: 'Blocks most acid. Births -5%.',
      fx: { births: 0.95, acid: 0.85 } },
    { id: 'acidproof', slot: 'insides', name: 'Acid-proof insides', shelf: 'biology', kind: 'part', energy: 3, counterpart: 'shell',
      real: 'Picrophilus lives in acid as strong as battery acid. It lets its insides go acidic too, and builds every protein to cope.',
      game: 'Nothing to pump and nothing to block: the acid cannot hurt you. Rebuilding everything is expensive, so it takes the most energy.',
      effect: 'Full acid protection. No cost to births, but the highest energy cost of the acid defences.',
      fx: { acid: 1 } },
    { id: 'flagellum', slot: 'motor', name: 'Flagellum', shelf: 'biology', kind: 'part', energy: 2, counterpart: null,
      real: 'A spinning tail driven by a tiny motor. Bacteria run, tumble and run again, drifting toward food.',
      game: 'Your colony spreads toward food.',
      effect: 'Movement biased toward food. Births -4%.',
      fx: { births: 0.96, moveFood: 0.06, grip: 0.5 } },

    // ---- habitat 2 (the banded water): heat, grazing, the Motor ----
    { id: 'chaperones', slot: 'insides', name: 'Heat-shock chaperones', shelf: 'biology', kind: 'part', energy: 2, counterpart: null, world: 2,
      real: '', game: '', effect: '', fx: { heat: 18, births: 0.97 } },
    { id: 'polyamines', slot: 'insides', name: 'Long polyamines', shelf: 'biology', kind: 'part', energy: 1, counterpart: null, world: 2,
      real: '', game: '', effect: '', fx: { heat: 10, births: 1.0 } },
    { id: 'tetraether', slot: 'envelope', name: 'Tetraether membrane', shelf: 'biology', kind: 'part', energy: 2, counterpart: null, world: 2,
      real: '', game: '', effect: '', fx: { heat: 22, births: 0.95 } },
    { id: 'heatps', slot: 'power', name: 'Heat-stable photosystem', shelf: 'biology', kind: 'metabolism', energy: 1, counterpart: null, world: 2,
      real: '', game: '', effect: '', fx: { yield: 1.0, mix: 0.7, waste: 1, heat: 14, coolBelow: 52, coolMult: 0.75 } },
    { id: 'pili', slot: 'motor', name: 'Twitching pili', shelf: 'biology', kind: 'part', energy: 2, counterpart: null, world: 2,
      real: '', game: '', effect: '', fx: { grip: 1, births: 0.96 } },
    { id: 'filament', slot: 'division', name: 'Filament form', shelf: 'biology', kind: 'part', energy: 1, counterpart: null, world: 2,
      real: '', game: '', effect: '', fx: { graze: 0.6, births: 0.95, sigma: 0.01 } },

    // ---- Machine shelf (powerful, raises Regularity) ----
    { id: 'fuelcell', slot: 'power', name: 'Fuel cell', shelf: 'machine', kind: 'metabolism', energy: 1, counterpart: 'respiration',
      real: 'No cell does this. It burns sugar completely and leaves nothing.',
      game: 'Best yield. You leave no trail, and here everyone leaves a trail.',
      effect: 'Metabolism. Yield +35%. No waste: raises Waste strongly.',
      fx: { yield: 1.35, mix: 0.7, waste: 0, reg: 0.5 } },
    { id: 'clock', slot: 'division', name: 'Sync pulse', shelf: 'machine', kind: 'part', energy: 1, counterpart: null,
      real: 'Real cells can keep time. One cyanobacterium runs a 24-hour clock on three proteins. Each cell still divides on its own schedule.',
      game: 'Every unit divides at the same instant, the way your colony thinks as one. No wasted cycles, but dividing in unison is a tell: the locals never do.',
      effect: 'Births +15%. Regularity up.',
      fx: { births: 1.15, reg: 0.8 } },
    { id: 'shell', slot: 'envelope', layers: 2, name: 'Sealed shell', shelf: 'machine', kind: 'part', energy: 1, counterpart: 'pump',
      real: 'Diatoms build glass shells, full of pores so life can pass through. This one is sealed solid, which nothing alive could survive.',
      game: 'Acid cannot hurt you and it costs nothing to run. It does not look like skin.',
      effect: 'Full acid protection. Regularity up, once Regularity is switched on.',
      fx: { acid: 1, reg: 0.8 } },
    { id: 'radio', slot: 'signal', name: 'Radio mesh', shelf: 'machine', kind: 'part', energy: 2, counterpart: 'quorum',
      real: 'No cell has one. Every unit knows the exact head count at once.',
      game: 'Holds your share at a target. A perfectly flat line is a tell.',
      effect: 'The Machine answer to overgrowth: global feedback holds share near the band centre. Regularity up, more when the share graph is flat.',
      fx: { radio: 1, reg: 0.8 } },
    { id: 'copier', slot: 'division', name: 'Perfect copier', shelf: 'machine', kind: 'part', energy: 1, counterpart: 'naps',
      real: 'No cell has one. Copies never fail.',
      game: 'Nothing ever dies, so you grow faster. Nothing ever dying looks wrong.',
      effect: 'Death rate near zero. Regularity up strongly.',
      fx: { deathMult: 0.1, reg: 1.6 } },
    { id: 'repair', slot: 'insides', name: 'Self-repair', shelf: 'machine', kind: 'part', energy: 2, counterpart: 'wall',
      real: 'No cell does this so well. Damaged units rebuild themselves.',
      game: 'You shrug off the events here.',
      effect: 'Toughness +4. Regularity up.',
      fx: { tough: 4, reg: 0.8 } }
  ];

  // Counterpart links are symmetric pairs: fermentation/respiration with fuel cell, quorum with radio, pump/lipids with shell,
  // random naps with perfect copier, cell wall with self-repair. The `counterpart` field above points one way for display.
  var pairs = [['respiration', 'fuelcell'], ['fermentation', 'fuelcell'], ['quorum', 'radio'], ['naps', 'copier'], ['wall', 'repair'], ['pump', 'shell'], ['lipids', 'shell'], ['acidproof', 'shell']];

  var bioReflexes = [
    { id: 'stringent', slot: 'reflex', name: 'Stringent response', shelf: 'biology', sentence: 'When food here is low, pause dividing.',
      real: 'Starved bacteria make an alarm molecule that shuts growth down until food returns.',
      fx: { foodBelow: 0.375, softness: 0.12, deathMult: 0.035 } },
    // Sporulate: below `foodBelow` (smoothly, over `softness`) a fraction `rate` of the awake colony a tick becomes spores. Spores do not eat,
    // divide or die. They wake at `wakeRate` a tick, only when food is back above `wakeAbove` (smoothly), so recovery is slow.
    { id: 'sporulate', slot: 'reflex', name: 'Sporulate', shelf: 'biology', sentence: 'When food runs out, turn part of the colony into spores.',
      real: 'Starving Bacillus subtilis cells seal a copy of their DNA inside a tough spore that can survive boiling, drying and radiation for a very long time. Making one takes hours and cannot be undone.',
      fx: { foodBelow: 0.34, softness: 0.1, rate: 0.25, wakeAbove: 0.32, wakeRate: 0.02 } },
    { id: 'sos', slot: 'reflex', name: 'SOS response', shelf: 'biology', sentence: 'When under attack, stop dividing and repair.',
      real: 'Damage switches on repair genes and halts division until the damage is fixed.',
      fx: { attackAbove: 0.0115, softness: 0.02, repair: 0.6, deathMult: 0.07 } }
    ,{ id: 'nightferm', slot: 'reflex', name: 'Night fermentation', shelf: 'biology', sentence: 'When the light goes, live on stored sugar.', world: 2,
      real: '', fx: { darkAbove: 0.2, softness: 0.3, store: 0.12, deathMult: 0.1 } }
  ];

  // Machine rule vocabulary. Readings are exact and instant; global and suspicion sensors are things no cell could know.
  var sensors = [
    { id: 'food', name: 'food here', global: false, values: [0.15, 0.25, 0.35, 0.5], unit: '', note: 'Local sugar. Natives settle near 0.4.' },
    { id: 'density', name: 'own density here', global: false, values: [0.05, 0.1, 0.2], unit: '', note: 'Your units per cell, against the natives\' normal of 1.' },
    { id: 'native', name: 'native density here', global: false, values: [0.6, 0.8, 1.0, 1.2], unit: '', note: 'Natives per cell, against their normal of 1.' },
    { id: 'share', name: 'own share of the dish', global: true, values: [0.05, 0.08, 0.10, 0.12, 0.15], unit: '', note: 'Global. No cell could know this.' },
    { id: 'susp_growth', name: 'Growth suspicion', global: true, values: [0.5, 1, 2], unit: '', note: 'Global. Reads the immune system\'s mind.' },
    { id: 'susp_waste', name: 'Waste suspicion', global: true, values: [0.5, 1, 2], unit: '', note: 'Global. Reads the immune system\'s mind.' },
    { id: 'temp', name: 'temperature here', global: false, values: [45, 50, 55, 60, 65], unit: 'C', note: 'Exact local water temperature. No cell reads heat like a thermometer.' },
    { id: 'ttev', name: 'ticks until the event', global: true, values: [10, 25, 50], unit: 'ticks', note: 'Global. Counts down to the next event, then reads 0.' }
  ];
  var actions = [
    { id: 'pause', name: 'pause dividing', note: 'Births stop where the rule fires, and idle units die more slowly.' },
    { id: 'fast', name: 'divide faster', note: 'Births x1.5 where the rule fires, and so are deaths: more daughters, more failures. Divides unusually fast: a Growth tell.' },
    { id: 'sloppy', name: 'add sloppiness', note: 'Adds timing noise where the rule fires, but a rule that fires is itself a tell.' },
    { id: 'toward', name: 'move toward food', note: 'Some units drift to the richest neighbour cell.' },
    { id: 'away', name: 'move away from natives', note: 'Some units drift to the emptiest neighbour cell.' },
    { id: 'hotter', name: 'move toward heat', note: 'Some units step to the hottest neighbour cell.' },
    { id: 'cooler', name: 'move toward cool', note: 'Some units step to the coolest neighbour cell.' }
  ];
  var ruleFx = { pauseDeath: 0.15, fastMult: 1.5, fastDeath: 1.5, sloppyBirths: 1.0, sloppySigma: 0.015, move: 0.15 };

  // The body slots (GAMEPLAY-V2 section 12). `where` is the place on the cell; `blurb` is the one-line job of the slot.
  var SLOTS = [
    { id: 'power', name: 'Power', where: 'the glowing core', blurb: 'How the cell makes its energy. Always one.', max: 1, empty: false },
    { id: 'envelope', name: 'Envelope', where: 'the outer skin', blurb: 'Up to two different layers of skin.', max: 2, empty: true },
    { id: 'insides', name: 'Insides', where: 'the fluid inside', blurb: 'What fills the cell.', max: 1, empty: true },
    { id: 'division', name: 'Division', where: 'the pinch at the middle', blurb: 'How the cell splits in two.', max: 1, empty: true },
    { id: 'signal', name: 'Signal', where: 'dots leaking from the surface', blurb: 'How cells tell each other how crowded it is.', max: 1, empty: true },
    { id: 'motor', name: 'Motor', where: 'the tail', blurb: 'How the cell moves.', max: 1, empty: true },
    { id: 'reflex', name: 'Reflex', where: 'a sensor patch on the skin', blurb: 'What the cell does when things change.', max: 1, empty: true }
  ];
  function slotInfo(id) { return byId(SLOTS, id); }
  // Every card that belongs in a slot (Biology first). The Reflex slot also takes a Machine rule, built on the page.
  function bySlot(slotId) {
    var list = slotId === 'reflex' ? bioReflexes.slice() : parts.filter(function (c) { return c.slot === slotId; });
    return list.sort(function (a, b) { return (a.shelf === 'machine' ? 1 : 0) - (b.shelf === 'machine' ? 1 : 0); });
  }
  function layersOf(c) { return c && c.layers ? c.layers : 1; }

  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  // Saved builds from before the biology pass use the old ids: Copying errors became Random naps, Chemotaxis became Sporulate.
  var ALIAS = { errors: 'naps', chemotaxis: 'sporulate' };
  function canon(id) { return ALIAS[id] || id; }
  function part(id) { return byId(parts, canon(id)); }
  function bio(id) { return byId(bioReflexes, canon(id)); }
  function sensor(id) { return byId(sensors, id); }
  function action(id) { return byId(actions, id); }
  function ruleText(r) {
    var s = sensor(r.sensor), a = action(r.action);
    return 'When ' + (s ? s.name : r.sensor) + ' is ' + (r.cmp === 'lt' ? 'less than' : 'more than') + ' ' + r.value + ', then ' + (a ? a.name : r.action) + '.';
  }

  return { parts: parts, SLOTS: SLOTS, slotInfo: slotInfo, bySlot: bySlot, layersOf: layersOf, pairs: pairs, bioReflexes: bioReflexes, sensors: sensors, actions: actions, ruleFx: ruleFx,
    canon: canon, part: part, bio: bio, sensor: sensor, action: action, ruleText: ruleText };
})();
if (typeof module !== 'undefined') module.exports = LookAliveCards;

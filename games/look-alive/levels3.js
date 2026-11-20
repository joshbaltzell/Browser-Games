// Look Alive: habitat 3, the thick water (dishes 15 and 16 so far). Data only.
// Plain script: global LookAliveLevels3 in a browser, module.exports in Node. Load after levels2.js and sim3.js, and before sim.js.
// Side effect (the only one): the two dishes are pushed onto LookAliveLevels.DISHES, and carry / standard are wrapped so ids 15 and 16 come from here.
// Every dish here has `agents`: the settings of the individual-cell simulation (sim3.js). That field is also the marker sim.js looks for: a dish with `agents` is played by sim3.
var LookAliveLevels3 = (function () {
  'use strict';
  var Lv = typeof LookAliveLevels !== 'undefined' ? LookAliveLevels : require('./levels.js');
  var Sim3 = typeof LookAliveSim3 !== 'undefined' ? LookAliveSim3 : require('./sim3.js');

  // ---------------------------------------------------------------- constants
  var BAND3 = { lo: 0.04, hi: 0.12, need: 0.7, warm: 30 };   // "Stay between 4% and 12% of the dish"
  var GOAL3 = 'Stay between 4% and 12% of the dish, without the guards noticing you.';
  var NONE = { type: 'none', tick: -1, announce: -1, rMult: 0, aMult: 0, depth: 0, dur: 0, bustDeath: 0 };
  var RULE_MARK = 0.015;   // food at the cell's own square above which a fed cell stops (the "stay and feed" mark of dish 16's intended fix)

  // ---------------------------------------------------------------- shared lists
  var SLOTS15 = ['power', 'division', 'signal', 'motor'];             // the other slots (Envelope, Insides, Reflex) stay locked and empty: no card of those slots means anything to a single cell here
  var SLOTS16 = SLOTS15.concat(['reflex']);
  var METAB3 = ['respiration', 'fermentation'];
  var PARTS3 = ['flagellum', 'pili', 'vesicles', 'chemo', 'naps'];
  var SHELF_BIO3 = ['respiration', 'fermentation', 'flagellum', 'pili', 'vesicles', 'chemo', 'naps'];
  // The Machine rule of dish 16. Stored on the dish the way levels2.js stores SENSORS2 and ACTIONS2; the editor shows what the dish lists here.
  //   sensors: what a cell can read at its own square; actions: what it can do; `otherwise` is the action when the line does not fire (a rule here is "when ..., X; otherwise Y").
  var SENSORS3 = ['food', 'crowd'];
  var ACTIONS3 = ['seek', 'stay', 'pause'];
  var RULE3 = { sensors: SENSORS3, actions: ACTIONS3, otherwise: true, defaultOtherwise: 'seek', marks: { food: [0.005, 0.01, 0.015, 0.025, 0.04], crowd: [2, 4, 6, 8] } };

  // ---------------------------------------------------------------- tips (what happened, then where to look; never the answer)
  var TIP_STARVED_15 = ['Your colony starved. The sweetness here sits in clumps, and your cells could not get to it.', 'Look at the Motor slot, and then at what a cell would need to know to swim toward the sweetness and not just away from where it is.'];
  var TIP_BELOW_15 = ['Your colony stayed too small to hold the band.', 'Cells that cannot find food divide too little. The Motor and Signal slots decide how far a cell gets.'];
  var TIP_OVERGREW = ['Your colony grew past the top of the band and stayed there.', 'Something has to hold your births down. Open "What changes this?" under Growth: it lists the dials and slots that move your share.'];
  var TIP_BAND = ['You drifted in and out of the band and spent less than 70% of the run inside it.', 'The goal is a steady share, not a fast or a slow one. Open "What changes this?" under Growth.'];
  var TIP_GROWTH = ['You were dividing at a rate the locals do not, and the guards noticed.', 'Open "What changes this?" under Growth. Pace, Sloppiness and several cards all move your births, up or down.'];
  var TIP_REGULAR = ['Your cells divided in step, and the guards read that as a machine.', 'Look at the Sloppiness dial and the Division slot: here a cell that divides on a fixed beat stands out.'];
  var TIP_OTHER = ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.'];

  // ---------------------------------------------------------------- the two dishes
  function agents(seed, channels) {
    var a = Sim3.defaults(); a.seed = seed; a.band = { lo: BAND3.lo, hi: BAND3.hi, need: BAND3.need, warm: BAND3.warm };
    if (channels) a.channels = channels;
    return a;
  }
  function dish(o) {
    var d = { id: o.id, title: o.title, energy: o.energy, slots: o.slots, opens: o.opens, reflexSlot: o.slots.indexOf('reflex') >= 0, dials: ['pace', 'slop'], stats: o.stats, checked: o.stats,
      ticks: 300, T: 300, acid: 0, suspicion: true, channels: o.channels, problem: o.problem, goal: GOAL3,
      show: { pace: true, slop: true, metabolism: true, reflex: { bio: [], rule: o.slots.indexOf('reflex') >= 0 }, channels: o.channels, shelves: { biology: SHELF_BIO3, machine: [] } },
      allowed: { metabolism: METAB3, parts: PARTS3, bio: [], sensors: o.sensors || [], actions: o.actions || [] },
      band: { lo: BAND3.lo, hi: BAND3.hi, need: BAND3.need, warm: BAND3.warm }, event: NONE, forecastN: 64, forecastLoMult: 1, crashSafe: 0.024, world: 3,
      agents: o.agents, tips: o.tips, tipFixes: o.tipFixes, fixes: o.fixes,
      nbTitle: o.nbTitle, notebook: o.notebook, fieldNote: o.fieldNote, reading: o.reading, colony: o.colony };
    if (o.rule) d.rule = o.rule;
    return d;
  }

  var DISHES3 = [
    dish({ id: 15, title: 'Where the Food Is', energy: 4, slots: SLOTS15, opens: ['motor', 'signal'], stats: ['reach', 'growth', 'natural'], channels: ['growth', 'regularity'],
      agents: agents(1, { motion: false }),   // the movement tell is off on this dish
      problem: 'The sweetness here comes in clumps around the green boulders. A cell that cannot move sits in bare water and starves.',
      fixes: [
        { id: 'swim', label: 'Add a Flagellum (Motor) and a Chemoreceptor array (Signal)', changes: { add: ['flagellum', 'chemo'] } }
      ],
      tipFixes: { starved: ['swim'], below: ['swim'] },
      tips: { starved: TIP_STARVED_15, below: TIP_BELOW_15, overgrew: TIP_OVERGREW, band: TIP_BAND, 'exposed:growth': TIP_GROWTH, 'exposed:regularity': TIP_REGULAR, other: TIP_OTHER },
      nbTitle: 'Food in clumps',
      notebook: 'Dunaliella salina is a green alga about ten times the width of the microbes around it. It lives in water saltier than the sea, and it balances the salt outside with glycerol inside, which it makes in large amounts and which leaks into the water around it. Many of the salt-loving microbes nearby can use that glycerol as food, so in a salt pond the food comes in clumps: thick around each alga, and thin between. Haloquadratum walsbyi, a flat square cell that floats on gas-filled vesicles, does not swim. Halobacterium salinarum swims with a rotating filament and stops to feed. A swimmer cannot see food. It tastes the water, compares now with a moment ago, and runs for longer when things are getting better, which is why steering needs a sensor and not only a tail.',
      fieldNote: ['Our cell did not move, and the sweetness did not come to it. The sweetness sits around the green boulders, and the boulders do not move either.'],
      reading: 'The locals here gather around the boulders. We think they are not choosing a place. They are following the sweetness.',
      colony: 'Nothing here eats the green boulders. They are old, and they have stood where they are for as long as we have looked. We have decided they are not alive in any way that matters.' }),

    dish({ id: 16, title: 'Stop When Fed', energy: 4, slots: SLOTS16, opens: ['reflex'], stats: ['reach', 'growth', 'motion', 'natural'], channels: ['growth', 'regularity', 'motion'],
      agents: agents(1), rule: RULE3, sensors: SENSORS3, actions: ACTIONS3,
      problem: 'Your cells find the sweetness, and then they keep swimming. The locals do not.',
      fixes: [
        { id: 'stay', label: 'Add the rule: when food here is above ' + RULE_MARK + ', stay and feed; otherwise swim toward food', changes: { reflex: { kind: 'machine', sensor: 'food', cmp: 'gt', value: RULE_MARK, action: 'stay', otherwise: 'seek' } } }
      ],
      tipFixes: { 'exposed:motion': ['stay'] },
      tips: {
        'exposed:motion': ['The guards noticed how your colony moves: your cells never stopped, and the locals do.', 'Look at what a cell does once it has found food. The Reflex slot can tell a cell what to do where the sweetness is.'],
        starved: ['Your colony starved before it found enough food.', 'Look at the Motor slot, and at which motors can steer toward the sweetness and which only wander.'],
        below: ['Your colony stayed too small to hold the band.', 'Cells that cannot find food divide too little. The Motor and Signal slots decide how far a cell gets.'],
        overgrew: TIP_OVERGREW, band: TIP_BAND, 'exposed:growth': TIP_GROWTH, 'exposed:regularity': TIP_REGULAR, other: TIP_OTHER
      },
      nbTitle: 'Swimming costs',
      notebook: 'A swimming cell pays for every second it swims: the motor that turns its tail runs on the same energy that would otherwise go into dividing. A swimmer that has found food gains by stopping, and real cells do stop, or at least turn more often and swim less when food is near. The locals here do it without any rule. Halobacterium salinarum swims, then rests where it is fed. A colony that swims all the time looks different from one that does not, and a different movement is something a guard can count.',
      fieldNote: ['Our cell found the sweetness and then kept swimming. The locals found it and stopped. We had not noticed that stopping was something a cell could do.'],
      reading: 'The locals that swim stop where it is sweet. We think stopping is the part the guards watch for.',
      colony: 'Something tells the locals when to stop. We cannot see what. We have started to tell ours.' })
  ];

  // ---------------------------------------------------------------- carried and standard cells
  function mk(pace, slop, met, parts, reflex) { return { pace: pace, slop: slop, metabolism: met, parts: parts, reflex: reflex || null }; }
  var CARRY3 = {
    15: mk(4, 3, 'respiration', []),                                // no motor: it starves in bare water
    16: mk(4, 3, 'respiration', ['flagellum', 'chemo'])             // dish 15's answer: it finds the food and never stops swimming
  };
  function copy(c) { return c ? JSON.parse(JSON.stringify(c)) : null; }

  // ---------------------------------------------------------------- text
  var WORLD3 = {
    name: 'The thick water',
    facts: [
      'We followed the last river to a flat place where the water is thick. It is salt, so much of it that nothing we know could live in it, and the locals do.',
      'Big green boulders sit still here and leak sweetness. They are ten times our size. The sweetness stays near them, in clumps.',
      'Between the clumps the water is bare. A cell that sits there starves.',
      'The locals are not all one shape. Some are flat squares that sit still. Some are rods that swim, and stop to feed.',
      'Here the scouts swim at their true speed, and we make them grow about a hundred times faster than they would, or a single dish would take days. We say this once.',
      'Our samples name the locals: Haloquadratum walsbyi, Halobacterium salinarum, Salinibacter ruber. They also name the boulders, Dunaliella salina. We have put that down as a place name.'
    ],
    badge: 'Each kind keeps its own habits. Real Halobacterium salinarum swims and stops to feed, and real Haloquadratum walsbyi, a flat square, does not swim at all.',
    mission: 'Our lab grows each dish from the scouts\' new samples and tests your microbe in it. Pass as a local and we add a page to our notes.'
  };
  var INTRO3 = [
    ['Cover held', 'We passed.', 'Our samples came back with a stamp: cover held. The scouts are already somewhere new.'],
    ['The thick water', 'A flat, bright place.', 'We followed the last river to a flat place where the water is thick with salt. Nothing in it looks like anything we know.'],
    ['The boulders', 'Sweetness in clumps.', 'Big green boulders sit still and leak sweetness. We think the locals have learned where they are.']
  ];
  // Cover names: the genus follows the Power card, the epithets follow the cards (and `quiescens` follows a rule that tells a fed cell to stay).
  var COVER3 = {
    genus: { respiration: 'Salinibacter', fermentation: 'Haloquadratum' },
    epithet: { flagellum: 'natans', pili: 'reptans', vesicles: 'vesiculosus', chemo: 'sagax', naps: 'dormiens', stayrule: 'quiescens' }
  };

  // ---------------------------------------------------------------- registration
  DISHES3.forEach(function (d) { if (!Lv.dish(d.id)) Lv.DISHES.push(d); });
  var carry2 = Lv.carry, standard2 = Lv.standard;
  Lv.carry = function (id) { return CARRY3[id] ? copy(CARRY3[id]) : carry2(id); };
  Lv.standard = function (id) { return CARRY3[id] ? copy(CARRY3[id]) : standard2(id); };

  return { WORLD: WORLD3, INTRO: INTRO3, ORDER: [15, 16], DISHES: DISHES3, COVER: COVER3, RULE: RULE3, BAND: BAND3, COMPLETE: null };   // COMPLETE: the completion card comes with the exam dish (18), which is not built yet
})();
if (typeof module !== 'undefined') module.exports = LookAliveLevels3;

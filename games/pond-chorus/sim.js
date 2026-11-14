// Pond Chorus rules. No DOM, no Date, no Math.random (callers pass an rng where one is needed).
// One call to step() is one eighth note. A loop is 8 steps.
var PondSim = (function () {
  'use strict';

  var STEPS = 8;
  var STONES = 22;
  var LILIES = 5;
  var RULES = {
    range: { frog: 105, cricket: 130, owl: 230, jar: 170 },
    enemy: {
      slug: { hp: 2, armor: 0, every: 2 },
      slugling: { hp: 1, armor: 0, every: 1 },
      snail: { hp: 4, armor: 2, every: 4 },
      shellback: { hp: 14, armor: 3, every: 4 }
    }
  };
  var PERCH_STONE = [3, 6, 9, 12, 15, 18];
  var geo = null;

  function geometry() {
    if (geo) return geo;
    var stones = [], perches = [], i, k;
    var unit = [];
    for (i = 0; i < STONES; i++) {
      var t = i / (STONES - 1);
      var a = (205 + 330 * t) * Math.PI / 180;
      var r = 1 - 0.72 * Math.pow(t, 1.6);
      stones.push({ x: 640 + 430 * r * Math.cos(a), y: 300 + 190 * r * Math.sin(a) });
      unit.push({ x: Math.cos(a), y: Math.sin(a) });
    }
    for (k = 0; k < PERCH_STONE.length; k++) {
      var s = PERCH_STONE[k], d = k % 2 === 0 ? 70 : -70;
      perches.push({ x: stones[s].x + d * unit[s].x, y: stones[s].y + d * unit[s].y, stone: s });
    }
    geo = { stones: stones, perches: perches };
    return geo;
  }

  // Power of the note at `step`: 1 + rests immediately before it (max 2), around the loop.
  // harmony adds 1 (two creature types on one step), firefly adds 1 (a jar is in range). Max 4. 0 if no note.
  function power(pattern, step, harmony, firefly) {
    if (!pattern[step]) return 0;
    var rests = 0;
    for (var j = 1; j <= 2; j++) {
      if (pattern[(step - j + STEPS * 2) % STEPS]) break;
      rests++;
    }
    var p = 1 + rests + (harmony ? 1 : 0) + (firefly ? 1 : 0);
    return Math.min(p, 4);
  }

  function create(level, placements) {
    return {
      level: level,
      placements: placements.map(function (p) {
        return { perch: p.perch, type: p.type, pattern: p.pattern.slice() };
      }),
      t: 0,           // steps taken
      base: null,     // step at which the wave started (null until arm)
      enemies: [],
      nextId: 1,
      spawned: 0,
      lilies: LILIES,
      over: null      // 'win' | 'lose'
    };
  }

  // Start the wave at the next loop boundary. Before this the sim only plays notes.
  function arm(state) {
    if (state.base === null) state.base = Math.ceil(state.t / STEPS) * STEPS;
    return state.base;
  }

  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

  function enemiesInRange(state, p) {
    var g = geometry(), perch = g.perches[p.perch], rg = RULES.range[p.type], out = [];
    for (var i = 0; i < state.enemies.length; i++) {
      var e = state.enemies[i];
      if (dist(perch, g.stones[Math.min(e.stone, STONES - 1)]) <= rg) out.push(e);
    }
    return out;
  }

  function inRange(state, idx) {
    return enemiesInRange(state, state.placements[idx]).length > 0;
  }

  function furthest(list) {
    var best = null;
    for (var i = 0; i < list.length; i++) if (!best || list[i].stone > best.stone) best = list[i];
    return best;
  }

  function hurt(e, dmg, events, pi, power) {
    e.hp -= Math.max(dmg, 0);
    events.push({ type: 'hit', enemy: e.id, dmg: Math.max(dmg, 0), placement: pi, power: power, armored: dmg <= 0 });
  }

  function step(state) {
    var events = [];
    if (state.over) return events;
    var lv = state.level, t = state.t, loopStep = t % STEPS, i, e;

    // spawn
    if (state.base !== null) {
      var rel = t - state.base;
      for (i = 0; i < lv.wave.length; i++) {
        if (lv.wave[i].step === rel) {
          var spec = RULES.enemy[lv.wave[i].type];
          e = { id: state.nextId++, type: lv.wave[i].type, stone: 0, hp: spec.hp, armor: spec.armor, every: spec.every, cd: Math.max(0, spec.every - 2), stun: false, hitT: 0 };
          state.enemies.push(e);
          state.spawned++;
          events.push({ type: 'spawn', enemy: e.id, kind: e.type });
        }
      }
    }
    // move
    for (i = 0; i < state.enemies.length; i++) {
      e = state.enemies[i];
      if (e.stun) { e.stun = false; continue; }
      if (e.cd > 0) { e.cd--; continue; }
      e.stone++;
      e.cd = e.every - 1;
      events.push({ type: 'move', enemy: e.id, stone: e.stone });
    }
    // notes: harmony counts creature types singing this step
    var singing = [], types = {}, ntypes = 0;
    for (i = 0; i < state.placements.length; i++) {
      var pl = state.placements[i];
      if (pl.pattern[loopStep] && pl.type !== 'jar') {
        singing.push(i);
        if (!types[pl.type]) { types[pl.type] = 1; ntypes++; }
      }
    }
    for (var si = 0; si < singing.length; si++) {
      var pi = singing[si], p = state.placements[pi];
      var pw = power(p.pattern, loopStep, ntypes >= 2, false);
      events.push({ type: 'sing', placement: pi, perch: p.perch, kind: p.type, power: pw });
      var list = enemiesInRange(state, p);
      if (p.type === 'frog') {
        var f = furthest(list);
        if (f) hurt(f, pw + 1 - f.armor, events, pi, pw);
      } else if (p.type === 'cricket') {
        for (var j = 0; j < list.length; j++) hurt(list[j], pw - list[j].armor, events, pi, pw);
      }
    }
    // remove beaten
    var keep = [];
    for (i = 0; i < state.enemies.length; i++) {
      e = state.enemies[i];
      if (e.hp <= 0) events.push({ type: 'beaten', enemy: e.id, stone: e.stone });
      else keep.push(e);
    }
    state.enemies = keep;
    // bites
    keep = [];
    for (i = 0; i < state.enemies.length; i++) {
      e = state.enemies[i];
      if (e.stone >= STONES - 1) {
        if (state.lilies > 0) state.lilies--;
        events.push({ type: 'bite', enemy: e.id, lilies: state.lilies });
      } else keep.push(e);
    }
    state.enemies = keep;
    state.t++;
    // win or lose
    if (state.base !== null) {
      if (state.lilies <= 0) { state.over = 'lose'; events.push({ type: 'lose' }); }
      else if (state.spawned >= lv.wave.length && state.enemies.length === 0) { state.over = 'win'; events.push({ type: 'win', lilies: state.lilies }); }
    }
    return events;
  }

  function notes(placements) {
    var n = 0;
    for (var i = 0; i < placements.length; i++) for (var s = 0; s < STEPS; s++) if (placements[i].pattern[s]) n++;
    return n;
  }

  function run(level, placements) {
    var st = create(level, placements);
    arm(st);
    var cap = 8 * 400;
    while (!st.over && st.t < cap) step(st);
    return { won: st.over === 'win', lilies: st.lilies, steps: st.t };
  }

  // Loop steps (0..7) where an enemy of an empty-handed run is in range of each fixed creature.
  function hints(level) {
    var pls = level.fixed.map(function (f) { return { perch: f.perch, type: f.type, pattern: [0, 0, 0, 0, 0, 0, 0, 0] }; });
    var st = create(level, pls), out = pls.map(function () { return [0, 0, 0, 0, 0, 0, 0, 0]; });
    arm(st);
    while (!st.over && st.t < 8 * 400) {
      step(st);
      for (var i = 0; i < pls.length; i++) if (inRange(st, i)) out[i][(st.t - 1) % STEPS] = 1;
    }
    return out;
  }

  // Stars from lilies kept: 5 lilies = 3, 3 or 4 = 2, 1 or 2 = 1. The quiet night mark is separate.
  function stars(lilies) { return lilies >= 5 ? 3 : lilies >= 3 ? 2 : lilies >= 1 ? 1 : 0; }

  return {
    STEPS: STEPS, STONES: STONES, LILIES: LILIES, RULES: RULES,
    power: power, geometry: geometry, create: create, arm: arm, step: step,
    inRange: inRange, enemiesInRange: enemiesInRange, run: run, hints: hints, notes: notes, stars: stars
  };
})();
if (typeof module !== 'undefined') module.exports = PondSim;

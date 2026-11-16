// Pond Chorus rules. No DOM, no Date, no Math.random (callers pass an rng where one is needed).
// One call to step() is one eighth note. A loop is 8 steps.
var PondSim = (function () {
  'use strict';

  var STEPS = 8;
  var GLOW_STEPS = 3;   // a jar note lights its range for this many steps
  var STONES = 22;
  var LILIES = 5;
  var RULES = {
    range: { frog: 105, cricket: 130, owl: 230, jar: 170 },
    jarArmor: 2,   // enemies in a jar's light lose this much armor
    // groove: score thresholds for Steady and Groovy, and the power multiplier of each tier (Rough, Steady, Groovy)
    groove: { steady: 0.45, groovy: 0.72, mult: [1, 1.4, 2] },
    enemy: {
      slug: { hp: 2, armor: 0, every: 2 },
      slugling: { hp: 1, armor: 0, every: 1 },
      snail: { hp: 4, armor: 2, every: 4 },
      shellback: { hp: 14, armor: 6, every: 4 }
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

  // ---------- groove: how good a pattern sounds ----------
  // Scored over the whole song (every row together), 0..1, from five musical rules:
  //   beat    notes on strong steps (0 and 4 count 1, 2 and 6 count 0.7, odd steps 0.25)
  //   pulse   even spacing between sounding steps (a steady pulse)
  //   rest    each note is preceded by a rest in its own row (two rests count full)
  //   call    different voices answer each other: alternating solo notes between creature types
  //   harmony different creature types sounding on one step
  // With only one creature type on the pond, call and harmony cannot happen, so beat, pulse and rest share the weight.
  var BEAT_W = [1, 0.25, 0.7, 0.25, 1, 0.25, 0.7, 0.25];
  var TIER_NAMES = ['Rough', 'Steady', 'Groovy'];

  function groove(placements) {
    var i, s, types = {}, nvoices = 0, out;
    for (i = 0; i < placements.length; i++) if (!types[placements[i].type]) { types[placements[i].type] = 1; nvoices++; }
    var union = [], tcount = [], solo = [];
    for (s = 0; s < STEPS; s++) {
      var seen = {}, c = 0, last = null;
      for (i = 0; i < placements.length; i++) if (placements[i].pattern[s] && !seen[placements[i].type]) { seen[placements[i].type] = 1; c++; last = placements[i].type; }
      tcount.push(c);
      if (c) union.push(s);
      if (c === 1) solo.push({ step: s, type: last });
    }
    var parts = { beat: 0, pulse: 0, rest: 0, call: 0, harmony: 0 };
    if (!union.length) return { score: 0, tier: 0, name: TIER_NAMES[0], mult: 1, parts: parts, notes: 0, voices: nvoices };
    var b = 0;
    for (i = 0; i < union.length; i++) b += BEAT_W[union[i]];
    parts.beat = b / union.length;
    if (union.length === 1) parts.pulse = 0.6;
    else {
      var mn = 99, mx = 0;
      for (i = 0; i < union.length; i++) {
        var gap = ((union[(i + 1) % union.length] - union[i]) + STEPS) % STEPS || STEPS;
        if (gap < mn) mn = gap; if (gap > mx) mx = gap;
      }
      parts.pulse = Math.sqrt(mn / mx);
    }
    var rsum = 0, rn = 0;
    for (i = 0; i < placements.length; i++) {
      for (s = 0; s < STEPS; s++) {
        if (!placements[i].pattern[s]) continue;
        var rests = 0;
        for (var j = 1; j <= 2; j++) { if (placements[i].pattern[(s - j + STEPS * 2) % STEPS]) break; rests++; }
        rsum += rests / 2; rn++;
      }
    }
    parts.rest = rn ? rsum / rn : 0;
    var H = 0;
    for (s = 0; s < STEPS; s++) if (tcount[s] >= 2) H++;
    parts.harmony = Math.min(1, H / 2);
    var sw = 0;
    if (solo.length >= 2) for (i = 0; i < solo.length; i++) if (solo[i].type !== solo[(i + 1) % solo.length].type) sw++;
    parts.call = Math.min(1, sw / 2);
    var sc = nvoices >= 2
      ? 0.26 * parts.beat + 0.18 * parts.pulse + 0.26 * parts.rest + 0.15 * parts.call + 0.15 * parts.harmony
      : 0.40 * parts.beat + 0.20 * parts.pulse + 0.40 * parts.rest;
    var G = RULES.groove, tier = sc >= G.groovy ? 2 : sc >= G.steady ? 1 : 0;
    out = { score: sc, tier: tier, name: TIER_NAMES[tier], mult: G.mult[tier], parts: parts, notes: union.length, voices: nvoices };
    return out;
  }

  function perchDist(a, b) {
    var g = geometry(); return Math.hypot(g.perches[a].x - g.perches[b].x, g.perches[a].y - g.perches[b].y);
  }

  // Static power of the note at (row, step) for the pad rings: rests, harmony, and a jar singing on the same step.
  function padPower(placements, row, step) {
    var pl = placements[row];
    if (!pl || !pl.pattern[step]) return 0;
    if (pl.type === 'jar') return 1;
    var types = {}, n = 0, lit = false, i, j;
    for (i = 0; i < placements.length; i++) {
      var q = placements[i];
      if (q.type === 'jar') {
        for (j = 0; j < GLOW_STEPS; j++) if (q.pattern[(step - j + STEPS * 2) % STEPS] && perchDist(q.perch, pl.perch) <= RULES.range.jar) lit = true;
      } else if (q.pattern[step] && !types[q.type]) { types[q.type] = 1; n++; }
    }
    return power(pl.pattern, step, n >= 2, lit);
  }

  function create(level, placements, opts) {
    return {
      level: level,
      noGroove: !!(opts && opts.noGroove),
      placements: placements.map(function (p) {
        return { perch: p.perch, type: p.type, pattern: p.pattern.slice() };
      }),
      t: 0,           // steps taken
      base: null,     // step at which the wave started (null until arm)
      enemies: [],
      nextId: 1,
      spawned: 0,
      dealt: 0,       // total damage dealt, for searches
      glow: {},       // jar placement index -> last step its light shines
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

  function hurt(state, e, dmg, events, pi, pw) {
    var d = Math.max(dmg, 0);
    state.dealt += Math.min(d, Math.max(e.hp, 0));
    e.hp -= d;
    events.push({ type: 'hit', enemy: e.id, dmg: d, placement: pi, power: pw, armored: d <= 0 });
  }

  function armorOf(e) { return Math.max(0, e.armor - (e.lit ? RULES.jarArmor : 0)); }

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
          e = { id: state.nextId++, type: lv.wave[i].type, stone: 0, hp: spec.hp, armor: spec.armor, every: spec.every, cd: Math.max(0, spec.every - 2), stun: 0, lit: false, hitT: 0 };
          state.enemies.push(e);
          state.spawned++;
          events.push({ type: 'spawn', enemy: e.id, kind: e.type });
        }
      }
    }
    // move (a stunned enemy skips the move)
    for (i = 0; i < state.enemies.length; i++) {
      e = state.enemies[i];
      if (e.stun > 0) { e.stun--; continue; }
      if (e.cd > 0) { e.cd--; continue; }
      e.stone++;
      e.cd = e.every - 1;
      events.push({ type: 'move', enemy: e.id, stone: e.stone });
    }
    // who sings this step: harmony counts creature types (not jars) singing together
    var singing = [], types = {}, ntypes = 0, jars = [];
    for (i = 0; i < state.placements.length; i++) {
      var pl = state.placements[i];
      if (pl.pattern[loopStep]) {
        if (pl.type === 'jar') { jars.push(i); continue; }
        singing.push(i);
        if (!types[pl.type]) { types[pl.type] = 1; ntypes++; }
      }
    }
    var gv = state.noGroove ? { tier: 0, mult: 1, score: 0, name: TIER_NAMES[0] } : groove(state.placements);
    if (state.placements.length) events.push({ type: 'groove', tier: gv.tier, score: gv.score, mult: gv.mult });
    // fireflies glow first: a jar note lights its range for 3 steps (this one and the next two).
    // Creatures in the light sing +1 power, enemies in the light lose 1 armor.
    var boost = {}, ji, k;
    for (ji = 0; ji < jars.length; ji++) {
      var jn = state.placements[jars[ji]], litNow = 0, jlist = enemiesInRange(state, jn);
      for (k = 0; k < jlist.length; k++) litNow++;
      state.glow[jars[ji]] = t + GLOW_STEPS - 1;
      events.push({ type: 'sing', placement: jars[ji], perch: jn.perch, kind: 'jar', power: 1, mult: gv.mult, lit: litNow, reasons: {} });
    }
    for (var gj in state.glow) {
      if (state.glow[gj] < t) continue;
      var jp = state.placements[gj], gl = enemiesInRange(state, jp);
      for (k = 0; k < gl.length; k++) { if (!gl[k].lit) events.push({ type: 'lit', enemy: gl[k].id }); gl[k].lit = true; }
      for (k = 0; k < state.placements.length; k++) {
        if (state.placements[k].type !== 'jar' && perchDist(jp.perch, state.placements[k].perch) <= RULES.range.jar) boost[k] = true;
      }
    }
    for (var si = 0; si < singing.length; si++) {
      var pi = singing[si], p = state.placements[pi];
      var pw = power(p.pattern, loopStep, ntypes >= 2, !!boost[pi]);
      var ep = pw * gv.mult;
      var rest = pw > 1 && ((p.pattern[(loopStep + STEPS - 1) % STEPS] ? 0 : 1) === 1);
      events.push({
        type: 'sing', placement: pi, perch: p.perch, kind: p.type, power: pw, mult: gv.mult, tier: gv.tier,
        reasons: { rest: rest, harmony: ntypes >= 2, firefly: !!boost[pi], beat: gv.mult > 1 && loopStep % 4 === 0 }
      });
      var list = enemiesInRange(state, p), j;
      if (p.type === 'frog') {
        var f = furthest(list);
        if (f) hurt(state, f, ep + 1 - armorOf(f), events, pi, pw);
      } else if (p.type === 'cricket') {
        for (j = 0; j < list.length; j++) hurt(state, list[j], ep - armorOf(list[j]), events, pi, pw);
      } else if (p.type === 'owl') {
        // the owl does no damage: everything in its wide range loses its next move (two moves on a strong note)
        var dur = ep >= 2.5 ? 2 : 1;
        for (j = 0; j < list.length; j++) {
          if (list[j].stun < dur) list[j].stun = dur;
          events.push({ type: 'stun', enemy: list[j].id, steps: dur, placement: pi });
        }
      }
    }
    for (i = 0; i < state.enemies.length; i++) state.enemies[i].lit = false;
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
      else if (state.spawned >= lv.wave.length && state.enemies.length === 0 && goalProgress(lv, state.placements).met) { state.over = 'win'; events.push({ type: 'win', lilies: state.lilies }); }
    }
    return events;
  }

  function notes(placements) {
    var n = 0;
    for (var i = 0; i < placements.length; i++) for (var s = 0; s < STEPS; s++) if (placements[i].pattern[s]) n++;
    return n;
  }

  // Night goal: level.goal = { voices: {frog: n, cricket: n}, harmony: n }. The night is won when every
  // slug is dealt with AND the pattern meets the goal. voices counts notes per creature type, harmony counts
  // steps where two or more different creature types sing together. Returns {met, parts:[{key, have, need}]}.
  function goalProgress(level, placements) {
    var goal = level.goal, parts = [], met = true, key;
    if (!goal) return { met: true, parts: parts };
    var have = {}, harm = 0, s, i;
    for (i = 0; i < placements.length; i++) {
      for (s = 0; s < STEPS; s++) if (placements[i].pattern[s]) have[placements[i].type] = (have[placements[i].type] || 0) + 1;
    }
    for (s = 0; s < STEPS; s++) {
      var seen = {}, n = 0;
      for (i = 0; i < placements.length; i++) if (placements[i].pattern[s] && !seen[placements[i].type]) { seen[placements[i].type] = 1; n++; }
      if (n >= 2) harm++;
    }
    for (key in (goal.voices || {})) {
      parts.push({ key: key, have: have[key] || 0, need: goal.voices[key] });
    }
    if (goal.harmony) parts.push({ key: 'harmony', have: harm, need: goal.harmony });
    if (goal.groove) parts.push({ key: 'groove', have: groove(placements).tier, need: goal.groove });
    for (i = 0; i < parts.length; i++) if (parts[i].have < parts[i].need) met = false;
    return { met: met, parts: parts };
  }

  // opts: {noGroove: true} plays every note at Rough strength (for proving a night needs groove).
  function run(level, placements, opts) {
    var st = create(level, placements, opts);
    arm(st);
    var cap = 8 * 400;
    while (!st.over && st.t < cap) step(st);
    return { won: st.over === 'win', lilies: st.lilies, steps: st.t, dealt: st.dealt };
  }


  // ---------- compose phase helpers (pure; none of these change the rules above) ----------
  var NAMES = { frog: 'frog', cricket: 'cricket', owl: 'owl', jar: 'firefly jar' };
  var VOICE_NAMES = { frog: ['croak', 'croaks'], cricket: ['chirp', 'chirps'], owl: ['hoot', 'hoots'], jar: ['glow', 'glows'], harmony: ['harmony step', 'harmony steps'] };

  // Can the player press "Ready"? Exactly when the goal is met. reason says what is missing, in one plain line.
  function readyState(level, placements) {
    var gp = goalProgress(level, placements);
    if (gp.met) return { ok: true, reason: '' };
    for (var i = 0; i < gp.parts.length; i++) {
      var pt = gp.parts[i], miss = pt.need - pt.have;
      if (miss <= 0) continue;
      if (pt.key === 'groove') return { ok: false, reason: 'Reach ' + TIER_NAMES[pt.need] + ' groove to meet the goal' };
      if (pt.key === 'harmony') return { ok: false, reason: 'Add ' + miss + ' more harmony ' + (miss === 1 ? 'step' : 'steps') + ' to meet the goal' };
      var nm = VOICE_NAMES[pt.key] || [pt.key, pt.key + 's'];
      return { ok: false, reason: 'Add ' + miss + ' more ' + nm[miss === 1 ? 0 : 1] + ' to meet the goal' };
    }
    return { ok: false, reason: 'Meet the goal first' };
  }

  // The next hint: the first note of the stored solution that is not on the pond yet (row by row). null when all are shown.
  function nextHint(level, placements) {
    var sol = level.solution;
    if (!sol) return null;
    for (var r = 0; r < sol.length; r++) for (var s = 0; s < STEPS; s++) if (sol[r].pattern[s] && !(placements[r] && placements[r].pattern[s])) return { row: r, step: s };
    return null;
  }
  function hintsLeft(level, placements) {
    var n = 0, sol = level.solution;
    if (!sol) return 0;
    for (var r = 0; r < sol.length; r++) for (var s = 0; s < STEPS; s++) if (sol[r].pattern[s] && !(placements[r] && placements[r].pattern[s])) n++;
    return n;
  }

  // Which enemy types come, in the order they first appear: [{type, count, first}]
  function wavePreview(level) {
    var out = [], idx = {};
    for (var i = 0; i < level.wave.length; i++) {
      var t = level.wave[i].type;
      if (idx[t] === undefined) { idx[t] = out.length; out.push({ type: t, count: 0, first: level.wave[i].step }); }
      out[idx[t]].count++;
      if (level.wave[i].step < out[idx[t]].first) out[idx[t]].first = level.wave[i].step;
    }
    return out.sort(function (a, b) { return a.first - b.first; });
  }

  // Stones (indices) a creature at this perch reaches.
  function reach(perch, type) {
    var g = geometry(), out = [];
    for (var i = 0; i < STONES; i++) if (Math.hypot(g.stones[i].x - g.perches[perch].x, g.stones[i].y - g.perches[perch].y) <= RULES.range[type]) out.push(i);
    return out;
  }

  // One tip for the weakest groove rule, naming a step (1 to 8) when it can.
  function grooveTip(placements) {
    var gv = groove(placements);
    if (!gv.notes) return 'Make a pattern to hear the groove.';
    if (gv.tier >= 2) return 'Every note hits ' + Math.round((gv.mult - 1) * 100) + '% harder.';
    var multi = gv.voices >= 2, w = multi ? { beat: 0.26, pulse: 0.18, rest: 0.26, call: 0.15, harmony: 0.15 } : { beat: 0.4, pulse: 0.2, rest: 0.4 };
    var best = 'beat', bd = -1, key, i, s;
    for (key in w) { var d = (1 - gv.parts[key]) * w[key]; if (d > bd) { bd = d; best = key; } }
    var notesList = [];
    for (i = 0; i < placements.length; i++) for (s = 0; s < STEPS; s++) if (placements[i].pattern[s]) notesList.push({ row: i, step: s, type: placements[i].type });
    if (best === 'beat') {
      var worst = null;
      for (i = 0; i < notesList.length; i++) if (!worst || BEAT_W[notesList[i].step] < BEAT_W[worst.step]) worst = notesList[i];
      if (worst && BEAT_W[worst.step] < 1) return 'Put the ' + NAMES[worst.type] + ' on a strong beat, step 1 or 5.';
      return 'Try the bright steps, 1 and 5.';
    }
    if (best === 'rest') {
      var crowd = null;
      for (i = 0; i < notesList.length; i++) {
        var n = notesList[i], pat = placements[n.row].pattern;
        if (pat[(n.step + STEPS - 1) % STEPS]) { crowd = n; break; }
      }
      if (crowd) return 'Try a rest before step ' + (crowd.step + 1) + '.';
      return 'Leave two gaps before each note.';
    }
    if (best === 'pulse') {
      var un = [];
      for (s = 0; s < STEPS; s++) for (i = 0; i < placements.length; i++) if (placements[i].pattern[s]) { un.push(s); break; }
      var mg = 99, a = 0, b = 0;
      for (i = 0; i < un.length; i++) {
        var nx = un[(i + 1) % un.length], gp = ((nx - un[i]) + STEPS) % STEPS || STEPS;
        if (gp < mg) { mg = gp; a = un[i]; b = nx; }
      }
      return 'Steps ' + (a + 1) + ' and ' + (b + 1) + ' are close together. Spread them out.';
    }
    if (best === 'call') {
      var first = notesList[0], other = null, order = ['frog', 'cricket', 'owl', 'jar'];
      for (i = 0; i < placements.length; i++) if (placements[i].type !== first.type) { other = placements[i].type; break; }
      return other ? 'Let the ' + NAMES[other] + ' answer the ' + NAMES[first.type] + ', one after the other.' : 'Let two voices take turns.';
    }
    // harmony: stack a different voice on a step that has one voice
    var solo = null;
    for (i = 0; i < notesList.length; i++) {
      var cnt = 0;
      for (var j = 0; j < notesList.length; j++) if (notesList[j].step === notesList[i].step && notesList[j].type !== notesList[i].type) cnt++;
      if (!cnt) { solo = notesList[i]; break; }
    }
    if (solo) {
      var partner = null;
      for (i = 0; i < placements.length; i++) if (placements[i].type !== solo.type && placements[i].type !== 'jar') { partner = placements[i].type; break; }
      if (partner) return 'Put the ' + NAMES[partner] + ' on step ' + (solo.step + 1) + ' with the ' + NAMES[solo.type] + '.';
    }
    return 'Put two voices on one step.';
  }

  // Observation for the play phase and the dry run: which enemies were ever in a creature's reach, and who got through.
  // Reads the state only; the rules never look at it.
  function newRec() { return { kind: {}, cov: {}, lastCov: {}, leaks: [] }; }
  function observe(state, events, rec) {
    var i, e;
    for (i = 0; i < state.enemies.length; i++) {
      e = state.enemies[i];
      rec.kind[e.id] = e.type;
      for (var k = 0; k < state.placements.length; k++) {
        if (enemiesInRange(state, state.placements[k]).indexOf(e) >= 0) { rec.cov[e.id] = true; rec.lastCov[e.id] = Math.max(rec.lastCov[e.id] === undefined ? -1 : rec.lastCov[e.id], e.stone); break; }
      }
    }
    for (i = 0; i < events.length; i++) if (events[i].type === 'bite') {
      var id = events[i].enemy;
      rec.leaks.push({ type: rec.kind[id], covered: !!rec.cov[id], lastCov: rec.lastCov[id] === undefined ? -1 : rec.lastCov[id] });
    }
  }
  // The real play phase and the dry run both come through here: a fresh sim from the pattern, wave armed at a loop
  // boundary after `lead` extra steps, run to the end. t0 is where the loop happens to be (it must not matter).
  function runReport(level, placements, o) {
    o = o || {};
    var st = create(level, placements, o), rec = newRec(), log = [];
    st.t = o.t0 || 0; arm(st); st.base += (o.lead || 0);
    var cap = st.t + 8 * 400;
    var cleared = false;
    while (!st.over && st.t < cap) {
      var ev = step(st);
      observe(st, ev, rec);
      if (st.t > st.base) log.push(JSON.stringify(ev));
      // a dry run may have a goal that is not met yet: it ends when the wave is done
      if (!st.over && st.spawned >= level.wave.length && st.enemies.length === 0) { cleared = true; break; }
    }
    cleared = cleared || st.over === 'win';
    return { won: st.over === 'win', cleared: cleared, lilies: st.lilies, steps: st.t - (o.t0 || 0), dealt: st.dealt, leaks: rec.leaks, log: log.join('|') };
  }

  // ---------- song codes ----------
  // PC1-F1a-C44-O80-J01 : one chunk per row, a type letter then the pattern as two hex digits (step 0 is the low bit).
  var LETTER = { frog: 'F', cricket: 'C', owl: 'O', jar: 'J' };
  var TYPE_OF = { F: 'frog', C: 'cricket', O: 'owl', J: 'jar' };
  function encode(placements) {
    var out = ['PC1'];
    for (var i = 0; i < placements.length; i++) {
      var bits = 0;
      for (var s = 0; s < STEPS; s++) if (placements[i].pattern[s]) bits |= 1 << s;
      out.push(LETTER[placements[i].type] + (bits < 16 ? '0' : '') + bits.toString(16));
    }
    return out.join('-');
  }
  // Returns [{type, pattern}] or null when the text is not a song code.
  function decode(text) {
    if (typeof text !== 'string') return null;
    var parts = text.trim().split('-');
    if (parts[0] !== 'PC1' || parts.length < 2 || parts.length > 7) return null;
    var out = [];
    for (var i = 1; i < parts.length; i++) {
      var m = /^([FCOJ])([0-9a-fA-F]{2})$/.exec(parts[i]);
      if (!m) return null;
      var bits = parseInt(m[2], 16), pat = [];
      for (var s = 0; s < STEPS; s++) pat.push((bits >> s) & 1);
      out.push({ type: TYPE_OF[m[1]], pattern: pat });
    }
    return out;
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
    power: power, groove: groove, padPower: padPower, perchDist: perchDist, encode: encode, decode: decode, TIERS: TIER_NAMES,
    geometry: geometry, create: create, arm: arm, step: step,
    readyState: readyState, nextHint: nextHint, hintsLeft: hintsLeft, wavePreview: wavePreview, reach: reach, grooveTip: grooveTip, newRec: newRec, observe: observe, runReport: runReport, NAMES: NAMES, VOICE_NAMES: VOICE_NAMES,
    inRange: inRange, goalProgress: goalProgress, enemiesInRange: enemiesInRange, run: run, hints: hints, notes: notes, stars: stars
  };
})();
if (typeof module !== 'undefined') module.exports = PondSim;

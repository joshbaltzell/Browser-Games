// Smoke test for dishes 15 and 16 (habitat 3) through the game's normal simulation API (sim.js hands them to sim3.js).
// Run from the repo root:  node games/look-alive/dev/smoke-h3.js        (about 30 s)
// Every line is PASS or FAIL with the numbers behind it. The last line is SMOKE-H3 PASS or SMOKE-H3 FAIL.
'use strict';
var path = require('path');
var G = path.join(__dirname, '..');
var Sim = require(path.join(G, 'sim.js')), Lv = require(path.join(G, 'levels.js')), Cards = require(path.join(G, 'cards.js'));
require(path.join(G, 'levels2.js')); var L3 = require(path.join(G, 'levels3.js'));
var P = Lv.PLANET;
var results = [];
function line(ok, name, text) { results.push(ok); console.log((ok ? 'PASS ' : 'FAIL ') + name + '  ' + text); return ok; }
function now() { return Number(process.hrtime.bigint()) / 1e6; }
function withSeed(D, seed) { var d = Object.assign({}, D); d.agents = JSON.parse(JSON.stringify(D.agents)); d.agents.seed = seed; return d; }
function runOf(D, b, opts) { var run = Sim.play(P, D, b, opts || { n: 64, snapEvery: 10 }); run.v = Sim.verdict(run); run.autopsy = run.v.win ? null : Sim.autopsy(run); return run; }
function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; };
var STAY = { kind: 'machine', sensor: 'food', cmp: 'gt', value: 0.015, action: 'stay', otherwise: 'seek' };
var DISH = { 15: Lv.dish(15), 16: Lv.dish(16) };
var NAME = { 15: 'dish 15 (Where the Food Is)', 16: 'dish 16 (Stop When Fed)' };
var FIX = { 15: Lv.applyFix(Lv.carry(15), DISH[15].fixes[0]), 16: Lv.applyFix(Lv.carry(16), DISH[16].fixes[0]) };
var T = 300;

// ---------------------------------------------------------------- S1: every field of a run
var H_KEYS = ['tick', 'share', 'nativeShare', 'nat', 'rob', 'food', 'total', 'stage', 'kill', 'fires', 'lead', 'births', 'rate', 'nrate', 'qsig', 'radioMult', 'rawG', 'rawW', 'rawC', 'rawR', 'regT', 'regM', 'regF', 'regD', 'regR', 'sloppy', 'acid', 'dorm'];
var SUSP_KEYS = ['growth', 'waste', 'casualties', 'regularity', 'motion'];
var SNAP_ARR = ['robot', 'native', 'food', 'waste', 'quorum'], ST_ARR = ['Z', 'SP', 'N', 'F', 'WA', 'WB', 'Q'];
[15, 16].forEach(function (id) {
  var D = DISH[id], miss = [], run = Sim.play(P, D, Lv.carry(id), { n: 16, snapEvery: 3 });   // n and snapEvery must be ignored
  ['P', 'dish', 'build', 'bp', 'channels', 'n', 'T', 'H', 'snaps', 'v', 'frames', 'foods', 'boulders', 'deaths', 'agents'].forEach(function (k) { if (run[k] == null) miss.push(k); });
  if (run.n !== 64) miss.push('n=' + run.n + ' (want 64)');
  if (run.T !== T) miss.push('T=' + run.T);
  if (run.agents !== true) miss.push('agents flag');
  if (run.P !== P) miss.push('P is not the game P');
  if (run.dish !== D) miss.push('dish');
  if (!run.bp || typeof run.bp.paceMult !== 'number') miss.push('bp.paceMult');
  ['growth', 'waste', 'casualties', 'regularity', 'motion'].forEach(function (c) { if (typeof run.channels[c] !== 'boolean') miss.push('channels.' + c); });
  if (run.channels.motion !== (D.channels.indexOf('motion') >= 0)) miss.push('channels.motion has the wrong value');
  H_KEYS.forEach(function (k) { if (!run.H[k] || run.H[k].length !== T + 1) miss.push('H.' + k + ' length ' + (run.H[k] && run.H[k].length)); });
  SUSP_KEYS.forEach(function (k) { if (!run.H.susp || !run.H.susp[k] || run.H.susp[k].length !== T + 1) miss.push('H.susp.' + k); });
  if (!run.H.nat[0] || !run.H.rob[0] || !run.H.food[0]) miss.push('H.nat/rob/food at tick 0 are zero');
  if (!(run.snaps.length === 31)) miss.push('snaps ' + run.snaps.length + ' (want 31)');
  run.snaps.forEach(function (sn, i) {
    if (sn.tick !== i * 10) miss.push('snap ' + i + ' tick ' + sn.tick);
    SNAP_ARR.forEach(function (k) { if (!sn[k] || sn[k].length !== 4096) miss.push('snap ' + i + '.' + k); });
    ST_ARR.forEach(function (k) { if (!sn.st || !sn.st[k] || sn.st[k].length !== 4096) miss.push('snap ' + i + '.st.' + k); });
  });
  var sumR = 0, sumN = 0, k; for (k = 0; k < 4096; k++) { sumR += run.snaps[0].robot[k]; sumN += run.snaps[0].native[k]; }
  if (Math.abs(sumN / 4096 - run.H.nat[0]) > 0.02 || Math.abs(sumR / 4096 - run.H.rob[0]) > 0.02) miss.push('snap 0 grid sums (' + (sumN / 4096).toFixed(3) + ', ' + (sumR / 4096).toFixed(3) + ') do not match H.nat[0], H.rob[0] (' + run.H.nat[0].toFixed(3) + ', ' + run.H.rob[0].toFixed(3) + ')');
  if (run.frames.length !== T + 1 || !run.frames[0].x) miss.push('frames');
  if (!run.foods.length || !run.foods[0].length) miss.push('foods');
  if (!Array.isArray(run.boulders) || !run.boulders.length) miss.push('boulders');
  if (!Array.isArray(run.deaths)) miss.push('deaths');
  ['win', 'alive', 'bandFrac', 'maxStage', 'peakS', 'finalShare', 'exposedAt'].forEach(function (k) { if (run.v[k] == null) miss.push('v.' + k); });
  var r2 = Sim.resume(run, 5); if (!r2 || r2.v.win !== run.v.win || r2.H.share[T] !== run.H.share[T]) miss.push('resume does not replay the same run');
  var rs = Sim.restore(run, 5); if (!rs || rs.tick !== 50 || rs.n !== 64 || rs.robot.length !== 4096 || rs.native.length !== 4096 || rs.food.length !== 4096 || rs.waste.length !== 4096 || rs.wasteMix.length !== 4096 || rs.quorum.length !== 4096) miss.push('restore');
  run.v = Sim.verdict(run); var a = Sim.autopsy(run);
  if (!run.v.win) { ['cause', 'from', 'to', 'text', 'stat', 'headline'].forEach(function (k) { if (a == null || a[k] == null) miss.push('autopsy.' + k); }); }
  line(miss.length === 0, 'S1 ' + NAME[id] + ' run has every field the game reads', miss.length ? miss.join('; ') : 'P, dish, build, bp, channels (incl. motion), n=64, T=300, H (' + H_KEYS.length + ' keys + susp ' + SUSP_KEYS.join('/') + ', all ' + (T + 1) + ' long), 31 snapshots of 4096 squares with st.Z/SP/N/F/WA/WB/Q, frames, foods, boulders, deaths, agents, v, resume, restore, autopsy');
});

// ---------------------------------------------------------------- S2: the carried cell loses, the fix wins, and not by luck of the seed
[15, 16].forEach(function (id) {
  var D = DISH[id], want = id === 15 ? ['starved', 'below'] : ['exposed:motion'];
  var c = runOf(D, Lv.carry(id)), f = runOf(D, FIX[id]);
  line(!c.v.win && want.indexOf(c.autopsy.cause) >= 0 && f.v.win, 'S2 ' + NAME[id] + ' carried cell loses by ' + want.join(' or ') + ', the intended fix wins',
    'carried: ' + (c.v.win ? 'WON' : 'lost by ' + c.autopsy.cause + ' at tick ' + c.autopsy.to) + '; fix: ' + (f.v.win ? 'won (band ' + Math.round(f.v.bandFrac * 100) + '%, peak stage ' + f.v.maxStage + ')' : 'LOST by ' + f.autopsy.cause));
  var cl = 0, fw = 0, causes = {}, seeds = [];
  for (var s = 1; s <= 10; s++) {
    var Ds = withSeed(D, s), rc = Sim.play(P, Ds, Lv.carry(id), { record: false }), rf = Sim.play(P, Ds, FIX[id], { record: false });
    if (!rc.v.win) { cl++; var cs = Sim.autopsy(rc).cause; causes[cs] = (causes[cs] || 0) + 1; }
    if (rf.v.win) fw++; seeds.push(s + ':' + (rc.v.win ? 'C-win' : 'C-lose') + '/' + (rf.v.win ? 'F-win' : 'F-LOSE'));
  }
  line(cl >= 9 && fw >= 9, 'S2 ' + NAME[id] + ' over seeds 1 to 10 (seed 1 is the dish default; 2 to 10 are the other nine)', 'carried cell loses ' + cl + ' of 10 (' + JSON.stringify(causes) + '), intended fix wins ' + fw + ' of 10 (target: at least 9 each)  [' + seeds.join(' ') + ']');
});

// ---------------------------------------------------------------- S3: the stat bars are the real run, and a loss shows in the right bar
function legalBuilds(D, count, seed) {
  var R = rng(seed), out = [], tries = 0, motors = [null, 'flagellum', 'pili', 'vesicles'];
  // four builds near the intended fix first (so the sample holds wins as well as losses), then random legal builds
  var near = [FIX[D.id], Object.assign({}, FIX[D.id], { parts: FIX[D.id].parts.concat(['naps']) }), Object.assign({}, FIX[D.id], { pace: 5, slop: 4 }), Object.assign({}, FIX[D.id], { pace: 3, slop: 5, metabolism: 'fermentation' })];
  near.forEach(function (b) { if (Sim.validate(D, b).ok && out.length < count) out.push(JSON.parse(JSON.stringify(b))); });
  while (out.length < count && tries++ < 500) {
    var parts = [], m = motors[Math.floor(R() * motors.length)];
    if (m) parts.push(m);
    if (R() < 0.5) parts.push('chemo');
    if (R() < 0.3) parts.push('naps');
    var rule = null;
    if (D.id === 16 && R() < 0.6) {
      var kind = Math.floor(R() * 3);
      rule = kind === 0 ? { kind: 'machine', sensor: 'food', cmp: 'gt', value: [0.005, 0.01, 0.015, 0.025, 0.04][Math.floor(R() * 5)], action: 'stay', otherwise: 'seek' }
        : kind === 1 ? { kind: 'machine', sensor: 'crowd', cmp: 'gt', value: [2, 4, 6, 8][Math.floor(R() * 4)], action: 'pause', otherwise: 'seek' }
        : { kind: 'machine', sensor: 'food', cmp: 'lt', value: 0.015, action: 'seek', otherwise: 'stay' };
    }
    var b = { pace: 2 + Math.floor(R() * 5), slop: Math.floor(R() * 7), metabolism: R() < 0.7 ? 'respiration' : 'fermentation', parts: parts, reflex: rule };
    if (Sim.validate(D, b).ok) out.push(b);
  }
  return out;
}
[15, 16].forEach(function (id) {
  var D = DISH[id], builds = legalBuilds(D, 12, 100 + id), bad = [], wins = 0, losses = 0, allSafeWins = 0;
  builds.forEach(function (b, i) {
    var st = Sim.stats(D, b), run = runOf(D, b), rs = Sim.runStats(run);
    if (JSON.stringify(st) !== JSON.stringify(rs)) bad.push('build ' + i + ': stats() differs from runStats(play())');
    var allSafe = st.every(function (s) { return s.state === 'safe'; });
    if (run.v.win) wins++; else losses++;
    if (allSafe && !run.v.win) bad.push('build ' + i + ': every bar safe but the run lost (' + run.autopsy.cause + ')');
    if (allSafe && run.v.win) allSafeWins++;
    if (!run.v.win) {
      var cs = Sim.causeStat(D, run.autopsy.cause), bar = st.filter(function (s) { return s.id === cs; })[0];
      if (!bar) bad.push('build ' + i + ': cause ' + run.autopsy.cause + ' is blamed on "' + cs + '", which is not shown');
      else if (bar.state === 'safe') bad.push('build ' + i + ': lost by ' + run.autopsy.cause + ' but the ' + cs + ' bar reads safe');
      if (run.autopsy.stat !== cs) bad.push('build ' + i + ': autopsy.stat ' + run.autopsy.stat + ' is not ' + cs);
    }
    st.forEach(function (s) { if (['id', 'name', 'value', 'safe', 'state', 'verdict', 'checked'].some(function (k) { return s[k] === undefined; }) || ['safe', 'edge', 'low', 'high', 'unchecked'].indexOf(s.state) < 0) bad.push('build ' + i + ': stat ' + s.id + ' has the wrong shape'); });
  });
  line(bad.length === 0 && builds.length === 12, 'S3 ' + NAME[id] + ' stats() equals runStats(play()) on ' + builds.length + ' builds; all-safe implies a win; a loss has its stat unsafe', bad.length ? bad.join('; ') : wins + ' wins and ' + losses + ' losses among them; ' + allSafeWins + ' of the wins read every bar safe');
});

// ---------------------------------------------------------------- S4: nothing throws
[15, 16].forEach(function (id) {
  var D = DISH[id], errs = [], notes = [];
  function tryIt(name, fn) { try { return fn(); } catch (e) { errs.push(name + ': ' + (e && e.message)); return undefined; } }
  var carried = Lv.carry(id), fix = FIX[id];
  tryIt('validate', function () { var a = Sim.validate(D, carried), b = Sim.validate(D, fix); if (!a.ok || !b.ok) errs.push('validate rejects carried/fix: ' + JSON.stringify(a.problems.concat(b.problems))); });
  tryIt('conform', function () { var c = Sim.conform(D, carried); if (!Sim.validate(D, c).ok) errs.push('conform result is not legal'); });
  var allCards = [];
  tryIt('offered', function () { Sim.SLOT_ORDER.forEach(function (s) { Sim.offered(D, s).forEach(function (c) { allCards.push(c.id); }); }); notes.push('offered ' + allCards.join(',')); });
  tryIt('cardEffects', function () { allCards.forEach(function (cid) { var e = Sim.cardEffects(D, carried, cid); if (!e || !Array.isArray(e.changes)) errs.push('cardEffects ' + cid); }); });
  tryIt('statDiff', function () { var d = Sim.statDiff(D, carried, fix); if (!Array.isArray(d) || d.length !== D.stats.length) errs.push('statDiff'); });
  tryIt('statFixers', function () { D.stats.forEach(function (sid) { var f = Sim.statFixers(D, carried, sid); if (!Array.isArray(f)) errs.push('statFixers ' + sid); }); });
  var lost = runOf(D, carried), won = runOf(D, fix);
  tryIt('liveStats', function () { [lost, won].forEach(function (r) { [0, 100, 300].forEach(function (t) { var l = Sim.liveStats(r, t); if (l.length !== D.stats.length) errs.push('liveStats ' + t); l.forEach(function (s) { if (s.state == null || s.safe == null || s.name == null) errs.push('liveStats shape'); }); }); }); });
  tryIt('autopsy', function () { var a = Sim.autopsy(lost); if (!a || !a.headline) errs.push('autopsy headline'); if (Sim.autopsy(won) !== null) errs.push('autopsy of a win is not null'); });
  tryIt('predict', function () { var p = Sim.predict(D, carried, P); if (!p || !p.energy) errs.push('predict'); Sim.predict(D, fix, P); });
  tryIt('grade', function () { var g = Sim.grade(won, D, fix); if (['Passable', 'Convincing', 'Benign'].indexOf(g) < 0) errs.push('grade of a win is ' + g); if (Sim.grade(lost, D, carried) !== null) errs.push('grade of a loss is not null'); notes.push('grade ' + g); });
  tryIt('dissolved', function () { if (Sim.dissolved(D, carried) !== false) errs.push('dissolved is not false'); });
  tryIt('diffWords', function () { Sim.diffWords(D, carried, fix); });
  tryIt('energyOf', function () { notes.push('energy fix ' + Sim.energyOf(Sim.normalize(fix)) + ' of ' + D.energy); });
  tryIt('slot-shaped build', function () { var sb = Sim.toSlots(fix), r = Sim.play(P, D, { pace: 4, slop: 3, slots: sb }, { record: false }); if (r.v.win !== won.v.win) errs.push('a slot-shaped build plays differently'); });
  line(errs.length === 0, 'S4 ' + NAME[id] + ' validate, conform, offered, cardEffects, statDiff, statFixers, liveStats (ticks 0, 100, 300), autopsy, predict, grade do not throw', errs.length ? errs.join('; ') : notes.join('; '));
});
(function () {   // dish 16 legality: a reflex with a sensor or an action the dish does not list is rejected; a swim action with no motor is allowed
  var D = DISH[16], errs = [], base = Lv.carry(16);
  function rule(o) { return Object.assign({ kind: 'machine', sensor: 'food', cmp: 'gt', value: 0.015, action: 'stay', otherwise: 'seek' }, o); }
  function b(r) { return Object.assign({}, base, { reflex: r }); }
  if (!Sim.validate(D, b(rule())).ok) errs.push('the intended rule is rejected: ' + Sim.validate(D, b(rule())).problems);
  [['sensor temp', rule({ sensor: 'temp' })], ['sensor share', rule({ sensor: 'share' })], ['action fast', rule({ action: 'fast' })], ['action toward', rule({ action: 'toward' })], ['otherwise hotter', rule({ otherwise: 'hotter' })], ['otherwise fast', rule({ otherwise: 'fast' })]].forEach(function (c) { if (Sim.validate(D, b(c[1])).ok) errs.push(c[0] + ' is accepted'); });
  if (!Sim.validate(D, { pace: 4, slop: 3, metabolism: 'respiration', parts: [], reflex: rule({ action: 'seek', otherwise: 'seek' }) }).ok) errs.push('a swim action with no motor is rejected');
  if (Sim.validate(DISH[15], b(rule())).ok) errs.push('dish 15 accepts a reflex');
  line(errs.length === 0, 'S4b dish 16 accepts its own sensors and actions, rejects others (incl. "otherwise"), allows a swim action with no motor; dish 15 has no reflex slot', errs.length ? errs.join('; ') : 'ok (there is no soft "this part does nothing" warning in the game to hook into, so none is produced)');
})();

// ---------------------------------------------------------------- S5: speed
(function () {
  var D = DISH[16], warm = { pace: 5, slop: 2, metabolism: 'respiration', parts: ['pili'], reflex: null };
  Sim.stats(D, warm);   // warm the JIT on a different build
  var times1 = [], times2 = [], i, fresh = [
    { pace: 3, slop: 4, metabolism: 'respiration', parts: ['flagellum', 'chemo'], reflex: STAY }, { pace: 4, slop: 3, metabolism: 'fermentation', parts: ['flagellum', 'chemo'], reflex: STAY },
    { pace: 4, slop: 2, metabolism: 'respiration', parts: ['vesicles'], reflex: null }, { pace: 5, slop: 5, metabolism: 'respiration', parts: ['flagellum'], reflex: null }];
  fresh.forEach(function (b) { var t0 = now(); Sim.stats(D, b); times1.push(now() - t0); var t1 = now(); Sim.stats(D, b); times2.push(now() - t1); });
  var m1 = Math.max.apply(null, times1), m2 = Math.max.apply(null, times2);
  line(m1 < 200 && m2 < 2, 'S5 first stats() call for a build under 200 ms, the cached second call under 2 ms', 'first calls ' + times1.map(function (x) { return x.toFixed(0) + ' ms'; }).join(', ') + '; cached ' + times2.map(function (x) { return x.toFixed(2) + ' ms'; }).join(', '));
})();

// ---------------------------------------------------------------- S6: Pace and Sloppiness alone never win
[15, 16].forEach(function (id) {
  var D = DISH[id], wins = [], n = 0, base = Lv.carry(id);
  for (var pace = 0; pace <= 8; pace++) for (var slop = 0; slop <= 8; slop++) {
    var b = { pace: pace, slop: slop, metabolism: base.metabolism, parts: base.parts.slice(), reflex: base.reflex };
    if (!Sim.validate(D, b).ok) continue;
    n++;
    if (Sim.play(P, D, b, { record: false }).v.win) wins.push('pace ' + pace + ' slop ' + slop);
  }
  line(wins.length === 0, 'S6 ' + NAME[id] + ' no Pace and Sloppiness setting on the carried cell wins', n + ' settings tried (Pace 0 to 8 by Sloppiness 0 to 8), ' + wins.length + ' win' + (wins.length ? ': ' + wins.join(', ') : ''));
});

var allOk = results.every(Boolean);
console.log('SMOKE-H3 ' + (allOk ? 'PASS' : 'FAIL') + ' (' + results.filter(Boolean).length + ' of ' + results.length + ' lines pass)');
process.exit(allOk ? 0 : 1);

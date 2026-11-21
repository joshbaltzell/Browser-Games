// Measurements for sim3.js (habitat 3 individual-cell simulation).
// Run: node games/look-alive/dev/measure-h3.js        (about a minute)
// Every line is PASS or FAIL with the numbers behind it. Seeds 1..10 unless noted. Dish: LookAliveSim3.defaults(); M9 to M13 use dish 17 (A Little Light) from levels3.js.
'use strict';
var path = require('path');
var L = require(path.join(__dirname, '..', 'sim3.js'));

var SEEDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var MARK = 0.015;                       // the "stay when fed" mark used by the M5 to M8 rule (food units at the scout's square)
var NOGUARDS = { stage: [1e9, 1e9, 1e9] };   // used only where a line tests the ecology and not the guards

function dish(mut) { var a = L.defaults(); if (mut) mut(a); return { agents: a }; }
function stayRule(mark) { return { kind: 'machine', sensor: 'food', cmp: 'gt', value: mark, action: 'stay', otherwise: 'seek' }; }
function build(parts, extra) { var b = { pace: 4, slop: 3, metabolism: 'respiration', parts: parts, reflex: null }; for (var k in (extra || {})) b[k] = extra[k]; return b; }
function line(ok, name, text) { console.log((ok ? 'PASS ' : 'FAIL ') + name + '  ' + text); return ok; }
function mean(a) { var s = 0; for (var i = 0; i < a.length; i++) s += a[i]; return a.length ? s / a.length : 0; }
function f2(v) { return v.toFixed(2); }
function f3(v) { return v.toFixed(3); }

function fnv(h, bytes) {
  for (var i = 0; i < bytes.length; i++) { h ^= bytes[i]; h = Math.imul(h, 16777619) >>> 0; }
  return h;
}
function hashRun(run) {
  var h = 2166136261, key;
  ['share', 'scouts', 'natives', 'total', 'food', 'stage', 'kill', 'moveS', 'moveN'].forEach(function (k) { h = fnv(h, new Uint8Array(run.H[k].buffer)); });
  for (key in run.H.susp) h = fnv(h, new Uint8Array(run.H.susp[key].buffer));
  for (var t = 0; t < run.frames.length; t++) {
    var f = run.frames[t];
    h = fnv(h, new Uint8Array(f.id.buffer)); h = fnv(h, new Uint8Array(f.x.buffer)); h = fnv(h, new Uint8Array(f.y.buffer));
    h = fnv(h, f.h); h = fnv(h, f.k);
  }
  return h;
}
function play(b, seed, mut, tune, extra) {
  var o = { seed: seed, record: false, tune: tune }; for (var k in (extra || {})) o[k] = extra[k];
  return L.play(dish(mut), b, o);
}

var results = [];
var D = L.defaults(), lo = D.band.lo;
var FC = ['flagellum', 'chemo'];

// M1 determinism
(function () {
  var b = build(FC, { reflex: stayRule(MARK) }), r1 = L.play(dish(), b, { seed: 3 }), r2 = L.play(dish(), b, { seed: 3 }), r3 = L.play(dish(), b, { seed: 4 });
  var h1 = hashRun(r1), h2 = hashRun(r2), h3 = hashRun(r3);
  results.push(line(h1 === h2 && h1 !== h3, 'M1 same seed, same run', 'hash seed3 = ' + h1.toString(16) + ' and ' + h2.toString(16) + ', seed4 = ' + h3.toString(16)));
})();

// M2 speed and memory
(function () {
  var b = build(FC, { reflex: stayRule(MARK) }), times = [], peak = 0, mb = 0, i;
  L.play(dish(), b, { seed: 99 });   // warm the JIT
  SEEDS.forEach(function (s) {
    var t0 = process.hrtime.bigint(), r = L.play(dish(), b, { seed: s }), ms = Number(process.hrtime.bigint() - t0) / 1e6;
    times.push(ms);
    var bytes = 0;
    for (i = 0; i < r.frames.length; i++) { var f = r.frames[i]; if (f.n > peak) peak = f.n; bytes += f.id.byteLength + f.x.byteLength + f.y.byteLength + f.h.byteLength + f.k.byteLength; }
    for (i = 0; i < r.foods.length; i++) bytes += r.foods[i].byteLength;
    if (bytes / 1048576 > mb) mb = bytes / 1048576;
  });
  var m = mean(times);
  results.push(line(m < 150, 'M2 speed', 'mean ' + m.toFixed(0) + ' ms per recorded 300-tick run (worst ' + Math.max.apply(null, times).toFixed(0) + ' ms); peak individuals ' + peak + '; frames+foods ' + mb.toFixed(1) + ' MB'));
})();

// M3 natives alone
(function () {
  var ok = 0, worst = 0, cnt = [0, 0, 0], mv = [], minKind = [1e9, 1e9, 1e9];
  SEEDS.forEach(function (s) {
    var r = L.play(dish(function (a) { a.start = 0; }), build([]), { seed: s });
    var tot = [], k, i, t;
    for (t = 200; t <= 300; t++) tot.push(r.H.natives[t]);
    var m = mean(tot), dev = 0;
    tot.forEach(function (v) { dev = Math.max(dev, Math.abs(v - m) / m); });
    var last = r.frames[300], c = [0, 0, 0];
    for (i = 0; i < last.n; i++) c[(last.k[i] & 7) - 1]++;
    // every kind present on every one of the last 100 ticks
    var alive = true;
    for (t = 200; t <= 300; t++) { var cc = [0, 0, 0], fr = r.frames[t]; for (i = 0; i < fr.n; i++) cc[(fr.k[i] & 7) - 1]++; for (k = 0; k < 3; k++) { if (cc[k] < minKind[k]) minKind[k] = cc[k]; if (cc[k] === 0) alive = false; } }
    for (k = 0; k < 3; k++) cnt[k] += c[k] / SEEDS.length;
    mv.push(L.summary(r).moveNatives);
    if (alive && dev <= 0.15) ok++;
    if (dev > worst) worst = dev;
  });
  results.push(line(ok === 10, 'M3 natives alone', ok + '/10 seeds steady; worst swing ' + (worst * 100).toFixed(1) + '% (limit 15%); final mean counts quad ' + cnt[0].toFixed(0) + ', halo ' + cnt[1].toFixed(0) + ', sali ' + cnt[2].toFixed(0) + '; fewest of each seen ' + minKind.join('/') + '; native moving fraction ' + f2(mean(mv))));
})();

// M4 a cell that cannot move starves; one that can keeps its share
(function () {
  var starve = 0, causes = {}, keep = 0, finals = [];
  SEEDS.forEach(function (s) {
    var r = play(build([]), s);
    if (!r.v.win && r.autopsy && (r.autopsy.cause === 'starved' || r.autopsy.cause === 'below')) starve++;
    var c = r.autopsy ? r.autopsy.cause : 'win'; causes[c] = (causes[c] || 0) + 1;
    var r2 = play(build(FC), s, null, NOGUARDS);
    if (r2.H.share[300] >= lo) keep++;
    finals.push(r2.H.share[300]);
  });
  results.push(line(starve >= 9, 'M4a no motor, no reflex loses by starving or staying below', starve + '/10 (causes ' + JSON.stringify(causes) + ')'));
  results.push(line(keep >= 9, 'M4b flagellum + chemo holds the band floor', keep + '/10 end at or above ' + lo + ' (mean final share ' + f3(mean(finals)) + '; guards switched off for this line)'));
})();

// M5 stop when fed
(function () {
  var loseOk = 0, causes = {}, winOk = 0, wc = {};
  SEEDS.forEach(function (s) {
    var r = play(build(FC), s);
    var c = r.autopsy ? r.autopsy.cause : 'win'; causes[c] = (causes[c] || 0) + 1;
    if (!r.v.win && (c === 'exposed:motion' || c === 'overgrew')) loseOk++;
    var r2 = play(build(FC, { reflex: stayRule(MARK) }), s);
    var c2 = r2.autopsy ? r2.autopsy.cause : 'win'; wc[c2] = (wc[c2] || 0) + 1;
    if (r2.v.win) winOk++;
  });
  results.push(line(loseOk >= 9, 'M5a flagellum + chemo, no reflex, loses', loseOk + '/10 by exposed:motion or overgrew (causes ' + JSON.stringify(causes) + ')'));
  results.push(line(winOk >= 9, 'M5b same build with the stay rule (food > ' + MARK + ')', winOk + '/10 win (outcomes ' + JSON.stringify(wc) + ')'));
})();

// M6 even food: no motor does at least as well as the flagellum build
(function () {
  function run(guards) {
    var ge = 0, a = [], b = [];
    SEEDS.forEach(function (s) {
      var u = function (x) { x.uniform = true; };
      var rn = play(build([]), s, u, guards ? null : NOGUARDS), rf = play(build(FC), s, u, guards ? null : NOGUARDS);
      a.push(rn.H.share[300]); b.push(rf.H.share[300]);
      if (rn.H.share[300] >= rf.H.share[300]) ge++;
    });
    return { ge: ge, a: mean(a), b: mean(b) };
  }
  var e = run(false), g = run(true);
  results.push(line(e.ge >= 9, 'M6 uniform food, no motor >= flagellum + chemo (final share)', e.ge + '/10 (mean final share ' + f3(e.a) + ' vs ' + f3(e.b) + '; guards off). With guards on: ' + g.ge + '/10 (' + f3(g.a) + ' vs ' + f3(g.b) + ')'));
})();

// M7 table of builds
function cell(b, seeds, mut, tune) {
  var wins = 0, ib = [], fin = [], causes = {};
  seeds.forEach(function (s) {
    var r = play(b, s, mut, tune);
    if (r.v.win) wins++;
    ib.push(r.v.bandFrac); fin.push(r.H.share[300]);
    if (r.autopsy) causes[r.autopsy.cause] = (causes[r.autopsy.cause] || 0) + 1;
  });
  var top = '-', best = 0;
  for (var c in causes) if (causes[c] > best) { best = causes[c]; top = c + ' x' + best; }
  return { wins: wins, ib: mean(ib), fin: mean(fin), cause: top };
}
(function () {
  console.log('\nM7 builds (pace 4, slop 3), wins out of 10 | mean in-band fraction | mean final share | most common loss cause');
  var rows = [];
  ['none', 'vesicles', 'pili', 'flagellum'].forEach(function (m) {
    [true, false].forEach(function (chemo) {
      var parts = m === 'none' ? [] : [m]; if (chemo) parts.push('chemo');
      rows.push([m + (chemo ? ' + chemo' : ''), build(parts)]);
    });
  });
  rows.push(['flagellum + chemo + stay rule', build(FC, { reflex: stayRule(MARK) })]);
  rows.forEach(function (r) {
    var c = cell(r[1], SEEDS);
    console.log('  ' + (r[0] + '                              ').slice(0, 31) + c.wins + '/10  ' + f2(c.ib) + '  ' + f3(c.fin) + '  ' + c.cause);
  });
})();

// M8 dials
(function () {
  console.log('\nM8 dials for flagellum + chemo + stay rule: wins out of 10');
  var paces = [2, 4, 6], slops = [0, 3, 6];
  console.log('            slop 0   slop 3   slop 6');
  paces.forEach(function (p) {
    var row = '  pace ' + p + '    ';
    slops.forEach(function (sl) { row += (cell(build(FC, { pace: p, slop: sl, reflex: stayRule(MARK) }), SEEDS).wins + '/10     '); });
    console.log(row);
  });
})();

// ================================================================ dish 17 and the Light lineage (M9 to M13)
var Lv = require(path.join(__dirname, '..', 'levels.js'));
require(path.join(__dirname, '..', 'levels2.js')); require(path.join(__dirname, '..', 'levels3.js'));
var D15 = Lv.dish(15), D16 = Lv.dish(16), D17 = Lv.dish(17);
function cp(o) { return JSON.parse(JSON.stringify(o)); }
function run17(b, seed, record, tune) { return L.play(D17, b, { seed: seed, record: record === true, tune: tune }); }
var CARRY17 = Lv.carry(17), STAGE = ['', 'lightpump', 'lightsense', 'lightcolor'];
function withStage(k, extra) { var b = cp(CARRY17); if (k) b.parts.push(STAGE[k]); for (var key in (extra || {})) b[key] = extra[key]; return b; }

// M9 dishes 15 and 16 are unchanged by the light work: hash of H and frames for the carried cell and the intended fix, seed 1 (the dish default), recorded before the first edit
(function () {
  var WANT = { '15 carry': '9d7f2c77', '15 fix': '7e6aa053', '16 carry': '4fca2220', '16 fix': '2036660c' }, got = {}, ok = true, bad = [];
  [[15, D15], [16, D16]].forEach(function (p) {
    var id = p[0], D = p[1];
    [['carry', Lv.carry(id)], ['fix', Lv.applyFix(Lv.carry(id), D.fixes[0])]].forEach(function (q) {
      var key = id + ' ' + q[0], h = hashRun(L.play(D, q[1], { seed: D.agents.seed })).toString(16);
      got[key] = h; if (h !== WANT[key]) { ok = false; bad.push(key + ' is ' + h + ', was ' + WANT[key]); }
    });
  });
  results.push(line(ok, 'M9 dishes 15 and 16 unchanged', 'hashes ' + JSON.stringify(got) + (bad.length ? ' :: ' + bad.join('; ') : ' (all four equal the hashes from before the light edits)')));
})();

// M10 dish 17: the carried cell (dish 16's answer) loses by starving or staying small; the Light-driven pump wins
var M = {};   // per-stage numbers kept for the lines below
function stageRuns(k) {
  if (M[k]) return M[k];
  var o = { wins: 0, causes: {}, ib: [], fin: [], lit: [], glare: [], burned: 0, ms: [] }, last = null;
  SEEDS.forEach(function (s) {
    var b = withStage(k), t0 = process.hrtime.bigint(), r = run17(b, s, true), ms = Number(process.hrtime.bigint() - t0) / 1e6;
    o.ms.push(ms);
    if (r.v.win) o.wins++;
    var c = r.autopsy ? r.autopsy.cause : 'win'; o.causes[c] = (o.causes[c] || 0) + 1;
    o.ib.push(r.v.bandFrac); o.fin.push(r.H.share[300]);
    var a = 0, n = 0, t; for (t = D17.band.warm; t <= 300; t++) if (r.H.scouts[t] > 0) { a += r.H.light[t]; n++; }
    o.lit.push(n ? a / n : 0); o.glare.push(r.dCause.glare);
  });
  M[k] = o; return o;
}
(function () {
  var c = stageRuns(0), p = stageRuns(1), lose = (c.causes.starved || 0) + (c.causes.below || 0);
  results.push(line(lose >= 9 && p.wins >= 9, 'M10 dish 17: carried cell loses, Light-driven pump wins',
    'carried cell loses by starved or below on ' + lose + '/10 (causes ' + JSON.stringify(c.causes) + '; wins ' + c.wins + '); with lightpump wins ' + p.wins + '/10 (outcomes ' + JSON.stringify(p.causes) + '); mean in-band ' + f2(mean(c.ib)) + ' -> ' + f2(mean(p.ib)) + ', mean final share ' + f3(mean(c.fin)) + ' -> ' + f3(mean(p.fin))));
})();

// M11 Light sensing in place of the pump: at least as good, and the scouts spend more of their time in useful light
(function () {
  var p = stageRuns(1), s = stageRuns(2), k = stageRuns(3);
  var asGood = mean(s.ib) >= mean(p.ib) - 1e-9 || mean(s.fin) >= mean(p.fin) - 1e-9, up = mean(s.lit) > mean(p.lit);
  results.push(line(s.wins >= 9 && asGood && up, 'M11 dish 17: Light sensing',
    'wins ' + s.wins + '/10 (outcomes ' + JSON.stringify(s.causes) + '); mean in-band ' + f2(mean(p.ib)) + ' (stage 1) -> ' + f2(mean(s.ib)) + ' (stage 2); mean final share ' + f3(mean(p.fin)) + ' -> ' + f3(mean(s.fin)) +
    '; mean fraction of scouts in useful light: stage 1 ' + f3(mean(p.lit)) + ', stage 2 ' + f3(mean(s.lit)) + ', stage 3 ' + f3(mean(k.lit))));
})();

// M12 Colour sensing: wins, and loses far fewer scouts to glare than Light sensing
(function () {
  var p = stageRuns(1), s = stageRuns(2), k = stageRuns(3), gs = mean(s.glare), gk = mean(k.glare);
  results.push(line(k.wins >= 9 && gk <= 0.6 * gs, 'M12 dish 17: Colour sensing',
    'wins ' + k.wins + '/10 (outcomes ' + JSON.stringify(k.causes) + '); mean scouts lost to glare per run: stage 1 ' + f2(mean(p.glare)) + ', stage 2 ' + f2(gs) + ', stage 3 ' + f2(gk) + ' (need stage 3 at most 0.6 of stage 2); mean in-band ' + f2(mean(k.ib)) + ', mean final share ' + f3(mean(k.fin))));
})();

// M13 dials alone never win dish 17; each answer survives one Pace step either side; run time
(function () {
  var best = 0, bestAt = '', n = 0, solid = [];
  for (var pace = 0; pace <= 8; pace++) for (var slop = 0; slop <= 8; slop++) {
    var w = 0; n++;
    SEEDS.forEach(function (s) { if (run17(withStage(0, { pace: pace, slop: slop }), s).v.win) w++; });
    if (w > best) { best = w; bestAt = 'pace ' + pace + ' slop ' + slop; }
    if (w >= 9) solid.push('pace ' + pace + ' slop ' + slop);
  }
  var steps = [], stepOk = true;
  [1, 2, 3].forEach(function (k) {
    var row = [];
    [3, 5].forEach(function (pc) { var w = 0; SEEDS.forEach(function (s) { if (run17(withStage(k, { pace: pc }), s).v.win) w++; }); row.push('pace ' + pc + ': ' + w + '/10'); if (w < 7) stepOk = false; });
    steps.push(STAGE[k] + ' ' + row.join(', '));
  });
  var ms = stageRuns(3).ms, m = mean(ms);
  results.push(line(solid.length === 0 && stepOk && m < 150, 'M13 dish 17: dials alone, one Pace step either side, speed',
    n + ' Pace/Sloppiness settings on the carried cell x 10 seeds: best wins ' + best + '/10 (' + bestAt + '), settings winning 9 or more: ' + solid.length + (solid.length ? ' (' + solid.join(', ') + ')' : '') + '; stage answers one Pace step either side (need 7/10): ' + steps.join('; ') + '; mean recorded run ' + m.toFixed(0) + ' ms (worst ' + Math.max.apply(null, ms).toFixed(0) + ' ms, target under 150)'));
})();

var fails = results.filter(function (x) { return !x; }).length;
console.log('\n' + (fails ? fails + ' of ' + results.length + ' checks FAIL' : 'all ' + results.length + ' checks PASS'));

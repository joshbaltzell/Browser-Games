// Run: node games/honest-minigolf/dev/check.js
var GolfSim = require('../sim.js');
var H = require('../holes.js');
var HOLES = H.HOLES, WARMUP = H.WARMUP;
var fails = 0;
function ok(cond, msg) { if (!cond) { fails++; console.log('FAIL ' + msg); } }
function near(a, b, tol) { return Math.abs(a - b) <= tol; }

// ---- a blank 22 x 13 field with a border, for physics checks ----
function field(edit) {
  var rows = [], r, c;
  for (r = 0; r < 13; r++) {
    var s = '';
    for (c = 0; c < 22; c++) s += (r === 0 || r === 12 || c === 0 || c === 21) ? '#' : '.';
    rows.push(s);
  }
  if (edit) edit(function (c2, r2, ch) { rows[r2] = rows[r2].slice(0, c2) + ch + rows[r2].slice(c2 + 1); });
  return GolfSim.parse(rows);
}
function cy(r) { return r * 16 + 8; }

// honest straight shot stays on its line
(function () {
  var h = field(), res = GolfSim.shoot(h, { x: 176, y: 190 }, -Math.PI / 2, 0.45, null, 0);
  ok(res.path.length > 30, 'straight shot moves');
  ok(res.path.every(function (p) { return near(p.x, 176, 0.01); }), 'honest straight shot stays on its line');
  ok(res.bounces.length === 0, 'straight shot has no bounce at 0.45');
  // tilt east pushes the same shot east
  var t = GolfSim.shoot(h, { x: 176, y: 190 }, -Math.PI / 2, 0.45, { id: 'tilt', dir: 'E' }, 0);
  ok(t.rest.x - res.rest.x >= 12, 'tilt east drifts at least 12 px (got ' + (t.rest.x - res.rest.x).toFixed(1) + ')');
  var tw = GolfSim.shoot(h, { x: 176, y: 190 }, -Math.PI / 2, 0.45, { id: 'tilt', dir: 'W' }, 0);
  ok(res.rest.x - tw.rest.x >= 12, 'tilt west drifts west');
  ok(t.ticks < 2400, 'tilted ball comes to rest');
})();

// honest wall keeps and swapped paint
(function () {
  var h = field(function (set) { set(20, 2, '#'); set(20, 5, 'R'); set(20, 8, 'B'); set(20, 11, 'Y'); });
  var want = { '#': 0.72, R: 1.0, B: 0.4, Y: 1.3 }, swapWant = { '#': 0.72, R: 0.4, B: 1.0, Y: 1.3 };
  var rowOf = { '#': 2, R: 5, B: 8, Y: 11 };
  Object.keys(rowOf).forEach(function (k) {
    var res = GolfSim.shoot(h, { x: 240, y: cy(rowOf[k]) }, 0, 0.4, null, 0), b = res.bounces[0];
    ok(b && b.wall === k, 'bounce off ' + k + ' recorded');
    if (b) ok(near(b.vout / b.vin, want[k], 0.001), 'honest ' + k + ' keeps ' + want[k] + ' (got ' + (b.vout / b.vin).toFixed(3) + ')');
    var sw = GolfSim.shoot(h, { x: 240, y: cy(rowOf[k]) }, 0, 0.4, { id: 'swapped' }, 0), sb = sw.bounces[0];
    if (sb) ok(near(sb.vout / sb.vin, swapWant[k], 0.001), 'swapped ' + k + ' keeps ' + swapWant[k]);
  });
  // yellow is capped at 520
  var fast = GolfSim.shoot(h, { x: 300, y: cy(11) }, 0, 1.0, null, 0).bounces[0];
  ok(fast && fast.vout <= 520.001, 'kicker capped at 520');
})();

// a ball at rest against a wall cannot tunnel through it
(function () {
  var h = field(function (set) { set(12, 6, '#'); });
  var res = GolfSim.shoot(h, { x: 12 * 16 - 4, y: cy(6) }, 0, 1.0, null, 0);
  ok(res.rest.x < 12 * 16 - 3.9, 'no tunnelling from rest against a wall (x=' + res.rest.x.toFixed(2) + ')');
  var res2 = GolfSim.shoot(h, { x: 12 * 16 - 4.3, y: cy(6) + 7 }, 0, 1.0, null, 0);
  ok(res2.rest.x < 12 * 16, 'no tunnelling near a corner');
})();

// cup: slow sinks, fast does not; shy cup still takes a firm straight putt
(function () {
  var h = field(function (set) { set(15, 6, 'C'); });
  var from = { x: 168, y: cy(6) };
  var slow = GolfSim.shoot(h, from, 0, 0.42, null, 0), fast = GolfSim.shoot(h, from, 0, 1.0, null, 0);
  ok(slow.sunk, 'slow ball over the cup sinks');
  ok(!fast.sunk, 'fast ball does not sink');
  ok(fast.lipped, 'fast ball lips out');
  var shy = GolfSim.shoot(h, from, 0, 0.42, { id: 'shy' }, 0);
  ok(shy.sunk, 'under shy a firm straight putt still sinks');
  var weak = GolfSim.shoot(h, from, 0, 0.3, { id: 'shy' }, 0), weakH = GolfSim.shoot(h, from, 0, 0.3, null, 0);
  ok(weakH.sunk && !weak.sunk, 'a gentle putt sinks honestly but not under shy');
  var off = GolfSim.shoot(h, { x: 168, y: cy(6) + 3 }, -0.0, 0.3, { id: 'shy' }, 0);
  ok(Math.abs(off.rest.y - cy(6)) >= 0 && off.ticks < 2400, 'shy cup ball settles');
})();

// windmill gate: blocked in the first half of every 2.4 s
(function () {
  var h = field(function (set) { set(10, 6, 'W'); });
  var blocked = GolfSim.shoot(h, { x: 120, y: cy(6) }, 0, 0.4, null, 0);
  var open = GolfSim.shoot(h, { x: 120, y: cy(6) }, 0, 0.4, null, 1.2);
  ok(blocked.bounces.length > 0 && blocked.rest.x < 160, 'windmill blocks in first half');
  ok(open.bounces.length === 0 && open.rest.x > 170, 'windmill is open in second half');
})();

// diagonal and bumper deflect
(function () {
  var h = field(function (set) { set(10, 6, '4'); set(14, 6, 'o'); });
  var d = GolfSim.shoot(h, { x: 120, y: cy(6) - 3 }, 0, 0.4, null, 0);
  ok(d.bounces.length > 0, 'diagonal wall bounces');
  var o = GolfSim.shoot(h, { x: 208, y: cy(6) }, 0, 0.4, null, 0);
  ok(o.bounces.length > 0 && o.bounces[0].wall === 'o', 'bumper bounces');
})();

// ---- hole checks ----
function wallKinds(rows) {
  var k = {}; rows.join('').split('').forEach(function (c) { if ('#RBY'.indexOf(c) >= 0) k[c] = 1; });
  return Object.keys(k);
}
function longRun(rows) {
  var best = 0, r, c;
  var solid = function (ch) { return '#RBYWo1234'.indexOf(ch) >= 0; };
  for (r = 0; r < 13; r++) { var run = 0; for (c = 0; c < 22; c++) { if (!solid(rows[r][c])) { run++; if (run > best) best = run; } else run = 0; } }
  for (c = 0; c < 22; c++) { var run2 = 0; for (r = 0; r < 13; r++) { if (!solid(rows[r][c])) { run2++; if (run2 > best) best = run2; } else run2 = 0; } }
  return best;
}
ok(HOLES.length === 4, 'four hole templates');
HOLES.concat([WARMUP]).forEach(function (h) {
  ok(h.rows.length === 13 && h.rows.every(function (r) { return r.length === 22; }), h.id + ' is 22 x 13');
  var joined = h.rows.join('');
  ok(joined.split('T').length === 2 && joined.split('C').length === 2, h.id + ' has one tee and one cup');
  ok(wallKinds(h.rows).length >= 2, h.id + ' has at least two wall colours');
  if (h.tags.indexOf('long') >= 0) ok(longRun(h.rows) >= 10, h.id + ' tagged long has a 10 cell run');
  if (h.tags.indexOf('paint') >= 0) ok(joined.indexOf('R') >= 0 && joined.indexOf('B') >= 0, h.id + ' tagged paint has red and blue');
});
HOLES.forEach(function (h) {
  var hole = GolfSim.parse(h.rows), n = GolfSim.bot(hole, null);
  ok(n <= h.par + 1, h.id + ' honest bot strokes ' + n + ' <= par ' + h.par + ' + 1');
  var lies = [{ id: 'swapped' }, { id: 'shy' }, { id: 'tilt', dir: 'N' }, { id: 'tilt', dir: 'E' }, { id: 'tilt', dir: 'S' }, { id: 'tilt', dir: 'W' }];
  lies.forEach(function (lie) {
    var m = GolfSim.bot(hole, lie);
    ok(m <= 8, h.id + ' under ' + lie.id + (lie.dir || '') + ' bot strokes ' + m + ' <= 8');
  });
});
(function () { var n = GolfSim.bot(GolfSim.parse(WARMUP.rows), null, { maxStrokes: 6 }); ok(n <= 6, 'warm-up finishes honestly (bot ' + n + ')'); })();

// every card from seeds 0..59 satisfies the tag rule, and lies vary
(function () {
  var seen = {}, s;
  for (s = 0; s < 60; s++) {
    var c = GolfSim.card(s);
    ok(c.holes.length === 3 && new Set(c.holes).size === 3, 'card ' + s + ' has three different holes');
    ok(GolfSim.cardOk(c.lie, c.holes), 'card ' + s + ' (' + c.lie + ') satisfies the tag rule');
    seen[c.lie] = 1;
    var again = GolfSim.card(s);
    ok(JSON.stringify(again) === JSON.stringify(c), 'card ' + s + ' is deterministic');
  }
  ok(Object.keys(seen).length === 3, 'all three Slice 1 lies appear across seeds');
})();

// Hal has at least 24 lines and each fits the bubble (12 columns, 7 lines)
(function () {
  var HAL = require('../data.js'), all = [];
  (function walk(v) { if (typeof v === 'string') all.push(v); else if (v) Object.keys(v).forEach(function (k) { walk(v[k]); }); })(HAL);
  ok(all.length >= 24, 'Hal has at least 24 lines (' + all.length + ')');
  all.forEach(function (line) {
    var lines = 1, col = 0;
    line.split(' ').forEach(function (w) {
      if (col && col + 1 + w.length > 12) { lines++; col = w.length; } else col += (col ? 1 : 0) + w.length;
      while (col > 12) { lines++; col -= 12; }
    });
    ok(lines <= 7, 'Hal line fits the bubble (' + lines + ' lines): ' + line);
  });
})();

if (fails) { console.log(fails + ' check(s) failed'); process.exit(1); }
console.log('golf sim ok: ' + HOLES.length + ' holes');

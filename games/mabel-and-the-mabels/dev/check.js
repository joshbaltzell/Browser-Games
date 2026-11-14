// Run: node games/mabel-and-the-mabels/dev/check.js
const B = require('../sim.js');
let bad = 0;
function ok(c, m) { if (!c) { console.log('FAIL ' + m); bad++; } }

ok(B.power(0) === 1, 'power(0)');
ok(B.power(1) === 2, 'power(1)');
ok(B.power(5) === 3, 'power(5)');

// loop replay: three full cycles return the recorded positions
const rec = B.recorder();
for (let i = 0; i < 16; i++) rec.push(i, 100 + i * 10, 200 - i * 5, i % 3 === 0 ? 2 : 0, 1, 0);
const loop = rec.done();
let replayOk = true;
for (let n = 0; n < 48; n++) {
  const s = B.sample(loop, n), r = n % 16;
  if (s.x !== 100 + r * 10 || s.y !== 200 - r * 5) replayOk = false;
  if (B.noteAt(loop, n) !== (r % 3 === 0 ? 2 : 0)) replayOk = false;
}
ok(replayOk, 'loop replay over three cycles');
const mid = B.sample(loop, 2.5);
ok(Math.abs(mid.x - 125) < 1e-9, 'interpolation');

// guitar ring at power 2 reaches 180 and not 181
const o = { x: 0, y: 0 }, d = { x: 1, y: 0 };
let h = B.hits('guitar', 2, o, d, [{ id: 'a', x: 180, y: 0 }, { id: 'b', x: 181, y: 0 }]);
ok(h.length === 1 && h[0].id === 'a' && h[0].charm === 2 && h[0].push === 40, 'guitar 180 / 181');
h = B.hits('tamb', 3, o, d, [{ id: 'a', x: 80, y: 0 }, { id: 'b', x: 81, y: 0 }]);
ok(h.length === 1 && h[0].charm === 1, 'tambourine ignores power');

// trumpet cone
const ang = 30 * Math.PI / 180;
h = B.hits('trumpet', 1, o, d, [
  { id: 'off', x: 200 * Math.cos(ang), y: 200 * Math.sin(ang) },
  { id: 'on', x: 200, y: 0 },
  { id: 'far', x: 321, y: 0 },
  { id: 'edge', x: 100 * Math.cos(24 * Math.PI / 180), y: 100 * Math.sin(24 * Math.PI / 180) }
]);
const ids = h.map(x => x.id).sort().join(',');
ok(ids === 'edge,on', 'trumpet cone, got ' + ids);
ok(h.find(x => x.id === 'on').charm === 2 && h.find(x => x.id === 'on').push === 60, 'trumpet charm and push');

// snare stuns, no charm
h = B.hits('snare', 2, o, d, [{ id: 'a', x: 140, y: 0 }]);
ok(h.length === 1 && h[0].charm === 0 && h[0].stun === 4, 'snare');

// umbrella
const lady = { x: 0, y: 0 }, facing = { x: 1, y: 0 };
ok(B.blocked(facing, { x: 100, y: 0 }, lady) === true, 'umbrella blocks front');
ok(B.blocked(facing, { x: -100, y: 0 }, lady) === false, 'umbrella lets back through');
ok(B.blocked(facing, { x: 0, y: 100 }, lady) === false, 'umbrella lets flank through');

// waves
let early = 0, grumps = 0, late = 0;
for (let s = 0; s < 112; s++) { const w = B.wave(s, 'short'); early += w.filter(t => t === 'pigeon').length; grumps += w.filter(t => t === 'grump').length; }
ok(early === 0, 'no pigeons before step 112');
ok(grumps === 28, 'grump every 4 steps, got ' + grumps);
for (let s = 112; s < 336; s++) late += B.wave(s, 'short').filter(t => t === 'pigeon').length;
ok(late > 0, 'pigeons arrive after step 112');
ok(B.wave(336, 'short').length === 0, 'no hecklers after the set');
let a = 0, b = 0;
for (let s = 0; s < 112; s++) a += B.wave(s + 112, 'short').filter(t => t === 'grump').length;
for (let s = 0; s < 112; s++) b += B.wave(s + 224, 'short').filter(t => t === 'grump').length;
ok(b === 2 * a, 'grumps twice as often from step 224');

if (bad) { console.log(bad + ' check(s) failed'); process.exit(1); }
console.log('band sim ok');

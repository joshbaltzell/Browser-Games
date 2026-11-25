// Node check for the Drop Machine simulation. Run: node games/drop-machine/dev/check.js
const assert = require('assert');
const DM = require('../sim.js');
let passed = 0;
function test(name, fn) { fn(); passed++; console.log('ok  ' + name); }

function oneBallMachine(spec, bpm) {
  const m = DM.newMachine(); m.bpm = bpm || 110;
  const p = m.pits[0]; p.dropperX = spec.dropperX == null ? 180 : spec.dropperX;
  spec.parts.forEach(s => DM.addPart(m, p, s));
  return { m, p };
}
const beat = bpm => 60 / bpm;
const limit = bpm => 16 * beat(bpm);

test('1. same machine simulated twice gives identical hits', () => {
  const m = DM.starterMachine();
  m.pits.forEach(p => {
    const a = DM.simulatePit(p, m), b = DM.simulatePit(p, m);
    assert.strictEqual(JSON.stringify(a.hits), JSON.stringify(b.hits));
    assert.strictEqual(JSON.stringify(a.path), JSON.stringify(b.path));
  });
});

test('2. beat-locked pad repeats every 1/4, 1/8, 1/16 within 2 ms at 110 BPM', () => {
  [[4, 1], [8, 0.5], [16, 0.25]].forEach(([div, frac]) => {
    const { m, p } = oneBallMachine({ parts: [{ type: 'pad', x: 180, y: 300, angle: 0, mode: 'locked', div }] });
    const r = DM.simulatePit(p, m), T = beat(110) * frac;
    assert.ok(r.hits.length >= 4, 'pad should keep bouncing, div ' + div);
    let worst = 0;
    for (let i = 2; i < r.hits.length; i++) worst = Math.max(worst, Math.abs(r.hits[i].t - r.hits[i - 1].t - T));
    assert.ok(worst < 0.002, 'div ' + div + ' off by ' + (worst * 1000).toFixed(3) + ' ms');
    console.log('      1/' + div + ': ' + r.hits.length + ' hits, worst error ' + (worst * 1000).toFixed(3) + ' ms');
  });
});

test('3. Forever keeps bouncing to the 4-bar limit; Realistic loses height; Sticky ends the path', () => {
  const flat = b => oneBallMachine({ parts: [{ type: 'bar', x: 180, y: 300, len: 120, angle: 0, bounce: b }] });
  let t = flat('forever'), r = DM.simulatePit(t.p, t.m);
  assert.strictEqual(r.end, 'limit');
  assert.ok(r.hits.length >= 8, 'forever hits ' + r.hits.length);
  assert.ok(r.hits[r.hits.length - 1].t > limit(110) - 1.2, 'last forever hit near the limit');
  const s0 = r.hits[1].speed, s1 = r.hits[r.hits.length - 1].speed;
  assert.ok(Math.abs(s1 - s0) / s0 < 0.02, 'forever keeps its speed');
  // forever pad between two bars: a bar above catches the ball on the way up, it still never settles
  t = oneBallMachine({ parts: [{ type: 'pad', x: 180, y: 300, angle: 0, mode: 'forever' },
    { type: 'bar', x: 180, y: 120, len: 120, angle: 0, bounce: 'forever' }] });
  r = DM.simulatePit(t.p, t.m);
  assert.strictEqual(r.end, 'limit');
  assert.ok(r.hits[r.hits.length - 1].t > limit(110) - 1.2);
  t = flat('real'); r = DM.simulatePit(t.p, t.m);
  const sp = r.hits.map(h => h.speed);
  assert.ok(sp.length >= 3);
  for (let i = 1; i < sp.length; i++) assert.ok(sp[i] < sp[i - 1] * 0.7, 'realistic speed falls each bounce');
  assert.ok(Math.abs(sp[1] / sp[0] - 0.55) < 0.04, 'realistic ratio ' + (sp[1] / sp[0]).toFixed(3));
  t = flat('sticky'); r = DM.simulatePit(t.p, t.m);
  assert.strictEqual(r.end, 'sticky');
  assert.strictEqual(r.hits.length, 1);
  assert.ok(r.dur < limit(110));
});

test('4. every bar pitch lies in the chosen scale (all keys, scales, lengths, transposes)', () => {
  let n = 0;
  Object.keys(DM.SCALES).forEach(sc => {
    for (let key = 0; key < 12; key++) for (let len = DM.BAR_MIN; len <= DM.BAR_MAX; len += 5) for (let tr = -7; tr <= 7; tr++) {
      const m = DM.newMachine(); m.key = key; m.scale = sc; m.pits[0].transpose = tr;
      ['wood', 'metal', 'glass'].forEach(material => {
        const midi = DM.partMidi({ type: 'bar', len, material }, m.pits[0], m);
        assert.ok(DM.inScale(midi - (material === 'glass' ? 12 : 0), key, sc), sc + ' key ' + key + ' len ' + len + ' got ' + midi);
        n++;
      });
    }
    const N = DM.barDegreeCount(sc);
    assert.strictEqual(DM.barDegree(DM.BAR_MAX, sc), 0);
    assert.strictEqual(DM.barDegree(DM.BAR_MIN, sc), N - 1);
    for (let d = 0; d < N; d++) assert.strictEqual(DM.barDegree(DM.barLenForDegree(d, sc), sc), d);
  });
  console.log('      ' + n + ' pitches checked');
});

test('5. starter machine: 6+ pitched and 3+ drum hits per bar, all inside the 16-step loop', () => {
  const m = DM.starterMachine(), stepDur = beat(m.bpm) / 4;
  let pitched = 0, drums = 0;
  m.pits.forEach((p, i) => {
    const r = DM.simulatePit(p, m);
    r.hits.forEach(h => assert.ok(h.t / stepDur < 16, 'pit ' + (i + 1) + ' hit after one bar: ' + (h.t / stepDur).toFixed(2)));
    DM.loopEvents(p, m, r).forEach(e => {
      assert.ok(e.pos >= 0 && e.pos < 16, 'event outside loop ' + e.pos);
      if (e.kind === 'note') pitched++; else if (e.kind !== 'tick') drums++;
    });
  });
  assert.ok(pitched >= 6, 'pitched ' + pitched);
  assert.ok(drums >= 3, 'drums ' + drums);
  console.log('      per bar: ' + pitched + ' pitched, ' + drums + ' drum hits');
  // an offset moves events but keeps them inside the loop
  m.pits[0].offset = 5; m.pits[0].offsetBars = 2;
  DM.loopEvents(m.pits[0], m, DM.simulatePit(m.pits[0], m)).forEach(e => assert.ok(e.pos >= 0 && e.pos < 16));
});

test('6. duplicate with mirror and transpose moves parts and pitches as expected', () => {
  const m = DM.starterMachine(), src = m.pits[0];
  const dup = DM.duplicatePit(m, src, { mirror: true, transpose: 2, offsetBars: 1 });
  assert.strictEqual(dup.parts.length, src.parts.length);
  assert.ok(dup.id !== src.id);
  assert.strictEqual(dup.dropperX, DM.PIT_W - src.dropperX);
  assert.strictEqual(dup.transpose, 2);
  assert.strictEqual(dup.offsetBars, 1);
  src.parts.forEach((p, i) => {
    const q = dup.parts[i];
    assert.ok(q.id !== p.id);
    assert.strictEqual(q.x, DM.PIT_W - p.x);
    assert.strictEqual(q.y, p.y);
    if (p.angle) assert.strictEqual(q.angle, -p.angle);
    if (p.type === 'bar') {
      const deg = DM.barDegree(p.len, m.scale);
      assert.strictEqual(DM.partMidi(q, dup, m), DM.degreeMidi(deg + 2, m.key, m.scale));
      assert.ok(DM.partMidi(q, dup, m) > DM.partMidi(p, src, m));
    }
  });
  const plain = DM.duplicatePit(m, src, {});
  assert.strictEqual(plain.parts[0].x, src.parts[0].x);
  assert.strictEqual(plain.transpose, 0);
});

console.log('\nStarter machine, one bar (position in sixteenths):');
require('child_process');
console.log(require('child_process').execFileSync(process.execPath, [__dirname + '/hits.js']).toString());
console.log('All ' + passed + ' checks passed.');

// Node check for the Drop Machine simulation. Run: node games/drop-machine/dev/check.js
const assert = require('assert');
const DM = require('../sim.js');
let passed = 0;
function test(name, fn) { fn(); passed++; console.log('ok  ' + name); }

function oneBallMachine(spec, bpm) {
  const m = DM.newMachine(); m.bpm = bpm || 110;
  const p = m.pits[0]; p.life = spec.life || 16; p.droppers[0].x = spec.dropperX == null ? 180 : spec.dropperX;
  spec.parts.forEach(s => DM.addPart(m, p, s));
  return { m, p };
}
const beat = bpm => 60 / bpm;
const limit = (bpm, life) => (life || 16) * beat(bpm);

test('1. same machine simulated twice gives identical hits', () => {
  const m = DM.starterMachine();
  m.pits.forEach(p => {
    const a = DM.simulateAll(p, m), b = DM.simulateAll(p, m);
    assert.strictEqual(JSON.stringify(a), JSON.stringify(b));
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

test('3b. ball life cuts the path; a resting ball ends; no two hits of one part within 40 ms', () => {
  [1, 2, 4, 8, 16].forEach(life => {
    const { m, p } = oneBallMachine({ life, parts: [{ type: 'bar', x: 180, y: 300, len: 120, angle: 0, bounce: 'forever' }] });
    const r = DM.simulatePit(p, m);
    assert.strictEqual(r.end, 'limit');
    assert.ok(Math.abs(r.dur - limit(110, life)) < 0.01, 'life ' + life + ' dur ' + r.dur);
  });
  // a realistic bounce on a flat bar decays; the ball must come to rest and end, not buzz
  const bowl = oneBallMachine({ life: 16, parts: [{ type: 'bar', x: 180, y: 300, len: 120, angle: 0, bounce: 'real' }] });
  let r = DM.simulatePit(bowl.p, bowl.m);
  assert.strictEqual(r.end, 'rest');
  assert.ok(r.dur < limit(110, 16));
  const last = {};
  r.hits.forEach(h => { if (last[h.partId] != null) assert.ok(h.t - last[h.partId] >= 0.04 - 1e-9, 'hits too close'); last[h.partId] = h.t; });
  assert.ok(DM.angleRange({ type: 'drum' }) === 45 && DM.angleRange({ type: 'pad' }) === 30);
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
    const all = DM.simulateAll(p, m);
    all.forEach(r => r.hits.forEach(h => assert.ok((h.t - r.hits[0].t) / stepDur < 16, 'pit ' + (i + 1) + ' hit after one bar: ' + ((h.t - r.hits[0].t) / stepDur).toFixed(2))));
    DM.loopEvents(p, m, all).forEach(e => {
      assert.ok(e.pos >= 0 && e.pos < 16, 'event outside loop ' + e.pos);
      if (e.kind === 'note') pitched++; else if (e.kind !== 'tick') drums++;
    });
  });
  assert.ok(pitched >= 6, 'pitched ' + pitched);
  assert.ok(drums >= 3, 'drums ' + drums);
  console.log('      per bar: ' + pitched + ' pitched, ' + drums + ' drum hits');
  // an offset moves events but keeps them inside the loop
  m.pits[0].offset = 5; m.pits[0].offsetBars = 2;
  DM.loopEvents(m.pits[0], m, DM.simulateAll(m.pits[0], m)).forEach(e => assert.ok(e.pos >= 0 && e.pos < 16));
});

test('6. duplicate with mirror and transpose moves parts and pitches as expected', () => {
  const m = DM.starterMachine(), src = m.pits[0];
  const dup = DM.duplicatePit(m, src, { mirror: true, transpose: 2, offsetBars: 1 });
  assert.strictEqual(dup.parts.length, src.parts.length);
  assert.ok(dup.id !== src.id);
  assert.strictEqual(dup.droppers[0].x, DM.PIT_W - src.droppers[0].x);
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

test('7. a 3-dropper drum kit reproduces its pattern exactly (all 7 templates, any tempo)', () => {
  DM.DRUM_BEATS.forEach(beat => [90, 110, 140].forEach(bpm => {
    const m = DM.newMachine(); m.bpm = bpm; m.tight = 1;
    const pit = DM.buildPreset(m, beat.id); m.pits = [pit];
    assert.strictEqual(pit.droppers.length, 3);
    const sd = beat.tempo ? 60 / bpm / 4 : 0, got = { kick: [], snare: [], hat: [] };
    const all = DM.simulateAll(pit, m);
    all.forEach((res, di) => {
      assert.strictEqual(res.hits.length, 1, beat.id + ' lane ' + di + ' should make one hit per ball');
      assert.strictEqual(res.end, 'sticky');
      const lead = DM.leadTime(res, m, sd);
      for (let k = 0; k < 16; k++) {
        if (!DM.stepLit(pit, k, di)) continue;
        const at = (k * sd + DM.snapTime(res.hits[0].t, m.tight, sd) - lead) / sd;
        assert.ok(Math.abs(at - k) < 1e-6);
        const part = pit.parts.find(q => q.id === res.hits[0].partId);
        got[DM.DRUM_KIND[part.size]].push(k);
      }
    });
    assert.deepStrictEqual(got.kick, [].concat(beat.kick));
    assert.deepStrictEqual(got.snare, [].concat(beat.snare));
    assert.deepStrictEqual(got.hat, [].concat(beat.hat));
  }));
  // old saves with one dropper still load
  const old = { id: 1, floors: 0, dropperX: 120, steps: DM.stepsOf([0, 4]), parts: [] };
  DM.migratePit(old);
  assert.strictEqual(old.droppers.length, 1);
  assert.strictEqual(old.droppers[0].x, 120);
  assert.ok(old.droppers[0].steps[4] && !old.droppers[0].steps[1]);
});

console.log('\nStarter machine, one bar (position in sixteenths):');
require('child_process');
console.log(require('child_process').execFileSync(process.execPath, [__dirname + '/hits.js']).toString());
console.log('All ' + passed + ' checks passed.');

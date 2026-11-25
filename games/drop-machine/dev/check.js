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

test('7. drum templates: bouncing balls reproduce the exact pattern (90/110/140 BPM), 1.8x more hits than lit steps', () => {
  DM.DRUM_BEATS.forEach(beat => [90, 110, 140].forEach(bpm => {
    const m = DM.newMachine(); m.bpm = bpm; m.tight = 0;
    const pit = DM.buildPreset(m, beat.id); m.pits = [pit];
    assert.strictEqual(pit.droppers.length, 3);
    const sd = 60 / bpm / 4, got = { kick: [], snare: [], hat: [] };
    let lit = 0, hits = 0;
    DM.simulateAll(pit, m).forEach((res, di) => {
      const h0 = res.hits.length ? res.hits[0].t : 0;
      for (let k = 0; k < 16; k++) {
        if (!DM.stepLit(pit, k, di)) continue;
        lit++;
        res.hits.forEach(h => {
          hits++;
          const off = (h.t - h0) / sd, snapped = Math.round(off);
          assert.ok(Math.abs(off - snapped) * sd < 0.002, beat.id + '@' + bpm + ' hit off the grid by ' + ((off - snapped) * sd * 1000).toFixed(2) + ' ms');
          const part = pit.parts.find(q => q.id === h.partId);
          got[DM.DRUM_KIND[part.size]].push((k + snapped) % 16);
        });
      }
    });
    ['kick', 'snare', 'hat'].forEach(kind => assert.deepStrictEqual(got[kind].sort((a, b) => a - b), beat[kind], beat.id + '@' + bpm + ' ' + kind));
    assert.ok(hits >= 1.8 * lit, beat.id + '@' + bpm + ': ' + hits + ' hits from ' + lit + ' lit steps');
  }));
  // old saves with one dropper still load
  const old = { id: 1, floors: 0, dropperX: 120, steps: DM.stepsOf([0, 4]), parts: [] };
  DM.migratePit(old);
  assert.strictEqual(old.droppers.length, 1);
  assert.strictEqual(old.droppers[0].x, 120);
  assert.ok(old.droppers[0].steps[4] && !old.droppers[0].steps[1]);
});

test('8. Korobeiniki: melody and bass hit lists match the transcription exactly', () => {
  const m = DM.buildSong(), sd = 60 / m.bpm / 4;
  assert.strictEqual(m.key, 9); assert.strictEqual(m.scale, 'minor'); assert.strictEqual(m.bpm, 144);
  assert.ok(m.pits.length >= 3 && m.pits.length <= 4);
  const SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const midiOf = name => 12 * (+name.slice(1) + 1) + SEMI[name[0]];
  // what the melody pit actually plays, over 8 bars (128 steps), at the default Tight setting
  function played(pit) {
    const dr = pit.droppers[0], res = DM.simulateAll(pit, m)[0], out = [];
    assert.strictEqual(dr.bars, 8); assert.strictEqual(dr.steps.length, 128);
    for (let k = 0; k < 128; k++) {
      if (!DM.stepLit(pit, k, 0)) continue;
      const rr = res.byX[DM.stepX(pit, k, 0)] || res;
      assert.strictEqual(rr.hits.length, 1, 'step ' + k + ' should make exactly one note');
      const lead = DM.leadTime(rr, m, sd), at = k * sd + DM.snapTime(rr.hits[0].t, m.tight, sd) - lead;
      const part = pit.parts.find(q => q.id === rr.hits[0].partId);
      out.push({ step: k, t: at, midi: DM.partMidi(part, pit, m) });
    }
    return out;
  }
  const mel = played(m.pits[0]);
  assert.strictEqual(mel.length, DM.SONG.melody.length);
  mel.forEach((e, i) => {
    const want = DM.SONG.melody[i];
    assert.strictEqual(e.step, want[0], 'note ' + i + ' step');
    assert.ok(Math.abs(e.t - want[0] * sd) < 0.002, 'note ' + i + ' time');
    assert.strictEqual(e.midi, midiOf(want[1]), 'note ' + i + ' pitch ' + want[1]);
  });
  const bass = played(m.pits[1]), rootMidi = { A: 45, C: 48, D: 50, E: 52 };
  assert.strictEqual(bass.length, 64);
  bass.forEach((e, i) => {
    const bar = Math.floor(e.step / 16);
    assert.strictEqual(e.step, i * 2, 'bass pulse is every eighth note');
    assert.strictEqual(e.midi, rootMidi[DM.SONG.bassRoots[bar]], 'bass root of bar ' + (bar + 1));
  });
  // the harmony pit is the melody a third below (two scale steps) and starts muted
  const har = m.pits[3];
  assert.ok(har.mute); assert.strictEqual(har.transpose, -2);
  const hp = played(har);
  hp.forEach((e, i) => assert.ok(e.midi < mel[i].midi && mel[i].midi - e.midi <= 4));
  // the drum pit is the bouncing rock beat
  const dr = m.pits[2], got = { kick: [], snare: [], hat: [] };
  DM.loopEvents(dr, m, DM.simulateAll(dr, m)).forEach(e => got[e.kind].push(Math.round(e.pos) % 16));
  assert.ok(got.kick.length >= 3 && got.snare.length >= 2 && got.hat.length >= 8);
  // old one-bar saves still load as one bar, and a slide dropper without xs works
  const old = { id: 1, floors: 0, dropperX: 100, steps: DM.stepsOf([0]), parts: [] };
  DM.migratePit(old); DM.fixDropper(old.droppers[0]);
  assert.strictEqual(old.droppers[0].bars, 1);
  assert.strictEqual(DM.stepX(old, 0, 0), 100);
});

console.log('\nStarter machine, one bar (position in sixteenths):');
require('child_process');
console.log(require('child_process').execFileSync(process.execPath, [__dirname + '/hits.js']).toString());
console.log('All ' + passed + ' checks passed.');

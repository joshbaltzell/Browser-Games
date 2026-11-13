import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pupilWobble, EXPRESSIONS, createFace } from '../src/actors/face.js';

test('pupils wobble a little, smoothly, and differently per eye', () => {
  let maxStep = 0, maxAmp = 0, prev = pupilWobble(0, 1);
  for (let i = 1; i <= 600; i++) {
    const w = pupilWobble(i / 60, 1);
    maxStep = Math.max(maxStep, Math.hypot(w[0] - prev[0], w[1] - prev[1]));
    maxAmp = Math.max(maxAmp, Math.hypot(w[0], w[1]));
    prev = w;
  }
  assert.ok(maxAmp <= 0.12 && maxAmp > 0.03);
  assert.ok(maxStep < 0.03);
  assert.notDeepEqual(pupilWobble(1.5, 1), pupilWobble(1.5, 2));
});
test('the five expressions exist with every field', () => {
  assert.deepEqual(Object.keys(EXPRESSIONS), ['neutral', 'angry', 'scared', 'smug', 'dead']);
  for (const e of Object.values(EXPRESSIONS)) {
    for (const k of ['browAngle', 'browY', 'lid', 'pupilScale', 'mouthCurve', 'mouthOpen']) {
      assert.ok(Number.isFinite(e[k]));
    }
  }
});

const OPTS = { eyeRadius: 0.1, eyeSpacing: 0.26, eyeY: 0.05, eyeZ: 0.3, mouthY: -0.12, mouthWidth: 0.22, seed: 3 };
const settle = (face, n = 60) => { for (let i = 0; i < n; i++) face.update(1 / 60); };
const meshesOf = (group) => {
  const out = [];
  group.traverse((o) => { if (o.isMesh && o.visible) out.push(o); });
  return out;
};

test('a face stays within 5 draw calls in every expression, both brow styles', () => {
  for (const brow of ['pair', 'uni']) {
    for (const name of Object.keys(EXPRESSIONS)) {
      const face = createFace({ ...OPTS, brow });
      face.setExpression(name);
      face.setTalking(true);
      settle(face);
      assert.ok(meshesOf(face.group).length <= 5, `${brow} ${name}`);
    }
  }
});

test('every face vertex is finite in every expression, talking or not', () => {
  for (const name of Object.keys(EXPRESSIONS)) {
    const face = createFace(OPTS);
    face.setExpression(name);
    face.setTalking(true);
    settle(face, 30);
    for (const m of meshesOf(face.group)) {
      assert.ok(Array.from(m.geometry.getAttribute('position').array).every(Number.isFinite), name);
    }
  }
});

const featurePositions = (face) =>
  Array.from(meshesOf(face.group).find((m) => m.name === 'features').geometry.getAttribute('position').array);

test('an unknown expression behaves like neutral', () => {
  const a = createFace(OPTS), b = createFace(OPTS);
  a.setExpression('angry'); settle(a, 10);
  a.setExpression('no-such-face');
  b.setExpression('neutral');
  settle(a, 120); settle(b, 130);
  const pa = featurePositions(a), pb = featurePositions(b);
  assert.equal(pa.length, pb.length);
  pa.forEach((v, i) => assert.ok(Math.abs(v - pb[i]) < 1e-9, `vertex value ${i}`)); // spring residue is below 1e-9
});

test('expressions change the face, and ease rather than snap', () => {
  const face = createFace(OPTS);
  const before = featurePositions(face);
  face.setExpression('scared');
  face.update(1 / 60);
  const one = featurePositions(face);
  settle(face, 60);
  const done = featurePositions(face);
  const d = (p, q) => p.reduce((s, v, i) => s + Math.abs(v - q[i]), 0);
  assert.ok(d(before, one) > 0);
  assert.ok(d(before, one) < d(before, done) * 0.5);
});

test('talking moves the mouth', () => {
  const quiet = createFace(OPTS), loud = createFace(OPTS);
  loud.setTalking(true);
  settle(quiet, 20); settle(loud, 20);
  assert.notDeepEqual(featurePositions(quiet).slice(-78), featurePositions(loud).slice(-78));
});

const featuresOf = (face) => meshesOf(face.group).find((m) => m.name === 'features');

test('features keep culling on and stay inside their fixed bounding sphere', () => {
  for (const brow of ['pair', 'uni']) {
    for (const name of Object.keys(EXPRESSIONS)) {
      const face = createFace({ ...OPTS, brow });
      face.setExpression(name);
      face.setTalking(true);
      for (let i = 0; i < 40; i++) face.update(1 / 60);
      const m = featuresOf(face);
      assert.equal(m.frustumCulled, true);
      const s = m.geometry.boundingSphere;
      const p = m.geometry.getAttribute('position').array;
      for (let i = 0; i < p.length; i += 3) {
        assert.ok(Math.hypot(p[i] - s.center.x, p[i + 1] - s.center.y, p[i + 2] - s.center.z) <= s.radius, `${brow} ${name}`);
      }
    }
  }
});

test('lidColor tints the lid only; the default keeps every shape ink', () => {
  const colours = (face) => Array.from(featuresOf(face).geometry.getAttribute('color').array);
  const plain = createFace(OPTS);
  const skin = createFace({ ...OPTS, lidColor: '#f4b6a6' });
  const rgbSets = (c) => { const set = new Set(); for (let i = 0; i < c.length; i += 3) set.add(c[i].toFixed(4) + c[i + 1].toFixed(4) + c[i + 2].toFixed(4)); return set; };
  assert.equal(rgbSets(colours(plain)).size, 1);
  assert.equal(rgbSets(colours(skin)).size, 2);
});

test('talking faces with different seeds do not flap in step', () => {
  const a = createFace({ ...OPTS, seed: 1 }), b = createFace({ ...OPTS, seed: 2 });
  a.setTalking(true); b.setTalking(true);
  settle(a, 20); settle(b, 20);
  const mouth = (f) => featurePositions(f).slice(-78).filter((_, i) => i % 3 === 1);
  assert.notDeepEqual(mouth(a), mouth(b));
});

test('the uni brow is one shape: six vertices, shared apex', () => {
  const uni = createFace({ ...OPTS, brow: 'uni' }), pair = createFace(OPTS);
  assert.equal(featurePositions(pair).length - featurePositions(uni).length, 2 * 3);
});

test('fixedSmile keeps the smile in neutral and smug, gives way in angry, scared and dead; off by default', () => {
  // The middle of the mouth's top edge sits lower than its corners in a smile.
  const sag = (face) => {
    const p = featurePositions(face);
    const top = (k) => p[p.length - 78 + k * 6 + 1]; // y of column k's top vertex
    return (top(0) + top(12)) / 2 - top(6);
  };
  for (const name of Object.keys(EXPRESSIONS)) {
    const fixed = createFace({ ...OPTS, fixedSmile: 0.7 });
    const plain = createFace(OPTS);
    const reference = createFace(OPTS);
    fixed.setExpression(name); plain.setExpression(name); reference.setExpression(name);
    settle(fixed, 90); settle(plain, 90); settle(reference, 90);
    if (name === 'neutral' || name === 'smug') {
      assert.ok(sag(fixed) > 0.01, `${name} smiles`);
      assert.ok(sag(fixed) >= sag(plain) - 1e-9, `${name} smiles at least as much as without`);
    } else {
      assert.deepEqual(featurePositions(fixed), featurePositions(plain), `${name} drops the smile`);
      assert.ok(sag(fixed) < 0, `${name} does not smile`);
    }
    assert.deepEqual(featurePositions(plain), featurePositions(reference));
  }
  // Talking keeps it, and it comes back after angry.
  const talker = createFace({ ...OPTS, fixedSmile: 0.7 });
  talker.setTalking(true);
  for (let i = 0; i < 90; i++) { talker.update(1 / 60); assert.ok(sag(talker) > 0.01, 'talking smiles'); }
  talker.setTalking(false);
  talker.setExpression('angry'); settle(talker, 90);
  talker.setExpression('neutral'); settle(talker, 90);
  assert.ok(sag(talker) > 0.01, 'smiles again after angry');
  // A fresh face starts on its smile instead of easing into it.
  const fresh = createFace({ ...OPTS, fixedSmile: 0.7 });
  const before = featurePositions(fresh);
  fresh.update(1 / 60);
  const after = featurePositions(fresh);
  const mouthMove = before.slice(-78).reduce((s, v, i) => s + Math.abs(v - after.slice(-78)[i]), 0);
  assert.ok(mouthMove < 1e-3, 'no ease-in at spawn');
});

test('an angry mouth is an open frown shaped like a lens: corners down, lower lip bowed below them', () => {
  const face = createFace(OPTS);
  face.setExpression('angry');
  settle(face, 90);
  const p = featurePositions(face).slice(-78);
  const top = (k) => p[k * 6 + 1], bottom = (k) => p[k * 6 + 4];
  const cornerY = (top(0) + top(12)) / 2;
  assert.ok(top(6) > cornerY + 0.005, 'top lip arches up over the corners');
  assert.ok(bottom(6) < cornerY - 0.02, 'lower lip bows down below the corners');
  // A lens, not a box: the opening tapers toward the corners.
  const h = (k) => top(k) - bottom(k);
  assert.ok(h(1) < 0.6 * h(6) && h(3) < h(6), `heights ${h(1)} ${h(3)} ${h(6)}`);
});

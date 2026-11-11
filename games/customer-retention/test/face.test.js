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
  assert.deepEqual(featurePositions(a), featurePositions(b));
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

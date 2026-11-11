import { test } from 'node:test';
import assert from 'node:assert/strict';
import { solveTwoBone, limbControl, limbPoint } from '../src/actors/ik.js';

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
test('reaches a target inside its range and keeps the upper length', () => {
  const r = solveTwoBone([0, 1, 0], [0.3, 0.6, 0.2], 0.3, 0.3, [0, 0, -1]);
  assert.ok(dist(r.end, [0.3, 0.6, 0.2]) < 1e-9);
  assert.ok(Math.abs(dist([0, 1, 0], r.mid) - 0.3) < 1e-6);
  assert.equal(r.stretch, 1);
});
test('the bend goes toward the pole', () => {
  const r = solveTwoBone([0, 1, 0], [0, 0.5, 0], 0.3, 0.3, [0, 0, 1]);
  assert.ok(r.mid[2] > 0.05);
});
test('stretches up to 15 percent, then clamps', () => {
  const near = solveTwoBone([0, 0, 0], [0.66, 0, 0], 0.3, 0.3, [0, 1, 0]);
  assert.ok(dist(near.end, [0.66, 0, 0]) < 1e-9);
  assert.ok(Math.abs(near.stretch - 1.1) < 1e-9);
  const far = solveTwoBone([0, 0, 0], [5, 0, 0], 0.3, 0.3, [0, 1, 0]);
  assert.ok(Math.abs(far.end[0] - 0.69) < 1e-9);
});
test('target on top of the root does not produce NaN', () => {
  const r = solveTwoBone([1, 1, 1], [1, 1, 1], 0.3, 0.3, [0, 0, 1]);
  assert.ok([...r.mid, ...r.end].every(Number.isFinite));
});
test('unequal bones and a pole along the limb stay finite', () => {
  const a = solveTwoBone([0, 0, 0], [0, 0, 0], 0.4, 0.2, [0, 0, 1]);
  const b = solveTwoBone([0, 0, 0], [0, 0.5, 0], 0.3, 0.3, [0, 1, 0]);
  assert.ok([...a.mid, ...a.end, ...b.mid, ...b.end].every(Number.isFinite));
  assert.ok(Math.abs(dist([0, 0, 0], b.mid) - 0.3) < 1e-6);
});
test('the curve passes through the middle joint', () => {
  const a = [0, 1, 0], m = [0.2, 0.7, 0.1], b = [0.3, 0.4, 0];
  const p = limbPoint(a, limbControl(a, m, b), b, 0.5);
  assert.ok(dist(p, m) < 1e-9);
  assert.ok(dist(limbPoint(a, limbControl(a, m, b), b, 0), a) < 1e-9);
});
test('zero bone lengths and a zero pole stay finite', () => {
  const a = solveTwoBone([0, 0, 0], [1, 0, 0], 0, 0, [0, 1, 0]);
  const b = solveTwoBone([0, 0, 0], [0, 0, 0], 0, 0, [0, 0, 0]);
  const c = solveTwoBone([0, 0, 0], [0.3, 0.2, 0], 0.3, 0.3, [0, 0, 0]);
  for (const r of [a, b, c]) assert.ok([...r.mid, ...r.end, r.stretch].every(Number.isFinite));
});
test('within reach, the lower bone keeps its length', () => {
  for (const target of [[0.3, 0.4, 0.2], [0.1, 0.2, 0.05], [0.5, 0, 0.1]]) {
    const r = solveTwoBone([0, 0, 0], target, 0.3, 0.35, [0, 1, 0]);
    assert.ok(Math.abs(dist(r.mid, r.end) - 0.35) < 1e-6);
  }
});

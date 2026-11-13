import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeBox, moveCapsule, sweepSphere, pointInBoxes } from '../src/world/collide.js';

const R = 0.35, H = 1.8;
const FLOOR = makeBox([-50, -1, -50], [50, 0, 50], 'floor');
const near = (a, b, e) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
// Steps a delta in 60 pieces.
function walk(boxes, pos, delta) {
  let r = { pos, hit: false, normal: [0, 0, 0] };
  for (let i = 0; i < 60; i++) r = moveCapsule([FLOOR, ...boxes], r.pos, delta.map(d => d / 60), R, H);
  return r;
}

test('open floor: moves the full delta, no hit', () => {
  const r = moveCapsule([FLOOR], [0, 0, 0], [1, 0, 2], R, H);
  assert.deepEqual(r.pos, [1, 0, 2]); assert.equal(r.hit, false);
});
test('head-on into a wall stops at radius from its face', () => {
  const wall = makeBox([-5, 0, 2], [5, 4, 2.2]);
  const r = walk([wall], [0, 0, 0], [0, 0, 3]);
  near(r.pos[2], 2 - R, 1e-6); assert.equal(r.hit, true); near(r.normal[2], -1, 1e-6);
});
test('at 45 degrees into a wall it slides along, keeping the parallel motion', () => {
  const r = walk([makeBox([-50, 0, 2], [50, 4, 2.2])], [0, 0, 0], [3, 0, 3]);
  near(r.pos[2], 2 - R, 1e-6); assert.ok(r.pos[0] > 2.9);
});
test('into an inside corner it stops in the corner without jitter', () => {
  const boxes = [makeBox([-50, 0, 2], [50, 4, 2.2]), makeBox([2, 0, -50], [2.2, 4, 50])];
  let r = { pos: [0, 0, 0] };
  const seen = [];
  for (let i = 0; i < 120; i++) {
    r = moveCapsule([FLOOR, ...boxes], r.pos, [0.03, 0, 0.03], R, H);
    seen.push(r.pos);
  }
  const last = seen.slice(-10);
  for (const q of last) {
    near(q[0], seen[119][0], 1e-6); near(q[2], seen[119][2], 1e-6);
    near(q[0], 2 - R, 1e-6); near(q[2], 2 - R, 1e-6);
  }
});
test('a 0.15 m step into a 0.2 m wall never comes out the far side', () => {
  const wall = makeBox([-5, 0, 2], [5, 4, 2.2]);
  const r = moveCapsule([FLOOR, wall], [0, 0, 2 - R - 0.01], [0, 0, 0.15], R, H);
  assert.ok(r.pos[2] <= 2 - R + 1e-6);
  const r2 = moveCapsule([FLOOR, wall], [0, 0, 0], [0, 0, 2.0 + 1], R, H);
  assert.ok(r2.pos[2] < 2);
  const r3 = moveCapsule([FLOOR, wall], [0, 0, 1], [0, 0, 2.0], R, H);
  assert.ok(r3.pos[2] < 2);
});
test('a box below 0.05 m or above the head does not block', () => {
  const slab = makeBox([-1, -1, 1], [1, 0.04, 2], 'low');
  const high = makeBox([-1, 2.0, 1], [1, 3, 2], 'tall');
  const r = moveCapsule([slab, high], [0, 0, 0], [0, 0, 3], R, H);
  near(r.pos[2], 3, 1e-9); assert.equal(r.hit, false);
});
test('a gap exactly 2R + 0.02 wide is passable; 2R - 0.02 is not', () => {
  const gap = (w) => [makeBox([-5, 0, 0], [-w / 2, 4, 1]), makeBox([w / 2, 0, 0], [5, 4, 1])];
  const wide = walk(gap(2 * R + 0.02), [0, 0, -1], [0, 0, 4]);
  assert.ok(wide.pos[2] > 2.5);
  const narrow = walk(gap(2 * R - 0.02), [0, 0, -1], [0, 0, 4]);
  assert.ok(narrow.pos[2] < 0);
});
test('sweepSphere: hits a wall at the right fraction, 1 when clear, 0 when starting inside', () => {
  const wall = makeBox([-5, 0, 2], [5, 4, 2.2]);
  near(sweepSphere([wall], [0, 1, 0], [0, 1, 4], 0.2), (2 - 0.2) / 4, 1e-9);
  assert.equal(sweepSphere([wall], [0, 1, 0], [0, 1, -4], 0.2), 1);
  assert.equal(sweepSphere([wall], [0, 1, 2.1], [0, 1, 4], 0.2), 0);
});
test('pointInBoxes respects the pad', () => {
  const b = makeBox([0, 0, 0], [1, 1, 1]);
  assert.equal(pointInBoxes([b], [1.05, 0.5, 0.5]), false);
  assert.equal(pointInBoxes([b], [1.05, 0.5, 0.5], 0.1), true);
});

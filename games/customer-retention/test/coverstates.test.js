import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createMovement, STATES, CONTEXT_ACTIONS } from '../src/actors/movement.js';
import { wrap } from '../src/actors/moveMath.js';
import {
  COVER_STATE_NAMES, COVER_STATES, coverAction, approachDir, cameraModeOf, cameraSideOf, coverEdgeOf,
} from '../src/actors/coverStates.js';
import { makeBox, pointInBoxes } from '../src/world/collide.js';
import { deriveCoverEdges, edgeOptions, capsuleClear } from '../src/world/cover.js';
import { TUNING } from '../src/tuning.js';
import { createCameraRig } from '../src/render/cameraRig.js';

const DT = 1 / 60, S = 0.38, C = TUNING.cover;
const near = (a, b, e) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const LOW = makeBox([-2, 0, 2], [2, 1, 2.6], 'low');
const TALL = makeBox([-2, 0, 2], [2, 2.2, 2.6], 'tall');
const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false, ...o });
const step = (m, intent, n) => { for (let i = 0; i < n; i++) m.update(intent, DT); };
const edgesOf = boxes => deriveCoverEdges(boxes, edgeOptions());
function mover({ boxes = [FLOOR, LOW], spawn = [0, 0, 0], ...o } = {}) {
  return createMovement({ boxes, spawn, coverEdges: edgesOf(boxes), ...o });
}
// A mover tucked into the +z... wall face of box, at t along the edge facing z = 2.
function inCover(box = LOW, x = 0, extra = []) {
  const boxes = [FLOOR, box, ...extra];
  const m = mover({ boxes, spawn: [x, 0, 0.4] });
  m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
  assert.equal(m.state, 'cover');
  return m;
}
const southEdge = m => m.cover.edge;

test('tap toward a low wall 1.62 m away slides in within 0.25 s and slams once', () => {
  const m = mover(); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'coverSlide');
  step(m, I(), 15); assert.equal(m.state, 'cover');
  near(m.pos[2], 2 - S, 1e-6); near(m.pos[0], 0, 1e-6); near(wrap(m.facing), 0, 1e-3);
  assert.equal(m.slams, 1); assert.equal(m.cover.edge.kind, 'low');
});
test('tap with no stick uses facing: facing the wall grabs, facing away rolls', () => {
  let m = mover(); m.update(I({ tap: true }), DT); assert.equal(m.state, 'coverSlide');
  m = mover(); m.place([0, 0, 0], Math.PI); m.update(I({ tap: true }), DT); assert.equal(m.state, 'roll');
});
test('tap 2.6 m short, running parallel 1 m from the wall, or running away from it: rolls, never covers', () => {
  let m = mover({ spawn: [0, 0, -1] }); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'roll');
  m = mover({ spawn: [-6, 0, 1] }); m.update(I({ moveX: -1, tap: true }), DT); assert.equal(m.state, 'roll');
  m = mover(); m.update(I({ moveY: 1, tap: true }), DT); assert.equal(m.state, 'roll');
});
test('onState is called with (name, prev, intent) on every state change', () => {
  const calls = []; const m = mover({ onState: (n, p, i) => calls.push([n, p, i])});
  const it = I({ moveY: -1, tap: true });
  m.update(it, DT);
  assert.deepEqual(calls.map(c => c.slice(0, 2)), [['coverSlide', 'move']]); assert.equal(calls[0][2], it);
  step(m, I(), 15); assert.deepEqual(calls[1].slice(0, 2), ['cover', 'coverSlide']);
});
test('in cover a tap never rolls; a tap with no stick changes nothing', () => {
  const m = inCover(); const before = m.entries;
  m.update(I({ tap: true }), DT); step(m, I({ tap: true, moveX: 0.3 }), 5);
  assert.equal(m.state, 'cover'); assert.equal(m.entries, before);
  m.update(I({ tap: true, moveY: -1, moveX: 0.8 }), DT); assert.notEqual(m.state, 'roll');
});
test('pulling away leaves on the same step at jog speed; tilt 0.3 away does not', () => {
  const m = inCover(); m.update(I({ moveY: 1 }), DT);
  assert.equal(m.state, 'move'); assert.equal(m.cover, null); assert.ok(m.speed() > 4);
  const k = inCover(); step(k, I({ moveY: 0.3 }), 30); assert.equal(k.state, 'cover');
});
test('pulling away while aiming and popped out still leaves on the same step', () => {
  const m = inCover(); step(m, I({ aim: true }), 10); assert.ok(m.cover.exposed);
  m.update(I({ aim: true, moveY: 1 }), DT); assert.equal(m.state, 'move'); assert.equal(m.cover, null);
});
test('stick along moves at cover.moveSpeed; tilt under alongDeadzone does not move', () => {
  const m = inCover(); step(m, I({ moveX: -1 }), 30); near(m.pos[0], 1.5, 0.02); near(m.pos[2], 2 - S, 1e-6);
  const k = inCover(); step(k, I({ moveX: -0.15 }), 30); near(k.pos[0], 0, 1e-6);
});
test('at an open end the player stops, then walks off after endLeaveTime of pushing', () => {
  const m = inCover(); let n = 0;
  while (m.pos[0] < 1.8 - 1e-6 && n++ < 200) m.update(I({ moveX: -1 }), DT);
  near(m.pos[0], 1.8, 1e-6);
  step(m, I({ moveX: -1 }), 14); assert.equal(m.state, 'cover'); near(m.pos[0], 1.8, 1e-6);
  step(m, I({ moveX: -1 }), 7); assert.equal(m.state, 'move');
});
test('at a closed end (a wall) pushing on never leaves', () => {
  const wall = makeBox([2.0, 0, 1.5], [2.3, 4, 3]);
  const m = inCover(LOW, 0, [wall]);
  step(m, I({ moveX: -1 }), 120); assert.equal(m.state, 'cover');
});
test('low cover: aim pops up in popTime without moving; release tucks back', () => {
  const m = inCover(); step(m, I({ aim: true }), 8);
  near(m.cover.pop, 1, 1e-9); assert.equal(m.aiming, true); assert.equal(m.cover.exposed, true); near(m.pos[2], 2 - S, 1e-9);
  step(m, I(), 8); near(m.cover.pop, 0, 1e-9); assert.equal(m.aiming, false);
});
test('while popped the stick does not move the player', () => {
  const m = inCover(); step(m, I({ aim: true }), 10); const x = m.pos[0];
  step(m, I({ aim: true, moveX: -1 }), 30); near(m.pos[0], x, 1e-9);
});
const toEnd = m => { let n = 0; while (m.cover.t < m.cover.edge.length - 1e-6 && n++ < 400) m.update(I({ moveX: -1 }), DT); };
test('tall cover: aim in the middle does not pop; at an open end it pops popShift past the corner, clear of the box', () => {
  const m = inCover(TALL); step(m, I({ aim: true }), 20); assert.equal(m.cover.pop, 0); assert.equal(m.aiming, false);
  const k = inCover(TALL); let n = 0;
  while (k.cover.t < k.cover.edge.length - 1e-6 && n++ < 300) k.update(I({ moveX: -1 }), DT);
  step(k, I({ aim: true }), 10);
  near(k.cover.pop, 1, 1e-9); assert.equal(k.cover.popEnd, 1); near(k.pos[0], 1.8 + C.popShift, 1e-6);
  assert.ok(capsuleClear([FLOOR, TALL], k.pos, 0.35, 1.8));
});
test('tall cover: aim held while sliding along pops on reaching the end', () => {
  const m = inCover(TALL); let n = 0;
  // aim held while pushing along: the shuffle stops at the corner zone and the player pops
  while (m.cover.pop < 1 && n++ < 300) m.update(I({ moveX: -1, aim: m.cover.t > 2 }), DT);
  assert.equal(m.cover.popEnd, 1); assert.ok(m.cover.exposed); assert.equal(m.state, 'cover');
});
test('pillar: popping at either end keeps the capsule clear of the pillar', () => {
  const P = makeBox([-0.4, 0, 2], [0.4, 3, 2.8], 'pillar'); const boxes = [FLOOR, P];
  for (const sign of [-1, 1]) {
    const m = mover({ boxes, spawn: [0, 0, 0.5] });
    m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); assert.equal(m.state, 'cover');
    let n = 0;
    while (m.cover.t > 1e-6 && m.cover.t < m.cover.edge.length - 1e-6 && n++ < 200) m.update(I({ moveX: -sign }), DT);
    const end = m.cover.t > 0.2 ? 1 : -1;
    step(m, I({ aim: true }), 10);
    assert.equal(m.cover.popEnd, end); assert.ok(capsuleClear(boxes, m.pos, 0.35, 1.8));
  }
});
test('tap pushing into low cover vaults to the far side in vaultTime, then moves on at vaultExitSpeed', () => {
  const m = inCover(); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'vault');
  step(m, I({ moveY: -1 }), 30); assert.equal(m.state, 'move');
  near(m.pos[2], (2 - S) + 0.6 + 2 * S, 0.1); assert.ok(capsuleClear([FLOOR, LOW], m.pos, 0.35, 1.8));
  assert.ok(m.vel[2] > 0);
});
test('no vault at tall cover or with a wall right behind the low box: stays in cover', () => {
  const m = inCover(TALL); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'cover');
  const wall = makeBox([-5, 0, 2.7], [5, 4, 3]);
  const k = inCover(LOW, 0, [wall]);
  k.update(I({ moveY: -1, tap: true }), DT); assert.equal(k.state, 'cover');
});
const A = makeBox([-4, 0, 2], [-1, 1, 2.6], 'low'), B = makeBox([1.4, 0, 2.3], [5, 1, 2.9], 'low');
test('tap pushing along at an open end swaps across a gap and slams in on the other wall', () => {
  const boxes = [FLOOR, A, B]; const m = mover({ boxes, spawn: [-3.7, 0, 0.4] });
  m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); assert.equal(m.state, 'cover');
  const a = m.cover.edge; let n = 0;
  while (m.cover.t < a.length - 1e-6 && n++ < 300) m.update(I({ moveX: -1 }), DT);
  m.update(I({ moveX: -1, tap: true }), DT); assert.equal(m.state, 'coverSwap');
  step(m, I(), 40); assert.equal(m.state, 'cover'); assert.notEqual(m.cover.edge, a);
  near(m.cover.t, 0, 1e-9); assert.equal(m.slams, 2);
});
test('no swap from the middle of an edge or with no neighbour within range', () => {
  const boxes = [FLOOR, A, B]; const m = mover({ boxes, spawn: [-2.5, 0, 0.4] });
  m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
  m.update(I({ moveX: -1, tap: true }), DT); assert.equal(m.state, 'cover');
  const k = inCover(); let n = 0;
  while (k.cover.t < k.cover.edge.length - 1e-6 && n++ < 300) k.update(I({ moveX: -1 }), DT);
  k.update(I({ moveX: -1, tap: true }), DT); assert.equal(k.state, 'cover');
});
test('cameraModeOf: coverLow / coverTall while sliding and tucked, aim when popped, normal after leaving', () => {
  const m = mover(); assert.equal(cameraModeOf(m), 'normal');
  m.update(I({ moveY: -1, tap: true }), DT); assert.equal(cameraModeOf(m), 'coverLow');
  step(m, I(), 15); assert.equal(cameraModeOf(m), 'coverLow');
  step(m, I({ aim: true }), 10); assert.equal(cameraModeOf(m), 'aim');
  step(m, I(), 10); m.update(I({ moveY: 1 }), DT); assert.equal(cameraModeOf(m), 'normal');
  assert.equal(cameraModeOf(inCover(TALL)), 'coverTall');
  const s = mover(); step(s, I({ moveX: 1, sprint: true }), 20); assert.equal(cameraModeOf(s), 'sprint');
});
test('cameraSideOf: -1 at the left-hand open end (and popped there), +1 elsewhere', () => {
  const m = inCover(); assert.equal(cameraSideOf(m), 1);
  let n = 0; while (m.cover.t < m.cover.edge.length - 0.25 && n++ < 300) m.update(I({ moveX: -1 }), DT);
  assert.equal(cameraSideOf(m), -1);
  const k = inCover(); n = 0; while (k.cover.t > 0.4 && n++ < 300) k.update(I({ moveX: 1 }), DT);
  assert.equal(cameraSideOf(k), 1);
  const p = inCover(TALL); n = 0; while (p.cover.t < p.cover.edge.length - 0.2 && n++ < 300) p.update(I({ moveX: -1 }), DT);
  step(p, I({ aim: true }), 10); assert.equal(cameraSideOf(p), -1);
  assert.equal(cameraSideOf(mover()), 1);
});
test('coverEdgeOf follows the attached edge, or the target while sliding', () => {
  const m = mover(); assert.equal(coverEdgeOf(m), null);
  m.update(I({ moveY: -1, tap: true }), DT); assert.equal(coverEdgeOf(m).kind, 'low');
  step(m, I(), 15); assert.equal(coverEdgeOf(m), m.cover.edge);
});
test('place() mid-cover returns to move with no cover, and does not count an entry', () => {
  const m = inCover(); const e = m.entries; m.place([0, 0, 0], 0);
  assert.equal(m.state, 'move'); assert.equal(m.cover, null); assert.equal(m.entries, e); assert.deepEqual(m.scratch, {});
});
test('replacing coverEdges mid-cover keeps the player in cover; the next grab uses the new edges', () => {
  const m = inCover(); m.coverEdges = []; step(m, I(), 10); assert.equal(m.state, 'cover');
  m.update(I({ moveY: 1 }), DT); step(m, I(), 10); m.place([0, 0, 0], 0);
  m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'roll');
});
test('live tuning: changing coverTuning.moveSpeed mid-cover changes speed on the next step', () => {
  const ct = { ...TUNING.cover }; const m = inCover(); m.coverTuning = ct;
  const x0 = m.pos[0]; m.update(I({ moveX: -1 }), DT); const d1 = m.pos[0] - x0;
  ct.moveSpeed = 6; const x1 = m.pos[0]; m.update(I({ moveX: -1 }), DT); near(m.pos[0] - x1, d1 * 2, 1e-9);
});
test('registration: states are cover-first, tap-blind and self-moving', () => {
  assert.deepEqual(Object.keys(COVER_STATES), COVER_STATE_NAMES);
  for (const n of COVER_STATE_NAMES) { assert.equal(STATES[n].acceptsTap, false); assert.equal(STATES[n].selfMoves, true); }
  assert.equal(CONTEXT_ACTIONS[0], coverAction);
  const d = approachDir(mover(), I({ moveY: -1 }), [0, 0]); assert.deepEqual(d.map(v => Math.round(v)), [0, 1]);
});
test('dt 0 and dt 5 in every cover state: finite, never inside a box, ends in a known state', () => {
  const boxes = [FLOOR, A, B];
  const nonFloor = boxes.filter(b => b.kind !== 'floor');
  const setups = {
    coverSlide: () => { const m = mover({ boxes, spawn: [-3, 0, 0.4] }); m.update(I({ moveY: -1, tap: true }), DT); return [m, I()]; },
    cover: () => { const m = mover({ boxes, spawn: [-3, 0, 0.4] }); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); return [m, I({ moveX: -1 })]; },
    popped: () => { const m = mover({ boxes, spawn: [-3, 0, 0.4] }); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); step(m, I({ aim: true }), 10); return [m, I({ aim: true })]; },
    vault: () => { const m = mover({ boxes, spawn: [-3, 0, 0.4] }); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); m.update(I({ moveY: -1, tap: true }), DT); return [m, I()]; },
    coverSwap: () => {
      const m = mover({ boxes, spawn: [-3.7, 0, 0.4] }); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
      toEnd(m); m.update(I({ moveX: -1, tap: true }), DT); return [m, I()];
    },
  };
  for (const [name, make] of Object.entries(setups)) for (const dt of [0, 5]) {
    const [m, it] = make();
    if (name !== 'popped' && name !== 'cover') assert.ok(m.state === name, `${name} setup was ${m.state}`);
    m.update(it, dt);
    assert.ok(m.pos.every(Number.isFinite), `${name} ${dt}`);
    assert.equal(pointInBoxes(nonFloor, [m.pos[0], 0.9, m.pos[2]], 0.33), false, `${name} ${dt}`);
    assert.ok(Object.keys(STATES).includes(m.state));
    if (m.state === 'cover') assert.notEqual(m.cover, null);
  }
});
test('tuning set to 0 mid-state: finite, outside boxes, known state, never stuck', () => {
  const boxes = [FLOOR, A, B], nonFloor = boxes.filter(b => b.kind !== 'floor');
  const zero = ct => { for (const k of ['vaultTime', 'popTime', 'swapSpeed', 'slideMinTime', 'slideMaxTime']) ct[k] = 0; };
  const start = () => { const m = mover({ boxes, spawn: [-3.7, 0, 0.4] }); m.coverTuning = { ...TUNING.cover }; return m; };
  const check = (m, label) => {
    assert.ok(m.pos.every(Number.isFinite), label);
    assert.equal(pointInBoxes(nonFloor, [m.pos[0], 0.9, m.pos[2]], 0.33), false, label);
    assert.ok(Object.keys(STATES).includes(m.state), label);
    if (m.cover) assert.ok(Number.isFinite(m.cover.pop), label);
  };
  for (const dt of [0, DT]) {
    // slide
    let m = start(); zero(m.coverTuning); m.update(I({ moveY: -1, tap: true }), DT);
    m.update(I(), 0); check(m, 'slide dt0'); step(m, I(), 3); check(m, 'slide'); assert.equal(m.state, 'cover');
    // popped cover
    m = start(); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); step(m, I({ aim: true }), 3); zero(m.coverTuning);
    m.update(I({ aim: true }), dt); check(m, 'pop'); m.update(I({ aim: true }), DT); check(m, 'pop2'); assert.equal(m.cover.pop, 1);
    // vault
    m = start(); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); m.update(I({ moveY: -1, tap: true }), DT);
    assert.equal(m.state, 'vault'); zero(m.coverTuning); m.update(I(), dt); check(m, 'vault'); step(m, I(), 3); check(m, 'vault');
    assert.equal(m.state, 'move');
    // swap
    m = start(); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
    let n = 0; while (m.cover.t < m.cover.edge.length - 1e-6 && n++ < 400) m.update(I({ moveX: -1 }), DT);
    m.update(I({ moveX: -1, tap: true }), DT); assert.equal(m.state, 'coverSwap'); zero(m.coverTuning);
    m.update(I(), dt); check(m, 'swap'); step(m, I(), 200); check(m, 'swap'); assert.notEqual(m.state, 'coverSwap');
  }
  // swapSpeed 0 set before the swap begins: duration is capped, not infinite
  const k = start(); k.update(I({ moveY: -1, tap: true }), DT); step(k, I(), 20);
  let n2 = 0; while (k.cover.t < k.cover.edge.length - 1e-6 && n2++ < 400) k.update(I({ moveX: -1 }), DT);
  k.coverTuning.swapSpeed = 0; k.update(I({ moveX: -1, tap: true }), DT);
  step(k, I(), 200); assert.notEqual(k.state, 'coverSwap'); check(k, 'swap speed 0');
});
test('endPush resets while popped, so a stale value cannot walk the player off early', () => {
  const m = inCover(); toEnd(m); step(m, I({ moveX: -1 }), 10); assert.ok(m.cover.endPush > 0);
  step(m, I({ aim: true }), 10); assert.equal(m.cover.endPush, 0);
});
test('cameraSideOf: at a closed end (a wall) the lens takes the open side, and stays clear of the player', () => {
  const WALL = makeBox([-3, 0, 1], [-2, 3, 3], 'wall'); // flush with the low box's -x end, on the camera's right
  const boxes = [FLOOR, LOW, WALL];
  const m = mover({ boxes, spawn: [-1.5, 0, 0.4] });
  m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
  assert.equal(m.state, 'cover');
  let n = 0; while (m.cover.t > 0.05 && n++ < 400) m.update(I({ moveX: 1 }), DT);
  assert.equal(cameraSideOf(m), -1);
  const cam = createCameraRig({ tuning: JSON.parse(JSON.stringify(TUNING.camera)), look: TUNING.look });
  const target = [m.pos[0], m.pos[1], m.pos[2]];
  cam.snap(target, -Math.PI / 2, 'coverLow', -1);
  let r; for (let i = 0; i < 120; i++) r = cam.update(DT, { target, mode: 'coverLow', side: cameraSideOf(m) }, boxes);
  assert.ok(Math.hypot(r.pos[0] - target[0], r.pos[2] - target[2]) >= 0.35, `lens ${r.pos}`);
});
test('keyboard diagonals decide the same way at camera yaw offsets of +-2 degrees', () => {
  const R = Math.PI / 180;
  for (const sx of [-1, 1]) for (const d of [-2, 0, 2]) {
    // away from the wall + sideways: leaves cover (45 deg is inside leaveAngle 55)
    const m = inCover(); m.update(I({ moveX: sx, moveY: 1, camYaw: d * R }), DT);
    assert.equal(m.state, 'move', `leave sx=${sx} d=${d}`);
    // into the wall + sideways, then tap: 45 deg is past pushAngle 40 and not along enough: no vault, no swap
    const k = inCover(); k.update(I({ moveX: sx, moveY: -1, camYaw: d * R, tap: true }), DT);
    assert.equal(k.state, 'cover', `tap sx=${sx} d=${d}`);
  }
});

// Run-in slam (Gate B round 1): straight at a face at run speed grabs with no tap.
const runAt = (m, intent, n) => { let first = -1; for (let i = 0; i < n; i++) { m.update(intent, DT); if (first < 0 && m.state === 'coverSlide') first = i; } return first; };
test('run-in: jogging or sprinting straight at LOW with no tap ends in cover, slams once', () => {
  for (const sprint of [false, true]) {
    const m = mover({ spawn: [0, 0, -3] });
    runAt(m, I({ moveY: -1, sprint }), 120); step(m, I({ moveY: -1, sprint }), 20);
    assert.equal(m.state, 'cover', 'sprint ' + sprint); assert.equal(m.slams, 1);
    near(m.pos[2], 2 - S, 1e-6);
  }
});
test('run-in: the entry carries onState with no tap', () => {
  const calls = []; const m = mover({ spawn: [0, 0, -3], onState: (n, p, i) => calls.push([n, p, i.tap]) });
  step(m, I({ moveY: -1 }), 120);
  assert.deepEqual(calls[0], ['coverSlide', 'move', false]);
});
test('run-in: never from 30 deg off the normal, parallel 0.3 m from the face, aim-walking, a slow walk, or autoSlam 0', () => {
  const cases = [
    ['30 deg', { spawn: [-3, 0, -3] }, I({ moveX: -Math.sin(30 * Math.PI / 180), moveY: -Math.cos(30 * Math.PI / 180) }), 0],
    ['parallel', { spawn: [-6, 0, 2 - S - 0.3] }, I({ moveX: -1 }), 0],
    ['aim-walk', { spawn: [0, 0, 0] }, I({ moveY: -1, aim: true }), 0],
    ['slow walk', { spawn: [0, 0, 0] }, I({ moveY: -0.4 }), 0],
  ];
  for (const [name, o, intent] of cases) {
    const m = mover(o); step(m, intent, 240);
    assert.notEqual(m.state, 'cover', name); assert.equal(m.slams, 0, name);
  }
  const off = mover({ spawn: [0, 0, -3] }); off.coverTuning = { ...C, autoSlam: 0 };
  step(off, I({ moveY: -1 }), 240); assert.equal(off.slams, 0); assert.notEqual(off.state, 'cover');
});
test('run-in: 30 deg off the normal grabs with a wider autoAngle (read live)', () => {
  const m = mover({ spawn: [-1, 0, -3] }); m.coverTuning = { ...C, autoAngle: 40 };
  step(m, I({ moveX: -Math.sin(20 * Math.PI / 180), moveY: -Math.cos(20 * Math.PI / 180) }), 200);
  assert.equal(m.slams, 1);
});
test('run-in: pushing in from rest against the wall never grabs, and a roll never grabs', () => {
  const m = mover({ spawn: [0, 0, 2 - S] });
  step(m, I({ moveY: -1 }), 240); assert.equal(m.state, 'move'); assert.equal(m.slams, 0);
  const r = mover({ spawn: [0, 0, -3] }); r.update(I({ moveY: -1, tap: true }), DT); assert.equal(r.state, 'roll');
  step(r, I({ moveY: -1 }), 5); assert.equal(r.state, 'roll');
});
test('run-in: pulling away leaves on the same step; running straight back in grabs again', () => {
  const m = mover({ spawn: [0, 0, -3] });
  step(m, I({ moveY: -1 }), 140); assert.equal(m.state, 'cover');
  m.update(I({ moveY: 1 }), DT); assert.equal(m.state, 'move');
  step(m, I({ moveY: 1 }), 20); step(m, I({ moveY: -1 }), 120); assert.equal(m.slams, 2);
});

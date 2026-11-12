import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createMovement, STATES, CONTEXT_ACTIONS, rollOffset, forwardOf, rightOf } from '../src/actors/movement.js';
import { TUNING } from '../src/tuning.js';
import { makeBox } from '../src/world/collide.js';
import { GREY_ROOM } from '../src/world/greyRoom.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';

const DT = 1 / 60;
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const near = (a, b, e, n = "") => assert.ok(Math.abs(a - b) <= e, `${n} ${a} vs ${b}`);
const mover = (o = {}) => createMovement({ boxes: [FLOOR], spawn: [0, 0, 0], ...o });
const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false, ...o });
const step = (m, intent, n) => { for (let i = 0; i < n; i++) m.update(intent, DT); };
const fwd = I({ moveY: -1 });

test('forward is the camera forward; right is the camera right', () => {
  let m = mover(); step(m, I({ moveY: -1 }), 3); assert.ok(m.vel[2] > 0);
  m = mover(); step(m, I({ moveY: -1, camYaw: Math.PI / 2 }), 3); assert.ok(m.vel[0] > 0);
  m = mover(); step(m, I({ moveX: 1 }), 3); assert.ok(m.vel[0] < 0);
  near(forwardOf(0)[2], 1, 1e-12); near(rightOf(0)[0], -1, 1e-12);
});
test('jog reaches 4.5 m/s in 0.25 s (15 steps), not before 0.23 s', () => {
  const m = mover(); step(m, fwd, 14); assert.ok(m.speed() < 4.5);
  step(m, fwd, 2); near(m.speed(), 4.5, 1e-9);
});
test('stops from jog within 0.17 s (10 steps), not in 0.12 s', () => {
  const m = mover(); step(m, fwd, 30); step(m, I(), 7); assert.ok(m.speed() > 0); step(m, I(), 3); assert.equal(m.speed(), 0);
});
test('footsteps: one onStep per stepEvery metres of jog, feet alternate; sprint strides longer; standing and aim-walk-stopped make none', () => {
  const ev = []; const m = mover({ onStep: e => ev.push(e) });
  step(m, I(), 60); assert.equal(ev.length, 0);
  step(m, fwd, 120);
  const t = TUNING.move, jogged = m.pos[2];
  const expected = Math.floor((jogged - 0) / t.stepEvery);
  assert.ok(Math.abs(ev.length - expected) <= 1, `${ev.length} steps over ${jogged} m`);
  assert.equal(m.steps, ev.length);
  ev.forEach((e, i) => { assert.equal(e.sprint, false); assert.equal(e.foot, (i + 1) % 2); assert.ok(e.speed > 4); });
  const n0 = ev.length; step(m, I(), 60); assert.equal(ev.length, n0, 'none while standing');
  const s = mover({ onStep: e => ev.push(e) }); ev.length = 0;
  step(s, I({ moveY: -1, sprint: true }), 120);
  assert.ok(ev.length > 0 && ev.every(e => e.sprint));
  assert.ok(Math.abs(ev.length - Math.floor(s.pos[2] / t.stepEverySprint)) <= 1, `${ev.length} sprint steps over ${s.pos[2]} m`);
});
test('footsteps: pushing against a wall makes no steps', () => {
  const ev = []; const wall = makeBox([-5, 0, 1], [5, 3, 2], 'wall');
  const m = createMovement({ boxes: [FLOOR, wall], spawn: [0, 0, 0], onStep: e => ev.push(e), coverTuning: { ...TUNING.cover, autoSlam: 0 } });
  step(m, fwd, 60); const n = ev.length; step(m, fwd, 120); assert.equal(ev.length, n);
});
test('half stick tilt jogs at half speed', () => {
  const m = mover(); step(m, I({ moveY: -0.5 }), 20); near(m.speed(), 2.25, 1e-9);
});
test('aiming caps speed at 2.2 and faces the camera (strafe)', () => {
  const m = mover(); step(m, I({ aim: true, camYaw: 1.0, moveX: 1 }), 20);
  near(m.speed(), 2.2, 1e-9); near(m.facing, 1.0, 1e-9);
});
test('not aiming, facing turns toward motion at turnRate', () => {
  const m = mover(); const it = I({ moveX: -1 }); // -X input is +X world at yaw 0
  m.update(it, DT); assert.ok(Math.abs(m.facing) <= 10 / 60 + 1e-9);
  step(m, it, 30); near(m.facing, Math.PI / 2, 1e-6);
});
test('sprint: needs sprint and stick tilt; reaches 7.5; ends on release, on aim, or on no input', () => {
  let m = mover(); step(m, I({ sprint: true, moveY: -0.4 }), 5); assert.equal(m.state, 'move');
  const sp = I({ sprint: true, moveY: -1 });
  const run = () => { const k = mover(); step(k, sp, 30); return k; };
  m = run(); assert.equal(m.state, 'sprint'); near(m.speed(), 7.5, 1e-9);
  for (const off of [I({ moveY: -1 }), I({ sprint: true, moveY: -1, aim: true }), I({ sprint: true })]) {
    m = run(); m.update(off, DT); assert.equal(m.state, 'move');
  }
});
test('a sprint turns no faster than sprintTurnRate', () => {
  const m = mover(); step(m, I({ sprint: true, moveY: -1 }), 30);
  const h0 = m.heading; step(m, I({ sprint: true, moveX: -1 }), 6);
  assert.ok(Math.abs(m.heading - h0) <= 0.3 + 1e-9);
});
test('a tap rolls 5 m in 0.55 s along the stick, then returns to move', () => {
  const m = mover(); m.update(I({ moveX: 1, tap: true }), DT); assert.equal(m.state, 'roll');
  step(m, I({ moveX: 1 }), 32); assert.equal(m.state, 'move');
  near(-m.pos[0], 5, 0.05); near(m.pos[2], 0, 1e-9);
});
test('a tap with no stick rolls the way the character faces', () => {
  const m = mover(); m.place([0, 0, 0], Math.PI / 2);
  m.update(I({ tap: true }), DT); step(m, I(), 32);
  near(m.pos[0], 5, 0.05); near(m.pos[2], 0, 0.05);
});
test('a roll into a wall 1 m away stops at the wall and never passes it', () => {
  const wall = makeBox([-5, 0, 1], [5, 4, 1.2]);
  const m = mover({ boxes: [FLOOR, wall] });
  m.update(I({ moveY: -1, tap: true }), DT);
  for (let i = 0; i < 40; i++) { m.update(I({ moveY: -1 }), DT); assert.ok(m.pos[2] <= 1 - TUNING.move.radius + 1e-6); }
  assert.ok(m.pos[2] > 0.6);
});
test('a tap in the last 0.15 s of a roll rolls again; an earlier tap is dropped', () => {
  let m = mover(); m.update(I({ moveY: -1, tap: true }), DT);
  step(m, I({ moveY: -1 }), 5); const e0 = m.entries;
  m.update(I({ moveY: -1, tap: true }), DT); step(m, I({ moveY: -1 }), 40);
  assert.equal(m.state, 'move'); assert.equal(m.entries, e0 + 1); // only the move entry after the roll
  m = mover(); m.update(I({ moveY: -1, tap: true }), DT);
  step(m, I({ moveY: -1 }), 26); const e1 = m.entries; assert.equal(m.state, 'roll');
  m.update(I({ moveY: -1, tap: true }), DT); step(m, I({ moveY: -1 }), 10);
  assert.equal(m.entries, e1 + 1); assert.equal(m.state, 'roll');
});
test('holding sprint as a roll ends goes straight into sprint', () => {
  const m = mover(); m.update(I({ moveY: -1, tap: true }), DT);
  step(m, I({ moveY: -1, sprint: true }), 34); assert.equal(m.state, 'sprint');
});
test('changing tuning.jog mid-run takes effect on the next step', () => {
  const t = { ...TUNING.move }; const m = mover({ tuning: t });
  step(m, fwd, 20); near(m.speed(), 4.5, 1e-9);
  t.jog = 3; step(m, fwd, 20); near(m.speed(), 3, 1e-9);
});
test('a context action ahead of roll wins the tap and enters its own state', () => {
  const states = { ...STATES, probe: { enter() {}, update: () => null, acceptsTap: false } };
  const contextActions = [{ name: 'probe', when: () => true, state: 'probe' }, ...CONTEXT_ACTIONS];
  const m = mover({ states, contextActions }); m.update(I({ tap: true }), DT);
  assert.equal(m.state, 'probe');
});
test('place() teleports and clears velocity; prevPos equals pos after place', () => {
  const m = mover(); step(m, fwd, 20); m.place([3, 0, 4], 1);
  assert.deepEqual(m.pos, [3, 0, 4]); assert.deepEqual(m.prevPos, [3, 0, 4]); assert.equal(m.speed(), 0);
  const r = mover(); r.update(I({ tap: true }), DT); assert.equal(r.state, 'roll'); r.place([0, 0, 0], 0); assert.equal(r.state, 'move');
});
test('rollOffset is 0 at 0, the distance at 1, and rises monotonically', () => {
  assert.equal(rollOffset(0, 5, 1.6), 0); near(rollOffset(1, 5, 1.6), 5, 1e-12);
  let p = -1; for (let u = 0; u <= 1; u += 0.05) { const v = rollOffset(u, 5, 1.6); assert.ok(v > p); p = v; }
});

test('aiming turns facing toward the camera at a capped rate and converges', () => {
  const m = mover(); m.update(I({ aim: true, camYaw: 2 }), DT);
  assert.ok(m.facing <= TUNING.move.aimTurnRate * DT + 1e-9);
  step(m, I({ aim: true, camYaw: 2 }), 10); near(m.facing, 2, 1e-9);
});
test('a roll along a wall that ends does not release blocked distance in one step', () => {
  const wall = makeBox([-5, 0, 1], [2, 4, 1.2]); // ends at x = 2
  const m = mover({ boxes: [FLOOR, wall] });
  m.place([0, 0, 0.3], 0);
  const it = I({ moveX: -1, moveY: -1 }); // toward +X and +Z, into the wall
  m.update({ ...it, tap: true }, DT);
  let prev = m.pos[0];
  for (let i = 0; i < 40; i++) {
    m.update(it, DT);
    assert.ok(Math.hypot(m.pos[0] - m.prevPos[0], m.pos[2] - m.prevPos[2]) < 0.3, 'jump at step ' + i);
  }
  assert.ok(m.pos[0] > prev);
});
test('dt = 0 mid-roll gives no NaN', () => {
  const m = mover(); m.update(I({ moveY: -1, tap: true }), DT); step(m, I({ moveY: -1 }), 5);
  m.update(I({ moveY: -1 }), 0);
  assert.ok(m.pos.every(Number.isFinite) && m.vel.every(Number.isFinite) && Number.isFinite(m.facing));
});
test('dt = 5 mid-roll and mid-sprint is finite and stays inside the room walls', () => {
  const solid = b => b.kind === 'wall';
  for (const mode of ['roll', 'sprint']) {
    const m = mover({ boxes: GREY_ROOM.boxes, spawn: GREY_ROOM.spawn.pos });
    const it = I({ moveY: -1, sprint: mode === 'sprint' });
    if (mode === 'roll') m.update({ ...it, tap: true }, DT);
    step(m, it, 10);
    m.update(it, 5);
    assert.ok(m.pos.every(Number.isFinite) && m.vel.every(Number.isFinite), mode);
    for (const b of GREY_ROOM.boxes.filter(solid)) {
      const inside = m.pos[0] > b.min[0] && m.pos[0] < b.max[0] && m.pos[2] > b.min[2] && m.pos[2] < b.max[2];
      assert.ok(!inside, mode + ' centre inside a wall');
    }
  }
});

// ---- final review fixes ----
const roomMover = (pos) => createMovement({ boxes: GREY_ROOM.boxes, spawn: pos });
const inRoom = (m) => m.pos.every(Number.isFinite) && m.pos[0] >= -12 + TUNING.move.radius - 1e-6 && m.pos[2] >= -12 + TUNING.move.radius - 1e-6;

test('jogging diagonally into an inside corner stops: speed drops to about 0', () => {
  const m = roomMover([-10, 0, -10]);
  step(m, I({ moveX: 1, moveY: 1 }), 120);
  assert.ok(m.pos[0] < -11.5 && m.pos[2] < -11.5, 'reached the corner');
  step(m, I({ moveX: 1, moveY: 1 }), 5);
  assert.ok(m.speed() < 0.1, `speed ${m.speed()}`);
});
test('an oblique roll into a corner ends finite, inside the walls, and nearly still', () => {
  const m = roomMover([-10.5, 0, -11]);
  step(m, I({ moveX: 1, moveY: 0.6, tap: true }), 1);
  assert.equal(m.state, 'roll');
  step(m, I({ moveX: 1, moveY: 0.6 }), 60);
  assert.ok(inRoom(m), `pos ${m.pos}`);
  assert.ok(m.speed() < 0.1, `speed ${m.speed()}`);
  const m2 = roomMover([-9, 0, -9]);
  step(m2, I({ moveX: 1, moveY: 1, tap: true }), 1);
  step(m2, I({ moveX: 1, moveY: 1 }), 60);
  assert.ok(inRoom(m2), `pos ${m2.pos}`);
  assert.ok(m2.speed() < 0.1, `speed ${m2.speed()}`);
});
test('movement thresholds live in TUNING.move and are read when used', () => {
  const m = mover();
  assert.equal(typeof m.tuning.faceMinSpeed, 'number');
  assert.equal(typeof m.tuning.sprintHeadingMinSpeed, 'number');
  m.tuning.faceMinSpeed = 100; // never turn to face
  step(m, I({ moveX: 1 }), 30);
  assert.equal(m.facing, 0);
  m.tuning.faceMinSpeed = 0.2;
});

test('fire held in move faces the camera at aimTurnRate and sets m.firing; sprint ignores it and m.firing is false', () => {
  const m = mover(); m.update(I({ fire: true, camYaw: 2 }), DT);
  assert.equal(m.firing, true); assert.equal(m.aiming, false);
  assert.ok(m.facing <= TUNING.move.aimTurnRate * DT + 1e-9 && m.facing > 0);
  step(m, I({ fire: true, camYaw: 2 }), 12); near(m.facing, 2, 1e-9);
  // Fire does not slow the jog.
  step(m, I({ fire: true, camYaw: 0, moveY: -1 }), 30); near(m.speed(), TUNING.move.jog, 1e-9);
  m.update(I(), DT); assert.equal(m.firing, false);
  const s = mover(); step(s, I({ sprint: true, moveY: -1, fire: true }), 12);
  assert.equal(s.state, 'sprint'); assert.equal(s.firing, false);
  const r = mover(); r.update(I({ tap: true, fire: true }), DT); assert.equal(r.state, 'roll'); assert.equal(r.firing, false);
  const p = mover(); p.update(I({ fire: true }), DT); p.place([0, 0, 0]); assert.equal(p.firing, false);
});
test('an intent without fire behaves as before: firing false and facing follows motion', () => {
  const m = mover(); step(m, I({ moveX: -1, camYaw: 0 }), 30);
  assert.equal(m.firing, false); near(m.facing, Math.PI / 2, 1e-6);
});
test('down() from move, sprint, roll and each cover state: state downed, cover null; crawl at 1.0 m/s; taps, aim, sprint and fire do nothing; revive() returns to move', () => {
  const LOWB = makeBox([-2, 0, 2], [2, 1, 2.6], 'low'), WALL = makeBox([-6, 0, 2], [-3, 1, 2.6], 'low'), FAR = makeBox([-1, 0, 2.2], [3, 1, 2.8], 'low');
  const mk = (boxes, spawn) => mover({ boxes: [FLOOR, ...boxes], spawn, coverEdges: deriveCoverEdges([FLOOR, ...boxes], edgeOptions()) });
  const inCoverM = () => { const m = mk([LOWB], [0, 0, 0.4]); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); return m; };
  const setups = {
    move: () => mover(),
    sprint: () => { const m = mover(); step(m, I({ moveY: -1, sprint: true }), 20); assert.equal(m.state, 'sprint'); return m; },
    roll: () => { const m = mover(); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'roll'); return m; },
    coverSlide: () => { const m = mk([LOWB], [0, 0, 0.4]); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'coverSlide'); return m; },
    cover: inCoverM,
    popped: () => { const m = inCoverM(); step(m, I({ aim: true }), 12); assert.equal(m.cover.exposed, true); return m; },
    blind: () => { const m = inCoverM(); step(m, I({ fire: true }), 12); assert.equal(m.cover.blind, 1); return m; },
    vault: () => { const m = inCoverM(); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'vault'); return m; },
    coverSwap: () => {
      const m = mk([WALL, FAR], [-3.5, 0, 0.4]); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
      let n = 0; while (m.cover.t < m.cover.edge.length - 1e-6 && n++ < 300) m.update(I({ moveX: -1 }), DT);
      m.update(I({ moveX: -1, tap: true }), DT); assert.equal(m.state, 'coverSwap'); return m;
    },
  };
  for (const [name, make] of Object.entries(setups)) {
    const m = make(); m.down();
    assert.equal(m.state, 'downed', name); assert.equal(m.cover, null, name); assert.equal(m.aiming, false, name); assert.equal(m.firing, false, name);
    // crawl 1.0 m/s along +x (stick -x at yaw 0), with every other input held
    const it = I({ moveX: -1, aim: true, sprint: true, fire: true, tap: true });
    const before = m.entries; step(m, it, 30);
    assert.equal(m.state, 'downed', name); assert.equal(m.entries, before, name);
    assert.equal(m.aiming, false, name); assert.equal(m.firing, false, name); assert.equal(m.cover, null, name);
    near(m.speed(), 1.0, 1e-9, name);
    m.revive(); assert.equal(m.state, 'move', name); assert.equal(m.cover, null, name);
    step(m, I({ moveX: 1 }), 20); near(m.speed(), 4.5, 1e-9, name);
  }
});
test('downed: crawlSpeed and crawlTurnRate come from the tuning; never returns a next state; revive() when not downed does nothing', () => {
  const m = mover({ tuning: { ...TUNING.move, crawlSpeed: 2, crawlTurnRate: 1 } }); m.down();
  step(m, I({ moveX: -1 }), 30); near(m.speed(), 2, 1e-9);
  assert.ok(m.facing > 0 && m.facing <= 0.5 + 1e-9, `${m.facing}`);      // 1 rad/s over 0.5 s
  step(m, I({ moveX: 0.5 }), 30); near(m.speed(), 1, 1e-9);
  step(m, I(), 20); assert.equal(m.speed(), 0);
  const j = mover(); const e = j.entries; j.revive(); assert.equal(j.state, 'move'); assert.equal(j.entries, e);
  m.down(); m.down(); assert.equal(m.state, 'downed');
  for (const dt of [0, 5]) { m.update(I({ moveY: 1 }), dt); assert.ok(m.pos.every(Number.isFinite)); }
});

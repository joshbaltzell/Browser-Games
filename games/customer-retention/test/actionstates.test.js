import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createMovement, STATES } from '../src/actors/movement.js';
import { ACTION_STATES } from '../src/actors/actionStates.js';
import { fireStance } from '../src/combat/stance.js';
import { TUNING } from '../src/tuning.js';
import { makeBox } from '../src/world/collide.js';
import { KIOSK_ROW } from '../src/world/kioskRow.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';

const DT = 1 / 60;
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false, fire: false, ...o });
const step = (m, intent, n) => { for (let i = 0; i < n; i++) m.update(intent, DT); };
const near = (a, b, e, n = '') => assert.ok(Math.abs(a - b) <= e, `${n} ${a} vs ${b}`);
const mover = (o = {}) => { const ev = []; const m = createMovement({ boxes: [FLOOR], spawn: [0, 0, 0], onAction: e => ev.push(e.type), ...o }); m.ev = ev; return m; };
const MELEE = TUNING.melee;

test('STATES gains bash, rev, execute and reviveTobble, none of which accept taps', () => {
  for (const n of ['bash', 'rev', 'execute', 'reviveTobble']) { assert.equal(STATES[n], ACTION_STATES[n]); assert.equal(STATES[n].acceptsTap, false); }
});

test('bash: from move and sprint only (cover, roll, downed refuse); lunges <= 0.6 m through moveCapsule; one bashHit at 0.15 s; back to move at 0.45 s; a second bash waits 0.6 s from the first', () => {
  let m = mover(); assert.equal(m.bash(), true); assert.equal(m.state, 'bash');
  step(m, I(), 8); assert.deepEqual(m.ev, []); step(m, I(), 1); assert.deepEqual(m.ev, ['bashHit'], 'at 0.15 s (9 steps)');
  step(m, I(), 17); assert.equal(m.state, 'bash', 'still bashing at 26 steps (0.433 s)');
  step(m, I(), 1); assert.equal(m.state, 'move', 'back to move at 0.45 s (27 steps)');
  assert.deepEqual(m.ev, ['bashHit'], 'only one hit'); near(m.pos[2], MELEE.bashLunge, 1e-9, 'lunged along the facing'); near(m.pos[0], 0, 1e-12);
  assert.equal(m.speed(), 0);
  step(m, I(), 8); assert.equal(m.bash(), false, 'cooldown: 35 steps since the first');
  step(m, I(), 1); assert.equal(m.bash(), true, '36 steps = 0.6 s after the first'); assert.equal(m.state, 'bash');
  // sprint
  m = mover(); step(m, I({ moveY: -1, sprint: true }), 30); assert.equal(m.state, 'sprint'); assert.equal(m.bash(), true);
  // refusals
  m = mover(); m.update(I({ tap: true }), DT); assert.equal(m.state, 'roll'); assert.equal(m.bash(), false); assert.equal(m.state, 'roll');
  m = mover(); m.down(); assert.equal(m.bash(), false); assert.equal(m.state, 'downed');
  const edges = deriveCoverEdges(KIOSK_ROW.boxes, { ...edgeOptions(), exclude: KIOSK_ROW.coverExclude });
  m = mover({ boxes: KIOSK_ROW.boxes, spawn: [-4, 0, -10.4], coverEdges: edges });
  m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); assert.equal(m.state, 'cover'); assert.equal(m.bash(), false); assert.equal(m.state, 'cover');
  m = mover(); m.bash(); assert.equal(m.bash(), false, 'not while bashing');
});

test('bash: a wall 0.3 m ahead stops the lunge there (through moveCapsule); the optional yaw turns the lunge', () => {
  const wall = makeBox([-3, 0, 0.7], [3, 3, 1.5], 'wall');
  const m = mover({ boxes: [FLOOR, wall], coverTuning: { ...TUNING.cover, autoSlam: 0 } }); m.bash(); step(m, I(), 40);
  assert.ok(m.pos[2] <= 0.7 - TUNING.move.radius + 1e-6 && m.pos[2] > 0.3, `${m.pos[2]}`);
  const y = mover(); y.bash(Math.PI / 2); step(y, I(), 40); near(y.pos[0], MELEE.bashLunge, 1e-9); near(y.pos[2], 0, 1e-9); near(y.facing, Math.PI / 2, 1e-12);
});

test('bash: no bashHit twice and none at all if downed first', () => {
  const m = mover(); m.bash(); step(m, I(), 5); m.down(); step(m, I(), 60);
  assert.deepEqual(m.ev, []); assert.equal(m.state, 'downed');
});

test('rev: moves at most 2.5 m/s, fireStance null, rev(false) -> move; m.down() from rev -> downed', () => {
  const m = mover(); assert.equal(m.rev(true), true); assert.equal(m.state, 'rev');
  let top = 0; for (let i = 0; i < 120; i++) { m.update(I({ moveY: -1, sprint: true, fire: true, aim: true }), DT); top = Math.max(top, m.speed()); assert.equal(fireStance(m), null); }
  assert.ok(top <= MELEE.revSpeed + 1e-9 && top > MELEE.revSpeed - 0.01, `top ${top}`); assert.equal(m.state, 'rev');
  assert.equal(m.firing, false); assert.equal(m.aiming, false);
  assert.equal(m.rev(false), true); assert.equal(m.state, 'move'); assert.equal(m.rev(false), false);
  m.rev(true); m.down(); assert.equal(m.state, 'downed');
  const s = mover(); step(s, I({ moveY: -1, sprint: true }), 30); assert.equal(s.rev(true), true, 'from sprint'); assert.equal(s.state, 'rev');
  const d = mover(); d.down(); assert.equal(d.rev(true), false);
  const r = mover(); r.update(I({ tap: true }), DT); assert.equal(r.rev(true), false, 'not while rolling');
});

test('rev: turns toward its motion, and toward the camera when the stick is idle', () => {
  const m = mover(); m.rev(true); step(m, I({ moveY: -1, camYaw: 1.0 }), 40); near(m.facing, 1.0, 1e-6);
  step(m, I({ camYaw: -0.5 }), 60); near(m.facing, -0.5, 1e-6);
});

test('execute: position fixed, faces the target, executeDone once at the given time, then move; m.down() mid-execute -> downed, no executeDone', () => {
  const m = mover({ spawn: [1, 0, 2] }); step(m, I({ moveY: -1 }), 20); const p = [...m.pos];
  assert.equal(m.execute([p[0] + 3, p[2]], 0.7), true); assert.equal(m.state, 'execute'); near(m.facing, Math.PI / 2, 1e-9);
  step(m, I({ moveY: -1, tap: true, fire: true }), 41); assert.equal(m.state, 'execute'); assert.deepEqual(m.ev, []);
  step(m, I({ moveY: -1 }), 1); assert.equal(m.state, 'move'); assert.deepEqual(m.ev, ['executeDone']);
  assert.deepEqual(m.pos, p, 'never moved'); step(m, I(), 30); assert.deepEqual(m.ev, ['executeDone'], 'once');
  const d = mover(); d.execute([0, 5], 1.1); step(d, I(), 20); d.down(); step(d, I(), 90);
  assert.equal(d.state, 'downed'); assert.deepEqual(d.ev, []);
  const c = mover(); c.down(); assert.equal(c.execute([0, 1], 1), false); const q = mover(); q.update(I({ tap: true }), DT); assert.equal(q.execute([0, 1], 1), false);
  const r = mover(); r.rev(true); assert.equal(r.execute([0, 1], 1.1), true, 'from rev: the cutter touch');
  const z = mover(); z.execute([0, 1], 0); step(z, I(), 1); assert.equal(z.state, 'move'); assert.deepEqual(z.ev, ['executeDone']);
});

test('reviveTobble: holds while interactHeld, released -> move with no reviveDone; held 1.5 s -> one reviveDone then move', () => {
  const held = I({ interactHeld: true }), m = mover();
  assert.equal(m.reviveTobble([2, 0, 0]), true); near(m.facing, Math.PI / 2, 1e-9);
  step(m, held, 60); assert.equal(m.state, 'reviveTobble'); step(m, I(), 1); assert.equal(m.state, 'move'); assert.deepEqual(m.ev, []);
  m.reviveTobble([0, 0, 2]); step(m, held, 89); assert.equal(m.state, 'reviveTobble'); step(m, held, 1);
  assert.equal(m.state, 'move'); assert.deepEqual(m.ev, ['reviveDone']); step(m, held, 120); assert.deepEqual(m.ev, ['reviveDone']);
  const d = mover(); d.reviveTobble([0, 0, 1]); step(d, held, 10); d.down(); step(d, held, 120); assert.equal(d.state, 'downed'); assert.deepEqual(d.ev, []);
  const t = mover(); t.reviveTobble([0, 0, 1]); step(t, held, 5);
  TUNING.tobble = { playerReviveTime: 0.5 };
  try { step(t, held, 30); assert.deepEqual(t.ev, ['reviveDone'], 'reads TUNING.tobble.playerReviveTime once it exists'); } finally { delete TUNING.tobble; }
});

test('every action state ignores taps and ends by its time at dt 1/60, at dt 0 stays finite, at dt 5 ends at once', () => {
  const held = I({ interactHeld: true, tap: true });
  const starts = {
    bash: m => m.bash(), execute: m => m.execute([0, 3], 0.7), reviveTobble: m => m.reviveTobble([0, 0, 2]), rev: m => m.rev(true),
  };
  for (const [name, start] of Object.entries(starts)) {
    let m = mover(); assert.ok(start(m), name); const n0 = m.entries;
    step(m, held, 10); assert.equal(m.state, name, `${name} ignores taps`); assert.equal(m.entries, n0);
    if (name !== 'rev') { step(m, I({ interactHeld: true }), 120); assert.equal(m.state, 'move', `${name} ends by its time at 1/60`); }
    m = mover(); start(m); for (let i = 0; i < 10; i++) m.update(held, 0);
    assert.ok(m.pos.every(Number.isFinite) && Number.isFinite(m.facing) && m.state === name, `${name} at dt 0`);
    m = mover(); start(m); m.update(held, 5);
    if (name !== 'rev') { assert.equal(m.state, 'move', `${name} ends at once at dt 5`); }
    assert.ok(m.pos.every(Number.isFinite) && Number.isFinite(m.facing), `${name} at dt 5`);
    m = mover(); start(m); m.down(); assert.equal(m.state, 'downed', `${name} -> downed`);
  }
});

test('an action ending lands in move with no velocity carried and the cooldown still running', () => {
  const m = mover(); step(m, I({ moveY: -1 }), 30); m.bash(); step(m, I({ moveY: -1 }), 27);
  assert.equal(m.state, 'move'); assert.ok(m.speed() < 1e-9 || m.speed() <= TUNING.move.jog);
  assert.equal(m.bash(), false);
});

test('place() puts the mover back to move with a ready bash and no kettlebell aim', () => {
  const m = mover(); m.bash(); step(m, I({ grenade: true }), 3); m.place([1, 0, 1], 0);
  assert.equal(m.state, 'move'); assert.equal(m.grenadeAim, false); assert.equal(m.bash(), true);
});

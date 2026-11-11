import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createCameraRig, modeParams, shakeWeightOf, CAMERA_MODES } from '../src/render/cameraRig.js';
import { TUNING } from '../src/tuning.js';
import { makeBox, pointInBoxes } from '../src/world/collide.js';

const DT = 1 / 60;
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const OPEN = [FLOOR];
const near = (a, b, e) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const clone = () => JSON.parse(JSON.stringify(TUNING.camera));
const rig = (o = {}) => createCameraRig({ tuning: clone(), look: TUNING.look, ...o });
const T0 = [0, 0, 0];
const run = (cam, n, opts = {}, boxes = OPEN) => {
  let r; for (let i = 0; i < n; i++) r = cam.update(DT, { target: T0, mode: 'normal', side: 1, ...opts }, boxes); return r;
};
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);

test('at rest it matches the milestone-0 game camera: right, up, back of the feet', () => {
  const c = rig(); c.snap(T0, 0); const r = run(c, 120);
  near(r.pos[0], -0.55, 1e-3); near(r.pos[1], 1.55, 1e-3); near(r.pos[2], -2.6, 1e-3);
  near(r.dir[2], 1, 1e-9); near(r.fov, 70, 1e-3);
});
test('aim pulls in to 1.4 m and fov 50 within 0.5 s; sprint goes to fov 80 and lower', () => {
  let c = rig(); c.snap(T0, 0); let r = run(c, 30, { mode: 'aim' });
  near(r.pos[2], -1.4, 0.02); near(r.fov, 50, 0.1);
  c = rig(); c.snap(T0, 0); r = run(c, 60, { mode: 'sprint' });
  near(r.fov, 80, 0.1); assert.ok(r.pos[1] < 1.4);
});
test('modeParams falls back to normal for an unknown mode and fills missing keys from normal', () => {
  const t = clone();
  assert.deepEqual(modeParams(t, 'nope'), { fov: 70, right: 0.55, up: 1.55, back: 2.6 });
  assert.deepEqual(modeParams(t, 'aim'), { fov: 50, right: 0.55, up: 1.55, back: 1.4 });
  assert.deepEqual(modeParams(t, 'sprint'), { fov: 80, right: 0.55, up: 1.25, back: 2.9 });
});
test('mouse: right turns right, up looks up, invertY flips, pitch clamps', () => {
  let c = rig(); c.look(100, 0, 0, 0, DT, false); near(c.yaw, -0.22, 1e-12);
  c = rig(); c.look(0, -100, 0, 0, DT, false); near(c.pitch, 0.22, 1e-12);
  c = rig({ look: { ...TUNING.look, invertY: true } }); c.look(0, -100, 0, 0, DT, false); near(c.pitch, -0.22, 1e-12);
  c = rig(); c.look(0, -1e6, 0, 0, DT, false); assert.equal(c.pitch, 1.2);
  c.look(0, 1e6, 0, 0, DT, false); assert.equal(c.pitch, -1.1);
});
test('pad: full right stick for 1 s turns 3.2 rad; half stick follows the expo curve', () => {
  let c = rig(); for (let i = 0; i < 60; i++) c.look(0, 0, 1, 0, DT, false); near(c.yaw, -3.2, 1e-9);
  c = rig(); for (let i = 0; i < 60; i++) c.look(0, 0, -0.5, 0, DT, false); near(c.yaw, 0.5 ** 1.8 * 3.2, 1e-9);
  c = rig(); for (let i = 0; i < 30; i++) c.look(0, 0, 0, -1, DT, false); near(c.pitch, 1.1, 1e-9);
});
test('aiming scales mouse and pad look by 0.6', () => {
  let c = rig(); c.look(100, 0, 0, 0, DT, true); near(c.yaw, -0.22 * 0.6, 1e-12);
  c = rig(); for (let i = 0; i < 60; i++) c.look(0, 0, 1, 0, DT, true); near(c.yaw, -3.2 * 0.6, 1e-9);
});
const WALL_BEHIND = [FLOOR, makeBox([-5, 0, -1], [5, 5, -0.5], 'wall')];
test('back to a wall: camera is pulled in the same frame and is never inside a box', () => {
  const c = rig(); c.snap(T0, 0);
  const r = run(c, 1, {}, WALL_BEHIND);
  assert.ok(!pointInBoxes(WALL_BEHIND, r.pos, 0.1));
  assert.ok(-r.pos[2] < 0.5, `${r.pos}`);
});
test('the pull-in eases back out when the wall is gone, not in one frame', () => {
  const c = rig(); c.snap(T0, 0); run(c, 5, {}, WALL_BEHIND);
  let r = run(c, 1); assert.ok(-r.pos[2] < 2.0);
  r = run(c, 60); assert.ok(-r.pos[2] > 2.5);
});
test('in a 1.4 m corridor with the right wall close, the camera stays inside the corridor', () => {
  const B = [FLOOR, makeBox([-1.4, 0, -50], [-0.7, 5, 50]), makeBox([0.7, 0, -50], [1.4, 5, 50])];
  for (const yaw of [0, 0.5, -0.5, 1.5]) {
    const c = rig(); c.snap(T0, yaw); c.yaw = yaw;
    const r = run(c, 120, {}, B);
    assert.ok(!pointInBoxes(B, r.pos, 0.1), `yaw ${yaw}: ${r.pos}`);
    assert.ok(Math.abs(r.pos[0]) < 0.7);
  }
});
test('looking steeply up from the floor keeps the camera above the floor', () => {
  const c = rig(); c.snap(T0, 0); c.pitch = 1.2;
  for (let i = 0; i < 120; i++) { const r = run(c, 1); assert.ok(r.pos[1] > 0, `${r.pos}`); }
});
test('side -1 mirrors the shoulder offset', () => {
  const c = rig(); c.snap(T0, 0); const r = run(c, 120, { side: -1 });
  near(r.pos[0], 0.55, 1e-3);
});
test('no shake outside sprint; shake stays within amp in sprint', () => {
  const a = rig(), b = rig(); b.snap(T0, 0); a.snap(T0, 0);
  const t = { ...clone().shake }; // amp 0 rig
  const quiet = createCameraRig({ tuning: { ...clone(), shake: { amp: 0, hz: 9 } }, look: TUNING.look }); quiet.snap(T0, 0);
  let p = [...run(a, 60).pos], q = [...run(quiet, 60).pos];
  assert.deepEqual(p, q);
  let worst = 0;
  run(a, 90, { mode: 'sprint' }); run(quiet, 90, { mode: 'sprint' });
  for (let i = 0; i < 60; i++) {
    p = [...run(a, 1, { mode: 'sprint' }).pos]; q = [...run(quiet, 1, { mode: 'sprint' }).pos];
    worst = Math.max(worst, dist(p, q));
  }
  assert.ok(worst <= 0.025 * Math.SQRT2 + 1e-9 && worst > 0.005, `${worst}`);
});
test('shoulder jammed against a wall: lens stays at least probeRadius from every face', () => {
  const B = [FLOOR, makeBox([-0.62, 0, -50], [-5, 5, 50]), makeBox([-5, 0, -0.6], [5, 5, -3])];
  for (const yaw of [0, 0.3, 0.5, 1.0, -0.4, 3]) {
    const c = rig(); c.snap(T0, yaw); c.yaw = yaw;
    const r = run(c, 120, {}, B);
    for (const b of B) {
      const d = [0, 1, 2].map(i => Math.max(b.min[i] - r.pos[i], 0, r.pos[i] - b.max[i]));
      assert.ok(Math.hypot(...d) >= 0.22 - 1e-6, `yaw ${yaw}: ${r.pos} ${Math.hypot(...d)}`);
    }
  }
});
test('a mode without shakeWeight (coverTall, fov 75) gets zero shake', () => {
  const t = { ...clone(), coverTall: { fov: 75 } };
  const c = createCameraRig({ tuning: t, look: TUNING.look }); c.snap(T0, 0);
  const q = createCameraRig({ tuning: { ...t, shake: { amp: 0, hz: 9 } }, look: TUNING.look }); q.snap(T0, 0);
  for (let i = 0; i < 120; i++) {
    const a = c.update(DT, { target: T0, mode: 'coverTall', side: 1 }, OPEN), b = q.update(DT, { target: T0, mode: 'coverTall', side: 1 }, OPEN);
    assert.deepEqual(a.pos, b.pos);
  }
});
test('only CAMERA_MODES are modes: shake, bump, look and unknown names give normal', () => {
  const t = clone();
  assert.deepEqual([...CAMERA_MODES], ['normal', 'aim', 'sprint', 'coverLow', 'coverTall']);
  for (const m of ['shake', 'bump', 'look', 'nope']) {
    assert.deepEqual(modeParams(t, m), modeParams(t, 'normal'));
    assert.equal(shakeWeightOf({ ...t, [m]: { shakeWeight: 1 } }, m), 0);
  }
  assert.deepEqual(modeParams(t, 'coverLow'), { fov: 70, right: 0.6, up: 1.2, back: 2.4 });
  assert.deepEqual(modeParams(t, 'coverTall'), { fov: 70, right: 0.7, up: 1.5, back: 2.3 });
});
test('coverLow and coverTall blend in within 0.5 s and have zero shake', () => {
  for (const [mode, p] of [['coverLow', { right: 0.6, up: 1.2, back: 2.4 }], ['coverTall', { right: 0.7, up: 1.5, back: 2.3 }]]) {
    const c = rig(); c.snap(T0, 0);
    const q = createCameraRig({ tuning: { ...clone(), shake: { amp: 0, hz: 9 } }, look: TUNING.look }); q.snap(T0, 0);
    let r;
    for (let i = 0; i < 30; i++) {
      r = c.update(DT, { target: T0, mode, side: 1 }, OPEN);
      assert.deepEqual(r.pos, q.update(DT, { target: T0, mode, side: 1 }, OPEN).pos);
    }
    near(r.pos[0], -p.right, 0.02); near(r.pos[1], p.up, 0.02); near(r.pos[2], -p.back, 0.02); near(r.fov, 70, 0.1);
  }
});
test('bump pulls the lens toward the player by about amount, and it is back within 0.3 s', () => {
  const c = rig(); c.snap(T0, 0); run(c, 120);
  const head = [0, 1.55, 0];
  const d0 = dist(run(c, 1).pos, head);
  c.bump();
  const d1 = dist(run(c, 1).pos, head);
  const amt = TUNING.camera.bump.amount;
  assert.ok(d0 - d1 >= 0.5 * amt && d0 - d1 <= 1.05 * amt, `${d0 - d1}`);
  near(dist(run(c, 18).pos, head), d0, 0.01);
  // capped at twice amount, and snap clears it
  for (let i = 0; i < 10; i++) c.bump(1);
  const d2 = dist(run(c, 1).pos, head);
  assert.ok(d0 - d2 <= 2.05 * amt, `${d0 - d2}`);
  c.bump(); c.snap(T0, 0); near(dist(run(c, 1).pos, head), d0, 1e-6);
});
test('passing a pillar corner at jog: the lens never comes within minBack of the head and is never inside a box', () => {
  const B = [FLOOR, makeBox([-0.4, 0, -0.4], [0.4, 4, 0.4], 'pillar')];
  const up = TUNING.camera.up;
  const c = rig(); const tg = [-0.8, 0, -3.7]; c.snap(tg, 0);
  let worst = Infinity, t = 0;
  for (let i = 0; i < 400 && tg[0] <= 3; i++) {
    t += DT;
    if (tg[2] < 0.8) { tg[2] = Math.min(0.8, tg[2] + 4.5 * DT); if (tg[2] >= 0.8) t = 0; }
    else tg[0] += 4.5 * DT;
    c.yaw = tg[2] < 0.8 ? 0 : Math.min(1, t / 0.3) * Math.PI / 2;
    const r = c.update(DT, { target: tg, mode: 'normal', side: 1 }, B);
    assert.ok(!pointInBoxes(B, r.pos, 0), `inside at ${i}: ${r.pos}`);
    worst = Math.min(worst, dist(r.pos, [tg[0], tg[1] + up, tg[2]]));
  }
  assert.ok(worst >= 0.34, `closest ${worst}`);
});
test('a fast move across a wall: the trailing pivot is stopped at the wall, so the lens stays on the player side', () => {
  const B = [FLOOR, makeBox([-0.1, 0, -50], [0.1, 5, 50], 'wall')];
  const c = rig(); c.snap([-1.5, 0, 0], 0); run(c, 30, { target: [-1.5, 0, 0] }, B);
  for (let i = 0; i < 6; i++) {
    const r = c.update(DT, { target: [1.5, 0, 0], mode: 'normal', side: 1 }, B);
    assert.ok(r.pos[0] > 0, `frame ${i}: lens x ${r.pos[0]}`);
  }
});
test('a 5 s dt gives finite numbers', () => {
  const c = rig(); c.snap(T0, 0);
  const r = c.update(5, { target: [3, 0, 4], mode: 'sprint', side: -1 }, WALL_BEHIND);
  for (const v of [...r.pos, ...r.dir, r.fov]) assert.ok(Number.isFinite(v));
});
test('tuning is live: changing camera.back moves the camera after settling', () => {
  const t = clone(); const c = createCameraRig({ tuning: t, look: TUNING.look }); c.snap(T0, 0);
  near(run(c, 120).pos[2], -2.6, 1e-3);
  t.back = 4; near(run(c, 120).pos[2], -4, 1e-3);
});

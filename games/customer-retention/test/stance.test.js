import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fireStance, muzzleOf } from '../src/combat/stance.js';
import { resolveShot } from '../src/combat/hits.js';
import { createDummy } from '../src/combat/targets.js';
import { createMovement } from '../src/actors/movement.js';
import { GREY_ROOM } from '../src/world/greyRoom.js';
import { deriveCoverEdges, edgeOptions, edgePoint } from '../src/world/cover.js';
import { makeBox, pointInBoxes } from '../src/world/collide.js';
import { TUNING } from '../src/tuning.js';
import { rng } from '../src/core/random.js';

const DT = 1 / 60, C = TUNING.combat, S = TUNING.move.radius + TUNING.cover.gap;
const near = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const norm = v => { const l = Math.hypot(...v); return v.map(x => x / l); };
const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: Math.PI, aim: false, fire: false, sprint: false, tap: false, ...o });
const step = (m, intent, n) => { for (let i = 0; i < n; i++) m.update(intent, DT); };
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const ROOM = GREY_ROOM.boxes, SOLID = ROOM.filter(b => b.kind !== 'floor');
const EDGES = deriveCoverEdges(ROOM, { ...edgeOptions(), exclude: GREY_ROOM.coverExclude });
const mk = (boxes, spawn, edges) => createMovement({ boxes, spawn, coverEdges: edges || deriveCoverEdges(boxes, edgeOptions()) });
// Into the +z face of a box in the grey room: spawn 0.9 m in front, camera looking at -z.
function intoCover(x, z, boxes = ROOM, edges = EDGES) {
  const m = mk(boxes, [x, 0, z], edges);
  m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
  assert.equal(m.state, 'cover'); return m;
}
const wallA = () => intoCover(-7.5, 7.9);
const toEnd = (m, sign) => { let n = 0; const e = m.cover.edge; while ((sign > 0 ? m.cover.t < e.length : m.cover.t > 0) && n++ < 400) m.update(I({ moveX: sign }), DT); };

test('fireStance: move aiming -> aim, move firing -> hip, idle move -> null; sprint, roll, coverSlide, vault, coverSwap -> null', () => {
  const m = mk([FLOOR], [0, 0, 0]);
  step(m, I({ aim: true }), 3); assert.equal(fireStance(m), 'aim');
  step(m, I({ aim: true, fire: true }), 3); assert.equal(fireStance(m), 'aim');
  step(m, I({ fire: true }), 3); assert.equal(fireStance(m), 'hip');
  step(m, I(), 3); assert.equal(fireStance(m), null);
  step(m, I({ sprint: true, moveY: -1, fire: true }), 20); assert.equal(m.state, 'sprint'); assert.equal(fireStance(m), null);
  const r = mk([FLOOR], [0, 0, 0]); r.update(I({ tap: true, fire: true }), DT); assert.equal(r.state, 'roll'); assert.equal(fireStance(r), null);
  step(r, I({ fire: true }), 5); assert.equal(fireStance(r), null);
  const A = makeBox([-4, 0, 2], [-1, 1, 2.6], 'low'), B = makeBox([1.4, 0, 2.3], [5, 1, 2.9], 'low');
  const c = mk([FLOOR, A, B], [-3.7, 0, 0.4]);
  c.update(I({ moveY: -1, tap: true, camYaw: 0, fire: true }), DT); assert.equal(c.state, 'coverSlide'); assert.equal(fireStance(c), null);
  step(c, I({ camYaw: 0 }), 20); assert.equal(c.state, 'cover');
  while (c.cover.t < c.cover.edge.length - 1e-6) c.update(I({ camYaw: 0, moveX: -1 }), DT);
  c.update(I({ camYaw: 0, moveX: -1, tap: true, fire: true }), DT); assert.equal(c.state, 'coverSwap'); assert.equal(fireStance(c), null);
  step(c, I({ camYaw: 0, fire: true }), 3); assert.equal(c.state, 'coverSwap'); assert.equal(fireStance(c), null);
  step(c, I({ camYaw: 0 }), 40); assert.equal(c.state, 'cover');
  c.update(I({ camYaw: 0, moveY: -1, tap: true, fire: true }), DT); assert.equal(c.state, 'vault'); assert.equal(fireStance(c), null);
  assert.equal(c.firing, false);
});
test('fireStance in cover: pop 1 -> aim, blind 1 -> blind, pop 0.5 or blind 0.5 -> null, tucked -> null', () => {
  const m = wallA(); assert.equal(fireStance(m), null);
  step(m, I({ aim: true }), 3); assert.ok(m.cover.pop > 0 && m.cover.pop < 1); assert.equal(fireStance(m), null);
  step(m, I({ aim: true }), 10); assert.equal(fireStance(m), 'aim');
  step(m, I(), 12); assert.equal(fireStance(m), null);
  step(m, I({ fire: true }), 3); assert.ok(m.cover.blind > 0 && m.cover.blind < 1); assert.equal(fireStance(m), null);
  step(m, I({ fire: true }), 10); assert.equal(fireStance(m), 'blind');
  step(m, I({ fire: true, aim: true }), 20); assert.equal(fireStance(m), 'aim');
  step(m, I(), 20); assert.equal(fireStance(m), null);
});
test('muzzleOf aim/hip: 1.35 m up, 0.55 m ahead along camYaw, 0.22 m to the camera side', () => {
  const m = mk([FLOOR], [2, 0, -1]); const yaw = 0.7;
  for (const stance of ['aim', 'hip']) {
    const p = muzzleOf(m, stance, yaw);
    near(p[1], 1.35);
    const dx = p[0] - 2, dz = p[2] + 1;
    near(dx * Math.sin(yaw) + dz * Math.cos(yaw), 0.55);
    near(dx * -Math.cos(yaw) + dz * Math.sin(yaw), 0.22);
  }
  const out = [9, 9, 9]; assert.equal(muzzleOf(m, 'aim', yaw, C, out), out);
  const c = { ...C, muzzleUp: 1.5, muzzleForward: 0, muzzleRight: 0 };
  assert.deepEqual(muzzleOf(m, 'hip', yaw, c).map(v => +v.toFixed(9)), [2, 1.5, -1]);
});
test('muzzleOf blind at low cover: above the wall top by blindLift, past the front face, not inside any box', () => {
  const m = wallA(); step(m, I({ fire: true }), 10); assert.equal(m.cover.blind, 1);
  for (const side of [0, 1, -1]) {
    if (side) toEnd(m, side);
    step(m, I({ fire: true }), 10);
    const e = m.cover.edge, p = muzzleOf(m, 'blind', Math.PI);
    near(p[1], e.height + C.blindLift);
    const q = edgePoint(e, m.cover.t), face = [q[0] - e.normal[0] * S, q[1] - e.normal[1] * S];
    near((p[0] - face[0]) * -e.normal[0] + (p[2] - face[1]) * -e.normal[1], C.blindReach);
    assert.equal(pointInBoxes(SOLID, p, 0), false);
  }
});
// Coverstates: the tall wall's +z face, camera looking -z, so the stick's x is the world x.
const tallEnd = sign => { const m = intoCover(8, 7.9); toEnd(m, sign); return m; };
test('muzzleOf blind at a tall end: past the corner by blindReach, not inside the box; at both ends and at a pillar', () => {
  for (const sign of [-1, 1]) {
    const m = tallEnd(sign); step(m, I({ fire: true }), 12);
    assert.equal(m.cover.blind, 1); assert.equal(m.cover.blindEnd, sign); assert.equal(fireStance(m), 'blind');
    const p = muzzleOf(m, 'blind', Math.PI), box = SOLID.find(b => b.kind === 'tall' && b.min[0] === 6);
    near(p[1], C.muzzleUp); near(p[2], box.max[2], 1e-9);
    near(sign > 0 ? p[0] - box.max[0] : box.min[0] - p[0], C.blindReach, 1e-9);
    assert.equal(pointInBoxes(SOLID, p, 0), false);
  }
  const pm = intoCover(9, 5.5);
  assert.equal(pm.cover.edge.kind, 'tall'); assert.ok(pm.cover.edge.length < 0.5);
  for (const sign of [-1, 1]) {
    toEnd(pm, sign); step(pm, I({ fire: true }), 12);
    assert.equal(pm.cover.blind, 1);
    const p = muzzleOf(pm, 'blind', Math.PI); assert.equal(pointInBoxes(SOLID, p, 0), false);
    step(pm, I(), 12);
  }
});
test('muzzleOf is never inside a box: popped at both tall ends, at the pillar, at a closed end against the west wall', () => {
  for (const sign of [-1, 1]) {
    const m = tallEnd(sign); step(m, I({ aim: true }), 12); assert.equal(m.cover.pop, 1);
    for (const yaw of [Math.PI, Math.PI + sign * 0.6, Math.PI - sign * 0.6]) assert.equal(pointInBoxes(SOLID, muzzleOf(m, 'aim', yaw), 0), false, `yaw ${yaw}`);
  }
  const pm = intoCover(9, 5.5);
  for (const sign of [-1, 1]) {
    toEnd(pm, sign); step(pm, I({ aim: true }), 12); assert.equal(pm.cover.pop, 1);
    assert.equal(pointInBoxes(SOLID, muzzleOf(pm, 'aim', Math.PI), 0), false);
    step(pm, I(), 12);
  }
  // The low box against the west wall, at its closed (wall) end.
  const w = intoCover(-10.5, 0.8); const e = w.cover.edge;
  assert.ok(!e.openA || !e.openB);
  toEnd(w, e.openA ? 1 : -1);
  for (const k of [{ aim: true }, { fire: true }]) {
    step(w, I(k), 12);
    for (const yaw of [Math.PI, Math.PI / 2, -Math.PI / 2]) {
      const stance = k.aim ? 'aim' : 'blind';
      assert.equal(pointInBoxes(SOLID, muzzleOf(w, stance, yaw), 0), false, `${stance} ${yaw}`);
    }
    step(w, I(), 12);
  }
});
test('blind fire over low cover clears the own wall for a standing target 3 m and 10 m away', () => {
  const m = wallA(); step(m, I({ fire: true }), 10); assert.equal(m.cover.blind, 1);
  const muzzle = muzzleOf(m, 'blind', Math.PI);
  for (const dist of [3, 5, 10]) {
    const z = m.pos[2] - dist;
    for (const [dy, kinds] of [[0.9, ['body']], [1.1, ['body']], [1.49, ['head']]]) {
      const dummy = createDummy({ id: 'd', pos: [-7.5, 0, z] });
      const lens = [m.pos[0], 1.0, m.pos[2] + 1.9];
      const view = norm([-7.5 - lens[0], dy - lens[1], z - lens[2]]);
      const r = resolveShot({ lens, view, muzzle, spreadDeg: 0, range: 60, boxes: ROOM, targets: [dummy], ignoreBox: m.cover.edge.boxIndex, rand: rng(2) });
      assert.ok(kinds.includes(r.hit.kind), `${dist} m, y ${dy}: ${r.hit.kind} (box ${r.hit.boxIndex})`);
    }
  }
});

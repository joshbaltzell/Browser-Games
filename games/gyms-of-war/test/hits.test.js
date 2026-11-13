import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rayBox, raySphere, rayCapsule, castRay, spreadDir, resolveShot } from '../src/combat/hits.js';
import { createDummy } from '../src/combat/targets.js';
import { createMovement } from '../src/actors/movement.js';
import { muzzleOf } from '../src/combat/stance.js';
import { GREY_ROOM } from '../src/world/greyRoom.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { makeBox } from '../src/world/collide.js';
import { rng } from '../src/core/random.js';

const near = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const norm = v => { const l = Math.hypot(...v); return v.map(x => x / l); };
const BOX = makeBox([-1, 0, 4], [1, 2, 5]);

test('rayBox: hits the near face at the right t, misses beside it, respects tMax, and t = 0 from inside', () => {
  near(rayBox([0, 1, 0], [0, 0, 1], BOX), 4);
  assert.equal(rayBox([2, 1, 0], [0, 0, 1], BOX), Infinity);
  assert.equal(rayBox([0, 1, 0], [0, 0, 1], BOX, 3.9), Infinity);
  near(rayBox([0, 1, 0], [0, 0, 1], BOX, 4), 4);
  assert.equal(rayBox([0, 1, 4.5], [0, 0, 1], BOX), 0);
  assert.equal(rayBox([0, 1, 6], [0, 0, 1], BOX), Infinity, 'behind');
  near(rayBox([0, 5, 0], norm([0, -1, 1]), BOX), 4 * Math.SQRT2, 1e-9);   // slanted, front face at y 1
});
test('raySphere and rayCapsule: front hit distances; a ray past the side misses; the capsule end caps are round', () => {
  near(raySphere([0, 0, 0], [0, 0, 1], [0, 0, 5], 1), 4);
  assert.equal(raySphere([0, 1.1, 0], [0, 0, 1], [0, 0, 5], 1), Infinity);
  assert.equal(raySphere([0, 0, 0], [0, 0, -1], [0, 0, 5], 1), Infinity);
  const a = [0, 0.1, 5], b = [0, 1.19, 5], r = 0.262;
  near(rayCapsule([0, 0.6, 0], [0, 0, 1], a, b, r), 5 - r);
  assert.equal(rayCapsule([0.3, 0.6, 0], [0, 0, 1], a, b, r), Infinity);
  near(rayCapsule([0, 1.3, 0], [0, 0, 1], a, b, r), 5 - Math.sqrt(r * r - 0.11 * 0.11));
  assert.equal(rayCapsule([0, 1.5, 0], [0, 0, 1], a, b, r), Infinity, 'above the top cap');
  near(rayCapsule([0, 0.6, 5], [0, 0, 1], a, b, r), 0, 0);
  near(rayCapsule([0, 3, 5], [0, -1, 0], a, b, r), 3 - 1.19 - r, 1e-9);
});
test('castRay: the nearest of box, head and body wins; dead targets are skipped; ignoreBox skips that box', () => {
  const d = createDummy({ id: 'a', pos: [0, 0, 8] });
  const boxes = [makeBox([-5, -1, -5], [5, 0, 20], 'floor'), BOX];
  let h = castRay([0, 1.0, 0], [0, 0, 1], 50, boxes, [d]);
  assert.equal(h.kind, 'world'); assert.equal(h.boxIndex, 1); near(h.t, 4); near(h.point[2], 4);
  h = castRay([0, 1.0, 0], [0, 0, 1], 50, boxes, [d], { ignoreBox: 1 });
  assert.equal(h.kind, 'body'); assert.equal(h.target, d); near(h.t, 8 - 0.262 - 0.05);   // the shirt radius plus combat.hitPad
  d.alive = false;
  h = castRay([0, 1.0, 0], [0, 0, 1], 50, boxes, [d], { ignoreBox: 1 });
  assert.equal(h.kind, 'none'); assert.equal(h.t, Infinity); assert.equal(h.target, null);
  d.alive = true;
  h = castRay([0, 1.0, 0], [0, 0, 1], 5, boxes, [d], { ignoreBox: 1 });
  assert.equal(h.kind, 'none', 'out of range');
  // The floor counts.
  h = castRay([0, 1, 0], norm([0, -1, 0.0001]), 50, boxes, []);
  assert.equal(h.kind, 'world'); assert.equal(h.boxIndex, 0);
});
test('a level shot at y 1.49 through a dummy is a head hit; at y 1.0 a body hit; at y 1.3 the body', () => {
  const d = createDummy({ id: 'a', pos: [0, 0, 8] });
  const at = y => castRay([0, y, 0], [0, 0, 1], 50, [], [d]);
  assert.equal(at(1.49).kind, 'head'); assert.equal(at(1.0).kind, 'body'); assert.equal(at(1.3).kind, 'body');
  assert.equal(at(1.9).kind, 'none'); assert.equal(at(-0.3).kind, 'none');
  assert.equal(at(1.49).target, d);
});
test('spreadDir: deg 0 returns dir; 2000 samples all lie within deg / 2 and fill it (some beyond 0.8 * deg / 2)', () => {
  const dir = norm([0.3, 0.5, 0.8]);
  assert.deepEqual(spreadDir(dir, 0, () => 0.5), dir);
  const rand = rng(11), deg = 8, half = deg / 2; let beyond = 0, max = 0;
  for (let i = 0; i < 2000; i++) {
    const s = spreadDir(dir, deg, rand);
    near(Math.hypot(...s), 1, 1e-9);
    const ang = Math.acos(Math.min(1, s[0] * dir[0] + s[1] * dir[1] + s[2] * dir[2])) * 180 / Math.PI;
    assert.ok(ang <= half + 1e-6, `${ang}`);
    if (ang > 0.8 * half) beyond++; max = Math.max(max, ang);
  }
  assert.ok(beyond > 100 && max > 0.95 * half, `beyond ${beyond} max ${max}`);
  // Vertical directions are fine too.
  const up = spreadDir([0, 1, 0], 5, rng(3)); near(Math.hypot(...up), 1, 1e-9);
});

// A mover tucked into the +z face of swap wall A, popped, camera 1.4 m behind its head looking at a dummy's chest.
const EDGES = deriveCoverEdges(GREY_ROOM.boxes, { ...edgeOptions(), exclude: GREY_ROOM.coverExclude });
const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: Math.PI, aim: false, sprint: false, tap: false, ...o });
function atWallA(intent) {
  const m = createMovement({ boxes: GREY_ROOM.boxes, spawn: [-7.5, 0, 7.9], coverEdges: EDGES });
  m.update(I({ moveY: -1, tap: true }), 1 / 60);
  for (let i = 0; i < 20; i++) m.update(I(), 1 / 60);
  assert.equal(m.state, 'cover');
  for (let i = 0; i < 12; i++) m.update(intent, 1 / 60);
  return m;
}
const NONFLOOR_ALL = GREY_ROOM.boxes;
function cameraAt(m, chest, back = 1.4, up = 1.5) {
  const lens = [m.pos[0], m.pos[1] + up, m.pos[2] + back];
  return { lens, view: norm(chest.map((v, i) => v - lens[i])) };
}

test('resolveShot: popped over low cover, a shot at the open dummy hits it, never the own wall', () => {
  const m = atWallA(I({ aim: true })); assert.equal(m.cover.pop, 1);
  const open = createDummy(GREY_ROOM.dummies.find(d => d.id === 'open'));
  const { lens, view } = cameraAt(m, [-7.5, 0.9, -1]);
  const muzzle = muzzleOf(m, 'aim', Math.PI);
  for (const dy of [0.7, 0.9, 1.1]) {
    const c = cameraAt(m, [-7.5, dy, -1]);
    const r = resolveShot({ lens: c.lens, view: c.view, muzzle, spreadDeg: 0, range: 60, boxes: NONFLOOR_ALL, targets: [open], ignoreBox: m.cover.edge.boxIndex, rand: rng(1) });
    assert.equal(r.hit.kind, 'body', `chest y ${dy}`); assert.equal(r.hit.target.id, 'open');
  }
  const r = resolveShot({ lens, view, muzzle, spreadDeg: 0, range: 60, boxes: NONFLOOR_ALL, targets: [open], ignoreBox: m.cover.edge.boxIndex, rand: rng(1) });
  assert.equal(r.from, muzzle); near(Math.hypot(...r.dir), 1, 1e-9);
});
test('resolveShot: the camera ray ignores the player\'s cover box; the muzzle ray does not', () => {
  const m = atWallA(I({ aim: true }));
  const own = m.cover.edge.boxIndex;
  const open = createDummy(GREY_ROOM.dummies.find(d => d.id === 'open'));
  // A low lens behind the wall, level with the chest: only the ignore lets the camera see the dummy through the wall.
  const lens = [-7.5, 0.9, m.pos[2] + 1.4], view = [0, 0, -1];
  const hide = { range: 60, boxes: NONFLOOR_ALL, targets: [open], spreadDeg: 0, rand: rng(1) };
  assert.equal(castRay(lens, view, 60, NONFLOOR_ALL, [open]).kind, 'world');
  assert.equal(castRay(lens, view, 60, NONFLOOR_ALL, [open], { ignoreBox: own }).kind, 'body');
  // A muzzle held behind the wall face (a deliberately bad one) fires into the own box: the muzzle ray does not ignore it.
  const low = [-7.5, 0.9, 7.3];
  const r = resolveShot({ ...hide, lens, view, muzzle: low, ignoreBox: own });
  assert.equal(r.hit.kind, 'world'); assert.equal(r.hit.boxIndex, own);
});

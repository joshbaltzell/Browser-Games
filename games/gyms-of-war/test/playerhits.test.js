import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createMovement } from '../src/actors/movement.js';
import { playerTarget, shotAtPlayer } from '../src/combat/playerHits.js';
import { HIT_SHAPES } from '../src/combat/targets.js';
import { castRay } from '../src/combat/hits.js';
import { makeBox } from '../src/world/collide.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { TUNING } from '../src/tuning.js';
import { rng } from '../src/core/random.js';

const DT = 1 / 60, C = TUNING.combat;
const near = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const LOW = makeBox([-2, 0, 2], [2, 1, 2.6], 'low');
const A = makeBox([-4, 0, 2], [-1, 1, 2.6], 'low'), B = makeBox([1.4, 0, 2.3], [5, 1, 2.9], 'low');
const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false, ...o });
const step = (m, intent, n, each) => { for (let i = 0; i < n; i++) { m.update(intent, DT); if (each) each(m); } };
function mover(boxes, spawn) {
  return createMovement({ boxes, spawn, coverEdges: deriveCoverEdges(boxes, edgeOptions()) });
}
const inLow = () => { const m = mover([FLOOR, LOW], [0, 0, 0.4]); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20); assert.equal(m.state, 'cover'); return m; };
const level = (y, z0, z1, x = 0) => { const d = z1 > z0 ? 1 : -1; return { from: [x, y, z0], dir: [0, 0, d] }; };
const shoot = (m, from, dir, boxes = [], range = 80) => shotAtPlayer(from, dir, range, boxes, m, C);

// Seeded rays from beyond the wall toward the player area (y 0.2 to 1.8, spread 10 degrees).
function frontRays(m, n, seed) {
  const r = rng(seed), out = [];
  for (let i = 0; i < n; i++) {
    const from = [m.pos[0] + (r() - 0.5) * 8, 0.2 + r() * 1.6, m.pos[2] + 2 + r() * 8];
    const to = [m.pos[0] + (r() - 0.5) * 0.6, 0.2 + r() * 1.6, m.pos[2]];
    let d = [to[0] - from[0], to[1] - from[1], to[2] - from[2]]; const l = Math.hypot(...d); d = d.map(v => v / l);
    const sp = 10 * Math.PI / 180 * (r() - 0.5), ph = r() * Math.PI * 2;
    d = [d[0] + Math.cos(ph) * Math.sin(sp), d[1] + Math.sin(ph) * Math.sin(sp), d[2]];
    const l2 = Math.hypot(...d); out.push({ from, dir: d.map(v => v / l2) });
  }
  return out;
}

test('standing in the open: a level ray at y 1.49 is head, y 1.0 body, y 2.0 none', () => {
  const m = mover([FLOOR], [0, 0, 0]);
  const { cy } = HIT_SHAPES.head; near(cy, 1.49, 0.01);
  for (const dirz of [1, -1]) {
    assert.equal(shoot(m, [0, cy, -5 * dirz], [0, 0, dirz]).kind, 'head');
    assert.equal(shoot(m, [0, 1.0, -5 * dirz], [0, 0, dirz]).kind, 'body');
    assert.equal(shoot(m, [0, 2.0, -5 * dirz], [0, 0, dirz]).kind, 'none');
  }
  assert.equal(shoot(m, [0, 1.0, -5], [0, 0, 1]).target, playerTarget(m, undefined) && shoot(m, [0, 1.0, -5], [0, 0, 1]).target);
});
test('tucked in low cover: 500 seeded rays from beyond the wall toward the player never hit the player', () => {
  const m = inLow();
  for (const { from, dir } of frontRays(m, 500, 7)) {
    const r = shoot(m, from, dir);
    assert.ok(r.kind !== 'head' && r.kind !== 'body', `${from} ${dir}`);
  }
  // and the player really is a target from the flank: the same rays aimed through the open end
  assert.equal(shoot(m, [m.pos[0] - 5, 0.3, m.pos[2]], [1, 0, 0]).kind, 'body');
});
test('the same while sliding in, swapping, and blind firing (exposed false)', () => {
  const seen = new Set();
  const check = (m, seed) => {
    seen.add(m.state);
    assert.equal(m.cover ? m.cover.exposed : false, false);
    for (const { from, dir } of frontRays(m, 20, seed)) { const r = shoot(m, from, dir); assert.ok(r.kind !== 'head' && r.kind !== 'body', `${m.state} ${from} ${dir}`); }
  };
  let m = mover([FLOOR, LOW], [0, 0, 0.4]); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 15, x => check(x, x.stateTime * 1000 | 0));
  // blind: fire held, not aimed
  step(m, I({ fire: true }), 20, x => { assert.ok(x.cover.blind > 0); check(x, 3); });
  assert.equal(m.cover.blind, 1); assert.equal(m.cover.exposed, false);
  // swap
  m = mover([FLOOR, A, B], [-3.7, 0, 0.4]); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
  let n = 0; while (m.cover.t < m.cover.edge.length - 1e-6 && n++ < 300) m.update(I({ moveX: -1 }), DT);
  m.update(I({ moveX: -1, tap: true }), DT); assert.equal(m.state, 'coverSwap');
  step(m, I(), 40, x => check(x, 11 + x.entries));
  for (const s of ['coverSlide', 'cover', 'coverSwap']) assert.ok(seen.has(s), s);
});
test('popped over low cover: front rays hit only the head sphere or the shoulder capsule; a level front ray at y 0.5 never hits', () => {
  const m = inLow(); step(m, I({ aim: true }), 12); assert.equal(m.cover.exposed, true);
  const head = HIT_SHAPES.head, top = HIT_SHAPES.body.by, lo = top - C.shoulderDrop, rr = HIT_SHAPES.body.r;
  near(lo, 0.94, 0.01); near(rr, 0.262, 0.001);
  assert.equal(shoot(m, ...Object.values(level(0.5, 8, m.pos[2]))).kind, 'none');
  assert.equal(shoot(m, [0, 0.5, 8], [0, 0, -1]).kind, 'none');
  assert.equal(shoot(m, [0, 0.2, 8], [0, 0, -1]).kind, 'none');
  assert.equal(shoot(m, [0, 1.0, 8], [0, 0, -1]).kind, 'body');
  assert.equal(shoot(m, [0, head.cy, 8], [0, 0, -1]).kind, 'head');
  assert.equal(shoot(m, [0, 0.6, 8], [0, 0, -1]).kind, 'none');   // below the shoulder capsule's lower cap (0.94 - 0.262)
  for (const { from, dir } of frontRays(m, 500, 21)) {
    const r = shotAtPlayer(from, dir, 80, [], m, C);
    if (r.kind === 'none') continue;
    assert.ok(r.kind === 'head' || r.kind === 'body');
    const p = r.point;
    if (r.kind === 'body') assert.ok(p[1] >= lo - rr - 1e-6 && p[1] <= top + rr + 1e-6, `body hit at y ${p[1]}`);
    else assert.ok(Math.hypot(p[0] - head.cy * 0 - m.pos[0], p[1] - head.cy, p[2] - m.pos[2]) <= head.r + 1e-6);
  }
  // a shot from behind a popped player still reaches the lower body (crouch no longer applies)
  assert.equal(shoot(m, [0, 0.5, -2], [0, 0, 1]).kind, 'body');
});
test('popped front rays can really hit: some of the 500 land', () => {
  const m = inLow(); step(m, I({ aim: true }), 12);
  const hits = frontRays(m, 500, 21).filter(({ from, dir }) => shotAtPlayer(from, dir, 80, [], m, C).kind !== 'none');
  assert.ok(hits.length > 10, `${hits.length}`);
});
test('from the flank (dir . normal <= 0) a tucked low-cover player is hit on the crouch body at y 0.3', () => {
  const m = inLow();
  const t = playerTarget(m, undefined);
  near(t.shapes.head.c[1], C.crouchHead); near(t.shapes.body.a[1], 0.1); near(t.shapes.body.b[1], C.crouchBodyTop);
  assert.equal(shoot(m, [m.pos[0] - 5, 0.3, m.pos[2]], [1, 0, 0]).kind, 'body');
  assert.equal(shoot(m, [m.pos[0] + 5, 0.3, m.pos[2]], [-1, 0, 0]).kind, 'body');
  assert.equal(shoot(m, [m.pos[0] - 5, C.crouchHead, m.pos[2]], [1, 0, 0]).kind, 'head');
  assert.equal(shoot(m, [m.pos[0] - 5, 1.2, m.pos[2]], [1, 0, 0]).kind, 'none');   // crouched: nothing at standing height
  // from behind (the open side, -z toward +z) the crouch body is hit too
  assert.equal(shoot(m, [m.pos[0], 0.3, m.pos[2] - 5], [0, 0, 1]).kind, 'body');
  // a flank shot that is exactly sideways (dot 0) is not a front shot
  assert.equal(shoot(m, [m.pos[0] - 5, 0.3, m.pos[2]], [1, 0, 0]).kind, 'body');
});
test('boxes still block: a wall between the shooter and a flank-exposed player stops the shot', () => {
  const m = inLow();
  const wall = makeBox([m.pos[0] - 3, 0, m.pos[2] - 1], [m.pos[0] - 2.5, 3, m.pos[2] + 1], 'wall');
  assert.equal(shoot(m, [m.pos[0] - 5, 0.3, m.pos[2]], [1, 0, 0], [wall]).kind, 'world');
});
test('tall cover tucked: a front shot never hits, a flank shot hits the standing body', () => {
  const T = makeBox([-2, 0, 2], [2, 2.2, 2.6], 'tall');
  const m = mover([FLOOR, T], [0, 0, 0.4]); m.update(I({ moveY: -1, tap: true }), DT); step(m, I(), 20);
  assert.equal(m.state, 'cover');
  for (const { from, dir } of frontRays(m, 200, 5)) assert.ok(!['head', 'body'].includes(shoot(m, from, dir).kind));
  assert.equal(shoot(m, [m.pos[0] - 5, 1.0, m.pos[2]], [1, 0, 0]).kind, 'body');
  assert.equal(shoot(m, [m.pos[0] - 5, 1.4, m.pos[2]], [1, 0, 0]).kind, 'head');
});
test('a downed or moving player is a standing target; vault is not cover', () => {
  const m = mover([FLOOR], [0, 0, 0]); m.down();
  near(playerTarget(m, undefined).shapes.head.c[1], HIT_SHAPES.head.cy);
  assert.equal(shoot(m, [0, 1.0, -5], [0, 0, 1]).kind, 'body');
});
test('playerTarget reuses out and allocates nothing per call', () => {
  const m = inLow(); const out = playerTarget(m, undefined);
  const parts = [out, out.shapes, out.shapes.head, out.shapes.head.c, out.shapes.body, out.shapes.body.a, out.shapes.body.b];
  for (let i = 0; i < 5; i++) {
    assert.equal(playerTarget(m, out), out);
    assert.deepEqual([out, out.shapes, out.shapes.head, out.shapes.head.c, out.shapes.body, out.shapes.body.a, out.shapes.body.b], parts);
    step(m, I({ aim: i % 2 === 0 }), 12);
  }
  // swapping between crouch and standing shapes changes values, not objects
  step(m, I(), 12); playerTarget(m, out); near(out.shapes.head.c[1], C.crouchHead);
  step(m, I({ aim: true }), 12); playerTarget(m, out); near(out.shapes.head.c[1], HIT_SHAPES.head.cy);
  // shotAtPlayer's own target list is reused too: repeated shots leave castRay results independent
  const a = shoot(m, [0, 1.0, 8], [0, 0, -1]), b = shoot(m, [0, 1.0, 8], [0, 0, -1]);
  assert.deepEqual(a.point, b.point);
  assert.equal(castRay([0, 1, -5], [0, 0, 1], 80, [], [out]).kind, 'body');
});

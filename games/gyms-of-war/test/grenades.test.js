import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TUNING } from '../src/tuning.js';
import { throwVelocity, throwOrigin, stepBall, predictArc, createGrenades, blastDamage, solveThrowPitch, createKettlebellBag } from '../src/combat/grenades.js';
import { createMovement } from '../src/actors/movement.js';
import { KIOSK_ROW } from '../src/world/kioskRow.js';
import { makeBox, pointInBoxes } from '../src/world/collide.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';

const DT = 1 / 60, G = TUNING.grenade;
const near = (a, b, e, n = '') => assert.ok(Math.abs(a - b) <= e, `${n} ${a} vs ${b}`);
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const ball = (pos, vel) => ({ pos: [...pos], vel: [...vel], prevPos: [...pos], resting: false, fuse: 99 });
const arcOut = () => Array.from({ length: 64 }, () => [0, 0, 0]);
const ROW = KIOSK_ROW.boxes;

test('throwVelocity: yaw 0 pitch 0 is [0, 2.2574, 12.8025] (13 m/s at 10 deg); pitch 1.2 clamps the elevation to 70 deg', () => {
  const v = throwVelocity(0, 0);
  near(v[0], 0, 1e-12); near(v[1], 2.2574, 1e-3); near(v[2], 12.8025, 1e-3);
  const hi = throwVelocity(0, 1.2); near(hi[1], 13 * Math.sin(70 * Math.PI / 180), 1e-9); near(hi[2], 13 * Math.cos(70 * Math.PI / 180), 1e-9);
  const lo = throwVelocity(0, -1.1); near(lo[1], -13 * Math.sin(30 * Math.PI / 180), 1e-9);
  const y = throwVelocity(Math.PI / 2, 0); near(y[0], 12.8025, 1e-3); near(y[2], 0, 1e-3);
  const out = [0, 0, 0]; assert.equal(throwVelocity(0, 0, G, out), out);
});

test('predictArc points equal a createGrenades flight step for step (|d| < 1e-9) for three throws, one bouncing off K3', () => {
  const g = { ...G, fuse: 9 };
  const throws = [
    [[0, 1.6, -13], throwVelocity(0, 0.2, g)],
    [[-6, 1.6, -5], throwVelocity(1.1, 0.5, g)],
    [[0, 1.6, -8], throwVelocity(0, -0.3, g)],     // down into K3's south face
  ];
  let bounced = false;
  for (const [from, vel] of throws) {
    const out = arcOut(), r = predictArc(from, vel, ROW, g, out);
    assert.ok(r.count > 10 && r.count <= 64);
    const gr = createGrenades(g), b = gr.throw(from, vel);
    for (let i = 0; i < r.count; i++) {
      for (let k = 0; k < 3; k++) assert.ok(Math.abs(out[i][k] - b.pos[k]) < 1e-9, `point ${i} axis ${k}`);
      if (i < r.count - 1) for (let k = 0; k < 2; k++) { if (gr.step(DT, ROW).some(e => e.type === 'clank')) bounced = true; }
    }
  }
  assert.ok(bounced, 'at least one throw clanked');
});

test('predictArc: count follows arcTime (2 s -> 61 points), land is the first up-facing touch, a throw into a wall lands on the floor below', () => {
  const out = arcOut();
  const r = predictArc([0, 1.6, -13], throwVelocity(0, 0.4), [FLOOR], G, out);
  assert.ok(r.land && Math.abs(r.land[1]) < 1e-3, `land ${r.land}`);
  assert.ok(r.count < 61 || r.land);
  const open = predictArc([0, 50, 0], [0, 0, 0], [], G, out);   // nothing to hit: all samples, no land
  assert.equal(open.count, 61); assert.equal(open.land, null);
  const k3 = predictArc([0, 1.6, -8], throwVelocity(0, -0.3), ROW, G, out);
  assert.ok(k3.land && k3.land[1] < 0.01, 'bounces off the K3 face and lands on the floor, not its top');
});

test('no tunnelling: 200 seeded throws at throwSpeed 30 across Check-in Turnstiles never put the centre inside a box (pointInBoxes pad 0) and every ball ends at rest or explodes', () => {
  const g = { ...G, throwSpeed: 30 };
  let seed = 12345; const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
  let rested = 0, thrown = 0;
  while (thrown < 200) {
    const from = [-6.5 + 13 * rnd(), 0.8 + 1.6 * rnd(), -14 + 28 * rnd()];
    if (pointInBoxes(ROW, from, g.ballRadius)) continue;
    thrown++;
    const vel = throwVelocity(rnd() * 6.283, -1.1 + 2.3 * rnd(), g);
    const b = ball(from, vel);
    for (let i = 0; i < 60 * 14 && !b.resting; i++) {
      stepBall(b, DT, ROW, g);
      assert.ok(!pointInBoxes(ROW, b.pos, 0), `throw ${thrown} step ${i}: centre ${b.pos}`);
      if (b.pos[1] < -2) break;
    }
    if (b.resting) {
      rested++;
      assert.ok(pointInBoxes(ROW, [b.pos[0], b.pos[1] - g.ballRadius - 1e-3, b.pos[2]], 0), 'a resting ball sits on a floor or box top');
    } else assert.ok(b.pos[1] < -2, `throw ${thrown} never settled: ${b.pos}`);   // over the 4 m wall and off the arena: the fuse takes it
    // The live flight explodes it either way.
    const gr = createGrenades(g); gr.throw(from, vel);
    let boom = 0; for (let i = 0; i < 120; i++) boom += gr.step(DT, ROW).filter(e => e.type === 'explode').length;
    assert.equal(boom, 1); assert.equal(gr.live.length, 0);
  }
  assert.ok(rested > 100, `${rested} rested`);
});

test('a ball dropped from 2 m onto the floor rebounds to 0.245 +- 0.03 m and comes to rest', () => {
  const b = ball([0, 2 + G.ballRadius, 0], [0, 0, 0]);
  let hitAt = -1, peak = 0, bounced = false;
  for (let i = 0; i < 600 && !b.resting; i++) {
    const r = stepBall(b, DT, [FLOOR], G);
    if (r === 'clank' && hitAt < 0) { hitAt = i; bounced = true; }
    if (bounced && i > hitAt) peak = Math.max(peak, b.pos[1] - G.ballRadius);
  }
  near(peak, 0.245, 0.03, 'rebound height');
  assert.ok(b.resting); near(b.pos[1], G.ballRadius, 1e-4);
  assert.equal(b.vel[0] + b.vel[1] + b.vel[2], 0);
  assert.equal(stepBall(b, DT, [FLOOR], G), null, 'a resting ball stays put');
});

test('a bounce keeps friction along the face and restitution along the normal (wall hit at 10 m/s)', () => {
  const wall = makeBox([-5, 0, 3], [5, 5, 4], 'wall');
  const g = { ...G, gravity: 0.5 };
  const b = ball([0, 3, 0], [4, 0, 10]);
  for (let i = 0; i < 60 && b.vel[2] > 0; i++) stepBall(b, DT, [FLOOR, wall], g);
  near(b.vel[2], -3.5, 0.2, 'z bounces at 0.35'); near(b.vel[0], 2.4, 0.1, 'x keeps 0.6');
});

test('fuse: one explode event 1.6 s after the throw (+- one 1/60 step) at the ball position; reset clears live balls', () => {
  const gr = createGrenades(), b = gr.throw([0, 1.6, -13], throwVelocity(0, 0));
  let steps = 0, ev = [];
  while (!ev.some(e => e.type === 'explode') && steps < 300) { steps++; ev = gr.step(DT, ROW); }
  assert.ok(Math.abs(steps * DT - 1.6) <= DT + 1e-9, `${steps} steps`);
  assert.equal(ev.filter(e => e.type === 'explode').length, 1);
  assert.deepEqual(ev.find(e => e.type === 'explode').pos, [b.pos[0], b.pos[1], b.pos[2]]);
  assert.equal(gr.live.length, 0);
  gr.throw([0, 1.6, 0], [1, 1, 1]); gr.throw([0, 1.6, 0], [1, 1, 1]); assert.equal(gr.live.length, 2); gr.reset(); assert.equal(gr.live.length, 0);
  const rest = gr.throw([0, G.ballRadius, 0], [0, 0, 0]); gr.step(DT, [FLOOR]); assert.equal(rest.fuse < G.fuse, true);
});

test('fuse reads the panel at throw time', () => {
  const gr = createGrenades(); const saved = TUNING.grenade.fuse;
  try { TUNING.grenade.fuse = 0.5; gr.throw([0, 3, 0], [0, 0, 0]); let n = 0; while (!gr.step(DT, [FLOOR]).some(e => e.type === 'explode')) n++; assert.ok(Math.abs((n + 1) * DT - 0.5) <= DT + 1e-9); } finally { TUNING.grenade.fuse = saved; }
});

test('blastDamage: 200 at 0 and 1.2 m, 80 at 2 m, 40 at 3 m, 0 at 4 m and beyond', () => {
  near(blastDamage(0), 200, 1e-9); near(blastDamage(1.2), 200, 1e-9); near(blastDamage(2), 80, 1e-9); near(blastDamage(3), 40, 1e-9);
  assert.equal(blastDamage(4), 0); assert.equal(blastDamage(9), 0); assert.equal(blastDamage(NaN), 0);
});

const coverAtK1 = () => {
  const m = createMovement({ boxes: ROW, spawn: [-4, 0, -10.4], coverEdges: deriveCoverEdges(ROW, { ...edgeOptions(), exclude: KIOSK_ROW.coverExclude }) });
  const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false, ...o });
  m.update(I({ moveY: -1, tap: true }), DT); for (let i = 0; i < 20; i++) m.update(I(), DT);
  assert.equal(m.state, 'cover'); return m;
};

test('throwOrigin tucked behind K1 (low): y >= 1.15 and on the far side of the wall face; a throw at pitch 0 clears K1', () => {
  const m = coverAtK1();
  const o = throwOrigin(m, 0);
  assert.ok(o[1] >= 1.15 - 1e-9, `y ${o[1]}`); assert.ok(o[2] > -9.5, `z ${o[2]} is past the face at -9.5`);
  const b = ball(o, throwVelocity(0, 0)); let clanked = false;
  for (let i = 0; i < 40; i++) { if (stepBall(b, DT, ROW, G) === 'clank') clanked = true; if (b.pos[2] > -8.4) break; }
  assert.ok(!clanked && b.pos[2] > -8.4 && b.pos[1] > 1.0, `${b.pos}`);
  assert.equal(throwOrigin(m, 0, TUNING.combat, o), o);
});

test('throwOrigin in the open: 1.6 up, 0.2 to the camera right and 0.3 along it; looking into a wall pulls it back out of the box', () => {
  const m = createMovement({ boxes: [FLOOR], spawn: [1, 0, 2] });
  const o = throwOrigin(m, 0); near(o[0], 1 - 0.2, 1e-12); near(o[1], 1.6, 1e-12); near(o[2], 2.3, 1e-12);
  const wall = makeBox([-5, 0, 2.1], [5, 3, 3], 'wall');
  const w = createMovement({ boxes: [FLOOR, wall], spawn: [0, 0, 1.8] });
  assert.ok(!pointInBoxes([FLOOR, wall], throwOrigin(w, 0), 0));
});

test('solveThrowPitch hits a point 10 m ahead within 0.3 m, and returns null for 60 m', () => {
  const from = [0, 1.6, 0];
  for (const to of [[0, 1.0, 10], [0, 0.2, 8], [0, 3, 12]]) {
    const p = solveThrowPitch(from, to, 0);
    assert.notEqual(p, null);
    const b = ball(from, throwVelocity(0, p)); let best = Infinity;
    for (let i = 0; i < 200 && b.pos[2] < to[2] + 2; i++) { stepBall(b, DT, [], G); best = Math.min(best, Math.hypot(b.pos[0] - to[0], b.pos[1] - to[1], b.pos[2] - to[2])); }
    assert.ok(best < 0.3, `${to} missed by ${best}`);
  }
  assert.equal(solveThrowPitch(from, [0, 1.0, 60], 0), null);
  assert.equal(solveThrowPitch(from, [0, 1.0, -10], 0), null, 'behind');
  assert.equal(solveThrowPitch(from, [5, 1.0, 10], 0), null, 'off the heading');
  assert.notEqual(solveThrowPitch(from, [5, 1.0, 0], Math.PI / 2), null, 'yaw aims along x');
});

test('bag: starts 4, take() four times then false, refill() back to carry; panel carry 2 caps refill at 2', () => {
  const bag = createKettlebellBag(); assert.equal(bag.count, 4);
  for (let i = 0; i < 4; i++) assert.equal(bag.take(), true);
  assert.equal(bag.take(), false); assert.equal(bag.count, 0);
  bag.refill(); assert.equal(bag.count, 4);
  const saved = TUNING.grenade.carry;
  try { TUNING.grenade.carry = 2; bag.take(); bag.take(); bag.take(); bag.refill(); assert.equal(bag.count, 2); bag.reset(); assert.equal(bag.count, 2, 'start 4 caps at carry'); }
  finally { TUNING.grenade.carry = saved; }
  bag.reset(); assert.equal(bag.count, 4);
});

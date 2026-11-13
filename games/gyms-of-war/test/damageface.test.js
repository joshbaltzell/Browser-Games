import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TUNING } from '../src/tuning.js';
import { hitAngle, damageFaceModel } from '../src/ui/damageFace.js';
import { rightOf } from '../src/actors/movement.js';

const near = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const FB = TUNING.feedback;
const M = (o = {}) => damageFaceModel({ hp: 100, max: 100, downed: false, downT: 0, hits: [], now: 10, ...o });

test('hitAngle: shooter ahead 0, at rightOf(camYaw) +pi/2, behind pi, for camYaw 0 and 2', () => {
  const p = [3, 0, -2];
  for (const yaw of [0, 2]) {
    const f = [Math.sin(yaw), 0, Math.cos(yaw)], r = rightOf(yaw);
    const at = (v, k = 7) => [p[0] + v[0] * k, 0, p[2] + v[2] * k];
    near(hitAngle(yaw, p, at(f)), 0);
    near(hitAngle(yaw, p, at(r)), Math.PI / 2);
    near(hitAngle(yaw, p, at([-r[0], 0, -r[2]])), -Math.PI / 2);
    near(hitAngle(yaw, p, at([-f[0], 0, -f[2]])), Math.PI);
  }
  const a = hitAngle(0, p, [p[0] - 1e-17, 0, p[2] - 5]); assert.ok(a > 0 && a <= Math.PI);
  assert.equal(hitAngle(0, p, p), 0);
});
test('damageFaceModel: full health is invisible; hp 50 gives opacity 0.425, frown 0.5, edges 0.275', () => {
  let m = M();
  assert.deepEqual(m.face, { opacity: 0, frown: 0, fill: 0 }); assert.deepEqual(m.edges, { top: 0, right: 0, bottom: 0, left: 0 });
  assert.deepEqual(m.downed, { show: false, seconds: 0 });
  m = M({ hp: 50 });
  near(m.face.opacity, 0.425); near(m.face.frown, 0.5); near(m.face.fill, 0.5);
  for (const k of ['top', 'right', 'bottom', 'left']) near(m.edges[k], 0.275);
  m = M({ hp: -20 }); near(m.face.opacity, FB.faceMaxOpacity);
  m = M({ hp: 500 }); assert.equal(m.face.opacity, 0);
});
test('a hit from the right lights the right edge most, fading to the base level by hitFlashTime', () => {
  const hits = [{ t: 10, angle: Math.PI / 2 }];
  let m = M({ hp: 50, hits });
  assert.equal(m.edges.right, 1);   // 0.275 + a full flash, capped at 1
  near(m.edges.top, 0.275, 1e-9); near(m.edges.left, 0.275, 1e-9); near(m.edges.bottom, 0.275, 1e-9);
  m = M({ hp: 100, hits, now: 10.1 }); near(m.edges.right, 0.75);
  assert.ok(m.edges.right > m.edges.top && m.edges.top < 1e-9);
  m = M({ hp: 100, hits: [{ t: 10, angle: Math.PI / 4 }], now: 10.2 });
  near(m.edges.top, 0.5 * Math.SQRT1_2); near(m.edges.right, 0.5 * Math.SQRT1_2); assert.equal(m.edges.bottom, 0);
  m = M({ hp: 50, hits, now: 10 + FB.hitFlashTime }); near(m.edges.right, 0.275);
  m = M({ hp: 50, hits, now: 12 }); near(m.edges.right, 0.275);
  // the strongest of several flashes wins, and a future-dated one is not above full weight
  m = M({ hp: 100, hits: [{ t: 9.9, angle: Math.PI }, { t: 10, angle: Math.PI }, { t: 11, angle: Math.PI }], now: 10.1 });
  near(m.edges.bottom, 1);
  assert.equal(m.edges.top, 0);
});
test('downed: show true, seconds ceil(downT); face opacity at max', () => {
  let m = M({ hp: 0, downed: true, downT: 11.2 });
  assert.deepEqual(m.downed, { show: true, seconds: 12 }); near(m.face.opacity, FB.faceMaxOpacity); assert.equal(m.face.frown, 1);
  assert.equal(M({ hp: 0, downed: true, downT: 12 }).downed.seconds, 12);
  assert.equal(M({ hp: 0, downed: true, downT: 0.01 }).downed.seconds, 1);
  assert.equal(M({ hp: 0, downed: true, downT: -1 }).downed.seconds, 0);
  m = M({ hp: 100, downed: true, downT: 5 }); near(m.face.opacity, FB.faceMaxOpacity);
});
test('hitFlashTime 0 gives no flash and stays finite', () => {
  const m = M({ hp: 100, hits: [{ t: 10, angle: 0 }], fb: { ...FB, hitFlashTime: 0 } });
  assert.equal(m.edges.top, 0);
});

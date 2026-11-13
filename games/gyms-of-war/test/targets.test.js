import { test } from 'node:test';
import assert from 'node:assert/strict';
import { HIT_SHAPES, createDummy, updateDummy, damageDummy, shotDamage, crateTouch } from '../src/combat/targets.js';
import { ASSOCIATE } from '../src/actors/associate.js';
import { TUNING } from '../src/tuning.js';

const near = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const T = TUNING.dummy, W = TUNING.weapons;

test('HIT_SHAPES come from ASSOCIATE: head y 1.49 r 0.26, body 0.1 to 1.19 r 0.262', () => {
  near(HIT_SHAPES.head.cy, 1.49); near(HIT_SHAPES.head.r, 0.26);
  near(HIT_SHAPES.body.ay, 0.1); near(HIT_SHAPES.body.by, 1.19); near(HIT_SHAPES.body.r, 0.262);
  assert.equal(HIT_SHAPES.head.cy, ASSOCIATE.neckY + ASSOCIATE.head.centerY);
  const d = createDummy({ id: 'a', pos: [2, 0.5, -3], yaw: 1 });
  assert.deepEqual(d.shapes.head.c, [2, 0.5 + 1.49, -3]); assert.deepEqual(d.shapes.body.a, [2, 0.6, -3]);
  near(d.shapes.body.b[1], 0.5 + 1.19); assert.equal(d.health, 100); assert.equal(d.alive, true);
});
test('damageDummy: 7 x 16 kills from 100; a hit on a dead dummy is null; a kill sets respawnT to respawnTime', () => {
  const d = createDummy({ id: 'a', pos: [0, 0, 0] });
  for (let i = 0; i < 6; i++) assert.equal(damageDummy(d, 16), 'hit');
  assert.equal(d.health, 4); assert.equal(damageDummy(d, 16), 'kill');
  assert.equal(d.alive, false); assert.equal(d.health, 0); assert.equal(d.respawnT, T.respawnTime);
  assert.equal(damageDummy(d, 16), null);
  const e = createDummy({ id: 'b', pos: [0, 0, 0] });
  assert.equal(damageDummy(e, 0), null); assert.equal(damageDummy(e, -5), null); assert.equal(damageDummy(e, NaN), null);
  assert.equal(e.health, 100);
  // Six perfect hits (17.6) kill; five do not.
  const f = createDummy({ id: 'c', pos: [0, 0, 0] }); let r;
  for (let i = 0; i < 5; i++) r = damageDummy(f, 17.6); assert.equal(r, 'hit');
  assert.equal(damageDummy(f, 17.6), 'kill');
});
test('updateDummy: respawns at full health and home after respawnTime; a rail dummy stays within home +- half', () => {
  const d = createDummy({ id: 'a', pos: [1, 0, 2] });
  damageDummy(d, 500);
  updateDummy(d, 2.9); assert.equal(d.alive, false);
  updateDummy(d, 0.2); assert.equal(d.alive, true); assert.equal(d.health, 100); assert.deepEqual(d.pos, [1, 0, 2]); assert.equal(d.respawnT, 0);
  const r = createDummy({ id: 'r', pos: [-8.5, 0, -5.5], rail: { axis: 'x', half: 2 } });
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < 60 * 30; i++) { updateDummy(r, 1 / 60); lo = Math.min(lo, r.pos[0]); hi = Math.max(hi, r.pos[0]); assert.equal(r.pos[2], -5.5); }
  near(lo, -10.5, 0.05); near(hi, -6.5, 0.05); assert.ok(lo >= -10.5 - 1e-9 && hi <= -6.5 + 1e-9);
  near(r.shapes.head.c[0], r.pos[0]);
  const z = createDummy({ id: 'z', pos: [0, 0, 0], rail: { axis: 'z', half: 1 } });
  for (let i = 0; i < 200 && z.pos[2] <= 0.5; i++) updateDummy(z, 1 / 60);
  assert.ok(z.pos[2] > 0.5); assert.equal(z.pos[0], 0);
  // A dead rail dummy does not walk; it returns to home on respawn.
  damageDummy(r, 500); const x = r.pos[0]; updateDummy(r, 1); assert.equal(r.pos[0], x);
  updateDummy(r, 5); assert.equal(r.alive, true); assert.equal(r.pos[0], -8.5);
});
test('updateDummy: dt 0, dt 5, NaN and a zero rail are safe', () => {
  const r = createDummy({ id: 'r', pos: [0, 0, 0], rail: { axis: 'x', half: 2 } });
  for (const dt of [0, 5, NaN, -1, Infinity]) { updateDummy(r, dt); assert.ok(r.pos.every(Number.isFinite)); assert.ok(Math.abs(r.pos[0]) <= 2 + 1e-9); }
  const z = createDummy({ id: 'z', pos: [3, 0, 0], rail: { axis: 'x', half: 0 } }); updateDummy(z, 1); assert.equal(z.pos[0], 3);
  updateDummy(r, 1, { ...T, railSpeed: 0 }); assert.ok(Number.isFinite(r.pos[0]));
});
test('shotDamage: head x headMult, body x 1, with the perfect mult; world and none give 0', () => {
  assert.equal(shotDamage(W.regret, 'body', 1), 16); assert.equal(shotDamage(W.regret, 'head', 1), 32);
  near(shotDamage(W.regret, 'body', 1.1), 17.6); near(shotDamage(W.regret, 'head', 1.1), 35.2);
  assert.equal(shotDamage(W.pistol, 'head', 1), 75); assert.equal(shotDamage(W.pistol, 'body', 1), 30);
  assert.equal(shotDamage(W.regret, 'world', 1), 0); assert.equal(shotDamage(W.regret, 'none', 1), 0);
});
test('crateTouch: within crateRadius only', () => {
  const crates = [{ pos: [-11, 0, 8.5] }];
  assert.equal(crateTouch([-11, 0, 8.5], crates, 1), true);
  assert.equal(crateTouch([-10.1, 0, 8.5], crates, 1), true);
  assert.equal(crateTouch([-9.9, 0, 8.5], crates, 1), false);
  assert.equal(crateTouch([-11, 5, 8.5], crates, 1), true, 'height is ignored');
  assert.equal(crateTouch([0, 0, 0], [], 1), false);
});

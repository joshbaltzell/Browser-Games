import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TUNING } from '../src/tuning.js';
import { meleeTarget, interactAction } from '../src/combat/melee.js';
import { KIOSK_ROW } from '../src/world/kioskRow.js';
import { makeBox } from '../src/world/collide.js';

const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const rep = (x, z, o = {}) => ({ alive: true, state: 'cover', pos: [x, 0, z], ...o });
const down = (x, z) => rep(x, z, { state: 'downed' });
const P = [0, 0, 0], DEG = Math.PI / 180;
const at = (d, deg) => [Math.sin(deg * DEG) * d, Math.cos(deg * DEG) * d];   // offset d m from the origin, deg off +z

test('bash target: the nearest Rep within 1.8 m and 30 deg either side of the heading; none behind; none with K3 between', () => {
  const near1 = rep(...at(1.5, 25)), far = rep(...at(1.7, 0)), nearest = rep(...at(1.0, -20));
  assert.equal(meleeTarget('bash', P, 0, [far, near1, nearest], [FLOOR]), nearest);
  assert.equal(meleeTarget('bash', P, 0, [rep(...at(1.5, 29))], [FLOOR]) !== null, true);
  assert.equal(meleeTarget('bash', P, 0, [rep(...at(1.5, 31))], [FLOOR]), null, 'outside the cone');
  assert.equal(meleeTarget('bash', P, 0, [rep(...at(1.9, 0))], [FLOOR]), null, 'out of range');
  assert.equal(meleeTarget('bash', P, 0, [rep(0, -1)], [FLOOR]), null, 'behind');
  assert.equal(meleeTarget('bash', P, Math.PI, [rep(0, -1)], [FLOOR]) !== null, true, 'the cone follows yaw');
  // T1 (the sign board) sits between a player west of it and a Rep east of it.
  const K = KIOSK_ROW.boxes, pl = [-6, 0, -1.5];
  assert.equal(meleeTarget('bash', pl, Math.PI / 2, [rep(-4.4, -1.5)], [K[0], K[9]]), null, 'wall between');
  assert.notEqual(meleeTarget('bash', pl, Math.PI / 2, [rep(-4.4, -1.5)], [K[0]]), null, 'same Rep, no wall');
  assert.notEqual(meleeTarget('bash', pl, Math.PI / 2, [down(-4.4, -1.5)], [K[0]]), null, 'a downed Rep is bashable');
  assert.equal(meleeTarget('bash', P, 0, [rep(0, 1, { alive: false }), rep(0, 1, { state: 'unused', alive: false }), rep(0, 1, { state: 'executed' })], [FLOOR]), null);
});

test('bash target: a low wall (K3-height, top at y 1.0) does not block the 1.0 line but a 2 m wall does', () => {
  const tall = makeBox([-1, 0, 0.5], [1, 2, 0.7], 'wall');
  assert.equal(meleeTarget('bash', P, 0, [rep(0, 1.5)], [FLOOR, tall]), null);
  assert.notEqual(meleeTarget('bash', P, 0, [rep(0, 1.5)], [FLOOR]), null);
});

test('cutter target uses 1.1 m and 50 deg; a downed Rep in reach counts; an unused slot never does', () => {
  assert.notEqual(meleeTarget('cutter', P, 0, [rep(...at(1.05, 24))], [FLOOR]), null);
  assert.equal(meleeTarget('cutter', P, 0, [rep(...at(1.05, 26))], [FLOOR]), null);
  assert.equal(meleeTarget('cutter', P, 0, [rep(...at(1.2, 0))], [FLOOR]), null);
  const d = down(0, 1.0); assert.equal(meleeTarget('cutter', P, 0, [d], [FLOOR]), d);
  assert.equal(meleeTarget('cutter', P, 0, [rep(0, 0.5, { state: 'unused', alive: false })], [FLOOR]), null);
  assert.equal(meleeTarget('cutter', P, 0, [rep(0, 0.5, { state: 'unused' })], [FLOOR]), null, 'unused even if alive were set');
});

test('finish target: only downed Reps within 1.6 m and 70 deg', () => {
  assert.equal(meleeTarget('finish', P, 0, [rep(0, 1)], [FLOOR]), null, 'standing');
  const d = down(...at(1.5, 34)); assert.equal(meleeTarget('finish', P, 0, [d], [FLOOR]), d);
  assert.equal(meleeTarget('finish', P, 0, [down(...at(1.5, 36))], [FLOOR]), null);
  assert.equal(meleeTarget('finish', P, 0, [down(...at(1.7, 0))], [FLOOR]), null);
  const wall = makeBox([-1, 0, 0.5], [1, 0.8, 0.7], 'wall');   // the line to a downed Rep runs at y 0.3 to 1.0
  assert.equal(meleeTarget('finish', P, 0, [down(0, 1.5)], [FLOOR, wall]), null, 'a low wall blocks the line to a downed Rep');
});

test('the ranges are read from the panel at use time', () => {
  const saved = TUNING.melee.bashRange;
  try { TUNING.melee.bashRange = 3; assert.notEqual(meleeTarget('bash', P, 0, [rep(0, 2.5)], [FLOOR]), null); } finally { TUNING.melee.bashRange = saved; }
  assert.equal(meleeTarget('bash', P, 0, [rep(0, 2.5)], [FLOOR]), null);
});

test('interactAction order: downed -> giveUp hold; clear -> again; Tobble downed at 1.4 m -> reviveTobble hold (at 1.6 m -> null); downed Rep in front -> finish', () => {
  const base = { downed: false, clear: false, tobble: null, pos: P, yaw: 0, enemies: [], boxes: [FLOOR] };
  const a = interactAction({ ...base, downed: true, clear: true, tobble: { downed: true, pos: [0, 0, 1] }, enemies: [down(0, 1)] });
  assert.deepEqual([a.kind, a.hold, a.target], ['giveUp', true, null]);
  const b = interactAction({ ...base, clear: true, tobble: { downed: true, pos: [0, 0, 1] }, enemies: [down(0, 1)] });
  assert.deepEqual([b.kind, b.hold, b.target], ['again', false, null]);
  const tb = { downed: true, pos: [0, 0, 1.4] };
  const c = interactAction({ ...base, tobble: tb });
  assert.deepEqual([c.kind, c.hold, c.target], ['reviveTobble', true, tb]);
  assert.equal(interactAction({ ...base, tobble: { downed: true, pos: [0, 0, 1.6] } }).kind, null);
  assert.equal(interactAction({ ...base, tobble: { downed: false, pos: [0, 0, 1] } }).kind, null, 'a standing Tobble needs no revive');
  const d = down(0, 1.2), f = interactAction({ ...base, enemies: [d] });
  assert.deepEqual([f.kind, f.hold, f.target], ['finish', false, d]);
  assert.equal(interactAction({ ...base, enemies: [rep(0, 1)] }).kind, null);
  assert.equal(interactAction({ ...base, enemies: [down(0, 3)] }).kind, null);
});

test('interactAction: a downed Rep and a downed Tobble both in range -> reviveTobble wins', () => {
  const r = interactAction({ downed: false, clear: false, tobble: { downed: true, pos: [0, 0, 1] }, pos: P, yaw: 0, enemies: [down(0, 1.2)], boxes: [FLOOR] });
  assert.equal(r.kind, 'reviveTobble');
});

test('interactAction reads tobble.playerReviveRange from the panel once it exists', () => {
  const t = { ...TUNING, tobble: { playerReviveRange: 3 } };
  assert.equal(interactAction({ downed: false, clear: false, tobble: { downed: true, pos: [0, 0, 2.5] }, pos: P, yaw: 0, enemies: [], boxes: [FLOOR], t }).kind, 'reviveTobble');
});

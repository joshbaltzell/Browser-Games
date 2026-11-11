import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ACTIONS, applyDeadzone, mapPad, mapKey, mapMouseButton, releaseAll } from '../src/core/input.js';

const pad = (over = {}) => ({
  mapping: 'standard', connected: true, axes: [0, 0, 0, 0],
  buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })), ...over,
});
test('deadzone removes drift and rescales to full range', () => {
  assert.deepEqual(applyDeadzone(0.1, 0.05), [0, 0]);
  const [x] = applyDeadzone(1, 0);
  assert.ok(Math.abs(x - 1) < 1e-9);
  const [h] = applyDeadzone(0.575, 0);
  assert.ok(Math.abs(h - 0.5) < 1e-9);
});
test('standard pad maps to actions', () => {
  const p = pad({ axes: [1, 0, 0, -1] });
  p.buttons[0] = { pressed: true, value: 1 };
  p.buttons[7] = { pressed: true, value: 0.9 };
  p.buttons[6] = { pressed: true, value: 0.3 };
  const m = mapPad(p);
  assert.equal(m.ok, true);
  assert.equal(m.held.cover, true);
  assert.equal(m.held.fire, true);
  assert.equal(m.held.aim, false);
  assert.ok(m.moveX > 0.99 && m.lookY < -0.99);
});
test('unknown or missing pads are reported, not thrown', () => {
  assert.deepEqual(mapPad(null), { ok: false, reason: 'none' });
  assert.deepEqual(mapPad(pad({ connected: false })), { ok: false, reason: 'none' });
  assert.deepEqual(mapPad(pad({ mapping: '' })), { ok: false, reason: 'unrecognised' });
  assert.deepEqual(mapPad(pad({ buttons: [] })), { ok: false, reason: 'unrecognised' });
});
test('keys and mouse buttons map per the table', () => {
  assert.equal(mapKey('Space'), 'cover');
  assert.equal(mapKey('ShiftRight'), 'sprint');
  assert.equal(mapKey('Tab'), 'objective');
  assert.equal(mapKey('KeyZ'), null);
  assert.equal(mapMouseButton(0), 'fire');
  assert.equal(mapMouseButton(2), 'aim');
});
test('ACTIONS is frozen and complete', () => {
  assert.ok(Object.isFrozen(ACTIONS));
  assert.equal(ACTIONS.length, 15);
});
test('releaseAll clears held actions and look deltas', () => {
  const s = releaseAll({ held: { fire: true, aim: true }, lookDX: 9, lookDY: -4, moveX: 1, moveY: 1 });
  assert.ok(Object.values(s.held).every(v => v === false));
  assert.deepEqual([s.lookDX, s.lookDY, s.moveX, s.moveY], [0, 0, 0, 0]);
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createContextButton } from '../src/core/contextButton.js';
const DT = 1 / 60;

test('a short press taps once, on release', () => {
  const b = createContextButton();
  assert.equal(b.update(true, true, DT, 0.18), false);
  for (let i = 0; i < 4; i++) assert.equal(b.update(true, false, DT, 0.18), false);
  assert.equal(b.update(false, false, DT, 0.18), true);
  assert.equal(b.update(false, false, DT, 0.18), false);
});
test('held past tapMax is a hold, and its release is not a tap', () => {
  const b = createContextButton();
  b.update(true, true, DT, 0.18);
  for (let i = 0; i < 11; i++) b.update(true, false, DT, 0.18);
  assert.equal(b.holding(), true);
  assert.equal(b.update(false, false, DT, 0.18), false);
  assert.equal(b.holding(), false);
});
test('down and up inside one poll still taps', () => {
  const b = createContextButton();
  assert.equal(b.update(false, true, DT, 0.18), true);
});
test('reset mid-press: the release does not tap and holding is false', () => {
  const b = createContextButton();
  b.update(true, true, DT, 0.18);
  for (let i = 0; i < 12; i++) b.update(true, false, DT, 0.18);
  b.reset();
  assert.equal(b.holding(), false);
  b.update(true, false, DT, 0.18);
  assert.equal(b.update(false, false, DT, 0.18), false);
  const c = createContextButton();
  c.update(true, true, DT, 0.18); c.reset();
  assert.equal(c.update(false, false, DT, 0.18), false);
});
test('tapMax is read per call, so tuning it live works', () => {
  const b = createContextButton();
  b.update(true, true, DT, 0.5);
  for (let i = 0; i < 14; i++) b.update(true, false, DT, 0.5);
  assert.equal(b.holding(), false);
  assert.equal(b.update(false, false, DT, 0.5), true);
  const c = createContextButton();
  c.update(true, true, DT, 0.05);
  for (let i = 0; i < 5; i++) c.update(true, false, DT, 0.05);
  assert.equal(c.holding(), true);
});

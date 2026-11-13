import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTrigger } from '../src/core/trigger.js';

test('a hold with no press seen while simulating never fires (the pointer-lock click)', () => {
  const t = createTrigger();
  // The click that locks the pointer: pressed while paused.
  assert.deepEqual(t.update(true, true, false), { fire: false, firePressed: false });
  // The game now simulates with the button still down: still no fire.
  for (let i = 0; i < 5; i++) assert.deepEqual(t.update(true, false, true), { fire: false, firePressed: false });
});

test('a press while simulating fires and holds; release disarms; the next press re-arms', () => {
  const t = createTrigger();
  assert.deepEqual(t.update(true, true, true), { fire: true, firePressed: true });
  assert.deepEqual(t.update(true, false, true), { fire: true, firePressed: false });
  assert.deepEqual(t.update(false, false, true), { fire: false, firePressed: false });
  // Held again with no press: not armed.
  assert.equal(t.update(true, false, true).fire, false);
  t.update(false, false, true);
  assert.deepEqual(t.update(true, true, true), { fire: true, firePressed: true });
});

test('a press and release inside one poll is a press with no hold', () => {
  const t = createTrigger();
  assert.deepEqual(t.update(false, true, true), { fire: false, firePressed: true });
  assert.equal(t.update(false, false, true).fire, false);
});

test('reset disarms mid-hold', () => {
  const t = createTrigger();
  t.update(true, true, true);
  t.reset();
  assert.equal(t.update(true, false, true).fire, false);
});

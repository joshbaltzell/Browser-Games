import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createPool } from '../src/render/fxPool.js';

test('createPool: spawns into free slots, then the oldest; update frees slots past their life', () => {
  const p = createPool(3);
  assert.deepEqual([p.spawn(), p.spawn(), p.spawn()], [0, 1, 2]);
  p.update(0.1, () => 1);
  p.update(0.1, () => 1);
  assert.ok(p.ages[0] > 0.19 && p.alive(0));
  // full: the oldest (slot 0, spawned first and aged longest, ties to the lowest) is reused
  p.ages[1] = 0.05; p.ages[2] = 0.02;
  assert.equal(p.spawn(), 0);
  assert.equal(p.ages[0], 0);
  // life passes: freed slots are reused before any live one
  p.update(1, (i) => (i === 1 ? 0.5 : 10));
  assert.equal(p.alive(1), false);
  assert.equal(p.alive(0) && p.alive(2), true);
  assert.equal(p.spawn(), 1);
});

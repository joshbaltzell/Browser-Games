import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rng } from '../src/core/random.js';

test('same seed, same sequence; different seed differs; range is [0,1)', () => {
  const a = rng(7), b = rng(7), c = rng(8);
  const xs = Array.from({ length: 100 }, a), ys = Array.from({ length: 100 }, b), zs = Array.from({ length: 100 }, c);
  assert.deepEqual(xs, ys);
  assert.notDeepEqual(xs, zs);
  assert.ok(xs.every(x => x >= 0 && x < 1));
});

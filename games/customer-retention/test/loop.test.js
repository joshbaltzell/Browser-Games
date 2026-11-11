import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createLoop } from '../src/core/loop.js';

test('steps at a fixed rate and reports the remainder', () => {
  const steps = []; let alpha = -1;
  const loop = createLoop({ step: dt => steps.push(dt), render: a => { alpha = a; } });
  loop.advance(1 / 30 + 0.004);
  assert.equal(steps.length, 2);
  assert.ok(steps.every(dt => Math.abs(dt - 1 / 60) < 1e-12));
  assert.ok(alpha >= 0 && alpha < 1);
});
test('a five-second stall runs at most maxSteps and drops the rest', () => {
  let n = 0;
  const loop = createLoop({ step: () => n++, render: () => {} });
  loop.advance(5);
  assert.equal(n, 5);
  loop.advance(1 / 60);
  assert.equal(n, 6);
});
test('zero, negative and NaN time do nothing', () => {
  let n = 0;
  const loop = createLoop({ step: () => n++, render: () => {} });
  for (const t of [0, -1, NaN]) loop.advance(t);
  assert.equal(n, 0);
});

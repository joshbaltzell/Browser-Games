import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resizeState, nextResolutionScale } from '../src/render/renderer.js';

test('pixel ratio is capped at 2 and scaled', () => {
  const r = resizeState(1600, 900, 3, 0.5);
  assert.equal(r.pixelRatio, 1);
  assert.ok(Math.abs(r.aspect - 16 / 9) < 1e-9);
});
test('a zero-size window is clamped, never divided by', () => {
  const r = resizeState(0, 0, 2, 1);
  assert.equal(r.width, 1); assert.equal(r.height, 1); assert.equal(r.aspect, 1);
});
test('resolution drops when slow, recovers when fast, stays in range', () => {
  assert.equal(nextResolutionScale(1, 25), 0.9);
  assert.equal(nextResolutionScale(0.5, 40), 0.5);
  assert.equal(nextResolutionScale(0.9, 10), 0.95);
  assert.equal(nextResolutionScale(1, 10), 1);
  assert.equal(nextResolutionScale(0.8, 16.7), 0.8);
});

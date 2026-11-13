import { test } from 'node:test';
import assert from 'node:assert/strict';
import { springStep } from '../src/core/spring.js';

test('converges without overshoot', () => {
  const s = { x: 0, v: 0 }; let max = 0;
  for (let i = 0; i < 120; i++) { springStep(s, 1, 0.08, 1 / 60); max = Math.max(max, s.x); }
  assert.ok(Math.abs(s.x - 1) < 1e-3);
  assert.ok(max <= 1 + 1e-9);
});
test('halfLife is honoured', () => {
  const s = { x: 0, v: 0 };
  for (let i = 0; i < 6; i++) springStep(s, 1, 0.1, 1 / 60);   // 0.1 s
  assert.ok(s.x > 0.2 && s.x < 0.6);
});
test('a huge step stays finite and inside the range', () => {
  const s = { x: 0, v: 50 };
  springStep(s, 1, 0.08, 3);
  assert.ok(Number.isFinite(s.x) && Number.isFinite(s.v));
  assert.ok(Math.abs(s.x - 1) < 1e-3);
});

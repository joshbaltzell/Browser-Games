import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createGovernor, nextResolutionScale } from '../src/render/governor.js';

// Feeds frames at a fixed length, advancing a fake clock; returns the clock.
function feed(g, clock, ms, frames) {
  for (let i = 0; i < frames; i++) { clock.t += ms; g.sample(ms, clock.t); }
}

test('nextResolutionScale accepts a custom fast threshold', () => {
  assert.equal(nextResolutionScale(0.9, 16.7), 0.9);
  assert.equal(nextResolutionScale(0.9, 16.7, 18.4), 0.95);
  assert.equal(nextResolutionScale(0.9, 25, 18.4), 0.8);
});
test('a hitch during the first 2 seconds does not lower the scale', () => {
  const g = createGovernor(); const c = { t: 0 };
  feed(g, c, 100, 3);
  feed(g, c, 16.7, 60);
  assert.ok(c.t < 2000);
  assert.equal(g.scale(), 1);
});
test('on a steady 16.7 ms display a scale of 0.9 climbs back to 1', () => {
  const g = createGovernor({ scale: 0.9 }); const c = { t: 0 };
  feed(g, c, 16.7, 120 + 60 * 4);
  assert.equal(g.scale(), 1);
});
test('sustained 25 ms frames lower the scale, never below 0.5', () => {
  const g = createGovernor(); const c = { t: 0 };
  feed(g, c, 25, 120);
  feed(g, c, 25, 60);
  assert.equal(g.scale(), 0.9);
  feed(g, c, 25, 60 * 40);
  assert.equal(g.scale(), 0.5);
});
test('a raise followed by a drop within 10 s holds off the next raise', () => {
  const g = createGovernor({ scale: 0.9 }); const c = { t: 0 };
  feed(g, c, 16.7, 120);                 // warm-up, ignored
  feed(g, c, 16.7, 60);                  // window: raise to 0.95
  assert.equal(g.scale(), 0.95);
  feed(g, c, 25, 60);                    // window: drop within 10 s, hold-off starts
  assert.equal(g.scale(), 0.85);
  const dropAt = c.t;
  while (c.t < dropAt + 9000) feed(g, c, 16.7, 60);
  assert.equal(g.scale(), 0.85);         // still held
  while (c.t < dropAt + 12000) feed(g, c, 16.7, 60);
  assert.ok(g.scale() > 0.85);           // hold-off over, recovery resumes
});

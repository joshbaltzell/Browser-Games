import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shouldSimulate } from '../src/play.js';

test('shouldSimulate: paused only when unlocked, on keyboard and mouse, with the panel closed', () => {
  assert.equal(shouldSimulate({ locked: false, device: 'kbm', panelOpen: false }), false);
  assert.equal(shouldSimulate({ locked: true, device: 'kbm', panelOpen: false }), true);
  assert.equal(shouldSimulate({ locked: false, device: 'pad', panelOpen: false }), true);
  assert.equal(shouldSimulate({ locked: false, device: 'kbm', panelOpen: true }), true);
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shouldSimulate, edgesKey, levelFor } from '../src/play.js';

test('shouldSimulate: paused only when unlocked, on keyboard and mouse, with the panel closed', () => {
  assert.equal(shouldSimulate({ locked: false, device: 'kbm', panelOpen: false }), false);
  assert.equal(shouldSimulate({ locked: true, device: 'kbm', panelOpen: false }), true);
  assert.equal(shouldSimulate({ locked: false, device: 'pad', panelOpen: false }), true);
  assert.equal(shouldSimulate({ locked: false, device: 'kbm', panelOpen: true }), true);
});

test('edgesKey changes when gap, endInset or minLength change, and only then', () => {
  const base = { gap: 0.03, endInset: 0.2, minLength: 0.3 };
  const k = edgesKey(base);
  assert.equal(edgesKey({ ...base, slideSpeed: 99 }), k);
  assert.notEqual(edgesKey({ ...base, gap: 0.04 }), k);
  assert.notEqual(edgesKey({ ...base, endInset: 0.3 }), k);
  assert.notEqual(edgesKey({ ...base, minLength: 0.4 }), k);
});

test('levelFor: ?room -> greyRoom, default and ?tune -> kioskRow', () => {
  assert.equal(levelFor(new URLSearchParams('?room')), 'greyRoom');
  assert.equal(levelFor(new URLSearchParams('?room&tune')), 'greyRoom');
  assert.equal(levelFor(new URLSearchParams('')), 'kioskRow');
  assert.equal(levelFor(new URLSearchParams('?tune')), 'kioskRow');
  assert.equal(levelFor(null), 'kioskRow');
});

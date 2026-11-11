import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInput, ACTIONS, applyDeadzone, mapPad, mapKey, mapMouseButton, releaseAll } from '../src/core/input.js';

const pad = (over = {}) => ({
  mapping: 'standard', connected: true, axes: [0, 0, 0, 0],
  buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })), ...over,
});
test('deadzone removes drift and rescales to full range', () => {
  assert.deepEqual(applyDeadzone(0.1, 0.05), [0, 0]);
  const [x] = applyDeadzone(1, 0);
  assert.ok(Math.abs(x - 1) < 1e-9);
  const [h] = applyDeadzone(0.575, 0);
  assert.ok(Math.abs(h - 0.5) < 1e-9);
});
test('standard pad maps to actions', () => {
  const p = pad({ axes: [1, 0, 0, -1] });
  p.buttons[0] = { pressed: true, value: 1 };
  p.buttons[7] = { pressed: true, value: 0.9 };
  p.buttons[6] = { pressed: true, value: 0.3 };
  const m = mapPad(p);
  assert.equal(m.ok, true);
  assert.equal(m.held.cover, true);
  assert.equal(m.held.fire, true);
  assert.equal(m.held.aim, false);
  assert.ok(m.moveX > 0.99 && m.lookY < -0.99);
});
test('unknown or missing pads are reported, not thrown', () => {
  assert.deepEqual(mapPad(null), { ok: false, reason: 'none' });
  assert.deepEqual(mapPad(pad({ connected: false })), { ok: false, reason: 'none' });
  assert.deepEqual(mapPad(pad({ mapping: '' })), { ok: false, reason: 'unrecognised' });
  assert.deepEqual(mapPad(pad({ buttons: [] })), { ok: false, reason: 'unrecognised' });
});
test('keys and mouse buttons map per the table', () => {
  assert.equal(mapKey('Space'), 'cover');
  assert.equal(mapKey('ShiftRight'), 'sprint');
  assert.equal(mapKey('Tab'), 'objective');
  assert.equal(mapKey('KeyZ'), null);
  assert.equal(mapMouseButton(0), 'fire');
  assert.equal(mapMouseButton(2), 'aim');
});
test('ACTIONS is frozen and complete', () => {
  assert.ok(Object.isFrozen(ACTIONS));
  assert.deepEqual([...ACTIONS], [
    'aim', 'fire', 'cover', 'sprint', 'reload', 'melee', 'interact', 'grenade',
    'weapon1', 'weapon2', 'weapon3', 'weaponNext', 'weaponPrev', 'objective', 'pause',
  ]);
});
test('releaseAll clears held actions and look deltas', () => {
  const s = releaseAll({ held: { fire: true, aim: true }, lookDX: 9, lookDY: -4, moveX: 1, moveY: 1 });
  assert.ok(Object.values(s.held).every(v => v === false));
  assert.deepEqual([s.lookDX, s.lookDY, s.moveX, s.moveY], [0, 0, 0, 0]);
});

test('releaseAll also empties key, button and pending-press sets', () => {
  const s = { downCodes: new Set(['KeyW']), downButtons: new Set([0]), latched: new Set(['fire']), held: { fire: true }, lookDX: 3, lookDY: 4 };
  releaseAll(s);
  assert.equal(s.downCodes.size + s.downButtons.size + s.latched.size, 0);
  assert.deepEqual([s.lookDX, s.lookDY], [0, 0]);
});

async function withFakeDom(fn) {
  const handlers = {};
  const target = (name) => ({ addEventListener: (t, f) => { (handlers[name + t] ||= []).push(f); } });
  const saved = { window: globalThis.window, document: globalThis.document, navigator: globalThis.navigator };
  globalThis.window = target('w');
  globalThis.document = { ...target('d'), pointerLockElement: null, activeElement: null };
  Object.defineProperty(globalThis, 'navigator', { value: { getGamepads: () => [] }, configurable: true });
  const fire = (key, ev) => (handlers[key] || []).forEach(f => f(ev));
  try { return await fn(fire); } finally {
    for (const k in saved) {
      if (saved[k] === undefined) delete globalThis[k];
      else Object.defineProperty(globalThis, k, { value: saved[k], configurable: true, writable: true });
    }
  }
}
const fakeCanvas = (over = {}) => ({ tabIndex: 0, addEventListener(t, f) { (this.h ||= {})[t] = f; }, focus() {}, ...over });

test('blur releases a held key, a held mouse button and pending look deltas', async () => {
  await withFakeDom((fire) => {
    const canvas = fakeCanvas();
    const input = createInput(canvas);
    document.pointerLockElement = canvas;
    fire('wkeydown', { code: 'KeyW', repeat: false, preventDefault() {} });
    fire('wkeydown', { code: 'KeyR', repeat: false, preventDefault() {} });
    canvas.h.mousedown({ button: 0, target: canvas });
    fire('dmousemove', { movementX: 5, movementY: -7 });
    fire('wblur', {});
    const s = input.poll();
    assert.equal(s.moveX + s.moveY, 0);
    assert.ok(Object.values(s.held).every(v => v === false));
    assert.ok(Object.values(s.pressed).every(v => v === false));
    assert.deepEqual([s.lookDX, s.lookDY], [0, 0]);
  });
});

test('a refused pointer lock leaves no unhandled rejection, not locked, nothing held', async () => {
  let unhandled = 0;
  const onUnhandled = () => { unhandled++; };
  process.on('unhandledRejection', onUnhandled);
  await withFakeDom(async () => {
    const canvas = fakeCanvas({ requestPointerLock: () => Promise.reject(new Error('refused')) });
    const input = createInput(canvas);
    input.requestLock();
    await new Promise(r => setTimeout(r, 10));
    assert.equal(input.isLocked(), false);
    assert.ok(Object.values(input.poll().held).every(v => v === false));
    createInput(fakeCanvas({ requestPointerLock: () => { throw new Error('sync'); } })).requestLock();
    createInput(fakeCanvas({ requestPointerLock: () => undefined })).requestLock();
  });
  process.off('unhandledRejection', onUnhandled);
  assert.equal(unhandled, 0);
});

import { isTypingTarget } from '../src/core/input.js';
test('isTypingTarget is true for text and number fields and textareas, false for buttons, checkboxes and the canvas', () => {
  assert.equal(isTypingTarget({ tagName: 'INPUT', type: 'text' }), true);
  assert.equal(isTypingTarget({ tagName: 'INPUT', type: 'number' }), true);
  assert.equal(isTypingTarget({ tagName: 'input' }), true);
  assert.equal(isTypingTarget({ tagName: 'TEXTAREA' }), true);
  assert.equal(isTypingTarget({ tagName: 'DIV', isContentEditable: true }), true);
  assert.equal(isTypingTarget({ tagName: 'INPUT', type: 'checkbox' }), false);
  assert.equal(isTypingTarget({ tagName: 'BUTTON' }), false);
  assert.equal(isTypingTarget({ tagName: 'CANVAS' }), false);
  assert.equal(isTypingTarget(null), false);
  assert.equal(isTypingTarget({}), false);
});

import { createContextButton } from '../src/core/contextButton.js';
test('real key path with the panel open (unlocked, focus on body): W gives forward move, Space tap fires, Space+W hold sprints', async () => {
  await withFakeDom((fire) => {
    const canvas = fakeCanvas();
    const input = createInput(canvas);
    document.activeElement = { tagName: 'BODY' };
    const key = (type, code) => fire('w' + type, { code, key: code, repeat: false, target: document.activeElement, preventDefault() {} });
    key('keydown', 'KeyW');
    let s = input.poll();
    assert.deepEqual([s.moveX, s.moveY], [0, -1]);
    key('keyup', 'KeyW');
    assert.equal(input.poll().moveY, 0);
    // The same snapshot-to-intent steps play.js takes, through the context button.
    const button = createContextButton();
    let pending = false;
    const tick = () => { const sn = input.poll(); if (sn.pressed.cover) pending = true; const tap = button.update(sn.held.cover, pending, 1 / 60, 0.18); pending = false; return { tap, sprint: sn.held.sprint || button.holding() }; };
    key('keydown', 'Space'); tick(); key('keyup', 'Space');
    assert.equal(tick().tap, true);
    key('keydown', 'KeyW'); key('keydown', 'Space');
    let r; for (let i = 0; i < 15; i++) r = tick();
    assert.equal(r.sprint, true);
    assert.equal(r.tap, false);
  });
});

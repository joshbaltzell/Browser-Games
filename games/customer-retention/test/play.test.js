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

import { actionPrompt, createPlayerActions } from '../src/playerActions.js';

test('actionPrompt order: a kettlebell in hand beats everything; Tobble downed in range beats a downed Rep; revving beats bash; the device swaps the keys; null when nothing applies', () => {
  const all = { grenadeHeld: true, interact: { kind: 'reviveTobble' }, reviving: true, revving: true, bashTarget: true, cutterNear: true, regretInHand: true };
  assert.deepEqual(actionPrompt({ ...all }), { text: 'Release G  throw', hold: null });
  assert.deepEqual(actionPrompt({ ...all, device: 'pad' }), { text: 'Release LB  throw', hold: null });
  const { grenadeHeld, ...noG } = all;
  assert.deepEqual(actionPrompt({ ...noG, holdFrac: 0.4 }), { text: 'Hold E  revive Tobble', hold: 0.4 });
  assert.deepEqual(actionPrompt({ ...noG, device: 'pad', reviving: false }), { text: 'Hold X  revive Tobble', hold: 0 });
  assert.equal(actionPrompt({ interact: { kind: 'finish' }, revving: true, bashTarget: true }).text, 'E  finish');
  assert.equal(actionPrompt({ interact: { kind: 'finish' }, device: 'pad' }).text, 'X  finish');
  assert.deepEqual(actionPrompt({ revving: true, bashTarget: true, cutterNear: true, regretInHand: true }), { text: 'Cheat Day: run into a Rep', hold: null });
  assert.equal(actionPrompt({ bashTarget: true, cutterNear: true, regretInHand: true }).text, 'F  bash');
  assert.equal(actionPrompt({ bashTarget: true, device: 'pad' }).text, 'B  bash');
  assert.equal(actionPrompt({ cutterNear: true, regretInHand: true }).text, 'Hold F  rev Cheat Day');
  assert.equal(actionPrompt({ cutterNear: true, regretInHand: false }), null);
  assert.equal(actionPrompt({ interact: { kind: 'again' } }), null);
  assert.equal(actionPrompt({ interact: { kind: null } }), null);
  assert.equal(actionPrompt({}), null);
  assert.equal(actionPrompt(), null);
});

test('createPlayerActions: a tap bashes, a hold with the Regret revs, a hit while revving locks it until release, a release throws one kettlebell and none left clicks dry', () => {
  // Pure wiring test on fakes: the mover records the calls, the fight records the throws.
  const calls = [], sounds = [];
  const mover = {
    state: 'move', pos: [0, 0, 0], facing: 0, grenadeAim: false, stateTime: 0, bashReadyAt: 0, clock: 0, cover: null, boxes: [],
    bash(y) { calls.push(['bash', y]); this.state = 'bash'; return true; },
    rev(on) { calls.push(['rev', on]); this.state = on ? 'rev' : 'move'; return true; },
    execute() { return false }, reviveTobble() { return false },
  };
  const fight = { enemies: [], tobble: null, clear: false, throws: [], throwGrenade(f, v) { this.throws.push([f.slice(), v.slice()]); }, beginExecution: () => false, releaseExecution() {} };
  const bag = { count: 1, take() { if (this.count <= 0) return false; this.count--; return true; } };
  const arsenal = { current: () => 'regret', reload: null, switching: 0 };
  const cam = { bump() {}, kick() {}, yaw: 0, pitch: 0 };
  const sfx = { play: (n) => sounds.push(n) };
  const effects = { gel() {} };
  const health = { downed: false };
  let restarts = 0;
  const a = createPlayerActions({ mover, fight, arsenal, bag, cam, sfx, effects, health, boxes: [], hooks: { restart: () => restarts++ } });
  const inp = (o) => ({ meleeHeld: false, meleePressed: false, grenadeHeld: false, interactHeld: false, interactPressed: false, device: 'kbm', camYaw: 0.5, camPitch: 0, ...o });
  // A tap: pressed and released inside holdTime.
  a.step(1 / 60, inp({ meleeHeld: true, meleePressed: true }));
  a.step(1 / 60, inp({ meleeHeld: false }));
  assert.deepEqual(calls, [['bash', 0.5]]);
  mover.state = 'move'; calls.length = 0;
  // A hold past holdTime revs; letting go stops.
  for (let i = 0; i < 20; i++) a.step(1 / 60, inp({ meleeHeld: true, meleePressed: i === 0 }));
  assert.ok(calls.some(c => c[0] === 'rev' && c[1] === true));
  assert.equal(mover.state, 'rev');
  // Shot while revving: it stops, and holding on does not start it again.
  a.onPlayerHit(); calls.length = 0;
  for (let i = 0; i < 10; i++) a.step(1 / 60, inp({ meleeHeld: true }));
  assert.equal(mover.state, 'move'); assert.deepEqual(calls, []);
  a.step(1 / 60, inp({ meleeHeld: false }));
  for (let i = 0; i < 20; i++) a.step(1 / 60, inp({ meleeHeld: true, meleePressed: i === 0 }));
  assert.equal(mover.state, 'rev');
  a.step(1 / 60, inp({ meleeHeld: false })); assert.equal(mover.state, 'move');
  // Kettlebell: armed while the mover reports grenadeAim; the release throws one; an empty bag clicks dry.
  mover.grenadeAim = true;
  a.step(1 / 60, inp({ grenadeHeld: true })); a.step(1 / 60, inp({ grenadeHeld: true }));
  assert.equal(a.prompt().text, 'Release G  throw'); assert.equal(a.arc().show, true);
  a.step(1 / 60, inp({ grenadeHeld: false }));
  assert.equal(fight.throws.length, 1); assert.equal(bag.count, 0); assert.ok(sounds.includes('throw')); assert.equal(a.busy(), true);
  for (let i = 0; i < 30; i++) a.step(1 / 60, inp({}));
  assert.equal(a.busy(), false);
  a.step(1 / 60, inp({ grenadeHeld: true })); a.step(1 / 60, inp({ grenadeHeld: false }));
  assert.equal(fight.throws.length, 1); assert.ok(sounds.includes('dry'));
  // Downed: holding interact gives up, a tap does not.
  health.downed = true;
  a.step(1 / 60, inp({ interactHeld: true, interactPressed: true })); a.step(1 / 60, inp({}));
  assert.equal(restarts, 0);
  for (let i = 0; i < 70; i++) a.step(1 / 60, inp({ interactHeld: true }));
  assert.equal(restarts, 1);
});

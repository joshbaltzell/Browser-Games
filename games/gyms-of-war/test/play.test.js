import { test } from 'node:test';
import assert from 'node:assert/strict';
import { objectiveLine, shouldSimulate, edgesKey, levelFor, gateInput, showsTitle } from '../src/play.js';

test('objectiveLine: every objective names the arena first, so the plate always shows both (the locked boss ending is blank)', () => {
  const title = 'The Cancellation Desk';
  const cases = [
    { bossArena: true }, { bossArena: true, started: true, boss: { invuln: true }, sauna: 'Hold X' },
    { bossArena: true, started: true, boss: { invuln: false } }, { bossArena: true, endingState: 'slump' }, { bossArena: true, endingState: 'desk' },
    { clear: true, gateOpen: true }, { clear: true }, { saunaOpen: true, sauna: 'Hold X' }, { started: false }, { started: true, turnstiles: true },
    { started: true },
  ];
  for (const c of cases) {
    const line = objectiveLine({ title, ...c });
    assert.ok(line.startsWith(`${title}: `), line);
    assert.ok(line.length > title.length + 2, line);
  }
  assert.equal(objectiveLine({ title, bossArena: true, endingLocked: true }), '');
  assert.equal(objectiveLine({ title: 'Smoothie Bar', started: true, turnstiles: true }), 'Smoothie Bar: get past the front desk');
  assert.equal(objectiveLine({ title, bossArena: true, started: true, boss: { invuln: false } }), 'The Cancellation Desk: shoot the Cancellation Manager. Head shots count double');
});

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
  assert.deepEqual(actionPrompt({ ...all, device: 'pad' }), { text: 'RT  throw', hold: null });
  const { grenadeHeld, ...noG } = all;
  assert.deepEqual(actionPrompt({ ...noG, holdFrac: 0.4 }), { text: 'Hold E  revive Tobble', hold: 0.4 });
  assert.deepEqual(actionPrompt({ ...noG, device: 'pad', reviving: false }), { text: 'Hold X  revive Tobble', hold: 0 });
  assert.equal(actionPrompt({ interact: { kind: 'finish' }, revving: true, bashTarget: true }).text, 'E  finish');
  assert.equal(actionPrompt({ interact: { kind: 'finish' }, device: 'pad' }).text, 'Y  finish');
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

function actionsRig(over = {}) {
  const calls = [];
  const mover = {
    state: 'move', pos: [0, 0, 0], facing: 0, grenadeAim: false, stateTime: 0, bashReadyAt: 0, clock: 0, cover: null, boxes: [],
    bash() { return false; }, rev() { return false; },
    execute() { calls.push('execute'); return true; }, reviveTobble() { calls.push('revive'); return true; },
  };
  const rep = { id: 1, alive: true, state: 'downed', pos: [0, 0, 1], head: [0, 1.7, 1] };
  const fight = {
    enemies: [], tobble: null, clear: false, beginExecution: () => true, releaseExecution() {}, finishExecution() {},
    ...over,
  };
  let restarts = 0; const health = { downed: false };
  const a = createPlayerActions({ mover, fight, arsenal: { current: () => 'regret', reload: null, switching: 0 }, bag: { count: 0, take: () => false }, cam: { bump() {}, kick() {} }, sfx: { play() {} }, effects: { gel() {} }, health, boxes: [], hooks: { restart: () => restarts++ } });
  const inp = (o) => ({ meleeHeld: false, meleePressed: false, grenadeHeld: false, interactHeld: false, interactPressed: false, device: 'kbm', camYaw: 0, camPitch: 0, ...o });
  return { a, mover, fight, calls, health, inp, rep, restarts: () => restarts };
}

test('revive Tobble: prompt and start agree in every state (shown and starts from move, sprint, cover; hidden and inert elsewhere)', () => {
  const tb = { downed: true, pos: [0, 0, 1] };
  for (const [state, can] of [['move', true], ['sprint', true], ['cover', true], ['roll', false], ['bash', false], ['rev', false], ['execute', false]]) {
    const r = actionsRig({ tobble: tb }); r.mover.state = state;
    r.a.step(1 / 60, r.inp({ interactHeld: true }));
    const p = r.a.prompt();
    assert.equal(!!(p && p.text === 'Hold E  revive Tobble'), can, `prompt in ${state}`);
    assert.equal(r.calls.includes('revive'), can, `start in ${state}`);
  }
});

test('finish: prompt and start agree in every state, including cover', () => {
  const rep = { id: 1, alive: true, state: 'downed', pos: [0, 0, 1], head: [0, 1.7, 1], radius: 0.4 };
  for (const [state, can] of [['move', true], ['sprint', true], ['cover', true], ['roll', false], ['bash', false]]) {
    const r = actionsRig({ enemies: [rep] }); r.mover.state = state;
    r.a.step(1 / 60, r.inp({ interactPressed: true, interactHeld: true }));
    const p = r.a.prompt();
    assert.equal(!!(p && p.text === 'E  finish'), can, `prompt in ${state}`);
    assert.equal(r.calls.includes('execute'), can, `start in ${state}`);
  }
});

test('rev Cheat Day prompt shows only where a hold can start the rev (move, sprint)', () => {
  const rep = { id: 1, alive: true, state: 'cover', pos: [0, 0, 2], head: [0, 1.7, 2], radius: 0.4 };
  for (const [state, can] of [['move', true], ['sprint', true], ['cover', false], ['roll', false]]) {
    const r = actionsRig({ enemies: [rep] }); r.mover.state = state;
    r.a.step(1 / 60, r.inp({}));
    const p = r.a.prompt();
    assert.equal(!!(p && p.text === 'Hold F  rev Cheat Day'), can, `prompt in ${state}`);
  }
});

test('give up needs E released once after the down; E held through the down does not restart', () => {
  const r = actionsRig();
  r.health.downed = true;
  for (let i = 0; i < 120; i++) r.a.step(1 / 60, r.inp({ interactHeld: true }));
  assert.equal(r.restarts(), 0, 'held through the down');
  r.a.step(1 / 60, r.inp({}));
  for (let i = 0; i < 70; i++) r.a.step(1 / 60, r.inp({ interactHeld: true }));
  assert.equal(r.restarts(), 1);
  // after a revive and a second down the arm is cleared again
  r.health.downed = false; r.a.step(1 / 60, r.inp({})); r.health.downed = true;
  for (let i = 0; i < 120; i++) r.a.step(1 / 60, r.inp({ interactHeld: true }));
  assert.equal(r.restarts(), 1);
});

test('gateInput: while a gated button is held it reads as released and the gate stays on; once all are let go it opens', () => {
  const A = ['melee', 'reload', 'weapon1'];
  const mk = (held = [], pressed = []) => ({ held: Object.fromEntries(A.map(a => [a, held.includes(a)])), pressed: Object.fromEntries(A.map(a => [a, pressed.includes(a)])) });
  let s = mk(['melee'], ['melee']);
  assert.equal(gateInput(s, A), true);
  assert.deepEqual([s.held.melee, s.pressed.melee], [false, false]);
  s = mk();
  assert.equal(gateInput(s, A), false, 'released: the gate opens');
});

test('gateInput with force (a story card is up): a skip key, even a tap that is already up, never reaches the game, and the gate stays on', () => {
  const A = ['melee', 'reload', 'weapon1', 'weapon3', 'interact'];
  const s = { held: Object.fromEntries(A.map(a => [a, false])), pressed: Object.fromEntries(A.map(a => [a, a === 'reload' || a === 'weapon3' || a === 'melee']))};
  assert.equal(gateInput(s, A, true), true);
  assert.ok(A.every(a => !s.pressed[a] && !s.held[a]));
});

test('test URLs (?arena=, ?skipTitle, ?room) skip the title, which is what keeps them off the saved checkpoint', () => {
  for (const q of ['arena=smoothie', 'skipTitle', 'room']) assert.equal(showsTitle(new URLSearchParams(q)), false);
  assert.equal(showsTitle(new URLSearchParams('')), true);
});

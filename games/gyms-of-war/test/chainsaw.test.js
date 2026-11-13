// Cheat Day as a chainsaw: the motor sound, the blade sparks, the 1.2 s grind and every way out of it; the pad's kettlebell and Y wiring.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TUNING } from '../src/tuning.js';
import { createPlayerActions } from '../src/playerActions.js';
import { createMovement } from '../src/actors/movement.js';
import { makeBox } from '../src/world/collide.js';
import { createSfx } from '../src/audio/sfx.js';

const DT = 1 / 60;
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const IDLE = { moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false };
const inp = (o = {}) => ({ meleeHeld: false, meleePressed: false, grenadeHeld: false, interactHeld: false, interactPressed: false, device: 'kbm', camYaw: 0, camPitch: 0, ...o });

function rig({ enemy = true, bagCount = 4 } = {}) {
  const log = { motor: [], plays: [], sparks: [], gels: [], finished: 0, released: 0, looked: [], rumble: [], throws: 0, begun: 0 };
  const rep = { id: 'r1', kind: 'associate', alive: true, state: 'idle', pos: [0, 0, 1.0], head: [0, 1.7, 1] };
  const fight = {
    enemies: enemy ? [rep] : [], tobble: null, clear: false, boss: null,
    beginExecution(e) { log.begun++; e.state = 'executed'; return true; },
    finishExecution(e) { log.finished++; e.state = 'dead'; e.alive = false; },
    releaseExecution(e) { log.released++; e.state = 'flinch'; },
    throwGrenade() { log.throws++; },
  };
  const handle = { stopped: 0, update(mode, level, vol) { log.motor.push([mode, level, vol]); }, stop() { this.stopped++; } };
  let motors = 0;
  const sfx = { play: (n) => log.plays.push(n), motor() { motors++; handle.stopped = 0; return handle; } };
  const effects = { gel: (p, d, n) => log.gels.push(n), spark: (p, d, n) => log.sparks.push(n) };
  const health = { downed: false };
  const bag = { count: bagCount, take() { if (this.count <= 0) return false; this.count--; return true; } };
  const arsenal = { current: () => 'regret', reload: null, switching: 0 };
  let actions = null;
  const mover = createMovement({ boxes: [FLOOR], spawn: [0, 0, 0], onAction: (ev) => actions.onAction(ev) });
  const hooks = { restart() {}, objective: () => null, lookAt: (t) => log.looked.push(t), rumble: (s, t) => log.rumble.push([s, t]) };
  actions = createPlayerActions({ mover, fight, arsenal, bag, cam: { bump() {}, kick() {} }, sfx, effects, health, boxes: [FLOOR], hooks, playerView: null });
  const r = { log, rep, fight, mover, actions, health, bag, handle, hooks, motors: () => motors };
  r.step = (i = {}, intent = IDLE) => { actions.step(DT, inp(i)); mover.update({ ...intent, grenade: actions.grenadeIntent() }, DT); };
  r.run = (n, i, intent) => { for (let k = 0; k < n; k++) r.step(typeof i === 'function' ? i(k) : i, intent); };
  return r;
}
const hold = (k) => ({ meleeHeld: true, meleePressed: k === 0 });

test('revving: the motor runs in "rev" mode with the pitch level rising to 1 over motorRevTime, sparks fly off the blade, and letting go stops it cleanly', () => {
  const r = rig({ enemy: false });
  r.run(20, hold);
  assert.equal(r.mover.state, 'rev');
  assert.equal(r.motors(), 1);
  const levels = r.log.motor.filter(m => m[0] === 'rev').map(m => m[1]);
  assert.ok(levels.length > 3 && levels[levels.length - 1] > levels[0], 'rising');
  r.run(Math.ceil(TUNING.feedback.motorRevTime / DT) + 5, hold);
  assert.equal(r.log.motor[r.log.motor.length - 1][1], 1, 'at full pitch it idles there');
  assert.equal(r.log.motor[r.log.motor.length - 1][2], TUNING.feedback.motorVolume);
  assert.ok(r.log.sparks.length > 5 && r.log.sparks.every(n => n === TUNING.feedback.revSparkCount), 'sparks at the blade');
  assert.equal(r.motors(), 1, 'one motor for the whole rev');
  r.step({ meleeHeld: false });
  assert.equal(r.mover.state, 'move');
  assert.equal(r.handle.stopped, 1, 'stopped once, and freed');
  r.run(30, {});
  assert.equal(r.handle.stopped, 1);
});

test('a hit before the blade touches anything cancels the rev (and the motor) until the button is let go', () => {
  const r = rig({ enemy: false });
  r.run(20, hold);
  assert.equal(r.mover.state, 'rev');
  r.actions.onPlayerHit();
  r.run(2, hold);
  assert.equal(r.mover.state, 'move'); assert.equal(r.handle.stopped, 1);
  r.run(20, { meleeHeld: true });
  assert.equal(r.mover.state, 'move', 'locked while the button stays down');
  r.run(2, {});
  r.run(20, hold);
  assert.equal(r.mover.state, 'rev', 'a fresh press revs again');
});

test('the grind: contact starts a cutTime execution, goo and sparks spray from the contact point, the motor drops to "grind", then the Rep dies exactly once', () => {
  const r = rig();
  let bitAt = -1, doneAt = -1;
  for (let k = 0; k < 400 && doneAt < 0; k++) {
    r.step(hold(k));
    if (bitAt < 0 && r.mover.state === 'execute') bitAt = k;
    if (r.log.finished > 0 && doneAt < 0) doneAt = k;
  }
  assert.ok(bitAt > 0 && doneAt > bitAt);
  const grind = (doneAt - bitAt) * DT;
  assert.ok(Math.abs(grind - TUNING.melee.cutTime) < 0.1, `grind took ${grind}`);
  assert.ok(TUNING.melee.cutTime >= 1.15 && TUNING.melee.cutTime <= 1.25);
  assert.equal(r.log.finished, 1);
  assert.ok(r.log.motor.some(m => m[0] === 'grind'));
  const fb = TUNING.feedback;
  assert.ok(r.log.gels.filter(n => n === fb.grindGelCount).length >= 10, 'continuous spray');
  assert.ok(r.log.gels.includes(fb.grindGelCount * 2), 'a burst as the blade bites');
  assert.ok(r.log.sparks.includes(fb.grindSparkCount));
  assert.ok(r.log.rumble.length > 0);
  assert.equal(r.actions.status().grinding, false);
  r.run(3, {});
  assert.equal(r.handle.stopped >= 1, true);
  assert.equal(r.mover.state, 'move');
});

test('once the blade bites it completes: letting the button go, or another Rep hitting Doc, does not stop the grind', () => {
  const r = rig();
  for (let k = 0; k < 200 && r.mover.state !== 'execute'; k++) r.step(hold(k));
  assert.equal(r.mover.state, 'execute');
  assert.equal(r.actions.status().grinding, true);
  r.step({ meleeHeld: false });
  r.actions.onPlayerHit();
  r.run(Math.ceil(TUNING.melee.cutTime / DT) + 5, {});
  assert.equal(r.log.finished, 1); assert.equal(r.log.released, 0);
  assert.equal(r.mover.state, 'move');
});

test('Doc downed mid-grind: the Rep is let go (not killed), the motor stops, nobody is locked', () => {
  const r = rig();
  for (let k = 0; k < 200 && r.mover.state !== 'execute'; k++) r.step(hold(k));
  r.run(10, {});
  r.mover.down(); r.health.downed = true;
  r.run(3, {});
  assert.equal(r.log.released, 1); assert.equal(r.log.finished, 0);
  assert.equal(r.rep.state, 'flinch');
  assert.equal(r.handle.stopped >= 1, true);
  assert.equal(r.mover.state, 'downed');
  assert.equal(r.actions.execution(), null);
});

test('a stomp (finish) is not a grind: no motor, no sparks; E finishes on the keyboard, Y on a pad, X does not on a pad', () => {
  const stomp = (o) => {
    const r = rig();
    r.rep.state = 'downed';
    r.step(inp(o) && o);
    return r;
  };
  let r = stomp({ interactPressed: true, interactHeld: true });
  assert.equal(r.mover.state, 'execute'); assert.equal(r.log.motor.length, 0); assert.equal(r.log.sparks.length, 0);
  r = stomp({ interactPressed: true, interactHeld: true, device: 'pad' });
  assert.equal(r.mover.state, 'move', 'X is not the finisher on a pad');
  r = stomp({ objectivePressed: true, device: 'pad' });
  assert.equal(r.mover.state, 'execute', 'Y finishes');
  assert.equal(r.log.looked.length, 0, 'finish wins over looking at the objective');
});

test('Y with nothing to finish turns the camera toward the objective, and does nothing without one', () => {
  const r = rig({ enemy: false });
  r.step({ objectivePressed: true, device: 'pad' });
  assert.equal(r.log.looked.length, 0);
  const target = { kind: 'gate', pos: [1, 1, 5], label: 'GO' };
  r.hooks.objective = () => target;
  r.step({ objectivePressed: true, device: 'pad' });
  assert.deepEqual(r.log.looked, [target]);
});

test('pad kettlebells: D-pad Up equips (no Cheat Day), LT aims, RT throws and it stays equipped; the last one returns the gun; a weapon button returns it too', () => {
  const r = rig({ enemy: false, bagCount: 2 });
  r.step({ equipPressed: true, device: 'pad' });
  assert.equal(r.actions.equipped(), true);
  assert.equal(r.actions.handKb(), true);
  assert.equal(r.actions.prompt().text, 'LT aim  RT throw');
  // no Cheat Day while equipped
  r.run(20, hold);
  assert.notEqual(r.mover.state, 'rev');
  // LT aims: the arc and the mover's grenade intent
  r.run(3, { aimHeld: true, device: 'pad' }, IDLE);
  assert.equal(r.actions.grenadeIntent(), true);
  assert.equal(r.actions.arc().show, true);
  assert.equal(r.actions.prompt().text, 'RT  throw');
  // RT throws
  r.step({ aimHeld: true, firePressed: true, device: 'pad' });
  assert.equal(r.log.throws, 1); assert.equal(r.bag.count, 1);
  assert.equal(r.actions.equipped(), true, 'stays equipped');
  r.run(30, { device: 'pad' });
  r.step({ firePressed: true, device: 'pad' });
  assert.equal(r.log.throws, 2); assert.equal(r.bag.count, 0);
  assert.equal(r.actions.equipped(), false, 'out of kettlebells: back to the gun');
  assert.equal(r.actions.handKb(), false);
  // equip again after a refill, then a weapon button puts them away
  r.bag.count = 3;
  r.step({ equipPressed: true, device: 'pad' }); assert.equal(r.actions.equipped(), true);
  r.step({ switched: true, device: 'pad' }); assert.equal(r.actions.equipped(), false);
  // the keyboard flow is unchanged: G held aims, release throws
  r.run(30, {});
  r.mover.grenadeAim = true;
  r.step({ grenadeHeld: true }); r.step({ grenadeHeld: true });
  assert.equal(r.actions.prompt().text, 'Release G  throw');
  r.step({ grenadeHeld: false });
  assert.equal(r.log.throws, 3);
});

test('D-pad Up with an empty bag does nothing', () => {
  const r = rig({ enemy: false, bagCount: 0 });
  r.step({ equipPressed: true, device: 'pad' });
  assert.equal(r.actions.equipped(), false);
});

test('silence() stops the motor mid-rev without another step, frees it, and is harmless when nothing runs', () => {
  const r = rig({ enemy: false });
  r.actions.silence();
  assert.equal(r.motors(), 0, 'nothing to stop');
  r.run(20, hold);
  assert.equal(r.mover.state, 'rev');
  r.actions.silence();
  assert.equal(r.handle.stopped, 1);
  r.actions.silence();
  assert.equal(r.handle.stopped, 1, 'stopped once');
  r.run(5, hold);
  assert.equal(r.motors(), 2, 'a rev still running starts a fresh motor at the next step');
});

test('silence() with the real sfx on a fake audio context stops every looping node (the motor does not drone on when the actions are replaced)', () => {
  const stops = [], starts = [];
  const param = () => ({ value: 0, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} });
  const node = () => ({ connect() { return this; }, start() { starts.push(1); }, stop(t) { stops.push(t); }, gain: param(), frequency: param(), Q: param(), type: '', buffer: null });
  class Ctx {
    constructor() { this.state = 'running'; this.currentTime = 1; this.sampleRate = 8000; this.destination = {}; }
    resume() { return Promise.resolve(); }
    createOscillator() { return node(); } createBufferSource() { return node(); } createBiquadFilter() { return node(); } createGain() { return node(); }
    createBuffer(c, n) { return { getChannelData: () => new Float32Array(n) }; }
  }
  const sfx = createSfx({ AudioContextCtor: Ctx });
  const mover = { state: 'rev', pos: [0, 0, 0], facing: 0, bashReadyAt: 0, clock: 0, rev() {}, bash() {}, execute() { return false; }, stateTime: 0 };
  const a = createPlayerActions({ mover, fight: { enemies: [], tobble: null, clear: false, boss: null }, arsenal: { current: () => 'regret', reload: null, switching: 0 }, bag: { count: 0 }, cam: { bump() {}, kick() {} }, sfx, effects: { gel() {}, spark() {} }, health: { downed: false }, boxes: [], hooks: {} });
  a.step(DT, inp({ meleeHeld: true }));
  assert.equal(starts.length, 5, 'the motor started (3 oscillators, the buzz, the noise)');
  assert.equal(stops.length, 0);
  a.silence();
  assert.equal(stops.length, 5, 'all five looping nodes stopped');
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { DOC_PLACEHOLDER } from '../src/actors/docPlaceholder.js';
import { ASSOCIATE } from '../src/actors/associate.js';
import { pickClip, rollSpin, createPlayerView } from '../src/actors/player.js';
import { RUN_SPEED, CLIPS } from '../src/actors/poses.js';
import { TUNING } from '../src/tuning.js';

const fake = (o = {}) => ({
  state: 'move', stateTime: 0, entries: 0, pos: [0, 0, 0], prevPos: [0, 0, 0], facing: 0, prevFacing: 0,
  aiming: false, tuning: TUNING.move, v: 0, speed() { return this.v; }, ...o,
});
const near = (a, b, e) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);

test('DOC_PLACEHOLDER keeps every Associate number and changes the look', () => {
  for (const k of ['height', 'hipHeight', 'armLength', 'legLength']) assert.equal(DOC_PLACEHOLDER[k], ASSOCIATE[k]);
  assert.deepEqual(DOC_PLACEHOLDER.torso, ASSOCIATE.torso);
  assert.notEqual(DOC_PLACEHOLDER.colors.hair, ASSOCIATE.colors.hair);
  assert.equal(DOC_PLACEHOLDER.face.brow, 'uni');
  assert.equal(DOC_PLACEHOLDER.face.fixedSmile, 0);
  assert.ok(Object.isFrozen(DOC_PLACEHOLDER.colors));
  assert.ok(Object.values(DOC_PLACEHOLDER.outfit).every(v => v === false));
});
test('pickClip maps each state and speed to a clip and rate', () => {
  assert.deepEqual(pickClip(fake({ state: 'roll' })), { name: 'roll', rate: 1 });
  assert.deepEqual(pickClip(fake({ state: 'roll' }), { ...TUNING.move, rollTime: 1.1 }), { name: 'roll', rate: 0.5 });
  assert.deepEqual(pickClip(fake({ state: 'sprint', v: 7.5 })), { name: 'sprint', rate: 2.2 });
  const r = pickClip(fake({ v: 4.5 }));
  assert.equal(r.name, 'run'); near(r.rate, 4.5 / RUN_SPEED, 1e-9);
  assert.equal(pickClip(fake({ v: 0.1, aiming: true })).name, 'aim');
  assert.equal(pickClip(fake({ v: 0.1 })).name, 'idle');
  assert.deepEqual(pickClip(fake({ state: 'cover' })), { name: 'idle', rate: 1 });
});
test('rollSpin is 0 before 0.08, 2π after 0.9, monotonic between', () => {
  assert.equal(rollSpin(0.08), 0); assert.equal(rollSpin(0.9), 2 * Math.PI);
  let last = 0;
  for (let i = 0; i <= 100; i++) { const s = rollSpin(i / 100); assert.ok(s >= last); last = s; }
});
test('createPlayerView: interpolates position and facing, the long way round never', () => {
  const m = fake({ prevFacing: 3.1, facing: -3.1, prevPos: [0, 0, 0], pos: [2, 0, 4] });
  const v = createPlayerView(m);
  v.update(0.5, 1 / 60);
  near(v.group.position.x, 1, 1e-9); near(v.group.position.z, 2, 1e-9);
  near(Math.abs(wrapPi(v.group.rotation.y)), Math.PI, 0.05);
});
const wrapPi = a => a - 2 * Math.PI * Math.round(a / (2 * Math.PI));
test('createPlayerView: a second roll straight after the first restarts the clip', () => {
  const m = fake({ state: 'roll', entries: 1 });
  const v = createPlayerView(m);
  v.update(1, 0.3);
  assert.equal(v.anim.current(), 'roll');
  const plays = [];
  const real = v.anim.play;
  v.anim.play = (...a) => { plays.push(a[0]); return real(...a); };
  v.update(1, 0.01);
  assert.deepEqual(plays, []); // same entry, same clip: no restart
  m.entries = 2; m.stateTime = 0;
  v.update(1, 0.0);
  assert.deepEqual(plays, ['roll']);
  assert.equal(v.anim.current(), 'roll');
});
test('during a roll the blob shadow stays flat on the floor', () => {
  const m = fake({ state: 'roll', entries: 1, stateTime: 0.275 });
  const v = createPlayerView(m);
  for (let i = 0; i < 10; i++) v.update(1, 1 / 60);
  assert.ok(Math.abs(v.group.rotation.x) < 1e-9);
  v.group.updateMatrixWorld(true);
  const s = v.rig.shadow, pos = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  s.getWorldPosition(pos);
  up.transformDirection(s.matrixWorld);
  assert.ok(Math.abs(pos.y) < 0.02); assert.ok(up.y > 0.999);
  assert.notEqual(v.group.children[0].rotation.x, 0);
});

test('pickClip reads the mover tuning, not the module default', () => {
  const tuning = { ...TUNING.move, rollTime: 1.1, runClipMinSpeed: 2 };
  assert.deepEqual(pickClip(fake({ state: 'roll', tuning })), { name: 'roll', rate: 0.5 });
  assert.equal(pickClip(fake({ v: 1, tuning })).name, 'idle');
  assert.equal(pickClip(fake({ v: 1 })).name, 'run');
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { DOC_PLACEHOLDER } from '../src/actors/docPlaceholder.js';
import { ASSOCIATE } from '../src/actors/associate.js';
import { pickClip, rollSpin, vaultHop, slamSquash, lowDrawBackWeight, createPlayerView } from '../src/actors/player.js';
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

test('pickClip maps cover states', () => {
  const cv = (kind, pop = 0) => ({ state: 'cover', cover: { edge: { kind }, pop }, coverTuning: TUNING.cover });
  assert.deepEqual(pickClip(fake(cv('low'))), { name: 'coverLow', rate: 1 });
  assert.deepEqual(pickClip(fake(cv('tall'))), { name: 'coverTall', rate: 1 });
  assert.deepEqual(pickClip(fake(cv('low', 1))), { name: 'coverPop', rate: 1 });
  assert.deepEqual(pickClip(fake({ ...cv('tall', 1), v: 2 })), { name: 'coverPop', rate: 1 });
  assert.deepEqual(pickClip(fake({ ...cv('low'), v: 2 })), { name: 'coverLowMove', rate: 2 / 3 });
  assert.deepEqual(pickClip(fake({ ...cv('tall'), v: 9 })), { name: 'coverTallMove', rate: 2 });
  assert.deepEqual(pickClip(fake({ ...cv('tall'), v: 0.5 })), { name: 'coverTallMove', rate: 0.5 });
  assert.equal(pickClip(fake({ state: 'coverSlide', scratch: { edge: { kind: 'tall' } }, coverTuning: TUNING.cover })).name, 'coverTall');
  assert.equal(pickClip(fake({ state: 'coverSlide', scratch: { edge: { kind: 'low' } }, coverTuning: TUNING.cover })).name, 'coverLow');
  assert.deepEqual(pickClip(fake({ state: 'coverSwap', v: 7.5 })), { name: 'sprint', rate: 2.2 });
  assert.deepEqual(pickClip(fake({ state: 'vault', coverTuning: { ...TUNING.cover, vaultTime: 1.0 } })), { name: 'vault', rate: 0.5 });
  assert.deepEqual(pickClip(fake({ state: 'cover', cover: null, coverTuning: TUNING.cover })), { name: 'idle', rate: 1 });
});
test('vaultHop peaks at h halfway and is 0 at both ends; slamSquash is 0 outside [0, time)', () => {
  near(vaultHop(0, 0.6), 0, 1e-12); near(vaultHop(1, 0.6), 0, 1e-12); near(vaultHop(0.5, 0.6), 0.6, 1e-12);
  assert.equal(slamSquash(-0.01, 0.12, 0.15), 0); assert.equal(slamSquash(0.15, 0.12, 0.15), 0);
  near(slamSquash(0.075, 0.12, 0.15), 0.12, 1e-12);
});
test('createPlayerView: during a vault the body lifts and the shadow stays on the floor', () => {
  const m = fake({ state: 'vault', entries: 1, stateTime: 0.25, coverTuning: TUNING.cover, slams: 0 });
  const v = createPlayerView(m);
  v.update(1, 1 / 60);
  v.group.updateMatrixWorld(true);
  const pos = new THREE.Vector3();
  v.rig.root.getWorldPosition(pos);
  const base = pos.y;
  m.state = 'move'; m.stateTime = 0;
  v.update(1, 1 / 60); v.group.updateMatrixWorld(true);
  v.rig.root.getWorldPosition(pos);
  near(base - pos.y, TUNING.cover.vaultHop, 1e-9);
  m.state = 'vault'; m.stateTime = 0.25; v.update(1, 1 / 60); v.group.updateMatrixWorld(true);
  v.rig.shadow.getWorldPosition(pos);
  assert.ok(Math.abs(pos.y) < 0.02);
});
test('createPlayerView: a new slam squashes the body, soles on the floor, then settles', () => {
  const m = fake({ coverTuning: TUNING.cover, slams: 0 });
  const v = createPlayerView(m);
  v.update(1, 1 / 60);
  m.slams = 1;
  v.update(1, 0);
  v.update(1, TUNING.cover.slamSquashTime / 2);
  const t = v.group.children[0], k = TUNING.cover.slamSquash;
  near(t.scale.y, 1 - k, 1e-9); near(t.scale.x, 1 + k / 2, 1e-9);
  near(t.position.y - 0.5 * t.scale.y, 0, 1e-9);
  v.update(1, TUNING.cover.slamSquashTime);
  near(t.scale.y, 1, 1e-9);
});
test('vaultTime 0 (panel minimum): clip rate and body height stay finite', () => {
  const ct = { ...TUNING.cover, vaultTime: 0 };
  assert.ok(Number.isFinite(pickClip(fake({ state: 'vault', coverTuning: ct })).rate));
  const m = fake({ state: 'vault', entries: 1, stateTime: 0, coverTuning: ct, slams: 0 });
  const v = createPlayerView(m);
  v.update(1, 1 / 60); v.group.updateMatrixWorld(true);
  const pos = new THREE.Vector3(); v.rig.root.getWorldPosition(pos);
  assert.ok(Number.isFinite(pos.y));
});
test('createPlayerView.fadeHeadFor hides the head with the lens close and shows it again when far', () => {
  const v = createPlayerView(fake({ coverTuning: TUNING.cover, slams: 0 }));
  v.update(1, 1 / 60);
  const head = v.rig.root.getObjectByName('head');
  assert.equal(v.fadeHeadFor([0, 1.6, 0.2], 0.45, 0.08), false); assert.equal(head.visible, false);
  assert.equal(v.fadeHeadFor([0, 1.6, 2.5], 0.45, 0.08), true); assert.equal(head.visible, true);
});
test('lowDrawBackWeight: 1 tucked behind low cover, rises with the slide, falls with the pop, 0 for tall cover and elsewhere', () => {
  const low = { kind: 'low', normal: [0, -1] }, tall = { kind: 'tall', normal: [0, -1] };
  assert.equal(lowDrawBackWeight(fake({ state: 'cover', cover: { edge: low, pop: 0 }, scratch: {} })), 1);
  near(lowDrawBackWeight(fake({ state: 'cover', cover: { edge: low, pop: 0.25 }, scratch: {} })), 0.75, 1e-12);
  assert.equal(lowDrawBackWeight(fake({ state: 'cover', cover: { edge: low, pop: 1 }, scratch: {} })), 0);
  assert.equal(lowDrawBackWeight(fake({ state: 'cover', cover: { edge: tall, pop: 0 }, scratch: {} })), 0);
  near(lowDrawBackWeight(fake({ state: 'coverSlide', stateTime: 0.05, scratch: { edge: low, dur: 0.1 } })), 0.5, 1e-12);
  assert.equal(lowDrawBackWeight(fake({ state: 'move', scratch: {} })), 0);
});
test('createPlayerView: tucked behind low cover the body is drawn lowDrawBack away from the wall; mover.pos is untouched', () => {
  const m = fake({ state: 'cover', entries: 1, pos: [0, 0, 1], prevPos: [0, 0, 1], coverTuning: TUNING.cover, slams: 0,
    cover: { edge: { kind: 'low', normal: [0, -1] }, pop: 0 }, scratch: {} });
  const v = createPlayerView(m);
  v.update(1, 1 / 60);
  near(v.group.position.z, 1 - TUNING.cover.lowDrawBack, 1e-9);
  assert.deepEqual(m.pos, [0, 0, 1]);
  m.cover.pop = 1; for (let i = 0; i < 30; i++) v.update(1, 1 / 60);
  near(v.group.position.z, 1, 1e-9);
});

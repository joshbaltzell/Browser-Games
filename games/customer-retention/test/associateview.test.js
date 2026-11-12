import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickAssociateClip, associateFacing, faceOf, createAssociateView } from '../src/actors/associateView.js';
import { pickClip } from '../src/actors/player.js';
import { createAssociate } from '../src/actors/associateBrain.js';
import { TUNING } from '../src/tuning.js';

const low = { kind: 'low', normal: [0, -1], tangent: [1, 0], end: 0 };
const tall = (end, normal = [0, -1], tangent = [1, 0]) => ({ kind: 'tall', normal, tangent, end });
const E = (o = {}) => ({ id: 'a', state: 'cover', point: low, alive: true, pop: 0, blind: 0, pos: [0, 0, 0], prevPos: [0, 0, 0], yaw: 0, prevYaw: 0, aim: [0, 1.2, 6], path: [], pathI: 0, ...o });

test('pickAssociateClip covers every brain state; suppress at a tall end picks L or R by end', () => {
  const lowWant = { run: 'run', idle: 'coverLow', cover: 'coverLow', reload: 'coverLow', telegraph: 'coverPop', burst: 'coverPop', suppress: 'coverBlindLow', flinch: 'flinch' };
  const tallWant = { run: 'run', idle: 'coverTall', cover: 'coverTall', reload: 'coverTall', telegraph: 'aim', burst: 'aim', flinch: 'flinch' };
  for (const [s, c] of Object.entries(lowWant)) assert.equal(pickAssociateClip(E({ state: s })), c, `low ${s}`);
  for (const [s, c] of Object.entries(tallWant)) assert.equal(pickAssociateClip(E({ state: s, point: tall(1) })), c, `tall ${s}`);
  // Facing the wall (+z, normal -z), the character's left is world +x: an open end on +x is on the left, on -x on the right.
  assert.equal(pickAssociateClip(E({ state: 'suppress', point: tall(1) })), 'coverBlindTallL');
  assert.equal(pickAssociateClip(E({ state: 'suppress', point: tall(-1) })), 'coverBlindTallR');
  // Turn the wall round (normal +z, facing -z): left is world -x.
  assert.equal(pickAssociateClip(E({ state: 'suppress', point: tall(1, [0, 1]) })), 'coverBlindTallR');
  assert.equal(pickAssociateClip(E({ state: 'suppress', point: tall(-1, [0, 1]) })), 'coverBlindTallL');
  // The player's own view makes the same call for the same geometry (its camera side -1 is the left end).
  for (const end of [1, -1]) {
    const m = { state: 'cover', coverTuning: TUNING.cover, tuning: TUNING.move, speed: () => 0, scratch: {},
      cover: { edge: { kind: 'tall', normal: [0, -1], tangent: [1, 0], length: 4, openA: true, openB: true, open: [true, true] }, pop: 0, blind: 1, popEnd: end, t: 0 } };
    const want = pickClip(m).name;
    assert.equal(pickAssociateClip(E({ state: 'suppress', point: tall(end) })), want, `end ${end}`);
  }
  assert.equal(pickAssociateClip(E({ state: 'idle', point: null })), 'coverLow');
});

test('associateFacing: tucked faces the wall, burst faces the player, run faces the motion', () => {
  const near = (a, b) => assert.ok(Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b))) < 1e-9, `${a} vs ${b}`);
  for (const s of ['idle', 'cover', 'reload', 'suppress']) near(associateFacing(E({ state: s, yaw: 2 })), 0);                 // wall normal -z: faces +z
  near(associateFacing(E({ state: 'cover', point: { ...low, normal: [0, 1] } })), Math.PI);
  near(associateFacing(E({ state: 'burst', pos: [0, 0, 0], aim: [3, 1.2, 0] })), Math.PI / 2);
  near(associateFacing(E({ state: 'telegraph', pos: [1, 0, 1], aim: [1, 1.2, -5] })), Math.PI);
  near(associateFacing(E({ state: 'run', pos: [0, 0, 0], path: [[-4, 0]], pathI: 0 })), -Math.PI / 2);
  near(associateFacing(E({ state: 'run', pos: [0, 0, 0], path: [], yaw: 0.7 })), 0.7);
});

test('faceOf: smug, angry while shooting, scared on a flinch, dead when dead', () => {
  assert.equal(faceOf(E({ state: 'cover' })), 'smug');
  assert.equal(faceOf(E({ state: 'telegraph' })), 'angry');
  assert.equal(faceOf(E({ state: 'burst' })), 'angry');
  assert.equal(faceOf(E({ state: 'flinch' })), 'scared');
  assert.equal(faceOf(E({ state: 'dead', alive: false })), 'dead');
});

test('createAssociateView: draws a tucked Associate back from low cover, pops it up, bursts and hides on death, resets', () => {
  const e = createAssociate({ id: 'q', pos: [0, 0, 5] });
  e.point = { ...low, pos: [0, 5] };
  const v = createAssociateView(e);
  for (let i = 0; i < 30; i++) v.update(1, 1 / 60);
  assert.ok(Math.abs(v.group.position.z - (5 + low.normal[1] * TUNING.cover.lowDrawBack)) < 1e-9, `z ${v.group.position.z}`);
  e.state = 'telegraph'; e.pop = 1;
  for (let i = 0; i < 30; i++) v.update(1, 1 / 60);
  assert.ok(Math.abs(v.group.position.z - 5) < 1e-9);
  const tip = v.tip();
  assert.ok(tip.every(Number.isFinite));
  v.glint(true); v.update(1, 0.03);
  assert.ok(v.blaster.emitter.scale.x >= 1);
  v.glint(false); v.update(1, 1 / 60);
  assert.equal(v.blaster.emitter.scale.x, 1);
  v.death();
  v.update(1, TUNING.feedback.dummyBurstTime / 2); assert.ok(v.group.scale.x > 1 && v.group.visible);
  v.update(1, TUNING.feedback.dummyBurstTime * 2); assert.equal(v.group.visible, false);
  v.reset();
  assert.equal(v.group.visible, true); assert.equal(v.group.scale.x, 1);
});

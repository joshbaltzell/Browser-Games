import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { buildRig } from '../src/actors/rig.js';
import { createAnimator } from '../src/actors/animator.js';
import { samplePose, CLIPS } from '../src/actors/poses.js';
import { ASSOCIATE as S } from '../src/actors/associate.js';

const visibleMeshes = (root) => {
  let n = 0;
  root.traverseVisible((o) => { if (o.isMesh) n++; });
  return n;
};
const box = (root) => {
  root.updateMatrixWorld(true);
  return new THREE.Box3().setFromObject(root, true);
};
const bodyBox = (rig) => box(rig.root.getObjectByName('body'));

test('an Associate is at most 26 draw calls: no more than 26 visible meshes, outlines included', () => {
  const rig = buildRig(S);
  assert.ok(visibleMeshes(rig.root) <= 26, `${visibleMeshes(rig.root)} meshes`);
});

test('standing, the Associate is about 1.8 m tall with its feet on the floor', () => {
  const rig = buildRig(S);
  rig.setPose(samplePose('idle', 0, S));
  rig.update(1 / 60);
  const b = bodyBox(rig);
  assert.ok(Math.abs(b.max.y - S.height) < 0.05, `top at ${b.max.y}`);
  assert.ok(Math.abs(b.min.y) < 0.01, `bottom at ${b.min.y}`);
});

test('squash is about the floor: a squashed character keeps its feet down', () => {
  const rig = buildRig(S);
  const p = samplePose('idle', 0, S);
  p.squash = 0.8;
  rig.setPose(p);
  rig.update(1 / 60);
  const b = bodyBox(rig);
  assert.ok(Math.abs(b.min.y) < 0.01, `bottom at ${b.min.y}`);
  assert.ok(b.max.y < S.height * 0.85, `top at ${b.max.y}`);
});

test('the first setPose snaps; later ones ease', () => {
  const rig = buildRig(S);
  const hips = rig.root.getObjectByName('hips');
  const run = samplePose('run', 0.1, S);
  rig.setPose(run);
  rig.update(1 / 60);
  assert.ok(Math.abs(hips.position.y - run.hipsY) < 1e-9);
  assert.ok(Math.abs(hips.rotation.x - run.lean) < 1e-9);
  const idle = samplePose('idle', 0, S);
  rig.setPose(idle);
  rig.update(1 / 60);
  assert.ok(hips.rotation.x < run.lean && hips.rotation.x > idle.lean);
});

test('the flat front of the head sits behind the back of the eye whites', () => {
  // The eye whites are flattened spheres centred on eyeZ, 0.35 R deep.
  const rig = buildRig(S);
  const f = S.face;
  const pos = rig.root.getObjectByName('headMesh').geometry.getAttribute('position');
  const back = f.eyeZ - 0.35 * f.eyeRadius;
  let checked = 0;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    for (const ex of [-f.eyeSpacing / 2, f.eyeSpacing / 2]) {
      if (Math.hypot(x - ex, y - f.eyeY) < f.eyeRadius && z > 0) {
        checked++;
        assert.ok(z <= back + 1e-6, `head at z ${z} in front of ${back}`);
      }
    }
  }
  assert.ok(checked > 4);
});

test('pose, update and dispose run clean for every clip', () => {
  const rig = buildRig(S);
  const anim = createAnimator(rig);
  for (const name of Object.keys(CLIPS)) {
    anim.play(name);
    for (let i = 0; i < 60; i++) { anim.update(1 / 60); rig.update(1 / 60); }
  }
  rig.root.traverse((o) => {
    if (!o.isMesh) return;
    assert.ok(Array.from(o.geometry.getAttribute('position').array).every(Number.isFinite), o.name);
    for (const k of ['x', 'y', 'z']) assert.ok(Number.isFinite(o.position[k]), o.name);
  });
  rig.dispose();
});

test('animator: unknown clips are ignored, talk drives the face, flinch returns', () => {
  const rig = buildRig(S);
  const talking = [];
  const real = rig.face.setTalking;
  rig.face.setTalking = (on) => { talking.push(on); real(on); };
  const anim = createAnimator(rig);
  assert.equal(anim.current(), 'idle');
  anim.play('nonsense');
  assert.equal(anim.current(), 'idle');
  anim.play('talk');
  assert.equal(anim.current(), 'talk');
  assert.deepEqual(talking, [true]);
  anim.update(0.5);
  anim.play('flinch');
  assert.equal(anim.current(), 'flinch');
  assert.deepEqual(talking, [true, false]);
  for (let i = 0; i < 30; i++) anim.update(1 / 60); // 0.5 s, past the 0.35 s flinch
  assert.equal(anim.current(), 'talk');
  assert.deepEqual(talking, [true, false, true]);
  anim.play('run');
  assert.deepEqual(talking, [true, false, true, false]);
});

test('animator: a cross-fade starts at the pose showing and ends on the new clip', () => {
  const rig = buildRig(S);
  const seen = [];
  const set = rig.setPose;
  rig.setPose = (p) => { seen.push({ lean: p.lean, hipsY: p.hipsY }); set(p); };
  const anim = createAnimator(rig);
  anim.update(0.2);
  const before = seen.at(-1);
  anim.play('run', { fade: 0.2 });
  anim.update(1e-6);
  assert.ok(Math.abs(seen.at(-1).lean - before.lean) < 1e-6);
  for (let i = 0; i < 12; i++) anim.update(1 / 60);
  const expect = samplePose('run', 12 / 60 + 1e-6, S);
  assert.ok(Math.abs(seen.at(-1).lean - expect.lean) < 1e-9);
});

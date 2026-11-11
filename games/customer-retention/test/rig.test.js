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

// The torso is a lathe (shirt over trousers) squashed front to back by
// torso.depth; this is its radius at a height above the hips bone.
function torsoRadius(y) {
  const prof = (p, yy) => {
    for (let i = 1; i < p.length; i++) {
      if (yy >= p[i - 1][1] && yy <= p[i][1]) {
        const k = (yy - p[i - 1][1]) / ((p[i][1] - p[i - 1][1]) || 1);
        return p[i - 1][0] + (p[i][0] - p[i - 1][0]) * k;
      }
    }
    return 0;
  };
  return Math.max(y >= 0 ? prof(S.torso.shirt.slice(0, -1), y) : 0, prof(S.torso.pants.slice(1, -1), y));
}

// Every arm and hand vertex over one cycle of a clip, in the hips bone's space
// (the torso's own frame), skipping the stretch of arm at the shoulder, where
// it joins the body. Calls fn(x, y, z, partName).
function eachArmVertex(name, fn) {
  const rig = buildRig(S);
  const anim = createAnimator(rig);
  anim.play(name, { fade: 0 });
  for (let i = 0; i < 60; i++) { anim.update(1 / 60); rig.update(1 / 60); }
  const hips = rig.root.getObjectByName('hips');
  const parts = ['armL', 'armR', 'handL', 'handR'].map((n) => rig.root.getObjectByName(n));
  const inv = new THREE.Matrix4(), v = new THREE.Vector3(), sh = new THREE.Vector3();
  const N = 24, dt = CLIPS[name].duration / N;
  for (let f = 0; f < N; f++) {
    anim.update(dt); rig.update(dt);
    rig.root.updateMatrixWorld(true);
    inv.copy(hips.matrixWorld).invert();
    for (const m of parts) {
      const pos = m.geometry.getAttribute('position');
      const arm = m.name.startsWith('arm');
      if (arm) { // the first ring is centred on the shoulder
        sh.set(0, 0, 0);
        for (let i = 0; i < 8; i++) sh.add(v.fromBufferAttribute(pos, i));
        sh.multiplyScalar(1 / 8).applyMatrix4(m.matrixWorld);
      }
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(m.matrixWorld);
        if (arm && v.distanceTo(sh) < 0.16) continue;
        v.applyMatrix4(inv);
        fn(v.x, v.y, v.z, m.name);
      }
    }
  }
}

test('arms and hands stay off the torso in every clip', () => {
  for (const name of ['idle', 'talk', 'aim', 'run', 'flinch']) {
    let gap = Infinity;
    eachArmVertex(name, (x, y, z) => {
      const r = torsoRadius(y);
      if (r > 0) gap = Math.min(gap, Math.hypot(x, z / S.torso.depth) - r);
    });
    assert.ok(gap > 0.005, `${name}: an arm comes within ${gap.toFixed(3)} of the torso`);
  }
});

test('idling and talking, seen from the front, no arm crosses the belly', () => {
  for (const name of ['idle', 'talk']) {
    let inside = 0;
    eachArmVertex(name, (x, y, z) => {
      if (y > -0.05 && y < 0.25 && z > 0 && Math.abs(x) < torsoRadius(y)) inside++;
    });
    assert.equal(inside, 0, `${name}: ${inside} arm vertices in front of the belly`);
  }
});

test('running, the rig keeps up with the clip: no visible spring lag', () => {
  const rig = buildRig(S);
  const anim = createAnimator(rig);
  const hips = rig.root.getObjectByName('hips');
  anim.play('run', { fade: 0 });
  let t = 0, worst = 0;
  for (let i = 0; i < 180; i++) {
    anim.update(1 / 60); rig.update(1 / 60); t += 1 / 60;
    if (i < 60) continue;
    const want = samplePose('run', t % CLIPS.run.duration, S);
    worst = Math.max(worst, Math.abs(hips.position.y - want.hipsY), Math.abs(hips.rotation.y - want.twist) * 0.2);
  }
  // The hips bob 0.07 m and the twist swings 0.4 rad; the default 0.05 s
  // springs miss by about a third of that.
  assert.ok(worst < 0.006, `lags by ${worst}`);
});

test('setPose eases with the half-life it is given', () => {
  const rig = buildRig(S);
  const hips = rig.root.getObjectByName('hips');
  const a = samplePose('idle', 0, S), b = samplePose('run', 0.1, S);
  rig.setPose(a); rig.update(1 / 60);
  rig.setPose(b, 0); rig.update(1 / 60);
  assert.ok(Math.abs(hips.position.y - b.hipsY) < 1e-9, 'half-life 0 snaps');
  rig.setPose(a, 0.05); rig.update(1 / 60);
  assert.ok(Math.abs(hips.position.y - a.hipsY) > 0.01, 'half-life 0.05 eases');
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CLIPS, samplePose, blendPose, bodyPoint } from '../src/actors/poses.js';
import { ASSOCIATE as S } from '../src/actors/associate.js';
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const flat = p => [p.hipsY, p.lean, p.twist, p.headYaw, p.headPitch, p.squash, ...p.handL, ...p.handR, ...p.footL, ...p.footR];

test('every clip gives finite numbers for two full cycles', () => {
  for (const [name, clip] of Object.entries(CLIPS)) {
    for (let i = 0; i <= 40; i++) {
      assert.ok(flat(samplePose(name, (i / 20) * clip.duration, S)).every(Number.isFinite), name);
    }
  }
});
test('looping clips end where they start', () => {
  for (const name of ['idle', 'run', 'aim', 'talk']) {
    const a = flat(samplePose(name, 0, S)), b = flat(samplePose(name, CLIPS[name].duration, S));
    a.forEach((v, i) => assert.ok(Math.abs(v - b[i]) < 1e-6, name));
  }
});
test('running feet alternate and stay above the floor', () => {
  const q = samplePose('run', CLIPS.run.duration / 4, S);
  assert.ok(Math.abs(q.footL[2] + q.footR[2]) < 1e-6);
  assert.ok(Math.abs(q.footL[2]) > 0.2);
  for (let i = 0; i < 56; i++) {
    const p = samplePose('run', i / 100, S);
    assert.ok(p.footL[1] >= 0 && p.footR[1] >= 0);
  }
});
test('running leans forward; idle barely bobs', () => {
  assert.ok(samplePose('run', 0.1, S).lean > 0.15);
  for (let i = 0; i < 24; i++) {
    assert.ok(Math.abs(samplePose('idle', i / 10, S).hipsY - S.hipHeight) <= 0.03);
  }
});
test('aiming puts both hands forward, within reach', () => {
  const p = samplePose('aim', 0.4, S);
  assert.ok(p.handL[2] > 0.25 && p.handR[2] > 0.25);
  assert.ok(dist(p.handL, S.shoulderL) <= S.armLength * 1.15);
  assert.ok(dist(p.handR, S.shoulderR) <= S.armLength * 1.15);
});
test('flinch squashes, then recovers', () => {
  assert.ok(samplePose('flinch', 0.08, S).squash < 0.95);
  assert.ok(Math.abs(samplePose('flinch', CLIPS.flinch.duration, S).squash - 1) < 0.02);
});
test('blendPose is a straight mix', () => {
  const a = samplePose('idle', 0, S), b = samplePose('run', 0.1, S);
  assert.deepEqual(flat(blendPose(a, b, 0)), flat(a));
  assert.deepEqual(flat(blendPose(a, b, 1)), flat(b));
  assert.ok(Math.abs(blendPose(a, b, 0.5).lean - (a.lean + b.lean) / 2) < 1e-12);
});

// Beyond the brief.

// The leg's IK end is the ankle, spec.ankleHeight above the foot's sole point.
test('in every clip, over a full cycle, hands and ankles stay within 1.15 x reach', () => {
  const sh = [0, 0, 0], hp = [0, 0, 0];
  for (const [name, clip] of Object.entries(CLIPS)) {
    for (let i = 0; i <= 200; i++) {
      const p = samplePose(name, (i / 200) * clip.duration, S);
      for (const [hand, shoulder] of [[p.handL, S.shoulderL], [p.handR, S.shoulderR]]) {
        bodyPoint(S, p, shoulder, sh);
        assert.ok(dist(hand, sh) <= S.armLength * 1.15, `${name} hand at ${i}`);
      }
      for (const [foot, hip] of [[p.footL, S.hipL], [p.footR, S.hipR]]) {
        bodyPoint(S, p, hip, hp);
        const ankle = [foot[0], foot[1] + S.ankleHeight, foot[2]];
        assert.ok(dist(ankle, hp) <= S.legLength * 1.15, `${name} foot at ${i}`);
      }
    }
  }
});

test('blendPose returns fresh copies at the ends, and fills `out` when given', () => {
  const a = samplePose('idle', 0.3, S), b = samplePose('aim', 0.2, S);
  const lo = blendPose(a, b, -1), hi = blendPose(a, b, 2);
  assert.notEqual(lo, a); assert.notEqual(lo.handL, a.handL);
  assert.notEqual(hi, b); assert.notEqual(hi.footR, b.footR);
  assert.deepEqual(flat(lo), flat(a));
  assert.deepEqual(flat(hi), flat(b));
  const out = samplePose('run', 0, S);
  const keep = out.handL;
  assert.equal(blendPose(a, b, 0.25, out), out);
  assert.equal(out.handL, keep);
  assert.ok(Math.abs(out.hipsY - (a.hipsY * 0.75 + b.hipsY * 0.25)) < 1e-12);
});

test('samplePose with `out` reuses it and matches a fresh sample', () => {
  const out = samplePose('idle', 0, S);
  const arrays = [out.handL, out.handR, out.footL, out.footR];
  for (const name of Object.keys(CLIPS)) {
    for (const t of [0.05, 0.13, 0.31]) {
      assert.equal(samplePose(name, t, S, out), out);
      assert.deepEqual(flat(out), flat(samplePose(name, t, S)));
    }
  }
  assert.deepEqual([out.handL, out.handR, out.footL, out.footR], arrays);
});

test('clips are frozen, with the brief\'s durations', () => {
  assert.ok(Object.isFrozen(CLIPS));
  assert.deepEqual(Object.keys(CLIPS), ['idle', 'run', 'aim', 'flinch', 'talk']);
  const d = Object.fromEntries(Object.entries(CLIPS).map(([k, c]) => [k, [c.duration, c.loop]]));
  assert.deepEqual(d, { idle: [2.4, true], run: [0.56, true], aim: [1.6, true], flinch: [0.35, false], talk: [2.4, true] });
});

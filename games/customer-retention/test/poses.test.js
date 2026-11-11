import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CLIPS, samplePose, blendPose, bodyPoint } from '../src/actors/poses.js';
import { ASSOCIATE as S } from '../src/actors/associate.js';
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const flat = p => [p.hipsY, p.lean, p.twist, p.headYaw, p.headPitch, p.squash, p.elbows, ...p.handL, ...p.handR, ...p.footL, ...p.footR];

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
  const D = CLIPS.run.duration;
  for (let i = 0; i < 100; i++) {
    const t = (i / 100) * D;
    const p = samplePose('run', t, S), q = samplePose('run', t + D / 2, S);
    assert.ok(p.footL[1] >= 0 && p.footR[1] >= 0);
    // The right foot does what the left did half a cycle earlier.
    assert.ok(Math.abs(p.footR[1] - q.footL[1]) < 1e-9 && Math.abs(p.footR[2] - q.footL[2]) < 1e-9);
    assert.ok(Math.abs(p.footR[0] + q.footL[0]) < 1e-9);
  }
});

// Both feet off the floor, by more than a scuff.
const airborne = (p) => p.footL[1] > 0.02 && p.footR[1] > 0.02;

test('the run has a flight phase, with the hips highest in it', () => {
  const N = 400, D = CLIPS.run.duration;
  let flying = 0, top = -1, topT = 0, low = 9, lowP = null;
  for (let i = 0; i < N; i++) {
    const p = samplePose('run', (i / N) * D, S);
    if (airborne(p)) flying++;
    if (p.hipsY > top) { top = p.hipsY; topT = (i / N) * D; }
    if (p.hipsY < low) { low = p.hipsY; lowP = p; }
  }
  assert.ok(flying / N >= 0.15, `airborne ${(100 * flying / N).toFixed(0)}% of the cycle`);
  assert.ok(airborne(samplePose('run', topT, S)), 'highest hips while both feet are up');
  assert.ok(lowP.footL[1] === 0 || lowP.footR[1] === 0, 'lowest hips over a planted foot');
  assert.ok(top - low >= 0.05, `bob ${top - low}`);
});

test('the run is a sprint: long stride, high knees, forward lean, squash and stretch', () => {
  const N = 200, D = CLIPS.run.duration;
  let zMin = 9, zMax = -9, lift = 0, sqMin = 9, sqMax = 0;
  for (let i = 0; i < N; i++) {
    const p = samplePose('run', (i / N) * D, S);
    zMin = Math.min(zMin, p.footL[2]); zMax = Math.max(zMax, p.footL[2]);
    lift = Math.max(lift, p.footL[1]);
    sqMin = Math.min(sqMin, p.squash); sqMax = Math.max(sqMax, p.squash);
    assert.ok(p.lean >= 0.3, `lean ${p.lean}`);
  }
  assert.ok(zMax - zMin >= 0.55, `stride ${zMax - zMin}`);
  assert.ok(lift >= 0.3, `lift ${lift}`);
  assert.ok(sqMin <= 0.97 && sqMax >= 1.03, `squash ${sqMin}..${sqMax}`);
  // Squashed just after landing (the left foot strikes at t = 0), stretched by push-off.
  assert.ok(samplePose('run', 0.15 * D, S).squash < 0.97);
  assert.ok(samplePose('run', 0.37 * D, S).squash > 1.03);
});

test('a planted running foot slides back at one steady speed (it does not skate)', () => {
  const D = CLIPS.run.duration;
  const planted = [];
  for (let i = 0; i < 200; i++) {
    const p = samplePose('run', (i / 200) * D, S);
    if (p.footL[1] === 0) planted.push([(i / 200) * D, p.footL[2]]);
  }
  assert.ok(planted.length > 40);
  const v = (planted.at(-1)[1] - planted[0][1]) / (planted.at(-1)[0] - planted[0][0]);
  assert.ok(v < 0);
  for (const [t, z] of planted) assert.ok(Math.abs(planted[0][1] + v * (t - planted[0][0]) - z) < 1e-9);
});

test('run hands pump: forward hand at chest height, back hand down by the hip', () => {
  const D = CLIPS.run.duration;
  let fwd = -9, back = 9, fwdY = 0;
  for (let i = 0; i < 100; i++) {
    const p = samplePose('run', (i / 100) * D, S);
    if (p.handL[2] > fwd) { fwd = p.handL[2]; fwdY = p.handL[1]; }
    back = Math.min(back, p.handL[2]);
  }
  assert.ok(fwd >= 0.3 && back <= -0.1 && fwd - back >= 0.45, `hands ${back}..${fwd}`);
  assert.ok(fwdY >= S.shoulderL[1] - 0.25, `forward hand at ${fwdY}`);
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

test('aiming holds the hands well out at chest height, uncrossed', () => {
  for (let i = 0; i <= 20; i++) {
    const p = samplePose('aim', (i / 20) * CLIPS.aim.duration, S);
    assert.ok(p.handL[2] >= 0.5 && p.handR[2] >= 0.3, 'well out in front');
    for (const h of [p.handL, p.handR]) assert.ok(h[1] >= S.shoulderL[1] - 0.12 && h[1] <= S.shoulderL[1], 'chest height');
    assert.ok(p.handL[0] - p.handR[0] >= 0.2, 'left hand stays left of the right');
    assert.equal(p.elbows, 1);
  }
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

test('clips are frozen, with the brief\'s durations and their spring half-lives', () => {
  assert.ok(Object.isFrozen(CLIPS));
  assert.deepEqual(Object.keys(CLIPS), ['idle', 'run', 'aim', 'flinch', 'talk']);
  const d = Object.fromEntries(Object.entries(CLIPS).map(([k, c]) => [k, [c.duration, c.loop, c.ease]]));
  // The run is too fast for the default 0.05 s springs, which lag it ~45 degrees.
  assert.deepEqual(d, {
    idle: [2.4, true, 0.05], run: [0.56, true, 0.008], aim: [1.6, true, 0.05], flinch: [0.35, false, 0.05], talk: [2.4, true, 0.05],
  });
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CLIPS, RUN_SPEED, samplePose, blendPose, bodyPoint } from '../src/actors/poses.js';
import { ASSOCIATE as S } from '../src/actors/associate.js';
import { TUNING } from '../src/tuning.js';
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

test('aiming holds the hands well out in front at chest height', () => {
  for (let i = 0; i <= 20; i++) {
    const p = samplePose('aim', (i / 20) * CLIPS.aim.duration, S);
    assert.ok(p.handL[2] >= 0.45 && p.handR[2] >= 0.45, 'well out in front');
    for (const h of [p.handL, p.handR]) assert.ok(h[1] >= S.shoulderL[1] - 0.15 && h[1] <= S.shoulderL[1], 'chest height');
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
  assert.deepEqual(Object.keys(CLIPS), ['idle', 'run', 'aim', 'flinch', 'talk', 'roll', 'sprint', 'coverLow', 'coverLowMove', 'coverTall', 'coverTallMove', 'coverPop', 'vault', 'coverBlindLow', 'coverBlindTallL', 'coverBlindTallR', 'crawl']);
  const d = Object.fromEntries(Object.entries(CLIPS).map(([k, c]) => [k, [c.duration, c.loop, c.ease]]));
  // The run is too fast for the default 0.05 s springs, which lag it ~45 degrees.
  assert.deepEqual(d, {
    idle: [2.4, true, 0.05], run: [0.56, true, 0.008], aim: [1.6, true, 0.05], flinch: [0.35, false, 0.05], talk: [2.4, true, 0.05], roll: [0.55, false, 0.02], sprint: [0.56, true, 0.008],
    coverLow: [2.4, true, 0.05], coverLowMove: [0.5, true, 0.05], coverTall: [2.4, true, 0.05], coverTallMove: [0.5, true, 0.05], coverPop: [1.6, true, 0.05], vault: [0.5, false, 0.02],
    coverBlindLow: [1.6, true, 0.05], coverBlindTallL: [1.6, true, 0.05], coverBlindTallR: [1.6, true, 0.05], crawl: [1.0, true, 0.05],
  });
});

test('roll: starts and ends near standing, tucked in the middle, one-shot', () => {
  const H = S.hipHeight;
  assert.equal(CLIPS.roll.loop, false);
  assert.equal(CLIPS.roll.duration, 0.55);
  assert.ok(samplePose('roll', 0, S).hipsY > H - 0.1);
  assert.ok(samplePose('roll', 0.275, S).hipsY < 0.5);
  assert.ok(samplePose('roll', 0.55, S).hipsY > H - 0.1);
});
test('sprint: hips lower and lean greater than run at every sample; loops', () => {
  assert.equal(CLIPS.sprint.loop, true);
  assert.equal(CLIPS.sprint.duration, 0.56);
  assert.equal(CLIPS.sprint.ease, CLIPS.run.ease);
  for (let i = 0; i < 50; i++) {
    const t = (i / 50) * 0.56, a = samplePose('sprint', t, S), b = samplePose('run', t, S);
    assert.ok(Math.abs(b.hipsY - a.hipsY - 0.12) < 1e-9);
    assert.ok(Math.abs(a.lean - b.lean - 0.15) < 1e-9);
  }
});
test('RUN_SPEED is the run clip planted-foot speed, about 3.05 m/s', () => {
  // the left foot is planted for the first 0.34 of the cycle
  const D = CLIPS.run.duration, t0 = 0.05 * D, dt = 0.05;
  const a = samplePose('run', t0, S), b = samplePose('run', t0 + dt, S);
  assert.ok(Math.abs((b.footL[2] - a.footL[2]) / dt + RUN_SPEED) < 0.01);
  assert.ok(Math.abs(RUN_SPEED - 3.05) < 0.02);
});
test('roll and sprint sample finite at 50 points, arms clear of the belly', () => {
  for (const n of ['roll', 'sprint']) for (let i = 0; i <= 50; i++) {
    const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
    assert.ok(flat(p).every(Number.isFinite), n);
    assert.ok(Math.abs(p.handL[0]) > 0.2 && Math.abs(p.handR[0]) > 0.2 || n === 'sprint', n);
  }
});

const COVER = ['coverLow', 'coverLowMove', 'coverTall', 'coverTallMove', 'coverPop', 'vault'];
// Height of the top of the head as drawn (the rig squashes the whole body about the floor).
// Head surface points (about the neck, turned by the head pitch) placed on the posed body.
const headPoints = p => {
  const c = Math.cos(p.headPitch), sn = Math.sin(p.headPitch);
  return [[0.3, 0.2], [0.5, 0.15], [0.1, 0.17], [0.59, 0.05], [0.6, 0], [0.3, -0.235]]
    .map(([y, z]) => bodyPoint(S, p, [0, S.neckY + y * c - z * sn, y * sn + z * c]));
};
// Furthest-forward head and hand points after the rig's squash (which widens z by 1 / sqrt(squash)).
const forwardOf = p => Math.max(...headPoints(p).map(q => q[2]), p.handL[2], p.handR[2]) / Math.sqrt(p.squash);
const headTop = p => bodyPoint(S, p, [0, S.height, 0])[1] * p.squash;
test('cover clips: finite, feet on or above the floor, arms never across the body', () => {
  for (const n of COVER)
    for (let i = 0; i <= 50; i++) {
      const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
      assert.ok(flat(p).every(Number.isFinite), n);
      assert.ok(p.footL[1] >= 0 && p.footR[1] >= 0, n);
      assert.ok(p.handL[0] > 0.15 && p.handR[0] < -0.15, `${n} arms cross or hug the belly`);
    }
});
test('coverLow and coverLowMove: hips at most 0.45, head fully below a 1 m wall (0.95 m), hands forward on the wall top', () => {
  for (const n of ['coverLow', 'coverLowMove'])
    for (let i = 0; i <= 50; i++) {
      const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
      assert.ok(p.hipsY <= 0.45, `${n} hips ${p.hipsY}`);
      assert.ok(headTop(p) <= 0.95, `${n} head top ${headTop(p)}`);
      for (const h of [p.handL, p.handR]) assert.ok(h[2] > 0.15 && h[1] >= 0.6 && h[1] <= 1.05, `${n} hand ${h}`);
    }
});
test('low cover: with the draw-back, head and hands stay in front of the wall face, the head below the wall top', () => {
  const standoff = TUNING.move.radius + TUNING.cover.gap, back = TUNING.cover.lowDrawBack;
  for (const n of ['coverLow', 'coverLowMove'])
    for (let i = 0; i <= 50; i++) {
      const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
      const top = Math.max(...headPoints(p).map(q => q[1])) * p.squash;
      assert.ok(top <= 0.95, `${n} head top ${top}`);
      assert.ok(forwardOf(p) - back <= standoff, `${n} forward ${forwardOf(p) - back} past ${standoff}`);
    }
});
test('tall cover: the hands reach the wall face and no further', () => {
  const standoff = TUNING.move.radius + TUNING.cover.gap;
  for (const n of ['coverTall', 'coverTallMove'])
    for (let i = 0; i <= 50; i++) {
      const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
      for (const h of [p.handL, p.handR]) assert.ok(h[2] / Math.sqrt(p.squash) <= standoff, `${n} hand ${h}`);
    }
});
test('coverTall: standing, hands forward at shoulder height +- 0.15', () => {
  for (let i = 0; i <= 50; i++) {
    const p = samplePose('coverTall', (i / 50) * 2.4, S);
    assert.ok(p.hipsY > S.hipHeight - 0.08);
    const sh = bodyPoint(S, p, S.shoulderL)[1];
    for (const h of [p.handL, p.handR]) assert.ok(h[2] > 0.15 && Math.abs(h[1] - sh) <= 0.15, `hand ${h} shoulder ${sh}`);
  }
});
test('move variants step: each foot lifts 0.03 to 0.12 m once a cycle; loops close; the body is its base pose', () => {
  for (const [n, base] of [['coverLowMove', 'coverLow'], ['coverTallMove', 'coverTall']]) {
    const D = CLIPS[n].duration, b = samplePose(base, 0, S);
    let maxL = 0, maxR = 0, liftsL = 0, liftsR = 0, prevL = false, prevR = false;
    const N = 200;
    for (let i = 0; i <= N; i++) {
      const p = samplePose(n, (i / N) * D, S);
      maxL = Math.max(maxL, p.footL[1]); maxR = Math.max(maxR, p.footR[1]);
      const l = p.footL[1] > 0.01, r = p.footR[1] > 0.01;
      if (l && !prevL) liftsL++; if (r && !prevR) liftsR++;
      prevL = l; prevR = r;
      assert.ok(Math.abs(p.hipsY - b.hipsY) < 0.03 && Math.abs(p.lean - b.lean) < 0.01, n);
    }
    assert.ok(maxL >= 0.03 && maxL <= 0.12 && maxR >= 0.03 && maxR <= 0.12, `${n} lift ${maxL} ${maxR}`);
    assert.equal(liftsL, 1); assert.equal(liftsR, 1);
    const a = flat(samplePose(n, 0, S)), z = flat(samplePose(n, D, S));
    a.forEach((v, i) => assert.ok(Math.abs(v - z[i]) < 1e-6, n));
  }
  for (const n of ['coverLow', 'coverTall', 'coverPop']) {
    const a = flat(samplePose(n, 0, S)), z = flat(samplePose(n, CLIPS[n].duration, S));
    a.forEach((v, i) => assert.ok(Math.abs(v - z[i]) < 1e-6, n));
  }
});
test('vault: one-shot 0.5 s, standing at both ends, both feet at least 0.45 m up through the middle fifth', () => {
  assert.equal(CLIPS.vault.loop, false); assert.equal(CLIPS.vault.duration, 0.5);
  for (const t of [0, 0.5]) {
    const p = samplePose('vault', t, S);
    assert.ok(p.hipsY > S.hipHeight - 0.1 && p.footL[1] < 0.01 && p.footR[1] < 0.01);
  }
  for (let i = 0; i <= 20; i++) {
    const p = samplePose('vault', 0.5 * (0.4 + 0.2 * i / 20), S);
    assert.ok(p.footL[1] >= 0.45 && p.footR[1] >= 0.45, `feet ${p.footL[1]} ${p.footR[1]}`);
  }
});
test('coverPop: hands at or above shoulder height minus 0.15, forward of the chest', () => {
  for (let i = 0; i <= 50; i++) {
    const p = samplePose('coverPop', (i / 50) * 1.6, S);
    const sh = bodyPoint(S, p, S.shoulderL)[1];
    for (const h of [p.handL, p.handR]) assert.ok(h[1] >= sh - 0.15 && h[2] > 0.15, `hand ${h}`);
  }
});

const BLIND = ['coverBlindLow', 'coverBlindTallL', 'coverBlindTallR'];
test('blind clips: finite, feet on the floor, arms never across the body', () => {
  for (const n of BLIND)
    for (let i = 0; i <= 50; i++) {
      const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
      assert.ok(flat(p).every(Number.isFinite), n);
      assert.ok(p.footL[1] >= 0 && p.footR[1] >= 0, n);
      assert.ok(p.handL[0] > 0.15 && p.handR[0] < -0.15, `${n} arms cross or hug the belly`);
      const a = flat(samplePose(n, 0, S)), z = flat(samplePose(n, CLIPS[n].duration, S));
      a.forEach((v, k) => assert.ok(Math.abs(v - z[k]) < 1e-6, n));
    }
});
test('coverBlindLow: head fully below a 1 m wall (top <= 0.95 m after squash) at every sample', () => {
  for (let i = 0; i <= 50; i++) {
    const p = samplePose('coverBlindLow', (i / 50) * 1.6, S);
    const top = Math.max(...headPoints(p).map(q => q[1])) * p.squash;
    assert.ok(top <= 0.95 && headTop(p) <= 0.95 + 0.2, `head top ${top}`);
    assert.ok(p.hipsY <= 0.45);
  }
});
test('coverBlindLow with blindDrawBack: the head stays behind the wall face; the gun arm reaches as high as the rig can, in front of the face', () => {
  // The brief wanted the gun hand above the wall top (y * squash >= 1.02). The arm is 0.52 m, so with the head
  // below 0.95 m the hand tops out near 0.8 m: it stays in front of the near face instead (never inside the wall),
  // and the view pitches the gun up so the barrel clears the top (see the player test).
  const standoff = TUNING.move.radius + TUNING.cover.gap, back = TUNING.cover.blindDrawBack;
  for (let i = 0; i <= 50; i++) {
    const p = samplePose('coverBlindLow', (i / 50) * 1.6, S);
    const sq = Math.sqrt(p.squash);
    assert.ok(Math.max(...headPoints(p).map(q => q[2])) / sq - back <= standoff, 'head past the wall face');
    assert.ok(Math.max(p.handL[2], p.handR[2]) / sq - back <= standoff, 'a hand inside the wall');
    assert.ok(p.handR[1] * p.squash >= 0.7, `gun hand height ${p.handR[1] * p.squash}`);
    const sh = bodyPoint(S, p, S.shoulderR);
    assert.ok(dist(sh, p.handR) <= S.armLength, `gun hand out of reach: ${dist(sh, p.handR)}`);
    assert.ok(p.handR[1] > sh[1] + 0.3, 'gun hand is raised');
  }
});
test('coverBlindTallL: handL out past x 0.5 at shoulder height +- 0.15, handR on its own side; R mirrors it', () => {
  for (let i = 0; i <= 50; i++) {
    const t = (i / 50) * 1.6, L = samplePose('coverBlindTallL', t, S), R = samplePose('coverBlindTallR', t, S);
    const shL = bodyPoint(S, L, S.shoulderL)[1], shR = bodyPoint(S, R, S.shoulderR)[1];
    assert.ok(L.handL[0] > 0.5 && Math.abs(L.handL[1] - shL) <= 0.15, `L out hand ${L.handL}`);
    assert.ok(L.handR[0] < -0.15, 'L other hand on its own side');
    assert.ok(R.handR[0] < -0.5 && Math.abs(R.handR[1] - shR) <= 0.15, `R out hand ${R.handR}`);
    assert.ok(R.handL[0] > 0.15, 'R other hand on its own side');
    assert.ok(dist(bodyPoint(S, L, S.shoulderL), L.handL) <= S.armLength && dist(bodyPoint(S, R, S.shoulderR), R.handR) <= S.armLength, 'out of reach');
  }
});

test('crawl: finite, loops, hips <= 0.35, a hand and a foot within 0.1 of the floor at their lowest, arms never across the body, limbs in reach', () => {
  assert.equal(CLIPS.crawl.loop, true);
  let lowHand = 9, lowFoot = 9;
  for (let i = 0; i <= 100; i++) {
    const p = samplePose('crawl', (i / 100) * CLIPS.crawl.duration, S);
    assert.ok(flat(p).every(Number.isFinite));
    assert.ok(p.hipsY <= 0.35 && p.lean > 0.9, `hips ${p.hipsY} lean ${p.lean}`);
    assert.ok(p.footL[1] >= 0 && p.footR[1] >= 0 && p.handL[1] >= 0 && p.handR[1] >= 0);
    assert.ok(p.handL[0] > 0.15 && p.handR[0] < -0.15, 'arms cross or hug the belly');
    assert.ok(p.handL[2] > 0.2 && p.handR[2] > 0.2, 'hands reach ahead');
    assert.ok(p.footL[2] < 0 && p.footR[2] < 0, 'feet trail');
    lowHand = Math.min(lowHand, p.handL[1], p.handR[1]); lowFoot = Math.min(lowFoot, p.footL[1], p.footR[1]);
    assert.ok(dist(bodyPoint(S, p, S.shoulderL), p.handL) <= S.armLength && dist(bodyPoint(S, p, S.shoulderR), p.handR) <= S.armLength, 'hand out of reach');
    assert.ok(dist(bodyPoint(S, p, S.hipL), [p.footL[0], p.footL[1] + S.ankleHeight, p.footL[2]]) <= S.legLength, 'foot out of reach');
  }
  assert.ok(lowHand <= 0.1 && lowFoot <= 0.1, `lowest hand ${lowHand} foot ${lowFoot}`);
  const a = flat(samplePose('crawl', 0, S)), z = flat(samplePose('crawl', 1.0, S));
  a.forEach((v, k) => assert.ok(Math.abs(v - z[k]) < 1e-6));
  // the legs push alternately: the feet are never at the same z
  const q = samplePose('crawl', 0.1, S);
  assert.ok(Math.abs(q.footL[2] - q.footR[2]) > 0.02);
});
test('Associate in coverLow with lowDrawBack: head top <= 0.95 and the head behind the wall face, as for Doc', () => {
  const standoff = TUNING.move.radius + TUNING.cover.gap, back = TUNING.cover.lowDrawBack;
  for (let i = 0; i <= 50; i++) {
    const p = samplePose('coverLow', (i / 50) * CLIPS.coverLow.duration, S);
    const pts = [[0.3, 0.2], [0.5, 0.15], [0.1, 0.17], [0.59, 0.05], [0.6, 0], [0.3, -0.235]]
      .map(([y, z]) => bodyPoint(S, p, [0, S.neckY + y * Math.cos(p.headPitch) - z * Math.sin(p.headPitch), y * Math.sin(p.headPitch) + z * Math.cos(p.headPitch)]));
    assert.ok(Math.max(...pts.map(q => q[1])) * p.squash <= 0.95);
    assert.ok(Math.max(...pts.map(q => q[2])) / Math.sqrt(p.squash) - back <= standoff);
  }
});

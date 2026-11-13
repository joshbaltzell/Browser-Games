import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TOBBLE } from '../src/actors/tobble.js';
import { ASSOCIATE } from '../src/actors/associate.js';
import { pickTobbleClip, tobbleDrawBack, createTobbleView } from '../src/actors/tobbleView.js';
import { createTobble } from '../src/actors/tobbleBrain.js';
import { samplePose, bodyPoint } from '../src/actors/poses.js';
import { padLook } from '../src/render/padView.js';
import { PALETTE } from '../src/render/palette.js';
import { TUNING } from '../src/tuning.js';

test('TOBBLE: mint skin, Associate proportions; scaled 0.7 his coverLow head top (with the scaled draw-back) is <= 0.95 m and behind the wall face', () => {
  assert.equal(TOBBLE.colors.skin, PALETTE.tobbleMint);
  for (const k of ['height', 'hipHeight', 'armLength', 'legLength']) assert.equal(TOBBLE[k], ASSOCIATE[k]);
  const sc = TUNING.tobble.scale, standoff = TUNING.move.radius + TUNING.cover.gap, back = TUNING.cover.lowDrawBack * sc;
  for (let i = 0; i <= 50; i++) {
    const p = samplePose('coverLow', (i / 50) * 2.4, TOBBLE);
    const top = bodyPoint(TOBBLE, p, [0, TOBBLE.height, 0])[1] * p.squash * sc;
    assert.ok(top <= 0.95, `head top ${top}`);
    // The furthest forward the drawn body reaches (hands) sits behind the wall face: back from the stand point.
    const fwd = Math.max(p.handL[2], p.handR[2]) / Math.sqrt(p.squash) * sc - back;
    assert.ok(fwd <= standoff + 0.05, `forward ${fwd} past ${standoff}`);
  }
});

test('pickTobbleClip covers every Tobble state; shoot picks coverPop on low and aim on tall', () => {
  const low = { kind: 'low' }, tall = { kind: 'tall' };
  const T = (o) => ({ state: 'idle', point: null, kneeling: false, downed: false, ...o });
  assert.equal(pickTobbleClip(T({ state: 'idle' }), 0), 'idle');
  assert.equal(pickTobbleClip(T({ state: 'idle' }), 4), 'run');
  assert.equal(pickTobbleClip(T({ state: 'follow' }), 5), 'run');
  assert.equal(pickTobbleClip(T({ state: 'follow' }), 0.1), 'idle');
  assert.equal(pickTobbleClip(T({ state: 'sidestep' }), 5), 'run');
  assert.equal(pickTobbleClip(T({ state: 'cover', point: low })), 'coverLow');
  assert.equal(pickTobbleClip(T({ state: 'cover', point: tall })), 'coverTall');
  assert.equal(pickTobbleClip(T({ state: 'shoot', point: low })), 'coverPop');
  assert.equal(pickTobbleClip(T({ state: 'shoot', point: tall })), 'aim');
  assert.equal(pickTobbleClip(T({ state: 'revive', kneeling: true })), 'revive');
  assert.equal(pickTobbleClip(T({ state: 'revive', kneeling: false }), 4), 'run');
  assert.equal(pickTobbleClip(T({ state: 'downed', downed: true })), 'crawl');
  assert.equal(tobbleDrawBack(T({ state: 'cover', point: low, pop: 0 })), 1);
  assert.equal(tobbleDrawBack(T({ state: 'shoot', point: low, pop: 1 })), 0);
  assert.equal(tobbleDrawBack(T({ state: 'cover', point: tall, pop: 0 })), 0);
  assert.equal(tobbleDrawBack(T({ state: 'downed', point: low, downed: true })), 0);
});

test('padLook: open pulses gel with steam; closed is ink with no steam; dormant and spent are lilac', () => {
  assert.deepEqual(padLook('open'), { ring: PALETTE.gel, pulse: true, steam: true });
  assert.deepEqual(padLook('closed'), { ring: PALETTE.ink, pulse: false, steam: false });
  for (const s of ['dormant', 'spent', 'nonsense']) assert.deepEqual(padLook(s), { ring: PALETTE.lilac, pulse: false, steam: false });
});

test('createTobbleView: scales by tobble.scale, lifts popLift when popped, draws back from low cover, shows the plus only while downed, hides nothing else', () => {
  const t = createTobble({ pos: [1, 0, 2], yaw: 0 });
  const v = createTobbleView(t);
  v.update(1, 1 / 60);
  assert.ok(Math.abs(v.group.scale.x - TUNING.tobble.scale) < 1e-9);
  assert.equal(v.plus.visible, false);
  t.point = { kind: 'low', normal: [0, -1], tangent: [1, 0], pos: [1, 2], index: 0 };
  t.state = 'cover'; t.pop = 0;
  for (let i = 0; i < 30; i++) v.update(1, 1 / 60);
  assert.ok(Math.abs(v.group.position.z - (2 - TUNING.cover.lowDrawBack * TUNING.tobble.scale)) < 1e-9, `z ${v.group.position.z}`);
  assert.equal(v.group.position.y, 0);
  t.state = 'shoot'; t.pop = 1;
  for (let i = 0; i < 30; i++) v.update(1, 1 / 60);
  assert.ok(Math.abs(v.group.position.z - 2) < 1e-9);
  assert.ok(Math.abs(v.group.position.y - TUNING.tobble.popLift) < 1e-9);
  t.point = null; t.pop = 0; t.downed = true; t.state = 'downed';
  v.update(1, 1 / 60);
  assert.equal(v.plus.visible, true);
  const tip = v.tip();
  assert.ok(tip.every(Number.isFinite));
  v.reset();
  assert.equal(v.plus.visible, false);
});

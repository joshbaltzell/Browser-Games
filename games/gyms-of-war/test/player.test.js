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

test('DOC_PLACEHOLDER keeps the Associate heights and limb lengths and changes the look', () => {
  for (const k of ['height', 'hipHeight', 'armLength', 'legLength', 'neckY']) assert.equal(DOC_PLACEHOLDER[k], ASSOCIATE[k]);
  // The head is the Associate's, sunk a little between the shoulders (centerY only).
  assert.deepEqual({ ...DOC_PLACEHOLDER.head, centerY: ASSOCIATE.head.centerY }, ASSOCIATE.head);
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

test('pickClip: blind low -> coverBlindLow; blind at a left tall end -> coverBlindTallL, right -> R; firing at rest in move -> aim', () => {
  const cv = (kind, blind, extra = {}) => ({ state: 'cover', coverTuning: TUNING.cover, cover: { edge: { kind, normal: [0, -1], tangent: [1, 0], length: 4, open: [true, true], ...extra.edge }, pop: 0, blind, popEnd: extra.popEnd ?? 0, t: extra.t ?? 0 }, ...extra.mover });
  assert.equal(pickClip(fake(cv('low', 1))).name, 'coverBlindLow');
  assert.equal(pickClip(fake(cv('low', 0.4))).name, 'coverLow');
  assert.equal(pickClip(fake(cv('low', 0.5))).name, 'coverBlindLow');
  const names = [1, -1].map(end => pickClip(fake(cv('tall', 1, { popEnd: end }))).name);
  assert.ok(names.every(n => n === 'coverBlindTallL' || n === 'coverBlindTallR'));
  assert.notEqual(names[0], names[1]);
  assert.equal(pickClip(fake(cv('tall', 0))).name, 'coverTall');
  assert.equal(pickClip(fake({ v: 0.1, firing: true })).name, 'aim');
  assert.equal(pickClip(fake({ v: 0.1 })).name, 'idle');
  assert.equal(pickClip(fake({ v: 4.5, firing: true })).name, 'run');
});
test('lowDrawBackWeight falls with blind as with pop', () => {
  const low = { kind: 'low', normal: [0, -1] };
  near(lowDrawBackWeight(fake({ state: 'cover', cover: { edge: low, pop: 0, blind: 0.25 }, scratch: {} })), 0.75, 1e-12);
  assert.equal(lowDrawBackWeight(fake({ state: 'cover', cover: { edge: low, pop: 0, blind: 1 }, scratch: {} })), 0);
  near(lowDrawBackWeight(fake({ state: 'cover', cover: { edge: low, pop: 0.5, blind: 0.25 }, scratch: {} })), 0.5, 1e-12);
});
test('createPlayerView: blind behind low cover the body is drawn blindDrawBack from the wall', () => {
  const m = fake({ state: 'cover', entries: 1, pos: [0, 0, 1], prevPos: [0, 0, 1], coverTuning: TUNING.cover, slams: 0,
    cover: { edge: { kind: 'low', normal: [0, -1] }, pop: 0, blind: 1 }, scratch: {} });
  const v = createPlayerView(m);
  for (let i = 0; i < 40; i++) v.update(1, 1 / 60);
  near(v.group.position.z, 1 - TUNING.cover.blindDrawBack, 1e-9);
});
test('createPlayerView: a shot squashes the gun along the barrel and it settles within gunSquashTime; the gun follows the hand', () => {
  const m = fake({ coverTuning: TUNING.cover, slams: 0 });
  const v = createPlayerView(m);
  const aim = { dir: [0, 0, 1], stance: 'aim', weapon: 'regret', shot: false };
  v.update(1, 1 / 60, aim);
  near(v.gun.group.scale.z, 1, 1e-9);
  const fb = TUNING.feedback;
  aim.shot = true; v.update(1, fb.gunSquashTime / 2, aim); aim.shot = false;
  assert.ok(v.gun.group.scale.z < 1 - fb.gunSquash * 0.9, `scale ${v.gun.group.scale.z}`);
  assert.ok(v.gun.group.scale.x > 1);
  assert.ok(v.rig.root.parent.rotation.x < 0, 'the body is jolted back');
  v.update(1, fb.gunSquashTime, aim);
  near(v.gun.group.scale.z, 1, 1e-9); near(v.rig.root.parent.rotation.x, 0, 1e-9);
  // The gun is at the right hand, and pointing along the aim direction.
  v.group.updateMatrixWorld(true);
  const hand = new THREE.Vector3(); v.rig.root.getObjectByName('body').children[2].getWorldPosition(hand);
  const g = new THREE.Vector3(); v.gun.group.getWorldPosition(g);
  assert.ok(g.distanceTo(hand) < 1e-6, `gun ${g.toArray()} hand ${hand.toArray()}`);
  const tip = v.gunTip([0, 0, 0]);
  assert.ok(tip[2] > g.z + 0.4, 'the tip is out along the barrel');
  v.update(1, 1 / 60, { dir: [0, 0, 1], stance: null, weapon: 'pistol', shot: false });
  assert.equal(v.gun.group.children.find(c => c.name === 'pistol').visible, true);
  assert.equal(v.gun.group.children.find(c => c.name === 'rifle').visible, false);
});
test('blind over low cover: the pitched-up gun barrel clears a 1 m wall from the raised hand', () => {
  const m = fake({ state: 'cover', entries: 1, pos: [0, 0, 1], prevPos: [0, 0, 1], coverTuning: TUNING.cover, slams: 0,
    cover: { edge: { kind: 'low', normal: [0, -1] }, pop: 0, blind: 1 }, scratch: {} });
  const v = createPlayerView(m);
  for (let i = 0; i < 60; i++) v.update(1, 1 / 60, { dir: [0, 0, -1], stance: 'blind', weapon: 'regret', shot: false });
  v.group.updateMatrixWorld(true);
  const tip = v.gunTip([0, 0, 0]);
  assert.ok(tip[1] >= 1.02, `gun tip height ${tip[1]}`);
});

test('pickClip: downed -> crawl at speed / crawlSpeed, held at speed 0', () => {
  assert.deepEqual(pickClip(fake({ state: 'downed', v: 0 })), { name: 'crawl', rate: 0 });
  assert.deepEqual(pickClip(fake({ state: 'downed', v: TUNING.move.crawlSpeed })), { name: 'crawl', rate: 1 });
  assert.equal(pickClip(fake({ state: 'downed', v: 0.5 * TUNING.move.crawlSpeed })).rate, 0.5);
});

test('createPlayerView: a downed player who is not moving still fades into the crawl pose (the clip holds, the fade does not)', () => {
  const m = fake({ state: 'downed', entries: 1, coverTuning: TUNING.cover, slams: 0, v: 0 });
  const v = createPlayerView(m);
  v.update(1, 1 / 60);
  const standing = v.rig.root.getObjectByName('hips').position.y;
  for (let i = 0; i < 60; i++) v.update(1, 1 / 60);
  assert.equal(v.anim.current(), 'crawl');
  assert.ok(v.rig.root.getObjectByName('hips').position.y < 0.4 && v.rig.root.getObjectByName('hips').position.y < standing, 'hips are low after a second');
});

test('pickClip: bash -> bash, rev -> aim, execute -> bash looped, reviveTobble -> revive, grenadeAim in move -> throw held at the wind-up (rate 0), a moving aim-walk keeps running', () => {
  const b = pickClip(fake({ state: 'bash' }));
  assert.equal(b.name, 'bash'); near(b.rate, CLIPS.bash.duration / TUNING.melee.bashTime, 1e-9);
  assert.equal(pickClip(fake({ state: 'rev' })).name, 'aim');
  const e = pickClip(fake({ state: 'execute' }));
  assert.equal(e.name, 'bash'); assert.equal(e.loop, true);
  assert.equal(pickClip(fake({ state: 'reviveTobble' })).name, 'revive');
  const t = pickClip(fake({ grenadeAim: true }));
  assert.equal(t.name, 'throw'); assert.equal(t.rate, 0); near(t.at, 0.3 * CLIPS.throw.duration, 1e-9);
  assert.equal(pickClip(fake({ grenadeAim: true, v: 2.2 })).name, 'run');
});

test('Doc is human and buff: tan skin and plain eyes (not the alien green), broader shoulders, chest, neck and arms than the Rep; Reps and Trainers stay alien', async () => {
  const { ALIEN_SKIN, ALIEN_EYES, TRAINER, OVERLORD } = await import('../src/actors/associate.js');
  const { PALETTE } = await import('../src/render/palette.js');
  assert.equal(DOC_PLACEHOLDER.colors.skin, PALETTE.docSkin);
  assert.notEqual(DOC_PLACEHOLDER.colors.skin, ALIEN_SKIN);
  assert.ok(!DOC_PLACEHOLDER.face.eyeGlow);
  assert.notEqual(DOC_PLACEHOLDER.colors.rimColor, ASSOCIATE.colors.rimColor);
  assert.equal(ASSOCIATE.colors.skin, ALIEN_SKIN);
  assert.equal(TRAINER.colors.skin, ALIEN_SKIN);
  assert.equal(ASSOCIATE.face.eyeGlow, ALIEN_EYES.eyeGlow);
  assert.notEqual(OVERLORD.colors.skin, PALETTE.docSkin);
  const wide = s => Math.max(...s.torso.shirt.map(p => p[0]));
  assert.ok(wide(DOC_PLACEHOLDER) >= wide(ASSOCIATE) * 1.15);
  assert.ok(DOC_PLACEHOLDER.shoulderL[0] >= ASSOCIATE.shoulderL[0] * 1.35);
  assert.ok(DOC_PLACEHOLDER.armRadius >= ASSOCIATE.armRadius * 1.3);
  assert.ok(DOC_PLACEHOLDER.neck.radius >= 0.09);
  // V-taper: the chest is clearly wider than the waist.
  const sh = DOC_PLACEHOLDER.torso.shirt;
  assert.ok(wide(DOC_PLACEHOLDER) >= sh.find(p => p[1] >= 0.07)[0] * 1.25);
});
test('Doc stays within the cover pose rules: head top at most 0.95 m in low cover and arms never across the body', async () => {
  const { samplePose, CLIPS, bodyPoint } = await import('../src/actors/poses.js');
  const S = DOC_PLACEHOLDER;
  for (const n of ['coverLow', 'coverLowMove', 'coverBlindLow'])
    for (let i = 0; i <= 50; i++) {
      const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
      assert.ok(bodyPoint(S, p, [0, S.height, 0])[1] * p.squash <= 0.95, `${n} head top`);
      assert.ok(p.handL[0] > 0.15 && p.handR[0] < -0.15, `${n} arms cross`);
    }
  for (const n of ['idle', 'run', 'coverTall', 'coverTallMove', 'coverPop', 'coverBlindTallL', 'coverBlindTallR'])
    for (let i = 0; i <= 50; i++) {
      const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
      assert.ok(p.handL[0] > 0.1 && p.handR[0] < -0.1 || n === 'run', `${n} arms cross ${p.handL} ${p.handR}`);
    }
});

test('Doc low cover: the real crown (skull, hair spikes, goggles and headband, every vertex of the head mesh) stays at most 0.95 m up', async () => {
  const THREE = await import('three');
  const { buildRig } = await import('../src/actors/rig.js');
  const { samplePose, CLIPS } = await import('../src/actors/poses.js');
  const S = DOC_PLACEHOLDER;
  const rig = buildRig(S);
  const head = rig.root.getObjectByName('headMesh');
  const pos = head.geometry.getAttribute('position'), v = new THREE.Vector3();
  for (const n of ['coverLow', 'coverLowMove', 'coverBlindLow'])
    for (let i = 0; i <= 50; i++) {
      rig.setPose(samplePose(n, (i / 50) * CLIPS[n].duration, S), 0);
      rig.update(1 / 60);
      rig.root.updateMatrixWorld(true);
      let top = 0;
      for (let k = 0; k < pos.count; k++) top = Math.max(top, v.fromBufferAttribute(pos, k).applyMatrix4(head.matrixWorld).y);
      assert.ok(top <= 0.95, `${n} frame ${i}: crown ${top.toFixed(3)}`);
    }
});

import * as THREE from 'three';
import { TUNING } from '../tuning.js';
import { CLIPS, RUN_SPEED } from './poses.js';
import { buildRig } from './rig.js';
import { createAnimator } from './animator.js';
import { DOC_PLACEHOLDER } from './docPlaceholder.js';
import { headVisibleFor } from '../render/cameraRig.js';
import { coverEdgeOf, cameraSideOf } from './coverStates.js';
import { createGunView } from './gunView.js';

// The player on screen: a rig that follows a Mover. The mover is the truth;
// this only draws it, interpolated between fixed steps.

const TAU = Math.PI * 2;
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const wrap = a => a - TAU * Math.round(a / TAU);
// The panel can set vaultTime to 0; floor it so the vault fraction stays finite.
const MIN_VAULT_TIME = 1e-3;
const TUMBLE_Y = 0.5; // the roll spins about this height

// Which clip a mover state plays and how fast.
export function pickClip(mover, tuning = mover.tuning || TUNING.move) {
  const s = mover.state, v = mover.speed();
  if (s === 'roll') return { name: 'roll', rate: CLIPS.roll.duration / tuning.rollTime };
  if (s === 'sprint') return { name: 'sprint', rate: clamp(v / RUN_SPEED, tuning.sprintRateMin, tuning.sprintRateMax) };
  if (s === 'move') {
    if (v > tuning.runClipMinSpeed) return { name: 'run', rate: clamp(v / RUN_SPEED, tuning.runRateMin, tuning.runRateMax) };
    if (mover.aiming || mover.firing) return { name: 'aim', rate: 1 };
  }
  if (s === 'coverSlide') return { name: coverEdgeOf(mover).kind === 'low' ? 'coverLow' : 'coverTall', rate: 1 };
  if (s === 'coverSwap') return { name: 'sprint', rate: clamp(v / RUN_SPEED, tuning.sprintRateMin, tuning.sprintRateMax) };
  if (s === 'cover' && mover.cover) {
    const c = mover.cover, ct = mover.coverTuning || TUNING.cover, low = c.edge.kind === 'low';
    if (c.pop >= 0.5) return { name: 'coverPop', rate: 1 };
    if (c.blind >= 0.5) return { name: low ? 'coverBlindLow' : cameraSideOf(mover) === -1 ? 'coverBlindTallL' : 'coverBlindTallR', rate: 1 };
    if (v > tuning.runClipMinSpeed) return { name: low ? 'coverLowMove' : 'coverTallMove', rate: clamp(v / ct.moveSpeed, 0.5, 2) };
    return { name: low ? 'coverLow' : 'coverTall', rate: 1 };
  }
  if (s === 'vault') return { name: 'vault', rate: CLIPS.vault.duration / Math.max((mover.coverTuning || TUNING.cover).vaultTime, MIN_VAULT_TIME) };
  return { name: 'idle', rate: 1 };
}

// How far (0 to 1) the drawn body is drawn back from a low wall: 1 tucked behind it, rising as a
// slide into low cover arrives, falling as the player pops up over it or fires blind. 0 anywhere else.
export function lowDrawBackWeight(mover) {
  const edge = (mover.state === 'cover' || mover.state === 'coverSlide') ? coverEdgeOf(mover) : null;
  if (!edge || edge.kind !== 'low') return 0;
  if (mover.state === 'coverSlide') return clamp(mover.stateTime / Math.max(mover.scratch.dur, 1e-6), 0, 1);
  return mover.cover ? clamp(1 - Math.max(mover.cover.pop, mover.cover.blind || 0), 0, 1) : 0;
}

// Height of a vault's arc at fraction u: 0 at both ends, h at the middle.
export const vaultHop = (u, h) => 4 * h * u * (1 - u);
// A squash that rises and falls over `time` seconds, 0 outside [0, time).
export const slamSquash = (t, amount, time) => (t >= 0 && t < time ? amount * Math.sin(Math.PI * t / time) : 0);

// How far round the roll's spin has turned at fraction u of the roll.
export function rollSpin(u) {
  if (u <= 0.08) return 0;
  if (u >= 0.9) return TAU;
  const k = (u - 0.08) / 0.82;
  return TAU * k * k * (3 - 2 * k);
}

// How far the gun points up while blind firing over low cover: the hand cannot clear the wall, so the barrel does.
export const BLIND_LOW_GUN_PITCH = 0.95;
// How far the gun points down when no stance has it up (rad).
const GUN_DOWN = 0.6;
const _v = new THREE.Vector3();
const _dir = [0, 0, 1];
const _tip = [0, 0, 0];

export function createPlayerView(mover, spec = DOC_PLACEHOLDER) {
  const rig = buildRig(spec);
  const anim = createAnimator(rig);
  const group = new THREE.Group();
  group.name = 'player';
  const tumble = new THREE.Group();
  tumble.position.y = TUMBLE_Y;
  rig.root.position.y = -TUMBLE_Y;
  tumble.add(rig.root);
  group.add(tumble);
  group.add(rig.shadow); // on the group so it never tumbles
  const bodyNode = rig.root.getObjectByName('body');
  const hands = { L: bodyNode.children[1], R: bodyNode.children[2] }; // buildRig adds hips, then handL, handR
  const gun = createGunView();
  group.add(gun.group);
  let jolt = Infinity;
  const headNode = rig.root.getObjectByName('head');
  const headCentre = new THREE.Vector3();
  let headShown = true;
  // Hides the head (and face) while the lens is too close to it; returns whether it is drawn.
  function fadeHeadFor(lens, hideDist, margin) {
    headNode.getWorldPosition(headCentre);
    headCentre.y += rig.spec.head.centerY;
    const d = Math.hypot(lens[0] - headCentre.x, lens[1] - headCentre.y, lens[2] - headCentre.z);
    headShown = headVisibleFor(d, headShown, hideDist, margin);
    headNode.visible = headShown;
    return headShown;
  }
  let drawW = 0, drawNx = 0, drawNz = 0;
  let clip = '', entries = -1, slams = mover.slams || 0, slamT = Infinity;

  function update(alpha, dt, aim) {
    const p = mover.pos, q = mover.prevPos;
    // Low cover draws the body back from the wall so the head and hands sit behind it; the mover,
    // the collision and the camera target stay where they are.
    const ct = mover.coverTuning || TUNING.cover;
    const target = lowDrawBackWeight(mover);
    drawW = ct.popTime > 0 ? Math.max(target, drawW + clamp(target - drawW, -dt / ct.popTime, dt / ct.popTime)) : target;
    const blindW = mover.state === 'cover' && mover.cover && mover.cover.edge.kind === 'low' ? clamp(mover.cover.blind || 0, 0, 1) : 0;
    if (target > 0 || blindW > 0) { const e = coverEdgeOf(mover); drawNx = e.normal[0]; drawNz = e.normal[1]; }
    const back = drawW * ct.lowDrawBack + blindW * ct.blindDrawBack;
    group.position.set(q[0] + (p[0] - q[0]) * alpha + drawNx * back, q[1] + (p[1] - q[1]) * alpha, q[2] + (p[2] - q[2]) * alpha + drawNz * back);
    group.rotation.y = mover.prevFacing + wrap(mover.facing - mover.prevFacing) * alpha;
    const c = pickClip(mover);
    if (c.name !== clip || mover.entries !== entries) {
      anim.play(c.name, c.name === 'roll' ? { fade: 0.05 } : undefined);
      clip = c.name; entries = mover.entries;
    }
    anim.update(dt * c.rate);
    rig.update(dt);
    // A shot jolts the body back for gunSquashTime.
    const fb = TUNING.feedback, joltTime = Math.max(fb.gunSquashTime, 1e-6);
    jolt = aim && aim.shot ? dt : jolt + dt;
    const kick = jolt < joltTime ? fb.bodyKick * Math.sin(Math.PI * jolt / joltTime) : 0;
    tumble.rotation.x = (mover.state === 'roll' ? rollSpin(mover.stateTime / mover.tuning.rollTime) : 0) - kick;
    if ((mover.slams || 0) !== slams) { slams = mover.slams || 0; slamT = 0; } else slamT += dt;
    const hop = mover.state === 'vault' ? vaultHop(clamp(mover.stateTime / Math.max(ct.vaultTime, MIN_VAULT_TIME), 0, 1), ct.vaultHop) : 0;
    const k = slamSquash(slamT, ct.slamSquash, ct.slamSquashTime);
    tumble.scale.set(1 + k / 2, 1 - k, 1 + k / 2);
    tumble.position.y = TUMBLE_Y * (1 - k) + hop; // the soles stay on the floor while squashed
    updateGun(c.name, dt, aim);
  }

  // The gun sits at the drawn hand (the open-end-side hand at a tall blind end, else the right) and points along the
  // shot while a stance is up, and along the facing, pitched down, otherwise. All in the group's space.
  function updateGun(clipName, dt, aim) {
    group.updateMatrixWorld(true);
    const hand = clipName === 'coverBlindTallL' ? hands.L : hands.R;
    hand.getWorldPosition(_v);
    group.worldToLocal(_v);
    if (aim && aim.stance && clipName === 'coverBlindLow') {
      _dir[0] = 0; _dir[1] = Math.sin(BLIND_LOW_GUN_PITCH); _dir[2] = Math.cos(BLIND_LOW_GUN_PITCH);
    } else if (aim && aim.stance && aim.dir) {
      const cy = Math.cos(group.rotation.y), sy = Math.sin(group.rotation.y);
      _dir[0] = aim.dir[0] * cy - aim.dir[2] * sy; _dir[1] = aim.dir[1]; _dir[2] = aim.dir[0] * sy + aim.dir[2] * cy;
    } else {
      _dir[0] = 0; _dir[1] = -Math.sin(GUN_DOWN); _dir[2] = Math.cos(GUN_DOWN);
    }
    if (aim && aim.weapon) gun.setWeapon(aim.weapon);
    gun.place([_v.x, _v.y, _v.z], _dir);
    if (aim && aim.shot) gun.shot();
    gun.update(dt);
    gun.group.visible = mover.state !== 'roll';
  }
  // The barrel end in world space, for the muzzle flash and the tracer.
  function gunTip(out = [0, 0, 0]) {
    group.updateMatrixWorld(true);
    gun.tip(_tip);
    _v.set(_tip[0], _tip[1], _tip[2]).applyMatrix4(group.matrixWorld);
    out[0] = _v.x; out[1] = _v.y; out[2] = _v.z;
    return out;
  }

  function dispose() {
    rig.dispose();
    rig.shadow.geometry.dispose();
    group.removeFromParent();
  }

  return { group, update, dispose, rig, anim, fadeHeadFor, gun, gunTip };
}

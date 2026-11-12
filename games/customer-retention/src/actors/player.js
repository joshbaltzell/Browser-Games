import * as THREE from 'three';
import { TUNING } from '../tuning.js';
import { CLIPS, RUN_SPEED } from './poses.js';
import { buildRig } from './rig.js';
import { createAnimator } from './animator.js';
import { DOC_PLACEHOLDER } from './docPlaceholder.js';
import { coverEdgeOf } from './coverStates.js';

// The player on screen: a rig that follows a Mover. The mover is the truth;
// this only draws it, interpolated between fixed steps.

const TAU = Math.PI * 2;
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const wrap = a => a - TAU * Math.round(a / TAU);
const TUMBLE_Y = 0.5; // the roll spins about this height

// Which clip a mover state plays and how fast.
export function pickClip(mover, tuning = mover.tuning || TUNING.move) {
  const s = mover.state, v = mover.speed();
  if (s === 'roll') return { name: 'roll', rate: CLIPS.roll.duration / tuning.rollTime };
  if (s === 'sprint') return { name: 'sprint', rate: clamp(v / RUN_SPEED, tuning.sprintRateMin, tuning.sprintRateMax) };
  if (s === 'move') {
    if (v > tuning.runClipMinSpeed) return { name: 'run', rate: clamp(v / RUN_SPEED, tuning.runRateMin, tuning.runRateMax) };
    if (mover.aiming) return { name: 'aim', rate: 1 };
  }
  if (s === 'coverSlide') return { name: coverEdgeOf(mover).kind === 'low' ? 'coverLow' : 'coverTall', rate: 1 };
  if (s === 'coverSwap') return { name: 'sprint', rate: clamp(v / RUN_SPEED, tuning.sprintRateMin, tuning.sprintRateMax) };
  if (s === 'cover' && mover.cover) {
    const c = mover.cover, ct = mover.coverTuning || TUNING.cover, low = c.edge.kind === 'low';
    if (c.pop >= 0.5) return { name: 'coverPop', rate: 1 };
    if (v > tuning.runClipMinSpeed) return { name: low ? 'coverLowMove' : 'coverTallMove', rate: clamp(v / ct.moveSpeed, 0.5, 2) };
    return { name: low ? 'coverLow' : 'coverTall', rate: 1 };
  }
  if (s === 'vault') return { name: 'vault', rate: CLIPS.vault.duration / (mover.coverTuning || TUNING.cover).vaultTime };
  return { name: 'idle', rate: 1 };
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
  let clip = '', entries = -1, slams = mover.slams || 0, slamT = Infinity;

  function update(alpha, dt) {
    const p = mover.pos, q = mover.prevPos;
    group.position.set(q[0] + (p[0] - q[0]) * alpha, q[1] + (p[1] - q[1]) * alpha, q[2] + (p[2] - q[2]) * alpha);
    group.rotation.y = mover.prevFacing + wrap(mover.facing - mover.prevFacing) * alpha;
    const c = pickClip(mover);
    if (c.name !== clip || mover.entries !== entries) {
      anim.play(c.name, c.name === 'roll' ? { fade: 0.05 } : undefined);
      clip = c.name; entries = mover.entries;
    }
    anim.update(dt * c.rate);
    rig.update(dt);
    tumble.rotation.x = mover.state === 'roll' ? rollSpin(mover.stateTime / mover.tuning.rollTime) : 0;
    const ct = mover.coverTuning || TUNING.cover;
    if ((mover.slams || 0) !== slams) { slams = mover.slams || 0; slamT = 0; } else slamT += dt;
    const hop = mover.state === 'vault' ? vaultHop(clamp(mover.stateTime / ct.vaultTime, 0, 1), ct.vaultHop) : 0;
    const k = slamSquash(slamT, ct.slamSquash, ct.slamSquashTime);
    tumble.scale.set(1 + k / 2, 1 - k, 1 + k / 2);
    tumble.position.y = TUMBLE_Y * (1 - k) + hop; // the soles stay on the floor while squashed
  }

  function dispose() {
    rig.dispose();
    rig.shadow.geometry.dispose();
    group.removeFromParent();
  }

  return { group, update, dispose, rig, anim };
}

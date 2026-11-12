// Where a shot can be fired from: the fire stance, and the logic muzzle for each. Logic only; reads the mover.
import { TUNING } from '../tuning.js';
import { pointInBoxes } from '../world/collide.js';
import { edgePoint } from '../world/cover.js';
import { cameraSideOf } from '../actors/coverStates.js';

// 'aim' | 'hip' | 'blind' | null. Null means no fire: sprint, roll, slide, vault, swap, a half-risen pop or blind.
export function fireStance(m) {
  if (m.state === 'move') return m.aiming ? 'aim' : m.firing ? 'hip' : null;
  if (m.state === 'cover' && m.cover) {
    if (m.cover.pop === 1) return 'aim';
    if (m.cover.blind === 1) return 'blind';
  }
  return null;
}

const pt = [0, 0];

// The muzzle in world space, written into out. aim and hip: ahead of the body along the camera heading, to the camera side.
// blind: past the wall face (low cover, above its top) or past the corner (an open tall end).
// When the camera looks into a wall, the aim and hip offset shortens until the muzzle is clear of every box.
export function muzzleOf(m, stance, camYaw, combat = TUNING.combat, out = [0, 0, 0]) {
  if (stance === 'blind' && m.cover) {
    const c = m.cover, e = c.edge, S = m.tuning.radius + m.coverTuning.gap;
    const n = e.normal;
    if (e.kind === 'low') {
      edgePoint(e, c.t, pt);
      out[0] = pt[0] - n[0] * (S + combat.blindReach); out[1] = e.height + combat.blindLift; out[2] = pt[1] - n[1] * (S + combat.blindReach);
    } else {
      const end = c.blindEnd !== 0 ? c.blindEnd : (c.t < e.length - c.t ? -1 : 1);
      edgePoint(e, end < 0 ? 0 : e.length, pt);
      const reach = m.coverTuning.endInset + combat.blindReach;
      out[0] = pt[0] + e.tangent[0] * end * reach - n[0] * S; out[1] = combat.muzzleUp; out[2] = pt[1] + e.tangent[1] * end * reach - n[1] * S;
    }
    return out;
  }
  const side = combat.muzzleRight * cameraSideOf(m);
  const s = Math.sin(camYaw), c = Math.cos(camYaw);
  out[1] = m.pos[1] + combat.muzzleUp;
  // Pull the offset back toward the body when the camera looks into a wall, so the muzzle is never inside a box.
  for (let k = 1; k >= 0; k -= 0.25) {
    out[0] = m.pos[0] + (s * combat.muzzleForward - c * side) * k;
    out[2] = m.pos[2] + (c * combat.muzzleForward + s * side) * k;
    if (k === 0 || !pointInBoxes(m.boxes, out, 0)) break;
  }
  return out;
}

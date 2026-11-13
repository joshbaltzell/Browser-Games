// The damage face model: how red and how unhappy the centre face is, which screen edges glow, and the downed counter.
// Pure maths: no DOM. The HUD draws what this returns.
import { TUNING } from '../tuning.js';
import { forwardOf, rightOf } from '../actors/movement.js';

// Where a shooter is relative to the camera's heading, in radians in (-PI, PI]: 0 straight ahead, +PI/2 to the right.
export function hitAngle(camYaw, playerPos, shooterPos) {
  const dx = shooterPos[0] - playerPos[0], dz = shooterPos[2] - playerPos[2];
  const f = forwardOf(camYaw), r = rightOf(camYaw);
  let a = Math.atan2(dx * r[0] + dz * r[2], dx * f[0] + dz * f[2]);
  if (a <= -Math.PI + 1e-9) a = Math.PI;
  return a;
}

const clamp01 = (v) => Math.max(0, Math.min(1, v));

// hits: [{ t, angle }], t on the same clock as `now`. Returns a fresh object.
export function damageFaceModel({ hp, max, downed, downT, hits = [], now, fb = TUNING.feedback }) {
  const damage = downed ? 1 : (max > 0 ? clamp01(1 - hp / max) : 1);
  const edges = { top: 0, right: 0, bottom: 0, left: 0 };
  for (const h of hits) {
    const w = fb.hitFlashTime > 0 ? clamp01(1 - (now - h.t) / fb.hitFlashTime) : 0;
    if (w <= 0) continue;
    const c = Math.cos(h.angle), s = Math.sin(h.angle);
    edges.top = Math.max(edges.top, w * Math.max(0, c));
    edges.right = Math.max(edges.right, w * Math.max(0, s));
    edges.bottom = Math.max(edges.bottom, w * Math.max(0, -c));
    edges.left = Math.max(edges.left, w * Math.max(0, -s));
  }
  const base = fb.edgeMaxOpacity * damage;
  for (const k of Object.keys(edges)) edges[k] = Math.min(1, base + edges[k]);
  return {
    face: { opacity: fb.faceMaxOpacity * damage, frown: damage, fill: damage },
    edges,
    downed: { show: !!downed, seconds: downed ? Math.ceil(Math.max(0, downT)) : 0 },
  };
}

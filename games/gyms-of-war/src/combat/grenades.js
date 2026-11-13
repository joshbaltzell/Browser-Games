// Kettlebell grenades: throw velocity and origin, the flight (one stepping function shared by the live
// ball and the arc preview), blast damage, the aim solver and the carry bag.
// Logic only: no clock, no DOM, no WebGL. Points are [x, y, z]. g defaults to TUNING.grenade and is read at every use.
import { TUNING } from '../tuning.js';
import { sweepSphere, pointInBoxes } from '../world/collide.js';
import { muzzleOf } from './stance.js';
import { forwardOf, rightOf } from '../actors/movement.js';

const DEG = Math.PI / 180;
const REST_SPEED = 0.3;   // m/s, below this a ball settles on a floor or box top; a bounce slower than this makes no clank
const NUDGE = 1e-6;       // m, a bounced ball is placed this far off the face so the next sweep does not re-hit it
const MAX_SUBSTEPS = 64, MAX_BOUNCES = 4;
const ARC_POINTS = 64;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export function throwVelocity(yaw, pitch, g = TUNING.grenade, out = [0, 0, 0]) {
  const e = clamp(pitch + g.throwLift * DEG, -30 * DEG, 70 * DEG);
  const c = Math.cos(e);
  out[0] = g.throwSpeed * Math.sin(yaw) * c; out[1] = g.throwSpeed * Math.sin(e); out[2] = g.throwSpeed * Math.cos(yaw) * c;
  return out;
}

// In cover: the blind muzzle (above a low wall, past a tall end). Otherwise up 1.6, a little right and forward of the camera heading,
// pulled back toward the body if the camera looks into a wall so the ball never starts inside a box.
export function throwOrigin(m, camYaw, combat = TUNING.combat, out = [0, 0, 0]) {
  if (m.cover) return muzzleOf(m, 'blind', camYaw, combat, out);
  const r = rightOf(camYaw), f = forwardOf(camYaw);
  out[1] = m.pos[1] + 1.6;
  for (let k = 1; k >= 0; k -= 0.25) {
    out[0] = m.pos[0] + (r[0] * 0.2 + f[0] * 0.3) * k;
    out[2] = m.pos[2] + (r[2] * 0.2 + f[2] * 0.3) * k;
    if (k === 0 || !pointInBoxes(m.boxes, out, 0)) break;
  }
  return out;
}

const NORMAL = [0, 0, 0];
// The unit normal of the box face a ball centre at p touches, written into NORMAL: the nearest box, and on it the axis
// the centre lies furthest outside of (the face the expanded-box sweep hit). A centre inside a box leaves through its nearest face.
function faceNormal(boxes, p) {
  let best = null, bestD = Infinity;
  for (const b of boxes) {
    const o0 = Math.max(b.min[0] - p[0], 0, p[0] - b.max[0]), o1 = Math.max(b.min[1] - p[1], 0, p[1] - b.max[1]), o2 = Math.max(b.min[2] - p[2], 0, p[2] - b.max[2]);
    const d = Math.hypot(o0, o1, o2);
    if (d < bestD) { bestD = d; best = b; }
  }
  NORMAL[0] = NORMAL[1] = NORMAL[2] = 0;
  if (!best) { NORMAL[1] = 1; return NORMAL; }
  let axis = 0, away = -Infinity, sign = 1;
  for (let a = 0; a < 3; a++) {
    const lo = best.min[a] - p[a], hi = p[a] - best.max[a];
    const out = Math.max(lo, hi);   // positive when outside on this axis; negative is how deep inside
    if (out > away) { away = out; axis = a; sign = lo > hi ? -1 : 1; }
  }
  NORMAL[axis] = sign;
  return NORMAL;
}

const info = { clank: false, rested: false, up: false, upPos: [0, 0, 0] };
const to = [0, 0, 0];

// Advances a ball by dt in sub-steps of at most ballRadius of travel. Fills info with what happened.
function advance(ball, dt, boxes, g, out) {
  out.clank = false; out.rested = false; out.up = false;
  ball.prevPos[0] = ball.pos[0]; ball.prevPos[1] = ball.pos[1]; ball.prevPos[2] = ball.pos[2];
  if (ball.resting || !(dt > 0)) return;
  const r = Math.max(g.ballRadius, 0.01), G = g.gravity, p = ball.pos, v = ball.vel;
  const travel = Math.hypot(v[0], v[1], v[2]) * dt + 0.5 * G * dt * dt;
  const n = clamp(Math.ceil(travel / r), 1, MAX_SUBSTEPS), sdt = dt / n;
  for (let s = 0; s < n; s++) {
    let rem = sdt;
    for (let bounce = 0; bounce <= MAX_BOUNCES && rem > 0; bounce++) {
      // Exact for constant gravity: position by the average velocity over the span.
      to[0] = p[0] + v[0] * rem; to[1] = p[1] + v[1] * rem - 0.5 * G * rem * rem; to[2] = p[2] + v[2] * rem;
      const t = sweepSphere(boxes, p, to, r);
      if (t >= 1) { p[0] = to[0]; p[1] = to[1]; p[2] = to[2]; v[1] -= G * rem; break; }
      p[0] += (to[0] - p[0]) * t; p[1] += (to[1] - p[1]) * t; p[2] += (to[2] - p[2]) * t;
      v[1] -= G * rem * t;
      const nm = faceNormal(boxes, p), vn = v[0] * nm[0] + v[1] * nm[1] + v[2] * nm[2];
      if (vn < 0) {
        const vt0 = v[0] - nm[0] * vn, vt1 = v[1] - nm[1] * vn, vt2 = v[2] - nm[2] * vn;
        v[0] = vt0 * g.friction - nm[0] * vn * g.restitution;
        v[1] = vt1 * g.friction - nm[1] * vn * g.restitution;
        v[2] = vt2 * g.friction - nm[2] * vn * g.restitution;
        if (-vn >= REST_SPEED) out.clank = true;
        if (nm[1] > 0.7 && !out.up) { out.up = true; out.upPos[0] = p[0] - nm[0] * r; out.upPos[1] = p[1] - nm[1] * r; out.upPos[2] = p[2] - nm[2] * r; }
      }
      p[0] += nm[0] * NUDGE; p[1] += nm[1] * NUDGE; p[2] += nm[2] * NUDGE;
      if (nm[1] > 0.7 && Math.hypot(v[0], v[1], v[2]) < REST_SPEED) {
        v[0] = v[1] = v[2] = 0; ball.resting = true; out.rested = true;
        return;
      }
      rem *= 1 - t;
    }
  }
}

// One fixed step of a ball { pos, vel, prevPos, resting, fuse }. 'clank' (a bounce hard enough to hear), 'rest' (it settled quietly) or null.
// The fuse is the caller's (createGrenades.step).
export function stepBall(ball, dt, boxes, g = TUNING.grenade) {
  advance(ball, dt, boxes, g, info);
  return info.clank ? 'clank' : info.rested ? 'rest' : null;
}

const arcBall = { pos: [0, 0, 0], vel: [0, 0, 0], prevPos: [0, 0, 0], resting: false, fuse: 0 };
const arcInfo = { clank: false, rested: false, up: false, upPos: [0, 0, 0] };

// Fills out (an array of 64 points) with the path every 1/30 s of arcTime, from `from`, stepped at 1/60 exactly as the flight is.
// count is the number of points used (the start is point 0; the path ends early at rest). land is the first touch of an up-facing face, or null.
export function predictArc(from, vel, boxes, g = TUNING.grenade, out) {
  const b = arcBall;
  for (let i = 0; i < 3; i++) { b.pos[i] = from[i]; b.vel[i] = vel[i]; b.prevPos[i] = from[i]; }
  b.resting = false;
  const cap = Math.min(out.length, ARC_POINTS), samples = Math.floor(Math.max(0, g.arcTime) * 30 + 1e-9);
  let count = 0, land = null;
  for (let i = 0; i <= samples && count < cap; i++) {
    const o = out[count++]; o[0] = b.pos[0]; o[1] = b.pos[1]; o[2] = b.pos[2];
    if (i === samples || b.resting) break;
    for (let k = 0; k < 2; k++) {
      advance(b, 1 / 60, boxes, g, arcInfo);
      if (!land && arcInfo.up) land = [arcInfo.upPos[0], arcInfo.upPos[1], arcInfo.upPos[2]];
    }
  }
  return { count, land };
}

export function blastDamage(d, g = TUNING.grenade) {
  if (!(d >= 0)) return 0;
  if (d <= g.killRadius) return g.killDamage;
  if (d >= g.radius) return 0;
  return g.damage * (1 - d / g.radius);
}

// The camera pitch whose throw (no bounces) passes within 0.3 m of `to`, or null. Bisection on the rising branch of height over elevation.
export function solveThrowPitch(from, to, yaw, g = TUNING.grenade) {
  const dx = to[0] - from[0], dz = to[2] - from[2], dy = to[1] - from[1];
  const D = dx * Math.sin(yaw) + dz * Math.cos(yaw);                // along the throw's heading
  const side = Math.abs(dx * Math.cos(yaw) - dz * Math.sin(yaw));   // sideways miss
  if (!(D > 0.01) || side > 0.3) return null;
  const v = g.throwSpeed, G = g.gravity;
  const height = e => { const c = Math.cos(e); return D * Math.tan(e) - G * D * D / (2 * v * v * c * c); };
  const lo0 = -30 * DEG, hi0 = Math.min(70 * DEG, Math.atan(v * v / (G * D)));   // height rises with elevation up to its peak
  if (!(hi0 > lo0) || height(lo0) > dy || height(hi0) < dy) return null;
  let lo = lo0, hi = hi0;
  for (let i = 0; i < 50; i++) { const mid = (lo + hi) / 2; if (height(mid) < dy) lo = mid; else hi = mid; }
  const e = (lo + hi) / 2;
  return Math.abs(height(e) - dy) <= 0.3 ? e - g.throwLift * DEG : null;
}

export function createGrenades(g = TUNING.grenade) {
  const live = [];
  return {
    live,
    // A new ball at `from` with velocity vel. Its fuse starts at g.fuse (or `fuse`); `hostile` marks the Overlord's lob.
    throw(from, vel, fuse = g.fuse, hostile = null) {
      const b = { pos: [from[0], from[1], from[2]], vel: [vel[0], vel[1], vel[2]], prevPos: [from[0], from[1], from[2]], resting: false, fuse, hostile };
      live.push(b);
      return b;
    },
    // Steps every ball and returns [{ type: 'clank' | 'explode', pos }]. A ball explodes once its fuse reaches 0, wherever it is.
    step(dt, boxes) {
      const events = [];
      for (let i = 0; i < live.length; i++) {
        const b = live[i];
        b.fuse -= dt;
        const r = stepBall(b, dt, boxes, g);
        if (r === 'clank' && !b.hostile) events.push({ type: 'clank', pos: [b.pos[0], b.pos[1], b.pos[2]] });
        // A hostile ball (the Overlord's terms-of-service page, b.hostile = { id, to, radius, damage }) goes off on its first touch of anything.
        if (b.hostile && (r !== null || b.pos[1] <= g.ballRadius + 0.02)) b.fuse = 0;
        if (b.fuse <= 1e-9) { events.push(b.hostile ? { type: 'explode', pos: [b.pos[0], b.pos[1], b.pos[2]], hostile: b.hostile } : { type: 'explode', pos: [b.pos[0], b.pos[1], b.pos[2]] }); live.splice(i--, 1); }
      }
      return events;
    },
    reset() { live.length = 0; },
  };
}

// Doc's carry: count starts at start (capped at carry), take() spends one, refill() goes back to carry.
export function createKettlebellBag(g = TUNING.grenade) {
  const bag = {
    count: Math.min(g.start, g.carry),
    take() { if (bag.count <= 0) return false; bag.count--; return true; },
    refill() { bag.count = g.carry; },
    reset() { bag.count = Math.min(g.start, g.carry); },
  };
  return bag;
}

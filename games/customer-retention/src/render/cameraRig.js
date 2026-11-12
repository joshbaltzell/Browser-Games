// Shoulder camera: pure maths, no three.js. Springs blend the mode offsets, a
// pair of sphere sweeps keep the lens out of walls and the floor.
import { TUNING } from '../tuning.js';
import { springStep } from '../core/spring.js';
import { sweepSphere } from '../world/collide.js';

const KEYS = ['fov', 'right', 'up', 'back'];
const TAU = Math.PI * 2;

export const CAMERA_MODES = Object.freeze(['normal', 'aim', 'sprint', 'coverLow', 'coverTall']);
const isMode = (mode) => mode !== 'normal' && CAMERA_MODES.includes(mode);

export function modeParams(cam, mode, out = {}) {
  const m = (isMode(mode) && cam[mode] && typeof cam[mode] === 'object') ? cam[mode] : null;
  for (const k of KEYS) out[k] = m && m[k] !== undefined ? m[k] : cam[k];
  return out;
}

export function shakeWeightOf(tuning, mode) {
  const m = isMode(mode) ? tuning[mode] : null;
  return m && typeof m === 'object' && m.shakeWeight > 0 ? m.shakeWeight : 0;
}

// Whether the player's head is drawn, given the lens-to-head distance. Hidden inside hideDist,
// back only past hideDist + margin, so it cannot flicker at the edge.
export function headVisibleFor(dist, wasVisible, hideDist, margin = 0) {
  return wasVisible ? dist >= hideDist : dist >= hideDist + margin;
}

export function createCameraRig({ tuning = TUNING.camera, look = TUNING.look } = {}) {
  const sp = { fov: { x: 0, v: 0 }, right: { x: 0, v: 0 }, up: { x: 0, v: 0 }, back: { x: 0, v: 0 } };
  const side = { x: 1, v: 0 };
  const kick = { x: 0, v: 0 };     // slam bump: metres of lens pull toward the player
  const free = [0, 0, 0];          // un-lagged head, where the pivot may not be dragged through a corner from
  const shakeW = { x: 0, v: 0 };   // mode shake weight, blended like the other mode params
  const piv = [{ x: 0, v: 0 }, { x: 0, v: 0 }, { x: 0, v: 0 }];
  const goal = {};
  const head = [0, 0, 0], shoulder = [0, 0, 0], want = [0, 0, 0];
  const pos = [0, 0, 0], dir = [0, 0, 1];
  // update() returns this one object every frame; copy pos/dir if you keep them.
  const result = { pos, dir, fov: 70 };
  let ratio = 1;       // fraction of `back` the walls currently allow
  let clock = 0;
  let ready = false;

  const cam = {
    yaw: 0, pitch: 0,
    look(dxPx, dyPx, padX, padY, dt, aiming) {
      const s = aiming ? look.aimScale : 1;
      const inv = look.invertY ? -1 : 1;
      this.yaw -= dxPx * look.mouse * s;
      this.pitch -= dyPx * look.mouse * s * inv;
      const p = look.pad;
      if (padX) this.yaw -= Math.sign(padX) * Math.abs(padX) ** p.expo * p.yawRate * s * dt;
      if (padY) this.pitch -= Math.sign(padY) * Math.abs(padY) ** p.expo * p.pitchRate * s * dt * inv;
      if (this.pitch < tuning.pitchMin) this.pitch = tuning.pitchMin;
      if (this.pitch > tuning.pitchMax) this.pitch = tuning.pitchMax;
    },
    bump(scale = 1) {
      const b = tuning.bump;
      if (!b || !(b.amount > 0) || !(scale > 0)) return;
      kick.x = Math.min(kick.x + b.amount * scale, 2 * b.amount);
    },
    snap(target, yaw, mode = 'normal', sideArg = 1) {
      if (yaw !== undefined) this.yaw = yaw;
      modeParams(tuning, mode, goal);
      for (const k of KEYS) { sp[k].x = goal[k]; sp[k].v = 0; }
      side.x = sideArg; side.v = 0;
      shakeW.x = shakeWeightOf(tuning, mode); shakeW.v = 0;
      for (let i = 0; i < 3; i++) { piv[i].x = target[i]; piv[i].v = 0; }
      kick.x = 0; kick.v = 0;
      ratio = 1; ready = true;
    },
    update(dt, { target, mode = 'normal', side: sideTarget = 1 }, boxes) {
      if (!ready) this.snap(target, this.yaw, mode, sideTarget);
      if (!(dt > 0)) dt = 0;
      clock += dt;
      modeParams(tuning, mode, goal);
      for (const k of KEYS) springStep(sp[k], goal[k], tuning.blendHalfLife, dt);
      springStep(shakeW, shakeWeightOf(tuning, mode), tuning.blendHalfLife, dt);
      springStep(side, sideTarget, tuning.sideHalfLife, dt);
      for (let i = 0; i < 3; i++) springStep(piv[i], target[i], tuning.followHalfLife, dt);
      springStep(kick, 0, tuning.bump ? tuning.bump.halfLife : 0, dt);

      const yaw = this.yaw, pitch = this.pitch;
      const sy = Math.sin(yaw), cy = Math.cos(yaw), sinP = Math.sin(pitch), cp = Math.cos(pitch);
      const r = tuning.probeRadius;
      const back = sp.back.x;
      // 1. head, then out to the shoulder as far as the walls allow
      head[0] = piv[0].x; head[1] = piv[1].x + sp.up.x; head[2] = piv[2].x;
      // the trailing pivot can cut a corner the player has already turned; stop
      // it at the first wall between it and the real head. At rest the two
      // coincide, so this is a no-op and cannot jitter.
      free[0] = target[0]; free[1] = target[1] + sp.up.x; free[2] = target[2];
      const th = sweepSphere(boxes, free, head, r);
      if (th < 1) for (let i = 0; i < 3; i++) head[i] = free[i] + (head[i] - free[i]) * th;
      const off = sp.right.x * side.x;
      shoulder[0] = head[0] - cy * off; shoulder[1] = head[1]; shoulder[2] = head[2] + sy * off;
      const ts = sweepSphere(boxes, head, shoulder, r);
      for (let i = 0; i < 3; i++) shoulder[i] = head[i] + (shoulder[i] - head[i]) * ts;
      // 2. back along the view direction
      dir[0] = sy * cp; dir[1] = sinP; dir[2] = cy * cp;
      for (let i = 0; i < 3; i++) want[i] = shoulder[i] - dir[i] * back;
      const tb = sweepSphere(boxes, shoulder, want, r);
      // 3. pull in at once, ease back out
      let allowed = back > 1e-6 ? Math.max(tuning.minBack / back, tb) : 1;
      if (allowed > 1) allowed = 1;
      if (allowed < ratio) ratio = allowed;
      else ratio += (allowed - ratio) * (tuning.wallReturnHalfLife > 0 ? 1 - Math.pow(2, -dt / tuning.wallReturnHalfLife) : 1);
      const pull = back * ratio - kick.x;
      for (let i = 0; i < 3; i++) pos[i] = shoulder[i] - dir[i] * pull;
      // the minBack floor must never win against a wall: keep the lens a full
      // probe radius from every face by sweeping the head out to it
      const tl = sweepSphere(boxes, head, pos, r);
      if (tl < 1) for (let i = 0; i < 3; i++) pos[i] = head[i] + (pos[i] - head[i]) * tl;
      // 4. sprint shake
      const sh = tuning.shake;
      if (sh && sh.amp && shakeW.x > 0) {
        const a = sh.amp * (shakeW.x > 1 ? 1 : shakeW.x);
        const sx = Math.sin(TAU * sh.hz * clock) * a;
        const shakeUp = Math.sin(TAU * sh.hz * 1.3 * clock + 1) * a;
        // camera right = (-cy, 0, sy); camera up = right x dir
        const rx = -cy, rz = sy;
        pos[0] += rx * sx - rz * dir[1] * shakeUp;
        pos[1] += (rz * dir[0] - rx * dir[2]) * shakeUp;
        pos[2] += rz * sx + rx * dir[1] * shakeUp;
      }
      result.fov = sp.fov.x;
      return result;
    },
  };
  return cam;
}

// Shoulder camera: pure maths, no three.js. Springs blend the mode offsets, a
// pair of sphere sweeps keep the lens out of walls and the floor.
import { TUNING } from '../tuning.js';
import { springStep } from '../core/spring.js';
import { sweepSphere } from '../world/collide.js';

const KEYS = ['fov', 'right', 'up', 'back'];
const TAU = Math.PI * 2;

export function modeParams(cam, mode, out = {}) {
  const m = (mode && mode !== 'normal' && cam[mode] && typeof cam[mode] === 'object') ? cam[mode] : null;
  for (const k of KEYS) out[k] = m && m[k] !== undefined ? m[k] : cam[k];
  return out;
}

export function createCameraRig({ tuning = TUNING.camera, look = TUNING.look } = {}) {
  const sp = { fov: { x: 0, v: 0 }, right: { x: 0, v: 0 }, up: { x: 0, v: 0 }, back: { x: 0, v: 0 } };
  const side = { x: 1, v: 0 };
  const piv = [{ x: 0, v: 0 }, { x: 0, v: 0 }, { x: 0, v: 0 }];
  const goal = {};
  const head = [0, 0, 0], shoulder = [0, 0, 0], want = [0, 0, 0];
  const pos = [0, 0, 0], dir = [0, 0, 1];
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
    snap(target, yaw, mode = 'normal', side_ = 1) {
      if (yaw !== undefined) this.yaw = yaw;
      modeParams(tuning, mode, goal);
      for (const k of KEYS) { sp[k].x = goal[k]; sp[k].v = 0; }
      side.x = side_; side.v = 0;
      for (let i = 0; i < 3; i++) { piv[i].x = target[i]; piv[i].v = 0; }
      ratio = 1; ready = true;
    },
    update(dt, { target, mode = 'normal', side: sideTarget = 1 }, boxes) {
      if (!ready) this.snap(target, this.yaw, mode, sideTarget);
      if (!(dt > 0)) dt = 0;
      clock += dt;
      modeParams(tuning, mode, goal);
      for (const k of KEYS) springStep(sp[k], goal[k], tuning.blendHalfLife, dt);
      springStep(side, sideTarget, tuning.sideHalfLife, dt);
      for (let i = 0; i < 3; i++) springStep(piv[i], target[i], tuning.followHalfLife, dt);

      const yaw = this.yaw, pitch = this.pitch;
      const sy = Math.sin(yaw), cy = Math.cos(yaw), sp_ = Math.sin(pitch), cp = Math.cos(pitch);
      const r = tuning.probeRadius;
      const back = sp.back.x;
      // 1. head, then out to the shoulder as far as the walls allow
      head[0] = piv[0].x; head[1] = piv[1].x + sp.up.x; head[2] = piv[2].x;
      const off = sp.right.x * side.x;
      shoulder[0] = head[0] - cy * off; shoulder[1] = head[1]; shoulder[2] = head[2] + sy * off;
      const ts = sweepSphere(boxes, head, shoulder, r);
      for (let i = 0; i < 3; i++) shoulder[i] = head[i] + (shoulder[i] - head[i]) * ts;
      // 2. back along the view direction
      dir[0] = sy * cp; dir[1] = sp_; dir[2] = cy * cp;
      for (let i = 0; i < 3; i++) want[i] = shoulder[i] - dir[i] * back;
      const tb = sweepSphere(boxes, shoulder, want, r);
      // 3. pull in at once, ease back out
      let allowed = back > 1e-6 ? Math.max(tuning.minBack / back, tb) : 1;
      if (allowed > 1) allowed = 1;
      if (allowed < ratio) ratio = allowed;
      else ratio += (allowed - ratio) * (tuning.wallReturnHalfLife > 0 ? 1 - Math.pow(2, -dt / tuning.wallReturnHalfLife) : 1);
      for (let i = 0; i < 3; i++) pos[i] = shoulder[i] - dir[i] * back * ratio;
      // 4. sprint shake
      const sh = tuning.shake, sprintFov = tuning.sprint && tuning.sprint.fov !== undefined ? tuning.sprint.fov : tuning.fov;
      const span = sprintFov - tuning.fov;
      if (sh && sh.amp && span > 0) {
        let k = (sp.fov.x - tuning.fov) / span;
        k = k < 0 ? 0 : k > 1 ? 1 : k;
        if (k > 0) {
          const a = sh.amp * k;
          const sx = Math.sin(TAU * sh.hz * clock) * a;
          const sy2 = Math.sin(TAU * sh.hz * 1.3 * clock + 1) * a;
          // camera right = (-cy, 0, sy); camera up = right x dir
          const rx = -cy, rz = sy;
          pos[0] += rx * sx + (rz * 0 - 0) * 0 + (0 * dir[2] - rz * dir[1]) * sy2;
          pos[1] += (rz * dir[0] - rx * dir[2]) * sy2;
          pos[2] += rz * sx + (rx * dir[1] - 0 * dir[0]) * sy2;
        }
      }
      result.fov = sp.fov.x;
      return result;
    },
  };
  return cam;
}

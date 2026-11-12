// Wild blind fire. Held fire from behind cover sweeps the aim side to side: the longer it is held, the further the aim wanders (up to
// feedback.blindDrift degrees either side of where the camera points). Pure maths; play.js turns the shot's aim by the drift and the view flails the gun with it.
import { TUNING } from '../tuning.js';

const TAU = Math.PI * 2;

// The drift in degrees after t seconds of held blind fire: two sines (a slow sweep and a faster wobble), eased in over ramp seconds. Never beyond +-amp.
export function blindDrift(t, { amp = 0, hz = 0, ramp = 0 } = {}) {
  if (!(amp > 0) || !(t >= 0) || !Number.isFinite(t) || !Number.isFinite(amp)) return 0;
  const f = Number.isFinite(hz) && hz > 0 ? hz : 0;
  const k = ramp > 0 ? Math.min(1, t / ramp) : 1;
  return amp * k * (0.7 * Math.sin(TAU * f * t) + 0.3 * Math.sin(TAU * f * 2.3 * t + 1.3));
}

// A copy of the direction turned about the vertical axis by deg.
export function rotateYaw(dir, deg) {
  const a = (Number.isFinite(deg) ? deg : 0) * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
  return [dir[0] * c + dir[2] * s, dir[1], -dir[0] * s + dir[2] * c];
}

// Time held and the current drift. update(dt, blind) once per step; blind is whether blind fire is the stance this step.
export function createBlindFire({ feedback = () => TUNING.feedback } = {}) {
  let t = 0, drift = 0;
  return {
    update(dt, blind) {
      const fb = feedback();
      if (blind) t += dt > 0 && Number.isFinite(dt) ? dt : 0; else t = 0;
      drift = blind ? blindDrift(t, { amp: fb.blindDrift, hz: fb.blindDriftHz, ramp: fb.blindDriftRamp }) : 0;
      return drift;
    },
    drift: () => drift,
    time: () => t,
    reset() { t = 0; drift = 0; },
  };
}

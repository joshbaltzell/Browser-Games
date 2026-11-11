// Pure helpers shared by the movement machine and its cover states: angles and the
// camera-relative stick. No state, no DOM.

export const TAU = Math.PI * 2;
export const wrap = a => a - TAU * Math.round(a / TAU);
export const yawOf = (x, z) => Math.atan2(x, z);

export function tiltOf(intent) { return Math.min(1, Math.hypot(intent.moveX, intent.moveY)); }

// Camera-relative stick direction, written into out as [x, z]; returns tilt.
export function wishOf(intent, out) {
  const s = Math.sin(intent.camYaw), c = Math.cos(intent.camYaw);
  let x = -intent.moveY * s - intent.moveX * c;
  let z = -intent.moveY * c + intent.moveX * s;
  const len = Math.hypot(x, z);
  if (len > 1) { x /= len; z /= len; }
  out[0] = x; out[1] = z;
  return Math.min(1, len);
}

export function turnToward(angle, target, maxStep) {
  const d = wrap(target - angle);
  return angle + Math.max(-maxStep, Math.min(maxStep, d));
}

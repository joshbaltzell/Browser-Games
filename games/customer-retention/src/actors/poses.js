// Procedural pose clips. A Pose is plain data in rig space (metres, the
// character faces +Z so its left side is +X, the floor is y = 0):
//   { hipsY, lean, twist, headYaw, headPitch, handL, handR, footL, footR, squash }
// hipsY is the height of the hips bone. lean tips the body forward about the
// hips (radians), twist turns it about the vertical, the head turns on top of
// that. Hands are wrist points. Feet are sole points: the floor under the
// ankle, so a foot at y = 0 is standing. squash is 1 at rest.
//
// Every value is a smooth function of t (sines and smoothsteps, no random
// numbers), so sampling is repeatable and looping clips are periodic.
// Nothing here touches three.js or the DOM.

const TAU = Math.PI * 2;
const LIMBS = ['handL', 'handR', 'footL', 'footR'];

export function makePose() {
  return {
    hipsY: 0, lean: 0, twist: 0, headYaw: 0, headPitch: 0,
    handL: [0, 0, 0], handR: [0, 0, 0], footL: [0, 0, 0], footR: [0, 0, 0],
    squash: 1,
  };
}

function copyPose(src, out) {
  out.hipsY = src.hipsY; out.lean = src.lean; out.twist = src.twist;
  out.headYaw = src.headYaw; out.headPitch = src.headPitch; out.squash = src.squash;
  for (let i = 0; i < 4; i++) {
    const a = src[LIMBS[i]], o = out[LIMBS[i]];
    o[0] = a[0]; o[1] = a[1]; o[2] = a[2];
  }
  return out;
}


// Where a point fixed to the body (given at rest, in rig space with the hips at
// spec.hipHeight) ends up under `pose`: turned by lean then twist about the
// hips, which sit at pose.hipsY. The rig places shoulders and hips with this
// same function. Squash is not included (the rig applies it to everything).
export function bodyPoint(spec, pose, rest, out = [0, 0, 0]) {
  const x = rest[0], y = rest[1] - spec.hipHeight, z = rest[2];
  const cl = Math.cos(pose.lean), sl = Math.sin(pose.lean);
  const ct = Math.cos(pose.twist), st = Math.sin(pose.twist);
  const y1 = y * cl - z * sl;
  const z1 = y * sl + z * cl;
  out[0] = x * ct + z1 * st;
  out[1] = y1 + pose.hipsY;
  out[2] = -x * st + z1 * ct;
  return out;
}

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (e0, e1, x) => { const t = clamp01((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };
// 0 before a, eases up to 1 by b, holds to c, eases back to 0 by d.
const pulse = (u, a, b, c, d) => smooth(a, b, u) * (1 - smooth(c, d, u));

function set3(o, x, y, z) { o[0] = x; o[1] = y; o[2] = z; return o; }

// A point given relative to the body at rest, placed on the posed body.
const _rest = [0, 0, 0];
function onBody(spec, pose, x, y, z, out) {
  _rest[0] = x; _rest[1] = y; _rest[2] = z;
  return bodyPoint(spec, pose, _rest, out);
}

// Stance numbers derived from the spec, written into one scratch object so
// sampling allocates nothing. Left is +x: side = +1 for left, -1 for right.
const F = { sx: 0, sy: 0, fx: 0, belly: 0 };
function frame(spec) {
  F.sx = Math.abs(spec.shoulderL[0]);
  F.sy = spec.shoulderL[1];
  F.fx = Math.abs(spec.hipL[0]) + 0.035;
  F.belly = spec.belly === undefined ? 0.2 : spec.belly;
  return F;
}
const handOf = (p, side) => (side > 0 ? p.handL : p.handR);

// Hands clasped in front of the belly: the patient "how can I help" stance.
function clasp(spec, pose, f, out, side) {
  return onBody(spec, pose, side * 0.05, spec.hipHeight + 0.14, f.belly + 0.1, out);
}

function idle(t, spec, p) {
  const f = frame(spec);
  const u = t / CLIPS.idle.duration;
  const ph = TAU * u;
  const H = spec.hipHeight;
  // Breathing, a slow weight shift, and once a cycle a look to one side.
  const look = pulse(u, 0.42, 0.52, 0.72, 0.86);
  p.hipsY = H - 0.012 + 0.006 * Math.sin(ph) - 0.004 * Math.cos(2 * ph);
  p.lean = 0.03 + 0.015 * Math.sin(ph + 0.4);
  p.twist = 0.05 * Math.sin(ph + 0.6);
  p.headYaw = 0.03 * Math.sin(ph) + 0.3 * look;
  p.headPitch = -0.02 + 0.03 * Math.sin(2 * ph + 1) + 0.1 * look;
  p.squash = 1 + 0.008 * Math.sin(ph);
  clasp(spec, p, f, p.handL, 1);
  clasp(spec, p, f, p.handR, -1);
  p.handL[1] += 0.006 * Math.sin(ph - 0.5);
  p.handR[1] += 0.006 * Math.sin(ph - 0.5);
  set3(p.footL, f.fx, 0, 0.015);
  set3(p.footR, -f.fx, 0, -0.015);
  return p;
}

// How high a running foot lifts at phase ph (0 when planted). The foot swings
// forward while cos(ph) > 0 and is planted the rest of the time; the peak
// comes a little early, a heel kick. Normalised so the peak is exactly 1.
const liftShape = (ph) => {
  const c = Math.cos(ph);
  return c > 0 ? Math.pow(c, 1.3) * (1 - 0.35 * Math.sin(ph)) : 0;
};
const LIFT_PEAK = (() => {
  let m = 0;
  for (let i = 0; i <= 4000; i++) m = Math.max(m, liftShape(-Math.PI / 2 + (i / 4000) * Math.PI));
  return m;
})();

const STRIDE = 0.9, LIFT = 0.18, BOB = 0.05, RUN_LEAN = 0.25;

function run(t, spec, p) {
  const f = frame(spec);
  const ph = (TAU * t) / CLIPS.run.duration;
  const s = Math.sin(ph);
  const c2 = Math.cos(2 * ph);
  const H = spec.hipHeight;
  // Hips are highest as the feet pass (ph = 0, pi) and lowest at full stride.
  p.hipsY = H - 0.06 + (BOB / 2) * c2;
  p.lean = RUN_LEAN + 0.02 * c2;
  // The shoulder opposite the forward foot comes forward (right, -x, while the
  // left foot leads); the head turns back to keep looking ahead.
  p.twist = 0.14 * s;
  p.headYaw = -0.1 * s;
  p.headPitch = -0.17 + 0.03 * c2;
  p.squash = 1 + 0.025 * c2;
  // Left foot fully forward at a quarter cycle; the right mirrors it.
  set3(p.footL, f.fx * 0.8, (LIFT * liftShape(ph)) / LIFT_PEAK, (STRIDE / 2) * s);
  set3(p.footR, -f.fx * 0.8, (LIFT * liftShape(ph + Math.PI)) / LIFT_PEAK, -(STRIDE / 2) * s);
  // Arms swing opposite to the legs, elbows bent: forward and up across the
  // chest, or back and down past the hip. Placed on the leaning body.
  for (let side = -1; side <= 1; side += 2) {
    const k = (1 - side * s) / 2; // 1 = this hand fully forward
    onBody(spec, p,
      side * f.sx * (1.55 - 1.0 * k),
      f.sy - 0.42 + 0.29 * k,
      -0.13 + 0.43 * k,
      handOf(p, side));
  }
  return p;
}

function aim(t, spec, p) {
  const f = frame(spec);
  const ph = (TAU * t) / CLIPS.aim.duration;
  const H = spec.hipHeight;
  // A braced stance, the left shoulder turned toward the target, the head
  // turned back to face it and dipped to the sights.
  p.hipsY = H - 0.045 + 0.005 * Math.sin(ph);
  p.lean = 0.1 + 0.01 * Math.sin(ph);
  p.twist = -0.18;
  p.headYaw = 0.16;
  p.headPitch = 0.05 + 0.012 * Math.sin(2 * ph);
  p.squash = 1;
  // Both hands on an imaginary rifle held to the right shoulder: the left on
  // the foregrip, the right on the grip. They sway together, a slow figure 8.
  const dx = 0.012 * Math.sin(ph), dy = 0.008 * Math.sin(2 * ph);
  set3(p.handL, 0.0 + dx, f.sy - 0.01 + dy, 0.5);
  set3(p.handR, -f.sx * 0.55 + dx, f.sy - 0.08 + dy, 0.3);
  set3(p.footL, f.fx + 0.01, 0, 0.13);
  set3(p.footR, -f.fx - 0.02, 0, -0.12);
  return p;
}

// Flinch envelopes. hit: a fast rise and a smooth fall. bounce: the squash,
// down hard, then a damped spring that overshoots once. Both are exactly 0
// at the end of the clip.
const FLINCH = 0.35;
function flinchHit(t) {
  if (t < 0.06) return smooth(0, 0.06, t);
  return Math.exp(-9 * (t - 0.06)) * (1 - smooth(0.24, FLINCH, t));
}
function flinchBounce(t) {
  if (t < 0.07) return smooth(0, 0.07, t);
  const u = t - 0.07;
  return Math.exp(-11 * u) * Math.cos((TAU * u) / 0.22) * (1 - smooth(0.26, FLINCH, t));
}

function flinch(t, spec, p) {
  const f = frame(spec);
  const H = spec.hipHeight;
  const a = flinchHit(t);
  // Snap back from the hit: body tipped back, head thrown back, knees give,
  // hands fly up to shoulder height.
  p.hipsY = H - 0.012 - 0.05 * a;
  p.lean = 0.03 - 0.4 * a;
  p.twist = 0.12 * a;
  p.headYaw = -0.12 * a;
  p.headPitch = -0.02 - 0.32 * a;
  p.squash = 1 - 0.15 * flinchBounce(t);
  for (let side = -1; side <= 1; side += 2) {
    const out = handOf(p, side);
    clasp(spec, p, f, out, side);
    const cx = out[0], cy = out[1], cz = out[2];
    onBody(spec, p, side * f.sx * 1.75, f.sy + 0.08, 0.14, out);
    out[0] = cx + (out[0] - cx) * a;
    out[1] = cy + (out[1] - cy) * a;
    out[2] = cz + (out[2] - cz) * a;
  }
  set3(p.footL, f.fx, 0, 0.015);
  set3(p.footR, -f.fx, 0, -0.015);
  return p;
}

const _g = [0, 0, 0];
function talk(t, spec, p) {
  idle(t, spec, p);
  const f = frame(spec);
  const u = t / CLIPS.talk.duration;
  const ph = TAU * u;
  // The idle body, with an open-palmed explanation from each hand in turn and
  // little nods on the beat. The head turns toward the hand that is talking.
  const gR = pulse(u, 0.04, 0.17, 0.4, 0.55);
  const gL = pulse(u, 0.5, 0.63, 0.8, 0.95);
  const beat = Math.sin(3 * ph);
  p.headPitch += 0.05 * Math.sin(4 * ph) - 0.04 * (gR + gL);
  p.headYaw += -0.12 * gR + 0.12 * gL;
  onBody(spec, p, -(f.sx + 0.13), f.sy - 0.16 + 0.03 * beat, f.belly + 0.16, _g);
  for (let k = 0; k < 3; k++) p.handR[k] += (_g[k] - p.handR[k]) * gR;
  onBody(spec, p, f.sx + 0.1, f.sy - 0.2 - 0.03 * beat, f.belly + 0.13, _g);
  for (let k = 0; k < 3; k++) p.handL[k] += (_g[k] - p.handL[k]) * gL;
  return p;
}

function clip(duration, loop, fn) {
  return Object.freeze({ duration, loop, sample: (t, spec, out = makePose()) => fn(t, spec, out) });
}

export const CLIPS = Object.freeze({
  idle: clip(2.4, true, idle),
  run: clip(0.56, true, run),
  aim: clip(1.6, true, aim),
  flinch: clip(FLINCH, false, flinch),
  talk: clip(2.4, true, talk),
});

// `out` is optional: pass a pose to fill instead of allocating one. A one-shot
// clip holds its first and last poses outside its duration.
export function samplePose(name, t, spec, out) {
  const c = Object.prototype.hasOwnProperty.call(CLIPS, name) ? CLIPS[name] : null;
  if (!c) throw new Error(`unknown clip: ${name}`);
  const tt = c.loop ? t : Math.min(Math.max(t, 0), c.duration);
  return c.sample(tt, spec, out || makePose());
}

// A straight mix: a at k <= 0, b at k >= 1 (exact copies, never the inputs).
// `out` is optional, as for samplePose.
export function blendPose(a, b, k, out = makePose()) {
  if (!(k > 0)) return copyPose(a, out);
  if (k >= 1) return copyPose(b, out);
  const j = 1 - k;
  out.hipsY = a.hipsY * j + b.hipsY * k;
  out.lean = a.lean * j + b.lean * k;
  out.twist = a.twist * j + b.twist * k;
  out.headYaw = a.headYaw * j + b.headYaw * k;
  out.headPitch = a.headPitch * j + b.headPitch * k;
  out.squash = a.squash * j + b.squash * k;
  for (let i = 0; i < 4; i++) {
    const pa = a[LIMBS[i]], pb = b[LIMBS[i]], o = out[LIMBS[i]];
    o[0] = pa[0] * j + pb[0] * k;
    o[1] = pa[1] * j + pb[1] * k;
    o[2] = pa[2] * j + pb[2] * k;
  }
  return out;
}

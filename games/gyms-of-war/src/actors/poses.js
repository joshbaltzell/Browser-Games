// Procedural pose clips. A Pose is plain data in rig space (metres, the
// character faces +Z so its left side is +X, the floor is y = 0):
//   { hipsY, lean, twist, headYaw, headPitch, elbows, handL, handR, footL, footR, squash }
// hipsY is the height of the hips bone. lean tips the body forward about the
// hips (radians), twist turns it about the vertical, the head turns on top of
// that. Hands are wrist points. Feet are sole points: the floor under the
// ankle, so a foot at y = 0 is standing. squash is 1 at rest. elbows says
// which way the elbows bend: 0 back (a runner's arms), 1 out and down (a
// rifle hold; arms bowed clear of the belly).
//
// Every value is a function of t (sines, smoothsteps and cubic curves, no
// random numbers), so sampling is repeatable and looping clips are periodic.
// Nothing here touches three.js or the DOM.

const TAU = Math.PI * 2;
const LIMBS = ['handL', 'handR', 'footL', 'footR'];

export function makePose() {
  return {
    hipsY: 0, lean: 0, twist: 0, headYaw: 0, headPitch: 0, elbows: 0,
    handL: [0, 0, 0], handR: [0, 0, 0], footL: [0, 0, 0], footR: [0, 0, 0],
    squash: 1,
  };
}

function copyPose(src, out) {
  out.hipsY = src.hipsY; out.lean = src.lean; out.twist = src.twist;
  out.headYaw = src.headYaw; out.headPitch = src.headPitch; out.squash = src.squash;
  out.elbows = src.elbows;
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
const F = { sx: 0, sy: 0, fx: 0 };
function frame(spec) {
  F.sx = Math.abs(spec.shoulderL[0]);
  F.sy = spec.shoulderL[1];
  F.fx = Math.abs(spec.hipL[0]) + 0.035;
  return F;
}
const handOf = (p, side) => (side > 0 ? p.handL : p.handR);

// Hands resting at the sides, a little out and forward, elbows bowed out: the
// eager "how can I help" stance. The arms clear the belly from every side.
function rest(spec, pose, f, out, side) {
  return onBody(spec, pose, side * (f.sx + 0.16), spec.hipHeight + 0.0, 0.1, out);
}
const REST_ELBOWS = 0.55;

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
  p.elbows = REST_ELBOWS;
  rest(spec, p, f, p.handL, 1);
  rest(spec, p, f, p.handR, -1);
  // The hands sway a touch with the breath, out of step with each other.
  p.handL[1] += 0.008 * Math.sin(ph - 0.5);
  p.handR[1] += 0.008 * Math.sin(ph + 0.4);
  p.handL[2] += 0.01 * Math.sin(ph + 1.1);
  p.handR[2] += 0.01 * Math.sin(ph - 0.7);
  set3(p.footL, f.fx, 0, 0.015);
  set3(p.footR, -f.fx, 0, -0.015);
  return p;
}

// The run is a cartoon sprint. Each foot is planted for STANCE of the cycle and
// swings the rest, so for a moment after each push-off both feet are in the
// air (the flight phase, when the hips are highest). The left foot strikes at
// u = 0 and the right at u = 0.5. A planted foot slides back under the body
// at running speed; a swinging foot kicks its heel up behind, drives the knee
// up through the middle and reaches forward to strike.
const STANCE = 0.34;
const STRIKE_Z = 0.25;    // planted foot lands this far ahead of the hips
const TOE_OFF_Z = -0.33;  // and pushes off this far behind
const LIFT = 0.4;         // highest sole point in the swing
const RUN_LEAN = 0.37;
const RUN_BOB = 0.035;    // hips rise and fall by twice this
const GROUND = (STRIKE_Z - TOE_OFF_Z) / STANCE; // planted foot speed, z per cycle

// A foot at cycle fraction u (0 = strike), as [y, z] in `out`.
function runFoot(u, out) {
  if (u < STANCE) {
    out[0] = 0;
    out[1] = STRIKE_Z - GROUND * u;
    return out;
  }
  const s = (u - STANCE) / (1 - STANCE);
  // z: a cubic Hermite from toe-off to strike that leaves at the ground speed
  // (the foot keeps travelling back for a moment) and arrives drawing back a
  // little (a paw back into the strike).
  const m0 = -GROUND * (1 - STANCE), m1 = -0.35 * GROUND * (1 - STANCE);
  const s2 = s * s, s3 = s2 * s;
  out[1] = (2 * s3 - 3 * s2 + 1) * TOE_OFF_Z + (s3 - 2 * s2 + s) * m0
    + (-2 * s3 + 3 * s2) * STRIKE_Z + (s3 - s2) * m1;
  // y: up fast (the heel kick), down late and steep into the strike.
  out[0] = LIFT * Math.sin(Math.PI * Math.pow(s, 0.8));
  return out;
}

const _f = [0, 0];
function run(t, spec, p) {
  const f = frame(spec);
  const c = t / CLIPS.run.duration;
  const u = c - Math.floor(c); // so a whole cycle lands exactly on a strike
  const H = spec.hipHeight;
  // Hips lowest mid-stance (u = 0.17, 0.67), highest mid-flight (0.42, 0.92).
  const flightPh = 2 * TAU * (u - (STANCE + 0.5) / 2);
  p.hipsY = H - 0.06 + RUN_BOB * Math.cos(flightPh);
  // Squash just after each landing, stretch at push-off.
  p.squash = 1 + 0.045 * Math.cos(2 * TAU * (u - STANCE - 0.03));
  p.lean = RUN_LEAN + 0.03 * Math.cos(2 * TAU * (u - STANCE));
  // How far forward the left foot is, about -1..1, a little ahead of its strike.
  const legs = Math.cos(TAU * (u + 0.03));
  // The shoulder opposite the leading foot comes forward (twist > 0 brings the
  // right shoulder forward); the head turns back to keep looking ahead.
  p.twist = 0.2 * legs;
  p.headYaw = -0.15 * legs;
  p.headPitch = -0.28 + 0.04 * Math.cos(flightPh);
  p.elbows = 0;
  runFoot(u, _f);
  set3(p.footL, f.fx * 0.75, _f[0], _f[1]);
  runFoot(u < 0.5 ? u + 0.5 : u - 0.5, _f);
  set3(p.footR, -f.fx * 0.75, _f[0], _f[1]);
  // Arms pump opposite to the legs, elbows bent: the hand comes forward and up
  // to the chest, then back and down beside the hip with the elbow driven back
  // behind the body. It swings wide, clear of the belly and hips.
  for (let side = -1; side <= 1; side += 2) {
    const k = (1 - side * legs) / 2; // 1 = this hand fully forward
    onBody(spec, p,
      side * (f.sx + 0.13 - 0.1 * k + 0.12 * Math.sin(Math.PI * k)), // swings wide of the body
      f.sy - 0.34 + 0.28 * k + 0.05 * Math.sin(Math.PI * k),
      -0.14 + 0.46 * k,
      handOf(p, side));
  }
  return p;
}

function aim(t, spec, p) {
  const f = frame(spec);
  const ph = (TAU * t) / CLIPS.aim.duration;
  const H = spec.hipHeight;
  // A braced "hands ready" stance, knees soft, leaning in, head level on the
  // target. No rifle yet, so each hand stays on its own side of the body: the
  // right (trigger) hand forward and out at chest height, the left (support)
  // hand a little lower and further forward. Elbows out. Nothing folds across
  // the chest from any side.
  p.hipsY = H - 0.05 + 0.005 * Math.sin(ph);
  p.lean = 0.12 + 0.01 * Math.sin(ph);
  p.twist = -0.1;
  p.headYaw = 0.08;
  p.headPitch = 0.04 + 0.012 * Math.sin(2 * ph);
  p.squash = 1;
  p.elbows = 1;
  // They sway together, a slow figure 8.
  const dx = 0.012 * Math.sin(ph), dy = 0.008 * Math.sin(2 * ph);
  set3(p.handL, f.sx * 1.2 + dx, f.sy - 0.12 + dy, 0.56);
  set3(p.handR, -f.sx * 1.25 + dx, f.sy - 0.06 + dy, 0.52);
  set3(p.footL, f.fx + 0.02, 0, 0.15);
  set3(p.footR, -f.fx - 0.03, 0, -0.13);
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
  p.elbows = REST_ELBOWS + (1 - REST_ELBOWS) * a;
  for (let side = -1; side <= 1; side += 2) {
    const out = handOf(p, side);
    rest(spec, p, f, out, side);
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
  // A talking hand comes up and out in front of the chest, wide of the body.
  p.elbows += (0.85 - p.elbows) * Math.max(gR, gL);
  onBody(spec, p, -(f.sx + 0.19), f.sy - 0.1 + 0.03 * beat, 0.36, _g);
  for (let k = 0; k < 3; k++) p.handR[k] += (_g[k] - p.handR[k]) * gR;
  onBody(spec, p, f.sx + 0.19, f.sy - 0.12 - 0.03 * beat, 0.34, _g);
  for (let k = 0; k < 3; k++) p.handL[k] += (_g[k] - p.handL[k]) * gL;
  return p;
}


// The roll: a forward tumble. The player view spins the whole body (see
// player.js); this clip is the tuck. Eases into a ball by 0.15 of the clip,
// holds, opens out from 0.75. Feet drawn up under the hips, hands at the
// shins, wide of the knees (nothing crosses the belly).
const _b = makePose();
function roll(t, spec, p) {
  const u = t / CLIPS.roll.duration;
  const e = pulse(u, 0, 0.15, 0.75, 1);
  const f = frame(spec);
  idle(0, spec, _b);
  const lerp = (a, b) => a + (b - a) * e;
  p.hipsY = lerp(_b.hipsY, 0.45);
  p.lean = lerp(_b.lean, 1.3);
  p.twist = 0;
  p.headYaw = 0;
  p.headPitch = lerp(_b.headPitch, 0.35);
  p.squash = lerp(1, 0.9);
  p.elbows = 1;
  for (let side = -1; side <= 1; side += 2) {
    const h = handOf(p, side), r = handOf(_b, side);
    h[0] = lerp(r[0], side * (f.sx + 0.2));
    h[1] = lerp(r[1], 0.2);
    h[2] = lerp(r[2], 0.3);
    const ft = side > 0 ? p.footL : p.footR, fr = side > 0 ? _b.footL : _b.footR;
    ft[0] = lerp(fr[0], side * f.fx);
    ft[1] = lerp(fr[1], 0.18);
    ft[2] = lerp(fr[2], -0.05);
  }
  return p;
}

// The sprint is the run, crouched: hips lower, more lean, the flight phase kept.
function sprint(t, spec, p) {
  run(t, spec, p);
  p.hipsY -= 0.12;
  p.lean += 0.15;
  return p;
}

// Cover. Everything here faces the wall (the mover turns to face it), so "forward" is toward the cover.
// coverLow: a real crouch, hips low and the back hunched forward so the head is below the wall top.
// The view draws the body back from the wall by TUNING.cover.lowDrawBack, so the hands (about
// 0.73 m ahead of the body) rest on the wall face (0.38 m ahead of the mover) and nothing goes through it.
const LOW_HIPS = 0.25, LOW_LEAN = 0.85, LOW_SQUASH = 0.82;
function coverLow(t, spec, p) {
  const f = frame(spec);
  const ph = (TAU * t) / CLIPS.coverLow.duration;
  p.hipsY = LOW_HIPS + (spec.lowDip || 0) + 0.006 * Math.sin(ph); // lowDip: a spec with a taller crown (Doc's spiky hair) crouches a little deeper
  p.lean = LOW_LEAN + 0.015 * Math.sin(ph + 0.4);
  p.twist = 0.03 * Math.sin(ph + 0.6);
  p.headYaw = 0.04 * Math.sin(ph);
  p.headPitch = -0.55 + 0.03 * Math.sin(2 * ph + 1);
  p.squash = LOW_SQUASH;
  p.elbows = 1;
  set3(p.handL, f.sx + 0.12, 0.88 + 0.006 * Math.sin(ph - 0.5), 0.66);
  set3(p.handR, -f.sx - 0.12, 0.88 + 0.006 * Math.sin(ph + 0.4), 0.66);
  set3(p.footL, f.fx + 0.08, 0, 0.12);
  set3(p.footR, -f.fx - 0.08, 0, 0.12);
  return p;
}

// A sideways shuffle over a held body: each foot lifts and steps out in turn. The body is the
// base pose at t = 0 (its breathing has a longer period), with a small bob at the step rate.
function shuffle(spec, p, durKey, t) {
  const f = frame(spec);
  const u = t / CLIPS[durKey].duration;
  const s = Math.sin(TAU * u);
  p.hipsY += 0.012 * Math.cos(2 * TAU * u);
  p.footL[0] += 0.06 * s;
  p.footR[0] += 0.06 * s;
  p.footL[1] = 0.09 * Math.max(0, s);
  p.footR[1] = 0.09 * Math.max(0, -s);
  p.twist += 0.03 * s;
  return f;
}
function coverLowMove(t, spec, p) {
  coverLow(0, spec, p);
  shuffle(spec, p, 'coverLowMove', t);
  return p;
}

// coverTall: standing flat against a tall wall, hands up on it at shoulder height, either side.
function coverTall(t, spec, p) {
  const f = frame(spec);
  const ph = (TAU * t) / CLIPS.coverTall.duration;
  p.hipsY = spec.hipHeight - 0.012 + 0.006 * Math.sin(ph);
  p.lean = 0.07 + 0.01 * Math.sin(ph + 0.4);
  p.twist = 0.02 * Math.sin(ph + 0.6);
  p.headYaw = 0.05 * Math.sin(ph);
  p.headPitch = 0.0 + 0.02 * Math.sin(2 * ph + 1);
  p.squash = 1 + 0.006 * Math.sin(ph);
  p.elbows = 1;
  onBody(spec, p, f.sx + 0.14, f.sy + 0.0, 0.31, p.handL);
  onBody(spec, p, -f.sx - 0.14, f.sy + 0.0, 0.31, p.handR);
  set3(p.footL, f.fx, 0, 0.015);
  set3(p.footR, -f.fx, 0, -0.015);
  return p;
}
function coverTallMove(t, spec, p) {
  coverTall(0, spec, p);
  shuffle(spec, p, 'coverTallMove', t);
  return p;
}

// The pop-out: the aim hands, knees braced and bent, leaning into the shot.
function coverPop(t, spec, p) {
  aim(t * (CLIPS.aim.duration / CLIPS.coverPop.duration), spec, p);
  p.hipsY -= 0.07;
  p.lean += 0.06;
  p.footL[2] += 0.04; p.footR[2] -= 0.04;
  p.footL[0] += 0.04; p.footR[0] -= 0.04;
  return p;
}

// The vault: from standing, the hands reach forward and down onto the wall, the legs tuck high
// in the middle (the view lifts the whole body over the top), and it lands standing.
function vault(t, spec, p) {
  const u = t / CLIPS.vault.duration;
  const e = pulse(u, 0, 0.3, 0.7, 1);
  const f = frame(spec);
  idle(0, spec, _b);
  const lerp = (a, b) => a + (b - a) * e;
  p.hipsY = lerp(_b.hipsY, spec.hipHeight - 0.02);
  p.lean = lerp(_b.lean, 0.55);
  p.twist = 0;
  p.headYaw = 0;
  p.headPitch = lerp(_b.headPitch, -0.25);
  p.squash = 1;
  p.elbows = 1;
  for (let side = -1; side <= 1; side += 2) {
    const h = handOf(p, side), r = handOf(_b, side);
    h[0] = lerp(r[0], side * (f.sx + 0.14));
    h[1] = lerp(r[1], 0.7);
    h[2] = lerp(r[2], 0.62);
    const ft = side > 0 ? p.footL : p.footR, fr = side > 0 ? _b.footL : _b.footR;
    ft[0] = lerp(fr[0], side * (f.fx + 0.04));
    ft[1] = lerp(fr[1], 0.55);
    ft[2] = lerp(fr[2], 0.3);
  }
  return p;
}

// Blind fire over low cover. The body sits closer to the wall (TUNING.cover.blindDrawBack, a third of the
// usual draw-back), so the head is held compact: hips low, a half lean, the chin tucked, and the head top
// still under the 0.95 m rule. The right (gun) arm goes up as high as the rig reaches (about 0.78 m: the arm is
// 0.52 m, so it cannot clear a 1 m wall with the head below it) and stays in front of the wall face; the view
// pitches the gun up so the barrel and the flash clear the top. The left hand rests on the wall face.
const BLIND_HIPS = 0.17, BLIND_LEAN = 0.5, BLIND_HEAD = -0.9, BLIND_SQUASH = 0.82;
function coverBlindLow(t, spec, p) {
  const f = frame(spec);
  const ph = (TAU * t) / CLIPS.coverBlindLow.duration;
  p.hipsY = BLIND_HIPS + (spec.lowDip || 0) * 0.6 + 0.006 * Math.sin(ph);
  p.lean = BLIND_LEAN + 0.015 * Math.sin(ph + 0.4);
  p.twist = 0.03 * Math.sin(ph + 0.6);
  p.headYaw = 0.04 * Math.sin(ph);
  p.headPitch = BLIND_HEAD + 0.03 * Math.sin(2 * ph + 1);
  p.squash = BLIND_SQUASH;
  p.elbows = 1;
  bodyPoint(spec, p, spec.shoulderR, _g);
  set3(p.handR, _g[0] - 0.02, _g[1] + 0.44 + 0.008 * Math.sin(ph + 0.4), _g[2] + 0.12);
  set3(p.handL, f.sx + 0.12, 0.72 + 0.006 * Math.sin(ph - 0.5), 0.44);
  set3(p.footL, f.fx + 0.08, 0, 0.12);
  set3(p.footR, -f.fx - 0.08, 0, 0.12);
  return p;
}

// Blind fire round the end of tall cover: tucked flat to the wall as in coverTall, and the arm on the open
// end's side out past the corner at shoulder height, the other hand on the wall. side +1 is the character's
// left (+x, handL), -1 its right.
function coverBlindTall(t, spec, p, side) {
  coverTall(t * (CLIPS.coverTall.duration / CLIPS.coverBlindTallL.duration), spec, p);
  const f = frame(spec);
  onBody(spec, p, side * (f.sx + 0.4), f.sy, 0.2, side > 0 ? p.handL : p.handR);
  return p;
}

// The downed crawl: a commando crawl on the forearms. The hips sit low, the body is pitched well forward with the head
// up, each hand reaches ahead on its own side, plants and pulls back, and the opposite foot pushes while the other
// swings forward. Hands and feet touch the floor at their lowest. Nothing crosses the body.
const CRAWL_HIPS = 0.3, CRAWL_LEAN = 1.2;
const CRAWL_HAND_Z = [0.4, 0.62], CRAWL_FOOT_Z = [-0.6, -0.36];
// One limb at cycle fraction s: planted for the first half (sliding from `far` to `near`, y on the floor), then
// lifted and swung back out to `far`. Written as [y, z] into out.
function crawlLimb(s, far, near, lift, floor, out) {
  s -= Math.floor(s);
  if (s < 0.5) { out[0] = floor; out[1] = far + (near - far) * (s / 0.5); return out; }
  const k = (s - 0.5) / 0.5;
  out[0] = floor + lift * Math.sin(Math.PI * k);
  out[1] = near + (far - near) * (k * k * (3 - 2 * k));
  return out;
}
function crawl(t, spec, p) {
  const f = frame(spec);
  const u = t / CLIPS.crawl.duration;
  const ph = TAU * u;
  p.hipsY = CRAWL_HIPS + 0.012 * Math.cos(2 * ph);
  p.lean = CRAWL_LEAN + 0.03 * Math.cos(2 * ph);
  p.twist = 0.1 * Math.sin(ph);
  p.headYaw = -0.1 * Math.sin(ph);
  p.headPitch = -0.75;
  p.squash = 1;
  p.elbows = 1;
  // Left hand and right foot go together; right hand and left foot half a cycle later.
  crawlLimb(u, CRAWL_HAND_Z[1], CRAWL_HAND_Z[0], 0.16, 0.04, _f);
  set3(p.handL, f.sx + 0.12, _f[0], _f[1]);
  crawlLimb(u + 0.5, CRAWL_HAND_Z[1], CRAWL_HAND_Z[0], 0.16, 0.04, _f);
  set3(p.handR, -f.sx - 0.12, _f[0], _f[1]);
  crawlLimb(u, CRAWL_FOOT_Z[1], CRAWL_FOOT_Z[0], 0.16, 0, _f);
  set3(p.footR, -f.fx - 0.02, _f[0], _f[1]);
  crawlLimb(u + 0.5, CRAWL_FOOT_Z[1], CRAWL_FOOT_Z[0], 0.16, 0, _f);
  set3(p.footL, f.fx + 0.02, _f[0], _f[1]);
  return p;
}

// Smooth keyframes: ks is [[u, a, b, c], ...] in rising u; the value eases (smoothstep) between neighbouring keys and holds at the ends.
// Writes the three components after u into out. Allocates nothing.
function keyed3(u, ks, out) {
  const n = ks.length;
  if (u <= ks[0][0]) return set3(out, ks[0][1], ks[0][2], ks[0][3]);
  for (let i = 0; i < n - 1; i++) {
    const a = ks[i], b = ks[i + 1];
    if (u < b[0]) {
      const k = smooth(a[0], b[0], u);
      return set3(out, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k, a[3] + (b[3] - a[3]) * k);
    }
  }
  const z = ks[n - 1];
  return set3(out, z[1], z[2], z[3]);
}

// Doc (or Tobble) kneeling to revive someone lying in front: hips low, the body pitched forward over them, both hands
// pressing down and forward at the floor, each on its own side, one pressing while the other lifts (a chest compression
// every half cycle). The knees are down behind the hips. Nothing crosses the body.
const REVIVE_HIPS = 0.4, REVIVE_LEAN = 0.9;
function revive(t, spec, p) {
  const f = frame(spec);
  const u = t / CLIPS.revive.duration;
  const ph = TAU * u;
  p.hipsY = REVIVE_HIPS + 0.012 * Math.sin(2 * ph);
  p.lean = REVIVE_LEAN + 0.05 * Math.sin(2 * ph);
  p.twist = 0.04 * Math.sin(ph);
  p.headYaw = 0.04 * Math.sin(ph);
  p.headPitch = -0.55;
  p.squash = 1;
  p.elbows = 1;
  // Hands press down and forward: the left hand low on the beat, the right a half cycle later.
  set3(p.handL, f.sx - 0.06, 0.37 - 0.06 * Math.sin(ph), 0.64);
  set3(p.handR, -f.sx + 0.06, 0.37 + 0.06 * Math.sin(ph), 0.64);
  set3(p.footL, f.fx + 0.06, 0, -0.32);
  set3(p.footR, -f.fx - 0.06, 0, -0.32);
  return p;
}

// The bash: the gun arm (the right) is pulled back, then thrusts straight forward at chest height with the shoulder behind
// it, holds a beat and comes back. The left arm stays up as a guard on its own side. Elbows out. The strike is at u 0.33
// (bashHitAt 0.15 s of 0.45 s).
const BASH_HAND = [[0, -0.3, 1.0, 0.3], [0.17, -0.29, 1.08, 0.08], [0.33, -0.23, 1.17, 0.5], [0.55, -0.23, 1.17, 0.5], [1, -0.3, 1.0, 0.3]];
const BASH_LEAN = [[0, 0.1, 0, 0], [0.17, -0.05, 0, 0], [0.33, 0.15, 0, 0], [0.55, 0.15, 0, 0], [1, 0.1, 0, 0]];
const BASH_TWIST = [[0, 0, 0, 0], [0.17, -0.3, 0, 0], [0.33, 0.3, 0, 0], [0.55, 0.25, 0, 0], [1, 0, 0, 0]];
const _k = [0, 0, 0];
function bash(t, spec, p) {
  const f = frame(spec);
  const u = t / CLIPS.bash.duration;
  keyed3(u, BASH_LEAN, _k); p.lean = _k[0];
  keyed3(u, BASH_TWIST, _k); p.twist = _k[0];
  p.hipsY = spec.hipHeight - 0.09 - 0.03 * pulse(u, 0.2, 0.33, 0.55, 0.9);
  p.headYaw = -0.5 * p.twist;
  p.headPitch = -0.1;
  p.squash = 1;
  p.elbows = 1;
  keyed3(u, BASH_HAND, _k);
  onBody(spec, p, _k[0], _k[1], _k[2], p.handR);
  onBody(spec, p, f.sx + 0.14, f.sy - 0.1, 0.32, p.handL);
  set3(p.footL, f.fx + 0.04, 0, -0.14);
  set3(p.footR, -f.fx - 0.04, 0, 0.2);
  return p;
}

// The kettlebell throw. u 0.3 is the wind-up the view holds while G is down: the right hand cocked back by the ear, the body
// leaning away, the left arm out ahead for balance. Released, the hand goes over the head (u 0.4: as high as the arm reaches,
// above the eyes), follows through forward and down, and the body drives into it. The left arm stays on the left.
const THROW_HAND = [[0, -0.3, 1.0, 0.3], [0.3, -0.31, 1.38, -0.12], [0.4, -0.22, 1.6, 0.04], [0.6, -0.2, 1.22, 0.5], [0.9, -0.15, 0.98, 0.46], [1, -0.3, 1.0, 0.3]];
const THROW_LEAN = [[0, 0.1, 0, 0], [0.3, -0.2, 0, 0], [0.4, -0.28, 0, 0], [0.6, 0.35, 0, 0], [0.9, 0.3, 0, 0], [1, 0.1, 0, 0]];
const THROW_TWIST = [[0, -0.1, 0, 0], [0.3, -0.45, 0, 0], [0.4, -0.45, 0, 0], [0.6, 0.35, 0, 0], [0.9, 0.3, 0, 0], [1, -0.1, 0, 0]];
function throwClip(t, spec, p) {
  const f = frame(spec);
  const u = t / CLIPS.throw.duration;
  keyed3(u, THROW_LEAN, _k); p.lean = _k[0];
  keyed3(u, THROW_TWIST, _k); p.twist = _k[0];
  p.hipsY = spec.hipHeight - 0.07 - 0.03 * pulse(u, 0.4, 0.6, 0.9, 1);
  p.headYaw = -0.4 * p.twist;
  p.headPitch = -0.05;
  p.squash = 1;
  p.elbows = 1;
  keyed3(u, THROW_HAND, _k);
  onBody(spec, p, _k[0], _k[1], _k[2], p.handR);
  // The left hand points ahead on the left, easing back and down through the follow-through.
  onBody(spec, p, f.sx + 0.2, f.sy - 0.12 - 0.08 * smooth(0.5, 0.9, u), 0.34 - 0.12 * smooth(0.5, 0.9, u), p.handL);
  set3(p.footL, f.fx + 0.04, 0, 0.1 + 0.06 * smooth(0.4, 0.7, u));
  set3(p.footR, -f.fx - 0.04, 0, -0.16);
  return p;
}

// ease is the half-life (seconds) of the rig's springs while the clip plays:
// they smooth the cross-fades and the hits. The run is a fast cycle that the
// default 0.05 s would lag (about 45 degrees) and flatten, so its springs are
// nearly stiff.
const EASE = 0.05;
function clip(duration, loop, fn, ease = EASE) {
  return Object.freeze({ duration, loop, ease, sample: (t, spec, out = makePose()) => fn(t, spec, out) });
}

export const CLIPS = Object.freeze({
  idle: clip(2.4, true, idle),
  run: clip(0.56, true, run, 0.008),
  aim: clip(1.6, true, aim),
  flinch: clip(FLINCH, false, flinch),
  talk: clip(2.4, true, talk),
  roll: clip(0.55, false, roll, 0.02),
  sprint: clip(0.56, true, sprint, 0.008),
  coverLow: clip(2.4, true, coverLow),
  coverLowMove: clip(0.5, true, coverLowMove),
  coverTall: clip(2.4, true, coverTall),
  coverTallMove: clip(0.5, true, coverTallMove),
  coverPop: clip(1.6, true, coverPop),
  vault: clip(0.5, false, vault, 0.02),
  coverBlindLow: clip(1.6, true, coverBlindLow),
  coverBlindTallL: clip(1.6, true, (t, spec, p) => coverBlindTall(t, spec, p, 1)),
  coverBlindTallR: clip(1.6, true, (t, spec, p) => coverBlindTall(t, spec, p, -1)),
  crawl: clip(1.0, true, crawl),
  revive: clip(0.5, true, revive),
  bash: clip(0.45, false, bash, 0.02),
  throw: clip(0.5, false, throwClip, 0.02),
});

// The run clip's planted-foot speed in m/s, so a footfall matches the ground at this speed.
export const RUN_SPEED = GROUND / CLIPS.run.duration;

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
  out.elbows = a.elbows * j + b.elbows * k;
  for (let i = 0; i < 4; i++) {
    const pa = a[LIMBS[i]], pb = b[LIMBS[i]], o = out[LIMBS[i]];
    o[0] = pa[0] * j + pb[0] * k;
    o[1] = pa[1] * j + pb[1] * k;
    o[2] = pa[2] * j + pb[2] * k;
  }
  return out;
}

/*
 * ECHO CARTOGRAPHER — Phases 1–3.
 *
 * Phase 1 (core): the world is total black void. Press SPACE to emit a ringwave
 * that lights wall segments chalk-white ONLY along its live front, revealing the
 * room in expanding slices. Revealed fragments linger as fading ghost-outlines
 * (~1s) so you can navigate by memory between flashes. Every ping draws a blind
 * predator toward the ping origin — it hunts the sound, not you.
 *
 * Phase 2 (style & identity): the signature look — chalk wireframe on pure void,
 * scanning ring sweep, decaying ghost afterimages with a faint bloom, an
 * ever-present red ripple telegraph for the predator, predator wall-routing, and
 * a full Web Audio identity (low cave drone ambience, ping sweep, rising
 * proximity hum, capture/win stings) plus a particle system on ping/capture/win.
 *
 * Phase 3 (the twist): FALSE-PINGING. Hold the aim and fire a decoy ping offset
 * from you. It reveals real geometry at a remote spot AND the blind predator
 * pathfinds to the decoy's origin as if it were you — so you lure it off your
 * route, then slip through memorized corridors in total silence (moving without
 * pinging never attracts it). Gated: the decoy unlocks only from level 2 on,
 * where the layout cannot be solved by naive pinging alone.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no fetch — runs from
 * file://. Audio is synthesized lazily and resumed on first user gesture.
 *
 * Sections: Constants -> Canvas/state -> Audio -> Particles -> Geometry ->
 * Levels -> Pathfinding -> Input -> Init/reset -> Update -> Render -> Loop.
 */

"use strict";

// ----------------------------------------------------------------------------
// Constants / tunables
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;

const COLORS = {
  void: "#02040a",        // not pure black — a deep abyssal blue-black
  voidEdge: "#000003",    // vignette toward the corners
  wallFront: "#f4fbff",   // chalk-white live front intersection
  wallGlow: "#7fb6ff",    // cool bloom behind the live front
  ghost: "#a9d8ff",       // fading ghost-outline tint (cool chalk)
  ghostWarm: "#cfe8ff",
  player: "#7dffce",      // cartographer marker (phosphor green)
  playerGlow: "#1effa8",
  predator: "#ff4d5e",    // blind hunter telegraph
  predatorDeep: "#7a0010",
  exit: "#ffd27a",        // goal marker
  exitGlow: "#ff9d3c",
  decoy: "#ff8ad6",       // false-ping accent (magenta)
  decoyGlow: "#ff3ea5",
  hud: "#5d7280",         // muted HUD text
  hudBright: "#bcd6e6",
};

// Ping behaviour.
const PING_SPEED = 620;        // px/sec the front expands
const PING_MAX_RADIUS = 220;   // front dies past this — keeps reveal LOCAL (not full-level)
const PING_BAND = 14;          // half-thickness of the "live front" reveal band
const PING_COOLDOWN = 1.3;     // seconds between pings (rationed reveals)

// False ping (decoy).
const DECOY_REACH = 230;       // how far the decoy origin is thrown from player
const DECOY_COOLDOWN = 2.2;    // decoys are pricier than real pings

// Predator heartbeat pings (red, smaller radius — reveal walls near the predator).
const PRED_HB_INTERVAL = 2.6;  // seconds between heartbeats
const PRED_HB_RADIUS = 160;    // dies sooner than player pings

// Ghost-outline afterimage (TENS-04). Revealed segments no longer fade out and
// vanish — they age continuously over a long lifespan and floor at a small
// non-zero alpha, so a learned wall stays faintly visible forever (navigate
// by memory). 24s comfortably spans several PING_COOLDOWN (1.3s) and
// PRED_HB_INTERVAL (2.6s) cycles, so "revealed two pings ago" reads visibly
// dimmer than "just revealed".
const GHOST_LIFE = 24;         // seconds for a revealed segment to age from bright to its floor
const GHOST_FLOOR_ALPHA = 0.07; // minimum alpha a fully-aged segment ever settles to (never 0)

// Player.
const PLAYER_R = 9;
const PLAYER_SPEED = 190;      // px/sec

// Wall occlusion (AUDIO-05): predator-channel audio is attenuated, never
// fully muted, when no clear sightline exists between predator and player.
const OCCLUSION_ATTEN = 0.35;

// Predator.
const PRED_R = 13;
const PRED_HUNT_SPEED = 130;   // px/sec while homing on a ping origin
const PRED_IDLE_SPEED = 70;    // px/sec slow wander when no recent ping
const PRED_CATCH = 18;         // contact distance that ends the attempt
const PRED_ARRIVE = 24;        // distance at which it "reaches" a target node
const PRED_IDLE_RETARGET = 1.8;// seconds between picking a new idle wander point
const PRED_SENSE_RADIUS = 150; // within this distance it hears footsteps and homes in directly
// PRED-02: player-proximity distance that breaks an ambush hold — distinct
// from PRED_SENSE_RADIUS (stalk detection), always smaller/tighter since an
// ambushing predator only reacts once the player is nearly on top of it.
const AMBUSH_BREAK_RADIUS = 120;
// PRED-03: mid-level hunt burst — a one-shot-per-attempt LAYERED escalation
// fired when the player crosses a level-authored trigger zone. It stacks on
// top of whatever mode is already active (does not force a mode change or a
// beeline): speed spikes, heartbeat interval halves, and the stalk-mode
// "breath" voice is forced for the burst duration.
const HUNT_BURST_DURATION = 8;   // seconds the burst lasts before reverting
const HUNT_SPEED_MULT = 1.3;     // 30% speed spike per PRED-03
const HUNT_HB_MULT = 0.5;        // heartbeat interval halved per PRED-03

// PRED-01: asymmetric/jagged creature silhouette (NOT a regular polygon),
// offsets relative to predator center in multiples of predator.r. Drawn via
// moveTo/lineTo each frame in local (rotated) space so it reads as an organic
// hunting shape rather than a radius marker.
const PRED_SHAPE = [
  { x: 1.5, y: 0 },       // forward snout point, furthest out
  { x: 0.5, y: 0.55 },
  { x: 0.15, y: 1.35 },   // jagged side spike (rear-right)
  { x: -0.9, y: 0.7 },
  { x: -1.2, y: 0 },      // blunt rear point
  { x: -0.9, y: -0.7 },
  { x: 0.15, y: -1.35 },  // jagged side spike (rear-left)
  { x: 0.5, y: -0.55 }
];

// Footsteps / listening pause (AUDIO-03/AUDIO-04). PLAYER_SPEED is constant
// (no sprint), so footstep cadence is one fixed rhythm rather than scaling
// with speed.
const FOOTSTEP_INTERVAL = 0.32; // seconds between footstep clicks while moving
const LISTEN_PAUSE_DELAY = 0.4; // seconds of stillness before the drone ducks

// Proximity grain noise (TENS-06): a raw on-screen danger-pressure overlay,
// occlusion-free by design — present even behind a wall, since it represents
// rising panic, not literal sightline. Dot count interpolates linearly between
// these distance/count endpoints and is zero at/beyond GRAIN_FAR_DIST.
const GRAIN_FAR_DIST = 200;   // distance at/beyond which grain is fully gone
const GRAIN_NEAR_DIST = 60;   // distance at/within which grain hits max density
const GRAIN_MIN_DOTS = 15;    // dot count at GRAIN_FAR_DIST
const GRAIN_MAX_DOTS = 150;   // dot count at/within GRAIN_NEAR_DIST
const DRONE_DUCK = 0.5;         // drone gain multiplier during the listening pause

// ----------------------------------------------------------------------------
// Canvas + global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let W = 0, H = 0;            // CSS pixel size of the canvas
let dpr = 1;

const STATE = { TITLE: "title", PLAYING: "playing", CAUGHT: "caught", WON: "won", CLEARED: "cleared" };
let state = STATE.TITLE;

let levelIndex = 0;         // current level (0-based)
let level = null;           // current level data (geometry)
let player = { x: 0, y: 0, r: PLAYER_R };
let predator = {
  x: 0, y: 0, r: PRED_R, mode: "idle", tx: 0, ty: 0, idleTimer: 0,
  path: [], pathStep: 0, rippleT: 0, hbTimer: 1.4, stalking: false, patrolStep: 0,
  heading: 0, // PRED-01: radians, 0 = facing +x; holds last value while stationary
  ambushTimer: 0, // PRED-02: seconds remaining in an ambush hold; authoritative value set in startLevel()
  huntTriggered: false,  // PRED-03: one-shot latch, set true on first entry into level.huntTrigger.radius
  huntBurstActive: false, // PRED-03: true for HUNT_BURST_DURATION seconds after the trigger fires
  huntBurstTimer: 0,      // PRED-03: seconds remaining in the current burst
};
let pings = [];             // active ringwaves {x,y,radius,decoy}
let ghosts = [];            // revealed fragments {x1,y1,x2,y2,life,decoy}
// TENS-05: faint chalk-X marks left at each decoy's origin, separate from
// ghosts — a 3s TRANSIENT that DELETES on expiry (unlike ghosts, which now
// floor per TENS-04). {x, y, life}.
let decoyMarks = [];
const DECOY_MARK_LIFE = 3;  // seconds the chalk-X lingers before fading out
const DECOY_MARK_SIZE = 7;  // half-size of each crossed stroke (~14px X)
let cooldown = 0;           // real ping cooldown timer
let decoyCooldown = 0;      // decoy cooldown timer
let pingCount = 0;          // pings used this attempt
let clearTime = 0;          // seconds elapsed this attempt (for best-time score)
let introT = 0;             // per-level intro banner fade timer
let transition = 0;         // level-enter wipe transition (1 -> 0)
let aiming = false;         // holding the aim for a decoy
let aimAng = 0;             // aim direction for the decoy
let showDebug = false;
let shake = 0;              // screen-shake magnitude
let flash = 0;              // full-screen flash (capture/win)
let flashColor = "#fff";

// TENS-02: capture choreography state. freezeFrames is a per-rAF counter
// (NOT dt-driven) decremented once per rendered frame in frame() to hold the
// image for exactly 3 render frames before any update() runs again.
// captureStage is a SINGLE elapsed-time-up timer (counts UP from 0, dt-driven,
// in update()'s always-run preamble) representing how long the CAUGHT death
// screen has been visible: render() maps captureStage < CAPTURE_WHITE_DUR to
// an opaque white flash and everything after to opaque black, and
// drawPredatorGhost() also reads captureStage as its fade-over-time source —
// one field serves both the 2-stage overlay split and the chalk-outline fade.
let freezeFrames = 0;
const CAPTURE_WHITE_DUR = 0.08;  // ~80ms opaque white window at the start of captureStage
let captureStage = 0;

// TENS-03: in-world ping-cooldown ring around the player dot, additional to
// the top-left HUD bar. pingReadyPulse is a ONE-SHOT decaying timer that
// spikes the instant `cooldown` crosses from >0 to <=0 (never a continuous
// idle pulse); prevCooldown is the previous-frame cooldown value used to
// detect that exact edge. Both are dt-driven and decay/reset like
// shake/flash/captureStage above.
let pingReadyPulse = 0;
const PING_PULSE_DECAY = 1 / 0.3; // ~0.3s to fade back to 0
let prevCooldown = 0;

// Mouse aim (optional)
let mouseX = 0, mouseY = 0, hasMouse = false;

// localStorage: best per level + highest level cleared.
const LS_BEST = "echoCartographer.best";   // JSON map levelIndex->bestPings
const LS_PROG = "echoCartographer.progress"; // highest level unlocked
let bestMap = loadBestMap();
let progress = loadProgress();

function loadBestMap() {
  try { return JSON.parse(localStorage.getItem(LS_BEST)) || {}; }
  catch (e) { return {}; }
}
function saveBestMap() {
  try { localStorage.setItem(LS_BEST, JSON.stringify(bestMap)); } catch (e) {}
}
function loadProgress() {
  try { const v = parseInt(localStorage.getItem(LS_PROG), 10); return Number.isFinite(v) ? v : 0; }
  catch (e) { return 0; }
}
function saveProgress() {
  try { localStorage.setItem(LS_PROG, String(progress)); } catch (e) {}
}

// ----------------------------------------------------------------------------
// Canvas sizing (resize-to-window, DPR-aware)
// ----------------------------------------------------------------------------
function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", () => {
  resize();
  if (level) layoutLevel();
});

// ----------------------------------------------------------------------------
// Audio — Web Audio synthesis, unlocked on first user gesture.
// ----------------------------------------------------------------------------
let audioCtx = null;
let masterGain = null;
let droneNodes = null;     // persistent cave ambience
let proxOsc = null, proxGain = null, proxFilter = null; // predator proximity hum
// TENS-01: close-range (~80px) rising tension tone — STACKS on top of the
// 320px proxOsc hum above (does not replace it). Mirrors the proxOsc/proxGain/
// proxFilter trio so updateProximityAudio() can drive both with the same
// setTargetAtTime ramp pattern.
let tensionOsc = null, tensionGain = null, tensionFilter = null;
let audioReady = false;
let predOcclusion = 1;     // per-frame wall-occlusion factor (OCCLUSION_ATTEN when blocked, else 1); read by Plan 02's predator voice
let footstepTimer = 0;     // dt countdown to the next footstep click while moving
let stillTimer = 0;        // dt-accumulated stillness duration (AUDIO-03 listening pause)
let playerMoving = false;  // movement-key INPUT intent, set by updatePlayer, read by updateFootstepAudio
let dripTimer = 3 + Math.random() * 5; // dt countdown to the next cave drip (AUDIO-06)

function unlockAudio() {
  if (audioReady) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { audioReady = true; return; }
    audioCtx = new AC();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.9;
    masterGain.connect(audioCtx.destination);
    startDrone();
    startProximityHum();
    startTensionTone();
    if (audioCtx.state === "suspended") audioCtx.resume();
  } catch (e) { /* file:// safe — never throw */ }
  audioReady = true;
}

function now() { return audioCtx ? audioCtx.currentTime : 0; }

// Low, breathing cave drone — two detuned sines through a slow LFO on gain.
function startDrone() {
  if (!audioCtx) return;
  const g = audioCtx.createGain();
  g.gain.value = 0.0;
  g.connect(masterGain);

  const o1 = audioCtx.createOscillator();
  o1.type = "sine"; o1.frequency.value = 46;
  const o2 = audioCtx.createOscillator();
  o2.type = "sine"; o2.frequency.value = 57.3; // gentle beat against o1
  o1.connect(g); o2.connect(g);

  // slow swelling LFO so the dark feels alive
  const lfo = audioCtx.createOscillator();
  lfo.type = "sine"; lfo.frequency.value = 0.08;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.018;
  lfo.connect(lfoGain); lfoGain.connect(g.gain);

  o1.start(); o2.start(); lfo.start();
  g.gain.setValueAtTime(0, now());
  g.gain.linearRampToValueAtTime(0.05, now() + 4);
  droneNodes = { g, o1, o2, lfo };
}

// Persistent proximity hum; volume/pitch driven each frame from predator dist.
function startProximityHum() {
  if (!audioCtx) return;
  proxOsc = audioCtx.createOscillator();
  proxOsc.type = "sawtooth";
  proxOsc.frequency.value = 60;
  proxFilter = audioCtx.createBiquadFilter();
  proxFilter.type = "lowpass";
  proxFilter.frequency.value = 220;
  proxGain = audioCtx.createGain();
  proxGain.gain.value = 0.0;
  proxOsc.connect(proxFilter); proxFilter.connect(proxGain); proxGain.connect(masterGain);
  proxOsc.start();
}

// Update the proximity hum from a 0..1 closeness value (1 = right on top).
// `occ` is the wall-occlusion multiplier (AUDIO-05): defaults to 1 (no
// occlusion) so existing callers are unaffected.
function setProximity(closeness, occ = 1) {
  if (!proxGain || !proxOsc || !proxFilter) return;
  const t = now();
  const target = (closeness <= 0 ? 0 : 0.02 + closeness * closeness * 0.16) * occ;
  proxGain.gain.setTargetAtTime(target, t, 0.08);
  proxOsc.frequency.setTargetAtTime(54 + closeness * 110, t, 0.1);
  proxFilter.frequency.setTargetAtTime(200 + closeness * 900, t, 0.1);
}

// TENS-01: build the close-range tension-tone chain. A second, distinct-timbre
// oscillator (triangle, to read as a tightening tone above the proxOsc
// sawtooth hum) through a bandpass filter, gain starts silent. Routed to
// masterGain ONLY (never audioCtx.destination), same as every other voice.
function startTensionTone() {
  if (!audioCtx) return;
  tensionOsc = audioCtx.createOscillator();
  tensionOsc.type = "triangle";
  tensionOsc.frequency.value = 200;
  tensionFilter = audioCtx.createBiquadFilter();
  tensionFilter.type = "bandpass";
  tensionFilter.Q.value = 4;
  tensionFilter.frequency.value = 500;
  tensionGain = audioCtx.createGain();
  tensionGain.gain.value = 0.0;
  tensionOsc.connect(tensionFilter); tensionFilter.connect(tensionGain); tensionGain.connect(masterGain);
  tensionOsc.start();
}

// TENS-01: drive the tension tone from an 80px closeness value (1 = on top of
// the predator). Same setTargetAtTime ramp style and occlusion-aware via the
// same `occ`/predOcclusion factor passed in from updateProximityAudio() — no
// second distance calc or raycast.
function setTensionTone(closeness80, occ = 1) {
  if (!tensionGain || !tensionOsc || !tensionFilter) return;
  const t = now();
  const target = (closeness80 <= 0 ? 0 : closeness80 * 0.2) * occ;
  tensionGain.gain.setTargetAtTime(target, t, 0.08);
  tensionOsc.frequency.setTargetAtTime(200 + closeness80 * 300, t, 0.1);
}

// TENS-01: capture-silence cut. Zeroes BOTH the tension tone and the 320px
// proximity hum INSTANTLY (cancel + setValueAtTime, not a setTargetAtTime
// fade) so the silence reads as an abrupt cut right before sndCapture() — the
// cave drone (droneNodes) is deliberately untouched.
function cutTensionAudio() {
  const t = now();
  if (tensionGain) {
    tensionGain.gain.cancelScheduledValues(t);
    tensionGain.gain.setValueAtTime(0, t);
  }
  if (proxGain) {
    proxGain.gain.cancelScheduledValues(t);
    proxGain.gain.setValueAtTime(0, t);
  }
}

// A ping "sweep": a falling-then-rising filtered chirp. Decoy variant is pitched
// up and more metallic so the lie sounds different from the truth.
function sndPing(decoy) {
  if (!audioCtx) return;
  const t = now();
  const o = audioCtx.createOscillator();
  o.type = decoy ? "square" : "triangle";
  const f = audioCtx.createBiquadFilter();
  f.type = "bandpass";
  f.Q.value = 6;
  const g = audioCtx.createGain();
  o.connect(f); f.connect(g); g.connect(masterGain);

  // AUDIO-07: this square@920Hz-vs-triangle@540Hz split (plus the 0.18/0.26
  // gain difference below) already gives the decoy a distinct, shipped,
  // playtested "same family, recognizably different" identity. Do NOT
  // regress this to a literal same-waveform pitch-ratio multiplier — that
  // would chase a spec number written before this sound existed and undo
  // a decision that's already satisfied AUDIO-07.
  const base = decoy ? 920 : 540;
  o.frequency.setValueAtTime(base, t);
  o.frequency.exponentialRampToValueAtTime(base * 0.45, t + 0.5);
  f.frequency.setValueAtTime(base * 1.4, t);
  f.frequency.exponentialRampToValueAtTime(base * 3.2, t + 0.5);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(decoy ? 0.18 : 0.26, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
  o.start(t); o.stop(t + 0.6);
}

// Capture sting — harsh descending growl + noise burst.
function sndCapture() {
  if (!audioCtx) return;
  const t = now();
  const o = audioCtx.createOscillator();
  o.type = "sawtooth";
  o.frequency.setValueAtTime(220, t);
  o.frequency.exponentialRampToValueAtTime(38, t + 0.7);
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.35, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
  const f = audioCtx.createBiquadFilter();
  f.type = "lowpass"; f.frequency.value = 700;
  o.connect(f); f.connect(g); g.connect(masterGain);
  o.start(t); o.stop(t + 0.95);
  // noise burst
  noiseBurst(0.4, 0.35);
}

// Win sting — clean ascending bell triad.
function sndWin() {
  if (!audioCtx) return;
  const t = now();
  [523.25, 659.25, 783.99].forEach((freq, i) => {
    const o = audioCtx.createOscillator();
    o.type = "sine"; o.frequency.value = freq;
    const g = audioCtx.createGain();
    const st = t + i * 0.09;
    g.gain.setValueAtTime(0.0001, st);
    g.gain.exponentialRampToValueAtTime(0.2, st + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, st + 0.9);
    o.connect(g); g.connect(masterGain);
    o.start(st); o.stop(st + 0.95);
  });
}

function noiseBurst(dur, vol) {
  if (!audioCtx) return;
  const t = now();
  const frames = Math.floor(audioCtx.sampleRate * dur);
  const buf = audioCtx.createBuffer(1, frames, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < frames; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const g = audioCtx.createGain();
  g.gain.value = vol;
  const f = audioCtx.createBiquadFilter();
  f.type = "lowpass"; f.frequency.value = 1200;
  src.connect(f); f.connect(g); g.connect(masterGain);
  src.start(t);
}

// AUDIO-04: footstep "click" — a short, dry, high-passed noise tick. Deliberately
// NOT a reuse of noiseBurst (that's a 1200Hz-lowpass, longer capture thud); this
// is ~10ms and high-passed for a dry tick character. Stays centered (no panner)
// since player-originated sounds are not spatially panned.
function footstepClick() {
  if (!audioCtx) return;
  const t = now();
  const dur = 0.01;
  const frames = Math.max(1, Math.floor(audioCtx.sampleRate * dur));
  const buf = audioCtx.createBuffer(1, frames, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < frames; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const f = audioCtx.createBiquadFilter();
  f.type = "highpass"; f.frequency.value = 1800;
  const g = audioCtx.createGain();
  g.gain.value = 0.05;
  src.connect(f); f.connect(g); g.connect(masterGain);
  src.start(t);
}

// AUDIO-06: cave drip — a short watery, pitched, panned transient. Distinct from
// the dry centered footstepClick: tonal/pitched, downward glide, and randomly
// panned via makePanner (Plan 01) rather than centered.
function caveDrip(pan) {
  if (!audioCtx) return;
  const t = now();
  const dur = 0.18;
  const panner = makePanner(pan);
  if (!panner) return;
  const o = audioCtx.createOscillator();
  o.type = "sine";
  o.frequency.setValueAtTime(900, t);
  o.frequency.exponentialRampToValueAtTime(500, t + 0.08);
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.06, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(panner);
  o.start(t); o.stop(t + dur + 0.02);
}

// AUDIO-02: linear stereo-pan curve keyed to world X relative to the player.
// Full left/right pan is reached at a half-screen-width offset. Pure function
// (no audio nodes) so it can also be sampled by callers deciding pan values.
function panForX(x) {
  if (!W) return 0;
  return Math.max(-1, Math.min(1, (x - player.x) / (W / 2)));
}

// Per-call panner factory: creates one StereoPannerNode wired to masterGain.
// Callers connect their own gain/source chain into the returned node instead
// of connecting straight to masterGain, e.g. `g.connect(makePanner(pan))`.
// Predator-voice and drip synths (Plans 02/03) route through this.
function makePanner(pan) {
  if (!audioCtx) return null;
  const p = audioCtx.createStereoPanner();
  p.pan.value = Math.max(-1, Math.min(1, pan));
  p.connect(masterGain);
  return p;
}

// AUDIO-01/AUDIO-02: the predator's three-state voice. `audioState` is one of
// "grumble" (idle-wander), "hunt" (intensity variant of grumble, NOT a 4th
// timbre), "pulse" (patrol), or "breath" (stalking). `pan` comes from
// panForX(predator.x); `occ` is the wall-occlusion multiplier from
// updateProximityAudio's predOcclusion (1 = open line of sight). Every branch
// scales its peak gain by occ and routes through makePanner into masterGain —
// never audioCtx.destination — matching the per-call node style of
// sndPing/sndCapture/noiseBurst.
function predatorVoice(audioState, pan, occ) {
  if (!audioCtx) return;
  const t = now();
  const panner = makePanner(pan);
  if (!panner) return;

  if (audioState === "grumble" || audioState === "hunt") {
    // Low detuned-sine rumble, same construction family as startDrone's
    // o1/o2 but shaped as a short discrete blip rather than a continuous
    // drone. Hunt is louder and slightly higher-pitched — an intensity
    // lift on the SAME timbre, not a different waveform.
    const hunting = audioState === "hunt";
    const f1 = hunting ? 50 : 44;
    const f2 = hunting ? 63 : 55;
    const peak = hunting ? 0.16 : 0.10;
    const dur = hunting ? 0.4 : 0.5;
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak * occ), t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    g.connect(panner);

    const o1 = audioCtx.createOscillator();
    o1.type = "sine"; o1.frequency.value = f1;
    const o2 = audioCtx.createOscillator();
    o2.type = "sine"; o2.frequency.value = f2;
    o1.connect(g); o2.connect(g);
    o1.start(t); o2.start(t);
    o1.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
  } else if (audioState === "pulse") {
    // Rhythmic mid-low triangle blip through a bandpass, with two short
    // staccato hits so it reads rhythmically distinct from the single-hit
    // grumble.
    const peak = 0.12;
    const o = audioCtx.createOscillator();
    o.type = "triangle"; o.frequency.value = 170;
    const f = audioCtx.createBiquadFilter();
    f.type = "bandpass"; f.Q.value = 4; f.frequency.value = 170;
    const g = audioCtx.createGain();
    o.connect(f); f.connect(g); g.connect(panner);

    const hit = (st) => {
      g.gain.setValueAtTime(0.0001, st);
      g.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak * occ), st + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, st + 0.1);
    };
    hit(t);
    hit(t + 0.12);
    o.start(t); o.stop(t + 0.26);
  } else if (audioState === "breath") {
    // Filtered-noise whoosh — the only voice using noise, making it
    // unmistakably airy versus the two pitched voices. Bandpassed (not the
    // heavy 1200Hz lowpass noiseBurst uses) so it sits higher and "breathy."
    const dur = 0.35;
    const peak = 0.10;
    const frames = Math.floor(audioCtx.sampleRate * dur);
    const buf = audioCtx.createBuffer(1, frames, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
    const src = audioCtx.createBufferSource();
    src.buffer = buf;
    const f = audioCtx.createBiquadFilter();
    f.type = "bandpass"; f.Q.value = 0.9; f.frequency.value = 900;
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak * occ), t + dur * 0.4);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(panner);
    src.start(t);
  }
}

// ----------------------------------------------------------------------------
// Particles — small pooled accent system (ping ripples, capture, win).
// ----------------------------------------------------------------------------
let particles = [];
function spawnParticles(x, y, n, color, opts) {
  opts = opts || {};
  const spd = opts.speed || 90;
  const life = opts.life || 0.7;
  const size = opts.size || 2.2;
  for (let i = 0; i < n; i++) {
    const a = (opts.angle != null) ? opts.angle + (Math.random() - 0.5) * (opts.spread || TAU)
                                   : Math.random() * TAU;
    const s = spd * (0.4 + Math.random() * 0.8);
    particles.push({
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
      life: life * (0.6 + Math.random() * 0.6), maxLife: life,
      color, size: size * (0.6 + Math.random() * 0.8),
    });
  }
  if (particles.length > 600) particles.splice(0, particles.length - 600);
}
function updateParticles(dt) {
  for (const p of particles) {
    p.x += p.vx * dt; p.y += p.vy * dt;
    p.vx *= 0.94; p.vy *= 0.94;
    p.life -= dt;
  }
  particles = particles.filter((p) => p.life > 0);
}

// ----------------------------------------------------------------------------
// Geometry helpers
// ----------------------------------------------------------------------------
function pointSegDist(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const len2 = dx * dx + dy * dy || 1e-9;
  let t = ((px - x1) * dx + (py - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + t * dx, cy = y1 + t * dy;
  return { d: Math.hypot(px - cx, py - cy), t, cx, cy };
}

// Segment-vs-segment intersection test (used by pathfinder visibility).
function segsIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
  const d1 = cross(cx, cy, dx, dy, ax, ay);
  const d2 = cross(cx, cy, dx, dy, bx, by);
  const d3 = cross(ax, ay, bx, by, cx, cy);
  const d4 = cross(ax, ay, bx, by, dx, dy);
  if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
      ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) return true;
  return false;
}
function cross(ax, ay, bx, by, px, py) {
  return (bx - ax) * (py - ay) - (by - ay) * (px - ax);
}

// ----------------------------------------------------------------------------
// Levels — authored in normalized [0..1] coords; laid out to the viewport.
// Each level: walls, player start, exit, predator start, decoyAllowed flag, and
// optional waypoint graph nodes (normalized) the predator routes along.
// ----------------------------------------------------------------------------
// Helper: standard outer-box walls in normalized coords.
function box(x0, y0, x1, y1) {
  return [
    [x0, y0, x1, y0],
    [x1, y0, x1, y1],
    [x1, y1, x0, y1],
    [x0, y1, x0, y0],
  ];
}

// Per-level difficulty hints (overrides applied at start). Curve summary:
//   1–2  geometry-only, predator absent/trivial (learn ping->read->move)
//   3–4  predator pressure introduced, no decoy
//   5    decoy unlocked & taught in a forgiving room
//   6–10 silent-route + decoy puzzles of rising tension
const RAW_LEVELS = [
  // ---- ACT I: LEARN TO SEE (geometry only, predator harmless) --------------

  // L1 — FIRST LIGHT: a bent corridor. No real threat. Just ping, read, walk.
  {
    name: "FIRST LIGHT",
    blurb: "Press SPACE to ping. Walls light along the wavefront, then fade. Walk to the gold exit.",
    decoy: false, predSpeed: 0, // predator effectively dormant
    playerN: { x: 0.16, y: 0.78 },
    exitN: { x: 0.84, y: 0.20 },
    predN: { x: 0.84, y: 0.84 },
    wallsN: [
      ...box(0.08, 0.10, 0.92, 0.90),
      [0.40, 0.24, 0.40, 0.60],   // gap at top (y<0.24) lets player cross to the right side
      [0.40, 0.60, 0.66, 0.60],
      [0.66, 0.40, 0.66, 0.90],
    ],
    nodesN: [
      { x: 0.24, y: 0.78 }, { x: 0.24, y: 0.20 },
      { x: 0.53, y: 0.20 }, { x: 0.53, y: 0.50 },
      { x: 0.78, y: 0.30 }, { x: 0.78, y: 0.78 },
    ],
  },

  // L2 — SWITCHBACK: a longer zig-zag to trust your memory between pings.
  {
    name: "SWITCHBACK",
    blurb: "Reveals fade fast — move from memory between pings. The dark is still empty here.",
    decoy: false, predSpeed: 0,
    playerN: { x: 0.14, y: 0.14 },
    exitN: { x: 0.86, y: 0.86 },
    predN: { x: 0.86, y: 0.14 },
    wallsN: [
      ...box(0.08, 0.08, 0.92, 0.92),
      [0.08, 0.32, 0.72, 0.32],
      [0.28, 0.56, 0.92, 0.56],
      [0.08, 0.74, 0.72, 0.74],
    ],
    nodesN: [
      { x: 0.20, y: 0.20 }, { x: 0.80, y: 0.20 },
      { x: 0.80, y: 0.44 }, { x: 0.20, y: 0.44 },
      { x: 0.20, y: 0.64 }, { x: 0.80, y: 0.64 },
      { x: 0.80, y: 0.84 }, { x: 0.20, y: 0.84 },
    ],
  },

  // ---- ACT II: THE HUNTER WAKES (predator pressure, no decoy) ---------------

  // L3 — IT HEARS YOU: predator alive but slow. Every ping calls it closer.
  {
    name: "IT HEARS YOU",
    blurb: "Now something stirs. Every ping draws the red hunter to where you pinged. Ping less.",
    decoy: false, predSpeed: 140,
    playerN: { x: 0.15, y: 0.50 },
    exitN: { x: 0.85, y: 0.50 },
    predN: { x: 0.50, y: 0.18 },
    wallsN: [
      ...box(0.08, 0.10, 0.92, 0.90),
      [0.34, 0.10, 0.34, 0.66],
      [0.66, 0.34, 0.66, 0.90],
    ],
    nodesN: [
      { x: 0.20, y: 0.50 }, { x: 0.24, y: 0.78 },
      { x: 0.50, y: 0.78 }, { x: 0.50, y: 0.22 },
      { x: 0.78, y: 0.22 }, { x: 0.80, y: 0.50 },
    ],
    // PRED-03 smoke test: mid-corridor trigger near the lower waypoint the
    // player must pass through en route to the exit. Real per-level hunt
    // trigger authoring is deferred to Phase 63.
    huntTriggerN: { x: 0.50, y: 0.78, radius: 0.10 },
  },

  // L4 — SPIRAL: tighter inward spiral, hunter is faster. Plan your pings.
  {
    name: "THE SPIRAL",
    blurb: "Wind inward to the exit. The hunter is quicker now — a wrong ping is a wrong room.",
    decoy: false, predSpeed: 165,
    playerN: { x: 0.50, y: 0.50 },
    exitN: { x: 0.12, y: 0.12 },
    predN: { x: 0.88, y: 0.88 },
    wallsN: [
      ...box(0.08, 0.08, 0.92, 0.92),
      [0.22, 0.22, 0.78, 0.22],
      [0.78, 0.22, 0.78, 0.78],
      [0.78, 0.78, 0.22, 0.78],
      [0.22, 0.78, 0.22, 0.36],
      [0.36, 0.36, 0.64, 0.36],
      [0.64, 0.36, 0.64, 0.64],
      [0.64, 0.64, 0.36, 0.64],
    ],
    nodesN: [
      { x: 0.50, y: 0.50 }, { x: 0.50, y: 0.50 - 0.0 },
      { x: 0.15, y: 0.50 }, { x: 0.15, y: 0.15 },
      { x: 0.85, y: 0.15 }, { x: 0.85, y: 0.85 },
      { x: 0.15, y: 0.85 }, { x: 0.15, y: 0.30 },
      { x: 0.70, y: 0.30 }, { x: 0.70, y: 0.70 }, { x: 0.30, y: 0.70 },
    ],
  },

  // ---- ACT III: THE LIE (decoy unlocked) -----------------------------------

  // L5 — THE LIE: forgiving room to learn the decoy. Lure it up, slip across.
  {
    name: "THE LIE",
    blurb: "New power: hold SHIFT + aim (or right-click) to throw a DECOY. The blind hunter chases the lie.",
    decoy: true, predSpeed: 158,
    playerN: { x: 0.14, y: 0.50 },
    exitN: { x: 0.88, y: 0.50 },
    predN: { x: 0.52, y: 0.50 },
    wallsN: [
      ...box(0.06, 0.10, 0.94, 0.90),
      [0.50, 0.10, 0.50, 0.40],
      [0.50, 0.60, 0.50, 0.90],
      [0.28, 0.30, 0.72, 0.30],
      [0.28, 0.70, 0.72, 0.70],
    ],
    nodesN: [
      { x: 0.20, y: 0.50 }, { x: 0.40, y: 0.50 },
      { x: 0.50, y: 0.50 }, { x: 0.60, y: 0.50 }, { x: 0.80, y: 0.50 },
      { x: 0.40, y: 0.20 }, { x: 0.60, y: 0.20 },
      { x: 0.40, y: 0.80 }, { x: 0.60, y: 0.80 },
    ],
  },

  // L6 — TWO DOORS: predator camps center. Decoy one side, take the other.
  {
    name: "TWO DOORS",
    // L6 — TWO DOORS: predator patrols between the two door midpoints; time your crossing.
    blurb: "Two ways through. Watch the red pulse — it patrols between the doors. Time your crossing.",
    decoy: true, predSpeed: 172,
    playerN: { x: 0.14, y: 0.50 },
    exitN: { x: 0.86, y: 0.50 },
    predN: { x: 0.50, y: 0.22 },
    wallsN: [
      ...box(0.08, 0.08, 0.92, 0.92),
      [0.40, 0.08, 0.40, 0.34],
      [0.40, 0.50, 0.40, 0.92],
      [0.60, 0.08, 0.60, 0.50],
      [0.60, 0.66, 0.60, 0.92],
    ],
    nodesN: [
      { x: 0.24, y: 0.50 }, { x: 0.32, y: 0.22 }, { x: 0.32, y: 0.78 },
      { x: 0.50, y: 0.22 }, { x: 0.50, y: 0.78 },
      { x: 0.68, y: 0.22 }, { x: 0.68, y: 0.78 }, { x: 0.78, y: 0.50 },
    ],
    patrolN: [
      { x: 0.50, y: 0.22 }, { x: 0.50, y: 0.78 },
    ],
    // PRED-02 smoke test: predator lies in wait at the top doorway chokepoint
    // instead of patrolling on spawn — breaks on 120px proximity or 15s.
    ambushN: { x: 0.50, y: 0.22 },
  },

  // L7 — THE GAUNTLET: predator patrols the central corridor. Bait it off the path, then run.
  {
    name: "THE GAUNTLET",
    blurb: "The hunter patrols the only road. Decoy it off the path, then run it in silence.",
    decoy: true, predSpeed: 179,
    playerN: { x: 0.12, y: 0.85 },
    exitN: { x: 0.88, y: 0.15 },
    predN: { x: 0.50, y: 0.50 },
    wallsN: [
      ...box(0.08, 0.08, 0.92, 0.92),
      [0.08, 0.40, 0.66, 0.40],
      [0.34, 0.60, 0.92, 0.60],
      [0.66, 0.08, 0.66, 0.40],
      [0.34, 0.60, 0.34, 0.92],
    ],
    nodesN: [
      { x: 0.20, y: 0.84 }, { x: 0.20, y: 0.50 },
      { x: 0.50, y: 0.50 }, { x: 0.50, y: 0.74 }, { x: 0.80, y: 0.74 },
      { x: 0.80, y: 0.50 }, { x: 0.50, y: 0.24 }, { x: 0.80, y: 0.24 },
      { x: 0.20, y: 0.24 },
    ],
    patrolN: [
      { x: 0.20, y: 0.50 }, { x: 0.80, y: 0.50 },
    ],
  },

  // L8 — CROSSROADS: predator circuits the hub. Decoy one arm, cross the cleared path.
  {
    name: "CROSSROADS",
    blurb: "The hunter circles the heart. Send the lie down one arm — slip across while it commits.",
    decoy: true, predSpeed: 184,
    playerN: { x: 0.50, y: 0.86 },
    exitN: { x: 0.50, y: 0.14 },
    predN: { x: 0.50, y: 0.50 },
    wallsN: [
      ...box(0.08, 0.08, 0.92, 0.92),
      [0.08, 0.40, 0.40, 0.40], [0.40, 0.40, 0.40, 0.08],
      [0.60, 0.08, 0.60, 0.40], [0.60, 0.40, 0.92, 0.40],
      [0.92, 0.60, 0.60, 0.60], [0.60, 0.60, 0.60, 0.92],
      [0.40, 0.92, 0.40, 0.60], [0.40, 0.60, 0.08, 0.60],
    ],
    nodesN: [
      { x: 0.50, y: 0.50 }, { x: 0.50, y: 0.20 }, { x: 0.50, y: 0.80 },
      { x: 0.20, y: 0.50 }, { x: 0.80, y: 0.50 },
      { x: 0.24, y: 0.24 }, { x: 0.76, y: 0.24 },
      { x: 0.24, y: 0.76 }, { x: 0.76, y: 0.76 },
    ],
    patrolN: [
      { x: 0.50, y: 0.20 }, { x: 0.80, y: 0.50 },
      { x: 0.50, y: 0.80 }, { x: 0.20, y: 0.50 },
    ],
  },

  // L9 — THE SENTINEL: open arena, fast predator on a tight figure-8 patrol.
  //   You must cross its path twice to reach the exit. Timing is everything.
  {
    name: "THE SENTINEL",
    blurb: "No maze to hide in — an open cave with one fast guard on a figure-8 loop. Time your crossing.",
    decoy: true, predSpeed: 188,
    playerN: { x: 0.12, y: 0.50 },
    exitN: { x: 0.88, y: 0.50 },
    predN: { x: 0.50, y: 0.28 },
    wallsN: [
      ...box(0.08, 0.08, 0.92, 0.92),
      [0.38, 0.08, 0.38, 0.44], [0.38, 0.56, 0.38, 0.92],
      [0.62, 0.08, 0.62, 0.44], [0.62, 0.56, 0.62, 0.92],
      [0.38, 0.44, 0.50, 0.44], [0.50, 0.56, 0.62, 0.56],
    ],
    nodesN: [
      { x: 0.22, y: 0.30 }, { x: 0.22, y: 0.70 },
      { x: 0.44, y: 0.50 },  // left S-gap connector: visible from both left nodes and center
      { x: 0.50, y: 0.20 }, { x: 0.50, y: 0.50 }, { x: 0.50, y: 0.80 },
      { x: 0.56, y: 0.50 },  // right S-gap connector: visible from both center and right nodes
      { x: 0.78, y: 0.30 }, { x: 0.78, y: 0.70 },
    ],
    patrolN: [
      { x: 0.50, y: 0.20 }, { x: 0.78, y: 0.30 },
      { x: 0.78, y: 0.70 }, { x: 0.50, y: 0.80 },
      { x: 0.22, y: 0.70 }, { x: 0.22, y: 0.30 },
    ],
  },

  // L10 — INTO THE DEEP: the finale. Twin throats, fastest hunter, tight exit.
  {
    name: "INTO THE DEEP",
    blurb: "The deepest dark. Everything you've learned — the map, the silence, the lie. Map it all.",
    decoy: true, predSpeed: 194,
    playerN: { x: 0.12, y: 0.50 },
    exitN: { x: 0.88, y: 0.50 },
    predN: { x: 0.50, y: 0.50 },
    wallsN: [
      ...box(0.06, 0.08, 0.94, 0.92),
      [0.30, 0.08, 0.30, 0.38], [0.30, 0.62, 0.30, 0.92],
      [0.30, 0.38, 0.52, 0.38], [0.30, 0.62, 0.52, 0.62],
      [0.52, 0.20, 0.52, 0.38], [0.52, 0.62, 0.52, 0.80],
      [0.70, 0.08, 0.70, 0.38], [0.70, 0.62, 0.70, 0.92],
      [0.52, 0.20, 0.70, 0.20], [0.52, 0.80, 0.70, 0.80],
    ],
    nodesN: [
      { x: 0.18, y: 0.50 }, { x: 0.24, y: 0.24 }, { x: 0.24, y: 0.76 },
      { x: 0.41, y: 0.50 }, { x: 0.61, y: 0.50 },
      { x: 0.61, y: 0.14 }, { x: 0.61, y: 0.86 },
      { x: 0.80, y: 0.24 }, { x: 0.80, y: 0.76 }, { x: 0.82, y: 0.50 },
    ],
  },
];

// Live (pixel-space) geometry, recomputed on layout.
function layoutLevel() {
  const raw = RAW_LEVELS[levelIndex];
  const M = 44;
  const ax = M, ay = M, bw = W - M * 2, bh = H - M * 2;
  const toX = (n) => ax + n * bw;
  const toY = (n) => ay + n * bh;

  level = {
    name: raw.name,
    blurb: raw.blurb || "",
    decoy: !!raw.decoy,
    // predSpeed: 0 means the hunter is dormant (early teaching levels).
    huntSpeed: (raw.predSpeed != null) ? raw.predSpeed : PRED_HUNT_SPEED,
    dormant: raw.predSpeed === 0,
    walls: raw.wallsN.map(([x1, y1, x2, y2]) => ({
      x1: toX(x1), y1: toY(y1), x2: toX(x2), y2: toY(y2),
    })),
    exit: { x: toX(raw.exitN.x), y: toY(raw.exitN.y), r: 24 },
    playerStart: { x: toX(raw.playerN.x), y: toY(raw.playerN.y) },
    predStart: { x: toX(raw.predN.x), y: toY(raw.predN.y) },
    nodes: (raw.nodesN || []).map((n) => ({ x: toX(n.x), y: toY(n.y) })),
    patrol: (raw.patrolN || []).map((n) => ({ x: toX(n.x), y: toY(n.y) })),
    // PRED-02: optional ambush chokepoint, same normalized N-suffix convention
    // as patrolN/playerN/exitN — null when the level has no ambush configured.
    ambush: raw.ambushN ? { x: toX(raw.ambushN.x), y: toY(raw.ambushN.y) } : null,
    // PRED-03: optional mid-level hunt-burst trigger zone, same normalized
    // N-suffix convention as ambushN, plus a radius. The radius is scaled by
    // `bw` (the content-box width) rather than a separate axis so a normalized
    // radius reads as a fraction of the play area's horizontal extent — null
    // when the level has no hunt trigger configured.
    huntTrigger: raw.huntTriggerN
      ? { x: toX(raw.huntTriggerN.x), y: toY(raw.huntTriggerN.y), radius: raw.huntTriggerN.radius * bw }
      : null,
  };
  buildNavGraph();
}

// ----------------------------------------------------------------------------
// Pathfinding — a tiny visibility graph over authored nodes (+ dynamic
// start/goal) so the predator routes AROUND walls (PRED-04). If no graph is
// authored, the predator falls back to wall-sliding steering.
// ----------------------------------------------------------------------------
let navAdj = [];   // adjacency list over level.nodes indices
function buildNavGraph() {
  navAdj = [];
  const N = level.nodes;
  for (let i = 0; i < N.length; i++) navAdj.push([]);
  for (let i = 0; i < N.length; i++) {
    for (let j = i + 1; j < N.length; j++) {
      if (lineClear(N[i].x, N[i].y, N[j].x, N[j].y)) {
        const d = Math.hypot(N[i].x - N[j].x, N[i].y - N[j].y);
        navAdj[i].push({ to: j, w: d });
        navAdj[j].push({ to: i, w: d });
      }
    }
  }
}

// True if the segment A->B does not cross any wall (with a little inset margin).
function lineClear(ax, ay, bx, by) {
  for (const w of level.walls) {
    if (segsIntersect(ax, ay, bx, by, w.x1, w.y1, w.x2, w.y2)) return false;
  }
  return true;
}

// Dijkstra from the predator's nearest visible node to the goal's nearest node;
// returns an array of pixel waypoints (ending at gx,gy) or [{x:gx,y:gy}] direct.
function planPath(sx, sy, gx, gy) {
  const N = level.nodes;
  if (!N.length || lineClear(sx, sy, gx, gy)) return [{ x: gx, y: gy }];

  const startNode = nearestVisibleNode(sx, sy);
  const goalNode = nearestVisibleNode(gx, gy);
  if (startNode < 0 || goalNode < 0) return [{ x: gx, y: gy }];

  const dist = new Array(N.length).fill(Infinity);
  const prev = new Array(N.length).fill(-1);
  const seen = new Array(N.length).fill(false);
  dist[startNode] = 0;
  for (let it = 0; it < N.length; it++) {
    let u = -1, best = Infinity;
    for (let i = 0; i < N.length; i++) if (!seen[i] && dist[i] < best) { best = dist[i]; u = i; }
    if (u < 0) break;
    seen[u] = true;
    if (u === goalNode) break;
    for (const e of navAdj[u]) {
      if (dist[u] + e.w < dist[e.to]) { dist[e.to] = dist[u] + e.w; prev[e.to] = u; }
    }
  }
  if (dist[goalNode] === Infinity) return [{ x: gx, y: gy }];

  const chain = [];
  for (let n = goalNode; n >= 0; n = prev[n]) chain.unshift(n);
  const pts = chain.map((i) => ({ x: N[i].x, y: N[i].y }));
  pts.push({ x: gx, y: gy });
  return pts;
}

function nearestVisibleNode(x, y) {
  let best = -1, bd = Infinity;
  for (let i = 0; i < level.nodes.length; i++) {
    const n = level.nodes[i];
    const d = Math.hypot(n.x - x, n.y - y);
    if (d < bd && lineClear(x, y, n.x, n.y)) { bd = d; best = i; }
  }
  return best;
}

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
const keys = Object.create(null);

window.addEventListener("keydown", (e) => {
  unlockAudio();
  const k = e.key.toLowerCase();
  if ([" ", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) e.preventDefault();

  if (state === STATE.TITLE) {
    if (k === "enter" || k === " ") { startLevel(progress > 0 ? Math.min(progress, RAW_LEVELS.length - 1) : 0); return; }
  }
  if (state === STATE.CAUGHT) {
    if (k === "enter" || k === "r" || k === " ") { startLevel(levelIndex); return; }
  }
  if (state === STATE.WON) {
    if ((k === "enter" || k === " " || k === "r") && !e.repeat) { advanceLevel(); return; }
  }
  if (state === STATE.CLEARED) {
    if (k === "enter" || k === " " || k === "r") { state = STATE.TITLE; return; }
  }

  if (state === STATE.PLAYING) {
    if (k === " " && !e.repeat) { tryPing(); }
    if (k === "r") { startLevel(levelIndex); return; }
    if (k === "`" || k === "~") { showDebug = !showDebug; }
    // Decoy aim: hold Shift (or F) then press a direction / use mouse, release to fire.
    if ((k === "shift" || k === "f") && level.decoy) { aiming = true; }
  }

  keys[k] = true;
});

window.addEventListener("keyup", (e) => {
  const k = e.key.toLowerCase();
  if (state === STATE.PLAYING && (k === "shift" || k === "f") && aiming) {
    fireDecoy();
    aiming = false;
  }
  keys[k] = false;
});

canvas.addEventListener("pointermove", (e) => {
  mouseX = e.clientX; mouseY = e.clientY; hasMouse = true;
});

canvas.addEventListener("pointerdown", (e) => {
  unlockAudio();
  mouseX = e.clientX; mouseY = e.clientY; hasMouse = true;
  if (state === STATE.TITLE) { startLevel(progress > 0 ? Math.min(progress, RAW_LEVELS.length - 1) : 0); return; }
  if (state === STATE.CAUGHT) { startLevel(levelIndex); return; }
  if (state === STATE.WON) { advanceLevel(); return; }
  if (state === STATE.CLEARED) { state = STATE.TITLE; return; }
  if (state === STATE.PLAYING) {
    // Right-click (or with decoy unlocked, hold) fires a decoy toward cursor.
    if (e.button === 2 && level.decoy) { aimAng = Math.atan2(mouseY - player.y, mouseX - player.x); fireDecoy(); }
    else { tryPing(); }
  }
});
canvas.addEventListener("contextmenu", (e) => e.preventDefault());

// Compute the current aim direction from keys or mouse.
function currentAimAngle() {
  let dx = 0, dy = 0;
  if (keys["arrowleft"] || keys["a"]) dx -= 1;
  if (keys["arrowright"] || keys["d"]) dx += 1;
  if (keys["arrowup"] || keys["w"]) dy -= 1;
  if (keys["arrowdown"] || keys["s"]) dy += 1;
  if (dx !== 0 || dy !== 0) return Math.atan2(dy, dx);
  if (hasMouse) return Math.atan2(mouseY - player.y, mouseX - player.x);
  return aimAng;
}

// ----------------------------------------------------------------------------
// Ping emission
// ----------------------------------------------------------------------------
function tryPing() {
  if (aiming) return; // holding aim suppresses a real ping
  if (cooldown > 0) return;
  pings.push({ x: player.x, y: player.y, radius: 0, decoy: false });
  cooldown = PING_COOLDOWN;
  pingCount++;
  // Predator hunts the sound: route to this ping origin (PRED-01).
  lurePredatorTo(player.x, player.y);
  // juice
  sndPing(false);
  spawnParticles(player.x, player.y, 18, COLORS.wallGlow, { speed: 130, life: 0.55, size: 2.4 });
}

// Fire a decoy ping offset from the player along the aim direction (TWIST-01).
function fireDecoy() {
  if (!level.decoy || decoyCooldown > 0) return;
  aimAng = currentAimAngle();
  // place the origin a fixed reach away, clamped to a clear-ish spot in bounds
  let ox = player.x + Math.cos(aimAng) * DECOY_REACH;
  let oy = player.y + Math.sin(aimAng) * DECOY_REACH;
  ox = Math.max(30, Math.min(W - 30, ox));
  oy = Math.max(30, Math.min(H - 30, oy));
  pings.push({ x: ox, y: oy, radius: 0, decoy: true });
  // TENS-05: leave a lingering chalk-X at the decoy's exact (clamped) origin
  // so the player can see exactly where the false signal landed.
  decoyMarks.push({ x: ox, y: oy, life: DECOY_MARK_LIFE });
  decoyCooldown = DECOY_COOLDOWN;
  pingCount++; // decoys still count as sound made
  // The blind predator believes the lie: it hunts the decoy origin (TWIST-02).
  lurePredatorTo(ox, oy);
  sndPing(true);
  spawnParticles(ox, oy, 22, COLORS.decoyGlow, { speed: 150, life: 0.6, size: 2.6 });
  spawnParticles(player.x, player.y, 8, COLORS.decoy, { speed: 70, life: 0.4, angle: aimAng, spread: 0.7 });
}

// Send the predator hunting toward (x,y) by planning a wall-respecting path.
function lurePredatorTo(x, y) {
  if (level && level.dormant) return; // teaching levels: the dark is empty
  if (predator.mode === "ambush") return; // ambush breaks only on proximity/timeout, not on lures
  predator.mode = "hunt";
  predator.tx = x; predator.ty = y;
  predator.path = planPath(predator.x, predator.y, x, y);
  predator.pathStep = 0;
}

// ----------------------------------------------------------------------------
// Init / reset
// ----------------------------------------------------------------------------
function startLevel(idx) {
  levelIndex = Math.max(0, Math.min(idx, RAW_LEVELS.length - 1));
  layoutLevel();
  player.x = level.playerStart.x;
  player.y = level.playerStart.y;
  player.r = PLAYER_R;
  predator.x = level.predStart.x;
  predator.y = level.predStart.y;
  predator.r = PRED_R;
  predator.mode = "idle";
  predator.tx = predator.x; predator.ty = predator.y;
  predator.idleTimer = 0; predator.path = []; predator.pathStep = 0;
  predator.hbTimer = 1.4; predator.stalking = false; predator.patrolStep = 0;
  predator.heading = 0;
  // PRED-02: level-load-anchored 15s ambush countdown, reset every attempt.
  predator.ambushTimer = 15;
  // If this level configures an ambush chokepoint, spawn the predator DIRECTLY
  // there in "ambush" mode instead of the default idle spawn/wander — the
  // ambush point IS the effective spawn position, not a path target.
  if (level.ambush) {
    predator.x = level.ambush.x;
    predator.y = level.ambush.y;
    predator.mode = "ambush";
  }
  // PRED-03: reset the hunt-burst latch/state every attempt so the one-shot
  // trigger fires fresh and a mid-burst capture/retry never carries the burst
  // into the next attempt.
  predator.huntTriggered = false;
  predator.huntBurstActive = false;
  predator.huntBurstTimer = 0;
  pings = [];
  ghosts = [];
  decoyMarks = [];
  particles = [];
  cooldown = 0; decoyCooldown = 0;
  footstepTimer = 0; stillTimer = 0;
  // WR-01: restore the listening-pause drone duck to its un-ducked baseline —
  // otherwise a duck engaged right before CAUGHT/WON persists into the next
  // attempt/level since update() stops calling updateFootstepAudio() while
  // not STATE.PLAYING.
  if (droneNodes) droneNodes.g.gain.setTargetAtTime(0.05, now(), 0.1);
  dripTimer = 3 + Math.random() * 5;
  pingCount = 0;
  clearTime = 0;
  introT = 4.5;       // show the level intro banner, then fade it
  transition = 1;     // play the enter-wipe
  aiming = false;
  shake = 0; flash = 0;
  // TENS-02: reset the capture sequence so a freeze/blackout engaged on a
  // prior capture never bleeds into the new attempt.
  freezeFrames = 0; captureStage = 0;
  // TENS-03: reset the ping-ready ring's completion-pulse state so a pulse
  // mid-fire never bleeds across levels/retries.
  pingReadyPulse = 0; prevCooldown = 0;
  state = STATE.PLAYING;
  unlockAudio();
}

// AUDIO-08: act-break silence. Levels 2/6/10 (0-based indices 1/5/9) are the
// final level of an act — fade all audio to silence for ~1.5s before the next
// level's audio swells back in. Lives here (not onWin()) so the win bell sting
// is never silenced; non-act-final advances are unchanged.
// CR-01: guards the 1.5s act-break window against repeated/held input —
// without this, re-entering advanceLevel() during the deferred startLevel()
// call stacks competing masterGain ramps and startLevel() calls.
let actBreakPending = false;
function advanceLevel() {
  if (actBreakPending) return;
  if (levelIndex + 1 < RAW_LEVELS.length) {
    const actBreak = (levelIndex === 1 || levelIndex === 5 || levelIndex === 9);
    if (actBreak && masterGain) {
      actBreakPending = true;
      const t = now();
      masterGain.gain.setTargetAtTime(0, t, 0.4);
      const next = levelIndex + 1;
      setTimeout(() => {
        startLevel(next);
        if (masterGain) masterGain.gain.setTargetAtTime(0.9, now(), 0.4);
        actBreakPending = false;
      }, 1500);
    } else {
      startLevel(levelIndex + 1);
    }
  } else {
    state = STATE.CLEARED;
  }
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function update(dt) {
  // Always tick particles / shake / flash so end screens animate.
  updateParticles(dt);
  shake = Math.max(0, shake - dt * 60);
  flash = Math.max(0, flash - dt * 2.2);
  transition = Math.max(0, transition - dt * 1.6);
  // TENS-02: captureStage counts UP (elapsed time on the CAUGHT death screen)
  // so it animates while state===CAUGHT; this preamble runs even when
  // state!==PLAYING (the early-return below is AFTER this block). During the
  // 3-frame freeze, update() is skipped entirely by frame(), so captureStage
  // holds at 0 until the freeze releases, then begins counting. CR-01: this
  // guarantee depends on frame()'s accumulator loop breaking immediately on
  // any state transition out of PLAYING — without that break, leftover
  // backlog iterations in the same rAF tick would keep calling this preamble
  // (and inflating captureStage) after capture/win fires but before the
  // freeze branch engages.
  captureStage += dt;
  // TENS-03: decay the one-shot ping-ready completion pulse every frame
  // (always-run, like shake/flash) so it fades even across state changes.
  pingReadyPulse = Math.max(0, pingReadyPulse - dt * PING_PULSE_DECAY);

  if (state !== STATE.PLAYING) { setProximity(0); return; }

  clearTime += dt;
  introT = Math.max(0, introT - dt);
  cooldown = Math.max(0, cooldown - dt);
  // TENS-03: detect the exact >0 -> <=0 ready-crossing (fires the one-shot
  // pulse exactly once, never while idle/ready) before updating prevCooldown.
  if (prevCooldown > 0 && cooldown <= 0) pingReadyPulse = 1;
  prevCooldown = cooldown;
  decoyCooldown = Math.max(0, decoyCooldown - dt);
  if (aiming) aimAng = currentAimAngle();

  updatePlayer(dt);
  updateFootstepAudio(dt);
  updatePings(dt);
  updateGhosts(dt);
  updateDecoyMarks(dt);
  updatePredatorHeartbeat(dt);
  updatePredator(dt);
  updateProximityAudio();
  updateAmbience(dt);

  // PRED-03: dt-driven hunt-burst countdown — the burst reverts after
  // HUNT_BURST_DURATION seconds.
  if (predator.huntBurstActive) {
    predator.huntBurstTimer -= dt;
    if (predator.huntBurstTimer <= 0) predator.huntBurstActive = false;
  }
  // PRED-03: one-shot trigger — fires exactly once per attempt on first entry
  // into the level-authored huntTrigger radius (huntTriggered latch prevents
  // any re-fire on subsequent entries during the same attempt).
  if (level.huntTrigger && !predator.huntTriggered) {
    const d = Math.hypot(player.x - level.huntTrigger.x, player.y - level.huntTrigger.y);
    if (d < level.huntTrigger.radius) {
      predator.huntTriggered = true;
      predator.huntBurstActive = true;
      predator.huntBurstTimer = HUNT_BURST_DURATION;
    }
  }

  if (Math.hypot(player.x - level.exit.x, player.y - level.exit.y) < level.exit.r) { onWin(); return; }
  if (Math.hypot(player.x - predator.x, player.y - predator.y) < PRED_CATCH) { onCaught(); }
}

function updatePlayer(dt) {
  let dx = 0, dy = 0;
  if (keys["arrowleft"] || keys["a"]) dx -= 1;
  if (keys["arrowright"] || keys["d"]) dx += 1;
  if (keys["arrowup"] || keys["w"]) dy -= 1;
  if (keys["arrowdown"] || keys["s"]) dy += 1;
  // AUDIO-03/04: movement-key INPUT intent, not net displacement — pushing
  // into a wall still counts as "moving" and must not trigger the listening
  // pause reward.
  playerMoving = !(dx === 0 && dy === 0);
  if (dx === 0 && dy === 0) return;
  const len = Math.hypot(dx, dy) || 1;
  dx /= len; dy /= len;
  const step = PLAYER_SPEED * dt;
  moveAndCollide(dx * step, 0);
  moveAndCollide(0, dy * step);
  // NOTE: moving silently does NOT touch the predator (TWIST-04).
}

// AUDIO-03/AUDIO-04: rhythmic centered footstep clicks while a movement key is
// held; after LISTEN_PAUSE_DELAY seconds of zero movement INPUT, duck the cave
// drone (~50%) as a "listening pause" reward. The proximity hum is untouched —
// it's diegetic predator-distance info the player still needs while still.
function updateFootstepAudio(dt) {
  if (playerMoving) {
    stillTimer = 0;
    footstepTimer -= dt;
    if (footstepTimer <= 0) {
      footstepClick();
      footstepTimer = FOOTSTEP_INTERVAL;
    }
    if (droneNodes) droneNodes.g.gain.setTargetAtTime(0.05, now(), 0.3);
  } else {
    stillTimer += dt;
    if (stillTimer >= LISTEN_PAUSE_DELAY) {
      if (droneNodes) droneNodes.g.gain.setTargetAtTime(0.05 * DRONE_DUCK, now(), 0.3);
    }
  }
}

// AUDIO-06: cave drips fire on a dt-driven 3-8s countdown (no setInterval, to
// avoid drift if the tab is backgrounded), each randomly panned left/right.
// WR-03: short-circuit when there's no AudioContext so the countdown doesn't
// silently churn through scheduled drips as no-ops on unsupported browsers.
function updateAmbience(dt) {
  if (!audioCtx) return;
  dripTimer -= dt;
  if (dripTimer <= 0) {
    const pan = (Math.random() * 1.2) - 0.6;
    caveDrip(pan);
    dripTimer = 3 + Math.random() * 5;
  }
}

function moveAndCollide(mx, my) {
  const nx = player.x + mx, ny = player.y + my;
  if (!collidesAt(nx, ny, player.r)) { player.x = nx; player.y = ny; }
}

function collidesAt(x, y, r) {
  for (const w of level.walls) {
    if (pointSegDist(x, y, w.x1, w.y1, w.x2, w.y2).d < r) return true;
  }
  return false;
}

function updatePings(dt) {
  for (const p of pings) { p.radius += PING_SPEED * dt; revealAlongFront(p); }
  pings = pings.filter((p) => p.radius <= (p.predHB ? PRED_HB_RADIUS : PING_MAX_RADIUS));
}

// AUDIO-01: collapses the 4 code-level predator behaviors into the 3 audio
// states, branching only on existing fields (predator.stalking,
// predator.mode, level.patrol) — no new predator behavior fields invented.
// Precedence: stalking > hunt > patrol > idle-wander.
// PRED-02: "ambush" mode deliberately has NO dedicated branch here — it falls
// through to the patrol/grumble mapping below (whichever the level has) and
// stays quiet via the existing distance/occlusion-attenuated proximity and
// heartbeat audio (Phase 60), not a new timbre. A forced near-silent/breath
// branch for ambush is intentionally out of scope (that's PRED-03's job).
function predatorAudioState() {
  // PRED-03: the stalk-mode breath audio fires unconditionally for the entire
  // burst duration, independent of the real proximity-detection flag below,
  // so this is checked first, before every other branch.
  if (predator.huntBurstActive) return "breath";
  if (predator.stalking) return "breath";
  if (predator.mode === "hunt") return "hunt";
  if (level.patrol && level.patrol.length > 0) return "pulse";
  return "grumble";
}

function updatePredatorHeartbeat(dt) {
  if (level.dormant) return;
  predator.hbTimer -= dt;
  if (predator.hbTimer <= 0) {
    predator.hbTimer = predator.stalking ? 0.65 : PRED_HB_INTERVAL;
    // PRED-03: applied AFTER the stalking/idle branch resolves, so the 0.5x
    // stacks on top of whichever base interval was chosen (0.325s during a
    // stalking burst, 1.3s during an idle burst) rather than overriding it.
    if (predator.huntBurstActive) predator.hbTimer *= HUNT_HB_MULT;
    pings.push({ x: predator.x, y: predator.y, radius: 0, predHB: true });
    predatorVoice(predatorAudioState(), panForX(predator.x), predOcclusion);
  }
}

function revealAlongFront(p) {
  for (const w of level.walls) {
    const segLen = Math.hypot(w.x2 - w.x1, w.y2 - w.y1);
    const steps = Math.max(2, Math.ceil(segLen / 6));
    let runStart = null;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const sx = w.x1 + (w.x2 - w.x1) * t;
      const sy = w.y1 + (w.y2 - w.y1) * t;
      const d = Math.hypot(sx - p.x, sy - p.y);
      const onFront = Math.abs(d - p.radius) < PING_BAND;
      if (onFront && runStart === null) runStart = t;
      else if (!onFront && runStart !== null) { spawnGhost(w, runStart, (i - 1) / steps, p.decoy, p.predHB); runStart = null; }
    }
    if (runStart !== null) spawnGhost(w, runStart, 1, p.decoy, p.predHB);
  }
}

// Non-linear age-to-alpha curve (TENS-04): fast-bright phase then a long slow
// tail, flooring at GHOST_FLOOR_ALPHA rather than reaching 0. Exponential
// decay with exponent 3 front-loads the brightness drop in the first few
// seconds (clearly visible "just revealed vs a moment ago" contrast) then
// trails off slowly for the remainder of GHOST_LIFE, never dropping below
// the floor. All reveal sources (player ping, decoy, predator heartbeat)
// share this one curve.
function ghostAlpha(life) {
  const t = Math.max(0, Math.min(1, life / GHOST_LIFE));
  return GHOST_FLOOR_ALPHA + (1 - GHOST_FLOOR_ALPHA) * Math.pow(t, 3);
}

function spawnGhost(w, t0, t1, decoy, predHB) {
  if (t1 <= t0) t1 = Math.min(1, t0 + 0.02);
  ghosts.push({
    x1: w.x1 + (w.x2 - w.x1) * t0, y1: w.y1 + (w.y2 - w.y1) * t0,
    x2: w.x1 + (w.x2 - w.x1) * t1, y2: w.y1 + (w.y2 - w.y1) * t1,
    life: GHOST_LIFE, decoy: !!decoy, predHB: !!predHB,
  });
}

function updateGhosts(dt) {
  // Age every ghost, but floor (never delete) so learned walls stay faintly
  // visible forever — ghostAlpha already floors the render alpha once life
  // reaches this tiny epsilon, so we just need life to stop going negative.
  for (const g of ghosts) {
    g.life -= dt;
    if (g.life < dt) g.life = dt;
  }
  if (ghosts.length > 4000) ghosts.splice(0, ghosts.length - 4000);
}

// TENS-05: age decoy chalk-X marks and DELETE them at life<=0 — unlike
// Plan 01's floored ghosts, decoyMarks are a 3s transient, not a forever-faint
// wall, so this is a sibling updater that filters rather than clamps.
function updateDecoyMarks(dt) {
  for (const m of decoyMarks) m.life -= dt;
  decoyMarks = decoyMarks.filter((m) => m.life > 0);
}

function updatePredator(dt) {
  predator.rippleT += dt;
  if (level.dormant) return;

  // PRED-03: layered speed multiplier during a hunt burst — scales whatever
  // speed the active mode already uses without changing mode/targeting or
  // forcing a beeline.
  const burst = predator.huntBurstActive ? HUNT_SPEED_MULT : 1;

  // --- AMBUSH MODE (PRED-02): holds position at a level-authored chokepoint,
  // near-silent, until the player steps within AMBUSH_BREAK_RADIUS OR the
  // level-load-anchored ambushTimer runs out — whichever comes first. Two
  // independent race conditions, no pause/reset on a partial proximity dip
  // (the timer counts down monotonically regardless of distance). Placed
  // BEFORE stalk/hunt/idle so it fully intercepts predator behavior while
  // ambushing; once broken, the very next frame's stalk/hunt/idle logic
  // takes over normally.
  if (predator.mode === "ambush") {
    predator.ambushTimer -= dt;
    const toPlAmbush = Math.hypot(player.x - predator.x, player.y - predator.y);
    if (toPlAmbush < AMBUSH_BREAK_RADIUS || predator.ambushTimer <= 0) {
      predator.mode = "idle";
      predator.idleTimer = 0;
      pickIdleTarget();
    }
    return;
  }

  // --- STALK MODE: within sense radius it hears footsteps and homes in directly ---
  const toPl = Math.hypot(player.x - predator.x, player.y - predator.y);
  if (toPl < PRED_SENSE_RADIUS) {
    if (!predator.stalking) {
      predator.stalking = true;
      predator.hbTimer = 0; // pulse immediately on detection
    }
    stepToward((player.x - predator.x) / toPl, (player.y - predator.y) / toPl, level.huntSpeed * burst * dt);
    return;
  }
  if (predator.stalking) {
    predator.stalking = false;
    predator.mode = "idle";
    predator.idleTimer = 0;
    pickIdleTarget();
  }

  // --- HUNT MODE: pathfind toward last-heard ping origin ---
  if (predator.mode === "hunt") {
    const wp = predator.path[predator.pathStep];
    if (!wp) {
      predator.mode = "idle"; predator.idleTimer = 0; pickIdleTarget();
    } else {
      const dx = wp.x - predator.x, dy = wp.y - predator.y;
      const dist = Math.hypot(dx, dy);
      if (dist < PRED_ARRIVE) {
        predator.pathStep++;
        if (predator.pathStep >= predator.path.length) {
          predator.mode = "idle"; predator.idleTimer = 0; pickIdleTarget();
        }
      } else {
        stepToward(dx / dist, dy / dist, level.huntSpeed * burst * dt);
      }
    }
    return;
  }

  // --- IDLE MODE: patrol loop if the level defines one, else random wander ---
  if (level.patrol && level.patrol.length > 0) {
    const pt = level.patrol[predator.patrolStep % level.patrol.length];
    const dx = pt.x - predator.x, dy = pt.y - predator.y;
    const dist = Math.hypot(dx, dy);
    if (dist < PRED_ARRIVE) predator.patrolStep++;
    else stepToward(dx / dist, dy / dist, PRED_IDLE_SPEED * burst * dt);
  } else {
    predator.idleTimer -= dt;
    if (predator.idleTimer <= 0) { predator.idleTimer = PRED_IDLE_RETARGET; pickIdleTarget(); }
    const dx = predator.tx - predator.x, dy = predator.ty - predator.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 4) stepToward(dx / dist, dy / dist, PRED_IDLE_SPEED * burst * dt);
  }
}

function pickIdleTarget() {
  // prefer wandering toward an authored node so idle drift stays in playable space
  if (level.nodes.length) {
    const n = level.nodes[(Math.random() * level.nodes.length) | 0];
    if (lineClear(predator.x, predator.y, n.x, n.y)) { predator.tx = n.x; predator.ty = n.y; return; }
  }
  const ang = Math.random() * TAU;
  const reach = 80 + Math.random() * 140;
  predator.tx = Math.max(40, Math.min(W - 40, predator.x + Math.cos(ang) * reach));
  predator.ty = Math.max(40, Math.min(H - 40, predator.y + Math.sin(ang) * reach));
}

// Move predator, wall-resolved per-axis (PRED-04 already enforced by path, this
// is the safety net so it never tunnels through geometry).
function stepToward(ux, uy, amt) {
  // PRED-01: capture facing only when the direction is nonzero this frame,
  // so predator.heading HOLDS its last value while stationary (e.g. a future
  // ambush hold keeps facing its last direction rather than snapping to 0).
  if (ux !== 0 || uy !== 0) predator.heading = Math.atan2(uy, ux);
  const tryMove = (mx, my) => {
    const nx = predator.x + mx, ny = predator.y + my;
    if (!collidesAt(nx, ny, predator.r)) { predator.x = nx; predator.y = ny; }
  };
  tryMove(ux * amt, 0);
  tryMove(0, uy * amt);
}

function updateProximityAudio() {
  const d = Math.hypot(player.x - predator.x, player.y - predator.y);
  const near = 320; // start humming within this distance
  const closeness = Math.max(0, Math.min(1, 1 - d / near));
  const occluded = !lineClear(predator.x, predator.y, player.x, player.y);
  const occ = occluded ? OCCLUSION_ATTEN : 1;
  predOcclusion = occ;
  setProximity(closeness, occ);
  // TENS-01: NEW close-range tension tone, stacked on the hum above — reuses
  // the same `d` and `occ` already computed here (no second distance calc).
  const closeness80 = Math.max(0, Math.min(1, 1 - d / 80));
  setTensionTone(closeness80, occ);
}

// Normalize a stored best entry to {pings, time} (old format was a bare number).
function getBest(idx) {
  const v = bestMap[String(idx)];
  if (v == null) return null;
  if (typeof v === "number") return { pings: v, time: null };
  return v;
}

function onWin() {
  state = STATE.WON;
  // Best = fewest pings, and separately fastest time.
  const key = String(levelIndex);
  const prev = getBest(levelIndex);
  const next = {
    pings: prev ? Math.min(prev.pings, pingCount) : pingCount,
    time: prev && prev.time != null ? Math.min(prev.time, clearTime) : clearTime,
  };
  bestMap[key] = next; saveBestMap();
  if (levelIndex + 1 > progress) { progress = levelIndex + 1; saveProgress(); }
  flash = 0.7; flashColor = COLORS.exit;
  shake = 6;
  spawnParticles(level.exit.x, level.exit.y, 60, COLORS.exitGlow, { speed: 220, life: 1.0, size: 3 });
  sndWin();
}

function onCaught() {
  state = STATE.CAUGHT;
  // TENS-02: replaces the old single-fade flash field (formerly set here)
  // with the 3-beat capture sequence — 3-frame freeze, then captureStage
  // drives the white->black overlay (see frame()/update()/render()).
  // onWin()'s flash assignment is untouched.
  freezeFrames = 3;
  captureStage = 0;
  shake = 14;
  spawnParticles(player.x, player.y, 50, COLORS.predator, { speed: 200, life: 0.9, size: 3 });
  // TENS-01: cut the tension tone + proximity hum to instant silence —
  // the silence is the hit, landing right before the capture sting.
  cutTensionAudio();
  sndCapture();
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function render() {
  ctx.save();
  // screen shake
  if (shake > 0.2) {
    ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
  }

  // void + vignette
  drawVoid();

  if (state === STATE.TITLE) { ctx.restore(); renderTitle(); return; }
  if (state === STATE.CLEARED) { ctx.restore(); renderCleared(); return; }

  renderWorld();
  ctx.restore();

  // full-screen flash overlay (above shake transform)
  if (flash > 0.001) {
    ctx.save();
    ctx.globalAlpha = Math.min(0.5, flash * 0.5);
    ctx.fillStyle = flashColor;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  // TENS-02: capture white->black overlay — a SEPARATE opaque overlay from
  // the `flash` block above (which caps at 0.5 alpha and is unchanged for
  // WON/other paths). Only active once the 3-frame freeze has released and
  // captureStage starts counting up (state===CAUGHT the whole time it runs).
  // First CAPTURE_WHITE_DUR seconds: opaque white bleach. After that: opaque
  // black, which persists and sits under renderEnd()'s CAUGHT screen.
  if (state === STATE.CAUGHT) {
    ctx.save();
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = captureStage < CAPTURE_WHITE_DUR ? "#ffffff" : COLORS.void;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  // level-enter wipe: a descending dark veil that lifts as the level begins
  if (transition > 0.001) {
    ctx.save();
    ctx.fillStyle = COLORS.void;
    ctx.globalAlpha = Math.min(1, transition);
    const veil = H * transition;
    ctx.fillRect(0, 0, W, veil);
    // a thin chalk scan-line at the leading edge
    ctx.globalAlpha = Math.min(1, transition) * 0.6;
    ctx.strokeStyle = COLORS.wallGlow;
    ctx.lineWidth = 1.5;
    line(0, veil, W, veil);
    ctx.restore();
  }

  if (state === STATE.CAUGHT) renderEnd("CAUGHT", COLORS.predator, "The hunter found your sound.");
  if (state === STATE.WON) renderEnd("ESCAPED", COLORS.exit, bestText());
}

function drawVoid() {
  ctx.fillStyle = COLORS.void;
  ctx.fillRect(-40, -40, W + 80, H + 80);
  // radial vignette toward corners for depth
  const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.25, W / 2, H / 2, Math.max(W, H) * 0.75);
  g.addColorStop(0, "rgba(0,0,0,0)");
  g.addColorStop(1, COLORS.voidEdge);
  ctx.fillStyle = g;
  ctx.fillRect(-40, -40, W + 80, H + 80);
}

function renderWorld() {
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Ghost-outlines (fading chalk fragments) with a soft bloom underlay.
  for (const g of ghosts) {
    const a = ghostAlpha(g.life);
    const tint = g.predHB ? COLORS.predator : (g.decoy ? COLORS.decoy : COLORS.ghost);
    // bloom
    ctx.strokeStyle = tint;
    ctx.globalAlpha = a * 0.18;
    ctx.lineWidth = 6;
    line(g.x1, g.y1, g.x2, g.y2);
    // crisp line
    ctx.globalAlpha = a * 0.9;
    ctx.lineWidth = 1.8;
    line(g.x1, g.y1, g.x2, g.y2);
  }
  ctx.globalAlpha = 1;

  drawDecoyMarks();

  // Live ping fronts: bright chalk-white intersections + a colored glow.
  for (const p of pings) {
    const maxR = p.predHB ? PRED_HB_RADIUS : PING_MAX_RADIUS;
    const fade = Math.max(0, 1 - p.radius / maxR);
    const frontGlow = p.predHB ? COLORS.predatorDeep : (p.decoy ? COLORS.decoyGlow : COLORS.wallGlow);
    const frontCore = p.predHB ? COLORS.predator : (p.decoy ? COLORS.decoy : COLORS.wallFront);

    for (const w of level.walls) {
      const segLen = Math.hypot(w.x2 - w.x1, w.y2 - w.y1);
      const steps = Math.max(2, Math.ceil(segLen / 6));
      let runStart = null;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const sx = w.x1 + (w.x2 - w.x1) * t;
        const sy = w.y1 + (w.y2 - w.y1) * t;
        const d = Math.hypot(sx - p.x, sy - p.y);
        const onFront = Math.abs(d - p.radius) < PING_BAND;
        if (onFront && runStart === null) runStart = t;
        else if (!onFront && runStart !== null) { drawFrontSeg(w, runStart, (i - 1) / steps, fade, frontGlow, frontCore); runStart = null; }
      }
      if (runStart !== null) drawFrontSeg(w, runStart, 1, fade, frontGlow, frontCore);
    }

    // faint expanding ring guide
    ctx.globalAlpha = fade * 0.10;
    ctx.strokeStyle = frontGlow;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, TAU);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Particles (under markers).
  drawParticles();

  drawExit();
  drawPredator();
  drawAim();      // decoy aim indicator (only while aiming + unlocked)
  drawPlayer();

  drawGrain();    // proximity grain noise (TENS-06) — last world step, under the HUD

  renderHUD();
}

function line(x1, y1, x2, y2) {
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
}

// WR-03: shared two-pass "soft bloom, then crisp core" stroke helper. Used by
// drawDecoyMarks(), drawFrontSeg(), and drawPredatorGhost() — each draws a
// different shape (X of two lines, a single segment, an arc) so this takes a
// drawShapeFn callback rather than baking in geometry. Callers are still
// responsible for ctx.save()/ctx.restore() around the call so globalAlpha
// changes don't leak.
function strokeGlowThenCrisp(drawShapeFn, glow) {
  ctx.strokeStyle = glow.color;
  ctx.globalAlpha = glow.alpha;
  ctx.lineWidth = glow.width;
  drawShapeFn();
  ctx.strokeStyle = glow.coreColor;
  ctx.globalAlpha = glow.coreAlpha;
  ctx.lineWidth = glow.coreWidth;
  drawShapeFn();
}

// TENS-05: faint chalk-X lingering at each decoy's origin so the player can
// see exactly where the false signal landed. Separate from drawAim()'s
// aiming-only dashed line + ready-ring (game.js drawAim()) and from the
// instantaneous fire particle burst (fireDecoy()) — this persists ~3s and
// fades LINEARLY via decoyMarks' life/DECOY_MARK_LIFE ratio.
function drawDecoyMarks() {
  for (const m of decoyMarks) {
    const a = Math.max(0, m.life / DECOY_MARK_LIFE);
    const s = DECOY_MARK_SIZE;
    ctx.save();
    strokeGlowThenCrisp(() => {
      line(m.x - s, m.y - s, m.x + s, m.y + s);
      line(m.x - s, m.y + s, m.x + s, m.y - s);
    }, {
      color: COLORS.decoyGlow, alpha: a * 0.35, width: 4,
      coreColor: COLORS.decoy, coreAlpha: a * 0.7, coreWidth: 1.6,
    });
    ctx.restore();
  }
}

function drawFrontSeg(w, t0, t1, fade, glow, core) {
  if (t1 < t0) return;
  const x1 = w.x1 + (w.x2 - w.x1) * t0, y1 = w.y1 + (w.y2 - w.y1) * t0;
  const x2 = w.x1 + (w.x2 - w.x1) * t1, y2 = w.y1 + (w.y2 - w.y1) * t1;
  strokeGlowThenCrisp(() => line(x1, y1, x2, y2), {
    color: glow, alpha: fade * 0.5, width: 7,
    coreColor: core, coreAlpha: fade, coreWidth: 3,
  });
}

// Proximity grain noise (TENS-06): scattered low-alpha monochrome fillRect
// dots, density rising as the predator closes. Occlusion-free (no lineClear
// check) — a raw danger-pressure overlay, not a sightline effect. Drawn as
// the last world-layer step before renderHUD() so HUD text stays legible.
function drawGrain() {
  const d = Math.hypot(player.x - predator.x, player.y - predator.y);
  if (d >= GRAIN_FAR_DIST) return;
  const dc = Math.max(GRAIN_NEAR_DIST, Math.min(GRAIN_FAR_DIST, d));
  const t = (GRAIN_FAR_DIST - dc) / (GRAIN_FAR_DIST - GRAIN_NEAR_DIST); // 0 far -> 1 near
  const count = Math.round(GRAIN_MIN_DOTS + (GRAIN_MAX_DOTS - GRAIN_MIN_DOTS) * t);

  ctx.save();
  ctx.fillStyle = "#e8e8f0";
  for (let i = 0; i < count; i++) {
    ctx.globalAlpha = 0.04 + Math.random() * 0.08;
    const x = Math.random() * W;
    const y = Math.random() * H;
    const size = 1 + Math.random();
    ctx.fillRect(x, y, size, size);
  }
  ctx.restore();
}

function drawParticles() {
  for (const p of particles) {
    const a = Math.max(0, p.life / p.maxLife);
    ctx.globalAlpha = a;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * a, 0, TAU);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawExit() {
  const e = level.exit;
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 500);
  ctx.save();
  ctx.strokeStyle = COLORS.exitGlow;
  ctx.globalAlpha = 0.18 + pulse * 0.18;
  ctx.lineWidth = 8;
  ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, TAU); ctx.stroke();
  ctx.strokeStyle = COLORS.exit;
  ctx.globalAlpha = 0.4 + pulse * 0.4;
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, TAU); ctx.stroke();
  ctx.globalAlpha = 0.7 + pulse * 0.3;
  ctx.fillStyle = COLORS.exit;
  ctx.beginPath(); ctx.arc(e.x, e.y, 3, 0, TAU); ctx.fill();
  ctx.restore();
}

function drawPredator() {
  ctx.save();
  ctx.translate(predator.x, predator.y);
  ctx.rotate(predator.heading);

  const t = performance.now() / 1000;
  // PRED-01: stalk-gated pulse — near-static while wandering, visibly "alive"
  // while stalking. Amplitude (not just the oscillation) is gated on the flag.
  const pulse = 0.5 + 0.5 * Math.sin(t * 5);
  const stalkAmt = predator.stalking ? 1 : 0.12;

  // PRED-02: reduced ripple telegraph, intensified only when stalking.
  for (let i = 0; i < 3; i++) {
    const ph = (predator.rippleT * 1.1 + i / 3) % 1;
    const rr = predator.r * (0.5 + ph * 2.2);
    ctx.globalAlpha = (1 - ph) * (predator.mode === "hunt" ? 0.5 : 0.3) * stalkAmt;
    ctx.strokeStyle = COLORS.predator;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, 0, rr, 0, TAU); ctx.stroke();
  }

  // Angular wireframe silhouette in LOCAL space (already translated+rotated).
  ctx.beginPath();
  ctx.moveTo(PRED_SHAPE[0].x * predator.r, PRED_SHAPE[0].y * predator.r);
  for (let i = 1; i < PRED_SHAPE.length; i++) {
    ctx.lineTo(PRED_SHAPE[i].x * predator.r, PRED_SHAPE[i].y * predator.r);
  }
  ctx.closePath();
  ctx.globalAlpha = 0.25 + pulse * 0.18 * stalkAmt;
  ctx.fillStyle = COLORS.predatorDeep;
  ctx.fill();
  ctx.globalAlpha = 0.85 + pulse * 0.15 * stalkAmt;
  ctx.strokeStyle = COLORS.predator;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Small filled core for body presence, pulsing only when stalking.
  ctx.globalAlpha = 0.7 + pulse * 0.3 * stalkAmt;
  ctx.fillStyle = COLORS.predator;
  ctx.beginPath(); ctx.arc(0, 0, predator.r * 0.32, 0, TAU); ctx.fill();

  ctx.restore();
}

// TENS-02: chalk-white STROKE-ONLY outline at the predator's frozen position,
// drawn on the CAUGHT death screen instead of the normal pulsing drawPredator.
// predator.x/predator.y are already frozen — update() returns early once
// state !== STATE.PLAYING, so the position never advances after capture.
// Deliberately distinct from drawPredator(): no filled core, no pulsing
// ripples, cool-chalk palette (not COLORS.predator). Fades from clearly
// visible toward a dim floor over the death-screen lifetime, driven by
// captureStage (the same elapsed-time-up timer that drives the white->black
// overlay in render() — it keeps counting for the rest of the CAUGHT screen
// after the white window passes, so it doubles as the death-screen clock).
const GHOST_FADE_DUR = 2.5;    // seconds over which the outline dims to its floor
const GHOST_FADE_FLOOR = 0.18; // never fully vanishes — stays faintly visible
function drawPredatorGhost() {
  const t = Math.max(0, Math.min(1, captureStage / GHOST_FADE_DUR));
  const a = 1 - (1 - GHOST_FADE_FLOOR) * t;
  ctx.save();
  strokeGlowThenCrisp(() => {
    ctx.beginPath(); ctx.arc(predator.x, predator.y, predator.r * 1.15, 0, TAU); ctx.stroke();
  }, {
    color: COLORS.wallGlow, alpha: a * 0.35, width: 5,
    coreColor: COLORS.wallFront, coreAlpha: a * 0.9, coreWidth: 1.8,
  });
  ctx.restore();
}

function drawPlayer() {
  ctx.save();
  // halo
  ctx.fillStyle = COLORS.playerGlow;
  ctx.globalAlpha = 0.16;
  ctx.beginPath(); ctx.arc(player.x, player.y, player.r * 1.4, 0, TAU); ctx.fill();
  // core
  ctx.globalAlpha = 0.95;
  ctx.fillStyle = COLORS.player;
  ctx.beginPath(); ctx.arc(player.x, player.y, player.r * 0.5, 0, TAU); ctx.fill();
  ctx.restore();

  drawCooldownRing();
}

// TENS-03: in-world clockwise cooldown ring around the player dot — an
// at-a-glance "can I ping?" readout additional to the top-left HUD bar
// (game.js renderHUD(), ~line 1819). Reuses the EXACT same fraction the HUD
// bar uses so ring and bar always agree, and tracks the real-ping `cooldown`
// only (never decoyCooldown — drawAim() already shows a decoy-ready ring at
// the decoy origin). Flares brighter for ~0.3s via pingReadyPulse the instant
// the cooldown completes.
function drawCooldownRing() {
  const frac = Math.max(0, Math.min(1, 1 - cooldown / PING_COOLDOWN));
  const ringR = player.r * 2.2;
  const start = -Math.PI / 2; // begin the sweep at the top, fill clockwise
  ctx.save();
  ctx.strokeStyle = COLORS.wallGlow;
  ctx.lineWidth = 2 + pingReadyPulse * 1.5;
  ctx.globalAlpha = 0.5 + pingReadyPulse * 0.5;
  ctx.beginPath();
  if (frac >= 1) {
    ctx.arc(player.x, player.y, ringR, 0, TAU);
  } else if (frac > 0) {
    ctx.arc(player.x, player.y, ringR, start, start + frac * TAU);
  }
  ctx.stroke();
  ctx.restore();
}

// Decoy aim arc — appears only while a decoy is being aimed (unlocked levels).
function drawAim() {
  if (!level.decoy) return;
  if (!aiming) return; // keep it clean: only show while actually aiming
  const ang = aimAng;
  const ox = player.x + Math.cos(ang) * DECOY_REACH;
  const oy = player.y + Math.sin(ang) * DECOY_REACH;
  ctx.save();
  ctx.setLineDash([4, 6]);
  ctx.strokeStyle = COLORS.decoy;
  ctx.globalAlpha = 0.55;
  ctx.lineWidth = 1.5;
  line(player.x, player.y, ox, oy);
  ctx.setLineDash([]);
  const ready = decoyCooldown <= 0;
  ctx.globalAlpha = ready ? 0.8 : 0.3;
  ctx.strokeStyle = COLORS.decoyGlow;
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(ox, oy, 14, 0, TAU); ctx.stroke();
  ctx.restore();
}

// ----------------------------------------------------------------------------
// HUD + overlays (canvas-drawn)
// ----------------------------------------------------------------------------
function renderHUD() {
  ctx.save();
  ctx.font = "13px system-ui, sans-serif";
  ctx.textBaseline = "top";

  ctx.fillStyle = COLORS.hudBright;
  ctx.fillText(`LEVEL ${levelIndex + 1}/${RAW_LEVELS.length} · ${level.name}`, 16, 14);

  const ready = cooldown <= 0;
  ctx.fillStyle = ready ? COLORS.player : COLORS.hud;
  ctx.fillText(ready ? "PING READY (space)" : "recharging…", 16, 34);

  ctx.fillStyle = COLORS.hud;
  ctx.fillText(`pings: ${pingCount}   time: ${fmtTime(clearTime)}`, 16, 52);
  const bk = getBest(levelIndex);
  if (bk != null) ctx.fillText(`best: ${bk.pings} pings${bk.time != null ? " / " + fmtTime(bk.time) : ""}`, 200, 52);

  // ping cooldown bar
  const bw = 120, bx = 16, by = 74;
  ctx.globalAlpha = 0.3; ctx.fillStyle = COLORS.hud; ctx.fillRect(bx, by, bw, 4);
  ctx.globalAlpha = 0.95; ctx.fillStyle = ready ? COLORS.player : COLORS.hudBright;
  ctx.fillRect(bx, by, bw * Math.max(0, Math.min(1, 1 - cooldown / PING_COOLDOWN)), 4);
  ctx.globalAlpha = 1;

  // decoy affordance (only when unlocked)
  if (level.decoy) {
    const dReady = decoyCooldown <= 0;
    ctx.fillStyle = dReady ? COLORS.decoy : COLORS.hud;
    ctx.fillText(dReady ? "DECOY READY (hold Shift+aim, or right-click)" : "decoy charging…", 16, 88);
    const dby = 108;
    ctx.globalAlpha = 0.3; ctx.fillStyle = COLORS.hud; ctx.fillRect(bx, dby, bw, 4);
    ctx.globalAlpha = 0.95; ctx.fillStyle = dReady ? COLORS.decoyGlow : COLORS.hudBright;
    ctx.fillRect(bx, dby, bw * Math.max(0, Math.min(1, 1 - decoyCooldown / DECOY_COOLDOWN)), 4);
    ctx.globalAlpha = 1;
  }

  // bottom hint
  ctx.fillStyle = COLORS.hud;
  ctx.textBaseline = "bottom";
  const hint = level.decoy
    ? "SPACE ping · WASD/arrows move · SHIFT(hold)+aim or right-click = DECOY · R reset"
    : "SPACE ping · WASD/arrows move · R reset";
  ctx.fillText(hint, 16, H - 14);

  if (showDebug) {
    ctx.fillStyle = "#79f"; ctx.textBaseline = "top";
    ctx.fillText(`pings:${pings.length} ghosts:${ghosts.length} parts:${particles.length} pred:${predator.mode} step:${predator.pathStep}/${predator.path.length}`, 16, 130);
  }
  ctx.restore();

  drawIntroBanner();
}

// Per-level onboarding banner: the level name + a one-line "what's new" hint that
// fades after a few seconds, so a first-time player learns each idea in context.
function drawIntroBanner() {
  if (introT <= 0 || !level.blurb) return;
  // Fade in quickly, hold, then fade out over the last second.
  const a = Math.min(1, introT) * Math.min(1, (4.5 - introT) * 4 + 1);
  ctx.save();
  ctx.globalAlpha = Math.max(0, Math.min(1, a));
  ctx.textAlign = "center";

  const cx = W / 2, cy = H * 0.16;
  // panel
  ctx.font = "13px system-ui, sans-serif";
  const tw = Math.max(ctx.measureText(level.blurb).width, 260) + 48;
  ctx.fillStyle = "rgba(2,8,16,0.72)";
  ctx.fillRect(cx - tw / 2, cy - 30, tw, 60);
  ctx.strokeStyle = COLORS.wallGlow; ctx.globalAlpha *= 0.8;
  ctx.lineWidth = 1; ctx.strokeRect(cx - tw / 2, cy - 30, tw, 60);
  ctx.globalAlpha = Math.max(0, Math.min(1, a));

  ctx.fillStyle = COLORS.wallFront;
  ctx.font = "700 16px system-ui, sans-serif";
  ctx.fillText(`LEVEL ${levelIndex + 1} — ${level.name}`, cx, cy - 18);
  ctx.fillStyle = COLORS.hudBright;
  ctx.font = "13px system-ui, sans-serif";
  ctx.fillText(level.blurb, cx, cy + 6);
  ctx.restore();
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return (m > 0 ? m + ":" + String(sec).padStart(2, "0") : sec + "s");
}

function bestText() {
  const bk = getBest(levelIndex);
  const bestPings = (bk == null) ? pingCount : bk.pings;
  const bestTime = (bk == null || bk.time == null) ? clearTime : bk.time;
  const next = (levelIndex + 1 < RAW_LEVELS.length) ? "  ·  next level →" : "  ·  final level!";
  return `This run: ${pingCount} pings / ${fmtTime(clearTime)}   ·   Best: ${bestPings} / ${fmtTime(bestTime)}${next}`;
}

function renderTitle() {
  ctx.save();
  ctx.textAlign = "center";

  ctx.fillStyle = COLORS.wallFront;
  ctx.font = "700 clamp(28px, 6vw, 54px) system-ui, sans-serif";
  ctx.fillText("ECHO CARTOGRAPHER", W / 2, H / 2 - 110);

  ctx.fillStyle = COLORS.ghost; ctx.globalAlpha = 0.8;
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillText("See by sound. The dark hunts your echoes.", W / 2, H / 2 - 66);
  ctx.globalAlpha = 1;

  ctx.fillStyle = COLORS.hudBright; ctx.font = "15px system-ui, sans-serif";
  ctx.fillText("SPACE = ping (lights walls, but draws the hunter) · WASD/arrows = move", W / 2, H / 2 - 18);

  ctx.fillStyle = COLORS.decoy; ctx.globalAlpha = 0.9;
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText("Later: hold SHIFT + aim (or right-click) to throw a DECOY and lure the hunter away.", W / 2, H / 2 + 12);
  ctx.globalAlpha = 1;

  ctx.fillStyle = COLORS.exit; ctx.globalAlpha = 0.85; ctx.font = "14px system-ui, sans-serif";
  ctx.fillText("Reach the gold exit. Don't let the red hunter touch you.", W / 2, H / 2 + 42);
  ctx.globalAlpha = 1;

  if (progress > 0) {
    const resumeAt = Math.min(progress, RAW_LEVELS.length - 1) + 1;
    const cleared = Math.min(progress, RAW_LEVELS.length);
    ctx.fillStyle = COLORS.hud; ctx.font = "13px system-ui, sans-serif";
    const msg = (progress >= RAW_LEVELS.length)
      ? `All ${RAW_LEVELS.length} levels cleared — replay from level ${resumeAt}`
      : `Resuming at level ${resumeAt} of ${RAW_LEVELS.length}  ·  ${cleared} cleared`;
    ctx.fillText(msg, W / 2, H / 2 + 72);
  } else {
    ctx.fillStyle = COLORS.hud; ctx.font = "13px system-ui, sans-serif";
    ctx.fillText(`${RAW_LEVELS.length} levels of deepening dark`, W / 2, H / 2 + 72);
  }

  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 400);
  ctx.fillStyle = COLORS.player; ctx.globalAlpha = 0.5 + pulse * 0.5;
  ctx.font = "700 18px system-ui, sans-serif";
  ctx.fillText("Press SPACE or click to begin", W / 2, H / 2 + 104);
  ctx.restore();
}

function renderEnd(title, color, sub) {
  ctx.save();
  // TENS-02: CAUGHT gets a full opaque-black background (hiding ghosts/walls/
  // particles drawn earlier by renderWorld()) plus the fading chalk-outline
  // predator at its frozen position. WON (and any other use) keeps the
  // original 50% overlay and never draws the chalk outline — ESCAPED is
  // unchanged.
  if (state === STATE.CAUGHT) {
    ctx.fillStyle = COLORS.void;
    ctx.fillRect(0, 0, W, H);
    drawPredatorGhost();
  } else {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, W, H);
  }
  ctx.textAlign = "center";
  ctx.fillStyle = color;
  ctx.font = "700 clamp(32px, 7vw, 60px) system-ui, sans-serif";
  ctx.fillText(title, W / 2, H / 2 - 30);
  ctx.fillStyle = COLORS.hudBright; ctx.font = "16px system-ui, sans-serif";
  ctx.fillText(sub, W / 2, H / 2 + 14);
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 400);
  ctx.fillStyle = COLORS.player; ctx.globalAlpha = 0.5 + pulse * 0.5;
  ctx.font = "700 16px system-ui, sans-serif";
  const prompt = (state === STATE.WON)
    ? "Press SPACE / click to continue"
    : "Press SPACE / R / click to try again";
  ctx.fillText(prompt, W / 2, H / 2 + 56);
  ctx.restore();
}

function renderCleared() {
  ctx.save();
  ctx.textAlign = "center";
  // celebratory drifting particles
  if (Math.random() < 0.4) {
    spawnParticles(Math.random() * W, H + 10, 1, Math.random() < 0.5 ? COLORS.exit : COLORS.player,
      { speed: 60, life: 2.5, size: 2.5, angle: -Math.PI / 2, spread: 0.6 });
  }
  drawParticles();
  ctx.fillStyle = COLORS.exit;
  ctx.font = "700 clamp(30px, 6.5vw, 56px) system-ui, sans-serif";
  ctx.fillText("YOU MAPPED THE DARK", W / 2, H / 2 - 30);
  ctx.fillStyle = COLORS.hudBright; ctx.font = "16px system-ui, sans-serif";
  ctx.fillText("Every corridor learned. Every lie believed. Every echo silenced.", W / 2, H / 2 + 12);
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 400);
  ctx.fillStyle = COLORS.player; ctx.globalAlpha = 0.5 + pulse * 0.5;
  ctx.font = "700 16px system-ui, sans-serif";
  ctx.fillText("Press SPACE / click for the title", W / 2, H / 2 + 56);
  ctx.restore();
}

// ----------------------------------------------------------------------------
// Main loop — fixed-timestep update + rAF render
// ----------------------------------------------------------------------------
const FIXED = 1 / 120;
let acc = 0, last = 0;

function frame(now2) {
  if (!last) last = now2;
  let dt = (now2 - last) / 1000;
  last = now2;
  if (dt > 0.25) dt = 0.25;
  acc += dt;
  // TENS-02: while freezeFrames > 0, hold the image — skip the update
  // accumulator entirely (not just one iteration) so the held frames do not
  // cause a catch-up burst-replay of update() once the freeze releases, then
  // decrement once per rendered frame. render() always still runs.
  if (freezeFrames > 0) {
    acc = 0;
    freezeFrames--;
  } else {
    let guard = 0;
    // CR-01: stop draining the backlog the instant a frame's update() call
    // transitions state away from PLAYING (capture or win). Without this,
    // remaining backlog iterations in the same rAF tick still run update()'s
    // always-run preamble (captureStage += dt among others) even though the
    // state is no longer PLAYING, which can inflate captureStage before the
    // freeze branch ever engages and skip the documented white-flash window.
    // CR-02: only short-circuit on the tick where the transition actually
    // happens DURING this loop. If state was already non-PLAYING at loop
    // entry (every CAUGHT/WON tick after the triggering frame), let the loop
    // drain acc normally so captureStage/flash/shake/particles keep tracking
    // real elapsed time instead of being capped at one FIXED tick per frame.
    const wasPlayingAtEntry = state === STATE.PLAYING;
    while (acc >= FIXED && guard < 600) {
      update(FIXED);
      acc -= FIXED;
      guard++;
      if (wasPlayingAtEntry && state !== STATE.PLAYING) { acc = 0; break; }
    }
  }
  render();
  requestAnimationFrame(frame);
}

// ----------------------------------------------------------------------------
// Boot
// ----------------------------------------------------------------------------
resize();
layoutLevel();
requestAnimationFrame(frame);

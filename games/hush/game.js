/*
 * HUSH — Core Mechanic Prototype (Phase 1)
 *
 * A stealth game where silence is a budget. A single global NOISE METER sits at
 * the top of the screen. Every action spends from it: walking nudges it, sprint
 * shoves it, opening a door spikes it, even breathing trickles it upward. The
 * meter decays when you do nothing loud. There is no line-of-sight — guards hear
 * the METER, not you. Each noisy action emits an expanding white shockwave RING
 * whose radius literally IS its detection range. If a ring touches a guard while
 * the meter is at/above that guard's threshold, you are heard and caught.
 *
 * The forced spend-big beat: the only way past the corridor guard is to TRIGGER a
 * far distraction (a thrown stone) that dumps a huge ring away from you and pulls
 * the guard down the hall, opening a quiet window you sprint through.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no fetch, no network.
 * Audio is Web Audio synthesis, created lazily on the first user gesture so it is
 * file://-safe. Runs by double-clicking index.html.
 *
 * Sections: Constants/CONFIG -> Canvas -> Audio -> Input -> Level -> State ->
 * Update -> Render -> Loop.
 */

"use strict";

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;

// Fixed logical play area (landscape). Canvas is scaled to fit the window while
// keeping this aspect, so all gameplay maths use these dimensions.
const VW = 800;
const VH = 560;

// The single palette / source of truth for rendering colors (SCAF-03).
// Stark ASMR-minimalist: charcoal rooms, thin white blueprint outlines, and
// sound rendered as the only bright thing on screen.
const COLORS = {
  bg: "#0b0d10",
  bgDeep: "#070809",
  room: "#13161c",
  roomLit: "#191d25",
  grid: "rgba(120,140,170,0.05)", // faint blueprint grid
  wall: "#252b36",
  wallEdge: "#39414f",
  outline: "#dfe6f0",
  outlineDim: "#525a6c",
  player: "#f2f6fc",
  playerGlow: "rgba(180,210,255,0.55)",
  guard: "#ff6f6f", // hearing guard (reads sound)
  guardCalm: "#d98a8a",
  guardCone: "rgba(255,111,111,0.10)",
  deaf: "#9b8cff", // deaf guard (reads vibration) — distinct violet
  deafCalm: "#7d72c8",
  deafField: "rgba(155,140,255,0.10)",
  ring: "#ffffff",
  exit: "#7bffb0",
  distract: "#ffd27a",
  meterCool: "#aee7ff",
  meterWarm: "#ffb23a",
  meterHot: "#ff4d4d",
  vibe: "#9b8cff", // vibration meter fill
  vibeHot: "#d36bff",
  threshold: "#ffd27a",
  text: "#eef1f6",
  textDim: "#8a93a3",
  mote: "rgba(200,220,255,0.5)",
};

// All feel-tuning lives here (CORE-06). Costs are per-second unless noted.
const CONFIG = {
  METER_MAX: 100,

  // Noise costs.
  BREATH_COST_PER_SEC: 1.6, // trickles up even when idle — silence is never free
  WALK_COST_PER_SEC: 14, // moving without sprint
  SPRINT_COST_PER_SEC: 34, // moving with Shift held
  DECAY_PER_SEC: 22, // pulled toward zero when not making noise

  DOOR_SPIKE: 30, // one-time spike when a door is opened
  DISTRACTION_SPIKE: 55, // one-time spike when the stone is thrown

  // Player.
  WALK_SPEED: 120, // px/sec
  SPRINT_SPEED: 230, // px/sec
  PLAYER_R: 11,

  // Shockwave ring ranges (= detection radius for that sound).
  STEP_RING_RANGE: 70, // emitted as you walk
  SPRINT_RING_RANGE: 120, // emitted as you sprint (louder = bigger reach)
  DOOR_RING_RANGE: 150,
  DISTRACTION_RING_RANGE: 230, // big — that's the point
  RING_GROW_PER_SEC: 320, // how fast a ring expands to its maxR

  STEP_INTERVAL_WALK: 0.34, // sec between footstep rings while walking
  STEP_INTERVAL_SPRINT: 0.2,

  // Guard (hearing).
  GUARD_THRESHOLD: 35, // meter must be >= this for a ring to "catch"
  GUARD_R: 13,
  GUARD_SPEED: 95, // patrol / lured movement speed
  GUARD_LURE_TIME: 6.0, // sec the guard chases a distraction before returning

  // Deaf vibration guard (THE TWIST). It ignores the meter and rings entirely.
  // Instead it reads how STILL you are: a vibration signature builds while you
  // hold position within range, and is muddied (drained) by steady motion.
  DEAF_R: 14,
  DEAF_RANGE: 200, // how far the vibration field reaches
  DEAF_THRESHOLD: 100, // vibration meter max — reaching it = caught
  VIBE_BUILD_PER_SEC: 46, // how fast stillness reads through the floor
  VIBE_BUILD_NEAR_BONUS: 34, // extra build rate at point-blank (scaled by range)
  VIBE_DRAIN_PER_SEC: 70, // how fast steady motion muddies the field
  VIBE_DRAIN_MIN_SPEED: 35, // px/sec you must keep above to count as "moving"
  DEAF_SWEEP_SPEED: 0.55, // rad/sec the deaf guard's sensor lobe rotates
};

// Screen / state machine.
const TITLE = "title";
const PLAYING = "playing";
const CAUGHT = "caught";
const CLEARED = "cleared";
const REVEAL = "reveal"; // the twist rug-pull interstitial

// ----------------------------------------------------------------------------
// Canvas
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let scale = 1;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const availW = window.innerWidth - 24;
  const availH = window.innerHeight - 24;
  scale = Math.max(0.25, Math.min(availW / VW, availH / VH));
  canvas.style.width = VW * scale + "px";
  canvas.style.height = VH * scale + "px";
  canvas.width = Math.round(VW * dpr);
  canvas.height = Math.round(VH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

const DEBUG = false; // T11: flip to true to overlay live tuning numbers.

// ----------------------------------------------------------------------------
// Audio — Web Audio synthesis, created lazily on first gesture (file://-safe).
// ----------------------------------------------------------------------------
let audioCtx = null;
let masterGain = null;
let droneGain = null; // tension drone whose level we nudge with the meter
let droneOsc = null;
let droneOsc2 = null; // detuned partner for a beating, breath-held shimmer
let roomGain = null; // continuous low room tone (STYLE-04)
let vibeGain = null; // sub-bass pulse tied to the deaf-guard vibration meter
let vibeOsc = null;
let vibeLfo = null;
let vibeLfoGain = null;
let audioReady = false;

function startAudio() {
  if (audioReady) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  audioCtx = new AC();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.5;
  masterGain.connect(audioCtx.destination);

  // --- Continuous room tone: filtered noise floor, always present (STYLE-04).
  // The sound of a held breath — barely-there air, never silent.
  const rtLen = Math.floor(audioCtx.sampleRate * 2);
  const rtBuf = audioCtx.createBuffer(1, rtLen, audioCtx.sampleRate);
  const rtData = rtBuf.getChannelData(0);
  for (let i = 0; i < rtLen; i++) rtData[i] = Math.random() * 2 - 1;
  const rtSrc = audioCtx.createBufferSource();
  rtSrc.buffer = rtBuf;
  rtSrc.loop = true;
  const rtFilter = audioCtx.createBiquadFilter();
  rtFilter.type = "lowpass";
  rtFilter.frequency.value = 240;
  rtFilter.Q.value = 0.4;
  roomGain = audioCtx.createGain();
  roomGain.gain.value = 0.05;
  rtSrc.connect(rtFilter);
  rtFilter.connect(roomGain);
  roomGain.connect(masterGain);
  rtSrc.start();

  // --- Tension drone: two slightly-detuned sines that beat against each other.
  // Volume is nudged live by the noise meter (STYLE-05).
  droneOsc = audioCtx.createOscillator();
  droneOsc.type = "sine";
  droneOsc.frequency.value = 57;
  droneOsc2 = audioCtx.createOscillator();
  droneOsc2.type = "sine";
  droneOsc2.frequency.value = 57.7; // ~0.7Hz beat = unease
  droneGain = audioCtx.createGain();
  droneGain.gain.value = 0.0;
  droneOsc.connect(droneGain);
  droneOsc2.connect(droneGain);
  droneGain.connect(masterGain);
  droneOsc.start();
  droneOsc2.start();

  // --- Vibration sub: a slow, pulsing low tone that only rises near a deaf
  // guard. The floor "feeling" you. An LFO makes it throb like a pulse.
  vibeOsc = audioCtx.createOscillator();
  vibeOsc.type = "triangle";
  vibeOsc.frequency.value = 41;
  vibeGain = audioCtx.createGain();
  vibeGain.gain.value = 0.0;
  vibeLfo = audioCtx.createOscillator();
  vibeLfo.type = "sine";
  vibeLfo.frequency.value = 2.2; // throb rate
  vibeLfoGain = audioCtx.createGain();
  vibeLfoGain.gain.value = 0.0;
  vibeLfo.connect(vibeLfoGain);
  vibeLfoGain.connect(vibeGain.gain);
  vibeOsc.connect(vibeGain);
  vibeGain.connect(masterGain);
  vibeOsc.start();
  vibeLfo.start();

  audioReady = true;
  if (audioCtx.state === "suspended") audioCtx.resume();
}

// Short noise/foley blips. All synthesized, no files.
function blip(freq, dur, type, vol) {
  if (!audioReady) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type || "sine";
  o.frequency.value = freq;
  const t = audioCtx.currentTime;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.12));
  o.connect(g);
  g.connect(masterGain);
  o.start(t);
  o.stop(t + (dur || 0.12) + 0.02);
}

function noiseBurst(dur, vol) {
  if (!audioReady) return;
  const len = Math.floor(audioCtx.sampleRate * dur);
  const buf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const g = audioCtx.createGain();
  g.gain.value = vol || 0.3;
  const f = audioCtx.createBiquadFilter();
  f.type = "lowpass";
  f.frequency.value = 800;
  src.connect(f);
  f.connect(g);
  g.connect(masterGain);
  src.start();
}

function sfxStep() { blip(170 + Math.random() * 36, 0.06, "sine", 0.07); }
function sfxDoor() { noiseBurst(0.18, 0.35); blip(90, 0.2, "sawtooth", 0.12); }
function sfxThrow() { noiseBurst(0.3, 0.5); blip(70, 0.35, "square", 0.18); }
function sfxCaught() { blip(120, 0.6, "sawtooth", 0.3); blip(180, 0.6, "square", 0.2); noiseBurst(0.5, 0.4); }
function sfxClear() { blip(523, 0.18, "sine", 0.22); setTimeout(() => blip(784, 0.3, "sine", 0.22), 130); }
// A soft, single positive tick when a non-finale room is cleared (JUICE-02).
function sfxRoomClear() { blip(660, 0.14, "sine", 0.16); setTimeout(() => blip(880, 0.22, "sine", 0.13), 90); }

// Twist-specific cues. The deaf guard's world is sub-bass and dread, not foley.
// Vibration caught: a deep, gut-punch thud + descending sub sweep (felt, not heard).
function sfxVibeCaught() {
  if (!audioReady) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = "sine";
  const t = audioCtx.currentTime;
  o.frequency.setValueAtTime(110, t);
  o.frequency.exponentialRampToValueAtTime(32, t + 0.7);
  g.gain.setValueAtTime(0.45, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
  o.connect(g); g.connect(masterGain);
  o.start(t); o.stop(t + 0.85);
  noiseBurst(0.4, 0.25);
}
// The reveal sting: the familiar bright ring tone, then a sub that swallows it —
// the moment the rules flip out from under you.
function sfxReveal() {
  if (!audioReady) return;
  blip(660, 0.12, "sine", 0.18);
  setTimeout(() => blip(330, 0.18, "sine", 0.14), 110);
  setTimeout(() => {
    if (!audioReady) return;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = "sine";
    const t = audioCtx.currentTime;
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(38, t + 1.4);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.4, t + 0.15);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    o.connect(g); g.connect(masterGain);
    o.start(t); o.stop(t + 1.7);
  }, 300);
}
// A soft sweep tick when the deaf guard's sensor lobe passes over you.
function sfxVibeTick() { blip(220, 0.04, "triangle", 0.05); }

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
const keys = {};
let firstGesture = false;

function onGesture() {
  if (!firstGesture) firstGesture = true;
  startAudio();
}

window.addEventListener("keydown", (e) => {
  onGesture();
  const k = e.key.toLowerCase();
  keys[k] = true;
  if ([" ", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) e.preventDefault();

  if (state.screen === TITLE && (k === "enter" || k === " ")) {
    startLevel(0);
  } else if (state.screen === CAUGHT && (k === "r" || k === "enter" || k === " ")) {
    startLevel(state.levelIndex); // retry the SAME room
  } else if (state.screen === REVEAL && (k === "enter" || k === " ")) {
    startLevel(state.levelIndex + 1); // step into the twist room
  } else if (state.screen === CLEARED && (k === "enter" || k === "r")) {
    state.levelIndex = 0;
    state.screen = TITLE;
  } else if (state.screen === PLAYING) {
    if (k === "e") tryDoor();
    if (k === "f" || k === " ") tryDistraction();
  }
});
window.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});
canvas.addEventListener("pointerdown", () => {
  onGesture();
  if (state.screen === TITLE) startLevel(0);
  else if (state.screen === CAUGHT) startLevel(state.levelIndex);
  else if (state.screen === REVEAL) startLevel(state.levelIndex + 1);
  else if (state.screen === CLEARED) { state.levelIndex = 0; state.screen = TITLE; }
});

// ----------------------------------------------------------------------------
// Levels — a 5-room teaching campaign (LEVEL-01/02), authored as plain data.
//
// Curriculum (LEVEL-02 order):
//   1. WHISPER  — meter basics: cross a quiet room, learn noise/decay, no guard.
//   2. THE GAP  — forced spend-big: a hearing guard blocks the only crossing;
//                 the stone is the ONLY way past (LEVEL-03).
//   3. CORRIDOR — hearing-guard navigation: two patrolling ears, pure timing.
//   4. THE FLOOR— the twist: the deaf vibration guard, stillness = caught.
//   5. THE WARD — finale: a hearing guard AND a deaf guard in one room.
//
// Each level is a plain object. Hearing guards live in a `guards` array so a
// room can hold several; `deaf` is a single optional vibration guard. Optional
// fields (door, distraction, lureTo) are read defensively so simple rooms stay
// simple.
// ----------------------------------------------------------------------------
const FRAME = [
  { x: 0, y: 0, w: VW, h: 24 },
  { x: 0, y: VH - 24, w: VW, h: 24 },
  { x: 0, y: 0, w: 24, h: VH },
  { x: VW - 24, y: 0, w: 24, h: VH },
];

// LEVEL 1 — WHISPER. No guard. Teaches the budget: walk, sprint (watch it
// spike), stop and watch it decay. A safe sandbox to read the meter before
// anything can hear it.
const LEVEL_WHISPER = {
  name: "I · WHISPER",
  teach: "noise",
  walls: [
    ...FRAME,
    { x: 300, y: 24, w: 22, h: 190 },
    { x: 520, y: VH - 24 - 190, w: 22, h: 190 },
  ],
  start: { x: 90, y: VH / 2 },
  exit: { x: VW - 86, y: VH / 2 - 28, w: 56, h: 56 },
  guards: [],
  deaf: null,
};

// LEVEL 2 — THE GAP. The forced spend-big room (the old Ward One, refined).
// A hearing guard patrols the only crossing; a closed door and a far stone.
// Throwing the stone lures the guard off your route — unsolvable without it.
const LEVEL_GAP = {
  name: "II · THE GAP",
  teach: "distraction",
  walls: [
    ...FRAME,
    { x: 250, y: 24, w: 22, h: 150 },
    { x: 250, y: 300, w: 22, h: VH - 300 - 24 },
    { x: 470, y: 24, w: 22, h: 210 },
    { x: 470, y: 360, w: 22, h: VH - 360 - 24 },
  ],
  door: { x: 250, y: 174, w: 22, h: 126, open: false },
  start: { x: 120, y: 120 },
  exit: { x: VW - 90, y: 60, w: 56, h: 56 },
  guards: [{ x: 360, yTop: 150, yBot: 410 }],
  distraction: { x: 110, y: VH - 70, r: 14, used: false },
  lureTo: { x: VW - 70, y: VH - 70 },
  deaf: null,
};

// LEVEL 3 — CORRIDOR. Pure hearing-guard navigation: two ears patrolling
// staggered lanes, no stone. You thread the gaps by banking silence and timing
// crossings — the meter-management exam.
const LEVEL_CORRIDOR = {
  name: "III · CORRIDOR",
  teach: "timing",
  walls: [
    ...FRAME,
    { x: 200, y: 24, w: 22, h: 240 },
    { x: 200, y: 380, w: 22, h: VH - 380 - 24 },
    { x: 400, y: 150, w: 22, h: VH - 150 - 24 },
    { x: 580, y: 24, w: 22, h: 240 },
    { x: 580, y: 380, w: 22, h: VH - 380 - 24 },
  ],
  start: { x: 100, y: VH / 2 },
  exit: { x: VW - 86, y: VH / 2 - 28, w: 56, h: 56 },
  guards: [
    { x: 300, yTop: 70, yBot: VH - 70, startDir: 1 },
    { x: 490, yTop: 70, yBot: VH - 70, startDir: -1, startAt: "bot" }, // out of phase
  ],
  deaf: null,
};

// LEVEL 4 — THE FLOOR. The twist room (the old Ward Two, refined). A deaf
// vibration guard blankets the crossing; a pillar slalom forces weaving.
// Stillness is detection; only steady motion survives.
const LEVEL_FLOOR = {
  name: "IV · THE FLOOR",
  teach: "vibration",
  isTwist: true, // fires the rug-pull REVEAL before this room is entered
  walls: [
    ...FRAME,
    { x: 230, y: 24, w: 22, h: 200 },
    { x: 430, y: VH - 24 - 200, w: 22, h: 200 },
    { x: 620, y: 24, w: 22, h: 180 },
  ],
  start: { x: 110, y: VH / 2 },
  exit: { x: VW - 86, y: VH / 2 - 28, w: 56, h: 56 },
  guards: [],
  deaf: { x: VW / 2 + 20, y: VH / 2 },
};

// LEVEL 5 — THE WARD. The finale. A hearing guard patrols the lower-right
// corridor (mind the meter) while a deaf guard holds the upper passage to the
// exit (keep moving). Both senses at once: quiet for one, never still for the
// other.
const LEVEL_WARD = {
  name: "V · THE WARD",
  teach: "finale",
  walls: [
    ...FRAME,
    { x: 250, y: 24, w: 22, h: 230 },          // upper-left choke
    { x: 250, y: 380, w: 22, h: VH - 380 - 24 },
    { x: 500, y: 24, w: 22, h: 160 },          // upper-right choke (deaf lane)
    { x: 500, y: 320, w: 22, h: VH - 320 - 24 },
  ],
  start: { x: 90, y: VH / 2 },
  exit: { x: VW - 86, y: 60, w: 56, h: 56 },
  guards: [{ x: 370, yTop: 80, yBot: VH - 80 }], // hearing guard, center lane
  // deaf guard holds the upper-right passage to the exit
  deaf: { x: 640, y: 150 },
};

const LEVELS = [LEVEL_WHISPER, LEVEL_GAP, LEVEL_CORRIDOR, LEVEL_FLOOR, LEVEL_WARD];
// `LEVEL` always points at the active room so existing code keeps working.
let LEVEL = LEVELS[0];

// ----------------------------------------------------------------------------
// State
// ----------------------------------------------------------------------------
const state = {
  screen: TITLE,
  levelIndex: 0,
  noise: 0,
  player: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
  guards: [], // array of hearing guards: {x, y, dir, lured, target, alert, def}
  deaf: { x: 0, y: 0, vibe: 0, alert: 0, sweep: 0, active: false }, // THE TWIST
  rings: [], // {x, y, r, maxR}
  motes: [], // ambient breath motes (style layer)
  sparks: [], // ring-spark particles (style layer)
  door: { open: false },
  distractionUsed: false,
  stepTimer: 0,
  flash: 0, // caught-flash intensity
  caughtBy: "hearing", // or "vibration" — drives the caught copy
  revealT: 0, // timer for the twist interstitial
  revealDone: false, // the twist rug-pull only ever fires once
  clearTime: 0,
  elapsed: 0,
  shake: 0, // screen shake on caught
  intro: 0, // per-room intro hint timer (onboarding)
  best: loadBest(), // best run: { rooms, peak } — most rooms, then lowest peak
  peakNoise: 0,
  runPeak: 0, // worst peak noise across the whole run (for scoring)
  startTime: 0,
};

// Best run persists across reloads (ONBOARD-03). We store the furthest room
// reached and, as a tiebreak, the lowest peak noise on a full clear.
function loadBest() {
  try {
    const raw = localStorage.getItem("hush.best");
    if (raw) {
      const o = JSON.parse(raw);
      if (o && typeof o.rooms === "number") return o;
    }
    // migrate the old single-number record if present
    const v = parseFloat(localStorage.getItem("hush.bestPeak"));
    if (isFinite(v)) return { rooms: LEVELS.length, peak: v, cleared: true };
  } catch (e) {}
  return null;
}
function saveBest(o) {
  try { localStorage.setItem("hush.best", JSON.stringify(o)); } catch (e) {}
}
// Record progress: furthest room reached (1-based) and run peak.
function recordProgress(roomsReached, cleared) {
  const peak = Math.round(state.runPeak);
  const prev = state.best;
  const better =
    !prev ||
    roomsReached > prev.rooms ||
    (roomsReached === prev.rooms && cleared && (!prev.cleared || peak < prev.peak));
  if (better) {
    state.best = { rooms: roomsReached, peak: peak, cleared: !!cleared };
    saveBest(state.best);
  }
}

function startLevel(index) {
  if (typeof index === "number") state.levelIndex = index;
  LEVEL = LEVELS[state.levelIndex];

  // Fresh run bookkeeping when starting from the very first room.
  if (state.levelIndex === 0) {
    state.runPeak = 0;
    state.startTime = state.elapsed;
  }

  state.screen = PLAYING;
  state.noise = 0;
  state.peakNoise = 0;
  state.player.x = LEVEL.start.x;
  state.player.y = LEVEL.start.y;
  state.player.vx = 0;
  state.player.vy = 0;
  state.player.speed = 0;

  // Hearing guards — build a live guard for each authored definition.
  state.guards = (LEVEL.guards || []).map((def) => {
    const startBot = def.startAt === "bot";
    return {
      def,
      x: def.x,
      y: startBot ? def.yBot : def.yTop,
      dir: def.startDir || (startBot ? -1 : 1),
      lured: 0,
      target: null,
      alert: 0,
    };
  });

  // Deaf vibration guard (THE TWIST).
  state.deaf.active = !!LEVEL.deaf;
  if (LEVEL.deaf) {
    state.deaf.x = LEVEL.deaf.x;
    state.deaf.y = LEVEL.deaf.y;
  }
  state.deaf.vibe = 0;
  state.deaf.alert = 0;
  state.deaf.sweep = 0;

  state.rings.length = 0;
  state.sparks.length = 0;
  state.door.open = false;
  if (LEVEL.door) LEVEL.door.open = false;
  state.distractionUsed = false;
  if (LEVEL.distraction) LEVEL.distraction.used = false;
  state.stepTimer = 0;
  state.flash = 0;
  state.shake = 0;
  state.intro = 4.5; // show the per-room teaching hint at the top for a few sec
  seedMotes();
}

// Ambient breath motes — a faint drifting particle field (STYLE-03).
function seedMotes() {
  state.motes.length = 0;
  for (let i = 0; i < 46; i++) {
    state.motes.push({
      x: Math.random() * VW,
      y: Math.random() * VH,
      r: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 6,
      vy: -4 - Math.random() * 8,
      a: 0.15 + Math.random() * 0.45,
      ph: Math.random() * TAU,
    });
  }
}

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------
function dist(ax, ay, bx, by) {
  const dx = ax - bx, dy = ay - by;
  return Math.sqrt(dx * dx + dy * dy);
}

function circleRectOverlap(cx, cy, r, rect) {
  const nx = Math.max(rect.x, Math.min(cx, rect.x + rect.w));
  const ny = Math.max(rect.y, Math.min(cy, rect.y + rect.h));
  return dist(cx, cy, nx, ny) < r;
}

function nearDistraction() {
  if (!LEVEL.distraction) return false;
  return dist(state.player.x, state.player.y, LEVEL.distraction.x, LEVEL.distraction.y) < 60
    && !state.distractionUsed;
}
function nearDoor() {
  if (!LEVEL.door) return false;
  // near the doorway gap and door still closed
  return !state.door.open
    && dist(state.player.x, state.player.y, LEVEL.door.x + LEVEL.door.w / 2, LEVEL.door.y + LEVEL.door.h / 2) < 90;
}

function spawnRing(x, y, maxR) {
  state.rings.push({ x, y, r: 0, maxR });
  // A small burst of bright sparks at the sound source (STYLE-03).
  const n = Math.min(10, 3 + Math.round(maxR / 40));
  for (let i = 0; i < n; i++) {
    const a = Math.random() * TAU;
    const sp = 30 + Math.random() * (maxR * 0.7);
    state.sparks.push({
      x, y,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp,
      life: 0.35 + Math.random() * 0.3,
      max: 0.65,
    });
  }
}

function updateMotes(dt) {
  for (const m of state.motes) {
    m.x += m.vx * dt;
    m.y += m.vy * dt;
    m.ph += dt * 1.5;
    if (m.y < -4) { m.y = VH + 4; m.x = Math.random() * VW; }
    if (m.x < -4) m.x = VW + 4;
    if (m.x > VW + 4) m.x = -4;
  }
  for (let i = state.sparks.length - 1; i >= 0; i--) {
    const s = state.sparks[i];
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.vx *= 0.92;
    s.vy *= 0.92;
    s.life -= dt;
    if (s.life <= 0) state.sparks.splice(i, 1);
  }
}

function tryDoor() {
  if (!LEVEL.door || !nearDoor()) return;
  state.door.open = true;
  LEVEL.door.open = true;
  state.noise = Math.min(CONFIG.METER_MAX, state.noise + CONFIG.DOOR_SPIKE);
  spawnRing(LEVEL.door.x + LEVEL.door.w / 2, LEVEL.door.y + LEVEL.door.h / 2, CONFIG.DOOR_RING_RANGE);
  sfxDoor();
}

function tryDistraction() {
  if (!LEVEL.distraction || !nearDistraction()) return;
  state.distractionUsed = true;
  LEVEL.distraction.used = true;
  state.noise = Math.min(CONFIG.METER_MAX, state.noise + CONFIG.DISTRACTION_SPIKE);
  // The stone lands FAR AWAY (lureTo): a big ring dumps noise there, not on you.
  spawnRing(LEVEL.lureTo.x, LEVEL.lureTo.y, CONFIG.DISTRACTION_RING_RANGE);
  sfxThrow();
  // Lure every hearing guard toward where the stone landed.
  for (const g of state.guards) {
    g.lured = CONFIG.GUARD_LURE_TIME;
    g.target = { x: LEVEL.lureTo.x, y: LEVEL.lureTo.y };
  }
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function update(dt) {
  // Ambient layers keep breathing on every screen for continuity.
  updateMotes(dt);
  if (state.shake > 0) state.shake = Math.max(0, state.shake - dt * 3.2);

  if (state.screen === REVEAL) {
    state.revealT += dt;
    if (state.flash > 0) state.flash = Math.max(0, state.flash - dt * 2);
    return;
  }
  if (state.screen !== PLAYING) {
    if (state.flash > 0) state.flash = Math.max(0, state.flash - dt * 2);
    return;
  }
  state.elapsed += dt;
  if (state.intro > 0) state.intro = Math.max(0, state.intro - dt);

  // ---- Input -> movement ----
  let ix = 0, iy = 0;
  if (keys["arrowleft"] || keys["a"]) ix -= 1;
  if (keys["arrowright"] || keys["d"]) ix += 1;
  if (keys["arrowup"] || keys["w"]) iy -= 1;
  if (keys["arrowdown"] || keys["s"]) iy += 1;
  const moving = ix !== 0 || iy !== 0;
  const sprinting = moving && (keys["shift"]);
  const speed = sprinting ? CONFIG.SPRINT_SPEED : CONFIG.WALK_SPEED;

  if (moving) {
    const len = Math.hypot(ix, iy) || 1;
    ix /= len; iy /= len;
  }
  const p = state.player;
  const px0 = p.x, py0 = p.y;
  const nx = p.x + ix * speed * dt;
  const ny = p.y + iy * speed * dt;

  // Axis-separated collision against walls + closed door.
  const solids = LEVEL.walls.slice();
  if (LEVEL.door && !state.door.open) solids.push(LEVEL.door);

  p.x = resolveAxis(p.x, p.y, nx, p.y, solids).x;
  p.y = resolveAxis(p.x, p.y, p.x, ny, solids).y;

  // Actual realized speed (post-collision) — the deaf guard reads THIS.
  const moved = dist(p.x, p.y, px0, py0);
  p.speed = dt > 0 ? moved / dt : 0;

  // ---- Noise spend ----
  state.noise += CONFIG.BREATH_COST_PER_SEC * dt; // breathing, always
  if (moving) {
    state.noise += (sprinting ? CONFIG.SPRINT_COST_PER_SEC : CONFIG.WALK_COST_PER_SEC) * dt;
  } else {
    // decay only when not actively generating movement noise
    state.noise -= CONFIG.DECAY_PER_SEC * dt;
  }
  state.noise = Math.max(0, Math.min(CONFIG.METER_MAX, state.noise));
  state.peakNoise = Math.max(state.peakNoise, state.noise);
  state.runPeak = Math.max(state.runPeak, state.noise);

  // ---- Footstep rings ----
  if (moving) {
    state.stepTimer -= dt;
    if (state.stepTimer <= 0) {
      state.stepTimer = sprinting ? CONFIG.STEP_INTERVAL_SPRINT : CONFIG.STEP_INTERVAL_WALK;
      spawnRing(p.x, p.y, sprinting ? CONFIG.SPRINT_RING_RANGE : CONFIG.STEP_RING_RANGE);
      sfxStep();
    }
  } else {
    state.stepTimer = 0;
  }

  // ---- Rings grow + expire ----
  for (let i = state.rings.length - 1; i >= 0; i--) {
    const r = state.rings[i];
    r.r += CONFIG.RING_GROW_PER_SEC * dt;
    if (r.r >= r.maxR) state.rings.splice(i, 1);
  }

  // ---- Hearing guards movement + detection (each one independently) ----
  for (const g of state.guards) {
    const def = g.def;
    if (g.lured > 0 && g.target) {
      g.lured -= dt;
      const d = dist(g.x, g.y, g.target.x, g.target.y);
      if (d > 4) {
        g.x += ((g.target.x - g.x) / d) * CONFIG.GUARD_SPEED * dt;
        g.y += ((g.target.y - g.y) / d) * CONFIG.GUARD_SPEED * dt;
      }
      if (g.lured <= 0) g.target = null;
    } else {
      // return to patrol line, then patrol vertically between yTop/yBot
      if (Math.abs(g.x - def.x) > 2) {
        g.x += Math.sign(def.x - g.x) * CONFIG.GUARD_SPEED * dt;
      } else {
        g.x = def.x;
        g.y += g.dir * CONFIG.GUARD_SPEED * dt;
        if (g.y > def.yBot) { g.y = def.yBot; g.dir = -1; }
        if (g.y < def.yTop) { g.y = def.yTop; g.dir = 1; }
      }
    }

    // Detection: ring touches guard while meter >= threshold. While lured, its
    // attention is elsewhere -> it cannot hear you.
    const distracted = g.lured > 0;
    if (!distracted && state.noise >= CONFIG.GUARD_THRESHOLD) {
      for (const r of state.rings) {
        if (dist(r.x, r.y, g.x, g.y) <= r.r) {
          triggerCaught("hearing");
          break;
        }
      }
    }
    if (g.alert > 0) g.alert = Math.max(0, g.alert - dt * 2);
  }

  // ---- THE TWIST: deaf vibration guard ----
  // It is utterly deaf — rings and the noise meter mean NOTHING to it. It feels
  // the floor. Hold still inside its range and your body sends a clean
  // vibration signature that builds toward its threshold. Keep moving and the
  // field is muddied: the indicator drains. Stillness is detection here.
  if (state.deaf.active) {
    const dg = state.deaf;
    dg.sweep += CONFIG.DEAF_SWEEP_SPEED * dt;
    const dToPlayer = dist(p.x, p.y, dg.x, dg.y);
    const inRange = dToPlayer <= CONFIG.DEAF_RANGE;
    const movingSteady = p.speed >= CONFIG.VIBE_DRAIN_MIN_SPEED;

    if (inRange) {
      if (movingSteady) {
        dg.vibe -= CONFIG.VIBE_DRAIN_PER_SEC * dt;
      } else {
        // closer = a cleaner read = builds faster
        const near = 1 - dToPlayer / CONFIG.DEAF_RANGE; // 0..1
        const rate = CONFIG.VIBE_BUILD_PER_SEC + near * CONFIG.VIBE_BUILD_NEAR_BONUS;
        dg.vibe += rate * dt;
      }
    } else {
      // out of range: signature fades fast
      dg.vibe -= CONFIG.VIBE_DRAIN_PER_SEC * 1.4 * dt;
    }
    dg.vibe = Math.max(0, Math.min(CONFIG.DEAF_THRESHOLD, dg.vibe));
    if (dg.vibe >= CONFIG.DEAF_THRESHOLD) {
      triggerCaught("vibration");
    }
    if (dg.alert > 0) dg.alert = Math.max(0, dg.alert - dt * 2);

    // sub-bass throb tracks how close the vibration meter is to catching you
    if (audioReady && vibeGain) {
      const frac = dg.vibe / CONFIG.DEAF_THRESHOLD;
      vibeGain.gain.setTargetAtTime(0.02 + frac * 0.22, audioCtx.currentTime, 0.12);
      if (vibeLfoGain) vibeLfoGain.gain.setTargetAtTime(frac * 0.16, audioCtx.currentTime, 0.12);
      if (vibeOsc) vibeOsc.frequency.setTargetAtTime(38 + frac * 14, audioCtx.currentTime, 0.2);
    }
  } else if (audioReady && vibeGain) {
    vibeGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.2);
  }

  // ---- Win: reach exit ----
  if (circleRectOverlap(p.x, p.y, CONFIG.PLAYER_R, LEVEL.exit)) {
    onReachExit();
  }

  // ---- Audio: nudge drone with the meter ----
  if (audioReady && droneGain) {
    const target = 0.02 + (state.noise / CONFIG.METER_MAX) * 0.12;
    droneGain.gain.setTargetAtTime(target, audioCtx.currentTime, 0.2);
  }
}

// Move one axis at a time; if the new position collides with any solid, keep old.
function resolveAxis(ox, oy, tx, ty, solids) {
  const r = CONFIG.PLAYER_R;
  for (const s of solids) {
    if (circleRectOverlap(tx, ty, r, s)) {
      return { x: ox, y: oy };
    }
  }
  // clamp to play area
  tx = Math.max(r, Math.min(VW - r, tx));
  ty = Math.max(r, Math.min(VH - r, ty));
  return { x: tx, y: ty };
}

function triggerCaught(by) {
  state.screen = CAUGHT;
  state.caughtBy = by || "hearing";
  state.flash = 1;
  state.shake = 1;
  if (by === "vibration") {
    state.deaf.alert = 1;
    sfxVibeCaught();
  } else {
    for (const g of state.guards) g.alert = 1;
    sfxCaught();
  }
  if (audioReady && droneGain) droneGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.4);
  if (audioReady && vibeGain) vibeGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.4);
}

// Reaching an exit advances to the next room (LEVEL-04). If the NEXT room is the
// twist room and the rug-pull hasn't played yet, fire the REVEAL interstitial
// first. The final room's exit reaches the CLEARED win state.
function onReachExit() {
  // Record that we cleared this room (room count is 1-based).
  recordProgress(state.levelIndex + 1, false);

  if (audioReady && droneGain) droneGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.5);

  if (state.levelIndex >= LEVELS.length - 1) {
    triggerCleared();
    return;
  }

  const next = LEVELS[state.levelIndex + 1];
  // A short per-room clear sting for non-finale rooms (JUICE-02).
  sfxRoomClear();
  if (next && next.isTwist && !state.revealDone) {
    state.screen = REVEAL;
    state.revealT = 0;
    state.revealDone = true;
    state.flash = 0.6;
    sfxReveal();
  } else {
    // Advance straight into the next room.
    startLevel(state.levelIndex + 1);
  }
}

function triggerCleared() {
  state.screen = CLEARED;
  sfxClear();
  if (audioReady && droneGain) droneGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.4);
  if (audioReady && vibeGain) vibeGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.4);
  // Full clear: record all rooms reached + the run's peak noise (lower better).
  recordProgress(LEVELS.length, true);
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function meterColor(frac) {
  if (frac < 0.45) return COLORS.meterCool;
  if (frac < 0.75) return COLORS.meterWarm;
  return COLORS.meterHot;
}

// Faint blueprint grid — the room "breathes" with a slow pulse (STYLE-01).
function drawGrid(t) {
  const step = 40;
  const pulse = 0.6 + 0.4 * Math.sin(t * 0.8);
  ctx.save();
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  ctx.globalAlpha = pulse;
  ctx.beginPath();
  for (let x = step; x < VW; x += step) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, VH); }
  for (let y = step; y < VH; y += step) { ctx.moveTo(0, y + 0.5); ctx.lineTo(VW, y + 0.5); }
  ctx.stroke();
  ctx.restore();
}

function drawMotes() {
  ctx.save();
  for (const m of state.motes) {
    const a = m.a * (0.5 + 0.5 * Math.sin(m.ph));
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.r, 0, TAU);
    ctx.fillStyle = `rgba(200,220,255,${a.toFixed(3)})`;
    ctx.fill();
  }
  ctx.restore();
}

function drawSparks() {
  ctx.save();
  for (const s of state.sparks) {
    const a = Math.max(0, s.life / s.max);
    ctx.beginPath();
    ctx.arc(s.x, s.y, 1.4, 0, TAU);
    ctx.fillStyle = `rgba(255,255,255,${(a * 0.8).toFixed(3)})`;
    ctx.fill();
  }
  ctx.restore();
}

function drawRoom() {
  // Floor — charcoal, with a soft radial "lit" pool around the player.
  ctx.fillStyle = COLORS.room;
  ctx.fillRect(0, 0, VW, VH);

  drawGrid(state.elapsed);

  // A soft lit pool under the player (the only warmth in the room).
  if (state.screen === PLAYING || state.screen === CAUGHT) {
    const p = state.player;
    const grd = ctx.createRadialGradient(p.x, p.y, 8, p.x, p.y, 160);
    grd.addColorStop(0, "rgba(150,180,230,0.10)");
    grd.addColorStop(1, "rgba(150,180,230,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, VW, VH);
  }

  // Walls (charcoal fill + thin white outline = blueprint feel)
  for (const w of LEVEL.walls) {
    ctx.fillStyle = COLORS.wall;
    ctx.fillRect(w.x, w.y, w.w, w.h);
    ctx.strokeStyle = COLORS.wallEdge;
    ctx.lineWidth = 1;
    ctx.strokeRect(w.x + 0.5, w.y + 0.5, w.w - 1, w.h - 1);
  }

  // Door
  const d = LEVEL.door;
  if (d && !state.door.open) {
    ctx.fillStyle = "#4a4030";
    ctx.fillRect(d.x, d.y, d.w, d.h);
    ctx.strokeStyle = COLORS.distract;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(d.x + 0.5, d.y + 0.5, d.w - 1, d.h - 1);
    if (nearDoor()) label("E: OPEN DOOR (+noise)", d.x + d.w + 8, d.y + d.h / 2, COLORS.distract);
  }

  // Exit pad
  const ex = LEVEL.exit;
  ctx.save();
  const exPulse = 0.5 + 0.5 * Math.sin(state.elapsed * 2.4);
  ctx.shadowColor = COLORS.exit;
  ctx.shadowBlur = 8 + exPulse * 10;
  ctx.strokeStyle = COLORS.exit;
  ctx.lineWidth = 2;
  ctx.strokeRect(ex.x + 0.5, ex.y + 0.5, ex.w, ex.h);
  ctx.shadowBlur = 0;
  ctx.fillStyle = `rgba(123,255,176,${(0.05 + exPulse * 0.06).toFixed(3)})`;
  ctx.fillRect(ex.x, ex.y, ex.w, ex.h);
  ctx.fillStyle = COLORS.exit;
  ctx.font = "11px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("EXIT", ex.x + ex.w / 2, ex.y + ex.h / 2 + 4);
  ctx.restore();

  // Far lure landing point (where the thrown stone will dump noise).
  const lt = LEVEL.lureTo;
  if (lt && !state.distractionUsed) {
    ctx.save();
    ctx.strokeStyle = "rgba(255,210,122,0.35)";
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(lt.x, lt.y, 16, 0, TAU);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
    label("stone lands here", lt.x, lt.y + 30, COLORS.textDim);
  }

  // Distraction stone (in the start room)
  const ds = LEVEL.distraction;
  if (ds && !state.distractionUsed) {
    ctx.save();
    ctx.shadowColor = COLORS.distract;
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(ds.x, ds.y, ds.r, 0, TAU);
    ctx.fillStyle = COLORS.distract;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = COLORS.outline;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
    if (nearDistraction()) label("F: THROW STONE (lures guard)", ds.x + 40, ds.y - 24, COLORS.distract);
    else label("stone", ds.x, ds.y - 22, COLORS.textDim);
  }
}

function label(text, x, y, color) {
  ctx.save();
  ctx.font = "11px system-ui";
  ctx.textAlign = "center";
  ctx.fillStyle = color || COLORS.text;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function drawRings() {
  ctx.save();
  for (const r of state.rings) {
    const frac = r.r / r.maxR;
    const op = (1 - frac) * 0.9;
    // bright core + soft outer glow — sound is the only bright thing here
    ctx.shadowColor = "rgba(255,255,255,0.8)";
    ctx.shadowBlur = 10 * (1 - frac);
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.r, 0, TAU);
    ctx.strokeStyle = `rgba(255,255,255,${op.toFixed(3)})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.restore();
}

function drawGuard() {
  for (const g of state.guards) {
    const def = g.def;
    const distracted = g.lured > 0;

    // Patrol line guide
    ctx.strokeStyle = "rgba(255,111,111,0.15)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(def.x, def.yTop);
    ctx.lineTo(def.x, def.yBot);
    ctx.stroke();

    // Body with a red ear-glow halo (this one LISTENS).
    ctx.save();
    ctx.shadowColor = distracted ? "rgba(217,138,138,0.6)" : "rgba(255,111,111,0.85)";
    ctx.shadowBlur = distracted ? 8 : 14 + 6 * Math.sin(state.elapsed * 3);
    ctx.beginPath();
    ctx.arc(g.x, g.y, CONFIG.GUARD_R, 0, TAU);
    ctx.fillStyle = distracted ? COLORS.guardCalm : COLORS.guard;
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = COLORS.outline;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // a small "ear" arc icon
    ctx.beginPath();
    ctx.arc(g.x, g.y, CONFIG.GUARD_R - 4, -0.7, 0.7);
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Hearing-threshold readout above the guard
    ctx.font = "10px system-ui";
    ctx.textAlign = "center";
    ctx.fillStyle = COLORS.threshold;
    ctx.fillText(`hears @ ${CONFIG.GUARD_THRESHOLD}`, g.x, g.y - 20);
    if (distracted) {
      ctx.fillStyle = COLORS.exit;
      ctx.fillText("? distracted", g.x, g.y - 32);
    }
  }
}

// THE TWIST guard — a violet sentinel that FEELS the floor. Drawn as a square
// (vs the hearing guard's circle) so it reads as "different ruleset" at a glance
// (TWIST-05). A rotating sensor lobe and concentric vibration rings sweep its
// field; the rings INVERT the player's instinct — they grow inward when you're
// still (it's locking on) and scatter when you move.
function drawDeaf() {
  if (!state.deaf.active) return;
  const dg = state.deaf;
  const frac = dg.vibe / CONFIG.DEAF_THRESHOLD;

  ctx.save();
  // Vibration field — a faint violet disc; intensity tracks the meter.
  const fld = ctx.createRadialGradient(dg.x, dg.y, 10, dg.x, dg.y, CONFIG.DEAF_RANGE);
  fld.addColorStop(0, `rgba(155,140,255,${(0.05 + frac * 0.10).toFixed(3)})`);
  fld.addColorStop(1, "rgba(155,140,255,0)");
  ctx.fillStyle = fld;
  ctx.beginPath();
  ctx.arc(dg.x, dg.y, CONFIG.DEAF_RANGE, 0, TAU);
  ctx.fill();

  // Range boundary (dashed)
  ctx.strokeStyle = `rgba(155,140,255,${(0.18 + frac * 0.3).toFixed(3)})`;
  ctx.setLineDash([6, 8]);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(dg.x, dg.y, CONFIG.DEAF_RANGE, 0, TAU);
  ctx.stroke();
  ctx.setLineDash([]);

  // Concentric "feeler" rings — contract toward the guard as it locks on.
  for (let i = 0; i < 3; i++) {
    const phase = (state.elapsed * (0.4 + frac * 0.9) + i / 3) % 1;
    // when locking on (frac high) rings move INWARD; idle they pulse outward
    const t = frac > 0.35 ? 1 - phase : phase;
    const rr = 18 + t * (CONFIG.DEAF_RANGE - 18);
    ctx.beginPath();
    ctx.arc(dg.x, dg.y, rr, 0, TAU);
    ctx.strokeStyle = `rgba(155,140,255,${((1 - t) * (0.15 + frac * 0.35)).toFixed(3)})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Rotating sensor lobe — a sweeping wedge.
  const a0 = dg.sweep;
  ctx.beginPath();
  ctx.moveTo(dg.x, dg.y);
  ctx.arc(dg.x, dg.y, CONFIG.DEAF_RANGE, a0 - 0.18, a0 + 0.18);
  ctx.closePath();
  ctx.fillStyle = `rgba(211,107,255,${(0.06 + frac * 0.12).toFixed(3)})`;
  ctx.fill();

  // Body — a diamond/square, violet, glowing with the vibration intensity.
  ctx.translate(dg.x, dg.y);
  ctx.rotate(Math.PI / 4);
  const s = CONFIG.DEAF_R;
  ctx.shadowColor = COLORS.vibe;
  ctx.shadowBlur = 10 + frac * 22;
  ctx.fillStyle = dg.alert > 0 ? COLORS.vibeHot : (frac > 0.6 ? COLORS.vibeHot : COLORS.deaf);
  ctx.fillRect(-s, -s, s * 2, s * 2);
  ctx.shadowBlur = 0;
  ctx.strokeStyle = COLORS.outline;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(-s, -s, s * 2, s * 2);
  ctx.restore();

  // Label — this one is DEAF.
  ctx.font = "10px system-ui";
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.vibe;
  ctx.fillText("DEAF · feels stillness", dg.x, dg.y - 26);
}

function drawPlayer() {
  const p = state.player;
  ctx.save();
  // glow halo
  ctx.shadowColor = COLORS.playerGlow;
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(p.x, p.y, CONFIG.PLAYER_R, 0, TAU);
  ctx.fillStyle = COLORS.player;
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = COLORS.outline;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // In the deaf room, a small motion indicator ring around the player shows
  // whether you're "moving enough" — full violet ring = safe, hollow = exposed.
  if (state.deaf.active && state.screen === PLAYING) {
    const safe = p.speed >= CONFIG.VIBE_DRAIN_MIN_SPEED;
    ctx.beginPath();
    ctx.arc(p.x, p.y, CONFIG.PLAYER_R + 6, 0, TAU);
    ctx.strokeStyle = safe ? "rgba(155,140,255,0.85)" : "rgba(255,77,77,0.5)";
    ctx.lineWidth = 2;
    ctx.setLineDash(safe ? [] : [3, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

function drawMeter() {
  const pad = 24;
  const w = VW - pad * 2;
  const h = 18;
  const x = pad, y = 8;
  const frac = state.noise / CONFIG.METER_MAX;

  // track
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = COLORS.outlineDim;
  ctx.lineWidth = 1;
  ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);

  // fill — glows hotter as it climbs (STYLE-02)
  const col = meterColor(frac);
  ctx.save();
  ctx.shadowColor = col;
  ctx.shadowBlur = 4 + frac * 14;
  ctx.fillStyle = col;
  ctx.fillRect(x, y, w * frac, h);
  ctx.restore();

  // In the deaf room sound does nothing — gray the meter out and say so.
  if (state.deaf.active) {
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.fillRect(x, y, w, h);
    ctx.font = "11px system-ui";
    ctx.textAlign = "left";
    ctx.fillStyle = COLORS.textDim;
    ctx.fillText("NOISE — ignored here", x, y + h + 16);
    ctx.textAlign = "right";
    ctx.fillStyle = COLORS.deaf;
    ctx.fillText("this guard cannot hear", x + w, y + h + 16);
    drawVibeMeter();
    return;
  }

  // guard threshold marker
  const tx = x + w * (CONFIG.GUARD_THRESHOLD / CONFIG.METER_MAX);
  ctx.strokeStyle = COLORS.threshold;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(tx, y - 3);
  ctx.lineTo(tx, y + h + 3);
  ctx.stroke();

  // labels
  ctx.font = "11px system-ui";
  ctx.textAlign = "left";
  ctx.fillStyle = COLORS.text;
  ctx.fillText("NOISE", x, y + h + 16);
  ctx.textAlign = "right";
  ctx.fillStyle = frac >= CONFIG.GUARD_THRESHOLD / CONFIG.METER_MAX ? COLORS.meterHot : COLORS.textDim;
  ctx.fillText(Math.round(state.noise) + " / " + CONFIG.METER_MAX, x + w, y + h + 16);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.threshold;
  ctx.fillText("guard threshold", tx, y - 6);
}

// THE TWIST's meter — vibration, not noise. Fills while you stand still.
function drawVibeMeter() {
  const pad = 24;
  const w = VW - pad * 2;
  const h = 14;
  const x = pad, y = 34;
  const frac = state.deaf.vibe / CONFIG.DEAF_THRESHOLD;

  ctx.fillStyle = "rgba(155,140,255,0.08)";
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = "rgba(155,140,255,0.4)";
  ctx.lineWidth = 1;
  ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);

  const col = frac > 0.7 ? COLORS.vibeHot : COLORS.vibe;
  ctx.save();
  ctx.shadowColor = col;
  ctx.shadowBlur = 4 + frac * 16;
  ctx.fillStyle = col;
  ctx.fillRect(x, y, w * frac, h);
  ctx.restore();

  ctx.font = "11px system-ui";
  ctx.textAlign = "left";
  ctx.fillStyle = COLORS.vibe;
  ctx.fillText("VIBRATION — fills when you STOP. Keep moving.", x, y + h + 15);
  ctx.textAlign = "right";
  ctx.fillStyle = frac > 0.7 ? COLORS.vibeHot : COLORS.textDim;
  ctx.fillText(Math.round(state.deaf.vibe) + " / " + CONFIG.DEAF_THRESHOLD, x + w, y + h + 15);
}

function drawHints() {
  ctx.font = "11px system-ui";
  ctx.textAlign = "left";
  ctx.fillStyle = COLORS.textDim;
  const msg = state.deaf.active
    ? "WASD/Arrows move · KEEP MOVING — never stop near the deaf guard · reach the EXIT"
    : "WASD/Arrows move · Shift sprint (louder) · E door · F throw stone";
  ctx.fillText(msg, 24, VH - 10);
}

// Per-room onboarding: a fading banner with the room name + the lesson it
// teaches, shown for a few seconds on entry so no manual is needed (ONBOARD-02).
const TEACH_LINES = {
  noise: "Move and watch NOISE rise — sprint with Shift to hear it spike. Stop, and it decays. Nothing hears you here. Just reach the EXIT.",
  distraction: "A guard blocks the way and HEARS the meter. You can't cross quietly. Grab the stone (F) — it lands far off and lures the guard away.",
  timing: "Two guards, no stone. Bank silence, read their patrols, and slip through the gaps. Stay under the amber threshold.",
  vibration: "This guard is DEAF — sound means nothing. It feels the floor. STAND STILL and it finds you. Keep moving to stay hidden.",
  finale: "Both senses at once. A guard below HEARS (be quiet); a deaf guard above FEELS (never stop). Thread between them to the EXIT.",
};
function drawRoomBanner() {
  if (state.intro <= 0) return;
  const a = Math.min(1, state.intro / 1.0); // fade out over the last second
  const accent = state.deaf.active && LEVEL.teach === "vibration" ? COLORS.vibe
    : (LEVEL.teach === "finale" ? COLORS.text : COLORS.exit);
  ctx.save();
  ctx.globalAlpha = a;
  // dim strip behind the text for legibility
  ctx.fillStyle = "rgba(8,9,11,0.55)";
  ctx.fillRect(0, VH / 2 - 56, VW, 96);
  ctx.textAlign = "center";
  ctx.font = "26px system-ui";
  ctx.fillStyle = accent;
  ctx.fillText(LEVEL.name + "   ·   ward " + (state.levelIndex + 1) + " of " + LEVELS.length, VW / 2, VH / 2 - 22);
  ctx.font = "14px system-ui";
  ctx.fillStyle = COLORS.text;
  wrapText(TEACH_LINES[LEVEL.teach] || "", VW / 2, VH / 2 + 6, VW - 120, 20);
  ctx.restore();
}

// Tiny word-wrap for the banner lesson text.
function wrapText(text, cx, y, maxW, lh) {
  const words = text.split(" ");
  let line = "";
  const lines = [];
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  let yy = y;
  for (const ln of lines) { ctx.fillText(ln, cx, yy); yy += lh; }
}

function drawDebug() {
  if (!DEBUG) return;
  ctx.font = "11px monospace";
  ctx.textAlign = "left";
  ctx.fillStyle = "#7bffb0";
  let yy = 70;
  const line = (t) => { ctx.fillText(t, 30, yy); yy += 14; };
  line(`level=${state.levelIndex} screen=${state.screen}`);
  line(`noise=${state.noise.toFixed(1)} peak=${state.peakNoise.toFixed(1)} pSpeed=${state.player.speed.toFixed(0)}`);
  line(`vibe=${state.deaf.vibe.toFixed(1)}/${CONFIG.DEAF_THRESHOLD} deafActive=${state.deaf.active}`);
  line(`rings=${state.rings.length} sparks=${state.sparks.length}`);
}

function centerText(lines) {
  ctx.save();
  ctx.fillStyle = "rgba(8,9,11,0.78)";
  ctx.fillRect(0, 0, VW, VH);
  ctx.textAlign = "center";
  let y = VH / 2 - (lines.length * 26) / 2;
  for (const ln of lines) {
    ctx.font = ln.size + "px system-ui";
    ctx.fillStyle = ln.color || COLORS.text;
    ctx.fillText(ln.text, VW / 2, y);
    y += ln.gap || 30;
  }
  ctx.restore();
}

function vignette() {
  const g = ctx.createRadialGradient(VW / 2, VH / 2, VH * 0.35, VW / 2, VH / 2, VH * 0.85);
  g.addColorStop(0, "rgba(0,0,0,0)");
  g.addColorStop(1, "rgba(0,0,0,0.55)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, VW, VH);
}

function render() {
  ctx.clearRect(0, 0, VW, VH);
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, VW, VH);

  // Screen shake offset (caught impact).
  ctx.save();
  if (state.shake > 0) {
    const m = state.shake * 8;
    ctx.translate((Math.random() - 0.5) * m, (Math.random() - 0.5) * m);
  }

  if (state.screen === TITLE) {
    drawRoom();
    drawMotes();
    drawGuard();
    drawPlayer();
    vignette();
    centerText([
      { text: "HUSH", size: 64, gap: 38, color: COLORS.player },
      { text: "Silence is a budget. Guards hear the meter, not you.", size: 16, gap: 25, color: COLORS.textDim },
      { text: "Five wards. Learn to be quiet — then learn to never stop.", size: 14, gap: 34, color: COLORS.textDim },
      { text: "WASD / Arrows move · Shift sprint · E door · F throw stone", size: 14, gap: 32, color: COLORS.text },
      { text: bestText(), size: 13, gap: 30, color: COLORS.exit },
      { text: "Press Enter or click to begin", size: 16, gap: 24, color: COLORS.meterWarm },
    ]);
    ctx.restore();
    return;
  }

  // THE TWIST interstitial — the rug-pull. Held on a black field with a slowly
  // resolving violet diamond and copy that flips the rule out from under you.
  if (state.screen === REVEAL) {
    drawMotes();
    const t = state.revealT;
    // a lone violet diamond fades in
    ctx.save();
    ctx.translate(VW / 2, VH / 2 - 70);
    ctx.rotate(Math.PI / 4);
    const a = Math.min(1, t * 0.8);
    ctx.shadowColor = COLORS.vibe;
    ctx.shadowBlur = 24;
    ctx.fillStyle = `rgba(155,140,255,${a.toFixed(3)})`;
    const s = 18;
    ctx.fillRect(-s, -s, s * 2, s * 2);
    ctx.restore();
    vignette();
    const promptVisible = t > 1.4 && Math.floor(t * 2) % 2 === 0;
    centerText([
      { text: "THREE WARDS CLEARED", size: 22, gap: 44, color: COLORS.exit },
      { text: "But the next one is DEAF.", size: 34, gap: 40, color: COLORS.vibe },
      { text: "It cannot hear a sound. Your meter, your rings — useless.", size: 15, gap: 28, color: COLORS.textDim },
      { text: "It feels the floor. Standing still sends a clean signature through it.", size: 15, gap: 28, color: COLORS.textDim },
      { text: "Everything you learned inverts: STILLNESS is detection. MOTION is safety.", size: 15, gap: 44, color: COLORS.text },
      { text: promptVisible ? "Press Enter or click to step inside" : " ", size: 16, gap: 24, color: COLORS.meterWarm },
    ]);
    ctx.restore();
    return;
  }

  // PLAYING (and the frozen background under CAUGHT/CLEARED)
  drawRoom();
  drawDeaf();      // twist field sits under rings/player
  drawRings();
  drawSparks();
  drawMotes();
  drawGuard();
  drawPlayer();
  vignette();
  drawMeter();
  drawHints();
  if (state.screen === PLAYING) drawRoomBanner();
  drawDebug();

  if (state.flash > 0) {
    const col = state.caughtBy === "vibration" ? "155,140,255" : "255,77,77";
    ctx.fillStyle = `rgba(${col},${(state.flash * 0.5).toFixed(3)})`;
    ctx.fillRect(0, 0, VW, VH);
  }

  if (state.screen === CAUGHT) {
    if (state.caughtBy === "vibration") {
      centerText([
        { text: "FELT.", size: 56, gap: 40, color: COLORS.vibeHot },
        { text: "You held still — the deaf guard read your signature through the floor.", size: 14, gap: 30, color: COLORS.textDim },
        { text: "Here, freezing is the trap. Stay in steady, gentle motion to stay hidden.", size: 14, gap: 40, color: COLORS.textDim },
        { text: "Press R to retry", size: 18, gap: 24, color: COLORS.meterWarm },
      ]);
    } else {
      centerText([
        { text: "HEARD.", size: 56, gap: 40, color: COLORS.meterHot },
        { text: "A ring touched the guard while your meter was over its threshold.", size: 14, gap: 30, color: COLORS.textDim },
        { text: "Bank silence. Use the stone to pull the guard off your route.", size: 14, gap: 40, color: COLORS.textDim },
        { text: "Press R to retry", size: 18, gap: 24, color: COLORS.meterWarm },
      ]);
    }
  } else if (state.screen === CLEARED) {
    const peak = Math.round(state.runPeak);
    centerText([
      { text: "ALL FIVE WARDS PASSED", size: 44, gap: 42, color: COLORS.exit },
      { text: "You learned to be silent — then learned to never stop.", size: 15, gap: 28, color: COLORS.text },
      { text: "Your loudest moment this run: " + peak + " dB", size: 14, gap: 26, color: COLORS.textDim },
      { text: bestText(), size: 13, gap: 40, color: COLORS.exit },
      { text: "Press Enter for the title", size: 16, gap: 24, color: COLORS.meterWarm },
    ]);
  }
  ctx.restore();
}

// One-line best-run summary for the title and clear screens (ONBOARD-03).
function bestText() {
  const b = state.best;
  if (!b) return "No runs yet — reach as far as you can.";
  if (b.cleared) return "Best: all 5 wards cleared · quietest run " + b.peak + " dB";
  return "Best: reached ward " + b.rooms + " of " + LEVELS.length;
}

// ----------------------------------------------------------------------------
// Main loop (delta-time)
// ----------------------------------------------------------------------------
let lastT = performance.now();
function frame(now) {
  let dt = (now - lastT) / 1000;
  lastT = now;
  if (dt > 0.05) dt = 0.05; // clamp big hitches (tab switch)
  update(dt);
  render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

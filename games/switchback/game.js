/*
 * SWITCHBACK — Phase 1: Core Mechanic Prototype.
 *
 * A luminous droplet rolls perpetually forward through a grey-box cavern
 * corridor. ONE button (Space / click / tap) FLIPS GRAVITY, committing the
 * droplet to a parabolic transfer between ceiling and floor. Curved surfaces
 * BANK the arc — they redirect it while preserving forward momentum instead of
 * dead-stopping the droplet. Collision is swept / sub-stepped so the droplet
 * never tunnels through a wall at high speed.
 *
 * This is a Phase-1 grey-box prototype: the simulation, banking, swept
 * collision, a debug trajectory overlay, and a TITLE -> PLAYING -> GAME_OVER
 * loop. Geode art, generative audio, and the rhythmic-collapse twist are LATER
 * phases.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no fetch — runs straight
 * from file://.
 *
 * Sections: Constants -> Canvas/scale -> State -> Audio -> Corridor field ->
 * Input -> Sim -> Collision -> Render -> Loop.
 */

"use strict";

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;

// Fixed logical play area (landscape 16:9). Canvas scales to fit the window.
const VW = 960;
const VH = 540;

// Corridor baseline geometry (logical px from top).
const MARGIN = 70;            // base distance of each wall from the edge
const TOP_Y = MARGIN;         // nominal ceiling surface y (corridor inner top)
const BOTTOM_Y = VH - MARGIN; // nominal floor surface y (corridor inner bottom)

// Physics (logical px / second).
const BASE_SPEED = 320;       // forward scroll speed at run start
const GRAVITY = 2400;         // vertical acceleration magnitude
const MAX_VY = 2600;          // clamp so arcs stay sane
const BANK_GAIN = 1.18;       // tangential energy a clean curved bank adds

// Player x is fixed on screen at this fraction of the width.
const PLAYER_X = VW * 0.30;
const RADIUS = 13;

// Soda-can collectibles / hazards (SODA-01). A black Coke Zero can is GOOD
// (bonus + boost); a silver Diet Coke can is BAD (point loss + knockback).
const CAN_W = 22;              // can width (logical px)
const CAN_H = 34;              // can height (logical px)
const CAN_GOOD_POINTS = 50;    // metres gained collecting a Coke Zero (black)
const CAN_BAD_POINTS = 50;     // metres lost bumping a Diet Coke (silver)
const CAN_BAD_CHANCE = 0.42;   // fraction of spawned cans that are the bad type
const CAN_MIN_GAP = 340;       // min world-x spacing between cans
const CAN_MAX_GAP = 660;       // max world-x spacing between cans
const BOOST_DUR = 3.0;         // seconds of 2x score after a good can
const BOOST_MULT = 2;          // score multiplier while a boost is active

// localStorage key for best distance.
const LS_BEST = "switchback_best_v1";

// Geode palette — a backlit sliced agate. Concentric mineral bands rendered
// from warm amber at the outer rock toward a cool teal core glow, with the
// luminous mercury droplet as the brightest thing on screen. SCAF-03: every
// color used by rendering comes from here.
const COLORS = {
  bg: "#05040a",
  bgGlow: "#0d1c22",      // teal backlight bleed toward the corridor centre
  wall: "#140f12",        // solid rock beyond the walls (deep)
  wallEdge: "#3a2c1a",    // inner wall edge line (warm rim)
  // Concentric mineral bands, outer (rock) -> inner (near the cavity).
  bands: [
    "#1d130c", // outermost dark amber rock
    "#3a2410", // amber
    "#5e3a14", // bright amber vein
    "#7a4a18", // amber/gold
    "#3f4a2a", // amber->teal transition (olive)
    "#1b4a44", // teal
    "#0f5d56", // bright teal vein
    "#0a3a3a", // deep teal near the cavity
  ],
  agateRim: "#ffcf7a",    // glowing crystalline rim line on the inner surface
  agateRimTeal: "#74f0dd",
  surface: "#5fd6c4",     // teal surface highlight (legacy reference)
  droplet: "#ffffff",     // luminous mercury core
  dropletHi: "#d6fbff",   // specular highlight on the sphere
  dropletGlow: "#7df0e6", // teal halo
  trail: "#bdfdf2",       // liquid-metal smear
  amber: "#ff9f1c",
  amberSoft: "#ffd089",
  text: "#f6ecda",
  muted: "#9a8f78",
  danger: "#ff6f6f",
  debug: "#ffd27a",
  // Crystal / collapse twist colors.
  crystalIdle: "#2a6f74",   // dormant crystal embedded in rock
  crystalHum: "#7df0e6",    // humming (triggered, counting down)
  crystalHot: "#fff2c4",    // about to shatter (final beat)
  crystalShard: "#cffcff",  // shatter shard
  collapse: "#0a0408",      // void where wall has shattered away
  beat: "#ffd089",          // beat pulse accent
  // Soda-can collectibles.
  cokeBlack: "#141418",     // Coke Zero body (near-black)
  cokeRed: "#e5142a",       // Coke red band (good can accent)
  dietSilver: "#d7dce2",    // Diet Coke body (silver)
  dietRed: "#c8102e",       // Diet Coke red band (bad can accent)
};

// ----------------------------------------------------------------------------
// Canvas + responsive scaling
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function fitCanvas() {
  // Keep logical resolution fixed; scale the element via CSS to fit the window.
  const pad = 20;
  const aw = window.innerWidth - pad;
  const ah = window.innerHeight - pad;
  const scale = Math.min(aw / VW, ah / VH);
  canvas.style.width = Math.round(VW * scale) + "px";
  canvas.style.height = Math.round(VH * scale) + "px";
}
window.addEventListener("resize", fitCanvas);
fitCanvas();

// ----------------------------------------------------------------------------
// State machine
// ----------------------------------------------------------------------------
const TITLE = "TITLE";
const PLAYING = "PLAYING";
const GAME_OVER = "GAME_OVER";
let state = TITLE;

// World/run data.
let worldX = 0;          // distance the world has scrolled (= distance travelled)
let speed = BASE_SPEED;  // current forward speed
let distance = 0;        // metres-ish score
let best = loadBest();
let debug = false;       // debug trajectory overlay toggle
let boost = false;       // debug speed boost toggle
let flashT = 0;          // brief death flash timer

// Onboarding + juice run state.
let isFirstRun = loadFirstRun();   // true until the player completes one run
let hasFlipped = false;            // has the player flipped at least once this run
let hintT = 0;                     // in-world "TAP TO FLIP" hint countdown (s)
let titleHintT = 0;                // animated ghost-arc phase on the title screen
let lastMilestone = 0;             // last distance milestone that fired a flash
let newBestCelebrated = false;     // fired the "new best!" cue this run
let cascadeShake = 0;              // extra screen-shake from shatter cascades
let bestFlashT = 0;                // glow timer when a new best is set
let lastRunDist = 0;              // distance of the run that just ended
let newBest = false;             // did the last run beat the stored best?

// Soda cans (SODA-01) — world-anchored so they scroll like crystals.
// Each: {x (world), y, bad, taken, phase}. Coke Zero = good, Diet Coke = bad.
let cans = [];
let nextCanX = 0;        // world x where the next can will be placed
let cansCollected = 0;   // Coke Zero cans grabbed this run (HUD tally)
let boostT = 0;          // seconds of 2x-score boost remaining
let hitFlashT = 0;       // red screen-flash timer from a Diet Coke bump
let pops = [];           // floating +N / -N score popups (screen-space)

// Player droplet.
const player = {
  y: BOTTOM_Y - RADIUS,
  vy: 0,
  gravitySign: 1,   // +1 = pulled down (rest on floor), -1 = pulled up (ceiling)
  onSurface: true,
  squash: 0,        // contact squash amount (cosmetic, 0..1)
  sunk: 0,          // side whose collapsed gap the droplet has dropped into (+1 floor, -1 ceiling, 0 none)
};

// Trail samples (world-space-ish; stored as screen points that scroll).
let trail = [];

// Particle bursts (contact splashes + shatter shards). Screen-space, scroll left.
let particles = [];

// ----------------------------------------------------------------------------
// Twist state — the rhythmic collapse.
// ----------------------------------------------------------------------------
// Musical clock. BPM picked to feel like a slow cave pulse. The beat is the
// single source of timing for the collapse: crystals shatter at most
// SHATTER_BEATS after being triggered, always landing exactly on a beat.
const BPM = 132;
const BEAT_DUR = 60 / BPM;        // seconds per beat
const SHATTER_BEATS = 4;          // max beats from trigger -> shatter
let beatTime = 0;                 // seconds accumulated within the run
let beatCount = 0;                // integer beats elapsed
let beatPulse = 0;                // 0..1 visual pulse, decays each frame

// Crystals embedded in the walls. Each is anchored in WORLD x so it scrolls.
// state: "idle" -> "humming" (counting down) -> "shattered" (gap open).
// side: +1 floor crystal, -1 ceiling crystal.
let crystals = [];
let nextCrystalX = 0;             // world x where we'll place the next crystal

// Open gaps left by shattered crystals: a world-x interval on a side where the
// wall has collapsed away. Falling/arcing into one is fatal.
let gaps = [];                    // {x0,x1,side,age}

function loadBest() {
  try {
    const v = parseInt(localStorage.getItem(LS_BEST) || "0", 10);
    return Number.isFinite(v) ? v : 0;
  } catch (e) {
    return 0;
  }
}
function saveBest(v) {
  try { localStorage.setItem(LS_BEST, String(v)); } catch (e) { /* ignore */ }
}

// First-run flag: true until the player has completed (died on) at least one run,
// used to gate the gentle ease-in + in-world hint (ONBOARD-02 / persistence).
const LS_FIRSTRUN = "switchback_firstrun_done_v1";
function loadFirstRun() {
  try { return localStorage.getItem(LS_FIRSTRUN) !== "1"; } catch (e) { return true; }
}
function markFirstRunDone() {
  isFirstRun = false;
  try { localStorage.setItem(LS_FIRSTRUN, "1"); } catch (e) { /* ignore */ }
}

// ----------------------------------------------------------------------------
// Audio — generative cave-drip soundscape (Web Audio synthesis, file://-safe).
//
// Built lazily and resumed on first user gesture. The palette:
//   * A low, slow ambient drone (the vast hollow cave) on a gentle filter.
//   * A deep pentatonic "cave-drip" tone on every surface contact — a soft
//     sine "plip" plus a short filtered-noise water transient, pitch chosen
//     from a pentatonic scale and biased by where on the corridor we landed,
//     so the soundscape feels generative and never identical twice.
//   * A sharp crystalline ring on each crystal shatter (twist).
//   * A soft tick on each musical beat (the collapse clock).
// ----------------------------------------------------------------------------
let audioCtx = null;
let masterGain = null;
let droneNodes = null;
let muted = false;
try { muted = localStorage.getItem("switchback_muted_v1") === "1"; } catch (e) {}

// Deep pentatonic scale (Hz) — minor pentatonic rooted low for a cave feel.
const PENTA = [
  82.41, 98.00, 110.00, 130.81, 146.83,   // E2 G2 A2 C3 D3
  164.81, 196.00, 220.00, 261.63, 293.66, // E3 G3 A3 C4 D4
];

function unlockAudio() {
  if (audioCtx) {
    if (audioCtx.state === "suspended") audioCtx.resume();
    return;
  }
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = muted ? 0 : 0.9;
    masterGain.connect(audioCtx.destination);
    startDrone();
    if (audioCtx.state === "suspended") audioCtx.resume();
  } catch (e) {
    audioCtx = null;
  }
}

function setMuted(m) {
  muted = m;
  try { localStorage.setItem("switchback_muted_v1", m ? "1" : "0"); } catch (e) {}
  if (masterGain) {
    const t = audioCtx.currentTime;
    masterGain.gain.cancelScheduledValues(t);
    masterGain.gain.setTargetAtTime(m ? 0 : 0.9, t, 0.05);
  }
}

// Ambient cave drone: two slightly detuned low oscillators through a soft
// low-pass, very quiet — felt more than heard.
function startDrone() {
  if (!audioCtx || droneNodes) return;
  const g = audioCtx.createGain();
  g.gain.value = 0.0;
  const lp = audioCtx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 280;
  lp.Q.value = 0.6;
  const o1 = audioCtx.createOscillator();
  o1.type = "sine";
  o1.frequency.value = 55;
  const o2 = audioCtx.createOscillator();
  o2.type = "sine";
  o2.frequency.value = 55 * 1.5;
  o2.detune.value = 6;
  // Slow tremolo so the drone breathes like air moving in a hollow.
  const lfo = audioCtx.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 0.07;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.018;
  lfo.connect(lfoGain).connect(g.gain);
  o1.connect(lp);
  o2.connect(lp);
  lp.connect(g).connect(masterGain);
  o1.start(); o2.start(); lfo.start();
  g.gain.setTargetAtTime(0.05, audioCtx.currentTime, 2.0);
  droneNodes = { g, lp, o1, o2, lfo };
}

// A single cave-drip: water hitting stone in a big hollow. `intensity` 0..1
// scales brightness/volume (a hard bank rings brighter than a soft rest).
function playDrip(intensity) {
  if (!audioCtx || muted) return;
  const t = audioCtx.currentTime;
  const vol = 0.18 + 0.32 * Math.min(1, intensity);

  // Pitch: pentatonic, biased upward with intensity, plus a little randomness.
  const idx = Math.min(PENTA.length - 1,
    Math.floor(Math.random() * 3) + Math.floor(intensity * 4));
  const f = PENTA[idx] * (Math.random() < 0.5 ? 1 : 2); // octave variety

  // Body: sine "plip" with a fast pitch drop (the plink of a drip).
  const o = audioCtx.createOscillator();
  o.type = "sine";
  o.frequency.setValueAtTime(f * 1.5, t);
  o.frequency.exponentialRampToValueAtTime(f, t + 0.05);
  const og = audioCtx.createGain();
  og.gain.setValueAtTime(0.0001, t);
  og.gain.exponentialRampToValueAtTime(vol, t + 0.006);
  og.gain.exponentialRampToValueAtTime(0.0001, t + 0.5 + intensity * 0.4);
  o.connect(og).connect(masterGain);
  o.start(t); o.stop(t + 1.0);

  // Transient: short band-passed noise burst = the splash of contact.
  const nb = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * 0.08), audioCtx.sampleRate);
  const nd = nb.getChannelData(0);
  for (let i = 0; i < nd.length; i++) nd[i] = (Math.random() * 2 - 1) * (1 - i / nd.length);
  const ns = audioCtx.createBufferSource();
  ns.buffer = nb;
  const bp = audioCtx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = f * 4;
  bp.Q.value = 1.4;
  const ng = audioCtx.createGain();
  ng.gain.value = vol * 0.5;
  ns.connect(bp).connect(ng).connect(masterGain);
  ns.start(t);

  // Long airy tail: a faint echo a beat later (the cave answers back).
  const e = audioCtx.createOscillator();
  e.type = "sine";
  e.frequency.value = f * 2;
  const eg = audioCtx.createGain();
  eg.gain.setValueAtTime(0.0001, t + 0.16);
  eg.gain.exponentialRampToValueAtTime(vol * 0.12, t + 0.18);
  eg.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
  e.connect(eg).connect(masterGain);
  e.start(t + 0.16); e.stop(t + 0.8);
}

// Crystalline shatter: a bright FM ring plus a noisy glass crash.
function playShatter() {
  if (!audioCtx || muted) return;
  const t = audioCtx.currentTime;
  const base = PENTA[6 + Math.floor(Math.random() * 4)] * 4;
  // Two detuned high partials for a glassy ring.
  for (let k = 0; k < 3; k++) {
    const o = audioCtx.createOscillator();
    o.type = "triangle";
    o.frequency.value = base * (1 + k * 0.503) * (0.98 + Math.random() * 0.04);
    const g = audioCtx.createGain();
    const v = 0.16 / (k + 1);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35 + k * 0.1);
    o.connect(g).connect(masterGain);
    o.start(t); o.stop(t + 0.6);
  }
  // Glass crash noise.
  const nb = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * 0.25), audioCtx.sampleRate);
  const nd = nb.getChannelData(0);
  for (let i = 0; i < nd.length; i++) nd[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / nd.length, 1.5);
  const ns = audioCtx.createBufferSource();
  ns.buffer = nb;
  const hp = audioCtx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 2200;
  const ng = audioCtx.createGain();
  ng.gain.value = 0.16;
  ns.connect(hp).connect(ng).connect(masterGain);
  ns.start(t);
}

// A soft hum that swells while a crystal counts down (one short note).
function playHum() {
  if (!audioCtx || muted) return;
  const t = audioCtx.currentTime;
  const f = PENTA[4 + Math.floor(Math.random() * 4)];
  const o = audioCtx.createOscillator();
  o.type = "sine";
  o.frequency.value = f * 2;
  const o2 = audioCtx.createOscillator();
  o2.type = "sine";
  o2.frequency.value = f * 3;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.05, t + 0.08);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
  const g2 = audioCtx.createGain();
  g2.gain.value = 0.4;
  o.connect(g).connect(masterGain);
  o2.connect(g2).connect(g);
  o.start(t); o.stop(t + 0.5);
  o2.start(t); o2.stop(t + 0.5);
}

// A quiet metronome tick on each musical beat (the collapse clock's pulse).
function playTick(accent) {
  if (!audioCtx || muted) return;
  const t = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  o.type = "sine";
  o.frequency.value = accent ? 196 : 147;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(accent ? 0.07 : 0.04, t + 0.004);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
  o.connect(g).connect(masterGain);
  o.start(t); o.stop(t + 0.16);
}

function playDeath() {
  if (!audioCtx || muted) return;
  const t = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  o.type = "sawtooth";
  o.frequency.setValueAtTime(220, t);
  o.frequency.exponentialRampToValueAtTime(40, t + 0.7);
  const lp = audioCtx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(1800, t);
  lp.frequency.exponentialRampToValueAtTime(120, t + 0.7);
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.3, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
  o.connect(lp).connect(g).connect(masterGain);
  o.start(t); o.stop(t + 1.0);
}

// ----------------------------------------------------------------------------
// Corridor height field — hand-authored segment-template stitching (LEVEL-01).
//
// The corridor is the pair of functions ceilingY(x) / floorY(x). Rather than one
// global procedural pattern, the corridor is STITCHED at runtime from a library
// of authored segment templates (flat, curved-bank, pinch, chamber, chicane).
// Each template is a self-contained shape that STARTS and ENDS exactly on the
// baseline (TOP_Y / BOTTOM_Y) with zero slope, so consecutive segments butt
// together with no visible seam and continuous surface tangents for banking.
//
// Templates are picked by a seeded RNG, weighted by current difficulty (the
// segment's worldX), so the mix shifts from gentle openers toward tight,
// crystal-friendly shapes the further you travel (LEVEL-02). The whole layout is
// deterministic from worldX, so collision (which samples x±2 in slope()) and
// rendering always agree.
// ----------------------------------------------------------------------------

// Smooth bump centred at c with half-width w, peak amplitude a (cosine window).
function bump(x, c, w, a) {
  const d = Math.abs(x - c);
  if (d >= w) return 0;
  return a * 0.5 * (1 + Math.cos((d / w) * Math.PI));
}

// A cosine "hill" spanning [0..len], peaking amp at the middle, zero+flat at the
// ends — the building block that lets segments butt seamlessly at the baseline.
function hill(p, len, amp) {
  if (p <= 0 || p >= len) return 0;
  return amp * 0.5 * (1 - Math.cos((p / len) * TAU));
}

// Deterministic hash -> [0,1) for a given integer segment index.
function hash01(n) {
  let h = (n ^ 0x9e3779b9) >>> 0;
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

// Segment-template library. Each template, given local position p in [0..len]
// and a per-segment variation v in [0,1), returns {c, f}: the inward offset of
// the ceiling (pushes DOWN) and the floor (pushes UP), both 0 at p=0 and p=len.
// `tier` gates a template behind a minimum distance; `weight(d)` biases the mix.
const TEMPLATES = [
  {
    name: "flat", len: 760, tier: 0,
    weight: (d) => 1.4 + Math.max(0, 1.2 - d / 400),
    shape: (p, len) => ({ c: 0, f: 0 }),
  },
  {
    name: "wave", len: 900, tier: 0,
    weight: (d) => 1.3,
    shape: (p, len, v) => {
      // Two opposed gentle bulges — easy banking practice. Each is a localized
      // hill so it returns to baseline at the segment ends with zero slope.
      const c = hill(p, len * 0.6, 70 + v * 50);
      const f = hill(p - len * 0.4, len * 0.6, 80 + v * 50);
      return { c, f };
    },
  },
  {
    name: "bank", len: 980, tier: 0,
    weight: (d) => 1.0 + Math.min(1.2, d / 600),
    shape: (p, len, v) => {
      // A pronounced curved bulge on one side to bank hard off of.
      const a = 150 + v * 90;
      const c = hill(p - len * 0.08, len * 0.6, a);
      const f = hill(p - len * 0.42, len * 0.6, a * 0.7);
      return { c: Math.max(0, c), f: Math.max(0, f) };
    },
  },
  {
    name: "chicane", len: 1040, tier: 350,
    weight: (d) => Math.min(1.6, d / 500),
    shape: (p, len, v) => {
      // Alternating offset bulges forcing rhythmic flips back and forth.
      const a = 120 + v * 70;
      const c = hill(p, len * 0.34, a) + hill(p - len * 0.62, len * 0.34, a * 0.8);
      const f = hill(p - len * 0.30, len * 0.34, a);
      return { c, f };
    },
  },
  {
    name: "pinch", len: 820, tier: 600,
    weight: (d) => Math.min(1.4, (d - 600) / 700),
    shape: (p, len, v) => {
      // Both walls bulge inward at the same place — a tight throat to thread.
      const a = 120 + Math.min(150, v * 90 + 40);
      const c = hill(p, len, a);
      const f = hill(p, len, a);
      return { c, f };
    },
  },
  {
    name: "chamber", len: 1120, tier: 250,
    weight: (d) => 0.7 + Math.min(0.8, d / 1200),
    shape: (p, len, v) => {
      // Walls bow OUTWARD (negative inward offset) — an open chamber that gives
      // breathing room but invites long committed arcs. Clamped so it never
      // exceeds the canvas.
      const a = 60 + v * 40;
      const c = -hill(p, len, a);
      const f = -hill(p, len, a);
      return { c, f };
    },
  },
];

// Cache the stitched plan as a growing array of placed segments so we don't
// re-pick on every sample. Each entry: {x0, x1, tpl, v}.
let _segs = [];
let _segEndX = 0;     // world-x where the authored plan currently ends
let _segIndex = 0;    // running segment counter (feeds the seeded RNG)
const OPENER_LEN = 1100; // flat tutorial opener before authored segments begin

function resetCorridor() {
  _segs = [];
  _segEndX = OPENER_LEN;
  _segIndex = 0;
}

// Pick the next template via weighted seeded choice for the given difficulty.
function pickTemplate(d, seed) {
  let total = 0;
  const ws = [];
  for (const t of TEMPLATES) {
    const w = d >= t.tier ? Math.max(0, t.weight(d)) : 0;
    ws.push(w);
    total += w;
  }
  let r = seed * total;
  for (let i = 0; i < TEMPLATES.length; i++) {
    r -= ws[i];
    if (r <= 0) return TEMPLATES[i];
  }
  return TEMPLATES[0];
}

// Ensure the authored plan covers up to worldX targetX, stitching new segments.
function ensureCorridor(targetX) {
  while (_segEndX < targetX) {
    const d = _segEndX / 10; // distance-ish at this segment (matches score units)
    const s1 = hash01(_segIndex * 2 + 1);
    const s2 = hash01(_segIndex * 2 + 7919);
    const tpl = pickTemplate(d, s1);
    const seg = { x0: _segEndX, x1: _segEndX + tpl.len, tpl, v: s2 };
    _segs.push(seg);
    _segEndX = seg.x1;
    _segIndex++;
  }
  // Cull segments fully behind the player to bound memory.
  if (_segs.length > 64) {
    const cutoff = worldX - 400;
    let drop = 0;
    while (drop < _segs.length - 8 && _segs[drop].x1 < cutoff) drop++;
    if (drop > 0) _segs.splice(0, drop);
  }
}

// Find the authored segment covering world-x (linear-ish scan over a small set).
function segAt(x) {
  for (let i = _segs.length - 1; i >= 0; i--) {
    const s = _segs[i];
    if (x >= s.x0 && x < s.x1) return s;
    if (x >= s.x1 && i === _segs.length - 1) return null; // ahead of plan
  }
  return null;
}

// Sample the inward offsets {c, f} at world-x from the stitched plan.
function corridorOffset(x) {
  if (x < OPENER_LEN) return { c: 0, f: 0 };
  // slope() samples x±2; ensure the plan reaches a little past x.
  if (x + 8 >= _segEndX) ensureCorridor(x + VW + 600);
  const s = segAt(x);
  if (!s) return { c: 0, f: 0 };
  return s.tpl.shape(x - s.x0, s.tpl.len, s.v);
}

// Smallest clearance the corridor is ever allowed to pinch to. Comfortably
// above the droplet diameter so a threaded route is always physically possible.
const MIN_CLEARANCE = 120;
// Baseline open height between the two walls.
const BASE_CLEARANCE = BOTTOM_Y - TOP_Y; // 400

// Compute clamped ceiling/floor for an x, sharing one offset sample so both
// sides stay consistent and the combined pinch can never invert the corridor.
function corridorWalls(x) {
  const o = corridorOffset(x);
  // Inward offsets push the walls toward the centre; outward (negative) widen.
  let c = Math.max(-40, o.c); // ceiling pushed down by c
  let f = Math.max(-40, o.f); // floor pushed up by f
  // If the combined inward bulge would over-close the corridor, scale both
  // offsets back proportionally so a MIN_CLEARANCE throat always survives.
  const inward = Math.max(0, c) + Math.max(0, f);
  const maxInward = BASE_CLEARANCE - MIN_CLEARANCE;
  if (inward > maxInward && inward > 0) {
    const k = maxInward / inward;
    if (c > 0) c *= k;
    if (f > 0) f *= k;
  }
  return { cy: TOP_Y + c, fy: BOTTOM_Y - f };
}

function ceilingY(x) {
  return corridorWalls(x).cy;
}

function floorY(x) {
  return corridorWalls(x).fy;
}

// Numerical surface normal-ish slope: dY/dX of a surface function at x.
function slope(fn, x) {
  const h = 2;
  return (fn(x + h) - fn(x - h)) / (2 * h);
}

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
function flip() {
  // The single verb: flip gravity, leave the current surface, begin free arc.
  player.gravitySign *= -1;
  player.onSurface = false;
  hasFlipped = true;
  hintT = 0; // first flip dismisses the onboarding hint
}

function primaryAction() {
  // Context-dependent meaning of the one button per state.
  unlockAudio();
  if (state === TITLE) {
    startRun();
  } else if (state === PLAYING) {
    flip();
  } else if (state === GAME_OVER) {
    // small guard so the death press doesn't instantly restart
    if (flashT <= 0) resetToTitle();
  }
}

window.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowUp") {
    e.preventDefault();
    primaryAction();
  } else if (e.code === "KeyD") {
    debug = !debug;
  } else if (e.code === "KeyB") {
    boost = !boost;
  } else if (e.code === "KeyM") {
    unlockAudio();
    setMuted(!muted);
  }
});

canvas.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  primaryAction();
});

// ----------------------------------------------------------------------------
// Run lifecycle
// ----------------------------------------------------------------------------
function startRun() {
  state = PLAYING;
  worldX = 0;
  speed = BASE_SPEED;
  distance = 0;
  flashT = 0;
  trail = [];
  particles = [];
  player.gravitySign = 1;
  player.vy = 0;
  player.onSurface = true;
  player.squash = 0;
  player.sunk = 0;
  // Rebuild the stitched corridor plan fresh for this run.
  resetCorridor();
  // Snap onto the floor at the start.
  player.y = floorY(worldX + PLAYER_X) - RADIUS;
  // Reset the twist systems.
  beatTime = 0;
  beatCount = 0;
  beatPulse = 0;
  crystals = [];
  gaps = [];
  // First crystals start a bit ahead so the opener teaches the flip cleanly.
  nextCrystalX = 1600;
  // Onboarding: the very first run of a fresh install eases the player in with a
  // slower ramp and an in-world "TAP TO FLIP" hint until they take their first
  // flip (ONBOARD-02). Subsequent runs start at full pace.
  hasFlipped = false;
  hintT = isFirstRun ? 6.0 : 0;
  // Score-milestone feedback bookkeeping (JUICE).
  lastMilestone = 0;
  newBestCelebrated = false;
  cascadeShake = 0;
  // Soda-can collectibles reset. Start past the flat opener so cans don't
  // clutter the tutorial before the player's first flip.
  cans = [];
  nextCanX = 1500;
  cansCollected = 0;
  boostT = 0;
  hitFlashT = 0;
  pops = [];
}

function resetToTitle() {
  state = TITLE;
}

function die() {
  state = GAME_OVER;
  flashT = 0.45;
  cascadeShake = Math.max(cascadeShake, 0.5);
  playDeath();
  // A burst of shards on death.
  spawnBurst(PLAYER_X, player.y, 28, COLORS.dropletGlow, 380);
  const d = Math.floor(distance);
  lastRunDist = d;
  if (d > best) {
    best = d;
    saveBest(best);
    bestFlashT = 1.2;
    newBest = true;
  } else {
    newBest = false;
  }
  // Completing a run retires the first-run onboarding ease-in.
  if (isFirstRun) markFirstRunDone();
}

// ----------------------------------------------------------------------------
// Particles — contact splashes and shatter shards.
// ----------------------------------------------------------------------------
function spawnSplash(x, y, dirY, intensity) {
  const n = 3 + Math.floor(intensity * 6);
  for (let i = 0; i < n; i++) {
    const a = (-0.5 + Math.random()) * 1.6;
    const sp = 60 + Math.random() * 180 * (0.4 + intensity);
    particles.push({
      x, y,
      vx: Math.sin(a) * sp - 40,
      vy: dirY * (40 + Math.cos(a) * sp),
      life: 0.3 + Math.random() * 0.3,
      age: 0,
      r: 1.5 + Math.random() * 2.5,
      color: COLORS.trail,
    });
  }
}

function spawnBurst(x, y, n, color, spread) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * TAU;
    const sp = spread * (0.3 + Math.random() * 0.7);
    particles.push({
      x, y,
      vx: Math.cos(a) * sp - 40,
      vy: Math.sin(a) * sp,
      life: 0.5 + Math.random() * 0.6,
      age: 0,
      r: 1.5 + Math.random() * 3,
      color,
    });
  }
}

function updateParticles(dt, scroll) {
  for (const p of particles) {
    p.age += dt;
    p.x += (p.vx - scroll) * dt;
    p.y += p.vy * dt;
    p.vy += 800 * dt; // gentle gravity on shards
    p.vx *= 0.98;
  }
  particles = particles.filter((p) => p.age < p.life && p.x > -30);
}

// ----------------------------------------------------------------------------
// Twist — beat clock + crystal collapse system.
// ----------------------------------------------------------------------------

// Convert a world-x to its on-screen x (the world scrolls left under PLAYER_X).
function worldToScreen(wx) {
  return wx - worldX;
}

// Place crystals ahead of the player as the world scrolls in. Density rises
// gently with distance. Each crystal sits just inside a wall on one side.
function spawnCrystalsAhead() {
  const horizon = worldX + VW + 400;
  while (nextCrystalX < horizon) {
    const side = Math.random() < 0.5 ? 1 : -1; // floor or ceiling
    crystals.push({
      x: nextCrystalX,
      side,
      state: "idle",
      triggerBeat: 0,
      hum: 0,        // 0..1 visual swell
      facets: 3 + Math.floor(Math.random() * 3),
      seed: Math.random() * TAU,
      w: 30 + Math.random() * 18, // half-width of the wall segment it owns
    });
    // Spacing tightens with distance — denser, more relentless collapse the
    // further you go (LEVEL-02). Floored so it never becomes literally impassable.
    const gap = Math.max(200, 560 - distance * 0.32) * (0.7 + Math.random() * 0.6);
    nextCrystalX += gap;
  }
}

// ----------------------------------------------------------------------------
// Soda cans — collectibles (Coke Zero) and hazards (Diet Coke).
// ----------------------------------------------------------------------------

// Place cans ahead of the camera, floating in the open corridor interior (not
// on the walls, so they read as pickups distinct from the surfaces/crystals).
function spawnCansAhead() {
  const horizon = worldX + VW + 400;
  while (nextCanX < horizon) {
    const cy = ceilingY(nextCanX);
    const fy = floorY(nextCanX);
    const pad = CAN_H * 0.75 + 10;         // keep the whole can inside the walls
    const lo = cy + pad, hi = fy - pad;
    const y = hi > lo ? lo + Math.random() * (hi - lo) : (cy + fy) / 2;
    cans.push({
      x: nextCanX,
      y,
      bad: Math.random() < CAN_BAD_CHANCE, // silver Diet Coke vs black Coke Zero
      taken: false,
      phase: Math.random() * TAU,          // per-can bob phase
    });
    nextCanX += CAN_MIN_GAP + Math.random() * (CAN_MAX_GAP - CAN_MIN_GAP);
  }
}

// Check the droplet against every live can. Good = bonus + boost; bad = point
// loss + a non-fatal knockback off the current surface. Culls behind the camera.
function updateCans(dt, scroll) {
  const pwx = dropletWorldX();
  for (const c of cans) {
    if (c.taken) continue;
    if (Math.abs(c.x - pwx) < RADIUS + CAN_W * 0.55 &&
        Math.abs(c.y - player.y) < RADIUS + CAN_H * 0.55) {
      c.taken = true;
      if (c.bad) {
        // Diet Coke (silver): lose points and get bumped. The run continues.
        distance = Math.max(0, distance - CAN_BAD_POINTS);
        player.onSurface = false;
        player.vy = -player.gravitySign * 780; // knock away from the near wall
        player.squash = 1;
        hitFlashT = 0.22;
        addPop("-" + CAN_BAD_POINTS, COLORS.danger);
        spawnBurst(PLAYER_X, player.y, 14, COLORS.dietSilver, 260);
        playTick(true);
      } else {
        // Coke Zero (black): bonus points + a short 2x-score boost.
        distance += CAN_GOOD_POINTS;
        cansCollected += 1;
        boostT = BOOST_DUR;
        addPop("+" + CAN_GOOD_POINTS, COLORS.agateRimTeal);
        spawnBurst(PLAYER_X, player.y, 16, COLORS.dropletGlow, 300);
        playDrip(1);
      }
    }
  }
  cans = cans.filter((c) => !c.taken && c.x > worldX - 120);
  if (hitFlashT > 0) hitFlashT = Math.max(0, hitFlashT - dt);
}

// Floating score popup that rises from the droplet and fades (scrolls with world).
function addPop(text, color) {
  pops.push({ x: PLAYER_X, y: player.y - RADIUS - 8, vy: -70, age: 0, life: 0.8, text, color });
}
function updatePops(dt, scroll) {
  for (const p of pops) {
    p.age += dt;
    p.y += p.vy * dt;
    p.x -= scroll * dt;
  }
  pops = pops.filter((p) => p.age < p.life && p.x > -60);
}

// Advance the musical clock; fire ticks and resolve scheduled shatters.
function updateBeat(dt) {
  beatTime += dt;
  beatPulse = Math.max(0, beatPulse - dt * 3.5);
  while (beatTime >= BEAT_DUR) {
    beatTime -= BEAT_DUR;
    beatCount++;
    beatPulse = 1;
    playTick(beatCount % 4 === 0);
    // Resolve any crystals due to shatter on THIS beat.
    for (const c of crystals) {
      if (c.state === "humming" && beatCount >= c.shatterBeat) {
        shatterCrystal(c);
      }
    }
  }
}

function shatterCrystal(c) {
  c.state = "shattered";
  // Open a lethal gap on this crystal's side, anchored in world-x.
  gaps.push({ x0: c.x - c.w, x1: c.x + c.w, side: c.side, age: 0 });
  playShatter();
  beatPulse = 1;
  // A shatter near the droplet rattles the screen; many at once cascade-stack.
  const near = Math.abs(c.x - dropletWorldX()) < 360 ? 1 : 0.4;
  cascadeShake = Math.min(0.6, cascadeShake + 0.16 * near);
  const sx = worldToScreen(c.x);
  const sy = c.side > 0 ? floorY(c.x) : ceilingY(c.x);
  spawnBurst(sx, sy, 18, COLORS.crystalShard, 320);
}

// Trigger crystals as they scroll on-screen, and schedule each shatter for the
// last beat before the droplet reaches it (capped at SHATTER_BEATS), so the gap
// opens in the droplet's path rather than behind it. The world only scrolls
// forward, so a gap behind the droplet could never catch it.
function updateCrystalTriggers(scroll) {
  const wx = dropletWorldX();
  for (const c of crystals) {
    if (c.state !== "idle") {
      if (c.state === "humming") {
        // hum swells toward shatter
        const beatsIn = (beatCount - c.triggerBeat) + (beatTime / BEAT_DUR);
        c.hum = Math.min(1, beatsIn / (c.shatterBeat - c.triggerBeat));
      }
      continue;
    }
    if (worldToScreen(c.x) < VW) {
      // Seconds until the droplet reaches the gap's leading edge, then count
      // the beat boundaries that fall inside that window.
      const arrive = (c.x - c.w - wx) / Math.max(1, scroll);
      const toNext = BEAT_DUR - beatTime;
      const beats = arrive >= toNext ? 1 + Math.floor((arrive - toNext) / BEAT_DUR) : 0;
      c.state = "humming";
      c.triggerBeat = beatCount;
      c.shatterBeat = beatCount + Math.max(1, Math.min(SHATTER_BEATS, beats));
      c.hum = 0;
      playHum();
    }
  }
  // Cull crystals far behind.
  crystals = crystals.filter((c) => c.x > worldX - 120);
}

function updateGaps(dt) {
  for (const g of gaps) g.age += dt;
  gaps = gaps.filter((g) => g.x1 > worldX - 120);
}

// Is the droplet currently over an open gap on the side it's resting/landing on?
// A gap means the wall is GONE there — the droplet has nothing to land on and
// falls through into the void.
function gapAt(wx, side) {
  for (const g of gaps) {
    if (g.side === side && wx >= g.x0 && wx <= g.x1) return g;
  }
  return null;
}

// ----------------------------------------------------------------------------
// Simulation
// ----------------------------------------------------------------------------

// The world-space x of the droplet (it stays at PLAYER_X on screen).
function dropletWorldX() {
  return worldX + PLAYER_X;
}

// Resolve the droplet against the nearest relevant surface for its current
// gravity, doing the rest/bank logic. Returns true if a fatal hit happened.
function collideAndResolve(prevY) {
  const wx = dropletWorldX();
  const cy = ceilingY(wx) + RADIUS; // lowest the centre can go near ceiling
  const fy = floorY(wx) - RADIUS;   // highest the centre can go near floor

  // If the corridor has pinched so tight the droplet cannot fit -> fatal.
  if (fy <= cy) {
    return true;
  }

  // Back inside the corridor: no longer down in a collapsed gap.
  if (player.y > cy && player.y < fy) player.sunk = 0;
  // Dropped into a collapsed gap: the void stays open only while the droplet is
  // still over it. Scrolling into the gap's far edge means it's caught.
  if (player.sunk) {
    if (!gapAt(wx, player.sunk)) return true;
    player.onSurface = false;
    return player.y > VH + RADIUS * 2 || player.y < -RADIUS * 2;
  }

  // If the landing surface has shattered away (a gap), the droplet falls
  // straight through into the void: no land, and once it clears the corridor
  // it's a fatal fall.
  const landSide = player.gravitySign > 0 ? +1 : -1;
  const landGap = gapAt(wx, landSide);

  if (player.gravitySign > 0) {
    // Pulled down: the floor is the landing surface; the ceiling is a hazard.
    if (landGap && player.y >= fy) {
      // Floor is gone here — keep falling; die once past the bottom edge.
      player.onSurface = false;
      if (player.y > fy + RADIUS * 0.5) player.sunk = landSide;
      if (player.y > VH + RADIUS * 2) return true;
    } else if (player.y >= fy) {
      // Reached / passed the floor surface.
      landOrBank(floorY, wx, fy, +1);
    } else if (player.y <= cy) {
      // Slammed UP into the ceiling against gravity (head-on) -> banking too,
      // but if nearly flat ceiling and fast, treat as hard contact (bank).
      bankOff(ceilingY, wx, cy, -1);
    }
  } else {
    // Pulled up: the ceiling is the landing surface; the floor is a hazard.
    if (landGap && player.y <= cy) {
      // Ceiling is gone here — keep rising; die once past the top edge.
      player.onSurface = false;
      if (player.y < cy - RADIUS * 0.5) player.sunk = landSide;
      if (player.y < -RADIUS * 2) return true;
    } else if (player.y <= cy) {
      landOrBank(ceilingY, wx, cy, -1);
    } else if (player.y >= fy) {
      bankOff(floorY, wx, fy, +1);
    }
  }
  return false;
}

// Land flat or bank off a curve, depending on the local surface slope.
// surfDir: +1 if this is a floor (solid below), -1 if a ceiling (solid above).
function landOrBank(fn, wx, surfY, surfDir) {
  const s = slope(fn, wx); // dY/dX of the surface (screen y grows downward)
  const impact = Math.min(1, Math.abs(player.vy) / 1400);
  player.y = surfY;
  player.squash = Math.min(1, Math.abs(player.vy) / 900);
  onContact(surfY, -surfDir, impact);

  if (Math.abs(s) < 0.18) {
    // Flat enough: rest / roll along the surface until the next flip.
    player.vy = 0;
    player.onSurface = true;
  } else {
    // Curved: BANK. The surface tilts, so the incoming vertical motion is
    // redirected along the tangent — convert it into a launch that preserves
    // (and slightly boosts) forward momentum instead of dead-stopping.
    bankImpulse(s, surfDir);
    player.onSurface = false;
  }
}

// A pure bank: droplet hit a curved surface that isn't its rest surface.
function bankOff(fn, wx, surfY, surfDir) {
  const s = slope(fn, wx);
  const impact = Math.min(1, Math.abs(player.vy) / 1400);
  player.y = surfY;
  player.squash = Math.min(1, Math.abs(player.vy) / 900);
  onContact(surfY, -surfDir, impact);
  bankImpulse(s, surfDir);
  player.onSurface = false;
}

// Fired on every surface contact: a generative cave-drip tone + a splash, but
// rate-limited so a resting droplet skimming a curve doesn't machine-gun.
let lastContactT = -1;
function onContact(surfY, awayDirY, impact) {
  const now = performance.now();
  if (now - lastContactT < 70) return;
  lastContactT = now;
  playDrip(impact);
  spawnSplash(PLAYER_X, surfY, awayDirY, impact);
}

// Convert contact on a sloped surface into a deflected launch velocity.
// The steeper the slope under the forward motion, the more vertical kick the
// bank imparts; forward speed (worldX scroll) is preserved throughout.
function bankImpulse(s, surfDir) {
  // Forward speed contributes tangential energy: a slope of magnitude |s|
  // converts forward speed into a vertical component along the surface.
  const tangential = -s * speed * BANK_GAIN;
  // surfDir pushes the droplet away from the solid side.
  let newVy = tangential;
  // Ensure the bank pushes off the surface (away from solid), never into it.
  if (surfDir > 0 && newVy > 0) newVy = -Math.abs(newVy); // floor: launch up
  if (surfDir < 0 && newVy < 0) newVy = Math.abs(newVy);  // ceiling: launch down
  player.vy = Math.max(-MAX_VY, Math.min(MAX_VY, newVy));
}

function update(dt) {
  // Timers that animate even when not actively playing.
  titleHintT += dt;
  if (bestFlashT > 0) bestFlashT = Math.max(0, bestFlashT - dt);
  if (cascadeShake > 0) cascadeShake = Math.max(0, cascadeShake - dt * 1.4);

  if (state !== PLAYING) {
    if (flashT > 0) flashT = Math.max(0, flashT - dt);
    return;
  }

  if (hintT > 0 && !hasFlipped) hintT = Math.max(0, hintT - dt);

  // Forward scroll. The very first run eases in: speed ramps up from a calmer
  // pace over the first couple of seconds so the parabolic verb is learnable
  // (ONBOARD-02). Debug boost multiplies for tunneling tests.
  let easeMul = 1;
  if (isFirstRun) {
    // 0.6x at t=0 -> 1.0x by ~2.5s of travel.
    const t = distance / 100; // ~seconds of travel
    easeMul = Math.min(1, 0.62 + t * 0.16);
  }
  const curSpeed = (boost ? speed * 2.6 : speed) * easeMul;
  worldX += curSpeed * dt;
  if (boostT > 0) boostT = Math.max(0, boostT - dt);
  // Distance accrues at 2x while a Coke Zero boost is active (SODA-01).
  distance += (curSpeed * dt) / 10 * (boostT > 0 ? BOOST_MULT : 1); // metres-ish

  // Keep the stitched corridor plan built out ahead of the camera (LEVEL-01).
  ensureCorridor(worldX + VW + 800);

  // Distance milestones punch a soft amber flash + tick every 250m (JUICE).
  const mil = Math.floor(distance / 250);
  if (mil > lastMilestone) {
    lastMilestone = mil;
    beatPulse = 1;
    flashT = Math.max(flashT, 0.12);
    playTick(true);
  }
  // First moment you pass your old best mid-run: a celebratory cue.
  if (!newBestCelebrated && best > 0 && distance > best) {
    newBestCelebrated = true;
    bestFlashT = 1.0;
    playHum();
  }

  // Advance the twist systems: musical clock, crystal spawn/trigger, collapse.
  updateBeat(dt);
  spawnCrystalsAhead();
  spawnCansAhead();
  updateCrystalTriggers(curSpeed);
  updateGaps(dt);

  // Swept / sub-stepped vertical integration to defeat tunneling. Sub-step
  // count scales with how far we'd move this frame.
  const moveY = Math.abs(player.vy) * dt + 1;
  const steps = Math.max(1, Math.min(16, Math.ceil(moveY / (RADIUS * 0.6))));
  const sdt = dt / steps;

  let fatal = false;
  for (let i = 0; i < steps; i++) {
    if (!player.onSurface) {
      player.vy += player.gravitySign * GRAVITY * sdt;
      player.vy = Math.max(-MAX_VY, Math.min(MAX_VY, player.vy));
    }
    const prevY = player.y;
    if (!player.onSurface) player.y += player.vy * sdt;

    // Keep the resting droplet glued to a moving (scrolling) curved surface —
    // UNLESS that surface has shattered out from under it, in which case it
    // detaches and begins to fall through the new void.
    if (player.onSurface) {
      const wx = dropletWorldX();
      const restSide = player.gravitySign > 0 ? +1 : -1;
      if (gapAt(wx, restSide)) {
        player.onSurface = false; // floor/ceiling gone — start falling/rising
      } else {
        const surfY = player.gravitySign > 0
          ? floorY(wx) - RADIUS
          : ceilingY(wx) + RADIUS;
        player.y = surfY;
      }
    }

    fatal = collideAndResolve(prevY);
    if (fatal) break;
  }

  // Ease squash back to round.
  player.squash = Math.max(0, player.squash - dt * 4);

  // Soda cans: collect / bump, then advance the score popups.
  updateCans(dt, curSpeed);
  updatePops(dt, curSpeed);

  // Trail sampling.
  trail.push({ x: PLAYER_X, y: player.y, age: 0 });
  for (const t of trail) {
    t.x -= curSpeed * dt; // scroll trail left with the world
    t.age += dt;
  }
  trail = trail.filter((t) => t.x > -40 && t.age < 0.8);

  // Particles scroll with the world.
  updateParticles(dt, curSpeed);

  // Difficulty curve (CORE-05 / LEVEL-02): forward speed climbs with distance on
  // a softening curve so arcs flatten and momentum management bites harder the
  // deeper you go, but it never runs away into the unplayable.
  speed = BASE_SPEED + Math.min(360, Math.sqrt(distance) * 11);

  if (fatal) {
    die();
  }
}

// ----------------------------------------------------------------------------
// Rendering
// ----------------------------------------------------------------------------
// Trace the ceiling-rock silhouette path (top of canvas down onto the ceiling
// surface), offset inward by `inset` logical px (positive = thicker rock, the
// surface pushed further into the cavity). Used to draw nested bands.
function ceilingPath(inset, step) {
  ctx.beginPath();
  ctx.moveTo(-step, -50);
  for (let sx = -step; sx <= VW + step; sx += step) {
    ctx.lineTo(sx, ceilingY(worldX + sx) + inset);
  }
  ctx.lineTo(VW + step, -50);
  ctx.closePath();
}
function floorPath(inset, step) {
  ctx.beginPath();
  ctx.moveTo(-step, VH + 50);
  for (let sx = -step; sx <= VW + step; sx += step) {
    ctx.lineTo(sx, floorY(worldX + sx) - inset);
  }
  ctx.lineTo(VW + step, VH + 50);
  ctx.closePath();
}

function drawCorridor() {
  const step = 6;
  const bands = COLORS.bands;
  const n = bands.length;
  // Each band is a slab of rock parallel to the surface. We draw from the
  // outermost (deepest in the rock) toward the inner cavity by stacking
  // surface silhouettes offset progressively further into the cavity, so the
  // visible inner-most slivers form the bright agate veins near the surface.
  // BAND_DEPTH = total rock thickness shown as bands before the dark interior.
  const BAND_DEPTH = 150;
  const bw = BAND_DEPTH / n;

  // Concentric bands. Band 0 (deepest rock, dimmest) is the thickest slab and
  // is drawn FIRST with the largest inset (its surface pushed furthest into the
  // cavity). Each successive band is brighter and drawn with a SMALLER inset,
  // painting a slab on top that leaves the previous band visible only as a thin
  // sliver further from the surface — yielding nested concentric mineral veins,
  // brightest right at the inner agate rim.
  for (let i = 0; i < n; i++) {
    const inset = (n - 1 - i) * bw; // band 0 -> largest inset; last band -> 0
    ctx.fillStyle = bands[i];
    ceilingPath(inset, step); ctx.fill();
    floorPath(inset, step); ctx.fill();
  }

  // Subtle vertical fibrous striations in the rock (agate grain), parallax-ish.
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = COLORS.amberSoft;
  ctx.lineWidth = 1;
  const grainPhase = (worldX * 0.5) % 40;
  for (let gx = -grainPhase; gx < VW; gx += 40) {
    ctx.beginPath();
    ctx.moveTo(gx, ceilingY(worldX + gx) - 6);
    ctx.lineTo(gx, ceilingY(worldX + gx) - 60);
    ctx.moveTo(gx, floorY(worldX + gx) + 6);
    ctx.lineTo(gx, floorY(worldX + gx) + 60);
    ctx.stroke();
  }
  ctx.restore();

  // Glowing crystalline rim on the inner surfaces — the backlit agate edge.
  // The pulse brightens it on each beat so the rhythm reads in the walls.
  const rimGlow = 0.5 + 0.5 * beatPulse;
  ctx.save();
  ctx.lineCap = "round";
  // Outer soft teal halo.
  ctx.strokeStyle = COLORS.agateRimTeal;
  ctx.globalAlpha = 0.22 + 0.18 * beatPulse;
  ctx.lineWidth = 6;
  strokeSurface(ceilingY, step);
  strokeSurface(floorY, step);
  // Bright amber inner rim line.
  ctx.strokeStyle = COLORS.agateRim;
  ctx.globalAlpha = 0.5 + 0.4 * beatPulse;
  ctx.lineWidth = 1.6;
  strokeSurface(ceilingY, step);
  strokeSurface(floorY, step);
  ctx.restore();

  // Render the collapsed gaps as voids cut into the wall.
  drawGaps(step);
  // Render embedded crystals.
  drawCrystals();
}

function strokeSurface(fn, step) {
  ctx.beginPath();
  for (let sx = -step; sx <= VW + step; sx += step) {
    const y = fn(worldX + sx);
    if (sx <= -step) ctx.moveTo(sx, y); else ctx.lineTo(sx, y);
  }
  ctx.stroke();
}

// Paint the void where a wall has shattered: cut out to black and draw jagged
// broken edges so the gap reads as a real lethal hole, not just dark wall.
function drawGaps(step) {
  for (const g of gaps) {
    const sx0 = worldToScreen(g.x0);
    const sx1 = worldToScreen(g.x1);
    if (sx1 < -20 || sx0 > VW + 20) continue;
    const fn = g.side > 0 ? floorY : ceilingY;
    ctx.fillStyle = COLORS.collapse;
    ctx.beginPath();
    if (g.side > 0) {
      // Floor gap: open downward to the canvas bottom.
      ctx.moveTo(sx0, fn(g.x0));
      for (let x = g.x0; x <= g.x1; x += 8) ctx.lineTo(worldToScreen(x), fn(x));
      ctx.lineTo(sx1, VH + 40);
      ctx.lineTo(sx0, VH + 40);
    } else {
      ctx.moveTo(sx0, fn(g.x0));
      for (let x = g.x0; x <= g.x1; x += 8) ctx.lineTo(worldToScreen(x), fn(x));
      ctx.lineTo(sx1, -40);
      ctx.lineTo(sx0, -40);
    }
    ctx.closePath();
    ctx.fill();
    // Jagged broken rim, freshly shattered = brighter.
    const fresh = Math.max(0, 1 - g.age / 1.2);
    ctx.strokeStyle = COLORS.crystalShard;
    ctx.globalAlpha = 0.3 + 0.5 * fresh;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    let toggle = 0;
    for (let x = g.x0; x <= g.x1; x += 7) {
      const yy = fn(x) + (g.side > 0 ? 1 : -1) * (toggle ? 6 : 0);
      const px = worldToScreen(x);
      if (x === g.x0) ctx.moveTo(px, yy); else ctx.lineTo(px, yy);
      toggle ^= 1;
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

// Embedded crystals: faceted shards jutting from the wall. Idle = dim teal,
// humming = swelling glow that brightens toward shatter, hot on the final beat.
function drawCrystals() {
  for (const c of crystals) {
    if (c.state === "shattered") continue;
    const sx = worldToScreen(c.x);
    if (sx < -40 || sx > VW + 40) continue;
    const surf = c.side > 0 ? floorY(c.x) : ceilingY(c.x);
    const dir = c.side > 0 ? -1 : 1; // crystals point into the cavity
    let glow, len, alpha;
    if (c.state === "idle") {
      glow = COLORS.crystalIdle; len = 14; alpha = 0.7;
    } else {
      // humming: interpolate brightness with hum, flare near shatter.
      const hot = c.hum > 0.8;
      glow = hot ? COLORS.crystalHot : COLORS.crystalHum;
      len = 16 + c.hum * 12 + (hot ? beatPulse * 6 : 0);
      alpha = 0.75 + c.hum * 0.25;
    }
    // Halo.
    if (c.state !== "idle") {
      const g = ctx.createRadialGradient(sx, surf, 2, sx, surf, 36 + c.hum * 30);
      g.addColorStop(0, glow);
      g.addColorStop(1, "rgba(125,240,230,0)");
      ctx.globalAlpha = (0.18 + c.hum * 0.4) * (0.6 + 0.4 * beatPulse);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(sx, surf, 36 + c.hum * 30, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    // Faceted crystal cluster.
    ctx.save();
    ctx.translate(sx, surf);
    ctx.globalAlpha = alpha;
    for (let f = 0; f < c.facets; f++) {
      const a = c.seed + (f - c.facets / 2) * 0.5;
      const fl = len * (0.6 + 0.5 * Math.abs(Math.cos(a)));
      const baseW = 4 + (f % 2) * 2;
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.moveTo(-baseW, 0);
      ctx.lineTo(baseW, 0);
      ctx.lineTo(Math.sin(a) * 4, dir * fl);
      ctx.closePath();
      ctx.fill();
    }
    // Bright tip highlight.
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = c.state === "idle" ? COLORS.agateRimTeal : COLORS.crystalShard;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, dir * len);
    ctx.stroke();
    ctx.restore();
    ctx.globalAlpha = 1;
  }
}

// Trace a rounded-rectangle can body path (no fill/stroke).
function canBodyPath(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Draw one aluminium soda can centred at (sx, y). bad => silver Diet Coke,
// good => near-black Coke Zero. A colored glow telegraphs good (teal) / bad (red).
function drawCan(sx, y, bad) {
  const w = CAN_W, h = CAN_H;
  ctx.save();
  ctx.translate(sx, y);
  // Telegraphing halo so intent reads at a glance.
  const glow = ctx.createRadialGradient(0, 0, 2, 0, 0, w * 1.7);
  glow.addColorStop(0, bad ? "rgba(255,111,111,0.45)" : "rgba(125,240,230,0.55)");
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, w * 1.7, 0, TAU);
  ctx.fill();
  // Body.
  canBodyPath(-w / 2, -h / 2, w, h, 4);
  ctx.fillStyle = bad ? COLORS.dietSilver : COLORS.cokeBlack;
  ctx.fill();
  // Cylinder shading — a vertical specular band down the middle.
  const shade = ctx.createLinearGradient(-w / 2, 0, w / 2, 0);
  shade.addColorStop(0, "rgba(0,0,0,0.38)");
  shade.addColorStop(0.4, "rgba(255,255,255,0.22)");
  shade.addColorStop(0.52, "rgba(255,255,255,0.32)");
  shade.addColorStop(0.7, "rgba(255,255,255,0.08)");
  shade.addColorStop(1, "rgba(0,0,0,0.42)");
  canBodyPath(-w / 2, -h / 2, w, h, 4);
  ctx.fillStyle = shade;
  ctx.fill();
  // Brand band.
  ctx.fillStyle = bad ? COLORS.dietRed : COLORS.cokeRed;
  ctx.fillRect(-w / 2, -5, w, 9);
  // Aluminium rims top + bottom.
  ctx.strokeStyle = "rgba(255,255,255,0.55)";
  ctx.lineWidth = 1.4;
  ctx.beginPath(); ctx.ellipse(0, -h / 2, w / 2, 3, 0, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(0, h / 2, w / 2, 3, 0, 0, TAU); ctx.stroke();
  ctx.restore();
}

function drawCans() {
  for (const c of cans) {
    const sx = worldToScreen(c.x);
    if (sx < -40 || sx > VW + 40) continue;
    const bob = Math.sin(worldX * 0.02 + c.phase) * 3; // gentle float
    drawCan(sx, c.y + bob, c.bad);
  }
}

function drawPops() {
  ctx.textAlign = "center";
  ctx.font = "800 20px system-ui, sans-serif";
  for (const p of pops) {
    ctx.globalAlpha = Math.max(0, 1 - p.age / p.life);
    ctx.fillStyle = p.color;
    ctx.fillText(p.text, p.x, p.y);
  }
  ctx.globalAlpha = 1;
}

function drawParticles() {
  for (const p of particles) {
    const a = Math.max(0, 1 - p.age / p.life);
    ctx.globalAlpha = a;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * (0.5 + a * 0.5), 0, TAU);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawTrail() {
  // A liquid-metal smear: overlapping additive blobs that fatten toward the
  // droplet and thin/fade behind it, tinted teal-to-white.
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  for (const t of trail) {
    const a = Math.max(0, 1 - t.age / 0.8);
    ctx.globalAlpha = a * 0.45;
    const r = RADIUS * (0.35 + a * 0.7);
    const g = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, r);
    g.addColorStop(0, COLORS.trail);
    g.addColorStop(1, "rgba(125,240,230,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(t.x, t.y, r, 0, TAU);
    ctx.fill();
  }
  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawDroplet() {
  // Deformation: stretch along the velocity (vertical) when moving fast, then
  // squash flat on contact. STYLE-04.
  const sq = player.squash;
  const speedStretch = Math.min(0.45, Math.abs(player.vy) / 2600);
  // Vertical motion stretches vertically; contact squash flattens vertically.
  const sy = (1 + speedStretch) * (1 - sq * 0.5);
  const sx = (1 - speedStretch * 0.6) * (1 + sq * 0.5);

  // Outer luminous halo — the droplet is the brightest thing on screen.
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  const halo = ctx.createRadialGradient(PLAYER_X, player.y, 1, PLAYER_X, player.y, RADIUS * 3.2);
  halo.addColorStop(0, COLORS.dropletGlow);
  halo.addColorStop(0.5, "rgba(125,240,230,0.25)");
  halo.addColorStop(1, "rgba(125,240,230,0)");
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(PLAYER_X, player.y, RADIUS * 3.2, 0, TAU);
  ctx.fill();
  ctx.restore();

  // Mercury core: a metallic sphere with a bright specular highlight.
  ctx.save();
  ctx.translate(PLAYER_X, player.y);
  ctx.scale(sx, sy);
  const core = ctx.createRadialGradient(-RADIUS * 0.35, -RADIUS * 0.4, 1, 0, 0, RADIUS * 1.15);
  core.addColorStop(0, COLORS.dropletHi);
  core.addColorStop(0.35, COLORS.droplet);
  core.addColorStop(0.8, COLORS.dropletGlow);
  core.addColorStop(1, "rgba(125,240,230,0.6)");
  ctx.fillStyle = core;
  ctx.beginPath();
  ctx.arc(0, 0, RADIUS, 0, TAU);
  ctx.fill();
  // Sharp specular glint.
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.beginPath();
  ctx.arc(-RADIUS * 0.32, -RADIUS * 0.38, RADIUS * 0.28, 0, TAU);
  ctx.fill();
  ctx.restore();
}

function drawDebugTrajectory() {
  if (!debug || state !== PLAYING) return;
  // Forward-simulate the current state and plot the predicted arc as dots.
  let py = player.y;
  let pvy = player.vy;
  let pOn = player.onSurface;
  let pwx = dropletWorldX();
  const sim = boost ? speed * 2.6 : speed;
  const stepDt = 1 / 60;
  ctx.fillStyle = COLORS.debug;
  for (let i = 0; i < 110; i++) {
    pwx += sim * stepDt;
    if (!pOn) {
      pvy += player.gravitySign * GRAVITY * stepDt;
      py += pvy * stepDt;
    }
    const cy = ceilingY(pwx) + RADIUS;
    const fy = floorY(pwx) - RADIUS;
    if (py >= fy) { py = fy; if (player.gravitySign > 0) break; pvy = 0; }
    if (py <= cy) { py = cy; if (player.gravitySign < 0) break; pvy = 0; }
    const screenX = PLAYER_X + (pwx - dropletWorldX());
    if (screenX > VW) break;
    if (i % 3 === 0) {
      ctx.globalAlpha = 0.8 - i / 160;
      ctx.beginPath();
      ctx.arc(screenX, py, 2.2, 0, TAU);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

function drawHUD() {
  ctx.fillStyle = COLORS.text;
  ctx.font = "700 30px system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(Math.floor(distance) + "m", 24, 44);
  ctx.font = "600 13px system-ui, sans-serif";
  ctx.fillStyle = COLORS.muted;
  ctx.fillText("BEST " + best + "m", 24, 64);
  if (muted) {
    ctx.fillStyle = COLORS.danger;
    ctx.fillText("MUTED (M)", 24, 82);
  }

  // Coke Zero tally + active boost (SODA-01), to the right of the score.
  ctx.textAlign = "left";
  ctx.font = "700 15px system-ui, sans-serif";
  ctx.fillStyle = COLORS.cokeRed;
  ctx.fillText("CANS " + cansCollected, 132, 44);
  if (boostT > 0) {
    const p = 0.6 + 0.4 * Math.sin(titleHintT * 10);
    ctx.font = "800 15px system-ui, sans-serif";
    ctx.fillStyle = "rgba(125,240,230," + p.toFixed(2) + ")";
    ctx.fillText("2× BOOST", 132, 64);
  }

  if (debug) {
    ctx.textAlign = "right";
    ctx.fillStyle = COLORS.debug;
    ctx.font = "600 13px system-ui, sans-serif";
    const sp = (boost ? speed * 2.6 : speed).toFixed(0);
    ctx.fillText(
      "DEBUG  speed " + sp + (boost ? " (BOOST)" : "") +
      "  gravity " + (player.gravitySign > 0 ? "DOWN" : "UP") +
      "  vy " + player.vy.toFixed(0),
      VW - 24, 30
    );
    ctx.fillText("D toggle overlay  ·  B speed boost", VW - 24, 50);
  }
}

function centerText(lines) {
  ctx.textAlign = "center";
  let y = VH * 0.30;
  for (const ln of lines) {
    ctx.font = ln.font;
    ctx.fillStyle = ln.color;
    ctx.fillText(ln.text, VW / 2, y);
    y += ln.gap;
  }
}

function drawTitle() {
  // Pulse the start prompt so it reads as the live call-to-action.
  const pulse = 0.7 + 0.3 * Math.sin(titleHintT * 3);
  const startCol = "rgba(125,240,230," + pulse.toFixed(2) + ")";
  const lines = [
    { text: "SWITCHBACK", font: "800 64px system-ui, sans-serif", color: COLORS.amberSoft, gap: 48 },
    { text: "ONE button flips gravity. Read the arc, bank the curves.", font: "500 19px system-ui, sans-serif", color: COLORS.muted, gap: 28 },
    { text: "Crystals shatter on the beat — outflip the collapse.", font: "500 17px system-ui, sans-serif", color: COLORS.agateRimTeal, gap: 28 },
    { text: "Grab BLACK Coke Zero cans (+boost) · dodge SILVER Diet Coke.", font: "500 16px system-ui, sans-serif", color: COLORS.amberSoft, gap: 60 },
    { text: "PRESS SPACE  /  CLICK  /  TAP", font: "800 28px system-ui, sans-serif", color: startCol, gap: 32 },
    { text: "to flip — press now to start", font: "600 16px system-ui, sans-serif", color: COLORS.muted, gap: 52 },
  ];
  if (best > 0) {
    lines.push({ text: "BEST  " + best + " m", font: "700 16px system-ui, sans-serif", color: COLORS.amberSoft, gap: 30 });
  }
  lines.push({ text: "M mute    D debug arc    B speed boost", font: "500 13px system-ui, sans-serif", color: COLORS.muted, gap: 0 });
  centerText(lines);
}

function drawGameOver() {
  const lines = [
    { text: "WIPEOUT", font: "800 56px system-ui, sans-serif", color: COLORS.danger, gap: 54 },
    { text: Math.floor(distance) + " m", font: "700 44px system-ui, sans-serif", color: COLORS.text, gap: 40 },
  ];
  if (newBest) {
    const pulse = 0.6 + 0.4 * Math.sin(titleHintT * 6);
    lines.push({ text: "NEW BEST!", font: "800 24px system-ui, sans-serif",
      color: "rgba(255,208,137," + pulse.toFixed(2) + ")", gap: 58 });
  } else {
    lines.push({ text: "Best  " + best + " m", font: "600 18px system-ui, sans-serif", color: COLORS.muted, gap: 58 });
  }
  lines.push({ text: "Press SPACE / CLICK to try again", font: "700 20px system-ui, sans-serif", color: COLORS.surface, gap: 0 });
  centerText(lines);
}

function drawBackdrop() {
  // Deep void plus a teal backlight bleeding from the corridor's centre line,
  // as if the agate is lit from within behind the cavity.
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, VW, VH);
  const g = ctx.createRadialGradient(VW * 0.45, VH * 0.5, 20, VW * 0.45, VH * 0.5, VW * 0.7);
  g.addColorStop(0, COLORS.bgGlow);
  g.addColorStop(1, "rgba(5,4,10,0)");
  ctx.globalAlpha = 0.6 + 0.15 * beatPulse;
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, VW, VH);
  ctx.globalAlpha = 1;
}

// Beat indicator: a row of pips that pulse with the musical clock so the
// collapse rhythm is legible. The current beat-in-bar lights up.
function drawBeatBar() {
  const cx = VW - 24;
  const y = 28;
  const r = 5;
  const inBar = beatCount % 4;
  const frac = beatTime / BEAT_DUR;
  ctx.textAlign = "right";
  for (let i = 0; i < 4; i++) {
    const x = cx - (3 - i) * 18;
    const active = i === inBar;
    ctx.beginPath();
    ctx.arc(x, y, active ? r + 2 * (1 - frac) : r, 0, TAU);
    ctx.fillStyle = active ? COLORS.beat : COLORS.muted;
    ctx.globalAlpha = active ? 1 : 0.4;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = COLORS.muted;
  ctx.font = "600 11px system-ui, sans-serif";
  ctx.fillText("OUTFLIP THE SHATTER", cx, y + 22);
}

// In-world onboarding nudge during the first run: a pulsing "TAP TO FLIP" label
// floating above the droplet, plus a dotted preview of the arc the first flip
// would take, so the verb is taught by doing (ONBOARD-02). Vanishes the instant
// the player flips, or after the hint timer runs out.
function drawOnboardingHint() {
  if (state !== PLAYING || hintT <= 0 || hasFlipped) return;
  const pulse = 0.6 + 0.4 * Math.sin(titleHintT * 5);
  // Preview arc: forward-simulate one flip from the current rest state.
  const flippedSign = -player.gravitySign;
  let py = player.y, pvy = 0, pwx = dropletWorldX();
  ctx.save();
  ctx.strokeStyle = COLORS.debug;
  ctx.globalAlpha = 0.45 * pulse;
  ctx.setLineDash([3, 6]);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PLAYER_X, py);
  const stepDt = 1 / 60;
  for (let i = 0; i < 120; i++) {
    pwx += speed * stepDt;
    pvy += flippedSign * GRAVITY * stepDt;
    py += pvy * stepDt;
    const cy = ceilingY(pwx) + RADIUS, fy = floorY(pwx) - RADIUS;
    if (py >= fy) { py = fy; }
    if (py <= cy) { py = cy; }
    const sx = PLAYER_X + (pwx - dropletWorldX());
    if (sx > VW) break;
    ctx.lineTo(sx, py);
    if (py === fy || py === cy) break;
  }
  ctx.stroke();
  ctx.setLineDash([]);
  // Floating label.
  ctx.globalAlpha = pulse;
  ctx.fillStyle = COLORS.dropletGlow;
  ctx.font = "700 18px system-ui, sans-serif";
  ctx.textAlign = "center";
  const ly = player.gravitySign > 0 ? player.y - 42 : player.y + 54;
  ctx.fillText("TAP / SPACE TO FLIP", PLAYER_X, ly);
  ctx.restore();
  ctx.globalAlpha = 1;
}

// A slow looping ghost-droplet arc drawn on the title screen so a first-timer
// sees the verb in motion before pressing anything (ONBOARD-02).
function drawTitleGhost() {
  const period = 2.6;
  const t = (titleHintT % period) / period; // 0..1
  // A simple full-corridor parabola sweeping floor -> ceiling -> floor.
  const x = VW * 0.18 + t * VW * 0.64;
  const arc = Math.sin(t * Math.PI);
  const y = (BOTTOM_Y - RADIUS) - arc * (BOTTOM_Y - TOP_Y - RADIUS * 2);
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  // Faint dotted path.
  ctx.globalAlpha = 0.25;
  ctx.strokeStyle = COLORS.debug;
  ctx.setLineDash([2, 7]);
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i <= 40; i++) {
    const tt = i / 40;
    const gx = VW * 0.18 + tt * VW * 0.64;
    const ga = Math.sin(tt * Math.PI);
    const gy = (BOTTOM_Y - RADIUS) - ga * (BOTTOM_Y - TOP_Y - RADIUS * 2);
    if (i === 0) ctx.moveTo(gx, gy); else ctx.lineTo(gx, gy);
  }
  ctx.stroke();
  ctx.setLineDash([]);
  // The ghost droplet itself.
  ctx.globalAlpha = 0.7;
  const g = ctx.createRadialGradient(x, y, 0, x, y, RADIUS * 1.6);
  g.addColorStop(0, COLORS.dropletHi);
  g.addColorStop(0.5, COLORS.dropletGlow);
  g.addColorStop(1, "rgba(125,240,230,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, RADIUS * 1.6, 0, TAU);
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1;
}

function render() {
  // Screen-shake from death flash plus any active shatter-cascade rumble, summed
  // and clamped so it punctuates without nauseating (JUICE-02).
  let shakeX = 0, shakeY = 0;
  const deathM = flashT > 0 ? flashT / 0.45 : 0;
  const shakeMag = Math.min(16, deathM * 14 + cascadeShake * 12);
  if (shakeMag > 0.2) {
    shakeX = (Math.random() - 0.5) * shakeMag;
    shakeY = (Math.random() - 0.5) * shakeMag;
  }
  ctx.save();
  ctx.translate(shakeX, shakeY);

  drawBackdrop();

  if (state === TITLE) {
    drawCorridor();
    drawTitleGhost();
    drawTitle();
    ctx.restore();
    return;
  }

  drawCorridor();
  drawCans();
  drawParticles();
  drawTrail();
  drawDebugTrajectory();
  drawDroplet();
  drawPops();
  drawOnboardingHint();
  drawHUD();
  drawBeatBar();

  if (state === GAME_OVER) {
    ctx.fillStyle = "rgba(5,4,10,0.62)";
    ctx.fillRect(-20, -20, VW + 40, VH + 40);
    drawGameOver();
  }

  // Death flash (red) and the softer amber milestone/best flash both ride here.
  if (flashT > 0) {
    const isDeath = state === GAME_OVER;
    const a = isDeath ? (flashT / 0.45) * 0.45 : (flashT / 0.12) * 0.18;
    const col = isDeath ? "255,111,111" : "255,208,137";
    ctx.fillStyle = "rgba(" + col + "," + a.toFixed(3) + ")";
    ctx.fillRect(-20, -20, VW + 40, VH + 40);
  }
  // Silver-can bump: a brief red flash that is NOT a death (run continues).
  if (hitFlashT > 0 && state === PLAYING) {
    ctx.fillStyle = "rgba(255,111,111," + ((hitFlashT / 0.22) * 0.28).toFixed(3) + ")";
    ctx.fillRect(-20, -20, VW + 40, VH + 40);
  }
  // New-best glow ring around the frame while celebrating.
  if (bestFlashT > 0 && state === PLAYING) {
    ctx.save();
    ctx.globalAlpha = (bestFlashT / 1.2) * 0.5;
    ctx.strokeStyle = COLORS.beat;
    ctx.lineWidth = 6;
    ctx.strokeRect(4, 4, VW - 8, VH - 8);
    ctx.restore();
  }

  ctx.restore();
}

// ----------------------------------------------------------------------------
// Main loop (delta-time, clamped to avoid tunneling on tab-switch).
// ----------------------------------------------------------------------------
resetCorridor();
let lastT = performance.now();
function frame(now) {
  let dt = (now - lastT) / 1000;
  lastT = now;
  if (dt > 1 / 30) dt = 1 / 30; // clamp big gaps
  update(dt);
  render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

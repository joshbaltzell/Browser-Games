/*
 * KNIT ONE — Phases 1–3
 * =====================
 * You are a single continuous thread. Steer the HEAD with the mouse; segments
 * pay out behind it as a verlet-integrated rope (finite yarn). Wrap the rope
 * around the wooden peg, loop the head back through its own bight, and press
 * SPACE to CINCH — that bakes a stiff constraint into the crossing so the loop
 * can't slide open. A cinched loop around the peg honestly bears the weight; a
 * loose, un-cinched loop opens under load and the weight slips and falls. The
 * catch is emergent rope tension, not a scripted snap-to-net.
 *
 * PHASE 2 — Style & Identity: the grey-box is reskinned as a cozy felt-and-
 * fiber world. Baked knit-stockinette background, fuzzy multi-pass plied yarn
 * with fiber highlights, stitched wooden-button pegs, a felted forest ball
 * weight, a stop-motion frame-step that makes everything jitter at a low
 * animation framerate while the sim stays smooth, fiber-wisp particles, and a
 * synthesized music-box lullaby loop under needle-click / win / drop foley.
 *
 * PHASE 3 — The Twist (unravel economy): yarn is finite and the only source of
 * more is to pull apart your own work. Right-click / U unravels the thread from
 * the head, winding each segment's length back onto the ball and DESTROYING any
 * knot it carried — so a structure that was bearing load stops working the
 * instant it is unraveled (the weight falls). Your very first completed
 * creation persists in localStorage so the finale (Phase 4) can demand it.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no fetch — visuals and
 * audio are generated in code so it runs straight from file://.
 *
 * Sections: Constants -> Canvas/state -> Persistence -> Audio -> Input ->
 *   Rope model -> Physics -> Crossings & knots -> Unravel -> Weight -> Room ->
 *   Update -> Render -> Main loop.
 */

"use strict";

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;

// Fixed logical play area. Canvas scales to fit while keeping this aspect.
const VW = 900;
const VH = 640;

// Verlet rope
const SEG_LEN = 16;          // rest length of one rope segment
const GRAVITY = 1300;        // px/s^2, applied to rope nodes
const DAMP = 0.86;           // verlet velocity damping
const ITER = 24;             // constraint relaxation iterations per frame
const MAX_DT = 1 / 30;       // clamp big frame gaps so the sim stays stable

// Yarn budget is measured in segment-lengths (number of nodes we may spawn).
const START_YARN = 90;

// Weight body
const WEIGHT_R = 22;
const WEIGHT_GRAVITY = 1700;
const WEIGHT_DAMP = 0.90;

// A loop is considered "cinched" when SPACE is pressed and the head segment is
// currently crossing an earlier segment (a closed bight exists).
const KNOT_REST = 4;         // cinched crossing pulls the two points this close
const KNOT_STIFF = 1.0;      // fully stiff — a real knot doesn't creep

// Win: weight must rest (held, slow) for this long (default; rooms can override).
const HOLD_TO_WIN = 2.0;

// ----------------------------------------------------------------------------
// ROOMS — Phase 4 content. Each room is pure data: where the thread is anchored,
// the wooden-button pegs, where the weight drops in, the yarn budget, the hold
// time to win, and a single diegetic teaching prompt. The list is ordered as a
// teaching curve: each early room introduces ONE verb before later rooms combine
// them. The final room is the unravel-your-first-creation finale.
//
// Coordinates are fractions of the play area (0..1) so rooms read cleanly and
// scale with VW/VH. A room may declare:
//   teach   : { text, at:[fx,fy] }  diegetic low-text prompt drawn in-world
//   tip     : short bottom-line goal text
//   finale  : true  -> seeds the player's persisted first creation as a
//                      pre-built, load-bearing ghost the player must unravel
// ----------------------------------------------------------------------------
const ROOMS = [
  {
    name: "First Stitch",
    anchor: [0.16, 0.24],
    pegs: [],
    weight: null,                 // no load yet — pure "learn to steer" room
    target: [0.80, 0.62],         // reach the marked spot with the head
    yarn: 60,
    tip: "Drag from the loose end to lay yarn. Reach the marked stitch.",
    teach: { text: "drag here", at: [0.80, 0.62] },
  },
  {
    name: "Round the Post",
    anchor: [0.14, 0.22],
    pegs: [[0.50, 0.45, 26]],
    weight: null,
    target: [0.84, 0.40],
    wrapPeg: 0,                   // must wind around peg 0 on the way
    yarn: 70,
    tip: "Wind the yarn around the wooden button, then reach the stitch.",
    teach: { text: "wrap me", at: [0.50, 0.45] },
  },
  {
    name: "A Loose Loop",
    anchor: [0.14, 0.20],
    pegs: [[0.50, 0.40, 26]],
    weight: [0.50, 0.40],
    yarn: 95,
    hold: 2.0,
    tip: "Loop over the post and CINCH (SPACE) so the knot holds the weight.",
    teach: { text: "loop back, then SPACE", at: [0.50, 0.62] },
  },
  {
    name: "Cross & Cinch",
    anchor: [0.13, 0.22],
    pegs: [[0.46, 0.40, 24]],
    weight: [0.46, 0.40],
    yarn: 100,
    hold: 2.0,
    tip: "Cross the yarn over itself (hold SHIFT to go under), then cinch.",
    teach: { text: "cross your own line", at: [0.46, 0.66] },
  },
  {
    name: "Two Posts",
    anchor: [0.12, 0.20],
    pegs: [[0.40, 0.38, 24], [0.66, 0.50, 24]],
    weight: [0.53, 0.30],
    yarn: 120,
    hold: 2.0,
    tip: "Sling a hammock between both posts and cinch it to hold the weight.",
  },
  {
    name: "Heavy Drop",
    anchor: [0.12, 0.18],
    pegs: [[0.38, 0.42, 26], [0.64, 0.42, 26]],
    weight: [0.51, 0.20],
    weightR: 28,                  // a chunkier, heavier felt ball
    yarn: 130,
    hold: 2.2,
    tip: "A heavier ball. Build a tighter cradle between the posts.",
  },
  {
    name: "The Narrow Gap",
    anchor: [0.10, 0.30],
    pegs: [[0.34, 0.30, 20], [0.55, 0.56, 20], [0.78, 0.34, 20]],
    weight: [0.55, 0.18],
    yarn: 145,
    hold: 2.2,
    tip: "Three posts, less room. Weave a path that still bears the load.",
  },
  {
    name: "Thin Ball",
    anchor: [0.12, 0.22],
    pegs: [[0.42, 0.40, 24], [0.66, 0.46, 24]],
    weight: [0.54, 0.22],
    yarn: 78,                     // TWIST-03: too little to solve outright
    hold: 2.0,
    tip: "Not enough yarn on the ball. Build, fail, UNRAVEL, and re-spend it.",
    teach: { text: "run out, then unravel", at: [0.30, 0.74] },
  },
  {
    name: "Double Span",
    anchor: [0.10, 0.20],
    pegs: [[0.34, 0.36, 22], [0.55, 0.52, 22], [0.76, 0.36, 22]],
    weight: [0.55, 0.16],
    weightR: 26,
    yarn: 150,
    hold: 2.4,
    tip: "A long heavy run. Spend every inch — unravel mistakes to afford it.",
  },
  {
    name: "Unravel the First",
    anchor: [0.13, 0.20],
    pegs: [[0.46, 0.42, 26]],
    weight: [0.56, 0.42],        // drops just past the peg so it won't balance on it
    yarn: 34,                     // far too little on its own…
    hold: 2.4,
    finale: true,                 // …the rest is locked inside your first work
    tip: "Only one thing holds enough yarn: your very first creation. Unravel it.",
    teach: { text: "unravel your first work", at: [0.74, 0.30] },
  },
];

let roomIndex = 0;            // which room we're playing
let roomTarget = null;       // {x,y} reach-goal for no-load rooms (or null)
let roomConfig = null;       // the active ROOMS[roomIndex] record
let wrapNeeded = -1;         // peg index that must be wrapped (or -1)
let wrapDone = false;        // has the required wrap been achieved
let reached = false;         // has the head reached roomTarget
let failState = false;       // soft fail: stuck with no yarn and nothing to unravel
let failTimer = 0;

// Wool-dyed palette — the single source of truth for every rendered color.
// Warm oatmeal ground, dusty rose / clay yarn, mustard strain, forest felt,
// plum accents. Deliberately muted and "dyed", never neon.
const COLORS = {
  // background — a dim, warm craft-table cloth
  bg0: "#3a3026",          // top — lit oatmeal-brown
  bg1: "#241d15",          // bottom — shadowed
  knitLight: "#473a2c",    // raised knit stitch highlight
  knitDark: "#2b2218",     // recessed knit stitch shadow
  vignette: "rgba(14,10,6,0.55)",

  // yarn — dusty rose / clay, strands of slightly varied hue
  thread: "#d68a6a",       // clay rose
  threadHi: "#e7a98c",     // sunlit strand highlight
  threadLo: "#a85f47",     // shadowed strand
  threadStrain: "#e6c24a", // mustard — strained
  threadSnap: "#cf6a4f",   // terracotta — about to fail
  threadHalo: "rgba(214,138,106,0.16)",

  // pegs — wooden buttons
  peg: "#8a6238",
  pegHi: "#b78a52",
  pegRim: "#a37a48",
  pegEye: "#33240f",
  pegShadow: "rgba(10,7,3,0.45)",

  anchor: "#cda86a",
  anchorRim: "#8c734a",

  // weight — forest felted ball
  weight: "#5f7350",
  weightHi: "#88a070",
  weightRim: "#42513a",
  weightSeam: "rgba(24,32,16,0.45)",

  // yarn ball HUD — plum-wound ball
  yarnBall: "#c47e9a",
  yarnBallHi: "#e4a9c2",
  yarnWind: "#9a567a",
  yarnBack: "rgba(58,50,39,0.55)",

  text: "#f1e6d1",
  textDim: "#b6a37e",
  good: "#a7d27a",
  bad: "#cf6a4f",
  plum: "#9a567a",
  panel: "rgba(28,22,15,0.86)",
  panelRim: "rgba(214,178,110,0.28)",
};

// ----------------------------------------------------------------------------
// Canvas & global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let scale = 1;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const availW = window.innerWidth - 24;
  const availH = window.innerHeight - 24;
  scale = Math.min(availW / VW, availH / VH);
  scale = Math.max(0.2, scale);
  canvas.style.width = VW * scale + "px";
  canvas.style.height = VH * scale + "px";
  canvas.width = Math.round(VW * dpr);
  canvas.height = Math.round(VH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);

// Screen states: routed through a tiny machine so later phases plug in cleanly.
const TITLE = "TITLE", PLAY = "PLAY", ROOM_COMPLETE = "ROOM_COMPLETE",
      GAME_COMPLETE = "GAME_COMPLETE";
let state = TITLE;
function setState(s) { state = s; }

let DEBUG = false;

// --- Stop-motion frame-step ---------------------------------------------
// The sim runs smooth, but rendering samples a quantized clock so objects
// visibly "pop" between handmade-looking frames, like claymation. We also
// add a tiny deterministic per-object wobble that only changes on each step.
const STOPMO_FPS = 8;             // animation framerate (low = chunky)
let stopFrame = 0;                // integer animation frame counter
let stopAccum = 0;                // seconds accumulated toward next frame
function advanceStopMotion(dt) {
  stopAccum += dt;
  const step = 1 / STOPMO_FPS;
  while (stopAccum >= step) { stopAccum -= step; stopFrame++; }
}
// --- Juice: screen shake + full-frame color flashes (Phase 5) -----------
let shakeAmt = 0;        // current shake magnitude (px), decays each frame
let flash = { a: 0, col: "#fff" }; // transient full-screen tint, alpha decays
let cinchPop = null;     // {x,y,t} expanding ring at the last cinch
function addShake(mag) { shakeAmt = Math.min(18, shakeAmt + mag); }
function addFlash(col, a) { flash.col = col; flash.a = Math.max(flash.a, a); }
function updateJuice(dt) {
  shakeAmt *= Math.pow(0.001, dt);   // fast exponential decay
  if (shakeAmt < 0.15) shakeAmt = 0;
  flash.a -= dt * 2.2;
  if (flash.a < 0) flash.a = 0;
  if (cinchPop) { cinchPop.t -= dt; if (cinchPop.t <= 0) cinchPop = null; }
}

// Deterministic hash -> [-1,1], stable within a stop-motion frame so the
// wobble holds for the whole frame then jumps (the stop-motion look).
function jitter(seed) {
  const v = Math.sin((seed * 12.9898 + stopFrame * 78.233)) * 43758.5453;
  return (v - Math.floor(v)) * 2 - 1;
}

// Rope / world state (initialised in resetRoom)
let nodes;          // [{x,y,px,py,pinned}]
let crossings;      // [{a,b,over}]  a,b = segment start-node indices
let knots;          // [{i,j,rest}]  stiff constraints between two node indices
let pegs;           // [{x,y,r}]
let anchor;         // {x,y}
let weight;         // {x,y,px,py}
let yarn;           // remaining yarn budget (segment-lengths)
let yarnStart;      // budget at room start (for HUD scaling)
let yarnCap;        // max yarn the ball can hold this room (start + reclaimable
                    // yarn locked inside any pre-seeded structure)
let holdTimer;      // seconds the weight has been held
let weightState;    // "FALLING" | "HELD" | "DROPPED"
let lastSpawnX, lastSpawnY; // where we last paid out a node

// Input
let pointer = { x: VW * 0.3, y: VH * 0.4, down: false, active: false };
let underToggle = false; // hold Shift => new crossing goes UNDER

// --- Unravel economy (Phase 3 / The Twist) ------------------------------
// Pulling apart built thread retracts it from the head end back toward the
// anchor, returning each segment's yarn to the ball and destroying any knot
// it carried — so a structure that was bearing load stops working the instant
// it is unraveled.
let unravel = {
  active: false,
  cutIndex: 0,    // nodes at index > cutIndex are being/already pulled (visual ghost line)
  accum: 0,       // seconds accumulated toward next node retract
  recovered: 0,   // yarn ticked back this unravel (for HUD flourish)
};
const UNRAVEL_RATE = 0.018; // seconds per node retracted (fast but legible)

// The player's FIRST creation persists across rooms; the finale (Phase 4)
// will demand unraveling it. We persist a lightweight record so the hook is
// real now and ready for the room system.
const FIRST_KEY = "knit-one-first-creation";
let firstCreation = null;   // { nodes:[{x,y}], yarnLength:int } | null
let firstCreationGhost = null; // loaded structure shown faintly + unravelable

// Best record
let bestYarnUsed; // least yarn used to win, persisted

// ----------------------------------------------------------------------------
// Persistence
// ----------------------------------------------------------------------------
const BEST_KEY = "knit-one-best-yarn";
function loadBest() {
  try {
    const v = parseInt(localStorage.getItem(BEST_KEY) || "0", 10);
    return Number.isFinite(v) && v > 0 ? v : 0;
  } catch (e) { return 0; }
}
function saveBest(v) {
  try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) {}
}
bestYarnUsed = loadBest();

// Furthest room the player has reached (1-based), persisted so the TITLE can
// show progress and the full-run completion is acknowledged.
const PROG_KEY = "knit-one-progress";
let bestRoom = 0;          // highest room index completed (0 = none)
let runCompleted = false;  // has the player ever finished the whole run
function loadProgress() {
  try {
    const v = parseInt(localStorage.getItem(PROG_KEY) || "0", 10);
    bestRoom = Number.isFinite(v) && v > 0 ? v : 0;
    runCompleted = bestRoom >= ROOMS.length;
  } catch (e) { bestRoom = 0; }
}
function saveProgress(roomCompleted1Based) {
  if (roomCompleted1Based > bestRoom) {
    bestRoom = roomCompleted1Based;
    if (bestRoom >= ROOMS.length) runCompleted = true;
    try { localStorage.setItem(PROG_KEY, String(bestRoom)); } catch (e) {}
  }
}
loadProgress();

// Total yarn spent across the whole run (the run-level "score").
let runYarnUsed = 0;
const RUN_BEST_KEY = "knit-one-run-best";
let bestRunYarn = 0;
function loadRunBest() {
  try {
    const v = parseInt(localStorage.getItem(RUN_BEST_KEY) || "0", 10);
    return Number.isFinite(v) && v > 0 ? v : 0;
  } catch (e) { return 0; }
}
function saveRunBest(v) {
  try { localStorage.setItem(RUN_BEST_KEY, String(v)); } catch (e) {}
}
bestRunYarn = loadRunBest();

function loadFirstCreation() {
  try {
    const raw = localStorage.getItem(FIRST_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    if (o && Array.isArray(o.nodes) && o.nodes.length > 1) return o;
  } catch (e) {}
  return null;
}
function saveFirstCreation(rec) {
  try { localStorage.setItem(FIRST_KEY, JSON.stringify(rec)); } catch (e) {}
}
// Snapshot the current built thread as a persistable creation record.
function snapshotCreation() {
  return {
    nodes: nodes.map(n => ({ x: Math.round(n.x), y: Math.round(n.y) })),
    yarnLength: nodes.length, // segment-lengths it cost
  };
}
firstCreation = loadFirstCreation();

// ----------------------------------------------------------------------------
// Audio — lazily created & resumed on first gesture (file://-safe). Phase 1
// only needs the gated context + a soft needle-click on cinch; the music-box
// lullaby is a later phase.
// ----------------------------------------------------------------------------
let audioCtx = null;
let audioReady = false;
let muted = false;

let masterGain = null;      // global volume / mute bus
let musicGain = null;       // lullaby sub-bus
let musicTimer = null;      // scheduler interval id
let musicStep = 0;          // position in the lullaby phrase

function ensureAudio() {
  if (audioReady) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) {
      audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = muted ? 0 : 1;
      masterGain.connect(audioCtx.destination);
      musicGain = audioCtx.createGain();
      musicGain.gain.value = 0.55;
      musicGain.connect(masterGain);
      audioReady = true;
      startMusic();
    }
  } catch (e) { audioCtx = null; }
}

function setMuted(m) {
  muted = m;
  if (masterGain && audioCtx) {
    masterGain.gain.setTargetAtTime(m ? 0 : 1, audioCtx.currentTime, 0.05);
  }
}

// --- Music-box lullaby ---------------------------------------------------
// A gentle, looping phrase in a pentatonic-ish key, voiced as plucked
// music-box tines (fast-decay triangle/sine with a bright transient). All
// synthesized; scheduled a few notes ahead on a setInterval pump.
const LULLABY = [
  // [scale-degree (semitone from base), beat-duration]
  0, 4, 7, 4, 9, 7, 4, 2,
  0, 4, 7, 12, 9, 7, 4, 0,
  5, 9, 12, 9, 7, 4, 2, 0,
  -3, 0, 4, 7, 4, 2, 0, -5,
];
const MUSIC_BASE = 392.0; // G4
const BEAT = 0.42;        // seconds per step (slow, ~143 half-time)

function playTine(freq, when, vol) {
  if (!audioCtx) return;
  const o = audioCtx.createOscillator();
  const o2 = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = "triangle"; o2.type = "sine";
  o.frequency.setValueAtTime(freq, when);
  o2.frequency.setValueAtTime(freq * 2.01, when); // shimmer overtone
  const peak = vol;
  g.gain.setValueAtTime(0.0001, when);
  g.gain.exponentialRampToValueAtTime(peak, when + 0.006);
  g.gain.exponentialRampToValueAtTime(peak * 0.3, when + 0.12);
  g.gain.exponentialRampToValueAtTime(0.0001, when + 1.1);
  const og2 = audioCtx.createGain();
  og2.gain.value = 0.25;
  o.connect(g); o2.connect(og2).connect(g);
  g.connect(musicGain);
  o.start(when); o.stop(when + 1.2);
  o2.start(when); o2.stop(when + 1.2);
}

function startMusic() {
  if (!audioCtx || musicTimer) return;
  let nextTime = audioCtx.currentTime + 0.1;
  const lookahead = 0.4; // schedule this far ahead
  musicTimer = setInterval(() => {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    while (nextTime < now + lookahead) {
      const deg = LULLABY[musicStep % LULLABY.length];
      const freq = MUSIC_BASE * Math.pow(2, deg / 12);
      // soft swing accent on phrase starts
      const accent = (musicStep % 8 === 0) ? 0.16 : 0.105;
      playTine(freq, nextTime, accent);
      // occasional low harmony tine for warmth
      if (musicStep % 4 === 0) {
        playTine(freq / 2, nextTime, 0.05);
      }
      musicStep++;
      nextTime += BEAT;
    }
  }, 120);
}

// Soft needle-click: a tiny filtered noise tick.
function sndClick() {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(700, now + 0.05);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.13, now + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
    osc.connect(g).connect(masterGain || audioCtx.destination);
    osc.start(now); osc.stop(now + 0.1);
  } catch (e) {}
}
function sndWin() {
  if (muted || !audioCtx) return;
  try {
    [523, 659, 784].forEach((f, i) => {
      const now = audioCtx.currentTime + i * 0.11;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc.connect(g).connect(masterGain || audioCtx.destination);
      osc.start(now); osc.stop(now + 0.32);
    });
  } catch (e) {}
}
function sndDrop() {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.4);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.14, now + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    osc.connect(g).connect(masterGain || audioCtx.destination);
    osc.start(now); osc.stop(now + 0.47);
  } catch (e) {}
}

// Unravel: a soft descending "winding back onto the ball" whirr — a handful
// of quick clicks dropping in pitch, plus a breathy filtered-noise sweep.
function sndUnravel() {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    // descending winding clicks
    for (let i = 0; i < 8; i++) {
      const t = now + i * 0.045;
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "triangle";
      const f = 900 - i * 70;
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.06, t + 0.003);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
      o.connect(g).connect(masterGain || audioCtx.destination);
      o.start(t); o.stop(t + 0.05);
    }
    // breathy fiber sweep
    const dur = 0.4;
    const buf = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * dur), audioCtx.sampleRate);
    const ch = buf.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / ch.length);
    const noise = audioCtx.createBufferSource();
    noise.buffer = buf;
    const bp = audioCtx.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.setValueAtTime(1200, now);
    bp.frequency.exponentialRampToValueAtTime(400, now + dur);
    const ng = audioCtx.createGain();
    ng.gain.setValueAtTime(0.08, now);
    ng.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    noise.connect(bp).connect(ng).connect(masterGain || audioCtx.destination);
    noise.start(now); noise.stop(now + dur);
  } catch (e) {}
}

// Tiny tick used while a span ticks yarn back onto the ball.
function sndTick() {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = "square";
    o.frequency.setValueAtTime(2200, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.04, now + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
    o.connect(g).connect(masterGain || audioCtx.destination);
    o.start(now); o.stop(now + 0.04);
  } catch (e) {}
}

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
function canvasPoint(e) {
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) / r.width * VW,
    y: (e.clientY - r.top) / r.height * VH,
  };
}

canvas.addEventListener("pointerdown", (e) => {
  ensureAudio();
  if (state === TITLE) { startRun(); return; }
  if (state === ROOM_COMPLETE) { nextRoom(); return; }
  if (state === GAME_COMPLETE) { startRun(); return; }
  // Right-click (or two-finger) toggles unravel — pull the thread apart.
  if (e.button === 2) { startUnravel(); return; }
  const p = canvasPoint(e);
  pointer.x = p.x; pointer.y = p.y;
  pointer.down = true; pointer.active = true;
  try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
});
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
canvas.addEventListener("pointermove", (e) => {
  const p = canvasPoint(e);
  pointer.x = p.x; pointer.y = p.y;
  pointer.active = true;
});
window.addEventListener("pointerup", () => { pointer.down = false; });
window.addEventListener("blur", () => { pointer.down = false; });

window.addEventListener("keydown", (e) => {
  if (e.key === "Shift") underToggle = true;
  if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," ","Spacebar"].includes(e.key)) e.preventDefault();
  if (e.repeat) return;
  ensureAudio();

  if (state === TITLE) {
    if (e.key === "Enter" || e.key === " ") startRun();
    return;
  }
  if (state === ROOM_COMPLETE) {
    if (e.key === "Enter" || e.key === " ") nextRoom();
    return;
  }
  if (state === GAME_COMPLETE) {
    if (e.key === "Enter" || e.key === " ") startRun();
    return;
  }
  // PLAY
  if (e.key === " " || e.key === "Spacebar") { tryCinch(); return; }
  if (e.key === "u" || e.key === "U") { startUnravel(); return; }
  if (e.key === "r" || e.key === "R") { startRoom(); return; }
  if (e.key === "m" || e.key === "M") { setMuted(!muted); return; }
  if (e.key === "`") { DEBUG = !DEBUG; return; }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "Shift") underToggle = false;
});

// Keyboard steering fallback (when not dragging with the mouse).
const keys = new Set();
window.addEventListener("keydown", (e) => keys.add(e.key));
window.addEventListener("keyup", (e) => keys.delete(e.key));

// ----------------------------------------------------------------------------
// Rope model
// ----------------------------------------------------------------------------
function head() { return nodes[nodes.length - 1]; }

function addNode(x, y, pinned) {
  nodes.push({ x, y, px: x, py: y, pinned: !!pinned });
}

// Pay out a new segment if the head has travelled ~SEG_LEN and yarn remains.
// Two triggers:
//   (a) the head has physically travelled a segment-length from its last spawn
//       (normal "drawing" payout), OR
//   (b) the rope is taut and the player is reaching for a pointer the head can't
//       yet reach — we feed a segment toward the cursor so a held, distant drag
//       keeps unspooling instead of stalling against tension.
function payOut() {
  if (yarn <= 0) return;
  const h = head();
  const dx = h.x - lastSpawnX, dy = h.y - lastSpawnY;
  const d = Math.hypot(dx, dy);
  if (d >= SEG_LEN) {
    addNode(h.x, h.y, false);
    lastSpawnX = h.x; lastSpawnY = h.y;
    yarn--;
    return;
  }
  // Taut-feed: head is being steered but can't reach the held pointer.
  if (pointer.down) {
    const pdx = pointer.x - h.x, pdy = pointer.y - h.y;
    const pd = Math.hypot(pdx, pdy);
    if (pd > SEG_LEN * 1.4) {
      // nudge the head toward the pointer and drop a node so the rope grows
      const nx = h.x + pdx / pd * SEG_LEN;
      const ny = h.y + pdy / pd * SEG_LEN;
      addNode(nx, ny, false);
      lastSpawnX = h.x; lastSpawnY = h.y; // measured from the previous head
      yarn--;
    }
  }
}

// ----------------------------------------------------------------------------
// Physics: verlet integrate + relax distance constraints + peg/knot contacts
// ----------------------------------------------------------------------------
function integrate(dt) {
  const g = GRAVITY * dt * dt;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.pinned) { n.px = n.x; n.py = n.y; continue; }
    const vx = (n.x - n.px) * DAMP;
    const vy = (n.y - n.py) * DAMP;
    n.px = n.x; n.py = n.y;
    n.x += vx;
    n.y += vy + g;
  }
}

function satisfyConstraints() {
  const h = head();
  // The head is "steered" — when dragging, it's pulled hard toward the pointer.
  for (let it = 0; it < ITER; it++) {
    // Distance constraints between consecutive nodes.
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i], b = nodes[i + 1];
      let dx = b.x - a.x, dy = b.y - a.y;
      let d = Math.hypot(dx, dy) || 0.0001;
      const diff = (d - SEG_LEN) / d;
      const aw = a.pinned ? 0 : 0.5;
      const bw = b.pinned ? 0 : 0.5;
      const tw = aw + bw || 1;
      const mx = dx * diff, my = dy * diff;
      a.x += mx * (aw / tw); a.y += my * (aw / tw);
      b.x -= mx * (bw / tw); b.y -= my * (bw / tw);
    }
    // Knot constraints: stiff short links binding two crossing nodes.
    for (let k = 0; k < knots.length; k++) {
      const kn = knots[k];
      const a = nodes[kn.i], b = nodes[kn.j];
      if (!a || !b) continue;
      let dx = b.x - a.x, dy = b.y - a.y;
      let d = Math.hypot(dx, dy) || 0.0001;
      const diff = ((d - kn.rest) / d) * KNOT_STIFF;
      const aw = a.pinned ? 0 : 0.5;
      const bw = b.pinned ? 0 : 0.5;
      const tw = aw + bw || 1;
      const mx = dx * diff, my = dy * diff;
      a.x += mx * (aw / tw); a.y += my * (aw / tw);
      b.x -= mx * (bw / tw); b.y -= my * (bw / tw);
    }
    // Peg contacts: no node may be inside a peg; push to its surface.
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.pinned) continue;
      for (let p = 0; p < pegs.length; p++) {
        const pg = pegs[p];
        let dx = n.x - pg.x, dy = n.y - pg.y;
        let d = Math.hypot(dx, dy);
        const minD = pg.r + 2;
        if (d < minD) {
          if (d < 0.0001) { dx = 1; dy = 0; d = 1; }
          n.x = pg.x + dx / d * minD;
          n.y = pg.y + dy / d * minD;
        }
      }
    }
    // Steer the head toward the pointer while dragging (strong attraction so
    // payout tracks the cursor). The head is never pinned, so tension still
    // pulls back on the chain behind it.
    if (state === PLAY && pointer.down) {
      h.x += (pointer.x - h.x) * 0.5;
      h.y += (pointer.y - h.y) * 0.5;
    }
    // Re-pin pinned nodes. Node 0 holds at the spool; finale cradle nodes hold
    // at their own anchorTo point (so the pre-built sling stays put over the peg).
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!n.pinned) continue;
      if (n.anchorTo) { n.x = n.anchorTo.x; n.y = n.anchorTo.y; }
      else { n.x = anchor.x; n.y = anchor.y; }
    }
    // Keep nodes on screen-ish (soft floor so a dropped weight is obvious but
    // the rope doesn't fly away).
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.y > VH + 200) n.y = VH + 200;
    }
  }
}

// ----------------------------------------------------------------------------
// Crossings & knots
// ----------------------------------------------------------------------------
// 2D segment-segment intersection. Returns true if [p1,p2] crosses [p3,p4].
function segIntersect(p1, p2, p3, p4) {
  const d1x = p2.x - p1.x, d1y = p2.y - p1.y;
  const d2x = p4.x - p3.x, d2y = p4.y - p3.y;
  const denom = d1x * d2y - d1y * d2x;
  if (Math.abs(denom) < 1e-6) return false;
  const t = ((p3.x - p1.x) * d2y - (p3.y - p1.y) * d2x) / denom;
  const u = ((p3.x - p1.x) * d1y - (p3.y - p1.y) * d1x) / denom;
  return t > 0.02 && t < 0.98 && u > 0.02 && u < 0.98;
}

// Each frame, test the head's most-recent few segments against earlier,
// non-adjacent segments. Record fresh crossings (deduped) with an over/under
// flag from the toggle. Returns the index of the most recent live crossing.
function detectCrossings() {
  const N = nodes.length;
  if (N < 4) return -1;
  // Only test the last couple of segments (the "head" segments) for new work.
  const headStart = Math.max(0, N - 3);
  let recent = -1;
  for (let i = headStart; i < N - 1; i++) {
    const a1 = nodes[i], a2 = nodes[i + 1];
    for (let j = 0; j < i - 1; j++) {
      // skip adjacency
      if (Math.abs(i - j) < 2) continue;
      const b1 = nodes[j], b2 = nodes[j + 1];
      if (segIntersect(a1, a2, b1, b2)) {
        // dedupe: same (i,j) pair already recorded?
        const exists = crossings.some(c => c.a === i && c.b === j);
        if (!exists) {
          crossings.push({ a: i, b: j, over: !underToggle });
        }
        recent = crossings.length - 1;
      }
    }
  }
  return recent;
}

// CINCH: if the head currently forms a closed bight (its recent segment crosses
// an earlier segment AND the rope wraps a peg between them), bake a stiff knot
// constraint pinning the two crossing node-pairs together so the loop can't
// slide open. Honest: it's just a tight distance constraint that survives load.
function tryCinch() {
  // Find a live crossing involving a head segment.
  const N = nodes.length;
  if (N < 6) { return; }
  let chosen = null;
  for (let ci = crossings.length - 1; ci >= 0; ci--) {
    const c = crossings[ci];
    // crossing must involve a recent head segment and an earlier one with
    // enough rope between them to enclose a loop.
    if (c.a >= N - 4 && (c.a - c.b) >= 4) { chosen = c; break; }
  }
  if (!chosen) {
    // Be forgiving: if the head is simply near an earlier node forming a small
    // closed loop around a peg, allow a cinch there too.
    chosen = findLoopAroundPeg();
  }
  if (!chosen) return;

  // Avoid stacking duplicate knots on the same pair.
  const dup = knots.some(k => k.i === chosen.a && k.j === chosen.b);
  if (dup) return;

  knots.push({ i: chosen.a + 1, j: chosen.b, rest: KNOT_REST });
  spawnWisps(nodes[chosen.b].x, nodes[chosen.b].y, { count: 18, col: COLORS.threadHi, spd: 100 });
  sndClick();
  // JUICE-01: a knot fires sound + wisps + a brief cinch pop together.
  addShake(3); addFlash(COLORS.threadHi, 0.14);
  cinchPop = { x: nodes[chosen.b].x, y: nodes[chosen.b].y, t: 0.32 };
}

// Looks for the head being close to an earlier node such that a peg sits
// inside the enclosed loop — a wrap-and-tuck that should cinch.
function findLoopAroundPeg() {
  const N = nodes.length;
  const h = head();
  for (let j = 0; j < N - 5; j++) {
    const d = Math.hypot(nodes[j].x - h.x, nodes[j].y - h.y);
    if (d < SEG_LEN * 2.2) {
      // Is a peg enclosed by the span j..N-1? Cheap test: peg roughly inside
      // the bounding loop and the rope wraps past it.
      for (let p = 0; p < pegs.length; p++) {
        if (loopWrapsPeg(j, N - 1, pegs[p])) {
          return { a: N - 2, b: j, over: !underToggle };
        }
      }
    }
  }
  return null;
}

// Does the polyline nodes[i..k] (closed by the chord k->i) wind around the peg?
// Approximate by summed signed angle subtended at the peg center > ~PI.
function loopWrapsPeg(i, k, peg) {
  let total = 0;
  let prevAng = null;
  for (let n = i; n <= k; n++) {
    const ang = Math.atan2(nodes[n].y - peg.y, nodes[n].x - peg.x);
    if (prevAng !== null) {
      let d = ang - prevAng;
      while (d > Math.PI) d -= TAU;
      while (d < -Math.PI) d += TAU;
      total += d;
    }
    prevAng = ang;
  }
  return Math.abs(total) > Math.PI * 1.1;
}

// ----------------------------------------------------------------------------
// Unravel — pull the thread apart from the head, reclaim its yarn, kill its
// function. This is the game's twist made into a real, working system.
// ----------------------------------------------------------------------------

// Begin (or stop) unraveling. We unravel from the free head end backward.
function startUnravel() {
  if (unravel.active) { stopUnravel(); return; }
  // Need more than the seed (anchor + one) to have anything to reclaim.
  if (nodes.length <= 2) return;
  unravel.active = true;
  unravel.cutIndex = nodes.length - 1; // start retracting the very last node
  unravel.accum = 0;
  unravel.recovered = 0;
  sndUnravel();
  addShake(4); addFlash(COLORS.plum, 0.12);
}
function stopUnravel() {
  unravel.active = false;
}

// Each tick removes the current head node: its yarn returns to the ball, any
// knot anchored on a now-removed node is destroyed (function lost), and the
// weight — if it was resting on that thread — is no longer supported.
function updateUnravel(dt) {
  if (!unravel.active) return;
  unravel.accum += dt;
  while (unravel.accum >= UNRAVEL_RATE && nodes.length > 2) {
    unravel.accum -= UNRAVEL_RATE;
    const removedIdx = nodes.length - 1;
    const removed = nodes[removedIdx];
    // wisps of recovered fiber at the point being pulled
    spawnWisps(removed.x, removed.y, { count: 3, col: COLORS.threadHi, spd: 50 });
    nodes.pop();
    yarn = Math.min(yarnCap, yarn + 1); // reclaim one segment-length
    unravel.recovered++;
    // Destroy any knot that referenced a node at/after the new end — its
    // crossing no longer exists, so it can no longer bear load.
    for (let k = knots.length - 1; k >= 0; k--) {
      if (knots[k].i >= nodes.length || knots[k].j >= nodes.length) knots.splice(k, 1);
    }
    // Drop stale crossings too.
    for (let c = crossings.length - 1; c >= 0; c--) {
      if (crossings[c].a >= nodes.length || crossings[c].b >= nodes.length) crossings.splice(c, 1);
    }
    unravel.cutIndex = nodes.length - 1;
    if (unravel.recovered % 2 === 0) sndTick();
  }
  if (nodes.length <= 2) {
    unravel.active = false;
  }
  // keep the new head from snapping to a stale pointer
  lastSpawnX = head().x; lastSpawnY = head().y;
}

// ----------------------------------------------------------------------------
// Weight body — a heavy circle that collides with rope segments.
// ----------------------------------------------------------------------------
function integrateWeight(dt) {
  if (!weight.active) return;
  const g = WEIGHT_GRAVITY * dt * dt;
  const vx = (weight.x - weight.px) * WEIGHT_DAMP;
  const vy = (weight.y - weight.py) * WEIGHT_DAMP;
  weight.px = weight.x; weight.py = weight.y;
  weight.x += vx;
  weight.y += vy + g;
}

// Closest point on segment [a,b] to point p.
function closestOnSeg(p, a, b) {
  const abx = b.x - a.x, aby = b.y - a.y;
  const apx = p.x - a.x, apy = p.y - a.y;
  const len2 = abx * abx + aby * aby || 0.0001;
  let t = (apx * abx + apy * aby) / len2;
  t = Math.max(0, Math.min(1, t));
  return { x: a.x + abx * t, y: a.y + aby * t, t };
}

// Resolve weight-vs-rope: push the weight out of any segment it overlaps, and
// push the rope nodes down a bit (so the rope sags & bears the load honestly).
function collideWeightRope() {
  if (!weight.active) return;
  const WR = weight.r || WEIGHT_R;
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i], b = nodes[i + 1];
    const cp = closestOnSeg(weight, a, b);
    let dx = weight.x - cp.x, dy = weight.y - cp.y;
    let d = Math.hypot(dx, dy);
    const minD = WR + 3;
    if (d < minD) {
      if (d < 0.0001) { dx = 0; dy = -1; d = 1; }
      const nx = dx / d, ny = dy / d;
      const pen = minD - d;
      // Push weight out (mostly), push rope in (a little) -> the rope holds it.
      weight.x += nx * pen * 0.7;
      weight.y += ny * pen * 0.7;
      // Distribute reaction onto the two nodes (weighted by t).
      const wA = (1 - cp.t), wB = cp.t;
      if (!a.pinned) { a.x -= nx * pen * 0.18 * wA; a.y -= ny * pen * 0.18 * wA; }
      if (!b.pinned) { b.x -= nx * pen * 0.18 * wB; b.y -= ny * pen * 0.18 * wB; }
    }
  }
  // Weight also can't pass through pegs.
  for (let p = 0; p < pegs.length; p++) {
    const pg = pegs[p];
    let dx = weight.x - pg.x, dy = weight.y - pg.y, d = Math.hypot(dx, dy);
    const minD = pg.r + WR;
    if (d < minD) {
      if (d < 0.0001) { dx = 0; dy = -1; d = 1; }
      weight.x = pg.x + dx / d * minD;
      weight.y = pg.y + dy / d * minD;
    }
  }
}

// ----------------------------------------------------------------------------
// Particles — minimal fiber wisps (used on cinch; a fuller system is Phase 2).
// ----------------------------------------------------------------------------
let particles = [];
function spawnWisps(x, y, opts) {
  opts = opts || {};
  const n = opts.count || 12;
  const col = opts.col || COLORS.threadHi;
  const spd = opts.spd || 80;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * TAU, s = spd * (0.4 + Math.random());
    particles.push({
      x: x + (Math.random() - 0.5) * 6,
      y: y + (Math.random() - 0.5) * 6,
      vx: Math.cos(a) * s + (opts.vx || 0),
      vy: Math.sin(a) * s - 20 + (opts.vy || 0),
      life: 0.5 + Math.random() * 0.5, max: 1.0,
      col, w: 1.5 + Math.random() * 1.8,
    });
  }
}
function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= dt;
    if (p.life <= 0) { particles.splice(i, 1); continue; }
    p.x += p.vx * dt; p.y += p.vy * dt;
    p.vy += 200 * dt;
  }
}

// ----------------------------------------------------------------------------
// Room setup
// ----------------------------------------------------------------------------
// Begin the run from room 1.
function startRun() {
  roomIndex = 0;
  runYarnUsed = 0;
  startRoom();
}

// (Re)load whatever room roomIndex points at and enter PLAY.
function startRoom() {
  setState(PLAY);
  resetRoom();
}

// Advance to the next room, or finish the run.
function nextRoom() {
  if (roomIndex >= ROOMS.length - 1) {
    if (bestRunYarn === 0 || runYarnUsed < bestRunYarn) {
      bestRunYarn = runYarnUsed; saveRunBest(runYarnUsed);
    }
    runCompleted = true;
    try { localStorage.setItem(PROG_KEY, String(ROOMS.length)); } catch (e) {}
    bestRoom = Math.max(bestRoom, ROOMS.length);
    setState(GAME_COMPLETE);
    addFlash(COLORS.good, 0.5);
    return;
  }
  roomIndex++;
  startRoom();
}

function fx(f) { return VW * f; }
function fyv(f) { return VH * f; }

function resetRoom() {
  const room = ROOMS[roomIndex] || ROOMS[0];
  roomConfig = room;

  anchor = { x: fx(room.anchor[0]), y: fyv(room.anchor[1]) };
  pegs = (room.pegs || []).map(p => ({ x: fx(p[0]), y: fyv(p[1]), r: p[2] }));

  // Weight: load rooms drop a felt ball; pure-steer rooms have none.
  if (room.weight) {
    const wr = room.weightR || WEIGHT_R;
    const wx = fx(room.weight[0]);
    // Give a tiny lateral drift on spawn so a ball can never just balance on a
    // bare peg — it always rolls off and needs a real holder underneath.
    weight = {
      x: wx, y: -40 - wr,
      px: wx - 5, py: -50 - wr,    // px<x => slight initial rightward drift
      r: wr, active: true,
    };
  } else {
    weight = { x: -999, y: -999, px: -999, py: -999, r: WEIGHT_R, active: false };
  }

  // Reach-goal rooms (no load): reach the marked stitch with the head.
  roomTarget = room.target ? { x: fx(room.target[0]), y: fyv(room.target[1]) } : null;
  wrapNeeded = (room.wrapPeg != null) ? room.wrapPeg : -1;
  wrapDone = false;
  reached = false;
  failState = false;
  failTimer = 0;

  nodes = [];
  crossings = [];
  knots = [];
  particles = [];
  firstCreationGhost = null;
  yarn = room.yarn || START_YARN;
  yarnStart = room.yarn || START_YARN;
  yarnCap = yarnStart;
  holdTimer = 0;
  weightState = weight.active ? "FALLING" : "NONE";
  unravel.active = false;
  unravel.recovered = 0;
  unravel.accum = 0;

  // Seed the thread: anchor (pinned) + a short tail so the head can be steered.
  addNode(anchor.x, anchor.y, true);
  addNode(anchor.x + 8, anchor.y + 8, false);
  lastSpawnX = anchor.x + 8; lastSpawnY = anchor.y + 8;
  pointer.x = anchor.x + 40; pointer.y = anchor.y + 40;

  // FINALE (TWIST-04): seed the player's persisted FIRST creation as a real,
  // pre-built, load-bearing structure. Its nodes hold a stiff knot over the peg
  // so the weight rests on it — but its yarn is "spent" until the player
  // unravels it back onto the ball. The finale gives only a tiny starting ball,
  // so the run literally cannot finish without pulling apart the first work.
  if (room.finale && firstCreation && firstCreation.nodes.length > 3) {
    seedFinaleGhost();
  }
}

// Append the persisted first creation onto the live thread as extra nodes the
// player can unravel for yarn. It is laid as a loop that wraps the finale peg
// and carries a cinched knot, so it genuinely bears the dropped weight until
// it is unraveled.
function seedFinaleGhost() {
  const rec = firstCreation;
  const startN = nodes.length - 1;
  const peg = pegs[0];
  // The ghost stands in for the player's FIRST creation, kept aside in this room
  // as a tight wound coil ABOVE the peg. It deliberately does NOT catch the
  // finale's weight — the room's own ball is far too small to build a holder, so
  // the only way to afford one is to pull this first work apart and wind its
  // yarn back onto the ball. (If it held the weight by itself there'd be no
  // finale.) Size it generously so unraveling it reliably refills the ball past
  // what the room needs; richer first creations leave a little more to reclaim.
  const count = Math.max(90, Math.min(rec.nodes.length + 40, 130));

  // The coil is laid as a loose wound bundle hanging just below the start
  // anchor — extra thread already "spent" into the player's first work. It is
  // part of the one continuous strand (spool -> live tail -> coil), unpinned, so
  // physics lets it settle into a soft heap. The player unravels it from the
  // free end to reclaim its yarn.
  const cx = anchor.x + 70, cy = anchor.y + 90;
  const baseR = 12;
  for (let i = 0; i < count; i++) {
    const t = i / Math.max(1, count - 1);
    const ang = t * TAU * 6.0;          // dense flat spiral = finished bundle
    const rr = baseR + t * 24;
    addNode(cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr * 0.7, false);
  }

  firstCreationGhost = { from: startN + 1, to: nodes.length - 1, yarn: rec.yarnLength };
  // Raise the ball's cap so unraveling the ghost refills it past what's needed.
  yarnCap = yarnStart + (nodes.length - startN - 1);
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function keyboardSteer(dt) {
  if (pointer.down) return; // mouse drag has priority
  let dx = 0, dy = 0;
  if (keys.has("ArrowLeft") || keys.has("a")) dx -= 1;
  if (keys.has("ArrowRight") || keys.has("d")) dx += 1;
  if (keys.has("ArrowUp") || keys.has("w")) dy -= 1;
  if (keys.has("ArrowDown") || keys.has("s")) dy += 1;
  if (dx || dy) {
    const sp = 300 * dt;
    pointer.x += dx * sp; pointer.y += dy * sp;
    pointer.x = Math.max(0, Math.min(VW, pointer.x));
    pointer.y = Math.max(0, Math.min(VH, pointer.y));
    pointer.down = true; // treat keyboard as a held steer for this frame
    payOutAndSteerKeyboardFlag = true;
  }
}
let payOutAndSteerKeyboardFlag = false;

// Evaluate weight state honestly from its motion & position.
function evaluateWeightState(dt) {
  if (!weight.active) { weightState = "NONE"; return; }
  const WR = weight.r || WEIGHT_R;
  const speed = Math.hypot(weight.x - weight.px, weight.y - weight.py) / Math.max(dt, 1e-3);
  const onScreen = weight.y < VH - 10;
  if (weight.y > VH + 120) {
    if (weightState !== "DROPPED") {
      weightState = "DROPPED"; sndDrop();
      addShake(14); addFlash(COLORS.bad, 0.28);
    }
  } else if (onScreen && speed < 40 && weight.y < VH - WR - 4) {
    weightState = "HELD";
  } else {
    if (weightState !== "DROPPED") weightState = "FALLING";
  }
}

function update(dt) {
  if (state !== PLAY) { updateParticles(dt); return; }

  // Unraveling takes over: while pulling apart, the head can't pay out.
  if (unravel.active) {
    updateUnravel(dt);
    integrate(dt);
    satisfyConstraints();
    integrateWeight(dt);
    for (let s = 0; s < 4; s++) collideWeightRope();
    evaluateWeightState(dt);
    updateParticles(dt);
    return;
  }

  // Keyboard steering: emulate a held pointer toward a moving target.
  payOutAndSteerKeyboardFlag = false;
  keyboardSteer(dt);

  // Pay out yarn as the head moves (only while actively steering).
  if (pointer.down) payOut();

  integrate(dt);
  satisfyConstraints();
  detectCrossings();

  // Weight physics + collision (run a few sub-iterations for stability).
  integrateWeight(dt);
  for (let s = 0; s < 4; s++) collideWeightRope();

  // Reset the keyboard-held flag so it doesn't stick.
  if (payOutAndSteerKeyboardFlag) pointer.down = false;

  evaluateWeightState(dt);

  // Track the required peg-wrap (Room 2 teaching gate).
  if (wrapNeeded >= 0 && !wrapDone && pegs[wrapNeeded]) {
    if (loopWrapsPeg(0, nodes.length - 1, pegs[wrapNeeded])) {
      wrapDone = true;
      spawnWisps(pegs[wrapNeeded].x, pegs[wrapNeeded].y, { count: 10, col: COLORS.threadHi, spd: 70 });
      sndClick();
    }
  }

  const holdGoal = roomConfig && roomConfig.hold ? roomConfig.hold : HOLD_TO_WIN;

  // --- WIN evaluation -----------------------------------------------------
  if (roomTarget) {
    // Reach-the-stitch rooms (no load). Win when the head touches the target
    // and any required wrap has been done.
    const h = head();
    const dToTarget = Math.hypot(h.x - roomTarget.x, h.y - roomTarget.y);
    if (dToTarget < 26 && (wrapNeeded < 0 || wrapDone)) {
      if (!reached) {
        reached = true;
        holdTimer += dt; // tiny dwell so a graze doesn't instantly fire
      } else {
        holdTimer += dt;
      }
      if (holdTimer >= 0.5) { winRoom(); return; }
    } else {
      holdTimer = Math.max(0, holdTimer - dt * 2);
      reached = false;
    }
  } else if (weight.active) {
    // Load rooms: held & calm for the room's hold time, above the floor.
    if (weightState === "HELD") {
      holdTimer += dt;
      if (holdTimer >= holdGoal) { winRoom(); return; }
    } else {
      holdTimer = Math.max(0, holdTimer - dt * 2);
    }
  }

  // --- Soft FAIL (no dead ends) ------------------------------------------
  // If the weight has fallen and the ball is empty AND there is no built thread
  // left to unravel, the room is stuck — surface a clear retry prompt. R always
  // restarts, so this is a soft fail, never a hard lock.
  const nothingToReclaim = nodes.length <= 2;
  const stuck = weightState === "DROPPED" && yarn <= 0 && nothingToReclaim && !unravel.active;
  if (stuck) {
    failTimer += dt;
    if (failTimer > 0.6) failState = true;
  } else {
    failTimer = 0; failState = false;
  }

  updateParticles(dt);
}

// Commit a room win: bank yarn, persist records, snapshot the first creation,
// fire juice, and move on.
function winRoom() {
  const used = Math.max(0, yarnStart - yarn);
  runYarnUsed += used;
  if (bestYarnUsed === 0 || used < bestYarnUsed) { bestYarnUsed = used; saveBest(used); }
  // TWIST-04: snapshot the player's very FIRST completed structure so the finale
  // can literally demand unraveling it. Only record from real built thread.
  if (!firstCreation && nodes.length > 3) {
    firstCreation = snapshotCreation();
    saveFirstCreation(firstCreation);
  }
  saveProgress(roomIndex + 1); // 1-based count of rooms completed
  sndWin();
  addFlash(COLORS.good, 0.4); addShake(5);
  spawnWisps(head().x, head().y, { count: 24, col: COLORS.threadHi, spd: 120 });
  setState(ROOM_COMPLETE);
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
// The knit-textured background is expensive to draw stitch-by-stitch every
// frame, so we bake it once to an offscreen canvas and blit it.
let knitBg = null;
function buildKnitBg() {
  const c = document.createElement("canvas");
  c.width = VW; c.height = VH;
  const g = c.getContext("2d");
  // base warm gradient
  const grad = g.createLinearGradient(0, 0, 0, VH);
  grad.addColorStop(0, COLORS.bg0);
  grad.addColorStop(1, COLORS.bg1);
  g.fillStyle = grad;
  g.fillRect(0, 0, VW, VH);
  // knit "stockinette" V-stitches in offset rows
  const sw = 26, sh = 20; // stitch cell width/height
  g.lineCap = "round";
  g.lineJoin = "round";
  for (let row = -1, ry = 0; ry < VH + sh; row++, ry += sh) {
    const offset = (row % 2) * (sw / 2);
    for (let cx = -sw; cx < VW + sw; cx += sw) {
      const x = cx + offset;
      const y = ry;
      // each stitch is a little "V" / chevron — knit purl loops
      // highlight (top-left lit)
      g.strokeStyle = COLORS.knitLight;
      g.lineWidth = 3.2;
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(x + sw * 0.25, y + sh * 0.7, x + sw * 0.5, y + sh * 0.4);
      g.quadraticCurveTo(x + sw * 0.75, y + sh * 0.7, x + sw, y);
      g.stroke();
      // shadow just beneath for depth
      g.strokeStyle = COLORS.knitDark;
      g.lineWidth = 2.2;
      g.beginPath();
      g.moveTo(x, y + 2.4);
      g.quadraticCurveTo(x + sw * 0.25, y + sh * 0.7 + 2.4, x + sw * 0.5, y + sh * 0.4 + 2.4);
      g.quadraticCurveTo(x + sw * 0.75, y + sh * 0.7 + 2.4, x + sw, y + 2.4);
      g.stroke();
    }
  }
  // soft vignette so the play area focuses inward
  const vg = g.createRadialGradient(VW / 2, VH / 2, VH * 0.25, VW / 2, VH / 2, VH * 0.85);
  vg.addColorStop(0, "rgba(0,0,0,0)");
  vg.addColorStop(1, COLORS.vignette);
  g.fillStyle = vg;
  g.fillRect(0, 0, VW, VH);
  knitBg = c;
}

function clearBg() {
  if (!knitBg) buildKnitBg();
  ctx.drawImage(knitBg, 0, 0, VW, VH);
}

function drawPeg(pg, idx) {
  // stop-motion wobble: rotate & nudge a hair, holding for the whole frame
  const seed = 100 + (idx || 0) * 7;
  const wob = jitter(seed) * 0.05;          // small rotation
  const nx = jitter(seed + 1) * 0.8;
  const ny = jitter(seed + 2) * 0.8;
  ctx.save();
  ctx.translate(pg.x + nx, pg.y + ny);
  ctx.rotate(wob);
  const r = pg.r;
  // drop shadow
  ctx.fillStyle = COLORS.pegShadow;
  ctx.beginPath(); ctx.ellipse(2, 4, r, r * 0.96, 0, 0, TAU); ctx.fill();
  // wooden body with a soft radial shade for roundness
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.2, 0, 0, r);
  grad.addColorStop(0, COLORS.pegHi);
  grad.addColorStop(1, COLORS.peg);
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill();
  // rim groove
  ctx.lineWidth = 3; ctx.strokeStyle = COLORS.pegRim;
  ctx.beginPath(); ctx.arc(0, 0, r - 3, 0, TAU); ctx.stroke();
  // wood grain rings
  ctx.strokeStyle = "rgba(60,40,18,0.30)"; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.arc(r * 0.12, r * 0.1, r * 0.6, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.arc(r * 0.18, r * 0.16, r * 0.38, 0, TAU); ctx.stroke();
  // four button holes with stitched thread X eyes
  const o = r * 0.32;
  const holes = [[-o, -o], [o, -o], [-o, o], [o, o]];
  holes.forEach(([hx, hy]) => {
    ctx.fillStyle = COLORS.pegEye;
    ctx.beginPath(); ctx.arc(hx, hy, 2.6, 0, TAU); ctx.fill();
  });
  // crossed thread between the holes (the X eyes the concept calls for)
  ctx.strokeStyle = "#efe0c0"; ctx.lineWidth = 2.2; ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-o, -o); ctx.lineTo(o, o);
  ctx.moveTo(o, -o); ctx.lineTo(-o, o);
  ctx.stroke();
  ctx.restore();
}

function drawAnchor() {
  // a little wound spool the thread is tied to
  const x = anchor.x, y = anchor.y;
  ctx.fillStyle = COLORS.pegShadow;
  ctx.beginPath(); ctx.ellipse(x + 1, y + 3, 11, 10, 0, 0, TAU); ctx.fill();
  const grad = ctx.createRadialGradient(x - 3, y - 3, 2, x, y, 11);
  grad.addColorStop(0, "#e0bd80");
  grad.addColorStop(1, COLORS.anchor);
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(x, y, 11, 0, TAU); ctx.fill();
  ctx.strokeStyle = COLORS.anchorRim; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(x, y, 11, 0, TAU); ctx.stroke();
  // tiny winding lines
  ctx.strokeStyle = "rgba(120,90,50,0.5)"; ctx.lineWidth = 1.4;
  for (let a = 0; a < 3; a++) {
    ctx.beginPath();
    ctx.arc(x, y, 6 + a * 2, a, a + 2.4);
    ctx.stroke();
  }
}

// Per-segment strain tints the thread so a player can predict hold vs fail.
function segColor(strain) {
  if (strain > 1.18) return COLORS.threadSnap;
  if (strain > 1.06) return COLORS.threadStrain;
  return COLORS.thread;
}

// Stepped node position: the true sim point plus a tiny stop-motion wobble
// that only changes on each animation frame. Makes the yarn look hand-placed.
function sx(n, i) { return n.x + jitter(i * 2.7 + 3) * 0.9; }
function syy(n, i) { return n.y + jitter(i * 2.7 + 9) * 0.9; }

function drawThread() {
  if (nodes.length < 2) return;
  ctx.lineCap = "round"; ctx.lineJoin = "round";

  // Build a stop-motion-wobbled, mark a span as "ghosted" if it's mid-unravel.
  const unravelFrom = unravel.active ? unravel.cutIndex : -1;

  // Pass 1: soft fuzzy halo (the wool "fluff" around the core)
  ctx.strokeStyle = COLORS.threadHalo;
  ctx.lineWidth = 13;
  ctx.beginPath();
  ctx.moveTo(sx(nodes[0], 0), syy(nodes[0], 0));
  for (let i = 1; i < nodes.length; i++) ctx.lineTo(sx(nodes[i], i), syy(nodes[i], i));
  ctx.stroke();

  // Pass 2: shadow underside of the yarn for depth
  for (let i = 0; i < nodes.length - 1; i++) {
    const ax = sx(nodes[i], i), ay = syy(nodes[i], i);
    const bx = sx(nodes[i + 1], i + 1), by = syy(nodes[i + 1], i + 1);
    ctx.strokeStyle = COLORS.threadLo;
    ctx.lineWidth = 7.5;
    ctx.beginPath(); ctx.moveTo(ax, ay + 1.6); ctx.lineTo(bx, by + 1.6); ctx.stroke();
  }

  // Pass 3: core yarn, strain-tinted, with a fiber-twist offset so it reads
  // as a plied strand rather than a clean line.
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i], b = nodes[i + 1];
    const ax = sx(a, i), ay = syy(a, i);
    const bx = sx(b, i + 1), by = syy(b, i + 1);
    const d = Math.hypot(b.x - a.x, b.y - a.y);
    const strain = d / SEG_LEN;
    let col = segColor(strain);
    // Finale: the player's persisted first creation reads in plum so they know
    // it is the old work the room is asking them to pull apart.
    if (firstCreationGhost && i >= firstCreationGhost.from && i <= firstCreationGhost.to) {
      col = (Math.floor(stopFrame) % 2 === 0) ? COLORS.plum : COLORS.yarnBall;
    }
    if (unravelFrom >= 0 && i >= unravelFrom) col = "rgba(214,138,106,0.35)"; // ghost
    ctx.strokeStyle = col;
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
  }

  // Pass 4: fiber highlights — short dashes riding the top of the strand,
  // their phase set by the stop-motion frame so they twinkle in steps.
  ctx.strokeStyle = COLORS.threadHi;
  ctx.lineWidth = 1.8;
  for (let i = 0; i < nodes.length - 1; i++) {
    if ((i + stopFrame) % 3 !== 0) continue;
    const a = nodes[i], b = nodes[i + 1];
    const ax = sx(a, i), ay = syy(a, i);
    const bx = sx(b, i + 1), by = syy(b, i + 1);
    const mx = (ax + bx) / 2, my = (ay + by) / 2;
    const nxv = -(by - ay), nyv = (bx - ax);
    const nl = Math.hypot(nxv, nyv) || 1;
    const off = -2.2;
    ctx.beginPath();
    ctx.moveTo(ax + nxv / nl * off, ay + nyv / nl * off);
    ctx.lineTo(mx + nxv / nl * off, my + nyv / nl * off);
    ctx.stroke();
  }

  // knots — chunky cinched bundles
  for (const k of knots) {
    const a = nodes[k.i];
    if (!a) continue;
    const kx = sx(a, k.i), ky = syy(a, k.i);
    ctx.fillStyle = COLORS.threadLo;
    ctx.beginPath(); ctx.arc(kx, ky + 1.5, 6.5, 0, TAU); ctx.fill();
    ctx.fillStyle = COLORS.thread;
    ctx.beginPath(); ctx.arc(kx, ky, 6.5, 0, TAU); ctx.fill();
    ctx.fillStyle = COLORS.threadHi;
    ctx.beginPath(); ctx.arc(kx - 2, ky - 2, 2.2, 0, TAU); ctx.fill();
  }

  // head marker — the working end / "needle tip"
  const h = head();
  const hx = sx(h, nodes.length - 1), hy = syy(h, nodes.length - 1);
  ctx.fillStyle = COLORS.threadHi;
  ctx.beginPath(); ctx.arc(hx, hy, 6, 0, TAU); ctx.fill();
  ctx.fillStyle = "#fff3df";
  ctx.beginPath(); ctx.arc(hx - 1.5, hy - 1.5, 2, 0, TAU); ctx.fill();
}

function drawWeight() {
  if (!weight.active) return;
  const wob = jitter(40) * 0.06;
  const nx = jitter(41) * 0.7, ny = jitter(42) * 0.7;
  ctx.save();
  ctx.translate(weight.x + nx, weight.y + ny);
  ctx.rotate(wob);
  const r = weight.r || WEIGHT_R;
  // shadow
  ctx.fillStyle = COLORS.pegShadow;
  ctx.beginPath(); ctx.ellipse(2, 4, r, r * 0.95, 0, 0, TAU); ctx.fill();
  // felt body with soft shading
  const grad = ctx.createRadialGradient(-r * 0.35, -r * 0.4, r * 0.2, 0, 0, r);
  grad.addColorStop(0, COLORS.weightHi);
  grad.addColorStop(1, COLORS.weight);
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill();
  // fuzzy felt fibers around the rim (little radial flecks)
  ctx.strokeStyle = COLORS.weightRim; ctx.lineWidth = 1.2;
  for (let a = 0; a < 22; a++) {
    const ang = a / 22 * TAU + jitter(50 + a) * 0.1;
    const r0 = r - 1, r1 = r + 1.6 + jitter(70 + a) * 1.2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(ang) * r0, Math.sin(ang) * r0);
    ctx.lineTo(Math.cos(ang) * r1, Math.sin(ang) * r1);
    ctx.stroke();
  }
  // running stitch seam (dashed) around as if hand-sewn
  ctx.strokeStyle = COLORS.weightSeam; ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.arc(0, 0, r - 5, 0, TAU); ctx.stroke();
  ctx.setLineDash([]);
  // cross seam
  ctx.beginPath();
  ctx.moveTo(-r + 5, 0); ctx.lineTo(r - 5, 0);
  ctx.moveTo(0, -r + 5); ctx.lineTo(0, r - 5);
  ctx.stroke();
  ctx.restore();
}

function drawParticles() {
  for (const p of particles) {
    const a = Math.max(0, p.life / p.max);
    ctx.globalAlpha = a * 0.85;
    ctx.strokeStyle = p.col || COLORS.threadHi;
    ctx.lineWidth = p.w || 2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x - p.vx * 0.045, p.y - p.vy * 0.045);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawHUD() {
  // --- Yarn ball meter (top-right) — a wound plum ball ---
  const bx = VW - 90, by = 60, R = 34;
  const frac = Math.max(0, Math.min(1, yarn / Math.max(1, yarnCap)));
  // drop shadow
  ctx.fillStyle = COLORS.pegShadow;
  ctx.beginPath(); ctx.arc(bx + 2, by + 3, R, 0, TAU); ctx.fill();
  // back ring (depleted track)
  ctx.lineWidth = 8; ctx.strokeStyle = COLORS.yarnBack;
  ctx.beginPath(); ctx.arc(bx, by, R, 0, TAU); ctx.stroke();
  // remaining arc
  ctx.strokeStyle = yarn <= 0 ? COLORS.bad : COLORS.yarnBall;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(bx, by, R, -Math.PI / 2, -Math.PI / 2 + TAU * frac);
  ctx.stroke();
  ctx.lineCap = "butt";
  // ball body
  const bg = ctx.createRadialGradient(bx - 8, by - 8, 4, bx, by, R - 8);
  bg.addColorStop(0, COLORS.yarnBallHi);
  bg.addColorStop(1, COLORS.yarnBall);
  ctx.fillStyle = bg;
  ctx.beginPath(); ctx.arc(bx, by, R - 11, 0, TAU); ctx.fill();
  // crisscross windings
  ctx.strokeStyle = COLORS.yarnWind; ctx.lineWidth = 1.6;
  for (let a = 0; a < 5; a++) {
    const ang = a / 5 * Math.PI + stopFrame * 0.0; // static windings
    ctx.beginPath();
    ctx.ellipse(bx, by, R - 13, (R - 13) * 0.45, ang, 0, TAU);
    ctx.stroke();
  }
  ctx.fillStyle = COLORS.text;
  ctx.font = "bold 15px system-ui, sans-serif";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(Math.max(0, yarn) + "", bx, by);
  ctx.font = "11px system-ui, sans-serif";
  ctx.fillStyle = COLORS.textDim;
  ctx.textBaseline = "alphabetic";
  ctx.fillText("YARN", bx, by + R + 14);

  // --- Room banner (top-left) ---
  ctx.textAlign = "left";
  ctx.fillStyle = COLORS.text;
  ctx.font = "bold 16px Georgia, serif";
  ctx.fillText("Room " + (roomIndex + 1) + "/" + ROOMS.length + " — " + roomConfig.name, 20, 28);

  // --- Goal progress: hold bar (load rooms) or reach state (target rooms) ---
  const holdGoal = roomConfig && roomConfig.hold ? roomConfig.hold : HOLD_TO_WIN;
  if (weight.active) {
    const stColor = weightState === "HELD" ? COLORS.good
                  : weightState === "DROPPED" ? COLORS.bad : COLORS.textDim;
    ctx.fillStyle = stColor;
    ctx.font = "13px system-ui, sans-serif";
    ctx.fillText("WEIGHT: " + weightState, 20, 48);
    if (weightState === "HELD") {
      const w = 140, h = 8, x = 20, y = 56;
      ctx.fillStyle = COLORS.yarnBack; ctx.fillRect(x, y, w, h);
      ctx.fillStyle = COLORS.good;
      ctx.fillRect(x, y, w * Math.min(1, holdTimer / holdGoal), h);
    }
  } else if (roomTarget) {
    ctx.fillStyle = reached ? COLORS.good : COLORS.textDim;
    ctx.font = "13px system-ui, sans-serif";
    ctx.fillText(reached ? "AT THE STITCH…" : "Reach the marked stitch", 20, 48);
  }

  // --- Unravel indicator ---
  let infoY = 78;
  if (unravel.active) {
    ctx.fillStyle = COLORS.plum;
    ctx.font = "bold 14px system-ui, sans-serif";
    ctx.fillText("UNRAVELLING…  +" + unravel.recovered + " yarn reclaimed", 20, infoY);
    infoY += 20;
  } else if (yarn <= 0) {
    ctx.fillStyle = COLORS.bad;
    ctx.font = "bold 14px system-ui, sans-serif";
    ctx.fillText("Ball empty — right-click / U to unravel for more yarn", 20, infoY);
    infoY += 20;
  }

  // --- Finale callout ---
  if (roomConfig && roomConfig.finale && firstCreationGhost) {
    ctx.fillStyle = COLORS.yarnBall;
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText("The plum thread is your FIRST creation — unravel it to afford this room.", 20, infoY);
    infoY += 18;
  }

  // --- Soft fail prompt ---
  if (failState) {
    ctx.textAlign = "center";
    ctx.fillStyle = COLORS.bad;
    ctx.font = "bold 22px Georgia, serif";
    ctx.fillText("It dropped — and the ball is empty.", VW / 2, VH * 0.42);
    ctx.fillStyle = COLORS.text;
    ctx.font = "15px system-ui, sans-serif";
    ctx.fillText("Press R to start this room fresh.", VW / 2, VH * 0.42 + 30);
    ctx.textAlign = "left";
  }

  // --- Bottom hint line (room tip + controls) ---
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.text;
  ctx.font = "13px system-ui, sans-serif";
  if (roomConfig && roomConfig.tip) ctx.fillText(roomConfig.tip, VW / 2, VH - 32);
  ctx.fillStyle = COLORS.textDim;
  ctx.font = "12px system-ui, sans-serif";
  ctx.fillText("Drag = lay yarn  •  SPACE = cinch  •  SHIFT = go under  •  right-click / U = unravel  •  R = restart  •  M = mute",
    VW / 2, VH - 14);
  ctx.textAlign = "left";

  if (DEBUG) drawDebug();
}

function drawDebug() {
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(8, VH - 150, 230, 120);
  ctx.fillStyle = "#9fe";
  ctx.font = "12px monospace";
  let y = VH - 132;
  const line = (s) => { ctx.fillText(s, 16, y); y += 16; };
  line("nodes:    " + nodes.length);
  line("crossings:" + crossings.length + (underToggle ? " (UNDER)" : " (OVER)"));
  line("knots:    " + knots.length);
  line("yarn:     " + yarn + "/" + yarnStart);
  line("weight:   " + weightState + "  hold=" + holdTimer.toFixed(2));
  // segment tension near head
  if (nodes.length >= 2) {
    const a = nodes[nodes.length - 2], b = head();
    const t = Math.hypot(b.x - a.x, b.y - a.y) / SEG_LEN;
    line("head tens: " + t.toFixed(2));
  }
}

// --- Screen overlays (drawn in-canvas) ---
function panel(w, h) {
  const x = (VW - w) / 2, y = (VH - h) / 2;
  ctx.fillStyle = COLORS.panel;
  ctx.strokeStyle = COLORS.panelRim;
  ctx.lineWidth = 1.5;
  roundRect(x, y, w, h, 18); ctx.fill(); ctx.stroke();
  // stitched dashed inner border for the felt-craft feel
  ctx.strokeStyle = "rgba(214,178,110,0.22)";
  ctx.setLineDash([5, 5]);
  roundRect(x + 7, y + 7, w - 14, h - 14, 14); ctx.stroke();
  ctx.setLineDash([]);
  return { x, y };
}
function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawTitle() {
  clearBg();
  drawAnchor();
  pegs.forEach(drawPeg);
  const p = panel(580, 380);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.thread;
  ctx.font = "bold 52px Georgia, serif";
  ctx.fillText("Knit One", VW / 2, p.y + 78);
  ctx.fillStyle = COLORS.text;
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillText("You are a single continuous thread.", VW / 2, p.y + 116);
  ctx.fillStyle = COLORS.textDim;
  ctx.font = "15px system-ui, sans-serif";
  const lines = [
    "Drag to pay out yarn from the head.",
    "Wrap the rope around the peg, loop the head back",
    "through its own bight, then press SPACE to CINCH.",
    "A cinched knot bears the weight — a loose loop drops it.",
    "",
    "Yarn is finite. Right-click (or U) to UNRAVEL your",
    "own work and wind that thread back onto the ball.",
  ];
  lines.forEach((l, i) => ctx.fillText(l, VW / 2, p.y + 152 + i * 24));
  ctx.fillStyle = COLORS.good;
  ctx.font = "bold 17px system-ui, sans-serif";
  // ONBOARD-01: first tap here unlocks audio before any sound plays.
  const blink = (Math.floor(stopFrame / 3) % 2 === 0);
  ctx.globalAlpha = blink ? 1 : 0.45;
  ctx.fillText("Tap or press SPACE to begin", VW / 2, p.y + 326);
  ctx.globalAlpha = 1;

  // Progress + best records (ONBOARD-04).
  ctx.fillStyle = COLORS.textDim;
  ctx.font = "13px system-ui, sans-serif";
  let ly = p.y + 354;
  if (runCompleted) {
    ctx.fillStyle = COLORS.good;
    ctx.fillText("✦ Full run complete — all " + ROOMS.length + " rooms ✦", VW / 2, ly); ly += 20;
    ctx.fillStyle = COLORS.textDim;
  } else if (bestRoom > 0) {
    ctx.fillText("Progress: reached room " + Math.min(bestRoom + 1, ROOMS.length) + " of " + ROOMS.length, VW / 2, ly); ly += 20;
  }
  if (bestRunYarn > 0) ctx.fillText("Best full run: " + bestRunYarn + " yarn used", VW / 2, ly);
  else if (bestYarnUsed > 0) ctx.fillText("Best room: held with only " + bestYarnUsed + " yarn", VW / 2, ly);
  ctx.textAlign = "left";
}

function drawComplete() {
  // keep the scene visible behind the panel
  renderScene();
  ctx.fillStyle = "rgba(20,15,9,0.62)";
  ctx.fillRect(0, 0, VW, VH);

  if (state === GAME_COMPLETE) {
    const p = panel(560, 300);
    ctx.textAlign = "center";
    ctx.fillStyle = COLORS.good;
    ctx.font = "bold 44px Georgia, serif";
    ctx.fillText("Bound off!", VW / 2, p.y + 76);
    ctx.fillStyle = COLORS.text;
    ctx.font = "17px system-ui, sans-serif";
    ctx.fillText("You worked every room of Knit One —", VW / 2, p.y + 116);
    ctx.fillText("and unravelled your very first creation to do it.", VW / 2, p.y + 142);
    ctx.font = "15px system-ui, sans-serif";
    ctx.fillStyle = COLORS.textDim;
    ctx.fillText("Total yarn spent this run: " + runYarnUsed, VW / 2, p.y + 180);
    if (bestRunYarn > 0)
      ctx.fillText("Best full run: " + bestRunYarn + " yarn", VW / 2, p.y + 204);
    ctx.fillStyle = COLORS.good;
    ctx.font = "bold 16px system-ui, sans-serif";
    ctx.fillText("Tap or press SPACE to play the run again", VW / 2, p.y + 250);
    ctx.textAlign = "left";
    return;
  }

  // ROOM_COMPLETE
  const p = panel(500, 250);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.good;
  ctx.font = "bold 40px Georgia, serif";
  const won = roomTarget ? "Reached!" : "It holds!";
  ctx.fillText(won, VW / 2, p.y + 70);
  ctx.fillStyle = COLORS.text;
  ctx.font = "16px system-ui, sans-serif";
  const used = Math.max(0, yarnStart - yarn);
  ctx.fillText(roomTarget ? "The stitch is yours."
                          : "The knot bore the weight honestly.", VW / 2, p.y + 108);
  ctx.fillStyle = COLORS.textDim;
  ctx.font = "15px system-ui, sans-serif";
  ctx.fillText("Yarn used this room: " + used, VW / 2, p.y + 136);
  ctx.fillText("Run total so far: " + runYarnUsed, VW / 2, p.y + 158);
  ctx.fillStyle = COLORS.good;
  ctx.font = "bold 16px system-ui, sans-serif";
  const more = roomIndex < ROOMS.length - 1;
  ctx.fillText(more ? "Tap or press SPACE for the next room"
                    : "Tap or press SPACE for the finale", VW / 2, p.y + 206);
  ctx.textAlign = "left";
}

// A pulsing marked stitch the head must reach (no-load teaching rooms).
function drawTarget() {
  if (!roomTarget) return;
  const pulse = 1 + Math.sin(stopFrame * 0.7) * 0.12;
  const r = 16 * pulse;
  ctx.save();
  ctx.translate(roomTarget.x, roomTarget.y);
  // dashed ring
  ctx.strokeStyle = reached ? COLORS.good : COLORS.threadHi;
  ctx.lineWidth = 3; ctx.setLineDash([6, 6]);
  ctx.lineDashOffset = stopFrame * 2;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.stroke();
  ctx.setLineDash([]);
  // a little knot dot
  ctx.fillStyle = reached ? COLORS.good : COLORS.thread;
  ctx.beginPath(); ctx.arc(0, 0, 5, 0, TAU); ctx.fill();
  ctx.restore();
}

// Expanding pop ring at the most recent cinch.
function drawCinchPop() {
  if (!cinchPop) return;
  const k = 1 - cinchPop.t / 0.32;
  ctx.save();
  ctx.globalAlpha = (1 - k) * 0.8;
  ctx.strokeStyle = COLORS.threadHi;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cinchPop.x, cinchPop.y, 6 + k * 26, 0, TAU);
  ctx.stroke();
  ctx.restore();
}

// Diegetic low-text onboarding prompt for the current room (Phase 5).
function drawTeach() {
  const room = roomConfig;
  if (!room || !room.teach) return;
  // fade the prompt once its verb has clearly been performed
  let alpha = 1;
  if (room.target && reached) alpha = 0;
  if (room.wrapPeg != null && wrapDone) alpha = 0.25;
  if (alpha <= 0.02) return;
  const tx = fx(room.teach.at[0]), ty = fyv(room.teach.at[1]);
  ctx.save();
  ctx.globalAlpha = alpha;
  const bob = Math.sin(stopFrame * 0.5) * 3;
  ctx.font = "italic 16px Georgia, serif";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  // soft backing
  const w = ctx.measureText(room.teach.text).width + 22;
  ctx.fillStyle = "rgba(28,22,15,0.6)";
  roundRect(tx - w / 2, ty - 15 + bob, w, 30, 14); ctx.fill();
  ctx.fillStyle = COLORS.text;
  ctx.fillText(room.teach.text, tx, ty + bob);
  // a little dashed pointer down toward the spot it refers to
  ctx.restore();
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
}

function renderScene() {
  clearBg();
  drawTarget();
  drawAnchor();
  pegs.forEach(drawPeg);
  drawThread();
  drawCinchPop();
  drawWeight();
  drawParticles();
  drawTeach();
  drawHUD();
}

function drawFlash() {
  if (flash.a <= 0) return;
  ctx.save();
  ctx.globalAlpha = Math.min(1, flash.a);
  ctx.fillStyle = flash.col;
  ctx.fillRect(0, 0, VW, VH);
  ctx.restore();
}

function render() {
  // Apply screen shake to the whole frame (decays fast). Shake is keyed off the
  // stop-motion clock so it reads as chunky judder, not smooth vibration.
  const sh = shakeAmt;
  ctx.save();
  if (sh > 0) ctx.translate(jitter(900) * sh, jitter(901) * sh);

  if (state === TITLE) { drawTitle(); ctx.restore(); drawFlash(); return; }
  if (state === ROOM_COMPLETE || state === GAME_COMPLETE) {
    drawComplete(); ctx.restore(); drawFlash(); return;
  }
  renderScene();
  ctx.restore();
  drawFlash();
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastT = performance.now();
function frame(now) {
  let dt = (now - lastT) / 1000;
  lastT = now;
  if (dt > MAX_DT) dt = MAX_DT; // clamp for stability
  advanceStopMotion(dt);
  updateJuice(dt);
  update(dt);
  render();
  requestAnimationFrame(frame);
}

// Boot
resize();
resetRoom();        // initialise world so the title screen has a scene behind it
setState(TITLE);
requestAnimationFrame(frame);

/*
 * KNIT ONE
 * ========
 * You are a single thread. Drag to lay yarn from the spool, loop it round a
 * wooden post and cross your own line, press TIE to cinch the loop into a knot,
 * then DROP a felt ball onto it. A knot tied to a post holds the ball with your
 * hands off; a loose line does not.
 *
 * Files (plain scripts, no modules, works double-clicked from disk):
 *   rooms.js      the rooms (data)
 *   sim.js        the physics + rules, no DOM (also run by dev/solve-check.js)
 *   solutions.js  a recorded solution per room: proof they are solvable + the Hint
 *   game.js       this file: screens, input, touch buttons, audio, drawing, saves
 *
 * Sections: Setup -> Persistence -> Audio -> Layout -> Input -> Flow -> Update ->
 *   Render -> Screens -> Main loop.
 */

"use strict";

const K = window.KnitOne;
const S = K.sim;
const ROOMS = K.ROOMS;
const VW = S.VW, VH = S.VH;
const TAU = Math.PI * 2;
const MAX_DT = 1 / 20;


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


// ----------------------------------------------------------------------------
// Setup: canvas, screens, global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const TITLE = "TITLE", SELECT = "SELECT", PLAY = "PLAY", WON = "WON", END = "END";
let screen = TITLE;

let roomIndex = 0;
let world = null;           // the live simulation (sim.js)
let winTimer = 0;           // seconds since the room was won (delays the card)
let failTimer = 0;          // seconds since the ball was lost
let toast = { text: "", t: 0 };
let showHint = false;
let cinchHint = null;       // the loop a Tie press would tie right now (or null)
let cinchHintAge = 0;
let particles = [];
let DEBUG = false;

// ----------------------------------------------------------------------------
// Persistence — every access is inside try/catch (private windows, file://)
// ----------------------------------------------------------------------------
const DONE_KEY = "knit-one-done-v2";        // JSON array of finished room ids
const BEST_KEY = "knit-one-room-best-v2";   // JSON {roomId: least yarn used}
const KNOT_KEY = "knit-one-first-knot-v2";  // the player's real first knot

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const v = JSON.parse(raw);
    return v === null || v === undefined ? fallback : v;
  } catch (e) { return fallback; }
}
function writeJSON(key, v) {
  try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {}
}

let doneIds = readJSON(DONE_KEY, []);
if (!Array.isArray(doneIds)) doneIds = [];
doneIds = doneIds.filter(id => ROOMS.some(r => r.id === id));
let bestYarn = readJSON(BEST_KEY, {});
if (!bestYarn || typeof bestYarn !== "object" || Array.isArray(bestYarn)) bestYarn = {};
let firstKnot = readJSON(KNOT_KEY, null);
if (!(firstKnot && Array.isArray(firstKnot.nodes) && firstKnot.nodes.length > 3)) firstKnot = null;

function isDone(id) { return doneIds.indexOf(id) >= 0; }
// first room not yet finished; every room up to and including it is playable
function firstOpenIndex() {
  for (let i = 0; i < ROOMS.length; i++) if (!isDone(ROOMS[i].id)) return i;
  return ROOMS.length - 1;
}
function unlocked(i) { return i <= firstOpenIndex() || isDone(ROOMS[i].id); }
function markDone(room, used) {
  if (!isDone(room.id)) { doneIds.push(room.id); writeJSON(DONE_KEY, doneIds); }
  if (!(bestYarn[room.id] <= used)) { bestYarn[room.id] = used; writeJSON(BEST_KEY, bestYarn); }
}

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


// A soft "no" blip for a Tie press that found nothing to tie, and a snip for Drop.
function sndNo() {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(260, now);
    o.frequency.exponentialRampToValueAtTime(190, now + 0.14);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.1, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    o.connect(g).connect(masterGain || audioCtx.destination);
    o.start(now); o.stop(now + 0.2);
  } catch (e) {}
}
function sndSnip() {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    for (let i = 0; i < 2; i++) {
      const t = now + i * 0.07;
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = "square";
      o.frequency.setValueAtTime(1800 - i * 400, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.05, t + 0.003);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      o.connect(g).connect(masterGain || audioCtx.destination);
      o.start(t); o.stop(t + 0.06);
    }
  } catch (e) {}
}

// ----------------------------------------------------------------------------
// Layout. The canvas fills the window. The 900x640 board is scaled to fit and
// the controls live outside it in real screen pixels, so text stays readable and
// tap targets stay big on a phone: side columns when the window is wide (phone
// landscape, desktop), a bottom bar when it is narrow (portrait).
// ----------------------------------------------------------------------------
const view = { W: 0, H: 0, dpr: 1, s: 1, ox: 0, oy: 0, mode: "side", bar: 108 };
const COARSE = (function () {
  try { return window.matchMedia("(pointer: coarse)").matches; } catch (e) { return false; }
})();

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = window.innerWidth, H = window.innerHeight;
  view.W = W; view.H = H; view.dpr = dpr;
  canvas.style.width = W + "px"; canvas.style.height = H + "px";
  canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  const bar = W < 700 ? 100 : 116;
  const sSide = Math.min((W - bar * 2) / VW, H / VH);
  const sBot = Math.min(W / VW, (H - 74) / VH);
  if (sSide >= sBot) {
    view.mode = "side"; view.s = Math.max(0.2, sSide); view.bar = bar;
    view.ox = (W - VW * view.s) / 2; view.oy = (H - VH * view.s) / 2;
  } else {
    view.mode = "bottom"; view.s = Math.max(0.2, sBot);
    view.ox = (W - VW * view.s) / 2; view.oy = (H - 74 - VH * view.s) / 2;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
window.addEventListener("orientationchange", resize);

// font size for text drawn inside the board: never smaller than ~13px on screen
function wpx(px) { return Math.max(px, 13 / view.s); }

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
const pointer = { x: VW * 0.3, y: VH * 0.4, down: false };
const pointers = new Map();     // pointerId -> {kind, id}
let steerId = null;
let unravelBtn = false, unravelMouse = false;
const keys = new Set();
let uiButtons = [];             // rebuilt every frame: {id,x,y,w,h,label,...}

function toScreen(e) {
  const r = canvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}
function toWorld(p) {
  return { x: Math.max(0, Math.min(VW, (p.x - view.ox) / view.s)),
           y: Math.max(0, Math.min(VH, (p.y - view.oy) / view.s)) };
}
function hitButton(p) {
  for (let i = uiButtons.length - 1; i >= 0; i--) {
    const b = uiButtons[i];
    if (b.enabled === false) continue;
    if (p.x >= b.x && p.x <= b.x + b.w && p.y >= b.y && p.y <= b.y + b.h) return b;
  }
  return null;
}

canvas.addEventListener("pointerdown", (e) => {
  ensureAudio();
  const p = toScreen(e);
  try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
  const b = hitButton(p);
  if (b) {
    pointers.set(e.pointerId, { kind: "btn", id: b.id });
    press(b.id, true);
    return;
  }
  if (screen === PLAY) {
    if (e.button === 2) { unravelMouse = true; pointers.set(e.pointerId, { kind: "mouse2" }); return; }
    if (steerId === null) {
      steerId = e.pointerId;
      const w = toWorld(p); pointer.x = w.x; pointer.y = w.y; pointer.down = true;
      pointers.set(e.pointerId, { kind: "steer" });
    }
    return;
  }
  // tapping empty space moves the story on
  if (screen === TITLE) act("continue");
  else if (screen === END) act("rooms");
});
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
canvas.addEventListener("pointermove", (e) => {
  if (e.pointerId === steerId) {
    const w = toWorld(toScreen(e)); pointer.x = w.x; pointer.y = w.y;
  }
});
function pointerEnd(e) {
  const info = pointers.get(e.pointerId);
  pointers.delete(e.pointerId);
  if (e.pointerId === steerId) { steerId = null; pointer.down = false; }
  if (info && info.kind === "btn") press(info.id, false);
  if (info && info.kind === "mouse2") unravelMouse = false;
}
window.addEventListener("pointerup", pointerEnd);
window.addEventListener("pointercancel", pointerEnd);
window.addEventListener("blur", () => {
  pointer.down = false; steerId = null; unravelBtn = false; unravelMouse = false; keys.clear(); pointers.clear();
});

window.addEventListener("keydown", (e) => {
  if ([" ", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) e.preventDefault();
  keys.add(e.key.length === 1 ? e.key.toLowerCase() : e.key);
  if (e.repeat) return;
  ensureAudio();
  const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (screen === TITLE) { if (k === "Enter" || k === " ") act("continue"); return; }
  if (screen === SELECT) { if (k === "Escape") act("title"); return; }
  if (screen === END) { if (k === "Enter" || k === " " || k === "Escape") act("rooms"); return; }
  if (screen === WON) {
    if (k === "Enter" || k === " ") { if (winTimer > 0.4) act("next"); }
    else if (k === "r") act("restart");
    else if (k === "Escape") act("rooms");
    return;
  }
  // PLAY
  if (k === " ") act("tie");
  else if (k === "Enter") act("drop");
  else if (k === "z") act("undo");
  else if (k === "r") act("restart");
  else if (k === "h") act("hint");
  else if (k === "m") act("mute");
  else if (k === "Escape") act("rooms");
  else if (k === "`") DEBUG = !DEBUG;
});
window.addEventListener("keyup", (e) => {
  keys.delete(e.key.length === 1 ? e.key.toLowerCase() : e.key);
});

// keyboard steering: arrows / WASD nudge a target around the head
function keyboardSteer() {
  let dx = 0, dy = 0;
  if (keys.has("ArrowLeft") || keys.has("a")) dx -= 1;
  if (keys.has("ArrowRight") || keys.has("d")) dx += 1;
  if (keys.has("ArrowUp") || keys.has("w")) dy -= 1;
  if (keys.has("ArrowDown") || keys.has("s")) dy += 1;
  if (!dx && !dy) return null;
  const h = S.head(world), n = Math.hypot(dx, dy);
  return { x: h.x + dx / n * 60, y: h.y + dy / n * 60 };
}


// ----------------------------------------------------------------------------
// Flow: starting rooms, button actions, events from the simulation
// ----------------------------------------------------------------------------

function showToast(text, secs) { toast.text = text; toast.t = secs || 2.8; }

function startRoom(i) {
  roomIndex = Math.max(0, Math.min(ROOMS.length - 1, i));
  const room = ROOMS[roomIndex];
  world = S.create(room, room.finale ? firstKnot : null);
  screen = PLAY; winTimer = 0; failTimer = 0; showHint = false;
  particles = []; cinchHint = null; cinchPop = null; toast.t = 0; simAcc = 0;
  pointer.down = false; steerId = null;
  pointer.x = world.anchor.x + 40; pointer.y = world.anchor.y + 40;
}

function act(id) {
  if (id.indexOf("room:") === 0) {
    const i = parseInt(id.slice(5), 10);
    if (unlocked(i)) startRoom(i);
    return;
  }
  switch (id) {
    case "continue": {
      const i = firstOpenIndex();
      if (doneIds.length >= ROOMS.length) screen = SELECT; else startRoom(i);
      break;
    }
    case "rooms": screen = SELECT; break;
    case "title": screen = TITLE; break;
    case "mute": setMuted(!muted); break;
    case "next":
      if (roomIndex < ROOMS.length - 1) startRoom(roomIndex + 1); else screen = END;
      break;
    case "replay": case "restart": startRoom(roomIndex); break;
    default: break;
  }
  if (screen !== PLAY || !world) return;
  switch (id) {
    case "tie":
      if (world.balls.length && world.status === "play") S.cinch(world);
      break;
    case "drop":
      if (world.balls.length && world.status === "play") { S.drop(world); failTimer = 0; }
      break;
    case "undo": if (!S.undo(world)) showToast("Nothing to undo."); break;
    case "hint":
      showHint = !showHint;
      if (showHint) world.usedHint = true;
      break;
    default: break;
  }
}
function press(id, down) {
  if (id === "unravel") { unravelBtn = down; return; }
  if (down) act(id);
}

// what the simulation tells us happened this tick
function handleEvents() {
  for (const ev of world.events) {
    switch (ev.type) {
      case "cinch":
        sndClick();
        spawnWisps(ev.x, ev.y, { count: 18, col: COLORS.threadHi, spd: 100 });
        addShake(3); addFlash(COLORS.threadHi, 0.14);
        cinchPop = { x: ev.x, y: ev.y, t: 0.32 };
        showToast(ev.onPost ? "Knot tied round the post." : "Tied, but there is no post inside that loop.", 2.4);
        break;
      case "nocinch":
        sndNo(); addShake(2);
        showToast("Nothing to tie yet. Loop the yarn round a post and cross your own line.", 3.6);
        break;
      case "drop": sndSnip(); break;
      case "lost":
        sndDrop(); addShake(12); addFlash(COLORS.bad, 0.26); failTimer = 0;
        break;
      case "wrap": {
        sndClick();
        const pg = world.pegs[ev.peg];
        if (pg) spawnWisps(pg.x, pg.y, { count: 12, col: COLORS.threadHi, spd: 70 });
        break;
      }
      case "unravel": sndUnravel(); addFlash(COLORS.plum, 0.1); break;
      case "undo": sndTick(); break;
      default: break;
    }
  }
  world.events.length = 0;
}

// yarn currently sitting in the player's own work (not counting old ghost yarn)
function yarnInWork() {
  const g = world.ghost ? world.ghost.to - world.ghost.from + 1 : 0;
  return Math.max(0, world.nodes.length - 2 - g);
}

function onWon() {
  const room = ROOMS[roomIndex];
  const used = yarnInWork();
  world.shown = used;
  markDone(room, used);
  // save the player's REAL first knot: the rope as they built it, from the first
  // ball room they solved with a tie.
  if (!firstKnot && world.balls.length && world.testSnap && world.testSnap.knots.length > 0 && !room.finale) {
    firstKnot = {
      room: room.id, roomName: room.name,
      nodes: world.testSnap.nodes.map(n => ({ x: Math.round(n.x), y: Math.round(n.y) })),
      knots: world.testSnap.knots.map(k => ({ i: k.i, j: k.j })),
    };
    writeJSON(KNOT_KEY, firstKnot);
  }
  screen = WON; winTimer = 0;
  sndWin(); addFlash(COLORS.good, 0.3); addShake(4);
  const h = S.head(world);
  spawnWisps(h.x, h.y, { count: 20, col: COLORS.threadHi, spd: 110 });
  for (const b of world.balls) spawnWisps(b.x, b.y, { count: 22, col: COLORS.weightHi, spd: 120 });
  if (world.target) spawnWisps(world.target.x, world.target.y, { count: 22, col: COLORS.good, spd: 120 });
}

// ----------------------------------------------------------------------------
// Particles (fiber wisps)
// ----------------------------------------------------------------------------
function spawnWisps(x, y, opts) {
  opts = opts || {};
  const n = opts.count || 12, col = opts.col || COLORS.threadHi, spd = opts.spd || 80;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * TAU, s = spd * (0.4 + Math.random());
    particles.push({
      x: x + (Math.random() - 0.5) * 6, y: y + (Math.random() - 0.5) * 6,
      vx: Math.cos(a) * s, vy: Math.sin(a) * s - 20,
      life: 0.5 + Math.random() * 0.5, max: 1.0, col: col, w: 1.5 + Math.random() * 1.8,
    });
  }
}
function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= dt;
    if (p.life <= 0) { particles.splice(i, 1); continue; }
    p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 200 * dt;
  }
}

// ----------------------------------------------------------------------------
// Hint: the path of the recorded solution (solutions.js), drawn as a dotted line
// ----------------------------------------------------------------------------
function hintFor(room) {
  const sol = K.SOLUTIONS[room.id];
  const out = { lines: [], ties: [], unravelFirst: false };
  if (!sol) return out;
  let lastEnd = [VW * room.anchor[0], VH * room.anchor[1]];
  for (let i = 0; i < sol.length; i++) {
    const st = sol[i];
    if (st.unravel) { if (i === 0) out.unravelFirst = true; continue; }
    if (st.drag) {
      const next = sol[i + 1];
      if (next && next.unravel) continue;           // a wasteful first try, not part of the answer
      const pts = st.drag.slice();
      if (lastEnd) pts.unshift(lastEnd);
      out.lines.push(pts); lastEnd = st.drag[st.drag.length - 1];
    }
    if (st.cinch && lastEnd) out.ties.push(lastEnd);
  }
  return out;
}

// ----------------------------------------------------------------------------
// Coaching line: one short sentence saying what to do next
// ----------------------------------------------------------------------------
function coach() {
  const w = world, room = ROOMS[roomIndex];
  if (!w) return "";
  if (room.finale && w.ghost) {
    return firstKnot ? "The plum yarn is your first knot, from \"" + firstKnot.roomName + "\". Hold UNRAVEL to take its yarn back."
                     : "The plum yarn is an old sample knot. Hold UNRAVEL to take its yarn back.";
  }
  if (w.balls.length) {
    if (w.lost) return "It slipped! Your yarn goes back as you laid it.";
    if (w.phase === "DROPPED") return w.hold > 0.05 ? "Holding... keep your hands off." : "";
    if (w.yarn <= 0) return "Out of yarn. Hold UNRAVEL to take back what you laid.";
    if (cinchHint) return cinchHint.peg >= 0 ? "Loop round a post: press TIE." : "A loop, but no post inside it. Loop round a post.";
    if (w.knots.some(k => !(w.ghost && k.i <= w.ghost.to))) return "Tied. Now press DROP.";
    if (w.nodes.length <= 3 && !w.down) return "Press and drag to lay yarn from the spool.";
    if (w.fails > 0) return "It slipped. Change the yarn, then DROP AGAIN.";
    return "";
  }
  if (w.yarn <= 0) return "Out of yarn. Hold UNRAVEL to take back what you laid.";
  if (w.nodes.length <= 3 && !w.down) return "Press and drag. The loose end follows your finger.";
  if (room.wraps) {
    const got = w.wrapIdx.filter(i => i >= 0).length;
    if (w.wrapsOk && got === room.wraps.length) return "Wrapped. Now reach the stitch.";
    return "Wrapped " + got + " of " + room.wraps.length + (room.wraps.length > 1 ? " in order" : "") + ".";
  }
  return "";
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
let simAcc = 0;
function tickSim() {
  const kb = keyboardSteer();
  const inp = {
    x: kb ? kb.x : pointer.x, y: kb ? kb.y : pointer.y,
    down: pointer.down || !!kb,
    unravel: unravelBtn || unravelMouse || keys.has("u"),
  };
  S.step(world, inp);
}

function update(dt) {
  advanceStopMotion(dt); updateJuice(dt); updateParticles(dt);
  if (toast.t > 0) toast.t -= dt;
  if ((screen !== PLAY && screen !== WON) || !world) return;

  if (world.status === "play") {
    simAcc += dt;
    let guard = 0;
    while (simAcc >= S.DT && guard++ < 6) { tickSim(); simAcc -= S.DT; handleEvents(); if (world.status !== "play") break; }
    if (guard >= 6) simAcc = 0;
    // which loop would TIE tie right now?
    cinchAge += dt;
    if (cinchAge > 0.05 && world.balls.length) {
      cinchAge = 0;
      cinchHint = world.phase === "BUILD" ? S.findCinch(world) : null;
    }
    if (world.lost) { failTimer += dt; if (failTimer > 1.6) { S.toBuild(world); failTimer = 0; } }
    if (world.fails === 2 && world.lost && failTimer < 0.05 && !showHint) showToast("Stuck? Tap HINT to see one way.", 4);
  }
  if (world.status === "won") {
    if (screen === PLAY) onWon();
    winTimer += dt;
  }
}
let cinchAge = 0;

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

function drawAnchor(anchor) {
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


// ----------------------------------------------------------------------------
// Render: the board (world space)
// ----------------------------------------------------------------------------
// Pegs with an order badge when a room asks for posts in sequence.
function drawPegs() {
  const room = ROOMS[roomIndex];
  world.pegs.forEach(drawPeg);
  if (room.wraps && room.wraps.length > 1) {
    room.wraps.forEach((pi, k) => {
      const pg = world.pegs[pi];
      const done = world.wrapIdx[k] >= 0;
      const bx = pg.x - pg.r * 0.9, by = pg.y - pg.r * 0.9, r = wpx(12);
      ctx.fillStyle = done ? COLORS.good : "rgba(28,22,15,0.85)";
      ctx.beginPath(); ctx.arc(bx, by, r, 0, TAU); ctx.fill();
      ctx.strokeStyle = COLORS.panelRim; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = done ? "#20300f" : COLORS.text;
      ctx.font = "bold " + wpx(14) + "px system-ui, sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(String(k + 1), bx, by + 0.5);
    });
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  }
}

function segColor(strain) {
  if (strain > 1.1) return COLORS.threadSnap;
  if (strain > 1.05) return COLORS.threadStrain;
  return COLORS.thread;
}
function sx(n, i) { return n.x + jitter(i * 2.7 + 3) * 0.9; }
function syy(n, i) { return n.y + jitter(i * 2.7 + 9) * 0.9; }

function drawThread() {
  const nodes = world.nodes;
  if (nodes.length < 2) return;
  ctx.lineCap = "round"; ctx.lineJoin = "round";
  const g = world.ghost;
  // halo
  ctx.strokeStyle = COLORS.threadHalo; ctx.lineWidth = 13;
  ctx.beginPath(); ctx.moveTo(sx(nodes[0], 0), syy(nodes[0], 0));
  for (let i = 1; i < nodes.length; i++) ctx.lineTo(sx(nodes[i], i), syy(nodes[i], i));
  ctx.stroke();
  // shadow underside
  ctx.strokeStyle = COLORS.threadLo; ctx.lineWidth = 7.5;
  ctx.beginPath(); ctx.moveTo(sx(nodes[0], 0), syy(nodes[0], 0) + 1.6);
  for (let i = 1; i < nodes.length; i++) ctx.lineTo(sx(nodes[i], i), syy(nodes[i], i) + 1.6);
  ctx.stroke();
  // core, strain tinted; the old knot in the finale reads in plum
  ctx.lineWidth = 6;
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i], b = nodes[i + 1];
    const strain = Math.hypot(b.x - a.x, b.y - a.y) / S.SEG_LEN;
    let col = segColor(strain);
    if (g && i >= g.from - 1 && i <= g.to) col = (i % 2 === 0) ? COLORS.plum : COLORS.yarnBall;
    ctx.strokeStyle = col;
    ctx.beginPath(); ctx.moveTo(sx(a, i), syy(a, i)); ctx.lineTo(sx(b, i + 1), syy(b, i + 1)); ctx.stroke();
  }
  // fiber highlights
  ctx.strokeStyle = COLORS.threadHi; ctx.lineWidth = 1.8;
  for (let i = 0; i < nodes.length - 1; i++) {
    if ((i + stopFrame) % 3 !== 0) continue;
    const a = nodes[i], b = nodes[i + 1];
    const ax = sx(a, i), ay = syy(a, i), bx = sx(b, i + 1), by = syy(b, i + 1);
    const nxv = -(by - ay), nyv = (bx - ax), nl = Math.hypot(nxv, nyv) || 1, off = -2.2;
    ctx.beginPath();
    ctx.moveTo(ax + nxv / nl * off, ay + nyv / nl * off);
    ctx.lineTo((ax + bx) / 2 + nxv / nl * off, (ay + by) / 2 + nyv / nl * off);
    ctx.stroke();
  }
  // knots: chunky beads where two bits of yarn are welded
  for (const k of world.knots) {
    const a = nodes[k.i], b = nodes[k.j];
    if (!a || !b) continue;
    const kx = (a.x + b.x) / 2, ky = (a.y + b.y) / 2, r = S.KNOT_BEAD;
    ctx.fillStyle = COLORS.threadLo; ctx.beginPath(); ctx.arc(kx, ky + 1.5, r, 0, TAU); ctx.fill();
    ctx.fillStyle = COLORS.thread; ctx.beginPath(); ctx.arc(kx, ky, r, 0, TAU); ctx.fill();
    ctx.strokeStyle = COLORS.threadLo; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(kx, ky, r - 3, 0.3, 4.2); ctx.stroke();
    ctx.fillStyle = COLORS.threadHi; ctx.beginPath(); ctx.arc(kx - 2.5, ky - 2.5, 2.4, 0, TAU); ctx.fill();
  }
  // the working end
  const h = nodes[nodes.length - 1];
  const hx = sx(h, nodes.length - 1), hy = syy(h, nodes.length - 1);
  ctx.fillStyle = COLORS.threadHi; ctx.beginPath(); ctx.arc(hx, hy, 6.5, 0, TAU); ctx.fill();
  ctx.fillStyle = "#fff3df"; ctx.beginPath(); ctx.arc(hx - 1.5, hy - 1.5, 2, 0, TAU); ctx.fill();
}

// A felt ball on a cord from a little wooden hook; the cord is cut on Drop.
function drawBalls() {
  const room = ROOMS[roomIndex];
  for (const b of world.balls) {
    // hook + cord
    ctx.fillStyle = COLORS.peg;
    roundRect(b.hx - 14, -6, 28, 14, 5); ctx.fill();
    ctx.strokeStyle = COLORS.pegHi; ctx.lineWidth = 1.5; roundRect(b.hx - 14, -6, 28, 14, 5); ctx.stroke();
    ctx.strokeStyle = COLORS.threadLo; ctx.lineWidth = 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(b.hx, 6);
    if (b.state === "hook") ctx.lineTo(b.hx, b.hy - b.r + 2);
    else ctx.lineTo(b.hx + 3, 26);
    ctx.stroke();
    if (b.state !== "hook") {
      // where it will go back to on DROP AGAIN
      ctx.strokeStyle = "rgba(241,230,209,0.28)"; ctx.lineWidth = 2; ctx.setLineDash([5, 6]);
      ctx.beginPath(); ctx.arc(b.hx, b.hy, b.r, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
    }
    if (b.state === "lost") continue;
    drawBall(b);
    // hold progress ring
    if (world.hold > 0.05 && world.status === "play") {
      ctx.strokeStyle = COLORS.good; ctx.lineWidth = 4; ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r + 8, -Math.PI / 2, -Math.PI / 2 + TAU * Math.min(1, world.hold / world.holdGoal));
      ctx.stroke();
    } else if (world.status === "won") {
      ctx.strokeStyle = COLORS.good; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r + 8, 0, TAU); ctx.stroke();
    }
  }
}
function drawBall(b) {
  const wob = jitter(40) * 0.06, nx = jitter(41) * 0.7, ny = jitter(42) * 0.7;
  ctx.save();
  ctx.translate(b.x + nx, b.y + ny); ctx.rotate(wob);
  const r = b.r;
  ctx.fillStyle = COLORS.pegShadow;
  ctx.beginPath(); ctx.ellipse(2, 4, r, r * 0.95, 0, 0, TAU); ctx.fill();
  const grad = ctx.createRadialGradient(-r * 0.35, -r * 0.4, r * 0.2, 0, 0, r);
  grad.addColorStop(0, COLORS.weightHi); grad.addColorStop(1, COLORS.weight);
  ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill();
  ctx.strokeStyle = COLORS.weightRim; ctx.lineWidth = 1.2;
  for (let a = 0; a < 22; a++) {
    const ang = a / 22 * TAU + jitter(50 + a) * 0.1;
    const r0 = r - 1, r1 = r + 1.6 + jitter(70 + a) * 1.2;
    ctx.beginPath(); ctx.moveTo(Math.cos(ang) * r0, Math.sin(ang) * r0); ctx.lineTo(Math.cos(ang) * r1, Math.sin(ang) * r1); ctx.stroke();
  }
  ctx.strokeStyle = COLORS.weightSeam; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.arc(0, 0, r - 5, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
  ctx.beginPath(); ctx.moveTo(-r + 5, 0); ctx.lineTo(r - 5, 0); ctx.moveTo(0, -r + 5); ctx.lineTo(0, r - 5); ctx.stroke();
  ctx.restore();
}

// the stitch to reach
function drawTarget() {
  if (!world.target) return;
  const t = world.target, pulse = 1 + Math.sin(stopFrame * 0.7) * 0.12, r = 18 * pulse;
  ctx.save(); ctx.translate(t.x, t.y);
  ctx.strokeStyle = world.reached ? COLORS.good : COLORS.threadHi; ctx.lineWidth = 3;
  ctx.setLineDash([6, 6]); ctx.lineDashOffset = stopFrame * 2;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = world.reached ? COLORS.good : COLORS.thread;
  ctx.beginPath(); ctx.arc(0, 0, 5, 0, TAU); ctx.fill();
  ctx.restore();
}

// the loop TIE would tie: gold wash over the loop, a ring where the yarn crosses
function drawCinchHint() {
  const c = cinchHint;
  if (!c || world.status !== "play") return;
  const nodes = world.nodes, pulse = 0.5 + 0.5 * Math.sin(stopFrame * 0.9);
  ctx.save();
  ctx.beginPath(); ctx.moveTo(c.x, c.y);
  for (let i = c.from; i <= c.to; i++) ctx.lineTo(nodes[i].x, nodes[i].y);
  ctx.closePath();
  const good = c.peg >= 0, tone = good ? COLORS.threadStrain : "#9a8f7a";
  ctx.fillStyle = good ? "rgba(231,194,74," + (0.12 + pulse * 0.1) + ")" : "rgba(180,170,150,0.1)"; ctx.fill();
  ctx.strokeStyle = tone; ctx.lineWidth = 3; ctx.setLineDash([7, 6]); ctx.lineDashOffset = -stopFrame * 3;
  ctx.stroke(); ctx.setLineDash([]);
  ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.arc(c.x, c.y, 13 + pulse * 5, 0, TAU); ctx.stroke();
  if (c.peg >= 0) {
    const pg = world.pegs[c.peg];
    ctx.beginPath(); ctx.arc(pg.x, pg.y, pg.r + 7 + pulse * 3, 0, TAU); ctx.stroke();
  }
  ctx.font = "bold " + wpx(15) + "px system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  const ty = c.y - 46 - pulse * 3, label = !good ? "no post inside" : COARSE ? "TIE here" : "TIE here (Space)";
  const tw = ctx.measureText(label).width + 18;
  ctx.fillStyle = "rgba(28,22,15,0.85)"; roundRect(c.x - tw / 2, ty - wpx(11), tw, wpx(22), 10); ctx.fill();
  ctx.fillStyle = tone; ctx.fillText(label, c.x, ty);
  ctx.restore();
}

function drawHintPath() {
  if (!showHint) return;
  const h = hintFor(ROOMS[roomIndex]);
  ctx.save();
  ctx.strokeStyle = "rgba(167,210,122,0.9)"; ctx.lineWidth = 3.5; ctx.lineCap = "round"; ctx.lineJoin = "round";
  ctx.setLineDash([2, 9]); ctx.lineDashOffset = -stopFrame * 2;
  for (const line of h.lines) {
    ctx.beginPath(); ctx.moveTo(line[0][0], line[0][1]);
    for (let i = 1; i < line.length; i++) ctx.lineTo(line[i][0], line[i][1]);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  ctx.fillStyle = COLORS.good; ctx.font = "bold " + wpx(15) + "px system-ui, sans-serif";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  for (const t of h.ties) {
    ctx.beginPath(); ctx.arc(t[0], t[1], 7, 0, TAU); ctx.fill();
    ctx.fillText("tie here", t[0], t[1] + wpx(20));
  }
  if (h.unravelFirst) {
    ctx.fillText("first: hold UNRAVEL until the plum yarn is gone", VW / 2, VH * 0.9);
  }
  ctx.restore(); ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
}

function drawCinchPop() {
  if (!cinchPop) return;
  const k = 1 - cinchPop.t / 0.32;
  ctx.save(); ctx.globalAlpha = (1 - k) * 0.8; ctx.strokeStyle = COLORS.threadHi; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(cinchPop.x, cinchPop.y, 6 + k * 26, 0, TAU); ctx.stroke(); ctx.restore();
}

function drawParticles() {
  for (const p of particles) {
    ctx.globalAlpha = Math.max(0, p.life / p.max) * 0.85;
    ctx.strokeStyle = p.col; ctx.lineWidth = p.w; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 0.045, p.y - p.vy * 0.045); ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

// the little in-world prompt (fades once the player has done what it asks)
function drawTeach() {
  const room = ROOMS[roomIndex];
  if (!room.teach || screen !== PLAY) return;
  let alpha = 1;
  if (world.target && world.reached) alpha = 0;
  if (room.wraps && world.wrapsOk) alpha = 0.25;
  if (world.balls.length && (world.knots.length || world.phase === "DROPPED")) alpha = 0;
  if (alpha <= 0.02) return;
  const tx = VW * room.teach.at[0], ty = VH * room.teach.at[1], bob = Math.sin(stopFrame * 0.5) * 3;
  ctx.save(); ctx.globalAlpha = alpha;
  ctx.font = "italic " + wpx(16) + "px Georgia, serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  const w = ctx.measureText(room.teach.text).width + 22, h = wpx(16) * 2;
  ctx.fillStyle = "rgba(28,22,15,0.7)"; roundRect(tx - w / 2, ty - h / 2 + bob, w, h, 14); ctx.fill();
  ctx.fillStyle = COLORS.text; ctx.fillText(room.teach.text, tx, ty + bob);
  ctx.restore(); ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
}

// a ring where the finger/pointer is (so a fingertip never hides the action)
function drawPointer() {
  if (!(pointer.down && screen === PLAY)) return;
  ctx.strokeStyle = "rgba(241,230,209,0.5)"; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(pointer.x, pointer.y, wpx(14), 0, TAU); ctx.stroke();
}

function drawBoard() {
  ctx.save();
  ctx.translate(view.ox, view.oy); ctx.scale(view.s, view.s);
  roundRect(0, 0, VW, VH, 18); ctx.clip();
  if (shakeAmt > 0) ctx.translate(jitter(900) * shakeAmt, jitter(901) * shakeAmt);
  clearBg();
  if (world) {
    drawTarget();
    drawAnchor(world.anchor);
    drawPegs();
    drawCinchHint();
    drawBalls();
    drawThread();
    drawHintPath();
    drawCinchPop();
    drawPointer();
    drawParticles();
    drawTeach();
  }
  ctx.restore();
  // frame
  ctx.save(); ctx.strokeStyle = "rgba(214,178,110,0.25)"; ctx.lineWidth = 2;
  ctx.translate(view.ox, view.oy); ctx.scale(view.s, view.s);
  roundRect(0, 0, VW, VH, 18); ctx.stroke(); ctx.restore();
}


// ----------------------------------------------------------------------------
// UI helpers (screen space, real CSS pixels)
// ----------------------------------------------------------------------------
function fontSize() { return view.W >= 1000 ? 17 : 15; }

function wrapLines(str, maxW, font) {
  ctx.font = font;
  const words = String(str).split(" "), lines = [];
  let cur = "";
  for (const w of words) {
    const t = cur ? cur + " " + w : w;
    if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}
// text with a soft dark backing so it reads on top of the knit cloth
function pillLines(lines, x, y, font, color, lh, align) {
  ctx.font = font; ctx.textBaseline = "middle";
  let maxW = 0;
  for (const l of lines) maxW = Math.max(maxW, ctx.measureText(l).width);
  const padX = 10, padY = 5, h = lines.length * lh + padY * 2 - (lh - 14) / 2;
  const bx = align === "center" ? x - maxW / 2 - padX : x - padX;
  ctx.fillStyle = "rgba(24,18,12,0.72)";
  roundRect(bx, y - padY, maxW + padX * 2, h, 10); ctx.fill();
  ctx.fillStyle = color; ctx.textAlign = align === "center" ? "center" : "left";
  lines.forEach((l, i) => ctx.fillText(l, x, y + lh / 2 + i * lh - 1));
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  return h;
}
function panelAt(cx, cy, w, h) {
  const x = cx - w / 2, y = cy - h / 2;
  ctx.fillStyle = COLORS.panel; ctx.strokeStyle = COLORS.panelRim; ctx.lineWidth = 1.5;
  roundRect(x, y, w, h, 18); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = "rgba(214,178,110,0.22)"; ctx.setLineDash([5, 5]);
  roundRect(x + 7, y + 7, w - 14, h - 14, 14); ctx.stroke(); ctx.setLineDash([]);
  return { x: x, y: y };
}

function drawButton(b) {
  const held = b.hold && (unravelBtn || unravelMouse || keys.has("u"));
  const pulse = b.pulse ? 0.5 + 0.5 * Math.sin(performance.now() / 180) : 0;
  ctx.save();
  ctx.globalAlpha = b.enabled === false ? 0.38 : 1;
  let fill = "#4d3d2c";
  if (b.kind === "primary") fill = "#6f8a48";
  else if (b.kind === "accent") fill = "#8a4f6f";
  if (held) fill = "#b06a90";
  const grad = ctx.createLinearGradient(0, b.y, 0, b.y + b.h);
  grad.addColorStop(0, lighten(fill, 22)); grad.addColorStop(1, fill);
  ctx.fillStyle = "rgba(10,7,3,0.4)"; roundRect(b.x + 1, b.y + 3, b.w, b.h, 13); ctx.fill();
  ctx.fillStyle = grad; roundRect(b.x, b.y, b.w, b.h, 13); ctx.fill();
  ctx.strokeStyle = pulse ? "rgba(231,194,74," + (0.5 + pulse * 0.5) + ")" : "rgba(214,178,110,0.4)";
  ctx.lineWidth = pulse ? 3 : 1.5; roundRect(b.x, b.y, b.w, b.h, 13); ctx.stroke();
  ctx.strokeStyle = "rgba(241,230,209,0.22)"; ctx.lineWidth = 1.2; ctx.setLineDash([4, 4]);
  roundRect(b.x + 5, b.y + 5, b.w - 10, b.h - 10, 9); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = COLORS.text; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  let big = b.big ? 18 : 15;
  ctx.font = "bold " + big + "px system-ui, sans-serif";
  while (big > 11 && ctx.measureText(b.label).width > b.w - 18) { big--; ctx.font = "bold " + big + "px system-ui, sans-serif"; }
  const showSub = b.sub && !COARSE && b.h >= 54;
  ctx.font = "bold " + big + "px system-ui, sans-serif";
  ctx.fillText(b.label, b.x + b.w / 2, b.y + b.h / 2 - (showSub ? 7 : 0));
  if (showSub) {
    ctx.font = "11px system-ui, sans-serif"; ctx.fillStyle = "rgba(241,230,209,0.7)";
    ctx.fillText(b.sub, b.x + b.w / 2, b.y + b.h / 2 + 11);
  }
  ctx.restore(); ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
}
function lighten(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, (n >> 16) + amt), g = Math.min(255, ((n >> 8) & 255) + amt), b = Math.min(255, (n & 255) + amt);
  return "rgb(" + r + "," + g + "," + b + ")";
}

// ----------------------------------------------------------------------------
// Buttons per screen
// ----------------------------------------------------------------------------
function playButtons() {
  const w = world, hasBall = w.balls.length > 0;
  const dropLabel = w.drops > 0 ? "Drop again" : "Drop";
  const list = [];
  const mk = (id, label, sub, extra) => list.push(Object.assign({ id: id, label: label, sub: sub, enabled: w.status === "play" }, extra || {}));
  const canUndo = w.undo.length > 0;
  const canUnravel = w.nodes.length > 2;
  const lostPulse = hasBall && (w.lost || (w.phase === "BUILD" && w.knots.length > 0 && !cinchHint));
  const tiePulse = !!cinchHint && cinchHint.peg >= 0;
  if (view.mode === "side") {
    const bw = Math.max(80, Math.min(128, view.ox - 14));
    const lx = Math.max(6, view.ox - bw - 7), rx = view.ox + VW * view.s + 7;
    const gap = 8;
    // left column: edit tools. right column: the two big actions, then menu
    const left = [["undo", "Undo", "Z", { enabled: canUndo && w.status === "play" }],
                  ["unravel", "Unravel", "hold U", { hold: true, enabled: canUnravel && w.status === "play" }],
                  ["restart", "Restart", "R", { enabled: true }],
                  ["hint", showHint ? "Hide hint" : "Hint", "H", { enabled: w.status === "play" }]];
    const nl = left.length;
    const bh = Math.max(48, Math.min(64, (view.H - 16 - gap * (nl - 1)) / nl));
    let y = 8;
    left.forEach(c => { mk(c[0], c[1], c[2], Object.assign({ x: lx, y: y, w: bw, h: bh }, c[3])); y += bh + gap; });
    // right column
    const rb = [];
    if (hasBall) {
      rb.push(["drop", dropLabel, "Enter", { kind: "primary", big: true, pulse: lostPulse, hh: 1.5 }]);
      rb.push(["tie", "Tie", "Space", { kind: "accent", big: true, pulse: tiePulse, hh: 1.5 }]);
    }
    const small = [["rooms", "Menu", "Esc", { enabled: true }], ["mute", muted ? "Sound off" : "Sound on", "M", { enabled: true }]];
    const totalH = view.H - 16;
    const smallH = Math.max(44, Math.min(56, bh));
    const bigH = hasBall ? Math.min(84, (totalH - smallH * 2 - gap * 3) / 2) : 0;
    let ry = 8;
    rb.forEach(c => { mk(c[0], c[1], c[2], Object.assign({ x: rx, y: ry, w: bw, h: bigH }, c[3])); ry += bigH + gap; });
    let sy = view.H - 8 - smallH * 2 - gap;
    small.forEach(c => { mk(c[0], c[1], c[2], Object.assign({ x: rx, y: sy, w: bw, h: smallH }, c[3])); sy += smallH + gap; });
  } else {
    const items = [["rooms", "Menu", { enabled: true }], ["undo", "Undo", { enabled: canUndo && w.status === "play" }],
                   ["unravel", "Unravel", { hold: true, enabled: canUnravel && w.status === "play" }],
                   ["restart", "Restart", { enabled: true }], ["hint", showHint ? "Hide" : "Hint", { enabled: w.status === "play" }]];
    if (hasBall) { items.push(["tie", "Tie", { kind: "accent", pulse: tiePulse }]); items.push(["drop", dropLabel, { kind: "primary", pulse: lostPulse }]); }
    const n = items.length, gap = 6, bh = 60, bw = Math.min(150, (view.W - 12 - gap * (n - 1)) / n);
    const total = bw * n + gap * (n - 1);
    let x = (view.W - total) / 2;
    items.forEach(c => { mk(c[0], c[1], "", Object.assign({ x: x, y: view.H - bh - 8, w: bw, h: bh }, c[2])); x += bw + gap; });
  }
  return list;
}

// after a win: the board stays in view; Next / Replay take over the big buttons
function wonButtons() {
  const list = [];
  const last = roomIndex >= ROOMS.length - 1;
  const mk = (id, label, sub, extra) => list.push(Object.assign({ id: id, label: label, sub: sub }, extra));
  const ready = winTimer > 0.4;
  if (view.mode === "side") {
    const bw = Math.max(80, Math.min(128, view.ox - 14));
    const rx = view.ox + VW * view.s + 7, gap = 8;
    const bigH = Math.min(84, (view.H - 16 - 44 * 2 - gap * 3) / 2);
    mk("next", last ? "Finish" : "Next room", "Enter", { x: rx, y: 8, w: bw, h: bigH, kind: "primary", big: true, pulse: ready, enabled: ready });
    mk("replay", "Replay", "R", { x: rx, y: 8 + bigH + gap, w: bw, h: bigH });
    mk("rooms", "Menu", "Esc", { x: rx, y: view.H - 8 - 44 * 2 - gap, w: bw, h: 44 });
    mk("mute", muted ? "Sound off" : "Sound on", "M", { x: rx, y: view.H - 8 - 44, w: bw, h: 44 });
  } else {
    const n = 3, gap = 6, bh = 60, bw = Math.min(170, (view.W - 12 - gap * (n - 1)) / n);
    let x = (view.W - (bw * n + gap * (n - 1))) / 2;
    mk("rooms", "Menu", "", { x: x, y: view.H - bh - 8, w: bw, h: bh }); x += bw + gap;
    mk("replay", "Replay", "", { x: x, y: view.H - bh - 8, w: bw, h: bh }); x += bw + gap;
    mk("next", last ? "Finish" : "Next room", "", { x: x, y: view.H - bh - 8, w: bw, h: bh, kind: "primary", pulse: ready, enabled: ready });
  }
  return list;
}

function buildButtons() {
  const list = [];
  const add = (b) => list.push(b);
  const cx = view.W / 2;
  if (screen === TITLE) {
    const open = firstOpenIndex(), started = doneIds.length > 0;
    const label = doneIds.length >= ROOMS.length ? "Play again" : started ? "Continue: room " + (open + 1) : "Play";
    add({ id: "continue", label: label, x: cx - 140, y: view.H / 2 + 24, w: 280, h: 58, kind: "primary", big: true, sub: "Enter", pulse: false });
    add({ id: "rooms", label: "Rooms", x: cx - 140, y: view.H / 2 + 24 + 68, w: 280, h: 52, sub: "", big: false });
    add({ id: "mute", label: muted ? "Sound off" : "Sound on", x: view.W - 120, y: 10, w: 108, h: 44 });
  } else if (screen === SELECT) {
    add({ id: "title", label: "Back", x: 12, y: 12, w: 96, h: 48, sub: "Esc" });
    add({ id: "mute", label: muted ? "Sound off" : "Sound on", x: view.W - 120, y: 12, w: 108, h: 48 });
    const cols = Math.max(2, Math.min(4, Math.floor((view.W - 24) / 190)));
    const cw = Math.min(210, (view.W - 24 - 10 * (cols - 1)) / cols);
    const ch = view.H < 520 ? 64 : 78;
    const gridW = cols * cw + (cols - 1) * 10, x0 = (view.W - gridW) / 2;
    const rows = Math.ceil(ROOMS.length / cols);
    const y0 = view.H < 520 ? 72 : 110;
    ROOMS.forEach((r, i) => {
      const c = i % cols, rr = Math.floor(i / cols);
      add({ id: "room:" + i, label: "", x: x0 + c * (cw + 10), y: y0 + rr * (ch + 10), w: cw, h: ch, enabled: unlocked(i), card: i });
    });
  } else if (screen === PLAY && world) {
    playButtons().forEach(add);
  } else if (screen === WON && world) {
    wonButtons().forEach(add);
  } else if (screen === END) {
    add({ id: "rooms", label: "Back to rooms", x: cx - 130, y: view.H / 2 + 80, w: 260, h: 56, kind: "primary", big: true });
  }
  uiButtons = list;
}

// ----------------------------------------------------------------------------
// HUD (play)
// ----------------------------------------------------------------------------
function drawYarnBall() {
  const bx = view.ox, by = view.oy, bw = VW * view.s;
  const mx = bx + bw - 46, my = by + 46, R = 26;
  const frac = Math.max(0, Math.min(1, world.yarn / Math.max(1, world.yarnCap)));
  ctx.fillStyle = "rgba(24,18,12,0.6)"; ctx.beginPath(); ctx.arc(mx, my, R + 9, 0, TAU); ctx.fill();
  ctx.lineWidth = 7; ctx.strokeStyle = COLORS.yarnBack; ctx.beginPath(); ctx.arc(mx, my, R, 0, TAU); ctx.stroke();
  ctx.strokeStyle = world.yarn <= 0 ? COLORS.bad : COLORS.yarnBall; ctx.lineCap = "round";
  ctx.beginPath(); ctx.arc(mx, my, R, -Math.PI / 2, -Math.PI / 2 + TAU * frac); ctx.stroke(); ctx.lineCap = "butt";
  const bg = ctx.createRadialGradient(mx - 6, my - 6, 3, mx, my, R - 8);
  bg.addColorStop(0, COLORS.yarnBallHi); bg.addColorStop(1, COLORS.yarnBall);
  ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(mx, my, R - 9, 0, TAU); ctx.fill();
  ctx.fillStyle = "#2a1620"; ctx.font = "bold 15px system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(String(Math.max(0, world.yarn)), mx, my + 1);
  ctx.fillStyle = COLORS.textDim; ctx.font = "11px system-ui, sans-serif"; ctx.textBaseline = "alphabetic";
  ctx.fillText("YARN", mx, my + R + 17);
}

function drawRoomLabel() {
  const room = ROOMS[roomIndex];
  const bx = view.ox, by = view.oy, bh = VH * view.s;
  ctx.textAlign = "left";
  const lab = "Room " + (roomIndex + 1) + " of " + ROOMS.length + "  ·  " + K.CHAPTERS[room.chapter] + "  ·  " + room.name;
  pillLines([lab], bx + 14, by + bh - 30, "12px system-ui, sans-serif", COLORS.textDim, 16);
}

function drawHUD() {
  if (screen === WON) { drawWonBanner(); drawYarnBall(); drawRoomLabel(); return; }
  const room = ROOMS[roomIndex];
  const bx = view.ox, by = view.oy, bw = VW * view.s, bh = VH * view.s;
  const fs = fontSize();
  const maxW = bw - 120;
  // goal + coaching, top-left of the board
  let y = by + 8;
  const goal = wrapLines(room.goal, maxW, "bold " + fs + "px system-ui, sans-serif");
  y += pillLines(goal, bx + 14, y, "bold " + fs + "px system-ui, sans-serif", COLORS.text, fs + 5) + 4;
  const c = coach();
  if (c) {
    const cl = wrapLines(c, maxW, fs - 1 + "px system-ui, sans-serif");
    const alert = world.lost || world.yarn <= 0;
    pillLines(cl, bx + 14, y, fs - 1 + "px system-ui, sans-serif", alert ? "#f0a58c" : COLORS.threadStrain, fs + 4);
  }
  drawYarnBall();
  drawRoomLabel();
  // toast
  if (toast.t > 0) {
    const lines = wrapLines(toast.text, bw - 40, fs + "px system-ui, sans-serif");
    ctx.globalAlpha = Math.min(1, toast.t * 2);
    pillLines(lines, bx + bw / 2, by + bh - 36 - lines.length * (fs + 5) - 34, fs + "px system-ui, sans-serif", COLORS.text, fs + 5, "center");
    ctx.globalAlpha = 1;
  }
  // failure card: a reason and the next step
  if (world.lost && world.status === "play") {
    const t = Math.min(1, failTimer * 4);
    ctx.globalAlpha = t;
    const w = Math.min(380, bw - 40), h = 74, x = bx + bw / 2 - w / 2, yy = by + bh * 0.5 - h / 2;
    ctx.fillStyle = "rgba(40,16,12,0.88)"; roundRect(x, yy, w, h, 14); ctx.fill();
    ctx.strokeStyle = "rgba(207,106,79,0.8)"; ctx.lineWidth = 2; roundRect(x, yy, w, h, 14); ctx.stroke();
    ctx.textAlign = "center"; ctx.fillStyle = "#f0a58c"; ctx.font = "bold 20px Georgia, serif";
    ctx.fillText("It slipped!", bx + bw / 2, yy + 30);
    ctx.fillStyle = COLORS.text; ctx.font = "14px system-ui, sans-serif";
    ctx.fillText("Putting your yarn back as you laid it...", bx + bw / 2, yy + 54);
    ctx.globalAlpha = 1; ctx.textAlign = "left";
  }
  if (DEBUG) {
    ctx.fillStyle = "#9fe"; ctx.font = "12px monospace";
    ctx.fillText("nodes " + world.nodes.length + " knots " + world.knots.length + " yarn " + world.yarn + " hold " + world.hold.toFixed(2) + " " + world.phase, bx + 10, by + bh - 50);
  }
}

// ----------------------------------------------------------------------------
// Screens
// ----------------------------------------------------------------------------
function drawFrameBg() {
  ctx.fillStyle = "#17120d"; ctx.fillRect(0, 0, view.W, view.H);
}

function drawTitle() {
  drawBoard();
  ctx.fillStyle = "rgba(20,15,9,0.55)"; ctx.fillRect(view.ox, view.oy, VW * view.s, VH * view.s);
  const cx = view.W / 2, cy = view.H / 2;
  const compact = view.H < 520;
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.thread; ctx.font = "bold " + (compact ? 44 : 60) + "px Georgia, serif";
  ctx.fillText("Knit One", cx, cy - (compact ? 40 : 70));
  ctx.fillStyle = COLORS.text; ctx.font = (compact ? 16 : 19) + "px system-ui, sans-serif";
  ctx.fillText("Lay yarn. Tie a knot. Catch the ball.", cx, cy - (compact ? 8 : 30));
  ctx.fillStyle = COLORS.textDim; ctx.font = "14px system-ui, sans-serif";
  const done = doneIds.length;
  if (done > 0) ctx.fillText(done + " of " + ROOMS.length + " rooms done", cx, cy + (compact ? 14 : 4));
  ctx.textAlign = "left";
}

function drawSelect() {
  drawFrameBg();
  const compact = view.H < 520;
  ctx.textAlign = "center"; ctx.fillStyle = COLORS.thread; ctx.font = "bold " + (compact ? 26 : 34) + "px Georgia, serif";
  ctx.fillText("Rooms", view.W / 2, compact ? 44 : 58);
  ctx.fillStyle = COLORS.textDim; ctx.font = "14px system-ui, sans-serif";
  if (!compact) ctx.fillText(doneIds.length + " of " + ROOMS.length + " done", view.W / 2, 82);
  for (const b of uiButtons) {
    if (b.card === undefined) continue;
    const i = b.card, r = ROOMS[i], done = isDone(r.id), open = unlocked(i);
    ctx.save(); ctx.globalAlpha = open ? 1 : 0.4;
    ctx.fillStyle = done ? "#41522b" : open ? "#4d3d2c" : "#30271d";
    roundRect(b.x, b.y, b.w, b.h, 13); ctx.fill();
    ctx.strokeStyle = i === firstOpenIndex() && !done ? COLORS.threadStrain : "rgba(214,178,110,0.35)";
    ctx.lineWidth = i === firstOpenIndex() && !done ? 2.5 : 1.5; roundRect(b.x, b.y, b.w, b.h, 13); ctx.stroke();
    ctx.strokeStyle = "rgba(241,230,209,0.2)"; ctx.setLineDash([4, 4]); roundRect(b.x + 5, b.y + 5, b.w - 10, b.h - 10, 9); ctx.stroke(); ctx.setLineDash([]);
    ctx.textAlign = "left"; ctx.fillStyle = COLORS.threadHi; ctx.font = "bold 22px Georgia, serif";
    ctx.fillText(String(i + 1), b.x + 14, b.y + b.h / 2 + 8);
    ctx.fillStyle = COLORS.text; ctx.font = "bold 14px system-ui, sans-serif";
    const nameLines = wrapLines(r.name, b.w - 70, "bold 14px system-ui, sans-serif");
    nameLines.slice(0, 2).forEach((l, k) => ctx.fillText(l, b.x + 46, b.y + 24 + k * 17));
    ctx.fillStyle = COLORS.textDim; ctx.font = "11px system-ui, sans-serif";
    ctx.fillText(open ? K.CHAPTERS[r.chapter] : "locked", b.x + 46, b.y + b.h - 12);
    if (done) { ctx.fillStyle = COLORS.good; ctx.font = "bold 18px system-ui, sans-serif"; ctx.textAlign = "right"; ctx.fillText("✓", b.x + b.w - 12, b.y + 24); }
    ctx.restore();
  }
  ctx.textAlign = "left";
  uiButtons.forEach(b => { if (b.card === undefined) drawButton(b); });
}

// the win banner sits where the goal text was; the board stays fully visible so the
// player can enjoy the ball held in the sling
function drawWonBanner() {
  const room = ROOMS[roomIndex];
  const bx = view.ox, by = view.oy, bw = VW * view.s;
  const fs = fontSize();
  const t = Math.min(1, winTimer * 3);
  ctx.globalAlpha = t;
  let y = by + 8;
  ctx.font = "bold 30px Georgia, serif";
  y += pillLines([world.target ? "Reached!" : "It holds!"], bx + 14, y, "bold 30px Georgia, serif", COLORS.good, 38) + 4;
  const msg = world.target ? "You got the yarn to the stitch." :
              world.balls.length > 1 ? "One length of yarn holds both balls. Hands off." : "The knot holds the ball. Hands off.";
  const best = bestYarn[room.id], used = world.shown;
  const stat = (world.target ? "Yarn used: " : "Yarn in your knot: ") + used +
               (best !== undefined && best < used ? " (your best: " + best + ")" : best === used ? " (your best)" : "") +
               (world.usedHint ? "  ·  hint used" : "");
  const lines = wrapLines(msg + " " + stat, bw - 140, fs + "px system-ui, sans-serif");
  pillLines(lines, bx + 14, y, fs + "px system-ui, sans-serif", COLORS.text, fs + 5);
  ctx.globalAlpha = 1;
}

function drawEnd() {
  drawBoard();
  ctx.fillStyle = "rgba(20,15,9,0.7)"; ctx.fillRect(0, 0, view.W, view.H);
  const cx = view.W / 2, cy = view.H / 2, w = Math.min(560, view.W - 24), h = 300;
  const p = panelAt(cx, cy, w, h);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.good; ctx.font = "bold 44px Georgia, serif";
  ctx.fillText("Bound off!", cx, p.y + 70);
  ctx.fillStyle = COLORS.text; ctx.font = "17px system-ui, sans-serif";
  ctx.fillText("You worked every room of Knit One,", cx, p.y + 112);
  ctx.fillText(firstKnot && firstKnot.room ? "and unravelled your very first knot (" + firstKnot.roomName + ")" : "and unravelled an old sample knot", cx, p.y + 138);
  ctx.fillText("to finish it.", cx, p.y + 164);
  ctx.textAlign = "left";
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function drawFlash() {
  if (flash.a <= 0) return;
  ctx.save(); ctx.globalAlpha = Math.min(1, flash.a); ctx.fillStyle = flash.col;
  ctx.fillRect(0, 0, view.W, view.H); ctx.restore();
}

function render() {
  drawFrameBg();
  buildButtons();
  if (screen === TITLE) { drawTitle(); }
  else if (screen === SELECT) { drawSelect(); drawFlash(); return; }
  else if (screen === END) { drawEnd(); }
  else if (world) {
    drawBoard(); drawHUD();
    if (view.mode === "bottom" && screen === PLAY && view.H > view.W) {
      ctx.fillStyle = COLORS.textDim; ctx.font = "12px system-ui, sans-serif"; ctx.textAlign = "center";
      ctx.fillText("Turn your phone sideways for a bigger board.", view.W / 2, view.H - 80); ctx.textAlign = "left";
    }
  }
  uiButtons.forEach(b => { if (b.card === undefined) drawButton(b); });
  drawFlash();
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastT = performance.now();
function frame(now) {
  let dt = (now - lastT) / 1000;
  lastT = now;
  if (dt > MAX_DT) dt = MAX_DT;
  if (dt < 0) dt = 0;
  update(dt);
  render();
  requestAnimationFrame(frame);
}

// Boot: a scene behind the title, then the title.
resize();
startRoom(0);
screen = TITLE;
requestAnimationFrame(frame);

// handy for dev/testing from the console
window.__knit = {
  get world() { return world; }, get screen() { return screen; }, get view() { return view; },
  startRoom: startRoom, act: act, get doneIds() { return doneIds; }, get firstKnot() { return firstKnot; },
};


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

// The single palette / source of truth for rendering colors (SCAF-03 seed).
const COLORS = {
  bg: "#101216",
  room: "#181b21",
  wall: "#3a4150",
  outline: "#cfd6e0",
  outlineDim: "#5a6172",
  player: "#eef2f8",
  guard: "#ff6f6f",
  guardCalm: "#d98a8a",
  ring: "#ffffff",
  exit: "#7bffb0",
  distract: "#ffd27a",
  meterCool: "#9fe0ff",
  meterWarm: "#ff9f1c",
  meterHot: "#ff4d4d",
  threshold: "#ffd27a",
  text: "#e8eaed",
  textDim: "#8a93a3",
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

  // Guard.
  GUARD_THRESHOLD: 35, // meter must be >= this for a ring to "catch"
  GUARD_R: 13,
  GUARD_SPEED: 95, // patrol / lured movement speed
  GUARD_LURE_TIME: 4.2, // sec the guard chases a distraction before returning
};

// Screen / state machine.
const TITLE = "title";
const PLAYING = "playing";
const CAUGHT = "caught";
const CLEARED = "cleared";

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
let audioReady = false;

function startAudio() {
  if (audioReady) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  audioCtx = new AC();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.5;
  masterGain.connect(audioCtx.destination);

  // A very quiet low tension drone (mostly a Phase-2 thing; seeded here).
  droneOsc = audioCtx.createOscillator();
  droneOsc.type = "sine";
  droneOsc.frequency.value = 58;
  droneGain = audioCtx.createGain();
  droneGain.gain.value = 0.0;
  droneOsc.connect(droneGain);
  droneGain.connect(masterGain);
  droneOsc.start();

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

function sfxStep() { blip(180 + Math.random() * 30, 0.07, "sine", 0.08); }
function sfxDoor() { noiseBurst(0.18, 0.35); blip(90, 0.2, "sawtooth", 0.12); }
function sfxThrow() { noiseBurst(0.3, 0.5); blip(70, 0.35, "square", 0.18); }
function sfxCaught() { blip(120, 0.6, "sawtooth", 0.3); blip(180, 0.6, "square", 0.2); noiseBurst(0.5, 0.4); }
function sfxClear() { blip(523, 0.18, "sine", 0.22); setTimeout(() => blip(784, 0.3, "sine", 0.22), 130); }

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
    startLevel();
  } else if (state.screen === CAUGHT && k === "r") {
    startLevel();
  } else if (state.screen === CLEARED && (k === "enter" || k === "r")) {
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
  if (state.screen === TITLE) startLevel();
  else if (state.screen === CAUGHT) startLevel();
  else if (state.screen === CLEARED) state.screen = TITLE;
});

// ----------------------------------------------------------------------------
// Level — one forced spend-big grey-box room (LEVEL-03 proto).
//
// Layout: player starts in a room at the LEFT. A guard patrols a CORRIDOR in the
// middle. The exit is at the RIGHT. There is a closed DOOR between player and
// corridor (a forced loud action). A DISTRACTION stone sits in a far alcove at
// the BOTTOM-RIGHT, away from the guard's normal post; throwing it (F) when the
// player is near it dumps a huge ring there and lures the guard down, opening a
// quiet window to sprint past. The corridor is narrow enough that any survivable
// walk-past trips the guard unless it has been lured away.
// ----------------------------------------------------------------------------
const LEVEL = {
  // Walls are axis-aligned rects {x,y,w,h} the player collides with.
  walls: [
    // outer frame
    { x: 0, y: 0, w: VW, h: 24 },
    { x: 0, y: VH - 24, w: VW, h: 24 },
    { x: 0, y: 0, w: 24, h: VH },
    { x: VW - 24, y: 0, w: 24, h: VH },
    // divider between start room and corridor (with a door gap, see door)
    { x: 250, y: 24, w: 22, h: 150 }, // upper part of divider
    { x: 250, y: 300, w: 22, h: VH - 300 - 24 }, // lower part (gap = doorway 174..300)
    // pillar shaping a narrow crossing past the guard (gap = y 234..360)
    { x: 470, y: 24, w: 22, h: 210 },
    { x: 470, y: 360, w: 22, h: VH - 360 - 24 },
  ],
  // A door that blocks the doorway gap until opened (E near it). Opening = spike.
  door: { x: 250, y: 174, w: 22, h: 126, open: false },
  // The player's start (LEFT room).
  start: { x: 120, y: 120 },
  // The exit pad (TOP-RIGHT, past the crossing).
  exit: { x: VW - 90, y: 60, w: 56, h: 56 },
  // Guard patrol corridor — a vertical line it walks, sitting on the crossing.
  guard: { x: 360, yTop: 150, yBot: 410 },
  // The throwable stone sits in the START room (bottom-left), reachable WITHOUT
  // crossing the guard. Throwing it lures the guard to a FAR point (lureTo),
  // pulling it off the crossing so the player can slip through.
  distraction: { x: 110, y: VH - 70, r: 14, used: false },
  // Where the thrown stone "lands" — a far bottom-right alcove, away from the
  // crossing gap. The guard walks here and is deaf to the player while lured.
  lureTo: { x: VW - 70, y: VH - 70 },
};

// ----------------------------------------------------------------------------
// State
// ----------------------------------------------------------------------------
const state = {
  screen: TITLE,
  noise: 0,
  player: { x: 0, y: 0, vx: 0, vy: 0 },
  guard: { x: 0, y: 0, dir: 1, lured: 0, target: null, alert: 0 },
  rings: [], // {x, y, r, maxR}
  door: { open: false },
  distractionUsed: false,
  stepTimer: 0,
  flash: 0, // caught-flash intensity
  clearTime: 0,
  elapsed: 0,
  bestNoise: loadBest(), // peak meter on a clear; lower is better
  peakNoise: 0,
};

function loadBest() {
  try {
    const v = parseFloat(localStorage.getItem("hush.bestPeak"));
    return isFinite(v) ? v : null;
  } catch (e) {
    return null;
  }
}
function saveBest(v) {
  try { localStorage.setItem("hush.bestPeak", String(v)); } catch (e) {}
}

function startLevel() {
  state.screen = PLAYING;
  state.noise = 0;
  state.peakNoise = 0;
  state.player.x = LEVEL.start.x;
  state.player.y = LEVEL.start.y;
  state.player.vx = 0;
  state.player.vy = 0;
  state.guard.x = LEVEL.guard.x;
  state.guard.y = (LEVEL.guard.yTop + LEVEL.guard.yBot) / 2;
  state.guard.dir = 1;
  state.guard.lured = 0;
  state.guard.target = null;
  state.guard.alert = 0;
  state.rings.length = 0;
  state.door.open = false;
  LEVEL.door.open = false;
  state.distractionUsed = false;
  LEVEL.distraction.used = false;
  state.stepTimer = 0;
  state.flash = 0;
  state.elapsed = 0;
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
  return dist(state.player.x, state.player.y, LEVEL.distraction.x, LEVEL.distraction.y) < 60
    && !state.distractionUsed;
}
function nearDoor() {
  // near the doorway gap and door still closed
  return !state.door.open
    && dist(state.player.x, state.player.y, LEVEL.door.x + LEVEL.door.w / 2, LEVEL.door.y + LEVEL.door.h / 2) < 90;
}

function spawnRing(x, y, maxR) {
  state.rings.push({ x, y, r: 0, maxR });
}

function tryDoor() {
  if (!nearDoor()) return;
  state.door.open = true;
  LEVEL.door.open = true;
  state.noise = Math.min(CONFIG.METER_MAX, state.noise + CONFIG.DOOR_SPIKE);
  spawnRing(LEVEL.door.x + LEVEL.door.w / 2, LEVEL.door.y + LEVEL.door.h / 2, CONFIG.DOOR_RING_RANGE);
  sfxDoor();
}

function tryDistraction() {
  if (!nearDistraction()) return;
  state.distractionUsed = true;
  LEVEL.distraction.used = true;
  state.noise = Math.min(CONFIG.METER_MAX, state.noise + CONFIG.DISTRACTION_SPIKE);
  // The stone lands FAR AWAY (lureTo): a big ring dumps noise there, not on you.
  spawnRing(LEVEL.lureTo.x, LEVEL.lureTo.y, CONFIG.DISTRACTION_RING_RANGE);
  sfxThrow();
  // Lure the guard toward where the stone landed.
  state.guard.lured = CONFIG.GUARD_LURE_TIME;
  state.guard.target = { x: LEVEL.lureTo.x, y: LEVEL.lureTo.y };
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function update(dt) {
  if (state.screen !== PLAYING) {
    if (state.flash > 0) state.flash = Math.max(0, state.flash - dt * 2);
    return;
  }
  state.elapsed += dt;

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
  const nx = p.x + ix * speed * dt;
  const ny = p.y + iy * speed * dt;

  // Axis-separated collision against walls + closed door.
  const solids = LEVEL.walls.slice();
  if (!state.door.open) solids.push(LEVEL.door);

  p.x = resolveAxis(p.x, p.y, nx, p.y, solids).x;
  p.y = resolveAxis(p.x, p.y, p.x, ny, solids).y;

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

  // ---- Guard movement ----
  const g = state.guard;
  if (g.lured > 0 && g.target) {
    g.lured -= dt;
    const d = dist(g.x, g.y, g.target.x, g.target.y);
    if (d > 4) {
      g.x += ((g.target.x - g.x) / d) * CONFIG.GUARD_SPEED * dt;
      g.y += ((g.target.y - g.y) / d) * CONFIG.GUARD_SPEED * dt;
    }
    if (g.lured <= 0) { g.target = null; }
  } else {
    // return to patrol line, then patrol vertically
    if (Math.abs(g.x - LEVEL.guard.x) > 2) {
      g.x += Math.sign(LEVEL.guard.x - g.x) * CONFIG.GUARD_SPEED * dt;
    } else {
      g.x = LEVEL.guard.x;
      g.y += g.dir * CONFIG.GUARD_SPEED * dt;
      if (g.y > LEVEL.guard.yBot) { g.y = LEVEL.guard.yBot; g.dir = -1; }
      if (g.y < LEVEL.guard.yTop) { g.y = LEVEL.guard.yTop; g.dir = 1; }
    }
  }

  // ---- Detection: a ring touching the guard while meter >= threshold ----
  // While lured, the guard's attention is elsewhere -> it cannot hear you.
  const distracted = g.lured > 0;
  if (!distracted && state.noise >= CONFIG.GUARD_THRESHOLD) {
    for (const r of state.rings) {
      if (dist(r.x, r.y, g.x, g.y) <= r.r) {
        triggerCaught();
        break;
      }
    }
  }
  if (g.alert > 0) g.alert = Math.max(0, g.alert - dt * 2);

  // ---- Win: reach exit ----
  if (circleRectOverlap(p.x, p.y, CONFIG.PLAYER_R, LEVEL.exit)) {
    triggerCleared();
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

function triggerCaught() {
  state.screen = CAUGHT;
  state.guard.alert = 1;
  state.flash = 1;
  sfxCaught();
  if (audioReady && droneGain) droneGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.4);
}

function triggerCleared() {
  state.screen = CLEARED;
  sfxClear();
  if (audioReady && droneGain) droneGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.4);
  // Best = lowest peak meter reached on a successful clear.
  const peak = Math.round(state.peakNoise);
  if (state.bestNoise == null || peak < state.bestNoise) {
    state.bestNoise = peak;
    saveBest(peak);
  }
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function meterColor(frac) {
  if (frac < 0.45) return COLORS.meterCool;
  if (frac < 0.75) return COLORS.meterWarm;
  return COLORS.meterHot;
}

function drawRoom() {
  // Floor
  ctx.fillStyle = COLORS.room;
  ctx.fillRect(0, 0, VW, VH);

  // Walls (charcoal fill + thin white outline = blueprint feel)
  for (const w of LEVEL.walls) {
    ctx.fillStyle = COLORS.wall;
    ctx.fillRect(w.x, w.y, w.w, w.h);
    ctx.strokeStyle = COLORS.outlineDim;
    ctx.lineWidth = 1;
    ctx.strokeRect(w.x + 0.5, w.y + 0.5, w.w - 1, w.h - 1);
  }

  // Door
  const d = LEVEL.door;
  if (!state.door.open) {
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
  ctx.strokeStyle = COLORS.exit;
  ctx.lineWidth = 2;
  ctx.strokeRect(ex.x + 0.5, ex.y + 0.5, ex.w, ex.h);
  ctx.fillStyle = "rgba(123,255,176,0.08)";
  ctx.fillRect(ex.x, ex.y, ex.w, ex.h);
  ctx.fillStyle = COLORS.exit;
  ctx.font = "11px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("EXIT", ex.x + ex.w / 2, ex.y + ex.h / 2 + 4);
  ctx.restore();

  // Far lure landing point (where the thrown stone will dump noise).
  const lt = LEVEL.lureTo;
  if (!state.distractionUsed) {
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
  if (!state.distractionUsed) {
    ctx.beginPath();
    ctx.arc(ds.x, ds.y, ds.r, 0, TAU);
    ctx.fillStyle = COLORS.distract;
    ctx.fill();
    ctx.strokeStyle = COLORS.outline;
    ctx.lineWidth = 1;
    ctx.stroke();
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
  for (const r of state.rings) {
    const frac = r.r / r.maxR;
    const op = (1 - frac) * 0.9;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.r, 0, TAU);
    ctx.strokeStyle = `rgba(255,255,255,${op.toFixed(3)})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function drawGuard() {
  const g = state.guard;
  const distracted = g.lured > 0;

  // Patrol line guide
  ctx.strokeStyle = "rgba(255,111,111,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(LEVEL.guard.x, LEVEL.guard.yTop);
  ctx.lineTo(LEVEL.guard.x, LEVEL.guard.yBot);
  ctx.stroke();

  // Body
  ctx.beginPath();
  ctx.arc(g.x, g.y, CONFIG.GUARD_R, 0, TAU);
  ctx.fillStyle = distracted ? COLORS.guardCalm : COLORS.guard;
  ctx.fill();
  ctx.strokeStyle = COLORS.outline;
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

function drawPlayer() {
  const p = state.player;
  ctx.beginPath();
  ctx.arc(p.x, p.y, CONFIG.PLAYER_R, 0, TAU);
  ctx.fillStyle = COLORS.player;
  ctx.fill();
  ctx.strokeStyle = COLORS.outline;
  ctx.lineWidth = 1.5;
  ctx.stroke();
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

  // fill
  ctx.fillStyle = meterColor(frac);
  ctx.fillRect(x, y, w * frac, h);

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

function drawHints() {
  ctx.font = "11px system-ui";
  ctx.textAlign = "left";
  ctx.fillStyle = COLORS.textDim;
  ctx.fillText("WASD/Arrows move · Shift sprint (louder) · E door · F throw stone", 24, VH - 10);
}

function drawDebug() {
  if (!DEBUG) return;
  const g = state.guard;
  ctx.font = "11px monospace";
  ctx.textAlign = "left";
  ctx.fillStyle = "#7bffb0";
  let yy = 60;
  const line = (t) => { ctx.fillText(t, 30, yy); yy += 14; };
  line(`noise=${state.noise.toFixed(1)} peak=${state.peakNoise.toFixed(1)} thresh=${CONFIG.GUARD_THRESHOLD}`);
  line(`rings=${state.rings.length}  guardDist=${dist(state.player.x, state.player.y, g.x, g.y).toFixed(0)}`);
  line(`lured=${g.lured.toFixed(2)}`);
  for (const r of state.rings) line(`  ring r=${r.r.toFixed(0)}/${r.maxR} d2g=${dist(r.x, r.y, g.x, g.y).toFixed(0)}`);
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

function render() {
  ctx.clearRect(0, 0, VW, VH);
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, VW, VH);

  if (state.screen === TITLE) {
    drawRoom();
    drawGuard();
    drawPlayer();
    const best = state.bestNoise == null ? "—" : state.bestNoise + " dB";
    centerText([
      { text: "HUSH", size: 64, gap: 40, color: COLORS.player },
      { text: "Silence is a budget. Guards hear the meter, not you.", size: 16, gap: 26, color: COLORS.textDim },
      { text: "Keep NOISE under a guard's threshold — or throw the stone to lure it away.", size: 14, gap: 38, color: COLORS.textDim },
      { text: "WASD move · Shift sprint · E door · F throw · reach the EXIT", size: 14, gap: 34, color: COLORS.text },
      { text: "Best clear (lowest peak): " + best, size: 13, gap: 30, color: COLORS.exit },
      { text: "Press Enter or click to begin", size: 16, gap: 24, color: COLORS.meterWarm },
    ]);
    return;
  }

  // PLAYING (and the frozen background under CAUGHT/CLEARED)
  drawRoom();
  drawRings();
  drawGuard();
  drawPlayer();
  drawMeter();
  drawHints();
  drawDebug();

  if (state.flash > 0) {
    ctx.fillStyle = `rgba(255,77,77,${(state.flash * 0.5).toFixed(3)})`;
    ctx.fillRect(0, 0, VW, VH);
  }

  if (state.screen === CAUGHT) {
    centerText([
      { text: "HEARD.", size: 56, gap: 40, color: COLORS.meterHot },
      { text: "A ring touched the guard while your meter was over its threshold.", size: 14, gap: 30, color: COLORS.textDim },
      { text: "Bank silence. Use the stone to pull the guard off your route.", size: 14, gap: 40, color: COLORS.textDim },
      { text: "Press R to retry", size: 18, gap: 24, color: COLORS.meterWarm },
    ]);
  } else if (state.screen === CLEARED) {
    const peak = Math.round(state.peakNoise);
    const best = state.bestNoise == null ? "—" : state.bestNoise + " dB";
    centerText([
      { text: "SLIPPED THROUGH", size: 48, gap: 42, color: COLORS.exit },
      { text: "Peak noise this run: " + peak + " dB", size: 18, gap: 30, color: COLORS.text },
      { text: "Best peak: " + best + "  (lower is quieter)", size: 14, gap: 40, color: COLORS.textDim },
      { text: "Press Enter for title", size: 16, gap: 24, color: COLORS.meterWarm },
    ]);
  }
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

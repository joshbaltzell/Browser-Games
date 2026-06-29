/*
 * ECHO CARTOGRAPHER — Phase 1: Core Mechanic Prototype.
 *
 * The world is total black void. The only way to SEE is to press SPACE and emit
 * a ringwave: an expanding circle that lights wall segments chalk-white ONLY
 * along its live front, revealing the room in expanding slices. Revealed
 * fragments linger as fading ghost-outlines (~1s) so you can navigate by memory
 * between flashes. Every ping also draws a blind predator toward the ping
 * origin — it hunts the sound, not you. Idle when you stay quiet.
 *
 * Goal of this prototype: prove map-from-fragments navigation is fun on a
 * laptop, fully playable with audio OFF.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no fetch — runs from
 * file://. Audio is synthesized lazily and only after a first user gesture
 * (stub here in Phase 1; sound lands in Phase 2).
 *
 * Sections: Constants -> Canvas/state -> Audio stub -> Geometry helpers ->
 * Levels -> Input -> Init/reset -> Update -> Render -> Main loop.
 */

"use strict";

// ----------------------------------------------------------------------------
// Constants / tunables (Phase 1 feel knobs live here)
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;

const COLORS = {
  void: "#000000",
  wallFront: "#ffffff",   // chalk-white live front intersection
  ghost: "#cfe8ff",       // fading ghost-outline tint (cool chalk)
  player: "#8fffd0",      // cartographer marker
  predator: "#ff4d5e",    // blind hunter telegraph
  exit: "#ffd27a",        // goal marker
  hud: "#6b7d88",         // muted HUD text
  hudBright: "#cfe0ea",
};

// Ping behaviour.
const PING_SPEED = 620;        // px/sec the front expands
const PING_MAX_RADIUS = 900;   // front dies past this
const PING_BAND = 14;          // half-thickness of the "live front" reveal band
const PING_COOLDOWN = 0.85;    // seconds between pings (rationed reveals)

// Ghost-outline afterimage.
const GHOST_LIFE = 1.05;       // seconds for a revealed segment to fade out

// Player.
const PLAYER_R = 9;
const PLAYER_SPEED = 190;      // px/sec

// Predator.
const PRED_R = 13;
const PRED_HUNT_SPEED = 130;   // px/sec while homing on a ping origin
const PRED_IDLE_SPEED = 52;    // px/sec slow wander when no recent ping
const PRED_CATCH = 18;         // contact distance that ends the attempt
const PRED_ARRIVE = 22;        // distance at which it "reaches" a ping origin
const PRED_IDLE_RETARGET = 1.8;// seconds between picking a new idle wander point

// ----------------------------------------------------------------------------
// Canvas + global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let W = 0, H = 0;            // CSS pixel size of the canvas
let dpr = 1;

const STATE = { TITLE: "title", PLAYING: "playing", CAUGHT: "caught", WON: "won" };
let state = STATE.TITLE;

let level = null;           // current level data (geometry)
let player = { x: 0, y: 0, r: PLAYER_R };
let predator = { x: 0, y: 0, r: PRED_R, mode: "idle", tx: 0, ty: 0, idleTimer: 0 };
let pings = [];             // active ringwaves {x,y,radius}
let ghosts = [];            // revealed fragments {x1,y1,x2,y2,life}
let cooldown = 0;           // ping cooldown timer
let pingCount = 0;          // pings used this attempt
let showDebug = false;

// localStorage best (fewest pings to clear).
const LS_KEY = "echoCartographer.bestPings";
let bestPings = loadBest();

function loadBest() {
  try {
    const v = parseInt(localStorage.getItem(LS_KEY), 10);
    return Number.isFinite(v) ? v : null;
  } catch (e) { return null; }
}
function saveBest(v) {
  try { localStorage.setItem(LS_KEY, String(v)); } catch (e) { /* ignore */ }
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
  // Re-fit the current level to the new viewport so geometry stays on-screen.
  if (level) layoutLevel();
});

// ----------------------------------------------------------------------------
// Audio — first-gesture unlock stub (Phase 2 fills in real synthesis)
// ----------------------------------------------------------------------------
let audioCtx = null;
let audioReady = false;
function unlockAudio() {
  if (audioReady) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) {
      audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
    }
  } catch (e) { /* file:// safe — never throw */ }
  audioReady = true; // mark attempted regardless; no sound emitted in Phase 1
}

// ----------------------------------------------------------------------------
// Geometry helpers
// ----------------------------------------------------------------------------
// Distance from point P to segment AB; returns {d, t} (t = projection param).
function pointSegDist(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const len2 = dx * dx + dy * dy || 1e-9;
  let t = ((px - x1) * dx + (py - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + t * dx, cy = y1 + t * dy;
  const ddx = px - cx, ddy = py - cy;
  return { d: Math.hypot(ddx, ddy), t, cx, cy };
}

// ----------------------------------------------------------------------------
// Levels — authored in normalized [0..1] coords; laid out to the viewport.
// Phase 1 ships one greybox teaching room. wallsN are normalized segments.
// ----------------------------------------------------------------------------
const RAW_LEVEL = {
  // Player & exit & predator in normalized coords.
  playerN: { x: 0.16, y: 0.78 },
  exitN: { x: 0.84, y: 0.20 },
  predN: { x: 0.84, y: 0.80 },
  // Outer room + a couple of interior walls forming a corridor & dead-end.
  wallsN: [
    // Outer boundary
    [0.08, 0.10, 0.92, 0.10],
    [0.92, 0.10, 0.92, 0.90],
    [0.92, 0.90, 0.08, 0.90],
    [0.08, 0.90, 0.08, 0.10],
    // Interior: a partial vertical wall creating a corridor on the left
    [0.40, 0.10, 0.40, 0.60],
    // A horizontal shelf forming a dead-end pocket
    [0.40, 0.60, 0.66, 0.60],
    // A second vertical baffle on the right side
    [0.66, 0.40, 0.66, 0.90],
  ],
};

// Live (pixel-space) geometry, recomputed on layout.
function layoutLevel() {
  const M = 40; // screen margin
  const ax = M, ay = M, bw = W - M * 2, bh = H - M * 2;
  const toX = (n) => ax + n * bw;
  const toY = (n) => ay + n * bh;

  level = {
    walls: RAW_LEVEL.wallsN.map(([x1, y1, x2, y2]) => ({
      x1: toX(x1), y1: toY(y1), x2: toX(x2), y2: toY(y2),
    })),
    exit: { x: toX(RAW_LEVEL.exitN.x), y: toY(RAW_LEVEL.exitN.y), r: 22 },
    playerStart: { x: toX(RAW_LEVEL.playerN.x), y: toY(RAW_LEVEL.playerN.y) },
    predStart: { x: toX(RAW_LEVEL.predN.x), y: toY(RAW_LEVEL.predN.y) },
  };
}

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
const keys = Object.create(null);

window.addEventListener("keydown", (e) => {
  // Audio unlock on first gesture.
  unlockAudio();

  const k = e.key.toLowerCase();

  // Prevent scrolling on arrows/space.
  if ([" ", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) {
    e.preventDefault();
  }

  if (state === STATE.TITLE) {
    if (k === "enter" || k === " ") { startGame(); return; }
  }

  if (state === STATE.CAUGHT || state === STATE.WON) {
    if (k === "enter" || k === "r" || k === " ") { startGame(); return; }
  }

  if (state === STATE.PLAYING) {
    if (k === " ") { tryPing(); }
    if (k === "r") { startGame(); return; }
    if (k === "`" || k === "~") { showDebug = !showDebug; }
  }

  keys[k] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

// Click also unlocks audio + advances title / end screens.
canvas.addEventListener("pointerdown", () => {
  unlockAudio();
  if (state === STATE.TITLE) { startGame(); return; }
  if (state === STATE.CAUGHT || state === STATE.WON) { startGame(); return; }
  if (state === STATE.PLAYING) { tryPing(); }
});

// ----------------------------------------------------------------------------
// Ping emission
// ----------------------------------------------------------------------------
function tryPing() {
  if (cooldown > 0) return;
  pings.push({ x: player.x, y: player.y, radius: 0 });
  cooldown = PING_COOLDOWN;
  pingCount++;
  // Predator hunts the sound: home on this ping origin.
  predator.mode = "hunt";
  predator.tx = player.x;
  predator.ty = player.y;
}

// ----------------------------------------------------------------------------
// Init / reset
// ----------------------------------------------------------------------------
function startGame() {
  layoutLevel();
  player.x = level.playerStart.x;
  player.y = level.playerStart.y;
  player.r = PLAYER_R;
  predator.x = level.predStart.x;
  predator.y = level.predStart.y;
  predator.r = PRED_R;
  predator.mode = "idle";
  predator.tx = predator.x;
  predator.ty = predator.y;
  predator.idleTimer = 0;
  pings = [];
  ghosts = [];
  cooldown = 0;
  pingCount = 0;
  state = STATE.PLAYING;
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function update(dt) {
  if (state !== STATE.PLAYING) return;

  cooldown = Math.max(0, cooldown - dt);

  updatePlayer(dt);
  updatePings(dt);
  updateGhosts(dt);
  updatePredator(dt);

  // Win: reach exit.
  if (Math.hypot(player.x - level.exit.x, player.y - level.exit.y) < level.exit.r) {
    onWin();
    return;
  }

  // Lose: predator contact.
  if (Math.hypot(player.x - predator.x, player.y - predator.y) < PRED_CATCH) {
    state = STATE.CAUGHT;
  }
}

function updatePlayer(dt) {
  let dx = 0, dy = 0;
  if (keys["arrowleft"] || keys["a"]) dx -= 1;
  if (keys["arrowright"] || keys["d"]) dx += 1;
  if (keys["arrowup"] || keys["w"]) dy -= 1;
  if (keys["arrowdown"] || keys["s"]) dy += 1;
  if (dx === 0 && dy === 0) return;

  const len = Math.hypot(dx, dy) || 1;
  dx /= len; dy /= len;

  const step = PLAYER_SPEED * dt;
  // Move axis-by-axis and resolve collisions independently so we slide along
  // walls rather than sticking.
  moveAndCollide(dx * step, 0);
  moveAndCollide(0, dy * step);
}

// Try to move the player by (mx,my); if the new position overlaps any wall
// within the player's radius, cancel that axis (block-on-axis).
function moveAndCollide(mx, my) {
  const nx = player.x + mx;
  const ny = player.y + my;
  if (!collidesAt(nx, ny, player.r)) {
    player.x = nx;
    player.y = ny;
  }
}

function collidesAt(x, y, r) {
  for (const w of level.walls) {
    if (pointSegDist(x, y, w.x1, w.y1, w.x2, w.y2).d < r) return true;
  }
  return false;
}

function updatePings(dt) {
  for (const p of pings) {
    p.radius += PING_SPEED * dt;
  }
  // For each ping, reveal wall portions where the front currently crosses,
  // spawning fresh ghost fragments along the live band.
  for (const p of pings) {
    revealAlongFront(p);
  }
  // Cull dead pings.
  pings = pings.filter((p) => p.radius <= PING_MAX_RADIUS);
}

// Walk each wall segment in small steps; any sample within the live front band
// (|dist(origin,sample) - radius| < BAND) spawns/refreshes a ghost dot-segment.
function revealAlongFront(p) {
  for (const w of level.walls) {
    const segLen = Math.hypot(w.x2 - w.x1, w.y2 - w.y1);
    const steps = Math.max(2, Math.ceil(segLen / 6));
    let runStart = null; // start of a contiguous revealed run (param t)
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const sx = w.x1 + (w.x2 - w.x1) * t;
      const sy = w.y1 + (w.y2 - w.y1) * t;
      const d = Math.hypot(sx - p.x, sy - p.y);
      const onFront = Math.abs(d - p.radius) < PING_BAND;
      if (onFront && runStart === null) {
        runStart = t;
      } else if (!onFront && runStart !== null) {
        spawnGhost(w, runStart, (i - 1) / steps);
        runStart = null;
      }
    }
    if (runStart !== null) spawnGhost(w, runStart, 1);
  }
}

function spawnGhost(w, t0, t1) {
  if (t1 <= t0) t1 = Math.min(1, t0 + 0.02);
  const gx1 = w.x1 + (w.x2 - w.x1) * t0;
  const gy1 = w.y1 + (w.y2 - w.y1) * t0;
  const gx2 = w.x1 + (w.x2 - w.x1) * t1;
  const gy2 = w.y1 + (w.y2 - w.y1) * t1;
  ghosts.push({ x1: gx1, y1: gy1, x2: gx2, y2: gy2, life: GHOST_LIFE });
}

function updateGhosts(dt) {
  for (const g of ghosts) g.life -= dt;
  ghosts = ghosts.filter((g) => g.life > 0);
  // Keep the ghost array bounded for steady framerate.
  if (ghosts.length > 4000) ghosts.splice(0, ghosts.length - 4000);
}

function updatePredator(dt) {
  if (predator.mode === "hunt") {
    const dx = predator.tx - predator.x;
    const dy = predator.ty - predator.y;
    const dist = Math.hypot(dx, dy);
    if (dist < PRED_ARRIVE) {
      // Reached the ping origin; lapse into idle wander.
      predator.mode = "idle";
      predator.idleTimer = 0;
      pickIdleTarget();
    } else {
      stepToward(dx / dist, dy / dist, PRED_HUNT_SPEED * dt);
    }
  } else {
    // Idle: slow wander to occasional random points.
    predator.idleTimer -= dt;
    if (predator.idleTimer <= 0) {
      predator.idleTimer = PRED_IDLE_RETARGET;
      pickIdleTarget();
    }
    const dx = predator.tx - predator.x;
    const dy = predator.ty - predator.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 4) stepToward(dx / dist, dy / dist, PRED_IDLE_SPEED * dt);
  }
}

function pickIdleTarget() {
  // Wander a short distance from current position, biased to stay in bounds.
  const ang = Math.random() * TAU;
  const reach = 80 + Math.random() * 140;
  predator.tx = Math.max(40, Math.min(W - 40, predator.x + Math.cos(ang) * reach));
  predator.ty = Math.max(40, Math.min(H - 40, predator.y + Math.sin(ang) * reach));
}

// Move predator toward a unit direction, but don't pass through walls
// (axis-resolved like the player). Phase 1 keeps this simple.
function stepToward(ux, uy, amt) {
  const tryMove = (mx, my) => {
    const nx = predator.x + mx, ny = predator.y + my;
    if (!collidesAt(nx, ny, predator.r)) { predator.x = nx; predator.y = ny; }
  };
  tryMove(ux * amt, 0);
  tryMove(0, uy * amt);
}

function onWin() {
  state = STATE.WON;
  if (bestPings === null || pingCount < bestPings) {
    bestPings = pingCount;
    saveBest(bestPings);
  }
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function render() {
  // Clear to void.
  ctx.fillStyle = COLORS.void;
  ctx.fillRect(0, 0, W, H);

  if (state === STATE.TITLE) { renderTitle(); return; }

  renderWorld();

  if (state === STATE.CAUGHT) renderEnd("CAUGHT", COLORS.predator, "The hunter found your sound.");
  if (state === STATE.WON) renderEnd("ESCAPED", COLORS.exit, bestText());
}

function bestText() {
  const best = (bestPings === null) ? pingCount : bestPings;
  return `Pings used: ${pingCount}   ·   Best: ${best}`;
}

function renderWorld() {
  // Ghost-outlines (fading chalk fragments) — the heart of map-from-fragments.
  ctx.lineCap = "round";
  for (const g of ghosts) {
    const a = Math.max(0, g.life / GHOST_LIFE);
    ctx.strokeStyle = COLORS.ghost;
    ctx.globalAlpha = a * 0.85;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(g.x1, g.y1);
    ctx.lineTo(g.x2, g.y2);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Live ping fronts: bright chalk-white intersection points along each wall.
  for (const p of pings) {
    const fade = 1 - p.radius / PING_MAX_RADIUS;
    ctx.strokeStyle = COLORS.wallFront;
    ctx.globalAlpha = Math.max(0, fade);
    ctx.lineWidth = 3;
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
        else if (!onFront && runStart !== null) {
          drawSeg(w, runStart, (i - 1) / steps);
          runStart = null;
        }
      }
      if (runStart !== null) drawSeg(w, runStart, 1);
    }
    // Faint expanding ring guide so the player feels the front sweep.
    ctx.globalAlpha = Math.max(0, fade) * 0.12;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, TAU);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Exit marker — a soft beacon (always faintly visible so there's a goal).
  drawExit();

  // Predator telegraph — a plain red marker for Phase 1 (full ripple in P2),
  // but already always-visible for fairness.
  drawPredator();

  // Player marker — always faintly visible so you never lose yourself.
  drawPlayer();

  renderHUD();
}

function drawSeg(w, t0, t1) {
  if (t1 < t0) return;
  const x1 = w.x1 + (w.x2 - w.x1) * t0;
  const y1 = w.y1 + (w.y2 - w.y1) * t0;
  const x2 = w.x1 + (w.x2 - w.x1) * t1;
  const y2 = w.y1 + (w.y2 - w.y1) * t1;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawExit() {
  const e = level.exit;
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 500);
  ctx.save();
  ctx.globalAlpha = 0.25 + pulse * 0.3;
  ctx.strokeStyle = COLORS.exit;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(e.x, e.y, e.r, 0, TAU);
  ctx.stroke();
  ctx.globalAlpha = 0.5 + pulse * 0.4;
  ctx.fillStyle = COLORS.exit;
  ctx.beginPath();
  ctx.arc(e.x, e.y, 3, 0, TAU);
  ctx.fill();
  ctx.restore();
}

function drawPlayer() {
  ctx.save();
  ctx.fillStyle = COLORS.player;
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.r * 0.5, 0, TAU);
  ctx.fill();
  // Faint halo so you can always find yourself in the dark.
  ctx.globalAlpha = 0.18;
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.r, 0, TAU);
  ctx.fill();
  ctx.restore();
}

function drawPredator() {
  ctx.save();
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 220);
  // Persistent dim red telegraph (fairness): visible with no ping, audio off.
  ctx.globalAlpha = 0.35 + pulse * 0.25;
  ctx.fillStyle = COLORS.predator;
  ctx.beginPath();
  ctx.arc(predator.x, predator.y, predator.r * 0.45, 0, TAU);
  ctx.fill();
  ctx.globalAlpha = 0.12 + pulse * 0.12;
  ctx.beginPath();
  ctx.arc(predator.x, predator.y, predator.r, 0, TAU);
  ctx.fill();
  ctx.restore();
}

// ----------------------------------------------------------------------------
// HUD + overlays (canvas-drawn)
// ----------------------------------------------------------------------------
function renderHUD() {
  ctx.save();
  ctx.font = "13px system-ui, sans-serif";
  ctx.textBaseline = "top";

  // Ping cooldown / count.
  const ready = cooldown <= 0;
  ctx.fillStyle = ready ? COLORS.hudBright : COLORS.hud;
  ctx.fillText(ready ? "PING READY  (space)" : "recharging…", 16, 14);

  ctx.fillStyle = COLORS.hud;
  ctx.fillText(`pings: ${pingCount}`, 16, 32);
  if (bestPings !== null) ctx.fillText(`best: ${bestPings}`, 16, 48);

  // Cooldown bar.
  const bw = 120, bx = 16, by = 70;
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = COLORS.hud;
  ctx.fillRect(bx, by, bw, 4);
  ctx.globalAlpha = 0.9;
  ctx.fillStyle = ready ? COLORS.player : COLORS.hudBright;
  const frac = 1 - cooldown / PING_COOLDOWN;
  ctx.fillRect(bx, by, bw * Math.max(0, Math.min(1, frac)), 4);
  ctx.globalAlpha = 1;

  // Bottom hint.
  ctx.fillStyle = COLORS.hud;
  ctx.textBaseline = "bottom";
  ctx.fillText("SPACE ping  ·  WASD/arrows move  ·  R reset", 16, H - 14);

  if (showDebug) {
    ctx.fillStyle = "#79f";
    ctx.textBaseline = "top";
    ctx.fillText(`pings:${pings.length} ghosts:${ghosts.length} pred:${predator.mode}`, 16, 92);
  }
  ctx.restore();
}

function renderTitle() {
  ctx.save();
  ctx.textAlign = "center";

  // Title.
  ctx.fillStyle = COLORS.wallFront;
  ctx.font = "700 clamp(28px, 6vw, 54px) system-ui, sans-serif";
  ctx.fillText("ECHO CARTOGRAPHER", W / 2, H / 2 - 90);

  ctx.fillStyle = COLORS.ghost;
  ctx.globalAlpha = 0.75;
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillText("See by sound. The dark hunts your echoes.", W / 2, H / 2 - 48);
  ctx.globalAlpha = 1;

  // One-line how-to.
  ctx.fillStyle = COLORS.hudBright;
  ctx.font = "15px system-ui, sans-serif";
  ctx.fillText("SPACE = ping (lights walls, but draws the hunter) · WASD/arrows = move", W / 2, H / 2);

  // Reach the gold exit. Don't get caught.
  ctx.fillStyle = COLORS.exit;
  ctx.globalAlpha = 0.85;
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText("Reach the gold exit. Don't let the red hunter touch you.", W / 2, H / 2 + 28);
  ctx.globalAlpha = 1;

  // Prompt (pulsing).
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 400);
  ctx.fillStyle = COLORS.player;
  ctx.globalAlpha = 0.5 + pulse * 0.5;
  ctx.font = "700 18px system-ui, sans-serif";
  ctx.fillText("Press SPACE or click to begin", W / 2, H / 2 + 80);
  ctx.restore();
}

function renderEnd(title, color, sub) {
  ctx.save();
  // Dim the world slightly.
  ctx.fillStyle = "rgba(0,0,0,0.55)";
  ctx.fillRect(0, 0, W, H);

  ctx.textAlign = "center";
  ctx.fillStyle = color;
  ctx.font = "700 clamp(32px, 7vw, 60px) system-ui, sans-serif";
  ctx.fillText(title, W / 2, H / 2 - 30);

  ctx.fillStyle = COLORS.hudBright;
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillText(sub, W / 2, H / 2 + 14);

  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 400);
  ctx.fillStyle = COLORS.player;
  ctx.globalAlpha = 0.5 + pulse * 0.5;
  ctx.font = "700 16px system-ui, sans-serif";
  ctx.fillText("Press SPACE / R / click to try again", W / 2, H / 2 + 56);
  ctx.restore();
}

// ----------------------------------------------------------------------------
// Main loop — fixed-timestep update + rAF render
// ----------------------------------------------------------------------------
const FIXED = 1 / 120;       // physics step
let acc = 0;
let last = 0;

function frame(now) {
  if (!last) last = now;
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.25) dt = 0.25; // clamp after tab-out

  acc += dt;
  let guard = 0;
  while (acc >= FIXED && guard < 600) {
    update(FIXED);
    acc -= FIXED;
    guard++;
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

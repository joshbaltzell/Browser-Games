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

// localStorage key for best distance.
const LS_BEST = "switchback_best_v1";

// Grey-box palette with a hint of the intended geode amber/teal.
const COLORS = {
  bg: "#07060c",
  wall: "#171520",        // solid rock beyond the walls
  wallEdge: "#2a2740",    // inner wall edge line
  bandAmber: "#3a2a14",   // faint amber band hint
  bandTeal: "#123230",    // faint teal band hint
  surface: "#5fd6c4",     // teal surface highlight
  droplet: "#eafdfb",     // luminous droplet core
  dropletGlow: "#5fd6c4",
  trail: "#9fe9dc",
  amber: "#ff9f1c",
  amberSoft: "#ffc163",
  text: "#f3ead8",
  muted: "#9a8f78",
  danger: "#ff6f6f",
  debug: "#ffd27a",
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

// Player droplet.
const player = {
  y: BOTTOM_Y - RADIUS,
  vy: 0,
  gravitySign: 1,   // +1 = pulled down (rest on floor), -1 = pulled up (ceiling)
  onSurface: true,
  squash: 0,        // contact squash amount (cosmetic, 0..1)
};

// Trail samples (world-space-ish; stored as screen points that scroll).
let trail = [];

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

// ----------------------------------------------------------------------------
// Audio — lazy unlock stub (file://-safe). No sounds yet (Phase 2 plugs in).
// ----------------------------------------------------------------------------
let audioCtx = null;
function unlockAudio() {
  if (audioCtx) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) {
      audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
    }
  } catch (e) {
    audioCtx = null;
  }
}

// ----------------------------------------------------------------------------
// Corridor height field.
//
// The corridor is defined by two functions of worldX: ceilingY (inner top) and
// floorY (inner bottom). A grey-box layout: a flat opener to learn the flip,
// then repeating curved-bank bulges to practise banking, plus periodic
// narrowing "pinch" walls that punish a mistimed arc. Everything is a smooth
// function so surface normals (for banking) are well-defined.
// ----------------------------------------------------------------------------

// Smooth bump centred at c with half-width w, peak amplitude a (cosine window).
function bump(x, c, w, a) {
  const d = Math.abs(x - c);
  if (d >= w) return 0;
  return a * 0.5 * (1 + Math.cos((d / w) * Math.PI));
}

// Pattern period for the repeating curved section.
const SEG = 900;

function ceilingY(x) {
  // Flat opener for the first ~1100px so the first flip is taught cleanly.
  if (x < 1100) return TOP_Y;
  const p = ((x - 1100) % SEG);
  let y = TOP_Y;
  // A curved bulge dipping down from the ceiling — bank off its underside.
  y += bump(p, SEG * 0.30, 240, 130);
  // A gentle ceiling wave to keep the surface curved (banking practice).
  y += 24 * Math.sin((x - 1100) / 180);
  return y;
}

function floorY(x) {
  if (x < 1100) return BOTTOM_Y;
  const p = ((x - 1100) % SEG);
  let y = BOTTOM_Y;
  // A curved bulge rising up from the floor — bank off its top.
  y -= bump(p, SEG * 0.72, 240, 150);
  y -= 24 * Math.sin((x - 1100) / 200 + 1.3);
  return y;
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
  player.gravitySign = 1;
  player.vy = 0;
  player.onSurface = true;
  player.squash = 0;
  // Snap onto the floor at the start.
  player.y = floorY(worldX + PLAYER_X) - RADIUS;
}

function resetToTitle() {
  state = TITLE;
}

function die() {
  state = GAME_OVER;
  flashT = 0.35;
  const d = Math.floor(distance);
  if (d > best) {
    best = d;
    saveBest(best);
  }
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

  if (player.gravitySign > 0) {
    // Pulled down: the floor is the landing surface; the ceiling is a hazard.
    if (player.y >= fy) {
      // Reached / passed the floor surface.
      landOrBank(floorY, wx, fy, +1);
    } else if (player.y <= cy) {
      // Slammed UP into the ceiling against gravity (head-on) -> banking too,
      // but if nearly flat ceiling and fast, treat as hard contact (bank).
      bankOff(ceilingY, wx, cy, -1);
    }
  } else {
    // Pulled up: the ceiling is the landing surface; the floor is a hazard.
    if (player.y <= cy) {
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
  player.y = surfY;
  player.squash = Math.min(1, Math.abs(player.vy) / 900);

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
  player.y = surfY;
  player.squash = Math.min(1, Math.abs(player.vy) / 900);
  bankImpulse(s, surfDir);
  player.onSurface = false;
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
  if (state !== PLAYING) {
    if (flashT > 0) flashT = Math.max(0, flashT - dt);
    return;
  }

  // Forward scroll (constant; debug boost for tunneling tests).
  const curSpeed = boost ? speed * 2.6 : speed;
  worldX += curSpeed * dt;
  distance += (curSpeed * dt) / 10; // metres-ish

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

    // Keep the resting droplet glued to a moving (scrolling) curved surface.
    if (player.onSurface) {
      const wx = dropletWorldX();
      const surfY = player.gravitySign > 0
        ? floorY(wx) - RADIUS
        : ceilingY(wx) + RADIUS;
      player.y = surfY;
    }

    fatal = collideAndResolve(prevY);
    if (fatal) break;
  }

  // Ease squash back to round.
  player.squash = Math.max(0, player.squash - dt * 4);

  // Trail sampling.
  trail.push({ x: PLAYER_X, y: player.y, age: 0 });
  for (const t of trail) {
    t.x -= curSpeed * dt; // scroll trail left with the world
    t.age += dt;
  }
  trail = trail.filter((t) => t.x > -40 && t.age < 0.8);

  // Speed creeps up slowly with distance (light version; full curve is Phase 4).
  speed = BASE_SPEED + Math.min(220, distance * 0.25);

  if (fatal) {
    die();
  }
}

// ----------------------------------------------------------------------------
// Rendering
// ----------------------------------------------------------------------------
function drawCorridor() {
  // Draw solid rock above the ceiling and below the floor by sampling the
  // height field across the screen. The play tunnel between them is the bg.
  const step = 6;

  // Faint mineral bands in the background (hint of the geode palette).
  for (let i = 0; i < 5; i++) {
    const t = i / 5;
    ctx.fillStyle = i % 2 === 0 ? COLORS.bandAmber : COLORS.bandTeal;
    ctx.globalAlpha = 0.10;
    const bandH = VH / 5;
    ctx.fillRect(0, t * VH, VW, bandH);
  }
  ctx.globalAlpha = 1;

  // Ceiling rock (fill from top of canvas down to ceiling surface).
  ctx.fillStyle = COLORS.wall;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  for (let sx = 0; sx <= VW; sx += step) {
    ctx.lineTo(sx, ceilingY(worldX + sx));
  }
  ctx.lineTo(VW, 0);
  ctx.closePath();
  ctx.fill();

  // Floor rock (fill from floor surface down to bottom of canvas).
  ctx.beginPath();
  ctx.moveTo(0, VH);
  for (let sx = 0; sx <= VW; sx += step) {
    ctx.lineTo(sx, floorY(worldX + sx));
  }
  ctx.lineTo(VW, VH);
  ctx.closePath();
  ctx.fill();

  // Surface highlight edges (teal hint).
  ctx.strokeStyle = COLORS.surface;
  ctx.globalAlpha = 0.55;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let sx = 0; sx <= VW; sx += step) {
    const y = ceilingY(worldX + sx);
    if (sx === 0) ctx.moveTo(sx, y); else ctx.lineTo(sx, y);
  }
  ctx.stroke();
  ctx.beginPath();
  for (let sx = 0; sx <= VW; sx += step) {
    const y = floorY(worldX + sx);
    if (sx === 0) ctx.moveTo(sx, y); else ctx.lineTo(sx, y);
  }
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function drawTrail() {
  for (const t of trail) {
    const a = Math.max(0, 1 - t.age / 0.8) * 0.5;
    ctx.globalAlpha = a;
    ctx.fillStyle = COLORS.trail;
    const r = RADIUS * (0.4 + a * 0.5);
    ctx.beginPath();
    ctx.arc(t.x, t.y, r, 0, TAU);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawDroplet() {
  const sq = player.squash;
  const sx = 1 + sq * 0.4;     // squash widens
  const sy = 1 - sq * 0.4;     // and flattens (toward the surface)
  // Glow.
  const g = ctx.createRadialGradient(PLAYER_X, player.y, 1, PLAYER_X, player.y, RADIUS * 2.6);
  g.addColorStop(0, COLORS.dropletGlow);
  g.addColorStop(1, "rgba(95,214,196,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(PLAYER_X, player.y, RADIUS * 2.6, 0, TAU);
  ctx.fill();
  // Core.
  ctx.save();
  ctx.translate(PLAYER_X, player.y);
  ctx.scale(sx, sy);
  ctx.fillStyle = COLORS.droplet;
  ctx.beginPath();
  ctx.arc(0, 0, RADIUS, 0, TAU);
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
  centerText([
    { text: "SWITCHBACK", font: "800 64px system-ui, sans-serif", color: COLORS.amberSoft, gap: 54 },
    { text: "Flip gravity. Read the arc. Bank the curves.", font: "500 20px system-ui, sans-serif", color: COLORS.muted, gap: 70 },
    { text: "Press SPACE / CLICK to flip gravity", font: "700 22px system-ui, sans-serif", color: COLORS.surface, gap: 36 },
    { text: "Press to start", font: "600 16px system-ui, sans-serif", color: COLORS.muted, gap: 60 },
    { text: "D = debug arc overlay    B = speed boost", font: "500 13px system-ui, sans-serif", color: COLORS.muted, gap: 0 },
  ]);
}

function drawGameOver() {
  centerText([
    { text: "WIPEOUT", font: "800 56px system-ui, sans-serif", color: COLORS.danger, gap: 56 },
    { text: Math.floor(distance) + " m", font: "700 40px system-ui, sans-serif", color: COLORS.text, gap: 42 },
    { text: "Best  " + best + " m", font: "600 18px system-ui, sans-serif", color: COLORS.muted, gap: 70 },
    { text: "Press SPACE / CLICK to try again", font: "700 20px system-ui, sans-serif", color: COLORS.surface, gap: 0 },
  ]);
}

function render() {
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, VW, VH);

  if (state === TITLE) {
    drawCorridor();
    drawTitle();
    return;
  }

  drawCorridor();
  drawTrail();
  drawDebugTrajectory();
  drawDroplet();
  drawHUD();

  if (state === GAME_OVER) {
    ctx.fillStyle = "rgba(7,6,12,0.6)";
    ctx.fillRect(0, 0, VW, VH);
    drawGameOver();
  }

  // Death flash.
  if (flashT > 0) {
    ctx.fillStyle = "rgba(255,111,111," + (flashT / 0.35 * 0.5).toFixed(3) + ")";
    ctx.fillRect(0, 0, VW, VH);
  }
}

// ----------------------------------------------------------------------------
// Main loop (delta-time, clamped to avoid tunneling on tab-switch).
// ----------------------------------------------------------------------------
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

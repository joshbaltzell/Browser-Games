/*
 * SKY CLIMBER — a Doodle-Jump-style vertical platformer.
 *
 * The player auto-bounces off platforms; you only steer left/right and wrap
 * around the screen edges. The camera follows you upward (never down). Score
 * is the maximum height climbed, in "meters". Platforms come in four flavours
 * (normal / moving / breakable / spring) and the mix gets harder with height.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no fetch — everything
 * (visuals + audio) is generated in code, so it runs straight from file://.
 *
 * Sections: Constants -> Canvas/state -> Audio -> Input -> World gen ->
 * Init/start -> Update -> Render -> Overlays -> Main loop.
 */

"use strict";

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;

// Fixed logical play area (portrait). The canvas is scaled to fit the window
// while keeping this 3:4 aspect, so all gameplay maths use these dimensions.
const VW = 480;
const VH = 640;

// Physics (units are logical pixels / second).
const GRAVITY = 2000;          // downward acceleration
const JUMP_VELOCITY = -940;    // impulse on a normal bounce (negative = up)
const SPRING_VELOCITY = -1650; // impulse from a spring/booster
const MOVE_ACCEL = 3400;       // horizontal acceleration from input
const MOVE_MAX = 560;          // max horizontal speed
const MOVE_FRICTION = 0.86;    // per-frame damping when no input (approx)

// The camera scrolls the world down once the player rises above this line.
const CAMERA_LINE = VH * 0.42;

// Platform sizing.
const PLAT_W = 78;
const PLAT_H = 16;

// One "meter" of score per this many logical pixels climbed.
const PIXELS_PER_METER = 8;

const COLORS = {
  amber: "#ff9f1c",
  amberSoft: "#ffc163",
  amberDeep: "#d97e00",
  spring: "#7bffb0",
  danger: "#ff6f6f",
  moving: "#5fb8ff",
  player: "#ffd27a",
  star: "#fff4dd",
};

// Platform type ids.
const T_NORMAL = 0;
const T_MOVING = 1;
const T_BREAK = 2;
const T_SPRING = 3;

// ----------------------------------------------------------------------------
// Canvas & global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Scale the canvas backing store for crispness on HiDPI while presenting at a
// CSS size that fits the window but preserves the VW:VH aspect ratio.
let scale = 1;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  // Available space (account for #stage padding).
  const availW = window.innerWidth - 24;
  const availH = window.innerHeight - 24;
  scale = Math.min(availW / VW, availH / VH);
  scale = Math.max(0.2, scale); // never collapse
  const cssW = VW * scale;
  const cssH = VH * scale;
  canvas.style.width = cssW + "px";
  canvas.style.height = cssH + "px";
  canvas.width = Math.round(VW * dpr);
  canvas.height = Math.round(VH * dpr);
  // Draw in logical (VW x VH) coordinates.
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);

// Game states: "start" | "playing" | "gameover".
let gameState = "start";

let player;          // the climber
let platforms;       // active platforms (objects)
let particles;       // bounce puffs / shatter bits
let stars;           // parallax starfield (background layer)
let cameraY;         // world-space y of the top of the view (grows negative up)
let highestY;        // most-negative world y the player has reached
let score;           // meters (derived from highestY)
let best;            // persisted best score
let nextPlatformY;   // world y above which we still need to spawn platforms
let shake;           // screen-shake magnitude
let lastSpringX;     // bookkeeping so springs aren't clustered

const dom = {
  hud: document.getElementById("hud"),
  score: document.getElementById("score"),
  hudBest: document.getElementById("hud-best"),
  start: document.getElementById("start"),
  gameover: document.getElementById("gameover"),
  finalScore: document.getElementById("final-score"),
  finalBest: document.getElementById("final-best"),
  newBest: document.getElementById("new-best"),
};

// ----------------------------------------------------------------------------
// Persistence (localStorage; wrapped so it can't throw under file://)
// ----------------------------------------------------------------------------
const BEST_KEY = "sky-climber-best";

function loadBest() {
  try {
    const v = parseInt(localStorage.getItem(BEST_KEY) || "0", 10);
    return Number.isFinite(v) && v > 0 ? v : 0;
  } catch (e) {
    return 0;
  }
}

function saveBest(v) {
  try {
    localStorage.setItem(BEST_KEY, String(v));
  } catch (e) {
    /* ignore — storage may be unavailable under some file:// setups */
  }
}

// ----------------------------------------------------------------------------
// Audio — tiny Web Audio blips, generated on the fly. Lazily created on first
// user gesture so autoplay policies don't complain.
// ----------------------------------------------------------------------------
let audioCtx = null;
let muted = false;

function ensureAudio() {
  if (audioCtx) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  } catch (e) {
    audioCtx = null;
  }
}

function blip(freq, dur, type, gain) {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type || "triangle";
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.6, now + dur);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(gain || 0.16, now + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    osc.connect(g).connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + dur + 0.02);
  } catch (e) {
    /* audio is non-essential */
  }
}

function sndBounce() { blip(420, 0.12, "triangle", 0.14); }
function sndSpring() { blip(680, 0.22, "square", 0.16); }
function sndBreak() { blip(180, 0.18, "sawtooth", 0.12); }
function sndOver() { blip(150, 0.5, "sine", 0.18); }

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
const keys = new Set();

window.addEventListener("keydown", (e) => {
  // Stop the page scrolling on arrows / space.
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " ", "Spacebar"].includes(e.key)) {
    e.preventDefault();
  }
  if (e.repeat) return;

  if (e.key === "Enter") {
    if (gameState === "start" || gameState === "gameover") startGame();
    return;
  }
  if (e.key === "m" || e.key === "M") {
    muted = !muted;
    return;
  }
  keys.add(e.key.toLowerCase());
});

window.addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
window.addEventListener("blur", () => keys.clear());

// Click / tap to start or restart (and to unlock audio).
function pointerStart() {
  ensureAudio();
  if (gameState === "start" || gameState === "gameover") startGame();
}
document.getElementById("start-btn").addEventListener("click", (e) => { e.stopPropagation(); pointerStart(); });
document.getElementById("restart-btn").addEventListener("click", (e) => { e.stopPropagation(); pointerStart(); });
canvas.addEventListener("pointerdown", pointerStart);

// Touch / pointer steering: drag/hold on the left or right half steers.
let pointerSteer = 0; // -1, 0, +1
canvas.addEventListener("pointerdown", (e) => {
  if (gameState !== "playing") return;
  const r = canvas.getBoundingClientRect();
  pointerSteer = (e.clientX - r.left) < r.width / 2 ? -1 : 1;
});
canvas.addEventListener("pointermove", (e) => {
  if (gameState !== "playing" || pointerSteer === 0) return;
  const r = canvas.getBoundingClientRect();
  pointerSteer = (e.clientX - r.left) < r.width / 2 ? -1 : 1;
});
window.addEventListener("pointerup", () => { pointerSteer = 0; });

function steerInput() {
  let dir = 0;
  if (keys.has("arrowleft") || keys.has("a")) dir -= 1;
  if (keys.has("arrowright") || keys.has("d")) dir += 1;
  if (dir === 0) dir = pointerSteer;
  return dir;
}

// ----------------------------------------------------------------------------
// World generation
// ----------------------------------------------------------------------------

// Difficulty grows with height (meters climbed). Returns 0..1.
function difficulty() {
  const m = Math.max(0, score);
  // Eases toward 1 over ~900m.
  return Math.min(1, m / 900);
}

// Vertical gap between successive platforms grows with difficulty but always
// stays within reach of a normal jump (so the game is always fair).
function platformGap() {
  const d = difficulty();
  const min = 58 + d * 30;   // 58 -> 88
  const max = 96 + d * 56;   // 96 -> 152 (a normal jump clears ~190px)
  return min + Math.random() * (max - min);
}

// Pick a platform type given current difficulty.
function pickType() {
  const d = difficulty();
  const r = Math.random();
  // Spring chance is small but climbs slightly; provides clutch saves.
  const pSpring = 0.04 + d * 0.03;          // 4% -> 7%
  const pBreak = 0.04 + d * 0.22;           // 4% -> 26%
  const pMove = 0.06 + d * 0.30;            // 6% -> 36%
  if (r < pSpring) return T_SPRING;
  if (r < pSpring + pBreak) return T_BREAK;
  if (r < pSpring + pBreak + pMove) return T_MOVING;
  return T_NORMAL;
}

function makePlatform(y) {
  let type = pickType();
  // Don't put a spring on a breakable; force breakables to be plain tiles.
  const x = 8 + Math.random() * (VW - PLAT_W - 16);
  const p = {
    x,
    y,
    w: PLAT_W,
    type,
    vx: 0,
    broken: false,        // breakable: has it been used?
    breakAnim: 0,         // 0..1 shatter progress
    springC: 0,           // 0..1 spring compression (for animation)
    bounceAnim: 0,        // brief flash when landed on
  };
  if (type === T_MOVING) {
    p.vx = (40 + Math.random() * 70 + difficulty() * 60) * (Math.random() < 0.5 ? -1 : 1);
  }
  return p;
}

// Spawn platforms upward until we have coverage above the visible top.
function fillPlatforms() {
  // Generate until nextPlatformY is comfortably above the camera top.
  const topNeeded = cameraY - VH; // one screen of buffer above
  while (nextPlatformY > topNeeded) {
    nextPlatformY -= platformGap();
    platforms.push(makePlatform(nextPlatformY));
  }
}

// Despawn anything that has scrolled below the bottom.
function cullPlatforms() {
  const bottom = cameraY + VH + 40;
  for (let i = platforms.length - 1; i >= 0; i--) {
    if (platforms[i].y > bottom) platforms.splice(i, 1);
  }
}

// ----------------------------------------------------------------------------
// Init / start
// ----------------------------------------------------------------------------
function initGame() {
  // Camera top starts at 0; visible world is [0 .. VH].
  cameraY = 0;
  highestY = VH * 0.5;
  score = 0;
  shake = 0;
  lastSpringX = -999;
  particles = [];
  platforms = [];

  // Starfield: a fixed set of stars that scroll with parallax.
  stars = [];
  for (let i = 0; i < 70; i++) {
    stars.push({
      x: Math.random() * VW,
      y: Math.random() * VH,
      r: 0.6 + Math.random() * 1.6,
      // depth controls parallax speed + twinkle
      depth: 0.25 + Math.random() * 0.7,
      tw: Math.random() * TAU,
    });
  }

  // Guaranteed starting platform under the player.
  const startPlat = {
    x: VW / 2 - PLAT_W / 2,
    y: VH * 0.78,
    w: PLAT_W,
    type: T_NORMAL,
    vx: 0,
    broken: false,
    breakAnim: 0,
    springC: 0,
    bounceAnim: 0,
  };
  platforms.push(startPlat);

  // Seed a fair ladder of normal platforms near the start.
  nextPlatformY = startPlat.y;
  for (let i = 0; i < 6; i++) {
    nextPlatformY -= 70 + Math.random() * 30;
    const p = makePlatform(nextPlatformY);
    // Keep the first few easy: force normal/moving only.
    if (p.type === T_BREAK || p.type === T_SPRING) {
      p.type = T_NORMAL;
      p.vx = 0;
    }
    platforms.push(p);
  }
  fillPlatforms();

  // Player sits just above the start platform, falling onto it.
  player = {
    x: VW / 2,
    y: startPlat.y - 60,
    vx: 0,
    vy: 0,
    r: 18,
    sx: 1,           // squash/stretch scale x
    sy: 1,           // squash/stretch scale y
    facing: 1,
    trail: [],       // recent positions for a motion trail
  };
}

function startGame() {
  ensureAudio();
  best = loadBest();
  initGame();
  gameState = "playing";
  dom.start.classList.add("hidden");
  dom.gameover.classList.add("hidden");
  dom.hud.classList.remove("hidden");
  dom.hudBest.textContent = best;
  dom.score.textContent = "0";
}

function endGame() {
  gameState = "gameover";
  sndOver();
  const isBest = score > best;
  if (isBest) {
    best = score;
    saveBest(best);
  }
  dom.finalScore.textContent = score;
  dom.finalBest.textContent = best;
  dom.newBest.classList.toggle("hidden", !isBest);
  dom.hud.classList.add("hidden");
  dom.gameover.classList.remove("hidden");
}

// ----------------------------------------------------------------------------
// Particles
// ----------------------------------------------------------------------------
function puff(x, y, color, n, spread, speed) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * TAU;
    const s = speed * (0.3 + Math.random() * 0.7);
    particles.push({
      x, y,
      vx: Math.cos(a) * s * (0.4 + Math.random()),
      vy: Math.sin(a) * s - spread,
      life: 1,
      decay: 1.6 + Math.random() * 1.5,
      r: 2 + Math.random() * 3,
      color,
    });
  }
}

// Shatter bits for a breakable platform (rectangular shards).
function shatter(p) {
  const cx = p.x + p.w / 2;
  for (let i = 0; i < 10; i++) {
    particles.push({
      x: p.x + Math.random() * p.w,
      y: p.y + Math.random() * PLAT_H,
      vx: (Math.random() - 0.5) * 240,
      vy: 40 + Math.random() * 180,
      life: 1,
      decay: 1.1 + Math.random() * 0.6,
      r: 3 + Math.random() * 4,
      color: COLORS.danger,
      rect: true,
    });
  }
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function update(dt) {
  // Clamp dt so a tab-switch can't fling the player through everything.
  dt = Math.min(dt, 1 / 30);

  // --- Horizontal steering -------------------------------------------------
  const dir = steerInput();
  if (dir !== 0) {
    player.vx += dir * MOVE_ACCEL * dt;
    player.facing = dir;
  } else {
    // Frame-rate-independent friction.
    player.vx *= Math.pow(MOVE_FRICTION, dt * 60);
  }
  player.vx = Math.max(-MOVE_MAX, Math.min(MOVE_MAX, player.vx));
  player.x += player.vx * dt;

  // Wrap around the screen edges.
  if (player.x < -player.r) player.x = VW + player.r;
  else if (player.x > VW + player.r) player.x = -player.r;

  // --- Gravity -------------------------------------------------------------
  player.vy += GRAVITY * dt;
  const prevY = player.y;
  player.y += player.vy * dt;

  // --- Platform movement & animation ---------------------------------------
  for (const p of platforms) {
    if (p.type === T_MOVING && !p.broken) {
      p.x += p.vx * dt;
      if (p.x <= 4) { p.x = 4; p.vx = Math.abs(p.vx); }
      else if (p.x + p.w >= VW - 4) { p.x = VW - 4 - p.w; p.vx = -Math.abs(p.vx); }
    }
    // Relax spring compression + bounce flash back toward rest.
    if (p.springC > 0) p.springC = Math.max(0, p.springC - dt * 5);
    if (p.bounceAnim > 0) p.bounceAnim = Math.max(0, p.bounceAnim - dt * 4);
    if (p.broken) p.breakAnim = Math.min(1, p.breakAnim + dt * 3);
  }

  // --- Landing detection ----------------------------------------------------
  // Only bounce while falling, and use swept detection (prev->curr foot) so we
  // never tunnel through a thin platform at high speed.
  if (player.vy > 0) {
    const footPrev = prevY + player.r;
    const footCurr = player.y + player.r;
    for (const p of platforms) {
      if (p.broken && p.type === T_BREAK) continue;
      const top = p.y;
      // Crossed the platform top this frame?
      if (footPrev <= top && footCurr >= top) {
        // Horizontal overlap (account for wrap-free simple case).
        if (player.x + player.r * 0.6 > p.x && player.x - player.r * 0.6 < p.x + p.w) {
          land(p);
          break;
        }
      }
    }
  }

  // --- Camera (only ever scrolls up) ---------------------------------------
  // Player world-y decreases as it climbs. Keep it at/above the camera line.
  const playerScreenY = player.y - cameraY;
  if (playerScreenY < CAMERA_LINE) {
    cameraY = player.y - CAMERA_LINE;
  }

  // Track best height for scoring.
  if (player.y < highestY) {
    highestY = player.y;
    const m = Math.floor((VH * 0.78 - highestY) / PIXELS_PER_METER);
    if (m > score) {
      score = m;
      dom.score.textContent = score;
    }
  }

  // Spawn above / cull below.
  fillPlatforms();
  cullPlatforms();

  // --- Squash & stretch easing back to neutral -----------------------------
  player.sx += (1 - player.sx) * Math.min(1, dt * 12);
  player.sy += (1 - player.sy) * Math.min(1, dt * 12);

  // Motion trail.
  player.trail.unshift({ x: player.x, y: player.y });
  if (player.trail.length > 6) player.trail.pop();

  // --- Particles ------------------------------------------------------------
  for (let i = particles.length - 1; i >= 0; i--) {
    const pt = particles[i];
    pt.vy += GRAVITY * 0.35 * dt;
    pt.x += pt.vx * dt;
    pt.y += pt.vy * dt;
    pt.life -= pt.decay * dt;
    if (pt.life <= 0) particles.splice(i, 1);
  }

  // Screen shake decay.
  if (shake > 0) shake = Math.max(0, shake - dt * 60);

  // --- Game over: fell below the visible bottom ----------------------------
  if (player.y - cameraY > VH + player.r) {
    endGame();
  }
}

// Handle the player landing on a platform `p`.
function land(p) {
  // Snap feet to the platform top.
  player.y = p.y - player.r;
  p.bounceAnim = 1;

  if (p.type === T_SPRING) {
    player.vy = SPRING_VELOCITY;
    p.springC = 1;
    player.sx = 0.7; player.sy = 1.4; // big stretch
    puff(player.x, p.y, COLORS.spring, 16, 120, 320);
    shake = Math.max(shake, 6);
    sndSpring();
  } else if (p.type === T_BREAK) {
    // Crumbles: the player falls through (no upward impulse).
    p.broken = true;
    player.sx = 1.25; player.sy = 0.75; // squash
    shatter(p);
    shake = Math.max(shake, 4);
    sndBreak();
    // Do NOT bounce — keep falling so the player must rely on the next tile.
  } else {
    player.vy = JUMP_VELOCITY;
    player.sx = 1.3; player.sy = 0.7; // squash on contact, springs back up
    puff(player.x, p.y, COLORS.amberSoft, 10, 40, 200);
    sndBounce();
  }
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
let time = 0;

function render() {
  // Background gradient shifts subtly with height climbed.
  drawBackground();

  ctx.save();
  // Apply screen shake.
  if (shake > 0) {
    ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
  }

  drawPlatforms();
  drawParticles();
  if (gameState !== "start") drawPlayer();

  ctx.restore();
}

function drawBackground() {
  // Hue/value drift with altitude for a sense of ascent.
  const d = difficulty();
  const t = Math.min(1, score / 600);
  const top = lerpColor([14, 16, 31], [26, 12, 40], t);   // deep indigo -> violet
  const bot = lerpColor([7, 7, 15], [10, 8, 20], t);
  const g = ctx.createLinearGradient(0, 0, 0, VH);
  g.addColorStop(0, top);
  g.addColorStop(1, bot);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, VW, VH);

  // Parallax starfield. Stars scroll based on camera + their depth, and wrap.
  for (const s of stars) {
    const py = ((s.y + cameraY * s.depth * 0.5) % VH + VH) % VH;
    const twinkle = 0.5 + 0.5 * Math.sin(time * 2 + s.tw);
    ctx.globalAlpha = (0.25 + s.depth * 0.5) * twinkle;
    ctx.fillStyle = COLORS.star;
    ctx.beginPath();
    ctx.arc(s.x, py, s.r, 0, TAU);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // A faint amber glow rising from the bottom edge.
  const glow = ctx.createRadialGradient(VW / 2, VH * 1.05, 40, VW / 2, VH * 1.05, VH * 0.8);
  glow.addColorStop(0, "rgba(255,159,28," + (0.12 + d * 0.06) + ")");
  glow.addColorStop(1, "rgba(255,159,28,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, VW, VH);
}

function drawPlatforms() {
  for (const p of platforms) {
    const sy = p.y - cameraY;          // screen y
    if (sy < -40 || sy > VH + 40) continue;
    const cx = p.x + p.w / 2;

    if (p.type === T_BREAK && p.broken) {
      // Shatter handled via particles; draw a quick fade of the slab.
      const a = 1 - p.breakAnim;
      if (a <= 0) continue;
      ctx.globalAlpha = a;
      drawSlab(p.x, sy, p.w, COLORS.danger, "rgba(255,111,111,0.35)");
      ctx.globalAlpha = 1;
      continue;
    }

    // Spring compression squashes the slab + draws a coil/pad above it.
    const compress = p.springC;
    const h = PLAT_H * (1 - 0.35 * (p.type === T_SPRING ? compress : 0));
    const slabY = sy + (PLAT_H - h);

    let main, glowC;
    if (p.type === T_SPRING) { main = COLORS.amber; glowC = "rgba(123,255,176,0.5)"; }
    else if (p.type === T_MOVING) { main = COLORS.moving; glowC = "rgba(95,184,255,0.45)"; }
    else if (p.type === T_BREAK) { main = COLORS.danger; glowC = "rgba(255,111,111,0.4)"; }
    else { main = COLORS.amber; glowC = "rgba(255,159,28,0.45)"; }

    // Bounce flash brightens the slab momentarily.
    if (p.bounceAnim > 0) {
      ctx.globalAlpha = 1;
    }

    drawSlab(p.x, slabY, p.w, main, glowC, h, p.bounceAnim);

    // Type-specific decoration.
    if (p.type === T_SPRING) {
      drawSpring(cx, slabY, compress);
    } else if (p.type === T_BREAK) {
      // Cracks across the slab.
      ctx.strokeStyle = "rgba(0,0,0,0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(p.x + p.w * 0.3, slabY + 2);
      ctx.lineTo(p.x + p.w * 0.45, slabY + h - 2);
      ctx.moveTo(p.x + p.w * 0.65, slabY + 2);
      ctx.lineTo(p.x + p.w * 0.55, slabY + h - 2);
      ctx.stroke();
    } else if (p.type === T_MOVING) {
      // Little directional chevrons.
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      const dirSign = p.vx >= 0 ? 1 : -1;
      for (let k = -1; k <= 1; k++) {
        const ax = cx + k * 14;
        ctx.beginPath();
        ctx.moveTo(ax - 3 * dirSign, slabY + h / 2 - 3);
        ctx.lineTo(ax + 3 * dirSign, slabY + h / 2);
        ctx.lineTo(ax - 3 * dirSign, slabY + h / 2 + 3);
        ctx.fill();
      }
    }
  }
}

// Rounded neon slab with a top highlight.
function drawSlab(x, y, w, color, glowC, h, flash) {
  h = h || PLAT_H;
  ctx.save();
  ctx.shadowColor = glowC;
  ctx.shadowBlur = 14 + (flash || 0) * 12;
  ctx.fillStyle = color;
  roundRect(x, y, w, h, 6);
  ctx.fill();
  ctx.shadowBlur = 0;
  // Top highlight.
  ctx.fillStyle = flash ? "rgba(255,255,255," + (0.5 + flash * 0.4) + ")" : "rgba(255,255,255,0.35)";
  roundRect(x + 3, y + 2, w - 6, 3, 2);
  ctx.fill();
  ctx.restore();
}

// A little spring pad sitting on top of a spring platform.
function drawSpring(cx, slabTop, compress) {
  const baseY = slabTop;
  const fullH = 12;
  const h = fullH * (1 - 0.6 * compress);
  ctx.save();
  ctx.strokeStyle = COLORS.spring;
  ctx.lineWidth = 2.5;
  ctx.shadowColor = "rgba(123,255,176,0.7)";
  ctx.shadowBlur = 10;
  // Zig-zag coil.
  ctx.beginPath();
  const coils = 3;
  const topY = baseY - h;
  for (let i = 0; i <= coils; i++) {
    const yy = baseY - (h * i) / coils;
    const xx = cx + (i % 2 === 0 ? -6 : 6);
    if (i === 0) ctx.moveTo(cx - 6, baseY);
    ctx.lineTo(xx, yy);
  }
  ctx.stroke();
  // Pad on top.
  ctx.fillStyle = COLORS.spring;
  roundRect(cx - 10, topY - 4, 20, 5, 2);
  ctx.fill();
  ctx.restore();
}

function drawParticles() {
  for (const pt of particles) {
    const sy = pt.y - cameraY;
    if (sy < -20 || sy > VH + 20) continue;
    ctx.globalAlpha = Math.max(0, pt.life);
    ctx.fillStyle = pt.color;
    if (pt.rect) {
      ctx.fillRect(pt.x - pt.r / 2, sy - pt.r / 2, pt.r, pt.r);
    } else {
      ctx.beginPath();
      ctx.arc(pt.x, sy, pt.r * Math.max(0.2, pt.life), 0, TAU);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

function drawPlayer() {
  const sy = player.y - cameraY;

  // Motion trail (faint, behind the body).
  for (let i = player.trail.length - 1; i >= 0; i--) {
    const t = player.trail[i];
    const a = (1 - i / player.trail.length) * 0.18;
    ctx.globalAlpha = a;
    ctx.fillStyle = COLORS.amber;
    ctx.beginPath();
    ctx.arc(t.x, t.y - cameraY, player.r * 0.8, 0, TAU);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.save();
  ctx.translate(player.x, sy);
  ctx.scale(player.sx * (player.facing < 0 ? -1 : 1), player.sy);

  // Glowing body.
  ctx.shadowColor = "rgba(255,159,28,0.8)";
  ctx.shadowBlur = 22;
  const grad = ctx.createRadialGradient(-4, -5, 2, 0, 0, player.r);
  grad.addColorStop(0, "#fff3d6");
  grad.addColorStop(0.5, COLORS.player);
  grad.addColorStop(1, COLORS.amberDeep);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, player.r, 0, TAU);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Eyes (look in the direction of travel; the scale flip handles facing).
  ctx.fillStyle = "#1a1206";
  ctx.beginPath();
  ctx.arc(4, -4, 3.1, 0, TAU);
  ctx.arc(11, -4, 3.1, 0, TAU);
  ctx.fill();
  // Eye shine.
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.beginPath();
  ctx.arc(5, -5, 1, 0, TAU);
  ctx.arc(12, -5, 1, 0, TAU);
  ctx.fill();

  ctx.restore();
}

// ----------------------------------------------------------------------------
// Drawing helpers
// ----------------------------------------------------------------------------
function roundRect(x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function lerpColor(a, b, t) {
  const r = Math.round(a[0] + (b[0] - a[0]) * t);
  const g = Math.round(a[1] + (b[1] - a[1]) * t);
  const bl = Math.round(a[2] + (b[2] - a[2]) * t);
  return "rgb(" + r + "," + g + "," + bl + ")";
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastT = 0;
function loop(now) {
  const dt = lastT ? (now - lastT) / 1000 : 0;
  lastT = now;
  time += dt;

  if (gameState === "playing") {
    update(dt);
  }
  render();

  requestAnimationFrame(loop);
}

// ----------------------------------------------------------------------------
// Boot
// ----------------------------------------------------------------------------
resize();
best = loadBest();
dom.hudBest && (dom.hudBest.textContent = best);
initGame();           // build a world so the title screen has a live backdrop
requestAnimationFrame(loop);

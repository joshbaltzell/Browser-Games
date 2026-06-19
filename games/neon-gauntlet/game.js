/*
 * NEON GAUNTLET — a room-by-room neon dungeon crawler.
 *
 * Move through rooms, fight enemies, collect XP, and build your skill tree
 * one level at a time.
 *
 * Pure vanilla JS + Canvas 2D. No assets, no dependencies.
 *
 * Sections below: Constants -> Canvas/state -> Input -> Update -> Render -> Main loop.
 *
 * No build step, no ES modules, no fetch — runs from file://.
 */

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;
const COLORS = {
  cyan:   "#00e5ff",
  pink:   "#ff3b6b",
  gold:   "#fffb96",
  purple: "#b388ff",
  white:  "#ffffff",
};
const GAME_STATE = { TITLE: "TITLE", PLAYING: "PLAYING" };

// ----------------------------------------------------------------------------
// Canvas & global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let W = 0;
let H = 0;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

let gameState = GAME_STATE.TITLE;
let audioCtx = null;
let muted = false;

// ----------------------------------------------------------------------------
// Audio helpers
// ----------------------------------------------------------------------------
function unlockAudio() {
  try {
    if (audioCtx === null) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  } catch (e) {
    // AudioContext not supported — audioCtx stays null, all sounds are no-ops.
  }
}

function playTone(opts) {
  if (!audioCtx || muted) return;
  try {
    if (audioCtx.state === "suspended") audioCtx.resume();
    const type    = opts.type    || "sine";
    const freq    = opts.freq    || 440;
    const endFreq = opts.endFreq;
    const dur     = opts.dur     || 0.1;
    const gain    = Math.min(0.3, opts.gain !== undefined ? opts.gain : 0.1);
    const now     = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (endFreq !== undefined) {
      if (freq > 0 && endFreq > 0) {
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + dur);
      } else {
        osc.frequency.linearRampToValueAtTime(endFreq, now + dur);
      }
    }

    // Attack/decay envelope — prevents clicks and pops.
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(gain, now + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.start(now);
    osc.stop(now + dur);
  } catch (e) {
    // Silently swallow any unexpected audio error — never break the game loop.
  }
}

// ----------------------------------------------------------------------------
// Glow helpers
// ----------------------------------------------------------------------------
function glowCircle(x, y, r, color, blur = 14) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fill();
  ctx.restore();
}

// Fills a closed path defined by pathFn() with a neon glow — mirrors glowCircle.
function glowShape(pathFn, color, blur = 12) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.fillStyle = color;
  pathFn();
  ctx.fill();
  ctx.restore();
}

// ----------------------------------------------------------------------------
// Input / audio-unlock gate
// ----------------------------------------------------------------------------
function handleFirstGesture() {
  unlockAudio();
  playTone({ type: "sine", freq: 220, endFreq: 440, dur: 0.18, gain: 0.14 });
  gameState = GAME_STATE.PLAYING;
  document.removeEventListener("keydown", handleFirstGesture);
  document.removeEventListener("pointerup", handleFirstGesture);
}
document.addEventListener("keydown", handleFirstGesture);
document.addEventListener("pointerup", handleFirstGesture);

// Mute button wiring
const muteBtn = document.getElementById("mute-btn");
if (muteBtn) {
  muteBtn.addEventListener("click", function () {
    muted = !muted;
    muteBtn.textContent = muted ? "🔇" : "🔊";
  });
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function update(dt) {
  if (gameState === GAME_STATE.PLAYING) {
    // TODO(phase-40): enemy updates, room logic
  }
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function renderTitle() {
  // Background
  ctx.fillStyle = "#05050c";
  ctx.fillRect(0, 0, W, H);

  // Decorative grid
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.strokeStyle = COLORS.cyan;
  ctx.lineWidth = 0.5;
  for (let y = 0; y < H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  for (let x = 0; x < W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  ctx.restore();

  // Wordmark "NEON GAUNTLET" with gradient
  const font = "bold 56px 'Segoe UI', system-ui, sans-serif";
  ctx.font = font;
  const wordmarkX = W / 2;
  const wordmarkY = H * 0.42;
  const textWidth = ctx.measureText("NEON GAUNTLET").width;
  const grad = ctx.createLinearGradient(wordmarkX - textWidth / 2, 0, wordmarkX + textWidth / 2, 0);
  grad.addColorStop(0, COLORS.cyan);
  grad.addColorStop(0.5, COLORS.purple);
  grad.addColorStop(1.0, COLORS.pink);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 24;
  ctx.fillStyle = grad;
  ctx.fillText("NEON GAUNTLET", wordmarkX, wordmarkY);

  // Subtitle "DUNGEON CRAWLER"
  ctx.font = "16px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#9a9ac0";
  ctx.shadowBlur = 0;
  ctx.fillText("DUNGEON CRAWLER", W / 2, wordmarkY + 28);

  // Prompt with pulsing opacity
  const alpha = 0.45 + 0.55 * Math.abs(Math.sin(Date.now() / 600));
  ctx.font = "15px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "rgba(154,154,192," + alpha + ")";
  ctx.fillText("PRESS ANY KEY OR CLICK TO START", W / 2, H * 0.42 + 72);
}

function renderPlaying() {
  // Background
  ctx.fillStyle = "#05050c";
  ctx.fillRect(0, 0, W, H);

  // Decorative grid (slightly more visible in playing state)
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = COLORS.cyan;
  ctx.lineWidth = 0.5;
  for (let y = 0; y < H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  for (let x = 0; x < W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  ctx.restore();

  // Center glow orb — pulsing cyan with pink core
  const pulse = Math.sin(Date.now() / 800);
  const r = 28 + pulse * 4;
  glowCircle(W / 2, H / 2, r, COLORS.cyan, 48);
  glowCircle(W / 2, H / 2, 10, COLORS.pink, 20);

  // Wordmark label above orb
  ctx.save();
  ctx.font = "bold 20px 'Segoe UI', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#e8e8ff";
  ctx.shadowBlur = 0;
  ctx.fillText("NEON GAUNTLET", W / 2, H / 2 - 72);
  ctx.restore();
  // TODO(phase-40): replace placeholder render with maze/room draw calls
}

function render() {
  if (gameState === GAME_STATE.TITLE) renderTitle();
  else if (gameState === GAME_STATE.PLAYING) renderPlaying();
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastTime = 0;
function loop(ts) {
  const dt = Math.min((ts - lastTime) / 1000, 0.05);
  lastTime = ts;
  update(dt);
  render();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

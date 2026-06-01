'use strict';

/* ═══════════════════════════════════════════════════════════════
   TETRA STORM — a neon falling-block puzzle (tetromino stacker)
   Dependency-free, runs from file:// (no modules, no fetch).
   ═══════════════════════════════════════════════════════════════ */

// ─── Playfield dimensions ─────────────────────────────────────
const COLS = 10;
const ROWS = 20;

// ─── Canvases ─────────────────────────────────────────────────
const boardCv = document.getElementById('board');
const bctx    = boardCv.getContext('2d');
const nextCv  = document.getElementById('next');
const nctx    = nextCv.getContext('2d');
const holdCv  = document.getElementById('hold');
const hctx    = holdCv.getContext('2d');

// HUD text elements
const elScore = document.getElementById('score');
const elLevel = document.getElementById('level');
const elLines = document.getElementById('lines');

// Cell size in CSS pixels (recomputed on resize to fit the window)
let CELL = 30;

// ─── Tetromino definitions ────────────────────────────────────
// Each piece: a list of rotation states, each a list of [x,y] cell
// offsets within a 4×4 box, plus a neon color.
const PIECES = {
  I: {
    color: '#36e0ff',
    rots: [
      [[0,1],[1,1],[2,1],[3,1]],
      [[2,0],[2,1],[2,2],[2,3]],
      [[0,2],[1,2],[2,2],[3,2]],
      [[1,0],[1,1],[1,2],[1,3]],
    ],
  },
  O: {
    color: '#ffd83d',
    rots: [
      [[1,0],[2,0],[1,1],[2,1]],
      [[1,0],[2,0],[1,1],[2,1]],
      [[1,0],[2,0],[1,1],[2,1]],
      [[1,0],[2,0],[1,1],[2,1]],
    ],
  },
  T: {
    color: '#b388ff',
    rots: [
      [[1,0],[0,1],[1,1],[2,1]],
      [[1,0],[1,1],[2,1],[1,2]],
      [[0,1],[1,1],[2,1],[1,2]],
      [[1,0],[0,1],[1,1],[1,2]],
    ],
  },
  S: {
    color: '#5dffa0',
    rots: [
      [[1,0],[2,0],[0,1],[1,1]],
      [[1,0],[1,1],[2,1],[2,2]],
      [[1,1],[2,1],[0,2],[1,2]],
      [[0,0],[0,1],[1,1],[1,2]],
    ],
  },
  Z: {
    color: '#ff5d7e',
    rots: [
      [[0,0],[1,0],[1,1],[2,1]],
      [[2,0],[1,1],[2,1],[1,2]],
      [[0,1],[1,1],[1,2],[2,2]],
      [[1,0],[0,1],[1,1],[0,2]],
    ],
  },
  J: {
    color: '#4d8bff',
    rots: [
      [[0,0],[0,1],[1,1],[2,1]],
      [[1,0],[2,0],[1,1],[1,2]],
      [[0,1],[1,1],[2,1],[2,2]],
      [[1,0],[1,1],[0,2],[1,2]],
    ],
  },
  L: {
    color: '#ff9f43',
    rots: [
      [[2,0],[0,1],[1,1],[2,1]],
      [[1,0],[1,1],[1,2],[2,2]],
      [[0,1],[1,1],[2,1],[0,2]],
      [[0,0],[1,0],[1,1],[1,2]],
    ],
  },
};
const TYPES = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];

// ─── Utility ──────────────────────────────────────────────────
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Lighten / darken a #rrggbb hex by amt (-1..1) for shading.
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  if (amt >= 0) {
    r += (255 - r) * amt; g += (255 - g) * amt; b += (255 - b) * amt;
  } else {
    r *= (1 + amt); g *= (1 + amt); b *= (1 + amt);
  }
  return 'rgb(' + (r|0) + ',' + (g|0) + ',' + (b|0) + ')';
}

// ═══════════════════════════════════════════════════════════════
//  AUDIO  (Web Audio API — generated tones, no files)
// ═══════════════════════════════════════════════════════════════
let AC = null;
function ac() {
  if (!AC) {
    try { AC = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (_) { return null; }
  }
  if (AC && AC.state === 'suspended') AC.resume();
  return AC;
}

function tone(freq, dur, type, vol, glideTo) {
  try {
    const a = ac(); if (!a) return;
    const t = a.currentTime;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type || 'square';
    o.frequency.setValueAtTime(freq, t);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
    g.gain.setValueAtTime(vol || 0.06, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); g.connect(a.destination);
    o.start(t); o.stop(t + dur);
  } catch (_) {}
}

const sfx = {
  move()   { tone(220, 0.04, 'square',   0.035); },
  rotate() { tone(360, 0.06, 'square',   0.045); },
  lock()   { tone(150, 0.08, 'triangle', 0.07, 90); },
  hold()   { tone(440, 0.08, 'sine',     0.05, 600); },
  hard()   { tone(110, 0.12, 'sawtooth', 0.08, 55); },
  clear(n) {
    // Rising arpeggio whose length scales with lines cleared.
    const base = [523, 659, 784, 1047];
    for (let i = 0; i < clamp(n, 1, 4); i++) {
      const f = base[i];
      setTimeout(() => tone(f, 0.16, 'triangle', 0.08), i * 45);
    }
  },
  tetra() {
    [523, 659, 784, 1047, 1318].forEach((f, i) =>
      setTimeout(() => tone(f, 0.22, 'sine', 0.09), i * 55));
  },
  over()   { tone(380, 1.0, 'sawtooth', 0.12, 50); },
};

// ═══════════════════════════════════════════════════════════════
//  GAME STATE
// ═══════════════════════════════════════════════════════════════
const ST = { TITLE: 0, PLAY: 1, CLEARING: 2, PAUSE: 3, OVER: 4 };
let state = ST.TITLE;

let grid;            // ROWS×COLS, each cell null or a color string
let cur;             // current piece { type, rot, x, y }
let nextType;        // next piece type
let holdType;        // held piece type (or null)
let holdLocked;      // can't hold twice in a row
let bag;             // 7-bag of remaining types

let score, level, lines;
let gtime = 0;       // global elapsed time (seconds)

// Gravity
let fallTimer = 0;
let lockTimer = 0;       // delay before a resting piece locks
const LOCK_DELAY = 0.5;
let softDropping = false;

// Line-clear animation
let clearRows = [];      // row indices being cleared
let clearTimer = 0;
const CLEAR_DUR = 0.35;
let wasTetra = false;

// Juice
let flash = 0;           // screen flash intensity 0..1
let shake = 0;           // screen shake magnitude
const particles = [];    // burst particles on clears

// ─── Persistent best score ────────────────────────────────────
function best() { return parseInt(localStorage.getItem('ts_best') || '0', 10); }
function saveBest(n) { if (n > best()) localStorage.setItem('ts_best', String(n)); }

// ═══════════════════════════════════════════════════════════════
//  7-BAG RANDOMIZER
// ═══════════════════════════════════════════════════════════════
function refillBag() {
  bag = TYPES.slice();
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
}
function nextFromBag() {
  if (!bag || bag.length === 0) refillBag();
  return bag.pop();
}

// ═══════════════════════════════════════════════════════════════
//  PIECE HELPERS
// ═══════════════════════════════════════════════════════════════
// Absolute board cells occupied by a piece at the given state.
function cellsOf(type, rot, px, py) {
  return PIECES[type].rots[((rot % 4) + 4) % 4].map(([cx, cy]) => [px + cx, py + cy]);
}

// True if a piece placement collides with walls, floor, or stack.
function collides(type, rot, px, py) {
  for (const [x, y] of cellsOf(type, rot, px, py)) {
    if (x < 0 || x >= COLS || y >= ROWS) return true;
    if (y >= 0 && grid[y][x]) return true;   // above-board cells allowed
  }
  return false;
}

// Spawn a new current piece from nextType; deal a fresh next.
function spawnPiece(forceType) {
  const type = forceType || nextType;
  if (!forceType) nextType = nextFromBag();

  cur = { type, rot: 0, x: 3, y: -1 };   // start partly above the field
  // Nudge down so the piece's top row sits at row 0 cleanly.
  cur.y = (type === 'I') ? -1 : 0;

  fallTimer = 0;
  lockTimer = 0;
  holdLocked = false;

  // Game over if the fresh piece already overlaps the stack.
  if (collides(cur.type, cur.rot, cur.x, cur.y)) {
    gameOver();
  }
}

// Lowest valid y for the current piece — used for the ghost.
function ghostY() {
  let gy = cur.y;
  while (!collides(cur.type, cur.rot, cur.x, gy + 1)) gy++;
  return gy;
}

// ═══════════════════════════════════════════════════════════════
//  MOVEMENT
// ═══════════════════════════════════════════════════════════════
function tryMove(dx, dy) {
  if (!collides(cur.type, cur.rot, cur.x + dx, cur.y + dy)) {
    cur.x += dx; cur.y += dy;
    if (dy === 0) sfx.move();
    lockTimer = 0;   // reset lock delay on a successful move
    return true;
  }
  return false;
}

// Rotate with basic wall kicks: try in place, then shift ±1, ±2.
function rotate(dir) {
  const nr = ((cur.rot + dir) % 4 + 4) % 4;
  const kicks = [0, -1, 1, -2, 2];
  for (const k of kicks) {
    if (!collides(cur.type, nr, cur.x + k, cur.y)) {
      cur.x += k;
      cur.rot = nr;
      lockTimer = 0;
      sfx.rotate();
      return true;
    }
  }
  return false;
}

// Hold / swap the current piece.
function holdPiece() {
  if (holdLocked) return;
  sfx.hold();
  if (holdType == null) {
    holdType = cur.type;
    spawnPiece();           // deal next as current
  } else {
    const swap = holdType;
    holdType = cur.type;
    spawnPiece(swap);       // bring held piece in as current
  }
  holdLocked = true;
}

// ═══════════════════════════════════════════════════════════════
//  LOCKING & LINE CLEARS
// ═══════════════════════════════════════════════════════════════
function lockPiece() {
  const color = PIECES[cur.type].color;
  for (const [x, y] of cellsOf(cur.type, cur.rot, cur.x, cur.y)) {
    if (y >= 0) grid[y][x] = color;
  }
  sfx.lock();

  // Find full rows.
  const full = [];
  for (let y = 0; y < ROWS; y++) {
    if (grid[y].every(c => c)) full.push(y);
  }

  if (full.length > 0) {
    clearRows = full;
    clearTimer = 0;
    wasTetra = (full.length === 4);
    state = ST.CLEARING;
    if (wasTetra) {
      sfx.tetra();
      flash = 1;
      shake = 9;
      spawnClearParticles(full);
    } else {
      sfx.clear(full.length);
      flash = 0.45;
      shake = 3;
    }
  } else {
    spawnPiece();
  }
}

// After the clear animation: remove rows, collapse, score, level up.
function finishClear() {
  const n = clearRows.length;

  // Remove the cleared rows top-down, then prepend empty rows.
  clearRows.sort((a, b) => a - b);
  for (const y of clearRows) grid.splice(y, 1);
  for (let i = 0; i < n; i++) grid.unshift(new Array(COLS).fill(null));

  // Scoring: 1/2/3/4 lines → 100/300/500/800 × level.
  const table = { 1: 100, 2: 300, 3: 500, 4: 800 };
  score += (table[n] || 0) * level;

  lines += n;
  const newLevel = Math.floor(lines / 10) + 1;
  if (newLevel > level) level = newLevel;

  clearRows = [];
  updateHUD();
  // Return to play first; spawnPiece() may itself trigger game over.
  state = ST.PLAY;
  spawnPiece();
}

// ═══════════════════════════════════════════════════════════════
//  GRAVITY
// ═══════════════════════════════════════════════════════════════
// Seconds per gravity step. Speeds up per level, capped for playability.
function fallInterval() {
  const t = Math.max(0.05, 0.9 - (level - 1) * 0.075);
  return softDropping ? Math.min(t, 0.04) : t;
}

// ═══════════════════════════════════════════════════════════════
//  GAME FLOW
// ═══════════════════════════════════════════════════════════════
function newGame() {
  grid = Array.from({ length: ROWS }, () => new Array(COLS).fill(null));
  score = 0; level = 1; lines = 0;
  holdType = null; holdLocked = false;
  refillBag();
  nextType = nextFromBag();
  particles.length = 0;
  flash = 0; shake = 0;
  clearRows = [];
  spawnPiece();
  state = ST.PLAY;
  updateHUD();
}

function gameOver() {
  state = ST.OVER;
  saveBest(score);
  sfx.over();
  shake = 12;
}

function updateHUD() {
  elScore.textContent = score.toLocaleString();
  elLevel.textContent = level;
  elLines.textContent = lines;
}

// ═══════════════════════════════════════════════════════════════
//  PARTICLES  (Tetra burst)
// ═══════════════════════════════════════════════════════════════
function spawnClearParticles(rows) {
  const colors = ['#b388ff', '#ffffff', '#36e0ff', '#ff5d7e'];
  for (const y of rows) {
    for (let i = 0; i < 26; i++) {
      const x = Math.random() * COLS;
      particles.push({
        x: x, y: y + 0.5,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10 - 2,
        life: 1, max: 0.6 + Math.random() * 0.5,
        r: 0.12 + Math.random() * 0.18,
        color: colors[(Math.random() * colors.length) | 0],
      });
    }
  }
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 22 * dt;       // gravity (in cell units)
    p.life -= dt / p.max;
    if (p.life <= 0) particles.splice(i, 1);
  }
}

// ═══════════════════════════════════════════════════════════════
//  INPUT  — with DAS-style horizontal repeat
// ═══════════════════════════════════════════════════════════════
const keys = new Set();
let dasDir = 0;       // -1 left, +1 right, 0 none
let dasTimer = 0;
const DAS_DELAY  = 0.16;   // initial delay before auto-repeat
const DAS_REPEAT = 0.045;  // repeat interval

const PREVENT = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'];

window.addEventListener('keydown', e => {
  if (PREVENT.includes(e.code)) e.preventDefault();

  // Title / Over: Enter starts.
  if (state === ST.TITLE || state === ST.OVER) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') { ac(); newGame(); }
    return;
  }

  // Pause toggle works in PLAY / PAUSE.
  if (e.code === 'KeyP') {
    if (state === ST.PLAY) state = ST.PAUSE;
    else if (state === ST.PAUSE) state = ST.PLAY;
    return;
  }
  if (state !== ST.PLAY) return;       // ignore play-controls while clearing/paused
  if (e.repeat) return;                // we run our own DAS

  switch (e.code) {
    case 'ArrowLeft':
      tryMove(-1, 0); dasDir = -1; dasTimer = 0; break;
    case 'ArrowRight':
      tryMove(1, 0);  dasDir = 1;  dasTimer = 0; break;
    case 'ArrowDown':
      softDropping = true; break;
    case 'ArrowUp':
    case 'KeyX':
      rotate(1); break;               // clockwise
    case 'KeyZ':
      rotate(-1); break;              // counter-clockwise
    case 'KeyC':
      holdPiece(); break;
    case 'Space':
      hardDrop(); break;
  }
});

window.addEventListener('keyup', e => {
  if (e.code === 'ArrowDown') softDropping = false;
  if (e.code === 'ArrowLeft'  && dasDir === -1) dasDir = 0;
  if (e.code === 'ArrowRight' && dasDir ===  1) dasDir = 0;
});

function hardDrop() {
  let dropped = 0;
  while (tryMove(0, 1)) dropped++;
  score += dropped * 2;                 // hard-drop bonus +2/cell
  sfx.hard();
  shake = Math.max(shake, 4);
  updateHUD();
  lockPiece();
}

// Click anywhere to start / restart (besides Enter).
boardCv.addEventListener('pointerdown', () => {
  ac();
  if (state === ST.TITLE || state === ST.OVER) newGame();
});

// ═══════════════════════════════════════════════════════════════
//  UPDATE
// ═══════════════════════════════════════════════════════════════
function update(dt) {
  gtime += dt;

  // Decay juice effects.
  if (flash > 0) flash = Math.max(0, flash - dt * 2.2);
  if (shake > 0) shake = Math.max(0, shake - dt * 30);
  updateParticles(dt);

  if (state === ST.CLEARING) {
    clearTimer += dt;
    if (clearTimer >= CLEAR_DUR) finishClear();
    return;
  }

  if (state !== ST.PLAY) return;

  // Horizontal auto-repeat (DAS).
  if (dasDir !== 0) {
    dasTimer += dt;
    if (dasTimer >= DAS_DELAY) {
      while (dasTimer >= DAS_DELAY + DAS_REPEAT) {
        tryMove(dasDir, 0);
        dasTimer -= DAS_REPEAT;
      }
    }
  }

  // Gravity.
  fallTimer += dt;
  const iv = fallInterval();
  if (fallTimer >= iv) {
    fallTimer -= iv;
    if (tryMove(0, 1)) {
      if (softDropping) { score += 1; updateHUD(); }
    }
  }

  // Lock delay: if the piece can't fall, count down then lock.
  if (collides(cur.type, cur.rot, cur.x, cur.y + 1)) {
    lockTimer += dt;
    if (lockTimer >= LOCK_DELAY) lockPiece();
  } else {
    lockTimer = 0;
  }
}

// ═══════════════════════════════════════════════════════════════
//  RENDERING
// ═══════════════════════════════════════════════════════════════
// Fit the board canvas to the available window space.
function fitCanvas() {
  const maxH = window.innerHeight - 60;
  const maxW = window.innerWidth - 260;   // leave room for the HUD
  const cellByH = Math.floor(maxH / ROWS);
  const cellByW = Math.floor(maxW / COLS);
  CELL = clamp(Math.min(cellByH, cellByW), 16, 40);

  boardCv.width  = COLS * CELL;
  boardCv.height = ROWS * CELL;
}
fitCanvas();
window.addEventListener('resize', fitCanvas);

// Draw one neon block at board cell (cx,cy) with inner highlight.
function drawBlock(ctx, cx, cy, cell, color, alpha) {
  const x = cx * cell, y = cy * cell, s = cell;
  ctx.globalAlpha = alpha == null ? 1 : alpha;

  // Glow base.
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = (alpha != null && alpha < 1) ? 0 : cell * 0.35;
  roundRect(ctx, x + 1, y + 1, s - 2, s - 2, Math.max(2, cell * 0.14));
  ctx.fill();
  ctx.shadowBlur = 0;

  // Inner gradient highlight (top-left bright → bottom-right dark).
  const g = ctx.createLinearGradient(x, y, x + s, y + s);
  g.addColorStop(0, shade(color, 0.45));
  g.addColorStop(0.5, color);
  g.addColorStop(1, shade(color, -0.35));
  ctx.fillStyle = g;
  roundRect(ctx, x + 2, y + 2, s - 4, s - 4, Math.max(2, cell * 0.12));
  ctx.fill();

  // Glossy top edge.
  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  roundRect(ctx, x + 3, y + 3, s - 6, (s - 6) * 0.32, Math.max(1, cell * 0.08));
  ctx.fill();

  ctx.globalAlpha = 1;
}

// Outlined ghost cell.
function drawGhost(ctx, cx, cy, cell, color) {
  const x = cx * cell, y = cy * cell, s = cell;
  ctx.globalAlpha = 0.32;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  roundRect(ctx, x + 2, y + 2, s - 4, s - 4, Math.max(2, cell * 0.12));
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.10;
  ctx.fill();
  ctx.globalAlpha = 1;
}

function roundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawBoard() {
  const W = boardCv.width, H = boardCv.height;

  // Screen-shake offset.
  const sx = (Math.random() - 0.5) * shake;
  const sy = (Math.random() - 0.5) * shake;
  bctx.save();
  bctx.clearRect(0, 0, W, H);
  bctx.translate(sx, sy);

  // Background.
  bctx.fillStyle = '#0a0a14';
  bctx.fillRect(-shake, -shake, W + shake * 2, H + shake * 2);

  // Subtle grid lines.
  bctx.strokeStyle = 'rgba(179,136,255,0.06)';
  bctx.lineWidth = 1;
  for (let c = 1; c < COLS; c++) {
    bctx.beginPath(); bctx.moveTo(c * CELL, 0); bctx.lineTo(c * CELL, H); bctx.stroke();
  }
  for (let r = 1; r < ROWS; r++) {
    bctx.beginPath(); bctx.moveTo(0, r * CELL); bctx.lineTo(W, r * CELL); bctx.stroke();
  }

  // Settled stack.
  for (let y = 0; y < ROWS; y++) {
    const clearing = clearRows.includes(y);
    for (let x = 0; x < COLS; x++) {
      if (!grid[y][x]) continue;
      if (clearing) {
        // Flash white→fade during the clear animation.
        const t = clearTimer / CLEAR_DUR;
        const blink = (Math.sin(t * 30) * 0.5 + 0.5);
        bctx.globalAlpha = 1;
        drawBlock(bctx, x, y, CELL, blink > 0.5 ? '#ffffff' : grid[y][x], 1 - t * 0.4);
      } else {
        drawBlock(bctx, x, y, CELL, grid[y][x]);
      }
    }
  }

  // Active piece + ghost (only while playing or paused).
  if (cur && (state === ST.PLAY || state === ST.PAUSE)) {
    const color = PIECES[cur.type].color;
    const gy = ghostY();
    for (const [x, y] of cellsOf(cur.type, cur.rot, cur.x, gy)) {
      if (y >= 0) drawGhost(bctx, x, y, CELL, color);
    }
    for (const [x, y] of cellsOf(cur.type, cur.rot, cur.x, cur.y)) {
      if (y >= 0) drawBlock(bctx, x, y, CELL, color);
    }
  }

  // Tetra particles.
  for (const p of particles) {
    bctx.globalAlpha = clamp(p.life, 0, 1);
    bctx.fillStyle = p.color;
    bctx.shadowColor = p.color;
    bctx.shadowBlur = 8;
    bctx.beginPath();
    bctx.arc(p.x * CELL, p.y * CELL, p.r * CELL, 0, Math.PI * 2);
    bctx.fill();
  }
  bctx.shadowBlur = 0;
  bctx.globalAlpha = 1;

  bctx.restore();

  // Full-board flash (Tetra / line clear).
  if (flash > 0) {
    bctx.fillStyle = 'rgba(179,136,255,' + (flash * 0.35) + ')';
    bctx.fillRect(0, 0, W, H);
  }

  // Overlays.
  if (state === ST.TITLE)  drawTitle();
  if (state === ST.PAUSE)  drawPause();
  if (state === ST.OVER)   drawOver();
}

// Render a piece centered in a small preview canvas.
function drawPreview(ctx, type) {
  const cv = ctx.canvas;
  ctx.clearRect(0, 0, cv.width, cv.height);
  if (!type) return;
  const cells = PIECES[type].rots[0];
  // Bounding box.
  let minx = 4, maxx = 0, miny = 4, maxy = 0;
  for (const [x, y] of cells) {
    minx = Math.min(minx, x); maxx = Math.max(maxx, x);
    miny = Math.min(miny, y); maxy = Math.max(maxy, y);
  }
  const w = maxx - minx + 1, h = maxy - miny + 1;
  const pc = clamp(Math.floor(Math.min(cv.width / 5, cv.height / 4)), 14, 22);
  const ox = (cv.width  - w * pc) / 2 - minx * pc;
  const oy = (cv.height - h * pc) / 2 - miny * pc;
  const color = PIECES[type].color;
  for (const [x, y] of cells) {
    drawBlock(ctx, (ox + x * pc) / pc, (oy + y * pc) / pc, pc, color);
  }
}

// ─── Overlays ─────────────────────────────────────────────────
function dim(alpha) {
  bctx.fillStyle = 'rgba(7,7,15,' + alpha + ')';
  bctx.fillRect(0, 0, boardCv.width, boardCv.height);
}

function centerText(text, y, size, color, glow, weight) {
  bctx.textAlign = 'center';
  bctx.textBaseline = 'middle';
  bctx.font = (weight || 'bold') + ' ' + size + 'px "Segoe UI", system-ui, sans-serif';
  bctx.fillStyle = color;
  if (glow) { bctx.shadowColor = glow; bctx.shadowBlur = 18; }
  bctx.fillText(text, boardCv.width / 2, y);
  bctx.shadowBlur = 0;
}

function drawTitle() {
  dim(0.78);
  const cx = boardCv.width / 2;
  const pulse = 0.6 + Math.sin(gtime * 2.4) * 0.4;
  centerText('TETRA', boardCv.height * 0.24, Math.min(54, CELL * 1.7), '#ffffff', '#b388ff');
  centerText('STORM', boardCv.height * 0.24 + CELL * 1.7, Math.min(40, CELL * 1.3), '#b388ff', '#7c5bd6');

  const lh = Math.max(15, CELL * 0.55);
  let y = boardCv.height * 0.48;
  bctx.fillStyle = '#b9b2e0';
  const ctrlLines = [
    '← →  Move',
    '↑ / X  Rotate    Z  Rotate CCW',
    '↓  Soft drop    Space  Hard drop',
    'C  Hold    P  Pause',
  ];
  for (const l of ctrlLines) {
    centerText(l, y, Math.max(12, CELL * 0.42), '#b9b2e0', null, 'normal');
    y += lh;
  }

  bctx.globalAlpha = pulse;
  centerText('Press Enter / click to start', boardCv.height * 0.82,
    Math.max(14, CELL * 0.5), '#b388ff', '#7c5bd6');
  bctx.globalAlpha = 1;

  if (best() > 0) {
    centerText('Best  ' + best().toLocaleString(), boardCv.height * 0.9,
      Math.max(11, CELL * 0.38), '#7a72a8', null, 'normal');
  }
}

function drawPause() {
  dim(0.66);
  centerText('PAUSED', boardCv.height * 0.42, Math.min(46, CELL * 1.5), '#ffffff', '#b388ff');
  centerText('Press P to resume', boardCv.height * 0.42 + CELL * 1.6,
    Math.max(13, CELL * 0.46), '#b9b2e0', null, 'normal');
}

function drawOver() {
  dim(0.8);
  const pulse = 0.6 + Math.sin(gtime * 2.4) * 0.4;
  centerText('GAME OVER', boardCv.height * 0.3, Math.min(44, CELL * 1.45), '#ff5d7e', '#ff5d7e');
  centerText('Score', boardCv.height * 0.46, Math.max(13, CELL * 0.46), '#8a82b8', null, 'normal');
  centerText(score.toLocaleString(), boardCv.height * 0.46 + CELL * 0.95,
    Math.min(40, CELL * 1.25), '#ffffff', '#b388ff');

  const isBest = score > 0 && score >= best();
  centerText(isBest ? '★ New Best!' : 'Best  ' + best().toLocaleString(),
    boardCv.height * 0.64, Math.max(13, CELL * 0.46),
    isBest ? '#ffd83d' : '#7a72a8', isBest ? '#ffd83d' : null, isBest ? 'bold' : 'normal');

  bctx.globalAlpha = pulse;
  centerText('Press Enter / click to restart', boardCv.height * 0.8,
    Math.max(13, CELL * 0.46), '#b388ff', '#7c5bd6');
  bctx.globalAlpha = 1;
}

// ═══════════════════════════════════════════════════════════════
//  MAIN LOOP
// ═══════════════════════════════════════════════════════════════
function render() {
  drawBoard();
  drawPreview(nctx, (state === ST.TITLE) ? null : nextType);
  drawPreview(hctx, holdType);
}

let lastTS = 0;
function loop(ts) {
  const dt = Math.min((ts - lastTS) / 1000, 0.05);
  lastTS = ts;
  update(dt);
  render();
  requestAnimationFrame(loop);
}

// ─── Boot ─────────────────────────────────────────────────────
// Initialize an idle grid so the title overlay has a backdrop.
grid = Array.from({ length: ROWS }, () => new Array(COLS).fill(null));
score = 0; level = 1; lines = 0;
holdType = null; nextType = null; cur = null;
updateHUD();
state = ST.TITLE;

requestAnimationFrame(ts => { lastTS = ts; requestAnimationFrame(loop); });

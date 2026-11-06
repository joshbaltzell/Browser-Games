'use strict';

// ═══════════════════════════════════════════════════════════════
//  Cartographer's Curse — Phase 1: Core Mechanic Prototype
//  Draw your dungeon, commit it, then survive inside your own lines.
//  Grey-box draft: legibility + feel over styling (styling is Phase 2).
// ═══════════════════════════════════════════════════════════════

// ---------- Canvas + fixed logical resolution ----------
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const W = 960, H = 600;
canvas.width = W;
canvas.height = H;

function fitCanvas() {
  const s = Math.min(window.innerWidth / W, window.innerHeight / H);
  canvas.style.width = Math.floor(W * s) + 'px';
  canvas.style.height = Math.floor(H * s) + 'px';
}
fitCanvas();
window.addEventListener('resize', fitCanvas);

// Convert a DOM mouse event into logical canvas coordinates.
function eventToLogical(e) {
  const r = canvas.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width * W;
  const y = (e.clientY - r.top) / r.height * H;
  return { x, y };
}

// ---------- Palette (antique surveyor's field journal — sepia & iron-gall ink) ----------
const COLORS = {
  parchment: '#dcc8a0',
  parchmentHi: '#e8d8b4',     // sun-bleached high spots of paper
  parchmentLo: '#c2a877',     // aged/shadowed paper
  parchmentEdge: '#b29a6c',
  vignette: 'rgba(58,38,16,0.55)',
  ink: '#33240f',             // iron-gall ink, near-black brown
  inkSoft: '#5a4528',
  inkBleed: 'rgba(51,36,15,0.22)', // halo around a wet quill line
  inkFaint: 'rgba(58,42,24,0.35)',
  stipple: 'rgba(51,36,15,0.5)',
  player: '#2e5e44',          // surveyor's green-ink pin
  playerInk: '#1f4030',
  enemyMelee: '#7a2b2b',      // crimson spider-blot
  enemyRanged: '#3f2c6b',     // violet ink mark
  proj: '#6a2424',
  stairs: '#1f4a6b',
  rival: '#7a1f3a',           // rival cartographer's crimson hand
  rivalBleed: 'rgba(122,31,58,0.2)',
  ghost: 'rgba(51,36,15,0.14)', // bled-through old maps
  meter: '#4a3a1f',
  meterInk: '#33240f',
  meterBg: 'rgba(58,42,24,0.18)',
  hpGood: '#7a2b2b',     // a sealed-wax heart
  hpEmpty: 'rgba(58,42,24,0.15)',
  hpLow: '#a23b2b',
  panel: 'rgba(38,26,12,0.9)',
  panelEdge: 'rgba(180,150,100,0.5)',
  text: '#ecdcb8',
  textDim: '#b7a079',
  accent: '#c98a3a'
};

// ---------- Audio (file://-safe, lazy, resumed on first gesture) ----------
// Identity: a quiet study room. A low parchment-coloured drone, a quill that
// hisses as you draw, and a wax-seal thud when the map is sealed.
let audioCtx = null;
let audioReady = false;
let masterGain = null;
let ambGain = null;          // ambience bus
let noiseBuffer = null;      // shared white-noise buffer
let ambStarted = false;
let lastScratchT = 0;

function makeNoiseBuffer() {
  if (!audioCtx) return null;
  const len = Math.floor(audioCtx.sampleRate * 1.2);
  const buf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

function startAmbience() {
  if (ambStarted || !audioCtx) return;
  try {
    ambStarted = true;
    // Low, warm room drone (two detuned sines + a filtered-noise "air" layer).
    const t = audioCtx.currentTime;
    const drone = audioCtx.createGain();
    drone.gain.value = 0.05;
    drone.connect(ambGain);
    [55, 82.4, 110].forEach((f, i) => {
      const o = audioCtx.createOscillator();
      o.type = 'sine';
      o.frequency.value = f * (1 + (i - 1) * 0.004);
      const og = audioCtx.createGain();
      og.gain.value = i === 0 ? 0.6 : 0.22;
      // slow tremolo so the drone breathes
      const lfo = audioCtx.createOscillator();
      lfo.frequency.value = 0.07 + i * 0.03;
      const lg = audioCtx.createGain();
      lg.gain.value = 0.12;
      lfo.connect(lg).connect(og.gain);
      o.connect(og).connect(drone);
      o.start(t); lfo.start(t);
    });
    // faint paper "air": noise through a low bandpass
    const air = audioCtx.createBufferSource();
    air.buffer = noiseBuffer; air.loop = true;
    const bp = audioCtx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 600; bp.Q.value = 0.5;
    const ag = audioCtx.createGain(); ag.gain.value = 0.015;
    air.connect(bp).connect(ag).connect(ambGain);
    air.start(t);
  } catch (e) { /* ignore */ }
}

function unlockAudio() {
  try {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioCtx = new AC();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = 0.9;
      masterGain.connect(audioCtx.destination);
      ambGain = audioCtx.createGain();
      ambGain.gain.value = 1.0;
      ambGain.connect(masterGain);
      noiseBuffer = makeNoiseBuffer();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    audioReady = true;
    startAmbience();
  } catch (err) { /* file:// safety: never throw */ }
}

function beep(freq, dur, type, vol) {
  if (!audioReady || !audioCtx) return;
  try {
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol || 0.18, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.1));
    osc.connect(g).connect(masterGain);
    osc.start(t);
    osc.stop(t + (dur || 0.1) + 0.02);
  } catch (err) { /* ignore */ }
}

// A short burst of filtered noise — the basis for quill, wax and impacts.
function noiseBurst(dur, vol, filterType, freq, Q, sweepTo) {
  if (!audioReady || !audioCtx || !noiseBuffer) return;
  try {
    const t = audioCtx.currentTime;
    const src = audioCtx.createBufferSource();
    src.buffer = noiseBuffer;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = audioCtx.createBiquadFilter();
    f.type = filterType || 'bandpass';
    f.frequency.setValueAtTime(freq, t);
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    f.Q.value = Q || 1;
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(masterGain);
    src.start(t);
    src.stop(t + dur + 0.02);
  } catch (e) { /* ignore */ }
}

// Quill-on-paper: high, dry, scratchy noise — rate-limited so a drag hisses.
function sfxScratch() {
  if (!audioReady || !audioCtx) return;
  const now = audioCtx.currentTime;
  if (now - lastScratchT < 0.028) return;
  lastScratchT = now;
  noiseBurst(0.05, 0.05 + Math.random() * 0.03, 'highpass',
    2600 + Math.random() * 1800, 0.7);
}
// Wax-seal: a soft thud (low body) + a wet press (mid noise) + a tiny ring.
function sfxCommit() {
  beep(140, 0.16, 'sine', 0.0); // warm up bus
  // thud body
  if (audioReady && audioCtx) {
    try {
      const t = audioCtx.currentTime;
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(220, t);
      o.frequency.exponentialRampToValueAtTime(60, t + 0.22);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.32, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.34);
      o.connect(g).connect(masterGain);
      o.start(t); o.stop(t + 0.36);
    } catch (e) {}
  }
  noiseBurst(0.13, 0.18, 'lowpass', 900, 0.8); // wax press
  beep(660, 0.08, 'triangle', 0.05);           // tiny stamp ring
}
function sfxAttack() {
  noiseBurst(0.06, 0.07, 'bandpass', 1400, 1.2, 600); // pen swipe
  beep(300, 0.05, 'triangle', 0.06);
}
function sfxHit() { noiseBurst(0.1, 0.16, 'bandpass', 380, 1.5); beep(150, 0.1, 'square', 0.1); }
function sfxEnemyDie() { noiseBurst(0.24, 0.16, 'lowpass', 700, 0.7, 120); beep(90, 0.18, 'sawtooth', 0.1); }
function sfxShoot() { noiseBurst(0.07, 0.07, 'highpass', 1800, 0.8); beep(420, 0.05, 'triangle', 0.05); }
function sfxStairs() { beep(523, 0.12, 'sine', 0.16); beep(784, 0.18, 'sine', 0.14); beep(1046, 0.22, 'sine', 0.1); }
function sfxDeath() { noiseBurst(0.6, 0.2, 'lowpass', 500, 0.6, 80); beep(160, 0.5, 'sawtooth', 0.16); beep(70, 0.7, 'sine', 0.16); }
// Escape: a bright rising arpeggio — daylight after the deep dark.
function sfxWin() {
  [523, 659, 784, 1046, 1318].forEach((f, i) => {
    setTimeout(() => beep(f, 0.4, 'triangle', 0.13), i * 110);
  });
  beep(196, 0.9, 'sine', 0.08);
  noiseBurst(0.5, 0.05, 'highpass', 3000, 0.5);
}
// Twist: rival's scratching hand — a darker, hurried quill flourish.
function sfxRival() {
  noiseBurst(0.5, 0.09, 'highpass', 2000, 0.6);
  beep(196, 0.4, 'sawtooth', 0.05);
  beep(146, 0.5, 'sine', 0.06);
}

// ═══════════════════════════════════════════════════════════════
//  Game state model
// ═══════════════════════════════════════════════════════════════
const TITLE = 'TITLE', DRAW = 'DRAW', REVEAL = 'REVEAL', PLAY = 'PLAY', GAMEOVER = 'GAMEOVER', WIN = 'WIN';
let state = TITLE;

// ---------- Progression curve (Phase 4: Content & Progression) ----------
// A complete descend-OR-die run with a finite goal: survive to the surface.
// Reaching the exit on FINAL_FLOOR is the WIN; running out of HP is the LOSE.
const FINAL_FLOOR = 10;          // escape the curse by clearing this floor
// Per-depth "interest curve": short authored beats so the run has a shape, not
// just a slope. Keys are floor numbers; value is the descend banner + a tier tag.
const FLOOR_BEATS = {
  1:  { tag: 'The Surface Survey', hint: 'Floor 1 — draw your dungeon' },
  2:  { tag: 'Deeper', hint: 'Floor 2 — less ink. Make every wall count' },
  3:  { tag: 'The Narrows', hint: 'Floor 3 — tighter quarters, more company' },
  4:  { tag: 'Calm Before', hint: 'Floor 4 — the ink runs thin' },
  5:  { tag: 'The Rival Wakes', hint: 'A rival hand appears — draw HALF a floor; it finishes the rest' },
  6:  { tag: 'Contested', hint: 'Floor 6 — leave a flaw to bait the rival' },
  7:  { tag: 'The Rival Learns', hint: 'Floor 7 — it copies your hand more closely' },
  8:  { tag: 'The Deep Dark', hint: 'Floor 8 — snipers everywhere. Cover is life' },
  9:  { tag: 'Nearly Out', hint: 'Floor 9 — one more, then the surface' },
  10: { tag: 'THE ASCENT', hint: 'Floor 10 — reach the EXIT to escape the curse' }
};

const PLAY_AREA = { x: 30, y: 60, w: W - 60, h: H - 90 }; // drawable / playable region

let strokes = [];        // [{points:[{x,y}], length}]
let curStroke = null;    // in-progress stroke during a drag
let drawing = false;
let inkMax = 1700;
let inkRemaining = inkMax;

let walls = [];          // [{x1,y1,x2,y2}] derived at commit
let player = null;       // {x,y,r,hp,maxHp,attackCd,hurtFlash}
let enemies = [];        // [{x,y,r,hp,type,...}]
let projectiles = [];    // [{x,y,vx,vy,r,life}]
let particles = [];      // grey-box dust/splatter
let stairs = null;       // {x,y,r}
let floor = 1;
let shake = 0;
let floorBanner = 0;     // ms remaining for floor-clear banner
// ---------- Juice timers (Phase 5) ----------
let commitFlash = 0;     // s — white wax-stamp flash on commit
let floorClearStamp = 0; // s — "SEALED / descend" stamp animation on floor clear
let descendWipe = 0;     // s — ink-wipe transition when descending
let hitStop = 0;         // s — brief freeze-frame on taking damage (game-feel)
let tutStep = 0;         // first-run tutorial step (0 = inactive)

const RESAMPLE_MIN = 6;  // px between sampled points
const WALL_THICK = 7;    // collision half-treats walls as having thickness

// ---------- The Twist: the rival cartographer ----------
const RIVAL_FLOOR = 5;          // from this floor on, the rival contests your map
let rivalActive = false;        // is the rival contesting the current floor?
let rivalStrokes = [];          // strokes the rival added this floor (also pushed to `strokes`)
let rivalAnim = 0;              // ms remaining of the "rival is drawing" cutscene
let rivalQueue = [];            // pending rival points to ink in over the cutscene
let rivalProgress = 0;          // index into the flattened rival reveal
let ghostMaps = [];             // [{strokes:[...]}] faint under-drawings of cleared floors
// Learned style profile, updated from the player's committed strokes.
let styleProfile = { segLen: 26, turniness: 0.35, samples: 0 };
let rivalSpawns = [];          // enemy spawn points the rival intends to use (its own)
let sabotageHits = 0;          // how many rival spawns got punished by a baited flaw
let twistBanner = 0;           // ms for the twist explainer banner

const BEST_KEY = 'cartographers-curse-best';
const ESCAPED_KEY = 'cartographers-curse-escaped';
const RUNS_KEY = 'cartographers-curse-runs';
const TUT_KEY = 'cartographers-curse-tutorial-seen';
let bestDepth = 0;
let hasEscaped = false;        // has the player ever beaten the run?
let totalRuns = 0;             // lifetime runs started
let tutorialSeen = false;      // has the first-run tutorial been shown?
try { bestDepth = parseInt(localStorage.getItem(BEST_KEY) || '0', 10) || 0; } catch (e) {}
try { hasEscaped = localStorage.getItem(ESCAPED_KEY) === '1'; } catch (e) {}
try { totalRuns = parseInt(localStorage.getItem(RUNS_KEY) || '0', 10) || 0; } catch (e) {}
try { tutorialSeen = localStorage.getItem(TUT_KEY) === '1'; } catch (e) {}
function saveBest() {
  try { localStorage.setItem(BEST_KEY, String(bestDepth)); } catch (e) {}
}
function saveEscaped() {
  hasEscaped = true;
  try { localStorage.setItem(ESCAPED_KEY, '1'); } catch (e) {}
}
function saveRuns() {
  try { localStorage.setItem(RUNS_KEY, String(totalRuns)); } catch (e) {}
}
function markTutorialSeen() {
  if (tutorialSeen) return;
  tutorialSeen = true;
  try { localStorage.setItem(TUT_KEY, '1'); } catch (e) {}
}

// ---------- Input ----------
const keys = {};
let mouse = { x: W / 2, y: H / 2, down: false };

window.addEventListener('keydown', (e) => {
  unlockAudio();
  const k = e.key.toLowerCase();
  keys[k] = true;

  if (state === TITLE) {
    if (k === 'enter' || k === ' ') { startRun(); }
    return;
  }
  if (state === GAMEOVER || state === WIN) {
    if (k === 'enter' || k === ' ') { resetToTitle(); }
    return;
  }
  if (state === DRAW) {
    if (k === 'z' || k === 'backspace') { undoStroke(); e.preventDefault(); }
    else if (k === 'enter') { commitMap(); }
    else if (k === 'd' && e.shiftKey) { /* reserved */ }
  }
  if (state === PLAY) {
    if (k === ' ') { tryAttack(); e.preventDefault(); }
  }
  // DEBUG shape test: press 'L' for L-bend preset, 'B' for blob preset (DRAW state)
  if (DEBUG && state === DRAW) {
    if (k === 'l') loadShapeTest('lbend');
    if (k === 'b') loadShapeTest('blob');
  }
});
window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });

canvas.addEventListener('mousemove', (e) => {
  const p = eventToLogical(e);
  mouse.x = p.x; mouse.y = p.y;
  if (state === DRAW && drawing) appendStrokePoint(p);
});

canvas.addEventListener('mousedown', (e) => {
  unlockAudio();
  const p = eventToLogical(e);
  mouse.x = p.x; mouse.y = p.y; mouse.down = true;

  if (state === TITLE) { startRun(); return; }
  if (state === GAMEOVER || state === WIN) { resetToTitle(); return; }
  if (state === DRAW) { beginStroke(p); }
  if (state === PLAY) { tryAttack(); }
});
window.addEventListener('mouseup', () => {
  mouse.down = false;
  if (state === DRAW) endStroke();
});

// ═══════════════════════════════════════════════════════════════
//  DRAW state — freehand wall drawing with an ink budget
// ═══════════════════════════════════════════════════════════════
function inArea(p) {
  return p.x >= PLAY_AREA.x && p.x <= PLAY_AREA.x + PLAY_AREA.w &&
         p.y >= PLAY_AREA.y && p.y <= PLAY_AREA.y + PLAY_AREA.h;
}
function clampToArea(p) {
  return {
    x: Math.max(PLAY_AREA.x, Math.min(PLAY_AREA.x + PLAY_AREA.w, p.x)),
    y: Math.max(PLAY_AREA.y, Math.min(PLAY_AREA.y + PLAY_AREA.h, p.y))
  };
}

function beginStroke(p) {
  if (inkRemaining <= 0) return;
  const cp = clampToArea(p);
  curStroke = { points: [cp], length: 0 };
  drawing = true;
}

function appendStrokePoint(p) {
  if (!curStroke) return;
  const cp = clampToArea(p);
  const last = curStroke.points[curStroke.points.length - 1];
  const d = Math.hypot(cp.x - last.x, cp.y - last.y);
  if (d < RESAMPLE_MIN) return;
  if (inkRemaining <= 0) return; // out of ink: block further drawing
  // Only spend as much ink as we have; if segment exceeds remaining, stop there.
  let segLen = d;
  if (segLen > inkRemaining) {
    // place a partial point along the direction up to remaining ink
    const t = inkRemaining / d;
    const px = last.x + (cp.x - last.x) * t;
    const py = last.y + (cp.y - last.y) * t;
    curStroke.points.push({ x: px, y: py });
    curStroke.length += inkRemaining;
    inkRemaining = 0;
    return;
  }
  curStroke.points.push(cp);
  curStroke.length += segLen;
  inkRemaining -= segLen;
  if (Math.random() < 0.5) sfxScratch();
}

function endStroke() {
  drawing = false;
  if (curStroke && curStroke.points.length >= 2) {
    strokes.push(curStroke);
  } else if (curStroke) {
    // tiny tap with no length: refund nothing meaningful, discard
    inkRemaining += curStroke.length;
  }
  curStroke = null;
}

function undoStroke() {
  if (strokes.length === 0) return;
  const s = strokes.pop();
  inkRemaining = Math.min(inkMax, inkRemaining + s.length);
  sfxScratch();
}

// ═══════════════════════════════════════════════════════════════
//  COMMIT — convert strokes into wall segments, place entities
// ═══════════════════════════════════════════════════════════════
function strokesToWalls() {
  const segs = [];
  for (const s of strokes) {
    for (let i = 0; i < s.points.length - 1; i++) {
      const a = s.points[i], b = s.points[i + 1];
      segs.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
    }
  }
  return segs;
}

// Distance from point to a segment.
function pointSegDist(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const len2 = dx * dx + dy * dy;
  let t = len2 === 0 ? 0 : ((px - x1) * dx + (py - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + t * dx, cy = y1 + t * dy;
  return Math.hypot(px - cx, py - cy);
}

// Is a circle of radius r at (x,y) clear of all walls and inside the area?
function isOpen(x, y, r) {
  if (x - r < PLAY_AREA.x || x + r > PLAY_AREA.x + PLAY_AREA.w) return false;
  if (y - r < PLAY_AREA.y || y + r > PLAY_AREA.y + PLAY_AREA.h) return false;
  for (const w of walls) {
    if (pointSegDist(x, y, w.x1, w.y1, w.x2, w.y2) < r + WALL_THICK) return false;
  }
  return true;
}

// Segment-segment intersection (for line-of-sight).
function segIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
  const d = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
  if (Math.abs(d) < 1e-9) return false;
  const t = ((cx - ax) * (dy - cy) - (cy - ay) * (dx - cx)) / d;
  const u = ((cx - ax) * (by - ay) - (cy - ay) * (bx - ax)) / d;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

// Clear line of sight between two points (no wall crosses the segment)?
function hasLOS(ax, ay, bx, by) {
  for (const w of walls) {
    if (segIntersect(ax, ay, bx, by, w.x1, w.y1, w.x2, w.y2)) return false;
  }
  return true;
}

// Find an open point, preferring near a target / far from a target.
function findOpenPoint(r, prefer) {
  let best = null, bestScore = -Infinity;
  for (let i = 0; i < 400; i++) {
    const x = PLAY_AREA.x + r + Math.random() * (PLAY_AREA.w - 2 * r);
    const y = PLAY_AREA.y + r + Math.random() * (PLAY_AREA.h - 2 * r);
    if (!isOpen(x, y, r)) continue;
    let score = Math.random();
    if (prefer && prefer.farFrom) {
      score = Math.hypot(x - prefer.farFrom.x, y - prefer.farFrom.y);
    } else if (prefer && prefer.nearWall) {
      // favor points close to (but clear of) a wall — better cover potential
      let nearest = Infinity;
      for (const w of walls) {
        nearest = Math.min(nearest, pointSegDist(x, y, w.x1, w.y1, w.x2, w.y2));
      }
      score = -Math.abs(nearest - (r + WALL_THICK + 14));
    }
    if (score > bestScore) { bestScore = score; best = { x, y }; }
  }
  return best;
}

// Depth-scaled difficulty (Phase 4: tuned escalation curve). Enemies get tougher
// and quicker with depth — not just more numerous — so deep floors feel deadlier.
function depthScale() {
  // 0 on floor 1, ramping to ~1 by the final floor
  return Math.min(1, (floor - 1) / (FINAL_FLOOR - 1));
}
function spawnEnemy(x, y, type) {
  const s = depthScale();
  if (type === 'ranged') {
    enemies.push({ x, y, r: 11,
      hp: 2 + (floor >= 7 ? 1 : 0), maxHp: 2 + (floor >= 7 ? 1 : 0), type: 'ranged',
      shootCd: 0.8 + Math.random() * 0.6,
      fireGap: 1.3 - s * 0.5,                    // faster fire when deep (1.3 → 0.8s)
      projSpeed: 240 + s * 90,                   // faster shots when deep
      range: 460 + s * 60, speed: 38 + s * 26, hurtFlash: 0,
      rivalSpawn: false });
  } else {
    enemies.push({ x, y, r: 12,
      hp: 3 + Math.floor(s * 2), maxHp: 3 + Math.floor(s * 2), type: 'melee',
      speed: 78 + s * 46, hurtFlash: 0, touchCd: 0, rivalSpawn: false });
  }
}

// ═══════════════════════════════════════════════════════════════
//  THE TWIST — the rival cartographer
//  It studies how you draw (segment length + how often you turn), then on
//  contested floors it completes your half-map in your own hand, faithfully
//  COPYING your habits — including any flaws you deliberately leave. Bait it
//  with a dead-end stub and it extends the dead end into a pocket where its
//  OWN spawns get trapped against your wall (authored sabotage).
// ═══════════════════════════════════════════════════════════════

// Learn the player's style from the strokes they just drew.
function learnStyle(srcStrokes) {
  let totSeg = 0, segCount = 0, totTurn = 0, turnCount = 0;
  for (const s of srcStrokes) {
    if (s.rival) continue;
    for (let i = 0; i < s.points.length - 1; i++) {
      const a = s.points[i], b = s.points[i + 1];
      totSeg += Math.hypot(b.x - a.x, b.y - a.y); segCount++;
      if (i > 0) {
        const p0 = s.points[i - 1];
        const a1 = Math.atan2(a.y - p0.y, a.x - p0.x);
        const a2 = Math.atan2(b.y - a.y, b.x - a.x);
        let d = Math.abs(a2 - a1);
        if (d > Math.PI) d = Math.PI * 2 - d;
        totTurn += d; turnCount++;
      }
    }
  }
  if (segCount > 0) {
    const segLen = totSeg / segCount;
    const turniness = turnCount > 0 ? totTurn / turnCount : styleProfile.turniness;
    // exponential moving average so the rival "learns" across floors
    const w = styleProfile.samples === 0 ? 1 : 0.5;
    styleProfile.segLen = styleProfile.segLen * (1 - w) + segLen * w;
    styleProfile.turniness = styleProfile.turniness * (1 - w) + turniness * w;
    styleProfile.samples++;
  }
}

// Detect a deliberately-left flaw: an open-ended stroke tip (a "stub").
// Returns the most isolated free endpoint — the player's invitation to the rival.
function findStubTip(srcStrokes) {
  let best = null, bestScore = -Infinity;
  for (const s of srcStrokes) {
    if (s.rival || s.points.length < 2) continue;
    for (const idx of [0, s.points.length - 1]) {
      const tip = s.points[idx];
      const dirRef = s.points[idx === 0 ? 1 : s.points.length - 2];
      // how far is this tip from every OTHER stroke? (an isolated tip = a stub)
      let nearest = Infinity;
      for (const o of srcStrokes) {
        if (o === s) continue;
        for (let i = 0; i < o.points.length - 1; i++) {
          nearest = Math.min(nearest, pointSegDist(tip.x, tip.y,
            o.points[i].x, o.points[i].y, o.points[i + 1].x, o.points[i + 1].y));
        }
      }
      if (nearest === Infinity) nearest = 200;
      // prefer tips that point into open interior space
      const dx = tip.x - dirRef.x, dy = tip.y - dirRef.y;
      const dl = Math.hypot(dx, dy) || 1;
      const score = Math.min(nearest, 200);
      if (score > bestScore) {
        bestScore = score;
        best = { x: tip.x, y: tip.y, dx: dx / dl, dy: dy / dl };
      }
    }
  }
  return best;
}

// Generate the rival's completion: a hallway grown FROM the player's stub tip,
// drawn in the player's measured style (segment length + turniness), then
// capped to form an enclosed pocket. The rival places its own spawns inside it.
function rivalComplete(srcStrokes) {
  const added = [];
  const stub = findStubTip(srcStrokes);
  // Anchor: extend the player's stub if there is one, else start mid-map.
  let cx, cy, dir;
  if (stub) {
    cx = stub.x; cy = stub.y;
    dir = Math.atan2(stub.dy, stub.dx);
  } else {
    cx = PLAY_AREA.x + PLAY_AREA.w * (0.3 + Math.random() * 0.4);
    cy = PLAY_AREA.y + PLAY_AREA.h * (0.3 + Math.random() * 0.4);
    dir = Math.random() * Math.PI * 2;
  }
  const seg = Math.max(18, Math.min(70, styleProfile.segLen));
  const turn = styleProfile.turniness;
  const pts = [{ x: cx, y: cy }];
  // The rival faithfully copies the player's hand: it keeps turning by roughly
  // the player's habitual turn amount. A "fussy" (turny) player gets boxed in.
  const segments = 7 + Math.floor(styleProfile.turniness * 6);
  for (let i = 0; i < segments; i++) {
    // turn in a consistent-ish curl, magnitude = learned turniness
    dir += (turn * 0.9) * (i % 5 === 4 ? -1 : 1) + (Math.random() - 0.5) * 0.2;
    let nx = cx + Math.cos(dir) * seg;
    let ny = cy + Math.sin(dir) * seg;
    // keep inside the play area; if it would leave, reflect the heading inward
    if (nx < PLAY_AREA.x + 14 || nx > PLAY_AREA.x + PLAY_AREA.w - 14 ||
        ny < PLAY_AREA.y + 14 || ny > PLAY_AREA.y + PLAY_AREA.h - 14) {
      dir += Math.PI * 0.66;
      nx = cx + Math.cos(dir) * seg;
      ny = cy + Math.sin(dir) * seg;
    }
    nx = Math.max(PLAY_AREA.x + 14, Math.min(PLAY_AREA.x + PLAY_AREA.w - 14, nx));
    ny = Math.max(PLAY_AREA.y + 14, Math.min(PLAY_AREA.y + PLAY_AREA.h - 14, ny));
    pts.push({ x: nx, y: ny });
    cx = nx; cy = ny;
  }
  let len = 0;
  for (let i = 0; i < pts.length - 1; i++) len += Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y);
  const rs = { points: pts, length: len, rival: true };
  added.push(rs);

  // The rival plants ITS spawns inside the pocket it just curled shut — which,
  // if the player baited a tight choke, becomes a kill-box for the rival.
  rivalSpawns = [];
  // sample interior points of the curl, prefer the deepest (most enclosed) cells
  for (let i = Math.floor(pts.length * 0.5); i < pts.length; i++) {
    const p = pts[i];
    // nudge a little toward the curl's centroid so spawns sit inside the loop
    let cxs = 0, cys = 0;
    for (const q of pts) { cxs += q.x; cys += q.y; }
    cxs /= pts.length; cys /= pts.length;
    const sx = p.x + (cxs - p.x) * 0.25;
    const sy = p.y + (cys - p.y) * 0.25;
    rivalSpawns.push({ x: sx, y: sy });
  }
  return added;
}

// Start the cinematic in which the rival inks its additions in, line by line.
function beginRivalReveal() {
  rivalActive = true;
  sfxRival();
  twistBanner = 4200;
  rivalAnim = 1600;
  // flatten the rival points for a progressive reveal
  rivalQueue = [];
  for (const s of rivalStrokes) {
    for (const p of s.points) rivalQueue.push(p);
  }
  rivalProgress = 0;
}

function commitMap() {
  if (strokes.length === 0) {
    floorBanner = 1200;
    bannerText = 'Draw at least one wall first';
    return;
  }
  sfxCommit();
  burst(W / 2, H / 2, 24, COLORS.ink);
  shake = 8;
  commitFlash = 0.22;
  markTutorialSeen(); // committing the first map clears the tutorial
  tutStep = 0;

  // Always learn the player's hand from what they just drew.
  learnStyle(strokes);

  // On contested floors the rival completes the map before we spawn anything.
  rivalStrokes = [];
  rivalActive = false;
  if (floor >= RIVAL_FLOOR) {
    rivalStrokes = rivalComplete(strokes);
    for (const rs of rivalStrokes) strokes.push(rs);
    beginRivalReveal();
    walls = strokesToWalls();   // include rival walls in collision immediately
    state = REVEAL;             // play the "rival is drawing" beat, then spawn
    return;
  }

  // Normal floor: straight to spawn + play.
  walls = strokesToWalls();
  finalizeSpawns();
  state = PLAY;
}

// Place player, stairs and enemies into the committed geometry. On contested
// floors, the rival's intended spawns are honored so its baited trap is real.
function finalizeSpawns() {
  // Player spawn: open point near a wall cluster (cover nearby).
  let spawn = findOpenPoint(12, { nearWall: true }) || findOpenPoint(12);
  if (!spawn) spawn = { x: PLAY_AREA.x + 40, y: PLAY_AREA.y + 40 };
  player = { x: spawn.x, y: spawn.y, r: 9, hp: 5, maxHp: 5,
    attackCd: 0, hurtFlash: 0, facing: { x: 1, y: 0 }, invuln: 0 };

  // Stairs: farthest open point from spawn.
  let st = findOpenPoint(12, { farFrom: spawn }) || findOpenPoint(12);
  if (!st) st = { x: PLAY_AREA.x + PLAY_AREA.w - 40, y: PLAY_AREA.y + PLAY_AREA.h - 40 };
  stairs = { x: st.x, y: st.y, r: 16 };

  enemies = [];
  projectiles = [];
  // Count curve: starts gentle, climbs, caps so the floor stays readable.
  const count = Math.min(2 + Math.floor((floor + 1) / 2), 7);
  // Deeper floors lean on snipers (cover matters more the further you fall).
  const rangedChance = 0.4 + depthScale() * 0.35;
  const pickType = (forceRangedFirst, i) =>
    (forceRangedFirst && i === 0) ? 'ranged'
      : (Math.random() < rangedChance ? 'ranged' : 'melee');

  if (rivalActive && rivalSpawns.length > 0) {
    // The rival fills the pocket it drew with its OWN marks. If the player
    // baited a tight choke, these spawns are now boxed in — counter-play.
    let placed = 0;
    for (const rsp of rivalSpawns) {
      if (placed >= count) break;
      // snap to a nearby open cell so a spawn never sits in a wall
      let pt = isOpen(rsp.x, rsp.y, 13) ? rsp : null;
      if (!pt) {
        for (let a = 0; a < 12 && !pt; a++) {
          const ang = a / 12 * Math.PI * 2;
          for (let rad = 8; rad <= 36 && !pt; rad += 8) {
            const tx = rsp.x + Math.cos(ang) * rad, ty = rsp.y + Math.sin(ang) * rad;
            if (isOpen(tx, ty, 13)) pt = { x: tx, y: ty };
          }
        }
      }
      if (!pt) continue;
      if (Math.hypot(pt.x - spawn.x, pt.y - spawn.y) < 90) continue;
      const type = pickType(placed === 0, placed);
      spawnEnemy(pt.x, pt.y, type);
      enemies[enemies.length - 1].rivalSpawn = true;
      // record how enclosed this spawn is — used to detect a backfired trap
      enemies[enemies.length - 1].enclosure = enclosureAt(pt.x, pt.y);
      placed++;
    }
    // top up any remaining enemies in the open
    while (enemies.length < count) {
      let ep = findOpenPoint(13, { farFrom: spawn }) || { x: stairs.x, y: stairs.y };
      spawnEnemy(ep.x, ep.y, pickType(false, enemies.length));
    }
  } else {
    for (let i = 0; i < count; i++) {
      const type = pickType(true, i);
      let ep = findOpenPoint(13, { farFrom: spawn });
      if (!ep || Math.hypot(ep.x - spawn.x, ep.y - spawn.y) < 120) {
        ep = findOpenPoint(13) || { x: stairs.x, y: stairs.y };
      }
      spawnEnemy(ep.x, ep.y, type);
    }
  }
}

// How walled-in is a point? Count wall hits on rays in 8 directions within range.
// High enclosure = a tight pocket; a rival spawn here is easy to trap.
function enclosureAt(x, y) {
  let blocked = 0;
  const R = 70;
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2;
    const ex = x + Math.cos(a) * R, ey = y + Math.sin(a) * R;
    for (const w of walls) {
      if (segIntersect(x, y, ex, ey, w.x1, w.y1, w.x2, w.y2)) { blocked++; break; }
    }
  }
  return blocked;
}

// Drive the rival-reveal cutscene; when it finishes, place spawns and play.
function updateReveal(dt) {
  if (rivalAnim > 0) {
    rivalAnim -= dt * 1000;
    rivalProgress = Math.min(rivalQueue.length,
      Math.floor((1 - rivalAnim / 1600) * rivalQueue.length));
    if (Math.random() < 0.4) sfxScratch();
  }
  if (rivalAnim <= 0) {
    rivalProgress = rivalQueue.length;
    finalizeSpawns();
    bannerText = 'Floor ' + floor + ' — survive the rival’s design';
    floorBanner = 2200;
    state = PLAY;
  }
  updateParticles(dt);
  if (twistBanner > 0) twistBanner -= dt * 1000;
}

// ═══════════════════════════════════════════════════════════════
//  PLAY state
// ═══════════════════════════════════════════════════════════════
// Move a circle, blocking against walls (axis-separated for sliding).
function moveCircle(ent, dx, dy) {
  // try X
  if (dx !== 0) {
    const nx = ent.x + dx;
    if (collideWalls(nx, ent.y, ent.r) === false) ent.x = nx;
  }
  if (dy !== 0) {
    const ny = ent.y + dy;
    if (collideWalls(ent.x, ny, ent.r) === false) ent.y = ny;
  }
  // clamp to area
  ent.x = Math.max(PLAY_AREA.x + ent.r, Math.min(PLAY_AREA.x + PLAY_AREA.w - ent.r, ent.x));
  ent.y = Math.max(PLAY_AREA.y + ent.r, Math.min(PLAY_AREA.y + PLAY_AREA.h - ent.r, ent.y));
}
function collideWalls(x, y, r) {
  for (const w of walls) {
    if (pointSegDist(x, y, w.x1, w.y1, w.x2, w.y2) < r + WALL_THICK) return true;
  }
  return false;
}

function tryAttack() {
  if (!player || player.attackCd > 0) return;
  player.attackCd = 0.35;
  sfxAttack();
  // melee arc: hit enemies within reach in facing direction (or any within radius)
  const reach = 46;
  for (const e of enemies) {
    const d = Math.hypot(e.x - player.x, e.y - player.y);
    if (d < reach + e.r) {
      e.hp -= 1;
      e.hurtFlash = 0.15;
      burst(e.x, e.y, 8, COLORS.enemyMelee);
      sfxHit();
    }
  }
  player.attackAnim = 0.18;
}

function updatePlay(dt) {
  // ----- player movement -----
  let mx = 0, my = 0;
  if (keys['w'] || keys['arrowup']) my -= 1;
  if (keys['s'] || keys['arrowdown']) my += 1;
  if (keys['a'] || keys['arrowleft']) mx -= 1;
  if (keys['d'] || keys['arrowright']) mx += 1;
  if (mx !== 0 || my !== 0) {
    const m = Math.hypot(mx, my);
    mx /= m; my /= m;
    player.facing = { x: mx, y: my };
    const spd = 165 * dt;
    moveCircle(player, mx * spd, my * spd);
  }
  if (player.attackCd > 0) player.attackCd -= dt;
  if (player.attackAnim > 0) player.attackAnim -= dt;
  if (player.hurtFlash > 0) player.hurtFlash -= dt;
  if (player.invuln > 0) player.invuln -= dt;

  // ----- enemies -----
  for (const e of enemies) {
    if (e.hurtFlash > 0) e.hurtFlash -= dt;
    const dx = player.x - e.x, dy = player.y - e.y;
    const dist = Math.hypot(dx, dy);
    const los = hasLOS(e.x, e.y, player.x, player.y);

    if (e.type === 'melee') {
      // seek the player; if blocked, try to slide along walls (axis separation handles it)
      if (dist > 0.001) {
        const spd = e.speed * dt;
        moveCircle(e, dx / dist * spd, dy / dist * spd);
      }
      // touch damage
      if (dist < e.r + player.r + 2) {
        e.touchCd -= dt;
        if (e.touchCd <= 0) { damagePlayer(1); e.touchCd = 0.6; }
      }
    } else if (e.type === 'ranged') {
      // keep some distance; only act on LOS
      if (los) {
        // strafe: maintain range
        if (dist < e.range * 0.45) {
          moveCircle(e, -dx / dist * e.speed * dt, -dy / dist * e.speed * dt);
        }
        e.shootCd -= dt;
        if (e.shootCd <= 0 && dist < e.range) {
          e.shootCd = e.fireGap || 1.3;
          const sp = e.projSpeed || 240;
          projectiles.push({
            x: e.x, y: e.y,
            vx: dx / dist * sp, vy: dy / dist * sp,
            r: 4, life: 3
          });
          sfxShoot();
        }
      } else {
        // no LOS: wander slowly toward player to re-acquire
        if (dist > 0.001) moveCircle(e, dx / dist * e.speed * 0.5 * dt, dy / dist * e.speed * 0.5 * dt);
      }
    }
  }
  // remove dead enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    if (e.hp <= 0) {
      // Authored sabotage: a rival spawn that dies inside the tight pocket the
      // rival itself drew is a backfired trap. Reward it visibly.
      const enclosedNow = enclosureAt(e.x, e.y);
      if (e.rivalSpawn && (e.enclosure >= 5 || enclosedNow >= 5)) {
        sabotageHits++;
        burst(e.x, e.y, 24, COLORS.rival);
        bannerText = 'Sabotage! The rival’s own trap caught its mark';
        floorBanner = 1600;
        shake = Math.max(shake, 9);
      } else {
        burst(e.x, e.y, 16, COLORS.ink);
        shake = Math.max(shake, 4);
      }
      sfxEnemyDie();
      enemies.splice(i, 1);
    }
  }

  // ----- projectiles -----
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    const nx = p.x + p.vx * dt, ny = p.y + p.vy * dt;
    // wall collision = blocked (cover works)
    let hitWall = false;
    for (const w of walls) {
      if (segIntersect(p.x, p.y, nx, ny, w.x1, w.y1, w.x2, w.y2)) { hitWall = true; break; }
    }
    p.x = nx; p.y = ny;
    p.life -= dt;
    const outOfBounds = p.x < PLAY_AREA.x || p.x > PLAY_AREA.x + PLAY_AREA.w ||
                        p.y < PLAY_AREA.y || p.y > PLAY_AREA.y + PLAY_AREA.h;
    if (hitWall) {
      burst(p.x, p.y, 5, COLORS.inkSoft);
      projectiles.splice(i, 1);
      continue;
    }
    if (p.life <= 0 || outOfBounds) { projectiles.splice(i, 1); continue; }
    // hit player
    if (Math.hypot(p.x - player.x, p.y - player.y) < p.r + player.r) {
      damagePlayer(1);
      projectiles.splice(i, 1);
    }
  }

  // ----- stairs (floor clear) -----
  if (stairs && Math.hypot(player.x - stairs.x, player.y - stairs.y) < stairs.r + player.r) {
    nextFloor();
  }

  // ----- particles -----
  updateParticles(dt);
  if (shake > 0) shake = Math.max(0, shake - dt * 30);
  if (floorBanner > 0) floorBanner -= dt * 1000;
  if (commitFlash > 0) commitFlash = Math.max(0, commitFlash - dt);
  if (floorClearStamp > 0) floorClearStamp = Math.max(0, floorClearStamp - dt);
  if (descendWipe > 0) descendWipe = Math.max(0, descendWipe - dt);
}

function damagePlayer(amount) {
  if (player.invuln > 0) return;
  player.hp -= amount;
  player.hurtFlash = 0.25;
  player.invuln = 0.5;
  shake = Math.max(shake, 7);
  hitStop = 0.06; // brief freeze-frame so a hit reads as a real impact
  sfxHit();
  burst(player.x, player.y, 14, COLORS.player);
  burst(player.x, player.y, 6, COLORS.hpLow);
  if (player.hp <= 0) {
    player.hp = 0;
    endRun();
  }
}

function nextFloor() {
  // Clearing the FINAL floor's exit = escaping the curse = the WIN state.
  if (floor >= FINAL_FLOOR) { winRun(); return; }

  // Archive the floor we just cleared as a faint ghost under-drawing.
  if (strokes.length > 0) {
    ghostMaps.push({ strokes: strokes.map(s => ({ points: s.points, rival: !!s.rival })) });
    if (ghostMaps.length > 3) ghostMaps.shift(); // keep only the recent few
  }

  // Floor-clear juice: a brief "SEALED / descend" stamp + a wipe transition.
  floorClearStamp = 1.1;
  descendWipe = 0.55;

  floor += 1;
  if (floor - 1 > bestDepth) { bestDepth = floor - 1; saveBest(); }
  sfxStairs();
  // fresh, smaller ink budget; back to DRAW
  inkMax = Math.max(700, 1700 - (floor - 1) * 180);
  inkRemaining = inkMax;
  strokes = [];
  walls = [];
  enemies = [];
  projectiles = [];
  curStroke = null;
  drawing = false;
  // reset per-floor rival state
  rivalActive = false;
  rivalStrokes = [];
  rivalQueue = [];
  rivalProgress = 0;
  rivalSpawns = [];
  rivalAnim = 0;
  const beat = FLOOR_BEATS[floor];
  bannerText = beat ? beat.hint : 'Floor ' + floor + ' — draw your next dungeon';
  floorBanner = (floor === RIVAL_FLOOR) ? 3200 : (floor === FINAL_FLOOR ? 3000 : 2000);
  state = DRAW;
}

// WIN: the player reached the surface alive. A real end to the descend-or-die loop.
function winRun() {
  const depth = floor; // they cleared the final floor
  if (depth > bestDepth) { bestDepth = depth; saveBest(); }
  saveEscaped();
  lastDepth = depth;
  lastFloor = floor;
  sfxWin();
  burst(W / 2, H / 2, 60, COLORS.accent);
  shake = 10;
  state = WIN;
}

function endRun() {
  // depth reached = floors cleared = floor - 1 (current floor not cleared)
  const depth = floor - 1;
  if (depth > bestDepth) { bestDepth = depth; saveBest(); }
  lastDepth = depth;
  lastFloor = floor;
  sfxDeath();
  shake = 12;
  state = GAMEOVER;
}

let lastDepth = 0, lastFloor = 1, bannerText = '';

// ═══════════════════════════════════════════════════════════════
//  Particles (minimal grey-box juice)
// ═══════════════════════════════════════════════════════════════
function burst(x, y, n, color) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 30 + Math.random() * 120;
    particles.push({
      x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      life: 0.3 + Math.random() * 0.4, max: 0.7, r: 1 + Math.random() * 2.5,
      color: color || COLORS.ink
    });
  }
}
function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx * dt; p.y += p.vy * dt;
    p.vx *= 0.92; p.vy *= 0.92;
    p.life -= dt;
    if (p.life <= 0) particles.splice(i, 1);
  }
}

// ═══════════════════════════════════════════════════════════════
//  Lifecycle transitions
// ═══════════════════════════════════════════════════════════════
function startRun() {
  unlockAudio();
  floor = 1;
  inkMax = 1700;
  inkRemaining = inkMax;
  strokes = [];
  walls = [];
  curStroke = null;
  drawing = false;
  enemies = [];
  projectiles = [];
  particles = [];
  player = null;
  stairs = null;
  // reset twist / ghost / learned-style state for a fresh run
  ghostMaps = [];
  rivalActive = false;
  rivalStrokes = [];
  rivalQueue = [];
  rivalProgress = 0;
  rivalSpawns = [];
  rivalAnim = 0;
  twistBanner = 0;
  sabotageHits = 0;
  styleProfile = { segLen: 26, turniness: 0.35, samples: 0 };
  commitFlash = 0; floorClearStamp = 0; descendWipe = 0; hitStop = 0;
  totalRuns += 1; saveRuns();
  // First-run onboarding (ONBOARD-01): a concise draw→commit→survive→descend
  // walkthrough, shown only until the player has committed their first map.
  tutStep = tutorialSeen ? 0 : 1;
  bannerText = (FLOOR_BEATS[1] && FLOOR_BEATS[1].hint) || 'Floor 1 — draw your dungeon';
  floorBanner = 1800;
  state = DRAW;
}
function resetToTitle() {
  state = TITLE;
}

// ═══════════════════════════════════════════════════════════════
//  DEBUG shape test (CORE-06): preset L-bend vs open blob, equal ink
// ═══════════════════════════════════════════════════════════════
const DEBUG = false;
function loadShapeTest(kind) {
  strokes = [];
  inkMax = 1700;
  const cx = PLAY_AREA.x + PLAY_AREA.w / 2;
  const cy = PLAY_AREA.y + PLAY_AREA.h / 2;
  if (kind === 'lbend') {
    // An L-shaped wall providing a corner to break line-of-sight behind.
    strokes.push(makeStroke([
      { x: cx - 160, y: cy - 120 },
      { x: cx + 40, y: cy - 120 },
      { x: cx + 40, y: cy + 80 }
    ]));
    // a small cover nub
    strokes.push(makeStroke([
      { x: cx - 60, y: cy + 60 },
      { x: cx - 60, y: cy + 140 }
    ]));
  } else {
    // A big open rectangular "blob" outline — same ink, no interior cover.
    strokes.push(makeStroke([
      { x: cx - 160, y: cy - 120 },
      { x: cx + 160, y: cy - 120 },
      { x: cx + 160, y: cy + 120 },
      { x: cx - 160, y: cy + 120 },
      { x: cx - 160, y: cy - 120 }
    ]));
  }
  // recompute ink spent
  let spent = 0;
  for (const s of strokes) spent += s.length;
  inkRemaining = Math.max(0, inkMax - spent);
  bannerText = 'Shape test: ' + (kind === 'lbend' ? 'L-BEND (cover)' : 'OPEN BLOB') +
               '  — Enter to commit';
  floorBanner = 2500;
}
function makeStroke(pts) {
  let len = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    len += Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y);
  }
  return { points: pts.map(p => ({ x: p.x, y: p.y })), length: len };
}

// ═══════════════════════════════════════════════════════════════
//  Rendering
// ═══════════════════════════════════════════════════════════════
// ---------- Procedural parchment texture (cached offscreen) ----------
let parchmentCanvas = null;
function buildParchment() {
  const pc = document.createElement('canvas');
  pc.width = W; pc.height = H;
  const c = pc.getContext('2d');
  // base wash with a warm radial bias (lit from upper-left)
  const grad = c.createRadialGradient(W * 0.38, H * 0.32, 60, W * 0.5, H * 0.5, W * 0.85);
  grad.addColorStop(0, COLORS.parchmentHi);
  grad.addColorStop(0.55, COLORS.parchment);
  grad.addColorStop(1, COLORS.parchmentLo);
  c.fillStyle = grad;
  c.fillRect(0, 0, W, H);

  // mottled fibre blotches — many soft translucent ovals
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * W, y = Math.random() * H;
    const r = 6 + Math.random() * 60;
    const dark = Math.random() < 0.5;
    c.globalAlpha = 0.018 + Math.random() * 0.03;
    c.fillStyle = dark ? '#7a5d33' : '#f0e2c0';
    c.beginPath();
    c.ellipse(x, y, r, r * (0.5 + Math.random()), Math.random() * Math.PI, 0, Math.PI * 2);
    c.fill();
  }
  // fine paper grain — sparse single-pixel speckle
  c.globalAlpha = 1;
  const img = c.getImageData(0, 0, W, H);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 16;
    d[i] += n; d[i + 1] += n * 0.9; d[i + 2] += n * 0.7;
  }
  c.putImageData(img, 0, 0);

  // a few age stains / foxing spots
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * W, y = Math.random() * H;
    const r = 14 + Math.random() * 40;
    const g2 = c.createRadialGradient(x, y, 0, x, y, r);
    g2.addColorStop(0, 'rgba(120,80,40,0.10)');
    g2.addColorStop(1, 'rgba(120,80,40,0)');
    c.fillStyle = g2;
    c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();
  }
  // vignette toward the burnt edges
  const vg = c.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, H * 0.85);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, COLORS.vignette);
  c.fillStyle = vg;
  c.fillRect(0, 0, W, H);
  parchmentCanvas = pc;
}

function clear() {
  if (!parchmentCanvas) buildParchment();
  ctx.drawImage(parchmentCanvas, 0, 0);
}

// Hand-drawn double rule around the playable region, like a journal margin.
function drawArea() {
  ctx.save();
  ctx.strokeStyle = COLORS.inkSoft;
  ctx.lineWidth = 1.4;
  jaggedRect(PLAY_AREA.x, PLAY_AREA.y, PLAY_AREA.w, PLAY_AREA.h, 1.2);
  ctx.globalAlpha = 0.55;
  jaggedRect(PLAY_AREA.x + 5, PLAY_AREA.y + 5, PLAY_AREA.w - 10, PLAY_AREA.h - 10, 1.0);
  ctx.restore();
}
function jaggedRect(x, y, w, h, jit) {
  ctx.beginPath();
  const step = 22;
  const pts = [];
  const edge = (x1, y1, x2, y2) => {
    const len = Math.hypot(x2 - x1, y2 - y1);
    const n = Math.max(1, Math.round(len / step));
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      pts.push({
        x: x1 + (x2 - x1) * t + (Math.random() - 0.5) * jit,
        y: y1 + (y2 - y1) * t + (Math.random() - 0.5) * jit
      });
    }
  };
  edge(x, y, x + w, y); edge(x + w, y, x + w, y + h);
  edge(x + w, y + h, x, y + h); edge(x, y + h, x, y);
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.closePath();
  ctx.stroke();
}

// A deterministic-ish pseudo-random jitter keyed to a stroke index + point index,
// so committed walls don't shimmer between frames.
function jitterAt(seed, scale) {
  const s = Math.sin(seed * 127.1) * 43758.5453;
  return ((s - Math.floor(s)) - 0.5) * 2 * scale;
}

// Scratchy, slightly-bleeding quill line. `seed` keeps committed walls stable;
// pass seed = null for the live (wet) stroke to let it wobble subtly.
function drawQuillLine(pts, color, width, seed) {
  if (pts.length < 1) return;
  if (pts.length === 1) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(pts[0].x, pts[0].y, width / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  const live = (seed === null || seed === undefined);
  // 1) soft ink-bleed halo underneath
  ctx.save();
  ctx.strokeStyle = COLORS.inkBleed;
  ctx.lineWidth = width + 5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.stroke();
  ctx.restore();

  // 2) two overlaid jittered passes for a fibrous, double-tracked nib look
  for (let pass = 0; pass < 2; pass++) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = pass === 0 ? width : width * 0.55;
    ctx.globalAlpha = pass === 0 ? 0.92 : 0.6;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    for (let i = 0; i < pts.length; i++) {
      let jx, jy;
      if (live) {
        jx = (Math.random() - 0.5) * 1.0; jy = (Math.random() - 0.5) * 1.0;
      } else {
        const sd = seed * 1000 + i * 7.3 + pass * 311.7;
        jx = jitterAt(sd, 1.1); jy = jitterAt(sd + 99.9, 1.1);
      }
      const x = pts[i].x + jx, y = pts[i].y + jy;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
  }
}

// Hand-stippled contour shading along the inside edge of committed walls.
function drawStipple(s, seed) {
  const pts = s.points;
  if (pts.length < 2) return;
  ctx.save();
  ctx.fillStyle = COLORS.stipple;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    const dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len;   // unit normal
    const dots = Math.max(1, Math.floor(len / 9));
    for (let k = 0; k < dots; k++) {
      const t = (k + 0.5) / dots;
      const px = a.x + dx * t, py = a.y + dy * t;
      // a small spray of stipple dots offset to one (seeded) side
      const side = ((seed + i) % 2 === 0) ? 1 : -1;
      for (let d = 0; d < 3; d++) {
        const off = (WALL_THICK + 3) + d * 4 + jitterAt(seed * 50 + i * 13 + k * 3 + d, 1.6);
        const jit = jitterAt(seed * 7 + i * 31 + k * 5 + d * 2, 3.2);
        const x = px + nx * off * side + (dx / len) * jit;
        const y = py + ny * off * side + (dy / len) * jit;
        ctx.globalAlpha = 0.5 - d * 0.13;
        ctx.beginPath();
        ctx.arc(x, y, 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  ctx.restore();
}

function drawAllStrokes(withStipple) {
  if (withStipple) {
    for (let i = 0; i < strokes.length; i++) drawStipple(strokes[i], i + 1);
  }
  for (let i = 0; i < strokes.length; i++) {
    const s = strokes[i];
    drawQuillLine(s.points, s.rival ? COLORS.rival : COLORS.ink, WALL_THICK + 2, i + 1);
  }
  if (curStroke) drawQuillLine(curStroke.points, COLORS.inkSoft, WALL_THICK + 2, null);
}

// Faint bled-through under-drawings of cleared floors (TWIST visual, non-collidable).
function drawGhostMaps() {
  if (ghostMaps.length === 0) return;
  ctx.save();
  for (let g = 0; g < ghostMaps.length; g++) {
    const depthAlpha = 0.04 + g * 0.03; // older = fainter
    ctx.globalAlpha = depthAlpha;
    ctx.strokeStyle = COLORS.ghost;
    ctx.lineWidth = WALL_THICK;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    // slight offset so the old page shows "through" misaligned
    const ox = (g + 1) * 3, oy = (g + 1) * 2;
    for (const s of ghostMaps[g].strokes) {
      if (s.points.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(s.points[0].x + ox, s.points[0].y + oy);
      for (let i = 1; i < s.points.length; i++) ctx.lineTo(s.points[i].x + ox, s.points[i].y + oy);
      ctx.stroke();
    }
  }
  ctx.restore();
}

// ---------- Compass rose flourish (decorative HUD element) ----------
function drawCompassRose(cx, cy, R, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha === undefined ? 0.5 : alpha;
  ctx.translate(cx, cy);
  ctx.strokeStyle = COLORS.inkSoft;
  ctx.fillStyle = COLORS.inkSoft;
  ctx.lineWidth = 1.2;
  // outer + inner rings
  ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(0, 0, R * 0.62, 0, Math.PI * 2); ctx.stroke();
  // tick marks around the rose
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    const r0 = i % 8 === 0 ? R * 0.62 : R * 0.86;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * r0, Math.sin(a) * r0);
    ctx.lineTo(Math.cos(a) * R, Math.sin(a) * R);
    ctx.stroke();
  }
  // four-point star (cardinal), filled as alternating light/dark petals
  const drawPetal = (ang, long) => {
    const tip = long ? R * 0.92 : R * 0.5;
    const wide = long ? R * 0.14 : R * 0.1;
    const ax = Math.cos(ang), ay = Math.sin(ang);
    const px = -ay, py = ax; // perpendicular
    ctx.beginPath();
    ctx.moveTo(ax * tip, ay * tip);
    ctx.lineTo(px * wide, py * wide);
    ctx.lineTo(-ax * wide * 0.4, -ay * wide * 0.4);
    ctx.lineTo(-px * wide, -py * wide);
    ctx.closePath();
    ctx.globalAlpha = (alpha === undefined ? 0.5 : alpha) * (long ? 0.85 : 0.55);
    ctx.fill();
    ctx.globalAlpha = alpha === undefined ? 0.5 : alpha;
    ctx.stroke();
  };
  // intercardinal (short) then cardinal (long)
  for (let i = 0; i < 4; i++) drawPetal(-Math.PI / 2 + Math.PI / 4 + i * Math.PI / 2, false);
  for (let i = 0; i < 4; i++) drawPetal(-Math.PI / 2 + i * Math.PI / 2, true);
  // N label
  ctx.globalAlpha = alpha === undefined ? 0.6 : alpha;
  ctx.fillStyle = COLORS.ink;
  ctx.font = 'bold ' + Math.round(R * 0.3) + 'px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('N', 0, -R * 1.18);
  ctx.textBaseline = 'alphabetic';
  ctx.restore();
}

function drawInkMeter() {
  const x = PLAY_AREA.x, y = 22, w = 240, h = 16;
  const frac = Math.max(0, inkRemaining / inkMax);
  // inkwell glyph
  ctx.save();
  ctx.fillStyle = COLORS.ink;
  ctx.beginPath();
  ctx.ellipse(x - 8, y + h / 2, 7, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = COLORS.parchment;
  ctx.beginPath();
  ctx.ellipse(x - 8, y + 3, 4, 1.6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  // bar trough
  ctx.fillStyle = COLORS.meterBg;
  ctx.fillRect(x, y, w, h);
  // ink fill, with a wet meniscus that lowers as ink drains
  const fw = w * frac;
  const ig = ctx.createLinearGradient(x, y, x, y + h);
  ig.addColorStop(0, '#4a3618');
  ig.addColorStop(1, COLORS.meterInk);
  ctx.fillStyle = ig;
  ctx.fillRect(x, y, fw, h);
  if (frac > 0.02 && frac < 0.999) {
    ctx.fillStyle = 'rgba(120,90,40,0.5)';
    ctx.fillRect(x + fw - 2, y, 2, h);
  }
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = 1.4;
  ctx.strokeRect(x, y, w, h);
  ctx.fillStyle = COLORS.ink;
  ctx.font = 'italic 13px Georgia, serif';
  ctx.textAlign = 'left';
  ctx.fillText('Ink ' + Math.ceil(inkRemaining), x + w + 12, y + 13);
}

function drawHealth() {
  const x = PLAY_AREA.x, y = 24;
  ctx.font = '13px Georgia, serif';
  ctx.textAlign = 'left';
  ctx.fillStyle = COLORS.ink;
  ctx.fillText('HP', x, y + 13);
  for (let i = 0; i < player.maxHp; i++) {
    ctx.fillStyle = i < player.hp ? COLORS.hpGood : 'rgba(58,42,24,0.15)';
    ctx.beginPath();
    ctx.arc(x + 34 + i * 18, y + 6, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  ctx.textAlign = 'right';
  ctx.fillStyle = COLORS.ink;
  ctx.fillText('Floor ' + floor + '  ·  Enemies ' + enemies.length,
    PLAY_AREA.x + PLAY_AREA.w, y + 13);
}

function drawParticles() {
  for (const p of particles) {
    ctx.globalAlpha = Math.max(0, p.life / p.max);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// Stairs drawn as an inked stairwell glyph: a circle with descending rungs + ✕.
function drawStairs() {
  if (!stairs) return;
  const pulse = 0.6 + 0.4 * Math.sin(performance.now() / 300);
  ctx.save();
  ctx.translate(stairs.x, stairs.y);
  // faint marked-destination ring (dashed, like a survey target)
  ctx.strokeStyle = COLORS.stairs;
  ctx.globalAlpha = 0.4 + 0.3 * pulse;
  ctx.lineWidth = 1.6;
  ctx.setLineDash([4, 5]);
  ctx.beginPath(); ctx.arc(0, 0, stairs.r + 5, 0, Math.PI * 2); ctx.stroke();
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;
  // descending steps glyph
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = 1.8;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.arc(0, 0, stairs.r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const yy = -8 + i * 5;
    ctx.moveTo(-stairs.r * 0.7 + i * 3, yy);
    ctx.lineTo(stairs.r * 0.7, yy);
  }
  ctx.stroke();
  // small 'descent' mark below
  ctx.fillStyle = COLORS.stairs;
  ctx.font = 'italic 9px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.globalAlpha = 0.8;
  ctx.fillText('descent', 0, stairs.r + 16);
  ctx.restore();
}

// Crimson spider-blot (melee): a wet inkblot body with stippled legs.
function drawSpiderBlot(e) {
  ctx.save();
  ctx.translate(e.x, e.y);
  const wob = Math.sin(performance.now() / 120 + e.x) * 0.6;
  // legs
  ctx.strokeStyle = e.hurtFlash > 0 ? '#fff' : COLORS.enemyMelee;
  ctx.lineWidth = 1.6;
  ctx.lineCap = 'round';
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + wob * 0.1;
    const bend = Math.sin(performance.now() / 100 + i) * 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(Math.cos(a) * e.r, Math.sin(a) * e.r,
      Math.cos(a) * (e.r + 7) + bend, Math.sin(a) * (e.r + 7));
    ctx.stroke();
  }
  // blot body (irregular)
  ctx.fillStyle = e.hurtFlash > 0 ? '#fff' : COLORS.enemyMelee;
  ctx.beginPath();
  for (let i = 0; i <= 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const rr = e.r * (0.8 + 0.25 * Math.sin(i * 2.3 + e.x));
    const x = Math.cos(a) * rr, y = Math.sin(a) * rr;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Violet ranged ink-mark: a hollow eye with crosshair, a watching sniper sigil.
function drawInkMark(e) {
  ctx.save();
  ctx.translate(e.x, e.y);
  const aim = Math.atan2(player.y - e.y, player.x - e.x);
  ctx.fillStyle = e.hurtFlash > 0 ? '#fff' : COLORS.enemyRanged;
  // diamond body
  ctx.beginPath();
  ctx.moveTo(0, -e.r); ctx.lineTo(e.r, 0);
  ctx.lineTo(0, e.r); ctx.lineTo(-e.r, 0); ctx.closePath();
  ctx.fill();
  // pupil / aim line
  ctx.strokeStyle = COLORS.parchment;
  ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.arc(0, 0, e.r * 0.4, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = e.hurtFlash > 0 ? '#aaa' : COLORS.enemyRanged;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(Math.cos(aim) * (e.r + 6), Math.sin(aim) * (e.r + 6));
  ctx.stroke();
  ctx.restore();
}

function drawPlayEntities() {
  // ghost under-drawings of cleared floors (twist visual; non-collidable)
  drawGhostMaps();

  // stairs
  drawStairs();

  // walls (committed walls get stipple shading + scratchy ink)
  drawAllStrokes(true);

  // projectiles — inkblot bullets with a smear tail
  for (const p of projectiles) {
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = COLORS.proj;
    ctx.beginPath();
    ctx.arc(p.x - p.vx * 0.012, p.y - p.vy * 0.012, p.r * 1.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = COLORS.proj;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // enemies
  for (const e of enemies) {
    if (e.type === 'ranged') drawInkMark(e); else drawSpiderBlot(e);
  }

  // player — surveyor's brass pin
  if (player) {
    if (player.attackAnim > 0) {
      // pen flourish arc in the facing direction
      const a0 = Math.atan2(player.facing.y, player.facing.x) - 0.9;
      ctx.save();
      ctx.strokeStyle = COLORS.accent;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.globalAlpha = player.attackAnim / 0.18;
      ctx.beginPath();
      ctx.arc(player.x, player.y, 38, a0, a0 + 1.8);
      ctx.stroke();
      ctx.restore();
    }
    ctx.save();
    ctx.translate(player.x, player.y);
    // pin shadow on paper
    ctx.fillStyle = 'rgba(40,28,12,0.25)';
    ctx.beginPath();
    ctx.ellipse(2, 3, player.r + 2, player.r * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    // pin head
    ctx.fillStyle = player.hurtFlash > 0 ? '#ffffff' : COLORS.player;
    ctx.beginPath();
    ctx.arc(0, 0, player.r, 0, Math.PI * 2);
    ctx.fill();
    // highlight
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.beginPath();
    ctx.arc(-player.r * 0.3, -player.r * 0.3, player.r * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = COLORS.playerInk;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, 0, player.r, 0, Math.PI * 2); ctx.stroke();
    // facing needle
    ctx.strokeStyle = COLORS.playerInk;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(player.facing.x * 15, player.facing.y * 15);
    ctx.stroke();
    ctx.restore();
  }
}

function drawBanner() {
  if (floorBanner > 0 && bannerText) {
    ctx.save();
    ctx.globalAlpha = Math.min(1, floorBanner / 400);
    ctx.font = 'italic 19px Georgia, serif';
    ctx.textAlign = 'center';
    const w = ctx.measureText(bannerText).width + 56;
    const x = W / 2 - w / 2, y = 70, h = 38;
    // a pinned paper label
    ctx.fillStyle = COLORS.panel;
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = COLORS.panelEdge;
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, w, h);
    // wax pins on each end
    ctx.fillStyle = COLORS.rival;
    ctx.beginPath(); ctx.arc(x + 12, y + h / 2, 4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + w - 12, y + h / 2, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = COLORS.text;
    ctx.fillText(bannerText, W / 2, y + 25);
    ctx.restore();
  }
}

function centerText(lines, opts) {
  opts = opts || {};
  ctx.textAlign = 'center';
  let y = opts.startY || H / 2;
  for (const ln of lines) {
    ctx.font = ln.font || '16px Georgia, serif';
    ctx.fillStyle = ln.color || COLORS.text;
    ctx.fillText(ln.text, W / 2, y);
    y += ln.gap || 28;
  }
}

// A framed journal panel with a hand-drawn double border.
function journalPanel(cx, cy, w, h) {
  ctx.save();
  ctx.fillStyle = COLORS.panel;
  ctx.fillRect(cx - w / 2, cy - h / 2, w, h);
  ctx.strokeStyle = COLORS.panelEdge;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(cx - w / 2 + 4, cy - h / 2 + 4, w - 8, h - 8);
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.6;
  ctx.strokeRect(cx - w / 2 + 9, cy - h / 2 + 9, w - 18, h - 18);
  ctx.restore();
}

// Compass roses tucked into the page corners (decorative HUD).
function drawCornerRoses() {
  drawCompassRose(W - 56, H - 56, 30, 0.45);
}

function drawTitle() {
  clear();
  // a big watermark compass behind the panel
  drawCompassRose(W / 2, H / 2, 220, 0.06);
  journalPanel(W / 2, H / 2, 660, 360);
  centerText([
    { text: "CARTOGRAPHER'S CURSE", font: 'bold 40px Georgia, serif', color: COLORS.accent, gap: 40 },
    { text: 'The dungeon does not exist until you draw it.', font: 'italic 18px Georgia, serif', color: COLORS.textDim, gap: 46 },
    { text: 'Hold the MOUSE to draw walls within your ink budget.', gap: 25 },
    { text: 'Press ENTER to commit your map — then survive inside it.', gap: 25 },
    { text: 'WASD / arrows move · SPACE or click attacks · Z undoes a stroke.', gap: 25 },
    { text: 'Reach the EXIT alive to descend. Walls are your cover and your cage.', gap: 25 },
    { text: 'Survive ' + FINAL_FLOOR + ' floors to escape. Beware floor 5: a rival hand finishes your maps against you.', font: 'italic 15px Georgia, serif', color: COLORS.rival, gap: 38 },
    { text: 'Best depth: ' + bestDepth + ' / ' + FINAL_FLOOR + (hasEscaped ? '   ✦ ESCAPED ✦' : '') + (totalRuns ? '   ·   Runs: ' + totalRuns : ''), color: COLORS.accent, gap: 30 },
    { text: 'Click or press ENTER to begin', font: 'bold 18px Georgia, serif', color: COLORS.text }
  ], { startY: H / 2 - 130 });
}

// First-run onboarding card (ONBOARD-01). No manual: it walks the player through
// draw → commit → survive → descend, advancing as they actually do each step.
function drawTutorial() {
  // figure out which step the player is on, by what they've done so far
  const hasStroke = strokes.length > 0;
  const lines = hasStroke
    ? ['STEP 2 of 2 — seal it',
       'Press  Z  to undo a stroke and reclaim its ink.',
       'When your map is ready, press  ENTER  to seal it in wax —',
       'you will spawn inside exactly these walls and must survive.',
       'Reach the glowing EXIT alive to descend a floor.']
    : ['STEP 1 of 2 — draw your dungeon',
       'Hold the LEFT MOUSE button and drag to ink walls.',
       'Your ink is limited (top-left) — short clever shapes beat big blobs.',
       'An L-bend gives you cover; an open box gets you sniped.',
       'Draw a wall or two, then this will tell you how to seal the map.'];
  const w = 540, h = 168, cx = W / 2, cy = H - 150;
  ctx.save();
  // pinned parchment note
  ctx.globalAlpha = 0.97;
  ctx.fillStyle = 'rgba(28,19,8,0.92)';
  ctx.fillRect(cx - w / 2, cy - h / 2, w, h);
  ctx.strokeStyle = COLORS.accent;
  ctx.lineWidth = 1.4;
  ctx.strokeRect(cx - w / 2 + 4, cy - h / 2 + 4, w - 8, h - 8);
  // wax pin
  ctx.fillStyle = COLORS.rival;
  ctx.beginPath(); ctx.arc(cx, cy - h / 2, 6, 0, Math.PI * 2); ctx.fill();
  ctx.textAlign = 'center';
  ctx.fillStyle = COLORS.accent;
  ctx.font = 'bold 16px Georgia, serif';
  ctx.fillText(lines[0], cx, cy - h / 2 + 30);
  ctx.fillStyle = COLORS.text;
  ctx.font = '14px Georgia, serif';
  for (let i = 1; i < lines.length; i++) {
    ctx.fillText(lines[i], cx, cy - h / 2 + 30 + i * 24);
  }
  ctx.restore();
}

function drawDrawState() {
  clear();
  drawArea();
  drawGhostMaps();
  drawAllStrokes(false);
  drawInkMeter();
  drawCornerRoses();
  drawParticles();
  if (tutStep > 0) drawTutorial();
  // contested-floor hint
  ctx.textAlign = 'center';
  if (floor >= RIVAL_FLOOR) {
    ctx.fillStyle = COLORS.rival;
    ctx.font = 'italic 14px Georgia, serif';
    ctx.fillText('Contested floor — draw HALF; bait the rival with a dead-end stub  ·  ENTER commits', W / 2, H - 12);
  } else {
    ctx.fillStyle = COLORS.inkSoft;
    ctx.font = '14px Georgia, serif';
    ctx.fillText('Hold mouse to draw walls  ·  Z undo  ·  ENTER commit', W / 2, H - 12);
  }
  // descend transition: a dark sheet sliding down off the fresh page
  if (descendWipe > 0) {
    const t = descendWipe / 0.55; // 1 → 0
    ctx.fillStyle = 'rgba(20,14,6,0.85)';
    ctx.fillRect(0, 0, W, H * t);
  }
  drawFloorClearStamp();
  drawBanner();
}

// The rival inking its additions in, before play begins.
function drawRevealState() {
  clear();
  drawArea();
  drawGhostMaps();
  // player's own committed strokes, fully inked
  for (let i = 0; i < strokes.length; i++) {
    const s = strokes[i];
    if (s.rival) continue;
    drawStipple(s, i + 1);
    drawQuillLine(s.points, COLORS.ink, WALL_THICK + 2, i + 1);
  }
  // rival strokes revealed progressively in crimson (global point tally)
  let revealed = 0;
  for (let si = 0; si < rivalStrokes.length; si++) {
    const s = rivalStrokes[si];
    const shown = [];
    for (const p of s.points) {
      if (revealed < rivalProgress) { shown.push(p); revealed++; }
      else break;
    }
    if (shown.length >= 1) drawQuillLine(shown, COLORS.rival, WALL_THICK + 2, 500 + si);
  }
  // crimson quill nib tip at the current reveal head
  if (rivalQueue.length > 0) {
    const idx = Math.min(rivalQueue.length - 1, rivalProgress);
    const tip = rivalQueue[idx];
    if (tip) {
      ctx.save();
      ctx.fillStyle = COLORS.rival;
      ctx.beginPath(); ctx.arc(tip.x, tip.y, 4, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.4;
      ctx.beginPath(); ctx.arc(tip.x, tip.y, 9, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }
  drawInkMeter();
  drawCornerRoses();
  drawParticles();
  // twist explainer
  if (twistBanner > 0) {
    ctx.save();
    ctx.globalAlpha = Math.min(1, twistBanner / 600);
    journalPanel(W / 2, H / 2, 560, 120);
    ctx.textAlign = 'center';
    ctx.fillStyle = COLORS.rival;
    ctx.font = 'bold 24px Georgia, serif';
    ctx.fillText('A RIVAL CARTOGRAPHER', W / 2, H / 2 - 16);
    ctx.fillStyle = COLORS.text;
    ctx.font = 'italic 16px Georgia, serif';
    ctx.fillText('It finishes your map in your own hand — copying your habits, and your flaws.', W / 2, H / 2 + 16);
    ctx.restore();
  }
  drawBanner();
}

function drawPlayState() {
  ctx.save();
  if (shake > 0) {
    ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
  }
  clear();
  drawArea();
  drawPlayEntities();
  drawParticles();
  // hurt vignette
  if (player && player.hurtFlash > 0) {
    ctx.fillStyle = 'rgba(162,59,43,' + (player.hurtFlash * 0.6) + ')';
    ctx.fillRect(0, 0, W, H);
  }
  // commit wax-stamp flash (a quick warm bloom)
  if (commitFlash > 0) {
    ctx.fillStyle = 'rgba(255,240,210,' + (commitFlash * 1.6) + ')';
    ctx.fillRect(0, 0, W, H);
  }
  // descend ink-wipe transition (dark sheet sliding up off the page)
  if (descendWipe > 0) {
    const t = descendWipe / 0.55;           // 1 → 0
    ctx.fillStyle = 'rgba(20,14,6,0.85)';
    ctx.fillRect(0, H * (1 - t), W, H * t);
  }
  ctx.restore();
  drawFloorClearStamp();
  drawHealth();
  drawCornerRoses();
  // sabotage tally on contested floors
  if (rivalActive) {
    ctx.fillStyle = COLORS.rival;
    ctx.font = 'italic 13px Georgia, serif';
    ctx.textAlign = 'left';
    ctx.fillText('Rival’s design — sabotage: ' + sabotageHits, PLAY_AREA.x, H - 12);
  }
  // bottom hint
  ctx.fillStyle = COLORS.inkSoft;
  ctx.font = '13px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('WASD move  ·  SPACE / click attack  ·  reach the EXIT', W / 2, H - 12);
  drawBanner();
}

// A wax "SEALED" stamp that punches in when a floor is cleared.
function drawFloorClearStamp() {
  if (floorClearStamp <= 0) return;
  const t = 1 - floorClearStamp / 1.1; // 0 → 1
  // scale: overshoot then settle (stamp impact)
  const sc = t < 0.25 ? (1.6 - t * 2.4) : 1;
  const alpha = floorClearStamp > 0.25 ? 1 : floorClearStamp / 0.25;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(W / 2, H / 2 - 40);
  ctx.scale(sc, sc);
  ctx.rotate(-0.12);
  // wax disc
  ctx.fillStyle = COLORS.rival;
  ctx.beginPath();
  for (let i = 0; i <= 18; i++) {
    const a = i / 18 * Math.PI * 2;
    const rr = 56 * (0.92 + 0.08 * Math.sin(i * 2.1));
    const x = Math.cos(a) * rr, y = Math.sin(a) * rr;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(40,10,18,0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = 'center';
  ctx.font = 'bold 22px Georgia, serif';
  ctx.fillText('SEALED', 0, -2);
  ctx.font = 'italic 13px Georgia, serif';
  ctx.fillText('descend ▾', 0, 18);
  ctx.restore();
}

// WIN screen — the player escaped the curse to the surface.
function drawWin() {
  clear();
  drawCompassRose(W / 2, H / 2, 230, 0.08);
  drawParticles();
  journalPanel(W / 2, H / 2, 640, 320);
  centerText([
    { text: 'YOU REACH THE SURFACE', font: 'bold 38px Georgia, serif', color: COLORS.player, gap: 46 },
    { text: 'You escaped the curse — ' + FINAL_FLOOR + ' floors, drawn and survived.', font: 'italic 18px Georgia, serif', color: COLORS.textDim, gap: 40 },
    { text: 'The rival hand falls quiet behind you.', font: 'italic 15px Georgia, serif', color: COLORS.rival, gap: 38 },
    { text: 'Sabotage sprung on the rival: ' + sabotageHits, color: COLORS.accent, gap: 30 },
    { text: 'Best depth: ' + bestDepth + '   ·   Runs: ' + totalRuns, color: COLORS.textDim, gap: 44 },
    { text: 'Click or press ENTER to draw again', font: 'bold 18px Georgia, serif', color: COLORS.text }
  ], { startY: H / 2 - 110 });
}

function drawGameOver() {
  clear();
  drawCompassRose(W / 2, H / 2, 200, 0.06);
  journalPanel(W / 2, H / 2, 600, 300);
  const newBest = lastDepth >= bestDepth && lastDepth > 0;
  const remaining = Math.max(0, FINAL_FLOOR - lastFloor);
  centerText([
    { text: 'THE CURSE TAKES YOU', font: 'bold 36px Georgia, serif', color: COLORS.hpLow, gap: 44 },
    { text: 'You fell on floor ' + lastFloor + ' of ' + FINAL_FLOOR, font: '20px Georgia, serif', gap: 30 },
    { text: 'Depth reached: ' + lastDepth + (newBest ? '   (NEW BEST!)' : ''), color: COLORS.accent, gap: 30 },
    { text: remaining > 0 ? remaining + ' floor' + (remaining === 1 ? '' : 's') + ' from the surface'
                         : 'so close to escape', color: COLORS.textDim, gap: 30 },
    { text: lastFloor >= RIVAL_FLOOR ? 'Sabotage sprung on the rival: ' + sabotageHits : '·', color: COLORS.rival, gap: 30 },
    { text: 'Best: ' + bestDepth + ' / ' + FINAL_FLOOR + (hasEscaped ? '  ✦ ESCAPED' : '') + '   ·   Runs: ' + totalRuns, color: COLORS.textDim, gap: 42 },
    { text: 'Click or press ENTER to draw again', font: 'bold 18px Georgia, serif', color: COLORS.text }
  ], { startY: H / 2 - 110 });
}

// ═══════════════════════════════════════════════════════════════
//  Main loop
// ═══════════════════════════════════════════════════════════════
let lastT = performance.now();
function frame(now) {
  let dt = (now - lastT) / 1000;
  lastT = now;
  if (dt > 0.05) dt = 0.05; // clamp big gaps

  // Hit-stop: freeze the simulation for a few frames on impact, but keep
  // rendering and bleeding off the timer so the freeze actually ends.
  if (hitStop > 0) {
    hitStop = Math.max(0, hitStop - dt);
  } else if (state === PLAY) {
    updatePlay(dt);
  } else if (state === REVEAL) {
    updateReveal(dt);
  } else {
    updateParticles(dt);
    if (floorBanner > 0) floorBanner -= dt * 1000;
    if (commitFlash > 0) commitFlash = Math.max(0, commitFlash - dt);
    if (floorClearStamp > 0) floorClearStamp = Math.max(0, floorClearStamp - dt);
    if (descendWipe > 0) descendWipe = Math.max(0, descendWipe - dt);
  }

  switch (state) {
    case TITLE: drawTitle(); break;
    case DRAW: drawDrawState(); break;
    case REVEAL: drawRevealState(); break;
    case PLAY: drawPlayState(); break;
    case GAMEOVER: drawGameOver(); break;
    case WIN: drawWin(); break;
  }

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

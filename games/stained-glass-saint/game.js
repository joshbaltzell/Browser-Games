/* =============================================================================
   STAINED GLASS SAINT — Phase 1: Core Mechanic Prototype
   Rotate leaded-glass tiles to route a white sunbeam through SUBTRACTIVE colored
   panes and ignite a saint in exactly the required surviving hue.

   Grey-box draft: legible shapes, a colored beam, targets that light up.
   No textures / organ / dust yet (those are later phases).
   Runs from file:// — no modules, no network, audio via Web Audio on gesture.
============================================================================= */

"use strict";

const DEBUG = false; // toggle on-canvas readout of live beam hue + match state

// ------------------------------------------------------------------ canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Logical drawing resolution (square). All draw code uses these coords.
const VW = 720;
const VH = 720;

let scale = 1;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const availW = window.innerWidth - 24;
  const availH = window.innerHeight - 24;
  scale = Math.max(0.2, Math.min(availW / VW, availH / VH));
  canvas.style.width = VW * scale + "px";
  canvas.style.height = VH * scale + "px";
  canvas.width = Math.round(VW * dpr);
  canvas.height = Math.round(VH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);

// ------------------------------------------------------------------ palette
// SCAF-03 (partial): jewel-tone glass, leading, sun white, accents in one place.
const COLORS = {
  bg: "#0a0712",
  leading: "#15101c",
  leadingEdge: "#3a2f55",
  cellEmpty: "#171029",
  sun: "#fff7e0",
  // beam channel colors (used to render whatever survives)
  white: "#fff6df",
  // pane fills (what color the pane *is* — i.e. what it lets through)
  cyan: "#27e0d8",
  magenta: "#e84bd6",
  yellow: "#f4d83a",
  red: "#ff5b54",
  green: "#48e06a",
  blue: "#4f7bff",
  black: "#0e0b16",
  // ui
  text: "#f3ead8",
  muted: "#9d8fbf",
  amber: "#ffcf6b",
  saintRing: "#cdbce8",
  ignited: "#ffe9a8",
};

// Map a beam channel set {r,g,b} (each 0/1) to a display color + name.
const HUE_TABLE = {
  "1,1,1": { css: COLORS.white,   name: "WHITE" },
  "1,0,0": { css: COLORS.red,     name: "RED" },
  "0,1,0": { css: COLORS.green,   name: "GREEN" },
  "0,0,1": { css: COLORS.blue,    name: "BLUE" },
  "0,1,1": { css: COLORS.cyan,    name: "CYAN" },
  "1,0,1": { css: COLORS.magenta, name: "MAGENTA" },
  "1,1,0": { css: COLORS.yellow,  name: "YELLOW" },
  "0,0,0": { css: COLORS.black,   name: "BLACK" },
};

function hueKey(beam) {
  return beam.r + "," + beam.g + "," + beam.b;
}
function hueInfo(beam) {
  return HUE_TABLE[hueKey(beam)] || { css: "#888", name: "?" };
}

// ------------------------------------------------------------------ subtractive color (CORE-04 / CORE-05)
// Beam starts white {r:1,g:1,b:1}. A pane ABSORBS one channel.
//   cyan pane    absorbs R  -> {r:0}
//   magenta pane absorbs G  -> {g:0}
//   yellow pane  absorbs B  -> {b:0}
// So white -> cyan = {0,1,1} cyan ; then -> yellow = {0,1,0} GREEN.  Subtractive.
function applyPane(beam, absorb) {
  return {
    r: absorb.r ? 0 : beam.r,
    g: absorb.g ? 0 : beam.g,
    b: absorb.b ? 0 : beam.b,
  };
}

// ------------------------------------------------------------------ directions
// 0=right, 1=down, 2=left, 3=up
const DIRS = [
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
];

// Mirror reflection. A mirror is a diagonal line. orientation 0/2 = "/", 1/3 = "\".
//   "/"  swaps: right<->up, left<->down
//   "\\" swaps: right<->down, left<->up
function reflectDir(dir, orientation) {
  const slash = orientation % 2 === 0; // 0,2 -> "/"
  if (slash) {
    // "/"
    return { 0: 3, 3: 0, 2: 1, 1: 2 }[dir];
  } else {
    // "\"
    return { 0: 1, 1: 0, 2: 3, 3: 2 }[dir];
  }
}

// Pane absorption presets (which channel a pane removes).
const PANE_ABSORB = {
  cyan:    { r: 1, g: 0, b: 0 }, // removes red
  magenta: { r: 0, g: 1, b: 0 }, // removes green
  yellow:  { r: 0, g: 0, b: 1 }, // removes blue
};

// Console sanity check at load (proves the heart of the mechanic): CORE-05.
(function assertSubtractive() {
  let b = { r: 1, g: 1, b: 1 };
  b = applyPane(b, PANE_ABSORB.cyan);   // -> {0,1,1} cyan
  b = applyPane(b, PANE_ABSORB.yellow); // -> {0,1,0} green
  if (hueKey(b) === "0,1,0") console.log("[SGS] subtractive OK: white -> cyan -> yellow = GREEN");
  else console.error("[SGS] subtractive FAILED:", hueKey(b));
})();

// ------------------------------------------------------------------ tile model (CORE-01)
// type: 'empty' | 'mirror' | 'prism' | 'pane'
// orientation: 0..3
// pane kind only for 'pane': 'cyan' | 'magenta' | 'yellow'
// fixed: true => not rotatable (CORE-02)
function tile(type, opts = {}) {
  return {
    type,
    orientation: opts.o || 0,
    pane: opts.pane || null,
    fixed: !!opts.fixed,
  };
}

// ------------------------------------------------------------------ levels (LEVEL data shape)
// Grey-box test windows. Source enters at an edge cell heading inward.
// saints: required surviving hue at a cell.
// Each window ships solvable.
function makeWindows() {
  return [
    // -------- Window 1: tutorial — one mirror to bend white into a WHITE saint.
    // Teaches: clicking rotates 90°, beam re-traces live, geometry routes light.
    {
      name: "I. The First Light",
      cols: 5,
      rows: 5,
      source: { x: 0, y: 2, dir: 0 }, // left edge, row 2, heading right
      grid: [
        // a single rotatable mirror at (2,2); saint at (2,4) below it.
        { x: 2, y: 2, t: tile("mirror", { o: 1 }) }, // starts "\" (wrong-ish)
      ],
      saints: [{ x: 2, y: 4, need: { r: 1, g: 1, b: 1 } }], // WHITE
      hint: "Rotate the mirror so the sun bends down into the saint.",
    },

    // -------- Window 2: subtractive core — white -> cyan -> yellow = GREEN.
    // Source goes right through a cyan pane, a mirror bends it down through a
    // yellow pane into a GREEN saint. Player rotates the two mirrors to solve.
    {
      name: "II. Green Survives",
      cols: 6,
      rows: 6,
      source: { x: 0, y: 1, dir: 0 }, // left edge, row 1, heading right
      grid: [
        { x: 2, y: 1, t: tile("pane", { pane: "cyan", fixed: true }) },  // removes R -> cyan
        { x: 4, y: 1, t: tile("mirror", { o: 0 }) },                     // rotatable: bend down
        { x: 4, y: 3, t: tile("pane", { pane: "yellow", fixed: true }) },// removes B -> green
      ],
      saints: [{ x: 4, y: 5, need: { r: 0, g: 1, b: 0 } }], // GREEN
      hint: "White - cyan removes red - yellow removes blue = GREEN. Route it.",
    },

    // -------- Window 3: prism split — light two saints from one sun.
    // A prism splits the cyan-tinted beam; one arm hits a CYAN saint directly,
    // the other passes a yellow pane to a GREEN saint.
    {
      name: "III. Two Saints, One Sun",
      cols: 7,
      rows: 7,
      source: { x: 0, y: 3, dir: 0 },
      grid: [
        { x: 2, y: 3, t: tile("pane", { pane: "cyan", fixed: true }) }, // -> cyan
        { x: 4, y: 3, t: tile("prism", { o: 0 }) },                     // splits beam
        { x: 4, y: 1, t: tile("mirror", { o: 1 }) },                    // rotatable upper arm
        { x: 4, y: 5, t: tile("pane", { pane: "yellow", fixed: true }) },// lower arm -> green
      ],
      saints: [
        { x: 6, y: 1, need: { r: 0, g: 1, b: 1 } }, // CYAN (upper, via mirror)
        { x: 4, y: 6, need: { r: 0, g: 1, b: 0 } }, // GREEN (lower, through yellow)
      ],
      hint: "A prism splits the sun. Serve cyan up, green down.",
    },
  ];
}

// ------------------------------------------------------------------ build grid from level data
let LEVELS = makeWindows();
let levelIndex = 0;

let COLS = 5, ROWS = 5;
let grid = [];           // 2D [y][x] of tile objects
let source = null;       // {x,y,dir}
let saints = [];         // [{x,y,need,satisfied,ignited,bloom}]
let segments = [];       // beam segments for rendering
let saintHits = {};      // "x,y" -> beam reaching that cell (last one wins for render)

function loadLevel(i) {
  const lv = LEVELS[i];
  COLS = lv.cols;
  ROWS = lv.rows;
  // base grid of empties
  grid = [];
  for (let y = 0; y < ROWS; y++) {
    const row = [];
    for (let x = 0; x < COLS; x++) row.push(tile("empty", { fixed: true }));
    grid.push(row);
  }
  // place defined tiles
  for (const g of lv.grid) {
    grid[g.y][g.x] = g.t;
  }
  source = { ...lv.source };
  saints = lv.saints.map((s) => ({
    x: s.x, y: s.y, need: { ...s.need },
    satisfied: false, ignited: false, bloom: 0,
  }));
  justSolved = false;
  solveCelebrate = 0;
  retrace();
}

// ------------------------------------------------------------------ beam tracer (CORE-03)
// Walk cell-by-cell from source. Mirrors reflect, prisms split, panes tint.
// Records segments {x,y,dir,color} and which saint cells are hit + with what hue.
function retrace() {
  segments = [];
  saintHits = {};

  const STEP_CAP = 400;
  // queue of beams to walk: {x,y,dir,color}
  const queue = [];
  // start just before entering the source cell, heading inward
  queue.push({
    x: source.x,
    y: source.y,
    dir: source.dir,
    color: { r: 1, g: 1, b: 1 }, // full-spectrum white sun
  });

  let steps = 0;
  const seen = new Set(); // loop guard: cell+dir+colorkey

  while (queue.length) {
    let beam = queue.shift();
    // walk this beam until it leaves the grid / hits a cap
    let guard = 0;
    while (true) {
      if (++steps > STEP_CAP) return;
      if (++guard > STEP_CAP) break;

      const { x, y, dir, color } = beam;
      if (x < 0 || y < 0 || x >= COLS || y >= ROWS) break; // left the window

      const key = x + "," + y + "," + dir + "," + hueKey(color);
      if (seen.has(key)) break; // loop guard
      seen.add(key);

      const t = grid[y][x];
      let outDir = dir;
      let outColor = color;
      let split = null;

      if (t.type === "mirror") {
        outDir = reflectDir(dir, t.orientation);
      } else if (t.type === "pane") {
        outColor = applyPane(color, PANE_ABSORB[t.pane]);
      } else if (t.type === "prism") {
        // Split into perpendicular pair relative to incoming dir.
        // orientation toggles which perpendicular pair (just two useful states).
        const perpA = (dir + 1) % 4;
        const perpB = (dir + 3) % 4;
        outDir = perpA;
        split = perpB;
      }

      // record the segment for THIS cell (entered traveling outDir, colored outColor)
      segments.push({ x, y, dir: outDir, color: outColor, inDir: dir });

      // does this cell hold a saint? record the arriving hue.
      const skey = x + "," + y;
      saintHits[skey] = { ...outColor };

      // spawn split beam from this cell
      if (split !== null) {
        const sd = DIRS[split];
        queue.push({
          x: x + sd.x, y: y + sd.y, dir: split, color: { ...outColor },
        });
      }

      // advance
      const d = DIRS[outDir];
      beam = { x: x + d.x, y: y + d.y, dir: outDir, color: outColor };
    }
  }

  evaluateSaints();
}

// ------------------------------------------------------------------ saint satisfaction (CORE-07 / CORE-08)
let justSolved = false;
let solveCelebrate = 0;

function evaluateSaints() {
  let allSat = true;
  for (const s of saints) {
    const hit = saintHits[s.x + "," + s.y];
    const wasSat = s.satisfied;
    const nowSat = !!hit && hueKey(hit) === hueKey(s.need);
    s.satisfied = nowSat;
    if (nowSat && !wasSat) {
      s.ignited = true;
      s.bloom = 1; // flash payoff
      blip(660, 0.12, "triangle"); // placeholder choir blip
    }
    if (!nowSat) s.ignited = false;
    if (!nowSat) allSat = false;
  }
  const solved = saints.length > 0 && allSat;
  if (solved && !justSolved) {
    justSolved = true;
    solveCelebrate = 1;
    chord(); // window-solved payoff
  }
  if (!solved) justSolved = false;
  return solved;
}

function windowSolved() {
  return saints.length > 0 && saints.every((s) => s.satisfied);
}

// ------------------------------------------------------------------ audio (file://-safe, gesture-gated)
let audioCtx = null;
let audioReady = false;
function unlockAudio() {
  if (audioReady) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    audioReady = true;
  } catch (e) {
    audioReady = false;
  }
}
function blip(freq, dur, type) {
  if (!audioReady || !audioCtx) return;
  const t = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type || "sine";
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.18, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(audioCtx.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}
function clink() {
  // leaded-glass turn cue (JUICE preview)
  if (!audioReady || !audioCtx) return;
  blip(880, 0.06, "square");
}
function chord() {
  if (!audioReady || !audioCtx) return;
  [523, 659, 784, 1046].forEach((f, i) =>
    setTimeout(() => blip(f, 0.5, "sine"), i * 70)
  );
}

// ------------------------------------------------------------------ geometry helpers (grid <-> pixels)
// Board is centered with margins; cells are square.
const BOARD = { x: 0, y: 0, w: 0, cell: 0, oy: 0 };
function layoutBoard() {
  const pad = 90; // room for title + hint
  const top = 96;
  const avail = Math.min(VW - pad, VH - top - 60);
  const cell = Math.floor(Math.min(avail / COLS, avail / ROWS));
  BOARD.cell = cell;
  BOARD.w = cell * COLS;
  BOARD.h = cell * ROWS;
  BOARD.x = Math.round((VW - BOARD.w) / 2);
  BOARD.y = top + Math.round((VH - top - 60 - BOARD.h) / 2);
}

function cellRect(cx, cy) {
  return {
    x: BOARD.x + cx * BOARD.cell,
    y: BOARD.y + cy * BOARD.cell,
    s: BOARD.cell,
  };
}
function cellCenter(cx, cy) {
  const r = cellRect(cx, cy);
  return { x: r.x + r.s / 2, y: r.y + r.s / 2 };
}
function pixelToCell(px, py) {
  // px,py already in logical coords
  const cx = Math.floor((px - BOARD.x) / BOARD.cell);
  const cy = Math.floor((py - BOARD.y) / BOARD.cell);
  if (cx < 0 || cy < 0 || cx >= COLS || cy >= ROWS) return null;
  return { x: cx, y: cy };
}

// ------------------------------------------------------------------ state machine (SCAF-04)
const STATE = { TITLE: "TITLE", PLAY: "PLAY", WINDOW_COMPLETE: "WINDOW_COMPLETE", CAMPAIGN_COMPLETE: "CAMPAIGN_COMPLETE" };
let state = STATE.TITLE;

// localStorage progress (furthest window)
const LS_KEY = "sgs_progress_v1";
function loadProgress() {
  try {
    const n = parseInt(localStorage.getItem(LS_KEY), 10);
    if (!isNaN(n) && n >= 0 && n < LEVELS.length) return n;
  } catch (e) {}
  return 0;
}
function saveProgress(n) {
  try { localStorage.setItem(LS_KEY, String(n)); } catch (e) {}
}

function startCampaign() {
  levelIndex = loadProgress();
  if (levelIndex >= LEVELS.length) levelIndex = 0;
  loadLevel(levelIndex);
  state = STATE.PLAY;
}

function advanceWindow() {
  const next = levelIndex + 1;
  saveProgress(Math.min(next, LEVELS.length - 1));
  if (next >= LEVELS.length) {
    state = STATE.CAMPAIGN_COMPLETE;
  } else {
    levelIndex = next;
    loadLevel(levelIndex);
    state = STATE.PLAY;
  }
}

// ------------------------------------------------------------------ input
let solveHoldTimer = 0; // small delay so the solve bloom is felt before transition

function onPointerDown(e) {
  unlockAudio();
  const rect = canvas.getBoundingClientRect();
  const px = (e.clientX - rect.left) / scale;
  const py = (e.clientY - rect.top) / scale;

  if (state === STATE.TITLE) {
    startCampaign();
    return;
  }
  if (state === STATE.WINDOW_COMPLETE) {
    advanceWindow();
    return;
  }
  if (state === STATE.CAMPAIGN_COMPLETE) {
    saveProgress(0);
    levelIndex = 0;
    loadLevel(0);
    state = STATE.PLAY;
    return;
  }

  if (state === STATE.PLAY) {
    // restart-window control: top-right corner zone
    const c = pixelToCell(px, py);
    if (!c) return;
    const t = grid[c.y][c.x];
    if (t && (t.type === "mirror" || t.type === "prism") && !t.fixed) {
      t.orientation = (t.orientation + 1) % 4; // CORE-02
      clink();
      retrace(); // CORE-06: live re-trace on rotation
      // window-complete handoff handled in update() so bloom is visible first
    }
  }
}

function onKeyDown(e) {
  unlockAudio();
  if (e.key === "Enter" || e.key === " ") {
    if (state === STATE.TITLE) { startCampaign(); }
    else if (state === STATE.WINDOW_COMPLETE) { advanceWindow(); }
    else if (state === STATE.CAMPAIGN_COMPLETE) {
      saveProgress(0); levelIndex = 0; loadLevel(0); state = STATE.PLAY;
    }
  }
  if (e.key === "r" || e.key === "R") {
    if (state === STATE.PLAY) loadLevel(levelIndex); // restart window
  }
}

canvas.addEventListener("pointerdown", onPointerDown);
window.addEventListener("keydown", onKeyDown);

// ------------------------------------------------------------------ update
function update(dt) {
  for (const s of saints) {
    if (s.bloom > 0) s.bloom = Math.max(0, s.bloom - dt * 1.6);
  }
  if (state === STATE.PLAY && windowSolved()) {
    solveHoldTimer += dt;
    if (solveCelebrate > 0) solveCelebrate = Math.max(0, solveCelebrate - dt * 0.8);
    if (solveHoldTimer > 0.9) {
      solveHoldTimer = 0;
      state = STATE.WINDOW_COMPLETE;
    }
  } else {
    solveHoldTimer = 0;
  }
}

// ------------------------------------------------------------------ render
function draw(time) {
  ctx.clearRect(0, 0, VW, VH);
  // backdrop
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, VW, VH);

  if (state === STATE.TITLE) { drawTitle(time); return; }
  if (state === STATE.CAMPAIGN_COMPLETE) { drawCampaignComplete(); return; }

  layoutBoard();
  drawHeader();
  drawBoard();
  drawBeams(time);
  drawSaints(time);
  drawTiles();
  drawFooter();

  if (state === STATE.WINDOW_COMPLETE) drawWindowComplete();
  if (DEBUG) drawDebug();
}

function drawHeader() {
  const lv = LEVELS[levelIndex];
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.amber;
  ctx.font = "700 30px Segoe UI, system-ui, sans-serif";
  ctx.fillText(lv.name, VW / 2, 46);
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 15px Segoe UI, system-ui, sans-serif";
  ctx.fillText(lv.hint, VW / 2, 72);
}

function drawFooter() {
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 13px Segoe UI, system-ui, sans-serif";
  ctx.fillText(
    "Click mirrors / prisms to rotate  ·  R restart window  ·  Window " +
      (levelIndex + 1) + " / " + LEVELS.length,
    VW / 2, VH - 26
  );
}

function drawBoard() {
  // leaded backdrop behind cells
  ctx.fillStyle = COLORS.leading;
  ctx.fillRect(BOARD.x - 8, BOARD.y - 8, BOARD.w + 16, BOARD.h + 16);
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const r = cellRect(x, y);
      ctx.fillStyle = COLORS.cellEmpty;
      ctx.fillRect(r.x + 2, r.y + 2, r.s - 4, r.s - 4);
    }
  }
  // source marker (sun entering the edge)
  const sc = cellCenter(source.x, source.y);
  const d = DIRS[source.dir];
  ctx.save();
  ctx.fillStyle = COLORS.sun;
  ctx.beginPath();
  ctx.arc(sc.x - d.x * BOARD.cell * 0.55, sc.y - d.y * BOARD.cell * 0.55, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawBeams(time) {
  // soft glow underlay then crisp core (STYLE preview, kept simple here)
  for (let pass = 0; pass < 2; pass++) {
    for (const seg of segments) {
      const c = cellCenter(seg.x, seg.y);
      const inD = DIRS[seg.inDir];
      const outD = DIRS[seg.dir];
      const half = BOARD.cell / 2;
      const info = HUE_TABLE[hueKey(seg.color)] || { css: "#888" };
      // black (fully absorbed) beam: barely visible
      const isBlack = hueKey(seg.color) === "0,0,0";
      ctx.strokeStyle = info.css;
      ctx.globalAlpha = isBlack ? 0.12 : (pass === 0 ? 0.22 : 0.95);
      ctx.lineWidth = pass === 0 ? 16 : 5;
      ctx.lineCap = "round";
      ctx.beginPath();
      // entry edge -> center -> exit edge (handles bends through the cell)
      ctx.moveTo(c.x - inD.x * half, c.y - inD.y * half);
      ctx.lineTo(c.x, c.y);
      ctx.lineTo(c.x + outD.x * half, c.y + outD.y * half);
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
}

function drawTiles() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const t = grid[y][x];
      if (t.type === "empty") continue;
      const r = cellRect(x, y);
      const cx = r.x + r.s / 2, cy = r.y + r.s / 2;
      const m = r.s * 0.32;

      if (t.type === "mirror") {
        const slash = t.orientation % 2 === 0;
        ctx.strokeStyle = "#dfe6ff";
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        ctx.beginPath();
        if (slash) { ctx.moveTo(cx - m, cy + m); ctx.lineTo(cx + m, cy - m); }
        else { ctx.moveTo(cx - m, cy - m); ctx.lineTo(cx + m, cy + m); }
        ctx.stroke();
        // rotatable hint ring
        if (!t.fixed) ringHint(cx, cy, r.s);
      } else if (t.type === "prism") {
        ctx.fillStyle = "rgba(220,230,255,0.85)";
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - m);
        ctx.lineTo(cx + m, cy + m);
        ctx.lineTo(cx - m, cy + m);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (!t.fixed) ringHint(cx, cy, r.s);
      } else if (t.type === "pane") {
        const fill = COLORS[t.pane] || "#888";
        ctx.fillStyle = fill;
        ctx.globalAlpha = 0.78;
        roundRect(r.x + 6, r.y + 6, r.s - 12, r.s - 12, 6);
        ctx.fill();
        ctx.globalAlpha = 1;
        // leading border
        ctx.strokeStyle = COLORS.leadingEdge;
        ctx.lineWidth = 3;
        roundRect(r.x + 6, r.y + 6, r.s - 12, r.s - 12, 6);
        ctx.stroke();
        // label: what it absorbs
        ctx.fillStyle = "rgba(10,7,18,0.85)";
        ctx.font = "700 11px Segoe UI, sans-serif";
        ctx.textAlign = "center";
        const lbl = { cyan: "-R", magenta: "-G", yellow: "-B" }[t.pane] || "";
        ctx.fillText(lbl, cx, cy + 4);
      }
    }
  }
}

function ringHint(cx, cy, s) {
  ctx.strokeStyle = "rgba(255,207,107,0.45)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, s * 0.42, -0.5, Math.PI * 1.3);
  ctx.stroke();
  // little arrowhead to say "rotates"
  ctx.beginPath();
  ctx.moveTo(cx + s * 0.42, cy - 2);
  ctx.lineTo(cx + s * 0.42 - 6, cy - 8);
  ctx.moveTo(cx + s * 0.42, cy - 2);
  ctx.lineTo(cx + s * 0.42 + 6, cy - 8);
  ctx.stroke();
}

function drawSaints(time) {
  for (const s of saints) {
    const c = cellCenter(s.x, s.y);
    const r = cellRect(s.x, s.y);
    const rad = r.s * 0.34;
    const needInfo = HUE_TABLE[hueKey(s.need)] || { css: "#888", name: "?" };

    // bloom flash on ignition
    if (s.ignited) {
      const pulse = 0.5 + 0.5 * Math.sin(time / 180);
      ctx.save();
      const glow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, r.s * (0.9 + s.bloom));
      glow.addColorStop(0, "rgba(255,233,168," + (0.55 + s.bloom * 0.4) + ")");
      glow.addColorStop(1, "rgba(255,233,168,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(c.x, c.y, r.s * (0.95 + s.bloom), 0, Math.PI * 2);
      ctx.fill();
      // halo ring
      ctx.strokeStyle = "rgba(255,233,168," + (0.6 + 0.3 * pulse) + ")";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(c.x, c.y, rad + 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // saint body: ringed cell showing required hue swatch
    ctx.strokeStyle = s.ignited ? COLORS.ignited : COLORS.saintRing;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(c.x, c.y, rad, 0, Math.PI * 2);
    ctx.stroke();

    // inner swatch = the hue this saint NEEDS (JUICE-03 goal clarity)
    ctx.fillStyle = needInfo.css;
    ctx.globalAlpha = s.ignited ? 1 : 0.85;
    ctx.beginPath();
    ctx.arc(c.x, c.y, rad - 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // simple saint glyph (figure) for grey-box readability
    ctx.fillStyle = "rgba(10,7,18,0.65)";
    ctx.beginPath();
    ctx.arc(c.x, c.y - rad * 0.32, rad * 0.16, 0, Math.PI * 2); // head
    ctx.fill();

    // needed-hue label under the cell
    ctx.fillStyle = COLORS.muted;
    ctx.font = "700 12px Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("needs " + needInfo.name, c.x, r.y + r.s + 14);
  }
}

// ------------------------------------------------------------------ overlays
function drawTitle(time) {
  ctx.textAlign = "center";
  // title
  ctx.fillStyle = COLORS.amber;
  ctx.font = "800 56px Georgia, 'Times New Roman', serif";
  ctx.fillText("STAINED GLASS", VW / 2, VH * 0.32);
  ctx.fillText("SAINT", VW / 2, VH * 0.32 + 60);

  // decorative beam swatch demo: white -> cyan -> green
  const y = VH * 0.55;
  const sw = 60, gap = 24;
  const startx = VW / 2 - (sw * 3 + gap * 2) / 2;
  const demo = [
    { c: COLORS.white, t: "WHITE" },
    { c: COLORS.cyan, t: "CYAN" },
    { c: COLORS.green, t: "GREEN" },
  ];
  demo.forEach((d, i) => {
    const x = startx + i * (sw + gap);
    ctx.fillStyle = d.c;
    roundRect(x, y, sw, sw, 8); ctx.fill();
    ctx.fillStyle = COLORS.muted;
    ctx.font = "600 12px Segoe UI, sans-serif";
    ctx.fillText(d.t, x + sw / 2, y + sw + 18);
    if (i < 2) {
      ctx.fillStyle = COLORS.muted;
      ctx.font = "700 22px Segoe UI, sans-serif";
      ctx.fillText("→", x + sw + gap / 2, y + sw / 2 + 8);
    }
  });

  ctx.fillStyle = COLORS.text;
  ctx.font = "400 18px Segoe UI, system-ui, sans-serif";
  ctx.fillText(
    "Rotate glass to route the sun through colored panes — color is SUBTRACTED.",
    VW / 2, VH * 0.72
  );
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 15px Segoe UI, sans-serif";
  ctx.fillText("Cyan removes red · Magenta removes green · Yellow removes blue", VW / 2, VH * 0.72 + 26);

  const blink = 0.5 + 0.5 * Math.sin(time / 350);
  ctx.fillStyle = "rgba(255,207,107," + (0.5 + blink * 0.5) + ")";
  ctx.font = "700 22px Segoe UI, sans-serif";
  ctx.fillText("Click or press Enter to begin", VW / 2, VH * 0.85);
}

function drawWindowComplete() {
  ctx.save();
  ctx.fillStyle = "rgba(6,4,16,0.7)";
  ctx.fillRect(0, 0, VW, VH);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.ignited;
  ctx.font = "800 44px Georgia, serif";
  ctx.fillText("The saints are lit.", VW / 2, VH * 0.45);
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 18px Segoe UI, sans-serif";
  ctx.fillText("Click or press Enter for the next window", VW / 2, VH * 0.55);
  ctx.restore();
}

function drawCampaignComplete() {
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.amber;
  ctx.font = "800 48px Georgia, serif";
  ctx.fillText("Every window lit.", VW / 2, VH * 0.42);
  ctx.fillStyle = COLORS.text;
  ctx.font = "400 18px Segoe UI, sans-serif";
  ctx.fillText("The prototype campaign is complete.", VW / 2, VH * 0.52);
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 15px Segoe UI, sans-serif";
  ctx.fillText("Click or press Enter to play again from the first window.", VW / 2, VH * 0.6);
}

function drawDebug() {
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(0,0,0,0.6)";
  ctx.fillRect(8, 8, 230, 20 + saints.length * 18);
  ctx.fillStyle = "#9effa0";
  ctx.font = "12px monospace";
  let yy = 24;
  saints.forEach((s, i) => {
    const hit = saintHits[s.x + "," + s.y];
    const got = hit ? (HUE_TABLE[hueKey(hit)] || { name: "?" }).name : "—";
    const need = (HUE_TABLE[hueKey(s.need)] || { name: "?" }).name;
    ctx.fillText(
      "saint" + i + " need=" + need + " got=" + got + (s.satisfied ? " ✓" : ""),
      14, yy
    );
    yy += 18;
  });
  ctx.fillText("solved=" + windowSolved(), 14, yy);
}

// ------------------------------------------------------------------ rounded rect util
function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// ------------------------------------------------------------------ main loop
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  update(dt);
  draw(now);
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ boot
resize();
loadLevel(0); // prime so a retrace runs at load (assert path)
requestAnimationFrame(frame);

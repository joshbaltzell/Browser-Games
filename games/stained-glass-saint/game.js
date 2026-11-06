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

// Map a beam channel set {r,g,b} (each 0/1) to a display color + name + rgb triple.
const HUE_TABLE = {
  "1,1,1": { css: COLORS.white,   name: "WHITE",   rgb: [255, 246, 223] },
  "1,0,0": { css: COLORS.red,     name: "RED",     rgb: [255, 91, 84] },
  "0,1,0": { css: COLORS.green,   name: "GREEN",   rgb: [72, 224, 106] },
  "0,0,1": { css: COLORS.blue,    name: "BLUE",    rgb: [79, 123, 255] },
  "0,1,1": { css: COLORS.cyan,    name: "CYAN",    rgb: [39, 224, 216] },
  "1,0,1": { css: COLORS.magenta, name: "MAGENTA", rgb: [232, 75, 214] },
  "1,1,0": { css: COLORS.yellow,  name: "YELLOW",  rgb: [244, 216, 58] },
  "0,0,0": { css: COLORS.black,   name: "BLACK",   rgb: [14, 11, 22] },
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
    spin: 0, // JUICE-01: transient rotation animation amount
  };
}

// ------------------------------------------------------------------ levels (LEVEL data shape)
// Grey-box test windows. Source enters at an edge cell heading inward.
// saints: required surviving hue at a cell.
// Each window ships solvable.
//
// TWIST DATA (Phase 3):
//   heresy:  string revealed when a window is fully solved (TWIST-01). The lit
//            saints "spell" the line — each saint carries a `word` fragment so the
//            reveal reads left-to-right in solve order.
//   clouded: true  => the sun is veiled; source intensity drops, palette cools,
//            beams render weaker (TWIST-02 / TWIST-03).
//   saint.shadow: true => INVERTED target. Ignites only when NO qualifying beam
//            reaches it WHILE every non-shadow (light) saint in the window is lit
//            (TWIST-04 / TWIST-05). Carries `forbid` = the hue that must NOT arrive.
// LEVEL-02: a 14-window campaign, easy -> hard. Each window ships solvable
// (LEVEL-04) — verified headlessly by brute-forcing every rotatable orientation —
// and starts in a NON-solving orientation so the puzzle is always a real act.
// Curve: 1 teaches rotation; 2-4 teach single panes & each subtractive mix;
// 5 a two-mirror route; 6 prism split; 7-8 stacked panes + split routing;
// 9-11 clouding (TWIST-02/03); 12-13 shadow/absence (TWIST-04/05); 14 the finale
// (clouded + shadow + a real choice).
function makeWindows() {
  return [
    // 1 — tutorial: one mirror bends white down into a WHITE saint.
    { name: "I. The First Light", cols: 5, rows: 5, source: { x: 0, y: 2, dir: 0 },
      grid: [ { x: 2, y: 2, t: tile("mirror", { o: 0 }) } ],
      saints: [{ x: 2, y: 4, need: { r: 1, g: 1, b: 1 }, word: "LIGHT" }],
      hint: "Click the mirror to turn it, until the sun bends down into the saint.",
      heresy: "LIGHT needs no priest." },

    // 2 — one pane: white through cyan = CYAN. Learn that glass subtracts.
    { name: "II. The Coloured Pane", cols: 5, rows: 5, source: { x: 0, y: 2, dir: 0 },
      grid: [ { x: 1, y: 2, t: tile("pane", { pane: "cyan", fixed: true }) },
              { x: 3, y: 2, t: tile("mirror", { o: 0 }) } ],
      saints: [{ x: 3, y: 4, need: { r: 0, g: 1, b: 1 }, word: "COLOUR" }],
      hint: "Cyan glass removes red. Bend what is left into the saint.",
      heresy: "COLOUR is only what the glass forgives." },

    // 3 — subtractive core: cyan then yellow = GREEN.
    { name: "III. Green Survives", cols: 6, rows: 6, source: { x: 0, y: 1, dir: 0 },
      grid: [ { x: 2, y: 1, t: tile("pane", { pane: "cyan", fixed: true }) },
              { x: 4, y: 1, t: tile("mirror", { o: 0 }) },
              { x: 4, y: 3, t: tile("pane", { pane: "yellow", fixed: true }) } ],
      saints: [{ x: 4, y: 5, need: { r: 0, g: 1, b: 0 }, word: "WHAT SURVIVES" }],
      hint: "White minus red minus blue = GREEN. Route it down.",
      heresy: "WHAT SURVIVES the glass was never theirs to give." },

    // 4 — magenta path: cyan then magenta = BLUE.
    { name: "IV. The Deepest Blue", cols: 6, rows: 6, source: { x: 0, y: 1, dir: 0 },
      grid: [ { x: 2, y: 1, t: tile("pane", { pane: "cyan", fixed: true }) },
              { x: 4, y: 1, t: tile("mirror", { o: 0 }) },
              { x: 4, y: 3, t: tile("pane", { pane: "magenta", fixed: true }) } ],
      saints: [{ x: 4, y: 5, need: { r: 0, g: 0, b: 1 }, word: "THE DEEP" }],
      hint: "Cyan removes red, magenta removes green. Only blue remains.",
      heresy: "THE DEEP keeps what the altar threw away." },

    // 5 — two mirrors: an S-bend routes white back across to a WHITE saint.
    { name: "V. The Long Way Round", cols: 6, rows: 6, source: { x: 0, y: 1, dir: 0 },
      grid: [ { x: 4, y: 1, t: tile("mirror", { o: 0 }) },
              { x: 4, y: 4, t: tile("mirror", { o: 0 }) } ],
      saints: [{ x: 1, y: 4, need: { r: 1, g: 1, b: 1 }, word: "THE PATH" }],
      hint: "Two mirrors. Bend the sun down, then back the way it came.",
      heresy: "THE PATH bends, but the light never kneels." },

    // 6 — prism split: one sun, two saints (cyan up, green down).
    { name: "VI. Two Saints, One Sun", cols: 7, rows: 7, source: { x: 0, y: 3, dir: 0 },
      grid: [ { x: 2, y: 3, t: tile("pane", { pane: "cyan", fixed: true }) },
              { x: 4, y: 3, t: tile("prism", { o: 0 }) },
              { x: 4, y: 1, t: tile("mirror", { o: 1 }) },
              { x: 4, y: 5, t: tile("pane", { pane: "yellow", fixed: true }) } ],
      saints: [ { x: 6, y: 1, need: { r: 0, g: 1, b: 1 }, word: "ONE SUN" },
                { x: 4, y: 6, need: { r: 0, g: 1, b: 0 }, word: "MANY GODS" } ],
      hint: "A prism splits the sun. Serve cyan up, green down.",
      heresy: "ONE SUN, MANY GODS — and none of them inside." },

    // 7 — stacked panes: magenta then yellow leave only RED. Bend it east.
    { name: "VII. The Narrow Gate", cols: 7, rows: 7, source: { x: 3, y: 0, dir: 1 },
      grid: [ { x: 3, y: 2, t: tile("pane", { pane: "magenta", fixed: true }) },
              { x: 3, y: 4, t: tile("mirror", { o: 0 }) },
              { x: 5, y: 4, t: tile("pane", { pane: "yellow", fixed: true }) } ],
      saints: [{ x: 6, y: 4, need: { r: 1, g: 0, b: 0 }, word: "THE GATE" }],
      hint: "Magenta then yellow leave only red. Send it east.",
      heresy: "THE GATE is narrow, and the keepers have no key." },

    // 8 — prism + magenta: split, red rises through yellow, blue falls through cyan.
    { name: "VIII. Sundered Light", cols: 7, rows: 7, source: { x: 0, y: 3, dir: 0 },
      grid: [ { x: 2, y: 3, t: tile("pane", { pane: "magenta", fixed: true }) },
              { x: 4, y: 3, t: tile("prism", { o: 0 }) },
              { x: 4, y: 1, t: tile("pane", { pane: "yellow", fixed: true }) },
              { x: 4, y: 5, t: tile("mirror", { o: 0 }) },
              { x: 5, y: 5, t: tile("pane", { pane: "cyan", fixed: true }) } ],
      saints: [ { x: 4, y: 0, need: { r: 1, g: 0, b: 0 }, word: "WHAT IS TORN" },
                { x: 6, y: 5, need: { r: 0, g: 0, b: 1 }, word: "IS NOT LESS" } ],
      hint: "Magenta makes magenta. Split it: red rises, blue falls.",
      heresy: "WHAT IS TORN IS NOT LESS holy than the whole." },

    // 9 — CLOUDING begins (TWIST-02/03): dimmed green route.
    { name: "IX. The Sky Veils Over", cols: 6, rows: 6, clouded: true, source: { x: 0, y: 1, dir: 0 },
      grid: [ { x: 2, y: 1, t: tile("pane", { pane: "cyan", fixed: true }) },
              { x: 4, y: 1, t: tile("mirror", { o: 2 }) },
              { x: 4, y: 3, t: tile("pane", { pane: "yellow", fixed: true }) } ],
      saints: [{ x: 4, y: 5, need: { r: 0, g: 1, b: 0 }, word: "EVEN DIMMED" }],
      hint: "The clouds steal the sun's strength. Route what little remains.",
      heresy: "EVEN DIMMED, the light obeys no altar." },

    // 10 — clouded two-target prism split (red up, yellow east).
    { name: "X. Scarce Mercy", cols: 7, rows: 7, clouded: true, source: { x: 0, y: 3, dir: 0 },
      grid: [ { x: 2, y: 3, t: tile("pane", { pane: "yellow", fixed: true }) },
              { x: 4, y: 3, t: tile("prism", { o: 0 }) },
              { x: 4, y: 1, t: tile("pane", { pane: "magenta", fixed: true }) },
              { x: 4, y: 5, t: tile("mirror", { o: 0 }) } ],
      saints: [ { x: 4, y: 0, need: { r: 1, g: 0, b: 0 }, word: "MERCY" },
                { x: 6, y: 5, need: { r: 1, g: 1, b: 0 }, word: "IS RATIONED" } ],
      hint: "Yellow first, then split. One arm loses green, one keeps it.",
      heresy: "MERCY IS RATIONED here, but the sun is not." },

    // 11 — clouded long S-bend across and down to a CYAN saint.
    { name: "XI. Through the Gloom", cols: 7, rows: 7, clouded: true, source: { x: 0, y: 0, dir: 1 },
      grid: [ { x: 0, y: 3, t: tile("mirror", { o: 0 }) },
              { x: 4, y: 3, t: tile("mirror", { o: 1 }) },
              { x: 4, y: 5, t: tile("pane", { pane: "cyan", fixed: true }) } ],
      saints: [{ x: 4, y: 6, need: { r: 0, g: 1, b: 1 }, word: "THROUGH GLOOM" }],
      hint: "Find the dim sun a path across, then down through cyan.",
      heresy: "THROUGH GLOOM the faithful learn to see without them." },

    // 12 — SHADOW intro (TWIST-04/05): light cyan above, keep the lower saint dark.
    { name: "XII. The First Shadow", cols: 7, rows: 7, shadow: true, source: { x: 0, y: 3, dir: 0 },
      grid: [ { x: 2, y: 3, t: tile("pane", { pane: "cyan", fixed: true }) },
              { x: 4, y: 3, t: tile("mirror", { o: 1 }) } ],
      saints: [ { x: 4, y: 0, need: { r: 0, g: 1, b: 1 }, word: "THE DARK" },
                { x: 4, y: 6, shadow: true, forbid: { r: 0, g: 1, b: 1 }, word: "IS ALSO HOLY" } ],
      hint: "Light the saint above — but never let light touch the one below.",
      heresy: "THE DARK IS ALSO HOLY. Amen to the absence." },

    // 13 — shadow + prism: feed two yellow saints, starve the marked cell of ALL light.
    { name: "XIII. The Kept Absence", cols: 7, rows: 7, shadow: true, source: { x: 0, y: 3, dir: 0 },
      grid: [ { x: 2, y: 3, t: tile("pane", { pane: "yellow", fixed: true }) },
              { x: 4, y: 3, t: tile("prism", { o: 0 }) },
              { x: 4, y: 1, t: tile("mirror", { o: 0 }) },
              { x: 4, y: 5, t: tile("mirror", { o: 1 }) } ],
      saints: [ { x: 6, y: 1, need: { r: 1, g: 1, b: 0 }, word: "WE KEPT" },
                { x: 2, y: 5, need: { r: 1, g: 1, b: 0 }, word: "ONE ABSENCE" },
                { x: 6, y: 5, shadow: true, forbid: null, word: "UNLIT FOREVER" } ],
      hint: "Split the yellow. Feed both bright saints — leave the marked cell black.",
      heresy: "WE KEPT ONE ABSENCE UNLIT FOREVER, and it was the truest." },

    // 14 — finale: clouded + shadow + a real choice. Blue above, holy dark below.
    { name: "XIV. Solved in Shadow", cols: 7, rows: 7, shadow: true, clouded: true, source: { x: 0, y: 3, dir: 0 },
      grid: [ { x: 2, y: 3, t: tile("pane", { pane: "cyan", fixed: true }) },
              { x: 4, y: 3, t: tile("mirror", { o: 1 }) },
              { x: 4, y: 1, t: tile("pane", { pane: "magenta", fixed: true }) } ],
      saints: [ { x: 4, y: 0, need: { r: 0, g: 0, b: 1 }, word: "AT THE END" },
                { x: 4, y: 6, shadow: true, forbid: { r: 0, g: 1, b: 1 }, word: "WE CHOSE THE DARK" } ],
      hint: "Bend the cyan up through magenta for blue above — the lower saint stays holy in dark.",
      heresy: "AT THE END WE CHOSE THE DARK, and called it grace." },
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
let clouded = false;     // TWIST-02: source dimmed this window
let isShadowWindow = false; // TWIST-04: window contains an inverted target
let heresyText = "";     // TWIST-01: revealed line on completion

function loadLevel(i) {
  const lv = LEVELS[i];
  COLS = lv.cols;
  ROWS = lv.rows;
  clouded = !!lv.clouded;
  isShadowWindow = !!lv.shadow;
  heresyText = lv.heresy || "";
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
    x: s.x, y: s.y,
    need: s.need ? { ...s.need } : null,
    shadow: !!s.shadow,                       // TWIST-04 inverted target
    forbid: s.forbid ? { ...s.forbid } : null,
    word: s.word || "",                       // TWIST-01 heresy fragment
    satisfied: false, ignited: false, bloom: 0,
  }));
  justSolved = false;
  solveCelebrate = 0;
  solveFlash = 0;
  shake = 0;
  clinkFlash = 0;
  lastTurned = null;
  // ONBOARD-02: the wordless pointer only arms on the very first window (and only
  // if the player has never finished it), so the tutorial teaches the click once.
  hintArmed = (i === 0 && !progress.solved[0]);
  motes = [];
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
      // clouded windows render a weaker beam (TWIST-03); split arms also weaken.
      segments.push({ x, y, dir: outDir, color: outColor, inDir: dir, dim: clouded });

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
// JUICE-02 screen feedback
let solveFlash = 0; // 0..1 warm flash, decays
let shake = 0;      // pixels of screen-shake, decays
let clinkFlash = 0; // tiny per-rotation white pop on the rotated tile cell

function evaluateSaints() {
  // First pass: every LIGHT saint (needs an exact surviving hue).
  let allLightLit = true;
  for (const s of saints) {
    if (s.shadow) continue;
    const hit = saintHits[s.x + "," + s.y];
    const wasSat = s.satisfied;
    const nowSat = !!hit && hueKey(hit) === hueKey(s.need);
    s.satisfied = nowSat;
    if (nowSat && !wasSat) {
      s.ignited = true;
      s.bloom = 1; // flash payoff
      saintIgnite(s.x, s.y); // STYLE-06 particle bloom
      choirSwell();          // STYLE-05 choir on ignition
    }
    if (!nowSat) s.ignited = false;
    if (!nowSat) allLightLit = false;
  }

  // Second pass: SHADOW saints (TWIST-04). Satisfied only when no forbidden beam
  // reaches the cell AND every light saint is already correctly lit. The shadow
  // saint shows as "sanctified darkness" rather than ignited light.
  let allShadowOk = true;
  for (const s of saints) {
    if (!s.shadow) continue;
    const hit = saintHits[s.x + "," + s.y];
    const struck = !!hit && (s.forbid ? hueKey(hit) === hueKey(s.forbid) : true);
    const wasSat = s.satisfied;
    const nowSat = !struck && allLightLit;
    s.satisfied = nowSat;
    if (nowSat && !wasSat) {
      s.ignited = true;          // "ignited" here means sanctified-dark
      s.bloom = 1;
      darkBloom(s.x, s.y);       // cool inward bloom instead of warm burst
      shadowSwell();             // hollow tone for the absence
    }
    if (!nowSat) s.ignited = false;
    if (!nowSat) allShadowOk = false;
  }

  const solved = saints.length > 0 && allLightLit && allShadowOk;
  if (solved && !justSolved) {
    justSolved = true;
    solveCelebrate = 1;
    chord();            // window-solved payoff
    solveFlash = 1;     // JUICE-02: a warm full-window flash
    shake = 8;          // JUICE-02: a brief joyful screen-shake
    markSolved(levelIndex); // ONBOARD-04: remember this window is done
    // a second celebratory burst from every lit saint
    for (const s of saints) {
      if (s.satisfied && !s.shadow) saintIgnite(s.x, s.y);
    }
  }
  if (!solved) justSolved = false;
  return solved;
}

function windowSolved() {
  return saints.length > 0 && saints.every((s) => s.satisfied);
}

// ------------------------------------------------------------------ audio (file://-safe, gesture-gated)
// STYLE-05: a low cathedral organ drone breathes under PLAY; a choir swell rises
// the instant a saint ignites. All Web Audio synthesis — no assets, no network.
let audioCtx = null;
let audioReady = false;
let masterGain = null;
let reverb = null;        // synthesized convolution impulse (cathedral tail)
let droneNodes = null;    // {gain, oscs:[], lfo} — the sustained organ
let droneOn = false;

function makeImpulse(seconds, decay) {
  const rate = audioCtx.sampleRate;
  const len = Math.floor(rate * seconds);
  const buf = audioCtx.createBuffer(2, len, rate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
  }
  return buf;
}

function unlockAudio() {
  if (audioReady) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.9;
    masterGain.connect(audioCtx.destination);
    // cathedral reverb tail
    reverb = audioCtx.createConvolver();
    reverb.buffer = makeImpulse(3.4, 2.6);
    const wet = audioCtx.createGain();
    wet.gain.value = 0.55;
    reverb.connect(wet).connect(masterGain);
    audioBus = { dry: masterGain, wet: reverb }; // voices fan into both
    audioReady = true;
  } catch (e) {
    audioReady = false;
  }
}
let audioBus = null;

// Route a node into both dry master and the reverb send.
function routeVoice(node) {
  node.connect(audioBus.dry);
  node.connect(audioBus.wet);
}

// Continuous organ drone — stacked detuned oscillators with a slow breathing LFO.
function startDrone() {
  if (!audioReady || droneOn) return;
  const t = audioCtx.currentTime;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.085, t + 2.2); // slow fade-in
  routeVoice(g);

  // low D drone with a fifth and octave — churchy, modal, calm
  const freqs = [73.42, 110.0, 146.83, 220.0]; // D2, A2, D3, A3
  const oscs = [];
  freqs.forEach((f, i) => {
    const o = audioCtx.createOscillator();
    o.type = i < 2 ? "sine" : "triangle";
    o.frequency.value = f;
    o.detune.value = (i - 1.5) * 4; // gentle chorus
    const og = audioCtx.createGain();
    og.gain.value = i === 0 ? 0.9 : 0.5 / (i + 1);
    o.connect(og).connect(g);
    o.start(t);
    oscs.push(o);
  });
  // breathing amplitude LFO
  const lfo = audioCtx.createOscillator();
  lfo.frequency.value = 0.12;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.03;
  lfo.connect(lfoGain).connect(g.gain);
  lfo.start(t);

  droneNodes = { gain: g, oscs, lfo, lfoGain };
  droneOn = true;
  setDroneClouded(clouded); // match current window mood
}

function stopDrone() {
  if (!droneOn || !droneNodes) return;
  const t = audioCtx.currentTime;
  droneNodes.gain.gain.cancelScheduledValues(t);
  droneNodes.gain.gain.setValueAtTime(droneNodes.gain.gain.value, t);
  droneNodes.gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
  droneNodes.oscs.forEach((o) => o.stop(t + 1.3));
  droneNodes.lfo.stop(t + 1.3);
  droneOn = false;
  droneNodes = null;
}

// TWIST-03 mood: clouded windows pull the drone lower & quieter.
function setDroneClouded(isClouded) {
  if (!droneOn || !droneNodes) return;
  const t = audioCtx.currentTime;
  droneNodes.gain.gain.cancelScheduledValues(t);
  droneNodes.gain.gain.setTargetAtTime(isClouded ? 0.05 : 0.085, t, 0.8);
  droneNodes.oscs.forEach((o) => o.detune.setTargetAtTime(
    (isClouded ? -22 : 0) + (Math.random() - 0.5) * 4, t, 0.8));
}

// generic tone voice (through reverb)
function tone(freq, dur, type, peak, attack) {
  if (!audioReady) return;
  const t = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type || "sine";
  o.frequency.value = freq;
  const a = attack == null ? 0.01 : attack;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak == null ? 0.18 : peak, t + a);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g);
  routeVoice(g);
  o.start(t);
  o.stop(t + dur + 0.05);
}
// kept for any legacy callers
function blip(freq, dur, type) { tone(freq, dur, type, 0.16, 0.01); }

function clink() {
  // JUICE-01: leaded-glass turn cue — a short bright metallic clink + body.
  if (!audioReady) return;
  tone(1320, 0.05, "square", 0.06, 0.002);
  tone(740, 0.09, "triangle", 0.05, 0.004);
}

// STYLE-05: rising choir swell at saint ignition — stacked vowel-ish voices.
function choirSwell() {
  if (!audioReady) return;
  const root = 392; // G4
  [1, 1.25, 1.5, 2].forEach((mult, i) => { // major triad + octave
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const f = audioCtx.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 900 + i * 220; // formant-ish color
    f.Q.value = 4;
    o.type = "sawtooth";
    const t = audioCtx.currentTime + i * 0.04;
    o.frequency.setValueAtTime(root * mult * 0.985, t);
    o.frequency.exponentialRampToValueAtTime(root * mult, t + 0.35); // rises
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.07, t + 0.18);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
    o.connect(f).connect(g);
    routeVoice(g);
    o.start(t);
    o.stop(t + 1.4);
  });
}

// Hollow, descending tone for a sanctified-DARK saint (the absence is holy).
function shadowSwell() {
  if (!audioReady) return;
  [330, 247].forEach((base, i) => {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = "sine";
    const t = audioCtx.currentTime + i * 0.05;
    o.frequency.setValueAtTime(base, t);
    o.frequency.exponentialRampToValueAtTime(base * 0.5, t + 0.9); // falls into dark
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.09, t + 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    o.connect(g);
    routeVoice(g);
    o.start(t);
    o.stop(t + 1.7);
  });
}

// window-solved resolve
function chord() {
  if (!audioReady) return;
  [392, 494, 587, 784].forEach((f, i) =>
    setTimeout(() => tone(f, 1.6, "sine", 0.1, 0.03), i * 110)
  );
}

// ------------------------------------------------------------------ particle system (STYLE-03 / STYLE-06)
// Two populations:
//   motes[]      — dust drifting inside active beam volumes (STYLE-03)
//   particles[]  — transient bloom bursts at saint ignition (STYLE-06)
let motes = [];
let particles = [];

// Spawn a warm radiant burst from a saint cell (correct ignition).
function saintIgnite(cx, cy) {
  const c = cellCenter(cx, cy);
  for (let i = 0; i < 26; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 40 + Math.random() * 150;
    particles.push({
      x: c.x, y: c.y,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      life: 1, max: 0.7 + Math.random() * 0.6,
      r: 2 + Math.random() * 3,
      col: Math.random() < 0.5 ? "255,233,168" : "255,207,107",
      dark: false,
    });
  }
}

// Cool inward implosion for a sanctified-DARK saint (the absence).
function darkBloom(cx, cy) {
  const c = cellCenter(cx, cy);
  for (let i = 0; i < 22; i++) {
    const a = Math.random() * Math.PI * 2;
    const rad = 50 + Math.random() * 30;
    particles.push({
      x: c.x + Math.cos(a) * rad, y: c.y + Math.sin(a) * rad,
      vx: -Math.cos(a) * (60 + Math.random() * 60),
      vy: -Math.sin(a) * (60 + Math.random() * 60),
      life: 1, max: 0.8 + Math.random() * 0.5,
      r: 1.5 + Math.random() * 2.5,
      col: "120,90,200",
      dark: true,
    });
  }
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.94;
    p.vy *= 0.94;
    p.life -= dt / p.max;
    if (p.life <= 0) particles.splice(i, 1);
  }

  // Keep a pool of dust motes alive scaled to how much beam exists.
  const want = Math.min(70, segments.length * 5);
  while (motes.length < want) {
    motes.push({
      seg: Math.floor(Math.random() * Math.max(1, segments.length)),
      t: Math.random(),     // position along the segment 0..1
      off: (Math.random() - 0.5), // lateral offset within beam width
      drift: 0.04 + Math.random() * 0.08,
      wob: Math.random() * Math.PI * 2,
      r: 0.8 + Math.random() * 1.6,
      a: 0.25 + Math.random() * 0.5,
    });
  }
  while (motes.length > want) motes.pop();
  for (const m of motes) {
    m.t += m.drift * dt;
    if (m.t > 1) { m.t -= 1; m.seg = Math.floor(Math.random() * Math.max(1, segments.length)); }
    m.wob += dt * 1.5;
    if (m.seg >= segments.length) m.seg = Math.floor(Math.random() * Math.max(1, segments.length));
  }
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

// ONBOARD-04: localStorage persistence — furthest window reached AND per-window
// solved status. Stored as one JSON blob; tolerant of old/missing/corrupt data.
const LS_KEY = "sgs_progress_v2";
const LS_KEY_OLD = "sgs_progress_v1";
let progress = { furthest: 0, solved: [] };

function loadProgressBlob() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      const furthest = Math.max(0, Math.min(LEVELS.length - 1, p.furthest | 0));
      const solved = Array.isArray(p.solved) ? p.solved.slice(0, LEVELS.length).map(Boolean) : [];
      while (solved.length < LEVELS.length) solved.push(false);
      progress = { furthest, solved };
      return;
    }
    // migrate the old furthest-only integer key if present
    const n = parseInt(localStorage.getItem(LS_KEY_OLD), 10);
    if (!isNaN(n)) {
      progress = { furthest: Math.max(0, Math.min(LEVELS.length - 1, n)), solved: [] };
    }
  } catch (e) {}
  while (progress.solved.length < LEVELS.length) progress.solved.push(false);
}
function saveProgressBlob() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(progress)); } catch (e) {}
}
function loadProgress() { return progress.furthest; }
function saveProgress(n) {
  progress.furthest = Math.max(progress.furthest, Math.max(0, Math.min(LEVELS.length - 1, n)));
  saveProgressBlob();
}
function markSolved(i) {
  if (i >= 0 && i < progress.solved.length) { progress.solved[i] = true; saveProgressBlob(); }
}
function solvedCount() { return progress.solved.filter(Boolean).length; }
loadProgressBlob();

function startCampaign() {
  levelIndex = loadProgress();
  if (levelIndex >= LEVELS.length) levelIndex = 0;
  loadLevel(levelIndex);
  state = STATE.PLAY;
  startDrone();
  setDroneClouded(clouded);
}

// Jump straight to a specific (unlocked) window from the title level-select.
function startWindow(i) {
  if (i < 0 || i > progress.furthest || i >= LEVELS.length) return;
  levelIndex = i;
  loadLevel(levelIndex);
  state = STATE.PLAY;
  startDrone();
  setDroneClouded(clouded);
}

function advanceWindow() {
  const next = levelIndex + 1;
  saveProgress(Math.min(next, LEVELS.length - 1));
  if (next >= LEVELS.length) {
    state = STATE.CAMPAIGN_COMPLETE;
    stopDrone();
  } else {
    levelIndex = next;
    loadLevel(levelIndex);
    state = STATE.PLAY;
    setDroneClouded(clouded);
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
    // Level-select: a chip per unlocked window lets the player resume anywhere.
    const hit = pickTitleChip(px, py);
    if (hit != null) { startWindow(hit); return; }
    startCampaign(); // any other click = Begin / Continue at furthest
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
    startDrone();
    setDroneClouded(clouded);
    return;
  }

  if (state === STATE.PLAY) {
    // restart-window control: top-right corner zone
    const c = pixelToCell(px, py);
    if (!c) return;
    const t = grid[c.y][c.x];
    if (t && (t.type === "mirror" || t.type === "prism") && !t.fixed) {
      t.orientation = (t.orientation + 1) % 4; // CORE-02
      t.spin = 1; // JUICE-01: animated quarter-turn snap (decays in update)
      clink();
      clinkFlash = 1;          // JUICE-01: a quick pop on the turned tile
      lastTurned = { x: c.x, y: c.y };
      retrace(); // CORE-06: live re-trace on rotation
      hintArmed = false;       // player has acted; retire the first-window pointer
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
      startDrone(); setDroneClouded(clouded);
    }
  }
  if (e.key === "r" || e.key === "R") {
    if (state === STATE.PLAY) loadLevel(levelIndex); // restart window
  }
  if (e.key === "Escape" || e.key === "t" || e.key === "T") {
    // back to title / level-select (drone keeps the mood, progress is saved)
    if (state === STATE.PLAY || state === STATE.WINDOW_COMPLETE) state = STATE.TITLE;
  }
}

canvas.addEventListener("pointerdown", onPointerDown);
window.addEventListener("keydown", onKeyDown);

// ------------------------------------------------------------------ update
let lastTurned = null;  // {x,y} cell of the most recently rotated tile
let hintArmed = true;   // ONBOARD-02: show the first-window pointer until the player turns a tile

function update(dt) {
  for (const s of saints) {
    if (s.bloom > 0) s.bloom = Math.max(0, s.bloom - dt * 1.6);
  }
  // decay juice timers
  if (solveFlash > 0) solveFlash = Math.max(0, solveFlash - dt * 1.4);
  if (shake > 0) shake = Math.max(0, shake - dt * 22);
  if (clinkFlash > 0) clinkFlash = Math.max(0, clinkFlash - dt * 4);
  for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
    const t = grid[y][x];
    if (t && t.spin > 0) t.spin = Math.max(0, t.spin - dt * 6); // JUICE-01 snap
  }
  if (state === STATE.PLAY || state === STATE.WINDOW_COMPLETE) updateParticles(dt);
  if (state === STATE.PLAY && windowSolved()) {
    solveHoldTimer += dt;
    if (solveCelebrate > 0) solveCelebrate = Math.max(0, solveCelebrate - dt * 0.8);
    if (solveHoldTimer > 1.2) {
      solveHoldTimer = 0;
      state = STATE.WINDOW_COMPLETE;
      heresyRevealT = 0; // animate the heresy in
    }
  } else {
    solveHoldTimer = 0;
  }
  if (state === STATE.WINDOW_COMPLETE) heresyRevealT += dt;
}
let heresyRevealT = 0;

// ------------------------------------------------------------------ render
function draw(time) {
  ctx.clearRect(0, 0, VW, VH);
  // backdrop
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, VW, VH);

  if (state === STATE.TITLE) { drawTitle(time); return; }
  if (state === STATE.CAMPAIGN_COMPLETE) { drawCampaignComplete(time); return; }

  layoutBoard();

  // JUICE-02: a brief joyful screen-shake on solve.
  ctx.save();
  if (shake > 0) {
    const a = shake;
    ctx.translate((Math.random() - 0.5) * a, (Math.random() - 0.5) * a);
  }

  drawHeader();
  drawBoard();
  drawBeams(time);
  drawSaints(time);
  drawTiles();
  if (clouded) drawCloudOverlay(time); // TWIST-03: obvious before any rotation
  drawFooter();
  ctx.restore();

  // JUICE-02: a warm full-window flash blooming at the moment of solve.
  if (solveFlash > 0) {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const g = ctx.createRadialGradient(VW / 2, VH / 2, 0, VW / 2, VH / 2, VW * 0.75);
    g.addColorStop(0, "rgba(255,236,180," + (0.28 * solveFlash) + ")");
    g.addColorStop(1, "rgba(255,210,120,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, VW, VH);
    ctx.restore();
  }

  if (state === STATE.WINDOW_COMPLETE) drawWindowComplete(time);
  if (DEBUG) drawDebug();
}

// TWIST-03: a cool, dim veil over the window communicates the shrunken budget.
function drawCloudOverlay(time) {
  ctx.save();
  ctx.globalCompositeOperation = "source-over";
  // cool desaturating wash
  ctx.fillStyle = "rgba(30,40,70,0.32)";
  ctx.fillRect(0, 0, VW, VH);
  // slow drifting cloud bands across the top
  ctx.globalAlpha = 0.18;
  ctx.fillStyle = "#7a86a8";
  for (let i = 0; i < 4; i++) {
    const w = VW * 0.6;
    const x = ((time / 90 + i * 280) % (VW + w)) - w;
    const y = 60 + i * 34;
    ctx.beginPath();
    ctx.ellipse(x, y, w * 0.5, 26, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawHeader() {
  const lv = LEVELS[levelIndex];
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.amber;
  ctx.font = "700 30px Georgia, 'Times New Roman', serif";
  ctx.fillText(lv.name, VW / 2, 46);
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 15px Segoe UI, system-ui, sans-serif";
  ctx.fillText(lv.hint, VW / 2, 72);

  // twist badges
  if (clouded) drawBadge("☁ CLOUDED — light is scarce", "rgba(120,140,190,0.9)", "rgba(40,52,82,0.6)");
  else if (isShadowWindow) drawBadge("☾ SHADOW — absence is holy", "rgba(180,160,255,0.95)", "rgba(40,30,72,0.6)");
}

function drawBadge(text, fg, bg) {
  ctx.font = "700 13px Segoe UI, sans-serif";
  const w = ctx.measureText(text).width + 28;
  const x = VW / 2 - w / 2, y = 80;
  ctx.fillStyle = bg;
  roundRect(x, y, w, 22, 11); ctx.fill();
  ctx.strokeStyle = fg; ctx.lineWidth = 1; roundRect(x, y, w, 22, 11); ctx.stroke();
  ctx.fillStyle = fg;
  ctx.textAlign = "center";
  ctx.fillText(text, VW / 2, y + 15);
}

function drawFooter() {
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 13px Segoe UI, system-ui, sans-serif";
  ctx.fillText(
    "Click glass to rotate  ·  R restart  ·  Esc menu  ·  Window " +
      (levelIndex + 1) + " / " + LEVELS.length,
    VW / 2, VH - 26
  );
}

function drawBoard() {
  const ox = BOARD.x - 14, oy = BOARD.y - 14;
  const ow = BOARD.w + 28, oh = BOARD.h + 28;

  // Carved stone / lead frame around the whole window (Gothic surround).
  const frame = ctx.createLinearGradient(ox, oy, ox, oy + oh);
  frame.addColorStop(0, "#2a2238");
  frame.addColorStop(0.5, "#171022");
  frame.addColorStop(1, "#0c0814");
  ctx.fillStyle = frame;
  roundRect(ox, oy, ow, oh, 16); ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(255,207,107,0.18)";
  roundRect(ox, oy, ow, oh, 16); ctx.stroke();

  // dark leaded matrix the panes sit in
  ctx.fillStyle = COLORS.leading;
  roundRect(BOARD.x - 4, BOARD.y - 4, BOARD.w + 8, BOARD.h + 8, 6); ctx.fill();

  // empty cells: deep textured glass with subtle mottling so it never reads flat
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const t = grid[y][x];
      if (t.type !== "empty") continue;
      const r = cellRect(x, y);
      drawEmptyGlass(r, x, y);
    }
  }

  // leading grid lines (thick black cames between cells) — STYLE-01 read
  ctx.strokeStyle = "rgba(0,0,0,0.55)";
  ctx.lineWidth = Math.max(3, BOARD.cell * 0.07);
  ctx.lineCap = "round";
  for (let x = 0; x <= COLS; x++) {
    const px = BOARD.x + x * BOARD.cell;
    ctx.beginPath(); ctx.moveTo(px, BOARD.y); ctx.lineTo(px, BOARD.y + BOARD.h); ctx.stroke();
  }
  for (let y = 0; y <= ROWS; y++) {
    const py = BOARD.y + y * BOARD.cell;
    ctx.beginPath(); ctx.moveTo(BOARD.x, py); ctx.lineTo(BOARD.x + BOARD.w, py); ctx.stroke();
  }
  // bright came highlight (the rounded solder bead)
  ctx.strokeStyle = "rgba(150,140,190,0.16)";
  ctx.lineWidth = Math.max(1, BOARD.cell * 0.02);
  for (let x = 0; x <= COLS; x++) {
    const px = BOARD.x + x * BOARD.cell;
    ctx.beginPath(); ctx.moveTo(px, BOARD.y); ctx.lineTo(px, BOARD.y + BOARD.h); ctx.stroke();
  }

  // The sun entering the edge — a radiant disc with rays, dimmed when clouded.
  drawSun();
}

function drawEmptyGlass(r, gx, gy) {
  const seed = (gx * 7 + gy * 13);
  const g = ctx.createRadialGradient(
    r.x + r.s * 0.4, r.y + r.s * 0.35, 1,
    r.x + r.s * 0.5, r.y + r.s * 0.5, r.s * 0.8);
  const a = clouded ? 0.5 : 1;
  g.addColorStop(0, "rgba(40,28,66," + (0.9 * a) + ")");
  g.addColorStop(1, "rgba(16,11,28," + (0.95) + ")");
  ctx.fillStyle = g;
  ctx.fillRect(r.x + 1, r.y + 1, r.s - 2, r.s - 2);
  // faint diagonal streak — hand-blown glass texture
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = "#b9a8e0";
  ctx.lineWidth = 1;
  for (let i = 0; i < 3; i++) {
    const o = ((seed * 11 + i * 23) % r.s);
    ctx.beginPath();
    ctx.moveTo(r.x + o, r.y);
    ctx.lineTo(r.x, r.y + o);
    ctx.stroke();
  }
  ctx.restore();
}

function drawSun() {
  const sc = cellCenter(source.x, source.y);
  const d = DIRS[source.dir];
  const sx = sc.x - d.x * BOARD.cell * 0.62;
  const sy = sc.y - d.y * BOARD.cell * 0.62;
  const t = performance.now();
  ctx.save();
  const intensity = clouded ? 0.45 : 1;
  const baseR = BOARD.cell * (clouded ? 0.34 : 0.42);
  // outer glow
  const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, baseR * 2.4);
  const warm = clouded ? "120,130,170" : "255,234,170";
  glow.addColorStop(0, "rgba(" + warm + "," + (0.85 * intensity) + ")");
  glow.addColorStop(1, "rgba(" + warm + ",0)");
  ctx.fillStyle = glow;
  ctx.beginPath(); ctx.arc(sx, sy, baseR * 2.4, 0, Math.PI * 2); ctx.fill();
  // rays
  if (!clouded) {
    ctx.strokeStyle = "rgba(255,234,170,0.5)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + t / 4000;
      const r0 = baseR * 1.1, r1 = baseR * (1.5 + 0.2 * Math.sin(t / 500 + i));
      ctx.beginPath();
      ctx.moveTo(sx + Math.cos(a) * r0, sy + Math.sin(a) * r0);
      ctx.lineTo(sx + Math.cos(a) * r1, sy + Math.sin(a) * r1);
      ctx.stroke();
    }
  }
  // core disc
  ctx.fillStyle = clouded ? "rgba(180,190,220,0.85)" : COLORS.sun;
  ctx.beginPath(); ctx.arc(sx, sy, baseR * 0.55, 0, Math.PI * 2); ctx.fill();
  // clouded: drifting veil over the sun
  if (clouded) {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "rgba(40,44,62,0.9)";
    for (let i = 0; i < 3; i++) {
      const cx = sx - baseR + ((t / 60 + i * 60) % (baseR * 3)) - baseR;
      ctx.beginPath();
      ctx.ellipse(cx, sy + (i - 1) * baseR * 0.3, baseR * 0.9, baseR * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawBeams(time) {
  const half = BOARD.cell / 2;

  // (a) Volumetric AIR TINT: each beam cell washes its color across the cell so
  // the beam "tints the air it passes through" (STYLE-02). Additive blend.
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  for (const seg of segments) {
    const info = HUE_TABLE[hueKey(seg.color)] || { rgb: [136,136,136] };
    if (hueKey(seg.color) === "0,0,0") continue;
    const c = cellCenter(seg.x, seg.y);
    const r = cellRect(seg.x, seg.y);
    const [R, G, B] = info.rgb;
    const dim = seg.dim ? 0.45 : 1;
    const wash = ctx.createRadialGradient(c.x, c.y, 1, c.x, c.y, r.s * 0.75);
    wash.addColorStop(0, "rgba(" + R + "," + G + "," + B + "," + (0.16 * dim) + ")");
    wash.addColorStop(1, "rgba(" + R + "," + G + "," + B + ",0)");
    ctx.fillStyle = wash;
    ctx.fillRect(r.x, r.y, r.s, r.s);
  }
  ctx.restore();

  // (b) BANDED BEAM CORE: a wide soft halo, a mid band, and a crisp bright core,
  // each tinted to the surviving hue, drawn with additive blend for true light.
  const passes = [
    { w: 0.46, a: 0.16, blend: "lighter" }, // wide halo
    { w: 0.24, a: 0.32, blend: "lighter" }, // mid band
    { w: 0.10, a: 0.85, blend: "lighter" }, // bright core
    { w: 0.03, a: 1.00, blend: "source-over", white: true }, // hot white center line
  ];
  for (const pass of passes) {
    ctx.save();
    ctx.globalCompositeOperation = pass.blend;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const seg of segments) {
      const info = HUE_TABLE[hueKey(seg.color)] || { rgb: [136,136,136] };
      const isBlack = hueKey(seg.color) === "0,0,0";
      const c = cellCenter(seg.x, seg.y);
      const inD = DIRS[seg.inDir];
      const outD = DIRS[seg.dir];
      const [R, G, B] = info.rgb;
      const dim = seg.dim ? 0.5 : 1;
      let a = pass.a * dim;
      if (isBlack) a = pass.white ? 0 : a * 0.18;
      if (a <= 0) continue;
      if (pass.white) {
        // hot near-white core gives beams that "banded glass light" glint
        ctx.strokeStyle = "rgba(255,253,245," + a + ")";
      } else {
        ctx.strokeStyle = "rgba(" + R + "," + G + "," + B + "," + a + ")";
      }
      ctx.lineWidth = Math.max(1, BOARD.cell * pass.w);
      ctx.beginPath();
      ctx.moveTo(c.x - inD.x * half, c.y - inD.y * half);
      ctx.lineTo(c.x, c.y);
      ctx.lineTo(c.x + outD.x * half, c.y + outD.y * half);
      ctx.stroke();
    }
    ctx.restore();
  }

  // (c) DUST MOTES drifting inside the beam volume (STYLE-03).
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  for (const m of motes) {
    if (m.seg >= segments.length) continue;
    const seg = segments[m.seg];
    const info = HUE_TABLE[hueKey(seg.color)] || { rgb: [220,220,220] };
    if (hueKey(seg.color) === "0,0,0") continue;
    const c = cellCenter(seg.x, seg.y);
    const inD = DIRS[seg.inDir];
    const outD = DIRS[seg.dir];
    // path point: lerp entry->center->exit by m.t
    let px, py;
    if (m.t < 0.5) {
      const u = m.t * 2;
      px = (c.x - inD.x * half) + (c.x - (c.x - inD.x * half)) * u;
      py = (c.y - inD.y * half) + (c.y - (c.y - inD.y * half)) * u;
    } else {
      const u = (m.t - 0.5) * 2;
      px = c.x + (outD.x * half) * u;
      py = c.y + (outD.y * half) * u;
    }
    // lateral wobble across the beam width
    const lat = Math.sin(m.wob) * (BOARD.cell * 0.12) * m.off;
    px += outD.y * lat; py += outD.x * lat; // perpendicular-ish
    const [R, G, B] = info.rgb;
    const dim = seg.dim ? 0.5 : 1;
    ctx.fillStyle = "rgba(" + Math.min(255,R+40) + "," + Math.min(255,G+40) + "," + Math.min(255,B+40) + "," + (m.a * dim) + ")";
    ctx.beginPath();
    ctx.arc(px, py, m.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawTiles() {
  const time = performance.now();
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const t = grid[y][x];
      if (t.type === "empty") continue;
      const r = cellRect(x, y);
      const cx = r.x + r.s / 2, cy = r.y + r.s / 2;
      const m = r.s * 0.34;
      const lead = Math.max(3, r.s * 0.07);

      // JUICE-01: animate the quarter-turn snap (spin eases 1 -> 0 after a click).
      const spinning = t.spin > 0 && (t.type === "mirror" || t.type === "prism");
      ctx.save();
      if (spinning) {
        const ease = t.spin * t.spin; // ease-out so it settles crisply
        ctx.translate(cx, cy);
        ctx.rotate(-ease * (Math.PI / 2));
        ctx.translate(-cx, -cy);
      }

      if (t.type === "mirror") {
        const slash = t.orientation % 2 === 0;
        // polished glass diagonal — lead backing + bright silver face + sheen
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgba(0,0,0,0.7)";
        ctx.lineWidth = lead + 5;
        strokeDiag(cx, cy, m, slash);
        const grad = ctx.createLinearGradient(cx - m, cy - m, cx + m, cy + m);
        grad.addColorStop(0, "#eef3ff");
        grad.addColorStop(0.5, "#9fb0d8");
        grad.addColorStop(1, "#eef3ff");
        ctx.strokeStyle = grad;
        ctx.lineWidth = lead + 1;
        strokeDiag(cx, cy, m, slash);
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = Math.max(1, lead * 0.3);
        strokeDiag(cx, cy, m * 0.9, slash);

      } else if (t.type === "prism") {
        // faceted crystal triangle that throws a faint rainbow
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy - m);
        ctx.lineTo(cx + m, cy + m);
        ctx.lineTo(cx - m, cy + m);
        ctx.closePath();
        const pg = ctx.createLinearGradient(cx - m, cy - m, cx + m, cy + m);
        pg.addColorStop(0, "rgba(255,120,160,0.85)");
        pg.addColorStop(0.33, "rgba(140,220,255,0.85)");
        pg.addColorStop(0.66, "rgba(180,255,170,0.85)");
        pg.addColorStop(1, "rgba(255,235,140,0.85)");
        ctx.fillStyle = pg;
        ctx.fill();
        ctx.lineWidth = lead;
        ctx.strokeStyle = "rgba(0,0,0,0.6)";
        ctx.stroke();
        // inner facet line
        ctx.strokeStyle = "rgba(255,255,255,0.6)";
        ctx.lineWidth = Math.max(1, lead * 0.3);
        ctx.beginPath();
        ctx.moveTo(cx, cy - m); ctx.lineTo(cx, cy + m);
        ctx.stroke();
        ctx.restore();

      } else if (t.type === "pane") {
        drawGlassPane(r, t.pane);
        // engraved absorption label
        ctx.fillStyle = "rgba(8,5,14,0.7)";
        ctx.font = "800 " + Math.round(r.s * 0.16) + "px Georgia, serif";
        ctx.textAlign = "center";
        const lbl = { cyan: "−R", magenta: "−G", yellow: "−B" }[t.pane] || "";
        ctx.fillText(lbl, cx + 1, cy + r.s * 0.06 + 1);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText(lbl, cx, cy + r.s * 0.06);
      }

      ctx.restore(); // close the spin transform

      // Overlays that must NOT spin with the tile: the "rotates" hint ring and
      // the per-rotation clink pop. Drawn in stable cell space.
      if (!t.fixed && (t.type === "mirror" || t.type === "prism")) {
        ringHint(cx, cy, r.s, time);
      }
      if (clinkFlash > 0 && lastTurned && lastTurned.x === x && lastTurned.y === y) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        const cf = ctx.createRadialGradient(cx, cy, 0, cx, cy, r.s * 0.6);
        cf.addColorStop(0, "rgba(255,255,255," + (0.5 * clinkFlash) + ")");
        cf.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = cf;
        ctx.fillRect(r.x, r.y, r.s, r.s);
        ctx.restore();
      }
    }
  }

  // ONBOARD-02: a wordless animated pointer on the first window's rotatable tile,
  // retired the instant the player rotates anything. Teaches "click to turn".
  if (hintArmed && state === STATE.PLAY) {
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
      const t = grid[y][x];
      if (t && (t.type === "mirror" || t.type === "prism") && !t.fixed) {
        drawTapPointer(cellRect(x, y), time);
      }
    }
  }
}

// A pulsing hand/tap pointer that bobs toward a tile — the no-manual cue.
function drawTapPointer(r, time) {
  const cx = r.x + r.s / 2, cy = r.y + r.s / 2;
  const bob = Math.sin(time / 320) * r.s * 0.06;
  const px = cx + r.s * 0.34, py = cy + r.s * 0.34 + bob;
  ctx.save();
  // ring ping
  const ping = (time % 1200) / 1200;
  ctx.strokeStyle = "rgba(255,207,107," + (0.6 * (1 - ping)) + ")";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r.s * 0.3 + ping * r.s * 0.3, 0, Math.PI * 2);
  ctx.stroke();
  // little "click here" label
  ctx.fillStyle = "rgba(255,207,107,0.92)";
  ctx.font = "700 " + Math.round(r.s * 0.13) + "px Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("tap to turn", cx, r.y - r.s * 0.12);
  // a simple pointer glyph (teardrop + dot)
  ctx.fillStyle = "rgba(255,247,224,0.95)";
  ctx.strokeStyle = "rgba(40,30,10,0.6)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(px + r.s * 0.12, py + r.s * 0.04);
  ctx.lineTo(px + r.s * 0.05, py + r.s * 0.1);
  ctx.lineTo(px + r.s * 0.09, py + r.s * 0.2);
  ctx.lineTo(px + r.s * 0.04, py + r.s * 0.22);
  ctx.lineTo(px, py + r.s * 0.1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function strokeDiag(cx, cy, m, slash) {
  ctx.beginPath();
  if (slash) { ctx.moveTo(cx - m, cy + m); ctx.lineTo(cx + m, cy - m); }
  else { ctx.moveTo(cx - m, cy - m); ctx.lineTo(cx + m, cy + m); }
  ctx.stroke();
}

// A jewel-tone leaded pane: thick black came, glowing-from-within fill,
// hand-blown mottle, and a glassy top-left sheen. (STYLE-01)
function drawGlassPane(r, kind) {
  const inset = Math.max(5, r.s * 0.09);
  const x = r.x + inset, y = r.y + inset, w = r.s - inset * 2, h = r.s - inset * 2;
  const cx = x + w / 2, cy = y + h / 2;
  const base = COLORS[kind] || "#888";
  const rgb = HUE_TABLE[hueKey(PANE_TINT_HUE[kind] || {r:1,g:1,b:1})];

  // thick black leading came
  ctx.fillStyle = "rgba(0,0,0,0.85)";
  roundRect(x - 4, y - 4, w + 8, h + 8, 8); ctx.fill();

  // glowing jewel fill (radial, lighter at center = "glows from within")
  const g = ctx.createRadialGradient(cx, cy - h * 0.1, 2, cx, cy, w * 0.75);
  g.addColorStop(0, lighten(base, 0.35));
  g.addColorStop(0.6, base);
  g.addColorStop(1, darken(base, 0.4));
  ctx.fillStyle = g;
  ctx.globalAlpha = clouded ? 0.7 : 0.92;
  roundRect(x, y, w, h, 6); ctx.fill();
  ctx.globalAlpha = 1;

  // hand-blown mottle streaks
  ctx.save();
  ctx.beginPath(); roundRect(x, y, w, h, 6); ctx.clip();
  ctx.globalAlpha = 0.12;
  ctx.strokeStyle = lighten(base, 0.5);
  ctx.lineWidth = 2;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y + (i + 0.3) * h / 4);
    ctx.bezierCurveTo(x + w * 0.3, y + i * h / 4, x + w * 0.7, y + (i + 0.7) * h / 4, x + w, y + (i + 0.4) * h / 4);
    ctx.stroke();
  }
  ctx.restore();

  // glassy specular sheen, top-left
  ctx.save();
  ctx.beginPath(); roundRect(x, y, w, h, 6); ctx.clip();
  const sh = ctx.createLinearGradient(x, y, x + w * 0.6, y + h * 0.6);
  sh.addColorStop(0, "rgba(255,255,255,0.4)");
  sh.addColorStop(0.4, "rgba(255,255,255,0)");
  ctx.fillStyle = sh;
  ctx.fillRect(x, y, w, h);
  ctx.restore();

  // bright came highlight
  ctx.strokeStyle = "rgba(120,110,160,0.4)";
  ctx.lineWidth = 1.5;
  roundRect(x, y, w, h, 6); ctx.stroke();
}

// pane -> the hue it lets through (for tint reference)
const PANE_TINT_HUE = {
  cyan: { r: 0, g: 1, b: 1 },
  magenta: { r: 1, g: 0, b: 1 },
  yellow: { r: 1, g: 1, b: 0 },
};

// color helpers
function hexToRgb(h) {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function lighten(h, amt) {
  const [r, g, b] = hexToRgb(h);
  return "rgb(" + Math.min(255, r + 255 * amt) + "," + Math.min(255, g + 255 * amt) + "," + Math.min(255, b + 255 * amt) + ")";
}
function darken(h, amt) {
  const [r, g, b] = hexToRgb(h);
  return "rgb(" + Math.max(0, r * (1 - amt)) + "," + Math.max(0, g * (1 - amt)) + "," + Math.max(0, b * (1 - amt)) + ")";
}

function ringHint(cx, cy, s, time) {
  const pulse = 0.5 + 0.5 * Math.sin((time || 0) / 500);
  ctx.strokeStyle = "rgba(255,207,107," + (0.3 + 0.25 * pulse) + ")";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, s * 0.44, -0.5, Math.PI * 1.3);
  ctx.stroke();
  // little arrowhead to say "rotates"
  ctx.beginPath();
  ctx.moveTo(cx + s * 0.44, cy - 2);
  ctx.lineTo(cx + s * 0.44 - 6, cy - 8);
  ctx.moveTo(cx + s * 0.44, cy - 2);
  ctx.lineTo(cx + s * 0.44 + 6, cy - 8);
  ctx.stroke();
}

function drawSaints(time) {
  for (const s of saints) {
    const c = cellCenter(s.x, s.y);
    const r = cellRect(s.x, s.y);
    const rad = r.s * 0.36;
    if (s.shadow) { drawShadowSaint(s, c, r, rad, time); continue; }

    const needInfo = HUE_TABLE[hueKey(s.need)] || { css: "#888", name: "?", rgb: [136,136,136] };
    const [R, G, B] = needInfo.rgb;

    // radiant bloom on ignition (STYLE-04) — warm glow + breathing halo
    if (s.ignited) {
      const pulse = 0.5 + 0.5 * Math.sin(time / 280);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const gr = r.s * (1.1 + s.bloom * 0.8);
      const glow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, gr);
      glow.addColorStop(0, "rgba(255,235,180," + (0.5 + s.bloom * 0.4) + ")");
      glow.addColorStop(0.4, "rgba(" + R + "," + G + "," + B + "," + (0.3 + s.bloom * 0.3) + ")");
      glow.addColorStop(1, "rgba(255,233,168,0)");
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(c.x, c.y, gr, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      // golden halo ring above the head
      ctx.save();
      ctx.strokeStyle = "rgba(255,223,140," + (0.6 + 0.3 * pulse) + ")";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(c.x, c.y - rad * 0.7, rad * 0.42, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // leaded niche: a pointed-arch frame (Gothic) holding the figure
    drawNiche(c, r, rad, needInfo.css, s.ignited);

    // stained-glass saint figure, robe colored by the NEEDED hue (goal clarity)
    drawSaintFigure(c, rad, needInfo.css, s.ignited);

    // needed-hue label under the cell (JUICE-03)
    ctx.fillStyle = s.ignited ? COLORS.ignited : COLORS.muted;
    ctx.font = "700 " + Math.round(r.s * 0.11) + "px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText((s.ignited ? "✦ " : "needs ") + needInfo.name, c.x, r.y + r.s + r.s * 0.16);
  }

  // ignition / dark-bloom particles on top of saints (STYLE-06)
  drawParticles();
}

// Pointed-arch leaded niche behind a saint.
function drawNiche(c, r, rad, hueCss, lit) {
  const w = rad * 2.0, h = rad * 2.2;
  const x = c.x - w / 2, top = c.y - h * 0.58;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x, top + h * 0.4);
  ctx.lineTo(x, top + h);
  ctx.lineTo(x + w, top + h);
  ctx.lineTo(x + w, top + h * 0.4);
  ctx.quadraticCurveTo(x + w, top, c.x, top); // arch
  ctx.quadraticCurveTo(x, top, x, top + h * 0.4);
  ctx.closePath();
  // glowing back-glass
  const g = ctx.createLinearGradient(0, top, 0, top + h);
  g.addColorStop(0, lit ? lighten("#1a1330", 0.1) : "#120c22");
  g.addColorStop(1, "#0a0714");
  ctx.fillStyle = g;
  ctx.fill();
  ctx.lineWidth = Math.max(3, rad * 0.18);
  ctx.strokeStyle = "rgba(0,0,0,0.8)";
  ctx.stroke();
  ctx.strokeStyle = lit ? "rgba(255,223,140,0.6)" : "rgba(120,110,160,0.4)";
  ctx.lineWidth = Math.max(1, rad * 0.05);
  ctx.stroke();
  ctx.restore();
}

// A simple but readable robed saint figure rendered in colored glass.
function drawSaintFigure(c, rad, hueCss, lit) {
  ctx.save();
  ctx.globalAlpha = lit ? 1 : 0.8;
  // robe (body) — triangle/bell silhouette
  const robe = ctx.createLinearGradient(0, c.y - rad, 0, c.y + rad);
  robe.addColorStop(0, lighten(hueCss, lit ? 0.3 : 0.1));
  robe.addColorStop(1, darken(hueCss, 0.35));
  ctx.fillStyle = robe;
  ctx.beginPath();
  ctx.moveTo(c.x, c.y - rad * 0.25);
  ctx.lineTo(c.x + rad * 0.55, c.y + rad * 0.7);
  ctx.lineTo(c.x - rad * 0.55, c.y + rad * 0.7);
  ctx.closePath();
  ctx.fill();
  ctx.lineWidth = Math.max(1.5, rad * 0.07);
  ctx.strokeStyle = "rgba(0,0,0,0.6)";
  ctx.stroke();
  // head
  ctx.fillStyle = lit ? "#ffe9c4" : "#c9bfae";
  ctx.beginPath();
  ctx.arc(c.x, c.y - rad * 0.42, rad * 0.26, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(0,0,0,0.55)";
  ctx.stroke();
  ctx.restore();
}

// TWIST-05: a shadow saint is signposted as wanting DARKNESS. It shows a void
// niche with a crescent/eclipse marking and an "keep DARK" label, and when
// satisfied it gets a cool inward halo rather than warm light.
function drawShadowSaint(s, c, r, rad, time) {
  const lit = s.ignited; // sanctified-dark
  // pulsing void aura so the inverted target is unmistakable
  const pulse = 0.5 + 0.5 * Math.sin(time / 360);
  ctx.save();
  if (lit) {
    // sanctified darkness: cool indigo inward glow
    ctx.globalCompositeOperation = "lighter";
    const gr = r.s * (0.9 + s.bloom * 0.5);
    const glow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, gr);
    glow.addColorStop(0, "rgba(120,90,210," + (0.35 + s.bloom * 0.3) + ")");
    glow.addColorStop(1, "rgba(120,90,210,0)");
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(c.x, c.y, gr, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();

  drawNiche(c, r, rad, "#1a1330", lit);

  // the void disc (the saint is an absence)
  ctx.save();
  const vg = ctx.createRadialGradient(c.x, c.y, 1, c.x, c.y, rad);
  vg.addColorStop(0, "#060410");
  vg.addColorStop(1, lit ? "#231a44" : "#0e0a1c");
  ctx.fillStyle = vg;
  ctx.beginPath();
  ctx.arc(c.x, c.y, rad * 0.7, 0, Math.PI * 2);
  ctx.fill();
  // dashed warning ring — "absence is the goal"
  ctx.setLineDash([6, 6]);
  ctx.lineDashOffset = -time / 60;
  ctx.strokeStyle = lit
    ? "rgba(150,120,240,0.9)"
    : "rgba(180,160,255," + (0.4 + 0.4 * pulse) + ")";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(c.x, c.y, rad * 0.82, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  // crescent / eclipse glyph
  ctx.fillStyle = lit ? "rgba(180,160,255,0.9)" : "rgba(150,135,200,0.7)";
  ctx.beginPath();
  ctx.arc(c.x, c.y, rad * 0.34, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = lit ? "#231a44" : "#0e0a1c";
  ctx.beginPath();
  ctx.arc(c.x + rad * 0.14, c.y - rad * 0.05, rad * 0.32, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // label
  ctx.fillStyle = lit ? "rgba(180,160,255,1)" : "rgba(170,150,220,0.9)";
  ctx.font = "700 " + Math.round(r.s * 0.11) + "px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText(lit ? "✦ HOLY DARK" : "keep DARK", c.x, r.y + r.s + r.s * 0.16);
}

function drawParticles() {
  ctx.save();
  for (const p of particles) {
    ctx.globalCompositeOperation = p.dark ? "source-over" : "lighter";
    ctx.fillStyle = "rgba(" + p.col + "," + Math.max(0, p.life) + ")";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * (0.6 + p.life * 0.6), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

// ------------------------------------------------------------------ overlays
// A spinning stained-glass rose window behind the title.
function drawRoseWindow(cx, cy, R, time) {
  ctx.save();
  const petals = 12;
  const jewels = [COLORS.red, COLORS.yellow, COLORS.green, COLORS.cyan, COLORS.blue, COLORS.magenta];
  // outer glow
  const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.3);
  halo.addColorStop(0, "rgba(255,234,170,0.18)");
  halo.addColorStop(1, "rgba(255,234,170,0)");
  ctx.fillStyle = halo;
  ctx.beginPath(); ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2); ctx.fill();
  // petals
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2 + time / 9000;
    const px = cx + Math.cos(a) * R * 0.55;
    const py = cy + Math.sin(a) * R * 0.55;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(a + Math.PI / 2);
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = jewels[i % jewels.length];
    ctx.beginPath();
    ctx.ellipse(0, 0, R * 0.16, R * 0.36, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = "rgba(0,0,0,0.7)"; ctx.stroke();
    ctx.restore();
  }
  // center boss
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = COLORS.amber;
  ctx.beginPath(); ctx.arc(cx, cy, R * 0.16, 0, Math.PI * 2); ctx.fill();
  ctx.lineWidth = 3; ctx.strokeStyle = "rgba(0,0,0,0.7)"; ctx.stroke();
  // leading rings
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 4; ctx.strokeStyle = "rgba(0,0,0,0.6)";
  ctx.beginPath(); ctx.arc(cx, cy, R * 0.36, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, R * 0.78, 0, Math.PI * 2); ctx.stroke();
  ctx.restore();
}

function drawTitle(time) {
  ctx.textAlign = "center";
  drawRoseWindow(VW / 2, VH * 0.30, VH * 0.20, time);
  // title
  ctx.save();
  ctx.shadowColor = "rgba(255,180,80,0.6)";
  ctx.shadowBlur = 24;
  ctx.fillStyle = COLORS.amber;
  ctx.font = "800 56px Georgia, 'Times New Roman', serif";
  ctx.fillText("STAINED GLASS", VW / 2, VH * 0.32);
  ctx.fillText("SAINT", VW / 2, VH * 0.32 + 60);
  ctx.restore();

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
  ctx.font = "400 17px Segoe UI, system-ui, sans-serif";
  ctx.fillText(
    "Rotate glass to route the sun through colored panes — color is SUBTRACTED.",
    VW / 2, VH * 0.66
  );
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 14px Segoe UI, sans-serif";
  ctx.fillText("Cyan removes red · Magenta removes green · Yellow removes blue", VW / 2, VH * 0.66 + 24);

  // ONBOARD-01 / ONBOARD-04: a level-select row showing solved/unlocked windows,
  // so returning players see their progress and can resume any window.
  drawTitleChips(time);

  const resuming = progress.furthest > 0 || solvedCount() > 0;
  const blink = 0.5 + 0.5 * Math.sin(time / 350);
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,207,107," + (0.5 + blink * 0.5) + ")";
  ctx.font = "700 22px Segoe UI, sans-serif";
  ctx.fillText(
    resuming ? "Click to continue · or pick a window below" : "Click or press Enter to begin",
    VW / 2, VH * 0.95
  );
}

// Level-select chips. Each unlocked window is a clickable jewel; locked windows
// are dim. Solved windows show a small flame. Layout is recomputed each draw and
// hit-tested by pickTitleChip().
let titleChips = [];
function drawTitleChips(time) {
  titleChips = [];
  const n = LEVELS.length;
  const perRow = 7;
  const cw = 56, ch = 40, gx = 10, gy = 12;
  const rows = Math.ceil(n / perRow);
  const totalW = perRow * cw + (perRow - 1) * gx;
  const startx = VW / 2 - totalW / 2;
  const starty = VH * 0.74;
  for (let i = 0; i < n; i++) {
    const row = Math.floor(i / perRow);
    const col = i % perRow;
    // center the last (possibly short) row
    const inRow = Math.min(perRow, n - row * perRow);
    const rowW = inRow * cw + (inRow - 1) * gx;
    const rx = VW / 2 - rowW / 2;
    const x = rx + col * (cw + gx);
    const y = starty + row * (ch + gy);
    const unlocked = i <= progress.furthest;
    const solved = !!progress.solved[i];
    titleChips.push({ i, x, y, w: cw, h: ch, unlocked });

    ctx.save();
    // chip body
    ctx.globalAlpha = unlocked ? 1 : 0.34;
    const g = ctx.createLinearGradient(x, y, x, y + ch);
    if (solved) { g.addColorStop(0, "#3a2e12"); g.addColorStop(1, "#1c1508"); }
    else { g.addColorStop(0, "#241a3a"); g.addColorStop(1, "#120c22"); }
    ctx.fillStyle = g;
    roundRect(x, y, cw, ch, 8); ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = solved ? "rgba(255,207,107,0.7)"
      : unlocked ? "rgba(150,135,210,0.6)" : "rgba(90,80,120,0.5)";
    roundRect(x, y, cw, ch, 8); ctx.stroke();
    // number
    ctx.fillStyle = solved ? COLORS.ignited : (unlocked ? COLORS.text : COLORS.muted);
    ctx.font = "700 16px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(roman(i + 1), x + cw / 2, y + ch / 2 + 2);
    // solved flame / locked glyph
    ctx.font = "12px Segoe UI, sans-serif";
    if (solved) { ctx.fillStyle = COLORS.amber; ctx.fillText("✦", x + cw - 10, y + 12); }
    else if (!unlocked) { ctx.fillStyle = COLORS.muted; ctx.fillText("🔒", x + cw - 11, y + 13); }
    ctx.restore();
  }
  // caption
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 12px Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(solvedCount() + " of " + n + " windows lit", VW / 2, starty + rows * (ch + gy) + 4);
}

function pickTitleChip(px, py) {
  for (const c of titleChips) {
    if (c.unlocked && px >= c.x && px <= c.x + c.w && py >= c.y && py <= c.y + c.h) return c.i;
  }
  return null;
}

// Tiny roman-numeral helper for chip labels (1..18 is plenty).
function roman(num) {
  const map = [[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  let s = "";
  for (const [v, sym] of map) { while (num >= v) { s += sym; num -= v; } }
  return s;
}

// TWIST-01: the heresy reveal. The lit saints' words assemble into a forbidden
// line, typed in slowly over the darkened, still-glowing window.
function drawWindowComplete(time) {
  ctx.save();
  const veil = Math.min(0.82, heresyRevealT * 0.9);
  ctx.fillStyle = "rgba(6,4,16," + veil + ")";
  ctx.fillRect(0, 0, VW, VH);
  ctx.textAlign = "center";

  // small antecedent
  const fade1 = Math.min(1, heresyRevealT * 1.5);
  ctx.fillStyle = "rgba(200,186,232," + (0.7 * fade1) + ")";
  ctx.font = "italic 400 18px Georgia, serif";
  ctx.fillText("The saints are lit. They speak —", VW / 2, VH * 0.34);

  // the heresy line, typewritten
  const line = heresyText || "…";
  const chars = Math.floor(Math.max(0, heresyRevealT - 0.5) * 26);
  const shown = line.slice(0, Math.min(line.length, chars));
  const done = chars >= line.length;
  ctx.fillStyle = COLORS.ignited;
  // wrap if long
  ctx.font = "700 34px Georgia, 'Times New Roman', serif";
  wrapText("“" + shown + (done ? "”" : ""), VW / 2, VH * 0.47, VW * 0.78, 44);

  // subtle blasphemy glow underline
  if (done) {
    ctx.strokeStyle = "rgba(255,90,84,0.35)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(VW * 0.2, VH * 0.55);
    ctx.lineTo(VW * 0.8, VH * 0.55);
    ctx.stroke();
  }

  if (done) {
    const blink = 0.5 + 0.5 * Math.sin(time / 350);
    ctx.fillStyle = "rgba(200,186,232," + (0.45 + blink * 0.4) + ")";
    ctx.font = "400 18px Segoe UI, sans-serif";
    ctx.fillText("Click or press Enter for the next window", VW / 2, VH * 0.7);
  }
  ctx.restore();
}

function wrapText(text, cx, y, maxW, lh) {
  const words = text.split(" ");
  let line = "", lines = [];
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; }
    else line = test;
  }
  if (line) lines.push(line);
  const startY = y - ((lines.length - 1) * lh) / 2;
  lines.forEach((l, i) => ctx.fillText(l, cx, startY + i * lh));
}

function drawCampaignComplete(time) {
  time = time || performance.now();
  ctx.textAlign = "center";
  // a slow rose window celebrates the finish
  drawRoseWindow(VW / 2, VH * 0.30, VH * 0.18, time);
  ctx.save();
  ctx.shadowColor = "rgba(255,180,80,0.6)";
  ctx.shadowBlur = 22;
  ctx.fillStyle = COLORS.amber;
  ctx.font = "800 46px Georgia, serif";
  ctx.fillText("Every window lit.", VW / 2, VH * 0.5);
  ctx.restore();
  ctx.fillStyle = COLORS.text;
  ctx.font = "italic 400 19px Georgia, serif";
  ctx.fillText("All " + LEVELS.length + " saints have spoken their heresies.", VW / 2, VH * 0.58);
  ctx.fillStyle = COLORS.muted;
  ctx.font = "400 15px Segoe UI, sans-serif";
  ctx.fillText("The window remembers — your progress is saved.", VW / 2, VH * 0.64);
  const blink = 0.5 + 0.5 * Math.sin(time / 350);
  ctx.fillStyle = "rgba(255,207,107," + (0.5 + blink * 0.5) + ")";
  ctx.font = "700 20px Segoe UI, sans-serif";
  ctx.fillText("Click or press Enter to begin again", VW / 2, VH * 0.78);
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
    const need = s.shadow ? "DARK" : (HUE_TABLE[hueKey(s.need)] || { name: "?" }).name;
    ctx.fillText(
      "saint" + i + (s.shadow ? "*" : "") + " need=" + need + " got=" + got + (s.satisfied ? " ✓" : ""),
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

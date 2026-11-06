/*
 * VANISHING POINT — Phases 1–3.
 *
 * Phase 1 (core mechanic): one-point-perspective puzzle. You do NOT resize
 * objects by hand. You slide them along the DEPTH axis (z): nearer = larger on
 * screen, deeper = smaller. Park a worthless speck near the vanishing point,
 * drag it forward, and watch it swell continuously into the exact platform that
 * spans the gap. Then run the "walk" test to cross.
 *
 * Phase 2 (style & identity): de Chirico plaza — ochre flagstone ground, a
 * receding shadow-violet colonnade with long raking shadows, a single impossible
 * amber sun, Doppler depth tint on objects, dust motes + sun-flare particles,
 * and a synthesized accordion-drone underscore whose pitch bends with the depth
 * of the grabbed object.
 *
 * Phase 3 (the twist): the VANISHING POINT itself is a draggable entity. On
 * twist-enabled levels a handle sits at the vanishing point; grab it and slide
 * it, and the ENTIRE scene re-projects around the new center every frame — ground
 * plane, colonnade, shadows, ledge/goal/gap, and every placed object recompute
 * their apparent size and position. The finale is solvable ONLY by relocating
 * where infinity lives.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no network — runs from
 * file://. All UI drawn on the canvas; audio synthesized lazily on first input.
 *
 * Sections: Constants -> Canvas/state -> Audio -> Perspective -> Level/model
 *  -> Input -> Update -> Solve/walk -> Render -> Loop.
 */

"use strict";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const TAU = Math.PI * 2;

// Fixed logical play area (landscape). Canvas scaled to fit, aspect preserved.
const VW = 960;
const VH = 600;

// de Chirico palette — single source of truth (SCAF-03 / STYLE-01).
// Ochre sun-baked flagstones, shadow-violet arcade, amber impossible sun.
const COLORS = {
  skyTop: "#2a1f3a",     // deep dusk violet
  skyHorizon: "#d69e5c", // amber glow at the horizon
  sun: "#ffe1a3",        // impossible sun core
  sunHalo: "#f0b15a",    // sun halo
  ground: "#b9854b",     // ochre flagstone
  groundDeep: "#7d5a39", // darker ochre toward horizon
  groundLine: "#8a6438", // flagstone seams
  flagLight: "#caa05f",  // lit flagstone face
  flagDark: "#9a7038",   // shaded flagstone face
  horizon: "#e8c98a",    // lit horizon line
  colonnade: "#41304f",  // shadow-violet arcade stone
  colonnadeLit: "#6a4f6e", // sun-struck column face
  colShadow: "rgba(28,18,40,0.55)", // raking shadow on the ground
  vp: "#ffe9bf",
  ledge: "#a07a4a",
  ledgeTop: "#d4ac6e",
  goal: "#7fb98a",       // muted verdigris goal
  goalTop: "#aee0b3",
  gap: "#0d0814",
  objFore: "#ff9d42",    // warm amber (near)
  objBack: "#7a64c4",    // cool violet (far)
  marker: "#fff4dd",
  text: "#f3e6cf",
  muted: "#cbb38f",
  ghostGood: "#9fffc0",
  ghostBad: "#ff7a7a",
  vpHandle: "#ffd27a",
};

// Screen states.
const TITLE = "title";
const PLAYING = "playing";
const WALKING = "walking";
const COMPLETE = "complete"; // one level cleared, advance prompt
const WON = "won";           // whole campaign cleared (distinct end flourish)

// Perspective baseline: where infinity lives by default.
const HORIZON_Y = VH * 0.34;
const VP_DEFAULT = { x: VW * 0.5, y: HORIZON_Y };

// Depth->scale tuning. z=0 is foreground (large), z=1 at the vanishing point.
const NEAR = 1.0;
const FAR = 10.0;

// The ground plane footprint: the path runs left->right across the bottom.
const PATH_W = 100;

// Vanishing-point drag limits (kept on/near the horizon band).
const VP_MIN_X = VW * 0.12;
const VP_MAX_X = VW * 0.88;
const VP_MIN_Y = VH * 0.20;
const VP_MAX_Y = VH * 0.50;

// ---------------------------------------------------------------------------
// Canvas & global state
// ---------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let viewScale = 1;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const availW = window.innerWidth - 24;
  const availH = window.innerHeight - 24;
  viewScale = Math.max(0.2, Math.min(availW / VW, availH / VH));
  canvas.style.width = VW * viewScale + "px";
  canvas.style.height = VH * viewScale + "px";
  canvas.width = Math.round(VW * dpr);
  canvas.height = Math.round(VH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

const state = {
  screen: TITLE,
  levelIndex: 0,
  objects: [],
  lanes: [],         // discrete snap depths (z values)
  gap: null,         // {left, right} in path units
  ledge: null,       // {left, right}
  goal: null,        // {left, right}
  grabbedId: null,
  vp: { x: VP_DEFAULT.x, y: VP_DEFAULT.y }, // mutable vanishing point (the twist)
  vpEnabled: false,  // is the VP grabbable on this level?
  vpGrabbed: false,
  vpHome: { x: VP_DEFAULT.x, y: VP_DEFAULT.y },
  vpEase: null,      // smoothing toward a target after release
  walker: null,      // {x, falling, fallY}
  debug: false,
  bestMoves: null,   // best moves for the CURRENT level (mirror of progress.best[idx])
  moves: 0,
  fails: 0,          // failed walk attempts on the current level
  message: "",
  msgTimer: 0,
  particles: [],
  time: 0,
  twistRevealTimer: 0, // pulse when the VP handle first becomes available
  shake: 0,          // screen-shake magnitude (JUICE-02), decays each frame
  fade: 0,           // level-transition fade (0=clear, 1=black), decays
  titleSel: 0,       // selected level index on the title screen
  winFlourish: 0,    // grows on the WON screen for the closing flourish
};

// ---------------------------------------------------------------------------
// Persistence (ONBOARD-04): highest level reached + per-level best moves.
// file:// may block localStorage; every access is guarded.
// ---------------------------------------------------------------------------
const SAVE_KEY = "vanishing-point.progress.v2";
const progress = { reached: 0, best: {} }; // reached = highest unlocked level index
function loadProgress() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      const o = JSON.parse(raw);
      if (typeof o.reached === "number") progress.reached = o.reached;
      if (o.best && typeof o.best === "object") progress.best = o.best;
    }
  } catch (e) { /* ignore */ }
}
function saveProgress() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(progress)); } catch (e) {}
}
loadProgress();

// ---------------------------------------------------------------------------
// Audio (lazy, file://-safe, resumed on first gesture)
// STYLE-04: an accordion-drone underscore whose pitch bends with the grabbed
// object's depth, plus distinct event blips and a solve chord/swell.
// ---------------------------------------------------------------------------
let audioCtx = null;
let masterGain = null;
let drone = null; // { osc[], filt, lfo, lfoGain, gain, baseFreq }

function audioUnlock() {
  if (audioCtx) {
    if (audioCtx.state === "suspended") audioCtx.resume();
    return;
  }
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.9;
    masterGain.connect(audioCtx.destination);
  } catch (e) { audioCtx = null; }
}

function blip(freq, dur, type, gain) {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type || "sine";
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain || 0.18, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.12));
  osc.connect(g).connect(masterGain || audioCtx.destination);
  osc.start(t);
  osc.stop(t + (dur || 0.12) + 0.02);
}

function chordWin() {
  // Warm accordion-ish swell on solve (STYLE-04 / JUICE-02).
  const notes = [261.63, 329.63, 392.0, 523.25];
  notes.forEach((f, i) => {
    blip(f, 0.9 + i * 0.12, "triangle", 0.12 - i * 0.015);
    blip(f * 1.005, 0.9 + i * 0.12, "sawtooth", 0.04); // slight detune = accordion
  });
}

// Build the breathing accordion drone. Detuned reed-ish stack through a gently
// wobbling lowpass — pitch and brightness bend with grabbed-object depth.
function startDrone() {
  if (!audioCtx || drone) return;
  const base = 110; // A2 root
  const filt = audioCtx.createBiquadFilter();
  filt.type = "lowpass";
  filt.frequency.value = 520;
  filt.Q.value = 4;

  const gain = audioCtx.createGain();
  gain.gain.value = 0.0;
  filt.connect(gain).connect(masterGain || audioCtx.destination);

  // A reed stack: root, fifth, octave, each slightly detuned for the accordion shimmer.
  const partials = [
    { mult: 1.0, detune: -6, type: "sawtooth", g: 0.16 },
    { mult: 1.0, detune: +7, type: "triangle", g: 0.12 },
    { mult: 1.5, detune: -4, type: "sawtooth", g: 0.07 },
    { mult: 2.0, detune: +5, type: "triangle", g: 0.05 },
  ];
  const oscs = [];
  for (const p of partials) {
    const o = audioCtx.createOscillator();
    o.type = p.type;
    o.frequency.value = base * p.mult;
    o.detune.value = p.detune;
    const og = audioCtx.createGain();
    og.gain.value = p.g;
    o.connect(og).connect(filt);
    o.start();
    oscs.push({ o, mult: p.mult });
  }

  // Slow "breathing" amplitude LFO — the accordion bellows.
  const lfo = audioCtx.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 0.16;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.06;
  lfo.connect(lfoGain).connect(gain.gain);
  lfo.start();

  // Fade in.
  const t = audioCtx.currentTime;
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.16, t + 1.6);

  drone = { oscs, filt, gain, lfo, lfoGain, base };
}

function stopDrone() {
  if (!drone || !audioCtx) return;
  const t = audioCtx.currentTime;
  const d = drone;
  d.gain.gain.cancelScheduledValues(t);
  d.gain.gain.setValueAtTime(d.gain.gain.value, t);
  d.gain.gain.linearRampToValueAtTime(0.0001, t + 0.8);
  setTimeout(() => {
    try {
      d.oscs.forEach((x) => x.o.stop());
      d.lfo.stop();
    } catch (e) {}
  }, 900);
  drone = null;
}

// Bend the drone with depth: a grabbed object near (z->0) lifts pitch + opens
// the filter (brighter, present); deep (z->1) lowers + closes it (distant hush).
function updateDrone() {
  if (!drone || !audioCtx) return;
  const o = getObj(state.grabbedId);
  // Default target = midrange when nothing grabbed.
  const z = o ? o.z : 0.55;
  const lift = 1 - z;            // 0 deep .. 1 near
  const t = audioCtx.currentTime;
  const targetBase = drone.base * (0.82 + lift * 0.5); // ~0.82x..1.32x
  for (const x of drone.oscs) {
    x.o.frequency.setTargetAtTime(targetBase * x.mult, t, 0.08);
  }
  const cutoff = 360 + lift * 1400; // closed when far, open when near
  drone.filt.frequency.setTargetAtTime(cutoff, t, 0.1);
  // The twist also colors the drone: dragging infinity widens resonance.
  drone.filt.Q.setTargetAtTime(state.vpGrabbed ? 9 : 4, t, 0.1);
}

// ---------------------------------------------------------------------------
// Perspective helpers — now parameterized by the (mutable) vanishing point.
// Pass an explicit vp to preview; defaults to the live state.vp.
// ---------------------------------------------------------------------------
function curVP() { return state.vp; }

// Apparent scale multiplier from depth z in [0,1].
function depthToScale(z) {
  const zc = Math.max(0, Math.min(1, z));
  return NEAR / (NEAR + zc * (FAR - NEAR));
}

const SCALE_NEAR = depthToScale(0);
const SCALE_FAR = depthToScale(1);

// 1 at near (z=0), 0 at far (z=1) — the perspective interpolation parameter.
function depthT(z) {
  const s = depthToScale(z);
  return (s - SCALE_FAR) / (SCALE_NEAR - SCALE_FAR);
}

// Project a point at depth z onto the screen vertically. Foreground sits at the
// bottom; far collapses to the vanishing point's y. Re-projects with the VP.
function depthToScreenY(z, vp) {
  vp = vp || curVP();
  const t = depthT(z);
  return vp.y + (VH * 0.96 - vp.y) * t;
}

// Convert a path coordinate (0..PATH_W) at depth z to a screen X. The path
// converges toward vp.x as z->1 and spans full width at z=0.
function pathToScreenX(pathX, z, vp) {
  vp = vp || curVP();
  const t = depthT(z);
  const marginNear = VW * 0.06;
  const nearX = marginNear + (pathX / PATH_W) * (VW - 2 * marginNear);
  return vp.x + (nearX - vp.x) * t;
}

// Apparent half-width (screen px) of an object of given true widthUnits at z.
function apparentHalfWidth(widthUnits, z) {
  const marginNear = VW * 0.06;
  const pxPerUnit = (VW - 2 * marginNear) / PATH_W;
  const nearPx = widthUnits * pxPerUnit;
  return (nearPx * depthToScale(z) / SCALE_NEAR) * 0.5;
}

// The path interval [left,right] (path units) an object covers at depth z.
function computeSpan(obj) {
  const marginNear = VW * 0.06;
  const pxPerUnit = (VW - 2 * marginNear) / PATH_W;
  const halfPx = apparentHalfWidth(obj.widthUnits, obj.z);
  const halfUnits = halfPx / pxPerUnit;
  return { left: obj.lane - halfUnits, right: obj.lane + halfUnits };
}

// ---------------------------------------------------------------------------
// Object archetypes (LEVEL-04) — distinct footprints/silhouettes. Width/height
// still come from the level (so depth choice governs span), but the archetype
// drives the drawn silhouette and a base tint shift so each reads differently.
// ---------------------------------------------------------------------------
const ARCHETYPES = {
  boulder: { tint: 0.0, lip: 0.5, label: "boulder" }, // rounded, tall lip
  slab:    { tint: 0.0, lip: 0.18, label: "slab" },    // flat, wide
  pillar:  { tint: 0.06, lip: 0.7, label: "pillar" },  // narrow, blocky
  filler:  { tint: -0.05, lip: 0.3, label: "filler" }, // small connector
};

// ---------------------------------------------------------------------------
// Level / model — the full handcrafted campaign (LEVEL-01..04).
// Difficulty curve:
//   I–II   single object, VP locked        (learn: drag depth to grow)
//   III–IV combine 2–3 objects, VP locked   (learn: spans add up)
//   V      a giant + a filler               (the shrink-a-giant archetype)
//   VI–VII tight multi-object precision     (VP locked)
//   VIII–XII  the SUN is grabbable; goal sits DEEPER than the ledge so it is
//             unsolvable at the home vanishing point — only relocating infinity
//             swings the far goal into reach (verified by a headless VP sweep).
// All levels are headless-verified solvable; twist levels are verified
// unsolvable-at-home AND solvable-by-VP (hundreds of valid VP positions each).
// ---------------------------------------------------------------------------
const LEVELS = [
  { name: "Plaza I — The Speck",
    lanes: [0.02, 0.14, 0.3, 0.5, 0.72, 0.9],
    ledge: { left: 0, right: 36 }, goal: { left: 64, right: 100 }, gap: { left: 36, right: 64 },
    vpEnabled: false, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.9, lane: 50, widthUnits: 60, height: 26, kind: "boulder" } ],
    hint: "Drag the far speck forward — watch it swell into a bridge." },

  { name: "Plaza II — The Reach",
    lanes: [0.05, 0.18, 0.34, 0.52, 0.72, 0.9],
    ledge: { left: 0, right: 30 }, goal: { left: 70, right: 100 }, gap: { left: 30, right: 70 },
    vpEnabled: false, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.85, lane: 50, widthUnits: 56, height: 24, kind: "slab" } ],
    hint: "Wider gap. Pull the slab all the way forward to span it." },

  { name: "Plaza III — Two Stones",
    lanes: [0.05, 0.18, 0.34, 0.52, 0.72, 0.9],
    ledge: { left: 0, right: 24 }, goal: { left: 78, right: 100 }, gap: { left: 24, right: 78 },
    vpEnabled: false, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.85, lane: 40, widthUnits: 38, height: 24, kind: "boulder" },
               { id: "B", z: 0.85, lane: 62, widthUnits: 38, height: 24, kind: "boulder" } ],
    hint: "One stone won't reach. Bring BOTH forward to span the gap." },

  { name: "Plaza IV — The Three",
    lanes: [0.08, 0.2, 0.34, 0.5, 0.7, 0.88],
    ledge: { left: 0, right: 18 }, goal: { left: 84, right: 100 }, gap: { left: 18, right: 84 },
    vpEnabled: false, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.85, lane: 35, widthUnits: 40, height: 22, kind: "slab" },
               { id: "B", z: 0.85, lane: 54, widthUnits: 40, height: 22, kind: "slab" },
               { id: "C", z: 0.85, lane: 72, widthUnits: 40, height: 22, kind: "slab" } ],
    hint: "A long span. All three must come forward and overlap." },

  { name: "Plaza V — The Giant",
    lanes: [0.06, 0.2, 0.36, 0.54, 0.74, 0.92],
    ledge: { left: 0, right: 28 }, goal: { left: 72, right: 100 }, gap: { left: 28, right: 72 },
    vpEnabled: false, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.06, lane: 30, widthUnits: 70, height: 30, kind: "boulder" },
               { id: "B", z: 0.5, lane: 78, widthUnits: 40, height: 20, kind: "filler" } ],
    hint: "A near giant and a far filler. Depth is a resource — place each." },

  { name: "Plaza VI — Pillar & Stone",
    lanes: [0.08, 0.22, 0.38, 0.56, 0.76],
    ledge: { left: 0, right: 22 }, goal: { left: 80, right: 100 }, gap: { left: 22, right: 80 },
    vpEnabled: false, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.76, lane: 40, widthUnits: 50, height: 26, kind: "boulder" },
               { id: "B", z: 0.76, lane: 66, widthUnits: 34, height: 18, kind: "pillar" } ],
    hint: "Different stock, same trick: grow both until the span is unbroken." },

  { name: "Plaza VII — The Narrow Walk",
    lanes: [0.1, 0.24, 0.4, 0.58, 0.78],
    ledge: { left: 0, right: 16 }, goal: { left: 86, right: 100 }, gap: { left: 16, right: 86 },
    vpEnabled: false, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.78, lane: 32, widthUnits: 46, height: 24, kind: "slab" },
               { id: "B", z: 0.78, lane: 50, widthUnits: 42, height: 22, kind: "slab" },
               { id: "C", z: 0.78, lane: 70, widthUnits: 46, height: 24, kind: "slab" } ],
    hint: "The widest chasm yet. Precise depths only — leave no seam." },

  { name: "Plaza VIII — Move Infinity",
    lanes: [0.1, 0.24, 0.4, 0.58, 0.78],
    ledge: { left: 0, right: 34, z: 0.06 }, goal: { left: 66, right: 100, z: 0.42 }, gap: { left: 34, right: 66, z: 0.06 },
    vpEnabled: true, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.78, lane: 55, widthUnits: 42, height: 24, kind: "boulder" } ],
    hint: "The goal sits deeper than the start — no depth reaches it. Grab the SUN." },

  { name: "Plaza IX — Bent Horizon",
    lanes: [0.1, 0.24, 0.4, 0.58, 0.78],
    ledge: { left: 0, right: 32, z: 0.06 }, goal: { left: 68, right: 100, z: 0.52 }, gap: { left: 32, right: 68, z: 0.06 },
    vpEnabled: true, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.78, lane: 54, widthUnits: 40, height: 24, kind: "slab" } ],
    hint: "Deeper still. Slide infinity to swing the far goal into reach." },

  { name: "Plaza X — Twin Drift",
    lanes: [0.1, 0.24, 0.4, 0.58, 0.78],
    ledge: { left: 0, right: 26, z: 0.06 }, goal: { left: 74, right: 100, z: 0.5 }, gap: { left: 26, right: 74, z: 0.06 },
    vpEnabled: true, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.78, lane: 44, widthUnits: 36, height: 22, kind: "boulder" },
               { id: "B", z: 0.78, lane: 64, widthUnits: 36, height: 22, kind: "boulder" } ],
    hint: "Two stones AND the sun. Relocate infinity, then bridge the rest." },

  { name: "Plaza XI — The Far God",
    lanes: [0.1, 0.24, 0.4, 0.58, 0.78],
    ledge: { left: 0, right: 30, z: 0.06 }, goal: { left: 70, right: 100, z: 0.6 }, gap: { left: 30, right: 70, z: 0.06 },
    vpEnabled: true, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.78, lane: 55, widthUnits: 44, height: 24, kind: "boulder" } ],
    hint: "The goal is nearly at infinity. Only a bold sun-slide reaches it." },

  { name: "Plaza XII — Solved in Shadow",
    lanes: [0.1, 0.24, 0.4, 0.58, 0.78],
    ledge: { left: 0, right: 24, z: 0.06 }, goal: { left: 76, right: 100, z: 0.55 }, gap: { left: 24, right: 76, z: 0.06 },
    vpEnabled: true, vp: { x: VW * 0.5, y: HORIZON_Y },
    objects: [ { id: "A", z: 0.78, lane: 42, widthUnits: 36, height: 22, kind: "boulder" },
               { id: "B", z: 0.78, lane: 64, widthUnits: 36, height: 22, kind: "boulder" } ],
    hint: "The last plaza. Move the sun, grow both stones, and cross." },
];

// Resume selection defaults to the player's furthest unlocked plaza.
state.titleSel = Math.min(progress.reached, LEVELS.length - 1);

function loadLevel(idx) {
  if (typeof idx === "number") state.levelIndex = idx;
  const lv = LEVELS[state.levelIndex % LEVELS.length];

  state.lanes = lv.lanes.slice();
  // Ends carry their own depth; default to the foreground plane if unspecified.
  state.ledge = { z: 0.06, ...lv.ledge };
  state.goal = { z: 0.06, ...lv.goal };
  state.gap = { z: 0.06, ...lv.gap };

  state.vpEnabled = !!lv.vpEnabled;
  state.vp = { x: lv.vp.x, y: lv.vp.y };
  state.vpHome = { x: lv.vp.x, y: lv.vp.y };
  state.vpGrabbed = false;
  state.vpEase = null;

  state.objects = lv.objects.map((o) => ({
    ...o, grabbed: false, snapEase: null,
  }));

  state.grabbedId = null;
  state.walker = null;
  state.moves = 0;
  state.fails = 0;
  state.particles = [];
  state.twistRevealTimer = lv.vpEnabled ? 2.4 : 0;
  state.fade = 1; // fade in from black on level start (JUICE-03 transition)
  state.shake = 0;

  // Per-level best (ONBOARD-04) + unlock progress.
  const bm = progress.best[state.levelIndex];
  state.bestMoves = (typeof bm === "number") ? bm : null;
  if (state.levelIndex > progress.reached) { progress.reached = state.levelIndex; saveProgress(); }

  setMessage(lv.hint, 6);

  if (audioCtx) { stopDrone(); startDrone(); }
}

function setMessage(txt, secs) {
  state.message = txt;
  state.msgTimer = secs || 3;
}

function getObj(id) {
  return state.objects.find((o) => o.id === id);
}

// Advance from a cleared level to the next, or to the WON end screen after the
// final plaza (LEVEL-03).
function advanceLevel() {
  const next = state.levelIndex + 1;
  if (next >= LEVELS.length) {
    state.screen = WON;
    state.winFlourish = 0;
    // a sustained sun-flare from the vanishing point for the closing flourish
    for (let i = 0; i < 120; i++) {
      const a = Math.random() * TAU;
      const sp = 50 + Math.random() * 260;
      state.particles.push({
        x: state.vp.x, y: state.vp.y,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        life: 1.4 + Math.random() * 1.6, max: 3, flare: true,
      });
    }
    chordWin();
    return;
  }
  state.screen = PLAYING;
  loadLevel(next);
  startDrone();
}

// ---------------------------------------------------------------------------
// Title-screen level-select grid (ONBOARD-02/04). Chips for every UNLOCKED
// level; locked levels show but can't be clicked.
// ---------------------------------------------------------------------------
const CHIP_COLS = 6;
function titleChipRect(i) {
  const cols = CHIP_COLS;
  const cw = 86, ch = 44, gx = 14, gy = 14;
  const rows = Math.ceil(LEVELS.length / cols);
  const totalW = cols * cw + (cols - 1) * gx;
  const x0 = (VW - totalW) / 2;
  const y0 = VH * 0.70;
  const r = Math.floor(i / cols), c = i % cols;
  return { x: x0 + c * (cw + gx), y: y0 + r * (ch + gy), w: cw, h: ch, rows };
}
function pickTitleChip(lx, ly) {
  for (let i = 0; i < LEVELS.length; i++) {
    if (i > progress.reached) continue; // locked
    const r = titleChipRect(i);
    if (lx >= r.x && lx <= r.x + r.w && ly >= r.y && ly <= r.y + r.h) return i;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------
function canvasToLogical(clientX, clientY) {
  const r = canvas.getBoundingClientRect();
  return {
    x: ((clientX - r.left) / r.width) * VW,
    y: ((clientY - r.top) / r.height) * VH,
  };
}

function vpHandleRadius() { return 16 + Math.sin(state.time * 2.5) * 2.5; }

function pickVP(lx, ly) {
  if (!state.vpEnabled) return false;
  const d = Math.hypot(lx - state.vp.x, ly - state.vp.y);
  return d <= vpHandleRadius() + 14;
}

function pickObject(lx, ly) {
  const ordered = [...state.objects].sort((a, b) => a.z - b.z);
  for (const o of ordered) {
    const cx = pathToScreenX(o.lane, o.z);
    const cy = depthToScreenY(o.z);
    const hw = apparentHalfWidth(o.widthUnits, o.z);
    const hh = (o.height * depthToScale(o.z)) / depthToScale(0) * 0.5 + 4;
    if (lx >= cx - hw - 6 && lx <= cx + hw + 6 && ly >= cy - hh - 6 && ly <= cy + hh + 6) {
      return o;
    }
  }
  return null;
}

let pointerDown = false;

function onPointerDown(e) {
  audioUnlock();
  if (!drone && (state.screen === PLAYING || state.screen === WALKING)) startDrone();
  const p = canvasToLogical(e.clientX, e.clientY);
  pointerDown = true;

  if (state.screen === TITLE) {
    // Click on a level chip in the select grid jumps to it; otherwise begin
    // at the player's saved progress.
    const hit = pickTitleChip(p.x, p.y);
    const startIdx = (hit !== null) ? hit : Math.min(progress.reached, LEVELS.length - 1);
    state.screen = PLAYING;
    loadLevel(startIdx);
    startDrone();
    return;
  }
  if (state.screen === WON) {
    // Closing screen -> back to title.
    state.screen = TITLE;
    state.titleSel = 0;
    stopDrone();
    return;
  }
  if (state.screen === COMPLETE) {
    advanceLevel();
    return;
  }
  if (state.screen !== PLAYING) return;

  // The vanishing point takes grab priority when enabled — it is the marquee verb.
  if (pickVP(p.x, p.y)) {
    state.vpGrabbed = true;
    state.vpEase = null;
    state.grabbedId = null;
    blip(140, 0.18, "sawtooth", 0.14);
    blip(280, 0.12, "sine", 0.08);
    setMessage("Infinity in hand — the whole plaza bends to it.", 3);
    return;
  }

  const o = pickObject(p.x, p.y);
  if (o) {
    o.grabbed = true;
    o.snapEase = null;
    state.grabbedId = o.id;
    blip(220 + (1 - o.z) * 200, 0.08, "sine", 0.12);
  }
}

function onPointerMove(e) {
  if (!pointerDown || state.screen !== PLAYING) return;
  const p = canvasToLogical(e.clientX, e.clientY);

  if (state.vpGrabbed) {
    state.vp.x = Math.max(VP_MIN_X, Math.min(VP_MAX_X, p.x));
    state.vp.y = Math.max(VP_MIN_Y, Math.min(VP_MAX_Y, p.y));
    return;
  }

  const o = getObj(state.grabbedId);
  if (!o) return;
  // Map vertical pointer position to depth, relative to the CURRENT vp.y so the
  // drag stays intuitive after the vanishing point has been relocated.
  const yTop = state.vp.y + 6;
  const yBot = VH * 0.96;
  let t = (p.y - yTop) / (yBot - yTop);
  t = Math.max(0, Math.min(1, t));
  o.z = 1 - t;
  o.z = Math.max(0.02, Math.min(0.98, o.z));
}

function onPointerUp() {
  pointerDown = false;
  if (state.screen !== PLAYING) return;

  if (state.vpGrabbed) {
    state.vpGrabbed = false;
    state.moves++;
    blip(180, 0.14, "triangle", 0.1);
    const ok = isBridgeComplete();
    setMessage(ok ? "The span aligns — press SPACE to walk!" : "The plaza re-projected. Keep searching.", 4);
    return;
  }

  const o = getObj(state.grabbedId);
  if (o) {
    let best = state.lanes[0];
    let bestD = Infinity;
    for (const z of state.lanes) {
      const d = Math.abs(z - o.z);
      if (d < bestD) { bestD = d; best = z; }
    }
    o.snapEase = { from: o.z, to: best, t: 0 };
    o.z = best;
    o.grabbed = false;
    state.moves++;
    blip(160, 0.1, "square", 0.12);
    const ok = isBridgeComplete();
    setMessage(ok ? "Bridge looks complete — press SPACE to walk!" : "Not spanning yet. Keep dragging.", 4);
  }
  state.grabbedId = null;
}

canvas.addEventListener("pointerdown", onPointerDown);
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("pointerup", onPointerUp);

window.addEventListener("keydown", (e) => {
  audioUnlock();
  if (e.key === "d" || e.key === "D") state.debug = !state.debug;
  if (e.key === "r" || e.key === "R") {
    if (state.screen === PLAYING || state.screen === WALKING) loadLevel();
  }
  // Title-screen level navigation with arrows (keyboard-only path).
  if (state.screen === TITLE) {
    if (e.key === "ArrowRight") state.titleSel = Math.min(progress.reached, state.titleSel + 1);
    if (e.key === "ArrowLeft") state.titleSel = Math.max(0, state.titleSel - 1);
    if (e.key === "ArrowDown") state.titleSel = Math.min(progress.reached, state.titleSel + CHIP_COLS);
    if (e.key === "ArrowUp") state.titleSel = Math.max(0, state.titleSel - CHIP_COLS);
  }

  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    if (state.screen === TITLE) {
      state.screen = PLAYING; loadLevel(state.titleSel); startDrone();
    } else if (state.screen === COMPLETE) {
      advanceLevel();
    } else if (state.screen === WON) {
      state.screen = TITLE; state.titleSel = 0; stopDrone();
    } else if (state.screen === PLAYING) {
      startWalk();
    }
  }
});

// ---------------------------------------------------------------------------
// Solve / bridge / walk
// ---------------------------------------------------------------------------
// --- The solve runs in SCREEN-X, projecting each piece through the CURRENT
// vanishing point at its OWN depth. Relocating infinity genuinely re-projects
// which screen positions are covered — so a level whose ends sit at different
// depths can only be bridged by moving the vanishing point. This is what makes
// the twist mechanically real, not cosmetic.

// Screen-X interval [left,right] of an object's footprint at the current VP.
function objectScreenSpan(o) {
  const cx = pathToScreenX(o.lane, o.z);
  const hw = apparentHalfWidth(o.widthUnits, o.z);
  return { left: cx - hw, right: cx + hw };
}

// Screen-X interval of an end (ledge/goal) projected at ITS OWN depth.
function endScreenSpan(end) {
  const a = pathToScreenX(end.left, end.z);
  const b = pathToScreenX(end.right, end.z);
  return { left: Math.min(a, b), right: Math.max(a, b) };
}

// Solid anchors (ledge, goal) and bridge footprints, all in screen-X.
function coverIntervalsScreen() {
  const ivs = [endScreenSpan(state.ledge), endScreenSpan(state.goal)];
  for (const o of state.objects) ivs.push(objectScreenSpan(o));
  return ivs;
}

function ledgeRightX() { return endScreenSpan(state.ledge).right; }
function goalLeftX() { return endScreenSpan(state.goal).left; }

function isBridgeComplete() {
  const ivs = coverIntervalsScreen().sort((a, b) => a.left - b.left);
  const TOL = 4; // px slack
  let reach = ledgeRightX();
  const target = goalLeftX();
  let progressed = true;
  while (progressed && reach < target) {
    progressed = false;
    for (const iv of ivs) {
      if (iv.left <= reach + TOL && iv.right > reach) {
        reach = iv.right;
        progressed = true;
      }
    }
  }
  return reach >= target - TOL;
}

// Top screen-Y of any object footprint covering a given screen-X (for the walker).
function footprintTopYAtScreenX(sx) {
  let best = null;
  for (const o of state.objects) {
    const sp = objectScreenSpan(o);
    if (sx >= sp.left && sx <= sp.right) {
      const cy = depthToScreenY(o.z);
      const hh = (o.height * depthToScale(o.z)) / depthToScale(0) * 0.5;
      const topY = cy - hh;
      if (best === null || topY < best) best = topY;
    }
  }
  return best;
}

function groundCoveredScreen(sx) {
  if (sx <= ledgeRightX() + 2) return true;
  if (sx >= goalLeftX() - 2) return true;
  for (const o of state.objects) {
    const iv = objectScreenSpan(o);
    if (sx >= iv.left - 4 && sx <= iv.right + 4) return true;
  }
  return false;
}

function startWalk() {
  if (state.screen !== PLAYING) return;
  state.screen = WALKING;
  // Walker advances in screen-X across the foreground plane.
  state.walker = { sx: ledgeRightX() - 6, falling: false, fallY: 0, vy: 0 };
  setMessage("Walking...", 2);
  blip(330, 0.08, "triangle", 0.1);
}

function updateWalk(dt) {
  const w = state.walker;
  if (!w) return;
  if (w.falling) {
    w.vy += 900 * dt;
    w.fallY += w.vy * dt;
    if (w.fallY > 220) {
      state.screen = PLAYING;
      state.walker = null;
      state.fails++;
      state.shake = 14; // JUICE: a jolt on failure
      const tip = state.vpEnabled
        ? "Fell into the gap! Try sliding the sun, then re-check the span."
        : "Fell into the gap! Bring objects forward until the span is unbroken.";
      setMessage(tip, 4);
      blip(120, 0.3, "sawtooth", 0.12);
      blip(90, 0.4, "sawtooth", 0.08);
    }
    return;
  }
  const before = w.sx;
  w.sx += 150 * dt; // screen px / sec
  if (Math.floor(w.sx / 14) !== Math.floor(before / 14)) blip(440, 0.04, "square", 0.06);
  if (w.sx >= goalLeftX() + 8) { winLevel(); return; }
  if (!groundCoveredScreen(w.sx)) { w.falling = true; w.vy = 0; }
}

function winLevel() {
  state.screen = COMPLETE;
  state.walker = null;
  chordWin();
  state.shake = 6;
  // Per-level best (ONBOARD-04).
  const prev = progress.best[state.levelIndex];
  if (typeof prev !== "number" || state.moves < prev) {
    progress.best[state.levelIndex] = state.moves;
    state.bestMoves = state.moves;
  } else {
    state.bestMoves = prev;
  }
  // Unlock the next level.
  if (state.levelIndex + 1 > progress.reached && state.levelIndex + 1 < LEVELS.length) {
    progress.reached = state.levelIndex + 1;
  }
  saveProgress();
  // Sun-flare burst from the (current) vanishing point.
  for (let i = 0; i < 80; i++) {
    const a = Math.random() * TAU;
    const sp = 60 + Math.random() * 240;
    state.particles.push({
      x: state.vp.x, y: state.vp.y,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      life: 1 + Math.random() * 1.2, max: 2.2, flare: true,
    });
  }
}

// ---------------------------------------------------------------------------
// Update
// ---------------------------------------------------------------------------
function update(dt) {
  state.time += dt;
  if (state.msgTimer > 0) state.msgTimer -= dt;
  if (state.twistRevealTimer > 0) state.twistRevealTimer -= dt;
  if (state.shake > 0) state.shake = Math.max(0, state.shake - dt * 36);
  if (state.fade > 0) state.fade = Math.max(0, state.fade - dt * 2.2);
  if (state.screen === WON) state.winFlourish = Math.min(1, state.winFlourish + dt * 0.5);

  for (const o of state.objects) {
    if (o.snapEase) {
      o.snapEase.t += dt * 8;
      if (o.snapEase.t >= 1) { o.z = o.snapEase.to; o.snapEase = null; }
      else o.z = o.snapEase.from + (o.snapEase.to - o.snapEase.from) * o.snapEase.t;
    }
  }

  updateDrone();

  if (state.screen === WALKING) updateWalk(dt);

  for (const p of state.particles) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += (p.dust ? 0 : 40) * dt;
    p.life -= dt;
  }
  state.particles = state.particles.filter((p) => p.life > 0);

  // Ambient dust motes drifting through the plaza (STYLE-03).
  if (state.screen !== TITLE && state.particles.length < 26 && Math.random() < 0.5) {
    state.particles.push({
      x: Math.random() * VW, y: state.vp.y + Math.random() * (VH - state.vp.y),
      vx: (Math.random() - 0.5) * 10, vy: -3 - Math.random() * 6,
      life: 3 + Math.random() * 3, max: 6, dust: true,
    });
  }
}

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------
function depthColor(z) {
  const t = Math.max(0, Math.min(1, z));
  const a = hexToRgb(COLORS.objFore);
  const b = hexToRgb(COLORS.objBack);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `rgb(${r},${g},${bl})`;
}
function hexToRgb(h) {
  const n = parseInt(h.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function drawSky() {
  const vp = curVP();
  // Vertical dusk gradient anchored to the vanishing-point's height.
  const grad = ctx.createLinearGradient(0, 0, 0, vp.y);
  grad.addColorStop(0, COLORS.skyTop);
  grad.addColorStop(1, COLORS.skyHorizon);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, VW, vp.y + 1);

  // The impossible sun, sitting at infinity (the vanishing point).
  const pulse = 1 + Math.sin(state.time * 1.3) * 0.04;
  const halo = ctx.createRadialGradient(vp.x, vp.y, 4, vp.x, vp.y, 130 * pulse);
  halo.addColorStop(0, "rgba(255,225,163,0.95)");
  halo.addColorStop(0.25, "rgba(240,177,90,0.55)");
  halo.addColorStop(1, "rgba(240,177,90,0)");
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(vp.x, vp.y, 130 * pulse, 0, TAU);
  ctx.fill();

  ctx.fillStyle = COLORS.sun;
  ctx.beginPath();
  ctx.arc(vp.x, vp.y, 26, 0, TAU);
  ctx.fill();
}

function drawGround() {
  const vp = curVP();
  // Ochre ground plane below the horizon, darkening toward the vanishing point.
  const grad = ctx.createLinearGradient(0, vp.y, 0, VH);
  grad.addColorStop(0, COLORS.groundDeep);
  grad.addColorStop(1, COLORS.ground);
  ctx.fillStyle = grad;
  ctx.fillRect(0, vp.y, VW, VH - vp.y);

  // Converging flagstone seams from the bottom edge to the VP (radial lines).
  ctx.strokeStyle = COLORS.groundLine;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 14; i++) {
    const x = (i / 14) * VW;
    ctx.beginPath();
    ctx.moveTo(x, VH);
    ctx.lineTo(vp.x, vp.y);
    ctx.stroke();
  }
  // Transverse flagstone rows at the depth lanes (perspective-spaced).
  ctx.strokeStyle = "rgba(60,40,20,0.4)";
  for (const z of state.lanes) {
    const y = depthToScreenY(z, vp);
    const xl = pathToScreenX(-30, z, vp);
    const xr = pathToScreenX(PATH_W + 30, z, vp);
    ctx.beginPath();
    ctx.moveTo(xl, y);
    ctx.lineTo(xr, y);
    ctx.stroke();
  }

  // Horizon line (lit).
  ctx.strokeStyle = COLORS.horizon;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, vp.y);
  ctx.lineTo(VW, vp.y);
  ctx.stroke();
}

// A receding colonnade down each side, drawn in perspective with long raking
// shadows pulling toward the vanishing point (STYLE-01).
function drawColonnade() {
  const vp = curVP();
  // Place columns at a set of depths down both flanks of the plaza.
  const depths = [0.06, 0.16, 0.28, 0.42, 0.58, 0.74];
  // Lateral path positions just outside the play path.
  const sides = [-26, PATH_W + 26];

  for (const z of depths) {
    for (const sideX of sides) {
      const baseX = pathToScreenX(sideX, z, vp);
      const baseY = depthToScreenY(z, vp);
      const sc = depthToScale(z) / SCALE_NEAR; // 1 near .. ~0.1 far
      const colW = 30 * sc;
      const colH = 150 * sc;

      // Raking shadow on the ground, pulling toward the vanishing point.
      ctx.save();
      ctx.fillStyle = COLORS.colShadow;
      ctx.beginPath();
      ctx.moveTo(baseX - colW * 0.5, baseY);
      ctx.lineTo(baseX + colW * 0.5, baseY);
      // shadow tip aimed at the VP
      const tx = vp.x + (baseX - vp.x) * 0.25;
      const ty = vp.y + (baseY - vp.y) * 0.25;
      ctx.lineTo(tx + colW * 0.18, ty);
      ctx.lineTo(tx - colW * 0.18, ty);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Column body — sun-struck on the side facing the sun, shadowed away.
      const litLeft = baseX < vp.x; // sun is at vp.x
      ctx.fillStyle = COLORS.colonnade;
      ctx.fillRect(baseX - colW * 0.5, baseY - colH, colW, colH);
      // lit face strip
      ctx.fillStyle = COLORS.colonnadeLit;
      const stripW = colW * 0.32;
      const stripX = litLeft ? baseX + colW * 0.5 - stripW : baseX - colW * 0.5;
      ctx.fillRect(stripX, baseY - colH, stripW, colH);
      // capital + base blocks
      ctx.fillStyle = COLORS.colonnadeLit;
      ctx.fillRect(baseX - colW * 0.62, baseY - colH, colW * 1.24, colH * 0.06);
      ctx.fillStyle = COLORS.colonnade;
      ctx.fillRect(baseX - colW * 0.6, baseY - colH * 0.06, colW * 1.2, colH * 0.05);
    }
  }
}

function drawGroundSlab(left, right, color, topColor, label, z) {
  const vp = curVP();
  z = (typeof z === "number") ? z : 0.06;
  const y = depthToScreenY(z, vp);
  const xl = pathToScreenX(left, z, vp);
  const xr = pathToScreenX(right, z, vp);
  const sc = depthToScale(z) / SCALE_NEAR;
  const h = 60 * sc;
  const lip = 6 * sc;
  ctx.fillStyle = color;
  ctx.fillRect(xl, y - lip, xr - xl, h);
  ctx.fillStyle = topColor || "rgba(255,255,255,0.12)";
  ctx.fillRect(xl, y - lip, xr - xl, lip);
  if (label) {
    ctx.fillStyle = COLORS.text;
    ctx.font = `bold ${Math.round(13 * Math.max(0.7, sc))}px Georgia, serif`;
    ctx.textAlign = "center";
    ctx.fillText(label, (xl + xr) / 2, y + 24 * Math.max(0.7, sc));
  }
}

function drawGap() {
  const vp = curVP();
  // The chasm spans from the near ledge depth down to the deep goal depth, so
  // it re-projects correctly when the vanishing point is relocated.
  const zNear = state.ledge.z;
  const zFar = state.goal.z;
  const yNear = depthToScreenY(zNear, vp);
  const xlN = pathToScreenX(state.gap.left, zNear, vp);
  const xrN = pathToScreenX(state.gap.right, zNear, vp);
  const yFar = depthToScreenY(zFar, vp);
  const xlF = pathToScreenX(state.gap.left, zFar, vp);
  const xrF = pathToScreenX(state.gap.right, zFar, vp);
  // Fill the void as a quad between the near and far chasm edges + down to bottom.
  ctx.fillStyle = COLORS.gap;
  ctx.beginPath();
  ctx.moveTo(xlF, yFar);
  ctx.lineTo(xrF, yFar);
  ctx.lineTo(xrN, yNear);
  ctx.lineTo(xrN, VH);
  ctx.lineTo(xlN, VH);
  ctx.lineTo(xlN, yNear);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(255,120,90,0.22)";
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(xlF, yFar); ctx.lineTo(xlN, VH); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(xrF, yFar); ctx.lineTo(xrN, VH); ctx.stroke();
}

function drawObject(o) {
  const vp = curVP();
  const cx = pathToScreenX(o.lane, o.z, vp);
  const cy = depthToScreenY(o.z, vp);
  const hw = apparentHalfWidth(o.widthUnits, o.z);
  const hh = (o.height * depthToScale(o.z)) / depthToScale(0) * 0.5;
  const col = depthColor(o.z);

  // Raking shadow pulling toward the vanishing point (style consistency).
  ctx.fillStyle = "rgba(20,12,30,0.34)";
  const sx = vp.x + (cx - vp.x) * 0.55;
  const sy = vp.y + (cy + hh - vp.y) * 0.7;
  ctx.beginPath();
  ctx.moveTo(cx - hw, cy + hh);
  ctx.lineTo(cx + hw, cy + hh);
  ctx.lineTo(sx + hw * 0.4, sy);
  ctx.lineTo(sx - hw * 0.4, sy);
  ctx.closePath();
  ctx.fill();

  // Doppler-tinted body (STYLE-02): warm near, violet far. Archetype shapes the
  // silhouette so boulder/slab/pillar/filler read distinctly (LEVEL-04).
  const arc = ARCHETYPES[o.kind] || ARCHETYPES.boulder;
  ctx.fillStyle = col;
  if (o.kind === "boulder") {
    // rounded-top boulder
    const rx = hw, ry = hh;
    ctx.beginPath();
    ctx.moveTo(cx - rx, cy + ry);
    ctx.lineTo(cx - rx, cy - ry * 0.4);
    ctx.quadraticCurveTo(cx - rx, cy - ry, cx - rx * 0.5, cy - ry);
    ctx.lineTo(cx + rx * 0.5, cy - ry);
    ctx.quadraticCurveTo(cx + rx, cy - ry, cx + rx, cy - ry * 0.4);
    ctx.lineTo(cx + rx, cy + ry);
    ctx.closePath();
    ctx.fill();
  } else if (o.kind === "pillar") {
    // narrow blocky pillar with a capital
    ctx.fillRect(cx - hw, cy - hh, hw * 2, hh * 2);
    ctx.fillStyle = COLORS.colonnadeLit;
    ctx.fillRect(cx - hw * 1.15, cy - hh, hw * 2.3, Math.max(2, hh * 0.18));
    ctx.fillStyle = col;
  } else {
    // slab / filler — flat rectangle
    ctx.fillRect(cx - hw, cy - hh, hw * 2, hh * 2);
  }
  // glow rim that intensifies as it warms forward
  const warm = 1 - o.z;
  ctx.fillStyle = `rgba(255,210,140,${0.1 + warm * 0.22})`;
  ctx.fillRect(cx - hw, cy - hh, hw * 2, Math.max(2, hh * (arc.lip)));
  ctx.strokeStyle = o.grabbed ? "#fff" : "rgba(20,12,30,0.5)";
  ctx.lineWidth = o.grabbed ? 2 : 1;
  ctx.strokeRect(cx - hw, cy - hh, hw * 2, hh * 2);

  if (o.grabbed) {
    const sp = objectScreenSpan(o);
    const spans = isBridgeComplete();
    const z = 0.06;
    const gy = depthToScreenY(z, vp) - 12;
    ctx.fillStyle = spans ? "rgba(159,255,192,0.28)" : "rgba(255,122,122,0.24)";
    ctx.fillRect(sp.left, gy, sp.right - sp.left, 8);
  }
}

function drawWalker() {
  const w = state.walker;
  if (!w) return;
  const vp = curVP();
  const z = 0.06;
  let y = depthToScreenY(z, vp) - 8;
  const top = footprintTopYAtScreenX(w.sx);
  if (top !== null && !w.falling) y = top - 8;
  if (w.falling) y += w.fallY;
  const x = w.sx;
  ctx.fillStyle = COLORS.marker;
  ctx.beginPath();
  ctx.arc(x, y - 10, 9, 0, TAU);
  ctx.fill();
  ctx.fillRect(x - 4, y - 4, 8, 16);
}

// The draggable vanishing-point handle (the twist made tangible).
function drawVPHandle() {
  if (!state.vpEnabled) return;
  const vp = curVP();
  const r = vpHandleRadius();
  const reveal = state.twistRevealTimer > 0;
  // Pulsing ring around the sun marking it as grabbable.
  ctx.save();
  ctx.strokeStyle = state.vpGrabbed ? "#fff" : COLORS.vpHandle;
  ctx.lineWidth = state.vpGrabbed ? 3 : 2;
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(vp.x, vp.y, r, 0, TAU);
  ctx.stroke();
  // crosshair ticks
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const a = i * (TAU / 4) + state.time * 0.6;
    ctx.moveTo(vp.x + Math.cos(a) * (r + 4), vp.y + Math.sin(a) * (r + 4));
    ctx.lineTo(vp.x + Math.cos(a) * (r + 12), vp.y + Math.sin(a) * (r + 12));
  }
  ctx.stroke();
  if (reveal) {
    const a = Math.max(0, state.twistRevealTimer / 2.4);
    ctx.globalAlpha = a * 0.8;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(vp.x, vp.y, r + 24 + (1 - a) * 30, 0, TAU);
    ctx.stroke();
  }
  ctx.restore();

  if (!state.vpGrabbed) {
    ctx.fillStyle = COLORS.vpHandle;
    ctx.font = "italic 12px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("drag the sun", vp.x, vp.y - r - 18);
  }
}

function drawParticles() {
  for (const p of state.particles) {
    if (p.dust) {
      const a = 0.3 * (p.life / p.max);
      ctx.fillStyle = `rgba(255,228,170,${a})`;
      ctx.fillRect(p.x, p.y, 2, 2);
    } else {
      const a = Math.max(0, p.life / p.max);
      ctx.fillStyle = `rgba(255,${Math.round(180 + 60 * a)},${Math.round(90 * a)},${a})`;
      ctx.fillRect(p.x, p.y, 3.5, 3.5);
    }
  }
}

function drawHUD() {
  const lv = LEVELS[state.levelIndex % LEVELS.length];
  ctx.textAlign = "left";
  ctx.fillStyle = COLORS.muted;
  ctx.font = "12px Georgia, serif";
  const ctrl = state.vpEnabled
    ? "Drag blocks in depth  •  DRAG THE SUN to move infinity  •  SPACE = walk  •  R = reset"
    : "Drag a block up/down to move it in depth  •  SPACE = walk  •  R = reset  •  D = debug";
  ctx.fillText(ctrl, 16, VH - 14);

  ctx.textAlign = "left";
  ctx.fillStyle = COLORS.muted;
  ctx.font = "italic 13px Georgia, serif";
  ctx.fillText(`${state.levelIndex + 1}/${LEVELS.length}  —  ${lv.name}`, 16, 24);

  ctx.textAlign = "right";
  ctx.fillStyle = COLORS.text;
  ctx.font = "bold 13px Georgia, serif";
  ctx.fillText(`Moves: ${state.moves}`, VW - 16, 24);
  let hy = 42;
  if (state.bestMoves !== null) {
    ctx.fillStyle = COLORS.muted;
    ctx.font = "12px Georgia, serif";
    ctx.fillText(`Best: ${state.bestMoves}`, VW - 16, hy); hy += 16;
  }
  if (state.fails > 0) {
    ctx.fillStyle = COLORS.ghostBad;
    ctx.font = "12px Georgia, serif";
    ctx.fillText(`Falls: ${state.fails}`, VW - 16, hy);
  }

  if (state.message && state.msgTimer > 0) {
    ctx.textAlign = "center";
    ctx.fillStyle = COLORS.text;
    ctx.font = "bold 16px Georgia, serif";
    ctx.fillText(state.message, VW / 2, VH - 44);
  }

  if (state.debug) drawDebug();
}

function drawDebug() {
  const o = getObj(state.grabbedId) || state.objects[0];
  const lines = [];
  if (o) {
    lines.push(`obj ${o.id}: z=${o.z.toFixed(3)}  scale=${depthToScale(o.z).toFixed(3)}`);
    const sp = computeSpan(o);
    lines.push(`span=[${sp.left.toFixed(1)}, ${sp.right.toFixed(1)}] (w=${(sp.right - sp.left).toFixed(1)})`);
  }
  lines.push(`vp=(${state.vp.x.toFixed(0)}, ${state.vp.y.toFixed(0)}) home=(${state.vpHome.x.toFixed(0)},${state.vpHome.y.toFixed(0)})`);
  lines.push(`gap=[${state.gap.left}, ${state.gap.right}]  bridge=${isBridgeComplete()}`);
  ctx.textAlign = "left";
  ctx.font = "12px monospace";
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(10, 54, 360, 16 * lines.length + 10);
  ctx.fillStyle = "#9bff9b";
  lines.forEach((l, i) => ctx.fillText(l, 18, 74 + i * 16));
}

function drawTitle() {
  ctx.fillStyle = "rgba(20,12,30,0.62)";
  ctx.fillRect(0, 0, VW, VH);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.sun;
  ctx.font = "bold 56px Georgia, serif";
  ctx.fillText("VANISHING POINT", VW / 2, VH * 0.20);
  ctx.fillStyle = COLORS.muted;
  ctx.font = "italic 18px Georgia, serif";
  ctx.fillText("Drag objects through depth to grow them into a bridge.", VW / 2, VH * 0.30);
  ctx.fillStyle = COLORS.text;
  ctx.font = "15px Georgia, serif";
  ctx.fillText("A speck near the horizon is tiny — pull it forward and it swells.", VW / 2, VH * 0.365);
  ctx.fillStyle = COLORS.vpHandle;
  ctx.font = "italic 14px Georgia, serif";
  ctx.fillText("...and in the later plazas, even the sun itself can be moved.", VW / 2, VH * 0.42);

  ctx.fillStyle = COLORS.objFore;
  ctx.font = "bold 18px Georgia, serif";
  const resumeName = LEVELS[Math.min(progress.reached, LEVELS.length - 1)].name;
  const verb = progress.reached > 0 ? `Click SELECT a plaza, or press SPACE to resume — ${resumeName}` : "Click a plaza or press SPACE to begin";
  ctx.fillText(verb, VW / 2, VH * 0.50);

  ctx.fillStyle = COLORS.muted;
  ctx.font = "12px Georgia, serif";
  ctx.fillText("SELECT A PLAZA", VW / 2, VH * 0.66);

  // Level-select chips.
  for (let i = 0; i < LEVELS.length; i++) {
    const r = titleChipRect(i);
    const locked = i > progress.reached;
    const sel = i === state.titleSel;
    ctx.fillStyle = locked ? "rgba(40,30,55,0.6)" : (sel ? "rgba(255,210,122,0.30)" : "rgba(106,79,110,0.45)");
    ctx.fillRect(r.x, r.y, r.w, r.h);
    ctx.strokeStyle = sel ? COLORS.sun : (locked ? "rgba(80,64,100,0.6)" : COLORS.vpHandle);
    ctx.lineWidth = sel ? 2.5 : 1;
    ctx.strokeRect(r.x, r.y, r.w, r.h);

    ctx.textAlign = "center";
    ctx.fillStyle = locked ? "rgba(200,180,160,0.4)" : COLORS.text;
    ctx.font = "bold 16px Georgia, serif";
    ctx.fillText(locked ? "🔒" : String(i + 1), r.x + r.w / 2, r.y + 22);
    // per-level best
    const b = progress.best[i];
    ctx.font = "10px Georgia, serif";
    ctx.fillStyle = COLORS.muted;
    if (locked) ctx.fillText("locked", r.x + r.w / 2, r.y + 36);
    else if (typeof b === "number") ctx.fillText(`best ${b}`, r.x + r.w / 2, r.y + 36);
    else ctx.fillText("—", r.x + r.w / 2, r.y + 36);
  }
}

function drawComplete() {
  ctx.fillStyle = "rgba(20,12,30,0.6)";
  ctx.fillRect(0, 0, VW, VH);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.goalTop;
  ctx.font = "bold 48px Georgia, serif";
  ctx.fillText("BRIDGE COMPLETE", VW / 2, VH * 0.4);
  ctx.fillStyle = COLORS.text;
  ctx.font = "20px Georgia, serif";
  ctx.fillText(`Solved in ${state.moves} move${state.moves === 1 ? "" : "s"}`, VW / 2, VH * 0.5);
  if (state.bestMoves !== null) {
    ctx.fillStyle = COLORS.muted;
    ctx.font = "16px Georgia, serif";
    const pb = (state.moves === state.bestMoves) ? "  (new best!)" : "";
    ctx.fillText(`Best: ${state.bestMoves} moves${pb}`, VW / 2, VH * 0.56);
  }
  ctx.fillStyle = COLORS.objFore;
  ctx.font = "bold 18px Georgia, serif";
  const last = state.levelIndex + 1 >= LEVELS.length;
  const label = last ? "Click or SPACE for the closing flourish" : "Click or SPACE for the next plaza";
  ctx.fillText(label, VW / 2, VH * 0.66);
}

function drawWon() {
  ctx.fillStyle = "rgba(20,12,30,0.55)";
  ctx.fillRect(0, 0, VW, VH);
  ctx.textAlign = "center";
  const f = state.winFlourish;
  ctx.fillStyle = COLORS.sun;
  ctx.font = "bold 54px Georgia, serif";
  ctx.fillText("THE PLAZAS ARE CROSSED", VW / 2, VH * 0.34);
  ctx.fillStyle = COLORS.text;
  ctx.font = "italic 20px Georgia, serif";
  ctx.fillText("You bent depth — and infinity itself — into a path.", VW / 2, VH * 0.45);

  // Tally of bests.
  let total = 0, have = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    const b = progress.best[i];
    if (typeof b === "number") { total += b; have++; }
  }
  ctx.fillStyle = COLORS.muted;
  ctx.font = "16px Georgia, serif";
  if (have === LEVELS.length) ctx.fillText(`All ${LEVELS.length} plazas — ${total} moves total at your best`, VW / 2, VH * 0.53);
  ctx.fillStyle = COLORS.objFore;
  ctx.font = "bold 18px Georgia, serif";
  ctx.globalAlpha = 0.6 + 0.4 * Math.sin(state.time * 3) * f;
  ctx.fillText("Click or SPACE to return to the plazas", VW / 2, VH * 0.64);
  ctx.globalAlpha = 1;
}

function render() {
  ctx.clearRect(0, 0, VW, VH);

  // Screen shake (JUICE-02): jitter the whole scene briefly on fail/win.
  ctx.save();
  if (state.shake > 0.2) {
    const s = state.shake;
    ctx.translate((Math.random() - 0.5) * s, (Math.random() - 0.5) * s);
  }

  // Sky + sun first (re-projected with the vanishing point).
  drawSky();

  if (state.screen === TITLE) {
    drawGround();
    drawColonnade();
    drawParticles();
    drawTitle();
    ctx.restore();
    return;
  }

  drawGround();
  drawColonnade();
  drawGap();
  // Painter's order: deep goal first, then near ledge.
  drawGroundSlab(state.goal.left, state.goal.right, COLORS.goal, COLORS.goalTop, "GOAL", state.goal.z);
  drawGroundSlab(state.ledge.left, state.ledge.right, COLORS.ledge, COLORS.ledgeTop, "START", state.ledge.z);

  const ordered = [...state.objects].sort((a, b) => b.z - a.z);
  for (const o of ordered) drawObject(o);

  drawWalker();
  drawVPHandle();
  drawParticles();
  drawHUD();

  if (state.screen === COMPLETE) drawComplete();
  if (state.screen === WON) drawWon();

  ctx.restore();

  // Level-transition fade-in from black (JUICE-03).
  if (state.fade > 0.01) {
    ctx.fillStyle = `rgba(15,10,22,${state.fade})`;
    ctx.fillRect(0, 0, VW, VH);
  }
}

// ---------------------------------------------------------------------------
// Main loop (delta-time)
// ---------------------------------------------------------------------------
let last = performance.now();
function frame(now) {
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.05) dt = 0.05;
  update(dt);
  render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

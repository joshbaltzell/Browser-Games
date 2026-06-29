/*
 * VANISHING POINT — Phase 1 core-mechanic prototype.
 *
 * One-point-perspective puzzle. You do NOT resize objects by hand. You slide
 * them along the DEPTH axis (z): nearer = larger on screen, deeper = smaller.
 * Park a worthless speck near the vanishing point, drag it forward, and watch
 * it swell continuously into the exact platform that spans the gap. Then run
 * the "walk" test to cross.
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

// de Chirico-ish palette (grey-box leaning, hint of the intended tones).
const COLORS = {
  bg: "#0c0916",
  ground: "#2c2238",
  groundLine: "#4a3a5e",
  horizon: "#5a4a72",
  vp: "#ffcf8a",
  ledge: "#6b5a44",
  ledgeTop: "#9a8260",
  goal: "#7bd6a0",
  gap: "#070510",
  objFore: "#ffb25c", // warm (near)
  objBack: "#8b7bd6", // cool (far)
  marker: "#fff4dd",
  text: "#f3ead8",
  muted: "#a892c0",
  ghostGood: "#7bffb0",
  ghostBad: "#ff6f6f",
};

// Screen states.
const TITLE = "title";
const PLAYING = "playing";
const WALKING = "walking";
const COMPLETE = "complete";

// Perspective: where infinity lives.
const HORIZON_Y = VH * 0.34;
const VP = { x: VW * 0.5, y: HORIZON_Y };

// Depth->scale tuning. z=0 is foreground (large), z=1 at the vanishing point.
// scale = NEAR / (NEAR + z*(FAR-NEAR)) gives a smooth hyperbolic shrink with
// no dead zones. Tuned so z=0 ~ 1.0 and z=1 ~ 0.10.
const NEAR = 1.0;
const FAR = 10.0;

// The ground plane footprint: the path runs left->right across the bottom.
// In "path units" the playfield spans 0..PATH_W; the gap sits in the middle.
const PATH_W = 100;

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
  objects: [],
  lanes: [],         // discrete snap depths (z values)
  gap: null,         // {left, right} in path units
  ledge: null,       // {left, right}
  goal: null,        // {left, right}
  grabbedId: null,
  walker: null,      // {x, falling, fallY}
  debug: false,
  bestMoves: null,
  moves: 0,
  message: "",
  msgTimer: 0,
  particles: [],
  time: 0,
};

const BEST_KEY = "vanishing-point.best.moves.L1";
try {
  const v = localStorage.getItem(BEST_KEY);
  if (v !== null) state.bestMoves = parseInt(v, 10);
} catch (e) { /* file:// may block storage; ignore */ }

// ---------------------------------------------------------------------------
// Audio (lazy, file://-safe, resumed on first gesture)
// ---------------------------------------------------------------------------
let audioCtx = null;
function audioUnlock() {
  if (audioCtx) {
    if (audioCtx.state === "suspended") audioCtx.resume();
    return;
  }
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
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
  osc.connect(g).connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + (dur || 0.12) + 0.02);
}
function chordWin() {
  blip(523.25, 0.5, "triangle", 0.16);
  blip(659.25, 0.5, "triangle", 0.13);
  blip(783.99, 0.6, "triangle", 0.12);
}

// ---------------------------------------------------------------------------
// Perspective helpers (pure)
// ---------------------------------------------------------------------------
// Apparent scale multiplier from depth z in [0,1].
function depthToScale(z) {
  const zc = Math.max(0, Math.min(1, z));
  return NEAR / (NEAR + zc * (FAR - NEAR));
}

// Project a point at depth z onto the screen vertically: foreground (z=0) sits
// at the bottom of the play area, the vanishing point (z=1) at the horizon.
// Uses the same hyperbolic curve so vertical motion matches the size change.
function depthToScreenY(z) {
  const s = depthToScale(z);
  // s ranges ~1.0 (near) .. ~0.1 (far). Map s->y so near=bottom, far=horizon.
  const sNear = depthToScale(0);
  const sFar = depthToScale(1);
  const t = (s - sFar) / (sNear - sFar); // 1 near, 0 far
  return HORIZON_Y + (VH * 0.96 - HORIZON_Y) * t;
}

// Convert a path coordinate (0..PATH_W) at depth z to a screen X. The path
// converges toward VP.x as z->1 (perspective), and spans full width at z=0.
function pathToScreenX(pathX, z) {
  const s = depthToScale(z);
  const sNear = depthToScale(0);
  const sFar = depthToScale(1);
  const t = (s - sFar) / (sNear - sFar); // 1 near, 0 far
  // Near: path 0..PATH_W maps across the full lower width with margins.
  const marginNear = VW * 0.06;
  const nearX = marginNear + (pathX / PATH_W) * (VW - 2 * marginNear);
  // Far: everything collapses toward the vanishing point x.
  return VP.x + (nearX - VP.x) * t;
}

// Apparent half-width (in screen px) of an object of given true widthUnits at z.
function apparentHalfWidth(widthUnits, z) {
  // widthUnits is in "path units"; convert to near-plane px then scale by depth.
  const marginNear = VW * 0.06;
  const pxPerUnit = (VW - 2 * marginNear) / PATH_W;
  const nearPx = widthUnits * pxPerUnit;
  // depth attenuation relative to near.
  const sNear = depthToScale(0);
  return (nearPx * depthToScale(z) / sNear) * 0.5;
}

// The path interval [left,right] (in path units) an object covers at depth z.
function computeSpan(obj) {
  // Convert the object's apparent half-width back into path units at its lane
  // center, so the span is comparable to gap/ledge/goal path coordinates.
  const marginNear = VW * 0.06;
  const pxPerUnit = (VW - 2 * marginNear) / PATH_W;
  const halfPx = apparentHalfWidth(obj.widthUnits, obj.z);
  // Map screen px back to path units at the NEAR plane scale (path units are
  // defined on the near plane). halfUnits grows as the object comes forward.
  const halfUnits = halfPx / pxPerUnit;
  return { left: obj.lane - halfUnits, right: obj.lane + halfUnits };
}

// ---------------------------------------------------------------------------
// Level / model
// ---------------------------------------------------------------------------
function loadLevel() {
  // Discrete depth lanes for snapping (CORE-06).
  state.lanes = [0.02, 0.14, 0.3, 0.5, 0.72, 0.9];

  // The path: start ledge on the left, goal on the right, gap in the middle.
  state.ledge = { left: 0, right: 34 };
  state.goal = { left: 66, right: 100 };
  state.gap = { left: 34, right: 66 }; // ~32 path units wide

  // Two grey-box objects. lane = lateral path-center where the object snaps.
  // Object A: a small "speck" parked deep (tiny) but with enough true width
  // that, dragged forward, its footprint spans the whole gap. Centered on gap.
  // Object B: a decoy/secondary mid-depth slab.
  state.objects = [
    {
      id: "A",
      z: 0.9,            // starts near the vanishing point (looks tiny)
      lane: 50,          // centered over the gap
      widthUnits: 64,    // true width; forward it easily spans the 32-unit gap
      height: 26,
      grabbed: false,
      snapEase: null,
    },
    {
      id: "B",
      z: 0.55,
      lane: 18,          // sits over the start ledge area, a red herring here
      widthUnits: 16,
      height: 20,
      grabbed: false,
      snapEase: null,
    },
  ];

  state.grabbedId = null;
  state.walker = null;
  state.moves = 0;
  state.particles = [];
  setMessage("Drag the far speck forward to grow it across the gap.", 5);
}

function setMessage(txt, secs) {
  state.message = txt;
  state.msgTimer = secs || 3;
}

function getObj(id) {
  return state.objects.find((o) => o.id === id);
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

// Hit-test objects by their projected screen rect; nearest (smallest z) first
// so the topmost/forward object wins when they overlap.
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
  const p = canvasToLogical(e.clientX, e.clientY);
  pointerDown = true;

  if (state.screen === TITLE) {
    state.screen = PLAYING;
    loadLevel();
    return;
  }
  if (state.screen === COMPLETE) {
    state.screen = PLAYING;
    loadLevel();
    return;
  }
  if (state.screen !== PLAYING) return;

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
  const o = getObj(state.grabbedId);
  if (!o) return;
  const p = canvasToLogical(e.clientX, e.clientY);
  // Map vertical pointer position to depth: bottom of play area = z 0 (forward,
  // big), horizon = z 1 (far, small). Continuous, clamped, no stepping.
  const yTop = HORIZON_Y + 6;
  const yBot = VH * 0.96;
  let t = (p.y - yTop) / (yBot - yTop); // 0 at horizon, 1 at bottom
  t = Math.max(0, Math.min(1, t));
  o.z = 1 - t; // bottom -> z small (forward); horizon -> z near 1
  o.z = Math.max(0.02, Math.min(0.98, o.z));
}

function onPointerUp() {
  pointerDown = false;
  if (state.screen !== PLAYING) return;
  const o = getObj(state.grabbedId);
  if (o) {
    // Snap z to nearest discrete lane (CORE-06).
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
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    if (state.screen === TITLE) { state.screen = PLAYING; loadLevel(); }
    else if (state.screen === COMPLETE) { state.screen = PLAYING; loadLevel(); }
    else if (state.screen === PLAYING) startWalk();
  }
});

// ---------------------------------------------------------------------------
// Solve / bridge / walk
// ---------------------------------------------------------------------------
// True iff placed footprints + start ledge form a contiguous cover from the
// ledge's right edge across the gap to the goal's left edge (SOLVE-02).
function coverIntervals() {
  // Collect every solid path interval: the ledge, the goal, and each object.
  const ivs = [
    { left: state.ledge.left, right: state.ledge.right },
    { left: state.goal.left, right: state.goal.right },
  ];
  for (const o of state.objects) ivs.push(computeSpan(o));
  return ivs;
}

function isBridgeComplete() {
  const ivs = coverIntervals().sort((a, b) => a.left - b.left);
  const TOL = 1.5; // small allowable break (path units)
  // We need continuous cover from ledge.right .. goal.left.
  let reach = state.ledge.right;
  const target = state.goal.left;
  // Greedy: repeatedly extend reach by any interval that starts within reach+TOL.
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

function footprintTopY(pathX) {
  // Is there a placed object footprint covering pathX? Return its top screen Y,
  // else null. Ledge/goal are at the ground; objects sit slightly raised.
  let best = null;
  for (const o of state.objects) {
    const sp = computeSpan(o);
    if (pathX >= sp.left && pathX <= sp.right) {
      const cy = depthToScreenY(o.z);
      const hh = (o.height * depthToScale(o.z)) / depthToScale(0) * 0.5;
      const topY = cy - hh;
      if (best === null || topY < best) best = topY;
    }
  }
  return best;
}

function groundCovered(pathX) {
  // Ledge and goal are solid ground; objects are bridges.
  if (pathX <= state.ledge.right) return true;
  if (pathX >= state.goal.left) return true;
  const ivs = [];
  for (const o of state.objects) ivs.push(computeSpan(o));
  for (const iv of ivs) if (pathX >= iv.left - 1.5 && pathX <= iv.right + 1.5) return true;
  return false;
}

function startWalk() {
  if (state.screen !== PLAYING) return;
  state.screen = WALKING;
  state.walker = { x: state.ledge.right - 2, falling: false, fallY: 0, vy: 0 };
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
      // Fell into the void — return control, objects stay placed.
      state.screen = PLAYING;
      state.walker = null;
      setMessage("Fell into the gap! Adjust depth and try again.", 4);
      blip(120, 0.3, "sawtooth", 0.12);
    }
    return;
  }
  // Advance along the path.
  w.x += 26 * dt; // path units / sec
  // Footstep ticks.
  if (Math.floor(w.x) !== Math.floor(w.x - 26 * dt)) blip(440, 0.04, "square", 0.06);
  if (w.x >= state.goal.left + 3) {
    // Reached the goal!
    winLevel();
    return;
  }
  if (!groundCovered(w.x)) {
    w.falling = true;
    w.vy = 0;
  }
}

function winLevel() {
  state.screen = COMPLETE;
  state.walker = null;
  chordWin();
  // Best score = fewest moves.
  if (state.bestMoves === null || state.moves < state.bestMoves) {
    state.bestMoves = state.moves;
    try { localStorage.setItem(BEST_KEY, String(state.bestMoves)); } catch (e) {}
  }
  // Sun-flare burst particles.
  for (let i = 0; i < 60; i++) {
    const a = Math.random() * TAU;
    const sp = 60 + Math.random() * 220;
    state.particles.push({
      x: VP.x, y: HORIZON_Y,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      life: 1 + Math.random(), max: 1.5,
    });
  }
}

// ---------------------------------------------------------------------------
// Update
// ---------------------------------------------------------------------------
function update(dt) {
  state.time += dt;
  if (state.msgTimer > 0) state.msgTimer -= dt;

  for (const o of state.objects) {
    if (o.snapEase) {
      o.snapEase.t += dt * 8;
      if (o.snapEase.t >= 1) { o.z = o.snapEase.to; o.snapEase = null; }
      else o.z = o.snapEase.from + (o.snapEase.to - o.snapEase.from) * o.snapEase.t;
    }
  }

  if (state.screen === WALKING) updateWalk(dt);

  // Particles.
  for (const p of state.particles) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 40 * dt;
    p.life -= dt;
  }
  state.particles = state.particles.filter((p) => p.life > 0);

  // Ambient dust drift only when there are few particles (cheap).
  if (state.screen !== TITLE && state.particles.length < 18 && Math.random() < 0.3) {
    state.particles.push({
      x: Math.random() * VW, y: HORIZON_Y + Math.random() * (VH - HORIZON_Y),
      vx: (Math.random() - 0.5) * 8, vy: -4 - Math.random() * 6,
      life: 2 + Math.random() * 2, max: 4, dust: true,
    });
  }
}

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------
function depthColor(z) {
  // Doppler tint: warm (near) -> cool (far). Lerp objFore..objBack by z.
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

function drawGround() {
  // Ground plane fill below horizon.
  ctx.fillStyle = COLORS.ground;
  ctx.fillRect(0, HORIZON_Y, VW, VH - HORIZON_Y);

  // Converging guide lines from the bottom edge to the VP.
  ctx.strokeStyle = COLORS.groundLine;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 10; i++) {
    const x = (i / 10) * VW;
    ctx.beginPath();
    ctx.moveTo(x, VH);
    ctx.lineTo(VP.x, VP.y);
    ctx.stroke();
  }
  // Depth gridlines (horizontal-ish rows at the lane depths).
  ctx.strokeStyle = "rgba(120,100,150,0.25)";
  for (const z of state.lanes) {
    const y = depthToScreenY(z);
    const xl = pathToScreenX(0, z);
    const xr = pathToScreenX(PATH_W, z);
    ctx.beginPath();
    ctx.moveTo(xl, y);
    ctx.lineTo(xr, y);
    ctx.stroke();
  }

  // Horizon line.
  ctx.strokeStyle = COLORS.horizon;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, HORIZON_Y);
  ctx.lineTo(VW, HORIZON_Y);
  ctx.stroke();

  // Vanishing point marker.
  ctx.fillStyle = COLORS.vp;
  ctx.beginPath();
  ctx.arc(VP.x, VP.y, 4, 0, TAU);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,207,138,0.4)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(VP.x, VP.y, 9 + Math.sin(state.time * 2) * 2, 0, TAU);
  ctx.stroke();
}

// Draw a path interval as a slab on the ground at depth z (used for ledge/goal).
function drawGroundSlab(left, right, color, label) {
  // Ledge/goal sit at the FOREGROUND plane (z near 0) so they read as solid.
  const z = 0.06;
  const y = depthToScreenY(z);
  const xl = pathToScreenX(left, z);
  const xr = pathToScreenX(right, z);
  const h = 60;
  ctx.fillStyle = color;
  ctx.fillRect(xl, y - 6, xr - xl, h);
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.fillRect(xl, y - 6, xr - xl, 6);
  if (label) {
    ctx.fillStyle = COLORS.text;
    ctx.font = "bold 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, (xl + xr) / 2, y + 28);
  }
}

function drawGap() {
  const z = 0.06;
  const y = depthToScreenY(z);
  const xl = pathToScreenX(state.gap.left, z);
  const xr = pathToScreenX(state.gap.right, z);
  ctx.fillStyle = COLORS.gap;
  ctx.fillRect(xl, y - 6, xr - xl, VH - (y - 6));
  // jagged inner edge hint
  ctx.strokeStyle = "rgba(255,80,80,0.25)";
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(xl, y - 6); ctx.lineTo(xl, VH); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(xr, y - 6); ctx.lineTo(xr, VH); ctx.stroke();
}

function drawObject(o) {
  const cx = pathToScreenX(o.lane, o.z);
  const cy = depthToScreenY(o.z);
  const hw = apparentHalfWidth(o.widthUnits, o.z);
  const hh = (o.height * depthToScale(o.z)) / depthToScale(0) * 0.5;
  const col = depthColor(o.z);

  // shadow toward VP
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.beginPath();
  ctx.ellipse(cx, cy + hh, hw * 1.05, Math.max(3, hh * 0.4), 0, 0, TAU);
  ctx.fill();

  ctx.fillStyle = col;
  ctx.fillRect(cx - hw, cy - hh, hw * 2, hh * 2);
  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.fillRect(cx - hw, cy - hh, hw * 2, Math.max(2, hh * 0.4));
  ctx.strokeStyle = o.grabbed ? "#fff" : "rgba(0,0,0,0.35)";
  ctx.lineWidth = o.grabbed ? 2 : 1;
  ctx.strokeRect(cx - hw, cy - hh, hw * 2, hh * 2);

  // While grabbed: ghost span readout vs gap (JUICE-01 precursor).
  if (o.grabbed) {
    const sp = computeSpan(o);
    const spans = isBridgeComplete();
    const z = 0.06;
    const gy = depthToScreenY(z) - 12;
    const gxl = pathToScreenX(Math.max(0, sp.left), z);
    const gxr = pathToScreenX(Math.min(PATH_W, sp.right), z);
    ctx.fillStyle = spans ? "rgba(123,255,176,0.25)" : "rgba(255,111,111,0.22)";
    ctx.fillRect(gxl, gy, gxr - gxl, 8);
  }
}

function drawWalker() {
  const w = state.walker;
  if (!w) return;
  const z = 0.06;
  let y = depthToScreenY(z) - 8;
  // sit on the footprint top if there is one
  const top = footprintTopY(w.x);
  if (top !== null && !w.falling) y = top - 8;
  if (w.falling) y += w.fallY;
  const x = pathToScreenX(w.x, z);
  ctx.fillStyle = COLORS.marker;
  ctx.beginPath();
  ctx.arc(x, y - 10, 9, 0, TAU);
  ctx.fill();
  ctx.fillRect(x - 4, y - 4, 8, 16);
}

function drawParticles() {
  for (const p of state.particles) {
    const a = p.dust ? 0.25 * (p.life / p.max) : Math.max(0, p.life / p.max);
    ctx.fillStyle = p.dust ? `rgba(255,230,180,${a})` : `rgba(255,200,120,${a})`;
    ctx.fillRect(p.x, p.y, p.dust ? 2 : 3, p.dust ? 2 : 3);
  }
}

function drawHUD() {
  ctx.textAlign = "left";
  ctx.fillStyle = COLORS.muted;
  ctx.font = "12px system-ui, sans-serif";
  ctx.fillText("Drag a block up/down to move it in depth  •  SPACE = walk  •  R = reset  •  D = debug", 16, VH - 14);

  ctx.textAlign = "right";
  ctx.fillStyle = COLORS.text;
  ctx.font = "bold 13px system-ui, sans-serif";
  ctx.fillText(`Moves: ${state.moves}`, VW - 16, 24);
  if (state.bestMoves !== null) {
    ctx.fillStyle = COLORS.muted;
    ctx.fillText(`Best: ${state.bestMoves}`, VW - 16, 42);
  }

  if (state.message && state.msgTimer > 0) {
    ctx.textAlign = "center";
    ctx.fillStyle = COLORS.text;
    ctx.font = "bold 16px system-ui, sans-serif";
    ctx.fillText(state.message, VW / 2, HORIZON_Y - 18);
  }

  if (state.debug) drawDebug();
}

function drawDebug() {
  const o = getObj(state.grabbedId) || state.objects[0];
  const lines = [];
  if (o) {
    lines.push(`obj ${o.id}: z=${o.z.toFixed(3)}  scale=${depthToScale(o.z).toFixed(3)}`);
    const sp = computeSpan(o);
    lines.push(`span=[${sp.left.toFixed(1)}, ${sp.right.toFixed(1)}] (w=${(sp.right - sp.left).toFixed(1)} units)`);
  }
  lines.push(`gap=[${state.gap.left}, ${state.gap.right}] (w=${state.gap.right - state.gap.left})`);
  lines.push(`bridgeComplete=${isBridgeComplete()}`);
  ctx.textAlign = "left";
  ctx.font = "12px monospace";
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(10, 54, 320, 16 * lines.length + 10);
  ctx.fillStyle = "#9bff9b";
  lines.forEach((l, i) => ctx.fillText(l, 18, 74 + i * 16));
}

function drawTitle() {
  ctx.fillStyle = "rgba(10,7,18,0.78)";
  ctx.fillRect(0, 0, VW, VH);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.vp;
  ctx.font = "bold 56px system-ui, sans-serif";
  ctx.fillText("VANISHING POINT", VW / 2, VH * 0.38);
  ctx.fillStyle = COLORS.muted;
  ctx.font = "18px system-ui, sans-serif";
  ctx.fillText("Drag objects through depth to grow them into a bridge.", VW / 2, VH * 0.48);
  ctx.fillStyle = COLORS.text;
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillText("A speck near the horizon is tiny — pull it forward and it swells.", VW / 2, VH * 0.55);
  ctx.fillStyle = COLORS.objFore;
  ctx.font = "bold 20px system-ui, sans-serif";
  ctx.fillText("Click or press SPACE to begin", VW / 2, VH * 0.66);
}

function drawComplete() {
  ctx.fillStyle = "rgba(10,7,18,0.6)";
  ctx.fillRect(0, 0, VW, VH);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.goal;
  ctx.font = "bold 48px system-ui, sans-serif";
  ctx.fillText("BRIDGE COMPLETE", VW / 2, VH * 0.4);
  ctx.fillStyle = COLORS.text;
  ctx.font = "20px system-ui, sans-serif";
  ctx.fillText(`Solved in ${state.moves} move${state.moves === 1 ? "" : "s"}`, VW / 2, VH * 0.5);
  if (state.bestMoves !== null) {
    ctx.fillStyle = COLORS.muted;
    ctx.font = "16px system-ui, sans-serif";
    ctx.fillText(`Best: ${state.bestMoves} moves`, VW / 2, VH * 0.56);
  }
  ctx.fillStyle = COLORS.objFore;
  ctx.font = "bold 18px system-ui, sans-serif";
  ctx.fillText("Click or press SPACE to play again", VW / 2, VH * 0.66);
}

function render() {
  ctx.clearRect(0, 0, VW, VH);
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, VW, VH);

  if (state.screen === TITLE) {
    drawGround();
    drawParticles();
    drawTitle();
    return;
  }

  drawGround();
  drawGroundSlab(state.ledge.left, state.ledge.right, COLORS.ledge, "START");
  drawGroundSlab(state.goal.left, state.goal.right, COLORS.goal, "GOAL");
  drawGap();

  // Painter's order: deepest (largest z) first.
  const ordered = [...state.objects].sort((a, b) => b.z - a.z);
  for (const o of ordered) drawObject(o);

  drawWalker();
  drawParticles();
  drawHUD();

  if (state.screen === COMPLETE) drawComplete();
}

// ---------------------------------------------------------------------------
// Main loop (delta-time)
// ---------------------------------------------------------------------------
let last = performance.now();
function frame(now) {
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.05) dt = 0.05; // clamp big stalls
  update(dt);
  render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

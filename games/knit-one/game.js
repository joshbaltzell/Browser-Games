/*
 * KNIT ONE — Phase 1: Core Mechanic Prototype
 * ============================================
 * You are a single continuous thread. Steer the HEAD with the mouse; segments
 * pay out behind it as a verlet-integrated rope (finite yarn). Wrap the rope
 * around the wooden peg, loop the head back through its own bight, and press
 * SPACE to CINCH — that bakes a stiff constraint into the crossing so the loop
 * can't slide open. A cinched loop around the peg honestly bears the weight; a
 * loose, un-cinched loop opens under load and the weight slips through and
 * falls. The catch is emergent rope tension, not a scripted snap-to-net.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no fetch — visuals and
 * audio are generated in code so it runs straight from file://.
 *
 * Sections: Constants -> Canvas/state -> Persistence -> Audio -> Input ->
 *   Rope model -> Physics -> Crossings & knots -> Weight -> Room -> Update ->
 *   Render -> Main loop.
 */

"use strict";

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;

// Fixed logical play area. Canvas scales to fit while keeping this aspect.
const VW = 900;
const VH = 640;

// Verlet rope
const SEG_LEN = 16;          // rest length of one rope segment
const GRAVITY = 1300;        // px/s^2, applied to rope nodes
const DAMP = 0.86;           // verlet velocity damping
const ITER = 24;             // constraint relaxation iterations per frame
const MAX_DT = 1 / 30;       // clamp big frame gaps so the sim stays stable

// Yarn budget is measured in segment-lengths (number of nodes we may spawn).
const START_YARN = 120;

// Weight body
const WEIGHT_R = 22;
const WEIGHT_GRAVITY = 1700;
const WEIGHT_DAMP = 0.90;

// A loop is considered "cinched" when SPACE is pressed and the head segment is
// currently crossing an earlier segment (a closed bight exists).
const KNOT_REST = 4;         // cinched crossing pulls the two points this close
const KNOT_STIFF = 1.0;      // fully stiff — a real knot doesn't creep

// Win: weight must rest (held, slow) for this long.
const HOLD_TO_WIN = 2.0;

const COLORS = {
  bg0: "#241f18",
  bg1: "#1a160f",
  grid: "#2e2820",
  thread: "#d98c6a",        // dusty-rose / clay yarn (hint of final palette)
  threadStrain: "#e8d24a",  // mustard — strained
  threadSnap: "#c95b4a",    // about to fail
  peg: "#7c5a36",           // wooden button
  pegRim: "#a37a48",
  pegEye: "#3a2a18",
  anchor: "#c7a86b",
  weight: "#6e7f5a",        // forest felt ball
  weightRim: "#90a378",
  yarnBall: "#d98c6a",
  yarnBack: "#3a322763",
  text: "#efe4cf",
  textDim: "#a89madeup",    // (placeholder fixed below)
  good: "#9ed27a",
  bad: "#c95b4a",
  panel: "rgba(20,16,11,0.82)",
};
COLORS.textDim = "#a8987a";

// ----------------------------------------------------------------------------
// Canvas & global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let scale = 1;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const availW = window.innerWidth - 24;
  const availH = window.innerHeight - 24;
  scale = Math.min(availW / VW, availH / VH);
  scale = Math.max(0.2, scale);
  canvas.style.width = VW * scale + "px";
  canvas.style.height = VH * scale + "px";
  canvas.width = Math.round(VW * dpr);
  canvas.height = Math.round(VH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);

// Screen states: routed through a tiny machine so later phases plug in cleanly.
const TITLE = "TITLE", PLAY = "PLAY", ROOM_COMPLETE = "ROOM_COMPLETE",
      GAME_COMPLETE = "GAME_COMPLETE";
let state = TITLE;
function setState(s) { state = s; }

let DEBUG = false;

// Rope / world state (initialised in resetRoom)
let nodes;          // [{x,y,px,py,pinned}]
let crossings;      // [{a,b,over}]  a,b = segment start-node indices
let knots;          // [{i,j,rest}]  stiff constraints between two node indices
let pegs;           // [{x,y,r}]
let anchor;         // {x,y}
let weight;         // {x,y,px,py}
let yarn;           // remaining yarn budget (segment-lengths)
let yarnStart;      // budget at room start (for HUD scaling)
let holdTimer;      // seconds the weight has been held
let weightState;    // "FALLING" | "HELD" | "DROPPED"
let lastSpawnX, lastSpawnY; // where we last paid out a node

// Input
let pointer = { x: VW * 0.3, y: VH * 0.4, down: false, active: false };
let underToggle = false; // hold Shift => new crossing goes UNDER

// Best record
let bestYarnUsed; // least yarn used to win, persisted

// ----------------------------------------------------------------------------
// Persistence
// ----------------------------------------------------------------------------
const BEST_KEY = "knit-one-best-yarn";
function loadBest() {
  try {
    const v = parseInt(localStorage.getItem(BEST_KEY) || "0", 10);
    return Number.isFinite(v) && v > 0 ? v : 0;
  } catch (e) { return 0; }
}
function saveBest(v) {
  try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) {}
}
bestYarnUsed = loadBest();

// ----------------------------------------------------------------------------
// Audio — lazily created & resumed on first gesture (file://-safe). Phase 1
// only needs the gated context + a soft needle-click on cinch; the music-box
// lullaby is a later phase.
// ----------------------------------------------------------------------------
let audioCtx = null;
let audioReady = false;
let muted = false;

function ensureAudio() {
  if (audioReady) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) {
      audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
      audioReady = true;
    }
  } catch (e) { audioCtx = null; }
}

// Soft needle-click: a tiny filtered noise tick.
function sndClick() {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(700, now + 0.05);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.13, now + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
    osc.connect(g).connect(audioCtx.destination);
    osc.start(now); osc.stop(now + 0.1);
  } catch (e) {}
}
function sndWin() {
  if (muted || !audioCtx) return;
  try {
    [523, 659, 784].forEach((f, i) => {
      const now = audioCtx.currentTime + i * 0.11;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc.connect(g).connect(audioCtx.destination);
      osc.start(now); osc.stop(now + 0.32);
    });
  } catch (e) {}
}
function sndDrop() {
  if (muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.4);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.14, now + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    osc.connect(g).connect(audioCtx.destination);
    osc.start(now); osc.stop(now + 0.47);
  } catch (e) {}
}

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
function canvasPoint(e) {
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) / r.width * VW,
    y: (e.clientY - r.top) / r.height * VH,
  };
}

canvas.addEventListener("pointerdown", (e) => {
  ensureAudio();
  if (state === TITLE) { startRoom(); return; }
  if (state === ROOM_COMPLETE || state === GAME_COMPLETE) { startRoom(); return; }
  const p = canvasPoint(e);
  pointer.x = p.x; pointer.y = p.y;
  pointer.down = true; pointer.active = true;
  try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
});
canvas.addEventListener("pointermove", (e) => {
  const p = canvasPoint(e);
  pointer.x = p.x; pointer.y = p.y;
  pointer.active = true;
});
window.addEventListener("pointerup", () => { pointer.down = false; });
window.addEventListener("blur", () => { pointer.down = false; });

window.addEventListener("keydown", (e) => {
  if (e.key === "Shift") underToggle = true;
  if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," ","Spacebar"].includes(e.key)) e.preventDefault();
  if (e.repeat) return;
  ensureAudio();

  if (state === TITLE) {
    if (e.key === "Enter" || e.key === " ") startRoom();
    return;
  }
  if (state === ROOM_COMPLETE || state === GAME_COMPLETE) {
    if (e.key === "Enter" || e.key === " ") startRoom();
    return;
  }
  // PLAY
  if (e.key === " " || e.key === "Spacebar") { tryCinch(); return; }
  if (e.key === "r" || e.key === "R") { startRoom(); return; }
  if (e.key === "m" || e.key === "M") { muted = !muted; return; }
  if (e.key === "`") { DEBUG = !DEBUG; return; }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "Shift") underToggle = false;
});

// Keyboard steering fallback (when not dragging with the mouse).
const keys = new Set();
window.addEventListener("keydown", (e) => keys.add(e.key));
window.addEventListener("keyup", (e) => keys.delete(e.key));

// ----------------------------------------------------------------------------
// Rope model
// ----------------------------------------------------------------------------
function head() { return nodes[nodes.length - 1]; }

function addNode(x, y, pinned) {
  nodes.push({ x, y, px: x, py: y, pinned: !!pinned });
}

// Pay out a new segment if the head has travelled ~SEG_LEN and yarn remains.
function payOut() {
  if (yarn <= 0) return;
  const h = head();
  const dx = h.x - lastSpawnX, dy = h.y - lastSpawnY;
  const d = Math.hypot(dx, dy);
  if (d >= SEG_LEN) {
    // Insert a node behind the head at the last-spawn point, keep head as head.
    // Simpler: spawn a fresh head node at the pointer and freeze old head.
    addNode(h.x, h.y, false);
    lastSpawnX = h.x; lastSpawnY = h.y;
    yarn--;
  }
}

// ----------------------------------------------------------------------------
// Physics: verlet integrate + relax distance constraints + peg/knot contacts
// ----------------------------------------------------------------------------
function integrate(dt) {
  const g = GRAVITY * dt * dt;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.pinned) { n.px = n.x; n.py = n.y; continue; }
    const vx = (n.x - n.px) * DAMP;
    const vy = (n.y - n.py) * DAMP;
    n.px = n.x; n.py = n.y;
    n.x += vx;
    n.y += vy + g;
  }
}

function satisfyConstraints() {
  const h = head();
  // The head is "steered" — when dragging, it's pulled hard toward the pointer.
  for (let it = 0; it < ITER; it++) {
    // Distance constraints between consecutive nodes.
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i], b = nodes[i + 1];
      let dx = b.x - a.x, dy = b.y - a.y;
      let d = Math.hypot(dx, dy) || 0.0001;
      const diff = (d - SEG_LEN) / d;
      const aw = a.pinned ? 0 : 0.5;
      const bw = b.pinned ? 0 : 0.5;
      const tw = aw + bw || 1;
      const mx = dx * diff, my = dy * diff;
      a.x += mx * (aw / tw); a.y += my * (aw / tw);
      b.x -= mx * (bw / tw); b.y -= my * (bw / tw);
    }
    // Knot constraints: stiff short links binding two crossing nodes.
    for (let k = 0; k < knots.length; k++) {
      const kn = knots[k];
      const a = nodes[kn.i], b = nodes[kn.j];
      if (!a || !b) continue;
      let dx = b.x - a.x, dy = b.y - a.y;
      let d = Math.hypot(dx, dy) || 0.0001;
      const diff = ((d - kn.rest) / d) * KNOT_STIFF;
      const aw = a.pinned ? 0 : 0.5;
      const bw = b.pinned ? 0 : 0.5;
      const tw = aw + bw || 1;
      const mx = dx * diff, my = dy * diff;
      a.x += mx * (aw / tw); a.y += my * (aw / tw);
      b.x -= mx * (bw / tw); b.y -= my * (bw / tw);
    }
    // Peg contacts: no node may be inside a peg; push to its surface.
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.pinned) continue;
      for (let p = 0; p < pegs.length; p++) {
        const pg = pegs[p];
        let dx = n.x - pg.x, dy = n.y - pg.y;
        let d = Math.hypot(dx, dy);
        const minD = pg.r + 2;
        if (d < minD) {
          if (d < 0.0001) { dx = 1; dy = 0; d = 1; }
          n.x = pg.x + dx / d * minD;
          n.y = pg.y + dy / d * minD;
        }
      }
    }
    // Steer the head toward the pointer while dragging (strong attraction so
    // payout tracks the cursor). The head is never pinned, so tension still
    // pulls back on the chain behind it.
    if (state === PLAY && pointer.down) {
      h.x += (pointer.x - h.x) * 0.5;
      h.y += (pointer.y - h.y) * 0.5;
    }
    // Re-pin pinned nodes (node 0 = anchor).
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].pinned) { nodes[i].x = anchor.x; nodes[i].y = anchor.y; }
    }
    // Keep nodes on screen-ish (soft floor so a dropped weight is obvious but
    // the rope doesn't fly away).
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.y > VH + 200) n.y = VH + 200;
    }
  }
}

// ----------------------------------------------------------------------------
// Crossings & knots
// ----------------------------------------------------------------------------
// 2D segment-segment intersection. Returns true if [p1,p2] crosses [p3,p4].
function segIntersect(p1, p2, p3, p4) {
  const d1x = p2.x - p1.x, d1y = p2.y - p1.y;
  const d2x = p4.x - p3.x, d2y = p4.y - p3.y;
  const denom = d1x * d2y - d1y * d2x;
  if (Math.abs(denom) < 1e-6) return false;
  const t = ((p3.x - p1.x) * d2y - (p3.y - p1.y) * d2x) / denom;
  const u = ((p3.x - p1.x) * d1y - (p3.y - p1.y) * d1x) / denom;
  return t > 0.02 && t < 0.98 && u > 0.02 && u < 0.98;
}

// Each frame, test the head's most-recent few segments against earlier,
// non-adjacent segments. Record fresh crossings (deduped) with an over/under
// flag from the toggle. Returns the index of the most recent live crossing.
function detectCrossings() {
  const N = nodes.length;
  if (N < 4) return -1;
  // Only test the last couple of segments (the "head" segments) for new work.
  const headStart = Math.max(0, N - 3);
  let recent = -1;
  for (let i = headStart; i < N - 1; i++) {
    const a1 = nodes[i], a2 = nodes[i + 1];
    for (let j = 0; j < i - 1; j++) {
      // skip adjacency
      if (Math.abs(i - j) < 2) continue;
      const b1 = nodes[j], b2 = nodes[j + 1];
      if (segIntersect(a1, a2, b1, b2)) {
        // dedupe: same (i,j) pair already recorded?
        const exists = crossings.some(c => c.a === i && c.b === j);
        if (!exists) {
          crossings.push({ a: i, b: j, over: !underToggle });
        }
        recent = crossings.length - 1;
      }
    }
  }
  return recent;
}

// CINCH: if the head currently forms a closed bight (its recent segment crosses
// an earlier segment AND the rope wraps a peg between them), bake a stiff knot
// constraint pinning the two crossing node-pairs together so the loop can't
// slide open. Honest: it's just a tight distance constraint that survives load.
function tryCinch() {
  // Find a live crossing involving a head segment.
  const N = nodes.length;
  if (N < 6) { return; }
  let chosen = null;
  for (let ci = crossings.length - 1; ci >= 0; ci--) {
    const c = crossings[ci];
    // crossing must involve a recent head segment and an earlier one with
    // enough rope between them to enclose a loop.
    if (c.a >= N - 4 && (c.a - c.b) >= 4) { chosen = c; break; }
  }
  if (!chosen) {
    // Be forgiving: if the head is simply near an earlier node forming a small
    // closed loop around a peg, allow a cinch there too.
    chosen = findLoopAroundPeg();
  }
  if (!chosen) return;

  // Avoid stacking duplicate knots on the same pair.
  const dup = knots.some(k => k.i === chosen.a && k.j === chosen.b);
  if (dup) return;

  knots.push({ i: chosen.a + 1, j: chosen.b, rest: KNOT_REST });
  spawnWisps(nodes[chosen.b].x, nodes[chosen.b].y);
  sndClick();
}

// Looks for the head being close to an earlier node such that a peg sits
// inside the enclosed loop — a wrap-and-tuck that should cinch.
function findLoopAroundPeg() {
  const N = nodes.length;
  const h = head();
  for (let j = 0; j < N - 5; j++) {
    const d = Math.hypot(nodes[j].x - h.x, nodes[j].y - h.y);
    if (d < SEG_LEN * 2.2) {
      // Is a peg enclosed by the span j..N-1? Cheap test: peg roughly inside
      // the bounding loop and the rope wraps past it.
      for (let p = 0; p < pegs.length; p++) {
        if (loopWrapsPeg(j, N - 1, pegs[p])) {
          return { a: N - 2, b: j, over: !underToggle };
        }
      }
    }
  }
  return null;
}

// Does the polyline nodes[i..k] (closed by the chord k->i) wind around the peg?
// Approximate by summed signed angle subtended at the peg center > ~PI.
function loopWrapsPeg(i, k, peg) {
  let total = 0;
  let prevAng = null;
  for (let n = i; n <= k; n++) {
    const ang = Math.atan2(nodes[n].y - peg.y, nodes[n].x - peg.x);
    if (prevAng !== null) {
      let d = ang - prevAng;
      while (d > Math.PI) d -= TAU;
      while (d < -Math.PI) d += TAU;
      total += d;
    }
    prevAng = ang;
  }
  return Math.abs(total) > Math.PI * 1.1;
}

// ----------------------------------------------------------------------------
// Weight body — a heavy circle that collides with rope segments.
// ----------------------------------------------------------------------------
function integrateWeight(dt) {
  const g = WEIGHT_GRAVITY * dt * dt;
  const vx = (weight.x - weight.px) * WEIGHT_DAMP;
  const vy = (weight.y - weight.py) * WEIGHT_DAMP;
  weight.px = weight.x; weight.py = weight.y;
  weight.x += vx;
  weight.y += vy + g;
}

// Closest point on segment [a,b] to point p.
function closestOnSeg(p, a, b) {
  const abx = b.x - a.x, aby = b.y - a.y;
  const apx = p.x - a.x, apy = p.y - a.y;
  const len2 = abx * abx + aby * aby || 0.0001;
  let t = (apx * abx + apy * aby) / len2;
  t = Math.max(0, Math.min(1, t));
  return { x: a.x + abx * t, y: a.y + aby * t, t };
}

// Resolve weight-vs-rope: push the weight out of any segment it overlaps, and
// push the rope nodes down a bit (so the rope sags & bears the load honestly).
function collideWeightRope() {
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i], b = nodes[i + 1];
    const cp = closestOnSeg(weight, a, b);
    let dx = weight.x - cp.x, dy = weight.y - cp.y;
    let d = Math.hypot(dx, dy);
    const minD = WEIGHT_R + 3;
    if (d < minD) {
      if (d < 0.0001) { dx = 0; dy = -1; d = 1; }
      const nx = dx / d, ny = dy / d;
      const pen = minD - d;
      // Push weight out (mostly), push rope in (a little) -> the rope holds it.
      weight.x += nx * pen * 0.7;
      weight.y += ny * pen * 0.7;
      // Distribute reaction onto the two nodes (weighted by t).
      const wA = (1 - cp.t), wB = cp.t;
      if (!a.pinned) { a.x -= nx * pen * 0.18 * wA; a.y -= ny * pen * 0.18 * wA; }
      if (!b.pinned) { b.x -= nx * pen * 0.18 * wB; b.y -= ny * pen * 0.18 * wB; }
    }
  }
  // Weight also can't pass through pegs.
  for (let p = 0; p < pegs.length; p++) {
    const pg = pegs[p];
    let dx = weight.x - pg.x, dy = weight.y - pg.y, d = Math.hypot(dx, dy);
    const minD = pg.r + WEIGHT_R;
    if (d < minD) {
      if (d < 0.0001) { dx = 0; dy = -1; d = 1; }
      weight.x = pg.x + dx / d * minD;
      weight.y = pg.y + dy / d * minD;
    }
  }
}

// ----------------------------------------------------------------------------
// Particles — minimal fiber wisps (used on cinch; a fuller system is Phase 2).
// ----------------------------------------------------------------------------
let particles = [];
function spawnWisps(x, y) {
  for (let i = 0; i < 10; i++) {
    const a = Math.random() * TAU, s = 30 + Math.random() * 70;
    particles.push({
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 20,
      life: 0.5 + Math.random() * 0.4, max: 0.9,
    });
  }
}
function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= dt;
    if (p.life <= 0) { particles.splice(i, 1); continue; }
    p.x += p.vx * dt; p.y += p.vy * dt;
    p.vy += 200 * dt;
  }
}

// ----------------------------------------------------------------------------
// Room setup
// ----------------------------------------------------------------------------
function startRoom() {
  setState(PLAY);
  resetRoom();
}

function resetRoom() {
  // Grey-box room: anchor top-left, one peg centre, a weight that drops in.
  anchor = { x: VW * 0.16, y: VH * 0.22 };
  pegs = [{ x: VW * 0.52, y: VH * 0.42, r: 26 }];
  weight = {
    x: VW * 0.52, y: -40,
    px: VW * 0.52, py: -50,
  };
  nodes = [];
  crossings = [];
  knots = [];
  particles = [];
  yarn = START_YARN;
  yarnStart = START_YARN;
  holdTimer = 0;
  weightState = "FALLING";

  // Seed the thread: anchor (pinned) + a short tail so the head can be steered.
  addNode(anchor.x, anchor.y, true);
  addNode(anchor.x + 8, anchor.y + 8, false);
  lastSpawnX = anchor.x + 8; lastSpawnY = anchor.y + 8;
  pointer.x = anchor.x + 40; pointer.y = anchor.y + 40;
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function keyboardSteer(dt) {
  if (pointer.down) return; // mouse drag has priority
  let dx = 0, dy = 0;
  if (keys.has("ArrowLeft") || keys.has("a")) dx -= 1;
  if (keys.has("ArrowRight") || keys.has("d")) dx += 1;
  if (keys.has("ArrowUp") || keys.has("w")) dy -= 1;
  if (keys.has("ArrowDown") || keys.has("s")) dy += 1;
  if (dx || dy) {
    const sp = 300 * dt;
    pointer.x += dx * sp; pointer.y += dy * sp;
    pointer.x = Math.max(0, Math.min(VW, pointer.x));
    pointer.y = Math.max(0, Math.min(VH, pointer.y));
    pointer.down = true; // treat keyboard as a held steer for this frame
    payOutAndSteerKeyboardFlag = true;
  }
}
let payOutAndSteerKeyboardFlag = false;

function update(dt) {
  if (state !== PLAY) { updateParticles(dt); return; }

  // Keyboard steering: emulate a held pointer toward a moving target.
  payOutAndSteerKeyboardFlag = false;
  keyboardSteer(dt);

  // Pay out yarn as the head moves (only while actively steering).
  if (pointer.down) payOut();

  integrate(dt);
  satisfyConstraints();
  detectCrossings();

  // Weight physics + collision (run a few sub-iterations for stability).
  integrateWeight(dt);
  for (let s = 0; s < 4; s++) collideWeightRope();

  // Reset the keyboard-held flag so it doesn't stick.
  if (payOutAndSteerKeyboardFlag) pointer.down = false;

  // Evaluate weight state honestly from its motion & position.
  const speed = Math.hypot(weight.x - weight.px, weight.y - weight.py) / Math.max(dt, 1e-3);
  const onScreen = weight.y < VH - 10;
  if (weight.y > VH + 120) {
    if (weightState !== "DROPPED") { weightState = "DROPPED"; sndDrop(); }
  } else if (onScreen && speed < 40 && weight.y < VH - WEIGHT_R - 4) {
    weightState = "HELD";
  } else {
    if (weightState !== "DROPPED") weightState = "FALLING";
  }

  // Win: held & calm for HOLD_TO_WIN seconds, above the floor.
  if (weightState === "HELD") {
    holdTimer += dt;
    if (holdTimer >= HOLD_TO_WIN) {
      const used = yarnStart - yarn;
      if (bestYarnUsed === 0 || used < bestYarnUsed) {
        bestYarnUsed = used; saveBest(used);
      }
      sndWin();
      setState(ROOM_COMPLETE);
    }
  } else {
    holdTimer = Math.max(0, holdTimer - dt * 2);
  }

  updateParticles(dt);
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function clearBg() {
  const g = ctx.createLinearGradient(0, 0, 0, VH);
  g.addColorStop(0, COLORS.bg0);
  g.addColorStop(1, COLORS.bg1);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, VW, VH);
  // faint grid to read the grey-box space
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x <= VW; x += 40) { ctx.moveTo(x, 0); ctx.lineTo(x, VH); }
  for (let y = 0; y <= VH; y += 40) { ctx.moveTo(0, y); ctx.lineTo(VW, y); }
  ctx.stroke();
}

function drawPeg(pg) {
  // wooden button base
  ctx.fillStyle = COLORS.peg;
  ctx.beginPath(); ctx.arc(pg.x, pg.y, pg.r, 0, TAU); ctx.fill();
  ctx.lineWidth = 3; ctx.strokeStyle = COLORS.pegRim;
  ctx.beginPath(); ctx.arc(pg.x, pg.y, pg.r - 2, 0, TAU); ctx.stroke();
  // stitched X eyes (two button holes)
  ctx.strokeStyle = COLORS.pegEye; ctx.lineWidth = 2.5;
  const o = pg.r * 0.34;
  [[-o, 0], [o, 0]].forEach(([cx]) => {
    ctx.beginPath();
    ctx.moveTo(pg.x + cx - 4, pg.y - 4); ctx.lineTo(pg.x + cx + 4, pg.y + 4);
    ctx.moveTo(pg.x + cx + 4, pg.y - 4); ctx.lineTo(pg.x + cx - 4, pg.y + 4);
    ctx.stroke();
  });
}

function drawAnchor() {
  ctx.fillStyle = COLORS.anchor;
  ctx.beginPath(); ctx.arc(anchor.x, anchor.y, 9, 0, TAU); ctx.fill();
  ctx.strokeStyle = "#8c734a"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(anchor.x, anchor.y, 9, 0, TAU); ctx.stroke();
}

// Per-segment strain tints the thread so a player can predict hold vs fail.
function segColor(strain) {
  if (strain > 1.18) return COLORS.threadSnap;
  if (strain > 1.06) return COLORS.threadStrain;
  return COLORS.thread;
}

function drawThread() {
  if (nodes.length < 2) return;
  ctx.lineCap = "round"; ctx.lineJoin = "round";
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i], b = nodes[i + 1];
    const d = Math.hypot(b.x - a.x, b.y - a.y);
    const strain = d / SEG_LEN;
    // soft fuzzy halo
    ctx.strokeStyle = "rgba(217,140,106,0.18)";
    ctx.lineWidth = 11;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    // core yarn
    ctx.strokeStyle = segColor(strain);
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  }
  // knot dots
  ctx.fillStyle = "#f0c089";
  for (const k of knots) {
    const a = nodes[k.i];
    if (a) { ctx.beginPath(); ctx.arc(a.x, a.y, 5, 0, TAU); ctx.fill(); }
  }
  // head marker
  const h = head();
  ctx.fillStyle = "#ffe6c2";
  ctx.beginPath(); ctx.arc(h.x, h.y, 6, 0, TAU); ctx.fill();
}

function drawWeight() {
  ctx.fillStyle = COLORS.weight;
  ctx.beginPath(); ctx.arc(weight.x, weight.y, WEIGHT_R, 0, TAU); ctx.fill();
  ctx.lineWidth = 3; ctx.strokeStyle = COLORS.weightRim;
  ctx.beginPath(); ctx.arc(weight.x, weight.y, WEIGHT_R - 2, 0, TAU); ctx.stroke();
  // stitched cross seam to read it as a felt ball
  ctx.strokeStyle = "rgba(20,30,12,0.4)"; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(weight.x - WEIGHT_R + 4, weight.y); ctx.lineTo(weight.x + WEIGHT_R - 4, weight.y);
  ctx.moveTo(weight.x, weight.y - WEIGHT_R + 4); ctx.lineTo(weight.x, weight.y + WEIGHT_R - 4);
  ctx.stroke();
}

function drawParticles() {
  for (const p of particles) {
    const a = Math.max(0, p.life / p.max);
    ctx.globalAlpha = a;
    ctx.strokeStyle = "#f0c089"; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x - p.vx * 0.03, p.y - p.vy * 0.03);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawHUD() {
  // Yarn ball meter (top-right)
  const bx = VW - 90, by = 56, R = 34;
  const frac = Math.max(0, yarn / yarnStart);
  // back ring
  ctx.lineWidth = 8; ctx.strokeStyle = COLORS.yarnBack;
  ctx.beginPath(); ctx.arc(bx, by, R, 0, TAU); ctx.stroke();
  // remaining arc
  ctx.strokeStyle = yarn <= 0 ? COLORS.bad : COLORS.yarnBall;
  ctx.beginPath();
  ctx.arc(bx, by, R, -Math.PI / 2, -Math.PI / 2 + TAU * frac);
  ctx.stroke();
  // ball center + windings
  ctx.fillStyle = COLORS.yarnBall;
  ctx.globalAlpha = 0.85;
  ctx.beginPath(); ctx.arc(bx, by, R - 12, 0, TAU); ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = COLORS.text;
  ctx.font = "bold 15px system-ui, sans-serif";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(Math.max(0, yarn) + "", bx, by);
  ctx.font = "11px system-ui, sans-serif";
  ctx.fillStyle = COLORS.textDim;
  ctx.fillText("YARN", bx, by + R + 12);

  // Hold progress + state (top-left)
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.font = "13px system-ui, sans-serif";
  const stColor = weightState === "HELD" ? COLORS.good
                : weightState === "DROPPED" ? COLORS.bad : COLORS.textDim;
  ctx.fillStyle = stColor;
  ctx.fillText("WEIGHT: " + weightState, 20, 30);
  if (weightState === "HELD") {
    ctx.fillStyle = COLORS.good;
    const w = 120, h = 8, x = 20, y = 40;
    ctx.fillStyle = COLORS.yarnBack;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = COLORS.good;
    ctx.fillRect(x, y, w * Math.min(1, holdTimer / HOLD_TO_WIN), h);
  }

  // Bottom hint line
  ctx.fillStyle = COLORS.textDim;
  ctx.font = "13px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Drag to lay yarn  •  wrap the peg & loop back  •  SPACE to cinch  •  R restart  •  M mute",
    VW / 2, VH - 16);
  ctx.textAlign = "left";

  if (DEBUG) drawDebug();
}

function drawDebug() {
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(8, VH - 150, 230, 120);
  ctx.fillStyle = "#9fe";
  ctx.font = "12px monospace";
  let y = VH - 132;
  const line = (s) => { ctx.fillText(s, 16, y); y += 16; };
  line("nodes:    " + nodes.length);
  line("crossings:" + crossings.length + (underToggle ? " (UNDER)" : " (OVER)"));
  line("knots:    " + knots.length);
  line("yarn:     " + yarn + "/" + yarnStart);
  line("weight:   " + weightState + "  hold=" + holdTimer.toFixed(2));
  // segment tension near head
  if (nodes.length >= 2) {
    const a = nodes[nodes.length - 2], b = head();
    const t = Math.hypot(b.x - a.x, b.y - a.y) / SEG_LEN;
    line("head tens: " + t.toFixed(2));
  }
}

// --- Screen overlays (drawn in-canvas) ---
function panel(w, h) {
  const x = (VW - w) / 2, y = (VH - h) / 2;
  ctx.fillStyle = COLORS.panel;
  ctx.strokeStyle = "rgba(214,178,110,0.3)";
  ctx.lineWidth = 1.5;
  roundRect(x, y, w, h, 18); ctx.fill(); ctx.stroke();
  return { x, y };
}
function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawTitle() {
  clearBg();
  drawAnchor();
  pegs.forEach(drawPeg);
  const p = panel(560, 340);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.thread;
  ctx.font = "bold 52px Georgia, serif";
  ctx.fillText("Knit One", VW / 2, p.y + 80);
  ctx.fillStyle = COLORS.text;
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillText("You are a single continuous thread.", VW / 2, p.y + 120);
  ctx.fillStyle = COLORS.textDim;
  ctx.font = "15px system-ui, sans-serif";
  const lines = [
    "Drag to pay out yarn from the head.",
    "Wrap the rope around the peg, loop the head back",
    "through its own bight, then press SPACE to CINCH.",
    "A cinched knot bears the weight — a loose loop drops it.",
  ];
  lines.forEach((l, i) => ctx.fillText(l, VW / 2, p.y + 160 + i * 26));
  ctx.fillStyle = COLORS.good;
  ctx.font = "bold 17px system-ui, sans-serif";
  ctx.fillText("Click or press SPACE to begin", VW / 2, p.y + 290);
  if (bestYarnUsed > 0) {
    ctx.fillStyle = COLORS.textDim;
    ctx.font = "13px system-ui, sans-serif";
    ctx.fillText("Best: held with only " + bestYarnUsed + " yarn used", VW / 2, p.y + 318);
  }
  ctx.textAlign = "left";
}

function drawComplete() {
  // keep the scene visible behind the panel
  renderScene();
  ctx.fillStyle = "rgba(15,12,8,0.55)";
  ctx.fillRect(0, 0, VW, VH);
  const p = panel(480, 240);
  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.good;
  ctx.font = "bold 40px Georgia, serif";
  ctx.fillText("It holds!", VW / 2, p.y + 70);
  ctx.fillStyle = COLORS.text;
  ctx.font = "16px system-ui, sans-serif";
  const used = yarnStart - yarn;
  ctx.fillText("The knot bore the weight honestly.", VW / 2, p.y + 110);
  ctx.fillText("Yarn used: " + used, VW / 2, p.y + 138);
  if (bestYarnUsed > 0)
    ctx.fillText("Best: " + bestYarnUsed, VW / 2, p.y + 162);
  ctx.fillStyle = COLORS.good;
  ctx.font = "bold 16px system-ui, sans-serif";
  ctx.fillText("Click or press SPACE to play again", VW / 2, p.y + 200);
  ctx.textAlign = "left";
}

function renderScene() {
  clearBg();
  drawAnchor();
  pegs.forEach(drawPeg);
  drawThread();
  drawWeight();
  drawParticles();
  drawHUD();
}

function render() {
  if (state === TITLE) { drawTitle(); return; }
  if (state === ROOM_COMPLETE || state === GAME_COMPLETE) { drawComplete(); return; }
  renderScene();
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastT = performance.now();
function frame(now) {
  let dt = (now - lastT) / 1000;
  lastT = now;
  if (dt > MAX_DT) dt = MAX_DT; // clamp for stability
  update(dt);
  render();
  requestAnimationFrame(frame);
}

// Boot
resize();
resetRoom();        // initialise world so the title screen has a scene behind it
setState(TITLE);
requestAnimationFrame(frame);

/*
 * NOTARY OF THE DAMNED — Phase 1: Core Mechanic Prototype.
 *
 * You are the underworld's paperwork clerk. Each spirit arrives with a dossier
 * of three documents (death certificate, sins ledger, unfinished business).
 * You cross-check the dossier against a short rulebook, then DRAG the brass
 * stamp onto APPROVED or DENIED and slam it. Deny a soul and it does not leave
 * — it slumps into a charcoal pile in the corner that grows all night.
 *
 * Phase 1 scope: grey-box desk, 3-rule book, 5 hand-authored cases, a real
 * deterministic evaluator, drag-stamp verdict commit, score/strikes, GAMEOVER,
 * and the seed of the denied-soul pile. Style + audio + the twist come later.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no network — runs from
 * file://. Audio is Web Audio synthesis, created lazily on first user gesture.
 *
 * Sections: Config -> Palette -> Canvas/state -> Audio -> Data (rules+cases)
 *   -> Evaluator -> Layout -> Input -> Game flow -> Render -> Main loop.
 */

"use strict";

// ----------------------------------------------------------------------------
// CONFIG — the feel switches. Tune these while playtesting.
// ----------------------------------------------------------------------------
const CONFIG = {
  strikeCap: 3,        // strikes before the night ends
  stampSnapSpeed: 14,  // how fast the stamp eases back to its rest spot
  slamFlashTime: 0.55, // seconds the correct/incorrect flash lingers
};

// When true, the ground-truth verdict is drawn beside the case for tuning.
const DEBUG = false;

// ----------------------------------------------------------------------------
// Palette — muddy bureaucratic green + stained beige (single source of truth).
// ----------------------------------------------------------------------------
const COLORS = {
  bg0: "#0a0b06",
  bg1: "#14160d",
  desk: "#1b1f10",
  deskEdge: "#2c331a",
  paper: "#c9bd97",
  paperShade: "#a89c78",
  paperLine: "#8a7f5e",
  ink: "#23210f",
  moss: "#5a6b3a",
  mossBright: "#86a04f",
  beige: "#c9bd97",
  beigeDim: "#867c5d",
  approve: "#6f8f4a",
  deny: "#9a4a3a",
  brass: "#b89a4e",
  brassDark: "#7c6628",
  charcoal: "#1a1a16",
  charcoalEdge: "#3a3a30",
  good: "#9fd06a",
  bad: "#d8634c",
  candle: "#e0b25a",
};

// ----------------------------------------------------------------------------
// Canvas & global state
// ----------------------------------------------------------------------------
const VW = 960;
const VH = 640;

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

// State machine: "title" | "playing" | "gameover".
let gameState = "title";

let currentCaseIndex = 0;
let score = 0;
let strikes = 0;
let deniedPile = 0;          // count of denied souls slumped in the corner
let pileSmudges = [];        // {x,y,r,seed} placeholder charcoal blobs
let caseLocked = false;      // a verdict was committed for the current case
let flash = null;            // {correct:bool, t:number} post-slam feedback
let candleFlicker = 0;       // ambient lighting jitter
let bestCleared = 0;         // persisted best (cases cleared)

// Stamp drag state.
const stamp = {
  x: 0, y: 0,        // current position (center)
  homeX: 0, homeY: 0,
  dragging: false,
  grabDX: 0, grabDY: 0,
  w: 96, h: 96,
};

let pointer = { x: 0, y: 0 };

// ----------------------------------------------------------------------------
// Persistence (wrapped so it can't throw under file://)
// ----------------------------------------------------------------------------
const BEST_KEY = "notary-of-the-damned-best";
function loadBest() {
  try {
    const v = parseInt(localStorage.getItem(BEST_KEY) || "0", 10);
    return isNaN(v) ? 0 : v;
  } catch (e) { return 0; }
}
function saveBest(v) {
  try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) {}
}
bestCleared = loadBest();

// ----------------------------------------------------------------------------
// Audio — Web Audio synthesis, created lazily on first gesture (file://-safe).
// ----------------------------------------------------------------------------
let audioCtx = null;
function unlockAudio() {
  if (audioCtx) return;
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
  osc.type = type || "square";
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain || 0.18, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}
function sndSlam() {
  // A dry brass thud: low, fast decay.
  blip(120, 0.16, "square", 0.25);
  blip(70, 0.22, "triangle", 0.2);
}
function sndCorrect() { blip(520, 0.12, "sine", 0.16); blip(780, 0.16, "sine", 0.12); }
function sndWrong() { blip(180, 0.28, "sawtooth", 0.18); }
function sndArrive() { blip(300, 0.1, "triangle", 0.1); }

// ----------------------------------------------------------------------------
// Data — the rulebook and the hand-authored cases.
//
// Each rule has text (shown on the desk) and check(c) -> bool. A case should be
// APPROVED only if EVERY active rule passes (see evaluate). Each deny-case is
// authored to fail exactly one identifiable rule (CORE-04).
// ----------------------------------------------------------------------------
const RULES = [
  {
    text: "1. Death date must NOT precede the certificate's issue date.",
    check: (c) => c.documents.certificate.deathDate >= c.documents.certificate.issueDate,
  },
  {
    text: "2. Sin tally must EQUAL the karma weight.",
    check: (c) => c.documents.sins.tally === c.documents.sins.karmaWeight,
  },
  {
    text: "3. The underworld seal must read VALID.",
    check: (c) => c.documents.certificate.seal === "VALID",
  },
];

// Dates use a simple comparable integer YYYYMMDD form for clarity.
function mkCert(name, deathDate, issueDate, seal) {
  return { name, deathDate, issueDate, seal };
}
function mkSins(tally, karmaWeight, list) {
  return { tally, karmaWeight, list };
}
function mkBusiness(statement, resolved) {
  return { statement, resolved };
}

// 5 grey-box cases: a mix of should-approve and should-deny, each deny failing
// exactly one visible rule. Ground truth comes from evaluate(), not this note.
const CASES = [
  {
    id: 1,
    spirit: { name: "Edda Marrow" },
    documents: {
      certificate: mkCert("Edda Marrow", 18610412, 18610410, "VALID"),
      sins: mkSins(4, 4, ["Gluttony x2", "Sloth x2"]),
      business: mkBusiness("Letters to a sister, sent.", true),
    },
    // all rules pass -> APPROVE
  },
  {
    id: 2,
    spirit: { name: "Cassian Vole" },
    documents: {
      // death date 18550101 precedes issue 18550620 -> fails rule 1
      certificate: mkCert("Cassian Vole", 18550101, 18550620, "VALID"),
      sins: mkSins(7, 7, ["Wrath x5", "Pride x2"]),
      business: mkBusiness("A debt, unpaid.", false),
    },
  },
  {
    id: 3,
    spirit: { name: "Mira Halloway" },
    documents: {
      certificate: mkCert("Mira Halloway", 19030909, 19030909, "VALID"),
      // tally 9 != karmaWeight 6 -> fails rule 2
      sins: mkSins(9, 6, ["Envy x6", "Greed x3"]),
      business: mkBusiness("None recorded.", true),
    },
  },
  {
    id: 4,
    spirit: { name: "Tobias Quill" },
    documents: {
      // seal FORGED -> fails rule 3
      certificate: mkCert("Tobias Quill", 17220301, 17220228, "FORGED"),
      sins: mkSins(2, 2, ["Sloth x2"]),
      business: mkBusiness("A garden left untended.", false),
    },
  },
  {
    id: 5,
    spirit: { name: "Selah Crowe" },
    documents: {
      certificate: mkCert("Selah Crowe", 19441111, 19441109, "VALID"),
      sins: mkSins(3, 3, ["Pride x3"]),
      business: mkBusiness("Forgiveness, given.", true),
    },
    // all rules pass -> APPROVE
  },
];

// ----------------------------------------------------------------------------
// Evaluator — deterministic ground truth (CORE-03).
// ----------------------------------------------------------------------------
function evaluate(c) {
  // should-approve only if every active rule passes
  for (let i = 0; i < RULES.length; i++) {
    if (!RULES[i].check(c)) return false;
  }
  return true;
}

function currentCase() {
  return CASES[currentCaseIndex];
}

// ----------------------------------------------------------------------------
// Layout — fixed desk regions. All in logical VW x VH coordinates.
// ----------------------------------------------------------------------------
const LAYOUT = {
  // Left: rulebook panel.
  rulebook: { x: 24, y: 96, w: 250, h: 300 },
  // Center: the three documents (dossier).
  dossier: { x: 296, y: 86, w: 380, h: 460 },
  // Right column: spirit at the wicket + verdict targets + stamp home.
  wicket: { x: 700, y: 96, w: 236, h: 150 },
  approve: { x: 700, y: 270, w: 236, h: 70 },
  deny: { x: 700, y: 356, w: 236, h: 70 },
  stampHome: { x: 818, y: 500 }, // center
  // Reserved corner for the denied pile (bottom-left of desk).
  pile: { x: 24, y: 470, w: 250, h: 150 },
};

function rectHas(r, px, py) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

// ----------------------------------------------------------------------------
// Input — pointer drives the stamp; keys handle title/restart.
// ----------------------------------------------------------------------------
function canvasToLogical(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (clientX - rect.left) / scale,
    y: (clientY - rect.top) / scale,
  };
}

canvas.addEventListener("pointerdown", (e) => {
  unlockAudio();
  const p = canvasToLogical(e.clientX, e.clientY);
  pointer = p;

  if (gameState === "title") {
    startNight();
    return;
  }
  if (gameState === "gameover") {
    startNight();
    return;
  }
  if (gameState !== "playing") return;
  if (caseLocked) return;

  // Grab the stamp if pointer is over it.
  if (Math.abs(p.x - stamp.x) <= stamp.w / 2 && Math.abs(p.y - stamp.y) <= stamp.h / 2) {
    stamp.dragging = true;
    stamp.grabDX = stamp.x - p.x;
    stamp.grabDY = stamp.y - p.y;
    canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
  }
});

canvas.addEventListener("pointermove", (e) => {
  const p = canvasToLogical(e.clientX, e.clientY);
  pointer = p;
  if (stamp.dragging) {
    stamp.x = p.x + stamp.grabDX;
    stamp.y = p.y + stamp.grabDY;
  }
});

function endDrag() {
  if (!stamp.dragging) return;
  stamp.dragging = false;
  // Slam: which target is the stamp center over?
  if (rectHas(LAYOUT.approve, stamp.x, stamp.y)) {
    commitVerdict(true);
  } else if (rectHas(LAYOUT.deny, stamp.x, stamp.y)) {
    commitVerdict(false);
  }
  // otherwise it just eases back home (no verdict)
}

canvas.addEventListener("pointerup", endDrag);
canvas.addEventListener("pointercancel", endDrag);

window.addEventListener("keydown", (e) => {
  unlockAudio();
  if (gameState === "title") {
    startNight();
  } else if (gameState === "gameover") {
    startNight();
  } else if (gameState === "playing" && !caseLocked) {
    // Keyboard shortcuts as an accessible alternative to dragging.
    if (e.key === "a" || e.key === "A") commitVerdict(true);
    if (e.key === "d" || e.key === "D") commitVerdict(false);
  }
});

// ----------------------------------------------------------------------------
// Game flow
// ----------------------------------------------------------------------------
function resetStamp() {
  stamp.x = LAYOUT.stampHome.x;
  stamp.y = LAYOUT.stampHome.y;
  stamp.homeX = LAYOUT.stampHome.x;
  stamp.homeY = LAYOUT.stampHome.y;
  stamp.dragging = false;
}

function startNight() {
  currentCaseIndex = 0;
  score = 0;
  strikes = 0;
  deniedPile = 0;
  pileSmudges = [];
  caseLocked = false;
  flash = null;
  resetStamp();
  gameState = "playing";
  sndArrive();
}

function addPileSmudge() {
  deniedPile++;
  const p = LAYOUT.pile;
  // Stack smudges from the bottom up, jittered, so the pile reads as growing.
  const perRow = 4;
  const idx = deniedPile - 1;
  const row = Math.floor(idx / perRow);
  const col = idx % perRow;
  const r = 26 + (idx % 3) * 6;
  const x = p.x + 34 + col * 52 + (Math.random() * 14 - 7);
  const y = p.y + p.h - 30 - row * 30 + (Math.random() * 10 - 5);
  pileSmudges.push({ x, y, r, seed: Math.random() * 1000 });
}

function commitVerdict(approved) {
  if (caseLocked) return;
  caseLocked = true;
  sndSlam();

  const truth = evaluate(currentCase()); // true = should approve
  const correct = (approved === truth);

  if (correct) {
    score++;
    sndCorrect();
  } else {
    strikes++;
    sndWrong();
  }

  // Every DENIED verdict (right or wrong) adds to the corner pile (TWIST-01).
  if (!approved) {
    addPileSmudge();
  }

  flash = { correct, t: CONFIG.slamFlashTime };

  // Brief lock so the slam reads, then advance / end.
  setTimeout(() => {
    advanceCase();
  }, 520);
}

function advanceCase() {
  // End the night on strike cap.
  if (strikes >= CONFIG.strikeCap) {
    endNight();
    return;
  }
  currentCaseIndex++;
  if (currentCaseIndex >= CASES.length) {
    endNight();
    return;
  }
  caseLocked = false;
  flash = null;
  resetStamp();
  sndArrive();
}

function endNight() {
  if (score > bestCleared) {
    bestCleared = score;
    saveBest(bestCleared);
  }
  gameState = "gameover";
}

// ----------------------------------------------------------------------------
// Render helpers
// ----------------------------------------------------------------------------
function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function paperPanel(x, y, w, h, label) {
  ctx.fillStyle = COLORS.paper;
  roundRect(x, y, w, h, 6);
  ctx.fill();
  // subtle shade band at top
  ctx.fillStyle = COLORS.paperShade;
  roundRect(x, y, w, 24, 6);
  ctx.fill();
  if (label) {
    ctx.fillStyle = COLORS.ink;
    ctx.font = "bold 13px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(label, x + 10, y + 13);
  }
}

function fieldLine(x, y, key, val, w) {
  ctx.fillStyle = COLORS.paperLine;
  ctx.font = "11px 'Courier New', monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(key, x, y);
  ctx.fillStyle = COLORS.ink;
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.fillText(val, x, y + 16);
}

function fmtDate(d) {
  const s = String(d);
  if (s.length !== 8) return s;
  return s.slice(0, 4) + "-" + s.slice(4, 6) + "-" + s.slice(6, 8);
}

// A jittered charcoal smudge (placeholder spirit / pile blob).
function smudge(x, y, r, seed) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = COLORS.charcoal;
  ctx.beginPath();
  const pts = 9;
  for (let i = 0; i <= pts; i++) {
    const a = (i / pts) * Math.PI * 2;
    const jitter = 0.78 + 0.34 * Math.sin(seed + i * 2.3);
    const rr = r * jitter;
    const px = Math.cos(a) * rr;
    const py = Math.sin(a) * rr * 0.82;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  // scribbled edge strokes
  ctx.strokeStyle = COLORS.charcoalEdge;
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const a = seed + i * 1.7;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * r * 0.3, Math.sin(a) * r * 0.3);
    ctx.lineTo(Math.cos(a) * r * 0.95, Math.sin(a) * r * 0.7);
    ctx.stroke();
  }
  ctx.restore();
}

// ----------------------------------------------------------------------------
// Render — title / playing / gameover
// ----------------------------------------------------------------------------
function clearBG() {
  // Desk base + flickering candle vignette (a hint of the intended mood).
  ctx.fillStyle = COLORS.bg0;
  ctx.fillRect(0, 0, VW, VH);
  const g = ctx.createRadialGradient(VW * 0.5, VH * 0.42, 80, VW * 0.5, VH * 0.5, VW * 0.7);
  const warm = 0.12 + candleFlicker * 0.05;
  g.addColorStop(0, `rgba(224,178,90,${warm})`);
  g.addColorStop(0.4, "rgba(40,46,24,0.12)");
  g.addColorStop(1, "rgba(0,0,0,0.55)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, VW, VH);

  // Desk slab.
  ctx.fillStyle = COLORS.desk;
  roundRect(12, 70, VW - 24, VH - 82, 10);
  ctx.fill();
  ctx.strokeStyle = COLORS.deskEdge;
  ctx.lineWidth = 2;
  roundRect(12, 70, VW - 24, VH - 82, 10);
  ctx.stroke();
}

function drawTitle() {
  ctx.fillStyle = COLORS.bg0;
  ctx.fillRect(0, 0, VW, VH);
  const g = ctx.createRadialGradient(VW / 2, VH * 0.4, 60, VW / 2, VH / 2, VW * 0.6);
  g.addColorStop(0, "rgba(224,178,90,0.16)");
  g.addColorStop(1, "rgba(0,0,0,0.6)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, VW, VH);

  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.mossBright;
  ctx.font = "bold 56px 'Courier New', monospace";
  ctx.fillText("NOTARY OF THE DAMNED", VW / 2, 210);

  ctx.fillStyle = COLORS.beige;
  ctx.font = "18px 'Courier New', monospace";
  ctx.fillText("Cross-check each soul's dossier against the rulebook —", VW / 2, 280);
  ctx.fillText("then DRAG the brass stamp onto APPROVED or DENIED.", VW / 2, 308);

  ctx.fillStyle = COLORS.beigeDim;
  ctx.font = "15px 'Courier New', monospace";
  ctx.fillText("Denied souls do not leave. They pile in the corner.", VW / 2, 352);
  ctx.fillText("(keyboard: A = approve, D = deny)", VW / 2, 380);

  ctx.fillStyle = bestCleared > 0 ? COLORS.candle : COLORS.beigeDim;
  ctx.font = "14px 'Courier New', monospace";
  ctx.fillText("BEST: " + bestCleared + " souls judged correctly", VW / 2, 430);

  // Pulsing prompt.
  const a = 0.55 + 0.45 * Math.sin(performance.now() / 350);
  ctx.fillStyle = `rgba(134,160,79,${a})`;
  ctx.font = "bold 20px 'Courier New', monospace";
  ctx.fillText("Click or press any key to begin the night", VW / 2, 510);
}

function drawRulebook() {
  const r = LAYOUT.rulebook;
  paperPanel(r.x, r.y, r.w, r.h, "AFTERLIFE RULEBOOK");
  ctx.fillStyle = COLORS.ink;
  ctx.font = "13px 'Courier New', monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  let yy = r.y + 40;
  for (let i = 0; i < RULES.length; i++) {
    yy = wrapText(RULES[i].text, r.x + 12, yy, r.w - 24, 18) + 12;
  }
  ctx.fillStyle = COLORS.paperLine;
  ctx.font = "italic 11px 'Courier New', monospace";
  wrapText("Approve only if EVERY rule passes.", r.x + 12, r.y + r.h - 44, r.w - 24, 14);
}

function wrapText(text, x, y, maxW, lh) {
  const words = text.split(" ");
  let line = "";
  let yy = y;
  for (let n = 0; n < words.length; n++) {
    const test = line + words[n] + " ";
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line.trim(), x, yy);
      line = words[n] + " ";
      yy += lh;
    } else {
      line = test;
    }
  }
  ctx.fillText(line.trim(), x, yy);
  return yy + lh;
}

function drawDossier() {
  const c = currentCase();
  const d = LAYOUT.dossier;
  const docH = 142;
  const gap = 12;

  // Certificate.
  let y = d.y;
  paperPanel(d.x, y, d.w, docH, "DEATH CERTIFICATE");
  fieldLine(d.x + 16, y + 50, "NAME", c.documents.certificate.name, 0);
  fieldLine(d.x + 16, y + 90, "DEATH DATE", fmtDate(c.documents.certificate.deathDate), 0);
  fieldLine(d.x + 200, y + 50, "ISSUE DATE", fmtDate(c.documents.certificate.issueDate), 0);
  // seal stamp
  const sealOk = c.documents.certificate.seal === "VALID";
  ctx.save();
  ctx.translate(d.x + 270, y + 100);
  ctx.rotate(-0.12);
  ctx.strokeStyle = sealOk ? COLORS.moss : COLORS.deny;
  ctx.lineWidth = 2;
  roundRect(-46, -16, 92, 32, 5);
  ctx.stroke();
  ctx.fillStyle = sealOk ? COLORS.moss : COLORS.deny;
  ctx.font = "bold 14px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("SEAL: " + c.documents.certificate.seal, 0, 0);
  ctx.restore();

  // Sins ledger.
  y = d.y + docH + gap;
  paperPanel(d.x, y, d.w, docH, "SINS LEDGER");
  fieldLine(d.x + 16, y + 50, "SIN TALLY", String(c.documents.sins.tally), 0);
  fieldLine(d.x + 200, y + 50, "KARMA WEIGHT", String(c.documents.sins.karmaWeight), 0);
  ctx.fillStyle = COLORS.paperLine;
  ctx.font = "11px 'Courier New', monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("RECORDED SINS", d.x + 16, y + 90);
  ctx.fillStyle = COLORS.ink;
  ctx.font = "12px 'Courier New', monospace";
  ctx.fillText(c.documents.sins.list.join(", "), d.x + 16, y + 108);

  // Unfinished business.
  y = d.y + (docH + gap) * 2;
  paperPanel(d.x, y, d.w, docH, "UNFINISHED BUSINESS");
  ctx.fillStyle = COLORS.ink;
  ctx.font = "13px 'Courier New', monospace";
  wrapText('"' + c.documents.business.statement + '"', d.x + 16, y + 44, d.w - 32, 18);
  fieldLine(d.x + 16, y + 102, "RESOLVED", c.documents.business.resolved ? "YES" : "NO", 0);

  if (DEBUG) {
    ctx.fillStyle = "#ff5";
    ctx.font = "bold 14px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.fillText("DEBUG truth: should " + (evaluate(c) ? "APPROVE" : "DENY"), d.x, d.y - 10);
  }
}

function drawSpirit() {
  const w = LAYOUT.wicket;
  // wicket frame
  ctx.fillStyle = COLORS.bg1;
  roundRect(w.x, w.y, w.w, w.h, 8);
  ctx.fill();
  ctx.strokeStyle = COLORS.deskEdge;
  ctx.lineWidth = 2;
  roundRect(w.x, w.y, w.w, w.h, 8);
  ctx.stroke();

  // charcoal-smudge spirit, jittering with the candle.
  const cx = w.x + w.w / 2;
  const cy = w.y + w.h / 2 + 8;
  const t = performance.now() / 600;
  smudge(cx, cy, 40, currentCase().id * 3.1);
  smudge(cx - 18 + Math.sin(t) * 3, cy - 30, 18, currentCase().id * 1.7);

  ctx.fillStyle = COLORS.beigeDim;
  ctx.font = "12px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("AT THE WICKET", cx, w.y + 18);
  ctx.fillStyle = COLORS.beige;
  ctx.font = "bold 14px 'Courier New', monospace";
  ctx.fillText(currentCase().spirit.name, cx, w.y + w.h - 12);
}

function drawTargets() {
  const a = LAYOUT.approve;
  const dn = LAYOUT.deny;
  const overA = rectHas(a, stamp.x, stamp.y);
  const overD = rectHas(dn, stamp.x, stamp.y);

  ctx.lineWidth = 3;
  // Approve.
  ctx.fillStyle = overA ? COLORS.approve : "rgba(111,143,74,0.22)";
  roundRect(a.x, a.y, a.w, a.h, 8);
  ctx.fill();
  ctx.strokeStyle = COLORS.approve;
  roundRect(a.x, a.y, a.w, a.h, 8);
  ctx.stroke();
  ctx.fillStyle = overA ? "#101207" : COLORS.good;
  ctx.font = "bold 24px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("APPROVED", a.x + a.w / 2, a.y + a.h / 2);

  // Deny.
  ctx.fillStyle = overD ? COLORS.deny : "rgba(154,74,58,0.22)";
  roundRect(dn.x, dn.y, dn.w, dn.h, 8);
  ctx.fill();
  ctx.strokeStyle = COLORS.deny;
  roundRect(dn.x, dn.y, dn.w, dn.h, 8);
  ctx.stroke();
  ctx.fillStyle = overD ? "#100805" : COLORS.bad;
  ctx.font = "bold 24px 'Courier New', monospace";
  ctx.fillText("DENIED", dn.x + dn.w / 2, dn.y + dn.h / 2);
}

function drawStamp() {
  ctx.save();
  ctx.translate(stamp.x, stamp.y);
  const lift = stamp.dragging ? 6 : 0;
  // shadow
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.beginPath();
  ctx.ellipse(0, 30 + lift, 30, 9, 0, 0, Math.PI * 2);
  ctx.fill();
  // handle
  ctx.fillStyle = COLORS.brassDark;
  roundRect(-14, -42 - lift, 28, 36, 6);
  ctx.fill();
  ctx.fillStyle = COLORS.brass;
  roundRect(-22, -10 - lift, 44, 20, 6);
  ctx.fill();
  // base disc
  ctx.fillStyle = COLORS.brassDark;
  ctx.beginPath();
  ctx.ellipse(0, 16, 30, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = COLORS.brass;
  ctx.font = "bold 11px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("STAMP", 0, -24 - lift);
  ctx.restore();
}

function drawPile() {
  const p = LAYOUT.pile;
  // faint reserved-corner label
  ctx.fillStyle = COLORS.beigeDim;
  ctx.font = "11px 'Courier New', monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("THE DENIED (" + deniedPile + ")", p.x + 6, p.y - 6);

  for (let i = 0; i < pileSmudges.length; i++) {
    const s = pileSmudges[i];
    smudge(s.x, s.y, s.r, s.seed);
  }
}

function drawHUD() {
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = COLORS.beige;
  ctx.font = "bold 18px 'Courier New', monospace";
  ctx.fillText("SCORE  " + score, 24, 44);

  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.beige;
  ctx.fillText("CASE  " + (currentCaseIndex + 1) + " / " + CASES.length, VW / 2, 44);

  // strikes remaining
  ctx.textAlign = "right";
  const left = CONFIG.strikeCap - strikes;
  ctx.fillStyle = left <= 1 ? COLORS.bad : COLORS.beige;
  ctx.fillText("STRIKES LEFT  " + left, VW - 24, 44);
}

function drawFlash() {
  if (!flash) return;
  const alpha = Math.min(1, flash.t / CONFIG.slamFlashTime) * 0.5;
  ctx.fillStyle = flash.correct
    ? `rgba(159,208,106,${alpha})`
    : `rgba(216,99,76,${alpha})`;
  ctx.fillRect(0, 0, VW, VH);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 48px 'Courier New', monospace";
  ctx.fillStyle = flash.correct ? COLORS.good : COLORS.bad;
  ctx.fillText(flash.correct ? "CORRECT" : "WRONG", VW / 2, VH / 2);
}

function drawGameOver() {
  clearBG();
  drawPile();

  ctx.textAlign = "center";
  ctx.fillStyle = COLORS.mossBright;
  ctx.font = "bold 48px 'Courier New', monospace";
  ctx.fillText("THE NIGHT ENDS", VW / 2, 210);

  ctx.fillStyle = COLORS.beige;
  ctx.font = "22px 'Courier New', monospace";
  const reason = strikes >= CONFIG.strikeCap
    ? "Too many misjudged souls. You are relieved of your post."
    : "The night's caseload is filed.";
  ctx.fillText(reason, VW / 2, 270);

  ctx.font = "20px 'Courier New', monospace";
  ctx.fillText("Souls judged correctly: " + score, VW / 2, 330);
  ctx.fillText("Souls denied (and piled): " + deniedPile, VW / 2, 362);

  ctx.fillStyle = score >= bestCleared && score > 0 ? COLORS.candle : COLORS.beigeDim;
  ctx.fillText("BEST: " + bestCleared, VW / 2, 410);

  const a = 0.55 + 0.45 * Math.sin(performance.now() / 350);
  ctx.fillStyle = `rgba(134,160,79,${a})`;
  ctx.font = "bold 20px 'Courier New', monospace";
  ctx.fillText("Click or press any key to start a new night", VW / 2, 480);
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastT = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - lastT) / 1000);
  lastT = now;

  // Candle flicker (cheap noise).
  candleFlicker = 0.5 + 0.5 * Math.sin(now / 120) * Math.sin(now / 313 + 1.3);

  // Ease the stamp home when not dragging and not over... well, always ease
  // toward home unless the player is actively holding it.
  if (!stamp.dragging) {
    stamp.x += (stamp.homeX - stamp.x) * Math.min(1, CONFIG.stampSnapSpeed * dt);
    stamp.y += (stamp.homeY - stamp.y) * Math.min(1, CONFIG.stampSnapSpeed * dt);
  }

  if (flash) {
    flash.t -= dt;
    if (flash.t <= 0) flash = null;
  }

  if (gameState === "title") {
    drawTitle();
  } else if (gameState === "playing") {
    clearBG();
    drawRulebook();
    drawDossier();
    drawSpirit();
    drawTargets();
    drawPile();
    drawStamp();
    drawHUD();
    drawFlash();
  } else if (gameState === "gameover") {
    drawGameOver();
  }

  requestAnimationFrame(frame);
}

// ----------------------------------------------------------------------------
// Boot
// ----------------------------------------------------------------------------
resize();
resetStamp();
requestAnimationFrame(frame);

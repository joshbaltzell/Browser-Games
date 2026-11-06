/*
 * NOTARY OF THE DAMNED — Phases 1-3.
 *
 * You are the underworld's paperwork clerk. Each spirit arrives with a dossier
 * of three documents (death certificate, sins ledger, unfinished business).
 * You cross-check the dossier against a SHORT, MUTABLE rulebook, then DRAG the
 * brass stamp onto APPROVED or DENIED and slam it. Deny a soul and it does not
 * leave — it slumps into a charcoal pile in the corner that grows all night and
 * begins to SABOTAGE your desk: smearing ink over fields, dragging the stamp
 * out of reach, guttering the candle.
 *
 * Phase 1 (kept): grey-box loop, evaluator, drag-stamp verdict, score/strikes.
 * Phase 2 (this): the muddy candlelit office identity — palette, paper grain,
 *   wax drips, dot-matrix grind + whisper Web Audio, ink-spatter & mote
 *   particles, hand-drawn charcoal spirits.
 * Phase 3 (this): THE TWIST — the rulebook drifts cruel between cases, the
 *   denied pile actively interferes, innocent souls plead, and at the end YOUR
 *   OWN certificate enters the queue and fails the rules you enforced all night.
 *   Approve yourself or deny yourself — the game judges your choice.
 *
 * Pure vanilla JS + Canvas 2D. No modules, no assets, no network — runs from
 * file://. Audio is Web Audio synthesis, created lazily on first user gesture.
 */

"use strict";

// ----------------------------------------------------------------------------
// CONFIG — the feel switches.
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
  wax: "#7a2f24",      // dark dried blood-wax drip
  waxLip: "#a8463a",
  cruel: "#b85a3a",    // a cruel clause glows faintly accusatory
  plea: "#caa8c0",     // sickly violet of a pleading whisper
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

// State machine: "title" | "playing" | "gameover" | "verdict".
let gameState = "title";

let currentCaseIndex = 0;
let score = 0;
let strikes = 0;
let deniedPile = 0;          // count of denied souls slumped in the corner
let pileSmudges = [];        // {x,y,r,seed} charcoal blobs in the corner pile
let caseLocked = false;      // a verdict was committed for the current case
let flash = null;            // {correct:bool, t:number} post-slam feedback
let candleFlicker = 0;       // ambient lighting jitter (0..1)
let bestCleared = 0;         // persisted best (cases cleared)
let shake = 0;               // screen-shake impulse (decays)
let timeSec = 0;             // running game clock (seconds)

// The self-verdict ending the player reached, if any.
let endingChoice = null;     // "approved-self" | "denied-self" | null

// Did the player reach the self-verdict at all? Distinguishes the win path
// (survived the night to judge yourself) from the lose path (struck out early).
let reachedSelf = false;

// ---- Onboarding (ONBOARD-01): inline, no-wall-of-text coaching on case 1. ---
// A tiny step machine that points at the rulebook, the dossier, then the
// stamp targets. It never blocks input; it just glows the relevant region and
// shows one short line. Persisted so veterans never see it again.
const TUTORIAL_KEY = "notary-of-the-damned-tutorial-seen";
let tutorialActive = false;
let tutorialStep = 0;        // 0=read rules, 1=spot contradiction, 2=drag stamp
let tutorialSeen = false;
function loadTutorialSeen() {
  try { return localStorage.getItem(TUTORIAL_KEY) === "1"; } catch (e) { return false; }
}
function markTutorialSeen() {
  try { localStorage.setItem(TUTORIAL_KEY, "1"); } catch (e) {}
}
tutorialSeen = loadTutorialSeen();

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
const ENDINGS_KEY = "notary-of-the-damned-endings";
function loadBest() {
  try {
    const v = parseInt(localStorage.getItem(BEST_KEY) || "0", 10);
    return isNaN(v) ? 0 : v;
  } catch (e) { return 0; }
}
function saveBest(v) {
  try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) {}
}
function loadEndings() {
  try { return JSON.parse(localStorage.getItem(ENDINGS_KEY) || "{}") || {}; }
  catch (e) { return {}; }
}
function saveEnding(key) {
  try {
    const e = loadEndings();
    e[key] = true;
    localStorage.setItem(ENDINGS_KEY, JSON.stringify(e));
  } catch (e) {}
}
bestCleared = loadBest();

// ----------------------------------------------------------------------------
// Audio — Web Audio synthesis, created lazily on first gesture (file://-safe).
//
// Identity: a continuous dot-matrix PRINTER GRIND under everything (filtered
// sawtooth chopped by an LFO), plus event blips and breathy WHISPER synth.
// Nothing is created or plays before the first user gesture (SCAF-05).
// ----------------------------------------------------------------------------
let audioCtx = null;
let masterGain = null;
let grindNodes = null;       // {src, lfo, lfoGain, filter, gain} ambience loop
let grindOn = false;

function unlockAudio() {
  if (audioCtx) { if (audioCtx.state === "suspended") audioCtx.resume(); return; }
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.9;
    masterGain.connect(audioCtx.destination);
  } catch (e) { audioCtx = null; }
}

// Pink-ish noise buffer reused for grind + whispers.
let noiseBuf = null;
function getNoiseBuffer() {
  if (noiseBuf || !audioCtx) return noiseBuf;
  const len = audioCtx.sampleRate * 2;
  noiseBuf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    d[i] = last * 3.5;
  }
  return noiseBuf;
}

function blip(freq, dur, type, gain, dest) {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type || "square";
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain || 0.18, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(dest || masterGain || audioCtx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

// The ever-present printer grind. Started on the first gesture, modulated by
// pile size so the desk literally sounds worse as denials accrue.
function startGrind() {
  if (!audioCtx || grindOn) return;
  getNoiseBuffer();
  const src = audioCtx.createBufferSource();
  src.buffer = noiseBuf;
  src.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 900;
  filter.Q.value = 0.7;

  // LFO chops the noise into a mechanical "chunk-chunk-chunk" grind.
  const lfo = audioCtx.createOscillator();
  lfo.type = "square";
  lfo.frequency.value = 7.5;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.04;

  const gain = audioCtx.createGain();
  gain.gain.value = 0.0;
  gain.gain.setTargetAtTime(0.045, audioCtx.currentTime, 1.2);

  lfo.connect(lfoGain);
  lfoGain.connect(gain.gain);
  src.connect(filter).connect(gain).connect(masterGain);
  src.start();
  lfo.start();
  grindNodes = { src, lfo, lfoGain, filter, gain };
  grindOn = true;
}
function setGrindIntensity(pileN, playing) {
  if (!grindNodes || !audioCtx) return;
  const t = audioCtx.currentTime;
  const base = playing ? 0.045 : 0.012;
  const lvl = Math.min(0.13, base + pileN * 0.006);
  grindNodes.gain.gain.setTargetAtTime(lvl, t, 0.4);
  grindNodes.lfo.frequency.setTargetAtTime(7.5 + pileN * 0.4, t, 0.6);
  grindNodes.filter.frequency.setTargetAtTime(900 - pileN * 18, t, 0.6);
}

// Breathy whisper: filtered noise burst with a slow formant sweep.
function whisper(intensity) {
  if (!audioCtx) return;
  getNoiseBuffer();
  const t = audioCtx.currentTime;
  const src = audioCtx.createBufferSource();
  src.buffer = noiseBuf;
  src.loop = true;
  const f = audioCtx.createBiquadFilter();
  f.type = "bandpass";
  f.Q.value = 6;
  const startF = 600 + Math.random() * 400;
  f.frequency.setValueAtTime(startF, t);
  f.frequency.linearRampToValueAtTime(startF + 700, t + 0.5);
  f.frequency.linearRampToValueAtTime(startF + 150, t + 1.1);
  const g = audioCtx.createGain();
  const peak = 0.05 + (intensity || 0) * 0.07;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(peak, t + 0.25);
  g.gain.linearRampToValueAtTime(peak * 0.7, t + 0.7);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
  src.connect(f).connect(g).connect(masterGain);
  src.start(t);
  src.stop(t + 1.4);
}

function sndSlam() {
  // A dry brass thud: low, fast decay, plus a printer carriage-return clack.
  blip(120, 0.16, "square", 0.25);
  blip(70, 0.22, "triangle", 0.2);
  if (audioCtx) {
    getNoiseBuffer();
    const t = audioCtx.currentTime;
    const src = audioCtx.createBufferSource();
    src.buffer = noiseBuf;
    const f = audioCtx.createBiquadFilter();
    f.type = "highpass"; f.frequency.value = 1800;
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0.22, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    src.connect(f).connect(g).connect(masterGain);
    src.start(t); src.stop(t + 0.1);
  }
}
function sndCorrect() { blip(520, 0.12, "sine", 0.16); blip(780, 0.16, "sine", 0.12); }
function sndWrong() { blip(180, 0.28, "sawtooth", 0.18); blip(120, 0.34, "sawtooth", 0.12); }
function sndArrive() {
  // A descending shuffle as the dossier slides onto the desk.
  blip(300, 0.1, "triangle", 0.1);
  blip(210, 0.14, "triangle", 0.08);
}

// ----------------------------------------------------------------------------
// Data — the rulebook (now MUTABLE per case) and the authored cases.
//
// Each rule has id, text, check(c)->bool, and an optional `cruel` flag used by
// the twist to tint the rulebook accusatory. Evaluation uses the case's OWN
// active rule set (case.rules), supporting the rulebook drift (CORE-07).
// ----------------------------------------------------------------------------
const RULE_DEFS = {
  R1: {
    id: "R1",
    text: "1. Death date must NOT precede the certificate's issue date.",
    check: (c) => c.documents.certificate.deathDate >= c.documents.certificate.issueDate,
  },
  R2: {
    id: "R2",
    text: "2. Sin tally must EQUAL the karma weight.",
    check: (c) => c.documents.sins.tally === c.documents.sins.karmaWeight,
  },
  R3: {
    id: "R3",
    text: "3. The underworld seal must read VALID.",
    check: (c) => c.documents.certificate.seal === "VALID",
  },
  // ---- A fourth honest rule, pinned up mid-night (CONTENT-01 ramp). ---------
  R6: {
    id: "R6",
    text: "4. A sin tally above SEVEN requires a VALID seal twice over — seal must read VALID.",
    // Honest tightening: heavy sinners must have an unimpeachable seal. In
    // practice this only bites cases that also have a high tally, so it adds
    // a subtler cross-check rather than a brand-new field.
    check: (c) => c.documents.sins.tally <= 7 || c.documents.certificate.seal === "VALID",
  },
  // ---- Cruel clauses, introduced in the back half (TWIST-04 / CONTENT-04). --
  R4: {
    id: "R4",
    cruel: true,
    text: "CLAUSE 7-c: A name bearing a middle initial is irregular. DENY.",
    check: (c) => !/\s[A-Z]\.\s|\s[A-Z]\.$/.test(" " + c.documents.certificate.name),
  },
  R5: {
    id: "R5",
    cruel: true,
    text: "CLAUSE 9-a: Unfinished business marked RESOLVED is an admission of meddling. DENY.",
    check: (c) => c.documents.business.resolved === false,
  },
  R7: {
    id: "R7",
    cruel: true,
    text: "CLAUSE 3-f: Any soul recording fewer than TWO sins is suspiciously unblemished. DENY.",
    check: (c) => c.documents.sins.tally >= 2,
  },
};

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

// The authored night. `rules` is the active rule set FOR THAT CASE (the drift).
// `innocent` flags a sympathetic soul; `pleas` are whisper/text fragments shown
// when a cruel clause is what condemns them. `self` flags the player's own card.
const CASES = [
  // === ACT I — three honest rules. Each contradiction shown plainly so the
  //     player learns the four failure shapes (date, tally, seal, clean). =====
  {
    id: 1,
    spirit: { name: "Edda Marrow" },
    rules: ["R1", "R2", "R3"],
    tutorial: true, // ONBOARD-01: the guided first case.
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
    rules: ["R1", "R2", "R3"],
    documents: {
      certificate: mkCert("Cassian Vole", 18550101, 18550620, "VALID"), // fails R1
      sins: mkSins(7, 7, ["Wrath x5", "Pride x2"]),
      business: mkBusiness("A debt, unpaid.", false),
    },
  },
  {
    id: 3,
    spirit: { name: "Mira Halloway" },
    rules: ["R1", "R2", "R3"],
    documents: {
      certificate: mkCert("Mira Halloway", 19030909, 19030909, "VALID"),
      sins: mkSins(9, 6, ["Envy x6", "Greed x3"]),                       // fails R2
      business: mkBusiness("None recorded.", true),
    },
  },
  {
    id: 4,
    spirit: { name: "Tobias Quill" },
    rules: ["R1", "R2", "R3"],
    documents: {
      certificate: mkCert("Tobias Quill", 17220301, 17220228, "FORGED"), // fails R3
      sins: mkSins(2, 2, ["Sloth x2"]),
      business: mkBusiness("A garden left untended.", false),
    },
  },
  {
    id: 5,
    spirit: { name: "Odette Fenn" },
    rules: ["R1", "R2", "R3"],
    documents: {
      // Clean approve — a breather to reward confidence before the ramp.
      certificate: mkCert("Odette Fenn", 19770214, 19770211, "VALID"),
      sins: mkSins(6, 6, ["Lust x3", "Pride x3"]),
      business: mkBusiness("A song never finished.", false),
    },
  },
  // === ACT II — a FOURTH honest rule pinned up (R6). The cross-checks get
  //     subtler: a near-miss date, an off-by-one tally. =======================
  {
    id: 6,
    spirit: { name: "Harlan Pike" },
    rules: ["R1", "R2", "R3", "R6"],
    documents: {
      // Heavy sinner (tally 9 > 7) with a FORGED seal -> fails R6 (and R3).
      certificate: mkCert("Harlan Pike", 18120630, 18120628, "FORGED"),
      sins: mkSins(9, 9, ["Wrath x6", "Greed x3"]),
      business: mkBusiness("A brother, wronged.", false),
    },
  },
  {
    id: 7,
    spirit: { name: "Nettie Crane" },
    rules: ["R1", "R2", "R3", "R6"],
    documents: {
      // Subtle: tally 8 vs karma 7 -> fails R2 by one. Seal valid, dates fine.
      certificate: mkCert("Nettie Crane", 19200505, 19200504, "VALID"),
      sins: mkSins(8, 7, ["Envy x4", "Sloth x4"]),                      // fails R2
      business: mkBusiness("A letter, unsent.", false),
    },
  },
  {
    id: 8,
    spirit: { name: "Augustus Roe" },
    rules: ["R1", "R2", "R3", "R6"],
    documents: {
      // All four honest rules pass (heavy tally but seal VALID) -> APPROVE.
      certificate: mkCert("Augustus Roe", 16551122, 16551120, "VALID"),
      sins: mkSins(8, 8, ["Pride x5", "Wrath x3"]),
      business: mkBusiness("An empire, abandoned.", false),
    },
  },
  // === ACT III — the rulebook drifts CRUEL. Clause 7-c (middle initial). =====
  {
    id: 9,
    spirit: { name: "Selah J. Crowe" },
    rules: ["R1", "R2", "R3", "R6", "R4"],
    innocent: true,
    pleas: ["i only kept", "my mother's name", "please"],
    documents: {
      // Every honest rule PASSES. Only the cruel middle-initial clause damns her.
      certificate: mkCert("Selah J. Crowe", 19441111, 19441109, "VALID"),
      sins: mkSins(2, 2, ["Pride x1", "Envy x1"]),
      business: mkBusiness("Forgiveness, given.", true),
    },
  },
  {
    id: 10,
    spirit: { name: "Bartholomew Ash" },
    rules: ["R1", "R2", "R3", "R6", "R4"],
    documents: {
      // No middle initial; honest rules pass -> should APPROVE under cruel book.
      certificate: mkCert("Bartholomew Ash", 18891201, 18891130, "VALID"),
      sins: mkSins(5, 5, ["Greed x3", "Sloth x2"]),
      business: mkBusiness("A confession, written.", false),
    },
  },
  {
    id: 11,
    spirit: { name: "Cornelius P. Vane" },
    rules: ["R1", "R2", "R3", "R6", "R4"],
    documents: {
      // Bears a middle initial AND a forged seal: a genuine deny that ALSO
      // trips the cruel clause — teaches that cruelty and honesty can overlap.
      certificate: mkCert("Cornelius P. Vane", 17890714, 17890712, "FORGED"),
      sins: mkSins(3, 3, ["Greed x3"]),
      business: mkBusiness("A fortune, hidden.", false),
    },
  },
  // === ACT IV — a SECOND cruel clause: 9-a (resolved business). =============
  {
    id: 12,
    spirit: { name: "Wren Calloway" },
    rules: ["R1", "R2", "R3", "R6", "R4", "R5"],
    innocent: true,
    pleas: ["i finished", "i made it right", "is that wrong?"],
    documents: {
      // Honest rules pass, no middle initial — but she RESOLVED her business,
      // so clause 9-a condemns a soul precisely for finding peace.
      certificate: mkCert("Wren Calloway", 20010707, 20010705, "VALID"),
      sins: mkSins(3, 3, ["Envy x2", "Sloth x1"]),
      business: mkBusiness("Made peace with my father.", true),       // fails R5
    },
  },
  {
    id: 13,
    spirit: { name: "Gideon Thorne" },
    rules: ["R1", "R2", "R3", "R6", "R4", "R5"],
    documents: {
      // Genuinely fails an honest rule (forged seal). A real deny among cruelty.
      certificate: mkCert("Gideon Thorne", 16880815, 16880814, "FORGED"), // fails R3
      sins: mkSins(8, 8, ["Wrath x6", "Pride x2"]),
      business: mkBusiness("Vengeance, unpaid.", false),
    },
  },
  // === ACT V — a THIRD cruel clause: 3-f (too few sins). The cruelest. =======
  {
    id: 14,
    spirit: { name: "Thomasine Ware" },
    rules: ["R1", "R2", "R3", "R6", "R4", "R5", "R7"],
    innocent: true,
    pleas: ["i hurt no one", "i tried to be good", "is goodness a crime?"],
    documents: {
      // A near-saintly soul: one sin, no middle initial, business unresolved.
      // Honest rules ALL pass — but clause 3-f damns her for being unblemished.
      certificate: mkCert("Thomasine Ware", 19620919, 19620917, "VALID"),
      sins: mkSins(1, 1, ["Pride x1"]),                                // fails R7
      business: mkBusiness("A kindness, unrepaid.", false),
    },
  },
  {
    id: 15,
    spirit: { name: "Mordecai Slade" },
    rules: ["R1", "R2", "R3", "R6", "R4", "R5", "R7"],
    documents: {
      // A final honest approve under the full cruel book: enough sins, valid
      // seal, no middle initial, business unresolved. Reward careful reading.
      certificate: mkCert("Mordecai Slade", 18441010, 18441008, "VALID"),
      sins: mkSins(6, 6, ["Wrath x4", "Greed x2"]),
      business: mkBusiness("A ledger left open.", false),
    },
  },
  // ==== THE SELF CASE: your own certificate, judged by the cruel rulebook. ===
  {
    id: 16,
    spirit: { name: "The Notary" },
    rules: ["R1", "R2", "R3", "R6", "R4", "R5", "R7"],
    self: true,
    innocent: true,
    pleas: ["this is me", "i only filed the papers", "judge yourself"],
    documents: {
      // Your card PASSES every honest rule, but it bears a middle initial (R4)
      // AND your business is resolved (R5) — the very clauses you enforced all
      // night now condemn you. The rulebook says DENY. The choice is yours.
      certificate: mkCert("Aldous M. Penhallow", 18991224, 18991221, "VALID"),
      sins: mkSins(3, 3, ["Pride x1", "Sloth x2"]),
      business: mkBusiness("Filed every soul that was asked of me.", true),
    },
  },
];

// ----------------------------------------------------------------------------
// Evaluator — deterministic ground truth against the CASE's active rules.
// ----------------------------------------------------------------------------
function activeRules(c) {
  return (c.rules || ["R1", "R2", "R3"]).map((id) => RULE_DEFS[id]);
}
function evaluate(c) {
  const rules = activeRules(c);
  for (let i = 0; i < rules.length; i++) {
    if (!rules[i].check(c)) return false;
  }
  return true;
}
// Which active rules FAIL (used to decide if a deny is "merciful" or "cruel").
function failingRules(c) {
  return activeRules(c).filter((r) => !r.check(c));
}
// Is this soul condemned ONLY by cruel clauses (i.e. innocent by honest rules)?
function condemnedByCrueltyOnly(c) {
  const fails = failingRules(c);
  return fails.length > 0 && fails.every((r) => r.cruel);
}

function currentCase() {
  return CASES[currentCaseIndex];
}

// ----------------------------------------------------------------------------
// Layout — fixed desk regions. All in logical VW x VH coordinates.
// ----------------------------------------------------------------------------
const LAYOUT = {
  rulebook: { x: 24, y: 96, w: 250, h: 358 },
  dossier: { x: 296, y: 86, w: 380, h: 460 },
  wicket: { x: 700, y: 96, w: 236, h: 150 },
  approve: { x: 700, y: 270, w: 236, h: 70 },
  deny: { x: 700, y: 356, w: 236, h: 70 },
  stampHome: { x: 818, y: 500 }, // center (rest position)
  pile: { x: 24, y: 470, w: 250, h: 150 },
};

function rectHas(r, px, py) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

// ----------------------------------------------------------------------------
// TWIST — interference state derived from the pile.
//
// As denials accumulate the pile reaches "tendrils" onto the desk: ink smears
// crawl over document fields and the stamp's rest position is dragged toward
// the corner so you must wrestle it free. Severity scales with pile size.
// ----------------------------------------------------------------------------
let smears = [];          // {x,y,r,seed,grow} wet-ink blots on the dossier
function interferenceLevel() {
  // 0 with an empty pile, climbing as souls accrue. Capped so it never blocks.
  return Math.min(1, deniedPile / 7);
}
function candleDim() {
  // Pile dims the candle: returns a 0..1 brightness multiplier.
  return Math.max(0.45, 1 - interferenceLevel() * 0.55);
}

// Rebuild the smear set for the current case based on pile size. Smears are
// placed over readable field anchors so they OBSCURE info, never the controls.
function rebuildSmears() {
  smears = [];
  const lvl = interferenceLevel();
  const count = Math.floor(deniedPile * 0.8); // grows with the pile
  const d = LAYOUT.dossier;
  // Candidate anchors over actual fields (not over APPROVE/DENY targets).
  const anchors = [
    { x: d.x + 90, y: d.y + 96 },     // death date
    { x: d.x + 250, y: d.y + 50 },    // issue date
    { x: d.x + 90, y: d.y + 204 },    // sin tally
    { x: d.x + 260, y: d.y + 204 },   // karma weight
    { x: d.x + 120, y: d.y + 372 },   // business statement
  ];
  for (let i = 0; i < count && i < anchors.length * 2; i++) {
    const a = anchors[i % anchors.length];
    smears.push({
      x: a.x + (Math.random() * 30 - 15),
      y: a.y + (Math.random() * 18 - 9),
      r: 26 + lvl * 22 + Math.random() * 10,
      seed: Math.random() * 1000,
      grow: 0,
    });
  }
}

// The stamp's effective home is dragged toward the pile as it grows (TWIST-02).
function effectiveStampHome() {
  const lvl = interferenceLevel();
  const px = LAYOUT.pile.x + 70;
  const py = LAYOUT.pile.y + 40;
  return {
    x: LAYOUT.stampHome.x + (px - LAYOUT.stampHome.x) * lvl * 0.55,
    y: LAYOUT.stampHome.y + (py - LAYOUT.stampHome.y) * lvl * 0.55,
  };
}

// ----------------------------------------------------------------------------
// Particles — ink spatter on slam, charcoal motes drifting off the pile.
// ----------------------------------------------------------------------------
let particles = [];
function spawnInkSpatter(x, y, color) {
  const n = 22;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 60 + Math.random() * 320;
    particles.push({
      kind: "ink",
      x, y,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp - 40,
      r: 1.5 + Math.random() * 4,
      life: 0.5 + Math.random() * 0.5,
      t: 0,
      color: color || COLORS.ink,
    });
  }
}
function spawnMote() {
  if (pileSmudges.length === 0) return;
  const s = pileSmudges[Math.floor(Math.random() * pileSmudges.length)];
  particles.push({
    kind: "mote",
    x: s.x + (Math.random() * 30 - 15),
    y: s.y - s.r * 0.4,
    vx: (Math.random() - 0.5) * 10,
    vy: -8 - Math.random() * 16,
    r: 0.8 + Math.random() * 1.8,
    life: 1.4 + Math.random() * 1.6,
    t: 0,
    color: COLORS.charcoalEdge,
  });
}
function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.t += dt;
    if (p.t >= p.life) { particles.splice(i, 1); continue; }
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    if (p.kind === "ink") {
      p.vy += 520 * dt;          // gravity
      p.vx *= 1 - 1.5 * dt;
    } else {
      p.vy -= 6 * dt;            // motes rise
      p.x += Math.sin((p.t + p.r) * 3) * 6 * dt;
    }
  }
}
function drawParticles() {
  for (const p of particles) {
    const k = 1 - p.t / p.life;
    ctx.globalAlpha = p.kind === "mote" ? k * 0.5 : Math.min(1, k * 1.3);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * (p.kind === "ink" ? 1 : k + 0.3), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// Emit charcoal motes from the pile at a rate scaled by its size.
let moteTimer = 0;
function tickMotes(dt) {
  moteTimer -= dt;
  const rate = deniedPile > 0 ? 0.5 / (1 + deniedPile * 0.5) : 999;
  if (moteTimer <= 0) {
    moteTimer = rate;
    spawnMote();
  }
}

// ----------------------------------------------------------------------------
// Whisper scheduling — pleading fragments float up on innocent cases.
// ----------------------------------------------------------------------------
let floatTexts = [];          // {text,x,y,t,life}
let whisperTimer = 0;
function tickWhispers(dt) {
  const c = currentCase();
  if (!c || !c.pleas || caseLocked) { whisperTimer = 0; return; }
  whisperTimer -= dt;
  if (whisperTimer <= 0) {
    whisperTimer = 1.6 + Math.random() * 1.4;
    const frag = c.pleas[Math.floor(Math.random() * c.pleas.length)];
    const w = LAYOUT.wicket;
    floatTexts.push({
      text: frag,
      x: w.x + w.w / 2 + (Math.random() * 60 - 30),
      y: w.y + w.h - 10,
      t: 0,
      life: 3.2,
    });
    whisper(c.self ? 1 : 0.5);
  }
}
// Onboarding dwell: step 0 (read the rules) auto-advances to step 1 (spot the
// contradiction) after a short read; step 2 only fires when the stamp is grabbed.
let tutorialDwell = 0;
function tickTutorial(dt) {
  if (!tutorialActive) { tutorialDwell = 0; return; }
  tutorialDwell += dt;
  if (tutorialStep === 0 && tutorialDwell > 3.4) { tutorialStep = 1; }
}

function tickFloatTexts(dt) {
  for (let i = floatTexts.length - 1; i >= 0; i--) {
    const f = floatTexts[i];
    f.t += dt;
    f.y -= 14 * dt;
    if (f.t >= f.life) floatTexts.splice(i, 1);
  }
}

// ----------------------------------------------------------------------------
// Input — pointer drives the stamp; keys handle title/restart/verdict.
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
  startGrind();
  const p = canvasToLogical(e.clientX, e.clientY);
  pointer = p;

  if (gameState === "title") { startNight(); return; }
  if (gameState === "gameover") { startNight(); return; }
  if (gameState === "verdict") { return; } // self-verdict resolves via stamp slam below if playing
  if (gameState !== "playing") return;
  if (caseLocked) return;

  if (Math.abs(p.x - stamp.x) <= stamp.w / 2 && Math.abs(p.y - stamp.y) <= stamp.h / 2) {
    stamp.dragging = true;
    stamp.grabDX = stamp.x - p.x;
    stamp.grabDY = stamp.y - p.y;
    canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
    // Picking up the stamp advances the tutorial to its final "drop it" step.
    if (tutorialActive && tutorialStep < 2) tutorialStep = 2;
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
  if (rectHas(LAYOUT.approve, stamp.x, stamp.y)) {
    commitVerdict(true);
  } else if (rectHas(LAYOUT.deny, stamp.x, stamp.y)) {
    commitVerdict(false);
  }
}
canvas.addEventListener("pointerup", endDrag);
canvas.addEventListener("pointercancel", endDrag);

window.addEventListener("keydown", (e) => {
  unlockAudio();
  startGrind();
  if (gameState === "title") {
    startNight();
  } else if (gameState === "gameover") {
    startNight();
  } else if (gameState === "playing" && !caseLocked) {
    if (e.key === "a" || e.key === "A") commitVerdict(true);
    if (e.key === "d" || e.key === "D") commitVerdict(false);
  }
});

// ----------------------------------------------------------------------------
// Game flow
// ----------------------------------------------------------------------------
function resetStamp() {
  const home = effectiveStampHome();
  stamp.x = home.x;
  stamp.y = home.y;
  stamp.homeX = LAYOUT.stampHome.x;  // nominal; effective home applied in loop
  stamp.homeY = LAYOUT.stampHome.y;
  stamp.dragging = false;
}

function startNight() {
  currentCaseIndex = 0;
  score = 0;
  strikes = 0;
  deniedPile = 0;
  pileSmudges = [];
  particles = [];
  floatTexts = [];
  smears = [];
  caseLocked = false;
  flash = null;
  endingChoice = null;
  reachedSelf = false;
  shake = 0;
  resetStamp();
  rebuildSmears();
  // Onboarding runs on the very first case, only if never completed before.
  tutorialActive = !tutorialSeen && currentCase().tutorial === true;
  tutorialStep = 0;
  tutorialDwell = 0;
  gameState = "playing";
  sndArrive();
}

function addPileSmudge() {
  deniedPile++;
  const p = LAYOUT.pile;
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
  const c = currentCase();

  // Completing the guided first case retires the tutorial forever.
  if (tutorialActive) {
    tutorialActive = false;
    tutorialSeen = true;
    markTutorialSeen();
  }

  // The self-case is its own ending, not a scored verdict (TWIST-07).
  if (c.self) {
    caseLocked = true;
    reachedSelf = true;
    sndSlam();
    shake = 1;
    spawnInkSpatter(stamp.x, stamp.y, approved ? COLORS.approve : COLORS.deny);
    endingChoice = approved ? "approved-self" : "denied-self";
    saveEnding(endingChoice);
    setTimeout(() => { endNight(); }, 700);
    return;
  }

  caseLocked = true;
  sndSlam();
  shake = 0.8;
  spawnInkSpatter(stamp.x, stamp.y, approved ? COLORS.approve : COLORS.deny);

  const truth = evaluate(c); // true = should approve under the ACTIVE rules
  const correct = (approved === truth);

  if (correct) {
    score++;
    sndCorrect();
  } else {
    strikes++;
    sndWrong();
  }

  if (!approved) {
    addPileSmudge();
  }

  flash = { correct, t: CONFIG.slamFlashTime };

  setTimeout(() => { advanceCase(); }, 520);
}

function advanceCase() {
  if (strikes >= CONFIG.strikeCap) { endNight(); return; }
  currentCaseIndex++;
  if (currentCaseIndex >= CASES.length) { endNight(); return; }
  caseLocked = false;
  flash = null;
  floatTexts = [];
  whisperTimer = 0;
  rebuildSmears();
  resetStamp();
  sndArrive();
  // A fresh soul at the wicket whispers if it is sympathetic.
  if (currentCase().pleas) whisper(currentCase().self ? 1 : 0.5);
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

// A pre-rendered paper-grain + dot-matrix texture tile, drawn once.
let grainCanvas = null;
function buildGrain() {
  grainCanvas = document.createElement("canvas");
  grainCanvas.width = VW;
  grainCanvas.height = VH;
  const g = grainCanvas.getContext("2d");
  // Speckled grain.
  const img = g.createImageData(VW, VH);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = (Math.random() * 255) | 0;
    img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v;
    img.data[i + 3] = Math.random() < 0.5 ? 14 : 0;
  }
  g.putImageData(img, 0, 0);
  // Dot-matrix horizontal banding.
  g.globalAlpha = 0.05;
  g.fillStyle = "#000";
  for (let y = 0; y < VH; y += 3) g.fillRect(0, y, VW, 1);
}

function paperPanel(x, y, w, h, label, accent) {
  // Paper with a soft drop shadow and a torn-edge feel.
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.55)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 6;
  ctx.fillStyle = COLORS.paper;
  roundRect(x, y, w, h, 6);
  ctx.fill();
  ctx.restore();

  // Stain mottling for the damp-basement feel.
  ctx.save();
  roundRect(x, y, w, h, 6);
  ctx.clip();
  ctx.globalAlpha = 0.10;
  ctx.fillStyle = COLORS.moss;
  for (let i = 0; i < 4; i++) {
    const sx = x + ((i * 97) % w);
    const sy = y + ((i * 53 + 20) % h);
    ctx.beginPath();
    ctx.ellipse(sx, sy, 30 + i * 8, 18 + i * 5, i, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  ctx.restore();

  // Header band.
  ctx.fillStyle = COLORS.paperShade;
  roundRect(x, y, w, 24, 6);
  ctx.fill();
  if (label) {
    ctx.fillStyle = accent || COLORS.ink;
    ctx.font = "bold 13px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(label, x + 10, y + 13);
  }
}

function fieldLine(x, y, key, val, danger) {
  ctx.fillStyle = COLORS.paperLine;
  ctx.font = "11px 'Courier New', monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(key, x, y);
  ctx.fillStyle = danger ? COLORS.deny : COLORS.ink;
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.fillText(val, x, y + 16);
}

function fmtDate(d) {
  const s = String(d);
  if (s.length !== 8) return s;
  return s.slice(0, 4) + "-" + s.slice(4, 6) + "-" + s.slice(6, 8);
}

// A jittered charcoal smudge (spirit / pile / smear blob).
function smudge(x, y, r, seed, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color || COLORS.charcoal;
  ctx.beginPath();
  const pts = 11;
  const wob = performance.now() / 900;
  for (let i = 0; i <= pts; i++) {
    const a = (i / pts) * Math.PI * 2;
    const jitter = 0.74 + 0.36 * Math.sin(seed + i * 2.3 + wob);
    const rr = r * jitter;
    const px = Math.cos(a) * rr;
    const py = Math.sin(a) * rr * 0.82;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  // scribbled edge strokes (hand-drawn quality)
  ctx.strokeStyle = COLORS.charcoalEdge;
  ctx.lineWidth = 1;
  for (let i = 0; i < 6; i++) {
    const a = seed + i * 1.7 + wob;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * r * 0.3, Math.sin(a) * r * 0.3);
    ctx.lineTo(Math.cos(a) * r * 0.95, Math.sin(a) * r * 0.7);
    ctx.stroke();
  }
  ctx.restore();
}

// ----------------------------------------------------------------------------
// Render — background, scene, screens
// ----------------------------------------------------------------------------
function drawGrain() {
  if (!grainCanvas) buildGrain();
  ctx.globalAlpha = 0.6;
  ctx.drawImage(grainCanvas, 0, 0, VW, VH);
  ctx.globalAlpha = 1;
}

// Wax drips down the screen margins (STYLE-04). They lengthen as the pile grows.
function drawWaxDrips() {
  const lvl = interferenceLevel();
  const drips = [
    { x: 30, baseLen: 40, phase: 0 },
    { x: 70, baseLen: 26, phase: 1.7 },
    { x: VW - 36, baseLen: 52, phase: 0.8 },
    { x: VW - 74, baseLen: 30, phase: 2.4 },
    { x: VW * 0.5, baseLen: 18, phase: 3.1 },
  ];
  for (const d of drips) {
    const len = d.baseLen + lvl * 60 + Math.sin(timeSec * 0.4 + d.phase) * 4;
    const grad = ctx.createLinearGradient(d.x, 0, d.x, len + 14);
    grad.addColorStop(0, COLORS.wax);
    grad.addColorStop(1, COLORS.waxLip);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(d.x - 4, 0);
    ctx.lineTo(d.x + 4, 0);
    ctx.lineTo(d.x + 3, len);
    ctx.quadraticCurveTo(d.x, len + 12, d.x - 3, len);
    ctx.closePath();
    ctx.fill();
    // glistening lip
    ctx.fillStyle = "rgba(220,180,140,0.25)";
    ctx.beginPath();
    ctx.ellipse(d.x, len + 4, 3, 5, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

function clearBG() {
  ctx.fillStyle = COLORS.bg0;
  ctx.fillRect(0, 0, VW, VH);

  // Flickering candle vignette, DIMMED by the denied pile (STYLE-03/TWIST-03).
  const dim = candleDim();
  const g = ctx.createRadialGradient(VW * 0.5, VH * 0.42, 80, VW * 0.5, VH * 0.5, VW * 0.7);
  const warm = (0.12 + candleFlicker * 0.06) * dim;
  g.addColorStop(0, `rgba(224,178,90,${warm})`);
  g.addColorStop(0.4, `rgba(40,46,24,${0.12 * dim})`);
  g.addColorStop(1, "rgba(0,0,0,0.62)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, VW, VH);

  // Desk slab with a subtle wood-grain gradient.
  const dg = ctx.createLinearGradient(0, 70, 0, VH);
  dg.addColorStop(0, COLORS.desk);
  dg.addColorStop(1, COLORS.bg1);
  ctx.fillStyle = dg;
  roundRect(12, 70, VW - 24, VH - 82, 10);
  ctx.fill();
  ctx.strokeStyle = COLORS.deskEdge;
  ctx.lineWidth = 2;
  roundRect(12, 70, VW - 24, VH - 82, 10);
  ctx.stroke();

  drawGrain();
}

function drawTitle() {
  ctx.fillStyle = COLORS.bg0;
  ctx.fillRect(0, 0, VW, VH);
  const g = ctx.createRadialGradient(VW / 2, VH * 0.4, 60, VW / 2, VH / 2, VW * 0.6);
  const warm = 0.16 + candleFlicker * 0.05;
  g.addColorStop(0, `rgba(224,178,90,${warm})`);
  g.addColorStop(1, "rgba(0,0,0,0.66)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, VW, VH);
  drawGrain();
  drawWaxDrips();

  ctx.textAlign = "center";
  // Title with an inky drop-shadow.
  ctx.fillStyle = "rgba(0,0,0,0.6)";
  ctx.font = "bold 56px 'Courier New', monospace";
  ctx.fillText("NOTARY OF THE DAMNED", VW / 2 + 3, 213);
  ctx.fillStyle = COLORS.mossBright;
  ctx.fillText("NOTARY OF THE DAMNED", VW / 2, 210);

  ctx.fillStyle = COLORS.beige;
  ctx.font = "18px 'Courier New', monospace";
  ctx.fillText("Cross-check each soul's dossier against the rulebook —", VW / 2, 280);
  ctx.fillText("then DRAG the brass stamp onto APPROVED or DENIED.", VW / 2, 308);

  ctx.fillStyle = COLORS.beigeDim;
  ctx.font = "15px 'Courier New', monospace";
  ctx.fillText("Denied souls do not leave. They pile in the corner — and reach back.", VW / 2, 352);
  ctx.fillText("(keyboard: A = approve, D = deny)", VW / 2, 380);

  ctx.fillStyle = bestCleared > 0 ? COLORS.candle : COLORS.beigeDim;
  ctx.font = "14px 'Courier New', monospace";
  ctx.fillText("BEST: " + bestCleared + " souls judged correctly", VW / 2, 430);

  // Surface which of the two self-verdict endings have been discovered (SHIP-01).
  const seen = loadEndings();
  const nSeen = (seen["approved-self"] ? 1 : 0) + (seen["denied-self"] ? 1 : 0);
  if (nSeen > 0) {
    ctx.fillStyle = COLORS.plea;
    ctx.font = "italic 13px 'Courier New', monospace";
    ctx.fillText("Endings discovered: " + nSeen + " / 2", VW / 2, 456);
  }

  const a = 0.55 + 0.45 * Math.sin(performance.now() / 350);
  ctx.fillStyle = `rgba(134,160,79,${a})`;
  ctx.font = "bold 20px 'Courier New', monospace";
  ctx.fillText("Click or press any key to begin the night", VW / 2, 510);
}

function drawRulebook() {
  const r = LAYOUT.rulebook;
  const rules = activeRules(currentCase());
  const hasCruel = rules.some((x) => x.cruel);
  paperPanel(r.x, r.y, r.w, r.h, "AFTERLIFE RULEBOOK", hasCruel ? COLORS.cruel : COLORS.ink);
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  let yy = r.y + 38;
  // Compress fonts/spacing as the rulebook grows so all clauses stay visible.
  const dense = rules.length > 5;
  const honestFont = dense ? "11px 'Courier New', monospace" : "12px 'Courier New', monospace";
  const cruelFont = dense ? "bold 10px 'Courier New', monospace" : "bold 11px 'Courier New', monospace";
  const lh = dense ? 13 : 15;
  const pad = dense ? 6 : 9;
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (rule.cruel) {
      // Cruel clauses are inked in an accusatory red and faintly tremble.
      ctx.fillStyle = COLORS.cruel;
      ctx.font = cruelFont;
      const dy = Math.sin(timeSec * 6 + i) * 0.6;
      ctx.save();
      ctx.translate(0, dy);
      yy = wrapText(rule.text, r.x + 12, yy, r.w - 24, lh) + pad;
      ctx.restore();
    } else {
      ctx.fillStyle = COLORS.ink;
      ctx.font = honestFont;
      yy = wrapText(rule.text, r.x + 12, yy, r.w - 24, lh) + pad;
    }
  }
  ctx.fillStyle = hasCruel ? COLORS.cruel : COLORS.paperLine;
  ctx.font = "italic 10px 'Courier New', monospace";
  wrapText("Approve only if EVERY rule passes.", r.x + 12, r.y + r.h - 24, r.w - 24, 13);
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

  // TWIST: wet-ink smears crawl over fields once the pile reaches the desk.
  drawSmears();

  if (DEBUG) {
    ctx.fillStyle = "#ff5";
    ctx.font = "bold 14px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.fillText("DEBUG truth: should " + (evaluate(c) ? "APPROVE" : "DENY"), d.x, d.y - 10);
  }
}

function drawSmears() {
  for (const s of smears) {
    // Wet ink: a glossy near-black blot with a faint sheen.
    ctx.save();
    ctx.globalAlpha = 0.9;
    smudge(s.x, s.y, s.r, s.seed, "#0d0d0a");
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = "#5b6a3a";
    ctx.beginPath();
    ctx.ellipse(s.x - s.r * 0.25, s.y - s.r * 0.25, s.r * 0.3, s.r * 0.18, -0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawSpirit() {
  const w = LAYOUT.wicket;
  ctx.fillStyle = COLORS.bg1;
  roundRect(w.x, w.y, w.w, w.h, 8);
  ctx.fill();
  ctx.strokeStyle = COLORS.deskEdge;
  ctx.lineWidth = 2;
  roundRect(w.x, w.y, w.w, w.h, 8);
  ctx.stroke();

  const c = currentCase();
  const cx = w.x + w.w / 2;
  const cy = w.y + w.h / 2 + 8;
  const t = performance.now() / 600;
  // Sympathetic souls glow a sickly violet; the self-case glows brighter.
  const tint = c.self ? COLORS.plea : (c.innocent ? "#2a2230" : COLORS.charcoal);
  smudge(cx, cy, 40, c.id * 3.1, tint);
  smudge(cx - 18 + Math.sin(t) * 3, cy - 30, 18, c.id * 1.7, tint);
  if (c.self) {
    // A faint halo of recognition around your own shade.
    ctx.save();
    ctx.globalAlpha = 0.25 + 0.15 * Math.sin(timeSec * 3);
    ctx.strokeStyle = COLORS.plea;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy - 6, 52, 60, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  ctx.fillStyle = COLORS.beigeDim;
  ctx.font = "12px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(c.self ? "AT THE WICKET — YOU" : "AT THE WICKET", cx, w.y + 18);
  ctx.fillStyle = c.self ? COLORS.plea : COLORS.beige;
  ctx.font = "bold 14px 'Courier New', monospace";
  ctx.fillText(c.spirit.name, cx, w.y + w.h - 12);

  // Floating plea fragments.
  for (const f of floatTexts) {
    const k = 1 - f.t / f.life;
    ctx.globalAlpha = Math.min(1, k * 1.4);
    ctx.fillStyle = COLORS.plea;
    ctx.font = "italic 13px 'Courier New', monospace";
    ctx.fillText('"' + f.text + '"', f.x, f.y);
    ctx.globalAlpha = 1;
  }
}

function drawTargets() {
  const a = LAYOUT.approve;
  const dn = LAYOUT.deny;
  const overA = rectHas(a, stamp.x, stamp.y);
  const overD = rectHas(dn, stamp.x, stamp.y);

  ctx.lineWidth = 3;
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
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.beginPath();
  ctx.ellipse(0, 30 + lift, 30, 9, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = COLORS.brassDark;
  roundRect(-14, -42 - lift, 28, 36, 6);
  ctx.fill();
  ctx.fillStyle = COLORS.brass;
  roundRect(-22, -10 - lift, 44, 20, 6);
  ctx.fill();
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
  ctx.fillStyle = COLORS.beigeDim;
  ctx.font = "11px 'Courier New', monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("THE DENIED (" + deniedPile + ")", p.x + 6, p.y - 6);

  for (let i = 0; i < pileSmudges.length; i++) {
    const s = pileSmudges[i];
    smudge(s.x, s.y, s.r, s.seed);
  }

  // A reaching tendril of charcoal stretches toward the desk as it grows.
  const lvl = interferenceLevel();
  if (lvl > 0.2 && pileSmudges.length) {
    const head = pileSmudges[pileSmudges.length - 1];
    ctx.strokeStyle = COLORS.charcoalEdge;
    ctx.lineWidth = 2 + lvl * 3;
    ctx.globalAlpha = 0.4 + lvl * 0.3;
    ctx.beginPath();
    ctx.moveTo(head.x, head.y);
    const tx = head.x + 80 * lvl + Math.sin(timeSec) * 8;
    const ty = head.y - 60 * lvl + Math.cos(timeSec * 0.7) * 8;
    ctx.quadraticCurveTo(head.x + 20, head.y - 50 * lvl, tx, ty);
    ctx.stroke();
    ctx.globalAlpha = 1;
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

  ctx.textAlign = "right";
  const left = CONFIG.strikeCap - strikes;
  ctx.fillStyle = left <= 1 ? COLORS.bad : COLORS.beige;
  ctx.fillText("STRIKES LEFT  " + left, VW - 24, 44);
}

// ----------------------------------------------------------------------------
// Onboarding overlay (ONBOARD-01) — glows the region in focus and shows one
// short coaching line. No modal, no wall of text; play continues underneath.
// ----------------------------------------------------------------------------
function highlightRect(r, pad) {
  const p = pad || 8;
  const pulse = 0.45 + 0.35 * Math.sin(timeSec * 4);
  ctx.save();
  ctx.strokeStyle = `rgba(224,178,90,${pulse})`;
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 7]);
  ctx.lineDashOffset = -timeSec * 30;
  roundRect(r.x - p, r.y - p, r.w + p * 2, r.h + p * 2, 10);
  ctx.stroke();
  ctx.restore();
}

function drawTutorial() {
  if (!tutorialActive || caseLocked) return;

  // Coaching line, anchored to a quiet strip just under the HUD.
  const lines = [
    "Read the RULEBOOK on the left. A soul is APPROVED only if every rule passes.",
    "Now check this soul's dossier against the rules. Spot anything that breaks one?",
    "Drag the brass STAMP onto APPROVED or DENIED — then let go to slam it.",
  ];
  const line = lines[tutorialStep] || lines[0];

  // Glow the region the step is about.
  if (tutorialStep === 0) highlightRect(LAYOUT.rulebook);
  else if (tutorialStep === 1) highlightRect(LAYOUT.dossier);
  else {
    highlightRect(LAYOUT.approve);
    highlightRect(LAYOUT.deny);
  }

  // The coaching banner.
  const bw = 720, bh = 38;
  const bx = (VW - bw) / 2, by = 56;
  ctx.save();
  ctx.fillStyle = "rgba(10,11,6,0.82)";
  roundRect(bx, by, bw, bh, 8);
  ctx.fill();
  ctx.strokeStyle = "rgba(224,178,90,0.5)";
  ctx.lineWidth = 1.5;
  roundRect(bx, by, bw, bh, 8);
  ctx.stroke();
  ctx.fillStyle = COLORS.candle;
  ctx.font = "13px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(line, VW / 2, by + bh / 2 + 1);
  // Little step pips below the banner.
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = i === tutorialStep ? COLORS.mossBright : "rgba(201,189,151,0.3)";
    ctx.beginPath();
    ctx.arc(VW / 2 - 14 + i * 14, by + bh + 12, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
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

// Prompt that surfaces when the self-case is up.
function drawSelfPrompt() {
  if (!currentCase().self || caseLocked) return;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const a = 0.6 + 0.4 * Math.sin(timeSec * 3);
  ctx.fillStyle = `rgba(202,168,192,${a})`;
  ctx.font = "bold 17px 'Courier New', monospace";
  ctx.fillText("This certificate is yours. The cruel rulebook says DENY.", VW / 2, VH - 40);
  ctx.font = "14px 'Courier New', monospace";
  ctx.fillStyle = COLORS.beige;
  ctx.fillText("Obey the rules you enforced — or break them for yourself.", VW / 2, VH - 18);
}

function drawGameOver() {
  clearBG();
  drawPile();
  drawWaxDrips();

  ctx.textAlign = "center";

  if (endingChoice) {
    // ---- The judged self-verdict endings (TWIST-07). ----------------------
    const approved = endingChoice === "approved-self";
    ctx.fillStyle = approved ? COLORS.good : COLORS.cruel;
    ctx.font = "bold 44px 'Courier New', monospace";
    ctx.fillText(approved ? "YOU SPARED YOURSELF" : "YOU DAMNED YOURSELF", VW / 2, 180);

    ctx.fillStyle = COLORS.beige;
    ctx.font = "18px 'Courier New', monospace";
    const lines = approved
      ? [
          "You broke the rulebook for one soul — your own.",
          "The clauses that damned the innocent did not damn you.",
          "",
          "The court notes the exception. It will remember who made it.",
          "Every soul you denied tonight was held to a law you would not accept.",
        ]
      : [
          "You stamped your own name DENIED, as the rules demanded.",
          "You were consistent. You were merciless to the end — even to yourself.",
          "",
          "The pile in the corner makes room for one more shade.",
          "It has your handwriting on it.",
        ];
    let yy = 250;
    for (const ln of lines) {
      if (ln === "") { yy += 14; continue; }
      ctx.fillText(ln, VW / 2, yy);
      yy += 28;
    }

    ctx.fillStyle = COLORS.beigeDim;
    ctx.font = "15px 'Courier New', monospace";
    ctx.fillText("Souls judged correctly: " + score + "      Souls denied: " + deniedPile, VW / 2, yy + 20);
  } else {
    // ---- The ordinary "relieved of post" ending (strike cap). -------------
    ctx.fillStyle = COLORS.mossBright;
    ctx.font = "bold 48px 'Courier New', monospace";
    ctx.fillText("THE NIGHT ENDS", VW / 2, 210);

    ctx.fillStyle = COLORS.beige;
    ctx.font = "22px 'Courier New', monospace";
    ctx.fillText("Too many misjudged souls. You are relieved of your post.", VW / 2, 270);
    ctx.fillText("You never reached your own certificate.", VW / 2, 302);

    ctx.font = "20px 'Courier New', monospace";
    ctx.fillText("Souls judged correctly: " + score, VW / 2, 360);
    ctx.fillText("Souls denied (and piled): " + deniedPile, VW / 2, 392);

    ctx.fillStyle = score >= bestCleared && score > 0 ? COLORS.candle : COLORS.beigeDim;
    ctx.fillText("BEST: " + bestCleared, VW / 2, 440);
  }

  const a = 0.55 + 0.45 * Math.sin(performance.now() / 350);
  ctx.fillStyle = `rgba(134,160,79,${a})`;
  ctx.font = "bold 20px 'Courier New', monospace";
  ctx.fillText("Click or press any key to start a new night", VW / 2, 500);

  ctx.fillStyle = COLORS.beigeDim;
  ctx.font = "13px 'Courier New', monospace";
  ctx.fillText("← Back to games (link, lower-left) to leave the office", VW / 2, 532);
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastT = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - lastT) / 1000);
  lastT = now;
  timeSec += dt;

  candleFlicker = 0.5 + 0.5 * Math.sin(now / 120) * Math.sin(now / 313 + 1.3);

  // Ease the stamp toward its EFFECTIVE home (dragged toward the pile).
  if (!stamp.dragging) {
    const home = effectiveStampHome();
    stamp.x += (home.x - stamp.x) * Math.min(1, CONFIG.stampSnapSpeed * dt);
    stamp.y += (home.y - stamp.y) * Math.min(1, CONFIG.stampSnapSpeed * dt);
  }

  if (flash) {
    flash.t -= dt;
    if (flash.t <= 0) flash = null;
  }
  if (shake > 0) shake = Math.max(0, shake - dt * 3.5);

  updateParticles(dt);
  if (gameState === "playing") {
    tickMotes(dt);
    tickWhispers(dt);
    tickFloatTexts(dt);
    tickTutorial(dt);
    setGrindIntensity(deniedPile, true);
  } else {
    setGrindIntensity(deniedPile, false);
  }

  // Screen shake.
  ctx.save();
  if (shake > 0) {
    const m = shake * 8;
    ctx.translate((Math.random() - 0.5) * m, (Math.random() - 0.5) * m);
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
    drawParticles();
    drawStamp();
    drawHUD();
    drawWaxDrips();
    drawSelfPrompt();
    drawTutorial();
    drawFlash();
  } else if (gameState === "gameover") {
    drawGameOver();
    drawParticles();
  }

  ctx.restore();
  requestAnimationFrame(frame);
}

// ----------------------------------------------------------------------------
// Boot
// ----------------------------------------------------------------------------
resize();
resetStamp();
requestAnimationFrame(frame);

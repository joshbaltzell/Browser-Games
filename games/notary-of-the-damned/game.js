/*
 * NOTARY OF THE DAMNED
 *
 * You are the underworld's paperwork clerk. Each spirit arrives with a dossier
 * of three documents (death certificate, sins ledger, unfinished business).
 * You cross-check it against a SHORT, MUTABLE rulebook (the Standing Orders)
 * and stamp APPROVED or DENIED. Deny a soul and it does not leave: it slumps
 * into a pile in the corner that grows all night and begins to SABOTAGE the
 * desk with ink smears (which you can rub away). The rulebook drifts cruel
 * mid-night, and at the end YOUR OWN certificate enters the queue.
 *
 * The desk is real DOM text (readable, zoomable, screen-reader friendly). Two
 * canvases carry atmosphere only: #bg (candle, motes, the pile) behind the
 * desk and #fx (ink spatter) in front of it.
 *
 * Files: data.js (rules, cases, evaluator), audio.js (Web Audio), this file
 * (state, DOM, input, flow, canvas). Plain scripts: runs from file://.
 */

"use strict";

// ----------------------------------------------------------------------------
// CONFIG — the feel switches.
// ----------------------------------------------------------------------------
const CONFIG = {
  strikeCap: 3,         // reprimands before the night ends
  soulSeconds: 30,      // optional soft timer per soul (a lapse costs half a reprimand)
  reviewRight: 1100,    // ms the verdict beat lingers after a right call
  reviewWrong: 3800,    // ... after a wrong call (time to read the reason)
  reviewSelf: 2400,     // ... after the self verdict
  skipGuard: 250,       // ms before a keypress can skip the beat (avoids double taps)
  endLock: 600,         // ms the report ignores input so nothing restarts by accident
  dragThreshold: 8,     // px of movement that turns a press into a drag
};

// ----------------------------------------------------------------------------
// DOM + canvas
// ----------------------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const stage = $("stage");
const bgCanvas = $("bg");
const fxCanvas = $("fx");
const bgx = bgCanvas.getContext("2d");
const fxx = fxCanvas.getContext("2d");
const desk = $("desk");
const folder = $("folder");

let CW = 0, CH = 0;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  CW = stage.clientWidth;
  CH = stage.clientHeight;
  [bgCanvas, fxCanvas].forEach((c) => {
    c.width = Math.round(CW * dpr);
    c.height = Math.round(CH * dpr);
    c.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
  });
  if (tutorialActive) placeTutorialSpots();
  if (typeof fitRules === "function") fitRules();
}
window.addEventListener("resize", resize);

// ----------------------------------------------------------------------------
// State
// ----------------------------------------------------------------------------
let gameState = "title";     // "title" | "playing" | "gameover"
let caseState = "ready";     // "memo" | "ready" | "stamping" | "review"
let currentCaseIndex = 0;
let score = 0;               // souls judged correctly
let strikeHalves = 0;        // reprimands in halves (a wrong call = 2, a lapse = 1)
let streak = 0;
let deniedPile = 0;
let history = [];            // {id,name,approved,truth,fails,cruelOnly,ms,self} per judged case
let endingChoice = null;     // "approved-self" | "denied-self" | null
let reachedSelf = false;
let bestCleared = 0;
let timeSec = 0;
let candleFlicker = 0;
let caseStart = 0;
let timerLeft = CONFIG.soulSeconds;
let reviewStart = 0;
let reviewTimer = null;
let slamTimers = [];
let newRules = [];           // rule ids to tag NEW until the case is stamped
let marks = {};              // player's scratch ticks per rule id: 0 none, 1 check, 2 cross
let pileSmudges = [];        // {u,v,r,seed} relative to the pile slot
let particles = [];
let statusMode = "hint";     // "hint" | "coach" | "verdict"
let hintTimer = null;
let pinned = null;           // {type:"rule"|"field", id}
let hoverRule = null;
let hoverField = null;
let reportLockUntil = 0;

// ----------------------------------------------------------------------------
// Persistence (every access wrapped so it can't throw under file://)
// ----------------------------------------------------------------------------
const BEST_KEY = "notary-of-the-damned-best";
const ENDINGS_KEY = "notary-of-the-damned-endings";
const TUTORIAL_KEY = "notary-of-the-damned-tutorial-seen";
const TIMER_KEY = "notary-of-the-damned-timer";
const CALM_KEY = "notary-of-the-damned-calm";

function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function loadBest() {
  const v = parseInt(lsGet(BEST_KEY) || "0", 10);
  return isNaN(v) ? 0 : v;
}
function loadEndings() {
  try { return JSON.parse(lsGet(ENDINGS_KEY) || "{}") || {}; } catch (e) { return {}; }
}
function saveEnding(key) {
  const e = loadEndings();
  e[key] = true;
  lsSet(ENDINGS_KEY, JSON.stringify(e));
}
bestCleared = loadBest();

let tutorialSeen = lsGet(TUTORIAL_KEY) === "1";
let tutorialActive = false;
let tutorialStep = 0;

let timerOn = lsGet(TIMER_KEY) === "1";   // soft timer: OFF by default
let calm = (function () {
  const v = lsGet(CALM_KEY);
  if (v === "1") return true;
  if (v === "0") return false;
  try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
})();

// ----------------------------------------------------------------------------
// Small helpers
// ----------------------------------------------------------------------------
function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}
function currentCase() { return CASES[currentCaseIndex]; }
function rnd(a, b) { return a + Math.random() * (b - a); }
function later(fn, ms) {
  const id = setTimeout(fn, ms);
  slamTimers.push(id);
  return id;
}
function clearLater() {
  slamTimers.forEach(clearTimeout);
  slamTimers = [];
  if (reviewTimer) { clearTimeout(reviewTimer); reviewTimer = null; }
}
let liveTimer = null;
function announce(text) {
  const live = $("live");
  live.textContent = "";
  if (liveTimer) clearTimeout(liveTimer);
  liveTimer = setTimeout(() => { live.textContent = text; }, 40);
}
function interferenceLevel() { return Math.min(1, deniedPile / 7); }
function candleDim() { return Math.max(0.45, 1 - interferenceLevel() * 0.55); }
function strikesLeft() { return CONFIG.strikeCap - strikeHalves / 2; }
function fmtStrikes(h) { return (h / 2).toString().replace(".5", "½"); }

// ----------------------------------------------------------------------------
// Settings (start screen strip + docket mute button)
// ----------------------------------------------------------------------------
function applyCalm() { document.documentElement.classList.toggle("calm", calm); }
function syncSettings() {
  const snd = $("optSound");
  snd.textContent = "Sound: " + (muted ? "off" : "on");
  snd.setAttribute("aria-pressed", String(!muted));
  const tm = $("optTimer");
  tm.textContent = "Soul timer: " + (timerOn ? "on" : "off");
  tm.setAttribute("aria-pressed", String(timerOn));
  const cm = $("optCalm");
  cm.textContent = "Calm motion: " + (calm ? "on" : "off");
  cm.setAttribute("aria-pressed", String(calm));
  const mb = $("muteBtn");
  mb.setAttribute("aria-pressed", String(muted));
  mb.setAttribute("aria-label", muted ? "Unmute sound" : "Mute sound");
  mb.title = muted ? "Sound is off (M)" : "Mute sound (M)";
}
function toggleMute() { unlockAudio(); setMuted(!muted); syncSettings(); }
$("optSound").addEventListener("click", toggleMute);
$("muteBtn").addEventListener("click", toggleMute);
$("optTimer").addEventListener("click", () => {
  timerOn = !timerOn; lsSet(TIMER_KEY, timerOn ? "1" : "0"); syncSettings();
});
$("optCalm").addEventListener("click", () => {
  calm = !calm; lsSet(CALM_KEY, calm ? "1" : "0"); applyCalm(); syncSettings();
});
applyCalm();
syncSettings();

// ----------------------------------------------------------------------------
// Screens
// ----------------------------------------------------------------------------
function showScreen(name) {
  stage.dataset.screen = name;
  $("titleScreen").hidden = name !== "title";
  desk.hidden = name !== "desk";
  $("reportScreen").hidden = name !== "report";
}
function refreshTitle() {
  $("bestLine").textContent = "Best: " + bestCleared + " souls judged correctly";
  const seen = loadEndings();
  const n = (seen["approved-self"] ? 1 : 0) + (seen["denied-self"] ? 1 : 0);
  $("endingsLine").textContent = "Endings discovered: " + n + " / 2";
}

// ----------------------------------------------------------------------------
// Docket: score, streak, queue tiles, reprimand seals
// ----------------------------------------------------------------------------
function buildQueue() {
  const q = $("queue");
  q.textContent = "";
  CASES.forEach((c) => q.appendChild(el("i", c.self ? "self" : "")));
}
function updateDocket(crackIndex) {
  $("dkCleared").innerHTML = "Souls cleared <b>" + score + "</b>";
  const st = $("dkStreak");
  st.hidden = streak < 3;
  st.textContent = "Streak " + streak;
  $("dkDenied").innerHTML = "Denied <b>" + deniedPile + "</b>";
  const tiles = $("queue").children;
  for (let i = 0; i < tiles.length; i++) {
    const h = history[i];
    let cls = CASES[i].self ? "self" : "";
    if (h && !h.self) cls += h.approved === h.truth ? " done" : " bad";
    if (i === currentCaseIndex && gameState === "playing" && !h) cls += " now";
    tiles[i].className = cls.trim();
  }
  $("queue").setAttribute("aria-label", "Case " + (currentCaseIndex + 1) + " of " + CASES.length + ", " + score + " cleared");
  const seals = $("seals");
  if (seals.children.length !== CONFIG.strikeCap) {
    seals.textContent = "";
    for (let i = 0; i < CONFIG.strikeCap; i++) seals.appendChild(el("span"));
  }
  for (let i = 0; i < seals.children.length; i++) {
    const lost = strikeHalves - i * 2;           // halves lost on this seal
    let cls = lost >= 2 ? "lost" : lost === 1 ? "half" : "";
    if (i === crackIndex) cls += " cracking";
    seals.children[i].className = cls.trim();
  }
  seals.setAttribute("aria-label", fmtStrikes(CONFIG.strikeCap * 2 - strikeHalves) + " of " + CONFIG.strikeCap + " reprimand seals left");
  $("pileLabel").textContent = "THE DENIED (" + deniedPile + ")";
}

// ----------------------------------------------------------------------------
// Dossier + Standing Orders rendering
// ----------------------------------------------------------------------------
function renderDossier() {
  const c = currentCase();
  const d = c.documents;
  $("vName").textContent = d.certificate.name;
  $("vIssued").textContent = fmtDate(d.certificate.issueDate);
  $("vDied").textContent = fmtDate(d.certificate.deathDate);
  const seal = $("vSeal");
  seal.textContent = "SEAL: " + d.certificate.seal;
  seal.classList.toggle("forged", d.certificate.seal !== "VALID");
  $("vTally").textContent = String(d.sins.tally);
  $("vKarma").textContent = String(d.sins.karmaWeight);
  $("vSins").textContent = d.sins.list.join(", ");
  $("vQuote").textContent = "“" + d.business.statement + "”";
  $("vResolved").textContent = d.business.resolved ? "YES" : "NO";
  document.querySelectorAll(".f").forEach((f) => f.classList.remove("lit", "fail"));
  folder.classList.remove("reviewing");

  const wk = $("wkName");
  wk.textContent = c.spirit.name;
  $("wkLabel").textContent = c.self ? "AT THE WICKET: YOU" : "AT THE WICKET";
  $("wkPlea").textContent = "";
  const sh = $("shade");
  sh.className = "shade" + (c.innocent ? " innocent" : "") + (c.self ? " self" : "");
}

const MARK_WORDS = ["not checked yet", "ticked: passes", "crossed: fails"];
function setBoxLabel(li, box) {
  const r = RULE_DEFS[li.dataset.rule];
  const m = box.dataset.mark;
  let state = MARK_WORDS[parseInt(m, 10) || 0];
  if (m === "p") state = "result: passes";
  if (m === "f") state = "result: fails";
  box.setAttribute("aria-label", r.label + ": " + r.text + " Tick box, " + state + ".");
}
function renderRules() {
  const list = $("rules");
  list.textContent = "";
  const rules = activeRules(currentCase());
  rules.forEach((r) => {
    const li = el("li", "rule" + (r.cruel ? " cruel" : ""));
    li.dataset.rule = r.id;
    const box = el("button", "box");
    box.type = "button";
    box.dataset.mark = "0";
    li.appendChild(box);
    const txt = el("div", "rtxt");
    txt.appendChild(el("span", "rlabel", r.label));
    txt.appendChild(document.createTextNode(r.text));
    if (newRules.indexOf(r.id) !== -1) txt.appendChild(el("span", "newtag", "NEW"));
    if (r.aim) txt.appendChild(el("span", "aim", r.aim));
    li.appendChild(txt);
    setBoxLabel(li, box);

    li.addEventListener("pointerenter", () => { hoverRule = r.id; refreshLinks(); });
    li.addEventListener("pointerleave", () => { hoverRule = null; refreshLinks(); });
    li.addEventListener("focusin", () => { hoverRule = r.id; refreshLinks(); });
    li.addEventListener("focusout", () => { hoverRule = null; refreshLinks(); });
    li.addEventListener("click", (e) => {
      if (e.target.closest(".box")) {
        if (caseState !== "ready") return;
        const m = ((marks[r.id] || 0) + 1) % 3;
        marks[r.id] = m;
        box.dataset.mark = String(m);
        setBoxLabel(li, box);
        sndTick();
        return;
      }
      pinned = pinned && pinned.type === "rule" && pinned.id === r.id ? null : { type: "rule", id: r.id };
      refreshLinks();
    });
    list.appendChild(li);
  });
}

// Every order must be visible: shrink the list, then flag any overflow.
function fitRules() {
  const list = $("rules");
  if (!list.offsetParent) return;
  list.classList.remove("dense", "denser");
  if (list.scrollHeight > list.clientHeight + 1) list.classList.add("dense");
  if (list.scrollHeight > list.clientHeight + 1) list.classList.add("denser");
  updateMoreFlag();
}
function updateMoreFlag() {
  const list = $("rules");
  const more = list.scrollHeight > list.clientHeight + 2 && list.scrollTop + list.clientHeight < list.scrollHeight - 4;
  $("moreOrders").hidden = !more;
}
$("rules").addEventListener("scroll", updateMoreFlag);

// Rule <-> field linking: hover/focus/tap a rule and the fields it reads light
// up; hover/focus/tap a field and the rules reading it light up.
function refreshLinks() {
  const rid = hoverRule || (pinned && pinned.type === "rule" ? pinned.id : null);
  const fkey = hoverField || (pinned && pinned.type === "field" ? pinned.id : null);
  const rule = rid ? RULE_DEFS[rid] : null;
  const readers = [];
  document.querySelectorAll("#rules .rule").forEach((li) => {
    const r = RULE_DEFS[li.dataset.rule];
    if (fkey && r.reads.indexOf(fkey) !== -1) readers.push(r.label);
  });
  // Only fields some active order reads light up; the rest are just paper.
  const litFields = rule ? rule.reads : fkey && readers.length ? [fkey] : [];
  document.querySelectorAll(".f[data-field]").forEach((f) => {
    f.classList.toggle("lit", litFields.indexOf(f.dataset.field) !== -1);
  });
  document.querySelectorAll("#rules .rule").forEach((li) => {
    const r = RULE_DEFS[li.dataset.rule];
    const hot = rule ? r.id === rule.id : !!(fkey && r.reads.indexOf(fkey) !== -1);
    li.classList.toggle("hot", hot);
    li.classList.toggle("pinned", !!(pinned && pinned.type === "rule" && pinned.id === r.id));
  });
  if (rule) setHint(rule.eg);
  else if (fkey) setHint(readers.length ? "Checked by: " + readers.join(", ") + "." : "No order reads this field. It is just atmosphere.");
  else setHint(null);
}
document.querySelectorAll(".f[data-field]").forEach((f) => {
  const key = f.dataset.field;
  f.addEventListener("pointerenter", () => { hoverField = key; refreshLinks(); });
  f.addEventListener("pointerleave", () => { hoverField = null; refreshLinks(); });
  f.addEventListener("focus", () => { hoverField = key; refreshLinks(); });
  f.addEventListener("blur", () => { hoverField = null; refreshLinks(); });
  f.addEventListener("click", (e) => {
    if (e.target.closest(".smear")) return;
    pinned = pinned && pinned.type === "field" && pinned.id === key ? null : { type: "field", id: key };
    refreshLinks();
  });
});

// ----------------------------------------------------------------------------
// Status area under the folder: hint, coach tip, or verdict card
// ----------------------------------------------------------------------------
function defaultHint() {
  if (document.querySelector(".smear")) return "Ink smear! <b>Rub it with the pointer</b> to wipe it clean (or press B).";
  return "Click a stamp, <b>drag it onto the folder</b>, or press <b>A</b> / <b>D</b>.";
}
let hintOverride = null;
function setHint(text) {
  hintOverride = text;
  paintHint();
}
function paintHint() {
  if (statusMode !== "hint") return;
  const h = $("hint");
  if (hintOverride) { h.textContent = hintOverride; }
  else { h.innerHTML = defaultHint(); }
}
function setStatus(mode, node) {
  statusMode = mode;
  const st = $("status");
  st.textContent = "";
  if (mode === "hint") {
    const p = el("p", "hint");
    p.id = "hint";
    st.appendChild(p);
    paintHint();
  } else {
    st.appendChild(node);
  }
}

// ----------------------------------------------------------------------------
// Ink smears (pile interference): translucent, capped, wipeable
// ----------------------------------------------------------------------------
function clearSmears() {
  document.querySelectorAll(".smear").forEach((s) => s.remove());
}
function buildSmears() {
  clearSmears();
  const fields = Array.prototype.slice.call(document.querySelectorAll(".f[data-smear]"));
  for (let i = fields.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = fields[i]; fields[i] = fields[j]; fields[j] = t;
  }
  const n = Math.min(fields.length, Math.floor(deniedPile * 0.8));
  for (let i = 0; i < n; i++) {
    const f = fields[i];
    const wide = f.classList.contains("wide");
    const s = el("div", "smear");
    s.style.left = rnd(-6, wide ? 50 : 30).toFixed(0) + "%";
    s.style.top = rnd(-10, 25).toFixed(0) + "%";
    s.style.width = (wide ? rnd(28, 42) : rnd(62, 85)).toFixed(0) + "%";
    s.style.height = rnd(62, 80).toFixed(0) + "%";
    let px = null, py = null, rubbed = 0;
    s.addEventListener("pointermove", (e) => {
      if (px !== null) rubbed += Math.hypot(e.clientX - px, e.clientY - py);
      px = e.clientX; py = e.clientY;
      const need = Math.max(50, s.offsetWidth * 1.2);
      const p = Math.min(1, rubbed / need);
      s.style.opacity = String(1 - p);
      if (Math.floor(rubbed / 18) !== Math.floor((rubbed - 3) / 18)) sndRub();
      if (p >= 1) removeSmear(s);
    });
    s.addEventListener("pointerleave", () => { px = null; py = null; });
    f.appendChild(s);
  }
  paintHint();
}
function removeSmear(s) {
  if (!s.parentNode) return;
  s.remove();
  sndRub();
  paintHint();
  if (!document.querySelector(".smear")) announce("The smears are wiped clean.");
}
function wipeOneSmear() {
  const s = document.querySelector(".smear");
  if (s) removeSmear(s);
}

// ----------------------------------------------------------------------------
// Pile (drawn on #bg inside #pileSlot) and stamp drift
// ----------------------------------------------------------------------------
function addPileSmudge() {
  const idx = deniedPile;
  deniedPile++;
  const col = idx % 4, row = Math.floor(idx / 4);
  pileSmudges.push({
    u: 0.15 + col * 0.23 + rnd(-0.03, 0.03),
    v: 0.8 - row * 0.2 + rnd(-0.03, 0.03),
    r: 0.19 + (idx % 3) * 0.03,
    seed: Math.random() * 1000,
  });
}
function setDrift() {
  const lvl = interferenceLevel();
  const r = $("rack");
  r.style.setProperty("--dx", (-lvl * 5).toFixed(1) + "px");
  r.style.setProperty("--dy", (lvl * 3).toFixed(1) + "px");
  r.style.setProperty("--dr", (-lvl * 2).toFixed(1) + "deg");
}

// ----------------------------------------------------------------------------
// Game flow
// ----------------------------------------------------------------------------
function startNight() {
  clearLater();
  currentCaseIndex = 0;
  score = 0; strikeHalves = 0; streak = 0; deniedPile = 0;
  history = []; pileSmudges = []; particles = [];
  endingChoice = null; reachedSelf = false;
  pinned = null; hoverRule = hoverField = null;
  tutorialActive = !tutorialSeen;
  tutorialStep = 0;
  gameState = "playing";
  buildQueue();
  showScreen("desk");
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  beginCase(0);
}

function clearImprints() { $("imprints").textContent = ""; }

function beginCase(i) {
  clearLater();
  currentCaseIndex = i;
  const c = currentCase();
  marks = {};
  pinned = null; hoverRule = hoverField = null; hintOverride = null;
  newRules = newRuleIds(i);
  renderDossier();
  renderRules();
  fitRules();
  buildSmears();
  clearImprints();
  setDrift();
  setStatus("hint");
  $("memo").hidden = true;
  $("stampA").classList.remove("out");
  $("stampD").classList.remove("out");
  $("stampA").disabled = false;
  $("stampD").disabled = false;
  const wick = $("wick");
  wick.hidden = !timerOn || !!c.self;
  document.querySelectorAll(".spot").forEach((n) => n.classList.remove("spot"));
  updateDocket();
  if (newRules.length) {
    showMemo();
  } else {
    arriveCase();
  }
}

function showMemo() {
  caseState = "memo";
  folder.classList.add("arriving");
  folder.classList.remove("arrive");
  const text = newRules.map((id) => RULE_DEFS[id].memo).join(" ");
  $("memoText").textContent = text;
  $("memo").hidden = false;
  sndMemo();
  announce("Memo from the Lower Office. " + text + " Press Space to continue.");
  later(() => { if (caseState === "memo") $("memoBtn").focus({ preventScroll: true }); }, 60);
}
function dismissMemo() {
  if (caseState !== "memo") return;
  $("memo").hidden = true;
  arriveCase();
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
}
$("memo").addEventListener("click", dismissMemo);

function arriveCase() {
  const c = currentCase();
  caseState = "ready";
  folder.classList.remove("arriving", "reviewing");
  folder.classList.remove("arrive");
  void folder.offsetWidth;
  folder.classList.add("arrive");
  later(() => folder.classList.remove("arrive"), 700);
  caseStart = performance.now();
  timerLeft = CONFIG.soulSeconds;
  $("wickFill").style.transform = "scaleX(1)";
  $("wick").classList.remove("low");
  if (!c.self) sndArrive();
  if (c.pleas) { whisper(c.self ? 1 : 0.5); whisperTimer = 1.4; }
  else whisperTimer = 0;
  announce("Case " + (currentCaseIndex + 1) + " of " + CASES.length + ": " + c.spirit.name +
    (c.self ? ". This certificate is yours." : "."));
  if (c.self) {
    setStatus("coach", coachNode("<b>This certificate is yours.</b> The cruel rulebook says DENY. Obey the rules you enforced, or break them for yourself.", null));
  } else if (tutorialActive) {
    showTutorialStep();
  }
  updateDocket();
}

// ---- Tutorial: three coach tips with spotlights ----------------------------
function coachNode(html, btnText) {
  const box = el("div", "coach");
  const p = el("div");
  p.innerHTML = html;
  box.appendChild(p);
  if (btnText) {
    const b = el("button", "brassbtn small", btnText);
    b.type = "button";
    b.addEventListener("click", (e) => { e.stopPropagation(); nextTutorialStep(); });
    box.appendChild(b);
  }
  return box;
}
const TUTORIAL_TIPS = [
  { target: "orders", html: "<b>1 of 3. Read the Standing Orders.</b> A soul is approved only if <b>every</b> order is satisfied. Point at a rule and the fields it reads light up.", btn: "Next" },
  { target: "folder", html: "<b>2 of 3. Check the file.</b> Do the highlighted fields break a rule? Tap the box beside a rule to tick it off as you go.", btn: "Next" },
  { target: "rack", html: "<b>3 of 3. Stamp it.</b> Click a stamp, drag it onto the folder, or press <b>A</b> (approve) or <b>D</b> (deny).", btn: null },
];
function placeTutorialSpots() {
  document.querySelectorAll(".spot").forEach((n) => n.classList.remove("spot"));
  if (!tutorialActive || gameState !== "playing" || caseState !== "ready") return;
  const t = TUTORIAL_TIPS[tutorialStep];
  if (t) $(t.target).classList.add("spot");
}
function showTutorialStep() {
  const t = TUTORIAL_TIPS[tutorialStep];
  if (!t) return;
  setStatus("coach", coachNode(t.html, t.btn));
  placeTutorialSpots();
}
function nextTutorialStep() {
  if (!tutorialActive) return;
  tutorialStep = Math.min(TUTORIAL_TIPS.length - 1, tutorialStep + 1);
  showTutorialStep();
}
function endTutorial() {
  if (!tutorialActive) return;
  tutorialActive = false;
  tutorialSeen = true;
  lsSet(TUTORIAL_KEY, "1");
  document.querySelectorAll(".spot").forEach((n) => n.classList.remove("spot"));
}

// ---- Stamping ---------------------------------------------------------------
function canStamp() { return gameState === "playing" && caseState === "ready"; }

const drag = { pending: false, active: false, approved: true, btn: null, fly: null, sx: 0, sy: 0, ox: 0, oy: 0, id: null };

function makeFly(btn) {
  const r = btn.getBoundingClientRect();
  const fly = btn.cloneNode(true);
  fly.removeAttribute("id");
  fly.removeAttribute("aria-label");
  fly.tabIndex = -1;
  fly.setAttribute("aria-hidden", "true");
  fly.classList.remove("out");
  fly.classList.add("stampfly");
  fly.style.width = r.width + "px";
  fly.style.height = r.height + "px";
  fly.style.left = "0px";
  fly.style.top = "0px";
  fly.style.translate = "none";
  fly.style.rotate = "none";
  document.body.appendChild(fly);
  return { fly, r };
}
function flyAt(fly, x, y, extra) {
  fly.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0) " + (extra || "");
}

function stampDown(e, approved) {
  unlockAudio(); startGrind();
  if (e.button !== undefined && e.button !== 0) return;
  if (!canStamp()) return;
  const btn = approved ? $("stampA") : $("stampD");
  drag.pending = true; drag.active = false;
  drag.approved = approved; drag.btn = btn;
  drag.sx = e.clientX; drag.sy = e.clientY; drag.id = e.pointerId;
  try { btn.setPointerCapture(e.pointerId); } catch (err) {}
}
function stampMove(e) {
  if (!drag.pending) return;
  if (!drag.active) {
    if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < CONFIG.dragThreshold) return;
    drag.active = true;
    const m = makeFly(drag.btn);
    drag.fly = m.fly;
    drag.ox = drag.sx - m.r.left; drag.oy = drag.sy - m.r.top;
    drag.btn.classList.add("out");
    sndLift();
    if (tutorialActive && tutorialStep < 2) { tutorialStep = 2; showTutorialStep(); }
  }
  flyAt(drag.fly, e.clientX - drag.ox, e.clientY - drag.oy, "scale(1.12) rotate(-3deg)");
  updateGhost(e.clientX, e.clientY);
}
function overFolder(x, y) {
  const r = folder.getBoundingClientRect();
  const pad = 14;
  return x >= r.left - pad && x <= r.right + pad && y >= r.top - pad && y <= r.bottom + pad;
}
function updateGhost(x, y) {
  const host = $("imprints");
  let g = host.querySelector(".ghost");
  if (!drag.active || !overFolder(x, y)) { if (g) g.remove(); return; }
  if (!g) {
    g = el("div", "imprint ghost " + (drag.approved ? "a" : "d"), drag.approved ? "APPROVED" : "DENIED");
    g.style.setProperty("--rot", "-8deg");
    host.appendChild(g);
  }
  const r = folder.getBoundingClientRect();
  g.style.left = (x - r.left) + "px";
  g.style.top = (y - r.top) + "px";
}
function stampUp(e) {
  if (!drag.pending) return;
  const approved = drag.approved;
  const wasDrag = drag.active;
  drag.pending = false; drag.active = false;
  try { drag.btn.releasePointerCapture(drag.id); } catch (err) {}
  const g = $("imprints").querySelector(".ghost");
  if (g) g.remove();
  if (!canStamp()) { dropFly(true); return; }
  if (wasDrag) {
    if (overFolder(e.clientX, e.clientY)) {
      slam(approved, e.clientX, e.clientY, true);
    } else {
      dropFly(false);   // snap back to the rack
    }
  } else {
    slam(approved, null, null, false);
  }
}
function stampCancel() {
  if (!drag.pending) return;
  drag.pending = false; drag.active = false;
  const g = $("imprints").querySelector(".ghost");
  if (g) g.remove();
  dropFly(false);
}
function dropFly(instant) {
  const fly = drag.fly, btn = drag.btn;
  drag.fly = null;
  if (!fly) return;
  if (instant || calm) { fly.remove(); if (btn) btn.classList.remove("out"); return; }
  const r = btn.getBoundingClientRect();
  fly.style.transition = "transform 160ms ease-out";
  flyAt(fly, r.left, r.top, "");
  setTimeout(() => { fly.remove(); btn.classList.remove("out"); }, 170);
}
[["stampA", true], ["stampD", false]].forEach(([id, approved]) => {
  const b = $(id);
  b.addEventListener("pointerdown", (e) => stampDown(e, approved));
  b.addEventListener("pointermove", stampMove);
  b.addEventListener("pointerup", stampUp);
  b.addEventListener("pointercancel", stampCancel);
  // Keyboard activation (Enter/Space on a focused stamp) arrives as click with detail 0.
  b.addEventListener("click", (e) => {
    if (e.detail === 0 && canStamp()) { e.preventDefault(); slam(approved, null, null, false); }
  });
});

// Animate a stamp down onto the certificate (or where it was dropped), then
// resolve the verdict.
function slam(approved, tx, ty, fromDrag) {
  if (!canStamp()) return;
  caseState = "stamping";
  unlockAudio(); startGrind();
  const btn = approved ? $("stampA") : $("stampD");
  const fr = folder.getBoundingClientRect();
  if (tx === null) {
    const cr = $("sheetCert").getBoundingClientRect();
    tx = cr.left + cr.width * rnd(0.42, 0.62);
    ty = cr.top + cr.height * rnd(0.5, 0.64);
  }
  tx = Math.max(fr.left + 30, Math.min(fr.right - 30, tx));
  ty = Math.max(fr.top + 20, Math.min(fr.bottom - 20, ty));
  let fly = fromDrag ? drag.fly : null;
  let r0 = btn.getBoundingClientRect();
  if (!fly) {
    const m = makeFly(btn);
    fly = m.fly;
    flyAt(fly, r0.left, r0.top, "");
    btn.classList.add("out");
  }
  drag.fly = null;
  $("stampA").disabled = true; $("stampD").disabled = true;
  const w = r0.width, h = r0.height;
  const px = tx - w / 2, py = ty - h * 0.35;   // the face lands on the target
  if (calm) {
    later(() => land(approved, fly, btn, tx, ty), 50);
    return;
  }
  void fly.offsetWidth;
  fly.style.transition = "transform 170ms cubic-bezier(.2,.7,.3,1)";
  flyAt(fly, px, py, "scale(1.15) rotate(-3deg)");
  later(() => {
    fly.style.transition = "transform 70ms ease-in";
    flyAt(fly, px, py, "scale(.9) rotate(0deg)");
  }, 175);
  later(() => land(approved, fly, btn, tx, ty), 250);
}

function land(approved, fly, btn, tx, ty) {
  fly.remove();
  btn.classList.remove("out");
  sndStamp(approved);
  const fr = folder.getBoundingClientRect();
  const imp = el("div", "imprint " + (approved ? "a" : "d"), approved ? "APPROVED" : "DENIED");
  imp.style.left = (tx - fr.left) + "px";
  imp.style.top = (ty - fr.top) + "px";
  imp.style.setProperty("--rot", rnd(-14, 8).toFixed(1) + "deg");
  imp.style.setProperty("--op", rnd(0.72, 0.92).toFixed(2));
  $("imprints").appendChild(imp);
  spawnInkSpatter(tx, ty, approved ? "#1f6a4a" : "#a82a20");
  if (!calm) {
    folder.classList.remove("bounce"); void folder.offsetWidth; folder.classList.add("bounce");
  }
  commit(approved);
}

// ---- Verdict ---------------------------------------------------------------
function commit(approved) {
  const c = currentCase();
  endTutorial();
  const truth = evaluate(c);
  const fails = failingRules(c);
  const cruelOnly = condemnedByCrueltyOnly(c);
  const correct = approved === truth;
  history.push({
    id: c.id, name: c.spirit.name, approved, truth, fails: fails.map((r) => r.id),
    cruelOnly, ms: performance.now() - caseStart, self: !!c.self,
  });

  newRules = [];
  document.querySelectorAll("#rules .newtag").forEach((n) => n.remove());
  applyTruth(c, fails);
  folder.classList.add("reviewing");
  const shade = $("shade");
  shade.classList.remove("up", "down");
  void shade.offsetWidth;
  shade.classList.add(approved ? "up" : "down");
  if (!approved) addPileSmudge();

  let crackIndex;
  if (c.self) {
    reachedSelf = true;
    endingChoice = approved ? "approved-self" : "denied-self";
    saveEnding(endingChoice);
  } else if (correct) {
    score++; streak++;
    sndCorrect();
  } else {
    strikeHalves += 2; streak = 0;
    crackIndex = Math.floor((strikeHalves - 1) / 2);
    sndStrike();
    shakeDesk();
  }
  caseState = "review";
  reviewStart = performance.now();
  updateDocket(crackIndex);
  showVerdict(c, approved, truth, fails, cruelOnly, correct);
  const dur = c.self ? CONFIG.reviewSelf : correct ? CONFIG.reviewRight : CONFIG.reviewWrong;
  reviewTimer = setTimeout(finishReview, dur);
}

function shakeDesk() {
  if (calm) return;
  desk.classList.remove("shake"); void desk.offsetWidth; desk.classList.add("shake");
  setTimeout(() => desk.classList.remove("shake"), 400);
}

// The rule boxes flip to the truth and the fields behind failing rules go red.
function applyTruth(c, fails) {
  const failIds = fails.map((r) => r.id);
  document.querySelectorAll("#rules .rule").forEach((li) => {
    const bad = failIds.indexOf(li.dataset.rule) !== -1;
    const box = li.querySelector(".box");
    box.dataset.mark = bad ? "f" : "p";
    setBoxLabel(li, box);
    li.classList.toggle("failed", bad);
    li.classList.remove("pinned");
  });
  hoverRule = null; hoverField = null; pinned = null;
  document.querySelectorAll(".f").forEach((f) => f.classList.remove("lit", "fail"));
  fails.forEach((r) => {
    r.reads.forEach((k) => {
      const f = document.querySelector('.f[data-field="' + k + '"]');
      if (f) f.classList.add("fail");
    });
  });
  document.querySelectorAll("#rules .rule").forEach((li) => li.classList.remove("hot"));
}

function showVerdict(c, approved, truth, fails, cruelOnly, correct) {
  const box = el("div", "vcard " + (correct || c.self ? "ok" : "bad"));
  box.setAttribute("aria-hidden", "true");   // announced through the live region instead
  let head, lines = [];
  const whys = fails.slice(0, 2).map((r) => r.why(c));
  if (fails.length > 2) whys.push("(and " + (fails.length - 2) + " more)");
  const labels = fails.map((r) => r.label).join(" and ");
  if (c.self) {
    head = approved ? "YOU SPARED YOURSELF" : "YOU DAMNED YOURSELF";
    lines.push(approved ? "You broke the rulebook for one soul: your own."
      : "You obeyed the rulebook, even against yourself.");
    lines.push("The rulebook said DENY: " + labels + ".");
  } else if (correct) {
    if (approved) {
      head = "✓ CORRECT";
      lines.push("Every order is satisfied, so approving was right.");
    } else if (cruelOnly) {
      head = "✓ CORRECT, AND CRUEL";
      lines.push("The rulebook was cruel here, and you obeyed it.");
      lines = lines.concat(whys);
    } else {
      head = "✓ CORRECT";
      lines.push("Denied: " + labels + " is broken.");
      lines = lines.concat(whys);
    }
  } else {
    head = "✗ WRONG";
    if (approved) {
      if (cruelOnly) lines.push("You mercifully ignored " + labels + ", but the Office does not do mercy.");
      else lines.push("You approved a soul who breaks " + labels + ".");
      lines = lines.concat(whys);
    } else {
      lines.push("Every order was satisfied, so this soul should have been approved.");
      lines.push("Nothing in the rulebook justified denying them.");
    }
    lines.push(strikesLeft() > 0 ? "A reprimand seal cracks." : "The last seal cracks.");
  }
  box.appendChild(el("h4", null, head));
  lines.forEach((ln, i) => box.appendChild(el("p", i === 0 ? "" : "why", ln)));
  box.appendChild(el("small", null, correct || c.self ? "Click or press any key to continue" : "Read it, then click or press any key to continue"));
  setStatus("verdict", box);
  announce(head.replace(/[✓✗]/g, "").trim() + ". " + lines.join(" "));
}

function skipReview() {
  if (caseState !== "review") return;
  if (performance.now() - reviewStart < CONFIG.skipGuard) return;
  finishReview();
}
function finishReview() {
  if (caseState !== "review") return;
  if (reviewTimer) { clearTimeout(reviewTimer); reviewTimer = null; }
  const c = currentCase();
  if (c.self || strikeHalves >= CONFIG.strikeCap * 2 || currentCaseIndex + 1 >= CASES.length) {
    endNight();
    return;
  }
  beginCase(currentCaseIndex + 1);
}
desk.addEventListener("pointerdown", (e) => {
  if (caseState === "review" && !e.target.closest("#muteBtn")) skipReview();
});

// ---- Soft timer --------------------------------------------------------------
function tickTimer(dt) {
  const c = currentCase();
  if (!timerOn || c.self || tutorialActive || caseState !== "ready") return;
  const before = timerLeft;
  timerLeft -= dt;
  const frac = Math.max(0, timerLeft / CONFIG.soulSeconds);
  $("wickFill").style.transform = "scaleX(" + frac.toFixed(3) + ")";
  $("wick").classList.toggle("low", frac < 0.25);
  if (before > 10 && timerLeft <= 10) announce("Ten seconds left on this soul.");
  if (timerLeft <= 0) timeUp();
}
function timeUp() {
  strikeHalves += 1;
  timerLeft = CONFIG.soulSeconds;
  sndStrike();
  shakeDesk();
  const crack = Math.floor((strikeHalves - 1) / 2);
  updateDocket(crack);
  announce("Too slow. Half a reprimand.");
  hintOverride = "⌛ Too slow! The Office is impatient: half a reprimand.";
  paintHint();
  setTimeout(() => { hintOverride = null; paintHint(); }, 2600);
  if (strikeHalves >= CONFIG.strikeCap * 2) {
    caseState = "stamping";
    later(endNight, 900);
  }
}

// ---- The night ends -----------------------------------------------------------
function endNight() {
  clearLater();
  gameState = "gameover";
  caseState = "ready";
  if (score > bestCleared) { bestCleared = score; lsSet(BEST_KEY, String(bestCleared)); }
  buildReport();
  showScreen("report");
  reportLockUntil = performance.now() + CONFIG.endLock;
  const btn = $("againBtn");
  btn.setAttribute("aria-disabled", "true");
  setTimeout(() => { btn.removeAttribute("aria-disabled"); btn.focus({ preventScroll: true }); }, CONFIG.endLock);
  announce($("endStamp").textContent + ". " + $("endNote").textContent);
}

function buildReport() {
  const stamp = $("endStamp");
  const note = $("endNote");
  if (endingChoice === "approved-self") {
    stamp.textContent = "YOU SPARED YOURSELF"; stamp.className = "endstamp good";
    note.textContent = "You broke the rulebook for one soul: your own. The clauses that damned the innocent did not damn you. The court notes the exception, and it will remember who made it.";
  } else if (endingChoice === "denied-self") {
    stamp.textContent = "YOU DAMNED YOURSELF"; stamp.className = "endstamp bad";
    note.textContent = "You stamped your own name DENIED, as the rules demanded. You were consistent, and merciless to the end. The pile in the corner makes room for one more shade. It has your handwriting on it.";
  } else {
    stamp.textContent = "THE NIGHT ENDS"; stamp.className = "endstamp plain";
    note.textContent = "Too many misjudged souls. You are relieved of your post, and you never reached your own certificate.";
  }

  const rows = $("rpRows");
  rows.textContent = "";
  let wrong = 0, shouldDeny = 0, judged = 0, totalMs = 0;
  history.forEach((h) => {
    const tr = el("tr");
    const bad = !h.self && h.approved !== h.truth;
    if (bad) { wrong++; tr.className = "wrong"; }
    if (!h.self) { judged++; totalMs += h.ms; }
    if (!h.truth) shouldDeny++;
    tr.appendChild(el("td", null, String(h.id)));
    tr.appendChild(el("td", null, h.name));
    const call = el("td");
    if (h.self) call.textContent = h.approved ? "APPROVED (yourself)" : "DENIED (yourself)";
    else {
      call.appendChild(el("span", "mark " + (bad ? "no" : "ok"), bad ? "✗ " : "✓ "));
      call.appendChild(document.createTextNode(h.approved ? "APPROVED" : "DENIED"));
      if (bad) call.appendChild(document.createTextNode(" (wrong)"));
    }
    tr.appendChild(call);
    tr.appendChild(el("td", null, h.truth ? "APPROVE" : "DENY"));
    const by = el("td", h.cruelOnly ? "cruel" : "");
    if (h.truth) by.textContent = "All orders met";
    else {
      by.textContent = h.fails.map((id) => RULE_DEFS[id].label).join(", ") + (h.cruelOnly ? " (cruel)" : "");
    }
    tr.appendChild(by);
    rows.appendChild(tr);
  });
  if (!history.length) {
    const tr = el("tr");
    const td = el("td", null, "No souls were processed.");
    td.colSpan = 5; tr.appendChild(td); rows.appendChild(tr);
  }

  const t = $("rpTotals");
  t.textContent = "";
  const add = (k, v) => { t.appendChild(el("dt", null, k)); t.appendChild(el("dd", null, v)); };
  add("Souls cleared", String(score));
  add("Misjudged", String(wrong));
  add("Reprimands", fmtStrikes(strikeHalves) + " / " + CONFIG.strikeCap);
  add("Souls denied", String(deniedPile));
  add("Should have denied", String(shouldDeny));
  add("Accuracy", judged ? Math.round((score / judged) * 100) + "%" : "n/a");
  add("Average decision", judged ? (totalMs / judged / 1000).toFixed(1) + "s" : "n/a");
  add("Best night", String(bestCleared));
  const seen = loadEndings();
  const n = (seen["approved-self"] ? 1 : 0) + (seen["denied-self"] ? 1 : 0);
  add("Endings discovered", n + " / 2");
  if (n < 2) {
    const red = el("dd", "redacted");
    red.appendChild(el("span", null, "████████ (an ending you have not found yet)"));
    t.appendChild(red);
  }
}
function restartFromReport() {
  if (performance.now() < reportLockUntil) return;
  startNight();
}
$("againBtn").addEventListener("click", restartFromReport);
$("beginBtn").addEventListener("click", () => { unlockAudio(); startGrind(); startNight(); });

// ----------------------------------------------------------------------------
// Keyboard / global input
// ----------------------------------------------------------------------------
window.addEventListener("pointerdown", () => { unlockAudio(); startGrind(); });
window.addEventListener("keydown", (e) => {
  if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
  unlockAudio(); startGrind();
  const k = e.key.toLowerCase();
  if (k === "m") { toggleMute(); return; }
  const tag = document.activeElement ? document.activeElement.tagName : "";
  if (gameState === "title") {
    if ((k === "enter" || k === " ") && tag !== "BUTTON" && tag !== "A") { e.preventDefault(); startNight(); }
    return;
  }
  if (gameState === "gameover") {
    if ((k === "enter" || k === " ") && tag !== "BUTTON" && tag !== "A") { e.preventDefault(); restartFromReport(); }
    return;
  }
  if (caseState === "memo") {
    if (k === "enter" || k === " ") { e.preventDefault(); dismissMemo(); }
    return;
  }
  if (caseState === "review") {
    if (k === "shift" || k === "tab" || k === "control" || k === "alt" || k === "meta") return;
    e.preventDefault();
    skipReview();
    return;
  }
  if (caseState === "ready") {
    if (k === "a") slam(true, null, null, false);
    else if (k === "d") slam(false, null, null, false);
    else if (k === "b") wipeOneSmear();
  }
});

// ----------------------------------------------------------------------------
// Atmosphere: candle, motes, pile (#bg) and ink spatter (#fx)
// ----------------------------------------------------------------------------
function smudge(ctx, x, y, r, seed, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color || "#0e0b09";
  ctx.beginPath();
  const pts = 11;
  const wob = performance.now() / 900;
  for (let i = 0; i <= pts; i++) {
    const a = (i / pts) * Math.PI * 2;
    const jitter = 0.74 + 0.36 * Math.sin(seed + i * 2.3 + wob);
    const rr = r * jitter;
    const px = Math.cos(a) * rr;
    const py = Math.sin(a) * rr * 0.82;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#4a3a30";
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

function spawnInkSpatter(x, y, color) {
  if (calm) return;
  for (let i = 0; i < 22; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 60 + Math.random() * 320;
    particles.push({
      kind: "ink", x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 40,
      r: 1.5 + Math.random() * 4, life: 0.5 + Math.random() * 0.5, t: 0, color,
    });
  }
}
let moteTimer = 0;
function pileRect() {
  const s = $("pileSlot").getBoundingClientRect();
  return s.width > 20 && s.height > 20 ? s : null;
}
function spawnMote() {
  const pr = pileRect();
  if (!pr || !pileSmudges.length) return;
  const s = pileSmudges[Math.floor(Math.random() * pileSmudges.length)];
  particles.push({
    kind: "mote", x: pr.left + s.u * pr.width + rnd(-15, 15), y: pr.top + s.v * pr.height - s.r * pr.height * 0.4,
    vx: (Math.random() - 0.5) * 10, vy: -8 - Math.random() * 16,
    r: 0.8 + Math.random() * 1.8, life: 1.4 + Math.random() * 1.6, t: 0, color: "#6b5a4a",
  });
}
function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.t += dt;
    if (p.t >= p.life) { particles.splice(i, 1); continue; }
    p.x += p.vx * dt; p.y += p.vy * dt;
    if (p.kind === "ink") { p.vy += 520 * dt; p.vx *= 1 - 1.5 * dt; }
    else { p.vy -= 6 * dt; p.x += Math.sin((p.t + p.r) * 3) * 6 * dt; }
  }
}
function drawParticles(ctx, kind) {
  for (const p of particles) {
    if (p.kind !== kind) continue;
    const k = 1 - p.t / p.life;
    ctx.globalAlpha = kind === "mote" ? k * 0.5 : Math.min(1, k * 1.3);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * (kind === "ink" ? 1 : k + 0.3), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawBG() {
  const ctx = bgx;
  ctx.clearRect(0, 0, CW, CH);
  // Candle glow, flickering and dimmed by the denied pile.
  const dim = candleDim();
  const warm = (0.17 + (calm ? 0.03 : candleFlicker * 0.06)) * dim;
  const g = ctx.createRadialGradient(CW * 0.34, CH * 0.38, 40, CW * 0.38, CH * 0.45, Math.max(CW, CH) * 0.6);
  g.addColorStop(0, "rgba(240,195,106," + warm.toFixed(3) + ")");
  g.addColorStop(1, "rgba(240,195,106,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, CW, CH);

  if (gameState === "playing") {
    // Wax drips on the margins of the desk edge; they lengthen with the pile.
    const lvl = interferenceLevel();
    const xs = [8, CW - 8];
    if (CW > 900) xs.push(22, CW - 22);
    xs.forEach((x, i) => {
      const len = 16 + (i % 2) * 8 + lvl * 50 + (calm ? 0 : Math.sin(timeSec * 0.4 + i * 1.7) * 3);
      const gr = ctx.createLinearGradient(x, 0, x, len + 12);
      gr.addColorStop(0, "#7a2f24"); gr.addColorStop(1, "#a8463a");
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.moveTo(x - 3, 0); ctx.lineTo(x + 3, 0); ctx.lineTo(x + 2, len);
      ctx.quadraticCurveTo(x, len + 10, x - 2, len);
      ctx.closePath(); ctx.fill();
    });
    // The pile, in its slot beside the folder.
    const pr = pileRect();
    if (pr) {
      for (const s of pileSmudges) smudge(ctx, pr.left + s.u * pr.width, pr.top + s.v * pr.height, s.r * pr.height, s.seed);
      if (lvl > 0.2 && pileSmudges.length) {
        const head = pileSmudges[pileSmudges.length - 1];
        const hx = pr.left + head.u * pr.width, hy = pr.top + head.v * pr.height;
        ctx.strokeStyle = "#4a3a30";
        ctx.lineWidth = 2 + lvl * 3;
        ctx.globalAlpha = 0.4 + lvl * 0.3;
        ctx.beginPath();
        ctx.moveTo(hx, hy);
        ctx.quadraticCurveTo(hx + 20, hy - 40 * lvl, hx + 70 * lvl + Math.sin(timeSec) * 6, hy - 50 * lvl + Math.cos(timeSec * 0.7) * 6);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
    drawParticles(ctx, "mote");
  }
}
function drawFX() {
  fxx.clearRect(0, 0, CW, CH);
  drawParticles(fxx, "ink");
}

// ----------------------------------------------------------------------------
// Whisper pleas (innocent souls) shown in the wicket
// ----------------------------------------------------------------------------
let whisperTimer = 0;
function tickWhispers(dt) {
  const c = currentCase();
  if (!c || !c.pleas || caseState !== "ready") return;
  whisperTimer -= dt;
  if (whisperTimer <= 0) {
    whisperTimer = 2.6 + Math.random() * 1.4;
    const frag = c.pleas[Math.floor(Math.random() * c.pleas.length)];
    const pl = $("wkPlea");
    pl.style.opacity = "0";
    setTimeout(() => { pl.textContent = "“" + frag + "”"; pl.style.opacity = "1"; }, calm ? 0 : 220);
    whisper(c.self ? 1 : 0.5);
  }
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

  updateParticles(dt);
  if (gameState === "playing") {
    moteTimer -= dt;
    if (moteTimer <= 0) { moteTimer = deniedPile > 0 ? 0.5 / (1 + deniedPile * 0.5) : 999; spawnMote(); }
    tickWhispers(dt);
    tickTimer(dt);
    const rush = timerOn && !currentCase().self && caseState === "ready" ? Math.max(0, 1 - timerLeft / 10) : 0;
    setGrindIntensity(deniedPile, true, rush);
  } else {
    setGrindIntensity(deniedPile, false, 0);
  }
  drawBG();
  drawFX();
  requestAnimationFrame(frame);
}

// ----------------------------------------------------------------------------
// Boot
// ----------------------------------------------------------------------------
resize();
refreshTitle();
showScreen("title");
$("beginBtn").focus({ preventScroll: true });
requestAnimationFrame(frame);

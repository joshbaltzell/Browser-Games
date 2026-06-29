/* =====================================================================
   LAST WORDS — Phase 1: Core Mechanic Prototype
   A deckbuilder where cards are word-fragments. You chain them left-to-right
   into a grammatically valid sentence, then cast it LITERALLY.
   `BURN the GUARD twice` deals fire damage x2 to the Guard.
   `the GUARD STRIKES YOU` turns the blow against the player.

   Grey-box draft: correctness + feel of the mechanic first. Typewriter skin,
   audio, the twist, content curve and onboarding are later phases.
   ===================================================================== */

(function () {
  "use strict";

  const DEBUG = true;

  // ---- Palette (SCAF-02) ----------------------------------------------
  const COLORS = {
    paper:  "#ede4cf",
    paper2: "#e3d8bd",
    carbon: "#221e1a",
    ribbon: "#b3261e",
    faded:  "#8a8174",
    bleed:  "#6b1410",
    snap:   "#3c7a4e",
    socket: "#c9bda0",
  };

  // ---- Canvas ----------------------------------------------------------
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  const W = canvas.width;   // 960
  const H = canvas.height;  // 640

  function fitCanvas() {
    const pad = 24;
    const aw = window.innerWidth - pad;
    const ah = window.innerHeight - pad;
    const scale = Math.min(aw / W, ah / H, 1.25);
    canvas.style.width = Math.round(W * scale) + "px";
    canvas.style.height = Math.round(H * scale) + "px";
  }
  window.addEventListener("resize", fitCanvas);
  fitCanvas();

  // Map a DOM pointer event to canvas pixel coords.
  function eventToCanvas(e) {
    const r = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) * (W / r.width),
      y: (e.clientY - r.top) * (H / r.height),
    };
  }

  // ---- Web Audio unlock stub (SCAF-03 groundwork) ----------------------
  // Lazily create + resume a single AudioContext on first gesture so the
  // pattern is file://-safe. Phase 2 adds the actual key-clack synthesis;
  // here we ship a couple of tiny cues so feel-testing isn't silent.
  let audioCtx = null;
  function unlockAudio() {
    if (audioCtx) {
      if (audioCtx.state === "suspended") audioCtx.resume();
      return;
    }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioCtx = new AC();
    } catch (err) {
      audioCtx = null;
    }
  }
  function blip(freq, dur, type, gain) {
    if (!audioCtx) return;
    const t = audioCtx.currentTime;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type || "square";
    o.frequency.value = freq;
    g.gain.value = 0;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain || 0.08, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.06));
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start(t);
    o.stop(t + (dur || 0.06) + 0.02);
  }
  const sfx = {
    snap:   () => blip(420, 0.05, "square", 0.06),
    reject: () => { blip(110, 0.12, "sawtooth", 0.08); },
    cast:   () => { blip(330, 0.05, "square", 0.07); setTimeout(() => blip(660, 0.09, "square", 0.06), 60); },
    ding:   () => blip(880, 0.18, "sine", 0.07),
    hurt:   () => blip(90, 0.2, "sawtooth", 0.09),
  };

  // =====================================================================
  // CARD + SOCKET DATA MODEL (CORE-01)
  // ---------------------------------------------------------------------
  // pos: VERB | NOUN | ADJ | ADV | NUM | ART
  // A card has an `inSocket` (what must precede it) and `outSocket`
  // (what it leaves open after it). We resolve legality through a small
  // explicit grammar state-machine rather than a parser (CORE-03).
  //
  // Grammar skeleton (the only legal sentence shape):
  //   ART? ADJ? NOUN(subj)  ->  VERB  ->  ART? ADJ? NOUN(obj)  ->  ADV?/NUM?
  //
  // We model the chain's "expectation" as one of these phases:
  //   SUBJ  : building the subject noun-phrase (can take ART, ADJ, NOUN)
  //   VERB  : subject complete, need a VERB
  //   OBJ   : verb placed, building object noun-phrase (ART, ADJ, NOUN)
  //   MOD   : sentence complete & castable; optionally one ADV or NUM
  //   DONE  : modifier placed; nothing more may attach
  // =====================================================================

  // Each fragment definition. role on NOUN cards marks whether it can be a
  // target ('enemy'/'player'/'thing') for literal execution.
  const POOL = [
    // Articles
    { word: "the",    pos: "ART" },
    { word: "the",    pos: "ART" },
    { word: "a",      pos: "ART" },
    // Adjectives
    { word: "WEAK",   pos: "ADJ", mult: 0.5 },
    { word: "CRUEL",  pos: "ADJ", add: 2 },
    { word: "BURNING",pos: "ADJ", add: 1 },
    // Nouns (subjects/objects). target: who the effect lands on when this is the OBJECT.
    { word: "GUARD",  pos: "NOUN", target: "enemy" },
    { word: "GUARD",  pos: "NOUN", target: "enemy" },
    { word: "WOUND",  pos: "NOUN", target: "enemy" },
    { word: "YOU",    pos: "NOUN", target: "player" },
    { word: "I",      pos: "NOUN", target: "player" },
    // Verbs
    { word: "BURN",   pos: "VERB", effect: "fire",  base: 3 },
    { word: "STRIKES",pos: "VERB", effect: "phys",  base: 4 },
    { word: "STRIKE", pos: "VERB", effect: "phys",  base: 4 },
    { word: "HEALS",  pos: "VERB", effect: "heal",  base: 3 },
    { word: "HEAL",   pos: "VERB", effect: "heal",  base: 3 },
    // Adverbs / Numbers (repeat / quantify)
    { word: "twice",  pos: "ADV", rep: 2 },
    { word: "thrice", pos: "ADV", rep: 3 },
    { word: "2",      pos: "NUM", rep: 2 },
    { word: "3",      pos: "NUM", rep: 3 },
  ];

  let _uid = 0;
  function makeCard(def) {
    return Object.assign({ id: ++_uid }, def);
  }

  // ---- Grammar engine --------------------------------------------------
  // Two legal sentence shapes:
  //   IMPERATIVE:   VERB -> ART? ADJ? NOUN(obj) -> ADV?/NUM?      (BURN the GUARD twice)
  //   DECLARATIVE:  ART? ADJ? NOUN(subj) -> VERB -> ART? ADJ? NOUN(obj) -> ADV?/NUM?
  //                                                               (the GUARD STRIKES YOU)
  //
  // Phases the chain can be expecting next:
  //   START : empty chain -> may begin with a VERB (imperative) or a
  //           subject noun-phrase (ART/ADJ/NOUN).
  //   SUBJ  : building the subject noun-phrase (declarative path).
  //   VERB  : subject complete, need a VERB.
  //   OBJ   : verb placed, building object noun-phrase (ART/ADJ/NOUN).
  //   MOD   : sentence complete & castable; optionally one ADV or NUM.
  //   DONE  : modifier placed; nothing more may attach.
  //
  // Single walker returns {phase, usedArt, usedAdj} where the art/adj flags
  // describe only the trailing OPEN noun-phrase (so no doubled ART/ADJ).
  function walkChain(chain) {
    let phase = "START";
    let usedArt = false, usedAdj = false;
    for (const c of chain) {
      switch (phase) {
        case "START":
          if (c.pos === "VERB") { phase = "OBJ"; usedArt = false; usedAdj = false; }
          else if (c.pos === "ART") { phase = "SUBJ"; usedArt = true; }
          else if (c.pos === "ADJ") { phase = "SUBJ"; usedAdj = true; }
          else if (c.pos === "NOUN") { phase = "VERB"; usedArt = false; usedAdj = false; }
          break;
        case "SUBJ":
          if (c.pos === "ART") usedArt = true;
          else if (c.pos === "ADJ") usedAdj = true;
          else if (c.pos === "NOUN") { phase = "VERB"; usedArt = false; usedAdj = false; }
          break;
        case "VERB":
          if (c.pos === "VERB") { phase = "OBJ"; usedArt = false; usedAdj = false; }
          break;
        case "OBJ":
          if (c.pos === "ART") usedArt = true;
          else if (c.pos === "ADJ") usedAdj = true;
          else if (c.pos === "NOUN") { phase = "MOD"; usedArt = false; usedAdj = false; }
          break;
        case "MOD":
          if (c.pos === "ADV" || c.pos === "NUM") phase = "DONE";
          break;
      }
    }
    return { phase, usedArt, usedAdj };
  }

  function chainPhase(chain) {
    return walkChain(chain).phase;
  }

  // CORE-02 / CORE-03: can this card legally attach to the chain right now?
  function canAttach(chain, card) {
    const { phase, usedArt, usedAdj } = walkChain(chain);
    switch (phase) {
      case "START":
        // May begin with a VERB (imperative) or a subject noun-phrase.
        return card.pos === "VERB" || card.pos === "ART" ||
               card.pos === "ADJ" || card.pos === "NOUN";
      case "SUBJ":
      case "OBJ":
        if (card.pos === "ART") return !usedArt && !usedAdj; // ART must lead the phrase
        if (card.pos === "ADJ") return !usedAdj;
        if (card.pos === "NOUN") return true;
        return false;
      case "VERB":
        return card.pos === "VERB";
      case "MOD":
        return card.pos === "ADV" || card.pos === "NUM";
      case "DONE":
        return false;
    }
    return false;
  }

  // A sentence is castable when subject+verb+object are all present.
  function isCastable(chain) {
    const p = chainPhase(chain);
    return p === "MOD" || p === "DONE";
  }

  // A short human label for the open socket (debug + onboarding hint).
  function openSocketLabel(chain) {
    const p = chainPhase(chain);
    switch (p) {
      case "START": return "OPEN  (start: VERB, or the / ADJ / NOUN-subject)";
      case "SUBJ": return "SUBJECT  (ADJ / NOUN)";
      case "VERB": return "VERB";
      case "OBJ":  return "OBJECT  (the / ADJ / NOUN)";
      case "MOD":  return "READY  (optional: ADV / NUM, or Return)";
      case "DONE": return "READY  (Return to cast)";
    }
    return "";
  }

  // =====================================================================
  // LITERAL EXECUTION ENGINE (CORE-06 / CORE-07)
  // Parse the placed chain into subject / verb / object / modifier and
  // compute the literal effect. The OBJECT noun's `target` decides who is
  // hit — so `the GUARD STRIKES YOU` lands on the player.
  // =====================================================================
  function parseChain(chain) {
    let phase = "START";
    const out = { subj: null, verb: null, obj: null, mod: null };
    let adjBucket = [];
    for (const c of chain) {
      if (phase === "START") {
        // Imperative: VERB first, no subject. Declarative: subject phrase first.
        if (c.pos === "VERB") { out.verb = c; phase = "OBJ"; adjBucket = []; }
        else if (c.pos === "ADJ") { adjBucket.push(c); phase = "SUBJ"; }
        else if (c.pos === "NOUN") { out.subj = c; out.subjAdjs = adjBucket; adjBucket = []; phase = "VERB"; }
        // ART contributes nothing to the effect; just advance into SUBJ.
        else if (c.pos === "ART") { phase = "SUBJ"; }
      } else if (phase === "SUBJ") {
        if (c.pos === "ADJ") adjBucket.push(c);
        else if (c.pos === "NOUN") { out.subj = c; out.subjAdjs = adjBucket; adjBucket = []; phase = "VERB"; }
      } else if (phase === "VERB") {
        if (c.pos === "VERB") { out.verb = c; phase = "OBJ"; adjBucket = []; }
      } else if (phase === "OBJ") {
        if (c.pos === "ADJ") adjBucket.push(c);
        else if (c.pos === "NOUN") { out.obj = c; out.objAdjs = adjBucket; adjBucket = []; phase = "MOD"; }
      } else if (phase === "MOD") {
        if (c.pos === "ADV" || c.pos === "NUM") out.mod = c;
      }
    }
    out.subjAdjs = out.subjAdjs || [];
    out.objAdjs = out.objAdjs || [];
    return out;
  }

  // Compute the literal effect of a (castable) chain. Returns null if not castable.
  function computeEffect(chain) {
    if (!isCastable(chain)) return null;
    const p = parseChain(chain);
    if (!p.verb || !p.obj) return null;

    const eff = p.verb.effect;            // fire | phys | heal
    let amount = p.verb.base || 0;

    // Object adjectives modify the magnitude.
    for (const a of p.objAdjs) {
      if (a.mult != null) amount = Math.round(amount * a.mult);
      if (a.add != null) amount += a.add;
    }
    amount = Math.max(0, amount);

    const reps = p.mod ? (p.mod.rep || 1) : 1;

    // The OBJECT noun decides the target (literal execution).
    const target = p.obj.target; // 'enemy' | 'player'
    const total = amount * reps;

    return {
      effect: eff,
      amount,
      reps,
      total,
      target,
      heal: eff === "heal",
      summary:
        (eff === "heal" ? "heal " : eff === "fire" ? "fire " : "hit ") +
        amount + (reps > 1 ? " x" + reps : "") +
        " -> " + (target === "player" ? "YOU" : enemy.name) +
        " = " + total,
    };
  }

  // The readable sentence preview line (CORE-04).
  function previewSentence(chain) {
    return chain.map((c) => c.word).join(" ");
  }

  // =====================================================================
  // GAME STATE (SCAF-02 state machine)
  // =====================================================================
  const STATE = { TITLE: "TITLE", RUN: "RUN", WIN: "WIN", LOSE: "LOSE" };
  let state = STATE.TITLE;

  const HAND_SIZE = 12;
  const PLAYER_MAX = 30;

  let player = { hp: PLAYER_MAX, max: PLAYER_MAX };
  let enemy = null;
  let hand = [];     // array of card objects
  let chain = [];    // array of card objects placed on the platen
  let turnNo = 0;
  let lastLog = "";  // last resolution message
  let lastDelta = ""; // last HP delta readout

  // localStorage best (deepest damage dealt this draft) — ONBOARD-03 groundwork.
  const BEST_KEY = "lastWords.best";
  function loadBest() {
    try { return parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0; }
    catch (e) { return 0; }
  }
  function saveBest(v) {
    try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) {}
  }
  let best = loadBest();
  let runDamage = 0; // total damage dealt to enemies this run

  function newEnemy() {
    return { name: "GUARD", hp: 24, max: 24, reply: 4 };
  }

  // Floating ink particles for damage feedback (grey-box version).
  let particles = [];
  function spawnInk(x, y, color, n) {
    for (let i = 0; i < (n || 10); i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 20 + Math.random() * 80;
      particles.push({
        x, y,
        vx: Math.cos(a) * s, vy: Math.sin(a) * s - 30,
        life: 0.6 + Math.random() * 0.5, age: 0,
        r: 2 + Math.random() * 4, color,
      });
    }
  }

  function dealHand() {
    hand = [];
    // Draw HAND_SIZE cards from a shuffled copy of the pool (with repeats
    // until filled). Ensure the hand is "playable": at least 1 NOUN + 1 VERB.
    const src = POOL.slice();
    function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } }
    let guard = 0;
    do {
      hand = [];
      const bag = src.slice();
      shuffle(bag);
      while (hand.length < HAND_SIZE) {
        if (bag.length === 0) { const b2 = src.slice(); shuffle(b2); bag.push.apply(bag, b2); }
        hand.push(makeCard(bag.pop()));
      }
      guard++;
    } while (guard < 30 && !(hand.some(c => c.pos === "NOUN") && hand.some(c => c.pos === "VERB")));
  }

  function startRun() {
    player = { hp: PLAYER_MAX, max: PLAYER_MAX };
    enemy = newEnemy();
    chain = [];
    turnNo = 1;
    runDamage = 0;
    lastLog = "Build a sentence. Click cards to chain them.";
    lastDelta = "";
    particles = [];
    dealHand();
    state = STATE.RUN;
  }

  // ---- Chain manipulation ----------------------------------------------
  function tryPlaceCard(idx) {
    const card = hand[idx];
    if (!card) return;
    if (canAttach(chain, card)) {
      chain.push(card);
      hand.splice(idx, 1);
      sfx.snap();
    } else {
      // Illegal placement: visible reject (JUICE groundwork) + buzz.
      card.shake = 0.35;
      sfx.reject();
    }
  }

  function undoLast() {
    if (chain.length === 0) return;
    const c = chain.pop();
    hand.push(c);
    sfx.snap();
  }

  function clearChain() {
    while (chain.length) hand.push(chain.pop());
  }

  // CORE-06/07/08: commit + resolve + enemy reply + redraw.
  function castChain() {
    const fx = computeEffect(chain);
    if (!fx) { sfx.reject(); lastLog = "Not a complete sentence yet."; return; }

    sfx.cast();
    const sentence = previewSentence(chain);

    // Apply literal effect to the resolved target.
    let dmgEnemy = 0, dmgPlayer = 0, healEnemy = 0, healPlayer = 0;
    if (fx.heal) {
      if (fx.target === "player") { healPlayer = fx.total; player.hp = Math.min(player.max, player.hp + fx.total); }
      else { healEnemy = fx.total; enemy.hp = Math.min(enemy.max, enemy.hp + fx.total); }
    } else {
      if (fx.target === "player") { dmgPlayer = fx.total; player.hp -= fx.total; sfx.hurt(); }
      else { dmgEnemy = fx.total; enemy.hp -= fx.total; runDamage += fx.total; }
    }

    // Ink feedback at the target.
    if (fx.target === "player") spawnInk(120, H - 120, COLORS.bleed, 14);
    else spawnInk(W - 160, 180, fx.heal ? COLORS.snap : COLORS.bleed, 14);

    // Build the delta readout (debug / legibility gate).
    const parts = [];
    if (dmgEnemy) parts.push(enemy.name + " -" + dmgEnemy);
    if (healEnemy) parts.push(enemy.name + " +" + healEnemy);
    if (dmgPlayer) parts.push("YOU -" + dmgPlayer);
    if (healPlayer) parts.push("YOU +" + healPlayer);
    lastDelta = parts.join("   ");
    lastLog = '"' + sentence + '"  ->  ' + fx.summary;

    // Clear the chain (spent cards are consumed this draft).
    chain = [];

    // Win check.
    if (enemy.hp <= 0) {
      enemy.hp = 0;
      if (runDamage > best) { best = runDamage; saveBest(best); }
      state = STATE.WIN;
      sfx.ding();
      return;
    }

    // CORE-08: enemy reply, then end the turn (carriage return ding) + redraw.
    enemy.hp = Math.max(0, enemy.hp);
    player.hp -= enemy.reply;
    sfx.hurt();
    spawnInk(120, H - 120, COLORS.bleed, 10);
    lastDelta += (lastDelta ? "   " : "") + enemy.name + " replies: YOU -" + enemy.reply;

    sfx.ding();
    turnNo++;

    if (player.hp <= 0) {
      player.hp = 0;
      if (runDamage > best) { best = runDamage; saveBest(best); }
      state = STATE.LOSE;
      return;
    }

    dealHand();
  }

  // =====================================================================
  // INPUT
  // =====================================================================
  // Hit-testable rects for the current frame's hand + buttons.
  let handRects = [];
  let btnRects = {}; // {cast, clear, undo}

  function onPointerDown(e) {
    unlockAudio();
    const p = eventToCanvas(e);

    if (state === STATE.TITLE) { startRun(); return; }
    if (state === STATE.WIN || state === STATE.LOSE) { state = STATE.TITLE; return; }

    // RUN: buttons first.
    for (const key in btnRects) {
      const r = btnRects[key];
      if (r && hit(p, r)) {
        if (key === "cast") castChain();
        else if (key === "clear") clearChain();
        else if (key === "undo") undoLast();
        return;
      }
    }
    // Hand cards.
    for (let i = 0; i < handRects.length; i++) {
      if (hit(p, handRects[i])) { tryPlaceCard(handRects[i].idx); return; }
    }
  }

  function hit(p, r) {
    return p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h;
  }

  function onKeyDown(e) {
    unlockAudio();
    if (state === STATE.TITLE) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); startRun(); }
      return;
    }
    if (state === STATE.WIN || state === STATE.LOSE) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); state = STATE.TITLE; }
      return;
    }
    // RUN
    if (e.key === "Enter") { e.preventDefault(); castChain(); }
    else if (e.key === "Backspace") { e.preventDefault(); undoLast(); }
    else if (e.key === "Escape") { e.preventDefault(); clearChain(); }
    else if (e.key >= "1" && e.key <= "9") {
      const idx = parseInt(e.key, 10) - 1;
      if (idx < hand.length) tryPlaceCard(idx);
    }
  }

  canvas.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("keydown", onKeyDown);

  // =====================================================================
  // RENDER
  // =====================================================================
  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // A small color/letter tag per part of speech for grey-box legibility.
  const POS_TAG = {
    VERB: { c: "#7a3b12", t: "VERB" },
    NOUN: { c: "#1f4a6b", t: "NOUN" },
    ADJ:  { c: "#5a3d6b", t: "ADJ" },
    ADV:  { c: "#2f6b4a", t: "ADV" },
    NUM:  { c: "#2f6b4a", t: "NUM" },
    ART:  { c: "#7a746a", t: "ART" },
  };

  function drawCard(x, y, w, h, card, opts) {
    opts = opts || {};
    ctx.save();
    if (card.shake && card.shake > 0) {
      ctx.translate(Math.sin(card.shake * 60) * 4, 0);
    }
    // torn-paper chit (grey-box: rounded rect).
    ctx.fillStyle = opts.legal === false ? COLORS.paper2 : "#f5eedd";
    ctx.strokeStyle = opts.highlight ? COLORS.ribbon : COLORS.faded;
    ctx.lineWidth = opts.highlight ? 2.5 : 1.4;
    roundRect(x, y, w, h, 6);
    ctx.fill();
    ctx.stroke();

    if (opts.legal === false) {
      ctx.globalAlpha = 0.45;
    }

    // POS tag chip (the "socket" hint).
    const tag = POS_TAG[card.pos] || { c: COLORS.faded, t: card.pos };
    ctx.fillStyle = tag.c;
    roundRect(x + 6, y + 6, w - 12, 16, 3);
    ctx.fill();
    ctx.fillStyle = "#f5eedd";
    ctx.font = "bold 10px 'Courier New', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(tag.t, x + w / 2, y + 14);

    // The word.
    ctx.fillStyle = COLORS.carbon;
    let fs = 16;
    ctx.font = "bold " + fs + "px 'Courier New', monospace";
    while (ctx.measureText(card.word).width > w - 12 && fs > 9) {
      fs -= 1; ctx.font = "bold " + fs + "px 'Courier New', monospace";
    }
    ctx.fillText(card.word, x + w / 2, y + h / 2 + 6);

    // index hint for keyboard play.
    if (opts.index != null) {
      ctx.fillStyle = COLORS.faded;
      ctx.font = "9px 'Courier New', monospace";
      ctx.textAlign = "right";
      ctx.fillText(String(opts.index), x + w - 6, y + h - 6);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawHPBar(x, y, w, label, hp, max, color) {
    ctx.fillStyle = COLORS.carbon;
    ctx.font = "bold 13px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(label + "  " + hp + "/" + max, x, y - 6);
    ctx.fillStyle = "#d8ccb0";
    roundRect(x, y, w, 12, 4); ctx.fill();
    ctx.fillStyle = color;
    const frac = Math.max(0, hp / max);
    roundRect(x, y, w * frac, 12, 4); ctx.fill();
  }

  function drawTitle() {
    ctx.fillStyle = COLORS.paper;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = COLORS.carbon;
    ctx.textAlign = "center";
    ctx.font = "bold 64px 'Courier New', monospace";
    ctx.fillText("LAST WORDS", W / 2, 200);

    ctx.fillStyle = COLORS.ribbon;
    ctx.font = "18px 'Courier New', monospace";
    ctx.fillText("Chain word-cards into a sentence. It is cast LITERALLY.", W / 2, 250);

    ctx.fillStyle = COLORS.carbon;
    ctx.font = "15px 'Courier New', monospace";
    ctx.fillText("Click cards (or press 1-9) to chain  -  Backspace undo  -  Esc clear  -  Enter cast", W / 2, 320);
    ctx.fillText('Example:  BURN the GUARD twice   = fire 3 x2 = 6 to the GUARD', W / 2, 352);
    ctx.fillStyle = COLORS.faded;
    ctx.fillText('Beware:  "the GUARD STRIKES YOU"  hits YOU, not the enemy.', W / 2, 380);

    ctx.fillStyle = COLORS.carbon;
    ctx.font = "13px 'Courier New', monospace";
    ctx.fillText("Best damage dealt: " + best, W / 2, 450);

    ctx.fillStyle = COLORS.ribbon;
    ctx.font = "bold 20px 'Courier New', monospace";
    ctx.fillText("CLICK or press ENTER to begin", W / 2, 520);
  }

  function drawEndScreen() {
    ctx.fillStyle = COLORS.paper;
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = "center";
    ctx.fillStyle = state === STATE.WIN ? COLORS.snap : COLORS.ribbon;
    ctx.font = "bold 56px 'Courier New', monospace";
    ctx.fillText(state === STATE.WIN ? "THE GUARD FALLS" : "YOUR HAND STILLS", W / 2, 240);

    ctx.fillStyle = COLORS.carbon;
    ctx.font = "18px 'Courier New', monospace";
    ctx.fillText("Damage dealt this run: " + runDamage, W / 2, 310);
    ctx.fillText("Best: " + best, W / 2, 340);

    ctx.fillStyle = COLORS.ribbon;
    ctx.font = "bold 18px 'Courier New', monospace";
    ctx.fillText("Click or press ENTER to return", W / 2, 430);
  }

  function drawRun() {
    // Paper background.
    ctx.fillStyle = COLORS.paper;
    ctx.fillRect(0, 0, W, H);

    // Header.
    ctx.fillStyle = COLORS.carbon;
    ctx.textAlign = "left";
    ctx.font = "bold 14px 'Courier New', monospace";
    ctx.fillText("LAST WORDS  -  turn " + turnNo, 24, 30);

    // Enemy panel (red ink).
    drawHPBar(W - 260, 60, 220, enemy.name, enemy.hp, enemy.max, COLORS.ribbon);
    ctx.fillStyle = COLORS.ribbon;
    ctx.font = "12px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.fillText("reply: deals " + enemy.reply + " each turn", W - 260, 92);

    // Player panel (carbon).
    drawHPBar(24, 60, 220, "YOU", player.hp, player.max, COLORS.carbon);

    // ---- Platen (the chain) -------------------------------------------
    const platenY = 130;
    const platenH = 96;
    ctx.fillStyle = "#e2d7bb";
    roundRect(24, platenY, W - 48, platenH, 8); ctx.fill();
    ctx.strokeStyle = COLORS.faded;
    ctx.lineWidth = 1.2;
    roundRect(24, platenY, W - 48, platenH, 8); ctx.stroke();

    ctx.fillStyle = COLORS.faded;
    ctx.font = "11px 'Courier New', monospace";
    ctx.fillText("PLATEN  -  open socket: " + openSocketLabel(chain), 34, platenY + 16);

    // Chain cards laid left-to-right.
    const cw = 84, ch = 60, gap = 8;
    let cx = 34;
    for (const c of chain) {
      drawCard(cx, platenY + 26, cw, ch, c, {});
      cx += cw + gap;
    }
    // Ghosted next-socket hint (onboarding groundwork ONBOARD-02).
    if (!isCastable(chain) || chainPhase(chain) === "MOD") {
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = COLORS.ribbon;
      ctx.setLineDash([5, 4]);
      roundRect(cx, platenY + 26, cw, ch, 6); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = COLORS.ribbon;
      ctx.font = "10px 'Courier New', monospace";
      ctx.textAlign = "center";
      const ph = chainPhase(chain);
      const hintMap = { START: "VERB / NOUN", SUBJ: "ADJ/NOUN", VERB: "VERB", OBJ: "the/ADJ/NOUN", MOD: "ADV/NUM?", DONE: "" };
      ctx.fillText(hintMap[ph] || "", cx + cw / 2, platenY + 26 + ch / 2);
      ctx.restore();
    }

    // ---- Live preview (CORE-04) ---------------------------------------
    const previewY = platenY + platenH + 28;
    ctx.textAlign = "left";
    const sentence = previewSentence(chain);
    ctx.fillStyle = COLORS.carbon;
    ctx.font = "bold 22px 'Courier New', monospace";
    ctx.fillText(sentence.length ? sentence : "_", 28, previewY);

    const fx = computeEffect(chain);
    ctx.font = "14px 'Courier New', monospace";
    if (fx) {
      ctx.fillStyle = fx.target === "player" ? COLORS.ribbon : COLORS.snap;
      ctx.fillText("EFFECT:  " + fx.summary + (fx.target === "player" ? "   (!! hits YOU)" : ""), 28, previewY + 24);
    } else {
      ctx.fillStyle = COLORS.faded;
      ctx.fillText("EFFECT:  (sentence not complete -- need subject + verb + object)", 28, previewY + 24);
    }

    // ---- Buttons -------------------------------------------------------
    btnRects = {};
    const by = previewY + 44;
    function button(key, label, bx, color) {
      const bw = 130, bh = 34;
      const r = { x: bx, y: by, w: bw, h: bh };
      btnRects[key] = r;
      ctx.fillStyle = color;
      roundRect(bx, by, bw, bh, 6); ctx.fill();
      ctx.fillStyle = "#f5eedd";
      ctx.font = "bold 13px 'Courier New', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, bx + bw / 2, by + bh / 2);
      ctx.textBaseline = "alphabetic";
      return bx + bw + 10;
    }
    let bx = 28;
    bx = button("cast", "CAST (Enter)", bx, isCastable(chain) ? COLORS.ribbon : COLORS.faded);
    bx = button("undo", "UNDO (Bksp)", bx, COLORS.carbon);
    bx = button("clear", "CLEAR (Esc)", bx, COLORS.carbon);

    // ---- Hand ----------------------------------------------------------
    const handY = H - 132;
    ctx.fillStyle = COLORS.carbon;
    ctx.textAlign = "left";
    ctx.font = "11px 'Courier New', monospace";
    ctx.fillText("HAND  (legal cards are outlined; greyed cards can't attach now)", 28, handY - 8);

    handRects = [];
    const hcw = 70, hch = 92, hgap = 6;
    const totalW = hand.length * (hcw + hgap) - hgap;
    let hx = Math.max(24, (W - totalW) / 2);
    for (let i = 0; i < hand.length; i++) {
      const c = hand[i];
      const legal = canAttach(chain, c);
      drawCard(hx, handY, hcw, hch, c, { legal, highlight: legal, index: i + 1 });
      handRects.push({ x: hx, y: handY, w: hcw, h: hch, idx: i });
      hx += hcw + hgap;
    }

    // ---- Debug strip (task 9) -----------------------------------------
    if (DEBUG) {
      ctx.fillStyle = COLORS.faded;
      ctx.font = "11px 'Courier New', monospace";
      ctx.textAlign = "left";
      const legalCount = hand.filter((c) => canAttach(chain, c)).length;
      ctx.fillText(
        "DEBUG  phase=" + chainPhase(chain) + "  legalInHand=" + legalCount +
        "  castable=" + isCastable(chain) + "  runDmg=" + runDamage,
        28, H - 22
      );
    }

    // ---- Resolution log ------------------------------------------------
    ctx.fillStyle = COLORS.carbon;
    ctx.font = "12px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.fillText(lastLog, 28, H - 40);
    if (lastDelta) {
      ctx.fillStyle = COLORS.ribbon;
      ctx.fillText(lastDelta, 28, H - 6 - (DEBUG ? 0 : 0));
    }

    // ---- Particles -----------------------------------------------------
    for (const p of particles) {
      ctx.globalAlpha = Math.max(0, p.life - p.age) / p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  // =====================================================================
  // LOOP (delta-time RAF)
  // =====================================================================
  let lastT = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;

    // Update card shakes.
    for (const c of hand) if (c.shake) { c.shake -= dt; if (c.shake < 0) c.shake = 0; }
    // Update particles.
    for (const p of particles) {
      p.age += dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.vy += 120 * dt;
    }
    particles = particles.filter((p) => p.age < p.life);

    if (state === STATE.TITLE) drawTitle();
    else if (state === STATE.RUN) drawRun();
    else drawEndScreen();

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

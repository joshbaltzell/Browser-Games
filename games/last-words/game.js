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

  const DEBUG = false;

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

  // ---- Web Audio: the haunted typewriter (SCAF-03 / STYLE-01/02) --------
  // Lazily create + resume a single AudioContext on first gesture so the
  // whole thing is file://-safe (no audio files, no autoplay). Everything is
  // synthesized: mechanical key-clacks (filtered noise burst + tonal thunk),
  // a metallic carriage-return bell, ink-bleed "soak" noise, and a low
  // room-tone drone that haunts the page. The drone darkens after the twist.
  let audioCtx = null;
  let masterGain = null;
  let noiseBuf = null;
  let drone = null;          // {osc, osc2, gain, filter}
  let droneDark = 0;         // 0..1, ramped up by the twist reveal
  function unlockAudio() {
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
      // Pre-render a short white-noise buffer for clack/bleed textures.
      const len = Math.floor(audioCtx.sampleRate * 0.5);
      noiseBuf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      startDrone();
    } catch (err) {
      audioCtx = null;
    }
  }
  function startDrone() {
    if (!audioCtx || drone) return;
    const g = audioCtx.createGain();
    g.gain.value = 0.0;
    g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    g.gain.linearRampToValueAtTime(0.018, audioCtx.currentTime + 3.0);
    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 260;
    const o1 = audioCtx.createOscillator();
    o1.type = "sawtooth"; o1.frequency.value = 55;       // low A drone
    const o2 = audioCtx.createOscillator();
    o2.type = "sine"; o2.frequency.value = 55 * 1.5 + 0.7; // detuned fifth
    // Slow tremolo so the room "breathes".
    const lfo = audioCtx.createOscillator();
    lfo.type = "sine"; lfo.frequency.value = 0.13;
    const lfoGain = audioCtx.createGain(); lfoGain.gain.value = 0.006;
    lfo.connect(lfoGain); lfoGain.connect(g.gain);
    o1.connect(filter); o2.connect(filter); filter.connect(g); g.connect(masterGain);
    o1.start(); o2.start(); lfo.start();
    drone = { o1, o2, g, filter };
  }
  // Ramp the drone toward a darker, dissonant tone (twist reveal).
  function darkenDrone() {
    if (!audioCtx || !drone) return;
    droneDark = 1;
    const t = audioCtx.currentTime;
    drone.o2.frequency.setValueAtTime(drone.o2.frequency.value, t);
    drone.o2.frequency.linearRampToValueAtTime(55 * 1.5 - 4.5, t + 4.0); // sour minor 2nd beat
    drone.filter.frequency.setValueAtTime(drone.filter.frequency.value, t);
    drone.filter.frequency.linearRampToValueAtTime(170, t + 4.0);
    drone.g.gain.setValueAtTime(drone.g.gain.value, t);
    drone.g.gain.linearRampToValueAtTime(0.032, t + 4.0);
  }
  function noiseBurst(dur, filtType, freq, q, gain, t0) {
    if (!audioCtx) return;
    const t = t0 || audioCtx.currentTime;
    const src = audioCtx.createBufferSource();
    src.buffer = noiseBuf;
    const f = audioCtx.createBiquadFilter();
    f.type = filtType; f.frequency.value = freq; f.Q.value = q || 1;
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(masterGain);
    src.start(t); src.stop(t + dur + 0.02);
  }
  function tone(freq, dur, type, gain, t0, freqEnd) {
    if (!audioCtx) return;
    const t = t0 || audioCtx.currentTime;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type || "sine";
    o.frequency.setValueAtTime(freq, t);
    if (freqEnd != null) o.frequency.exponentialRampToValueAtTime(Math.max(1, freqEnd), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain || 0.08, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(masterGain);
    o.start(t); o.stop(t + dur + 0.02);
  }
  // A single mechanical key strike: a short tonal thunk + a noise click.
  // Slightly randomized so a stream of them sounds like real typing.
  function keyClack() {
    if (!audioCtx) return;
    const t = audioCtx.currentTime;
    const f = 150 + Math.random() * 90;
    tone(f, 0.045, "square", 0.05, t, f * 0.5);     // the hammer thunk
    noiseBurst(0.02, "highpass", 2200, 1, 0.05, t); // the key click
  }
  // The carriage-return bell: bright struck metal with a couple of partials.
  function carriageBell() {
    if (!audioCtx) return;
    const t = audioCtx.currentTime;
    tone(1760, 0.5, "sine", 0.07, t, 1740);
    tone(2640, 0.4, "sine", 0.035, t, 2620);
    tone(3520, 0.25, "sine", 0.02, t + 0.005);
    // mechanical "thunk + slide" of the carriage returning
    noiseBurst(0.16, "lowpass", 900, 0.7, 0.05, t + 0.02);
  }
  const sfx = {
    snap:   () => keyClack(),
    // Key-jam buzz: dissonant low sawtooth grind.
    reject: () => {
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      tone(95, 0.16, "sawtooth", 0.09, t, 70);
      tone(101, 0.16, "sawtooth", 0.06, t, 74);
      noiseBurst(0.1, "bandpass", 400, 2, 0.05, t);
    },
    // Cast: a hard stamp into the page.
    cast:   () => {
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      tone(220, 0.08, "square", 0.08, t, 90);
      noiseBurst(0.05, "lowpass", 1200, 0.7, 0.09, t);
    },
    ding:   () => carriageBell(),
    // Ink bleed soaking into paper — soft filtered noise swell.
    bleed:  () => {
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      noiseBurst(0.4, "lowpass", 700, 0.5, 0.05, t);
    },
    // Player getting hit: dull body blow.
    hurt:   () => {
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      tone(80, 0.22, "sawtooth", 0.09, t, 45);
      noiseBurst(0.12, "lowpass", 500, 0.7, 0.05, t);
    },
    // Twist reveal sting: descending sour tone + bell, and darken the room.
    reveal: () => {
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      tone(440, 1.4, "sine", 0.06, t, 110);
      tone(466, 1.4, "sine", 0.04, t, 116);
      noiseBurst(1.2, "lowpass", 600, 0.6, 0.04, t);
      darkenDrone();
    },
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
  // CONTENT-01: a curated pool of ~30 fragments across all six parts of speech,
  // defined as data with matched sockets (the `pos` drives socket shape/legality)
  // and costs encoded in their effect numbers. `weight` biases the draw bag so
  // commodity words (articles, common nouns) appear more than rare power cards.
  const POOL = [
    // Articles (ART) — glue, no effect of their own.
    { word: "the",     pos: "ART", weight: 3 },
    { word: "a",       pos: "ART", weight: 2 },
    { word: "this",    pos: "ART", weight: 1 },
    // Adjectives (ADJ) — modify the OBJECT's magnitude.
    { word: "WEAK",    pos: "ADJ", mult: 0.5, weight: 1 },
    { word: "CRUEL",   pos: "ADJ", add: 2, weight: 2 },
    { word: "BURNING", pos: "ADJ", add: 1, weight: 1 },
    { word: "SAVAGE",  pos: "ADJ", add: 3, weight: 1 },
    { word: "QUIET",   pos: "ADJ", add: 0, weight: 1 },   // flavor; no magnitude
    // Nouns (NOUN). target decides who the effect lands on when this is the OBJECT.
    { word: "GUARD",   pos: "NOUN", target: "enemy", weight: 2 },
    { word: "BEAST",   pos: "NOUN", target: "enemy", weight: 2 },
    { word: "DOOR",    pos: "NOUN", target: "enemy", weight: 1 },
    { word: "WOUND",   pos: "NOUN", target: "enemy", weight: 2 },
    { word: "NIGHT",   pos: "NOUN", target: "enemy", weight: 1 },
    { word: "YOU",     pos: "NOUN", target: "player", weight: 1 },
    { word: "I",       pos: "NOUN", target: "player", weight: 1 },
    { word: "ME",      pos: "NOUN", target: "player", weight: 1 },
    // Verbs (VERB).
    { word: "BURN",    pos: "VERB", effect: "fire",  base: 3, weight: 2 },
    { word: "STRIKES", pos: "VERB", effect: "phys",  base: 4, weight: 2 },
    { word: "STRIKE",  pos: "VERB", effect: "phys",  base: 4, weight: 2 },
    { word: "BREAKS",  pos: "VERB", effect: "phys",  base: 5, weight: 1 },
    { word: "BREAK",   pos: "VERB", effect: "phys",  base: 5, weight: 1 },
    { word: "ENDS",    pos: "VERB", effect: "phys",  base: 6, weight: 1 },
    { word: "HEALS",   pos: "VERB", effect: "heal",  base: 3, weight: 1 },
    { word: "HEAL",    pos: "VERB", effect: "heal",  base: 3, weight: 1 },
    { word: "SAVE",    pos: "VERB", effect: "heal",  base: 4, weight: 1 },
    // Adverbs / Numbers (repeat / quantify).
    { word: "twice",   pos: "ADV", rep: 2, weight: 2 },
    { word: "thrice",  pos: "ADV", rep: 3, weight: 1 },
    { word: "once",    pos: "ADV", rep: 1, weight: 1 },
    { word: "2",       pos: "NUM", rep: 2, weight: 2 },
    { word: "3",       pos: "NUM", rep: 3, weight: 1 },
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
  const PLAYER_MAX = 34;

  let player = { hp: PLAYER_MAX, max: PLAYER_MAX };
  let enemy = null;
  let hand = [];     // array of card objects
  let chain = [];    // array of card objects placed on the platen
  let turnNo = 0;
  let lastLog = "";  // last resolution message
  let lastDelta = ""; // last HP delta readout

  // ---- The Note (TWIST-01..05) ----------------------------------------
  // Every cast sentence is transcribed, in order, onto a growing note.
  // After REVEAL_AT casts the note's header restamps into a suicide note
  // and the meaning-boss — built from the player's own words — appears.
  let note = [];                 // array of cast sentence strings (the document)
  let noteRevealed = false;      // has the suicide-note reveal fired?
  let revealAnim = 0;            // 0..1 timeline for the dramatized reveal
  let bossPending = false;       // reveal happened; meaning-boss queued in
  let misGrammar = false;        // mis-grammar (corruption) mode armed?
  let misGrammarUnlocked = false;// becomes true at the reveal
  const REVEAL_AT = 3;           // cast sentences before the note turns

  // ---- Typewriter stamping (STYLE-01) ----------------------------------
  // The live sentence preview and resolution log don't appear all at once;
  // they "type" out a character at a time, each glyph firing a key-clack.
  // We track a target string + how many chars are currently revealed.
  const typer = {
    target: "",      // full string we're typing toward
    shown: 0,        // characters currently visible
    acc: 0,          // time accumulator
    cps: 42,         // characters per second
    lastClackChar: " ",
  };
  function setTyper(str) {
    if (str === typer.target) return;
    // If the new string extends the old (player added a card), keep what's
    // typed and only animate the tail. Otherwise restart.
    if (str.indexOf(typer.target) === 0 && typer.target.length) {
      typer.target = str;
    } else {
      typer.target = str;
      typer.shown = Math.min(typer.shown, str.length);
      if (str.indexOf(typer.target.slice(0, typer.shown)) !== 0) typer.shown = 0;
    }
  }
  function updateTyper(dt) {
    if (typer.shown >= typer.target.length) { typer.shown = typer.target.length; return; }
    typer.acc += dt;
    const step = 1 / typer.cps;
    while (typer.acc >= step && typer.shown < typer.target.length) {
      typer.acc -= step;
      const ch = typer.target.charAt(typer.shown);
      typer.shown++;
      if (ch !== " ") keyClack();
    }
  }
  function typedText() { return typer.target.slice(0, typer.shown); }
  function typerDone() { return typer.shown >= typer.target.length; }

  // Page-advance animation on carriage return (STYLE-02).
  let pageShift = 0; // current vertical offset of the "page", eases to 0

  // localStorage persistence (ONBOARD-03): best mark, deepest encounter
  // reached, whether the note was ever unwritten, and whether this player has
  // seen the tutorial (so onboarding only nags first-timers).
  const BEST_KEY  = "lastWords.best";
  const DEPTH_KEY = "lastWords.depth";
  const WIN_KEY   = "lastWords.won";
  const SEEN_KEY  = "lastWords.seen";
  function loadInt(key) {
    try { return parseInt(localStorage.getItem(key) || "0", 10) || 0; }
    catch (e) { return 0; }
  }
  function saveInt(key, v) { try { localStorage.setItem(key, String(v)); } catch (e) {} }
  function loadBest() { return loadInt(BEST_KEY); }
  function saveBest(v) { saveInt(BEST_KEY, v); }
  let bestDepth = loadInt(DEPTH_KEY);   // deepest encounter index reached (1-based)
  let everWon   = loadInt(WIN_KEY) === 1;
  let hasSeenTutorial = loadInt(SEEN_KEY) === 1;
  function recordDepth(idx1) {
    if (idx1 > bestDepth) { bestDepth = idx1; saveInt(DEPTH_KEY, bestDepth); }
  }
  let best = loadBest();
  let runDamage = 0; // total damage dealt to enemies this run

  // ---- Encounter roster (CONTENT-02/03) --------------------------------
  // A run sequences ordinary enemies, then the meaning-boss is built from the
  // note at the reveal. Each ordinary enemy has distinct HP, a reply, and a
  // "wrinkle" that pressures which sentence you want to build:
  //   plain  : nothing special.
  //   reflect: takes only HALF damage from clean phys hits — favors fire / big adjs.
  //   thorns : every NUM/ADV repeat past the first lashes back at YOU — punishes spam.
  //   ward   : ignores the first point of every cast unless the object is QUIET/heal-free.
  // The wrinkle is shown in the enemy subtitle and applied in castChain.
  const ENEMY_ROSTER = [
    { name: "THE GUARD",   hp: 16, max: 16, reply: 2, kind: "plain",
      sub: "a slow sentinel · replies 2 each turn" },
    { name: "THE BEAST",   hp: 22, max: 22, reply: 3, kind: "thorns",
      sub: "thorns · every repeat past the first lashes YOU" },
    { name: "THE WARDEN",  hp: 26, max: 26, reply: 3, kind: "reflect",
      sub: "armored · clean STRIKES land at half — burn it instead" },
    { name: "THE NIGHT",   hp: 30, max: 30, reply: 4, kind: "ward",
      sub: "warded · blunts the first point of every blow" },
  ];
  let encIndex = 0; // which roster entry we're on
  function newEnemy() {
    const e = ENEMY_ROSTER[Math.min(encIndex, ENEMY_ROSTER.length - 1)];
    return Object.assign({}, e);
  }
  function totalEncounters() { return ENEMY_ROSTER.length + 1; } // +1 = meaning-boss

  // TWIST-03: the meaning-boss is the meaning the player spelled by accident.
  // Its name is drawn from the words they cast most, its HP scales with how
  // much "clean grammar" they wrote (the note's weight), and it can ONLY be
  // hurt by mis-grammared sentences — clean ones feed it.
  function meaningFromNote() {
    // Tally significant words (skip articles/short connectors) across the note.
    const tally = {};
    for (const line of note) {
      for (const w of line.split(/\s+/)) {
        const k = w.toUpperCase();
        if (k.length < 2) continue;
        if (k === "THE" || k === "A") continue;
        tally[k] = (tally[k] || 0) + 1;
      }
    }
    const ranked = Object.keys(tally).sort((a, b) => tally[b] - tally[a]);
    const word = ranked[0] || "SILENCE";
    return { word, ranked };
  }
  function makeMeaningBoss() {
    const m = meaningFromNote();
    // HP grows with the total words committed to the page — your own verbosity —
    // but is clamped so a long run doesn't make the boss a slog.
    const wordCount = note.reduce((n, l) => n + l.split(/\s+/).length, 0);
    const hp = Math.min(48, 26 + wordCount);
    return {
      name: "THE " + m.word,        // the meaning you wrote, as a being
      hp, max: hp, reply: 4,
      kind: "meaning",
      derivedWord: m.word,
    };
  }

  // ---- Screen feedback / juice (JUICE-02) ------------------------------
  // A short screen-shake impulse and a full-screen ink flash on big events.
  let shakeMag = 0;        // current shake magnitude in px, decays each frame
  let flash = { a: 0, color: COLORS.bleed }; // full-screen tint, fades out
  // Floating damage/heal numbers stamped near the struck party (JUICE-02).
  let floaters = [];       // {x,y,vy,text,color,life,age}
  function kick(mag) { shakeMag = Math.max(shakeMag, mag); }
  function flashScreen(color, a) { flash.color = color; flash.a = Math.max(flash.a, a); }
  function spawnFloater(x, y, text, color) {
    floaters.push({ x, y, vy: -34, text, color, life: 1.1, age: 0 });
  }

  // ---- Ink-bleed particle system (STYLE-04) ----------------------------
  // Damage renders as ink soaking through paper: a spreading dark stain that
  // grows then fades, plus a few flung droplets. Not a generic flash.
  let particles = [];
  let stains = [];   // soaking blots: grow radius, fade alpha
  function spawnInk(x, y, color, n) {
    // The soaking core: a few overlapping blots that expand.
    const blots = 3 + Math.floor((n || 10) / 6);
    for (let i = 0; i < blots; i++) {
      const ox = (Math.random() - 0.5) * 26;
      const oy = (Math.random() - 0.5) * 22;
      stains.push({
        x: x + ox, y: y + oy,
        r: 2, rMax: 10 + Math.random() * 22,
        life: 0.9 + Math.random() * 0.8, age: 0,
        color,
      });
    }
    // Flung droplets.
    for (let i = 0; i < (n || 10); i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 30 + Math.random() * 110;
      particles.push({
        x, y,
        vx: Math.cos(a) * s, vy: Math.sin(a) * s - 40,
        life: 0.5 + Math.random() * 0.6, age: 0,
        r: 1.5 + Math.random() * 3.5, color,
      });
    }
  }
  // A burst of "struck letters" when the cast stamps into the page.
  let stamps = [];
  function spawnStamp() {
    const cx = W / 2, cy = 300;
    for (let i = 0; i < 10; i++) {
      stamps.push({
        x: cx + (Math.random() - 0.5) * 260,
        y: cy + (Math.random() - 0.5) * 40,
        vy: -20 - Math.random() * 30,
        ch: "abcdefghijklmnopqrstuvwxyz".charAt((Math.random() * 26) | 0).toUpperCase(),
        life: 0.7 + Math.random() * 0.4, age: 0,
        color: Math.random() < 0.5 ? COLORS.carbon : COLORS.ribbon,
      });
    }
  }

  function dealHand() {
    hand = [];
    // Build a weighted source bag: each def appears `weight` times so commodity
    // words show up more than rare power cards (CONTENT-01 costs/balance).
    const src = [];
    for (const def of POOL) {
      const w = def.weight || 1;
      for (let k = 0; k < w; k++) src.push(def);
    }
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
      // Ensure the hand is "playable": at least 1 NOUN + 1 VERB + 1 enemy-target NOUN.
    } while (guard < 40 && !(
      hand.some(c => c.pos === "NOUN") &&
      hand.some(c => c.pos === "VERB") &&
      hand.some(c => c.pos === "NOUN" && c.target === "enemy")
    ));
  }

  function startRun() {
    player = { hp: PLAYER_MAX, max: PLAYER_MAX };
    encIndex = 0;
    enemy = newEnemy();
    recordDepth(1);
    chain = [];
    turnNo = 1;
    runDamage = 0;
    lastLog = hasSeenTutorial
      ? "Build a sentence. Click cards (or 1-9) to chain them."
      : "Place a VERB to begin. The dotted slot shows what fits next.";
    lastDelta = "";
    particles = [];
    stains = []; stamps = []; floaters = [];
    note = [];
    noteRevealed = false;
    revealAnim = 0;
    bossPending = false;
    misGrammar = false;
    misGrammarUnlocked = false;
    chainCorrupted = false;
    endingRewritten = false;
    droneDark = 0;
    pageShift = 0;
    shakeMag = 0; flash.a = 0;
    tutorialStep = hasSeenTutorial ? -1 : 0; // -1 = no tutorial
    castsThisRun = 0;
    typer.target = ""; typer.shown = 0;
    dealHand();
    state = STATE.RUN;
  }

  // ---- Onboarding tutorial (ONBOARD-02) --------------------------------
  // First-time players are guided diegetically through the very first cast.
  // The steps advance as the player performs the matching action. After the
  // first successful cast the tutorial retires and never nags again.
  //   0: place a VERB   1: place a NOUN object   2: (optional) modifier  3: cast
  let tutorialStep = -1;
  let castsThisRun = 0;
  const TUTORIAL_LINES = [
    "Step 1 — click a VERB card (e.g. BURN). Verbs start the spell.",
    "Step 2 — now add an enemy NOUN (e.g. THE GUARD) for it to land on.",
    "Step 3 — optional: add 'twice' or a number to repeat, then…",
    "Step 4 — press ENTER (or click CAST) to write it into the world.",
  ];
  function tutorialActive() { return tutorialStep >= 0 && !hasSeenTutorial; }
  function advanceTutorialFromChain() {
    if (!tutorialActive()) return;
    const p = chainPhase(chain);
    // map current chain progress to the most advanced satisfied step
    if (isCastable(chain)) tutorialStep = 3;
    else if (p === "OBJ" || p === "MOD") tutorialStep = 1;
    else if (p === "VERB") tutorialStep = 1; // subject placed; still need verb/obj path
    else if (chain.length > 0) tutorialStep = Math.max(tutorialStep, 1);
    else tutorialStep = 0;
  }
  function finishTutorial() {
    if (tutorialStep >= 0) {
      hasSeenTutorial = true;
      saveInt(SEEN_KEY, 1);
      tutorialStep = -1;
    }
  }

  // ---- Chain manipulation ----------------------------------------------
  // Was the current chain assembled with at least one deliberate mis-grammar?
  let chainCorrupted = false;

  function tryPlaceCard(idx) {
    const card = hand[idx];
    if (!card) return;
    const legal = canAttach(chain, card);
    if (legal) {
      card.corrupt = false;
      chain.push(card);
      hand.splice(idx, 1);
      sfx.snap();
      kick(2);
      advanceTutorialFromChain();
    } else if (misGrammar && misGrammarUnlocked) {
      // TWIST-04: mis-grammar mode lets you force a socket-mismatched card,
      // breaking the grammar on purpose. The chain is marked corrupted —
      // the only thing that can wound the meaning-boss.
      card.corrupt = true;
      chain.push(card);
      hand.splice(idx, 1);
      chainCorrupted = true;
      // A wrong, jammed-but-forced sound: reject buzz then a snap.
      sfx.reject();
      setTimeout(() => sfx.snap(), 90);
    } else {
      // Illegal placement: visible reject (JUICE-01) + key-jam buzz + shake.
      card.shake = 0.35;
      sfx.reject();
      kick(3);
    }
  }

  function recomputeCorrupt() {
    chainCorrupted = chain.some((c) => c.corrupt);
  }
  function undoLast() {
    if (chain.length === 0) return;
    const c = chain.pop();
    c.corrupt = false;
    hand.push(c);
    recomputeCorrupt();
    sfx.snap();
  }

  function clearChain() {
    while (chain.length) { const c = chain.pop(); c.corrupt = false; hand.push(c); }
    chainCorrupted = false;
  }

  // CORE-06/07/08 + TWIST-05: commit + resolve + enemy reply + redraw.
  function castChain() {
    if (revealAnim > 0 && revealAnim < 1) return; // locked during reveal
    const corrupted = chainCorrupted;
    const sentence = previewSentence(chain);
    // A corrupted chain breaks grammar, so it can't be parsed cleanly. Only a
    // clean, complete sentence has a computable literal effect.
    const fx = corrupted ? null : computeEffect(chain);

    if (!corrupted && !fx) { sfx.reject(); lastLog = "Not a complete sentence yet."; return; }
    if (corrupted && chain.length < 2) { sfx.reject(); lastLog = "A broken phrase needs more than one fragment."; return; }

    sfx.cast();
    spawnStamp();
    kick(4);

    let dmgEnemy = 0, dmgPlayer = 0, healEnemy = 0, healPlayer = 0;
    let thornsBack = 0; // self-damage from THE BEAST's thorns wrinkle
    const againstMeaning = enemy.kind === "meaning";
    const ENEMY_FX_X = W - 160, ENEMY_FX_Y = 180;

    if (corrupted) {
      // TWIST-05: mis-grammared text. Against the meaning-boss this is the
      // ONLY thing that wounds it — you are corrupting the note you wrote.
      // Against an ordinary enemy a broken phrase is a weak, wild blow.
      const broken = Math.max(1, chain.filter((c) => c.corrupt).length);
      if (againstMeaning) {
        const hit = 6 + broken * 4;          // sabotage damage
        dmgEnemy = hit; enemy.hp -= hit; runDamage += hit;
        lastLog = '"' + sentence + '"  -> the meaning fractures (-' + hit + ')';
        spawnInk(ENEMY_FX_X, ENEMY_FX_Y, COLORS.bleed, 22);
        flashScreen(COLORS.bleed, 0.32); kick(9);
      } else {
        const hit = 1 + broken;              // mostly noise
        dmgEnemy = hit; enemy.hp -= hit; runDamage += hit;
        lastLog = '"' + sentence + '"  -> a broken phrase, weak (-' + hit + ')';
        spawnInk(ENEMY_FX_X, ENEMY_FX_Y, COLORS.faded, 10);
      }
      // Corrupted text is NOT transcribed cleanly — it is scrawled, crossed-out.
      note.push("̵" + sentence + "̵");
    } else {
      // Clean grammar.
      if (againstMeaning && !fx.heal && fx.target === "enemy") {
        // TWIST-05: clean grammar FEEDS the meaning-boss. The optimal skill
        // backfires — your tidy sentence heals the thing you wrote.
        healEnemy = fx.total;
        enemy.hp = Math.min(enemy.max, enemy.hp + fx.total);
        lastLog = '"' + sentence + '"  -> it feeds on your clean words (+' + fx.total + ')';
        spawnInk(ENEMY_FX_X, ENEMY_FX_Y, COLORS.snap, 14);
      } else if (fx.heal) {
        if (fx.target === "player") { healPlayer = fx.total; player.hp = Math.min(player.max, player.hp + fx.total); }
        else { healEnemy = fx.total; enemy.hp = Math.min(enemy.max, enemy.hp + fx.total); }
        lastLog = '"' + sentence + '"  ->  ' + fx.summary;
      } else if (fx.target === "player") {
        dmgPlayer = fx.total; player.hp -= fx.total; sfx.hurt();
        lastLog = '"' + sentence + '"  ->  ' + fx.summary;
        flashScreen(COLORS.bleed, 0.3); kick(8);
      } else {
        // Clean damage to an ordinary enemy — apply the encounter wrinkle (CONTENT-03).
        let dmg = fx.total;
        let wrinkleNote = "";
        if (enemy.kind === "reflect" && fx.effect === "phys") {
          // Armored: clean physical blows land at half. Fire bypasses.
          dmg = Math.ceil(dmg / 2);
          wrinkleNote = " (armor halves STRIKES)";
        }
        if (enemy.kind === "ward") {
          // Warded: blunts the first point of every blow.
          dmg = Math.max(0, dmg - 1);
          wrinkleNote = " (ward blunts 1)";
        }
        if (enemy.kind === "thorns" && fx.reps > 1) {
          // Thorns: every repeat past the first lashes back at YOU.
          thornsBack = (fx.reps - 1) * 2;
          wrinkleNote = " (thorns! repeats lash YOU -" + thornsBack + ")";
        }
        dmgEnemy = dmg; enemy.hp -= dmg; runDamage += dmg;
        lastLog = '"' + sentence + '"  ->  ' + fx.summary + wrinkleNote;
        flashScreen(COLORS.bleed, 0.22); kick(6);
      }
      if (fx.target === "player") spawnInk(120, H - 120, COLORS.bleed, 14);
      else if (!againstMeaning || fx.heal) spawnInk(ENEMY_FX_X, ENEMY_FX_Y, fx.heal ? COLORS.snap : COLORS.bleed, 14);
      // Clean sentences are transcribed verbatim onto the growing note.
      note.push(sentence);
    }
    // Thorns self-damage resolves now, before the win/lose checks.
    if (thornsBack > 0) { player.hp -= thornsBack; dmgPlayer += thornsBack; sfx.hurt(); spawnInk(120, H - 120, COLORS.bleed, 8); }
    sfx.bleed();

    // Floating numbers (JUICE-02) stamped near whoever was struck.
    if (dmgEnemy)  spawnFloater(ENEMY_FX_X, ENEMY_FX_Y, "-" + dmgEnemy, COLORS.bleed);
    if (healEnemy) spawnFloater(ENEMY_FX_X, ENEMY_FX_Y, "+" + healEnemy, COLORS.snap);
    if (dmgPlayer) spawnFloater(150, H - 150, "-" + dmgPlayer, COLORS.bleed);
    if (healPlayer) spawnFloater(150, H - 150, "+" + healPlayer, COLORS.snap);
    castsThisRun++;
    finishTutorial(); // a completed cast retires onboarding for good

    // Build the delta readout (legibility gate).
    const parts = [];
    if (dmgEnemy) parts.push(enemy.name + " -" + dmgEnemy);
    if (healEnemy) parts.push(enemy.name + " +" + healEnemy);
    if (dmgPlayer) parts.push("YOU -" + dmgPlayer);
    if (healPlayer) parts.push("YOU +" + healPlayer);
    lastDelta = parts.join("   ");

    // Restamp the log with the typewriter.
    setTyper(lastLog);
    typer.shown = 0;

    // Clear the chain (spent cards are consumed).
    chain = [];
    chainCorrupted = false;

    // Lose check first — thorns/backfire may have killed the player on cast.
    if (player.hp <= 0) {
      player.hp = 0;
      endRun(false);
      return;
    }

    // Enemy-defeated check (CONTENT-02/04).
    if (enemy.hp <= 0) {
      enemy.hp = 0;
      if (runDamage > best) { best = runDamage; saveBest(best); }
      sfx.ding();
      flashScreen(COLORS.snap, 0.35); kick(7);
      if (againstMeaning) {
        // Defeating the meaning-boss rewrites the ending -> WIN.
        rewriteEnding();
        endRun(true);
        return;
      }
      // Ordinary enemy down: advance to the next encounter (or trigger reveal).
      encIndex++;
      if (encIndex < ENEMY_ROSTER.length) {
        enemy = newEnemy();
        recordDepth(encIndex + 1);
        player.hp = Math.min(player.max, player.hp + 9); // a breath of recovery between fights
        lastLog = "The page turns. " + enemy.name + " stands between you and the end.";
        setTyper(lastLog); typer.shown = 0;
        chain = []; chainCorrupted = false;
        pageShift = 26; turnNo++;
        dealHand();
        return;
      }
      // Past the last ordinary enemy: the note turns into the suicide note and
      // the meaning-boss (built from everything you wrote) appears (TWIST-02).
      if (!noteRevealed && !bossPending) { triggerReveal(); return; }
    }

    // CORE-08: enemy reply, then end the turn (carriage return ding) + redraw.
    enemy.hp = Math.max(0, enemy.hp);
    player.hp -= enemy.reply;
    sfx.hurt();
    spawnInk(120, H - 120, COLORS.bleed, 10);
    spawnFloater(150, H - 150, "-" + enemy.reply, COLORS.bleed);
    kick(4);
    lastDelta += (lastDelta ? "   " : "") + enemy.name + " replies: YOU -" + enemy.reply;

    sfx.ding();
    pageShift = 26;   // STYLE-02: the page advances a line on carriage return
    turnNo++;

    if (player.hp <= 0) {
      player.hp = 0;
      endRun(false);
      return;
    }

    dealHand();
  }

  // Centralized run-end: persist best/depth/win, set the end screen state.
  function endRun(won) {
    if (runDamage > best) { best = runDamage; saveBest(best); }
    if (won) { everWon = true; saveInt(WIN_KEY, 1); recordDepth(totalEncounters()); }
    state = won ? STATE.WIN : STATE.LOSE;
  }

  // TWIST-02/03: dramatized reveal — restamp the header, surface the meaning,
  // unlock mis-grammar, and bring in the meaning-boss built from the note.
  function triggerReveal() {
    noteRevealed = true;
    bossPending = true;
    revealAnim = 0.0001;       // starts the timeline in updateReveal
    misGrammarUnlocked = true;
    sfx.reveal();
    lastDelta = "";
    setTyper("");
  }
  function updateReveal(dt) {
    if (!bossPending) return;
    revealAnim = Math.min(1, revealAnim + dt / 3.2); // ~3.2s reveal
    if (revealAnim >= 1) {
      bossPending = false;
      // Swap in the meaning-boss, full heal-reset of the encounter framing.
      enemy = makeMeaningBoss();
      player.hp = Math.min(player.max, player.hp + 12); // a breath before the end
      lastLog = "It can only be unwritten. Arm MIS-GRAMMAR and break the words.";
      setTyper(lastLog); typer.shown = 0;
      misGrammar = true; // arm it for them so the counter is discoverable
      dealHand();
      turnNo++;
    }
  }

  // TWIST-05: defeating the meaning-boss rewrites the note's ending.
  let endingRewritten = false;
  function rewriteEnding() {
    endingRewritten = true;
    note.push("— and then I chose to stay.");
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

    // RUN: ignore input while the reveal cinematic plays.
    if (bossPending) return;

    // RUN: buttons first.
    for (const key in btnRects) {
      const r = btnRects[key];
      if (r && hit(p, r)) {
        if (key === "cast") castChain();
        else if (key === "clear") clearChain();
        else if (key === "undo") undoLast();
        else if (key === "mis") toggleMisGrammar();
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
    if (bossPending) return;
    if (e.key === "Enter") { e.preventDefault(); castChain(); }
    else if (e.key === "Backspace") { e.preventDefault(); undoLast(); }
    else if (e.key === "Escape") { e.preventDefault(); clearChain(); }
    else if (e.key === "Tab") { e.preventDefault(); toggleMisGrammar(); }
    else if (e.key >= "1" && e.key <= "9") {
      const idx = parseInt(e.key, 10) - 1;
      if (idx < hand.length) tryPlaceCard(idx);
    }
  }

  function toggleMisGrammar() {
    if (!misGrammarUnlocked) { sfx.reject(); return; }
    misGrammar = !misGrammar;
    sfx.snap();
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

  // ---- Paper texture (STYLE-03/05) -------------------------------------
  // Pre-rendered grain + fiber speckle so the page looks like real stock,
  // baked once into an offscreen canvas and tiled under everything.
  let paperTex = null;
  function buildPaperTex() {
    const c = document.createElement("canvas");
    c.width = W; c.height = H;
    const g = c.getContext("2d");
    // Base wash with a faint warm gradient.
    const grad = g.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, "#f0e7d2");
    grad.addColorStop(0.5, COLORS.paper);
    grad.addColorStop(1, "#e6dcc4");
    g.fillStyle = grad;
    g.fillRect(0, 0, W, H);
    // Fiber speckle.
    for (let i = 0; i < 2600; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      const a = Math.random() * 0.05;
      g.fillStyle = Math.random() < 0.5
        ? "rgba(90,80,60," + a + ")"
        : "rgba(255,252,240," + (a * 1.4) + ")";
      g.fillRect(x, y, 1 + Math.random() * 1.5, 1 + Math.random());
    }
    // A few coffee-ring / age blotches.
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * W, y = Math.random() * H, r = 30 + Math.random() * 80;
      const rg = g.createRadialGradient(x, y, r * 0.6, x, y, r);
      rg.addColorStop(0, "rgba(120,95,55,0)");
      rg.addColorStop(0.85, "rgba(120,95,55,0.035)");
      rg.addColorStop(1, "rgba(120,95,55,0)");
      g.fillStyle = rg; g.fillRect(x - r, y - r, r * 2, r * 2);
    }
    paperTex = c;
  }
  function drawPaper() {
    if (!paperTex) buildPaperTex();
    ctx.drawImage(paperTex, 0, 0);
    // Vignette so the edges feel like a lit desk.
    const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, H * 0.85);
    vg.addColorStop(0, "rgba(0,0,0,0)");
    vg.addColorStop(1, "rgba(40,28,16,0.22)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
  }

  // A torn-paper chit outline: a rounded rect with a jagged left/right deckle.
  function tornChit(x, y, w, h, seed) {
    const rng = (n) => {
      // deterministic-ish jitter from seed so a card's tear is stable per frame
      const s = Math.sin((seed + n) * 12.9898) * 43758.5453;
      return (s - Math.floor(s));
    };
    const steps = 6;
    ctx.beginPath();
    ctx.moveTo(x + 3, y);
    ctx.lineTo(x + w - 3, y);
    // right deckle
    for (let i = 0; i <= steps; i++) {
      const yy = y + (h * i) / steps;
      const jx = x + w + (rng(i) - 0.5) * 4;
      ctx.lineTo(jx, yy);
    }
    ctx.lineTo(x + 3, y + h);
    // left deckle (bottom -> top)
    for (let i = steps; i >= 0; i--) {
      const yy = y + (h * i) / steps;
      const jx = x + (rng(i + 20) - 0.5) * 4;
      ctx.lineTo(jx, yy);
    }
    ctx.closePath();
  }

  // A small color/letter tag per part of speech. Socket SHAPE per POS so the
  // chit's "input plug" is visible (STYLE-05): verbs notch differently than
  // nouns, etc., reinforcing what fits where.
  const POS_TAG = {
    VERB: { c: "#7a3b12", t: "VERB", shape: "tri" },
    NOUN: { c: "#1f4a6b", t: "NOUN", shape: "round" },
    ADJ:  { c: "#5a3d6b", t: "ADJ",  shape: "square" },
    ADV:  { c: "#2f6b4a", t: "ADV",  shape: "tri" },
    NUM:  { c: "#2f6b4a", t: "NUM",  shape: "diamond" },
    ART:  { c: "#7a746a", t: "ART",  shape: "round" },
  };

  // Serif font stack (file://-safe system serifs only) — the "stamped" type.
  const SERIF = "'Iowan Old Style','Palatino Linotype','Book Antiqua',Palatino,Georgia,'Times New Roman',serif";
  function serif(px, bold) { return (bold ? "bold " : "") + px + "px " + SERIF; }

  function drawSocket(cx, cy, shape, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    switch (shape) {
      case "tri":
        ctx.moveTo(cx, cy - 4); ctx.lineTo(cx + 4, cy + 3); ctx.lineTo(cx - 4, cy + 3); ctx.closePath(); break;
      case "square":
        ctx.rect(cx - 3.5, cy - 3.5, 7, 7); break;
      case "diamond":
        ctx.moveTo(cx, cy - 4.5); ctx.lineTo(cx + 4.5, cy); ctx.lineTo(cx, cy + 4.5); ctx.lineTo(cx - 4.5, cy); ctx.closePath(); break;
      default:
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    }
    ctx.fill();
  }

  function drawCard(x, y, w, h, card, opts) {
    opts = opts || {};
    ctx.save();
    if (card.shake && card.shake > 0) {
      ctx.translate(Math.sin(card.shake * 60) * 4, 0);
    }
    const corrupt = !!card.corrupt;
    const seed = card.id || 1;
    // Drop shadow for the chit lying on the page.
    ctx.save();
    ctx.shadowColor = "rgba(40,28,16,0.35)";
    ctx.shadowBlur = 5; ctx.shadowOffsetX = 1.5; ctx.shadowOffsetY = 2.5;
    ctx.fillStyle = opts.legal === false ? "#e7ddc4" : "#f6efdd";
    tornChit(x, y, w, h, seed);
    ctx.fill();
    ctx.restore();

    // Edge ink.
    ctx.strokeStyle = corrupt ? COLORS.bleed : (opts.highlight ? COLORS.ribbon : COLORS.faded);
    ctx.lineWidth = corrupt ? 2.2 : (opts.highlight ? 2.2 : 1.2);
    tornChit(x, y, w, h, seed);
    ctx.stroke();

    if (opts.legal === false) ctx.globalAlpha = 0.5;

    // POS header band + socket plug shape on the left edge.
    const tag = POS_TAG[card.pos] || { c: COLORS.faded, t: card.pos, shape: "round" };
    ctx.fillStyle = tag.c;
    ctx.globalAlpha *= 0.92;
    roundRect(x + 5, y + 5, w - 10, 15, 2); ctx.fill();
    ctx.globalAlpha = opts.legal === false ? 0.5 : 1;
    ctx.fillStyle = "#f6efdd";
    ctx.font = serif(9, true);
    ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillText(tag.t, x + 10, y + 13);
    // Socket plug on the band's right.
    drawSocket(x + w - 13, y + 12, tag.shape, "#f6efdd");

    // The word, in stamped serif. Red if it's YOU / I (player) so danger reads.
    const danger = card.target === "player";
    ctx.fillStyle = corrupt ? COLORS.bleed : (danger ? COLORS.ribbon : COLORS.carbon);
    let fs = 18;
    ctx.font = serif(fs, true);
    while (ctx.measureText(card.word).width > w - 12 && fs > 9) {
      fs -= 1; ctx.font = serif(fs, true);
    }
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(card.word, x + w / 2, y + h / 2 + 8);

    // Corrupted cards get a crossing-out strike.
    if (corrupt) {
      ctx.strokeStyle = COLORS.bleed; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x + 8, y + h / 2 + 12); ctx.lineTo(x + w - 8, y + h / 2 + 4);
      ctx.stroke();
    }

    // index hint for keyboard play.
    if (opts.index != null) {
      ctx.fillStyle = COLORS.faded;
      ctx.font = serif(9, false);
      ctx.textAlign = "right"; ctx.textBaseline = "alphabetic";
      ctx.fillText(String(opts.index), x + w - 6, y + h - 6);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawHPBar(x, y, w, label, hp, max, color) {
    ctx.fillStyle = color === COLORS.ribbon ? COLORS.ribbon : COLORS.carbon;
    ctx.font = serif(14, true);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(label + "  " + hp + "/" + max, x, y - 6);
    // The track is a ruled paper line; the fill is ink soaked along it.
    ctx.fillStyle = "rgba(60,48,30,0.12)";
    roundRect(x, y, w, 10, 3); ctx.fill();
    ctx.strokeStyle = "rgba(60,48,30,0.3)"; ctx.lineWidth = 1;
    roundRect(x, y, w, 10, 3); ctx.stroke();
    const frac = Math.max(0, hp / max);
    ctx.save();
    roundRect(x, y, Math.max(0, w * frac), 10, 3); ctx.clip();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w * frac, 10);
    // a little uneven ink edge
    ctx.fillStyle = "rgba(0,0,0,0.12)";
    for (let i = 0; i < w * frac; i += 6) ctx.fillRect(x + i, y, 1, 10);
    ctx.restore();
  }

  // A blinking carriage cursor block for "live typing" feel.
  function caret(x, y, h) {
    if ((performance.now() / 500 | 0) % 2 === 0) return;
    ctx.fillStyle = COLORS.carbon;
    ctx.fillRect(x, y - h + 2, Math.max(7, h * 0.5), h);
  }

  function drawTitle() {
    drawPaper();
    ctx.textAlign = "center";

    // Title struck in two inks, like a letterhead.
    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(66, true);
    ctx.fillText("LAST", W / 2 - 92, 196);
    ctx.fillStyle = COLORS.ribbon;
    ctx.fillText("WORDS", W / 2 + 88, 196);
    // underline rule
    ctx.strokeStyle = COLORS.faded; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(W / 2 - 220, 214); ctx.lineTo(W / 2 + 220, 214); ctx.stroke();

    ctx.fillStyle = COLORS.ribbon;
    ctx.font = serif(18, false);
    ctx.fillText("Chain word-cards into a sentence. It is cast LITERALLY.", W / 2, 256);

    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(15, false);
    ctx.fillText("Click cards (or 1-9) to chain   ·   Backspace undo   ·   Esc clear   ·   Enter to cast", W / 2, 320);
    ctx.fillText("Example:  BURN the GUARD twice   = fire 3 ×2 = 6 to the GUARD", W / 2, 352);
    ctx.fillStyle = COLORS.faded;
    ctx.fillText('Beware:  "the GUARD STRIKES YOU"  hits YOU, not the enemy.', W / 2, 380);

    // Persisted progression (ONBOARD-03): best mark + how far you got + win.
    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(14, false);
    const depthLabel = bestDepth >= totalEncounters()
      ? "all the way to the end"
      : ("encounter " + Math.max(1, bestDepth) + " of " + totalEncounters());
    ctx.fillText("Deepest mark left on the page: " + best + "    ·    Reached: " + depthLabel, W / 2, 444);
    if (everWon) {
      ctx.fillStyle = COLORS.snap;
      ctx.font = serif(14, true);
      ctx.fillText("✦ You have unwritten the note once. Could you do it again?", W / 2, 470);
    } else {
      ctx.fillStyle = COLORS.faded;
      ctx.font = serif(13, false);
      ctx.fillText("Four enemies stand before the thing you spell by accident.", W / 2, 470);
    }

    ctx.fillStyle = COLORS.ribbon;
    ctx.font = serif(20, true);
    const blink = (performance.now() / 600 | 0) % 2 === 0;
    ctx.fillText("CLICK or press ENTER to begin" + (blink ? " _" : "  "), W / 2, 524);
  }

  function drawEndScreen() {
    drawPaper();
    ctx.textAlign = "center";
    const won = state === STATE.WIN;
    ctx.fillStyle = won ? COLORS.snap : COLORS.ribbon;
    ctx.font = serif(52, true);
    const headline = won
      ? (endingRewritten ? "THE NOTE IS UNWRITTEN" : "THE GUARD FALLS")
      : "YOUR HAND STILLS";
    ctx.fillText(headline, W / 2, 200);

    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(17, false);
    if (won && endingRewritten) {
      ctx.fillText("You broke the words you wrote and rewrote the ending.", W / 2, 250);
      ctx.fillStyle = COLORS.ribbon;
      ctx.font = serif(20, true);
      ctx.fillText("— and then I chose to stay.", W / 2, 290);
    } else if (!won) {
      ctx.fillStyle = COLORS.faded;
      const where = enemy && enemy.kind === "meaning"
        ? "The meaning you spelled stands, unbroken."
        : "You fell at " + (enemy ? enemy.name : "the first page") + ".";
      ctx.fillText(where, W / 2, 250);
    }

    // The note, shown as the run's full transcript.
    ctx.textAlign = "left";
    let ny = won && endingRewritten ? 330 : 250;
    ctx.fillStyle = COLORS.faded;
    ctx.font = serif(12, false);
    ctx.textAlign = "center";
    ctx.fillText("— the page you left —", W / 2, ny); ny += 24;
    ctx.font = serif(13, false);
    const showLines = note.slice(-6);
    for (const line of showLines) {
      const isCorrupt = line.charAt(0) === "̵";
      ctx.fillStyle = isCorrupt ? COLORS.bleed : COLORS.carbon;
      ctx.fillText(line.replace(/̵/g, ""), W / 2, ny);
      if (isCorrupt) {
        const wdt = ctx.measureText(line.replace(/̵/g, "")).width;
        ctx.strokeStyle = COLORS.bleed; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(W / 2 - wdt / 2, ny - 4); ctx.lineTo(W / 2 + wdt / 2, ny - 4); ctx.stroke();
      }
      ny += 20;
    }

    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(14, false);
    ctx.textAlign = "center";
    ctx.fillText("Deepest mark: " + runDamage + "    ·    Best: " + best, W / 2, H - 56);

    ctx.fillStyle = COLORS.ribbon;
    ctx.font = serif(17, true);
    ctx.fillText("Click or press ENTER to return", W / 2, H - 28);
  }

  // ---- The Note panel (TWIST-01/02) ------------------------------------
  // A column down the right edge transcribing every cast sentence. Its
  // header reads as an ordinary transcript until the reveal restamps it.
  const NOTE_X = W - 250, NOTE_W = 234, NOTE_Y = 112, NOTE_H = H - 112 - 150;
  function drawNotePanel() {
    // The pinned sheet.
    ctx.save();
    ctx.shadowColor = "rgba(40,28,16,0.3)";
    ctx.shadowBlur = 8; ctx.shadowOffsetY = 3;
    ctx.fillStyle = noteRevealed ? "#efe4cb" : "#f4ecd8";
    roundRect(NOTE_X, NOTE_Y, NOTE_W, NOTE_H, 3); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = "rgba(60,48,30,0.25)"; ctx.lineWidth = 1;
    roundRect(NOTE_X, NOTE_Y, NOTE_W, NOTE_H, 3); ctx.stroke();

    // Header — restamped after the reveal.
    ctx.textAlign = "center";
    if (noteRevealed) {
      ctx.fillStyle = COLORS.ribbon;
      ctx.font = serif(14, true);
      ctx.fillText("To whoever reads this —", NOTE_X + NOTE_W / 2, NOTE_Y + 22);
    } else {
      ctx.fillStyle = COLORS.faded;
      ctx.font = serif(12, true);
      ctx.fillText("— transcript —", NOTE_X + NOTE_W / 2, NOTE_Y + 22);
    }
    ctx.strokeStyle = "rgba(60,48,30,0.2)";
    ctx.beginPath(); ctx.moveTo(NOTE_X + 14, NOTE_Y + 32); ctx.lineTo(NOTE_X + NOTE_W - 14, NOTE_Y + 32); ctx.stroke();

    // Ruled lines + the transcribed sentences (most recent at the bottom).
    ctx.textAlign = "left";
    const lh = 18;
    const maxLines = Math.floor((NOTE_H - 48) / lh);
    const shown = note.slice(-maxLines);
    let ly = NOTE_Y + 50;
    // faint ruling
    ctx.strokeStyle = "rgba(60,90,140,0.10)";
    for (let i = 0; i < maxLines; i++) {
      ctx.beginPath(); ctx.moveTo(NOTE_X + 12, NOTE_Y + 48 + i * lh + 4); ctx.lineTo(NOTE_X + NOTE_W - 12, NOTE_Y + 48 + i * lh + 4); ctx.stroke();
    }
    ctx.font = serif(12, false);
    for (const raw of shown) {
      const isCorrupt = raw.charAt(0) === "̵";
      const line = raw.replace(/̵/g, "");
      ctx.fillStyle = isCorrupt ? COLORS.bleed : COLORS.carbon;
      // wrap-ish: clip long lines
      let t = line;
      while (ctx.measureText(t).width > NOTE_W - 24 && t.length > 3) t = t.slice(0, -2);
      if (t !== line) t = t.slice(0, -1) + "…";
      ctx.fillText(t, NOTE_X + 14, ly);
      if (isCorrupt) {
        const wdt = ctx.measureText(t).width;
        ctx.strokeStyle = COLORS.bleed; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(NOTE_X + 14, ly - 4); ctx.lineTo(NOTE_X + 14 + wdt, ly - 4); ctx.stroke();
      }
      ly += lh;
    }
  }

  function drawRun() {
    drawPaper();

    // The whole working area can shift down a line on carriage return.
    ctx.save();
    ctx.translate(0, pageShift);

    // Header — the document title, struck in two inks.
    ctx.textAlign = "left";
    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(15, true);
    ctx.fillText("LAST WORDS", 24, 30);
    ctx.fillStyle = COLORS.faded;
    ctx.font = serif(12, false);
    ctx.fillText("· page " + turnNo, 132, 30);

    // Enemy panel (red ink). The meaning-boss is named after your own words.
    drawHPBar(NOTE_X, 64, NOTE_W, enemy.name, enemy.hp, enemy.max, COLORS.ribbon);
    ctx.fillStyle = COLORS.ribbon;
    ctx.font = serif(11, false);
    ctx.textAlign = "left";
    if (enemy.kind === "meaning") {
      ctx.fillText("the meaning you spelled · feeds on clean words", NOTE_X, 94);
    } else {
      ctx.fillText(enemy.sub || ("replies: " + enemy.reply + " each turn"), NOTE_X, 94);
    }
    // Encounter progress dots (CONTENT-02) — how deep into the run you are.
    const dotN = totalEncounters();
    const cur = enemy.kind === "meaning" ? dotN - 1 : encIndex;
    for (let i = 0; i < dotN; i++) {
      const dx = NOTE_X + 6 + i * 14;
      ctx.beginPath(); ctx.arc(dx, 104, 4, 0, Math.PI * 2);
      const isBoss = i === dotN - 1;
      ctx.fillStyle = i < cur ? COLORS.faded : (i === cur ? (isBoss ? COLORS.bleed : COLORS.ribbon) : "rgba(60,48,30,0.18)");
      ctx.fill();
      if (isBoss && i !== cur) { ctx.strokeStyle = "rgba(107,20,16,0.4)"; ctx.lineWidth = 1; ctx.stroke(); }
    }

    // Player panel (carbon).
    drawHPBar(24, 64, 220, "YOU", player.hp, player.max, COLORS.carbon);

    // ---- Platen (the chain) -------------------------------------------
    const platenY = 128;
    const platenH = 92;
    const platenW = NOTE_X - 24 - 16;
    // The black rubber roller.
    ctx.fillStyle = "#2c2620";
    roundRect(20, platenY - 6, platenW + 8, platenH + 12, 8); ctx.fill();
    // paper sitting on it
    ctx.fillStyle = "#f3ebd7";
    roundRect(28, platenY, platenW - 8, platenH, 4); ctx.fill();
    // feed-roller knobs on the right end
    ctx.fillStyle = "#1c1814";
    ctx.beginPath(); ctx.arc(20, platenY - 6 + (platenH + 12) / 2, 9, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = COLORS.faded;
    ctx.font = serif(10, true);
    ctx.textAlign = "left";
    ctx.fillText("PLATEN — open socket: " + openSocketLabel(chain), 38, platenY + 16);

    // Chain cards laid left-to-right.
    const cw = 82, ch = 58, gap = 8;
    let cx = 38;
    for (const c of chain) {
      drawCard(cx, platenY + 24, cw, ch, c, {});
      cx += cw + gap;
    }
    // Ghosted next-socket hint (ONBOARD-02) — diegetic dotted chit.
    const canExtend = misGrammar && misGrammarUnlocked
      ? true
      : (!isCastable(chain) || chainPhase(chain) === "MOD");
    if (canExtend && cx + cw < platenW + 28) {
      ctx.save();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = misGrammar ? COLORS.bleed : COLORS.ribbon;
      ctx.setLineDash([5, 4]);
      roundRect(cx, platenY + 24, cw, ch, 4); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = misGrammar ? COLORS.bleed : COLORS.ribbon;
      ctx.font = serif(10, false);
      ctx.textAlign = "center";
      const ph = chainPhase(chain);
      const hintMap = { START: "VERB / NOUN", SUBJ: "ADJ / NOUN", VERB: "VERB", OBJ: "the / ADJ / NOUN", MOD: "ADV / NUM?", DONE: "—" };
      ctx.fillText(misGrammar ? "anything (break it)" : (hintMap[ph] || ""), cx + cw / 2, platenY + 24 + ch / 2);
      ctx.restore();
    }

    // ---- Live preview (CORE-04) — typed character by character --------
    const previewY = platenY + platenH + 32;
    ctx.textAlign = "left";
    const fullSentence = previewSentence(chain);
    // While building, the typer follows the live sentence (each new glyph
    // clacks). When the chain is empty, the typer is aimed at the log instead.
    let baseText = "";
    if (chain.length > 0) {
      setTyper(fullSentence);
      baseText = typedText();
    }
    ctx.fillStyle = chainCorrupted ? COLORS.bleed : COLORS.carbon;
    ctx.font = serif(24, true);
    ctx.fillText(baseText, 28, previewY);
    if (chain.length > 0 && !typerDone()) {
      caret(28 + ctx.measureText(baseText).width + 2, previewY, 22);
    } else if (chain.length === 0) {
      caret(30, previewY, 22);
    }

    const fx = chainCorrupted ? null : computeEffect(chain);
    ctx.font = serif(14, false);
    if (chainCorrupted) {
      ctx.fillStyle = COLORS.bleed;
      ctx.fillText("EFFECT:  broken phrase — only the meaning fears this", 28, previewY + 26);
    } else if (fx) {
      const feedsBoss = enemy.kind === "meaning" && !fx.heal && fx.target === "enemy";
      ctx.fillStyle = feedsBoss ? COLORS.snap : (fx.target === "player" ? COLORS.ribbon : COLORS.snap);
      const note2 = feedsBoss ? "   (!! this FEEDS the meaning)" : (fx.target === "player" ? "   (!! hits YOU)" : "");
      ctx.fillText("EFFECT:  " + fx.summary + note2, 28, previewY + 26);
    } else {
      ctx.fillStyle = COLORS.faded;
      ctx.fillText("EFFECT:  (need subject + verb + object)", 28, previewY + 26);
    }

    // ---- Buttons -------------------------------------------------------
    btnRects = {};
    const by = previewY + 46;
    function button(key, label, bx, color, on) {
      const bw = 124, bh = 32;
      const r = { x: bx, y: by, w: bw, h: bh };
      btnRects[key] = r;
      ctx.fillStyle = color;
      roundRect(bx, by, bw, bh, 4); ctx.fill();
      if (on) { ctx.strokeStyle = "#f6efdd"; ctx.lineWidth = 1.5; roundRect(bx + 2, by + 2, bw - 4, bh - 4, 3); ctx.stroke(); }
      ctx.fillStyle = "#f6efdd";
      ctx.font = serif(13, true);
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(label, bx + bw / 2, by + bh / 2 + 1);
      ctx.textBaseline = "alphabetic";
      return bx + bw + 8;
    }
    let bx = 28;
    const castColor = chainCorrupted ? COLORS.bleed : (isCastable(chain) ? COLORS.ribbon : COLORS.faded);
    bx = button("cast", "CAST · Enter", bx, castColor);
    bx = button("undo", "UNDO · ⌫", bx, COLORS.carbon);
    bx = button("clear", "CLEAR · Esc", bx, COLORS.carbon);
    if (misGrammarUnlocked) {
      bx = button("mis", misGrammar ? "MIS-GRAMMAR ✓" : "MIS-GRAMMAR", bx, misGrammar ? COLORS.bleed : "#5a4d3a", misGrammar);
    }

    // ---- Resolution log (typed) ---------------------------------------
    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(13, false);
    ctx.textAlign = "left";
    // The log shares the typer only when not building a chain.
    const logText = (chain.length === 0) ? typedText() : lastLog;
    if (logText) ctx.fillText(logText, 28, by + 58);
    if (lastDelta) {
      ctx.fillStyle = COLORS.ribbon;
      ctx.fillText(lastDelta, 28, by + 78);
    }

    // ---- Onboarding tutorial margin-note (ONBOARD-02) -----------------
    // First-timers get a diegetic, hand-written guide that tracks their
    // progress through the very first sentence. It retires after one cast.
    if (tutorialActive()) {
      const tw = 300, th = 86;
      const handTop = H - 128; // mirrors the hand row's Y below
      const tx = W - 24 - tw, ty = handTop - 10 - th - 8;
      ctx.save();
      ctx.shadowColor = "rgba(40,28,16,0.3)"; ctx.shadowBlur = 6; ctx.shadowOffsetY = 2;
      ctx.fillStyle = "#fff7e4";
      roundRect(tx, ty, tw, th, 4); ctx.fill();
      ctx.restore();
      ctx.strokeStyle = COLORS.ribbon; ctx.lineWidth = 1.4;
      roundRect(tx, ty, tw, th, 4); ctx.stroke();
      ctx.fillStyle = COLORS.ribbon;
      ctx.font = serif(12, true);
      ctx.textAlign = "left";
      ctx.fillText("✎ a note to a new hand", tx + 14, ty + 20);
      ctx.fillStyle = COLORS.carbon;
      ctx.font = serif(12, false);
      const line = TUTORIAL_LINES[Math.max(0, Math.min(TUTORIAL_LINES.length - 1, tutorialStep))];
      // simple word-wrap inside the card
      const words = line.split(" ");
      let ln = "", yy = ty + 42;
      for (const wd of words) {
        const test = ln ? ln + " " + wd : wd;
        if (ctx.measureText(test).width > tw - 28) { ctx.fillText(ln, tx + 14, yy); yy += 16; ln = wd; }
        else ln = test;
      }
      if (ln) ctx.fillText(ln, tx + 14, yy);
    }

    // ---- Hand ----------------------------------------------------------
    const handY = H - 128;
    ctx.fillStyle = COLORS.carbon;
    ctx.textAlign = "left";
    ctx.font = serif(11, false);
    ctx.fillText(
      misGrammar
        ? "HAND — MIS-GRAMMAR armed: any card forces on, breaking the words"
        : "HAND — outlined chits can attach; greyed ones don't fit the open socket",
      28, handY - 10
    );

    handRects = [];
    const hcw = 70, hch = 90, hgap = 6;
    const totalW = hand.length * (hcw + hgap) - hgap;
    let hx = Math.max(20, (W - totalW) / 2);
    for (let i = 0; i < hand.length; i++) {
      const c = hand[i];
      const legal = canAttach(chain, c);
      const playable = legal || (misGrammar && misGrammarUnlocked);
      drawCard(hx, handY, hcw, hch, c, { legal: playable, highlight: legal, index: i + 1 });
      handRects.push({ x: hx, y: handY, w: hcw, h: hch, idx: i });
      hx += hcw + hgap;
    }

    ctx.restore(); // end pageShift translate

    // ---- The note (drawn unshifted, pinned to the page edge) ----------
    drawNotePanel();

    // ---- Ink stains + droplets + flung letters ------------------------
    drawInkFx();

    // ---- Reveal cinematic overlay -------------------------------------
    if (bossPending) drawReveal();
  }

  // Renders the ink-bleed stains, droplets, and stamped-letter burst.
  function drawInkFx() {
    for (const s of stains) {
      const k = s.age / s.life;
      ctx.globalAlpha = (1 - k) * 0.5;
      const r = s.r + (s.rMax - s.r) * Math.min(1, k * 2.2);
      const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r);
      g.addColorStop(0, s.color);
      g.addColorStop(0.7, s.color);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(s.x, s.y, r, 0, Math.PI * 2); ctx.fill();
    }
    for (const p of particles) {
      ctx.globalAlpha = Math.max(0, p.life - p.age) / p.life * 0.85;
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    for (const s of stamps) {
      ctx.globalAlpha = Math.max(0, s.life - s.age) / s.life;
      ctx.fillStyle = s.color;
      ctx.font = serif(20, true);
      ctx.textAlign = "center";
      ctx.fillText(s.ch, s.x, s.y);
    }
    // Floating damage / heal numbers, in big stamped serif.
    for (const f of floaters) {
      const k = f.age / f.life;
      ctx.globalAlpha = Math.max(0, 1 - k);
      ctx.fillStyle = f.color;
      ctx.font = serif(26 - k * 4, true);
      ctx.textAlign = "center";
      ctx.fillText(f.text, f.x, f.y);
    }
    ctx.globalAlpha = 1;
  }

  // TWIST-02/03: the dramatized reveal — the page darkens, the header
  // restamps, and the meaning the player wrote is named.
  function drawReveal() {
    const k = revealAnim;
    // Darken the page.
    ctx.fillStyle = "rgba(20,12,8," + (0.78 * Math.min(1, k * 1.4)) + ")";
    ctx.fillRect(0, 0, W, H);

    ctx.textAlign = "center";
    const m = meaningFromNote();
    // Stage 1: the realization.
    if (k > 0.08) {
      ctx.fillStyle = COLORS.paper;
      ctx.font = serif(20, false);
      ctx.globalAlpha = Math.min(1, (k - 0.08) * 4);
      ctx.fillText("These were never spells.", W / 2, 220);
      ctx.globalAlpha = 1;
    }
    if (k > 0.3) {
      ctx.fillStyle = COLORS.ribbon;
      ctx.font = serif(34, true);
      ctx.globalAlpha = Math.min(1, (k - 0.3) * 4);
      ctx.fillText("You were writing a note.", W / 2, 280);
      ctx.globalAlpha = 1;
    }
    if (k > 0.55) {
      ctx.fillStyle = COLORS.paper;
      ctx.font = serif(18, false);
      ctx.globalAlpha = Math.min(1, (k - 0.55) * 4);
      ctx.fillText("And the ending you spelled, by accident, has a name:", W / 2, 340);
      ctx.globalAlpha = 1;
    }
    if (k > 0.72) {
      ctx.fillStyle = COLORS.ribbon;
      ctx.font = serif(44, true);
      ctx.globalAlpha = Math.min(1, (k - 0.72) * 5);
      // typed-in name flicker
      ctx.fillText("THE " + m.word, W / 2, 410);
      ctx.globalAlpha = 1;
    }
    if (k > 0.9) {
      ctx.fillStyle = COLORS.faded;
      ctx.font = serif(15, false);
      ctx.fillText("Clean grammar feeds it. Break your own words to unwrite the end.", W / 2, 470);
    }
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
    // Update droplets.
    for (const p of particles) {
      p.age += dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.vy += 120 * dt;
    }
    particles = particles.filter((p) => p.age < p.life);
    // Update soaking stains.
    for (const s of stains) s.age += dt;
    stains = stains.filter((s) => s.age < s.life);
    // Update flung letters.
    for (const s of stamps) { s.age += dt; s.y += s.vy * dt; s.vy += 60 * dt; }
    stamps = stamps.filter((s) => s.age < s.life);
    // Update floating numbers.
    for (const f of floaters) { f.age += dt; f.y += f.vy * dt; f.vy += 26 * dt; }
    floaters = floaters.filter((f) => f.age < f.life);
    // Decay screen shake + flash.
    if (shakeMag > 0) { shakeMag -= 60 * dt; if (shakeMag < 0) shakeMag = 0; }
    if (flash.a > 0) { flash.a -= 1.6 * dt; if (flash.a < 0) flash.a = 0; }

    // Typewriter stamp animation (drives key-clacks for live preview + log).
    if (state === STATE.RUN) updateTyper(dt);

    // Page advance easing back to rest.
    if (pageShift > 0) { pageShift -= 60 * dt; if (pageShift < 0) pageShift = 0; }

    // The reveal cinematic.
    if (bossPending) updateReveal(dt);

    // Screen shake: jitter the whole canvas a couple of px on big hits.
    ctx.save();
    if (shakeMag > 0.1) {
      ctx.translate((Math.random() - 0.5) * shakeMag, (Math.random() - 0.5) * shakeMag);
    }

    if (state === STATE.TITLE) drawTitle();
    else if (state === STATE.RUN) drawRun();
    else drawEndScreen();

    ctx.restore();

    // Full-screen ink flash (drawn over everything, ignores shake transform).
    if (flash.a > 0.001) {
      ctx.save();
      ctx.globalAlpha = Math.min(0.5, flash.a);
      ctx.fillStyle = flash.color;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // Headless test hook — inert in a real browser (window.__LW_TEST__ is never
  // set there). Lets an offline harness introspect/drive state for verification.
  if (typeof window !== "undefined" && window.__LW_TEST__) {
    window.__LW = {
      get state() { return state; },
      get hand() { return hand; },
      get chain() { return chain; },
      get enemy() { return enemy; },
      get player() { return player; },
      get note() { return note; },
      get encIndex() { return encIndex; },
      get noteRevealed() { return noteRevealed; },
      get misGrammar() { return misGrammar; },
      get bossPending() { return bossPending; },
      get tutorialStep() { return tutorialStep; },
      STATE,
      startRun, castChain, tryPlaceCard, clearChain,
      canAttach, isCastable, chainPhase,
      forceReveal() { while (bossPending || !noteRevealed) { /* no-op */ break; } },
      finishReveal() { revealAnim = 1; updateReveal(10); },
    };
  }
})();

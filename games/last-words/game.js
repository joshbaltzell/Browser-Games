/* =====================================================================
   LAST WORDS — Phase 1: Core Mechanic Prototype
   A word-card game: each page deals 12 fresh random word-fragments (there is
   no deck). You chain them left-to-right into a grammatically valid sentence,
   then cast it LITERALLY.
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

  // uiK grows the tiny canvas text when the canvas is scaled down (phones), so
  // hints stay readable. 1 on a normal desktop window.
  let uiK = 1;
  function fsz(px) { return Math.round(px * uiK); }
  function fitCanvas() {
    const pad = window.innerHeight < 500 ? 8 : 24;
    const aw = window.innerWidth - pad;
    const ah = window.innerHeight - pad;
    const scale = Math.min(aw / W, ah / H, 1.25);
    canvas.style.width = Math.round(W * scale) + "px";
    canvas.style.height = Math.round(H * scale) + "px";
    uiK = Math.min(1.45, Math.max(1, 0.8 / scale));
  }
  // Touch screens: drop keyboard labels from the buttons.
  let touchUI = false;
  try { touchUI = !!(window.matchMedia && window.matchMedia("(pointer: coarse)").matches); } catch (e) {}
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
    // The foe card: one card whose word is the current foe's short name (GUARD,
    // BEAST, WARDEN, NIGHT). `word` is a getter, so cards already in hand (and on
    // the platen) rename themselves when the foe changes. The plain, common hit.
    { get word() { return foeName(); }, pos: "NOUN", target: "enemy", foe: true, weight: 5 },
    // Body parts: they aim at a spot on the foe (see PARTS). Same target, a tradeoff each.
    { word: "HEART",   pos: "NOUN", target: "enemy", part: "heart", weight: 1 },
    { word: "HANDS",   pos: "NOUN", target: "enemy", part: "hands", weight: 2 },
    { word: "EYES",    pos: "NOUN", target: "enemy", part: "eyes",  weight: 2 },
    { word: "MOUTH",   pos: "NOUN", target: "enemy", part: "mouth", weight: 1 },
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

  // Body parts. Each aims the effect at a spot on the foe and adds one rule, but
  // only when the verb does damage: healing a body part just heals the foe.
  const HEART_BONUS = 3;   // HEART: weak point, +3 to the amount (before adjectives)
  const EYES_COST = 2;     // EYES: this cast's amount is 2 lower (min 0)...
  //                          ...but the foe's next reply misses you entirely.
  //                       HANDS: the foe's next reply is halved (rounded up).
  //                       MOUTH: silences the foe's wrinkle for this cast.
  const PARTS = {
    heart: { value: "weak +" + HEART_BONUS, tail: "weak point +" + HEART_BONUS, row: "A weak point: +" + HEART_BONUS + " to the number, before adjectives.",
             tip: "The foe's weak point. Damage here gets +" + HEART_BONUS + " before adjectives." },
    hands: { value: "reply half", row: "Halves the foe's next reply to you.", tail: "its next reply is halved", land: "Its hands are hurt: next reply halved",
             tip: "The foe's hands. Damage here also halves its next reply to you." },
    eyes:  { value: "blind -" + EYES_COST, row: "Its next reply misses you, but this hit is " + EYES_COST + " weaker.", tail: "its next reply misses, this hit -" + EYES_COST, land: "Its eyes are blinded: next reply misses",
             tip: "The foe's eyes. Damage here is " + EYES_COST + " weaker, but its next reply misses you completely." },
    mouth: { value: "silence",    row: "Silences its trick (thorns, armor or ward) for this cast.", tail: "silences its trick for this cast", land: "Its mouth is shut: trick silenced",
             tip: "The foe's mouth. Damage here silences its trick (thorns, armor or ward) for this cast." },
  };

  let _uid = 0;
  function makeCard(def) {
    const c = Object.assign({ id: ++_uid }, def);
    // The foe card keeps following the current foe's name.
    if (def.foe) Object.defineProperty(c, "word", { get: foeName, enumerable: true, configurable: true });
    return c;
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

  // What the chain wants next, in plain words (log line under the platen).
  function nextStepText(chain) {
    switch (chainPhase(chain)) {
      case "START": return "Start with a verb, or with a noun (the / an adjective / a noun).";
      case "SUBJ":  return "Next: an adjective, or the noun that does it.";
      case "VERB":  return "Next: a verb. What does it do?";
      case "OBJ":   return "Next: the / an adjective / the noun it happens to.";
      case "MOD":   return "Done! Cast it, or end with twice / a number to repeat it.";
      case "DONE":  return "Done! Cast it.";
    }
    return "";
  }
  // Short lines for the dotted "next socket" chit.
  function socketLines(phase) {
    switch (phase) {
      case "START": return ["a verb or", "a noun"];
      case "SUBJ":  return ["adjective", "or noun"];
      case "VERB":  return ["a verb"];
      case "OBJ":   return ["the, adjective,", "or noun"];
      case "MOD":   return ["twice / 2 ?", "or cast"];
    }
    return [];
  }
  // Why was this card refused? Written from the same rules as canAttach.
  function whyRefused(chain, card) {
    const { phase, usedArt, usedAdj } = walkChain(chain);
    switch (phase) {
      case "START":
        return "'" + card.word + "' goes at the very end. Start with a verb, or a noun.";
      case "SUBJ":
      case "OBJ":
        if (card.pos === "ART") return usedArt ? "Only one article per noun." : "An article comes before the adjective.";
        if (card.pos === "ADJ") return "One adjective per noun.";
        if (card.pos === "VERB") return phase === "SUBJ" ? "A verb comes after the noun." : "Say who it happens to first: add a noun.";
        return "Finish the noun first. 'twice' and numbers go at the very end.";
      case "VERB":
        return "Need a verb here. What does the noun do?";
      case "MOD":
        return "The sentence is done. Add twice / a number, or cast it.";
      case "DONE":
        return "The sentence is finished. Press CAST.";
    }
    return "That does not fit here.";
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
    const part = p.obj.part || null;
    const dmgVerb = eff !== "heal";

    // HEART is a weak point: a base bonus, so adjectives act on it too.
    if (part === "heart" && dmgVerb) amount += HEART_BONUS;

    // Object adjectives modify the magnitude.
    for (const a of p.objAdjs) {
      if (a.mult != null) amount = Math.round(amount * a.mult);
      if (a.add != null) amount += a.add;
    }
    amount = Math.max(0, amount);
    // EYES: a blinded foe misses you, but a blind swing is weaker.
    if (part === "eyes" && dmgVerb) amount = Math.max(0, amount - EYES_COST);

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
      part,
      // Status effects only ride on damage, and apply once however many repeats.
      status: dmgVerb && part === "hands" ? "halved" : dmgVerb && part === "eyes" ? "blind" : null,
      silence: dmgVerb && part === "mouth",
      tail: dmgVerb && part ? PARTS[part].tail : "",
      summary:
        (eff === "heal" ? "heal " : eff === "fire" ? "fire " : "hit ") +
        amount + (reps > 1 ? " x" + reps : "") +
        " -> " + (target === "player" ? "YOU" : (enemy ? enemy.name : "THE GUARD") + (part && !(enemy && enemy.kind === "meaning") ? "'s " + p.obj.word.toLowerCase() : "")) +
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
  // played the guided first page (so the intro only shows once).
  const BEST_KEY  = "lastWords.best";
  const DEPTH_KEY = "lastWords.depth";
  const WIN_KEY   = "lastWords.won";
  const INTRO_KEY = "lastWords.intro";
  function loadInt(key) {
    try { return parseInt(localStorage.getItem(key) || "0", 10) || 0; }
    catch (e) { return 0; }
  }
  function saveInt(key, v) { try { localStorage.setItem(key, String(v)); } catch (e) {} }
  function loadBest() { return loadInt(BEST_KEY); }
  function saveBest(v) { saveInt(BEST_KEY, v); }
  let bestDepth = loadInt(DEPTH_KEY);   // deepest encounter index reached (1-based)
  let everWon   = loadInt(WIN_KEY) === 1;
  let introSeen = loadInt(INTRO_KEY) === 1;
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
  //   ward   : every damaging blow loses WARD_BLUNT point.
  // The wrinkle is shown in the enemy subtitle/tooltip (both generated from this
  // data) and applied in castChain.
  const THORNS_PER_REPEAT = 2;  // thorns: self-damage for each repeat past the first
  const WARD_BLUNT = 1;         // ward: points lost from every blow
  // `short` is what the foe card says.
  const ENEMY_ROSTER = [
    { name: "THE GUARD",   short: "GUARD",  hp: 16, max: 16, reply: 2, kind: "plain" },
    { name: "THE BEAST",   short: "BEAST",  hp: 22, max: 22, reply: 3, kind: "thorns" },
    { name: "THE WARDEN",  short: "WARDEN", hp: 26, max: 26, reply: 3, kind: "reflect" },
    { name: "THE NIGHT",   short: "NIGHT",  hp: 30, max: 30, reply: 4, kind: "ward" },
  ];
  // The word on the foe card: the current foe's short name (the meaning-boss is
  // just MEANING, so it never clashes with a body part).
  function foeName() { return enemy && enemy.short ? enemy.short : "GUARD"; }
  // One-line subtitle under the enemy bar, built from the data.
  function enemySub(e) {
    const base = {
      plain:   "a slow sentinel",
      thorns:  "thorns · repeats lash YOU",
      reflect: "armored · hits halved, fire isn't",
      ward:    "warded · each cast loses " + WARD_BLUNT,
    }[e.kind] || "";
    return base + " · replies " + e.reply;
  }
  // The longer, plain-language wrinkle for the tooltip and the Foes tab.
  function wrinkleText(e) {
    switch (e.kind) {
      case "plain":
        return e.dummy ? "A practice dummy. It never hits back."
                       : "A slow sentinel. Nothing tricky: learn the ropes here.";
      case "thorns":
        return "Thorns: every repeat after the first lashes back at YOU for " + THORNS_PER_REPEAT +
               ". 'twice' costs you " + THORNS_PER_REPEAT + ", 'thrice' costs you " + (2 * THORNS_PER_REPEAT) + ". Hit its MOUTH to silence that.";
      case "reflect":
        return "Armored: hit sentences land at half (rounded up). Fire (BURN) goes straight through. Hit its MOUTH to silence that.";
      case "ward":
        return "Warded: every cast loses " + WARD_BLUNT + " point, so bigger sentences waste less. Hit its MOUTH to silence that.";
      case "meaning":
        return "Clean sentences feed it. Break the words: place cards in any order, then CAST.";
    }
    return "";
  }
  let encIndex = 0; // which roster entry we're on
  function newEnemy() {
    const e = ENEMY_ROSTER[Math.min(encIndex, ENEMY_ROSTER.length - 1)];
    return Object.assign({ status: null, badge: null }, e);
  }
  function totalEncounters() { return ENEMY_ROSTER.length + 1; } // +1 = meaning-boss

  // TWIST-03: the meaning-boss is the meaning the player spelled by accident.
  // Its name is drawn from the words they cast most, its HP scales with how
  // much "clean grammar" they wrote (the note's weight), and it can ONLY be
  // hurt by mis-grammared sentences — clean ones feed it.
  function meaningFromNote() {
    // Tally significant words (skip articles/short connectors) across the note.
    // Glue, repeats and the foe's own name carry no meaning; a body part counts
    // double, so "BREAK the HEART" can name the ending (THE HEART).
    const tally = {};
    for (const line of note) {
      for (const w of line.replace(/\u0335/g, "").split(/\s+/)) {
        const k = w.toUpperCase();
        if (k.length < 2) continue;
        const d = defOf(w);
        if (d && (d.pos === "ART" || d.pos === "ADV" || d.pos === "NUM" || d.foe)) continue;
        tally[k] = (tally[k] || 0) + (d && d.part ? 2 : 1);
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
      short: "MEANING",
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

  // ---- Word lookups + card text (generated from POOL, so numbers can't drift) --
  const FOE_DEF = POOL.filter((d) => d.foe)[0];
  function defOf(word) {
    for (const d of POOL) if (!d.foe && d.word === word) return d;
    // Any foe's short name resolves to the one foe card.
    if (word === "MEANING" || ENEMY_ROSTER.some((e) => e.short === word)) return FOE_DEF;
    return null;
  }
  function chainOf(words) { return words.map((w) => makeCard(defOf(w))); }
  const SIGNED = (n) => (n >= 0 ? "+" : "") + n;
  // The short value line printed on a card face.
  function cardValueText(def) {
    switch (def.pos) {
      case "VERB": return (def.effect === "heal" ? "heal " : def.effect === "fire" ? "fire " : "hit ") + def.base;
      case "ADJ":  return def.mult != null ? (def.mult === 0.5 ? "half" : "x" + def.mult) : SIGNED(def.add || 0);
      case "ADV":
      case "NUM":  return "x" + def.rep;
      case "NOUN": return def.target === "player" ? "you" : def.part ? PARTS[def.part].value : "foe";
      case "ART":  return "glue";
    }
    return "";
  }
  // Tooltip text for a card.
  function describeCard(def) {
    switch (def.pos) {
      case "VERB":
        if (def.effect === "heal") return { head: def.word + " · verb", text: "Heals " + def.base + " to the LAST noun. SAVE ME heals you; aim it at a foe and you heal the foe." };
        if (def.effect === "fire") return { head: def.word + " · verb", text: "Fire " + def.base + " damage to the last noun. Fire goes straight through armor." };
        return { head: def.word + " · verb", text: "Hits for " + def.base + " damage to the last noun." };
      case "NOUN":
        if (def.target === "player") return { head: def.word + " · noun", text: "That's YOU. If this is the last noun in the sentence, the effect lands on you." };
        if (def.part) return { head: def.word + " · body part", text: PARTS[def.part].tip + " Only damage does this; a heal just heals the foe." };
        return { head: def.word + " · noun", text: "The foe in front of you" + (enemy && !enemy.dummy ? " (" + enemy.name + ")" : "") + ". The LAST noun in the sentence takes the effect." };
      case "ADJ":
        return { head: def.word + " · adjective", text: def.mult != null
          ? "Goes before the noun. Halves the number (rounded)."
          : (def.add ? "Goes before the noun. Adds " + def.add + " to the number." : "Goes before the noun. No change to the number: just style.") };
      case "ADV":
      case "NUM":
        return { head: def.word + " · " + (def.pos === "ADV" ? "adverb" : "number"), text: "Goes at the very end. The whole effect happens " + def.rep + (def.rep === 1 ? " time." : " times.") };
      case "ART":
        return { head: def.word + " · article", text: "Glue: opens a noun phrase. No effect. One per noun, before any adjective." };
    }
    return { head: def.word, text: "" };
  }

  function isDamageVerb(c) { return c.pos === "VERB" && c.effect !== "heal"; }
  function isFoeNoun(c) { return c.pos === "NOUN" && c.target === "enemy"; }

  // Hand cards each own a fixed slot, so nothing slides under the cursor when
  // a card is placed or taken back.
  let handCols = HAND_SIZE;
  function setHand(words) {
    hand = chainOf(words);
    hand.forEach((c, i) => { c.slot = i; });
    handCols = hand.length;
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
      // Ensure the hand is "playable": at least one DAMAGE verb (a heal-only hand
      // has no way to attack) and a foe-targeting NOUN (the foe card or a body part).
    } while (guard < 40 && !(
      hand.some(isDamageVerb) &&
      hand.some(isFoeNoun)
    ));
    // Belt and braces: never ship a hand without a foe noun or a damage verb.
    if (!hand.some(isFoeNoun)) {
      const at = hand.findIndex((c) => c.pos !== "VERB" && c.pos !== "NOUN");
      hand[at >= 0 ? at : 0] = makeCard(FOE_DEF);
    }
    if (!hand.some(isDamageVerb)) {
      const dmg = POOL.filter((d) => d.pos === "VERB" && d.effect !== "heal");
      const at = hand.findIndex((c) => c.pos === "ART" || c.pos === "ADV" || c.pos === "NUM");
      hand[at >= 0 ? at : 0] = makeCard(dmg[(Math.random() * dmg.length) | 0]);
    }
    hand.forEach((c, i) => { c.slot = i; });
    handCols = HAND_SIZE;
  }

  function startRun() {
    practice = null;
    player = { hp: PLAYER_MAX, max: PLAYER_MAX };
    encIndex = 0;
    enemy = newEnemy();
    recordDepth(1);
    chain = [];
    turnNo = 1;
    runDamage = 0;
    lastLog = "Click cards to chain a sentence. Stuck? Press H.";
    lastDelta = "";
    noticeUntil = 0; subjectHints = 0;
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
    castsThisRun = 0;
    typer.target = ""; typer.shown = 0;
    setTyper(lastLog); typer.shown = 0;
    dealHand();
    state = STATE.RUN;
  }
  let castsThisRun = 0;

  // Gentle one-line notices (why a card was refused, practice nudges).
  let notice = "", noticeUntil = 0;
  let subjectHints = 0;  // how many times we've explained "the first noun is decoration"
  function setNotice(t) { notice = t; noticeUntil = performance.now() + 4500; }
  function activeNotice() { return performance.now() < noticeUntil ? notice : ""; }

  // =====================================================================
  // THE FIRST PAGE: a guided practice fight on the real run screen.
  // Scripted hands, a dummy that never hits back, one idea per beat. It never
  // touches the Note, the best score, the depth record or runDamage.
  //   beat 0 welcome   1 verb   2 object   3 cast   4 adjective + repeat
  //   beat 5 the trap (last noun)   6 free finish   7 done
  // =====================================================================
  let practice = null;
  const PRACTICE_HP = 20;
  const PRACTICE_HANDS = {
    1: ["BURN", "the", "GUARD", "twice", "CRUEL", "YOU", "STRIKES", "SAVE"],
    4: ["STRIKES", "the", "CRUEL", "GUARD", "twice", "YOU", "BURN", "a"],
    5: ["the", "GUARD", "STRIKES", "YOU", "ME", "HEAL", "twice", "a"],
  };
  const PRACTICE_ALLOWED = {
    1: ["BURN"],
    2: ["the", "GUARD"],
    3: [],
    4: ["STRIKES", "the", "CRUEL", "GUARD", "twice"],
    5: ["the", "GUARD", "STRIKES", "YOU"],
  };
  const PRACTICE_GOAL4 = ["STRIKES", "CRUEL", "GUARD", "twice"];

  function startPractice() {
    practice = { beat: 0, coachFull: "", coachShown: 0, result: "" };
    player = { hp: PLAYER_MAX, max: PLAYER_MAX };
    enemy = { name: "THE GUARD", short: "GUARD", status: null, badge: null, hp: PRACTICE_HP, max: PRACTICE_HP, reply: 0, kind: "plain", dummy: true };
    encIndex = 0; chain = []; turnNo = 1;
    lastLog = ""; lastDelta = ""; noticeUntil = 0; subjectHints = 0;
    note = []; noteRevealed = false; revealAnim = 0; bossPending = false;
    misGrammar = false; misGrammarUnlocked = false; chainCorrupted = false; endingRewritten = false;
    particles = []; stains = []; stamps = []; floaters = [];
    pageShift = 0; shakeMag = 0; flash.a = 0;
    typer.target = ""; typer.shown = 0;
    tip = null;
    setHand(PRACTICE_HANDS[1]);
    state = STATE.RUN;
  }
  function finishIntro() {
    introSeen = true;
    saveInt(INTRO_KEY, 1);
    startRun();
  }
  function practiceAllows(card) {
    const a = PRACTICE_ALLOWED[practice.beat];
    return !a || a.indexOf(card.word) >= 0;
  }
  function practiceModal() { return practice && (practice.beat === 0 || practice.beat === 7); }
  // Beats 1-3 follow the chain, so UNDO walks the lesson back too.
  function practiceSync() {
    if (!practice || practice.beat < 1 || practice.beat > 3) return;
    practice.beat = !chain.some((c) => c.pos === "VERB") ? 1 : (isCastable(chain) ? 3 : 2);
  }
  function practiceCoach() {
    const fx = computeEffect(chain);
    switch (practice.beat) {
      case 1: return "Start with a verb. It says what happens. Click BURN.";
      case 2: return "Now say who it happens to. Add \"the\", then GUARD. The dotted slot always shows what fits next.";
      case 3: return "That's a sentence! The EFFECT line shows what it will do: " + (fx ? fx.summary : "") + ". Press ENTER or click CAST.";
      case 4:
        if (isCastable(chain) && PRACTICE_GOAL4.every((w) => chain.some((c) => c.word === w))) {
          return "STRIKES is " + defOf("STRIKES").base + ", CRUEL adds " + defOf("CRUEL").add + ", twice doubles it: " +
                 (fx ? fx.total : "?") + ". Cast it.";
        }
        return (practice.result ? practice.result + " " : "") +
               "Stack words: an adjective goes before the noun and changes the number; 'twice' goes at the end and repeats it. Build: STRIKES the CRUEL GUARD twice.";
      case 5:
        if (fx && fx.target === "player") {
          return "Who does the striking doesn't matter. The LAST noun takes the effect, and that is YOU. Cast it to feel it (it's only practice), or UNDO with Backspace and aim at the guard.";
        }
        if (fx) return "Good eye: that one hits the guard. Cast it.";
        return "Careful: sentences are literal. Build: the GUARD STRIKES YOU.";
      case 6:
        return (practice.result ? practice.result + " " : "") +
               "A real page deals 12 random words, including body parts like HEART that aim at a spot on the foe. Hover one to see its trick. Finish the guard.";
    }
    return "";
  }
  function practiceCast() {
    const fx = computeEffect(chain);
    const b = practice.beat;
    if (!fx) { sfx.reject(); setNotice("Not a sentence yet. The note below says what to add."); return; }
    if (b === 4 && !PRACTICE_GOAL4.every((w) => chain.some((c) => c.word === w))) {
      sfx.reject(); setNotice("Build STRIKES the CRUEL GUARD twice first. That's the lesson."); return;
    }
    if (b === 6 && (fx.heal || fx.target !== "enemy")) {
      sfx.reject(); setNotice("Aim a hit at the guard to finish the page."); return;
    }
    const sentence = previewSentence(chain);
    sfx.cast(); spawnStamp(); kick(4);
    lastDelta = "";
    if (fx.heal) {
      if (fx.target === "player") { player.hp = Math.min(player.max, player.hp + fx.total); spawnFloater(150, H - 150, "+" + fx.total, COLORS.snap); }
      else { enemy.hp = Math.min(enemy.max, enemy.hp + fx.total); spawnFloater(W - 160, 180, "+" + fx.total, COLORS.snap); }
    } else if (fx.target === "player") {
      player.hp -= fx.total; sfx.hurt(); flashScreen(COLORS.bleed, 0.3); kick(8);
      spawnInk(120, H - 120, COLORS.bleed, 14);
      spawnFloater(150, H - 150, "-" + fx.total, COLORS.bleed);
      lastDelta = "YOU -" + fx.total;
    } else {
      enemy.hp -= fx.total;
      spawnInk(W - 160, 180, COLORS.bleed, 14);
      spawnFloater(W - 160, 180, "-" + fx.total, COLORS.bleed);
      flashScreen(COLORS.bleed, 0.22); kick(6);
      lastDelta = enemy.name + " -" + fx.total;
    }
    sfx.bleed();
    lastLog = '"' + sentence + '"  ->  ' + fx.summary;
    setTyper(lastLog); typer.shown = 0;
    chain = [];
    noticeUntil = 0;
    pageShift = 26; turnNo++;
    if (b === 5) practice.result = fx.target === "player"
      ? "That's the trap: read the last word before you cast." : "Good eye.";
    else practice.result = "";
    if (enemy.hp <= 0) {
      enemy.hp = 0; sfx.ding(); flashScreen(COLORS.snap, 0.35); kick(7);
      practice.beat = 7;
      return;
    }
    sfx.ding();
    if (b === 3) { practice.beat = 4; practice.result = "It happened exactly as written."; setHand(PRACTICE_HANDS[4]); }
    else if (b === 4) { practice.beat = 5; setHand(PRACTICE_HANDS[5]); }
    else if (b === 5) { practice.beat = 6; dealHand(); }
    else dealHand();
  }

  // ---- Chain manipulation ----------------------------------------------
  // Was the current chain assembled with at least one deliberate mis-grammar?
  let chainCorrupted = false;

  function tryPlaceCard(idx) {
    const card = hand[idx];
    if (!card) return;
    if (practice && !practiceAllows(card)) {
      // Practice: unwanted cards are simply "not yet", never a punishment.
      setNotice("Not that one yet. The note below says which card.");
      return;
    }
    const legal = canAttach(chain, card);
    if (legal) {
      card.corrupt = false;
      chain.push(card);
      hand.splice(idx, 1);
      noticeUntil = 0;
      sfx.snap();
      kick(2);
      practiceSync();
    } else if (misGrammar && misGrammarUnlocked) {
      // TWIST-04: mis-grammar mode lets you force a socket-mismatched card,
      // breaking the grammar on purpose. The chain is marked corrupted —
      // the only thing that can wound the meaning-boss.
      card.corrupt = true;
      chain.push(card);
      hand.splice(idx, 1);
      noticeUntil = 0;
      chainCorrupted = true;
      // A wrong, jammed-but-forced sound: reject buzz then a snap.
      sfx.reject();
      setTimeout(() => sfx.snap(), 90);
    } else {
      // Illegal placement: visible reject (JUICE-01) + key-jam buzz + shake.
      card.shake = 0.35;
      sfx.reject();
      kick(3);
      setNotice("\u201c" + card.word + "\u201d can't go here. " + whyRefused(chain, card));
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
    noticeUntil = 0;
    sfx.snap();
    practiceSync();
  }

  function clearChain() {
    while (chain.length) { const c = chain.pop(); c.corrupt = false; hand.push(c); }
    chainCorrupted = false;
    noticeUntil = 0;
    practiceSync();
  }

  // CORE-06/07/08 + TWIST-05: commit + resolve + enemy reply + redraw.
  function castChain() {
    if (revealAnim > 0 && revealAnim < 1) return; // locked during reveal
    if (practice) { practiceCast(); return; }  // the guided first page never touches the run
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
    let statusNote = "";  // what a body part did to the foe, for the log
    enemy.badge = null;   // last cast's status badge is spent
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
        // MOUTH silences the wrinkle for this cast (thorns, armor, ward).
        const silenced = fx.silence && enemy.kind !== "plain";
        if (silenced) wrinkleNote = " (its trick is silenced)";
        if (!silenced && enemy.kind === "reflect" && fx.effect === "phys") {
          // Armored: clean physical blows land at half. Fire bypasses.
          dmg = Math.ceil(dmg / 2);
          wrinkleNote = " (armor halves STRIKES)";
        }
        if (!silenced && enemy.kind === "ward") {
          // Warded: blunts the first point of every blow.
          dmg = Math.max(0, dmg - WARD_BLUNT);
          wrinkleNote = " (ward blunts " + WARD_BLUNT + ")";
        }
        if (!silenced && enemy.kind === "thorns" && fx.reps > 1) {
          // Thorns: every repeat past the first lashes back at YOU.
          thornsBack = (fx.reps - 1) * THORNS_PER_REPEAT;
          wrinkleNote = " (thorns! repeats lash YOU -" + thornsBack + ")";
        }
        dmgEnemy = dmg; enemy.hp -= dmg; runDamage += dmg;
        // HANDS / EYES: a status for the foe's very next reply (it survived to give it).
        if (fx.status && enemy.hp > 0) {
          // A blinded foe stays blinded: HANDS never downgrades it.
          if (!(enemy.status === "blind" && fx.status === "halved")) enemy.status = fx.status;
          statusNote = "  " + PARTS[fx.part].land;
        } else if (fx.silence && enemy.kind === "plain") statusNote = "  (nothing to silence)";
        lastLog = '"' + sentence + '"  ->  ' + fx.summary + wrinkleNote + statusNote;
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
    if (!corrupted && parseChain(chain).subj) subjectHints++;

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
    // A status from HANDS / EYES is spent on this reply.
    let reply = enemy.reply, replyNote = "";
    if (enemy.status === "blind") { reply = 0; replyNote = " (blinded: it misses)"; enemy.badge = "blinded"; }
    else if (enemy.status === "halved") { reply = Math.ceil(reply / 2); replyNote = " (hands hurt: halved)"; enemy.badge = "halved"; }
    enemy.status = null;
    if (reply > 0) {
      player.hp -= reply;
      sfx.hurt();
      spawnInk(120, H - 120, COLORS.bleed, 10);
      spawnFloater(150, H - 150, "-" + reply, COLORS.bleed);
      kick(4);
    }
    lastDelta += (lastDelta ? "   " : "") + enemy.name + " replies: YOU -" + reply + replyNote;

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
      lastLog = "It feeds on clean sentences. Break the words: place cards in any order, then CAST.";
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
  // HELP OVERLAY (DOM). Words, Examples and Foes are generated from POOL,
  // ENEMY_ROSTER and computeEffect, so the numbers can never drift.
  // =====================================================================
  let helpOpen = false;
  let helpTab = "how";
  const helpEl = document.getElementById("help");
  const HELP_TABS = [["how", "How to play"], ["words", "Words"], ["examples", "Examples"], ["foes", "Foes"]];

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function para() {
    const p = el("p");
    for (let i = 0; i < arguments.length; i++) {
      const a = arguments[i];
      p.appendChild(typeof a === "string" ? document.createTextNode(a) : a);
    }
    return p;
  }
  function chipFor(word) {
    const d = defOf(word);
    const c = el("span", "chip", word);
    if (d) c.style.borderBottomColor = POS_TAG[d.pos].c;
    if (d && d.target === "player") c.classList.add("danger");
    return c;
  }
  function sentenceEl(words) {
    const s = el("span", "sentence");
    words.forEach((w) => s.appendChild(chipFor(w)));
    return s;
  }
  // "hit 6 · CRUEL +2 · twice x2 = 12 on a foe", built by the real engine.
  function explainChain(words) {
    const ch = chainOf(words);
    const fx = computeEffect(ch);
    if (!fx) return "";
    const p = parseChain(ch);
    const bits = [(fx.heal ? "heal " : fx.effect === "fire" ? "fire " : "hit ") + p.verb.base];
    if (fx.part === "heart" && !fx.heal) bits.push("HEART " + SIGNED(HEART_BONUS));
    p.objAdjs.forEach((a) => {
      if (a.mult != null) bits.push(a.word + " halves it");
      else if (a.add) bits.push(a.word + " " + SIGNED(a.add));
    });
    if (fx.part === "eyes" && !fx.heal) bits.push("EYES " + SIGNED(-EYES_COST));
    if (fx.reps > 1) bits.push(p.mod.word + " x" + fx.reps);
    const rule = fx.part && !fx.heal && fx.part !== "heart" ? PARTS[fx.part].tail : "";
    return bits.join(" · ") + " = " + fx.total + (fx.target === "player" ? " on YOU" : " on a foe") +
      (fx.part === "eyes" ? ", and its next reply misses you" : rule ? ", and " + rule : "");
  }

  function helpHow() {
    const f = document.createDocumentFragment();
    f.appendChild(el("h3", "", "Write it, and it happens."));
    f.appendChild(para("Each page deals you 12 random word cards. Click them to chain a sentence on the typewriter, then press ENTER or CAST. The sentence happens exactly as written. Words you don't use are discarded, and the next page deals 12 fresh ones."));
    f.appendChild(el("h3", "", "A sentence needs a verb and a noun to land on."));
    const F = foeName();
    f.appendChild(para("The shortest is a verb and a noun: ", sentenceEl(["BURN", "the", F]), ". You can also open with a subject: ", sentenceEl(["the", "HANDS", "STRIKE", "the", F]), ". The dotted slot shows what fits next. Greyed cards don't fit, and if you try one the game tells you why."));
    f.appendChild(el("h3", "", "The LAST noun takes the effect."));
    f.appendChild(para("The first noun is just for show. ", sentenceEl(["the", F, "STRIKES", "YOU"]), " hits YOU. ", sentenceEl(["BURN", "the", F]), " burns the foe. The foe card always carries the name of the foe in front of you. Read the last word before you cast."));
    f.appendChild(el("h3", "", "Aim at a body part."));
    f.appendChild(para("HEART, HANDS, EYES and MOUTH are spots on the foe. Each has a tradeoff, e.g. ", sentenceEl(["STRIKE", "the", "HANDS"]), ": " + explainChain(["STRIKE", "the", "HANDS"]) + ". The Words tab lists them all."));
    f.appendChild(el("h3", "", "Stack words to change the number."));
    f.appendChild(para("Adjectives go before the noun and add to the number (or shrink it). A number or adverb at the very end repeats the whole effect. ", sentenceEl(["BURN", "the", F, "twice"]), ": " + explainChain(["BURN", "the", F, "twice"]) + "."));
    f.appendChild(el("h3", "", "Then the foe answers."));
    f.appendChild(para("After you cast, the foe hits you back for its reply, and you get 12 fresh words. Empty the foe's bar to win the page; empty yours and you lose. Four foes, then one more. You recover a little between fights."));
    f.appendChild(el("h3", "", "Controls"));
    f.appendChild(para("Click a card, or press 1-9, 0, - and = for the 12 slots. Backspace undoes, Esc clears, Enter casts, H opens this help. Hover a card (or long-press on a phone) to see what it does."));
    return f;
  }

  function helpWords() {
    const f = document.createDocumentFragment();
    const groups = [
      { title: "Verbs", blurb: "Start the effect. They set the number and the kind.", pos: ["VERB"] },
      { title: "Nouns", blurb: "The LAST noun is who it lands on. The foe card shows the name of the foe in front of you.", pos: ["NOUN"] },
      { title: "Adjectives", blurb: "Go before a noun and change the number.", pos: ["ADJ"] },
      { title: "Repeats", blurb: "Adverbs and numbers go at the very end and repeat the effect.", pos: ["ADV", "NUM"] },
      { title: "Articles", blurb: "Glue. They open a noun phrase and do nothing else.", pos: ["ART"] },
    ];
    groups.forEach((g) => {
      f.appendChild(el("h3", "", g.title));
      f.appendChild(el("p", "blurb", g.blurb));
      const rows = [], byVal = {};
      POOL.forEach((d) => {
        if (g.pos.indexOf(d.pos) < 0 || d.part) return;   // body parts get their own lines below
        let val = cardValueText(d);
        if (d.pos === "NOUN") val = d.target === "player" ? "lands on YOU" : "the foe, a plain hit";
        if (!byVal[val]) { byVal[val] = { val, words: [] }; rows.push(byVal[val]); }
        byVal[val].words.push(d.word);
      });
      const list = el("div", "rows");
      rows.forEach((r) => {
        const row = el("div", "row");
        row.appendChild(el("span", "val", r.val));
        const w = el("span", "words");
        r.words.forEach((x) => w.appendChild(chipFor(x)));
        row.appendChild(w);
        list.appendChild(row);
      });
      f.appendChild(list);
      if (g.pos[0] === "NOUN") {
        // Body parts: one line each, straight from PARTS so the numbers can't drift.
        POOL.forEach((d) => {
          if (!d.part) return;
          const row = el("div", "row");
          const v = el("span", "val"); v.appendChild(chipFor(d.word));
          row.appendChild(v);
          row.appendChild(el("span", "words", PARTS[d.part].row));
          list.appendChild(row);
        });
        f.appendChild(para("Body parts only do their trick with a damage verb. Healing one just heals the foe, and repeats (twice, 3...) repeat the number but apply the trick once."));
      }
    });
    f.appendChild(el("h3", "", "Key words"));
    f.appendChild(para("Hit and fire are damage. Fire goes straight through armor. Heal restores HP to the last noun: SAVE ME heals you, SAVE the foe heals the foe. Repeat means the whole effect happens that many times."));
    return f;
  }

  // Built on demand: the foe card's word is whichever foe you are facing.
  function helpExampleList() {
    const F = foeName();
    return [
      { words: ["BURN", "the", F] },
      { words: ["BURN", "the", F, "twice"] },
      { words: ["STRIKES", "the", "CRUEL", F] },
      { words: ["BREAK", "the", "WEAK", F], note: "WEAK halves the number, rounded." },
      { words: ["ENDS", "the", "SAVAGE", F, "thrice"] },
      { words: ["BREAK", "the", "HEART"], note: "A weak point: +" + HEART_BONUS + " before adjectives." },
      { words: ["STRIKE", "the", "HANDS"], note: "Its next reply to you is halved." },
      { words: ["STRIKE", "the", "EYES"], note: "Its next reply misses you, but this hit is 2 weaker." },
      { words: ["BURN", "the", "MOUTH"], note: "Silences its trick (thorns, armor or ward) for this cast." },
      { words: ["SAVE", "ME", "twice"], note: "Healing yourself is fine. Aim a heal at a foe or a body part and you heal the foe." },
      { words: ["the", F, "STRIKES", "YOU"], note: "The LAST noun takes it. This one hits YOU, not the foe." },
      { words: ["the", "HANDS", "STRIKE", "the", F], note: "The first noun is just for show. The foe takes the hit." },
    ];
  }
  function helpNotLegal() {
    return [
      ["the", "the"],
      ["BURN", "CRUEL", "SAVAGE"],
      ["BURN", foeName(), "BURN"],
      ["twice"],
    ];
  }
  function helpExamples() {
    const f = document.createDocumentFragment();
    f.appendChild(el("h3", "", "Sentences that work"));
    helpExampleList().forEach((ex) => {
      const line = explainChain(ex.words);
      if (!line) return;
      const box = el("div", "ex");
      box.appendChild(sentenceEl(ex.words));
      box.appendChild(el("div", "exline", line));
      if (ex.note) box.appendChild(el("div", "exnote", ex.note));
      f.appendChild(box);
    });
    f.appendChild(el("h3", "", "Sentences that don't"));
    helpNotLegal().forEach((words) => {
      // Build the prefix with the real grammar, then confirm the last card is refused.
      const ch = [];
      for (let i = 0; i < words.length - 1; i++) ch.push(makeCard(defOf(words[i])));
      const last = makeCard(defOf(words[words.length - 1]));
      if (canAttach(ch, last)) return;   // the rules changed: drop a stale example
      const box = el("div", "ex");
      box.appendChild(sentenceEl(words));
      box.appendChild(el("div", "exline bad", whyRefused(ch, last)));
      f.appendChild(box);
    });
    return f;
  }

  function helpFoes() {
    const f = document.createDocumentFragment();
    f.appendChild(para("Four foes, then one more. Each has its own trick."));
    ENEMY_ROSTER.forEach((e) => {
      const box = el("div", "foe");
      box.appendChild(el("div", "foename", e.name));
      box.appendChild(el("div", "foestats", e.hp + " HP · replies for " + e.reply + " each turn"));
      box.appendChild(el("div", "", wrinkleText(e)));
      f.appendChild(box);
    });
    return f;
  }

  function renderHelp() {
    const nav = document.getElementById("help-tabs");
    const body = document.getElementById("help-body");
    nav.textContent = "";
    HELP_TABS.forEach((t) => {
      const b = el("button", "tab", t[1]);
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", t[0] === helpTab ? "true" : "false");
      b.addEventListener("click", () => { helpTab = t[0]; renderHelp(); nav.querySelector("[aria-selected=true]").focus(); });
      nav.appendChild(b);
    });
    body.textContent = "";
    body.appendChild({ how: helpHow, words: helpWords, examples: helpExamples, foes: helpFoes }[helpTab]());
    body.scrollTop = 0;
    // Replay link for the guided first page.
    const act = document.getElementById("help-actions");
    act.textContent = "";
    if (state === STATE.TITLE || practice) {
      const b = el("button", "link", "Play the first page (the guided intro)");
      b.type = "button";
      b.addEventListener("click", () => { closeHelp(); startPractice(); });
      act.appendChild(b);
    } else {
      act.appendChild(el("span", "", "You can replay the guided intro from the title screen."));
    }
  }
  function openHelp() {
    if (helpOpen) return;
    helpOpen = true;
    tip = null; hoverCard = null; hoverEnemy = false; cancelPress();
    renderHelp();
    helpEl.hidden = false;
    const x = document.getElementById("help-close");
    if (x && x.focus) x.focus();
  }
  function closeHelp() {
    if (!helpOpen) return;
    helpOpen = false;
    helpEl.hidden = true;
    try { if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); } catch (e) {}
  }
  if (helpEl) {
    document.getElementById("help-close").addEventListener("click", closeHelp);
    helpEl.addEventListener("click", (e) => { if (e.target === helpEl) closeHelp(); });
    document.getElementById("help-tabs").addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const i = HELP_TABS.findIndex((t) => t[0] === helpTab);
      const n = (i + (e.key === "ArrowRight" ? 1 : HELP_TABS.length - 1)) % HELP_TABS.length;
      helpTab = HELP_TABS[n][0]; renderHelp();
      document.querySelector("#help-tabs [aria-selected=true]").focus();
    });
  }

  // =====================================================================
  // INPUT
  // =====================================================================
  // Hit-testable rects for the current frame's hand + buttons.
  let handRects = [];
  let btnRects = {}; // {cast, clear, undo, skip, help}
  let titleRects = {};
  let modalRects = {};
  let tip = null;                       // touch tooltip {kind, card, until}
  let hoverCard = null, hoverEnemy = false;
  let press = null;                     // touch long-press in flight
  const HAND_KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="];
  const LONG_PRESS_MS = 420;

  function startFromTitle() {
    if (!introSeen) startPractice(); else startRun();
  }

  function cancelPress() {
    if (press) { clearTimeout(press.timer); press = null; }
  }
  function startPress(card) {
    cancelPress();
    const pr = { card, fired: false, timer: 0 };
    pr.timer = setTimeout(() => {
      pr.fired = true;
      tip = { kind: "card", card, until: performance.now() + 4500 };
    }, LONG_PRESS_MS);
    press = pr;
  }
  function onPointerUp() {
    if (!press) return;
    const pr = press;
    clearTimeout(pr.timer);
    press = null;
    if (pr.fired || helpOpen || state !== STATE.RUN || bossPending) return;
    const idx = hand.indexOf(pr.card);
    if (idx >= 0) tryPlaceCard(idx);
  }

  function practiceModalAction(key) {
    if (key === "skip" || (key === "primary" && practice.beat === 7)) { finishIntro(); return; }
    if (key === "primary" && practice.beat === 0) { practice.beat = 1; }
  }

  function onPointerDown(e) {
    unlockAudio();
    if (helpOpen) return;
    const p = eventToCanvas(e);
    tip = null;

    if (state === STATE.TITLE) {
      for (const key in titleRects) {
        if (!hit(p, titleRects[key])) continue;
        if (key === "begin") startFromTitle();
        else if (key === "howto") openHelp();
        else if (key === "replay") startPractice();
        return;
      }
      startFromTitle();
      return;
    }
    if (state === STATE.WIN || state === STATE.LOSE) { state = STATE.TITLE; return; }

    // RUN: the help button always works (even mid-reveal).
    if (btnRects.help && hit(p, btnRects.help)) { openHelp(); return; }

    // The guided intro's welcome / done cards.
    if (practiceModal()) {
      for (const key in modalRects) {
        if (hit(p, modalRects[key])) { practiceModalAction(key); return; }
      }
      return;
    }

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
        else if (key === "skip") finishIntro();
        return;
      }
    }
    // The enemy panel explains its trick.
    if (hit(p, ENEMY_RECT)) { tip = { kind: "enemy", until: performance.now() + 4500 }; return; }
    // Hand cards. Touch waits for pointerup so a long-press can show the tooltip.
    for (let i = 0; i < handRects.length; i++) {
      if (hit(p, handRects[i])) {
        if (e.pointerType === "touch") startPress(hand[handRects[i].idx]);
        else tryPlaceCard(handRects[i].idx);
        return;
      }
    }
  }

  function hit(p, r) {
    return p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h;
  }

  function onPointerMove(e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const p = eventToCanvas(e);
    hoverCard = null; hoverEnemy = false;
    let cur = "default";
    if (helpOpen) { canvas.style.cursor = cur; return; }
    if (state === STATE.TITLE) {
      for (const key in titleRects) if (hit(p, titleRects[key])) cur = "pointer";
    } else if (state === STATE.RUN && !bossPending) {
      if (practiceModal()) {
        for (const key in modalRects) if (hit(p, modalRects[key])) cur = "pointer";
      } else {
        for (const key in btnRects) if (btnRects[key] && hit(p, btnRects[key])) cur = "pointer";
        if (hit(p, ENEMY_RECT)) { hoverEnemy = true; }
        for (let i = 0; i < handRects.length; i++) {
          if (hit(p, handRects[i])) {
            const hc = hand[handRects[i].idx];
            const blocked = practice && !practiceAllows(hc);
            hoverCard = blocked ? null : hc;   // no tooltip over the coach note for "not yet" cards
            cur = blocked ? "not-allowed" : "pointer";
          }
        }
      }
    } else if (state === STATE.RUN && btnRects.help && hit(p, btnRects.help)) cur = "pointer";
    canvas.style.cursor = cur;
  }
  function onPointerLeave() { hoverCard = null; hoverEnemy = false; }

  function onKeyDown(e) {
    unlockAudio();
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const isHelpKey = e.key === "h" || e.key === "H" || e.key === "?";
    if (helpOpen) {
      // Esc closes help only; it never clears the chain underneath.
      if (isHelpKey || e.key === "Escape") { e.preventDefault(); closeHelp(); }
      return;
    }
    if (isHelpKey) { e.preventDefault(); openHelp(); return; }
    if (state === STATE.TITLE) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); startFromTitle(); }
      return;
    }
    if (state === STATE.WIN || state === STATE.LOSE) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); state = STATE.TITLE; }
      return;
    }
    // RUN
    if (practiceModal()) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); practiceModalAction("primary"); }
      return;
    }
    if (bossPending) return;
    if (e.key === "Enter") { e.preventDefault(); castChain(); }
    else if (e.key === "Backspace") { e.preventDefault(); undoLast(); }
    else if (e.key === "Escape") { e.preventDefault(); clearChain(); }
    else if (e.key === "Tab") { e.preventDefault(); toggleMisGrammar(); }
    else {
      const slot = HAND_KEYS.indexOf(e.key);
      if (slot >= 0 && slot < handCols) {
        const idx = hand.findIndex((c) => c.slot === slot);
        if (idx >= 0) tryPlaceCard(idx);
      }
    }
  }

  function toggleMisGrammar() {
    if (!misGrammarUnlocked) { sfx.reject(); return; }
    misGrammar = !misGrammar;
    sfx.snap();
  }

  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerleave", onPointerLeave);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", cancelPress);
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

  // Shrink a font until `text` fits `maxW`; returns the size used.
  function fitFont(text, maxW, px, bold, minPx) {
    let sz = px;
    ctx.font = serif(sz, bold);
    while (ctx.measureText(text).width > maxW && sz > (minPx || 9)) { sz -= 1; ctx.font = serif(sz, bold); }
    return sz;
  }
  // Word-wrap `text` to `maxW` with the current ctx.font.
  function wrapText(text, maxW) {
    const lines = [];
    let ln = "";
    for (const wd of text.split(" ")) {
      const test = ln ? ln + " " + wd : wd;
      if (ctx.measureText(test).width > maxW && ln) { lines.push(ln); ln = wd; }
      else ln = test;
    }
    if (ln) lines.push(ln);
    return lines;
  }

  function drawCard(x, y, w, h, card, opts) {
    opts = opts || {};
    // dim = "not yet" in the guided intro; legal === false = doesn't fit the socket.
    const baseA = opts.dim ? 0.3 : (opts.legal === false ? 0.5 : 1);
    ctx.save();
    if (card.shake && card.shake > 0) {
      ctx.translate(Math.sin(card.shake * 60) * 4, 0);
    }
    ctx.globalAlpha = baseA;
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

    // POS header band + socket plug shape on the left edge.
    const tag = POS_TAG[card.pos] || { c: COLORS.faded, t: card.pos, shape: "round" };
    ctx.fillStyle = tag.c;
    ctx.globalAlpha = baseA * 0.92;
    roundRect(x + 5, y + 5, w - 10, 15, 2); ctx.fill();
    ctx.globalAlpha = baseA;
    ctx.fillStyle = "#f6efdd";
    ctx.font = serif(Math.min(12, fsz(9)), true);
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
    ctx.fillText(card.word, x + w / 2, y + h / 2 + (opts.value ? 4 : 8));

    // What the card is worth (fire 3, +2, x2 ...), printed under the word.
    if (opts.value) {
      ctx.fillStyle = danger ? COLORS.ribbon : "#5b5244";
      ctx.font = serif(Math.min(15, fsz(11)), false);
      ctx.fillText(cardValueText(card), x + w / 2, y + h - 22);
    }

    // Corrupted cards get a crossing-out strike.
    if (corrupt) {
      ctx.strokeStyle = COLORS.bleed; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x + 8, y + h / 2 + 12); ctx.lineTo(x + w - 8, y + h / 2 + 4);
      ctx.stroke();
    }

    // index hint for keyboard play (bottom-left, clear of the value line).
    if (opts.index != null) {
      ctx.fillStyle = COLORS.faded;
      ctx.font = serif(Math.min(13, fsz(10)), false);
      ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
      ctx.fillText(String(opts.index), x + 7, y + h - 6);
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

  // A rounded button whose rect is stored for hit-testing.
  function rectButton(store, key, label, x, y, w, h, bg, fg, px) {
    store[key] = { x, y, w, h };
    ctx.fillStyle = bg;
    roundRect(x, y, w, h, 5); ctx.fill();
    ctx.fillStyle = fg;
    fitFont(label, w - 16, px, true, 10);
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(label, x + w / 2, y + h / 2 + 1);
    ctx.textBaseline = "alphabetic";
  }

  let titleExample = null;
  function drawTitle() {
    drawPaper();
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";

    // Title struck in two inks, like a letterhead. Measured, so it can't overlap.
    ctx.font = serif(66, true);
    const wl = ctx.measureText("LAST").width, wr = ctx.measureText("WORDS").width, gap = 24;
    const x0 = W / 2 - (wl + gap + wr) / 2;
    ctx.fillStyle = COLORS.carbon;
    ctx.fillText("LAST", x0, 130);
    ctx.fillStyle = COLORS.ribbon;
    ctx.fillText("WORDS", x0 + wl + gap, 130);
    // underline rule
    ctx.strokeStyle = COLORS.faded; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(W / 2 - 220, 148); ctx.lineTo(W / 2 + 220, 148); ctx.stroke();

    ctx.textAlign = "center";
    ctx.fillStyle = COLORS.ribbon;
    ctx.font = serif(Math.min(20, fsz(19)), false);
    ctx.fillText("Chain word cards into a sentence. It happens, literally.", W / 2, 192);

    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(Math.min(20, fsz(15)), false);
    ctx.fillText("Each page deals 12 fresh random words. Use what you like; the rest are discarded.", W / 2, 224);
    if (!titleExample) {
      const fx = computeEffect(chainOf(["BURN", "the", "GUARD", "twice"]));
      titleExample = "Example:  BURN the GUARD twice   =   " + (fx ? "fire " + fx.amount + " x" + fx.reps + " = " + fx.total + " to the GUARD" : "");
    }
    ctx.fillText(titleExample, W / 2, 256);
    ctx.fillStyle = COLORS.faded;
    ctx.fillText("Beware:  the LAST noun takes the effect.  “the GUARD STRIKES YOU” hits YOU.", W / 2, 284);

    // Persisted progression (ONBOARD-03): best run + how far you got + win.
    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(Math.min(20, fsz(14)), false);
    const depthLabel = bestDepth >= totalEncounters()
      ? "all the way to the end"
      : ("foe " + Math.max(1, bestDepth) + " of " + totalEncounters());
    ctx.fillText("Best run: " + best + " damage dealt    ·    Furthest: " + depthLabel, W / 2, 336);
    if (everWon) {
      ctx.fillStyle = COLORS.snap;
      ctx.font = serif(Math.min(20, fsz(14)), true);
      ctx.fillText("✦ You have unwritten the note once. Could you do it again?", W / 2, 362);
    } else {
      ctx.fillStyle = COLORS.faded;
      ctx.font = serif(Math.min(20, fsz(13)), false);
      ctx.fillText("Four foes stand in your way. And one more.", W / 2, 362);
    }

    // Buttons: big BEGIN, then the two helpers.
    titleRects = {};
    rectButton(titleRects, "begin", touchUI ? "BEGIN" : "BEGIN  ·  Enter", W / 2 - 150, 396, 300, 54, COLORS.ribbon, "#f6efdd", 22);
    rectButton(titleRects, "howto", touchUI ? "How to play" : "How to play  ·  H", W / 2 - 230, 466, 220, 40, COLORS.carbon, "#f6efdd", 16);
    rectButton(titleRects, "replay", "Play the first page", W / 2 + 10, 466, 220, 40, COLORS.carbon, "#f6efdd", 16);
    ctx.fillStyle = COLORS.faded;
    ctx.font = serif(Math.min(20, fsz(13)), false);
    ctx.textAlign = "center";
    ctx.fillText(introSeen ? "The first page is a short guided practice fight." : "New here? BEGIN starts with a short guided practice fight.", W / 2, 532);

    ctx.fillStyle = COLORS.faded;
    ctx.font = serif(Math.min(20, fsz(13)), false);
    ctx.fillText("Content note: this story touches on suicide.", W / 2, 586);
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
    ctx.fillText("Damage dealt this run: " + runDamage + "    \u00b7    Best run: " + best, W / 2, H - 56);

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

  const ENEMY_RECT = { x: NOTE_X, y: 40, w: NOTE_W, h: 70 };

  // A small paper popover (card / enemy tooltips). `below` hangs it under the anchor.
  function drawPopover(ax, ay, below, head, text) {
    const w = 280, pad = 10;
    const hp = Math.min(17, fsz(13)), tp = Math.min(16, fsz(12));
    ctx.font = serif(tp, false);
    const lines = wrapText(text, w - pad * 2);
    const lh = tp + 4;
    const h = pad + hp + 6 + lines.length * lh + pad - 2;
    const x = Math.max(8, Math.min(W - w - 8, ax - w / 2));
    const y = below ? ay : Math.max(8, ay - h);
    ctx.save();
    ctx.shadowColor = "rgba(40,28,16,0.4)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 3;
    ctx.fillStyle = "#fff7e4";
    roundRect(x, y, w, h, 4); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = COLORS.ribbon; ctx.lineWidth = 1.2;
    roundRect(x, y, w, h, 4); ctx.stroke();
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    ctx.fillStyle = COLORS.ribbon;
    ctx.font = serif(hp, true);
    ctx.fillText(head, x + pad, y + pad + hp - 2);
    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(tp, false);
    lines.forEach((ln, i) => ctx.fillText(ln, x + pad, y + pad + hp + 6 + (i + 1) * lh - 4));
  }
  function drawTips() {
    const now = performance.now();
    if (tip && now > tip.until) tip = null;
    let card = null, enemyTip = false;
    if (tip) { if (tip.kind === "card") card = tip.card; else enemyTip = true; }
    else if (hoverCard) card = hoverCard;
    else if (hoverEnemy) enemyTip = true;
    if (card) {
      const i = hand.indexOf(card);
      if (i < 0 || !handRects[i]) { tip = null; hoverCard = null; }
      else {
        const r = handRects[i], d = describeCard(card);
        drawPopover(r.x + r.w / 2, r.y - 6, false, d.head, d.text);
      }
    } else if (enemyTip && enemy) {
      drawPopover(NOTE_X + NOTE_W / 2, ENEMY_RECT.y + ENEMY_RECT.h + 4, true, enemy.name, wrinkleText(enemy));
    }
  }

  function drawHelpButton() {
    const cx = W - 30, cy = 22, r = 15;
    btnRects.help = { x: cx - r - 2, y: cy - r - 2, w: r * 2 + 4, h: r * 2 + 4 };
    ctx.fillStyle = COLORS.carbon;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#f6efdd";
    ctx.font = serif(20, true);
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("?", cx, cy + 1);
    ctx.textBaseline = "alphabetic";
  }

  // The guided intro's coach note: sits in the free space below the buttons.
  function drawCoach() {
    const bx = 28, by0 = 386, bw = 662, bh = 102;
    ctx.save();
    ctx.shadowColor = "rgba(40,28,16,0.3)"; ctx.shadowBlur = 6; ctx.shadowOffsetY = 2;
    ctx.fillStyle = "#fff7e4";
    roundRect(bx, by0, bw, bh, 4); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = COLORS.ribbon; ctx.lineWidth = 1.4;
    roundRect(bx, by0, bw, bh, 4); ctx.stroke();
    ctx.fillStyle = COLORS.ribbon;
    ctx.font = serif(Math.min(16, fsz(12)), true);
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    ctx.fillText("✎ a note to a new hand", bx + 14, by0 + 22);
    rectButton(btnRects, "skip", "Skip intro", bx + bw - 118, by0 + 6, 108, 24, COLORS.faded, "#f6efdd", Math.min(15, fsz(12)));

    const full = practiceCoach();
    if (full !== practice.coachFull) { practice.coachFull = full; practice.coachShown = 0; }
    let px = Math.min(18, Math.max(15, fsz(15))), lines;
    do { ctx.font = serif(px, false); lines = wrapText(full, bw - 28); px--; } while (lines.length > 3 && px >= 12);
    px++;
    ctx.fillStyle = COLORS.carbon;
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    let left = Math.floor(practice.coachShown), yy = by0 + 50;
    for (const ln of lines) {
      if (left <= 0) break;
      ctx.fillText(ln.slice(0, left), bx + 14, yy);
      left -= ln.length + 1;
      yy += px + 6;
    }
  }

  function drawPracticeModal() {
    ctx.fillStyle = "rgba(30,22,14,0.55)";
    ctx.fillRect(0, 0, W, H);
    const w = 580, h = 276, x = (W - w) / 2, y = 140;
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 18; ctx.shadowOffsetY = 6;
    ctx.fillStyle = "#f6efdd";
    roundRect(x, y, w, h, 6); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = COLORS.ribbon; ctx.lineWidth = 2;
    roundRect(x, y, w, h, 6); ctx.stroke();
    const welcome = practice.beat === 0;
    ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
    ctx.fillStyle = COLORS.ribbon;
    ctx.font = serif(32, true);
    ctx.fillText(welcome ? "The First Page" : "That's the whole trick.", W / 2, y + 56);
    ctx.fillStyle = COLORS.carbon;
    const px = Math.max(17, fsz(16));
    ctx.font = serif(px, false);
    const body = welcome
      ? "Every card is a word. Chain them into a sentence and it happens, literally. Let's write one. It takes about a minute, and nothing here is saved."
      : "Four foes are waiting, and one more. Press ? or H any time to see the word list.";
    wrapText(body, w - 70).forEach((ln, i) => ctx.fillText(ln, W / 2, y + 100 + i * (px + 7)));
    modalRects = {};
    if (welcome) {
      rectButton(modalRects, "primary", "BEGIN THE FIRST PAGE", W / 2 - 160, y + 170, 320, 44, COLORS.ribbon, "#f6efdd", 18);
      rectButton(modalRects, "skip", "I know how to play (skip)", W / 2 - 130, y + 228, 260, 32, COLORS.faded, "#f6efdd", 14);
    } else {
      rectButton(modalRects, "primary", "START", W / 2 - 110, y + 170, 220, 44, COLORS.ribbon, "#f6efdd", 18);
    }
  }

  function drawRun() {
    drawPaper();

    // The whole working area can shift down a line on carriage return.
    ctx.save();
    ctx.translate(0, pageShift);

    // Header — the document title, struck in two inks.
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = COLORS.carbon;
    ctx.font = serif(15, true);
    ctx.fillText("LAST WORDS", 24, 30);
    ctx.fillStyle = COLORS.faded;
    ctx.font = serif(12, false);
    ctx.fillText(practice ? "· the first page (practice)" : "· page " + turnNo, 132, 30);

    // Enemy panel (red ink). The meaning-boss is named after your own words.
    drawHPBar(NOTE_X, 64, NOTE_W, enemy.name, enemy.hp, enemy.max, COLORS.ribbon);
    ctx.fillStyle = COLORS.ribbon;
    ctx.textAlign = "left";
    const subTxt = enemy.dummy ? "practice dummy · never hits back"
      : enemy.kind === "meaning" ? "the meaning you spelled · feeds on clean words"
      : enemySub(enemy);
    fitFont(subTxt, NOTE_W - 22, fsz(11), false, 9);
    ctx.fillText(subTxt, NOTE_X, 94);
    // a tiny "i": hover or tap the panel for the plain-language trick
    ctx.strokeStyle = COLORS.ribbon; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(NOTE_X + NOTE_W - 7, 90, 7, 0, Math.PI * 2); ctx.stroke();
    ctx.font = serif(10, true); ctx.textAlign = "center";
    ctx.fillText("i", NOTE_X + NOTE_W - 7, 94);
    // Status badge: HANDS / EYES leave the foe "halved" or "blinded" for its next
    // reply. The reply lands right after the cast, so the badge stays until the next cast.
    if (enemy.badge) {
      const bt = enemy.badge.toUpperCase();
      ctx.font = serif(11, true);
      const bw = ctx.measureText(bt).width + 14;
      ctx.fillStyle = COLORS.ribbon;
      roundRect(NOTE_X + NOTE_W - bw, 46, bw, 16, 8); ctx.fill();
      ctx.fillStyle = "#f6efdd"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(bt, NOTE_X + NOTE_W - bw / 2, 54.5);
      ctx.textBaseline = "alphabetic"; ctx.textAlign = "left";
    }
    // Encounter progress dots (CONTENT-02) — how deep into the run you are.
    if (!practice) {
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
    ctx.font = serif(Math.min(14, fsz(10)), true);
    ctx.textAlign = "left";
    ctx.fillText("THE PLATEN · your sentence builds here, left to right", 38, platenY + 16);

    // Chain cards laid left-to-right.
    const cw = 82, ch = 58, gap = 8;
    let cx = 38;
    for (const c of chain) {
      drawCard(cx, platenY + 24, cw, ch, c, {});
      cx += cw + gap;
    }
    // Ghosted next-socket hint (ONBOARD-02) — diegetic dotted chit, in words.
    const canExtend = misGrammar && misGrammarUnlocked
      ? true
      : (!isCastable(chain) || chainPhase(chain) === "MOD");
    if (canExtend && cx + cw < platenW + 28) {
      ctx.save();
      ctx.globalAlpha = 0.6;
      ctx.strokeStyle = misGrammar ? COLORS.bleed : COLORS.ribbon;
      ctx.setLineDash([5, 4]);
      roundRect(cx, platenY + 24, cw, ch, 4); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = misGrammar ? COLORS.bleed : COLORS.ribbon;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      const lines = misGrammar ? ["anything,", "break it"] : socketLines(chainPhase(chain));
      const lh = Math.max(13, Math.min(16, fsz(12)));
      lines.forEach((ln, i) => {
        fitFont(ln, cw - 8, Math.min(14, fsz(11)), false, 9);
        ctx.fillText(ln, cx + cw / 2, platenY + 24 + ch / 2 + (i - (lines.length - 1) / 2) * lh);
      });
      ctx.restore();
      ctx.textBaseline = "alphabetic";
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
    ctx.font = serif(Math.min(19, fsz(14)), false);
    if (chainCorrupted) {
      ctx.fillStyle = COLORS.bleed;
      ctx.fillText("EFFECT:  broken phrase — only the meaning fears this", 28, previewY + 26);
    } else if (fx) {
      const feedsBoss = enemy.kind === "meaning" && !fx.heal && fx.target === "enemy";
      let col = COLORS.snap, tail = "";
      if (feedsBoss) { tail = "   (!! this FEEDS the meaning)"; }
      else if (fx.heal) {
        if (fx.target === "player") tail = "   (heals you)";
        else { col = COLORS.ribbon; tail = "   (!! heals the enemy)"; }
      } else if (fx.target === "player") { col = COLORS.ribbon; tail = "   (!! hits YOU)"; }
      else if (fx.tail) tail = "   (" + fx.tail + ")";
      ctx.fillStyle = col;
      const effLine = "EFFECT:  " + fx.summary + tail;
      fitFont(effLine, 670, Math.min(19, fsz(14)), false, 10);
      ctx.fillText(effLine, 28, previewY + 26);
    } else {
      ctx.fillStyle = COLORS.faded;
      ctx.fillText("EFFECT:  (add a verb and a noun for it to land on)", 28, previewY + 26);
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
      fitFont(label, bw - 12, Math.min(16, fsz(13)), true, 10);
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(label, bx + bw / 2, by + bh / 2 + 1);
      ctx.textBaseline = "alphabetic";
      return bx + bw + 8;
    }
    let bx = 28;
    const castColor = chainCorrupted ? COLORS.bleed : (isCastable(chain) ? COLORS.ribbon : COLORS.faded);
    bx = button("cast", touchUI ? "CAST" : "CAST · Enter", bx, castColor);
    bx = button("undo", touchUI ? "UNDO" : "UNDO · ⌫", bx, COLORS.carbon);
    bx = button("clear", touchUI ? "CLEAR" : "CLEAR · Esc", bx, COLORS.carbon);
    if (misGrammarUnlocked) {
      const ml = "MIS-GRAMMAR" + (touchUI ? (misGrammar ? " ✓" : "") : " · Tab");
      bx = button("mis", ml, bx, misGrammar ? COLORS.bleed : "#5a4d3a", misGrammar);
    }

    // ---- Resolution log (typed) ---------------------------------------
    // Priority: a refusal reason, then the typed result of the last cast (empty
    // chain), then the next-step hint for the chain being built.
    ctx.textAlign = "left";
    let logText, logCol = COLORS.carbon;
    const nt = activeNotice();
    if (nt) { logText = nt; logCol = COLORS.ribbon; }
    else if (chain.length === 0) logText = typedText();
    else if (chainCorrupted) logText = "Broken on purpose. Cast it and see what the words do.";
    else if (misGrammar && misGrammarUnlocked) logText = "MIS-GRAMMAR is armed: any card goes in, in any order.";
    else if (fx && fx.target === "enemy" && !fx.heal && subjectHints < 2 && parseChain(chain).subj)
      logText = "The first noun is only for show: the LAST noun takes the effect.";
    else if (practice && isCastable(chain)) logText = "Done! Cast it.";
    else logText = nextStepText(chain);
    ctx.fillStyle = logCol;
    if (logText) { fitFont(logText, 670, Math.min(17, fsz(13)), false, 10); ctx.fillText(logText, 28, by + 58); }
    if (lastDelta) {
      ctx.fillStyle = COLORS.ribbon;
      fitFont(lastDelta, 670, Math.min(16, fsz(13)), false, 10);
      ctx.fillText(lastDelta, 28, by + 80);
    }

    // ---- The guided intro's coach note ---------------------------------
    if (practice && !practiceModal()) drawCoach();

    // ---- Hand ----------------------------------------------------------
    const handY = H - 128;
    ctx.fillStyle = COLORS.carbon;
    ctx.textAlign = "left";
    const handLabel = misGrammar
      ? "HAND — MIS-GRAMMAR armed: any card forces on, breaking the words"
      : (practice ? "HAND — outlined cards fit the open socket; greyed ones don't (yet)"
                  : "HAND — 12 new words each page; unused ones are discarded. Outlined cards fit the open socket.");
    fitFont(handLabel, W - 56, Math.min(15, fsz(11)), false, 9);
    ctx.fillText(handLabel, 28, handY - 10);

    handRects = [];
    const hcw = 70, hch = 90, hgap = 6;
    const totalW = handCols * (hcw + hgap) - hgap;
    const hx0 = Math.max(10, (W - totalW) / 2);
    // Fixed slots: an empty slot stays empty, so the row never shuffles.
    ctx.save();
    ctx.globalAlpha = 0.22; ctx.strokeStyle = COLORS.faded; ctx.setLineDash([4, 4]); ctx.lineWidth = 1;
    for (let sl = 0; sl < handCols; sl++) {
      if (!hand.some((c) => c.slot === sl)) { roundRect(hx0 + sl * (hcw + hgap), handY, hcw, hch, 4); ctx.stroke(); }
    }
    ctx.restore();
    for (let i = 0; i < hand.length; i++) {
      const c = hand[i];
      const hx = hx0 + c.slot * (hcw + hgap);
      const legal = canAttach(chain, c);
      const playable = legal || (misGrammar && misGrammarUnlocked);
      const dim = !!practice && !practiceAllows(c);
      drawCard(hx, handY, hcw, hch, c, { legal: playable, highlight: legal && !dim, dim, value: true,
        index: touchUI ? null : HAND_KEYS[c.slot] });
      handRects.push({ x: hx, y: handY, w: hcw, h: hch, idx: i });
    }

    ctx.restore(); // end pageShift translate

    // ---- The note (drawn unshifted, pinned to the page edge) ----------
    drawNotePanel();
    if (practice && note.length === 0) {
      ctx.fillStyle = COLORS.faded;
      ctx.font = serif(Math.min(15, fsz(12)), false);
      ctx.textAlign = "left";
      wrapText("Practice: nothing here is recorded.", NOTE_W - 28).forEach((ln, i) => ctx.fillText(ln, NOTE_X + 14, NOTE_Y + 56 + i * 18));
    }

    // ---- Ink stains + droplets + flung letters ------------------------
    drawInkFx();

    drawHelpButton();
    if (practiceModal()) drawPracticeModal();
    else drawTips();

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
    // Help pauses the game: no time passes while the overlay is open.
    const dt = helpOpen ? 0 : Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    if (practice) practice.coachShown += dt * 90;

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
      get practice() { return practice; },
      get helpOpen() { return helpOpen; },
      get introSeen() { return introSeen; },
      get handCols() { return handCols; },
      get runDamage() { return runDamage; },
      startPractice, openHelp, closeHelp, dealHand, practiceCoach, describeCard, whyRefused,
      STATE,
      startRun, castChain, tryPlaceCard, clearChain,
      POOL, ENEMY_ROSTER, chainOf, computeEffect, parseChain, makeCard, defOf, foeName, meaningFromNote,
      setChain(words) { chain = chainOf(words); },
      setEnemy(i) { encIndex = i; enemy = newEnemy(); },
      setNote(lines) { note = lines; },
      canAttach, isCastable, chainPhase,
      forceReveal() { while (bossPending || !noteRevealed) { /* no-op */ break; } },
      finishReveal() { revealAnim = 1; updateReveal(10); },
    };
  }
})();

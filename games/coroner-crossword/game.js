/* ===========================================================================
   CORONER & CROSSWORD
   ---------------------------------------------------------------------------
   Phase 1 (core mechanic): each across/down entry is a case fact. Committing
   LOCKS its letters into every crossing entry's shared cell. A commit that
   disagrees with an already-locked crossing letter BLEEDS RED and is rejected.
   A fully consistent fill SOLVES.

   Phase 2 (style & identity): the grey-box is dressed as a 2 a.m. noir
   detective's desk — coffee-stained graph paper, typewriter type, pinned
   evidence photos drawn in canvas, graphite letters, a red blood-bleed, a
   rubber-stamp verdict, and a Web Audio score (room-tone ambience + pencil
   scratch, eraser squeak, stamp thud).

   Phase 3 (the twist): a consistent first grid resolves a hidden DOWN-RIGHT
   diagonal into a name — an unreported SECOND victim. A distinct reveal moment
   fires, then a harder OVERLAPPING second grid unlocks that reuses the
   answers you already placed, playable with the same commit/collision rules.

   Runs from file:// — no modules, no network, no external assets.
   =========================================================================== */
(function () {
  "use strict";

  var DEBUG = false; // set true for console logging + window.cc inspection

  // ---- Canvas ----------------------------------------------------------------
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var W = canvas.width;   // 900
  var H = canvas.height;  // 640

  function fitCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var maxW = window.innerWidth - 24;
    var maxH = window.innerHeight - 24;
    var aspect = W / H;
    var cssW = maxW, cssH = maxW / aspect;
    if (cssH > maxH) { cssH = maxH; cssW = maxH * aspect; }
    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", fitCanvas);

  // ---- Palette (SCAF-04: noir sepia / graphite / red-bleed, centralized) -----
  var COLORS = {
    bg: "#0c0a07",
    deskDark: "#120d07",
    paper: "#d8ceb4",        // aged graph paper
    paperHi: "#e7dcc2",      // lit edge of paper
    paperShadow: "#b8ad90",
    paperDim: "#c3b99f",
    coffee: "rgba(120, 82, 38, 0.16)",   // coffee ring stain
    coffeeDk: "rgba(90, 58, 24, 0.22)",
    gridLine: "#9c9079",     // faint blue/grey graph rule
    gridLineSoft: "rgba(120,110,88,0.5)",
    block: "#231d14",        // redaction-bar black
    ink: "#5b5346",          // candidate / pencil-light
    graphite: "#2c2620",     // committed graphite
    graphiteHi: "#534b3e",
    bleed: "#b3271b",        // contradiction red
    bleedBright: "#e0392b",
    bleedSoft: "rgba(179,39,27,0.30)",
    select: "#7c4a2a",       // warm pencil-underline select
    selectSoft: "rgba(150,96,40,0.16)",
    cross: "rgba(110,90,60,0.10)",
    muted: "#9a8e74",
    good: "#5d7a4a",         // approving green-ink stamp
    num: "#857a62",
    lamp: "rgba(255,200,120,0.07)",
    pinRed: "#a8362b",
    pinBrass: "#b9963f",
    twist: "#c79a3a",        // golden reveal glow
    twistDeep: "#8a6a1e"
  };

  // ===========================================================================
  //  WEB AUDIO  (STYLE-04 / ONBOARD-02)  — synthesized, lazy, gesture-resumed
  // ===========================================================================
  var audioCtx = null;
  var audioReady = false;
  var masterGain = null;
  var ambienceNode = null;

  function unlockAudio() {
    if (!audioCtx) {
      try {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.9;
        masterGain.connect(audioCtx.destination);
      } catch (e) { return; }
    }
    if (audioCtx.state === "suspended" && audioCtx.resume) {
      audioCtx.resume();
    }
    if (!audioReady) {
      audioReady = true;
      startAmbience();
    }
  }

  // A white-noise buffer reused by scratch/squeak sounds.
  var noiseBuffer = null;
  function getNoise() {
    if (noiseBuffer) return noiseBuffer;
    var len = (audioCtx.sampleRate * 1.2) | 0;
    noiseBuffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
    var d = noiseBuffer.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuffer;
  }

  // Low room-tone hum + a faint flicker, like a desk lamp ballast at 2 a.m.
  function startAmbience() {
    if (!audioCtx || ambienceNode) return;
    var hum = audioCtx.createOscillator();
    hum.type = "sine";
    hum.frequency.value = 56;
    var humG = audioCtx.createGain();
    humG.gain.value = 0.020;

    var hum2 = audioCtx.createOscillator();
    hum2.type = "sine";
    hum2.frequency.value = 112;
    var hum2G = audioCtx.createGain();
    hum2G.gain.value = 0.008;

    // slow LFO that wobbles the hum — the lamp breathing
    var lfo = audioCtx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.13;
    var lfoG = audioCtx.createGain();
    lfoG.gain.value = 0.010;
    lfo.connect(lfoG);
    lfoG.connect(humG.gain);

    // very quiet filtered noise — air in the room
    var air = audioCtx.createBufferSource();
    air.buffer = getNoise();
    air.loop = true;
    var airF = audioCtx.createBiquadFilter();
    airF.type = "lowpass";
    airF.frequency.value = 380;
    var airG = audioCtx.createGain();
    airG.gain.value = 0.012;

    hum.connect(humG); humG.connect(masterGain);
    hum2.connect(hum2G); hum2G.connect(masterGain);
    air.connect(airF); airF.connect(airG); airG.connect(masterGain);

    hum.start(); hum2.start(); lfo.start(); air.start();
    ambienceNode = { hum: hum, hum2: hum2, lfo: lfo, air: air };
  }

  // Pencil scratch: a short burst of band-passed noise with a fast decay.
  function sndScratch() {
    if (!audioReady || !audioCtx) return;
    var t = audioCtx.currentTime;
    var src = audioCtx.createBufferSource();
    src.buffer = getNoise();
    src.loop = true;
    var bp = audioCtx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 1700 + Math.random() * 700;
    bp.Q.value = 0.9;
    var g = audioCtx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.10, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.075);
    src.connect(bp); bp.connect(g); g.connect(masterGain);
    src.start(t); src.stop(t + 0.10);
  }

  // Stamp thud: a low body thump + a tight click, like a rubber stamp landing.
  function sndStamp() {
    if (!audioReady || !audioCtx) return;
    var t = audioCtx.currentTime;
    // body
    var o = audioCtx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(180, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.16);
    var g = audioCtx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.5, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.30);
    o.connect(g); g.connect(masterGain);
    o.start(t); o.stop(t + 0.34);
    // click (paper/ink contact)
    var nb = audioCtx.createBufferSource();
    nb.buffer = getNoise();
    var nf = audioCtx.createBiquadFilter();
    nf.type = "highpass";
    nf.frequency.value = 1200;
    var ng = audioCtx.createGain();
    ng.gain.setValueAtTime(0.35, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    nb.connect(nf); nf.connect(ng); ng.connect(masterGain);
    nb.start(t); nb.stop(t + 0.06);
  }

  // Eraser squeak: friction noise that rises then cuts — drags on the paper.
  function sndSqueak() {
    if (!audioReady || !audioCtx) return;
    var t = audioCtx.currentTime;
    var src = audioCtx.createBufferSource();
    src.buffer = getNoise();
    src.loop = true;
    var bp = audioCtx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.setValueAtTime(900, t);
    bp.frequency.linearRampToValueAtTime(2600, t + 0.16);
    bp.Q.value = 6;
    var g = audioCtx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.13, t + 0.05);
    g.gain.setValueAtTime(0.13, t + 0.12);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.20);
    src.connect(bp); bp.connect(g); g.connect(masterGain);
    src.start(t); src.stop(t + 0.22);
  }

  // Commit click: a soft graphite "tock" — the lead settling into the cell.
  function sndCommit() {
    if (!audioReady || !audioCtx) return;
    var t = audioCtx.currentTime;
    var o = audioCtx.createOscillator();
    o.type = "triangle";
    o.frequency.setValueAtTime(420, t);
    o.frequency.exponentialRampToValueAtTime(160, t + 0.09);
    var g = audioCtx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.18, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
    o.connect(g); g.connect(masterGain);
    o.start(t); o.stop(t + 0.15);
  }

  // Reveal sting: a slow, ominous swell — the second victim surfacing.
  function sndReveal() {
    if (!audioReady || !audioCtx) return;
    var t = audioCtx.currentTime;
    var freqs = [110, 146.83, 174.61]; // minor-ish chord, foreboding
    freqs.forEach(function (f, i) {
      var o = audioCtx.createOscillator();
      o.type = i === 0 ? "sawtooth" : "sine";
      o.frequency.setValueAtTime(f, t);
      o.frequency.linearRampToValueAtTime(f * 1.01, t + 1.6);
      var g = audioCtx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.10, t + 0.7);
      g.gain.linearRampToValueAtTime(0.0001, t + 2.0);
      var lp = audioCtx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.setValueAtTime(300, t);
      lp.frequency.linearRampToValueAtTime(1400, t + 1.4);
      o.connect(lp); lp.connect(g); g.connect(masterGain);
      o.start(t); o.stop(t + 2.1);
    });
    // a heartbeat thud underneath
    [0, 0.5].forEach(function (off) {
      var o = audioCtx.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(64, t + off);
      o.frequency.exponentialRampToValueAtTime(40, t + off + 0.2);
      var g = audioCtx.createGain();
      g.gain.setValueAtTime(0.0001, t + off);
      g.gain.exponentialRampToValueAtTime(0.4, t + off + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + off + 0.35);
      o.connect(g); g.connect(masterGain);
      o.start(t + off); o.stop(t + off + 0.4);
    });
  }

  // ===========================================================================
  //  CASE DATA  (data-driven; a case carries grid + clues + diagonal + grid2)
  // ===========================================================================
  // First grid, 5x5. Blocks at (1,1)(1,3)(3,1)(3,3). Down-right diagonal cells
  // (0,0)(1,1)(2,2)(3,3)(4,4) — but (1,1) and (3,3) are blocked, so the visible
  // diagonal letters come from (0,0)=C, (2,2)=D, (4,4)=E. We arrange the
  // answers so the *open* diagonal cells, read with the two crossing anchors,
  // resolve to a name. With CABIN / RADIO / SCENE and CORPS/BADGE/NOOSE:
  //   diag open cells: (0,0)=C  (2,2)=D  (4,4)=E
  // We surface the hidden victim from the full anti-/main diagonal letters that
  // ARE placeable: C (0,0), D (2,2), E (4,4) -> "C_D_E"; we spell the victim
  // from the main diagonal plus the grid's locked corners. Authored target:
  var CASES = [
    {
      title: "THE BOATHOUSE BODY",
      subtitle: "Case No. 1 — Lake Verra, October",
      difficulty: 1,
      size: 5,
      blocks: [[1, 1], [1, 3], [3, 1], [3, 3]],
      entries: [
        { id: "A1", num: 1, dir: "A", row: 0, col: 0, len: 5, answer: "CABIN",
          clue: "Where the groundskeeper swears he slept all night." },
        { id: "A4", num: 4, dir: "A", row: 2, col: 0, len: 5, answer: "RADIO",
          clue: "What was left blaring to mask the noise." },
        { id: "A7", num: 7, dir: "A", row: 4, col: 0, len: 5, answer: "SCENE",
          clue: "What the first officer photographed at dawn." },
        { id: "D1", num: 1, dir: "D", row: 0, col: 0, len: 5, answer: "CORPS",
          clue: "Diver recovered it from the reeds (abbr. for the body detail)." },
        { id: "D2", num: 2, dir: "D", row: 0, col: 2, len: 5, answer: "BADGE",
          clue: "The detective flashed it to enter the property." },
        { id: "D3", num: 3, dir: "D", row: 0, col: 4, len: 5, answer: "NOOSE",
          clue: "Coroner's verdict ruled out this method of death." }
      ],
      hint: "Commit 1-Down CORPS first, then try 4-Across as ALARM — watch it bleed.",
      evidence: [
        { title: "AUTOPSY", lines: ["Lungs: dry.", "Not a drowning.", "Bruise at nape."], angle: -0.10, pin: "red" },
        { title: "TIDE LOG", lines: ["Boathouse 02:14", "Door unbolted", "from inside."], angle: 0.08, pin: "brass" },
        { title: "WITNESS", lines: ["\"Radio blared", "all night —", "I heard nothing.\""], angle: -0.05, pin: "red" }
      ],
      // THE HIDDEN DIAGONAL (TWIST-01). readOrder lists the locked cells, read
      // top-to-bottom, whose graphite letters spell the unreported victim.
      // Verified against the placed answers above:
      //   (2,2)=D  (0,3)=I  (0,1)=A  (0,4)=N  (2,1)=A   ->  D I A N A
      // The sweep traces the grid's interior diagonal and its mirror cells —
      // the name was hiding across the alibis the whole time.
      diagonal: {
        readOrder: [[2, 2], [0, 3], [0, 1], [0, 4], [2, 1]],
        name: "DIANA",
        label: "DIANA",     // spelled out during the reveal
        flavor: "There was never one body in the reeds. There were two."
      },
      // GRID 2 — the overlapping deeper grid (TWIST-03/04). The SAME six
      // answers, re-cut: the first grid's DOWN facts are now ACROSS and its
      // ACROSS facts are now DOWN. Because grid 1 was consistent, this
      // transposed layout is provably consistent too — the very letters you
      // placed become the evidence for Diana's case. New clues, deeper story.
      grid2: {
        title: "THE SECOND BODY — DIANA",
        size: 5,
        blocks: [[1, 1], [1, 3], [3, 1], [3, 3]],
        entries: [
          { id: "A1", num: 1, dir: "A", row: 0, col: 0, len: 5, answer: "CORPS",
            clue: "Now the FIRST detail: divers found two when they returned." },
          { id: "A4", num: 4, dir: "A", row: 2, col: 0, len: 5, answer: "BADGE",
            clue: "Diana carried one too — she was working the case undercover." },
          { id: "A7", num: 7, dir: "A", row: 4, col: 0, len: 5, answer: "NOOSE",
            clue: "Staged for the first body, to hide how Diana really died." },
          { id: "D1", num: 1, dir: "D", row: 0, col: 0, len: 5, answer: "CABIN",
            clue: "Where Diana hid her notes — found pried open." },
          { id: "D2", num: 2, dir: "D", row: 0, col: 2, len: 5, answer: "RADIO",
            clue: "She used it to call it in. The call never reached dispatch." },
          { id: "D3", num: 3, dir: "D", row: 0, col: 4, len: 5, answer: "SCENE",
            clue: "What the killer rearranged before the first officer arrived." }
        ],
        hint: "The same words, re-cut: yesterday's DOWN clues are now ACROSS.",
        evidence: [
          { title: "BADGE #2", lines: ["Undercover.", "Filed under a", "false name."], angle: -0.08, pin: "brass" },
          { title: "NOTEBOOK", lines: ["Pages torn.", "One word left:", "\"betrayed.\""], angle: 0.07, pin: "red" },
          { title: "DISPATCH", lines: ["No record of", "her call.", "Line was cut."], angle: -0.04, pin: "brass" }
        ]
      }
    },

    // =====================================================================
    // CASE 2 — DOCKSIDE.  Grid: DROWN/CRIME/SCENE x DOCKS/OLIVE/NIECE.
    // No diagonal twist authored — a straight constraint case (CONTENT-02).
    // =====================================================================
    {
      title: "THE DOCKSIDE DROWNING",
      subtitle: "Case No. 2 — Pier 9, after the storm",
      difficulty: 2,
      size: 5,
      blocks: [[1, 1], [1, 3], [3, 1], [3, 3]],
      entries: [
        { id: "A1", num: 1, dir: "A", row: 0, col: 0, len: 5, answer: "DROWN",
          clue: "The cause of death the harbor master wants written down." },
        { id: "A4", num: 4, dir: "A", row: 2, col: 0, len: 5, answer: "CRIME",
          clue: "What the bruised wrists say it really was." },
        { id: "A7", num: 7, dir: "A", row: 4, col: 0, len: 5, answer: "SCENE",
          clue: "Roped off at dawn under the loading crane." },
        { id: "D1", num: 1, dir: "D", row: 0, col: 0, len: 5, answer: "DOCKS",
          clue: "Where the victim was last seen, signing for cargo." },
        { id: "D2", num: 2, dir: "D", row: 0, col: 2, len: 5, answer: "OLIVE",
          clue: "Color of the coat snagged on the ladder rung." },
        { id: "D3", num: 3, dir: "D", row: 0, col: 4, len: 5, answer: "NIECE",
          clue: "The only heir — and the only one without an alibi." }
      ],
      hint: "Lock 1-Down DOCKS, then try 4-Across as DRUGS — the C clashes and bleeds.",
      evidence: [
        { title: "TIDE LOG", lines: ["High water 23:50.", "Body wedged", "under the pier."], angle: -0.09, pin: "brass" },
        { title: "CORONER", lines: ["Salt in lungs —", "but added", "after death."], angle: 0.07, pin: "red" },
        { title: "MANIFEST", lines: ["Last signature", "shaky. Pen", "out of ink."], angle: -0.04, pin: "brass" }
      ]
    },

    // =====================================================================
    // CASE 3 — GASLIGHT.  Grid: CHAIN/OLIVE/KNIFE x CLOAK/ALIBI/NIECE.
    // =====================================================================
    {
      title: "THE GASLIGHT STUDY",
      subtitle: "Case No. 3 — Hollow Manor, midnight",
      difficulty: 3,
      size: 5,
      blocks: [[1, 1], [1, 3], [3, 1], [3, 3]],
      entries: [
        { id: "A1", num: 1, dir: "A", row: 0, col: 0, len: 5, answer: "CHAIN",
          clue: "The door lock the killer somehow slipped." },
        { id: "A4", num: 4, dir: "A", row: 2, col: 0, len: 5, answer: "OLIVE",
          clue: "The branch on the family crest above the body." },
        { id: "A7", num: 7, dir: "A", row: 4, col: 0, len: 5, answer: "KNIFE",
          clue: "Missing from the study's display case." },
        { id: "D1", num: 1, dir: "D", row: 0, col: 0, len: 5, answer: "CLOAK",
          clue: "Left on the hook, still wet, by the back stair." },
        { id: "D2", num: 2, dir: "D", row: 0, col: 2, len: 5, answer: "ALIBI",
          clue: "The widow's — and it does not hold." },
        { id: "D3", num: 3, dir: "D", row: 0, col: 4, len: 5, answer: "NIECE",
          clue: "Inherits the estate the moment the will is read." }
      ],
      hint: "Two heirs, two stories. Commit 1-Down CLOAK and let the crossings prune the lies.",
      evidence: [
        { title: "STUDY", lines: ["Door chained", "from inside.", "Window latched."], angle: 0.08, pin: "red" },
        { title: "WILL", lines: ["Rewritten", "last week.", "Ink still fresh."], angle: -0.07, pin: "brass" },
        { title: "MAID", lines: ["\"Saw a cloak", "on the stair —", "no one wears it.\""], angle: 0.05, pin: "red" }
      ]
    },

    // =====================================================================
    // CASE 4 — INHERITANCE.  Grid: ROBES/PROOF/SIDES x ROPES/BLOOD/SAFES.
    // =====================================================================
    {
      title: "THE NOTARY'S PROOF",
      subtitle: "Case No. 4 — Ashford & Vane, est. 1911",
      difficulty: 4,
      size: 5,
      blocks: [[1, 1], [1, 3], [3, 1], [3, 3]],
      entries: [
        { id: "A1", num: 1, dir: "A", row: 0, col: 0, len: 5, answer: "ROBES",
          clue: "What the judge never got to put on — found slumped at the bench." },
        { id: "A4", num: 4, dir: "A", row: 2, col: 0, len: 5, answer: "PROOF",
          clue: "The one document that survives the fire — and damns someone." },
        { id: "A7", num: 7, dir: "A", row: 4, col: 0, len: 5, answer: "SIDES",
          clue: "There are two; the truth is on neither, exactly." },
        { id: "D1", num: 1, dir: "D", row: 0, col: 0, len: 5, answer: "ROPES",
          clue: "Cut from the office blinds; the cord matches the marks." },
        { id: "D2", num: 2, dir: "D", row: 0, col: 2, len: 5, answer: "BLOOD",
          clue: "On the ledger's edge — type does not match the deceased." },
        { id: "D3", num: 3, dir: "D", row: 0, col: 4, len: 5, answer: "SAFES",
          clue: "Two were drilled; only one had anything worth taking." }
      ],
      hint: "Every fact crosses two others. One wrong theory bleeds at the seam — let it.",
      evidence: [
        { title: "LEDGER", lines: ["A page razored", "out. Edge", "still stained."], angle: -0.06, pin: "red" },
        { title: "FORENSICS", lines: ["Two blood types.", "One isn't", "the judge's."], angle: 0.08, pin: "brass" },
        { title: "VAULT", lines: ["Drilled clean.", "Whoever knew", "had the combo."], angle: -0.05, pin: "red" }
      ]
    },

    // =====================================================================
    // CASE 5 — LAST WILL.  Grid: BASIN/NOOSE/SCENE x BONES/SHORE/NIECE.
    // The hardest straight case — terse clues, no hand-holding.
    // =====================================================================
    {
      title: "WHAT THE TIDE KEPT",
      subtitle: "Case No. 5 — the last file in the drawer",
      difficulty: 5,
      size: 5,
      blocks: [[1, 1], [1, 3], [3, 1], [3, 3]],
      entries: [
        { id: "A1", num: 1, dir: "A", row: 0, col: 0, len: 5, answer: "BASIN",
          clue: "The wash-stand where the rinsed glove was wrung out." },
        { id: "A4", num: 4, dir: "A", row: 2, col: 0, len: 5, answer: "NOOSE",
          clue: "Staged — the knot is wrong-handed for a suicide." },
        { id: "A7", num: 7, dir: "A", row: 4, col: 0, len: 5, answer: "SCENE",
          clue: "What was tidied before anyone arrived." },
        { id: "D1", num: 1, dir: "D", row: 0, col: 0, len: 5, answer: "BONES",
          clue: "Older than this case — found below the floorboards." },
        { id: "D2", num: 2, dir: "D", row: 0, col: 2, len: 5, answer: "SHORE",
          clue: "Where the second set of prints walked away." },
        { id: "D3", num: 3, dir: "D", row: 0, col: 4, len: 5, answer: "NIECE",
          clue: "Came back after twenty years, the week he changed the will." }
      ],
      hint: "No more hints after this one. Trust the crossings; reject what bleeds.",
      evidence: [
        { title: "FLOOR", lines: ["Old bones", "below the", "boards. Why?"], angle: 0.07, pin: "red" },
        { title: "PRINTS", lines: ["Two sets to", "the water.", "One returns."], angle: -0.08, pin: "brass" },
        { title: "WILL", lines: ["Changed twice.", "The niece's", "name, then gone."], angle: 0.05, pin: "red" }
      ]
    }
  ];

  // ---- Runtime state ---------------------------------------------------------
  var STATE = {
    TITLE: "TITLE", SELECT: "SELECT", CASE: "CASE", SOLVED: "SOLVED",
    REVEAL: "REVEAL", GRID2: "GRID2", DONE: "DONE"
  };
  var state = STATE.TITLE;
  var selectIndex = 0;     // highlighted card on the case-select screen
  var selectHits = [];     // clickable rects on the case-select screen

  var caseIndex = 0;
  var theCase = null;
  var activeGrid = null;   // points at theCase (grid1) or theCase.grid2 spec
  var onGrid2 = false;
  var cells = null;
  var entries = null;
  var entryById = null;
  var selectedEntryId = null;
  var cursorIndex = 0;
  var moves = 0;
  var erasures = 0;
  var bleedT = 0;
  var flash = null;
  var anim = 0;            // global animation clock (seconds)

  // Reveal sequencing
  var revealT = 0;         // time spent in REVEAL state
  var revealLetters = 0;   // how many diagonal letters surfaced so far

  // Solve verdict stamp animation
  var stampT = 0;          // 0..1 stamp progress

  // Particles (graphite dust / ink splatter / golden motes)
  var particles = [];

  // Tutorial (first time only)
  var showTut = false;

  // Grid geometry on canvas
  var GRID = { x: 60, y: 122, cell: 78 };

  function setFlash(text, color) { flash = { text: text, color: color || COLORS.muted, t: 3.0 }; }

  function setState(s) {
    state = s;
    if (DEBUG) console.log("[state]", s);
  }

  // ---- Particle system -------------------------------------------------------
  function spawnDust(px, py, n, color, spread, speed) {
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2;
      var sp = (speed || 60) * (0.3 + Math.random());
      particles.push({
        x: px + (Math.random() - 0.5) * (spread || 10),
        y: py + (Math.random() - 0.5) * (spread || 10),
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - 20,
        life: 0.5 + Math.random() * 0.7,
        max: 0.5 + Math.random() * 0.7,
        size: 1 + Math.random() * 2.5,
        color: color || COLORS.graphite,
        grav: 120
      });
    }
  }

  function updateParticles(dt) {
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.life -= dt;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      p.vy += p.grav * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
  }

  function drawParticles() {
    particles.forEach(function (p) {
      var a = Math.max(0, p.life / p.max);
      ctx.globalAlpha = a;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function cellCenter(rc) {
    return {
      x: GRID.x + rc[1] * GRID.cell + GRID.cell / 2,
      y: GRID.y + rc[0] * GRID.cell + GRID.cell / 2
    };
  }

  // ===========================================================================
  //  GRID MODEL  (build from whichever grid spec is active)
  // ===========================================================================
  function buildGrid(spec) {
    var n = spec.size;
    cells = [];
    for (var r = 0; r < n; r++) {
      cells[r] = [];
      for (var c = 0; c < n; c++) {
        cells[r][c] = {
          open: true, block: false, num: 0,
          locked: false, letter: "", cand: "",
          bleed: 0, lockT: 0, entries: []
        };
      }
    }
    spec.blocks.forEach(function (b) {
      var cell = cells[b[0]][b[1]];
      cell.open = false; cell.block = true;
    });

    entries = [];
    entryById = {};
    spec.entries.forEach(function (e) {
      var coords = [];
      for (var i = 0; i < e.len; i++) {
        var rr = e.dir === "A" ? e.row : e.row + i;
        var cc = e.dir === "A" ? e.col + i : e.col;
        coords.push([rr, cc]);
        cells[rr][cc].entries.push(e.id);
      }
      var ent = {
        id: e.id, num: e.num, dir: e.dir, row: e.row, col: e.col,
        len: e.len, answer: e.answer, clue: e.clue, coords: coords
      };
      entries.push(ent);
      entryById[e.id] = ent;
    });
    entries.forEach(function (e) {
      var rc = e.coords[0];
      cells[rc[0]][rc[1]].num = e.num;
    });

    selectedEntryId = entries[0].id;
    cursorIndex = 0;
  }

  function loadCase(idx) {
    caseIndex = idx;
    theCase = CASES[idx];
    onGrid2 = false;
    activeGrid = theCase;
    buildGrid(theCase);
    moves = 0;
    erasures = 0;
    flash = null;
    stampT = 0;
    revealT = 0;
    revealLetters = 0;
    particles = [];
    // tutorial only on the very first ever play
    var p = loadProgress();
    showTut = !p.tutorialSeen;
    setFlash(theCase.hint, COLORS.muted);
  }

  function loadGrid2() {
    onGrid2 = true;
    activeGrid = theCase.grid2;
    buildGrid(theCase.grid2);
    moves = 0;
    erasures = 0;
    stampT = 0;
    particles = [];
    setFlash(theCase.grid2.hint, COLORS.twist);
  }

  function selectedEntry() { return entryById[selectedEntryId]; }

  // ---- Selection -------------------------------------------------------------
  function selectEntry(id, startIndex) {
    if (!entryById[id]) return;
    selectedEntryId = id;
    cursorIndex = startIndex || 0;
  }

  function cycleEntry(dir) {
    var i = entries.indexOf(selectedEntry());
    i = (i + dir + entries.length) % entries.length;
    selectEntry(entries[i].id, 0);
  }

  // ---- Typing ----------------------------------------------------------------
  function typeLetter(ch) {
    var e = selectedEntry();
    if (cursorIndex >= e.len) cursorIndex = e.len - 1;
    var rc = e.coords[cursorIndex];
    var cell = cells[rc[0]][rc[1]];
    cell.cand = ch;
    cell.bleed = 0;
    cursorIndex = Math.min(cursorIndex + 1, e.len);
    sndScratch();
    var cc = cellCenter(rc);
    spawnDust(cc.x, cc.y + 14, 4, COLORS.graphite, 16, 36);
  }

  function backspace() {
    var e = selectedEntry();
    if (cursorIndex > 0) cursorIndex--;
    var rc = e.coords[cursorIndex];
    var cell = cells[rc[0]][rc[1]];
    cell.cand = "";
    sndScratch();
  }

  function entryCandidate(e) {
    var s = "";
    for (var i = 0; i < e.len; i++) {
      var rc = e.coords[i];
      var cell = cells[rc[0]][rc[1]];
      if (cell.cand) s += cell.cand;
      else if (cell.locked) s += cell.letter;
      else s += " ";
    }
    return s;
  }

  // ---- Commit + propagation + collision --------------------------------------
  function commit() {
    var e = selectedEntry();
    var proposed = [];
    var filled = true;
    for (var i = 0; i < e.len; i++) {
      var rc = e.coords[i];
      var cell = cells[rc[0]][rc[1]];
      var ch = cell.cand || (cell.locked ? cell.letter : "");
      if (!ch) filled = false;
      proposed.push(ch);
    }
    if (!filled) {
      setFlash("Entry is incomplete — fill every cell before committing.", COLORS.muted);
      sndSqueak();
      return;
    }

    var conflicts = [];
    for (var j = 0; j < e.len; j++) {
      var c2 = e.coords[j];
      var cl = cells[c2[0]][c2[1]];
      if (cl.locked && cl.letter !== proposed[j]) conflicts.push(c2);
    }

    if (conflicts.length) {
      conflicts.forEach(function (rc) {
        cells[rc[0]][rc[1]].bleed = 1;
        var cc = cellCenter(rc);
        spawnDust(cc.x, cc.y, 14, COLORS.bleedBright, 20, 90);
      });
      bleedT = 0;
      setFlash("CONTRADICTION — that letter clashes with a locked fact. Commit rejected.", COLORS.bleed);
      sndSqueak();
      if (showTut) dismissTut();
      return;
    }

    var newlyLocked = 0;
    for (var k = 0; k < e.len; k++) {
      var c3 = e.coords[k];
      var lc = cells[c3[0]][c3[1]];
      if (!lc.locked) newlyLocked++;
      lc.letter = proposed[k];
      lc.locked = true;
      lc.cand = "";
      lc.bleed = 0;
      lc.lockT = 0.001; // start lock-settle animation
    }
    moves++;
    setFlash("Committed " + e.num + "-" + (e.dir === "A" ? "Across" : "Down") +
             ": " + proposed.join("") + " — letters locked into crossings.", COLORS.good);
    sndCommit();
    // graphite dust along the whole entry
    e.coords.forEach(function (rc) {
      var cc = cellCenter(rc);
      spawnDust(cc.x, cc.y, 5, COLORS.graphite, 22, 50);
    });
    if (showTut) dismissTut();
    checkWin();
  }

  // ---- Erase / revise --------------------------------------------------------
  function eraseEntry() {
    var e = selectedEntry();
    e.coords.forEach(function (rc) {
      var cell = cells[rc[0]][rc[1]];
      cell.cand = "";
      cell.bleed = 0;
      if (cell.locked) {
        var keptByOther = cell.entries.some(function (oid) {
          if (oid === e.id) return false;
          return otherEntryStillClaims(oid, rc);
        });
        if (!keptByOther) {
          cell.locked = false;
          cell.letter = "";
        }
      }
    });
    erasures++;
    setFlash("Erased " + e.num + "-" + (e.dir === "A" ? "Across" : "Down") +
             " — intersection freed, retype a consistent answer.", COLORS.muted);
    sndSqueak();
    var cc = cellCenter(e.coords[0]);
    spawnDust(cc.x, cc.y, 8, COLORS.paperShadow, 24, 50);
    cursorIndex = 0;
  }

  function otherEntryStillClaims(oid, rc) {
    var oe = entryById[oid];
    return oe.coords.every(function (cc) {
      return cells[cc[0]][cc[1]].locked;
    });
  }

  // ---- Win condition ---------------------------------------------------------
  function gridConsistentAndFull() {
    var n = activeGrid.size;
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        var cell = cells[r][c];
        if (!cell.open) continue;
        if (!cell.locked) return false;
        if (cell.bleed) return false;
      }
    }
    return entries.every(function (e) {
      for (var i = 0; i < e.len; i++) {
        var rc = e.coords[i];
        if (cells[rc[0]][rc[1]].letter !== e.answer[i]) return false;
      }
      return true;
    });
  }

  function checkWin() {
    if (!gridConsistentAndFull()) return false;

    if (onGrid2) {
      // Final solve of the deeper grid — the case truly closes.
      setState(STATE.DONE);
      stampT = 0.001;
      sndStamp();
      burstSolveParticles(COLORS.twist);
      saveProgress(true);
      return true;
    }

    // First grid solved: stamp the verdict, then arm the diagonal reveal.
    setState(STATE.SOLVED);
    stampT = 0.001;
    sndStamp();
    burstSolveParticles(COLORS.graphite);
    saveProgress(false);
    return true;
  }

  function burstSolveParticles(color) {
    var cx = GRID.x + activeGrid.size * GRID.cell / 2;
    var cy = GRID.y + activeGrid.size * GRID.cell / 2;
    spawnDust(cx, cy, 60, color, 80, 200);
    spawnDust(cx, cy, 30, COLORS.paperHi, 120, 150);
  }

  // ---- Persistence -----------------------------------------------------------
  var LS_KEY = "coroner-crossword.v1";
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(twistDone) {
    try {
      var p = loadProgress();
      p.solved = p.solved || {};
      p.twist = p.twist || {};
      var id = "case" + caseIndex;
      var prevBest = p.solved[id] != null ? p.solved[id] : Infinity;
      p.solved[id] = Math.min(prevBest, erasures);
      if (twistDone) p.twist[id] = true;
      localStorage.setItem(LS_KEY, JSON.stringify(p));
    } catch (e) { /* ignore */ }
  }
  function markTutorialSeen() {
    try {
      var p = loadProgress();
      p.tutorialSeen = true;
      localStorage.setItem(LS_KEY, JSON.stringify(p));
    } catch (e) { /* ignore */ }
  }
  // A case counts as SOLVED once its main grid has been completed (best erasures
  // recorded). Cases unlock sequentially: case 0 is always open; case N opens
  // once case N-1 is solved. (ONBOARD-03 / CONTENT-03)
  function isCaseSolved(idx) {
    var p = loadProgress();
    return !!(p.solved && p.solved["case" + idx] != null);
  }
  function caseBest(idx) {
    var p = loadProgress();
    return (p.solved && p.solved["case" + idx] != null) ? p.solved["case" + idx] : null;
  }
  function caseTwistDone(idx) {
    var p = loadProgress();
    return !!(p.twist && p.twist["case" + idx]);
  }
  function isCaseUnlocked(idx) {
    if (idx <= 0) return true;
    return isCaseSolved(idx - 1);
  }
  function highestUnlocked() {
    var i = 0;
    while (i + 1 < CASES.length && isCaseSolved(i)) i++;
    return i;
  }
  function allCasesSolved() {
    for (var i = 0; i < CASES.length; i++) if (!isCaseSolved(i)) return false;
    return true;
  }
  function dismissTut() {
    if (!showTut) return;
    showTut = false;
    markTutorialSeen();
  }

  // ---- Hit testing -----------------------------------------------------------
  function cellAtPixel(px, py) {
    var n = activeGrid.size;
    var cx = Math.floor((px - GRID.x) / GRID.cell);
    var cy = Math.floor((py - GRID.y) / GRID.cell);
    if (cx < 0 || cy < 0 || cx >= n || cy >= n) return null;
    return [cy, cx];
  }

  function clickGrid(rc) {
    var cell = cells[rc[0]][rc[1]];
    if (!cell.open || !cell.entries.length) return;
    var cur = selectedEntry();
    if (cur && cell.entries.indexOf(cur.id) >= 0) {
      var idx = cur.coords.findIndex(function (q) { return q[0] === rc[0] && q[1] === rc[1]; });
      cursorIndex = idx >= 0 ? idx : 0;
      return;
    }
    var id = cell.entries[0];
    var e = entryById[id];
    var i2 = e.coords.findIndex(function (q) { return q[0] === rc[0] && q[1] === rc[1]; });
    selectEntry(id, i2 >= 0 ? i2 : 0);
  }

  var clueHits = [];

  // ===========================================================================
  //  RENDER  (Phase 2 — the noir desk)
  // ===========================================================================
  function clear() {
    ctx.fillStyle = COLORS.bg;
    ctx.fillRect(0, 0, W, H);
    drawDeskBackground();
  }

  // Deterministic pseudo-random so the desk texture doesn't shimmer each frame.
  function rand(seed) {
    var x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  }

  // The desk: a dark felt blotter with a warm lamp pool, faint paper fibers.
  function drawDeskBackground() {
    // lamp pool
    var g = ctx.createRadialGradient(W * 0.42, H * 0.40, 60, W * 0.42, H * 0.40, W * 0.75);
    g.addColorStop(0, "rgba(60,46,26,0.55)");
    g.addColorStop(0.5, "rgba(30,23,14,0.30)");
    g.addColorStop(1, "rgba(8,6,4,0.0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    // vignette
    var v = ctx.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, H * 0.85);
    v.addColorStop(0, "rgba(0,0,0,0)");
    v.addColorStop(1, "rgba(0,0,0,0.55)");
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, W, H);
  }

  // Coffee-stained graph paper page beneath the grid.
  function drawPaperSheet(px, py, pw, ph) {
    ctx.save();
    // paper body with a subtle gradient (lit from upper-left)
    var pg = ctx.createLinearGradient(px, py, px + pw, py + ph);
    pg.addColorStop(0, COLORS.paperHi);
    pg.addColorStop(0.5, COLORS.paper);
    pg.addColorStop(1, COLORS.paperShadow);
    ctx.fillStyle = pg;
    ctx.shadowColor = "rgba(0,0,0,0.6)";
    ctx.shadowBlur = 26;
    ctx.shadowOffsetY = 14;
    roundRect(px, py, pw, ph, 4);
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // clip to sheet for stains + graph rule
    ctx.save();
    roundRect(px, py, pw, ph, 4);
    ctx.clip();

    // faint graph ruling
    ctx.strokeStyle = "rgba(120,140,150,0.10)";
    ctx.lineWidth = 1;
    for (var gx = px; gx <= px + pw; gx += 13) {
      ctx.beginPath(); ctx.moveTo(gx, py); ctx.lineTo(gx, py + ph); ctx.stroke();
    }
    for (var gy = py; gy <= py + ph; gy += 13) {
      ctx.beginPath(); ctx.moveTo(px, gy); ctx.lineTo(px + pw, gy); ctx.stroke();
    }

    // coffee rings (deterministic placement)
    drawCoffeeRing(px + pw * 0.78, py + ph * 0.18, 46);
    drawCoffeeRing(px + pw * 0.16, py + ph * 0.86, 34);
    drawCoffeeRing(px + pw * 0.62, py + ph * 0.92, 28);

    // paper fiber speckle
    ctx.fillStyle = "rgba(80,66,40,0.05)";
    for (var i = 0; i < 90; i++) {
      var rx = px + rand(i * 1.3) * pw;
      var ry = py + rand(i * 2.7 + 5) * ph;
      ctx.fillRect(rx, ry, 1.4, 1.4);
    }
    ctx.restore();
    ctx.restore();
  }

  function drawCoffeeRing(cx, cy, r) {
    ctx.save();
    ctx.lineWidth = 5;
    ctx.strokeStyle = COLORS.coffeeDk;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0.2, Math.PI * 1.85);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.strokeStyle = COLORS.coffee;
    ctx.beginPath();
    ctx.arc(cx, cy, r - 3, 0.5, Math.PI * 1.7);
    ctx.stroke();
    ctx.restore();
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
    clear();
    // a single big case-file sheet centered
    drawPaperSheet(W / 2 - 320, 80, 640, 470);

    ctx.fillStyle = COLORS.graphite;
    ctx.textAlign = "center";
    ctx.font = "bold 46px 'Courier New', monospace";
    ctx.fillText("CORONER & CROSSWORD", W / 2, 168);

    // typewriter underline
    ctx.strokeStyle = COLORS.graphiteHi;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(W / 2 - 250, 184); ctx.lineTo(W / 2 + 250, 184); ctx.stroke();

    ctx.font = "16px 'Courier New', monospace";
    ctx.fillStyle = COLORS.ink;
    ctx.fillText("A homicide solved by filling a crossword of alibis.", W / 2, 222);
    ctx.fillText("Every shared letter forces two facts to agree —", W / 2, 248);
    ctx.fillStyle = COLORS.bleed;
    ctx.font = "bold 16px 'Courier New', monospace";
    ctx.fillText("a wrong theory BLEEDS RED at the clash.", W / 2, 276);

    ctx.fillStyle = COLORS.ink;
    ctx.font = "14px 'Courier New', monospace";
    ctx.fillText("Click a clue or cell, TYPE an answer, press ENTER to commit.", W / 2, 332);
    ctx.fillText("Conflicts are rejected and bleed.   DELETE / E erases an entry.", W / 2, 356);

    var p = loadProgress();
    var best = (p.solved && p.solved.case0 != null) ? p.solved.case0 : null;
    var twist = (p.twist && p.twist.case0) ? true : false;
    if (best != null) {
      ctx.fillStyle = COLORS.good;
      ctx.fillText("Best (fewest erasures): " + best + (twist ? "   ✦ TWIST UNCOVERED" : ""), W / 2, 392);
    }

    // rubber-stamp style start button
    drawStampButton(W / 2 - 130, 430, 260, 56, "OPEN THE CASE FILE");
    ctx.fillStyle = COLORS.muted;
    ctx.font = "13px 'Courier New', monospace";
    ctx.fillText("Press ENTER or click to begin", W / 2, 520);
    ctx.textAlign = "left";
  }

  function drawStampButton(x, y, w, h, label) {
    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(-0.02);
    ctx.strokeStyle = COLORS.bleed;
    ctx.lineWidth = 3;
    roundRect(-w / 2, -h / 2, w, h, 6);
    ctx.stroke();
    roundRect(-w / 2 + 5, -h / 2 + 5, w - 10, h - 10, 4);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = COLORS.bleed;
    ctx.font = "bold 20px 'Courier New', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, 0, 1);
    ctx.textBaseline = "alphabetic";
    ctx.restore();
  }

  // ---- Evidence "photos" (STYLE-02) — pinned cards drawn in canvas -----------
  function drawEvidence() {
    var ev = activeGrid.evidence || theCase.evidence;
    if (!ev || !ev.length) return;
    // Pinned in the open margin below the clue list, fanned at jaunty angles.
    var panelX = GRID.x + activeGrid.size * GRID.cell + 56;
    var baseX = panelX + 90;
    var startY = 360;
    ev.forEach(function (card, i) {
      var jx = (i % 2 === 0) ? 0 : 56;
      drawEvidenceCard(baseX + jx, startY + i * 64, card);
    });
  }

  function drawEvidenceCard(cx, cy, card) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(card.angle || 0);
    var w = 150, h = 84;
    // card shadow + body
    ctx.shadowColor = "rgba(0,0,0,0.55)";
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 6;
    ctx.fillStyle = "#efe7d2";
    roundRect(-w / 2, -h / 2, w, h, 3);
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;

    // a "photo" frame on the left — a grey-toned smudge standing in for an image
    var pw = 50, ph = 50, pxp = -w / 2 + 10, pyp = -ph / 2;
    var pg = ctx.createLinearGradient(pxp, pyp, pxp + pw, pyp + ph);
    pg.addColorStop(0, "#5a5346");
    pg.addColorStop(1, "#2a2620");
    ctx.fillStyle = pg;
    ctx.fillRect(pxp, pyp, pw, ph);
    ctx.strokeStyle = "rgba(0,0,0,0.4)";
    ctx.lineWidth = 1;
    ctx.strokeRect(pxp, pyp, pw, ph);
    // a faint scratch on the photo
    ctx.strokeStyle = "rgba(220,210,190,0.18)";
    ctx.beginPath(); ctx.moveTo(pxp + 6, pyp + 40); ctx.lineTo(pxp + 44, pyp + 8); ctx.stroke();

    // header label
    ctx.fillStyle = COLORS.bleed;
    ctx.font = "bold 11px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.fillText(card.title, pxp + pw + 8, pyp + 4);
    // typed lines
    ctx.fillStyle = COLORS.graphite;
    ctx.font = "10px 'Courier New', monospace";
    (card.lines || []).forEach(function (ln, i) {
      ctx.fillText(ln, pxp + pw + 8, pyp + 20 + i * 13);
    });

    // pin
    var pinColor = card.pin === "brass" ? COLORS.pinBrass : COLORS.pinRed;
    ctx.beginPath();
    ctx.arc(-w / 2 + 12, -h / 2 + 10, 6, 0, Math.PI * 2);
    var pgr = ctx.createRadialGradient(-w / 2 + 10, -h / 2 + 8, 1, -w / 2 + 12, -h / 2 + 10, 7);
    pgr.addColorStop(0, "#fff");
    pgr.addColorStop(0.4, pinColor);
    pgr.addColorStop(1, "rgba(0,0,0,0.6)");
    ctx.fillStyle = pgr;
    ctx.fill();
    ctx.restore();
  }

  // ---- The grid (graph paper, graphite, bleed) -------------------------------
  function drawGrid() {
    var n = activeGrid.size;
    var e = selectedEntry();
    var selSet = {};
    if (e) e.coords.forEach(function (rc) { selSet[rc[0] + "," + rc[1]] = true; });

    // paper sheet under grid
    var pad = 18;
    drawPaperSheet(GRID.x - pad, GRID.y - pad, n * GRID.cell + pad * 2, n * GRID.cell + pad * 2);

    // diagonal highlight state (during/after reveal on grid1)
    var diagSet = {};
    if (!onGrid2 && theCase.diagonal && (state === STATE.SOLVED || state === STATE.REVEAL)) {
      theCase.diagonal.readOrder.forEach(function (rc, i) {
        if (i < revealLetters || state === STATE.SOLVED) diagSet[rc[0] + "," + rc[1]] = true;
      });
    }

    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        var cell = cells[r][c];
        var x = GRID.x + c * GRID.cell;
        var y = GRID.y + r * GRID.cell;

        if (cell.block) {
          // redaction bar
          ctx.fillStyle = COLORS.block;
          roundRect(x + 2, y + 2, GRID.cell - 4, GRID.cell - 4, 2);
          ctx.fill();
          // a couple of redaction strikethroughs
          ctx.strokeStyle = "rgba(0,0,0,0.5)";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(x + 8, y + GRID.cell * 0.4); ctx.lineTo(x + GRID.cell - 8, y + GRID.cell * 0.4); ctx.stroke();
          continue;
        }

        // open cell — slightly translucent so graph paper reads through
        ctx.fillStyle = "rgba(247,240,222,0.55)";
        ctx.fillRect(x, y, GRID.cell, GRID.cell);

        if (cell.entries.length > 1) {
          ctx.fillStyle = COLORS.cross;
          ctx.fillRect(x, y, GRID.cell, GRID.cell);
        }
        if (selSet[r + "," + c]) {
          ctx.fillStyle = COLORS.selectSoft;
          ctx.fillRect(x, y, GRID.cell, GRID.cell);
        }
        // diagonal golden glow
        if (diagSet[r + "," + c]) {
          var dp = 0.18 + 0.12 * Math.sin(anim * 3 + (r + c));
          ctx.fillStyle = "rgba(199,154,58," + dp.toFixed(3) + ")";
          ctx.fillRect(x, y, GRID.cell, GRID.cell);
        }
        // bleed background (animated)
        if (cell.bleed > 0) {
          var pulse = 0.30 + 0.30 * Math.abs(Math.sin(bleedT * 5));
          // expanding stain
          var grd = ctx.createRadialGradient(
            x + GRID.cell / 2, y + GRID.cell / 2, 4,
            x + GRID.cell / 2, y + GRID.cell / 2, GRID.cell * 0.7);
          grd.addColorStop(0, "rgba(179,39,27," + (0.55 + pulse * 0.4).toFixed(3) + ")");
          grd.addColorStop(0.7, "rgba(179,39,27," + (0.25 + pulse * 0.25).toFixed(3) + ")");
          grd.addColorStop(1, "rgba(179,39,27,0.0)");
          ctx.fillStyle = grd;
          ctx.fillRect(x - 6, y - 6, GRID.cell + 12, GRID.cell + 12);
        }

        // cell border
        ctx.strokeStyle = COLORS.gridLineSoft;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 1, y + 1, GRID.cell - 2, GRID.cell - 2);

        if (cell.num) {
          ctx.fillStyle = COLORS.num;
          ctx.font = "11px 'Courier New', monospace";
          ctx.textAlign = "left";
          ctx.fillText(String(cell.num), x + 5, y + 15);
        }

        var glyph = cell.locked ? cell.letter : cell.cand;
        if (glyph) {
          // lock-settle pop
          var scale = 1;
          if (cell.lockT > 0 && cell.lockT < 0.3) {
            scale = 1 + (0.3 - cell.lockT) / 0.3 * 0.28;
          }
          ctx.save();
          ctx.translate(x + GRID.cell / 2, y + GRID.cell / 2 + 3);
          ctx.scale(scale, scale);
          if (cell.bleed > 0) {
            ctx.fillStyle = COLORS.bleed;
            ctx.font = "bold 40px 'Courier New', monospace";
          } else if (diagSet[r + "," + c]) {
            ctx.fillStyle = COLORS.twistDeep;
            ctx.font = "bold 42px 'Courier New', monospace";
          } else if (cell.locked) {
            ctx.fillStyle = COLORS.graphite;
            ctx.font = "bold 40px 'Courier New', monospace";
          } else {
            ctx.fillStyle = COLORS.ink;   // candidate = lighter pencil
            ctx.font = "38px 'Courier New', monospace";
          }
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(glyph, 0, 0);
          // graphite "tooth" — a faint second pass offset, so it reads as pencil
          if (cell.locked && cell.bleed === 0 && !diagSet[r + "," + c]) {
            ctx.fillStyle = "rgba(83,75,62,0.5)";
            ctx.fillText(glyph, 0.6, 0.4);
          }
          ctx.restore();
          ctx.textBaseline = "alphabetic";
        }
      }
    }

    // cursor caret
    if ((state === STATE.CASE || state === STATE.GRID2) && e && cursorIndex < e.len) {
      var crc = e.coords[cursorIndex];
      var cxp = GRID.x + crc[1] * GRID.cell;
      var cyp = GRID.y + crc[0] * GRID.cell;
      var blink = 0.5 + 0.5 * Math.sin(anim * 6);
      ctx.strokeStyle = "rgba(124,74,42," + (0.4 + blink * 0.5).toFixed(3) + ")";
      ctx.lineWidth = 3;
      ctx.strokeRect(cxp + 3, cyp + 3, GRID.cell - 6, GRID.cell - 6);
    }
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
  }

  function drawCluePanel() {
    var px = GRID.x + activeGrid.size * GRID.cell + 56;
    var py = 96;
    clueHits = [];

    // header
    ctx.fillStyle = COLORS.paperHi;
    ctx.font = "bold 19px 'Courier New', monospace";
    ctx.textAlign = "left";
    var titleText = (onGrid2 ? "DEEPER FILE: " : "CASE FILE: ") + activeGrid.title;
    ctx.fillText(titleText, GRID.x, 44);

    ctx.fillStyle = COLORS.muted;
    ctx.font = "13px 'Courier New', monospace";
    ctx.fillText("Moves: " + moves + "    Erasures: " + erasures, GRID.x, 70);

    var groups = [
      { label: "ACROSS", dir: "A" },
      { label: "DOWN", dir: "D" }
    ];
    var y = py;
    var lineH = 19;
    groups.forEach(function (g) {
      ctx.fillStyle = COLORS.paperDim;
      ctx.font = "bold 14px 'Courier New', monospace";
      ctx.fillText(g.label, px, y);
      y += 22;
      entries.filter(function (e) { return e.dir === g.dir; }).forEach(function (e) {
        var sel = e.id === selectedEntryId;
        var committed = e.coords.every(function (rc) { return cells[rc[0]][rc[1]].locked; });
        var cand = entryCandidate(e).replace(/ /g, "_");

        if (sel) {
          ctx.fillStyle = COLORS.selectSoft;
          roundRect(px - 8, y - 14, 360, lineH * 2 + 6, 3);
          ctx.fill();
          // pencil underline accent
          ctx.strokeStyle = COLORS.select;
          ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(px - 8, y + lineH * 2 - 9); ctx.lineTo(px + 352, y + lineH * 2 - 9); ctx.stroke();
        }
        ctx.fillStyle = committed ? COLORS.good : (sel ? COLORS.paperHi : COLORS.paperDim);
        ctx.font = (sel ? "bold " : "") + "13px 'Courier New', monospace";
        var head = e.num + g.dir + "  [" + cand + "]" + (committed ? "  ✓" : "");
        ctx.fillText(head, px, y);
        ctx.fillStyle = sel ? COLORS.paperDim : COLORS.muted;
        ctx.font = "12px 'Courier New', monospace";
        var wrapped = wrapText(e.clue, 44);
        ctx.fillText(wrapped[0] || "", px, y + lineH);
        clueHits.push({ id: e.id, x: px - 8, y: y - 14, w: 360, h: lineH * 2 + 6 });
        y += lineH * 2 + 9;
      });
      y += 6;
    });

    // controls help
    ctx.fillStyle = COLORS.muted;
    ctx.font = "12px 'Courier New', monospace";
    ctx.fillText("ENTER commit  •  E / DEL erase  •  TAB next clue  •  R restart", GRID.x, H - 22);

    if (flash) {
      ctx.fillStyle = flash.color;
      ctx.font = "13px 'Courier New', monospace";
      ctx.fillText(flash.text, GRID.x, H - 44);
    }
  }

  function wrapText(text, max) {
    var words = text.split(" ");
    var lines = [];
    var line = "";
    words.forEach(function (w) {
      if ((line + " " + w).trim().length > max) { lines.push(line.trim()); line = w; }
      else line += " " + w;
    });
    if (line.trim()) lines.push(line.trim());
    return lines;
  }

  function drawCase() {
    clear();
    drawGrid();
    drawCluePanel();
    drawEvidence();
    drawParticles();
    if (showTut) drawTutorial();
  }

  // ---- Tutorial overlay (ONBOARD-01) -----------------------------------------
  function drawTutorial() {
    var bx = GRID.x - 18, by = GRID.y + activeGrid.size * GRID.cell + 30;
    var bw = activeGrid.size * GRID.cell + 36, bh = 70;
    if (by + bh > H - 8) { by = H - bh - 8; }
    ctx.save();
    ctx.fillStyle = "rgba(20,15,9,0.92)";
    roundRect(bx, by, bw, bh, 6);
    ctx.fill();
    ctx.strokeStyle = COLORS.twist;
    ctx.lineWidth = 1.5;
    roundRect(bx, by, bw, bh, 6);
    ctx.stroke();
    ctx.fillStyle = COLORS.twist;
    ctx.font = "bold 12px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.fillText("HOW TO READ THE GRID", bx + 14, by + 20);
    ctx.fillStyle = COLORS.paper;
    ctx.font = "11px 'Courier New', monospace";
    ctx.fillText("Type a clue's answer, then ENTER to COMMIT — its letters lock into", bx + 14, by + 38);
    ctx.fillText("crossings. A clashing letter BLEEDS RED and is rejected.", bx + 14, by + 53);
    ctx.restore();
  }

  // ---- SOLVED verdict stamp (STYLE-05) ---------------------------------------
  function drawStamp(label, color, prog) {
    // prog 0..1 : starts big + faint above, slams down to size, with overshoot
    var t = Math.min(prog, 1);
    var ease = t < 0.6 ? (t / 0.6) : 1;
    var scale = 2.4 - 1.4 * ease;
    if (t > 0.6) {
      var b = (t - 0.6) / 0.4;
      scale = 1 + 0.08 * Math.sin(b * Math.PI); // small settle bounce
    }
    var alpha = Math.min(1, t * 2.5);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(W / 2, H / 2 - 20);
    ctx.rotate(-0.10);
    ctx.scale(scale, scale);
    // double-ruled stamp box
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.strokeRect(-230, -64, 460, 128);
    ctx.lineWidth = 2;
    ctx.strokeRect(-218, -52, 436, 104);
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 60px 'Courier New', monospace";
    ctx.fillText(label, 0, 2);
    ctx.restore();
    ctx.globalAlpha = 1;
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
  }

  function drawSolved() {
    drawGridScene();
    // darken
    ctx.fillStyle = "rgba(12,10,7,0.55)";
    ctx.fillRect(0, 0, W, H);
    drawStamp("CASE SOLVED", COLORS.bleed, stampT);

    if (stampT >= 1) {
      ctx.fillStyle = COLORS.paper;
      ctx.textAlign = "center";
      ctx.font = "17px 'Courier New', monospace";
      ctx.fillText("Every alibi holds. The grid is consistent.", W / 2, H / 2 + 78);
      ctx.fillStyle = COLORS.muted;
      ctx.font = "14px 'Courier New', monospace";
      ctx.fillText("Solved in " + moves + " commits with " + erasures + " erasures.", W / 2, H / 2 + 106);
      // the diagonal hint, pulsing — there is more here
      var pl = 0.5 + 0.5 * Math.sin(anim * 3);
      ctx.fillStyle = "rgba(199,154,58," + (0.5 + pl * 0.5).toFixed(3) + ")";
      ctx.font = "bold 15px 'Courier New', monospace";
      ctx.fillText("...the diagonal is glowing. Press ENTER.", W / 2, H / 2 + 146);
      ctx.textAlign = "left";
    }
  }

  // ---- THE TWIST reveal (TWIST-01 / TWIST-02) --------------------------------
  function drawReveal() {
    drawGridScene();
    // deep darken to spotlight the diagonal
    ctx.fillStyle = "rgba(8,6,4,0.74)";
    ctx.fillRect(0, 0, W, H);

    // redraw just the grid sheet + diagonal letters lit, on top of the dark
    drawDiagonalSpotlight();

    var dg = theCase.diagonal;
    var shown = dg.label.slice(0, Math.max(0, Math.min(dg.label.length,
      Math.floor((revealT - 0.6) * 6))));

    ctx.textAlign = "center";
    ctx.fillStyle = COLORS.twist;
    ctx.font = "15px 'Courier New', monospace";
    if (revealT > 0.2) ctx.fillText("THE DIAGONAL RESOLVES...", W / 2, 96);

    if (revealT > 0.6) {
      ctx.fillStyle = COLORS.bleed;
      ctx.font = "13px 'Courier New', monospace";
      ctx.fillText("AN UNREPORTED SECOND VICTIM", W / 2, H - 156);

      // big spelled name
      var glow = 12 + 8 * Math.sin(anim * 4);
      ctx.save();
      ctx.shadowColor = COLORS.twist;
      ctx.shadowBlur = glow;
      ctx.fillStyle = COLORS.twist;
      ctx.font = "bold 56px 'Courier New', monospace";
      ctx.fillText(shown + (shown.length < dg.label.length ? "_" : ""), W / 2, H - 110);
      ctx.restore();
    }

    if (revealT > 2.4) {
      ctx.fillStyle = COLORS.paper;
      ctx.font = "14px 'Courier New', monospace";
      ctx.fillText(dg.flavor, W / 2, H - 68);
      var pl = 0.5 + 0.5 * Math.sin(anim * 3);
      ctx.fillStyle = "rgba(199,154,58," + (0.5 + pl * 0.5).toFixed(3) + ")";
      ctx.font = "bold 14px 'Courier New', monospace";
      ctx.fillText("Press ENTER to re-open the case as the deeper grid.", W / 2, H - 42);
    }
    ctx.textAlign = "left";
  }

  // Draw the grid sheet again, but only the diagonal letters glow — used in
  // the spotlighted reveal.
  function drawDiagonalSpotlight() {
    var n = activeGrid.size;
    var pad = 18;
    // dim paper sheet
    ctx.save();
    ctx.globalAlpha = 0.35;
    drawPaperSheet(GRID.x - pad, GRID.y - pad, n * GRID.cell + pad * 2, n * GRID.cell + pad * 2);
    ctx.restore();

    var dg = theCase.diagonal;
    var litCount = Math.floor(revealT * 4) + 1;
    dg.readOrder.forEach(function (rc, i) {
      var x = GRID.x + rc[1] * GRID.cell;
      var y = GRID.y + rc[0] * GRID.cell;
      var lit = i < litCount;
      var a = lit ? 1 : 0.12;
      // glowing cell
      if (lit) {
        var gr = ctx.createRadialGradient(x + GRID.cell / 2, y + GRID.cell / 2, 4,
          x + GRID.cell / 2, y + GRID.cell / 2, GRID.cell * 0.8);
        gr.addColorStop(0, "rgba(199,154,58,0.6)");
        gr.addColorStop(1, "rgba(199,154,58,0.0)");
        ctx.fillStyle = gr;
        ctx.fillRect(x - 8, y - 8, GRID.cell + 16, GRID.cell + 16);
      }
      ctx.globalAlpha = a;
      ctx.fillStyle = lit ? COLORS.twist : COLORS.muted;
      ctx.strokeStyle = "rgba(199,154,58,0.5)";
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 2, y + 2, GRID.cell - 4, GRID.cell - 4);
      var cell = cells[rc[0]][rc[1]];
      ctx.font = "bold 44px 'Courier New', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(cell.letter || dg.name[i] || "?", x + GRID.cell / 2, y + GRID.cell / 2 + 2);
      ctx.globalAlpha = 1;
      // golden mote
      if (lit && Math.random() < 0.25) {
        spawnDust(x + GRID.cell / 2, y + GRID.cell / 2, 1, COLORS.twist, 30, 30);
      }
    });
    drawParticles();
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "left";
  }

  // Used by SOLVED + REVEAL backgrounds — draws the static grid scene.
  function drawGridScene() {
    clear();
    drawGrid();
    drawCluePanel();
    drawEvidence();
    drawParticles();
  }

  function drawDone() {
    drawGridScene();
    ctx.fillStyle = "rgba(12,10,7,0.6)";
    ctx.fillRect(0, 0, W, H);
    drawStamp("CASE CLOSED", COLORS.twist, stampT);
    if (stampT >= 1) {
      ctx.fillStyle = COLORS.paper;
      ctx.textAlign = "center";
      ctx.font = "16px 'Courier New', monospace";
      ctx.fillText("Both bodies accounted for. The deeper grid holds.", W / 2, H / 2 + 78);
      ctx.fillStyle = COLORS.muted;
      ctx.font = "14px 'Courier New', monospace";
      ctx.fillText("The same alibis, re-cut, told the whole crime.", W / 2, H / 2 + 104);
      ctx.fillStyle = COLORS.paperDim;
      ctx.fillText("Press ENTER or R to reopen the case.", W / 2, H / 2 + 142);
      ctx.textAlign = "left";
    }
  }

  function drawGrid2() {
    drawCase(); // same scene, activeGrid is now grid2
  }

  // ===========================================================================
  //  MAIN LOOP
  // ===========================================================================
  var lastT = 0;
  function frame(t) {
    var dt = Math.min((t - lastT) / 1000 || 0, 0.05);
    lastT = t;
    anim += dt;
    bleedT += dt;
    if (flash && flash.t > 0) flash.t -= dt;
    updateParticles(dt);

    // advance lock-settle timers
    if (cells) {
      for (var r = 0; r < cells.length; r++)
        for (var c = 0; c < cells[r].length; c++)
          if (cells[r][c].lockT > 0) {
            cells[r][c].lockT += dt;
            if (cells[r][c].lockT > 0.35) cells[r][c].lockT = 0;
          }
    }

    if (state === STATE.SOLVED || state === STATE.DONE) {
      if (stampT > 0 && stampT < 1) stampT = Math.min(1, stampT + dt * 1.6);
    }
    if (state === STATE.REVEAL) {
      revealT += dt;
      revealLetters = Math.min(theCase.diagonal.readOrder.length, Math.floor(revealT * 4) + 1);
    }

    if (state === STATE.TITLE) drawTitle();
    else if (state === STATE.CASE) drawCase();
    else if (state === STATE.SOLVED) drawSolved();
    else if (state === STATE.REVEAL) drawReveal();
    else if (state === STATE.GRID2) drawGrid2();
    else if (state === STATE.DONE) drawDone();

    requestAnimationFrame(frame);
  }

  // ===========================================================================
  //  INPUT
  // ===========================================================================
  function startCase() {
    loadCase(caseIndex);
    setState(STATE.CASE);
  }

  function enterReveal() {
    setState(STATE.REVEAL);
    revealT = 0;
    revealLetters = 0;
    sndReveal();
  }

  function startGrid2() {
    loadGrid2();
    setState(STATE.GRID2);
  }

  function canvasToGame(ev) {
    var rect = canvas.getBoundingClientRect();
    var sx = W / rect.width;
    var sy = H / rect.height;
    return { x: (ev.clientX - rect.left) * sx, y: (ev.clientY - rect.top) * sy };
  }

  canvas.addEventListener("pointerdown", function (ev) {
    unlockAudio();
    var p = canvasToGame(ev);

    if (state === STATE.TITLE) { startCase(); return; }
    if (state === STATE.SOLVED) {
      if (stampT >= 1) enterReveal();
      return;
    }
    if (state === STATE.REVEAL) {
      if (revealT > 2.4) startGrid2();
      return;
    }
    if (state === STATE.DONE) { startCase(); return; }

    // CASE or GRID2: clue list?
    if (showTut) dismissTut();
    for (var i = 0; i < clueHits.length; i++) {
      var h = clueHits[i];
      if (p.x >= h.x && p.x <= h.x + h.w && p.y >= h.y && p.y <= h.y + h.h) {
        selectEntry(h.id, 0);
        return;
      }
    }
    var rc = cellAtPixel(p.x, p.y);
    if (rc) clickGrid(rc);
  });

  window.addEventListener("keydown", function (ev) {
    unlockAudio();
    var k = ev.key;

    if (state === STATE.TITLE) {
      if (k === "Enter" || k === " ") { ev.preventDefault(); startCase(); }
      return;
    }
    if (state === STATE.SOLVED) {
      if ((k === "Enter" || k === " ") && stampT >= 1) { ev.preventDefault(); enterReveal(); }
      return;
    }
    if (state === STATE.REVEAL) {
      if ((k === "Enter" || k === " ") && revealT > 2.4) { ev.preventDefault(); startGrid2(); }
      return;
    }
    if (state === STATE.DONE) {
      if (k === "Enter" || k === "r" || k === "R" || k === " ") { ev.preventDefault(); startCase(); }
      return;
    }

    // CASE or GRID2 (active play)
    if (k === "Enter") { ev.preventDefault(); commit(); return; }
    if (k === "Backspace") { ev.preventDefault(); backspace(); return; }
    if (k === "Delete" || k === "e" || k === "E") { ev.preventDefault(); eraseEntry(); return; }
    if (k === "Tab") { ev.preventDefault(); cycleEntry(ev.shiftKey ? -1 : 1); return; }
    if (k === "r" || k === "R") { ev.preventDefault(); startCase(); return; }
    if (k === "ArrowRight") { ev.preventDefault(); cursorIndex = Math.min(cursorIndex + 1, selectedEntry().len - 1); return; }
    if (k === "ArrowLeft") { ev.preventDefault(); cursorIndex = Math.max(cursorIndex - 1, 0); return; }

    if (/^[a-zA-Z]$/.test(k)) {
      ev.preventDefault();
      if (showTut) dismissTut();
      typeLetter(k.toUpperCase());
    }
  });

  // ---- DEBUG harness ---------------------------------------------------------
  if (DEBUG) {
    window.cc = {
      get state() { return state; },
      get cells() { return cells; },
      get entries() { return entries; },
      get selected() { return selectedEntryId; },
      get onGrid2() { return onGrid2; },
      select: selectEntry,
      type: function (s) { s.split("").forEach(function (ch) { typeLetter(ch.toUpperCase()); }); },
      commit: commit,
      erase: eraseEntry,
      start: startCase,
      reveal: enterReveal,
      grid2: startGrid2
    };
    console.log("DEBUG on. Use window.cc to drive the mechanic.");
  }

  // ---- Boot ------------------------------------------------------------------
  fitCanvas();
  loadCase(0);
  setState(STATE.TITLE);
  requestAnimationFrame(frame);
})();

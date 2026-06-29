/* ===========================================================================
   CORONER & CROSSWORD  —  Phase 1: Core Mechanic Prototype
   ---------------------------------------------------------------------------
   Prove the constraint-crossword: each across/down entry is a case fact.
   Committing an entry LOCKS its letters and propagates them into every
   crossing entry's shared cell. A commit that disagrees with an already-locked
   crossing letter BLEEDS RED at the clash and is rejected — a wrong theory is
   geometrically blocked, not silently accepted. A fully consistent fill SOLVES.

   Grey-box only. Noir styling / audio / the diagonal twist are later phases.
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

  // Scale the canvas backing store for crisp rendering, keep CSS aspect.
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

  // ---- Palette (grey-box + a hint of noir sepia) -----------------------------
  var COLORS = {
    bg: "#0c0a07",
    paper: "#d9cfb8",
    paperDim: "#c3b99f",
    gridLine: "#7a705c",
    block: "#2b271f",
    ink: "#2a2622",       // candidate / pencil text
    locked: "#3a352c",    // committed graphite
    bleed: "#c0392b",     // contradiction red
    bleedSoft: "rgba(192,57,43,0.28)",
    select: "#3b6ea5",
    selectSoft: "rgba(59,110,165,0.22)",
    cross: "rgba(59,110,165,0.10)",
    muted: "#8a7f68",
    good: "#3e7d4f",
    num: "#6b6careq"
  };
  COLORS.num = "#6b6450";

  // ---- Audio unlock stub (file://-safe; no sounds yet this phase) -------------
  var audioCtx = null;
  var audioReady = false;
  function unlockAudio() {
    if (audioReady) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) {
        audioCtx = new AC();
        if (audioCtx.state === "suspended" && audioCtx.resume) audioCtx.resume();
      }
      audioReady = true;
    } catch (e) { /* file:// safe: ignore */ }
  }

  // ---- Case data (data-driven; adding a case = new object) --------------------
  // 5x5. Blocks at (1,1)(1,3)(3,1)(3,3). Three across + three down, all len 5.
  //   CABIN
  //   O.A.O
  //   RADIO
  //   P.G.S
  //   SCENE
  var CASES = [
    {
      title: "THE BOATHOUSE BODY",
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
      // Tutorial hint for the deliberate conflict (1-Down locks the R that
      // blocks a tempting wrong 4-Across like "ALARM").
      hint: "Tip: commit 1-Down CORPS first, then try 4-Across as ALARM — watch it bleed."
    }
  ];

  // ---- Runtime state ---------------------------------------------------------
  var STATE = { TITLE: "TITLE", CASE: "CASE", SOLVED: "SOLVED" };
  var state = STATE.TITLE;

  var caseIndex = 0;
  var theCase = null;     // active case object
  var cells = null;       // cells[r][c]
  var entries = null;     // active entry objects (with .coords)
  var entryById = null;
  var selectedEntryId = null;
  var cursorIndex = 0;
  var moves = 0;          // commits
  var erasures = 0;
  var bleedT = 0;         // animation clock for bleed pulse
  var flash = null;       // transient status line {text,color,t}

  // Grid geometry on canvas (left panel = grid, right panel = clues)
  var GRID = { x: 60, y: 110, cell: 78 };

  function setFlash(text, color) { flash = { text: text, color: color || COLORS.muted, t: 2.2 }; }

  function setState(s) {
    state = s;
    if (DEBUG) console.log("[state]", s);
  }

  // ---- Build the grid model + intersection map -------------------------------
  function loadCase(idx) {
    caseIndex = idx;
    theCase = CASES[idx];
    var n = theCase.size;

    // init cells
    cells = [];
    for (var r = 0; r < n; r++) {
      cells[r] = [];
      for (var c = 0; c < n; c++) {
        cells[r][c] = {
          open: true, block: false, num: 0,
          locked: false, letter: "", cand: "",
          bleed: 0, entries: []
        };
      }
    }
    // blocks
    theCase.blocks.forEach(function (b) {
      var cell = cells[b[0]][b[1]];
      cell.open = false; cell.block = true;
    });

    // entries: compute coordinate list, attach cell.entries membership
    entries = [];
    entryById = {};
    theCase.entries.forEach(function (e) {
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

    // entry numbers shown in the corner of starting cells
    entries.forEach(function (e) {
      var rc = e.coords[0];
      cells[rc[0]][rc[1]].num = e.num;
    });

    selectedEntryId = entries[0].id;
    cursorIndex = 0;
    moves = 0;
    erasures = 0;
    flash = null;
    setFlash(theCase.hint, COLORS.muted);
  }

  function selectedEntry() { return entryById[selectedEntryId]; }

  // ---- Selection -------------------------------------------------------------
  function selectEntry(id, startIndex) {
    if (!entryById[id]) return;
    selectedEntryId = id;
    cursorIndex = startIndex || 0;
  }

  // Cycle through entries with Tab.
  function cycleEntry(dir) {
    var i = entries.indexOf(selectedEntry());
    i = (i + dir + entries.length) % entries.length;
    selectEntry(entries[i].id, 0);
  }

  // ---- Input: typing into the candidate buffer (pre-commit) ------------------
  function typeLetter(ch) {
    var e = selectedEntry();
    if (cursorIndex >= e.len) cursorIndex = e.len - 1;
    var rc = e.coords[cursorIndex];
    var cell = cells[rc[0]][rc[1]];
    cell.cand = ch;
    cell.bleed = 0;
    // advance to next non-locked cell within entry, else next cell
    cursorIndex = Math.min(cursorIndex + 1, e.len);
  }

  function backspace() {
    var e = selectedEntry();
    if (cursorIndex > 0) cursorIndex--;
    var rc = e.coords[cursorIndex];
    var cell = cells[rc[0]][rc[1]];
    cell.cand = "";
  }

  // The candidate string of the selected entry = locked letters fall back,
  // else cand, else blank.
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

  // ---- Commit + propagation + collision detection ----------------------------
  function commit() {
    var e = selectedEntry();
    // build the proposed letters for this entry from cand (fallback to locked)
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
      return;
    }

    // collision pass: any cell already locked to a DIFFERENT letter?
    var conflicts = [];
    for (var j = 0; j < e.len; j++) {
      var c2 = e.coords[j];
      var cl = cells[c2[0]][c2[1]];
      if (cl.locked && cl.letter !== proposed[j]) {
        conflicts.push(c2);
      }
    }

    if (conflicts.length) {
      // reject the commit; bleed the clashing cells
      conflicts.forEach(function (rc) { cells[rc[0]][rc[1]].bleed = 1; });
      bleedT = 0;
      setFlash("CONTRADICTION — that letter clashes with a locked fact. Commit rejected.", COLORS.bleed);
      if (DEBUG) console.log("[commit] REJECTED", e.id, proposed.join(""), "conflicts:", conflicts);
      return; // entry does NOT lock
    }

    // no conflict: lock letters, propagate into crossings (they share the cell)
    for (var k = 0; k < e.len; k++) {
      var c3 = e.coords[k];
      var lc = cells[c3[0]][c3[1]];
      lc.letter = proposed[k];
      lc.locked = true;
      lc.cand = "";
      lc.bleed = 0;
    }
    moves++;
    setFlash("Committed " + e.num + "-" + (e.dir === "A" ? "Across" : "Down") +
             ": " + proposed.join("") + " — letters locked into crossings.", COLORS.good);
    if (DEBUG) console.log("[commit] LOCKED", e.id, proposed.join(""));

    checkWin();
  }

  // ---- Erase / revise --------------------------------------------------------
  function eraseEntry() {
    var e = selectedEntry();
    var changed = false;
    e.coords.forEach(function (rc) {
      var cell = cells[rc[0]][rc[1]];
      cell.cand = "";
      cell.bleed = 0;
      // only unlock cells SOLELY owned by this entry (no other locked crosser)
      if (cell.locked) {
        var keptByOther = cell.entries.some(function (oid) {
          if (oid === e.id) return false;
          // is the other entry committed/locked across all of ITS cells at this point?
          return otherEntryStillClaims(oid, rc);
        });
        if (!keptByOther) {
          cell.locked = false;
          cell.letter = "";
          changed = true;
        }
      }
    });
    // clear any residual bleed across the grid that touched this entry's cells
    if (changed || true) erasures++;
    setFlash("Erased " + e.num + "-" + (e.dir === "A" ? "Across" : "Down") +
             " — intersection freed, retype a consistent answer.", COLORS.muted);
    if (DEBUG) console.log("[erase]", e.id);
    cursorIndex = 0;
  }

  // A crossing cell stays locked if ANOTHER entry through it is fully locked
  // (i.e. that fact is still committed). We treat "still claims" as: the other
  // entry has all its cells locked.
  function otherEntryStillClaims(oid, rc) {
    var oe = entryById[oid];
    return oe.coords.every(function (cc) {
      // the shared cell itself counts; others must be locked
      return cells[cc[0]][cc[1]].locked;
    });
  }

  // ---- Win condition ---------------------------------------------------------
  function checkWin() {
    var n = theCase.size;
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        var cell = cells[r][c];
        if (!cell.open) continue;
        if (!cell.locked) return false;     // not fully filled
        if (cell.bleed) return false;       // visible contradiction
      }
    }
    // every entry's locked letters must equal its authored answer
    var consistent = entries.every(function (e) {
      for (var i = 0; i < e.len; i++) {
        var rc = e.coords[i];
        if (cells[rc[0]][rc[1]].letter !== e.answer[i]) return false;
      }
      return true;
    });
    if (consistent) {
      setState(STATE.SOLVED);
      saveProgress();
      if (DEBUG) console.log("[win] SOLVED in", moves, "moves,", erasures, "erasures");
      return true;
    }
    return false;
  }

  // ---- Persistence -----------------------------------------------------------
  var LS_KEY = "coroner-crossword.v1";
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress() {
    try {
      var p = loadProgress();
      p.solved = p.solved || {};
      var id = "case" + caseIndex;
      var prevBest = p.solved[id] != null ? p.solved[id] : Infinity;
      p.solved[id] = Math.min(prevBest, erasures);
      localStorage.setItem(LS_KEY, JSON.stringify(p));
    } catch (e) { /* ignore */ }
  }

  // ---- Hit testing -----------------------------------------------------------
  function cellAtPixel(px, py) {
    var n = theCase.size;
    var cx = Math.floor((px - GRID.x) / GRID.cell);
    var cy = Math.floor((py - GRID.y) / GRID.cell);
    if (cx < 0 || cy < 0 || cx >= n || cy >= n) return null;
    return [cy, cx];
  }

  // Click a cell -> select an entry passing through it (prefer current dir).
  function clickGrid(rc) {
    var cell = cells[rc[0]][rc[1]];
    if (!cell.open || !cell.entries.length) return;
    var cur = selectedEntry();
    // if clicking inside current entry, just move cursor
    if (cur && cell.entries.indexOf(cur.id) >= 0) {
      var idx = cur.coords.findIndex(function (q) { return q[0] === rc[0] && q[1] === rc[1]; });
      cursorIndex = idx >= 0 ? idx : 0;
      return;
    }
    // otherwise pick the first entry through this cell, set cursor there
    var id = cell.entries[0];
    var e = entryById[id];
    var i2 = e.coords.findIndex(function (q) { return q[0] === rc[0] && q[1] === rc[1]; });
    selectEntry(id, i2 >= 0 ? i2 : 0);
  }

  // Clue list hit regions (filled during render)
  var clueHits = [];

  // ---- Rendering -------------------------------------------------------------
  function clear() {
    ctx.fillStyle = COLORS.bg;
    ctx.fillRect(0, 0, W, H);
  }

  function drawTitle() {
    clear();
    ctx.fillStyle = COLORS.paper;
    ctx.textAlign = "center";
    ctx.font = "bold 52px 'Courier New', monospace";
    ctx.fillText("CORONER  &  CROSSWORD", W / 2, 180);

    ctx.font = "18px 'Courier New', monospace";
    ctx.fillStyle = COLORS.paperDim;
    ctx.fillText("A homicide solved by filling a crossword of alibis.", W / 2, 220);
    ctx.fillText("Every shared letter forces two facts to agree —", W / 2, 248);
    ctx.fillStyle = COLORS.bleed;
    ctx.fillText("a wrong theory BLEEDS RED at the clash.", W / 2, 276);

    // how to play
    ctx.fillStyle = COLORS.muted;
    ctx.font = "16px 'Courier New', monospace";
    ctx.fillText("Click a clue or cell, TYPE an answer, press ENTER to commit.", W / 2, 360);
    ctx.fillText("Conflicts are rejected and bleed red.  DELETE/E erases an entry.", W / 2, 386);

    // best
    var p = loadProgress();
    var best = (p.solved && p.solved.case0 != null) ? p.solved.case0 : null;
    if (best != null) {
      ctx.fillStyle = COLORS.good;
      ctx.fillText("Best (fewest erasures): " + best, W / 2, 430);
    }

    // start button
    drawButton(W / 2 - 110, 470, 220, 54, "OPEN THE CASE FILE");
    ctx.fillStyle = COLORS.muted;
    ctx.font = "13px 'Courier New', monospace";
    ctx.fillText("Press ENTER or click to begin", W / 2, 556);
    ctx.textAlign = "left";
  }

  var startBtn = { x: W / 2 - 110, y: 470, w: 220, h: 54 };
  function drawButton(x, y, w, h, label) {
    ctx.fillStyle = COLORS.paper;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = COLORS.bg;
    ctx.font = "bold 18px 'Courier New', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, x + w / 2, y + h / 2);
    ctx.textBaseline = "alphabetic";
  }

  function drawGrid() {
    var n = theCase.size;
    var e = selectedEntry();
    // selected cell set
    var selSet = {};
    e.coords.forEach(function (rc) { selSet[rc[0] + "," + rc[1]] = true; });

    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        var cell = cells[r][c];
        var x = GRID.x + c * GRID.cell;
        var y = GRID.y + r * GRID.cell;

        if (cell.block) {
          ctx.fillStyle = COLORS.block;
          ctx.fillRect(x, y, GRID.cell, GRID.cell);
          continue;
        }
        // paper
        ctx.fillStyle = COLORS.paper;
        ctx.fillRect(x, y, GRID.cell, GRID.cell);

        // crossing tint (cell shared by 2 entries)
        if (cell.entries.length > 1) {
          ctx.fillStyle = COLORS.cross;
          ctx.fillRect(x, y, GRID.cell, GRID.cell);
        }
        // selection highlight
        if (selSet[r + "," + c]) {
          ctx.fillStyle = COLORS.selectSoft;
          ctx.fillRect(x, y, GRID.cell, GRID.cell);
        }
        // bleed background
        if (cell.bleed > 0) {
          var pulse = 0.25 + 0.25 * Math.abs(Math.sin(bleedT * 4));
          ctx.fillStyle = "rgba(192,57,43," + (0.30 + pulse * 0.5) + ")";
          ctx.fillRect(x, y, GRID.cell, GRID.cell);
        }

        // border
        ctx.strokeStyle = COLORS.gridLine;
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 1, y + 1, GRID.cell - 2, GRID.cell - 2);

        // number
        if (cell.num) {
          ctx.fillStyle = COLORS.num;
          ctx.font = "12px 'Courier New', monospace";
          ctx.textAlign = "left";
          ctx.fillText(String(cell.num), x + 5, y + 16);
        }

        // letter (locked = graphite; candidate = ink/lighter; bleed = red)
        var glyph = cell.locked ? cell.letter : cell.cand;
        if (glyph) {
          if (cell.bleed > 0) ctx.fillStyle = COLORS.bleed;
          else if (cell.locked) ctx.fillStyle = COLORS.locked;
          else ctx.fillStyle = COLORS.ink;
          ctx.font = (cell.locked ? "bold " : "") + "40px 'Courier New', monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(glyph, x + GRID.cell / 2, y + GRID.cell / 2 + 4);
          ctx.textBaseline = "alphabetic";
        }
      }
    }

    // cursor caret on selected entry
    if (state === STATE.CASE && cursorIndex < e.len) {
      var crc = e.coords[cursorIndex];
      var cxp = GRID.x + crc[1] * GRID.cell;
      var cyp = GRID.y + crc[0] * GRID.cell;
      ctx.strokeStyle = COLORS.select;
      ctx.lineWidth = 3;
      ctx.strokeRect(cxp + 3, cyp + 3, GRID.cell - 6, GRID.cell - 6);
    }
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
  }

  function drawCluePanel() {
    var px = GRID.x + theCase.size * GRID.cell + 40;
    var py = 70;
    clueHits = [];

    ctx.fillStyle = COLORS.paper;
    ctx.font = "bold 20px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.fillText("CASE FILE: " + theCase.title, GRID.x, 48);

    ctx.fillStyle = COLORS.muted;
    ctx.font = "13px 'Courier New', monospace";
    ctx.fillText("Moves: " + moves + "    Erasures: " + erasures, GRID.x, 78);

    var groups = [
      { label: "ACROSS", dir: "A" },
      { label: "DOWN", dir: "D" }
    ];
    var y = py;
    var lineH = 20;
    groups.forEach(function (g) {
      ctx.fillStyle = COLORS.paperDim;
      ctx.font = "bold 15px 'Courier New', monospace";
      ctx.fillText(g.label, px, y);
      y += 24;
      entries.filter(function (e) { return e.dir === g.dir; }).forEach(function (e) {
        var sel = e.id === selectedEntryId;
        // status: locked fully = committed
        var committed = e.coords.every(function (rc) { return cells[rc[0]][rc[1]].locked; });
        var cand = entryCandidate(e).replace(/ /g, "_");

        if (sel) {
          ctx.fillStyle = COLORS.selectSoft;
          ctx.fillRect(px - 6, y - 14, 360, lineH * 2 + 6);
        }
        ctx.fillStyle = committed ? COLORS.good : (sel ? COLORS.paper : COLORS.paperDim);
        ctx.font = (sel ? "bold " : "") + "13px 'Courier New', monospace";
        var head = e.num + (g.dir === "A" ? "A" : "D") + "  [" + cand + "]" + (committed ? "  ✓" : "");
        ctx.fillText(head, px, y);
        // clue text (wrap)
        ctx.fillStyle = sel ? COLORS.paperDim : COLORS.muted;
        ctx.font = "12px 'Courier New', monospace";
        var wrapped = wrapText(e.clue, 46);
        ctx.fillText(wrapped[0] || "", px, y + lineH);
        // hit region (header + clue)
        clueHits.push({ id: e.id, x: px - 6, y: y - 14, w: 360, h: lineH * 2 + 6 });
        y += lineH * 2 + 10;
      });
      y += 8;
    });

    // controls help
    ctx.fillStyle = COLORS.muted;
    ctx.font = "12px 'Courier New', monospace";
    ctx.fillText("ENTER commit  •  E / DEL erase  •  TAB next clue  •  R restart", GRID.x, H - 24);

    // flash line
    if (flash) {
      ctx.fillStyle = flash.color;
      ctx.font = "13px 'Courier New', monospace";
      ctx.fillText(flash.text, GRID.x, H - 48);
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
  }

  function drawSolved() {
    drawCase();
    // overlay
    ctx.fillStyle = "rgba(12,10,7,0.78)";
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.translate(W / 2, H / 2 - 30);
    ctx.rotate(-0.08);
    ctx.strokeStyle = COLORS.bleed;
    ctx.lineWidth = 6;
    ctx.strokeRect(-220, -60, 440, 120);
    ctx.fillStyle = COLORS.bleed;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 64px 'Courier New', monospace";
    ctx.fillText("CASE SOLVED", 0, 0);
    ctx.restore();

    ctx.fillStyle = COLORS.paper;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.font = "18px 'Courier New', monospace";
    ctx.fillText("Every alibi holds. The grid is consistent.", W / 2, H / 2 + 70);
    ctx.fillStyle = COLORS.muted;
    ctx.font = "15px 'Courier New', monospace";
    ctx.fillText("Solved in " + moves + " commits with " + erasures + " erasures.", W / 2, H / 2 + 100);
    ctx.fillStyle = COLORS.paperDim;
    ctx.fillText("Press ENTER or R to reopen the case.", W / 2, H / 2 + 140);
    ctx.textAlign = "left";
  }

  // ---- Main loop -------------------------------------------------------------
  var lastT = 0;
  function frame(t) {
    var dt = Math.min((t - lastT) / 1000 || 0, 0.05);
    lastT = t;
    bleedT += dt;
    if (flash && flash.t > 0) flash.t -= dt;

    if (state === STATE.TITLE) drawTitle();
    else if (state === STATE.CASE) drawCase();
    else if (state === STATE.SOLVED) drawSolved();

    requestAnimationFrame(frame);
  }

  // ---- Input handlers --------------------------------------------------------
  function startCase() {
    loadCase(caseIndex);
    setState(STATE.CASE);
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

    if (state === STATE.TITLE) {
      startCase();
      return;
    }
    if (state === STATE.SOLVED) {
      startCase();
      return;
    }
    // CASE: clue list?
    for (var i = 0; i < clueHits.length; i++) {
      var h = clueHits[i];
      if (p.x >= h.x && p.x <= h.x + h.w && p.y >= h.y && p.y <= h.y + h.h) {
        selectEntry(h.id, 0);
        return;
      }
    }
    // grid?
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
      if (k === "Enter" || k === "r" || k === "R" || k === " ") { ev.preventDefault(); startCase(); }
      return;
    }

    // CASE
    if (k === "Enter") { ev.preventDefault(); commit(); return; }
    if (k === "Backspace") { ev.preventDefault(); backspace(); return; }
    if (k === "Delete" || k === "e" || k === "E") { ev.preventDefault(); eraseEntry(); return; }
    if (k === "Tab") { ev.preventDefault(); cycleEntry(ev.shiftKey ? -1 : 1); return; }
    if (k === "r" || k === "R") { ev.preventDefault(); startCase(); return; }
    if (k === "ArrowRight") { ev.preventDefault(); cursorIndex = Math.min(cursorIndex + 1, selectedEntry().len - 1); return; }
    if (k === "ArrowLeft") { ev.preventDefault(); cursorIndex = Math.max(cursorIndex - 1, 0); return; }

    // letters
    if (/^[a-zA-Z]$/.test(k)) {
      ev.preventDefault();
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
      select: selectEntry,
      type: function (s) { s.split("").forEach(function (ch) { typeLetter(ch.toUpperCase()); }); },
      commit: commit,
      erase: eraseEntry,
      start: startCase
    };
    console.log("DEBUG on. Use window.cc to drive the mechanic.");
  }

  // ---- Boot ------------------------------------------------------------------
  fitCanvas();
  loadCase(0);          // build model so title-screen best/etc. are valid
  setState(STATE.TITLE);
  requestAnimationFrame(frame);
})();

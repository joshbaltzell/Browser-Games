// Hal's Completely, Totally, Absolutely Honest Minigolf. Slice 1: top-down, three lies, one card of three holes.
// Everything is drawn into a 480x270 canvas (px) and blitted to the screen with whole-number scaling. All text is DOM.
(function () {
  'use strict';
  var W = 480, H = 270, CX = 112, CY = 40, CELL = 16, SLUG = 'honest-minigolf';
  var MAX_STROKES = 8, CALL_BONUS = [3, 2, 1], CALL_PENALTY = 2;

  // Every feel constant lives here. Press ` in the game to tune it live. Names that match GolfSim.PHYS feed the physics.
  var TUNE = {
    maxSpeed: { v: 420, min: 200, max: 700, step: 10 },
    drag: { v: 0.9, min: 0.3, max: 2, step: 0.05 },
    lin: { v: 12, min: 0, max: 40, step: 1 },
    keepPlain: { v: 0.72, min: 0.3, max: 1, step: 0.01 },
    keepRed: { v: 1, min: 0.5, max: 1.2, step: 0.01 },
    keepBlue: { v: 0.4, min: 0.1, max: 0.9, step: 0.01 },
    keepYellow: { v: 1.3, min: 1, max: 1.8, step: 0.01 },
    slope: { v: 60, min: 0, max: 200, step: 5 },
    tilt: { v: 16, min: 0, max: 64, step: 1 },
    shyK: { v: 200, min: 0, max: 600, step: 10 },
    shyR: { v: 28, min: 0, max: 60, step: 1 },
    capSpeed: { v: 190, min: 60, max: 300, step: 5 },
    millPeriod: { v: 2.4, min: 1, max: 5, step: 0.1 },
    guideSec: { v: 0.6, min: 0, max: 1.5, step: 0.05 },
    pullMax: { v: 60, min: 30, max: 100, step: 2 },
    talkMs: { v: 26, min: 8, max: 80, step: 2 }
  };

  var C = {
    navy: '#1d2540', turf: '#2f9e44', turf2: '#237a3b', red: '#c8553d', cream: '#f6ead2', mustard: '#e9b43c', purple: '#5b3a8c',
    dark: '#14161c', wood: '#2b1a12', redDk: '#8a3322', redLt: '#ec8f74'
  };

  var assets = typeof ASSETS !== 'undefined' ? ASSETS : {};
  var gm = null; // the Kit.boot game object
  var px = document.createElement('canvas'); px.width = W; px.height = H;
  var pc = px.getContext('2d');
  var L = {}; // pre-scaled art
  var $ = function (id) { return document.getElementById(id); };
  var el = {
    stage: $('stage'), bubble: $('bubble'), plaque: $('plaque'), boxes: $('boxes'), b: [$('b1'), $('b2'), $('b3')],
    title: $('title'), warm: $('warm'), card: $('card'), end: $('end'), chart: $('chart'),
    btnPlay: $('btnPlay'), btnWarm: $('btnWarm'), wPlay: $('wPlay'), wAgain: $('wAgain'),
    cHead: $('cHead'), cSum: $('cSum'), cBoard: $('cBoard'), cLabel: $('cLabel'), cNext: $('cNext'), cFoot: $('cFoot'),
    eCard: $('eCard'), eTotal: $('eTotal'), eCall: $('eCall'), eLie: $('eLie'), eLieSub: $('eLieSub'), eNew: $('eNew'), eWarm: $('eWarm')
  };
  var callBtns = Array.prototype.slice.call(document.querySelectorAll('.call'));
  var SEEN_KEY = 'bg.' + SLUG + '.seen';

  // ---------- pixel helpers ----------
  var rgbCache = {};
  function rgb(h) {
    var v = rgbCache[h];
    if (!v) { v = [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16)]; rgbCache[h] = v; }
    return v;
  }
  function sprite(w, h, fn) {
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    var x = c.getContext('2d'), id = x.createImageData(w, h), d = id.data, i = 0, yy, xx;
    for (yy = 0; yy < h; yy++) for (xx = 0; xx < w; xx++) {
      var col = fn(xx, yy);
      if (col) { var r = rgb(col); d[i] = r[0]; d[i + 1] = r[1]; d[i + 2] = r[2]; d[i + 3] = 255; }
      i += 4;
    }
    x.putImageData(id, 0, 0);
    return c;
  }
  function rect(x, y, w, h, col) { pc.fillStyle = col; pc.fillRect(x, y, w, h); }
  function lineDots(x0, y0, x1, y1, step, col, size) {
    var dx = x1 - x0, dy = y1 - y0, n = Math.max(1, Math.floor(Math.sqrt(dx * dx + dy * dy) / step)), i;
    pc.fillStyle = col;
    for (i = 0; i <= n; i++) pc.fillRect(Math.round(x0 + dx * i / n), Math.round(y0 + dy * i / n), size, size);
  }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  // ---------- tiles ----------
  function isWall(ch) { return '#RBY'.indexOf(ch) >= 0; }
  function tileY(flash) {
    return sprite(16, 16, function (x, y) {
      if (y === 0 || y === 15) return '#6b4a12';
      var c = ((x + Math.abs(y - 8)) >> 2) & 1;
      if (flash) return c ? C.red : '#fff6c8';
      return c ? C.dark : C.mustard;
    });
  }
  function tileFor(ch, top, bottom) {
    var f = null;
    if (ch === '#') f = function (x, y) {
      if (top && y === 0) return C.cream;
      if (bottom && y >= 14) return '#5a2418';
      return ((x + y) >> 2) & 1 ? C.red : C.cream;
    };
    else if (ch === 'R') f = function (x, y) {
      if (top && y === 0) return C.redLt;
      if (bottom && y >= 14) return C.redDk;
      return (x * 7 + y * 13) % 11 === 0 ? '#d4664b' : C.red;
    };
    else if (ch === 'B') f = function (x, y) {
      var lx = (x + ((y >> 3) & 1) * 4) % 8, ly = y % 8, d = Math.sqrt((lx - 3.5) * (lx - 3.5) + (ly - 3.5) * (ly - 3.5));
      if (bottom && y >= 14) return '#1b2d5c';
      if (d < 1.8) return '#7ea0e0';
      if (d < 3.4) return '#4a72bd';
      return '#2b4685';
    };
    else if (ch === 'Y') return tileY(false);
    else if (ch >= '1' && ch <= '4') f = function (x, y) {
      var inside = ch === '1' ? x >= y : ch === '2' ? x + y <= 15 : ch === '3' ? x + y >= 15 : x <= y;
      if (!inside) return null;
      var edge = ch === '1' || ch === '4' ? Math.abs(x - y) === 0 : Math.abs(x + y - 15) === 0;
      if (edge) return '#5a2418';
      return ((x + y) >> 2) & 1 ? C.red : C.cream;
    };
    else if (ch === 'o') f = function (x, y) {
      var d = Math.sqrt((x - 7.5) * (x - 7.5) + (y - 7.5) * (y - 7.5));
      if (d > 6.2) return null;
      if (d > 5.1) return '#5a2418';
      return d < 2.6 ? C.cream : C.red;
    };
    else if (ch === '>' || ch === '<' || ch === '^' || ch === 'v') f = function (x, y) {
      var v = ch === '>' ? x + Math.abs(y - 8) : ch === '<' ? 15 - x + Math.abs(y - 8) : ch === '^' ? y + Math.abs(x - 8) : 15 - y + Math.abs(x - 8);
      return v % 6 < 2 ? '#8fdc7a' : null;
    };
    else if (ch === 'S') f = function (x, y) {
      return ((x & 1) ^ (y & 1)) && (x * 3 + y * 5) % 7 < 2 ? '#c29a52' : '#d9b46a';
    };
    else if (ch === 'C') f = function (x, y) {
      var d = Math.sqrt((x - 7.5) * (x - 7.5) + (y - 7.5) * (y - 7.5));
      if (d <= 5) return '#0b0e18';
      return d <= 6 ? '#1a5a2b' : null;
    };
    else if (ch === 'T') f = function (x, y) {
      var d = Math.sqrt((x - 7.5) * (x - 7.5) + (y - 7.5) * (y - 7.5));
      return d <= 3.4 && d > 2.2 ? '#1a6b30' : null;
    };
    else if (ch === 'W') f = function (x, y) { return (y & 3) === 3 ? '#5a3a1e' : '#7a5230'; };
    return f ? sprite(16, 16, f) : null;
  }
  function buildCourse(hole) {
    var c = sprite(352, 208, function (x, y) {
      var p = (x & 1) + ((y & 1) << 1), dark = ((x >> 4) + (y >> 4)) & 1 ? p !== 0 : p === 3;
      return dark ? C.turf2 : C.turf;
    });
    var cx2 = c.getContext('2d'), cx, cy;
    for (cy = 0; cy < 13; cy++) for (cx = 0; cx < 22; cx++) {
      var ch = GolfSim.at(hole, cx, cy);
      if (ch === '.') continue;
      var t = tileFor(ch, !isWall(GolfSim.at(hole, cx, cy - 1)), !isWall(GolfSim.at(hole, cx, cy + 1)));
      if (t) cx2.drawImage(t, cx * CELL, cy * CELL);
    }
    return c;
  }
  function circleSprite(r, col, shade) {
    var n = r * 2 + 1;
    return sprite(n, n, function (x, y) {
      var dx = x - r, dy = y - r, d = Math.sqrt(dx * dx + dy * dy);
      if (d > r + 0.2) return null;
      if (!shade) return col;
      if (x <= r - 1 && y <= r - 1 && d < r - 1.2) return '#ffffff';
      if (dx + dy > r * 0.9) return '#c9c3b0';
      return col;
    });
  }

  // ---------- state ----------
  var S = {
    mode: 'title', phase: 'aim', clock: 0, card: null, def: null, hole: null, course: null, holeIdx: 0, strokes: [0, 0, 0],
    call: null, ball: { x: 0, y: 0 }, stroke: 0, play: null, trail: [], flash: {}, sunkT: -1, overT: -1, flagT: 0, mill: null,
    aim: null, kb: { on: false, angle: 0, power: 0.5 }, notch: 0, idleT: 0, idleSaid: false, parts: [], shake: 0, hand: { t: -1, done: true },
    lineIdx: {}, blit: { ox: 0, oy: 0, dw: W, dh: H, k: 1 }, halTalk: false
  };
  var hal = { queue: [], cur: '', chars: 0, acc: 0, linger: 0, state: 'grin', stateMs: 0 };

  // ---------- Hal ----------
  function nextLine() {
    var l = hal.queue.shift();
    if (l == null) return;
    hal.cur = l; hal.chars = 0; hal.acc = 0; hal.linger = 0; el.bubble.textContent = '';
  }
  function say(lines, state) {
    hal.queue = (typeof lines === 'string' ? [lines] : lines.slice());
    hal.state = state || 'grin'; hal.stateMs = state ? 4500 : 0;
    nextLine();
  }
  function pickLine(key) {
    var arr = HAL[key], i = S.lineIdx[key] || 0;
    S.lineIdx[key] = i + 1;
    return arr[i % arr.length];
  }
  function updateHal(dt) {
    S.halTalk = false;
    if (hal.cur && hal.chars < hal.cur.length) {
      S.halTalk = true; hal.acc += dt;
      var n = Math.floor(hal.acc / TUNE_V('talkMs'));
      if (n > 0) {
        hal.acc -= n * TUNE_V('talkMs');
        while (n-- > 0 && hal.chars < hal.cur.length) {
          hal.chars++;
          if (hal.chars % 4 === 1) play('hal', { midi: 62 + ((hal.chars * 5) % 9) });
        }
        el.bubble.textContent = hal.cur.slice(0, hal.chars);
      }
    } else if (hal.queue.length) {
      hal.linger += dt;
      if (hal.linger > 1700) nextLine();
    }
    if (hal.stateMs > 0) { hal.stateMs -= dt; if (hal.stateMs <= 0) hal.state = 'grin'; }
  }
  function TUNE_V(k) { return gm && gm.tune && gm.tune[k] != null ? gm.tune[k] : TUNE[k].v; }
  function syncPhys() {
    Object.keys(TUNE).forEach(function (k) { if (k in GolfSim.PHYS) GolfSim.PHYS[k] = TUNE_V(k); });
  }

  // ---------- flow ----------
  function show(e) { e.classList.remove('hidden'); }
  function hide(e) { e.classList.add('hidden'); }
  function cupAngle() { return Math.atan2(S.hole.cup.y - S.ball.y, S.hole.cup.x - S.ball.x); }

  function loadHole(def) {
    S.def = def; S.hole = GolfSim.parse(def.rows); S.course = buildCourse(S.hole);
    S.ball = { x: S.hole.tee.x, y: S.hole.tee.y }; S.stroke = 0; S.phase = 'aim'; S.play = null; S.trail = []; S.flash = {};
    S.sunkT = -1; S.overT = -1; S.aim = null; S.kb = { on: false, angle: cupAngle(), power: 0.5 }; S.idleT = 0; S.idleSaid = false; S.parts = [];
    var minC = 99, maxC = -1, minR = 99, maxR = -1, c, r;
    for (r = 0; r < 13; r++) for (c = 0; c < 22; c++) if (GolfSim.at(S.hole, c, r) === 'W') { minC = Math.min(minC, c); maxC = Math.max(maxC, c); minR = Math.min(minR, r); maxR = Math.max(maxR, r); }
    S.mill = maxC >= 0 ? { x: (minC + maxC + 1) * 8, y: (minR + maxR + 1) * 8 } : null;
    updateHud();
  }
  function updateHud() {
    var inGame = S.mode !== 'title';
    el.plaque.style.display = el.boxes.style.display = el.chart.style.display = inGame ? '' : 'none';
    if (!inGame) { el.bubble.style.display = 'none'; return; }
    el.bubble.style.display = hal.cur ? '' : 'none';
    var n = Math.min(S.stroke + (S.phase === 'aim' ? 1 : 0), MAX_STROKES);
    if (S.mode === 'warm') el.plaque.textContent = 'Warm-up · Stroke ' + Math.max(1, n);
    else el.plaque.textContent = 'Hole ' + (S.holeIdx + 1) + ' · Stroke ' + Math.max(1, n) + ' · Par ' + S.def.par;
    el.b.forEach(function (b, i) { b.textContent = S.mode === 'warm' ? '' : 'H' + (i + 1) + ' ' + (S.strokes[i] || '-'); });
    var P = GolfSim.PHYS;
    var vals = [['PLAIN', P.keepPlain], ['RED', P.keepRed], ['BLUE', P.keepBlue], ['KICK', P.keepYellow]];
    vals.forEach(function (v, i) { $('chart' + i).textContent = v[0] + ' ' + Math.round(v[1] * 100) + '%'; });
  }
  function startWarm() {
    S.mode = 'warm'; S.card = null; S.strokes = [0, 0, 0]; S.call = null;
    hide(el.title); hide(el.card); hide(el.end); hide(el.warm);
    loadHole(WARMUP);
    say(HAL.warm);
    S.hand = { t: -1.4, done: false };
    updateHud();
  }
  function startCard(seed) {
    S.mode = 'play'; S.card = GolfSim.card(seed); S.strokes = [0, 0, 0]; S.call = null; S.holeIdx = 0;
    hide(el.title); hide(el.card); hide(el.end); hide(el.warm);
    loadHole(GolfSim.holeById(S.card.holes[0]));
    say([HAL.open[0], HAL.holes[0]]);
    S.hand = { t: 0, done: true };
    updateHud();
  }
  function newSeed() { return (Math.floor(Math.random() * 1e9) ^ Date.now()) >>> 0; }

  function endHole() {
    S.phase = 'done';
    if (S.mode === 'warm') { show(el.warm); el.wPlay.focus(); return; }
    S.strokes[S.holeIdx] = S.stroke;
    showScorecard();
  }
  var DIFF = { '-3': 'ALBATROSS', '-2': 'EAGLE', '-1': 'BIRDIE', '0': 'PAR', '1': 'BOGEY', '2': 'DOUBLE BOGEY' };
  function showScorecard() {
    var i = S.holeIdx, d = S.stroke - S.def.par, tag = S.stroke === 1 ? 'HOLE IN ONE' : (DIFF[String(d)] || (d > 0 ? '+' + d : String(d)));
    el.cHead.textContent = 'HOLE ' + (i + 1) + ' · ' + S.def.name.toUpperCase();
    el.cSum.textContent = S.stroke + ' STROKES · PAR ' + S.def.par + ' · ' + tag;
    el.cBoard.textContent = [0, 1, 2].map(function (j) { return 'H' + (j + 1) + ' ' + (S.strokes[j] || '-'); }).join('   ') + '   CALL: ' + (S.call ? S.call.id.toUpperCase() : 'NONE');
    refreshCard();
    show(el.card); updateHud();
    if (!S.call) say(pickLine('call'));
    el.cNext.focus();
  }
  function refreshCard() {
    var i = S.holeIdx, avail = !S.call;
    callBtns.forEach(function (b) { b.disabled = !avail; });
    if (avail) {
      el.cLabel.innerHTML = 'CALL THE LIE? RIGHT: -' + CALL_BONUS[i] + ' STROKES.<br>WRONG: +' + CALL_PENALTY + '. ONE CALL PER CARD.';
      el.cNext.textContent = i < 2 ? 'Not yet' : 'No call';
    } else if (S.call.after === i + 1 && S.call.fresh) {
      el.cLabel.innerHTML = S.call.correct ? 'CORRECT! -' + S.call.bonus + ' STROKES.<br>HAL IS NOT HAPPY.' : 'WRONG. +' + CALL_PENALTY + ' STROKES.<br>HAL IS VERY HAPPY.';
      el.cNext.textContent = i < 2 ? 'Next hole' : 'See result';
    } else {
      el.cLabel.innerHTML = 'YOU CALLED AFTER HOLE ' + S.call.after + '.<br>THE LIE IS REVEALED AT THE END.';
      el.cNext.textContent = i < 2 ? 'Next hole' : 'See result';
    }
  }
  function callLie(id) {
    if (S.call || S.phase !== 'done' || S.mode !== 'play') return;
    var i = S.holeIdx, correct = id === S.card.lie;
    S.call = { id: id, after: i + 1, correct: correct, bonus: CALL_BONUS[i], fresh: true };
    play(correct ? 'caught' : 'wrong');
    say(correct ? pickLine('correct') : HAL.wrong[id], correct ? 'caught' : 'shrug');
    S.shake = correct ? 0.25 : 0;
    el.cBoard.textContent = [0, 1, 2].map(function (j) { return 'H' + (j + 1) + ' ' + (S.strokes[j] || '-'); }).join('   ') + '   CALL: ' + id.toUpperCase();
    refreshCard(); el.cNext.focus();
  }
  function advance() {
    if (S.phase !== 'done' || S.mode !== 'play') return;
    var hadCallNow = S.call && S.call.fresh;
    if (S.call) S.call.fresh = false;
    play('click');
    if (S.holeIdx < 2) {
      S.holeIdx++; hide(el.card);
      loadHole(GolfSim.holeById(S.card.holes[S.holeIdx]));
      say(hadCallNow ? [HAL.holes[S.holeIdx]] : (S.call ? [HAL.holes[S.holeIdx]] : [pickLine('notYet'), HAL.holes[S.holeIdx]]));
    } else showEnd();
  }
  function total() {
    var t = S.strokes[0] + S.strokes[1] + S.strokes[2], adj = S.call ? (S.call.correct ? -S.call.bonus : CALL_PENALTY) : 0;
    return { strokes: t, adj: adj, final: t + adj };
  }
  var LIE_TEXT = {
    tilt: function (c) { return 'THE GREEN LEANED ' + { N: 'NORTH', E: 'EAST', S: 'SOUTH', W: 'WEST' }[c.dir] + '.'; },
    swapped: function () { return 'RED AND BLUE WALLS WERE SWAPPED.'; },
    shy: function () { return 'THE CUP PUSHED THE BALL AWAY.'; }
  };
  function showEnd() {
    S.phase = 'end'; hide(el.card); show(el.end);
    var t = total(), par = 0, i, parts = [];
    for (i = 0; i < 3; i++) { var d = GolfSim.holeById(S.card.holes[i]); par += d.par; parts.push(S.strokes[i] + ' (' + d.par + ')'); }
    el.eCard.textContent = 'STROKES ' + parts.join(' · ');
    el.eTotal.textContent = 'TOTAL ' + t.strokes + ' · PAR ' + par + (t.adj ? ' · ' + (t.adj < 0 ? '' : '+') + t.adj + ' = ' + t.final : '');
    el.eCall.textContent = S.call ? 'CALLED AFTER HOLE ' + S.call.after + ': ' + (S.call.correct ? 'RIGHT' : 'WRONG') : 'NO CALL MADE';
    el.eLie.textContent = 'THE LIE: ' + GolfSim.LIES[S.card.lie].name.toUpperCase();
    el.eLieSub.textContent = LIE_TEXT[S.card.lie](S.card);
    var caught = S.call && S.call.correct;
    say(caught ? HAL.revealCaught : HAL.reveal[S.card.lie], 'shrug'); hal.stateMs = 1e9;
    play('click'); el.eNew.focus(); updateHud();
  }
  function toTitle() {
    S.mode = 'title'; S.phase = 'aim'; hide(el.card); hide(el.end); hide(el.warm); show(el.title);
    hal.cur = ''; hal.queue = []; hal.state = 'grin'; hal.stateMs = 0; el.bubble.textContent = '';
    updateHud();
  }

  // ---------- shooting ----------
  function shootNow(angle, power) {
    if (S.phase !== 'aim' || (S.mode !== 'warm' && S.mode !== 'play')) return;
    syncPhys();
    var lie = S.card ? GolfSim.lieOf(S.card) : null;
    var res = GolfSim.shoot(S.hole, S.ball, angle, power, lie, S.clock);
    S.stroke++; S.hand.done = true; S.aim = null; S.kb.on = false; S.idleT = 0;
    S.play = { res: res, tick: 0, bi: 0, lipDone: false, start: { x: S.ball.x, y: S.ball.y } };
    S.phase = 'roll';
    play('putt', { power: 1 + power * 2 });
    Kit.store.set(SEEN_KEY, true);
    updateHud();
  }
  var WALL_SOUND = { '#': 'wallPlain', W: 'wallPlain', o: 'wallPlain', R: 'wallRed', B: 'wallBlue', Y: 'wallYellow', 1: 'wallPlain', 2: 'wallPlain', 3: 'wallPlain', 4: 'wallPlain' };
  function spark(x, y, col, n, sp) {
    var i;
    for (i = 0; i < n; i++) {
      var a = Math.random() * 6.283, s = sp * (0.4 + Math.random() * 0.6);
      S.parts.push({ x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 20, life: 0.35 + Math.random() * 0.3, col: col });
    }
  }
  function onBounce(b) {
    play(WALL_SOUND[b.wall] || 'wallPlain', { gain: 0.5 + 0.5 * Math.min(1, b.vin / 300) });
    var col = b.wall === 'R' ? C.redLt : b.wall === 'B' ? '#7ea0e0' : b.wall === 'Y' ? '#fff6c8' : C.cream;
    spark(b.x, b.y, col, b.wall === 'B' ? 3 : 6, 70);
    if (b.wall === 'Y') { S.flash[b.cx + ',' + b.cy] = 0.28; S.shake = 0.12; }
  }
  function updatePlay(dt) {
    var p = S.play;
    if (!p) return;
    var res = p.res, path = res.path;
    p.tick += dt / 1000 * GolfSim.HZ;
    var idx = Math.floor(p.tick);
    while (p.bi < res.bounces.length && res.bounces[p.bi].tick <= idx) onBounce(res.bounces[p.bi++]);
    if (res.lipped && !p.lipDone && idx >= res.lipTick) { p.lipDone = true; play('lip'); }
    var n = path.length, pos = idx <= 0 ? p.start : path[Math.min(idx, n) - 1];
    S.ball = { x: pos.x, y: pos.y };
    if (idx % 6 === 0 && (!p.lastTrail || p.lastTrail !== idx)) { p.lastTrail = idx; S.trail.push({ x: pos.x, y: pos.y }); if (S.trail.length > 7) S.trail.shift(); }
    if (idx >= n) endShot();
  }
  function endShot() {
    var p = S.play, res = p.res, cup = S.hole.cup; S.play = null;
    var nb = res.bounces.length;
    if (res.sunk) {
      S.phase = 'sunk'; S.sunkT = 0; S.flagT = 0; S.ball = { x: cup.x, y: cup.y };
      play('cup'); spark(cup.x, cup.y, C.mustard, 14, 110); S.shake = 0.15;
      if (S.mode === 'warm') say(HAL.warmDone);
      else say(S.stroke === 1 ? HAL.ace[0] : pickLine('sink'));
      updateHud(); return;
    }
    S.ball = { x: res.rest.x, y: res.rest.y };
    S.phase = 'aim'; S.kb = { on: false, angle: cupAngle(), power: 0.5 }; S.idleT = 0;
    if (S.mode === 'play' && S.stroke >= MAX_STROKES) { S.phase = 'over'; S.overT = 0; say(HAL.limit, 'shrug'); updateHud(); return; }
    var dx = S.ball.x - cup.x, dy = S.ball.y - cup.y, dist = Math.sqrt(dx * dx + dy * dy);
    if (S.mode === 'warm') { if (S.stroke >= 2 && S.stroke % 2 === 0) say(pickLine('miss')); }
    else if (res.lipped) say(pickLine('lip'));
    else if (dist < 26) say(pickLine('close'));
    else if (nb >= 1 && S.stroke % 2 === 1) say(pickLine('bank'));
    else if (S.stroke >= 2) say(pickLine('miss'), 'grin');
    updateHud();
  }

  // ---------- input ----------
  function toLocal(x, y) { var b = S.blit; return { x: (x - b.ox) / b.dw * W, y: (y - b.oy) / b.dh * H }; }
  function aimFromPointer(a) {
    var dx = a.ax - a.cx, dy = a.ay - a.cy, len = Math.sqrt(dx * dx + dy * dy);
    a.len = len; a.angle = Math.atan2(dy, dx); a.power = clamp(len / TUNE_V('pullMax'), 0, 1);
  }
  var AIM_NOTES = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16];
  function notchSound(len) {
    var nt = Math.floor(len / 6);
    if (nt !== S.notch && len > 8) play('aim', { midi: 65 + AIM_NOTES[Math.min(nt, AIM_NOTES.length - 1)] });
    S.notch = nt;
  }
  Kit.pointer($('game'), {
    down: function (x, y, e) {
      if (S.phase !== 'aim' || (S.mode !== 'warm' && S.mode !== 'play')) return;
      if (e && e.button > 0) return;
      var l = toLocal(x, y);
      S.aim = { ax: l.x, ay: l.y, cx: l.x, cy: l.y, len: 0, angle: 0, power: 0 }; S.hand.done = true; S.notch = 0; S.idleT = 0;
    },
    move: function (x, y) {
      if (!S.aim) return;
      var l = toLocal(x, y); S.aim.cx = l.x; S.aim.cy = l.y; aimFromPointer(S.aim); notchSound(S.aim.len);
    },
    up: function (x, y) {
      var a = S.aim; S.aim = null;
      if (!a) return;
      var l = toLocal(x, y); a.cx = l.x; a.cy = l.y; aimFromPointer(a);
      if (a.len >= 8) shootNow(a.angle, a.power);
    }
  });
  window.addEventListener('keydown', function (e) {
    if (S.phase === 'done' && S.mode === 'play' && !S.call && /^[1-3]$/.test(e.key)) { callLie(['tilt', 'swapped', 'shy'][+e.key - 1]); return; }
    if (S.phase !== 'aim' || (S.mode !== 'warm' && S.mode !== 'play')) return;
    var k = e.key, kb = S.kb, used = true;
    if (k === 'ArrowLeft' || k === 'a') kb.angle -= e.shiftKey ? 0.01 : 0.04;
    else if (k === 'ArrowRight' || k === 'd') kb.angle += e.shiftKey ? 0.01 : 0.04;
    else if (k === 'ArrowUp' || k === 'w') kb.power = clamp(kb.power + 0.04, 0.05, 1);
    else if (k === 'ArrowDown' || k === 's') kb.power = clamp(kb.power - 0.04, 0.05, 1);
    else if (k === ' ' || k === 'Enter') { if (kb.on) shootNow(kb.angle, kb.power); else used = true; }
    else used = false;
    if (used) { if (!kb.on) { kb.on = true; S.hand.done = true; } e.preventDefault(); notchSound(kb.power * TUNE_V('pullMax')); S.idleT = 0; }
  });
  function getAim() {
    if (S.aim && S.aim.len >= 4) return S.aim;
    if (S.kb.on) return S.kb;
    return null;
  }

  // ---------- buttons ----------
  el.btnPlay.addEventListener('click', function () { play('click'); startCard(newSeed()); });
  el.btnWarm.addEventListener('click', function () { play('click'); startWarm(); });
  el.wPlay.addEventListener('click', function () { play('click'); startCard(newSeed()); });
  el.wAgain.addEventListener('click', function () { play('click'); hide(el.warm); loadHole(WARMUP); say(HAL.warmAgain); S.hand = { t: -1, done: false }; });
  el.cNext.addEventListener('click', advance);
  el.eNew.addEventListener('click', function () { play('click'); startCard(newSeed()); });
  el.eWarm.addEventListener('click', function () { play('click'); startWarm(); });
  callBtns.forEach(function (b) { b.addEventListener('click', function () { callLie(b.getAttribute('data-lie')); }); });
  if (!Kit.store.get(SEEN_KEY, false)) el.btnWarm.classList.add('pulse');

  // ---------- drawing ----------
  var HAND = [
    '....XX.......', '...XooX......', '...XooX......', '...XooX......', '...XooXXX....', '.XXXooXoXXX..',
    'XooXooXoXooX.', 'XooXooooooooX', '.XooooooooooX', '..XooooooooX.', '..XoooooooX..', '...XooooooX..', '...XXXXXXXX..'
  ];
  function buildArt() {
    function lo(name, w, h) {
      var c = document.createElement('canvas'); c.width = w; c.height = h;
      var x = c.getContext('2d'); x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high';
      Kit.draw(x, name, w / 2, h, { w: w, h: h });
      return c;
    }
    function halSet(h) {
      var o = {};
      ['grin', 'caught', 'shrug'].forEach(function (s) {
        var a = assets['hal-' + s], w = a ? Math.round(a.w * h / a.h) : Math.round(h * 0.5);
        o[s] = lo('hal-' + s, w, h);
      });
      return o;
    }
    L.bg = lo('bg-carnival', W, H);
    L.hal = halSet(88); L.halBig = halSet(150);
    L.body = lo('mill-body', 28, 46); L.blades = lo('mill-blades', 44, 44);
    L.ball = circleSprite(4, '#fffdf5', true); L.ballShadow = circleSprite(4, '#17481f', false);
    L.yFlash = tileY(true);
    L.swatch = [tileFor('#', true, true), tileFor('R', true, true), tileFor('B', true, true), tileY(false)];
    L.hand = sprite(13, 13, function (x, y) { var ch = HAND[y].charAt(x); return ch === 'X' ? C.navy : ch === 'o' ? C.cream : null; });
    var e = { cx: 292, cy: 232, rx: 186, ry: 46 };
    L.oval = sprite(W, H, function (x, y) {
      var dx = (x - e.cx) / e.rx, dy = (y - e.cy) / e.ry, v = dx * dx + dy * dy;
      if (v > 1) return null;
      if (v > 0.8) return ((x + y) >> 2) & 1 ? C.red : C.cream;
      return ((x & 1) + ((y & 1) << 1)) === 3 ? C.turf2 : C.turf;
    });
  }
  function bulbs(y0, amp, x0, x1, seg, chase) {
    var x, f = Math.floor(S.clock * (chase ? 7 : 2.5));
    for (x = x0; x < x1; x += 8) {
      var t = ((x - x0) % seg) / seg, y = y0 + Math.round(Math.sin(t * Math.PI) * amp), i = Math.floor(x / 8);
      var on = chase ? (i - f) % 3 === 0 : (i + f) % 2 === 0;
      rect(x, y - 1, 1, 1, '#3a2a1a');
      rect(x - 1, y, 3, 3, on ? '#ffe9a0' : C.mustard);
      if (on) rect(x, y + 1, 1, 1, '#ffffff');
    }
  }
  function bubbleFrame() {
    if (!hal.cur) return;
    rect(2, 2, 108, 76, C.cream); rect(4, 4, 104, 72, C.cream);
    rect(2, 2, 108, 2, C.navy); rect(2, 76, 108, 2, C.navy); rect(2, 2, 2, 76, C.navy); rect(108, 2, 2, 76, C.navy);
    rect(36, 78, 12, 2, C.cream); rect(38, 80, 8, 2, C.cream); rect(40, 82, 4, 2, C.cream);
    rect(34, 78, 2, 2, C.navy); rect(48, 78, 2, 2, C.navy); rect(36, 80, 2, 2, C.navy); rect(46, 80, 2, 2, C.navy); rect(38, 82, 2, 2, C.navy); rect(44, 82, 2, 2, C.navy); rect(40, 84, 4, 2, C.navy);
  }
  function drawHal(big) {
    var set = big ? L.halBig : L.hal, spr = set[hal.state] || set.grin;
    var bob = S.halTalk && (Math.floor(S.clock * 8) & 1) ? -2 : 0;
    var x = big ? 62 : 52, y = (big ? 262 : 172) + bob;
    pc.drawImage(spr, Math.round(x - spr.width / 2), y - spr.height);
  }
  function drawChart() {
    rect(4, 174, 104, 76, C.wood); rect(6, 176, 100, 72, '#5a3a1e'); rect(6, 176, 100, 1, '#7a5230');
    var i;
    for (i = 0; i < 4; i++) pc.drawImage(L.swatch[i], 0, 0, 16, 16, 10, 192 + i * 12, 14, 10);
  }
  function drawStrip() {
    rect(112, 250, 228, 18, C.mustard); rect(114, 252, 224, 14, C.navy);
    var i;
    for (i = 0; i < 3; i++) {
      rect(344 + i * 40, 250, 38, 18, C.mustard); rect(346 + i * 40, 252, 34, 14, i === S.holeIdx && S.mode === 'play' ? C.purple : C.navy);
    }
  }
  function drawFlag(cx, cy) {
    var bounce = S.flagT > 0 ? -Math.round(Math.abs(Math.sin(S.flagT * 14)) * 5 * Math.max(0, 1 - S.flagT / 0.7)) : 0;
    var x = CX + Math.round(cx), y = CY + Math.round(cy) - 1 + bounce, w;
    rect(x, y - 20, 1, 20, C.cream);
    for (w = 0; w < 7; w++) rect(x + 1, y - 20 + w, 8 - w, 1, C.mustard);
  }
  function drawMill() {
    var m = S.mill; if (!m) return;
    var blocked = GolfSim.millBlocked(S.clock), x = CX + m.x, y = CY + m.y;
    pc.drawImage(L.body, x - 14, y - 6);
    pc.save(); pc.translate(x, y - 14); pc.rotate(S.clock * (blocked ? 2.4 : 0.8));
    pc.globalAlpha = blocked ? 1 : 0.28; pc.drawImage(L.blades, -22, -22); pc.restore(); pc.globalAlpha = 1;
    if (blocked) { rect(x - 14, y - 3, 28, 1, C.red); rect(x - 14, y + 2, 28, 1, C.red); }
  }
  function render() {
    pc.imageSmoothingEnabled = false;
    pc.save();
    var shx = 0, shy = 0;
    if (S.shake > 0) { shx = (Math.floor(S.clock * 60) & 1) ? 1 : -1; shy = (Math.floor(S.clock * 47) & 1) ? 1 : 0; }
    pc.translate(shx, shy);
    rect(-2, -2, W + 4, H + 4, C.navy);
    if (S.mode === 'title') {
      pc.drawImage(L.bg, 0, 0);
      bulbs(8, 5, 0, W, 96, true); bulbs(26, 4, 0, W, 80, false);
      pc.drawImage(L.oval, 0, 0);
      var fx = 400, fy = 214; rect(fx, fy - 26, 1, 26, C.cream); var w; for (w = 0; w < 7; w++) rect(fx + 1, fy - 26 + w, 8 - w, 1, C.mustard);
      rect(fx - 4, fy - 1, 9, 3, C.dark);
      drawHal(true);
      pc.restore(); return;
    }
    pc.drawImage(L.bg, 0, 0);
    bulbs(8, 5, 0, W, 96, false); bulbs(24, 4, CX, W, 88, false);
    // course
    rect(CX - 3, CY - 3, 358, 214, C.wood);
    pc.drawImage(S.course, CX, CY);
    var key, hole = S.hole;
    for (key in S.flash) {
      if (S.flash[key] > 0) { var pr = key.split(','); pc.drawImage(L.yFlash, CX + pr[0] * CELL, CY + pr[1] * CELL); }
    }
    drawMill();
    // trail
    var i;
    for (i = 0; i < S.trail.length; i++) rect(CX + Math.round(S.trail[i].x), CY + Math.round(S.trail[i].y), 1, 1, i % 2 ? C.cream : C.mustard);
    // aim visuals
    var a = S.phase === 'aim' ? getAim() : null;
    if (a) {
      syncPhys();
      var pts = GolfSim.guide(hole, S.ball, a.angle, a.power, S.clock);
      for (i = 5; i < pts.length; i += 6) rect(CX + Math.round(pts[i].x) - 1, CY + Math.round(pts[i].y) - 1, 2, 2, (i / 6) % 2 < 1 ? C.cream : C.mustard);
      var len = a.power * TUNE_V('pullMax'), bx = CX + S.ball.x, by = CY + S.ball.y, ca = Math.cos(a.angle), sa = Math.sin(a.angle), d;
      for (d = 6; d <= len; d += 3) rect(Math.round(bx - ca * d), Math.round(by - sa * d), 1, 1, d / len > 0.75 ? C.red : C.cream);
      rect(Math.round(bx - ca * len) - 1, Math.round(by - sa * len) - 1, 3, 3, C.mustard);
    }
    // warm-up hint hand
    var hd = S.hand;
    if (S.mode === 'warm' && !hd.done && hd.t >= 0 && hd.t < 2.6 && S.phase === 'aim') {
      var u = clamp((hd.t - 0.3) / 1.3, 0, 1), back = { x: -0.67, y: 0.74 };
      var hx = CX + S.ball.x + back.x * 40 * u, hy = CY + S.ball.y + back.y * 40 * u;
      for (d = 6; d <= 40 * u; d += 4) rect(Math.round(CX + S.ball.x + back.x * d), Math.round(CY + S.ball.y + back.y * d), 1, 1, C.cream);
      if (hd.t < 2.2 || (Math.floor(hd.t * 10) & 1)) pc.drawImage(L.hand, Math.round(hx - 5), Math.round(hy - 1));
    }
    // ball
    var bxp = CX + Math.round(S.ball.x), byp = CY + Math.round(S.ball.y);
    if (S.phase === 'sunk') {
      var sc = 1 - clamp(S.sunkT / 0.35, 0, 1), sz = Math.round(9 * sc);
      if (sz > 0) pc.drawImage(L.ball, bxp - (sz >> 1), byp - (sz >> 1), sz, sz);
    } else {
      pc.drawImage(L.ballShadow, bxp - 3, byp - 3);
      pc.drawImage(L.ball, bxp - 4, byp - 4);
    }
    drawFlag(hole.cup.x, hole.cup.y);
    // particles
    for (i = 0; i < S.parts.length; i++) { var q = S.parts[i]; rect(CX + Math.round(q.x), CY + Math.round(q.y), 2, 2, q.col); }
    // left column and strip
    drawChart(); drawStrip();
    bubbleFrame();
    drawHal(false);
    pc.restore();
  }

  // ---------- update ----------
  function update(dt) {
    var s = dt / 1000, i;
    S.clock += s;
    if (S.shake > 0) S.shake -= s;
    updateHal(dt);
    if (S.hand.t > -5) S.hand.t += s;
    updatePlay(dt);
    for (i = S.parts.length - 1; i >= 0; i--) {
      var q = S.parts[i]; q.life -= s; q.vy += 260 * s; q.x += q.vx * s; q.y += q.vy * s;
      if (q.life <= 0) S.parts.splice(i, 1);
    }
    for (var k in S.flash) if (S.flash[k] > 0) S.flash[k] -= s;
    if (S.phase !== 'roll' && S.trail.length && Math.floor(S.clock * 20) !== S.trailTick) { S.trailTick = Math.floor(S.clock * 20); S.trail.shift(); }
    if (S.phase === 'sunk') { S.sunkT += s; S.flagT += s; if (S.sunkT > 1.5) endHole(); }
    else if (S.phase === 'over') { S.overT += s; if (S.overT > 1.7) endHole(); }
    else if (S.phase === 'aim' && (S.mode === 'warm' || S.mode === 'play') && !S.idleSaid) {
      S.idleT += s;
      if (S.idleT > 16 && S.stroke > 0) { S.idleSaid = true; say(HAL.idle); }
    }
  }
  function blit(game) {
    var view = game.view, ctx = game.ctx, sc = view.scale * view.dpr;
    var k = sc >= 2 ? Math.floor(sc) : sc, dw = W * k / sc, dh = H * k / sc;
    var ox = Math.round((W - dw) / 2 * sc) / sc, oy = Math.round((H - dh) / 2 * sc) / sc;
    S.blit = { ox: ox, oy: oy, dw: dw, dh: dh, k: k };
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(px, ox, oy, dw, dh);
    var cs = dw * view.scale / W, left = view.offX + ox * view.scale, top = view.offY + oy * view.scale;
    var tf = 'translate(' + left.toFixed(2) + 'px,' + top.toFixed(2) + 'px) scale(' + cs.toFixed(4) + ')';
    if (el.stage.style.transform !== tf) el.stage.style.transform = tf;
    if (!el.stage.classList.contains('ready')) el.stage.classList.add('ready');
  }

  var started = false;
  function firstGesture() {
    Kit.audio.unlock();
    if (started) return;
    started = true;
    BED.start();
  }
  window.addEventListener('pointerdown', firstGesture, true);
  window.addEventListener('keydown', firstGesture, true);

  gm = Kit.boot({
    slug: SLUG,
    world: { w: W, h: H },
    assets: assets,
    tune: TUNE,
    onStart: function (game) {
      gm = game; buildArt(); syncPhys(); updateHud();
      var first = !Kit.store.get(SEEN_KEY, false);
      (first ? el.btnWarm : el.btnPlay).focus();
    },
    onFrame: function (dt, game) {
      gm = game;
      syncPhys();
      update(dt);
      render();
      blit(game);
    },
    onPause: function () {},
    onResume: function () {}
  });

  window.__game = {
    g: gm, S: S, GolfSim: GolfSim,
    isRunning: function () { return S.mode !== 'title'; },
    startWarm: startWarm, startCard: startCard, shoot: shootNow
  };
})();

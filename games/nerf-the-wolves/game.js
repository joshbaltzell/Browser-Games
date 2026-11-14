(function () {
  'use strict';
  // Every feel constant lives here. Press ` in the game to tune it live.
  var TUNE = {
    seasonMs:    { v: 9000, min: 3000, max: 16000, step: 250 },   // length of one season
    encMs:       { v: 1000, min: 500, max: 2500, step: 50 },      // one encounter on screen
    fastMult:    { v: 2, min: 1, max: 4, step: 0.25 },            // reruns of the same puzzle
    handDownMs:  { v: 550, min: 200, max: 1500, step: 25 },
    handHoldMs:  { v: 650, min: 200, max: 2000, step: 25 },
    handUpMs:    { v: 400, min: 150, max: 1200, step: 25 },
    barSlide:    { v: 0.006, min: 0.002, max: 0.02, step: 0.001 },
    ambientGapMs: { v: 1100, min: 400, max: 3000, step: 50 },
    prayerMs:    { v: 6000, min: 2500, max: 10000, step: 250 },
    bobAmount:   { v: 3, min: 0, max: 8, step: 0.5 }
  };
  var D = NWData, W = WolfSim, SK = D.SKILLS;
  var assets = typeof ASSETS !== 'undefined' ? ASSETS : {};
  var SLUG = 'nerf-the-wolves';
  var WW = 1280, HH = 720;
  var COL = { sky: '#5cc3f2', grass: '#6aa84f', cream: '#f7f3e3', ink: '#4a2c17', orange: '#f2b84b', pink: '#ff5fa2', parch: '#f6e3b4' };
  var F_TITLE = "'Lilita One', 'Arial Rounded MT Bold', 'Trebuchet MS', system-ui, sans-serif";
  var F_BODY = "'Nunito', 'Trebuchet MS', system-ui, sans-serif";
  var ORDER = D.SPECIES_ORDER;
  var PLURAL = { wolf: 'Wolves', rabbit: 'Rabbits', deer: 'Deer', hawk: 'Hawks', bee: 'Bees', giraffe: 'Giraffes' };

  var HOME = { wolf: { x: 235, y: 440 }, rabbit: { x: 690, y: 462 }, deer: { x: 100, y: 505 }, hawk: { x: 430, y: 190 }, bee: { x: 520, y: 325 }, giraffe: { x: 430, y: 455 } };
  var HEIGHT = { wolf: 118, rabbit: 80, deer: 132, hawk: 96, bee: 84, giraffe: 180 };
  var FLYER = { hawk: 1, bee: 1 };
  var SLOTS = [[0, 0], [-52, 14], [52, 12], [-28, -26], [30, -28]];
  var BURROWS = [{ x: 690, y: 392 }, { x: 768, y: 436 }];
  var SIGN = { x: 748, y: 250 };

  // ---------- state ----------
  var g = null;
  var screen = 'title';           // title | levels | play
  var level = null, levelKey = '';
  var bought = [];
  var phase = 'idle';             // idle | hands | season
  var committed = null;           // last result shown (or the opening meadow)
  var barVals = {}, barTarget = {};
  var rest = {};
  var runCounts = {}, runTotal = 0;
  var stars = Kit.store.get('bg.' + SLUG + '.stars', {}) || {};
  var mouse = { x: -1, y: -1 };
  var drng = Kit.rng(20261114);
  var clock = 0;                  // ms, advances with the frame loop (pauses with the tab)
  var message = '', messageKind = '';
  var card = null;                // result card
  var actors = [], ghosts = [], prayers = [], popups = [];
  var hid = {}, slotCursor = {}, pulse = {};
  var hands = null, season = null, pending = null, ambient = { t: 0, idx: 0 };
  var handCount = 0, lastHand = '';
  var tutorial = true;            // pulse the skill buttons until the first purchase
  var bloom = { k: 0 };
  var tallyNow = {};
  var denyT = 0, denyId = '';
  var bedStarted = false, nextBird = 3500;
  var wolfSprite = 'wolf';

  function tn(k) { return g && g.tune && g.tune[k] != null ? g.tune[k] : TUNE[k].v; }
  function lerp(a, b, k) { return a + (b - a) * k; }
  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
  function easeOut(k) { return 1 - (1 - k) * (1 - k); }
  function inRect(r, x, y) { return x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h; }

  // ---------- levels ----------
  var SANDBOX = { id: 'sandbox', kind: 'sandbox', free: true, name: 'Sandbox', brief: 'Every skill is free and nothing can be lost. Poke the meadow and run the season.',
    wolf: 'plain', setup: [], offers: D.COUNTER_OFFERS.concat(['teeth']), budget: 0, par: 0 };
  function allLevels() { return D.PUZZLES.concat([SANDBOX]); }
  function keyOf(l) { return String(l.id); }
  function points() { return level.free ? Infinity : level.budget - W.costOf(bought); }
  function count(id) { var n = 0; for (var i = 0; i < bought.length; i++) if (bought[i] === id) n++; return n; }
  function sky(s) { return FLYER[s] ? 1 : 0; }

  function startLevel(l) {
    level = l; levelKey = keyOf(l); bought = []; phase = 'idle'; card = null; message = ''; messageKind = '';
    actors = []; ghosts = []; prayers = []; popups = []; hands = null; season = null; pending = null;
    hid = {}; slotCursor = {}; pulse = {}; tallyNow = {}; ambient = { t: 0, idx: 0 };
    wolfSprite = l.wolf === 'plain' || l.wolf === 'build' ? 'wolf' : D.WOLF_VARIANTS[l.wolf].sprite;
    committed = W.puzzle(l, [], Kit.hash('open' + levelKey));
    ORDER.forEach(function (s) { barVals[s] = barTarget[s] = committed.wr[s]; });
    computeRest();
    bloom.k = committed.solved ? 1 : 0;
    tutorial = l.id === 1 && !Kit.store.get('bg.' + SLUG + '.tutorialDone', false);
    screen = 'play';
  }

  function pickCount(p) { return p < 0.05 ? 1 : p < 0.12 ? 2 : p < 0.2 ? 3 : p < 0.3 ? 4 : 5; }
  function computeRest() {
    var res = committed;
    ORDER.forEach(function (s) {
      var wr = res.wr[s], p = res.picks[s];
      var lonely = p < 0.05, spill = p > 0.30;
      rest[s] = { n: lonely ? 1 : pickCount(p), upset: wr < 47, crown: wr > 58, bones: wr > 58, flag: wr < 42, shake: wr < 42,
        spill: spill, lonely: lonely, eaten: (s === 'deer' || s === 'rabbit') && wr > 58 };
    });
  }
  function bandsOk() { return ORDER.every(function (s) { return committed.wr[s] >= 43 && committed.wr[s] <= 57; }); }

  // ---------- sprites ----------
  function spriteFor(s, upset) {
    if (s === 'wolf') return wolfSprite === 'wolf' ? (upset ? 'wolf-upset' : 'wolf-happy') : wolfSprite;
    return s + (upset ? '-upset' : '-happy');
  }
  function layoutPos(s, i) {
    var r = rest[s], sp = r.spill ? 2.3 : 1, o = SLOTS[i % 5];
    if (r.lonely) return { x: HOME[s].x, y: HOME[s].y };
    if (FLYER[s]) return { x: HOME[s].x + o[0] * sp * 1.4, y: HOME[s].y + o[1] * sp * 1.8 - 12 * (i % 2) };
    return { x: HOME[s].x + o[0] * sp, y: HOME[s].y + o[1] * sp * 0.6 };
  }
  function slotPos(s) {
    var n = rest[s].n, i = (slotCursor[s] = (slotCursor[s] || 0) + 1) % n, p = layoutPos(s, i);
    hid[s] = hid[s] || {}; hid[s][i] = (hid[s][i] || 0) + 1;
    return { x: p.x, y: p.y, slot: i };
  }
  function release(s, i) { if (hid[s] && hid[s][i] > 0) hid[s][i]--; }

  // ---------- drawing helpers ----------
  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath();
  }
  function outlineText(ctx, text, x, y, font, fill, lw, stroke) {
    ctx.font = font; ctx.lineJoin = 'round'; ctx.lineWidth = lw || 6; ctx.strokeStyle = stroke || COL.ink;
    ctx.strokeText(text, x, y); ctx.fillStyle = fill; ctx.fillText(text, x, y);
  }
  function wrap(ctx, text, maxW) {
    var words = text.split(' '), lines = [], cur = '';
    words.forEach(function (w) {
      var t = cur ? cur + ' ' + w : w;
      if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t;
    });
    if (cur) lines.push(cur);
    return lines;
  }
  function button(ctx, r, label, o) {
    o = o || {};
    var hover = !o.disabled && inRect(r, mouse.x, mouse.y), lip = 7, press = o.pressed ? 4 : 0;
    var fill = o.fill || COL.orange, dark = o.dark || '#c98a1e';
    ctx.save();
    ctx.globalAlpha = o.disabled ? 0.55 : 1;
    ctx.lineWidth = 3; ctx.strokeStyle = COL.ink; ctx.fillStyle = dark;
    rrect(ctx, r.x, r.y + lip - press, r.w, r.h, r.h / 2.4); ctx.fill(); ctx.stroke();
    ctx.fillStyle = hover ? lighten(fill) : fill;
    rrect(ctx, r.x, r.y + press, r.w, r.h - 4, r.h / 2.4); ctx.fill(); ctx.stroke();
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    outlineText(ctx, label, r.x + r.w / 2, r.y + (r.h - 4) / 2 + 2 + press, (o.font || ('26px ' + F_TITLE)), '#fff8e6', 5);
    ctx.restore();
  }
  function lighten(c) { return c === COL.orange ? '#ffca62' : c === COL.pink ? '#ff7db8' : c; }
  function star(ctx, x, y, r, on) {
    ctx.beginPath();
    for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
    ctx.closePath(); ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.strokeStyle = COL.ink;
    ctx.fillStyle = on ? '#ffd23f' : '#d8c9a0'; ctx.fill(); ctx.stroke();
  }
  function cloudStrip(ctx, y0) {
    // Cream cloud bank under the controls, drawn as outlined bumps.
    var i, x;
    ctx.save();
    ctx.lineJoin = 'round';
    for (var pass = 0; pass < 2; pass++) {
      ctx.fillStyle = COL.cream; ctx.strokeStyle = COL.ink; ctx.lineWidth = 6;
      for (i = 0, x = -10; x < WW + 60; i++, x += 74) {
        var r = 34 + ((i * 37) % 11);
        ctx.beginPath(); ctx.arc(x, y0 + 8 + ((i * 53) % 9), r, 0, Math.PI * 2);
        if (pass === 0) ctx.stroke(); else ctx.fill();
      }
      if (pass === 1) { ctx.fillRect(0, y0 + 30, WW, HH - y0); }
      if (pass === 0) { ctx.fillStyle = COL.ink; ctx.fillRect(0, y0 + 40, WW, 6); }
    }
    ctx.restore();
  }

  // ---------- title and level list ----------
  var BTN_PUZZLES = { x: 330, y: 604, w: 300, h: 76 }, BTN_SANDBOX = { x: 650, y: 604, w: 300, h: 76 };
  function drawTitle(ctx) {
    Kit.draw(ctx, 'bg-meadow', 640, 720, { w: 1280, h: 720 });
    Kit.draw(ctx, 'hand3-tweezers', 215, -40, { h: 340, ay: 0, rot: 0.08 });
    Kit.draw(ctx, 'hand3-wrench', 1065, -40, { h: 340, ay: 0, rot: -0.08 });
    // the meadow cast
    var bob = Math.sin(clock * 0.003) * 3;
    Kit.draw(ctx, 'bee-happy', 135, 350 + bob, { h: 80 });
    Kit.draw(ctx, 'hawk-happy', 285, 290 + bob, { h: 90 });
    Kit.draw(ctx, 'deer-happy', 150, 540, { h: 150 });
    Kit.draw(ctx, 'deer-happy', 250, 548, { h: 110 });
    Kit.draw(ctx, 'wolf-happy', 470, 480, { h: 116, flipX: false });
    Kit.draw(ctx, 'wolf-happy', 640, 470 + bob, { h: 190 });
    Kit.draw(ctx, 'crown', 652, 340 + bob, { h: 46 });
    Kit.draw(ctx, 'wolf-happy', 830, 478, { h: 110, flipX: true });
    Kit.draw(ctx, 'giraffe-happy', 1215, 470, { h: 230 });
    Kit.draw(ctx, 'rabbit-upset', 1090, 402, { h: 64, sy: 1 + Math.sin(clock * 0.01) * 0.04 });
    Kit.draw(ctx, 'rabbit-upset', 1165, 460, { h: 78, sy: 1 + Math.sin(clock * 0.01 + 1) * 0.04 });
    Kit.draw(ctx, 'rabbit-upset', 960, 552, { h: 62 });
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    var g1 = ctx.createLinearGradient(0, 40, 0, 120); g1.addColorStop(0, '#ffe36a'); g1.addColorStop(1, '#f0951c');
    var g2 = ctx.createLinearGradient(0, 124, 0, 204); g2.addColorStop(0, '#ff9ccb'); g2.addColorStop(1, '#ff4f9a');
    outlineText(ctx, 'Nerf the Wolves,', 640, 84, '92px ' + F_TITLE, g1, 16);
    outlineText(ctx, 'Buff the Bunnies', 640, 176, '92px ' + F_TITLE, g2, 16);
    // ribbon with the goal
    ctx.save();
    ctx.fillStyle = COL.parch; ctx.strokeStyle = COL.ink; ctx.lineWidth = 4;
    rrect(ctx, 250, 232, 780, 52, 14); ctx.fill(); ctx.stroke();
    ctx.restore();
    ctx.font = '800 24px ' + F_BODY; ctx.fillStyle = COL.ink;
    ctx.fillText('A new wolf is in the meadow. Teach the others to cope.', 640, 259);
    ctx.save();
    ctx.fillStyle = 'rgba(247,243,227,.92)'; ctx.strokeStyle = COL.ink; ctx.lineWidth = 3;
    rrect(ctx, 330, 540, 620, 44, 22); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.font = '800 18px ' + F_BODY; ctx.fillStyle = COL.ink;
    ctx.fillText('Buy skills for the animals, then press Run the season. Tap a skill again to refund it.', 640, 563);
    button(ctx, BTN_PUZZLES, 'Puzzles', { fill: COL.orange, dark: '#c98a1e', font: '34px ' + F_TITLE });
    button(ctx, BTN_SANDBOX, 'Sandbox', { fill: COL.pink, dark: '#c93d7c', font: '34px ' + F_TITLE });
  }

  var LEVEL_CARDS = [];
  (function () {
    for (var i = 0; i < 4; i++) LEVEL_CARDS.push({ x: 90 + i * 280, y: 170, w: 250, h: 360 });
  })();
  var BTN_TITLE = { x: 40, y: 640, w: 200, h: 56 };
  function drawLevels(ctx) {
    Kit.draw(ctx, 'bg-meadow', 640, 720, { w: 1280, h: 720 });
    ctx.fillStyle = 'rgba(247,243,227,.35)'; ctx.fillRect(0, 0, WW, HH);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    outlineText(ctx, 'Pick a puzzle', 640, 96, '66px ' + F_TITLE, '#ffd23f', 12);
    var all = allLevels();
    for (var i = 0; i < all.length; i++) {
      var r = LEVEL_CARDS[i], l = all[i], hover = inRect(r, mouse.x, mouse.y), lift = hover ? -8 : 0;
      Kit.draw(ctx, 'card', r.x + r.w / 2, r.y + r.h + lift, { w: r.w, h: r.h });
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      var title = l.kind === 'sandbox' ? 'Sandbox' : 'Puzzle ' + l.id;
      ctx.font = '34px ' + F_TITLE; ctx.fillStyle = COL.ink; ctx.fillText(title, r.x + r.w / 2, r.y + 84 + lift);
      ctx.font = '800 20px ' + F_BODY; ctx.fillStyle = COL.ink;
      var lines = wrap(ctx, l.name, r.w - 80);
      lines.forEach(function (t, k) { ctx.fillText(t, r.x + r.w / 2, r.y + 132 + k * 24 + lift); });
      if (l.kind === 'counter') ctx.fillText('Counter the wolf', r.x + r.w / 2, r.y + 210 + lift);
      else if (l.kind === 'build') ctx.fillText('Build a wolf', r.x + r.w / 2, r.y + 210 + lift);
      else ctx.fillText('Everything free', r.x + r.w / 2, r.y + 210 + lift);
      if (l.kind !== 'sandbox') {
        var got = stars[keyOf(l)] || 0;
        for (var s = 0; s < 3; s++) star(ctx, r.x + r.w / 2 + (s - 1) * 44, r.y + 262 + lift, 17, s < got);
      } else {
        ctx.font = '800 17px ' + F_BODY; ctx.fillText('No goal', r.x + r.w / 2, r.y + 262 + lift);
      }
    }
    button(ctx, BTN_TITLE, 'Title', { fill: COL.pink, dark: '#c93d7c', font: '26px ' + F_TITLE });
  }

  // ---------- play screen layout ----------
  function skillRect(i) { return { x: 16 + (i % 6) * 148, y: 574 + Math.floor(i / 6) * 74, w: 140, h: 66 }; }
  var RUN = { x: 930, y: 632, w: 332, h: 68 };
  var SKIP = { x: 670, y: 492, w: 116, h: 46 };
  var BTN_LEVELS = { x: 676, y: 14, w: 110, h: 44 };
  var CARD_NEXT = { x: 208, y: 420, w: 184, h: 52 }, CARD_STAY = { x: 208, y: 484, w: 184, h: 44 };
  var CB = { cx: 1040, top: 6, h: 530 };

  function drawMeadowBackdrop(ctx) {
    // Base layer fills the whole canvas; the shifted copy keeps the burrows left of the clipboard.
    Kit.draw(ctx, 'bg-meadow', 640, 720, { w: 1280, h: 720 });
    ctx.save();
    ctx.beginPath(); ctx.rect(0, 0, 880, HH); ctx.clip();
    Kit.draw(ctx, 'bg-meadow', -400, 0, { w: 1280, h: 720, ax: 0, ay: 0 });
    ctx.restore();
  }

  function drawClipboard(ctx) {
    Kit.draw(ctx, 'clipboard', CB.cx, CB.top, { h: CB.h, ay: 0 });
    var y0 = 100, rowH = 56;
    ctx.textBaseline = 'middle';
    for (var i = 0; i < 7; i++) {
      var cy = y0 + i * rowH + rowH / 2;
      ctx.strokeStyle = 'rgba(74,44,23,.22)'; ctx.lineWidth = 2; ctx.setLineDash([6, 6]);
      ctx.beginPath(); ctx.moveTo(850, y0 + (i + 1) * rowH - 1); ctx.lineTo(1232, y0 + (i + 1) * rowH - 1); ctx.stroke(); ctx.setLineDash([]);
      if (i >= ORDER.length) continue;
      var s = ORDER[i], v = barVals[s], inBand = v >= 43 && v <= 57;
      Kit.draw(ctx, spriteFor(s, false), 872, cy + 24, { h: 50 });
      // track
      var bx = 918, bw = 232;
      ctx.fillStyle = '#d9c7a0'; ctx.strokeStyle = COL.ink; ctx.lineWidth = 3;
      rrect(ctx, bx, cy - 9, bw, 18, 9); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#7bd552';
      ctx.fillRect(bx + bw * 0.43, cy - 7, bw * 0.14, 14);
      ctx.strokeStyle = 'rgba(74,44,23,.55)'; ctx.lineWidth = 1.5;
      ctx.strokeRect(bx + bw * 0.43, cy - 7, bw * 0.14, 14);
      var kx = bx + 6 + (bw - 12) * clamp(v, 0, 100) / 100;
      ctx.beginPath(); ctx.arc(kx, cy, 12, 0, Math.PI * 2);
      ctx.fillStyle = inBand ? '#7bd552' : (v > 57 ? '#ff7a4a' : '#ffd23f'); ctx.fill();
      ctx.lineWidth = 3; ctx.strokeStyle = COL.ink; ctx.stroke();
      ctx.textAlign = 'center';
      ctx.font = '26px ' + F_TITLE; ctx.fillStyle = COL.ink;
      ctx.fillText(Math.round(v) + '%', 1196, cy + 1);
    }
    ctx.textAlign = 'center'; ctx.font = '800 14px ' + F_BODY; ctx.fillStyle = 'rgba(74,44,23,.45)';
    ctx.fillText('reserved', 1040, y0 + 6 * rowH + rowH / 2);
  }

  function skillIcons(sk) { return sk.species; }
  function drawSkills(ctx) {
    var n = level.offers.length, pts = points();
    for (var i = 0; i < n; i++) {
      var id = level.offers[i], sk = SK[id], r = skillRect(i), c = count(id), on = c > 0;
      var afford = on || level.free || sk.cost <= pts, locked = phase !== 'idle';
      var hover = !locked && afford && inRect(r, mouse.x, mouse.y);
      var pul = tutorial && bought.length === 0 && phase === 'idle' ? 1 + Math.sin(clock * 0.008 + i * 0.5) * 0.04 : 1;
      var shakeX = denyId === id && denyT > 0 ? Math.sin(denyT * 0.06) * 5 : 0;
      ctx.save();
      ctx.translate(r.x + r.w / 2 + shakeX, r.y + r.h / 2 + (hover ? -3 : 0)); ctx.scale(pul, pul);
      ctx.globalAlpha = (!afford || locked) ? 0.55 : 1;
      ctx.lineWidth = 3; ctx.strokeStyle = COL.ink;
      ctx.fillStyle = on ? '#d99a1f' : '#cfb27a'; rrect(ctx, -r.w / 2, -r.h / 2 + 5, r.w, r.h, 14); ctx.fill(); ctx.stroke();
      ctx.fillStyle = on ? '#ffd45a' : (hover ? '#fff0c8' : COL.parch); rrect(ctx, -r.w / 2, -r.h / 2, r.w, r.h - 3, 14); ctx.fill(); ctx.stroke();
      var ic = skillIcons(sk);
      for (var k = 0; k < ic.length; k++) Kit.draw(ctx, spriteFor(ic[k], false), -r.w / 2 + 28 + k * 36, -r.h / 2 + 36, { h: 32 });
      if (sk.kind === 'team') { ctx.beginPath(); ctx.moveTo(-r.w / 2 + 46, -r.h / 2 + 18); ctx.lineTo(-r.w / 2 + 52, -r.h / 2 + 18); ctx.stroke(); }
      // cost badge
      ctx.beginPath(); ctx.arc(r.w / 2 - 20, -r.h / 2 + 20, 14, 0, Math.PI * 2); ctx.fillStyle = COL.orange; ctx.fill(); ctx.stroke();
      ctx.fillStyle = COL.ink; ctx.font = '19px ' + F_TITLE; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(level.free ? '0' : String(sk.cost), r.w / 2 - 20, -r.h / 2 + 21);
      ctx.font = '800 14px ' + F_BODY; ctx.fillStyle = COL.ink;
      var nm = sk.short || sk.name, lines = wrap(ctx, nm, r.w - 14);
      if (lines.length === 1) ctx.fillText(lines[0], 0, r.h / 2 - 16);
      else lines.slice(0, 2).forEach(function (t, q) { ctx.fillText(t, 0, r.h / 2 - 25 + q * 14); });
      if (sk.repeat) {
        if (c > 0) {
          ctx.fillStyle = COL.pink; ctx.beginPath(); ctx.arc(-r.w / 2 + 14, r.h / 2 - 14, 11, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          ctx.fillStyle = '#fff'; ctx.font = '22px ' + F_TITLE; ctx.fillText('−', -r.w / 2 + 14, r.h / 2 - 15);
        }
        if (c > 0) { ctx.fillStyle = COL.ink; ctx.font = '20px ' + F_TITLE; ctx.textAlign = 'right'; ctx.fillText('×' + c, r.w / 2 - 8, r.h / 2 - 15); }
      } else if (on) {
        ctx.fillStyle = COL.ink; ctx.font = '20px ' + F_TITLE; ctx.textAlign = 'right'; ctx.fillText('✓', r.w / 2 - 8, r.h / 2 - 15);
      }
      ctx.restore();
    }
  }

  function drawTopBar(ctx) {
    ctx.save();
    ctx.fillStyle = 'rgba(246,227,180,.94)'; ctx.strokeStyle = COL.ink; ctx.lineWidth = 3;
    rrect(ctx, 182, 8, 482, 84, 16); ctx.fill(); ctx.stroke();
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.font = '28px ' + F_TITLE; ctx.fillStyle = COL.ink;
    ctx.fillText(level.kind === 'sandbox' ? 'Sandbox' : 'Puzzle ' + level.id + ': ' + level.name, 198, 29);
    ctx.font = '800 16px ' + F_BODY;
    ctx.fillStyle = messageKind === 'bad' ? '#b0306a' : (messageKind === 'good' ? '#2f7a2a' : COL.ink);
    var txt = message || level.brief, lines = wrap(ctx, txt, 450);
    lines.slice(0, 2).forEach(function (t, k) { ctx.fillText(t, 198, 56 + k * 20); });
    ctx.restore();
    button(ctx, BTN_LEVELS, 'Levels', { fill: COL.pink, dark: '#c93d7c', font: '22px ' + F_TITLE, disabled: phase !== 'idle' });
  }

  function drawControls(ctx) {
    var pts = points();
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    var label = level.free ? 'Free play' : 'Points ' + (level.budget - pts) + ' / ' + level.budget;
    // Points are spent, so "Points 3 / 6" shows points left over total.
    if (!level.free) label = 'Points ' + pts + ' / ' + level.budget;
    outlineText(ctx, label, 1096, 596, '40px ' + F_TITLE, '#fff8e6', 8);
    var busy = phase !== 'idle';
    button(ctx, RUN, 'Run the season', { fill: COL.orange, dark: '#c98a1e', font: '34px ' + F_TITLE, disabled: busy });
    if (phase === 'season') button(ctx, SKIP, 'Skip', { fill: COL.pink, dark: '#c93d7c', font: '24px ' + F_TITLE });
  }

  // ---------- meadow scene ----------
  function drawShadow(ctx, x, y, w) {
    ctx.fillStyle = 'rgba(40,60,20,.22)'; ctx.beginPath(); ctx.ellipse(x, y - 2, w, w * 0.22, 0, 0, Math.PI * 2); ctx.fill();
  }
  function animalDraw(ctx, name, s, x, y, o) {
    o = o || {};
    var h = HEIGHT[s] * (o.s || 1);
    if (!FLYER[s] && !o.noShadow) drawShadow(ctx, x, y, h * 0.34);
    var dy = o.air ? -o.air : 0;
    Kit.draw(ctx, name, x, y + dy, { h: h, flipX: !!o.flip, rot: o.rot || 0, sx: o.sx || 1, sy: o.sy || 1, alpha: o.a == null ? 1 : o.a,
      tint: o.tint, tintAmount: o.tintAmount });
  }

  function tintForUpset(s) { return s === 'wolf' && wolfSprite !== 'wolf' ? { tint: '#ff3d2e', tintAmount: 0.18 } : {}; }

  function drawEaten(ctx) {
    ['rabbit', 'deer'].forEach(function (s) {
      if (!rest[s].eaten) return;
      var hp = HOME[s];
      ctx.save(); ctx.fillStyle = 'rgba(150,104,52,.6)'; ctx.strokeStyle = 'rgba(74,44,23,.5)'; ctx.lineWidth = 2;
      [[-70, 8, 46], [60, 16, 38], [-10, 30, 52], [90, -4, 30]].forEach(function (p) {
        ctx.beginPath(); ctx.ellipse(hp.x + p[0], hp.y + p[1], p[2], p[2] * 0.36, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      });
      ctx.restore();
    });
  }
  var FLOWERS = [];
  (function () {
    var r = Kit.rng(77), cols = ['#ff7aa8', '#ffd23f', '#ffffff', '#ff8a4a', '#c78cff'];
    for (var i = 0; i < 44; i++) FLOWERS.push({ x: 30 + r() * 740, y: 330 + r() * 210, c: cols[i % 5], d: r() * 0.5, s: 7 + r() * 6 });
  })();
  function drawFlowers(ctx) {
    if (bloom.k <= 0.01) return;
    FLOWERS.forEach(function (f) {
      var k = clamp((bloom.k - f.d) / 0.5, 0, 1); if (k <= 0) return;
      var kk = Kit.ease.outBack ? Kit.ease.outBack(k) : k, rr = f.s * kk;
      ctx.save(); ctx.translate(f.x, f.y);
      ctx.strokeStyle = COL.ink; ctx.lineWidth = 2; ctx.fillStyle = f.c;
      for (var p = 0; p < 5; p++) { var a = p * Math.PI * 2 / 5; ctx.beginPath(); ctx.arc(Math.cos(a) * rr * 0.7, Math.sin(a) * rr * 0.7, rr * 0.55, 0, 7); ctx.fill(); ctx.stroke(); }
      ctx.fillStyle = '#ffe36a'; ctx.beginPath(); ctx.arc(0, 0, rr * 0.4, 0, 7); ctx.fill(); ctx.stroke();
      ctx.restore();
    });
  }

  function drawLinks(ctx) {
    var drawn = {};
    bought.forEach(function (id) {
      var sk = SK[id];
      if (drawn[id]) return; drawn[id] = 1;
      if (sk.species.length === 2) {
        var a = HOME[sk.species[0]], b = HOME[sk.species[1]], ay = a.y - HEIGHT[sk.species[0]] * 0.5, by = b.y - HEIGHT[sk.species[1]] * 0.5;
        ctx.save(); ctx.lineCap = 'round';
        ctx.strokeStyle = COL.ink; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(a.x, ay); ctx.lineTo(b.x, by); ctx.stroke();
        ctx.strokeStyle = '#fff8e6'; ctx.lineWidth = 6; ctx.setLineDash([14, 12]); ctx.lineDashOffset = -clock * 0.03;
        ctx.beginPath(); ctx.moveTo(a.x, ay); ctx.lineTo(b.x, by); ctx.stroke(); ctx.restore();
      } else {
        var h = HOME[sk.species[0]];
        ctx.save(); ctx.strokeStyle = '#fff8e6'; ctx.lineWidth = 5; ctx.setLineDash([10, 8]); ctx.lineDashOffset = -clock * 0.03;
        ctx.beginPath(); ctx.ellipse(h.x, h.y - 8, 92, 30, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
      }
    });
  }

  function drawScene(ctx, dt) {
    drawEaten(ctx);
    drawFlowers(ctx);
    drawLinks(ctx);
    // signpost and ghost queue
    Kit.draw(ctx, 'signpost', SIGN.x, SIGN.y, { h: 120 });
    var items = [];
    ORDER.forEach(function (s) {
      var r = rest[s], n = r.n;
      if (r.bones) [[-70, 18], [64, 22], [0, 40]].forEach(function (p, bi) { items.push({ y: HOME[s].y + p[1] - 1, f: function () { Kit.draw(ctx, 'bone', HOME[s].x + p[0], HOME[s].y + p[1], { h: 26, rot: bi * 0.7 }); } }); });
      if (r.flag && s === 'rabbit') items.push({ y: HOME[s].y + 20, f: function () { Kit.draw(ctx, 'flag', HOME[s].x + 84, HOME[s].y - 10, { h: 74, rot: Math.sin(clock * 0.005) * 0.06 }); } });
      if (r.lonely) items.push({ y: HOME[s].y + 30, f: function () {
        var tx = HOME[s].x - 110 + ((clock * 0.04) % 220);
        Kit.draw(ctx, 'tumbleweed', tx, HOME[s].y + 28, { h: 40, rot: clock * 0.01 }); } });
      for (var i = 0; i < n; i++) {
        (function (i) {
          if (hid[s] && hid[s][i] > 0) return;
          var p = layoutPos(s, i), bobA = tn('bobAmount'), seed = i * 1.7 + s.length;
          var by = Math.sin(clock * 0.004 + seed) * bobA * (FLYER[s] ? 2 : 1);
          var pl = pulse[s] ? pulse[s] : 0;
          var o = { s: (r.crown ? 1.15 : 1) * (i ? 0.94 : 1) * (1 + pl * 0.2), air: FLYER[s] ? by : 0, sy: 1 + Math.sin(clock * 0.006 + seed) * 0.015,
            flip: (s === 'giraffe' || s === 'deer') ? false : false };
          var up = r.upset;
          if (up && r.shake) p = { x: p.x + Math.sin(clock * 0.06 + seed) * 2.5, y: p.y };
          var tt = up ? tintForUpset(s) : {};
          o.tint = tt.tint; o.tintAmount = tt.tintAmount;
          items.push({ y: p.y + (FLYER[s] ? 0 : 0), f: function () {
            animalDraw(ctx, spriteFor(s, up), s, p.x, p.y + (FLYER[s] ? 0 : by * 0.3), o);
            if (r.crown && i === 0) Kit.draw(ctx, 'crown', p.x + 6, p.y - HEIGHT[s] * o.s * 0.9, { h: 36 });
          } });
        })(i);
      }
    });
    actors.forEach(function (ac) {
      var pa = ac.pa, pb = ac.pb, a = ac.enc.a, b = ac.enc.b;
      if (pb.vis) items.push({ y: pb.y, f: function () { animalDraw(ctx, spriteFor(b, ac.bUpset), b, pb.x, pb.y, { flip: pb.flip, rot: pb.rot, sx: pb.sx, sy: pb.sy, air: pb.air, a: pb.a, s: 1 }); } });
      if (pa.vis) items.push({ y: pa.y, f: function () {
        if (ac.speed) { ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 4; ctx.lineCap = 'round';
          var d = pa.flip ? 1 : -1;
          for (var q = 0; q < 3; q++) { ctx.beginPath(); ctx.moveTo(pa.x + d * (50 + q * 8), pa.y - 20 - q * 22); ctx.lineTo(pa.x + d * (96 + q * 10), pa.y - 20 - q * 22); ctx.stroke(); }
          ctx.restore(); }
        animalDraw(ctx, spriteFor(a, ac.aUpset), a, pa.x, pa.y, { flip: pa.flip, rot: pa.rot, sx: pa.sx, sy: pa.sy, air: pa.air, s: 1 }); } });
    });
    items.sort(function (p, q) { return p.y - q.y; });
    items.forEach(function (it) { it.f(); });
    // effects on top
    actors.forEach(function (ac) {
      if (ac.dust) Kit.draw(ctx, 'dust', ac.dust.x, ac.dust.y + 16, { h: 70 + 70 * Math.min(1, ac.dust.k * 3), alpha: 1 - clamp((ac.dust.k - 0.6) / 0.4, 0, 1) });
      if (ac.stars) {
        for (var q = 0; q < 3; q++) { var an = clock * 0.012 + q * 2.1; star(ctx, ac.stars.x + Math.cos(an) * 26, ac.stars.y - 66 + Math.sin(an) * 8, 8, true); }
      }
    });
    // ghosts
    var qn = 0; ghosts.forEach(function (gh) { if (gh.state === 'queue') qn++; });
    var step = Math.min(30, 430 / Math.max(1, ghosts.length));
    ghosts.forEach(function (gh, gi) {
      var tx = SIGN.x - 48 - gi * step, ty = SIGN.y - 20 + Math.sin(clock * 0.004 + gi) * 4;
      var gx, gy;
      if (gh.state === 'rise') {
        var k = clamp(gh.t / 1500, 0, 1);
        gx = lerp(gh.x0, tx, easeOut(k)); gy = lerp(gh.y0, ty, k) - Math.sin(k * Math.PI) * 70;
        if (k >= 1) gh.state = 'queue';
      } else { gh.cx = lerp(gh.cx == null ? tx : gh.cx, tx, 0.1); gx = gh.cx; gy = ty; }
      gh.cx = gx;
      Kit.draw(ctx, 'ghost', gx, gy, { h: 58, alpha: 0.92 });
      if (gh.state === 'queue') Kit.draw(ctx, spriteFor(gh.next, false), gx, gy - 52, { h: 24 });
    });
    // tally pills (this season)
    if (phase === 'season' || season) {
      ORDER.forEach(function (s) {
        var n = tallyNow[s] || 0; if (!n) return;
        var x = HOME[s].x, y = HOME[s].y - HEIGHT[s] * 1.15 - (FLYER[s] ? 10 : 6);
        ctx.save(); ctx.translate(x, y);
        ctx.fillStyle = '#fff8e6'; ctx.strokeStyle = COL.ink; ctx.lineWidth = 3;
        rrect(ctx, -26, -14, 52, 28, 14); ctx.fill(); ctx.stroke();
        ctx.fillStyle = COL.ink; ctx.font = '19px ' + F_TITLE; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('✓' + n, 0, 1); ctx.restore();
      });
    }
    // popups
    popups.forEach(function (p) {
      var k = p.t / p.life; ctx.save(); ctx.globalAlpha = 1 - clamp((k - 0.7) / 0.3, 0, 1);
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      outlineText(ctx, p.text, p.x, p.y - k * 36, '24px ' + F_TITLE, p.color, 6); ctx.restore();
    });
  }

  function drawHands(ctx) {
    if (!hands) return;
    hands.list.forEach(function (h) {
      Kit.draw(ctx, h.sprite, h.x, h.y, { h: 360, ay: 0, rot: h.rot, alpha: 1 });
    });
  }

  function drawPrayers(ctx) {
    prayers.forEach(function (p) {
      if (p.delay > 0) return;
      var k = clamp(p.t / tn('prayerMs'), 0, 1), a = clamp(p.t / 300, 0, 1) * (1 - clamp((k - 0.85) / 0.15, 0, 1));
      var y = p.y - easeOut(k) * 50, pop = Kit.ease.outBack ? Kit.ease.outBack(clamp(p.t / 350, 0, 1)) : 1;
      ctx.save(); ctx.globalAlpha = a; ctx.translate(p.x, y); ctx.scale(pop, pop);
      Kit.draw(ctx, 'scroll', 0, 0, { h: 50, rot: Math.sin(clock * 0.006 + p.x) * 0.08 });
      ctx.font = '800 15px ' + F_BODY;
      var lines = wrap(ctx, p.text, 214), bh = 22 + lines.length * 19;
      ctx.fillStyle = COL.parch; ctx.strokeStyle = COL.ink; ctx.lineWidth = 3;
      rrect(ctx, -118, -bh - 34, 236, bh, 14); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-10, -34); ctx.lineTo(0, -22); ctx.lineTo(10, -34); ctx.closePath(); ctx.fillStyle = COL.parch; ctx.fill(); ctx.stroke();
      ctx.fillStyle = COL.parch; ctx.fillRect(-9, -36, 18, 4);
      Kit.draw(ctx, spriteFor(p.species, false), -100, -bh - 28, { h: 34 });
      ctx.fillStyle = COL.ink; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      lines.forEach(function (t, i) { ctx.fillText(t, -78, -bh - 34 + 22 + i * 19); });
      ctx.restore();
    });
  }

  function drawCard(ctx) {
    if (!card) return;
    var k = Kit.ease.outBack ? Kit.ease.outBack(clamp(card.t / 400, 0, 1)) : 1;
    ctx.save(); ctx.translate(300, 300); ctx.scale(k, k); ctx.translate(-300, -300);
    Kit.draw(ctx, 'card', 300, 540, { h: 520 });
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    outlineText(ctx, 'Balanced!', 300, 160, '54px ' + F_TITLE, '#ffd23f', 10);
    for (var s = 0; s < 3; s++) star(ctx, 300 + (s - 1) * 56, 232, 24, s < card.stars);
    ctx.font = '800 18px ' + F_BODY; ctx.fillStyle = COL.ink;
    ctx.fillText('Points unspent: ' + Math.max(0, level.budget - card.cost), 300, 290);
    ctx.fillText('Par is ' + level.par + ' points spent', 300, 316);
    ctx.font = '800 15px ' + F_BODY;
    ctx.fillText(card.stars === 3 ? 'Perfect. The meadow is in bloom.' : 'Spend fewer points for more stars.', 300, 344);
    var hasNext = nextLevel() != null;
    button(ctx, CARD_NEXT, hasNext ? 'Next' : 'Levels', { fill: COL.orange, dark: '#c98a1e', font: '26px ' + F_TITLE });
    button(ctx, CARD_STAY, 'Stay', { fill: COL.pink, dark: '#c93d7c', font: '22px ' + F_TITLE });
    ctx.restore();
  }
  function nextLevel() {
    var i = D.PUZZLES.indexOf(level);
    return i >= 0 && i + 1 < D.PUZZLES.length ? D.PUZZLES[i + 1] : null;
  }

  // ---------- encounters ----------
  function nearestBurrow(p) { return BURROWS.reduce(function (best, b) { return Math.abs(b.x - p.x) + Math.abs(b.y - p.y) < Math.abs(best.x - p.x) + Math.abs(best.y - p.y) ? b : best; }, BURROWS[0]); }
  function spawnActor(enc, amb) {
    var A = slotPos(enc.a), T = slotPos(enc.b);
    var f = enc.kind === 'hunt' ? 1 : enc.kind === 'escape' ? 1.5 : 1.4;
    actors.push({ enc: enc, amb: amb, t: 0, dur: tn('encMs') * f, A: A, T: T, flags: {}, kind: enc.kind,
      aUpset: false, bUpset: enc.kind === 'hunt',
      pa: { x: A.x, y: A.y, rot: 0, sx: 1, sy: 1, vis: true, flip: false, air: 0 }, pb: { x: T.x, y: T.y, rot: 0, sx: 1, sy: 1, vis: true, flip: false, air: 0, a: 1 },
      Bu: enc.b === 'rabbit' ? nearestBurrow(T) : null });
  }
  function recordWin(ac) {
    if (ac.amb) return;
    var w = ac.enc.winner;
    tallyNow[w] = (tallyNow[w] || 0) + 1;
    if (season) season.resolved++;
  }
  function stepActor(ac, dtS) {
    ac.t += dtS;
    var u = Math.min(1, ac.t / ac.dur), A = ac.A, T = ac.T, pa = ac.pa, pb = ac.pb, enc = ac.enc, a = enc.a, b = enc.b, fl = ac.flags;
    var dir = T.x >= A.x ? 1 : -1, k;
    pa.flip = dir < 0; pb.flip = dir > 0; ac.speed = false; ac.dust = null; ac.stars = null;
    pa.sx = 1; pa.sy = 1; pa.rot = 0;
    if (ac.kind === 'hunt') {
      var at = { x: T.x - dir * 40, y: T.y };
      if (u < 0.4) {
        k = u / 0.4; k = k * k;
        pa.x = lerp(A.x, at.x, k); pa.y = lerp(A.y, at.y, k) - Math.abs(Math.sin(k * Math.PI * 4)) * 14; pa.sx = 1.12; pa.sy = 0.92; ac.speed = true;
        pb.x = T.x + Math.sin(ac.t * 0.06) * 3; pb.sy = 1 + Math.sin(ac.t * 0.05) * 0.04;
      } else {
        if (!fl.hit) {
          fl.hit = 1; play('pounce'); Kit.burst(T.x, T.y - 40, { n: 10, color: '#ffe14b', speed: 200, life: 500, gravity: 200, size: 5 }); Kit.shake(3, 140);
          recordWin(ac);
          ghosts.push({ x0: T.x, y0: T.y - 40, t: 0, state: 'rise', next: pickNext(), cx: null });
          if (ghosts.length > (season ? 40 : 8)) ghosts.shift();
          play('ghost', { gain: 0.7 });
        }
        pb.vis = false;
        if (u < 0.7) { pa.vis = false; ac.dust = { x: T.x, y: T.y, k: (u - 0.4) / 0.3 * 0.6 }; }
        else { pa.vis = true; k = (u - 0.7) / 0.3; pa.x = lerp(at.x, A.x, k); pa.y = lerp(at.y, A.y, k) - Math.abs(Math.sin(k * Math.PI * 3)) * 8; ac.dust = { x: T.x, y: T.y, k: 0.6 + k * 0.4 }; }
      }
    } else if (ac.kind === 'escape') {
      var burrow = ac.Bu, land = burrow || { x: T.x - dir * 30, y: T.y };
      var hawk = b === 'hawk';
      if (u < 0.45) {
        k = u / 0.45; k = k * k;
        pa.x = lerp(A.x, land.x - dir * 30, k); pa.y = lerp(A.y, land.y, k) - Math.abs(Math.sin(k * Math.PI * 4)) * 12; pa.sx = 1.1; pa.sy = 0.93; ac.speed = true;
      }
      if (hawk) {
        if (u > 0.2 && !fl.esc) { fl.esc = 1; play('escape'); }
        k = u < 0.25 ? easeOut(u / 0.25) : (u < 0.75 ? 1 : 1 - (u - 0.75) / 0.25);
        pb.air = 150 * clamp(k, 0, 1); pb.y = T.y; pb.x = T.x + Math.sin(ac.t * 0.01) * 6;
      } else {
        if (u < 0.2) { pb.x = T.x + Math.sin(ac.t * 0.06) * 3; }
        else if (u < 0.38) { if (!fl.esc) { fl.esc = 1; play('escape'); } k = (u - 0.2) / 0.18; pb.x = lerp(T.x, burrow.x, k); pb.y = lerp(T.y, burrow.y, k) - Math.sin(k * Math.PI) * 24; pb.sy = 0.85; }
        else if (u < 0.8) pb.vis = false;
        else { k = (u - 0.8) / 0.2; pb.vis = true; pb.x = lerp(burrow.x, T.x, k); pb.y = lerp(burrow.y, T.y, k); }
      }
      if (u >= 0.45) {
        if (!fl.hit) { fl.hit = 1; Kit.burst(land.x, land.y - 10, { n: 8, color: '#e6d3a0', speed: 150, life: 500, gravity: 100, size: 5 }); Kit.shake(2, 100); recordWin(ac); ac.aUpset = true; }
        if (u < 0.72) { pa.x = land.x - dir * 30; pa.y = land.y; pa.rot = dir * 1.3; ac.stars = { x: pa.x, y: pa.y }; }
        else { k = (u - 0.72) / 0.28; pa.x = lerp(land.x - dir * 30, A.x, k); pa.y = lerp(land.y, A.y, k); pa.rot = dir * 1.3 * (1 - clamp(k * 3, 0, 1)); }
      }
    } else { // fend
      var at2 = { x: T.x - dir * 40, y: T.y };
      if (u < 0.3) {
        k = u / 0.3; k = k * k; pa.x = lerp(A.x, at2.x, k); pa.y = lerp(A.y, at2.y, k) - Math.abs(Math.sin(k * Math.PI * 4)) * 12; pa.sx = 1.1; pa.sy = 0.93; ac.speed = true;
      } else {
        if (!fl.hit) { fl.hit = 1; recordWin(ac); ac.aUpset = true; play('escape', { gain: 0.6 }); Kit.burst(at2.x, at2.y - 40, { n: 8, color: b === 'bee' ? '#ffd23f' : '#ffffff', speed: 190, life: 450, gravity: 100, size: 5 }); Kit.shake(2, 100); }
        if (b === 'bee') {
          var fleeX = -120;
          if (u < 0.75) { k = (u - 0.3) / 0.45; pa.x = lerp(at2.x, fleeX, k); pa.y = at2.y; pa.flip = true; pb.x = pa.x + 70; pb.y = pa.y; pb.air = 60 + Math.sin(ac.t * 0.02) * 10; }
          else { k = (u - 0.75) / 0.25; pa.x = lerp(fleeX, A.x, k); pa.y = lerp(at2.y, A.y, k); pa.flip = false; pb.x = lerp(at2.x - 40, T.x, k); pb.y = T.y; pb.air = lerp(60, 0, k); }
        } else if (b === 'deer') {
          if (u < 0.6) { k = (u - 0.3) / 0.3; pb.x = lerp(T.x, T.x - dir * 130, easeOut(k)); pa.x = at2.x; pa.y = at2.y; pa.sy = 0.35; pa.sx = 1.25; pa.rot = dir * 0.2; pb.sx = 1.06; }
          else if (u < 0.8) { k = (u - 0.6) / 0.2; pb.x = lerp(T.x - dir * 130, T.x, k); pa.x = at2.x; pa.y = at2.y; pa.sy = 0.35 + 0.65 * k; pa.sx = 1.25 - 0.25 * k; }
          else { k = (u - 0.8) / 0.2; pb.x = T.x; pa.x = lerp(at2.x, A.x, k); pa.y = lerp(at2.y, A.y, k); }
        } else {
          if (u < 0.75) { k = (u - 0.3) / 0.45; pa.x = lerp(at2.x, at2.x - dir * 260, k); pa.y = at2.y - Math.sin(k * Math.PI) * 190; pa.rot = -dir * k * 9; pb.rot = -dir * 0.12 * (1 - k); }
          else { k = (u - 0.75) / 0.25; pa.x = lerp(at2.x - dir * 260, A.x, k); pa.y = lerp(at2.y, A.y, k); pa.rot = 0; }
        }
      }
    }
    return u >= 1;
  }
  function pickNext() {
    var r = drng(), acc = 0, picks = (pending || committed).picks;
    for (var i = 0; i < ORDER.length; i++) { acc += picks[ORDER[i]]; if (r <= acc) return ORDER[i]; }
    return 'wolf';
  }
  function finishActor(ac) { release(ac.enc.a, ac.A.slot); release(ac.enc.b, ac.T.slot); }

  // ---------- the run ----------
  function effectLabel(e) {
    if (e.t === 'stat') return (e.d > 0 ? '+' : '') + e.d + ' ' + e.k.toUpperCase();
    return '×' + e.x + ' vs ' + e.b;
  }
  function computeTouches() {
    var list = [], seen = {};
    function add(species, tool, label) { var key = species + tool; if (seen[key]) return; seen[key] = 1; list.push({ species: species, tool: tool, label: label }); }
    for (var i = bought.length - 1; i >= 0; i--) {
      var sk = SK[bought[i]];
      if (sk.kind === 'team') { add(sk.species[0], 'tweezers', sk.name); add(sk.species[1], 'wrench', sk.name); }
      else sk.fx.forEach(function (e) {
        var inc = e.t === 'stat' ? e.d > 0 : e.x > 1, sp = e.t === 'stat' ? e.s : e.a;
        add(sp, inc ? 'wrench' : 'tweezers', effectLabel(e));
      });
    }
    var tw = list.filter(function (t) { return t.tool === 'tweezers'; })[0], wr = list.filter(function (t) { return t.tool === 'wrench'; })[0];
    return [tw, wr].filter(Boolean);
  }
  function nextHandPair() {
    var names = D.HANDS, pick;
    if (handCount === 0) pick = names[0];
    else if (handCount < names.length) pick = names[handCount];
    else { do { pick = names[Math.floor(Math.random() * names.length)]; } while (pick === lastHand); }
    handCount++; lastHand = pick; return pick;
  }
  function run() {
    if (phase !== 'idle' || screen !== 'play' || card) { if (phase === 'idle' && card) card = null; else return; }
    if (phase !== 'idle') return;
    phase = 'hands'; card = null; message = ''; messageKind = '';
    tutorial = false; Kit.store.set('bg.' + SLUG + '.tutorialDone', true);
    var rerun = (runCounts[levelKey] || 0) > 0;
    runCounts[levelKey] = (runCounts[levelKey] || 0) + 1; runTotal++;
    pending = W.puzzle(level, bought, (Kit.hash('run' + levelKey) + runTotal * 7919) >>> 0, committed.wr);
    pending.rerun = rerun;
    prayers = []; ghosts = []; actors = []; hid = {}; slotCursor = {}; tallyNow = {}; popups = [];
    play('run');
    var touches = computeTouches();
    if (touches.length) startHands(touches); else startSeason();
  }
  function startHands(touches) {
    var pair = nextHandPair(), list = [];
    touches.forEach(function (t, i) {
      var p = HOME[t.species], x = clamp(p.x + (touches.length > 1 ? (i ? 56 : -56) : 0), 70, 740);
      var tipY = p.y - HEIGHT[t.species] * 0.55 - (FLYER[t.species] ? 0 : 0);
      list.push({ sprite: pair + '-' + t.tool, x: x, y: -420, y0: tipY - 345, rot: t.tool === 'wrench' ? -0.06 : 0.06, species: t.species, label: t.label, tool: t.tool, touched: false });
    });
    hands = { list: list, t: 0, played: false };
  }
  function stepHands(dt) {
    var d1 = tn('handDownMs'), d2 = tn('handHoldMs'), d3 = tn('handUpMs');
    hands.t += dt;
    if (!hands.played) { hands.played = true; play('hand'); }
    hands.list.forEach(function (h) {
      var t = hands.t;
      if (t < d1) { var k = t / d1; h.y = lerp(-420, h.y0, Kit.ease.outBack ? Kit.ease.outBack(k) : k); }
      else if (t < d1 + d2) { h.y = h.y0 + Math.sin((t - d1) * 0.03) * 2; if (!h.touched && t > d1 + 60) {
        h.touched = true; play('adjust'); pulse[h.species] = 1; Kit.burst(HOME[h.species].x, HOME[h.species].y - HEIGHT[h.species] * 0.5, { n: 10, color: h.tool === 'wrench' ? '#ffd23f' : '#9be7ff', speed: 160, life: 500, gravity: 0, size: 5 });
        popups.push({ x: HOME[h.species].x, y: HOME[h.species].y - HEIGHT[h.species] - 20, t: 0, life: 1500, text: h.label, color: h.tool === 'wrench' ? '#ffe36a' : '#aeeaff' }); } }
      else { var k2 = clamp((t - d1 - d2) / d3, 0, 1); h.y = lerp(h.y0, -440, k2 * k2); }
    });
    if (hands.t >= d1 + d2 + d3) { hands = null; startSeason(); }
  }
  function startSeason() {
    phase = 'season';
    var rerun = pending.rerun;
    season = { t: 0, idx: 0, span: tn('seasonMs') * 0.8, speed: rerun ? tn('fastMult') : 1, resolved: 0, from: {}, to: pending.wr };
    ORDER.forEach(function (s) { season.from[s] = barVals[s]; });
    ambient = { t: 0, idx: 0 };
  }
  function stepSeason(dt) {
    var dtS = dt * season.speed;
    season.t += dtS;
    while (season.idx < pending.encounters.length && season.t >= season.idx * season.span / pending.encounters.length) { spawnActor(pending.encounters[season.idx], false); season.idx++; }
    var prog = season.resolved / pending.encounters.length;
    ORDER.forEach(function (s) { barTarget[s] = lerp(season.from[s], season.to[s], easeOut(prog)); });
    if (season.idx >= pending.encounters.length && actors.length === 0) endSeason();
  }
  function skipSeason() {
    if (phase !== 'season') return;
    for (var i = season.idx; i < pending.encounters.length; i++) tallyNow[pending.encounters[i].winner] = (tallyNow[pending.encounters[i].winner] || 0) + 1;
    actors.forEach(function (ac) { if (!ac.flags.hit && !ac.amb) tallyNow[ac.enc.winner] = (tallyNow[ac.enc.winner] || 0) + 1; });
    var have = ghosts.length;
    for (var j = season.idx; j < pending.encounters.length; j++) if (pending.encounters[j].kind === 'hunt') ghosts.push({ x0: SIGN.x, y0: SIGN.y, t: 1500, state: 'queue', next: pickNext(), cx: null });
    actors = []; hid = {}; endSeason();
  }
  function endSeason() {
    phase = 'idle'; var res = pending; committed = res; season = null; ambient = { t: 0, idx: 0 };
    ORDER.forEach(function (s) { barTarget[s] = res.wr[s]; });
    computeRest(); hid = {};
    var sol = res.solved;
    if (sol) {
      message = level.free ? 'Balanced! Every animal is in the green.' : 'Balanced!'; messageKind = 'good';
      play('balanced'); bloom.k = 0; Kit.tween(bloom, { k: 1 }, 1800, 'linear');
      if (!level.free) {
        var st = res.cost <= level.par ? 3 : res.cost <= level.par + 1 ? 2 : 1;
        if (st > (stars[levelKey] || 0)) { stars[levelKey] = st; Kit.store.set('bg.' + SLUG + '.stars', stars); }
        card = { t: 0, stars: st, cost: res.cost };
      }
      for (var q = 0; q < 14; q++) Kit.burst(100 + Math.random() * 600, 200 + Math.random() * 150, { n: 4, color: ['#ffd23f', '#ff5fa2', '#7bd552', '#5cc3f2'][q % 4], speed: 220, life: 900, gravity: 300, size: 5 });
    } else {
      var worst = ORDER.slice().sort(function (p, q2) { return Math.abs(res.wr[q2] - 50) - Math.abs(res.wr[p] - 50); })[0];
      message = PLURAL[worst] + ' are still at ' + Math.round(res.wr[worst]) + '%. Refund a skill and try another.'; messageKind = 'bad';
      if (level.free) message = PLURAL[worst] + ' are at ' + Math.round(res.wr[worst]) + '%. Keep poking.';
      play('notyet'); bloom.k = 0;
    }
    res.prayers.forEach(function (p, i) {
      var hp = HOME[p.species];
      prayers.push({ x: clamp(hp.x + (i ? 40 : 0), 130, 660), y: clamp(hp.y - HEIGHT[p.species] - 24, 190, 470), t: 0, delay: 300 + i * 1100, text: p.text, species: p.species, played: false });
    });
    if (level.free) { /* sandbox: no card */ }
  }

  // ---------- frame update ----------
  function update(dt) {
    clock += dt;
    if (denyT > 0) denyT -= dt;
    ORDER.forEach(function (s) { if (pulse[s]) { pulse[s] = Math.max(0, pulse[s] - dt / 500); } });
    if (screen === 'play') {
      ORDER.forEach(function (s) { barVals[s] += (barTarget[s] - barVals[s]) * clamp(dt * tn('barSlide'), 0, 1); });
      if (hands) stepHands(dt);
      else if (phase === 'season') stepSeason(dt);
      else if (phase === 'idle') stepAmbient(dt);
      var dtS = phase === 'season' && season ? dt * season.speed : dt;
      for (var i = actors.length - 1; i >= 0; i--) if (stepActor(actors[i], dtS)) { finishActor(actors[i]); actors.splice(i, 1); }
      ghosts.forEach(function (gh) { gh.t += dt; });
      prayers.forEach(function (p) {
        if (p.delay > 0) { p.delay -= dt; if (p.delay <= 0) play('prayer'); return; } p.t += dt;
      });
      prayers = prayers.filter(function (p) { return p.t < tn('prayerMs'); });
      popups.forEach(function (p) { p.t += dt; }); popups = popups.filter(function (p) { return p.t < p.life; });
      if (card) card.t += dt;
    }
    if (bedStarted) {
      nextBird -= dt;
      if (nextBird <= 0) { play('bird', { midi: Math.floor(Math.random() * 4) }); nextBird = 3000 + Math.random() * 3000; }
    }
  }
  function stepAmbient(dt) {
    var enc = committed.encounters;
    ambient.t += dt;
    if (ambient.t >= tn('ambientGapMs') && actors.length < 3) {
      ambient.t = 0; spawnActor(enc[ambient.idx % enc.length], true); ambient.idx++;
    }
  }

  // ---------- input ----------
  function ensureAudio() {
    if (bedStarted) return;
    bedStarted = true;
    try { Kit.audio.unlock(); Kit.audio.reverb(REVERB_SECONDS); var bed = Kit.audio.bed(BED); bed.start(); } catch (e) { /* audio is optional */ }
  }
  function buy(id) {
    if (phase !== 'idle') return;
    var sk = SK[id], c = count(id);
    if (!sk.repeat && c > 0) { refund(id); return; }
    if (!level.free && sk.cost > points()) { denyId = id; denyT = 300; play('click', { gain: 0.5 }); return; }
    bought.push(id); card = null; tutorial = false; play('buy'); message = '';
  }
  function refund(id) {
    if (phase !== 'idle') return;
    var i = bought.lastIndexOf(id); if (i < 0) return;
    bought.splice(i, 1); card = null; play('refund'); message = '';
  }
  function onDown(x, y) {
    ensureAudio();
    if (screen === 'title') {
      if (inRect(BTN_PUZZLES, x, y)) { play('click'); screen = 'levels'; }
      else if (inRect(BTN_SANDBOX, x, y)) { play('click'); startLevel(SANDBOX); }
      return;
    }
    if (screen === 'levels') {
      if (inRect(BTN_TITLE, x, y)) { play('click'); screen = 'title'; return; }
      var all = allLevels();
      for (var i = 0; i < all.length; i++) if (inRect(LEVEL_CARDS[i], x, y)) { play('click'); startLevel(all[i]); return; }
      return;
    }
    // play
    if (card) {
      if (inRect(CARD_NEXT, x, y)) { play('click'); var n = nextLevel(); if (n) startLevel(n); else screen = 'levels'; return; }
      if (inRect(CARD_STAY, x, y)) { play('click'); card = null; return; }
    }
    if (phase === 'season' && inRect(SKIP, x, y)) { skipSeason(); return; }
    if (phase !== 'idle') return;
    if (inRect(BTN_LEVELS, x, y)) { play('click'); screen = 'levels'; return; }
    if (inRect(RUN, x, y)) { run(); return; }
    for (var j = 0; j < level.offers.length; j++) {
      var r = skillRect(j);
      if (inRect(r, x, y)) {
        var id = level.offers[j];
        if (SK[id].repeat && count(id) > 0 && x < r.x + 34 && y > r.y + r.h - 34) refund(id); else buy(id);
        return;
      }
    }
  }
  function onKey(e) {
    var code = e.code;
    ensureAudio();
    if (screen === 'title') { if (code === 'Enter' || code === 'Space') { screen = 'levels'; e.preventDefault(); } return; }
    if (screen === 'levels') {
      var m = /^Digit(\d)$/.exec(code);
      if (m) { var all = allLevels(), idx = +m[1] - 1; if (all[idx]) startLevel(all[idx]); }
      else if (code === 'Escape') screen = 'title';
      return;
    }
    if (code === 'Escape') { if (phase === 'idle') screen = 'levels'; return; }
    if (code === 'KeyS' && phase === 'season') { skipSeason(); return; }
    if (code === 'Enter' || code === 'Space') { if (card) { var n = nextLevel(); card = null; if (n && code === 'Enter') startLevel(n); } else run(); e.preventDefault(); return; }
    var dm = /^Digit(\d)$/.exec(code), idx2 = -1;
    if (dm) idx2 = dm[1] === '0' ? 9 : +dm[1] - 1;
    else if (code === 'Minus') idx2 = 10; else if (code === 'Equal') idx2 = 11;
    if (idx2 >= 0 && level.offers[idx2]) { if (e.shiftKey) refund(level.offers[idx2]); else buy(level.offers[idx2]); e.preventDefault(); }
  }

  // ---------- boot ----------
  g = Kit.boot({
    slug: SLUG,
    world: { w: WW, h: HH },
    assets: assets,
    tune: TUNE,
    onStart: function () { },
    onFrame: function (dt, game) {
      var ctx = game.ctx;
      update(dt);
      ctx.save();
      Kit.applyShake(ctx);
      if (screen === 'title') drawTitle(ctx);
      else if (screen === 'levels') drawLevels(ctx);
      else {
        drawMeadowBackdrop(ctx);
        drawScene(ctx, dt);
        Kit.drawParticles(ctx);
        drawHands(ctx);
        drawPrayers(ctx);
        cloudStrip(ctx, 546);
        drawClipboard(ctx);
        drawTopBar(ctx);
        drawSkills(ctx);
        drawControls(ctx);
        drawCard(ctx);
      }
      if (screen !== 'play') Kit.drawParticles(ctx);
      ctx.restore();
    },
    onPause: function () { },
    onResume: function () { }
  });
  Kit.pointer(g.canvas, { down: onDown, move: function (x, y) { mouse.x = x; mouse.y = y; }, up: function () { } });
  document.addEventListener('keydown', onKey);

  // Test hooks (used by dev checks and the smoke tool).
  window.__game = {
    g: g,
    isRunning: function () { return screen === 'play'; },
    state: function () { return { screen: screen, phase: phase, bought: bought.slice(), wr: committed ? committed.wr : null, solved: committed ? committed.solved : null, actors: actors.length, ghosts: ghosts.length, message: message }; },
    goPuzzles: function () { screen = 'levels'; },
    start: function (i) { startLevel(allLevels()[i]); },
    buy: buy, refund: refund, run: run, skip: skipSeason,
    click: onDown
  };
})();

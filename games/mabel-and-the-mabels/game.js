(function () {
  'use strict';
  // Every feel constant lives here. Press ` in the game to tune it live.
  var TUNE = {
    mabelSpeed:     { v: 220, min: 120, max: 360, step: 5 },
    strings:        { v: 4, min: 1, max: 8, step: 1 },
    safeMs:         { v: 1500, min: 0, max: 4000, step: 100 },
    grumpSpeed:     { v: 60, min: 20, max: 140, step: 5 },
    grumpPatience:  { v: 4, min: 1, max: 8, step: 1 },
    pigeonSpeed:    { v: 150, min: 60, max: 300, step: 10 },
    pigeonPatience: { v: 1, min: 1, max: 4, step: 1 },
    fanSpeed:       { v: 110, min: 40, max: 240, step: 10 },
    threshold1:     { v: 10, min: 3, max: 20, step: 1 },
    threshold2:     { v: 20, min: 6, max: 40, step: 1 },
    slowTime:       { v: 0.15, min: 0.05, max: 1, step: 0.05 },
    recSpeed:       { v: 0.6, min: 0, max: 1, step: 0.05 },
    setSteps:       { v: 336, min: 120, max: 336, step: 8 },
    ringBase:       { v: 120, min: 60, max: 200, step: 5 },
    ringPer:        { v: 30, min: 0, max: 60, step: 5 },
    guitarPush:     { v: 20, min: 0, max: 60, step: 5 },
    tambRadius:     { v: 80, min: 40, max: 160, step: 5 },
    trumpetLen:     { v: 320, min: 120, max: 500, step: 10 },
    trumpetPush:    { v: 60, min: 0, max: 120, step: 5 }
  };

  var PAL = { night: '#2b2140', pink: '#ff4f9a', orange: '#f08a4b', yellow: '#f7d154', teal: '#4fb0c6', paper: '#f3e9dc', red: '#e2342f' };
  var SLAB = '"Alfa Slab One", Georgia, serif';
  var SANS = '"Work Sans", system-ui, -apple-system, "Segoe UI", sans-serif';
  var CX = 640, CY = 380, ARENA_R = 300, CASE = { x: 640, y: 396 };
  var SLOT_TINT = [PAL.pink, PAL.teal, PAL.yellow];
  var SPRITE = { guitar: 'mabel-idle', tamb: 'mabel-tamb', trumpet: 'mabel-trumpet', snare: 'mabel-snare' };
  var CARD_INFO = {
    tamb: { name: 'Tambourine', line: 'Small ring. Always 1 hit.' },
    trumpet: { name: 'Trumpet', line: 'Long cone. Hits hard.' }
  };
  var CARD_RECTS = [{ x: 280, y: 170, w: 320, h: 410 }, { x: 680, y: 170, w: 320, h: 410 }];
  var HECK = {
    grump: { h: 112 }, pigeon: { w: 72 }, thrower: { h: 112 }, umbrella: { h: 116 }, chef: { h: 122 }, inspector: { h: 126 }
  };
  var STEP_MS = 60000 / 112 / 2;
  var DEG = Math.PI / 180;
  var WINDOW_MS = 90;       // a press this close before a step counts as on the beat
  var DEMO_NOTES = [0, 2, 4, 7, 8, 10, 12, 14];   // the demo riff, in steps of a 16-step loop
  var DEMO_STEPS = 32;      // two passes of the riff
  var DEMO_SKIP_MS = 800;   // skippable after this long
  var CUE_FADE = [200, 260]; // set steps over which the approach ring fades out (about the first minute)

  var assets = typeof ASSETS !== 'undefined' ? ASSETS : {};
  var rng = Kit.rng((Math.random() * 1e9) | 0);
  var S = null, g = null, clock = null, ac = null;
  var keys = {}, pointerPos = { x: -1, y: -1 };
  var TOUCH = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);   // phones: hints name the touch controls, not keys

  function T(k) { return g ? g.tune[k] : TUNE[k].v; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function syncCfg() {
    var c = BandSim.cfg;
    c.ringBase = T('ringBase'); c.ringPer = T('ringPer'); c.guitarPush = T('guitarPush');
    c.tambRadius = T('tambRadius'); c.trumpetLen = T('trumpetLen'); c.trumpetPush = T('trumpetPush');
  }

  // ===== state ========================================================

  function newGame() {
    S = {
      mode: 'ready', time: 0, gs: 0, dbg: 0, lastStepAt: 0, barAt: -9999, beatAt: -9999, setStep: 0,
      kickOn: false, queued: false, rest: 0, mInstr: 'guitar',
      mabel: { x: 560, y: 440, dx: 1, dy: 0, face: 1, strumUntil: 0, safeUntil: 0, moving: false },
      strings: T('strings'), hecklers: [], copies: [], coins: 0, fans: 0, nextTh: 0,
      fx: [], hearts: [], flying: [], strip: [], recInstr: null, rec: null, recStart: 0, countFrom: 0, countN: 0,
      cards: null, hint: null, nextId: 1, endSteps: 0, stick: null, everPlayed: false, applause: 0,
      drops: [], pressFx: null, qGood: null, demoAt: 0
    };
    for (var i = 0; i < 16; i++) S.strip.push(0);
    setHint(TOUCH ? 'Drag on the left half to move. Tap the right half to play.' : 'Move with WASD. Tap Space to play.', 1e9);
    startDemo();
  }

  function setHint(text, ms) { S.hint = { text: text, until: S.time + ms, born: S.time }; }
  function thresholds() { return [T('threshold1'), T('threshold2')]; }
  function chordIdx(gs) { return Math.floor(gs / 8) % 4; }

  // ===== set flow =====================================================

  function startDemo() {
    S.mode = 'demo';
    S.demoAt = S.time;
    S.hint = null;
    clock.reset();
    clock.start();
  }

  function demoStep(gs, t, delay) {
    var M = S.mabel, at = S.time + delay;
    S.gs = gs;
    CHORD.i = chordIdx(gs);
    S.lastStepAt = at;
    if (gs % 2 === 0) S.beatAt = at;
    if (gs % 8 === 0) S.barAt = at;
    if (gs % 4 === 0) play('kick', { time: t });
    if (DEMO_NOTES.indexOf(gs % 16) >= 0) {
      play('guitar', { time: t, power: 1, gain: 1.3 });
      M.strumUntil = at + 150;
      S.fx.push({ kind: 'ring', x: M.x, y: M.y, dx: 1, dy: 0, p: 1, color: PAL.yellow, t0: at, dur: 440, reach: BandSim.INSTR.guitar.radius(1), q: 'good' });
      S.drops.push({ t0: at, i: gs % 16, landed: false });
    }
    if (gs >= DEMO_STEPS) endDemo();
  }

  function endDemo() {
    if (!S || S.mode !== 'demo') return;
    clock.stop();
    clock.reset();
    S.mode = 'ready';
    S.gs = 0; S.beatAt = -9999; S.barAt = -9999; S.lastStepAt = 0;
    S.fx = []; S.drops = [];
    for (var i = 0; i < 16; i++) S.strip[i] = 0;
    setHint(TOUCH ? 'Your turn. Drag on the left to move. Tap the right half on the beat.' : 'Your turn. Move with WASD. Tap Space on the beat.', 1e9);
  }

  function updateDrops() {
    for (var i = S.drops.length - 1; i >= 0; i--) {
      var d = S.drops[i];
      if (!d.landed && S.time - d.t0 >= 320) {
        d.landed = true; d.landAt = S.time;
        S.strip[d.i] = 1;
      }
      if (d.landed && S.time - d.landAt > 400) S.drops.splice(i, 1);
    }
  }

  function firstInput() {
    if (!S || S.mode !== 'ready') return;
    S.mode = 'play';
    clock.reset();
    clock.start();
  }

  function spawn(type) {
    var a = rng() * Math.PI * 2, r = 350 + rng() * 20;
    var pat = type === 'pigeon' ? T('pigeonPatience') : T('grumpPatience');
    S.hecklers.push({
      id: S.nextId++, type: type, x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r, pat: pat, max: pat,
      state: type === 'pigeon' ? 'fly' : 'walk', wob: 0, born: S.time, carrying: false, face: 1, fan: null, bob: rng() * 6.28, flap: rng() * 6.28
    });
  }

  function toFan(h, hearts) {
    if (h.carrying) { h.carrying = false; launchCoin(h.x, h.y); }
    h.state = 'tofan';
    S.fans++;
    var a = Math.atan2(h.y - CY, h.x - CX) + (rng() - 0.5) * 0.7, r = ARENA_R + 22 + rng() * 34;
    h.fan = { x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r };
    h.tossed = false;
    if (hearts !== false) for (var i = 0; i < 3; i++) S.hearts.push({ x: h.x + (i - 1) * 16, y: h.y - 90, t0: S.time + i * 90, vx: (i - 1) * 14 });
    Kit.burst(h.x, h.y - 50, { n: 8, color: PAL.pink, speed: 120, life: 500, gravity: 200, size: 4 });
  }

  function launchCoin(x, y) { S.flying.push({ x0: x, y0: y - 40, t: 0, dur: 650 }); }

  function snap() {
    var M = S.mabel;
    S.strings--;
    M.safeUntil = S.time + T('safeMs');
    play('snap');
    Kit.shake(7, 220);
    if (S.strings <= 0) finish(false);
  }

  function finish(survived) {
    S.mode = 'over';
    S.queued = false;
    clock.stop();
    document.getElementById('endTitle').textContent = survived ? 'Set survived' : 'Set cut short';
    document.getElementById('endStats').textContent = S.fans + ' fans · ' + (1 + S.copies.length) + '-piece band · ' + S.coins + ' coins';
    setTimeout(function () { if (S.mode === 'over') document.getElementById('end').classList.remove('hidden'); }, survived ? 400 : 900);
  }

  function beginChoice() {
    S.mode = 'choice';
    S.queued = false;
    S.cards = ['tamb', 'trumpet'];
    S.choiceAt = S.time;
    S.mabel.moving = false;
  }

  function pick(i) {
    if (!S || S.mode !== 'choice' || !S.cards[i]) return;
    S.recInstr = S.cards[i];
    S.mInstr = S.recInstr;
    S.mode = 'countin';
    S.nextTh++;
    S.recStart = Math.ceil((S.gs + 9) / 8) * 8;
    S.countFrom = S.recStart - 8;
    S.countN = 0;
    S.cards = null;
    setHint('Next you record a part. What you play gets looped as a band member.', 5000);
  }

  function endRec() {
    var loop = S.rec.done();
    var f0 = loop.frames[0];
    var slot = S.copies.length;
    S.copies.push({ id: S.nextId++, instr: S.recInstr, loop: loop, start: S.recStart, slot: slot, born: S.time });
    Kit.burst(f0.x, f0.y - 70, { n: 18, color: SLOT_TINT[slot % 3], speed: 220, life: 700, gravity: 100, size: 5 });
    S.mode = 'play';
    S.mInstr = 'guitar';
    S.rec = null;
    S.mabel.popAt = S.time;
    for (var i = 0; i < 16; i++) S.strip[i] = 0;
  }

  function startEnding() {
    S.mode = 'ending';
    S.endSteps = 0;
    S.applause = S.time;
    S.hecklers.forEach(function (h) { if (h.state === 'walk' || h.state === 'fly' || h.state === 'leave') toFan(h); });
    play('fan', { gain: 1.2 });
    setHint('Applause!', 5000);
  }

  // ===== one musical step =============================================

  function fireNote(instr, p, x, y, dx, dy, color, t, delay, q) {
    var targets = [];
    S.hecklers.forEach(function (h) { if (h.state === 'walk' || h.state === 'fly' || h.state === 'leave') targets.push({ id: h.id, x: h.x, y: h.y }); });
    var hits = BandSim.hits(instr, p, { x: x, y: y }, { x: dx, y: dy }, targets);
    play(instr, { time: t, power: p, gain: q === 'good' ? 1.35 : q === 'off' ? 0.7 : 1 });
    var d = BandSim.INSTR[instr];
    S.fx.push({
      kind: d.shape, x: x, y: y, dx: dx, dy: dy, p: p, color: color, t0: S.time + delay, dur: 440, q: q,
      reach: d.shape === 'ring' ? d.radius(p) : d.length
    });
    var conv = 0;
    hits.forEach(function (hit) {
      var h = null;
      for (var i = 0; i < S.hecklers.length; i++) if (S.hecklers[i].id === hit.id) h = S.hecklers[i];
      if (!h) return;
      h.pat -= hit.charm;
      h.wob = 380;
      var nx = h.x + hit.px * hit.push, ny = h.y + hit.py * hit.push, dist = Math.hypot(nx - CX, ny - CY);
      if (dist > 430) { nx = CX + (nx - CX) * 430 / dist; ny = CY + (ny - CY) * 430 / dist; }
      h.x = nx; h.y = ny;
      if (h.pat <= 0) { toFan(h); conv++; }
    });
    if (hits.length) play('charm', { time: t, gain: Math.min(1.5, 0.7 + hits.length * 0.15) });
    if (conv) play('fan', { time: t != null ? t + 0.02 : undefined, gain: Math.min(1.3, 0.8 + conv * 0.2) });
  }

  function stepLogic(gs, t, delay) {
    var M = S.mabel, at = S.time + delay;
    S.gs = gs;
    CHORD.i = chordIdx(gs);
    S.lastStepAt = at;
    if (gs % 2 === 0) S.beatAt = at;
    if (gs % 8 === 0) S.barAt = at;

    // mode transitions
    if (S.mode === 'rec' && gs - S.recStart >= 16) endRec();
    if (S.mode === 'countin') {
      if (gs === S.recStart) {
        S.mode = 'rec';
        S.rec = BandSim.recorder();
        for (var i = 0; i < 16; i++) S.strip[i] = 0;
        play('rec', { time: t, go: true });
        setHint('Play a pattern. It will loop.', 5000);
      } else if (gs >= S.countFrom && (gs - S.countFrom) % 2 === 0) {
        play('rec', { time: t });
        S.countN = 4 - (gs - S.countFrom) / 2;
        S.countAt = at;
      }
    }

    // the band
    if (S.kickOn && gs % 4 === 0) play('kick', { time: t });
    if (S.fans > 0 && gs % 4 === 2) play('clap', { time: t, gain: Math.min(1.5, 0.3 + S.fans * 0.07) });

    // hecklers arrive
    if (S.mode === 'play' || S.mode === 'rec') {
      BandSim.wave(S.setStep, 'short').forEach(spawn);
      if (S.setStep === 10 && S.everPlayed) setHint('Press as the ring closes on a square. That is the beat.', 7000);
      if (S.setStep === 112) setHint('Rest a beat and the next note is bigger.', 6000);
      if (S.setStep === 136) setHint('Pigeons steal coins. Ring one and it drops the coin.', 5000);
      S.setStep++;
    }
    if (S.mode === 'play' && S.setStep >= T('setSteps')) startEnding();

    // Mabel's note
    var notePower = 0;
    var canPlay = S.mode === 'play' || S.mode === 'rec' || S.mode === 'ending';
    if (S.queued && canPlay) {
      notePower = BandSim.power(S.rest);
      S.rest = 0;
      S.kickOn = true;
      S.everPlayed = true;
      M.strumUntil = at + 150;
      var q = S.qGood;
      S.qGood = null;
      fireNote(S.mode === 'rec' ? S.recInstr : 'guitar', notePower, M.x, M.y, M.dx, M.dy, PAL.yellow, t, delay, q);
      if (q === 'good') Kit.burst(M.x, M.y - 60, { n: 8, color: PAL.yellow, speed: 140, life: 380, gravity: 0, size: 3 });
    } else if (canPlay) S.rest++;
    S.queued = false;
    S.qGood = null;
    if (S.mode === 'rec') {
      var rs = gs - S.recStart;
      S.rec.push(rs, M.x, M.y, notePower, M.dx, M.dy);
      S.strip[rs] = notePower;
    } else if (S.mode === 'play' || S.mode === 'ending') S.strip[gs % 16] = notePower;

    // copies repeat what was recorded
    S.copies.forEach(function (c) {
      var n = gs - c.start;
      var p = BandSim.noteAt(c.loop, n);
      if (!p) return;
      var sp = BandSim.sample(c.loop, n);
      c.strumAt = at;
      fireNote(c.instr, p, sp.x, sp.y, sp.dirX, sp.dirY, SLOT_TINT[c.slot % 3], t, delay);
    });

    // ending
    if (S.mode === 'ending') {
      S.endSteps++;
      if (S.endSteps >= 32) finish(true);
    }
    checkThreshold();
  }

  function checkThreshold() {
    if (S.mode !== 'play' || S.nextTh >= 2) return;
    if (S.coins >= thresholds()[S.nextTh]) beginChoice();
  }

  function onClockStep(idx, audioTime) {
    if (!S || S.mode === 'ready' || S.mode === 'over' || S.mode === 'title') return;
    var delay = ac ? Math.max(0, (audioTime - ac.currentTime) * 1000) : 0;
    if (S.mode === 'demo') { demoStep(idx, audioTime, delay); return; }
    stepLogic(idx, audioTime, delay);
  }

  // ===== per-frame update =============================================

  function inputVec() {
    var x = 0, y = 0;
    if (keys.a || keys.arrowleft) x -= 1;
    if (keys.d || keys.arrowright) x += 1;
    if (keys.w || keys.arrowup) y -= 1;
    if (keys.s || keys.arrowdown) y += 1;
    if (S.stick) { x += S.stick.vx; y += S.stick.vy; }
    var m = Math.hypot(x, y);
    if (m > 1) { x /= m; y /= m; }
    return { x: x, y: y, m: Math.min(1, m) };
  }

  function moveMabel(dt) {
    var M = S.mabel, v = inputVec();
    M.moving = v.m > 0.05;
    if (!M.moving || S.mode === 'choice' || S.mode === 'over' || S.mode === 'demo') return;
    firstInput();
    var sp = T('mabelSpeed') * dt / 1000;
    M.x += v.x * sp * v.m; M.y += v.y * sp * v.m;
    var d = Math.hypot(M.x - CX, M.y - CY);
    if (d > ARENA_R) { M.x = CX + (M.x - CX) * ARENA_R / d; M.y = CY + (M.y - CY) * ARENA_R / d; }
    var m = Math.hypot(v.x, v.y);
    M.dx = v.x / m; M.dy = v.y / m;
    if (Math.abs(v.x) > 0.2) M.face = v.x > 0 ? 1 : -1;
  }

  function timeScale() {
    switch (S.mode) {
      case 'choice': return T('slowTime');
      case 'countin': return 0;
      case 'rec': return T('recSpeed');
      case 'play': return 1;
      default: return 0;
    }
  }

  function away(h, dt, speed) {
    var a = Math.atan2(h.y - CY, h.x - CX);
    h.x += Math.cos(a) * speed * dt; h.y += Math.sin(a) * speed * dt;
  }

  function updateHecklers(dt) {
    var M = S.mabel, sc = timeScale(), live = S.mode === 'play' || S.mode === 'rec';
    var fanScale = S.mode === 'choice' ? T('slowTime') : 1;
    for (var i = S.hecklers.length - 1; i >= 0; i--) {
      var h = S.hecklers[i];
      if (h.wob > 0) h.wob -= dt;
      if (h.state === 'walk') {
        var vx = M.x - h.x, vy = M.y - h.y, d = Math.hypot(vx, vy) || 1, sp = T('grumpSpeed') * sc * dt / 1000;
        h.x += vx / d * sp; h.y += vy / d * sp;
        h.face = vx > 0 ? 1 : -1;
        if (d < 36 && live && S.time > M.safeUntil) {
          snap();
          h.x -= vx / d * 60; h.y -= vy / d * 60;
          if (S.mode === 'over') return;
        }
      } else if (h.state === 'fly') {
        var cx = CASE.x - h.x, cy = CASE.y - h.y, cd = Math.hypot(cx, cy) || 1, cs = T('pigeonSpeed') * sc * dt / 1000;
        h.x += cx / cd * cs; h.y += cy / cd * cs;
        h.face = cx > 0 ? 1 : -1;
        if (cd < 28) {
          if (S.coins > 0) { S.coins--; h.carrying = true; }
          h.state = 'leave';
        }
      } else if (h.state === 'leave') {
        away(h, dt / 1000, T('pigeonSpeed') * sc);
        if (Math.hypot(h.x - CX, h.y - CY) > 470) { S.hecklers.splice(i, 1); continue; }
      } else if (h.state === 'tofan') {
        var fx = h.fan.x - h.x, fy = h.fan.y - h.y, fd = Math.hypot(fx, fy);
        var step = T('fanSpeed') * fanScale * dt / 1000;
        h.face = fx > 0 ? 1 : -1;
        if (fd <= step) {
          h.x = h.fan.x; h.y = h.fan.y; h.state = 'fan'; h.born = S.time;
          if (!h.tossed) { h.tossed = true; launchCoin(h.x, h.y); }
        } else { h.x += fx / fd * step; h.y += fy / fd * step; }
      }
    }
    // coins in flight
    var cscale = S.mode === 'choice' ? T('slowTime') : 1;
    for (var k = S.flying.length - 1; k >= 0; k--) {
      var c = S.flying[k];
      c.t += dt * cscale;
      if (c.t >= c.dur) {
        S.flying.splice(k, 1);
        S.coins++;
        play('coin');
        Kit.burst(CASE.x, CASE.y - 14, { n: 5, color: PAL.yellow, speed: 90, life: 350, gravity: 300, size: 3 });
      }
    }
    for (var q = S.hearts.length - 1; q >= 0; q--) if (S.time - S.hearts[q].t0 > 900) S.hearts.splice(q, 1);
    for (var f = S.fx.length - 1; f >= 0; f--) if (S.time - S.fx[f].t0 > S.fx[f].dur) S.fx.splice(f, 1);
  }

  function update(dt) {
    S.time += dt;
    syncCfg();
    if (S.mode === 'title') return;
    moveMabel(dt);
    if (S.mode === 'demo') updateDrops();
    if (S.mode !== 'ready' && S.mode !== 'demo') {
      updateHecklers(dt);
      checkThreshold();
    }
  }

  // ===== drawing helpers ==============================================

  // Everything drawn in code is printed twice: once in ink A, once 2 px off in ink B with multiply.
  function twice(ctx, a, b, fn) {
    ctx.save();
    ctx.fillStyle = ctx.strokeStyle = a;
    fn();
    ctx.globalCompositeOperation = 'multiply';
    ctx.translate(2, 2);
    ctx.fillStyle = ctx.strokeStyle = b;
    fn();
    ctx.restore();
  }

  // A flat ink block tilted about a degree, with an offset block of a second ink behind it.
  function block(ctx, x, y, w, h, fill, shadow, rot, fn) {
    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(rot * DEG);
    ctx.translate(-w / 2, -h / 2);
    ctx.fillStyle = shadow; ctx.fillRect(7, 7, w, h);
    ctx.fillStyle = fill; ctx.fillRect(0, 0, w, h);
    if (fn) fn(w, h);
    ctx.restore();
  }

  function text(ctx, str, x, y, font, color, align) {
    ctx.font = font; ctx.fillStyle = color; ctx.textAlign = align || 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(str, x, y);
  }

  function heart(ctx, x, y, s) {
    ctx.beginPath();
    ctx.moveTo(x, y + s * 0.9);
    ctx.bezierCurveTo(x - s * 1.4, y - s * 0.1, x - s * 0.6, y - s * 1.1, x, y - s * 0.4);
    ctx.bezierCurveTo(x + s * 0.6, y - s * 1.1, x + s * 1.4, y - s * 0.1, x, y + s * 0.9);
    ctx.fill();
  }

  function pop(age) { return 1 + 0.2 * Math.max(0, 1 - age / 220); }

  // ===== drawing the plaza ============================================

  function drawRingFx(ctx, f) {
    var k = (S.time - f.t0) / f.dur;
    if (k < 0 || k > 1) return;
    var e = Kit.ease.outQuad(k), a = 1 - k * k;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.lineCap = 'round';
    var th = 3 + f.p * 2.2;
    if (f.q === 'good') { th *= 1.5; ctx.shadowColor = PAL.yellow; ctx.shadowBlur = 18; }
    else if (f.q === 'off') { th *= 0.7; ctx.globalAlpha = a * 0.55; }
    if (f.kind === 'ring') {
      var r = f.reach * e;
      twice(ctx, f.color === PAL.yellow ? PAL.yellow : f.color, PAL.pink, function () {
        ctx.lineWidth = th; ctx.beginPath(); ctx.arc(f.x, f.y, r, 0, Math.PI * 2); ctx.stroke();
      });
      ctx.globalAlpha = a * 0.6;
      ctx.strokeStyle = f.q === 'good' ? PAL.paper : PAL.pink; ctx.lineWidth = th * 0.6;
      ctx.beginPath(); ctx.arc(f.x, f.y, r * 0.82, 0, Math.PI * 2); ctx.stroke();
    } else {
      var ang = Math.atan2(f.dy, f.dx), len = f.reach * e;
      twice(ctx, f.color, PAL.pink, function () {
        ctx.lineWidth = th;
        for (var i = 1; i <= 4; i++) {
          var rr = len * i / 4;
          ctx.beginPath(); ctx.arc(f.x, f.y, rr, ang - 25 * DEG, ang + 25 * DEG); ctx.stroke();
        }
      });
    }
    ctx.restore();
  }

  function drawTargetRing(ctx) { /* tomato markers arrive in Slice 2 */ }

  function drawMabel(ctx) {
    var M = S.mabel, now = S.time;
    var sprite = SPRITE[S.mInstr] || 'mabel-idle';
    if (S.mInstr === 'guitar' && now < M.strumUntil) sprite = 'mabel-strum';
    var bob = M.moving ? Math.abs(Math.sin(now / 90)) * 4 : 0;
    var blink = now < M.safeUntil && Math.floor(now / 90) % 2 === 0;
    var p = M.popAt != null ? pop(now - M.popAt) : 1;
    var sq = 1 + 0.03 * Math.max(0, 1 - (now - S.beatAt) / 160);
    Kit.draw(ctx, sprite, M.x, M.y - bob, { h: 172, flipX: M.face < 0, alpha: blink ? 0.35 : 1, sx: p / sq, sy: p * sq });
  }

  function drawCopy(ctx, c) {
    var frac = clamp((S.time - S.lastStepAt) / STEP_MS, 0, 1);
    var sp = BandSim.sample(c.loop, S.gs - c.start + frac);
    var now = S.time;
    var played = c.strumAt != null && now - c.strumAt < 160;
    var sq = 1 + 0.04 * Math.max(0, 1 - (now - S.beatAt) / 160);
    var tint = SLOT_TINT[c.slot % 3];
    Kit.draw(ctx, SPRITE[c.instr], sp.x, sp.y, {
      h: 172, flipX: sp.dirX < 0, alpha: 0.75, tint: tint, tintAmount: 0.8,
      sx: pop(now - c.born) * (played ? 1.06 : 1) / sq, sy: pop(now - c.born) * sq
    });
  }

  function drawHeckler(ctx, h) {
    var def = HECK[h.type], now = S.time;
    var lean = (h.face > 0 ? 1 : -1) * 0.05 * (h.state === 'walk' ? 1 : 0);
    var wob = h.wob > 0 ? Math.sin(h.wob / 38) * 0.22 * (h.wob / 380) : 0;
    var o = { flipX: h.face > 0, rot: lean + wob, sx: pop(now - h.born) };
    o.sy = o.sx;
    if (def.h) o.h = def.h; else o.w = def.w;
    var y = h.y;
    if (h.type === 'pigeon' && h.state !== 'fan') { y -= 18 + Math.sin(now / 70 + h.flap) * 6; }
    if (h.state === 'tofan' || h.state === 'fan') {
      o.tint = PAL.pink; o.tintAmount = 0.25;
      if (h.state === 'fan') {
        var bob = Math.max(0, 1 - (now - S.beatAt) / 170);
        y -= bob * 8; o.sy *= 1 + bob * 0.05;
        o.flipX = h.x < CX;
        o.rot = Math.sin(now / 240 + h.bob) * 0.04;
      }
    }
    if (h.state === 'leave' && h.carrying) o.tint = PAL.yellow, o.tintAmount = 0.2;
    if (h.type === 'pigeon' && h.state === 'fly' && S.mode === 'ready') o.alpha = 1;
    Kit.draw(ctx, h.type, h.x, y, o);
    if (h.carrying) Kit.draw(ctx, 'coin', h.x, y - 8, { w: 22 });
  }

  function drawCase(ctx) {
    Kit.draw(ctx, 'case', CASE.x, CASE.y + 22, { w: 150 });
    var n = Math.min(S.coins, 9);
    for (var i = 0; i < n; i++) Kit.draw(ctx, 'coin', CASE.x - 30 + (i % 5) * 15 + (i > 4 ? 7 : 0), CASE.y - 10 + (i > 4 ? 8 : 0), { w: 18 });
  }

  function drawFlying(ctx) {
    S.flying.forEach(function (c) {
      var k = clamp(c.t / c.dur, 0, 1);
      var x = c.x0 + (CASE.x - c.x0) * k, y = c.y0 + (CASE.y - 14 - c.y0) * k - Math.sin(k * Math.PI) * 90;
      Kit.draw(ctx, 'coin', x, y, { w: 26, rot: k * 12 });
    });
  }

  function drawHearts(ctx) {
    S.hearts.forEach(function (h) {
      var k = (S.time - h.t0) / 800;
      if (k < 0 || k > 1) return;
      ctx.save();
      ctx.globalAlpha = 1 - k * k;
      twice(ctx, PAL.pink, PAL.orange, function () { heart(ctx, h.x + h.vx * k, h.y - k * 46, 7 * (k < 0.15 ? 1.2 : 1)); });
      ctx.restore();
    });
  }

  function cueAmount() {
    if (S.mode === 'rec' || S.mode === 'countin') return 1;
    return 1 - clamp((S.setStep - CUE_FADE[0]) / (CUE_FADE[1] - CUE_FADE[0]), 0, 1);
  }

  // A ring that closes on Mabel as the next step arrives. The last WINDOW_MS is the window: it brightens.
  function drawApproach(ctx) {
    if (S.mode === 'demo') return;
    if (S.mode !== 'play' && S.mode !== 'rec' && S.mode !== 'ready') return;
    var cue = cueAmount();
    if (cue <= 0) return;
    var M = S.mabel, frac = S.mode === 'ready' ? ((S.time % STEP_MS) / STEP_MS) : clamp((S.time - S.lastStepAt) / STEP_MS, 0, 1);
    var until = (1 - frac) * STEP_MS, inWin = S.mode !== 'ready' && until <= WINDOW_MS;
    var r = 36 + 64 * Math.pow(1 - frac, 2);
    ctx.save();
    ctx.globalAlpha = cue * (inWin ? 0.95 : 0.4);
    ctx.strokeStyle = inWin ? PAL.yellow : PAL.paper;
    ctx.lineWidth = inWin ? 6 : 3;
    ctx.beginPath(); ctx.ellipse(M.x, M.y - 6, r, r * 0.5, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();
  }

  function drawPressFx(ctx) {
    var f = S.pressFx;
    if (!f) return;
    var k = (S.time - f.at) / 700;
    if (k > 1) { S.pressFx = null; return; }
    var M = S.mabel;
    ctx.save();
    ctx.globalAlpha = (1 - k) * (f.good ? 1 : 0.6);
    if (f.good) {
      ctx.translate(M.x, M.y - 190 - k * 24);
      ctx.scale(1 + 0.2 * (1 - k), 1 + 0.2 * (1 - k));
      twice(ctx, PAL.yellow, PAL.pink, function () { ctx.font = '34px ' + SLAB; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('ON BEAT', 0, 0); });
    } else {
      text(ctx, f.text, M.x, M.y - 190 - k * 12, '700 20px ' + SANS, '#b8a8cc', 'center');
    }
    ctx.restore();
  }

  function drawWorld(ctx) {
    var pulse = Math.max(0, 1 - (S.time - S.barAt) / 200), sc = 1 + 0.02 * pulse;
    ctx.save();
    ctx.translate(CX, CY); ctx.scale(sc, sc); ctx.translate(-CX, -CY);
    drawTargetRing(ctx);
    var items = [{ y: CASE.y, draw: function () { drawCase(ctx); } }];
    S.copies.forEach(function (c) {
      var frac = clamp((S.time - S.lastStepAt) / STEP_MS, 0, 1);
      items.push({ y: BandSim.sample(c.loop, S.gs - c.start + frac).y, draw: function () { drawCopy(ctx, c); } });
    });
    items.push({ y: S.mabel.y, draw: function () { drawMabel(ctx); } });
    S.hecklers.forEach(function (h) { items.push({ y: h.y, draw: function () { drawHeckler(ctx, h); } }); });
    items.sort(function (a, b) { return a.y - b.y; });
    items.forEach(function (it) { it.draw(); });
    S.fx.forEach(function (f) { drawRingFx(ctx, f); });
    drawApproach(ctx);
    drawPressFx(ctx);
    drawFlying(ctx);
    drawHearts(ctx);
    Kit.drawParticles(ctx);
    ctx.restore();
  }

  // ===== HUD ==========================================================

  function drawStrings(ctx) {
    block(ctx, 20, 18, 250, 70, PAL.night, PAL.pink, -1, function () {
      var total = T('strings');
      for (var i = 0; i < total; i++) {
        var x = 38 + i * 56, broken = i >= S.strings;
        twice(ctx, broken ? '#8a7a96' : PAL.paper, broken ? PAL.pink : PAL.teal, function () {
          ctx.lineWidth = 4; ctx.lineCap = 'round';
          ctx.beginPath(); ctx.arc(x, 18, 6, 0, Math.PI * 2); ctx.fill();
          if (!broken) { ctx.beginPath(); ctx.moveTo(x, 24); ctx.lineTo(x, 58); ctx.stroke(); }
          else {
            ctx.beginPath(); ctx.moveTo(x, 24); ctx.lineTo(x + 3, 34); ctx.lineTo(x - 4, 38); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(x + 5, 46); ctx.lineTo(x - 2, 52); ctx.lineTo(x + 1, 58); ctx.stroke();
          }
        });
      }
    });
  }

  function drawStrip(ctx) {
    var ph = S.mode === 'rec' ? S.gs - S.recStart : S.gs % 16;
    var running = S.mode !== 'ready' && S.mode !== 'title';
    var live = S.mode === 'play' || S.mode === 'rec' || S.mode === 'ending';
    var frac = clamp((S.time - S.lastStepAt) / STEP_MS, 0, 1);
    var nextI = (ph + 1) % 16;
    var pulse = S.mode === 'demo' ? Math.max(0, 1 - (S.time - S.beatAt) / 220) : 0;
    block(ctx, 360, 18, 560, 62, PAL.night, PAL.orange, 1, function () {
      for (var i = 0; i < 16; i++) {
        var x = 12 + i * 34, p = S.strip[i], on = running && i === ph;
        // beat dots: a dot under every beat, a bigger one under each bar start
        ctx.fillStyle = i % 8 === 0 ? PAL.yellow : (i % 2 === 0 ? PAL.paper : '#52446b');
        ctx.beginPath(); ctx.arc(x + 14, 55, i % 8 === 0 ? 4 : (i % 2 === 0 ? 3 : 2), 0, Math.PI * 2); ctx.fill();
        if (live && i === nextI) {
          var until = (1 - frac) * STEP_MS, inWin = until <= WINDOW_MS, cs = 17 + (1 - frac) * 9;
          ctx.save();
          ctx.globalAlpha = inWin ? 1 : 0.55;
          ctx.strokeStyle = inWin ? PAL.yellow : PAL.paper; ctx.lineWidth = inWin ? 4 : 2;
          ctx.strokeRect(x + 14 - cs, 31 - cs, cs * 2, cs * 2);
          ctx.restore();
        }
        var s = (on ? 1.22 : 1) + (S.mode === 'demo' ? pulse * 0.12 : 0);
        ctx.save();
        ctx.translate(x + 14, 31); ctx.scale(s, s);
        ctx.fillStyle = p ? (S.mode === 'rec' ? PAL.pink : (S.mode === 'demo' ? PAL.yellow : PAL.orange)) : '#52446b';
        var sz = p ? 20 + p * 3 : 20;
        ctx.fillRect(-sz / 2, -sz / 2, sz, sz);
        if (on) { ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 4; ctx.strokeRect(-17, -17, 34, 34); }
        ctx.restore();
      }
    });
  }

  function drawCoinsHud(ctx) {
    block(ctx, 990, 18, 270, 82, PAL.night, PAL.teal, -1, function () {
      text(ctx, S.coins + (S.coins === 1 ? ' coin' : ' coins'), 135, 28, '32px ' + SLAB, PAL.paper, 'center');
      var th = thresholds(), msg = S.nextTh < 2 ? 'Next band member: ' + th[S.nextTh] : 'Full band';
      text(ctx, msg, 135, 62, '700 16px ' + SANS, PAL.yellow, 'center');
    });
  }

  function drawHint(ctx) {
    var h = S.hint;
    if (!h || S.time > h.until || S.mode === 'choice') return;
    if (S.mode === 'ready' || !S.everPlayed || h.until < 1e8) { /* ok */ }
    var a = clamp((S.time - h.born) / 250, 0, 1) * clamp((h.until - S.time) / 400, 0, 1);
    ctx.save();
    ctx.globalAlpha = a;
    ctx.font = '700 22px ' + SANS;
    var w = ctx.measureText(h.text).width + 56;
    block(ctx, CX - w / 2, 612, w, 52, PAL.paper, PAL.pink, 1, function () {
      text(ctx, h.text, w / 2, 27, '700 22px ' + SANS, PAL.night, 'center');
    });
    ctx.restore();
  }

  // The loop-length indicator: 16 steps (2 bars). rs is the current step, or -1 before recording starts.
  function loopBar(ctx, rs, caption) {
    block(ctx, 360, 196, 560, 74, PAL.night, PAL.red, 1, function () {
      for (var i = 0; i < 16; i++) {
        var x = 14 + i * 34, hit = rs >= 0 && S.strip[i];
        ctx.fillStyle = rs >= 0 && i === rs ? PAL.yellow : (rs >= 0 && i < rs ? PAL.pink : '#52446b');
        ctx.fillRect(x, 10, 28, 20);
        if (hit) { ctx.fillStyle = PAL.paper; ctx.fillRect(x + 8, 14, 12, 12); }
        if (i === 8) { ctx.fillStyle = PAL.paper; ctx.fillRect(x - 4, 6, 2, 28); }
      }
      text(ctx, 'LOOP', 14, 50, '14px ' + SLAB, PAL.yellow);
      text(ctx, caption, 288, 52, '700 17px ' + SANS, PAL.paper, 'center');
    });
  }

  function drawRecUi(ctx) {
    if (S.mode === 'rec') {
      var rs = clamp(S.gs - S.recStart, 0, 15);
      twice(ctx, PAL.red, PAL.pink, function () {
        ctx.lineWidth = 14; ctx.strokeRect(7, 7, 1266, 706);
      });
      block(ctx, 500, 108, 280, 78, PAL.red, PAL.night, -1, function () {
        ctx.fillStyle = PAL.paper; ctx.beginPath(); ctx.arc(40, 39, 14, 0, Math.PI * 2); ctx.fill();
        text(ctx, 'REC', 68, 40, '34px ' + SLAB, PAL.paper);
        text(ctx, (rs + 1) + ' / 16', 262, 40, '34px ' + SLAB, PAL.paper, 'right');
      });
      loopBar(ctx, rs, 'This 2-bar pattern repeats as your band member.');
    } else if (S.mode === 'countin') {
      var n = S.countN;
      var k = clamp((S.time - (S.countAt || 0)) / 400, 0, 1);
      loopBar(ctx, -1, 'Play a pattern. It will loop.');
      if (n > 0) {
        ctx.save();
        ctx.globalAlpha = 1 - k * 0.5;
        var sc = 1 + 0.25 * (1 - k);
        ctx.translate(CX, 300); ctx.scale(sc, sc);
        twice(ctx, PAL.pink, PAL.teal, function () {
          ctx.font = '170px ' + SLAB; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(n), 0, 0);
        });
        ctx.restore();
      }
      var nm = CARD_INFO[S.recInstr] ? CARD_INFO[S.recInstr].name : '';
      block(ctx, 460, 112, 360, 62, PAL.paper, PAL.pink, 1, function () {
        text(ctx, n > 0 ? 'Get ready: ' + nm : 'Get ready', 180, 33, '700 24px ' + SANS, PAL.night, 'center');
      });
    }
  }

  function drawChoice(ctx) {
    if (S.mode !== 'choice') return;
    var k = clamp((S.time - S.choiceAt) / 300, 0, 1);
    ctx.save();
    ctx.fillStyle = 'rgba(43,33,64,' + (0.62 * k) + ')';
    ctx.fillRect(0, 0, 1280, 720);
    ctx.globalAlpha = k;
    block(ctx, 380, 62, 520, 76, PAL.pink, PAL.night, -1, function () {
      text(ctx, 'New band member!', 260, 40, '40px ' + SLAB, PAL.paper, 'center');
    });
    S.cards.forEach(function (id, i) {
      var r = CARD_RECTS[i], hov = pointerPos.x >= r.x && pointerPos.x <= r.x + r.w && pointerPos.y >= r.y && pointerPos.y <= r.y + r.h;
      var sc = (hov ? 1.04 : 1) * pop((S.time - S.choiceAt - i * 90) * 0.6 - 0);
      ctx.save();
      ctx.translate(r.x + r.w / 2, r.y + r.h / 2); ctx.scale(sc, sc); ctx.translate(-r.w / 2, -r.h / 2);
      var rot = i === 0 ? -1 : 1;
      ctx.save();
      ctx.translate(r.w / 2, r.h / 2); ctx.rotate(rot * DEG); ctx.translate(-r.w / 2, -r.h / 2);
      ctx.fillStyle = i === 0 ? PAL.teal : PAL.orange; ctx.fillRect(10, 10, r.w, r.h);
      ctx.fillStyle = PAL.paper; ctx.fillRect(0, 0, r.w, r.h);
      ctx.fillStyle = i === 0 ? PAL.pink : PAL.yellow; ctx.fillRect(0, 0, r.w, 92);
      text(ctx, CARD_INFO[id].name, r.w / 2, 48, '36px ' + SLAB, PAL.night, 'center');
      ctx.restore();
      Kit.draw(ctx, SPRITE[id], r.w / 2, r.h - 96, { h: 220, tint: SLOT_TINT[S.copies.length % 3], tintAmount: 0.35 });
      text(ctx, CARD_INFO[id].line, r.w / 2, r.h - 54, '700 19px ' + SANS, PAL.night, 'center');
      text(ctx, 'Press ' + (i + 1), r.w / 2, r.h - 24, '700 15px ' + SANS, '#7a6a8a', 'center');
      ctx.restore();
    });
    ctx.restore();
  }

  function drawDemo(ctx) {
    var age = S.time - S.demoAt;
    var M = S.mabel;
    S.drops.forEach(function (d) {
      var k = clamp((S.time - d.t0) / 320, 0, 1), tx = 386 + d.i * 34, ty = 49;
      var sx = M.x, sy = M.y - 100;
      ctx.save();
      if (!d.landed) {
        twice(ctx, PAL.yellow, PAL.pink, function () {
          ctx.beginPath(); ctx.arc(sx + (tx - sx) * k, sy + (ty - sy) * k - Math.sin(k * Math.PI) * 60, 9, 0, Math.PI * 2); ctx.fill();
        });
      } else {
        var lk = clamp((S.time - d.landAt) / 400, 0, 1);
        ctx.globalAlpha = 1 - lk;
        ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(tx, ty, 16 + lk * 22, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.restore();
    });
    ctx.save();
    ctx.globalAlpha = clamp(age / 400, 0, 1);
    var w = 760;
    block(ctx, CX - w / 2, 560, w, 76, PAL.paper, PAL.pink, -1, function () {
      text(ctx, 'Fire on the beat. Your notes make the song.', w / 2, 38, '700 30px ' + SANS, PAL.night, 'center');
    });
    block(ctx, 360, 98, 560, 34, PAL.night, PAL.orange, 1, function () {
      text(ctx, 'The beat strip. Every note lands on a square.', 280, 18, '700 17px ' + SANS, PAL.paper, 'center');
    });
    ctx.globalAlpha = clamp((age - DEMO_SKIP_MS) / 400, 0, 1) * (0.6 + 0.4 * Math.sin(S.time / 300));
    text(ctx, 'Tap or press any key to skip', CX, 664, '700 18px ' + SANS, PAL.paper, 'center');
    ctx.restore();
  }

  function drawHud(ctx) {
    if (S.mode === 'demo') { drawStrip(ctx); drawDemo(ctx); return; }
    drawStrings(ctx);
    drawStrip(ctx);
    drawCoinsHud(ctx);
    drawRecUi(ctx);
    drawHint(ctx);
    drawChoice(ctx);
  }

  // ===== title scene ==================================================

  function drawTitleScene(ctx, now) {
    var b = 1 + 0.02 * Math.max(0, 1 - ((now % 536) / 200));
    function s(name, x, y, o) { o.sx = b; o.sy = b; Kit.draw(ctx, name, x, y, o); }
    s('grump', 150, 600, { h: 250, flipX: true });
    s('thrower', 1130, 700, { h: 270 });
    s('chef', 1170, 560, { h: 250 });
    s('umbrella', 1010, 380, { h: 190 });
    s('pigeon', 290, 650, { w: 130, flipX: true });
    s('pigeon', 960, 660, { w: 120 });
    s('pigeon', 420, 590, { w: 100 });
    s('mabel-tamb', 410, 520, { h: 280, alpha: 0.75, tint: PAL.pink, tintAmount: 0.8, flipX: false });
    s('mabel-trumpet', 870, 520, { h: 280, alpha: 0.75, tint: PAL.teal, tintAmount: 0.8 });
    s('mabel-snare', 1000, 560, { h: 250, alpha: 0.75, tint: PAL.yellow, tintAmount: 0.8 });
    s('mabel-idle', 640, 560, { h: 340 });
  }

  // ===== input ========================================================

  function pressNote() {
    if (!S || S.mode === 'title' || S.mode === 'over' || S.mode === 'choice') return;
    if (S.mode === 'demo') { if (S.time - S.demoAt > DEMO_SKIP_MS) endDemo(); return; }
    if (S.mode === 'ready') { firstInput(); S.qGood = 'good'; }
    else if (S.mode === 'play' || S.mode === 'rec' || S.mode === 'ending') {
      var until = S.lastStepAt + STEP_MS - S.time, good = until <= WINDOW_MS;
      S.qGood = good ? 'good' : 'off';
      S.pressFx = { at: S.time, good: good, text: 'off beat' };
    }
    S.queued = true;
    if (S.hint && S.hint.until > 1e8) S.hint = null;
  }

  function onKeyDown(e) {
    var k = e.key.toLowerCase();
    if (!S || S.mode === 'title') return;
    if (S.mode === 'demo') {
      if (k !== 'f5' && k !== 'f12' && !e.metaKey && !e.ctrlKey && S.time - S.demoAt > DEMO_SKIP_MS) { e.preventDefault(); endDemo(); }
      return;
    }
    if (k === ' ' || k === 'j') {
      e.preventDefault();
      if (!e.repeat) pressNote();
      return;
    }
    if (k === '1' || k === '2') { pick(+k - 1); return; }
    keys[k] = true;
    if (k.indexOf('arrow') === 0) e.preventDefault();
  }
  function onKeyUp(e) { keys[e.key.toLowerCase()] = false; }

  function onDown(x, y, e) {
    pointerPos.x = x; pointerPos.y = y;
    if (!S || S.mode === 'title' || S.mode === 'over') return;
    if (S.mode === 'demo') { if (S.time - S.demoAt > DEMO_SKIP_MS) endDemo(); return; }
    if (S.mode === 'choice') {
      for (var i = 0; i < CARD_RECTS.length; i++) {
        var r = CARD_RECTS[i];
        if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) { pick(i); return; }
      }
      return;
    }
    if (x < 640) {
      if (!S.stick) S.stick = { id: e && e.pointerId, ox: x, oy: y, vx: 0, vy: 0 };
      firstInput();
    } else pressNote();
  }
  function onMove(x, y, e) {
    pointerPos.x = x; pointerPos.y = y;
    var st = S && S.stick;
    if (!st || (e && st.id !== e.pointerId)) return;
    var dx = x - st.ox, dy = y - st.oy, m = Math.hypot(dx, dy);
    if (m < 14) { st.vx = 0; st.vy = 0; } else { st.vx = dx / m; st.vy = dy / m; }
  }
  function onUp(x, y, e) {
    if (S && S.stick && (!e || S.stick.id === e.pointerId)) S.stick = null;
  }

  // ===== boot =========================================================

  function showTitle() {
    document.getElementById('title').classList.remove('hidden');
    document.getElementById('end').classList.add('hidden');
  }

  function begin() {
    newGame();
    document.getElementById('title').classList.add('hidden');
    document.getElementById('end').classList.add('hidden');
  }

  g = Kit.boot({
    slug: 'mabel-and-the-mabels',
    world: { w: 1280, h: 720 },
    assets: assets,
    tune: TUNE,
    onStart: function (game) {
      clock = Kit.audio.clock({ bpm: 112, stepsPerBeat: 2, onStep: onClockStep });
      Kit.pointer(game.canvas, { down: onDown, move: onMove, up: onUp });
      if (TOUCH) { var ctl = document.querySelector('.controls span'); if (ctl) ctl.textContent = 'Drag on the left half to move. Tap the right half to play.'; }
      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('keyup', onKeyUp);
      window.addEventListener('blur', function () { keys = {}; if (S) S.stick = null; });
      S = { mode: 'title', time: 0, hecklers: [], copies: [], fx: [], hearts: [], flying: [], strip: [], mabel: { x: 560, y: 440 } };
    },
    onFrame: function (dt, game) {
      var ctx = game.ctx;
      if (S && S.mode === 'title') S.time += dt;
      else if (S) update(dt);
      ctx.save();
      Kit.applyShake(ctx);
      ctx.fillStyle = PAL.night; ctx.fillRect(0, 0, 1280, 720);
      Kit.draw(ctx, 'bg-plaza', 640, 720, { w: 1280, h: 720 });
      if (!S || S.mode === 'title') {
        drawTitleScene(ctx, S ? S.time : 0);
      } else {
        drawWorld(ctx);
        drawHud(ctx);
      }
      ctx.restore();
      Kit.grain(ctx, 1280, 720, 0.12);
    },
    onPause: function () { keys = {}; },
    onResume: function () {}
  });

  document.getElementById('start').addEventListener('click', function () {
    ac = Kit.audio.unlock();
    begin();
  });
  document.getElementById('again').addEventListener('click', function () {
    ac = Kit.audio.unlock();
    begin();
  });

  // Debug hooks for the smoke tool. Not used by the game itself.
  window.__game = {
    g: g,
    isRunning: function () { return !!S && S.mode !== 'title'; },
    state: function () { return S; },
    debug: {
      begin: function () { begin(); },
      press: function () { pressNote(); },
      pick: pick,
      // Plays n steps with no audio clock: a bot that plays every other step and keeps away from hecklers.
      auto: function (n, bot) {
        if (S.mode === 'demo') endDemo();
        if (S.mode === 'ready') firstInput();
        for (var i = 0; i < n && S.mode !== 'over'; i++) {
          if (S.mode === 'choice') pick(0);
          if (bot !== false) {
            if (S.mode !== 'choice') S.queued = (S.dbg % 3 !== 1);
            var M = S.mabel, near = null, nd = 1e9;
            S.hecklers.forEach(function (h) { var d = Math.hypot(h.x - M.x, h.y - M.y); if (h.state === 'walk' && d < nd) { nd = d; near = h; } });
            if (near && nd < 110) { M.x -= (near.x - M.x) / nd * 14; M.y -= (near.y - M.y) / nd * 14; }
            var dc = Math.hypot(M.x - CX, M.y - CY); if (dc > 250) { M.x = CX + (M.x - CX) * 250 / dc; M.y = CY + (M.y - CY) * 250 / dc; }
          }
          stepLogic(S.dbg++, undefined, 0);
          for (var k = 0; k < 16; k++) update(STEP_MS / 16);
        }
        return { mode: S.mode, gs: S.gs, coins: S.coins, fans: S.fans, copies: S.copies.length, strings: S.strings };
      }
    }
  };
})();

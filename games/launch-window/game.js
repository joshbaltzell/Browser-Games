(function () {
  'use strict';
  var COARSE = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);   // phones: name the on-screen buttons, not keys
  var Sim = LaunchSim, TICKS = Sim.TICKS, UNIT = Sim.UNIT, STEP = 1000 / 60;
  var PXU = 15; // sim units per world pixel (64 px tile = 960 units)

  // Every feel constant lives here. Press ` in the game to tune it live.
  var TUNE = {
    rewindSpeed: { v: 300, min: 60, max: 900, step: 30 },   // ticks per second while rewinding
    slowMo: { v: 0.5, min: 0.1, max: 1, step: 0.05 },
    fastMult: { v: 4, min: 1.5, max: 8, step: 0.5 },
    finishMult: { v: 8, min: 2, max: 16, step: 1 },
    holoAlpha: { v: 0.6, min: 0.2, max: 1, step: 0.05 },
    holoTint: { v: 0.75, min: 0.2, max: 1, step: 0.05 },
    holoJitter: { v: 1, min: 0, max: 3, step: 1 },
    rewindDesat: { v: 0.3, min: 0, max: 0.8, step: 0.05 },
    grain: { v: 0.06, min: 0, max: 0.2, step: 0.01 },
    bannerMs: { v: 1500, min: 400, max: 4000, step: 100 },
    launchSecs: { v: 3, min: 1, max: 6, step: 0.5 },
    launchShake: { v: 5, min: 0, max: 14, step: 1 },
    tickerAmbientMs: { v: 9000, min: 3000, max: 20000, step: 500 },
    tickerHoldMs: { v: 6500, min: 2000, max: 15000, step: 500 },
    botHeight: { v: 84, min: 60, max: 110, step: 2 }
  };

  var assets = typeof ASSETS !== 'undefined' ? ASSETS : {};
  var COLORS = {
    steel: '#5f7386', steelDark: '#3d4a5c', steelLight: '#7a90a5', yellow: '#f2c230', cream: '#f3ead8', red: '#d6453d',
    green: '#6cc070', ink: '#14181f', pill: 'rgba(20,26,36,0.74)'
  };
  var HOLO = ['#5fe3ff', '#ff7ad9', '#ffc04d', '#b08cff'];
  var LAMP = ['#888', '#d6453d', '#f2c230', '#6cc070', '#f3ead8'];
  var F_UI = 'Rubik, system-ui, -apple-system, "Segoe UI", sans-serif';
  var F_NUM = '"Chakra Petch", Rubik, system-ui, sans-serif';

  var TICKER = {
    ambient: [
      'T-minus 30. No pressure, Bolt.',
      'Mission Control would like to remind you that Mission Control is watching.',
      'The pad is clean. The pad was always clean.',
      'Hologram maintenance is covered by the warranty.',
      'Reminder: wrenches are for tightening, not pointing.',
      'Weather is fine. Wind is a rumour.',
      'Please do not feed the birds. They are not on the manifest.',
      'This window closes in thirty seconds. So does this sentence.'
    ],
    holo: [
      'Hologram {n} is doing great. Hologram {n} is you. Take the compliment.',
      'Hologram {n} has the first job. You have the other.',
      'Hologram {n} will do exactly what you did. Plan around it.',
      'Another coworker. Same excellent taste in wrenches.'
    ],
    scrub: ['Scrubbed. Good news: you now have a coworker.', 'Scrubbed again. The coworkers are multiplying.', 'Scrubbed. The pad has seen worse. Barely.'],
    rewind: ['Pretend that never happened. It didn\'t.', 'Rewinding. Mission Control saw nothing.'],
    pause: 'Time is paused. Plan carefully, nobody is judging.',
    done: {
      valve: 'Fuel loaded. Nobody check the gauge.', panel: 'Panel bolted. It is, mostly, a panel.',
      cargo: 'Cargo stowed. The moon is secure.', ignition: 'Ignition armed.'
    },
    desync: 'Hologram {n} reached for something that is no longer there.',
    win: 'Launch confirmed. The holograms are applauding silently.',
    replay: 'Full speed, no pauses. Here we go.',
    hint: 'Missed it? Hold Q.',
    start: ['Two jobs, thirty seconds. You cannot do both. Pick one.']
  };

  var running = false;
  var S = {
    mode: 'title', li: 0, lv: null, recs: [], live: null, st: null, cache: null, pcache: null, pstate: null, pkey: -1,
    phase: 'ready', paused: false, pv: 0, acc: 0, racc: 0, rewinding: false, finishing: false, latched: 0,
    dragging: -1, rp: null, launchT: 0, banner: null, ticker: null, tickerT: 0, ambientI: 0, time: 0,
    buttons: [], touch: false, usedRewind: false, hinted: false, layer: null, vis: {}, spawn: null, birds: [],
    stars: {}, workT: 0, rollT: 0, liftT: 0, rewT: 0, winLoops: 0, flash: 0
  };
  var keys = { left: 0, right: 0, act: 0, rew: 0, slow: 0, fast: 0 };
  var vk = { left: 0, right: 0, act: 0, rew: 0, fast: 0 };
  var ptrHold = {};
  var hc = document.createElement('canvas'); hc.width = hc.height = 240;
  var hx = hc.getContext('2d');

  try { S.stars = Kit.store.get('bg.launch-window.stars', {}) || {}; } catch (e) { S.stars = {}; }
  try { if (document.fonts && document.fonts.load) { document.fonts.load('700 20px Rubik'); document.fonts.load('700 20px "Chakra Petch"'); } } catch (e2) { /* fonts are optional */ }

  // ---------- small helpers ----------
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function ease(p) { return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h); ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r); ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath();
  }
  function pill(ctx, x, y, w, h, fill, r) { ctx.fillStyle = fill || COLORS.pill; rr(ctx, x, y, w, h, r != null ? r : 8); ctx.fill(); }
  function txt(ctx, s, x, y, font, color, align, base) {
    ctx.font = font; ctx.fillStyle = color || COLORS.cream; ctx.textAlign = align || 'left'; ctx.textBaseline = base || 'alphabetic';
    ctx.fillText(s, x, y);
  }
  function star(ctx, x, y, r, fill) {
    ctx.beginPath();
    for (var i = 0; i < 10; i++) {
      var a = -Math.PI / 2 + i * Math.PI / 5, rad = i % 2 ? r * 0.45 : r;
      ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * rad, y + Math.sin(a) * rad);
    }
    ctx.closePath(); ctx.fillStyle = fill; ctx.fill();
  }
  function stripes(ctx, x, y, w, h, a, b, step) {
    ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    ctx.fillStyle = a; ctx.fillRect(x, y, w, h); ctx.fillStyle = b;
    for (var sx = x - h; sx < x + w + h; sx += step * 2) {
      ctx.beginPath(); ctx.moveTo(sx, y + h); ctx.lineTo(sx + step, y + h); ctx.lineTo(sx + step + h, y); ctx.lineTo(sx + h, y); ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }
  function lvDef() { return LEVELS[S.li]; }
  function groundRow(lv) { var g = 0; for (var r = 0; r < lv.rows; r++) for (var c = 0; c < lv.cols; c++) if (lv.tiles[r][c][0] === '#') g = Math.max(g, r); return g; }
  function rocketX(lv) { var p = lv.panels[0]; return (p ? p.c * 64 + 32 : 1100) - 40; }
  function near(list, rb) {
    for (var i = 0; i < list.length; i++) if (list[i].y === rb.y && Math.abs(list[i].x - rb.x) <= 720) return list[i];
    return null;
  }

  // ---------- ticker ----------
  function say(text, ms) { S.ticker = { text: text, t: 0, ms: ms || TUNE_V('tickerHoldMs') }; S.tickerT = 0; }
  function TUNE_V(k) { return g.tune[k] != null ? g.tune[k] : TUNE[k].v; }
  function updateTicker(dt) {
    if (S.ticker) { S.ticker.t += dt; if (S.ticker.t > S.ticker.ms) S.ticker = null; }
    if (!S.ticker) {
      S.tickerT += dt;
      if (S.tickerT > TUNE_V('tickerAmbientMs')) {
        S.tickerT = 0; say(TICKER.ambient[S.ambientI++ % TICKER.ambient.length], 6500);
      }
    }
  }

  // ---------- level / loop flow ----------
  function startLevel(i) {
    S.li = i; S.lv = Sim.parse(LEVELS[i].rows, LEVELS[i]); S.recs = []; S.layer = null; S.vis = {}; S.usedRewind = false; S.hinted = false;
    S.mode = 'play'; S.flash = 0; S.banner = null; S.birds = initBirds();
    resetLoop();
    say(i === 0 ? TICKER.start[0] : LEVELS[i].payload, 9000);
  }
  function resetLoop() {
    S.live = new Uint8Array(TICKS); S.st = Sim.create(S.lv, S.recs); S.cache = { snaps: [] }; S.pcache = { snaps: [] }; S.pkey = -1;
    S.phase = 'ready'; S.paused = false; S.pv = 0; S.acc = 0; S.racc = 0; S.finishing = false; S.rewinding = false;
    S.latched = rawInput(); S.rp = null; S.spawn = null;
  }
  function newLoop(sayLine) {
    S.recs.push(S.live.slice());
    if (S.recs.length > 4) S.recs.shift();
    var n = S.recs.length;
    resetLoop();
    S.spawn = { k: n - 1, t: 0 };
    play('loop');
    if (sayLine !== false) say(pick(TICKER.holo).replace(/\{n\}/g, n), 7500);
  }
  function scrub() {
    play('scrub'); S.banner = { text: 'SCRUBBED', t: 0, ms: TUNE_V('bannerMs') }; S.flash = 1;
    var line = TICKER.scrub[Math.min(S.recs.length, TICKER.scrub.length - 1)];
    newLoop(false);
    if (S.li >= 1 && !S.usedRewind && !S.hinted) { S.hinted = true; say(TICKER.hint, 9000); } else say(line, 7500);
  }
  function restartLoop() { resetLoop(); say(TICKER.ambient[0], 4000); }
  function deleteHologram() {
    if (!S.recs.length) return;
    S.recs.pop(); resetLoop(); say('Last hologram deleted. It understood.', 5000);
  }
  function endLoop() {
    if (Sim.done(S.st)) startReplay(); else scrub();
  }
  function startReplay() {
    S.winLoops = S.recs.length + 1;
    var all = S.recs.concat([S.live.slice()]);
    S.rp = Sim.create(S.lv, all); S.phase = 'replay'; S.acc = 0; S.finishing = false; S.paused = false;
    say(TICKER.replay, 5000);
  }
  function startLaunch() {
    S.phase = 'launch'; S.launchT = 0; play('launch'); say(TICKER.win, 9000);
    var def = lvDef(), loops = S.winLoops, stars = loops <= def.par ? 3 : (loops <= def.par + 1 ? 2 : 1);
    S.lastStars = stars;
    if (!S.stars[def.id] || S.stars[def.id] < stars) { S.stars[def.id] = stars; Kit.store.set('bg.launch-window.stars', S.stars); }
    S.birds.forEach(function (b) { b.fly = true; b.vx = (Math.random() - 0.3) * 260 + 120; b.vy = -140 - Math.random() * 160; });
  }
  function initBirds() { return [{ x: 1250, y: 512, fly: false, ph: 0 }, { x: 1222, y: 512, fly: false, ph: 2 }]; }

  // ---------- input ----------
  function rawInput() {
    var b = 0;
    if (keys.left || vk.left > 0) b |= Sim.INPUT.LEFT;
    if (keys.right || vk.right > 0) b |= Sim.INPUT.RIGHT;
    if (keys.act || vk.act > 0) b |= Sim.INPUT.ACTION;
    return b;
  }
  function readInput() {
    var raw = rawInput();
    S.latched &= raw; // a key held through a rewind or loop change counts as released until pressed again
    return raw & ~S.latched;
  }
  var KEYMAP = {
    ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right', Space: 'act', KeyE: 'act', Enter: 'act',
    KeyQ: 'rew', Backspace: 'rew', ShiftLeft: 'slow', ShiftRight: 'slow', KeyF: 'fast'
  };
  window.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = KEYMAP[e.code];
    if (S.mode === 'title') { if (e.code === 'Enter' || e.code === 'Space') { e.preventDefault(); startFromTitle(); } return; }
    if (S.mode === 'select') {
      if (/^Digit[1-9]$/.test(e.code) && LEVELS[+e.code.slice(5) - 1]) startLevel(+e.code.slice(5) - 1);
      else if (e.code === 'Escape') S.mode = 'title';
      return;
    }
    if (k) { keys[k] = 1; e.preventDefault(); }
    if (e.repeat) return;
    if (S.phase === 'won') {
      if (e.code === 'Enter' || e.code === 'Space') { nextLevel(); }
      return;
    }
    if (e.code === 'KeyP' || e.code === 'Tab') { e.preventDefault(); togglePause(); }
    else if (e.code === 'KeyR') restartLoop();
    else if (e.code === 'KeyZ') deleteHologram();
    else if (e.code === 'Escape') S.mode = 'select';
    else if (e.code === 'Comma' && S.paused) S.pv = clamp(S.pv - 60, 0, TICKS);
    else if (e.code === 'Period' && S.paused) S.pv = clamp(S.pv + 60, 0, TICKS);
  });
  window.addEventListener('keyup', function (e) { var k = KEYMAP[e.code]; if (k) keys[k] = 0; });
  window.addEventListener('blur', function () { for (var k in keys) keys[k] = 0; });

  function togglePause() {
    if (S.phase !== 'ready' && S.phase !== 'run') return;
    S.paused = !S.paused; S.pv = S.st.t; S.pkey = -1; S.pcache = { snaps: [] }; S.finishing = false;
    if (S.paused) say(TICKER.pause, 6000);
    else S.latched = rawInput();
  }
  function startFromTitle() {
    if (running) return;
    running = true;
    var first = 0;
    for (var i = 0; i < LEVELS.length; i++) { if (!S.stars[LEVELS[i].id]) { first = i; break; } first = i; }
    Kit.audio.unlock();
    startLevel(first);
    startBed();
  }
  var bed = null;
  function startBed() {
    try {
      if (!bed) bed = Kit.audio.bed({ noise: { cutoff: 420, gain: 0.03 } });
      bed.start();
    } catch (e) { /* audio is optional */ }
  }
  function nextLevel() {
    if (S.li + 1 < LEVELS.length) startLevel(S.li + 1); else S.mode = 'select';
  }

  // ---------- pointer ----------
  function tlX(t) { return 40 + t / TICKS * 1200; }
  function tlT(x) { return clamp(Math.round((x - 40) / 1200 * TICKS), 0, TICKS); }
  function hit(b, x, y) { return x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h; }
  var gm = null;
  function setupPointer() {
    Kit.pointer(gm.canvas, {
      down: function (x, y, e) {
        if (e.pointerType === 'touch') S.touch = true;
        for (var i = S.buttons.length - 1; i >= 0; i--) {
          var b = S.buttons[i];
          if (hit(b, x, y)) {
            if (b.hold) { vk[b.hold]++; ptrHold[e.pointerId] = b.hold; } else if (b.fn) b.fn();
            return;
          }
        }
        if (S.mode === 'play' && (S.phase === 'ready' || S.phase === 'run') && y >= 588) {
          S.dragging = e.pointerId;
          if (!S.paused) togglePause();
          S.pv = tlT(x);
        }
      },
      move: function (x, y, e) { if (S.dragging === e.pointerId) S.pv = tlT(x); },
      up: function (x, y, e) {
        if (ptrHold[e.pointerId]) { vk[ptrHold[e.pointerId]] = Math.max(0, vk[ptrHold[e.pointerId]] - 1); delete ptrHold[e.pointerId]; }
        if (S.dragging === e.pointerId) S.dragging = -1;
      }
    });
  }

  // ---------- sim stepping ----------
  function handleEvents(ev, st) {
    for (var i = 0; i < ev.length; i++) {
      var e = ev[i];
      if (e.type === 'pickup') play('pick');
      else if (e.type === 'drop') play('drop', { gain: e.kind === 'hatch' ? 0.8 : 1 });
      else if (e.type === 'connect') play('connect');
      else if (e.type === 'doorOpen') play('lever', { gain: 0.5 });
      else if (e.type === 'taskDone') { play('done'); say(TICKER.done[e.task] || 'Task complete.', 5000); }
      else if (e.type === 'desync') {
        if (S.li >= 1 && !S.usedRewind && !S.hinted && st === S.st) { S.hinted = true; say(TICKER.hint, 9000); }
        else if (st === S.st) say(TICKER.desync.replace('{n}', e.robot + 1), 5000);
      }
    }
  }
  function advanceLive() {
    var input = S.finishing ? 0 : readInput();
    if (S.phase === 'ready') {
      if (!input) return false;
      S.phase = 'run'; S.tickerT = 0;
    }
    S.live[S.st.t] = input;
    var ev = Sim.tick(S.st, input);
    handleEvents(ev, S.st);
    var rem = TICKS - S.st.t;
    if (rem <= 300 && rem % 60 === 0 && rem > 0) play('second', { midi: 5 - rem / 60 });
    return true;
  }
  function rewind(dt) {
    if (!S.rewinding) { S.rewinding = true; S.rewT = 0; S.usedRewind = true; say(pick(TICKER.rewind), 5000); }
    S.finishing = false; S.acc = 0;
    S.racc += dt / 1000 * TUNE_V('rewindSpeed');
    var k = Math.floor(S.racc); S.racc -= k;
    if (k > 0) {
      var nt = Math.max(0, S.st.t - k);
      S.st = Sim.seek(S.lv, S.recs, S.live, nt, S.cache);
      S.pv = nt; S.pkey = -1;
      if (nt === 0) S.phase = 'ready';
    }
    S.rewT -= dt; if (S.rewT <= 0) { play('rewind'); S.rewT = 450; }
  }
  function endRewind() {
    S.rewinding = false;
    var t = S.st.t;
    for (var i = t; i < TICKS; i++) S.live[i] = 0;
    Sim.invalidate(S.cache, t);
    S.pcache = { snaps: [] }; S.pkey = -1;
    S.latched = rawInput();
    if (t > 0) S.phase = 'run'; else S.phase = 'ready';
  }

  function ambientSounds(dt, st, live) {
    var me = st.robots[st.robots.length - 1];
    S.rollT -= dt; S.workT -= dt; S.liftT -= dt;
    if (live && me.moving && S.rollT <= 0) { play('roll'); S.rollT = 110; }
    if (S.workT <= 0) {
      for (var i = 0; i < st.robots.length; i++) {
        var rb = st.robots[i];
        if (rb.act && rb.carry < 0 && (near(st.level.valves, rb) || near(st.level.panels, rb))) {
          if (i === st.robots.length - 1 || live) { play('work', { gain: i === st.robots.length - 1 ? 1 : 0.6 }); }
          S.workT = 120; break;
        }
      }
    }
    if (S.liftT <= 0) {
      for (var k = 0; k < st.lifts.length; k++) if (st.lifts[k].moving) { play('lift'); S.liftT = 280; break; }
    }
  }

  function update(dt) {
    S.time += dt;
    if (S.banner) { S.banner.t += dt; if (S.banner.t > S.banner.ms) S.banner = null; }
    if (S.flash > 0) S.flash = Math.max(0, S.flash - dt / 600);
    updateBirds(dt);
    if (S.mode !== 'play') return;
    updateTicker(dt);
    if (S.spawn) { S.spawn.t += dt; if (S.spawn.t > 900) S.spawn = null; }
    if (S.phase === 'won') return;
    if (S.phase === 'launch') {
      S.launchT += dt / 1000;
      Kit.shake(TUNE_V('launchShake'), 100);
      var rx = rocketX(S.lv), gy = groundRow(S.lv) * 64, p = clamp(S.launchT / TUNE_V('launchSecs'), 0, 1);
      for (var i = 0; i < 3; i++) Kit.burst(rx + (Math.random() - 0.5) * 40, gy - 460 * 0 + rocketDy(p) - 2, { n: 2, color: Math.random() < 0.5 ? '#f3ead8' : '#f6b48f', speed: 140, life: 800, gravity: -40, size: 9 });
      if (S.launchT > TUNE_V('launchSecs') + 1.6) { S.phase = 'won'; }
      return;
    }
    if (S.phase === 'replay') {
      S.acc += dt;
      var guard = 0;
      while (S.acc >= STEP && S.rp.t < TICKS && guard++ < 8) {
        S.acc -= STEP; handleEvents(Sim.tick(S.rp, 0), S.rp);
      }
      ambientSounds(dt, S.rp, false);
      if (S.rp.t >= TICKS) startLaunch();
      return;
    }
    var rewHeld = keys.rew || vk.rew;
    if (rewHeld && S.st.t > 0) { rewind(dt); return; }
    if (S.rewinding) endRewind();
    if (S.paused || S.dragging >= 0) return;
    var mult = S.finishing ? TUNE_V('finishMult') : ((keys.fast || vk.fast) ? TUNE_V('fastMult') : (keys.slow ? TUNE_V('slowMo') : 1));
    S.acc += dt * mult;
    var n = 0;
    while (S.acc >= STEP && S.st.t < TICKS && n < 200) {
      S.acc -= STEP;
      if (!advanceLive()) { S.acc = 0; break; }
      n++;
    }
    if (S.phase === 'run') ambientSounds(dt, S.st, true);
    if (S.st.t >= TICKS) endLoop();
  }
  function updateBirds(dt) {
    S.birds.forEach(function (b) {
      if (b.fly) { b.x += b.vx * dt / 1000; b.y += b.vy * dt / 1000; b.vy -= 60 * dt / 1000; }
    });
  }
  function rocketDy(p) { return -1100 * p * p; }

  // ---------- drawing: structures ----------
  function buildLayer(lv) {
    var cv = document.createElement('canvas'); cv.width = 1280; cv.height = 720;
    var c = cv.getContext('2d'), gr = groundRow(lv), r, col;
    // shaft guide rails
    lv.lifts.forEach(function (l) {
      var x = l.c * 64, top = l.rt * 64 - 100, bot = (l.rb + 1) * 64;
      c.fillStyle = COLORS.steelDark; c.fillRect(x + 1, top, 5, bot - top); c.fillRect(x + 58, top, 5, bot - top);
      c.fillRect(x - 2, top - 10, 68, 12);
      c.fillStyle = COLORS.yellow; c.beginPath(); c.arc(x + 12, top - 4, 7, 0, 7); c.arc(x + 52, top - 4, 7, 0, 7); c.fill();
      c.fillStyle = COLORS.steelDark; c.beginPath(); c.arc(x + 12, top - 4, 3, 0, 7); c.arc(x + 52, top - 4, 3, 0, 7); c.fill();
    });
    // deck supports
    for (r = 0; r < gr; r++) {
      for (col = 0; col < lv.cols; col++) {
        if (lv.tiles[r][col][0] !== '#' || col * 64 > rocketX(lv) - 150) continue;
        if (col % 4 === 0 || lv.tiles[r][col + 1] === undefined || lv.tiles[r][col + 1][0] !== '#') {
          var sx = col * 64 + (col % 4 === 0 ? 4 : 46);
          c.fillStyle = COLORS.steelDark; c.fillRect(sx, r * 64 + 24, 12, gr * 64 - r * 64 - 24);
          c.strokeStyle = '#4b5a6e'; c.lineWidth = 4; c.beginPath();
          for (var yy = r * 64 + 24; yy < gr * 64 - 64; yy += 96) { c.moveTo(sx + 12, yy); c.lineTo(sx + 12 + 52, yy + 96); c.moveTo(sx + 12 + 52, yy); c.lineTo(sx + 12, yy + 96); }
          c.stroke();
        }
      }
    }
    // floors
    for (r = 0; r < lv.rows; r++) {
      for (col = 0; col < lv.cols; col++) {
        if (lv.tiles[r][col][0] !== '#') continue;
        var x = col * 64, y = r * 64, h = r === gr ? 64 : 24;
        c.fillStyle = COLORS.steel; c.fillRect(x, y, 64, h);
        c.fillStyle = COLORS.steelLight; c.fillRect(x, y, 64, 6);
        c.fillStyle = COLORS.steelDark; c.fillRect(x, y + h - (r === gr ? 16 : 8), 64, r === gr ? 16 : 8);
        c.fillStyle = '#4b5a6e'; c.fillRect(x, y, 1, h);
        for (var rv = 0; rv < 2; rv++) { c.fillStyle = COLORS.steelDark; c.beginPath(); c.arc(x + 16 + rv * 32, y + 12, 2.4, 0, 7); c.fill(); }
      }
      // yellow railings on upper decks
      if (r !== gr) {
        var c0 = -1;
        for (col = 0; col <= lv.cols; col++) {
          var isF = col < lv.cols && lv.tiles[r][col][0] === '#';
          if (isF && c0 < 0) c0 = col;
          if (!isF && c0 >= 0) {
            var x0 = c0 * 64, x1 = col * 64;
            var openL = liftIdx(lv, c0 - 1) >= 0, openR = liftIdx(lv, col) >= 0;
            c.fillStyle = COLORS.yellow;
            c.fillRect(x0 + (openL ? 0 : 0), r * 64 - 38, x1 - x0, 4); c.fillRect(x0, r * 64 - 19, x1 - x0, 3);
            for (var px = x0; px <= x1; px += 64) {
              if ((px === x0 && openL) || (px === x1 && openR)) continue;
              c.fillRect(px - (px === x1 ? 4 : 0), r * 64 - 38, 4, 38);
            }
            c0 = -1;
          }
        }
      }
    }
    return cv;
  }
  function liftIdx(lv, c) { for (var i = 0; i < lv.lifts.length; i++) if (lv.lifts[i].c === c) return i; return -1; }

  function drawProgress(ctx, x, y, f, color) {
    if (f <= 0 || f >= 1) return;
    ctx.save(); ctx.lineWidth = 6; ctx.strokeStyle = 'rgba(20,26,36,0.6)'; ctx.beginPath(); ctx.arc(x, y, 18, 0, 7); ctx.stroke();
    ctx.strokeStyle = color || COLORS.yellow; ctx.beginPath(); ctx.arc(x, y, 18, -Math.PI / 2, -Math.PI / 2 + f * Math.PI * 2); ctx.stroke();
    ctx.restore();
  }

  function drawScene(ctx, st, opt) {
    var lv = st.level, gr = groundRow(lv), gy = gr * 64, i, rx = rocketX(lv);
    var p = opt.launchP || 0;
    if (!S.layer) S.layer = buildLayer(lv);
    // rocket (behind the structures)
    Kit.draw(ctx, 'rocket', rx, gy + 4 + rocketDy(p), { h: 430 });
    if (opt.launchP) { /* exhaust is drawn by the particle system */ }
    ctx.drawImage(S.layer, 0, 0);
    // tank, hose
    lv.valves.forEach(function (v) {
      var vx = v.x / PXU;
      Kit.draw(ctx, 'tank', vx, gy + 2, { h: 120 });
      var frac = st.valve / lv.hold.valve;
      drawProgress(ctx, vx, gy - 138, frac, COLORS.yellow);
      var hx0 = vx + 56, hy0 = gy - 26, hx1 = rx - 24, hy1 = gy - 34;
      ctx.save(); ctx.lineCap = 'butt'; ctx.lineWidth = 11; ctx.strokeStyle = COLORS.ink; ctx.beginPath();
      ctx.moveTo(hx0, hy0); ctx.bezierCurveTo(hx0 + 120, gy + 12, hx1 - 160, gy + 12, hx1, hy1); ctx.stroke();
      if (st.hose) {
        ctx.lineWidth = 9; ctx.strokeStyle = COLORS.yellow; ctx.setLineDash([12, 12]); ctx.lineDashOffset = -(S.time / 40) * (frac > 0 && frac < 1 ? 1 : 0);
        ctx.beginPath(); ctx.moveTo(hx0, hy0); ctx.bezierCurveTo(hx0 + 120, gy + 12, hx1 - 160, gy + 12, hx1, hy1); ctx.stroke();
      }
      ctx.restore();
    });
    // panels (on the rocket)
    lv.panels.forEach(function (pn) {
      var px = pn.x / PXU + 8, py = pn.y / PXU - 34 + rocketDy(p), f = st.panel / lv.hold.panel;
      ctx.fillStyle = COLORS.steelDark; rr(ctx, px - 24, py - 24, 48, 48, 4); ctx.fill();
      ctx.fillStyle = COLORS.steel; rr(ctx, px - 21, py - 21, 42, 42, 3); ctx.fill();
      for (var s4 = 0; s4 < 4; s4++) {
        ctx.fillStyle = f * 4 > s4 + 0.5 || f >= 1 ? COLORS.green : COLORS.steelDark;
        ctx.beginPath(); ctx.arc(px + (s4 % 2 ? 14 : -14), py + (s4 < 2 ? -14 : 14), 3.5, 0, 7); ctx.fill();
      }
      drawProgress(ctx, px, py - 40, f, COLORS.yellow);
    });
    // hatches
    lv.hatches.forEach(function (h) {
      var x = h.c * 64, y = (h.r + 1) * 64;
      ctx.fillStyle = '#2b3442'; ctx.fillRect(x + 4, y - 26, 56, 26);
      stripes(ctx, x + 2, y - 30, 60, 5, COLORS.yellow, COLORS.ink, 6);
      if (st.hatch) Kit.draw(ctx, 'crate', x + 32, y - 2, { w: 40 });
      else txt(ctx, 'CARGO', x + 32, y - 9, '700 9px ' + F_UI, 'rgba(243,234,216,0.55)', 'center');
    });
    // plates
    lv.plates.forEach(function (pl) {
      var on = isPlateOn(st, pl), x = pl.c * 64, y = (pl.r + 1) * 64, d = on ? 3 : 0;
      ctx.fillStyle = COLORS.steelDark; ctx.fillRect(x + 6, y - 7 + d, 52, 7 - d);
      ctx.fillStyle = COLORS.yellow; ctx.fillRect(x + 8, y - 7 + d, 48, 4);
      ctx.fillStyle = on ? LAMP[pl.n] : 'rgba(20,26,36,0.7)'; ctx.fillRect(x + 28, y - 6 + d, 8, 2);
    });
    // lever consoles
    lv.levers.forEach(function (lev) {
      var held = false;
      for (i = 0; i < st.robots.length; i++) { var rb = st.robots[i]; if (rb.act && rb.carry < 0 && rb.y === lev.y && Math.abs(rb.x - lev.x) <= 720) held = true; }
      var cx = lev.x / PXU, cy = lev.y / PXU;
      Kit.draw(ctx, held ? 'console-down' : 'console-up', cx, cy, { h: held ? 46 : 70 });
      ctx.fillStyle = held ? LAMP[lev.n] : 'rgba(20,26,36,0.7)'; ctx.fillRect(cx - 4, cy - 12, 8, 6);
    });
    // doors
    lv.doors.forEach(function (d, k) {
      var f = st.doors[k] / Sim.DOOR_FRAMES, x = d.c * 64, top = (d.r - 1) * 64, hh = 128;
      ctx.fillStyle = COLORS.steelDark; ctx.fillRect(x + 4, top - 8, 56, 12); ctx.fillRect(x + 2, top, 6, hh); ctx.fillRect(x + 56, top, 6, hh);
      var vis = hh * (1 - ease(f));
      if (vis > 1) {
        ctx.fillStyle = COLORS.steel; ctx.fillRect(x + 8, top, 48, vis);
        ctx.fillStyle = COLORS.steelDark; for (var sl = 12; sl < vis; sl += 14) ctx.fillRect(x + 8, top + sl, 48, 2);
        stripes(ctx, x + 8, top + Math.max(0, vis - 14), 48, Math.min(14, vis), COLORS.yellow, COLORS.ink, 7);
      }
      ctx.fillStyle = f > 0.99 ? LAMP[d.n] : 'rgba(243,234,216,0.25)'; ctx.fillRect(x + 28, top - 5, 8, 5);
    });
    // lifts
    lv.lifts.forEach(function (l, k) {
      var x = l.c * 64, y = st.lifts[k].y / PXU;
      ctx.fillStyle = COLORS.steelDark; ctx.fillRect(x + 3, y, 58, 14);
      ctx.fillStyle = COLORS.steel; ctx.fillRect(x + 3, y, 58, 8);
      stripes(ctx, x + 3, y + 8, 58, 6, COLORS.yellow, COLORS.ink, 6);
      ctx.fillStyle = st.lifts[k].moving ? LAMP[l.n] : 'rgba(20,26,36,0.6)'; ctx.fillRect(x + 28, y + 1, 8, 4);
    });
    // items
    st.items.forEach(function (it) {
      if (it.carried === -2) return;
      var ix = it.x / PXU, iy = it.y / PXU, bob = 0;
      if (it.carried >= 0) iy -= 66;
      if (it.kind === 'crate') Kit.draw(ctx, 'crate', ix, iy, { w: 52 });
      else Kit.draw(ctx, 'nozzle', ix, iy + bob, { w: 56 });
    });
    // birds
    S.birds.forEach(function (b) {
      var hop = b.fly ? 0 : Math.max(0, Math.sin(S.time / 350 + b.ph)) * 4;
      Kit.draw(ctx, 'bird', b.x, b.y - hop, { h: 26, flipX: b.fly ? b.vx < 0 : true, rot: b.fly ? -0.3 : 0 });
    });
    // arrows
    if (opt.arrows) {
      var targets = [];
      lv.valves.forEach(function (v) { if (!st.tasks.valve) targets.push([v.x / PXU, v.y / PXU - 150]); });
      lv.panels.forEach(function (v) { if (!st.tasks.panel) targets.push([v.x / PXU, v.y / PXU - 120]); });
      lv.levers.forEach(function (v) { targets.push([v.x / PXU, v.y / PXU - 86]); });
      targets.forEach(function (tg) {
        var by = Math.sin(S.time / 220) * 5;
        ctx.fillStyle = COLORS.yellow; ctx.beginPath(); ctx.moveTo(tg[0] - 11, tg[1] + by - 12); ctx.lineTo(tg[0] + 11, tg[1] + by - 12); ctx.lineTo(tg[0], tg[1] + by + 6); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = COLORS.ink; ctx.lineWidth = 2; ctx.stroke();
      });
    }
    // robots: holograms first (oldest first), the live robot last
    var n = st.robots.length, last = opt.hideLive ? n - 1 : n;
    for (i = 0; i < last; i++) {
      var live = i === n - 1;
      drawBot(ctx, st.robots[i], i, live, opt.wave);
    }
  }
  function isPlateOn(st, pl) {
    for (var i = 0; i < st.robots.length; i++) { var r = st.robots[i]; if (r.y === pl.y && Math.floor(r.x / UNIT) === pl.c) return true; }
    for (var j = 0; j < st.items.length; j++) { var it = st.items[j]; if (it.carried === -1 && it.y === pl.y && Math.floor(it.x / UNIT) === pl.c) return true; }
    return false;
  }

  function poseOf(rb, wave) {
    if (wave) return 'bolt-wave';
    if (rb.carry >= 0) return 'bolt-carry';
    if (rb.act) return 'bolt-action';
    if (rb.moving) return 'bolt-roll';
    return 'bolt-idle';
  }
  function drawBot(ctx, rb, i, isLive, wave) {
    var key = 'r' + i, v = S.vis[key] || (S.vis[key] = { lean: 0, sq: 1, pm: 0 });
    if (v.pm && !rb.moving) v.sq = 0.9;
    v.pm = rb.moving; v.sq += (1 - v.sq) * 0.2;
    v.lean += (rb.moving - v.lean) * 0.25;
    var pose = poseOf(rb, wave), rec = assets[pose] || {}, s = TUNE_V('botHeight') / 384;
    var w = (rec.w || 251) * s, h = (rec.h || 384) * s;
    var x = rb.x / PXU, y = rb.y / PXU + (rb.moving ? Math.sin(S.time / 28) * 0.8 : 0);
    var o = { w: w, h: h, rot: v.lean * 0.105, flipX: rb.face < 0, sx: 2 - v.sq, sy: v.sq };
    if (isLive) { Kit.draw(ctx, pose, x, y, o); return; }
    // hologram: tinted sprite, scanlines, jitter, the only glow in the game
    var color = HOLO[i % 4];
    if (rb.flick > 0 && Math.floor(S.time / 60) % 2 === 0) color = COLORS.red;
    var sp = S.spawn && S.spawn.k === i ? S.spawn.t / 900 : 1;
    hx.clearRect(0, 0, 240, 240);
    var o2 = { w: w, h: h, rot: o.rot, flipX: o.flipX, sx: o.sx, sy: o.sy, tint: color, tintAmount: TUNE_V('holoTint') };
    Kit.draw(hx, pose, 120, 214, o2);
    hx.globalCompositeOperation = 'destination-out'; hx.fillStyle = 'rgba(0,0,0,0.55)';
    for (var yy = 0; yy < 240; yy += 4) hx.fillRect(0, yy, 240, 2);
    hx.globalCompositeOperation = 'source-over';
    var jit = (TUNE_V('holoJitter') > 0 && Math.floor(S.time / 90 + i) % 5 === 0) ? TUNE_V('holoJitter') : 0;
    ctx.save();
    ctx.globalAlpha = TUNE_V('holoAlpha') * (rb.flick > 0 ? 0.8 : 1) * (0.35 + 0.65 * sp);
    ctx.shadowColor = color; ctx.shadowBlur = 14 + (sp < 1 ? 20 * (1 - sp) : 0);
    ctx.drawImage(hc, x - 120, y - 214 + jit);
    ctx.shadowBlur = 0; ctx.globalAlpha *= 0.55;
    ctx.drawImage(hc, x - 120, y - 214 + jit);
    ctx.restore();
  }

  // ---------- HUD ----------
  function button(ctx, id, x, y, w, h, label, fn, o) {
    o = o || {};
    S.buttons.push({ id: id, x: x, y: y, w: w, h: h, fn: fn, hold: o.hold });
    var active = o.active;
    if (o.primary) {
      ctx.fillStyle = '#b88f12'; rr(ctx, x, y, w, h, 8); ctx.fill();
      ctx.fillStyle = COLORS.yellow; rr(ctx, x, y, w, h - 5, 8); ctx.fill();
    } else { ctx.fillStyle = active ? 'rgba(242,194,48,0.9)' : COLORS.pill; rr(ctx, x, y, w, h, 8); ctx.fill(); }
    txt(ctx, label, x + w / 2, y + h / 2 - (o.primary ? 2 : 0), '500 ' + (o.size || 15) + 'px ' + F_UI, (o.primary || active) ? COLORS.ink : COLORS.cream, 'center', 'middle');
  }
  function drawNum(ctx, s, x, y, size, color) {
    ctx.font = '700 ' + size + 'px ' + F_NUM; ctx.fillStyle = color; ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'center';
    var cx = x;
    for (var i = 0; i < s.length; i++) {
      var ch = s[i], cw = /[0-9]/.test(ch) ? size * 0.6 : (ch === '.' ? size * 0.3 : (ch === 'T' ? size * 0.62 : size * 0.6));
      ctx.fillText(ch, cx + cw / 2, y); cx += cw;
    }
    return cx - x;
  }
  function icon(ctx, kind, x, y, done) {
    ctx.fillStyle = 'rgba(20,26,36,0.82)'; ctx.beginPath(); ctx.arc(x, y, 24, 0, 7); ctx.fill();
    ctx.strokeStyle = done ? COLORS.green : COLORS.cream; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 22, 0, 7); ctx.stroke();
    ctx.strokeStyle = COLORS.cream; ctx.fillStyle = COLORS.cream; ctx.lineWidth = 3; ctx.lineCap = 'round';
    if (kind === 'panel') { ctx.beginPath(); ctx.moveTo(x - 8, y + 8); ctx.lineTo(x + 6, y - 6); ctx.stroke(); ctx.beginPath(); ctx.arc(x + 8, y - 8, 5, 0, 7); ctx.stroke(); }
    else if (kind === 'cargo') { ctx.strokeRect(x - 9, y - 8, 18, 16); ctx.beginPath(); ctx.moveTo(x - 9, y - 8); ctx.lineTo(x + 9, y + 8); ctx.moveTo(x + 9, y - 8); ctx.lineTo(x - 9, y + 8); ctx.stroke(); }
    else if (kind === 'valve') { ctx.beginPath(); ctx.arc(x, y, 9, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x - 9, y); ctx.lineTo(x + 9, y); ctx.moveTo(x, y - 9); ctx.lineTo(x, y + 9); ctx.stroke(); }
    else { ctx.beginPath(); ctx.moveTo(x, y - 11); ctx.lineTo(x + 7, y + 8); ctx.lineTo(x - 7, y + 8); ctx.closePath(); ctx.stroke(); }
    if (done) { ctx.fillStyle = COLORS.green; ctx.beginPath(); ctx.arc(x + 15, y + 15, 10, 0, 7); ctx.fill();
      ctx.strokeStyle = COLORS.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x + 10, y + 15); ctx.lineTo(x + 14, y + 19); ctx.lineTo(x + 20, y + 11); ctx.stroke(); }
    ctx.lineCap = 'butt';
  }
  var TASK_ICON = { valve: 'valve', panel: 'panel', cargo: 'cargo', ignition: 'rocket' };

  function drawHud(ctx, vs, shownT) {
    var lv = vs.level, def = lvDef(), rem = (TICKS - shownT) / 60, i;
    var secs = Math.ceil(rem - 1e-9), lastFive = rem <= 5 && rem > 0 && S.phase === 'run' && !S.paused;
    var pulse = lastFive ? 1 + 0.1 * Math.max(0, 1 - ((rem % 1) * 3)) : 1;
    // countdown
    pill(ctx, 16, 58, 262, 92);
    ctx.save(); ctx.translate(34, 112); ctx.scale(pulse, pulse);
    drawNum(ctx, 'T−' + rem.toFixed(1), 0, 0, 52, lastFive ? '#ff8f86' : COLORS.cream);
    ctx.restore();
    var loopN = S.phase === 'replay' || S.phase === 'launch' || S.phase === 'won' ? S.winLoops : S.recs.length + 1;
    txt(ctx, 'Loop ' + loopN + ' · par ' + def.par, 34, 138, '500 17px ' + F_UI, 'rgba(243,234,216,0.85)');
    // ticker
    if (S.ticker) {
      ctx.font = '500 17px ' + F_UI; var tw = ctx.measureText(S.ticker.text).width;
      var fade = clamp((S.ticker.ms - S.ticker.t) / 400, 0, 1);
      ctx.globalAlpha = fade; pill(ctx, 16, 158, Math.min(tw + 28, 760), 36);
      txt(ctx, S.ticker.text, 30, 177, '500 17px ' + F_UI, COLORS.cream, 'left', 'middle'); ctx.globalAlpha = 1;
    }
    // checklist
    var tasks = lv.tasks, tx0 = 1280 - 16 - 24;
    for (i = 0; i < tasks.length; i++) icon(ctx, TASK_ICON[tasks[i]], tx0 - (tasks.length - 1 - i) * 58, 38, !!vs.tasks[tasks[i]]);
    // buttons (top row)
    var play_ = S.phase === 'ready' || S.phase === 'run';
    if (S.mode === 'play') {
      button(ctx, 'levels', 180, 8, 82, 44, 'Levels', function () { S.mode = 'select'; });
      if (play_) {
        button(ctx, 'pause', 268, 8, 74, 44, S.paused ? 'Play' : 'Pause', togglePause, { active: S.paused });
        button(ctx, 'rewind', 348, 8, 84, 44, 'Rewind', null, { hold: 'rew', active: S.rewinding });
        button(ctx, 'restart', 438, 8, 84, 44, 'Restart', restartLoop);
        button(ctx, 'undo', 528, 8, 74, 44, 'Undo', deleteHologram);
        if (S.phase === 'run' && !S.paused && !S.finishing) button(ctx, 'finish', 608, 8, 128, 44, 'Finish loop', function () { S.finishing = true; });
      }
    }
    // timeline strip
    if (play_ || S.phase === 'replay') drawTimeline(ctx, vs, shownT);
    if (S.touch && play_) drawTouch(ctx);
    if (S.phase === 'ready' && !S.paused && S.mode === 'play') {
      pill(ctx, 440, 548, 400, 36);
      txt(ctx, (S.touch || COARSE) ? 'Touch a control to start the clock' : 'Press a move key to start the clock', 640, 566, '500 16px ' + F_UI, COLORS.cream, 'center', 'middle');
    }
    if (S.paused) {
      pill(ctx, 380, 62, 520, 36);
      txt(ctx, 'Paused. Drag the timeline to look ahead. , and . step a second.', 640, 80, '500 15px ' + F_UI, COLORS.cream, 'center', 'middle');
    }
    if (S.rewinding) txt(ctx, '◀◀ REWIND', 640, 300, '700 34px ' + F_NUM, 'rgba(243,234,216,0.8)', 'center', 'middle');
  }
  function drawTimeline(ctx, vs, shownT) {
    pill(ctx, 24, 592, 1232, 116, 'rgba(20,26,36,0.78)', 10);
    var rows = Math.max(S.recs.length + 1, 1), k, t;
    var all = S.phase === 'replay' ? vs.recs.concat([null]) : S.recs.concat([S.live]);
    for (k = 0; k < 5; k++) {
      var y = 606 + k * 19;
      ctx.fillStyle = 'rgba(243,234,216,0.08)'; ctx.fillRect(40, y + 5, 1200, 2);
      var rec = all[k]; if (!rec) continue;
      var col = k === S.recs.length && S.phase !== 'replay' ? COLORS.cream : HOLO[k % 4];
      ctx.fillStyle = col; var run = -1;
      for (t = 0; t <= TICKS; t++) {
        var on = t < TICKS && (rec[t] & Sim.INPUT.ACTION);
        if (on && run < 0) run = t;
        if (!on && run >= 0) { rr(ctx, tlX(run), y + 1, Math.max(3, tlX(t) - tlX(run)), 10, 5); ctx.fill(); run = -1; }
      }
    }
    var px = tlX(shownT);
    ctx.fillStyle = COLORS.cream; ctx.fillRect(px - 1, 598, 2, 104);
    ctx.beginPath(); ctx.arc(px, 600, 7, 0, 7); ctx.fill();
    txt(ctx, 'rows: one per loop', 1236, 700, '500 11px ' + F_UI, 'rgba(243,234,216,0.0)', 'right');
  }
  function drawTouch(ctx) {
    function circ(id, cx, cy, r, label, hold) {
      S.buttons.push({ id: id, x: cx - r, y: cy - r, w: r * 2, h: r * 2, hold: hold });
      ctx.fillStyle = 'rgba(20,26,36,0.6)'; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill();
      txt(ctx, label, cx, cy, '700 ' + (r > 50 ? 22 : 17) + 'px ' + F_UI, COLORS.cream, 'center', 'middle');
    }
    circ('t-left', 66, 540, 48, '◀', 'left'); circ('t-right', 176, 540, 48, '▶', 'right');
    circ('t-act', 1186, 530, 66, 'ACTION', 'act'); circ('t-rew', 1066, 556, 38, 'REW', 'rew');
    S.buttons.push({ id: 't-pause', x: 988, y: 518, w: 76, h: 76, fn: togglePause });
    ctx.fillStyle = 'rgba(20,26,36,0.6)'; ctx.beginPath(); ctx.arc(1026, 556, 38, 0, 7); ctx.fill();
    txt(ctx, S.paused ? 'PLAY' : 'PAUSE', 1026, 556, '700 15px ' + F_UI, COLORS.cream, 'center', 'middle');
  }

  // ---------- screens ----------
  function drawBackdrop(ctx) {
    if (assets['bg-pad']) Kit.draw(ctx, 'bg-pad', 640, 720, { w: 1280, h: 720 });
    else { var gg = ctx.createLinearGradient(0, 0, 0, 720); gg.addColorStop(0, '#b98bc9'); gg.addColorStop(1, '#f6b48f'); ctx.fillStyle = gg; ctx.fillRect(0, 0, 1280, 720); }
  }
  function drawTitle(ctx) {
    drawBackdrop(ctx);
    Kit.draw(ctx, 'rocket', 1010, 590, { h: 520 });
    stripes(ctx, 0, 584, 1280, 14, COLORS.yellow, COLORS.ink, 18);
    Kit.draw(ctx, 'console-up', 215, 590, { h: 130 });
    Kit.draw(ctx, 'crate', 80, 640, { w: 140 });
    var bounce = Math.sin(S.time / 300) * 3;
    function wave(x, color, ph) {
      hx.clearRect(0, 0, 240, 240);
      Kit.draw(hx, 'bolt-wave', 120, 230, { h: 200, tint: color, tintAmount: 0.75 });
      hx.globalCompositeOperation = 'destination-out'; hx.fillStyle = 'rgba(0,0,0,0.55)';
      for (var yy = 0; yy < 240; yy += 4) hx.fillRect(0, yy, 240, 2);
      hx.globalCompositeOperation = 'source-over';
      ctx.save(); ctx.globalAlpha = 0.6; ctx.shadowColor = color; ctx.shadowBlur = 16;
      ctx.drawImage(hc, x - 120, 570 - 230 + Math.sin(S.time / 300 + ph) * 3); ctx.restore();
    }
    wave(430, '#ff7ad9', 1); wave(850, '#5fe3ff', 2);
    Kit.draw(ctx, 'bolt-wave', 640, 590 + bounce * 0.3, { h: 250 });
    // title block
    pill(ctx, 28, 56, 700, 168, 'rgba(32,28,52,0.72)', 12);
    txt(ctx, 'Launch Window', 52, 134, 'italic 700 74px ' + F_UI, COLORS.cream);
    ctx.fillStyle = COLORS.yellow; ctx.fillRect(52, 148, 520, 5);
    txt(ctx, '30 seconds to launch. Your earlier attempts will help.', 52, 182, '500 21px ' + F_UI, COLORS.cream);
    txt(ctx, (S.touch || COARSE) ? 'Bottom buttons: arrows move, hold ACTION to work, REW rewinds.' : 'Move with arrows or A/D, hold Space to work. Hold Q to rewind, P to pause.', 52, 210, '500 16px ' + F_UI, 'rgba(243,234,216,0.8)');
    pill(ctx, 1060, 30, 196, 80, 'rgba(32,28,52,0.78)', 12);
    drawNum(ctx, 'T−30', 1084, 90, 52, COLORS.cream);
    S.buttons = [];
    button(ctx, 'start', 450, 608, 380, 80, 'Start', startFromTitle, { primary: true, size: 34 });
  }
  function drawSelect(ctx) {
    drawBackdrop(ctx);
    ctx.fillStyle = 'rgba(20,24,34,0.55)'; ctx.fillRect(0, 0, 1280, 720);
    txt(ctx, 'Choose a pad', 640, 130, '700 54px ' + F_UI, COLORS.cream, 'center');
    S.buttons = [];
    LEVELS.forEach(function (L, i) {
      var x = 100 + i * 370, y = 200, w = 340, h = 300, st = S.stars[L.id] || 0;
      S.buttons.push({ id: 'lv' + i, x: x, y: y, w: w, h: h, fn: function () { startLevel(i); } });
      pill(ctx, x, y, w, h, 'rgba(20,26,36,0.82)', 12);
      txt(ctx, String(L.id), x + 24, y + 70, '700 56px ' + F_NUM, COLORS.yellow);
      txt(ctx, L.name, x + 24, y + 124, '700 28px ' + F_UI, COLORS.cream);
      txt(ctx, 'Par ' + L.par + ' loops', x + 24, y + 156, '500 17px ' + F_UI, 'rgba(243,234,216,0.8)');
      var words = L.payload.split(' '), line = '', ly = y + 192;
      ctx.font = '500 15px ' + F_UI;
      words.forEach(function (wd) {
        if (ctx.measureText(line + wd).width > w - 48) { txt(ctx, line, x + 24, ly, '500 15px ' + F_UI, 'rgba(243,234,216,0.65)'); line = ''; ly += 20; }
        line += wd + ' ';
      });
      txt(ctx, line, x + 24, ly, '500 15px ' + F_UI, 'rgba(243,234,216,0.65)');
      for (var s3 = 0; s3 < 3; s3++) star(ctx, x + 40 + s3 * 44, y + h - 40, 18, s3 < st ? COLORS.yellow : 'rgba(243,234,216,0.2)');
    });
    button(ctx, 'title', 540, 600, 200, 56, 'Title', function () { S.mode = 'title'; running = false; });
  }
  function drawWin(ctx) {
    var def = lvDef();
    ctx.fillStyle = 'rgba(20,24,34,0.5)'; ctx.fillRect(0, 0, 1280, 720);
    pill(ctx, 340, 150, 600, 380, 'rgba(20,26,36,0.9)', 14);
    txt(ctx, 'Launch confirmed', 640, 218, '700 44px ' + F_UI, COLORS.cream, 'center');
    for (var s3 = 0; s3 < 3; s3++) star(ctx, 540 + s3 * 100, 296, 38, s3 < S.lastStars ? COLORS.yellow : 'rgba(243,234,216,0.2)');
    txt(ctx, S.winLoops + (S.winLoops === 1 ? ' loop' : ' loops') + ' used · par ' + def.par, 640, 372, '500 22px ' + F_UI, COLORS.cream, 'center');
    S.buttons = [];
    var hasNext = S.li + 1 < LEVELS.length;
    button(ctx, 'next', 380, 420, 240, 64, hasNext ? 'Next pad' : 'All pads', nextLevel, { primary: true, size: 22 });
    button(ctx, 'again', 636, 420, 130, 64, 'Again', function () { startLevel(S.li); }, { size: 18 });
    button(ctx, 'sel', 776, 420, 144, 64, 'All pads', function () { S.mode = 'select'; }, { size: 18 });
  }

  // ---------- frame ----------
  function viewState() {
    if (S.phase === 'replay' || S.phase === 'launch' || S.phase === 'won') return S.rp;
    if (S.paused && !S.rewinding) {
      if (S.pkey !== S.pv || !S.pstate) { S.pstate = Sim.seek(S.lv, S.recs, S.live, S.pv, S.pcache); S.pkey = S.pv; }
      return S.pstate;
    }
    return S.st;
  }
  function frame(dt, game) {
    var ctx = game.ctx;
    update(dt);
    ctx.save();
    Kit.applyShake(ctx);
    if (S.mode === 'title') { drawTitle(ctx); }
    else if (S.mode === 'select') { drawSelect(ctx); }
    else {
      drawBackdrop(ctx);
      S.buttons = [];
      var vs = viewState();
      var launching = S.phase === 'launch' || S.phase === 'won';
      var lp = launching ? clamp(S.launchT / TUNE_V('launchSecs'), 0, 1.3) : 0;
      drawScene(ctx, vs, {
        launchP: lp, wave: launching, hideLive: S.phase === 'replay' || launching,
        arrows: S.li === 0 ? (S.recs.length === 0 && (S.phase === 'ready' || S.phase === 'run')) : (S.recs.length === 0 && vs.t === 0 && S.phase === 'ready')
      });
      Kit.drawParticles(ctx);
      ctx.restore(); ctx.save();
      if (S.rewinding) {
        ctx.globalCompositeOperation = 'saturation'; ctx.fillStyle = 'rgba(128,128,128,' + TUNE_V('rewindDesat') + ')'; ctx.fillRect(0, 0, 1280, 720);
        ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = 'rgba(20,28,44,0.16)';
        for (var yy = 0; yy < 720; yy += 4) ctx.fillRect(0, yy, 1280, 2);
      }
      Kit.grain(ctx, 1280, 720, TUNE_V('grain'));
      var shown = S.paused && !S.rewinding ? S.pv : vs.t;
      drawHud(ctx, vs, shown);
      if (S.flash > 0) { ctx.fillStyle = 'rgba(214,69,61,' + (S.flash * 0.25) + ')'; ctx.fillRect(0, 0, 1280, 720); }
      if (S.banner) {
        var bp = S.banner.t / S.banner.ms, ba = bp < 0.15 ? bp / 0.15 : (bp > 0.75 ? (1 - bp) / 0.25 : 1);
        ctx.globalAlpha = clamp(ba, 0, 1); pill(ctx, 440, 270, 400, 90, 'rgba(20,26,36,0.88)', 10);
        txt(ctx, S.banner.text, 640, 316, '700 46px ' + F_NUM, '#ff8f86', 'center', 'middle'); ctx.globalAlpha = 1;
      }
      if (S.phase === 'won') drawWin(ctx);
    }
    ctx.restore();
    if (S.mode !== 'play') { ctx.save(); Kit.grain(ctx, 1280, 720, TUNE_V('grain')); ctx.restore(); }
  }

  var g = Kit.boot({
    slug: 'launch-window',
    world: { w: 1280, h: 720 },
    assets: assets,
    tune: TUNE,
    onStart: function (game) { gm = game; setupPointer(); },
    onFrame: frame,
    onPause: function () { keys.left = keys.right = keys.act = keys.rew = 0; },
    onResume: function () { S.latched = rawInput(); }
  });

  // Debug and smoke-test hooks. They drive the real game code, not a copy of it.
  window.__game = {
    g: g, S: S,
    isRunning: function () { return running; },
    start: startFromTitle, update: update,
    level: startLevel,
    // plays a level's stored solution through the real update loop, one tick per call to advanceLive
    autoplay: function (li, loops) {
      startLevel(li);
      var L = LEVELS[li];
      loops = loops == null ? L.solution.length : loops;
      for (var k = 0; k < loops; k++) {
        var sc = Sim.script(L.solution[k]);
        S.phase = 'run';
        for (var t = 0; t < TICKS; t++) { S.live[S.st.t] = sc[t]; handleEvents(Sim.tick(S.st, sc[t]), S.st); }
        endLoop();
      }
      return { phase: S.phase, loops: S.recs.length + 1, winLoops: S.winLoops };
    }
  };
})();

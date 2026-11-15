(function () {
  'use strict';
  var P = PondSim;
  var W = 1280, H = 600;          // pond world. The sequencer panel is DOM below it.
  var PANEL_W = 720, PANEL_H = 358;
  var STORE = 'bg.pond-chorus.progress';

  // Every feel constant lives here. Press ` in the game to tune it live.
  var TUNE = {
    night: { v: 0.55, min: 0, max: 1, step: 0.05 },        // strength of the night pass on every sprite
    bpm: { v: 96, min: 60, max: 140, step: 1 },
    rangeFrog: { v: 105, min: 60, max: 200, step: 1 },     // px
    rangeCricket: { v: 130, min: 60, max: 240, step: 1 },  // px
    ringMs: { v: 420, min: 150, max: 1200, step: 10 },     // how fast a sound ring grows to the range
    hop: { v: 12, min: 0, max: 30, step: 1 },              // enemy hop height, px
    hopFrac: { v: 0.6, min: 0.2, max: 1, step: 0.05 },     // share of a step the hop takes
    singMs: { v: 120, min: 40, max: 400, step: 10 },       // how long the sing sprite shows
    squash: { v: 0.8, min: 0.5, max: 1, step: 0.01 }       // squash depth on a note
  };

  var TYPES = {
    frog: { name: 'Frog', color: '#7bd389', idle: 'frog-idle', sing: 'frog-sing', h: 88 },
    cricket: { name: 'Cricket', color: '#c6e45a', idle: 'cricket-idle', sing: 'cricket-sing', h: 78 },
    owl: { name: 'Owl', color: '#b98bd9', idle: 'owl-idle', sing: 'owl-sing', h: 98 },
    jar: { name: 'Firefly jar', color: '#f4c95d', idle: 'jar-dim', sing: 'jar-glow', h: 100 }
  };
  var ENEMY = { slug: { sprite: 'slug', h: 42 }, slugling: { sprite: 'slug', h: 25 }, snail: { sprite: 'snail', h: 52 }, shellback: { sprite: 'shellback', h: 80 } };
  var GAIN = [0, 0.5, 0.75, 1, 1];
  var NIGHT_TINT = '#5a6e9a';
  var LILY_POS = [[652, 294], [600, 312], [706, 314], [624, 340], [684, 342]];
  var JAM = {
    id: 'jam', name: 'Just Jam', lesson: 'No slugs tonight. Switch pads and listen.',
    roster: ['frog', 'cricket'], fixed: [{ perch: 1, type: 'frog' }, { perch: 3, type: 'cricket' }], budget: 16, wave: []
  };
  var CAPTION = {
    1: ['Your turn. Tap a glowing pad to add a croak.', 'Slugs hop on the beat. Sing while one is on your stones.'],
    2: ['A rest before a note makes it louder. Snails shrug off soft notes.', null],
    3: ['Small things move fast. The cricket sings to every slug in range.', null],
    4: ['A frog and a cricket on the same step sing louder. Shellbacks need it.', null],
    5: ['Keep editing while it plays. The slugs shift partway through.', null],
    6: ['Lots of croaks, lots of chirps, all in harmony.', null],
    jam: ['No slugs tonight. Switch pads and listen.', null]
  };
  var TEACH = {
    demo: 'Tap the pads to make a pattern. The pond plays it on a loop.',
    first: 'Heard that? The frog sings on that beat every loop.',
    rhythm: "That's your rhythm. Add more.",
    done: 'The slugs are gone. Finish the goal to end the night.'
  };
  var VOICE = { frog: ['croak', 'croaks'], cricket: ['chirp', 'chirps'], owl: ['hoot', 'hoots'], harmony: ['harmony beat', 'harmony beats'] };
  var DEMO_PATTERN = [1, 0, 0, 0, 1, 0, 0, 0];   // what the frog sings in the demo: two croaks, six rests
  var DEMO_LOOPS = 3;

  var T = TUNE;                   // replaced by the live tuning object after boot
  var progress = Kit.store.get(STORE, null) || { stars: {}, quiet: {}, jam: false };

  var el = {};
  ['panel', 'caption', 'hush', 'hushDots', 'btnPlay', 'btnRestart', 'grid', 'playhead', 'title', 'start', 'jam', 'chips', 'nightof',
    'btnSkip', 'results', 'resTitle', 'resStars', 'resLine', 'resQuiet', 'resNext', 'resAgain', 'resTitleBtn'].forEach(function (id) { el[id] = document.getElementById(id); });

  var geo = P.geometry();
  var rs = [];                    // radius scale of each stone, for drawing size
  for (var si = 0; si < P.STONES; si++) rs.push(1 - 0.72 * Math.pow(si / (P.STONES - 1), 1.6));

  // ----- game state
  var screen = 'title';           // title | play | results
  var mode = null;                // {kind:'night', idx} | {kind:'jam'}
  var level = null, sim = null, hints = null;
  var selected = 0, paused = false, started = false, capPhase = 0, finished = false;
  var pending = [];               // visual events scheduled for the moment their sound is heard
  var vis = {};                   // enemy id -> visual
  var pv = [];                    // per placement visual: {singT, power}
  var rings = [];
  var lilyShown = 5, lilyWiltT = [0, 0, 0, 0, 0];
  var heronT = -99999, moonT = -99999;
  var rows = [];                  // [{row, icon, pads:[]}]
  var clock = null, timer = null, stepCount = 0, driveStarted = false, lastBpm = 0;
  var lastLayout = '';
  var demo = false, demoSteps = 0, capHold = 0, heardFirst = false, playedFirst = false;

  // Ambient fireflies are fixed at load from a seeded rng.
  var flies = [];
  (function () {
    var r = Kit.rng(77);
    for (var i = 0; i < 30; i++) flies.push({ x: 40 + r() * (W - 80), y: 30 + r() * (H - 90), ph: r() * 6.28, sp: 0.00015 + r() * 0.0003, rad: 14 + r() * 30, tw: 0.001 + r() * 0.002 });
  })();

  var g = Kit.boot({
    slug: 'pond-chorus',
    world: { w: W, h: H },
    assets: typeof ASSETS !== 'undefined' ? ASSETS : {},
    tune: TUNE,
    onStart: function () { layout(true); },
    onFrame: frame,
    onPause: function () { pending = []; },
    onResume: function () { pending = []; }
  });
  T = g.tune;

  // ----- layout: the canvas takes the window above the panel. Kit.fit makes the canvas fill the window,
  // so this listener (registered after Kit.fit's own) re-fits it to the free area.
  function layout(force) {
    var cw = window.innerWidth, ch = window.innerHeight;
    var ps = Math.min(1, cw / PANEL_W, (ch * 0.5) / PANEL_H);
    var panelPx = screen === 'title' ? 0 : PANEL_H * ps;
    var key = cw + 'x' + ch + ':' + ps + ':' + panelPx + ':' + (window.devicePixelRatio || 1);
    if (!force && key === lastLayout) return;
    lastLayout = key;
    var rh = Math.max(100, ch - panelPx);
    var view = g.view, canvas = g.canvas, dpr = Math.min(window.devicePixelRatio || 1, 3);
    canvas.width = Math.round(cw * dpr); canvas.height = Math.round(rh * dpr);
    canvas.style.width = cw + 'px'; canvas.style.height = rh + 'px';
    view.dpr = dpr;
    view.scale = Math.min(cw / W, rh / H);
    view.offX = (cw - W * view.scale) / 2;
    view.offY = (rh - H * view.scale) / 2;
    document.documentElement.style.setProperty('--ps', String(ps));
  }
  window.addEventListener('resize', function () { layout(true); });
  layout(true);

  // ----- audio drive
  function startDrive() {
    if (driveStarted) return;
    driveStarted = true;
    var ctx = Kit.audio.unlock();
    if (ctx) {
      Kit.audio.reverb(2.2);
      pondBed.start();
      clock = Kit.audio.clock({ bpm: T.bpm, stepsPerBeat: 2, onStep: onStep });
      lastBpm = T.bpm;
      clock.start();
    }
    // If audio is blocked or stalls, a plain timer drives the steps so the game still plays.
    var seen = -1;
    var dog = setInterval(function () {
      if (timer) { clearInterval(dog); return; }
      if (screen === 'play' && !paused && !(g && g.paused) && stepCount === seen) {
        if (clock) clock.stop();
        timer = setInterval(function () { onStep(0, null); }, 60000 / T.bpm / 2);
        clearInterval(dog);
      }
      seen = stepCount;
    }, 1500);
  }

  function stepMs() { return 60000 / T.bpm / 2; }

  function queue(when, fn) { pending.push({ when: when, fn: fn }); }
  function runPending(now) {
    if (!pending.length) return;
    var due = [], keep = [];
    for (var i = 0; i < pending.length; i++) (pending[i].when <= now ? due : keep).push(pending[i]);
    pending = keep;
    due.sort(function (a, b) { return a.when - b.when; });
    for (var j = 0; j < due.length; j++) due[j].fn();
  }

  function onStep(idx, audioTime) {
    if (paused || screen !== 'play' || !sim || (g && g.paused)) return;
    stepCount++;
    var now = performance.now(), delay = 0;
    if (audioTime != null) {
      var ctx = Kit.audio.unlock();
      if (ctx) delay = Math.max(0, (audioTime - ctx.currentTime) * 1000);
    }
    var when = now + delay, at = audioTime != null ? audioTime : undefined;
    var loopStep = sim.t % P.STEPS;
    var events = P.step(sim);

    queue(when, function () {
      setPlayhead(loopStep);
      if (loopStep === 0) moonT = performance.now();
    });
    for (var i = 0; i < events.length; i++) handle(events[i], when, at, loopStep);

    // the demo plays a few loops, then hands over
    if (demo && ++demoSteps >= DEMO_LOOPS * P.STEPS) queue(when + stepMs(), endDemo);
    // the first time the loop plays the player's own pattern
    if (!demo && !playedFirst && started && (level.id === 1 || level.id === 'jam')) {
      for (var ei = 0; ei < events.length; ei++) if (events[ei].type === 'sing') {
        playedFirst = true;
        queue(when, function () { setCaption(TEACH.rhythm, 5200, true); });
        break;
      }
    }
    // caption change on night 1, about the 15 second mark
    if (level.id === 1 && capPhase === 0 && started && sim.base !== null && sim.t >= sim.base + 12 && captionFree()) {
      capPhase = 1; setCaption(CAPTION[1][1]);
    }
    // every slug is dealt with but the goal is not met yet
    if (capPhase < 2 && level.goal && sim.base !== null && !sim.over && sim.spawned >= level.wave.length && sim.enemies.length === 0 && !P.goalProgress(level, sim.placements).met) {
      capPhase = 2; setCaption(TEACH.done, 0, true);
    }
    // lamps
    var lamps = sim.placements.map(function (p, k) { return P.inRange(sim, k); });
    queue(when, function () {
      for (var k = 0; k < rows.length; k++) rows[k].icon.classList.toggle('lamp', !!lamps[k]);
    });
  }

  function handle(e, when, at, loopStep) {
    var tp, pl;
    if (e.type === 'sing') {
      pl = sim.placements[e.placement];
      tp = pl.type;
      var gain = GAIN[e.power] || 1;
      if (tp === 'frog') play('croak', { time: at, gain: gain });
      else if (tp === 'cricket') play('chirp', { time: at, gain: gain });
      else if (tp === 'owl') play('hoot', { time: at, gain: gain, midi: OWL_NOTES[loopStep] });
      queue(when, function () {
        var pp = geo.perches[pl.perch], now = performance.now();
        pv[e.placement] = { singT: now, power: e.power };
        rings.push({ x: pp.x, y: pp.y - 8, color: TYPES[tp].color, t0: now, range: P.RULES.range[tp] || 100, power: e.power });
        if (rings.length > 24) rings.shift();
      });
    } else if (e.type === 'spawn') {
      queue(when, function () { var now = performance.now(); vis[e.enemy] = { id: e.enemy, kind: e.kind, stone: 0, from: 0, t0: now, born: now, hitT: -9999, hideT: -9999, flip: false }; });
    } else if (e.type === 'move') {
      queue(when, function () {
        var v = vis[e.enemy]; if (!v) return;
        v.from = v.stone; v.stone = e.stone; v.t0 = performance.now();
        v.flip = geo.stones[Math.min(v.stone, P.STONES - 1)].x < geo.stones[v.from].x;
      });
    } else if (e.type === 'hit') {
      queue(when, function () {
        var v = vis[e.enemy]; if (!v) return;
        v.hitT = performance.now(); if (e.armored) v.hideT = v.hitT;
      });
    } else if (e.type === 'beaten') {
      play('pop', { time: at });
      queue(when, function () {
        var v = vis[e.enemy]; if (!v) return;
        var p = enemyPos(v, performance.now());
        Kit.burst(p.x, p.y - 14, { n: 6, color: '#bfe3ff', speed: 55, life: 1000, gravity: -70, size: 5 });
        delete vis[e.enemy];
      });
    } else if (e.type === 'bite') {
      play('bite', { time: at });
      queue(when, function () {
        var v = vis[e.enemy]; if (v) delete vis[e.enemy];
        for (var i = lilyShown - 1; i >= e.lilies; i--) lilyWiltT[i] = performance.now();
        lilyShown = e.lilies;
        Kit.shake(5, 220);
      });
    } else if (e.type === 'win') {
      play('dawn', { time: at != null ? at + 0.1 : undefined });
      queue(when + 1400, function () { showResults(true, e.lilies); });
    } else if (e.type === 'lose') {
      queue(when + 1000, function () { showResults(false, 0); });
    }
  }

  // ----- DOM: sequencer
  function setCaption(t, holdMs, big) {
    el.caption.textContent = t || '';
    el.caption.classList.toggle('coach', !!big);
    capHold = holdMs ? performance.now() + holdMs : 0;
  }
  function captionFree() { return performance.now() >= capHold; }

  function buildRows() {
    var gridEl = el.grid;
    Array.prototype.slice.call(gridEl.children).forEach(function (c) { if (c !== el.playhead) gridEl.removeChild(c); });
    rows = [];
    for (var r = 0; r < 6; r++) {
      var row = document.createElement('div');
      row.className = 'row'; row.style.top = (r * 44) + 'px';
      if (r >= sim.placements.length) { row.classList.add('empty'); gridEl.appendChild(row); continue; }
      var tp = TYPES[sim.placements[r].type];
      row.style.setProperty('--c', tp.color);
      var icon = document.createElement('button');
      icon.type = 'button'; icon.className = 'icon'; icon.dataset.row = r;
      icon.setAttribute('aria-label', tp.name + ' row, shows what it can reach');
      var src = typeof ASSETS !== 'undefined' && ASSETS[tp.idle] ? ASSETS[tp.idle].src : '';
      if (src) { var im = document.createElement('img'); im.src = src; im.alt = ''; im.draggable = false; icon.appendChild(im); } else icon.textContent = tp.name[0];
      var pads = document.createElement('div'); pads.className = 'pads';
      var arr = [];
      for (var s = 0; s < 8; s++) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'pad'; b.dataset.row = r; b.dataset.step = s;
        b.innerHTML = '<span class="r1"></span><span class="r2"></span>';
        pads.appendChild(b); arr.push(b);
      }
      row.appendChild(icon); row.appendChild(pads); gridEl.appendChild(row);
      rows.push({ row: row, icon: icon, pads: arr });
    }
    // hush dots
    el.hushDots.innerHTML = '';
    for (var d = 0; d < level.budget; d++) el.hushDots.appendChild(document.createElement('i'));
    renderPads();
  }

  function renderPads() {
    for (var r = 0; r < rows.length; r++) {
      var pl = sim.placements[r], tp = TYPES[pl.type];
      rows[r].row.classList.toggle('sel', r === selected);
      for (var s = 0; s < 8; s++) {
        var b = rows[r].pads[s], on = !!pl.pattern[s], p = P.power(pl.pattern, s);
        b.classList.toggle('on', on);
        if (on) b.dataset.p = p; else delete b.dataset.p;
        b.classList.toggle('hint', !!(hints && hints[r] && hints[r][s] && !on));
        b.setAttribute('aria-label', tp.name + ' step ' + (s + 1) + (on ? ', note, power ' + p : ', rest'));
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    }
    var used = P.notes(sim.placements), dots = el.hushDots.children;
    for (var d = 0; d < dots.length; d++) dots[d].classList.toggle('spent', d >= level.budget - used);
    el.hush.setAttribute('aria-label', 'Hush: ' + (level.budget - used) + ' notes left');
  }

  function setPlayhead(step) {
    var x = 30 + 64 + step * 66 - 6;
    el.playhead.style.transform = 'translateX(' + x + 'px)';
    el.playhead.classList.add('live');
    for (var r = 0; r < rows.length; r++) for (var s = 0; s < 8; s++) rows[r].pads[s].classList.toggle('now', s === step);
  }

  function refuse() {
    play('hush');
    heronT = performance.now();
    el.hush.classList.remove('refused'); void el.hush.offsetWidth; el.hush.classList.add('refused');
  }

  function tapPad(r, s) {
    if (screen !== 'play' || !sim || !sim.placements[r]) return;
    if (demo) endDemo();
    var pl = sim.placements[r];
    selected = r;
    if (!pl.pattern[s]) {
      if (P.notes(sim.placements) >= level.budget) { refuse(); renderPads(); return; }
      pl.pattern[s] = 1;
    } else pl.pattern[s] = 0;
    play('tap', { kind: pl.type, midi: pl.type === 'owl' ? OWL_NOTES[s] : undefined });
    var pp = geo.perches[pl.perch];
    pv[r] = { singT: performance.now(), power: P.power(pl.pattern, s) || 1 };
    rings.push({ x: pp.x, y: pp.y - 8, color: TYPES[pl.type].color, t0: performance.now(), range: 40, power: 1 });
    if (!started) {
      started = true;
      if (level.wave.length) P.arm(sim);   // the countdown to the first slug starts here
      if (level.id === 1 && pl.pattern[s]) {
        heardFirst = true; setCaption(TEACH.first, 4200, true);
        var tb = rows[r].pads[s]; tb.classList.remove('first'); void tb.offsetWidth; tb.classList.add('first');
        setTimeout(function () { tb.classList.remove('first'); }, 2600);
      }
    }
    renderPads();
  }

  el.grid.addEventListener('click', function (e) {
    var pad = e.target.closest ? e.target.closest('.pad') : null;
    if (pad) { tapPad(+pad.dataset.row, +pad.dataset.step); if (e.detail > 0) pad.blur(); return; }
    var icon = e.target.closest ? e.target.closest('.icon') : null;
    if (icon) { selected = +icon.dataset.row; renderPads(); if (e.detail > 0) icon.blur(); }
  });

  function togglePause() {
    if (screen !== 'play') return;
    paused = !paused;
    el.btnPlay.textContent = paused ? 'Play' : 'Pause';
    if (paused) { el.playhead.classList.remove('live'); pondBed.setGain(0.3); } else pondBed.setGain(1);
  }
  el.btnPlay.addEventListener('click', function (e) { togglePause(); if (e.detail > 0) el.btnPlay.blur(); });
  el.btnRestart.addEventListener('click', function (e) { restart(); if (e.detail > 0) el.btnRestart.blur(); });

  window.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.code === 'Space') {
      if (screen === 'play') { e.preventDefault(); if (!e.repeat) togglePause(); }
      return;
    }
    if (screen !== 'play' || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key >= '1' && e.key <= '8') { tapPad(selected, +e.key - 1); e.preventDefault(); }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      selected = Math.max(0, Math.min(sim.placements.length - 1, selected + (e.key === 'ArrowDown' ? 1 : -1)));
      renderPads(); e.preventDefault();
    }
  });
  window.addEventListener('keyup', function (e) { if ((e.key === ' ' || e.code === 'Space') && screen === 'play') e.preventDefault(); });

  Kit.pointer(g.canvas, {
    down: function (x, y) {
      if (screen !== 'play') return;
      for (var i = 0; i < sim.placements.length; i++) {
        var pp = geo.perches[sim.placements[i].perch];
        if (Math.hypot(pp.x - x, (pp.y - 30) - y) < 60) { selected = i; renderPads(); return; }
      }
    }
  });

  // ----- demo: before night 1 the frog sings a two-croak pattern for a few loops, then hands over
  function startDemo() {
    demo = true; demoSteps = 0;
    sim.placements[0].pattern = DEMO_PATTERN.slice();
    el.panel.classList.add('demoing');
    setCaption(TEACH.demo, 0, true);
    renderPads();
  }
  function endDemo() {
    if (!demo) return;
    demo = false;
    el.panel.classList.remove('demoing');
    sim.placements[0].pattern = [0, 0, 0, 0, 0, 0, 0, 0];
    pending = [];
    el.playhead.classList.remove('live');
    for (var r = 0; r < rows.length; r++) for (var s = 0; s < 8; s++) rows[r].pads[s].classList.remove('now');
    setCaption(CAPTION[1][0], 0, true);
    renderPads();
  }
  el.btnSkip.addEventListener('click', function (e) { endDemo(); if (e.detail > 0) el.btnSkip.blur(); });

  // ----- levels
  function loadLevel(lv, keep) {
    var old = sim ? sim.placements : null;
    level = lv;
    var pls = lv.fixed.map(function (f, i) {
      return { perch: f.perch, type: f.type, pattern: keep && old && old[i] && old[i].type === f.type ? old[i].pattern.slice() : [0, 0, 0, 0, 0, 0, 0, 0] };
    });
    sim = P.create(lv, pls);
    hints = lv.id <= 2 ? P.hints(lv) : null;
    vis = {}; pv = []; rings = []; pending = [];
    lilyShown = P.LILIES; lilyWiltT = [0, 0, 0, 0, 0];
    started = false; capPhase = 0; finished = false; paused = false;
    demo = false; heardFirst = false; playedFirst = false; capHold = 0;
    el.panel.classList.remove('demoing');
    selected = 0;
    el.btnPlay.textContent = 'Pause';
    el.playhead.classList.remove('live');
    el.playhead.style.height = (sim.placements.length * 44 + 4) + 'px';
    var cap = CAPTION[lv.id];
    setCaption(cap ? cap[0] : lv.lesson, 0, lv.id === 1);
    buildRows();
  }

  function showPlay() {
    screen = 'play';
    el.title.classList.add('hidden'); el.results.classList.add('hidden');
    el.panel.classList.remove('off');
    layout(true);
  }

  function startNight(idx) {
    mode = { kind: 'night', idx: idx };
    loadLevel(LEVELS[idx], false);
    showPlay(); startDrive();
    if (idx === 0) startDemo();
  }
  function startJam() {
    mode = { kind: 'jam' };
    loadLevel(JAM, false);
    showPlay(); startDrive();
    started = true;
    if (!progress.jam) { progress.jam = true; Kit.store.set(STORE, progress); }
  }
  function restart() {
    if (!level || screen === 'title') return;
    el.results.classList.add('hidden');
    screen = 'play';
    loadLevel(level, true);
    if (level.wave.length && P.notes(sim.placements) > 0) {
      started = true; P.arm(sim); sim.base += P.STEPS;   // restarting counts as input; one loop of lead-in
    } else if (!level.wave.length) started = true;
  }

  function resumeNight() {
    var n = 0;
    while (n < LEVELS.length - 1 && progress.stars[LEVELS[n].id]) n++;
    return n;
  }
  function unlocked(i) { return i === 0 || !!progress.stars[LEVELS[i - 1].id]; }

  function showTitle() {
    screen = 'title';
    el.panel.classList.add('off'); el.results.classList.add('hidden'); el.title.classList.remove('hidden');
    el.nightof.textContent = 'Night ' + (resumeNight() + 1) + ' of 6';
    el.chips.innerHTML = '';
    LEVELS.forEach(function (lv, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'chip'; b.disabled = !unlocked(i);
      var st = progress.stars[lv.id] || 0;
      b.innerHTML = 'Night ' + lv.id + (st ? ' <span class="st">' + new Array(st + 1).join('★') + '</span>' : '');
      b.addEventListener('click', function () { startNight(i); });
      el.chips.appendChild(b);
    });
    layout(true);
  }

  el.start.addEventListener('click', function () { startNight(resumeNight()); });
  el.jam.addEventListener('click', startJam);
  el.resAgain.addEventListener('click', restart);
  el.resTitleBtn.addEventListener('click', showTitle);
  el.resNext.addEventListener('click', function () {
    if (mode && mode.kind === 'night' && mode.idx < LEVELS.length - 1 && progress.stars[level.id]) {
      el.results.classList.add('hidden'); startNight(mode.idx + 1);
    } else showTitle();
  });

  function showResults(won, lilies) {
    if (finished || screen !== 'play') return;
    finished = true; screen = 'results';
    var unspent = level.budget - P.notes(sim.placements);
    var quiet = won && unspent >= 2;
    if (won) {
      var st = P.stars(lilies), id = level.id;
      progress.stars[id] = Math.max(progress.stars[id] || 0, st);
      if (quiet) progress.quiet[id] = true;
      Kit.store.set(STORE, progress);
      el.resTitle.textContent = 'Night ' + id + ' cleared';
      var html = '';
      for (var i = 1; i <= 3; i++) html += i <= st ? '★' : '<span class="dim">★</span>';
      el.resStars.innerHTML = html;
      el.resLine.textContent = lilies + (lilies === 1 ? ' lily' : ' lilies') + ' still blooming.';
      el.resQuiet.textContent = quiet ? 'Quiet night: ' + unspent + ' notes unspent' : '';
      el.resNext.style.display = '';
      el.resNext.textContent = mode.idx < LEVELS.length - 1 ? 'Next night' : 'Back to title';
      el.resAgain.textContent = 'Replay night';
    } else {
      el.resTitle.textContent = 'The lilies wilted';
      el.resStars.innerHTML = '<span class="dim">★★★</span>';
      el.resLine.textContent = 'Too many slugs got through. Try singing earlier in the loop.';
      el.resQuiet.textContent = '';
      el.resNext.style.display = 'none';
      el.resAgain.textContent = 'Try again';
    }
    el.results.classList.remove('hidden');
  }

  // ----- drawing
  function enemyPos(v, now) {
    var a = geo.stones[Math.min(v.from, P.STONES - 1)], b = geo.stones[Math.min(v.stone, P.STONES - 1)];
    var p = Math.max(0, Math.min(1, (now - v.t0) / (stepMs() * T.hopFrac)));
    var e = Kit.ease.inOutSine(p);
    return { x: a.x + (b.x - a.x) * e, y: a.y + (b.y - a.y) * e - T.hop * Math.sin(Math.PI * p) };
  }

  // night pass strength for something that last lit up at `t`: 0 at 60 ms, back to full over 400 ms
  function nightK(now, t) {
    var d = now - t;
    if (d < 0 || d > 460) return 1;
    return d < 60 ? 1 - d / 60 : (d - 60) / 400;
  }
  function squashAt(d) {
    var q = T.squash, sy = 1;
    if (d < 0 || d > 300) return 1;
    if (d < 40) sy = 1 - (1 - q) * (d / 40);
    else if (d < 100) sy = q + (1.15 - q) * Kit.ease.outQuad((d - 40) / 60);
    else sy = 1.15 - 0.15 * Kit.ease.outBack((d - 100) / 200);
    return sy;
  }

  function glow(ctx, x, y, r, color, a) {
    if (a <= 0) return;
    var gr = ctx.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, color); gr.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = a;
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill(); ctx.restore();
  }

  function frame(dt, game) {
    var ctx = game.ctx, now = performance.now();
    T = game.tune;
    P.RULES.range.frog = T.rangeFrog; P.RULES.range.cricket = T.rangeCricket;
    if (clock && lastBpm !== T.bpm) { clock.setBpm(T.bpm); lastBpm = T.bpm; }
    runPending(now);
    ctx.save();
    ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.clip();
    Kit.applyShake(ctx);
    var night = T.night, t4 = Math.sin(now / 4000 * 6.2832);

    // backdrop, cropped at the bottom
    if (Kit.has('bg-pond')) Kit.draw(ctx, 'bg-pond', W / 2, 0, { w: W, ay: 0 });
    else { ctx.fillStyle = '#184658'; ctx.fillRect(0, 0, W, H); }
    // two slow water highlights
    for (var h = 0; h < 2; h++) {
      var hx = 420 + h * 420 + Math.sin(now / 9000 + h * 2) * 60, hy = 250 + h * 110 + Math.sin(now / 7000 + h) * 14;
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.05 + 0.02 * t4;
      ctx.translate(hx, hy); ctx.scale(1, 0.25);
      var wg = ctx.createRadialGradient(0, 0, 0, 0, 0, 160); wg.addColorStop(0, '#e8f1ff'); wg.addColorStop(1, 'rgba(232,241,255,0)');
      ctx.fillStyle = wg; ctx.beginPath(); ctx.arc(0, 0, 160, 0, 6.2832); ctx.fill(); ctx.restore();
    }
    // moon pulse on step 0
    var mp = (now - moonT) / 700;
    glow(ctx, 1147, 30, 90, '#e8f1ff', 0.22 + (mp >= 0 && mp < 1 ? 0.5 * (1 - mp) : 0));

    if (screen !== 'title' && sim) drawPond(ctx, now, night, t4);

    // ambient fireflies
    for (var f = 0; f < flies.length; f++) {
      var fl = flies[f];
      var fx = fl.x + Math.sin(now * fl.sp + fl.ph) * fl.rad, fy = fl.y + Math.cos(now * fl.sp * 0.8 + fl.ph) * fl.rad * 0.6;
      var fa = 0.35 + 0.35 * Math.sin(now * fl.tw + fl.ph);
      glow(ctx, fx, fy, 9, '#f4c95d', fa);
      ctx.save(); ctx.globalAlpha = fa; ctx.fillStyle = '#f9e3a3'; ctx.fillRect(fx - 1, fy - 1, 2, 2); ctx.restore();
    }

    Kit.drawParticles(ctx);

    if (screen !== 'title' && level) {
      ctx.save();
      ctx.font = '600 30px Fredoka, system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = '#f1ead4';
      ctx.shadowColor = 'rgba(8,14,26,.9)'; ctx.shadowBlur = 8;
      ctx.fillText(level.id === 'jam' ? 'Just Jam' : 'Night ' + level.id + ' · ' + level.name, W / 2, 40);
      ctx.restore();
      if (level.goal && sim && !demo) drawGoal(ctx);
    }
    ctx.restore();
  }

  // "Goal: 1 / 2 croaks" under the title. A met part turns green with a tick.
  function drawGoal(ctx) {
    var gp = P.goalProgress(level, sim.placements), segs = [], i, total = 0;
    for (i = 0; i < gp.parts.length; i++) {
      var pt = gp.parts[i], nm = VOICE[pt.key] || [pt.key, pt.key + 's'];
      var done = pt.have >= pt.need;
      segs.push({ text: (done ? '\u2713 ' : '') + Math.min(pt.have, pt.need) + ' / ' + pt.need + ' ' + nm[pt.need === 1 ? 0 : 1], done: done });
    }
    ctx.save();
    ctx.font = '600 20px Fredoka, system-ui, sans-serif'; ctx.textAlign = 'left';
    var head = 'Goal:  ', sep = '   ', hw = ctx.measureText(head).width, sw = ctx.measureText(sep).width;
    for (i = 0; i < segs.length; i++) { segs[i].w = ctx.measureText(segs[i].text).width; total += segs[i].w + (i ? sw : 0); }
    var x = W / 2 - (hw + total) / 2, y = 76;
    ctx.fillStyle = 'rgba(11,18,32,.62)';
    ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x - 16, y - 24, hw + total + 32, 34, 17) : ctx.rect(x - 16, y - 24, hw + total + 32, 34); ctx.fill();
    ctx.fillStyle = '#aab6cf'; ctx.fillText(head, x, y); x += hw;
    for (i = 0; i < segs.length; i++) {
      if (i) x += sw;
      ctx.fillStyle = segs[i].done ? '#8fe3a0' : '#f6e7bd'; ctx.fillText(segs[i].text, x, y); x += segs[i].w;
    }
    ctx.restore();
  }

  function drawPond(ctx, now, night, t4) {
    var i, v, id, k;
    // stones, lit when the selected creature covers them
    var selP = sim.placements[selected], selPerch = selP ? geo.perches[selP.perch] : null;
    var selRange = selP ? (P.RULES.range[selP.type] || 0) : 0, selColor = selP ? TYPES[selP.type].color : '#fff';
    for (i = 0; i < P.STONES; i++) {
      var s = geo.stones[i], sz = 58 * (0.7 + 0.3 * rs[i]);
      if (selPerch && Math.hypot(s.x - selPerch.x, s.y - selPerch.y) <= selRange) glow(ctx, s.x, s.y, sz * 0.9, selColor, 0.38);
      Kit.draw(ctx, 'stone', s.x, s.y, { w: sz, ay: 0.5, multiply: NIGHT_TINT, multiplyAmount: night });
    }
    // lilies
    var order = [0, 1, 2, 3, 4].sort(function (a, b) { return LILY_POS[a][1] - LILY_POS[b][1]; });
    glow(ctx, 650, 316, 150, '#e8f1ff', 0.07 + 0.02 * t4);
    for (k = 0; k < 5; k++) {
      i = order[k];
      var lp = LILY_POS[i], bloom = i < lilyShown;
      Kit.draw(ctx, bloom ? 'lily-bloom' : 'lily-wilt', lp[0], lp[1] + 6 + Math.sin(now / 4000 * 6.2832 + i) * 1.5,
        { w: bloom ? 96 : 84, ay: 0.8, multiply: NIGHT_TINT, multiplyAmount: night * 0.8, tint: '#e8f1ff', tintAmount: now - lilyWiltT[i] < 200 ? 0.6 : 0 });
    }
    // perch pads
    for (i = 0; i < sim.placements.length; i++) {
      var pp = geo.perches[sim.placements[i].perch];
      Kit.draw(ctx, 'pad', pp.x, pp.y + 6, { w: 112, ay: 0.5, multiply: NIGHT_TINT, multiplyAmount: night });
    }
    // selected creature's range
    if (selPerch) {
      ctx.save(); ctx.strokeStyle = selColor; ctx.globalAlpha = 0.28 + 0.06 * t4; ctx.lineWidth = 2; ctx.setLineDash([6, 8]);
      ctx.beginPath(); ctx.ellipse(selPerch.x, selPerch.y, selRange, selRange * 0.62, 0, 0, 6.2832); ctx.stroke(); ctx.restore();
    }
    // creatures and enemies, back to front
    var items = [];
    sim.placements.forEach(function (pl, idx) { items.push({ y: geo.perches[pl.perch].y + 20, kind: 'c', idx: idx }); });
    var groups = {};
    for (id in vis) {
      v = vis[id];
      var key = v.stone; groups[key] = (groups[key] || 0) + 1;
      var ep = enemyPos(v, now);
      items.push({ y: ep.y, kind: 'e', v: v, ep: ep, slot: groups[key] - 1, gk: key });
    }
    items.sort(function (a, b) { return a.y - b.y; });
    items.forEach(function (it) {
      if (it.kind === 'c') drawCreature(ctx, it.idx, now, night, t4);
      else drawEnemy(ctx, it, groups[it.gk], now, night);
    });
    // rings
    var live = [];
    for (i = 0; i < rings.length; i++) {
      var r = rings[i], p = (now - r.t0) / T.ringMs;
      if (p >= 1) continue;
      live.push(r);
      var e = Kit.ease.outQuad(p), rad = Math.max(8, r.range * e);
      ctx.save(); ctx.strokeStyle = r.color; ctx.globalAlpha = (1 - p) * 0.9; ctx.lineWidth = 2 + 4 * (1 - p);
      ctx.beginPath(); ctx.ellipse(r.x, r.y, rad, rad * 0.62, 0, 0, 6.2832); ctx.stroke(); ctx.restore();
    }
    rings = live;
    // the Heron's shadow, when the hush budget refuses a note
    var hp = (now - heronT) / 1300;
    if (hp >= 0 && hp < 1) {
      var hxo = hp < 0.23 ? 1 - Kit.ease.outQuad(hp / 0.23) : hp > 0.77 ? Kit.ease.outQuad((hp - 0.77) / 0.23) : 0;
      Kit.draw(ctx, 'heron', 1080 + hxo * 330, H + 6, { w: 300, alpha: 0.5 });
    }
  }

  function drawCreature(ctx, idx, now, night, t4) {
    var pl = sim.placements[idx], tp = TYPES[pl.type], pp = geo.perches[pl.perch], vv = pv[idx];
    var d = vv ? now - vv.singT : 9999;
    var singing = d < T.singMs;
    var sy = squashAt(d) * (1 + 0.015 * t4), sx = 1 / Math.sqrt(squashAt(d)) * (1 - 0.01 * t4);
    var nk = vv ? nightK(now, vv.singT) : 1;
    if (vv && d < 460) glow(ctx, pp.x, pp.y - 24, 70, tp.color, 0.55 * (1 - Math.min(1, d / 460)));
    Kit.draw(ctx, singing ? tp.sing : tp.idle, pp.x, pp.y + 14, { h: tp.h, sx: sx, sy: sy, multiply: NIGHT_TINT, multiplyAmount: night * nk });
  }

  function drawEnemy(ctx, it, n, now, night) {
    var v = it.v, sp = ENEMY[v.kind], off = (it.slot - (n - 1) / 2) * 16;
    var name = v.kind === 'snail' && now - v.hideT < 320 ? 'snail-hide' : sp.sprite;
    var alpha = Math.min(1, (now - v.born) / 250);
    var flash = now - v.hitT < 80;
    Kit.draw(ctx, name, it.ep.x + off, it.ep.y + 8 - Math.abs(off) * 0.2, {
      h: sp.h, flipX: v.flip, alpha: alpha, multiply: NIGHT_TINT, multiplyAmount: night,
      tint: '#e8f1ff', tintAmount: flash ? 0.75 : 0
    });
  }

  // ----- hooks for smoke tests and dev
  window.__game = {
    g: g,
    isRunning: function () { return screen === 'play'; },
    state: function () { return { screen: screen, t: sim && sim.t, lilies: sim && sim.lilies, enemies: sim && sim.enemies.length, steps: stepCount, started: started }; },
    tap: tapPad, startNight: startNight, startJam: startJam, jam: startJam
  };

  showTitle();
})();

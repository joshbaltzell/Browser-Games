// Look Alive habitat 3 lab: change a number, see the run and the result. Plain script, works from file://.
(function () {
  'use strict';
  var Sim = window.LookAliveSim3, Draw = window.LookAliveDraw3, P3 = Sim.P3;
  var SIZE = 560, TPS = 8;                      // dish canvas px; ticks per second at 1x
  var DPR = Math.min(2, window.devicePixelRatio || 1);
  function $(id) { return document.getElementById(id); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function isObj(v) { return v && typeof v === 'object' && !Array.isArray(v); }

  // ---- tuning sliders: key, label, min, max, step ----
  var TUNE = [
    ['upFlag', 'upFlag', 0, 0.006, 0.0001], ['upSwim', 'upSwim', 0, 0.008, 0.0001], ['upChemo', 'upChemo', 0, 0.004, 0.0001],
    ['upPili', 'upPili', 0, 0.006, 0.0001], ['upVes', 'upVes', 0, 0.003, 0.00005], ['upBase', 'upBase', 0, 0.01, 0.0001],
    ['upQuad', 'upQuad', 0, 0.01, 0.0001], ['swimSpeed', 'swimSpeed', 0, 50, 1], ['chemoGain', 'chemoGain', 0, 80, 1],
    ['decay', 'decay', 0, 0.5, 0.01], ['motionTol', 'motionTol', 0, 1, 0.01], ['motionGain', 'motionGain', 0, 20, 0.5],
    ['kill', 'kill', 0, 0.3, 0.005], ['D', 'diffusion', 0, 60, 1]
  ];

  // ---- settings ----
  function defaultState() {
    var A = Sim.defaults(); A.channels = { growth: true, regularity: true, motion: true }; A.uniform = false;
    var tune = {}; TUNE.forEach(function (t) { tune[t[0]] = P3[t[0]]; });
    return {
      build: { motor: 'flagellum', chemo: true, power: 'respiration', pace: 4, slop: 3, naps: false,
        rule: { on: true, sensor: 'food', cmp: 'gt', value: 0.015, action: 'stay', otherwise: 'seek' } },
      agents: A, tune: tune
    };
  }
  var S = defaultState(), DEF = defaultState();
  function getPath(o, p) { var a = p.split('.'); for (var i = 0; i < a.length; i++) { if (o == null) return undefined; o = o[a[i]]; } return o; }
  function setPath(o, p, v) { var a = p.split('.'); for (var i = 0; i < a.length - 1; i++) o = o[a[i]]; o[a[a.length - 1]] = v; }

  function simBuild() {
    var b = S.build, parts = [];
    if (b.motor !== 'none') parts.push(b.motor);
    if (b.chemo) parts.push('chemo');
    if (b.naps) parts.push('naps');
    var r = b.rule;
    return { pace: +b.pace, slop: +b.slop, metabolism: b.power, parts: parts,
      reflex: r.on ? { kind: 'machine', sensor: r.sensor, cmp: r.cmp, value: +r.value, action: r.action, otherwise: r.otherwise } : null };
  }
  function dishAgents() {
    var a = clone(S.agents);
    if (a.boulders.lifeMax < a.boulders.lifeMin) a.boulders.lifeMax = a.boulders.lifeMin;
    if (a.band.hi <= a.band.lo) a.band.hi = a.band.lo + 0.001;
    return a;
  }
  function tuneDiff() { var d = {}; TUNE.forEach(function (t) { if (+S.tune[t[0]] !== P3[t[0]]) d[t[0]] = +S.tune[t[0]]; }); return d; }

  // ---- run state ----
  var run = null, sum = null, T = 300, t = 0, playing = false, speed = 1, dirty = true, hlId = -1, hlText = '';
  var view = { cx: 0, cy: 0, zoom: 1 };
  var reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var timer = 0, computeMs = 0, status = 'ready', testToken = 0, testRes = null, lastError = '';

  var cv = $('dish'), ctx = cv.getContext('2d');
  cv.width = cv.height = SIZE * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

  function setStatus(s) { status = s; $('status').textContent = s; }
  function schedule() {
    setStatus('computing...'); clearTimeout(timer); timer = setTimeout(compute, 150);
    testToken++; testRes = null; renderTest();
    markTune();
  }
  function compute() {
    clearTimeout(timer);
    var t0 = performance.now();
    try {
      run = Sim.play({ agents: dishAgents() }, simBuild(), { seed: S.agents.seed | 0, tune: tuneDiff() });
      sum = Sim.summary(run); lastError = '';
    } catch (e) { lastError = String(e && e.message || e); setStatus('error'); $('vWhy').textContent = lastError; return; }
    computeMs = performance.now() - t0; T = run.T;
    $('scrub').max = T; if (t > T) t = T;
    setStatus('computed in ' + Math.round(computeMs) + ' ms');
    renderResults(); dirty = true; draw();
  }

  // ---- generic controls ----
  function allControls() { return document.querySelectorAll('[data-path]'); }
  function readControl(el) {
    if (el.type === 'checkbox') return el.checked;
    if (el.type === 'number' || el.type === 'range') { var v = parseFloat(el.value); return isFinite(v) ? v : null; }
    return el.value;
  }
  function syncUI() {
    var els = allControls();
    for (var i = 0; i < els.length; i++) {
      var el = els[i]; if (el === document.activeElement) continue;
      var v = getPath(S, el.getAttribute('data-path'));
      if (el.type === 'checkbox') el.checked = !!v; else if (v != null && String(el.value) !== String(v)) el.value = v;
    }
    var rule = S.build.rule, off = !rule.on;
    ['build.rule.sensor', 'build.rule.cmp', 'build.rule.value', 'build.rule.action', 'build.rule.otherwise'].forEach(function (p) {
      var e = document.querySelector('[data-path="' + p + '"]'); e.disabled = off;
    });
    $('ruleMark').step = rule.sensor === 'crowd' ? 1 : 0.005;
    var tr = document.querySelectorAll('.trow input[type=range]'); // tuning rows sync
    for (i = 0; i < tr.length; i++) { /* handled by data-path above */ }
    markTune();
  }
  function set(path, value) {
    if (value == null) return;
    if (path === 'build.rule.sensor' && getPath(S, path) !== value) S.build.rule.value = value === 'crowd' ? 6 : 0.015;
    setPath(S, path, value);
    syncUI(); schedule();
  }
  function bindControls() {
    var els = allControls();
    for (var i = 0; i < els.length; i++) {
      (function (el) {
        var ev = el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'input';
        el.addEventListener(ev, function () { set(el.getAttribute('data-path'), readControl(el)); });
      })(els[i]);
    }
  }

  // tuning rows
  function buildTuning() {
    var host = $('bodyTune'), h = '';
    TUNE.forEach(function (d) {
      var k = d[0], p = 'tune.' + k;
      h += '<div class="trow" data-k="' + k + '"><span class="nm" title="default ' + P3[k] + '">' + d[1] + '</span>' +
        '<input type="range" data-path="' + p + '" min="' + d[2] + '" max="' + d[3] + '" step="' + d[4] + '" aria-label="' + d[1] + '">' +
        '<input type="number" data-path="' + p + '" min="' + d[2] + '" max="' + d[3] + '" step="' + d[4] + '" aria-label="' + d[1] + ' value">' +
        '<button data-reset="' + k + '" title="Put back to the default">def ' + P3[k] + '</button></div>';
    });
    host.innerHTML = h;
    var bs = host.querySelectorAll('button[data-reset]');
    for (var i = 0; i < bs.length; i++) bs[i].addEventListener('click', function () { set('tune.' + this.getAttribute('data-reset'), P3[this.getAttribute('data-reset')]); });
  }
  function markTune() {
    var rows = document.querySelectorAll('.trow');
    for (var i = 0; i < rows.length; i++) {
      var k = rows[i].getAttribute('data-k');
      rows[i].querySelector('.nm').classList.toggle('chg', +S.tune[k] !== P3[k]);
    }
    var n = Object.keys(tuneDiff()).length;
    $('tabTune').textContent = n ? 'Tuning (' + n + ')' : 'Tuning';
  }

  // ---- presets, reset ----
  function preset(n) {
    var b = S.build; b.motor = 'flagellum'; b.chemo = true; b.power = 'respiration'; b.pace = 4; b.slop = 3; b.naps = false;
    b.rule.on = n === 16; b.rule.sensor = 'food'; b.rule.cmp = 'gt'; b.rule.value = 0.015; b.rule.action = 'stay'; b.rule.otherwise = 'seek';
    syncUI(); schedule();
  }
  function resetAll() { S = defaultState(); view.cx = view.cy = 0; view.zoom = 1; t = 0; hlId = -1; hlText = ''; syncUI(); schedule(); }

  // ---- copy / load ----
  function settingsJSON() { return JSON.stringify({ agents: dishAgents(), tune: tuneDiff(), build: simBuild() }, null, 1); }
  function copySettings() {
    var txt = settingsJSON(), ta = $('settingsTxt'); ta.value = txt; ta.focus(); ta.select();
    var ok = false;
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(txt).then(function () { $('copyStat').textContent = 'copied'; }, function () { $('copyStat').textContent = 'text selected, press Ctrl/Cmd+C'; }); ok = true; } } catch (e) { }
    if (!ok) { try { ok = document.execCommand('copy'); } catch (e2) { } }
    $('copyStat').textContent = ok ? 'copied' : 'text selected, press Ctrl/Cmd+C';
    return txt;
  }
  function merge(dst, src) { for (var k in src) { if (isObj(src[k]) && isObj(dst[k])) merge(dst[k], src[k]); else dst[k] = src[k]; } return dst; }
  function loadSettings() {
    var o;
    try { o = JSON.parse($('settingsTxt').value); } catch (e) { $('copyStat').textContent = 'not valid JSON'; return false; }
    if (!isObj(o)) { $('copyStat').textContent = 'not a settings object'; return false; }
    var d = defaultState();
    if (o.agents) merge(d.agents, o.agents);
    if (o.tune) for (var k in o.tune) if (d.tune.hasOwnProperty(k)) d.tune[k] = +o.tune[k];
    if (o.build) {
      var b = o.build, parts = b.parts || [], B = d.build;
      B.motor = parts.indexOf('flagellum') >= 0 ? 'flagellum' : parts.indexOf('pili') >= 0 ? 'pili' : parts.indexOf('vesicles') >= 0 ? 'vesicles' : 'none';
      B.chemo = parts.indexOf('chemo') >= 0; B.naps = parts.indexOf('naps') >= 0;
      if (b.pace != null) B.pace = b.pace; if (b.slop != null) B.slop = b.slop; if (b.metabolism) B.power = b.metabolism;
      if (b.reflex) { B.rule.on = true; merge(B.rule, b.reflex); delete B.rule.kind; } else B.rule.on = false;
    }
    S = d; syncUI(); schedule(); $('copyStat').textContent = 'loaded';
    return true;
  }

  // ---- charts ----
  function setupCanvas(c) {
    var w = parseInt(c.style.width, 10), h = parseInt(c.style.height, 10);
    c.width = w * DPR; c.height = h * DPR; var g = c.getContext('2d'); g.setTransform(DPR, 0, 0, DPR, 0, 0); return { g: g, w: w, h: h };
  }
  var CS = null;
  function chartsInit() { CS = { share: setupCanvas($('chShare')), stage: setupCanvas($('chStage')), move: setupCanvas($('chMove')) }; }
  function drawCharts() {
    if (!run || !CS) return;
    var H = run.H, band = run.band, i, c, g, w, h;
    // share
    c = CS.share; g = c.g; w = c.w; h = c.h; g.clearRect(0, 0, w, h);
    var L = 30, R = 4, Tp = 5, B = h - 15, ymax = Math.max(0.2, band.hi * 1.6), mx = 0;
    for (i = 0; i <= T; i++) if (H.share[i] > mx) mx = H.share[i];
    ymax = Math.max(ymax, mx); ymax = Math.ceil(ymax * 20) / 20;
    function X(tt) { return L + (w - L - R) * tt / T; }
    function Y(v) { return B - (B - Tp) * v / ymax; }
    g.fillStyle = '#0e1118'; g.fillRect(L, Tp, w - L - R, B - Tp);
    g.fillStyle = 'rgba(95,224,160,0.2)'; g.fillRect(L, Y(band.hi), w - L - R, Y(band.lo) - Y(band.hi));
    g.strokeStyle = 'rgba(95,224,160,0.55)'; g.lineWidth = 1; g.beginPath(); g.moveTo(L, Y(band.hi)); g.lineTo(w - R, Y(band.hi)); g.moveTo(L, Y(band.lo)); g.lineTo(w - R, Y(band.lo)); g.stroke();
    g.fillStyle = '#98a0b4'; g.font = '12px system-ui,sans-serif';
    g.fillText(Math.round(ymax * 100) + '%', 2, Tp + 9); g.fillText('0', 14, B);
    g.fillText('0', L, h - 2); g.fillText(String(T), w - R - 22, h - 2); g.fillText(String(Math.round(T / 2)), X(T / 2) - 8, h - 2);
    g.strokeStyle = '#ff5a9a'; g.lineWidth = 1.6; g.beginPath();
    for (i = 0; i <= T; i++) { if (i) g.lineTo(X(i), Y(H.share[i])); else g.moveTo(X(i), Y(H.share[i])); } g.stroke();
    g.strokeStyle = '#fff'; g.lineWidth = 1; g.beginPath(); g.moveTo(X(t), Tp); g.lineTo(X(t), B); g.stroke();
    // stage strip
    c = CS.stage; g = c.g; w = c.w; h = c.h; g.clearRect(0, 0, w, h);
    var SC = ['#1c2130', '#d9b84a', '#e8873a', '#e0483f'];
    for (i = 1; i <= T; i++) { g.fillStyle = SC[H.stage[i] | 0]; g.fillRect(L + (w - L - R) * (i - 1) / T, 0, (w - L - R) / T + 0.6, h); }
    g.fillStyle = '#98a0b4'; g.fillText('guard', 0, h - 1);
    g.strokeStyle = '#fff'; g.beginPath(); g.moveTo(L + (w - L - R) * t / T, 0); g.lineTo(L + (w - L - R) * t / T, h); g.stroke();
    // moving fraction
    c = CS.move; g = c.g; w = c.w; h = c.h; g.clearRect(0, 0, w, h);
    B = h - 3; Tp = 3;
    g.fillStyle = '#0e1118'; g.fillRect(L, Tp, w - L - R, B - Tp);
    function Y2(v) { return B - (B - Tp) * v; }
    g.fillStyle = '#98a0b4'; g.fillText('100%', 0, Tp + 9); g.fillText('0', 14, B);
    var ser = [[H.moveN, '#a58bff'], [H.moveS, '#ff5a9a']];
    for (var s = 0; s < 2; s++) {
      g.strokeStyle = ser[s][1]; g.lineWidth = 1.5; g.beginPath();
      for (i = 1; i <= T; i++) {
        if (s === 1 && H.scouts[i] === 0) continue;
        var v = ser[s][0][i]; if (i === 1 || (s === 1 && H.scouts[i - 1] === 0)) g.moveTo(X(i), Y2(v)); else g.lineTo(X(i), Y2(v));
      }
      g.stroke();
    }
    g.strokeStyle = '#fff'; g.lineWidth = 1; g.beginPath(); g.moveTo(X(t), Tp); g.lineTo(X(t), B); g.stroke();
  }
  function pct(v) { return Math.round(v * 100) + '%'; }
  function renderResults() {
    var v = run.v, vb = $('vBadge');
    if (v.win) { vb.textContent = 'WIN'; vb.style.color = '#5fe0a0'; $('vWhy').textContent = 'In the band ' + pct(v.bandFrac) + ' of the time (needs ' + pct(run.band.need) + '). Highest guard stage: ' + v.maxStage + '.'; }
    else { vb.textContent = 'LOSS: ' + (run.autopsy ? run.autopsy.cause : '?'); vb.style.color = '#ff7a7a'; $('vWhy').textContent = run.autopsy ? run.autopsy.text : ''; }
    var s = sum, f = function (x, d) { return x.toFixed(d); };
    var cells = [
      ['in band', pct(s.inBand)], ['min', pct(s.minShare)], ['max', pct(s.maxShare)],
      ['final', pct(s.finalShare)], ['stage', s.peakStage], ['starved', s.deaths.starved],
      ['killed', s.deaths.guards], ['move you', pct(s.moveScouts)], ['move them', pct(s.moveNatives)],
      ['peak grow', f(s.peak.growth, 2)], ['peak reg', f(s.peak.regularity, 2)], ['peak mot', f(s.peak.motion, 2)],
      ['blame grow', pct(s.share.growth)], ['blame reg', pct(s.share.regularity)], ['blame mot', pct(s.share.motion)]
    ];
    var h = ''; cells.forEach(function (c) { h += '<span><i>' + c[0] + '</i> <b>' + c[1] + '</b></span>'; });
    $('sumgrid').innerHTML = h;
    drawCharts(); renderCounts();
  }
  var lastCountTick = -1;
  function renderCounts() {
    if (!run) return;
    var ti = Math.floor(t), fr = run.frames[ti], c = [0, 0, 0, 0], i;
    for (i = 0; i < fr.n; i++) c[fr.k[i] & 7]++;
    $('counts').innerHTML = 't ' + ti + ' &nbsp;<span style="color:#ff5a9a">scouts ' + c[0] + '</span> &nbsp;<span style="color:#9a88e8">quad ' + c[1] + ' halo ' + c[2] + ' sali ' + c[3] + '</span>';
    $('timeLbl').textContent = 'tick ' + ti + ' / ' + T;
    updateReadout();
  }
  function updateReadout() {
    var el = $('readout');
    if (hlId < 0) { el.textContent = 'Click a cell to see what it is doing.'; return; }
    var fr = run.frames[Math.floor(t)], k = -1, i;
    for (i = 0; i < fr.n; i++) if (fr.id[i] === hlId) { k = fr.k[i]; break; }
    var names = ['scout', 'quad', 'halo', 'sali'];
    if (k < 0) el.textContent = 'Highlighted cell #' + hlId + ' is not alive at this tick.';
    else el.textContent = names[k & 7] + ' #' + hlId + ': ' + ((k & 16) ? 'resting' : (k & 8) ? 'moving' : 'not moving this tick');
  }

  // ---- drawing the dish ----
  function draw() {
    if (!run) return;
    Draw.frame(ctx, run, t, view, { size: SIZE, reduced: reduced, trails: $('trails').checked, highlightId: hlId });
    var sb = Draw.scaleBar(view, SIZE), y = SIZE - 14;
    ctx.save(); ctx.strokeStyle = '#e8ebf4'; ctx.fillStyle = '#e8ebf4'; ctx.lineWidth = 2; ctx.font = '12px system-ui,sans-serif';
    ctx.beginPath(); ctx.moveTo(14, y); ctx.lineTo(14 + sb.px, y); ctx.moveTo(14, y - 4); ctx.lineTo(14, y + 4); ctx.moveTo(14 + sb.px, y - 4); ctx.lineTo(14 + sb.px, y + 4); ctx.stroke();
    ctx.fillText(sb.label, 14, y - 8); ctx.fillText('zoom ' + view.zoom.toFixed(1) + 'x', SIZE - 70, SIZE - 10); ctx.restore();
    $('scrub').value = t; drawCharts(); renderCounts(); dirty = false;
  }
  function seek(v) { t = Math.max(0, Math.min(T, v)); dirty = true; draw(); }
  function setPlaying(p) { playing = p; $('playBtn').textContent = p ? 'Pause' : 'Play'; }
  function setSpeed(s) {
    speed = s; var bs = document.querySelectorAll('.sp');
    for (var i = 0; i < bs.length; i++) bs[i].classList.toggle('on', +bs[i].getAttribute('data-sp') === s);
  }
  var last = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    var dt = Math.min(0.1, (now - last) / 1000); last = now;
    if (playing && run) { t += dt * TPS * speed; if (t >= T) { t = T; setPlaying(false); } dirty = true; }
    if (dirty) draw();
  }

  // ---- view: zoom, pan, click ----
  function ppu() { return SIZE * 0.5 * 0.96 * view.zoom; }
  function clampView() {
    view.zoom = Math.max(0.8, Math.min(40, view.zoom));
    view.cx = Math.max(-1, Math.min(1, view.cx)); view.cy = Math.max(-1, Math.min(1, view.cy));
  }
  function canvasXY(e) { var r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * SIZE / r.width, (e.clientY - r.top) * SIZE / r.height]; }
  function zoomAt(px, py, factor) {
    var u = view.cx + (px - SIZE / 2) / ppu(), v = view.cy + (py - SIZE / 2) / ppu();
    view.zoom *= factor; clampView();
    view.cx = u - (px - SIZE / 2) / ppu(); view.cy = v - (py - SIZE / 2) / ppu(); clampView(); dirty = true; draw();
  }
  function canvasClick(px, py) {
    var r = Draw.pick(run, t, view, SIZE, px, py);
    hlId = r ? r.id : -1; hlText = r ? r.kind : ''; dirty = true; draw();
    return r;
  }
  cv.addEventListener('wheel', function (e) { e.preventDefault(); var p = canvasXY(e); zoomAt(p[0], p[1], Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
  var drag = null;
  cv.addEventListener('pointerdown', function (e) { cv.focus(); var p = canvasXY(e); drag = { x: p[0], y: p[1], sx: p[0], sy: p[1], moved: false }; try { cv.setPointerCapture(e.pointerId); } catch (x) { } cv.style.cursor = 'grabbing'; });
  cv.addEventListener('pointermove', function (e) {
    if (!drag) return; var p = canvasXY(e);
    if (Math.abs(p[0] - drag.sx) + Math.abs(p[1] - drag.sy) > 4) drag.moved = true;
    if (drag.moved) { view.cx -= (p[0] - drag.x) / ppu(); view.cy -= (p[1] - drag.y) / ppu(); clampView(); dirty = true; draw(); }
    drag.x = p[0]; drag.y = p[1];
  });
  cv.addEventListener('pointerup', function (e) { if (drag && !drag.moved) canvasClick(drag.sx, drag.sy); drag = null; cv.style.cursor = 'grab'; });
  cv.addEventListener('dblclick', function () { view.cx = view.cy = 0; view.zoom = 1; dirty = true; draw(); });

  // ---- playback controls ----
  $('playBtn').addEventListener('click', function () { if (!playing && t >= T) t = 0; setPlaying(!playing); });
  $('scrub').addEventListener('input', function () { seek(+this.value); });
  Array.prototype.forEach.call(document.querySelectorAll('.sp'), function (b) { b.addEventListener('click', function () { setSpeed(+b.getAttribute('data-sp')); }); });
  $('trails').addEventListener('change', function () { dirty = true; draw(); });
  var SPEEDS = [0.5, 1, 2, 4];
  document.addEventListener('keydown', function (e) {
    var tg = e.target, tag = tg && tg.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || tag === 'BUTTON') return;
    if (e.key === ' ') { e.preventDefault(); if (!playing && t >= T) t = 0; setPlaying(!playing); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); setPlaying(false); seek(Math.floor(t) + (e.shiftKey ? 10 : 1)); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); setPlaying(false); seek(Math.ceil(t) - (e.shiftKey ? 10 : 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSpeed(SPEEDS[Math.min(3, SPEEDS.indexOf(speed) + 1)]); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setSpeed(SPEEDS[Math.max(0, SPEEDS.indexOf(speed) - 1)]); }
  });
  // chart click scrubs
  ['chShare', 'chStage', 'chMove'].forEach(function (id) {
    $(id).addEventListener('pointerdown', function (e) {
      var r = this.getBoundingClientRect(), L = 30, w = r.width, x = (e.clientX - r.left - L) / (w - L - 4);
      setPlaying(false); seek(Math.round(x * T));
    });
  });

  // ---- tabs, reset, presets ----
  function tab(which) {
    $('bodyDish').hidden = which !== 'dish'; $('bodyTune').hidden = which !== 'tune';
    $('tabDish').classList.toggle('on', which === 'dish'); $('tabTune').classList.toggle('on', which === 'tune');
  }
  $('tabDish').addEventListener('click', function () { tab('dish'); });
  $('tabTune').addEventListener('click', function () { tab('tune'); });
  $('resetAll').addEventListener('click', resetAll);
  $('p15').addEventListener('click', function () { preset(15); });
  $('p16').addEventListener('click', function () { preset(16); });
  $('copyBtn').addEventListener('click', copySettings);
  $('loadBtn').addEventListener('click', loadSettings);

  // ---- Test 10 seeds ----
  function renderTest() {
    if (!testRes) { $('testStat').textContent = ''; $('seedsOut').innerHTML = ''; return; }
    var r = testRes;
    $('testStat').textContent = r.done < 10 ? 'running ' + r.done + ' / 10' : 'wins ' + r.wins + ' of 10';
    var causes = {}; r.list.forEach(function (x) { if (!x.win) causes[x.cause] = (causes[x.cause] || 0) + 1; });
    var ct = Object.keys(causes).map(function (k) { return k + ' x' + causes[k]; }).join(', ');
    var seeds = r.list.map(function (x, i) { return '<span style="color:' + (x.win ? '#5fe0a0' : '#ff7a7a') + '">' + (i + 1) + (x.win ? 'W' : 'L') + '</span>'; }).join(' ');
    $('seedsOut').innerHTML = (r.done < 10 ? '' : (r.wins + ' of 10 seeds win. ' + (ct ? 'Losses: ' + ct + '.' : 'No losses.') + '<br>')) + seeds;
  }
  function testSeeds(sync) {
    var tok = ++testToken, res = testRes = { list: [], wins: 0, done: 0 }, a = dishAgents(), b = simBuild(), tn = tuneDiff();
    function one() {
      var s = res.done + 1, r = Sim.play({ agents: a }, b, { seed: s, record: false, tune: tn });
      res.list.push({ win: r.v.win, cause: r.v.win ? '' : r.autopsy.cause }); if (r.v.win) res.wins++; res.done++;
    }
    function chunk() {
      if (tok !== testToken) return;
      one(); if (res.done < 10) one();
      renderTest(); if (res.done < 10) setTimeout(chunk, 0);
    }
    renderTest();
    if (sync) { while (res.done < 10) one(); renderTest(); } else setTimeout(chunk, 0);
  }
  $('test10').addEventListener('click', function () { if (timer) compute(); testSeeds(false); });

  // ---- start ----
  buildTuning(); bindControls(); chartsInit(); syncUI(); setSpeed(1); tab('dish');
  compute(); setPlaying(!reduced);
  requestAnimationFrame(function (n) { last = n; loop(n); });

  // test hook for the headless driver
  window.__lab = {
    set: function (p, v) { set(p, v); }, flush: function () { compute(); }, seek: seek, draw: function () { dirty = true; draw(); },
    preset: preset, resetAll: resetAll, tab: tab, play: setPlaying, speed: setSpeed,
    setView: function (cx, cy, z) { view.cx = cx; view.cy = cy; view.zoom = z; clampView(); dirty = true; draw(); },
    click: canvasClick, copy: copySettings, load: loadSettings, test10: testSeeds,
    getText: function () { return $('settingsTxt').value; }, setText: function (v) { $('settingsTxt').value = v; },
    get run() { return run; },
    state: function () {
      return { t: t, T: T, playing: playing, speed: speed, status: status, view: clone(view), hlId: hlId, win: run && run.v.win, cause: run && run.autopsy && run.autopsy.cause,
        bandFrac: run && run.v.bandFrac, computeMs: computeMs, settings: clone(S), test: testRes && clone(testRes), simBuild: simBuild(), error: lastError };
    }
  };
})();

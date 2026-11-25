// Beat Drop: drawing, input, editing, transport and saving.
(function () {
  'use strict';

  var SAVE_KEY = 'drop-machine-v1';
  var COLORS = { wood: '#ffb347', metal: '#5ee6ff', glass: '#d6bcff', drum: '#ff5f85', pad: '#5fe58a' };
  var PHOSPHOR = '#6dff9c';
  var MAX_BALLS = 32, MAX_PIT_BALLS = 8, MAX_DROPPERS = 3;
  var MAX_PITS = 4;

  var cv = document.getElementById('cv'), ctx = cv.getContext('2d');
  var $ = function (id) { return document.getElementById(id); };

  var S = {
    machine: null, active: 0, dropSel: 0, sel: null, place: null, dockTab: 'add',
    playing: false, clock: null, stepQueue: [], balls: [], rings: [], flash: {},
    scroll: {}, cache: {}, undo: [], redo: [], cells: [], drag: null, drawerDrag: null,
    lastRebuild: 0, rebuildTimer: null, saveTimer: null
  };

  // ---------- helpers ----------
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function snap(v, g) { return Math.round(v / g) * g; }
  function audioNow() { if (S.fake) return S.fake.t; var c = Kit.audio.ctx; return c ? c.currentTime : performance.now() / 1000; }
  function stepDur() { return 60 / S.machine.bpm / 4; }
  function pitById(id) { return S.machine.pits.filter(function (p) { return p.id === id; })[0]; }
  function activePit() { return S.machine.pits[S.active]; }
  function partOf(pit, id) { for (var i = 0; i < pit.parts.length; i++) if (pit.parts[i].id === id) return pit.parts[i]; return null; }
  function selPart() { return S.sel == null ? null : partOf(activePit(), S.sel); }
  function partColor(p) { return p.type === 'bar' ? COLORS[p.material] : COLORS[p.type]; }
  function clampAngle(p, a) { return p.type === 'bar' ? normAngle(a) : clamp(a, -DM.angleRange(p), DM.angleRange(p)); }
  function lifeLabel(b) { return b === 1 ? '1 beat' : b === 2 ? '2 beats' : (b / 4) + (b === 4 ? ' bar' : ' bars'); }
  function degText(a) { var r = Math.round(a); return (r < 0 ? '\u2212' : '') + Math.abs(r) + '\u00B0'; }
  function normAngle(a) { while (a > 90) a -= 180; while (a <= -90) a += 180; return a; }

  // ---------- machine, saving, undo ----------
  function normalize(m) {
    var d = DM.newMachine();
    m.bpm = clamp(+m.bpm || d.bpm, 70, 160);
    m.key = clamp(m.key | 0, 0, 11);
    if (!DM.SCALES[m.scale]) m.scale = d.scale;
    m.tight = m.tight == null ? d.tight : clamp(+m.tight, 0, 1);
    m.master = m.master == null ? d.master : clamp(+m.master, 0, 1);
    m.pits = (m.pits || []).slice(0, MAX_PITS);
    if (!m.pits.length) m.pits = [DM.newPit(1)];
    var maxId = 0;
    m.pits.forEach(function (p, i) {
      p.id = p.id || i + 1;
      p.floors = clamp(p.floors | 0, 0, DM.MAX_FLOORS);
      DM.migratePit(p);
      p.droppers = p.droppers.slice(0, MAX_DROPPERS);
      p.droppers.forEach(function (d) {
        d.x = clamp(+d.x || 180, 20, 340);
        if (!d.steps || d.steps.length !== 16) d.steps = DM.newPit(1).droppers[0].steps;
        d.steps = d.steps.map(Boolean);
      });
      p.parts = p.parts || [];
      p.vol = p.vol == null ? 0.8 : p.vol;
      if (DM.LIFE_CHOICES.indexOf(p.life) < 0) p.life = 4;
      p.transpose = clamp(p.transpose | 0, -7, 7);
      p.offset = clamp(p.offset | 0, 0, 15);
      p.offsetBars = clamp(p.offsetBars | 0, 0, 3);
      p.parts.forEach(function (q) { maxId = Math.max(maxId, q.id || 0); });
    });
    m.nextId = Math.max(m.nextId || 1, maxId + 1);
    return m;
  }
  function load() {
    var saved = Kit.store.get(SAVE_KEY, null);
    if (saved && saved.pits) { try { return normalize(saved); } catch (e) { /* fall through */ } }
    return DM.starterMachine();
  }
  function save() {
    clearTimeout(S.saveTimer);
    S.saveTimer = setTimeout(function () { Kit.store.set(SAVE_KEY, S.machine); }, 250);
  }
  function snapshot() { return JSON.stringify(S.machine.pits); }
  function pushUndo(before) {
    if (before === snapshot()) return;
    S.undo.push(before); if (S.undo.length > 50) S.undo.shift();
    S.redo = []; syncToolbar();
  }
  function restore(json) {
    S.machine.pits = JSON.parse(json);
    S.active = clamp(S.active, 0, S.machine.pits.length - 1);
    if (S.sel != null && !selPart()) S.sel = null;
    afterChange(true);
  }
  function undo() { if (!S.undo.length) return; S.redo.push(snapshot()); restore(S.undo.pop()); }
  function redo() { if (!S.redo.length) return; S.undo.push(snapshot()); restore(S.redo.pop()); }
  // Run an edit as one undo step.
  function edit(fn) { var before = snapshot(); fn(); afterChange(true); pushUndo(before); }
  function afterChange(rerender) {
    rebuild(); save(); syncToolbar(); renderTabs();
    if (rerender) renderDock();
  }

  // ---------- path cache ----------
  function dotColor(part) {
    if (part.type === 'drum') return part.size === 'big' ? '#ff5f85' : part.size === 'medium' ? '#ff9f5f' : '#ffd75f';
    return partColor(part);
  }
  function rebuild() {
    var m = S.machine, sd = stepDur();
    S.cache = {};
    m.pits.forEach(function (pit) {
      var all = DM.simulateAll(pit, m);
      var drops = all.map(function (res) {
        var snapT = res.hits.map(function (h) { return DM.snapTime(h.t, m.tight, sd); });
        var tally = {}, best = null, bn = 0;
        res.hits.forEach(function (h) {
          var part = partOf(pit, h.partId); if (!part) return;
          var col = dotColor(part); tally[col] = (tally[col] || 0) + 1;
          if (tally[col] > bn) { bn = tally[col]; best = col; }
        });
        return { res: res, snapT: snapT, lead: DM.leadTime(res, m, sd), color: best || '#7f8ba6' };
      });
      S.cache[pit.id] = { drops: drops, events: DM.loopEvents(pit, m, all) };
    });
    S.lastRebuild = performance.now();
  }
  // During a drag: at most one re-simulation every 50 ms.
  function rebuildSoon() {
    var wait = 50 - (performance.now() - S.lastRebuild);
    if (wait <= 0) { rebuild(); return; }
    if (S.rebuildTimer) return;
    S.rebuildTimer = setTimeout(function () { S.rebuildTimer = null; rebuild(); }, wait);
  }
  // Visual time for a ball: warp raw path time so hits land exactly on the (snapped) sound times.
  function rawTime(c, age) {
    var xs = c.snapT, ys = c.res.hits, n = xs.length;
    if (!n) return age;
    var px = 0, py = 0;
    for (var i = 0; i < n; i++) {
      if (age < xs[i]) {
        var span = xs[i] - px;
        return span <= 1e-9 ? ys[i].t : py + (age - px) / span * (ys[i].t - py);
      }
      px = xs[i]; py = ys[i].t;
    }
    return py + (age - px);
  }

  // ---------- transport ----------
  function audible(pit) {
    var anySolo = S.machine.pits.some(function (p) { return p.solo; });
    return !pit.mute && (!anySolo || pit.solo);
  }
  function onStep(step, time) {
    S.stepQueue.push({ step: step, time: time });
    if (S.stepQueue.length > 40) S.stepQueue.shift();
    var m = S.machine;
    m.pits.forEach(function (pit) {
      var cache = S.cache[pit.id]; if (!cache) return;
      pit.droppers.forEach(function (dr, di) {
        if (!DM.stepLit(pit, step, di)) return;
        var c = cache.drops[di]; if (!c) return;
        var t0 = time - c.lead;          // released early so the first sound lands on this step
        S.balls.push({ pitId: pit.id, c: c, t0: t0, next: 0 });
        if (S.balls.length > MAX_BALLS) S.balls.shift();
        var mine = S.balls.filter(function (b) { return b.pitId === pit.id && b.killAt == null; });
        while (mine.length > MAX_PIT_BALLS) mine.shift().killAt = time;     // oldest fades out first
        if (!audible(pit)) return;
        var gain = pit.vol * m.master;
        c.res.hits.forEach(function (h, i) {
          var part = partOf(pit, h.partId);
          if (part) DMAudio.playPart(part, DM.partMidi(part, pit, m), t0 + c.snapT[i], h.speed, gain);
        });
      });
    });
  }
  function play() {
    Kit.audio.unlock();
    if (!S.clock) S.clock = Kit.audio.clock({ bpm: S.machine.bpm, stepsPerBeat: 4, onStep: onStep });
    S.clock.setBpm(S.machine.bpm); S.clock.reset(); S.stepQueue = [];
    S.clock.start();
    S.playing = true; syncToolbar();
  }
  function stop() { if (S.clock) S.clock.stop(); S.playing = false; S.stepQueue = []; syncToolbar(); }
  function togglePlay() { if (S.playing) stop(); else play(); }
  // Where the playhead is, in global 1/16 steps (fractional), or -1.
  function playPos() {
    if (!S.playing || !S.stepQueue.length) return -1;
    var now = audioNow(), cur = null;
    for (var i = 0; i < S.stepQueue.length; i++) if (S.stepQueue[i].time <= now) cur = S.stepQueue[i];
    if (!cur) return -1;
    return cur.step + clamp((now - cur.time) / stepDur(), 0, 1);
  }

  // ---------- editing ----------
  function newPart(type, x, y) {
    var pit = activePit(), spec = { type: type, x: x, y: y };
    if (type === 'bar') { spec.len = DM.snapBarLen(110, S.machine.scale); spec.angle = 15; }
    return DM.addPart(S.machine, pit, spec);
  }
  function placePart(type, wx, wy) {
    var pit = activePit(), h = DM.pitHeight(pit);
    var p;
    edit(function () { p = newPart(type, clamp(snap(wx, 10), 20, 340), clamp(snap(wy, 10), 40, h - 20)); });
    S.sel = p.id; S.place = null; S.dockTab = 'part'; renderDock();
    preview(p);
  }
  function preview(p) {
    if (!p) return;
    var pit = activePit();
    Kit.audio.unlock();
    if (!Kit.audio.ctx) return;
    DMAudio.playPart(p, DM.partMidi(p, pit, S.machine), audioNow() + 0.02, 900, 0.8 * S.machine.master);
  }
  function duplicatePart() {
    var p = selPart(); if (!p) return;
    var n;
    edit(function () {
      var pit = activePit(), h = DM.pitHeight(pit);
      n = DM.addPart(S.machine, pit, Object.assign({}, p, { x: clamp(p.x + 20, 20, 340), y: clamp(p.y + 20, 40, h - 20) }));
    });
    S.sel = n.id; renderDock();
  }
  function deletePart() {
    var p = selPart(); if (!p) return;
    edit(function () { var pit = activePit(); pit.parts = pit.parts.filter(function (q) { return q.id !== p.id; }); });
    S.sel = null; renderDock();
  }
  function addPit() {
    if (S.machine.pits.length >= MAX_PITS) return;
    edit(function () {
      var id = S.machine.pits.reduce(function (a, p) { return Math.max(a, p.id); }, 0) + 1;
      S.machine.pits.push(DM.newPit(id));
    });
    S.active = S.machine.pits.length - 1; S.sel = null; afterChange(true);
  }
  function removePit(i) {
    if (S.machine.pits.length < 2) return;
    if (!window.confirm('Remove Pit ' + (i + 1) + '?')) return;
    edit(function () { S.machine.pits.splice(i, 1); });
    S.active = clamp(S.active, 0, S.machine.pits.length - 1); S.sel = null; afterChange(true);
  }
  function newMachine() {
    if (!window.confirm('Clear everything and start a new machine?')) return;
    var before = snapshot();
    var p = DM.newPit(1);
    S.machine.pits = [p]; S.active = 0; S.sel = null; S.scroll = {};
    afterChange(true); pushUndo(before);
  }
  function openDup() {
    if (S.machine.pits.length >= MAX_PITS) return;
    $('modal').hidden = false;
  }
  function doDup() {
    var m = S.machine, src = activePit();
    var tr = +$('dTr').value, later = $('dDelay').checked, mirror = $('dMirror').checked;
    $('modal').hidden = true;
    edit(function () {
      var n = DM.duplicatePit(m, src, { transpose: tr, mirror: mirror, offsetBars: later ? (src.offsetBars || 0) + 1 : (src.offsetBars || 0) });
      m.pits.push(n);
    });
    S.active = m.pits.length - 1; S.sel = null; afterChange(true);
  }
  function addFloor() {
    var pit = activePit();
    if ((pit.floors || 0) >= DM.MAX_FLOORS) return;
    edit(function () { pit.floors = (pit.floors || 0) + 1; });
  }

  // ---------- toolbar, tabs, dock (HTML) ----------
  function option(v, label, cur) { return '<option value="' + v + '"' + (String(v) === String(cur) ? ' selected' : '') + '>' + label + '</option>'; }
  function syncToolbar() {
    var m = S.machine;
    $('play').textContent = S.playing ? 'Stop' : 'Play';
    $('undo').disabled = !S.undo.length; $('redo').disabled = !S.redo.length;
    $('floor').disabled = (activePit().floors || 0) >= DM.MAX_FLOORS;
    $('floorDown').disabled = !(activePit().floors > 0);
    scaleMood();
    $('dup').disabled = m.pits.length >= MAX_PITS;
    $('bpm').value = m.bpm; $('bpmOut').textContent = m.bpm;
    $('key').value = m.key; $('scale').value = m.scale;
    $('tight').value = m.tight; $('master').value = m.master;
  }
  function renderTabs() {
    var h = '';
    S.machine.pits.forEach(function (p, i) { h += '<button class="tab' + (i === S.active ? ' on' : '') + '" data-pit="' + i + '" type="button">Pit ' + (i + 1) + '</button>'; });
    if (S.machine.pits.length < MAX_PITS) h += '<button class="tab" data-pit="new" type="button" aria-label="Add pit">+</button>';
    $('tabs').innerHTML = h;
  }
  function renderDock() {
    var tab = S.dockTab, p = selPart(), h = '<div class="seg">';
    [['add', 'Add'], ['part', 'Part'], ['pit', 'Pit']].forEach(function (t) {
      h += '<button class="tab' + (tab === t[0] ? ' on' : '') + '" data-dock="' + t[0] + '" type="button">' + t[1] + '</button>';
    });
    h += '</div><div class="dbody">';
    if (tab === 'add') {
      [['bar', 'Bar', COLORS.wood], ['drum', 'Drum', COLORS.drum], ['pad', 'Pad', COLORS.pad]].forEach(function (t) {
        h += '<button class="btn' + (S.place === t[0] ? ' on' : '') + '" data-add="' + t[0] + '" type="button"><span class="dot" style="background:' + t[2] + '"></span> ' + t[1] + '</button>';
      });
      h += '<span class="hint">' + (S.place ? 'Now tap the pit to place it.' : 'Tap a part, then tap the pit. Or drag it in.') + '</span>';
    } else if (tab === 'part') {
      if (!p) h += '<span class="hint">Tap a part in the pit to edit it.</span>';
      else {
        h += '<span class="lbl">' + partTitle(p) + '</span>';
        var bounce = '<select data-f="bounce" aria-label="Bounce">' + option('real', 'Realistic', p.bounce) + option('musical', 'Musical', p.bounce) + option('forever', 'Forever', p.bounce) + option('sticky', 'Sticky', p.bounce) + '</select>';
        if (p.type === 'bar') {
          h += '<select data-f="material" aria-label="Material">' + option('wood', 'Wood', p.material) + option('metal', 'Metal', p.material) + option('glass', 'Glass', p.material) + '</select>' + bounce;
        } else if (p.type === 'drum') {
          h += '<select data-f="size" aria-label="Size">' + option('big', 'Big (kick)', p.size) + option('medium', 'Medium (snare)', p.size) + option('small', 'Small (hat)', p.size) + '</select>' + bounce;
        } else {
          h += '<select data-f="mode" aria-label="Mode">' + option('locked', 'Beat-locked', p.mode) + option('forever', 'Forever', p.mode) + '</select>';
          if (p.mode !== 'forever') h += '<select data-f="div" aria-label="Division">' + option(4, '1/4', p.div) + option(8, '1/8', p.div) + option(16, '1/16', p.div) + '</select>';
        }
        var rg = DM.angleRange(p);
        h += '<span class="chip"><button class="btn small" data-act="ang-" type="button" aria-label="Angle down">&minus;</button><input class="num" type="number" data-f="angle" min="-' + rg + '" max="' + rg + '" step="5" value="' + Math.round(p.angle || 0) + '" aria-label="Angle in degrees">&deg;<button class="btn small" data-act="ang+" type="button" aria-label="Angle up">+</button></span>';
        h += '<button class="btn small" data-act="dupPart" type="button">Duplicate</button><button class="btn small" data-act="delPart" type="button">Delete</button>';
      }
    } else {
      var pit = activePit(), dsel = clamp(S.dropSel, 0, pit.droppers.length - 1);
      function q(id) { return '<button class="q" data-help="' + id + '" type="button" aria-label="Help">?</button>'; }
      h += '<span class="lbl">Pit ' + (S.active + 1) + '</span>';
      h += '<label class="ctl">Volume <input type="range" data-s="vol" min="0" max="1" step="0.05" value="' + pit.vol + '"></label>';
      h += '<span class="ctl"><label class="ctl">Ball life <select data-p="life" aria-label="Ball life">' + DM.LIFE_CHOICES.map(function (b) { return option(b, lifeLabel(b), DM.lifeBeats(pit)); }).join('') + '</select></label>' + q('life') + '</span>';
      h += '<span class="chip">Droppers <button class="btn small" data-act="dropDown" type="button" aria-label="Fewer droppers"' + (pit.droppers.length < 2 ? ' disabled' : '') + '>&minus;</button><span class="val">' + pit.droppers.length + '</span><button class="btn small" data-act="dropUp" type="button" aria-label="More droppers"' + (pit.droppers.length >= MAX_DROPPERS ? ' disabled' : '') + '>+</button></span>';
      h += '<button class="btn small" data-act="rhythm" type="button">Rhythm' + (pit.droppers.length > 1 ? ' (row ' + (dsel + 1) + ')' : '') + '</button>';
      h += stepper('Shift', 'tr', pit.transpose, 'steps') + q('shift') + stepper('Start', 'off', pit.offset, '/16') + q('start') + stepper('Delay', 'bars', pit.offsetBars, 'bars') + q('delay');
    }
    $('dock').innerHTML = h + '</div>';
  }
  function stepper(label, k, v, unit) {
    return '<span class="chip">' + label + ' <button class="btn small" data-step="' + k + '-" type="button" aria-label="' + label + ' down">&minus;</button><span class="val">' + (k === 'tr' && v > 0 ? '+' : '') + v + '</span><button class="btn small" data-step="' + k + '+" type="button" aria-label="' + label + ' up">+</button></span>';
  }
  function partTitle(p) {
    if (p.type === 'bar') return 'Bar ' + DM.noteName(DM.partMidi(p, activePit(), S.machine));
    if (p.type === 'drum') return 'Drum';
    return 'Pad';
  }

  // ---------- help cards, pickers, floors, droppers ----------
  var HELP = {
    tempo: ['Tempo', '<p>How fast the music goes, in beats per minute.</p><p>110 is a relaxed walk. 140 is dance music.</p>'],
    steps: ['The step row', '<p>One bar of music split into 16 steps. The 4 brighter cells are the beats you would clap on.</p><p>A lit step makes a ball whose first sound lands right on that step. A pit can have up to 3 droppers, one row each.</p>'],
    key: ['Key', '<p>The home note the song keeps coming back to. Changing it moves every note up or down together, like singing higher or lower.</p>', 'hear'],
    scale: ['Scale', null, 'hear'],
    tight: ['Free and Tight', '<p>How strictly hits snap to the beat grid.</p><p>Tight is machine-perfect. Free is loose and human: hits land where the ball lands.</p>'],
    life: ['Ball life', '<p>How long each ball lives before it fades away. One bar is four beats.</p><p>Short lives stop bouncing balls from piling up into a wall of sound.</p>'],
    shift: ['Shift', '<p>Moves every note in this pit up or down the scale. Plus 2 steps is about a third higher, which sounds good stacked on the original.</p>'],
    start: ['Start', '<p>Delays this pit by a number of sixteenth steps (the little cells in the step row).</p>'],
    pit: ['This pit', '<p><b>Mute</b> silences this pit.</p><p><b>Solo</b> plays only this pit (and any other soloed pits), so you can hear one part on its own. Tap it again to hear everything.</p><p>A pit you can\u2019t hear looks dimmed. The row of cells is the beat: one bar split into 16 steps, and each lit step drops a ball.</p>'],
    delay: ['Delay', '<p>Delays this pit by whole bars. Copy a pit and delay the copy by one bar and you get a round, like a song sung in turns.</p>']
  };
  function hide(id) { $(id).hidden = true; }
  function openInfo(title, body, buttons) {
    $('infoTitle').textContent = title; $('infoBody').innerHTML = body;
    var box = $('infoBtns'); box.innerHTML = '';
    buttons.forEach(function (b) {
      var el = document.createElement('button'); el.type = 'button'; el.className = 'btn' + (b.primary ? ' primary' : ''); el.textContent = b.label;
      el.onclick = function () { if (!b.keep) hide('info'); if (b.fn) b.fn(); };
      box.appendChild(el);
    });
    $('info').hidden = false;
  }
  function showHelp(id) {
    var h = HELP[id]; if (!h) return;
    var body = h[1];
    if (id === 'scale') {
      body = '<p>Which notes are allowed. Every bar plays only notes from the scale, so it always sounds like music.</p>' + Object.keys(DM.SCALES).map(function (k) {
        var sc = DM.SCALES[k]; return '<p><b>' + sc.name + '</b>: ' + sc.mood + ' (' + sc.iv.length + ' notes)</p>';
      }).join('');
    }
    var btns = [{ label: 'Close', primary: !h[2] }];
    if (h[2] === 'hear') btns.unshift({ label: 'Hear it', primary: true, keep: true, fn: hearScale });
    openInfo(h[0], body, btns);
  }
  function scaleMood() {
    var sc = DM.SCALES[S.machine.scale];
    $('scaleMood').textContent = sc.mood.split(',')[0] + ' · ' + sc.iv.length + ' notes';
  }
  // Play the current scale up and down in the current key with the wood sound.
  function hearScale() {
    Kit.audio.unlock(); if (!Kit.audio.ctx) return;
    var m = S.machine, iv = DM.SCALES[m.scale].iv, root = DM.BAR_BASE + 12 + m.key, seq = [];
    iv.forEach(function (v) { seq.push(root + v); });
    seq.push(root + 12);
    seq = seq.concat(seq.slice(0, -1).reverse());
    var t = audioNow() + 0.05, wood = { type: 'bar', material: 'wood' };
    seq.forEach(function (mi, i) { DMAudio.playPart(wood, mi, t + i * 0.24, 900, 0.8 * m.master); });
  }
  var toastTimer = null;
  function toast(msg) {
    var el = $('toast'); el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.hidden = true; }, 2600);
  }

  // A list picker. items: [{id, name, desc, dots, tempo, group}]. With confirmLabel, a tap selects (and previews) first.
  function openPicker(title, items, opts) {
    var chosen = null, list = $('pickList'), btns = $('pickBtns');
    $('pickTitle').textContent = title; list.innerHTML = ''; btns.innerHTML = '';
    var group = null;
    items.forEach(function (it) {
      if (it.group !== group) { group = it.group; if (group) { var h = document.createElement('h3'); h.textContent = group; list.appendChild(h); } }
      var el = document.createElement('button'); el.type = 'button'; el.className = 'item';
      el.innerHTML = (it.dots ? '<span class="dots">' + it.dots + '</span>' : '') + '<b>' + it.name + '</b>' + (it.tempo ? '<span class="tempo">' + it.tempo + ' BPM</span>' : '') + (it.desc ? '<small>' + it.desc + '</small>' : '');
      el.onclick = function () {
        if (!opts.confirmLabel) { hide('pick'); opts.onPick(it); return; }
        chosen = it; Array.prototype.forEach.call(list.querySelectorAll('.item'), function (n) { n.classList.remove('on'); }); el.classList.add('on');
        if (opts.onPreview) opts.onPreview(it);
        ok.disabled = false;
      };
      list.appendChild(el);
    });
    var cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'btn'; cancel.textContent = 'Cancel'; cancel.onclick = function () { hide('pick'); };
    btns.appendChild(cancel);
    var ok = document.createElement('button'); ok.type = 'button'; ok.className = 'btn primary';
    if (opts.confirmLabel) {
      ok.textContent = opts.confirmLabel; ok.disabled = true;
      ok.onclick = function () { if (chosen) { hide('pick'); opts.onPick(chosen); } };
      btns.appendChild(ok);
    }
    $('pick').hidden = false;
  }

  function previewPit(pit) {
    Kit.audio.unlock(); if (!Kit.audio.ctx) return;
    var m = S.machine, sd = stepDur(), t0 = audioNow() + 0.06, all = DM.simulateAll(pit, m);
    pit.droppers.forEach(function (dr, di) {
      var res = all[di], lead = DM.leadTime(res, m, sd);
      for (var k = 0; k < 16; k++) {
        if (!dr.steps[k]) continue;
        res.hits.forEach(function (h) {
          var part = partOf(pit, h.partId); if (!part) return;
          DMAudio.playPart(part, DM.partMidi(part, pit, m), t0 + k * sd + DM.snapTime(h.t, m.tight, sd) - lead, h.speed, 0.8 * m.master);
        });
      }
    });
  }
  function openPitPicker() {
    if (S.machine.pits.length >= MAX_PITS) return;
    openPicker('Add a pit', DM.PRESETS, {
      confirmLabel: 'Add pit',
      onPreview: function (it) { var pit = DM.buildPreset(S.machine, it.id); if (it.id !== 'empty') previewPit(pit); },
      onPick: function (it) {
        addPresetPit(it.id);
        var cur = S.machine.bpm;
        if (it.tempo && Math.abs(it.tempo - cur) > 15) {
          openInfo('Use tempo ' + it.tempo + '?', '<p>' + it.name + ' sounds best around ' + it.tempo + ' BPM. You are at ' + cur + '.</p>', [
            { label: 'Keep ' + cur, fn: null },
            { label: 'Use ' + it.tempo, primary: true, fn: function () { S.machine.bpm = it.tempo; if (S.clock) S.clock.setBpm(it.tempo); afterChange(false); } }]);
        }
      }
    });
  }
  function addPresetPit(id) {
    edit(function () { S.machine.pits.push(DM.buildPreset(S.machine, id)); });
    S.active = S.machine.pits.length - 1; S.sel = null; S.dropSel = 0; afterChange(true);
  }

  var RHYTHMS = [
    { id: 'beat', name: 'Every beat', steps: [0, 4, 8, 12] },
    { id: 'off', name: 'Offbeats', steps: [2, 6, 10, 14] },
    { id: 'eighths', name: 'Eighths', steps: [0, 2, 4, 6, 8, 10, 12, 14] },
    { id: 'back', name: 'Backbeat', steps: [4, 12] },
    { id: 'tres', name: '3-3-2 (tresillo)', steps: [0, 3, 6, 8, 11, 14] },
    { id: 'sparse', name: 'Sparse', steps: [0, 10] }
  ];
  function dotsOf(steps) { var o = ''; for (var i = 0; i < 16; i++) o += (steps.indexOf(i) >= 0 ? '●' : '·') + (i % 4 === 3 && i < 15 ? ' ' : ''); return o; }
  function openRhythms() {
    var pit = activePit(), di = clamp(S.dropSel, 0, pit.droppers.length - 1);
    openPicker('Rhythm for dropper ' + (di + 1), RHYTHMS.map(function (r) { return { id: r.id, name: r.name, dots: dotsOf(r.steps), steps: r.steps }; }), {
      onPick: function (it) { edit(function () { pit.droppers[di].steps = DM.stepsOf(it.steps); }); }
    });
  }
  function addDropper() {
    var pit = activePit(); if (pit.droppers.length >= MAX_DROPPERS) return;
    edit(function () { pit.droppers.push({ x: [180, 70, 290][pit.droppers.length] || 180, steps: DM.stepsOf([]) }); });
    S.dropSel = pit.droppers.length - 1; renderDock();
  }
  function removeDropper() {
    var pit = activePit(); if (pit.droppers.length < 2) return;
    edit(function () { pit.droppers.pop(); });
    S.dropSel = clamp(S.dropSel, 0, pit.droppers.length - 1); renderDock();
  }
  function removeFloor() {
    var pit = activePit(); if (!(pit.floors > 0)) return;
    var newH = DM.pitHeight(pit) - DM.FLOOR_H, low = pit.parts.filter(function (p) { return p.y > newH - 24; });
    if (low.length) {
      toast('Move these parts up first');
      var c = S.cells.filter(function (q) { return q.pit === pit; })[0];
      if (c) S.scroll[pit.id] = clamp(Math.min.apply(null, low.map(function (p) { return p.y; })) - 120, 0, c.maxScroll);
      [0, 280, 560].forEach(function (d) { setTimeout(function () { low.forEach(function (p) { S.flash[p.id] = audioNow(); }); }, d); });
      return;
    }
    edit(function () { pit.floors--; });
  }

  function bindUI() {
    $('play').onclick = togglePlay;
    $('undo').onclick = undo; $('redo').onclick = redo;
    $('floor').onclick = addFloor; $('floorDown').onclick = removeFloor;
    document.addEventListener('click', function (e) { var q = e.target.closest('[data-help]'); if (q) showHelp(q.dataset.help); }); $('dup').onclick = openDup; $('new').onclick = newMachine;
    $('soundToggle').onclick = function () {
      var o = $('sound').classList.toggle('open'); this.setAttribute('aria-expanded', o);
    };
    $('key').innerHTML = DM.KEYS.map(function (k, i) { return option(i, k, 0); }).join('');
    $('scale').innerHTML = Object.keys(DM.SCALES).map(function (k) { return option(k, DM.SCALES[k].name, ''); }).join('');
    $('bpm').oninput = function () { S.machine.bpm = +this.value; $('bpmOut').textContent = this.value; if (S.clock) S.clock.setBpm(S.machine.bpm); rebuild(); save(); };
    $('key').onchange = function () { S.machine.key = +this.value; afterChange(true); };
    $('scale').onchange = function () { S.machine.scale = this.value; afterChange(true); };
    $('tight').oninput = function () { S.machine.tight = +this.value; rebuild(); save(); };
    $('master').oninput = function () { S.machine.master = +this.value; save(); };
    $('dCancel').onclick = function () { $('modal').hidden = true; };
    $('dOk').onclick = doDup;

    $('tabs').addEventListener('click', function (e) {
      var b = e.target.closest('[data-pit]'); if (!b) return;
      if (b.dataset.pit === 'new') { openPitPicker(); return; }
      selectPit(+b.dataset.pit);
    });

    var dock = $('dock');
    dock.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.dataset.dock) { S.dockTab = t.dataset.dock; renderDock(); return; }
      if (t.dataset.add) { if (S.drawerDrag && S.drawerDrag.moved) return; S.place = S.place === t.dataset.add ? null : t.dataset.add; Kit.audio.unlock(); renderDock(); return; }
      var p = selPart(), pit = activePit();
      if (t.dataset.act === 'dupPart') duplicatePart();
      else if (t.dataset.act === 'rhythm') openRhythms();
      else if (t.dataset.act === 'dropUp') addDropper();
      else if (t.dataset.act === 'dropDown') removeDropper();
      else if (t.dataset.act === 'delPart') deletePart();
      else if (t.dataset.act === 'ang-' && p) { edit(function () { p.angle = clampAngle(p, Math.round(((p.angle || 0) - 5) * 2) / 2); }); }
      else if (t.dataset.act === 'ang+' && p) { edit(function () { p.angle = clampAngle(p, Math.round(((p.angle || 0) + 5) * 2) / 2); }); }
      else if (t.dataset.step) {
        var k = t.dataset.step.slice(0, -1), d = t.dataset.step.slice(-1) === '+' ? 1 : -1;
        edit(function () {
          if (k === 'tr') pit.transpose = clamp(pit.transpose + d, -7, 7);
          else if (k === 'off') pit.offset = clamp(pit.offset + d, 0, 15);
          else pit.offsetBars = clamp(pit.offsetBars + d, 0, 3);
        });
      }
    });
    dock.addEventListener('change', function (e) {
      if (e.target.dataset.p === 'life') { var pt = activePit(); edit(function () { pt.life = +e.target.value; }); return; }
      var f = e.target.dataset.f, p = selPart(); if (!f || !p) return;
      var v = e.target.value; if (f === 'angle' || f === 'div') v = +v;
      if (f === 'angle') v = clampAngle(p, isFinite(v) ? v : 0);
      edit(function () { p[f] = v; });
      if (f !== 'angle') preview(p);
    });
    var volBefore = null;
    dock.addEventListener('input', function (e) {
      if (e.target.dataset.s === 'vol') { activePit().vol = +e.target.value; save(); }
    });
    // Drag a part from the drawer into the pit.
    dock.addEventListener('pointerdown', function (e) {
      var t = e.target.closest('[data-add]'); if (!t) return;
      Kit.audio.unlock();
      S.drawerDrag = { type: t.dataset.add, x: e.clientX, y: e.clientY, moved: false };
    });
    void volBefore;
  }
  window.addEventListener('pointermove', function (e) {
    var d = S.drawerDrag; if (!d) return;
    if (Math.hypot(e.clientX - d.x, e.clientY - d.y) > 8) d.moved = true;
  });
  window.addEventListener('pointerup', function (e) {
    var d = S.drawerDrag; if (!d) return;
    if (d.moved) {
      var r = cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top;
      var z = zoneAt(px, py);
      if (z && z.zone === 'pit') { S.active = z.cell.i; placePart(d.type, z.wx, z.wy); renderTabs(); }
    }
    setTimeout(function () { S.drawerDrag = null; }, 0);
  });

  function selectPit(i) {
    if (i === S.active) return;
    S.active = i; S.sel = null; S.place = null; syncToolbar(); renderTabs(); renderDock();
  }

  // ---------- layout ----------
  var ROW_LABEL = 14;
  function layout() {
    var W = cv.clientWidth, H = cv.clientHeight, m = S.machine;
    var phone = W < 700, idx = phone ? [S.active] : m.pits.map(function (p, i) { return i; });
    var n = idx.length, gap = 24, pad = 8, hdrH = 26, rowH = phone ? 30 : 24, stripH = phone ? 58 : 62;
    var maxDrop = 1; idx.forEach(function (i) { maxDrop = Math.max(maxDrop, m.pits[i].droppers.length); });
    var rowsH = maxDrop * rowH + 4;
    var minRow = 16 * (phone ? 19 : 15) + ROW_LABEL;           // the 16 step cells stay easy to see and tap
    var vpH = Math.max(80, H - pad * 2 - hdrH - rowsH - stripH - 16);
    var availW = (W - pad * 2 - (n - 1) * gap) / n - 16;        // pit width per cell
    // Scale so the whole pit fits the height; only very tall pits (after +Floor) fall back to scrolling.
    var tallest = 0; idx.forEach(function (i) { tallest = Math.max(tallest, DM.pitHeight(m.pits[i])); });
    var s = Math.min(availW / DM.PIT_W, phone ? 1.1 : 1.2, Math.max(phone ? 0.42 : 0.33, vpH / tallest));
    var pw = DM.PIT_W * s, fw = Math.max(pw, minRow) + 16, total = n * fw + (n - 1) * gap;
    var x0 = Math.max(pad, (W - total) / 2), cells = [];
    idx.forEach(function (i, k) {
      var pit = m.pits[i], fx = x0 + k * (fw + gap), px = fx + (fw - pw) / 2, top = pad;
      var c = { i: i, pit: pit, s: s, px: px, pw: pw, rowH: rowH };
      c.frame = { x: fx, y: top, w: fw, h: hdrH + rowsH + vpH + stripH + 16 };
      c.hdr = { x: fx, y: top, w: fw, h: hdrH };
      c.row = { x: fx + 8, y: top + hdrH, w: fw - 16, h: pit.droppers.length * rowH };
      c.vp = { x: px, y: top + hdrH + rowsH + 4, w: pw, h: vpH };
      c.strip = { x: fx + 8, y: c.vp.y + vpH + 4, w: fw - 16, h: stripH };
      var maxScroll = Math.max(0, DM.pitHeight(pit) - vpH / s);
      c.scroll = clamp(S.scroll[pit.id] || 0, 0, maxScroll); S.scroll[pit.id] = c.scroll; c.maxScroll = maxScroll;
      cells.push(c);
    });
    S.cells = cells;
  }
  function inRect(r, x, y) { return x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h; }
  function toWorld(c, px, py) { return { x: (px - c.px) / c.s, y: (py - c.vp.y) / c.s + c.scroll }; }
  function toScreen(c, x, y) { return { x: c.px + x * c.s, y: c.vp.y + (y - c.scroll) * c.s }; }

  // What is under a screen point?
  function zoneAt(px, py) {
    for (var k = 0; k < S.cells.length; k++) {
      var c = S.cells[k];
      if (!inRect(c.frame, px, py)) continue;
      if (inRect(c.hdr, px, py)) {
        var right = c.hdr.x + c.hdr.w;
        if (px > right - 26) return { cell: c, zone: 'remove' };
        if (px > right - 66) return { cell: c, zone: 'solo' };
        if (px > right - 106) return { cell: c, zone: 'mute' };
        if (px > right - 130) return { cell: c, zone: 'help' };
        return { cell: c, zone: 'hdr' };
      }
      if (inRect(c.row, px, py)) {
        var di = clamp(Math.floor((py - c.row.y) / c.rowH), 0, c.pit.droppers.length - 1);
        if (px < c.row.x + ROW_LABEL) return { cell: c, zone: 'rowlabel', di: di };
        return { cell: c, zone: 'step', di: di, idx: clamp(Math.floor((px - c.row.x - ROW_LABEL) / ((c.row.w - ROW_LABEL) / 16)), 0, 15) };
      }
      if (inRect(c.strip, px, py)) return { cell: c, zone: 'strip' };
      if (inRect(c.vp, px, py)) { var w = toWorld(c, px, py); return { cell: c, zone: 'pit', wx: w.x, wy: w.y }; }
      return { cell: c, zone: 'hdr' };
    }
    return null;
  }

  // ---------- input ----------
  function rotHandle(c, p) {
    var cap = DM.capsule(p), stem = (p.type === 'drum' ? 42 : 38) / c.s;
    return { x: p.x + cap.ux * stem, y: p.y + cap.uy * stem };
  }
  function barHandles(p) { var c = DM.capsule(p); return [{ x: c.ax, y: c.ay, which: 'a' }, { x: c.bx, y: c.by, which: 'b' }]; }
  function partAt(c, wx, wy) {
    var tol = 8 / c.s, best = null, bestD = 1e9, parts = c.pit.parts;
    for (var i = parts.length - 1; i >= 0; i--) {
      var d = DM.distToPart(parts[i], wx, wy);
      if (d < tol && d < bestD) { best = parts[i]; bestD = d; }
    }
    return best;
  }

  cv.addEventListener('pointerdown', function (e) {
    Kit.audio.unlock();
    var r = cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top;
    var z = zoneAt(px, py); if (!z) return;
    var c = z.cell, pit = c.pit;
    if (c.i !== S.active) { S.active = c.i; S.sel = null; syncToolbar(); renderTabs(); renderDock(); }
    cv.setPointerCapture(e.pointerId);
    if (z.zone === 'remove') { removePit(c.i); return; }
    if (z.zone === 'mute') { pit.mute = !pit.mute; save(); return; }
    if (z.zone === 'solo') { pit.solo = !pit.solo; save(); return; }
    if (z.zone === 'help') { showHelp('pit'); return; }
    if (z.zone === 'rowlabel') { S.dropSel = z.di; renderDock(); return; }
    if (z.zone === 'step') { S.dropSel = z.di; edit(function () { pit.droppers[z.di].steps[z.idx] = !pit.droppers[z.di].steps[z.idx]; }); return; }
    if (z.zone === 'strip') { stripTap(c, px, py); return; }
    if (z.zone !== 'pit') return;
    var before = snapshot(), drag = { c: c, before: before, px: px, py: py, moved: false };
    if (S.place) { placePart(S.place, z.wx, z.wy); return; }
    var sp = selPart();
    if (sp) {
      var rh = rotHandle(c, sp);
      if (Math.hypot(rh.x - z.wx, rh.y - z.wy) * c.s < 16) { drag.kind = 'rotate'; drag.part = sp; S.drag = drag; return; }
    }
    if (sp && sp.type === 'bar') {
      var hs = barHandles(sp);
      for (var i = 0; i < 2; i++) {
        if (Math.hypot(hs[i].x - z.wx, hs[i].y - z.wy) * c.s < 16) {
          drag.kind = 'handle'; drag.part = sp; drag.which = hs[i].which; drag.lastDeg = DM.barDegree(sp.len, S.machine.scale);
          S.drag = drag; return;
        }
      }
    }
    var part = partAt(c, z.wx, z.wy);
    if (part) {
      S.sel = part.id; if (S.dockTab === 'add') S.dockTab = 'part'; renderDock();
      preview(part);
      drag.kind = 'part'; drag.part = part; drag.ox = part.x; drag.oy = part.y; drag.sx = z.wx; drag.sy = z.wy;
      S.drag = drag; return;
    }
    if (z.wy < 34) {
      var nd = -1, nb = 24;
      pit.droppers.forEach(function (dr, di) { var dd = Math.abs(z.wx - dr.x); if (dd < nb) { nb = dd; nd = di; } });
      if (nd >= 0) { drag.kind = 'dropper'; drag.di = nd; S.dropSel = nd; S.drag = drag; return; }
    }
    if (S.sel != null) { S.sel = null; renderDock(); }
    drag.kind = 'pan'; S.drag = drag;
  });

  cv.addEventListener('pointermove', function (e) {
    var d = S.drag; if (!d) return;
    var r = cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top;
    var c = d.c, pit = c.pit, w = toWorld(c, px, py), h = DM.pitHeight(pit);
    if (Math.hypot(px - d.px, py - d.py) > 4) d.moved = true;
    if (!d.moved) return;
    if (d.kind === 'pan') {
      S.scroll[pit.id] = clamp((S.scroll[pit.id] || 0) - (py - d.py) / c.s, 0, c.maxScroll); d.py = py;
    } else if (d.kind === 'dropper') {
      pit.droppers[d.di].x = clamp(snap(w.x, 10), 20, 340); rebuildSoon();
    } else if (d.kind === 'part') {
      d.part.x = clamp(snap(d.ox + w.x - d.sx, 10), 10, 350);
      d.part.y = clamp(snap(d.oy + w.y - d.sy, 10), 30, h - 10);
      rebuildSoon();
    } else if (d.kind === 'rotate') {
      var rp = d.part;
      var raw = Math.atan2(w.y - rp.y, w.x - rp.x) * 180 / Math.PI + 90;
      raw = ((raw + 180) % 360 + 360) % 360 - 180;
      raw = clampAngle(rp, raw);
      if (!e.shiftKey) {                                  // soft magnet: snap near multiples of 15, a little stronger at 0
        var mg = Math.round(raw / 15) * 15;
        if (Math.abs(raw - mg) < (mg === 0 ? 6 : 4)) raw = mg;
      }
      rp.angle = Math.round(raw * 2) / 2;
      rebuildSoon(); renderDockSoon();
    } else if (d.kind === 'handle') {
      var p = d.part, cp = DM.capsule(p);
      var ox = d.which === 'a' ? cp.bx : cp.ax, oy = d.which === 'a' ? cp.by : cp.ay;
      var vx = w.x - ox, vy = w.y - oy, len = Math.hypot(vx, vy);
      if (len < 4) return;
      var ang = snap(Math.atan2(vy, vx) * 180 / Math.PI, 15);
      var snapped = DM.snapBarLen(clamp(len, DM.BAR_MIN, DM.BAR_MAX), S.machine.scale);
      var ex = ox + Math.cos(ang * Math.PI / 180) * snapped, ey = oy + Math.sin(ang * Math.PI / 180) * snapped;
      p.len = snapped; p.angle = normAngle(ang); p.x = (ox + ex) / 2; p.y = (oy + ey) / 2;
      var deg = DM.barDegree(p.len, S.machine.scale);
      if (deg !== d.lastDeg) { d.lastDeg = deg; preview(p); renderDockSoon(); }
      rebuildSoon();
    }
  });
  function endDrag() {
    var d = S.drag; if (!d) return;
    S.drag = null;
    if (d.kind !== 'pan') {
      if (S.rebuildTimer) { clearTimeout(S.rebuildTimer); S.rebuildTimer = null; }
      afterChange(true); pushUndo(d.before);
    }
  }
  var dockTimer = null;
  function renderDockSoon() { if (dockTimer) return; dockTimer = setTimeout(function () { dockTimer = null; renderDock(); }, 60); }
  cv.addEventListener('pointerup', endDrag);
  cv.addEventListener('pointercancel', endDrag);
  cv.addEventListener('wheel', function (e) {
    var r = cv.getBoundingClientRect(), z = zoneAt(e.clientX - r.left, e.clientY - r.top);
    if (!z) return;
    e.preventDefault();
    S.scroll[z.cell.pit.id] = clamp((S.scroll[z.cell.pit.id] || 0) + e.deltaY / z.cell.s, 0, z.cell.maxScroll);
  }, { passive: false });

  function stripTap(c, px, py) {
    var best = null, bd = 14;
    (c.stripHits || []).forEach(function (h) { var d = Math.hypot(h.x - px, h.y - py); if (d < bd) { bd = d; best = h; } });
    if (!best) return;
    var part = partOf(c.pit, best.partId); if (!part) return;
    S.flash[part.id] = audioNow();
    preview(part);
  }

  document.addEventListener('keydown', function (e) {
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); if (e.shiftKey) redo(); else undo(); }
    else if ((e.key === 'Delete' || e.key === 'Backspace') && S.sel != null) { e.preventDefault(); deletePart(); }
    else if (e.key === 'Escape') { S.place = null; $('modal').hidden = true; $('info').hidden = true; $('pick').hidden = true; renderDock(); }
  });

  // ---------- drawing ----------
  var dpr = 1;
  function sizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    var w = Math.round(cv.clientWidth * dpr), h = Math.round(cv.clientHeight * dpr);
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
  }
  function glow(color, blur) { ctx.shadowColor = color; ctx.shadowBlur = blur; }
  function noGlow() { ctx.shadowBlur = 0; }
  function rrect(x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  function drawBackground(W, H) {
    ctx.fillStyle = '#0d111a'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(120,140,190,.10)';
    for (var x = 12; x < W; x += 24) for (var y = 12; y < H; y += 24) ctx.fillRect(x, y, 1.5, 1.5);
  }

  function drawCell(c, now) {
    var pit = c.pit, m = S.machine, f = c.frame, active = c.i === S.active && S.cells.length > 1;
    // bevelled frame
    var g = ctx.createLinearGradient(0, f.y, 0, f.y + f.h);
    g.addColorStop(0, '#1d2538'); g.addColorStop(1, '#131a2a');
    ctx.fillStyle = g; rrect(f.x, f.y, f.w, f.h, 8); ctx.fill();
    ctx.strokeStyle = active ? '#ffb347' : '#36425f'; ctx.lineWidth = active ? 1.5 : 1; ctx.stroke();
    ctx.strokeStyle = '#090c13'; ctx.lineWidth = 1; rrect(f.x + 1.5, f.y + 1.5, f.w - 3, f.h - 3, 7); ctx.stroke();
    [[6, 6], [f.w - 6, 6], [6, f.h - 6], [f.w - 6, f.h - 6]].forEach(function (s, i) {
      var sx = f.x + s[0], sy = f.y + s[1];
      ctx.fillStyle = '#3a4562'; ctx.beginPath(); ctx.arc(sx, sy, 2.6, 0, 7); ctx.fill();
      ctx.strokeStyle = '#0c0f18'; ctx.lineWidth = 1; ctx.beginPath();
      var a = i * 0.9 + 0.4; ctx.moveTo(sx - Math.cos(a) * 2, sy - Math.sin(a) * 2); ctx.lineTo(sx + Math.cos(a) * 2, sy + Math.sin(a) * 2); ctx.stroke();
    });
    // header: label, LEDs
    ctx.font = '700 11px ui-monospace, Menlo, Consolas, monospace'; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    ctx.fillStyle = '#ffb347'; ctx.fillText('PIT ' + (c.i + 1), c.hdr.x + 16, c.hdr.y + 14);
    ctx.font = '10px ui-monospace, Menlo, monospace'; ctx.fillStyle = '#7f8ba6'; ctx.fillText('life ' + lifeLabel(DM.lifeBeats(pit)), c.hdr.x + 62, c.hdr.y + 14);
    ctx.font = '700 11px ui-monospace, Menlo, Consolas, monospace';
    var right = c.hdr.x + c.hdr.w;
    function pill(x, w, label, on, col) {
      var y = c.hdr.y + 6, h = 16;
      if (on) glow(col, 8);
      ctx.fillStyle = on ? col : '#1a2133'; rrect(x, y, w, h, 8); ctx.fill(); noGlow();
      ctx.strokeStyle = on ? col : '#3d4966'; ctx.lineWidth = 1; rrect(x, y, w, h, 8); ctx.stroke();
      ctx.fillStyle = on ? '#0b0e16' : '#9fb0d8'; ctx.font = '700 10px ui-monospace, Menlo, monospace'; ctx.textAlign = 'center'; ctx.fillText(label, x + w / 2, y + h / 2 + 0.5);
    }
    pill(right - 104, 36, 'Mute', pit.mute, '#ff5f85'); pill(right - 64, 36, 'Solo', pit.solo, '#5ee6ff');
    ctx.font = '700 11px ui-monospace, Menlo, Consolas, monospace';
    ctx.strokeStyle = '#5b6a90'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(right - 118, c.hdr.y + 14, 7, 0, 7); ctx.stroke();
    ctx.fillStyle = '#9fb0d8'; ctx.textAlign = 'center'; ctx.fillText('?', right - 118, c.hdr.y + 14.5);
    ctx.fillStyle = '#7f8ba6'; ctx.textAlign = 'center'; ctx.fillText(m.pits.length > 1 ? '✕' : '', right - 14, c.hdr.y + 14);
    drawStepRow(c);
    drawPit(c, now);
    drawStrip(c);
    if (!audible(pit)) {   // a pit you can't hear (muted, or another pit is soloed) is dimmed
      var top = c.hdr.y + c.hdr.h;
      ctx.save(); ctx.globalAlpha = 1; ctx.fillStyle = 'rgba(9, 12, 20, 0.62)';
      rrect(f.x + 2, top, f.w - 4, f.y + f.h - top - 2, 6); ctx.fill(); ctx.restore();
    }
  }

  function drawStepRow(c) {
    var pit = c.pit, r = c.row, cache = S.cache[pit.id], pos = playPos(), d = DM.startDelaySteps(pit);
    var cur = pos >= 0 && pos >= d ? Math.floor(pos - d) % 16 : -1;
    var w = (r.w - ROW_LABEL) / 16, rh = c.rowH;
    pit.droppers.forEach(function (dr, di) {
      var y = r.y + di * rh, col = cache && cache.drops[di] ? cache.drops[di].color : '#7f8ba6';
      ctx.fillStyle = col; ctx.beginPath(); ctx.arc(r.x + 6, y + rh / 2, 3.6, 0, 7); ctx.fill();
      if (di === S.dropSel && c.i === S.active && pit.droppers.length > 1) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(r.x + 6, y + rh / 2, 6, 0, 7); ctx.stroke(); }
      for (var i = 0; i < 16; i++) {
        var x = r.x + ROW_LABEL + i * w + 1.5, on = dr.steps[i], beat = i % 4 === 0;
        ctx.fillStyle = on ? '#ffb347' : '#0e1423';
        if (on) glow('#ffb347', 6);
        rrect(x, y + 2.5, w - 3, rh - 5, 3); ctx.fill(); noGlow();
        if (!on) { ctx.strokeStyle = beat ? '#7385b5' : '#3b4668'; ctx.lineWidth = 1.2; ctx.stroke(); }
        if (i === cur) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; rrect(x - 1, y + 1.5, w - 1, rh - 3, 3); ctx.stroke(); }
      }
    });
  }

  function drawPit(c, now) {
    var pit = c.pit, s = c.s, vp = c.vp, h = DM.pitHeight(pit), cache = S.cache[pit.id];
    ctx.save();
    ctx.beginPath(); ctx.rect(vp.x - 4, vp.y, vp.w + 8, vp.h); ctx.clip();
    ctx.fillStyle = '#0a0e17'; ctx.fillRect(vp.x, vp.y, vp.w, vp.h);
    ctx.translate(c.px, vp.y - c.scroll * s); ctx.scale(s, s);
    // grid dots
    ctx.fillStyle = 'rgba(120,150,210,.16)';
    var y0 = Math.floor(c.scroll / 40) * 40;
    for (var gy = y0; gy < c.scroll + vp.h / s + 40 && gy <= h; gy += 40) for (var gx = 20; gx < DM.PIT_W; gx += 40) ctx.fillRect(gx - 1, gy - 1, 2 / Math.max(s, 0.5), 2 / Math.max(s, 0.5));
    // walls and the open bottom
    ctx.strokeStyle = '#3a4a70'; ctx.lineWidth = 2 / s; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, h); ctx.moveTo(DM.PIT_W, 0); ctx.lineTo(DM.PIT_W, h); ctx.stroke();
    ctx.setLineDash([6 / s, 6 / s]); ctx.strokeStyle = '#2b3550'; ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(DM.PIT_W, h); ctx.stroke(); ctx.setLineDash([]);
    for (var f = 1; f <= (pit.floors || 0); f++) {
      var fy = DM.BASE_H + DM.FLOOR_H * (f - 1);
      ctx.strokeStyle = 'rgba(255,255,255,.07)'; ctx.setLineDash([3 / s, 9 / s]); ctx.beginPath(); ctx.moveTo(0, fy); ctx.lineTo(DM.PIT_W, fy); ctx.stroke(); ctx.setLineDash([]);
    }
    // preview of the cached paths
    if (cache) cache.drops.forEach(function (dc) {
      var P = dc.res.path;
      ctx.strokeStyle = 'rgba(200,220,255,.30)'; ctx.lineWidth = 1.6 / s; ctx.setLineDash([2 / s, 6 / s]); ctx.beginPath();
      for (var i = 0; i < P.x.length; i += 2) { if (i === 0) ctx.moveTo(P.x[i], P.y[i]); else ctx.lineTo(P.x[i], P.y[i]); }
      ctx.stroke(); ctx.setLineDash([]);
      dc.res.hits.forEach(function (hit) {
        var part = partOf(pit, hit.partId); if (!part) return;
        ctx.fillStyle = partColor(part); ctx.globalAlpha = 0.6; ctx.beginPath(); ctx.arc(hit.x, hit.y, 3.2 / Math.min(s, 1) * 0.8, 0, 7); ctx.fill(); ctx.globalAlpha = 1;
      });
    });
    // droppers
    pit.droppers.forEach(function (dr, di) {
      var dx = dr.x, dg = ctx.createLinearGradient(0, 0, 0, 16), col = cache && cache.drops[di] ? cache.drops[di].color : '#7f8ba6';
      dg.addColorStop(0, '#6b7ba3'); dg.addColorStop(1, '#3a4766');
      ctx.fillStyle = dg; ctx.strokeStyle = '#a9b8dc'; ctx.lineWidth = 1.5 / s;
      ctx.beginPath(); ctx.moveTo(dx - 16, 0); ctx.lineTo(dx + 16, 0); ctx.lineTo(dx + 7, 14); ctx.lineTo(dx - 7, 14); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = col; ctx.beginPath(); ctx.arc(dx, 5, 3 / Math.min(s, 1) * 0.8, 0, 7); ctx.fill();
    });
    // parts
    pit.parts.forEach(function (p) { drawPart(c, p, now); });
    drawPrediction(c, cache);
    // balls and rings
    drawBalls(c, now);
    ctx.restore();
    // frame line around the viewport
    ctx.strokeStyle = '#090c13'; ctx.lineWidth = 1; ctx.strokeRect(vp.x - 0.5, vp.y - 0.5, vp.w + 1, vp.h + 1);
    // scroll hint
    if (c.maxScroll > 0) {
      var th = vp.h * (vp.h / s) / h, ty = vp.y + (c.scroll / h) * vp.h * s * 1;
      ctx.fillStyle = 'rgba(160,180,230,.25)'; rrect(vp.x + vp.w - 4, ty, 3, Math.max(14, th), 1.5); ctx.fill();
    }
  }

  function drawPart(c, p, now) {
    var s = c.s, col = partColor(p), cap = DM.capsule(p), sel = S.sel === p.id && c.i === S.active;
    var fl = S.flash[p.id] != null ? Math.exp(-(now - S.flash[p.id]) / 0.16) : 0;
    if (fl < 0.02) fl = 0;
    var w = p.type === 'bar' ? 4 : p.type === 'drum' ? 14 : 9;
    ctx.lineCap = 'round';
    glow(col, 6 + fl * 22);
    ctx.strokeStyle = col; ctx.lineWidth = w + fl * 3;
    ctx.beginPath(); ctx.moveTo(cap.ax, cap.ay); ctx.lineTo(cap.bx, cap.by); ctx.stroke(); noGlow();
    if (p.type !== 'bar') {
      ctx.strokeStyle = '#0d111a'; ctx.lineWidth = w - 4; ctx.beginPath(); ctx.moveTo(cap.ax, cap.ay); ctx.lineTo(cap.bx, cap.by); ctx.stroke();
      ctx.strokeStyle = col; ctx.globalAlpha = 0.35 + fl * 0.5; ctx.lineWidth = w - 6.5; ctx.beginPath(); ctx.moveTo(cap.ax, cap.ay); ctx.lineTo(cap.bx, cap.by); ctx.stroke(); ctx.globalAlpha = 1;
    }
    if (fl) { ctx.strokeStyle = 'rgba(255,255,255,' + fl * 0.9 + ')'; ctx.lineWidth = Math.max(1.5, w * 0.4); ctx.beginPath(); ctx.moveTo(cap.ax, cap.ay); ctx.lineTo(cap.bx, cap.by); ctx.stroke(); }
    ctx.lineCap = 'butt';
    // labels
    var fs = Math.max(9, 10.5 / s);
    ctx.font = fs + 'px ui-monospace, Menlo, Consolas, monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(230,238,255,.85)';
    if (p.type === 'bar') ctx.fillText(DM.noteName(DM.partMidi(p, c.pit, S.machine)), p.x + cap.ux * 14 / Math.min(s, 1), p.y + cap.uy * 14 / Math.min(s, 1));
    else if (p.type === 'pad') ctx.fillText(p.mode === 'forever' ? '∞' : '1/' + p.div, p.x + cap.ux * 16 / Math.min(s, 1), p.y + cap.uy * 16 / Math.min(s, 1));
    else ctx.fillText(DM.DRUM_KIND[p.size], p.x, p.y - 16 / Math.min(s, 1));
    if (sel) {
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.2 / s; ctx.setLineDash([4 / s, 4 / s]);
      ctx.beginPath(); ctx.arc(p.x, p.y, DM.partLen(p) / 2 + 12, 0, 7); ctx.stroke(); ctx.setLineDash([]);
      var rh = rotHandle(c, p), rr = 8 / s;
      ctx.strokeStyle = '#ffb347'; ctx.lineWidth = 1.5 / s; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(rh.x, rh.y); ctx.stroke();
      ctx.fillStyle = '#0d111a'; ctx.beginPath(); ctx.arc(rh.x, rh.y, rr, 0, 7); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#ffb347'; ctx.lineWidth = 1.5 / s; ctx.beginPath(); ctx.arc(rh.x, rh.y, rr * 0.5, -0.5, 4); ctx.stroke();
      var txt = degText(p.angle || 0), fpx = 11 / s;
      ctx.font = '700 ' + fpx + 'px ui-monospace, Menlo, monospace'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      var tw = ctx.measureText(txt).width, px0 = rh.x + rr + 4 / s, py0 = rh.y;
      if (px0 + tw + 8 / s > DM.PIT_W) px0 = rh.x - rr - 4 / s - tw - 8 / s;
      ctx.fillStyle = 'rgba(10,14,23,.92)'; rrect(px0, py0 - 9 / s, tw + 8 / s, 18 / s, 9 / s); ctx.fill();
      ctx.strokeStyle = '#ffb347'; ctx.lineWidth = 1 / s; ctx.stroke();
      ctx.fillStyle = '#ffd9a0'; ctx.fillText(txt, px0 + 4 / s, py0 + 0.5 / s);
      if (p.type === 'bar') barHandles(p).forEach(function (h) {
        var r = Math.max(7, 10 / s);
        ctx.fillStyle = '#0d111a'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2 / s;
        ctx.beginPath(); ctx.arc(h.x, h.y, r, 0, 7); ctx.fill(); ctx.stroke();
      });
    }
  }

  // Bright arrow showing where the ball leaves the selected part (the next 0.25 s of the cached path).
  function drawPrediction(c, cache) {
    var p = c.i === S.active && S.sel != null ? partOf(c.pit, S.sel) : null;
    if (!p || !cache) return;
    var hit = null, hs, dres = null;
    for (var di = 0; di < cache.drops.length && !hit; di++) {
      hs = cache.drops[di].res.hits;
      for (var i = 0; i < hs.length; i++) if (hs[i].partId === p.id) { hit = hs[i]; dres = cache.drops[di].res; break; }
    }
    if (!hit) return;
    var P = dres.path, i0 = Math.ceil(hit.t / P.dt), i1 = Math.min(P.x.length - 1, i0 + Math.ceil(0.25 / P.dt));
    if (i1 <= i0) return;
    var s = c.s;
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2.6 / s; ctx.lineCap = 'round'; glow('#ffffff', 8);
    ctx.beginPath(); ctx.moveTo(hit.x, hit.y);
    for (var k = i0; k <= i1; k++) ctx.lineTo(P.x[k], P.y[k]);
    ctx.stroke();
    var ex = P.x[i1], ey = P.y[i1], bx = P.x[Math.max(i0, i1 - 3)], by = P.y[Math.max(i0, i1 - 3)];
    var ang = Math.atan2(ey - by, ex - bx), hl = 9 / s;
    ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.moveTo(ex + Math.cos(ang) * hl * 0.6, ey + Math.sin(ang) * hl * 0.6);
    ctx.lineTo(ex + Math.cos(ang + 2.5) * hl, ey + Math.sin(ang + 2.5) * hl); ctx.lineTo(ex + Math.cos(ang - 2.5) * hl, ey + Math.sin(ang - 2.5) * hl);
    ctx.closePath(); ctx.fill(); noGlow(); ctx.lineCap = 'butt';
  }

  function drawBalls(c, now) {
    var pit = c.pit, s = c.s, out = { x: 0, y: 0 };
    S.balls.forEach(function (b) {
      if (b.pitId !== pit.id) return;
      var age = now - b.t0; if (age < 0) return;
      var res = b.c.res, raw = rawTime(b.c, age);
      // hits that have just happened: flash the part and spread a ring
      while (b.next < res.hits.length && age >= b.c.snapT[b.next]) {
        var hit = res.hits[b.next], part = partOf(pit, hit.partId);
        if (part && age - b.c.snapT[b.next] < 0.15) {
          S.flash[part.id] = now; S.rings.push({ pitId: pit.id, x: hit.x, y: hit.y, t0: now, col: partColor(part) });
          if (S.rings.length > 40) S.rings.shift();
        }
        b.next++;
      }
      var expires = res.end === 'limit' || res.end === 'rest';
      if (raw >= res.dur) {
        b.dead = true;
        if (expires) { var P = res.path, n = P.x.length - 1; S.rings.push({ pitId: pit.id, x: P.x[n], y: P.y[n], t0: now, col: '#cfe3ff' }); }
        return;
      }
      var fade = expires ? 0.2 + 0.8 * clamp((res.dur - raw) / (0.25 * res.dur), 0, 1) : 1;   // dims over the last quarter of its life
      if (b.killAt != null) { fade *= 1 - clamp((now - b.killAt) / 0.3, 0, 1); if (fade <= 0) { b.dead = true; return; } }
      // trail
      for (var k = 5; k >= 1; k--) {
        DM.pathAt(res, rawTime(b.c, Math.max(0, age - k * 0.012)), out);
        ctx.fillStyle = 'rgba(255,255,255,' + (0.05 * (6 - k)) * fade + ')';
        ctx.beginPath(); ctx.arc(out.x, out.y, DM.BALL_R * (1 - k * 0.1), 0, 7); ctx.fill();
      }
      DM.pathAt(res, raw, out);
      glow('#ffffff', 12); ctx.fillStyle = 'rgba(255,255,255,' + fade + ')';
      ctx.beginPath(); ctx.arc(out.x, out.y, DM.BALL_R, 0, 7); ctx.fill(); noGlow();
    });
    S.rings.forEach(function (r) {
      if (r.pitId !== pit.id) return;
      var a = (now - r.t0) / 0.4; if (a >= 1 || a < 0) return;
      ctx.strokeStyle = r.col; ctx.globalAlpha = (1 - a) * 0.8; ctx.lineWidth = 2 / s;
      ctx.beginPath(); ctx.arc(r.x, r.y, 6 + a * 24, 0, 7); ctx.stroke(); ctx.globalAlpha = 1;
    });
  }

  // The score strip: this pit's hits over its 16-step loop, pitch going up, drums in the bottom row.
  function drawStrip(c) {
    var r = c.strip, cache = S.cache[c.pit.id], pos = playPos();
    ctx.fillStyle = '#03080a'; rrect(r.x, r.y, r.w, r.h, 5); ctx.fill();
    ctx.strokeStyle = '#143322'; ctx.lineWidth = 1; ctx.stroke();
    ctx.save(); rrect(r.x, r.y, r.w, r.h, 5); ctx.clip();
    var drumH = 16, noteH = r.h - drumH - 6, w = r.w;
    ctx.strokeStyle = 'rgba(109,255,156,.10)';
    for (var i = 0; i <= 16; i += 4) { var gx = r.x + i / 16 * w; ctx.beginPath(); ctx.moveTo(gx, r.y); ctx.lineTo(gx, r.y + r.h); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(r.x, r.y + r.h - drumH - 2); ctx.lineTo(r.x + w, r.y + r.h - drumH - 2); ctx.stroke();
    c.stripHits = [];
    var cur = pos >= 0 ? pos % 16 : -1;
    if (cache) {
      var lo = 1e9, hi = -1e9;
      cache.events.forEach(function (e) { if (e.midi != null) { lo = Math.min(lo, e.midi); hi = Math.max(hi, e.midi); } });
      if (hi < lo) { lo = 60; hi = 72; }
      if (hi - lo < 12) { var mid = (hi + lo) / 2; lo = mid - 6; hi = mid + 6; }
      var bw = Math.max(3, w / 16 * 0.7);
      cache.events.forEach(function (e) {
        var x = r.x + e.pos / 16 * w, y, near = cur >= 0 && Math.abs(e.pos - cur) < 0.7;
        if (e.midi != null) y = r.y + 4 + (1 - (e.midi - lo) / (hi - lo)) * (noteH - 4);
        else y = r.y + r.h - drumH + (e.kind === 'kick' ? 11 : e.kind === 'snare' ? 7 : e.kind === 'hat' ? 3 : 14);
        var flash = S.flash[e.partId] != null && audioNow() - S.flash[e.partId] < 0.2;
        ctx.fillStyle = near || flash ? '#d9ffe6' : PHOSPHOR; if (near || flash) glow(PHOSPHOR, 8);
        ctx.globalAlpha = near || flash ? 1 : 0.75;
        ctx.fillRect(x, y - 1.5, e.kind === 'note' ? bw : Math.max(3, bw * 0.6), 3); noGlow(); ctx.globalAlpha = 1;
        c.stripHits.push({ x: x + 2, y: y, partId: e.partId });
      });
    }
    if (cur >= 0) { var px = r.x + cur / 16 * w; ctx.strokeStyle = 'rgba(217,255,230,.8)'; ctx.beginPath(); ctx.moveTo(px, r.y); ctx.lineTo(px, r.y + r.h); ctx.stroke(); }
    ctx.restore();
  }

  function frame() {
    requestAnimationFrame(frame);
    sizeCanvas();
    var W = cv.clientWidth, H = cv.clientHeight;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    layout();
    drawBackground(W, H);
    var now = audioNow();
    S.cells.forEach(function (c) { drawCell(c, now); });
    S.balls = S.balls.filter(function (b) { return !b.dead; });
    cv.style.cursor = S.place ? 'crosshair' : 'default';
  }

  // ---------- start ----------
  function init() {
    S.machine = load();
    bindUI();
    rebuild(); syncToolbar(); renderTabs(); renderDock();
    requestAnimationFrame(frame);
  }
  init();

  // Small hook for tests and tinkering.
  window.DM_debug = {
    state: S,
    machine: function () { return S.machine; },
    cache: function () { return S.cache; },
    play: play, stop: stop,
    selectPart: function (id) { S.sel = id; S.dockTab = 'part'; renderDock(); },
    addPart: function (type, x, y) { var p; edit(function () { p = newPart(type, x, y); }); return p; },
    placePart: placePart, addPit: addPit, undo: undo, redo: redo, duplicatePit: function (o) {
      edit(function () { S.machine.pits.push(DM.duplicatePit(S.machine, activePit(), o || {})); });
      S.active = S.machine.pits.length - 1;
    },
    addFloor: addFloor, removeFloor: removeFloor, addPresetPit: addPresetPit, showHelp: showHelp, openPitPicker: openPitPicker, openRhythms: openRhythms, addDropper: addDropper, hearScale: hearScale, selectPit: selectPit, layout: function () { return S.cells.map(function (c) { return { i: c.i, s: c.s, vp: c.vp, frame: c.frame }; }); },
    balls: function () { return S.balls.length; },
    // Headless browsers keep the AudioContext suspended, so this drives the same onStep with a fake clock.
    fakeClock: function (on) {
      if (S.fakeTimer) { clearInterval(S.fakeTimer); S.fakeTimer = null; }
      if (!on) { S.fake = null; return; }
      S.fake = { t: 0, step: 0, next: 0 }; S.playing = true; S.stepQueue = [];
      S.fakeTimer = setInterval(function () {
        S.fake.t += 0.025;
        while (S.fake.next < S.fake.t + 0.1) { onStep(S.fake.step++, S.fake.next); S.fake.next += stepDur(); }
      }, 25);
    },
  };
})();

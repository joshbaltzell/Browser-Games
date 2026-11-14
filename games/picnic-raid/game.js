(function () {
  'use strict';
  var P = PicnicSim;

  // Every feel constant lives here. Press ` in the game to tune it live.
  var TUNE = {
    pace:       { v: 1,    min: 0.5, max: 2,   step: 0.05 },  // playback speed of raids
    bob:        { v: 2,    min: 0,   max: 5,   step: 0.25 },  // bug bob in px
    bugSize:    { v: 1,    min: 0.7, max: 1.5, step: 0.05 },
    swingMs:    { v: 80,   min: 30,  max: 250, step: 5 },     // swatter paddle drops
    riseMs:     { v: 500,  min: 150, max: 1200, step: 25 },   // swatter paddle lifts
    swingDeg:   { v: 80,   min: 30,  max: 120, step: 5 },
    shake:      { v: 3,    min: 0,   max: 8,   step: 0.5 },
    ringAlpha:  { v: 0.55,  min: 0,   max: 0.8, step: 0.05 },  // range ring dabs
    legMs:      { v: 150,  min: 60,  max: 400, step: 10 },    // ant leg swap
    ghostMs:    { v: 1100, min: 400, max: 2500, step: 50 },   // dizzy bug fade
    endHoldMs:  { v: 600,  min: 0,   max: 2000, step: 50 },   // pause after the last bug
    breeze:     { v: 0.03, min: 0,   max: 0.1, step: 0.005 }, // bed: wind
    birdSecs:   { v: 5,    min: 2,   max: 15,  step: 0.5 },   // bed: birdsong gap
    phraseSecs: { v: 8,    min: 4,   max: 20,  step: 0.5 }    // bed: four-note phrase
  };
  var assets = typeof ASSETS !== 'undefined' ? ASSETS : {};
  var T = null; // live TUNE values, set after boot

  var COLORS = {
    grass: ['#7fae3f', '#a8c64a'], sun: '#f5d76e', shadow: '#7a6aa8', blanket: '#d8463a', cream: '#f6ecd2', trail: '#d9b27a'
  };
  var GNAME = { swatter: 'Fly swatter', salt: 'Salt shaker', sprinkler: 'Sprinkler', candle: 'Candle', zapper: 'Zapper', jam: 'Jam trap' };
  var GINFO = {
    swatter: 'Fly swatter: smacks the lead ground bug for 6 every 2.2 s.',
    salt: 'Salt shaker: 1 damage to every ground bug in its cone, twice a second.',
    sprinkler: 'Sprinkler: sprays 1 s in every 4. Hurts and slows ground bugs.',
    candle: 'Citronella candle: slows every bug in range, flyers too.',
    zapper: 'Bug zapper: zaps one flying bug at a time.',
    jam: 'Jam trap: sticks the first ground bug for 5 s, then it is gone.'
  };
  var GSHORT = { swatter: 'Swatter', salt: 'Salt', sprinkler: 'Sprinkler', candle: 'Candle', zapper: 'Zapper', jam: 'Jam' };
  var BNAME = { ant: 'Ant', ladybug: 'Ladybug', beetle: 'Beetle', wasp: 'Wasp' };
  var GICON = { swatter: 'swatter-paddle', salt: 'salt', sprinkler: 'sprinkler', candle: 'candle', zapper: 'zapper', jam: 'jam' };
  var RANKS = ['Pvt. Crumbsworth', 'Cpl. Sticky', 'Sgt. Antonia', 'Capt. Buzz', 'Lt. Wobblebottom', 'Pvt. Flakes', 'Maj. Marmalade'];
  var ATTACKERS = [
    { id: 'scout', name: 'Scout', sub: 'fixed list' },
    { id: 'captain', name: 'Captain', sub: 'counters you' },
    { id: 'marshal', name: 'Marshal', sub: 'best raid' }
  ];

  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function imgFor(name) {
    var a = assets[name];
    var i = el('img'); i.alt = ''; i.draggable = false;
    if (a) i.src = a.src;
    i.onerror = function () { i.style.visibility = 'hidden'; };
    return i;
  }

  // ---------- audio wrapper: a small throttle so a busy lawn does not turn to mush ----------
  var lastPlay = {};
  function sfx(name, opts) {
    var now = Date.now();
    if (lastPlay[name] && now - lastPlay[name] < 55) return;
    lastPlay[name] = now;
    play(name, opts);
  }

  // ---------- painting helpers ----------
  function hash(n) {
    n = Math.imul((n | 0) ^ ((n | 0) >>> 16), 0x45d9f3b);
    n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
    return (((n ^ (n >>> 16)) >>> 0) / 4294967296);
  }
  // Three to five overlapping tilted ellipses in close colours. Everything is built from this.
  function dab(ctx, x, y, r, cols, seed) {
    var n = 3 + ((hash(seed * 7 + 1) * 3) | 0), i;
    for (i = 0; i < n; i++) {
      var a = hash(seed * 13 + i * 5 + 2) * 6.2832, d = r * (0.1 + hash(seed * 17 + i * 3 + 3) * 0.45);
      ctx.fillStyle = cols[i % cols.length];
      ctx.beginPath();
      ctx.ellipse(x + Math.cos(a) * d, y + Math.sin(a) * d * 0.7, r * (0.55 + hash(seed * 19 + i) * 0.5), r * (0.3 + hash(seed * 23 + i) * 0.35), hash(seed * 29 + i) * 3.14, 0, 6.2832);
      ctx.fill();
    }
  }
  function dabRing(ctx, x, y, rx, ry, a0, a1, step, r, cols, seed, alpha) {
    var len = Math.abs(a1 - a0) * rx, n = Math.max(6, Math.round(len / step)), i;
    ctx.save(); ctx.globalAlpha *= alpha;
    for (i = 0; i <= n; i++) {
      var a = a0 + (a1 - a0) * i / n;
      dab(ctx, x + Math.cos(a) * rx, y + Math.sin(a) * ry, r, cols, seed + i);
    }
    ctx.restore();
  }
  function newLayer() {
    var c = document.createElement('canvas'); c.width = 1280; c.height = 720; return c;
  }

  // Trails as rows of dabs, drawn once.
  var trailLayer = null;
  function buildTrails() {
    var c = newLayer(), ctx = c.getContext('2d');
    ['W', 'N'].forEach(function (lane, li) {
      var p = P.MAP.paths[lane], s, k;
      for (s = 0; s <= p.len; s += 5) {
        var i = Math.min(p.len, s), j = Math.min(p.len, s + 4), k0 = Math.max(0, s - 4);
        var tx = p.xs[j] - p.xs[k0], ty = p.ys[j] - p.ys[k0], tl = Math.sqrt(tx * tx + ty * ty) || 1;
        var nx = -ty / tl, ny = tx / tl;
        for (k = -2; k <= 2; k++) {
          var seed = li * 90000 + s * 11 + k * 3 + 100;
          var off = k * 8 + (hash(seed) - 0.5) * 6, edge = Math.abs(k) === 2;
          ctx.globalAlpha = edge ? 0.55 : 0.95;
          dab(ctx, p.xs[i] + nx * off, p.ys[i] + ny * off, edge ? 8 : 10 + hash(seed + 1) * 3,
              edge ? ['#b8a05a', '#a8c64a', '#d9b27a'] : ['#d9b27a', '#e6c48a', '#caa062', '#dcb77c'], seed);
        }
      }
    });
    ctx.globalAlpha = 1;
    // a darker mouth where the trails start and a pale patch where they meet the blanket
    dab(ctx, P.MAP.hill.x - 6, P.MAP.hill.y + 6, 20, ['#8a6a44', '#a07a4c'], 7001);
    dab(ctx, P.MAP.bed.x, P.MAP.bed.y + 4, 20, ['#caa062', '#d9b27a'], 7002);
    return c;
  }

  // Range rings for placed gadgets: rings of small dabs at low alpha. Rebuilt when the layout changes.
  var ringLayer = null, ringKey = '';
  function buildRings(pads) {
    var c = newLayer(), ctx = c.getContext('2d');
    pads.forEach(function (g, k) {
      if (!g || g === 'jam') return;
      var mp = P.MAP.pads[k], range = P.GADGETS[g].range, cols = ['#fff6dc', '#f6ecd2', '#ffffff'];
      if (g === 'salt' && mp.lane !== 'C') {
        var half = P.GADGETS.salt.cone * Math.PI / 360;
        dabRing(ctx, mp.x, mp.y, range, range, mp.aim - half, mp.aim + half, 11, 3.2, cols, k * 500, 1);
        [-half, half].forEach(function (da, e) {
          for (var d = 12; d < range; d += 12) dab(ctx, mp.x + Math.cos(mp.aim + da) * d, mp.y + Math.sin(mp.aim + da) * d, 2.4, cols, k * 500 + 80 + e * 40 + d);
        });
      } else {
        dabRing(ctx, mp.x, mp.y, range, range * 0.9, 0, 6.2832, 11, 3.2, cols, k * 500, 1);
      }
    });
    return c;
  }

  // ---------- game state ----------
  var started = false, mode = 'raid', now = 0;
  var picnic = null;           // { layout:{pads}, seed, kind, best, bestDraft, job }
  var gen = null;              // background practice picnic: { seed, job }
  var waitingNew = false;
  var raid = { draft: [], sel: -1, lane: 'W', attempts: 0, bestBites: -1, last: null, markers: [], intro: '', coach: '' };
  var defend = { sel: null, result: null, waiting: null, msg: '', coach: '', hover: -1 };
  var run = null;              // live playback: { sim, kind:'raid'|'defend', speed, acc, endAt, name, ... }
  var tut = 3;                 // first-minute script: 0..2 active, 3 done
  var fx = { parts: [], ghosts: [], crumbs: [], flash: {}, swat: {}, pieSquash: 0, lastBites: 0, deadline: 0 };
  var info = '';               // one-off gadget info line

  function clone(d) { return d.map(function (x) { return { bug: x.bug, lane: x.lane }; }); }
  function emptyLayout() { return { pads: [null, null, null, null, null, null, null, null, null] }; }
  function seedFor() { return (Math.random() * 1e9) | 0; }

  function startGen() { var s = seedFor(); gen = { seed: s, job: P.layoutJob(s) }; }

  function makePicnic(layout, seed, kind, best, bestDraft) {
    var p = { layout: layout, seed: seed, kind: kind, best: best == null ? null : best, bestDraft: bestDraft || null, job: null };
    return p;
  }
  function ensureMarshal() {
    if (!picnic || picnic.best != null || picnic.job) return;
    picnic.job = P.marshalSolver(picnic.layout, picnic.seed);
  }
  function invalidatePicnic() {
    picnic.best = null; picnic.bestDraft = null; picnic.job = null; defend.waiting = null;
    ringKey = '';
  }

  function resetRaidAttempts() {
    raid.attempts = 0; raid.bestBites = -1; raid.last = null; raid.markers = []; fx.lastBites = 0;
  }
  function stopRun() { run = null; fx.parts.length = 0; fx.ghosts.length = 0; fx.crumbs.length = 0; }

  function applyNewPicnic(res, seed) {
    stopRun();
    picnic = makePicnic(res.layout, seed, 'practice', res.best, res.draft);
    resetRaidAttempts();
    raid.draft = []; raid.sel = -1; defend.result = null; defend.msg = '';
    raid.intro = 'A new picnic. Tap a bug to add it to the tray, then tap RAID.';
    raid.coach = 'Each gadget hits the lead bug, so order matters. Tap a gadget to read what it does.';
    ringKey = ''; waitingNew = false; info = '';
    startGen();
    ui();
  }
  function requestNewPicnic() {
    stopRun();
    if (gen && gen.job.done) { applyNewPicnic(gen.job.result, gen.seed); return; }
    waitingNew = true; ui();
  }
  function startFirst() {
    stopRun();
    picnic = makePicnic({ pads: P.FIRST.pads.slice() }, 11, 'first', null, null);
    ensureMarshal();
    resetRaidAttempts();
    raid.draft = [{ bug: 'ant', lane: 'W' }, { bug: 'ant', lane: 'W' }, { bug: 'ant', lane: 'W' }];
    raid.sel = -1; tut = 0; defend.result = null; info = '';
    raid.intro = 'Tap RAID.';
    raid.coach = 'Three ants will march down the west trail toward the pie.';
    ringKey = '';
  }

  // ---------- jobs pumped inside the frame, never more than a few ms ----------
  function pumpJobs(ms) {
    var t0 = performance.now(), guard = 0;
    while (performance.now() - t0 < ms && guard++ < 40) {
      var did = false;
      if (picnic && picnic.job) {
        did = true;
        if (picnic.job.work(25)) {
          var j = picnic.job;
          picnic.bestDraft = j.best; picnic.best = P.score(picnic.layout, j.best); picnic.job = null;
          onMarshalReady();
        }
      } else if (gen && !gen.job.done) {
        did = true;
        gen.job.work(25);
        if (gen.job.done && waitingNew) applyNewPicnic(gen.job.result, gen.seed);
      }
      if (!did) break;
    }
  }
  function onMarshalReady() {
    if (defend.waiting) { var w = defend.waiting; defend.waiting = null; launchDefend(w); }
    ui();
  }

  // ---------- DOM: tray ----------
  var dom = {};
  function buildDom() {
    var tools = $('tools'), slots = $('slots'), main = $('main');
    dom.bugBtns = {}; dom.gadBtns = {}; dom.slots = [];
    // Raid tools
    dom.raidTools = el('div'); dom.raidTools.style.cssText = 'display:flex;align-items:center;gap:6px;width:100%';
    P.BUG_IDS.forEach(function (id, i) {
      var b = el('button', 'pbtn tbtn'); b.type = 'button'; b.title = BNAME[id] + ' (key ' + (i + 1) + ')';
      b.appendChild(imgFor(id === 'ant' ? 'ant-a' : id));
      b.appendChild(el('span', 'cost', String(P.BUGS[id].cost)));
      b.appendChild(el('span', 'nm', BNAME[id]));
      b.addEventListener('click', function () { addBug(id); });
      dom.bugBtns[id] = b; dom.raidTools.appendChild(b);
    });
    dom.lane = el('button', 'pbtn lane W'); dom.lane.type = 'button';
    dom.lane.addEventListener('click', toggleLane); dom.raidTools.appendChild(dom.lane);
    [['◀', 'Move earlier', function () { moveSel(-1); }], ['▶', 'Move later', function () { moveSel(1); }], ['✕', 'Clear slot', clearSel]].forEach(function (d) {
      var b = el('button', 'pbtn sq', d[0]); b.type = 'button'; b.title = d[1]; b.setAttribute('aria-label', d[1]);
      b.addEventListener('click', d[2]); dom.raidTools.appendChild(b);
      dom[d[0]] = b;
    });
    dom.crumbs = el('div', 'meter'); dom.raidTools.appendChild(dom.crumbs);
    // Defend tools
    dom.defTools = el('div'); dom.defTools.style.cssText = 'display:none;align-items:center;gap:6px;width:100%';
    P.GADGET_IDS.forEach(function (id, i) {
      var b = el('button', 'pbtn tbtn'); b.type = 'button'; b.title = GINFO[id] + ' (key ' + (i + 1) + ')';
      b.appendChild(imgFor(GICON[id]));
      b.appendChild(el('span', 'cost', String(P.GADGETS[id].cost)));
      b.appendChild(el('span', 'nm', GSHORT[id]));
      b.addEventListener('click', function () { selectGadget(id); });
      dom.gadBtns[id] = b; dom.defTools.appendChild(b);
    });
    dom.money = el('div', 'meter'); dom.defTools.appendChild(dom.money);
    tools.appendChild(dom.raidTools); tools.appendChild(dom.defTools);
    // Slots
    for (var s = 0; s < 10; s++) {
      (function (s) {
        var b = el('button', 'pbtn slot empty'); b.type = 'button'; b.setAttribute('aria-label', 'Slot ' + (s + 1));
        b.addEventListener('click', function () { tapSlot(s); });
        slots.appendChild(b); dom.slots.push(b);
      })(s);
    }
    // Main area
    dom.mainRaid = el('button', 'pbtn mainbtn', 'RAID'); dom.mainRaid.type = 'button';
    dom.mainRaid.addEventListener('click', mainPress);
    main.appendChild(dom.mainRaid);
    dom.atk = {};
    ATTACKERS.forEach(function (a) {
      var b = el('button', 'pbtn atk'); b.type = 'button';
      b.appendChild(el('span', null, a.name)); b.appendChild(el('small', null, a.sub));
      b.addEventListener('click', function () { pickAttacker(a.id); });
      dom.atk[a.id] = b; main.appendChild(b);
    });
  }

  function crumbsLeft() { return P.BUDGET - P.cost(raid.draft); }
  function moneyLeft() { return P.POCKET - P.layoutCost(picnic.layout); }

  function ui() {
    if (!picnic) return;
    var raidMode = mode === 'raid', running = !!run;
    $('tab-raid').classList.toggle('on', raidMode); $('tab-defend').classList.toggle('on', !raidMode);
    dom.raidTools.style.display = raidMode ? 'flex' : 'none';
    dom.defTools.style.display = raidMode ? 'none' : 'flex';

    // tray slots: the raid draft, or the attacker's draft while defending
    var shown = raidMode ? raid.draft : (run ? run.draft : (defend.result ? defend.result.draft : []));
    dom.slots.forEach(function (b, i) {
      var d = shown[i];
      b.textContent = '';
      b.className = 'pbtn slot' + (d ? '' : ' empty') + (raidMode && i === raid.sel ? ' sel' : '');
      if (d) {
        b.appendChild(imgFor(d.bug === 'ant' ? 'ant-a' : d.bug));
        b.appendChild(el('span', 'ln ' + d.lane, d.lane));
        b.title = BNAME[d.bug] + ', ' + (d.lane === 'W' ? 'west' : 'north') + ' trail';
      } else b.title = '';
      b.disabled = !raidMode || running;
    });

    // raid tools
    var left = crumbsLeft(), full = raid.draft.length >= P.MAX_BUGS;
    P.BUG_IDS.forEach(function (id) {
      var b = dom.bugBtns[id];
      b.disabled = running || full || P.BUGS[id].cost > left || raid.attempts >= 3;
      b.classList.toggle('pulse', tut === 1 && id === 'beetle' && !hasBeetle() && !running);
    });
    var curLane = raid.sel >= 0 && raid.draft[raid.sel] ? raid.draft[raid.sel].lane : raid.lane;
    dom.lane.className = 'pbtn lane ' + curLane;
    dom.lane.textContent = curLane === 'W' ? 'West trail' : 'North trail';
    dom.lane.title = raid.sel >= 0 ? 'Switch the selected bug to the other trail' : 'Choose the trail for the next bug';
    dom.lane.disabled = running;
    var hasSel = raid.sel >= 0 && !!raid.draft[raid.sel] && !running;
    dom['◀'].disabled = !hasSel || raid.sel === 0;
    dom['▶'].disabled = !hasSel || raid.sel >= raid.draft.length - 1;
    dom['✕'].disabled = !hasSel;
    dom['◀'].classList.toggle('pulse', tut === 1 && hasSel && raid.draft[raid.sel].bug === 'beetle' && raid.sel > 0);
    var spent = P.cost(raid.draft), bar = '';
    for (var i = 0; i < P.BUDGET; i++) bar += '<i class="' + (i < spent ? 'on' : '') + '"></i>';
    dom.crumbs.innerHTML = 'Crumbs <b>' + spent + ' / ' + P.BUDGET + '</b><div class="bar">' + bar + '</div>';

    // defend tools
    var money = moneyLeft();
    P.GADGET_IDS.forEach(function (id) {
      var b = dom.gadBtns[id];
      b.classList.toggle('sel', defend.sel === id);
      b.disabled = running;
      b.style.opacity = (P.GADGETS[id].cost > money && !running) ? '.62' : '';
    });
    dom.money.className = 'meter' + (money < 0 ? ' neg' : '');
    dom.money.innerHTML = 'Pocket money<br><b>' + (money < 0 ? '−' + (-money) : money) + '</b> of ' + P.POCKET;

    // main button
    var raidBtn = dom.mainRaid;
    raidBtn.style.display = (raidMode || running) ? '' : 'none';
    if (running) { raidBtn.textContent = run.speed === 2 ? '1×' : '2×'; raidBtn.className = 'pbtn mainbtn speed'; raidBtn.disabled = false; }
    else if (raid.attempts >= 3 && raidMode) { raidBtn.textContent = 'NEW PICNIC'; raidBtn.className = 'pbtn mainbtn next'; raidBtn.disabled = false; }
    else {
      raidBtn.textContent = 'RAID'; raidBtn.className = 'pbtn mainbtn' + (tut === 0 && raid.attempts === 0 ? ' pulse' : '');
      raidBtn.disabled = !(raid.draft.length > 0 && P.valid(raid.draft));
    }
    ATTACKERS.forEach(function (a) {
      var b = dom.atk[a.id];
      b.style.display = (!raidMode && !running) ? '' : 'none';
      b.disabled = !!defend.waiting;
    });

    // top plaques
    $('score').textContent = fx.lastBites + ' / 12 bites';
    if (raidMode) $('attempts').textContent = 'Attempt ' + Math.min(3, raid.attempts + (running ? 1 : (raid.attempts >= 3 ? 0 : 1))) + ' of 3';
    else $('attempts').textContent = defend.result ? defend.result.name + ' raided' : 'Gran’s lawn';
    $('tab-defend').classList.toggle('pulse', tut === 2 && raidMode);
    $('newpicnic').disabled = false;

    renderCard();
  }

  function marshalText() { return picnic.best == null ? '…' : String(picnic.best); }
  function renderCard() {
    var line = '', coach = '', btn = null;
    if (waitingNew) { line = 'Mowing a fresh lawn…'; coach = 'One moment while the Marshal scouts it.'; }
    else if (mode === 'raid') {
      if (run) { line = 'Raiding…'; coach = 'Tap 2× to hurry the bugs along.'; }
      else if (raid.last) {
        line = raid.last.bites + ' of 12 bites. Marshal’s best: ' + marshalText() + '.';
        coach = raid.coach;
        btn = 'Rebuild this picnic';
      } else { line = raid.intro; coach = info || raid.coach; }
      if (!run && info && raid.last) coach = info;
    } else {
      if (defend.waiting) { line = 'The Marshal is scouting the lawn…'; coach = 'Hold on, this takes a second.'; }
      else if (run) { line = run.name + ' is raiding…'; coach = 'Tap 2× to hurry them along.'; }
      else if (defend.result) {
        var r = defend.result;
        line = r.name + ' got ' + r.bites + ' bites. You saved ' + (12 - r.bites) + ' of 12 slices.';
        coach = info || defend.coach; btn = 'Raid this picnic yourself';
      } else { line = defend.msg; coach = info || defend.coach; }
    }
    $('line').textContent = line; $('coach').textContent = coach;
    $('act').classList.toggle('hide', !btn); if (btn) $('act').textContent = btn;
    $('act').disabled = !btn;
  }

  function hasBeetle() { return raid.draft.some(function (d) { return d.bug === 'beetle'; }); }

  // ---------- Raid actions ----------
  function addBug(id) {
    if (run || raid.attempts >= 3) return;
    if (raid.draft.length >= P.MAX_BUGS) { info = 'The tray is full: ten bugs at most.'; ui(); return; }
    if (P.BUGS[id].cost > crumbsLeft()) { info = 'Not enough crumbs for a ' + BNAME[id].toLowerCase() + '.'; ui(); return; }
    var lane = raid.sel >= 0 && raid.draft[raid.sel] ? raid.draft[raid.sel].lane : raid.lane;
    raid.draft.push({ bug: id, lane: lane }); raid.lane = lane;
    raid.sel = raid.draft.length - 1;
    info = '';
    if (tut === 1 && id === 'beetle') { raid.coach = 'Now tap ◀ until the beetle leads the column.'; }
    sfx('add'); ui();
  }
  function tapSlot(i) {
    if (run || mode !== 'raid') return;
    if (!raid.draft[i]) return;
    raid.sel = raid.sel === i ? -1 : i; sfx('add', { gain: 0.5 }); ui();
  }
  function toggleLane() {
    if (run) return;
    if (raid.sel >= 0 && raid.draft[raid.sel]) { var d = raid.draft[raid.sel]; d.lane = d.lane === 'W' ? 'N' : 'W'; }
    else raid.lane = raid.lane === 'W' ? 'N' : 'W';
    sfx('add', { gain: 0.5 }); ui();
  }
  function moveSel(dir) {
    var i = raid.sel, j = i + dir;
    if (run || i < 0 || j < 0 || j >= raid.draft.length) return;
    var t = raid.draft[i]; raid.draft[i] = raid.draft[j]; raid.draft[j] = t; raid.sel = j;
    if (tut === 1 && raid.draft[0] && raid.draft[0].bug === 'beetle') raid.coach = 'The beetle leads. Tap RAID again.';
    sfx('add', { gain: 0.6 }); ui();
  }
  function clearSel() {
    if (run || raid.sel < 0 || !raid.draft[raid.sel]) return;
    raid.draft.splice(raid.sel, 1);
    raid.sel = Math.min(raid.sel, raid.draft.length - 1);
    sfx('remove'); ui();
  }
  function mainPress() {
    if (run) { run.speed = run.speed === 2 ? 1 : 2; ui(); return; }
    if (mode !== 'raid') return;
    if (raid.attempts >= 3) { requestNewPicnic(); return; }
    startRaid();
  }
  function startRaid() {
    if (run || !raid.draft.length || !P.valid(raid.draft)) return;
    ensureMarshal();
    var sim = P.create(picnic.layout, clone(raid.draft));
    run = { sim: sim, kind: 'raid', speed: 1, acc: 0, endAt: 0, name: 'Raid', draft: clone(raid.draft), bites: 0 };
    raid.sel = -1; info = ''; fx.lastBites = 0; fx.pieSquash = 0; resetFx();
    sfx('raid'); ui();
  }
  function resetFx() { fx.parts.length = 0; fx.ghosts.length = 0; fx.crumbs.length = 0; fx.flash = {}; fx.swat = {}; }

  function finishRun() {
    var r = run, bites = r.sim.bites; run = null;
    fx.lastBites = bites;
    sfx('result', { count: r.kind === 'raid' ? bites : 12 - bites });
    if (r.kind === 'raid') {
      raid.attempts++; raid.last = { bites: bites };
      if (bites > raid.bestBites) raid.bestBites = bites;
      r.sim.gaveUp.forEach(function (g) { raid.markers.push({ x: g.x, y: g.y, by: g.by, att: raid.attempts }); });
      var biter = null, i;
      for (i = 0; i < r.sim.bugs.length; i++) if (r.sim.bugs[i].state === 'done') { biter = i; break; }
      var made = biter == null ? 'Nobody made it.' : RANKS[(picnic.seed + biter * 3) % RANKS.length] + ' made it.';
      var tail = raid.attempts >= 3 ? ' Out of attempts: rebuild the picnic as Gran, or try a new one.' : ' The red crosses show where bugs gave up. Adjust and raid again.';
      raid.coach = made + tail;
      if (picnic.kind === 'first' && tut === 0) { tut = 1; raid.coach = 'Beetles are tough. Put one in front.'; }
      else if (picnic.kind === 'first' && tut === 1) { tut = 2; raid.coach = 'Now be Gran. Tap Defend.'; Kit.store.set('bg.picnic-raid.seen', true); }
    } else {
      defend.result = { name: r.name, bites: bites, draft: r.draft };
      defend.coach = 'Tap another attacker, change your gadgets, or raid it yourself.';
    }
    ui();
  }

  // ---------- Defend actions ----------
  function selectGadget(id) {
    if (run) return;
    defend.sel = defend.sel === id ? null : id;
    info = GINFO[id]; sfx('add', { gain: 0.5 }); ui();
  }
  function padAt(x, y) {
    var best = -1, bd = 46 * 46, k;
    for (k = 0; k < 9; k++) {
      var d = (P.MAP.pads[k].x - x) * (P.MAP.pads[k].x - x) + (P.MAP.pads[k].y - 20 - y) * (P.MAP.pads[k].y - 20 - y);
      var d2 = (P.MAP.pads[k].x - x) * (P.MAP.pads[k].x - x) + (P.MAP.pads[k].y - y) * (P.MAP.pads[k].y - y);
      d = Math.min(d, d2);
      if (d < bd) { bd = d; best = k; }
    }
    return best;
  }
  function canvasDown(x, y) {
    if (!started || !picnic || run) return;
    var k = padAt(x, y);
    if (k < 0) return;
    var cur = picnic.layout.pads[k];
    if (mode === 'raid') { if (cur) { info = GINFO[cur]; ui(); } return; }
    if (cur) {
      picnic.layout.pads[k] = null; invalidatePicnic(); defend.result = null; fx.lastBites = 0;
      info = 'Sold the ' + GNAME[cur].toLowerCase() + '. +' + P.GADGETS[cur].cost + ' back.';
      sfx('remove'); burstDabs(P.MAP.pads[k].x, P.MAP.pads[k].y - 20, 8, ['#f5d76e', '#fff1b8'], 90); ui(); return;
    }
    if (!defend.sel) { info = 'Pick a gadget first, then tap a pad.'; ui(); return; }
    if (P.GADGETS[defend.sel].cost > moneyLeft()) { info = 'Not enough pocket money for the ' + GNAME[defend.sel].toLowerCase() + '.'; ui(); return; }
    picnic.layout.pads[k] = defend.sel; invalidatePicnic(); defend.result = null; fx.lastBites = 0;
    info = GINFO[defend.sel]; sfx('place');
    burstDabs(P.MAP.pads[k].x, P.MAP.pads[k].y, 10, ['#a8c64a', '#7fae3f', '#d9b27a'], 110);
    ui();
  }
  function canvasMove(x, y) { defend.hover = (mode === 'defend' && !run) ? padAt(x, y) : -1; }

  function pickAttacker(id) {
    if (run || defend.waiting) return;
    info = '';
    if (id === 'marshal') {
      if (picnic.best == null || !picnic.bestDraft) { defend.waiting = 'marshal'; ensureMarshal(); ui(); return; }
      launchDefend('marshal'); return;
    }
    launchDefend(id);
  }
  function launchDefend(id) {
    var draft = id === 'marshal' ? clone(picnic.bestDraft) : P.attackers[id](picnic.layout, picnic.seed);
    var sim = P.create(picnic.layout, draft);
    run = { sim: sim, kind: 'defend', speed: 1, acc: 0, endAt: 0, name: ATTACKERS.filter(function (a) { return a.id === id; })[0].name, draft: draft, bites: 0 };
    defend.result = null; fx.lastBites = 0; fx.pieSquash = 0; resetFx();
    sfx('raid'); ui();
  }

  // ---------- swapping sides ----------
  function toDefend() {
    stopRun(); mode = 'defend';
    resetRaidAttempts(); defend.result = null; defend.sel = null; defend.waiting = null; info = '';
    var money = moneyLeft();
    defend.msg = 'Gran’s turn. Tap a gadget, then a pad. Tap a placed gadget to sell it.';
    defend.coach = money < 0 ? 'You are ' + (-money) + ' over pocket money: sell something before buying more.' : 'Pocket money left: ' + money + '. Then pick an attacker.';
    tut = tut === 2 ? 3 : tut;
    ui();
  }
  function toRaid() {
    stopRun(); mode = 'raid'; resetRaidAttempts(); raid.sel = -1; defend.result = null; defend.waiting = null; info = '';
    if (picnic.best == null) ensureMarshal();
    raid.intro = 'Raid this picnic. Tap a bug to add it to the tray, then tap RAID.';
    raid.coach = 'Three attempts. Markers will show where bugs gave up.';
    ringKey = ''; ui();
  }

  // ---------- events -> sound and effects ----------
  function burstDabs(x, y, n, cols, speed) {
    for (var i = 0; i < n; i++) {
      var a = Math.random() * 6.2832, sp = speed * (0.3 + Math.random() * 0.7);
      fx.parts.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 20, life: 420 + Math.random() * 300, max: 700, r: 3 + Math.random() * 3, c: cols, seed: (Math.random() * 1e6) | 0, g: 120 });
    }
  }
  function handleEvents(evs) {
    for (var i = 0; i < evs.length; i++) {
      var e = evs[i];
      if (e.type === 'release') sfx('step');
      else if (e.type === 'hit') {
        fx.flash[e.slot] = now + 130;
      } else if (e.type === 'fire') {
        if (e.gadget === 'swatter') {
          fx.swat[e.pad] = { t0: now, dir: e.x >= P.MAP.pads[e.pad].x ? 1 : -1 };
          sfx('swat'); Kit.shake(T.shake, 140);
          burstDabs(e.x, e.y, 12, ['#f5d76e', '#fff1b8', '#f5b03a'], 170);
        } else if (e.gadget === 'salt') {
          sfx('salt'); var mp = P.MAP.pads[e.pad], sd = run.sim.pads[e.pad].dir;
          for (var k = 0; k < 7; k++) {
            var a = sd + (Math.random() - 0.5) * 1.1, sp = 160 + Math.random() * 140;
            fx.parts.push({ x: mp.x, y: mp.y - 14, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 380, max: 380, r: 2.6, c: ['#ffffff', '#f6ecd2'], seed: k + e.pad * 9, g: 0 });
          }
        } else if (e.gadget === 'sprinkler') sfx('spray');
        else if (e.gadget === 'zapper') {
          sfx('zap'); var zp = P.MAP.pads[e.pad], n = 9, j;
          for (j = 0; j <= n; j++) {
            var f = j / n;
            fx.parts.push({ x: zp.x + (e.x - zp.x) * f + (Math.random() - 0.5) * 14, y: zp.y - 70 + (e.y - (zp.y - 70)) * f + (Math.random() - 0.5) * 14, vx: 0, vy: 0, life: 170, max: 170, r: 4, c: ['#bfe8ff', '#6fc3ff', '#ffffff'], seed: j + e.pad * 31, g: 0 });
          }
        }
      } else if (e.type === 'stuck') {
        sfx('stuck'); burstDabs(e.x, e.y, 8, ['#d8463a', '#b8302e', '#f08070'], 70);
      } else if (e.type === 'gaveUp') {
        sfx('giveup');
        fx.ghosts.push({ x: e.x, y: e.y, bug: e.bug, t0: now, face: run.sim.bugs[e.slot].face });
      } else if (e.type === 'bite') {
        sfx('bite'); fx.pieSquash = 1;
        run.bites = e.bites; fx.lastBites = e.bites;
        var r = $('score').getBoundingClientRect(), w = g.view.toWorld(r.left + r.width * 0.3, r.top + r.height / 2);
        fx.crumbs.push({ x0: e.x, y0: e.y, x1: w.x, y1: w.y, t0: now, ms: 700 });
        $('score').textContent = e.bites + ' / 12 bites';
      } else if (e.type === 'end') {
        run.endAt = now + T.endHoldMs;
      }
    }
  }

  // ---------- drawing ----------
  var SIZE = { ant: 46, ladybug: 46, beetle: 66, wasp: 58 };
  function drawShadow(ctx, x, y, w, alpha) {
    ctx.save(); ctx.globalAlpha = alpha;
    dab(ctx, x, y, w * 0.34, ['#4b3d78', '#7a6aa8'], ((x * 3 + y) | 0) & 255);
    ctx.restore();
  }
  function bugSprite(kind, slot) {
    if (kind === 'ant') return (((now / T.legMs) | 0) + slot) % 2 ? 'ant-b' : 'ant-a';
    return kind;
  }
  function drawBug(ctx, kind, x, y, face, slot, opts) {
    var w = SIZE[kind] * T.bugSize, bob = Math.sin(now * 0.012 + slot * 1.7) * T.bob;
    var lift = kind === 'wasp' ? 24 : 0;
    drawShadow(ctx, x, y + 2, w, kind === 'wasp' ? 0.22 : 0.3);
    var o = { w: w, ay: 0.85, flipX: face < 0 };
    if (opts) { for (var k in opts) o[k] = opts[k]; }
    if (fx.flash[slot] && fx.flash[slot] > now && !(opts && opts.noFlash)) { o.tint = '#ffffff'; o.tintAmount = 0.55; }
    Kit.draw(ctx, bugSprite(kind, slot), x, y - lift + bob, o);
  }
  function drawStar(ctx, x, y, r, seed) {
    dab(ctx, x, y, r, ['#f5d76e', '#fff1b8', '#f5b03a'], seed);
  }

  function drawLawn(ctx) {
    if (Kit.has('bg-lawn')) Kit.draw(ctx, 'bg-lawn', 640, 720, { w: 1280, h: 720 });
    else {
      ctx.fillStyle = '#7fae3f'; ctx.fillRect(0, 0, 1280, 720);
      for (var i = 0; i < 380; i++) dab(ctx, hash(i * 3) * 1280, hash(i * 3 + 1) * 720, 20, hash(i * 3 + 2) > 0.5 ? COLORS.grass : ['#6e9a35', '#c2d062'], i);
    }
    if (!trailLayer) trailLayer = buildTrails();
    ctx.drawImage(trailLayer, 0, 0);
  }

  function padGadgetDraw(ctx, k, g, t, tick, sim) {
    var mp = P.MAP.pads[k], x = mp.x, y = mp.y;
    var used = sim && sim.pads[k].used;
    if (g === 'jam') {
      if (!used) Kit.draw(ctx, 'jam', mp.lane === 'C' ? x : mp.touchX, (mp.lane === 'C' ? y : mp.touchY) + 8, { w: 50, ay: 0.7 });
      return;
    }
    if (g === 'swatter') {
      Kit.draw(ctx, 'swatter-base', x, y + 8, { w: 64 });
      var rot = 0, sw = fx.swat[k];
      if (sw) {
        var dt = now - sw.t0, a = T.swingDeg * Math.PI / 180 * sw.dir;
        if (dt < T.swingMs) rot = a * (dt / T.swingMs);
        else if (dt < T.swingMs + T.riseMs) { var u = (dt - T.swingMs) / T.riseMs; rot = a * (1 - u * u * (3 - 2 * u)); }
        else delete fx.swat[k];
      } else rot = Math.sin(now * 0.002 + k) * 0.03;
      Kit.draw(ctx, 'swatter-paddle', x, y - 28, { h: 78, ay: 0.95, rot: rot });
    } else if (g === 'salt') {
      var dir = sim ? sim.pads[k].dir : mp.aim;
      var left = Math.cos(dir) < 0;
      Kit.draw(ctx, 'salt', x, y + 8, { w: 62, ay: 0.72, rot: left ? dir - Math.PI : dir, flipX: left });
    } else if (g === 'sprinkler') {
      Kit.draw(ctx, 'sprinkler', x, y + 8, { w: 52 });
      if (sim) {
        // a ring of dabs shows the time to the next spray
        var ph = (tick % P.SPRAY.cycle) / P.SPRAY.cycle;
        dabRing(ctx, x, y - 14, 30, 22, -Math.PI / 2, -Math.PI / 2 + 6.2832 * ph, 9, 2.8, ['#8fd0ff', '#cfeeff'], k * 40, 0.85);
      }
    } else if (g === 'candle') {
      Kit.draw(ctx, 'candle', x, y + 8, { h: 48 });
      dab(ctx, x, y - 36 + Math.sin(now * 0.02 + k) * 1.2, 7, ['#fff1b8', '#f5d76e', '#f5b03a'], k + (((now / 90) | 0) % 5) * 7);
    } else if (g === 'zapper') {
      Kit.draw(ctx, 'zapper', x, y + 8, { h: 92 });
    }
  }

  function drawPads(ctx, layout, sim, tick) {
    var order = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(function (a, b) { return P.MAP.pads[a].y - P.MAP.pads[b].y; });
    var sel = mode === 'defend' && !run && defend.sel;
    order.forEach(function (k) {
      var mp = P.MAP.pads[k], g = layout.pads[k];
      // stone, with a soft violet shadow dab
      drawShadow(ctx, mp.x + 4, mp.y + 10, 90, 0.25);
      Kit.draw(ctx, 'pad', mp.x, mp.y + 14, { w: 78 });
      if (mode === 'defend' && !run && !g) {
        var pulse = 0.35 + 0.25 * Math.sin(now * 0.005 + k) + (defend.hover === k ? 0.3 : 0);
        dabRing(ctx, mp.x, mp.y, 36, 24, 0, 6.2832, 9, 3.4, ['#f5d76e', '#fff1b8'], k * 77, sel ? pulse + 0.2 : 0.2);
      }
    });
    // range rings under the gadgets
    var key = layout.pads.join(',');
    if (key !== ringKey || !ringLayer) { ringLayer = buildRings(layout.pads); ringKey = key; }
    ctx.save(); ctx.globalAlpha = T.ringAlpha; ctx.drawImage(ringLayer, 0, 0); ctx.restore();
    // hover preview of the selected gadget's range
    if (sel && defend.hover >= 0 && !layout.pads[defend.hover] && sel !== 'jam') {
      var hp = P.MAP.pads[defend.hover], rg = P.GADGETS[sel].range;
      dabRing(ctx, hp.x, hp.y, rg, rg * 0.9, 0, 6.2832, 11, 3.4, ['#f5d76e', '#fff1b8'], 999, 0.55);
    }
    order.forEach(function (k) { if (layout.pads[k]) padGadgetDraw(ctx, k, layout.pads[k], now, tick, sim); });
  }

  function drawPie(ctx, bitesShown) {
    var px = P.MAP.pie.x, py = P.MAP.pie.y - 10, sq = fx.pieSquash;
    drawShadow(ctx, px + 4, py + 20, 120, 0.25);
    Kit.draw(ctx, 'pie', px, py + 28, { w: 118, ay: 0.7, sx: 1 + 0.1 * sq, sy: 1 - 0.18 * sq });
    var i;
    for (i = 0; i < bitesShown; i++) {
      var a = -Math.PI / 2 + (i + 0.5) * Math.PI / 6;
      for (var r = 0; r < 2; r++) {
        var f = 0.28 + r * 0.3;
        dab(ctx, px + Math.cos(a) * 44 * f * 1.6, py + 6 + Math.sin(a) * 22 * f * 1.6, 10 - r * 2, ['#4b2f22', '#6e4430', '#3e2a2e'], i * 11 + r * 5 + 400);
      }
    }
  }

  function drawMarkers(ctx) {
    raid.markers.forEach(function (m, i) {
      var old = raid.attempts - m.att; // 0 means the last attempt
      ctx.save(); ctx.globalAlpha = old === 0 ? 0.95 : 0.5;
      var s = 12;
      for (var k = -2; k <= 2; k++) {
        dab(ctx, m.x + k * s * 0.45, m.y + k * s * 0.45, 4.2, ['#d8463a', '#b8302e', '#e8695a'], i * 20 + k + 50);
        dab(ctx, m.x + k * s * 0.45, m.y - k * s * 0.45, 4.2, ['#d8463a', '#b8302e', '#e8695a'], i * 20 + k + 70);
      }
      var ic = GICON[m.by];
      if (ic) Kit.draw(ctx, ic, m.x + 18, m.y - 8, { h: 26, alpha: 0.95 });
      ctx.restore();
    });
  }

  function drawFx(ctx, dt) {
    var i;
    // dizzy ghosts: spin once, three stars, fade and wander off
    for (i = fx.ghosts.length - 1; i >= 0; i--) {
      var gh = fx.ghosts[i], age = now - gh.t0;
      if (age > T.ghostMs) { fx.ghosts.splice(i, 1); continue; }
      var spinU = Math.min(1, age / 500), fade = age < T.ghostMs * 0.5 ? 1 : 1 - (age - T.ghostMs * 0.5) / (T.ghostMs * 0.5);
      var wx = gh.x + (age / 1000) * 14 * (gh.face || 1), wy = gh.y - age * 0.01;
      var w = SIZE[gh.bug] * T.bugSize;
      Kit.draw(ctx, gh.bug === 'ant' ? 'ant-a' : gh.bug, wx, wy, { w: w, ay: 0.85, rot: spinU * 6.2832, alpha: Math.max(0, fade), flipX: gh.face < 0 });
      ctx.save(); ctx.globalAlpha = Math.max(0, fade);
      for (var s = 0; s < 3; s++) {
        var a = now * 0.008 + s * 2.094;
        drawStar(ctx, wx + Math.cos(a) * 20, wy - w * 0.55 + Math.sin(a) * 6, 3.4, s + 5);
      }
      ctx.restore();
    }
    // flying crumbs
    for (i = fx.crumbs.length - 1; i >= 0; i--) {
      var c = fx.crumbs[i], u = (now - c.t0) / c.ms;
      if (u >= 1) { fx.crumbs.splice(i, 1); var sc = $('score'); sc.classList.remove('bump'); void sc.offsetWidth; sc.classList.add('bump'); continue; }
      var e = u * u * (3 - 2 * u), cx = c.x0 + (c.x1 - c.x0) * e, cy = c.y0 + (c.y1 - c.y0) * e - Math.sin(u * Math.PI) * 60;
      Kit.draw(ctx, 'crumb', cx, cy, { w: 22 * (1 - u * 0.4), ay: 0.5, rot: u * 6 });
    }
    // dab particles
    for (i = fx.parts.length - 1; i >= 0; i--) {
      var p = fx.parts[i];
      p.life -= dt; if (p.life <= 0) { fx.parts.splice(i, 1); continue; }
      p.x += p.vx * dt / 1000; p.y += p.vy * dt / 1000; p.vy += p.g * dt / 1000; p.vx *= 0.985;
      ctx.save(); ctx.globalAlpha = Math.min(1, p.life / (p.max * 0.6));
      dab(ctx, p.x, p.y, p.r, p.c, p.seed);
      ctx.restore();
    }
    if (fx.parts.length > 400) fx.parts.splice(0, fx.parts.length - 400);
  }

  // The title scene: a column marching down the west trail past the guards.
  function drawTitleBugs(ctx) {
    var p = P.MAP.paths.W, n = 6, i;
    for (i = 0; i < n; i++) {
      var s = ((now * 0.045 - i * 46) % p.len + p.len) % p.len, idx = s | 0;
      var x = p.xs[idx], y = p.ys[idx], nx = p.xs[Math.min(p.len, idx + 3)];
      drawBug(ctx, i === 0 ? 'beetle' : 'ant', x, y, nx >= x ? 1 : -1, i, { noFlash: true });
    }
  }

  var sprayAcc = 0;
  function updateSprinklers(dt) {
    if (!run) return;
    var sim = run.sim, ph = sim.tick % P.SPRAY.cycle - P.SPRAY.start;
    if (ph < 0 || ph >= P.SPRAY.len) return;
    for (var k = 0; k < 9; k++) {
      if (sim.pads[k].g !== 'sprinkler') continue;
      var mp = P.MAP.pads[k];
      for (var j = 0; j < 2; j++) {
        var a = Math.random() * 6.2832, sp = 90 + Math.random() * 110;
        fx.parts.push({ x: mp.x, y: mp.y - 14, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.7 - 40, life: 520, max: 520, r: 2.8, c: ['#8fd0ff', '#cfeeff', '#5fb0ee'], seed: (Math.random() * 1e5) | 0, g: 140 });
      }
    }
  }

  function frame(dt, game) {
    var ctx = game.ctx;
    now += dt;
    pumpJobs(6);
    if (run && !game.paused) {
      run.acc += dt / 1000 * T.pace * run.speed;
      var guard = 0;
      while (run.acc >= 1 / P.HZ && !run.sim.over && guard++ < 8) {
        run.acc -= 1 / P.HZ;
        handleEvents(P.step(run.sim));
        if (!run) break;
      }
      if (run && run.sim.over && run.endAt && now >= run.endAt) finishRun();
      updateSprinklers(dt);
    }
    fx.pieSquash = Math.max(0, fx.pieSquash - dt / 220);

    ctx.save();
    Kit.applyShake(ctx);
    drawLawn(ctx);
    var layout = picnic ? picnic.layout : { pads: [null, 'swatter', null, null, null, null, null, 'zapper', null] };
    var sim = run ? run.sim : null, tick = sim ? sim.tick : 0;
    if (!started) layout = { pads: [null, 'swatter', null, 'candle', null, null, null, 'zapper', null] };
    drawMarkers(ctx);
    drawPads(ctx, layout, sim, tick);
    drawPie(ctx, started ? fx.lastBites : 0);
    if (!started) drawTitleBugs(ctx);
    else if (sim) {
      var list = sim.bugs.filter(function (b) { return b.state === 'walk' || b.state === 'stuck'; });
      list.sort(function (a, b) { return a.y - b.y; });
      list.forEach(function (b) { drawBug(ctx, b.kind, b.x, b.y, b.face, b.slot); });
    }
    drawFx(ctx, dt);
    ctx.restore();
  }

  // ---------- bed: breeze, birdsong, a slow phrase ----------
  var bed = null;
  function startBed() {
    if (bed) return;
    bed = Kit.audio.bed({ noise: { cutoff: 520, gain: T.breeze } });
    bed.start();
    (function bird() { if (!g.paused) play('bird', { pick: (Math.random() * 5) | 0 }); setTimeout(bird, T.birdSecs * 1000 * (0.6 + Math.random() * 0.9)); })();
    (function phrase() { setTimeout(function () { if (!g.paused) play('phrase'); phrase(); }, T.phraseSecs * 1000); })();
  }

  // ---------- starting ----------
  function begin(which) {
    if (started) return;
    started = true;
    document.body.classList.remove('intro');
    $('title').classList.add('hidden');
    startBed();
    var seen = !!Kit.store.get('bg.picnic-raid.seen', false);
    if (which === 'defend') {
      picnic = makePicnic(emptyLayout(), seedFor(), 'defend', null, null);
      mode = 'defend'; tut = 3; resetRaidAttempts();
      defend.msg = 'Gran’s turn. Tap a gadget, then tap a pad. Then pick an attacker.';
      defend.coach = 'You have ' + P.POCKET + ' pocket money. Tap a placed gadget to sell it.';
      sfx('add');
    } else {
      mode = 'raid';
      if (!seen) startFirst();
      else { tut = 3; picnic = makePicnic(emptyLayout(), seedFor(), 'practice', null, null); requestNewPicnic(); }
    }
    ui();
  }

  var g = Kit.boot({
    slug: 'picnic-raid',
    world: { w: 1280, h: 720 },
    assets: assets,
    tune: TUNE,
    onStart: function () { T = g.tune; buildDom(); startGen(); bindInput(); },
    onFrame: function (dt, game) { if (T) frame(dt, game); },
    onPause: function () { if (bed) bed.setGain(0); },
    onResume: function () { if (bed) bed.setGain(1); }
  });
  T = g.tune;

  function bindInput() {
    Kit.pointer(g.canvas, { down: canvasDown, move: canvasMove });
    $('go-raid').addEventListener('click', function () { begin('raid'); });
    $('go-defend').addEventListener('click', function () { begin('defend'); });
    $('tab-raid').addEventListener('click', function () { if (mode !== 'raid') toRaid(); });
    $('tab-defend').addEventListener('click', function () { if (mode !== 'defend') toDefend(); });
    $('newpicnic').addEventListener('click', function () {
      if (mode === 'defend') { mode = 'raid'; defend.result = null; defend.waiting = null; }
      requestNewPicnic();
    });
    $('act').addEventListener('click', function () { if (mode === 'raid') toDefend(); else toRaid(); });
    window.addEventListener('keydown', function (e) {
      if (!started || e.metaKey || e.ctrlKey || e.altKey) return;
      var k = e.key;
      if (k === 'Enter' && !(e.target && e.target.tagName === 'BUTTON')) { e.preventDefault(); if (mode === 'raid' || run) mainPress(); return; }
      if (mode === 'raid') {
        if (k >= '1' && k <= '4') { addBug(P.BUG_IDS[+k - 1]); }
        else if (k === 'ArrowLeft') { e.preventDefault(); moveSel(-1); }
        else if (k === 'ArrowRight') { e.preventDefault(); moveSel(1); }
        else if (k === 'ArrowUp' || k === 'ArrowDown') {
          e.preventDefault();
          var n = raid.draft.length; if (!n) return;
          raid.sel = raid.sel < 0 ? (k === 'ArrowDown' ? 0 : n - 1) : (raid.sel + (k === 'ArrowDown' ? 1 : -1) + n) % n; ui();
        }
        else if (k === 'Backspace' || k === 'Delete') { e.preventDefault(); clearSel(); }
        else if (k === 'l' || k === 'L') toggleLane();
        else if (k === 'Escape') { raid.sel = -1; ui(); }
      } else if (k >= '1' && k <= '6') selectGadget(P.GADGET_IDS[+k - 1]);
      else if (k === 'Escape') { defend.sel = null; ui(); }
    });
  }

  window.__game = {
    g: g, isRunning: function () { return started; },
    state: function () { return { mode: mode, picnic: picnic, raid: raid, defend: defend, running: !!run, tut: tut }; },
    begin: begin, addBug: addBug, startRaid: startRaid, finishNow: function () { while (run && !run.sim.over) handleEvents(P.step(run.sim)); if (run) { run.endAt = now; } },
    toDefend: toDefend, toRaid: toRaid
  };
})();

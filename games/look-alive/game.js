// Look Alive: card prototype page. Plays the simulation in sim.js with the data in cards.js and levels.js.
// Plain script (file:// safe). Debug hook: window.__la.
(function () {
  'use strict';
  var Cards = LookAliveCards, Lv = LookAliveLevels, Sim = LookAlive, P = Lv.PLANET, D = LAD;
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function copy(o) { return JSON.parse(JSON.stringify(o)); }
  var reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  var ORDER = [0, 1, 3, 4];
  var GOALS = {
    0: 'Turn one dial until your colony divides at the natives\' pace.',
    1: 'Stay between 5% and 15% of the dish, without the immune system noticing.',
    3: 'Survive the bloom while looking untidy enough to pass.',
    4: 'Survive the food crash. Something has to react for you.'
  };
  var NB_TITLE = { 0: 'Binary fission and the growth curve', 1: 'Carrying capacity and competition', 3: 'Variation between cells', 4: 'Sensing and response' };
  var PACE_NAMES = ['Glacial', 'Sluggish', 'Slow', 'Unhurried', 'Native rate', 'Brisk', 'Quick', 'Eager', 'Frantic'];
  var SLOP_NAMES = ['Spreadsheet', 'Ledger', 'Tidy', 'Careful', 'Casual', 'Relaxed', 'Messy', 'Chaotic', 'Teenager'];
  var STAMPS = ['SUFFICIENTLY BACTERIAL', 'PASSES AS NATIVE', 'NOTHING TO SEE HERE', 'APPROVED BY THE IMMUNE SYSTEM', 'UNREMARKABLE', 'CLEARED FOR COLONISATION'];
  var STAGE_NAMES = ['Calm', 'Curiosity', 'Inspection', 'Response'];
  var CAUSE_WORDS = { 'exposed:growth': 'Cover blown: Growth', 'exposed:waste': 'Cover blown: Waste', 'exposed:casualties': 'Cover blown: Casualties', 'exposed:regularity': 'Cover blown: Regularity',
    overgrew: 'Grew past the band', starved: 'Starved out', below: 'Fell below the band', bust: 'Lost to the bust', bloom: 'Lost to the bloom', band: 'Not enough time in the band' };

  // ---------------------------------------------------------------- storage (every access guarded)
  var KEY = 'bg.look-alive.';
  function load(k, d) { try { var v = localStorage.getItem(KEY + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(KEY + k, JSON.stringify(v)); } catch (e) { /* private window */ } }

  var S = {
    screen: 'list', dish: null, build: null, undo: [], rule: { sensor: null, cmp: null, value: null, action: null },
    cleared: load('cleared', {}), unlocked: load('unlocked', false), pins: load('pins', {}), snapSlots: load('snaps', {}),
    tab: 'parts', note: '', noteUntil: 0,
    scoutCache: {}, preview: null,
    run: null, prev: {}, ghost: null, t: 0, playing: false, speed: 1, resultShown: false, runCount: 0, troubleTick: -1, cardEls: [], shownDish: -1, chipCache: {}
  };

  function defaultBuild() { return { pace: 4, slop: 0, metabolism: 'respiration', parts: [], reflex: null }; }
  function dishObj() { return S.dish == null ? null : Lv.dish(S.dish); }

  // ---------------------------------------------------------------- screens
  function show(name) {
    if (name !== 'list' && S.dish == null) name = 'list';
    if (name === 'run' && !S.run) name = 'build';
    S.screen = name; hidePop();
    ['list', 'scout', 'build', 'run'].forEach(function (s) { $('screen-' + s).classList.toggle('on', s === name); });
    Array.prototype.forEach.call(document.querySelectorAll('#nav button'), function (b) {
      b.classList.toggle('on', b.getAttribute('data-go') === name);
      b.disabled = b.getAttribute('data-go') !== 'list' && (S.dish == null || (b.id === 'navRun' && !S.run));
    });
    var d = dishObj();
    $('dishTitle').textContent = d && name !== 'list' ? 'Dish ' + d.id + ': ' + d.title : '';
    if (name === 'list') renderList();
    if (name === 'scout') enterScout();
    if (name === 'build') renderBuild(true);
    if (name === 'run') enterRun();
  }

  // ---------------------------------------------------------------- dish list
  function isLocked(id) {
    if (S.unlocked) return false;
    var i = ORDER.indexOf(id); return i > 0 && !S.cleared[ORDER[i - 1]];
  }
  function renderList() {
    var box = $('dishList'); box.innerHTML = '';
    ORDER.forEach(function (id) {
      var d = Lv.dish(id), locked = isLocked(id), cleared = !!S.cleared[id];
      var row = el('div', 'dishrow' + (locked ? ' locked' : '') + (cleared ? ' cleared' : ''));
      row.innerHTML = '<div class="num">' + id + '</div><div><div class="t">' + esc(d.title) + '</div><div class="g">' + esc(GOALS[id]) + '</div></div>' +
        '<div class="st">' + (locked ? 'Locked' : cleared ? 'Cleared' : 'Open') + '</div>';
      var b = el('button', 'big', locked ? 'Locked' : id === 0 ? 'Start' : cleared ? 'Again' : 'Start');
      b.disabled = locked; b.setAttribute('data-dish', id);
      b.addEventListener('click', function () { selectDish(id); });
      row.appendChild(b); box.appendChild(row);
    });
  }
  function selectDish(id) {
    S.dish = id; S.build = defaultBuild(); S.undo = []; S.rule = { sensor: null, cmp: null, value: null, action: null };
    S.run = null; S.ghost = null; S.tab = 'parts'; S.preview = null; S.shownDish = -1;
    show(id === 0 ? 'build' : 'scout');
  }

  // ---------------------------------------------------------------- scout
  function scoutData() {
    var id = S.dish;
    if (!S.scoutCache[id]) {
      var sc = Sim.scout(P, dishObj(), { n: 64 }), nn = sc.n * sc.n, rolled = new Float32Array(nn), i;
      for (i = 0; i < nn; i++) rolled[i] = sc.snap.native[(i + 1) % nn];
      sc.A = { native: sc.snap.native, robot: new Float32Array(nn), waste: sc.snap.waste, food: sc.snap.food };
      sc.B = { native: rolled, robot: sc.A.robot, waste: sc.snap.waste, food: sc.snap.food };
      S.scoutCache[id] = sc;
    }
    return S.scoutCache[id];
  }
  function readoutDefs(sc, d) {
    var nrm = sc.normal;
    return [
      { id: 'rate', label: 'Division rate', text: (nrm.rate[0] * 100).toFixed(1) + '% to ' + (nrm.rate[1] * 100).toFixed(1) + '% of cells divide per tick' },
      { id: 'waste', label: 'Waste mix', text: 'Acid A ' + Math.round(nrm.wasteMix * 100) + '%, B ' + Math.round((1 - nrm.wasteMix) * 100) + '%. Sour.' },
      { id: 'var', label: 'Timing variance', text: Math.round(nrm.variance[0] * 100) + '% to ' + Math.round(nrm.variance[1] * 100) + '% spread in division timing' },
      { id: 'band', label: 'Share band', text: Math.round(nrm.share[0] * 100) + '% to ' + Math.round(nrm.share[1] * 100) + '% of the dish' + (d.band.need ? ', ' + Math.round(d.band.need * 100) + '% of the time' : '') }
    ];
  }
  function pinned(id) { return S.pins[S.dish] || (S.pins[S.dish] = {}); }
  function enterScout() {
    var sc = scoutData(), d = dishObj(), box = $('readouts'); box.innerHTML = '';
    readoutDefs(sc, d).forEach(function (r) {
      var on = !!pinned()[r.id], row = el('div', 'readout' + (on ? ' pinned' : ''));
      row.innerHTML = '<div class="rl">' + r.label + '</div><div class="rv">' + esc(r.text) + '</div>';
      var b = el('button', '', on ? 'Pinned' : 'Pin'); b.setAttribute('data-pin', r.id);
      b.addEventListener('click', function () { pinned()[r.id] = !pinned()[r.id]; save('pins', S.pins); enterScout(); });
      row.appendChild(b); box.appendChild(row);
    });
    S.scoutT = 0;
  }
  function drawScout(ts) {
    var sc = scoutData(), H = sc.history, T = sc.T, tk = reduced ? Math.min(T, 60) : Math.floor((ts / 1000 * 12) % (T + 1));
    $('scoutTick').textContent = 'tick ' + tk;
    var wob = reduced ? 0.5 : (Math.sin(ts / 700) + 1) / 2;
    D.drawDish($('scoutDish'), sc.A, sc.B, wob, { n: sc.n, stage: 0, time: ts / 1000, nativeScale: H.density[tk] });
    var E = dishObj().event, marks = [];
    if (E.tick > 0) { marks.push({ t: E.announce, color: '#8a6a20', dash: [3, 3], label: 'announced' }); marks.push({ t: E.tick, color: D.AMB, label: E.type }); }
    var dmin = 9, dmax = 0; H.density.forEach(function (x) { if (x < dmin) dmin = x; if (x > dmax) dmax = x; });
    var lo = Math.floor((dmin - 0.02) * 20) / 20, hi = Math.ceil((dmax + 0.02) * 20) / 20;
    D.chart($('scoutG1'), { T: T, y0: lo, y1: hi, yTicks: [lo, (lo + hi) / 2, hi], yFmt: function (v) { return v.toFixed(2); }, vmarks: marks, head: tk,
      series: [{ data: function (i) { return H.density[i]; }, n: H.density.length, color: D.VIO, dimTail: true, upTo: tk }] });
    var nr = sc.normal.rate;
    D.chart($('scoutG2'), { T: T, y0: 0.04, y1: 0.10, yTicks: [0.04, 0.07, 0.10], yFmt: function (v) { return (v * 100).toFixed(0) + '%'; }, vmarks: marks, head: tk,
      bands: [{ lo: nr[0], hi: nr[1], fill: 'rgba(167,139,250,.14)', line: D.VIO, label: 'normal range' }],
      series: [{ data: function (i) { return H.rate[i]; }, n: H.rate.length, color: D.VIO, dimTail: true, upTo: tk }] });
  }

  // ---------------------------------------------------------------- build: data helpers
  function mutate(fn) {
    S.undo.push(copy(S.build)); if (S.undo.length > 60) S.undo.shift();
    fn(S.build); renderBuild(false);
  }
  function setNote(msg) { S.note = msg; S.noteUntil = performance.now() + 3000; renderProblems(); }
  function chipsFor(d, id) { // effect chips for a card on its own, straight from predict()
    var key = d.id + ':' + id;
    if (!S.chipCache[key]) {
      var c = Cards.part(id), b = { pace: 4, slop: 0, metabolism: c.kind === 'metabolism' ? id : 'respiration', parts: c.kind === 'part' ? [id] : [], reflex: null };
      var pr = Sim.predict(d, b), out = [];
      pr.cards.forEach(function (cc) { if (cc.id === id) out = cc.chips; });
      S.chipCache[key] = out;
    }
    return S.chipCache[key];
  }
  function chipClass(t) {
    if (/Regularity up|No waste|suspicion up|Waste differs|tell/i.test(t)) return 'up';
    if (/Toughness|Waste matches|Regularity down|No suspicion|Almost nothing dies/i.test(t)) return 'good';
    return '';
  }
  function counterparts(id) {
    var out = [];
    Cards.pairs.forEach(function (p) { if (p[0] === id) out.push(p[1]); else if (p[1] === id) out.push(p[0]); });
    return out;
  }
  function machineCount(b) {
    var n = 0; if (Cards.part(b.metabolism) && Cards.part(b.metabolism).shelf === 'machine') n++;
    (b.parts || []).forEach(function (id) { var c = Cards.part(id); if (c && c.shelf === 'machine') n++; });
    if (b.reflex && b.reflex.kind === 'machine') n++;
    return n;
  }
  function buildSummary(b) {
    if (!b) return 'empty';
    var s = 'P' + b.pace + ' S' + b.slop + ' ' + (Cards.part(b.metabolism) || { name: '?' }).name;
    (b.parts || []).forEach(function (id) { s += ', ' + Cards.part(id).name; });
    if (b.reflex) s += ', ' + (b.reflex.kind === 'bio' ? Cards.bio(b.reflex.id).name : 'rule');
    return s;
  }

  // ---------------------------------------------------------------- build: cards
  function cardEl(c, d) {
    var mach = c.shelf === 'machine', sel = false;
    var w = el('div', 'card ' + (mach ? 'mach' : 'bio')); w.setAttribute('data-id', c.id);
    var chips = chipsFor(d, c.id).map(function (t) { return '<span class="chip ' + chipClass(t) + '">' + esc(t) + '</span>'; }).join('');
    var cps = counterparts(c.id), cp = '';
    if (cps.length) cp = 'Counterpart: ' + cps.map(function (id) { var cc = Cards.part(id), ok = d.allowed.parts.indexOf(id) >= 0 || d.allowed.metabolism.indexOf(id) >= 0; return '<button type="button" data-cp="' + id + '"' + (ok ? '' : ' disabled title="Not on this dish"') + '>' + esc(cc.name) + '</button>'; }).join('');
    else cp = 'No counterpart';
    w.innerHTML = '<div class="in"><div class="c-head"><b>' + esc(c.name) + '</b>' + (mach ? '<span class="rcost">Reg +' + (c.fx.reg || 0).toFixed(1) + '</span>' : '') + '<span class="cost">Energy ' + c.energy + '</span></div>' +
      '<p class="real"><i>Real</i>' + esc(c.real) + '</p><p class="game"><i>Game</i>' + esc(c.game) + '</p><div class="chips">' + chips + '</div><div class="cp">' + cp + '</div></div>';
    w.addEventListener('click', function (e) {
      var cpb = e.target.closest ? e.target.closest('button[data-cp]') : null;
      if (cpb) { e.stopPropagation(); flashCard(cpb.getAttribute('data-cp')); return; }
      pickCard(c.id);
    });
    return w;
  }
  function flashCard(id) {
    var e = document.querySelector('#screen-build .card[data-id="' + id + '"]');
    if (!e) return;
    if (S.tab !== 'parts') { S.tab = 'parts'; renderBuild(false); e = document.querySelector('#screen-build .card[data-id="' + id + '"]'); }
    e.scrollIntoView({ block: 'nearest' }); e.classList.remove('hl'); void e.offsetWidth; e.classList.add('hl');
  }
  function pickCard(id) {
    var d = dishObj(), c = Cards.part(id);
    if (c.kind === 'metabolism') { if (S.build.metabolism !== id) mutate(function (b) { b.metabolism = id; }); return; }
    var has = S.build.parts.indexOf(id) >= 0;
    if (has) mutate(function (b) { b.parts.splice(b.parts.indexOf(id), 1); });
    else if (S.build.parts.length >= d.partSlots) setNote('All ' + d.partSlots + ' part slots are full. Click a filled slot to empty it.');
    else mutate(function (b) { b.parts.push(id); });
  }
  function renderShelves() {
    var d = dishObj(), bio = $('shelfBio'), mach = $('shelfMach'); bio.innerHTML = ''; mach.innerHTML = '';
    var ids = d.allowed.metabolism.concat(d.allowed.parts);
    ids.forEach(function (id) { var c = Cards.part(id); (c.shelf === 'machine' ? mach : bio).appendChild(cardEl(c, d)); });
    // reflex tab
    var rb = $('shelfReflex'); rb.innerHTML = '';
    d.allowed.bio.forEach(function (id) {
      var c = Cards.bio(id), w = el('div', 'card bio'); w.setAttribute('data-id', id);
      w.innerHTML = '<div class="in"><div class="c-head"><b>' + esc(c.name) + '</b><span class="cost">Energy 0</span></div><p class="real"><i>Real</i>' + esc(c.real) + '</p>' +
        '<p class="game"><i>Rule</i>' + esc(c.sentence) + '</p><div class="chips"><span class="chip good">Senses locally, a few ticks late</span><span class="chip good">Noisy reading</span><span class="chip good">No suspicion</span></div><div class="cp">Counterpart: the Machine rule</div></div>';
      w.addEventListener('click', function () {
        var on = S.build.reflex && S.build.reflex.kind === 'bio' && S.build.reflex.id === id;
        mutate(function (b) { b.reflex = on ? null : { kind: 'bio', id: id }; });
      });
      rb.appendChild(w);
    });
    renderRuleBox();
  }

  // ---------------------------------------------------------------- machine rule: tap-to-fill sentence
  function ruleComplete() { var r = S.rule; return r.sensor && r.cmp && r.value != null && r.action; }
  function ruleBlank(kind, text, filled) { return '<button type="button" class="blank' + (filled ? '' : ' empty') + '" data-rule="' + kind + '">' + esc(text) + '</button>'; }
  function renderRuleBox() {
    var d = dishObj(), box = $('ruleBox'), r = S.rule; if (!d.reflexSlot) { box.innerHTML = ''; return; }
    var sn = r.sensor ? Cards.sensor(r.sensor) : null, ac = r.action ? Cards.action(r.action) : null;
    var inst = S.build.reflex && S.build.reflex.kind === 'machine';
    var sent = 'When ' + ruleBlank('sensor', sn ? sn.name : 'sensor', !!sn) + ' is ' + ruleBlank('cmp', r.cmp ? (r.cmp === 'lt' ? 'less than' : 'more than') : 'more / less', !!r.cmp) + ' ' +
      ruleBlank('value', r.value != null ? r.value + (sn && sn.unit ? ' ' + sn.unit : '') : 'value', r.value != null) + ', then ' + ruleBlank('action', ac ? ac.name : 'action', !!ac) + '.';
    var plain = 'When ' + (sn ? sn.name : '___') + ' is ' + (r.cmp ? (r.cmp === 'lt' ? 'less than' : 'more than') : '___') + ' ' + (r.value != null ? r.value : '___') + ', then ' + (ac ? ac.name : '___') + '.';
    var note = (sn ? sn.note + ' ' : '') + (ac ? ac.note : '');
    box.innerHTML = '<div class="card mach tall' + (inst ? ' sel' : '') + '" style="height:auto;cursor:default"><div class="in rulecard" style="height:auto">' +
      '<div class="c-head"><b>Machine rule</b><span class="rcost">Reg +0.2, more each time it fires</span><span class="cost">Energy 0</span></div>' +
      '<div class="rulesent">' + sent + '</div>' +
      '<div class="rulereal"><i class="dim">In plain English:</i> ' + esc(plain) + '</div>' +
      '<div class="rulereal"><i class="dim">Real:</i> No cell reads exact numbers instantly. Global readings, like your share of the dish or the immune system\'s suspicion, are things no cell could know.</div>' +
      '<div class="rulenote">' + esc(note) + '</div>' +
      '<div class="rulebtns"><button type="button" id="ruleUse"' + (ruleComplete() && !inst ? '' : ' disabled') + '>Use this rule</button><button type="button" id="ruleClear"' + (inst ? '' : ' disabled') + '>Remove rule</button></div></div></div>';
    Array.prototype.forEach.call(box.querySelectorAll('[data-rule]'), function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); openRulePop(b, b.getAttribute('data-rule')); });
    });
    $('ruleUse').addEventListener('click', installRule);
    $('ruleClear').addEventListener('click', function () { mutate(function (b) { b.reflex = null; }); });
  }
  function ruleChoose(kind, val) {
    var r = S.rule;
    if (kind === 'sensor') { r.sensor = val; var sn = Cards.sensor(val); if (sn.values.indexOf(r.value) < 0) r.value = null; }
    else r[kind] = val;
    var inst = S.build.reflex && S.build.reflex.kind === 'machine';
    if (ruleComplete() && inst) installRule(); else renderRuleBox();
    renderBuild(false);
  }
  function installRule() {
    if (!ruleComplete()) return;
    var r = S.rule;
    mutate(function (b) { b.reflex = { kind: 'machine', sensor: r.sensor, cmp: r.cmp, value: r.value, action: r.action }; });
  }
  function openRulePop(btn, kind) {
    var d = dishObj(), items = [], r = S.rule;
    if (kind === 'sensor') d.allowed.sensors.forEach(function (id) { var s = Cards.sensor(id); items.push({ label: s.name + (s.global ? '  (global)' : ''), note: s.note, v: id }); });
    else if (kind === 'cmp') items = [{ label: 'more than', v: 'gt' }, { label: 'less than', v: 'lt' }];
    else if (kind === 'value') {
      if (!r.sensor) { setNote('Pick a sensor first.'); return; }
      Cards.sensor(r.sensor).values.forEach(function (v) { items.push({ label: String(v) + (Cards.sensor(r.sensor).unit ? ' ' + Cards.sensor(r.sensor).unit : ''), v: v }); });
    } else d.allowed.actions.forEach(function (id) { var a = Cards.action(id); items.push({ label: a.name, note: a.note, v: id }); });
    openPop(btn, items, function (v) { ruleChoose(kind, v); });
  }
  var popOwner = null;
  function openPop(anchor, items, pick) {
    var pop = $('pop'); pop.innerHTML = '';
    items.forEach(function (it) {
      var b = el('button', '', esc(it.label) + (it.note ? '<small>' + esc(it.note) + '</small>' : '')); b.setAttribute('data-v', it.v);
      b.addEventListener('click', function (e) { e.stopPropagation(); hidePop(); pick(it.v); });
      pop.appendChild(b);
    });
    var rc = anchor.getBoundingClientRect();
    pop.hidden = false; pop.style.left = Math.min(rc.left, window.innerWidth - 260) + 'px';
    var top = rc.bottom + 4; if (top + 300 > window.innerHeight) top = Math.max(50, rc.top - Math.min(300, pop.offsetHeight) - 4);
    pop.style.top = top + 'px'; popOwner = anchor;
  }
  function hidePop() { $('pop').hidden = true; popOwner = null; }
  document.addEventListener('click', function (e) {
    if (!$('pop').hidden && !$('pop').contains(e.target) && e.target !== popOwner) hidePop();
    var b = e.target.closest ? e.target.closest('button') : null; if (b && b.type === 'button' && b.id !== 'x') b.blur();
  });

  // ---------------------------------------------------------------- build: render
  function renderDials(d) {
    var box = $('dials'); box.innerHTML = '';
    d.dials.forEach(function (k) {
      var w = el('div', 'dial'), names = k === 'pace' ? PACE_NAMES : SLOP_NAMES;
      w.innerHTML = '<div class="dh"><span>' + (k === 'pace' ? 'Pace' : 'Authentic Sloppiness') + '</span><span>' + (k === 'pace' ? 'slow to fast' : 'Spreadsheet to Teenager') + '</span></div><div class="ticks ' + k + '"></div><div class="dn"></div><div class="de"></div>';
      var tk = w.querySelector('.ticks');
      for (var i = 0; i <= 8; i++) {
        (function (i) { var b = el('button', '', String(i)); b.type = 'button'; b.setAttribute('data-dial', k + i); b.title = names[i];
          b.addEventListener('click', function () { if (S.build[k] !== i) mutate(function (bb) { bb[k] = i; }); }); tk.appendChild(b); })(i);
      }
      box.appendChild(w);
    });
  }
  function updateDials(d, pr) {
    Array.prototype.forEach.call($('dials').querySelectorAll('.dial'), function (w, idx) {
      var k = d.dials[idx], v = S.build[k], names = k === 'pace' ? PACE_NAMES : SLOP_NAMES;
      Array.prototype.forEach.call(w.querySelectorAll('button'), function (b, i) { b.classList.toggle('on', i === v); });
      w.querySelector('.dn').textContent = v + ': ' + names[v];
      w.querySelector('.de').textContent = (k === 'pace' ? pr.pace : pr.slop).join(' · ');
    });
  }
  function renderSlots(d) {
    var b = S.build, mc = Cards.part(b.metabolism);
    var sm = $('slotMet'); sm.className = 'slot' + (mc ? ' full ' + (mc.shelf === 'machine' ? 'mach' : 'bio') : '');
    sm.innerHTML = '<span class="k">Metab.</span><span class="v">' + (mc ? esc(mc.name) : 'Pick one metabolism') + '</span>' + (mc ? '<span class="cst">E' + mc.energy + '</span>' : '');
    sm.onclick = null;
    if (d.id === 0) { sm.className = 'slot off'; sm.innerHTML = '<span class="k">Metab.</span><span class="v">Fixed on this dish</span>'; }
    var sp = $('slotParts'); sp.innerHTML = '';
    for (var i = 0; i < d.partSlots; i++) {
      var id = b.parts[i], c = id ? Cards.part(id) : null, s = el('div', 'slot' + (c ? ' full ' + (c.shelf === 'machine' ? 'mach' : 'bio') : ''));
      s.innerHTML = '<span class="k">Part ' + (i + 1) + '</span><span class="v">' + (c ? esc(c.name) : 'Empty') + '</span>' + (c ? '<span class="cst">E' + c.energy + '</span>' : '');
      if (c) (function (id) { s.addEventListener('click', function () { mutate(function (bb) { bb.parts.splice(bb.parts.indexOf(id), 1); }); }); })(id);
      sp.appendChild(s);
    }
    var sr = $('slotReflex'), rf = b.reflex;
    if (!d.reflexSlot) { sr.className = 'slot off'; sr.innerHTML = '<span class="k">Reflex</span><span class="v">' + (d.id === 0 ? 'Not on this dish' : 'Unlocks on dish 4') + '</span>'; sr.onclick = null; }
    else if (!rf) { sr.className = 'slot'; sr.innerHTML = '<span class="k">Reflex</span><span class="v">Empty. Open the Reflex tab.</span>'; sr.onclick = function () { S.tab = 'reflex'; renderBuild(false); }; }
    else {
      var txt = rf.kind === 'bio' ? Cards.bio(rf.id).name + ': ' + Cards.bio(rf.id).sentence : Cards.ruleText(rf);
      sr.className = 'slot full ' + (rf.kind === 'bio' ? 'bio' : 'mach'); sr.title = txt;
      sr.innerHTML = '<span class="k">Reflex</span><span class="v">' + esc(txt) + '</span>';
      sr.onclick = function () { mutate(function (bb) { bb.reflex = null; }); };
    }
    sp.style.display = d.partSlots ? '' : 'none';
    $('slotMet').parentNode.querySelector('.energy').style.display = d.energy ? '' : 'none';
  }
  function renderEnergy(d, pr) {
    var bar = $('energyBar'); bar.innerHTML = '';
    var used = pr.energy.used, max = d.energy;
    for (var i = 0; i < Math.max(max, used); i++) bar.appendChild(el('i', i < used ? (i >= max ? 'over' : 'used') : ''));
    $('energyNum').textContent = used + '/' + max;
  }
  function renderProblems() {
    var d = dishObj(); if (!d || !S.build) return;
    var v = Sim.validate(d, S.build), box = $('problems'), html = '';
    if (S.note && performance.now() < S.noteUntil) html += '<div>' + esc(S.note) + '</div>';
    v.problems.forEach(function (p) { html += '<div>' + esc(p) + '</div>'; });
    if (v.ok && !html) html = '<div class="ok">Legal build. Ready to run.</div>';
    box.innerHTML = html; $('runBtn').disabled = !v.ok;
    return v;
  }
  function renderPredict(d, pr) {
    var ul = $('predList'); ul.innerHTML = '';
    var lines = [];
    if (d.id === 0) lines = pr.pace.slice();
    else {
      lines.push('Energy ' + pr.energy.used + ' of ' + d.energy + ' used');
      pr.totals.forEach(function (t) { lines.push(t); });
    }
    lines.forEach(function (t) { var li = el('li', /Growth suspicion|Factory|Slower|Machine parts|Waste: none|Reads something/.test(t) ? 'warn' : '', esc(t)); ul.appendChild(li); });
  }
  var matchRun = null;
  function renderMatch() {
    var d = dishObj(); if (d.id !== 0) return;
    matchRun = Sim.play(P, d, S.build, { n: 20 });
    var H = matchRun.H, T = matchRun.T, sumR = 0, c = 0, t;
    for (t = 20; t <= T; t++) { sumR += (H.births[t] / H.rob[t]) / H.nrate[t]; c++; }
    var ratio = sumR / c, off = Math.abs(ratio - 1) * 100;
    $('matchNote').innerHTML = off < 4 ? '<b style="color:#2dd4a7">On the ghost.</b> Within ' + off.toFixed(0) + '%. Press RUN.' : 'Your units divide ' + off.toFixed(0) + '% ' + (ratio > 1 ? 'faster' : 'slower') + ' than the natives. Move the dial ' + (ratio > 1 ? 'down' : 'up') + '.';
  }
  function drawMatch() {
    var d = dishObj(); if (!d || d.id !== 0 || !matchRun) return;
    var H = matchRun.H;
    D.chart($('matchGraph'), { T: matchRun.T, y0: 0.04, y1: 0.11, yTicks: [0.04, 0.06, 0.08, 0.10], yFmt: function (v) { return (v * 100).toFixed(0) + '%'; }, padB: 16,
      series: [{ data: function (i) { return H.nrate[i]; }, n: matchRun.T + 1, color: D.VIO, width: 8, alpha: 0.35 },
        { data: function (i) { return i < 1 ? NaN : H.births[i] / H.rob[i]; }, n: matchRun.T + 1, color: D.PINK, width: 2 }] });
  }
  function renderBuild(full) {
    var d = dishObj(); if (!d) return;
    if (full || S.shownDish !== d.id) {
      S.shownDish = d.id; renderDials(d); renderShelves(); renderSnaps();
      $('tabReflex').style.display = d.reflexSlot ? '' : 'none';
    }
    if (!d.reflexSlot && S.tab === 'reflex') S.tab = 'parts';
    var isTut = d.id === 0;
    $('tabParts').hidden = isTut || S.tab !== 'parts'; $('tabReflexBody').hidden = isTut || S.tab !== 'reflex'; $('matchBox').hidden = !isTut;
    $('buildTabs').style.display = isTut ? 'none' : '';
    Array.prototype.forEach.call($('buildTabs').querySelectorAll('button'), function (b) { b.classList.toggle('on', b.getAttribute('data-tab') === S.tab); });
    var pr = Sim.predict(d, S.build);
    renderSlots(d); renderEnergy(d, pr); updateDials(d, pr); renderPredict(d, pr); renderProblems();
    // card selection state
    Array.prototype.forEach.call(document.querySelectorAll('#screen-build .card[data-id]'), function (e) {
      var id = e.getAttribute('data-id'), b = S.build, on = b.metabolism === id || b.parts.indexOf(id) >= 0 || (b.reflex && b.reflex.kind === 'bio' && b.reflex.id === id);
      e.classList.toggle('sel', !!on);
    });
    if (S.tab === 'reflex') renderRuleBox();
    $('undo').disabled = !S.undo.length;
    $('portraitTag').textContent = machineCount(S.build) ? machineCount(S.build) + ' Machine seam' + (machineCount(S.build) > 1 ? 's' : '') : 'Looks organic';
    if (isTut) renderMatch();
    renderPinbar($('pinbarB'));
  }
  function renderPinbar(box) {
    var d = dishObj(), pins = S.pins[S.dish] || {}, sc = S.scoutCache[S.dish], html = '';
    if (d.id === 0) html = '<span>Match the ghost: the violet line is how fast the natives divide.</span>';
    else {
      if (sc) readoutDefs(sc, d).forEach(function (r) { if (pins[r.id]) html += '<span class="pinchip" title="' + esc(r.text) + '">' + esc(r.label + ': ' + r.text) + '</span>'; });
      if (!html) html = '<span>Nothing pinned. Pin a normal range in Scout and it stays here.</span>';
    }
    box.innerHTML = html;
  }
  function renderSnaps() {
    var box = $('snapSlots'), d = dishObj(), slots = S.snapSlots[d.id] || (S.snapSlots[d.id] = [null, null, null]); box.innerHTML = '';
    for (var i = 0; i < 3; i++) {
      (function (i) {
        var row = el('div', 'snaprow'), sp = el('span', '', slots[i] ? esc(buildSummary(slots[i])) : 'Slot ' + (i + 1) + ': empty'); sp.title = slots[i] ? buildSummary(slots[i]) : '';
        var sv = el('button', '', 'Save'), ld = el('button', '', 'Load'); ld.disabled = !slots[i]; sv.setAttribute('data-snap', 'save' + i); ld.setAttribute('data-snap', 'load' + i);
        sv.addEventListener('click', function () { slots[i] = copy(S.build); S.snapSlots[d.id] = slots; save('snaps', S.snapSlots); renderSnaps(); });
        ld.addEventListener('click', function () { if (!slots[i]) return; mutate(function (b) { var n = copy(slots[i]); b.pace = n.pace; b.slop = n.slop; b.metabolism = n.metabolism; b.parts = n.parts; b.reflex = n.reflex; }); syncRuleFromBuild(); });
        row.appendChild(sp); row.appendChild(sv); row.appendChild(ld); box.appendChild(row);
      })(i);
    }
  }
  function syncRuleFromBuild() {
    var rf = S.build.reflex; if (rf && rf.kind === 'machine') { S.rule = { sensor: rf.sensor, cmp: rf.cmp, value: rf.value, action: rf.action }; }
    renderRuleBox();
  }

  // ---------------------------------------------------------------- run
  function trouble(run) {
    var H = run.H; for (var t = 1; t <= run.T; t++) if (H.stage[t] > H.stage[t - 1]) return t;
    return -1;
  }
  function doRun() {
    var d = dishObj(); if (!d) return null;
    var v = Sim.validate(d, S.build); if (!v.ok) { renderProblems(); return null; }
    S.ghost = S.prev[d.id] || null;
    var b = copy(S.build), run = Sim.play(P, d, b, { n: 64, snapEvery: 10 });
    run.v = Sim.verdict(run); run.autopsy = run.v.win ? null : Sim.autopsy(run);
    if (run.autopsy) run.autopsy.text = run.autopsy.text.replace(/your your/g, 'your');  // sim.js prints "your your rule"
    S.run = run; S.runCount++; S.prev[d.id] = { share: run.H.share, total: run.H.total };
    S.t = 0; S.playing = true; S.resultShown = false; S.troubleTick = trouble(run);
    if (run.v.win) { S.cleared[d.id] = true; save('cleared', S.cleared); }
    closeOverlay(); show('run');
    return run;
  }
  function stripCards(run) {
    var box = $('cardStrip'); box.innerHTML = ''; S.cardEls = [];
    var b = run.build;
    function add(id, name, mach, tag, kind) { var e = el('div', 'scard' + (mach ? ' mach' : ''), esc(name) + '<small>' + tag + '</small>'); box.appendChild(e); S.cardEls.push({ id: id, e: e, kind: kind, tag: tag }); }
    var mc = Cards.part(b.metabolism); add(mc.id, mc.name, mc.shelf === 'machine', 'always on', 'const');
    b.parts.forEach(function (id) {
      var c = Cards.part(id), tag = { quorum: 'acts when crowded', radio: 'acts to hold share', wall: 'acts in trouble', repair: 'acts in trouble' }[id] || 'always on';
      add(id, c.name, c.shelf === 'machine', tag, { quorum: 'q', radio: 'r', wall: 't', repair: 't' }[id] || 'const');
    });
    if (b.reflex) add('reflex', b.reflex.kind === 'bio' ? Cards.bio(b.reflex.id).name : 'Machine rule', b.reflex.kind === 'machine', 'armed', 'fire');
    if (b.reflex) { var mx = 0; for (var t = 0; t <= run.T; t++) if (run.H.fires[t] > mx) mx = run.H.fires[t]; run.fired = mx >= 0.03; }
  }
  function enterRun() {
    var run = S.run, d = dishObj(); if (!run) return;
    $('scrub').max = run.T; stripCards(run);
    var keyHtml = '';
    D.CH.forEach(function (c) {
      var bg = { stripes: 'repeating-linear-gradient(135deg,' + c.color + ' 0 2px,#10060a 2px 4px)', dots: 'radial-gradient(' + c.color + ' 1.3px,#0a0a05 1.7px) 0 0/4px 4px',
        cross: 'repeating-linear-gradient(45deg,' + c.color + ' 0 1px,#0a0814 1px 4px),repeating-linear-gradient(-45deg,' + c.color + ' 0 1px,transparent 1px 4px)',
        zigzag: 'repeating-linear-gradient(90deg,' + c.color + ' 0 1px,#04101a 1px 3px)' }[c.pat];
      keyHtml += '<span><i style="background:' + bg + ';border:1px solid ' + c.color + '"></i>' + c.name + '</span>';
    });
    $('ribbonKey').innerHTML = keyHtml + '<span style="margin-left:auto">cause ribbon: the leading channel each tick</span>';
    var imm = $('immune'); imm.innerHTML = '<div class="stg" data-st="1">Curiosity</div><div class="stg" data-st="2">Inspection</div><div class="stg" data-st="3">Response</div><div class="kill" id="killTxt"></div>';
    S.lastStage = -1; S.speedBtns = true;
    renderPinbar($('pinbarR'));
    $('playBtn').textContent = S.playing ? 'Pause' : 'Play';
    $('skipBtn').disabled = false;
  }
  function seek(t) { var run = S.run; if (!run) return; S.t = Math.max(0, Math.min(run.T, t)); S.resultShown = S.resultShown || false; }
  function setPlaying(p) {
    if (!S.run) return;
    if (p && S.t >= S.run.T - 0.001) { S.t = 0; S.resultShown = false; }
    S.playing = p; $('playBtn').textContent = p ? 'Pause' : 'Play';
  }
  function skipToTrouble() {
    var run = S.run; if (!run) return;
    var t = S.troubleTick;
    if (t < 0) { if (run.autopsy && run.autopsy.from) t = run.autopsy.from; else { flashSkip('No trouble in this run'); return; } }
    S.playing = false; S.t = t; $('playBtn').textContent = 'Play';
  }
  function flashSkip(msg) { var b = $('skipBtn'), old = 'Skip to trouble'; b.textContent = msg; setTimeout(function () { b.textContent = old; }, 1600); }
  function acting(card, run, ti) {
    var H = run.H, E = run.dish.event;
    switch (card.kind) {
      case 'q': return H.qsig[ti] > 0.02;
      case 'r': return Math.abs(H.radioMult[ti] - 1) > 0.02;
      case 't': return (E.tick > 0 && ti >= E.tick && ti <= E.tick + Math.max(E.dur, 20)) || H.kill[ti] > 0.002;
      case 'fire': return H.fires[ti] > 0.03;
      default: return false;
    }
  }
  function drawRun(ts) {
    var run = S.run; if (!run) return;
    var H = run.H, T = run.T, ti = Math.min(T, Math.floor(S.t)), d = run.dish;
    var si = Math.min(run.snaps.length - 1, Math.floor(S.t / 10)), A = run.snaps[si], B = run.snaps[Math.min(run.snaps.length - 1, si + 1)];
    var f = si >= run.snaps.length - 1 ? 0 : (S.t - si * 10) / 10;
    D.drawDish($('runDish'), A, B, f, { n: run.n, stage: H.stage[ti], kill: H.kill[ti], time: ts / 1000 });
    var vals = { growth: H.susp.growth[ti], waste: H.susp.waste[ti], casualties: H.susp.casualties[ti], regularity: H.susp.regularity[ti] };
    D.instruments($('instruments'), vals);
    // immune stage boxes
    var stg = H.stage[ti];
    if (stg !== S.lastStage) {
      S.lastStage = stg;
      Array.prototype.forEach.call($('immune').querySelectorAll('.stg'), function (e) { var n = +e.getAttribute('data-st'); e.classList.toggle('on', n <= stg); e.classList.toggle('s3', n === 3 && stg >= 3); });
    }
    var kt = $('killTxt'), ktxt = stg >= 3 ? 'Killing ' + (H.kill[ti] * 100).toFixed(1) + '% of you per tick' : stg >= 1 ? 'Watching. Nothing dies yet.' : 'The immune system has not noticed you.';
    if (kt.textContent !== ktxt) { kt.textContent = ktxt; kt.classList.toggle('hot', stg >= 3); }
    // graphs
    var ymax = 0.3, t; for (t = 0; t <= T; t++) if (H.share[t] > ymax) ymax = Math.min(1, Math.ceil(H.share[t] * 10) / 10);
    var band = d.band, E = d.event, marks = [];
    if (E.tick > 0) { marks.push({ t: E.announce, color: '#8a6a20', dash: [3, 3], label: 'announced' }); marks.push({ t: E.tick, color: D.AMB, label: E.type }); }
    var pin = S.resultShown && run.autopsy ? { from: run.autopsy.from, to: run.autopsy.to } : null;
    var g = S.ghost;
    var ser = [{ data: function (i) { return H.share[i]; }, n: T + 1, color: D.PINK, dimTail: true, upTo: S.t, width: 2 }];
    if (g) ser.unshift({ data: function (i) { return g.share[i]; }, n: T + 1, color: D.PINK, dash: [4, 4], alpha: 0.45, width: 1.2 });
    var bands = d.cannotFail ? [] : [{ lo: band.lo, hi: band.hi, fill: 'rgba(207,227,255,.09)', line: '#9fb4d8', label: 'band ' + Math.round(band.lo * 100) + '% to ' + Math.round(band.hi * 100) + '%' }];
    var m = D.chart($('gShare'), { T: T, y0: 0, y1: ymax, yTicks: [0, 0.1, 0.2, 0.3].filter(function (v) { return v <= ymax; }), yFmt: function (v) { return Math.round(v * 100) + '%'; }, bands: bands, vmarks: marks, series: ser, head: S.t, pin: pin, padB: 14 });
    if (m) D.ribbon($('ribbon'), run, m.L, m.R);
    var sy = 10; for (t = 0; t <= T; t++) if (H.total[t] > sy) sy = Math.ceil(H.total[t]);
    var ser2 = [{ data: function (i) { return H.total[i]; }, n: T + 1, color: D.GRN, dimTail: true, upTo: S.t, width: 2 }];
    if (g) ser2.unshift({ data: function (i) { return g.total[i]; }, n: T + 1, color: D.GRN, dash: [4, 4], alpha: 0.45, width: 1.2 });
    D.chart($('gSusp'), { T: T, y0: 0, y1: sy, yTicks: [0, 4, 8], hlines: [{ y: 1.5, color: '#3f9d86', label: 'Curiosity' }, { y: 4.5, color: '#d9a13a', label: 'Inspection' }, { y: 8, color: D.RED, label: 'Response' }], vmarks: marks.length ? [marks[marks.length - 1]] : [], series: ser2, head: S.t, pin: pin, padB: 14 });
    // card strip
    S.cardEls.forEach(function (c) {
      var on = c.kind !== 'const' && acting(c, run, ti);
      c.e.classList.toggle('flash', on);
      if (c.kind === 'fire') {
        var never = S.t >= T - 0.5 && !run.fired, tag = never ? 'never triggered' : on ? 'FIRING' : (S.t >= T - 0.5 ? 'fired ' + (function () { var n = 0; for (var q = 0; q <= T; q++) if (H.fires[q] > 0.03) n++; return n; })() + ' ticks' : 'armed');
        c.e.classList.toggle('never', never); if (c.e.lastChild.textContent !== tag) c.e.lastChild.textContent = tag;
      }
    });
    $('scrub').value = S.t; $('tickNum').textContent = 'tick ' + ti + '/' + T;
  }

  // ---------------------------------------------------------------- result overlay
  function closeOverlay() { $('overlay').hidden = true; }
  function coverName(b) {
    var genus = { respiration: 'Coccus', fermentation: 'Bacillus', fuelcell: 'Vibrio' }[b.metabolism] || 'Coccus';
    var epi = [], bio = { stringent: 'parcus', chemotaxis: 'errans', sos: 'reparans' }, ptx = { wall: 'armatus', quorum: 'sociabilis', errors: 'varius', flagellum: 'natans', clock: 'horarius', radio: 'radiatus', copier: 'perfectus', repair: 'reparatus' };
    if (b.reflex) epi.push(b.reflex.kind === 'bio' ? bio[b.reflex.id] : 'computans');
    b.parts.forEach(function (id) { epi.push(ptx[id]); });
    if (machineCount(b)) epi.push('suspiciosus');
    if (b.slop >= 6) epi.push('adolescens'); if (b.pace < 4) epi.push('modestus'); if (b.pace > 4) epi.push('festinans');
    if (b.metabolism === 'fermentation') epi.push('acidophilus');
    if (!epi.length) epi.push('normalis');
    var h = D.hash(JSON.stringify(b)), sp = epi[h % epi.length];
    return '<i>' + genus + ' ' + sp + '</i>';
  }
  function showResult() {
    var run = S.run, d = dishObj(); if (!run) return;
    S.resultShown = true; var v = run.v, ov = $('overlay'), html;
    if (v.win) {
      var stamp = d.id === 0 ? 'GHOST MATCHED' : STAMPS[D.hash(JSON.stringify(run.build)) % STAMPS.length];
      var next = ORDER[ORDER.indexOf(d.id) + 1];
      html = '<div class="winwrap"><div class="paper memo"><h2>CLEARED</h2><div class="stampbox"><div class="stamp' + (reduced ? '' : ' slam') + '" id="stamp">' + stamp + '</div></div>' +
        '<div class="covername" id="coverName">' + coverName(run.build) + '</div><div class="covercap">Registered cover name</div>' +
        '<div class="row"><b>Dish</b><span>' + d.id + ': ' + esc(d.title) + '</span></div>' +
        (d.cannotFail ? '' : '<div class="row"><b>Record</b><span>In the band ' + Math.round(v.bandFrac * 100) + '% of the time (needs ' + Math.round(d.band.need * 100) + '%). Final share ' + (v.finalShare * 100).toFixed(1) + '%. Highest immune stage: ' + STAGE_NAMES[v.maxStage] + '.</span></div>') +
        '<div class="pbtns"><button type="button" data-act="retry">Retry</button><button type="button" data-act="build">Back to build</button><button type="button" data-act="watch">Watch replay</button>' +
        (next != null ? '<button type="button" data-act="next">Next dish</button>' : '') + '<button type="button" data-act="list">Dish list</button></div></div>' +
        '<div class="paper notebook"><h3>Stolen from the lab: notebook page ' + (ORDER.indexOf(d.id) + 1) + '</h3><h4>' + esc(NB_TITLE[d.id]) + '</h4><p>' + esc(d.notebook) + '</p><div class="scrawl">(Do not let them see you have read this.)</div></div></div>';
    } else {
      var a = run.autopsy;
      html = '<div class="paper memo"><h2>MEMORANDUM</h2><div class="row"><b>From</b><span>Office of the Immune Coroner</span></div><div class="row"><b>Re</b><span>Colony, dish ' + d.id + ' (' + esc(d.title) + '), run ' + S.runCount + '</span></div>' +
        '<div class="row"><b>Finding</b><span class="head">' + esc(a.text) + '</span></div>' +
        '<div class="row"><b>Cause</b><span>' + esc(CAUSE_WORDS[a.cause] || a.cause) + '</span></div>' +
        '<div class="row"><b>Also</b><span class="sec">' + (a.second ? esc(a.second.text) : 'No second cause of note.') + '</span></div>' +
        '<div class="row"><b>Window</b><span>Ticks ' + a.from + ' to ' + a.to + '. Marked on the timeline.</span></div>' +
        '<div class="row"><b>Record</b><span>In the band ' + Math.round(v.bandFrac * 100) + '% of the time (needs ' + Math.round(d.band.need * 100) + '%). Final share ' + (v.finalShare * 100).toFixed(1) + '%. Highest immune stage: ' + STAGE_NAMES[v.maxStage] + '.</span></div>' +
        '<div class="pbtns"><button type="button" data-act="jump">Jump to the moment</button><button type="button" data-act="retry">Retry</button><button type="button" data-act="build">Back to build</button><button type="button" data-act="watch">Watch replay</button></div></div>';
    }
    ov.innerHTML = html; ov.hidden = false;
  }
  $('overlay').addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('button[data-act]') : null;
    if (!b) { if (e.target === $('overlay')) closeOverlay(); return; }
    var a = b.getAttribute('data-act');
    if (a === 'retry') { doRun(); }
    else if (a === 'build') { closeOverlay(); show('build'); }
    else if (a === 'watch') { closeOverlay(); }
    else if (a === 'jump') { closeOverlay(); S.playing = false; S.t = S.run.autopsy.from; $('playBtn').textContent = 'Play'; }
    else if (a === 'next') { closeOverlay(); selectDish(ORDER[ORDER.indexOf(S.dish) + 1]); }
    else if (a === 'list') { closeOverlay(); show('list'); }
  });

  // ---------------------------------------------------------------- frame loop
  var last = 0;
  function frame(ts) {
    var dt = Math.min(0.1, (ts - last) / 1000); last = ts;
    try {
      if (S.screen === 'scout') drawScout(ts);
      else if (S.screen === 'build') {
        var d = dishObj();
        if (d && d.id === 0) drawMatch();
        D.portrait($('portrait'), S.build, reduced ? 0 : ts / 1000, machineCount(S.build));
        if (S.note && performance.now() > S.noteUntil) { S.note = ''; renderProblems(); }
      } else if (S.screen === 'run' && S.run) {
        if (S.playing) {
          S.t += dt * 12 * S.speed;
          if (S.t >= S.run.T) { S.t = S.run.T; S.playing = false; $('playBtn').textContent = 'Play'; if (!S.resultShown) { S.resultShown = true; setTimeout(showResult, 450); } }
        }
        drawRun(ts);
      }
      if (S.screen === 'build' && dishObj() && dishObj().id === 0) { /* match graph drawn above */ }
    } catch (err) { if (window.console) console.error(err && err.stack || err); }
    requestAnimationFrame(frame);
  }
  // Dish 0 portrait is drawn into the left column too
  function frameWrap(ts) { frame(ts); }

  // ---------------------------------------------------------------- wiring
  Array.prototype.forEach.call(document.querySelectorAll('#nav button'), function (b) { b.addEventListener('click', function () { show(b.getAttribute('data-go')); }); });
  $('toBuild').addEventListener('click', function () { show('build'); });
  $('unlockAll').addEventListener('click', function () { S.unlocked = true; save('unlocked', true); renderList(); });
  $('resetProgress').addEventListener('click', function () { S.cleared = {}; S.unlocked = false; S.pins = {}; S.snapSlots = {}; save('cleared', {}); save('unlocked', false); save('pins', {}); save('snaps', {}); renderList(); });
  Array.prototype.forEach.call(document.querySelectorAll('#buildTabs button'), function (b) { b.addEventListener('click', function () { S.tab = b.getAttribute('data-tab'); renderBuild(false); }); });
  $('undo').addEventListener('click', function () { if (!S.undo.length) return; S.build = S.undo.pop(); syncRuleFromBuild(); renderBuild(false); });
  $('reset').addEventListener('click', function () { mutate(function (b) { var n = defaultBuild(); b.pace = n.pace; b.slop = n.slop; b.metabolism = n.metabolism; b.parts = n.parts; b.reflex = null; }); S.rule = { sensor: null, cmp: null, value: null, action: null }; renderRuleBox(); });
  $('runBtn').addEventListener('click', doRun);
  $('playBtn').addEventListener('click', function () { setPlaying(!S.playing); });
  $('skipBtn').addEventListener('click', skipToTrouble);
  $('resultBtn').addEventListener('click', function () { if (S.run) showResult(); });
  $('scrub').addEventListener('input', function () { S.playing = false; $('playBtn').textContent = 'Play'; S.t = +this.value; });
  Array.prototype.forEach.call(document.querySelectorAll('#speeds button'), function (b) {
    b.addEventListener('click', function () { setSpeed(+b.getAttribute('data-sp')); });
  });
  function setSpeed(n) { S.speed = n; Array.prototype.forEach.call(document.querySelectorAll('#speeds button'), function (x) { x.classList.toggle('on', +x.getAttribute('data-sp') === n); }); }
  document.addEventListener('keydown', function (e) {
    var tg = e.target && e.target.tagName; if (tg === 'TEXTAREA' || (tg === 'INPUT' && e.target.type !== 'range')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var ovOpen = !$('overlay').hidden;
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      if (ovOpen) return;
      if (S.screen === 'build') doRun(); else if (S.screen === 'run') setPlaying(!S.playing);
    } else if ((e.key === 'r' || e.key === 'R') && (S.screen === 'run' || S.screen === 'build') && S.dish != null) {
      if (S.screen === 'run' || ovOpen) doRun();
    } else if (S.screen === 'run' && S.run && !ovOpen && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      e.preventDefault(); S.playing = false; $('playBtn').textContent = 'Play';
      seek(S.t + (e.key === 'ArrowRight' ? 1 : -1) * (e.shiftKey ? 10 : 1));
    } else if (e.key === 'Escape') { closeOverlay(); hidePop(); }
  });
  window.addEventListener('resize', function () { /* canvases refit on the next frame */ });

  // ---------------------------------------------------------------- debug hook
  window.__la = {
    S: S, show: show, selectDish: selectDish, run: doRun, seek: seek, skip: skipToTrouble, showResult: showResult, setSpeed: setSpeed,
    setBuild: function (b) { S.undo.push(copy(S.build)); S.build = copy(b); syncRuleFromBuild(); renderBuild(false); },
    ruleChoose: ruleChoose, installRule: installRule,
    info: function () {
      var r = S.run;
      return { screen: S.screen, dish: S.dish, build: S.build, t: S.t, playing: S.playing, runCount: S.runCount, resultShown: S.resultShown, overlay: !$('overlay').hidden,
        verdict: r && r.v, autopsy: r && r.autopsy, fired: r && r.fired, trouble: S.troubleTick, cleared: S.cleared, ghost: !!S.ghost };
    }
  };

  renderList(); show('list');
  requestAnimationFrame(frameWrap);
})();

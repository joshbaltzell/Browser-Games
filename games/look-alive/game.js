// Look Alive: guided, world-first page. Plays the simulation in sim.js with the data in cards.js and levels.js.
// Plain script (file:// safe). Debug hook: window.__la.
// Flow: dish list -> (world) -> dish briefing -> Watch (carried cell, unchanged) -> Adapt (loadout) -> Run (replay) -> Result.
(function () {
  'use strict';
  var Cards = LookAliveCards, Lv = LookAliveLevels, Sim = LookAlive, P = Lv.PLANET, D = LAD, W = Lv.WORLD, Lv2 = window.LookAliveLevels2 || null, Lv3 = window.LookAliveLevels3 || null;
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function copy(o) { return JSON.parse(JSON.stringify(o)); }
  var reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // ---------------------------------------------------------------- the WebGL dish and cell portrait (render-gl.js), with the 2D drawing in draw.js as the fallback
  // A canvas that has had a WebGL context cannot give a 2D one, so the dish keeps two canvases: #runDish (2D, the fallback) and a GL canvas made on demand.
  var GL = { r: null, canvas: null, failed: false, forced: false, reason: '', p: null, pfailed: false };
  function glNote(msg) {
    var n = $('dishFbNote'), w = $('dishWrap');
    if (!msg) { if (n) n.hidden = true; return; }
    if (!n) { n = el('div', 'dnote fb'); n.id = 'dishFbNote'; w.appendChild(n); }
    n.textContent = msg; n.hidden = false;
  }
  function glDestroy() {
    if (GL.r) { try { GL.r.destroy(); } catch (e) { /* ignore */ } GL.r = null; }
    if (GL.canvas && GL.canvas.parentNode) GL.canvas.parentNode.removeChild(GL.canvas);
    GL.canvas = null; $('runDish').style.display = '';
  }
  function glFailed(why) {
    GL.failed = true; GL.reason = why; glDestroy();
    if (why !== 'slow') { glNote('Simple dish view: the detailed view is not available here (' + why + ').'); return; }
    // Too slow is not final: the detailed view is tried again at the lowest detail on the next dish, or now from this button.
    GL.wasSlow = true; glNote('Simple dish view: the detailed view was running very slowly. ');
    var b = el('button', 'dretry', 'Try the detailed view again'); b.type = 'button'; b.addEventListener('click', glRetry); $('dishFbNote').appendChild(b);
  }
  function glRetry() { if (GL.failed && GL.reason === 'slow') { GL.failed = false; GL.reason = ''; glNote(''); S.liveKey = ''; if (S.run && dishGL()) { setGLRun(GL.r, S.run); GL.r.setTick(S.t); $('runDish').style.display = 'none'; } } }
  function dishGL() {
    if (GL.forced || GL.failed || !window.LookAliveRender) return null;
    if (!GL.r) {
      var c = document.createElement('canvas'); c.id = 'runDishGL'; c.className = 'dishcanvas gl'; c.setAttribute('role', 'img'); c.setAttribute('aria-label', 'The dish: purple natives, pink you, amber waste');
      $('dishWrap').appendChild(c);
      var r = window.LookAliveRender.create(c, { host: $('dishWrap'), reduced: reduced, onfail: glFailed, tier: GL.wasSlow ? 'phone' : undefined });
      if (!r.supported) { if (c.parentNode) c.parentNode.removeChild(c); GL.failed = true; GL.reason = r.err || 'no WebGL2'; glNote('Simple dish view: the detailed view is not available here (' + GL.reason + ').'); return null; }
      GL.r = r; GL.canvas = c; glNote('');
    }
    return GL.r.supported ? GL.r : null;
  }
  function setGLRun(g, run, keep) {
    var o = { slots: Sim.toSlots(run.build), machine: machineCount(run.build) }; if (keep) o.keepView = true;
    g.setRun(run, run.dish, run.build, o);
  }
  function glJump(target) { var g = GL.r; if (g && g.supported && S.run) { g.setTick(S.t); if (target) g.rackFocus('jump', target); else g.rackFocus('jump'); } }
  // ---------------------------------------------------------------- event zoom (Run mode, lost run): the camera goes to a spot the sim records
  var EZ_KIND = { acid: 'colony', overgrew: 'colony', bloom: 'colony', starved: 'food', bust: 'food', below: 'thinning', band: 'thinning', cooked: 'thinning', grazed: 'thinning' };
  function ezKindFor(run) { var a = run && run.autopsy; return a && EZ_KIND[a.cause] || null; }
  // The located spot for the lost run's cause, or null (no spot, or the renderer has no locate yet). Falls back to the colony.
  function ezLocate(run) {
    var g = GL.r, kind = ezKindFor(run); if (!kind || !g || !g.supported || typeof g.locate !== 'function') return null;
    var tick = run.autopsy.from, p = g.locate(kind, tick);
    if (!p && kind !== 'colony') { kind = 'colony'; p = g.locate(kind, tick); }
    return p ? { x: p.x, y: p.y, cool: !!p.cool, kind: kind } : null;
  }
  function ezReset() { var z = S.ez; z.fired = false; z.kind = null; z.target = null; z.since = 0; z.cool = false; z.used = null; }
  function ezPhrase() {
    var z = S.ez; if (z.used === 'thinning') return 'CAMERA: where your colony is thinning' + (z.cool ? ', in the cool water' : '');
    return z.used === 'food' ? 'CAMERA: where food ran out under your colony' : 'CAMERA: your colony';
  }
  function ezSlow() { var z = S.ez, g = GL.r; return !!((z.since && !z.fired) || (z.fired && z.used && g && typeof g.eventActive === 'function' && g.eventActive())); }
  // Called every frame after playback advances. tPrev is the tick before this frame.
  function ezTick(tPrev) {
    var z = S.ez, run = S.run, g = GL.r; if (!run) return;
    if (tPrev <= 0.001) ezReset();
    if (S.mode !== 'run' || run.v.win || !run.autopsy || !S.playing || z.fired || S.cmp.held) return;
    if (!g || !g.supported || typeof g.eventZoom !== 'function') return;
    if (reduced || g.userMoved) { z.fired = true; z.since = 0; return; }   // no automatic camera under reduced motion, or once the player has moved it
    var from = Math.max(1, run.autopsy.from - 6);   // start a little early: the glide takes about 1.5 s
    if (!z.since) { if (tPrev < from && S.t >= from) z.since = performance.now(); else return; }
    if (performance.now() - z.since > 3000) { z.fired = true; return; }
    var tg = ezLocate(run); if (!tg) { z.fired = true; return; }
    if (g.eventZoom({ x: tg.x, y: tg.y })) { z.fired = true; z.target = tg; z.kind = EZ_KIND[run.autopsy.cause]; z.used = tg.kind; z.cool = tg.cool; }
  }
  function portraitGL() {
    if (GL.pfailed || GL.forced || !window.LookAliveRender) return null;
    if (!GL.p) {
      var c = $('cellGL'); c.hidden = false;
      var p = window.LookAliveRender.portrait(c);
      if (!p.supported) { GL.pfailed = true; c.hidden = true; return null; }
      p.onfail = function () { GL.pfailed = true; $('cellWrap').classList.remove('cellglon'); c.hidden = true; };
      GL.p = p;
    }
    return GL.p.supported ? GL.p : null;
  }
  function drawPortrait(sl, gh) {
    var p = portraitGL(), wrap = $('cellWrap');
    if (!p) { wrap.classList.remove('cellglon'); $('cellGL').hidden = true; return; }
    $('cellGL').hidden = false; wrap.classList.add('cellglon');
    var eff = sl;
    if (gh && gh.slot) { eff = {}; for (var k in sl) eff[k] = sl[k]; var gs = Sim.toSlots(gh.build); eff[gh.slot] = gs[gh.slot]; }
    p.draw(eff);
  }

  var ORDER1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ORDER = ORDER1;
  var ORDER2 = Lv2 ? Lv2.ORDER : [];
  // Habitat 2 (levels2.js): world of a dish id, its order, its world object. World 1 stays the default everywhere.
  // Habitat 3 (levels3.js, the thick water): dishes 15 and 16, the third tab. Its dishes carry `agents` (the individual-cell simulation in sim3.js).
  var ORDER3 = Lv3 ? Lv3.ORDER : [];
  function worldNo(id) { return ORDER3.indexOf(id) >= 0 ? 3 : ORDER2.indexOf(id) >= 0 ? 2 : 1; }
  function worldOfDish(d) { return d && d.world === 3 ? 3 : d && d.world === 2 ? 2 : 1; }
  function orderOf(w) { return w === 3 ? ORDER3 : w === 2 ? ORDER2 : ORDER1; }
  function orderForDish(d) { return orderOf(worldOfDish(d)); }
  function worldObj(w) { return w === 3 && Lv3 ? Lv3.WORLD : w === 2 && Lv2 ? Lv2.WORLD : W; }
  function worldLv(w) { return w === 3 ? Lv3 : w === 2 ? Lv2 : null; }
  // Which dish pages may show the second tab's pictures: switch these on once the thumbnails exist (assets/thumbs/dish-N.jpg).
  var THUMBS2 = { 11: true, 12: true, 13: true, 14: true };
  var THUMBS3 = { 15: false, 16: false };   // no wall thumbnails for the thick water yet (assets/thumbs/dish-15.jpg and dish-16.jpg): plain tiles until they exist
  // Pictures for the third world's mini-intro, borrowed until it has its own: slide 1 intro-5 (the plan: a scout among the locals), slide 2 h2-3 (a flat, bright place), slide 3 intro-2 (big green shapes on the ground).
  var INTRO3_IMG = ['assets/intro/intro-5.jpg', 'assets/intro/h2-3.jpg', 'assets/intro/intro-2.jpg'];
  var WORLD3_IMG = 'assets/cards/world-banded.jpg';   // placeholder for the third world's picture on the world screen
  var GRADE_RANK = { Passable: 1, Convincing: 2, Benign: 3 };
  var GRADE_NEXT = { Passable: 'Convincing needs the guards never to reach Inspection.', Convincing: 'Benign needs every stat inside its zone the whole run, with 1 energy spare.', Benign: 'That is the best grade. Nothing more to earn here.' };
  var NB_TITLE = { 1: 'How acid-loving microbes keep acid out', 2: 'The growth curve and carrying capacity', 3: 'Fermentation and respiration', 4: 'Variation between cells', 5: 'Sensing and response', 6: 'How acid-lovers trade energy for safety', 7: 'Why real cells cannot have everything', 8: 'Bet-hedging: sleepers and spores', 9: 'Why variation is normal in living things', 10: 'A summary page from the lab' };
  var PACE_NAMES = ['Glacial', 'Sluggish', 'Slow', 'Unhurried', 'Native rate', 'Brisk', 'Quick', 'Eager', 'Frantic'];
  var SLOP_NAMES = ['Perfectly regular', 'Ledger', 'Tidy', 'Careful', 'Casual', 'Relaxed', 'Messy', 'Chaotic', 'Teenager'];
  var STAMPS = ['SUFFICIENTLY BACTERIAL', 'PASSES AS NATIVE', 'NOTHING TO SEE HERE', 'OF NO INTEREST TO THE GUARDS', 'UNREMARKABLE', 'CLEARED FOR COLONISATION'];
  var STAGE_NAMES = ['Calm', 'Curiosity', 'Inspection', 'Response'];
  var CAUSE_WORDS = { acid: 'Dissolved by the acid', 'exposed:growth': 'Cover blown: Growth (speed)', 'exposed:waste': 'Cover blown: Smell', 'exposed:casualties': 'Cover blown: Growth (share)', 'exposed:regularity': 'Cover blown: Naturalness',
    'exposed:motion': 'Cover blown: Movement', overgrew: 'Took over the dish', starved: 'Starved out', below: 'Fell below the band', bust: 'Lost to the food crash', bloom: 'Lost to the bloom', band: 'Not enough time in the band', cooked: 'Cooked by the heat', grazed: 'Eaten at the cool edge' };
  // Memo "from" line per loss cause (M5). Unknown causes fall back to the sample lab.
  var MEMO_FROM = { acid: 'Desk of Dissolved Samples', 'exposed:growth': 'Guard-watch desk', 'exposed:waste': 'Guard-watch desk', 'exposed:casualties': 'Guard-watch desk', 'exposed:regularity': 'Guard-watch desk', 'exposed:motion': 'Guard-watch desk',
    overgrew: 'Head-count desk', below: 'Head-count desk', starved: 'Head-count desk', band: 'Head-count desk', bust: 'Meal-schedule desk', bloom: 'Meal-schedule desk', cooked: 'Warm-water desk', grazed: 'Cool-edge desk' };
  // The thick water (dishes 15 and 16): a scout that starves is the food-route desk's business, not the head count's.
  var MEMO_FROM3 = { starved: 'Food-route desk', 'exposed:motion': 'Guard-watch desk' };
  // Story pictures (section D). A missing file logs a console error even with onerror, so each picture is switched on only once it exists.
  var STORY_ART = { cell: false, crowd: false, ripple: true };

  // ---------------------------------------------------------------- storage (every access guarded)
  var KEY = 'bg.look-alive.';
  function load(k, d) { try { var v = localStorage.getItem(KEY + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(KEY + k, JSON.stringify(v)); } catch (e) { /* private window */ } }

  // Saved builds from before the biology pass: Copying errors is now Random naps, Chemotaxis is now Sporulate.
  function canonBuild(b) {
    if (!b) return b;
    if (b.parts) b.parts = b.parts.map(Cards.canon);
    if (b.reflex && b.reflex.kind === 'bio') b.reflex.id = Cards.canon(b.reflex.id);
    return b;
  }
  function canonWins(w) { for (var k in w) canonBuild(w[k]); return w; }

  var S = {
    screen: 'list', dish: null, build: null, carried: null, undo: [], rule: { sensor: null, cmp: null, value: null, action: null, otherwise: null },
    cleared: load('cleared2', {}), grades: load('grades2', {}), whyOpen: false, runGrade: null, wins: canonWins(load('wins2', {})), seenWorld: load('world2', false), seenIntro: load('intro2', false), introAt: 0, introWorld: 1, afterIntro: 'list', worldView: 1, worldTab: (function () { var v = load('worldTab', 1); return v === 2 || v === 3 ? v : 1; })(), seenIntroB: load('introB', false), seenWorldB: load('worldB', false), seenIntroC: load('introC', false), seenWorldC: load('worldC', false), unlocked: load('unlocked2', false),
    slot: null, layer: 0, preview: null, pointed: false,
    note: '', noteUntil: 0, worldBack: 'list',
    mode: 'watch', run: null, stopAt: null, watchDone: false, runFinished: false, ghost: null, prev: {},
    t: 0, playing: false, speed: 4, resultShown: false, overlayOpen: false, runCount: 0, troubleTick: -1, cardEls: [], shownDish: -1, chipCache: {},
    lastAutopsy: null, lastRunLost: false, tipLevel: 0, dialKeys: [], vcache: '', fail: null, real: false, liveKey: '',
    ez: { fired: false, kind: null, target: null, since: 0, tPrev: 0, cool: false, used: null }, cmp: { held: false, kept: false, base: null, run: null, runFor: null, diff: '' }
  };

  function dishObj() { return S.dish == null ? null : Lv.dish(S.dish); }
  function isExam(d) { return !!(d && d.exam); }
  function eventsOf(d) { return d.events && d.events.length ? d.events : (d.event && d.event.tick > 0 ? [d.event] : []); }

  // ---------------------------------------------------------------- build helpers
  function carriedFor(id) {
    var w = id > 1 ? S.wins[id - 1] : null, d = Lv.dish(id);
    if (w) { var c = Sim.conform(d, w); if (Sim.validate(d, c).ok) return copy(c); }   // old saved builds: factory parts back in locked slots
    return Lv.carry(id);
  }
  function cardName(id) { var c = Cards.part(id); return c ? c.name : id; }
  function reflexName(rf) { return rf ? (rf.kind === 'bio' ? Cards.bio(rf.id).name : 'Machine rule') : ''; }
  function buildWords(b) {
    if (!b) return 'nothing';
    var s = 'Pace ' + b.pace + ', ' + cardName(b.metabolism);
    if (b.slop) s += ', Sloppiness ' + b.slop;
    (b.parts || []).forEach(function (id) { s += ', ' + cardName(id); });
    if (b.reflex) s += ', ' + reflexName(b.reflex);
    return s;
  }
  function machineCount(b) {
    var n = 0; if (Cards.part(b.metabolism) && Cards.part(b.metabolism).shelf === 'machine') n++;
    (b.parts || []).forEach(function (id) { var c = Cards.part(id); if (c && c.shelf === 'machine') n++; });
    if (b.reflex && b.reflex.kind === 'machine') n++;
    return n;
  }
  function sameReflex(a, b) { return JSON.stringify(a || null) === JSON.stringify(b || null); }

  // ---------------------------------------------------------------- step bar and handler line
  function findingBody(a) {
    var t = a && a.text ? a.text.replace(/^[^:]{0,70}\btick \d+(?: to \d+)?:\s*/, '') : '';
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function failSentence(a) { return a && a.headline ? a.headline.split('. ')[0].replace(/\.$/, '') : ''; }
  function refresh() {
    var step = 0, text = '', d = dishObj(), a = S.lastAutopsy;
    var sc = S.screen;
    if (sc === 'intro') text = 'The story so far. Press Next, or Skip to go straight to the dishes.';
    else if (sc === 'list') text = 'Pick a dish. Each one gives your cell a new problem to solve.';
    else if (sc === 'world') { step = 1; text = 'Read about the world your cell has landed in, then press Continue.'; }
    else if (sc === 'brief') { step = 1; text = 'Read the environment report, then press Start the test to watch your cell try it.'; }
    else if (sc === 'adapt') {
      step = 3;
      if (isExam(d)) text = a ? (S.lastRunLost ? 'That did not work: ' : 'Your cell failed: ') + failSentence(a).toLowerCase() + '. Exam: no tips. Press "What changes this?", change your cell, then Run.' : 'Exam dish: no answer tips, and several different cells can pass. Change your cell, then press Run.';
      else if (S.pointed && d && NEW_SLOT_HINT[d.id]) text = NEW_SLOT_HINT[d.id] + (a ? ' (Your last cell failed: ' + failSentence(a).toLowerCase() + '.)' : '');
      else text = a ? (S.lastRunLost ? 'That did not work: ' : 'Your cell failed: ') + failSentence(a).toLowerCase() + '. Fix the red bar, then press Run. Stuck? Press Tip.' : 'Change your cell, then press Run.';
    } else if (sc === 'run' && S.run) {
      if (S.overlayOpen) { step = 5; text = S.run && S.run.v.win ? 'Dish cleared. Read the notebook page, then press Next dish.' : 'Your cell failed. Read the memo, press ' + (isExam(dishObj()) ? '"What changes this?"' : 'Tip if you want help') + ', then go back to Adapt.'; }
      else if (S.mode === 'watch') {
        step = 2;
        if (!S.watchDone) text = 'Watch what happens to your cell as it is.';
        else text = S.run.v.win ? 'Your carried cell already survives this dish. Press Continue to collect the notebook page.' : 'There is the problem. Press "Adapt your cell" to change your cell.';
      } else {
        step = 4;
        if (!S.runFinished) text = 'Your changed cell is running. Space pauses, the arrow keys step through it.';
        else text = S.run.v.win ? 'It worked. Press "See result".' : 'It failed. Press "Back to Adapt" to change your cell and try again.';
      }
    }
    Array.prototype.forEach.call(document.querySelectorAll('#stepbar li'), function (li) {
      var n = +li.getAttribute('data-step'); li.classList.toggle('on', n === step); li.classList.toggle('done', step > 0 && n < step);
    });
    $('handler').textContent = text;
  }

  // ---------------------------------------------------------------- screens
  function show(name) {
    compareSet(false);
    if (name !== 'list' && name !== 'world' && name !== 'intro' && S.dish == null) name = 'list';
    if (name === 'run' && !S.run) name = 'adapt';
    S.screen = name; hidePop();
    ['intro', 'list', 'world', 'brief', 'adapt', 'run'].forEach(function (s) { $('screen-' + s).classList.toggle('on', s === name); });
    var d = dishObj();
    $('dishTitle').textContent = d && name !== 'list' && name !== 'world' && name !== 'intro' ? 'Dish ' + d.id + ': ' + d.title : '';
    if (name === 'intro') renderIntro();
    if (name === 'list') renderList();
    if (name === 'world') renderWorld();
    if (name === 'brief') renderBrief();
    if (name === 'adapt') renderAdapt(true);
    if (name === 'run') enterRun();
    refresh();
  }

  // ---------------------------------------------------------------- intro: five picture beats (the aliens never name a cow or a stomach; they only see what they see)
  var INTRO = [
    ['Arrival', 'You are very small.', 'So is everyone you know, and together you think as one colony, faster than any single cell could. You travelled a long way to find this: a blue and green world, thick with life.'],
    ['Landing', 'The ground is mountains.', 'We went down to the surface. Our eyes are small, so every grain of soil is a mountain and one drop of water is a lake.'],
    ['Sensors', 'A warm mountain.', 'Our sensors found a mountain nearby that gives off heat. It is far too big and too still to be alive. But inside it, there is a crowd of life, denser than anything we have ever seen.'],
    ['The crowd', 'It must be a civilization.', 'So many, so close, so busy. Where we come from, a crowd like this means a civilization. We think a city lives inside the warm mountain, so we will treat it as one.'],
    ['The plan', 'We must blend in.', 'Our scouts took samples. Every local is about our size, which is the size minds come in, so the crowd is full of them. Individuals can join another group: we will send one of ours to join theirs, once its disguise passes a test dish.']
  ];
  function renderIntro() {
    var IL = introList(), n = S.introAt, b = IL[n], img = $('introImg');
    $('introKicker').textContent = b[0] + ' · ' + (n + 1) + ' of ' + IL.length; $('introTitle').textContent = b[1]; $('introText').textContent = b[2];
    var src = S.introWorld === 3 ? INTRO3_IMG[n] : 'assets/intro/' + (S.introWorld === 2 ? 'h2-' : 'intro-') + (n + 1) + '.jpg';
    if (img.getAttribute('src') !== src) { img.style.visibility = ''; if (reduced) img.src = src; else { img.classList.add('fade'); setTimeout(function () { img.src = src; img.classList.remove('fade'); }, 180); } }
    var dots = ''; for (var i = 0; i < IL.length; i++) dots += '<i' + (i === n ? ' class="on"' : '') + '></i>';
    $('introDots').innerHTML = dots;
    $('introBack').disabled = n === 0; $('introGo').textContent = n === IL.length - 1 ? 'Begin' : 'Next';
  }
  function introList() { return S.introWorld === 3 && Lv3 ? Lv3.INTRO : S.introWorld === 2 && Lv2 ? Lv2.INTRO : INTRO; }
  function introLen() { return introList().length; }
  function seenIntroOf(w) { return w === 3 ? S.seenIntroC : S.seenIntroB; }
  function seenWorldOf(w) { return w === 3 ? S.seenWorldC : S.seenWorldB; }
  function introNext() { if (S.introAt < introLen() - 1) { S.introAt++; renderIntro(); } else introDone(); }
  function introDone() {
    if (S.introWorld >= 2) {   // habitat 2 or 3 mini-intro, then its world facts (first visit only), then where the player was headed
      var iw = S.introWorld;
      if (iw === 3) { S.seenIntroC = true; save('introC', true); } else { S.seenIntroB = true; save('introB', true); }
      S.introWorld = 1;
      if (!seenWorldOf(iw)) { S.worldView = iw; S.worldBack = S.afterIntro; show('world'); } else show(S.afterIntro);
      return;
    }
    S.seenIntro = true; save('intro2', true); show('list');
  }
  // First time the second or third world is opened (tab or its first dish): mini-intro, then world facts. Returns true when it took over the screen.
  function firstVisit(w, back) {
    if (!worldLv(w) || (seenIntroOf(w) && seenWorldOf(w))) return false;
    S.afterIntro = back; S.introAt = 0;
    if (!seenIntroOf(w)) { S.introWorld = w; show('intro'); } else { S.worldView = w; S.worldBack = back; show('world'); }
    return true;
  }

  // ---------------------------------------------------------------- dish list
  function isLocked(id) {
    if (S.unlocked) return false;
    var w = worldNo(id), o = orderOf(w), i = o.indexOf(id);
    if (w >= 2 && i === 0) return !S.cleared[prevWorldLast(w)];
    return i > 0 && !S.cleared[o[i - 1]];
  }
  function prevWorldLast(w) { var o = orderOf(w - 1); return o[o.length - 1]; }   // the dish that opens world w: the last one of the world before it
  function tabLocked(w) { return w >= 2 && (!worldLv(w) || (!S.unlocked && !S.cleared[prevWorldLast(w)])); }
  function setTab(w) {
    if (tabLocked(w)) return;
    S.worldTab = w; save('worldTab', w); renderList();
    if (w >= 2) firstVisit(w, 'list');
  }
  // The Scale of Mind strip: the state after the highest dish cleared (WORLD.scale in levels.js).
  function scaleIndex() { var n = 0; ORDER1.forEach(function (id) { if (S.cleared[id]) n = Math.max(n, id); }); return Math.min(n, W.scale.length - 1); }
  function renderScale(boxId, w) {
    var box = $(boxId); if (!box) return;
    var show2 = worldObj(w || 1); box.style.display = show2.scale ? '' : 'none'; if (!show2.scale) { box.innerHTML = ''; return; }
    var i = scaleIndex(), s = W.scale[i];
    box.innerHTML = '<div class="sp">' + (STORY_ART.cell ? '<img src="assets/story/scale-cell.jpg" alt="">' : '') + (i >= 10 && STORY_ART.crowd ? '<img src="assets/story/scale-crowd.jpg" alt="">' : '') + '</div>' +
      '<div class="st"><div class="sk">' + esc(W.scaleLabel) + '</div><p class="sv">' + esc(s.state) + '</p><div class="ss"><span>' + esc(W.sizeLabel) + ':</span> ' + esc(s.size) + '</div></div>';
  }
  function renderTabs() {
    var box = $('worldTabs'); if (!box) return;
    if (!Lv2) { box.style.display = 'none'; return; }
    box.style.display = ''; box.innerHTML = '';
    (Lv3 ? [1, 2, 3] : [1, 2]).forEach(function (w) {
      var lk = tabLocked(w), b = el('button', 'wtab' + (S.worldTab === w ? ' on' : '') + (lk ? ' locked' : ''), '<span class="wt">' + (w === 1 ? 'The warm crowd' : esc(worldObj(w).name)) + '</span>' + (lk ? '<span class="wl">Locked: clear dish ' + prevWorldLast(w) + ' first</span>' : ''));
      b.type = 'button'; b.setAttribute('data-world', w); b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', S.worldTab === w ? 'true' : 'false'); b.disabled = lk;
      b.addEventListener('click', function () { setTab(w); }); box.appendChild(b);
    });
  }
  function renderList() {
    var box = $('dishList'); box.innerHTML = ''; var wall = null, tw = S.worldTab;
    if (tw >= 2 && tabLocked(tw)) tw = S.worldTab = 1;
    renderTabs();
    orderOf(tw).forEach(function (id) {
      var d = Lv.dish(id), locked = isLocked(id), cleared = !!S.cleared[id], gr = S.grades[id];
      if (id === 11) { box.appendChild(el('div', 'grouph', esc(Lv2.WORLD.name) + ' <span class="dim">dishes 11 to 14: heat, the cool edge, the night, then an exam</span>')); wall = el('div', 'wall'); box.appendChild(wall); }
      if (tw === 3 && id === ORDER3[0]) { box.appendChild(el('div', 'grouph', esc(Lv3.WORLD.name) + ' <span class="dim">dishes 15 and 16: food in clumps, then stopping when fed</span>')); wall = el('div', 'wall'); box.appendChild(wall); }
      if (id === 1 || id === 6) {
        box.appendChild(el('div', 'grouph', id === 1 ? 'Learning the cell <span class="dim">dishes 1 to 5: one new problem each</span>' : 'Exams <span class="dim">dishes 6 to 10: no answer tips, several cells can pass</span>'));
        wall = el('div', 'wall'); box.appendChild(wall);
      }
      var st = locked ? 'Locked' : cleared ? (d.exam && gr ? gr : 'Cleared') : 'Open';
      var tile = el('div', 'dtile' + (locked ? ' locked' : cleared ? ' cleared' : ' open'));
      tile.innerHTML = '<div class="dthumb">' + (locked || (tw === 2 && !THUMBS2[id]) || (tw === 3 && !THUMBS3[id]) ? '' : '<img alt="" src="assets/thumbs/dish-' + id + '.jpg">') + (cleared ? '<span class="dstamp' + (gr ? ' g-' + gr.toLowerCase() : '') + '">' + esc(st) + '</span>' : '') + '</div>' +
        '<div class="dmeta"><span class="num">' + id + '</span><span class="t">' + esc(d.title) + '</span></div><div class="g">' + esc(d.problem) + '</div>' +
        '<div class="c">You start with: ' + esc(buildWords(carriedFor(id))) + '</div>';
      var im = tile.querySelector('img'); if (im) im.addEventListener('error', function () { im.remove(); });
      var b = el('button', 'big', locked ? 'Locked' : cleared ? 'Again' : 'Start'); b.disabled = locked; b.setAttribute('data-dish', id);
      b.addEventListener('click', function () { selectDish(id); }); tile.appendChild(b); wall.appendChild(tile);
    });
    renderScale('scaleList', tw);
  }
  function blankRule() { return { sensor: null, cmp: null, value: null, action: null, otherwise: null }; }
  function selectDish(id) {
    compareSet(false); S.cmp = { held: false, kept: false, base: null, run: null, runFor: null, diff: '' }; ezReset();
    if (GL.failed && GL.reason === 'slow') { GL.failed = false; GL.reason = ''; glNote(''); }   // a slow spell on one dish does not lock the simple view in for the rest of the session
    S.dish = id; S.carried = carriedFor(id); S.build = copy(S.carried); S.undo = []; S.rule = blankRule();
    S.slot = Lv.dish(id).opens[0] || Lv.dish(id).slots[0]; S.layer = 0; S.pointed = Lv.dish(id).opens.length > 0; S.whyOpen = false; S.runGrade = null; S.note = ''; S.preview = null; S.run = null; S.ghost = null; S.shownDish = -1; S.lastAutopsy = null; S.lastRunLost = false; S.tipLevel = 0; S.runCount = 0; S.overlayOpen = false; S.fail = null;
    closeOverlay();
    if (id === 1 && !S.seenWorld) { S.worldView = 1; S.worldBack = 'brief'; show('world'); }
    else if (id === ORDER2[0] && firstVisit(2, 'brief')) { /* mini-intro, then the world facts, then this briefing */ }
    else if (id === ORDER3[0] && firstVisit(3, 'brief')) { /* the same for the thick water */ }
    else show('brief');
  }

  // ---------------------------------------------------------------- world and dish briefing
  function renderWorld() {
    var wv = S.worldView, w2 = wv >= 2 && !!worldLv(wv), WW = worldObj(w2 ? wv : 1), wimg = $('worldImg'), lk = $('localsKey');
    $('worldName').textContent = WW.name;
    if (lk) lk.style.display = w2 ? 'none' : '';
    if (wimg) { var ws = wv === 3 && w2 ? WORLD3_IMG : w2 ? 'assets/cards/world-banded.jpg' : 'assets/cards/world-acidica.jpg'; if (wimg.getAttribute('src') !== ws) { wimg.style.display = ''; wimg.src = ws; } if (w2) wimg.alt = ''; }
    var box = $('worldFacts'); box.innerHTML = '';
    WW.facts.forEach(function (f, i) { box.appendChild(el('div', 'fact', '<div class="fn">' + (i + 1) + '</div><p>' + esc(f) + '</p>')); });
    $('worldBadge').textContent = WW.badge || '';
    $('worldMission').textContent = WW.mission;
    renderScale('scaleWorld', w2 ? wv : 1);
  }
  function worldContinue() {
    if (S.worldView === 3) { S.seenWorldC = true; save('worldC', true); S.worldView = 1; }
    else if (S.worldView === 2) { S.seenWorldB = true; save('worldB', true); S.worldView = 1; } else { S.seenWorld = true; save('world2', true); }
    if (S.worldBack === 'brief' && S.dish != null) show('brief'); else show(S.worldBack || 'list');
  }
  // Environment analysis report: readings come from the dish's own parameters. Lines appear one by one (all at once with reduced motion).
  var CH_WORDS = { growth: 'growth rate', waste: 'smell (waste trail)', casualties: 'casualties', regularity: 'regularity', motion: 'movement' };
  // Habitat 3 (dishes with `agents`): every number below comes from the dish's own settings (levels3.js, defaults of sim3.js).
  function pct0(x) { return Math.round(x * 100) + '%'; }
  function nativeMixWords(nt) {
    var q = nt.quad || 0, h = nt.halo || 0, sa = nt.sali || 0, tot = q + h + sa || 1;
    function tenth(n) { return Math.max(n ? 1 : 0, Math.round(10 * n / tot)); }
    return 'about ' + tenth(q) + ' in 10 are flat squares that sit still, about ' + tenth(h) + ' in 10 are rods that swim and stop to feed, about ' + tenth(sa) + ' in 10 are rods that swim';
  }
  function reportLines3(d) {
    var A = d.agents, bo = A.boulders || {}, nt = A.natives || {}, tot = (nt.quad || 0) + (nt.halo || 0) + (nt.sali || 0), band = d.band;
    return [
      ['Food', (bo.count || 0) + ' green boulders leak the sweetness. Each lasts ' + bo.lifeMin + ' to ' + bo.lifeMax + ' ticks, then another one comes up somewhere new'],
      ['Locals', tot + ' at the start: ' + nativeMixWords(nt)],
      ['Inspectors', !d.suspicion ? 'none in this dish' : (d.channels || []).map(function (c) { return CH_WORDS[c] || c; }).join(', ')],
      ['The band', 'stay between ' + pct0(band.lo) + ' and ' + pct0(band.hi) + ' of the dish for ' + pct0(band.need) + ' of the run'],
      ['Time', 'scouts swim at their true speed, and grow about a hundred times faster than real ones'],
      ['Energy budget', d.energy + ' of 5 units for your cell']
    ];
  }
  function reportLines(d) {
    if (d.agents) return reportLines3(d);
    if (d.temp) {
      var T = d.temp, ev = eventsOf(d), nights = ev.length > 0 && !!T.o2Night, gap = T.hot - T.cool;
      var u40 = T.cool >= 40 ? 0 : Math.acos(1 - 2 * (40 - T.cool) / (T.hot - T.cool)) / (2 * Math.PI), pct40 = Math.round(200 * u40);
      return [
        ['Temperature', T.hot + ' C at the source, ' + T.cool + ' C at the edges (' + (gap >= 30 ? 'a strong gradient' : gap >= 15 ? 'a moderate gradient' : 'a gentle gradient') + ')'],
        ['Light', nights ? 'bright by day; dark from tick ' + ev[0].tick + ' for ' + ev[0].dur + ' ticks, every ' + (ev.length > 1 ? ev[1].tick - ev[0].tick : '80') + ' ticks' : 'bright all run'],
        ['Oxygen', nights ? 'high by day, none at night' : 'high'],
        ['Erosion', T.graze > 0 ? 'a slow shadow below 40 C, about ' + pct40 + '% of the dish' : 'none: the water stays above 40 C'],
        ['Inspectors', !d.suspicion ? 'none in this dish' : (d.channels || []).map(function (c) { return CH_WORDS[c] || c; }).join(', ') + (d.regWeight > 1 ? ' (strict)' : '')],
        ['Energy budget', d.energy + ' of 5 units for your cell']
      ];
    }
    var acid = d.acid || 0, ph = Math.max(0.5, 3.2 - 2.6 * acid), strength = acid < 0.25 ? 'moderate' : acid < 0.45 ? 'strong' : acid < 0.65 ? 'very strong' : 'extreme';
    var evs = eventsOf(d), warn = evs.length ? evs[0].tick - evs[0].announce : 0, food = (d.abundance ? 'plentiful' : 'steady') + (evs.length ? '; ' + (evs.length > 1 ? 'crashes' : 'a crash') + ' at tick ' + evs.map(function (e) { return e.tick; }).join(' and ') + ', each warned ' + warn + ' ticks ahead' : '');
    var insp = !d.suspicion ? 'none in this dish' : (d.channels || []).map(function (c) { return CH_WORDS[c] || c; }).join(', ') + (d.regWeight > 1 ? ' (strict)' : '');
    return [
      ['Acidity', 'pH about ' + ph.toFixed(1) + ' (' + strength + ')'],
      ['Food supply', food],
      ['Inspectors', insp],
      ['Energy budget', d.energy + ' of 5 units for your cell']
    ];
  }
  function renderReport(d) {
    var box = $('briefReport'), rows = reportLines(d), html = '<div class="rh">Environment analysis · ' + esc(worldObj(worldOfDish(d)).name) + ' · site ' + (orderForDish(d).indexOf(d.id) + 1) + ' of ' + orderForDish(d).length + '</div>';
    rows.forEach(function (r) { html += '<div class="rl pending"><span class="rk">' + esc(r[0]) + '</span><span>' + esc(r[1]) + '</span></div>'; });
    html += '<div class="rl status pending">Building petri dish… ready. Your artificial microbe is loaded for a compatibility test.</div>';
    box.innerHTML = html;
    (S.briefTimers || []).forEach(clearTimeout); S.briefTimers = [];
    var els = box.querySelectorAll('.rl');
    Array.prototype.forEach.call(els, function (e, i) {
      if (reduced) { e.classList.remove('pending'); return; }
      S.briefTimers.push(setTimeout(function () { e.classList.remove('pending'); }, 250 + i * 380));
    });
  }
  function renderBrief() {
    var d = dishObj(); renderReport(d);
    $('briefKicker').textContent = 'Dish ' + d.id + ' of ' + orderForDish(d).length;
    $('briefTitle').textContent = d.title;
    $('briefProblem').textContent = d.problem; $('briefGoal').textContent = d.goal;
    var fn = d.fieldNote || ['', ''], fps = $('briefNote').querySelectorAll('p');
    fps[0].textContent = fn[0] || ''; fps[1].textContent = fn[1] || ''; $('briefNote').style.display = d.fieldNote ? '' : 'none';
    $('briefExam').style.display = d.exam ? '' : 'none';
    $('briefFig').innerHTML = figHtml(S.carried);
    $('briefCover').innerHTML = coverName(S.carried);
    $('briefCell').textContent = buildWords(S.carried) + (S.dish > 1 && S.wins[S.dish - 1] ? ' (the cell that won the last dish)' : '') + '. It goes in unchanged.';
  }

  // ---------------------------------------------------------------- simulation wrappers
  function simulate(build) {
    var d = dishObj(), run = Sim.play(P, d, copy(build), { n: 64, snapEvery: 10 });
    run.v = Sim.verdict(run); run.autopsy = run.v.win ? null : Sim.autopsy(run);
    if (run.autopsy) run.autopsy.text = run.autopsy.text.replace(/your your/g, 'your');  // sim.js prints "your your rule"
    return run;
  }
  function trouble(run) {
    var H = run.H; for (var t = 1; t <= run.T; t++) if (H.stage[t] > H.stage[t - 1]) return t;
    return -1;
  }
  // The tick a Watch run stops at: shortly after the failure is plain.
  function watchStop(run) {
    var a = run.autopsy; if (!a) return run.T;
    var t = a.from;
    if (a.cause === 'acid' || a.cause.indexOf('exposed') === 0) t = a.to;
    else if (a.cause === 'overgrew') t = a.from + 30;
    return Math.max(30, Math.min(run.T, t + 12));
  }

  // ---------------------------------------------------------------- Watch
  function enterWatch() {
    var d = dishObj(); if (!d) return; compareSet(false);
    var run = simulate(S.carried);
    S.mode = 'watch'; S.run = run; S.ghost = null; S.stopAt = watchStop(run); S.watchDone = false; S.runFinished = false;
    S.lastAutopsy = run.autopsy; S.lastRunLost = false; S.tipLevel = 0; setFail(run, S.carried);
    S.t = 0; S.playing = true; S.resultShown = false; S.troubleTick = trouble(run); S.speed = d.aliveOnly || d.agents ? 1 : 4; setSpeedUI();   // dish 1: the colony is gone in 12 ticks, so it is watched at 1x
    closeOverlay(); show('run');
  }
  function watchFinished() { S.watchDone = true; S.playing = false; setPlayLabel(); renderVerdict(); refresh(); }
  // The failing stat of a run, and what can change it on this dish (worked out from the build that failed).
  function setFail(run, build) {
    var a = run.autopsy, d = dishObj();
    if (!a || !a.stat) { S.fail = null; return; }
    var fx = Sim.statFixers(d, build, a.stat), sl = [];
    fx.forEach(function (f) { if (f.kind === 'slot') sl.push(f.slot); });
    S.fail = { stat: a.stat, build: copy(build), fixers: fx, slots: sl };
  }
  function failOpen() { var d = dishObj(); if (!S.fail || !d || !S.build) return false; var st = Sim.stats(d, S.build).filter(function (x) { return x.id === S.fail.stat; })[0]; return !!st && st.state !== 'safe' && st.state !== 'unchecked'; }
  // Which slots and dials can move the stat(s) the player should look at. Tutorial dishes: the failing stat after a failure. Exam dishes (when
  // "What changes this?" is open): the failing stat, or every checked stat that is not safe in the forecast. Unranked.
  function whyList() {
    var d = dishObj(), open = failOpen(), key = d.id + '|' + JSON.stringify(S.build) + '|' + (open ? S.fail.stat : '');
    if (S.whyCache && S.whyCache.key === key) return S.whyCache.v;
    var st = Sim.stats(d, S.build), ids;
    if (open) ids = [S.fail.stat];
    else ids = st.filter(function (x) { return x.checked && x.state !== 'safe'; }).map(function (x) { return x.id; });
    if (!open && Sim.dissolved(d, S.build)) ids = ['acid'];
    var v = ids.map(function (id) {
      var fx = Sim.statFixers(d, S.build, id), sl = [], dl = [];
      fx.forEach(function (f) { if (f.kind === 'slot') sl.push(f.slot); else dl.push(f.dial); });
      return { stat: id, fixers: fx, slots: sl, dials: dl, state: st.filter(function (x) { return x.id === id; })[0] };
    });
    S.whyCache = { key: key, v: v }; return v;
  }
  function fixInfo() {
    var d = dishObj(), out = { slots: [], by: {} };
    if (!d) return out;
    if (isExam(d)) {
      if (!S.whyOpen) return out;
      whyList().forEach(function (w) { w.slots.forEach(function (k) { if (out.slots.indexOf(k) < 0) out.slots.push(k); (out.by[k] = out.by[k] || []).push(Sim.STAT_INFO[w.stat].name); }); });
    } else if (failOpen()) {
      S.fail.slots.forEach(function (k) { out.slots.push(k); out.by[k] = [Sim.STAT_INFO[S.fail.stat].name]; });
    }
    return out;
  }
  function recordGrade(run, d, build) {
    S.runGrade = isExam(d) ? Sim.grade(run, d, build) : null;
    if (S.runGrade && (!S.grades[d.id] || GRADE_RANK[S.runGrade] > GRADE_RANK[S.grades[d.id]])) { S.grades[d.id] = S.runGrade; save('grades2', S.grades); }
  }
  function winCarried() {  // the carried cell already wins: take it as the win
    var d = dishObj(); S.cleared[d.id] = true; S.wins[d.id] = copy(S.carried); save('cleared2', S.cleared); save('wins2', S.wins);
    recordGrade(S.run, d, S.carried);
    showResult();
  }

  // ---------------------------------------------------------------- Adapt: body-slot loadout
  var SLOT_ORDER = Sim.SLOT_ORDER;
  var NEW_SLOT_HINT = { 1: 'New slots: Envelope and Insides. Pick what keeps the acid out.', 2: 'New slot: Signal. Pick how your cells hold their own numbers down.',
    3: 'New slot: Power. Your waste depends on how you make energy.', 4: 'New slot: Division. Dividing in step is the tell.', 5: 'New slot: Reflex. Pick how your cell reacts to the crash.',
    11: 'Hot water. Find the slots that hold a heat card.', 12: 'New slot: Motor. Pick how your cells keep out of the cool water.' };
  // Tag positions on the 600 x 410 diagram: side, top.
  var TAGPOS = { reflex: ['L', 14], envelope: ['L', 92], division: ['L', 174], motor: ['L', 330], signal: ['R', 14], insides: ['R', 92], power: ['R', 174] };
  var TAG_W = 160, TAG_H = 62;
  var COACH = { 1: 'Start here. Pick a card in the list that keeps the acid out.', 2: 'Start here. Pick a Signal card so your cells hold their own numbers down.' };
  // Josh, wave 2 decision 4: tutorial dishes show only the slots you can change. Set to 0 to show locked slots everywhere again.
  var HIDE_LOCKED_BELOW = 5;
  function tagHidden(d, k) { return !!d && !isExam(d) && d.id < HIDE_LOCKED_BELOW && slotStateOf(k) !== 'open'; }
  var LOCK_SVG = '<svg class="lockico" viewBox="0 0 9 10" aria-hidden="true"><rect x="0.5" y="4" width="8" height="5.5" rx="1" fill="currentColor"/><path d="M2.3 4V3a2.2 2.2 0 0 1 4.4 0v1" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
  function mutate(fn) {
    S.undo.push(copy(S.build)); if (S.undo.length > 60) S.undo.shift();
    fn(S.build); S.pointed = false; S.preview = null; renderAdapt(false);
  }
  function commit(nb) {
    S.undo.push(copy(S.build)); if (S.undo.length > 60) S.undo.shift();
    S.build = copy(nb); S.pointed = false; S.preview = null; showPreviewText(PV_HINT, false); syncRuleFromBuild(); renderAdapt(false);
  }
  function setNote(msg) { S.note = msg; S.noteUntil = performance.now() + 3500; renderProblems(); }
  function slotsNow() { return Sim.toSlots(S.build); }
  function cardOrBio(id) { return Cards.part(id) || Cards.bio(id); }
  function fittedIds(k, sl) {
    sl = sl || slotsNow(); var v = sl[k];
    if (k === 'envelope') return v.slice();
    if (k === 'reflex') return v && v.kind === 'bio' ? [v.id] : [];
    return v ? [v] : [];
  }
  function layerArg(k) { return k === 'envelope' ? S.layer : undefined; }
  function slotText(k, sl) {  // what the tag shows as fitted
    var d = dishObj(), ids = fittedIds(k, sl), v = sl[k];
    if (k === 'envelope') {
      if (!ids.length) return 'Empty';
      if (Cards.layersOf(Cards.part(ids[0])) > 1) return cardName(ids[0]) + ' (both layers)';
      return cardName(ids[0]) + ' + ' + (ids[1] ? cardName(ids[1]) : 'empty');
    }
    if (k === 'reflex') return !v ? 'Empty' : v.kind === 'bio' ? Cards.bio(v.id).name : 'Machine rule';
    var t = v ? cardName(v) : 'Empty';
    if (k === 'division' && d && d.dials.indexOf('slop') >= 0) t += ' · Sloppiness ' + S.build.slop;
    return t;
  }
  function slotChange(k) {  // new, swapped or removed against the carried cell
    var a = slotsNow()[k], b = Sim.toSlots(S.carried)[k], ja = JSON.stringify(a), jb = JSON.stringify(b);
    if (ja === jb) return '';
    var ea = k === 'envelope' ? !a.length : !a, eb = k === 'envelope' ? !b.length : !b;
    return eb ? 'new' : ea ? 'removed' : 'swapped';
  }
  // The thick water: words for what the slots do and why some are shut, in place of the first world's.
  var BLURB3 = { signal: 'How a cell tastes the water around it, so it can steer by it.' };
  var NOTE3 = { food: 'The sweetness in the water at the cell\'s own square. The reading is exact.', pause: 'The cell does not divide while the rule fires.' };
  function lockedWords(d, k) {
    if (!d.agents) return Sim.lockedReason(d, k);
    var later = ORDER3.filter(function (id) { var o = Lv.dish(id); return id > d.id && o.slots.indexOf(k) >= 0 && (o.opens || []).indexOf(k) >= 0; })[0];
    return later ? 'Opens on dish ' + later + '.' : 'Not used on these dishes.';
  }
  function slotStateOf(k) { return Sim.slotState(dishObj(), k); }
  function selectable(k) { return slotStateOf(k) === 'open'; }
  function selectSlot(k) {
    if (!selectable(k)) { var lr = Sim.lockedReason(dishObj(), k); setNote(Cards.slotInfo(k).name + ': ' + (dishObj().agents ? lockedWords(dishObj(), k) : lr || 'locked') + (slotStateOf(k) === 'factory' ? ' It cannot be changed yet.' : '')); return false; }
    S.slot = k; S.preview = null; renderAdapt(false); return true;
  }

  // ---- fitting and clearing, always through LookAlive.fit / unfit
  function doFit(k, id) {
    var d = dishObj(), miss = treeMissingIds(id);
    if (miss.length) { r = { ok: false, reason: 'Needs ' + treeNames(miss) + ' fitted first' }; setNote(r.reason); showPreviewText(r.reason, true); return r; }
    var r = Sim.fit(d, S.build, id, layerArg(k));
    if (!r.ok) { setNote(r.reason); showPreviewText(r.reason, true); return r; }
    commit(r.build); return r;
  }
  function doUnfit(k, id) {
    var d = dishObj(), r = Sim.unfit(d, S.build, k, id);
    if (!r.ok) { setNote(r.reason); showPreviewText(r.reason, true); return r; }
    commit(r.build); return r;
  }
  function toggleOption(k, id) { return fittedIds(k).indexOf(id) >= 0 ? doUnfit(k, id) : doFit(k, id); }

  // ---- preview: a plain-words diff, and the option drawn ghosted in place
  function showPreviewText(t, bad, html) { var e = $('pvT'); if (html != null) e.innerHTML = html; else e.textContent = t; e.className = 'pv-t' + (bad ? ' bad' : ''); }
  function pvHtml(prefix, list, d, b) { return esc(prefix) + ' \u2192 ' + (list.length ? changesHtml(list) : '<span class="ef t-neutral">No effect on this cell</span>') + '<span class="ef en">Energy ' + Sim.energyOf(Sim.normalize(b)) + ' of ' + d.energy + '</span>'; }
  var PV_HINT = 'Hover or focus an option to preview it here. Click to fit it; click the fitted option again to take it off.';
  function previewOption(k, id) {
    var d = dishObj(), fitted = id && fittedIds(k).indexOf(id) >= 0, r, name = id ? cardName(id) || (Cards.bio(id) || {}).name : 'nothing';
    if (id && Cards.bio(id)) name = Cards.bio(id).name;
    if (id === null) { r = Sim.unfit(d, S.build, k, k === 'envelope' ? slotsNow().envelope[S.layer] : undefined); name = 'this slot'; }
    else if (fitted) r = Sim.unfit(d, S.build, k, id);
    else r = Sim.fit(d, S.build, id, layerArg(k));
    if (!r.ok) { S.preview = null; showPreviewText(r.reason, true); renderCell(); return; }
    S.preview = { slot: k, build: r.build };
    var list = (id === null || fitted) ? changesBetween(d, S.build, r.build) : effectsFor(d, Cards.part(id) || Cards.bio(id), false).changes;
    showPreviewText('', false, pvHtml(id === null || fitted ? 'Take off ' + (id === null ? 'what is fitted' : name) : 'Fit ' + name, list, d, r.build));
    renderCell(); renderBars();
  }
  // Hovering a dial step previews it the same way; clicking it applies it.
  function previewDial(key, v) {
    var d = dishObj(); if (!d || S.build[key] === v) { clearPreview(); return; }
    var nb = copy(S.build); nb[key] = v;
    S.preview = { slot: null, build: nb };
    showPreviewText('', false, pvHtml((key === 'pace' ? 'Pace ' : 'Sloppiness ') + v, changesBetween(d, S.build, nb), d, nb));
    renderCell(); renderBars();
  }
  function clearPreview() { if (!S.preview && $('pvT').className === 'pv-t' && $('pvT').textContent === PV_HINT) return; S.preview = null; showPreviewText(PV_HINT, false); renderCell(); renderBars(); Array.prototype.forEach.call(document.querySelectorAll('.opt.pv'), function (e) { e.classList.remove('pv'); }); }

  // ---- the cell diagram and its tags
  function figHtml(build, state) {
    if (Sim.isDefault(Sim.normalize(build))) return '<img src="assets/cards/card-factory.jpg" alt="The Factory unit" onerror="this.outerHTML=window.__laFig(0)">';
    return '<svg viewBox="150 50 300 300" aria-hidden="true">' + D.cellArt(Sim.toSlots(build), { state: state || {} }) + '</svg>';
  }
  window.__laFig = function () { return '<svg viewBox="150 50 300 300" aria-hidden="true">' + D.cellArt(Sim.toSlots(S.carried || Sim.DEFAULT_BUILD), {}) + '</svg>'; };
  function renderCell() {
    var d = dishObj(); if (!d || !S.build) return;
    var sl = slotsNow(), state = {}, gh = S.preview;
    SLOT_ORDER.forEach(function (k) { state[k] = slotStateOf(k); });
    var nw = S.pointed ? d.opens : [], lead = '';
    SLOT_ORDER.forEach(function (k) {
      if (tagHidden(d, k)) return;
      var p = TAGPOS[k], a = D.ANCHOR[k], x = p[0] === 'L' ? TAG_W + 2 : 600 - TAG_W - 2, y = p[1] + TAG_H / 2;
      lead += '<line class="leader' + (S.slot === k ? ' sel' : '') + '" x1="' + x + '" y1="' + y + '" x2="' + Math.round(a[0]) + '" y2="' + Math.round(a[1]) + '"/><circle cx="' + Math.round(a[0]) + '" cy="' + Math.round(a[1]) + '" r="2.5" fill="' + (S.slot === k ? '#5fd0ff' : '#8a90a8') + '"/>';
    });
    var fi = fixInfo(), fixSlots = fi.slots;
    $('cellSvg').innerHTML = D.cellArt(sl, { state: state, sel: S.slot, nw: nw, fix: fixSlots, ghost: gh && gh.slot ? gh.slot : null, ghostSlots: gh && gh.slot ? Sim.toSlots(gh.build) : null }) + lead;
    $('cellWrap').classList.toggle('hidelocked', d.id < HIDE_LOCKED_BELOW && !isExam(d));
    drawPortrait(sl, gh);
    var box = $('tagLayer'), carried = S.carried;
    if (!box.firstChild) {
      SLOT_ORDER.forEach(function (k) {
        var p = TAGPOS[k], b = el('button', 'tag'); b.type = 'button'; b.setAttribute('data-slot', k);
        b.style.left = (p[0] === 'L' ? 2 / 6 : (600 - TAG_W - 2) / 6) + '%'; b.style.top = (p[1] / 4.1) + '%';
        b.addEventListener('click', function (e) { if (selectSlot(k) && e.detail === 0) { var f = $('optList').querySelector('.opt, .optempty'); if (f) f.focus({ preventScroll: true }); } });
        box.appendChild(b);
      });
    }
    Array.prototype.forEach.call(box.children, function (b) {
      var k = b.getAttribute('data-slot'), hid = tagHidden(d, k); b.hidden = hid; b.style.display = hid ? 'none' : ''; if (hid) return;
      var st = state[k], info = Cards.slotInfo(k), ch = st === 'open' ? slotChange(k) : '', txt = slotText(k, sl), status = '';
      if (st !== 'open') status = lockedWords(d, k);
      else if (fixSlots.indexOf(k) >= 0) status = '<span class="pill fx">changes ' + esc(fi.by[k].join(', ')) + '</span>';
      else if (S.pointed && d.opens.indexOf(k) >= 0) status = '<span class="pill pt">new slot</span>';
      else if (ch) status = '<span class="pill ' + ch + '">' + ch + '</span>';
      b.className = 'tag' + (fixSlots.indexOf(k) >= 0 ? ' fixhl' : '') + (S.slot === k && st === 'open' ? ' sel' : '') + (st === 'factory' ? ' factory' : st === 'locked' ? ' locked' : '') + (S.pointed && d.opens.indexOf(k) >= 0 ? ' new' : '');
      b.innerHTML = '<span class="tn">' + (st !== 'open' ? LOCK_SVG : '') + esc(info.name) + '</span><span class="tv">' + esc(txt) + '</span><span class="ts">' + status + '</span>';
      b.setAttribute('aria-disabled', st === 'open' ? 'false' : 'true');
      b.setAttribute('aria-label', info.name + ': ' + txt + (st !== 'open' ? '. ' + lockedWords(d, k) : ''));
      b.title = info.name + ' (' + info.where + '). ' + txt + (st !== 'open' ? '. ' + lockedWords(d, k) : '');
    });
    var fl = $('factoryLine'), fac = SLOT_ORDER.filter(function (k) { return tagHidden(d, k) && slotStateOf(k) === 'factory'; });
    if (fac.length) { fl.innerHTML = LOCK_SVG + '<span>Factory fitted, cannot change yet: ' + fac.map(function (k) { return esc(cardName(Lv.FACTORY[k])) + ' (' + esc(Cards.slotInfo(k).name) + ')'; }).join(', ') + '</span>'; fl.style.display = ''; }
    else fl.style.display = 'none';
    var co = $('coach'), ck = S.pointed && COACH[d.id] && !isExam(d) ? d.opens[0] : null;
    if (ck && !tagHidden(d, ck)) {
      var cp = TAGPOS[ck], left = cp[0] === 'L';
      co.className = 'coach ' + (left ? 'cl' : 'cr'); co.textContent = COACH[d.id];
      co.style.top = ((cp[1] + TAG_H / 2) / 4.1) + '%';
      co.style.left = left ? ((TAG_W + 12) / 6) + '%' : ''; co.style.right = left ? '' : ((TAG_W + 12) / 6) + '%';
      co.style.display = '';
    } else co.style.display = 'none';
  }
  $('cellSvg').addEventListener('click', function (e) {
    var g = e.target.closest ? e.target.closest('.slotg') : null; if (!g || !e.target.classList.contains('hl')) return;
    selectSlot(g.getAttribute('data-slot'));
  });

  // ---- the options panel
  function thumbEl(id, cls) {
    if (id === 'machinerule') return el('div', cls + ' noimg', 'R');   // a machine rule has no card picture (a heat rule uses the compass card)
    var img = document.createElement('img'); img.className = cls; img.alt = ''; img.src = 'assets/cards/card-' + id + '.jpg';
    img.onerror = function () { var d2 = el('div', cls + ' noimg', esc((cardOrBio(id) ? cardOrBio(id).name : '?').charAt(0))); if (img.parentNode) img.parentNode.replaceChild(d2, img); };
    return img;
  }
  // The one wording for a stat change, used on cards, in the preview line and for the ghost markers: { stat, words, direction, steps, tone, checked }.
  var STAT_WORDS = { acid: ['Acid defence up', 'Acid defence down'], growth: ['Growth faster', 'Growth slower'], smell: ['Smell closer', 'Smell further off'], natural: ['Naturalness up', 'Naturalness down'], crash: ['Crash survival up', 'Crash survival down'],
    reach: ['Food reach better', 'Food reach worse'], motion: ['Movement closer', 'Movement further off'] };   // reach and motion: the thick water (dishes 15 and 16)
  function effArrows(x) { var a = x.direction === 'up' ? '\u25B2' : '\u25BC', o = ''; for (var i = 0; i < x.steps; i++) o += a; return o; }
  function changesHtml(list) { return list.map(function (x) { return '<span class="ef t-' + x.tone + '">' + esc(x.words) + ' <b>' + effArrows(x) + '</b></span>'; }).join(''); }
  function changesText(list) { return list.map(function (x) { return x.words + ' ' + effArrows(x); }).join(', '); }
  // The same list worked out from two builds (for taking a part off, or a dial step), with the same tones as cardEffects.
  function changesBetween(d, a, b) {
    var out = [], dis = Sim.dissolved(d, b);
    Sim.statDiff(d, a, b).forEach(function (x) {
      if (x.id !== 'acid' && (dis || Sim.dissolved(d, a))) return;
      var moved = x.better !== null || Math.abs(x.delta) >= 0.04 || x.fromState !== x.toState; if (!moved) return;
      var up = x.delta > 0 || (x.delta === 0 && x.health > 0);
      out.push({ stat: x.id, direction: up ? 'up' : 'down', steps: Math.abs(x.health) >= 0.15 ? 2 : 1, words: STAT_WORDS[x.id][up ? 0 : 1], tone: !x.checked ? 'neutral' : x.better === true ? 'good' : x.better === false ? 'bad' : 'neutral', checked: x.checked });
    });
    return out;
  }
  // Workaround for a simulation gap: when the cell without the card is dissolved by the acid (dish 1), cardEffects leaves out every non-acid stat because
  // nothing is left to measure. The page adds the Growth change against the same cell on an acid-free copy of the dish (the cost the card puts on births).
  var d0cache = {};
  function acidFree(d) {
    if (!d0cache[d.id]) { var x = copy(d); x.id = 'af' + d.id; delete x.acid; x.aliveOnly = false; x.band = { lo: 0.05, hi: 0.15, need: 0.7, warm: 30 }; x.suspicion = true; x.channels = ['casualties']; d0cache[d.id] = x; }
    return d0cache[d.id];
  }
  function effectsFor(d, c, fitted) {
    var ef = Sim.cardEffects(d, S.build, c.id);
    if (!d.aliveOnly || !ef.preview || !ef.build) return ef;
    var base = fitted ? Sim.unfit(d, S.build, c.slot, c.id) : { ok: true, build: S.build }, nb = fitted ? S.build : ef.build;
    if (!base.ok || !Sim.dissolved(d, base.build) || Sim.dissolved(d, nb)) return ef;
    var ref = Sim.stats(acidFree(d), base.build), now = Sim.stats(d, nb);
    now.forEach(function (x, i) {
      if (x.id === 'acid') return;
      var dl = x.value - ref[i].value; if (Math.abs(dl) < 0.03) return;
      var up = dl > 0;
      ef.changes.push({ stat: x.id, name: x.name, direction: up ? 'up' : 'down', steps: Math.abs(dl) >= 0.15 ? 2 : 1, words: STAT_WORDS[x.id][up ? 0 : 1], tone: !x.checked ? 'neutral' : x.state === 'safe' ? 'good' : 'bad', checked: x.checked });
    });
    return ef;
  }
  function optionEl(k, c) {
    var mach = c.shelf === 'machine', fitted = fittedIds(k).indexOf(c.id) >= 0, w = el('div', 'opt ' + (mach ? 'mach' : 'bio')), r = null, why = '';
    w.setAttribute('data-id', c.id); w.setAttribute('role', 'button'); w.tabIndex = 0;
    var miss = fitted ? [] : treeMissingIds(c.id);
    if (!fitted) { r = Sim.fit(dishObj(), S.build, c.id, layerArg(k)); if (!r.ok) why = r.reason; }
    if (miss.length) why = 'Needs ' + treeNames(miss) + ' fitted first';
    w.setAttribute('aria-pressed', fitted ? 'true' : 'false');
    if (fitted) w.classList.add('fitted'); if (why) w.classList.add('blocked');
    var real = c.real, d0 = dishObj(), game = c.game || c.sentence, ef = effectsFor(d0, c, fitted), g3 = null;
    if (d0.agents) { g3 = c.game3 || (c.world === 3 ? c.game : c.real); game = g3; }   // the thick water: a card's game3 text; its own text if it is new here; else the real biology
    var inn = el('div', 'in'), tb = el('div', 'thumbbox'), tx = el('div', 'otxt');
    tb.appendChild(thumbEl(c.id, 'thumb')); tb.appendChild(el('div', 'fittag', 'Fitted'));
    var en = c.kind === 'metabolism' || c.kind === 'part' ? (c.energy ? 'Energy ' + c.energy : 'No energy') : 'No energy';
    var chg = ef.changes.length ? changesHtml(ef.changes) : '<span class="ef t-neutral">No effect on this cell</span>';
    var lead = fitted ? '<span class="ef lead">Fitted. Doing:</span>' : '';
    var chgTxt = (fitted ? 'Fitted. Doing: ' : 'Changes: ') + (ef.changes.length ? changesText(ef.changes) : 'No effect on this cell') + ' \u00B7 ' + en;
    w.title = game + (c.layers > 1 ? ' Takes both Envelope layers.' : '');
    tx.innerHTML = '<div class="oh"><b>' + esc(c.name) + '</b><span class="shelf ' + (mach ? 'mach' : 'bio') + '">' + (mach ? 'Machine' : 'Biology') + '</span></div>' +
      '<div class="eff chg" title="' + esc(chgTxt) + '">' + (fitted ? lead : '<i>Changes:</i>') + '<span>' + chg + '<span class="ef en">' + en + '</span></span></div>' +
      (g3 != null ? '<p class="g3" title="' + esc(g3) + '">' + esc(g3) + '</p>' : '') +
      (g3 !== real ? '<p class="real" title="' + esc(real) + '"><i>Real</i>' + esc(real) + '</p>' : '') +
      '<div class="why' + (miss.length ? ' wlink' : '') + '">' + (why ? '<span class="wt">' + esc(why) + '</span>' : (c.layers > 1 ? 'Takes both Envelope layers.' : '')) + (miss.length ? '<button type="button" class="treelink">Show in the skill tree</button>' : '') + '</div>';
    inn.appendChild(tb); inn.appendChild(tx); w.appendChild(inn);
    var tl = w.querySelector('.treelink');
    if (tl) { tl.addEventListener('click', function (e) { e.stopPropagation(); treeOpen(tl, c.id); }); tl.addEventListener('keydown', function (e) { e.stopPropagation(); }); }
    w.addEventListener('click', function () { toggleOption(k, c.id); });
    w.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); S.focusId = c.id; toggleOption(k, c.id); } });
    w.addEventListener('mouseenter', function () { previewOption(k, c.id); w.classList.add('pv'); });
    w.addEventListener('focus', function () { previewOption(k, c.id); w.classList.add('pv'); });
    w.addEventListener('mouseleave', function () { w.classList.remove('pv'); clearPreview(); });
    w.addEventListener('blur', function () { w.classList.remove('pv'); clearPreview(); });
    return w;
  }
  function emptyOptionEl(k) {
    var sl = slotsNow(), isEmpty = fittedIds(k).length === 0, w = el('div', 'optempty' + (isEmpty ? ' fitted' : ''));
    w.setAttribute('role', 'button'); w.tabIndex = 0; w.setAttribute('data-id', 'empty'); w.setAttribute('aria-pressed', isEmpty ? 'true' : 'false');
    var target = k === 'envelope' ? sl.envelope[S.layer] : undefined;
    w.innerHTML = '<span>Empty' + (k === 'envelope' ? ' (this layer)' : '') + '</span><span>' + (isEmpty ? 'Fitted' : 'take it off') + '</span>';
    function go() { if (isEmpty || (k === 'envelope' && !target)) { showPreviewText('This slot is already empty.', false); return; } doUnfit(k, target); }
    w.addEventListener('click', go); w.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); S.focusId = 'empty'; go(); } });
    w.addEventListener('mouseenter', function () { if (!isEmpty && !(k === 'envelope' && !target)) previewOption(k, null); });
    w.addEventListener('focus', function () { if (!isEmpty && !(k === 'envelope' && !target)) previewOption(k, null); });
    w.addEventListener('mouseleave', clearPreview); w.addEventListener('blur', clearPreview);
    return w;
  }
  function renderLayers(k) {
    var box = $('layerRows'); box.innerHTML = '';
    if (k !== 'envelope') return;
    var env = slotsNow().envelope, shell = env.length && Cards.layersOf(Cards.part(env[0])) > 1;
    S.layer = Math.min(S.layer, shell ? 0 : Math.min(1, env.length));
    for (var i = 0; i < 2; i++) {
      (function (i) {
        var b = el('button', 'lr' + (S.layer === i ? ' on' : '')); b.type = 'button'; b.setAttribute('data-layer', i);
        b.innerHTML = '<small>Layer ' + (i + 1) + (i === 0 ? ' (outer)' : ' (inner)') + '</small><span>' + (shell ? esc(cardName(env[0])) + ': both layers' : env[i] ? esc(cardName(env[i])) : 'Empty') + '</span>';
        b.addEventListener('click', function () { S.layer = i; S.preview = null; renderOptions(); showPreviewText(PV_HINT, false); });
        box.appendChild(b);
      })(i);
    }
  }
  function dialEl(key, compact) {
    var w = el('div', 'dialrow'), names = key === 'pace' ? PACE_NAMES : SLOP_NAMES;
    w.innerHTML = '<span class="dl">' + (key === 'pace' ? 'Pace' : 'Sloppy') + '</span><div class="ticks ' + key + '"></div><div class="dtext"><b></b><span></span></div>';
    var tk = w.querySelector('.ticks');
    for (var i = 0; i <= 8; i++) {
      (function (i) { var b = el('button', '', String(i)); b.type = 'button'; b.setAttribute('data-dial', key + i); b.title = names[i];
        b.addEventListener('click', function () { if (S.build[key] !== i) mutate(function (bb) { bb[key] = i; }); });
        b.addEventListener('mouseenter', function () { previewDial(key, i); }); b.addEventListener('focus', function () { previewDial(key, i); });
        b.addEventListener('mouseleave', clearPreview); b.addEventListener('blur', clearPreview); tk.appendChild(b); })(i);
    }
    return w;
  }
  function updateDial(w, key, pr) {
    var v = S.build[key], names = key === 'pace' ? PACE_NAMES : SLOP_NAMES;
    Array.prototype.forEach.call(w.querySelectorAll('button'), function (b, i) { b.classList.toggle('on', i === v); });
    w.querySelector('.dtext b').textContent = v + ': ' + names[v] + (S.carried && S.carried[key] !== v ? ' (changed)' : '');
    w.querySelector('.dtext span').textContent = (key === 'pace' ? pr.pace : pr.slop).join(' · ');
  }
  function renderOptions() {
    var d = dishObj(), k = S.slot, info = Cards.slotInfo(k), list = $('optList');
    if (!selectable(k)) { k = S.slot = d.slots[0]; info = Cards.slotInfo(k); }
    $('optName').innerHTML = esc(info.name) + (S.pointed && d.opens.indexOf(k) >= 0 ? ' <span class="pill pt">new slot</span>' : '');
    $('optBlurb').textContent = (d.agents && BLURB3[k] || info.blurb) + ' On the cell: ' + info.where + '.';
    renderLayers(k);
    var keepTop = list.scrollTop;
    list.innerHTML = '';
    Sim.offered(d, k).forEach(function (c) { list.appendChild(optionEl(k, c)); });
    if (info.empty) list.appendChild(emptyOptionEl(k));
    if (k === 'reflex' && d.allowed.sensors.length) { var rb = el('div', 'rulebox'); rb.id = 'ruleBox'; list.appendChild(rb); renderRuleBox(); }
    list.classList.toggle('showreal', !!S.real); list.classList.toggle('g3', !!d.agents);
    list.scrollTop = S.lastOptSlot === k ? keepTop : 0; S.lastOptSlot = k;
    if (S.focusId) { var ft = list.querySelector('[data-id="' + S.focusId + '"]'); S.focusId = null; if (ft) ft.focus({ preventScroll: true }); }
  }

  // ---------------------------------------------------------------- machine rule: tap-to-fill sentence (the Reflex slot's Machine option)
  function ruleComplete() { var r = S.rule; return r.sensor && r.cmp && r.value != null && r.action; }
  // Values a sensor offers on this dish: a dish with its own rule (habitat 3) lists them in d.rule.marks, every other dish uses the card's list.
  function ruleValues(d, id) { return d && d.rule && d.rule.marks && d.rule.marks[id] ? d.rule.marks[id] : Cards.sensor(id).values; }
  function ruleOtherwise(d) { return S.rule.otherwise || (d && d.rule && d.rule.defaultOtherwise) || null; }
  // The rule of an agent dish (dish 16): WHEN <sensor> <is above | is below> <mark> / DO <action> / OTHERWISE <action>, on three fixed rows with fixed-width blanks.
  function ruleBlank3(kind, text, filled, title) { return '<button type="button" class="blank b-' + kind + (filled ? '' : ' empty') + '" data-rule="' + kind + '" title="' + esc(title || text) + '">' + esc(text) + '</button>'; }
  function renderRuleBox3() {
    var d = dishObj(), box = $('ruleBox'), r = S.rule; if (!box) return;
    var sn = r.sensor ? Cards.sensor(r.sensor) : null, ac = r.action ? Cards.action(r.action) : null, ow = ruleOtherwise(d), oa = ow ? Cards.action(ow) : null;
    var inst = S.build.reflex && S.build.reflex.kind === 'machine';
    var vtxt = r.value != null ? String(r.value) + (sn && sn.unit ? ' ' + sn.unit : '') : 'mark';
    var rows = '<div class="r3row"><span class="r3k">WHEN</span>' + ruleBlank3('sensor', sn ? sn.name : 'sensor', !!sn) + ruleBlank3('cmp', r.cmp ? (r.cmp === 'lt' ? 'is below' : 'is above') : 'above / below', !!r.cmp) + ruleBlank3('value', vtxt, r.value != null) + '</div>' +
      '<div class="r3row"><span class="r3k">DO</span>' + ruleBlank3('action', ac ? ac.name : 'action', !!ac) + '</div>' +
      '<div class="r3row"><span class="r3k">OTHERWISE</span>' + ruleBlank3('otherwise', oa ? oa.name : 'action', !!oa) + '</div>';
    var note = (sn ? (NOTE3[sn.id] || sn.note) + ' ' : '') + (ac ? (NOTE3[ac.id] || ac.note) : '');
    box.className = 'rulebox' + (inst ? ' sel' : '');
    box.innerHTML = '<div class="rulecard rule3"><div class="c-head"><b>Machine rule</b><span class="shelf mach">Machine</span><span class="cost">No energy</span></div>' + rows +
      '<div class="rulenote">' + esc(note || 'Tap each blank to fill in the rule. A cell reads only its own square, and the reading is exact: no real cell can do that.') + '</div>' +
      '<div class="rulebtns"><button type="button" id="ruleUse"' + (ruleComplete() && !inst ? '' : ' disabled') + '>Use this rule</button><button type="button" id="ruleClear"' + (inst ? '' : ' disabled') + '>Remove rule</button></div></div>';
    Array.prototype.forEach.call(box.querySelectorAll('[data-rule]'), function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); openRulePop(b, b.getAttribute('data-rule')); });
    });
    $('ruleUse').addEventListener('click', installRule);
    $('ruleClear').addEventListener('click', function () { doUnfit('reflex'); });
  }
  function ruleBlank(kind, text, filled) { return '<button type="button" class="blank' + (filled ? '' : ' empty') + '" data-rule="' + kind + '">' + esc(text) + '</button>'; }
  function renderRuleBox() {
    var d = dishObj(), box = $('ruleBox'), r = S.rule; if (!box) return;
    if (d.agents) { renderRuleBox3(); return; }
    var sn = r.sensor ? Cards.sensor(r.sensor) : null, ac = r.action ? Cards.action(r.action) : null;
    var inst = S.build.reflex && S.build.reflex.kind === 'machine';
    var sent = 'When ' + ruleBlank('sensor', sn ? sn.name : 'sensor', !!sn) + ' is ' + ruleBlank('cmp', r.cmp ? (r.cmp === 'lt' ? 'less than' : 'more than') : 'more / less', !!r.cmp) + ' ' +
      ruleBlank('value', r.value != null ? r.value + (sn && sn.unit ? ' ' + sn.unit : '') : 'value', r.value != null) + ', then ' + ruleBlank('action', ac ? ac.name : 'action', !!ac) + '.';
    var note = (sn ? sn.note + ' ' : '') + (ac ? ac.note : '');
    box.className = 'rulebox' + (inst ? ' sel' : '');
    box.innerHTML = '<div class="rulecard"><div class="c-head"><b>Machine rule</b><span class="shelf mach">Machine</span><span class="cost">No energy</span></div>' +
      '<div class="rulesent">' + sent + '</div>' +
      '<div class="rulenote">' + esc(note || 'Tap each blank to fill in the sentence. Readings are exact and instant: no real cell can do that.') + '</div>' +
      '<div class="rulebtns"><button type="button" id="ruleUse"' + (ruleComplete() && !inst ? '' : ' disabled') + '>Use this rule</button><button type="button" id="ruleClear"' + (inst ? '' : ' disabled') + '>Remove rule</button></div></div>';
    Array.prototype.forEach.call(box.querySelectorAll('[data-rule]'), function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); openRulePop(b, b.getAttribute('data-rule')); });
    });
    $('ruleUse').addEventListener('click', installRule);
    $('ruleClear').addEventListener('click', function () { doUnfit('reflex'); });
  }
  function ruleChoose(kind, val) {
    var r = S.rule;
    if (kind === 'sensor') { r.sensor = val; if (ruleValues(dishObj(), val).indexOf(r.value) < 0) r.value = null; }
    else r[kind] = val;
    var inst = S.build.reflex && S.build.reflex.kind === 'machine';
    if (ruleComplete() && inst) installRule(); else renderRuleBox();
    renderAdapt(false);
  }
  function installRule() {
    if (!ruleComplete()) return;
    var r = S.rule, d = dishObj(), rf = { kind: 'machine', sensor: r.sensor, cmp: r.cmp, value: r.value, action: r.action };
    if (d.agents) rf.otherwise = ruleOtherwise(d);   // an agent dish's rule is "when ..., X; otherwise Y"
    var res = Sim.fit(d, S.build, rf);
    if (!res.ok) { setNote(res.reason); return; }
    commit(res.build);
  }
  function openRulePop(btn, kind) {
    var d = dishObj(), items = [], r = S.rule;
    if (kind === 'sensor') d.allowed.sensors.forEach(function (id) { var s = Cards.sensor(id); items.push({ label: s.name + (s.global ? '  (global)' : ''), note: s.note, v: id }); });
    else if (kind === 'cmp') items = d.agents ? [{ label: 'is above', v: 'gt' }, { label: 'is below', v: 'lt' }] : [{ label: 'more than', v: 'gt' }, { label: 'less than', v: 'lt' }];
    else if (kind === 'value') {
      if (!r.sensor) { setNote('Pick a sensor first.'); return; }
      ruleValues(d, r.sensor).forEach(function (v) { items.push({ label: String(v) + (Cards.sensor(r.sensor).unit ? ' ' + Cards.sensor(r.sensor).unit : ''), v: v }); });
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
    var b = e.target.closest ? e.target.closest('button') : null; if (b && b.type === 'button') b.blur();
  });

  // ---------------------------------------------------------------- Adapt: render
  function renderEnergy(d, pr) {
    var bar = $('energyBar'); bar.innerHTML = '';
    var used = pr.energy.used, max = d.energy, fac = 0;
    SLOT_ORDER.forEach(function (k) { if (slotStateOf(k) !== 'open') { var f = Lv.FACTORY[k], c = f && Cards.part(f); if (c) fac += c.energy; } });
    for (var i = 0; i < Math.max(max, used); i++) { var u = el('i', i < fac ? 'fac' : i < used ? (i >= max ? 'over' : 'used') : ''); if (i < fac) u.title = 'Factory fitted'; bar.appendChild(u); }
    $('energyNum').textContent = used + '/' + max;
  }
  function renderProblems() {
    var d = dishObj(); if (!d || !S.build) return;
    var v = Sim.validate(d, S.build), box = $('problems'), html = '';
    if (S.note && performance.now() < S.noteUntil) html += '<div>' + esc(S.note) + '</div>';
    v.problems.forEach(function (p) { html += '<div>' + esc(p) + '</div>'; });
    if (v.ok && !html) html = '<div class="ok">Legal cell. Ready to run.</div>';
    box.innerHTML = html; $('runBtn').disabled = !v.ok;
    return v;
  }
  // ---- the stat bars (Forecast). One row per stat, fixed height; ghost marker and arrow sit in reserved spots.
  var STAT_ORDER = Sim.STAT_ORDER;
  function buildBars(box, ids) {
    box.innerHTML = ''; box.setAttribute('data-ids', ids.join(','));
    ids.forEach(function (id) {
      var row = el('div', 'sb');
      row.setAttribute('data-stat', id);
      row.innerHTML = '<div class="sb-top"><span class="sb-name">' + esc(Sim.STAT_INFO[id].name) + '</span><span class="sb-tag"></span><span class="sb-arrow"></span></div>' +
        '<div class="sb-track"><i class="sb-zone"></i><i class="sb-ghost"></i><i class="sb-mark"></i></div><div class="sb-verdict"></div>';
      box.appendChild(row);
    });
  }
  function pos(v) { return (Math.max(0, Math.min(1, v)) * 100).toFixed(1) + '%'; }
  // s: the stat now. o: { ghost: stat to show as a ghost marker, diff: statDiff entry (for the arrow), fail: show the failed tag, ghostVerdict: bool }
  function setBar(row, s, o) {
    o = o || {};
    var z = row.querySelector('.sb-zone'), m = row.querySelector('.sb-mark'), g = row.querySelector('.sb-ghost'), v = row.querySelector('.sb-verdict'), ar = row.querySelector('.sb-arrow'), tg = row.querySelector('.sb-tag');
    var unc = s.state === 'unchecked';   // not checked on this dish: greyed, no safe zone, never red
    z.style.display = unc ? 'none' : '';
    z.style.left = pos(s.safe[0]); z.style.width = ((s.safe[1] - s.safe[0]) * 100).toFixed(1) + '%';
    var ok = s.state === 'safe', edge = s.state === 'edge';
    if (s.value == null) m.style.display = 'none'; else { m.style.display = ''; m.style.left = pos(s.value); }
    m.className = 'sb-mark ' + (unc ? 'neu' : ok ? 'ok' : edge ? 'amb' : 'bad');
    var gh = o.ghost, showG = gh && gh.value != null && (s.value == null || Math.abs(gh.value - s.value) >= 0.004 || gh.state !== s.state);
    if (o.forecast) { showG = o.forecast.value != null && (s.value == null || Math.abs(o.forecast.value - s.value) >= 0.004); gh = o.forecast; }
    g.style.display = showG ? '' : 'none';
    // ghost colour = the tone of the change (the same tone as the card's words)
    var gtone = 'bad';
    if (showG && o.ghost) gtone = unc ? 'neu' : (o.diff && o.diff.better === true) ? 'ok' : (o.diff && o.diff.better === false) ? 'bad' : gh.state === 'safe' ? 'ok' : gh.state === 'edge' ? 'amb' : 'bad';
    if (showG) { g.style.left = pos(gh.value); g.className = 'sb-ghost' + (o.forecast ? ' fc' : ' ' + gtone); }
    var txt = s.verdict, cls = unc ? 'neu' : ok ? 'ok' : edge ? 'amb' : 'bad';
    if (o.ghost && showG) { txt = '\u2192 ' + gh.verdict; cls = gtone + ' pv'; }
    if (v.textContent !== txt) v.textContent = txt;
    v.className = 'sb-verdict ' + cls;
    var arrow = '', acl = '';
    if (o.ghost && o.diff && showG) {
      var up = o.diff.delta >= 0; arrow = Math.abs(o.diff.delta) < 0.004 ? '' : up ? '\u25B2' : '\u25BC';
      acl = o.diff.better === true ? 'good' : o.diff.better === false ? 'badc' : 'flat';
    }
    ar.textContent = arrow; ar.className = 'sb-arrow ' + acl;
    var failed = !!o.fail && !unc;
    tg.textContent = failed ? 'this is what failed' : ''; tg.className = 'sb-tag' + (failed ? ' on' : '');
    row.classList.toggle('failed', failed); row.classList.toggle('unchecked', unc);
  }
  function renderBars() {
    var d = dishObj(), box = $('statBars'); if (!d || !S.build) return;
    if (box.getAttribute('data-ids') !== d.stats.join(',')) buildBars(box, d.stats);
    var cur = Sim.stats(d, S.build), gh = S.preview ? Sim.stats(d, S.preview.build) : null, df = S.preview ? Sim.statDiff(d, S.build, S.preview.build) : null, open = failOpen();
    var dis = S.preview && Sim.dissolved(d, S.preview.build);
    Array.prototype.forEach.call(box.children, function (row, i) {
      var s = cur[i], hide = (dis || Sim.dissolved(d, S.build)) && s.id !== 'acid';
      setBar(row, s, { ghost: gh && !hide ? gh[i] : null, diff: df && !hide ? df[i] : null, fail: open && S.fail.stat === s.id });
    });
    renderFixLine(d, cur);
  }
  function fixWords(fx) {
    return fx.map(function (f) { return f.kind === 'slot' ? f.name + ' slot' : f.name; }).join(', ');
  }
  function renderFixLine(d, cur) {
    var e = $('fixLine'), t = '', cls = 'fixline';
    if (S.fail && !isExam(d)) {
      var nm = Sim.STAT_INFO[S.fail.stat].name;
      if (failOpen()) { if (S.fail.fixers.length) { t = (S.fail.fixers[0].full ? 'Changes ' : 'Helps a little: ') + nm + ': ' + fixWords(S.fail.fixers); cls += ' on'; } }
      else { t = nm + ' is safe now. Press Run.'; cls += ' done'; }
    }
    if (e.textContent !== t) e.textContent = t; e.className = cls;
  }
  // Exam dishes: "What changes this?" lists the slots and dials that move the stat (statFixers), unranked.
  function whyHtml() {
    var d = dishObj(), l = whyList(), h = '';
    if (!l.length) return '<div class="okline">Every checked stat is inside its zone. Press Run.</div>';
    l.forEach(function (w) {
      var nm = Sim.STAT_INFO[w.stat].name, names = w.fixers.map(function (f) { return f.kind === 'slot' ? f.name + ' slot' : f.name; });
      h += '<div><b>' + esc(nm) + '</b> <span class="dim2">(' + esc(w.state ? w.state.verdict : '') + ')</span>: ' + (names.length ? (w.fixers[0].full ? '' : 'a little, with ') + esc(names.join(', ')) : 'no single slot or dial fixes it alone; try two changes') + '</div>';
    });
    return h;
  }
  function renderTips() {
    var d = dishObj(), a = S.lastAutopsy, txt = '', btn = $('tipBtn'), ex = isExam(d);
    if (ex) {
      if (S.whyOpen) txt = (a ? '<div class="exhint"><b>Last loss:</b> ' + esc(Lv.tip(d, a.cause)[1]) + '</div>' : '') + whyHtml();
      btn.disabled = false; btn.textContent = S.whyOpen ? 'Hide: what changes this?' : 'What changes this?';
      $('tipHint').textContent = S.whyOpen ? '' : 'Exam: no answer tips. Lists what moves a stat, unranked.';
      $('tipText').innerHTML = txt;
      var mt0 = $('memoTip'); if (mt0) mt0.innerHTML = txt;
      var mb0 = $('memoTipBtn'); if (mb0) mb0.textContent = S.whyOpen ? 'Hide' : 'What changes this?';
      return;
    }
    if (a && S.tipLevel >= 1) txt = '<div>' + esc(Lv.tip(d, a.cause)[1]) + '</div>';
    btn.disabled = !a; btn.textContent = 'Tip';
    $('tipHint').textContent = !a ? 'Tips appear after your cell fails.' : S.tipLevel === 0 ? 'Free. Names one part to try.' : '';
    $('tipText').innerHTML = txt;
    var mt = $('memoTip'); if (mt) mt.innerHTML = txt;
    var mb = $('memoTipBtn'); if (mb) mb.textContent = btn.textContent;
  }
  function pressTip() {
    var d = dishObj();
    if (isExam(d)) { S.whyOpen = !S.whyOpen; if (S.screen === 'adapt') renderAdapt(false); else renderTips(); return; }
    if (!S.lastAutopsy) return;
    S.tipLevel = 1; renderTips();
  }
  function startStandard() {
    var d = dishObj(); if (!isExam(d)) return;
    var c = Lv.standard(d.id); if (!c) return;
    S.layer = 0; S.rule = blankRule();
    commit(Sim.conform(d, c));
  }
  function renderAdapt(full) {
    var d = dishObj(); if (!d) return;
    if (full || S.shownDish !== d.id) {
      S.shownDish = d.id; $('tagLayer').innerHTML = '';
      var pb = $('paceBox'); pb.innerHTML = ''; pb.style.display = d.dials.indexOf('pace') >= 0 ? '' : 'none';
      if (d.dials.indexOf('pace') >= 0) pb.appendChild(dialEl('pace'));
      var sb = $('slopBox'), sh = $('slopHint'), hasSlop = d.dials.indexOf('slop') >= 0; sb.innerHTML = ''; sb.style.display = hasSlop ? '' : 'none'; sh.style.display = hasSlop ? '' : 'none';
      if (hasSlop) { sb.appendChild(dialEl('slop')); sh.textContent = 'Sloppy = random timing: looks more natural, grows a bit slower.'; }
      if (!selectable(S.slot)) S.slot = d.opens[0] || d.slots[0];
      var ex = isExam(d); $('stdBtn').style.display = ex ? '' : 'none'; $('tipBtn').textContent = ex ? 'What changes this?' : 'Tip'; $('tipbox').classList.toggle('exam', ex);
      showPreviewText(PV_HINT, false);
    }
    var pr = Sim.predict(d, S.build);
    renderCell(); renderOptions(); renderEnergy(d, pr); renderBars();
    if (d.dials.indexOf('pace') >= 0) updateDial($('paceBox').firstChild, 'pace', pr);
    if (d.dials.indexOf('slop') >= 0) updateDial($('slopBox').firstChild, 'slop', pr);
    renderProblems(); renderTips();
    $('undo').disabled = !S.undo.length;
    $('reset').disabled = JSON.stringify(S.build) === JSON.stringify(S.carried);
    refresh();
  }
  // Apply a level fix through the slot functions (the same calls the page's clicks make). Returns the list of steps taken.
  function fixViaSlots(id) {
    var d = dishObj(), f = d.fixes.filter(function (x) { return x.id === id; })[0], c = f.changes, steps = [];
    function note(what, r) { steps.push(what + ': ' + (r.ok ? 'ok' : r.reason)); return r; }
    (c.remove || []).forEach(function (cid) { var k = Cards.part(cid).slot; var r = Sim.unfit(d, S.build, k, cid); if (r.ok) commit(r.build); note('remove ' + cid, r); });
    (c.add || []).forEach(function (cid) { var k = Cards.part(cid).slot; S.slot = k; var r = Sim.fit(d, S.build, cid, k === 'envelope' ? S.layer : undefined); if (r.ok) commit(r.build); note('fit ' + cid, r); });
    if (c.set) { if (c.set.metabolism) { var r1 = Sim.fit(d, S.build, c.set.metabolism); if (r1.ok) commit(r1.build); note('power ' + c.set.metabolism, r1); }
      ['pace', 'slop'].forEach(function (k) { if (c.set[k] != null) { mutate(function (bb) { bb[k] = c.set[k]; }); steps.push(k + ' ' + c.set[k]); } }); }
    if (c.reflex) { var rr = Sim.fit(d, S.build, c.reflex.kind === 'bio' ? c.reflex.id : c.reflex); if (rr.ok) commit(rr.build); note('reflex', rr); }
    return steps;
  }

  // ---------------------------------------------------------------- Run: start
  function doRun() {
    var d = dishObj(); if (!d) return null;
    var v = Sim.validate(d, S.build); if (!v.ok) { renderProblems(); return null; }
    compareSet(false); var C = S.cmp, prevRec = S.prev[d.id] || null;
    if (C.kept && !C.base) C.base = prevRec;   // Keep switched on before any baseline existed: the first earlier run becomes the baseline
    S.ghost = C.kept && C.base ? C.base : prevRec;
    var run = simulate(S.build);
    S.mode = 'run'; S.run = run; S.runCount++; if (!(C.kept && C.base)) S.prev[d.id] = { share: run.H.share, total: run.H.total, build: copy(S.build) };
    ezReset(); S.ez.tPrev = 0; cmpSync();
    S.stopAt = null; S.runFinished = false; S.t = 0; S.playing = true; S.resultShown = false; S.troubleTick = trouble(run); S.speed = d.agents ? 1 : 2; setSpeedUI();
    if (run.v.win) { S.cleared[d.id] = true; S.wins[d.id] = copy(S.build); save('cleared2', S.cleared); save('wins2', S.wins); S.lastRunLost = false; recordGrade(run, d, S.build); }
    else { S.lastAutopsy = run.autopsy; S.lastRunLost = true; S.tipLevel = 0; setFail(run, S.build); }
    closeOverlay(); show('run');
    return run;
  }

  // ---------------------------------------------------------------- Run: compare with the previous run (hold the button to see it in the dish at the same tick and camera)
  function cmpDiffText(prevB, curB, d) {
    var out = [], pn = Sim.normalize(prevB), cn = Sim.normalize(curB);
    if (pn.metabolism !== cn.metabolism) out.push('Power ' + cardName(pn.metabolism) + ' to ' + cardName(cn.metabolism));
    (cn.parts || []).forEach(function (id) { if ((pn.parts || []).indexOf(id) < 0) out.push(cardName(id) + ' added'); });
    (pn.parts || []).forEach(function (id) { if ((cn.parts || []).indexOf(id) < 0) out.push(cardName(id) + ' removed'); });
    var pr = pn.reflex ? JSON.stringify(pn.reflex) : '', cr = cn.reflex ? JSON.stringify(cn.reflex) : '';
    if (pr !== cr) out.push(!pn.reflex ? reflexName(cn.reflex) + ' added' : !cn.reflex ? reflexName(pn.reflex) + ' removed' : (reflexName(pn.reflex) === reflexName(cn.reflex) ? reflexName(cn.reflex) + ' changed' : reflexName(pn.reflex) + ' to ' + reflexName(cn.reflex)));
    if (pn.pace !== cn.pace) out.push('Pace ' + pn.pace + ' to ' + cn.pace);
    if ((pn.slop || 0) !== (cn.slop || 0)) out.push('Sloppiness ' + (pn.slop || 0) + ' to ' + (cn.slop || 0));
    if (!out.length) return 'Nothing differs: this is the same cell as the previous run.';
    var eff = ''; try { eff = changesText(changesBetween(d, prevB, curB)); } catch (e) { eff = ''; }
    return 'Changed: ' + out.join(', ') + (eff ? '. Effect: ' + eff : '');
  }
  function cmpSupported() { var g = GL.r; return !g || !g.supported || typeof g.eventZoom === 'function'; }   // a renderer that can keep the camera across setRun; the simple 2D view needs nothing
  function cmpSync() {
    var C = S.cmp, run = S.run, b = $('cmpBtn'), base = S.screen === 'run' && S.mode === 'run' ? S.ghost : null, why = '';
    if (!base || !base.build) why = S.mode === 'watch' ? 'Compare works on your own runs, not on Watch.' : 'No previous run on this dish yet. Run a changed cell and this holds the one before.';
    else if (!cmpSupported()) why = 'This view cannot hold the camera still while swapping runs.';
    b.disabled = !!why; b.title = why || 'Hold to see the previous run in the dish at this tick. Release to come back.';
    $('cmpKeep').checked = C.kept; $('cmpKeepL').title = 'Keep: later runs compare against the same previous run instead of replacing it.';
    C.diff = why ? '' : cmpDiffText(base.build, run.build, run.dish);
    var t = why ? 'Nothing to compare yet.' : C.diff; if ($('cmpDiff').textContent !== t) { $('cmpDiff').textContent = t; $('cmpDiff').title = t; }
    C.available = !why;
  }
  // The previous run, simulated once with the game's own path and cached until the baseline changes.
  function cmpRun() { var C = S.cmp, base = S.ghost; if (!base || !base.build) return null; if (!C.run || C.runFor !== base) { C.run = simulate(base.build); C.runFor = base; } return C.run; }
  function compareSet(on) {
    var C = S.cmp, g = GL.r, want = !!on; if (!C) return false;
    if (want) { if (S.screen !== 'run' || S.mode !== 'run' || !S.run || $('cmpBtn').disabled || S.overlayOpen) want = false; else if (!cmpRun()) want = false; }
    if (want === C.held) return C.held;
    C.held = want; var shown = want ? C.run : S.run;
    if (g && g.supported && shown && g.run !== shown) { try { setGLRun(g, shown, true); g.setTick(Math.min(S.t, shown.T)); } catch (e) { if (window.console) console.error(e && e.stack || e); } }
    var b = $('cmpBtn'); b.classList.toggle('held', want); b.textContent = want ? 'Showing: previous run' : 'Hold: previous run';
    return C.held;
  }
  (function () {
    var b = $('cmpBtn'), down = function () { compareSet(true); }, up = function () { compareSet(false); };
    b.addEventListener('pointerdown', function (e) { if (e.button) return; down(); });
    ['pointerup', 'pointercancel', 'pointerleave', 'blur'].forEach(function (n) { b.addEventListener(n, up); });
    b.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!e.repeat) down(); } });
    b.addEventListener('keyup', function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); up(); } });
    b.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    $('cmpKeep').addEventListener('change', function () { S.cmp.kept = this.checked; S.cmp.base = this.checked ? S.ghost || null : null; });
  })();

  // ---------------------------------------------------------------- Run: playback
  function stripCards(run) {
    var box = $('cardStrip'); box.innerHTML = ''; S.cardEls = [];
    var b = run.build;
    function add(id, name, mach, tag, kind, imgId) {
      var e = el('div', 'scard' + (mach ? ' mach' : '')), st = el('div', 'st', esc(name) + '<small>' + tag + '</small>');
      e.appendChild(thumbEl(imgId || id, 'sthumb')); e.appendChild(st); box.appendChild(e); S.cardEls.push({ id: id, e: e, kind: kind, tag: tag, small: st.querySelector('small') });
    }
    var mc = Cards.part(b.metabolism); add(mc.id, mc.name, mc.shelf === 'machine', 'always on', 'const');
    b.parts.forEach(function (id) {
      var c = Cards.part(id), tag = { quorum: 'acts when crowded', radio: 'acts to hold share', wall: 'acts in trouble', repair: 'acts in trouble' }[id] || 'always on';
      add(id, c.name, c.shelf === 'machine', tag, { quorum: 'q', radio: 'r', wall: 't', repair: 't' }[id] || 'const');
    });
    if (b.reflex) add('reflex', reflexName(b.reflex), b.reflex.kind === 'machine', 'armed', 'fire', b.reflex.kind === 'bio' ? b.reflex.id : (b.reflex.sensor === 'temp' || b.reflex.action === 'hotter' || b.reflex.action === 'cooler') ? 'compass' : 'machinerule');
    if (b.reflex) { var mx = 0; for (var t = 0; t <= run.T; t++) if (run.H.fires[t] > mx) mx = run.H.fires[t]; run.fired = mx >= 0.03; }
  }
  function anyChannel(run) { return D.CH.some(function (c) { return run.channels[c.id]; }); }
  function enterRun() {
    var run = S.run, d = dishObj(); if (!run) return;
    $('scrub').max = run.T; stripCards(run);
    var g0 = dishGL(); if (g0) { setGLRun(g0, run); g0.rackFocus(S.mode === 'watch' ? 'watch' : 'run'); S.holdUntil = reduced ? 0 : performance.now() + 1100; } else S.holdUntil = 0; $('runFig').innerHTML = figHtml(S.mode === 'watch' ? S.carried : run.build);
    var any = anyChannel(run), keyHtml = '';
    D.CH.forEach(function (c) {
      if (!run.channels[c.id]) return;
      var bg = { stripes: 'repeating-linear-gradient(135deg,' + c.color + ' 0 2px,#10060a 2px 4px)', dots: 'radial-gradient(' + c.color + ' 1.3px,#0a0a05 1.7px) 0 0/4px 4px',
        cross: 'repeating-linear-gradient(45deg,' + c.color + ' 0 1px,#0a0814 1px 4px),repeating-linear-gradient(-45deg,' + c.color + ' 0 1px,transparent 1px 4px)',
        zigzag: 'repeating-linear-gradient(90deg,' + c.color + ' 0 1px,#04101a 1px 3px)', checks: 'repeating-conic-gradient(' + c.color + ' 0 25%,#080a14 0 50%) 0 0/6px 6px' }[c.pat];
      keyHtml += '<span><i style="background:' + bg + ';border:1px solid ' + c.color + '"></i>' + c.name + '</span>';
    });
    $('ribbonKey').innerHTML = any ? keyHtml + '<span style="margin-left:auto">leading suspicion each tick</span>' : '';
    buildBars($('liveBars'), d.stats); S.liveKey = '';
    $('immune').style.display = any ? '' : 'none';
    $('ribbon').style.display = any ? '' : 'none';
    $('ribbonKey').style.display = any ? '' : 'none';
    $('legGrn').style.display = any ? '' : 'none';
    $('legWaste').hidden = !!d.agents; $('legBoul').hidden = !d.agents;   // the thick water has no waste trail; its green boulders are the food
    S.chartCaps = any ? ['Your share of the dish: band and event marked', 'Suspicion total: stage lines at 1.5, 4.5 and 8'] : ['Your colony: percent of what you started with', 'Lost to acid: share of your colony dissolved each tick'];
    $('tabShare').textContent = any ? 'Your share' : 'Your colony'; $('tabSusp').textContent = any ? 'Suspicion' : 'Lost to acid';
    setChartTab(S.chartTab || 'share');
    var imm = $('immune'); imm.innerHTML = '<div class="stg" data-st="1">Curiosity</div><div class="stg" data-st="2">Inspection</div><div class="stg" data-st="3">Response</div><div class="kill" id="killTxt"></div>';
    S.lastStage = -1; S.vcache = '';
    $('skipBtn').textContent = S.mode === 'watch' ? 'Skip' : 'Skip to trouble';
    $('resultBtn').style.visibility = S.mode === 'watch' ? 'hidden' : 'visible';
    $('readLine').textContent = '';
    setPlayLabel(); renderVerdict(); cmpSync();
  }
  function setChartTab(k) {
    S.chartTab = k; var share = k === 'share';
    $('tabShare').classList.toggle('on', share); $('tabShare').setAttribute('aria-selected', share ? 'true' : 'false');
    $('tabSusp').classList.toggle('on', !share); $('tabSusp').setAttribute('aria-selected', share ? 'false' : 'true');
    $('paneShare').hidden = !share; $('paneSusp').hidden = share;
    $('chartCap').textContent = (S.chartCaps || ['', ''])[share ? 0 : 1];
  }
  function setPlayLabel() { $('playBtn').textContent = S.playing ? 'Pause' : 'Play'; }
  function setSpeedUI() { Array.prototype.forEach.call(document.querySelectorAll('#speeds button'), function (x) { x.classList.toggle('on', +x.getAttribute('data-sp') === S.speed); }); }
  function renderVerdict() {
    var run = S.run; if (!run) return;
    var text = '', btn = '';
    if (S.mode === 'watch') {
      if (!S.watchDone) text = '';
      else if (run.v.win) { text = 'Your carried cell already survives this dish.'; btn = 'Continue'; }
      else { text = run.autopsy.headline + ' ' + findingBody(run.autopsy); btn = 'Adapt your cell'; }
    } else if (!S.runFinished) text = '';
    else if (run.v.win) { text = 'Your cell made it. The guards did not notice.'; btn = 'See result'; }
    else { text = run.autopsy.headline + ' ' + findingBody(run.autopsy); btn = 'Back to Adapt'; }
    var key = text + '|' + btn; if (key === S.vcache) return; S.vcache = key;
    $('verdictText').textContent = text; $('verdictText').title = text;
    var b = $('verdictBtn'); b.textContent = btn || 'Adapt your cell'; b.style.visibility = btn ? 'visible' : 'hidden';
  }
  function verdictAction() {
    if (!S.run) return;
    if (S.mode === 'watch') { if (!S.watchDone) return; if (S.run.v.win) winCarried(); else show('adapt'); }
    else if (S.runFinished) { if (S.run.v.win) showResult(); else show('adapt'); }
  }
  function seek(t) { var run = S.run; if (!run) return; S.t = Math.max(0, Math.min(run.T, t)); }
  function setPlaying(p) {
    if (!S.run) return;
    var lim = S.mode === 'watch' && S.stopAt != null ? S.stopAt : S.run.T;
    if (p && S.t >= lim - 0.001) { S.t = 0; S.resultShown = false; if (S.mode === 'watch') { S.watchDone = false; renderVerdict(); refresh(); } else { S.runFinished = false; renderVerdict(); refresh(); } }
    S.playing = p; setPlayLabel();
  }
  function skip() {
    var run = S.run; if (!run) return;
    if (S.mode === 'watch') { S.t = S.stopAt; S.playing = false; setPlayLabel(); glJump(); watchFinished(); return; }
    var t = S.troubleTick;
    if (t < 0) { if (run.autopsy && run.autopsy.from) t = run.autopsy.from; else { flashSkip('No trouble in this run'); return; } }
    S.playing = false; S.t = t; setPlayLabel(); glJump(S.mode === 'run' && !run.v.win ? ezLocate(run) : null);
  }
  function flashSkip(msg) { var b = $('skipBtn'), old = 'Skip to trouble'; b.textContent = msg; setTimeout(function () { b.textContent = old; }, 1600); }
  // Dish 1 Watch at the default 1x: the first ticks play slowly so the player sees the pink cells dissolve (the colony is gone by tick 12).
  function playRate() {
    var run = S.run;
    if (S.mode === 'run' && ezSlow()) return Math.min(S.speed, 1) * 0.35;   // playback slows while the camera is on the deciding moment
    if (S.mode !== 'watch' || !run || !run.dish.aliveOnly || S.speed !== 1) return S.speed;
    return S.t < 6 ? 0.25 : S.t < 12 ? 0.5 : 1;
  }
  // Advance playback by dt seconds (also callable from the debug hook).
  function advance(dt) {
    var run = S.run; if (!run || !S.playing) return;
    if (S.holdUntil && performance.now() < S.holdUntil) return;   // the rack focus plays before the action starts
    S.t += dt * (run.agents ? 8 : 12) * playRate();   // 1x is 12 ticks a second; on the thick water's dishes (individual cells) it is 8, so swimmers can be followed
    var lim = S.mode === 'watch' && S.stopAt != null ? S.stopAt : run.T;
    if (S.t >= lim) {
      S.t = lim; S.playing = false; setPlayLabel();
      if (S.mode === 'watch') watchFinished();
      else if (!S.resultShown) { S.runFinished = true; S.resultShown = true; renderVerdict(); refresh(); S.resultTimer = setTimeout(showResult, 450); }
    }
  }
  function acting(card, run, ti) {
    var H = run.H, E = run.dish.event;
    switch (card.kind) {
      case 'q': return H.qsig[ti] > 0.02;
      case 'r': return Math.abs(H.radioMult[ti] - 1) > 0.02;
      case 't': return eventsOf(run.dish).some(function (e) { return ti >= e.tick && ti <= e.tick + Math.max(e.dur, 20); }) || H.kill[ti] > 0.002;
      case 'fire': return H.fires[ti] > 0.03;
      default: return false;
    }
  }
  // The live stat readouts: the same stats, order and colours as the Forecast bars. The outline marker is the forecast for this build.
  function updateLive(run, ti) {
    var d = run.dish, box = $('liveBars'), final = S.mode === 'watch' && S.watchDone, lost = !run.v.win && run.autopsy;
    var showFail = lost && (S.mode === 'watch' ? S.watchDone : S.resultShown || S.runFinished);
    var key = (final ? 'F' : ti) + '|' + (showFail ? 1 : 0) + '|' + S.mode + run.build.pace;
    if (key === S.liveKey) return; S.liveKey = key;
    if (box.getAttribute('data-ids') !== d.stats.join(',') || box.children.length !== d.stats.length) buildBars(box, d.stats);   // never draw into rows left over from another dish
    var fc = Sim.stats(d, run.build), live = final ? fc : Sim.liveStats(run, ti);
    $('liveTitle').innerHTML = final ? 'Forecast for your cell <span class="dim">the failing bar is marked</span>' : 'Live stats <span class="dim">outline marker = the forecast</span>';
    Array.prototype.forEach.call(box.children, function (row, i) {
      setBar(row, live[i], { forecast: final ? null : fc[i], fail: showFail && run.autopsy.stat === live[i].id });
    });
  }
  // The simple (non-WebGL) dish view of an agent dish: draw3.js draws every recorded cell at its own place.
  function drawFallback3(c, run, t) {
    var w = c.clientWidth, h = c.clientHeight; if (!w || !h) return;
    var dpr = Math.min(2, window.devicePixelRatio || 1), pw = Math.round(w * dpr), ph = Math.round(h * dpr);
    if (c.width !== pw || c.height !== ph) { c.width = pw; c.height = ph; }
    var ctx = c.getContext('2d'), size = Math.min(w, h);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
    ctx.save(); ctx.translate((w - size) / 2, (h - size) / 2);
    // draw3.js reads sim3's own constants (dish radius, grid, food scale), which a game-shaped run keeps under P3 while run.P is the game's.
    var r3 = run.__fb3 || (run.__fb3 = { frames: run.frames, foods: run.foods, boulders: run.boulders, P: run.P3, build: run.build });
    window.LookAliveDraw3.frame(ctx, r3, t, { cx: 0, cy: 0, zoom: 1 }, { size: size, reduced: reduced, trails: false });
    ctx.restore();
  }
  function drawRun(ts) {
    var run = S.run; if (!run) return;
    var H = run.H, T = run.T, ti = Math.min(T, Math.floor(S.t)), d = run.dish, any = anyChannel(run);
    var sr = S.cmp.held && S.cmp.run ? S.cmp.run : run, st = Math.min(S.t, sr.T);   // sr: the run the dish shows (the previous run while the compare button is held)
    var si = Math.min(sr.snaps.length - 1, Math.floor(st / 10)), A = sr.snaps[si], B = sr.snaps[Math.min(sr.snaps.length - 1, si + 1)];
    var f = si >= sr.snaps.length - 1 ? 0 : (st - si * 10) / 10;
    var tm = reduced ? 0 : ts / 1000, acidNow = H.acid[ti] || 0;
    var gdish = dishGL();
    if (gdish) {
      if (gdish.run !== sr) setGLRun(gdish, sr);
      $('runDish').style.display = 'none'; GL.canvas.style.display = '';
      gdish.setTick(st); gdish.frame(ts);
    } else {
      $('runDish').style.display = '';
      if (sr.agents && window.LookAliveDraw3) drawFallback3($('runDish'), sr, st, tm);   // individual cells: drawn where they really are
      else D.drawCells($('runDish'), A, B, f, { n: sr.n, nativeRef: sr.H.nat[0], stage: any ? H.stage[ti] : 0, kill: any ? H.kill[ti] : 0, time: tm, stress: d.acid ? Math.min(1, acidNow * 3) : 0, acid: !!d.acid });
    }
    var rl = d.aliveOnly ? 'Colony alive: ' + Math.round(H.rob[ti] / H.rob[0] * 100) + '%   Lost to acid: ' + (acidNow * 100).toFixed(0) + '% per tick'
      : 'Your share of the dish: ' + (H.share[ti] * 100).toFixed(1) + '%' + (acidNow > 0.005 ? '   Lost to acid: ' + (acidNow * 100).toFixed(0) + '% per tick' : '');
    var marks = [], evs = eventsOf(d), crashNow = false;
    evs.forEach(function (E, i) {
      marks.push({ t: E.announce, color: '#8a6a20', dash: [3, 3], label: evs.length > 1 ? 'warning ' + (i + 1) : 'warning' });
      marks.push({ t: E.tick, color: D.AMB, label: evs.length > 1 ? 'food crash ' + (i + 1) : 'food crash', crash: true });
      if (ti >= E.tick && ti <= E.tick + E.dur) crashNow = true;
    });
    S.marks = marks;
    if (crashNow) rl += '   FOOD CRASH';
    if (S.cmp.held && S.cmp.run) rl = 'PREVIOUS RUN   Your share of the dish: ' + (S.cmp.run.H.share[Math.min(S.cmp.run.T, ti)] * 100).toFixed(1) + '%';
    else if (gdish && typeof gdish.eventActive === 'function' && gdish.eventActive() && S.ez.used) rl += '   ' + ezPhrase();
    if ($('readLine').textContent !== rl) $('readLine').textContent = rl;
    var pin = S.resultShown && run.autopsy && S.mode === 'run' ? { from: run.autopsy.from, to: run.autopsy.to } : null;
    var g = S.ghost, t;
    updateLive(run, ti);
    if (any) {
      var stg = H.stage[ti];
      if (stg !== S.lastStage) {
        S.lastStage = stg;
        Array.prototype.forEach.call($('immune').querySelectorAll('.stg'), function (e) { var n = +e.getAttribute('data-st'); e.classList.toggle('on', n <= stg); e.classList.toggle('s3', n === 3 && stg >= 3); });
      }
      var kt = $('killTxt'), ktxt = stg >= 3 ? 'Killing ' + (H.kill[ti] * 100).toFixed(1) + '% of you per tick' : stg >= 1 ? 'Watching. Nothing dies yet.' : 'The guards have not noticed you.';
      if (kt.textContent !== ktxt) { kt.textContent = ktxt; kt.classList.toggle('hot', stg >= 3); }
      var ymax = 0.3; for (t = 0; t <= T; t++) if (H.share[t] > ymax) ymax = Math.min(1, Math.ceil(H.share[t] * 10) / 10);
      var band = d.band;
      var ser = [{ data: function (i) { return H.share[i]; }, n: T + 1, color: D.PINK, dimTail: true, upTo: S.t, width: 2 }];
      if (g) ser.unshift({ data: function (i) { return g.share[i]; }, n: T + 1, color: D.PINK, dash: [4, 4], alpha: 0.45, width: 1.2 });
      var m = D.chart($('gShare'), { T: T, y0: 0, y1: ymax, yTicks: [0, 0.1, 0.2, 0.3].filter(function (v) { return v <= ymax; }), yFmt: function (v) { return Math.round(v * 100) + '%'; },
        bands: [{ lo: band.lo, hi: band.hi, fill: 'rgba(207,227,255,.09)', line: '#9fb4d8', label: 'band ' + Math.round(band.lo * 100) + '% to ' + Math.round(band.hi * 100) + '%' }], vmarks: marks, series: ser, head: S.t, pin: pin, padB: 14 });
      if (m) D.ribbon($('ribbon'), run, m.L, m.R);
      var fsOn = false; if (m) { var f0 = H.food[0] || 1, fr = 0, q; for (q = 0; q <= T; q++) fr = Math.max(fr, Math.abs(H.food[q] / f0 - 1)); fsOn = evs.length > 0 || fr > 0.25; }
      $('foodStrip').style.display = fsOn ? '' : 'none';
      if (fsOn) D.foodStrip($('foodStrip'), run, m.L, m.R, { events: evs, head: S.t });
      var sy = 10; for (t = 0; t <= T; t++) if (H.total[t] > sy) sy = Math.ceil(H.total[t]);
      var ser2 = [{ data: function (i) { return H.total[i]; }, n: T + 1, color: D.GRN, dimTail: true, upTo: S.t, width: 2 }];
      if (g) ser2.unshift({ data: function (i) { return g.total[i]; }, n: T + 1, color: D.GRN, dash: [4, 4], alpha: 0.45, width: 1.2 });
      D.chart($('gSusp'), { T: T, y0: 0, y1: sy, yTicks: [0, 4, 8], hlines: [{ y: 1.5, color: '#3f9d86', label: 'Curiosity' }, { y: 4.5, color: '#d9a13a', label: 'Inspection' }, { y: 8, color: D.RED, label: 'Response' }], vmarks: marks.filter(function (m) { return m.crash; }), series: ser2, head: S.t, pin: pin, padB: 14 });
    } else {
      var r0 = H.rob[0] || 1, amax = 0.1; for (t = 0; t <= T; t++) if (H.acid[t] > amax) amax = Math.ceil(H.acid[t] * 10) / 10;
      var top = 1.2; for (t = 0; t <= T; t++) if (H.rob[t] / r0 > top) top = Math.ceil(H.rob[t] / r0 * 5) / 5;
      var ser3 = [{ data: function (i) { return H.rob[i] / r0; }, n: T + 1, color: D.PINK, dimTail: true, upTo: S.t, width: 2 }];
      D.chart($('gShare'), { T: T, y0: 0, y1: top, yTicks: [0, top / 2, top], yFmt: function (v) { return Math.round(v * 100) + '%'; }, series: ser3, head: S.t, pin: pin, padB: 14 });
      D.chart($('gSusp'), { T: T, y0: 0, y1: amax, yTicks: [0, amax / 2, amax], yFmt: function (v) { return Math.round(v * 100) + '%'; },
        series: [{ data: function (i) { return H.acid[i]; }, n: T + 1, color: D.AMB, dimTail: true, upTo: S.t, width: 2 }], head: S.t, padB: 14 });
    }
    S.cardEls.forEach(function (c) {
      var on = c.kind !== 'const' && acting(c, run, ti);
      c.e.classList.toggle('flash', on);
      if (c.kind === 'fire') {
        var never = !run.agents && S.t >= T - 0.5 && !run.fired, tag = run.agents ? 'armed' :  never ? 'never triggered' : on ? 'FIRING' : (S.t >= T - 0.5 ? 'fired ' + (function () { var n = 0; for (var q = 0; q <= T; q++) if (H.fires[q] > 0.03) n++; return n; })() + ' ticks' : 'armed');
        c.e.classList.toggle('never', never); if (c.small.textContent !== tag) c.small.textContent = tag;
      }
    });
    $('scrub').value = S.t; $('tickNum').textContent = 'tick ' + ti + '/' + T;
  }

  // ---------------------------------------------------------------- Result overlay
  function closeOverlay() { $('overlay').hidden = true; S.overlayOpen = false; if (S.screen === 'run') refresh(); }
  function coverName(b) {
    var genus = { respiration: 'Helicobacter', fermentation: 'Lactobacillus', fuelcell: 'Vibrio' }[b.metabolism] || 'Helicobacter';
    var epi = [], bio = { stringent: 'parcus', sporulate: 'sporans', sos: 'reparans' }, ptx = { wall: 'armatus', quorum: 'sociabilis', naps: 'dormiens', acidproof: 'acidotolerans', flagellum: 'natans', clock: 'horarius', radio: 'radiatus', copier: 'perfectus', repair: 'reparatus', pump: 'protonicus', lipids: 'densus', shell: 'testaceus' };
    var C2 = Lv2 ? Lv2.COVER : null, cb = C2 ? Cards.part(b.metabolism) : null;
    if (C2) {   // habitat 2 names (HABITAT-2 7.8): the world-1 lists plus the new cards; the genus follows the Power card
      genus = C2.genus[b.metabolism] || genus; for (var k in C2.epithet) { if (k === 'heatrule' || k === 'nightferm') continue; if (k === 'heatps') continue; ptx[k] = C2.epithet[k]; } bio.nightferm = C2.epithet.nightferm;
    }
    var d3 = dishObj(), C3 = d3 && d3.agents && Lv3 ? Lv3.COVER : null;
    if (C3) {   // the thick water: Salinibacter or Haloquadratum, and epithets from the motor, the signal and the rule
      var e3 = [];
      b.parts.forEach(function (id) { if (C3.epithet[id]) e3.push(C3.epithet[id]); });
      if (b.reflex && b.reflex.kind === 'machine' && b.reflex.action === 'stay') e3.push(C3.epithet.stayrule);
      if (b.pace > 4) e3.push('festinans'); if (b.pace < 4) e3.push('modestus');
      if (!e3.length) e3.push('normalis');
      return '<i>' + (C3.genus[b.metabolism] || 'Salinibacter') + ' ' + e3[D.hash(JSON.stringify(b)) % e3.length] + '</i>';
    }
    if (b.reflex) epi.push(b.reflex.kind === 'bio' ? bio[b.reflex.id] : (C2 && b.reflex.sensor === 'temp' ? C2.epithet.heatrule : 'computans'));
    b.parts.forEach(function (id) { if (ptx[id]) epi.push(ptx[id]); });
    if (C2 && b.metabolism === 'heatps') epi.push(C2.epithet.heatps);
    if (C2 && cb && b.parts) { var tol = 0, fx = function (c) { return c && c.fx && c.fx.heat ? c.fx.heat : 0; }; tol = 45 + fx(cb); b.parts.forEach(function (id) { tol += fx(Cards.part(id)); }); if (tol >= C2.calidus.fromHeat) epi.push(C2.calidus.epithet); }
    if (machineCount(b)) epi.push('suspiciosus');
    if (b.slop >= 6) epi.push('adolescens'); if (b.pace < 4) epi.push('modestus'); if (b.pace > 4) epi.push('festinans');
    if (b.metabolism === 'fermentation') epi.push('acidophilus');
    if (!epi.length) epi.push('normalis');
    var h = D.hash(JSON.stringify(b)), sp = epi[h % epi.length];
    return '<i>' + genus + ' ' + sp + '</i>';
  }
  function failStatLine(run) {
    var a = run.autopsy, st = Sim.stats(dishObj(), run.build).filter(function (x) { return x.id === a.stat; })[0];
    return Sim.STAT_INFO[a.stat].name + (st && st.state !== 'unchecked' ? ': ' + st.verdict : '') + ' (' + (a.cause === 'bust' && run.dish && run.dish.temp ? 'Lost to the night' : (CAUSE_WORDS[a.cause] || a.cause)) + ')';
  }
  // Why scouts died, from the run's own death log (habitat 3): "Scouts lost: 18 starved, 0 to the guards".
  function deathsText(run) {
    var n = { starved: 0, guards: 0 };
    (run.deaths || []).forEach(function (x) { if (n[x.cause] != null && !x.kind) n[x.cause]++; });
    return 'Scouts lost: ' + n.starved + ' starved, ' + n.guards + ' to the guards';
  }
  function recordRow(run, d) {
    var v = run.v;
    var spare = d.exam ? ' Energy left: ' + (d.energy - Sim.energyOf(Sim.normalize(run.build))) + ' of ' + d.energy + '.' : '';
    if (d.aliveOnly) return '<div class="row"><b>Record</b><span>Colony at the end: ' + Math.round(run.H.rob[run.T] / run.H.rob[0] * 100) + '% of where it started.</span></div>';
    return '<div class="row"><b>Record</b><span>In the band ' + Math.round(v.bandFrac * 100) + '% of the time (needs ' + Math.round(d.band.need * 100) + '%). Final share ' + (v.finalShare * 100).toFixed(1) + '%. Highest guard alert: ' + STAGE_NAMES[v.maxStage] + '.' + spare + '</span></div>';
  }
  var TAG_WORDS = { 'exposed:motion': 'NEVER STOPPED.', acid: 'DISSOLVED.', overgrew: 'TOOK OVER.', starved: 'STARVED OUT.', bust: 'STARVED OUT.', bloom: 'OUTGROWN.', below: 'TOO FEW.', band: 'OUT OF STEP.', cooked: 'COOKED.', grazed: 'EATEN.' };
  function slideTag(cause, d) { if (cause === 'bust' && d && d.temp) return 'LOST TO THE NIGHT.'; return TAG_WORDS[cause] || (/^exposed:/.test(cause) ? 'COVER BLOWN.' : 'FAILED.'); }
  function timelineSvg(T, from, to) {
    function x(t) { return 10 + 580 * Math.max(0, Math.min(T, t)) / T; }
    var o = '<svg class="slidetime" viewBox="0 0 600 46" role="img" aria-label="Timeline: it went wrong at tick ' + from + ' of ' + T + '"><line class="tl" x1="10" y1="22" x2="590" y2="22"/>', i;
    for (i = 0; i <= 10; i++) o += '<line class="tk" x1="' + x(T * i / 10).toFixed(1) + '" y1="17" x2="' + x(T * i / 10).toFixed(1) + '" y2="27"/>';
    o += '<rect class="tb" x="' + x(from).toFixed(1) + '" y="14" width="' + Math.max(2, x(to) - x(from)).toFixed(1) + '" height="16"/>';
    o += '<circle class="pin" cx="' + x(from).toFixed(1) + '" cy="22" r="7"/><circle class="pinhi" cx="' + (x(from) - 2).toFixed(1) + '" cy="20" r="2"/>';
    return o + '<text class="tt" x="' + Math.max(26, Math.min(574, x(from))).toFixed(1) + '" y="43">tick ' + from + '</text></svg>';
  }
  function chalkSvg() { return '<svg class="chalk" viewBox="0 0 130 44" aria-hidden="true"><path class="ch" d="M4 8 C 34 2, 64 34, 112 26"/><path class="ch" d="M100 16 L 115 26 L 99 35"/></svg>'; }
  function dishSnapshot(t) {   // the dish at the moment it went wrong, as a still for the slide
    try {
      var g = GL.r;
      if (g && g.supported && GL.canvas) { g.setTick(t); g.visible = true; g.frame(performance.now()); var u = GL.canvas.toDataURL('image/jpeg', 0.85); g.setTick(S.t); return u; }
      var c = $('runDish'); if (c && c.width) return c.toDataURL('image/jpeg', 0.85);
    } catch (e) { /* lost context */ }
    return '';
  }
  function showResult() {
    var run = S.run, d = dishObj(); if (!run) return; compareSet(false);
    S.resultShown = true; var v = run.v, ov = $('overlay'), html;
    if (v.win) {
      var stamp = STAMPS[D.hash(JSON.stringify(run.build)) % STAMPS.length];
      var ORD = orderForDish(d), next = ORD[ORD.indexOf(d.id) + 1], gr = d.exam ? Sim.grade(run, d, run.build) : null;
      var gradeHtml = gr ? '<div class="gradebox g-' + gr.toLowerCase() + '" id="gradeBox"><span class="gk">Exam grade</span><b>' + gr + '</b><span class="gn">' + esc(GRADE_NEXT[gr]) + '</span></div>' : '';
      var last = next == null && ORD.every(function (i) { return S.cleared[i]; });
      html = '<div class="winwrap"><div class="paper memo"><h2>CLEARED</h2><div class="stampbox"><div class="stamp win' + (reduced ? '' : ' slam') + '" id="stamp">' + stamp + '</div></div>' +
        '<div class="covername" id="coverName">' + coverName(run.build) + '</div><div class="covercap">Registered cover name</div>' + gradeHtml + '<div class="covercap">Final readings</div><div class="paperbars statbars" id="winBars"></div>' +
        '<div class="row"><b>Dish</b><span>' + d.id + ': ' + esc(d.title) + '</span></div>' + recordRow(run, d) + (d.agents ? '<div class="deathline win" id="deathLine">' + esc(deathsText(run)) + '</div>' : '') + (d.reading ? '<div class="row reading"><b>Reading</b><span id="winReading">' + esc(d.reading) + '</span></div>' : '') +
        '<div class="pbtns">' + (next != null ? '<button type="button" data-act="next">Next dish</button>' : last ? '<button type="button" data-act="complete">Sampling complete</button>' : '') + '<button type="button" data-act="watch">Watch replay</button><button type="button" data-act="list">Dish list</button></div></div>' +
        '<div class="paper notebook"><h3>From our samples: notebook page ' + (ORD.indexOf(d.id) + 1) + '</h3><h4>' + esc(NB_TITLE[d.id] || d.nbTitle) + '</h4><p>' + esc(d.notebook) + '</p>' + (d.colony ? '<div class="scrawl colony"><b>Colony comment:</b> <span id="colonyNote">' + esc(d.colony) + '</span></div>' : '') + '</div></div>';
    } else {
      var a = run.autopsy;
      html = '<div class="losswrap"><div class="slide" id="lossSlide"><div class="slidetag" id="slideTag">' + slideTag(a.cause, d) + '</div>' +
        '<div class="slidetop"><img class="slideimg" id="slideImg" alt="The dish at the moment it went wrong"><div class="slidebars statbars" id="slideBars"></div></div><div class="slidenote" id="slideNote"></div>' + (d.agents ? '<div class="deathline" id="deathLine">' + esc(deathsText(run)) + '</div>' : '') +
        timelineSvg(run.T, a.from, a.to) + '</div><div class="paper memo"><h2>MEMORANDUM</h2><div class="row"><b>From</b><span id="memoFrom">' + esc((d.agents && MEMO_FROM3[a.cause]) || MEMO_FROM[a.cause] || 'Sample lab') + '</span></div><div class="row"><b>Re</b><span>Colony, dish ' + d.id + ' (' + esc(d.title) + ')</span></div>' +
        '<div class="row"><b>Finding</b><span class="head" id="memoFinding"><strong>' + esc(a.headline) + '</strong> <span class="rest">' + esc(findingBody(a)) + '</span></span></div>' +
        '<div class="row"><b>Stat that failed</b><span>' + esc(failStatLine(run)) + '</span></div>' +
        '<div class="row"><b>Also</b><span class="sec">' + (a.second ? esc(a.second.text) : 'No second cause of note.') + '</span></div>' +
        recordRow(run, d) +
        '<div class="row"><b>' + (d.exam ? 'Help' : 'Tip') + '</b><span class="tipspan"><button type="button" data-act="tip" id="memoTipBtn">' + (d.exam ? 'What changes this?' : 'Tip') + '</button><span id="memoTip"></span></span></div>' +
        '<div class="pbtns"><button type="button" data-act="adapt">Back to Adapt</button><button type="button" data-act="jump">Jump to the moment</button><button type="button" data-act="watch">Watch replay</button></div></div></div>';
    }
    ov.innerHTML = html; ov.hidden = false; S.overlayOpen = true; renderTips(); refresh();
    // The bars on the result cards are read from the run that just finished; the outlined marker is what the forecast said.
    var fsx = Sim.runStats(run), fcx = Sim.stats(d, run.build);
    if (v.win) { buildBars($('winBars'), d.stats); Array.prototype.forEach.call($('winBars').children, function (row, i) { setBar(row, fsx[i], {}); }); }
    else {
      buildBars($('slideBars'), d.stats); var hit = false;
      Array.prototype.forEach.call($('slideBars').children, function (row, i) { var f = run.autopsy.stat === fsx[i].id, sx = fsx[i]; if (f && (sx.state === 'safe' || sx.state === 'edge')) { sx = Object.assign({}, sx, { state: 'low', verdict: CAUSE_WORDS[run.autopsy.cause] || 'This is what failed' }); } setBar(row, sx, { fail: f, forecast: fcx[i] }); if (f) { row.insertAdjacentHTML('beforeend', chalkSvg()); hit = true; } });
      if (!hit) $('lossSlide').insertAdjacentHTML('beforeend', chalkSvg().replace('class="chalk"', 'class="chalk ontime"'));
      var sn = $('slideNote'), au = run.autopsy, missed = fcx.filter(function (x) { return x.checked !== false && x.state !== 'unchecked'; }).every(function (x) { return x.state === 'safe'; });
      var pc2 = function (x) { return (x * 100).toFixed(x < 0.1 ? 2 : 1).replace(/\.?0+$/, '') + '%'; };
      sn.textContent = (d.band && !d.aliveOnly ? 'At tick ' + au.from + ' your share was ' + pc2(run.H.share[au.from] || 0) + '. The band is ' + pc2(d.band.lo) + ' to ' + pc2(d.band.hi) + '. ' : '') + 'Outlined marker: the forecast.' + (missed ? ' The forecast said every bar was safe; the full run disagreed.' : '');
      var src = dishSnapshot(run.autopsy.from), im = $('slideImg'); if (src) im.src = src; else im.style.display = 'none';
    }
  }
  // The thick water's completion card, from its own text (levels3.js WORLD; its COMPLETE comes with the exam dish, which is not built yet).
  function complete3() {
    if (Lv3.COMPLETE) return Lv3.COMPLETE;
    var WW = Lv3.WORLD;
    return { title: 'THE THICK WATER, SO FAR', rows: [
      ['Place', WW.facts[1]],
      ['What we learned', 'A cell that cannot reach the sweetness starves, and a cell that swims past it for ever is noticed. Stopping where it is sweet is part of looking alive.'],
      ['Our samples', WW.badge],
      ['Next', 'There is more of the thick water. We will open it when our lab has grown the next dishes.']
    ] };
  }
  function completeCard() {
    var cw = S.screen && dishObj() ? worldOfDish(dishObj()) : 1, CO = cw === 3 ? complete3() : cw === 2 ? Lv2.COMPLETE : null, ORD = orderOf(cw);
    var rows = ORD.map(function (id) {
      var d = Lv.dish(id), g = S.grades[id];
      return '<div class="crow2"><span class="cn">' + id + '</span><span class="ct">' + esc(d.title) + '</span><span class="cg ' + (g ? 'g-' + g.toLowerCase() : '') + '">' + (S.cleared[id] ? (d.exam ? (g || 'Cleared') : '\u2713 Cleared') : 'Not cleared') + '</span></div>';
    }).join('');
    var srows = CO ? CO.rows : (W.complete || []).map(function (r) { return r[0] === 'Next' && Lv2 ? [r[0], 'The banded water: a new site, with one rule turned upside down. Open it from the dish list.'] : r; });
    var story = srows.map(function (r) { return '<div class="row"><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></div>'; }).join('');
    $('overlay').innerHTML = '<div class="paper memo complete" id="completeCard"><h2>' + (CO ? esc(CO.title) : 'SAMPLING COMPLETE') + '</h2>' + (cw === 1 && STORY_ART.ripple ? '<img class="completeimg" src="assets/story/complete-ripple.jpg" alt="A slow ripple crossing the surface of the warm mountain">' : '') + '<div class="covercap">' + (cw === 3 ? 'The two dishes' : cw === 2 ? 'The four dishes' : 'The ten dishes') + '</div><div class="clist">' + rows + '</div>' +
      story + '<div class="pbtns"><button type="button" data-act="list">Dish list</button><button type="button" data-act="watch">Back to the result</button></div></div>';
    $('overlay').hidden = false; S.overlayOpen = true;
  }
  $('overlay').addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('button[data-act]') : null;
    if (!b) { if (e.target === $('overlay')) closeOverlay(); return; }
    var a = b.getAttribute('data-act');
    if (a === 'tip') pressTip();
    else if (a === 'adapt') { closeOverlay(); show('adapt'); }
    else if (a === 'watch') { closeOverlay(); }
    else if (a === 'jump') { closeOverlay(); S.playing = false; S.t = S.run.autopsy.from; setPlayLabel(); glJump(S.mode === 'run' && !S.run.v.win ? ezLocate(S.run) : null); }
    else if (a === 'next') { closeOverlay(); selectDish(orderOf(worldNo(S.dish))[orderOf(worldNo(S.dish)).indexOf(S.dish) + 1]); }
    else if (a === 'list') { closeOverlay(); show('list'); }
    else if (a === 'complete') completeCard();
  });

  // ---------------------------------------------------------------- frame loop
  var last = 0;
  function frame(ts) {
    var dt = Math.min(0.1, (ts - last) / 1000); last = ts;
    try {
      if (S.screen === 'adapt') {
        if (GL.p && GL.p.supported) GL.p.tick(ts);
        if (S.note && performance.now() > S.noteUntil) { S.note = ''; renderProblems(); }
      } else if (S.screen === 'run' && S.run) { var tp = S.t; advance(dt); ezTick(tp); drawRun(ts); }
    } catch (err) { if (window.console) console.error(err && err.stack || err); }
    requestAnimationFrame(frame);
  }

  // ---------------------------------------------------------------- wiring
  $('navList').addEventListener('click', function () { closeOverlay(); show('list'); });
  $('navWorld').addEventListener('click', function () { closeOverlay(); if (S.screen !== 'world') S.worldView = S.screen === 'list' ? S.worldTab : (S.dish != null ? worldNo(S.dish) : 1); S.worldBack = S.screen === 'world' ? S.worldBack : S.screen; show('world'); });
  $('worldGo').addEventListener('click', worldContinue);
  $('briefGo').addEventListener('click', enterWatch);
  $('introGo').addEventListener('click', introNext);
  $('introBack').addEventListener('click', function () { if (S.introAt > 0) { S.introAt--; renderIntro(); } });
  $('introSkip').addEventListener('click', introDone);
  $('replayIntro').addEventListener('click', function () { S.introAt = 0; S.introWorld = 1; show('intro'); });
  $('unlockAll').addEventListener('click', function () { S.unlocked = true; save('unlocked2', true); renderList(); });
  $('resetProgress').addEventListener('click', function () {
    S.cleared = {}; S.wins = {}; S.grades = {}; save('grades2', {}); S.unlocked = false; S.seenWorld = false; S.seenIntro = false; save('intro2', false); S.seenIntroB = false; S.seenWorldB = false; S.seenIntroC = false; S.seenWorldC = false; S.worldTab = 1; save('introB', false); save('worldB', false); save('introC', false); save('worldC', false); save('worldTab', 1);
    save('cleared2', {}); save('wins2', {}); save('unlocked2', false); save('world2', false); renderList();
  });
  $('undo').addEventListener('click', function () { if (!S.undo.length) return; S.build = S.undo.pop(); S.preview = null; syncRuleFromBuild(); renderAdapt(false); });
  $('reset').addEventListener('click', function () {
    mutate(function (b) { var n = copy(S.carried); b.pace = n.pace; b.slop = n.slop; b.metabolism = n.metabolism; b.parts = n.parts; b.reflex = n.reflex; });
    S.layer = 0;
    S.rule = blankRule(); syncRuleFromBuild();
  });
  function syncRuleFromBuild() {
    var rf = S.build.reflex; if (rf && rf.kind === 'machine') S.rule = { sensor: rf.sensor, cmp: rf.cmp, value: rf.value, action: rf.action, otherwise: rf.otherwise != null ? rf.otherwise : null };
    if ($('ruleBox')) renderRuleBox();
  }
  $('tipBtn').addEventListener('click', pressTip);
  $('stdBtn').addEventListener('click', startStandard);
  $('runBtn').addEventListener('click', doRun);
  $('playBtn').addEventListener('click', function () { setPlaying(!S.playing); });
  $('skipBtn').addEventListener('click', skip);
  $('verdictBtn').addEventListener('click', verdictAction);
  $('tabShare').addEventListener('click', function () { setChartTab('share'); }); $('tabSusp').addEventListener('click', function () { setChartTab('susp'); });
  $('resultBtn').addEventListener('click', function () { if (S.run && S.mode === 'run') { S.runFinished = true; renderVerdict(); showResult(); } });
  $('realTog').addEventListener('change', function () { S.real = this.checked; $('optList').classList.toggle('showreal', S.real); });
  $('realTog').addEventListener('change', function () { S.real = this.checked; $('optList').classList.toggle('showreal', S.real); });
  $('scrub').addEventListener('input', function () { S.playing = false; setPlayLabel(); S.t = +this.value; });
  Array.prototype.forEach.call(document.querySelectorAll('#speeds button'), function (b) { b.addEventListener('click', function () { S.speed = +b.getAttribute('data-sp'); setSpeedUI(); }); });
  document.addEventListener('keydown', function (e) {
    var tg = e.target && e.target.tagName; if (tg === 'TEXTAREA' || (tg === 'INPUT' && e.target.type !== 'range')) return;
    if (T.open) return;   // the skill tree handles its own keys
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var ovOpen = S.overlayOpen;
    if (e.key === ' ' || e.code === 'Space') {
      if (tg === 'BUTTON') return;
      e.preventDefault();
      if (ovOpen) return;
      if (S.screen === 'intro') introNext(); else if (S.screen === 'world') worldContinue(); else if (S.screen === 'brief') enterWatch();
      else if (S.screen === 'adapt') doRun(); else if (S.screen === 'run') setPlaying(!S.playing);
    } else if ((e.key === 'r' || e.key === 'R') && S.screen === 'run' && S.dish != null) {
      if (S.mode === 'watch') enterWatch(); else doRun();
    } else if (S.screen === 'run' && S.run && !ovOpen && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      e.preventDefault(); S.playing = false; setPlayLabel();
      seek(S.t + (e.key === 'ArrowRight' ? 1 : -1) * (e.shiftKey ? 10 : 1));
    } else if (e.key === 'Escape') { closeOverlay(); hidePop(); }
  });

  // ---------------------------------------------------------------- skill tree: a full-cover overlay (the page behind keeps its screen, dish and build)
  // Every call into LookAlive.tree* is guarded, so a build without the tree data shows an empty tree and nothing throws.
  var T = { open: false, sel: null, opener: null, nodes: [], byId: {}, st: {}, branches: [], tiles: {}, pos: {}, adapt: false, msg: '' };
  var TREE_MARK = {
    fitted: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="currentColor"/><path d="M4.5 8.3l2.3 2.3 4.7-5" fill="none" stroke="#0b0820" stroke-width="2"/></svg>',
    available: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 5v6M5 8h6" stroke="currentColor" stroke-width="1.6"/></svg>',
    learned: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="1.6 2.2"/></svg>',
    unlearned: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="7.2" width="9" height="6.8" rx="1.2" fill="currentColor"/><path d="M5.4 7.2V5.4a2.6 2.6 0 0 1 5.2 0v1.8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'
  };
  var TREE_STATE_WORD = { fitted: 'Fitted in this cell', available: 'Available here', learned: 'Learned, not offered here', unlearned: 'Not yet learned' };
  function treeCall(fn, a, b, c) { try { return typeof Sim[fn] === 'function' ? Sim[fn](a, b, c) : null; } catch (e) { return null; } }
  function treeMissingIds(id) { var m = S.build ? treeCall('treeMissing', S.build, id) : null; return m && m.length ? m : []; }
  function treeNames(ids) {
    var n = ids.map(function (i) { var c = cardOrBio(i); return c ? c.name : i; });
    return n.length < 2 ? n.join('') : n.slice(0, -1).join(', ') + ' and ' + n[n.length - 1];
  }
  function treeCtx() { var on = S.dish != null && S.build && S.screen !== 'list' && S.screen !== 'world' && S.screen !== 'intro'; return { D: on ? dishObj() : null, build: on ? S.build : null, adapt: !!(on && S.screen === 'adapt') }; }
  function treeBuild() {
    var nodes = treeCall('treeNodes') || [], br = treeCall('treeBranches') || [], grid = $('treeGrid');
    T.nodes = nodes; T.branches = br; T.byId = {}; T.tiles = {}; T.pos = {}; grid.innerHTML = '';
    nodes.forEach(function (n) { T.byId[n.id] = n; });
    var tiers = []; nodes.forEach(function (n) { if (tiers.indexOf(n.tier) < 0) tiers.push(n.tier); }); tiers.sort(function (a, b) { return a - b; });
    var used = {}, rows = Math.max(tiers.length, 1);
    br.forEach(function (b, bi) {
      var h = el('div', 'tv-bh', esc(b.name)); h.style.gridColumn = String(bi + 1); h.style.gridRow = '1'; grid.appendChild(h);
      nodes.filter(function (n) { return n.branch === b.id; }).forEach(function (n) {
        var r = tiers.indexOf(n.tier); while (used[bi + ':' + r]) r++;
        used[bi + ':' + r] = 1; rows = Math.max(rows, r + 1);
        var t = el('button', 'tv-tile'); t.type = 'button'; t.setAttribute('data-id', n.id); t.style.gridColumn = String(bi + 1); t.style.gridRow = String(r + 2);
        t.innerHTML = '<span class="tv-mark"></span><span class="tv-name">' + esc(n.name) + '</span><span class="tv-meta"><span>' + (n.energy ? 'Energy ' + n.energy : 'No energy') + '</span><span class="shelf ' + (n.shelf === 'machine' ? 'mach' : 'bio') + '">' + (n.shelf === 'machine' ? 'Machine' : 'Biology') + '</span></span>';
        t.addEventListener('click', function () { treeSelect(n.id, true); });
        t.addEventListener('keydown', treeTileKey);
        grid.appendChild(t); T.tiles[n.id] = t; T.pos[n.id] = { c: bi, r: r };
      });
    });
    grid.style.gridTemplateColumns = 'repeat(' + Math.max(br.length, 1) + ', minmax(138px, 1fr))'; $('treeInner').style.minWidth = (Math.max(br.length, 1) * 148 + 24) + 'px';
    grid.style.gridTemplateRows = '26px repeat(' + rows + ', var(--th))'; T.rows = rows;
  }
  function treeSize() {
    var sc = $('treeScroll'), avail = sc.clientHeight - 6 - 10 - 26 - 16 * T.rows, th = Math.max(44, Math.min(66, Math.floor(avail / T.rows)));
    $('treeGrid').style.setProperty('--th', th + 'px');
  }
  function treeDraw() {
    var inner = $('treeInner'), ib = inner.getBoundingClientRect(), svg = $('treeLines'), g = $('treeLineG'), out = '', cnt = 0;
    svg.setAttribute('width', inner.scrollWidth); svg.setAttribute('height', inner.scrollHeight); g.innerHTML = ''; var gut = {};
    function rc(id) { var b = T.tiles[id].getBoundingClientRect(); return { l: b.left - ib.left, r: b.right - ib.left, t: b.top - ib.top, b: b.bottom - ib.top, cx: (b.left + b.right) / 2 - ib.left, cy: (b.top + b.bottom) / 2 - ib.top }; }
    T.nodes.forEach(function (n) {
      ['after', 'with'].forEach(function (kind) {
        (n[kind] || []).forEach(function (pid) {
          if (!T.tiles[pid] || !T.tiles[n.id]) return;
          var p = rc(pid), q = rc(n.id), d, mx, my;
          var hh = p.b - p.t, sameCol = Math.abs(p.cx - q.cx) < 4;
          if (sameCol && Math.abs(q.cy - p.cy) > hh * 1.6) {   // another tile sits between them: go round it in the gutter on the left, so the line never reads as a link to the tile it would cross
            var gk = Math.round(p.l), go = 4 + 4 * (gut[gk] = (gut[gk] || 0) + 1) - 4, gx = p.l - go - 3;
            d = 'M' + p.l + ' ' + p.cy + 'H' + gx + 'V' + q.cy + 'H' + (q.l - 2); mx = gx; my = (p.cy + q.cy) / 2;
          }
          else if (p.b < q.t - 2) { var k = (q.t - p.b) / 2; d = 'M' + p.cx + ' ' + p.b + 'C' + p.cx + ' ' + (p.b + k) + ' ' + q.cx + ' ' + (q.t - k) + ' ' + q.cx + ' ' + (q.t - 2); mx = (p.cx + q.cx) / 2; my = (p.b + q.t) / 2; }
          else if (q.b < p.t - 2) { var k2 = (p.t - q.b) / 2; d = 'M' + p.cx + ' ' + p.t + 'C' + p.cx + ' ' + (p.t - k2) + ' ' + q.cx + ' ' + (q.b + k2) + ' ' + q.cx + ' ' + (q.b + 2); mx = (p.cx + q.cx) / 2; my = (p.t + q.b) / 2; }
          else { var dy = p.b + 11; d = 'M' + p.cx + ' ' + p.b + 'Q' + (p.cx + q.cx) / 2 + ' ' + (dy + 8) + ' ' + q.cx + ' ' + (q.b + 2); mx = (p.cx + q.cx) / 2; my = dy + 3; }
          out += '<path class="tv-line ' + kind + '" data-from="' + pid + '" data-to="' + n.id + '" data-kind="' + kind + '" d="' + d + '" marker-end="url(#tvArrow)"/>';
          if (kind === 'with') out += '<text class="tv-wlab" data-from="' + pid + '" data-to="' + n.id + '" x="' + mx + '" y="' + (my + 3) + '" text-anchor="middle">with</text>';
          cnt++;
        });
      });
    });
    g.innerHTML = out; T.lineCount = cnt; treeLight();
  }
  function treeLight() {
    var s = T.sel;
    Array.prototype.forEach.call($('treeLineG').children, function (e) {
      var hit = !!s && (e.getAttribute('data-from') === s || e.getAttribute('data-to') === s);
      e.classList.toggle('hl', hit); e.classList.toggle('faint', !!s && !hit);
      if (e.tagName === 'path') e.setAttribute('marker-end', hit ? 'url(#tvArrowHl)' : 'url(#tvArrow)');
    });
    Object.keys(T.tiles).forEach(function (id) {
      var rel = !!s && id !== s && (T.byId[s].after.concat(T.byId[s].with).indexOf(id) >= 0 || T.byId[id].after.concat(T.byId[id].with).indexOf(s) >= 0);
      T.tiles[id].classList.toggle('rel', rel); T.tiles[id].classList.toggle('sel', id === s); T.tiles[id].setAttribute('aria-pressed', id === s ? 'true' : 'false');
    });
  }
  function treeRefresh() {
    var cx = treeCtx(), list = !cx.D; T.adapt = cx.adapt;
    T.st = treeCall('treeState', cx.D, cx.build, S.cleared) || {};
    T.nodes.forEach(function (n) {
      var s = (T.st[n.id] || {}).state || 'unlearned', t = T.tiles[n.id];
      t.className = 'tv-tile st-' + s + (n.shelf === 'machine' ? ' mach' : '') + (T.sel === n.id ? ' sel' : '');
      t.firstChild.innerHTML = TREE_MARK[s];
      t.setAttribute('aria-label', n.name + ', ' + TREE_STATE_WORD[s].toLowerCase() + ', ' + (n.energy ? 'energy ' + n.energy : 'no energy') + ', ' + (n.shelf === 'machine' ? 'machine' : 'biology'));
    });
    $('treeLegend').innerHTML = ['fitted', 'available', 'learned', 'unlearned'].filter(function (s) { return !list || s === 'learned' || s === 'unlearned'; }).map(function (s) { return '<span class="lg st-' + s + '"><i>' + TREE_MARK[s] + '</i>' + TREE_STATE_WORD[s] + '</span>'; }).join('') + '<span class="lg ln"><svg viewBox="0 0 30 8" aria-hidden="true"><path d="M1 4H29" stroke="#8a90a8" stroke-width="1.8"/></svg>Learn first</span><span class="lg ln"><svg viewBox="0 0 30 8" aria-hidden="true"><path d="M1 4H29" stroke="#5fd0ff" stroke-width="1.8" stroke-dasharray="4 3"/></svg>With (fitted together)</span>';
    $('treeNote').textContent = list ? 'No cell is open, so this shows only what is learned and what is not yet.' : (cx.adapt ? 'Cell on Dish ' + cx.D.id + '. Fit or take off a skill here and the Adapt page changes with it.' : 'Cell on Dish ' + cx.D.id + '. Open Adapt to fit skills.');
    $('treeEnergy').textContent = cx.adapt ? 'Energy ' + $('energyNum').textContent : '';
    treeDetail(); treeLight();
  }
  function treeDetail() {
    var n = T.sel && T.byId[T.sel], act = $('treeAct');
    if (!n) {
      $('tdImg').innerHTML = ''; $('tdName').textContent = 'Pick a skill'; $('tdShelf').className = ''; $('tdShelf').textContent = ''; $('tdEn').textContent = '';
      $('tdGame').textContent = 'Choose a skill to read what it does, what it costs and what it needs.'; $('tdReal').textContent = ''; $('tdState').textContent = ''; $('tdAfter').textContent = ''; $('tdWith').textContent = ''; act.hidden = true; $('tdMsg').textContent = ''; return;
    }
    var c = cardOrBio(n.id) || {}, s = (T.st[n.id] || {}), d = treeCtx().D, mach = n.shelf === 'machine';
    var game = c.game || c.sentence || '', real = c.real || '';
    if (d && d.agents) { game = c.game3 || (c.world === 3 ? c.game : c.real) || game; if (game === real) real = ''; }
    var box = $('tdImg'); box.innerHTML = ''; var tb = el('div', 'thumbbox'); tb.appendChild(thumbEl(n.id, 'thumb')); box.appendChild(tb); box.className = 'td-img ' + (mach ? 'mach' : 'bio');
    $('tdName').textContent = n.name; $('tdShelf').className = 'shelf ' + (mach ? 'mach' : 'bio'); $('tdShelf').textContent = mach ? 'Machine' : 'Biology';
    $('tdEn').textContent = n.energy ? 'Energy ' + n.energy : 'No energy';
    $('tdGame').textContent = game; $('tdGame').title = game; $('tdReal').innerHTML = real ? '<i>Real</i>' + esc(real) : ''; $('tdReal').title = real;
    $('tdState').innerHTML = '<b class="st-' + (s.state || 'unlearned') + '"><i>' + TREE_MARK[s.state || 'unlearned'] + '</i>' + TREE_STATE_WORD[s.state || 'unlearned'] + '</b> ' + esc(s.reason || '');
    $('tdAfter').innerHTML = (n.after || []).length ? '<b>Learn first:</b> ' + esc((n.after || []).map(function (i) { return T.byId[i] ? T.byId[i].name : i; }).join(', ')) : '';
    $('tdWith').innerHTML = (n.with || []).length ? '<b>Needs fitted:</b> ' + esc((n.with || []).map(function (i) { var m = T.byId[i]; return m ? m.name + ' (' + Cards.slotInfo(m.slot).name + ')' : i; }).join(', ')) : '';
    var st = s.state, can = T.adapt && n.kind !== 'rule' && (st === 'available' || st === 'fitted');
    act.hidden = !can; if (can) { act.textContent = st === 'fitted' ? 'Take it off' : 'Fit this'; act.disabled = false; }
    $('tdMsg').textContent = T.msg;
  }
  function treeSelect(id, user) {
    if (!T.byId[id]) return false;
    T.sel = id; T.msg = ''; treeRefresh();
    var t = T.tiles[id], sc = $('treeScroll'); if (t && !user && t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    return true;
  }
  function treeAct() {
    var n = T.sel && T.byId[T.sel]; if (!n || !T.adapt) return;
    var st = (T.st[n.id] || {}).state, k = n.slot, r;
    if (st === 'fitted') r = doUnfit(k, n.id);
    else if (st === 'available') {
      if (!selectable(k)) r = { ok: false, reason: Sim.lockedReason(dishObj(), k) || 'That slot is shut on this dish.' };
      else { S.slot = k; if (k === 'envelope') S.layer = Math.min(1, slotsNow().envelope.length); r = doFit(k, n.id); }
    }
    T.msg = r && !r.ok ? r.reason || '' : ''; treeRefresh();
  }
  function treeOpen(opener, id) {
    if (T.open) { if (id) treeSelect(id); return; }
    T.open = true; T.opener = opener || $('navTree'); T.sel = null; T.msg = '';
    hidePop();
    var tv = $('treeview'); tv.hidden = false; $('head').inert = true; $('app').inert = true; document.documentElement.classList.add('tree-open');
    treeBuild(); treeSize(); treeRefresh(); treeDraw();
    if (id) treeSelect(id);
    $('treeClose').focus({ preventScroll: true });
  }
  function treeClose() {
    if (!T.open) return;
    T.open = false; $('treeview').hidden = true; $('head').inert = false; $('app').inert = false; document.documentElement.classList.remove('tree-open');
    var o = T.opener; if (!o || !o.isConnected || !o.offsetParent) o = $('navTree');
    o.focus({ preventScroll: true });
  }
  function treeTileKey(e) {
    var id = e.currentTarget.getAttribute('data-id'), me = T.pos[id], best = null, bd = 1e9;
    if (e.key === 'Escape') { e.preventDefault(); treeClose(); return; }
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].indexOf(e.key) < 0) return;
    e.preventDefault();
    var dx = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0, dy = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    Object.keys(T.pos).forEach(function (o) {
      var p = T.pos[o], ac = (p.c - me.c) * dx, ar = (p.r - me.r) * dy; if (o === id) return;
      if (dx ? ac <= 0 : ar <= 0) return;
      var dist = dx ? ac * 100 + Math.abs(p.r - me.r) : ar * 100 + Math.abs(p.c - me.c) * 3;
      if (dist < bd) { bd = dist; best = o; }
    });
    if (best) T.tiles[best].focus({ preventScroll: false });
  }
  $('navTree').addEventListener('click', function () { treeOpen(this); });
  $('adaptTree').addEventListener('click', function () { treeOpen(this); });
  $('treeClose').addEventListener('click', treeClose);
  $('treeAct').addEventListener('click', treeAct);
  $('treeview').addEventListener('click', function (e) { e.stopPropagation(); });
  $('treeview').addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.preventDefault(); treeClose(); } });
  window.addEventListener('resize', function () { if (T.open) { treeSize(); treeDraw(); } });
  function treeInfo() {
    var tiles = Object.keys(T.tiles).map(function (id) { var b = T.tiles[id].getBoundingClientRect(); return { id: id, state: (T.st[id] || {}).state || null, x: Math.round(b.left), y: Math.round(b.top), w: Math.round(b.width), h: Math.round(b.height) }; });
    return { open: T.open, selected: T.sel, tiles: tiles, lines: T.open ? $('treeLineG').querySelectorAll('path').length : 0, detail: T.open ? $('treeDetail').textContent.replace(/\s+/g, ' ').trim() : '' };
  }

  // ---------------------------------------------------------------- debug hook
  window.__la = {
    gl: function () { return GL.r; }, glStats: function () { return GL.r ? GL.r.stats() : { supported: false, failed: GL.failed, forced: GL.forced, reason: GL.reason }; },
    glSig: function (t) { return GL.r ? GL.r.signature(t) : null; },
    glPortrait: function () { return GL.p; },
    forceFallback: function (on) { GL.forced = !!on; if (on) { glDestroy(); glNote('Simple dish view: forced for testing.'); if (GL.p) { $('cellWrap').classList.remove('cellglon'); $('cellGL').hidden = true; } } else { GL.failed = false; glNote(''); GL.pfailed = false; if (S.screen === 'adapt') renderCell(); } return { forced: GL.forced }; },
    tree: function (on) { if (on === false) treeClose(); else treeOpen($('navTree')); return T.open; }, treeSelect: function (id) { return treeSelect(id); }, treeInfo: treeInfo,
    S: S, show: show, selectDish: selectDish, enterWatch: enterWatch, run: doRun, seek: seek, skip: skip, showResult: showResult, advance: advance,
    unlockWorld: function (w) { for (var v = 1; v < w; v++) orderOf(v).forEach(function (id) { S.cleared[id] = true; }); save('cleared2', S.cleared); renderList(); return { ok: !tabLocked(w), world: w }; },   // test setup: marks every dish before world w cleared, which opens its tab
    world: function (w) { if (tabLocked(w)) return { ok: false, reason: 'locked' }; S.worldTab = w; save('worldTab', w); renderList(); show('list'); return { ok: true, world: w }; }, worldOrder: function (w) { return orderOf(w == null ? S.worldTab : w).slice(); }, setTab: setTab,
    worldContinue: worldContinue, verdictAction: verdictAction, pressTip: pressTip,
    selectSlot: selectSlot, fit: function (id, layer) { var k = (Cards.part(id) || Cards.bio(id)).slot; if (layer != null) S.layer = layer; if (!selectable(k)) return { ok: false, reason: Sim.lockedReason(dishObj(), k) }; S.slot = k; return doFit(k, id); },
    unfit: function (k, id) { return doUnfit(k, id); }, preview: previewOption, clearPreview: clearPreview, fixViaSlots: fixViaSlots,
    tags: function () { return Array.prototype.map.call(document.querySelectorAll('#tagLayer .tag'), function (b) { return { slot: b.getAttribute('data-slot'), text: b.textContent, selectable: b.getAttribute('aria-disabled') === 'false', cls: b.className, hidden: b.hidden }; }); },
    options: function () { return Array.prototype.map.call(document.querySelectorAll('#optList .opt, #optList .optempty'), function (o) { var w = o.querySelector('.wt') || o.querySelector('.why'); return { id: o.getAttribute('data-id'), fitted: /fitted/.test(o.className), blocked: /blocked/.test(o.className), why: w ? w.textContent : '', img: (o.querySelector('img') || {}).complete ? o.querySelector('img').naturalWidth : null }; }); },
    fix: function (id) { var d = dishObj(), f = d.fixes.filter(function (x) { return x.id === id; })[0]; S.undo.push(copy(S.build)); S.build = Lv.applyFix(S.build, f); syncRuleFromBuild(); renderAdapt(false); return S.build; },
    setBuild: function (b) { S.undo.push(copy(S.build)); S.build = copy(b); syncRuleFromBuild(); renderAdapt(false); },
    setDial: function (k, v) { mutate(function (bb) { bb[k] = v; }); },
    ruleChoose: ruleChoose, installRule: installRule, previewDial: previewDial,
    bars: function () { return Array.prototype.map.call(document.querySelectorAll('#statBars .sb'), function (r) { return { stat: r.getAttribute('data-stat'), verdict: r.querySelector('.sb-verdict').textContent, vcls: r.querySelector('.sb-verdict').className, mark: r.querySelector('.sb-mark').style.left, markCls: r.querySelector('.sb-mark').className, ghost: r.querySelector('.sb-ghost').style.display === 'none' ? null : r.querySelector('.sb-ghost').style.left, ghostCls: r.querySelector('.sb-ghost').className, arrow: r.querySelector('.sb-arrow').textContent, arrowCls: r.querySelector('.sb-arrow').className, tag: r.querySelector('.sb-tag').textContent, failed: r.classList.contains('failed'), unchecked: r.classList.contains('unchecked'), zoneShown: r.querySelector('.sb-zone').style.display !== 'none' }; }); },
    liveBars: function () { return Array.prototype.map.call(document.querySelectorAll('#liveBars .sb'), function (r) { return { stat: r.getAttribute('data-stat'), verdict: r.querySelector('.sb-verdict').textContent, mark: r.querySelector('.sb-mark').style.left, tag: r.querySelector('.sb-tag').textContent }; }); },
    eventZoomState: function () { var z = S.ez, g = GL.r; return { fired: z.fired, kind: z.kind, target: z.target, active: !!(g && typeof g.eventActive === 'function' && g.eventActive()) }; },
    compare: function (on) { return compareSet(on); }, compareState: function () { var C = S.cmp; return { available: !!C.available && !$('cmpBtn').disabled, held: C.held, kept: C.kept, diffText: C.diff }; },
    completeCard: completeCard, whyList: whyList, startStandard: startStandard, marks: function () { return S.marks; }, grades: function () { return S.grades; },
    fixLine: function () { return $('fixLine').textContent; }, previewText: function () { return $('pvT').textContent; }, fail: function () { return S.fail; },
    cards: function () { return Array.prototype.map.call(document.querySelectorAll('#optList .opt'), function (o) { var c = o.querySelector('.chg'); return { id: o.getAttribute('data-id'), text: c.textContent, tones: Array.prototype.map.call(c.querySelectorAll('.ef[class*="t-"]'), function (x) { return x.className.replace(/.*t-/, '') + ':' + x.textContent.trim(); }) }; }); },
    info: function () {
      var r = S.run;
      return { screen: S.screen, mode: S.mode, dish: S.dish, build: S.build, slots: S.build && Sim.toSlots(S.build), slot: S.slot, layer: S.layer, pointed: S.pointed, carried: S.carried, t: S.t, stopAt: S.stopAt, playing: S.playing, watchDone: S.watchDone, runFinished: S.runFinished,
        overlay: S.overlayOpen, verdict: r && r.v, autopsy: r && r.autopsy, trouble: S.troubleTick, cleared: S.cleared, wins: S.wins, tipLevel: S.tipLevel,
        handler: $('handler').textContent, step: (document.querySelector('#stepbar li.on') || {}).textContent || '' };
    }
  };

  renderList(); show(S.seenIntro ? 'list' : 'intro');
  requestAnimationFrame(frame);
})();

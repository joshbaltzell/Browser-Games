// Picnic Raid rules. No DOM, no Date, no Math.random. Fixed 30 Hz step, fully deterministic.
var PicnicSim = (function () {
  'use strict';

  var HZ = 30;
  var BUDGET = 14, MAX_BUGS = 10, SLICES = 12, POCKET = 30;
  var RELEASE_TICKS = 21;      // one bug every 0.7 s
  var GAP = 14;                // bugs on one trail keep this much room between them
  var MAX_TICKS = HZ * 180;

  // ---------- seeded random (mulberry32) ----------
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function mix(a, b) { return (Math.imul(a ^ 0x9E3779B9, 0x85EBCA6B) + Math.imul(b + 0x7F4A7C15, 0xC2B2AE35)) >>> 0; }

  // ---------- data ----------
  var BUGS = {
    ant:     { cost: 1, hp: 3,  speed: 60,  armor: 0, bites: 1, flies: false, shield: false },
    ladybug: { cost: 2, hp: 4,  speed: 95,  armor: 0, bites: 1, flies: false, shield: true },
    beetle:  { cost: 3, hp: 14, speed: 35,  armor: 1, bites: 2, flies: false, shield: false },
    wasp:    { cost: 3, hp: 5,  speed: 120, armor: 0, bites: 1, flies: true,  shield: false }
  };
  var BUG_IDS = ['ant', 'ladybug', 'beetle', 'wasp'];

  var GADGETS = {
    swatter:   { cost: 6, range: 90 },
    salt:      { cost: 6, range: 110, cone: 70 },
    sprinkler: { cost: 8, range: 120 },
    candle:    { cost: 4, range: 100 },
    zapper:    { cost: 7, range: 130 },
    jam:       { cost: 2, range: 0 }
  };
  var GADGET_IDS = ['swatter', 'salt', 'sprinkler', 'candle', 'zapper', 'jam'];

  var SWATTER_CD = 66, SALT_CD = 15, ZAP_CD = 12;      // ticks: 2.2 s, 0.5 s, 0.4 s
  var SPRAY_CYCLE = 120, SPRAY_START = 90, SPRAY_LEN = 30; // 4 s cycle, sprays during the last 1 s
  var JAM_TICKS = 150;
  var SWATTER_DMG = 6, ZAP_DMG = 2;
  var MIN_DMG = 0.5;           // armor never cuts a hit below this

  // ---------- map (1280x720, painted lawn bg-lawn) ----------
  var PIE = { x: 640, y: 385 };
  var HILL = { x: 205, y: 125 };
  var BED = { x: 1190, y: 135 };
  var TRAILS = {
    W: [[205, 125], [150, 190], [105, 270], [95, 360], [130, 440], [200, 500], [300, 530], [400, 515], [480, 475], [535, 430], [575, 400]],
    N: [[1190, 135], [1235, 200], [1230, 290], [1180, 370], [1110, 440], [1020, 495], [920, 505], [830, 480], [770, 445], [730, 415], [705, 400]]
  };
  var WASP_FROM = { x: 1240, y: 40 };

  // Dense lookup: one point per pixel of arc length, so position lookups are cheap.
  function buildPath(pts) {
    var xs = [], ys = [];
    var acc = 0, i, k;
    for (i = 0; i < pts.length - 1; i++) {
      var ax = pts[i][0], ay = pts[i][1], bx = pts[i + 1][0], by = pts[i + 1][1];
      var segLen = Math.sqrt((bx - ax) * (bx - ax) + (by - ay) * (by - ay));
      var n = Math.ceil(segLen);
      for (k = 0; k < n; k++) {
        xs.push(ax + (bx - ax) * k / n);
        ys.push(ay + (by - ay) * k / n);
      }
      acc += segLen;
    }
    xs.push(pts[pts.length - 1][0]); ys.push(pts[pts.length - 1][1]);
    return { xs: xs, ys: ys, len: xs.length - 1 };
  }
  var PATHS = { W: buildPath(TRAILS.W), N: buildPath(TRAILS.N) };
  (function () {
    var dx = PIE.x - WASP_FROM.x, dy = PIE.y - WASP_FROM.y;
    var d = Math.sqrt(dx * dx + dy * dy), n = Math.round(d), xs = [], ys = [], i;
    for (i = 0; i <= n; i++) { xs.push(WASP_FROM.x + dx * i / n); ys.push(WASP_FROM.y + dy * i / n); }
    PATHS.F = { xs: xs, ys: ys, len: n };
  })();

  // Nine pads: four beside each trail (60 px off, on the lawn side) and one beside the pie.
  function nearestOnPath(path, x, y) {
    var best = 1e18, bi = 0, i;
    for (i = 0; i <= path.len; i++) {
      var d = (path.xs[i] - x) * (path.xs[i] - x) + (path.ys[i] - y) * (path.ys[i] - y);
      if (d < best) { best = d; bi = i; }
    }
    return bi;
  }
  function makePads() {
    var pads = [], lanes = ['W', 'N'], li, f, j;
    var fr = [0.2, 0.4, 0.6, 0.8];
    var cx = 640, cy = 360;
    for (li = 0; li < 2; li++) {
      var p = PATHS[lanes[li]];
      for (j = 0; j < 4; j++) {
        var s = Math.round(p.len * fr[j]);
        var x0 = p.xs[s], y0 = p.ys[s];
        var tx = p.xs[Math.min(p.len, s + 6)] - p.xs[Math.max(0, s - 6)];
        var ty = p.ys[Math.min(p.len, s + 6)] - p.ys[Math.max(0, s - 6)];
        var tl = Math.sqrt(tx * tx + ty * ty) || 1;
        var nx = -ty / tl, ny = tx / tl;
        // choose the normal that points toward the middle of the lawn
        if ((cx - x0) * nx + (cy - y0) * ny < 0) { nx = -nx; ny = -ny; }
        var px = Math.round(x0 + nx * 60), py = Math.round(y0 + ny * 60);
        pads.push({ x: px, y: py, lane: lanes[li], touchX: Math.round(x0), touchY: Math.round(y0), touchR: 22,
                    aim: Math.atan2(y0 - py, x0 - px) });
      }
    }
    pads.push({ x: 640, y: 432, lane: 'C', touchX: 640, touchY: 432, touchR: 80, aim: 0 });
    return pads;
  }
  var MAP = { w: 1280, h: 720, pie: PIE, hill: HILL, bed: BED, trails: TRAILS, paths: PATHS, waspFrom: WASP_FROM, pads: makePads() };

  // ---------- costs and validity ----------
  function cost(draft) {
    var c = 0, i;
    for (i = 0; i < draft.length; i++) c += BUGS[draft[i].bug].cost;
    return c;
  }
  function valid(draft) {
    if (!Array.isArray(draft) || draft.length > MAX_BUGS) return false;
    var c = 0, i;
    for (i = 0; i < draft.length; i++) {
      var d = draft[i];
      if (!d || !BUGS[d.bug] || (d.lane !== 'W' && d.lane !== 'N')) return false;
      c += BUGS[d.bug].cost;
    }
    return c <= BUDGET;
  }
  function layoutCost(layout) {
    var c = 0, i;
    for (i = 0; i < layout.pads.length; i++) if (layout.pads[i]) c += GADGETS[layout.pads[i]].cost;
    return c;
  }

  // ---------- simulation ----------
  function create(layout, draft) {
    var bugs = [], i;
    for (i = 0; i < draft.length; i++) {
      var def = BUGS[draft[i].bug];
      bugs.push({
        slot: i, kind: draft[i].bug, lane: draft[i].lane, flies: def.flies,
        hp: def.hp, shield: def.shield, state: 'wait', // wait | walk | stuck | done | gone
        s: 0, x: 0, y: 0, face: 1, slow: 1, stuck: 0, by: null, releaseTick: i * RELEASE_TICKS
      });
    }
    var pads = [];
    for (i = 0; i < 9; i++) {
      pads.push({ g: layout.pads[i] || null, cd: 0, used: false, fireTick: -999, dir: MAP.pads[i].aim });
    }
    return { tick: 0, bites: 0, bugs: bugs, pads: pads, over: false, endEmitted: false, gaveUp: [], draftLen: draft.length, active: draft.length };
  }

  function posOf(b) {
    var path = b.flies ? PATHS.F : PATHS[b.lane];
    var s = b.s > path.len ? path.len : b.s;
    var i = s | 0, f = s - i, j = i < path.len ? i + 1 : i;
    var nx = path.xs[i] + (path.xs[j] - path.xs[i]) * f;
    var ny = path.ys[i] + (path.ys[j] - path.ys[i]) * f;
    if (nx > b.x + 0.01) b.face = 1; else if (nx < b.x - 0.01) b.face = -1;
    b.x = nx; b.y = ny;
  }

  function damage(st, b, amt, gadget, ev) {
    if (b.state === 'gone' || b.state === 'done') return;
    if (b.shield) { b.shield = false; if (ev) ev.push({ type: 'hit', slot: b.slot, bug: b.kind, gadget: gadget, ignored: true, x: b.x, y: b.y }); return; }
    var a = amt - BUGS[b.kind].armor;
    if (a < MIN_DMG) a = MIN_DMG;
    b.hp -= a; b.by = gadget;
    if (ev) ev.push({ type: 'hit', slot: b.slot, bug: b.kind, gadget: gadget, dmg: a, x: b.x, y: b.y });
    if (b.hp <= 0) {
      b.state = 'gone'; st.active--;
      st.gaveUp.push({ bug: b.kind, x: b.x, y: b.y, by: gadget, slot: b.slot });
      if (ev) ev.push({ type: 'gaveUp', slot: b.slot, bug: b.kind, gadget: gadget, x: b.x, y: b.y });
    }
  }

  function dist2(ax, ay, bx, by) { return (ax - bx) * (ax - bx) + (ay - by) * (ay - by); }

  function tick(st, ev) {
    var bugs = st.bugs, n = bugs.length, i, k, b;
    var t = st.tick;

    // 1. release
    for (i = 0; i < n; i++) {
      b = bugs[i];
      if (b.state === 'wait' && t >= b.releaseTick) {
        b.state = 'walk'; b.s = 0; posOf(b);
        if (ev) ev.push({ type: 'release', slot: b.slot, bug: b.kind, x: b.x, y: b.y });
      }
    }

    // 2. gadgets act
    var sprayPhase = t % SPRAY_CYCLE - SPRAY_START;
    for (k = 0; k < 9; k++) {
      var pd = st.pads[k], g = pd.g;
      if (!g || pd.used) continue;
      var mp = MAP.pads[k], range = g === 'jam' ? 0 : GADGETS[g].range, r2 = range * range;
      if (pd.cd > 0) pd.cd--;
      if (g === 'swatter') {
        if (pd.cd > 0) continue;
        var lead = null, leadF = -1;
        for (i = 0; i < n; i++) {
          b = bugs[i];
          if ((b.state !== 'walk' && b.state !== 'stuck') || b.flies) continue;
          if (dist2(b.x, b.y, mp.x, mp.y) > r2) continue;
          var f = b.s / PATHS[b.lane].len;
          if (f > leadF) { leadF = f; lead = b; }
        }
        if (lead) {
          pd.cd = SWATTER_CD; pd.fireTick = t;
          damage(st, lead, SWATTER_DMG, 'swatter', ev);
          if (ev) ev.push({ type: 'fire', gadget: 'swatter', pad: k, x: lead.x, y: lead.y });
        }
      } else if (g === 'salt') {
        if (pd.cd > 0) continue;
        var dir = mp.aim;
        if (mp.lane === 'C') {
          var ld = null, lf = -1;
          for (i = 0; i < n; i++) {
            b = bugs[i];
            if ((b.state !== 'walk' && b.state !== 'stuck') || b.flies) continue;
            if (dist2(b.x, b.y, mp.x, mp.y) > r2) continue;
            var ff = b.s / PATHS[b.lane].len;
            if (ff > lf) { lf = ff; ld = b; }
          }
          if (!ld) continue;
          dir = Math.atan2(ld.y - mp.y, ld.x - mp.x);
        }
        pd.dir = dir;
        var half = GADGETS.salt.cone * Math.PI / 360, hit = false;
        for (i = 0; i < n; i++) {
          b = bugs[i];
          if ((b.state !== 'walk' && b.state !== 'stuck') || b.flies) continue;
          if (dist2(b.x, b.y, mp.x, mp.y) > r2) continue;
          var da = Math.atan2(b.y - mp.y, b.x - mp.x) - dir;
          while (da > Math.PI) da -= 2 * Math.PI;
          while (da < -Math.PI) da += 2 * Math.PI;
          if (da < -half || da > half) continue;
          if (!hit) { hit = true; pd.cd = SALT_CD; pd.fireTick = t; if (ev) ev.push({ type: 'fire', gadget: 'salt', pad: k, x: b.x, y: b.y }); }
          damage(st, b, 1, 'salt', ev);
        }
      } else if (g === 'sprinkler') {
        // damage on the 0.25 s beat while spraying
        if (sprayPhase >= 0 && sprayPhase < SPRAY_LEN && (sprayPhase === 0 || ((sprayPhase * 4 / HZ) | 0) !== (((sprayPhase - 1) * 4 / HZ) | 0))) {
          var any = false;
          for (i = 0; i < n; i++) {
            b = bugs[i];
            if ((b.state !== 'walk' && b.state !== 'stuck') || b.flies) continue;
            if (dist2(b.x, b.y, mp.x, mp.y) > r2) continue;
            if (!any) { any = true; pd.fireTick = t; if (ev) ev.push({ type: 'fire', gadget: 'sprinkler', pad: k, x: mp.x, y: mp.y }); }
            damage(st, b, 1, 'sprinkler', ev);
          }
        }
      } else if (g === 'zapper') {
        if (pd.cd > 0) continue;
        var zt = null, zf = -1;
        for (i = 0; i < n; i++) {
          b = bugs[i];
          if (b.state !== 'walk' || !b.flies) continue;
          if (dist2(b.x, b.y, mp.x, mp.y) > r2) continue;
          if (b.s > zf) { zf = b.s; zt = b; }
        }
        if (zt) {
          pd.cd = ZAP_CD; pd.fireTick = t;
          damage(st, zt, ZAP_DMG, 'zapper', ev);
          if (ev) ev.push({ type: 'fire', gadget: 'zapper', pad: k, x: zt.x, y: zt.y });
        }
      } else if (g === 'jam') {
        var tr2 = mp.touchR * mp.touchR;
        for (i = 0; i < n; i++) {
          b = bugs[i];
          if (b.state !== 'walk' || b.flies) continue;
          if (dist2(b.x, b.y, mp.touchX, mp.touchY) <= tr2) {
            b.state = 'stuck'; b.stuck = JAM_TICKS; pd.used = true;
            if (ev) ev.push({ type: 'stuck', slot: b.slot, bug: b.kind, pad: k, x: b.x, y: b.y });
            break;
          }
        }
      }
    }

    // 3. move bugs (release order keeps each trail in a column)
    var ahead = { W: -1, N: -1 };
    var dt = 1 / HZ;
    for (i = 0; i < n; i++) {
      b = bugs[i];
      if (b.state !== 'walk' && b.state !== 'stuck') continue;
      var def = BUGS[b.kind], path = b.flies ? PATHS.F : PATHS[b.lane];
      if (b.state === 'stuck') {
        b.stuck--;
        if (b.stuck <= 0) b.state = 'walk';
        if (!b.flies) ahead[b.lane] = b.s;
        continue;
      }
      // slow effects
      var slow = 1;
      for (k = 0; k < 9; k++) {
        var gd = st.pads[k];
        if (!gd.g || gd.used) continue;
        if (gd.g === 'candle') {
          if (dist2(b.x, b.y, MAP.pads[k].x, MAP.pads[k].y) <= 10000) slow *= 0.55;
        } else if (gd.g === 'sprinkler' && !b.flies && sprayPhase >= 0 && sprayPhase < SPRAY_LEN) {
          if (dist2(b.x, b.y, MAP.pads[k].x, MAP.pads[k].y) <= 14400) slow *= 0.7;
        }
      }
      if (slow < 0.25) slow = 0.25;
      b.slow = slow;
      var ns = b.s + def.speed * slow * dt;
      if (!b.flies) {
        var a = ahead[b.lane];
        if (a >= 0 && ns > a - GAP) ns = a - GAP;
        if (ns < b.s) ns = b.s;
      }
      b.s = ns;
      if (ns >= path.len) {
        b.state = 'done'; st.active--;
        st.bites += def.bites;
        if (st.bites > SLICES) st.bites = SLICES;
        b.s = path.len; posOf(b);
        if (ev) ev.push({ type: 'bite', slot: b.slot, bug: b.kind, amount: def.bites, x: b.x, y: b.y, bites: st.bites });
        continue;
      }
      posOf(b);
      if (!b.flies) ahead[b.lane] = b.s;
    }

    st.tick = t + 1;
    if (st.active <= 0 && !st.over) {
      st.over = true;
      if (ev) ev.push({ type: 'end', bites: st.bites });
    }
    if (st.tick > MAX_TICKS && !st.over) { st.over = true; if (ev) ev.push({ type: 'end', bites: st.bites }); }
  }

  function step(st) {
    var ev = [];
    if (!st.over) tick(st, ev);
    return ev;
  }

  function run(layout, draft) {
    var st = create(layout, draft);
    while (!st.over) tick(st, null);
    return { bites: st.bites, gaveUp: st.gaveUp, ticks: st.tick };
  }
  function score(layout, draft) {
    var st = create(layout, draft);
    while (!st.over) tick(st, null);
    return st.bites;
  }

  // ---------- solver ----------
  function randomDraft(r) {
    var draft = [], left = BUDGET, guard = 0;
    var target = 3 + ((r() * 8) | 0);
    while (draft.length < MAX_BUGS && draft.length < target && guard++ < 40) {
      var id = BUG_IDS[(r() * 4) | 0];
      if (BUGS[id].cost > left) continue;
      left -= BUGS[id].cost;
      draft.push({ bug: id, lane: r() < 0.5 ? 'W' : 'N' });
    }
    // spend what is left on ants
    while (draft.length < MAX_BUGS && left >= 1 && r() < 0.85) { draft.push({ bug: 'ant', lane: r() < 0.5 ? 'W' : 'N' }); left--; }
    return draft;
  }
  function mutate(d, r) {
    var out = d.map(function (x) { return { bug: x.bug, lane: x.lane }; });
    var m = (r() * 6) | 0, i, j;
    if (out.length === 0) return randomDraft(r);
    if (m === 0 && out.length > 1) { i = (r() * out.length) | 0; j = (r() * out.length) | 0; var tmp = out[i]; out[i] = out[j]; out[j] = tmp; }
    else if (m === 1) { i = (r() * out.length) | 0; out[i].bug = BUG_IDS[(r() * 4) | 0]; }
    else if (m === 2) { i = (r() * out.length) | 0; out[i].lane = out[i].lane === 'W' ? 'N' : 'W'; }
    else if (m === 3) { i = (r() * out.length) | 0; out.splice(i, 1); }
    else if (m === 4) { out.splice((r() * (out.length + 1)) | 0, 0, { bug: BUG_IDS[(r() * 4) | 0], lane: r() < 0.5 ? 'W' : 'N' }); }
    else { i = (r() * out.length) | 0; out[i] = { bug: BUG_IDS[(r() * 4) | 0], lane: r() < 0.5 ? 'W' : 'N' }; }
    return out;
  }

  // Incremental solver so the game can run it in small slices. work(n) does up to n raids.
  function solver(layout, opts) {
    opts = opts || {};
    var tries = opts.tries == null ? 1500 : opts.tries;
    var climbs = opts.climbs == null ? 300 : opts.climbs;
    var r = rng(mix(opts.seed || 0, 0x51ED));
    var seeds = (opts.init || []).slice();
    var S = { best: null, bites: -1, done: false, runs: 0, progress: 0 };
    var total = seeds.length + tries + climbs, count = 0;
    function consider(d) {
      if (!valid(d)) return false;
      var sc = score(layout, d);
      S.runs++;
      if (sc > S.bites) { S.bites = sc; S.best = d; return true; }
      return false;
    }
    S.work = function (n) {
      var i = 0;
      while (!S.done && i < n) {
        if (count < seeds.length) consider(seeds[count]);
        else if (count < seeds.length + tries) consider(randomDraft(r));
        else if (count < total) consider(mutate(S.best || [], r));
        count++; i++;
        if (count >= total) { S.done = true; if (!S.best) { S.best = []; S.bites = 0; } }
      }
      S.progress = count / total;
      return S.done;
    };
    return S;
  }
  function solve(layout, opts) {
    var s = solver(layout, opts);
    while (!s.work(500)) { /* run to the end */ }
    return { draft: s.best, bites: s.bites };
  }

  // ---------- attackers ----------
  var SCOUT = [['ant', 'W'], ['ant', 'N'], ['ant', 'W'], ['ant', 'N'], ['ladybug', 'W'], ['ladybug', 'N'], ['ant', 'W'], ['ant', 'N'], ['ant', 'W'], ['ant', 'N']];
  function scout() { return SCOUT.map(function (p) { return { bug: p[0], lane: p[1] }; }); }

  function captain(layout) {
    var counts = {}, i, top = null;
    for (i = 0; i < 9; i++) { var g = layout.pads[i]; if (g) counts[g] = (counts[g] || 0) + 1; }
    for (i = 0; i < GADGET_IDS.length; i++) {
      var id = GADGET_IDS[i];
      if (counts[id] && (top === null || counts[id] > counts[top])) top = id;
    }
    // lane with less guarding it
    var w = 0, nn = 0;
    for (i = 0; i < 9; i++) { if (!layout.pads[i]) continue; if (i < 4) w++; else if (i < 8) nn++; else { w += 0.5; nn += 0.5; } }
    var open = w <= nn ? 'W' : 'N', other = open === 'W' ? 'N' : 'W';
    var plan;
    if (top === 'zapper' || top === 'candle') plan = [['beetle', open], ['beetle', other], ['ant', open], ['ant', other], ['ant', open], ['ant', other], ['ant', open], ['ant', other]];
    else if (top === 'swatter') plan = [['ant', open], ['ant', other], ['ant', open], ['ant', other], ['ant', open], ['ant', other], ['ladybug', open], ['ladybug', other], ['ant', open], ['ant', other]];
    else if (top === 'salt' || top === 'sprinkler') plan = [['beetle', open], ['beetle', open], ['ladybug', other], ['ladybug', other], ['ant', open], ['ant', other], ['ant', open], ['ant', other]];
    else if (top === 'jam') plan = [['ladybug', open], ['ladybug', other], ['ladybug', open], ['ant', other], ['ant', open], ['ant', other], ['ant', open], ['ant', other], ['ant', open], ['ant', other]];
    else plan = [['wasp', open], ['wasp', other], ['wasp', open], ['wasp', other], ['ant', open], ['ant', other]];
    var draft = plan.map(function (p) { return { bug: p[0], lane: p[1] }; });
    while (!valid(draft)) draft.pop();
    return draft;
  }

  var MARSHAL_OPTS = { tries: 700, climbs: 250 };
  function marshalSolver(layout, seed) {
    return solver(layout, { tries: MARSHAL_OPTS.tries, climbs: MARSHAL_OPTS.climbs, seed: seed, init: [scout(), captain(layout)] });
  }
  function marshal(layout, seed) {
    var s = marshalSolver(layout, seed);
    while (!s.work(500)) { /* run to the end */ }
    return s.best;
  }
  var attackers = { scout: scout, captain: captain, marshal: marshal };

  // ---------- generated picnics ----------
  var BAG = [['swatter', 1, 2], ['salt', 1, 2], ['sprinkler', 0, 1], ['candle', 1, 2], ['zapper', 0, 2], ['jam', 0, 2]];

  function sampleLayout(seed, attempt) {
    var r = rng(mix(seed, 1000 + attempt));
    var bag, guard = 0;
    do {
      bag = [];
      for (var i = 0; i < BAG.length; i++) {
        var cnt = BAG[i][1] + ((r() * (BAG[i][2] - BAG[i][1] + 1)) | 0);
        for (var j = 0; j < cnt; j++) bag.push(BAG[i][0]);
      }
    } while (bag.length < 7 && guard++ < 50);
    var n = Math.min(bag.length, 7 + ((r() * 3) | 0));
    // shuffle bag and pads
    var k, t;
    for (k = bag.length - 1; k > 0; k--) { t = (r() * (k + 1)) | 0; var x = bag[k]; bag[k] = bag[t]; bag[t] = x; }
    var order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (k = 8; k > 0; k--) { t = (r() * (k + 1)) | 0; var y = order[k]; order[k] = order[t]; order[t] = y; }
    var pads = [null, null, null, null, null, null, null, null, null];
    for (k = 0; k < n; k++) pads[order[k]] = bag[k];
    return { pads: pads };
  }
  function tenAnts(layout) {
    var w = [], nn = [], i;
    for (i = 0; i < 10; i++) { w.push({ bug: 'ant', lane: 'W' }); nn.push({ bug: 'ant', lane: 'N' }); }
    return Math.max(score(layout, w), score(layout, nn));
  }
  function acceptable(layout, best) {
    return best >= 6 && best <= 11 && tenAnts(layout) <= best - 3;
  }
  // Incremental generator so the game never blocks input. work(n) does up to n raids; result appears when done.
  function layoutJob(seed) {
    var J = { done: false, result: null, attempt: 0, progress: 0 }, layout = null, sv = null;
    J.work = function (n) {
      while (!J.done && n > 0) {
        if (!sv) { layout = sampleLayout(seed, J.attempt); sv = marshalSolver(layout, seed); }
        var chunk = Math.min(n, 100);
        var fin = sv.work(chunk); n -= chunk;
        if (fin) {
          var best = score(layout, sv.best);
          if (acceptable(layout, best) || J.attempt >= 399) { J.done = true; J.result = { layout: layout, best: best, draft: sv.best }; }
          else { J.attempt++; sv = null; }
        }
      }
      J.progress = J.done ? 1 : 0;
      return J.done;
    };
    return J;
  }
  function layoutFromSeed(seed) {
    var j = layoutJob(seed);
    while (!j.work(500)) { /* run to the end */ }
    return j.result;
  }

  // The fixed first picnic: one swatter on the second west pad.
  var FIRST = { pads: [null, 'swatter', null, null, null, null, null, null, null] };

  var api = {
    HZ: HZ, BUDGET: BUDGET, MAX_BUGS: MAX_BUGS, SLICES: SLICES, POCKET: POCKET,
    MAP: MAP, BUGS: BUGS, GADGETS: GADGETS, BUG_IDS: BUG_IDS, GADGET_IDS: GADGET_IDS,
    SPRAY: { cycle: SPRAY_CYCLE, start: SPRAY_START, len: SPRAY_LEN },
    SWATTER_CD: SWATTER_CD, JAM_TICKS: JAM_TICKS,
    create: create, step: step, run: run, cost: cost, valid: valid, layoutCost: layoutCost,
    solve: solve, solver: solver, marshalSolver: marshalSolver, layoutFromSeed: layoutFromSeed, layoutJob: layoutJob,
    attackers: attackers, FIRST: FIRST, rng: rng, score: score, tenAnts: tenAnts
  };
  return api;
})();
if (typeof module !== 'undefined') module.exports = PicnicSim;

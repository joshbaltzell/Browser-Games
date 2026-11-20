// Look Alive, habitat 3: the individual-cell simulation (salt flat).
// Plain script: sets window.LookAliveSim3 in a browser and module.exports in Node. No dependencies, works from file://.
// Units: micrometres, seconds, food units. One tick = 1 second of microbe time = SUB fixed substeps.
// Deterministic from a seed (seeded RNG only; no Math.random, no Date).
//
// Quantisation of recorded frames (see unpack):
//   x, y : Uint16, position over the dish's bounding square [-R, R]: u = round((um + R) / (2R) * 65535)
//   h    : Uint8 heading, 256 steps over a full turn: h = floor(rad / 2pi * 256) & 255
//   k    : Uint8, low 3 bits = kind (0 scout, 1 quad, 2 halo, 3 sali), bit 3 (8) = moving this tick, bit 4 (16) = resting or paused
// foods: the food grid every 5 ticks (index t/5) as Uint8Array(N*N), row-major, value = min(255, round(food * FOOD_SCALE)); FOOD_SCALE = P3.foodScale (1500, so a byte is 0.00067 food units and 255 is 0.17).
(function (root) {
  'use strict';
  var TAU = 6.283185307179586;

  var P3 = {
    R: 250, N: 64, SUB: 5, CAP: 3000, preroll: 150,
    // food
    D: 18.0,                       // food diffusion, um^2/s (slow); applied once per tick
    decay: 0.1,                    // food lost per second away from the cells that eat it (spoilage); keeps bare ground bare
    rimBoulder: 0.55,               // boulders bloom inside this fraction of the radius
    // energy (reserve divides at about 1.0)
    vmax: 0.03, K: 0.05, yield: 1.0, divideE: 1.0, e0lo: 0.4, e0hi: 0.8, scoutE0lo: 0.4, scoutE0hi: 0.8, nativeThrSd: 0.06,
    // upkeep per second
    upBase: 0.0040, upQuad: 0.0036, upPili: 0.0020, upVes: 0.0008, upFlag: 0.0014, upSwim: 0.002, upChemo: 0.0008, upReflex: 0.0003,
    // movement
    DB: 0.4, DQuad: 1.0, DrotB: 0.2, DVes: 2.5,
    piliSpeed: 3.0, piliTugMin: 0.7, piliTugMax: 1.5, piliPause: 3.5, piliTip: 3.0,
    swimSpeed: 20, wobbleRot: 0.15, tumbleRate: 1.0, tumbleMean: 68 * Math.PI / 180, tumbleSd: 30 * Math.PI / 180,
    memTau: 1.0, chemoGain: 30, chemoEps: 0.005,
    haloMark: 0.015,                // food at its square above which a Halobacterium stops to feed
    moveMin: 3.0,                  // net displacement in a tick (um) that counts as moving
    // the player's build
    paceUpt: 0.12, paceUp: 0.05,   // per pace step away from 4: uptake and divide speed, and upkeep
    fermUpt: 1.6, fermYield: 0.5,  // fermentation: faster uptake, lower yield
    slopSd: 0.04,                  // division threshold noise per slop step
    napShare: 0.14, napOn: 20,     // naps: share resting, mean rest length (s); awake length follows
    startRadius: 70, landMin: 0.5, landMax: 0.85, landTries: 8, landReach: 70, // scouts: cluster radius, and distance of its centre from the middle (fraction of R)
    // blending in
    gGain: 4, regSlop: [0.55, 0.40, 0.18], regMachine: 0.12, regDead: 0.15, regGain: 3,
    motionTol: 0.35, motionGain: 6, motionAlpha: 0.1,
    fastKeep: 0.7, slowKeep: 0.97, slowGain: 0.08, weight: [1, 1, 1],
    stage: [1.0, 2.5, 4.0], kill: 0.05,
    machineIds: ['fuelcell', 'clock', 'shell', 'radio', 'copier', 'repair'],
    foodScale: 1500
  };

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function defaults() {
    return {
      seed: 1, start: 30,
      natives: { quad: 200, halo: 90, sali: 30 },
      boulders: { count: 5, leak: 0.6, sigma: 28, lifeMin: 60, lifeMax: 120 },
      band: { lo: 0.04, hi: 0.12, need: 0.7, warm: 30 }
    };
  }

  function normBuild(b) {
    b = b || {};
    if (b.slots) {
      var sl = b.slots, parts = [], env = sl.envelope ? (Array.isArray(sl.envelope) ? sl.envelope : [sl.envelope]) : [];
      env.forEach(function (id) { if (id) parts.push(id); });
      ['insides', 'division', 'signal', 'motor'].forEach(function (k) { if (sl[k]) parts.push(sl[k]); });
      b = { pace: b.pace, slop: b.slop, metabolism: sl.power || null, parts: parts, reflex: sl.reflex || null };
    }
    return {
      pace: b.pace == null ? 4 : b.pace, slop: b.slop == null ? 0 : b.slop,
      metabolism: b.metabolism || 'respiration', parts: (b.parts || []).slice(), reflex: b.reflex || null
    };
  }

  function machineCount(b, P) {
    var n = b.reflex ? 1 : 0, i;
    for (i = 0; i < b.parts.length; i++) if (P.machineIds.indexOf(b.parts[i]) >= 0) n++;
    if (b.metabolism === 'fuelcell') n++;
    return n;
  }

  function play(dish, build, opts) {
    opts = opts || {};
    var P = {}, key;
    for (key in P3) P[key] = P3[key];
    if (opts.tune) for (key in opts.tune) P[key] = opts.tune[key];
    var A = dish.agents || defaults();
    var T = opts.T || dish.T || 300;
    var seed = opts.seed != null ? opts.seed | 0 : (A.seed != null ? A.seed | 0 : 1);
    var record = opts.record !== false;
    var b = normBuild(build);
    var band = A.band || {};
    band = { lo: band.lo == null ? 0.04 : band.lo, hi: band.hi == null ? 0.12 : band.hi, need: band.need == null ? 0.7 : band.need, warm: band.warm == null ? 30 : band.warm };
    var nat = A.natives || { quad: 0, halo: 0, sali: 0 };
    var bo = A.boulders || { count: 0, leak: 0, sigma: 25, lifeMin: 100, lifeMax: 200 };
    var uniform = !!A.uniform;
    var chn = A.channels || {}, chOn = [chn.growth !== false, chn.regularity !== false, chn.motion !== false];

    var N = P.N, R = P.R, W = 2 * R / N, inv = 1 / W, SUB = P.SUB, dt = 1 / SUB, NN = N * N;
    var rng = mulberry32(seed * 7919 + 13), env = mulberry32(seed * 104729 + 99991);
    var spare = 0, haveSpare = false;
    function randn() {
      if (haveSpare) { haveSpare = false; return spare; }
      var u = rng() || 1e-12, v = rng(), m = Math.sqrt(-2 * Math.log(u));
      spare = m * Math.sin(TAU * v); haveSpare = true; return m * Math.cos(TAU * v);
    }

    // grid
    var mask = new Uint8Array(NN), nMask = 0, i, j, k;
    for (j = 0; j < N; j++) for (i = 0; i < N; i++) {
      var cx0 = (i + 0.5) * W - R, cy0 = (j + 0.5) * W - R;
      if (cx0 * cx0 + cy0 * cy0 <= R * R) { mask[j * N + i] = 1; nMask++; }
    }
    var food = new Float64Array(NN), tmp = new Float64Array(NN), demand = new Float64Array(NN), cnt = new Int32Array(NN);

    // specs by kind: 0 scout, 1 quad, 2 halo, 3 sali
    var paceUpt = 1 + P.paceUpt * (b.pace - 4), paceUp = 1 + P.paceUp * (b.pace - 4);
    if (paceUpt < 0.2) paceUpt = 0.2; if (paceUp < 0.5) paceUp = 0.5;
    var ferm = b.metabolism === 'fermentation';
    var hasChemo = b.parts.indexOf('chemo') >= 0, hasNaps = b.parts.indexOf('naps') >= 0;
    var mot = b.parts.indexOf('flagellum') >= 0 ? 2 : b.parts.indexOf('pili') >= 0 ? 1 : b.parts.indexOf('vesicles') >= 0 ? 3 : 0;
    var sUp = P.upBase * paceUp + (mot === 1 ? P.upPili : mot === 2 ? P.upFlag : mot === 3 ? P.upVes : 0) + (hasChemo && (mot === 1 || mot === 2) ? P.upChemo : 0) + (b.reflex ? P.upReflex : 0);
    var rf = b.reflex && (b.reflex.kind === 'machine' || b.reflex.kind == null) ? b.reflex : null;
    var rSensor = rf ? (rf.sensor === 'crowd' ? 2 : 1) : 0, rGt = rf ? rf.cmp !== 'lt' : true, rVal = rf ? +rf.value : 0;
    var rAct = rf ? actCode(rf.action) : 0, rOther = rf ? actCode(rf.otherwise || 'seek') : 0;
    function actCode(a) { return a === 'stay' ? 1 : a === 'pause' ? 2 : 0; }
    var SP = [
      { mot: mot, chemo: hasChemo, upt: paceUpt * (ferm ? P.fermUpt : 1), yld: P.yield * (ferm ? P.fermYield : 1), up: sUp, swimUp: mot === 2 ? P.upSwim : 0 },
      { mot: 0, chemo: false, upt: 1, yld: P.yield, up: P.upQuad, swimUp: 0 },
      { mot: 2, chemo: true, upt: 1, yld: P.yield, up: P.upBase + P.upFlag + P.upChemo, swimUp: P.upSwim },
      { mot: 2, chemo: true, upt: 1, yld: P.yield, up: P.upBase + P.upFlag + P.upChemo, swimUp: P.upSwim }
    ];
    var slopSd = P.slopSd * b.slop;
    var needCrowd = rSensor === 2;

    // individuals
    var cap = P.CAP + 64, n = 0, nextId = 0;
    var x = new Float64Array(cap), y = new Float64Array(cap), h = new Float64Array(cap), e = new Float64Array(cap), thr = new Float64Array(cap);
    var kind = new Uint8Array(cap), id = new Int32Array(cap), ph = new Uint8Array(cap), aux = new Float64Array(cap), ref = new Float64Array(cap);
    var swim = new Uint8Array(cap), cell = new Int32Array(cap), dem = new Float64Array(cap), act = new Uint8Array(cap);
    var x0 = new Float64Array(cap), y0 = new Float64Array(cap), mv = new Uint8Array(cap), nap = new Uint8Array(cap), napT = new Float64Array(cap);

    function sampleFood(px, py) {
      var gx = (px + R) * inv - 0.5, gy = (py + R) * inv - 0.5;
      var xa = Math.floor(gx), ya = Math.floor(gy), fx = gx - xa, fy = gy - ya, xb = xa + 1, yb = ya + 1;
      if (xa < 0) xa = 0; if (ya < 0) ya = 0; if (xb < 0) xb = 0; if (yb < 0) yb = 0;
      if (xa > N - 1) xa = N - 1; if (ya > N - 1) ya = N - 1; if (xb > N - 1) xb = N - 1; if (yb > N - 1) yb = N - 1;
      return (food[ya * N + xa] * (1 - fx) + food[ya * N + xb] * fx) * (1 - fy) + (food[yb * N + xa] * (1 - fx) + food[yb * N + xb] * fx) * fy;
    }
    function cellOf(px, py) {
      var gi = Math.floor((px + R) * inv), gj = Math.floor((py + R) * inv);
      if (gi < 0) gi = 0; else if (gi > N - 1) gi = N - 1;
      if (gj < 0) gj = 0; else if (gj > N - 1) gj = N - 1;
      return gj * N + gi;
    }
    function drawThr(kd) {
      if (kd === 0) { if (slopSd <= 0) return P.divideE; var v = P.divideE * (1 + slopSd * randn()); return v < 0.5 ? 0.5 : v > 1.6 ? 1.6 : v; }
      var w = P.divideE * (1 + P.nativeThrSd * randn()); return w < 0.6 ? 0.6 : w;
    }
    function addInd(kd, px, py, hd, en) {
      if (n >= P.CAP + 32) return -1;
      var m = n;
      x[m] = px; y[m] = py; x0[m] = px; y0[m] = py; h[m] = hd; e[m] = en; kind[m] = kd; id[m] = nextId++;
      thr[m] = drawThr(kd); ph[m] = 0; aux[m] = rng() * P.piliPause; swim[m] = 0; mv[m] = 0; act[m] = 0;
      cell[m] = cellOf(px, py); ref[m] = sampleFood(px, py);
      nap[m] = 0; napT[m] = 0;
      if (kd === 0 && hasNaps) {
        if (rng() < P.napShare) { nap[m] = 1; napT[m] = -Math.log(rng() || 1e-12) * P.napOn; }
        else napT[m] = -Math.log(rng() || 1e-12) * P.napOn * (1 - P.napShare) / P.napShare;
      }
      n = m + 1; return m;
    }

    // boulders
    var boulders = [], live = [];
    function bloom(tick) {
      var rad = R * P.rimBoulder * Math.sqrt(env()), ang = env() * TAU;
      var bx = rad * Math.cos(ang), by = rad * Math.sin(ang), sg = bo.sigma;
      var idx = [], wt = [], tot = 0, ex = Math.ceil(3 * sg * inv) + 1;
      var ci = Math.floor((bx + R) * inv), cj = Math.floor((by + R) * inv), ii, jj;
      for (jj = cj - ex; jj <= cj + ex; jj++) for (ii = ci - ex; ii <= ci + ex; ii++) {
        if (ii < 0 || jj < 0 || ii >= N || jj >= N || !mask[jj * N + ii]) continue;
        var dx = (ii + 0.5) * W - R - bx, dy = (jj + 0.5) * W - R - by;
        var g = Math.exp(-(dx * dx + dy * dy) / (2 * sg * sg));
        idx.push(jj * N + ii); wt.push(g); tot += g;
      }
      for (var q = 0; q < wt.length; q++) wt[q] /= tot;
      var life = bo.lifeMin + (bo.lifeMax - bo.lifeMin) * env();
      var rec = { x: bx, y: by, sigma: sg, birth: tick, death: null };
      live.push({ idx: idx, wt: wt, dieAt: tick + life, rec: rec });
      boulders.push(rec);
    }
    var tickNow = -P.preroll;
    var uniAdd = uniform ? bo.count * bo.leak / nMask : 0;
    if (!uniform) for (k = 0; k < bo.count; k++) {
      bloom(tickNow);
      live[live.length - 1].dieAt = tickNow + (bo.lifeMin + (bo.lifeMax - bo.lifeMin) * env()) * (0.15 + 0.85 * env()); // staggered ages at the start
    }

    // natives, seeded uniformly inside the disc
    function seedNatives(kd, c) {
      for (var q = 0; q < c; q++) {
        var rad = R * 0.98 * Math.sqrt(rng()), ang = rng() * TAU;
        addInd(kd, rad * Math.cos(ang), rad * Math.sin(ang), rng() * TAU, P.e0lo + (P.e0hi - P.e0lo) * rng());
      }
    }
    seedNatives(1, nat.quad || 0); seedNatives(2, nat.halo || 0); seedNatives(3, nat.sali || 0);
    // shuffle initial order is not needed: ids are assigned in creation order

    // run state
    var deaths = [], dCause = { starved: 0, guards: 0 };
    var H = { share: null }, frames = null, foods = null;
    var mk = function () { return new Float32Array(T + 1); };
    H = { share: mk(), scouts: mk(), natives: mk(), total: mk(), food: mk(), stage: mk(), kill: mk(), moveS: mk(), moveN: mk(), susp: { growth: mk(), regularity: mk(), motion: mk() } };
    if (record) { frames = new Array(T + 1); foods = []; }
    var fast = [0, 0, 0], slow = [0, 0, 0], contrib = [0, 0, 0], peakCh = [0, 0, 0], S = 0, stage = 0, exposedAt = -1, firstStage1 = -1;
    var emaS = 0, emaN = 0, emaInit = false;
    var machines = machineCount(b, P);
    var regRaw = (b.slop < P.regSlop.length ? P.regSlop[Math.max(0, Math.round(b.slop))] : 0) + P.regMachine * machines;
    var moveEx = 0;

    var diffN = Math.max(1, Math.ceil(P.D / (W * W) / 0.2));   // explicit diffusion must keep lambda under 0.25
    function diffuse() {
      var lam = P.D / (W * W) / diffN, keep = uniform ? 1 : Math.exp(-P.decay), rep, f, g;
      for (rep = 0; rep < diffN; rep++) {
        f = food; g = tmp;
        var kp = rep === diffN - 1 ? keep : 1;
        for (var jj = 0; jj < N; jj++) for (var ii = 0; ii < N; ii++) {
          var kk = jj * N + ii;
          if (!mask[kk]) { g[kk] = 0; continue; }
          var c = f[kk], d = 0;
          if (ii > 0 && mask[kk - 1]) d += f[kk - 1] - c;
          if (ii < N - 1 && mask[kk + 1]) d += f[kk + 1] - c;
          if (jj > 0 && mask[kk - N]) d += f[kk - N] - c;
          if (jj < N - 1 && mask[kk + N]) d += f[kk + N] - c;
          g[kk] = (c + lam * d) * kp;
        }
        food = g; tmp = f;
      }
    }

    function substep() {
      var sdB = Math.sqrt(2 * P.DB * dt), sdQ = Math.sqrt(2 * P.DQuad * dt), sdR = Math.sqrt(2 * P.DrotB * dt), sdV = Math.sqrt(2 * P.DVes * dt), i, kk;
      var tr = 0;
      if (needCrowd) { cnt.fill(0); for (i = 0; i < n; i++) cnt[cell[i]]++; }
      demand.fill(0);
      for (i = 0; i < n; i++) {
        var kd = kind[i], sp = SP[kd], a = 0, cl = cell[i];
        if (kd === 0) {
          if (hasNaps) {
            napT[i] -= dt;
            if (napT[i] <= 0) {
              nap[i] = nap[i] ? 0 : 1;
              napT[i] = -Math.log(rng() || 1e-12) * (nap[i] ? P.napOn : P.napOn * (1 - P.napShare) / P.napShare);
            }
          }
          if (nap[i]) a = 3;
          else if (rSensor) {
            var v;
            if (rSensor === 1) v = food[cl];
            else {
              var ci = cl % N, cj = (cl - ci) / N; v = 0;
              for (var oj = -1; oj <= 1; oj++) for (var oi = -1; oi <= 1; oi++) {
                var qi = ci + oi, qj = cj + oj;
                if (qi >= 0 && qj >= 0 && qi < N && qj < N) v += cnt[qj * N + qi];
              }
            }
            a = (rGt ? v > rVal : v < rVal) ? rAct : rOther;
          } else a = 0;
          if (sp.mot === 0 && a === 0) a = 1;
        } else if (kd === 2) a = food[cl] > P.haloMark ? 1 : 0;
        else if (kd === 1) a = 1;
        act[i] = a;
        var xi = x[i], yi = y[i], hi = h[i], seek = a === 0 && sp.mot !== 0;
        swim[i] = 0;
        if (!seek) {
          var sj = kd === 1 ? sdQ : sdB;
          xi += randn() * sj; yi += randn() * sj; hi += randn() * sdR;
        } else if (sp.mot === 3) {
          xi += randn() * sdV; yi += randn() * sdV; hi += randn() * sdR;
        } else if (sp.mot === 1) {
          xi += randn() * sdB; yi += randn() * sdB;
          aux[i] -= dt;
          if (ph[i] === 0) {
            hi += randn() * sdR;
            if (aux[i] <= 0) {
              var cand = 0;
              if (sp.chemo) {
                var here = sampleFood(xi, yi);
                for (tr = 0; tr < 2; tr++) {
                  cand = rng() * TAU;
                  if (sampleFood(xi + Math.cos(cand) * P.piliTip, yi + Math.sin(cand) * P.piliTip) > here * 1.02) break;
                }
              } else cand = rng() * TAU;
              hi = cand; ph[i] = 1; aux[i] = P.piliTugMin + (P.piliTugMax - P.piliTugMin) * rng();
            }
          } else {
            xi += Math.cos(hi) * P.piliSpeed * dt; yi += Math.sin(hi) * P.piliSpeed * dt;
            if (aux[i] <= 0) { ph[i] = 0; aux[i] = -Math.log(rng() || 1e-12) * P.piliPause; }
          }
        } else {
          xi += randn() * sdB; yi += randn() * sdB;
          var rate = P.tumbleRate;
          if (sp.chemo) {
            var cur = sampleFood(xi, yi), r0 = ref[i], rel = (cur - r0) / (cur + r0 + P.chemoEps);
            ref[i] = r0 + (cur - r0) * dt / P.memTau;
            rate = P.tumbleRate * (1 - P.chemoGain * rel);
            if (rate < P.tumbleRate * 0.15) rate = P.tumbleRate * 0.15; else if (rate > P.tumbleRate * 2.5) rate = P.tumbleRate * 2.5;
          }
          if (rng() < rate * dt) {
            var turn = P.tumbleMean + P.tumbleSd * randn(); if (turn < 0.1) turn = 0.1; if (turn > 3.1) turn = 3.1;
            hi += rng() < 0.5 ? turn : -turn;
          } else {
            xi += Math.cos(hi) * P.swimSpeed * dt; yi += Math.sin(hi) * P.swimSpeed * dt;
            hi += randn() * Math.sqrt(2 * P.wobbleRot * dt); swim[i] = 1;
          }
        }
        var rr = xi * xi + yi * yi;
        if (rr > R * R) {
          var r = Math.sqrt(rr), th = Math.atan2(yi, xi), nr = 2 * R - r;
          if (nr < 0) nr = 0; if (nr > R - 0.01) nr = R - 0.01;
          xi = nr * Math.cos(th); yi = nr * Math.sin(th); hi = 2 * th + Math.PI - hi;
        }
        x[i] = xi; y[i] = yi; h[i] = hi;
        kk = cellOf(xi, yi); cell[i] = kk;
        var c = food[kk], d = P.vmax * dt * sp.upt * c / (c + P.K);
        dem[i] = d; demand[kk] += d;
      }
      // fair sharing inside each square, then energy, upkeep, death, division
      var divs = [], dead = 0;
      for (i = 0; i < n; i++) {
        kk = cell[i];
        var dm = demand[kk], sh = dm > food[kk] ? food[kk] / dm : 1, sp2 = SP[kind[i]], a2 = act[i];
        var up = sp2.up + (swim[i] ? sp2.swimUp : 0);
        if (a2 === 3) up *= 0.5;
        e[i] += dem[i] * sh * sp2.yld - up * dt;
        if (e[i] <= 0) { e[i] = -1; dead++; }
        else if (e[i] >= thr[i] && a2 !== 2 && a2 !== 3) divs.push(i);
      }
      for (kk = 0; kk < NN; kk++) { var dmk = demand[kk]; if (dmk > 0) { var f0 = food[kk]; food[kk] = dmk > f0 ? 0 : f0 - dmk; } }
      for (var q = 0; q < divs.length; q++) {
        var pa = divs[q];
        if (n >= P.CAP) continue;
        var ang = rng() * TAU, half = e[pa] / 2;
        e[pa] = half; thr[pa] = drawThr(kind[pa]);
        var ch = addInd(kind[pa], x[pa] + Math.cos(ang) * 1.5, y[pa] + Math.sin(ang) * 1.5, rng() * TAU, half);
        if (ch >= 0) {
          var bb = Math.sqrt(x[ch] * x[ch] + y[ch] * y[ch]); if (bb > R - 0.5) { x[ch] = x[pa]; y[ch] = y[pa]; x0[ch] = x[ch]; y0[ch] = y[ch]; }
          cell[ch] = cellOf(x[ch], y[ch]); nap[ch] = nap[pa]; napT[ch] = napT[pa];
        }
      }
      if (dead) {
        for (i = 0; i < n; i++) if (e[i] < 0 && kind[i] === 0) {
          dCause.starved++;
          deaths.push({ tick: tickNow + 1, id: id[i], kind: 0, x: x[i], y: y[i], cause: 'starved' });
        }
        compact();
      }
    }

    function compact() {
      var w = 0, nn = n;
      for (var i = 0; i < nn; i++) {
        if (e[i] < 0) continue;
        if (w !== i) {
          x[w] = x[i]; y[w] = y[i]; h[w] = h[i]; e[w] = e[i]; thr[w] = thr[i]; kind[w] = kind[i]; id[w] = id[i]; ph[w] = ph[i]; aux[w] = aux[i];
          ref[w] = ref[i]; swim[w] = swim[i]; cell[w] = cell[i]; dem[w] = dem[i]; act[w] = act[i]; x0[w] = x0[i]; y0[w] = y0[i]; mv[w] = mv[i];
          nap[w] = nap[i]; napT[w] = napT[i];
        }
        w++;
      }
      n = w;
    }

    function tickEnv() {
      diffuse();
      var kk, ii;
      if (uniform) { for (kk = 0; kk < NN; kk++) if (mask[kk]) food[kk] += uniAdd; }
      else {
        for (var q = live.length - 1; q >= 0; q--) {
          var L = live[q];
          if (tickNow >= L.dieAt) { L.rec.death = tickNow; live.splice(q, 1); bloom(tickNow); continue; }
          var idx = L.idx, wt = L.wt, amt = bo.leak;
          for (ii = 0; ii < idx.length; ii++) food[idx[ii]] += amt * wt[ii];
        }
      }
    }

    function doTick(scored) {
      var i, kk;
      for (i = 0; i < n; i++) { x0[i] = x[i]; y0[i] = y[i]; }
      tickEnv();
      for (var s = 0; s < SUB; s++) substep();
      tickNow++;
      if (!scored) return;
      var t = tickNow, nS = 0, nN = 0, mS = 0, mN = 0, mm = P.moveMin * P.moveMin;
      for (i = 0; i < n; i++) {
        var dx = x[i] - x0[i], dy = y[i] - y0[i], mvg = dx * dx + dy * dy > mm ? 1 : 0;
        mv[i] = mvg;
        if (kind[i] === 0) { nS++; mS += mvg; } else { nN++; mN += mvg; }
      }
      var fs = nS ? mS / nS : 0, fn = nN ? mN / nN : 0, share = nS + nN ? nS / (nS + nN) : 0;
      // suspicion channels
      var raw = [0, 0, 0];
      if (nS > 0 && t >= band.warm) {
        raw[0] = share > band.hi ? P.gGain * (share - band.hi) / band.hi : 0;
        raw[1] = Math.max(0, regRaw - P.regDead) * P.regGain;
        if (!emaInit) { emaS = fs; emaN = fn; emaInit = true; }
        else { emaS += (fs - emaS) * P.motionAlpha; emaN += (fn - emaN) * P.motionAlpha; }
        raw[2] = Math.max(0, Math.abs(emaS - emaN) - P.motionTol) * P.motionGain;
      }
      if (!chOn[0]) raw[0] = 0; if (!chOn[1]) raw[1] = 0; if (!chOn[2]) raw[2] = 0;   // channel switches (dish.agents.channels)
      var tot = 0, lv = [0, 0, 0];
      for (var c = 0; c < 3; c++) {
        fast[c] = fast[c] * P.fastKeep + (1 - P.fastKeep) * raw[c];
        slow[c] = slow[c] * P.slowKeep + P.slowGain * raw[c];
        lv[c] = (fast[c] + slow[c]) * P.weight[c]; tot += lv[c];
        if (lv[c] > peakCh[c]) peakCh[c] = lv[c];
      }
      S = tot;
      stage = S >= P.stage[2] ? 3 : S >= P.stage[1] ? 2 : S >= P.stage[0] ? 1 : 0;
      if (stage >= 1 && firstStage1 < 0) firstStage1 = t;
      if (exposedAt < 0) for (var c2 = 0; c2 < 3; c2++) contrib[c2] += lv[c2];
      var kill = 0;
      if (stage === 3) {
        if (exposedAt < 0) exposedAt = t;
        kill = P.kill;
        var removed = false;
        for (i = 0; i < n; i++) if (kind[i] === 0 && rng() < kill) {
          e[i] = -1; removed = true; dCause.guards++;
          deaths.push({ tick: t, id: id[i], kind: 0, x: x[i], y: y[i], cause: 'guards' });
        }
        if (removed) { compact(); nS = 0; for (i = 0; i < n; i++) if (kind[i] === 0) nS++; share = nS + nN ? nS / (nS + nN) : 0; }
      }
      var fsum = 0; for (kk = 0; kk < NN; kk++) fsum += food[kk];
      H.share[t] = share; H.scouts[t] = nS; H.natives[t] = nN; H.total[t] = S; H.food[t] = fsum / nMask;
      H.stage[t] = stage; H.kill[t] = kill; H.moveS[t] = fs; H.moveN[t] = fn;
      H.susp.growth[t] = lv[0]; H.susp.regularity[t] = lv[1]; H.susp.motion[t] = lv[2];
      if (record) snapshot(t);
    }

    function snapshot(t) {
      var fr = { n: n, id: new Uint32Array(n), x: new Uint16Array(n), y: new Uint16Array(n), h: new Uint8Array(n), k: new Uint8Array(n) };
      var sc = 65535 / (2 * R);
      for (var i = 0; i < n; i++) {
        fr.id[i] = id[i];
        fr.x[i] = Math.round((x[i] + R) * sc); fr.y[i] = Math.round((y[i] + R) * sc);
        var hh = h[i] % TAU; if (hh < 0) hh += TAU;
        fr.h[i] = Math.floor(hh / TAU * 256) & 255;
        fr.k[i] = (kind[i] ? kind[i] : 0) | (mv[i] ? 8 : 0) | (kind[i] === 0 && (act[i] === 2 || act[i] === 3) ? 16 : 0);
      }
      frames[t] = fr;
      if (t % 5 === 0) {
        var fu = new Uint8Array(NN);
        for (var kk = 0; kk < NN; kk++) { var q = Math.round(food[kk] * P.foodScale); fu[kk] = q > 255 ? 255 : q; }
        foods[t / 5] = fu;
      }
    }

    // pre-roll: natives alone, then the scouts arrive
    for (i = 0; i < P.preroll; i++) doTick(false);
    tickNow = 0;
    var ncount = 0;
    var sx = 0, sy = 0; // centre of the scout cluster
    (function () {
      // the cluster lands in the barest of a few seeded candidate spots (food within reach of the cluster)
      var best = 1e18;
      for (var cd = 0; cd < (uniform ? 1 : P.landTries); cd++) {   // uniform food has no bare ground to pick

        var ang = rng() * TAU, rd = R * (P.landMin + (P.landMax - P.landMin) * rng()), cx = rd * Math.cos(ang), cy = rd * Math.sin(ang), sum = 0;
        for (var q = 0; q < NN; q++) {
          if (!mask[q]) continue;
          var dx = ((q % N) + 0.5) * W - R - cx, dy = (Math.floor(q / N) + 0.5) * W - R - cy;
          if (dx * dx + dy * dy < P.landReach * P.landReach) sum += food[q];
        }
        if (sum < best) { best = sum; sx = cx; sy = cy; }
      }
    })();
    var nStart = A.start == null ? 16 : A.start;
    for (i = 0; i < nStart; i++) {
      var rad = P.startRadius * Math.sqrt(rng()), an = rng() * TAU, px = sx + rad * Math.cos(an), py = sy + rad * Math.sin(an);
      var rl = Math.sqrt(px * px + py * py); if (rl > R * 0.98) { px *= R * 0.98 / rl; py *= R * 0.98 / rl; }
      addInd(0, px, py, rng() * TAU, P.scoutE0lo + (P.scoutE0hi - P.scoutE0lo) * rng());
    }
    // tick 0 record
    (function () {
      var nS = 0, nN = 0, fsum = 0, kk;
      for (var q = 0; q < n; q++) { if (kind[q] === 0) nS++; else nN++; }
      for (kk = 0; kk < NN; kk++) fsum += food[kk];
      H.share[0] = nS + nN ? nS / (nS + nN) : 0; H.scouts[0] = nS; H.natives[0] = nN; H.food[0] = fsum / nMask;
      if (record) snapshot(0);
    })();
    // boulder clocks: the pre-roll ran from tick -preroll, so absolute ticks line up with tickNow = 0 here
    for (i = 0; i < T; i++) doTick(true);

    var run = { dish: dish, build: b, T: T, seed: seed, H: H, frames: frames, foods: foods, boulders: boulders, deaths: deaths, v: null, autopsy: null, P: P, contrib: contrib, peakCh: peakCh, dCause: dCause, band: band, uniform: uniform };
    run.v = verdict(run, exposedAt, firstStage1);
    run.autopsy = run.v.win ? null : autopsy(run, exposedAt, firstStage1);
    return run;
  }

  function verdict(run, exposedAt, firstStage1) {
    var H = run.H, T = run.T, band = run.band, t, inBand = 0, cnt = 0, maxStage = 0;
    for (t = band.warm; t <= T; t++) { cnt++; if (H.share[t] >= band.lo && H.share[t] <= band.hi) inBand++; }
    for (t = 1; t <= T; t++) if (H.stage[t] > maxStage) maxStage = H.stage[t];
    var alive = H.scouts[T] > 0 && H.natives[T] > 0, frac = cnt ? inBand / cnt : 0;
    return { win: alive && frac >= band.need && maxStage < 3, alive: alive, bandFrac: frac, maxStage: maxStage, finalShare: H.share[T], exposedAt: exposedAt, firstStage1: firstStage1 };
  }

  function pct(v) { return Math.round(v * 100) + '%'; }

  function autopsy(run, exposedAt, firstStage1) {
    var H = run.H, T = run.T, band = run.band, t, i;
    if (exposedAt >= 0) {
      var c = run.contrib, ch = c[2] >= c[1] && c[2] >= c[0] ? 2 : c[0] >= c[1] ? 0 : 1, name = ['growth', 'regularity', 'motion'][ch], text;
      var mS = 0, mN = 0, nn = 0;
      for (t = Math.max(1, exposedAt - 20); t <= exposedAt; t++) { mS += H.moveS[t]; mN += H.moveN[t]; nn++; }
      mS /= nn; mN /= nn;
      if (ch === 2) text = 'The guards noticed how the colony moved: about ' + pct(mS) + ' of your cells were moving, against ' + pct(mN) + ' of the natives, and they responded at tick ' + exposedAt + '.';
      else if (ch === 0) text = 'The colony grew too fast: its share reached ' + pct(H.share[exposedAt]) + ' of all cells (the line is ' + pct(band.hi) + ') and the guards responded at tick ' + exposedAt + '.';
      else text = 'The colony divided too much like clockwork, and the guards responded at tick ' + exposedAt + '.';
      return { cause: 'exposed:' + name, from: firstStage1 >= 0 ? firstStage1 : exposedAt, to: exposedAt, text: text };
    }
    var extinctAt = -1, above = 0, below = 0, firstOut = -1, lastOut = -1;
    for (t = 1; t <= T; t++) if (H.scouts[t] === 0) { extinctAt = t; break; }
    for (t = band.warm; t <= T; t++) {
      var s = H.share[t];
      if (s > band.hi) above++; else if (s < band.lo) below++; else continue;
      if (firstOut < 0) firstOut = t; lastOut = t;
    }
    var finalBelow = H.share[T] < band.lo, mostStarved = run.dCause.starved > run.dCause.guards;
    var fromOut = firstOut < 0 ? band.warm : firstOut;
    if (extinctAt >= 0 || (finalBelow && mostStarved)) {
      // the trouble starts when the share first falls under the floor and stays there
      var from = band.warm;
      for (t = T; t >= band.warm; t--) if (H.share[t] >= band.lo) { from = t; break; }
      if (extinctAt >= 0) return { cause: 'starved', from: from, to: extinctAt, text: 'Every scout starved by tick ' + extinctAt + '; the food was out of reach of cells that could not get to it.' };
      return { cause: 'starved', from: from, to: T, text: 'Your scouts ran out of reserve: ' + run.dCause.starved + ' starved and the share sank to ' + pct(H.share[T]) + ' (the floor is ' + pct(band.lo) + ').' };
    }
    if (above > below) return { cause: 'overgrew', from: fromOut, to: lastOut, text: 'The colony grew past the band: its share was above ' + pct(band.hi) + ' for ' + above + ' ticks and ended at ' + pct(H.share[T]) + '.' };
    if (below > 0) return { cause: 'below', from: fromOut, to: lastOut, text: 'The colony stayed too small: its share was under ' + pct(band.lo) + ' for ' + below + ' ticks and ended at ' + pct(H.share[T]) + '.' };
    return { cause: 'band', from: band.warm, to: T, text: 'The share spent only ' + pct(run.v.bandFrac) + ' of the time inside the band; it needed ' + pct(band.need) + '.' };
  }

  // Heading and position of the i-th individual of frame t, in micrometres and radians.
  function unpack(run, t, i) {
    var fr = run.frames[t], R = run.P.R, kb = fr.k[i];
    return {
      id: fr.id[i], x: fr.x[i] / 65535 * 2 * R - R, y: fr.y[i] / 65535 * 2 * R - R,
      heading: fr.h[i] / 256 * TAU, kind: kb & 7, moving: (kb & 8) !== 0, resting: (kb & 16) !== 0
    };
  }

  function summary(run) {
    var H = run.H, T = run.T, band = run.band, t, cnt = 0, inb = 0, mn = 1, mx = 0, peakStage = 0, mS = 0, mN = 0, nm = 0;
    for (t = band.warm; t <= T; t++) { cnt++; var s = H.share[t]; if (s >= band.lo && s <= band.hi) inb++; if (s < mn) mn = s; if (s > mx) mx = s; }
    var nmS = 0;
    for (t = 1; t <= T; t++) { if (H.stage[t] > peakStage) peakStage = H.stage[t]; mN += H.moveN[t]; nm++; if (H.scouts[t] > 0) { mS += H.moveS[t]; nmS++; } }
    var ch = run.contrib, tot = ch[0] + ch[1] + ch[2] || 1;
    return {
      inBand: cnt ? inb / cnt : 0, minShare: mn, maxShare: mx, finalShare: H.share[T], peakStage: peakStage,
      peak: { growth: run.peakCh[0], regularity: run.peakCh[1], motion: run.peakCh[2] },
      share: { growth: ch[0] / tot, regularity: ch[1] / tot, motion: ch[2] / tot },
      deaths: { starved: run.dCause.starved, guards: run.dCause.guards },
      moveScouts: nmS ? mS / nmS : 0, moveNatives: mN / nm
    };
  }

  var api = { P3: P3, play: play, unpack: unpack, summary: summary, defaults: defaults, FOOD_SCALE: P3.foodScale };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.LookAliveSim3 = api;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));

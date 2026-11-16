// Look Alive rules spike. A field-level, deterministic sim: no DOM, no Date, no Math.random.
// State: per cell, native count N, robot count R, food F, two waste chemicals WA and WB. One call to step() is one tick.
// Plain script: works from file:// (global LookAlive) and in Node (module.exports).
var LookAlive = (function () {
  'use strict';

  var CHAN = ['growth', 'waste', 'casualties', 'regularity'];
  var baseCache = {};

  function rngNext(s) {  // mulberry32, state kept in s.rng
    s.rng = (s.rng + 0x6D2B79F5) | 0;
    var t = Math.imul(s.rng ^ (s.rng >>> 15), 1 | s.rng);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  // Unit-variance bounded noise: sum of three uniforms.
  function noise(s) { return (rngNext(s) + rngNext(s) + rngNext(s) - 1.5) * 2; }

  // Static food capacity: smooth patches, mean about 1, independent of grid size.
  function makeCap(n) {
    var cap = new Float32Array(n * n), x, y;
    for (y = 0; y < n; y++) for (x = 0; x < n; x++) {
      var u = x / n, v = y / n;
      cap[y * n + x] = 1 + 0.30 * Math.sin(6.2832 * (2 * u + 0.15)) * Math.cos(6.2832 * (v + 0.3)) + 0.12 * Math.sin(6.2832 * (3 * v + u));
    }
    return cap;
  }

  function diffuse(src, dst, d, n) {
    var x, y, i, up, dn, l, r, c;
    for (y = 0; y < n; y++) {
      up = ((y + n - 1) % n) * n; dn = ((y + 1) % n) * n;
      for (x = 0; x < n; x++) {
        l = (x + n - 1) % n; r = (x + 1) % n; i = y * n + x; c = src[i];
        dst[i] = c + d * ((src[up + x] + src[dn + x] + src[y * n + l] + src[y * n + r]) * 0.25 - c);
      }
    }
  }

  function eventLevel(D, tick) {  // 0 before the shift, ramps to 1 over 10 ticks
    if (D.event.tick < 0 || tick < D.event.tick) return 0;
    var k = (tick - D.event.tick) / 10;
    return k >= 1 ? 1 : k;
  }

  function robotParams(P, b) {
    var R = P.robot, d = b.div | 0, t = b.tough | 0, e = b.eff | 0, j = b.jit | 0, w = b.waste | 0;
    return {
      rate: P.native.rate * (R.rateBase + R.ratePerDiv * d) * (1 - R.toughSlow * t) * (1 + R.effBirth * e) * (1 - R.jitCost * j) * (1 - R.wasteCost * w),
      death: R.death * (1 - R.toughDeath * t),
      sigma: R.jitBase + R.jitSigma * j,
      wasteMult: 1 - R.effWaste * e,
      mix: R.mixStart + (P.native.mixA - R.mixStart) * w / R.wasteSteps,
      killRed: 1 / (1 + P.suspicion.killTough * t)
    };
  }

  // The settled native-only dish, computed once per grid size and then copied.
  function baseState(P, n) {
    var key = n + ':' + P.settle;
    if (baseCache[key]) return baseCache[key];
    var D = { event: { tick: -1, announce: -1, rMult: 0, aMult: 0 } };
    var s = create(P, D, { div: 0, tough: 0, eff: 0, jit: 0, waste: 0, rules: [] }, { n: n, noBase: true, history: false });
    var i, nn = n * n;
    for (i = 0; i < nn; i++) { s.N[i] = 0.9 * s.cap[i]; s.R[i] = 0; s.F[i] = 0.35 * s.cap[i]; }
    s.settling = true;
    for (i = 0; i < P.settle; i++) step(s);
    var sum = 0;
    for (i = 0; i < nn; i++) sum += s.N[i];
    baseCache[key] = { N: s.N, F: s.F, WA: s.WA, WB: s.WB, mean: sum / nn };
    return baseCache[key];
  }

  // build: { div, tough, eff, jit, waste, rules: [{ sensor, cmp, value, action }] }
  // opts: { n: grid size (64), seed, history: true, snapEvery: 0 (take a snapshot every N ticks) }
  function create(P, D, build, opts) {
    opts = opts || {};
    var n = opts.n || 64, nn = n * n, T = P.ticks;
    var s = {
      P: P, D: D, build: build, n: n, tick: 0, rng: (opts.seed || 12345) | 0,
      rb: robotParams(P, build), rules: (build.rules || []).slice(0, D.slots == null ? 8 : D.slots),
      cap: makeCap(n),
      N: new Float32Array(nn), R: new Float32Array(nn), F: new Float32Array(nn), WA: new Float32Array(nn), WB: new Float32Array(nn),
      tN: new Float32Array(nn), tR: new Float32Array(nn), tF: new Float32Array(nn), tA: new Float32Array(nn), tB: new Float32Array(nn),
      flags: new Uint8Array(nn),
      fast: [0, 0, 0, 0], slow: [0, 0, 0, 0], raw: [0, 0, 0, 0], lvl: [0, 0, 0, 0],
      S: 0, stage: 0, emaBR: 0, emaBN: 0, emaCas: 0, ring: new Float32Array(P.suspicion.window), ringPos: 0, ringN: 0,
      killNow: 0, N0: 1, settling: false, snaps: [], snapEvery: opts.snapEvery || 0, recordHistory: opts.history !== false,
      killTotal: 0, fired: new Float64Array(8)
    };
    if (!opts.noBase) {
      var base = baseState(P, n), i;
      s.N0 = base.mean;
      for (i = 0; i < nn; i++) {
        s.N[i] = base.N[i]; s.F[i] = base.F[i]; s.WA[i] = base.WA[i]; s.WB[i] = base.WB[i];
        s.R[i] = P.startShare / (1 - P.startShare) * base.N[i];
      }
    }
    if (s.recordHistory) {
      var H = s.hist = {
        share: new Float32Array(T + 1), nat: new Float32Array(T + 1), rob: new Float32Array(T + 1), food: new Float32Array(T + 1),
        raw: [], lvl: [], S: new Float32Array(T + 1), stage: new Uint8Array(T + 1), kill: new Float32Array(T + 1),
        casualties: new Float32Array(T + 1), births: new Float32Array(T + 1), rate: new Float32Array(T + 1), eR: new Float32Array(T + 1), eN: new Float32Array(T + 1), fires: []
      };
      for (var k = 0; k < 4; k++) { H.raw.push(new Float32Array(T + 1)); H.lvl.push(new Float32Array(T + 1)); }
      for (k = 0; k < 8; k++) H.fires.push(new Uint32Array(T + 1));
      if (!opts.noBase) record(s);
    }
    return s;
  }

  function sensorValue(s, id, i, phase) {
    switch (id) {
      case 'density': return s.R[i] / s.N0;
      case 'share': { var tot = s.N[i] + s.R[i]; return tot > 1e-9 ? s.R[i] / tot : 0; }
      case 'food': return s.F[i];
      case 'native': return s.N[i] / s.N0;
      case 'susp_growth': return s.lvl[0];
      case 'susp_waste': return s.lvl[1];
      case 'susp_casualties': return s.lvl[2];
      case 'susp_regularity': return s.lvl[3];
      case 'phase': return phase;
    }
    return 0;
  }
  var FLAG = { pause: 1, fast: 2, waste: 4, jitter: 8, toward: 16, away: 32 };

  function step(s) {
    var P = s.P, D = s.D, n = s.n, nn = n * n, N = s.N, R = s.R, F = s.F, WA = s.WA, WB = s.WB, cap = s.cap;
    var Pn = P.native, Pr = P.robot, Ps = P.suspicion, rb = s.rb, flags = s.flags;
    var ev = s.settling ? 0 : eventLevel(D, s.tick);
    var rateN = Pn.rate * (1 + D.event.rMult * ev);
    var cross = P.cross * (1 + D.event.aMult * ev);
    var sigN = s.settling ? 0 : Pn.sigma, zN = s.settling ? 0 : noise(s), zR = s.settling ? 0 : noise(s);
    var phase = D.event.tick < 0 ? 0 : s.tick >= D.event.tick ? 2 : s.tick >= D.event.announce ? 1 : 0;
    var rules = s.rules, nr = rules.length, i, k, jfrac = 0, anyMove = false;

    // ---- pass 1: reflex rules, per cell ----
    var fires = nr ? [0, 0, 0, 0, 0, 0, 0, 0] : null;
    if (nr) {
      var jw = 0, rw = 0;
      for (i = 0; i < nn; i++) {
        var f = 0;
        for (k = 0; k < nr; k++) {
          var rule = rules[k], v = sensorValue(s, rule.sensor, i, phase);
          if (rule.cmp === '<' ? v < rule.value : v > rule.value) { f |= FLAG[rule.action]; fires[k]++; }
        }
        flags[i] = f;
        if (f & 8) jw += R[i];
        rw += R[i];
        if (f & 48) anyMove = true;
      }
      jfrac = rw > 0 ? jw / rw : 0;
    }
    // Robot timing noise: base sloppiness plus rule jitter. The noise is one colony-wide pulse per tick.
    var sigR = rb.sigma + 0.02 * jfrac;
    var mulN = 1 + sigN * zN, mulR = 1 + sigR * zR * (s.settling ? 0 : 1);

    // ---- pass 2: growth, competition for food, deaths, waste ----
    var killR = 0;
    if (!s.settling) {
      var x = (s.S - Ps.stage[0]) / (Ps.stage[2] - Ps.stage[0]);
      x = x < 0 ? 0 : x > 1.3 ? 1.3 : x;
      killR = Ps.kill * x * x * x * rb.killRed;
    }
    s.killNow = killR;
    var sumN = 0, sumR = 0, sumF = 0, bN = 0, bR = 0, cas = 0, wdev = 0, killed = 0, i2;
    var mixN = Pn.mixA, Kh = P.foodHalf, fpb = P.foodPerBirth;
    for (i = 0; i < nn; i++) {
      var nv = N[i], rv = R[i], fv = F[i];
      var phi = fv / (fv + Kh), fl = nr ? flags[i] : 0;
      var births_n = rateN * phi * nv * mulN;
      var rm = rb.rate * mulR;
      if (fl & 1) rm = 0; else if (fl & 2) rm *= Pr.fastMult;
      if (fl & 4) rm *= 1 - Pr.matchCost;
      if (fl & 8) rm *= 1 - Pr.jitCost;
      var births_r = rm * phi * rv;
      var upN = births_n * fpb, upR = births_r * fpb, tot = upN + upR;
      var sc = tot > fv ? fv / (tot + 1e-12) : 1;
      births_n *= sc; births_r *= sc; upN *= sc; upR *= sc;
      var casCell = nv * Pn.crowd * cross * rv;
      var deathN = nv * (Pn.death + Pn.crowd * nv) + casCell;
      var deathR = rv * (rb.death + Pr.crowd * (rv + Pr.cross * (1 + D.event.aMult * ev) * nv));
      var killCell = rv * killR;
      var nN = nv + births_n - deathN; if (nN < 0) nN = 0;
      var nR = rv + births_r - deathR - killCell; if (nR < 0) nR = 0;
      var nF = fv - upN - upR + P.regrow * (cap[i] - fv); if (nF < 0) nF = 0;
      // waste: both species emit in proportion to the food they use; robots may switch the mix per cell
      var mR = (fl & 4) ? mixN : rb.mix;
      var eN = upN, eR = upR * rb.wasteMult;
      var a = WA[i], bb = WB[i], wt = a + bb;
      if (rv > 0 && wt > 1e-9) wdev += rv * Math.abs(a / wt - mixN);
      WA[i] = a * (1 - P.wasteDecay) + eN * mixN + eR * mR;
      WB[i] = bb * (1 - P.wasteDecay) + eN * (1 - mixN) + eR * (1 - mR);
      N[i] = nN; R[i] = nR; F[i] = nF;
      sumN += nv; sumR += rv; sumF += fv; bN += births_n; bR += births_r; cas += casCell; killed += killCell;
    }
    s.killTotal += killed;

    // ---- movement rules (toward or away from food) ----
    if (anyMove) {
      var tR = s.tR, nb = [0, 0, 0, 0];
      for (i = 0; i < nn; i++) tR[i] = 0;
      for (i = 0; i < nn; i++) {
        var f2 = flags[i];
        if (!(f2 & 48) || R[i] <= 0) continue;
        var xx = i % n, yy = (i - xx) / n;
        nb[0] = ((yy + n - 1) % n) * n + xx; nb[1] = ((yy + 1) % n) * n + xx; nb[2] = yy * n + (xx + n - 1) % n; nb[3] = yy * n + (xx + 1) % n;
        var best = nb[0], want = f2 & 16;
        for (k = 1; k < 4; k++) if (want ? F[nb[k]] > F[best] : F[nb[k]] < F[best]) best = nb[k];
        var mv = R[i] * Pr.awayMove;
        tR[i] -= mv; tR[best] += mv;
      }
      for (i = 0; i < nn; i++) { R[i] += tR[i]; if (R[i] < 0) R[i] = 0; }
    }

    // ---- diffusion (periodic edges) ----
    var tmp;
    diffuse(N, s.tN, P.popDiffuse, n); tmp = s.N; s.N = s.tN; s.tN = tmp;
    diffuse(R, s.tR, P.popDiffuse, n); tmp = s.R; s.R = s.tR; s.tR = tmp;
    diffuse(F, s.tF, P.foodDiffuse, n); tmp = s.F; s.F = s.tF; s.tF = tmp;
    diffuse(WA, s.tA, P.wasteDiffuse, n); tmp = s.WA; s.WA = s.tA; s.tA = tmp;
    diffuse(WB, s.tB, P.wasteDiffuse, n); tmp = s.WB; s.WB = s.tB; s.tB = tmp;
    s.tick++;
    if (s.settling) return;

    // ---- suspicion: raw channels, then memory and decay ----
    var al = 0.25, rateRobot = sumR > 1e-6 ? bR / sumR : 0, rateNat = sumN > 1e-6 ? bN / sumN : 0;
    if (s.tick === 1) { s.emaBR = rateRobot; s.emaBN = rateNat; }
    s.emaBR += al * (rateRobot - s.emaBR); s.emaBN += al * (rateNat - s.emaBN);
    s.emaCas += al * ((sumN > 1e-6 ? cas / sumN : 0) - s.emaCas);
    var present = sumR / nn > P.extinct;
    var raw = s.raw;
    raw[0] = present && s.emaBN > 1e-9 ? Math.abs(Math.log((s.emaBR + 1e-9) / s.emaBN)) / Ps.growthScale : 0;
    raw[1] = present ? (wdev / sumR) / Ps.wasteScale : 0;
    raw[2] = s.emaCas / Ps.casualtyScale;
    // regularity: RMS of the robot colony's recent timing noise, against the native normal
    s.ring[s.ringPos] = sigR * zR; s.ringPos = (s.ringPos + 1) % s.ring.length; if (s.ringN < s.ring.length) s.ringN++;
    var ss = 0; for (k = 0; k < s.ringN; k++) ss += s.ring[k] * s.ring[k];
    var rms = Math.sqrt(ss / s.ringN);
    raw[3] = present ? Ps.regularityGain * Math.max(0, 1 - rms / Pn.sigma) : 0;
    var S = 0;
    for (k = 0; k < 4; k++) {
      var ex = raw[k] - Ps.deadzone[k]; if (ex < 0) ex = 0;
      s.fast[k] = s.fast[k] * Ps.fastKeep + (1 - Ps.fastKeep) * ex;
      s.slow[k] = s.slow[k] * Ps.slowKeep + Ps.slowGain * ex;
      s.lvl[k] = s.fast[k] + s.slow[k];
      S += Ps.weight[k] * s.lvl[k];
    }
    s.S = S;
    s.stage = S >= Ps.stage[2] ? 3 : S >= Ps.stage[1] ? 2 : S >= Ps.stage[0] ? 1 : 0;
    s.sums = { N: sumN, R: sumR, F: sumF, births: bR, cas: cas, rate: rateRobot };
    if (fires) for (k = 0; k < nr; k++) s.fired[k] += fires[k];
    if (s.recordHistory) record(s, fires);
    if (s.snapEvery && s.tick % s.snapEvery === 0) s.snaps.push(snapshot(s));
  }

  function record(s, fires) {
    var H = s.hist, t = s.tick, nn = s.n * s.n, k;
    var sn = 0, sr = 0, sf = 0;
    for (var i = 0; i < nn; i++) { sn += s.N[i]; sr += s.R[i]; sf += s.F[i]; }
    H.nat[t] = sn / nn; H.rob[t] = sr / nn; H.food[t] = sf / nn;
    H.share[t] = sn + sr > 0 ? sr / (sn + sr) : 0;
    for (k = 0; k < 4; k++) { H.raw[k][t] = s.raw[k]; H.lvl[k][t] = s.lvl[k]; }
    H.S[t] = s.S; H.stage[t] = s.stage; H.kill[t] = s.killNow;
    if (s.sums) { H.casualties[t] = s.sums.cas / nn; H.births[t] = s.sums.births / nn; H.rate[t] = s.sums.rate; H.eR[t] = s.emaBR; H.eN[t] = s.emaBN; }
    if (fires) for (k = 0; k < fires.length; k++) H.fires[k][t] = fires[k];
  }

  // ---- snapshots: a copy of every typed array and scalar, enough to resume with identical results ----
  var ARR = ['N', 'R', 'F', 'WA', 'WB'];
  function snapshot(s) {
    var o = { tick: s.tick, rng: s.rng, S: s.S, stage: s.stage, emaBR: s.emaBR, emaBN: s.emaBN, emaCas: s.emaCas, ringPos: s.ringPos, ringN: s.ringN,
      killNow: s.killNow, killTotal: s.killTotal, fast: s.fast.slice(), slow: s.slow.slice(), raw: s.raw.slice(), lvl: s.lvl.slice(),
      ring: new Float32Array(s.ring), fired: new Float64Array(s.fired), sums: s.sums ? JSON.parse(JSON.stringify(s.sums)) : null };
    for (var k = 0; k < ARR.length; k++) o[ARR[k]] = new Float32Array(s[ARR[k]]);
    if (s.hist) {
      var H = s.hist, h = o.hist = { raw: [], lvl: [], fires: [] }, e = s.tick + 1;
      ['share', 'nat', 'rob', 'food', 'S', 'stage', 'kill', 'casualties', 'births', 'rate', 'eR', 'eN'].forEach(function (f) { h[f] = H[f].slice(0, e); });
      for (k = 0; k < 4; k++) { h.raw.push(H.raw[k].slice(0, e)); h.lvl.push(H.lvl[k].slice(0, e)); }
      for (k = 0; k < 8; k++) h.fires.push(H.fires[k].slice(0, e));
    }
    return o;
  }
  function resume(P, D, build, snap, opts) {
    opts = Object.assign({}, opts, { noBase: true });
    var s = create(P, D, build, opts), k;
    s.cap = makeCap(s.n);
    s.N0 = baseState(P, s.n).mean;
    for (k = 0; k < ARR.length; k++) s[ARR[k]].set(snap[ARR[k]]);
    ['tick', 'rng', 'S', 'stage', 'emaBR', 'emaBN', 'emaCas', 'ringPos', 'ringN', 'killNow', 'killTotal'].forEach(function (f) { s[f] = snap[f]; });
    s.fast = snap.fast.slice(); s.slow = snap.slow.slice(); s.raw = snap.raw.slice(); s.lvl = snap.lvl.slice();
    s.ring = new Float32Array(snap.ring); s.fired = new Float64Array(snap.fired); s.sums = snap.sums ? JSON.parse(JSON.stringify(snap.sums)) : null;
    if (snap.hist && s.hist) {
      var H = s.hist, h = snap.hist;
      ['share', 'nat', 'rob', 'food', 'S', 'stage', 'kill', 'casualties', 'births', 'rate', 'eR', 'eN'].forEach(function (f) { H[f].set(h[f]); });
      for (k = 0; k < 4; k++) { H.raw[k].set(h.raw[k]); H.lvl[k].set(h.lvl[k]); }
      for (k = 0; k < 8; k++) H.fires[k].set(h.fires[k]);
    }
    return s;
  }

  function run(s, toTick) {
    var T = toTick == null ? s.P.ticks : toTick;
    while (s.tick < T) step(s);
    return s;
  }

  // ---- verdict: did this run win the dish, and if not, why ----
  function verdict(s) {
    var P = s.P, H = s.hist, T = s.tick, band = P.band, nn = s.n * s.n, k;
    var inBand = 0, cnt = 0, maxStage = 0, firstStage3 = -1;
    for (var t = band.warm; t <= T; t++) {
      cnt++;
      if (H.share[t] >= band.lo && H.share[t] <= band.hi) inBand++;
    }
    for (t = 1; t <= T; t++) { if (H.stage[t] > maxStage) maxStage = H.stage[t]; if (H.stage[t] === 3 && firstStage3 < 0) firstStage3 = t; }
    var alive = H.rob[T] > P.extinct && H.nat[T] > P.extinct;
    var frac = cnt ? inBand / cnt : 0;
    var win = alive && frac >= band.need && maxStage < 3;
    var peakS = 0; for (t = 1; t <= T; t++) if (H.S[t] > peakS) peakS = H.S[t];
    return { win: win, alive: alive, bandFrac: frac, maxStage: maxStage, firstStage3: firstStage3, peakS: peakS, finalShare: H.share[T] };
  }

  function play(P, D, build, opts) {
    var s = create(P, D, build, opts);
    run(s);
    s.verdict = verdict(s);
    return s;
  }

  return { CHAN: CHAN, create: create, step: step, run: run, play: play, verdict: verdict, snapshot: snapshot, resume: resume, baseState: baseState, eventLevel: eventLevel };
})();
if (typeof module !== 'undefined') module.exports = LookAlive;

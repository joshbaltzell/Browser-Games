// Look Alive spike: stand-in world simulation. Not the real rules, but a realistic cost.
// Classic script. Works in the browser (window.LAField) and in Node (module.exports).
// Species 0..2 are natives, species 3 is the player's robot swarm.
(function (root) {
  'use strict';
  var NS = 4;
  var ROW = 8; // history row: 4 population shares + 4 suspicion channels

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function alloc(n2) {
    var p = [];
    for (var s = 0; s < NS; s++) p.push(new Float32Array(n2));
    return { p: p, food: new Float32Array(n2), c0: new Float32Array(n2), c1: new Float32Array(n2) };
  }

  // Smooth blobs: sum of a few gaussians, cheap and deterministic.
  function blobs(N, rnd, count, rMin, rMax, out, amp) {
    for (var b = 0; b < count; b++) {
      var cx = rnd() * N, cy = rnd() * N, r = (rMin + rnd() * (rMax - rMin)) * N, a = amp * (0.5 + rnd());
      var x0 = Math.max(0, Math.floor(cx - r * 3)), x1 = Math.min(N - 1, Math.ceil(cx + r * 3));
      var y0 = Math.max(0, Math.floor(cy - r * 3)), y1 = Math.min(N - 1, Math.ceil(cy + r * 3));
      var inv = 1 / (2 * r * r);
      for (var y = y0; y <= y1; y++) for (var x = x0; x <= x1; x++) {
        var dx = x - cx, dy = y - cy;
        out[y * N + x] += a * Math.exp(-(dx * dx + dy * dy) * inv);
      }
    }
  }

  function create(N, seed, opts) {
    opts = opts || {};
    var n2 = N * N, rnd = mulberry32(seed || 1);
    var f = {
      N: N, n2: n2, tick: 0, version: 0, K: 150,
      // per species: growth, mortality, diffusion
      R: [0.11, 0.105, 0.11, 0.115], M: [0.02, 0.018, 0.022, 0.02], D: [0.10, 0.12, 0.08, 0.10],
      cur: alloc(n2), nxt: alloc(n2), foodBase: new Float32Array(n2),
      hist: new Float32Array(ROW * 1024), histRows: 0,
      snaps: [], snapInterval: opts.snapInterval == null ? 10 : opts.snapInterval,
      record: opts.record !== false,
      snapMsLast: 0, snapMsTotal: 0, snapCount: 0, snapBytes: 0,
      prevTotals: new Float64Array(NS), stepMsLast: 0, stats: { means: new Float64Array(NS) }
    };
    var c = f.cur, s, i;
    // Food: broad noise, always some everywhere
    for (i = 0; i < n2; i++) f.foodBase[i] = 0.35;
    blobs(N, rnd, Math.max(6, N >> 4), 0.04, 0.12, f.foodBase, 0.5);
    for (i = 0; i < n2; i++) { if (f.foodBase[i] > 1) f.foodBase[i] = 1; c.food[i] = f.foodBase[i]; }
    // Natives in many blobs so most of the map is inhabited; the player starts small.
    for (s = 0; s < 3; s++) blobs(N, rnd, Math.max(8, N >> 3), 0.03, 0.10, c.p[s], 60);
    blobs(N, rnd, Math.max(6, N >> 4), 0.02, 0.05, c.p[3], 50);
    for (i = 0; i < n2; i++) {
      var tot = 0;
      for (s = 0; s < NS; s++) { c.p[s][i] = Math.min(c.p[s][i], f.K); tot += c.p[s][i]; }
      c.c0[i] = 0.05 * c.p[0][i] / f.K; c.c1[i] = 0.05 * c.p[1][i] / f.K;
    }
    f.step = step; f.snapshot = snapshot; f.restore = restore; f.discardAfter = discardAfter;
    f.computeBand = computeBand; f.totals = totals; f.snapMB = snapMB;
    f.recordHistory = recordHistory;
    f.recordHistory(0); // initial row
    return f;
  }

  function totals(f) {
    var t = new Float64Array(NS), p = f.cur.p;
    for (var s = 0; s < NS; s++) { var a = p[s], sum = 0; for (var i = 0, n = f.n2; i < n; i++) sum += a[i]; t[s] = sum; }
    return t;
  }

  // One tick: reaction (logistic growth limited by food, competition, toxins) + diffusion, in one pass.
  function step(rec) {
    var t0 = now();
    var f = this, N = f.N, cur = f.cur, nx = f.nxt, K = f.K, R = f.R, M = f.M, D = f.D;
    var p0 = cur.p[0], p1 = cur.p[1], p2 = cur.p[2], p3 = cur.p[3];
    var n0 = nx.p[0], n1 = nx.p[1], n2a = nx.p[2], n3 = nx.p[3];
    var food = cur.food, c0 = cur.c0, c1 = cur.c1, nfood = nx.food, nc0 = nx.c0, nc1 = nx.c1, fb = f.foodBase;
    var R0 = R[0], R1 = R[1], R2 = R[2], R3 = R[3], M0 = M[0], M1 = M[1], M2 = M[2], M3 = M[3];
    var D0 = D[0], D1 = D[1], D2 = D[2], D3 = D[3];
    var sum0 = 0, sum1 = 0, sum2 = 0, sum3 = 0, sq0 = 0, sq1 = 0, sq2 = 0, sq3 = 0;
    var pc3 = 0, pc3w = 0, pcN = 0, pcNw = 0;
    var invK = 1 / K;
    for (var y = 0; y < N; y++) {
      var ro = y * N, rU = (y > 0 ? y - 1 : y) * N, rD = (y < N - 1 ? y + 1 : y) * N;
      for (var x = 0; x < N; x++) {
        var i = ro + x, l = ro + (x > 0 ? x - 1 : x), r = ro + (x < N - 1 ? x + 1 : x), u = rU + x, d = rD + x;
        var a0 = p0[i], a1 = p1[i], a2 = p2[i], a3 = p3[i];
        var fo = food[i], ch0 = c0[i], ch1 = c1[i];
        var T = a0 + a1 + a2 + a3;
        var fl = fo / (fo + 0.2), kk = 0.6 * T, ik = 0.4;
        // growth (negative means overcrowding shrinks), competition (others count 0.6x), toxins, mortality
        var g0 = R0 * a0 * (1 - (ik * a0 + kk) * invK) * fl - M0 * a0 - 0.003 * ch1 * a0;
        var g1 = R1 * a1 * (1 - (ik * a1 + kk) * invK) * fl - M1 * a1;
        var g2 = R2 * a2 * (1 - (ik * a2 + kk) * invK) * fl - M2 * a2 - 0.003 * ch0 * a2;
        var g3 = R3 * a3 * (1 - (ik * a3 + kk) * invK) * fl - M3 * a3 - 0.002 * ch1 * a3;
        var gp = (g0 > 0 ? g0 : 0) + (g1 > 0 ? g1 : 0) + (g2 > 0 ? g2 : 0) + (g3 > 0 ? g3 : 0);
        var v0 = a0 + g0 + D0 * (p0[l] + p0[r] + p0[u] + p0[d] - 4 * a0);
        var v1 = a1 + g1 + D1 * (p1[l] + p1[r] + p1[u] + p1[d] - 4 * a1);
        var v2 = a2 + g2 + D2 * (p2[l] + p2[r] + p2[u] + p2[d] - 4 * a2);
        var v3 = a3 + g3 + D3 * (p3[l] + p3[r] + p3[u] + p3[d] - 4 * a3);
        if (v0 < 0) v0 = 0; if (v1 < 0) v1 = 0; if (v2 < 0) v2 = 0; if (v3 < 0) v3 = 0;
        n0[i] = v0; n1[i] = v1; n2a[i] = v2; n3[i] = v3;
        var nf = fo - 0.004 * gp + 0.02 * (fb[i] - fo) + 0.05 * (food[l] + food[r] + food[u] + food[d] - 4 * fo);
        nfood[i] = nf < 0 ? 0 : (nf > 1 ? 1 : nf);
        var e0 = ch0 * 0.95 + 0.002 * a0 + 0.2 * (c0[l] + c0[r] + c0[u] + c0[d] - 4 * ch0);
        var e1 = ch1 * 0.95 + 0.002 * a1 + 0.0006 * a3 + 0.2 * (c1[l] + c1[r] + c1[u] + c1[d] - 4 * ch1);
        nc0[i] = e0 < 0 ? 0 : e0; nc1[i] = e1 < 0 ? 0 : e1;
        sum0 += v0; sum1 += v1; sum2 += v2; sum3 += v3;
        sq0 += v0 * v0; sq1 += v1 * v1; sq2 += v2 * v2; sq3 += v3 * v3;
        pc3 += v3 * e1; pc3w += v3; var vn = v0 + v1 + v2; pcN += vn * e1; pcNw += vn;
      }
    }
    f.cur = nx; f.nxt = cur; f.tick++; f.version++;
    // history row: shares + 4 placeholder suspicion channels computed from the sums above
    if (rec !== false && f.record) {
      var tot = sum0 + sum1 + sum2 + sum3 || 1, n = f.n2, row = f.recordHistory(f.tick, true);
      var sums = [sum0, sum1, sum2, sum3], sqs = [sq0, sq1, sq2, sq3], cv = [0, 0, 0, 0], s;
      for (s = 0; s < NS; s++) { var m = sums[s] / n, vr = sqs[s] / n - m * m; cv[s] = m > 1e-6 ? Math.sqrt(vr > 0 ? vr : 0) / m : 0; }
      var cvN = (cv[0] + cv[1] + cv[2]) / 3 + 1e-6;
      var prev = f.prevTotals, gN = 0, g3p = 0;
      if (prev[3] > 0) g3p = sum3 / prev[3] - 1;
      var pn = prev[0] + prev[1] + prev[2]; if (pn > 0) gN = (sum0 + sum1 + sum2) / pn - 1;
      var avgC3 = pc3w > 1e-6 ? pc3 / pc3w : 0, avgCN = pcNw > 1e-6 ? pcN / pcNw : 0;
      for (s = 0; s < NS; s++) row[s] = sums[s] / tot;
      row[4] = clamp01(Math.abs(cv[3] - cvN) / (3 * cvN));                       // clumpiness mismatch
      row[5] = clamp01(Math.abs(avgC3 - avgCN) / (3 * avgCN + 1e-4));            // chemical signature mismatch
      row[6] = clamp01(Math.abs(g3p - gN) * 20);                             // growth-rate anomaly
      row[7] = clamp01(Math.abs(row[3] - (1 - row[3]) / 3) * 1.5);            // share anomaly
      prev[0] = sum0; prev[1] = sum1; prev[2] = sum2; prev[3] = sum3;
      if (f.snapInterval > 0 && f.tick % f.snapInterval === 0) f.snapshot();
    }
    f.stepMsLast = now() - t0;
    return f.stepMsLast;
  }

  function clamp01(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }
  function now() { return (typeof performance !== 'undefined' ? performance : { now: function () { return Date.now(); } }).now(); }

  // Returns the writable history row for this tick (allocating as needed), or fills row 0.
  function recordHistory(tick, grow) {
    var f = this;
    if (!grow) { // initial row from current totals
      var t = totals(f), sum = t[0] + t[1] + t[2] + t[3] || 1;
      for (var s = 0; s < NS; s++) f.hist[s] = t[s] / sum;
      f.prevTotals.set(t); f.histRows = 1; return f.hist;
    }
    var need = (tick + 1) * ROW;
    if (need > f.hist.length) { var nh = new Float32Array(Math.max(need, f.hist.length * 2)); nh.set(f.hist); f.hist = nh; }
    f.histRows = tick + 1;
    return f.hist.subarray(tick * ROW, tick * ROW + ROW);
  }

  function snapshot() {
    var t0 = now(), f = this, c = f.cur, s, copy = { tick: f.tick, p: [], prev: new Float64Array(f.prevTotals) };
    for (s = 0; s < NS; s++) copy.p.push(c.p[s].slice());
    copy.food = c.food.slice(); copy.c0 = c.c0.slice(); copy.c1 = c.c1.slice();
    copy.bytes = f.n2 * 4 * (NS + 3);
    f.snaps.push(copy);
    f.snapBytes += copy.bytes; f.snapCount++;
    f.snapMsLast = now() - t0; f.snapMsTotal += f.snapMsLast;
    return copy;
  }

  function restore(snap) {
    var f = this, c = f.cur, s;
    for (s = 0; s < NS; s++) c.p[s].set(snap.p[s]);
    c.food.set(snap.food); c.c0.set(snap.c0); c.c1.set(snap.c1);
    f.tick = snap.tick; f.prevTotals.set(snap.prev); f.histRows = snap.tick + 1; f.version++;
  }

  function discardAfter(tick) {
    var f = this;
    while (f.snaps.length && f.snaps[f.snaps.length - 1].tick > tick) f.snapBytes -= f.snaps.pop().bytes;
  }
  function snapMB() { return this.snapBytes / 1048576; }

  // "Normal range" of native density, and a per-cell flag where the player's density is outside it.
  // out: Uint8Array(n2). Returns {lo, hi}. Placeholder statistic: natives' combined density mean +/- 1.5 sd.
  function computeBand(out) {
    var f = this, p = f.cur.p, n2 = f.n2, i, cnt = 0, sum = 0, sq = 0;
    var p0 = p[0], p1 = p[1], p2 = p[2], p3 = p[3];
    for (i = 0; i < n2; i++) { var v = (p0[i] + p1[i] + p2[i]) / 3; if (v > 0.5) { cnt++; sum += v; sq += v * v; } }
    var m = cnt ? sum / cnt : 0, sd = cnt ? Math.sqrt(Math.max(0, sq / cnt - m * m)) : 0;
    var lo = Math.max(0.5, m - 1.5 * sd), hi = m + 1.5 * sd;
    for (i = 0; i < n2; i++) { var q = p3[i]; out[i] = (q > 0.5 && (q < lo || q > hi)) ? 255 : 0; }
    return { lo: lo, hi: hi };
  }

  var api = { create: create, NS: NS, ROW: ROW, mulberry32: mulberry32 };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.LAField = api;
})(typeof window !== 'undefined' ? window : globalThis);

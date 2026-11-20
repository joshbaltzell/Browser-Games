// Look Alive, habitat 3: draws a recorded individual-cell run (sim3.js) onto a 2D canvas.
// Plain script: sets window.LookAliveDraw3 in a browser and module.exports in Node. No dependencies, works from file://.
// Free of page code: the caller owns the canvas, the context transform, the clock and the UI.
//
//   frame(ctx, run, t, view, opts)      draw the dish at fractional tick t
//   pick(run, t, view, size, px, py)    the individual nearest a canvas point (within 10 px), or null
//   scaleBar(view, size)                { px, label } for a scale bar that fits the current zoom
//
// view = { cx, cy, zoom }: the dish radius is 1; zoom 1 fits the dish in the canvas; (cx, cy) is the centre of the view in dish units (-1..1).
// opts = { size (canvas px, logical), reduced, trails, highlightId }
// Kinds in the recording: 0 scout, 1 quad (Haloquadratum), 2 halo (Halobacterium), 3 sali (Salinibacter).
// Every cell has a shape cue as well as a colour: scouts are pink capsules, quad are small flat squares, halo are rods with a short tail when moving,
// sali are thinner curved rods. A scout with a flagellum gets a tail when moving, a scout with pili gets a tick across its front.
(function (root) {
  'use strict';
  var TAU = 6.283185307179586;
  var KIND_NAMES = ['scout', 'quad', 'halo', 'sali'];
  var COLORS = ['#ff5a9a', '#7d6bd8', '#a58bff', '#c8b4ff'];     // scout, quad, halo, sali
  var DIM = [1, 0.7, 0.42];                                       // moving, still, resting (flag 16)
  var CELL_UM = 2.5, WIDTH_UM = 1.0, MIN_LEN = 5, MIN_WID = 2.4;  // true size, and the smallest drawn size in px
  var BOULDER_R = 0.45, GROW = 4, FADE = 4;                       // boulder radius as a share of sigma; ticks to grow in and fade out

  // ---- scratch arrays for the interpolated individuals (grown on demand) ----
  var cap = 0, lx, ly, lh, lk, ls, la, lid, trX, trY;
  function ensure(n) {
    if (n <= cap) return;
    cap = Math.max(n + 64, cap * 2, 1024);
    lx = new Float32Array(cap); ly = new Float32Array(cap); lh = new Float32Array(cap);
    lk = new Uint8Array(cap); ls = new Uint8Array(cap); la = new Float32Array(cap); lid = new Uint32Array(cap);
    trX = new Float32Array(cap * 5); trY = new Float32Array(cap * 5);
  }
  var count = 0;

  function clampTick(run, t) {
    var T = run.frames.length - 1;
    return t < 0 ? 0 : t > T ? T : t;
  }

  // Interpolate between frames[floor(t)] and the next frame by matching ids (both sorted by id). Positions in micrometres.
  function layout(run, t) {
    t = clampTick(run, t);
    var T = run.frames.length - 1, i0 = Math.floor(t), i1 = i0 < T ? i0 + 1 : i0, f = t - i0;
    var A = run.frames[i0], B = run.frames[i1], R = run.P.R, sc = 2 * R / 65535;
    ensure(A.n + B.n);
    var a = 0, b = 0, c = 0, na = A.n, nb = B.n, idA = A.id, idB = B.id;
    while (a < na || b < nb) {
      var ia = a < na ? idA[a] : 4294967295, ib = b < nb ? idB[b] : 4294967295;
      var kb, x, y, hd, al = 1, id;
      if (ia === ib) {
        var xa = A.x[a] * sc - R, ya = A.y[a] * sc - R, xb = B.x[b] * sc - R, yb = B.y[b] * sc - R;
        var d = B.h[b] - A.h[a]; if (d > 128) d -= 256; else if (d < -128) d += 256;
        x = xa + (xb - xa) * f; y = ya + (yb - ya) * f; hd = (A.h[a] + d * f) * TAU / 256;
        kb = A.k[a]; id = ia; a++; b++;
      } else if (ia < ib) {          // present only in A: dies during this tick
        x = A.x[a] * sc - R; y = A.y[a] * sc - R; hd = A.h[a] * TAU / 256; kb = A.k[a]; id = ia; al = 1 - f; a++;
      } else {                       // present only in B: born during this tick
        x = B.x[b] * sc - R; y = B.y[b] * sc - R; hd = B.h[b] * TAU / 256; kb = B.k[b]; id = ib; al = f; b++;
      }
      lx[c] = x; ly[c] = y; lh[c] = hd; lk[c] = kb & 7; la[c] = al; lid[c] = id;
      ls[c] = (kb & 16) ? 2 : (kb & 8) ? 0 : 1;
      c++;
    }
    count = c;
    return c;
  }

  function geom(view, size) {
    var ppu = size * 0.5 * 0.96 * view.zoom;          // pixels per dish radius
    return { ppu: ppu, k: ppu / 250, mx: size * 0.5 - view.cx * ppu, my: size * 0.5 - view.cy * ppu };
  }

  // ---- shapes, appended to the current path ----
  function capsule(g, ax, ay, hd, len, k) {
    var c = Math.cos(hd) * len * 0.5, s = Math.sin(hd) * len * 0.5;
    g.moveTo(ax - c, ay - s); g.lineTo(ax + c, ay + s);
  }
  function curved(g, ax, ay, hd, len) {
    var c = Math.cos(hd) * len * 0.5, s = Math.sin(hd) * len * 0.5, bend = len * 0.28;
    g.moveTo(ax - c, ay - s); g.quadraticCurveTo(ax - Math.sin(hd) * bend * 2, ay + Math.cos(hd) * bend * 2, ax + c, ay + s);
  }
  function square(g, ax, ay, hd, side) {
    var c = Math.cos(hd) * side * 0.5, s = Math.sin(hd) * side * 0.5;
    g.moveTo(ax - c + s, ay - s - c); g.lineTo(ax + c + s, ay + s - c); g.lineTo(ax + c - s, ay + s + c); g.lineTo(ax - c - s, ay - s + c); g.closePath();
  }
  function tail(g, ax, ay, hd, len, tailLen, phase, amp) {
    var c = Math.cos(hd), s = Math.sin(hd), ox = ax - c * len * 0.5, oy = ay - s * len * 0.5, w = Math.sin(phase) * tailLen * amp;
    g.moveTo(ox, oy);
    g.quadraticCurveTo(ox - c * tailLen * 0.5 - s * w, oy - s * tailLen * 0.5 + c * w, ox - c * tailLen, oy - s * tailLen);
  }
  function tick(g, ax, ay, hd, len) {
    var c = Math.cos(hd), s = Math.sin(hd), tx = ax + c * len * 0.75, ty = ay + s * len * 0.75, q = len * 0.45;
    g.moveTo(tx - s * q, ty + c * q); g.lineTo(tx + s * q, ty - c * q);
  }

  // food glow: an N x N canvas, rebuilt only when the recorded grid changes
  function foodCanvas(run, idx) {
    if (typeof document === 'undefined') return null;
    var cache = run.__d3 || (run.__d3 = {});
    if (cache.idx === idx && cache.cv) return cache.cv;
    var N = run.P.N, cv = cache.cv;
    if (!cv) { cv = cache.cv = document.createElement('canvas'); cv.width = cv.height = N; cache.cx = cv.getContext('2d'); cache.img = cache.cx.createImageData(N, N); }
    var fu = run.foods[idx], d = cache.img.data, R = run.P.R, W = 2 * R / N, sc = 1 / run.P.foodScale;
    for (var q = 0; q < N * N; q++) {
      var cx0 = (q % N + 0.5) * W - R, cy0 = (Math.floor(q / N) + 0.5) * W - R, inside = cx0 * cx0 + cy0 * cy0 <= R * R * 1.1;
      var v = 1 - Math.exp(-fu[q] * sc / 0.04);
      d[q * 4] = 255 * v; d[q * 4 + 1] = 150 * v; d[q * 4 + 2] = 30 * v; d[q * 4 + 3] = inside ? 255 * (0.08 + 0.72 * v) : 0;
    }
    cache.cx.putImageData(cache.img, 0, 0);
    cache.idx = idx;
    return cv;
  }

  function frame(ctx, run, t, view, opts) {
    opts = opts || {};
    var S = opts.size || 560, G = geom(view, S), k = G.k, R = run.P.R, i;
    t = clampTick(run, t);
    ctx.save();
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, S, S);
    ctx.beginPath(); ctx.arc(G.mx, G.my, G.ppu, 0, TAU); ctx.save(); ctx.clip();
    ctx.fillStyle = '#0c0e14'; ctx.fillRect(G.mx - G.ppu, G.my - G.ppu, 2 * G.ppu, 2 * G.ppu);
    // food
    if (run.foods && run.foods.length) {
      var fi = Math.round(t / 5); if (fi >= run.foods.length) fi = run.foods.length - 1;
      var fc = foodCanvas(run, fi);
      if (fc) { ctx.imageSmoothingEnabled = true; ctx.drawImage(fc, G.mx - G.ppu, G.my - G.ppu, 2 * G.ppu, 2 * G.ppu); }
    }
    // boulders
    var bl = run.boulders || [];
    for (i = 0; i < bl.length; i++) {
      var B = bl[i], age = t - B.birth, ba = 1, bs = 1;
      if (age < 0) continue;
      if (B.death != null) { if (t >= B.death + FADE) continue; if (t >= B.death) ba = 1 - (t - B.death) / FADE; }
      if (age < GROW) bs = Math.min(1, 0.25 + 0.75 * age / GROW);
      var bx = G.mx + B.x / R * G.ppu, by = G.my + B.y / R * G.ppu, br = Math.max(8, B.sigma * BOULDER_R * k) * bs;
      if (bx + br < 0 || by + br < 0 || bx - br > S || by - br > S) continue;
      var gr = ctx.createRadialGradient(bx, by, br * 0.1, bx, by, br * 1.25);
      gr.addColorStop(0, 'rgba(120,214,120,' + (0.62 * ba) + ')'); gr.addColorStop(0.62, 'rgba(70,170,90,' + (0.5 * ba) + ')');
      gr.addColorStop(0.85, 'rgba(50,140,80,' + (0.3 * ba) + ')'); gr.addColorStop(1, 'rgba(40,120,70,0)');
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(bx, by, br * 1.25, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(150,230,150,' + (0.35 * ba) + ')'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(bx, by, br * 0.92, 0, TAU); ctx.stroke();
    }
    // individuals
    var n = layout(run, t), len = Math.max(CELL_UM * k, MIN_LEN), wid = Math.max(WIDTH_UM * k, MIN_WID);
    var parts = run.build && run.build.parts || [], flag = parts.indexOf('flagellum') >= 0, pili = parts.indexOf('pili') >= 0;
    var phase0 = t * 5.5, reduced = !!opts.reduced, amp = reduced ? 0 : 0.28, tailLen = Math.max(len * 1.9, 4.5 * k * 0.9);
    var sq = Math.max(2.1 * k, 4), g, kd, st, hl = -1;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';

    // scout trails: last 4 ticks, by matching ids in the earlier frames
    if (opts.trails && !reduced) {
      var f0 = Math.floor(t), c;
      for (var back = 1; back <= 4; back++) {
        var fr = run.frames[f0 - back]; if (!fr) { for (c = 0; c < n; c++) trX[c * 5 + back] = NaN; continue; }
        var p = 0, sc = 2 * R / 65535;
        for (c = 0; c < n; c++) {
          if (lk[c] !== 0) continue;
          while (p < fr.n && fr.id[p] < lid[c]) p++;
          if (p < fr.n && fr.id[p] === lid[c]) { trX[c * 5 + back] = fr.x[p] * sc - R; trY[c * 5 + back] = fr.y[p] * sc - R; } else trX[c * 5 + back] = NaN;
        }
      }
      ctx.strokeStyle = 'rgba(255,90,154,0.28)'; ctx.lineWidth = Math.max(1, wid * 0.5); ctx.beginPath();
      for (c = 0; c < n; c++) {
        if (lk[c] !== 0) continue;
        var started = false, sxp = G.mx + lx[c] / R * G.ppu, syp = G.my + ly[c] / R * G.ppu;
        ctx.moveTo(sxp, syp);
        for (var bk = 1; bk <= 4; bk++) {
          var tx = trX[c * 5 + bk]; if (tx !== tx) break;
          ctx.lineTo(G.mx + tx / R * G.ppu, G.my + trY[c * 5 + bk] / R * G.ppu); started = true;
        }
      }
      ctx.stroke();
    }

    // bodies and cues: one path per kind and state, the rare fading cell on its own
    for (kd = 0; kd < 4; kd++) {
      for (st = 0; st < 3; st++) {
        ctx.beginPath(); var any = false;
        for (i = 0; i < n; i++) {
          if (lk[i] !== kd || ls[i] !== st || la[i] < 0.999) continue;
          var ax = G.mx + lx[i] / R * G.ppu, ay = G.my + ly[i] / R * G.ppu;
          if (ax < -20 || ay < -20 || ax > S + 20 || ay > S + 20) continue;
          any = true;
          if (kd === 1) square(ctx, ax, ay, lh[i], sq); else if (kd === 3) curved(ctx, ax, ay, lh[i], len * 1.15); else capsule(ctx, ax, ay, lh[i], len, k);
        }
        if (!any) continue;
        ctx.globalAlpha = DIM[st]; ctx.strokeStyle = ctx.fillStyle = COLORS[kd];
        if (kd === 1) { ctx.fill(); }
        else { ctx.lineWidth = kd === 3 ? Math.max(wid * 0.62, 1.8) : wid; ctx.stroke(); }
        // cues: tail on moving flagellated cells, tick across the front of pili scouts
        if ((st === 0 && (kd >= 2 || (kd === 0 && flag))) || (kd === 0 && pili)) {
          ctx.beginPath();
          for (i = 0; i < n; i++) {
            if (lk[i] !== kd || ls[i] !== st || la[i] < 0.999) continue;
            var cx2 = G.mx + lx[i] / R * G.ppu, cy2 = G.my + ly[i] / R * G.ppu;
            if (cx2 < -20 || cy2 < -20 || cx2 > S + 20 || cy2 > S + 20) continue;
            if (kd === 0 && pili && !flag) tick(ctx, cx2, cy2, lh[i], len);
            else if (st === 0) tail(ctx, cx2, cy2, lh[i], len, tailLen, phase0 + lid[i] * 1.7, amp);
          }
          ctx.lineWidth = Math.max(1, wid * 0.4); ctx.lineCap = 'butt'; ctx.stroke(); ctx.lineCap = 'round';
        }
      }
    }
    ctx.globalAlpha = 1;
    for (i = 0; i < n; i++) {                     // cells coming or going
      if (la[i] >= 0.999) continue;
      kd = lk[i]; st = ls[i];
      var fx = G.mx + lx[i] / R * G.ppu, fy = G.my + ly[i] / R * G.ppu;
      ctx.globalAlpha = la[i] * DIM[st]; ctx.beginPath();
      if (kd === 1) square(ctx, fx, fy, lh[i], sq); else if (kd === 3) curved(ctx, fx, fy, lh[i], len * 1.15); else capsule(ctx, fx, fy, lh[i], len, k);
      ctx.strokeStyle = ctx.fillStyle = COLORS[kd];
      if (kd === 1) ctx.fill(); else { ctx.lineWidth = kd === 3 ? Math.max(wid * 0.62, 1.8) : wid; ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
    // highlight ring
    if (opts.highlightId != null && opts.highlightId >= 0) {
      for (i = 0; i < n; i++) if (lid[i] === opts.highlightId) { hl = i; break; }
      if (hl >= 0) {
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.beginPath();
        ctx.arc(G.mx + lx[hl] / R * G.ppu, G.my + ly[hl] / R * G.ppu, Math.max(8, len * 0.9), 0, TAU); ctx.stroke();
      }
    }
    ctx.restore();      // drop the clip
    // rim
    ctx.strokeStyle = '#2c3350'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(G.mx, G.my, G.ppu, 0, TAU); ctx.stroke();
    ctx.restore();
  }

  function pick(run, t, view, size, px, py) {
    var n = layout(run, t), G = geom(view, size), R = run.P.R, best = 100, bi = -1;     // 10 px squared
    for (var i = 0; i < n; i++) {
      if (la[i] < 0.5) continue;
      var dx = G.mx + lx[i] / R * G.ppu - px, dy = G.my + ly[i] / R * G.ppu - py, d = dx * dx + dy * dy;
      if (d <= best) { best = d; bi = i; }
    }
    if (bi < 0) return null;
    return { id: lid[bi], kind: KIND_NAMES[lk[bi]], kindIndex: lk[bi], moving: ls[bi] === 0, resting: ls[bi] === 2 };
  }

  function scaleBar(view, size) {
    var k = geomK(view, size), want = 80 / k, nice = [0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500], bar = nice[0];
    for (var i = 0; i < nice.length; i++) if (nice[i] <= want) bar = nice[i];
    return { px: bar * k, label: bar + ' µm' };
  }
  function geomK(view, size) { return size * 0.5 * 0.96 * view.zoom / 250; }

  var api = { frame: frame, pick: pick, scaleBar: scaleBar, KIND_NAMES: KIND_NAMES, COLORS: COLORS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.LookAliveDraw3 = api;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));

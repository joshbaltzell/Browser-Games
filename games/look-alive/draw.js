// Look Alive prototype: canvas drawing helpers. Flat 2D only. Global LAD. No DOM state lives here.
var LAD = (function () {
  'use strict';
  var VIO = '#a78bfa', PINK = '#ff6b95', AMB = '#f5a524', GRN = '#2dd4a7', CY = '#5fd0ff', RED = '#ff5d6c';
  // Four suspicion channels: each has its own colour AND pattern, so they never rely on colour alone.
  var CH = [
    { id: 'growth', name: 'Growth (speed)', color: PINK, pat: 'stripes' },
    { id: 'waste', name: 'Smell', color: AMB, pat: 'dots' },
    { id: 'casualties', name: 'Growth (share)', color: VIO, pat: 'cross' },
    { id: 'regularity', name: 'Naturalness', color: CY, pat: 'zigzag' },
    { id: 'motion', name: 'Movement', color: '#e6ebff', pat: 'checks' }   // habitat 3 only (index 4): ticks led by Movement; pale checks, so it is told apart by pattern as well as colour
  ];
  var dpr = Math.min(2, (typeof window !== 'undefined' && window.devicePixelRatio) || 1);
  var pats = {};

  function fit(c) {
    var w = c.clientWidth, h = c.clientHeight;
    if (!w || !h) return null;
    var pw = Math.round(w * dpr), ph = Math.round(h * dpr);
    if (c.width !== pw || c.height !== ph) { c.width = pw; c.height = ph; }
    var ctx = c.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  }

  function pattern(ctx, kind, color) {
    var key = kind + color;
    if (!pats[key]) {
      var t = document.createElement('canvas'); t.width = t.height = 10;
      var g = t.getContext('2d');
      g.fillStyle = color; g.globalAlpha = 0.28; g.fillRect(0, 0, 10, 10); g.globalAlpha = 1;
      g.strokeStyle = '#04050a'; g.fillStyle = '#04050a'; g.lineWidth = 2;
      if (kind === 'stripes') { g.beginPath(); g.moveTo(-2, 12); g.lineTo(12, -2); g.moveTo(-2, 7); g.lineTo(7, -2); g.moveTo(3, 12); g.lineTo(12, 3); g.stroke(); }
      else if (kind === 'dots') { g.beginPath(); g.arc(3, 3, 1.6, 0, 7); g.arc(8, 8, 1.6, 0, 7); g.fill(); }
      else if (kind === 'checks') { g.fillRect(0, 0, 5, 5); g.fillRect(5, 5, 5, 5); }
      else if (kind === 'cross') { g.lineWidth = 1.5; g.beginPath(); g.moveTo(-1, 11); g.lineTo(11, -1); g.moveTo(-1, -1); g.lineTo(11, 11); g.stroke(); }
      else { g.lineWidth = 1.6; g.beginPath(); g.moveTo(0, 7); g.lineTo(2.5, 2); g.lineTo(5, 7); g.lineTo(7.5, 2); g.lineTo(10, 7); g.stroke(); }
      pats[key] = t;
    }
    return ctx.createPattern(pats[key], 'repeat');
  }

  // ---------------------------------------------------------------- the dish, drawn as cells
  // A fixed pool of candidate blobs per kind. Each has a fixed spot in the dish and a fixed threshold. A blob is shown when the
  // density field at its spot (interpolated between two snapshots) is above its threshold, so the number of blobs follows the
  // population, positions never change between frames, and falling density makes blobs shrink and disappear one by one.
  var pools = null, sprites = {};
  function mul(seed) { return function () { seed = (seed + 0x6D2B79F5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function makePool(count, seed) {
    var r = mul(seed), out = [], u, v;
    while (out.length < count) {
      u = r(); v = r();
      if ((u - 0.5) * (u - 0.5) + (v - 0.5) * (v - 0.5) <= 0.2) out.push({ u: u, v: v, th: r(), p1: r() * 6.283, p2: r() * 6.283, sz: 0.75 + r() * 0.5, sp: 0.5 + r() * 0.9, tint: r() });
    }
    return out;
  }
  function sprite(color) {
    if (sprites[color]) return sprites[color];
    var c = document.createElement('canvas'); c.width = c.height = 48; var g = c.getContext('2d');
    var gr = g.createRadialGradient(20, 19, 2, 24, 24, 23);
    gr.addColorStop(0, 'rgba(255,255,255,.75)'); gr.addColorStop(0.25, color); gr.addColorStop(0.75, color); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.globalAlpha = 0.9; g.fillStyle = gr; g.beginPath(); g.arc(24, 24, 23, 0, 7); g.fill();
    sprites[color] = c; return c;
  }
  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  // opt: n (field size), nativeRef (mean native density at the start), stage, kill, time, stress (0..1, acid loss), acid (dish has acid)
  function drawCells(c, A, B, f, opt) {
    var v = fit(c); if (!v) return;
    var ctx = v.ctx, W = v.w, H = v.h, n = opt.n, tm = opt.time || 0, ref = opt.nativeRef || 0.9;
    if (!pools) pools = { nat: makePool(950, 11), rob: makePool(1050, 23), waste: makePool(420, 37) };
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
    var bg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W / 2);
    bg.addColorStop(0, opt.acid ? '#1a1604' : '#0b0d16'); bg.addColorStop(1, opt.acid ? '#0b0a02' : '#05060b');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    var Bn = B || A, An = A.native, Ar = A.robot, Aw = A.waste, Bnn = Bn.native, Br = Bn.robot, Bw = Bn.waste;
    var stage = opt.stage || 0, kill = opt.kill || 0, gAmt = stage >= 1 ? Math.min(0.9, 0.25 + 0.2 * stage + Math.min(0.4, kill * 6)) : 0;
    var stress = opt.stress || 0, i, k, q, idx, p, s, x, y, base, spr, drift;
    var pv = sprite('#a78bfa'), pp = sprite('#ff6b95'), pa = sprite('#f5a524'), pg = sprite('#2dd4a7');
    ctx.globalCompositeOperation = 'lighter';
    // waste wisps: small, amber, only where waste is dense
    for (i = 0; i < pools.waste.length; i++) {
      q = pools.waste[i]; idx = ((q.v * n) | 0) * n + ((q.u * n) | 0);
      p = clamp01(((Aw[idx] + (Bw[idx] - Aw[idx]) * f) - 0.095) / 0.06) * 0.7;
      if (p <= q.th) continue;
      s = (2.2 + 2 * q.sz) * clamp01((p - q.th) / 0.1);
      x = (q.u + 0.006 * Math.sin(tm * 0.5 * q.sp + q.p1)) * W; y = (q.v + 0.006 * Math.cos(tm * 0.45 * q.sp + q.p2)) * H;
      ctx.globalAlpha = 0.55; ctx.drawImage(pa, x - s, y - s, s * 2, s * 2);
    }
    ctx.globalCompositeOperation = 'source-over';
    // natives
    for (i = 0; i < pools.nat.length; i++) {
      q = pools.nat[i]; idx = ((q.v * n) | 0) * n + ((q.u * n) | 0);
      p = clamp01((An[idx] + (Bnn[idx] - An[idx]) * f) / ref * 0.5);
      if (p <= q.th) continue;
      s = (4.4 * q.sz) * (0.55 + 0.45 * clamp01((p - q.th) / 0.1));
      x = (q.u + 0.005 * Math.sin(tm * 0.6 * q.sp + q.p1)) * W; y = (q.v + 0.005 * Math.cos(tm * 0.5 * q.sp + q.p2)) * H;
      ctx.globalAlpha = 0.85; ctx.drawImage(pv, x - s, y - s, s * 2, s * 2);
    }
    // you: pink, green-tinted only while the immune stage is active
    for (i = 0; i < pools.rob.length; i++) {
      q = pools.rob[i]; idx = ((q.v * n) | 0) * n + ((q.u * n) | 0);
      p = clamp01((Ar[idx] + (Br[idx] - Ar[idx]) * f) / ref * 0.9);
      if (p <= q.th) continue;
      s = (5.2 * q.sz) * (0.35 + 0.65 * clamp01((p - q.th) / 0.12)) * (1 - 0.55 * stress);
      if (s < 0.6) continue;
      x = (q.u + 0.007 * Math.sin(tm * 0.8 * q.sp + q.p1)) * W; y = (q.v + 0.007 * Math.cos(tm * 0.7 * q.sp + q.p2)) * H;
      ctx.globalAlpha = 0.95; ctx.drawImage(gAmt > 0 && q.tint < gAmt * 0.55 ? pg : pp, x - s, y - s, s * 2, s * 2);
    }
    ctx.globalAlpha = 1;
    var gr = ctx.createRadialGradient(W / 2, H / 2, W * 0.40, W / 2, H / 2, W * 0.5);
    gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,.85)');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
  }

  // ---------------------------------------------------------------- generic line chart
  // series: [{ data(i) -> value, n, color, dash, width, upTo }]
  function chart(c, o) {
    var v = fit(c); if (!v) return null;
    var ctx = v.ctx, W = v.w, H = v.h, L = o.padL == null ? 34 : o.padL, R = o.padR == null ? 8 : o.padR, T = 6, B = o.padB == null ? 14 : o.padB;
    var pw = W - L - R, ph = H - T - B;
    function X(t) { return L + pw * t / o.T; }
    function Y(y) { return T + ph * (1 - (y - o.y0) / (o.y1 - o.y0)); }
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#05060b'; ctx.fillRect(L, T, pw, ph);
    ctx.strokeStyle = '#1a1e2c'; ctx.lineWidth = 1; ctx.fillStyle = '#6a7088'; ctx.font = '10px ' + 'ui-monospace, Menlo, monospace'; ctx.textBaseline = 'middle'; ctx.textAlign = 'right';
    var kept = []; (o.yTicks || []).slice().sort(function (p, q) { return p - q; }).filter(function (yv) { var yy = Y(yv); if (kept.every(function (k) { return Math.abs(k - yy) >= 15; })) { kept.push(yy); return true; } return false; }).forEach(function (yv) { var y = Math.round(Y(yv)) + .5; ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(L + pw, y); ctx.stroke(); ctx.fillText(o.yFmt ? o.yFmt(yv) : yv, L - 4, y); });
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (var tt = 0; tt <= o.T; tt += o.T > 150 ? 50 : 20) { ctx.fillText(tt, X(tt), T + ph + 2); }
    if (o.bands) o.bands.forEach(function (bd) {
      ctx.fillStyle = bd.fill; ctx.fillRect(L, Y(bd.hi), pw, Y(bd.lo) - Y(bd.hi));
      ctx.strokeStyle = bd.line; ctx.setLineDash([4, 3]); ctx.beginPath();
      ctx.moveTo(L, Y(bd.hi)); ctx.lineTo(L + pw, Y(bd.hi)); ctx.moveTo(L, Y(bd.lo)); ctx.lineTo(L + pw, Y(bd.lo)); ctx.stroke(); ctx.setLineDash([]);
      if (bd.label) { ctx.fillStyle = bd.line; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText(bd.label, L + 4, Y(bd.hi) - 1); }
    });
    var hl = []; if (o.hlines) o.hlines.slice().sort(function (p, q) { return q.y - p.y; }).forEach(function (h) {
      var ly = Y(h.y), showLbl = hl.every(function (z) { return Math.abs(z - ly) >= 11; }); if (showLbl) hl.push(ly);
      ctx.strokeStyle = h.color; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.moveTo(L, Y(h.y)); ctx.lineTo(L + pw, Y(h.y)); ctx.stroke(); ctx.setLineDash([]);
      if (showLbl) { ctx.fillStyle = h.color; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText(h.label, L + 4, Y(h.y) - 1); }
    });
    var vlast = -1e9; if (o.vmarks) o.vmarks.slice().sort(function (p, q) { return p.t - q.t; }).forEach(function (m) {
      ctx.strokeStyle = m.color; ctx.setLineDash(m.dash || []); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(Math.round(X(m.t)) + .5, T); ctx.lineTo(Math.round(X(m.t)) + .5, T + ph); ctx.stroke(); ctx.setLineDash([]);
      if (m.label && X(m.t) + 3 >= vlast) { ctx.fillStyle = m.color; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText(m.label, X(m.t) + 3, T + 2); vlast = X(m.t) + 3 + ctx.measureText(m.label).width + 4; }
    });
    ctx.save(); ctx.beginPath(); ctx.rect(L, T, pw, ph); ctx.clip();
    (o.series || []).forEach(function (s) {
      if (!s.data) return;
      var last = s.upTo == null ? s.n - 1 : Math.min(s.n - 1, Math.floor(s.upTo));
      if (s.dimTail) { // faint full line, bright part up to playhead
        ctx.strokeStyle = s.color; ctx.globalAlpha = 0.22; ctx.lineWidth = 1.2; ctx.beginPath();
        for (var k = 0; k < s.n; k++) { var yy = Y(s.data(k)); if (k === 0) ctx.moveTo(X(k), yy); else ctx.lineTo(X(k), yy); }
        ctx.stroke(); ctx.globalAlpha = 1;
      }
      ctx.strokeStyle = s.color; ctx.lineWidth = s.width || 1.8; ctx.setLineDash(s.dash || []); ctx.globalAlpha = s.alpha == null ? 1 : s.alpha;
      ctx.beginPath();
      for (var i = 0; i <= last; i++) { var y = Y(s.data(i)); if (i === 0) ctx.moveTo(X(i), y); else ctx.lineTo(X(i), y); }
      ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
    });
    ctx.restore();
    if (o.pin) { // autopsy pin: bracket on the timeline and a pin head
      var x0 = X(o.pin.from), x1 = X(o.pin.to);
      ctx.fillStyle = 'rgba(255,93,108,.16)'; ctx.fillRect(x0, T, Math.max(2, x1 - x0), ph);
      ctx.strokeStyle = RED; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x0, T + ph); ctx.lineTo(x0, T + ph - 14); ctx.moveTo(x0, T + ph - 7); ctx.lineTo(x1, T + ph - 7); ctx.moveTo(x1, T + ph); ctx.lineTo(x1, T + ph - 14); ctx.stroke();
      ctx.fillStyle = RED; ctx.beginPath(); ctx.arc(x0, T + 8, 6, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 9px ui-monospace, Menlo, monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('!', x0, T + 8);
    }
    if (o.head != null) {
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1; ctx.beginPath(); var hx = Math.round(X(o.head)) + .5; ctx.moveTo(hx, T); ctx.lineTo(hx, T + ph); ctx.stroke();
    }
    return { X: X, Y: Y, L: L, R: R, pw: pw };
  }

  // Food strip under the share chart: the real food level (as a share of the starting level), crash periods shaded, same time axis as the chart.
  function foodStrip(c, run, padL, padR, o) {
    var v = fit(c); if (!v) return;
    var ctx = v.ctx, W = v.w, H = v.h; ctx.clearRect(0, 0, W, H);
    var L = padL, pw = W - L - padR, T = run.T, f = run.H.food, f0 = f[0] || 1, top = 1.2, t, rel;
    for (t = 0; t <= T; t++) { rel = f[t] / f0; if (rel > top) top = Math.ceil(rel * 5) / 5; }
    function X(tt) { return L + pw * tt / T; }
    function Y(r) { return 2 + (H - 4) * (1 - r / top); }
    ctx.fillStyle = '#05060b'; ctx.fillRect(L, 0, pw, H);
    (o.events || []).forEach(function (E) { ctx.fillStyle = 'rgba(245,165,36,.10)'; ctx.fillRect(X(E.tick), 0, Math.max(2, X(Math.min(T, E.tick + E.dur)) - X(E.tick)), H); });
    ctx.strokeStyle = '#4a4220'; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(L, Math.round(Y(1)) + .5); ctx.lineTo(L + pw, Math.round(Y(1)) + .5); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(X(0), H);
    for (t = 0; t <= T; t++) ctx.lineTo(X(t), Y(f[t] / f0));
    ctx.lineTo(X(T), H); ctx.closePath(); ctx.fillStyle = 'rgba(245,165,36,.32)'; ctx.fill();
    ctx.strokeStyle = AMB; ctx.lineWidth = 1.6; ctx.beginPath();
    for (t = 0; t <= T; t++) { if (t === 0) ctx.moveTo(X(t), Y(f[t] / f0)); else ctx.lineTo(X(t), Y(f[t] / f0)); }
    ctx.stroke();
    ctx.fillStyle = AMB; ctx.font = '10px ui-monospace, Menlo, monospace'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText('food', L - 4, H / 2);
    if (o.head != null) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 1; var hx = Math.round(X(o.head)) + .5; ctx.beginPath(); ctx.moveTo(hx, 0); ctx.lineTo(hx, H); ctx.stroke(); }
  }

  function ribbon(c, run, padL, padR) {
    var v = fit(c); if (!v) return;
    var ctx = v.ctx, W = v.w, H = v.h; ctx.clearRect(0, 0, W, H);
    var L = padL, pw = W - L - padR, T = run.T, lead = run.H.lead;
    ctx.fillStyle = '#05060b'; ctx.fillRect(L, 0, pw, H);
    var t = 1;
    while (t <= T) {
      var k = lead[t], t2 = t; while (t2 + 1 <= T && lead[t2 + 1] === k) t2++;
      if (k >= 0) {
        ctx.fillStyle = pattern(ctx, CH[k].pat, CH[k].color);
        ctx.fillRect(L + pw * (t - 1) / T, 0, Math.max(1, pw * (t2 - t + 1) / T), H);
        ctx.fillStyle = CH[k].color; ctx.fillRect(L + pw * (t - 1) / T, H - 2, Math.max(1, pw * (t2 - t + 1) / T), 2);
      }
      t = t2 + 1;
    }
  }

  // ---------------------------------------------------------------- colony portrait
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  var MACH = { fuelcell: 1, clock: 1, radio: 1, copier: 1, repair: 1 };
  function portrait(c, build, time, machineCount) {
    var v = fit(c); if (!v) return;
    var ctx = v.ctx, W = v.w, H = v.h, cx = W / 2, cy = H / 2;
    ctx.fillStyle = '#02030a'; ctx.fillRect(0, 0, W, H);
    var r = rng(hash(build.metabolism + build.pace)), parts = build.parts || [];
    var count = 14 + build.pace * 3, slop = build.slop;
    var cells = [], k;
    for (k = 0; k < count; k++) {
      var a = r() * 6.283, d = Math.sqrt(r()) * (28 + count * 0.7);
      cells.push({ x: Math.cos(a) * d * 1.25, y: Math.sin(a) * d * 0.8, s: 8 + r() * 4 + slop * r() * 1.2, ph: r() * 6.28, odd: r() });
    }
    var wob = time ? 1 : 0;
    // soft glow
    var gr = ctx.createRadialGradient(cx, cy, 5, cx, cy, 110);
    gr.addColorStop(0, 'rgba(255,107,149,.20)'); gr.addColorStop(1, 'rgba(255,107,149,0)');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
    var i;
    if (parts.indexOf('flagellum') >= 0) {
      ctx.strokeStyle = AMB; ctx.lineWidth = 2; ctx.globalAlpha = .8;
      [-0.9, 0.2, 2.5].forEach(function (ang, j) {
        ctx.beginPath();
        var bx = cx + Math.cos(ang) * 70, by = cy + Math.sin(ang) * 46; ctx.moveTo(bx, by);
        for (var s = 1; s <= 12; s++) { ctx.lineTo(bx + Math.cos(ang) * s * 4 + Math.sin(s * .9 + time * 3 * wob + j) * 4 * (s / 12), by + Math.sin(ang) * s * 3 + Math.cos(s * .9 + time * 3 * wob + j) * 4 * (s / 12)); }
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    }
    for (i = 0; i < cells.length; i++) {
      var q = cells[i], x = cx + q.x + Math.sin(time * 1.3 + q.ph) * 1.6 * wob, y = cy + q.y + Math.cos(time * 1.1 + q.ph) * 1.6 * wob;
      var odd = parts.indexOf('naps') >= 0 && q.odd > 0.75;
      ctx.shadowColor = PINK; ctx.shadowBlur = 10;
      ctx.fillStyle = odd ? '#ff9a6b' : PINK; ctx.globalAlpha = 0.85;
      ctx.beginPath(); ctx.arc(x, y, odd ? q.s * 0.7 : q.s, 0, 7); ctx.fill();
      ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(255,255,255,.28)'; ctx.beginPath(); ctx.arc(x - q.s * .3, y - q.s * .3, q.s * .28, 0, 7); ctx.fill();
    }
    var rad = 50 + count * 0.7;
    if (parts.indexOf('wall') >= 0) { ctx.strokeStyle = 'rgba(255,170,200,.8)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(cx, cy, rad * 1.25, rad * 0.82, 0, 0, 7); ctx.stroke(); }
    if (parts.indexOf('quorum') >= 0) { ctx.fillStyle = AMB; for (i = 0; i < 26; i++) { var an = i / 26 * 6.283 + time * .3 * wob; ctx.globalAlpha = .6; ctx.beginPath(); ctx.arc(cx + Math.cos(an) * rad * 1.45, cy + Math.sin(an) * rad * 0.95, 1.8, 0, 7); ctx.fill(); } ctx.globalAlpha = 1; }
    // one hexagon seam per Machine card
    for (k = 0; k < machineCount; k++) {
      var hr = 30 + k * 17, rot = k * 0.35 + 0.2;
      ctx.strokeStyle = CY; ctx.lineWidth = 1.4; ctx.globalAlpha = .9; ctx.shadowColor = CY; ctx.shadowBlur = 6;
      ctx.beginPath();
      for (i = 0; i < 6; i++) { var aa = rot + i * Math.PI / 3, hx = cx + Math.cos(aa) * hr * 1.3, hy = cy + Math.sin(aa) * hr * 0.85; if (i === 0) ctx.moveTo(hx, hy); else ctx.lineTo(hx, hy); }
      ctx.closePath(); ctx.stroke(); ctx.shadowBlur = 0;
      ctx.fillStyle = CY;
      for (i = 0; i < 6; i++) { var ab = rot + i * Math.PI / 3; ctx.beginPath(); ctx.arc(cx + Math.cos(ab) * hr * 1.3, cy + Math.sin(ab) * hr * 0.85, 2.2, 0, 7); ctx.fill(); }
      ctx.globalAlpha = 1;
    }
  }


  // ---------------------------------------------------------------- the cell diagram (SVG markup, flat shapes)
  // viewBox 0 0 600 410. Each body slot is one <g class="slotg s-<slot>"> so the page can select, dim and pulse it.
  var CG = { cx: 300, cy: 205, r1: 120, r2: 106, rf: 97, rc: 26 };
  function pol(r, deg) { var a = deg * Math.PI / 180; return [CG.cx + Math.cos(a) * r, CG.cy + Math.sin(a) * r]; }
  function n1(x) { return Math.round(x * 10) / 10; }
  function hexPts(cx, cy, r, rot) { var o = []; for (var i = 0; i < 6; i++) { var a = rot + i * Math.PI / 3; o.push(n1(cx + Math.cos(a) * r) + ',' + n1(cy + Math.sin(a) * r)); } return o.join(' '); }
  var ANCHOR = { reflex: pol(CG.r1, -135), envelope: pol((CG.r1 + CG.r2) / 2, -150), division: [CG.cx - CG.r1 - 2, CG.cy], motor: pol(CG.r1 + 34, 140), signal: pol(CG.r1 + 28, -45), insides: pol(70, -20), power: [CG.cx + CG.rc + 3, CG.cy] };
  var DOTS = [[-78, 18], [-70, 34], [-62, 16], [-56, 30], [-48, 14], [-42, 28], [-34, 18], [-28, 34], [-20, 16], [-66, 46]];   // signal dots: angle, extra distance
  var FLUID = [[-40, 20], [30, 50], [150, 40], [200, 30], [260, 55], [320, 35], [100, 60], [350, 62], [60, 30], [230, 62], [290, 22], [10, 70]];

  // The Light lineage in the Skin: the skin ring with flat purple patches set in it (real: bacteriorhodopsin sits in purple patches of the membrane).
  // Step 2 adds one sensing spot with a ring. Step 3 makes the spot two halves with different fills and marks. Told apart by shape and pattern, not colour alone.
  var LIGHT_STEP = { lightpump: 1, lightsense: 2, lightcolor: 3 };
  function arcPath(r, a0, a1) { var p = pol(r, a0), q = pol(r, a1); return 'M' + n1(p[0]) + ' ' + n1(p[1]) + ' A' + r + ' ' + r + ' 0 0 1 ' + n1(q[0]) + ' ' + n1(q[1]); }
  function lightRing(r, id, over) {   // over: only the marks, for laying over the glowing 3D portrait (which already draws the skin itself)
    var st = LIGHT_STEP[id], o = over ? '' : '<circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + r + '" fill="none" stroke="' + PINK + '" stroke-width="6"/><circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + (r + 4) + '" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="1.2"/>';
    [-122, -12, 52, 118, 188].forEach(function (a) {
      o += '<path class="lpatch" d="' + arcPath(r, a - 11, a + 11) + '" fill="none" stroke="#2a1470" stroke-width="16" stroke-linecap="butt"/><path class="lpatch" d="' + arcPath(r, a - 10, a + 10) + '" fill="none" stroke="#8b5cf6" stroke-width="12" stroke-linecap="butt"/>';
    });
    if (st < 2) return o;
    var p = pol(r, -67), x = n1(p[0]), y = n1(p[1]);
    if (st === 2) return o + '<circle class="lspot" cx="' + x + '" cy="' + y + '" r="18" fill="none" stroke="#ffe08a" stroke-width="2.4"/><circle cx="' + x + '" cy="' + y + '" r="11" fill="#ffe08a"/>';
    return o + '<circle class="lspot" cx="' + x + '" cy="' + y + '" r="21" fill="none" stroke="#fff" stroke-width="2.4"/>' +
      '<path d="M' + x + ' ' + n1(y - 14) + ' A14 14 0 0 0 ' + x + ' ' + n1(y + 14) + ' Z" fill="' + AMB + '"/><path d="M' + x + ' ' + n1(y - 14) + ' A14 14 0 0 1 ' + x + ' ' + n1(y + 14) + ' Z" fill="' + CY + '"/>' +
      '<circle cx="' + n1(x - 7) + '" cy="' + n1(y - 5) + '" r="1.9" fill="#3a2305"/><circle cx="' + n1(x - 6) + '" cy="' + n1(y + 5) + '" r="1.9" fill="#3a2305"/><circle cx="' + n1(x - 3) + '" cy="' + y + '" r="1.5" fill="#3a2305"/>' +
      '<path d="M' + n1(x + 3) + ' ' + n1(y - 10) + ' L' + n1(x + 11) + ' ' + n1(y - 4) + ' M' + n1(x + 3) + ' ' + n1(y - 3) + ' L' + n1(x + 12) + ' ' + n1(y + 3) + ' M' + n1(x + 3) + ' ' + n1(y + 4) + ' L' + n1(x + 9) + ' ' + n1(y + 9) + '" stroke="#06364a" stroke-width="2" fill="none"/>' +
      '<line x1="' + x + '" y1="' + n1(y - 14) + '" x2="' + x + '" y2="' + n1(y + 14) + '" stroke="#fff" stroke-width="1.6"/>';
  }
  // The Light marks alone, in the same 600 x 410 space as cellArt, for the WebGL portrait on Adapt (the shader draws the skin; these sit over it, in register).
  function lightMarks(slots) {
    var env = (slots && slots.envelope) || [], i;
    for (i = 0; i < 2; i++) if (LIGHT_STEP[env[i]]) return '<g class="lmarks" data-step="' + LIGHT_STEP[env[i]] + '" pointer-events="none">' + lightRing(i ? CG.r2 : CG.r1, env[i], true) + '</g>';
    return '';
  }
  // Where the newest Light mark is, for a callout: step 1 a patch, steps 2 and 3 the spot. { step, x, y } or null.
  function lightSpot(slots) {
    var env = (slots && slots.envelope) || [], i, st, r, p;
    for (i = 0; i < 2; i++) if (LIGHT_STEP[env[i]]) { st = LIGHT_STEP[env[i]]; r = i ? CG.r2 : CG.r1; p = pol(r, st < 2 ? -12 : -67); return { step: st, x: n1(p[0]), y: n1(p[1]) }; }
    return null;
  }
  function ringArt(r, id, idx) {
    var o = '';
    if (LIGHT_STEP[id]) return lightRing(r, id);
    if (!id) return '<circle class="emptyring" cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + r + '"/>';
    if (id === 'lipids') return '<circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + r + '" fill="none" stroke="' + PINK + '" stroke-width="10"/><circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + (r + 3) + '" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.5"/>';
    if (id === 'tetraether') {   // one fused ring, no leaflet gap: a solid amber-white band with a bright core line and tiny cross-links
      o = '<circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + r + '" fill="none" stroke="#ffcf8a" stroke-width="9"/><circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + r + '" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.6"/>';
      for (var tq = 0; tq < 24; tq++) { var tp = pol(r - 3.5, tq * 15 + idx * 7), tr = pol(r + 3.5, tq * 15 + idx * 7); o += '<line x1="' + n1(tp[0]) + '" y1="' + n1(tp[1]) + '" x2="' + n1(tr[0]) + '" y2="' + n1(tr[1]) + '" stroke="#7a4a12" stroke-width="1.2" stroke-opacity=".7"/>'; }
      return o;
    }
    if (id === 'wall') return '<circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + r + '" fill="none" stroke="#ffb0c8" stroke-width="8" stroke-dasharray="11 4"/><circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + (r + 5) + '" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="1"/>';
    o += '<circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + r + '" fill="none" stroke="' + PINK + '" stroke-width="4"/>';   // pump: little pumps in the skin, each throwing acid out
    for (var i = 0; i < 10; i++) {
      var a = i * 36 + idx * 18, p = pol(r, a), q = pol(r + 9, a), t = pol(r + 17, a);
      o += '<line x1="' + n1(p[0]) + '" y1="' + n1(p[1]) + '" x2="' + n1(q[0]) + '" y2="' + n1(q[1]) + '" stroke="' + AMB + '" stroke-width="2"/><circle cx="' + n1(t[0]) + '" cy="' + n1(t[1]) + '" r="3" fill="' + AMB + '"/>' +
        '<circle cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" r="5.5" fill="#ff9fbb" stroke="#fff" stroke-width="1.2"/>';
    }
    return o;
  }
  function envelopeArt(env) {
    if (env.length && env[0] === 'shell') {
      var o = '<polygon points="' + hexPts(CG.cx, CG.cy, CG.r1 + 6, 0) + '" fill="rgba(95,208,255,.08)" stroke="' + CY + '" stroke-width="6" stroke-linejoin="round"/><polygon points="' + hexPts(CG.cx, CG.cy, CG.r2 - 2, 0) + '" fill="none" stroke="' + CY + '" stroke-width="2" stroke-opacity=".8"/>';
      for (var i = 0; i < 6; i++) { var a = i * Math.PI / 3, x1 = CG.cx + Math.cos(a) * (CG.r2 - 2), y1 = CG.cy + Math.sin(a) * (CG.r2 - 2), x2 = CG.cx + Math.cos(a) * (CG.r1 + 6), y2 = CG.cy + Math.sin(a) * (CG.r1 + 6); o += '<line x1="' + n1(x1) + '" y1="' + n1(y1) + '" x2="' + n1(x2) + '" y2="' + n1(y2) + '" stroke="' + CY + '" stroke-width="2"/>'; }
      return o;
    }
    return ringArt(CG.r1, env[0], 0) + ringArt(CG.r2, env[1], 1);
  }
  function insidesArt(id) {
    var fill = id === 'acidproof' ? 'rgba(245,165,36,.34)' : 'rgba(255,107,149,.14)', o = '<circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + CG.rf + '" fill="' + fill + '"/>';
    if (id === 'acidproof') FLUID.forEach(function (d) { var p = pol(d[1] + 20, d[0]); o += '<circle cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" r="3.2" fill="' + AMB + '" opacity=".85"/>'; });
    else if (id === 'chaperones') {   // little cups cradling folded blobs
      FLUID.slice(0, 6).forEach(function (d, k) { var p = pol(d[1] + 18, d[0] * 1.3 + k * 20), a = k * 1.1; o += '<path d="M' + n1(p[0] - 8) + ' ' + n1(p[1] - 3) + ' A8 8 0 0 0 ' + n1(p[0] + 8) + ' ' + n1(p[1] - 3) + '" fill="none" stroke="' + AMB + '" stroke-width="2.2" stroke-linecap="round" transform="rotate(' + Math.round(a * 57) + ' ' + n1(p[0]) + ' ' + n1(p[1]) + ')"/><circle cx="' + n1(p[0]) + '" cy="' + n1(p[1] - 1) + '" r="3.2" fill="#ff9fbb"/>'; });
    } else if (id === 'polyamines') {   // a lace of short thread bundles wrapped round the DNA loop
      o += '<circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="52" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-dasharray="1 4"/>';
      for (var pk = 0; pk < 16; pk++) { var pa = pol(52, pk * 22.5), pb = pol(66, pk * 22.5 + 9); o += '<line x1="' + n1(pa[0]) + '" y1="' + n1(pa[1]) + '" x2="' + n1(pb[0]) + '" y2="' + n1(pb[1]) + '" stroke="' + CY + '" stroke-width="2" stroke-linecap="round" stroke-opacity=".85"/><circle cx="' + n1(pb[0]) + '" cy="' + n1(pb[1]) + '" r="2.4" fill="' + CY + '"/>'; }
    } else if (id === 'repair') {
      FLUID.slice(0, 7).forEach(function (d, k) { var p = pol(d[1] + 22, d[0]); o += '<polygon points="' + hexPts(p[0], p[1], 7, k) + '" fill="none" stroke="' + CY + '" stroke-width="1.4" stroke-opacity=".85"/>'; });
    } else o += '<circle cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + CG.rf + '" fill="none" stroke="#fff" stroke-opacity=".12" stroke-dasharray="2 5"/>';
    return o;
  }
  function powerArt(id) {
    var cx = CG.cx, cy = CG.cy, o = '<circle cx="' + cx + '" cy="' + cy + '" r="44" fill="url(#coreGlow)"/>';
    if (id === 'fuelcell') return o + '<polygon points="' + hexPts(cx, cy, 30, Math.PI / 6) + '" fill="#0a1f2b" stroke="' + CY + '" stroke-width="3"/><polygon points="' + hexPts(cx, cy, 16, Math.PI / 6) + '" fill="' + CY + '" fill-opacity=".85"/>';
    if (id === 'fermentation') {
      o += '<circle cx="' + cx + '" cy="' + cy + '" r="24" fill="#ffb347" stroke="#fff" stroke-width="2"/>';
      [[-30, -6, 5], [30, 6, 4], [-22, 22, 3.5], [24, -20, 3.5], [0, -34, 3]].forEach(function (b) { o += '<circle cx="' + (cx + b[0]) + '" cy="' + (cy + b[1]) + '" r="' + b[2] + '" fill="none" stroke="' + AMB + '" stroke-width="1.6"/>'; });
      return o;
    }
    if (id === 'heatps') {   // a core with heat-stable stacked discs: a ring of amber plates around a warm white centre
      o += '<circle cx="' + cx + '" cy="' + cy + '" r="30" fill="#2a1408" stroke="#ffcf8a" stroke-width="3"/>';
      for (var hk = 0; hk < 4; hk++) o += '<line x1="' + (cx - 22 + hk * 1) + '" y1="' + (cy - 15 + hk * 10) + '" x2="' + (cx + 22 - hk * 1) + '" y2="' + (cy - 15 + hk * 10) + '" stroke="' + AMB + '" stroke-width="4" stroke-linecap="round"/>';
      return o + '<circle cx="' + cx + '" cy="' + cy + '" r="7" fill="#fff" fill-opacity=".9"/>';
    }
    return o + '<circle cx="' + cx + '" cy="' + cy + '" r="' + CG.rc + '" fill="#ff9fbb" stroke="#fff" stroke-width="2"/><circle cx="' + cx + '" cy="' + cy + '" r="11" fill="#fff" fill-opacity=".85"/><circle cx="' + cx + '" cy="' + cy + '" r="34" fill="none" stroke="#fff" stroke-opacity=".35" stroke-dasharray="3 5"/>';
  }
  function divisionArt(id) {
    var cx = CG.cx, cy = CG.cy, x0 = cx - CG.r1 - 6, x1 = cx + CG.r1 + 6, o = '';
    var pinch = '<path d="M' + (x0 - 2) + ' ' + (cy - 12) + ' L' + (x0 + 14) + ' ' + cy + ' L' + (x0 - 2) + ' ' + (cy + 12) + ' Z M' + (x1 + 2) + ' ' + (cy - 12) + ' L' + (x1 - 14) + ' ' + cy + ' L' + (x1 + 2) + ' ' + (cy + 12) + ' Z" fill="#04050a" stroke="#fff" stroke-opacity=".5"/>';
    if (!id) return '<line class="emptyline" x1="' + x0 + '" y1="' + cy + '" x2="' + x1 + '" y2="' + cy + '"/>' + pinch;
    if (id === 'clock') {
      o += '<line x1="' + x0 + '" y1="' + cy + '" x2="' + x1 + '" y2="' + cy + '" stroke="' + CY + '" stroke-opacity=".5"/>';
      for (var i = 0; i < 9; i++) o += '<polygon points="' + hexPts(x0 + 18 + i * ((x1 - x0 - 36) / 8), cy, 8, 0) + '" fill="#0a1f2b" stroke="' + CY + '" stroke-width="1.6"/>';
      return o + pinch;
    }
    if (id === 'filament') {   // a long chained outline: one cell that stays joined, with faint walls between the links
      var fw = (x1 - x0 - 20) / 5;
      o += '<rect x="' + (x0 + 10) + '" y="' + (cy - 8) + '" width="' + (x1 - x0 - 20) + '" height="16" rx="8" fill="rgba(255,179,71,.10)" stroke="' + AMB + '" stroke-width="2.4"/>';
      for (var fk = 1; fk < 5; fk++) o += '<line x1="' + n1(x0 + 10 + fk * fw) + '" y1="' + (cy - 8) + '" x2="' + n1(x0 + 10 + fk * fw) + '" y2="' + (cy + 8) + '" stroke="' + AMB + '" stroke-width="1.6" stroke-opacity=".8"/>';
      return o + pinch;
    }
    if (id === 'copier') return '<line x1="' + x0 + '" y1="' + (cy - 4) + '" x2="' + x1 + '" y2="' + (cy - 4) + '" stroke="' + CY + '" stroke-width="2"/><line x1="' + x0 + '" y1="' + (cy + 4) + '" x2="' + x1 + '" y2="' + (cy + 4) + '" stroke="' + CY + '" stroke-width="2"/>' + pinch;
    o += '<line x1="' + x0 + '" y1="' + cy + '" x2="' + x1 + '" y2="' + cy + '" stroke="' + PINK + '" stroke-width="2.5" stroke-dasharray="3 9" stroke-linecap="round"/>';   // naps: a dotted, sleepy line
    [[-60, -9], [-20, 10], [34, -9], [70, 9]].forEach(function (z) { o += '<text x="' + (cx + z[0]) + '" y="' + (cy + z[1]) + '" fill="#ffd0dc" font-size="12" font-family="monospace">z</text>'; });
    return o + pinch;
  }
  function signalArt(id) {
    var o = '';
    if (!id) { for (var k = 0; k < 4; k++) { var q = pol(CG.r1 + 22 + k * 8, -62 + k * 14); o += '<circle class="emptydot" cx="' + n1(q[0]) + '" cy="' + n1(q[1]) + '" r="3"/>'; } return o; }
    if (id === 'radio') {
      var c = pol(CG.r1 + 2, -45);
      [24, 40, 56].forEach(function (rr, i) { var a0 = pol(CG.r1 + 2 + rr, -80 + i * 3), a1 = pol(CG.r1 + 2 + rr, -10 - i * 3); o += '<path d="M' + n1(a0[0]) + ' ' + n1(a0[1]) + ' A' + (CG.r1 + 2 + rr) + ' ' + (CG.r1 + 2 + rr) + ' 0 0 1 ' + n1(a1[0]) + ' ' + n1(a1[1]) + '" fill="none" stroke="' + CY + '" stroke-width="2" stroke-dasharray="2 6" stroke-linecap="round"/>'; });
      return o + '<polygon points="' + hexPts(c[0], c[1], 7, 0) + '" fill="#0a1f2b" stroke="' + CY + '" stroke-width="1.8"/>';
    }
    DOTS.forEach(function (d) { var p = pol(CG.r1 + 8 + d[1], d[0]); o += '<circle cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" r="3.4" fill="' + AMB + '"/>'; });
    return o;
  }
  function motorArt(id) {
    var a = pol(CG.r1, 140), t = pol(CG.r1 + 36, 140), o = '';
    if (!id) return '<circle class="emptydot" cx="' + n1(pol(CG.r1 + 4, 140)[0]) + '" cy="' + n1(pol(CG.r1 + 4, 140)[1]) + '" r="6"/>';
    if (id === 'pili') {   // short stiff threads fanned out, each ending in a hook
      for (var pi = 0; pi < 5; pi++) { var pa = pol(CG.r1, 118 + pi * 11), pb = pol(CG.r1 + 24 + (pi % 2) * 8, 118 + pi * 11); o += '<line x1="' + n1(pa[0]) + '" y1="' + n1(pa[1]) + '" x2="' + n1(pb[0]) + '" y2="' + n1(pb[1]) + '" stroke="' + AMB + '" stroke-width="2.6" stroke-linecap="round"/><circle cx="' + n1(pb[0]) + '" cy="' + n1(pb[1]) + '" r="2.8" fill="' + AMB + '"/>'; }
      return o;
    }
    o += '<path d="M' + n1(a[0]) + ' ' + n1(a[1]) + ' Q' + n1((a[0] + t[0]) / 2 - 12) + ' ' + n1((a[1] + t[1]) / 2 + 12) + ' ' + n1(t[0] - 14) + ' ' + n1(t[1] + 6) + ' T' + n1(t[0] - 40) + ' ' + n1(t[1] + 18) + '" fill="none" stroke="' + AMB + '" stroke-width="3" stroke-linecap="round"/>';
    return o;
  }
  function reflexArt(rf) {
    var p = pol(CG.r1, -135), o = '', rot = -45;
    if (!rf) return '<ellipse class="emptyring" cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" rx="15" ry="8" transform="rotate(' + rot + ' ' + n1(p[0]) + ' ' + n1(p[1]) + ')"/>';
    if (rf.kind === 'bio' && rf.id === 'nightferm') return '<ellipse cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" rx="16" ry="9" fill="#0b1740" stroke="#5a7bff" stroke-width="2.4" transform="rotate(' + rot + ' ' + n1(p[0]) + ' ' + n1(p[1]) + ')"/><circle cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" r="3.6" fill="#9db4ff"/>';
    if (rf.kind === 'machine' && rf.sensor === 'temp') { var ha = (rf.action === 'cooler' ? 150 : -60) * Math.PI / 180; return '<polygon points="' + hexPts(p[0], p[1], 14, 0) + '" fill="#0a1f2b" stroke="' + CY + '" stroke-width="2.4"/><line x1="' + n1(p[0]) + '" y1="' + n1(p[1]) + '" x2="' + n1(p[0] + Math.cos(ha) * 10) + '" y2="' + n1(p[1] + Math.sin(ha) * 10) + '" stroke="' + AMB + '" stroke-width="2.4" stroke-linecap="round"/><circle cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" r="2.6" fill="' + CY + '"/>'; }
    if (rf.kind === 'machine') return '<polygon points="' + hexPts(p[0], p[1], 14, 0) + '" fill="#0a1f2b" stroke="' + CY + '" stroke-width="2.4"/><circle cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" r="4.5" fill="' + CY + '"/>';
    return '<ellipse cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" rx="16" ry="9" fill="#12372e" stroke="' + GRN + '" stroke-width="2.4" transform="rotate(' + rot + ' ' + n1(p[0]) + ' ' + n1(p[1]) + ')"/><circle cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" r="3.6" fill="' + GRN + '"/>';
  }
  var HL = {
    insides: function () { return '<circle class="hl" cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + CG.rf + '"/>'; },
    division: function () { return '<rect class="hl" x="' + (CG.cx - CG.r1 - 12) + '" y="' + (CG.cy - 11) + '" width="' + (2 * CG.r1 + 24) + '" height="22" rx="11"/>'; },
    power: function () { return '<circle class="hl" cx="' + CG.cx + '" cy="' + CG.cy + '" r="40"/>'; },
    envelope: function () { return '<circle class="hl ring" cx="' + CG.cx + '" cy="' + CG.cy + '" r="' + ((CG.r1 + CG.r2) / 2) + '" stroke-width="' + (CG.r1 - CG.r2 + 22) + '"/>'; },
    signal: function () { var p = ANCHOR.signal; return '<ellipse class="hl" cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" rx="48" ry="34" transform="rotate(45 ' + n1(p[0]) + ' ' + n1(p[1]) + ')"/>'; },
    motor: function () { var p = ANCHOR.motor; return '<circle class="hl" cx="' + n1(p[0] - 8) + '" cy="' + n1(p[1] + 6) + '" r="30"/>'; },
    reflex: function () { var p = ANCHOR.reflex; return '<circle class="hl" cx="' + n1(p[0]) + '" cy="' + n1(p[1]) + '" r="24"/>'; }
  };
  // slots: LookAlive.toSlots(build). o: { state: {slot: 'open'|'factory'|'locked'}, sel: slotId, nw: [slotIds], ghost: slotId, ghostSlots: toSlots(preview) }.
  function cellArt(slots, o) {
    o = o || {}; var st = o.state || {}, nw = o.nw || [];
    function g(k, art) {
      var s = (o.ghost === k && o.ghostSlots) ? o.ghostSlots : slots, cls = 'slotg s-' + k + (o.sel === k ? ' sel' : '') + (nw.indexOf(k) >= 0 ? ' new' : '') + (st[k] === 'factory' ? ' factory' : st[k] === 'locked' ? ' locked' : '') + (o.ghost === k ? ' ghost' : '') + (o.fix && o.fix.indexOf(k) >= 0 ? ' fix' : '');
      return '<g class="' + cls + '" data-slot="' + k + '">' + HL[k]() + '<g class="art">' + art(s) + '</g></g>';
    }
    return '<defs><radialGradient id="coreGlow"><stop offset="0" stop-color="#ff6b95" stop-opacity=".55"/><stop offset="1" stop-color="#ff6b95" stop-opacity="0"/></radialGradient></defs>' +
      g('insides', function (s) { return insidesArt(s.insides); }) + g('division', function (s) { return divisionArt(s.division); }) + g('power', function (s) { return powerArt(s.power); }) +
      g('envelope', function (s) { return envelopeArt(s.envelope); }) + g('signal', function (s) { return signalArt(s.signal); }) + g('motor', function (s) { return motorArt(s.motor); }) + g('reflex', function (s) { return reflexArt(s.reflex); });
  }

  return { cellArt: cellArt, lightMarks: lightMarks, lightSpot: lightSpot, ANCHOR: ANCHOR, CG: CG, VIO: VIO, PINK: PINK, AMB: AMB, GRN: GRN, CY: CY, RED: RED, CH: CH, MACH: MACH, fit: fit, pattern: pattern, drawCells: drawCells, chart: chart, ribbon: ribbon, foodStrip: foodStrip, portrait: portrait, hash: hash };
})();

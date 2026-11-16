// Look Alive prototype: canvas drawing helpers. Flat 2D only. Global LAD. No DOM state lives here.
var LAD = (function () {
  'use strict';
  var VIO = '#a78bfa', PINK = '#ff6b95', AMB = '#f5a524', GRN = '#2dd4a7', CY = '#5fd0ff', RED = '#ff5d6c';
  // Four suspicion channels: each has its own colour AND pattern, so they never rely on colour alone.
  var CH = [
    { id: 'growth', name: 'Growth', color: PINK, pat: 'stripes' },
    { id: 'waste', name: 'Waste', color: AMB, pat: 'dots' },
    { id: 'casualties', name: 'Casualties', color: VIO, pat: 'cross' },
    { id: 'regularity', name: 'Regularity', color: CY, pat: 'zigzag' }
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
      else if (kind === 'cross') { g.lineWidth = 1.5; g.beginPath(); g.moveTo(-1, 11); g.lineTo(11, -1); g.moveTo(-1, -1); g.lineTo(11, 11); g.stroke(); }
      else { g.lineWidth = 1.6; g.beginPath(); g.moveTo(0, 7); g.lineTo(2.5, 2); g.lineTo(5, 7); g.lineTo(7.5, 2); g.lineTo(10, 7); g.stroke(); }
      pats[key] = t;
    }
    return ctx.createPattern(pats[key], 'repeat');
  }

  // ---------------------------------------------------------------- the dish
  var off = null, offCtx = null, img = null, SUB = 3;
  function rnd(x, y, s) { var h = Math.imul(x, 374761393) + Math.imul(y, 668265263) + s; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
  // The dish: every field cell becomes SUB x SUB specks, lit with probability set by that cell's density, so cells read as a dark-field speckle.
  function drawDish(c, A, B, f, opt) {
    var v = fit(c); if (!v) return;
    var ctx = v.ctx, n = opt.n, m = n * SUB;
    if (!off || off.width !== m) { off = document.createElement('canvas'); off.width = off.height = m; offCtx = off.getContext('2d'); img = offCtx.createImageData(m, m); }
    var d = img.data, x, y, o, i;
    var An = A.native, Ar = A.robot, Aw = A.waste, Af = A.food;
    var Bn = B ? B.native : An, Br = B ? B.robot : Ar, Bw = B ? B.waste : Aw, Bf = B ? B.food : Af;
    var stage = opt.stage || 0, kill = opt.kill || 0, tm = opt.time || 0, nd = opt.nativeScale || 1;
    var gAmt = stage >= 1 ? (0.3 + 0.2 * stage) * (0.7 + 0.3 * Math.sin(tm * 5)) : 0;
    if (kill > 0.002) gAmt += Math.min(0.5, kill * 6);
    for (y = 0; y < m; y++) {
      for (x = 0; x < m; x++) {
        i = ((y / SUB) | 0) * n + ((x / SUB) | 0); o = (y * m + x) * 4;
        var nat = (An[i] + (Bn[i] - An[i]) * f) * nd, rob = Ar[i] + (Br[i] - Ar[i]) * f, wa = Aw[i] + (Bw[i] - Aw[i]) * f, fo = Af[i] + (Bf[i] - Af[i]) * f;
        var r = 0, g = 0, b = 0, k;
        // faint chemistry wash: food (blue-grey) and waste (amber)
        k = Math.min(1, wa * 1.6) * 0.20; r += 245 * k; g += 165 * k; b += 36 * k;
        k = Math.min(1, fo) * 0.07; g += 90 * k; b += 100 * k;
        var q = rnd(x, y, 11), q2 = rnd(x, y, 97);
        if (q < nat * 0.2) { k = 0.55 + 0.45 * q2; r += 167 * k; g += 139 * k; b += 250 * k; }
        if (q2 < rob * 5) {
          k = 0.8 + 0.2 * q; var gm = rnd(x, y, 5) < gAmt * 0.55 ? 1 : 0;
          r = (255 * (1 - gm) + 45 * gm) * k; g = (107 * (1 - gm) + 212 * gm) * k; b = (149 * (1 - gm) + 167 * gm) * k;
        }
        d[o] = r > 255 ? 255 : r; d[o + 1] = g > 255 ? 255 : g; d[o + 2] = b > 255 ? 255 : b; d[o + 3] = 255;
      }
    }
    offCtx.putImageData(img, 0, 0);
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, v.w, v.h);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(off, 0, 0, v.w, v.h);
    var gr = ctx.createRadialGradient(v.w / 2, v.h / 2, v.w * 0.40, v.w / 2, v.h / 2, v.w * 0.5);
    gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,.85)');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, v.w, v.h);
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
    (o.yTicks || []).forEach(function (yv) { var y = Math.round(Y(yv)) + .5; ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(L + pw, y); ctx.stroke(); ctx.fillText(o.yFmt ? o.yFmt(yv) : yv, L - 4, y); });
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (var tt = 0; tt <= o.T; tt += o.T > 150 ? 50 : 20) { ctx.fillText(tt, X(tt), T + ph + 2); }
    if (o.bands) o.bands.forEach(function (bd) {
      ctx.fillStyle = bd.fill; ctx.fillRect(L, Y(bd.hi), pw, Y(bd.lo) - Y(bd.hi));
      ctx.strokeStyle = bd.line; ctx.setLineDash([4, 3]); ctx.beginPath();
      ctx.moveTo(L, Y(bd.hi)); ctx.lineTo(L + pw, Y(bd.hi)); ctx.moveTo(L, Y(bd.lo)); ctx.lineTo(L + pw, Y(bd.lo)); ctx.stroke(); ctx.setLineDash([]);
      if (bd.label) { ctx.fillStyle = bd.line; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText(bd.label, L + 4, Y(bd.hi) - 1); }
    });
    if (o.hlines) o.hlines.forEach(function (h) {
      ctx.strokeStyle = h.color; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.moveTo(L, Y(h.y)); ctx.lineTo(L + pw, Y(h.y)); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = h.color; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText(h.label, L + 4, Y(h.y) - 1);
    });
    if (o.vmarks) o.vmarks.forEach(function (m) {
      ctx.strokeStyle = m.color; ctx.setLineDash(m.dash || []); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(Math.round(X(m.t)) + .5, T); ctx.lineTo(Math.round(X(m.t)) + .5, T + ph); ctx.stroke(); ctx.setLineDash([]);
      if (m.label) { ctx.fillStyle = m.color; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText(m.label, X(m.t) + 3, T + 2); }
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

  // ---------------------------------------------------------------- COVER gauge and the four channel needles
  function coverX(h) { // 0..1 along the gauge: 0 Too Alien, 0.5 safe, 1 Too Perfect
    var alien = h.growth + h.waste + h.casualties, reg = h.regularity;
    var x = 0.5 + 0.5 * Math.max(-1, Math.min(1, (reg - alien) / 9));
    return x;  // Too Alien on the left: more alien suspicion moves the needle left, Regularity moves it right
  }
  function instruments(c, vals) {
    var v = fit(c); if (!v) return;
    var ctx = v.ctx, W = v.w, H = v.h; ctx.clearRect(0, 0, W, H);
    var gx = 8, gw = W - 16, gy = 30, gh = 18;
    ctx.font = '600 11px ui-monospace, Menlo, monospace'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#8a90a8'; ctx.textAlign = 'center'; ctx.fillText('COVER', W / 2, 12);
    ctx.textAlign = 'left'; ctx.fillStyle = '#ff9ab5'; ctx.fillText('TOO ALIEN', gx, 12);
    ctx.textAlign = 'right'; ctx.fillStyle = '#8fd8f5'; ctx.fillText('TOO PERFECT', gx + gw, 12);
    // zones: danger | warning | safe | warning | danger. Safe width = 1.5 of 9 each side of centre.
    var half = gw / 2, safe = half * (1.5 / 9), warn = half * (4.5 / 9);
    function zone(x0, x1, col) { ctx.fillStyle = col; ctx.fillRect(x0, gy, x1 - x0, gh); }
    var cx = gx + half;
    zone(gx, cx - warn, '#4a1a28'); zone(cx - warn, cx - safe, '#3a2a22'); zone(cx - safe, cx + safe, '#1d2f3a'); zone(cx + safe, cx + warn, '#223038'); zone(cx + warn, gx + gw, '#16384a');
    ctx.strokeStyle = '#cfe3ff'; ctx.lineWidth = 1.5; ctx.strokeRect(cx - safe + .5, gy + .5, safe * 2 - 1, gh - 1);
    ctx.fillStyle = '#cfe3ff'; ctx.textAlign = 'center'; ctx.font = '10px ui-monospace, Menlo, monospace'; ctx.fillText('SAFE', cx, gy + gh + 11);
    ctx.strokeStyle = '#2a2f42'; ctx.lineWidth = 1; ctx.strokeRect(gx + .5, gy + .5, gw - 1, gh - 1);
    var px = gx + gw * coverX(vals);
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(px, gy - 2); ctx.lineTo(px - 6, gy - 11); ctx.lineTo(px + 6, gy - 11); ctx.closePath(); ctx.fill();
    ctx.fillRect(px - 1, gy - 2, 2, gh + 4);
    // four needles
    var top = gy + gh + 22, cw = W / 4, R = Math.min(cw / 2 - 12, (H - top - 30));
    for (var k = 0; k < 4; k++) {
      var ch = CH[k], val = vals[ch.id], frac = Math.max(0, Math.min(1, val / 8));
      var cxk = cw * k + cw / 2, cyk = top + R + 4;
      ctx.lineWidth = 9; ctx.lineCap = 'butt';
      ctx.strokeStyle = '#161a27'; ctx.beginPath(); ctx.arc(cxk, cyk, R, Math.PI, 2 * Math.PI); ctx.stroke();
      if (frac > 0.005) { ctx.strokeStyle = pattern(ctx, ch.pat, ch.color); ctx.beginPath(); ctx.arc(cxk, cyk, R, Math.PI, Math.PI + Math.PI * frac); ctx.stroke(); }
      ctx.lineWidth = 1.5; ctx.strokeStyle = ch.color; ctx.beginPath(); ctx.arc(cxk, cyk, R + 5.5, Math.PI, Math.PI + Math.PI * frac); ctx.stroke();
      // stage ticks at 1.5, 4.5, 8 of 8
      ctx.strokeStyle = '#444b63'; ctx.lineWidth = 1;
      [1.5, 4.5].forEach(function (s) { var a = Math.PI + Math.PI * s / 8; ctx.beginPath(); ctx.moveTo(cxk + Math.cos(a) * (R - 7), cyk + Math.sin(a) * (R - 7)); ctx.lineTo(cxk + Math.cos(a) * (R + 7), cyk + Math.sin(a) * (R + 7)); ctx.stroke(); });
      var a2 = Math.PI + Math.PI * frac;
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(cxk, cyk); ctx.lineTo(cxk + Math.cos(a2) * (R - 3), cyk + Math.sin(a2) * (R - 3)); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(cxk, cyk, 3.5, 0, 7); ctx.fill();
      ctx.fillStyle = pattern(ctx, ch.pat, ch.color); ctx.fillRect(cxk - 46, cyk + 9, 12, 10);
      ctx.strokeStyle = ch.color; ctx.lineWidth = 1; ctx.strokeRect(cxk - 45.5, cyk + 9.5, 11, 9);
      ctx.fillStyle = '#e6e9f4'; ctx.font = '11px ui-sans-serif, system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.fillText(ch.name, cxk - 31, cyk + 18);
      ctx.fillStyle = '#8a90a8'; ctx.font = '10px ui-monospace, Menlo, monospace'; ctx.textAlign = 'right'; ctx.fillText(val.toFixed(1), cxk + 46, cyk + 18);
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
      var odd = parts.indexOf('errors') >= 0 && q.odd > 0.75;
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

  return { VIO: VIO, PINK: PINK, AMB: AMB, GRN: GRN, CY: CY, RED: RED, CH: CH, MACH: MACH, fit: fit, pattern: pattern, drawDish: drawDish, chart: chart, ribbon: ribbon, instruments: instruments, portrait: portrait, hash: hash };
})();

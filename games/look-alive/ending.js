// Look Alive: the picture for the ending, drawn in code. Plain script (file:// safe), no libraries.
// Slides 1-3: a dark dish with soft dots drifting. Slide 4: the camera pulls back to show the dots are a tiny patch on a large,
// slowly turning sphere of green cells (Volvox-like). Slide 5: the creature alone. No face, eyes, mouth or organs.
(function () {
  var TAU = Math.PI * 2, ZMAX = 10, N = 340, PULL_MS = 3000;

  function create(canvas, reduced) {
    var ctx = canvas.getContext('2d'), W = 0, H = 0, dpr = 1;
    var slide = 0, running = false, raf = 0, t0 = 0, slideT0 = 0, last = 0, spin = 0.6;
    var cells = [], links = [], daughters = [], dots = [], i, j;

    // Cells spread evenly over a sphere (golden spiral), with faint lines to the nearest neighbours.
    for (i = 0; i < N; i++) {
      var y = 1 - 2 * (i + 0.5) / N, r = Math.sqrt(1 - y * y), a = i * 2.399963;
      cells.push([Math.cos(a) * r, y, Math.sin(a) * r]);
    }
    for (i = 0; i < N; i++) {
      var near = [];
      for (j = 0; j < N; j++) {
        if (j === i) continue;
        var dx = cells[i][0] - cells[j][0], dy = cells[i][1] - cells[j][1], dz = cells[i][2] - cells[j][2];
        near.push([dx * dx + dy * dy + dz * dz, j]);
      }
      near.sort(function (p, q) { return p[0] - q[0]; });
      for (j = 0; j < 3; j++) if (near[j][1] > i) links.push([i, near[j][1]]);
    }
    // Daughter spheres inside: a ring of small dark cells each.
    var DP = [[-0.30, 0.10, 0.12, 0.20], [0.26, -0.18, -0.05, 0.17], [0.02, 0.30, -0.25, 0.15], [-0.05, -0.30, 0.22, 0.13]];
    DP.forEach(function (d, k) {
      var pts = [], n = 36;
      for (i = 0; i < n; i++) { var yy = 1 - 2 * (i + 0.5) / n, rr = Math.sqrt(1 - yy * yy), aa = i * 2.399963 + k; pts.push([Math.cos(aa) * rr, yy, Math.sin(aa) * rr]); }
      daughters.push({ c: d, pts: pts, ph: k * 1.7 });
    });
    // Dish dots, in dish pixels around the centre of the view (positions wrap inside the dish disc).
    var seed = 7; function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    for (i = 0; i < 70; i++) {
      var ang = rnd() * TAU, rad = Math.sqrt(rnd()) * 0.5;
      dots.push({ x: Math.cos(ang) * rad, y: Math.sin(ang) * rad, vx: (rnd() - 0.5) * 0.012, vy: (rnd() - 0.5) * 0.012, r: 0.012 + rnd() * 0.018, hue: rnd() < 0.55 ? 0 : 1, ph: rnd() * TAU });
    }

    function size() {
      var w = canvas.clientWidth || 640, h = canvas.clientHeight || 360, d = Math.min(window.devicePixelRatio || 1, 2);
      if (w !== W || h !== H || d !== dpr) { W = w; H = h; dpr = d; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); }
    }
    function ease(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
    function smooth(a, b, x) { return ease((x - a) / (b - a)); }

    // p: pull-back progress 0 (looking into the dish) to 1 (the whole creature). time in seconds; spin angle in radians.
    function draw(p, time, ang) {
      size();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#02030a'; ctx.fillRect(0, 0, W, H);
      var m = Math.min(W, H), R = m * 0.4, cx = W / 2, cy = H / 2;
      var e = ease(p), z = Math.pow(ZMAX, 1 - e), k = (z - 1) / (ZMAX - 1);
      // Where the dish sits on the creature (its front, a little off-centre), in final-scale pixels.
      var fx = R * 0.28, fy = -R * 0.2;

      // The creature fades in once the pull-back is under way.
      var ca = p >= 1 ? 1 : smooth(0.12, 0.62, p);
      if (ca > 0.01) drawCreature(R, z, k, fx, fy, cx, cy, ca, ang);

      // The dish: a dark disc with drifting dots, scaled with the camera so it ends as a tiny patch.
      var da = p >= 1 ? 0 : 1 - smooth(0.72, 0.95, p);
      if (da > 0.01) {
        var dr = m * 0.46, ds = 1 / ZMAX;   // dish coordinates -> creature pixels: fx + d * ds
        var scale = ds * z, ox = cx + (fx - fx * k) * z, oy = cy + (fy - fy * k) * z;
        ctx.save(); ctx.globalAlpha = da;
        ctx.beginPath(); ctx.arc(ox, oy, dr * scale, 0, TAU); ctx.fillStyle = '#05060f'; ctx.fill();
        ctx.lineWidth = Math.max(1, 3 * scale); ctx.strokeStyle = 'rgba(120,100,230,.35)'; ctx.stroke();
        ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(160,140,255,.12)'; ctx.beginPath(); ctx.arc(ox, oy, dr * scale * 0.93, 0, TAU); ctx.stroke();
        ctx.beginPath(); ctx.arc(ox, oy, dr * scale - 1, 0, TAU); ctx.clip();
        dots.forEach(function (d) {
          var px = d.x * m, py = d.y * m;
          if (!reduced) { px += Math.sin(time * 0.35 + d.ph) * m * 0.03 + d.vx * m * 4 * Math.sin(time * 0.2); py += Math.cos(time * 0.3 + d.ph * 1.3) * m * 0.03 + d.vy * m * 4 * Math.cos(time * 0.2); }
          // keep drifting dots inside the dish
          var lim = dr * 0.9, len = Math.sqrt(px * px + py * py); if (len > lim) { px *= lim / len; py *= lim / len; }
          var sx = ox + px * scale, sy = oy + py * scale, rr = d.r * m * scale;
          var col = d.hue ? '167,139,250' : '255,107,149';
          var g = ctx.createRadialGradient(sx, sy, 0, sx, sy, rr * 2.4);
          g.addColorStop(0, 'rgba(' + col + ',.85)'); g.addColorStop(0.45, 'rgba(' + col + ',.35)'); g.addColorStop(1, 'rgba(' + col + ',0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(sx, sy, rr * 2.4, 0, TAU); ctx.fill();
        });
        ctx.restore();
      }
    }

    function drawCreature(R, z, k, fx, fy, cx, cy, alpha, ang) {
      var s = R * z, ox = cx + (0 - fx * k) * z, oy = cy + (0 - fy * k) * z;
      var ca = Math.cos(ang), sa = Math.sin(ang), tilt = 0.35, ct = Math.cos(tilt), st = Math.sin(tilt);
      function rot(v) {   // spin about the vertical axis, then tip toward the viewer
        var x = v[0] * ca + v[2] * sa, zz = -v[0] * sa + v[2] * ca, y = v[1] * ct - zz * st, z2 = v[1] * st + zz * ct;
        return [x, y, z2];
      }
      ctx.save(); ctx.globalAlpha = alpha;
      // The thin translucent shell.
      var g = ctx.createRadialGradient(ox - s * 0.25, oy - s * 0.3, s * 0.1, ox, oy, s);
      g.addColorStop(0, 'rgba(70,200,150,.05)'); g.addColorStop(0.85, 'rgba(45,212,167,.07)'); g.addColorStop(1, 'rgba(45,212,167,.22)');
      ctx.beginPath(); ctx.arc(ox, oy, s, 0, TAU); ctx.fillStyle = g; ctx.fill();
      ctx.lineWidth = Math.max(1, s * 0.012); ctx.strokeStyle = 'rgba(120,235,200,.35)'; ctx.stroke();
      var pr = cells.map(rot), cr = Math.max(1.2, R * 0.017) * Math.min(z, 3);
      // Back-facing cells, dimmer.
      var q, v;
      for (q = 0; q < N; q++) { v = pr[q]; if (v[2] < 0) cell(ox + v[0] * s, oy + v[1] * s, cr * 0.8, 0.16 + 0.2 * (v[2] + 1)); }
      // Daughter spheres inside (dark green), slowly orbiting.
      daughters.forEach(function (d) {
        var c = rot([d.c[0] * 0.9, d.c[1], d.c[2] * 0.9]), dx = ox + c[0] * s, dy = oy + c[1] * s, ds = d.c[3] * s;
        var gg = ctx.createRadialGradient(dx, dy, 0, dx, dy, ds);
        gg.addColorStop(0, 'rgba(18,90,66,.10)'); gg.addColorStop(1, 'rgba(18,110,80,.30)');
        ctx.beginPath(); ctx.arc(dx, dy, ds, 0, TAU); ctx.fillStyle = gg; ctx.fill();
        ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(40,170,125,.35)'; ctx.stroke();
        for (q = 0; q < d.pts.length; q++) {
          var u = d.pts[q], a2 = ang * 1.6 + d.ph, uu = [u[0] * Math.cos(a2) + u[2] * Math.sin(a2), u[1], -u[0] * Math.sin(a2) + u[2] * Math.cos(a2)];
          var w = rot(uu), wa = 0.25 + 0.3 * (w[2] + 1) / 2; if (w[2] < -0.2) wa *= 0.5;
          ctx.fillStyle = 'rgba(32,140,104,' + wa + ')'; ctx.beginPath(); ctx.arc(dx + w[0] * ds * 0.98, dy + w[1] * ds * 0.98, Math.max(0.9, cr * 0.55), 0, TAU); ctx.fill();
        }
      });
      // Faint lines joining neighbouring cells.
      ctx.lineWidth = 1; ctx.beginPath();
      for (q = 0; q < links.length; q++) {
        var a = pr[links[q][0]], b = pr[links[q][1]];
        if (a[2] < 0 && b[2] < 0) continue;
        ctx.moveTo(ox + a[0] * s, oy + a[1] * s); ctx.lineTo(ox + b[0] * s, oy + b[1] * s);
      }
      ctx.strokeStyle = 'rgba(110,230,190,.13)'; ctx.stroke();
      // Front-facing cells, brighter.
      for (q = 0; q < N; q++) { v = pr[q]; if (v[2] >= 0) cell(ox + v[0] * s, oy + v[1] * s, cr, 0.45 + 0.55 * v[2]); }
      ctx.restore();
    }
    function cell(x, y, r, a) {
      ctx.fillStyle = 'rgba(70,225,170,' + a.toFixed(3) + ')'; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
    }

    function pullP(now) { if (slide < 3) return 0; if (slide > 3 || reduced) return 1; return Math.min(1, (now - slideT0) / PULL_MS); }
    function frame(now) {
      if (!running) return;
      var dt = last ? Math.min(0.1, (now - last) / 1000) : 0; last = now;
      if (!reduced) spin += dt * 0.28;
      draw(pullP(now), (now - t0) / 1000, spin);
      raf = requestAnimationFrame(frame);
    }
    function still() { draw(pullP(performance.now()), 0, spin); }

    return {
      setSlide: function (n) { slide = n; slideT0 = performance.now(); if (reduced || !running) still(); },
      start: function () { if (running) return; running = true; t0 = performance.now(); last = 0; if (reduced) still(); else raf = requestAnimationFrame(frame); },
      stop: function () { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; },
      redraw: function () { if (!running || reduced) still(); },
      progress: function () { return pullP(performance.now()); },
      running: function () { return running; }
    };
  }
  window.LookAliveEnding = { create: create };
})();

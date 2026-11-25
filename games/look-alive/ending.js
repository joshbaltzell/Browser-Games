// Look Alive: the picture for the ending. Plain script (file:// safe), no libraries.
// Each slide shows a painted image (assets/ending/) with a slow drift. Slide 4 starts close in on the creature's body,
// where it looks like a crowd of cells, and pulls back to show the whole many-celled creature (a Hydra-like polyp).
// Slide 5 shows several of them far off: the next study. Under reduced motion every slide is a still frame.
(function () {
  var PULL_MS = 4000, FADE_MS = 500;
  var SRC = ['assets/ending/end-1.jpg', 'assets/ending/end-2.jpg', 'assets/ending/end-3.jpg', 'assets/ending/end-4.jpg', 'assets/ending/end-5.jpg'];
  var FOCUS = [0.56, 0.62];   // where the pull-back starts, as a share of the creature image (on its body, among the cells)
  var ZOOM = 3.5;

  function create(canvas, reduced) {
    var ctx = canvas.getContext('2d'), W = 0, H = 0, dpr = 1;
    var slide = 0, prev = -1, running = false, raf = 0, slideT0 = 0, imgs = {};
    SRC.forEach(function (s) { if (!imgs[s]) { var im = new Image(); im.onload = function () { if (!running || reduced) still(); }; im.src = s; imgs[s] = im; } });

    function size() {
      var w = canvas.clientWidth || 640, h = canvas.clientHeight || 360, d = Math.min(window.devicePixelRatio || 1, 2);
      if (w !== W || h !== H || d !== dpr) { W = w; H = h; dpr = d; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); }
    }
    function ease(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
    function pullP(now) { if (slide < 3) return 0; if (slide > 3 || reduced) return 1; return Math.min(1, (now - slideT0) / PULL_MS); }

    // Draws slide n's image covering the canvas, at zoom z centred on (fx, fy) of the image, with alpha a.
    function paint(n, z, fx, fy, a) {
      var im = imgs[SRC[n]]; if (!im || !im.complete || !im.naturalWidth) return;
      var s = Math.max(W / im.naturalWidth, H / im.naturalHeight) * z, iw = im.naturalWidth * s, ih = im.naturalHeight * s;
      var x = W / 2 - fx * iw, y = H / 2 - fy * ih;
      x = Math.min(0, Math.max(W - iw, x)); y = Math.min(0, Math.max(H - ih, y));   // never show past the image's edge
      ctx.globalAlpha = a; ctx.drawImage(im, x, y, iw, ih); ctx.globalAlpha = 1;
    }
    // The view for slide n at time t (seconds on the slide): a slow drift, or the pull-back on slide 4.
    function view(n, t, now) {
      if (n === 3) { var p = ease(pullP(now)); return [1 + (ZOOM - 1) * (1 - p), FOCUS[0] + (0.5 - FOCUS[0]) * p, FOCUS[1] + (0.5 - FOCUS[1]) * p]; }
      var d = reduced ? 0 : Math.min(1, t / 20);
      return [1.04 + 0.05 * d, 0.5 + (n % 2 ? -0.02 : 0.02) * d, 0.5];
    }
    function draw(now) {
      size(); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#05040c'; ctx.fillRect(0, 0, W, H);
      var t = (now - slideT0) / 1000, f = reduced ? 1 : Math.min(1, (now - slideT0) / FADE_MS), v;
      if (prev >= 0 && f < 1) { v = view(prev, t + 20, now); paint(prev, v[0], v[1], v[2], 1); }
      v = view(slide, t, now); paint(slide, v[0], v[1], v[2], f);
    }
    function frame(now) { if (!running) return; draw(now); raf = requestAnimationFrame(frame); }
    function still() { draw(performance.now()); }

    return {
      setSlide: function (n) { if (n !== slide) prev = slide; slide = n; slideT0 = performance.now(); if (reduced || !running) still(); },
      start: function () { if (running) return; running = true; prev = -1; if (reduced) still(); else raf = requestAnimationFrame(frame); },
      stop: function () { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; },
      redraw: function () { if (!running || reduced) still(); },
      progress: function () { return pullP(performance.now()); },
      running: function () { return running; }
    };
  }
  window.LookAliveEnding = { create: create };
})();

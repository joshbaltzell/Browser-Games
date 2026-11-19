// Kit: small shared helpers for the prototype games. Classic script, one global: Kit.
// Loads with no window in Node (DOM parts are guarded) so dev/check.js can test it.
var Kit = (function () {
  'use strict';
  var HAS_DOM = typeof window !== 'undefined' && typeof document !== 'undefined';
  var K = {};

  // ===== K1: core =====================================================

  // mulberry32 (same generator as neon-gauntlet)
  K.rng = function (seed) {
    seed = seed | 0;
    return function () {
      seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  };

  // FNV-1a, 32 bit, unsigned
  K.hash = function (str) {
    var h = 0x811c9dc5;
    str = String(str);
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  };

  // Whole local days since 2026-01-01
  K.dailySeed = function (date) {
    var d = date || new Date();
    return Math.round((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(2026, 0, 1)) / 86400000);
  };

  K.store = {
    get: function (key, fallback) {
      try {
        var raw = localStorage.getItem(key);
        return raw === null || raw === undefined ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
    }
  };

  // Letterbox a w x h world into the window. Returns a live view object.
  K.fit = function (canvas, w, h) {
    var view = { scale: 1, offX: 0, offY: 0, dpr: 1, w: w, h: h };
    function resize() {
      if (!HAS_DOM) return;
      var cw = window.innerWidth, ch = window.innerHeight;
      var dpr = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = Math.round(cw * dpr); canvas.height = Math.round(ch * dpr);
      canvas.style.width = cw + 'px'; canvas.style.height = ch + 'px';
      view.dpr = dpr;
      view.scale = Math.min(cw / w, ch / h);
      view.offX = (cw - w * view.scale) / 2;
      view.offY = (ch - h * view.scale) / 2;
    }
    // Set the context so you draw in world units (0..w, 0..h)
    view.apply = function (ctx) {
      ctx.setTransform(view.dpr * view.scale, 0, 0, view.dpr * view.scale, view.dpr * view.offX, view.dpr * view.offY);
    };
    // Clear the whole canvas, bars included (identity transform)
    view.clear = function (ctx) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); };
    view.toWorld = function (clientX, clientY) {
      var r = canvas.getBoundingClientRect();
      return { x: (clientX - r.left - view.offX) / view.scale, y: (clientY - r.top - view.offY) / view.scale };
    };
    resize();
    if (HAS_DOM) window.addEventListener('resize', resize);
    canvas._kitView = view;
    return view;
  };

  // Mouse and touch through pointer events. Callbacks get (worldX, worldY, event).
  K.pointer = function (canvas, h) {
    h = h || {};
    var view = canvas._kitView;
    canvas.style.touchAction = 'none';
    function pos(e) {
      if (view) return view.toWorld(e.clientX, e.clientY);
      var r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    canvas.addEventListener('pointerdown', function (e) {
      K.audio.unlock(); // the first tap unlocks audio and still does its normal action
      try { canvas.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ }
      var p = pos(e); if (h.down) h.down(p.x, p.y, e);
    });
    canvas.addEventListener('pointermove', function (e) { var p = pos(e); if (h.move) h.move(p.x, p.y, e); });
    function up(e) { var p = pos(e); if (h.up) h.up(p.x, p.y, e); }
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
  };

  // ----- easing and tweens
  var C1 = 1.70158, C3 = C1 + 1, C4 = (2 * Math.PI) / 3;
  K.ease = {
    linear: function (p) { return p; },
    outQuad: function (p) { return 1 - (1 - p) * (1 - p); },
    inOutSine: function (p) { return (1 - Math.cos(Math.PI * p)) / 2; },
    outBack: function (p) { return 1 + C3 * Math.pow(p - 1, 3) + C1 * Math.pow(p - 1, 2); },
    outElastic: function (p) { return p === 0 ? 0 : p === 1 ? 1 : Math.pow(2, -10 * p) * Math.sin((p * 10 - 0.75) * C4) + 1; }
  };

  var tweens = [];
  // Tween numeric props of obj to the targets in props. Returns a handle: {cancel(), done, onDone}
  K.tween = function (obj, props, ms, easeName) {
    var from = {};
    for (var k in props) from[k] = obj[k];
    var tw = {
      done: false, onDone: null, t: 0, ms: Math.max(1, ms || 1),
      ease: typeof easeName === 'function' ? easeName : (K.ease[easeName] || K.ease.linear),
      cancel: function () { tw.done = true; }
    };
    tw.step = function (dt) {
      tw.t += dt;
      var p = Math.min(1, tw.t / tw.ms), e = tw.ease(p);
      for (var k in props) obj[k] = p >= 1 ? props[k] : from[k] + (props[k] - from[k]) * e;
      if (p >= 1) { tw.done = true; if (tw.onDone) tw.onDone(); }
    };
    tweens.push(tw);
    return tw;
  };

  // ----- particles and shake
  var parts = [], shakeState = { mag: 0, ms: 0, t: 0 };
  K.burst = function (x, y, o) {
    o = o || {};
    var n = o.n != null ? o.n : 12, speed = o.speed != null ? o.speed : 180, life = o.life != null ? o.life : 600;
    for (var i = 0; i < n; i++) {
      if (parts.length > 600) parts.shift();
      var a = Math.random() * Math.PI * 2, s = speed * (0.4 + Math.random() * 0.6);
      parts.push({
        x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
        life: life * (0.6 + Math.random() * 0.4), max: life,
        size: (o.size != null ? o.size : 4) * (0.6 + Math.random() * 0.6),
        g: o.gravity != null ? o.gravity : 400, color: o.color || '#ffffff'
      });
    }
  };
  K.drawParticles = function (ctx) {
    ctx.save();
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life / p.max));
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  };
  K.shake = function (mag, ms) {
    if (mag >= shakeState.mag * (shakeState.t / (shakeState.ms || 1))) { shakeState.mag = mag; shakeState.ms = ms; shakeState.t = ms; }
  };
  // Call inside ctx.save()/restore(), after the view transform, before drawing the world
  K.applyShake = function (ctx) {
    if (shakeState.t <= 0) return;
    var m = shakeState.mag * (shakeState.t / shakeState.ms);
    ctx.translate((Math.random() * 2 - 1) * m, (Math.random() * 2 - 1) * m);
  };

  // Advance tweens, particles and shake. Kit.boot calls this for you.
  K.update = function (dtMs) {
    for (var i = tweens.length - 1; i >= 0; i--) {
      var tw = tweens[i];
      if (tw.done) { tweens.splice(i, 1); continue; }
      tw.step(dtMs);
      if (tw.done) tweens.splice(i, 1);
    }
    var dt = dtMs / 1000;
    for (var j = parts.length - 1; j >= 0; j--) {
      var p = parts[j];
      p.life -= dtMs;
      if (p.life <= 0) { parts.splice(j, 1); continue; }
      p.vy += p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt;
    }
    if (shakeState.t > 0) shakeState.t = Math.max(0, shakeState.t - dtMs);
  };

  // Copy text. Clipboard API, then execCommand, then leave the text selected. Button shows "Copied" for 1.5 s.
  K.copy = function (text, buttonEl) {
    function flash(ok) {
      if (!buttonEl) return;
      var old = buttonEl._kitLabel || buttonEl.textContent;
      buttonEl._kitLabel = old;
      buttonEl.textContent = ok ? 'Copied' : 'Press Ctrl+C';
      clearTimeout(buttonEl._kitTimer);
      buttonEl._kitTimer = setTimeout(function () { buttonEl.textContent = old; }, 1500);
    }
    function fallback() {
      if (!HAS_DOM) return flash(false);
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;left:8px;top:8px;width:60vw;height:5em;z-index:99999';
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      if (ok) document.body.removeChild(ta);
      else ta.addEventListener('blur', function () { if (ta.parentNode) ta.parentNode.removeChild(ta); });
      flash(ok);
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { flash(true); }, fallback);
    } else fallback();
  };

  // ===== K2: assets and drawing =======================================

  var assets = {};      // name -> {def, img, ok}
  var variants = {};    // cache key -> canvas

  // manifest[name] = {src, w, h, fallback:{shape,color,w,h}}. A failed load is not an error.
  K.loadAssets = function (manifest, onDone) {
    var names = Object.keys(manifest || {}), left = names.length, finished = false, timer = null;
    function done() {
      if (finished) return; finished = true; clearTimeout(timer);
      if (onDone) onDone();
    }
    if (!left || typeof Image === 'undefined') {
      names.forEach(function (n) { assets[n] = { def: manifest[n], img: null, ok: false }; });
      return done();
    }
    timer = setTimeout(done, 10000); // never hang the title screen on a slow image
    names.forEach(function (name) {
      var rec = assets[name] = { def: manifest[name], img: null, ok: false };
      var img = new Image();
      img.onload = function () { rec.img = img; rec.ok = true; if (--left === 0) done(); };
      img.onerror = function () { rec.ok = false; if (--left === 0) done(); };
      img.src = manifest[name].src;
    });
  };

  K.has = function (name) { return !!(assets[name] && assets[name].ok); };

  function q05(v) { return Math.round((v || 0) * 20) / 20; }

  function variant(name, rec, o) {
    var key = name + '|' + o.tint + '|' + q05(o.tintAmount) + '|' + o.multiply + '|' + q05(o.multiplyAmount);
    if (variants[key]) return variants[key];
    var img = rec.img, w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    var g = c.getContext('2d');
    g.drawImage(img, 0, 0);
    if (o.multiply && o.multiplyAmount > 0) {
      g.globalCompositeOperation = 'multiply'; g.globalAlpha = Math.min(1, q05(o.multiplyAmount));
      g.fillStyle = o.multiply; g.fillRect(0, 0, w, h);
      g.globalCompositeOperation = 'destination-in'; g.globalAlpha = 1; g.drawImage(img, 0, 0);
    }
    if (o.tint && o.tintAmount > 0) {
      g.globalCompositeOperation = 'source-atop'; g.globalAlpha = Math.min(1, q05(o.tintAmount));
      g.fillStyle = o.tint; g.fillRect(0, 0, w, h);
    }
    variants[key] = c;
    return c;
  }

  function fallbackShape(ctx, def, w, h, o) {
    var f = def && def.fallback || { shape: 'rect', color: '#888' };
    ctx.fillStyle = f.color || '#888';
    if (f.shape === 'ellipse' || f.shape === 'circle') {
      ctx.beginPath(); ctx.ellipse(w / 2, h / 2, w / 2, h / 2, 0, 0, Math.PI * 2); ctx.fill();
    } else ctx.fillRect(0, 0, w, h);
    if (o.tint && o.tintAmount > 0) { ctx.globalAlpha *= q05(o.tintAmount); ctx.fillStyle = o.tint; ctx.fillRect(0, 0, w, h); }
  }

  // opts: {w,h,rot,flipX,alpha,sx,sy,ax,ay,tint,tintAmount,multiply,multiplyAmount}
  // (x, y) is the anchor point; the default anchor is bottom centre (the feet).
  K.draw = function (ctx, name, x, y, opts) {
    var rec = assets[name];
    if (!rec) return;
    var o = opts || {}, def = rec.def || {};
    var nw = (def.w || (def.fallback && def.fallback.w) || 64), nh = (def.h || (def.fallback && def.fallback.h) || 64);
    var w = o.w != null ? o.w : (o.h != null ? o.h * nw / nh : nw);
    var h = o.h != null ? o.h : w * nh / nw;
    var ax = o.ax != null ? o.ax : 0.5, ay = o.ay != null ? o.ay : 1;
    ctx.save();
    ctx.translate(x, y);
    if (o.rot) ctx.rotate(o.rot);
    ctx.scale((o.flipX ? -1 : 1) * (o.sx != null ? o.sx : 1), o.sy != null ? o.sy : 1);
    if (o.alpha != null) ctx.globalAlpha = o.alpha;
    ctx.translate(-ax * w, -ay * h);
    if (rec.ok) {
      var src = rec.img;
      if (HAS_DOM && ((o.tint && o.tintAmount > 0) || (o.multiply && o.multiplyAmount > 0))) src = variant(name, rec, o);
      ctx.drawImage(src, 0, 0, w, h);
    } else fallbackShape(ctx, def, w, h, o);
    ctx.restore();
  };

  var grainCanvas = null;
  // Cached noise over the frame, for paper and print looks. Call with the identity-in-world transform set.
  K.grain = function (ctx, w, h, amount) {
    if (!HAS_DOM) return;
    if (!grainCanvas) {
      grainCanvas = document.createElement('canvas'); grainCanvas.width = grainCanvas.height = 256;
      var g = grainCanvas.getContext('2d'), id = g.createImageData(256, 256), r = K.rng(1234);
      for (var i = 0; i < id.data.length; i += 4) {
        var v = r() < 0.5 ? 0 : 255;
        id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = Math.floor(r() * 255);
      }
      g.putImageData(id, 0, 0);
    }
    ctx.save();
    ctx.globalAlpha = amount != null ? amount : 0.08;
    ctx.fillStyle = ctx.createPattern(grainCanvas, 'repeat');
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  };

  // ===== K3: audio ====================================================

  var A = K.audio = {};
  var cur = null;           // the engine the voices play into (live, or a temporary offline one)
  var live = null;          // the live engine
  var clocks = [];

  var hz = A.hz = function (midi) { return 440 * Math.pow(2, (midi - 69) / 12); };
  var SCALES = {
    minorPent: [0, 3, 5, 7, 10], majorPent: [0, 2, 4, 7, 9],
    major: [0, 2, 4, 5, 7, 9, 11], dorian: [0, 2, 3, 5, 7, 9, 10]
  };
  // Notes of a scale as MIDI numbers. octaves defaults to 1.
  A.scale = function (rootMidi, name, octaves) {
    var iv = SCALES[name] || SCALES.major, out = [];
    for (var o = 0; o < (octaves || 1); o++) for (var i = 0; i < iv.length; i++) out.push(rootMidi + o * 12 + iv[i]);
    return out;
  };

  // Soft clip: linear to 0.4, then curves to a ceiling of about 0.69 (-3.2 dB)
  function clipCurve() {
    var c = new Float32Array(4096);
    for (var i = 0; i < 4096; i++) {
      var x = i / 4095 * 2 - 1, a = Math.abs(x);
      c[i] = a < 0.4 ? x : (x < 0 ? -1 : 1) * (0.4 + 0.3 * Math.tanh((a - 0.4) / 0.3));
    }
    return c;
  }

  function buildReverb(e, seconds) {
    var ctx = e.ctx, sr = ctx.sampleRate, len = Math.max(1, Math.floor(sr * seconds));
    var buf = ctx.createBuffer(2, len, sr), r = K.rng(99);
    for (var ch = 0; ch < 2; ch++) {
      var d = buf.getChannelData(ch);
      for (var i = 0; i < len; i++) d[i] = (r() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    if (e.rv) { try { e.rvIn.disconnect(e.rv); e.rv.disconnect(); } catch (x) { /* ignore */ } }
    e.rv = ctx.createConvolver(); e.rv.buffer = buf;
    e.rvIn.connect(e.rv); e.rv.connect(e.rvOut);
    return e.rv;
  }

  // Master chain: gain 0.8 -> compressor -> soft clipper -> destination (and an analyser for the meter).
  // The clipper comes last so nothing can pass its ceiling.
  function makeEngine(ctx) {
    var e = { ctx: ctx };
    e.master = ctx.createGain(); e.master.gain.value = 0.8;
    e.comp = ctx.createDynamicsCompressor();
    e.comp.threshold.value = -10; e.comp.knee.value = 8; e.comp.ratio.value = 8;
    e.comp.attack.value = 0.004; e.comp.release.value = 0.15;
    e.clip = ctx.createWaveShaper(); e.clip.curve = clipCurve();
    e.analyser = ctx.createAnalyser(); e.analyser.fftSize = 2048;
    e.master.connect(e.comp); e.comp.connect(e.clip); e.clip.connect(ctx.destination); e.clip.connect(e.analyser);
    var sr = ctx.sampleRate, n = ctx.createBuffer(1, sr * 2, sr), d = n.getChannelData(0), r = K.rng(7);
    for (var i = 0; i < d.length; i++) d[i] = r() * 2 - 1;
    e.noise = n;
    e.rvIn = ctx.createGain(); e.rvOut = ctx.createGain(); e.rvOut.gain.value = 0.6; e.rvOut.connect(e.master);
    buildReverb(e, 1.6);
    return e;
  }

  // Create or resume the AudioContext. Safe to call on every pointer down. Returns null where audio is missing.
  A.unlock = function () {
    var AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
    if (!AC) return null;
    try {
      if (!live) { live = makeEngine(new AC()); cur = live; A.ctx = live.ctx; }
      if (live.ctx.state === 'suspended' && !A._hold) live.ctx.resume();
    } catch (e) { return null; }
    return live.ctx;
  };
  // Used by Kit.boot when the tab is hidden and shown again. _hold stops unlock() waking a hidden tab.
  A.suspend = function () { A._hold = true; if (live && live.ctx.state === 'running') live.ctx.suspend(); };
  A.resume = function () { A._hold = false; if (live && live.ctx.state === 'suspended') live.ctx.resume(); };

  // Which step times are due. Pure. If we fell behind by more than the look-ahead (tab was hidden),
  // jump to now instead of replaying every missed step.
  A._due = function (now, nextTime, stepDur, lookahead) {
    if (nextTime < now - lookahead) nextTime = now;
    var out = [];
    while (nextTime < now + lookahead) { out.push(nextTime); nextTime += stepDur; }
    return out;
  };

  // Look-ahead step clock: schedules 100 ms ahead of the audio clock, polled every 25 ms.
  A.clock = function (o) {
    var LOOK = 0.1, bpm = o.bpm || 100, spb = o.stepsPerBeat || 4;
    var step = 0, next = 0, timer = null;
    function stepDur() { return 60 / bpm / spb; }
    function poll() {
      if (!live) return;
      var now = live.ctx.currentTime, due = A._due(now, next, stepDur(), LOOK);
      for (var i = 0; i < due.length; i++) { if (o.onStep) o.onStep(step, due[i]); step++; }
      if (due.length) next = due[due.length - 1] + stepDur();
    }
    var c = {
      start: function () {
        if (timer) return;
        A.unlock(); if (!live) return;
        next = live.ctx.currentTime + 0.05;
        timer = setInterval(poll, 25);
        clocks.push(c);
      },
      stop: function () { clearInterval(timer); timer = null; var i = clocks.indexOf(c); if (i >= 0) clocks.splice(i, 1); },
      setBpm: function (n) { bpm = n; },
      stepDur: stepDur,
      reset: function () { step = 0; }
    };
    return c;
  };

  // ---- voices. Each takes (time, {midi|freq, gain, dur, send, detune}).
  function fq(o, dflt) {
    var f = o.freq != null ? o.freq : (o.midi != null ? hz(o.midi) : dflt);
    return f * Math.pow(2, (o.detune || 0) / 1200);
  }
  function pick(o, k, d) { return o[k] != null ? o[k] : d; }
  function outNode(o) {
    var c = cur.ctx, g = c.createGain();
    g.connect(cur.master);
    if (o.send > 0) { var s = c.createGain(); s.gain.value = o.send; g.connect(s); s.connect(cur.rvIn); }
    return g;
  }
  // Percussive envelope: fast attack, exponential decay to silence by t+dur
  function perc(param, t, a, peak, dur) {
    param.setValueAtTime(0.0001, t);
    param.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + a);
    param.exponentialRampToValueAtTime(0.0001, t + Math.max(dur, a + 0.01));
  }
  // Sustained envelope: ramp up, hold until t+dur, release
  function sus(param, t, a, peak, dur, rel) {
    param.setValueAtTime(0.0001, t);
    param.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + a);
    param.setValueAtTime(Math.max(peak, 0.0002), t + Math.max(dur, a));
    param.exponentialRampToValueAtTime(0.0001, t + Math.max(dur, a) + rel);
  }
  function osc(type, f, t, end) {
    var n = cur.ctx.createOscillator(); n.type = type; n.frequency.setValueAtTime(f, t);
    n.start(t); n.stop(end); return n;
  }
  function noiseSrc(t, end) {
    var s = cur.ctx.createBufferSource(); s.buffer = cur.noise; s.loop = true;
    s.start(t, Math.random()); s.stop(end); return s;
  }
  function filt(type, f, q) { var b = cur.ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q || 0.7; return b; }

  var V = {
    thump: function (t, o) {
      var f = fq(o, 55), d = pick(o, 'dur', 0.3), g = outNode(o);
      var n = osc('sine', f * 2.6, t, t + d + 0.05);
      n.frequency.exponentialRampToValueAtTime(f, t + 0.09);
      perc(g.gain, t, 0.004, pick(o, 'gain', 0.9), d); n.connect(g);
    },
    chirp: function (t, o) {
      var f = fq(o, 1900), d = pick(o, 'dur', 0.1), g = outNode(o);
      var n = osc('triangle', f, t, t + d + 0.03);
      n.frequency.exponentialRampToValueAtTime(f * 1.5, t + d * 0.7);
      perc(g.gain, t, 0.006, pick(o, 'gain', 0.3), d); n.connect(g);
    },
    hoot: function (t, o) {
      var f = fq(o, 392), d = pick(o, 'dur', 0.55), g = outNode(o), lp = filt('lowpass', 1100, 0.5);
      var n = osc('sine', f, t, t + d + 0.15), lfo = osc('sine', 5, t, t + d + 0.15), lg = cur.ctx.createGain();
      lg.gain.value = f * 0.012; lfo.connect(lg); lg.connect(n.frequency);
      n.frequency.exponentialRampToValueAtTime(f * 0.93, t + d);
      sus(g.gain, t, 0.07, pick(o, 'gain', 0.4), d * 0.6, d * 0.4);
      n.connect(lp); lp.connect(g);
    },
    bell: function (t, o) {
      var f = fq(o, 880), d = pick(o, 'dur', 1.4), g = outNode(o), pk = pick(o, 'gain', 0.25);
      [[1, 1], [2.76, 0.5], [5.4, 0.25], [8.93, 0.12]].forEach(function (p, i) {
        var pg = cur.ctx.createGain(), n = osc('sine', f * p[0], t, t + d + 0.05);
        perc(pg.gain, t, 0.003, pk * p[1], d / (1 + i * 0.7)); n.connect(pg); pg.connect(g);
      });
    },
    pluck: function (t, o) {
      var f = fq(o, 330), d = pick(o, 'dur', 0.4), g = outNode(o), lp = filt('lowpass', f * 6, 1.2);
      var n = osc('sawtooth', f, t, t + d + 0.05);
      lp.frequency.setValueAtTime(Math.min(f * 8, 9000), t); lp.frequency.exponentialRampToValueAtTime(f * 1.2, t + d * 0.7);
      perc(g.gain, t, 0.004, pick(o, 'gain', 0.3), d); n.connect(lp); lp.connect(g);
    },
    brass: function (t, o) {
      var f = fq(o, 220), d = pick(o, 'dur', 0.4), g = outNode(o), lp = filt('lowpass', f * 2, 0.8);
      lp.frequency.setValueAtTime(f * 1.5, t); lp.frequency.exponentialRampToValueAtTime(Math.min(f * 7, 9000), t + 0.09);
      [-6, 6].forEach(function (c) { var n = osc('sawtooth', f * Math.pow(2, c / 1200), t, t + d + 0.12); n.connect(lp); });
      sus(g.gain, t, 0.035, pick(o, 'gain', 0.22), d, 0.1); lp.connect(g);
    },
    organ: function (t, o) {
      var f = fq(o, 262), d = pick(o, 'dur', 0.5), g = outNode(o);
      [[1, 1], [2, 0.5], [3, 0.3], [4, 0.15]].forEach(function (p) {
        var pg = cur.ctx.createGain(), n = osc('sine', f * p[0], t, t + d + 0.1);
        pg.gain.value = p[1] / 1.95; n.connect(pg); pg.connect(g);
      });
      sus(g.gain, t, 0.02, pick(o, 'gain', 0.28), d, 0.08);
    },
    noiseHit: function (t, o) {
      var d = pick(o, 'dur', 0.15), g = outNode(o), f = filt(o.hp ? 'highpass' : 'bandpass', o.freq || 3000, 0.8);
      var n = noiseSrc(t, t + d + 0.05); perc(g.gain, t, 0.002, pick(o, 'gain', 0.35), d);
      n.connect(f); f.connect(g);
    },
    tick: function (t, o) {
      var f = fq(o, 1400), g = outNode(o), d = pick(o, 'dur', 0.03);
      var n = osc('triangle', f, t, t + d + 0.02), hp = filt('highpass', 600, 0.5);
      perc(g.gain, t, 0.001, pick(o, 'gain', 0.3), d); n.connect(hp); hp.connect(g);
    },
    // A pitch glide from o.from to o.to (Hz), or midi numbers via o.fromMidi / o.toMidi
    sweep: function (t, o) {
      var a = o.from != null ? o.from : (o.fromMidi != null ? hz(o.fromMidi) : 300);
      var b = o.to != null ? o.to : (o.toMidi != null ? hz(o.toMidi) : 900);
      var d = pick(o, 'dur', 0.4), g = outNode(o), k = Math.pow(2, (o.detune || 0) / 1200);
      var n = osc(o.type || 'triangle', a * k, t, t + d + 0.05);
      n.frequency.exponentialRampToValueAtTime(Math.max(b * k, 20), t + d);
      perc(g.gain, t, 0.01, pick(o, 'gain', 0.3), d); n.connect(g);
    }
  };
  Object.keys(V).forEach(function (name) {
    A[name] = function (time, o) {
      if (!cur) return;
      V[name](time != null ? time : cur.ctx.currentTime, o || {});
    };
  });

  // defs[name] = {voice, midi|freq, gain, dur, send, vary} or function(time, opts). Returns play(name, opts).
  // opts: {time, gain (multiplier), midi, power}. Unknown names and a missing AudioContext are silent no-ops.
  // {sample:'name'} is reserved for later and does nothing now.
  A.sfx = function (defs) {
    function play(name, opts) {
      if (!cur) return;
      opts = opts || {};
      var d = defs[name];
      if (!d) return;
      var t = opts.time != null ? opts.time : cur.ctx.currentTime;
      if (typeof d === 'function') return d(t, opts);
      if (d.sample || !V[d.voice]) return;
      var o = {};
      for (var k in d) o[k] = d[k];
      if (opts.midi != null) { o.midi = opts.midi; o.freq = null; }
      o.gain = (d.gain != null ? d.gain : 0.3) * (opts.gain != null ? opts.gain : 1) * (1 + 0.2 * ((opts.power || 1) - 1));
      if (d.vary) o.detune = (Math.random() * 2 - 1) * d.vary;
      V[d.voice](t, o);
    }
    play.names = Object.keys(defs);
    play.defs = defs;
    return play;
  };

  // Replace the reverb with decaying noise of this length. Returns the ConvolverNode.
  A.reverb = function (seconds) {
    if (!cur) return null;
    return buildReverb(cur, seconds);
  };

  // Looping background: filtered noise plus a drone of sine notes with a slow wobble.
  A.bed = function (o) {
    o = o || {};
    var nodes = null, level = 1;
    function baseGain() { return level; }
    return {
      start: function () {
        if (nodes) return;
        A.unlock(); var e = live; if (!e) return;
        var c = e.ctx, t = c.currentTime, bus = c.createGain(), stops = [];
        bus.gain.setValueAtTime(0.0001, t); bus.gain.exponentialRampToValueAtTime(Math.max(baseGain(), 0.0002), t + 1.5);
        bus.connect(e.master);
        if (o.noise) {
          var s = c.createBufferSource(); s.buffer = e.noise; s.loop = true;
          var lp = filt('lowpass', o.noise.cutoff || 600, 0.6), ng = c.createGain(); ng.gain.value = o.noise.gain != null ? o.noise.gain : 0.05;
          s.connect(lp); lp.connect(ng); ng.connect(bus); s.start(t); stops.push(s);
        }
        if (o.drone) {
          var dg = c.createGain(), per = (o.drone.gain != null ? o.drone.gain : 0.04) / Math.max(1, (o.drone.notes || []).length);
          dg.gain.value = per * (o.drone.notes || []).length; dg.connect(bus);
          (o.drone.notes || []).forEach(function (m, i) {
            var n = c.createOscillator(); n.type = 'sine'; n.frequency.value = hz(m) * (1 + i * 0.0007);
            var vg = c.createGain(); vg.gain.value = 1 / Math.max(1, o.drone.notes.length);
            n.connect(vg); vg.connect(dg); n.start(t); stops.push(n);
          });
          if (o.drone.lfoHz) {
            var l = c.createOscillator(), lg = c.createGain(); l.frequency.value = o.drone.lfoHz;
            lg.gain.value = per * o.drone.notes.length * 0.4; l.connect(lg); lg.connect(dg.gain); l.start(t); stops.push(l);
          }
        }
        nodes = { bus: bus, stops: stops, ctx: c };
      },
      stop: function () {
        if (!nodes) return;
        var n = nodes, t = n.ctx.currentTime; nodes = null;
        n.bus.gain.cancelScheduledValues(t); n.bus.gain.setValueAtTime(Math.max(n.bus.gain.value, 0.0002), t);
        n.bus.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
        n.stops.forEach(function (s) { try { s.stop(t + 0.65); } catch (x) { /* ignore */ } });
      },
      setGain: function (v) {
        level = v;
        if (nodes) nodes.bus.gain.setTargetAtTime(Math.max(v, 0.0002), nodes.ctx.currentTime, 0.05);
      }
    };
  };

  function dbOf(v) { return v <= 0.000001 ? -120 : 20 * Math.log(v) / Math.LN10; }

  // Current level at the master bus, in dB. Call every frame.
  A.meter = function () {
    if (!live) return { peakDb: -120, rmsDb: -120 };
    var buf = A._mbuf || (A._mbuf = new Float32Array(live.analyser.fftSize)), peak = 0, sum = 0;
    live.analyser.getFloatTimeDomainData(buf);
    for (var i = 0; i < buf.length; i++) { var a = Math.abs(buf[i]); if (a > peak) peak = a; sum += buf[i] * buf[i]; }
    return { peakDb: dbOf(peak), rmsDb: dbOf(Math.sqrt(sum / buf.length)) };
  };

  // Render one sound offline and measure it. Resolves {peakDb, rmsDb}. rmsDb is over the whole render.
  A.measure = function (defs, name, opts, seconds) {
    var OAC = typeof window !== 'undefined' && (window.OfflineAudioContext || window.webkitOfflineAudioContext);
    if (!OAC) return Promise.resolve(null);
    seconds = seconds || 2;
    var ctx = new OAC(2, Math.ceil(44100 * seconds), 44100), saved = cur;
    cur = makeEngine(ctx);
    try { A.sfx(defs)(name, Object.assign({ time: 0.01 }, opts || {})); } finally { cur = saved; }
    return ctx.startRendering().then(function (buf) {
      var peak = 0, sum = 0, n = 0;
      for (var ch = 0; ch < buf.numberOfChannels; ch++) {
        var d = buf.getChannelData(ch);
        for (var i = 0; i < d.length; i++) { var a = Math.abs(d[i]); if (a > peak) peak = a; sum += d[i] * d[i]; n++; }
      }
      return { peakDb: dbOf(peak), rmsDb: dbOf(Math.sqrt(sum / n)) };
    });
  };

  // One button per sound, a live peak meter, and a "Measure levels" button. For dev/sounds.html.
  K.soundBoard = function (defs, mountEl) {
    if (!HAS_DOM) return;
    var play = A.sfx(defs);
    var wrap = document.createElement('div');
    wrap.style.cssText = 'font:16px system-ui,sans-serif;max-width:640px';
    var meter = document.createElement('div');
    meter.style.cssText = 'height:14px;background:#222;border-radius:7px;overflow:hidden;margin:0 0 6px';
    var bar = document.createElement('div'); bar.style.cssText = 'height:100%;width:0;background:#4c8';
    meter.appendChild(bar);
    var readout = document.createElement('div'); readout.style.cssText = 'font-size:13px;margin-bottom:12px;opacity:.8';
    readout.textContent = 'Peak: -- dB';
    var grid = document.createElement('div'); grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px';
    var levels = {};
    play.names.forEach(function (name) {
      var cell = document.createElement('div');
      var b = document.createElement('button');
      b.textContent = name; b.style.cssText = 'min-height:44px;width:100%;font:inherit;cursor:pointer';
      b.addEventListener('click', function () { A.unlock(); play(name); });
      var lv = document.createElement('div'); lv.style.cssText = 'font-size:12px;opacity:.7;min-height:1.2em'; lv.textContent = ' ';
      levels[name] = lv; cell.appendChild(b); cell.appendChild(lv); grid.appendChild(cell);
    });
    var mb = document.createElement('button');
    mb.textContent = 'Measure levels'; mb.style.cssText = 'min-height:44px;font:inherit;margin:12px 0;cursor:pointer';
    mb.addEventListener('click', function () {
      play.names.forEach(function (name) {
        A.measure(defs, name).then(function (r) {
          if (r) levels[name].textContent = 'peak ' + r.peakDb.toFixed(1) + ' dB, rms ' + r.rmsDb.toFixed(1);
        });
      });
    });
    wrap.appendChild(meter); wrap.appendChild(readout); wrap.appendChild(grid); wrap.appendChild(mb);
    mountEl.appendChild(wrap);
    var hold = -120;
    (function tick() {
      var m = A.meter();
      hold = Math.max(m.peakDb, hold - 0.6);
      bar.style.width = Math.max(0, Math.min(100, (hold + 60) / 60 * 100)) + '%';
      bar.style.background = hold > -3 ? '#e54' : '#4c8';
      readout.textContent = 'Peak: ' + (hold <= -119 ? '--' : hold.toFixed(1)) + ' dB (keep under -3)';
      requestAnimationFrame(tick);
    })();
  };

  // ===== K4: tuning panel =============================================

  var panel = null;
  // defs[name] = {v, min, max, step}. Returns a live object of current values. Backtick toggles the panel.
  K.tune = function (slug, defs) {
    var key = 'bg.' + slug + '.tune', live = {}, saved = K.store.get(key, {}) || {};
    Object.keys(defs).forEach(function (n) {
      var d = defs[n], v = saved[n];
      live[n] = typeof v === 'number' && isFinite(v) ? Math.max(d.min, Math.min(d.max, v)) : d.v;
    });
    if (!HAS_DOM) return live;

    var sliders = {};
    function build() {
      if (panel && panel.parentNode) panel.parentNode.removeChild(panel);
      panel = document.createElement('div');
      panel.id = 'kit-tune';
      panel.style.cssText = 'position:fixed;right:8px;top:8px;z-index:99998;width:260px;max-height:92vh;overflow:auto;' +
        'background:rgba(15,15,20,.92);color:#eee;font:13px system-ui,sans-serif;padding:10px;border-radius:8px;display:none';
      var title = document.createElement('div');
      title.textContent = 'Tuning (` to close)'; title.style.cssText = 'font-weight:600;margin-bottom:8px';
      panel.appendChild(title);
      Object.keys(defs).forEach(function (n) {
        var d = defs[n], row = document.createElement('label');
        row.style.cssText = 'display:block;margin-bottom:8px';
        var head = document.createElement('div'); head.style.cssText = 'display:flex;justify-content:space-between';
        var nm = document.createElement('span'); nm.textContent = n;
        var val = document.createElement('span'); val.textContent = live[n];
        head.appendChild(nm); head.appendChild(val);
        var s = document.createElement('input');
        s.type = 'range'; s.min = d.min; s.max = d.max; s.step = d.step || (d.max - d.min) / 100; s.value = live[n];
        s.style.cssText = 'width:100%;min-height:24px';
        s.addEventListener('input', function () {
          live[n] = parseFloat(s.value); val.textContent = live[n];
          K.store.set(key, live);
        });
        sliders[n] = { s: s, val: val };
        row.appendChild(head); row.appendChild(s); panel.appendChild(row);
      });
      var bar = document.createElement('div'); bar.style.cssText = 'display:flex;gap:8px';
      var cp = document.createElement('button'); cp.textContent = 'Copy values';
      var rs = document.createElement('button'); rs.textContent = 'Reset';
      [cp, rs].forEach(function (b) { b.style.cssText = 'flex:1;min-height:44px;font:inherit;cursor:pointer'; bar.appendChild(b); });
      cp.addEventListener('click', function () { K.copy(JSON.stringify(live, null, 2), cp); });
      rs.addEventListener('click', function () {
        Object.keys(defs).forEach(function (n) {
          live[n] = defs[n].v; sliders[n].s.value = live[n]; sliders[n].val.textContent = live[n];
        });
        K.store.set(key, live);
      });
      panel.appendChild(bar);
      document.body.appendChild(panel);
    }
    function mount() { build(); }
    if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
    if (!K._tuneKey) {
      K._tuneKey = true;
      window.addEventListener('keydown', function (e) {
        if (e.key === '`' && panel) { panel.style.display = panel.style.display === 'none' ? 'block' : 'none'; }
      });
    }
    return live;
  };

  // ===== K8: rhythm rule and boot ====================================

  // Power of a hit after resting this many steps: 1, 2 or 3
  K.rhythmPower = function (restsBefore) { return 1 + Math.min(restsBefore, 2); };

  // cfg: {slug, world:{w,h}, assets, tune, onStart(g), onFrame(dtMs, g), onPause, onResume}
  // Returns g = {canvas, ctx, view, tune, world, paused}. Draw in world units after view.apply(ctx).
  K.boot = function (cfg) {
    var canvas = document.getElementById('game') || document.querySelector('canvas');
    var world = cfg.world || { w: 1280, h: 720 };
    var view = K.fit(canvas, world.w, world.h), ctx = canvas.getContext('2d');
    var g = { canvas: canvas, ctx: ctx, view: view, world: world, paused: false, tune: cfg.tune ? K.tune(cfg.slug, cfg.tune) : {} };
    var last = 0, started = false;

    function frame(now) {
      requestAnimationFrame(frame);
      if (g.paused || !started) return;
      var dt = last ? Math.min(now - last, 50) : 16; last = now;
      K.update(dt);
      view.clear(ctx); view.apply(ctx);
      if (cfg.onFrame) cfg.onFrame(dt, g);
    }
    function pause() { if (g.paused) return; g.paused = true; A.suspend(); if (cfg.onPause) cfg.onPause(g); }
    function resume() { if (!g.paused) return; g.paused = false; last = 0; A.resume(); if (cfg.onResume) cfg.onResume(g); }
    g.pause = pause; g.resume = resume;
    document.addEventListener('visibilitychange', function () { if (document.hidden) pause(); else resume(); });
    ['pointerdown', 'pointerup', 'touchend', 'keydown'].forEach(function (t) {
      window.addEventListener(t, function () { A.unlock(); }, { capture: true });
    });

    K.loadAssets(cfg.assets || {}, function () {
      started = true;
      if (cfg.onStart) cfg.onStart(g);
    });
    requestAnimationFrame(frame);
    return g;
  };

  return K;
})();
if (typeof module !== 'undefined') module.exports = Kit;

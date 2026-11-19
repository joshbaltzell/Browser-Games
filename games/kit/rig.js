// Kit rig: cutout skeleton animation (Kit.rig) and mesh-deformed sprites (Kit.mesh, Kit.deform).
// Classic script. Load after kit.js. Attaches to the global Kit and loads in Node with no window.
(function () {
  'use strict';
  var K = (typeof Kit !== 'undefined') ? Kit : require('./kit.js');
  var TAU = Math.PI * 2;

  // ===== Rig: pure transform maths ======================================

  var PROPS = ['rot', 'x', 'y', 'sx', 'sy', 'alpha'];
  function propDefault(p) { return (p === 'sx' || p === 'sy' || p === 'alpha') ? 1 : 0; }

  // 2D affine [a,b,c,d,e,f] in canvas order: x' = a x + c y + e, y' = b x + d y + f. mul(m, n) applies n first.
  function mul(m, n) {
    return [
      m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
      m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
      m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]
    ];
  }
  function local(x, y, rot, sx, sy) {
    var c = Math.cos(rot), s = Math.sin(rot);
    return [c * sx, s * sx, -s * sy, c * sy, x, y];
  }
  function apply(m, x, y) { return { x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] }; }

  function easeFn(e) { return typeof e === 'function' ? e : ((K.ease && K.ease[e]) || K.ease.linear); }

  // keys: [[t, value, ease?], ...] sorted by t. The ease belongs to the segment that starts at that key.
  function sample(keys, t) {
    var n = keys.length;
    if (!n) return undefined;
    if (t <= keys[0][0]) return keys[0][1];
    if (t >= keys[n - 1][0]) return keys[n - 1][1];
    for (var i = 0; i < n - 1; i++) {
      var a = keys[i], b = keys[i + 1];
      if (t >= a[0] && t < b[0]) {
        var p = (t - a[0]) / (b[0] - a[0]);
        return a[1] + (b[1] - a[1]) * easeFn(a[2])(p);
      }
    }
    return keys[n - 1][1];
  }
  // Image swap track: [[t, imageName], ...]. Steps, no blending. Returns null before the first key.
  function sampleStep(keys, t) {
    var v = null;
    for (var i = 0; i < keys.length; i++) { if (keys[i][0] <= t) v = keys[i][1]; else break; }
    return v;
  }

  function clipDur(clip) {
    if (clip._dur != null) return clip._dur;
    var d = clip.dur || 0, tr = clip.tracks || {};
    Object.keys(tr).forEach(function (p) {
      Object.keys(tr[p]).forEach(function (k) {
        var keys = tr[p][k]; if (keys.length) d = Math.max(d, keys[keys.length - 1][0]);
      });
    });
    return (clip._dur = d || 1);
  }
  // Time inside a clip: wraps when looping, clamps when one-shot.
  function clipTime(clip, t, loop) {
    var d = clipDur(clip);
    if (loop) return ((t % d) + d) % d;
    return t < 0 ? 0 : t > d ? d : t;
  }

  function partList(def) {
    if (def._list) return def._list;
    var parts = def.parts || {}, names = Array.isArray(parts) ? parts.map(function (p) { return p.name; }) : Object.keys(parts);
    var list = names.map(function (n, i) {
      var p = Array.isArray(parts) ? parts[i] : parts[n];
      return { name: n, p: p, z: p.z != null ? p.z : 0, idx: i };
    });
    def._list = list;
    def._draw = list.slice().sort(function (a, b) { return a.z - b.z || a.idx - b.idx; });
    return list;
  }

  // Poses every part. states: [{clip, t, w, loop}] (t defaults to `time`, w to 1). layers: [{part, prop, amp, hz, phase}
  // or function(timeMs) -> {part: {prop: delta}}]. Returns {partName: {m, alpha, image, rot, x, y, sx, sy}}.
  // m is the part's world matrix; its origin is the part's pivot.
  function rigPose(def, states, time, layers) {
    var list = partList(def), clips = def.clips || {}, out = {}, i, j;
    time = time || 0;
    var live = [], total = 0;
    for (i = 0; i < (states || []).length; i++) {
      var s = states[i], clip = clips[s.clip], w = s.w == null ? 1 : s.w;
      if (!clip || !(w > 0)) continue;
      var loop = s.loop != null ? s.loop : !!clip.loop;
      live.push({ clip: clip, ct: clipTime(clip, s.t != null ? s.t : time, loop), w: w });
      total += w;
    }
    // layer deltas
    var delta = {};
    function addDelta(part, prop, v) { (delta[part] || (delta[part] = {}))[prop] = ((delta[part] || {})[prop] || 0) + v; }
    (layers || []).forEach(function (L) {
      if (typeof L === 'function') {
        var r = L(time) || {};
        Object.keys(r).forEach(function (pn) { Object.keys(r[pn]).forEach(function (pr) { addDelta(pn, pr, r[pn][pr]); }); });
      } else if (L && L.part) {
        addDelta(L.part, L.prop || 'rot', (L.amp || 0) * Math.sin(TAU * (L.hz || 1) * time / 1000 + (L.phase || 0)));
      }
    });
    function resolve(item, depth) {
      if (out[item.name]) return out[item.name];
      var p = item.p, vals = {};
      for (j = 0; j < PROPS.length; j++) {
        var prop = PROPS[j], num = 0, wsum = 0;
        for (i = 0; i < live.length; i++) {
          var tr = live[i].clip.tracks && live[i].clip.tracks[item.name];
          var keys = tr && tr[prop];
          num += live[i].w * (keys && keys.length ? sample(keys, live[i].ct) : propDefault(prop));
          wsum += live[i].w;
        }
        vals[prop] = wsum ? num / wsum : propDefault(prop);
        if (delta[item.name] && delta[item.name][prop]) vals[prop] += delta[item.name][prop];
      }
      var image = p.image || null, best = 0;
      for (i = 0; i < live.length; i++) {
        var tr2 = live[i].clip.tracks && live[i].clip.tracks[item.name];
        if (tr2 && tr2.image && live[i].w > best) {
          var im = sampleStep(tr2.image, live[i].ct);
          if (im != null) { image = im; best = live[i].w; }
        }
      }
      var lm = local((p.x || 0) + vals.x, (p.y || 0) + vals.y, (p.rot || 0) + vals.rot,
        (p.sx != null ? p.sx : 1) * vals.sx, (p.sy != null ? p.sy : 1) * vals.sy);
      var alpha = Math.max(0, Math.min(1, vals.alpha));
      var m = lm;
      if (p.parent && depth < 64) {
        var pi = null;
        for (i = 0; i < list.length; i++) if (list[i].name === p.parent) { pi = list[i]; break; }
        if (pi) { var po = resolve(pi, depth + 1); m = mul(po.m, lm); alpha *= po.alpha; }
      }
      return (out[item.name] = { m: m, alpha: alpha, image: image, rot: (p.rot || 0) + vals.rot, x: (p.x || 0) + vals.x, y: (p.y || 0) + vals.y, sx: lm[0], sy: lm[3] });
    }
    for (var k = 0; k < list.length; k++) resolve(list[k], 0);
    return out;
  }

  // ===== Rig: instance ==================================================

  function eventsOf(clip) {
    return (clip.events || []).map(function (e) { return Array.isArray(e) ? { t: e[0], name: e[1] } : e; });
  }

  function makeRig(def) {
    partList(def);
    var states = [], layers = [], listeners = {}, time = 0, pose = null;
    var inst = {
      def: def,
      get time() { return time; },
      get states() { return states; }
    };
    function fire(name, clipName) {
      (listeners[name] || []).slice().forEach(function (fn) { fn(name, clipName); });
    }
    inst.on = function (name, fn) {
      (listeners[name] || (listeners[name] = [])).push(fn);
      return function () { var a = listeners[name], i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); };
    };
    // play(name, {loop, speed=1, blend=120 ms, restart=true, next: clipName})
    inst.play = function (name, o) {
      o = o || {};
      var clip = (def.clips || {})[name];
      if (!clip) return inst;
      var cur = states[states.length - 1];
      var loop = o.loop != null ? o.loop : !!clip.loop;
      if (cur && cur.clip === name && o.restart === false) { cur.speed = o.speed != null ? o.speed : cur.speed; cur.loop = loop; return inst; }
      var blend = o.blend != null ? o.blend : 120;
      states.forEach(function (s) { s.dec = blend > 0 ? s.w / blend : Infinity; });
      var s = { clip: name, t: 0, speed: o.speed != null ? o.speed : 1, loop: loop, w: blend > 0 ? 0 : 1, blend: blend, next: o.next, nextBlend: o.nextBlend, ended: false };
      if (blend <= 0) states = [];
      states.push(s);
      pose = null;
      return inst;
    };
    inst.layer = function (name, spec) {
      layers = layers.filter(function (l) { return l.name !== name; });
      if (spec) layers.push({ name: name, spec: spec });
      pose = null;
      return inst;
    };
    inst.update = function (dt) {
      time += dt;
      var newest = states[states.length - 1], i;
      for (i = 0; i < states.length; i++) {
        var s = states[i], clip = def.clips[s.clip], d = clipDur(clip), u0 = s.t, u1 = s.t + dt * s.speed;
        s.t = u1;
        if (s === newest) {
          if (s.blend > 0 && s.w < 1) s.w = Math.min(1, s.w + dt / s.blend);
          var evs = eventsOf(clip);
          for (var e = 0; e < evs.length; e++) {
            var te = evs[e].t, hit, lo = s.started ? u0 : u0 - 1e-9;
            if (s.loop) hit = Math.floor((u1 - te) / d) > Math.floor((lo - te) / d);
            else hit = te > lo && te <= Math.min(u1, d);
            if (hit) fire(evs[e].name, s.clip);
          }
          s.started = true;
          if (!s.loop && !s.ended && u1 >= d) { s.ended = true; fire('end', s.clip); if (s.next) inst.play(s.next, { blend: s.nextBlend }); }
        } else s.w -= s.dec * dt;
      }
      states = states.filter(function (s) { return s.w > 0 || s === states[states.length - 1]; });
      pose = null;
      return inst;
    };
    inst.pose = function () {
      if (!pose) pose = rigPose(def, states, time, layers.map(function (l) { return l.spec; }));
      return pose;
    };
    // opts: {scale=1, flipX, tint, tintAmount=0.5, alpha=1}
    inst.draw = function (ctx, x, y, opts) {
      var o = opts || {}, sc = o.scale != null ? o.scale : 1, P = inst.pose();
      ctx.save();
      ctx.translate(x, y);
      ctx.scale((o.flipX ? -1 : 1) * sc, sc);
      var base = ctx.globalAlpha * (o.alpha != null ? o.alpha : 1);
      def._draw.forEach(function (it) {
        var p = it.p, po = P[it.name], m = po.m;
        var w = p.w, h = p.h, ax = p.ax != null ? p.ax : 0.5, ay = p.ay != null ? p.ay : 0.5;
        ctx.save();
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        ctx.globalAlpha = base * po.alpha;
        if (po.image) {
          var dopts = { w: w, h: h, ax: ax, ay: ay };
          if (o.tint) { dopts.tint = o.tint; dopts.tintAmount = o.tintAmount != null ? o.tintAmount : 0.5; }
          K.draw(ctx, po.image, 0, 0, dopts);
        } else if (p.draw) {
          ctx.translate(-ax * (w || 0), -ay * (h || 0));
          p.draw(ctx, w, h, o);
        }
        ctx.restore();
      });
      ctx.restore();
      return inst;
    };
    return inst;
  }

  K.rig = makeRig;
  K.Rig = makeRig;
  K.Rig.pose = rigPose;
  K.Rig.mul = mul;
  K.Rig.local = local;
  K.Rig.apply = apply;
  K.rigPose = rigPose;

  // ===== Mesh: deformers (pure) =========================================
  // A deformer is fn(u, v, t) -> {dx, dy}. u, v are 0..1 across the sprite (v=0 top). dx, dy are fractions of the
  // drawn width and height. t is milliseconds. Numeric arguments may also be fn(t) -> number for animation.

  function val(x, t) { return typeof x === 'function' ? x(t) : x; }
  var D = K.deform = {};

  // Rises and widens from the base (bottom centre), like a breath.
  D.breathe = function (amp, hz) {
    return function (u, v, t) {
      var s = val(amp, t) * Math.sin(TAU * val(hz, t) * (t || 0) / 1000);
      return { dx: (u - 0.5) * s * 0.5, dy: (v - 1) * s };
    };
  };
  // Whole-sprite jelly shimmy.
  D.wobble = function (amp, hz, phase) {
    return function (u, v, t) {
      var a = val(amp, t), w = TAU * val(hz, t) * (t || 0) / 1000 + (phase || 0);
      return { dx: a * Math.sin(w + v * 3), dy: a * 0.6 * Math.cos(w + u * 3) };
    };
  };
  // Pushes outward from (cx, cy) inside radius (uv units); amount > 0 puffs, < 0 pinches.
  D.bulge = function (cx, cy, radius, amount) {
    return function (u, v, t) {
      var r = val(radius, t), a = val(amount, t), px = u - cx, py = v - cy;
      var d = Math.sqrt(px * px + py * py);
      if (!(r > 0) || d >= r) return { dx: 0, dy: 0 };
      var f = 1 - d / r; f = f * f * (3 - 2 * f); // smooth falloff
      return { dx: px * a * f, dy: py * a * f };
    };
  };
  // Bends sideways from a fixed base (v = 1). The top moves by topAmp (fraction of width).
  D.sway = function (topAmp, hz) {
    return function (u, v, t) {
      var k = 1 - v;
      return { dx: val(topAmp, t) * k * k * Math.sin(TAU * val(hz, t) * (t || 0) / 1000 + k * 1.2), dy: 0 };
    };
  };
  // Scales about an anchor (default bottom centre). sx = sy = 1 is identity.
  D.squash = function (sx, sy, ax, ay) {
    ax = ax != null ? ax : 0.5; ay = ay != null ? ay : 1;
    return function (u, v, t) { return { dx: (u - ax) * (val(sx, t) - 1), dy: (v - ay) * (val(sy, t) - 1) }; };
  };
  // Adds the offsets of every deformer.
  D.combine = function () {
    var fns = Array.prototype.slice.call(arguments).filter(function (f) { return typeof f === 'function'; });
    return function (u, v, t) {
      var dx = 0, dy = 0;
      for (var i = 0; i < fns.length; i++) { var r = fns[i](u, v, t); dx += r.dx; dy += r.dy; }
      return { dx: dx, dy: dy };
    };
  };

  // ===== Mesh: textured grid on canvas 2D ===============================

  // Reads the drawable behind a manifest name by letting Kit.draw hand it to a stub context.
  function grab(name, o) {
    var got = null, stub = {
      globalAlpha: 1, save: noop, restore: noop, translate: noop, rotate: noop, scale: noop, transform: noop,
      drawImage: function (img) { got = img; }
    };
    function noop() {}
    var opts = { w: 1, h: 1 };
    if (o.tint) { opts.tint = o.tint; opts.tintAmount = o.tintAmount != null ? o.tintAmount : 0.5; }
    if (o.multiply) { opts.multiply = o.multiply; opts.multiplyAmount = o.multiplyAmount != null ? o.multiplyAmount : 0.5; }
    K.draw(stub, name, 0, 0, opts);
    return got;
  }

  // Kit.mesh(imageName, {cols=8, rows=8}) -> m. m.draw(ctx, x, y, opts) draws the deformed grid.
  // (x, y) is the anchor point (default bottom centre, like Kit.draw).
  K.mesh = function (imageName, cfg) {
    cfg = cfg || {};
    var cols = Math.max(1, cfg.cols | 0 || 8), rows = Math.max(1, cfg.rows | 0 || 8);
    var m = { image: imageName, cols: cols, rows: rows };
    var pts = [], i;
    for (i = 0; i < (cols + 1) * (rows + 1); i++) pts.push({ x: 0, y: 0 });

    // opts: {w, h, ax=.5, ay=1, deform, t=0, flipX, alpha, tint, tintAmount, multiply, multiplyAmount, name}
    // opts.name swaps the image for this draw (for example a croak frame).
    m.draw = function (ctx, x, y, opts) {
      var o = opts || {}, name = o.name || imageName;
      if (!K.has(name)) { K.draw(ctx, name, x, y, o); return m; } // fallback shape or nothing, like Kit.draw
      var img = grab(name, o);
      if (!img) return m;
      var iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
      var w = o.w != null ? o.w : (o.h != null ? o.h * iw / ih : iw);
      var h = o.h != null ? o.h : w * ih / iw;
      var ax = o.ax != null ? o.ax : 0.5, ay = o.ay != null ? o.ay : 1;
      var def = o.deform, t = o.t || 0, c, r, p = 0;
      for (r = 0; r <= rows; r++) {
        for (c = 0; c <= cols; c++, p++) {
          var u = c / cols, v = r / rows, d = def ? def(u, v, t) : null;
          pts[p].x = (u - ax + (d ? d.dx : 0)) * w;
          pts[p].y = (v - ay + (d ? d.dy : 0)) * h;
        }
      }
      ctx.save();
      ctx.translate(x, y);
      if (o.flipX) ctx.scale(-1, 1);
      if (o.alpha != null) ctx.globalAlpha *= o.alpha;
      var stride = cols + 1;
      for (r = 0; r < rows; r++) {
        for (c = 0; c < cols; c++) {
          var i0 = r * stride + c, i1 = i0 + 1, i2 = i0 + stride, i3 = i2 + 1;
          tri(ctx, img, iw, ih, c / cols, r / rows, (c + 1) / cols, r / rows, c / cols, (r + 1) / rows, pts[i0], pts[i1], pts[i2]);
          tri(ctx, img, iw, ih, (c + 1) / cols, r / rows, (c + 1) / cols, (r + 1) / rows, c / cols, (r + 1) / rows, pts[i1], pts[i3], pts[i2]);
        }
      }
      ctx.restore();
      return m;
    };
    return m;
  };

  // One textured triangle: source uv points (u0,v0)(u1,v1)(u2,v2) onto destination points d0 d1 d2.
  function tri(ctx, img, iw, ih, u0, v0, u1, v1, u2, v2, d0, d1, d2) {
    var s0x = u0 * iw, s0y = v0 * ih, s1x = u1 * iw, s1y = v1 * ih, s2x = u2 * iw, s2y = v2 * ih;
    var e1x = s1x - s0x, e1y = s1y - s0y, e2x = s2x - s0x, e2y = s2y - s0y;
    var det = e1x * e2y - e1y * e2x;
    if (!det) return;
    var f1x = d1.x - d0.x, f1y = d1.y - d0.y, f2x = d2.x - d0.x, f2y = d2.y - d0.y;
    var a = (f1x * e2y - f2x * e1y) / det, c = (f2x * e1x - f1x * e2x) / det;
    var b = (f1y * e2y - f2y * e1y) / det, d = (f2y * e1x - f1y * e2x) / det;
    var e = d0.x - a * s0x - c * s0y, f = d0.y - b * s0x - d * s0y;
    // clip to the destination triangle, pushed out 0.5 px from its centre so neighbours overlap
    var cx = (d0.x + d1.x + d2.x) / 3, cy = (d0.y + d1.y + d2.y) / 3;
    ctx.save();
    ctx.beginPath();
    grow(ctx, d0, cx, cy, true); grow(ctx, d1, cx, cy, false); grow(ctx, d2, cx, cy, false);
    ctx.closePath();
    ctx.clip();
    ctx.transform(a, b, c, d, e, f);
    // draw only the source box around the triangle (plus a texel of margin)
    var bx = Math.max(0, Math.min(s0x, s1x, s2x) - 1), by = Math.max(0, Math.min(s0y, s1y, s2y) - 1);
    var bx2 = Math.min(iw, Math.max(s0x, s1x, s2x) + 1), by2 = Math.min(ih, Math.max(s0y, s1y, s2y) + 1);
    ctx.drawImage(img, bx, by, bx2 - bx, by2 - by, bx, by, bx2 - bx, by2 - by);
    ctx.restore();
  }
  function grow(ctx, p, cx, cy, first) {
    var dx = p.x - cx, dy = p.y - cy, l = Math.sqrt(dx * dx + dy * dy) || 1;
    var x = p.x + dx / l * 0.5, y = p.y + dy / l * 0.5;
    if (first) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  K.mesh._tri = tri;

  if (typeof module !== 'undefined') module.exports = K;
})();

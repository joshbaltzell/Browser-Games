// Drop Machine simulation. No DOM, no randomness: the same machine always gives the same path.
// Units: pit is 360 wide, 640 tall (plus 320 per floor). y grows downward. Time in seconds.
var DM = (function () {
  'use strict';

  var PIT_W = 360, BASE_H = 640, FLOOR_H = 320, MAX_FLOORS = 3;
  var G = 4300;                 // gravity: a 640 unit fall takes about one beat at 110 BPM
  var STEP = 1 / 480;           // fixed physics step
  var BALL_R = 6, DROP_Y = 16;
  var SOFT_SPEED = 90;          // below this impact speed a ball rolls without a sound
  var COOLDOWN = 0.04;          // seconds before the same part can sound again
  var WALL_E = 0.8;
  var REST_SPEED = 60, REST_TIME = 0.25;   // a ball this slow for this long is at rest
  var LIFE_CHOICES = [1, 2, 4, 8, 16];     // ball life in beats (4 = one bar)
  var RESTIT = { real: 0.55, musical: 0.8, forever: 1 };

  var SCALES = {
    minorPent: { name: 'Minor pentatonic', iv: [0, 3, 5, 7, 10], mood: 'moody, hard to make sound wrong' },
    majorPent: { name: 'Major pentatonic', iv: [0, 2, 4, 7, 9], mood: 'bright and folky' },
    minor: { name: 'Minor', iv: [0, 2, 3, 5, 7, 8, 10], mood: 'sad or serious' },
    major: { name: 'Major', iv: [0, 2, 4, 5, 7, 9, 11], mood: 'happy, like most pop' },
    dorian: { name: 'Dorian', iv: [0, 2, 3, 5, 7, 9, 10], mood: 'cool, a bit jazzy' }
  };
  var KEYS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
  var NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  var BAR_MIN = 40, BAR_MAX = 220;
  var DRUM_LEN = { big: 96, medium: 68, small: 44 };
  var DRUM_KIND = { big: 'kick', medium: 'snare', small: 'hat' };
  var CAP_R = { bar: 4, drum: 7, pad: 5 };
  var PAD_LEN = 56;
  var BAR_BASE = 48;            // lowest bar note is C3 plus the key

  function noteName(midi) { return NOTE_NAMES[((midi % 12) + 12) % 12] + (Math.floor(midi / 12) - 1); }

  function pitHeight(pit) { return BASE_H + FLOOR_H * (pit.floors || 0); }

  // ---- pitch -------------------------------------------------------
  function barDegreeCount(scale) { return Math.round(SCALES[scale].iv.length * 2.5); }
  function barDegree(len, scale) {
    var n = barDegreeCount(scale);
    var d = Math.round((BAR_MAX - len) / (BAR_MAX - BAR_MIN) * (n - 1));
    return Math.max(0, Math.min(n - 1, d));
  }
  function barLenForDegree(deg, scale) {
    var n = barDegreeCount(scale);
    return BAR_MAX - (BAR_MAX - BAR_MIN) * deg / (n - 1);
  }
  function snapBarLen(len, scale) { return barLenForDegree(barDegree(len, scale), scale); }
  function degreeMidi(deg, key, scale) {
    var iv = SCALES[scale].iv, n = iv.length, oct = Math.floor(deg / n);
    return BAR_BASE + key + 12 * oct + iv[deg - oct * n];
  }
  // MIDI note a bar plays, or null for parts without a pitch.
  function partMidi(part, pit, machine) {
    if (part.type !== 'bar') return null;
    var deg = barDegree(part.len, machine.scale) + (pit.transpose || 0);
    return degreeMidi(deg, machine.key, machine.scale) + (part.material === 'glass' ? 12 : 0);
  }
  function inScale(midi, key, scale) {
    var rel = (((midi - BAR_BASE - key) % 12) + 12) % 12;
    return SCALES[scale].iv.indexOf(rel) >= 0;
  }

  // ---- geometry ----------------------------------------------------
  function partLen(p) {
    if (p.type === 'bar') return p.len;
    if (p.type === 'drum') return DRUM_LEN[p.size] || DRUM_LEN.medium;
    return PAD_LEN;
  }
  function partAngle(p) { return p.angle || 0; }
  function angleRange(p) { return p.type === 'bar' ? 90 : p.type === 'drum' ? 45 : 30; }
  function lifeBeats(pit) { return pit.life || 4; }
  // A part is a capsule: a segment with a radius.
  function capsule(p) {
    var a = partAngle(p) * Math.PI / 180, h = partLen(p) / 2;
    var c = Math.cos(a), s = Math.sin(a);
    return { ax: p.x - c * h, ay: p.y - s * h, bx: p.x + c * h, by: p.y + s * h, r: CAP_R[p.type], ux: s, uy: -c };
  }
  function closestOnSeg(c, x, y) {
    var dx = c.bx - c.ax, dy = c.by - c.ay, l2 = dx * dx + dy * dy;
    var u = l2 > 0 ? ((x - c.ax) * dx + (y - c.ay) * dy) / l2 : 0;
    u = Math.max(0, Math.min(1, u));
    return { x: c.ax + dx * u, y: c.ay + dy * u };
  }
  function distToPart(p, x, y) {
    var c = capsule(p), q = closestOnSeg(c, x, y);
    return Math.hypot(x - q.x, y - q.y) - c.r;
  }

  // ---- the path of one ball ----------------------------------------
  // Returns {path:{n, dt, x[], y[]}, hits:[{t, partId, speed, x, y}], end, dur}.
  function simulatePit(pit, machine, di, xOver) {
    migratePit(pit);
    var drop = pit.droppers[di || 0];
    var beat = 60 / machine.bpm, limit = lifeBeats(pit) * beat, restT = 0;
    var height = pitHeight(pit);
    var caps = pit.parts.map(capsule);
    var last = pit.parts.map(function () { return -1; });
    var x = xOver != null ? xOver : drop.x, y = DROP_Y, vx = 0, vy = 0, t = 0;
    var px = [x], py = [y], hits = [], end = 'limit';
    var total = Math.round(limit / STEP);
    for (var i = 1; i <= total; i++) {
      x += vx * STEP; y += vy * STEP + 0.5 * G * STEP * STEP; vy += G * STEP; t = i * STEP;
      if (x < BALL_R) { x = BALL_R; if (vx < 0) vx = -vx * WALL_E; }
      if (x > PIT_W - BALL_R) { x = PIT_W - BALL_R; if (vx > 0) vx = -vx * WALL_E; }
      var stuck = false;
      if (vx * vx + vy * vy < REST_SPEED * REST_SPEED) restT += STEP; else restT = 0;
      for (var j = 0; j < caps.length; j++) {
        var c = caps[j], p = pit.parts[j], q = closestOnSeg(c, x, y);
        var dx = x - q.x, dy = y - q.y, d = Math.hypot(dx, dy), rr = BALL_R + c.r;
        if (d >= rr) continue;
        var nx, ny;
        if (d < 1e-6) { nx = c.ux; ny = c.uy; } else { nx = dx / d; ny = dy / d; }
        var vn = vx * nx + vy * ny;
        if (vn >= 0) continue;                       // already leaving
        var pen = rr - d, tau = Math.min(pen / -vn, STEP);
        vy -= G * tau; vn = vx * nx + vy * ny;       // velocity at the true moment of contact
        var speed = -vn;
        if (speed <= 0) { vy += G * tau; continue; }
        var sticky = p.type !== 'pad' && p.bounce === 'sticky';
        var locked = ((p.type === 'pad' && p.mode !== 'forever') || (p.type === 'drum' && p.bounce === 'locked')) && (nx * c.ux + ny * c.uy) > 0.5;
        // Put the ball on the surface at the true moment of contact, then let it fly for the rest of the step.
        x -= vx * tau; y -= vy * tau + 0.5 * G * tau * tau;
        if (locked) {
          var T = beat * 4 / (p.div || 8);                                   // time to rise and fall back
          var upSpeed = G * T / 2, s = upSpeed / (-c.uy);                 // vertical part of the push
          vx = c.ux * s; vy = c.uy * s;
        } else {
          var e = p.type === 'pad' ? 1 : (RESTIT[p.bounce] != null ? RESTIT[p.bounce] : RESTIT.musical);
          if (speed < 40) e = 0;
          vx -= (1 + e) * vn * nx; vy -= (1 + e) * vn * ny;
        }
        x += vx * tau; y += vy * tau + 0.5 * G * tau * tau; vy += G * tau;
        var th = t - tau;
        if (sticky || (speed >= SOFT_SPEED && th - last[j] >= COOLDOWN)) {
          hits.push({ t: th, partId: p.id, speed: speed, x: q.x + nx * c.r, y: q.y + ny * c.r });
          last[j] = th;
        }
        if (sticky) { stuck = true; break; }
      }
      if (i % 4 === 0 || stuck) { px.push(x); py.push(y); }
      if (stuck) { end = 'sticky'; break; }
      if (restT >= REST_TIME) { end = 'rest'; px.push(x); py.push(y); break; }
      if (y > height + 40) { end = 'out'; px.push(x); py.push(y); break; }
    }
    return { path: { dt: STEP * 4, x: px, y: py }, hits: hits, end: end, dur: t };
  }

  // Ball position at time tt (seconds after drop).
  function pathAt(res, tt, out) {
    var P = res.path, f = Math.max(0, tt) / P.dt, i = Math.floor(f), n = P.x.length;
    if (i >= n - 1) { out.x = P.x[n - 1]; out.y = P.y[n - 1]; return out; }
    var u = f - i;
    out.x = P.x[i] + (P.x[i + 1] - P.x[i]) * u; out.y = P.y[i] + (P.y[i + 1] - P.y[i]) * u;
    return out;
  }

  // ---- timing: the Tight/Free dial ---------------------------------
  function snapTime(t, tight, stepDur) {
    var snapped = Math.round(t / stepDur) * stepDur;
    return Math.max(0, t + tight * (snapped - t));
  }
  function startDelaySteps(pit) { return (pit.offsetBars || 0) * 16 + (pit.offset || 0); }
  // Is the dropper lit on this global 1/16 step?
  function stepLit(pit, step, di) {
    var d = startDelaySteps(pit);
    if (step < d) return false;
    var dr = pit.droppers[di || 0];
    return !!dr.steps[(step - d) % dr.steps.length];
  }
  // Where the dropper is when it releases on this global step (each lit step can have its own x).
  function stepX(pit, step, di) {
    var dr = pit.droppers[di || 0], i = (step - startDelaySteps(pit)) % dr.steps.length;
    return dr.xs && dr.xs[i] != null ? dr.xs[i] : dr.x;
  }
  // Older saves had one dropper as pit.dropperX and pit.steps.
  function migratePit(pit) {
    if (pit.droppers) return pit;
    pit.droppers = [{ x: pit.dropperX == null ? 180 : pit.dropperX, steps: pit.steps || EMPTY_STEPS().slice() }];
    delete pit.dropperX; delete pit.steps;
    return pit;
  }
  // Make sure a dropper has bars (1, 2, 4 or 8) and a step list of 16 per bar.
  function fixDropper(d) {
    if ([1, 2, 4, 8].indexOf(d.bars) < 0) d.bars = Math.max(1, Math.round((d.steps ? d.steps.length : 16) / 16)) || 1;
    if ([1, 2, 4, 8].indexOf(d.bars) < 0) d.bars = 1;
    var a = [], i; for (i = 0; i < 16 * d.bars; i++) a.push(!!(d.steps && d.steps[i]));
    d.steps = a;
    return d;
  }
  function EMPTY_STEPS() { return [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0].map(Boolean); }
  function simulateAll(pit, machine) {
    migratePit(pit);
    return pit.droppers.map(function (d, i) {
      var res = simulatePit(pit, machine, i), xs = dropXs(pit, i);
      if (xs.length > 1) {      // a slide dropper: one cached path per distinct x
        res.byX = {};
        xs.forEach(function (x) { res.byX[x] = x === d.x ? res : simulatePit(pit, machine, i, x); });
      }
      return res;
    });
  }
  // All distinct drop positions of a dropper: its own x and every per-step x on a lit step.
  function dropXs(pit, di) {
    var dr = pit.droppers[di], out = [dr.x];
    if (dr.xs) dr.steps.forEach(function (on, i) { if (on && dr.xs[i] != null && out.indexOf(dr.xs[i]) < 0) out.push(dr.xs[i]); });
    return out;
  }
  // A ball is released early so its first sound lands exactly on the lit step. Seconds.
  function leadTime(res, machine, sd) {
    return res.hits.length ? snapTime(res.hits[0].t, machine.tight, sd) : 0;
  }

  // ---- machines -----------------------------------------------------
  function newPit(id) {
    return { id: id, floors: 0, life: 4, droppers: [{ x: 180, steps: EMPTY_STEPS() }],
      parts: [], vol: 0.8, mute: false, solo: false, transpose: 0, offset: 0, offsetBars: 0 };
  }
  function newMachine() {
    return { v: 1, bpm: 110, key: 0, scale: 'minorPent', tight: 0.7, master: 0.8, nextId: 1, pits: [newPit(1)] };
  }
  function addPart(machine, pit, spec) {
    var p = { id: machine.nextId++, type: spec.type, x: spec.x, y: spec.y, bounce: spec.bounce || 'musical' };
    if (spec.type === 'bar') { p.len = spec.len || 100; p.angle = spec.angle || 0; p.material = spec.material || 'wood'; }
    if (spec.type === 'drum') { p.size = spec.size || 'medium'; p.angle = spec.angle || 0; p.div = spec.div || 8; }
    if (spec.type === 'pad') { p.angle = spec.angle || 0; p.mode = spec.mode || 'locked'; p.div = spec.div || 8; }
    for (var k in spec) if (!(k in p)) p[k] = spec[k];
    pit.parts.push(p);
    return p;
  }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  // Copy a pit. opts: {transpose, offsetBars, mirror}. Returns the new pit (not yet added).
  function duplicatePit(machine, pit, opts) {
    opts = opts || {};
    var n = clone(pit);
    n.id = machine.pits.reduce(function (m, q) { return Math.max(m, q.id); }, 0) + 1;
    n.mute = false; n.solo = false;
    n.parts.forEach(function (p) {
      p.id = machine.nextId++;
      if (opts.mirror) { p.x = PIT_W - p.x; if (p.angle) p.angle = -p.angle; }
    });
    migratePit(n);
    if (opts.mirror) n.droppers.forEach(function (d) { d.x = PIT_W - d.x; });
    n.transpose = Math.max(-7, Math.min(7, (pit.transpose || 0) + (opts.transpose || 0)));
    n.offsetBars = Math.max(0, Math.min(3, opts.offsetBars || 0));
    return n;
  }

  // Steady-state loop of a pit: every hit placed on the 16 step grid (fractional steps), already snapped.
  // Used by the score strip and the checks. Hits that overflow the loop wrap round.
  function loopEvents(pit, machine, results) {
    migratePit(pit);
    var stepDur = 60 / machine.bpm / 4, d = startDelaySteps(pit), out = [];
    pit.droppers.forEach(function (dr, di) {
      var L = dr.steps.length;
      for (var k = 0; k < L; k++) {
        if (!dr.steps[k]) continue;
        var rk = results[di];
        if (dr.xs && dr.xs[k] != null && results[di].byX && results[di].byX[dr.xs[k]]) rk = results[di].byX[dr.xs[k]];
        var lead = leadTime(rk, machine, stepDur);
        rk.hits.forEach(function (h) {
          var part = null;
          for (var i = 0; i < pit.parts.length; i++) if (pit.parts[i].id === h.partId) part = pit.parts[i];
          if (!part) return;
          var tt = snapTime(h.t, machine.tight, stepDur) - lead;
          var pos = ((k + d + tt / stepDur) % L + L) % L;
          var kind = part.type === 'bar' ? 'note' : part.type === 'pad' ? 'tick' : DRUM_KIND[part.size];
          out.push({ pos: pos, partId: part.id, kind: kind, midi: partMidi(part, pit, machine), speed: h.speed, rawStep: k, dropper: di, t: h.t, len: L });
        });
      }
    });
    return out;
  }

  // ---- ready-made pits --------------------------------------------------
  function evens() { return [0, 2, 4, 6, 8, 10, 12, 14]; }
  function every() { var o = []; for (var i = 0; i < 16; i++) o.push(i); return o; }
  function without(list, drop) { return list.filter(function (v) { return drop.indexOf(v) < 0; }); }
  function stepsOf(list) { var a = []; for (var i = 0; i < 16; i++) a.push(list.indexOf(i) >= 0); return a; }
  // Each lane: lit = steps that drop a ball; loop = one flat beat-locked skin repeating every N steps;
  // gaps = a chain of beat-locked skins that ricochet, N steps apart, ending on a sticky skin; neither = one sticky skin.
  var DRUM_BEATS = [
    { id: 'house', name: 'Four on the floor', tempo: 120, desc: 'The steady dance beat: kick on every beat, bouncing on its own.', kick: [0, 4, 8, 12], snare: [4, 12], hat: [2, 6, 10, 14],
      lanes: { kick: { lit: [0], loop: 4 }, snare: { lit: [4], loop: 8 }, hat: { lit: [2], loop: 4 } } },
    { id: 'rock', name: 'Rock', tempo: 110, desc: 'Kick, snare on 2 and 4, hats bouncing on every eighth.', kick: [0, 8, 10], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14],
      lanes: { kick: { lit: [0], gaps: [8, 2] }, snare: { lit: [4], loop: 8 }, hat: { lit: [0], loop: 2 } } },
    { id: 'boombap', name: 'Boom bap', tempo: 90, desc: 'Slow 90s hip hop. The kick ricochets between three skins.', kick: [0, 7, 10], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14],
      lanes: { kick: { lit: [0], gaps: [7, 3] }, snare: { lit: [4], loop: 8 }, hat: { lit: [0], loop: 2 } } },
    { id: 'trap', name: 'Trap', tempo: 140, desc: 'Half-time feel: one snare, hats that skitter in pairs.', kick: [0, 6, 11], snare: [8], hat: [0, 1, 4, 5, 8, 9, 12, 13],
      lanes: { kick: { lit: [0], gaps: [6, 5] }, snare: { lit: [8] }, hat: { lit: [0, 4, 8, 12], gaps: [1] } } },
    { id: 'reggaeton', name: 'Reggaeton', tempo: 95, desc: 'The dembow groove: steady kick, snare in a skip pattern.', kick: [0, 4, 8, 12], snare: [3, 6, 11, 14], hat: [],
      lanes: { kick: { lit: [0], loop: 4 }, snare: { lit: [3, 11], gaps: [3] }, hat: { lit: [] } } },
    { id: 'funk', name: 'Funk', tempo: 100, desc: 'Syncopated kick, ricocheting snares, constant sixteenth hats.', kick: [0, 3, 10], snare: [4, 7, 12, 15], hat: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      lanes: { kick: { lit: [0], gaps: [3, 7] }, snare: { lit: [4, 12], gaps: [3] }, hat: { lit: [0], loop: 1 } } },
    { id: 'breakbeat', name: 'Breakbeat', tempo: 130, desc: 'A skittering break, a simple take on the classic.', kick: [0, 10], snare: [4, 12, 14], hat: [0, 2, 4, 6, 8, 10, 12, 14],
      lanes: { kick: { lit: [0, 10] }, snare: { lit: [4], gaps: [8, 2] }, hat: { lit: [0], loop: 2 } } }
  ];
  var KIND_LEN = { kick: 96, snare: 68, hat: 44 };
  var KIND_SIZE = { kick: 'big', snare: 'medium', hat: 'small' };
  var DRUM_RR = BALL_R + CAP_R.drum;
  var DELTAS = [0, 14, 22, 32, 46], EXTRAS = [0, 10, 22, 36, 55, -6, -12, -16];

  // Lay out one lane with its first skin's contact point at x = x0. Returns {parts:[...], width, offsetX} or null.
  // Each hop is a beat-locked skin: it throws the ball so the next skin is reached exactly `gap` steps later.
  function layoutLane(kind, lane, x0, sd, beat) {
    var len = KIND_LEN[kind], size = KIND_SIZE[kind], rr = DRUM_RR;
    if (lane.loop) {
      var g = lane.loop, T = g * sd, rise = G * T * T / 8;
      var yc = Math.max(50, rise - 20);
      yc = Math.min(yc, 16 + 0.9 * 0.5 * G * T * T, 620);
      return { dropperX: x0, parts: [{ size: size, x: x0, y: yc + rr, angle: 0, bounce: 'locked', div: 4 * beat / T }], x0: x0, width: len, checkOffsets: null };
    }
    if (!lane.gaps || !lane.gaps.length) return { dropperX: x0, parts: [{ size: size, x: x0, y: 200, angle: 0, bounce: 'sticky' }], x0: x0, width: len };
    var best = null;
    for (var ei = 0; ei < EXTRAS.length && !best; ei++) for (var di = 0; di < DELTAS.length && !best; di++) for (var same = 0; same < 2 && !best; same++) {
      var dx = len / 2 + 15 + EXTRAS[ei], dl = DELTAS[di], hops = [], ok = true, need = 0, acc = 0, dir = 1;
      for (var i = 0; i < lane.gaps.length; i++) {
        var t = lane.gaps[i] * sd, Tl = t - 2 * dl / (G * t);
        if (Tl < 0.03) { ok = false; break; }
        var vup = G * Tl / 2, ang = Math.atan(dir * dx / (vup * t)) * 180 / Math.PI;
        if (Math.abs(ang) > 45) { ok = false; break; }
        hops.push({ T: Tl, ang: ang, dx: dir * dx });
        need = Math.max(need, vup * vup / (2 * G) - 60 - acc); acc += dl; if (!same) dir = -dir;
      }
      if (!ok) continue;
      var y0 = Math.min(Math.max(60, need), 600 - acc);
      var cx = x0, cy = y0, parts = [], minX = x0, maxX = x0;
      hops.forEach(function (h) {
        var a = h.ang * Math.PI / 180;
        parts.push({ size: size, x: cx - Math.sin(a) * rr, y: cy + Math.cos(a) * rr, angle: h.ang, bounce: 'locked', div: 4 * beat / h.T });
        cx += h.dx; cy += dl; minX = Math.min(minX, cx); maxX = Math.max(maxX, cx);
      });
      parts.push({ size: size, x: cx, y: cy + rr, angle: 0, bounce: 'sticky' });
      var cand = { dropperX: x0, parts: parts, x0: x0, width: maxX - minX + len, minX: minX - len / 2 };
      if (typeof process !== 'undefined' && process.env.LANEDBG) console.log('cand', EXTRAS[ei], dl, same, hops.map(function (h) { return h.ang.toFixed(1); }).join(','), verifyLane(lane, cand, sd, beat));
      if (verifyLane(lane, cand, sd, beat)) best = cand;
    }
    return best;
  }
  // Simulate one ball alone and check the hit list matches the lane exactly (within 1 ms).
  function verifyLane(lane, cand, sd, beat) {
    var m = { bpm: 60 / (beat), tight: 0, nextId: 1 }, pit = newPit(1), want = laneOffsets(lane);
    pit.droppers = [{ x: cand.dropperX, steps: stepsOf([0]) }];
    cand.parts.forEach(function (sp) { addPart(m, pit, { type: 'drum', size: sp.size, x: sp.x, y: sp.y, angle: sp.angle, bounce: sp.bounce, div: sp.div }); });
    var r = simulatePit(pit, m, 0);
    if (typeof process !== 'undefined' && process.env.LANEDBG) console.log('   hits', r.hits.map(function (h) { return h.partId + ':' + ((h.t - r.hits[0].t) / sd).toFixed(3); }).join(' '), 'want', want.join(','), r.end);
    if (r.hits.length !== want.length) return false;
    for (var i = 0; i < want.length; i++) if (Math.abs((r.hits[i].t - r.hits[0].t) - want[i] * sd) > 0.001) return false;
    return true;
  }
  function laneOffsets(lane) {      // expected hit offsets (steps) of one ball
    if (lane.loop) { var o = []; for (var j = 0; j * lane.loop < 16; j++) o.push(j * lane.loop); return o; }
    var off = [0], c = 0; (lane.gaps || []).forEach(function (g) { c += g; off.push(c); }); return off;
  }
  // Three lanes (kick, snare, hat), each with its own dropper. Solved for the machine's current tempo.
  function makeDrumKit(machine, id, beat) {
    var pit = newPit(id), sd = 60 / machine.bpm / 4, bt = 60 / machine.bpm, kinds = ['kick', 'snare', 'hat'];
    var lanes = kinds.map(function (k) {
      var l = layoutLane(k, beat.lanes[k], 100, sd, bt);
      if (!l) {      // could not solve at this tempo: fall back to one sticky skin per hit
        beat.lanes[k] = { lit: beat[k].slice() };
        l = layoutLane(k, beat.lanes[k], 100, sd, bt);
      }
      return l;
    });
    var total = 0; lanes.forEach(function (l) { total += l.width; });
    var gap = Math.max(4, (PIT_W - total) / 4), left = gap;
    pit.droppers = [];
    lanes.forEach(function (l, i) {
      var minX = l.minX != null ? l.minX : l.x0 - KIND_LEN[kinds[i]] / 2, shift = left - minX;
      l.parts.forEach(function (sp) { sp.x += shift; addPart(machine, pit, { type: 'drum', size: sp.size, x: sp.x, y: sp.y, angle: sp.angle, bounce: sp.bounce, div: sp.div }); });
      pit.droppers.push({ x: l.dropperX + shift, steps: stepsOf(beat.lanes[kinds[i]].lit) });
      left += l.width + gap;
    });
    pit.template = beat.id;
    pit.sig = templateSig(pit);
    return pit;
  }
  function templateSig(pit) {
    return JSON.stringify([pit.droppers, pit.parts.map(function (p) { return [p.type, p.size, p.x, p.y, p.angle, p.bounce, p.div]; })]);
  }
  // After a tempo change, re-solve template pits that the player has not edited.
  function retuneTemplates(machine) {
    var changed = false;
    machine.pits.forEach(function (pit, i) {
      if (!pit.template || pit.sig !== templateSig(pit)) return;
      var beat = DRUM_BEATS.filter(function (b) { return b.id === pit.template; })[0]; if (!beat) return;
      var fresh = makeDrumKit(machine, pit.id, beat);
      ['vol', 'mute', 'solo', 'transpose', 'offset', 'offsetBars', 'life', 'floors'].forEach(function (k) { fresh[k] = pit[k]; });
      machine.pits[i] = fresh; changed = true;
    });
    return changed;
  }

  // ---- Korobeiniki (the Tetris theme, a 19th century Russian folk song, public domain) ----------
  // Melody as [step, note name]; one beat is 4 steps, 8 bars of 4/4 = 128 steps.
  var SONG_MELODY = [
    [0, 'E5'], [4, 'B4'], [6, 'C5'], [8, 'D5'], [12, 'C5'], [14, 'B4'],
    [16, 'A4'], [20, 'A4'], [22, 'C5'], [24, 'E5'], [28, 'D5'], [30, 'C5'],
    [32, 'B4'], [38, 'C5'], [40, 'D5'], [44, 'E5'],
    [48, 'C5'], [52, 'A4'], [56, 'A4'],
    [66, 'D5'], [70, 'F5'], [72, 'A5'], [76, 'G5'], [78, 'F5'],
    [80, 'E5'], [86, 'C5'], [88, 'E5'], [92, 'D5'], [94, 'C5'],
    [96, 'B4'], [100, 'B4'], [102, 'C5'], [104, 'D5'], [108, 'E5'],
    [112, 'C5'], [116, 'A4'], [120, 'A4']
  ];
  var SONG_BASS_ROOTS = ['E', 'A', 'E', 'A', 'D', 'C', 'E', 'A'];     // one root per bar, eighth notes
  var NOTE_DEG = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };        // steps above A in A natural minor
  // Bar degree for a note name (A3 is degree 0 in key A).
  function noteDeg(name) { var L = name[0], o = +name.slice(1); return ((L === 'A' || L === 'B') ? o - 3 : o - 4) * 7 + NOTE_DEG[L]; }
  // A xylophone: bars from top to bottom, each with its own clear column to drop into. Returns [{part, dropX}].
  function xylophone(machine, pit, degs, delta, y0, dy, material, tilt) {
    var out = [], prevR = 0;
    degs.forEach(function (d, k) {
      var len = barLenForDegree(d, machine.scale);
      var R = k === 0 ? 10 + len : prevR + delta, L = R - len;
      var part = addPart(machine, pit, { type: 'bar', x: L + len / 2, y: y0 + dy * k, len: len, angle: tilt, material: material, bounce: 'sticky' });
      out.push({ part: part, dropX: Math.round(k === 0 ? R - 20 : prevR + 15) });
      prevR = R;
    });
    return out;
  }
  // A slide dropper: bars is how many bars of pattern, hits is [[step, key]], xOf maps key to an x.
  function slideDropper(pit, bars, hits, xOf) {
    var steps = [], xs = [];
    for (var i = 0; i < 16 * bars; i++) { steps.push(false); xs.push(null); }
    hits.forEach(function (h) { steps[h[0]] = true; xs[h[0]] = xOf(h[1]); });
    pit.droppers[0] = { x: xOf(hits[0][1]), bars: bars, steps: steps, xs: xs };
  }
  function buildSong() {
    var m = newMachine();
    m.key = 9; m.scale = 'minor'; m.bpm = 144; m.tight = 0.7; m.pits = [];
    var notes = []; SONG_MELODY.forEach(function (e) { if (notes.indexOf(e[1]) < 0) notes.push(e[1]); });
    notes.sort(function (a, b) { return noteDeg(a) - noteDeg(b); });
    // melody: A4 to A5 on eight bars, one slide dropper with an 8-bar pattern
    var mel = newPit(1); mel.vol = 0.85;
    var xy = xylophone(m, mel, notes.map(noteDeg), 25, 110, 52, 'wood', -8), mx = {};
    notes.forEach(function (n, i) { mx[n] = xy[i].dropX; });
    slideDropper(mel, 8, SONG_MELODY, function (n) { return mx[n]; });
    m.pits.push(mel);
    // bass: root of each bar as eighth notes, an octave and a bit lower (shift -7 steps)
    var bass = newPit(2); bass.vol = 0.8; bass.transpose = -7;
    var roots = ['A', 'C', 'D', 'E'], bd = { A: 0, C: 2, D: 3, E: 4 };
    var by = xylophone(m, bass, roots.map(function (r) { return bd[r]; }), 40, 110, 70, 'wood', -6), bx = {};
    roots.forEach(function (r, i) { bx[r] = by[i].dropX; });
    var bh = []; SONG_BASS_ROOTS.forEach(function (r, bar) { for (var j = 0; j < 8; j++) bh.push([bar * 16 + j * 2, r]); });
    slideDropper(bass, 8, bh, function (r) { return bx[r]; });
    m.pits.push(bass);
    // drums: the bouncing rock beat, solved for 144 BPM
    var dr = buildPreset(m, 'rock'); dr.id = 3; dr.vol = 0.6;
    m.pits.push(dr);
    // harmony: the melody a third below, muted until you turn it on
    var har = duplicatePit(m, mel, { transpose: -2 }); har.id = 4; har.mute = true; har.vol = 0.6;
    m.pits.push(har);
    return m;
  }
  var SONG = { melody: SONG_MELODY, bassRoots: SONG_BASS_ROOTS, noteDeg: noteDeg };

  var PRESETS = [
    { id: 'empty', group: 'Basics', name: 'Empty', desc: 'A blank pit. Place your own parts.' },
    { id: 'stairs', group: 'Melody and bass', name: 'Melody stairs', desc: 'Four bars in a zig-zag staircase, ending on a beat-locked pad.' },
    { id: 'arp', group: 'Melody and bass', name: 'Arpeggio', desc: 'Four bars that walk up the notes one after another.' },
    { id: 'bass', group: 'Melody and bass', name: 'Bass bounce', desc: 'A beat-locked pad kicks the ball onto two low bars.' }
  ].concat(DRUM_BEATS.map(function (b) { return { id: b.id, group: 'Drum beats', name: b.name, desc: b.desc, tempo: b.tempo }; }),
    [{ id: 'korobeiniki', group: 'Famous tunes', name: 'Korobeiniki (Tetris theme)', desc: 'A Russian folk song. Loads a whole machine: melody, bass and drums, plus a muted harmony pit.', tempo: 144, whole: true }]);

  function buildPreset(machine, id) {
    var pit, nid = machine.pits.reduce(function (m, q) { return Math.max(m, q.id); }, 0) + 1;
    for (var i = 0; i < DRUM_BEATS.length; i++) if (DRUM_BEATS[i].id === id) return makeDrumKit(machine, nid, DRUM_BEATS[i]);
    pit = newPit(nid);
    if (id === 'stairs') {
      pit.droppers[0] = { x: 60, steps: stepsOf([0, 6, 10]) };
      addPart(machine, pit, { type: 'bar', x: 70, y: 110, len: 110, angle: 15 });
      addPart(machine, pit, { type: 'bar', x: 200, y: 200, len: 90, angle: -15 });
      addPart(machine, pit, { type: 'bar', x: 130, y: 300, len: 70, angle: 15 });
      addPart(machine, pit, { type: 'bar', x: 280, y: 310, len: 50, angle: -15 });
      addPart(machine, pit, { type: 'pad', x: 325, y: 520, angle: -30, mode: 'locked', div: 8 });
    } else if (id === 'arp') {
      pit.droppers[0] = { x: 230, steps: stepsOf([0, 8]) };
      addPart(machine, pit, { type: 'bar', x: 240, y: 140, len: 150, angle: 15 });
      addPart(machine, pit, { type: 'bar', x: 310, y: 230, len: 120, angle: -15 });
      addPart(machine, pit, { type: 'bar', x: 30, y: 350, len: 100, angle: 15 });
      addPart(machine, pit, { type: 'bar', x: 250, y: 510, len: 80, angle: -15 });
    } else if (id === 'bass') {
      pit.droppers[0] = { x: 90, steps: stepsOf([0, 8]) };
      addPart(machine, pit, { type: 'pad', x: 80, y: 100, angle: -30, mode: 'locked', div: 8 });
      addPart(machine, pit, { type: 'bar', x: 50, y: 220, len: 210, angle: 20 });
      addPart(machine, pit, { type: 'bar', x: 300, y: 350, len: 190, angle: -20 });
    }
    return pit;
  }

  // The starter machine, designed by listening to its hit list (dev/check.js prints it).
  function starterMachine() {
    var m = newMachine();
    m.pits = [];
    var a = buildPreset(m, 'stairs'); a.id = 1;
    m.pits.push(a);
    var b = buildPreset(m, 'rock'); b.id = 2;      // a drum kit pit, so the first load shows the idea
    m.pits.push(b);
    return m;
  }

  var api = {
    PIT_W: PIT_W, BAR_BASE: BAR_BASE, BASE_H: BASE_H, FLOOR_H: FLOOR_H, MAX_FLOORS: MAX_FLOORS, G: G, STEP: STEP, BALL_R: BALL_R,
    BAR_MIN: BAR_MIN, BAR_MAX: BAR_MAX, SCALES: SCALES, KEYS: KEYS, DRUM_KIND: DRUM_KIND, CAP_R: CAP_R,
    noteName: noteName, angleRange: angleRange, lifeBeats: lifeBeats, LIFE_CHOICES: LIFE_CHOICES, pitHeight: pitHeight, barDegreeCount: barDegreeCount, barDegree: barDegree,
    barLenForDegree: barLenForDegree, snapBarLen: snapBarLen, degreeMidi: degreeMidi, partMidi: partMidi,
    inScale: inScale, partLen: partLen, partAngle: partAngle, capsule: capsule, distToPart: distToPart,
    closestOnSeg: closestOnSeg, simulatePit: simulatePit, pathAt: pathAt, snapTime: snapTime,
    startDelaySteps: startDelaySteps, stepLit: stepLit, stepX: stepX, fixDropper: fixDropper, dropXs: dropXs, migratePit: migratePit, simulateAll: simulateAll, leadTime: leadTime, PRESETS: PRESETS, buildSong: buildSong, SONG: SONG, _layoutLane: layoutLane, retuneTemplates: retuneTemplates, laneOffsets: laneOffsets, templateSig: templateSig, DRUM_BEATS: DRUM_BEATS, buildPreset: buildPreset, stepsOf: stepsOf, newPit: newPit, newMachine: newMachine, addPart: addPart,
    clone: clone, duplicatePit: duplicatePit, loopEvents: loopEvents, starterMachine: starterMachine
  };
  return api;
})();
if (typeof module !== 'undefined') module.exports = DM;

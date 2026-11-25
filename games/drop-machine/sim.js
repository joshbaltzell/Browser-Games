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
  var RESTIT = { real: 0.55, musical: 0.8, forever: 1 };

  var SCALES = {
    minorPent: { name: 'Minor pentatonic', iv: [0, 3, 5, 7, 10] },
    majorPent: { name: 'Major pentatonic', iv: [0, 2, 4, 7, 9] },
    minor: { name: 'Minor', iv: [0, 2, 3, 5, 7, 8, 10] },
    major: { name: 'Major', iv: [0, 2, 4, 5, 7, 9, 11] },
    dorian: { name: 'Dorian', iv: [0, 2, 3, 5, 7, 9, 10] }
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
  function partAngle(p) { return p.type === 'drum' ? 0 : (p.angle || 0); }
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
  function simulatePit(pit, machine) {
    var beat = 60 / machine.bpm, limit = 16 * beat;
    var height = pitHeight(pit);
    var caps = pit.parts.map(capsule);
    var last = pit.parts.map(function () { return -1; });
    var x = pit.dropperX, y = DROP_Y, vx = 0, vy = 0, t = 0;
    var px = [x], py = [y], hits = [], end = 'limit';
    var total = Math.round(limit / STEP);
    for (var i = 1; i <= total; i++) {
      x += vx * STEP; y += vy * STEP + 0.5 * G * STEP * STEP; vy += G * STEP; t = i * STEP;
      if (x < BALL_R) { x = BALL_R; if (vx < 0) vx = -vx * WALL_E; }
      if (x > PIT_W - BALL_R) { x = PIT_W - BALL_R; if (vx > 0) vx = -vx * WALL_E; }
      var stuck = false;
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
        var locked = p.type === 'pad' && p.mode !== 'forever' && (nx * c.ux + ny * c.uy) > 0.5;
        // Put the ball on the surface at the true moment of contact, then let it fly for the rest of the step.
        x = q.x + nx * rr; y = q.y + ny * rr;
        if (locked) {
          var T = beat * (p.div === 4 ? 1 : p.div === 16 ? 0.25 : 0.5);   // time to rise and fall back
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
  function stepLit(pit, step) {
    var d = startDelaySteps(pit);
    if (step < d) return false;
    return !!pit.steps[(step - d) % 16];
  }

  // ---- machines -----------------------------------------------------
  function newPit(id) {
    return { id: id, floors: 0, dropperX: 180, steps: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0].map(Boolean),
      parts: [], vol: 0.8, mute: false, solo: false, transpose: 0, offset: 0, offsetBars: 0 };
  }
  function newMachine() {
    return { v: 1, bpm: 110, key: 0, scale: 'minorPent', tight: 0.7, master: 0.8, nextId: 1, pits: [newPit(1)] };
  }
  function addPart(machine, pit, spec) {
    var p = { id: machine.nextId++, type: spec.type, x: spec.x, y: spec.y, bounce: spec.bounce || 'musical' };
    if (spec.type === 'bar') { p.len = spec.len || 100; p.angle = spec.angle || 0; p.material = spec.material || 'wood'; }
    if (spec.type === 'drum') p.size = spec.size || 'medium';
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
    if (opts.mirror) n.dropperX = PIT_W - n.dropperX;
    n.transpose = Math.max(-7, Math.min(7, (pit.transpose || 0) + (opts.transpose || 0)));
    n.offsetBars = Math.max(0, Math.min(3, opts.offsetBars || 0));
    return n;
  }

  // Steady-state loop of a pit: every hit placed on the 16 step grid (fractional steps), already snapped.
  // Used by the score strip and the checks. Hits that overflow the loop wrap round.
  function loopEvents(pit, machine, res) {
    var stepDur = 60 / machine.bpm / 4, d = startDelaySteps(pit), out = [];
    for (var k = 0; k < 16; k++) {
      if (!pit.steps[k]) continue;
      res.hits.forEach(function (h) {
        var part = null;
        for (var i = 0; i < pit.parts.length; i++) if (pit.parts[i].id === h.partId) part = pit.parts[i];
        if (!part) return;
        var tt = snapTime(h.t, machine.tight, stepDur);
        var pos = ((k + d + tt / stepDur) % 16 + 16) % 16;
        var kind = part.type === 'bar' ? 'note' : part.type === 'pad' ? 'tick' : DRUM_KIND[part.size];
        out.push({ pos: pos, partId: part.id, kind: kind, midi: partMidi(part, pit, machine), speed: h.speed, rawStep: k, t: h.t });
      });
    }
    return out;
  }

  // The starter machine, designed by listening to its hit list (dev/check.js prints it).
  function starterMachine() {
    var m = newMachine();
    var a = m.pits[0];
    a.dropperX = 60;
    a.steps = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0].map(Boolean);
    // a zig-zag staircase of four wood bars, then a tilted beat-locked pad that kicks the ball on an eighth note
    addPart(m, a, { type: 'bar', x: 70, y: 110, len: 110, angle: 15 });
    addPart(m, a, { type: 'bar', x: 200, y: 200, len: 90, angle: -15 });
    addPart(m, a, { type: 'bar', x: 130, y: 300, len: 70, angle: 15 });
    addPart(m, a, { type: 'bar', x: 280, y: 310, len: 50, angle: -15 });
    addPart(m, a, { type: 'pad', x: 325, y: 520, angle: -30, mode: 'locked', div: 8 });
    // drums: the ball makes kick, snare, hat. Dropping on steps 6 and 14 gives kick 0, snare 3, hat 6, kick 8, snare 11, hat 14.
    var b = newPit(2);
    b.dropperX = 260;
    b.steps = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0].map(Boolean);
    addPart(m, b, { type: 'drum', size: 'big', x: 310, y: 150 });
    addPart(m, b, { type: 'drum', size: 'medium', x: 170, y: 240 });
    addPart(m, b, { type: 'drum', size: 'small', x: 140, y: 330, bounce: 'sticky' });
    m.pits.push(b);
    return m;
  }

  var api = {
    PIT_W: PIT_W, BASE_H: BASE_H, FLOOR_H: FLOOR_H, MAX_FLOORS: MAX_FLOORS, G: G, STEP: STEP, BALL_R: BALL_R,
    BAR_MIN: BAR_MIN, BAR_MAX: BAR_MAX, SCALES: SCALES, KEYS: KEYS, DRUM_KIND: DRUM_KIND, CAP_R: CAP_R,
    noteName: noteName, pitHeight: pitHeight, barDegreeCount: barDegreeCount, barDegree: barDegree,
    barLenForDegree: barLenForDegree, snapBarLen: snapBarLen, degreeMidi: degreeMidi, partMidi: partMidi,
    inScale: inScale, partLen: partLen, partAngle: partAngle, capsule: capsule, distToPart: distToPart,
    closestOnSeg: closestOnSeg, simulatePit: simulatePit, pathAt: pathAt, snapTime: snapTime,
    startDelaySteps: startDelaySteps, stepLit: stepLit, newPit: newPit, newMachine: newMachine, addPart: addPart,
    clone: clone, duplicatePit: duplicatePit, loopEvents: loopEvents, starterMachine: starterMachine
  };
  return api;
})();
if (typeof module !== 'undefined') module.exports = DM;

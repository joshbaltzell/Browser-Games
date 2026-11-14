// Pure rules for Mabel & the Mabels. No DOM, no Date, no Math.random.
var BandSim = (function () {
  'use strict';
  var LOOP = 16;

  // Ranges in world pixels. The game copies its TUNE values in here; the defaults are the plan's numbers.
  var cfg = { ringBase: 120, ringPer: 30, guitarPush: 20, tambRadius: 80, trumpetLen: 320, trumpetHalf: 25, trumpetPush: 60 };

  // Instrument shapes.
  var INSTR = {
    guitar:  { shape: 'ring', radius: function (p) { return cfg.ringBase + cfg.ringPer * p; }, charm: function (p) { return p; }, push: function (p) { return cfg.guitarPush * p; }, stun: function () { return 0; } },
    tamb:    { shape: 'ring', radius: function () { return cfg.tambRadius; }, charm: function () { return 1; }, push: function () { return 0; }, stun: function () { return 0; } },
    trumpet: { shape: 'cone', get length() { return cfg.trumpetLen; }, get half() { return cfg.trumpetHalf; }, charm: function (p) { return p + 1; }, push: function () { return cfg.trumpetPush; }, stun: function () { return 0; } },
    snare:   { shape: 'ring', radius: function () { return 140; }, charm: function () { return 0; }, push: function () { return 0; }, stun: function (p) { return 2 * p; } }
  };

  // Same rule as Kit.rhythmPower: a rest makes the next note stronger, up to 3.
  function power(stepsSinceLastNote) {
    var r = stepsSinceLastNote > 0 ? stepsSinceLastNote : 0;
    return 1 + Math.min(r, 2);
  }

  // Records one 16-step loop. push() is called once per step with Mabel's position and whether she played.
  function recorder() {
    var frames = [];
    for (var i = 0; i < LOOP; i++) frames.push({ x: 0, y: 0, dx: 1, dy: 0, note: 0 });
    return {
      push: function (stepIndex, x, y, played, dirX, dirY) {
        var f = frames[((stepIndex % LOOP) + LOOP) % LOOP];
        f.x = x; f.y = y; f.dx = dirX; f.dy = dirY; f.note = played ? (typeof played === 'number' ? played : 1) : 0;
      },
      done: function () { return { len: LOOP, frames: frames.map(function (f) { return { x: f.x, y: f.y, dx: f.dx, dy: f.dy, note: f.note }; }) }; }
    };
  }

  // Interpolated position and facing at a fractional step. Wraps every loop.
  function sample(loop, stepFloat) {
    var n = loop.len, s = ((stepFloat % n) + n) % n;
    var i = Math.floor(s + 1e-9), t = s - i;
    if (t < 1e-9) t = 0;
    var a = loop.frames[i % n], b = loop.frames[(i + 1) % n];
    var dx = a.dx + (b.dx - a.dx) * t, dy = a.dy + (b.dy - a.dy) * t;
    var m = Math.sqrt(dx * dx + dy * dy);
    if (m < 1e-6) { dx = a.dx; dy = a.dy; m = Math.sqrt(dx * dx + dy * dy) || 1; }
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, dirX: dx / m, dirY: dy / m };
  }

  function noteAt(loop, stepIndex) {
    var n = loop.len;
    return loop.frames[((stepIndex % n) + n) % n].note || 0;
  }

  // Which targets a note reaches. targets: [{id, x, y}]. dir is a unit vector (used by cones).
  function hits(instrument, p, origin, dir, targets) {
    var d = INSTR[instrument];
    var out = [];
    if (!d) return out;
    for (var i = 0; i < targets.length; i++) {
      var t = targets[i], vx = t.x - origin.x, vy = t.y - origin.y;
      var dist = Math.sqrt(vx * vx + vy * vy), inside = false;
      if (d.shape === 'ring') inside = dist <= d.radius(p) + 1e-9;
      else if (dist <= d.length + 1e-9) {
        if (dist < 1e-6) inside = true;
        else {
          var dm = Math.sqrt(dir.x * dir.x + dir.y * dir.y) || 1;
          var cos = (vx * dir.x + vy * dir.y) / (dist * dm);
          inside = Math.acos(Math.max(-1, Math.min(1, cos))) * 180 / Math.PI <= d.half + 1e-9;
        }
      }
      if (inside) {
        var ux = dist > 1e-6 ? vx / dist : 1, uy = dist > 1e-6 ? vy / dist : 0;
        out.push({ id: t.id, charm: d.charm(p), push: d.push(p), stun: d.stun(p), px: ux, py: uy });
      }
    }
    return out;
  }

  // An umbrella blocks a note that comes from within 60 degrees of where she faces.
  function blocked(umbrellaFacing, noteOrigin, ladyPos) {
    var vx = noteOrigin.x - ladyPos.x, vy = noteOrigin.y - ladyPos.y;
    var d = Math.sqrt(vx * vx + vy * vy), f = Math.sqrt(umbrellaFacing.x * umbrellaFacing.x + umbrellaFacing.y * umbrellaFacing.y);
    if (d < 1e-6 || f < 1e-6) return true;
    var cos = (vx * umbrellaFacing.x + vy * umbrellaFacing.y) / (d * f);
    return Math.acos(Math.max(-1, Math.min(1, cos))) * 180 / Math.PI <= 60 + 1e-9;
  }

  // Hecklers that arrive on a given step. Steps are eighth notes (112 BPM: 112 steps is about 30 s).
  function wave(stepIndex, set) {
    var out = [];
    if (stepIndex < 0) return out;
    if (set === 'full') {
      if (stepIndex >= 672) return out;
      var rate = stepIndex >= 224 ? 2 : 4;
      if (stepIndex % rate === 0) out.push('grump');
      if (stepIndex >= 112 && stepIndex % 16 === 8) out.push('pigeon');
      if (stepIndex >= 224 && stepIndex % 24 === 12) out.push('thrower');
      if (stepIndex >= 336 && stepIndex % 32 === 20) out.push('umbrella');
      if (stepIndex >= 448 && stepIndex % 40 === 30) out.push('chef');
      if (stepIndex === 522) out.push('inspector');
      return out;
    }
    if (stepIndex >= 336) return out;
    var every = stepIndex >= 224 ? 2 : 4;
    if (stepIndex % every === 0) out.push('grump');
    if (stepIndex >= 112 && stepIndex % 12 === 6) out.push('pigeon');
    return out;
  }

  return { LOOP: LOOP, cfg: cfg, INSTR: INSTR, power: power, recorder: recorder, sample: sample, noteAt: noteAt, hits: hits, blocked: blocked, wave: wave };
})();
if (typeof module !== 'undefined') module.exports = BandSim;

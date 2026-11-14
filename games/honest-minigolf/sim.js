// Rules only. No DOM, no Date, no Math.random (take an rng argument).
// A top-down ball on a 22 x 13 tile grid, stepped at 120 Hz. A "lie" is a set of modifiers passed to the same physics.
var GolfSim = (function () {
  'use strict';
  var CELL = 16, COLS = 22, ROWS = 13, HZ = 120, DT = 1 / 120;

  // Every physics constant. game.js overwrites these from TUNE before each shot.
  var PHYS = {
    ballR: 4, maxSpeed: 420, drag: 0.9, lin: 12, stop: 4,
    capR: 5, capSpeed: 190, lipDeg: 12,
    keepPlain: 0.72, keepRed: 1.0, keepBlue: 0.4, keepYellow: 1.3, yCap: 520,
    slope: 60, sandMul: 3, bumperR: 6, millPeriod: 2.4,
    tilt: 16, shyR: 28, shyK: 200,
    guideSec: 0.6, maxSecs: 20
  };

  var LIE_IDS = ['tilt', 'swapped', 'shy'];
  var LIES = {
    tilt: { id: 'tilt', name: 'Tilted ground', needs: 'long' },
    swapped: { id: 'swapped', name: 'Swapped paint', needs: 'paint' },
    shy: { id: 'shy', name: 'Shy cup', needs: 'open' }
  };
  var DIRS = { N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0] };

  function resolveLie(lie) {
    if (!lie) return null;
    if (typeof lie === 'string') return { id: lie, dir: 'E' };
    return lie;
  }

  // ---- map ----
  function parse(rows) {
    var cells = [], tee = { x: 0, y: 0 }, cup = { x: 0, y: 0 }, r, c;
    for (r = 0; r < ROWS; r++) {
      var line = rows[r] || '';
      for (c = 0; c < COLS; c++) {
        var ch = line.charAt(c) || '#';
        cells.push(ch);
        if (ch === 'T') tee = { x: c * CELL + CELL / 2, y: r * CELL + CELL / 2 };
        if (ch === 'C') cup = { x: c * CELL + CELL / 2, y: r * CELL + CELL / 2 };
      }
    }
    return { cols: COLS, rows: ROWS, w: COLS * CELL, h: ROWS * CELL, cells: cells, tee: tee, cup: cup };
  }
  function at(hole, c, r) {
    if (c < 0 || r < 0 || c >= COLS || r >= ROWS) return '#';
    return hole.cells[r * COLS + c];
  }
  function millBlocked(t) { return (t % PHYS.millPeriod) < PHYS.millPeriod / 2; }
  function isSolidRect(ch, t) { return ch === '#' || ch === 'R' || ch === 'B' || ch === 'Y' || (ch === 'W' && millBlocked(t)); }
  function isDiag(ch) { return ch === '1' || ch === '2' || ch === '3' || ch === '4'; }

  // ---- geometry helpers (module-level scratch to avoid garbage) ----
  var cpx = 0, cpy = 0;
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function segClosest(px, py, ax, ay, bx, by) {
    var dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy, t = l2 ? ((px - ax) * dx + (py - ay) * dy) / l2 : 0;
    t = clamp(t, 0, 1); cpx = ax + dx * t; cpy = ay + dy * t;
  }
  var TRI = {
    '1': [[0, 0], [16, 0], [16, 16]],
    '2': [[0, 0], [16, 0], [0, 16]],
    '3': [[16, 0], [16, 16], [0, 16]],
    '4': [[0, 0], [0, 16], [16, 16]]
  };
  var TRI_N = { '1': [-0.7071, 0.7071], '2': [0.7071, 0.7071], '3': [-0.7071, -0.7071], '4': [0.7071, -0.7071] };
  function triInside(tri, px, py) {
    var s = 0, i;
    for (i = 0; i < 3; i++) {
      var a = tri[i], b = tri[(i + 1) % 3];
      var cr = (b[0] - a[0]) * (py - a[1]) - (b[1] - a[1]) * (px - a[0]);
      if (cr !== 0) { if (s === 0) s = cr > 0 ? 1 : -1; else if ((cr > 0 ? 1 : -1) !== s) return false; }
    }
    return true;
  }

  // ---- lie helpers ----
  function keepFor(ch, lie) {
    var kind = ch;
    if (lie && lie.id === 'swapped') { if (kind === 'R') kind = 'B'; else if (kind === 'B') kind = 'R'; }
    if (kind === 'R') return PHYS.keepRed;
    if (kind === 'B') return PHYS.keepBlue;
    if (kind === 'Y') return PHYS.keepYellow;
    return PHYS.keepPlain;
  }

  // Resolve overlaps for one tick. Deepest overlap first, so a ball on the join of two walls uses the wall it overlaps most.
  var hitCell = null;
  function collide(hole, b, lie, t, tick, bounces) {
    var r = PHYS.ballR, pass, cx, cy, ch;
    for (pass = 0; pass < 4; pass++) {
      var bestPen = 0, bnx = 0, bny = 0, bch = null, bcx = 0, bcy = 0;
      var c0 = Math.floor((b.x - r) / CELL), c1 = Math.floor((b.x + r) / CELL);
      var r0 = Math.floor((b.y - r) / CELL), r1 = Math.floor((b.y + r) / CELL);
      for (cy = r0; cy <= r1; cy++) for (cx = c0; cx <= c1; cx++) {
        ch = at(hole, cx, cy);
        var ox = cx * CELL, oy = cy * CELL, pen = 0, nx = 0, ny = 0, d, dx, dy;
        if (isSolidRect(ch, t)) {
          var qx = clamp(b.x, ox, ox + CELL), qy = clamp(b.y, oy, oy + CELL);
          dx = b.x - qx; dy = b.y - qy; d = Math.sqrt(dx * dx + dy * dy);
          if (d > 0) { if (d < r) { pen = r - d; nx = dx / d; ny = dy / d; } }
          else {
            // centre inside the cell: leave by the nearest face
            var l = b.x - ox, rr = ox + CELL - b.x, u = b.y - oy, dn = oy + CELL - b.y, m = Math.min(l, rr, u, dn);
            if (m === l) { nx = -1; ny = 0; } else if (m === rr) { nx = 1; ny = 0; } else if (m === u) { nx = 0; ny = -1; } else { nx = 0; ny = 1; }
            pen = r + m;
          }
        } else if (isDiag(ch)) {
          var tri = TRI[ch], px = b.x - ox, py = b.y - oy;
          if (triInside(tri, px, py)) {
            var hn = TRI_N[ch]; nx = hn[0]; ny = hn[1]; pen = r + 4; // deep: push out the open side
          } else {
            var bd = 1e9, bx2 = 0, by2 = 0, i;
            for (i = 0; i < 3; i++) {
              var A = tri[i], B = tri[(i + 1) % 3];
              segClosest(px, py, A[0], A[1], B[0], B[1]);
              var ddx = px - cpx, ddy = py - cpy, dd = ddx * ddx + ddy * ddy;
              if (dd < bd) { bd = dd; bx2 = ddx; by2 = ddy; }
            }
            d = Math.sqrt(bd);
            if (d < r && d > 0) { pen = r - d; nx = bx2 / d; ny = by2 / d; }
          }
        } else if (ch === 'o') {
          dx = b.x - (ox + CELL / 2); dy = b.y - (oy + CELL / 2); d = Math.sqrt(dx * dx + dy * dy);
          var rr2 = r + PHYS.bumperR;
          if (d < rr2) { if (d < 0.001) { dx = 1; dy = 0; d = 1; } pen = rr2 - d; nx = dx / d; ny = dy / d; }
        }
        if (pen > bestPen) { bestPen = pen; bnx = nx; bny = ny; bch = ch; bcx = cx; bcy = cy; }
      }
      if (!bch) return;
      b.x += bnx * bestPen; b.y += bny * bestPen;
      var vn = b.vx * bnx + b.vy * bny;
      if (vn < 0) {
        var sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        var rx = b.vx - 2 * vn * bnx, ry = b.vy - 2 * vn * bny;
        var rl = Math.sqrt(rx * rx + ry * ry) || 1;
        var keep = keepFor(bch, lie), out = sp * keep;
        if (bch === 'Y') out = Math.min(out, PHYS.yCap);
        b.vx = rx / rl * out; b.vy = ry / rl * out;
        if (bounces) bounces.push({ x: b.x, y: b.y, wall: bch, tick: tick, vin: sp, vout: out, cx: bcx, cy: bcy });
      }
    }
  }

  // ---- the shot ----
  // opts: {noPath, secs}. Returns {path, bounces, rest, sunk, lipped, ticks}.
  function shoot(hole, ball, angle, power, lie, t0, opts) {
    lie = resolveLie(lie); opts = opts || {};
    var sp0 = clamp(power, 0, 1) * PHYS.maxSpeed;
    var b = { x: ball.x, y: ball.y, vx: Math.cos(angle) * sp0, vy: Math.sin(angle) * sp0 };
    var path = [], bounces = [], sunk = false, lipped = false, lipLive = false, lipTick = 0;
    var maxTicks = Math.round((opts.secs || PHYS.maxSecs) * HZ), tick = 0;
    var tiltX = 0, tiltY = 0, tiltA = 0, stopV = PHYS.stop;
    if (lie && lie.id === 'tilt') {
      var dv = DIRS[lie.dir || 'E'] || DIRS.E;
      tiltA = PHYS.tilt; tiltX = dv[0] * tiltA; tiltY = dv[1] * tiltA;
      if (tiltA > PHYS.lin) stopV = Math.max(stopV, ((tiltA - PHYS.lin) / PHYS.drag) * 1.5 + 2);
    }
    var shy = lie && lie.id === 'shy';
    var cup = hole.cup;
    t0 = t0 || 0;
    while (tick < maxTicks) {
      tick++;
      var t = t0 + tick * DT;
      var ax = tiltX, ay = tiltY, mul = 1, shyF = 0, onSlope = false;
      var ch = at(hole, Math.floor(b.x / CELL), Math.floor(b.y / CELL));
      if (ch === '>') { ax += PHYS.slope; onSlope = true; }
      else if (ch === '<') { ax -= PHYS.slope; onSlope = true; }
      else if (ch === '^') { ay -= PHYS.slope; onSlope = true; }
      else if (ch === 'v') { ay += PHYS.slope; onSlope = true; }
      else if (ch === 'S') mul = PHYS.sandMul;
      var cdx = b.x - cup.x, cdy = b.y - cup.y, cd = Math.sqrt(cdx * cdx + cdy * cdy);
      if (shy && cd < PHYS.shyR && cd > 0.001) {
        shyF = PHYS.shyK * (1 - cd / PHYS.shyR);
        ax += cdx / cd * shyF; ay += cdy / cd * shyF;
      }
      b.vx += ax * DT; b.vy += ay * DT;
      var sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
      if (sp > 0) {
        var ns = sp * Math.exp(-PHYS.drag * mul * DT) - PHYS.lin * mul * DT;
        if (ns < 0) ns = 0;
        var k = ns / sp; b.vx *= k; b.vy *= k; sp = ns;
      }
      b.x += b.vx * DT; b.y += b.vy * DT;
      collide(hole, b, lie, t, tick, bounces);
      cdx = b.x - cup.x; cdy = b.y - cup.y; cd = Math.sqrt(cdx * cdx + cdy * cdy);
      sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
      if (cd < PHYS.capR) {
        if (sp < PHYS.capSpeed) { b.x = cup.x; b.y = cup.y; b.vx = b.vy = 0; sunk = true; if (!opts.noPath) path.push({ x: b.x, y: b.y }); break; }
        if (!lipLive) {
          lipLive = true; lipped = true; lipTick = tick;
          var side = (b.vx * cdy - b.vy * cdx) >= 0 ? 1 : -1, a = PHYS.lipDeg * Math.PI / 180 * side;
          var ca = Math.cos(a), sa = Math.sin(a), nvx = b.vx * ca - b.vy * sa, nvy = b.vx * sa + b.vy * ca;
          b.vx = nvx * 0.9; b.vy = nvy * 0.9;
        }
      } else if (cd > PHYS.capR + 3) lipLive = false;
      if (!opts.noPath) path.push({ x: b.x, y: b.y });
      if (sp < stopV && shyF < PHYS.lin && !onSlope) break;
    }
    return { path: path, bounces: bounces, rest: { x: b.x, y: b.y }, sunk: sunk, lipped: lipped, lipTick: lipTick, ticks: tick };
  }

  function guide(hole, ball, angle, power, t0) {
    return shoot(hole, ball, angle, power, null, t0 || 0, { secs: PHYS.guideSec }).path;
  }

  // ---- bot: greedy, scores a rest point by walking distance to the cup ----
  function distField(hole) {
    var N = COLS * ROWS, f = new Array(N), i, done = [];
    for (i = 0; i < N; i++) f[i] = 1e9;
    function walk(c, r) { var ch = at(hole, c, r); return !(ch === '#' || ch === 'R' || ch === 'B' || ch === 'Y' || ch === 'o' || isDiag(ch)); }
    var cc = Math.floor(hole.cup.x / CELL), cr = Math.floor(hole.cup.y / CELL);
    f[cr * COLS + cc] = 0;
    var open = [[cc, cr]];
    while (open.length) {
      var bi = 0, k;
      for (k = 1; k < open.length; k++) if (f[open[k][1] * COLS + open[k][0]] < f[open[bi][1] * COLS + open[bi][0]]) bi = k;
      var cur = open.splice(bi, 1)[0], cd0 = f[cur[1] * COLS + cur[0]], dx, dy;
      if (done[cur[1] * COLS + cur[0]]) continue;
      done[cur[1] * COLS + cur[0]] = true;
      for (dy = -1; dy <= 1; dy++) for (dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        var nc = cur[0] + dx, nr = cur[1] + dy;
        if (!walk(nc, nr)) continue;
        if (dx && dy && !(walk(cur[0] + dx, cur[1]) && walk(cur[0], cur[1] + dy))) continue;
        var nd = cd0 + (dx && dy ? 22.63 : 16);
        if (nd < f[nr * COLS + nc]) { f[nr * COLS + nc] = nd; open.push([nc, nr]); }
      }
    }
    return f;
  }
  function score(field, hole, p) {
    var c = Math.floor(p.x / CELL), r = Math.floor(p.y / CELL), best = 1e9, dx, dy;
    for (dy = -1; dy <= 1; dy++) for (dx = -1; dx <= 1; dx++) {
      var nc = c + dx, nr = r + dy;
      if (nc < 0 || nr < 0 || nc >= COLS || nr >= ROWS) continue;
      var fv = field[nr * COLS + nc];
      if (fv >= 1e9) continue;
      var ex = p.x - (nc * CELL + CELL / 2), ey = p.y - (nr * CELL + CELL / 2);
      var v = fv + Math.sqrt(ex * ex + ey * ey);
      if (v < best) best = v;
    }
    return best;
  }
  var BOT_POWERS = [0.3, 0.45, 0.6, 0.75, 0.9, 1.0];
  var BOT_T0 = [0, 1.2];
  function bot(hole, lie, o) {
    o = o || {};
    var maxStrokes = o.maxStrokes || 8, field = distField(hole), ball = { x: hole.tee.x, y: hole.tee.y }, strokes = 0;
    while (strokes < maxStrokes) {
      strokes++;
      var best = null, ti, ai, pi;
      var consider = function (a, p, t0) {
        var r = shoot(hole, ball, a, p, lie, t0, { noPath: true });
        var s = r.sunk ? -1 : score(field, hole, r.rest);
        if (!best || s < best.s) best = { s: s, a: a, p: p, t0: t0, rest: r.rest, sunk: r.sunk };
      };
      for (ti = 0; ti < BOT_T0.length; ti++) for (ai = 0; ai < 72; ai++) for (pi = 0; pi < BOT_POWERS.length; pi++) {
        consider(ai * Math.PI * 2 / 72, BOT_POWERS[pi], BOT_T0[ti]);
        if (best.sunk) break;
      }
      if (!best.sunk) {
        var b0 = best, da, dp;
        for (da = -10; da <= 10; da++) for (dp = -4; dp <= 4; dp++) {
          var pp = clamp(b0.p * (1 + dp * 0.05), 0.05, 1);
          consider(b0.a + da * 0.5 * Math.PI / 180, pp, b0.t0);
          if (best.sunk) break;
        }
      }
      if (best.sunk) return strokes;
      ball = { x: best.rest.x, y: best.rest.y };
    }
    return 99;
  }

  // ---- cards ----
  function mulberry(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function allHoles() {
    if (typeof HOLES !== 'undefined') return HOLES;
    if (typeof require !== 'undefined') return require('./holes.js').HOLES;
    return [];
  }
  function holeById(id) { var hs = allHoles(), i; for (i = 0; i < hs.length; i++) if (hs[i].id === id) return hs[i]; return null; }
  function countTag(ids, tag) {
    var n = 0, i; for (i = 0; i < ids.length; i++) { var h = holeById(ids[i]); if (h && h.tags.indexOf(tag) >= 0) n++; }
    return n;
  }
  function cardOk(lieId, ids) { return countTag(ids, LIES[lieId].needs) >= 2; }
  function card(seed) {
    var rng = mulberry(seed), hs = allHoles(), lieId = LIE_IDS[Math.floor(rng() * LIE_IDS.length)];
    var dirKeys = ['N', 'E', 'S', 'W'], dir = dirKeys[Math.floor(rng() * 4)], tries = 0, ids;
    do {
      var pool = hs.map(function (h) { return h.id; }), i;
      for (i = pool.length - 1; i > 0; i--) { var j = Math.floor(rng() * (i + 1)), tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp; }
      ids = pool.slice(0, 3); tries++;
    } while (!cardOk(lieId, ids) && tries < 200);
    return { seed: seed, lie: lieId, dir: dir, holes: ids };
  }
  function lieOf(c) { return { id: c.lie, dir: c.dir }; }

  var api = {
    parse: parse, shoot: shoot, guide: guide, bot: bot, card: card, lieOf: lieOf, cardOk: cardOk, holeById: holeById,
    LIES: LIES, LIE_IDS: LIE_IDS, DIRS: DIRS, PHYS: PHYS, CELL: CELL, COLS: COLS, ROWS: ROWS, HZ: HZ, millBlocked: millBlocked, at: at
  };
  return api;
})();
if (typeof module !== 'undefined') module.exports = GolfSim;

// Launch Window rules. Fixed 60 Hz tile simulation. No DOM, no Date, no Math.random.
// Positions are integers: 1 tile = 960 units, robot speed 48 units per tick (3 tiles per second).
var LaunchSim = (function () {
  'use strict';
  var TICKS = 1800, UNIT = 960, COLS = 20, ROWS = 11;
  var INPUT = { LEFT: 1, RIGHT: 2, ACTION: 4 };
  var SPEED = 48, CARRY_SPEED = 36, LIFT_SPEED = 32, DOOR_FRAMES = 18, REACH = 720, FLICK = 24;
  var DEFAULT_HOLD = { valve: 960, panel: 720 };

  function cellY(r) { return (r + 1) * UNIT; } // feet position of something standing in row r

  // ---- level parsing ----
  function parse(rows, opts) {
    opts = opts || {};
    if (rows.length !== ROWS) throw new Error('level needs ' + ROWS + ' rows');
    var lv = {
      cols: COLS, rows: ROWS, tiles: [], start: { c: 1, r: 7 },
      lifts: [], doors: [], levers: [], plates: [], valves: [], panels: [], ports: [], hatches: [], ignitions: [],
      items: [], tasks: [], hold: { valve: DEFAULT_HOLD.valve, panel: DEFAULT_HOLD.panel }
    };
    if (opts.hold) for (var k in opts.hold) lv.hold[k] = opts.hold[k];
    var liftMap = {};
    for (var r = 0; r < ROWS; r++) {
      if (rows[r].length !== COLS * 2) throw new Error('row ' + r + ' must be ' + COLS * 2 + ' chars, got ' + rows[r].length);
      var line = [];
      for (var c = 0; c < COLS; c++) {
        var cell = rows[r].substr(c * 2, 2), ch = cell[0], n = parseInt(cell[1], 10);
        line.push(cell);
        var o = { c: c, r: r, n: n, x: c * UNIT + UNIT / 2, y: cellY(r) };
        if (ch === 'S') lv.start = { c: c, r: r };
        else if (ch === 'L') lv.levers.push(o);
        else if (ch === 'B') lv.plates.push(o);
        else if (ch === 'D') lv.doors.push(o);
        else if (ch === 'E') {
          var l = liftMap[n] || (liftMap[n] = { n: n, c: c, rt: r, rb: r });
          if (r < l.rt) l.rt = r; if (r > l.rb) l.rb = r;
        } else if (ch === 'C') lv.items.push({ kind: 'crate', c: c, r: r, x: o.x, y: o.y });
        else if (ch === 'N') lv.items.push({ kind: 'nozzle', c: c, r: r, x: o.x, y: o.y });
        else if (ch === 'H') lv.hatches.push(o);
        else if (ch === 'F') lv.ports.push(o);
        else if (ch === 'V') lv.valves.push(o);
        else if (ch === 'P') lv.panels.push(o);
        else if (ch === 'I') lv.ignitions.push(o);
      }
      lv.tiles.push(line);
    }
    Object.keys(liftMap).sort().forEach(function (key) { lv.lifts.push(liftMap[key]); });
    if (lv.valves.length) lv.tasks.push('valve');
    if (lv.panels.length) lv.tasks.push('panel');
    if (lv.hatches.length) lv.tasks.push('cargo');
    if (lv.ignitions.length) lv.tasks.push('ignition');
    lv.hasNozzle = lv.items.some(function (i) { return i.kind === 'nozzle'; });
    return lv;
  }

  function isFloor(lv, c, r) { return c >= 0 && c < COLS && r >= 0 && r < ROWS && lv.tiles[r][c][0] === '#'; }
  function liftAtCol(lv, c) { for (var i = 0; i < lv.lifts.length; i++) if (lv.lifts[i].c === c) return i; return -1; }
  function rowOf(y) { return Math.floor((y - 1) / UNIT); }

  // ---- state ----
  function create(lv, recs) {
    recs = recs || [];
    var robots = [];
    for (var i = 0; i <= recs.length; i++) {
      robots.push({
        x: lv.start.c * UNIT + UNIT / 2, y: cellY(lv.start.r), face: 1, carry: -1, prev: 0,
        lift: -1, flick: 0, moving: 0, act: 0
      });
    }
    var li = lv.lifts.map(function (l) { return { y: cellY(l.rb), moving: 0 }; });
    return {
      t: 0, level: lv, recs: recs, robots: robots,
      items: lv.items.map(function (it) { return { kind: it.kind, x: it.x, y: it.y, carried: -1, lift: -1 }; }),
      lifts: li, doors: lv.doors.map(function () { return 0; }),
      ctrl: [false, false, false, false, false],
      valve: 0, panel: 0, hose: !lv.hasNozzle, hatch: false, ignBroken: false, ignDone: false,
      tasks: {}
    };
  }

  function clone(s) {
    var lv = s.level, recs = s.recs;
    s.level = null; s.recs = null;
    var c = JSON.parse(JSON.stringify(s));
    s.level = lv; s.recs = recs; c.level = lv; c.recs = recs;
    return c;
  }

  function nearest(list, robot, filter) {
    var best = null, bd = 1e9;
    for (var i = 0; i < list.length; i++) {
      var o = list[i];
      if (o.y !== robot.y) continue;
      if (filter && !filter(o)) continue;
      var d = Math.abs(o.x - robot.x);
      if (d <= REACH && d < bd) { bd = d; best = o; }
    }
    return best;
  }

  function doorBlocked(s, c, r) {
    var ds = s.level.doors;
    for (var i = 0; i < ds.length; i++) if (ds[i].c === c && ds[i].r === r && s.doors[i] < DOOR_FRAMES) return true;
    return false;
  }

  function moveRobot(s, rb, input) {
    var lv = s.level;
    var dir = ((input & INPUT.RIGHT) ? 1 : 0) - ((input & INPUT.LEFT) ? 1 : 0);
    rb.moving = dir;
    if (!dir) return;
    rb.face = dir;
    var sp = rb.carry >= 0 ? CARRY_SPEED : SPEED;
    var oc = Math.floor(rb.x / UNIT);
    var nx = rb.x + dir * sp;
    if (nx < 0) nx = 0;
    if (nx > COLS * UNIT - 1) nx = COLS * UNIT - 1;
    var nc = Math.floor(nx / UNIT);
    if (nc !== oc) {
      var r = rowOf(rb.y), ok = true;
      if (doorBlocked(s, nc, r)) ok = false;
      var lk = liftAtCol(lv, nc);
      if (ok && !isFloor(lv, nc, r + 1)) {
        ok = lk >= 0 && s.lifts[lk].y === rb.y;
      }
      if (!ok) nx = dir > 0 ? nc * UNIT - 1 : (oc * UNIT);
    }
    rb.x = nx;
  }

  function tick(s, liveInput) {
    var ev = [];
    if (s.t >= TICKS) return ev;
    var lv = s.level, n = s.robots.length, i, j;
    var holdFlags = { valve: false, panel: false, ign: [] };
    var leversHeld = [false, false, false, false, false];

    for (i = 0; i < n; i++) {
      var rb = s.robots[i];
      var isLive = i === n - 1;
      var input = isLive ? (liveInput | 0) : (s.recs[i][s.t] | 0);
      var holo = !isLive;
      if (rb.flick > 0) rb.flick--;
      moveRobot(s, rb, input);

      var act = (input & INPUT.ACTION) !== 0;
      var edge = act && !rb.prev;
      rb.prev = act ? 1 : 0;
      rb.act = act ? 1 : 0;
      var didSomething = false;

      if (edge) {
        if (rb.carry >= 0) {
          var it = s.items[rb.carry];
          var port = it.kind === 'nozzle' ? nearest(lv.ports, rb) : null;
          var hatch = it.kind === 'crate' ? nearest(lv.hatches, rb) : null;
          if (port && !s.hose) {
            it.carried = -2; s.hose = true; rb.carry = -1; didSomething = true;
            ev.push({ type: 'connect', robot: i });
          } else if (hatch && !s.hatch) {
            it.carried = -2; s.hatch = true; rb.carry = -1; didSomething = true;
            ev.push({ type: 'drop', robot: i, kind: 'hatch' });
          } else {
            it.carried = -1; it.x = Math.floor(rb.x / UNIT) * UNIT + UNIT / 2; it.y = rb.y;
            it.lift = rb.lift; rb.carry = -1; didSomething = true;
            ev.push({ type: 'drop', robot: i, kind: it.kind });
          }
        } else {
          var best = -1, bd = 1e9;
          for (j = 0; j < s.items.length; j++) {
            var q = s.items[j];
            if (q.carried !== -1 || q.y !== rb.y) continue;
            var d = Math.abs(q.x - rb.x);
            if (d <= REACH && d < bd) { bd = d; best = j; }
          }
          if (best >= 0) {
            s.items[best].carried = i; s.items[best].lift = -1; rb.carry = best; didSomething = true;
            ev.push({ type: 'pickup', robot: i, kind: s.items[best].kind });
          }
        }
      }

      // hold actions
      if (act && rb.carry < 0) {
        var lever = nearest(lv.levers, rb);
        var valve = nearest(lv.valves, rb);
        var panel = nearest(lv.panels, rb);
        var ign = nearest(lv.ignitions, rb);
        if (lever) { leversHeld[lever.n] = true; didSomething = true; }
        if (valve && s.hose) { holdFlags.valve = true; didSomething = true; }
        if (panel) { holdFlags.panel = true; didSomething = true; }
        if (ign) { holdFlags.ign.push(ign); didSomething = true; }
      }
      if (holo && edge && !didSomething && rb.flick === 0) {
        rb.flick = FLICK; ev.push({ type: 'desync', robot: i });
      }
    }

    // progress
    if (holdFlags.valve && s.hose && s.valve < lv.hold.valve) s.valve++;
    if (holdFlags.panel && s.panel < lv.hold.panel) s.panel++;
    // ignition: both held during the final 120 ticks
    if (lv.ignitions.length && s.t >= TICKS - 120) {
      var all = lv.ignitions.every(function (g) { return holdFlags.ign.indexOf(g) >= 0; });
      if (!all) s.ignBroken = true;
      if (s.t === TICKS - 1 && !s.ignBroken) s.ignDone = true;
    }

    // controls: levers held + plates occupied
    for (i = 0; i < 5; i++) s.ctrl[i] = leversHeld[i];
    lv.plates.forEach(function (p) {
      var on = s.robots.some(function (rb2) { return rb2.y === p.y && Math.floor(rb2.x / UNIT) === p.c; }) ||
        s.items.some(function (it2) { return it2.carried === -1 && it2.y === p.y && Math.floor(it2.x / UNIT) === p.c; });
      if (on) s.ctrl[p.n] = true;
    });

    // doors
    lv.doors.forEach(function (d, k) {
      var was = s.doors[k];
      if (s.ctrl[d.n]) { if (was < DOOR_FRAMES) s.doors[k]++; } else if (was > 0) s.doors[k]--;
      if (was === 0 && s.doors[k] === 1) ev.push({ type: 'doorOpen', open: true, door: k });
      if (was === DOOR_FRAMES && s.doors[k] === DOOR_FRAMES - 1) ev.push({ type: 'doorOpen', open: false, door: k });
    });

    // lifts
    lv.lifts.forEach(function (l, k) {
      var ls = s.lifts[k], top = cellY(l.rt), bot = cellY(l.rb);
      var oy = ls.y;
      if (s.ctrl[l.n]) ls.y = Math.max(top, ls.y - LIFT_SPEED); else ls.y = Math.min(bot, ls.y + LIFT_SPEED);
      var mv = ls.y !== oy ? 1 : 0;
      if (mv !== ls.moving) { ls.moving = mv; ev.push({ type: 'liftMove', moving: !!mv, lift: k }); }
    });

    // riding + carried items follow
    s.robots.forEach(function (rb2) {
      var lk = liftAtCol(lv, Math.floor(rb2.x / UNIT));
      if (lk >= 0 && (rb2.lift === lk || s.lifts[lk].y === rb2.y)) { rb2.lift = lk; rb2.y = s.lifts[lk].y; } else rb2.lift = -1;
    });
    s.items.forEach(function (it3) {
      if (it3.carried >= 0) { var r3 = s.robots[it3.carried]; it3.x = r3.x; it3.y = r3.y; }
      else if (it3.carried === -1 && it3.lift >= 0) it3.y = s.lifts[it3.lift].y;
    });

    // tasks
    var now = {
      valve: s.valve >= lv.hold.valve, panel: s.panel >= lv.hold.panel, cargo: s.hatch, ignition: s.ignDone
    };
    lv.tasks.forEach(function (name) {
      if (now[name] && !s.tasks[name]) { s.tasks[name] = true; ev.push({ type: 'taskDone', task: name }); }
    });

    s.t++;
    return ev;
  }

  function done(s) {
    return s.level.tasks.every(function (name) { return !!s.tasks[name]; });
  }

  // Rebuild a state at `tick` from tick 0. Optional cache {snaps:[]} keeps a snapshot every 60 ticks.
  function seek(lv, recs, live, tick, cache) {
    var s = null, i;
    if (cache && cache.snaps) {
      for (i = Math.min(Math.floor(tick / 60), cache.snaps.length - 1); i >= 0; i--) {
        if (cache.snaps[i]) { s = clone(cache.snaps[i]); break; }
      }
    }
    if (!s) s = create(lv, recs);
    while (s.t < tick) {
      if (cache && cache.snaps && s.t % 60 === 0 && !cache.snaps[s.t / 60]) cache.snaps[s.t / 60] = clone(s);
      tick_(s, live);
    }
    if (cache && cache.snaps && s.t % 60 === 0 && !cache.snaps[s.t / 60]) cache.snaps[s.t / 60] = clone(s);
    return s;
  }
  function tick_(s, live) { return tick(s, live[s.t] | 0); }
  // Drop snapshots that depended on live inputs at or after `fromTick` (call after the recording changes).
  function invalidate(cache, fromTick) {
    if (cache && cache.snaps) cache.snaps.length = Math.min(cache.snaps.length, Math.floor(fromTick / 60) + 1);
  }

  // "R200 A480 L60 -300" -> Uint8Array(1800). Letter(s) then ticks. '-' is idle.
  function script(str) {
    var out = new Uint8Array(TICKS), t = 0;
    String(str).split(/\s+/).forEach(function (tok) {
      if (!tok) return;
      var m = /^([LRA\-]+)(\d+)$/.exec(tok);
      if (!m) throw new Error('bad script token ' + tok);
      var bits = 0;
      for (var i = 0; i < m[1].length; i++) {
        var ch = m[1][i];
        if (ch === 'L') bits |= INPUT.LEFT; else if (ch === 'R') bits |= INPUT.RIGHT; else if (ch === 'A') bits |= INPUT.ACTION;
      }
      var n = parseInt(m[2], 10);
      for (var k = 0; k < n && t < TICKS; k++) out[t++] = bits;
    });
    return out;
  }

  return {
    TICKS: TICKS, UNIT: UNIT, COLS: COLS, ROWS: ROWS, INPUT: INPUT, DOOR_FRAMES: DOOR_FRAMES,
    parse: parse, create: create, tick: tick, done: done, seek: seek, invalidate: invalidate,
    script: script, clone: clone, cellY: cellY
  };
})();
if (typeof module !== 'undefined') module.exports = LaunchSim;

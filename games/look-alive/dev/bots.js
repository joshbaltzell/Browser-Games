// Look Alive bots: build enumeration, seeded random builds, sweeps and neighbours for the checks.
// Plain script with a module.exports guard. Used by dev/check.js.
var LookAliveBots = (function () {
  'use strict';
  var Sim = typeof LookAlive !== 'undefined' ? LookAlive : require('../sim.js');
  var Lv = typeof LookAliveLevels !== 'undefined' ? LookAliveLevels : require('../levels.js');
  var Cards = typeof LookAliveCards !== 'undefined' ? LookAliveCards : require('../cards.js');
  var P = Lv.PLANET;

  function rng(seed) {  // mulberry32
    var a = seed | 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function build(pace, slop, metabolism, parts, reflex) { return { pace: pace, slop: slop, metabolism: metabolism, parts: parts || [], reflex: reflex || null }; }
  function dflt() { return build(4, 0, 'respiration', [], null); }
  function machineRule(sensor, cmp, value, action) { return { kind: 'machine', sensor: sensor, cmp: cmp, value: value, action: action }; }
  function bioRef(id) { return { kind: 'bio', id: id }; }
  function label(b) {
    var s = 'pace ' + b.pace + ' slop ' + b.slop + ' ' + b.metabolism + (b.parts.length ? ' + ' + b.parts.join('+') : '');
    if (b.reflex) s += ' | ' + (b.reflex.kind === 'bio' ? b.reflex.id : Cards.ruleText(b.reflex));
    return s;
  }
  function key(b) { return label(b); }
  function shelfOf(id) { return Cards.part(id).shelf; }
  function isMachineBuild(b) {
    return shelfOf(b.metabolism) === 'machine' || b.parts.some(function (id) { return shelfOf(id) === 'machine'; }) || (b.reflex && b.reflex.kind === 'machine');
  }
  function isBioBuild(b) { return !isMachineBuild(b); }

  // Every legal (metabolism, parts) card set for a dish.
  function configs(D) {
    var out = [], A = D.allowed, parts = A.parts, k = D.partSlots;
    function rec(i, chosen, energy) {
      if (i === parts.length) {
        A.metabolism.forEach(function (m) {
          var e = energy + Cards.part(m).energy;
          if (e <= D.energy) out.push({ metabolism: m, parts: chosen.slice() });
        });
        return;
      }
      rec(i + 1, chosen, energy);
      if (chosen.length < k) {
        var c = Cards.part(parts[i]);
        chosen.push(parts[i]); rec(i + 1, chosen, energy + c.energy); chosen.pop();
      }
    }
    rec(0, [], 0);
    return out;
  }

  // A fixed, varied sample of machine rules for the dish's sensors and actions.
  function sampleRules(D) {
    var out = [];
    D.allowed.sensors.forEach(function (sid) {
      var sn = Cards.sensor(sid);
      D.allowed.actions.forEach(function (aid) {
        [0, sn.values.length - 1].forEach(function (vi) {
          ['lt', 'gt'].forEach(function (cmp) { out.push(machineRule(sid, cmp, sn.values[vi], aid)); });
        });
      });
    });
    return out;
  }
  function allRules(D) {
    var out = [];
    D.allowed.sensors.forEach(function (sid) {
      var sn = Cards.sensor(sid);
      D.allowed.actions.forEach(function (aid) { sn.values.forEach(function (v) { ['lt', 'gt'].forEach(function (cmp) { out.push(machineRule(sid, cmp, v, aid)); }); }); });
    });
    return out;
  }

  function randomBuild(D, R) {
    var A = D.allowed, ints = function (n) { return Math.floor(R() * n); };
    for (var tries = 0; tries < 50; tries++) {
      var parts = [], pool = A.parts.slice(), want = ints(D.partSlots + 1);
      while (parts.length < want && pool.length) parts.push(pool.splice(ints(pool.length), 1)[0]);
      var b = build(ints(9), ints(9), A.metabolism[ints(A.metabolism.length)], parts, null);
      if (D.reflexSlot && R() < 0.7) {
        if (R() < 0.4) b.reflex = bioRef(A.bio[ints(A.bio.length)]);
        else {
          var sn = Cards.sensor(A.sensors[ints(A.sensors.length)]);
          b.reflex = machineRule(sn.id, R() < 0.5 ? 'lt' : 'gt', sn.values[ints(sn.values.length)], A.actions[ints(A.actions.length)]);
        }
      }
      if (Sim.validate(D, b).ok) return b;
    }
    return dflt();
  }

  function play(D, b, n, opts) { return Sim.play(P, D, b, Object.assign({ n: n || 16 }, opts)); }
  function sum(r) { var v = r.v; return { win: v.win, alive: v.alive, bandFrac: v.bandFrac, maxStage: v.maxStage, finalShare: v.finalShare, peakS: v.peakS }; }

  // Every dial setting for one card set (+ reflex): 81 runs.
  function dialSweep(D, cfg, reflex, n) {
    var out = [];
    for (var p = 0; p <= 8; p++) for (var s = 0; s <= 8; s++) {
      var b = build(p, s, cfg.metabolism, cfg.parts, reflex);
      var r = sum(play(D, b, n)); r.build = b; r.key = key(b);
      out.push(r);
    }
    return out;
  }

  // Greedy count of mutually different winners: different card set, or dials 3 or more apart.
  function sameCards(a, b) {
    return a.metabolism === b.metabolism && a.parts.slice().sort().join() === b.parts.slice().sort().join() &&
      JSON.stringify(a.reflex) === JSON.stringify(b.reflex);
  }

  // One-step dial neighbours of a build.
  function neighbours(b) {
    var out = [];
    ['pace', 'slop'].forEach(function (k) {
      [-1, 1].forEach(function (d) {
        var v = b[k] + d; if (v < 0 || v > 8) return;
        var nb = Object.assign({}, b); nb[k] = v; out.push(nb);
      });
    });
    return out;
  }

  return { rng: rng, build: build, dflt: dflt, machineRule: machineRule, bioRef: bioRef, label: label, key: key, shelfOf: shelfOf, isMachineBuild: isMachineBuild,
    isBioBuild: isBioBuild, configs: configs, sampleRules: sampleRules, allRules: allRules, randomBuild: randomBuild, play: play, sum: sum, dialSweep: dialSweep,
    sameCards: sameCards, neighbours: neighbours };
})();
if (typeof module !== 'undefined') module.exports = LookAliveBots;

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
  function dflt() { return JSON.parse(JSON.stringify(Sim.DEFAULT_BUILD)); }   // the Factory unit
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

  // The Factory parts that stay fitted in slots this dish has not opened yet (Sync pulse in Division on dishes 1 to 3).
  function factoryParts(D) {
    return Object.keys(Lv.FACTORY).filter(function (k) { return k !== 'power' && D.slots.indexOf(k) < 0; }).map(function (k) { return Lv.FACTORY[k]; });
  }
  function offeredIds(D) {
    var ids = []; D.slots.forEach(function (k) { if (k !== 'power' && k !== 'reflex') Sim.offered(D, k).forEach(function (c) { ids.push(c.id); }); });
    return ids;
  }
  function metabolisms(D) { return D.slots.indexOf('power') >= 0 ? D.allowed.metabolism.slice() : [Lv.FACTORY.power]; }

  // Every slot-legal (metabolism, parts) card set for a dish: the Factory parts in locked slots plus any choice from the open slots, within energy.
  function configs(D) {
    var out = [], pool = offeredIds(D), fixed = factoryParts(D);
    function rec(i, chosen) {
      if (i === pool.length) {
        metabolisms(D).forEach(function (m) {
          var parts = fixed.concat(chosen);
          if (Sim.validate(D, { pace: 4, slop: 0, metabolism: m, parts: parts, reflex: null }).ok) out.push({ metabolism: m, parts: parts });
        });
        return;
      }
      rec(i + 1, chosen);
      chosen.push(pool[i]);
      var e = chosen.reduce(function (a, id) { return a + Cards.part(id).energy; }, 0) + fixed.reduce(function (a, id) { return a + Cards.part(id).energy; }, 0);
      if (e <= D.energy) rec(i + 1, chosen);
      chosen.pop();
    }
    rec(0, []);
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
      var pool = offeredIds(D), want = ints(5), mets = metabolisms(D);
      var b = build(ints(9), ints(9), mets[ints(mets.length)], factoryParts(D), null);
      while (want-- > 0 && pool.length) {
        var id = pool.splice(ints(pool.length), 1)[0];
        if (Sim.validate(D, Object.assign({}, b, { parts: b.parts.concat([id]) })).ok) b.parts = b.parts.concat([id]);
      }
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

  // Apply a level fix (see levels.js) to a build, and play it.
  function fixed(b, fix) { return Lv.applyFix(b, fix); }
  // First tick at which a failed run is plainly failing: exposure, extinction, or a share that sits below the band for 5 ticks.
  function failTick(run, aut) {
    var v = run.v, H = run.H, T = run.T, D = run.dish, t, k;
    if (aut && aut.cause === 'acid') return aut.to;
    var best = v.exposedAt > 0 ? v.exposedAt : -1;
    for (t = D.band.warm; t <= T - 4; t++) {
      var ok = true; for (k = 0; k < 5; k++) if (H.share[t + k] >= D.band.lo && H.share[t + k] <= D.band.hi) ok = false;
      if (ok) { if (best < 0 || t < best) best = t; break; }
    }
    return best;
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
    isBioBuild: isBioBuild, configs: configs, factoryParts: factoryParts, offeredIds: offeredIds, sampleRules: sampleRules, allRules: allRules, randomBuild: randomBuild, play: play, sum: sum, dialSweep: dialSweep,
    sameCards: sameCards, neighbours: neighbours, fixed: fixed, failTick: failTick };
})();
if (typeof module !== 'undefined') module.exports = LookAliveBots;

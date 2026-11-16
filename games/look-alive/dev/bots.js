// Look Alive rules spike: bots. Exhaustive sweeps, seeded search, neighbours for the smoothness check, and the autopsy.
var LookAliveBots = (function () {
  'use strict';
  var Sim = typeof LookAlive !== 'undefined' ? LookAlive : require('../sim.js');
  var Lv = typeof LookAliveLevels !== 'undefined' ? LookAliveLevels : require('../levels.js');
  var P = Lv.PLANET, KEYS = ['div', 'tough', 'eff', 'jit', 'waste'];

  function rng(seed) {  // mulberry32
    var a = seed | 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function mk(d, t, e, j, w, rules) { return { div: d, tough: t, eff: e, jit: j, waste: w, rules: rules || [] }; }
  function key(b) { return KEYS.map(function (k) { return b[k]; }).join('') + (b.rules && b.rules.length ? '|' + b.rules.map(Lv.cardText).join(';') : ''); }
  function rulesKey(b) { return (b.rules || []).map(Lv.cardText).join(';'); }
  function label(b) {
    var s = 'div ' + b.div + ' tough ' + b.tough + ' eff ' + b.eff + ' jit ' + b.jit + ' waste ' + b.waste;
    return b.rules && b.rules.length ? s + ' + [' + b.rules.map(Lv.cardText).join('; ') + ']' : s;
  }

  // The bots named in the brief.
  function nothing() { return mk(0, 0, 0, 0, 0); }
  function maxGrowth(dish) {  // every spare point into growth: division rate, then efficiency
    var left = dish.budget - 4, e = Math.max(0, Math.min(4, left));
    return mk(4, 0, e, 0, 0);
  }

  function play(dish, build, n, opts) {
    var o = Object.assign({ n: n || 16 }, opts);
    var s = Sim.play(P, dish, build, o);
    return s;
  }
  function summary(s) {
    var v = s.verdict, H = s.hist, T = s.tick;
    return { win: v.win, alive: v.alive, bandFrac: v.bandFrac, maxStage: v.maxStage, finalShare: H.share[T], peakS: v.peakS };
  }

  // Every legal attribute build for a dish (with an optional fixed rule list), run once.
  function sweepBuilds(dish, n, rules) {
    var builds = Lv.allBuilds(dish), out = [];
    for (var i = 0; i < builds.length; i++) {
      var b = builds[i]; b.rules = rules || [];
      var r = summary(play(dish, b, n));
      r.build = b; r.key = key(b);
      out.push(r);
    }
    return out;
  }

  // Greedy count of mutually different winners. Different = rule differs, or some attribute differs by 2 or more.
  function different(a, b) {
    if (rulesKey(a) !== rulesKey(b)) return true;
    for (var i = 0; i < KEYS.length; i++) if (Math.abs(a[KEYS[i]] - b[KEYS[i]]) >= 2) return true;
    return false;
  }
  function distinctSet(winners) {
    var picked = [];
    for (var i = 0; i < winners.length; i++) {
      var ok = true;
      for (var j = 0; j < picked.length; j++) if (!different(winners[i], picked[j])) { ok = false; break; }
      if (ok) picked.push(winners[i]);
    }
    return picked;
  }

  // One-step neighbours of a build: each attribute +1 or -1, kept legal.
  function neighbours(b, dish) {
    var out = [];
    for (var i = 0; i < KEYS.length; i++) for (var d = -1; d <= 1; d += 2) {
      var nb = Object.assign({}, b, { rules: b.rules }); nb[KEYS[i]] += d;
      if (nb[KEYS[i]] < 0 || nb[KEYS[i]] > Lv.ATTR_MAX[i] || Lv.spent(nb) > dish.budget) continue;
      out.push(nb);
    }
    return out;
  }
  // results: output of sweepBuilds. Returns knife-edge stats using the stored results.
  function smoothness(dish, results, tol) {
    var map = {}, i, j;
    results.forEach(function (r) { map[r.key] = r; });
    var worst = { dShare: 0, dStage: 0, at: null }, knifeAll = 0, knifeWin = 0, winners = 0, live = 0, kShare = 0, kStage = 0;
    results.forEach(function (r) {
      var nbs = neighbours(r.build, dish), edge = false, es = false, eg = false;
      for (j = 0; j < nbs.length; j++) {
        var o = map[key(nbs[j])]; if (!o) continue;
        var ds = Math.abs(o.finalShare - r.finalShare), dg = Math.abs(o.maxStage - r.maxStage);
        if (r.win && (ds > worst.dShare)) worst.dShare = ds, worst.at = r.key + ' -> ' + o.key;
        if (r.win && dg > worst.dStage) worst.dStage = dg;
        if (ds > tol) es = true;
        if (dg > 1) eg = true;
        if (ds > tol || dg > 1) edge = true;
      }
      if (r.alive || r.maxStage > 0) live++;
      if (es) kShare++;
      if (eg) kStage++;
      if (edge) { knifeAll++; if (r.win) knifeWin++; }
      if (r.win) winners++;
    });
    return { worst: worst, knifeAll: knifeAll, knifeWin: knifeWin, winners: winners, total: results.length, live: live, knifeShare: kShare, knifeStage: kStage };
  }

  // ---------- autopsy ----------
  var CHAN_TEXT = ['growth', 'waste chemistry', 'casualties', 'regularity'];
  function pct(x) { return Math.round(x * 100) + '%'; }
  function firstAbove(arr, from, to, thr) { for (var t = from; t <= to; t++) if (arr[t] > thr) return t; return from; }
  // Explain a lost run: one dominant cause, how dominant, and a tick range.
  function autopsy(s) {
    var D = s.D, H = s.hist, T = s.tick, v = s.verdict, band = P.band, k, t;
    var te = v.firstStage3;
    // last tick from which the share stayed below the floor to the end
    var tf = -1; for (t = T; t >= band.warm; t--) { if (H.share[t] < band.lo) tf = t; else break; }
    var below = 0, above = 0;
    for (t = band.warm; t <= T; t++) { if (H.share[t] < band.lo) below++; else if (H.share[t] > band.hi) above++; }
    var res = { cause: '', channel: -1, from: 0, to: 0, dominance: 1, text: '' };
    var exposedFirst = te > 0 && !(tf > 0 && tf < te - 10);
    if (exposedFirst) {
      var sums = [0, 0, 0, 0], tot = 0;
      for (k = 0; k < 4; k++) { for (t = 1; t <= te; t++) sums[k] += H.lvl[k][t]; tot += sums[k]; }
      var best = 0; for (k = 1; k < 4; k++) if (sums[k] > sums[best]) best = k;
      var from = firstAbove(H.lvl[best], 1, te, 0.3);
      var rawAvg = 0; for (t = from; t <= te; t++) rawAvg += H.raw[best][t]; rawAvg /= (te - from + 1);
      res.cause = 'exposed:' + CHAN_TEXT[best]; res.channel = best; res.from = from; res.to = te; res.dominance = tot > 0 ? sums[best] / tot : 1;
      var what;
      if (best === 0) {
        var ratio = H.eR[from + 2] / (H.eN[from + 2] || 1);
        what = 'dividing ' + pct(Math.abs(ratio - 1)) + (ratio < 1 ? ' slower' : ' faster') + ' than the natives';
      } else if (best === 1) {
        what = 'waste chemistry ' + (0.7 - s.rb.mix).toFixed(1) + ' off normal (' + rawAvg.toFixed(1) + 'x the native range at the colony edge)';
      } else if (best === 2) {
        what = 'natives dying because of you at ' + rawAvg.toFixed(1) + 'x the normal rate';
      } else {
        what = 'too regular: timing variance only ' + pct(Math.max(0, 1 - rawAvg / P.suspicion.regularityGain)) + ' of the native normal';
      }
      res.text = 'Exposed at tick ' + te + ': ' + what + ' from tick ' + from + '.';
    } else if (below >= above && tf > 0) {
      var ev = D.event.tick;
      res.dominance = below / Math.max(1, below + above);
      res.from = tf; res.to = T;
      if (ev > 0 && tf >= ev - 5) {
        res.cause = 'outcompeted by the bloom';
        res.text = 'Lost the dish at tick ' + tf + ': after the native bloom at tick ' + ev + ' your share sank below ' + pct(band.lo) + ' and never recovered (final ' + pct(H.share[T]) + ').';
      } else {
        var dead = !v.alive, ti = Math.min(T, tf), ratio = H.eR[ti] / (H.eN[ti] || 1);
        res.cause = dead ? 'starved' : 'below the floor';
        res.text = (dead ? 'Starved out' : 'Below the band floor') + ' from tick ' + tf + ': ' +
          (ratio < 0.95 ? 'dividing ' + pct(1 - ratio) + ' slower than the natives, ' : 'dividing at about native speed but ') +
          'births could not replace deaths from crowding and competition for food (final share ' + pct(H.share[T]) + ').';
      }
    } else if (above > 0) {
      var ta = firstAbove(H.share, band.warm, T, band.hi);
      res.cause = 'overgrew the band'; res.from = ta; res.to = T; res.dominance = above / Math.max(1, below + above);
      res.text = 'Overgrew the band from tick ' + ta + ': share reached ' + pct(Math.max.apply(null, Array.prototype.slice.call(H.share, 0, T + 1))) + ' (ceiling ' + pct(band.hi) + ').';
    } else {
      res.cause = 'in band too little'; res.from = band.warm; res.to = T; res.dominance = 0.5;
      res.text = 'In the band only ' + pct(v.bandFrac) + ' of the time (needs ' + pct(band.need) + ').';
    }
    return res;
  }

  return { rng: rng, mk: mk, key: key, label: label, nothing: nothing, maxGrowth: maxGrowth, play: play, summary: summary, sweepBuilds: sweepBuilds,
    different: different, distinctSet: distinctSet, neighbours: neighbours, smoothness: smoothness, autopsy: autopsy };
})();
if (typeof module !== 'undefined') module.exports = LookAliveBots;

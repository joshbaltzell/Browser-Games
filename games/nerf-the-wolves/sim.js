// Rules only. No DOM, no Date, no Math.random (take an rng argument).
var WolfSim = (function () {
  'use strict';
  var D = (typeof NWData !== 'undefined') ? NWData : require('./data.js');
  var ORDER = D.SPECIES_ORDER;

  function baseMults() {
    var M = {};
    ORDER.forEach(function (a) { M[a] = {}; ORDER.forEach(function (b) { M[a][b] = 1; }); });
    D.BASE_MULT.forEach(function (r) { M[r[0]][r[1]] = r[2]; });
    return M;
  }
  function applyFx(sp, M, fx) {
    fx.forEach(function (e) {
      if (e.t === 'stat') sp[e.s][e.k] += e.d;
      else M[e.a][e.b] *= e.x;
    });
  }
  function edge(sp, M, i, j) {
    return Math.max(5, sp[i].atk - 0.6 * sp[j].def) * (1 + 0.004 * (sp[i].spd - sp[j].spd)) * M[i][j];
  }
  function pmat(sp, M) {
    var P = {};
    ORDER.forEach(function (i) {
      P[i] = {};
      ORDER.forEach(function (j) {
        if (i === j) { P[i][j] = 0.5; return; }
        var a = edge(sp, M, i, j), b = edge(sp, M, j, i);
        P[i][j] = a / (a + b);
      });
    });
    return P;
  }
  // species: {name:{atk,def,spd,base}}. Returns win rate in percent and pick shares (0..1).
  function rates(sp, M) {
    var P = pmat(sp, M), picks = {}, wr = {}, first = {}, tot = 0, k;
    ORDER.forEach(function (s) { tot += sp[s].base; });
    ORDER.forEach(function (s) { picks[s] = sp[s].base / tot; });
    function winRates() {
      ORDER.forEach(function (i) {
        var w = 0;
        ORDER.forEach(function (j) { w += picks[j] * P[i][j]; });
        wr[i] = w;
      });
    }
    var basePicks = {};
    ORDER.forEach(function (s) { basePicks[s] = picks[s]; });
    for (k = 0; k < 4; k++) {
      winRates();
      if (k === 0) ORDER.forEach(function (s) { first[s] = wr[s] * 100; });
      var t = {}, sum = 0;
      ORDER.forEach(function (s) { t[s] = sp[s].base * Math.exp(6 * (wr[s] - 0.5)); sum += t[s]; });
      ORDER.forEach(function (s) { picks[s] = 0.5 * picks[s] + 0.5 * (t[s] / sum); });
    }
    winRates();
    var settled = {};
    ORDER.forEach(function (s) { settled[s] = wr[s] * 100; });
    // wr is the matchup strength against the opening meadow (everyone picked by base popularity).
    // The plan's starting ranges only hold that way: against settled picks the pick-weighted mean is always 50.
    return { wr: first, picks: picks, basePicks: basePicks, settled: settled, P: P };
  }

  function build(level, bought) {
    var sp = {}, M = baseMults();
    ORDER.forEach(function (s) { sp[s] = { atk: D.SPECIES[s].atk, def: D.SPECIES[s].def, spd: D.SPECIES[s].spd, base: D.SPECIES[s].base }; });
    if (level.wolf === 'build') { sp.wolf.atk = 40; sp.wolf.def = 40; sp.wolf.spd = 40; }
    else applyFx(sp, M, D.WOLF_VARIANTS[level.wolf].fx);
    applyFx(sp, M, level.setup || []);
    bought.forEach(function (id) { applyFx(sp, M, D.SKILLS[id].fx); });
    return { sp: sp, M: M };
  }
  function costOf(bought) { return bought.reduce(function (n, id) { return n + D.SKILLS[id].cost; }, 0); }
  function isSolved(wr) { return ORDER.every(function (s) { return wr[s] >= 43 && wr[s] <= 57; }); }

  function pickFrom(picks, rng, skip) {
    var tot = 0, r;
    ORDER.forEach(function (s) { if (s !== skip) tot += picks[s]; });
    r = rng() * tot;
    for (var i = 0; i < ORDER.length; i++) {
      var s = ORDER[i];
      if (s === skip) continue;
      r -= picks[s];
      if (r <= 0) return s;
    }
    return ORDER[ORDER.length - 1];
  }
  // 30 encounters. a is the initiator (higher attack of the pair), winner is drawn from P.
  function encounters(sp, picks, P, rng, n) {
    var out = [];
    for (var k = 0; k < n; k++) {
      var x = pickFrom(picks, rng, null), y = pickFrom(picks, rng, x);
      var a = sp[x].atk >= sp[y].atk ? x : y, b = a === x ? y : x;
      var winner = rng() < P[a][b] ? a : b;
      var kind = winner === a ? 'hunt' : (winner === 'rabbit' || winner === 'hawk' ? 'escape' : 'fend');
      out.push({ a: a, b: b, winner: winner, kind: kind });
    }
    return out;
  }

  function lines(species, sit, rng) {
    var arr = D.PRAYERS[species][sit];
    return arr[Math.floor(rng() * arr.length) % arr.length];
  }
  // prev: win rates to compare against (defaults to the unbought meadow)
  function prayers(level, wr, prev, rng) {
    var delta = {}, ranked;
    ORDER.forEach(function (s) { delta[s] = wr[s] - prev[s]; });
    ranked = ORDER.slice().sort(function (p, q) { return Math.abs(delta[q]) - Math.abs(delta[p]); });
    var out = [];
    ranked.slice(0, 2).forEach(function (s, idx) {
      var sit;
      if (Math.abs(delta[s]) >= 1.5) {
        sit = delta[s] > 0 ? 'helped' : 'hurt';
        if (idx === 1 && delta[s] < 0) {
          var up = ORDER.filter(function (o) { return delta[o] > 3; });
          if (up.length) sit = 'rivalHelped';
        }
      } else sit = wr[s] >= 55 ? 'strong' : (wr[s] <= 45 ? 'weak' : (delta[s] >= 0 ? 'helped' : 'hurt'));
      if (wr[s] > 58 && sit === 'helped') sit = 'strong';
      if (wr[s] < 42 && sit === 'hurt') sit = 'weak';
      out.push({ species: s, situation: sit, text: lines(s, sit, rng) });
    });
    return out;
  }

  function puzzle(level, bought, seed, prevWr) {
    var b = build(level, bought), r = rates(b.sp, b.M), rng = seed && seed.call ? seed : makeRng(seed | 0);
    var enc = encounters(b.sp, r.basePicks, r.P, rng, 30);
    var prev = prevWr || rates(build(level, []).sp, build(level, []).M).wr;
    return { wr: r.wr, picks: r.picks, settled: r.settled, solved: isSolved(r.wr), cost: costOf(bought), encounters: enc,
      prayers: prayers(level, r.wr, prev, rng), sp: b.sp };
  }
  function makeRng(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  // Every affordable combination. Repeatable skills may be bought several times.
  function combos(level, cb) {
    var offers = level.offers, cur = [];
    (function rec(i, left) {
      if (i === offers.length) { cb(cur.slice()); return; }
      var sk = D.SKILLS[offers[i]], max = sk.repeat ? Math.floor(left / sk.cost) : (left >= sk.cost ? 1 : 0);
      for (var n = 0; n <= max; n++) {
        for (var q = 0; q < n; q++) cur.push(sk.id);
        rec(i + 1, left - n * sk.cost);
        for (var q2 = 0; q2 < n; q2++) cur.pop();
      }
    })(0, level.budget);
  }
  function solve(level) {
    var best = null;
    combos(level, function (bought) {
      var b = build(level, bought), r = rates(b.sp, b.M);
      if (!isSolved(r.wr)) return;
      var c = costOf(bought);
      if (!best || c < best.cost) best = { bought: bought, cost: c };
    });
    return best;
  }
  function solvedWith(level, bought) { var b = build(level, bought); return isSolved(rates(b.sp, b.M).wr); }
  function start(level) { var b = build(level, []); return rates(b.sp, b.M); }

  return { rates: rates, puzzle: puzzle, solve: solve, solvedWith: solvedWith, start: start, build: build, costOf: costOf,
    isSolved: isSolved, makeRng: makeRng, baseMults: baseMults };
})();
if (typeof module !== 'undefined') module.exports = WolfSim;

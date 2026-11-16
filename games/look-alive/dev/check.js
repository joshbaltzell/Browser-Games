// Run: node games/look-alive/dev/check.js   (a few minutes: it sweeps every build of every dish, and every card)
// Look Alive rules spike. Nine properties, one PASS or FAIL line each, with the numbers.
const Sim = require('../sim.js');
const Lv = require('../levels.js');
const B = require('./bots.js');
const P = Lv.PLANET, DISHES = Lv.DISHES;
const SN = 16;          // grid size for sweeps (a parameter; winners are re-checked at 64)
const TOL = 0.05;       // smoothness tolerance: 5 percentage points of final share
let fails = 0, t0 = Date.now();
const lap = name => console.log('  [' + ((Date.now() - t0) / 1000).toFixed(1) + 's] ' + name);
const f = (x, d) => x.toFixed(d == null ? 2 : d);
const pc = x => f(x * 100, 1) + '%';
function verdict(pass, tag, msg) { if (!pass) fails++; console.log((pass ? 'PASS ' : 'FAIL ') + tag + ' ' + msg); }
const names = DISHES.map(d => 'dish ' + d.id);

console.log('Look Alive rules spike: ' + DISHES.length + ' dishes, ' + P.ticks + ' ticks, sweep grid ' + SN + 'x' + SN + ', band ' + pc(P.band.lo) + ' to ' + pc(P.band.hi));
console.log('Attribute builds per dish: ' + DISHES.map(d => 'dish ' + d.id + ' ' + Lv.allBuilds(d).length).join(', ') + '; cards in the vocabulary: ' + Lv.allCards().length);

// ---------- exhaustive attribute sweeps (no rules) ----------
const sweeps = DISHES.map(d => B.sweepBuilds(d, SN));
lap('attribute sweeps');
const wins = sweeps.map(r => r.filter(x => x.win));

// ---------- 1. doing nothing loses every dish ----------
{
  const parts = []; let all = true;
  DISHES.forEach(d => {
    const s = B.play(d, B.nothing(), 64);
    const a = B.autopsy(s);
    all = all && !s.verdict.win;
    parts.push('dish ' + d.id + ': ' + a.cause + ' (final share ' + pc(s.verdict.finalShare) + ', in band ' + pc(s.verdict.bandFrac) + ', peak stage ' + s.verdict.maxStage + ')');
  });
  verdict(all, '1 NOTHING LOSES', parts.join(' | '));
}

// ---------- 2. maxing growth loses through suspicion or the immune response ----------
{
  const parts = []; let all = true;
  DISHES.forEach((d, i) => {
    const b = B.maxGrowth(d), s = B.play(d, b, 64), v = s.verdict, a = B.autopsy(s);
    const viaSusp = !v.win && (v.maxStage >= 2 || v.peakS >= P.suspicion.stage[1]);
    all = all && viaSusp;
    const d4 = sweeps[i].filter(x => x.build.div === 4), d4w = d4.filter(x => x.win).length;
    parts.push('dish ' + d.id + ' [' + B.label(b) + ']: ' + (v.win ? 'WON' : 'lost') + ', peak stage ' + v.maxStage + ', peak suspicion ' + f(v.peakS) + ' (' + a.cause + '); ' + d4w + '/' + d4.length + ' builds with division 4 win');
  });
  verdict(all, '2 MAX GROWTH LOSES', '\n       ' + parts.join('\n       '));
}

// ---------- 5 (search part first): cards on dish 3 ----------
const dish3 = DISHES[2], cards = Lv.allCards();
const R = B.rng(777), allB = Lv.allBuilds(dish3);
const randomBuilds = []; for (let i = 0; i < 60; i++) randomBuilds.push(allB[Math.floor(R() * allB.length)]);
const robust = wins[1].map(x => x.build).slice(0, 24);   // builds that win the bloom-lite dish 2
const cand = randomBuilds.concat(robust);
const cardRes = cards.map(c => {
  let winsRandom = 0, winsRobust = 0, fireFrac = 0, nw = 0;
  cand.forEach((b, i) => {
    const s = B.play(dish3, Object.assign({}, b, { rules: [c] }), SN);
    if (s.verdict.win) {
      if (i < randomBuilds.length) winsRandom++; else winsRobust++;
      fireFrac += s.fired[0] / (SN * SN * P.ticks); nw++;
    }
  });
  return { card: c, winsRandom, winsRobust, fire: nw ? fireFrac / nw : 0 };
});
lap('card search (' + cards.length + ' cards x ' + cand.length + ' builds)');
const winCards = cardRes.filter(r => r.winsRandom + r.winsRobust > 0).sort((a, b) => (b.winsRandom + b.winsRobust) - (a.winsRandom + a.winsRobust));
const topCards = winCards.filter(r => r.fire < 0.8).slice(0, 3);
// exhaustive builds under the three best conditional cards
const cardSweeps = topCards.map(r => B.sweepBuilds(dish3, SN, [r.card]));
lap('exhaustive builds under the top cards');

// ---------- 3. at least two clearly different winning builds per dish ----------
{
  const parts = []; let all = true;
  DISHES.forEach((d, i) => {
    let w = wins[i], total = sweeps[i].length, label = '';
    if (i === 2) {
      w = [].concat.apply([], cardSweeps.map(cs => cs.filter(x => x.win)));
      total = sweeps[i].length * Math.max(1, topCards.length);
      label = ' (attribute x top-' + topCards.length + ' cards)';
    }
    const dist = B.distinctSet(w.map(x => x.build));
    all = all && dist.length >= 2;
    parts.push('dish ' + d.id + ': ' + w.length + '/' + total + ' win' + label + ', ' + dist.length + ' mutually different; e.g. ' + dist.slice(0, 2).map(B.label).join('  VS  '));
  });
  verdict(all, '3 TWO+ DIFFERENT WINNERS', '\n       ' + parts.join('\n       '));
}

// ---------- 4. smoothness ----------
{
  const parts = []; let all = true, worstShare = 0, worstStage = 0;
  const sets = DISHES.map((d, i) => i < 2 ? [[sweeps[i], d]] : cardSweeps.map(cs => [cs, d]));
  DISHES.forEach((d, i) => {
    let ws = 0, wg = 0, knife = 0, total = 0, kw = 0, nwin = 0, at = '', ksh = 0, kst = 0;
    sets[i].forEach(pair => {
      const m = B.smoothness(pair[1], pair[0], TOL);
      if (m.worst.dShare > ws) { ws = m.worst.dShare; at = m.worst.at; }
      wg = Math.max(wg, m.worst.dStage); knife += m.knifeAll; total += m.total; kw += m.knifeWin; nwin += m.winners; ksh += m.knifeShare; kst += m.knifeStage;
    });
    worstShare = Math.max(worstShare, ws); worstStage = Math.max(worstStage, wg);
    parts.push('dish ' + d.id + ': worst winner-neighbour share change ' + f(ws * 100, 1) + 'pp, worst stage jump ' + wg + '; winners on a knife edge ' + kw + '/' + nwin + '; ALL builds on a knife edge ' + knife + '/' + total + ' = ' + pc(knife / total) + ' (share-only ' + ksh + ', stage-only ' + kst + ')' + (i === 2 ? ' (with the top cards)' : ''));
  });
  all = worstShare <= TOL && worstStage <= 1;
  verdict(all, '4 SMOOTH (tolerance ' + TOL * 100 + 'pp, stage jump <= 1)', '\n       ' + parts.join('\n       '));
}

// ---------- 5. dish 3 needs a rule; which cards win ----------
{
  const attrWins = wins[2].length;
  verdict(attrWins === 0 && winCards.length > 0, '5 DISH 3 NEEDS A RULE',
    attrWins + '/' + sweeps[2].length + ' attribute-only builds win (exhaustive); ' + winCards.length + '/' + cards.length + ' cards win with at least one of ' + cand.length + ' tried builds');
  const cond = winCards.filter(r => r.fire < 0.8), degen = winCards.filter(r => r.fire >= 0.8);
  console.log('       conditional winning cards (wins among ' + randomBuilds.length + ' random + ' + robust.length + ' robust builds):');
  cond.forEach(r => console.log('         ' + String(r.winsRandom).padStart(2) + ' + ' + String(r.winsRobust).padStart(2) + '  fires ' + pc(r.fire) + '  ' + Lv.cardText(r.card)));
  console.log('       always-on cards (fire in over 80% of cell-ticks; a free attribute in disguise): ' + degen.length + (degen.length ? ' e.g. ' + degen.slice(0, 3).map(r => Lv.cardText(r.card)).join(' | ') : ''));
}

// ---------- 6. slider sweep resistance ----------
{
  const parts = [];
  DISHES.forEach((d, i) => parts.push('dish ' + d.id + ' ' + pc(wins[i].length / sweeps[i].length) + ' (' + wins[i].length + '/' + sweeps[i].length + ')'));
  const rndPairs = cardRes.reduce((a, r) => a + r.winsRandom, 0), rndTot = cards.length * randomBuilds.length;
  // structure = sensor + action; how many of the 54 have any winning threshold or comparator
  const struct = {}, structAll = {};
  cardRes.forEach(r => {
    const k = r.card.sensor + ' -> ' + r.card.action;
    structAll[k] = (structAll[k] || 0) + 1;
    if (r.winsRandom + r.winsRobust > 0 && r.fire < 0.8) struct[k] = (struct[k] || 0) + 1;
  });
  const nStruct = Object.keys(structAll).length, nWinStruct = Object.keys(struct).length;
  // numeric nudge: attribute-only builds near a good build never win dish 3
  const structural = wins[2].length === 0 && nWinStruct / nStruct <= 0.25;
  verdict(structural, '6 SLIDER SWEEP RESISTANCE',
    'random attribute build wins: ' + parts.join(', ') + '; dish 3 random (build, card) pairs win ' + pc(rndPairs / rndTot) + ' (' + rndPairs + '/' + rndTot + '); ' +
    'dish 3 needs a structural choice: ' + nWinStruct + ' of ' + nStruct + ' (sensor, action) structures have a conditional winner (' + Object.keys(struct).join('; ') + '); no attribute nudge wins');
  Object.keys(struct).forEach(k => console.log('       structure ' + k + ': ' + struct[k] + '/' + structAll[k] + ' (cmp, value) variants win'));
}

// ---------- 7. determinism, snapshots ----------
{
  const card = topCards.length ? topCards[0].card : cards[0];
  const b = Object.assign({}, wins[1][0] ? wins[1][0].build : B.nothing(), { rules: [card] });
  const same = (x, y) => ['N', 'R', 'F', 'WA', 'WB'].every(k => Buffer.compare(Buffer.from(x[k].buffer), Buffer.from(y[k].buffer)) === 0);
  const hsame = (x, y) => ['share', 'S', 'stage', 'kill', 'nat', 'rob', 'food'].every(k => Buffer.compare(Buffer.from(x.hist[k].buffer), Buffer.from(y.hist[k].buffer)) === 0) &&
    x.hist.lvl.every((a, i) => Buffer.compare(Buffer.from(a.buffer), Buffer.from(y.hist.lvl[i].buffer)) === 0) &&
    x.hist.fires[0].every((v, i) => v === y.hist.fires[0][i]);
  const a = B.play(dish3, b, 32, { snapEvery: 100 }), c = B.play(dish3, b, 32);
  const rep = same(a, c) && hsame(a, c);
  const res = [100, 200].map(tk => {
    const snap = a.snaps.filter(sn => sn.tick === tk)[0];
    const r = Sim.resume(P, dish3, b, snap, { n: 32 }); Sim.run(r);
    return same(a, r) && hsame(a, r);
  });
  // a different seed must differ (the noise is real)
  const d = B.play(dish3, b, 32, { seed: 99 });
  const diff = !same(a, d);
  verdict(rep && res[0] && res[1] && diff, '7 DETERMINISM', 'repeat run identical: ' + rep + '; resume from tick 100 identical (fields + history): ' + res[0] + '; from tick 200: ' + res[1] + '; other seed differs: ' + diff + ' (32x32, dish 3, ' + B.label(b) + ')');
}

// ---------- 8. attribution ----------
{
  const cases = [];
  DISHES.forEach((d, i) => {
    cases.push({ d: d, b: B.nothing(), tag: 'doing nothing' });
    cases.push({ d: d, b: B.maxGrowth(d), tag: 'max growth' });
    const losers = sweeps[i].filter(x => !x.win), R2 = B.rng(31 + i);
    for (let k = 0; k < 150; k++) cases.push({ d: d, b: losers[Math.floor(R2() * losers.length)].build, tag: 'random loser' });
  });
  const kinds = {}; let resolved = 0, losing = 0; const ex = {};
  cases.forEach(c => {
    const s = B.play(c.d, c.b, SN);
    if (s.verdict.win) return;
    losing++;
    const a = B.autopsy(s);
    const ok = a.dominance >= 0.5 && a.from > 0 && a.to >= a.from;
    if (ok) resolved++;
    kinds[a.cause] = (kinds[a.cause] || 0) + 1;
    if (!ex[a.cause]) ex[a.cause] = 'dish ' + c.d.id + ' [' + B.label(c.b) + '] ' + a.text + ' (dominant by ' + pc(a.dominance) + ')';
  });
  verdict(resolved / losing >= 0.9, '8 ATTRIBUTION', resolved + '/' + losing + ' losing runs have one dominant cause (>= 50% of the blame) with a tick range. Causes: ' +
    Object.keys(kinds).map(k => k + ' ' + kinds[k]).join(', '));
  const pick = Object.keys(ex).sort((x, y) => (x.indexOf('exposed') === 0 ? 0 : 1) - (y.indexOf('exposed') === 0 ? 0 : 1));
  console.log('       autopsies (grid ' + SN + 'x' + SN + '):');
  pick.slice(0, 5).forEach(k => console.log('         - ' + ex[k]));
}

// ---------- 9. speed ----------
{
  const b = wins[1][0] ? wins[1][0].build : B.nothing();
  const lines = [];
  function time(label, n, opts, reps) {
    Sim.baseState(P, n);   // the one-off native settle is timed separately
    let best = 1e9;
    for (let r = 0; r < reps; r++) { const t = process.hrtime.bigint(); const s = Sim.create(P, dish3, b, Object.assign({ n: n }, opts)); Sim.run(s); best = Math.min(best, Number(process.hrtime.bigint() - t) / 1e6); }
    lines.push(label + ' ' + f(best, 0) + ' ms'); return best;
  }
  let t = process.hrtime.bigint(); Sim.baseState(P, 64 + 1); const settle65 = Number(process.hrtime.bigint() - t) / 1e6;
  const a64 = time('64x64 full run with history', 64, {}, 3);
  const n64 = time('64x64 no history', 64, { history: false }, 3);
  const s64 = time('64x64 history + snapshot every 10 ticks', 64, { snapEvery: 10 }, 3);
  const a256 = time('256x256 full run with history', 256, {}, 1);
  const n256 = time('256x256 no history', 256, { history: false }, 1);
  const s256 = time('256x256 history + snapshot every 10 ticks', 256, { snapEvery: 10 }, 1);
  const a16 = time('16x16 full run (the sweep size)', 16, {}, 5);
  const oneSnap = (() => { const s = Sim.create(P, dish3, b, { n: 256 }); Sim.run(s, 50); const t1 = process.hrtime.bigint(); for (let i = 0; i < 20; i++) Sim.snapshot(s); return Number(process.hrtime.bigint() - t1) / 1e6 / 20; })();
  verdict(a64 < 2000 && a256 < 15000, '9 SPEED', lines.join('; ') + '; history costs ' + f(a64 - n64, 0) + ' ms at 64 and ' + f(a256 - n256, 0) + ' ms at 256; 29 snapshots add ' + f(s64 - a64, 0) + ' ms at 64 and ' + f(s256 - a256, 0) + ' ms at 256 (one 256x256 snapshot ' + f(oneSnap, 1) + ' ms); one-off native settle (250 ticks) at 65x65 ' + f(settle65, 0) + ' ms');
}

// ---------- extra: do the 16x16 results hold at 64x64? ----------
{
  const parts = []; let okAll = true;
  DISHES.forEach((d, i) => {
    const w = i === 2 ? cardSweeps.length ? cardSweeps[0].filter(x => x.win) : [] : wins[i];
    const R3 = B.rng(5 + i), pick = [];
    for (let k = 0; k < Math.min(25, w.length); k++) pick.push(w[Math.floor(R3() * w.length)]);
    let holds = 0, fsum = 0;
    pick.forEach(x => { const s = B.play(d, x.build, 64); if (s.verdict.win) holds++; fsum += Math.abs(s.verdict.finalShare - x.finalShare); });
    okAll = okAll && pick.length > 0 && holds / pick.length >= 0.8;
    parts.push('dish ' + d.id + ' ' + holds + '/' + pick.length + ' (mean final-share gap ' + f(fsum / Math.max(1, pick.length) * 100, 1) + 'pp)');
  });
  verdict(okAll, 'X GRID SIZE AGREEMENT', 'sampled 16x16 winners re-run at 64x64 still win: ' + parts.join(', '));
}

console.log('\n' + (fails ? fails + ' FAILING' : 'all passing') + ' in ' + ((Date.now() - t0) / 1000).toFixed(1) + 's');
process.exitCode = fails ? 1 : 0;

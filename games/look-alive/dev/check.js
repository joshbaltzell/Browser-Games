// Run: node games/look-alive/dev/check.js         (about 4 to 6 minutes: it sweeps every card set against all 81 dial settings)
//      node games/look-alive/dev/check.js quick   (smaller sweeps, about a minute, for tuning)
// Look Alive: the ten properties of MVP-SPEC section 7, one PASS or FAIL line each with numbers, then a summary.
const Sim = require('../sim.js');
const Lv = require('../levels.js');
const Cards = require('../cards.js');
const B = require('./bots.js');
const P = Lv.PLANET;
const QUICK = process.argv[2] === 'quick';
const SN = 16;            // sweeps run on a 16x16 grid; a sample of results is confirmed at 64x64 (property X)
const TOL = 0.05;         // smoothness: one dial step may move the final share by at most 5 points
const DISH_IDS = [1, 3, 4];
let fails = 0, t0 = Date.now();
const f = (x, d) => x.toFixed(d == null ? 2 : d);
const pc = x => f(x * 100, 1) + '%';
const lap = name => console.log('  [' + ((Date.now() - t0) / 1000).toFixed(0) + 's] ' + name);
function result(pass, tag, msg) { if (!pass) fails++; console.log((pass ? 'PASS ' : 'FAIL ') + tag + ' ' + msg); return pass; }
const shelfCount = b => B.isMachineBuild(b) ? 'machine' : 'biology';

console.log('Look Alive checks: dishes ' + DISH_IDS.join(', ') + ', ' + P.ticks + ' ticks, sweep grid ' + SN + 'x' + SN + (QUICK ? ' (quick mode)' : ''));

// ------------------------------------------------------------------ sweeps
// For each dish: every card set x every dial setting, with no reflex; on dish 4 also each biology reflex and a sample of machine rules.
const data = {};
DISH_IDS.forEach(id => {
  const D = Lv.dish(id), cfs = B.configs(D), all = [];
  const stride = QUICK ? 4 : 1;
  const sweepAll = (reflex, cs) => cs.forEach(c => B.dialSweep(D, c, reflex, SN).forEach(r => all.push(r)));
  sweepAll(null, cfs.filter((_, i) => i % stride === 0));
  const noReflexCount = all.length;
  if (D.reflexSlot) {
    const isBio = c => [c.metabolism].concat(c.parts).every(id => Cards.part(id).shelf === 'biology');
    const sub = cfs.filter((c, i) => i % (QUICK ? 8 : 3) === 0 || isBio(c));   // every third card set, and every all-Biology one
    D.allowed.bio.forEach(rid => sweepAll(B.bioRef(rid), sub));
    // machine rules: tried on the card sets that win with the Stringent response, plus every respiration card set built from
    // wall, errors, repair and radio (toughness and a quiet colony are where a rule can help), over the upper dial range
    const score = {}; all.forEach(r => { if (r.win && r.build.reflex) { const k = r.build.metabolism + ':' + r.build.parts.join(','); score[k] = (score[k] || 0) + 1; } });
    const sets = {}; Object.keys(score).sort((a, b) => score[b] - score[a]).slice(0, QUICK ? 4 : 8).forEach(k => { sets[k] = 1; });
    const fam = ['wall', 'errors', 'repair', 'radio'];
    for (let m = 0; m < 16; m++) { const ps = fam.filter((_, i) => m & (1 << i)); if (ps.length <= D.partSlots && ps.reduce((a, x) => a + Cards.part(x).energy, 0) <= D.energy) sets['respiration:' + ps.join(',')] = 1; }
    const rsub = Object.keys(sets).map(k => { const [m, ps] = k.split(':'); return { metabolism: m, parts: ps ? ps.split(',') : [] }; });
    const rules = B.allRules(D), R = B.rng(31), pick = [];
    rules.forEach(rl => { if (rl.action === 'pause' || R() < (QUICK ? 0.06 : 0.12)) pick.push(rl); });
    pick.forEach(rl => rsub.forEach(c => {
      for (let p = 5; p <= 8; p += 1) for (let s = 4; s <= 8; s += 1) {
        const b = B.build(p, s, c.metabolism, c.parts, rl), r = B.sum(B.play(D, b, SN)); r.build = b; r.key = B.key(b); all.push(r);
      }
    }));
  }
  data[id] = { D, cfs, all, noReflexCount };
  lap('dish ' + id + ': ' + all.length + ' runs, ' + all.filter(r => r.win).length + ' wins');
});

// ------------------------------------------------------------------ 1. default build loses and the autopsy says why
{
  const parts = []; let ok = true;
  DISH_IDS.forEach(id => {
    const r = B.play(data[id].D, B.dflt(), SN), a = Sim.autopsy(r);
    const good = !r.v.win && a && a.text && /factory/i.test(a.text);
    ok = ok && good;
    parts.push('dish ' + id + ': ' + (r.v.win ? 'WON' : 'lost') + ', peak stage ' + r.v.maxStage + ' | ' + (a ? a.text : 'no autopsy'));
  });
  result(ok, '1 DEFAULT LOSES', '\n       ' + parts.join('\n       '));
}

// ------------------------------------------------------------------ 2. the all-Machine build loses through Regularity
{
  const parts = []; let ok = true;
  DISH_IDS.forEach(id => {
    const D = data[id].D, mach = D.allowed.parts.filter(x => B.shelfOf(x) === 'machine'), met = D.allowed.metabolism.filter(x => B.shelfOf(x) === 'machine')[0];
    const k = Math.min(D.partSlots, mach.length), stacks = [];
    (function rec(i, ch) {
      if (ch.length === k) { const e = ch.reduce((a, x) => a + Cards.part(x).energy, Cards.part(met).energy); if (e <= D.energy) stacks.push(ch.slice()); return; }
      for (let j = i; j < mach.length; j++) { ch.push(mach[j]); rec(j + 1, ch); ch.pop(); }
    })(0, []);
    let n = 0, wins = 0, exposed = 0, regLead = 0;
    stacks.forEach(st => {
      for (let p = 0; p <= 8; p++) for (let s = 0; s <= 8; s++) {
        const r = B.play(D, B.build(p, s, met, st, null), SN); n++;
        if (r.v.win) { wins++; continue; }
        const a = Sim.autopsy(r);
        if (a.cause.indexOf('exposed') === 0) { exposed++; if (a.channel === 3) regLead++; }
      }
    });
    const good = wins === 0 && exposed > 0 && regLead / exposed >= 0.8;
    ok = ok && good;
    parts.push('dish ' + id + ' [' + met + ' + ' + stacks.map(s => s.join('+')).join(' | ') + ']: ' + n + ' dial settings, ' + wins + ' wins, ' + exposed + ' exposed (' + pc(exposed / n) + '), ' + regLead + ' of those led by Regularity (' + pc(exposed ? regLead / exposed : 0) + ')');
  });
  result(ok, '2 ALL-MACHINE LOSES THROUGH REGULARITY', '\n       ' + parts.join('\n       '));
}

// ------------------------------------------------------------------ 3. both shelves viable
const examples = {};
{
  const parts = []; let ok = true;
  DISH_IDS.forEach(id => {
    const w = data[id].all.filter(r => r.win);
    const bio = w.filter(r => B.isBioBuild(r.build)), mach = w.filter(r => B.isMachineBuild(r.build));
    // example winners: the one with the highest band fraction among each shelf, preferring the fewest cards
    const pickBest = list => list.slice().sort((a, b) => (b.bandFrac - a.bandFrac) || (a.build.parts.length - b.build.parts.length))[0];
    const withOneTwo = mach.filter(r => {
      const m = r.build.parts.filter(x => B.shelfOf(x) === 'machine').length + (B.shelfOf(r.build.metabolism) === 'machine' ? 1 : 0) + (r.build.reflex && r.build.reflex.kind === 'machine' ? 1 : 0);
      return m >= 1 && m <= 2;
    });
    examples[id] = { bio: pickBest(bio), mach: pickBest(withOneTwo.length ? withOneTwo : mach) };
    const good = bio.length > 0 && mach.length > 0;
    ok = ok && good;
    parts.push('dish ' + id + ': ' + bio.length + ' all-Biology winners, ' + mach.length + ' winners using a Machine card (' + withOneTwo.length + ' with only one or two) of ' + data[id].all.length + ' runs');
  });
  result(ok, '3 BOTH SHELVES VIABLE', '\n       ' + parts.join('\n       '));
  DISH_IDS.forEach(id => {
    const e = examples[id];
    console.log('       dish ' + id + ' Biology example: ' + (e.bio ? B.label(e.bio.build) + ' (final share ' + pc(e.bio.finalShare) + ', in band ' + pc(e.bio.bandFrac) + ')' : 'none'));
    console.log('       dish ' + id + ' Machine example: ' + (e.mach ? B.label(e.mach.build) + ' (final share ' + pc(e.mach.finalShare) + ', in band ' + pc(e.mach.bandFrac) + ')' : 'none'));
  });
}

// ------------------------------------------------------------------ 4. dial smoothness for every winning build
{
  const parts = []; let ok = true;
  DISH_IDS.forEach(id => {
    const map = {}; data[id].all.forEach(r => { map[r.key] = r; });
    let winners = 0, checked = 0, badShare = 0, badStage = 0, bad = 0, worstShare = 0, worstStage = 0, worstAt = '';
    const done = {};
    data[id].all.forEach(r => {
      if (!r.win || done[r.key]) return; done[r.key] = 1; winners++;
      let badHere = false;
      B.neighbours(r.build).forEach(nb => {
        const o = map[B.key(nb)]; if (!o) return; checked++;
        const ds = Math.abs(o.finalShare - r.finalShare), dg = Math.abs(o.maxStage - r.maxStage);
        if (ds > worstShare) { worstShare = ds; worstAt = B.label(r.build) + ' -> ' + B.label(nb); }
        if (dg > worstStage) worstStage = dg;
        if (ds > TOL) { badShare++; badHere = true; }
        if (dg > 1) { badStage++; badHere = true; }
      });
      if (badHere) bad++;
    });
    const good = bad === 0;
    ok = ok && good;
    parts.push('dish ' + id + ': ' + winners + ' winners, ' + checked + ' neighbour steps, worst share change ' + f(worstShare * 100, 1) + ' points, worst stage change ' + worstStage + '; ' + bad + ' winners break the rule (' + badShare + ' share steps, ' + badStage + ' stage steps)' + (bad ? ' e.g. ' + worstAt : ''));
  });
  result(ok, '4 DIAL SMOOTHNESS (5 points, 1 stage)', '\n       ' + parts.join('\n       '));
}

// ------------------------------------------------------------------ 5. dish 4 needs a reflex
{
  const d = data[4], none = d.all.slice(0, d.noReflexCount);
  const bioWin = d.all.filter(r => r.win && r.build.reflex && r.build.reflex.kind === 'bio');
  const macWin = d.all.filter(r => r.win && r.build.reflex && r.build.reflex.kind === 'machine');
  const noneWins = none.filter(r => r.win);
  const byBio = {}; bioWin.forEach(r => { byBio[r.build.reflex.id] = (byBio[r.build.reflex.id] || 0) + 1; });
  const good = noneWins.length === 0 && bioWin.length > 0 && macWin.length > 0;
  result(good, '5 DISH 4 NEEDS A REFLEX', none.length + ' reflex-free builds (every card set, every dial): ' + noneWins.length + ' win. Biology reflexes: ' + bioWin.length + ' winning runs ' + JSON.stringify(byBio) +
    '. Machine rules: ' + macWin.length + ' winning runs, ' + new Set(macWin.map(r => Cards.ruleText(r.build.reflex))).size + ' different rules' +
    (macWin[0] ? ' (e.g. ' + B.label(macWin[0].build) + ')' : ''));
}

// ------------------------------------------------------------------ 6. an always-on machine rule is never better than the same build without it
{
  const D = Lv.dish(4), R = B.rng(77), N = QUICK ? 150 : 500;
  // Dish 4 as it is (the bust makes every reflex-free build lose, so a rule could only turn a loss into a win), and a calm copy of dish 4
  // with no event, where many reflex-free builds win and an always-on rule has something to lose.
  const calm = Object.assign({}, D, { event: { type: 'none', tick: -1, announce: -1, rMult: 0, aMult: 0, depth: 0, dur: 0, bustDeath: 0 } });
  const always = [];
  Cards.actions.forEach(a => { always.push(B.machineRule('food', 'gt', -1, a.id)); });
  always.push(B.machineRule('ttev', 'gt', -1, 'fast'), B.machineRule('share', 'lt', 2, 'fast'), B.machineRule('ttev', 'gt', -1, 'toward'));
  const out = []; let ok = true;
  [['dish 4', D], ['dish 4 without the bust', calm]].forEach(([name, DD]) => {
    const bases = [];
    if (DD === D) data[4].all.filter(r => r.win).slice(0, N).forEach(r => bases.push(Object.assign({}, r.build, { reflex: null })));
    else { let tries = 0; while (bases.length < N && tries++ < 20 * N) { const b = B.randomBuild(D, R); b.reflex = null; if (Sim.play(P, calm, b, { n: SN }).v.win) bases.push(b); } }
    for (let i = 0; i < N; i++) { const b = B.randomBuild(D, R); b.reflex = null; bases.push(b); }
    let pairs = 0, better = 0, worse = 0, sameWin = 0, alwaysOn = 0, baseWins = 0, firstBetter = '';
    always.forEach(rule => bases.forEach(b => {
      const base = Sim.play(P, DD, b, { n: SN }), withR = Sim.play(P, DD, Object.assign({}, b, { reflex: rule }), { n: SN });
      pairs++; if (base.v.win) baseWins++;
      if (withR.H.fires[150] > 0.8) alwaysOn++;
      if (withR.v.win && !base.v.win) { better++; if (!firstBetter) firstBetter = B.label(withR.build); }
      else if (!withR.v.win && base.v.win) worse++;
      else if (withR.v.win && base.v.win) sameWin++;
    }));
    ok = ok && better === 0;
    out.push(name + ': ' + pairs + ' pairs (' + always.length + ' always-on rules x ' + bases.length + ' builds, ' + (baseWins / always.length) + ' builds win without a rule; the rule fired in over 80% of units at tick 150 in ' + alwaysOn + '): the rule turned a loss into a win ' + better + ' times, a win into a loss ' + worse + ' times, kept a win ' + sameWin + ' times' + (better ? '; first: ' + firstBetter : ''));
  });
  result(ok, '6 ALWAYS-ON RULE NEVER BETTER', '\n       ' + out.join('\n       '));
}

// ------------------------------------------------------------------ 7. random legal builds win rarely on dishes 3 and 4
{
  const parts = []; let ok = true;
  [1, 3, 4].forEach(id => {
    const D = Lv.dish(id), R = B.rng(500 + id), N = QUICK ? 300 : 1500; let w = 0;
    for (let i = 0; i < N; i++) if (B.play(D, B.randomBuild(D, R), SN).v.win) w++;
    const rate = w / N;
    if (id !== 1) ok = ok && rate < 0.15;
    parts.push('dish ' + id + (id === 1 ? ' (not part of the check)' : '') + ': ' + w + ' of ' + N + ' (' + pc(rate) + ')');
  });
  result(ok, '7 RANDOM BUILDS RARELY WIN', parts.join(', '));
}

// ------------------------------------------------------------------ 8. deterministic, and every snapshot restores to the same end state
{
  let runs = 0, same = 0, snapsTried = 0, snapsOk = 0, restoreOk = 0;
  function eqArr(a, b) { if (a.length !== b.length) return false; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false; return true; }
  function eqRun(a, b) {
    const s = a._s, t = b._s;
    for (const k of ['N', 'R', 'F', 'WA', 'WB', 'Q', 'FD']) if (!eqArr(s[k], t[k])) return false;
    for (const k of Sim._internal.HK) if (!eqArr(a.H[k], b.H[k])) return false;
    for (const c of Sim.CHAN) if (!eqArr(a.H.susp[c], b.H.susp[c])) return false;
    return true;
  }
  const R = B.rng(88), pool = [];
  DISH_IDS.forEach(id => { for (let i = 0; i < (QUICK ? 3 : 8); i++) pool.push([Lv.dish(id), B.randomBuild(Lv.dish(id), R)]); });
  pool.push([Lv.dish(4), B.build(5, 5, 'respiration', ['wall'], B.bioRef('stringent'))]);
  pool.push([Lv.dish(4), B.build(6, 7, 'respiration', ['wall', 'radio'], B.machineRule('food', 'lt', 0.35, 'pause'))]);
  pool.push([Lv.dish(4), B.build(6, 5, 'fermentation', ['quorum', 'flagellum', 'wall'], B.bioRef('chemotaxis'))]);
  pool.forEach(([D, b], i) => {
    const n = i % 5 === 0 ? 64 : SN;
    const r1 = Sim.play(P, D, b, { n, snapEvery: 10 }), r2 = Sim.play(P, D, b, { n, snapEvery: 10 });
    runs++; if (eqRun(r1, r2)) same++;
    const idxs = [0, 1, Math.floor(r1.snaps.length / 2), r1.snaps.length - 2];
    idxs.forEach(k => {
      if (k < 0 || k >= r1.snaps.length) return;
      snapsTried++; if (eqRun(r1, Sim.resume(r1, k))) snapsOk++;
      const fld = Sim.restore(r1, k); if (fld.robot.length === n * n && eqArr(fld.robot, r1.snaps[k].robot) && fld.tick === r1.snaps[k].tick) restoreOk++;
    });
  });
  result(same === runs && snapsOk === snapsTried && restoreOk === snapsTried, '8 DETERMINISTIC', runs + ' builds run twice: ' + same + ' identical (all fields and every history array, byte for byte); ' + snapsTried + ' snapshot resumes: ' + snapsOk + ' reproduce the same end state and history; restore() returned the stored fields ' + restoreOk + ' of ' + snapsTried + ' times');
}

// ------------------------------------------------------------------ 9. losses have one dominant cause
{
  const parts = []; let ok = true;
  DISH_IDS.forEach(id => {
    const D = Lv.dish(id), R = B.rng(900 + id), N = QUICK ? 300 : 1000; let lost = 0, dom = 0, noText = 0; const causes = {};
    for (let i = 0; i < N; i++) {
      const r = B.play(D, B.randomBuild(D, R), SN); if (r.v.win) continue;
      lost++; const a = Sim.autopsy(r);
      if (!a || !a.text || !(a.to >= a.from) || !a.cause) { noText++; continue; }
      causes[a.cause] = (causes[a.cause] || 0) + 1;
      if (a.dominance >= 0.5) dom++;
    }
    const frac = lost ? dom / lost : 1;
    ok = ok && frac >= 0.9 && noText === 0;
    parts.push('dish ' + id + ': ' + dom + ' of ' + lost + ' losses (' + pc(frac) + ') have a cause holding at least half the blame' + (noText ? ', ' + noText + ' with no text' : '') + ' ' + JSON.stringify(causes));
  });
  result(ok, '9 ONE DOMINANT CAUSE', '\n       ' + parts.join('\n       '));
}

// ------------------------------------------------------------------ 10. speed
{
  const times = [];
  const bs = [B.dflt(), B.build(5, 5, 'respiration', ['wall', 'quorum'], null), B.build(6, 6, 'respiration', ['wall', 'radio', 'errors'], B.bioRef('stringent')), B.build(6, 8, 'respiration', ['wall'], B.machineRule('food', 'lt', 0.35, 'pause'))];
  const D4 = Lv.dish(4);
  const cold0 = Date.now(); Sim.play(P, D4, bs[0], { n: 65, history: false }); const cold = Date.now() - cold0;   // one-off: settles the natives for a new grid size
  let worst = 0, sum = 0, cnt = 0;
  bs.forEach(b => { for (let k = 0; k < 4; k++) { const a = process.hrtime.bigint(); Sim.play(P, D4, b, { n: 64, snapEvery: 10 }); const ms = Number(process.hrtime.bigint() - a) / 1e6; times.push(ms); worst = Math.max(worst, ms); sum += ms; cnt++; } });
  const c64a = Date.now(); Sim.play(P, D4, bs[0], { n: 64, snapEvery: 10 }); // warm check
  result(worst < 100, '10 SPEED', '64x64 full run with history and a snapshot every 10 ticks: mean ' + f(sum / cnt, 0) + ' ms, worst ' + f(worst, 0) + ' ms over ' + cnt + ' runs (limit 100). The one-off native settle for a new grid size costs ' + cold + ' ms and is cached.');
}

// ------------------------------------------------------------------ X. grid agreement (extra)
{
  const parts = []; let all = true;
  DISH_IDS.forEach(id => {
    const w = data[id].all.filter(r => r.win), R = B.rng(1234 + id), pick = [];
    const idx = w.map((_, i) => i); while (pick.length < Math.min(QUICK ? 10 : 30, w.length)) pick.push(w[idx.splice(Math.floor(R() * idx.length), 1)[0]]);
    let still = 0, gap = 0, borderline = 0;
    pick.forEach(r => {
      const o = B.play(data[id].D, r.build, 64);
      if (o.v.win) still++; else if (Math.abs(o.v.bandFrac - data[id].D.band.need) <= 0.05 || Math.abs(r.bandFrac - data[id].D.band.need) <= 0.05) borderline++;
      gap += Math.abs(o.v.finalShare - r.finalShare);
    });
    all = all && still + borderline === pick.length && still / pick.length >= 0.9;
    parts.push('dish ' + id + ': ' + still + ' of ' + pick.length + ' sampled 16x16 winners still win at 64x64' + (borderline ? ' (' + borderline + ' more were within 5 points of the 70% band line)' : '') + ', mean final-share gap ' + f(100 * gap / Math.max(1, pick.length), 1) + ' points');
  });
  result(all, 'X GRID AGREEMENT (extra)', parts.join('; '));
}

console.log('\n' + (10 + 1 - fails) + ' of 11 lines pass (ten properties plus the grid agreement), ' + fails + ' fail. Total ' + ((Date.now() - t0) / 1000).toFixed(0) + ' s.');
process.exit(fails ? 1 : 0);

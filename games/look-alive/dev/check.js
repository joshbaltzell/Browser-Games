// Run: node games/look-alive/dev/check.js         (about 5 to 6 minutes: sweeps every card set against all 81 dial settings, on 16x16)
//      node games/look-alive/dev/check.js quick   (smaller sweeps, for tuning)
// Look Alive, gameplay pass 2: the nine properties of GAMEPLAY-V2 section 7 (P1 to P9), then the earlier properties that still apply (E1 to E6).
// One PASS or FAIL line per property, with numbers.
const Sim = require('../sim.js');
const Lv = require('../levels.js');
const Cards = require('../cards.js');
const B = require('./bots.js');
const P = Lv.PLANET;
const QUICK = process.argv[2] === 'quick';
const SN = 16;            // sweeps run on a 16x16 grid; carry builds and fixes are also run at 64x64
const TOL = 0.05;         // smoothness: one dial step may move the final share by at most 5 points
const DISH_IDS = [1, 2, 3, 4, 5];
const INTENDED = { 1: ['acid'], 2: ['exposed:casualties', 'overgrew'], 3: ['exposed:waste'], 4: ['exposed:regularity'], 5: ['bust'] };
let fails = 0, t0 = Date.now();
const f = (x, d) => x.toFixed(d == null ? 2 : d);
const pc = x => f(x * 100, 1) + '%';
const lap = name => console.log('  [' + ((Date.now() - t0) / 1000).toFixed(0) + 's] ' + name);
function result(pass, tag, msg) { if (!pass) fails++; console.log((pass ? 'PASS ' : 'FAIL ') + tag + ' ' + msg); return pass; }
const peak = r => { let m = 0; for (let t = 0; t <= r.T; t++) if (r.H.share[t] > m) m = r.H.share[t]; return m; };
const cardKey = b => b.metabolism + ':' + b.parts.slice().sort().join('+') + ':' + (b.reflex ? JSON.stringify(b.reflex) : '');
const carryOf = id => Lv.carry(id);
const play = (id, b, n, o) => Sim.play(P, Lv.dish(id), b, Object.assign({ n: n || SN }, o));

console.log('Look Alive checks: dishes ' + DISH_IDS.join(', ') + ', ' + P.ticks + ' ticks, sweep grid ' + SN + 'x' + SN + (QUICK ? ' (quick mode)' : ''));

// ------------------------------------------------------------------ sweeps
const data = {};
DISH_IDS.forEach(id => {
  const D = Lv.dish(id), cfs = B.configs(D), all = [];
  const stride = QUICK ? 4 : (id >= 4 ? 3 : 1);
  const sweepAll = (reflex, cs) => cs.forEach(c => B.dialSweep(D, c, reflex, SN).forEach(r => all.push(r)));
  sweepAll(null, cfs.filter((_, i) => i % stride === 0));
  const noReflexCount = all.length;
  if (D.reflexSlot) {
    const prot = c => c.parts.indexOf('pump') >= 0 || c.parts.indexOf('shell') >= 0;   // anything else is dissolved before the bust matters
    const sub = cfs.filter((c, i) => prot(c) && i % (QUICK ? 6 : 5) === 0);
    D.allowed.bio.forEach(rid => sweepAll(B.bioRef(rid), sub));
    const score = {}; all.forEach(r => { if (r.win && r.build.reflex) { const k = r.build.metabolism + ':' + r.build.parts.join(','); score[k] = (score[k] || 0) + 1; } });
    const sets = {}; Object.keys(score).sort((a, b) => score[b] - score[a]).slice(0, QUICK ? 3 : 6).forEach(k => { sets[k] = 1; });
    ['pump', 'pump,wall', 'pump,errors', 'pump,repair'].forEach(ps => { sets['fermentation:' + ps] = 1; });
    const rsub = Object.keys(sets).map(k => { const [m, ps] = k.split(':'); return { metabolism: m, parts: ps ? ps.split(',') : [] }; });
    const rules = B.allRules(D), R = B.rng(31), pick = [];
    rules.forEach(rl => { if (rl.action === 'pause' || R() < (QUICK ? 0.04 : 0.05)) pick.push(rl); });
    pick.forEach(rl => rsub.forEach(c => {
      for (let p = 4; p <= 8; p += 2) for (let s = 4; s <= 8; s += 2) {
        const b = B.build(p, s, c.metabolism, c.parts, rl), r = B.sum(B.play(D, b, SN)); r.build = b; r.key = B.key(b); all.push(r);
      }
    }));
  }
  data[id] = { D, cfs, all, noReflexCount };
  lap('dish ' + id + ': ' + all.length + ' runs, ' + all.filter(r => r.win).length + ' wins');
});

// ------------------------------------------------------------------ P1. the carried-over build loses, the autopsy names the dish's problem, and it is visible in time
const carryRuns = {};
{
  const lines = []; let ok = true;
  DISH_IDS.forEach(id => {
    const c = carryOf(id), parts = [];
    [SN, 64].forEach(n => {
      const r = play(id, c, n), a = Sim.autopsy(r), ft = r.v.win ? -1 : B.failTick(r, a), limit = id === 1 ? 30 : 100;
      if (n === SN) carryRuns[id] = { r, a };
      const good = !r.v.win && a && INTENDED[id].indexOf(a.cause) >= 0 && ft > 0 && ft <= limit;
      ok = ok && good;
      parts.push(n + 'x' + n + ': ' + (r.v.win ? 'WON' : 'lost') + ', cause ' + (a ? a.cause : '-') + (a && INTENDED[id].indexOf(a.cause) >= 0 ? '' : ' (expected ' + INTENDED[id].join(' or ') + ')') + ', visible at tick ' + ft + ' (limit ' + limit + ')' + (n === 64 ? '' : ' | "' + (a ? a.text : '') + '"'));
    });
    lines.push('dish ' + id + ' [' + B.label(c) + ']: ' + parts.join(' ; '));
  });
  result(ok, 'P1 CARRIED BUILD LOSES, AUTOPSY NAMES THE PROBLEM, FAILS IN TIME', '\n       ' + lines.join('\n       '));
}

// ------------------------------------------------------------------ P2. each intended fix, applied alone to the carried-over build, wins
const fixWins = {};
{
  const lines = []; let ok = true;
  DISH_IDS.forEach(id => {
    const D = Lv.dish(id), c = carryOf(id), parts = [];
    D.fixes.forEach(fx => {
      const b = B.fixed(c, fx), v = Sim.validate(D, b), r16 = play(id, b, SN), r64 = play(id, b, 64);
      const good = v.ok && r16.v.win && r64.v.win;
      if (!fx.heavy) ok = ok && good;
      fixWins[id + ':' + fx.id] = good;
      parts.push(fx.id + (fx.heavy ? ' (heavy, more than two changes)' : '') + ': ' + (v.ok ? '' : 'ILLEGAL ' + v.problems.join(' ') + ' ') + '16x16 ' + (r16.v.win ? 'win' : 'LOSE') + ' (band ' + pc(r16.v.bandFrac) + ', peak stage ' + r16.v.maxStage + '), 64x64 ' + (r64.v.win ? 'win' : 'LOSE') + ' (band ' + pc(r64.v.bandFrac) + ')');
    });
    lines.push('dish ' + id + ': ' + parts.join(' | '));
  });
  result(ok, 'P2 EACH INTENDED FIX WINS', '\n       ' + lines.join('\n       '));
}

// ------------------------------------------------------------------ P3. at least two different builds win
const otherWin = {};
{
  const lines = []; let ok = true;
  DISH_IDS.forEach(id => {
    const D = Lv.dish(id), c = carryOf(id), w = data[id].all.filter(r => r.win);
    const known = {}; D.fixes.forEach(fx => { known[cardKey(B.fixed(c, fx))] = 1; });
    const sets = {}; w.forEach(r => { sets[cardKey(r.build)] = (sets[cardKey(r.build)] || 0) + 1; });
    const nSets = Object.keys(sets).length, fixCount = D.fixes.filter(fx => fixWins[id + ':' + fx.id]).length;
    const others = w.filter(r => !known[cardKey(r.build)]).sort((a, b) => (b.bandFrac - a.bandFrac) || (a.build.parts.length - b.build.parts.length));
    otherWin[id] = others[0] || null;
    const good = nSets >= 2 && w.length >= 2;
    ok = ok && good;
    lines.push('dish ' + id + ': ' + w.length + ' winning runs in ' + nSets + ' different card sets (' + fixCount + ' winning intended fixes). Other winner: ' + (others[0] ? B.label(others[0].build) : 'none'));
  });
  result(ok, 'P3 AT LEAST TWO DIFFERENT BUILDS WIN', '\n       ' + lines.join('\n       '));
}

// ------------------------------------------------------------------ P4. every tip's level-2 card or control is in a winning build for that loss cause
{
  const lines = []; let ok = true;
  function nameOf(fx) {
    const c = fx.changes, n = [];
    (c.add || []).forEach(id => n.push(Cards.part(id).name));
    (c.remove || []).forEach(id => n.push(Cards.part(id).name));
    if (c.set) { if (c.set.pace != null) n.push('Pace'); if (c.set.slop != null) n.push('Sloppiness'); if (c.set.metabolism) n.push(Cards.part(c.set.metabolism).name); }
    if (c.reflex) n.push(c.reflex.kind === 'bio' ? Cards.bio(c.reflex.id).name : 'rule');
    return n;
  }
  DISH_IDS.forEach(id => {
    const D = Lv.dish(id), c = carryOf(id), parts = [], untested = [];
    Object.keys(D.tips).forEach(cause => {
      const t = D.tips[cause], refs = D.tipFixes[cause];
      if (t.length !== 2 || !t[0] || !t[1]) { ok = false; parts.push(cause + ': tip text missing'); return; }
      if (!refs) { untested.push(cause); return; }
      refs.forEach(rid => {
        const fx = D.fixes.find(x => x.id === rid), b = B.fixed(c, fx), r = play(id, b, SN);
        const named = nameOf(fx).every(nm => t[1].indexOf(nm) >= 0 || (nm === 'rule' && /rule/i.test(t[1])));
        const good = r.v.win && named && !fx.heavy;
        ok = ok && good;
        parts.push(cause + ' -> ' + rid + ': ' + (r.v.win ? 'wins' : 'LOSES') + (named ? ', named in the tip' : ', NOT NAMED in the tip'));
      });
    });
    lines.push('dish ' + id + ': ' + parts.join(' ; ') + (untested.length ? ' ; tips with no card or control to test: ' + untested.join(', ') : ''));
  });
  result(ok, 'P4 TIP LEVEL 2 NAMES A WINNING CARD OR CONTROL', '\n       ' + lines.join('\n       '));
}

// ------------------------------------------------------------------ P5. dish 1: full acid protection survives, none dies by tick 30
{
  const D = Lv.dish(1), all = data[1].all;
  const prot = r => r.build.parts.indexOf('pump') >= 0 || r.build.parts.indexOf('shell') >= 0;
  const none = r => !r.build.parts.some(id => Cards.part(id).fx.acid);
  // none: dies by tick 30 (re-run to read the extinction tick); full: every dial setting survives; lipids alone: survives but loses ground
  const full = all.filter(prot), nop = [];
  B.configs(D).filter(c => !c.parts.some(id => Cards.part(id).fx.acid)).forEach(c => { for (let p = 0; p <= 8; p += 2) { const r = B.play(D, B.build(p, 0, c.metabolism, c.parts), SN); nop.push(r); } });
  let worstDie = 0, died = 0;
  nop.forEach(r => { let td = -1; for (let t = 1; t <= r.T; t++) if (r.H.rob[t] <= P.extinct) { td = t; break; } if (td > 0 && td <= 30) died++; if (td > worstDie) worstDie = td; });
  const fullAlive = full.filter(r => r.alive).length;
  const lip = B.play(D, B.build(4, 0, 'respiration', ['clock', 'lipids']), SN), nm = B.play(D, B.dflt(), SN);
  let tdef = -1; for (let t = 1; t <= nm.T; t++) if (nm.H.rob[t] <= P.extinct) { tdef = t; break; }
  const rel = (r, t) => f(r.H.rob[t] / r.H.rob[0], 2);
  const good = fullAlive === full.length && died === nop.length;
  result(good, 'P5 DISH 1 ACID', full.length + ' runs with a Proton pump or Sealed shell (every legal card set, every dial): ' + fullAlive + ' survive. ' + nop.length + ' runs with no protection (every card set, pace 0 to 8): ' + died + ' dead by tick 30 (latest at tick ' + worstDie + '). Factory unit: robots at 50% by tick ' + nm.H.rob.findIndex((x, i) => i > 0 && x < 0.5 * nm.H.rob[0]) + ', extinct at tick ' + tdef + '. Tight membrane alone: survives (' + (lip.v.win ? 'yes' : 'NO') + '), colony at ' + rel(lip, 30) + ' of its start by tick 30 and ' + rel(lip, 300) + ' at the end');
}

// ------------------------------------------------------------------ P6. dish 2: the default overgrows, Pace 2 or lower or Quorum holds the band
{
  const D = Lv.dish(2), c = carryOf(2);
  const def = B.play(D, Object.assign({}, c, { pace: 4 }), SN), defA = Sim.autopsy(def);
  const lone = Object.assign({}, D, { suspicion: false }), unchecked = Sim.play(P, lone, Object.assign({}, c, { pace: 4 }), { n: SN });
  const pDef = peak(def), pFree = peak(unchecked);
  const holds = [0, 1, 2].map(p => { const r = B.play(D, Object.assign({}, c, { pace: p }), SN); return { p, win: r.v.win, band: r.v.bandFrac, pk: peak(r) }; });
  const q = B.play(D, B.build(4, 0, 'respiration', ['clock', 'pump', 'quorum']), SN), rad = B.play(D, B.build(4, 0, 'respiration', ['clock', 'pump', 'radio']), SN);
  const ftk = B.failTick(def, defA), overBand = pDef > D.band.hi + 0.02 && !def.v.win && ftk > 0 && ftk <= 100;
  const over30 = pDef > 0.30;
  const holdOk = holds.every(h => h.win) && q.v.win;
  result(overBand && holdOk, 'P6 DISH 2 ABUNDANCE (default floods the dish; Pace 0 to 2 or Quorum holds the band)', 'default Pace 4: ' + (def.v.win ? 'WON' : 'lost') + ', share peaks at ' + pc(pDef) + ' with the lab (ceiling ' + pc(D.band.hi) + '), peak stage ' + def.v.maxStage + ' (exposed at tick ' + def.v.exposedAt + '), plainly over the band by tick ' + ftk + '; with the lab switched off it would sit at ' + pc(pFree) + '. Pace 0/1/2: ' + holds.map(h => (h.win ? 'win' : 'LOSE') + ' (peak ' + pc(h.pk) + ', in band ' + pc(h.band) + ')').join(', ') + '. Quorum signal at Pace 4: ' + (q.v.win ? 'wins' : 'LOSES') + ' (peak ' + pc(peak(q)) + '). Radio mesh at Pace 4: ' + (rad.v.win ? 'wins' : 'loses') + '.');
  result(over30, 'P6b DISH 2: DEFAULT PASSES 30% SHARE (the spec figure)', 'peak ' + pc(pDef) + ' with the lab, ' + pc(pFree) + ' without it. ' + (over30 ? '' : 'Not met: in this model a window where Pace 0 to 2 holds the band and the default floods is a trade-off (see RULES.md, "What did not pass"). The default does pass the band ceiling clearly and is plainly over the band by tick ' + ftk + '.'));
}

// ------------------------------------------------------------------ P7. dial smoothness for every winning build (dishes 2 to 5; dish 1 has no band and is reported)
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
    if (id !== 1) ok = ok && bad === 0;
    parts.push('dish ' + id + (id === 1 ? ' (info only, no band)' : '') + ': ' + winners + ' winners, ' + checked + ' neighbour steps, worst share change ' + f(worstShare * 100, 1) + ' points, worst stage change ' + worstStage + '; ' + bad + ' winners break the rule (' + badShare + ' share steps, ' + badStage + ' stage steps)' + (bad ? ' e.g. ' + worstAt : ''));
  });
  result(ok, 'P7 DIAL SMOOTHNESS (5 points, 1 stage)', '\n       ' + parts.join('\n       '));
}

// ------------------------------------------------------------------ P8. dish 5 still needs a reflex
const d5 = data[5];
{
  const none = d5.all.slice(0, d5.noReflexCount), noneWins = none.filter(r => r.win);
  const bioWin = d5.all.filter(r => r.win && r.build.reflex && r.build.reflex.kind === 'bio');
  const macWin = d5.all.filter(r => r.win && r.build.reflex && r.build.reflex.kind === 'machine');
  const byBio = {}; bioWin.forEach(r => { byBio[r.build.reflex.id] = (byBio[r.build.reflex.id] || 0) + 1; });
  const good = noneWins.length === 0 && bioWin.length > 0;
  result(good, 'P8 DISH 5 NEEDS A REFLEX', none.length + ' reflex-free builds (card sets x all 81 dials): ' + noneWins.length + ' win. Biology reflexes: ' + bioWin.length + ' winning runs ' + JSON.stringify(byBio) + '. Machine rules: ' + macWin.length + ' winning runs, ' + new Set(macWin.map(r => Cards.ruleText(r.build.reflex))).size + ' different rules' + (macWin[0] ? ' (e.g. ' + B.label(macWin[0].build) + ')' : ''));
}

// ------------------------------------------------------------------ P9. deterministic, snapshots restore, 64x64 under 100 ms
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
  DISH_IDS.forEach(id => { for (let i = 0; i < (QUICK ? 2 : 5); i++) pool.push([Lv.dish(id), B.randomBuild(Lv.dish(id), R)]); pool.push([Lv.dish(id), carryOf(id)]); });
  pool.push([Lv.dish(5), B.build(5, 5, 'fermentation', ['pump', 'wall'], B.bioRef('stringent'))]);
  pool.push([Lv.dish(5), B.build(6, 7, 'fermentation', ['pump', 'radio'], B.machineRule('food', 'lt', 0.35, 'pause'))]);
  pool.push([Lv.dish(2), B.build(4, 0, 'respiration', ['clock', 'pump', 'quorum'])]);
  pool.forEach(([D, b], i) => {
    const n = i % 5 === 0 ? 64 : SN;
    const r1 = Sim.play(P, D, b, { n, snapEvery: 10 }), r2 = Sim.play(P, D, b, { n, snapEvery: 10 });
    runs++; if (eqRun(r1, r2)) same++;
    [0, 1, Math.floor(r1.snaps.length / 2), r1.snaps.length - 2].forEach(k => {
      if (k < 0 || k >= r1.snaps.length) return;
      snapsTried++; if (eqRun(r1, Sim.resume(r1, k))) snapsOk++;
      const fld = Sim.restore(r1, k); if (fld.robot.length === n * n && eqArr(fld.robot, r1.snaps[k].robot) && fld.tick === r1.snaps[k].tick) restoreOk++;
    });
  });
  const times = []; let worst = 0, sum = 0, worstAt = '';
  DISH_IDS.forEach(id => { Sim.play(P, Lv.dish(id), carryOf(id), { n: 64, history: false }); });   // settle the 64x64 natives once
  const bs = [['carry', id => carryOf(id)], ['rich', id => B.build(6, 6, 'fermentation', ['pump', 'quorum', 'errors'], id === 5 ? B.bioRef('sos') : null)]];
  let cold = 0;
  DISH_IDS.forEach(id => bs.forEach(([nm, mk]) => { for (let k = 0; k < 4; k++) {
    const b = mk(id), a = process.hrtime.bigint(); Sim.play(P, Lv.dish(id), b, { n: 64, snapEvery: 10 });
    const ms = Number(process.hrtime.bigint() - a) / 1e6;
    if (k === 0) { if (ms > cold) cold = ms; continue; }     // the first run of a new build pays the JIT; reported, not timed
    times.push(ms); sum += ms; if (ms > worst) { worst = ms; worstAt = 'dish ' + id + ' ' + nm; }
  } }));
  result(same === runs && snapsOk === snapsTried && restoreOk === snapsTried && worst < 100, 'P9 DETERMINISTIC AND FAST', runs + ' builds run twice: ' + same + ' identical (all fields and every history array, byte for byte); ' + snapsTried + ' snapshot resumes: ' + snapsOk + ' reproduce the end state; restore() matched ' + restoreOk + '. 64x64 full run with history and a snapshot every 10 ticks: mean ' + f(sum / times.length, 0) + ' ms, worst ' + f(worst, 0) + ' ms (' + worstAt + ') over ' + times.length + ' warm runs (limit 100); the first run of a build can take up to ' + f(cold, 0) + ' ms while the JIT warms up');
}

// ------------------------------------------------------------------ E1. both shelves viable on dishes 4 and 5
{
  const parts = []; let ok = true;
  [4, 5].forEach(id => {
    const w = data[id].all.filter(r => r.win);
    const bio = w.filter(r => B.isBioBuild(r.build)), mach = w.filter(r => B.isMachineBuild(r.build));
    const one = mach.filter(r => { const m = r.build.parts.filter(x => B.shelfOf(x) === 'machine').length + (B.shelfOf(r.build.metabolism) === 'machine' ? 1 : 0) + (r.build.reflex && r.build.reflex.kind === 'machine' ? 1 : 0); return m >= 1 && m <= 2; });
    const pick = list => list.slice().sort((a, b) => (b.bandFrac - a.bandFrac) || (a.build.parts.length - b.build.parts.length))[0];
    const eb = pick(bio), em = pick(one.length ? one : mach);
    ok = ok && bio.length > 0 && mach.length > 0;
    parts.push('dish ' + id + ': ' + bio.length + ' all-Biology winners, ' + mach.length + ' winners using a Machine card (' + one.length + ' with only one or two). Biology example: ' + (eb ? B.label(eb.build) : 'none') + '. Machine example: ' + (em ? B.label(em.build) : 'none'));
  });
  result(ok, 'E1 BOTH SHELVES VIABLE (dishes 4, 5)', '\n       ' + parts.join('\n       '));
}

// ------------------------------------------------------------------ E2. the all-Machine build loses through Regularity on dishes 4 and 5
{
  const parts = []; let ok = true;
  [4, 5].forEach(id => {
    const D = Lv.dish(id), mach = D.allowed.parts.filter(x => B.shelfOf(x) === 'machine'), met = D.allowed.metabolism.filter(x => B.shelfOf(x) === 'machine')[0];
    const k = Math.min(D.partSlots, mach.length), stacks = [];
    (function rec(i, ch) {
      if (ch.length === k) { const e = ch.reduce((a, x) => a + Cards.part(x).energy, Cards.part(met).energy); if (e <= D.energy) stacks.push(ch.slice()); return; }
      for (let j = i; j < mach.length; j++) { ch.push(mach[j]); rec(j + 1, ch); ch.pop(); }
    })(0, []);
    let n = 0, wins = 0, exposed = 0, regLead = 0, regCard = 0;
    stacks.forEach(st => {
      for (let p = 0; p <= 8; p += (QUICK ? 2 : 1)) for (let s = 0; s <= 8; s += (QUICK ? 2 : 1)) {
        const r = B.play(D, B.build(p, s, met, st, null), SN); n++;
        if (r.v.win) { wins++; continue; }
        const a = Sim.autopsy(r);
        if (a.cause.indexOf('exposed') === 0) { exposed++; if (a.channel === 3) regLead++; }
      }
    });
    ok = ok && wins === 0 && exposed > 0 && regLead / exposed >= 0.8;
    parts.push('dish ' + id + ' [' + met + ' + ' + stacks.length + ' maximal Machine stacks]: ' + n + ' dial settings, ' + wins + ' wins, ' + exposed + ' exposed (' + pc(exposed / n) + '), ' + regLead + ' of those led by Regularity (' + pc(exposed ? regLead / exposed : 0) + ')');
  });
  result(ok, 'E2 ALL-MACHINE LOSES THROUGH REGULARITY (dishes 4, 5)', '\n       ' + parts.join('\n       '));
}

// ------------------------------------------------------------------ E3. an always-on machine rule is never better than the same build without it
{
  const D = Lv.dish(5), R = B.rng(77), N = QUICK ? 100 : 200;
  const calm = Object.assign({}, D, { event: { type: 'none', tick: -1, announce: -1, rMult: 0, aMult: 0, depth: 0, dur: 0, bustDeath: 0 } });
  const always = [];
  Cards.actions.forEach(a => { always.push(B.machineRule('food', 'gt', -1, a.id)); });
  always.push(B.machineRule('ttev', 'gt', -1, 'fast'), B.machineRule('share', 'lt', 2, 'fast'), B.machineRule('density', 'lt', 0.2, 'pause'), B.machineRule('native', 'lt', 1.2, 'pause'));
  const out = []; let ok = true;
  [['dish 5', D], ['dish 5 without the bust', calm]].forEach(([name, DD]) => {
    const bases = [], pro = b => { b.parts = ['pump'].concat(b.parts.filter(x => x !== 'pump' && x !== 'lipids' && x !== 'shell')).slice(0, 3); return b; };
    if (DD === D) data[5].all.filter(r => r.win).slice(0, N).forEach(r => bases.push(Object.assign({}, r.build, { reflex: null })));
    else { let tries = 0; while (bases.length < N && tries++ < 20 * N) { const b = pro(B.randomBuild(D, R)); b.reflex = null; if (Sim.validate(D, b).ok && Sim.play(P, calm, b, { n: SN }).v.win) bases.push(b); } }
    for (let i = 0; i < N; i++) { const b = pro(B.randomBuild(D, R)); b.reflex = null; if (Sim.validate(D, b).ok) bases.push(b); }
    let pairs = 0, better = 0, worse = 0, sameWin = 0, alwaysOn = 0, baseWins = 0, first = '';
    always.forEach(rule => bases.forEach(b => {
      const base = Sim.play(P, DD, b, { n: SN }), withR = Sim.play(P, DD, Object.assign({}, b, { reflex: rule }), { n: SN });
      pairs++; if (base.v.win) baseWins++;
      if (withR.H.fires[150] > 0.8) alwaysOn++;
      if (withR.v.win && !base.v.win) { better++; if (!first) first = B.label(withR.build); }
      else if (!withR.v.win && base.v.win) worse++;
      else if (withR.v.win && base.v.win) sameWin++;
    }));
    ok = ok && better === 0;
    out.push(name + ': ' + pairs + ' pairs (' + always.length + ' always-on rules x ' + bases.length + ' builds, ' + (baseWins / always.length) + ' builds win without a rule): the rule turned a loss into a win ' + better + ' times, a win into a loss ' + worse + ' times, kept a win ' + sameWin + ' times' + (better ? '; first: ' + first : ''));
  });
  result(ok, 'E3 ALWAYS-ON RULE NEVER BETTER', '\n       ' + out.join('\n       '));
}

// ------------------------------------------------------------------ E4. 90% of losses have one dominant cause
{
  const parts = []; let ok = true;
  DISH_IDS.forEach(id => {
    const D = Lv.dish(id), R = B.rng(900 + id), N = QUICK ? 300 : 600; let lost = 0, dom = 0, noText = 0; const causes = {};
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
  result(ok, 'E4 ONE DOMINANT CAUSE', '\n       ' + parts.join('\n       '));
}

// ------------------------------------------------------------------ E5. channels that are off contribute nothing and report as off
{
  const lines = []; let ok = true;
  const expect = { 1: [], 2: ['casualties'], 3: ['casualties', 'waste'], 4: ['casualties', 'waste', 'regularity'], 5: ['growth', 'waste', 'casualties', 'regularity'] };
  DISH_IDS.forEach(id => {
    const r = play(id, carryOf(id), SN), on = r.channels, listed = Sim.CHAN.filter(c => on[c]);
    let leak = 0;
    Sim.CHAN.forEach(c => { if (!on[c]) for (let t = 0; t <= r.T; t++) if (r.H.susp[c][t] !== 0) leak++; });
    let totalS = 0; for (let t = 0; t <= r.T; t++) totalS += r.H.total[t];
    const good = JSON.stringify(listed.slice().sort()) === JSON.stringify(expect[id].slice().sort()) && leak === 0 && (id !== 1 || totalS === 0);
    ok = ok && good;
    lines.push('dish ' + id + ': channels on ' + JSON.stringify(listed) + ', ' + leak + ' non-zero ticks in off channels' + (id === 1 ? ', total suspicion ' + totalS : ''));
  });
  const p = Sim.predict(Lv.dish(1), carryOf(1)); const okp = !p.chips.some(c => /suspicion|Regularity|Waste (up|differs|matches)|No waste/i.test(c.text)) && p.channels.regularity === false;
  ok = ok && okp;
  result(ok, 'E5 CHANNELS OFF ARE OFF', lines.join('; ') + '; predict() on dish 1 mentions no suspicion chips: ' + okp);
}

// ------------------------------------------------------------------ E6. 16x16 sweeps agree with 64x64 (sampled winners)
{
  const parts = []; let all = true;
  DISH_IDS.forEach(id => {
    const w = data[id].all.filter(r => r.win), R = B.rng(1234 + id), pick = [];
    const idx = w.map((_, i) => i); while (pick.length < Math.min(QUICK ? 8 : 24, w.length)) pick.push(w[idx.splice(Math.floor(R() * idx.length), 1)[0]]);
    let still = 0, gap = 0, borderline = 0;
    pick.forEach(r => {
      const o = B.play(data[id].D, r.build, 64);
      if (o.v.win) still++; else if (Math.abs(o.v.bandFrac - data[id].D.band.need) <= 0.05 || Math.abs(r.bandFrac - data[id].D.band.need) <= 0.05 || data[id].D.aliveOnly || r.peakS >= 6.5) borderline++;   // borderline: within 5 points of the band line, or within 1.5 of the stage 3 line (S 8)
      gap += Math.abs(o.v.finalShare - r.finalShare);
    });
    all = all && still + borderline === pick.length && still / Math.max(1, pick.length) >= 0.85;
    parts.push('dish ' + id + ': ' + still + ' of ' + pick.length + ' sampled 16x16 winners still win at 64x64' + (borderline ? ' (' + borderline + ' more were borderline: within 5 points of the band line, or peak S within 1.5 of the stage 3 line)' : '') + ', mean final-share gap ' + f(100 * gap / Math.max(1, pick.length), 1) + ' points');
  });
  result(all, 'E6 GRID AGREEMENT', parts.join('; '));
}

// ------------------------------------------------------------------ E7. a player who carried the Sealed shell into dish 4 can still win by swapping it for a Biology protection
{
  const D = Lv.dish(4), shellCarry = Object.assign({}, carryOf(4), { parts: ['clock', 'shell'] });
  const base = play(4, shellCarry, SN), a = Sim.autopsy(base);
  const swap = b => Object.assign({}, b, { parts: b.parts.map(x => x === 'shell' ? 'pump' : x) });
  const tries = [
    ['swap shell for pump, remove the clock', swap(B.fixed(shellCarry, D.fixes.find(x => x.id === 'noclock')))],
    ['swap shell for pump, Sloppiness 4', swap(B.fixed(shellCarry, D.fixes.find(x => x.id === 'slop')))],
    ['swap shell for pump, add Copying errors', swap(B.fixed(shellCarry, D.fixes.find(x => x.id === 'errors')))]
  ].map(([nm, b]) => ({ nm, ok: Sim.validate(D, b).ok, win: play(4, b, SN).v.win && play(4, b, 64).v.win }));
  result(!base.v.win && a.cause === 'exposed:regularity' && tries.every(t => t.ok && t.win), 'E7 SHELL CARRIED INTO DISH 4 IS RECOVERABLE', 'shell build loses (' + a.cause + ', exposed at tick ' + base.v.exposedAt + '); ' + tries.map(t => t.nm + ': ' + (t.win ? 'wins' : 'LOSES')).join('; '));
}

const total = 17;
console.log('\n' + (total - fails) + ' of ' + total + ' lines pass, ' + fails + ' fail. Total ' + ((Date.now() - t0) / 1000).toFixed(0) + ' s.');
process.exit(fails ? 1 : 0);

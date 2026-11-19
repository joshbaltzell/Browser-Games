// Look Alive checks for the exam dishes 6 to 10 (GAMEPLAY-V2 section 14) and the trade-off reporting. Loaded by dev/check.js (it needs the legacy sweeps' results for X8).
// Sampling, to keep the whole run under about eight minutes (all runs 16x16 unless a line says 64x64):
//   dishes 6 and 9: every second card set, Pace 0 to 8 x Sloppiness 0, 2, 4, 6, 8 (45 dial settings);
//   dish 7: every card set that fits energy 2, all 81 dial settings, each with no reflex and the three Biology reflexes;
//   dishes 8 and 10: every fourth card set, 45 dial settings, with no reflex, Stringent, Sporulate and SOS (machine rules are not swept: not tested on these dishes).
module.exports = function (E) {
  const { Sim, Lv, Cards, B, P, QUICK, SN, outcomes, result, f, pc, play, carryOf } = E;
  const EXAM = [6, 7, 8, 9, 10];
  const R = B.rng(4242);
  const bioRefs = [null, B.bioRef('stringent'), B.bioRef('sporulate'), B.bioRef('sos')];
  const sig = b => { const sl = Sim.toSlots(b), k = []; ['power', 'envelope', 'insides', 'division', 'signal', 'reflex'].forEach(s => { const v = sl[s]; if (v && (!Array.isArray(v) || v.length)) k.push(s + '=' + (Array.isArray(v) ? v.join('+') : (v.id || v))); }); return k.join(' '); };
  const slotsUsed = b => sig(b).split(' ').map(x => x.split('=')[0]).filter(x => x !== 'power').join(',');
  const words = b => {
    const sl = Sim.toSlots(b), nm = id => (Cards.part(id) || Cards.bio(id)).name, o = [];
    o.push('Pace ' + b.pace + ', Sloppiness ' + b.slop, nm(b.metabolism));
    if (sl.envelope.length) o.push('Envelope: ' + sl.envelope.map(nm).join(' + '));
    ['insides', 'division', 'signal'].forEach(k => { if (sl[k]) o.push(k[0].toUpperCase() + k.slice(1) + ': ' + nm(sl[k])); });
    if (sl.reflex) o.push('Reflex: ' + (sl.reflex.kind === 'bio' ? nm(sl.reflex.id) : 'rule'));
    return o.join('; ');
  };
  E.words = words;
  const t0 = Date.now(), lap = nm => console.log('  [exam ' + ((Date.now() - t0) / 1000).toFixed(0) + 's] ' + nm);
  const dialGrid = [], dialsFull = [];
  for (let p = 0; p <= 8; p++) for (let s = 0; s <= 8; s++) { dialsFull.push([p, s]); if (s % 2 === 0) dialGrid.push([p, s]); }
  const sweepDish = (D, cfgs, dials, reflexes) => {
    const out = [];
    cfgs.forEach(c => reflexes.forEach(rf => dials.forEach(([p, s]) => { const b = B.build(p, s, c.metabolism, c.parts, rf), r = B.sum(B.play(D, b, SN)); r.build = b; r.key = B.key(b); out.push(r); })));
    return out;
  };
  console.log('\nExam dishes 6 to 10 (sampled sweeps, 16x16):');
  const X = {};
  EXAM.forEach(id => {
    const D = Lv.dish(id), all = B.configs(D), crashDish = D.event && D.event.tick > 0;
    const stride = id === 7 ? 1 : crashDish ? (QUICK ? 8 : 4) : (QUICK ? 4 : 2);
    const cfgs = all.filter((_, i) => i % stride === 0);
    const rs = sweepDish(D, cfgs, id === 7 ? dialsFull : dialGrid, crashDish ? bioRefs : [null]);
    X[id] = { D, rs, wins: rs.filter(r => r.win), cfgs: cfgs.length, all: all.length };
    lap('dish ' + id + ': ' + rs.length + ' runs (' + cfgs.length + ' of ' + all.length + ' card sets), ' + X[id].wins.length + ' wins');
  });
  const diffSigs = ws => { const m = {}; ws.forEach(r => { const k = slotsUsed(r.build); m[k] = (m[k] || 0) + 1; }); return m; };

  // ---------------------------------------------------------------- X1 standard cell
  {
    const lines = []; let ok = true;
    EXAM.forEach(id => {
      const D = Lv.dish(id), b = Lv.standard(id), v = Sim.validate(D, b), r16 = play(id, b, SN), r64 = play(id, b, 64), a = Sim.autopsy(r16), st = Sim.stats(D, b);
      const bad = st.filter(s => s.checked && s.state !== 'safe'), explains = a && bad.some(s => s.id === a.stat);
      ok = ok && v.ok && !r16.v.win && !r64.v.win && explains;
      lines.push('dish ' + id + ' [' + words(b) + ']: ' + (v.ok ? 'legal' : 'ILLEGAL ' + v.problems.join(' ')) + ', 16x16 ' + (r16.v.win ? 'WON' : 'lost') + ', 64x64 ' + (r64.v.win ? 'WON' : 'lost') + ', autopsy stat ' + (a ? a.stat : '-') + ' (' + (a ? a.cause : '') + '), out of zone: ' + (bad.map(s => s.name + ' ' + s.state).join(', ') || 'none') + (explains ? '' : ' NOT EXPLAINED'));
    });
    result(ok, 'X1 STANDARD CELL IS LEGAL AND LOSES, AND THE STATS SHOW WHY', '\n       ' + lines.join('\n       '));
  }

  // ---------------------------------------------------------------- X2 three winning builds, two slot patterns
  const examples = {};
  {
    const lines = []; let ok = true;
    EXAM.forEach(id => {
      const x = X[id], D = x.D, ws = x.wins.filter(r => r.alive).slice();
      const sigs = diffSigs(ws);
      // best winner per slot pattern, then confirm on 64x64 and take the first three that hold
      const best = {}; ws.forEach(r => { const k = slotsUsed(r.build); if (!best[k] || r.bandFrac > best[k].bandFrac || (r.bandFrac === best[k].bandFrac && r.peakS < best[k].peakS)) best[k] = r; });
      const picks = []; const tried = {};
      const confirm = r => { const k = r.key; if (tried[k]) return; tried[k] = 1; if (Sim.validate(D, r.build).ok && B.play(D, r.build, 64).v.win) picks.push(r); };
      Object.keys(best).sort((a, b) => best[b].bandFrac - best[a].bandFrac || best[a].peakS - best[b].peakS).forEach(k => { if (picks.length < 3) confirm(best[k]); });
      ws.slice().sort((a, b) => b.bandFrac - a.bandFrac || a.peakS - b.peakS).forEach(r => { if (picks.length < 3) confirm(r); });
      examples[id] = picks;
      const nSig = new Set(picks.map(r => slotsUsed(r.build))).size;
      const good = ws.length >= 3 && Object.keys(sigs).length >= 2 && picks.length === 3 && nSig >= 2;
      ok = ok && good;
      lines.push('dish ' + id + ': ' + ws.length + ' winning builds in the sample (' + pc(ws.length / x.rs.length) + ' of ' + x.rs.length + ' runs), ' + Object.keys(sigs).length + ' different slot patterns; three confirmed at 64x64 with ' + nSig + ' slot patterns: ' + picks.map(r => '[' + words(r.build) + ']').join(' | '));
    });
    result(ok, 'X2 AT LEAST THREE WINNING BUILDS, TWO USING DIFFERENT SLOTS', '\n       ' + lines.join('\n       '));
  }

  // ---------------------------------------------------------------- X3 no single build wins all five
  {
    // Any build that wins all five is legal on dish 7 (energy 2): try every one of them (all card sets, all 81 dial settings, four reflex choices) on the other four dishes.
    const D7 = Lv.dish(7), cands = {}; let tried = 0, w7 = 0;
    X[7].wins.forEach(r => { w7++; bioRefs.forEach(rf => { const b = Object.assign({}, r.build, { reflex: rf }); cands[B.key(b)] = b; }); });
    let all5 = 0, most = 0, mostB = null; const count = {};
    Object.keys(cands).forEach(k => {
      const b = cands[k]; tried++; let n = 1;
      [6, 8, 9, 10].forEach(id => { const D = Lv.dish(id); if (Sim.validate(D, b).ok && B.play(D, b, SN).v.win) { n++; count[id] = (count[id] || 0) + 1; } });
      if (n === 5) all5++; if (n > most) { most = n; mostB = b; }
    });
    result(all5 === 0, 'X3 NO SINGLE BUILD WINS ALL FIVE EXAM DISHES', w7 + ' winners on dish 7 (16x16, all card sets that fit energy 2, 81 dials), x4 reflex choices = ' + tried + ' candidate builds; each tried on dishes 6, 8, 9, 10: ' + all5 + ' win all five. Best: ' + most + ' of 5 (' + (mostB ? words(mostB) : '-') + '). Of the candidates, how many also win dish 6 / 8 / 9 / 10: ' + [6, 8, 9, 10].map(id => (count[id] || 0)).join(' / '));
  }

  // ---------------------------------------------------------------- X4 the carried build does not win
  {
    const lines = []; let ok = true;
    EXAM.forEach(id => {
      const D = Lv.dish(id), c = carryOf(id), v = Sim.validate(D, c), r16 = play(id, c, SN), r64 = play(id, c, 64), a = Sim.autopsy(r16);
      ok = ok && !r16.v.win && !r64.v.win;
      lines.push('dish ' + id + ' carry [' + words(c) + ']: ' + (v.ok ? 'legal' : 'OVER THE LIMIT ' + v.problems.join(' ')) + ', 16x16 ' + (r16.v.win ? 'WON' : 'lost') + ', 64x64 ' + (r64.v.win ? 'WON' : 'lost') + (a ? ', ' + a.stat + ' (' + a.cause + ')' : ''));
    });
    // and the carry is a real winner of the dish before
    const prev = []; [6, 7, 8, 9].forEach(id => { const nb = carryOf(id + 1), D = Lv.dish(id); prev.push('carry ' + (id + 1) + ' wins dish ' + id + ': ' + (Sim.validate(D, nb).ok && play(id, nb, SN).v.win && play(id, nb, 64).v.win)); });
    const c6 = carryOf(6), p5 = play(5, c6, SN).v.win && play(5, c6, 64).v.win; prev.unshift('carry 6 wins dish 5: ' + p5);
    result(ok && prev.every(x => /true$/.test(x)), 'X4 THE CARRIED WINNER OF THE DISH BEFORE DOES NOT WIN', '\n       ' + lines.join('\n       ') + '\n       ' + prev.join('; '));
  }

  // ---------------------------------------------------------------- X5 the cheapest obvious fix alone does not win
  {
    const parts = []; let ok = true;
    const fm = (p, s, ps, rf) => B.build(p, s, 'fermentation', ps, rf ? B.bioRef(rf) : null);
    const w = (id, b) => ({ v: Sim.validate(Lv.dish(id), b).ok, a: play(id, b, SN).v.win, b: play(id, b, 64).v.win });
    // dish 6: Tight membrane alone, in place of the pump on the carried cell, and on the factory dials
    { const t = [fm(2, 0, ['lipids'], 'stringent'), fm(4, 0, ['lipids']), fm(8, 0, ['lipids']), fm(4, 4, ['lipids', 'naps'])].map(b => w(6, b)); const g = t.every(x => !x.a && !x.b); ok = ok && g; parts.push('dish 6, Tight membrane alone (Pace 2 with Stringent, Pace 4, Pace 8, and with Random naps): ' + t.map(x => (x.a || x.b ? 'WINS' : 'loses')).join('/')); }
    // dish 7: the dish 5 carried build, the dish 5 winner, and the dish 6 winner
    { const t = [carryOf(5), carryOf(6), carryOf(7)].map(b => w(7, b)); const g = t.every(x => !x.a && !x.b); ok = ok && g; parts.push('dish 7, the dish 5 start cell / the dish 5 winner / the dish 6 winner: ' + t.map(x => (x.a || x.b ? 'WINS' : 'loses')).join('/')); }
    // dish 8: Sporulate alone on the carried cell loses; the others
    {
      const c = carryOf(8), ap = Lv.applyFix, bio = id => ({ changes: { reflex: { kind: 'bio', id } } });
      const combos = [['Sporulate alone', ap(c, bio('sporulate')), false], ['Stringent alone', ap(c, bio('stringent')), true], ['SOS alone', ap(c, bio('sos')), true],
        ['Sporulate + Head count', ap(ap(c, bio('sporulate')), { changes: { add: ['quorum'] } }), true], ['Sporulate + Pace 3', Object.assign(ap(c, bio('sporulate')), { pace: 3 }), true],
        ['Sporulate + Random naps', ap(ap(c, bio('sporulate')), { changes: { add: ['naps'] } }), null], ['Sporulate + Cell wall', ap(ap(c, bio('sporulate')), { changes: { add: ['wall'] } }), null],
        ['no reflex', c, false], ['Random naps, no reflex', ap(c, { changes: { add: ['naps'] } }), false]];
      const res = combos.map(([nm, b, want]) => { const x = w(8, b); const win = x.a && x.b; if (want !== null && win !== want) ok = false; return nm + ': ' + (x.v ? '' : 'ILLEGAL ') + (x.a ? 'win' : 'lose') + '/' + (x.b ? 'win' : 'lose') + (want === null ? ' (not required)' : ''); });
      parts.push('dish 8 on the carried cell (' + words(c) + '), 16x16/64x64: ' + res.join('; '));
    }
    // dish 9: all-Machine stacks lose at every dial setting; a single carefully chosen Machine part wins
    {
      const D = Lv.dish(9), mach = D.allowed.parts.filter(x => B.shelfOf(x) === 'machine'), stacks = [];
      const legal = (m, ch) => Sim.validate(D, { pace: 4, slop: 0, metabolism: m, parts: ch, reflex: null }).ok;
      let n = 0, wins = 0;
      ['fuelcell', 'fermentation'].forEach(m => {
        stacks.length = 0;
        (function rec(i, ch) { if (i === mach.length) { if (legal(m, ch) && !mach.some(x => ch.indexOf(x) < 0 && legal(m, ch.concat([x])))) stacks.push(ch.slice()); return; } rec(i + 1, ch); ch.push(mach[i]); if (legal(m, ch)) rec(i + 1, ch); ch.pop(); })(0, []);
        stacks.forEach(st => { for (let p = 0; p <= 8; p += (QUICK ? 2 : 1)) for (let s = 0; s <= 8; s += (QUICK ? 2 : 1)) { n++; if (B.play(D, B.build(p, s, m, st, null), SN).v.win) wins++; } });
      });
      const one = X[9].wins.filter(r => { const m = r.build.parts.filter(x => B.shelfOf(x) === 'machine').length + (B.shelfOf(r.build.metabolism) === 'machine' ? 1 : 0); return m === 1; });
      const oneB = one.slice().sort((a, b) => b.bandFrac - a.bandFrac)[0], one64 = oneB && B.play(D, oneB.build, 64).v.win;
      const g = wins === 0 && one.length > 0 && one64; ok = ok && g;
      const byCard = {}; one.forEach(r => { const k = r.build.parts.filter(x => B.shelfOf(x) === 'machine').concat(B.shelfOf(r.build.metabolism) === 'machine' ? [r.build.metabolism] : []).join('+'); byCard[k] = (byCard[k] || 0) + 1; });
      parts.push('dish 9, maximal all-Machine stacks (fuel cell and fermentation power): ' + n + ' dial settings, ' + wins + ' wins. Winners with exactly one Machine part in the sample: ' + one.length + ' ' + JSON.stringify(byCard) + '; best [' + (oneB ? words(oneB.build) : '-') + '] wins at 64x64: ' + !!one64);
    }
    result(ok, 'X5 THE CHEAPEST OBVIOUS FIX ALONE DOES NOT WIN', '\n       ' + parts.join('\n       '));
  }

  // ---------------------------------------------------------------- X6 all checked bars safe means a win
  {
    const lines = []; let tot = 0, agree = 0, edges = 0, edgeWins = 0; const dis = [];
    EXAM.forEach(id => {
      const x = X[id], D = x.D, want = QUICK ? 250 : 700, step = Math.max(1, Math.floor(x.rs.length / want)); let n = 0, safe = 0, safeWin = 0, win = 0;
      x.rs.forEach((r, i) => {
        if (i % step) return; n++; if (r.win) win++;
        const st = Sim.stats(D, r.build).filter(s => s.checked);
        if (st.every(s => s.state === 'safe')) { safe++; if (r.win) safeWin++; else dis.push('dish ' + id + ' ' + B.label(r.build)); }
        const g = st.filter(s => s.id === 'growth')[0]; if (g && g.state === 'edge') { edges++; if (r.win) edgeWins++; }
      });
      tot += safe; agree += safeWin;
      lines.push('dish ' + id + ': ' + n + ' builds, ' + win + ' win, ' + safe + ' all safe, ' + safeWin + ' of those win (' + (safe ? pc(safeWin / safe) : '-') + ')');
    });
    result(tot > 0 && agree / tot >= 0.95, 'X6 ALL CHECKED BARS SAFE MEANS A WIN (95%)', pc(agree / tot) + ' (' + agree + ' of ' + tot + '). ' + lines.join(' ; ') + '. A Growth bar at "edge" counts as not safe: ' + edges + ' builds sit at edge, ' + edgeWins + ' of them win' + (dis.length ? '. First disagreeing: ' + dis.slice(0, 5).join(' | ') : ''));
  }

  // ---------------------------------------------------------------- X7 random legal builds
  {
    const lines = []; let ok = true;
    EXAM.forEach(id => {
      const D = Lv.dish(id), N = QUICK ? 200 : 600; let w = 0, n = 0;
      for (let i = 0; i < N; i++) { const b = B.randomBuild(D, R); if (!Sim.validate(D, b).ok) continue; n++; if (B.play(D, b, SN).v.win) w++; }
      ok = ok && w / n < 0.10; lines.push('dish ' + id + ': ' + w + ' of ' + n + ' (' + pc(w / n) + ')');
    });
    result(ok, 'X7 RANDOM LEGAL BUILDS WIN UNDER 10%', lines.join(' ; ') + ' (random card sets from the dish\'s open slots, random dials 0 to 8, a random reflex 70% of the time)');
  }

  // ---------------------------------------------------------------- X8 dishes 1 to 5 unchanged
  {
    const known = { P7: false, E6: false }, legacy = Object.keys(outcomes).filter(k => !/^(X|T)\d/.test(k));
    const changed = legacy.filter(k => (k in known ? outcomes[k] !== known[k] : outcomes[k] !== true));
    result(changed.length === 0, 'X8 DISHES 1 TO 5 STILL PASS EVERY EXISTING CHECK', legacy.length + ' existing lines: ' + legacy.filter(k => outcomes[k]).length + ' pass, ' + legacy.filter(k => !outcomes[k]).join(', ') + ' fail (before this pass the same two failed: P7 on dish 2 and E6)' + (changed.length ? '. CHANGED: ' + changed.join(', ') : ''));
  }

  // ================================================================ trade-off reporting
  // T1 unchecked stats never affect the result
  {
    const notes = []; let ok = true;
    // dish 1: Growth is shown but unchecked
    const D1 = Lv.dish(1); let n = 0, bad = 0, winAgree = 0, winN = 0;
    B.configs(D1).forEach(c => [4].forEach(p => {
      const b = B.build(p, 0, c.metabolism, c.parts, null), st = Sim.stats(D1, b), g = st.filter(s => s.id === 'growth')[0], a = st.filter(s => s.id === 'acid')[0];
      n++; if (!g || g.checked !== false || g.state !== 'unchecked' || g.verdict !== 'Not checked on this dish') bad++;
      const win = play(1, b, SN).v.win; winN++; if (win === (a.state === 'safe')) winAgree++;
    }));
    ok = ok && bad === 0 && winAgree === winN;
    notes.push('dish 1: ' + n + ' builds, Growth shown with checked false, state "unchecked" and "Not checked on this dish" in all but ' + bad + '; the win equals "Acid defence safe" in ' + winAgree + ' of ' + winN);
    // the crash bar on dishes with no crash is unchecked; changing which stats a dish checks does not change a run
    [6, 7, 9].forEach(id => {
      const D = Lv.dish(id), probe = X[id].rs.filter((_, i) => i % 40 === 0).map(r => r.build); let nb = 0, same = 0;
      probe.forEach(b => {
        const c = Sim.stats(D, b).filter(s => s.id === 'crash')[0]; if (!c || c.checked || c.state !== 'unchecked') nb++;
        const D2 = Object.assign({}, D, { id: 900 + id, checked: ['acid'] }), r1 = B.play(D, b, SN), r2 = B.play(D2, b, SN);
        if (r1.v.win === r2.v.win && r1.v.bandFrac === r2.v.bandFrac && r1.v.maxStage === r2.v.maxStage) same++;
        if (Sim.statFixers(D, b, 'crash').length) nb++;
      });
      ok = ok && nb === 0 && same === probe.length;
      notes.push('dish ' + id + ': ' + probe.length + ' builds, Crash survival unchecked with no fixers in all but ' + nb + '; runs identical whichever stats are checked in ' + same + ' of ' + probe.length);
    });
    // an unchecked stat is never worth a red or green tag on a card
    let nonNeutral = 0, nch = 0;
    [1, 6, 7, 9].forEach(id => { const D = Lv.dish(id), c = id === 1 ? carryOf(1) : carryOf(id); Cards.SLOTS.forEach(sl => Sim.offered(D, sl.id).forEach(cd => Sim.cardEffects(D, c, cd.id).changes.forEach(ch => { if (!ch.checked) { nch++; if (ch.tone !== 'neutral') nonNeutral++; } }))); });
    ok = ok && nonNeutral === 0;
    notes.push('card changes on unchecked stats (dishes 1, 6, 7, 9): ' + nch + ', of which ' + nonNeutral + ' are not neutral');
    result(ok, 'T1 UNCHECKED STATS NEVER AFFECT THE RESULT', '\n       ' + notes.join('\n       '));
  }
  // T2 tone is consistent with the safe zone, words with the direction
  {
    const rank = { safe: 0, edge: 1, low: 2, high: 2, unchecked: 0 }, dist = s => s.value < s.safe[0] ? s.safe[0] - s.value : s.value > s.safe[1] ? s.value - s.safe[1] : 0;
    let n = 0, good = 0, bad = 0, neutral = 0, wrong = 0, wordsWrong = 0; const ex = [], WD = { acid: ['Acid defence up', 'Acid defence down'], growth: ['Growth faster', 'Growth slower'], smell: ['Smell closer', 'Smell further off'], natural: ['Naturalness up', 'Naturalness down'], crash: ['Crash survival up', 'Crash survival down'] };
    const pool = [];
    for (let id = 1; id <= 10; id++) { const D = Lv.dish(id), bs = [carryOf(id)]; if (id >= 6) bs.push(Lv.standard(id)); (X[id] ? X[id].wins.filter((_, i) => i % 60 === 0).map(r => r.build) : []).forEach(b => bs.push(b)); bs.forEach(b => pool.push([id, D, b])); }
    pool.forEach(([id, D, b]) => Cards.SLOTS.forEach(sl => Sim.offered(D, sl.id).forEach(cd => {
      const e = Sim.cardEffects(D, b, cd.id); if (!e.build) return;
      const base = e.current ? Sim.unfit(D, b, cd.slot || sl.id, cd.id).build : b;
      const A = Sim.stats(D, base || b), Z = Sim.stats(D, e.build);
      e.changes.forEach(ch => {
        n++; const a = A.filter(s => s.id === ch.stat)[0], z = Z.filter(s => s.id === ch.stat)[0];
        if (ch.tone === 'good') good++; else if (ch.tone === 'bad') bad++; else neutral++;
        const worse = rank[z.state] > rank[a.state] || (rank[z.state] === rank[a.state] && dist(z) > dist(a) + 0.004), better = rank[z.state] < rank[a.state] || (rank[z.state] === rank[a.state] && dist(z) < dist(a) - 0.004);
        let ok = true;
        if (!a.checked) ok = ch.tone === 'neutral'; else if (ch.tone === 'good') ok = !worse; else if (ch.tone === 'bad') ok = !better; else ok = false;
        if (!ok) { wrong++; if (ex.length < 4) ex.push('dish ' + id + ' ' + cd.id + ' ' + ch.words + ' ' + ch.tone + ' (' + a.state + ' ' + a.value + ' -> ' + z.state + ' ' + z.value + ')'); }
        if (ch.words !== WD[ch.stat][ch.direction === 'up' ? 0 : 1] || (z.value !== a.value && (ch.direction === 'up') !== (z.value > a.value))) wordsWrong++;
      });
    })));
    result(wrong === 0 && wordsWrong === 0 && n > 0, 'T2 CARD TONE MATCHES THE SAFE ZONE, WORDS MATCH THE DIRECTION', n + ' card changes over dishes 1 to 10 (' + pool.length + ' cells x every offered card): ' + good + ' good, ' + bad + ' bad, ' + neutral + ' neutral; ' + wrong + ' tones contradict the before and after stat states; ' + wordsWrong + ' words contradict the direction of the value' + (ex.length ? '. e.g. ' + ex.join(' | ') : ''));
  }
  // T3 a fitted card reports what it is doing
  {
    let n = 0, flagged = 0, match = 0, nonEmptyProt = 0, protN = 0; const ex = [];
    const pool = [];
    for (let id = 1; id <= 10; id++) { const D = Lv.dish(id), bs = [carryOf(id)]; (X[id] ? X[id].wins.filter((_, i) => i % 80 === 0).map(r => r.build) : []).forEach(b => bs.push(b)); bs.forEach(b => pool.push([D, b])); }
    pool.forEach(([D, b]) => {
      const sl = Sim.toSlots(b), fitted = [];
      sl.envelope.forEach(id => fitted.push([id, 'envelope'])); ['insides', 'division', 'signal'].forEach(k => { if (sl[k]) fitted.push([sl[k], k]); }); if (sl.reflex && sl.reflex.kind === 'bio') fitted.push([sl.reflex.id, 'reflex']);
      fitted.forEach(([id, slot]) => {
        const e = Sim.cardEffects(D, b, id), un = Sim.unfit(D, b, slot, id); if (!un.ok) return; n++;
        if (e.fitted === true && e.current === true) flagged++;
        const diff = Sim.statDiff(D, un.build, b).filter(d => { const dn = Sim.dissolved(D, b) || Sim.dissolved(D, un.build); return (d.id === 'acid' || !dn) && (d.better !== null || Math.abs(d.delta) >= 0.04 || d.fromState !== d.toState); }).map(d => d.id).sort().join(',');
        const got = e.changes.map(c => c.stat).sort().join(',');
        if (diff === got) match++; else if (ex.length < 3) ex.push('dish ' + D.id + ' ' + id + ' reports [' + got + '] vs [' + diff + ']');
        if ((id === 'pump' || id === 'acidproof' || id === 'shell') && Sim.stats(D, b).filter(x => x.id === 'acid')[0].value - Sim.stats(D, un.build).filter(x => x.id === 'acid')[0].value >= 0.04) { protN++; if (e.changes.some(c => c.stat === 'acid' && c.direction === 'up' && c.words === 'Acid defence up')) nonEmptyProt++; }
      });
    });
    result(n > 0 && flagged === n && match === n && nonEmptyProt === protN, 'T3 A FITTED CARD REPORTS WHAT IT IS DOING', n + ' fitted cards over dishes 1 to 10: ' + flagged + ' flagged fitted: true, ' + match + ' report exactly the stats that differ between the cell with it and without it; ' + nonEmptyProt + ' of ' + protN + ' fitted acid defences that the cell needs (taking them off lowers Acid defence) report "Acid defence up"' + (ex.length ? '. e.g. ' + ex.join(' | ') : ''));
  }
  // T4 the edge state
  {
    let edge = 0, edgeBand = 0, edgeWin = 0, safeWithEdge = 0, tot = 0; const per = {};
    EXAM.concat(E.data ? [2, 3, 4, 5] : []).forEach(id => {
      const src = X[id] ? X[id].rs.filter((_, i) => i % 6 === 0) : E.data[id].all.filter((_, i) => i % 12 === 0);
      src.forEach(r => {
        const DD = Lv.dish(id); if (!Sim.validate(DD, r.build).ok) return; tot++;
        const g = Sim.stats(DD, r.build).filter(s => s.id === 'growth')[0]; if (!g || g.state !== 'edge') return;
        const run = B.play(DD, r.build, 16); edge++; per[id] = (per[id] || 0) + 1;
        if (run.v.bandFrac >= DD.band.need && run.v.bandFrac < 0.75) edgeBand++;
        if (run.v.win) edgeWin++;
      });
    });
    result(edge > 0 && edgeBand === edge, 'T4 GROWTH "CLOSE TO THE EDGE" IS THE BAND BETWEEN WIN AND SAFE', edge + ' sampled builds (of ' + tot + ') show Growth at edge, by dish ' + JSON.stringify(per) + '; every one spends between 25% and 30% of the run outside the band on its forecast run (' + edgeBand + ' of ' + edge + ') and ' + edgeWin + ' of them win. "edge" is not "safe", so such a build is left out of the all-safe test (X6 and SB1 count only state "safe")');
  }
};

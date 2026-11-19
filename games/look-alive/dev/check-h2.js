// Run: node games/look-alive/dev/check-h2.js         (habitat 2, dishes 11 to 14: checks H0 to H10)
//      node games/look-alive/dev/check-h2.js quick   (smaller samples, for tuning)
// One PASS or FAIL line per property, with numbers. Does not change game code.
const path = require('path'), cp = require('child_process');
const G = path.join(__dirname, '..');
global.LookAliveCards = require(path.join(G, 'cards.js'));
global.LookAliveLevels = require(path.join(G, 'levels.js'));
require(path.join(G, 'levels2.js'));
const Sim = require(path.join(G, 'sim.js')), Lv = global.LookAliveLevels, Cards = global.LookAliveCards;
const B = require('./bots.js');
const P = Lv.PLANET, QUICK = process.argv[2] === 'quick', IDS = [11, 12, 13, 14];
const N3 = QUICK ? 80 : 400, N6 = QUICK ? 60 : 300, WIN_CAP = QUICK ? 10 : 40;
const t0 = Date.now(), f = (x, d) => x.toFixed(d == null ? 2 : d), pc = x => f(x * 100, 1) + '%';
let fails = 0, nLines = 0;
const lap = name => console.log('  [' + ((Date.now() - t0) / 1000).toFixed(0) + 's] ' + name);
function result(pass, tag, msg) { if (!pass) fails++; nLines++; console.log((pass ? 'PASS ' : 'FAIL ') + tag + ' ' + msg); return pass; }
const clone = o => JSON.parse(JSON.stringify(o));
const play = (id, b, n, o) => Sim.play(P, Lv.dish(id), clone(b), Object.assign({ n }, o || {}));
const label = b => B.label(b);
const checkedOf = st => st.filter(s => s.checked);
const hash = r => Object.keys(r.H).sort().map(k => k === 'susp' ? Object.keys(r.H.susp).sort().map(c => Buffer.from(r.H.susp[c].buffer).toString('base64')).join('') : k + Buffer.from(r.H[k].buffer).toString('base64')).join('|');
const causeOf = r => { const v = r.v || Sim.verdict(r); if (v.win) return null; const a = Sim.autopsy(r); return a ? a.cause : 'none'; };

console.log('Look Alive habitat 2 checks: dishes ' + IDS.join(', ') + (QUICK ? ' (quick mode)' : ''));

// ---- H0. dishes 1 to 10 unchanged (two fingerprints, run as separate processes)
{
  const run = args => cp.spawnSync(process.execPath, args, { cwd: G, encoding: 'utf8', timeout: 300000 });
  const a = run(['dev/fingerprint-wide.js', '--with2']), b = run(['dev/fingerprint.js']);
  const sa = (a.stdout || '').trim().split('\n').pop(), sb = (b.stdout || '').trim().split('\n').slice(-2).join(' / ');
  result(/same as fingerprint-wide\.json/.test(a.stdout || '') && /PASS fingerprint/.test(b.stdout || ''), 'H0 OLD DISHES UNCHANGED', 'fingerprint-wide --with2: "' + sa + '"; fingerprint: "' + sb + '"');
  lap('H0');
}

// ---- H1. the carried cell loses with its cause
const H1CAUSE = { 11: ['cooked'], 12: ['grazed'], 13: ['bust'], 14: null };
const seenCauses = { 11: new Set(), 12: new Set(), 13: new Set(), 14: new Set() };
{
  const lines = []; let ok = true;
  IDS.forEach(id => {
    const D = Lv.dish(id), c = Lv.carry(id);
    [32, 64].forEach(n => {
      const r = play(id, c, n), v = Sim.verdict(r), a = v.win ? null : Sim.autopsy(r);
      const cause = a ? a.cause : 'WIN', want = H1CAUSE[id];
      let good = !v.win && (want ? want.indexOf(cause) >= 0 : true);
      if (good && id === 13 && a.stat !== 'night') good = false;
      if (a) seenCauses[id].add(cause);
      ok = ok && good;
      lines.push(id + '@' + n + ': ' + (v.win ? 'WIN' : cause + '/' + (a && a.stat)) + (good ? '' : ' (WANTED ' + (want ? want.join('|') + (id === 13 ? '/night' : '') : 'any loss') + ')'));
    });
  });
  result(ok, 'H1 CARRIED CELL LOSES WITH ITS CAUSE', lines.join('; '));
  lap('H1');
}

// ---- H2. each intended fix wins at 32 and 64
const h2Winners = [];   // { id, build }
{
  const lines = []; let ok = true, n = 0;
  IDS.forEach(id => {
    const D = Lv.dish(id), c = Lv.carry(id);
    (D.fixes || []).forEach(fx => {
      const b = Lv.applyFix(clone(c), fx), res = [32, 64].map(g => { const r = play(id, b, g), v = Sim.verdict(r); if (!v.win) seenCauses[id].add(causeOf(r)); return v; });
      n++; const good = res[0].win && res[1].win; ok = ok && good; if (good) h2Winners.push({ id, build: b });
      lines.push(id + ' ' + fx.id + ': 32 ' + (res[0].win ? 'win' : 'LOSS') + ' ' + f(res[0].bandFrac || 0, 3) + ', 64 ' + (res[1].win ? 'win' : 'LOSS') + ' ' + f(res[1].bandFrac || 0, 3));
    });
    if (!(D.fixes || []).length) lines.push(id + ': no fixes (exam dish)');
  });
  result(ok && n > 0, 'H2 EACH INTENDED FIX WINS', n + ' fixes: ' + lines.join('; '));
  lap('H2');
}

// ---- H3. breadth: seeded random legal builds at 32 (generator copied from the prototype sample.js)
const winners = { 11: [], 12: [], 13: [], 14: [] }, rate = {}, tried3 = {};
{
  const mk = (pace, slop, metabolism, parts, reflex) => ({ pace, slop, metabolism, parts, reflex: reflex || null });
  const bio = id => ({ kind: 'bio', id }), rule = (sensor, cmp, value, action) => ({ kind: 'machine', sensor, cmp, value, action });
  const mets = ['fermentation', 'respiration', 'heatps', 'fuelcell'];
  const env = [[], ['tetraether'], ['pump'], ['lipids'], ['wall'], ['shell']];
  const ins = [null, 'chaperones', 'polyamines', 'acidproof', 'repair'], div = [null, 'filament', 'naps', 'clock', 'copier'], sig = [null, 'quorum', 'radio'], mot = [null, 'pili', 'flagellum'];
  const rfx = [null, bio('sporulate'), bio('stringent'), bio('sos'), bio('nightferm'), rule('temp', 'lt', 45, 'hotter'), rule('temp', 'lt', 50, 'hotter'), rule('temp', 'gt', 55, 'cooler'), rule('temp', 'gt', 50, 'cooler'), rule('food', 'gt', 99, 'cooler'), rule('food', 'gt', 99, 'hotter')];   // the last two never fire
  const gen = seed => {
    let s = seed; const R = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }, pick = a => a[Math.floor(R() * a.length)];
    return D => { for (;;) {
      const parts = [].concat(pick(env), [pick(ins), pick(div), pick(sig), D.slots.includes('motor') ? pick(mot) : null].filter(Boolean));
      const b = mk(2 + Math.floor(R() * 6), pick([0, 2, 4, 6, 8]), pick(mets), parts, pick(rfx));
      if (Sim.validate(D, b).ok) return b;
    } };
  };
  global.__H2GEN = gen;
  const pattern = b => { const sl = Sim.toSlots(b); return ['power', 'envelope', 'insides', 'division', 'signal', 'motor', 'reflex'].map(k => { const v = sl[k]; return Array.isArray(v) ? (v.length ? 'E' : '_') : v ? k[0] : '_'; }).join(''); };
  const lines = []; let ok = true;
  IDS.forEach(id => {
    const D = Lv.dish(id), g = gen(7), seen = new Set(); let tried = 0, w = 0;
    while (tried < N3) {
      const b = g(D), k = JSON.stringify(b); if (seen.has(k)) continue; seen.add(k); tried++;
      const r = play(id, b, 32), v = Sim.verdict(r);
      if (v.win) { winners[id].push(b); w++; } else seenCauses[id].add(causeOf(r));
    }
    rate[id] = w / tried; tried3[id] = tried;
    const pats = new Set(winners[id].map(pattern));
    let good = w >= 3 && pats.size >= 2; if (id === 14) good = good && rate[id] < 0.03;
    ok = ok && good;
    lines.push(id + ': ' + w + ' of ' + tried + ' win (' + pc(w / tried) + '), ' + pats.size + ' slot patterns' + (good ? '' : ' [FAIL' + (w < 3 ? ' <3 winners' : '') + (pats.size < 2 ? ' <2 patterns' : '') + (id === 14 && rate[id] >= 0.03 ? ' rate >= 3%' : '') + ']'));
  });
  result(ok, 'H3 BREADTH (>=3 winners and >=2 slot patterns per dish, dish 14 under 3%)', lines.join('; '));
  lap('H3');
}

// ---- H4. no build wins all four
{
  const cand = []; IDS.forEach(id => winners[id].forEach(b => cand.push(b))); h2Winners.forEach(w => cand.push(w.build));
  let legal4 = 0, best = 0, all4 = 0; const w4 = []; const hist = [0, 0, 0, 0, 0], seen = new Set();
  cand.forEach(b => {
    const k = JSON.stringify(b); if (seen.has(k)) return; seen.add(k);
    if (!IDS.every(id => Sim.validate(Lv.dish(id), b).ok)) return; legal4++;
    const c = IDS.filter(id => Sim.verdict(play(id, b, 32)).win).length; hist[c]++; if (c > best) best = c; if (c === 4) { all4++; w4.push(label(b)); }
  });
  result(all4 === 0, 'H4 NO BUILD WINS ALL FOUR', cand.length + ' H2/H3 winners, ' + seen.size + ' distinct, ' + legal4 + ' legal on all four (dish 14 energy 3 limits this); wins out of 4 among them: ' + hist.map((n, i) => i + ':' + n).join(' ') + '; best ' + best + (w4.length ? '; WIN ALL FOUR: ' + w4.join(' | ') : '') + (legal4 === 0 ? ' (VACUOUS: none legal on all four)' : ''));
  lap('H4');
}

// ---- H5. inversion on dish 12: cool start beats hot start without grazers, loses to them with
{
  const D12 = Lv.dish(12), noGraze = clone(D12); noGraze.temp = Object.assign({}, D12.temp, { graze: 0 }); noGraze.id = 12;
  const b = B.build(5, 4, 'fermentation', ['chaperones', 'pili'], null);
  const run = (D, bb, place) => { const r = Sim.play(P, D, clone(bb), { n: 64, place }); return { r, v: Sim.verdict(r) }; };
  const out = {};
  [['off', noGraze], ['on', D12]].forEach(([k, D]) => ['cool', 'hot'].forEach(pl => { const o = run(D, b, pl), a = o.v.win ? null : Sim.autopsy(o.r); out[k + pl] = { win: o.v.win, share: o.v.finalShare, cause: a && a.cause }; }));
  const bt = B.build(5, 4, 'fermentation', ['chaperones', 'tetraether'], null), tt = {};
  ['cool', 'hot'].forEach(pl => { const o = run(D12, bt, pl), a = o.v.win ? null : Sim.autopsy(o.r); tt[pl] = { win: o.v.win, share: o.v.finalShare, cause: a && a.cause }; });
  const s = x => (x.win ? 'win ' : 'loss/' + x.cause + ' ') + f(x.share || 0, 3);
  const c1 = out.offcool.win && out.offhot.win && out.offcool.share >= out.offhot.share;
  const c2 = !out.oncool.win && out.oncool.cause === 'grazed' && out.onhot.win;
  const c3 = !tt.cool.win && !tt.hot.win;
  // H5b: a heat rule that can never fire is not a free anti-current card: carried cell + never-firing rule loses, with about the same share below 40 C
  const dead = B.build(3, 6, 'fermentation', ['chaperones'], { kind: 'machine', sensor: 'food', cmp: 'gt', value: 99, action: 'cooler' });
  const vOk = Sim.validate(D12, dead).ok, cc = B.build(3, 6, 'fermentation', ['chaperones'], null);   // the dish 12 carried cell with the reflex slot empty (the rule takes that slot)
  const coolOf = bb => { const o = run(D12, bb, 'cool'); let a = 0, c = 0; for (let t = 30; t <= o.r.H.cool.length - 1; t++) { a += o.r.H.cool[t] || 0; c++; } return { win: o.v.win, cool: c ? a / c : 0 }; };
  const cA = coolOf(cc), cB = vOk ? coolOf(dead) : null;
  const c4 = vOk && !cB.win && Math.abs(cB.cool - cA.cool) <= 0.25 * Math.max(cA.cool, 1e-6);
  result(c1 && c2 && c3 && c4, 'H5 INVERSION', 'no grazers: cool ' + s(out.offcool) + ', hot ' + s(out.offhot) + (c1 ? '' : ' [WANTED both win, cool share >= hot]') + '; grazers on: cool ' + s(out.oncool) + ', hot ' + s(out.onhot) + (c2 ? '' : ' [WANTED cool loss/grazed, hot win]') + '; chaperones+tetraether no reflex, grazers on: cool ' + s(tt.cool) + ', hot ' + s(tt.hot) + (c3 ? '' : ' [WANTED both lose]') + '; never-firing cooler rule on the carried cell: ' + (vOk ? (cB.win ? 'WIN' : 'loss') + ', mean share below 40 C ' + pc(cB.cool) + ' vs the same cell with no reflex ' + pc(cA.cool) + (c4 ? '' : ' [WANTED loss and within 25%]') : 'INVALID RULE'));
  lap('H5');
}

// ---- H6. stat bars agree with the 64x64 run (SB1 and SB2 rules)
{
  const lines = []; let tot1 = 0, ag1 = 0, tot2 = 0, ag2 = 0; const dis = [], miss = [];
  IDS.forEach(id => {
    const D = Lv.dish(id), g = global.__H2GEN(1000 + id); let safeAll = 0, safeWin = 0, loss = 0, lossMatch = 0, wins = 0;
    for (let i = 0; i < N6; i++) {
      const b = g(D), st = Sim.stats(D, b), r = play(id, b, 64), v = Sim.verdict(r); if (v.win) wins++;
      const allSafe = checkedOf(st).every(s => s.state === 'safe');
      if (allSafe) { safeAll++; if (v.win) safeWin++; else dis.push(id + ' ' + label(b) + ' (' + causeOf(r) + ')'); }
      if (!v.win) { loss++; const a = Sim.autopsy(r), bad = checkedOf(st).filter(s => s.state !== 'safe'); if (bad.some(s => s.id === a.stat)) lossMatch++; else miss.push(id + ' ' + label(b) + ' (' + a.cause + ' -> ' + a.stat + ', unsafe: ' + (bad.map(s => s.id).join('/') || 'none') + ')'); }
    }
    tot1 += safeAll; ag1 += safeWin; tot2 += loss; ag2 += lossMatch;
    lines.push(id + ': ' + N6 + ' builds, ' + wins + ' win; all-safe ' + safeAll + ', of those win ' + safeWin + '; losses ' + loss + ', autopsy stat unsafe ' + lossMatch);
  });
  const r1 = tot1 ? ag1 / tot1 : 0, r2 = tot2 ? ag2 / tot2 : 0;
  result(tot1 > 0 && tot2 > 0 && r1 >= 0.95 && r2 >= 0.95, 'H6 BARS AGREE (SB1 all safe means win, SB2 loss has its stat unsafe; 95%)', 'SB1 ' + pc(r1) + ' (' + ag1 + ' of ' + tot1 + '), SB2 ' + pc(r2) + ' (' + ag2 + ' of ' + tot2 + '). ' + lines.join('; ') + (dis.length ? '. SB1 DISAGREE: ' + dis.slice(0, 6).join(' | ') : '') + (miss.length ? '. SB2 FIRST MISSES: ' + miss.slice(0, 6).join(' | ') : ''));
  lap('H6');
}

// ---- H7. deterministic and fast
{
  let same = 0, tot = 0; const bs = [];
  IDS.forEach(id => { bs.push([id, Lv.carry(id)]); }); bs.push([12, Lv.applyFix(Lv.carry(12), Lv.dish(12).fixes[0])]);
  { const nf = Lv.dish(13).fixes.find(x => x.id === 'nightferm'); if (nf) bs.push([13, Lv.applyFix(Lv.carry(13), nf)]); }   // the only reader of darkLag
  bs.forEach(([id, b]) => { const r1 = play(id, b, 64, { snapEvery: 10 }), r2 = play(id, b, 64, { snapEvery: 10 }); tot++; if (hash(r1) === hash(r2)) same++; });
  let resumeOk = 0, resumeTot = 0, resumeNote = '';
  IDS.forEach(id => {
    const r1 = play(id, Lv.carry(id), 64, { snapEvery: 10 }); let rs; try { rs = Sim.resume(r1, 12); } catch (e) { resumeNote = ' resume threw ' + e.message; }
    const rr = rs && (rs.run || rs); resumeTot++; if (rr && rr.H && hash(rr) === hash(r1)) resumeOk++;
  });
  const tt = []; const d12 = 12, c = Lv.carry(12); play(d12, c, 64, {});
  for (let i = 0; i < 10; i++) { const t = process.hrtime.bigint(); play(d12, c, 64, {}); tt.push(Number(process.hrtime.bigint() - t) / 1e6); }
  const mean = tt.reduce((a, b) => a + b) / tt.length;
  result(same === tot && resumeOk === resumeTot && mean < 100, 'H7 DETERMINISTIC AND FAST', same + ' of ' + tot + ' builds identical twice; resume(run, 12) identical on ' + resumeOk + ' of ' + resumeTot + resumeNote + '; mean 64x64 run ' + f(mean, 1) + ' ms (limit 100)');
  lap('H7');
}

// ---- H8. forecast (32) agrees with the 64x64 run
{
  const set = h2Winners.map(w => ({ id: w.id, b: w.build, src: 'fix' }));
  IDS.forEach(id => winners[id].slice(0, WIN_CAP).forEach(b => set.push({ id, b, src: 'rand' })));
  let ag = 0, agFix = 0, nFix = 0; const dis = [];
  set.forEach(s => { const a = Sim.verdict(play(s.id, s.b, 32)).win, b = Sim.verdict(play(s.id, s.b, 64)).win; if (a === b) { ag++; if (s.src === 'fix') agFix++; } else dis.push(s.id + ' ' + label(s.b) + ' (32 ' + (a ? 'win' : 'loss') + ', 64 ' + (b ? 'win' : 'loss') + ')'); if (s.src === 'fix') nFix++; });
  result(set.length > 0 && ag / set.length >= 0.9, 'H8 FORECAST AGREES WITH THE RUN (32 vs 64, >= 90%)', pc(set.length ? ag / set.length : 0) + ' (' + ag + ' of ' + set.length + ': ' + nFix + ' fix winners, ' + agFix + ' agree; plus up to ' + WIN_CAP + ' random winners per dish)' + (dis.length ? '. DISAGREE: ' + dis.slice(0, 8).join(' | ') : ''));
  lap('H8');
}

// ---- H9. dial smoothness (dishes 11 to 13, winners, one step moves the final share under 5 points)
{
  const lines = []; let ok = true;
  [11, 12, 13].forEach(id => {
    const ws = h2Winners.filter(w => w.id === id).map(w => w.build).concat(winners[id].slice(0, WIN_CAP));
    let steps = 0, bad = 0, badW = 0, worst = 0, at = '';
    ws.forEach(b => {
      const r0 = play(id, b, 32), s0 = Sim.verdict(r0).finalShare; let badHere = false;
      B.neighbours(b).forEach(nb => { if (!Sim.validate(Lv.dish(id), nb).ok) return; steps++; const d = Math.abs(Sim.verdict(play(id, nb, 32)).finalShare - s0); if (d > worst) { worst = d; at = label(b) + ' -> ' + label(nb); } if (d > 0.05) { bad++; badHere = true; } });
      if (badHere) badW++;
    });
    ok = ok && badW === 0 && ws.length > 0;
    lines.push(id + ': ' + ws.length + ' winners, ' + steps + ' steps, worst change ' + f(worst * 100, 1) + ' points, ' + badW + ' winners break the rule (' + bad + ' steps)' + (badW ? ' e.g. ' + at : ''));
  });
  result(ok, 'H9 DIAL SMOOTHNESS (5 points)', lines.join('; '));
  lap('H9');
}

// ---- H10. tips: every cause seen has a tip of its own (11 to 13); dish 14 tips name no winning card
{
  const lines = []; let ok = true;
  [11, 12, 13].forEach(id => {
    const D = Lv.dish(id), cs = [...seenCauses[id]].filter(Boolean), bad = cs.filter(c => !Object.prototype.hasOwnProperty.call(D.tips, c) || Lv.tip(D, c) === D.tips.other);
    ok = ok && bad.length === 0; lines.push(id + ': causes ' + (cs.join(',') || 'none') + (bad.length ? ' MISSING OWN TIP: ' + bad.join(',') : ' all have a tip'));
  });
  {
    const D = Lv.dish(14), cs = [...seenCauses[14]].filter(Boolean);
    const ids = new Set(); winners[14].forEach(b => { b.parts.forEach(p => ids.add(p)); if (b.reflex && b.reflex.kind === 'bio') ids.add(b.reflex.id); });
    h2Winners.filter(w => w.id === 14).forEach(w => { w.build.parts.forEach(p => ids.add(p)); });
    const nm = id => { try { const c = Cards.part(id); return (c && (c.name || c.label)) || id; } catch (e) { return id; } };
    const all = cs.map(c => Lv.tip(D, c).join(' ')).concat(Object.keys(D.tips).map(k => D.tips[k].join(' '))).join(' ').toLowerCase();
    const named = [...ids].filter(id => all.indexOf(String(nm(id)).toLowerCase()) >= 0 || all.indexOf(id.toLowerCase()) >= 0);
    const onlyOther = cs.filter(c => c !== 'other' && !Object.prototype.hasOwnProperty.call(D.tips, c));
    ok = ok && named.length === 0 && ids.size > 0;
    lines.push('14: causes ' + (cs.join(',') || 'none') + '; winner cards checked ' + ids.size + ' (' + [...ids].join(',') + '); named in any tip: ' + (named.join(',') || 'none') + (ids.size === 0 ? ' (VACUOUS: no dish 14 winners found)' : '') + (onlyOther.length ? '; causes on the generic tip: ' + onlyOther.join(',') : ''));
  }
  result(ok, 'H10 TIPS', lines.join('; '));
  lap('H10');
}

// ---------------------------------------------------------------- H11 the dials alone never win
// The carried cell with only Pace and Sloppiness changed (all 81 settings, no card touched) must lose every habitat-2 dish at the forecast grid and at 64x64:
// a dish that falls to "turn the Pace up" teaches nothing about its slot. (Found by the owner in play: Pace alone won dishes 12, 13 and 14.)
{
  const lines = []; let ok = true;
  IDS.forEach(id => {
    const c = Lv.carry(id), w = { 32: [], 64: [] };
    for (let p = 0; p <= 8; p += (QUICK ? 2 : 1)) for (let s = 0; s <= 8; s += (QUICK ? 2 : 1)) [32, 64].forEach(n => { const b = clone(c); b.pace = p; b.slop = s; if (Sim.verdict(play(id, b, n)).win) w[n].push(p + '/' + s); });
    if (w[32].length || w[64].length) ok = false;
    lines.push(id + ': ' + w[64].length + ' dial-only wins at 64x64, ' + w[32].length + ' at 32x32' + (w[64].length || w[32].length ? ' (Pace/Sloppiness ' + w[64].concat(w[32]).slice(0, 6).join(' ') + ')' : ''));
  });
  result(ok, 'H11 THE DIALS ALONE NEVER WIN (carried cell, every Pace and Sloppiness)', lines.join('; '));
  lap('H11');
}

console.log('\n' + (nLines - fails) + ' of ' + nLines + ' lines pass' + ' (' + ((Date.now() - t0) / 1000).toFixed(0) + ' s)');
process.exit(fails ? 1 : 0);

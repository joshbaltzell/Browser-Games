// Habitat 2 tuning sweep. Run: node games/look-alive/dev/tune-h2.js [N3] [setting-index ...]
// Monkey-patches the loaded dish / card objects in memory (nothing is written), plays the H1 to H4 and H8 ingredients per setting,
// and prints accept / reject reasons. Settings are listed in SETTINGS below; edit and re-run.
const path = require('path'), G = path.join(__dirname, '..');
global.LookAliveCards = require(path.join(G, 'cards.js'));
global.LookAliveLevels = require(path.join(G, 'levels.js'));
require(path.join(G, 'levels2.js'));
const Sim = require(path.join(G, 'sim.js')), Lv = global.LookAliveLevels, Cards = global.LookAliveCards, B = require('./bots.js'), P = Lv.PLANET;
const IDS = [11, 12, 13, 14], N3 = +process.argv[2] || 80, clone = o => JSON.parse(JSON.stringify(o));
const play = (id, b, n) => Sim.play(P, Lv.dish(id), clone(b), { n });
const f3 = x => x.toFixed(3);
const part = id => Cards.parts.find(p => p.id === id);
const base = { flow11: 0.06, rD: 0.05, hot14: 85, graze14: 0.20, fgraze: 0.95, cmp: 60, nfv: null, flow12: 0.06, flow14: 0.06, flow13: 0.06, nightDepth: null };
const orig = { rD: 0.05, fgraze: part('filament').fx.graze };
const SETTINGS = JSON.parse(process.env.SETTINGS || '[{}]').map(o => Object.assign({}, base, o));
function apply(s) {
  IDS.forEach(id => { Lv.dish(id).temp.rDiffuse = s.rD; });
  Lv.dish(11).temp.flow = s.flow11; Lv.dish(12).temp.flow = s.flow12; Lv.dish(14).temp.flow = s.flow14; Lv.dish(13).temp.flow = s.flow13;
  Lv.dish(14).temp.hot = s.hot14; Lv.dish(14).temp.graze = s.graze14; part('filament').fx.graze = s.fgraze;
  Lv.dish(12).fixes.find(x => x.id === 'compass').changes.reflex.value = s.cmp;
}
const causeOf = r => { const v = Sim.verdict(r); if (v.win) return null; const a = Sim.autopsy(r); return a ? a.cause : 'none'; };
const WANT = { 11: ['cooked'], 12: ['grazed'], 13: ['bust'] };
function evaluate(s) {
  const why = [], info = {};
  apply(s);
  // H1
  IDS.forEach(id => [32, 64].forEach(n => { const r = play(id, Lv.carry(id), n), v = Sim.verdict(r); if (v.win) why.push('H1 ' + id + '@' + n + ' carried cell WINS'); else if (WANT[id] && WANT[id].indexOf(causeOf(r)) < 0) why.push('H1 ' + id + '@' + n + ' cause ' + causeOf(r)); }));
  // H2
  const h2 = [], fixes = [];
  IDS.forEach(id => (Lv.dish(id).fixes || []).forEach(fx => { const b = Lv.applyFix(clone(Lv.carry(id)), fx), vs = [32, 64].map(n => Sim.verdict(play(id, b, n))); const sh = vs.map(v => f3(v.bandFrac || 0)).join('/'); h2.push(id + ' ' + fx.id + ' ' + (vs[0].win ? 'W' : 'L') + (vs[1].win ? 'W' : 'L') + ' ' + sh); if (!vs[0].win || !vs[1].win) why.push('H2 ' + id + ' ' + fx.id + ' ' + (vs[0].win ? 'W' : 'L') + (vs[1].win ? 'W' : 'L')); else fixes.push({ id, b }); }));
  info.h2 = h2.join('; ');
  // H3
  const gen = (function () { const mk = (pace, slop, metabolism, parts, reflex) => ({ pace, slop, metabolism, parts, reflex: reflex || null }); const bio = id => ({ kind: 'bio', id }), rule = (sensor, cmp, value, action) => ({ kind: 'machine', sensor, cmp, value, action });
    const mets = ['fermentation', 'respiration', 'heatps', 'fuelcell'], env = [[], ['tetraether'], ['pump'], ['lipids'], ['wall'], ['shell']];
    const ins = [null, 'chaperones', 'polyamines', 'acidproof', 'repair'], div = [null, 'filament', 'naps', 'clock', 'copier'], sig = [null, 'quorum', 'radio'], mot = [null, 'pili', 'flagellum'];
    const rfx = [null, bio('sporulate'), bio('stringent'), bio('sos'), bio('nightferm'), rule('temp', 'lt', 45, 'hotter'), rule('temp', 'lt', 50, 'hotter'), rule('temp', 'gt', 55, 'cooler'), rule('temp', 'gt', 50, 'cooler'), rule('food', 'gt', 99, 'cooler'), rule('food', 'gt', 99, 'hotter')];
    return seed => { let st = seed; const R = () => { st = (st * 1103515245 + 12345) & 0x7fffffff; return st / 0x7fffffff; }, pick = a => a[Math.floor(R() * a.length)];
      return D => { for (;;) { const parts = [].concat(pick(env), [pick(ins), pick(div), pick(sig), D.slots.includes('motor') ? pick(mot) : null].filter(Boolean)); const b = mk(2 + Math.floor(R() * 6), pick([0, 2, 4, 6, 8]), pick(mets), parts, pick(rfx)); if (Sim.validate(D, b).ok) return b; } }; }; })();
  const winners = { 11: [], 12: [], 13: [], 14: [] }, h3 = [];
  IDS.forEach(id => { const D = Lv.dish(id), g = gen(7), seen = new Set(); let tried = 0; while (tried < N3) { const b = g(D), k = JSON.stringify(b); if (seen.has(k)) continue; seen.add(k); tried++; if (Sim.verdict(play(id, b, 32)).win) winners[id].push(b); }
    const w = winners[id].length; h3.push(id + ':' + w + '/' + tried); if (w < 3) why.push('H3 dish ' + id + ' only ' + w + ' winners'); if (id === 14 && w / tried >= 0.03) why.push('H3 dish 14 rate ' + (100 * w / tried).toFixed(1) + '%'); });
  info.h3 = h3.join(' ');
  // H4
  const cand = []; IDS.forEach(id => winners[id].forEach(b => cand.push(b))); fixes.forEach(w => cand.push(w.b));
  const seen = new Set(), all4 = []; cand.forEach(b => { const k = JSON.stringify(b); if (seen.has(k)) return; seen.add(k); if (!IDS.every(id => Sim.validate(Lv.dish(id), b).ok)) return; if (IDS.every(id => Sim.verdict(play(id, b, 32)).win)) all4.push(B.label(b)); });
  info.h4 = all4.length ? 'WIN-ALL-4 ' + all4.join(' | ') : 'none'; if (all4.length) why.push('H4 ' + all4.length + ' wins all four');
  // H8
  const set = fixes.map(w => ({ id: w.id, b: w.b })); IDS.forEach(id => winners[id].slice(0, 10).forEach(b => set.push({ id, b })));
  let ag = 0; const dis = []; set.forEach(x => { const a = Sim.verdict(play(x.id, x.b, 32)).win, b = Sim.verdict(play(x.id, x.b, 64)).win; if (a === b) ag++; else dis.push(x.id); });
  info.h8 = ag + '/' + set.length + (dis.length ? ' (dishes ' + dis.join(',') + ')' : ''); if (ag / set.length < 0.9) why.push('H8 ' + (100 * ag / set.length).toFixed(0) + '%');
  if (process.env.H6) {   // mini H6 (SB1: every checked bar safe means a win), N builds per dish at 64x64, dishes 11 to 13
    const n6 = +process.env.H6, parts = []; let t1 = 0, a1 = 0;
    [11, 12, 13].forEach(id => { const D = Lv.dish(id), g = gen(1000 + id); let t = 0, a = 0; for (let i = 0; i < n6; i++) { const b = g(D), st = Sim.stats(D, b); if (st.filter(x => x.checked).every(x => x.state === 'safe')) { t++; if (Sim.verdict(play(id, b, 64)).win) a++; } } t1 += t; a1 += a; parts.push(id + ':' + a + '/' + t); });
    info.h6 = 'SB1 ' + (t1 ? (100 * a1 / t1).toFixed(1) : '-') + '% (' + parts.join(' ') + ')'; if (t1 && a1 / t1 < 0.95) why.push('H6 SB1 ' + (100 * a1 / t1).toFixed(1) + '%');
  }
  if (process.env.DUMP) { IDS.forEach(id => { if (id === +process.env.DUMP) winners[id].forEach(b => { const v32 = Sim.verdict(play(id, b, 32)), v64 = Sim.verdict(play(id, b, 64)); console.log('   dump', id, B.label(b), '32:', v32.win, f3(v32.bandFrac), '64:', v64.win, f3(v64.bandFrac)); }); }); }
  return { why, info };
}
SETTINGS.forEach((s, i) => {
  const t = Date.now(), r = evaluate(s), d = Object.keys(s).filter(k => s[k] !== base[k] || process.env.ALL).map(k => k + '=' + s[k]).join(' ') || 'defaults';
  console.log((r.why.length ? 'REJECT' : 'ACCEPT') + ' [' + d + '] (' + ((Date.now() - t) / 1000).toFixed(0) + 's)\n   H2: ' + r.info.h2 + '\n   H3: ' + r.info.h3 + '  H4: ' + r.info.h4 + '  H8: ' + r.info.h8 + (r.info.h6 ? '  H6: ' + r.info.h6 : '') + (r.why.length ? '\n   reasons: ' + r.why.join('; ') : ''));
});

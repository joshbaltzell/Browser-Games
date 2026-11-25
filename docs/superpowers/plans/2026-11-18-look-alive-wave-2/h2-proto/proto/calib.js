global.G2X = { e14: 3 };
const { mk, bio, rule, Sim, Lv, P } = require('./base2.js');
let seed = 5; const R = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }; const pick = a => a[Math.floor(R() * a.length)];
const mets = ['fermentation', 'respiration', 'heatps', 'fuelcell'], env = [[], ['tetraether'], ['pump'], ['lipids'], ['wall'], ['shell']], ins = [null, 'chaperones', 'polyamines', 'acidproof', 'repair'], div = [null, 'filament', 'naps', 'clock', 'copier'], sig = [null, 'quorum', 'radio'], mot = [null, 'pili', 'flagellum'];
const rfx = [null, bio('sporulate'), bio('stringent'), bio('sos'), bio('nightferm'), rule('temp', 'lt', 45, 'hotter')];
const avg = (a, f, t) => { let s = 0; for (let i = f; i <= t; i++) s += a[i]; return s / (t - f + 1); };
const rows = [];
for (const id of [11, 12, 13, 14]) { const D = Lv.dish(id); let k = 0; while (k < 150) { const parts = [].concat(pick(env), [pick(ins), pick(div), pick(sig), D.slots.includes('motor') ? pick(mot) : null].filter(Boolean)); const b = mk(2 + Math.floor(R() * 6), pick([0, 2, 4, 6, 8]), pick(mets), parts, pick(rfx)); if (!Sim.validate(D, b).ok) continue; k++;
  const r = Sim.play(P, D, b, { n: 32 }), H = r.H; rows.push({ id, win: r.v.win, alive: r.v.alive, heat: avg(H.heat, 1, 20), heatMax: Math.max(...H.heat), graze: avg(H.graze, 30, r.T), fin: r.v.finalShare }); } }
function best(f, name) { let bt = 0, ba = 0; for (let th = 0.002; th < 0.1; th += 0.001) { const ag = rows.filter(r => (f(r) < th) || !r.win).length; /* safe-bar never on a loser due to this cause is not testable alone; report: fraction of winners safe and losers-with-high-f */ const winSafe = rows.filter(r => r.win && f(r) < th).length / rows.filter(r => r.win).length; const dead = rows.filter(r => !r.alive), deadUnsafe = dead.filter(r => f(r) >= th).length / Math.max(1, dead.length); const sc = winSafe + deadUnsafe; if (sc > ba) { ba = sc; bt = th; } } return name + ' best line ' + bt.toFixed(3) + ' score ' + ba.toFixed(3); }
console.log(best(r => r.heat, 'heat (mean loss ticks 1-20)'));
console.log(best(r => r.graze, 'graze (mean loss ticks 30-300)'));
for (const th of [0.01, 0.015, 0.02, 0.025, 0.03]) { const w = rows.filter(r => r.win), l = rows.filter(r => !r.win); console.log('heat', th, 'winners safe', w.filter(r => r.heat < th).length + '/' + w.length, 'dead w/ heat>=th', rows.filter(r => !r.alive && r.heat >= th).length + '/' + rows.filter(r => !r.alive).length); }
for (const th of [0.008, 0.01, 0.012, 0.015, 0.02]) { const w = rows.filter(r => r.win); console.log('graze', th, 'winners safe', w.filter(r => r.graze < th).length + '/' + w.length, 'losers graze>=th', rows.filter(r => !r.win && r.graze >= th).length + '/' + rows.filter(r => !r.win).length); }

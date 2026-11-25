// random legal builds on dishes 11-14 at 32x32: win rates, slot patterns, cross-dish winners
const { probe, mk, bio, rule, Sim, Lv, C } = require('./base2.js');
let seed = 7; const R = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
const pick = a => a[Math.floor(R() * a.length)];
const N = +process.argv[2] || 300;
const mets = ['fermentation', 'respiration', 'heatps', 'fuelcell'];
const env = [[], ['tetraether'], ['pump'], ['lipids'], ['wall'], ['shell']];
const ins = [null, 'chaperones', 'polyamines', 'acidproof', 'repair'];
const div = [null, 'filament', 'naps', 'clock', 'copier'];
const sig = [null, 'quorum', 'radio'];
const mot = [null, 'pili', 'flagellum'];
const rfx = [null, bio('sporulate'), bio('stringent'), bio('sos'), bio('nightferm'), rule('temp', 'lt', 45, 'hotter'), rule('temp', 'lt', 50, 'hotter')];
const key = b => [b.metabolism].concat(b.parts.slice().sort()).join('+') + '|' + (b.reflex ? (b.reflex.id || 'rule' + b.reflex.value) : '-');
const pattern = (D, b) => { const sl = Sim.toSlots(b); return ['power', 'envelope', 'insides', 'division', 'signal', 'motor', 'reflex'].map(k => { const v = sl[k]; return Array.isArray(v) ? (v.length ? 'E' : '_') : v ? k[0] : '_'; }).join(''); };
const out = {};
for (const id of [11, 12, 13, 14]) {
  const D = Lv.dish(id); let tried = 0, wins = []; const seen = new Set();
  while (tried < N) {
    const parts = [].concat(pick(env), [pick(ins), pick(div), pick(sig), D.slots.includes('motor') ? pick(mot) : null].filter(Boolean));
    const b = mk(2 + Math.floor(R() * 6), pick([0, 2, 4, 6, 8]), pick(mets), parts, pick(rfx));
    if (!Sim.validate(D, b).ok) continue;
    const k = JSON.stringify(b); if (seen.has(k)) continue; seen.add(k); tried++;
    const r = probe(id, b, 32); if (r.win) wins.push(b);
  }
  const pats = new Set(wins.map(b => pattern(D, b))), sets = new Set(wins.map(key));
  out[id] = wins;
  console.log('dish', id, 'wins', wins.length, 'of', tried, (100 * wins.length / tried).toFixed(1) + '%', 'card sets', sets.size, 'slot patterns', pats.size, [...pats].slice(0, 8).join(' '));
  console.log('   e.g.', wins.slice(0, id === 14 ? 9 : 4).map(b => b.pace + '/' + b.slop + ' ' + key(b)).join(' ; '));
}
// cross: does any winner of one dish win all four?
let all4 = 0, best = 0;
const cand = [].concat(...Object.values(out));
for (const b of cand) { let c = 0; for (const id of [11, 12, 13, 14]) if (Sim.validate(Lv.dish(id), b).ok && probe(id, b, 32).win) c++; if (c === 4) { all4++; console.log('ALL4', JSON.stringify(b)); } if (c > best) best = c; }
console.log('candidates', cand.length, 'win all four:', all4, 'best', best);

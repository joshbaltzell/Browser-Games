// node run.js  -- prototype probe for habitat 2
const Sim = require('./sim.js'), Lv = require('./levels.js'), L2 = require('./levels2.js'), C = require('./cards.js');
const P = Lv.PLANET;
const mk = (pace, slop, met, parts, reflex) => ({ pace, slop, metabolism: met, parts: parts || [], reflex: reflex || null });
const bio = id => ({ kind: 'bio', id });
const rule = (sensor, cmp, value, action) => ({ kind: 'machine', sensor, cmp, value, action });
function avg(a, f, t) { let s = 0, c = 0; for (let i = f; i <= t; i++) { s += a[i]; c++; } return c ? s / c : 0; }
function probe(id, b, n, o) {
  const D = Lv.dish(id), v0 = Sim.validate(D, b);
  const r = Sim.play(P, D, b, Object.assign({ n: n || 16 }, o || {})), H = r.H, T = r.T;
  let mn = 1, below = 0; for (let t = 30; t <= T; t++) { if (H.share[t] < mn) mn = H.share[t]; }
  return { ok: v0.ok ? '' : 'ILLEGAL:' + v0.problems.join('|'), win: r.v.win, alive: r.v.alive, band: +r.v.bandFrac.toFixed(2), fin: +(r.v.finalShare * 100).toFixed(1), stg: r.v.maxStage,
    heat10: +avg(H.heat, 1, 20).toFixed(3), graze: +avg(H.graze, 30, T).toFixed(4), cool: +avg(H.cool, 30, T).toFixed(2), min: +(mn * 100).toFixed(1), peak: +(Math.max(...H.share) * 100).toFixed(1) };
}
module.exports = { probe, mk, bio, rule, Sim, Lv, L2, P, C };
if (require.main === module) {
  const W10 = mk(3, 6, 'fermentation', ['acidproof'], bio('sporulate'));
  const list = [
    [11, 'carry W10', W10],
    [11, '+chap', mk(3, 6, 'fermentation', ['acidproof', 'chaperones'], bio('sporulate'))],
    [11, 'chap swap', mk(3, 6, 'fermentation', ['chaperones'], bio('sporulate'))],
    [11, 'poly swap', mk(3, 6, 'fermentation', ['polyamines'], bio('sporulate'))],
    [11, '+tetra', mk(3, 6, 'fermentation', ['acidproof', 'tetraether'], bio('sporulate'))],
    [11, 'heatps', mk(3, 6, 'heatps', ['acidproof'], bio('sporulate'))],
  ];
  for (const [id, nm, b] of list) console.log(id, nm.padEnd(14), JSON.stringify(probe(id, b, 16)), JSON.stringify(probe(id, b, 64)));
}

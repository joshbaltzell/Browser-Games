// Pattern search helpers for dev/check.js and level tuning. Seeded, no Math.random.
const Sim = require('../sim.js');
const Kit = require('../../kit/kit.js');

const emptyRows = lv => lv.fixed.map(f => ({ perch: f.perch, type: f.type, pattern: [0, 0, 0, 0, 0, 0, 0, 0] }));
const noGoal = lv => Object.assign({}, lv, { goal: null });
const clone = pls => pls.map(p => ({ perch: p.perch, type: p.type, pattern: p.pattern.slice() }));

function score(lv, pls, opts) {
  const r = Sim.run(lv, pls, opts);
  return { r: r, s: (r.won ? 1e6 : 0) + r.lilies * 1000 + r.dealt * 10 + r.steps / 100 };
}

// Hill climb over patterns. opts: {budget, rows:[allowed row indices], noGroove, goal:true to keep the goal,
// seed, restarts, iters, stop:true to stop at the first win with 3+ lilies}. Returns {best: score, pls, won, lilies}.
function climb(lv, o) {
  const rng = Kit.rng(o.seed || 1), L = o.goal ? lv : noGoal(lv);
  const rows = o.rows || lv.fixed.map((f, i) => i), budget = o.budget || lv.budget;
  let best = null;
  for (let rs = 0; rs < (o.restarts || 4); rs++) {
    let pls = emptyRows(lv);
    const k = 2 + Math.floor(rng() * (budget - 1));
    for (let j = 0; j < k; j++) pls[rows[Math.floor(rng() * rows.length)]].pattern[Math.floor(rng() * 8)] = 1;
    if (Sim.notes(pls) > budget) continue;
    const sc = p => { const x = score(L, p, { noGroove: o.noGroove }); if (o.gb && x.r.won && x.r.lilies >= 3) x.s += Sim.groove(p).score * o.gb; return x; };
    let cur = sc(pls);
    for (let it = 0; it < (o.iters || 400); it++) {
      const nx = clone(pls);
      const mv = rng();
      const r = rows[Math.floor(rng() * rows.length)], s = Math.floor(rng() * 8);
      if (mv < 0.5) nx[r].pattern[s] ^= 1;
      else { // move a note
        const cells = [];
        nx.forEach((p, ri) => p.pattern.forEach((v, si) => { if (v) cells.push([ri, si]); }));
        if (cells.length) { const c = cells[Math.floor(rng() * cells.length)]; nx[c[0]].pattern[c[1]] = 0; nx[r].pattern[s] = 1; }
      }
      for (let ri = 0; ri < nx.length; ri++) if (!rows.includes(ri)) nx[ri].pattern.fill(0);
      if (Sim.notes(nx) > budget || Sim.notes(nx) === 0) continue;
      const c2 = sc(nx);
      if (c2.s >= cur.s) { pls = nx; cur = c2; }
      if (o.stop && !o.gb && cur.r.won && cur.r.lilies >= 3) break;
    }
    if (!best || cur.s > best.s) best = { s: cur.s, pls: clone(pls), won: cur.r.won, lilies: cur.r.lilies };
    if (o.stop && best.won && best.lilies >= 3) break;
  }
  return best;
}

// Random in-budget patterns (1..budget notes spread over every row). Win rate with the level's goal.
function randomRate(lv, n, seed, opts) {
  const rng = Kit.rng(seed);
  let wins = 0;
  for (let i = 0; i < n; i++) {
    const pls = emptyRows(lv), k = 1 + Math.floor(rng() * lv.budget);
    for (let j = 0; j < k; j++) pls[Math.floor(rng() * pls.length)].pattern[Math.floor(rng() * 8)] = 1;
    if (Sim.run(lv, pls, opts).won) wins++;
  }
  return wins / n;
}

module.exports = { emptyRows, noGoal, clone, climb, randomRate, score };

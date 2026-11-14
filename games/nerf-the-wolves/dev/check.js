// Run: node games/nerf-the-wolves/dev/check.js
const D = require('../data.js');
const S = require('../sim.js');
const fails = [];
function ok(c, msg) { if (!c) fails.push(msg); }
function within(v, lo, hi) { return v >= lo && v <= hi; }
const f = o => Object.keys(o).map(k => k + ' ' + o[k].toFixed(0)).join(', ');

// Starting state (puzzle 1, the Dire Wolf, nothing bought)
const p1 = D.PUZZLES[0];
const st = S.start(p1).wr;
ok(within(st.wolf, 66, 74), 'start wolf ' + st.wolf.toFixed(1));
ok(within(st.rabbit, 27, 36), 'start rabbit ' + st.rabbit.toFixed(1));
ok(st.hawk > 54, 'start hawk ' + st.hawk.toFixed(1));
['deer', 'bee', 'giraffe'].forEach(k => ok(within(st[k], 38, 60), 'start ' + k + ' ' + st[k].toFixed(1)));
// pick-weighted mean is 50 for settled rates
const sr = S.start(p1);
let mean = 0; D.SPECIES_ORDER.forEach(k => { mean += sr.picks[k] * sr.settled[k]; });
ok(Math.abs(mean - 50) < 1e-6, 'settled mean ' + mean);

// Alarm Call raises the rabbit win rate
const withAlarm = S.puzzle(p1, ['alarm'], 1).wr.rabbit, without = S.puzzle(p1, [], 1).wr.rabbit;
ok(withAlarm > without, 'alarm raises rabbit ' + without.toFixed(1) + ' -> ' + withAlarm.toFixed(1));

// Same seed gives the same 30 encounters; a different seed does not
const e1 = JSON.stringify(S.puzzle(p1, [], 42).encounters), e2 = JSON.stringify(S.puzzle(p1, [], 42).encounters), e3 = JSON.stringify(S.puzzle(p1, [], 43).encounters);
ok(e1 === e2, 'same seed, same encounters');
ok(e1 !== e3, 'different seed, different encounters');
ok(S.puzzle(p1, [], 42).encounters.length === 30, '30 encounters');

// Encounter tallies follow the bars (average over many seeds)
const tally = {}, seen = {};
D.SPECIES_ORDER.forEach(k => { tally[k] = 0; seen[k] = 0; });
for (let s = 1; s <= 300; s++) S.puzzle(p1, [], s).encounters.forEach(e => { seen[e.a]++; seen[e.b]++; tally[e.winner]++; });
// encounters never pair a species with itself, so remove the 50% self-matchup from the expected rate
const exp = {};
D.SPECIES_ORDER.forEach(k => { exp[k] = (st[k] - 50 * sr.basePicks[k]) / (1 - sr.basePicks[k]); });
D.SPECIES_ORDER.forEach(k => { const r = tally[k] / seen[k] * 100; ok(Math.abs(r - exp[k]) < 8, 'tally ' + k + ' ' + r.toFixed(1) + ' vs ' + st[k].toFixed(1)); });

// Every encounter kind matches its outcome
S.puzzle(p1, [], 5).encounters.forEach(e => {
  ok(e.winner === e.a || e.winner === e.b, 'winner is a combatant');
  ok((e.kind === 'hunt') === (e.winner === e.a), 'kind matches winner');
});

// Prayers: every species and situation has at least one line, six lines per species
D.SPECIES_ORDER.forEach(sp => {
  let n = 0;
  D.SITUATIONS.forEach(sit => { const l = (D.PRAYERS[sp] || {})[sit]; ok(l && l.length >= 1, 'prayer ' + sp + '/' + sit); n += l ? l.length : 0; });
  ok(n >= 6, 'prayers for ' + sp + ': ' + n);
});
const pr = S.puzzle(p1, ['alarm'], 3).prayers;
ok(pr.length >= 1 && pr.length <= 2 && pr.every(p => p.text && p.species), 'a run produces one or two prayers');

// Puzzles 1 to 3
let n = 0;
D.PUZZLES.forEach(p => {
  n++;
  const none = S.puzzle(p, [], 1);
  ok(!none.solved, 'puzzle ' + p.id + ' is unsolved with nothing bought');
  const sol = S.solve(p);
  ok(!!sol, 'puzzle ' + p.id + ' has a solution within budget ' + p.budget);
  if (sol) {
    ok(sol.cost === p.par, 'puzzle ' + p.id + ' par ' + p.par + ' but cheapest is ' + sol.cost);
    ok(S.puzzle(p, sol.bought, 1).solved, 'puzzle ' + p.id + ' solution solves');
    ok(sol.cost <= p.budget, 'puzzle ' + p.id + ' within budget');
  }
  ok(!S.solvedWith(p, p.offers), 'puzzle ' + p.id + ': buying every offer once does not solve it');
  const rep = p.offers.slice();
  p.offers.forEach(id => { if (D.SKILLS[id].repeat) for (let i = 0; i < 6; i++) rep.push(id); });
  ok(!S.solvedWith(p, rep), 'puzzle ' + p.id + ': buying everything, repeats included, does not solve it');
  ok(p.budget >= 4 && p.budget <= 9, 'puzzle ' + p.id + ' budget in 4..9');
  console.log('puzzle ' + p.id + ' start: ' + f(none.wr) + (sol ? ' | par ' + sol.cost + ': ' + sol.bought.join('+') : ''));
});

if (fails.length) { fails.forEach(m => console.log('FAIL ' + m)); process.exit(1); }
console.log('wolf sim ok: ' + n + ' puzzles');

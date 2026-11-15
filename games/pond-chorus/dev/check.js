// Run: node games/pond-chorus/dev/check.js
const Sim = require('../sim.js');
const LEVELS = require('../levels.js');
const Kit = require('../../kit/kit.js');
let fails = 0;
function ok(c, msg) { if (!c) { console.log('FAIL ' + msg); fails++; } }

ok(Sim.power([1, 0, 0, 0, 0, 0, 0, 0], 0) === 3, 'power: note after 2+ rests (wrapping) is 3');
ok(Sim.power([1, 1, 1, 0, 0, 0, 0, 0], 1) === 1, 'power: note after a note is 1');
ok(Sim.power([0, 0, 0, 0, 0, 0, 0, 0], 3) === 0, 'power: rest is 0');
ok(Sim.power([1, 0, 1, 0, 0, 0, 0, 0], 2) === 2, 'power: one rest gives 2');
ok(Sim.power([1, 0, 0, 0, 0, 0, 0, 0], 0, true, true) === 4, 'power: capped at 4');

const g = Sim.geometry();
ok(g.stones.length === 22 && g.perches.length === 6, 'geometry counts');
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const covered = g.stones.filter(s => dist(s, g.perches[1]) <= Sim.RULES.range.frog).length;
ok(covered === 2, 'frog on perch 1 covers exactly 2 stones (got ' + covered + ')');
ok(dist(g.stones[21], { x: 640, y: 300 }) < 140, 'stone 21 is near the lilies');

const empty = lv => lv.fixed.map(f => ({ perch: f.perch, type: f.type, pattern: [0, 0, 0, 0, 0, 0, 0, 0] }));
const clone = pls => pls.map(p => ({ perch: p.perch, type: p.type, pattern: p.pattern.slice() }));
const noGoal = lv => Object.assign({}, lv, { goal: null });

// Every pattern that uses only creature type `type` (at most 2 rows of it, so 2^16 patterns) and no more than
// `budget` notes: does any of them clear the wave? Run without the goal so this is only about the enemies.
function typeOnlyWins(lv, type, budget) {
  const rows = lv.fixed.map((f, i) => f.type === type ? i : -1).filter(i => i >= 0);
  if (rows.length > 2) return null;   // too many patterns to enumerate
  const bits = rows.length * 8, ng = noGoal(lv);
  for (let m = 0; m < (1 << bits); m++) {
    let c = 0, x = m;
    while (x) { c += x & 1; x >>= 1; }
    if (c > budget) continue;
    const pls = empty(lv);
    rows.forEach((r, j) => { for (let s = 0; s < 8; s++) if ((m >> (j * 8 + s)) & 1) pls[r].pattern[s] = 1; });
    const r = Sim.run(ng, pls);
    if (r.won && r.lilies >= 3) return true;
  }
  return false;
}

const rate = {}, summary = [];
LEVELS.forEach(lv => {
  const id = 'night ' + lv.id;
  const e = Sim.run(lv, empty(lv));
  ok(!e.won, id + ': empty placements lose');
  ok(Sim.notes(lv.solution) <= lv.budget, id + ': solution within budget');
  ok(lv.goal && Sim.notes(empty(lv)) === 0 && !Sim.goalProgress(lv, empty(lv)).met, id + ': goal is not met by an empty pattern');
  ok(Sim.goalProgress(lv, lv.solution).met, id + ': solution meets the goal');
  let goalNotes = 0;
  Object.keys(lv.goal.voices).forEach(k => { goalNotes += lv.goal.voices[k]; });
  ok(goalNotes <= lv.budget, id + ': goal needs ' + goalNotes + ' notes, budget ' + lv.budget);
  const s = Sim.run(lv, lv.solution);
  ok(s.won && s.lilies >= 3, id + ': solution wins with 3+ lilies (won=' + s.won + ' lilies=' + s.lilies + ')');

  // the goal really gates the win: the same solution with its last note removed (goal short by one) must not win
  const cut = clone(lv.solution);
  outer: for (let r = cut.length - 1; r >= 0; r--) for (let k = 7; k >= 0; k--) if (cut[r].pattern[k]) { cut[r].pattern[k] = 0; break outer; }
  if (!Sim.goalProgress(lv, cut).met) ok(!Sim.run(lv, cut).won, id + ': a pattern short of the goal does not win');

  // nights with a cricket (3 and up): neither creature type alone can clear the wave inside the budget
  const types = lv.roster;
  if (lv.id >= 3) types.forEach(t => {
    const w = typeOnlyWins(lv, t, lv.budget);
    ok(w === false, id + ': ' + t + ' alone (' + lv.budget + ' notes) cannot clear the wave');
  });
  // the voices in the goal include every roster type from night 3 on
  if (lv.id >= 3) types.forEach(t => ok((lv.goal.voices[t] || 0) >= 2, id + ': goal asks for ' + t + ' voices'));
  if (lv.id >= 4) ok(lv.goal.harmony >= 2, id + ': goal asks for harmony');

  // the ramp: more notes and more enemies every night
  summary.push({ id: lv.id, goalNotes: goalNotes, budget: lv.budget, enemies: lv.wave.length, pads: lv.fixed.length, harmony: lv.goal.harmony || 0 });

  // random in-budget patterns (1..budget notes, seeded). Rarely clears a night; printed, not a design target.
  const rng = Kit.rng(1000 + lv.id);
  let wins = 0;
  for (let n = 0; n < 300; n++) {
    const pls = empty(lv);
    const k = 1 + Math.floor(rng() * lv.budget);
    for (let j = 0; j < k; j++) {
      const p = pls[Math.floor(rng() * pls.length)];
      p.pattern[Math.floor(rng() * 8)] = 1;
    }
    if (Sim.run(lv, pls).won) wins++;
  }
  rate[lv.id] = wins / 300;
  ok(rate[lv.id] <= 0.70, id + ': random win rate ' + rate[lv.id].toFixed(3) + ' is at most 70%');
});
for (let i = 1; i < summary.length; i++) {
  ok(summary[i].goalNotes >= summary[i - 1].goalNotes, 'ramp: night ' + summary[i].id + ' asks for at least as many notes as the night before');
  ok(summary[i].enemies >= summary[i - 1].enemies, 'ramp: night ' + summary[i].id + ' has at least as many enemies as the night before');
}
ok(LEVELS[0].fixed.length === 1 && LEVELS[0].roster.length === 1, 'night 1 is one frog');
ok(LEVELS[0].goal.voices.frog <= 3 && LEVELS[0].budget <= 4, 'night 1 is sparse: at most 3 croaks needed');
ok(LEVELS[0].wave.length >= 5, 'night 1 still loses if nothing is sung (5+ slugs)');
let minGap = 99;
for (let i = 1; i < LEVELS[0].wave.length; i++) minGap = Math.min(minGap, LEVELS[0].wave[i].step - LEVELS[0].wave[i - 1].step);
ok(minGap >= 16, 'night 1 slugs are at least 2 loops apart (gap ' + minGap + ')');
ok(LEVELS.length >= 3 && LEVELS.length <= 6, 'between 3 and 6 nights');
// hints exist for the fixed creatures on night 1
ok(Sim.hints(LEVELS[0])[0].some(x => x), 'night 1 has hint pads');
console.log('random win rates', JSON.stringify(rate));
console.log('ramp', JSON.stringify(summary));
if (fails) { console.log(fails + ' failed'); process.exit(1); }
console.log('pond sim ok: ' + LEVELS.length + ' nights');

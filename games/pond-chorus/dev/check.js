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
const rate = {};
LEVELS.forEach(lv => {
  const e = Sim.run(lv, empty(lv));
  ok(!e.won, 'night ' + lv.id + ': empty placements lose');
  ok(Sim.notes(lv.solution) <= lv.budget, 'night ' + lv.id + ': solution within budget');
  const s = Sim.run(lv, lv.solution);
  ok(s.won && s.lilies >= 3, 'night ' + lv.id + ': solution wins with 3+ lilies (won=' + s.won + ' lilies=' + s.lilies + ')');
  // random in-budget patterns
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
  if (lv.id >= 2) ok(rate[lv.id] >= 0.02 && rate[lv.id] <= 0.70, 'night ' + lv.id + ': random win rate ' + rate[lv.id].toFixed(3) + ' in 2%..70%');
});
// hints exist for the fixed creatures
ok(LEVELS[0].fixed.length === 1 && Sim.hints(LEVELS[0])[0].some(x => x), 'night 1 has hint pads');
console.log('random win rates', JSON.stringify(rate));
if (fails) { console.log(fails + ' failed'); process.exit(1); }
console.log('pond sim ok: ' + LEVELS.length + ' nights');

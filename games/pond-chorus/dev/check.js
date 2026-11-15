// Run: node games/pond-chorus/dev/check.js   (about a minute)
// Rules, groove, the four creatures, every night's solution, which nights need groove, song codes and the teaching data.
const Sim = require('../sim.js');
const LEVELS = require('../levels.js');
const Kit = require('../../kit/kit.js');
const S = require('./search.js');
let fails = 0, t0 = Date.now();
function ok(c, msg) { if (!c) { console.log('FAIL ' + msg); fails++; } }
const lap = name => { console.log('  [' + ((Date.now() - t0) / 1000).toFixed(1) + 's] ' + name); };

// ---------- power, geometry ----------
ok(Sim.power([1, 0, 0, 0, 0, 0, 0, 0], 0) === 3, 'power: note after 2+ rests (wrapping) is 3');
ok(Sim.power([1, 1, 1, 0, 0, 0, 0, 0], 1) === 1, 'power: note after a note is 1');
ok(Sim.power([0, 0, 0, 0, 0, 0, 0, 0], 3) === 0, 'power: rest is 0');
ok(Sim.power([1, 0, 1, 0, 0, 0, 0, 0], 2) === 2, 'power: one rest gives 2');
ok(Sim.power([1, 0, 0, 0, 0, 0, 0, 0], 0, true, true) === 4, 'power: capped at 4');
ok(Kit.rhythmPower(0) === 1 && Kit.rhythmPower(1) === 2 && Kit.rhythmPower(2) === 3 && Kit.rhythmPower(5) === 3, 'Kit.rhythmPower agrees with the rest rule');

const g = Sim.geometry();
ok(g.stones.length === 22 && g.perches.length === 6, 'geometry counts');
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const covered = (perch, type) => g.stones.filter(s => dist(s, g.perches[perch]) <= Sim.RULES.range[type]).length;
ok(covered(1, 'frog') === 2, 'frog on perch 1 covers exactly 2 stones (got ' + covered(1, 'frog') + ')');
ok(dist(g.stones[21], { x: 640, y: 300 }) < 140, 'stone 21 is near the lilies');
const R = Sim.RULES.range;
ok(R.owl > R.jar && R.jar > R.cricket && R.cricket > R.frog, 'ranges: owl > jar > cricket > frog (' + [R.owl, R.jar, R.cricket, R.frog] + ')');

// ---------- groove: pure scoring, one rule at a time ----------
const row = (type, pattern, perch) => ({ perch: perch == null ? 1 : perch, type: type, pattern: pattern });
const gs = pls => Sim.groove(pls).score;
const F = p => [row('frog', p)];
ok(Sim.groove(F([0, 0, 0, 0, 0, 0, 0, 0])).tier === 0 && gs(F([0, 0, 0, 0, 0, 0, 0, 0])) === 0, 'groove: silence scores 0 (Rough)');
ok(Sim.groove(F([1, 0, 0, 0, 1, 0, 0, 0])).tier === 2, 'groove: two croaks on the strong beats are Groovy');
ok(Sim.groove(F([1, 1, 1, 1, 1, 1, 1, 1])).tier === 0, 'groove: a wall of notes is Rough');
ok(gs(F([1, 0, 0, 0, 1, 0, 0, 0])) > gs(F([0, 1, 0, 0, 0, 1, 0, 0])), 'groove rule beat: strong steps (0, 4) beat off-beat steps (1, 5)');
ok(gs(F([0, 0, 1, 0, 0, 0, 1, 0])) > gs(F([0, 1, 0, 0, 0, 1, 0, 0])), 'groove rule beat: steps 2 and 6 beat steps 1 and 5');
ok(gs(F([1, 0, 0, 0, 1, 0, 0, 0])) > gs(F([1, 1, 0, 0, 0, 0, 0, 0])), 'groove rule pulse: even spacing beats a clump');
ok(gs(F([1, 0, 1, 0, 1, 0, 1, 0])) > gs(F([1, 1, 0, 1, 0, 0, 1, 0])), 'groove rule pulse: a steady pulse beats an uneven one with the same note count');
ok(gs(F([1, 0, 0, 0, 1, 0, 0, 0])) > gs(F([1, 1, 0, 0, 1, 1, 0, 0])), 'groove rule rests: notes after a rest beat notes after notes');
const duo = (f, c) => [row('frog', f), row('cricket', c, 0)];
ok(gs(duo([1, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0])) > gs(duo([1, 0, 1, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0])), 'groove rule call and response: a frog and a cricket taking turns beat one voice alone');
ok(Sim.groove(duo([1, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0])).parts.call === 1, 'groove: alternating voices give full call-and-response');
ok(gs(duo([1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0])) > gs(duo([1, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0])), 'groove rule harmony: two voices on one step beat the same two voices a step apart');
ok(Sim.groove(duo([1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0])).parts.harmony === 1, 'groove: two harmony steps give full harmony');
const gt = Sim.RULES.groove;
ok(gt.mult[0] === 1 && gt.mult[1] > 1 && gt.mult[2] > gt.mult[1], 'groove multipliers rise with the tier (' + gt.mult + ')');
ok(Sim.groove(F([1, 0, 0, 0, 1, 0, 0, 0])).mult === gt.mult[2], 'groove: the tier sets the multiplier');
// pure: the same input always gives the same score, and the input is not touched
const probe = duo([1, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0]), snap = JSON.stringify(probe);
ok(gs(probe) === gs(probe) && JSON.stringify(probe) === snap, 'groove is pure');

// ---------- the groove multiplier really hits harder ----------
// A scripted state: no wave, enemies placed by hand. enemy(type, stone) builds one.
const bare = { wave: [], goal: null, fixed: [] };
const spec = Sim.RULES.enemy;
let eid = 1;
const enemy = (type, stone) => ({ id: eid++, type: type, stone: stone, hp: spec[type].hp, armor: spec[type].armor, every: spec[type].every, cd: 3, stun: 0, lit: false, hitT: 0 });
function scene(pls, enemies, opts) {
  const st = Sim.create(bare, pls, opts);
  st.enemies = enemies;
  return st;
}
{
  // a frog on perch 1 sings step 0 after rests (power 3). Against an Old Shellback (armor 6):
  // Rough x1: 3 + 1 - 6 < 0, nothing. Groovy x2: 6 + 1 - 6 = 1.
  const pls = F([1, 0, 0, 0, 1, 0, 0, 0]);
  const a = scene(pls, [enemy('shellback', 5)], { noGroove: true }); Sim.step(a);
  const b = scene(pls, [enemy('shellback', 5)]); Sim.step(b);
  ok(a.enemies[0].hp === 14, 'frog: power 3 does nothing to a shellback with groove off (hp ' + a.enemies[0].hp + ')');
  ok(Math.abs((14 - b.enemies[0].hp) - 1) < 1e-9, 'groove: a Groovy x' + gt.mult[2] + ' note does 1 to the same shellback (got ' + (14 - b.enemies[0].hp) + ')');
  ok((14 - b.enemies[0].hp) > (14 - a.enemies[0].hp), 'groove: a Groovy note does more damage than the same note at Rough');
}

// ---------- creature roles ----------
{ // FROG: one target, the one furthest along, power + 1 - armor
  const pls = F([1, 0, 0, 0, 0, 0, 0, 0]);
  const st = scene(pls, [enemy('snail', 5), enemy('snail', 6)], { noGroove: true });
  const ev = Sim.step(st).filter(e => e.type === 'hit');
  ok(ev.length === 1, 'frog: hits exactly one enemy');
  ok(st.enemies.find(e => e.stone === 6).hp < 4 && st.enemies.find(e => e.stone === 5).hp === 4, 'frog: picks the enemy furthest along the path');
  const out = scene(pls, [enemy('slug', 12)], { noGroove: true }); Sim.step(out);
  ok(out.enemies[0].hp === 2, 'frog: nothing out of range is hurt');
}
{ // CRICKET: every enemy in range, small damage (power - armor)
  const pls = [row('cricket', [1, 0, 0, 0, 0, 0, 0, 0], 1)];
  const st = scene(pls, [enemy('slugling', 5), enemy('slugling', 6), enemy('slugling', 7), enemy('snail', 5)], { noGroove: true });
  const ev = Sim.step(st).filter(e => e.type === 'hit');
  ok(ev.length === 4, 'cricket: hits every enemy in range (' + ev.length + ' of 4)');
  ok(st.enemies.length === 1 && st.enemies[0].type === 'snail' && st.enemies[0].hp === 3, 'cricket: kills sluglings but only scratches a snail (armor 2): hp ' + (st.enemies[0] && st.enemies[0].hp));
}
{ // OWL: no damage, slows everything in its wide range, nothing outside it
  const pls = [row('owl', [1, 0, 0, 0, 0, 0, 0, 0], 3)];
  const st = scene(pls, [enemy('snail', 7), enemy('snail', 15), enemy('slugling', 1)], { noGroove: true });
  st.enemies.forEach(e => { e.cd = 0; });
  const ev = Sim.step(st);
  ok(!ev.some(e => e.type === 'hit'), 'owl: does no damage');
  ok(st.enemies.every(e => e.hp === spec[e.type].hp), 'owl: nobody loses hp');
  ok(ev.filter(e => e.type === 'stun').length === 2, 'owl: slows both enemies in its range, not the one outside (stunned ' + ev.filter(e => e.type === 'stun').length + ')');
  const before = st.enemies.map(e => e.stone);
  Sim.step(st);
  ok(st.enemies[0].stone === before[0] && st.enemies[1].stone === before[1], 'owl: slowed enemies skip their next move');
  ok(st.enemies[2].stone === before[2] + 1, 'owl: an enemy outside its range keeps moving');
  const frogRange = covered(1, 'frog'), owlRange = covered(3, 'owl');
  ok(owlRange >= 3 * frogRange, 'owl: reaches at least 3x the stones a frog does (' + owlRange + ' vs ' + frogRange + ')');
}
{ // FIREFLY JAR: no damage; lights enemies (armor) and boosts friends (power) for 3 steps
  const base = [row('frog', [0, 1, 0, 0, 0, 0, 0, 0], 2)];
  const withJar = base.concat([row('jar', [1, 0, 0, 0, 0, 0, 0, 0], 3)]);
  { // a frog on perch 1 is inside the jar's reach (perch 3): it sings the next step with +1 power
    const near = scene([row('frog', [0, 1, 0, 0, 0, 0, 0, 0], 1), row('jar', [1, 0, 0, 0, 0, 0, 0, 0], 3)], [enemy('snail', 6)], { noGroove: true });
    Sim.step(near); const ev = Sim.step(near);
    const sing = ev.find(e => e.type === 'sing' && e.kind === 'frog');
    ok(sing && sing.reasons.firefly && sing.power === Sim.power([0, 1, 0, 0, 0, 0, 0, 0], 1) + 1, 'jar: a friend in its reach sings +1 power the next step (power ' + (sing && sing.power) + ')');
    const far = scene([row('frog', [0, 1, 0, 0, 0, 0, 0, 0], 4), row('jar', [1, 0, 0, 0, 0, 0, 0, 0], 3)], [enemy('snail', 14)], { noGroove: true });
    Sim.step(far); const ev2 = Sim.step(far);
    const sing2 = ev2.find(e => e.type === 'sing' && e.kind === 'frog');
    ok(sing2 && !sing2.reasons.firefly && sing2.power === Sim.power([0, 1, 0, 0, 0, 0, 0, 0], 1), 'jar: a creature out of its reach gets no boost');
  }
  const sb = () => [enemy('snail', 9)];
  const plain = scene(base, sb(), { noGroove: true }); Sim.step(plain); Sim.step(plain);
  const lit = scene(withJar, sb(), { noGroove: true }); const e0 = Sim.step(lit); Sim.step(lit);
  ok(!e0.some(e => e.type === 'hit'), 'jar: its own note does no damage');
  ok(e0.some(e => e.type === 'lit'), 'jar: lights the enemy in its range');
  ok(lit.dealt > plain.dealt, 'jar: the lit snail takes more damage (' + lit.dealt + ' vs ' + plain.dealt + ')');
  // an Old Shellback (armor 6) shrugs off a power-3 croak; light takes 2 armor off it
  const sh = scene([row('frog', [0, 1, 0, 0, 0, 0, 0, 0], 2), row('jar', [1, 0, 0, 0, 0, 0, 0, 0], 3)], [enemy('shellback', 9)], { noGroove: true });
  Sim.step(sh); Sim.step(sh);
  ok(sh.dealt === 0, 'jar: a power-3 croak still cannot hurt a shellback, light or not, without more power');
  // the glow ends after 3 steps
  const late = scene([row('frog', [0, 0, 0, 0, 1, 0, 0, 0], 2), row('jar', [1, 0, 0, 0, 0, 0, 0, 0], 3)], sb(), { noGroove: true });
  for (let i = 0; i < 5; i++) Sim.step(late);
  ok(late.dealt === 2, 'jar: its light is gone four steps later (damage ' + late.dealt + ')');
}

// ---------- songs ----------
{
  const rng = Kit.rng(5);
  let good = true;
  for (let n = 0; n < 60; n++) {
    const pls = ['frog', 'cricket', 'owl', 'jar', 'frog', 'cricket'].slice(0, 1 + Math.floor(rng() * 6)).map((t, i) => row(t, Array.from({ length: 8 }, () => rng() < 0.4 ? 1 : 0), i));
    const code = Sim.encode(pls), back = Sim.decode(code);
    if (!back || back.length !== pls.length || back.some((b, i) => b.type !== pls[i].type || b.pattern.join('') !== pls[i].pattern.join(''))) good = false;
    if (!/^PC1-/.test(code)) good = false;
  }
  ok(good, 'song codes: encode then decode round-trips 60 random songs');
  ok(Sim.encode([row('frog', [1, 0, 0, 0, 1, 0, 0, 0])]) === 'PC1-F11', 'song codes: a frog on steps 0 and 4 is PC1-F11');
  ok(Sim.decode('nonsense') === null && Sim.decode('PC1-') === null && Sim.decode('PC1-X11') === null && Sim.decode('PC1-F1') === null && Sim.decode('PC2-F11') === null && Sim.decode(null) === null, 'song codes: bad text decodes to null');
}
lap('rules, groove, creatures, songs');

// ---------- nights ----------
const empty = S.emptyRows, clone = S.clone, noGoal = S.noGoal;
const clear = r => r.won && r.lilies >= 3;

// Every pattern that uses only the rows in `rows` (at most 2 rows, so 65 536 patterns) within `budget` notes,
// goal ignored: how many clear the wave with 3+ lilies?
function exhaustive(lv, rows, budget, opts) {
  const ng = noGoal(lv), bits = rows.length * 8;
  let wins = 0, tried = 0;
  for (let m = 1; m < (1 << bits); m++) {
    let c = 0, x = m;
    while (x) { c += x & 1; x >>= 1; }
    if (c > budget) continue;
    const pls = empty(lv);
    rows.forEach((r, j) => { for (let s = 0; s < 8; s++) if ((m >> (j * 8 + s)) & 1) pls[r].pattern[s] = 1; });
    tried++;
    if (clear(Sim.run(ng, pls, opts))) wins++;
  }
  return { wins: wins, tried: tried };
}
const rowsOf = (lv, type) => lv.fixed.map((f, i) => f.type === type ? i : -1).filter(i => i >= 0);
const rowsNot = (lv, type) => lv.fixed.map((f, i) => f.type !== type ? i : -1).filter(i => i >= 0);
const threat = lv => lv.wave.reduce((a, w) => a + Sim.RULES.enemy[w.type].hp * (1 + Sim.RULES.enemy[w.type].armor), 0);

const rate = {}, rateNoGroove = {}, summary = [], solGroove = {};
ok(LEVELS.length >= 8 && LEVELS.length <= 10, '8 to 10 nights (' + LEVELS.length + ')');
ok(LEVELS.filter(l => l.finale).length === 1 && LEVELS[LEVELS.length - 1].finale, 'exactly one finale, and it is the last night');
LEVELS.forEach(lv => {
  const id = 'night ' + lv.id;
  const goalNotes = Object.keys(lv.goal.voices).reduce((a, k) => a + lv.goal.voices[k], 0);
  ok(!Sim.run(lv, empty(lv)).won, id + ': empty placements lose');
  ok(lv.solution && Sim.notes(lv.solution) <= lv.budget, id + ': solution exists and is within budget');
  if (!lv.solution) return;
  ok(lv.solution.length === lv.fixed.length && lv.solution.every((p, i) => p.type === lv.fixed[i].type && p.perch === lv.fixed[i].perch), id + ': solution rows match the night\'s creatures');
  ok(Sim.notes(empty(lv)) === 0 && !Sim.goalProgress(lv, empty(lv)).met, id + ': goal is not met by an empty pattern');
  ok(Sim.goalProgress(lv, lv.solution).met, id + ': solution meets the goal');
  ok(goalNotes <= lv.budget, id + ': goal needs ' + goalNotes + ' notes, budget ' + lv.budget);
  const s = Sim.run(lv, lv.solution);
  ok(clear(s), id + ': solution wins with 3+ lilies (won=' + s.won + ' lilies=' + s.lilies + ')');
  solGroove[lv.id] = Sim.groove(lv.solution).name;
  ok(Sim.groove(lv.solution).tier >= 1, id + ': the verified solution is at least Steady (' + solGroove[lv.id] + ')');

  // a goal short by one note does not win
  const cut = clone(lv.solution);
  outer: for (let r = cut.length - 1; r >= 0; r--) for (let k = 7; k >= 0; k--) if (cut[r].pattern[k]) { cut[r].pattern[k] = 0; break outer; }
  if (!Sim.goalProgress(lv, cut).met) ok(!Sim.run(lv, cut).won, id + ': a pattern short of the goal does not win');

  // every creature type of the night is in the goal, and removing a type from the solution loses the night
  lv.roster.forEach(t => {
    ok((lv.goal.voices[t] || 0) >= 1, id + ': goal asks for ' + t);
    if (lv.id >= 3) {
      const minus = clone(lv.solution);
      rowsOf(lv, t).forEach(r => minus[r].pattern.fill(0));
      ok(!Sim.run(lv, minus).won, id + ': the solution without the ' + t + ' does not win the night');
    }
  });
  if (lv.id >= 6) ok(lv.goal.harmony >= 1, id + ': goal asks for harmony');
  ok(lv.roster.length === new Set(lv.fixed.map(f => f.type)).size && lv.fixed.every(f => lv.roster.includes(f.type)), id + ': roster lists the creature types on the pond');

  // random in-budget patterns (1..budget notes, seeded). Real rules, goal included. Groove off for comparison.
  rate[lv.id] = S.randomRate(lv, 400, 1000 + lv.id);
  rateNoGroove[lv.id] = S.randomRate(lv, 400, 1000 + lv.id, { noGroove: true });
  ok(rate[lv.id] <= 0.70, id + ': random win rate ' + rate[lv.id].toFixed(3) + ' is at most 70%');
  ok(lv.finale ? rate[lv.id] >= 0.003 : rate[lv.id] >= 0.03, id + ': random win rate ' + rate[lv.id].toFixed(3) + ' is not below ' + (lv.finale ? '0.3% (deliberate finale)' : '3%'));
  summary.push({ id: lv.id, goalNotes: goalNotes, budget: lv.budget, enemies: lv.wave.length, rows: lv.fixed.length, threat: threat(lv), solNotes: Sim.notes(lv.solution) });
});
lap('per-night solutions and random rates');

// ---------- each new creature is genuinely needed where it arrives ----------
const night = id => LEVELS.find(l => l.id === id);
{
  // night 3: neither the frog alone nor the cricket alone clears it
  const lv = night(3);
  ['frog', 'cricket'].forEach(t => {
    const r = exhaustive(lv, rowsOf(lv, t), lv.budget);
    ok(r.wins === 0, 'night 3: ' + t + ' alone cannot clear it (' + r.wins + ' of ' + r.tried + ' patterns)');
  });
  // night 4: the owl cannot clear it alone (every pattern), and no frog-only pattern clears it either
  const n4 = night(4);
  let r = exhaustive(n4, rowsOf(n4, 'owl'), 16);
  ok(r.wins === 0, 'night 4: the owl alone cannot clear it (' + r.wins + ' of ' + r.tried + ' patterns): it is support');
  r = exhaustive(n4, rowsOf(n4, 'frog'), 16);
  ok(r.wins === 0, 'night 4: the frog alone cannot clear it (' + r.wins + ' of ' + r.tried + ' patterns): it needs the owl');
  r = exhaustive(n4, [0, 1], n4.budget);
  ok(r.wins > 0, 'night 4: frog and owl together can (' + r.wins + ' of ' + r.tried + ' patterns within the budget)');
  console.log('  night 4: ' + r.wins + ' of ' + r.tried + ' frog+owl patterns clear it');
  // night 5: the jar is needed. Over every cricket+frog pattern there is no clear; the jar alone does no damage.
  const n5 = night(5);
  r = exhaustive(n5, rowsNot(n5, 'jar'), 16);
  ok(r.wins === 0, 'night 5: nothing without the jar clears it (' + r.wins + ' of ' + r.tried + ' cricket+frog patterns, any budget)');
  r = exhaustive(n5, rowsOf(n5, 'jar'), 16);
  ok(r.wins === 0, 'night 5: the jar alone cannot clear it');
  console.log('  night 5: cricket+frog without the jar: ' + exhaustive(n5, rowsNot(n5, 'jar'), 16).wins + ' of 65535 clear it');
  // owl and jar are support on every night they appear: alone they never clear (their notes do no damage)
  LEVELS.forEach(lv => {
    ['owl', 'jar'].forEach(t => {
      const rr = rowsOf(lv, t);
      if (rr.length === 1) ok(exhaustive(lv, rr, 16).wins === 0, 'night ' + lv.id + ': a ' + t + ' alone cannot clear it');
    });
  });
}
lap('creature roles');

// ---------- groove is required on the late nights ----------
// For nights 7, 8 and 9 the same solution with groove forced off loses. A seeded hill climb over patterns with groove off,
// given two more notes than the night allows and the goal ignored, never finds a clear. The same climb with groove on does.
// (A search is evidence, not a proof; the solution check and the random rates are exact.)
const gated = [7, 8, 9];
gated.forEach(id => {
  const lv = night(id);
  if (!lv.solution) return;
  const off = Sim.run(noGoal(lv), lv.solution, { noGroove: true });
  ok(!clear(off), 'night ' + id + ': the verified solution with groove off does not clear it (won=' + off.won + ' lilies=' + off.lilies + ')');
  const dOn = Sim.run(lv, lv.solution).dealt, dOff = Sim.run(lv, lv.solution, { noGroove: true }).dealt;
  ok(dOn > dOff * 1.15, 'night ' + id + ': groove adds real damage (' + dOn.toFixed(0) + ' vs ' + dOff.toFixed(0) + ')');
  let foundOff = false;
  for (let seed = 1; seed <= 3 && !foundOff; seed++) {
    const r = S.climb(lv, { seed: seed, restarts: 5, iters: 500, noGroove: true, budget: lv.budget + 2, stop: true });
    if (r && clear(r)) foundOff = true;
  }
  ok(!foundOff, 'night ' + id + ': a search with groove off and 2 extra notes finds no clear');
  ok(rateNoGroove[id] <= 0.005 && rate[id] >= 4 * Math.max(rateNoGroove[id], 0.002), 'night ' + id + ': random win rate ' + rate[id].toFixed(3) + ' with groove vs ' + rateNoGroove[id].toFixed(3) + ' without');
});
// earlier nights are friendlier: groove helps but is not what they hinge on
ok(Sim.groove(night(1).solution).tier >= 1 && Sim.groove(night(2).solution).tier >= 1, 'nights 1 and 2: the natural solutions already sound good');
lap('groove gating');

// ---------- the ramp ----------
for (let i = 1; i < summary.length; i++) {
  if (summary[i].id >= 7) ok(summary[i].threat > summary[i - 1].threat, 'ramp: night ' + summary[i].id + ' is more threatening than the night before (' + summary[i].threat + ' vs ' + summary[i - 1].threat + ')');
  ok(summary[i].rows >= summary[i - 1].rows, 'ramp: night ' + summary[i].id + ' has at least as many rows as the night before');
  if (summary[i].id >= 6) ok(summary[i].budget >= summary[i - 1].budget, 'ramp: night ' + summary[i].id + ' has at least the budget of the night before');
}
ok(night(4).budget <= 7 && night(5).budget <= 11, 'nights 4 and 5 stay small');
ok(rate[4] >= 0.03 && rate[5] >= 0.03 && rate[6] >= 0.03, 'nights 4 to 6 are easier than before (was 0.7%, 3.7%, 0%): ' + [rate[4], rate[5], rate[6]].map(x => (x * 100).toFixed(1) + '%').join(', '));
// the late nights are dense: the verified solution uses most of the budget on nights 8 and 9
ok(summary[summary.length - 1].solNotes >= 9, 'finale: the solution uses ' + summary[summary.length - 1].solNotes + ' notes');
// night 1 stays sparse and gentle
ok(LEVELS[0].fixed.length === 1 && LEVELS[0].roster.length === 1, 'night 1 is one frog');
ok(LEVELS[0].goal.voices.frog <= 3 && LEVELS[0].budget <= 4, 'night 1 is sparse: at most 3 croaks needed');
ok(LEVELS[0].wave.length >= 5, 'night 1 still loses if nothing is sung (5+ slugs)');
let minGap = 99;
for (let i = 1; i < LEVELS[0].wave.length; i++) minGap = Math.min(minGap, LEVELS[0].wave[i].step - LEVELS[0].wave[i - 1].step);
ok(minGap >= 16, 'night 1 slugs are at least 2 loops apart (gap ' + minGap + ')');
ok(Sim.hints(LEVELS[0])[0].some(x => x), 'night 1 has hint pads');

// ---------- teaching: who is introduced where, demos, cards ----------
{
  const seen = new Set(['frog']);
  LEVELS.forEach(lv => {
    const fresh = lv.roster.filter(t => !seen.has(t));
    ok(JSON.stringify((lv.intro || []).slice().sort()) === JSON.stringify(fresh.slice().sort()), 'night ' + lv.id + ': intro cards are exactly the creatures new tonight (' + fresh + ')');
    fresh.forEach(t => seen.add(t));
    if (lv.intro) ok(lv.demo && lv.demo.length, 'night ' + lv.id + ': a new creature comes with a demo');
    (lv.demo || []).forEach(seg => {
      ok(seg.loops >= 1 && seg.line && Object.keys(seg.rows).every(k => lv.fixed[+k] && seg.rows[k].length === 8), 'night ' + lv.id + ': demo segments are well formed');
    });
  });
  ok(night(1).roster.join() === 'frog' && night(3).intro.join() === 'cricket' && night(4).intro.join() === 'owl' && night(5).intro.join() === 'jar', 'teaching order: frog, cricket, owl, firefly jar');
  ok(night(6).roster.length === 4 && night(6).goal.harmony >= 1, 'night 6 mixes all four and needs harmony');
  // the rests night shows a clumped loop and then a gapped one
  const d2 = night(2).demo;
  const p1 = Sim.padPower([row('frog', d2[0].rows[0])], 0, 1), p2 = Sim.padPower([row('frog', d2[1].rows[0])], 0, 4);
  ok(p2 > p1, 'night 2 demo: the note after a gap (power ' + p2 + ') is stronger than a note right after a note (power ' + p1 + ')');
  // the cricket night's demo is call and response
  const d3 = night(3).demo[1].rows;
  ok(Sim.groove([row('frog', d3[0]), row('cricket', d3[1], 0)]).parts.call === 1, 'night 3 demo: frog and cricket answer each other');
}
{
  const fin = LEVELS[LEVELS.length - 1];
  ok(fin.roster.length === 4 && ['frog', 'cricket', 'owl', 'jar'].every(t => fin.goal.voices[t] >= 2) && fin.goal.harmony >= 3, 'finale: all four creatures and harmony are in the goal');
  const dawnSong = Sim.decode(Sim.encode(fin.solution));
  ok(dawnSong && dawnSong.length === fin.fixed.length, 'finale: the winning pattern becomes a song code');
}

// ---------- sounds: every creature has its own voice, groove layers exist ----------
try {
  global.Kit = Kit;
  const vm = require('vm'), fs = require('fs'), path = require('path');
  const code = fs.readFileSync(path.join(__dirname, '../audio.js'), 'utf8') + '\n;this.__names = play.names;';
  const ctx = vm.createContext({ Kit: Kit, console: console });
  vm.runInContext(code, ctx);
  const names = ctx.__names || [];
  ['croak', 'chirp', 'hoot', 'glow', 'bass', 'pad', 'hat', 'tierUp', 'pop', 'bite', 'hush', 'dawn', 'tap'].forEach(n => ok(names.includes(n), 'audio: sound "' + n + '" is defined'));
} catch (e) { ok(false, 'audio.js could not be loaded in Node: ' + e.message); }

console.log('random win rates', JSON.stringify(Object.fromEntries(Object.entries(rate).map(([k, v]) => [k, +(v * 100).toFixed(1) + '%']))));
console.log('random win rates, groove off', JSON.stringify(Object.fromEntries(Object.entries(rateNoGroove).map(([k, v]) => [k, +(v * 100).toFixed(1) + '%']))));
console.log('solution groove', JSON.stringify(solGroove));
console.log('ramp', JSON.stringify(summary));
lap('done');
if (fails) { console.log(fails + ' failed'); process.exit(1); }
console.log('pond sim ok: ' + LEVELS.length + ' nights');

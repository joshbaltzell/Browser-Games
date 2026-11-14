// Run: node games/picnic-raid/dev/check.js
const P = require('../sim.js');
let fails = 0;
function eq(name, got, want) {
  if (got !== want) { console.log('FAIL ' + name + ': got ' + got + ', want ' + want); fails++; }
}
function ok(name, cond, extra) {
  if (!cond) { console.log('FAIL ' + name + (extra ? ': ' + extra : '')); fails++; }
}
const empty = { pads: [null, null, null, null, null, null, null, null, null] };
const ants = (n, lane) => Array.from({ length: n }, () => ({ bug: 'ant', lane: lane || 'W' }));

// ---- Task 1: simulation ----
eq('ten ants, empty picnic', P.run(empty, ants(10)).bites, 10);
eq('one beetle, empty picnic', P.run(empty, [{ bug: 'beetle', lane: 'W' }]).bites, 2);
eq('one wasp, empty picnic', P.run(empty, [{ bug: 'wasp', lane: 'N' }]).bites, 1);
const d = [{ bug: 'beetle', lane: 'W' }, { bug: 'ant', lane: 'N' }, { bug: 'wasp', lane: 'W' }, { bug: 'ladybug', lane: 'N' }];
const lay = { pads: [null, 'swatter', 'salt', null, 'candle', 'sprinkler', null, 'jam', 'zapper'] };
eq('run twice identical', JSON.stringify(P.run(lay, d)), JSON.stringify(P.run(lay, d)));
ok('valid rejects 15 crumbs', !P.valid(ants(5).concat([{ bug: 'wasp', lane: 'W' }, { bug: 'wasp', lane: 'W' }, { bug: 'wasp', lane: 'W' }, { bug: 'ladybug', lane: 'W' }])));
ok('valid rejects 11 bugs', !P.valid(ants(11)));
ok('valid accepts 10 ants', P.valid(ants(10)));
ok('valid rejects bad lane', !P.valid([{ bug: 'ant', lane: 'X' }]));
eq('cost', P.cost(d), 3 + 1 + 3 + 2);
eq('layoutCost', P.layoutCost(lay), 6 + 6 + 4 + 8 + 2 + 7);

const swat = { pads: [null, 'swatter', null, null, null, null, null, null, null] };
// A ladybug ignores the first hit: one swatter hit that stops an ant does not stop her.
{
  const st = P.create(swat, [{ bug: 'ladybug', lane: 'W' }]);
  let sawIgnored = false;
  while (!st.over) { P.step(st).forEach(e => { if (e.type === 'hit' && e.ignored) sawIgnored = true; }); }
  ok('ladybug ignores first hit', sawIgnored);
  const ant = P.run(swat, [{ bug: 'ant', lane: 'W' }]);
  eq('lone ant is swatted', ant.bites, 0);
  eq('lone ladybug outruns the 2.2 s swatter', st.bites, 1);
}
// A wasp is untouched by a swatter (and by every ground gadget).
{
  const ground = { pads: [null, 'swatter', 'salt', null, null, 'sprinkler', null, null, null] };
  const st = P.create(ground, [{ bug: 'wasp', lane: 'W' }]);
  let hits = 0;
  while (!st.over) P.step(st).forEach(e => { if (e.type === 'hit') hits++; });
  eq('wasp untouched by ground gadgets', hits, 0);
  eq('wasp bites', st.bites, 1);
}
// zapper stops a wasp; zapper ignores ground bugs
eq('zapper stops wasp', P.run({ pads: [null, null, null, null, null, null, null, null, 'zapper'] }, [{ bug: 'wasp', lane: 'W' }]).bites, 0);
eq('zapper ignores ants', P.run({ pads: [null, null, null, null, null, null, null, null, 'zapper'] }, ants(3)).bites, 3);
// jam sticks the first ground bug and is then used up
{
  const st = P.create({ pads: [null, null, null, null, null, null, null, null, 'jam'] }, ants(2));
  let stuck = 0;
  while (!st.over) P.step(st).forEach(e => { if (e.type === 'stuck') stuck++; });
  eq('jam catches exactly one', stuck, 1);
}
// candle slows every bug including wasps
{
  const slowed = P.run({ pads: [null, null, null, null, null, null, null, null, 'candle'] }, [{ bug: 'wasp', lane: 'W' }]);
  const plain = P.run(empty, [{ bug: 'wasp', lane: 'W' }]);
  ok('candle slows wasp', slowed.ticks > plain.ticks, slowed.ticks + ' vs ' + plain.ticks);
}
// pads: nine, spaced, inside the lawn above the tray
{
  const pads = P.MAP.pads;
  eq('nine pads', pads.length, 9);
  pads.forEach((p, i) => {
    ok('pad ' + i + ' on screen', p.x > 50 && p.x < 1230 && p.y > 70 && p.y < 560, p.x + ',' + p.y);
    pads.forEach((q, j) => { if (j > i) ok('pads ' + i + '/' + j + ' apart', Math.hypot(p.x - q.x, p.y - q.y) > 80, Math.hypot(p.x - q.x, p.y - q.y)); });
  });
  ok('center pad reaches both trail ends', pads[8] && Math.hypot(pads[8].x - 575, pads[8].y - 400) < 100 && Math.hypot(pads[8].x - 705, pads[8].y - 400) < 100);
}
// first minute numbers
{
  const a = P.run(P.FIRST, ants(3)).bites;
  const b = P.run(P.FIRST, [{ bug: 'beetle', lane: 'W' }].concat(ants(3))).bites;
  eq('first minute: three ants against the swatter', a, 1);
  ok('first minute: a beetle in front triples the bites (' + b + ')', b >= 3 * a, 'got ' + b);
}
if (fails) { console.log(fails + ' failure(s)'); process.exit(1); }
console.log('picnic sim ok');

// ---- Task 2: solver, generated picnics, attackers ----
const t0 = Date.now();
const lays = [];
for (let seed = 0; seed < 60; seed++) lays.push({ seed, ...P.layoutFromSeed(seed) });
const types = new Set();
lays.forEach(({ seed, layout, best }) => {
  ok('seed ' + seed + ' best 6..11', best >= 6 && best <= 11, 'best ' + best);
  ok('seed ' + seed + ' ten ants at least 3 less', P.tenAnts(layout) <= best - 3, 'ants ' + P.tenAnts(layout) + ' best ' + best);
  const n = layout.pads.filter(Boolean).length;
  ok('seed ' + seed + ' fills 7 to 9 pads', n >= 7 && n <= 9, 'n=' + n);
  layout.pads.forEach(g => { if (g) types.add(g); });
  // the Marshal's draft reproduces the stated best
  const m = lays[seed].draft;
  eq('seed ' + seed + ' marshal draft scores best', P.run(layout, m).bites, best);
  ok('seed ' + seed + ' marshal draft valid', P.valid(m));
  if (seed % 12 === 0) eq('seed ' + seed + ' Marshal solve repeats', JSON.stringify(P.attackers.marshal(layout, seed)), JSON.stringify(m));
});
ok('at least four gadget types appear', types.size >= 4, 'types ' + types.size);
for (let seed = 0; seed < 3; seed++) {
  eq('seed ' + seed + ' repeatable', JSON.stringify(P.layoutFromSeed(seed)), JSON.stringify({ layout: lays[seed].layout, best: lays[seed].best, draft: lays[seed].draft }));
}
eq('empty picnic saves 0 against the Marshal', 12 - P.run(empty, P.attackers.marshal(empty, 1)).bites, 0);
for (let i = 0; i < 20; i++) {
  const layout = lays[i * 3].layout;
  const sc = P.run(layout, P.attackers.scout(layout, i)).bites;
  const cp = P.run(layout, P.attackers.captain(layout, i)).bites;
  const mr = P.run(layout, lays[i * 3].draft).bites;
  ok('marshal >= scout on picnic ' + i, mr >= sc, mr + ' vs ' + sc);
  ok('marshal >= captain on picnic ' + i, mr >= cp, mr + ' vs ' + cp);
  ok('scout draft valid', P.valid(P.attackers.scout(layout, i)));
  ok('captain draft valid', P.valid(P.attackers.captain(layout, i)));
}
// timing: one Marshal solve
{
  const t1 = Date.now();
  P.attackers.marshal(lays[3].layout, 3);
  console.log('marshal solve ms: ' + (Date.now() - t1) + ' (total solver section ' + (Date.now() - t0) + ' ms)');
}
if (fails) { console.log(fails + ' failure(s)'); process.exit(1); }
console.log('picnic solver ok: 60 picnics');

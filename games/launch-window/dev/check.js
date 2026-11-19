// Run: node games/launch-window/dev/check.js
const Sim = require('../sim.js');
const LEVELS = require('../levels.js');
const T = Sim.TICKS, U = Sim.UNIT;
let fails = 0;
function ok(cond, msg) { if (!cond) { fails++; console.log('FAIL ' + msg); } }
const J = (s) => JSON.stringify(Object.assign({}, s, { level: null, recs: null }));
const row = (s) => s.trim().split(/\s+/).map((c) => (c + ' ').slice(0, 2)).join('');
const E = row('. . . . . . . . . . . . . . . . . . . .'), FL = row('# # # # # # # # # # # # # # # # # # # #');
const idle = () => new Uint8Array(T);

// scripts
{
  const a = Sim.script('R200 A480 L60 -300');
  ok(a.length === T && a[0] === 2 && a[199] === 2 && a[200] === 4 && a[679] === 4 && a[680] === 1 && a[740] === 0, 'script decoding');
  const b = Sim.script('RA120');
  ok(b[0] === 6 && b[119] === 6 && b[120] === 0, 'script combined letters');
}

// movement: 60 ticks right = exactly 3 tiles
{
  const lv = Sim.parse(LEVELS[0].rows, LEVELS[0]);
  const s = Sim.create(lv, []);
  const x0 = s.robots[0].x;
  for (let i = 0; i < 60; i++) Sim.tick(s, Sim.INPUT.RIGHT);
  ok(s.robots[0].x - x0 === 3 * U, 'RIGHT x60 moves 3 tiles, got ' + (s.robots[0].x - x0) / U);
  for (let i = 0; i < 2000; i++) { if (s.t < T) Sim.tick(s, Sim.INPUT.RIGHT); }
  ok(s.robots[0].x < Sim.COLS * U, 'robot stays inside the level');
}

// lift rises only while its lever is held
{
  const L = LEVELS[1], lv = Sim.parse(L.rows, L);
  const bottom = Sim.cellY(lv.lifts[0].rb), top = Sim.cellY(lv.lifts[0].rt);
  let s = Sim.create(lv, []);
  for (let i = 0; i < 600; i++) Sim.tick(s, 0);
  ok(s.lifts[0].y === bottom, 'lift stays down with nobody at the lever');
  s = Sim.create(lv, []);
  const live = Sim.script('L90 A200 -300');
  let yAtHold = null;
  for (let i = 0; i < 500; i++) {
    Sim.tick(s, live[i]);
    if (i === 150) yAtHold = s.lifts[0].y;
    if (i === 289) ok(s.lifts[0].y === top, 'lift reaches the top while held');
  }
  ok(yAtHold < bottom, 'lift is rising while the lever is held');
  ok(s.lifts[0].y === bottom, 'lift sinks after release');
}

// valve progress needs the hose
{
  const rows = [E, E, E, E, E, E, E, row('. . V . S . . N . . . . . . . . . . . .'), FL, E, E];
  const lv = Sim.parse(rows, { hold: { valve: 100 } });
  const s = Sim.create(lv, []);
  ok(s.hose === false, 'hose starts disconnected when there is a nozzle');
  for (let i = 0; i < 400; i++) Sim.tick(s, i < 120 ? Sim.INPUT.LEFT : (i < 300 ? Sim.INPUT.ACTION : 0));
  ok(s.valve === 0, 'valve progress ignored while the hose is disconnected');
  const lv2 = Sim.parse(LEVELS[0].rows, LEVELS[0]);
  const s2 = Sim.create(lv2, []);
  ok(s2.hose === true, 'level 1 hose is pre-connected');
}

// replay drift: a hologram is exactly where the live robot was, on every tick (level 2, with a lift)
{
  const L = LEVELS[1], lv = Sim.parse(L.rows, L);
  const r1 = Sim.script(L.solution[0]), r2 = Sim.script(L.solution[1]);
  const live = Sim.create(lv, [r1]);
  const trace = [];
  for (let i = 0; i < T; i++) { Sim.tick(live, r2[i]); const p = live.robots[1]; trace.push([p.x, p.y]); }
  const holo = Sim.create(lv, [r1, r2]);
  let bad = -1;
  for (let i = 0; i < T; i++) {
    Sim.tick(holo, 0);
    const p = holo.robots[1];
    if (p.x !== trace[i][0] || p.y !== trace[i][1]) { bad = i; break; }
  }
  ok(bad < 0, 'hologram replay drifted at tick ' + bad);
}

// seek equals ticking; rewind then replay equals never rewinding
{
  const L = LEVELS[2], lv = Sim.parse(L.rows, L);
  const r1 = Sim.script(L.solution[0]), live = Sim.script(L.solution[1]);
  const a = Sim.create(lv, [r1]);
  for (let i = 0; i < 700; i++) Sim.tick(a, live[i]);
  ok(J(Sim.seek(lv, [r1], live, 700)) === J(a), 'seek(700) equals ticking 700 times');
  const cache = { snaps: [] };
  ok(J(Sim.seek(lv, [r1], live, 700, cache)) === J(a), 'seek with cache equals ticking');
  ok(J(Sim.seek(lv, [r1], live, 700, cache)) === J(a), 'seek from snapshots equals ticking');
  const never = Sim.create(lv, [r1]);
  for (let i = 0; i < 900; i++) Sim.tick(never, live[i]);
  const re = Sim.seek(lv, [r1], live, 400, cache);
  for (let i = 400; i < 900; i++) Sim.tick(re, live[i]);
  ok(J(re) === J(never), 'rewind to 400 and replay equals never rewinding');
  // rewinding past a pickup puts the crate back
  const t0 = Sim.seek(lv, [r1], live, 90);
  const home = lv.items.map((i) => i.x + ',' + i.y);
  ok(t0.items.every((it, k) => it.carried === -1 && (it.x + ',' + it.y) === home[k]), 'crates are home before any pickup');
  const mid = Sim.seek(lv, [r1], live, 130);
  ok(mid.items.some((it) => it.carried >= 0), 'a crate is carried at tick 130 (pickup happened)');
  const back = Sim.seek(lv, [r1], live, 90, cache);
  ok(back.items.every((it, k) => it.carried === -1 && (it.x + ',' + it.y) === home[k]), 'rewinding past a pickup returns the crate');
  // the preview never changes the recording
  const before = Buffer.from(live).toString('hex');
  Sim.seek(lv, [r1], live, 1500);
  ok(Buffer.from(live).toString('hex') === before, 'seek leaves the recording untouched');
}

// every level: an idle loop does not finish, the stored solution finishes in exactly par loops
function playLoops(L, scripts) {
  const lv = Sim.parse(L.rows, L);
  const recs = [], results = [];
  for (const sc of scripts) {
    const live = typeof sc === 'string' ? Sim.script(sc) : sc;
    const s = Sim.create(lv, recs.slice());
    for (let i = 0; i < T; i++) Sim.tick(s, live[i]);
    results.push(Sim.done(s));
    recs.push(live);
  }
  return results;
}
for (const L of LEVELS) {
  ok(L.rows.length === 11 && L.rows.every((r) => r.length === 40), 'level ' + L.id + ' rows are 11 x 40 chars');
  ok(playLoops(L, [idle()])[0] === false, 'level ' + L.id + ': one idle loop must not finish');
  ok(L.solution.length === L.par, 'level ' + L.id + ': solution length equals par');
  const res = playLoops(L, L.solution);
  ok(res.slice(0, -1).every((r) => !r) && res[res.length - 1] === true,
    'level ' + L.id + ': solution must finish in exactly par loops, got ' + JSON.stringify(res));
  // one loop alone can never finish (a loop-1 solution does not exist inside 30 s)
  for (const s of L.solution.slice(0, 1)) ok(playLoops(L, [s])[0] === false, 'level ' + L.id + ': first recording alone does not finish');
}

if (fails) { console.log(fails + ' check(s) failed'); process.exit(1); }
console.log('launch sim ok: ' + LEVELS.length + ' levels');

// Simulation fingerprint for Look Alive: a hash of every history array and snapshot of two runs per dish (the carried cell and the
// minimal winner), at 64x64. Visual-only milestones must leave it unchanged; balance milestones regenerate it and review the diff.
// Run:  node games/look-alive/dev/fingerprint.js           compare with dev/fingerprint.json (exit 1 and list the changed runs on a difference)
//       node games/look-alive/dev/fingerprint.js --write   rewrite dev/fingerprint.json
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const G = process.env.LA_DIR || path.join(__dirname, '..');
global.LookAliveCards = require(path.join(G, 'cards.js'));
global.LookAliveLevels = require(path.join(G, 'levels.js'));
const Sim = require(path.join(G, 'sim.js')), Lv = global.LookAliveLevels;
const WIN10 = { pace: 3, slop: 6, metabolism: 'fermentation', parts: ['acidproof'], reflex: { kind: 'bio', id: 'sporulate' } };   // same as walkthrough.js
const num = x => typeof x === 'number' ? x.toPrecision(10) : String(x);
const arr = v => (Array.isArray(v) || ArrayBuffer.isView(v)) ? Array.from(v).map(num).join(',') : JSON.stringify(v);
const out = {};
for (let id = 1; id <= 10; id++) {
  const d = Lv.dish(id);
  for (const [k, b] of [['carried', Lv.carry(id)], ['winner', id === 10 ? WIN10 : Lv.carry(id + 1)]]) {
    const run = Sim.play(Lv.PLANET, d, JSON.parse(JSON.stringify(Sim.conform(d, b))), { n: 64, snapEvery: 10 });
    const v = Sim.verdict(run), a = v.win ? null : Sim.autopsy(run);
    const hH = crypto.createHash('sha1'), hS = crypto.createHash('sha1');
    Object.keys(run.H).sort().forEach(key => hH.update(key + ':' + arr(run.H[key]) + ';'));
    run.snaps.forEach(s => Object.keys(s).sort().forEach(key => hS.update(key + ':' + arr(s[key]) + ';')));
    out[id + ':' + k] = { win: v.win, cause: a ? a.cause : null, final: +(run.H.share[run.T] || 0).toFixed(6), H: hH.digest('hex').slice(0, 16), snaps: hS.digest('hex').slice(0, 16) };
  }
}
const file = path.join(G, 'dev', 'fingerprint.json');
if (process.argv.includes('--write')) { fs.writeFileSync(file, JSON.stringify(out, null, 1) + '\n'); console.log('wrote ' + Object.keys(out).length + ' runs to ' + file); process.exit(0); }
let old; try { old = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { console.log('FAIL no ' + file + ' (run with --write first)'); process.exit(1); }
const diff = Object.keys(out).filter(k => JSON.stringify(out[k]) !== JSON.stringify(old[k]));
if (diff.length) { diff.forEach(k => console.log('CHANGED ' + k + ' was ' + JSON.stringify(old[k]) + ' now ' + JSON.stringify(out[k]))); console.log('FAIL fingerprint: ' + diff.length + ' of ' + Object.keys(out).length + ' runs changed'); process.exit(1); }
console.log('PASS fingerprint: ' + Object.keys(out).length + ' runs unchanged');

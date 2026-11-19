// Wider sim fingerprint for dishes 1 to 10 (the habitat-2 guard): carry(id), standard(id) and the next carry, at 16x16 and 64x64,
// FNV hash of every history array as float32 bit patterns plus the last robot snapshot. Dishes 1 to 10 must stay bit-identical when habitat 2 lands.
// Run:  node games/look-alive/dev/fingerprint-wide.js            compare with dev/fingerprint-wide.json (exit 1 on a difference)
//       node games/look-alive/dev/fingerprint-wide.js --save     rewrite the JSON
//       node games/look-alive/dev/fingerprint-wide.js --with2    load ../levels2.js first (if it exists), then compare
const fs = require('fs'), path = require('path');
const G = path.join(__dirname, '..'), argv = process.argv;
global.LookAliveCards = require(path.join(G, 'cards.js'));
global.LookAliveLevels = require(path.join(G, 'levels.js'));
const Sim = require(path.join(G, 'sim.js')), Lv = global.LookAliveLevels;
if (argv.includes('--with2') && fs.existsSync(path.join(G, 'levels2.js'))) require(path.join(G, 'levels2.js'));
const P = Lv.PLANET, WIN10 = { pace: 3, slop: 6, metabolism: 'fermentation', parts: ['acidproof'], reflex: { kind: 'bio', id: 'sporulate' } };
function h(arr, x) { for (let i = 0; i < arr.length; i++) { const f = new Float32Array([arr[i]]), u = new Uint32Array(f.buffer)[0]; x = Math.imul(x ^ u, 16777619) >>> 0; } return x; }
let all = 2166136261 >>> 0; const per = {};
for (let id = 1; id <= 10; id++) {
  const D = Lv.dish(id), builds = [Lv.carry(id), Lv.standard(id), id < 10 ? Lv.carry(id + 1) : WIN10];
  for (const b of builds) for (const n of [16, 64]) {
    const r = Sim.play(P, D, JSON.parse(JSON.stringify(b)), { n, snapEvery: 10 }); let x = 2166136261 >>> 0;
    Object.keys(r.H).sort().forEach(k => { if (k === 'susp') Object.keys(r.H.susp).sort().forEach(c => { x = h(r.H.susp[c], x); }); else x = h(r.H[k], x); });
    x = h(r.snaps[r.snaps.length - 1].robot, x); per[id] = (per[id] || '') + x.toString(16).padStart(8, '0').slice(-4); all = Math.imul(all ^ x, 16777619) >>> 0;
  }
}
const now = { all: all.toString(16), per }, file = path.join(__dirname, 'fingerprint-wide.json');
if (argv.includes('--save')) { fs.writeFileSync(file, JSON.stringify(now, null, 1) + '\n'); console.log('saved ' + now.all); process.exit(0); }
const old = JSON.parse(fs.readFileSync(file, 'utf8')), bad = Object.keys(per).filter(k => old.per[k] !== per[k]);
console.log(bad.length || old.all !== now.all ? 'DIFFERENT from fingerprint-wide.json: dishes ' + bad.join(', ') : 'same as fingerprint-wide.json (' + now.all + ')');
process.exit(bad.length || old.all !== now.all ? 1 : 0);

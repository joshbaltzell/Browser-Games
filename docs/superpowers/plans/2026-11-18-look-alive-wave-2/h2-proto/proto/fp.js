// fingerprint: hash every history array of known builds on dishes 1-10. node fp.js <dir> [with2]
const dir = process.argv[2], with2 = process.argv[3] === 'with2';
const Sim = require(dir + '/sim.js'), Lv = require(dir + '/levels.js'); if (with2) require(dir + '/levels2.js');
const P = Lv.PLANET; const WIN10 = { pace: 3, slop: 6, metabolism: 'fermentation', parts: ['acidproof'], reflex: { kind: 'bio', id: 'sporulate' } };
function h(arr, x) { for (let i = 0; i < arr.length; i++) { const f = new Float32Array([arr[i]]), u = new Uint32Array(f.buffer)[0]; x = Math.imul(x ^ u, 16777619) >>> 0; } return x; }
let all = 2166136261 >>> 0; const per = {};
for (let id = 1; id <= 10; id++) { const D = Lv.dish(id); const builds = [Lv.carry(id), Lv.standard(id), id < 10 ? Lv.carry(id + 1) : WIN10];
  for (const b of builds) for (const n of [16, 64]) { const r = Sim.play(P, D, b, { n, snapEvery: 10 }); let x = 2166136261 >>> 0;
    Object.keys(r.H).sort().forEach(k => { if (k === 'susp') Object.keys(r.H.susp).sort().forEach(c => { x = h(r.H.susp[c], x); }); else x = h(r.H[k], x); });
    x = h(r.snaps[r.snaps.length - 1].robot, x); per[id] = (per[id] || '') + x.toString(16).slice(-4); all = Math.imul(all ^ x, 16777619) >>> 0; } }
console.log(all.toString(16), JSON.stringify(per));

// grid search for dish 12
const res = [];
const combos = [];
for (const g of [0.2]) for (const fl of [0.05, 0.06]) for (const fil of [0.95]) combos.push({ g, fl, fil });
const { execFileSync } = require('child_process');
for (const c of combos) {
  const out = execFileSync('node', ['-e', `
global.TUNE2 = { rDiffuse: 0.05, flow: ${c.fl}, heatDeath: 0.1, width: 10, bands: { hot: 0.45, mat: 1.15, rim: 0.9, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } }; global.G2 = { g12: ${c.g}, h12: 75 };
const C = require('./cards.js'); C.part('filament').fx.graze = ${c.fil}; C.ruleFx.move = 0.1;
const { probe, mk, bio, rule } = require('./run.js'); const F = 'fermentation', S = bio('sporulate');
const L = [['carry', [], S], ['pili', ['pili'], S], ['fil', ['filament'], S], ['comp45', [], rule('temp','lt',45,'hotter')], ['tetra', ['tetraether'], S], ['flag', ['flagellum'], S]];
let o = '';
for (const [nm, add, rf] of L) { o += nm + ':'; for (const [p, s] of [[3,6],[4,6],[5,4],[7,4],[8,2]]) { const b = mk(p, s, F, ['chaperones'].concat(add), rf), a = probe(12, b, 16), z = probe(12, b, 64); o += (a.win?'W':'l') + (z.win?'W':'l') + z.fin + ' '; } o += '| '; }
console.log(o);`]).toString();
  console.log(JSON.stringify(c), out.trim());
}

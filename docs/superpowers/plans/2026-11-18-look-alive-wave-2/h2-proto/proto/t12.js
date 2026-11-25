// node t12.js '{"flow":0.05,"rim":0.9,"g12":0.12,"h12":78,"fil":0.75}'
const o = JSON.parse(process.argv[2] || '{}');
global.TUNE2 = { rDiffuse: o.rd ?? 0.05, flow: o.flow ?? 0.05, heatDeath: o.hd ?? 0.14, width: o.w ?? 8, bands: { hot: 0.45, mat: 1.15, rim: o.rim ?? 0.9, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } };
global.G2 = { g12: o.g12 ?? 0.12, h12: o.h12 ?? 80, c12: o.c12 ?? 30 };
const C = require('./cards.js'); if (o.fil != null) C.part('filament').fx.graze = o.fil; if (o.mv != null) C.ruleFx.move = o.mv;
const { probe, mk, bio, rule } = require('./run.js'); const F = 'fermentation', S = bio('sporulate');
const L = [['carry', [], S], ['+pili', ['pili'], S], ['+filament', ['filament'], S], ['compass<55', [], rule('temp', 'lt', 55, 'hotter')], ['compass<45', [], rule('temp', 'lt', 45, 'hotter')], ['compass<50', [], rule('temp', 'lt', 50, 'hotter')], ['+tetra', ['tetraether'], S], ['+flagellum', ['flagellum'], S]];
const dials = [[3, 6], [4, 6], [5, 4], [6, 4]];
for (const [nm, add, rf] of L) {
  let row = nm.padEnd(12);
  for (const [p, sl] of dials) { const b = mk(p, sl, F, ['chaperones'].concat(add), rf); const a = probe(12, b, 16), c = probe(12, b, 64); row += ` p${p}s${sl}:${a.win ? 'W' : 'l'}${c.win ? 'W' : 'l'} ${c.fin}%/g${(c.graze * 100).toFixed(1)}`; }
  console.log(row);
}

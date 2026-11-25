global.TUNE2 = { flow: 0.05, bands: { hot: 0.45, mat: 1.15, rim: 0.9, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } }; global.G2 = { g12: 0.12 };
const { mk, bio, rule, Sim, Lv, P } = require('./run.js');
function prof(b, n) {
  const D = Lv.dish(12), r = Sim.play(P, D, b, { n }), s = r._s, cols = [];
  for (let x = 0; x < n; x += n / 16) { let R = 0, N = 0; for (let y = 0; y < n; y++) { R += s.R[y * n + x]; N += s.N[y * n + x]; } cols.push((R / n).toFixed(2) + '/' + (N / n).toFixed(2) + '@' + s.temp[x].toFixed(0)); }
  console.log(cols.join(' '));
}
const F = 'fermentation';
prof(mk(3, 6, F, ['chaperones'], bio('sporulate')), 16);
prof(mk(3, 6, F, ['chaperones'], rule('temp', 'lt', 50, 'hotter')), 16);
prof(mk(3, 6, F, ['chaperones', 'pili'], bio('sporulate')), 16);

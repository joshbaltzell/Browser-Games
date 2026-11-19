const R = require('./run.js'); const { probe, mk, bio, rule } = R;
module.exports = function sweep(id, met, parts, reflex, n) {
  const out = [];
  for (let s of [0, 2, 4, 6, 8]) { let row = ''; for (let p = 0; p <= 8; p++) { const r = probe(id, mk(p, s, met, parts, reflex), n || 16); row += r.ok ? 'x' : r.win ? 'W' : !r.alive ? '.' : r.fin < 5 ? 'v' : r.fin > 15 || r.peak > 20 ? '^' : r.stg >= 3 ? 'e' : '-'; } out.push('s' + s + ' ' + row); }
  return out.join('  ');
};
if (require.main === module) {
  const sw = module.exports, F = 'fermentation';
  const sets = [['ferm chap', F, ['chaperones']], ['ferm tetra', F, ['tetraether']], ['ferm poly', F, ['polyamines']], ['heatps', 'heatps', []], ['ferm poly+tetra', F, ['polyamines', 'tetraether']], ['resp chap', 'respiration', ['chaperones']], ['ferm acidproof+tetra', F, ['acidproof', 'tetraether']]];
  for (const [nm, m, p] of sets) console.log(nm.padEnd(22), sw(11, m, p, bio('sporulate')));
}

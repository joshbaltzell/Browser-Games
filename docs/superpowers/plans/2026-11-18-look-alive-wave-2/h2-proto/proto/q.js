global.TUNE2 = { flow: 0.04, bands: { hot: 0.45, mat: 1.15, rim: 0.9, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } }; global.G2 = { g12: 0.15, h12: 72 };
const { probe, mk, bio, rule } = require('./run.js'); const F = 'fermentation';
for (const [nm, rf, parts] of [['noreflex', null, []], ['spor', bio('sporulate'), []], ['stringent', bio('stringent'), []], ['comp45', rule('temp', 'lt', 45, 'hotter'), []], ['ruleNoop', rule('temp', 'lt', 0, 'hotter'), []], ['pili none', null, ['pili']]])
  console.log(nm.padEnd(10), JSON.stringify(probe(12, mk(5, 4, F, ['chaperones'].concat(parts), rf), 64)));

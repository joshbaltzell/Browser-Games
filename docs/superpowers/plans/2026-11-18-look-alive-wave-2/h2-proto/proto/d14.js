const { probe, mk, bio, rule } = require('./base2.js'); const F = 'fermentation', NF = bio('nightferm');
const L = [['carry13', mk(3, 6, F, ['chaperones', 'pili'], NF)], ['c13 p5s4', mk(5, 4, F, ['chaperones', 'pili'], NF)], ['poly pili', mk(4, 6, F, ['polyamines', 'pili'], NF)],
 ['heatps pili', mk(4, 6, 'heatps', ['pili'], NF)], ['heatps fil', mk(4, 6, 'heatps', ['filament', 'polyamines'], NF)], ['chap fil', mk(4, 6, F, ['chaperones', 'filament'], NF)],
 ['comp', mk(5, 6, F, ['chaperones'], rule('temp', 'lt', 45, 'hotter'))], ['tetra+chap', mk(5, 6, F, ['chaperones', 'tetraether'], NF)], ['sos pili', mk(4, 6, F, ['chaperones', 'pili'], bio('sos'))], ['resp pili', mk(3, 6, 'respiration', ['chaperones', 'pili'], NF)]];
for (const [nm, b] of L) console.log(nm.padEnd(12), JSON.stringify(probe(14, b, 32)), probe(14, b, 64).win);

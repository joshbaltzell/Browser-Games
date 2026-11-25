const { probe, mk, bio, rule } = require('./run.js'); const sw = require('./sweep.js'); const F = 'fermentation', S = bio('sporulate');
const L = [['carry', mk(3, 6, F, ['chaperones'], S)], ['+pili', mk(3, 6, F, ['chaperones', 'pili'], S)], ['+filament', mk(3, 6, F, ['chaperones', 'filament'], S)],
 ['compass<50', mk(3, 6, F, ['chaperones'], rule('temp', 'lt', 50, 'hotter'))], ['compass<45', mk(3, 6, F, ['chaperones'], rule('temp', 'lt', 45, 'hotter'))],
 ['+tetra', mk(3, 6, F, ['chaperones', 'tetraether'], S)], ['+flagellum', mk(3, 6, F, ['chaperones', 'flagellum'], S)], ['heatps+chap', mk(3, 6, 'heatps', ['chaperones'], S)]];
for (const [nm, b] of L) console.log(nm.padEnd(12), JSON.stringify(probe(12, b, 16)), JSON.stringify(probe(12, b, 64)));
if (process.argv[2]) for (const [nm, b] of L) console.log(nm.padEnd(12), sw(12, b.metabolism, b.parts, b.reflex));

// node tune12.js rim graze flow
const [rim, g, fl] = process.argv.slice(2).map(Number);
global.TUNE2 = { flow: fl, bands: { hot: 0.45, mat: 1.15, rim: rim, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } }; global.G2 = { g12: g };
require('./d12.js');

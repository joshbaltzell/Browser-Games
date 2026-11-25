// the current best H2 tuning, shared by the probes
global.TUNE2 = Object.assign({ rDiffuse: 0.05, flow: 0.06, heatDeath: 0.1, width: 10, bands: { hot: 0.45, mat: 1.15, rim: 0.9, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } }, global.TUNE2X || {});
global.DIEL = global.DIEL || { first: 50, period: 80, dur: 40, depth: 0.95, bustDeath: 0.09 };
global.G2 = Object.assign({ g12: 0.2, h12: 75, g14: 0.2 }, global.G2X || {});
const C = require('./cards.js'); C.part('filament').fx.graze = 0.95; C.ruleFx.move = 0.1;
module.exports = require('./run.js');

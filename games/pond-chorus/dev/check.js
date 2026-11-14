// Run: node games/<slug>/dev/check.js
const Sim = require('../sim.js');
const s = Sim.create(function () { return 0.5; });
Sim.step(s, 16);
if (s.t !== 16) { console.log('FAIL sim.step'); process.exit(1); }
console.log('ok');

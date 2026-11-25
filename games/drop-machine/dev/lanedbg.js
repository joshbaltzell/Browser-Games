// node dev/lanedbg.js trap 110 : which lanes of a template solve, and how wide they are
const DM = require('../sim.js'); const m = DM.newMachine(); m.bpm = +process.argv[3];
const b = DM.DRUM_BEATS.filter(x => x.id === process.argv[2])[0];
try { const p = DM.buildPreset(m, b.id); console.log('ok', p.parts.map(q => [q.size, Math.round(q.x), Math.round(q.y), q.angle.toFixed(1)].join(' ')).join(' | ')); } catch (e) { console.log('ERR', e.message); }

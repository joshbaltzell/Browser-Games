// Listen by numbers: prints the steady-state hits of the starter machine for one bar.
const DM = require('../sim.js');
const m = DM.starterMachine();
const rows = [];
m.pits.forEach((p, i) => {
  const r = DM.simulatePit(p, m);
  DM.loopEvents(p, m, r).forEach(e => {
    const part = p.parts.find(q => q.id === e.partId);
    rows.push({ pos: e.pos, pit: i + 1, what: e.midi != null ? DM.noteName(e.midi) : (part.type === 'drum' ? DM.DRUM_KIND[part.size] : 'pad tick'), v: Math.round(e.speed) });
  });
});
rows.sort((a, b) => a.pos - b.pos);
rows.forEach(r => console.log(r.pos.toFixed(2).padStart(6), 'pit' + r.pit, r.what.padEnd(8), r.v));

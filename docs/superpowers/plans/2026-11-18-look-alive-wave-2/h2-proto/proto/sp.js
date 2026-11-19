global.TUNE2 = { flow: 0.04, width: 10, heatDeath: 0.1, bands: { hot: 0.45, mat: 1.15, rim: 0.9, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } }; global.G2 = { g12: 0.15, h12: 75 };
const { mk, bio, rule, Sim, Lv, P } = require('./run.js');
const n = 64, D = Lv.dish(12), r = Sim.play(P, D, mk(5, 4, 'fermentation', ['chaperones'], process.argv[2]==='c'?rule('temp','lt',45,'hotter'):process.argv[2]==='p'?null:bio('sporulate')).concat||mk(5,4,'fermentation',process.argv[2]==='p'?['chaperones','pili']:['chaperones'],process.argv[2]==='c'?rule('temp','lt',45,'hotter'):null), { n }), s = r._s; const cols = [];
for (let x = 0; x < n; x += 4) { let R = 0, SP = 0, F = 0; for (let y = 0; y < n; y++) { R += s.R[y * n + x]; SP += s.SP[y * n + x]; F += s.F[y * n + x]; } cols.push(`${s.temp[x].toFixed(0)}C R${(R / n).toFixed(3)} S${(SP / n).toFixed(3)} F${(F / n).toFixed(2)}`); }
console.log(cols.join('\n'), '\ndorm', r.H.dorm[r.T]);

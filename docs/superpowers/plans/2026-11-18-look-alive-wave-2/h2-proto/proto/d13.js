const { probe, mk, bio, rule } = require('./base2.js'); const F = 'fermentation';
const base = ['chaperones', 'pili'];
const L = [['carry spor', base, bio('sporulate')], ['noreflex', base, null], ['nightferm', base, bio('nightferm')], ['stringent', base, bio('stringent')], ['sos', base, bio('sos')], ['naps', base.concat(['naps']), bio('sporulate')], ['naps+nf', base.concat(['naps']), bio('nightferm')]];
for (const [nm, parts, rf] of L) { let o = nm.padEnd(11); for (const [p, s] of [[3, 6], [4, 6], [5, 4], [7, 4]]) { const b = mk(p, s, F, parts, rf); o += ' p' + p + 's' + s + ':' + [32, 64].map(n => { const r = probe(13, b, n); return (r.win ? 'W' : 'l') + r.fin + '/m' + r.min + (r.ok ? 'X' : ''); }).join(' '); } console.log(o); }

// Headless check of Tetra Storm line clears.  Run: node games/tetra-storm/test-clear.js
const vm = require('vm'), fs = require('fs'), path = require('path');
const stub = () => new Proxy(function () {}, {
  get: (t, k) => (k === 'width' || k === 'height' ? 100 : k === Symbol.toPrimitive ? () => 0 : stub()),
  set: () => true, apply: () => stub(),
});
const ctx = vm.createContext({
  document: { getElementById: stub }, window: { innerWidth: 1000, innerHeight: 800, addEventListener() {} },
  localStorage: { getItem: () => null, setItem() {} }, requestAnimationFrame() {}, addEventListener() {},
  console, Math, Array, Object, parseInt, String, Number, Date, AudioContext: undefined, setTimeout: () => 0,
});
vm.runInContext(fs.readFileSync(path.join(__dirname, 'game.js'), 'utf8'), ctx);
const run = (c) => vm.runInContext(c, ctx);

let fails = 0;
// fillRows: rows full except the columns listed; piece placed by lockPiece.
function scenario(name, setup, expectLines, expectGrid) {
  run(`newGame(); state = ST.PLAY; grid.forEach(r => r.fill(null)); level = 1; score = 0; lines = 0; ${setup}; lockPiece();`);
  if (run('state') === 2) run('finishClear()');
  const got = run('lines'), rows = run('grid.map(r => r.filter(Boolean).length).join(",")');
  const ok = got === expectLines && rows === expectGrid;
  if (!ok) fails++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}: lines=${got} (want ${expectLines}) rows=${rows}${ok ? '' : ' want ' + expectGrid}`);
}
const empty = (n) => Array(n).fill(0);
const full = (rowFilled) => rowFilled.join(',');
// Fill row y except given cols.
const fillRow = (y, gaps) => `for (let x=0;x<COLS;x++) if (!${JSON.stringify(gaps)}.includes(x)) grid[${y}][x]='#fff';`;
// Vertical I piece (rot 1) occupies column px+2, rows py..py+3.
const vertI = (px, py) => `cur = {type:'I', rot:1, x:${px}, y:${py}};`;

const rowsWith = (m) => { const a = empty(20); for (const [y, n] of Object.entries(m)) a[y] = n; return a.join(','); };
// A vertical I in column 0 fills rows py..py+3 of col 0; other rows are pre-filled except col 0.
scenario('1 row', fillRow(19, [0]) + vertI(-2, 16), 1, rowsWith({ 17: 1, 18: 1, 19: 1 }));
scenario('2 adjacent rows (18,19)', fillRow(18, [0]) + fillRow(19, [0]) + vertI(-2, 16), 2, rowsWith({ 18: 1, 19: 1 }));
scenario('2 non-adjacent rows (17,19)', fillRow(17, [0]) + fillRow(19, [0]) + vertI(-2, 16), 2, rowsWith({ 18: 1, 19: 1 }));
scenario('4 rows', [16, 17, 18, 19].map((y) => fillRow(y, [0])).join('') + vertI(-2, 16), 4, rowsWith({}));
scenario('3 rows non-contiguous (16,18,19)', fillRow(16, [0]) + fillRow(18, [0]) + fillRow(19, [0]) + vertI(-2, 16), 3, rowsWith({ 19: 1 }));
scenario('full rows 16,18 with partial row 17 between', fillRow(16, [0]) + fillRow(18, [0]) + vertI(-2, 15), 2, rowsWith({ 17: 1, 18: 1 }));
// Score / lines / level must update together in the same step.
run('newGame(); grid.forEach(r => r.fill(null)); lines = 9; score = 0; level = 1;' + fillRow(19, [0]) + vertI(-2, 16) + 'lockPiece(); finishClear();');
const hud = run('[score, lines, level, elLines.textContent].join()');
const hok = run('score') === 100 && run('lines') === 10 && run('level') === 2;
if (!hok) fails++;
console.log(`${hok ? 'PASS' : 'FAIL'} score/lines/level together: ${hud}`);
console.log(fails ? `${fails} FAILED` : 'all passed');
process.exit(fails ? 1 : 0);

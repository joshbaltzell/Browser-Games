// Levels for Launch Window. A row is 20 cells, two characters each (". ", "# ", "L1"...).
// row() builds that from space-separated tokens so the layout stays readable.
var LEVELS = (function () {
  function row(s) {
    var t = s.trim().split(/\s+/);
    if (t.length !== 20) throw new Error('row needs 20 cells, got ' + t.length + ': ' + s);
    return t.map(function (c) { return (c + ' ').slice(0, 2); }).join('');
  }
  var E = row('. . . . . . . . . . . . . . . . . . . .');
  var FLOOR = row('# # # # # # # # # # # # # # # # # # # #');

  return [
    {
      id: 1, name: 'Two Jobs', par: 2, payload: 'Payload today: one weather satellite.', rule: 'loops',
      hold: { valve: 960, panel: 720 },
      rows: [E, E, E, E, E, E, E,
        row('. V . . . . . . . . S . . . . . . . P .'),
        FLOOR, E, E],
      solution: ['L170 A965', 'R150 A730']
    },
    {
      id: 2, name: 'Going Up', par: 2, payload: 'Payload today: one very nervous houseplant.', rule: 'loops',
      hold: { valve: 960, panel: 720 },
      rows: [E, E, E,
        E,
        row('. . . . . . . . . E1 . . . . . . . P . .'),
        row('. . . . . . . . . E1 # # # # # # # # # #'),
        row('. . . . . . . . . E1 . . . . . . . . . .'),
        row('. L1 . . . . S . . E1 . . . . . . . . . .'),
        FLOOR, E, E],
      solution: ['L90 A260', 'R50 -135 R170 A730']
    },
    {
      id: 3, name: 'Dead Weight', par: 2, payload: 'Payload today: two crates and a spare moon.', rule: 'loops',
      hold: { valve: 960, panel: 1080 },
      rows: [E, E, E, E, E, E, E,
        row('C . C . . . B1 . S . D1 . . . . . H . P .'),
        FLOOR, E, E],
      solution: ['L148 A2 R135 A2', 'L108 A2 R342 A2 R45 A1090']
    }
  ];
})();
if (typeof module !== 'undefined') module.exports = LEVELS;

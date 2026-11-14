// Nights 1 to 3. wave: [{step, type}] with step counted from the start of the wave (a loop boundary).
var LEVELS = (function () {
  function rep(n, every, type, from) {
    var w = [];
    for (var i = 0; i < n; i++) w.push({ step: (from || 0) + i * every, type: type });
    return w;
  }
  var swarm = [];
  for (var g = 0; g < 3; g++) {
    for (var k = 0; k < 4; k++) swarm.push({ step: g * 24 + k, type: 'slugling' });
    swarm.push({ step: g * 24 + 12, type: 'slug' });
  }
  return [
    { id: 1, name: 'First Croak', lesson: 'A note hits what is in range.',
      roster: ['frog'], fixed: [{ perch: 1, type: 'frog' }], budget: 2,
      wave: rep(6, 8, 'slug'),
      solution: [{ perch: 1, type: 'frog', pattern: [0, 1, 0, 0, 0, 0, 0, 0] }] },
    { id: 2, name: 'Shell Game', lesson: 'Rests make the next note louder.',
      roster: ['frog'], fixed: [{ perch: 1, type: 'frog' }], budget: 3,
      wave: rep(5, 16, 'snail'),
      solution: [{ perch: 1, type: 'frog', pattern: [1, 0, 0, 1, 0, 0, 1, 0] }] },
    { id: 3, name: 'Swarm', lesson: 'Small things need fast notes.',
      roster: ['frog', 'cricket'], fixed: [{ perch: 1, type: 'frog' }, { perch: 3, type: 'cricket' }], budget: 6,
      wave: swarm,
      solution: [{ perch: 1, type: 'frog', pattern: [0, 0, 0, 0, 0, 0, 0, 0] },
                 { perch: 3, type: 'cricket', pattern: [1, 0, 0, 0, 1, 0, 0, 0] }] }
  ];
})();
if (typeof module !== 'undefined') module.exports = LEVELS;

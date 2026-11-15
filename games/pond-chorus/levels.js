// Nights 1 to 6. wave: [{step, type}] with step counted from the start of the wave (a loop boundary).
// goal: what the player's pattern must contain before the night can be won (the slugs must also be dealt with).
//   goal.voices = notes needed per creature type, goal.harmony = steps where two types sing together.
// The ramp: one frog and two croaks, then rests, then a cricket, then harmony, then a full chorus.
var LEVELS = (function () {
  function rep(n, every, type, from) {
    var w = [];
    for (var i = 0; i < n; i++) w.push({ step: (from || 0) + i * every, type: type });
    return w;
  }
  function grp(starts, n, type) {
    var w = [];
    for (var i = 0; i < starts.length; i++) for (var k = 0; k < n; k++) w.push({ step: starts[i] + k, type: type });
    return w;
  }
  function shift(w, from, by) {   // every spawn at or after `from` arrives `by` steps later
    return w.map(function (e) { return { step: e.step >= from ? e.step + by : e.step, type: e.type }; });
  }
  function byStep(a, b) { return a.step - b.step; }
  var F4 = [{ perch: 1, type: 'frog' }, { perch: 3, type: 'frog' }, { perch: 0, type: 'cricket' }, { perch: 4, type: 'cricket' }];
  return [
    { id: 1, name: 'First Croak', lesson: 'Tap pads to make a pattern. The pond plays it on a loop.',
      roster: ['frog'], fixed: [{ perch: 1, type: 'frog' }], budget: 4,
      goal: { voices: { frog: 2 } },
      wave: rep(6, 16, 'slug', 8),
      solution: [{ perch: 1, type: 'frog', pattern: [0, 1, 0, 0, 0, 1, 0, 0] }] },
    { id: 2, name: 'Shell Game', lesson: 'Rests make the next note louder.',
      roster: ['frog'], fixed: [{ perch: 1, type: 'frog' }], budget: 4,
      goal: { voices: { frog: 3 } },
      wave: rep(6, 16, 'snail', 8),
      solution: [{ perch: 1, type: 'frog', pattern: [1, 0, 0, 1, 0, 0, 1, 0] }] },
    { id: 3, name: 'Swarm', lesson: 'Small things need fast notes.',
      roster: ['frog', 'cricket'], fixed: [{ perch: 1, type: 'frog' }, { perch: 0, type: 'cricket' }], budget: 7,
      goal: { voices: { frog: 2, cricket: 3 } },
      wave: grp([8, 48], 8, 'slugling').concat(rep(3, 24, 'snail', 24)).sort(byStep),
      solution: [{ perch: 1, type: 'frog', pattern: [0, 0, 1, 0, 0, 0, 1, 0] },
                 { perch: 0, type: 'cricket', pattern: [1, 0, 1, 0, 0, 1, 0, 0] }] },
    { id: 4, name: 'Harmony', lesson: 'Two voices on one step sing louder.',
      roster: ['frog', 'cricket'], fixed: [{ perch: 1, type: 'frog' }, { perch: 0, type: 'cricket' }, { perch: 3, type: 'frog' }], budget: 7,
      goal: { voices: { frog: 3, cricket: 3 }, harmony: 2 },
      wave: grp([8, 40], 8, 'slugling').concat(rep(4, 16, 'snail', 6), [{ step: 20, type: 'shellback' }, { step: 60, type: 'shellback' }]).sort(byStep),
      solution: [{ perch: 1, type: 'frog', pattern: [0, 0, 0, 0, 1, 0, 0, 0] },
                 { perch: 0, type: 'cricket', pattern: [0, 1, 0, 0, 1, 0, 0, 1] },
                 { perch: 3, type: 'frog', pattern: [0, 0, 0, 0, 1, 0, 0, 1] }] },
    { id: 5, name: 'Full Chorus', lesson: 'Keep editing while it plays.',
      roster: ['frog', 'cricket'], fixed: F4, budget: 11,
      goal: { voices: { frog: 4, cricket: 4 }, harmony: 3 },
      wave: shift(grp([8, 40, 72], 8, 'slugling').concat(rep(5, 12, 'snail', 4), rep(3, 32, 'shellback', 10)), 48, 2).sort(byStep),
      solution: [{ perch: 1, type: 'frog', pattern: [0, 0, 1, 0, 0, 1, 0, 0] },
                 { perch: 3, type: 'frog', pattern: [0, 1, 0, 0, 1, 0, 0, 0] },
                 { perch: 0, type: 'cricket', pattern: [0, 1, 0, 0, 1, 0, 0, 0] },
                 { perch: 4, type: 'cricket', pattern: [0, 0, 1, 0, 0, 1, 0, 0] }] },
    { id: 6, name: 'Dawn Chorus', lesson: 'Everything at once.',
      roster: ['frog', 'cricket'], fixed: F4, budget: 14,
      goal: { voices: { frog: 5, cricket: 6 }, harmony: 5 },
      wave: grp([8, 40, 72], 8, 'slugling').concat(rep(6, 12, 'snail', 4), rep(4, 24, 'shellback', 0)).sort(byStep),
      solution: [{ perch: 1, type: 'frog', pattern: [1, 0, 1, 0, 0, 1, 0, 0] },
                 { perch: 3, type: 'frog', pattern: [0, 1, 0, 0, 0, 0, 1, 0] },
                 { perch: 0, type: 'cricket', pattern: [1, 1, 0, 0, 0, 1, 0, 0] },
                 { perch: 4, type: 'cricket', pattern: [0, 1, 1, 0, 0, 0, 1, 0] }] }
  ];
})();
if (typeof module !== 'undefined') module.exports = LEVELS;

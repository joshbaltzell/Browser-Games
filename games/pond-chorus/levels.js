// Nights 1 to 9. wave: [{step, type}] with step counted from the start of the wave (a loop boundary).
// goal: what the player's pattern must contain before the night can be won (the enemies must also be dealt with).
//   goal.voices = notes needed per creature type, goal.harmony = steps where two types sound together,
//   goal.groove = lowest groove tier (1 Steady, 2 Groovy).
// intro: creatures introduced tonight (a one-time card with their sound). demo: loops the pond plays before the player's turn,
//   [{loops, rows: {rowIndex: pattern}, line}], shown the first time a night is played.
// finale: the last night. Winning it plays the player's own pattern as the dawn song.
// The ramp: one frog and a beat, then rests, then a cricket and call-and-response, then the owl, then the firefly jar,
// then all four, then nights that cannot be won without a groovy rhythm, then the dawn song.
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
  function byStep(a, b) { return a.step - b.step; }
  function cat() { return Array.prototype.concat.apply([], arguments).sort(byStep); }
  // creature layouts. Perch 0 is nearest the start of the path, perch 5 nearest the lilies.
  var L4 = [{ perch: 1, type: 'cricket' }, { perch: 2, type: 'frog' }, { perch: 3, type: 'jar' }, { perch: 4, type: 'owl' }];
  var L5 = L4.concat([{ perch: 5, type: 'frog' }]);
  var L6 = [{ perch: 0, type: 'cricket' }].concat(L5);
  return [
    { id: 1, name: 'First Croak', lesson: 'Tap pads to make a pattern. The pond plays it on a loop.',
      roster: ['frog'], fixed: [{ perch: 1, type: 'frog' }], budget: 4,
      goal: { voices: { frog: 2 } },
      demo: [{ loops: 3, rows: { 0: [1, 0, 0, 0, 1, 0, 0, 0] }, line: 'Tap the pads to make a pattern. The pond plays it on a loop.' }],
      wave: rep(6, 16, 'slug', 8),
      solution: [{ perch: 1, type: 'frog', pattern: [1, 0, 0, 0, 1, 0, 0, 0] }] },
    { id: 2, name: 'A Gap Before', lesson: 'Leave a gap and the next note hits harder.',
      roster: ['frog'], fixed: [{ perch: 1, type: 'frog' }], budget: 4,
      goal: { voices: { frog: 3 } },
      demo: [{ loops: 1, rows: { 0: [1, 1, 1, 0, 0, 0, 0, 0] }, line: 'Notes right after each other hit softly.' },
             { loops: 2, rows: { 0: [1, 0, 0, 0, 1, 0, 0, 0] }, line: 'Leave a gap and the next note hits harder.' }],
      wave: rep(6, 16, 'snail', 8),
      solution: [{ perch: 1, type: 'frog', pattern: [1, 0, 0, 1, 0, 0, 1, 0] }] },
    { id: 3, name: 'Chirp and Answer', lesson: 'The cricket answers the frog. Call and answer sounds good.',
      intro: ['cricket'],
      roster: ['frog', 'cricket'], fixed: [{ perch: 1, type: 'frog' }, { perch: 0, type: 'cricket' }], budget: 7,
      goal: { voices: { frog: 2, cricket: 3 }, groove: 1 },
      demo: [{ loops: 1, rows: { 0: [1, 0, 0, 0, 1, 0, 0, 0] }, line: 'The frog calls.' },
             { loops: 2, rows: { 0: [1, 0, 0, 0, 1, 0, 0, 0], 1: [0, 0, 1, 0, 0, 0, 1, 0] }, line: 'The cricket answers. Take turns.' }],
      wave: cat(grp([8, 48], 8, 'slugling'), rep(3, 24, 'snail', 24)),
      solution: [{ perch: 1, type: 'frog', pattern: [0, 0, 1, 0, 1, 0, 1, 0] },
                 { perch: 0, type: 'cricket', pattern: [1, 0, 0, 0, 1, 0, 1, 0] }] },
    { id: 4, name: 'Slow Hoot', lesson: 'The owl slows everything in its wide reach.',
      intro: ['owl'],
      roster: ['frog', 'owl'], fixed: [{ perch: 1, type: 'frog' }, { perch: 3, type: 'owl' }], budget: 7,
      goal: { voices: { frog: 2, owl: 1 } },
      demo: [{ loops: 1, rows: { 1: [1, 0, 0, 0, 1, 0, 0, 0] }, line: 'The owl hoots long and low.' },
             { loops: 2, rows: { 0: [0, 0, 1, 0, 0, 0, 1, 0], 1: [1, 0, 0, 0, 1, 0, 0, 0] }, line: 'It slows every slug in reach, so the frog has more time.' }],
      wave: rep(12, 3, 'snail', 8),
      solution: [{ perch: 1, type: 'frog', pattern: [0, 0, 1, 0, 1, 0, 1, 0] },
                 { perch: 3, type: 'owl', pattern: [1, 0, 1, 0, 1, 0, 0, 0] }] },
    { id: 5, name: 'Lantern Light', lesson: 'The jar lights its friends and strips shells.',
      intro: ['jar'],
      roster: ['cricket', 'frog', 'jar'], fixed: [{ perch: 1, type: 'cricket' }, { perch: 2, type: 'frog' }, { perch: 3, type: 'jar' }], budget: 11,
      goal: { voices: { frog: 2, cricket: 2, jar: 2 } },
      demo: [{ loops: 1, rows: { 2: [1, 0, 0, 0, 1, 0, 0, 0] }, line: 'The jar glows. Slugs in its light lose armor.' },
             { loops: 2, rows: { 1: [0, 1, 0, 0, 0, 1, 0, 0], 2: [1, 0, 0, 0, 1, 0, 0, 0] }, line: 'Singers near the glow hit harder for three steps.' }],
      wave: rep(5, 6, 'shellback', 8),
      solution: [{ perch: 1, type: 'cricket', pattern: [0, 0, 1, 0, 0, 0, 1, 0] },
                 { perch: 2, type: 'frog', pattern: [1, 0, 0, 0, 0, 0, 1, 0] },
                 { perch: 3, type: 'jar', pattern: [1, 0, 0, 0, 1, 0, 0, 0] }] },
    { id: 6, name: 'Four Voices', lesson: 'Two voices on one step sing in harmony.',
      roster: ['frog', 'cricket', 'owl', 'jar'], fixed: L4, budget: 12,
      goal: { voices: { frog: 2, cricket: 2, owl: 1, jar: 1 }, harmony: 1 },
      demo: [{ loops: 2, rows: { 0: [1, 0, 0, 0, 0, 0, 1, 0], 1: [1, 0, 0, 0, 1, 0, 0, 0] }, line: 'Two voices on one step sing in harmony.' }],
      wave: cat(grp([8, 34], 10, 'slugling'), rep(8, 7, 'snail', 10), rep(2, 24, 'shellback', 16)),
      solution: [{ perch: 1, type: 'cricket', pattern: [1, 0, 0, 1, 0, 1, 0, 0] },
                 { perch: 2, type: 'frog', pattern: [0, 0, 0, 1, 0, 0, 1, 0] },
                 { perch: 3, type: 'jar', pattern: [0, 0, 1, 0, 0, 0, 0, 1] },
                 { perch: 4, type: 'owl', pattern: [0, 1, 0, 0, 1, 0, 0, 1] }] },
    { id: 7, name: 'Old Shellbacks', lesson: 'Light them, then hit them with a groovy rhythm.',
      roster: ['frog', 'cricket', 'owl', 'jar'], fixed: L5, budget: 12,
      goal: { voices: { frog: 2, cricket: 2, owl: 1, jar: 1 }, harmony: 2 },
      wave: cat(rep(7, 5, 'shellback', 8), rep(8, 5, 'snail', 10)),
      solution: [{ perch: 1, type: 'cricket', pattern: [0, 0, 1, 0, 0, 1, 0, 0] },
                 { perch: 2, type: 'frog', pattern: [0, 0, 0, 1, 0, 0, 0, 1] },
                 { perch: 3, type: 'jar', pattern: [0, 1, 0, 0, 1, 0, 0, 0] },
                 { perch: 4, type: 'owl', pattern: [1, 0, 0, 0, 0, 1, 0, 0] },
                 { perch: 5, type: 'frog', pattern: [0, 0, 1, 0, 0, 0, 1, 0] }] },
    { id: 8, name: 'Swarm Surge', lesson: 'A swarm. Keep a steady pulse and let the voices answer.',
      roster: ['frog', 'cricket', 'owl', 'jar'], fixed: L6, budget: 15,
      goal: { voices: { frog: 2, cricket: 2, owl: 1, jar: 1 }, harmony: 2 },
      wave: cat(grp([8, 26, 44, 62], 14, 'slugling'), rep(8, 5, 'shellback', 12), rep(12, 4, 'snail', 10)),
      solution: [{ perch: 0, type: 'cricket', pattern: [0, 0, 0, 0, 1, 0, 0, 0] },
                 { perch: 1, type: 'cricket', pattern: [0, 0, 1, 0, 0, 0, 1, 0] },
                 { perch: 2, type: 'frog', pattern: [0, 0, 1, 0, 0, 0, 1, 0] },
                 { perch: 3, type: 'jar', pattern: [0, 0, 0, 0, 0, 0, 1, 0] },
                 { perch: 4, type: 'owl', pattern: [1, 0, 0, 0, 0, 0, 0, 0] },
                 { perch: 5, type: 'frog', pattern: [0, 0, 1, 0, 0, 0, 0, 0] }] },
    { id: 9, name: 'Dawn Chorus', lesson: 'Whatever you play tonight becomes the dawn song.', finale: true,
      roster: ['frog', 'cricket', 'owl', 'jar'], fixed: L6, budget: 16,
      goal: { voices: { frog: 3, cricket: 3, owl: 2, jar: 2 }, harmony: 3 },
      wave: cat(grp([8, 24, 40, 56, 72], 14, 'slugling'), rep(11, 4, 'shellback', 10), rep(18, 4, 'snail', 10), rep(10, 8, 'slug', 16)),
      solution: [{ perch: 0, type: 'cricket', pattern: [0, 0, 1, 0, 0, 1, 0, 0] },
                 { perch: 1, type: 'cricket', pattern: [0, 0, 0, 1, 0, 0, 0, 1] },
                 { perch: 2, type: 'frog', pattern: [0, 1, 0, 0, 1, 0, 0, 0] },
                 { perch: 3, type: 'jar', pattern: [1, 0, 0, 0, 0, 1, 0, 0] },
                 { perch: 4, type: 'owl', pattern: [0, 0, 1, 0, 0, 0, 1, 0] },
                 { perch: 5, type: 'frog', pattern: [1, 0, 0, 1, 0, 0, 0, 0] }] }
  ];
})();
if (typeof module !== 'undefined') module.exports = LEVELS;

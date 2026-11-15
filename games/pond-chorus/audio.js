// Every sound is defined here by name. Game code only calls play('name', {time, gain}).
// Night pond in D minor. Everything sends to a 2.2 second reverb (set up in game.js).
// Voices: thump chirp hoot bell pluck brass organ noiseHit tick sweep
// Creature voices, each instantly different by ear: croak (low thump), chirp (two tiny high bursts),
// hoot (long soft low sine), glow (bell and a pluck grace note). bass, pad and hat are the groove layers that join the loop.
var A_ = Kit.audio;
var OWL_NOTES = [50, 53, 55, 57, 60, 57, 55, 53]; // D3 F3 G3 A3 C4 A3 G3 F3, by step: low and round

var SOUNDS = {
  // Frog note: D2 with a fast pitch drop, plus a short low "ribbit" under it.
  croak: function (t, o) {
    var g = (o.gain != null ? o.gain : 1);
    A_.thump(t, { midi: 38, gain: 0.8 * g, dur: 0.34, send: 0.3 });
    A_.thump(t + 0.07, { midi: 41, gain: 0.35 * g, dur: 0.16, send: 0.2 });
  },
  // Cricket note: two bursts 40 ms apart near 4.2 kHz.
  chirp: function (t, o) {
    var g = (o.gain != null ? o.gain : 1) * 0.45;
    A_.chirp(t, { freq: 4200, gain: g, dur: 0.07, send: 0.3 });
    A_.chirp(t + 0.04, { freq: 4300, gain: g, dur: 0.07, send: 0.3 });
  },
  // Owl note: long low hoot. Pitch comes from the step (opts.midi), default D3.
  hoot: function (t, o) {
    var g = (o.gain != null ? o.gain : 1), m = o.midi != null ? o.midi : 50;
    A_.hoot(t, { midi: m, gain: 0.5 * g, dur: 1.0, send: 0.45 });
    A_.hoot(t + 0.55, { midi: m - 2, gain: 0.3 * g, dur: 0.7, send: 0.45 });
  },
  // Firefly jar: a soft bell at A5 with a quiet plucked sparkle just after.
  glow: function (t, o) {
    var g = (o.gain != null ? o.gain : 1);
    A_.bell(t, { midi: 81, gain: 0.2 * g, dur: 1.4, send: 0.55 });
    A_.pluck(t + 0.09, { midi: 93, gain: 0.05 * g, dur: 0.25, send: 0.5 });
  },
  // Groove layers. bass: a round low pluck (D3 on step 0, A2 on step 4). pad: a soft D minor chord. hat: a tiny tick on the off beats.
  bass: function (t, o) {
    var g = (o.gain != null ? o.gain : 1);
    A_.pluck(t, { midi: o.midi != null ? o.midi : 50, gain: 0.3 * g, dur: 0.5, send: 0.2 });
  },
  pad: function (t, o) {
    var g = (o.gain != null ? o.gain : 1);
    [50, 57, 62].forEach(function (m) { A_.organ(t, { midi: m, gain: 0.05 * g, dur: 2.4, send: 0.6 }); });
  },
  hat: { voice: 'tick', freq: 5200, gain: 0.12, dur: 0.03, send: 0.15 },
  // The groove tier went up: two quick bell notes rising.
  tierUp: function (t, o) {
    var g = (o.gain != null ? o.gain : 1);
    A_.bell(t, { midi: 81, gain: 0.14 * g, dur: 0.8, send: 0.5 });
    A_.bell(t + 0.12, { midi: 88, gain: 0.14 * g, dur: 1.0, send: 0.5 });
  },
  pop: { voice: 'sweep', from: 600, to: 200, dur: 0.08, gain: 0.35, send: 0.2 },
  bite: function (t, o) {
    var g = (o.gain != null ? o.gain : 1);
    A_.thump(t, { midi: 33, gain: 0.7 * g, dur: 0.4, send: 0.3 });
    A_.bell(t + 0.05, { midi: 69, gain: 0.16 * g, dur: 0.8, send: 0.5 });
    A_.bell(t + 0.2, { midi: 62, gain: 0.16 * g, dur: 1.0, send: 0.5 });
  },
  // Budget refused: a soft low breath of noise (bandpass near 260 Hz stands in for a low-pass).
  hush: { voice: 'noiseHit', freq: 260, gain: 0.8, dur: 0.28, send: 0.2 },
  // Night won: D F A D on a bell.
  dawn: function (t, o) {
    var g = (o.gain != null ? o.gain : 1);
    [74, 77, 81, 86].forEach(function (m, i) {
      A_.bell(t + i * 0.2, { midi: m, gain: 0.2 * g, dur: 1.6, send: 0.55 });
    });
  },
  // Any pad: the creature's own sound at half gain. opts.kind = frog | cricket | owl | jar
  tap: function (t, o) {
    var k = o.kind || 'frog';
    var name = k === 'cricket' ? 'chirp' : k === 'owl' ? 'hoot' : k === 'jar' ? 'glow' : 'croak';
    play(name, { time: t, gain: (o.gain != null ? o.gain : 1) * 0.5, midi: o.midi });
  }
};
var play = Kit.audio.sfx(SOUNDS);
// Pond bed: low-passed noise plus a D2 and A2 drone with a 0.1 Hz swell.
var pondBed = Kit.audio.bed({ noise: { cutoff: 500, gain: 0.03 }, drone: { notes: [38, 45], gain: 0.02, lfoHz: 0.1 } });

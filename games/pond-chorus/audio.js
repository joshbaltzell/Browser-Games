// Every sound is defined here by name. Game code only calls play('name', {time, gain}).
// Night pond in D minor. Everything sends to a 2.2 second reverb (set up in game.js).
// Voices: thump chirp hoot bell pluck brass organ noiseHit tick sweep
var A_ = Kit.audio;
var OWL_NOTES = [62, 65, 67, 69, 72, 69, 67, 65]; // D4 F4 G4 A4 C5 A4 G4 F4, by step

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
  // Owl note: pitch comes from the step (opts.midi), default D4.
  hoot: { voice: 'hoot', midi: 62, gain: 0.45, dur: 0.6, send: 0.4 },
  glow: { voice: 'bell', midi: 81, gain: 0.2, dur: 1.2, send: 0.5 },
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

// Every sound is defined here by name. Game code only calls play('name').
// Quiet machinery in A minor. Nobody has listened to these yet; judge them in dev/sounds.html.
var SOUNDS = {
  roll: { voice: 'organ', midi: 33, gain: 0.07, dur: 0.12 },
  work: { voice: 'tick', freq: 1500, gain: 0.22, dur: 0.04 },
  pick: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    Kit.audio.pluck(t, { midi: 69, gain: 0.3 * g, dur: 0.25 });
    Kit.audio.pluck(t + 0.07, { midi: 76, gain: 0.3 * g, dur: 0.3 });
  },
  drop: { voice: 'thump', freq: 70, gain: 0.55, dur: 0.22 },
  lever: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    Kit.audio.tick(t, { freq: 1100, gain: 0.3 * g, dur: 0.05 });
    Kit.audio.thump(t + 0.06, { freq: 60, gain: 0.5 * g, dur: 0.2 });
  },
  lift: { voice: 'sweep', from: 90, to: 130, gain: 0.07, dur: 0.3, type: 'sawtooth' },
  connect: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    Kit.audio.thump(t, { freq: 55, gain: 0.6 * g, dur: 0.25 });
    Kit.audio.noiseHit(t + 0.05, { freq: 5000, hp: 3000, gain: 0.18 * g, dur: 0.35 });
  },
  done: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    Kit.audio.bell(t, { midi: 81, gain: 0.25 * g, dur: 0.6 });
    Kit.audio.bell(t + 0.14, { midi: 88, gain: 0.25 * g, dur: 0.8 });
  },
  second: function (t, o) {
    var n = o.midi != null ? o.midi : 0; // semitones above the base tick, set by the game
    Kit.audio.tick(t, { freq: 1000 * Math.pow(2, n / 12), gain: 0.32, dur: 0.05 });
  },
  rewind: { voice: 'sweep', from: 900, to: 120, gain: 0.14, dur: 0.5, type: 'triangle' },
  loop: { voice: 'bell', midi: 93, gain: 0.22, dur: 1.2, send: 0.6 },
  launch: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    Kit.audio.noiseHit(t, { freq: 220, gain: 0.5 * g, dur: 3 });
    Kit.audio.sweep(t, { from: 40, to: 90, gain: 0.35 * g, dur: 3, type: 'sawtooth' });
    var b = t + 3;
    Kit.audio.brass(b, { midi: 57, gain: 0.22 * g, dur: 1.4 });
    Kit.audio.brass(b, { midi: 61, gain: 0.18 * g, dur: 1.4 });
    Kit.audio.brass(b, { midi: 64, gain: 0.18 * g, dur: 1.4 });
  },
  scrub: { voice: 'sweep', from: 700, to: 90, gain: 0.3, dur: 0.9, type: 'sawtooth' }
};
var play = Kit.audio.sfx(SOUNDS);

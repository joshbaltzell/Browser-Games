// Every sound is defined here by name. Game code only calls play('name').
// A street band in A minor, 112 BPM. One chord per bar, cycling Am, F, C, G.
// The game sets CHORD.i before it plays a sound, so every instrument picks its pitch from the current chord.
var CHORD = { i: 0 };
var CHORDS = [[57, 60, 64], [53, 57, 60], [60, 64, 67], [55, 59, 62]];

function chordNotes() { return CHORDS[((CHORD.i % 4) + 4) % 4]; }
function pw(o) { return (o.gain != null ? o.gain : 1) * (1 + 0.2 * ((o.power || 1) - 1)); }

var SOUNDS = {
  kick: { voice: 'thump', midi: 33, gain: 0.55, dur: 0.32 },
  guitar: function (t, o) {
    var g = 0.2 * pw(o);
    chordNotes().forEach(function (m, i) { Kit.audio.pluck(t + 0.015 * i, { midi: m + 12, gain: g, dur: 0.45, send: 0.12 }); });
  },
  tamb: function (t, o) {
    var g = pw(o);
    Kit.audio.tick(t, { freq: 4200, gain: 0.22 * g, dur: 0.05 });
    Kit.audio.noiseHit(t, { freq: 7000, hp: true, gain: 0.16 * g, dur: 0.12 });
  },
  trumpet: function (t, o) {
    var c = chordNotes();
    Kit.audio.brass(t, { midi: c[2] + 12, gain: 0.15 * pw(o), dur: 0.28, send: 0.1 });
  },
  snare: function (t, o) {
    var g = pw(o);
    Kit.audio.noiseHit(t, { freq: 2200, gain: 0.3 * g, dur: 0.16 });
    Kit.audio.thump(t, { freq: 200, gain: 0.3 * g, dur: 0.12 });
  },
  clap: function (t, o) {
    Kit.audio.noiseHit(t, { freq: 1800, gain: 0.3 * (o.gain != null ? o.gain : 1), dur: 0.1 });
  },
  charm: { voice: 'organ', midi: 45, gain: 0.12, dur: 0.12, vary: 40 },
  fan: function (t, o) {
    var g = 0.2 * (o.gain != null ? o.gain : 1);
    Kit.audio.bell(t, { midi: 79, gain: g, dur: 0.5 });
    Kit.audio.bell(t + 0.09, { midi: 84, gain: g, dur: 0.6 });
  },
  coin: { voice: 'bell', midi: 88, gain: 0.14, dur: 0.5, vary: 20 },
  snap: function (t, o) {
    Kit.audio.sweep(t, { from: 900, to: 140, gain: 0.3, dur: 0.35, type: 'sawtooth' });
    Kit.audio.noiseHit(t, { freq: 3000, gain: 0.25, dur: 0.12 });
  },
  rec: function (t, o) {
    if (o.go) { Kit.audio.bell(t, { midi: 81, gain: 0.25, dur: 0.6 }); return; }
    Kit.audio.tick(t, { freq: 1800, gain: 0.3, dur: 0.04 });
  },
  // the beat tick: one short hi-hat on every step so the player can hear where to press; louder on the main beats
  tick: function (t, o) {
    Kit.audio.tick(t, { freq: 5200, gain: o.accent ? 0.2 : 0.11, dur: 0.03 });
  },
  splat: { voice: 'noiseHit', freq: 500, gain: 0.3, dur: 0.18 }
};
var play = Kit.audio.sfx(SOUNDS);

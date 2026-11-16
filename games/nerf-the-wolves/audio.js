// Every sound is defined here by name. Game code only calls play('name').
// Bright and comic, C major pentatonic, 0.8 s reverb on everything (see REVERB_SECONDS).
// Nobody has listened to these yet; judge them in dev/sounds.html.
var REVERB_SECONDS = 0.8;
var SEND = 0.3;
function nwGain(o) { return o && o.gain != null ? o.gain : 1; }
var SOUNDS = {
  // pluck up a fifth (C5 to G5) / down a fifth (G5 to C5)
  buy: function (t, o) {
    var g = nwGain(o);
    Kit.audio.pluck(t, { midi: 72, gain: 0.3 * g, dur: 0.25, send: SEND });
    Kit.audio.pluck(t + 0.08, { midi: 79, gain: 0.3 * g, dur: 0.3, send: SEND });
  },
  refund: function (t, o) {
    var g = nwGain(o);
    Kit.audio.pluck(t, { midi: 79, gain: 0.28 * g, dur: 0.25, send: SEND });
    Kit.audio.pluck(t + 0.08, { midi: 72, gain: 0.28 * g, dur: 0.3, send: SEND });
  },
  // rising noise swell over 400 ms
  run: function (t, o) {
    var g = nwGain(o);
    Kit.audio.noiseHit(t, { freq: 600, hp: 300, gain: 0.12 * g, dur: 0.2, send: SEND });
    Kit.audio.noiseHit(t + 0.1, { freq: 1500, hp: 700, gain: 0.2 * g, dur: 0.2, send: SEND });
    Kit.audio.noiseHit(t + 0.2, { freq: 3200, hp: 1500, gain: 0.28 * g, dur: 0.2, send: SEND });
  },
  // sweep from 800 Hz down to 200 Hz
  hand: { voice: 'sweep', from: 800, to: 200, gain: 0.22, dur: 0.5, type: 'triangle', send: SEND },
  // three quick ticks
  adjust: function (t, o) {
    var g = nwGain(o);
    for (var i = 0; i < 3; i++) Kit.audio.tick(t + i * 0.06, { freq: 1300 + i * 220, gain: 0.3 * g, dur: 0.04, send: SEND });
  },
  pounce: function (t, o) {
    var g = nwGain(o);
    Kit.audio.thump(t, { freq: 80, gain: 0.5 * g, dur: 0.2, send: SEND });
    Kit.audio.noiseHit(t, { freq: 2500, hp: 1200, gain: 0.2 * g, dur: 0.12, send: SEND });
  },
  // slide-whistle upward
  escape: { voice: 'sweep', from: 500, to: 1500, gain: 0.2, dur: 0.35, type: 'sine', send: SEND },
  // bell with an upward glide
  ghost: function (t, o) {
    var g = nwGain(o);
    Kit.audio.bell(t, { midi: 79, gain: 0.2 * g, dur: 0.6, send: SEND });
    Kit.audio.sweep(t, { from: 700, to: 1400, gain: 0.08 * g, dur: 0.5, type: 'sine', send: SEND });
  },
  prayer: { voice: 'bell', midi: 81, gain: 0.14, dur: 0.9, send: SEND },
  // C major arpeggio on brass: C E G C
  balanced: function (t, o) {
    var g = nwGain(o), n = [60, 64, 67, 72];
    for (var i = 0; i < n.length; i++) Kit.audio.brass(t + i * 0.12, { midi: n[i], gain: 0.2 * g, dur: i === 3 ? 0.9 : 0.25, send: SEND });
  },
  // two falling plucks
  notyet: function (t, o) {
    var g = nwGain(o);
    Kit.audio.pluck(t, { midi: 76, gain: 0.3 * g, dur: 0.3, send: SEND });
    Kit.audio.pluck(t + 0.2, { midi: 69, gain: 0.3 * g, dur: 0.5, send: SEND });
  },
  // an animal wanders in: one soft pentatonic pluck (the game passes a rising midi counter)
  arrive: function (t, o) {
    var g = nwGain(o), m = [72, 74, 76, 79, 81][Math.floor(o && o.midi != null ? o.midi : 0) % 5];
    Kit.audio.pluck(t, { midi: m, gain: 0.14 * g, dur: 0.22, send: SEND });
  },
  // the dawn beat before the arrivals: three rising chirps and a soft bell
  dawn: function (t, o) {
    var g = nwGain(o), n = [88, 91, 95];
    for (var i = 0; i < n.length; i++) Kit.audio.chirp(t + i * 0.16, { midi: n[i], gain: 0.09 * g, dur: 0.1, send: SEND });
    Kit.audio.bell(t + 0.5, { midi: 84, gain: 0.1 * g, dur: 0.9, send: SEND });
  },
  click: { voice: 'tick', freq: 1500, gain: 0.25, dur: 0.04, send: SEND },
  // bed pieces: birdsong blip (the game schedules these 3 to 6 s apart)
  bird: function (t, o) {
    var g = nwGain(o), m = [84, 86, 88, 91][Math.floor((o && o.midi != null ? o.midi : 0)) % 4];
    Kit.audio.chirp(t, { midi: m, gain: 0.07 * g, dur: 0.1, send: SEND });
    Kit.audio.chirp(t + 0.11, { midi: m + 2, gain: 0.06 * g, dur: 0.1, send: SEND });
  }
};
var play = Kit.audio.sfx(SOUNDS);
// Quiet C and G drone.
var BED = { noise: { cutoff: 500, gain: 0.012 }, drone: { notes: [48, 55], gain: 0.012, lfoHz: 0.15 } };

// Every sound is defined here by name. Game code only calls play('name').
// Warm afternoon in G major. Nobody has listened to these yet: judge them in dev/sounds.html.
// Entry: { voice, midi | freq, gain, dur, send, vary } or a function (time, opts) that layers several voices.
var G_MAJOR = [67, 69, 71, 72, 74, 76, 78, 79, 81, 83, 84, 86]; // G4 up to D6
function kv() { return Kit.audio; }
function gm(o) { return (o && o.gain != null) ? o.gain : 1; }

var SOUNDS = {
  // tray slot filled / cleared: a small pluck stepping up / down
  add: function (t, o) { kv().pluck(t, { midi: 79, gain: 0.22 * gm(o), dur: 0.16 }); kv().pluck(t + 0.07, { midi: 83, gain: 0.2 * gm(o), dur: 0.2 }); },
  remove: function (t, o) { kv().pluck(t, { midi: 83, gain: 0.2 * gm(o), dur: 0.14 }); kv().pluck(t + 0.07, { midi: 76, gain: 0.2 * gm(o), dur: 0.2 }); },
  // RAID pressed: G B D
  raid: function (t, o) { [67, 71, 74].forEach(function (m, i) { kv().pluck(t + i * 0.09, { midi: m, gain: 0.26 * gm(o), dur: 0.25 }); }); },
  // a bug is released
  step: { voice: 'tick', gain: 0.08 },
  // swatter: a fast sweep then a thump
  swat: function (t, o) { kv().sweep(t, { from: 900, to: 140, dur: 0.09, gain: 0.2 * gm(o) }); kv().thump(t + 0.07, { midi: 41, gain: 0.34 * gm(o), dur: 0.2 }); },
  // salt shaker: short high-passed noise
  salt: { voice: 'noiseHit', hp: 3500, gain: 0.12, dur: 0.12 },
  // sprinkler: noise pulses
  spray: function (t, o) { for (var i = 0; i < 3; i++) kv().noiseHit(t + i * 0.07, { hp: 2200, gain: 0.07 * gm(o), dur: 0.06 }); },
  // zapper: a chirp with a square edge
  zap: function (t, o) { kv().sweep(t, { from: 1500, to: 500, type: 'square', dur: 0.09, gain: 0.08 * gm(o) }); kv().chirp(t, { midi: 91, gain: 0.1 * gm(o), dur: 0.07 }); },
  // jam trap catches a bug: low sweep
  stuck: { voice: 'sweep', from: 320, to: 110, dur: 0.35, gain: 0.22 },
  // a bug gives up: falling sweep
  giveup: { voice: 'sweep', fromMidi: 79, toMidi: 60, dur: 0.4, gain: 0.18, type: 'triangle' },
  // a bite of pie: crunch then a bell
  bite: function (t, o) { kv().noiseHit(t, { freq: 1800, hp: 900, gain: 0.14 * gm(o), dur: 0.06 }); kv().bell(t + 0.05, { midi: 79, gain: 0.16 * gm(o), dur: 0.5 }); },
  // gadget placed: woody thump
  place: function (t, o) { kv().thump(t, { midi: 52, gain: 0.3 * gm(o), dur: 0.12 }); kv().tick(t + 0.01, { gain: 0.1 * gm(o) }); },
  // raid over: arpeggio up the scale, one note per bite (opts.count)
  result: function (t, o) {
    var n = Math.max(1, Math.min(12, (o && o.count) || 1));
    for (var i = 0; i < n; i++) kv().pluck(t + i * 0.075, { midi: G_MAJOR[i], gain: 0.2 * gm(o), dur: 0.3 });
    kv().bell(t + n * 0.075, { midi: G_MAJOR[n - 1] + 12, gain: 0.1 * gm(o), dur: 0.7 });
  },
  // bed pieces, scheduled by game.js: birdsong and a slow four-note phrase
  bird: function (t, o) {
    var base = 86 + (((o && o.pick) || 0) % 5);
    kv().chirp(t, { midi: base, gain: 0.05 * gm(o), dur: 0.06 });
    kv().chirp(t + 0.09, { midi: base + 2, gain: 0.045 * gm(o), dur: 0.06 });
    kv().chirp(t + 0.18, { midi: base - 1, gain: 0.04 * gm(o), dur: 0.08 });
  },
  phrase: function (t, o) { [67, 71, 74, 79].forEach(function (m, i) { kv().pluck(t + i * 0.55, { midi: m, gain: 0.07 * gm(o), dur: 0.9 }); }); }
};
var play = Kit.audio.sfx(SOUNDS);

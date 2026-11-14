// Every sound is defined here by name. Game code only calls play('name').
// Fairground in F major. Nobody has listened to these yet: judge them with dev/sounds.html.
var SOUNDS = {
  aim: { voice: 'tick', midi: 77, gain: 0.22 },
  putt: { voice: 'thump', midi: 52, gain: 0.5, dur: 0.14 },
  wallPlain: { voice: 'tick', midi: 55, gain: 0.4 },
  wallRed: { voice: 'sweep', fromMidi: 60, toMidi: 84, dur: 0.06, gain: 0.28, type: 'triangle' },
  wallBlue: { voice: 'noiseHit', freq: 380, dur: 0.12, gain: 0.4 },
  wallYellow: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    Kit.audio.chirp(t, { midi: 84, gain: 0.22 * g, dur: 0.1 });
    Kit.audio.sweep(t, { fromMidi: 65, toMidi: 89, dur: 0.1, gain: 0.2 * g, type: 'square' });
  },
  cup: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    [0, 0.07, 0.14].forEach(function (d, i) { Kit.audio.tick(t + d, { midi: 72 + i * 2, gain: 0.3 * g }); });
    Kit.audio.bell(t + 0.24, { midi: 89, gain: 0.3 * g, dur: 1.2 });
  },
  lip: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    Kit.audio.organ(t, { midi: 74, gain: 0.2 * g, dur: 0.14 });
    Kit.audio.organ(t + 0.14, { midi: 67, gain: 0.2 * g, dur: 0.22 });
  },
  hal: { voice: 'organ', midi: 65, gain: 0.1, dur: 0.07 },
  caught: function (t, o) {
    var g = o.gain != null ? o.gain : 1;
    [65, 69, 72, 77].forEach(function (m, i) { Kit.audio.brass(t + i * 0.13, { midi: m, gain: 0.22 * g, dur: i === 3 ? 0.6 : 0.16 }); });
  },
  wrong: { voice: 'sweep', fromMidi: 62, toMidi: 38, dur: 0.7, gain: 0.3, type: 'sawtooth' },
  click: { voice: 'tick', midi: 84, gain: 0.25 }
};
var play = Kit.audio.sfx(SOUNDS);

// Ambient bed and the distant waltz. Created here, started by game.js on the first gesture.
var BED = (function () {
  var noise = Kit.audio.bed({ noise: { cutoff: 900, gain: 0.02 } });
  // Eight bars in 3/4, F | F | Bb | C | F | Dm | C | F.
  var bass = [41, 41, 46, 48, 41, 50, 48, 41];
  var chord = [[65, 69], [65, 69], [62, 65], [64, 67], [65, 69], [65, 69], [64, 67], [65, 69]];
  var lead = [72, 69, 72, 77, 0, 72, 74, 70, 74, 72, 67, 64, 69, 72, 77, 74, 69, 65, 67, 64, 67, 65, 0, 0];
  var clock = Kit.audio.clock({
    bpm: 132, stepsPerBeat: 1,
    onStep: function (step, time) {
      var i = step % 24, bar = Math.floor(i / 3), beat = i % 3;
      if (beat === 0) Kit.audio.organ(time, { midi: bass[bar], gain: 0.04, dur: 0.35 });
      else chord[bar].forEach(function (m) { Kit.audio.organ(time, { midi: m - 12, gain: 0.02, dur: 0.18 }); });
      if (lead[i]) Kit.audio.organ(time, { midi: lead[i], gain: 0.04, dur: 0.36 });
    }
  });
  return {
    start: function () { noise.start(); clock.start(); },
    stop: function () { noise.stop(); clock.stop(); }
  };
})();

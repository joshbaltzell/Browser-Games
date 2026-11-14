// Every sound is defined here by name. Game code only calls play('name').
// Entry: { voice, midi | freq, gain, dur, send, vary } or a function (time, opts) that layers several voices.
// Voices: thump chirp hoot bell pluck brass organ noiseHit tick sweep
var SOUNDS = {
  // click: { voice: 'tick', gain: 0.3 },
};
var play = Kit.audio.sfx(SOUNDS);

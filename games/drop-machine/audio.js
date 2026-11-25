// Drop Machine voices, built on Kit.audio. Every call takes an audio time, so hits can be scheduled ahead.
var DMAudio = (function () {
  'use strict';
  var A = Kit.audio;

  // vel 0..1 comes from impact speed. gain is the pit volume times the master volume.
  function velocity(speed) { return Math.max(0.25, Math.min(1, 0.25 + speed / 1500)); }

  function bar(time, midi, material, vel, gain) {
    if (material === 'metal') {
      A.bell(time, { midi: midi, gain: 0.2 * vel * gain, dur: 2.2, send: 0.3 });
    } else if (material === 'glass') {
      A.bell(time, { midi: midi, gain: 0.12 * vel * gain, dur: 1.1, send: 0.45 });
    } else {
      A.pluck(time, { midi: midi, gain: 0.26 * vel * gain, dur: 0.38, send: 0.15 });
      A.bell(time, { midi: midi + 12, gain: 0.04 * vel * gain, dur: 0.25, send: 0.1 });
    }
  }

  function drum(time, kind, vel, gain) {
    if (kind === 'kick') {
      A.thump(time, { freq: 52, gain: 0.95 * vel * gain, dur: 0.32 });
    } else if (kind === 'snare') {
      A.noiseHit(time, { freq: 1900, gain: 0.4 * vel * gain, dur: 0.17, send: 0.12 });
      A.thump(time, { freq: 85, gain: 0.3 * vel * gain, dur: 0.09 });
    } else {
      A.noiseHit(time, { freq: 7500, hp: true, gain: 0.2 * vel * gain, dur: 0.05 });
    }
  }

  function pad(time, vel, gain) { A.tick(time, { freq: 1500, gain: 0.2 * vel * gain, dur: 0.035 }); }

  // Play one part at a given time. speed is the impact speed (use ~900 for a preview).
  function playPart(part, midi, time, speed, gain) {
    var vel = velocity(speed);
    if (part.type === 'bar') bar(time, midi, part.material, vel, gain);
    else if (part.type === 'drum') drum(time, DM.DRUM_KIND[part.size], vel, gain);
    else pad(time, vel, gain);
  }

  return { velocity: velocity, playPart: playPart };
})();

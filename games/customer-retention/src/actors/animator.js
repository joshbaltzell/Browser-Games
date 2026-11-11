import { CLIPS, makePose, samplePose, blendPose } from './poses.js';

// Plays pose clips on a rig, cross-fading between them. update(dt) samples the
// clip, blends from the pose that was showing when the clip started, and hands
// the result to rig.setPose(); call rig.update(dt) after it. Allocates nothing
// per frame.
//
// play('flinch') runs the one-shot and then returns to the clip it interrupted.
// play('talk') turns the face's talking on; any other clip turns it off.
// Unknown names are ignored, and playing the looping clip already playing does
// nothing.

const DEFAULT_FADE = 0.15;
// A hit snaps in: the flinch peaks 0.06 s in, so the default fade would eat it.
const HIT_FADE = 0.03;

const smooth01 = (k) => (k <= 0 ? 0 : k >= 1 ? 1 : k * k * (3 - 2 * k));

export function createAnimator(rig) {
  const spec = rig.spec;
  let name = 'idle';
  let time = 0;
  let resume = 'idle';
  let fade = 0;
  let fadeTime = 0;
  const from = makePose();
  const sample = makePose();
  const out = samplePose(name, 0, spec);
  blendPose(out, out, 1, from);

  function play(next, { fade: f } = {}) {
    if (!Object.prototype.hasOwnProperty.call(CLIPS, next)) return;
    if (next === name && CLIPS[next].loop) return;
    if (next === 'flinch' && name !== 'flinch') resume = name;
    blendPose(out, out, 1, from); // fade from whatever is showing now
    fade = f === undefined ? (next === 'flinch' ? HIT_FADE : DEFAULT_FADE) : Math.max(f, 0);
    fadeTime = 0;
    name = next;
    time = 0;
    rig.face.setTalking(next === 'talk');
  }

  function update(dt) {
    const clip = CLIPS[name];
    time += dt;
    fadeTime += dt;
    if (clip.loop) {
      if (time >= clip.duration) time -= clip.duration * Math.floor(time / clip.duration);
    } else if (time >= clip.duration) {
      play(resume);
      return update(0);
    }
    samplePose(name, time, spec, sample);
    blendPose(from, sample, fade > 0 ? smooth01(fadeTime / fade) : 1, out);
    rig.setPose(out);
  }

  return { play, update, current: () => name };
}

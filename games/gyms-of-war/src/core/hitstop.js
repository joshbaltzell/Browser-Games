// Hitstop: a brief crawl of the simulation clock when something heavy lands (the cover slam). It scales the time the loop feeds its fixed steps,
// so every step is still exactly 1/60 s (determinism is untouched): the world just gets fewer steps per real second for a moment. Pure.
import { TUNING } from '../tuning.js';

export function createHitstop({ feedback = () => TUNING.feedback } = {}) {
  let left = 0;   // real seconds of crawl left
  return {
    // Starts (or extends to) a crawl of `time` real seconds; the default is feedback.slamHitstop.
    trigger(time = feedback().slamHitstop) {
      if (time > 0 && Number.isFinite(time)) left = Math.max(left, time);
    },
    // Once per frame, with the real seconds: the time scale for this frame (1 normally, feedback.hitstopScale while a crawl runs).
    scale(realSeconds) {
      if (!(left > 0)) return 1;
      left = Math.max(0, left - (realSeconds > 0 && Number.isFinite(realSeconds) ? realSeconds : 0));
      const s = feedback().hitstopScale;
      return Number.isFinite(s) ? Math.max(0, Math.min(1, s)) : 1;
    },
    active: () => left > 0,
    reset() { left = 0; },
  };
}

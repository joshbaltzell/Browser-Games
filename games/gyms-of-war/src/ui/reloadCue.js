// The active reload's rising tick: while the marker closes in on the bright zone a tick sounds, faster and higher as it gets close, and stops once
// it is past. Pure: the caller plays the sound for each tick it returns.
import { TUNING } from '../tuning.js';

// Where the ticking starts and how near the bright zone the marker is: u is the marker (0 to 1), row the weapon's reload row.
// Returns { active, near } with near 0 at the start of the lead and 1 at the bright zone's start.
export function reloadApproach(u, row, feedback = TUNING.feedback) {
  const lead = Math.max(0, Math.min(1, feedback.reloadTickLead));
  const goal = row.perfectStart;
  if (!(lead > 0) || !(u < goal) || !(u >= goal - lead)) return { active: false, near: 0 };
  return { active: true, near: Math.max(0, Math.min(1, (u - (goal - lead)) / lead)) };
}

export function createReloadCue({ feedback = () => TUNING.feedback } = {}) {
  let wait = 0;
  return {
    // One frame: u the marker, pressed whether the player has pressed (no ticks after), dt in seconds. Returns { tick, pitch } with pitch 0 to 1, or null.
    step(dt, u, row, pressed = false) {
      const fb = feedback();
      const a = pressed ? { active: false, near: 0 } : reloadApproach(u, row, fb);
      if (!a.active) { wait = 0; return null; }
      wait -= dt > 0 ? dt : 0;
      if (wait > 0) return null;
      const slow = Math.max(fb.reloadTickSlow, 0.01), fast = Math.max(Math.min(fb.reloadTickFast, slow), 0.01);
      wait = slow + (fast - slow) * a.near;
      return { tick: true, pitch: a.near };
    },
    reset() { wait = 0; },
  };
}

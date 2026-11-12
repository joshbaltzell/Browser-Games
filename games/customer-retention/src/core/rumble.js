// Pad rumble through the Gamepad API's vibrationActuator, guarded: no pad, no actuator, an unsupported effect or a throwing call all do nothing.
import { TUNING } from '../tuning.js';

// getPads() returns the pad list (navigator.getGamepads in the page). strength is 0 to 1 and splits into the weak and strong motors.
export function createRumble({ getPads = () => [], feedback = () => TUNING.feedback } = {}) {
  return {
    // A pulse of `strength` (0 to 1) for `seconds`. Returns whether an effect was asked for.
    pulse(strength, seconds, { weak = 0.6, strong = 1 } = {}) {
      if (!(feedback().rumble > 0) || !(strength > 0) || !(seconds > 0)) return false;
      const s = Math.min(1, strength);
      try {
        const pads = getPads() || [];
        for (const p of pads) {
          const act = p && p.connected && p.vibrationActuator;
          if (!act || typeof act.playEffect !== 'function') continue;
          const r = act.playEffect('dual-rumble', { startDelay: 0, duration: Math.round(seconds * 1000), weakMagnitude: Math.min(1, s * weak), strongMagnitude: Math.min(1, s * strong) });
          if (r && typeof r.catch === 'function') r.catch(() => {});
          return true;
        }
      } catch (e) { /* rumble is a nicety */ }
      return false;
    },
  };
}

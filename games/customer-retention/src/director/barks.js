import { TUNING } from '../tuning.js';

// What Associates shout. Text only; voices come in milestone 10.
export const BARKS = Object.freeze({
  lockdown: 'Lockdown! Your business is important to us!',
  push: 'Escalating! Please hold!',
  flank: 'Circling round to better assist you!',
  reload: 'Restocking!',
  downed: 'Customer resolved!',
  clear: 'Ticket… closed…',
});

// The one bark line on screen: it shows for barkTime seconds, and a new bark (other than a forced one) waits until
// barkGap seconds after the last one started. Time comes from tick(dt), called once per simulation step.
export function createBarkLine(fb = () => TUNING.feedback) {
  let since = Infinity, left = 0, text = null;
  return {
    say(key, force = false) {
      if (!BARKS[key]) return false;
      if (!force && since < fb().barkGap) return false;
      text = BARKS[key]; left = fb().barkTime; since = 0;
      return true;
    },
    tick(dt) { if (dt > 0) { since += dt; left -= dt; } },
    // { speaker, text } while a line is showing, else null.
    current: () => (left > 0 && text ? { speaker: 'Associate', text } : null),
    reset() { since = Infinity; left = 0; text = null; },
  };
}

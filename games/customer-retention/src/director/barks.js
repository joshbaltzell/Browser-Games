import { TUNING } from '../tuning.js';
import { PALETTE } from '../render/palette.js';

// The speaker's colour for the bark line (the HUD reads it by speaker name).
export const SPEAKER_COLORS = Object.freeze({ Rep: PALETTE.glorpPurple, PA: PALETTE.cream, Tobble: PALETTE.tobbleMint });
const T = (...lines) => Object.freeze(lines.map(text => Object.freeze({ speaker: 'Tobble', text })));

// What the Reps shout (the Glorp aliens that run GlorpFit). Text only; voices come in milestone 10. Each key holds a short pool
// that is read in turn, so a repeat never comes twice in a row. `speaker` is 'Rep' unless the line is the station PA.
export const BARKS = Object.freeze({
  lockdown: Object.freeze([{ speaker: 'PA', text: 'ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE.' }]),
  push: Object.freeze([
    'Before you go, have you seen our Platinum tier?',
    "Cancelling is a big decision. Let's talk about your goals!",
    'Have you considered a free month?',
  ]),
  flank: Object.freeze([
    "Let's circle back to your goals!",
    'Just a quick word about your plan!',
    "We'd hate to see you go. That way!",
  ]),
  reload: Object.freeze(['Restocking the protein!', 'Re-racking!', 'One moment, topping up the upsell!']),
  downed: Object.freeze(['Your membership has been renewed!', 'See you tomorrow! And tomorrow!']),
  dive: Object.freeze(['Incoming weight!', 'Drop set! DROP SET!']),
  cloneDown: Object.freeze(['Just\u2026 resting between sets\u2026']),
  cloneRevive: Object.freeze(['On your feet! Membership quotas!']),
  padOpen: Object.freeze([{ speaker: 'PA', text: 'The sauna is now a spawning pool. Please enjoy responsibly.' }]),
  padClosed: Object.freeze([{ speaker: 'PA', text: 'The sauna is closed for cleaning. Forever.' }]),
  // Tobble, the squadmate.
  tobbleRevive: T('I got you! PUSH!', 'I got you! Push! PUSH! Two more!'),
  tobbleDown: T('I\'m down! This was not in the internship packet!', 'Doc! I need a spot!'),
  tobbleComplain: T('Still down! Logging this as cardio!', 'My tracker says I\'m resting. I am NOT resting!'),
  tobbleUp: T('Two more reps! I\'m good!'),
  tobbleFlank: T('Doc! One\'s going round the side!', 'Flanker! That\'s the word, right? FLANKER!'),
  tobblePad: T('The sauna\'s spawning! Kettlebell it, Doc!'),
  tobbleClear: T('Ooh, you closed your rings!'),
  tobbleHeadshot: T('That\'s a PR!'),
  clear: Object.freeze(['Your satisfaction is our\u2026 priority\u2026', 'Auto-renew\u2026 is\u2026 forever\u2026', 'Have a\u2026 glorp\u2026 day\u2026']),
});

// The one bark line on screen: it shows for barkTime seconds, and a new bark (other than a forced one) waits until
// barkGap seconds after the last one started. Time comes from tick(dt), called once per simulation step.
export function createBarkLine(fb = () => TUNING.feedback) {
  let since = Infinity, left = 0, line = null;
  const turn = {};   // the next line to read, by key
  return {
    say(key, force = false) {
      if (!BARKS[key]) return false;
      if (!force && since < fb().barkGap) return false;
      const pool = BARKS[key], i = (turn[key] || 0) % pool.length;
      turn[key] = i + 1;
      line = typeof pool[i] === 'string' ? { speaker: 'Rep', text: pool[i] } : pool[i];
      left = fb().barkTime; since = 0;
      return true;
    },
    tick(dt) { if (dt > 0) { since += dt; left -= dt; } },
    // { speaker, text } while a line is showing, else null.
    current: () => (left > 0 && line ? { speaker: line.speaker, text: line.text } : null),
    reset() { since = Infinity; left = 0; line = null; for (const k of Object.keys(turn)) turn[k] = 0; },
  };
}

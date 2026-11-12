import { TUNING } from '../tuning.js';
import { PALETTE } from '../render/palette.js';

// The speaker's colour for the bark line (the HUD reads it by speaker name).
export const SPEAKER_COLORS = Object.freeze({ Rep: PALETTE.glorpPurple, PA: PALETTE.cream, Tobble: PALETTE.tobbleMint, Trainer: PALETTE.planet, Overlord: '#ffcf3a', Doc: PALETTE.cream });
const T = (...lines) => Object.freeze(lines.map(text => Object.freeze({ speaker: 'Tobble', text })));
const P = (...lines) => Object.freeze(lines.map(text => Object.freeze({ speaker: 'Trainer', text })));
const O = (...lines) => Object.freeze(lines.map(text => Object.freeze({ speaker: 'Overlord', text })));

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
  // The Personal Trainers (the rushers): a shout as one starts to run at Doc, the one at the top of every swing, and the last words.
  trainerCharge: P('ONE MORE REP!', "You're not quitting, you're just TIRED!", 'PAIN IS WEAKNESS LEAVING YOUR WALLET!', 'NO EXCUSES!'),
  trainerWindup: P('HUP!'),
  trainerDeath: P('\u2026tell my\u2026 macros\u2026'),
  // The Membership Overlord (the boss): its welcome, the call for its team in phase 2, the return, the bargaining in phase 3 (in order, then Tobble and
  // Doc answer) and the last words.
  bossIntro: O('Doc Vex! Do come in. Your commitment is so valuable to us.'),
  bossTeam: O('Have you met our team?'),
  bossReturn: O('Let us talk about retention. Again.'),
  bossOffer: O('One month free.', 'THREE months!', 'SIX MONTHS AND A TOWEL!'),
  bossOfferTobble: T("Doc, that's actually a good\u2014"),
  bossOfferDoc: Object.freeze([Object.freeze({ speaker: 'Doc', text: 'No.' })]),
  bossDeath: O('Cancellation\u2026 is\u2026 a process\u2026'),
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
  const queue = [];  // forced barks that arrived in the same step as another, waiting their turn
  const speakerOf = (key) => { const pool = BARKS[key], l = pool[(turn[key] || 0) % pool.length]; return typeof l === 'string' ? 'Rep' : l.speaker; };
  function show(key) {
    const pool = BARKS[key], i = (turn[key] || 0) % pool.length;
    turn[key] = i + 1;
    line = typeof pool[i] === 'string' ? { speaker: 'Rep', text: pool[i] } : pool[i];
    left = fb().barkTime; since = 0;
  }
  return {
    say(key, force = false) {
      if (!BARKS[key]) return false;
      if (!force && since < fb().barkGap) return false;
      // Two forced barks from different speakers in one step (the PA's sauna line and Tobble's): the second waits until the first has shown for barkMinShow.
      if (force && line && left > 0 && since < 1e-9 && speakerOf(key) !== line.speaker) { queue.push(key); return true; }
      show(key);
      return true;
    },
    tick(dt) {
      if (!(dt > 0)) return;
      since += dt; left -= dt;
      if (queue.length && since >= fb().barkMinShow) show(queue.shift());
    },
    // { speaker, text, color } while a line is showing, else null.
    current: () => (left > 0 && line ? { speaker: line.speaker, text: line.text, color: SPEAKER_COLORS[line.speaker] || null } : null),
    reset() { since = Infinity; left = 0; line = null; queue.length = 0; for (const k of Object.keys(turn)) turn[k] = 0; },
  };
}

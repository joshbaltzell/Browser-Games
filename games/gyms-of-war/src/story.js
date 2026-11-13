// The story between the fights, as pure data and rules (the DOM is ui/storyCard.js): the title screen's backstory and clock line, one
// elevator card for each ride between floors, and a small pool of one-liners for when Doc is sent back to the start of an arena.
// No DOM, no WebGL. Lines are in the story doc's voice (docs/superpowers/specs/2026-11-12-gyms-of-war-story.md).
import { ARENAS, ARENA_TITLES, hoursLine } from './run.js';

// The title's backstory, under the logo: three or four short lines.
export const TITLE_STORY = Object.freeze([
  'On January 2nd, Doc Vex signed up for GlorpFit Orbital. He went twice.',
  'He has been billed $49.99 a month for seven years.',
  'The gym is run by aliens, and the aliens will not let anyone cancel.',
  'Cancellation must be made in person.',
]);

export const NEW_RUN_CLOCK = 'Tuesday, 1:30 p.m. — the Cancellation Desk closes at 2:15';

// The clock line under the backstory: a new run starts at 1:30; a saved checkpoint shows that arena's (shrinking) cancellation hours.
export function titleClock(saved) {
  const i = Number.isInteger(saved) ? Math.max(0, Math.min(ARENAS.length - 1, saved)) : 0;
  if (i === 0) return NEW_RUN_CLOCK;
  return `${floorLabel(i)} — ${hoursLine(i)}`;
}

// Floors of the tower. The numbers only run on the elevator's counter and the signs; the code names for arenas stay as they are.
export const FLOORS = Object.freeze([
  Object.freeze({ n: 1, name: 'CHECK-IN', sign: 'FLOOR 1 — CHECK-IN' }),
  Object.freeze({ n: 12, name: 'SMOOTHIE BAR', sign: 'FLOOR 12 — SMOOTHIE BAR' }),
  Object.freeze({ n: 49, name: 'CANCELLATIONS', top: true, sign: 'TOP FLOOR — CANCELLATIONS' }),
]);
export const floorSign = (index) => FLOORS[Math.max(0, Math.min(FLOORS.length - 1, index | 0))].sign;
export const floorLabel = (index) => { const f = FLOORS[Math.max(0, Math.min(FLOORS.length - 1, index | 0))]; return f.top ? 'Top floor' : `Floor ${f.n}`; };

export const MUZAK = '♪ Now playing: Sweatin’ to the Fine Print ♪';

// One card for each ride, keyed by the floor Doc is going to (1 = Smoothie Bar, 2 = the Cancellation Desk).
// Speakers match director/barks.js SPEAKER_COLORS.
export const TRANSITION_CARDS = Object.freeze({
  1: Object.freeze([
    Object.freeze({ who: 'Doc', text: 'I would like to cancel my membership.' }),
    Object.freeze({ who: 'PA', text: 'Have you tried our Smoothie Bar? First one’s free!*' }),
    Object.freeze({ who: 'Tobble', text: 'Ooh, free.' }),
    Object.freeze({ who: 'Doc', text: 'There’s an asterisk.' }),
  ]),
  2: Object.freeze([
    Object.freeze({ who: 'PA', text: 'Please take a number. Now serving: 3.' }),
    Object.freeze({ who: 'PA', text: 'Your number: 4,912,006.' }),
    Object.freeze({ who: 'Doc', text: 'I have been billed for seven years. I can wait.' }),
    Object.freeze({ who: 'Tobble', text: 'That’s… fine, we have snacks.' }),
  ]),
});

// The ride from arena index `from` to `to` (to > from): where it goes, what is said, and the new cancellation hours.
export function transitionCard(from, to) {
  const i = Math.max(1, Math.min(ARENAS.length - 1, to | 0));
  const a = FLOORS[Math.max(0, Math.min(FLOORS.length - 1, from | 0))], b = FLOORS[i];
  return {
    from: a.n, to: b.n, top: !!b.top, arrival: b.top ? 'TOP' : String(b.n), title: ARENA_TITLES[ARENAS[i]],
    lines: TRANSITION_CARDS[i] || TRANSITION_CARDS[1], hours: hoursLine(i), muzak: MUZAK,
  };
}

// The floor counter: u is how far through the climb (0 to 1); the whole numbers tick up from the start floor and stop on the arrival floor.
export function floorAt(from, to, u) {
  const k = Math.max(0, Math.min(1, Number.isFinite(u) ? u : 0));
  return Math.min(to, from + Math.floor((to - from + 1) * k));
}
// How far through the climb the counter is, given the time in the card: it arrives at `arriveAt` (a fraction of the card) and then rests.
export function climbProgress(elapsed, cardTime, arriveAt = 0.75) {
  return Math.max(0, Math.min(1, elapsed / Math.max(1e-6, cardTime * arriveAt)));
}

// When Doc goes down and the arena starts again: a one-line card (a second line is Doc's reply), picked from a small pool.
export const DEFEAT_CARDS = Object.freeze([
  Object.freeze([{ who: 'PA', text: 'Your membership has been renewed.' }, { who: 'Doc', text: 'No it hasn’t.' }]),
  Object.freeze([{ who: 'PA', text: 'Good news! Your plateau has been extended.' }, { who: 'Doc', text: 'That is not good news.' }]),
  Object.freeze([{ who: 'Tobble', text: 'Rest day! Rest days are important!' }, { who: 'Doc', text: 'We have a deadline. At 2:15.' }]),
  Object.freeze([{ who: 'PA', text: 'Thank you for choosing to stay.' }, { who: 'Doc', text: 'I did not choose.' }]),
  Object.freeze([{ who: 'PA', text: 'Your progress photo was not saved.' }, { who: 'Doc', text: 'Noted.' }]),
  Object.freeze([{ who: 'PA', text: 'Welcome back! You have been billed for the time away.' }, { who: 'Doc', text: 'Of course I have.' }]),
]);

// Picks a defeat card index with rand() in [0, 1), never the same as `last` twice in a row.
export function pickDefeat(rand, last = -1) {
  const n = DEFEAT_CARDS.length;
  let i = Math.floor((Number.isFinite(rand()) ? rand() : 0) * n) % n;
  if (i === last) i = (i + 1) % n;
  return i;
}

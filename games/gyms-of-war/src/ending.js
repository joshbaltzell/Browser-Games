// The ending: what happens after the Membership Overlord falls. Pure logic: no DOM, no WebGL, no clock of its own (step(dt) advances it).
// off -> (start: the boss is dead and the arena is clear) slump -> desk (the desk lights up: hold interact within reach for holdTime) ->
// cards (four text cards over a dimmed scene) -> done (any key or button; the caller goes back to the title).
// start() is the only way in, so the cards can only follow the defeat and the hold. Times come from tuning.ending at every use.
import { TUNING } from './tuning.js';

// The four cards, in order. Each is { lines: [text, ...], tone }. Text only; the HUD draws them.
export const CARDS = Object.freeze([
  Object.freeze({ id: 'cancelled', tone: 'big', lines: Object.freeze(['MEMBERSHIP CANCELLED.']) }),
  Object.freeze({ id: 'email', tone: 'mail', lines: Object.freeze([
    "We're sorry to see you go!",
    'Your cancellation is confirmed.',
    'A $49.99 cancellation fee has been applied.',
    'Come back anytime — 50% off your first month!',
  ]) }),
  Object.freeze({ id: 'tobble', tone: 'talk', lines: Object.freeze(['Tobble: "Ooh, fifty percent."', 'Doc reloads.']) }),
  Object.freeze({ id: 'thanks', tone: 'big', lines: Object.freeze(['GYMS OF WAR — thanks for playing', 'We miss you! — GlorpFit']) }),
]);

// Is `pos` ([x, y, z]) within `reach` of the desk's front edge? desk = { x0, x1, z } (the front face at z, spanning x0..x1).
export function nearDesk(pos, desk, reach) {
  if (!desk) return false;
  const dx = Math.max(desk.x0 - pos[0], 0, pos[0] - desk.x1), dz = Math.max(desk.z - pos[2], 0);
  return Math.hypot(dx, dz) <= reach;
}

export function createEnding({ tuning = TUNING } = {}) {
  const E = () => tuning.ending;
  let state = 'off', t = 0, held = 0, card = 0;
  const cardTime = (i) => (i === 0 ? E().card1Time : i === 1 ? E().card2Time : i === 2 ? E().card3Time : Infinity);
  const api = {
    get state() { return state; },
    get card() { return card; },
    get cardCount() { return CARDS.length; },
    // 0 to 1: how far the hold at the desk has run.
    get hold() { return state === 'desk' ? Math.min(1, held / Math.max(E().holdTime, 1e-6)) : 0; },
    // True from the defeat until the title: Doc stands still and holds fire only during the cards.
    get locked() { return state === 'cards' || state === 'done'; },
    get lit() { return state === 'desk' || state === 'cards' || state === 'done'; },
    // The boss is dead and the fight is clear. Ignored unless the ending is off.
    start() { if (state !== 'off') return false; state = 'slump'; t = 0; held = 0; card = 0; return true; },
    reset() { state = 'off'; t = 0; held = 0; card = 0; },
    // inp = { atDesk, hold (interact held), press (any key or button pressed since the last step) }. Returns events:
    // { type: 'deskLit' } | { type: 'cancelled' } | { type: 'card', index } | { type: 'toTitle' }.
    step(dt, inp = {}) {
      const out = [];
      if (!(dt > 0) || state === 'off' || state === 'done') return out;
      t += dt;
      if (state === 'slump') {
        if (t >= E().deathDelay) { state = 'desk'; t = 0; held = 0; out.push({ type: 'deskLit' }); }
      } else if (state === 'desk') {
        held = inp.atDesk && inp.hold ? held + dt : 0;
        if (held >= E().holdTime - 1e-9) { state = 'cards'; t = 0; card = 0; out.push({ type: 'cancelled' }, { type: 'card', index: 0 }); }
      } else if (state === 'cards') {
        const last = card === CARDS.length - 1;
        if (last) {
          if (inp.press && t >= E().finalLock) { state = 'done'; out.push({ type: 'toTitle' }); }
        } else if (t >= cardTime(card) || (inp.press && t >= E().skipLock)) { card++; t = 0; out.push({ type: 'card', index: card }); }
      }
      return out;
    },
  };
  return api;
}

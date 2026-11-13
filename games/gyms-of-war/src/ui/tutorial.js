// Tutorial hints: one-time contextual lines under the reticle. Pure model, no DOM. Each hint shows once (remembered in storage), for hintTime
// seconds or until its action is done, never more than one at a time (the rest wait in a queue), and never while a menu is open.
// The caller passes this frame's facts in `ctx`; the model returns the hint to show (or null).
import { TUNING } from '../tuning.js';
import { KEYS } from './prompts.js';

export const TUTORIAL_KEY = 'gyms-of-war.tutorial';

// Each hint: id, when(ctx) (the moment it applies), done(ctx) (the player did the thing: it ends early) and text(keys, device).
// Order is priority: the earlier one shows first when several apply.
export const HINTS = Object.freeze([
  { id: 'run', when: c => c.arena === 'turnstiles' && !c.inCover, done: c => c.inCover,
    text: k => `Enemies ahead — RUN to cover! Run straight into it, or tap ${k.cover}` },
  { id: 'pop', when: c => c.inCover, done: c => c.popped,
    text: k => `Hold ${k.pop} to pop out and aim` },
  { id: 'blind', when: c => c.inCover && (c.aimedKills >= 1 || c.coverTime >= TUNING.feedback.hintCoverDelay), done: c => c.blindFired,
    text: () => 'Fire without aiming to blind-fire — safe, but wild' },
  { id: 'reload', when: c => c.lowAmmo, done: c => c.reloading || !c.lowAmmo,
    text: k => `RELOAD — ${k.reload}  (press again in the bright zone)` },
  { id: 'trainer', when: c => c.trainerSeen, done: c => c.revving,
    text: k => `Trainers charge! Hold ${k.melee} to rev Cheat Day` },
  { id: 'finish', when: c => c.downedRep, done: c => c.finishing || !c.downedRep,
    text: k => `${k.finish} to finish it` },
  { id: 'sauna', when: c => c.saunaOpen, done: c => c.thrown || !c.saunaOpen,
    text: (k, device) => (device === 'pad'
      ? `Throw a kettlebell (${k.grenade}, LT aim, RT throw) into the sauna to close it`
      : `Throw a kettlebell (${k.grenade}) into the sauna to close it`) },
]);

function load(storage) {
  try {
    const raw = storage && storage.getItem(TUTORIAL_KEY);
    const o = raw ? JSON.parse(raw) : null;
    return o && typeof o === 'object' && o.seen && typeof o.seen === 'object' ? { ...o.seen } : {};
  } catch (e) { return {}; }
}
function save(storage, seen) {
  try { if (storage) storage.setItem(TUTORIAL_KEY, JSON.stringify({ seen })); } catch (e) { /* storage blocked */ }
}

// Forgets every hint (the Controls card's "Reset tutorial hints").
export function resetTutorial(storage) {
  try { if (storage) { if (storage.removeItem) storage.removeItem(TUTORIAL_KEY); else storage.setItem(TUTORIAL_KEY, JSON.stringify({ seen: {} })); } } catch (e) { /* storage blocked */ }
}

export function createTutorial({ storage = null, hints = HINTS, feedback = () => TUNING.feedback } = {}) {
  let seen = load(storage);
  let cur = null;           // { hint, t } the one on screen
  const holds = new Map();  // id -> seconds its `when` has held (for the queue and the delay)

  const api = {
    // One frame: dt in seconds, ctx the facts. Returns { id, text, opacity } or null. While `ctx.blocked` (a menu, the title) nothing advances and nothing shows.
    step(dt, ctx) {
      const fb = feedback();
      if (!(fb.hint > 0) || !ctx || ctx.blocked) return null;
      const step = dt > 0 && Number.isFinite(dt) ? dt : 0;
      if (cur) {
        cur.t += step;
        if (cur.t >= fb.hintTime || cur.hint.done(ctx)) {
          // Over (its time ran out, or the player did the thing): it never shows again.
          seen[cur.hint.id] = true; save(storage, seen);
          cur = null;
        }
      }
      if (!cur) {
        for (const h of hints) {
          if (seen[h.id]) continue;
          if (h.when(ctx) && !h.done(ctx)) holds.set(h.id, (holds.get(h.id) || 0) + step); else holds.delete(h.id);
        }
        for (const h of hints) {
          if (seen[h.id] || !holds.has(h.id)) continue;
          cur = { hint: h, t: 0 };
          holds.delete(h.id);
          break;
        }
      }
      if (!cur) return null;
      const device = ctx.device === 'pad' ? 'pad' : 'kbm';
      const fade = Math.max(fb.hintFade, 1e-3);
      const opacity = Math.max(0, Math.min(1, cur.t / fade, (fb.hintTime - cur.t) / fade));
      return { id: cur.hint.id, text: cur.hint.text(KEYS[device], device), opacity };
    },
    seen: (id) => !!seen[id],
    reset() { seen = {}; cur = null; holds.clear(); resetTutorial(storage); },
    // Marks a hint as already known (a player who did the thing before its hint came up).
    know(id) { if (!seen[id]) { seen[id] = true; save(storage, seen); } if (cur && cur.hint.id === id) cur = null; },
  };
  return api;
}

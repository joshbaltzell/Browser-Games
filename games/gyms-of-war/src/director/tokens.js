// Attack tokens: a limited number of enemies may fire accurately at once. The longest waiter gets the next one.
// Pure logic: no clock, `now` is passed in. Tuning is read from `d` at every call.
import { TUNING } from '../tuning.js';

export function createTokens() {
  const heldAt = new Map();   // id -> time granted
  const asked = new Map();    // id -> { first, last } for requesters waiting in the queue
  const coolUntil = new Map(); // id -> time before which the id cannot ask again

  const t = {
    // True when `id` holds a token after this call. A requester must keep asking: one silent for
    // more than requestWindow drops out of the queue.
    request(id, now, count, d = TUNING.director) {
      if (heldAt.has(id)) return true;
      if (now < (coolUntil.get(id) ?? -Infinity)) return false;
      const q = asked.get(id);
      if (q) q.last = now; else asked.set(id, { first: now, last: now });
      for (const [k, v] of asked) if (now - v.last > d.requestWindow) asked.delete(k);
      if (heldAt.size >= count) return false;
      // The longest waiter (earliest first ask; Map order breaks ties) is next.
      let head = null, headFirst = Infinity;
      for (const [k, v] of asked) if (v.first < headFirst) { head = k; headFirst = v.first; }
      if (head !== id) return false;
      asked.delete(id); heldAt.set(id, now);
      return true;
    },
    // Giving a token back starts that id's cooldown. Releasing without one does nothing.
    release(id, now, d = TUNING.director) {
      asked.delete(id);
      if (!heldAt.delete(id)) return;
      coolUntil.set(id, now + d.tokenCooldown);
    },
    holds(id) { return heldAt.has(id); },
    held() { return [...heldAt.keys()]; },
    // Takes back tokens held longer than tokenMaxHold. Returns the ids released.
    expire(now, d = TUNING.director) {
      const out = [];
      for (const [id, at] of heldAt) if (now - at > d.tokenMaxHold) out.push(id);
      for (const id of out) t.release(id, now, d);
      return out;
    },
    reset() { heldAt.clear(); asked.clear(); coolUntil.clear(); },
  };
  return t;
}

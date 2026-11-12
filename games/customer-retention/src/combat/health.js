// Player health: damage, regeneration after a quiet spell, being downed, and the stand-in revive.
// Logic only: no clock, no DOM. It reads TUNING.health at every use and advances only by the dt passed to update.
import { TUNING } from '../tuning.js';

export function createHealth(tuning = TUNING.health) {
  let regenFrom = -1;  // hp when regeneration began, -1 while it is not running
  let regenT = 0;      // seconds of regeneration so far
  let reviveT = 0;
  let bled = false;    // bleedOut has been reported
  const h = {
    hp: tuning.max, downed: false, downT: 0, sinceHit: 0,
    fraction() { return tuning.max > 0 ? Math.max(0, Math.min(1, h.hp / tuning.max)) : 0; },
    // 'hit' | 'downed' | null. Nothing happens while downed or for a non-positive amount.
    damage(amount) {
      if (h.downed || !(amount > 0)) return null;
      h.hp -= amount; h.sinceHit = 0; regenFrom = -1; regenT = 0;
      if (tuning.godMode > 0) { if (h.hp < 1) h.hp = 1; return 'hit'; }
      if (h.hp > 0) return 'hit';
      h.hp = 0; h.downed = true; h.downT = tuning.downedTime; reviveT = 0; bled = false;
      return 'downed';
    },
    // Stands a downed player up at reviveHealth and clears the timers. False when not downed.
    revive() {
      if (!h.downed) return false;
      h.downed = false; h.downT = 0; reviveT = 0; bled = false;
      h.hp = Math.max(1, tuning.reviveHealth * tuning.max); h.sinceHit = 0; regenFrom = -1; regenT = 0;
      return true;
    },
    // 'bleedOut' (once, when the timer runs out; the arena then resets) | 'revived' | null.
    // standIn false skips the stand-in revive (Tobble is the reviver).
    update(dt, { standIn = true } = {}) {
      if (!(dt > 0) || !Number.isFinite(dt)) dt = 0;
      if (h.downed) {
        h.downT = Math.max(0, h.downT - dt);
        if (standIn && tuning.standInRevive > 0) {
          reviveT += dt;
          if (reviveT >= tuning.reviveTime) { h.revive(); return 'revived'; }
        }
        if (h.downT <= 0 && !bled) { bled = true; return 'bleedOut'; }
        return null;
      }
      h.sinceHit += dt;
      if (h.hp < tuning.max && h.sinceHit >= tuning.regenDelay) {
        if (regenFrom < 0) { regenFrom = h.hp; regenT = 0; }
        // Only the time past the delay counts, so a step that crosses it adds a part step.
        regenT += Math.min(dt, h.sinceHit - tuning.regenDelay);
        h.hp = tuning.regenTime > 0 && regenT < tuning.regenTime ? regenFrom + (tuning.max - regenFrom) * regenT / tuning.regenTime : tuning.max;
      }
      if (h.hp >= tuning.max) { h.hp = tuning.max; regenFrom = -1; }
      return null;
    },
    reset() { h.hp = tuning.max; h.downed = false; h.downT = 0; h.sinceHit = 0; regenFrom = -1; regenT = 0; reviveT = 0; bled = false; },
  };
  return h;
}

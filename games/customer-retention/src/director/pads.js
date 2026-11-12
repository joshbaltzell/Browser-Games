// Spawn Saunas (the spec's Hiring Pads): dormant until the fight is a few kills or seconds old, then open and producing Reps
// until a kettlebell closes them or they have made `total`. Pure logic: no clock of its own, `ctx.now` is passed in.
// Everything tunable is read from `tuning.pad` (and `tuning.grenade.padReach`) at every use.
import { TUNING } from '../tuning.js';

// level.pads is [{ id, pos: [x, y, z], spawns, openKey? }]; openKey names a TUNING.pad number that replaces openAfterKills for that sauna; shareKey one that replaces trainerShare (the fraction of its spawns that are Trainers). A pad is { id, pos, spawns, state, spawned, alive, nextT }:
// state 'dormant' | 'open' | 'spent' | 'closed'; spawned is how many Reps it has made; alive how many of those still live.
export function createPads(level, tuning = TUNING) {
  const list = (level.pads || []).map(p => ({ id: p.id, pos: [p.pos[0], p.pos[1], p.pos[2]], spawns: p.spawns, openKey: p.openKey, shareKey: p.shareKey, state: 'dormant', spawned: 0, alive: 0, nextT: 0 }));
  const mine = new Map(list.map(p => [p.id, new Set()]));   // pad id -> ids of its Reps that are still alive

  const api = {
    list,
    // ctx = { started, sinceStart, kills, freeSlot() -> enemy | null, now }. Returns padOpen, padSpawn, padSpent events.
    // The slot freeSlot hands back is the caller's to fill: a padSpawn names it.
    step(dt, ctx) {
      const P = tuning.pad, events = [];
      for (const p of list) {
        if (p.state === 'dormant') {
          if (!ctx.started || !(ctx.kills >= (p.openKey && Number.isFinite(P[p.openKey]) ? P[p.openKey] : P.openAfterKills) || ctx.sinceStart >= P.openAfter)) continue;
          p.state = 'open'; p.nextT = ctx.now + P.interval;
          events.push({ type: 'padOpen', id: p.id });
        }
        if (p.state !== 'open' || ctx.now < p.nextT - 1e-9 || p.alive >= P.maxAlive) continue;
        const slot = ctx.freeSlot();
        if (!slot) continue;   // it waits, and spawns the moment a slot frees
        p.spawned++; p.nextT = ctx.now + P.interval;
        mine.get(p.id).add(slot.id); p.alive = mine.get(p.id).size;
        events.push({ type: 'padSpawn', id: p.id, enemyId: slot.id });
        if (p.spawned >= P.total) { p.state = 'spent'; events.push({ type: 'padSpent', id: p.id }); }
      }
      return events;
    },
    // A kettlebell blast at pos [x, y, z] closes every dormant or open sauna whose centre is within radius + padReach (no line-of-sight
    // test). Returns the ids it closed; the caller reports padClosed. A spent sauna stays spent.
    blast(pos) {
      const reach = tuning.pad.radius + tuning.grenade.padReach, out = [];
      for (const p of list) {
        if (p.state !== 'dormant' && p.state !== 'open') continue;
        if (Math.hypot(p.pos[0] - pos[0], p.pos[2] - pos[2]) <= reach + 1e-9) { p.state = 'closed'; out.push(p.id); }
      }
      return out;
    },
    // The fight reports every Rep that dies, so each sauna's `alive` stays true.
    noteDeath(enemyId) {
      for (const p of list) if (mine.get(p.id).delete(enemyId)) p.alive = mine.get(p.id).size;
    },
    // True when every sauna is closed or spent (the arena clear's half of the condition).
    allDone() { return list.every(p => p.state === 'closed' || p.state === 'spent'); },
    reset() {
      for (const p of list) { p.state = 'dormant'; p.spawned = 0; p.alive = 0; p.nextT = 0; mine.get(p.id).clear(); }
    },
  };
  return api;
}

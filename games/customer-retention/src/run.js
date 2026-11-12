// The run: which arena Doc is in, the checkpoint, and the fade between arenas. Pure logic: no DOM, no WebGL (the caller passes
// storage in, and draws the fade from `fade`). Order: Check-in Turnstiles, Smoothie Bar, Cancellation Desk.
// Flow: arena cleared (markClear) -> the gate opens -> Doc walks into it (touchGate) -> fade out -> 'swap' event (the caller loads the
// next arena, which becomes the checkpoint) -> a short black hold -> fade in -> play. Both-down and bleed-out restart the current arena.
import { TUNING } from './tuning.js';

export const ARENAS = Object.freeze(['turnstiles', 'smoothie', 'desk']);
// Player-facing names (the story's), not the code names.
export const ARENA_TITLES = Object.freeze({ turnstiles: 'Check-in Turnstiles', smoothie: 'Smoothie Bar', desk: 'The Cancellation Desk' });
// The running gag: the cancellation hours shrink at every checkpoint.
export const HOURS = Object.freeze(['Tues 2:00–2:10', 'Tues 2:00–2:05', 'By appointment']);
export const hoursLine = (index) => `Cancellation hours: ${HOURS[Math.max(0, Math.min(HOURS.length - 1, index | 0))]}`;
export const STORAGE_KEY = 'gyms-of-war.checkpoint';

const clampIndex = (i) => (Number.isInteger(i) && i >= 0 && i < ARENAS.length ? i : 0);
export const arenaIndex = (name) => { const i = ARENAS.indexOf(name); return i < 0 ? 0 : i; };

// The saved checkpoint index (0 when there is none, it is garbled, or storage throws).
export function loadCheckpoint(storage) {
  try {
    const v = storage && storage.getItem(STORAGE_KEY);
    return v === null || v === undefined ? 0 : clampIndex(Number(v));
  } catch (e) { return 0; }
}
export function saveCheckpoint(storage, index) {
  try { if (storage) storage.setItem(STORAGE_KEY, String(clampIndex(index))); } catch (e) { /* private window: the run still works */ }
}

// Is `pos` ([x, y, z]) in front of the gate and within its width? exit = { pos, yaw, w }: pos on the wall's inside face and yaw faces into
// the arena (yaw 0 faces +z, like the signs). reach is how far in front of the door counts.
export function inGate(exit, pos, reach = TUNING.run.gateReach) {
  if (!exit) return false;
  const dx = pos[0] - exit.pos[0], dz = pos[2] - exit.pos[2], s = Math.sin(exit.yaw), c = Math.cos(exit.yaw);
  const along = dx * c - dz * s, out = dx * s + dz * c;
  return Math.abs(along) <= exit.w / 2 && out >= -0.25 && out <= reach;
}

// phases: 'play' | 'fadeOut' | 'black' | 'fadeIn'. Times come from TUNING.run at every use.
export function createRun({ storage = null, tuning = TUNING } = {}) {
  const R = () => tuning.run;
  let index = 0, checkpoint = 0, phase = 'play', t = 0, cleared = false;
  const saved = loadCheckpoint(storage);
  const setCheckpoint = (i) => { checkpoint = clampIndex(i); saveCheckpoint(storage, checkpoint); };
  const run = {
    get index() { return index; },
    get checkpoint() { return checkpoint; },
    get arena() { return ARENAS[index]; },
    get phase() { return phase; },
    get cleared() { return cleared; },
    get fading() { return phase !== 'play'; },
    get hasNext() { return index < ARENAS.length - 1; },
    // The checkpoint found in storage when the run was created (what "Continue" offers).
    saved,
    // 0 (clear) to 1 (black).
    get fade() {
      if (phase === 'fadeOut') return Math.min(1, t / Math.max(R().fadeOut, 1e-6));
      if (phase === 'black') return 1;
      if (phase === 'fadeIn') return Math.max(0, 1 - t / Math.max(R().fadeIn, 1e-6));
      return 0;
    },
    // The gate is open once the arena is clear and there is a next one.
    get gateOpen() { return cleared && run.hasNext; },
    // The arena is clear. The last arena's clear belongs to the boss (piece 3), so it never opens a gate.
    markClear() { if (phase === 'play') cleared = true; return run.gateOpen; },
    // Doc walked into the open gate. True when the fade began.
    touchGate() {
      if (phase !== 'play' || !run.gateOpen) return false;
      phase = 'fadeOut'; t = 0;
      return true;
    },
    // Both Doc and Tobble down, or Doc bled out: the current arena restarts from the start (the checkpoint is its own entry).
    restart() { cleared = false; phase = 'play'; t = 0; return ARENAS[index]; },
    // Jump to an arena (the ?arena param, Continue, the dev hook): it becomes the checkpoint.
    goTo(i) { index = clampIndex(i); setCheckpoint(index); cleared = false; phase = 'play'; t = 0; return ARENAS[index]; },
    // A fresh run from the Turnstiles: the saved checkpoint resets too.
    newRun() { return run.goTo(0); },
    // Advance the fade by dt (real seconds). Returns events: { type: 'swap', from, to } when the screen is black and the next arena should
    // load, { type: 'faded' } when the fade-in is done.
    step(dt) {
      const out = [];
      if (!(dt > 0)) return out;
      if (phase === 'play') return out;
      t += dt;
      if (phase === 'fadeOut' && t >= R().fadeOut) {
        const from = ARENAS[index];
        index = Math.min(ARENAS.length - 1, index + 1); setCheckpoint(index); cleared = false;
        phase = 'black'; t = 0;
        out.push({ type: 'swap', from, to: ARENAS[index] });
      }
      if (phase === 'black' && t >= R().blackHold) { phase = 'fadeIn'; t = 0; }
      if (phase === 'fadeIn' && t >= R().fadeIn) { phase = 'play'; t = 0; out.push({ type: 'faded' }); }
      return out;
    },
  };
  return run;
}

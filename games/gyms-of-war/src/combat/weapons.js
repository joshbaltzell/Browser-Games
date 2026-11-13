// The parts of the arsenal that are not numbers. Every number lives in TUNING.weapons.
export const WEAPONS = Object.freeze({
  regret: Object.freeze({ id: 'regret', name: 'The Regret' }),
  pistol: Object.freeze({ id: 'pistol', name: 'Guest Pass' }),
});

// Slots 1 to 3. Slot 2 is empty until the Food Court pickup.
export const LOADOUT = Object.freeze(['regret', null, 'pistol']);

// Where a press at bar position u (0 to 1) lands. Perfect is checked first, bounds inclusive;
// an inverted range (start > end) matches nothing.
export function reloadZone(u, row) {
  if (u >= row.perfectStart && u <= row.perfectEnd) return 'perfect';
  if (u >= row.goodStart && u <= row.goodEnd) return 'good';
  return 'jam';
}

// Seconds from the start of the reload to its end, given a press at pressT with this result
// ('perfect' | 'good' | 'jam', or 'normal' for no press). A perfect or good press never ends later than T.
export function reloadEnd(row, pressT, result, combat) {
  const T = Math.max(row.reloadTime, combat.minReloadTime);
  if (result === 'perfect') return Math.min(pressT + row.perfectFinish, T);
  if (result === 'good') return Math.min(pressT + row.goodFinish, T);
  if (result === 'jam') return T + row.jamPenalty;
  return T;
}

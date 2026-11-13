// Critically damped spring, exact solution: stable for any dt.
// state = { x, v } is mutated and returned.

export function springStep(state, target, halfLife, dt) {
  if (!(halfLife > 0) || !(dt > 0)) {
    if (!(halfLife > 0)) { state.x = target; state.v = 0; }
    return state;
  }
  const y = (4 * Math.LN2) / halfLife / 2;
  const j0 = state.x - target;
  const j1 = state.v + j0 * y;
  const e = Math.exp(-y * dt);
  state.x = e * (j0 + j1 * dt) + target;
  state.v = e * (state.v - j1 * y * dt);
  return state;
}

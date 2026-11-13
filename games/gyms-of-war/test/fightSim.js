// Shared by the fight tests: a headless seeded fight on Kiosk Row against a real mover at 60 Hz.
import { KIOSK_ROW } from '../src/world/kioskRow.js';
import { TUNING } from '../src/tuning.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { createMovement } from '../src/actors/movement.js';
import { createHealth } from '../src/combat/health.js';
import { createFight } from '../src/director/fight.js';
import { rng } from '../src/core/random.js';

export const DT = 1 / 60;
export const R = KIOSK_ROW;
export const BOXES = R.boxes;
export const EDGES = deriveCoverEdges(BOXES, { ...edgeOptions(), exclude: R.coverExclude });
export const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false, ...o });
// Walk to the wall in front and take it: the first step taps forward, the rest idle (or pop with aim).
export const tuck = (aim = false) => (i) => (i === 0 ? I({ moveY: -1, tap: true }) : I({ aim }));

// Steps `seconds` of fight. `tune` edits a private clone of TUNING. `aim` ({ lens, dir, active } or a function (i, m, f) of it) goes to the fight's step (by default the lens 1.55 m over Doc, Doc's facing, active while the intent aims). `intent(i, m, f)` is called before each step and
// `each(i, m, f, health, events)` after it. The log holds every event with its time and the token holders before the step.
export function sim(seconds, { at = 'open', seed = 1, god = false, intent = () => I(), tune, each, aim } = {}) {
  const tuning = structuredClone(TUNING);
  if (god) tuning.health.godMode = 1;
  if (tune) tune(tuning);
  const f = createFight({ level: R, boxes: BOXES, edges: EDGES, rand: rng(seed), tuning });
  const m = createMovement({ boxes: BOXES, spawn: R.features[at].pos, tuning: tuning.move, coverTuning: tuning.cover, coverEdges: EDGES });
  const health = createHealth(tuning.health);
  const log = [];
  const n = Math.round(seconds / DT);
  for (let i = 0; i < n; i++) {
    const inp = intent(i, m, f);
    m.update(inp, DT);
    const before = f.tokens.held();
    const a = typeof aim === 'function' ? aim(i, m, f) : aim !== undefined ? aim : { lens: [m.pos[0], m.pos[1] + 1.55, m.pos[2]], dir: [Math.sin(m.facing), 0, Math.cos(m.facing)], active: !!inp.aim };
    const ev = f.step(DT, { m, health, aim: a });
    health.update(DT, { standIn: !f.tobble });
    for (const e of ev) log.push({ t: f.now, ...e, holders: before, states: null });
    if (each) each(i, m, f, health, ev);
  }
  return { f, m, health, log, tuning, grenades: f.grenades };
}

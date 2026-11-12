// Who a bash, the cutter or a finishing stomp can reach, and what one press of interact means.
// Logic only: reads the enemies and boxes it is given. Enemies carry { alive, state, pos: [x, y, z] }; state is
// 'unused' (an empty slot), 'downed' (lying down, still alive) or 'executed' (already in an execution), among others.
import { TUNING } from '../tuning.js';
import { lineOfSight } from '../world/coverPoints.js';
import { wrap } from '../actors/moveMath.js';

const DEG = Math.PI / 180;
const FALLBACK_TOBBLE_RANGE = 1.5; // TUNING.tobble.playerReviveRange arrives in Task 3
const EYE = [0, 0, 0], AT = [0, 0, 0];

const CONES = {
  bash: t => [t.melee.bashRange, t.melee.bashAngle],
  cutter: t => [t.melee.cutterReach, t.melee.cutterAngle],
  finish: t => [t.melee.executeRange, t.melee.executeAngle],
};

// The nearest enemy for 'bash' (alive, standing or downed), 'cutter' (alive, standing or downed) or 'finish' (downed only)
// within the range and the full cone about yaw, with a clear line at y 1.0 (y 0.3 to a downed one). An unused or executed slot never counts.
export function meleeTarget(kind, pos, yaw, enemies, boxes, t = TUNING) {
  const [range, angle] = CONES[kind](t), half = angle * DEG / 2;
  let best = null, bestD = Infinity;
  for (const e of enemies) {
    if (!e.alive || e.state === 'unused' || e.state === 'executed') continue;
    const downed = e.state === 'downed';
    if (kind === 'finish' && !downed) continue;
    const dx = e.pos[0] - pos[0], dz = e.pos[2] - pos[2], d = Math.hypot(dx, dz);
    if (d > range || d >= bestD) continue;
    if (d > 1e-6 && Math.abs(wrap(Math.atan2(dx, dz) - yaw)) > half + 1e-9) continue;
    EYE[0] = pos[0]; EYE[1] = pos[1] + 1.0; EYE[2] = pos[2];
    AT[0] = e.pos[0]; AT[1] = e.pos[1] + (downed ? 0.3 : 1.0); AT[2] = e.pos[2];
    if (!lineOfSight(boxes, EYE, AT)) continue;
    best = e; bestD = d;
  }
  return best;
}

// One press of interact, first match wins: Doc downed -> giveUp (hold); arena clear -> again (tap); Tobble downed within
// playerReviveRange -> reviveTobble (hold); a downed Rep in finish range -> finish (tap); else null.
// tobble is { downed, pos } or null.
export function interactAction({ downed, clear, tobble, pos, yaw, enemies, boxes, t = TUNING }) {
  if (downed) return { kind: 'giveUp', hold: true, target: null };
  if (clear) return { kind: 'again', hold: false, target: null };
  if (tobble && tobble.downed) {
    const range = t.tobble?.playerReviveRange ?? FALLBACK_TOBBLE_RANGE;
    if (Math.hypot(tobble.pos[0] - pos[0], tobble.pos[2] - pos[2]) <= range) return { kind: 'reviveTobble', hold: true, target: tobble };
  }
  const f = meleeTarget('finish', pos, yaw, enemies, boxes, t);
  if (f) return { kind: 'finish', hold: false, target: f };
  return { kind: null, hold: false, target: null };
}

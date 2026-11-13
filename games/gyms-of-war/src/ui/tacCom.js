// Tac/Com and the objective turn (the pad's LB and Y). Pure maths: where the objective is, how a world point lands on screen (or at the screen's edge
// when it is off it), and what Y means this moment. play.js projects the points and the HUD draws the markers.

// The objective's world point and label, or null when there is nothing to point at (a room still being cleared).
// { boss: { pos, alive } | null, bossArena, ending: 'slump' | 'desk' | ..., desk: { x0, x1, z } | null, exit: { pos } | null, gateOpen }
import { BOSS_NAME } from '../actors/bossBrain.js';

export function objectiveTarget({ bossArena = false, boss = null, ending = 'off', desk = null, exit = null, gateOpen = false } = {}) {
  if (bossArena) {
    if (ending === 'desk' && desk) return { kind: 'desk', pos: [(desk.x0 + desk.x1) / 2, 1.2, desk.z], label: 'CANCELLATION DESK' };
    if (boss && boss.alive) return { kind: 'boss', pos: [boss.pos[0], boss.pos[1] + 1.6, boss.pos[2]], label: BOSS_NAME };
    return null;
  }
  if (gateOpen && exit) return { kind: 'gate', pos: [exit.pos[0], 1.6, exit.pos[2]], label: 'GO' };
  return null;
}

// Yaw and pitch (radians, the camera's convention: yaw = atan2(dx, dz), pitch up positive) that look from `from` at `to`. Pitch is limited to maxPitch.
export function lookAngles(from, to, maxPitch = 0.35) {
  const dx = to[0] - from[0], dy = to[1] - from[1], dz = to[2] - from[2];
  const flat = Math.hypot(dx, dz), l = Math.hypot(flat, dy);
  if (!(l > 1e-6)) return null;
  const yaw = flat > 1e-6 ? Math.atan2(dx, dz) : null;
  const pitch = Math.max(-maxPitch, Math.min(maxPitch, Math.asin(dy / l)));
  return { yaw, pitch };
}

// What Y does: a downed alien in finish range wins (finish); else the camera turns toward the objective (look); else nothing.
export function yAction({ finishTarget = false, objective = null } = {}) {
  if (finishTarget) return 'finish';
  return objective ? 'look' : null;
}

// A projected point (ndc x and y in -1..1, behind true when it is behind the lens) as a screen mark: x and y in 0..1 (top-left origin), clamped to
// `margin` from the edge, `off` when it had to be clamped (draw an arrow at `angle`, radians clockwise from up).
export function screenMark(ndcX, ndcY, behind = false, margin = 0.06) {
  let x = behind ? -ndcX : ndcX, y = behind ? -ndcY : ndcY;
  if (!Number.isFinite(x) || !Number.isFinite(y)) { x = 0; y = 0; }
  const lim = 1 - 2 * margin;
  const off = behind || Math.abs(x) > lim || Math.abs(y) > lim;
  if (off) {
    const k = Math.max(Math.abs(x) / lim, Math.abs(y) / lim, 1e-9);
    const cx = x / k, cy = y / k;
    return { x: (cx + 1) / 2, y: (1 - cy) / 2, off: true, angle: Math.atan2(x, y) };
  }
  return { x: (x + 1) / 2, y: (1 - y) / 2, off: false, angle: 0 };
}

// The overlay: shown while LB is held (and not in a menu). items are the world points to mark: the objective, and Tobble with his health fraction.
// Returns { show, items: [{ id, kind, label, pos, frac? , down? }] } for play.js to project.
export function tacComModel({ held = false, blocked = false, objective = null, tobble = null } = {}) {
  if (!held || blocked) return { show: false, items: [] };
  const items = [];
  if (objective) items.push({ id: 'objective', kind: objective.kind, label: objective.label, pos: objective.pos });
  if (tobble) items.push({ id: 'tobble', kind: 'tobble', label: tobble.downed ? 'TOBBLE DOWN' : 'TOBBLE', pos: [tobble.pos[0], tobble.pos[1] + 1.5, tobble.pos[2]], frac: Math.max(0, Math.min(1, tobble.frac)), down: !!tobble.downed });
  return { show: true, items };
}

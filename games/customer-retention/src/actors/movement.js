import { TUNING } from '../tuning.js';
import { moveCapsule } from '../world/collide.js';
import { wrap, tiltOf, wishOf, turnToward } from './moveMath.js';
import { COVER_STATES, coverAction } from './coverStates.js';

export const forwardOf = yaw => [Math.sin(yaw), 0, Math.cos(yaw)];
export const rightOf = yaw => [-Math.cos(yaw), 0, Math.sin(yaw)];
export const rollOffset = (u, distance, ease) => distance * (1 - (1 - u) ** ease);

const wish = [0, 0], rollDelta = [0, 0, 0];

// Moves vel toward (tx, tz): faster rate when slowing, slower when speeding up or turning.
function steer(m, tx, tz, top, dt, t) {
  const v = m.vel;
  const rate = (Math.hypot(tx, tz) < Math.hypot(v[0], v[2]) ? top / t.stopTime : top / t.accelTime) * dt;
  const dx = tx - v[0], dz = tz - v[2], d = Math.hypot(dx, dz);
  if (d <= rate) { v[0] = tx; v[2] = tz; } else { v[0] += dx / d * rate; v[2] += dz / d * rate; }
}
function canSprint(m, intent, t) {
  return intent.sprint && !intent.aim && tiltOf(intent) >= t.stickSprintMin;
}

// State contract: { enter(m, intent), update(m, intent, dt) -> nextName | null, exit(m),
// acceptsTap, selfMoves }. Per-state working data goes in m.scratch, which go() replaces with
// a fresh {} before enter, so a state never leaks values into the next one. A state with
// selfMoves moves m.pos itself through m.moveBy; otherwise the mover moves it from m.vel.
export const STATES = {
  move: {
    acceptsTap: true,
    enter() {},
    update(m, intent, dt) {
      const t = m.tuning;
      if (canSprint(m, intent, t)) return 'sprint';
      m.aiming = intent.aim;
      const top = intent.aim ? t.aimWalk : t.jog;
      wishOf(intent, wish);
      steer(m, wish[0] * top, wish[1] * top, top, dt, t);
      if (intent.aim) m.facing = turnToward(m.facing, intent.camYaw, t.aimTurnRate * dt);
      else if (m.speed() > t.faceMinSpeed) m.facing = turnToward(m.facing, Math.atan2(m.vel[0], m.vel[2]), t.turnRate * dt);
      m.heading = m.facing;
      return null;
    },
    exit() {},
  },
  sprint: {
    acceptsTap: true,
    enter(m, intent) {
      m.aiming = false;
      if (m.speed() > m.tuning.sprintHeadingMinSpeed) m.heading = Math.atan2(m.vel[0], m.vel[2]);
      else if (wishOf(intent, wish) > 0.01) m.heading = Math.atan2(wish[0], wish[1]);
      else m.heading = m.facing;
    },
    update(m, intent, dt) {
      const t = m.tuning;
      if (!canSprint(m, intent, t)) return 'move';
      wishOf(intent, wish);
      m.heading = turnToward(m.heading, Math.atan2(wish[0], wish[1]), t.sprintTurnRate * dt);
      steer(m, Math.sin(m.heading) * t.sprint, Math.cos(m.heading) * t.sprint, t.sprint, dt, t);
      m.facing = m.heading;
      return null;
    },
    exit() {},
  },
  roll: {
    acceptsTap: false,
    selfMoves: true,
    enter(m, intent) {
      m.aiming = false;
      const sc = m.scratch;
      sc.dir = [Math.sin(m.facing), Math.cos(m.facing)];
      if (wishOf(intent, wish) > 0.01) { const l = Math.hypot(wish[0], wish[1]); sc.dir[0] = wish[0] / l; sc.dir[1] = wish[1] / l; }
      sc.prevOff = 0; sc.queued = false;
      m.heading = Math.atan2(sc.dir[0], sc.dir[1]);
      m.facing = m.facing + wrap(m.heading - m.facing);
    },
    update(m, intent, dt) {
      const t = m.tuning, sc = m.scratch;
      if (intent.tap && m.stateTime >= t.rollTime - t.rollBuffer) sc.queued = true;
      const done = m.stateTime >= t.rollTime - 1e-9;
      const off = rollOffset(done ? 1 : m.stateTime / t.rollTime, t.rollDistance, t.rollEase);
      // Advance by this step's share only: distance a wall blocks is lost, not owed.
      const inc = off - sc.prevOff; sc.prevOff = off;
      rollDelta[0] = sc.dir[0] * inc; rollDelta[1] = 0; rollDelta[2] = sc.dir[1] * inc;
      m.moveBy(rollDelta, dt, false);
      if (!done) return null;
      if (sc.queued) return 'roll';
      if (canSprint(m, intent, t)) return 'sprint';
      m.vel[0] = m.vel[1] = m.vel[2] = 0;
      return 'move';
    },
    exit() {},
  },
  ...COVER_STATES,
};

export const CONTEXT_ACTIONS = [coverAction, { name: 'roll', when: () => true, state: 'roll' }];

export function createMovement({
  boxes, spawn, tuning = TUNING.move, coverTuning = TUNING.cover, coverEdges = [],
  states = STATES, contextActions = CONTEXT_ACTIONS, onState,
}) {
  const m = {
    state: 'move', stateTime: 0, entries: 0,
    pos: [spawn[0], spawn[1], spawn[2]], prevPos: [spawn[0], spawn[1], spawn[2]],
    vel: [0, 0, 0], facing: 0, prevFacing: 0, aiming: false, heading: 0,
    tuning, boxes, coverTuning, coverEdges, onState,
    cover: null, coverTarget: null, slams: 0,
    scratch: {},
    speed() { return Math.hypot(m.vel[0], m.vel[2]); },
    // Moves by delta through the colliders. slideVel true: remove velocity into what was hit. False: set velocity from the actual travel.
    moveBy(delta, dt, slideVel = true) {
      const p = m.pos, r = moveCapsule(boxes, p, delta, tuning.radius, tuning.height);
      if (!slideVel) {
        if (dt > 0) { m.vel[0] = (r.pos[0] - p[0]) / dt; m.vel[2] = (r.pos[2] - p[2]) / dt; }
      } else if (r.hit) {
        // A hit may be a corner (more than one wall), and moveCapsule reports one normal.
        // Take the velocity from the distance actually travelled: sliding keeps its
        // tangential speed, a wedge gives zero.
        if (dt > 0) { m.vel[0] = (r.pos[0] - p[0]) / dt; m.vel[2] = (r.pos[2] - p[2]) / dt; }
        else {
          const n = r.normal, d = m.vel[0] * n[0] + m.vel[1] * n[1] + m.vel[2] * n[2];
          if (d < 0) { m.vel[0] -= n[0] * d; m.vel[1] -= n[1] * d; m.vel[2] -= n[2] * d; }
        }
      }
      p[0] = r.pos[0]; p[1] = r.pos[1]; p[2] = r.pos[2];
    },
    go(name, intent) {
      const prev = m.state;
      states[prev].exit?.(m);
      m.state = name; m.stateTime = 0; m.entries++; m.scratch = {};
      states[name].enter(m, intent);
      m.onState?.(name, prev, intent);
    },
    place(pos, yaw) {
      states[m.state].exit?.(m);
      m.state = 'move'; m.stateTime = 0; m.cover = null; m.coverTarget = null; m.scratch = {};
      m.pos[0] = m.prevPos[0] = pos[0]; m.pos[1] = m.prevPos[1] = pos[1]; m.pos[2] = m.prevPos[2] = pos[2];
      m.vel[0] = m.vel[1] = m.vel[2] = 0;
      if (yaw !== undefined) m.facing = m.prevFacing = m.heading = yaw;
      else m.prevFacing = m.facing;
    },
    update(intent, dt) {
      m.prevPos[0] = m.pos[0]; m.prevPos[1] = m.pos[1]; m.prevPos[2] = m.pos[2];
      m.prevFacing = m.facing;
      if (intent.tap && states[m.state].acceptsTap) {
        for (const a of contextActions) if (a.when(m, intent)) { m.go(a.state, intent); break; }
      }
      m.stateTime += dt;
      const next = states[m.state].update(m, intent, dt);
      // Velocity-driven states move here; a state with selfMoves (roll) moves itself.
      if (!states[m.state].selfMoves) {
        m.moveBy([m.vel[0] * dt, 0, m.vel[2] * dt], dt, true);
      }
      if (next) m.go(next, intent);
    },
  };
  states[m.state].enter(m, { moveX: 0, moveY: 0, camYaw: 0 });
  return m;
}

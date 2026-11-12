import { TUNING } from '../tuning.js';
import { moveCapsule } from '../world/collide.js';
import { wrap, tiltOf, wishOf, turnToward, steer } from './moveMath.js';
import { ACTION_STATES, ACTION_ENTRY } from './actionStates.js';
import { COVER_STATES, coverAction, autoSlamCandidate } from './coverStates.js';

export const forwardOf = yaw => [Math.sin(yaw), 0, Math.cos(yaw)];
export const rightOf = yaw => [-Math.cos(yaw), 0, Math.sin(yaw)];
export const rollOffset = (u, distance, ease) => distance * (1 - (1 - u) ** ease);

const wish = [0, 0], rollDelta = [0, 0, 0];

function canSprint(m, intent, t) {
  return intent.sprint && !intent.aim && !intent.grenade && tiltOf(intent) >= t.stickSprintMin;
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
      m.firing = !!intent.fire;
      const top = intent.aim || intent.grenade ? t.aimWalk : t.jog;
      wishOf(intent, wish);
      steer(m, wish[0] * top, wish[1] * top, top, dt, t);
      if (intent.aim || intent.fire || intent.grenade) m.facing = turnToward(m.facing, intent.camYaw, t.aimTurnRate * dt);
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
  // Crawling, hurt: no shooting, no cover, no taps. Only the arena (or a revive) takes the player out.
  downed: {
    acceptsTap: false,
    enter(m) { m.cover = null; m.coverTarget = null; m.aiming = false; m.firing = false; m.vel[0] = m.vel[1] = m.vel[2] = 0; }, // dropped where they stand: no skid
    update(m, intent, dt) {
      const t = m.tuning;
      m.aiming = false; m.firing = false;
      wishOf(intent, wish);
      steer(m, wish[0] * t.crawlSpeed, wish[1] * t.crawlSpeed, t.crawlSpeed, dt, t);
      if (m.speed() > t.faceMinSpeed) m.facing = turnToward(m.facing, Math.atan2(m.vel[0], m.vel[2]), t.crawlTurnRate * dt);
      m.heading = m.facing;
      return null;
    },
    exit() {},
  },
  ...COVER_STATES,
  ...ACTION_STATES,
};

export const CONTEXT_ACTIONS = [coverAction, { name: 'roll', when: () => true, state: 'roll' }];

export function createMovement({
  boxes, spawn, tuning = TUNING.move, coverTuning = TUNING.cover, coverEdges = [],
  states = STATES, contextActions = CONTEXT_ACTIONS, onState, onStep, onAction,
}) {
  const m = {
    state: 'move', stateTime: 0, entries: 0,
    pos: [spawn[0], spawn[1], spawn[2]], prevPos: [spawn[0], spawn[1], spawn[2]],
    vel: [0, 0, 0], facing: 0, prevFacing: 0, aiming: false, firing: false, heading: 0,
    tuning, boxes, coverTuning, coverEdges, onState, onStep, onAction,
    // clock is this mover's own running time (s). grenadeAim is true while a kettlebell is being aimed (move or cover).
    clock: 0, bashReadyAt: 0, grenadeAim: false,
    cover: null, coverTarget: null, slams: 0,
    // Footsteps: stepDist is the ground covered since the last foot plant; steps counts plants and foot alternates 0 and 1.
    stepDist: 0, steps: 0, foot: 0,
    // Run-in slam bookkeeping. runVel is the velocity (x, z) the state asked for this step, taken before
    // moveBy can zero the into-wall part on contact; while a wall keeps blocking us it is held
    // for 2 * autoTime so a real run-in still counts, but pushing from rest never reaches it.
    runVel: [0, 0], hitTime: 0, autoTimer: 0, hit: false,
    scratch: {},
    speed() { return Math.hypot(m.vel[0], m.vel[2]); },
    // Moves by delta through the colliders. slideVel true: remove velocity into what was hit. False: set velocity from the actual travel.
    moveBy(delta, dt, slideVel = true) {
      const p = m.pos, r = moveCapsule(m.boxes, p, delta, tuning.radius, tuning.height);
      m.hit = !!r.hit;
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
      if (states[prev].selfMoves) { m.runVel[0] = m.runVel[1] = 0; m.hitTime = 0; } // a run-in is judged on speed built in move or sprint
      m.autoTimer = 0;
      states[name].enter(m, intent);
      m.onState?.(name, prev, intent);
    },
    // Health hit zero: crawl from wherever the player is. revive() stands them up again.
    down() { m.go('downed', {}); },
    // Action states (actionStates.js). Each returns whether it started.
    bash(yaw) { return ACTION_ENTRY.bash(m, yaw); },
    rev(on) { return ACTION_ENTRY.rev(m, on); },
    execute(target, time) { return ACTION_ENTRY.execute(m, target, time); },
    reviveTobble(pos) { return ACTION_ENTRY.reviveTobble(m, pos); },
    revive() { if (m.state === 'downed') m.go('move', {}); },
    place(pos, yaw) {
      states[m.state].exit?.(m);
      m.state = 'move'; m.stateTime = 0; m.firing = false; m.cover = null; m.coverTarget = null; m.scratch = {};
      m.pos[0] = m.prevPos[0] = pos[0]; m.pos[1] = m.prevPos[1] = pos[1]; m.pos[2] = m.prevPos[2] = pos[2];
      m.vel[0] = m.vel[1] = m.vel[2] = 0; m.runVel[0] = m.runVel[1] = 0; m.hitTime = m.autoTimer = 0;
      m.grenadeAim = false; m.bashReadyAt = 0;
      if (yaw !== undefined) m.facing = m.prevFacing = m.heading = yaw;
      else m.prevFacing = m.facing;
    },
    update(intent, dt) {
      m.prevPos[0] = m.pos[0]; m.prevPos[1] = m.pos[1]; m.prevPos[2] = m.pos[2];
      m.prevFacing = m.facing;
      m.firing = false; // only the move state sets it, from intent.fire
      if (dt > 0) m.clock += dt;
      m.grenadeAim = !!intent.grenade && (m.state === 'move' || m.state === 'sprint' || m.state === 'cover');
      if (intent.tap && states[m.state].acceptsTap) {
        for (const a of contextActions) if (a.when(m, intent)) { m.go(a.state, intent); break; }
      }
      m.stateTime += dt;
      const next = states[m.state].update(m, intent, dt);
      // Velocity-driven states move here; a state with selfMoves (roll) moves itself.
      const ran = m.state;
      if (!states[ran].selfMoves) {
        const ax = m.vel[0], az = m.vel[2], asked = Math.hypot(ax, az);
        m.moveBy([m.vel[0] * dt, 0, m.vel[2] * dt], dt, true);
        if (m.hit) {
          m.hitTime += dt;
          if (asked >= Math.hypot(m.runVel[0], m.runVel[1]) || m.hitTime > 2 * m.coverTuning.autoTime) { m.runVel[0] = ax; m.runVel[1] = az; }
        } else { m.runVel[0] = ax; m.runVel[1] = az; m.hitTime = 0; }
      }
      if (ran === 'move' || ran === 'sprint') {
        const fast = m.speed() > m.tuning.runClipMinSpeed;
        if (!fast) m.stepDist = 0.5 * m.tuning.stepEvery; // standing: the first plant comes after half a stride
        else {
          m.stepDist += Math.hypot(m.pos[0] - m.prevPos[0], m.pos[2] - m.prevPos[2]);
          const stride = Math.max(0.1, ran === 'sprint' ? m.tuning.stepEverySprint : m.tuning.stepEvery);
          if (m.stepDist >= stride) {
            m.stepDist %= stride; m.steps++; m.foot ^= 1;
            m.onStep?.({ foot: m.foot, sprint: ran === 'sprint', speed: m.speed() });
          }
        }
      }
      // Run-in slam: only from move or sprint, which also rules out roll and the cover states.
      if (ran === 'move' || ran === 'sprint') {
        const tg = autoSlamCandidate(m, intent);
        if (!tg) m.autoTimer = 0;
        else if ((m.autoTimer += dt) >= m.coverTuning.autoTime) {
          m.coverTarget = tg; m.go('coverSlide', intent); return;
        }
      }
      if (next) m.go(next, intent);
    },
  };
  states[m.state].enter(m, { moveX: 0, moveY: 0, camYaw: 0 });
  return m;
}

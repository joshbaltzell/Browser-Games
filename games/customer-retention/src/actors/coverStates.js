// Cover states for the movement machine: slide into cover, move along it, pop out, vault,
// swap to the next wall, leave. A state with selfMoves moves m.pos itself. Cover states read
// intent.tap themselves (acceptsTap false), so a tap in cover never rolls.
import { tiltOf, wishOf, turnToward, yawOf, wrap } from './moveMath.js';
import {
  edgePoint, atEnd, isOpen, findCoverTarget, findSwapTarget, vaultLanding,
} from '../world/cover.js';

export const COVER_STATE_NAMES = ['coverSlide', 'cover', 'vault', 'coverSwap'];

const RAD = Math.PI / 180;
const wish = [0, 0], dir = [0, 0], delta = [0, 0, 0];
const MIN_DUR = 1e-3, MAX_SWAP_TIME = 2;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Unit stick direction when the stick is tilted enough, else the way the character faces.
export function approachDir(m, intent, out) {
  if (tiltOf(intent) >= m.coverTuning.grabMinTilt) {
    wishOf(intent, wish);
    const l = Math.hypot(wish[0], wish[1]);
    out[0] = wish[0] / l; out[1] = wish[1] / l;
  } else { out[0] = Math.sin(m.facing); out[1] = Math.cos(m.facing); }
  return out;
}

export const coverAction = {
  name: 'cover',
  state: 'coverSlide',
  when(m, intent) {
    m.coverTarget = findCoverTarget(m.coverEdges, m.boxes, m.pos, approachDir(m, intent, dir),
      intent.camYaw, m.coverTuning, m.tuning.radius);
    return m.coverTarget !== null;
  },
};

// Run-in slam: the stand-point target if this step's push qualifies, else null. Pure (reads m, no
// timer): stick tilt, the closing speed into the target face from before contact (-m.runVel . normal, see movement.js), and the same
// geometry as a tap grab with the angle and range narrowed to autoAngle and autoDist.
const autoTune = {};
export function autoSlamCandidate(m, intent) {
  const c = m.coverTuning;
  if (!c.autoSlam || intent.aim || tiltOf(intent) < c.autoMinTilt) return null;
  Object.assign(autoTune, c);
  autoTune.grabAngle = c.autoAngle; autoTune.grabRange = c.autoDist;
  wishOf(intent, wish);
  const l = Math.hypot(wish[0], wish[1]);
  dir[0] = wish[0] / l; dir[1] = wish[1] / l;
  const tg = findCoverTarget(m.coverEdges, m.boxes, m.pos, dir, intent.camYaw, autoTune, m.tuning.radius);
  if (!tg) return null;
  const n = tg.edge.normal;
  return -(m.runVel[0] * n[0] + m.runVel[1] * n[1]) >= c.autoMinSpeed ? tg : null;
}

// Whether a pop or a blind fire can rise here: low cover anywhere, tall cover only at an open end.
function canPopAt(e, t, c) {
  const end = atEnd(e, t, c);
  return e.kind === 'low' || (end !== 0 && isOpen(e, end));
}
export function canFireFromCover(m) {
  const k = m.cover;
  return !!k && canPopAt(k.edge, k.t, m.coverTuning);
}

export function coverEdgeOf(m) {
  return m.cover ? m.cover.edge : (m.scratch.edge || null);
}

export function cameraModeOf(m) {
  if (m.state === 'sprint') return 'sprint';
  if (m.cover && m.cover.pop >= 0.5) return 'aim';
  if (m.state === 'cover' || m.state === 'coverSlide' || m.state === 'coverSwap') {
    const e = coverEdgeOf(m);
    if (e) return e.kind === 'low' ? 'coverLow' : 'coverTall';
  }
  return m.aiming ? 'aim' : 'normal';
}

export function cameraSideOf(m) {
  const c = m.cover;
  if (!c) return 1;
  const e = c.edge;
  let end = c.popEnd;
  if (end === 0) end = atEnd(e, c.t, m.coverTuning);
  if (end === 0) return 1;
  const y = yawOf(-e.normal[0], -e.normal[1]);
  const rx = -Math.cos(y), rz = Math.sin(y);
  const toward = (e.tangent[0] * end * rx + e.tangent[1] * end * rz) < 0 ? -1 : 1;
  // an open end draws the lens toward it; a closed end (a wall) pushes it to the other shoulder
  return isOpen(e, end) ? toward : -toward;
}

// Shared by the slide and the swap: scratch holds { edge, t, from, to, dur }.
function startTravel(m, speed, minTime, maxTime) {
  const tg = m.coverTarget; m.coverTarget = null;
  const sc = m.scratch;
  sc.edge = tg.edge; sc.t = tg.t;
  sc.from = [m.pos[0], m.pos[1], m.pos[2]];
  sc.to = [tg.point[0], m.pos[1], tg.point[1]];
  const dist = Math.hypot(sc.to[0] - sc.from[0], sc.to[2] - sc.from[2]);
  // Tuning the panel can set to 0: floor the speed and the duration so dur stays finite and positive.
  sc.dur = Math.max(MIN_DUR, clamp(dist / Math.max(speed, 1e-6), minTime, maxTime));
  m.aiming = false;
}
function travel(m, dt, turnRate, faceYaw) {
  const sc = m.scratch;
  const u = Math.min(1, m.stateTime / sc.dur + 1e-9);
  delta[0] = sc.from[0] + (sc.to[0] - sc.from[0]) * u - m.pos[0];
  delta[1] = 0;
  delta[2] = sc.from[2] + (sc.to[2] - sc.from[2]) * u - m.pos[2];
  m.moveBy(delta, dt, false);
  if (faceYaw !== null) m.facing = turnToward(m.facing, faceYaw, turnRate * dt);
  m.heading = m.facing;
  if (u < 1) return null;
  if (Math.hypot(m.pos[0] - sc.to[0], m.pos[2] - sc.to[2]) > 0.1) return 'move';
  m.cover = { edge: sc.edge, t: sc.t, pop: 0, popEnd: 0, exposed: false, endPush: 0, blind: 0, blindEnd: 0 };
  m.vel[0] = m.vel[1] = m.vel[2] = 0;
  m.slams++;
  return 'cover';
}

const STATE_DEFS = {
  coverSlide: {
    acceptsTap: false, selfMoves: true,
    enter(m) { const c = m.coverTuning; startTravel(m, c.slideSpeed, c.slideMinTime, c.slideMaxTime); },
    update(m, intent, dt) {
      const e = m.scratch.edge;
      return travel(m, dt, m.coverTuning.slideTurnRate, yawOf(-e.normal[0], -e.normal[1]));
    },
    exit() {},
  },
  coverSwap: {
    acceptsTap: false, selfMoves: true,
    enter(m) {
      const c = m.coverTuning;
      m.cover = null;
      startTravel(m, c.swapSpeed, 0, MAX_SWAP_TIME);
      const sc = m.scratch;
      m.heading = yawOf(sc.to[0] - sc.from[0], sc.to[2] - sc.from[2]);
      m.facing = m.facing + wrap(m.heading - m.facing);
    },
    update(m, intent, dt) { return travel(m, dt, 0, null); },
    exit() {},
  },
  vault: {
    acceptsTap: false, selfMoves: true,
    enter(m) {
      const tg = m.coverTarget; m.coverTarget = null;
      const sc = m.scratch, e = tg.edge;
      m.cover = null; m.aiming = false;
      sc.edge = e; sc.landing = tg.landing; sc.from = [m.pos[0], m.pos[2]];
      m.heading = yawOf(-e.normal[0], -e.normal[1]);
      m.facing = m.facing + wrap(m.heading - m.facing);
    },
    update(m, intent, dt) {
      const sc = m.scratch, c = m.coverTuning;
      const u = Math.min(1, m.stateTime / Math.max(c.vaultTime, MIN_DUR) + 1e-9);
      // Passes over the box with no collision: the landing was checked when the vault began.
      m.pos[0] = sc.from[0] + (sc.landing[0] - sc.from[0]) * u;
      m.pos[2] = sc.from[1] + (sc.landing[2] - sc.from[1]) * u;
      if (u < 1) return null;
      m.vel[0] = -sc.edge.normal[0] * c.vaultExitSpeed; m.vel[1] = 0; m.vel[2] = -sc.edge.normal[1] * c.vaultExitSpeed;
      return 'move';
    },
    exit() {},
  },
  cover: {
    acceptsTap: false, selfMoves: true,
    enter() {},
    exit(m) { m.cover = null; m.aiming = false; },
    update(m, intent, dt) {
      const c = m.coverTuning, k = m.cover, e = k.edge, t = m.tuning;
      const tilt = wishOf(intent, wish);
      const wl = Math.hypot(wish[0], wish[1]);
      const ux = wl > 0 ? wish[0] / wl : 0, uz = wl > 0 ? wish[1] / wl : 0;
      const nx = e.normal[0], nz = e.normal[1];
      const pushing = tilt >= c.leaveTilt;
      const leaveWith = (dx, dz) => { m.vel[0] = dx * t.jog; m.vel[1] = 0; m.vel[2] = dz * t.jog; return 'move'; };

      // 1. leave: stick pulled away from the face.
      if (pushing && ux * nx + uz * nz >= Math.cos(c.leaveAngle * RAD)) return leaveWith(wish[0], wish[1]);

      // 2. tap: vault (pushing in) or swap (pushing along); anything else is ignored.
      if (intent.tap && pushing) {
        const cosPush = Math.cos(c.pushAngle * RAD);
        if (-(ux * nx + uz * nz) >= cosPush) {
          const landing = vaultLanding(e, k.t, m.boxes, c, t.radius, t.height);
          if (landing) { m.coverTarget = { landing, edge: e }; return 'vault'; }
        }
        const along = ux * e.tangent[0] + uz * e.tangent[1];
        if (Math.abs(along) >= cosPush) {
          const target = findSwapTarget(m.coverEdges, m.boxes, e, k.t, along > 0 ? 1 : -1, c, t.radius);
          if (target) { m.coverTarget = target; return 'coverSwap'; }
        }
      }

      // 3. pop and blind fire: low cover works anywhere, tall cover only at an open end. Aim beats fire.
      const end = atEnd(e, k.t, c);
      const canPop = canPopAt(e, k.t, c);
      const goal = intent.aim && canPop ? 1 : 0;
      const blindGoal = intent.fire && !intent.aim && canPop ? 1 : 0;
      const popStep = c.popTime > 0 ? dt / c.popTime : 1;
      k.pop = k.pop < goal ? Math.min(goal, k.pop + popStep) : Math.max(goal, k.pop - popStep);
      const blindStep = c.blindTime > 0 ? dt / c.blindTime : 1;
      k.blind = k.blind < blindGoal ? Math.min(blindGoal, k.blind + blindStep) : Math.max(blindGoal, k.blind - blindStep);
      k.popEnd = k.pop > 0 && e.kind !== 'low' ? end : 0;
      k.blindEnd = k.blind > 0 && e.kind !== 'low' ? end : 0;
      k.exposed = k.pop >= 0.5;
      m.aiming = k.exposed;

      // 4. along: only while tucked. A tall blind fire slides to its end instead, so the arm reaches past the corner.
      let pushedOut = false;
      if (k.pop === 0 && k.blind === 0) {
        const a = wish[0] * e.tangent[0] + wish[1] * e.tangent[1];
        if (Math.abs(a) >= c.alongDeadzone) {
          const nt = k.t + a * c.moveSpeed * dt;
          k.t = clamp(nt, 0, e.length);
          if (nt !== k.t && isOpen(e, a > 0 ? 1 : -1)) {
            pushedOut = true;
            k.endPush += dt;
            if (k.endPush >= c.endLeaveTime) return leaveWith(e.tangent[0] * Math.sign(a), e.tangent[1] * Math.sign(a));
          }
        }
      } else if (k.blindEnd !== 0 && blindGoal === 1) {
        k.t = clamp(k.t + k.blindEnd * c.moveSpeed * dt, 0, e.length);
      }
      if (!pushedOut) k.endPush = 0;

      // 5. place: on the stand line, shifted past the corner while a tall pop is out.
      const p = edgePoint(e, k.t), shift = k.popEnd * c.popShift * k.pop;
      delta[0] = p[0] + e.tangent[0] * shift - m.pos[0]; delta[1] = 0;
      delta[2] = p[1] + e.tangent[1] * shift - m.pos[2];
      m.moveBy(delta, dt, false);

      // 6. face: the camera while popped, else into the wall.
      if (k.pop > 0) m.facing = turnToward(m.facing, intent.camYaw, t.aimTurnRate * dt);
      else m.facing = turnToward(m.facing, yawOf(-nx, -nz), t.turnRate * dt);
      m.heading = m.facing;
      return null;
    },
  },
};

export const COVER_STATES = Object.fromEntries(COVER_STATE_NAMES.map(n => [n, STATE_DEFS[n]]));

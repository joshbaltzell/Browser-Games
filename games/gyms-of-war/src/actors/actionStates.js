// Doc's locked actions: bash, rev (Cheat Day), execute, reviveTobble and knocked (a Trainer's swing). They plug into the movement
// machine's STATES. Logic only: no clock of their own and no DOM. They read TUNING.melee at every use.
// Every one ends by its time (or, for rev and reviveTobble, by the button), and m.down() leaves any of them.
import { TUNING } from '../tuning.js';
import { wrap, wishOf, turnToward, steer } from './moveMath.js';

const wish = [0, 0], delta = [0, 0, 0];
const EPS = 1e-9;
const FALLBACK_REVIVE_TIME = 1.5; // TUNING.tobble.playerReviveTime arrives in Task 3

export const ACTION_STATE_NAMES = ['bash', 'rev', 'execute', 'reviveTobble', 'knocked'];
export const reviveTimeOf = (tuning = TUNING) => tuning.tobble?.playerReviveTime ?? FALLBACK_REVIVE_TIME;

// Turns m.facing to the point (x, z) at once, keeping the angle continuous.
function faceAt(m, x, z) {
  const dx = x - m.pos[0], dz = z - m.pos[2];
  if (Math.hypot(dx, dz) > 1e-6) m.facing = m.facing + wrap(Math.atan2(dx, dz) - m.facing);
  m.heading = m.facing;
}
function still(m) { m.aiming = false; m.firing = false; m.vel[0] = m.vel[1] = m.vel[2] = 0; }

export const ACTION_STATES = {
  // A Personal Trainer's swing landed: thrown back along scratch.dir by TUNING.trainer.knockback, eased out over knockTime, locked (no shooting,
  // cover, bash or roll) until it ends. m.knock() sets the direction and the time.
  knocked: {
    acceptsTap: false,
    selfMoves: true,
    enter(m) { still(m); m.cover = null; m.coverTarget = null; m.scratch.prevOff = 0; },
    update(m, intent, dt) {
      const sc = m.scratch;
      m.aiming = false; m.firing = false;
      const time = sc.time > 0 ? sc.time : 0;
      const done = m.stateTime >= time - EPS;
      const u = done || !(time > 0) ? 1 : m.stateTime / time;
      const off = sc.dist * (1 - (1 - u) * (1 - u));
      const inc = off - sc.prevOff; sc.prevOff = off;
      delta[0] = sc.dir[0] * inc; delta[1] = 0; delta[2] = sc.dir[1] * inc;
      m.moveBy(delta, dt, false);
      if (!done) return null;
      m.vel[0] = m.vel[1] = m.vel[2] = 0;
      return 'move';
    },
    exit() {},
  },
  // A short lunge along the facing it had on entry, eased out over bashTime. One bashHit at bashHitAt.
  bash: {
    acceptsTap: false,
    selfMoves: true,
    enter(m) {
      m.aiming = false; m.firing = false;
      m.scratch.dir = [Math.sin(m.facing), Math.cos(m.facing)];
      m.scratch.prevOff = 0; m.scratch.hit = false;
      m.heading = m.facing;
    },
    update(m, intent, dt) {
      const k = TUNING.melee, sc = m.scratch;
      m.aiming = false; m.firing = false;
      const done = m.stateTime >= k.bashTime - EPS;
      const u = done || !(k.bashTime > 0) ? 1 : m.stateTime / k.bashTime;
      const off = k.bashLunge * (1 - (1 - u) * (1 - u));
      const inc = off - sc.prevOff; sc.prevOff = off;
      delta[0] = sc.dir[0] * inc; delta[1] = 0; delta[2] = sc.dir[1] * inc;
      m.moveBy(delta, dt, false);
      if (!sc.hit && (done || m.stateTime >= k.bashHitAt - EPS)) { sc.hit = true; m.onAction?.({ type: 'bashHit' }); }
      if (!done) return null;
      m.vel[0] = m.vel[1] = m.vel[2] = 0;
      return 'move';
    },
    exit() {},
  },
  // Cheat Day: walk at revSpeed with the cutter spinning. It ends when the caller sends rev(false).
  rev: {
    acceptsTap: false,
    enter(m) { m.aiming = false; m.firing = false; m.heading = m.facing; },
    update(m, intent, dt) {
      const t = m.tuning, top = TUNING.melee.revSpeed;
      m.aiming = false; m.firing = false;
      wishOf(intent, wish);
      steer(m, wish[0] * top, wish[1] * top, top, dt, t);
      const sp = m.speed();
      if (sp > top) { m.vel[0] *= top / sp; m.vel[2] *= top / sp; }
      if (sp > t.faceMinSpeed) m.facing = turnToward(m.facing, Math.atan2(m.vel[0], m.vel[2]), t.turnRate * dt);
      else m.facing = turnToward(m.facing, intent.camYaw, t.aimTurnRate * dt);
      m.heading = m.facing;
      return null;
    },
    exit() {},
  },
  // Locked in place, facing the target, for the time given on entry. Then executeDone.
  execute: {
    acceptsTap: false,
    selfMoves: true,
    enter(m) { still(m); },
    update(m) {
      still(m);
      if (m.stateTime < m.scratch.time - EPS) return null;
      m.onAction?.({ type: 'executeDone' });
      return 'move';
    },
    exit() {},
  },
  // Kneels beside Tobble while interact is held. Let go: back to move. Held for playerReviveTime: reviveDone.
  reviveTobble: {
    acceptsTap: false,
    selfMoves: true,
    enter(m) { still(m); },
    update(m, intent) {
      still(m);
      if (!intent.interactHeld) return 'move';
      if (m.stateTime < reviveTimeOf() - EPS) return null;
      m.onAction?.({ type: 'reviveDone' });
      return 'move';
    },
    exit() {},
  },
};

// The entry points movement.js hangs on the mover. Each returns whether it started.
export const ACTION_ENTRY = {
  bash(m, yaw) {
    if (m.state !== 'move' && m.state !== 'sprint') return false;
    if (m.bashReadyAt > m.clock + EPS) return false;
    m.bashReadyAt = m.clock + TUNING.melee.bashCooldown;
    if (Number.isFinite(yaw)) m.facing = m.facing + wrap(yaw - m.facing);
    m.go('bash', {});
    return true;
  },
  rev(m, on) {
    if (on) {
      if (m.state !== 'move' && m.state !== 'sprint') return false;
      m.go('rev', {});
      return true;
    }
    if (m.state !== 'rev') return false;
    m.go('move', {});
    return true;
  },
  execute(m, target, time) {
    if (m.state !== 'move' && m.state !== 'sprint' && m.state !== 'rev' && m.state !== 'cover') return false;
    m.go('execute', {});
    m.scratch.time = Number.isFinite(time) && time > 0 ? time : 0;
    faceAt(m, target[0], target[1]);
    return true;
  },
  // Thrown back along (dx, dz) by dist metres over time seconds. Not while rolling, in an execution, kneeling to Tobble or already knocked.
  knock(m, dx, dz, dist, time) {
    if (m.state === 'roll' || m.state === 'execute' || m.state === 'reviveTobble' || m.state === 'knocked' || m.state === 'downed') return false;
    const l = Math.hypot(dx, dz);
    if (!(l > 1e-9)) return false;
    m.go('knocked', {});
    m.scratch.dir = [dx / l, dz / l]; m.scratch.dist = dist > 0 ? dist : 0; m.scratch.time = time;
    return true;
  },
  reviveTobble(m, pos) {
    if (m.state !== 'move' && m.state !== 'sprint' && m.state !== 'rev' && m.state !== 'cover') return false;
    m.go('reviveTobble', {});
    faceAt(m, pos[0], pos.length > 2 ? pos[2] : pos[1]);
    return true;
  },
};

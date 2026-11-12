// The Personal Trainer's brain: a rusher. It lives in an Associate's enemy slot (e.kind === 'trainer'), holds no cover point and no
// attack token, runs at the nearest of Doc or Tobble (preferring Doc), winds up, swings a kettlebell and recovers. The Associate's
// brain dispatches here by kind, so the fight, the saunas, bash, Cheat Day, kettlebells and the views treat it as one more enemy.
// A swing is only ever the end of a windup: the brain pushes 'trainerSwing' and the fight lands the blow on whoever is in reach.
// Pure logic: no WebGL, no DOM. Randomness comes only from ctx.rand.
import { TUNING } from '../tuning.js';
import { moveCapsule } from '../world/collide.js';
import { findPath, clearPath } from '../world/waypoints.js';
import { lineOfSight } from '../world/coverPoints.js';
import { HIT_SHAPES } from '../combat/targets.js';
import { turnToward } from './moveMath.js';

const LOCKED = new Set(['executed', 'unused', 'dead']);
const SWING_Y = 1.3;   // m, the height the swing's line of sight is judged at: over a 1 m counter, under any real wall
const EPS = 1e-9;
const distXZ = (a, b) => Math.hypot(a[0] - b[0], a[2] - b[2]);

// The trainer's capsule, from the Associate's numbers and the trainer scale.
export const trainerRadius = (tun = TUNING) => tun.associate.radius * tun.trainer.scaleW;
export const trainerHeight = (tun = TUNING) => tun.associate.height * tun.trainer.scaleH;

function go(e, state) { e.state = state; e.stateT = 0; }

// Fresh trainer fields on a slot (a start, a restart or a sauna spawn).
export function initTrainer(e, tun = TUNING) {
  e.kind = 'trainer';
  e.health = tun.trainer.health;
  e.strikeAt = -1; e.windupLen = 0; e.struckAt = -Infinity; e.retargetT = 0; e.repathT = 0; e.forcePathT = 0; e.stuckCount = 0;
  e.target = 'player'; e.path = []; e.pathI = 0; e.point = null; e.pop = 0; e.blind = 0; e.role = 'hold';
  return e;
}

// Standing shapes scaled by the trainer's size: heights by scaleH, radii by scaleW.
export function trainerShapes(e, combat = TUNING.combat, tun = TUNING) {
  const [x, y, z] = e.pos, s = e.shapes, W = tun.trainer.scaleW, H = tun.trainer.scaleH;
  s.head.r = HIT_SHAPES.head.r * W + combat.hitPad; s.body.r = HIT_SHAPES.body.r * W + combat.hitPad;
  s.head.c[0] = x; s.head.c[1] = y + HIT_SHAPES.head.cy * H; s.head.c[2] = z;
  s.body.a[0] = x; s.body.a[1] = y + HIT_SHAPES.body.ay * H; s.body.a[2] = z;
  s.body.b[0] = x; s.body.b[1] = y + HIT_SHAPES.body.by * H; s.body.b[2] = z;
  return s;
}

const tobbleUp = ctx => (ctx.tobble && !ctx.tobble.downed ? ctx.tobble : null);
const targetPos = (e, ctx) => (e.target === 'tobble' && ctx.tobble ? ctx.tobble.pos : ctx.player.pos);
const targetGone = (e, ctx) => (e.target === 'tobble' ? !tobbleUp(ctx) : ctx.player.downed);

// Doc unless Tobble is much nearer; Tobble when Doc is down; null when neither can be hit.
function chooseTarget(e, ctx, T) {
  const pl = ctx.player, tb = tobbleUp(ctx);
  if (pl.downed) return tb ? 'tobble' : null;
  if (!tb) return 'player';
  return distXZ(e.pos, tb.pos) < distXZ(e.pos, pl.pos) * T.preferDoc ? 'tobble' : 'player';
}

function bark(e, ctx, key) { ctx.events.push({ type: 'bark', id: e.id, key }); }

// The first step after a spawn, a stagger or a recovery: pick a target and run, or stand waiting when there is none.
function startRun(e, ctx, T, barkIt) {
  const t = chooseTarget(e, ctx, T);
  if (!t) { go(e, 'idle'); return; }
  e.target = t; e.retargetT = T.retargetTime; e.repathT = 0; e.path = []; e.pathI = 0;
  go(e, 'run');
  if (barkIt && ctx.rand() < T.barkChance) bark(e, ctx, 'trainerCharge');
}

// Steers away from the other characters in the way: every live enemy, plus Doc and Tobble when they are not the target.
function avoidance(e, ctx, T, out) {
  out[0] = out[1] = 0;
  const R = T.avoidRadius;
  if (!(R > 0)) return out;
  const push = (px, pz, w) => {
    const dx = e.pos[0] - px, dz = e.pos[2] - pz, d = Math.hypot(dx, dz);
    if (d >= R || d < 1e-6) return;
    const k = (R - d) / R * w / d;
    out[0] += dx * k; out[1] += dz * k;
  };
  for (const o of ctx.others || []) if (o !== e && o.alive && o.state !== 'unused' && o.state !== 'executed' && o.state !== 'dead') push(o.pos[0], o.pos[2], 1);
  if (e.target !== 'player' && !ctx.player.downed) push(ctx.player.pos[0], ctx.player.pos[2], 1);
  const tb = tobbleUp(ctx);
  if (tb && e.target !== 'tobble') push(tb.pos[0], tb.pos[2], 1);
  return out;
}

const steer = [0, 0], from2 = [0, 0], to2 = [0, 0], eye = [0, 0, 0], at = [0, 0, 0];

// Can the swing reach the target from here: within swingRange and a clear line at shoulder height.
function inSwingRange(e, ctx, T, tp) {
  if (Math.hypot(tp[0] - e.pos[0], tp[2] - e.pos[2]) > T.swingRange) return false;
  eye[0] = e.pos[0]; eye[1] = e.pos[1] + SWING_Y; eye[2] = e.pos[2];
  at[0] = tp[0]; at[1] = e.pos[1] + SWING_Y; at[2] = tp[2];
  return lineOfSight(ctx.boxes, eye, at);
}

// Plans the wind-up so its blow lands at least swingGap from every other trainer's planned or past blow; the wind-up is never shorter than windup.
function startWindup(e, ctx, T) {
  let t = ctx.now + T.windup;
  const others = (ctx.others || []).filter(o => o !== e && o.kind === 'trainer' && o.alive);
  for (let pass = 0; pass <= others.length; pass++) {
    let moved = false;
    for (const o of others) {
      for (const tt of [o.struckAt, o.state === 'windup' ? o.strikeAt : -Infinity]) {
        if (Number.isFinite(tt) && Math.abs(t - tt) < T.swingGap - EPS) { t = tt + T.swingGap; moved = true; }
      }
    }
    if (!moved) break;
  }
  e.strikeAt = t; e.windupLen = Math.max(T.windup, t - ctx.now);
  go(e, 'windup');
  ctx.events.push({ type: 'telegraph', id: e.id, kind: 'trainer', time: e.windupLen });
  bark(e, ctx, 'trainerWindup');
}

function run(e, ctx, T, dt, tun) {
  e.retargetT -= dt; e.repathT -= dt; e.forcePathT -= dt;
  if (e.retargetT <= 0 || targetGone(e, ctx)) {
    const t = chooseTarget(e, ctx, T);
    if (!t) { go(e, 'idle'); return; }
    e.target = t; e.retargetT = T.retargetTime;
  }
  const tp = targetPos(e, ctx);
  if (inSwingRange(e, ctx, T, tp)) { startWindup(e, ctx, T); return; }
  const r = trainerRadius(tun), h = trainerHeight(tun);
  from2[0] = e.pos[0]; from2[1] = e.pos[2]; to2[0] = tp[0]; to2[1] = tp[2];
  let gx = tp[0], gz = tp[2];
  if (e.forcePathT > 0 || !clearPath(ctx.boxes, from2, to2, r * 0.9)) {
    if (e.repathT <= 0 || !e.path.length) {
      e.path = findPath(ctx.graph, ctx.boxes, from2, to2, r) || [[tp[0], tp[2]]];
      e.pathI = 0; e.repathT = T.repathTime;
    }
    while (e.pathI < e.path.length - 1 && Math.hypot(e.path[e.pathI][0] - e.pos[0], e.path[e.pathI][1] - e.pos[2]) < 0.35) e.pathI++;
    gx = e.path[e.pathI][0]; gz = e.path[e.pathI][1];
  } else e.path.length = 0;
  let dx = gx - e.pos[0], dz = gz - e.pos[2];
  const d = Math.hypot(dx, dz) || 1;
  dx /= d; dz /= d;
  avoidance(e, ctx, T, steer);
  dx += steer[0] * T.avoidWeight; dz += steer[1] * T.avoidWeight;
  const l = Math.hypot(dx, dz) || 1;
  dx /= l; dz /= l;
  e.yaw = turnToward(e.yaw, Math.atan2(dx, dz), T.turnRate * dt);
  const step = T.runSpeed * dt;
  const res = moveCapsule(ctx.boxes, e.pos, [dx * step, 0, dz * step], r, h);
  e.pos[0] = res.pos[0]; e.pos[2] = res.pos[2];
  // Stuck guard: little progress over stuckTime forces the planned path for a second.
  e.stuckT += dt;
  if (e.stuckT >= T.stuckTime) {
    if (Math.hypot(e.pos[0] - e.stuckRef[0], e.pos[2] - e.stuckRef[1]) < T.runSpeed * T.stuckTime * 0.25) { e.forcePathT = 1; e.repathT = 0; e.stuckCount++; }
    e.stuckT = 0; e.stuckRef[0] = e.pos[0]; e.stuckRef[1] = e.pos[2];
  }
}

function windup(e, ctx, T, dt) {
  const tp = targetPos(e, ctx);
  // It tracks its target until lockTime before the blow, then the swing's direction is fixed (a roll or a step aside dodges it).
  if (e.stateT < e.windupLen - T.lockTime) {
    const dx = tp[0] - e.pos[0], dz = tp[2] - e.pos[2];
    if (Math.hypot(dx, dz) > 1e-6) e.yaw = turnToward(e.yaw, Math.atan2(dx, dz), T.turnRate * dt);
  }
  if (e.stateT < e.windupLen - EPS) return;
  // Two trainers never land within swingGap of each other: the later one holds its raised kettlebell a moment longer.
  for (const o of ctx.others || []) if (o !== e && o.kind === 'trainer' && ctx.now - o.struckAt < T.swingGap - EPS) return;
  e.struckAt = ctx.now; e.strikeAt = -1;
  go(e, 'swing');
  ctx.events.push({ type: 'trainerSwing', id: e.id, from: [e.pos[0], e.pos[1], e.pos[2]], yaw: e.yaw, reach: T.swingRange + T.swingSlack, arc: T.swingArc, target: e.target });
}

function dive(e, ctx, T, tun, dt) {
  const A = tun.associate, dur = Math.max(A.diveTime, 1e-3);
  const from = Math.max(e.stateT - dt, A.diveReaction), to = Math.min(e.stateT, A.diveReaction + dur);
  if (to > from) {
    const move = A.diveDistance * (to - from) / dur;
    const r = moveCapsule(ctx.boxes, e.pos, [e.diveDir[0] * move, 0, e.diveDir[1] * move], trainerRadius(tun), trainerHeight(tun));
    e.pos[0] = r.pos[0]; e.pos[2] = r.pos[2];
  }
  if (e.stateT >= A.diveReaction + dur - EPS) startRun(e, ctx, T, false);
}

export function updateTrainer(e, ctx, dt) {
  const tun = ctx.tuning || TUNING, T = tun.trainer;
  switch (e.state) {
    case 'idle': if (ctx.started) startRun(e, ctx, T, true); break;
    case 'spawn': if (e.stateT >= tun.pad.riseTime - EPS) startRun(e, ctx, T, true); break;
    case 'run': run(e, ctx, T, dt, tun); break;
    case 'windup': windup(e, ctx, T, dt); break;
    case 'swing': if (e.stateT >= T.swingTime - EPS) go(e, 'recover'); break;
    case 'recover': if (e.stateT >= T.recover - EPS) startRun(e, ctx, T, false); break;
    case 'stagger': if (e.stateT >= T.staggerTime - EPS) startRun(e, ctx, T, false); break;
    case 'dive': dive(e, ctx, T, tun, dt); break;
    default: break;   // 'executed', 'unused' and 'dead' hold still
  }
}

// Bash: a stagger that cancels a windup (no blow follows) and interrupts a recovery. False for a held, dead or empty slot.
export function staggerTrainer(e) {
  if (!e.alive || LOCKED.has(e.state)) return false;
  e.strikeAt = -1;
  go(e, 'stagger');
  return true;
}

// A kettlebell about to blow: dive away from `from` ([x, ?, z]) after diveReaction. Any wind-up is abandoned.
export function diveTrainer(e, from) {
  if (!e.alive || LOCKED.has(e.state) || e.state === 'dive') return false;
  e.strikeAt = -1; e.path = []; e.pathI = 0;
  let dx = e.pos[0] - from[0], dz = e.pos[2] - from[2];
  const d = Math.hypot(dx, dz);
  if (d < 1e-6) { dx = Math.sin(e.yaw); dz = Math.cos(e.yaw); } else { dx /= d; dz /= d; }
  e.diveDir[0] = dx; e.diveDir[1] = dz; e.yaw = Math.atan2(dx, dz);
  go(e, 'dive');
  return true;
}

// Cheat Day or the stomp takes hold: it freezes, and a wind-up in progress is gone.
export function executeTrainer(e) {
  if (!e.alive || LOCKED.has(e.state) || e.state === 'dive') return false;
  e.strikeAt = -1; e.wasDowned = false;
  go(e, 'executed');
  return true;
}

// Doc went down mid-execution: it lets go and recovers.
export function releaseTrainer(e) {
  if (!e.alive || e.state !== 'executed') return false;
  go(e, 'recover');
  return true;
}

export function killTrainer(e, ctx, kind) {
  e.alive = false; e.strikeAt = -1; e.pop = 0; e.blind = 0;
  go(e, 'dead');
  ctx.events.push({ type: 'death', id: e.id, pos: [e.pos[0], e.pos[1], e.pos[2]], kind });
  ctx.events.push({ type: 'bark', id: e.id, key: 'trainerDeath' });
  return 'kill';
}

export function finishTrainer(e, ctx, kind = 'execute') {
  if (!e.alive || e.state !== 'executed') return null;
  e.health = 0;
  return killTrainer(e, ctx, kind);
}

// 'hit' | 'kill' | null. A trainer never downs, and a hit does not interrupt it (the bash does that).
export function hurtTrainer(e, amount, ctx, kind = 'body') {
  if (!e.alive || !(amount > 0) || e.state === 'executed' || e.state === 'unused') return null;
  e.health -= amount;
  if (e.health <= 0) { e.health = 0; return killTrainer(e, ctx, kind); }
  return 'hit';
}

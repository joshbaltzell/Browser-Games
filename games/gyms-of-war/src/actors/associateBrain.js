// The Associate's brain: where it stands, what state it is in and what it does about it. It reads the
// player only through ctx.player and pushes everything the world should react to onto ctx.events.
// Pure logic: no WebGL, no DOM, no play.js. Randomness comes only from ctx.rand.
import { TUNING } from '../tuning.js';
import { moveCapsule } from '../world/collide.js';
import { findPath } from '../world/waypoints.js';
import { coverValue, lineOfSight, popPos } from '../world/coverPoints.js';
import { HIT_SHAPES, ENEMY_SHAPES } from '../combat/targets.js';
import { turnToward } from './moveMath.js';
import {
  initTrainer, trainerShapes, updateTrainer, staggerTrainer, diveTrainer, executeTrainer, releaseTrainer, finishTrainer, hurtTrainer,
} from './trainerBrain.js';
import { initBoss, bossShapes, updateBoss, hurtBoss } from './bossBrain.js';

// The Rep's hit volumes (the blob body's), local to its feet.
const REP = ENEMY_SHAPES.associate;

const MAX_DT = 0.25;
// States where a Rep cannot be hit, staggered or sent diving: held still (executed), an empty slot or a corpse.
const LOCKED = new Set(['executed', 'unused', 'dead']);
const CALM_REP = new Set(['cover', 'suppress', 'reload']);   // a downed Rep crawls toward one of these
const DOWNED = { r: 0.25, y: 0.25, back: 0.2, front: 0.6 };
const TUCKED = new Set(['idle', 'cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch']);
const SHOOTING = new Set(['telegraph', 'burst', 'suppress']);
const clamp01 = v => Math.max(0, Math.min(1, v));
const dist2 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);       // [x, z] and [x, z]
const distXZ = (a, b) => Math.hypot(a[0] - b[0], a[2] - b[2]);      // [x, y, z] and [x, y, z]

// e.kind is 'associate' (a Rep), 'trainer' (a Personal Trainer, trainerBrain.js) or 'boss' (the Membership Overlord, bossBrain.js, only ever a level's start slot):
// a slot is one of them for as long as it lives.
export function resetAssociate(e, tuning = TUNING.associate, all = TUNING) {
  e.pos[0] = e.start[0]; e.pos[1] = e.start[1]; e.pos[2] = e.start[2];
  e.prevPos[0] = e.start[0]; e.prevPos[1] = e.start[1]; e.prevPos[2] = e.start[2];
  e.yaw = e.prevYaw = Math.PI;       // facing -z, toward where the player arrives
  e.state = 'idle'; e.stateT = 0; e.health = tuning.health; e.alive = true;
  e.point = null; e.path = []; e.pathI = 0; e.pop = 0; e.blind = 0; e.role = 'hold'; e.bursts = 0;
  e.aim[0] = e.aim[1] = e.aim[2] = 0;
  e.wait = 0; e.wantSuppress = null; e.shots = 0; e.relocT = 0; e.pointT = 0; e.mustMove = false;
  e.stuckT = 0; e.stuckRef[0] = e.start[0]; e.stuckRef[1] = e.start[2]; e.stuckCount = 0;
  e.helper = null; e.helping = null; e.target = 'player'; e.diveDir[0] = e.diveDir[1] = 0; e.divePoint = null; e.claimed = false; e.diedAt = -Infinity; e.wasDowned = false;
  e.kind = e.startKind; if (e.kind === 'trainer') initTrainer(e, all); else if (e.kind === 'boss') initBoss(e, all);
  associateShapes(e, all.combat, all);
  return e;
}

// An empty enemy slot: not alive, never drawn or targeted, parked below the floor until spawnAssociate fills it.
export function unuseAssociate(e) {
  e.alive = false; e.state = 'unused'; e.stateT = 0; e.health = 0;
  e.pos[1] = e.prevPos[1] = -50;
  e.point = null; e.path = []; e.pathI = 0; e.pop = 0; e.blind = 0; e.role = 'hold';
  e.helper = null; e.helping = null; e.claimed = false; e.wasDowned = false; e.kind = 'associate';
  associateShapes(e);
  return e;
}

// A slot comes alive at pos as a new Rep (or, with kind 'trainer', a new Personal Trainer) at full health, rising from the sauna in 'spawn'. It faces the player.
export function spawnAssociate(e, pos, ctx, kind = 'associate') {
  const tun = ctx.tuning || TUNING, T = tun.associate;
  for (let i = 0; i < 3; i++) { e.pos[i] = pos[i]; e.prevPos[i] = pos[i]; }
  const pl = ctx.player;
  e.yaw = e.prevYaw = pl ? Math.atan2(pl.pos[0] - pos[0], pl.pos[2] - pos[2]) : Math.PI;
  e.state = 'spawn'; e.stateT = 0; e.health = T.health; e.alive = true; e.claimed = false;
  e.point = null; e.path = []; e.pathI = 0; e.pop = 0; e.blind = 0; e.role = 'hold'; e.bursts = 0;
  e.wait = 0; e.wantSuppress = null; e.shots = 0; e.relocT = 0; e.pointT = 0; e.mustMove = false;
  e.stuckT = 0; e.stuckCount = 0; e.helper = null; e.helping = null; e.target = 'player'; e.wasDowned = false; e.diedAt = -Infinity; e.divePoint = null;
  e.kind = kind; if (kind === 'trainer') initTrainer(e, tun);
  associateShapes(e, tun.combat, tun);
  return e;
}

export function createAssociate({ id, pos, kind = 'associate' }, tuning = TUNING.associate, all = TUNING) {
  const e = {
    id, kind, startKind: kind, strikeAt: -1, windupLen: 0, struckAt: -Infinity, retargetT: 0, repathT: 0, forcePathT: 0, start: [pos[0], pos[1], pos[2]], pos: [0, 0, 0], prevPos: [0, 0, 0], yaw: 0, prevYaw: 0,
    state: 'idle', stateT: 0, health: 0, alive: true, point: null, path: [], pathI: 0, pop: 0, blind: 0,
    role: 'hold', bursts: 0, aim: [0, 0, 0],
    shapes: { head: { c: [0, 0, 0], r: REP.head.r }, body: { a: [0, 0, 0], b: [0, 0, 0], r: REP.body.r } },
    // Working data.
    wait: 0, wantSuppress: null, shots: 0, relocT: 0, pointT: 0, mustMove: false,
    stuckT: 0, stuckRef: [0, 0], stuckCount: 0, chest: [0, 0, 0], muzzle: [0, 0, 0],
    // Reactions: who is reviving this downed Rep (helper) or whom this Rep is reviving (helping), the dive heading,
    // whether a slot is claimed for a spawn, when it died and whether an execution interrupted a downed state.
    helper: null, helping: null, target: 'player', diveDir: [0, 0], divePoint: null, claimed: false, diedAt: -Infinity, wasDowned: false,
  };
  return resetAssociate(e, tuning, all);
}

// Crouch shapes when tucked behind low cover, standing shapes when popped or out of cover.
export function associateShapes(e, combat = TUNING.combat, all = TUNING) {
  if (e.kind === 'trainer') return trainerShapes(e, combat, all);
  if (e.kind === 'boss') return bossShapes(e, combat, all);
  const [x, y, z] = e.pos, s = e.shapes;
  if (e.state === 'downed') {
    // Lying down: a capsule along the facing from 0.2 m behind to 0.6 m in front (r 0.25, y 0.25) and the head at the front end.
    const fx = Math.sin(e.yaw), fz = Math.cos(e.yaw);
    s.body.r = DOWNED.r; s.head.r = REP.head.r;
    s.body.a[0] = x - fx * DOWNED.back; s.body.a[1] = y + DOWNED.y; s.body.a[2] = z - fz * DOWNED.back;
    s.body.b[0] = x + fx * DOWNED.front; s.body.b[1] = y + DOWNED.y; s.body.b[2] = z + fz * DOWNED.front;
    s.head.c[0] = s.body.b[0]; s.head.c[1] = y + DOWNED.y; s.head.c[2] = s.body.b[2];
    return s;
  }
  const crouch = TUCKED.has(e.state) && e.point && e.point.kind === 'low' && e.pop < 0.5;
  s.head.r = REP.head.r + combat.hitPad; s.body.r = REP.body.r + combat.hitPad;
  s.head.c[0] = x; s.head.c[2] = z; s.body.a[0] = x; s.body.a[2] = z; s.body.b[0] = x; s.body.b[2] = z;
  if (crouch) {
    // The pad lowers the head centre so the padded sphere's top stays at the crouch height, under the wall top (and the blob's bigger head sinks by the difference).
    s.head.c[1] = y + combat.crouchHead - combat.hitPad + (HIT_SHAPES.head.r - REP.head.r); s.body.a[1] = y + 0.1; s.body.b[1] = y + combat.crouchBodyTop;
  } else {
    s.head.c[1] = y + REP.head.cy; s.body.a[1] = y + REP.body.ay; s.body.b[1] = y + REP.body.by;
  }
  return s;
}

function go(e, state) { e.state = state; e.stateT = 0; }

// Pop is 0 (tucked) to 1 (out). Behind tall cover the popped position slides popShift past the open end.
function setPop(e, v, T) {
  v = clamp01(v);
  const p = e.point;
  if (p && p.kind === 'tall' && v !== e.pop) {
    const s = p.end * T.popShift * (v - e.pop);
    e.pos[0] += p.tangent[0] * s; e.pos[2] += p.tangent[1] * s;
  }
  e.pop = v;
}
const step = (dt, time) => (time > 0 ? dt / time : 1);

function face(e, x, z, T, dt) {
  const dx = x - e.pos[0], dz = z - e.pos[2];
  if (Math.hypot(dx, dz) > 1e-6) e.yaw = turnToward(e.yaw, Math.atan2(dx, dz), T.turnRate * dt);
}
function faceWall(e, T, dt) {
  const n = e.point.normal;
  e.yaw = turnToward(e.yaw, Math.atan2(-n[0], -n[1]), T.turnRate * dt);
}

function releaseToken(e, ctx) {
  if (ctx.tokens.holds(e.id)) ctx.tokens.release(e.id, ctx.now, ctx.director);
}

function evalChest(e, ctx) {
  const p = ctx.player.pos;
  e.chest[0] = p[0]; e.chest[1] = p[1] + 1.2; e.chest[2] = p[2];
  return e.chest;
}

// Best point for e, as { point, score }, or null. The candidates are unreserved, protected from the player,
// able to shoot at the player's standing chest (a player tucked behind low cover pops up to it) and between
// minRange and maxRange. Hold and push points must lie in front of the player (never behind their cover). Ties go to the lower point index. A push must end >= 2 m closer to the player; a
// flank must lie >= flankAngle and <= flankMaxAngle off the direction the player's cover faces.
export function scorePick(e, ctx) {
  const tun = ctx.tuning || TUNING, T = tun.associate, D = ctx.director || tun.director;
  const pl = ctx.player, plp = [pl.pos[0], pl.pos[2]];
  const chest = evalChest(e, ctx);
  const cur = e.point;
  const curD = cur ? dist2(cur.pos, plp) : dist2([e.pos[0], e.pos[2]], plp);
  const role = e.role;
  const skipOwn = !!cur && (e.mustMove || role !== 'hold');
  const here = [e.pos[0], e.pos[2]];
  const cosFlank = Math.cos(D.flankAngle * Math.PI / 180);
  const cosFlankMax = Math.cos(D.flankMaxAngle * Math.PI / 180);
  // The direction the player faces: out from their cover, or toward the Associates when they have none.
  let fx = 0, fz = 0;
  if (pl.coverNormal) { fx = -pl.coverNormal[0]; fz = -pl.coverNormal[1]; } else {
    let n = 0;
    for (const o of ctx.others || []) if (o.alive) { fx += o.pos[0]; fz += o.pos[2]; n++; }
    if (n) { fx = fx / n - plp[0]; fz = fz / n - plp[1]; } else { fx = e.pos[0] - plp[0]; fz = e.pos[2] - plp[1]; }
  }
  const fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
  const others = [];
  for (const [idx, id] of ctx.reserved) if (id !== e.id) others.push(ctx.points[idx].pos);
  let best = null, bestScore = -Infinity;
  for (const p of ctx.points) {
    const r = ctx.reserved.get(p.index);
    if (r !== undefined && r !== e.id) continue;
    if (skipOwn && p.index === cur.index) continue;
    if (e.mustMove && cur && dist2(p.pos, cur.pos) < 2 * T.reserveRadius) continue;
    const dp = dist2(p.pos, plp);
    if (dp < T.reserveRadius || dp < T.minRange || dp > T.maxRange) continue;
    let near = false;
    for (const o of others) if (dist2(o, p.pos) < T.reserveRadius) { near = true; break; }
    if (near) continue;
    const along = ((p.pos[0] - plp[0]) * fx + (p.pos[1] - plp[1]) * fz) / dp;
    // Hold and push points stay in front of the player; a flank may swing round to the side but never behind.
    if (role === 'flank' ? along < cosFlankMax : along < 0) continue;
    let bonus = 0;
    if (role === 'push') {
      const gain = curD - dp;
      if (gain < 2) continue;
      bonus = 2 * gain;
    } else if (role === 'flank') {
      if (!pl.coverNormal) continue;
      if (along > cosFlank) continue;
      bonus = 10;
    }
    const cv = coverValue(p, chest, ctx.boxes, tun);
    if (!cv.protected || !cv.canShoot) continue;
    const score = -dist2(here, p.pos) - 0.5 * Math.abs(dp - T.preferRange) + bonus;
    if (score > bestScore + 1e-9) { bestScore = score; best = p; }
  }
  return best ? { point: best, score: bestScore } : null;
}

export function pickPoint(e, ctx) {
  const s = scorePick(e, ctx);
  return s ? s.point : null;
}

function nearestPoint(e, ctx, protectedOnly) {
  const tun = ctx.tuning || TUNING, here = [e.pos[0], e.pos[2]], chest = evalChest(e, ctx);
  let best = null, bd = Infinity;
  for (const p of ctx.points) {
    const r = ctx.reserved.get(p.index);
    if (r !== undefined && r !== e.id) continue;
    const d = dist2(here, p.pos);
    if (d >= bd) continue;
    if (protectedOnly && !coverValue(p, chest, ctx.boxes, tun).protected) continue;
    bd = d; best = p;
  }
  return best;
}

function enterCover(e, ctx, T) {
  go(e, 'cover');
  e.blind = 0; e.wantSuppress = null;
  e.wait = T.coverWaitMin + (T.coverWaitMax - T.coverWaitMin) * ctx.rand();
}

function seek(e, ctx, T) {
  releaseToken(e, ctx);
  setPop(e, 0, T); e.blind = 0;
  let p = e.stuckCount >= 3 ? nearestPoint(e, ctx, false) : pickPoint(e, ctx);
  if (!p) {
    e.mustMove = false;
    if (e.role !== 'hold') e.role = 'hold';
    // Staying on the current point is fine only if it is free or already this Rep's: a Rep that dived has let go of its reservation.
    const held = e.point ? ctx.reserved.get(e.point.index) : null;
    if (e.point && (held === undefined || held === e.id) && dist2(e.point.pos, [e.pos[0], e.pos[2]]) <= 0.5) {
      ctx.reserved.set(e.point.index, e.id);
      enterCover(e, ctx, T);
      return;
    }
    p = nearestPoint(e, ctx, true) || nearestPoint(e, ctx, false);
    if (!p) {
      // Nothing free anywhere. Without a point of its own it waits in 'seek' (trying again each step) rather than crouching at another Rep's point.
      if (e.point && ctx.reserved.get(e.point.index) !== e.id && ctx.reserved.has(e.point.index)) { e.point = null; go(e, 'seek'); return; }
      enterCover(e, ctx, T);
      return;
    }
  }
  if (e.point && e.point.index !== p.index && ctx.reserved.get(e.point.index) === e.id) ctx.reserved.delete(e.point.index);
  ctx.reserved.set(p.index, e.id);
  e.point = p; e.mustMove = false;
  if (Math.hypot(p.pos[0] - e.pos[0], p.pos[1] - e.pos[2]) <= T.arriveDist) { arrive(e, ctx, T); return; }
  const path = e.stuckCount >= 3 ? null : findPath(ctx.graph, ctx.boxes, [e.pos[0], e.pos[2]], p.pos, T.radius);
  e.path = path || [[p.pos[0], p.pos[1]]];
  e.pathI = 0; e.stuckT = 0; e.stuckRef[0] = e.pos[0]; e.stuckRef[1] = e.pos[2];
  go(e, 'run');
}

function arrive(e, ctx, T) {
  if (e.role === 'revive') { go(e, 'kneel'); return; }
  const p = e.point;
  e.pos[0] = p.pos[0]; e.pos[2] = p.pos[1];
  e.role = 'hold'; e.stuckCount = 0; e.pointT = 0; e.relocT = 0; e.mustMove = false;
  ctx.events.push({ type: 'arrive', id: e.id, point: p });
  enterCover(e, ctx, T);
}

function run(e, ctx, T, dt) {
  if (e.role === 'revive') {
    const t = helpTarget(e, ctx);
    if (!t) { cancelRevive(e, ctx); seek(e, ctx, T); return; }
    if (distXZ(e.pos, t.pos) <= T.kneelReach) { go(e, 'kneel'); return; }
  }
  let remaining = T.runSpeed * dt;
  for (let guard = 0; guard < e.path.length + 2; guard++) {
    const wp = e.path[e.pathI], last = e.pathI === e.path.length - 1;
    const dx = wp[0] - e.pos[0], dz = wp[1] - e.pos[2], d = Math.hypot(dx, dz);
    if (d <= T.arriveDist) {
      if (last) { arrive(e, ctx, T); return; }
      e.pathI++; continue;
    }
    face(e, wp[0], wp[1], T, dt);
    const want = Math.min(remaining, d);
    if (want <= 1e-9) break;
    const r = moveCapsule(ctx.boxes, e.pos, [dx / d * want, 0, dz / d * want], T.radius, T.height);
    const moved = Math.hypot(r.pos[0] - e.pos[0], r.pos[2] - e.pos[2]);
    e.pos[0] = r.pos[0]; e.pos[2] = r.pos[2];
    remaining -= moved;
    if (moved < want * 0.5) break;       // blocked: the stuck guard takes it from here
    if (moved >= d - 1e-9 && last) continue; // arrives on the next pass
  }
  e.stuckT += dt;
  if (e.stuckT >= T.stuckTime) {
    const moved = Math.hypot(e.pos[0] - e.stuckRef[0], e.pos[2] - e.stuckRef[1]);
    if (moved < 0.05) { if (e.role === 'revive') cancelRevive(e, ctx); e.stuckCount++; seek(e, ctx, T); return; }
    e.stuckCount = 0; e.stuckT = 0; e.stuckRef[0] = e.pos[0]; e.stuckRef[1] = e.pos[2];
  }
}

function springAim(e, ctx, T, dt, snap) {
  const pl = ctx.player, tgt = e.target === 'tobble' && ctx.tobble ? ctx.tobble.chest : pl.exposed ? pl.head : pl.chest;
  const k = snap || !(T.aimLag > 0) ? 1 : 1 - Math.pow(0.5, dt / T.aimLag);
  for (let i = 0; i < 3; i++) e.aim[i] += (tgt[i] - e.aim[i]) * k;
}

// Shots due `t` seconds into a stream of `total` seconds at `rate` per second: the first at t = 0.
const shotsDue = (t, rate, total) => Math.min(Math.ceil(total * rate - 1e-9), Math.floor(t * rate + 1e-9) + 1);

// Tobble, when he is up: the record the fight keeps in ctx.tobble, else null.
const tobbleUp = ctx => (ctx.tobble && !ctx.tobble.downed ? ctx.tobble : null);

// The Rep's popped head, written into out.
function poppedHead(e, ctx, out) {
  if (e.point) { const pp = popPos(e.point, (ctx.tuning || TUNING).associate.popShift); out[0] = pp[0]; out[2] = pp[1]; } else { out[0] = e.pos[0]; out[2] = e.pos[2]; }
  out[1] = 1.49;
  return out;
}
const seeFrom = [0, 0, 0];

// Whom a Rep shoots at when it starts a telegraph: Doc when its popped head sees Doc's chest and Doc is up; else Tobble when he is up and
// in sight; else Doc (the burst finds the cover, as before Tobble). A downed Doc is never a target: null when Tobble is not in sight.
function pickTarget(e, ctx) {
  const tb = tobbleUp(ctx), pl = ctx.player;
  if (!tb) return pl.downed ? null : 'player';
  poppedHead(e, ctx, seeFrom);
  if (!pl.downed && lineOfSight(ctx.boxes, seeFrom, pl.chest)) return 'player';
  if (lineOfSight(ctx.boxes, seeFrom, tb.chest)) return 'tobble';
  return pl.downed ? null : 'player';
}
// The burst or telegraph is over when its target can no longer be shot: Doc down, or Tobble down.
const targetGone = (e, ctx) => (e.target === 'tobble' ? !tobbleUp(ctx) : ctx.player.downed);
const targetPos = (e, ctx) => (e.target === 'tobble' && ctx.tobble ? ctx.tobble.pos : ctx.player.pos);

function cover(e, ctx, T, D, dt) {
  setPop(e, e.pop - step(dt, T.popTime), T);
  faceWall(e, T, dt);
  const pl = ctx.player;
  if (pl.downed && !tobbleUp(ctx)) return;
  if (!pl.downed) {
    e.pointT += dt;
    if (e.role !== 'hold') { seek(e, ctx, T); return; }
    e.relocT += dt;
    if (e.relocT >= T.relocateCheck) {
      e.relocT = 0;
      const cv = coverValue(e.point, evalChest(e, ctx), ctx.boxes, ctx.tuning || TUNING);
      if (!cv.protected || !cv.canShoot || dist2(e.point.pos, [pl.pos[0], pl.pos[2]]) < T.reserveRadius) { e.mustMove = true; seek(e, ctx, T); return; }
    }
    if (e.pointT >= T.relocateAfter) { e.mustMove = true; e.pointT = 0; seek(e, ctx, T); return; }
  }
  if (e.stateT < e.wait) return;
  if (e.wantSuppress === null) e.wantSuppress = ctx.rand() < T.suppressChance;
  if (e.bursts >= T.magBursts) { go(e, 'reload'); ctx.events.push({ type: 'bark', id: e.id, key: 'reload' }); return; }
  const target = pickTarget(e, ctx);
  if (target && ctx.tokens.request(e.id, ctx.now, ctx.tokenCount, D)) {
    e.target = target;
    go(e, 'telegraph'); e.shots = 0;
    springAim(e, ctx, T, dt, true);
    ctx.events.push({ type: 'telegraph', id: e.id });
    return;
  }
  if (e.wantSuppress && !pl.downed) { go(e, 'suppress'); e.shots = 0; }
}

function stopShooting(e, ctx, T, burstDone) {
  releaseToken(e, ctx);
  if (burstDone) e.bursts++;
  enterCover(e, ctx, T);
}

function telegraph(e, ctx, T, dt) {
  setPop(e, e.pop + step(dt, T.popTime), T);
  const tp = targetPos(e, ctx);
  face(e, tp[0], tp[2], T, dt);
  springAim(e, ctx, T, dt, false);
  if (targetGone(e, ctx) || !ctx.tokens.holds(e.id)) { stopShooting(e, ctx, T, false); return; }
  if (e.stateT >= T.popTime + T.telegraphTime - 1e-9) { go(e, 'burst'); e.shots = 0; }
}

function burst(e, ctx, T, dt) {
  const pl = ctx.player;
  setPop(e, e.pop + step(dt, T.popTime), T);
  const tp = targetPos(e, ctx);
  face(e, tp[0], tp[2], T, dt);
  springAim(e, ctx, T, dt, false);
  if (targetGone(e, ctx) || !ctx.tokens.holds(e.id)) { stopShooting(e, ctx, T, true); return; }
  const m = e.muzzle;
  m[0] = e.pos[0]; m[1] = e.pos[1] + T.muzzleUp; m[2] = e.pos[2];
  const due = shotsDue(e.stateT, T.rate, T.burstTime);
  const speed = e.target === 'tobble' ? 0 : Math.min(1, pl.speed / (ctx.tuning || TUNING).move.sprint);
  while (e.shots < due) {
    e.shots++;
    const dx = e.aim[0] - m[0], dy = e.aim[1] - m[1], dz = e.aim[2] - m[2], l = Math.hypot(dx, dy, dz) || 1;
    ctx.events.push({ type: 'enemyShot', id: e.id, from: [m[0], m[1], m[2]], dir: [dx / l, dy / l, dz / l], accurate: true, target: e.target, spread: T.spread + T.moveSpread * speed });
  }
  if (e.stateT >= T.burstTime - 1e-9) stopShooting(e, ctx, T, true);
}

function suppress(e, ctx, T, dt) {
  const pl = ctx.player;
  e.blind = clamp01(e.blind + step(dt, T.popTime));
  face(e, pl.pos[0], pl.pos[2], T, dt);
  if (pl.downed) { e.blind = 0; enterCover(e, ctx, T); return; }
  const t = e.stateT - T.popTime;
  if (t < 0 && e.blind < 1) return;
  const p = e.point, tt = Math.max(0, t);
  const m = e.muzzle;
  m[0] = e.pos[0]; m[2] = e.pos[2];
  m[1] = e.pos[1] + (p.kind === 'low' ? p.height + (ctx.tuning || TUNING).combat.blindLift : T.muzzleUp);
  const due = shotsDue(tt, T.suppressRate, T.suppressTime);
  while (e.shots < due) {
    e.shots++;
    let dx = pl.head[0] - m[0], dy = pl.head[1] - m[1], dz = pl.head[2] - m[2];
    const l = Math.hypot(dx, dy, dz) || 1; dx /= l; dy /= l; dz /= l;
    // Plane facing the shooter: u is sideways, v is up-ish. Aim at the head plus an offset of >= suppressMiss.
    let ux = dz, uz = -dx, ul = Math.hypot(ux, uz);
    if (ul < 1e-6) { ux = 1; uz = 0; ul = 1; }
    ux /= ul; uz /= ul;
    const vx = dy * uz, vy = dz * ux - dx * uz, vz = -dy * ux;
    const ang = 2 * Math.PI * ctx.rand(), len = T.suppressMiss * (1 + 0.5 * ctx.rand());
    const ca = Math.cos(ang) * len, sa = Math.sin(ang) * len;
    const tx = pl.head[0] + ux * ca + vx * sa, ty = pl.head[1] + vy * sa, tz = pl.head[2] + uz * ca + vz * sa;
    const ex = tx - m[0], ey = ty - m[1], ez = tz - m[2], el = Math.hypot(ex, ey, ez) || 1;
    ctx.events.push({ type: 'enemyShot', id: e.id, from: [m[0], m[1], m[2]], dir: [ex / el, ey / el, ez / el], accurate: false, spread: T.suppressSpread });
  }
  if (t >= T.suppressTime - 1e-9) { e.blind = 0; enterCover(e, ctx, T); }
}

// ---- Reactions: revive, kneel, crawl, stagger, dive, spawn rise -------------------------------------------------------

function helpTarget(e, ctx) {
  const t = (ctx.others || []).find(o => o.id === e.helping);
  return t && t.alive && t.state === 'downed' && t.helper === e.id ? t : null;
}

// Ends a helper's revive: the role goes back to hold and the downed Rep may be given another helper.
function cancelRevive(e, ctx) {
  const t = (ctx.others || []).find(o => o.id === e.helping);
  if (t && t.helper === e.id) t.helper = null;
  e.helping = null; e.role = 'hold';
}

// The director's call: helper e runs to the downed Rep and kneels. It gives up its token, its point and its pop.
export function startRevive(e, target, ctx) {
  const T = (ctx.tuning || TUNING).associate;
  releaseToken(e, ctx);
  setPop(e, 0, T); e.blind = 0;
  if (e.point && ctx.reserved.get(e.point.index) === e.id) ctx.reserved.delete(e.point.index);
  e.point = null; e.role = 'revive'; e.helping = target.id; target.helper = e.id; e.mustMove = false;
  const dx = e.pos[0] - target.pos[0], dz = e.pos[2] - target.pos[2], d = Math.hypot(dx, dz) || 1;
  if (d <= T.kneelReach) { go(e, 'kneel'); return; }
  const goal = [target.pos[0] + dx / d * 0.7, target.pos[2] + dz / d * 0.7];
  e.path = findPath(ctx.graph, ctx.boxes, [e.pos[0], e.pos[2]], goal, T.radius) || [goal];
  e.pathI = 0; e.stuckT = 0; e.stuckRef[0] = e.pos[0]; e.stuckRef[1] = e.pos[2];
  go(e, 'run');
}

function kneel(e, ctx, T, dt) {
  const t = helpTarget(e, ctx);
  if (!t) { cancelRevive(e, ctx); seek(e, ctx, T); return; }
  face(e, t.pos[0], t.pos[2], T, dt);
  if (e.stateT < T.reviveTime - 1e-9) return;
  t.helper = null; t.health = Math.max(1, T.reviveHealth * T.health); t.role = 'hold'; t.mustMove = false; t.bursts = 0;
  go(t, 'seek');
  ctx.events.push({ type: 'cloneRevive', id: e.id, target: t.id });
  e.helping = null; e.role = 'hold';
  seek(e, ctx, T);
}

// A downed Rep lies still while someone kneels to it. Alone it crawls toward the nearest calm Rep, else straight away from the player.
function crawl(e, ctx, T, dt) {
  if (e.stateT >= T.bleedTime - 1e-9) { e.health = 0; kill(e, ctx, 'bleed'); return; }
  if (e.helper) return;
  let tx = 0, tz = 0, best = Infinity;
  for (const o of ctx.others || []) {
    if (o === e || !o.alive || !CALM_REP.has(o.state)) continue;
    const d = distXZ(e.pos, o.pos);
    if (d < best) { best = d; tx = o.pos[0] - e.pos[0]; tz = o.pos[2] - e.pos[2]; }
  }
  if (best === Infinity) { tx = e.pos[0] - ctx.player.pos[0]; tz = e.pos[2] - ctx.player.pos[2]; best = Math.hypot(tx, tz); }
  else if (best < 1.2) return;   // it has reached company
  if (best < 1e-6) { tx = 1; tz = 0; best = 1; }
  e.yaw = turnToward(e.yaw, Math.atan2(tx, tz), T.turnRate * dt);
  const want = T.downedCrawl * dt;
  const r = moveCapsule(ctx.boxes, e.pos, [tx / best * want, 0, tz / best * want], T.radius, T.height);
  e.pos[0] = r.pos[0]; e.pos[2] = r.pos[2];
}

// After a stagger or a dive the Rep goes back to its point when it is on it, else it looks for one.
function afterStagger(e, ctx, T) {
  const own = e.point && ctx.reserved.get(e.point.index) === e.id;
  if (own && e.pop <= 1e-6 && dist2(e.point.pos, [e.pos[0], e.pos[2]]) <= 0.3) enterCover(e, ctx, T); else seek(e, ctx, T);
}

export function staggerAssociate(e, ctx) {
  if (e.kind === 'trainer') return staggerTrainer(e);
  if (e.kind === 'boss') return false;   // too big to stagger
  if (!e.alive || LOCKED.has(e.state) || e.state === 'downed') return false;
  if (e.role === 'revive') cancelRevive(e, ctx);
  releaseToken(e, ctx);
  e.blind = 0; go(e, 'stagger');
  return true;
}

// Starts a dive away from `from` ([x, ?, z]): a wait of diveReaction, then diveDistance in diveTime. It gives up token and point.
export function diveAssociate(e, from, ctx) {
  if (e.kind === 'trainer') return diveTrainer(e, from);
  if (e.kind === 'boss') return false;
  if (!e.alive || LOCKED.has(e.state) || e.state === 'downed' || e.state === 'dive') return false;
  if (e.role === 'revive') cancelRevive(e, ctx);
  releaseToken(e, ctx);
  setPop(e, 0, (ctx.tuning || TUNING).associate); e.blind = 0;
  if (e.point && ctx.reserved.get(e.point.index) === e.id) ctx.reserved.delete(e.point.index);
  e.divePoint = e.point; e.point = null; e.role = 'hold'; e.path = []; e.pathI = 0;
  let dx = e.pos[0] - from[0], dz = e.pos[2] - from[2];
  const d = Math.hypot(dx, dz);
  if (d < 1e-6) { dx = Math.sin(e.yaw); dz = Math.cos(e.yaw); } else { dx /= d; dz /= d; }
  e.diveDir[0] = dx; e.diveDir[1] = dz; e.yaw = Math.atan2(dx, dz);
  go(e, 'dive');
  return true;
}

function dive(e, ctx, T, dt) {
  const dur = Math.max(T.diveTime, 1e-3);
  const from = Math.max(e.stateT - dt, T.diveReaction), to = Math.min(e.stateT, T.diveReaction + dur);
  if (to > from) {
    const move = T.diveDistance * (to - from) / dur;
    const r = moveCapsule(ctx.boxes, e.pos, [e.diveDir[0] * move, 0, e.diveDir[1] * move], T.radius, T.height);
    e.pos[0] = r.pos[0]; e.pos[2] = r.pos[2];
  }
  if (e.stateT >= T.diveReaction + dur - 1e-9) {
    // Back on its feet it looks for a new spot: the point it left is no longer reserved but still counts as the one to move off.
    e.point = e.divePoint; e.divePoint = null; e.mustMove = true;
    seek(e, ctx, T);
  }
}

// Doc's cutter or stomp takes hold of e: it freezes, shoots nothing and gives up token, point and helper (a revive on it is cancelled).
export function executeAssociate(e, ctx) {
  if (e.kind === 'trainer') return executeTrainer(e);
  if (e.kind === 'boss') return false;   // Cheat Day does not take the Overlord
  if (!e.alive || LOCKED.has(e.state) || e.state === 'dive') return false;
  if (e.role === 'revive') cancelRevive(e, ctx);
  releaseToken(e, ctx);
  setPop(e, 0, (ctx.tuning || TUNING).associate); e.blind = 0;
  if (e.point && ctx.reserved.get(e.point.index) === e.id) ctx.reserved.delete(e.point.index);
  e.wasDowned = e.state === 'downed';
  e.bleedT = e.wasDowned ? e.stateT : 0;   // a stomp does not reset the bleed-out clock
  e.point = null; e.role = 'hold'; e.helper = null; e.mustMove = false;
  go(e, 'executed');
  return true;
}

// Lets go of an executed Rep (Doc was downed mid-execution): a Rep that was downed lies down again, any other flinches and then seeks.
export function releaseExecuted(e) {
  if (e.kind === 'trainer') return releaseTrainer(e);
  if (!e.alive || e.state !== 'executed') return false;
  go(e, e.wasDowned ? 'downed' : 'flinch');
  if (e.wasDowned) e.stateT = e.bleedT;
  e.wasDowned = false; e.bleedT = 0;
  return true;
}

// The bite completes: an executed Rep dies (kind 'execute' from the cutter or the stomp). 'kill', or null when it was not held.
export function finishAssociate(e, ctx, kind = 'execute') {
  if (e.kind === 'trainer') return finishTrainer(e, ctx, kind);
  if (e.kind === 'boss') return null;
  if (!e.alive || e.state !== 'executed') return null;
  e.health = 0;
  return kill(e, ctx, kind);
}

function kill(e, ctx, kind) {
  e.alive = false;
  releaseToken(e, ctx);
  if (e.role === 'revive') cancelRevive(e, ctx);
  e.helper = null;
  if (e.point && ctx.reserved.get(e.point.index) === e.id) ctx.reserved.delete(e.point.index);
  e.pop = 0; e.blind = 0; go(e, 'dead');
  ctx.events.push({ type: 'death', id: e.id, pos: [e.pos[0], e.pos[1], e.pos[2]], kind });
  return 'kill';
}

// The Rep goes down instead of dying: still alive at 1 hp, off its point and its token, lying still for bleedTime.
export function downAssociate(e, ctx) {
  if (e.kind === 'trainer' || e.kind === 'boss') return null;   // a Trainer or the Overlord never downs
  if (!e.alive || LOCKED.has(e.state) || e.state === 'downed') return null;
  releaseToken(e, ctx);
  if (e.role === 'revive') cancelRevive(e, ctx);
  if (e.point && ctx.reserved.get(e.point.index) === e.id) ctx.reserved.delete(e.point.index);
  e.point = null; e.health = 1; e.pop = 0; e.blind = 0; e.role = 'hold'; e.helper = null; e.mustMove = false;
  go(e, 'downed');
  ctx.events.push({ type: 'down', id: e.id, pos: [e.pos[0], e.pos[1], e.pos[2]] });
  ctx.events.push({ type: 'bark', id: e.id, key: 'cloneDown' });
  return 'down';
}

export function updateAssociate(e, ctx, dt) {
  if (!e.alive) return;
  if (!(dt > 0) || !Number.isFinite(dt)) dt = 0;
  dt = Math.min(dt, MAX_DT);
  const T = (ctx.tuning || TUNING).associate, D = ctx.director || TUNING.director;
  e.prevPos[0] = e.pos[0]; e.prevPos[1] = e.pos[1]; e.prevPos[2] = e.pos[2]; e.prevYaw = e.yaw;
  e.stateT += dt;
  if (e.kind === 'trainer') { updateTrainer(e, ctx, dt); return; }
  if (e.kind === 'boss') { updateBoss(e, ctx, dt); return; }
  switch (e.state) {
    case 'idle': if (ctx.started) seek(e, ctx, T); break;
    case 'seek': seek(e, ctx, T); break;
    case 'run': run(e, ctx, T, dt); break;
    case 'cover': cover(e, ctx, T, D, dt); break;
    case 'telegraph': telegraph(e, ctx, T, dt); break;
    case 'burst': burst(e, ctx, T, dt); break;
    case 'suppress': suppress(e, ctx, T, dt); break;
    case 'reload':
      setPop(e, e.pop - step(dt, T.popTime), T); faceWall(e, T, dt);
      if (e.stateT >= T.reloadTime) { e.bursts = 0; enterCover(e, ctx, T); }
      break;
    case 'flinch':
      setPop(e, e.pop - step(dt, T.popTime), T); e.blind = clamp01(e.blind - step(dt, T.popTime));
      if (e.stateT >= T.flinchTime) { if (e.point) enterCover(e, ctx, T); else seek(e, ctx, T); }
      break;
    case 'stagger':
      setPop(e, e.pop - step(dt, T.popTime), T);
      if (e.stateT >= T.staggerTime - 1e-9) afterStagger(e, ctx, T);
      break;
    case 'dive': dive(e, ctx, T, dt); break;
    case 'kneel': kneel(e, ctx, T, dt); break;
    case 'downed': crawl(e, ctx, T, dt); break;
    case 'spawn': if (e.stateT >= (ctx.tuning || TUNING).pad.riseTime - 1e-9) seek(e, ctx, T); break;
    default: break;   // 'executed', 'unused' and 'dead' hold still
  }
}

// 'hit' | 'down' | 'kill' | null. kind is 'body' | 'head' | 'bash' | 'blast' | 'execute' | 'tobble' | 'bleed'.
// A killing body hit from Doc or any Tobble shot goes down instead with probability downChance. Any hit on a downed Rep kills it.
// A hit while shooting flinches and gives the token back; a hurt helper flinches and its revive is cancelled. A held (executed) or empty slot ignores hits.
export function hurtAssociate(e, amount, ctx, kind = 'body') {
  if (e.kind === 'trainer') return hurtTrainer(e, amount, ctx, kind);
  if (e.kind === 'boss') return hurtBoss(e, amount, ctx, kind);
  if (!e.alive || !(amount > 0) || e.state === 'executed' || e.state === 'unused') return null;
  if (e.state === 'downed') { e.health = 0; return kill(e, ctx, kind); }
  e.health -= amount;
  if (e.health <= 0) {
    if ((kind === 'body' || kind === 'tobble') && ctx.rand() < (ctx.tuning || TUNING).associate.downChance) return downAssociate(e, ctx);
    e.health = 0;
    return kill(e, ctx, kind);
  }
  if (e.role === 'revive') { cancelRevive(e, ctx); releaseToken(e, ctx); go(e, 'flinch'); return 'hit'; }
  if (SHOOTING.has(e.state)) { releaseToken(e, ctx); go(e, 'flinch'); e.blind = Math.min(e.blind, 1); }
  return 'hit';
}

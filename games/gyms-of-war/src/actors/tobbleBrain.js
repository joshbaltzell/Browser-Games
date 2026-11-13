// Tobble's brain: he follows Doc, takes cover nearby, shoots a quarter of Doc's damage, steps out of Doc's line of fire,
// kneels to revive Doc when it is safe enough, and lies down (crawling, complaining) when he is hit to zero.
// Pure logic: no WebGL, no DOM. He reads Doc only through ctx.player and ctx.aim, and Reps through ctx.enemies.
// Randomness comes only from ctx.rand. Every number is read from tuning.tobble at the moment it is used.
//
// ctx is the fight's ctx (boxes, points, graph, reserved, player, now, rand, events, tuning, started) plus:
//   aim { lens, dir, active } | undefined, enemies (the Reps), playerDowned, hurtRep(e, amount) (a hit on a Rep) and
//   reviveDoc() -> boolean (stands Doc up; false when Doc is not down).
// Events pushed on ctx.events: tobbleShot { from, to, hit: Rep id | null }, tobbleKneel, tobbleDown, tobbleUp,
//   bark { id: 'tobble', key, force? }.
import { TUNING } from '../tuning.js';
import { castRay, spreadDir } from '../combat/hits.js';
import { HIT_SHAPES } from '../combat/targets.js';
import { moveCapsule } from '../world/collide.js';
import { findPath } from '../world/waypoints.js';
import { lineOfSight, popPos } from '../world/coverPoints.js';
import { turnToward } from './moveMath.js';

const MAX_DT = 0.25;
const HEAD_Y = 1.49;                              // a popped Rep's head, as coverValue sees it
const ID = 'tobble';
const LIVE_REP = new Set(['idle', 'seek', 'run', 'cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch', 'stagger', 'dive', 'kneel', 'spawn', 'windup', 'swing', 'recover']);
const dist2 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const clamp01 = v => Math.max(0, Math.min(1, v));
const cfgOf = (t, ctx) => (ctx && ctx.tuning ? ctx.tuning.tobble : t.cfg);

// Shots due `t` seconds into a stream of `total` seconds at `rate` per second: the first at t = 0.
const shotsDue = (t, rate, total) => Math.min(Math.ceil(total * rate - 1e-9), Math.floor(t * rate + 1e-9) + 1);

export function createTobble({ pos, yaw = 0 }, tuning = TUNING.tobble) {
  const t = {
    id: ID, cfg: tuning, start: [pos[0], pos[1], pos[2]], startYaw: yaw,
    pos: [0, 0, 0], prevPos: [0, 0, 0], yaw: 0, prevYaw: 0, state: 'idle', stateT: 0, hp: 0, alive: true, downed: false,
    point: null, path: [], pathI: 0, pop: 0, target: null, reviveT: 0, threatT: 0, lofT: 0,
    shapes: { head: { c: [0, 0, 0], r: HIT_SHAPES.head.r }, body: { a: [0, 0, 0], b: [0, 0, 0], r: HIT_SHAPES.body.r } },
    aim: [0, 0, 0],
    // Working data.
    chest: [0, 0, 0], head: [0, 0, 0], muzzle: [0, 0, 0], goal: [0, 0], wait: 0, shots: 0, sinceHit: 0, relocT: 0, complainT: 0,
    stuckT: 0, stuckRef: [0, 0], stuckCount: 0, kneeling: false, revGo: false, side: [0, 0], sideLeft: 0, scratch: [0, 0, 0], speed: 0,
  };
  return resetTobble(t);
}

export function resetTobble(t) {
  t.pos[0] = t.start[0]; t.pos[1] = t.start[1]; t.pos[2] = t.start[2];
  t.prevPos[0] = t.start[0]; t.prevPos[1] = t.start[1]; t.prevPos[2] = t.start[2];
  t.yaw = t.prevYaw = t.startYaw;
  t.state = 'idle'; t.stateT = 0; t.hp = t.cfg.health; t.alive = true; t.downed = false;
  t.point = null; t.path = []; t.pathI = 0; t.pop = 0; t.target = null; t.reviveT = 0; t.threatT = 0; t.lofT = 0;
  t.wait = 0; t.shots = 0; t.sinceHit = 0; t.relocT = 0; t.complainT = 0; t.stuckT = 0; t.stuckCount = 0;
  t.kneeling = false; t.revGo = false; t.sideLeft = 0; t.speed = 0;
  t.aim[0] = t.aim[1] = t.aim[2] = 0;
  tobbleShapes(t);
  return t;
}

// The hit shapes the Reps' shots resolve against (the Associate's, times scale): crouched behind low cover (head top well under the wall),
// standing otherwise, lifted by popLift as he pops, and lying along his facing when downed. Also sets t.chest and t.head.
export function tobbleShapes(t, combat = TUNING.combat) {
  const T = t.cfg, sc = T.scale, [x, y, z] = t.pos, s = t.shapes;
  const pad = combat.hitPad;
  s.head.c[0] = x; s.head.c[2] = z; s.body.a[0] = x; s.body.a[2] = z; s.body.b[0] = x; s.body.b[2] = z;
  if (t.downed) {
    const fx = Math.sin(t.yaw), fz = Math.cos(t.yaw);
    s.body.r = 0.25 * sc; s.head.r = HIT_SHAPES.head.r * sc;
    s.body.a[0] = x - fx * 0.2 * sc; s.body.a[1] = y + 0.25 * sc; s.body.a[2] = z - fz * 0.2 * sc;
    s.body.b[0] = x + fx * 0.6 * sc; s.body.b[1] = y + 0.25 * sc; s.body.b[2] = z + fz * 0.6 * sc;
    s.head.c[0] = s.body.b[0]; s.head.c[1] = y + 0.25 * sc; s.head.c[2] = s.body.b[2];
    t.chest[0] = x; t.chest[1] = y + 0.25 * sc; t.chest[2] = z;
  } else if (t.point && t.point.kind === 'low' && t.pop < 0.5) {
    s.head.r = (HIT_SHAPES.head.r + pad) * sc; s.body.r = (HIT_SHAPES.body.r + pad) * sc;
    s.head.c[1] = y + (combat.crouchHead - pad) * sc; s.body.a[1] = y + 0.1 * sc; s.body.b[1] = y + combat.crouchBodyTop * sc;
    t.chest[0] = x; t.chest[1] = y + combat.crouchBodyTop * sc * 0.9; t.chest[2] = z;
  } else {
    const lift = t.point ? T.popLift * clamp01(t.pop) : 0;
    s.head.r = (HIT_SHAPES.head.r + pad) * sc; s.body.r = (HIT_SHAPES.body.r + pad) * sc;
    s.head.c[1] = y + HIT_SHAPES.head.cy * sc + lift; s.body.a[1] = y + HIT_SHAPES.body.ay * sc + lift; s.body.b[1] = y + HIT_SHAPES.body.by * sc + lift;
    t.chest[0] = x; t.chest[1] = y + T.height * (1.2 / 1.8) + lift; t.chest[2] = z;
  }
  t.head[0] = s.head.c[0]; t.head[1] = s.head.c[1]; t.head[2] = s.head.c[2];
  return s;
}

function go(t, state) { t.state = state; t.stateT = 0; }
const bark = (ctx, key, force = false) => ctx.events.push(force ? { type: 'bark', id: ID, key, force } : { type: 'bark', id: ID, key });

function face(t, x, z, T, dt) {
  const dx = x - t.pos[0], dz = z - t.pos[2];
  if (Math.hypot(dx, dz) > 1e-6) t.yaw = turnToward(t.yaw, Math.atan2(dx, dz), T.turnRate * dt);
}
function faceWall(t, T, dt) {
  const n = t.point.normal;
  t.yaw = turnToward(t.yaw, Math.atan2(-n[0], -n[1]), T.turnRate * dt);
}

// Pop is 0 (tucked) to 1 (out). Behind tall cover the popped position slides popShift past the open end, as the Reps do.
function setPop(t, v, ctx) {
  v = clamp01(v);
  const p = t.point;
  if (p && p.kind === 'tall' && v !== t.pop) {
    const s = p.end * ctx.tuning.associate.popShift * (v - t.pop);
    t.pos[0] += p.tangent[0] * s; t.pos[2] += p.tangent[1] * s;
  }
  t.pop = v;
}
const popStep = (dt, time) => (time > 0 ? dt / time : 1);

function freePoint(t, ctx) {
  if (t.point && ctx.reserved.get(t.point.index) === ID) ctx.reserved.delete(t.point.index);
  t.point = null;
}

// ---- Line of fire ---------------------------------------------------------------------------------------------------
// Horizontal distance from [x, z] to Doc's aim ray (lens to lofRange, starting 0.5 m out), or Infinity without an aim or a horizontal ray.
function laneDistance(ctx, T, x, z) {
  const a = ctx.aim;
  if (!a) return Infinity;
  const dx = a.dir[0], dz = a.dir[2], l = Math.hypot(dx, dz);
  if (l < 1e-6) return Infinity;
  const ux = dx / l, uz = dz / l, rx = x - a.lens[0], rz = z - a.lens[2];
  const s = Math.max(0.5, Math.min(T.lofRange, rx * ux + rz * uz));
  return Math.hypot(rx - ux * s, rz - uz * s);
}

function beginSidestep(t, ctx, T) {
  const a = ctx.aim, l = Math.hypot(a.dir[0], a.dir[2]), ux = a.dir[0] / l, uz = a.dir[2] / l;
  const rx = t.pos[0] - a.lens[0], rz = t.pos[2] - a.lens[2];
  const sgn = (-uz * rx + ux * rz) >= 0 ? 1 : -1;   // which side of the ray he is on
  t.side[0] = -uz * sgn; t.side[1] = ux * sgn; t.sideLeft = T.sidestepDist;
  freePoint(t, ctx); setPop(t, 0, ctx); t.target = null; t.lofT = 0;
  go(t, 'sidestep');
}

// ---- Seeing Reps ------------------------------------------------------------------------------------------------------
const shootable = e => e.alive && LIVE_REP.has(e.state) && e.state !== 'executed';
const downedRep = e => e.state === 'downed';

// Where Tobble's muzzle is when popped at his point (or standing where he is).
function poppedMuzzle(t, ctx, T, out) {
  if (t.point) {
    popPos(t.point, ctx.tuning.associate.popShift, ppS);
    out[0] = ppS[0]; out[2] = ppS[1];
  } else { out[0] = t.pos[0]; out[2] = t.pos[2]; }
  out[1] = t.pos[1] + T.muzzleUp + (t.point ? T.popLift : 0);
  return out;
}

function bodyMid(e, out) {
  const b = e.shapes.body;
  out[0] = (b.a[0] + b.b[0]) / 2; out[1] = (b.a[1] + b.b[1]) / 2; out[2] = (b.a[2] + b.b[2]) / 2;
  return out;
}

const mid = [0, 0, 0], from = [0, 0, 0], ppS = [0, 0];
// A Rep's popped head (at its point, else where it stands), written into out.
function headOfRep(e, ctx, out) {
  if (e.point) { popPos(e.point, ctx.tuning.associate.popShift, ppS); out[0] = ppS[0]; out[2] = ppS[1]; } else { out[0] = e.pos[0]; out[2] = e.pos[2]; }
  out[1] = HEAD_Y;
  return out;
}
// The nearest standing Rep within range that Tobble sees from his popped muzzle, else null. Downed Reps are not targets.
function findTarget(t, ctx, T) {
  poppedMuzzle(t, ctx, T, from);
  let best = null, bd = Infinity;
  for (const e of ctx.enemies) {
    if (!shootable(e) || downedRep(e) || e.state === 'spawn') continue;
    const d = Math.hypot(e.pos[0] - t.pos[0], e.pos[2] - t.pos[2]);
    if (d >= bd || d > T.range) continue;
    if (!lineOfSight(ctx.boxes, from, bodyMid(e, mid))) continue;
    bd = d; best = e;
  }
  return best;
}

// ---- Choosing a spot --------------------------------------------------------------------------------------------------
function nearestRep(ctx, x, z) {
  let best = null, bd = Infinity;
  for (const e of ctx.enemies) {
    if (!shootable(e) || downedRep(e)) continue;
    const d = Math.hypot(e.pos[0] - x, e.pos[2] - z);
    if (d < bd) { bd = d; best = e; }
  }
  return best;
}

const repHead = [0, 0, 0], tucked = [0, 0, 0], popped = [0, 0, 0];
// The best cover point, or null. It sits followMin..followMax from Doc (and past personalSpace), is unreserved, is out of Doc's aim
// ray, clear of the Reps, and hides his tucked head from the nearest Rep's popped head. A point he can shoot from scores higher.
function bestCover(t, ctx, T) {
  const tun = ctx.tuning, A = tun.associate, pl = ctx.player.pos, plp = [pl[0], pl[2]], here = [t.pos[0], t.pos[2]];
  const rep = nearestRep(ctx, t.pos[0], t.pos[2]);
  const others = [];
  for (const [idx, id] of ctx.reserved) if (id !== ID) others.push(ctx.points[idx].pos);
  const ideal = (T.followMin + T.followMax) / 2;
  let best = null, bs = -Infinity;
  for (const p of ctx.points) {
    const r = ctx.reserved.get(p.index);
    if (r !== undefined && r !== ID) continue;
    const dd = dist2(p.pos, plp);
    if (dd < T.followMin || dd > T.followMax || dd <= T.personalSpace) continue;
    if (laneDistance(ctx, T, p.pos[0], p.pos[1]) < T.lofClear) continue;
    let near = false;
    for (const o of others) if (dist2(o, p.pos) < A.reserveRadius) { near = true; break; }
    if (near) continue;
    let clear = true;
    for (const e of ctx.enemies) if (shootable(e) && dist2([e.pos[0], e.pos[2]], p.pos) < A.radius + T.radius + 0.2) { clear = false; break; }
    if (!clear) continue;
    let canShoot = false;
    if (rep) {
      headOfRep(rep, ctx, repHead);
      tucked[0] = p.pos[0]; tucked[1] = p.kind === 'low' ? tun.combat.crouchHead * T.scale : T.height; tucked[2] = p.pos[1];
      if (lineOfSight(ctx.boxes, tucked, repHead)) continue;       // the nearest Rep could see his head
      popPos(p, A.popShift, ppS);
      popped[0] = ppS[0]; popped[1] = T.muzzleUp + T.popLift; popped[2] = ppS[1];
      canShoot = lineOfSight(ctx.boxes, popped, bodyMid(rep, mid));
    }
    const score = -dist2(here, p.pos) - 0.5 * Math.abs(dd - ideal) + (canShoot ? 8 : 0);
    if (score > bs + 1e-9) { bs = score; best = p; }
  }
  return best;
}

// Two metres behind and to the right of Doc (Doc's aim heading, else +z), as far as a wall allows.
function openSpot(t, ctx, T) {
  const a = ctx.aim, pl = ctx.player.pos;
  let fx = 0, fz = 1;
  if (a) { const l = Math.hypot(a.dir[0], a.dir[2]); if (l > 1e-6) { fx = a.dir[0] / l; fz = a.dir[2] / l; } }
  const k = 2 * Math.SQRT1_2, dx = (-fx + -fz) * k, dz = (-fz + fx) * k;   // back (-f) plus right (-fz, fx)
  const r = moveCapsule(ctx.boxes, [pl[0], t.pos[1], pl[2]], [dx, 0, dz], T.radius, T.height);
  return [r.pos[0], r.pos[2]];
}

// ---- Moving -----------------------------------------------------------------------------------------------------------
function setPath(t, ctx, T, goal) {
  t.goal[0] = goal[0]; t.goal[1] = goal[1];
  t.path = t.stuckCount >= 3 ? [[goal[0], goal[1]]] : (findPath(ctx.graph, ctx.boxes, [t.pos[0], t.pos[2]], goal, T.radius) || [[goal[0], goal[1]]]);
  t.pathI = 0; t.stuckT = 0; t.stuckRef[0] = t.pos[0]; t.stuckRef[1] = t.pos[2];
}

// Walks the path at speed. 'arrived' | 'moving' | 'stuck'.
function walk(t, ctx, T, dt, speed) {
  let remaining = speed * dt;
  for (let guard = 0; guard < t.path.length + 2; guard++) {
    const wp = t.path[t.pathI], last = t.pathI === t.path.length - 1;
    const dx = wp[0] - t.pos[0], dz = wp[1] - t.pos[2], d = Math.hypot(dx, dz);
    if (d <= T.arriveDist) {
      if (last) return 'arrived';
      t.pathI++; continue;
    }
    face(t, wp[0], wp[1], T, dt);
    const want = Math.min(remaining, d);
    if (want <= 1e-9) break;
    const r = moveCapsule(ctx.boxes, t.pos, [dx / d * want, 0, dz / d * want], T.radius, T.height);
    const moved = Math.hypot(r.pos[0] - t.pos[0], r.pos[2] - t.pos[2]);
    t.pos[0] = r.pos[0]; t.pos[2] = r.pos[2];
    remaining -= moved;
    if (moved < want * 0.5) break;
  }
  t.stuckT += dt;
  if (t.stuckT >= 1.0) {
    const moved = Math.hypot(t.pos[0] - t.stuckRef[0], t.pos[2] - t.stuckRef[1]);
    if (moved < 0.05) return 'stuck';
    t.stuckCount = 0; t.stuckT = 0; t.stuckRef[0] = t.pos[0]; t.stuckRef[1] = t.pos[2];
  }
  return 'moving';
}

// Picks where to be (a cover point once the fight is on, else Doc's open side), reserves it and starts running.
function startFollow(t, ctx, T) {
  const spot = ctx.started ? bestCover(t, ctx, T) : null;
  if (t.point && (!spot || spot.index !== t.point.index)) freePoint(t, ctx);
  setPop(t, 0, ctx);
  let goal;
  if (spot) { t.point = spot; ctx.reserved.set(spot.index, ID); goal = spot.pos; } else goal = openSpot(t, ctx, T);
  t.shots = 0; t.target = null;
  if (Math.hypot(goal[0] - t.pos[0], goal[1] - t.pos[2]) <= 0.15) { arrive(t, ctx, T); return; }
  setPath(t, ctx, T, goal);
  go(t, 'follow');
}

function arrive(t, ctx, T) {
  t.stuckCount = 0;
  if (t.point) { t.pos[0] = t.point.pos[0]; t.pos[2] = t.point.pos[1]; }
  if (!ctx.started && !t.point) { go(t, 'idle'); return; }
  enterCover(t, ctx, T);
}

function enterCover(t, ctx, T) {
  go(t, 'cover');
  t.target = null; t.relocT = 0;
  t.wait = T.coverWaitMin + (T.coverWaitMax - T.coverWaitMin) * ctx.rand();
}

// ---- States -----------------------------------------------------------------------------------------------------------
function idle(t, ctx, T, dt) {
  const pl = ctx.player.pos;
  if (ctx.started || Math.hypot(pl[0] - t.pos[0], pl[2] - t.pos[2]) > T.followMax) { startFollow(t, ctx, T); return; }
  face(t, pl[0], pl[2], T, dt);
}

function follow(t, ctx, T, dt) {
  const r = walk(t, ctx, T, dt, T.runSpeed);
  if (r === 'arrived') arrive(t, ctx, T);
  else if (r === 'stuck') { t.stuckCount++; freePoint(t, ctx); startFollow(t, ctx, T); }
}

function cover(t, ctx, T, dt) {
  setPop(t, t.pop - popStep(dt, T.popTime), ctx);
  const pl = ctx.player.pos;
  if (t.point) faceWall(t, T, dt); else face(t, pl[0], pl[2], T, dt);
  t.relocT += dt;
  if (t.relocT >= T.recheckTime) {
    t.relocT = 0;
    const far = Math.hypot(pl[0] - t.pos[0], pl[2] - t.pos[2]) > T.followMax;
    if (t.point) {
      const home = t.point.pos, bad = Math.hypot(t.pos[0] - home[0], t.pos[2] - home[1]) > 0.3;
      const rep = nearestRep(ctx, t.pos[0], t.pos[2]);
      let exposed = false;
      if (rep) {
        headOfRep(rep, ctx, repHead);
        const k = t.point.kind === 'low' ? ctx.tuning.combat.crouchHead * T.scale : T.height;
        tucked[0] = home[0]; tucked[1] = k; tucked[2] = home[1];
        exposed = lineOfSight(ctx.boxes, tucked, repHead);
      }
      if (far || bad || exposed) { startFollow(t, ctx, T); return; }
    } else if (far || (ctx.started && bestCover(t, ctx, T))) { startFollow(t, ctx, T); return; }
  }
  if (!ctx.started || t.stateT < t.wait) return;
  const target = findTarget(t, ctx, T);
  if (target) { t.target = target; t.shots = 0; go(t, 'shoot'); }
}

function shoot(t, ctx, T, dt) {
  setPop(t, t.pop + popStep(dt, T.popTime), ctx);
  let tg = t.target;
  if (!tg || !shootable(tg) || downedRep(tg) || !lineOfSight(ctx.boxes, poppedMuzzleNow(t, T), bodyMid(tg, mid))) tg = t.target = findTarget(t, ctx, T);
  if (!tg) { enterCover(t, ctx, T); return; }
  face(t, tg.pos[0], tg.pos[2], T, dt);
  if (t.stateT < T.popTime - 1e-9) return;
  const m = t.muzzle;
  m[0] = t.pos[0]; m[1] = t.pos[1] + T.muzzleUp + (t.point ? T.popLift : 0) * clamp01(t.pop); m[2] = t.pos[2];
  const due = shotsDue(t.stateT - T.popTime, T.rate, T.burstTime);
  while (t.shots < due) {
    t.shots++;
    bodyMid(tg, mid);
    const dx = mid[0] - m[0], dy = mid[1] - m[1], dz = mid[2] - m[2], l = Math.hypot(dx, dy, dz) || 1;
    const dir = spreadDir([dx / l, dy / l, dz / l], T.spread, ctx.rand, t.scratch);
    const r = castRay(m, dir, T.range, ctx.boxes, ctx.enemies);
    const hitRep = r.target && (r.kind === 'head' || r.kind === 'body') ? r.target : null;
    ctx.events.push({ type: 'tobbleShot', from: [m[0], m[1], m[2]], to: r.point, hit: hitRep ? hitRep.id : null });
    if (hitRep && ctx.hurtRep) ctx.hurtRep(hitRep, T.damage);
    if (!shootable(tg) || downedRep(tg)) break;
  }
  if (!shootable(tg) || downedRep(tg)) t.target = null;
  if (t.stateT >= T.popTime + T.burstTime - 1e-9) enterCover(t, ctx, T);
}

const muzzleNow = [0, 0, 0];
function poppedMuzzleNow(t, T) {
  muzzleNow[0] = t.pos[0]; muzzleNow[1] = t.pos[1] + T.muzzleUp + (t.point ? T.popLift : 0) * clamp01(t.pop); muzzleNow[2] = t.pos[2];
  return muzzleNow;
}

function sidestep(t, ctx, T, dt) {
  const want = Math.min(T.runSpeed * dt, t.sideLeft);
  if (want > 0) {
    const r = moveCapsule(ctx.boxes, t.pos, [t.side[0] * want, 0, t.side[1] * want], T.radius, T.height);
    const moved = Math.hypot(r.pos[0] - t.pos[0], r.pos[2] - t.pos[2]);
    t.pos[0] = r.pos[0]; t.pos[2] = r.pos[2];
    t.sideLeft -= moved < want * 0.5 ? t.sideLeft : moved;   // a wall ends it
  }
  if (t.sideLeft <= 1e-6) startFollow(t, ctx, T);
}

// Doc's threats: the live Reps with a clear line from a popped head to Doc's body on the floor.
function threats(ctx) {
  const pl = ctx.player.pos;
  let n = 0;
  mid[0] = pl[0]; mid[1] = 0.4; mid[2] = pl[2];
  for (const e of ctx.enemies) {
    if (!shootable(e) || downedRep(e) || e.state === 'spawn') continue;
    if (lineOfSight(ctx.boxes, headOfRep(e, ctx, from), mid)) n++;
  }
  return n;
}

function enterRevive(t, ctx) {
  freePoint(t, ctx); setPop(t, 0, ctx);
  t.target = null; t.revGo = false; t.threatT = 0; t.kneeling = false; t.reviveT = 0; t.path = []; t.pathI = 0;
  t.goal[0] = t.goal[1] = Infinity;
  go(t, 'revive');
}

function revive(t, ctx, T, dt) {
  const pl = ctx.player.pos;
  if (!t.revGo) {
    t.threatT += dt;
    setPop(t, t.pop - popStep(dt, T.popTime), ctx);
    if (threats(ctx) <= T.reviveMaxThreats || t.threatT >= T.reviveWaitMax - 1e-9) t.revGo = true; else return;
  }
  const d = Math.hypot(pl[0] - t.pos[0], pl[2] - t.pos[2]);
  if (d <= T.reviveRange) {
    if (!t.kneeling) { t.kneeling = true; t.reviveT = 0; ctx.events.push({ type: 'tobbleKneel' }); }
    face(t, pl[0], pl[2], T, dt);
    t.reviveT += dt;
    if (t.reviveT >= T.reviveTime - 1e-9) {
      if (ctx.reviveDoc && ctx.reviveDoc()) bark(ctx, 'tobbleRevive', true);
      startFollow(t, ctx, T);
    }
    return;
  }
  t.kneeling = false; t.reviveT = 0;
  // Doc crawls: aim at a spot 0.8 m from Doc on Tobble's side, and re-plan when Doc has moved off it.
  if (Math.hypot(pl[0] - t.goal[0], pl[2] - t.goal[1]) > T.reviveRange + 0.4 || !t.path.length) {
    let dx = t.pos[0] - pl[0], dz = t.pos[2] - pl[2];
    const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
    const k = Math.min(0.8, T.reviveRange * 0.8);
    setPath(t, ctx, T, [pl[0] + dx * k, pl[2] + dz * k]);
    t.goal[0] = pl[0]; t.goal[1] = pl[2];
  }
  const r = walk(t, ctx, T, dt, T.runSpeed);
  if (r === 'stuck') { t.stuckCount++; t.path = []; }
  else if (r === 'arrived') t.path = [];
}

function downedState(t, ctx, T, dt) {
  const pl = ctx.player.pos;
  const dx = pl[0] - t.pos[0], dz = pl[2] - t.pos[2], d = Math.hypot(dx, dz);
  if (d > 1e-6) t.yaw = turnToward(t.yaw, Math.atan2(dx, dz), T.turnRate * dt);
  if (d > T.reviveRange && T.crawlSpeed > 0) {
    const want = Math.min(T.crawlSpeed * dt, d - T.reviveRange);
    const r = moveCapsule(ctx.boxes, t.pos, [dx / d * want, 0, dz / d * want], T.radius, T.height);
    t.pos[0] = r.pos[0]; t.pos[2] = r.pos[2];
  }
  t.complainT += dt;
  if (t.complainT >= T.complainEvery - 1e-9) { t.complainT = 0; bark(ctx, 'tobbleComplain'); }
}

// ---- The step ---------------------------------------------------------------------------------------------------------
export function updateTobble(t, ctx, dt) {
  if (!(dt > 0) || !Number.isFinite(dt)) dt = 0;
  dt = Math.min(dt, MAX_DT);
  const T = cfgOf(t, ctx);
  t.prevPos[0] = t.pos[0]; t.prevPos[1] = t.pos[1]; t.prevPos[2] = t.pos[2]; t.prevYaw = t.yaw;
  t.stateT += dt; t.sinceHit += dt;
  if (t.downed) { downedState(t, ctx, T, dt); return; }
  if (t.hp < T.health && t.sinceHit >= T.regenDelay) t.hp = Math.min(T.health, t.hp + (T.regenTime > 0 ? T.health / T.regenTime * dt : T.health));
  if (ctx.playerDowned) { if (t.state !== 'revive') enterRevive(t, ctx); } else if (t.state === 'revive') startFollow(t, ctx, T);
  // Doc's line of fire: in the aim ray for sidestepReact s of aiming, and he steps out of it.
  if (t.state !== 'sidestep' && t.state !== 'revive' && ctx.aim && ctx.aim.active && laneDistance(ctx, T, t.pos[0], t.pos[2]) < T.lofClear) {
    t.lofT += dt;
    if (t.lofT >= T.sidestepReact - 1e-9) beginSidestep(t, ctx, T);
  } else if (t.state !== 'sidestep') t.lofT = 0;
  switch (t.state) {
    case 'idle': idle(t, ctx, T, dt); break;
    case 'follow': follow(t, ctx, T, dt); break;
    case 'cover': cover(t, ctx, T, dt); break;
    case 'shoot': shoot(t, ctx, T, dt); break;
    case 'sidestep': sidestep(t, ctx, T, dt); break;
    case 'revive': revive(t, ctx, T, dt); break;
    default: break;
  }
}

// 'hit' | 'downed' | null. Nothing happens while downed or for a non-positive amount. Damage never interrupts a revive he is giving;
// only going down does.
export function hurtTobble(t, amount, ctx) {
  if (t.downed || !(amount > 0)) return null;
  t.hp -= amount; t.sinceHit = 0;
  if (t.hp > 0) return 'hit';
  t.hp = 0; t.downed = true; t.kneeling = false; t.reviveT = 0; t.complainT = 0; t.target = null; t.pop = 0;
  freePoint(t, ctx);
  go(t, 'downed');
  ctx.events.push({ type: 'tobbleDown' });
  bark(ctx, 'tobbleDown', true);
  return 'downed';
}

// Doc (or the clear) stands him up at reviveHealth of his health. False when he is not down.
export function reviveTobble(t, ctx) {
  if (!t.downed) return false;
  const T = cfgOf(t, ctx);
  t.downed = false; t.hp = Math.max(1, T.reviveHealth * T.health); t.sinceHit = 0; t.lofT = 0; t.complainT = 0;
  ctx.events.push({ type: 'tobbleUp' });
  bark(ctx, 'tobbleUp');
  startFollow(t, ctx, T);
  return true;
}

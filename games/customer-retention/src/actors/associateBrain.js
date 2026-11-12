// The Associate's brain: where it stands, what state it is in and what it does about it. It reads the
// player only through ctx.player and pushes everything the world should react to onto ctx.events.
// Pure logic: no WebGL, no DOM, no play.js. Randomness comes only from ctx.rand.
import { TUNING } from '../tuning.js';
import { moveCapsule } from '../world/collide.js';
import { findPath } from '../world/waypoints.js';
import { coverValue } from '../world/coverPoints.js';
import { HIT_SHAPES } from '../combat/targets.js';
import { turnToward } from './moveMath.js';

const MAX_DT = 0.25;
const TUCKED = new Set(['idle', 'cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch']);
const SHOOTING = new Set(['telegraph', 'burst', 'suppress']);
const clamp01 = v => Math.max(0, Math.min(1, v));
const dist2 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);       // [x, z] and [x, z]
const distXZ = (a, b) => Math.hypot(a[0] - b[0], a[2] - b[2]);      // [x, y, z] and [x, y, z]

export function resetAssociate(e, tuning = TUNING.associate) {
  e.pos[0] = e.start[0]; e.pos[1] = e.start[1]; e.pos[2] = e.start[2];
  e.prevPos[0] = e.start[0]; e.prevPos[1] = e.start[1]; e.prevPos[2] = e.start[2];
  e.yaw = e.prevYaw = Math.PI;       // facing -z, toward where the player arrives
  e.state = 'idle'; e.stateT = 0; e.health = tuning.health; e.alive = true;
  e.point = null; e.path = []; e.pathI = 0; e.pop = 0; e.blind = 0; e.role = 'hold'; e.bursts = 0;
  e.aim[0] = e.aim[1] = e.aim[2] = 0;
  e.wait = 0; e.wantSuppress = null; e.shots = 0; e.relocT = 0; e.pointT = 0; e.mustMove = false;
  e.stuckT = 0; e.stuckRef[0] = e.start[0]; e.stuckRef[1] = e.start[2]; e.stuckCount = 0;
  associateShapes(e);
  return e;
}

export function createAssociate({ id, pos }, tuning = TUNING.associate) {
  const e = {
    id, start: [pos[0], pos[1], pos[2]], pos: [0, 0, 0], prevPos: [0, 0, 0], yaw: 0, prevYaw: 0,
    state: 'idle', stateT: 0, health: 0, alive: true, point: null, path: [], pathI: 0, pop: 0, blind: 0,
    role: 'hold', bursts: 0, aim: [0, 0, 0],
    shapes: { head: { c: [0, 0, 0], r: HIT_SHAPES.head.r }, body: { a: [0, 0, 0], b: [0, 0, 0], r: HIT_SHAPES.body.r } },
    // Working data.
    wait: 0, wantSuppress: null, shots: 0, relocT: 0, pointT: 0, mustMove: false,
    stuckT: 0, stuckRef: [0, 0], stuckCount: 0, chest: [0, 0, 0], muzzle: [0, 0, 0],
  };
  return resetAssociate(e, tuning);
}

// Crouch shapes when tucked behind low cover, standing shapes when popped or out of cover.
export function associateShapes(e, combat = TUNING.combat) {
  const [x, y, z] = e.pos, s = e.shapes;
  const crouch = TUCKED.has(e.state) && e.point && e.point.kind === 'low' && e.pop < 0.5;
  s.head.r = HIT_SHAPES.head.r + combat.hitPad; s.body.r = HIT_SHAPES.body.r + combat.hitPad;
  s.head.c[0] = x; s.head.c[2] = z; s.body.a[0] = x; s.body.a[2] = z; s.body.b[0] = x; s.body.b[2] = z;
  if (crouch) {
    // The pad lowers the head centre so the padded sphere's top stays at the crouch height, under the wall top.
    s.head.c[1] = y + combat.crouchHead - combat.hitPad; s.body.a[1] = y + 0.1; s.body.b[1] = y + combat.crouchBodyTop;
  } else {
    s.head.c[1] = y + HIT_SHAPES.head.cy; s.body.a[1] = y + HIT_SHAPES.body.ay; s.body.b[1] = y + HIT_SHAPES.body.by;
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
    if (e.point) { enterCover(e, ctx, T); return; }
    p = nearestPoint(e, ctx, true) || nearestPoint(e, ctx, false);
    if (!p) { enterCover(e, ctx, T); return; }
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
  const p = e.point;
  e.pos[0] = p.pos[0]; e.pos[2] = p.pos[1];
  e.role = 'hold'; e.stuckCount = 0; e.pointT = 0; e.relocT = 0; e.mustMove = false;
  ctx.events.push({ type: 'arrive', id: e.id, point: p });
  enterCover(e, ctx, T);
}

function run(e, ctx, T, dt) {
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
    if (moved < 0.05) { e.stuckCount++; seek(e, ctx, T); return; }
    e.stuckCount = 0; e.stuckT = 0; e.stuckRef[0] = e.pos[0]; e.stuckRef[1] = e.pos[2];
  }
}

function springAim(e, ctx, T, dt, snap) {
  const pl = ctx.player, tgt = pl.exposed ? pl.head : pl.chest;
  const k = snap || !(T.aimLag > 0) ? 1 : 1 - Math.pow(0.5, dt / T.aimLag);
  for (let i = 0; i < 3; i++) e.aim[i] += (tgt[i] - e.aim[i]) * k;
}

// Shots due `t` seconds into a stream of `total` seconds at `rate` per second: the first at t = 0.
const shotsDue = (t, rate, total) => Math.min(Math.ceil(total * rate - 1e-9), Math.floor(t * rate + 1e-9) + 1);

function cover(e, ctx, T, D, dt) {
  setPop(e, e.pop - step(dt, T.popTime), T);
  faceWall(e, T, dt);
  const pl = ctx.player;
  if (pl.downed) return;
  e.pointT += dt;
  if (e.role !== 'hold') { seek(e, ctx, T); return; }
  e.relocT += dt;
  if (e.relocT >= T.relocateCheck) {
    e.relocT = 0;
    const cv = coverValue(e.point, evalChest(e, ctx), ctx.boxes, ctx.tuning || TUNING);
    if (!cv.protected || !cv.canShoot || dist2(e.point.pos, [pl.pos[0], pl.pos[2]]) < T.reserveRadius) { e.mustMove = true; seek(e, ctx, T); return; }
  }
  if (e.pointT >= T.relocateAfter) { e.mustMove = true; e.pointT = 0; seek(e, ctx, T); return; }
  if (e.stateT < e.wait) return;
  if (e.wantSuppress === null) e.wantSuppress = ctx.rand() < T.suppressChance;
  if (e.bursts >= T.magBursts) { go(e, 'reload'); ctx.events.push({ type: 'bark', id: e.id, key: 'reload' }); return; }
  if (ctx.tokens.request(e.id, ctx.now, ctx.tokenCount, D)) {
    go(e, 'telegraph'); e.shots = 0;
    springAim(e, ctx, T, dt, true);
    ctx.events.push({ type: 'telegraph', id: e.id });
    return;
  }
  if (e.wantSuppress) { go(e, 'suppress'); e.shots = 0; }
}

function stopShooting(e, ctx, T, burstDone) {
  releaseToken(e, ctx);
  if (burstDone) e.bursts++;
  enterCover(e, ctx, T);
}

function telegraph(e, ctx, T, dt) {
  const pl = ctx.player;
  setPop(e, e.pop + step(dt, T.popTime), T);
  face(e, pl.pos[0], pl.pos[2], T, dt);
  springAim(e, ctx, T, dt, false);
  if (pl.downed || !ctx.tokens.holds(e.id)) { stopShooting(e, ctx, T, false); return; }
  if (e.stateT >= T.popTime + T.telegraphTime - 1e-9) { go(e, 'burst'); e.shots = 0; }
}

function burst(e, ctx, T, dt) {
  const pl = ctx.player;
  setPop(e, e.pop + step(dt, T.popTime), T);
  face(e, pl.pos[0], pl.pos[2], T, dt);
  springAim(e, ctx, T, dt, false);
  if (pl.downed || !ctx.tokens.holds(e.id)) { stopShooting(e, ctx, T, true); return; }
  const m = e.muzzle;
  m[0] = e.pos[0]; m[1] = e.pos[1] + T.muzzleUp; m[2] = e.pos[2];
  const due = shotsDue(e.stateT, T.rate, T.burstTime);
  const speed = Math.min(1, pl.speed / (ctx.tuning || TUNING).move.sprint);
  while (e.shots < due) {
    e.shots++;
    const dx = e.aim[0] - m[0], dy = e.aim[1] - m[1], dz = e.aim[2] - m[2], l = Math.hypot(dx, dy, dz) || 1;
    ctx.events.push({ type: 'enemyShot', id: e.id, from: [m[0], m[1], m[2]], dir: [dx / l, dy / l, dz / l], accurate: true, spread: T.spread + T.moveSpread * speed });
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

export function updateAssociate(e, ctx, dt) {
  if (!e.alive) return;
  if (!(dt > 0) || !Number.isFinite(dt)) dt = 0;
  dt = Math.min(dt, MAX_DT);
  const T = (ctx.tuning || TUNING).associate, D = ctx.director || TUNING.director;
  e.prevPos[0] = e.pos[0]; e.prevPos[1] = e.pos[1]; e.prevPos[2] = e.pos[2]; e.prevYaw = e.yaw;
  e.stateT += dt;
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
    default: break;
  }
}

// 'hit' | 'kill' | null. A hit while shooting flinches and gives the token back; a kill frees the point too.
export function hurtAssociate(e, amount, ctx) {
  if (!e.alive || !(amount > 0)) return null;
  e.health -= amount;
  if (e.health <= 0) {
    e.health = 0; e.alive = false;
    releaseToken(e, ctx);
    if (e.point && ctx.reserved.get(e.point.index) === e.id) ctx.reserved.delete(e.point.index);
    e.pop = 0; e.blind = 0; go(e, 'dead');
    ctx.events.push({ type: 'death', id: e.id, pos: [e.pos[0], e.pos[1], e.pos[2]] });
    return 'kill';
  }
  if (SHOOTING.has(e.state)) { releaseToken(e, ctx); go(e, 'flinch'); e.blind = Math.min(e.blind, 1); }
  return 'hit';
}

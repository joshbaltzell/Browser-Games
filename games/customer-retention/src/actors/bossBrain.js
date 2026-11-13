// The Membership Overlord's brain: a giant Rep that lives in an enemy slot (e.kind === 'boss'). The Associate's brain dispatches here by kind, so
// the fight, the saunas, bullets, kettlebells, Tobble and the views treat it as one more enemy (with a few rules of its own, see hurtBoss).
// It has no cover points and no attack token: it keeps two fixed firing spots behind the desk (level.overlord.spots, each a hidden spot and a
// popped one), pops out to one, telegraphs, fires a long burst or lobs a terms-of-service page, and tucks away again.
// States: idle, tucked, telegraph, burst, lobWindup, lobRecover, retreat, hiding, return, dead.
// Phase 1 above phase2At of its health; phase 2 it hides (invulnerable) and the fight opens both saunas; phase 3 below phase3At, faster, bargaining.
// A burst is only ever the end of a telegraph and a lob only the end of a lobWindup (the marker shows from its start): the brain pushes
// 'telegraph' first and the shots or 'bossLob' after, and the fight lands the damage. Pure logic: no WebGL, no DOM. Randomness only from ctx.rand.
import { TUNING } from '../tuning.js';
import { lineOfSight } from '../world/coverPoints.js';
import { HIT_SHAPES } from '../combat/targets.js';
import { turnToward } from './moveMath.js';

const EPS = 1e-9;
const TURN = 8;   // rad/s
const clamp01 = v => Math.max(0, Math.min(1, v));
const dist2 = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);

export const bossRadius = (tun = TUNING) => tun.associate.radius * tun.boss.scale;
export const bossHeight = (tun = TUNING) => tun.associate.height * tun.boss.scale;

function go(e, state) { e.state = state; e.stateT = 0; }
const bark = (e, ctx, key, force = true) => ctx.events.push(force ? { type: 'bark', id: e.id, key, force: true } : { type: 'bark', id: e.id, key });
const tobbleUp = ctx => (ctx.tobble && !ctx.tobble.downed ? ctx.tobble : null);

// Fresh boss fields on its slot (a start or a restart). It stands hidden at its first spot.
export function initBoss(e, tun = TUNING) {
  e.kind = 'boss';
  e.health = tun.boss.health;
  e.phase = 1; e.invuln = false; e.spot = 0; e.nextSpot = 0; e.shiftPending = false; e.shiftT = 1; e.shiftFrom = [e.start[0], e.start[2]];
  e.sinceLob = 0; e.offers = 0; e.saunasOpen = false; e.lobTo = [0, 0, 0]; e.lobSent = false; e.wait = 0;
  e.pop = 0; e.blind = 0; e.role = 'hold'; e.point = null; e.path = []; e.pathI = 0; e.target = 'player'; e.shots = 0; e.bursts = 0;
  e.pos[0] = e.start[0]; e.pos[1] = e.start[1]; e.pos[2] = e.start[2];
  return e;
}

// Shapes: the Rep's, scaled by boss.scale wide and by scale * (crouchY..1 with how far it stands) tall.
export function bossShapes(e, combat = TUNING.combat, tun = TUNING) {
  const [x, y, z] = e.pos, s = e.shapes, B = tun.boss, W = B.scale, H = B.scale * (B.crouchY + (1 - B.crouchY) * clamp01(e.pop));
  s.head.r = HIT_SHAPES.head.r * W + combat.hitPad; s.body.r = HIT_SHAPES.body.r * W + combat.hitPad;
  s.head.c[0] = x; s.head.c[1] = y + HIT_SHAPES.head.cy * H; s.head.c[2] = z;
  s.body.a[0] = x; s.body.a[1] = y + HIT_SHAPES.body.ay * H; s.body.a[2] = z;
  s.body.b[0] = x; s.body.b[1] = y + HIT_SHAPES.body.by * H; s.body.b[2] = z;
  return s;
}

// Position at `p` (0 hidden to 1 popped) along the current spot.
function place(e, ctx, p) {
  const s = ctx.bossLevel.spots[e.spot];
  e.pos[0] = s.hide[0] + (s.pop[0] - s.hide[0]) * p;
  e.pos[2] = s.hide[1] + (s.pop[1] - s.hide[1]) * p;
}

function faceXZ(e, x, z, dt) {
  const dx = x - e.pos[0], dz = z - e.pos[2];
  if (Math.hypot(dx, dz) > 1e-6) e.yaw = turnToward(e.yaw, Math.atan2(dx, dz), TURN * dt);
}
const targetPos = (e, ctx) => (e.target === 'tobble' && ctx.tobble ? ctx.tobble.pos : ctx.player.pos);
const targetGone = (e, ctx) => (e.target === 'tobble' ? !tobbleUp(ctx) : ctx.player.downed);

const seeFrom = [0, 0, 0];
// Whom it shoots at: Doc when its popped head sees Doc's chest; else Tobble when in sight; else Doc. null when Doc is down and Tobble is not in sight.
function pickTarget(e, ctx, B) {
  const tb = tobbleUp(ctx), pl = ctx.player, s = ctx.bossLevel.spots[e.shiftPending ? e.nextSpot : e.spot];
  seeFrom[0] = s.pop[0]; seeFrom[1] = 1.49 * B.scale; seeFrom[2] = s.pop[1];
  if (!pl.downed && lineOfSight(ctx.boxes, seeFrom, pl.chest)) return 'player';
  if (tb && lineOfSight(ctx.boxes, seeFrom, tb.chest)) return 'tobble';
  return pl.downed ? null : 'player';
}

function springAim(e, ctx, B, dt, snap) {
  const pl = ctx.player, tgt = e.target === 'tobble' && ctx.tobble ? ctx.tobble.chest : pl.exposed ? pl.head : pl.chest;
  const k = snap || !(B.aimLag > 0) ? 1 : 1 - Math.pow(0.5, dt / B.aimLag);
  for (let i = 0; i < 3; i++) e.aim[i] += (tgt[i] - e.aim[i]) * k;
}

const fast = e => e.phase === 3;
const telegraphLen = (e, B) => B.popTime + (fast(e) ? B.fastTelegraph : B.telegraphTime);
const burstLen = (e, B) => (fast(e) ? B.fastBurstTime : B.burstTime);
const burstRate = (e, B) => (fast(e) ? B.fastRate : B.rate);
const shotsDue = (t, rate, total) => Math.min(Math.ceil(total * rate - 1e-9), Math.floor(t * rate + 1e-9) + 1);

function enterTucked(e, ctx, B) {
  go(e, 'tucked');
  const lo = fast(e) ? B.fastWaitMin : B.coverWaitMin, hi = fast(e) ? B.fastWaitMax : B.coverWaitMax;
  e.wait = lo + Math.max(0, hi - lo) * ctx.rand();
}

// Tucked: it sinks behind the desk, slides to the other spot out of sight, waits, then picks a lob or a burst.
function tucked(e, ctx, B, dt) {
  if (e.pop > 0) {
    e.pop = Math.max(0, e.pop - dt / Math.max(B.popTime, 1e-3));
    place(e, ctx, e.pop);
  } else if (e.shiftPending) {
    e.shiftFrom[0] = e.pos[0]; e.shiftFrom[1] = e.pos[2];
    e.spot = e.nextSpot; e.shiftPending = false; e.shiftT = 0;
  }
  if (e.pop <= 0 && e.shiftT < 1) {
    e.shiftT = Math.min(1, e.shiftT + dt / Math.max(B.shiftTime, 1e-3));
    const to = ctx.bossLevel.spots[e.spot].hide;
    e.pos[0] = e.shiftFrom[0] + (to[0] - e.shiftFrom[0]) * e.shiftT;
    e.pos[2] = e.shiftFrom[1] + (to[1] - e.shiftFrom[1]) * e.shiftT;
  }
  faceXZ(e, ctx.player.pos[0], ctx.player.pos[2], dt);
  if (e.stateT < e.wait || e.pop > 0 || e.shiftT < 1) return;
  const target = pickTarget(e, ctx, B);
  if (!target) return;
  e.target = target;
  e.shots = 0;
  if (e.phase === 1 && e.sinceLob >= B.lobEvery) {
    const tp = targetPos(e, ctx);
    e.lobTo[0] = tp[0]; e.lobTo[1] = 0; e.lobTo[2] = tp[2]; e.lobSent = false;
    go(e, 'lobWindup');
    ctx.events.push({ type: 'telegraph', id: e.id, kind: 'lob', time: B.popTime + B.lobWindup });
  } else {
    go(e, 'telegraph');
    springAim(e, ctx, B, dt, true);
    ctx.events.push({ type: 'telegraph', id: e.id, kind: 'boss', time: telegraphLen(e, B) });
  }
}

// Ends a burst (or a telegraph that lost its target): back behind the desk, to the other spot next time. In phase 3 it bargains.
function stopShooting(e, ctx, B, burstDone) {
  if (burstDone) { e.bursts++; e.sinceLob++; offer(e, ctx, B); }
  e.nextSpot = 1 - e.spot; e.shiftPending = true;
  enterTucked(e, ctx, B);
}

// Phase 3: a counteroffer after each burst, in order; after the third, Tobble and Doc answer.
function offer(e, ctx, B) {
  if (!fast(e) || e.offers >= 3) return;
  e.offers++;
  bark(e, ctx, 'bossOffer');
  if (e.offers === 3) { bark(e, ctx, 'bossOfferTobble'); bark(e, ctx, 'bossOfferDoc'); }
}

function pop(e, ctx, B, dt) {
  e.pop = Math.min(1, e.pop + dt / Math.max(B.popTime, 1e-3));
  place(e, ctx, e.pop);
}

function telegraph(e, ctx, B, dt) {
  pop(e, ctx, B, dt);
  const tp = targetPos(e, ctx);
  faceXZ(e, tp[0], tp[2], dt);
  springAim(e, ctx, B, dt, false);
  if (targetGone(e, ctx)) { stopShooting(e, ctx, B, false); return; }
  if (e.stateT >= telegraphLen(e, B) - EPS) { go(e, 'burst'); e.shots = 0; }
}

function burst(e, ctx, B, dt, tun) {
  pop(e, ctx, B, dt);
  const tp = targetPos(e, ctx);
  faceXZ(e, tp[0], tp[2], dt);
  springAim(e, ctx, B, dt, false);
  if (targetGone(e, ctx)) { stopShooting(e, ctx, B, true); return; }
  const m = e.muzzle, pl = ctx.player;
  m[0] = e.pos[0]; m[1] = e.pos[1] + B.muzzleUp * B.scale; m[2] = e.pos[2];
  const due = shotsDue(e.stateT, burstRate(e, B), burstLen(e, B));
  const speed = e.target === 'tobble' ? 0 : Math.min(1, pl.speed / tun.move.sprint);
  while (e.shots < due) {
    e.shots++;
    const dx = e.aim[0] - m[0], dy = e.aim[1] - m[1], dz = e.aim[2] - m[2], l = Math.hypot(dx, dy, dz) || 1;
    ctx.events.push({ type: 'enemyShot', id: e.id, from: [m[0], m[1], m[2]], dir: [dx / l, dy / l, dz / l], accurate: true, target: e.target, spread: B.spread + tun.associate.moveSpread * speed, damage: B.damage });
  }
  if (e.stateT >= burstLen(e, B) - EPS) stopShooting(e, ctx, B, true);
}

// The lob: it pops, raises the page, and throws it after popTime + lobWindup. The marker (e.lobTo) shows from the first step of the state.
function lobWindup(e, ctx, B, dt) {
  pop(e, ctx, B, dt);
  faceXZ(e, e.lobTo[0], e.lobTo[2], dt);
  if (e.stateT < B.popTime + B.lobWindup - EPS) return;
  const m = e.muzzle;
  m[0] = e.pos[0]; m[1] = e.pos[1] + B.muzzleUp * B.scale; m[2] = e.pos[2];
  e.lobSent = true;
  ctx.events.push({ type: 'bossLob', id: e.id, from: [m[0], m[1], m[2]], to: [e.lobTo[0], 0, e.lobTo[2]], flight: B.lobFlight, target: e.target });
  e.sinceLob = 0;
  go(e, 'lobRecover');
}

function lobRecover(e, ctx, B, dt) {
  pop(e, ctx, B, dt);
  if (e.stateT >= B.lobRecover - EPS) stopShooting(e, ctx, B, false);
}

// Moves toward (x, z) at `speed`; true on arrival.
function walkTo(e, x, z, speed, dt) {
  const dx = x - e.pos[0], dz = z - e.pos[2], d = Math.hypot(dx, dz), step = speed * dt;
  if (d <= step + EPS) { e.pos[0] = x; e.pos[2] = z; return true; }
  e.pos[0] += dx / d * step; e.pos[2] += dz / d * step;
  e.yaw = turnToward(e.yaw, Math.atan2(dx, dz), TURN * dt);
  return false;
}

// Phase 2: crouches and walks to the middle of the desk, then asks the fight to open the saunas.
function retreat(e, ctx, B, dt) {
  e.pop = Math.max(0, e.pop - dt / Math.max(B.popTime, 1e-3));
  const h = ctx.bossLevel.deskHide;
  if (walkTo(e, h[0], h[1], B.retreatSpeed, dt) && e.pop <= 0) {
    go(e, 'hiding');
    e.saunasOpen = true;
    ctx.events.push({ type: 'bossSaunas', id: e.id });
  }
}

// Phase 3 begins: faster, bargaining. It starts when its health falls to phase3At (see hurtBoss), or at once on the return if it is already there.
function startPhase3(e, ctx) {
  e.phase = 3;
  ctx.events.push({ type: 'bossPhase', id: e.id, phase: 3 });
}

// Hiding and invulnerable until the fight reports both saunas closed or spent (and at least minHide s have passed); then it comes back out
// vulnerable (still phase 2, at the phase2At line) and phase 3 starts when its health falls to phase3At.
function hiding(e, ctx, B, dt) {
  faceXZ(e, ctx.player.pos[0], ctx.player.pos[2], dt);
  if (e.stateT < B.minHide - EPS || !(ctx.saunasDone && ctx.saunasDone())) return;
  e.invuln = false;
  e.spot = ctx.player.pos[0] < 0 ? 0 : 1;   // it comes back out on the side Doc is on
  e.shiftFrom[0] = e.pos[0]; e.shiftFrom[1] = e.pos[2]; e.shiftT = 0; e.shiftPending = false;
  go(e, 'return');
  if (e.health <= B.phase3At * B.health + EPS) startPhase3(e, ctx);
  bark(e, ctx, 'bossReturn');
}

function returning(e, ctx, B, dt) {
  const h = ctx.bossLevel.spots[e.spot].hide;
  if (walkTo(e, h[0], h[1], B.returnSpeed, dt)) { e.shiftT = 1; enterTucked(e, ctx, B); }
}

export function updateBoss(e, ctx, dt) {
  const tun = ctx.tuning || TUNING, B = tun.boss;
  switch (e.state) {
    case 'idle': if (ctx.started) { bark(e, ctx, 'bossIntro'); enterTucked(e, ctx, B); } break;
    case 'tucked': tucked(e, ctx, B, dt); break;
    case 'telegraph': telegraph(e, ctx, B, dt); break;
    case 'burst': burst(e, ctx, B, dt, tun); break;
    case 'lobWindup': lobWindup(e, ctx, B, dt); break;
    case 'lobRecover': lobRecover(e, ctx, B, dt); break;
    case 'retreat': retreat(e, ctx, B, dt); break;
    case 'hiding': hiding(e, ctx, B, dt); break;
    case 'return': returning(e, ctx, B, dt); break;
    default: break;   // 'dead' holds still
  }
}

export function killBoss(e, ctx, kind) {
  e.alive = false; e.pop = 0; e.invuln = false;
  go(e, 'dead');
  ctx.events.push({ type: 'death', id: e.id, pos: [e.pos[0], e.pos[1], e.pos[2]], kind, boss: true });
  bark(e, ctx, 'bossDeath');
  return 'kill';
}

// 'hit' | 'kill' | 'immune' | null. The head takes boss.headMult more. While it hides (phase 2) nothing hurts it ('immune'). In phase 1 the health
// never goes below phase2At and back out in phase 2 never below phase3At (the hit that crosses a line starts the next phase), so no single hit skips a phase; phase 3 can end in 'kill'.
export function hurtBoss(e, amount, ctx, kind = 'body') {
  if (!e.alive || !(amount > 0) || e.state === 'unused') return null;
  if (e.invuln) return 'immune';
  const tun = ctx.tuning || TUNING, B = tun.boss;
  e.health -= kind === 'head' ? amount * B.headMult : amount;
  if (e.phase === 1) {
    const at = B.phase2At * B.health;
    if (e.health <= at + EPS) {
      e.health = at; e.phase = 2; e.invuln = true; e.lobSent = true;
      go(e, 'retreat');
      ctx.events.push({ type: 'bossPhase', id: e.id, phase: 2 });
      bark(e, ctx, 'bossTeam');
      return 'hit';
    }
    return 'hit';
  }
  if (e.phase === 2) {
    // Back out after the saunas: no single hit skips phase 3 either (it stops at the phase3At line).
    const at3 = B.phase3At * B.health;
    if (e.health <= at3 + EPS) { e.health = at3; startPhase3(e, ctx); }
    return 'hit';
  }
  if (e.health <= 0) { e.health = 0; return killBoss(e, ctx, kind); }
  return 'hit';
}

// Dev and tests: the boss at phase 3 with 1 hp, so the next hit kills it.
export function readyToDie(e) {
  e.phase = 3; e.invuln = false; e.health = 1;
  if (e.state === 'retreat' || e.state === 'hiding') { go(e, 'tucked'); e.wait = 0; e.pop = 0; }
}

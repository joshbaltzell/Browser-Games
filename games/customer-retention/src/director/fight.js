// The fight: Associates, attack tokens and the director who pushes and flanks a player who hides.
// Pure logic: no WebGL, no DOM. step() advances everything at the caller's fixed dt and returns the events.
import { TUNING } from '../tuning.js';
import { castRay, spreadDir } from '../combat/hits.js';
import { playerTarget, shotAtPlayer } from '../combat/playerHits.js';
import { moveCapsule } from '../world/collide.js';
import { coverPoints } from '../world/coverPoints.js';
import { buildGraph } from '../world/waypoints.js';
import { coverEdgeOf } from '../actors/coverStates.js';
import { lineOfSight } from '../world/coverPoints.js';
import { createGrenades, blastDamage } from '../combat/grenades.js';
import {
  createAssociate, resetAssociate, unuseAssociate, spawnAssociate, updateAssociate, hurtAssociate, associateShapes, scorePick,
  startRevive, staggerAssociate, diveAssociate, downAssociate, executeAssociate, releaseExecuted, finishAssociate,
} from '../actors/associateBrain.js';
import { createTokens } from './tokens.js';
import { createPads } from './pads.js';
import { createTobble, resetTobble, updateTobble, hurtTobble, reviveTobble, tobbleShapes } from '../actors/tobbleBrain.js';

const COVER_STATES = new Set(['cover', 'coverSlide', 'coverSwap']);
const CALM = new Set(['cover', 'suppress', 'reload', 'flinch']);
const HELPERS = new Set(['cover', 'suppress', 'reload']);   // a Rep in one of these may be sent to revive a downed one
const TUCKED_AT_POINT = new Set(['cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch']);
const MAX_SLOTS = 8;       // director.maxEnemies tops out here; this many Reps are built (and viewed) at load
const REUSE_AFTER = 1.0;   // s, a dead slot's death burst is over and the slot may be filled again
const MAX_DT = 0.1;
const dist3 = (a, b) => Math.hypot(a[0] - b[0], a[2] - b[2]);

export function createFight({ level, boxes, edges, rand, tuning = TUNING }) {
  const A = () => tuning.associate;
  const points = coverPoints(edges, { spacing: tuning.associate.pointSpacing, cornerZone: tuning.cover.cornerZone });
  const graph = buildGraph(level.waypoints, boxes, { radius: tuning.associate.radius, linkMax: tuning.associate.linkMax });
  const tokens = createTokens();
  const grenades = createGrenades(tuning.grenade);
  const pads = createPads(level, tuning);
  const reserved = new Map();
  const tobbleOn = () => !!level.tobble && tuning.tobble.enabled > 0;
  const events = [], late = [];
  // The level's Reps fill the first slots; the rest are empty ('unused') until a sauna or the dev hook fills them.
  const starts = level.associates.length;
  const enemies = level.associates.map(a => createAssociate(a, tuning.associate));
  for (let i = starts; i < MAX_SLOTS; i++) enemies.push(unuseAssociate(createAssociate({ id: `r${i + 1}`, pos: [0, 0, 0] }, tuning.associate)));
  const readSlots = () => Math.max(starts, Math.min(MAX_SLOTS, Math.round(tuning.director.maxEnemies)));
  let slotLimit = readSlots();   // director.maxEnemies applies at creation and at each restart
  const scratch = playerTarget({ state: 'move', pos: [0, 0, 0], cover: null, scratch: {} });
  const player = { pos: [0, 0, 0], chest: [0, 0, 0], head: [0, 0, 0], speed: 0, downed: false, coverNormal: null, exposed: false };
  const ctx = {
    boxes, points, graph, tokens, reserved, player, now: 0, rand, tokenCount: 0, events,
    tuning, director: tuning.director, others: enemies, started: false, aim: undefined,
    // Tobble's view of the fight: the Reps, whether Doc is down, a hit on a Rep and Doc's revive.
    tobble: null, enemies, playerDowned: false, m: null, health: null, hurtRep: null, reviveDoc: null,
  };
  const f = { enemies, tokens, points, graph, started: false, clear: false, now: 0, hideT: 0, stayT: 0, startT: 0, kills: 0, grenades, pads: pads.list, tobble: null };
  let checkpointed = false, headKills = 0;
  const settle = [0, 0];
  let wasDowned = false, settled = false;

  function claimStarts() {
    reserved.clear();
    for (const e of enemies.slice(0, starts)) {
      let best = null, bd = Infinity;
      for (const p of points) {
        const d = Math.hypot(p.pos[0] - e.pos[0], p.pos[1] - e.pos[2]);
        if (d < bd) { bd = d; best = p; }
      }
      e.point = best;
      if (best) reserved.set(best.index, e.id);
    }
  }
  claimStarts();
  f.tobble = ctx.tobble = tobbleOn() ? createTobble(level.tobble, tuning.tobble) : null;
  const tobbleUp = () => f.tobble && !f.tobble.downed;

  const bark = (id, key, sink = events, force = false) => sink.push(force ? { type: 'bark', id, key, force } : { type: 'bark', id, key });
  const firstAlive = () => enemies.find(e => e.alive) || enemies[0];

  function releaseAll() {
    for (const id of tokens.held()) tokens.release(id, f.now, tuning.director);
  }

  // The lockdown: the trigger line, or the first hit on a Rep (Minor 10), whichever comes first.
  function startFight(sink) {
    f.started = true; f.startT = f.now;
    bark(firstAlive().id, 'lockdown', sink);
  }

  // Every death, whatever the cause, lands here once: the kill count, the sauna's live count, the slot's reuse clock.
  function onKill(e) {
    e.diedAt = f.now; f.kills++;
    pads.noteDeath(e.id);
  }

  // One hit on a Rep through the brain, into `sink` (the step's events, or `late` between steps). Returns hurtAssociate's result.
  function damage(e, amount, kind, sink) {
    if (!f.started && e.alive && e.state !== 'unused' && amount > 0) startFight(sink);
    ctx.events = sink;
    const r = hurtAssociate(e, amount, ctx, kind);
    ctx.events = events;
    if (r === 'kill') onKill(e);
    if (r === 'kill' && kind === 'head' && tobbleUp() && ++headKills % 3 === 0) bark('tobble', 'tobbleHeadshot', sink);
    return r;
  }
  ctx.hurtRep = (e, amount) => damage(e, amount, 'tobble', events);
  ctx.reviveDoc = () => {
    if (!ctx.health || !ctx.health.downed) return false;
    ctx.health.revive(); ctx.m.revive(); player.downed = false;
    events.push({ type: 'revived' });
    return true;
  };

  function readPlayer(m, health) {
    const pl = player, tc = tuning.combat;
    pl.pos[0] = m.pos[0]; pl.pos[1] = m.pos[1]; pl.pos[2] = m.pos[2];
    const edge = COVER_STATES.has(m.state) ? coverEdgeOf(m) : null;
    pl.exposed = !!(m.cover && m.cover.exposed);
    const low = !!edge && edge.kind === 'low' && !pl.exposed;
    pl.chest[0] = m.pos[0]; pl.chest[1] = m.pos[1] + (low ? 0.6 : 1.2); pl.chest[2] = m.pos[2];
    const h = playerTarget(m, scratch, tc).shapes.head.c;
    pl.head[0] = h[0]; pl.head[1] = h[1]; pl.head[2] = h[2];
    pl.speed = m.speed();
    pl.coverNormal = edge ? edge.normal : null;
    pl.downed = !!health.downed;
  }

  // Push after pushAfter s of hiding, flank after flankAfter s of staying put. At most one of each at a time.
  function direct(m, dt) {
    const D = tuning.director;
    const inCover = COVER_STATES.has(m.state);
    if (inCover) { if (!player.exposed) f.hideT += dt; } else f.hideT = 0;
    if (!settled || Math.hypot(m.pos[0] - settle[0], m.pos[2] - settle[1]) > D.stayRadius) { settle[0] = m.pos[0]; settle[1] = m.pos[2]; settled = true; f.stayT = 0; } else f.stayT += dt;
    if (f.hideT >= D.pushAfter && !enemies.some(e => e.alive && e.role === 'push')) {
      const cands = enemies.filter(e => e.alive && e.role === 'hold' && CALM.has(e.state) && !tokens.holds(e.id))
        .sort((a, b) => dist3(a.pos, player.pos) - dist3(b.pos, player.pos));
      let done = null;
      for (const e of cands) {
        e.role = 'push';
        if (scorePick(e, ctx)) { done = e; break; }
        e.role = 'hold';
      }
      if (done) { bark(done.id, 'push'); f.hideT = 0; } else f.hideT = Math.max(0, D.pushAfter - 1);
    }
    if (f.stayT >= D.flankAfter && !enemies.some(e => e.alive && e.role === 'flank')) {
      let done = null, bs = -Infinity;
      for (const e of enemies) {
        if (!e.alive || e.role !== 'hold' || !CALM.has(e.state) || tokens.holds(e.id)) continue;
        e.role = 'flank';
        const s = scorePick(e, ctx);
        e.role = 'hold';
        if (s && s.score > bs) { bs = s.score; done = e; }
      }
      if (done) { done.role = 'flank'; if (tobbleUp()) bark('tobble', 'tobbleFlank'); bark(done.id, 'flank'); }
      f.stayT = 0;
    }
  }

  // Each downed Rep without a helper gets the nearest calm Rep within reviveRange that holds no token and has no other job.
  function directRevives() {
    const range = A().reviveRange;
    for (const d of enemies) {
      if (!d.alive || d.state !== 'downed' || d.helper) continue;
      let best = null, bd = Infinity;
      for (const h of enemies) {
        if (!h.alive || !HELPERS.has(h.state) || h.role !== 'hold' || tokens.holds(h.id)) continue;
        const dd = dist3(h.pos, d.pos);
        if (dd <= range && dd < bd) { bd = dd; best = h; }
      }
      if (best) { startRevive(best, d, ctx); bark(best.id, 'cloneRevive'); }
    }
  }

  // A slot a new Rep may take: empty, or dead for REUSE_AFTER s. Handing it out claims it until spawnAssociate fills it.
  function freeSlot() {
    for (let i = 0; i < slotLimit; i++) {
      const e = enemies[i];
      if (e.claimed) continue;
      if (e.state === 'unused' || (e.state === 'dead' && f.now - e.diedAt >= REUSE_AFTER - 1e-9)) { e.claimed = true; return e; }
    }
    return null;
  }

  function stepPads() {
    const evs = pads.step(0, { started: f.started, sinceStart: f.now - f.startT, kills: f.kills, freeSlot, now: f.now });
    for (const ev of evs) {
      events.push(ev);
      if (ev.type === 'padOpen') { bark(ev.id, 'padOpen', events, true); if (tobbleUp()) bark('tobble', 'tobblePad', events, true); continue; }
      if (ev.type !== 'padSpawn') continue;
      const pad = pads.list.find(p => p.id === ev.id), e = enemies.find(x => x.id === ev.enemyId);
      spawnAssociate(e, pad.pos, ctx);
    }
  }

  // A kettlebell blast at pos: every Rep and Doc in line of sight takes the damage for its distance, and every sauna in reach closes.
  const blastFrom = [0, 0, 0], blastAt = [0, 0, 0];
  function explode(pos, m, health) {
    const g = tuning.grenade;
    let kills = 0;
    blastFrom[0] = pos[0]; blastFrom[1] = pos[1] + 0.3; blastFrom[2] = pos[2];
    const reach = (at, amountOf) => {
      const d = Math.hypot(at[0] - pos[0], at[1] - pos[1], at[2] - pos[2]), amount = blastDamage(d, g);
      return amount > 0 && lineOfSight(boxes, blastFrom, at) ? amountOf(amount) : null;
    };
    for (const e of enemies) {
      if (!e.alive || e.state === 'executed') continue;
      const b = e.shapes.body;   // the capsule's middle: crouched, standing and downed Reps each have their own
      blastAt[0] = e.pos[0]; blastAt[1] = (b.a[1] + b.b[1]) / 2; blastAt[2] = e.pos[2];
      if (reach(blastAt, a => damage(e, a, 'blast', events)) === 'kill') kills++;
    }
    blastAt[0] = m.pos[0]; blastAt[1] = m.pos[1] + (player.chest[1] - m.pos[1] < 1 ? 0.45 : 0.9); blastAt[2] = m.pos[2];
    reach(blastAt, (a) => {
      const amount = a * g.selfDamage, result = health.damage(amount);
      if (result === null) return null;
      events.push({ type: 'playerHit', id: null, from: [pos[0], pos[1], pos[2]], amount, result });
      if (result === 'downed') { if (m.state !== 'downed') m.down(); releaseAll(); }
      return null;
    });
    const closed = pads.blast(pos);
    for (const id of closed) { events.push({ type: 'padClosed', id }); bark(id, 'padClosed'); }
    events.push({ type: 'explode', pos: [pos[0], pos[1], pos[2]], kills, closed });
  }

  function stepKettlebells(dt, m, health) {
    for (const ev of grenades.step(dt, boxes)) {
      if (ev.type === 'explode') explode(ev.pos, m, health); else events.push(ev);
    }
  }

  // A kettlebell with diveWarn s of fuse left makes each Rep within diveRadius roll once, in enemy order, to dive clear.
  function stepDives() {
    const T = A();
    for (const ball of grenades.live) {
      if (ball.fuse > T.diveWarn) continue;
      for (const e of enemies) {
        if (!e.alive || e.state === 'downed' || e.state === 'executed' || e.state === 'dive') continue;
        if (ball.rolled && ball.rolled.has(e.id)) continue;
        if (Math.hypot(e.pos[0] - ball.pos[0], e.pos[2] - ball.pos[2]) > T.diveRadius) continue;
        (ball.rolled || (ball.rolled = new Set())).add(e.id);
        if (rand() < T.diveChance && diveAssociate(e, ball.pos, ctx) && !ball.barked) { ball.barked = true; bark(e.id, 'dive'); }
      }
    }
  }

  // Separation: Reps (standing, downed, rising) push each other and Doc's radius apart; Doc is never moved; an executed Rep holds still.
  const homeOf = (e) => {
    const p = e.point, T = A();
    if (p.kind === 'tall' && e.pop > 0) return [p.pos[0] + p.tangent[0] * p.end * T.popShift * e.pop, p.pos[1] + p.tangent[1] * p.end * T.popShift * e.pop];
    return p.pos;
  };
  function separate(m) {
    const r = tuning.associate.radius, h = tuning.associate.height;
    const push = (e, dx, dz) => {
      if (e.state === 'executed') return;
      const res = moveCapsule(boxes, e.pos, [dx, 0, dz], r, h);
      e.pos[0] = res.pos[0]; e.pos[2] = res.pos[2];
    };
    const held = e => e.state === 'executed';
    for (let i = 0; i < enemies.length; i++) {
      const a = enemies[i];
      if (!a.alive) continue;
      for (let j = i + 1; j < enemies.length; j++) {
        const b = enemies[j];
        if (!b.alive) continue;
        let dx = b.pos[0] - a.pos[0], dz = b.pos[2] - a.pos[2], d = Math.hypot(dx, dz);
        if (d >= 2 * r) continue;
        if (d < 1e-6) { dx = 1; dz = 0; d = 1; }
        const o = (2 * r - d) / 2, ka = held(b) ? 2 : held(a) ? 0 : 1, kb = held(a) ? 2 : held(b) ? 0 : 1;
        push(a, -dx / d * o * ka, -dz / d * o * ka); push(b, dx / d * o * kb, dz / d * o * kb);
      }
      let dx = a.pos[0] - m.pos[0], dz = a.pos[2] - m.pos[2], d = Math.hypot(dx, dz);
      const need = r + tuning.move.radius;
      if (d < need) {
        if (d < 1e-6) { dx = 1; dz = 0; d = 1; }
        push(a, dx / d * (need - d), dz / d * (need - d));
      }
    }
    // Tobble keeps clear of every Rep (they share the push) and of Doc (only Tobble moves).
    const tb = f.tobble;
    if (tb) {
      const rt = tuning.tobble.radius, ht = tuning.tobble.height;
      const pushT = (dx, dz) => {
        const res = moveCapsule(boxes, tb.pos, [dx, 0, dz], rt, ht);
        tb.pos[0] = res.pos[0]; tb.pos[2] = res.pos[2];
      };
      for (const e of enemies) {
        if (!e.alive) continue;
        let dx = e.pos[0] - tb.pos[0], dz = e.pos[2] - tb.pos[2], d = Math.hypot(dx, dz);
        const need = rt + r;
        if (d >= need) continue;
        if (d < 1e-6) { dx = 1; dz = 0; d = 1; }
        const o = need - d, kt = held(e) || (e.point && TUCKED_AT_POINT.has(e.state)) ? 1 : 0.5;   // a held or tucked Rep stays put; Tobble gives way
        pushT(-dx / d * o * kt, -dz / d * o * kt);
        push(e, dx / d * o * (1 - kt), dz / d * o * (1 - kt));
      }
      let dx = tb.pos[0] - m.pos[0], dz = tb.pos[2] - m.pos[2], d = Math.hypot(dx, dz);
      const need = rt + tuning.move.radius;
      if (d < need) {
        if (d < 1e-6) { dx = 1; dz = 0; d = 1; }
        pushT(dx / d * (need - d), dz / d * (need - d));
      }
    }
    // Minor 11: a Rep tucked at its point and shoved more than 0.3 m off it goes back to the point when that spot is free, else seeks.
    for (const e of enemies) {
      if (!e.alive || !e.point || !TUCKED_AT_POINT.has(e.state)) continue;
      const home = homeOf(e);
      if (Math.hypot(e.pos[0] - home[0], e.pos[2] - home[1]) <= 0.3) continue;
      let free = Math.hypot(home[0] - m.pos[0], home[1] - m.pos[2]) >= r + tuning.move.radius - 1e-3;
      if (f.tobble && Math.hypot(home[0] - f.tobble.pos[0], home[1] - f.tobble.pos[2]) < r + tuning.tobble.radius - 1e-3) free = false;
      for (const o of enemies) {
        if (o === e || !o.alive || !free) continue;
        if (Math.hypot(home[0] - o.pos[0], home[1] - o.pos[2]) < 2 * r - 1e-3) free = false;
      }
      if (free) { e.pos[0] = home[0]; e.pos[2] = home[1]; continue; }
      if (tokens.holds(e.id)) tokens.release(e.id, f.now, tuning.director);
      e.mustMove = true; e.pop = 0; e.blind = 0; e.state = 'seek'; e.stateT = 0;
    }
  }

  const tobbleList = [null];
  function shoot(m, health) {
    const a = A(), out = [0, 0, 0];
    tobbleList[0] = f.tobble;
    for (let i = 0; i < events.length; i++) {
      const ev = events[i];
      if (ev.type !== 'enemyShot') continue;
      if (ev.accurate && health.downed && ev.target !== 'tobble') { events.splice(i--, 1); continue; }
      const dir = spreadDir(ev.dir, ev.spread, rand, out);
      if (ev.target === 'tobble') {
        // A shot at Tobble meets the boxes and Tobble alone; tucked behind low cover his crouched shapes sit under the wall.
        const tb = f.tobble, r = castRay(ev.from, dir, a.range, boxes, tobbleList);
        if (tb && !tb.downed && (r.kind === 'head' || r.kind === 'body')) {
          const result = hurtTobble(tb, a.damage, ctx);
          events.push({ type: 'tobbleHit', id: ev.id, from: ev.from, result });
        }
        events.push({ type: 'shotFx', from: ev.from, to: r.point, accurate: true });
      } else if (ev.accurate) {
        const r = shotAtPlayer(ev.from, dir, a.range, boxes, m, tuning.combat);
        let to = r.point;
        if (r.kind === 'head' || r.kind === 'body') {
          const result = health.damage(a.damage);
          events.push({ type: 'playerHit', id: ev.id, from: ev.from, amount: a.damage, result });
          if (result === 'downed') {
            if (m.state !== 'downed') m.down();
            releaseAll();
          }
        }
        events.push({ type: 'shotFx', from: ev.from, to: to.slice(), accurate: true });
      } else {
        const r = castRay(ev.from, dir, a.range, boxes, []);
        events.push({ type: 'shotFx', from: ev.from, to: r.point, accurate: false });
      }
    }
  }

  f.targets = () => enemies;
  f.freeSlot = freeSlot;

  f.step = (dt, pl) => {
    if (!(dt > 0) || !Number.isFinite(dt)) dt = 0;
    dt = Math.min(dt, MAX_DT);
    events.length = 0;
    for (const ev of late) events.push(ev);
    late.length = 0;
    const { m, health } = pl;
    f.now += dt; ctx.now = f.now; ctx.aim = pl.aim; ctx.m = m; ctx.health = health;
    if (!f.started && m.pos[2] > level.trigger.z) startFight(events);
    ctx.started = f.started;
    readPlayer(m, health);
    ctx.playerDowned = player.downed;
    if (player.downed) {
      if (!tobbleUp()) releaseAll();
      for (const e of enemies) if (e.role !== 'revive') e.role = 'hold';
      if (!wasDowned && f.started) bark(firstAlive().id, 'downed');
    } else if (f.started && !f.clear) direct(m, dt);
    wasDowned = player.downed;
    // The director: clone revives, then the saunas.
    if (f.started) { directRevives(); stepPads(); }
    tokens.expire(f.now, tuning.director);
    ctx.tokenCount = tuning.director.casual ? tuning.director.casualTokens : tuning.director.tokens;
    stepKettlebells(dt, m, health);
    stepDives();
    if (f.tobble) { updateTobble(f.tobble, ctx, dt); tobbleShapes(f.tobble, tuning.combat); }
    const n0 = events.length;
    for (const e of enemies) updateAssociate(e, ctx, dt);
    for (let i = n0; i < events.length; i++) if (events[i].type === 'death') onKill(enemies.find(e => e.id === events[i].id));   // bleed-outs
    shoot(m, health);
    separate(m);
    for (const e of enemies) associateShapes(e, tuning.combat);
    if (f.tobble) tobbleShapes(f.tobble, tuning.combat);
    // Doc and Tobble both down at the end of a step (in either order, or together): one checkpoint event; the caller restarts.
    const bothDown = !!f.tobble && f.tobble.downed && health.downed;
    if (bothDown && !checkpointed) events.push({ type: 'checkpoint' });
    checkpointed = bothDown;
    if (f.started && !f.clear && enemies.every(e => !e.alive) && pads.allDone()) {
      f.clear = true;
      events.push({ type: 'clear' });
      bark(enemies[0].id, 'clear');
      if (f.tobble) { reviveTobble(f.tobble, ctx); bark('tobble', 'tobbleClear'); }
    }
    return events;
  };

  // A hit between steps (the player's shots) is reported on the next step's events. kind: 'body' | 'head' | 'bash' | 'blast' | 'execute' | 'tobble'.
  f.hurt = (enemy, amount, kind = 'body') => damage(enemy, amount, kind, late);

  // Doc's bash: 30 and a stagger on a standing Rep, death for a downed one. 'hit' | 'kill' | null.
  f.bash = (e) => {
    if (!e.alive || e.state === 'executed' || e.state === 'unused') return null;
    const r = damage(e, tuning.melee.bashDamage, 'bash', late);
    if (r === 'hit') { staggerAssociate(e, ctx); return 'hit'; }
    return r === 'kill' ? 'kill' : null;
  };

  // The cutter or the stomp takes hold of a Rep. False for a dead, empty, diving or already held one.
  f.beginExecution = (e) => executeAssociate(e, ctx);
  // The bite completes: the Rep dies with kind 'execute' ('kill'), or null when it was not being held.
  f.finishExecution = (e) => {
    ctx.events = late;
    const r = finishAssociate(e, ctx, 'execute');
    ctx.events = events;
    if (r === 'kill') onKill(e);
    return r;
  };
  // Doc went down mid-execution: the Rep is released (to flinch, or back to lying down).
  f.releaseExecution = (e) => releaseExecuted(e);

  // Dev: open a dormant sauna now (the PA line and Tobble's callout come with it, on the next step). False when it is not dormant.
  f.openPad = (id) => {
    const p = pads.list.find(x => x.id === id);
    if (!p || p.state !== 'dormant') return false;
    p.state = 'open'; p.nextT = f.now + tuning.pad.interval;
    late.push({ type: 'padOpen', id });
    bark(id, 'padOpen', late, true);
    if (tobbleUp()) bark('tobble', 'tobblePad', late, true);
    return true;
  };

  // Dev (smoke tests, god mode): every live Rep dies and every sauna closes, so the fight reports 'clear' on its next step.
  f.forceClear = () => {
    for (const e of enemies) if (e.alive) damage(e, 1e6, 'blast', late);
    for (const p of pads.list) if (p.state === 'dormant' || p.state === 'open') p.state = 'closed';
    return true;
  };

  // Dev: fill one free slot with a Rep rising at the first sauna; and put a Rep down.
  f.spawnRep = () => {
    const e = freeSlot();
    if (!e) return null;
    const pad = pads.list[0];
    return spawnAssociate(e, pad ? pad.pos : [0, 0, 0], ctx);
  };
  f.downRep = (e) => {
    ctx.events = late;
    const r = downAssociate(e, ctx);
    ctx.events = events;
    return r === 'down';
  };
  // A hit on Tobble from outside the Reps' bursts (dev hook, tests): 'hit' | 'downed' | null.
  f.hurtTobble = (amount) => {
    if (!f.tobble) return null;
    ctx.events = late;
    const r = hurtTobble(f.tobble, amount, ctx);
    ctx.events = events;
    return r;
  };
  f.reserved = reserved;   // cover point index -> holder id (read-only for callers)
  // Doc revives Tobble (the hold on interact finished). False when there is no Tobble or he is not down.
  f.reviveTobble = () => {
    if (!f.tobble) return false;
    ctx.events = late;
    const r = reviveTobble(f.tobble, ctx);
    ctx.events = events;
    if (r) tobbleShapes(f.tobble, tuning.combat);
    return r;
  };
  // Kettlebells: a ball in flight at `from` with velocity vel (m/s). It explodes grenade.fuse s later, wherever it is.
  f.throwGrenade = (from, vel) => grenades.throw(from, vel);

  f.reset = () => {
    tokens.reset(); grenades.reset(); pads.reset();
    slotLimit = readSlots();
    enemies.forEach((e, i) => { resetAssociate(e, tuning.associate); if (i >= starts) unuseAssociate(e); });
    claimStarts();
    f.tobble = ctx.tobble = tobbleOn() ? (f.tobble ? resetTobble(f.tobble) : createTobble(level.tobble, tuning.tobble)) : null;
    checkpointed = false; headKills = 0; ctx.playerDowned = false;
    events.length = 0; late.length = 0;
    f.started = f.clear = false; f.now = 0; f.startT = 0; f.kills = 0; f.hideT = f.stayT = 0;
    ctx.now = 0; ctx.started = false; ctx.aim = undefined; wasDowned = false; settled = false;
    for (const e of enemies) associateShapes(e, tuning.combat);
  };

  return f;
}

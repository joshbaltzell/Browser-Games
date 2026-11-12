// The fight: Associates, attack tokens and the director who pushes and flanks a player who hides.
// Pure logic: no WebGL, no DOM. step() advances everything at the caller's fixed dt and returns the events.
import { TUNING } from '../tuning.js';
import { castRay, spreadDir } from '../combat/hits.js';
import { playerTarget, shotAtPlayer } from '../combat/playerHits.js';
import { moveCapsule } from '../world/collide.js';
import { coverPoints } from '../world/coverPoints.js';
import { buildGraph } from '../world/waypoints.js';
import { coverEdgeOf } from '../actors/coverStates.js';
import { createAssociate, resetAssociate, updateAssociate, hurtAssociate, associateShapes, scorePick } from '../actors/associateBrain.js';
import { createTokens } from './tokens.js';

const COVER_STATES = new Set(['cover', 'coverSlide', 'coverSwap']);
const CALM = new Set(['cover', 'suppress', 'reload', 'flinch']);
const MAX_DT = 0.1;
const dist3 = (a, b) => Math.hypot(a[0] - b[0], a[2] - b[2]);

export function createFight({ level, boxes, edges, rand, tuning = TUNING }) {
  const A = () => tuning.associate;
  const points = coverPoints(edges, { spacing: tuning.associate.pointSpacing, cornerZone: tuning.cover.cornerZone });
  const graph = buildGraph(level.waypoints, boxes, { radius: tuning.associate.radius, linkMax: tuning.associate.linkMax });
  const tokens = createTokens();
  const reserved = new Map();
  const events = [], late = [];
  const enemies = level.associates.map(a => createAssociate(a, tuning.associate));
  const scratch = playerTarget({ state: 'move', pos: [0, 0, 0], cover: null, scratch: {} });
  const player = { pos: [0, 0, 0], chest: [0, 0, 0], head: [0, 0, 0], speed: 0, downed: false, coverNormal: null, exposed: false };
  const ctx = {
    boxes, points, graph, tokens, reserved, player, now: 0, rand, tokenCount: 0, events,
    tuning, director: tuning.director, others: enemies, started: false,
  };
  const f = { enemies, tokens, points, graph, started: false, clear: false, now: 0, hideT: 0, stayT: 0 };
  const settle = [0, 0];
  let wasDowned = false, settled = false;

  function claimStarts() {
    reserved.clear();
    for (const e of enemies) {
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

  const bark = (id, key) => events.push({ type: 'bark', id, key });
  const firstAlive = () => enemies.find(e => e.alive) || enemies[0];

  function releaseAll() {
    for (const id of tokens.held()) tokens.release(id, f.now, tuning.director);
  }

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
      if (done) { done.role = 'flank'; bark(done.id, 'flank'); }
      f.stayT = 0;
    }
  }

  function separate(m) {
    const r = tuning.associate.radius, h = tuning.associate.height;
    const push = (e, dx, dz) => {
      const res = moveCapsule(boxes, e.pos, [dx, 0, dz], r, h);
      e.pos[0] = res.pos[0]; e.pos[2] = res.pos[2];
    };
    for (let i = 0; i < enemies.length; i++) {
      const a = enemies[i];
      if (!a.alive) continue;
      for (let j = i + 1; j < enemies.length; j++) {
        const b = enemies[j];
        if (!b.alive) continue;
        let dx = b.pos[0] - a.pos[0], dz = b.pos[2] - a.pos[2], d = Math.hypot(dx, dz);
        if (d >= 2 * r) continue;
        if (d < 1e-6) { dx = 1; dz = 0; d = 1; }
        const o = (2 * r - d) / 2;
        push(a, -dx / d * o, -dz / d * o); push(b, dx / d * o, dz / d * o);
      }
      let dx = a.pos[0] - m.pos[0], dz = a.pos[2] - m.pos[2], d = Math.hypot(dx, dz);
      const need = r + tuning.move.radius;
      if (d < need) {
        if (d < 1e-6) { dx = 1; dz = 0; d = 1; }
        push(a, dx / d * (need - d), dz / d * (need - d));
      }
    }
  }

  function shoot(m, health) {
    const a = A(), out = [0, 0, 0];
    for (let i = 0; i < events.length; i++) {
      const ev = events[i];
      if (ev.type !== 'enemyShot') continue;
      if (ev.accurate && health.downed) { events.splice(i--, 1); continue; }
      const dir = spreadDir(ev.dir, ev.spread, rand, out);
      if (ev.accurate) {
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

  f.step = (dt, pl) => {
    if (!(dt > 0) || !Number.isFinite(dt)) dt = 0;
    dt = Math.min(dt, MAX_DT);
    events.length = 0;
    for (const ev of late) events.push(ev);
    late.length = 0;
    const { m, health } = pl;
    f.now += dt; ctx.now = f.now;
    if (!f.started && m.pos[2] > level.trigger.z) { f.started = true; bark(firstAlive().id, 'lockdown'); }
    ctx.started = f.started;
    readPlayer(m, health);
    if (player.downed) {
      releaseAll();
      for (const e of enemies) e.role = 'hold';
      if (!wasDowned && f.started) bark(firstAlive().id, 'downed');
    } else if (f.started && !f.clear) direct(m, dt);
    wasDowned = player.downed;
    tokens.expire(f.now, tuning.director);
    ctx.tokenCount = tuning.director.casual ? tuning.director.casualTokens : tuning.director.tokens;
    for (const e of enemies) updateAssociate(e, ctx, dt);
    shoot(m, health);
    separate(m);
    for (const e of enemies) associateShapes(e, tuning.combat);
    if (f.started && !f.clear && enemies.every(e => !e.alive)) {
      f.clear = true;
      events.push({ type: 'clear' });
      bark(enemies[enemies.length - 1].id, 'clear');
    }
    return events;
  };

  f.hurt = (enemy, amount) => {
    ctx.events = late;
    const r = hurtAssociate(enemy, amount, ctx);
    ctx.events = events;
    if (r) f.started = true;
    return r;
  };

  f.reset = () => {
    tokens.reset();
    for (const e of enemies) resetAssociate(e, tuning.associate);
    claimStarts();
    events.length = 0; late.length = 0;
    f.started = f.clear = false; f.now = 0; f.hideT = f.stayT = 0;
    ctx.now = 0; ctx.started = false; wasDowned = false; settled = false;
    for (const e of enemies) associateShapes(e, tuning.combat);
  };

  return f;
}

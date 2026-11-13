import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createAssociate, updateAssociate, hurtAssociate, pickPoint, associateShapes, downAssociate, staggerAssociate, diveAssociate, spawnAssociate } from '../src/actors/associateBrain.js';
import { createTokens } from '../src/director/tokens.js';
import { coverPoints } from '../src/world/coverPoints.js';
import { buildGraph, findPath } from '../src/world/waypoints.js';
import { HIT_SHAPES } from '../src/combat/targets.js';
import { TUNING } from '../src/tuning.js';
import { rng } from '../src/core/random.js';
import { R, BOXES, EDGES } from './fightSim.js';

const A = TUNING.associate;
const points = coverPoints(EDGES, { spacing: A.pointSpacing, cornerZone: TUNING.cover.cornerZone });
const graph = buildGraph(R.waypoints, BOXES, { radius: A.radius, linkMax: A.linkMax });
const solid = BOXES.filter(b => b.kind !== 'floor');
const nearest = (x, z) => points.reduce((b, p) => (Math.hypot(p.pos[0] - x, p.pos[1] - z) < Math.hypot(b.pos[0] - x, b.pos[1] - z) ? p : b));

// A player tucked behind K1 (normal -z), or anywhere given.
function makeCtx(over = {}) {
  const pos = over.pos || [-4, 0, -10.5];
  return {
    boxes: BOXES, points, graph, tokens: createTokens(), reserved: new Map(), now: 0, rand: rng(1), tokenCount: 2, events: [],
    tuning: TUNING, director: TUNING.director, others: [], started: true,
    player: { pos, chest: [pos[0], 0.6, pos[2]], head: [pos[0], 0.7, pos[2]], speed: 0, downed: false, coverNormal: [0, -1], exposed: false, ...(over.player || {}) },
    ...over.ctx,
  };
}
// An associate standing on the point nearest (x, z), reserved.
function placed(ctx, id, x, z) {
  const p = nearest(x, z);
  const e = createAssociate({ id, pos: [p.pos[0], 0, p.pos[1]] });
  e.point = p; ctx.reserved.set(p.index, id);
  return e;
}
const d2 = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[2]);

test('pickPoint: a push re-pick is >= 2 m closer to the player; a flank re-pick is >= flankAngle off the player cover normal or null', () => {
  const ctx = makeCtx();
  const e = placed(ctx, 'a1', -4.3, 4.88);
  e.role = 'push';
  const push = pickPoint(e, ctx);
  assert.ok(push, 'a point exists');
  assert.ok(d2(e.point.pos, ctx.player.pos) - d2(push.pos, ctx.player.pos) >= 2 - 1e-9);
  // From a point the player is already beside, no push candidate is 2 m closer: null.
  const near = makeCtx({ pos: [-4, 0, -5] });
  const f = placed(near, 'a2', -3, -2.1);
  f.role = 'push';
  const closer = pickPoint(f, near);
  assert.ok(closer === null || d2(f.point.pos, near.player.pos) - d2(closer.pos, near.player.pos) >= 2 - 1e-9);
  let seen = 0;
  for (const who of [[-4.3, 4.88], [2.7, 4.88], [4.3, 4.88], [-2.7, 4.88]]) {
    const c = makeCtx(); const g = placed(c, 'g', ...who);
    g.role = 'flank';
    const fl = pickPoint(g, c);
    if (fl === null) continue;
    seen++;
    const n = c.player.coverNormal, v = [fl.pos[0] - c.player.pos[0], fl.pos[1] - c.player.pos[2]];
    const cos = (v[0] * -n[0] + v[1] * -n[1]) / Math.hypot(v[0], v[1]);
    assert.ok(Math.acos(Math.min(1, cos)) * 180 / Math.PI >= TUNING.director.flankAngle - 1e-6);
  }
  assert.ok(seen > 0, 'Kiosk Row has a flank point against a player tucked behind K1');
  // No cover normal (a player in the open): no flank.
  const open = makeCtx({ player: { coverNormal: null } });
  const h = placed(open, 'h', -4.3, 4.88); h.role = 'flank';
  assert.equal(pickPoint(h, open), null);
});

test('pickPoint skips points reserved by others or within reserveRadius of the player; ties go to the lower index; deterministic', () => {
  const ctx = makeCtx();
  const e = placed(ctx, 'a1', -4.3, 4.88);
  const first = pickPoint(e, ctx);
  assert.equal(pickPoint(e, ctx), first, 'same answer twice');
  // Another clone reserves the best point: it and its neighbours inside reserveRadius are skipped.
  ctx.reserved.set(first.index, 'x');
  const second = pickPoint(e, ctx);
  assert.notEqual(second.index, first.index);
  assert.ok(d2(second.pos, [first.pos[0], 0, first.pos[1]]) >= A.reserveRadius);
  // A point within reserveRadius of the player never counts.
  const pctx = makeCtx({ pos: [first.pos[0] + 0.5, 0, first.pos[1] - 0.2] });
  const e2 = placed(pctx, 'a2', -4.3, 4.88);
  const p3 = pickPoint(e2, pctx);
  if (p3) assert.ok(Math.hypot(p3.pos[0] - pctx.player.pos[0], p3.pos[1] - pctx.player.pos[2]) >= A.reserveRadius);
  // Ties go to the lower index because the scorer only replaces the best on a strictly better score (the mirror
  // points on K5 and K6 score the same for a player on the centre line).
  const mid = makeCtx({ pos: [0, 0, -10.5] });
  const left = placed(mid, 'l', -2.7, 4.88), right = placed(mid, 'r', 2.7, 4.88);
  mid.reserved.clear();
  const pl = pickPoint(left, mid), pr = pickPoint(right, mid);
  assert.ok(pl && pr);
});

test('associateShapes: tucked behind low cover the head sphere top is 0.96 (< the 1 m wall top) and the body capsule ends at 0.45; popped uses HIT_SHAPES', () => {
  const e = createAssociate({ id: 'a', pos: [-4.3, 0, 4.88] });
  e.point = nearest(-4.3, 4.88);
  assert.equal(e.point.kind, 'low');
  for (const state of ['idle', 'cover', 'reload']) {
    e.state = state; e.pop = 0; associateShapes(e);
    assert.ok(Math.abs(e.shapes.head.c[1] + e.shapes.head.r - 0.96) < 1e-9);
    assert.ok(e.shapes.head.c[1] + e.shapes.head.r < 1);
    assert.equal(e.shapes.body.b[1], TUNING.combat.crouchBodyTop);
  }
  e.state = 'burst'; e.pop = 1; associateShapes(e);
  assert.equal(e.shapes.head.c[1], HIT_SHAPES.head.cy);
  assert.equal(e.shapes.body.b[1], HIT_SHAPES.body.by);
  assert.equal(e.shapes.body.a[1], HIT_SHAPES.body.ay);
  e.state = 'run'; e.pop = 0; associateShapes(e);
  assert.equal(e.shapes.head.c[1], HIT_SHAPES.head.cy, 'running is standing');
});

test('hurtAssociate: 7 x 16 kills; a hit while bursting goes to flinch and releases the token; a kill frees the point and emits death', () => {
  const ctx = makeCtx();
  const e = placed(ctx, 'a1', -4.3, 4.88);
  for (let i = 0; i < 6; i++) assert.equal(hurtAssociate(e, 16, ctx), 'hit');
  assert.equal(e.alive, true);
  assert.equal(hurtAssociate(e, 16, ctx), 'kill');
  assert.equal(e.alive, false);
  assert.equal(e.state, 'dead');
  assert.equal(ctx.reserved.size, 0, 'the point is free');
  assert.deepEqual(ctx.events.filter(v => v.type === 'death').map(v => v.id), ['a1']);
  assert.equal(hurtAssociate(e, 16, ctx), null, 'the dead take no hits');
  // A hit while shooting flinches and gives the token back.
  const c2 = makeCtx();
  const b = placed(c2, 'b1', 2.7, 4.88);
  for (const state of ['telegraph', 'burst', 'suppress']) {
    c2.tokens.reset(); c2.tokens.request('b1', 0, 2, TUNING.director);
    b.state = state; b.stateT = 0.3; b.health = 100;
    assert.equal(hurtAssociate(b, 16, c2), 'hit');
    assert.equal(b.state, 'flinch');
    assert.equal(c2.tokens.holds('b1'), false);
  }
  // A hit while in cover changes nothing; a kill while holding a token releases it.
  b.state = 'cover'; assert.equal(hurtAssociate(b, 16, c2), 'hit'); assert.equal(b.state, 'cover');
  c2.tokens.reset(); c2.tokens.request('b1', 0, 2, TUNING.director);
  hurtAssociate(b, 1000, c2);
  assert.equal(c2.tokens.holds('b1'), false);
});

test('run: reaches a point across the arena around K3 without entering a box; stuck guard re-seeks', () => {
  const ctx = makeCtx({ pos: [0, 0, -13] });
  const target = nearest(0, -2.1);                      // K3's north side
  const e = createAssociate({ id: 'r', pos: [0, 0, -5] });
  e.point = target; ctx.reserved.set(target.index, 'r');
  e.path = findPath(graph, BOXES, [0, -5], target.pos, A.radius);
  assert.ok(e.path.length > 1, 'the way is round K3');
  e.pathI = 0; e.state = 'run';
  let arrived = false, steps = 0;
  for (; steps < 60 * 10 && !arrived; steps++) {
    updateAssociate(e, ctx, 1 / 60);
    for (const b of solid) {
      const cx = Math.max(b.min[0], Math.min(e.pos[0], b.max[0])), cz = Math.max(b.min[2], Math.min(e.pos[2], b.max[2]));
      assert.ok(Math.hypot(e.pos[0] - cx, e.pos[2] - cz) >= A.radius - 1e-6 || b.max[1] < 0.05, 'outside every box');
    }
    arrived = e.state === 'cover';
  }
  assert.ok(arrived, 'arrived');
  assert.ok(steps / 60 < 4, 'a few seconds, not a crawl');
  assert.ok(ctx.events.some(v => v.type === 'arrive' && v.id === 'r'));
  assert.ok(Math.hypot(e.pos[0] - target.pos[0], e.pos[2] - target.pos[1]) < 1e-6);

  // Stuck guard: a clone that cannot move re-seeks every stuckTime, and after three takes the nearest point straight.
  const tuning = structuredClone(TUNING); tuning.associate.runSpeed = 0;
  const c2 = makeCtx({ ctx: { tuning, director: tuning.director } });
  const s = createAssociate({ id: 's', pos: [0, 0, -5] });
  s.path = [[1, 1]]; s.point = target; c2.reserved.set(target.index, 's'); s.state = 'run';
  for (let i = 0; i < 60 * 1.2; i++) updateAssociate(s, c2, 1 / 60);
  assert.ok(s.stuckCount >= 1, 're-sought once');
  for (let i = 0; i < 60 * 3.5; i++) updateAssociate(s, c2, 1 / 60);
  assert.ok(s.stuckCount >= 3);
  assert.equal(s.path.length, 1, 'straight run to the nearest point');
  assert.ok(s.pos.every(Number.isFinite));
});

// ---- Milestone 5 reactions ----
const DT = 1 / 60;
const tunedCtx = (edit, over = {}) => { const t = structuredClone(TUNING); edit(t); return makeCtx({ ...over, ctx: { tuning: t, director: t.director, ...(over.ctx || {}) } }); };
const inSolid = (p) => solid.some(b => {
  const cx = Math.max(b.min[0], Math.min(p[0], b.max[0])), cz = Math.max(b.min[2], Math.min(p[2], b.max[2]));
  return b.max[1] >= 0.05 && Math.hypot(p[0] - cx, p[2] - cz) < A.radius - 0.02;
});

test('down rule: with downChance 1 a killing body hit returns down (alive, health 1, token and point freed, down event); head, bash, blast, execute never down', () => {
  const ctx = tunedCtx(t => { t.associate.downChance = 1; });
  const e = placed(ctx, 'a1', -4.3, 4.88);
  ctx.tokens.request('a1', 0, 2, TUNING.director); e.state = 'telegraph';
  assert.equal(ctx.tokens.holds('a1'), true);
  assert.equal(hurtAssociate(e, 1000, ctx, 'body'), 'down');
  assert.equal(e.alive, true); assert.equal(e.health, 1); assert.equal(e.state, 'downed');
  assert.equal(ctx.tokens.holds('a1'), false, 'token freed');
  assert.equal(ctx.reserved.size, 0, 'point freed'); assert.equal(e.point, null);
  const down = ctx.events.find(v => v.type === 'down');
  assert.deepEqual([down.id, down.pos], ['a1', [e.pos[0], e.pos[1], e.pos[2]]]);
  assert.ok(ctx.events.some(v => v.type === 'bark' && v.key === 'cloneDown'));
  assert.ok(!ctx.events.some(v => v.type === 'death'));
  // Any Tobble shot downs a killing hit too.
  const t = placed(tunedCtx(x => { x.associate.downChance = 1; }), 'b1', 2.7, 4.88);
  assert.equal(hurtAssociate(t, 1000, tunedCtx(x => { x.associate.downChance = 1; }), 'tobble'), 'down');
  // Everything else kills.
  for (const kind of ['head', 'bash', 'blast', 'execute']) {
    const c = tunedCtx(x => { x.associate.downChance = 1; });
    const k = placed(c, 'k', -4.3, 4.88);
    assert.equal(hurtAssociate(k, 1000, c, kind), 'kill', kind);
    assert.equal(k.alive, false);
    assert.equal(c.events.find(v => v.type === 'death').kind, kind, 'death carries its kind');
  }
  // downChance 0 never downs, and a non-killing hit never rolls.
  const c0 = tunedCtx(x => { x.associate.downChance = 0; });
  assert.equal(hurtAssociate(placed(c0, 'z', -4.3, 4.88), 1000, c0, 'body'), 'kill');
  let draws = 0; const c1 = tunedCtx(x => { x.associate.downChance = 1; }, { ctx: { rand: () => { draws++; return 0; } } });
  assert.equal(hurtAssociate(placed(c1, 'y', -4.3, 4.88), 10, c1, 'body'), 'hit');
  assert.equal(draws, 0);
});

test('a downed Rep crawls <= 0.8 m/s away from the player when alone, never into a box, and bleeds out at 15 s with death kind bleed', () => {
  const ctx = makeCtx({ pos: [0, 0, -4] });
  const e = createAssociate({ id: 'd', pos: [-0.6, 0, 8] });
  ctx.others = [e];
  assert.equal(downAssociate(e, ctx), 'down');
  const d0 = Math.hypot(e.pos[0] - ctx.player.pos[0], e.pos[2] - ctx.player.pos[2]);
  let top = 0, t = 0, deadAt = -1;
  for (let i = 0; i < 60 * 16 && deadAt < 0; i++) {
    const before = [e.pos[0], e.pos[2]];
    updateAssociate(e, ctx, DT); t += DT;
    top = Math.max(top, Math.hypot(e.pos[0] - before[0], e.pos[2] - before[1]) / DT);
    assert.ok(!inSolid(e.pos), `step ${i}: inside a box`);
    if (!e.alive) deadAt = t;
  }
  assert.ok(top <= TUNING.associate.downedCrawl + 1e-6 && top > 0.3, `top speed ${top}`);
  assert.ok(Math.hypot(e.pos[0] - ctx.player.pos[0], e.pos[2] - ctx.player.pos[2]) > d0, 'it crawled away');
  assert.ok(deadAt >= 14.95 && deadAt <= 15.05, `bled out at ${deadAt}`);
  assert.equal(ctx.events.find(v => v.type === 'death').kind, 'bleed');
  assert.equal(e.state, 'dead');
  // With company (a calm Rep) it crawls toward it and stops beside it; with a helper kneeling it lies still.
  const c2 = makeCtx({ pos: [0, 0, -4] });
  const friend = placed(c2, 'f', -4.3, 4.88); friend.state = 'cover';
  const d = createAssociate({ id: 'd2', pos: [-4.3, 0, 8] });
  c2.others = [d, friend]; downAssociate(d, c2);
  for (let i = 0; i < 60 * 8; i++) updateAssociate(d, c2, DT);
  assert.ok(Math.hypot(d.pos[0] - friend.pos[0], d.pos[2] - friend.pos[2]) < 1.3, 'it reached company');
  const still = d.pos.slice(); d.helper = 'f';
  for (let i = 0; i < 30; i++) updateAssociate(d, c2, DT);
  assert.deepEqual(d.pos, still);
});

test('any hit on a downed Rep kills it', () => {
  const ctx = tunedCtx(t => { t.associate.downChance = 1; });
  const e = placed(ctx, 'a1', -4.3, 4.88);
  hurtAssociate(e, 1000, ctx, 'body');
  assert.equal(e.state, 'downed');
  assert.equal(hurtAssociate(e, 0.001, ctx, 'body'), 'kill');
  assert.equal(e.alive, false);
  assert.equal(ctx.events.filter(v => v.type === 'death').at(-1).kind, 'body');
  const d = createAssociate({ id: 'd', pos: [0, 0, 0] }); downAssociate(d, ctx);
  assert.equal(downAssociate(d, ctx), null, 'already down');
  assert.equal(hurtAssociate(d, 5, ctx, 'bash'), 'kill');
});

test('stagger: staggerTime 0.9 s, standing shapes, token released, no enemyShot, then cover or seek', () => {
  const ctx = makeCtx();
  const e = placed(ctx, 'a1', -4.3, 4.88);
  e.state = 'cover'; e.wait = 0; e.stateT = 0;
  let shots = 0;
  for (let i = 0; i < 400 && e.state !== 'burst'; i++) updateAssociate(e, ctx, DT);   // let it take a token and shoot
  assert.equal(e.state, 'burst');
  assert.equal(ctx.tokens.holds('a1'), true);
  ctx.events.length = 0;
  assert.equal(staggerAssociate(e, ctx), true);
  assert.equal(e.state, 'stagger'); assert.equal(ctx.tokens.holds('a1'), false);
  let t = 0;
  while (t < 0.85) { updateAssociate(e, ctx, DT); t += DT; shots += ctx.events.filter(v => v.type === 'enemyShot').length; ctx.events.length = 0; }
  assert.equal(e.state, 'stagger', 'still staggering before 0.9 s');
  associateShapes(e);
  assert.equal(e.shapes.body.b[1], HIT_SHAPES.body.by, 'standing shapes');
  assert.equal(e.shapes.head.c[1], HIT_SHAPES.head.cy);
  while (t < 0.95) { updateAssociate(e, ctx, DT); t += DT; }
  assert.ok(['cover', 'run'].includes(e.state), `then ${e.state}`);
  assert.equal(shots, 0, 'no enemyShot while staggered');
  for (const s of ['dead', 'executed', 'unused', 'downed']) { const x = placed(makeCtx(), 'x', 2.7, 4.88); x.state = s; if (s === 'dead') x.alive = false; assert.equal(staggerAssociate(x, makeCtx()), false, s); }
});

test('dive: from a kettlebell 2 m away, after 0.25 s the Rep moves >= 2 m away within 0.6 s, ends outside every box, then seeks with mustMove', () => {
  const ctx = makeCtx({ pos: [0, 0, -10] });
  const e = createAssociate({ id: 'v', pos: [0, 0, 0] });
  e.state = 'cover'; ctx.others = [e];
  const from = [2, 0.12, 0], start = e.pos.slice();
  assert.equal(diveAssociate(e, from, ctx), true);
  assert.equal(e.state, 'dive');
  let t = 0;
  while (t < 0.24) { updateAssociate(e, ctx, DT); t += DT; }
  assert.deepEqual(e.pos, start, 'the reaction delay: no movement yet');
  let seeking = false;
  const seek = e.mustMove;
  assert.equal(seek, false);
  while (t < 0.25 + 0.6 + 0.02) {
    updateAssociate(e, ctx, DT); t += DT;
    assert.ok(!inSolid(e.pos));
    if (e.state !== 'dive' && !seeking) { seeking = true; assert.ok(['run', 'cover'].includes(e.state), e.state); }
  }
  assert.ok(Math.hypot(e.pos[0] - start[0], e.pos[2] - start[2]) >= 2, 'moved >= 2 m');
  assert.ok(Math.hypot(e.pos[0] - from[0], e.pos[2] - from[2]) >= 4.5, 'and the dive went away from the kettlebell');
  assert.equal(seeking, true, 'then it seeks');
  // mustMove: the point it picks is not the one it dived from, and it holds no token or old point while diving.
  const c2 = makeCtx({ pos: [0, 0, -10] });
  const f = placed(c2, 'f', -4.3, 4.88); f.state = 'cover'; c2.others = [f];
  const old = f.point;
  c2.tokens.request('f', 0, 2, TUNING.director);
  diveAssociate(f, [-3.5, 0, 4.9], c2);
  assert.equal(c2.tokens.holds('f'), false); assert.equal(c2.reserved.size, 0); assert.equal(f.point, null);
  for (let i = 0; i < 60 * 1.0; i++) updateAssociate(f, c2, DT);
  assert.ok(f.point && f.point.index !== old.index, 'a new point');
  assert.equal(diveAssociate(f, [0, 0, 0], c2) && f.state === 'dive', true);
  assert.equal(diveAssociate(f, [0, 0, 0], c2), false, 'already diving');
});

test('spawn: a slot spawned at the sauna rises for 0.8 s with standing shapes and then seeks', () => {
  const ctx = makeCtx({ pos: [0, 0, -10] });
  const e = createAssociate({ id: 'r5', pos: [0, 0, 0] });
  e.alive = false; e.state = 'unused'; ctx.others = [e];
  const pad = R.pads[0].pos;
  spawnAssociate(e, pad, ctx);
  assert.deepEqual(e.pos, pad);
  assert.equal(e.state, 'spawn'); assert.equal(e.alive, true); assert.equal(e.health, TUNING.associate.health);
  associateShapes(e);
  assert.equal(e.shapes.body.b[1], HIT_SHAPES.body.by, 'standing shapes while rising');
  let t = 0;
  while (t < 0.78) { updateAssociate(e, ctx, DT); t += DT; }
  assert.equal(e.state, 'spawn');
  while (t < 0.85) { updateAssociate(e, ctx, DT); t += DT; }
  assert.notEqual(e.state, 'spawn');
  assert.ok(['run', 'cover'].includes(e.state), e.state);
});

test('downed shapes: a capsule along the facing from 0.2 m behind to 0.6 m in front at y 0.25 (r 0.25) and a head at the front end', () => {
  const ctx = makeCtx();
  const e = createAssociate({ id: 'd', pos: [1, 0, 2] });
  e.yaw = Math.PI / 2; ctx.others = [e];
  downAssociate(e, ctx); associateShapes(e);
  const s = e.shapes;
  assert.deepEqual(s.body.a.map(v => +v.toFixed(6)), [0.8, 0.25, 2]);
  assert.deepEqual(s.body.b.map(v => +v.toFixed(6)), [1.6, 0.25, 2]);
  assert.equal(s.body.r, 0.25);
  assert.deepEqual(s.head.c.map(v => +v.toFixed(6)), [1.6, 0.25, 2]);
  assert.equal(s.head.r, HIT_SHAPES.head.r);
});

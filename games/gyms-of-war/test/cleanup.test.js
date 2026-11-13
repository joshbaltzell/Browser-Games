import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createAssociate, updateAssociate, downAssociate, executeAssociate, releaseExecuted, diveAssociate, startRevive } from '../src/actors/associateBrain.js';
import { castRay } from '../src/combat/hits.js';
import { createTokens } from '../src/director/tokens.js';
import { coverPoints } from '../src/world/coverPoints.js';
import { buildGraph } from '../src/world/waypoints.js';
import { TUNING } from '../src/tuning.js';
import { PANEL } from '../src/dev/tuningData.js';
import { rng } from '../src/core/random.js';
import { R, BOXES, EDGES } from './fightSim.js';

const A = TUNING.associate;
const points = coverPoints(EDGES, { spacing: A.pointSpacing, cornerZone: TUNING.cover.cornerZone });
const graph = buildGraph(R.waypoints, BOXES, { radius: A.radius, linkMax: A.linkMax });
const DT = 1 / 60;
function ctxWith(pts = points) {
  const pos = [-4, 0, -10.5];
  return {
    boxes: BOXES, points: pts, graph, tokens: createTokens(), reserved: new Map(), now: 0, rand: rng(1), tokenCount: 2, events: [],
    tuning: TUNING, director: TUNING.director, others: [], started: true,
    player: { pos, chest: [pos[0], 0.6, pos[2]], head: [pos[0], 0.7, pos[2]], speed: 0, downed: false, coverNormal: [0, -1], exposed: false },
  };
}
const nearest = (x, z) => points.reduce((b, p) => (Math.hypot(p.pos[0] - x, p.pos[1] - z) < Math.hypot(b.pos[0] - x, b.pos[1] - z) ? p : b));

test('a Rep held for an execution does not absorb Doc\'s bullets: the ray passes through to the Rep behind it', () => {
  const mk = (z, state) => ({ alive: true, state, shapes: { head: { c: [0, 1.6, z], r: 0.2 }, body: { a: [0, 0.2, z], b: [0, 1.3, z], r: 0.3 } } });
  const held = mk(5, 'executed'), behind = mk(8, 'cover');
  const r = castRay([0, 1.0, 0], [0, 0, 1], 30, [], [held, behind]);
  assert.equal(r.target, behind);
  assert.equal(castRay([0, 1.0, 0], [0, 0, 1], 30, [], [mk(5, 'cover'), behind]).target.shapes.body.b[2], 5, 'a Rep in any other state still blocks');
});

test('stomping a downed Rep and letting go (Doc downed mid-stomp) keeps its bleed-out clock', () => {
  const ctx = ctxWith();
  const e = createAssociate({ id: 'd', pos: [0, 0, 0] });
  e.state = 'cover'; ctx.others = [e];
  assert.ok(downAssociate(e, ctx));
  for (let i = 0; i < 60 * 6; i++) updateAssociate(e, ctx, DT);   // 6 s of bleeding
  assert.equal(e.state, 'downed');
  const before = e.stateT;
  assert.ok(before > 5.9 && before < 6.2, `${before}`);
  assert.equal(executeAssociate(e, ctx), true);
  for (let i = 0; i < 30; i++) updateAssociate(e, ctx, DT);   // held 0.5 s
  assert.equal(releaseExecuted(e), true);
  assert.equal(e.state, 'downed');
  assert.ok(Math.abs(e.stateT - before) < 1e-9, `bleed clock ${e.stateT} vs ${before}`);
  for (let i = 0; i < 60 * (A.bleedTime - before) + 10; i++) updateAssociate(e, ctx, DT);
  assert.equal(e.alive, false, 'it bleeds out on the original clock');
  // A standing Rep let go flinches as before.
  const f = createAssociate({ id: 'f', pos: [0, 0, 0] }); f.state = 'cover';
  executeAssociate(f, ctx); releaseExecuted(f);
  assert.equal(f.state, 'flinch'); assert.equal(f.stateT, 0);
});

test('a Rep ending a dive never crouches at a cover point another Rep has reserved', () => {
  const P = nearest(-4.3, 4.88);
  const ctx = ctxWith();
  const o = createAssociate({ id: 'o', pos: [P.pos[0], 0, P.pos[1]] });
  o.point = P; o.state = 'cover';
  const e = createAssociate({ id: 'e', pos: [P.pos[0], 0, P.pos[1]] });
  e.state = 'cover'; e.point = P; ctx.reserved.set(P.index, 'e'); ctx.others = [o, e];
  assert.equal(diveAssociate(e, [P.pos[0] + 2, 0, P.pos[1]], ctx), true);
  for (const q of points) ctx.reserved.set(q.index, 'o');   // every point is taken, P included, while it dived
  e.pos[0] = P.pos[0]; e.pos[2] = P.pos[1];
  e.stateT = A.diveReaction + A.diveTime + 1; e.diveDir[0] = e.diveDir[1] = 0;
  updateAssociate(e, ctx, DT);
  assert.equal(ctx.reserved.get(P.index), 'o', 'the reservation is untouched');
  assert.notEqual(e.state, 'cover', 'it does not take the point');
  assert.equal(e.point, null);
  // With nobody else on the point, the diver may take it back, and it holds the reservation.
  const ctx2 = ctxWith();
  const g = createAssociate({ id: 'g', pos: [P.pos[0], 0, P.pos[1]] });
  g.state = 'cover'; g.point = P; ctx2.reserved.set(P.index, 'g'); ctx2.others = [g];
  diveAssociate(g, [P.pos[0] + 2, 0, P.pos[1]], ctx2);
  g.pos[0] = P.pos[0]; g.pos[2] = P.pos[1]; g.stateT = A.diveReaction + A.diveTime + 1;
  updateAssociate(g, ctx2, DT);
  if (g.state === 'cover') assert.equal(ctx2.reserved.get(P.index), 'g');
});

test('the old hard-coded fight numbers are tunables with panel rows', () => {
  const rows = new Set(PANEL.map(p => p.path));
  for (const [path, v] of [['director.slotReuse', 1.0], ['associate.kneelReach', 0.8], ['tobble.recheckTime', 0.5], ['tobble.arriveDist', 0.15]]) {
    const [g, k] = path.split('.');
    assert.equal(TUNING[g][k], v, path); assert.ok(rows.has(path), path);
  }
});

test('dead tunables and the old one-shot rev sound are gone', async () => {
  const rows = new Set(PANEL.map(p => p.path));
  for (const [g, k] of [['melee', 'revPulse'], ['feedback', 'revVolume'], ['feedback', 'tacComHz'], ['boss', 'offerGap']]) {
    assert.equal(g in TUNING && k in TUNING[g], false, `${g}.${k}`); assert.equal(rows.has(`${g}.${k}`), false);
  }
  const { createSfx } = await import('../src/audio/sfx.js');
  assert.equal(typeof createSfx, 'function');
});

test('a slot rests for director.slotReuse seconds after a death, read at use time', async () => {
  const src = await import('node:fs').then(fs => fs.readFileSync(new URL('../src/director/fight.js', import.meta.url), 'utf8'));
  assert.match(src, /tuning\.director\.slotReuse/);
  assert.doesNotMatch(src, /REUSE_AFTER\s*=/);
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SMOOTHIE_BAR as S } from '../src/world/smoothieBar.js';
import { CANCELLATION_DESK as D } from '../src/world/cancellationDesk.js';
import { KIOSK_ROW } from '../src/world/kioskRow.js';
import { ARENA_LEVELS } from '../src/world/arenas.js';
import { makeBox, pointInBoxes } from '../src/world/collide.js';
import { TUNING } from '../src/tuning.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { buildGraph, findPath } from '../src/world/waypoints.js';
import { coverPoints } from '../src/world/coverPoints.js';
import { propKind, propGeometry } from '../src/world/props.js';
import { createFight } from '../src/director/fight.js';
import { createMovement } from '../src/actors/movement.js';
import { createHealth } from '../src/combat/health.js';
import { rng } from '../src/core/random.js';
import { inGate } from '../src/run.js';

const A = TUNING.associate;
const solids = (r) => r.boxes.filter(b => b.kind !== 'floor');
const edgesOf = (r) => deriveCoverEdges(r.boxes, { ...edgeOptions(), exclude: r.coverExclude });
const graphOf = (r) => buildGraph(r.waypoints, r.boxes, { radius: A.radius, linkMax: A.linkMax });
const clear = (r, p, rad) => solids(r).every(b => {
  const cx = Math.max(b.min[0], Math.min(p[0], b.max[0])), cz = Math.max(b.min[2], Math.min(p[2], b.max[2]));
  return Math.hypot(p[0] - cx, p[2] - cz) >= rad;
});

test('the run has three arenas by name, all frozen level data', () => {
  assert.deepEqual(Object.keys(ARENA_LEVELS), ['turnstiles', 'smoothie', 'desk']);
  assert.equal(ARENA_LEVELS.turnstiles, KIOSK_ROW);
  for (const r of [S, D]) assert.ok(Object.isFrozen(r) && Object.isFrozen(r.boxes[0].min) && Object.isFrozen(r.waypoints[0]));
});

test('Smoothie Bar is 40 x 36 m with 4 m walls; every box lies inside the floor; the cover boxes are 1 m, 2.2 m or 4 m', () => {
  const floor = S.boxes.find(b => b.kind === 'floor');
  assert.deepEqual([floor.max[0] - floor.min[0], floor.max[2] - floor.min[2]], [40, 36]);
  const walls = S.boxes.filter(b => b.kind === 'wall');
  assert.equal(walls.length, 4);
  for (const w of walls) assert.equal(w.max[1], 4);
  for (const b of S.boxes) for (let a = 0; a < 3; a++) assert.ok(b.min[a] < b.max[a]);
  for (const b of S.boxes.filter(b => b.kind !== 'floor' && b.kind !== 'wall')) {
    assert.ok(b.min[0] >= floor.min[0] && b.max[0] <= floor.max[0] && b.min[2] >= floor.min[2] && b.max[2] <= floor.max[2]);
    assert.equal(b.max[1], { low: 1, tall: 2.2, pillar: 4 }[b.kind]);
  }
});

test('Smoothie Bar has the props the brief asks for: a blender bar, bowl counters, tables, menu-board pillars, planters and benches', () => {
  const kinds = new Set(solids(S).map(propKind));
  for (const k of ['bar', 'bowl', 'booth', 'menu', 'plant', 'seat']) assert.ok(kinds.has(k), k);
  assert.ok(solids(S).filter(b => propKind(b) === 'bowl').length >= 2);
  assert.ok(solids(S).filter(b => propKind(b) === 'menu').length >= 4);
});

test('Smoothie Bar signs and exit: SMOOTHIE BAR, FREE TRIAL COUNTER, a gate in the north wall', () => {
  assert.equal(S.landmark.text, 'SMOOTHIE BAR');
  assert.ok(S.signs.some(s => s.text === 'FREE TRIAL COUNTER — No commitment!*'));
  for (const s of [S.landmark, ...S.signs]) assert.ok(Math.abs(s.pos[0]) <= 20 && Math.abs(s.pos[2]) <= 18 && s.pos[1] + s.h / 2 <= 4, s.text);
  assert.deepEqual(S.exit, { pos: [-12, 0, 18], yaw: Math.PI, w: 3.4 });
});

test('Smoothie Bar starts with 5 Reps on +z stand lines of low cover, 1 m or more apart, and 1 Trainer in the open; one sauna that opens after 3 kills', () => {
  const reps = S.associates.filter(a => a.kind !== 'trainer'), trainers = S.associates.filter(a => a.kind === 'trainer');
  assert.equal(reps.length, 5);
  assert.equal(trainers.length, 1);
  assert.equal(pointInBoxes(solids(S), [trainers[0].pos[0], 1, trainers[0].pos[2]], TUNING.associate.radius * TUNING.trainer.scaleW), false);
  assert.equal(S.pads[0].shareKey, 'trainerShareSmoothie');
  assert.equal(TUNING.pad.trainerShareSmoothie, 0.5);
  assert.equal(TUNING.pad.trainerShare, 0);
  const edges = edgesOf(S);
  for (const a of reps) {
    const e = edges.find(e => e.kind === 'low' && e.normal[1] === 1 && Math.abs(e.a[1] - a.pos[2]) < 1e-9
      && a.pos[0] >= Math.min(e.a[0], e.b[0]) - 1e-9 && a.pos[0] <= Math.max(e.a[0], e.b[0]) + 1e-9);
    assert.ok(e, `${a.id} stands on a low +z edge`);
    assert.equal(pointInBoxes(solids(S), [a.pos[0], 1, a.pos[2]], A.radius), false);
  }
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) {
    assert.ok(Math.hypot(reps[i].pos[0] - reps[j].pos[0], reps[i].pos[2] - reps[j].pos[2]) >= A.reserveRadius, `${i} ${j}`);
  }
  assert.equal(S.pads.length, 1);
  assert.equal(S.pads[0].openKey, 'openAfterKillsSmoothie');
  assert.equal(TUNING.pad.openAfterKillsSmoothie, 3);
});

test('spawn, features, Tobble, saunas and crates are clear of every box and inside the room', () => {
  for (const r of [S, D]) {
    const floor = r.boxes.find(b => b.kind === 'floor');
    const inside = (p, rad) => p[0] >= floor.min[0] + rad && p[0] <= floor.max[0] - rad && p[2] >= floor.min[2] + rad && p[2] <= floor.max[2] - rad;
    for (const s of [r.spawn, r.tobble, ...Object.values(r.features), ...r.ammoCrates]) { assert.ok(clear(r, s.pos, TUNING.move.radius), `${r.name} ${JSON.stringify(s.pos)}`); assert.ok(inside(s.pos, 0.35)); }
    for (const p of r.pads) { assert.ok(clear(r, p.pos, TUNING.pad.radius) && inside(p.pos, TUNING.pad.radius), `${r.name} ${p.id}`); }
    for (const w of r.waypoints) assert.ok(clear(r, [w[0], 0, w[1]], A.radius) && inside([w[0], 0, w[1]], A.radius), `${r.name} waypoint ${w}`);
  }
});

test('every cover point is reachable from the spawn, from Tobble and from every sauna, in both new arenas', () => {
  for (const r of [S, D]) {
    const graph = graphOf(r), points = coverPoints(edgesOf(r), { spacing: A.pointSpacing, cornerZone: TUNING.cover.cornerZone });
    assert.ok(points.length > 20, r.name);
    for (const from of [r.spawn.pos, r.tobble.pos, ...r.pads.map(p => p.pos)]) {
      const lost = points.filter(p => !findPath(graph, r.boxes, [from[0], from[2]], p.pos, A.radius));
      assert.deepEqual(lost.map(p => p.index), [], `${r.name} from ${from}`);
    }
  }
});

test('Smoothie Bar has two flank routes: with the east lane walled off the path runs west, and the other way round', () => {
  const route = (extra) => {
    const bx = [...S.boxes, ...extra];
    return findPath(buildGraph(S.waypoints, bx, { radius: A.radius, linkMax: A.linkMax }), bx, [0, -9], [0, 9], A.radius);
  };
  assert.ok(route([]));
  const west = route([makeBox([7.01, 0, -1], [20, 2, 1])]);
  assert.ok(west && west.some(p => p[0] < -7), 'west lane');
  const east = route([makeBox([-20, 0, -1], [-7.01, 2, 1])]);
  assert.ok(east && east.some(p => p[0] > 7), 'east lane');
  assert.equal(route([makeBox([-20, 0, -1], [-7.01, 2, 1]), makeBox([7.01, 0, -1], [20, 2, 1])]), null, 'sealed');
});

test('the Cancellation Desk is a 24 x 20 m boss room: the desk at the far end, four low counters, two pillars, two manual saunas, no Reps, its two firing spots behind the desk', () => {
  const floor = D.boxes.find(b => b.kind === 'floor');
  assert.deepEqual([floor.max[0] - floor.min[0], floor.max[2] - floor.min[2]], [24, 20]);
  assert.equal(solids(D).filter(b => b.kind === 'low').length, 4);
  assert.equal(solids(D).filter(b => b.kind === 'pillar').length, 2);
  const desk = solids(D).find(b => propKind(b) === 'desk');
  assert.ok(desk && desk.min[2] > 5, 'the desk is at the far (+z) end');
  assert.equal(D.pads.length, 2);
  assert.equal(D.boss, true);
  assert.deepEqual(D.associates, []);
  assert.ok(Number.isFinite(D.trigger.z) && D.trigger.z < D.spawn.pos[2] + 3, 'the fight starts a few steps in (piece 3; it was a placeholder that never started)');
  assert.ok(D.pads.every(p => p.manual === true), 'the boss opens the saunas itself');
  assert.equal(D.overlord.spots.length, 2);
  assert.equal(D.landmark.text, 'CANCELLATION DESK');
  assert.ok(D.signs.some(s => s.text === 'PLEASE TAKE A NUMBER — NOW SERVING: 3'));
  assert.equal(D.exit, undefined);
});

test('props stay inside their boxes and under their tops in the new arenas, and each arena draws as one merged geometry', () => {
  for (const r of [S, D]) {
    const floor = r.boxes.find(b => b.kind === 'floor');
    for (const b of solids(r)) {
      const g = propGeometry([b]), pos = g.getAttribute('position');
      let top = -Infinity, lo = Infinity;
      for (let i = 0; i < pos.count; i++) { top = Math.max(top, pos.getY(i)); lo = Math.min(lo, pos.getY(i)); }
      assert.ok(top <= b.max[1] + 1e-6, `${r.name} ${propKind(b)} top ${top} vs ${b.max[1]}`);
      assert.ok(lo >= b.min[1] - 1e-6);
      for (let i = 0; i < pos.count; i++) assert.ok(pos.getX(i) >= b.min[0] - 0.1 && pos.getX(i) <= b.max[0] + 0.1 && pos.getZ(i) >= b.min[2] - 0.1 && pos.getZ(i) <= b.max[2] + 0.1, `${r.name} ${propKind(b)}`);
    }
    const g = propGeometry(solids(r), floor);
    assert.equal(g.getAttribute('color').count, g.getAttribute('position').count);
    assert.ok(g.index.count / 3 < 40000, `${r.name} ${g.index.count / 3} tris`);
  }
});

test('the exit gates of the Turnstiles and the Smoothie Bar are reachable from the spawn and sit on the north wall; the desk has none', () => {
  for (const r of [KIOSK_ROW, S]) {
    const floor = r.boxes.find(b => b.kind === 'floor');
    assert.equal(r.exit.pos[2], floor.max[2]);
    assert.ok(Math.abs(r.exit.pos[0]) + r.exit.w / 2 <= floor.max[0]);
    const before = [r.exit.pos[0], r.exit.pos[2] - 1.2];
    assert.ok(clear(r, [before[0], 0, before[1]], TUNING.move.radius), `${r.name}: the spot before the gate is free`);
    assert.ok(findPath(graphOf(r), r.boxes, [r.spawn.pos[0], r.spawn.pos[2]], before, A.radius), `${r.name}: a route to the gate`);
    assert.equal(inGate(r.exit, [before[0], 0, before[1]]), true);
    assert.equal(inGate(r.exit, [r.exit.pos[0], 0, r.exit.pos[2] - 3]), false, 'too far out');
    assert.equal(inGate(r.exit, [r.exit.pos[0] + r.exit.w, 0, r.exit.pos[2] - 1]), false, 'beside the door');
  }
});

// A headless Smoothie Bar fight: a real mover standing at the start, god mode, seeded.
function smoothieFight(seconds, { god = true } = {}) {
  const tuning = structuredClone(TUNING);
  if (god) tuning.health.godMode = 1;
  const edges = edgesOf(S);
  const f = createFight({ level: S, boxes: S.boxes, edges, rand: rng(7), tuning });
  const m = createMovement({ boxes: S.boxes, spawn: S.features.open.pos, tuning: tuning.move, coverTuning: tuning.cover, coverEdges: edges });
  const health = createHealth(tuning.health);
  const log = [];
  const idle = { moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false };
  for (let i = 0; i < Math.round(seconds * 60); i++) {
    m.update(idle, 1 / 60);
    const ev = f.step(1 / 60, { m, health, aim: { lens: [m.pos[0], 1.55, m.pos[2]], dir: [0, 0, 1], active: false } });
    health.update(1 / 60, { standIn: !f.tobble });
    for (const e of ev) log.push({ t: f.now, ...e });
  }
  return { f, m, log, tuning };
}

test('a headless Smoothie Bar fight: five Reps and a Trainer, the lockdown starts, everyone stays finite and inside the room', () => {
  const { f, log } = smoothieFight(20);
  assert.equal(f.enemies.filter(e => e.state !== 'unused').length, 6);
  assert.ok(f.started);
  assert.ok(log.some(e => e.type === 'enemyShot'), 'the Reps shoot');
  for (const e of f.enemies) for (const v of e.pos) assert.ok(Number.isFinite(v));
  for (const e of f.enemies.filter(e => e.alive)) assert.ok(Math.abs(e.pos[0]) <= 20 && Math.abs(e.pos[2]) <= 18);
});

test('the sauna stays dormant until the third kill, then opens; the fight clears only after the sauna is spent or closed', () => {
  const { f, m } = smoothieFight(1);
  const health = createHealth();
  const idle = { moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false };
  const step = () => { m.update(idle, 1 / 60); return f.step(1 / 60, { m, health, aim: { lens: [0, 1.55, 0], dir: [0, 0, 1], active: false } }); };
  const alive = () => f.enemies.filter(e => e.alive && e.state !== 'unused');
  for (let k = 0; k < 2; k++) { f.hurt(alive()[0], 999, 'head'); for (let i = 0; i < 5; i++) step(); }
  assert.equal(f.pads[0].state, 'dormant', 'two kills: still dormant');
  f.hurt(alive()[0], 999, 'head');
  for (let i = 0; i < 5; i++) step();
  assert.equal(f.pads[0].state, 'open', 'three kills: open');
  assert.equal(f.clear, false);
  f.forceClear();
  let cleared = false;
  for (let i = 0; i < 10 && !cleared; i++) cleared = step().some(e => e.type === 'clear');
  assert.ok(cleared && f.clear);
});

test('the Cancellation Desk: nothing opens or spawns on its own (the saunas are manual and no Rep starts); the Overlord is its one starting enemy', () => {
  const edges = edgesOf(D);
  const f = createFight({ level: D, boxes: D.boxes, edges, rand: rng(1) });
  const m = createMovement({ boxes: D.boxes, spawn: D.features.desk.pos, coverEdges: edges });
  const health = createHealth();
  const idle = { moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false };
  for (let i = 0; i < 60 * 40; i++) { m.update(idle, 1 / 60); f.step(1 / 60, { m, health, aim: { lens: [0, 1.55, 0], dir: [0, 0, 1], active: false } }); }
  assert.ok(f.pads.every(p => p.state === 'dormant'), 'even 40 s into the fight no sauna opens by itself');
  assert.deepEqual(f.enemies.filter(e => e.alive).map(e => e.kind), ['boss']);
  assert.ok(f.tobble && Number.isFinite(f.tobble.pos[0]));
});

// The Personal Trainer (the rusher): it reaches Doc and swings, every blow is telegraphed first, and every existing interaction works on it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SMOOTHIE_BAR as S } from '../src/world/smoothieBar.js';
import { KIOSK_ROW } from '../src/world/kioskRow.js';
import { TUNING } from '../src/tuning.js';
import { PANEL } from '../src/dev/tuningData.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { createFight } from '../src/director/fight.js';
import { createMovement } from '../src/actors/movement.js';
import { createHealth } from '../src/combat/health.js';
import { castRay, spreadDir } from '../src/combat/hits.js';
import { createArsenal } from '../src/combat/arsenal.js';
import { fireStance, muzzleOf } from '../src/combat/stance.js';
import { shotDamage } from '../src/combat/targets.js';
import { lineOfSight } from '../src/world/coverPoints.js';
import { meleeTarget } from '../src/combat/melee.js';
import { createAssociate, spawnAssociate, associateShapes } from '../src/actors/associateBrain.js';
import { trainerRadius, trainerHeight } from '../src/actors/trainerBrain.js';
import { rng } from '../src/core/random.js';

const DT = 1 / 60;
const T = TUNING.trainer;
const IDLE = { moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false };
const EDGES = deriveCoverEdges(S.boxes, { ...edgeOptions(), exclude: S.coverExclude });
const NEAR_COVER = [-7.5, 0, -13.4];   // behind the start planter, facing +z
const trainer = (id, pos) => ({ id, kind: 'trainer', pos });

// A headless Smoothie Bar fight with a real mover, seeded. `assoc` replaces the level's enemies, `tobble` keeps Tobble, `pads` keeps the saunas.
function rig({ assoc = [trainer('t1', [-12, 0, 6])], tobble = false, pads = [], at = NEAR_COVER, tune, seed = 3, god = false } = {}) {
  const tuning = structuredClone(TUNING);
  if (god) tuning.health.godMode = 1;
  if (tune) tune(tuning);
  const level = { ...S, associates: assoc, pads, tobble: tobble ? S.tobble : undefined };
  const f = createFight({ level, boxes: S.boxes, edges: EDGES, rand: rng(seed), tuning });
  const m = createMovement({ boxes: S.boxes, spawn: at, tuning: tuning.move, coverTuning: tuning.cover, coverEdges: EDGES });
  const health = createHealth(tuning.health);
  const log = [];
  const r = { f, m, health, log, tuning, level };
  r.step = (intent = IDLE) => {
    m.update(intent, DT);
    const ev = f.step(DT, { m, health, aim: { lens: [m.pos[0], m.pos[1] + 1.55, m.pos[2]], dir: [0, 0, 1], active: false } });
    health.update(DT, { standIn: !f.tobble });
    for (const e of ev) log.push({ t: f.now, ...e });
    return ev;
  };
  r.run = (seconds, each, intent) => {
    const n = Math.round(seconds / DT);
    for (let i = 0; i < n; i++) { r.step(typeof intent === 'function' ? intent(i) : intent); if (each) each(i, r); }
    return r;
  };
  r.t = (id = 't1') => f.enemies.find(e => e.id === id);
  return r;
}

// Steps until the trainer is in `state` (or `max` seconds pass). Returns whether it got there.
function until(r, state, max = 20, id = 't1') {
  for (let i = 0; i < Math.round(max / DT); i++) { if (r.t(id).state === state) return true; r.step(); }
  return r.t(id).state === state;
}

test('a Trainer is a slot kind: the level starts one, it holds no cover point or token, its shapes and capsule are 1.2 wide and 1.1 tall', () => {
  const r = rig({ assoc: [{ id: 'a1', pos: [-8.3, 0, 10.88] }, trainer('t1', [-12, 0, 6])] });
  const [rep, tr] = r.f.enemies;
  assert.equal(rep.kind, 'associate'); assert.equal(tr.kind, 'trainer');
  assert.equal(tr.health, T.health);
  assert.equal(tr.state, 'idle');
  assert.equal(r.f.reserved.size, 1, 'only the Rep claimed a cover point');
  assert.ok(!r.f.reserved.has(undefined));
  assert.ok(Math.abs(trainerRadius() - TUNING.associate.radius * 1.2) < 1e-9 && Math.abs(trainerHeight() - TUNING.associate.height * 1.1) < 1e-9);
  assert.ok(tr.shapes.head.c[1] > rep.shapes.head.c[1] * 1.05 && tr.shapes.body.r > rep.shapes.body.r * 1.1);
  const kinds = r.f.enemies.map(e => e.kind);
  assert.equal(kinds.filter(k => k === 'trainer').length, 1);
  // The Smoothie Bar level data starts exactly one of each, and Kiosk Row none.
  assert.equal(S.associates.filter(a => a.kind === 'trainer').length, 1);
  assert.equal(KIOSK_ROW.associates.filter(a => a.kind === 'trainer').length, 0);
});

test('it runs at a Doc tucked behind low cover and swings: windup, swing, recover, all in order, and Doc takes the blow', () => {
  const r = rig({ tune: t => { t.health.godMode = 0; } });
  r.step({ ...IDLE, moveY: -1, tap: true });
  assert.ok(r.m.state === 'cover' || r.m.state === 'coverSlide' || r.m.state === 'move');
  const seen = [];
  let last = '';
  r.run(14, () => { const s = r.t().state; if (s !== last) { seen.push(s); last = s; } });
  assert.ok(seen.includes('run') && seen.includes('windup') && seen.includes('swing') && seen.includes('recover'), seen.join(' '));
  assert.ok(seen.indexOf('windup') < seen.indexOf('swing') && seen.indexOf('swing') < seen.indexOf('recover'));
  const hit = r.log.find(e => e.type === 'playerHit' && e.melee);
  assert.ok(hit, 'Doc was hit');
  assert.equal(hit.amount, T.damage);
  assert.equal(hit.id, 't1');
  assert.ok(r.health.hp < TUNING.health.max);
  assert.ok(r.log.some(e => e.type === 'bark' && e.key === 'trainerWindup'), 'the HUP! bark');
});

test('the telegraph always precedes damage: every swing follows a telegraph of at least windup seconds, even with three Trainers on Doc', () => {
  const r = rig({ god: true, assoc: [trainer('t1', [-12, 0, 6]), trainer('t2', [12, 0, 6]), trainer('t3', [0, 0, 8])] });
  r.run(40);
  const tele = new Map(), swings = r.log.filter(e => e.type === 'trainerSwing');
  assert.ok(swings.length >= 6, `${swings.length} swings`);
  const events = r.log.filter(e => e.type === 'telegraph' || e.type === 'trainerSwing');
  for (const e of events) {
    if (e.type === 'telegraph') { assert.equal(e.kind, 'trainer'); assert.ok(e.time >= T.windup - 1e-9); tele.set(e.id, e); continue; }
    const t0 = tele.get(e.id);
    assert.ok(t0, `${e.id} swung without a telegraph`);
    assert.ok(e.t - t0.t >= T.windup - 1e-9, `${e.id}: ${(e.t - t0.t).toFixed(3)} s of telegraph`);
    tele.delete(e.id);   // one telegraph, one swing
  }
  // Every melee hit on Doc comes in the step of a swing event, and no hit lands without one.
  for (const h of r.log.filter(e => e.type === 'playerHit' && e.melee)) assert.ok(swings.some(s => s.t === h.t && s.id === h.id));
});

test('two Trainers never land a blow within swingGap of each other', () => {
  const r = rig({ god: true, assoc: [trainer('t1', [-12, 0, 6]), trainer('t2', [-11, 0, 6]), trainer('t3', [-10, 0, 7])] });
  r.run(40);
  const times = r.log.filter(e => e.type === 'trainerSwing').map(e => e.t).sort((a, b) => a - b);
  assert.ok(times.length >= 6);
  for (let i = 1; i < times.length; i++) assert.ok(times[i] - times[i - 1] >= T.swingGap - 1e-9, `${times[i] - times[i - 1]}`);
});

test('a swing that Doc has left whiffs: roll out of reach during the windup and the blow lands on nothing', () => {
  const r = rig({ at: [0, 0, -8], assoc: [trainer('t1', [0, 0, -5])], tune: t => { t.health.godMode = 0; } });
  assert.ok(until(r, 'windup'));
  r.m.place([0, 0, -12], 0);
  r.run(2);
  assert.ok(r.log.some(e => e.type === 'trainerSwing'));
  assert.ok(!r.log.some(e => e.type === 'playerHit'));
  assert.equal(r.health.hp, TUNING.health.max);
});

test('a hit on Doc throws him back and staggers him: the knocked state, no shooting, then move again', () => {
  const r = rig({ at: [0, 0, -8], assoc: [trainer('t1', [0, 0, -6.3])], tune: t => { t.health.godMode = 0; } });
  assert.ok(until(r, 'swing'));
  const z0 = r.m.pos[2];
  r.step();
  assert.equal(r.m.state, 'knocked');
  r.run(T.knockTime + 0.05);
  assert.notEqual(r.m.state, 'knocked');
  assert.ok(r.m.pos[2] < z0 - T.knockback * 0.5, `moved ${z0 - r.m.pos[2]} m back`);
});

test('bash staggers it and cancels a windup: no blow follows, then it runs again', () => {
  const r = rig({ at: [0, 0, -8], assoc: [trainer('t1', [0, 0, -4.8])], tune: t => { t.health.godMode = 0; } });
  assert.ok(until(r, 'windup'));
  r.run(0.2);
  const e = r.t();
  assert.equal(meleeTarget('bash', [0, 0, -8], 0, r.f.enemies, S.boxes), e, 'the bash cone finds it');
  assert.equal(r.f.bash(e), 'hit');
  r.step();
  assert.equal(e.state, 'stagger');
  assert.equal(e.health, T.health - TUNING.melee.bashDamage);
  r.m.place([0, 0, -12], 0);
  r.run(T.staggerTime + 0.1);
  assert.ok(!r.log.some(e2 => e2.type === 'trainerSwing'), 'the windup never finished');
  assert.ok(!r.log.some(e2 => e2.type === 'playerHit'));
  assert.equal(e.state, 'run');
  // A bash in the recovery staggers too.
  const q = rig({ at: [0, 0, -8], assoc: [trainer('t1', [0, 0, -6.3])], tune: t => { t.health.godMode = 1; } });
  assert.ok(until(q, 'recover'));
  assert.equal(q.f.bash(q.t()), 'hit'); q.step();
  assert.equal(q.t().state, 'stagger');
});

test('Cheat Day takes it: held still (a windup ends), no blow, and the bite kills it (death kind execute)', () => {
  const r = rig({ at: [0, 0, -8], assoc: [trainer('t1', [0, 0, -5.4])], god: true });
  assert.ok(until(r, 'windup'));
  assert.equal(meleeTarget('cutter', [0, 0, r.t().pos[2] - 0.9], 0, r.f.enemies, S.boxes), r.t(), 'the cutter finds it');
  assert.equal(r.f.beginExecution(r.t()), true);
  const n = r.log.filter(e => e.type === 'trainerSwing').length;
  r.run(TUNING.melee.cutTime + 0.5);
  assert.equal(r.log.filter(e => e.type === 'trainerSwing').length, n, 'no blow from a held Trainer');
  assert.equal(r.t().state, 'executed');
  assert.equal(r.f.finishExecution(r.t()), 'kill');
  r.step();
  const d = r.log.find(e => e.type === 'death');
  assert.equal(d.kind, 'execute'); assert.equal(d.id, 't1');
  assert.ok(r.log.some(e => e.type === 'bark' && e.key === 'trainerDeath'));
  assert.equal(r.t().alive, false);
  // The stomp refuses a standing Trainer only through the finish rule (downed only); the cutter is the way.
  assert.equal(meleeTarget('finish', [0, 0, -4], 0, r.f.enemies, S.boxes), null);
});

test('Doc downed mid-execution lets the Trainer go; a dead or diving one cannot be held', () => {
  const r = rig({ at: [0, 0, -8], assoc: [trainer('t1', [0, 0, -5.4])], god: true });
  r.run(0.1);
  assert.equal(r.f.beginExecution(r.t()), true);
  assert.equal(r.f.beginExecution(r.t()), false, 'already held');
  r.f.releaseExecution(r.t());
  assert.equal(r.t().state, 'recover');
  r.f.hurt(r.t(), 1e6, 'head'); r.step();
  assert.equal(r.f.beginExecution(r.t()), false, 'dead');
});

test('headshots: the head sphere is hit and takes the head multiplier; a Regret burst kills it; it never downs', () => {
  const r = rig({ god: true, assoc: [trainer('t1', [0, 0, -3])], at: [0, 0, -8] });
  r.run(0.1);
  const e = r.t();
  const aimAt = (c) => { const from = [0, 1.4, -8], l = Math.hypot(c[0] - from[0], c[1] - from[1], c[2] - from[2]); return castRay(from, [(c[0] - from[0]) / l, (c[1] - from[1]) / l, (c[2] - from[2]) / l], 60, S.boxes, r.f.enemies); };
  const head = aimAt(e.shapes.head.c), body = aimAt([e.pos[0], 1.0, e.pos[2]]);
  assert.equal(head.kind, 'head'); assert.equal(head.target, e);
  assert.equal(body.kind, 'body');
  assert.equal(r.f.hurt(e, 32, 'head'), 'hit');
  assert.equal(e.health, T.health - 32);
  // 130 hp: five headshots and a body shot.
  for (let i = 0; i < 3; i++) r.f.hurt(e, 32, 'head');
  assert.equal(r.f.hurt(e, 32, 'head'), 'kill');
  r.step();
  assert.ok(r.log.some(e2 => e2.type === 'death' && e2.kind === 'head'));
  // A lethal body hit always kills: no 35% down chance.
  for (const seed of [1, 2, 3, 4, 5, 6]) {
    const q = rig({ assoc: [trainer('t1', [0, 0, -3])], seed, at: [0, 0, -8] });
    assert.equal(q.f.hurt(q.t(), 1000, 'body'), 'kill', `seed ${seed}`);
  }
});

test('kettlebells: a blast inside the kill radius kills it; further out it hurts; with diveChance 1 it dives clear and gets back to running', () => {
  const r = rig({ at: [0, 0, -14], assoc: [trainer('t1', [0, 0, -3])], tune: t => { t.trainer.diveChance = 0; } });
  r.f.throwGrenade([0.5, 0.5, -3], [0, 0, 0]);
  r.run(2);
  const ex = r.log.find(e => e.type === 'explode');
  assert.ok(ex && ex.kills === 1);
  assert.equal(r.log.find(e => e.type === 'death').kind, 'blast');
  // Outside the kill radius: hurt, not dead.
  const h = rig({ at: [0, 0, -14], assoc: [trainer('t1', [0, 0, -3])], tune: t => { t.trainer.diveChance = 0; t.trainer.runSpeed = 0; t.grenade.fuse = 0.05; } });
  h.f.throwGrenade([2.2, 0.5, -3], [0, 0, 0]);
  h.run(0.3);
  assert.ok(h.t().alive && h.t().health < T.health, `${h.t().health}`);
  // The dive.
  const d = rig({ at: [0, 0, -14], assoc: [trainer('t1', [0, 0, -3])], tune: t => { t.trainer.diveChance = 1; } });
  d.run(0.3);
  d.f.throwGrenade([0.6, 0.5, -3], [0, 0, 0]);
  const states = [];
  d.run(3, () => { const s = d.t().state; if (states[states.length - 1] !== s) states.push(s); });
  assert.ok(states.includes('dive'), states.join(' '));
  assert.ok(d.t().alive, 'it dove clear of the blast');
  assert.equal(states[states.length - 1], 'run');
  assert.ok(d.log.some(e => e.type === 'bark' && e.key === 'dive'));
  // A dive aborts a windup (no blow): trainer already winding up when the bell is thrown.
  const w = rig({ at: [0, 0, -8], assoc: [trainer('t1', [0, 0, -5.4])], tune: t => { t.trainer.diveChance = 1; t.health.godMode = 1; } });
  assert.ok(until(w, 'windup'));
  const p = w.t().pos;
  w.f.throwGrenade([p[0] + 0.3, 0.5, p[2]], [0, 0, 0]);
  w.run(0.9);
  assert.equal(w.t().state, 'dive');
});

test('Tobble: it runs at Tobble when he is much nearer than Doc, and at Doc otherwise; with Doc down it goes for Tobble and its swing hurts him', () => {
  const near = rig({ tobble: true, at: [-18, 0, 15], assoc: [trainer('t1', [S.tobble.pos[0] + 3, 0, S.tobble.pos[2] + 4])], god: true });
  near.run(0.3);
  assert.equal(near.t().target, 'tobble', 'Tobble is far nearer than Doc');
  const far = rig({ tobble: true, at: NEAR_COVER, assoc: [trainer('t1', [-12, 0, 6])], god: true });
  far.run(0.3);
  assert.equal(far.t().target, 'player');
  const q = rig({ tobble: true, at: [-7.5, 0, -13.4], assoc: [trainer('t1', [S.tobble.pos[0] + 0.5, 0, S.tobble.pos[2] + 2.2])], tune: t => { t.tobble.enabled = 1; } });
  q.health.damage(1e6); q.m.down();
  q.f.tobble.pos[0] = S.tobble.pos[0]; q.f.tobble.pos[2] = S.tobble.pos[2];
  let minHp = q.f.tobble.hp;
  q.run(8, () => { minHp = Math.min(minHp, q.f.tobble.hp); });
  assert.ok(q.log.some(e => e.type === 'tobbleHit' && e.id === 't1'), 'a swing landed on Tobble');
  assert.ok(minHp <= q.f.tobble.cfg.health - T.tobbleDamage + 1e-9, `Tobble's hp fell to ${minHp}`);
  const firstDoc = q.log.find(e => e.type === 'playerHit');
  assert.ok(!firstDoc || firstDoc.t > q.log.find(e => e.type === 'tobbleHit').t, 'a downed Doc is not hit: Tobble took the first blow');
  assert.ok(q.log.some(e => e.type === 'trainerSwing' && e.target === 'tobble'));
});

test('Tobble shoots it: with Doc tucked beside him it loses health on the way in (his shots go through the Rep hit path, kind tobble)', () => {
  const r = rig({ tobble: true, at: NEAR_COVER, assoc: [trainer('t1', [-12, 0, 6])], god: true, tune: t => { t.trainer.runSpeed = 3; } });
  r.step({ ...IDLE, moveY: -1, tap: true });
  let hurt = false;
  r.run(8, () => { if (r.t().health < T.health) hurt = true; });
  assert.ok(hurt || !r.t().alive, `trainer health ${r.t().health}`);
});

test('restart: the fight reset puts the start Trainer back at its start (idle, full health, no windup), clears spawned ones and keeps kinds straight', () => {
  const r = rig({ god: true, assoc: [{ id: 'a1', pos: [-8.3, 0, 10.88] }, trainer('t1', [-12, 0, 6])] });
  const t = r.f.spawnTrainer([0, 0, 8]);
  assert.ok(t && t.kind === 'trainer');
  r.run(6);
  r.f.hurt(r.t(), 1e6, 'head');
  r.f.reset(); r.m.place(NEAR_COVER, 0);
  const e = r.t();
  assert.deepEqual([e.state, e.alive, e.health, e.kind, e.pos[0], e.pos[2]], ['idle', true, T.health, 'trainer', -12, 6]);
  assert.equal(r.f.enemies[2].state, 'unused'); assert.equal(r.f.enemies[2].kind, 'associate');
  assert.equal(r.f.enemies.filter(x => x.alive).length, 2);
  assert.equal(e.strikeAt, -1);
  // Do it again with the other order: a Rep slot that was a Trainer is a Rep again.
  r.f.spawnTrainer([0, 0, 8]);
  r.f.reset();
  assert.ok(r.f.enemies.slice(2).every(x => x.kind === 'associate' && !x.alive));
  const swings = r.log.filter(x => x.type === 'trainerSwing').length;
  r.run(0.2);
  assert.equal(r.log.filter(x => x.type === 'trainerSwing').length, swings);
});

test('both down is a checkpoint with a Trainer in the room: one checkpoint event', () => {
  const r = rig({ tobble: true, at: [0, 0, -8], assoc: [trainer('t1', [0, 0, -3])] });
  r.health.damage(1e6); r.m.down();
  r.f.hurtTobble(1e6);
  r.run(0.2);
  assert.equal(r.log.filter(e => e.type === 'checkpoint').length, 1);
});

test('saunas spawn the configured mix: share 0 is all Reps, share 1 all Trainers up to maxAlive (never more), then Reps', () => {
  const pads = [{ ...S.pads[0] }];
  const spawnKinds = (share, extra = () => {}) => {
    const r = rig({ god: true, assoc: [{ id: 'a1', pos: [-8.3, 0, 10.88] }], pads, tune: t => { t.pad.trainerShareSmoothie = share; t.pad.openAfterKillsSmoothie = 0; t.pad.interval = 1; t.pad.maxAlive = 8; extra(t); } });
    let peak = 0;
    r.run(30, () => { peak = Math.max(peak, r.f.enemies.filter(e => e.alive && e.kind === 'trainer').length); });
    return { kinds: r.f.enemies.filter(e => e.state !== 'unused').map(e => e.kind), peak, r };
  };
  const none = spawnKinds(0);
  assert.equal(none.peak, 0);
  const all = spawnKinds(1);
  assert.equal(all.peak, T.maxAlive, 'capped at trainer.maxAlive');
  assert.ok(all.kinds.includes('associate'), 'the rest of the mix is Reps');
  const two = spawnKinds(1, t => { t.trainer.maxAlive = 2; });
  assert.equal(two.peak, 2);
  const zero = spawnKinds(1, t => { t.trainer.maxAlive = 0; });
  assert.equal(zero.peak, 0);
  // Turnstiles saunas make no Trainers by default.
  assert.equal(TUNING.pad.trainerShare, 0);
});

test('no NaN at the extremes of every trainer slider: three Trainers, Tobble and Doc for 8 s', () => {
  const rows = PANEL.filter(p => p.path.startsWith('trainer.'));
  assert.ok(rows.length >= 25);
  for (const row of rows) for (const v of [row.min, row.max]) {
    const r = rig({ tobble: true, god: true, assoc: [trainer('t1', [-12, 0, 6]), trainer('t2', [12, 0, 6]), trainer('t3', [-6, 0, -10])], tune: (t) => { t.trainer[row.path.slice(8)] = v; } });
    r.run(8);
    for (const e of r.f.enemies) {
      for (const x of [...e.pos, e.yaw, e.health, e.stateT]) assert.ok(Number.isFinite(x), `${row.path}=${v}: ${e.id} ${e.state}`);
      for (const x of [...e.shapes.head.c, e.shapes.head.r, e.shapes.body.r]) assert.ok(Number.isFinite(x), `${row.path}=${v}: shapes`);
    }
    for (const x of [...r.m.pos, r.health.hp, ...r.f.tobble.pos, r.f.tobble.hp]) assert.ok(Number.isFinite(x), `${row.path}=${v}: Doc or Tobble`);
  }
});

test('a Trainer path around the planters: from the far corner it reaches Doc, never ends inside a box', () => {
  const r = rig({ god: true, at: [14, 0, -13], assoc: [trainer('t1', [-18, 0, 16])] });
  let arrived = null;
  r.run(20, (i, rr) => { if (arrived === null && rr.log.some(e => e.type === 'trainerSwing')) arrived = rr.f.now; });
  assert.ok(arrived !== null && arrived < 14, `first swing at ${arrived}`);
  const e = r.t(), rad = trainerRadius();
  for (const b of S.boxes.filter(b => b.kind !== 'floor' && b.max[1] > 0.5)) {
    const cx = Math.max(b.min[0], Math.min(e.pos[0], b.max[0])), cz = Math.max(b.min[2], Math.min(e.pos[2], b.max[2]));
    assert.ok(Math.hypot(e.pos[0] - cx, e.pos[2] - cz) >= rad - 0.05 || b.max[1] < 0.05, 'outside every box');
  }
});

test('createAssociate and spawnAssociate: kind is carried; Rep slots are unchanged (state, health, shapes)', () => {
  const rep = createAssociate({ id: 'a', pos: [0, 0, 0] });
  assert.equal(rep.kind, 'associate'); assert.equal(rep.health, TUNING.associate.health);
  const slot = createAssociate({ id: 'x', pos: [0, 0, 0] });
  spawnAssociate(slot, [1, 0, 1], { player: { pos: [0, 0, 0] }, tuning: TUNING }, 'trainer');
  assert.deepEqual([slot.kind, slot.state, slot.health], ['trainer', 'spawn', T.health]);
  spawnAssociate(slot, [1, 0, 1], { player: { pos: [0, 0, 0] }, tuning: TUNING });
  assert.deepEqual([slot.kind, slot.health], ['associate', TUNING.associate.health]);
  associateShapes(slot);
  assert.equal(slot.shapes.body.r, createAssociate({ id: 'y', pos: [0, 0, 0] }).shapes.body.r);
});

// ---- The view ----
import { pickTrainerClip, createAssociateView, faceOf, associateFacing } from '../src/actors/associateView.js';
import { ENEMY_COLORS, ASSOCIATE, TRAINER } from '../src/actors/associate.js';
import { CLIPS } from '../src/actors/poses.js';

test('the Trainer view: its clip per state, an angry face on the charge, and the colourway table both kinds read from', () => {
  const E = (state, o = {}) => ({ id: 't', kind: 'trainer', state, alive: true, ...o });
  const want = { run: 'run', windup: 'throw', swing: 'throw', stagger: 'flinch', executed: 'flinch', dive: 'roll', idle: 'idle', spawn: 'idle', recover: 'idle' };
  for (const [s, c] of Object.entries(want)) assert.equal(pickTrainerClip(E(s)), c, s);
  for (const s of ['run', 'windup', 'swing']) assert.equal(faceOf(E(s)), 'angry', s);
  assert.equal(faceOf(E('stagger')), 'scared'); assert.equal(faceOf(E('recover')), 'smug');
  assert.equal(associateFacing(E('run', { yaw: 1.3, point: null, path: [[5, 5]], pathI: 0, pos: [0, 0, 0] })), 1.3);
  assert.equal(ASSOCIATE.colors, ENEMY_COLORS.associate);
  assert.equal(TRAINER.colors, ENEMY_COLORS.trainer);
  assert.notEqual(ENEMY_COLORS.trainer.shirt, ENEMY_COLORS.associate.shirt);
  assert.equal(TRAINER.outfit.collar, false); assert.equal(TRAINER.outfit.lanyard, false);
});

test('a view builds the Trainer character only when its slot holds one, scales it 1.2 wide and 1.1 tall, raises the kettlebell through the windup, and swaps back for a Rep', () => {
  const e = createAssociate({ id: 'v', pos: [0, 0, 0] });
  const v = createAssociateView(e);
  for (let i = 0; i < 5; i++) v.update(1, DT);
  assert.equal(v.kind, 'associate');
  assert.equal(v.group.children.length, 1, 'only the Rep character is built');
  spawnAssociate(e, [0, 0, 0], { player: { pos: [0, 0, 5] }, tuning: TUNING }, 'trainer');
  e.state = 'run';
  v.update(1, DT);
  assert.equal(v.kind, 'trainer');
  const chars = v.group.children.filter(c => c.name === 'trainer' || c.name === 'associate');
  const tr = chars.find(c => c.name === 'trainer'), rep = chars.find(c => c.name === 'associate');
  assert.equal(tr.visible, true); assert.equal(rep.visible, false);
  assert.deepEqual([tr.scale.x, tr.scale.y, tr.scale.z], [T.scaleW, T.scaleH, T.scaleW]);
  // The windup: the throw clip is held at its raise; the glint shows while the view is told to glint.
  e.state = 'windup'; e.stateT = 0;
  v.glint(true);
  for (let i = 0; i < 40; i++) { e.stateT += DT; v.update(1, DT); }
  const glint = tr.getObjectByName('glint');
  assert.equal(glint.visible, true);
  const tip = v.tip();
  assert.ok(tip.every(Number.isFinite));
  e.state = 'swing'; e.stateT = 0;
  v.update(1, DT);
  assert.equal(glint.visible, false, 'no glint once it swings');
  assert.ok(CLIPS.throw.duration > 0);
  // A Rep again.
  e.alive = false; e.state = 'dead';
  v.update(1, DT * 100);
  spawnAssociate(e, [0, 0, 0], { player: { pos: [0, 0, 5] }, tuning: TUNING });
  v.update(1, DT);
  assert.equal(v.kind, 'associate');
  assert.equal(rep.visible, true); assert.equal(tr.visible, false);
  assert.deepEqual([rep.scale.x, rep.scale.y], [1, 1]);
});

test('Doc\'s knocked state: thrown back along the direction for knockback metres over knockTime, no fire stance, back to move; not from a roll, an execution or while downed', () => {
  const m = createMovement({ boxes: S.boxes, spawn: [0, 0, -8], coverEdges: EDGES });
  m.update(IDLE, DT);
  assert.equal(m.knock(0, -1, T.knockback, T.knockTime), true);
  assert.equal(m.state, 'knocked');
  const z0 = m.pos[2];
  for (let i = 0; i < Math.round((T.knockTime + 0.1) / DT); i++) m.update(IDLE, DT);
  assert.equal(m.state, 'move');
  assert.ok(Math.abs((z0 - m.pos[2]) - T.knockback) < 0.05, `${z0 - m.pos[2]}`);
  for (const st of ['roll', 'execute', 'downed']) {
    const q = createMovement({ boxes: S.boxes, spawn: [0, 0, -8], coverEdges: EDGES });
    if (st === 'roll') q.update({ ...IDLE, tap: true, moveY: 1 }, DT); else if (st === 'execute') q.execute([0, 1], 1); else q.down();
    assert.equal(q.state, st);
    assert.equal(q.knock(0, -1, 1, 0.3), false, st);
  }
});

// ---- A whole Smoothie Bar fight ----
// A careful Doc: tucks at the start planter, pops to shoot the nearest enemy (Trainers first once they are inside 12 m, at the head) and tucks
// again whenever a Rep is charging or bursting, with a perfect trigger finger apart from the Regret's own spread. Reps, the Trainer, the sauna and Tobble are the real ones.
function playSmoothieBar(seed, { seconds = 150, sloppy = false } = {}) {
  const r = rig({ assoc: S.associates, pads: S.pads, tobble: true, seed, tune: t => { t.health.godMode = 0; } });
  const ars = createArsenal(), rand = rng(99 + seed), mu = [0, 0, 0];
  const out = { seed, clearT: null, downT: null, swings: 0, landed: 0, trainerKills: 0, repKills: 0, hpLost: 0, minHp: 100 };
  for (let i = 0; i < seconds * 60 && out.clearT === null && out.downT === null; i++) {
    const alive = r.f.enemies.filter(e => e.alive && e.state !== 'unused' && e.state !== 'spawn');
    const m = r.m, fresh = [];
    let tgt = null, best = Infinity;
    for (const e of alive) { const d = Math.hypot(e.pos[0] - m.pos[0], e.pos[2] - m.pos[2]), w = e.kind === 'trainer' ? d - 6 : d; if (w < best) { best = w; tgt = e; } }
    const yaw = tgt ? Math.atan2(tgt.pos[0] - m.pos[0], tgt.pos[2] - m.pos[2]) : 0;
    const loud = alive.some(e => e.kind !== 'trainer' && (e.state === 'telegraph' || e.state === 'burst'));
    const rush = alive.some(e => e.kind === 'trainer' && Math.hypot(e.pos[0] - m.pos[0], e.pos[2] - m.pos[2]) < 12);
    const intent = { moveX: 0, moveY: i === 0 ? -1 : 0, camYaw: i === 0 ? 0 : yaw, aim: !!tgt && i > 0 && (rush || !loud), sprint: false, tap: i === 0 };
    const stance = (m.update(intent, DT), fireStance(m));
    let fire = false, dir = null;
    if (tgt && stance === 'aim') {
      muzzleOf(m, stance, yaw, TUNING.combat, mu);
      const c = tgt.kind === 'trainer' && !sloppy ? tgt.shapes.head.c : [tgt.pos[0], (tgt.shapes.body.a[1] + tgt.shapes.body.b[1]) / 2, tgt.pos[2]];
      const l = Math.hypot(c[0] - mu[0], c[1] - mu[1], c[2] - mu[2]);
      dir = [(c[0] - mu[0]) / l, (c[1] - mu[1]) / l, (c[2] - mu[2]) / l];
      fire = lineOfSight(S.boxes, mu, c);
    }
    for (const ev of ars.update({ fire, firePressed: false, reload: false, weapon: null }, stance, DT)) {
      if (ev.type !== 'shot' || !dir || (sloppy && rand() < 0.5)) continue;
      const hit = castRay(mu, spreadDir(dir, ev.spread, rand, [0, 0, 0]), 60, S.boxes, r.f.enemies);
      if (hit.target) r.f.hurt(hit.target, shotDamage(TUNING.weapons.regret, hit.kind, ev.mult), hit.kind === 'head' ? 'head' : 'body');
    }
    const hp0 = r.health.hp;
    const evs = r.f.step(DT, { m, health: r.health, aim: { lens: [m.pos[0], m.pos[1] + 1.55, m.pos[2]], dir: [Math.sin(yaw), 0, Math.cos(yaw)], active: intent.aim } });
    r.health.update(DT, { standIn: !r.f.tobble });
    if (r.health.hp < hp0) out.hpLost += hp0 - r.health.hp;
    out.minHp = Math.min(out.minHp, r.health.hp);
    for (const e of evs) {
      if (e.type === 'trainerSwing') out.swings++;
      if (e.type === 'playerHit' && e.melee) out.landed++;
      if (e.type === 'death') { if (r.f.enemies.find(x => x.id === e.id).kind === 'trainer') out.trainerKills++; else out.repKills++; }
      if (e.type === 'clear') out.clearT = r.f.now;
      if (e.type === 'checkpoint') out.downT = r.f.now;
    }
    void fresh;
  }
  return out;
}

test('a headless Smoothie Bar fight is survivable with good play: a careful Doc clears 5 Reps, the Trainers and the sauna on every seed, never downed', () => {
  const rows = [1, 2, 3, 4, 5, 6].map(seed => playSmoothieBar(seed));
  const sloppy = [1, 2, 3, 4, 5, 6].map(seed => playSmoothieBar(seed, { sloppy: true }));
  const avg = (rs, k) => (rs.reduce((a, x) => a + x[k], 0) / rs.length).toFixed(1);
  console.log(`Smoothie Bar, careful Doc, ${rows.length} seeds: ${rows.filter(x => x.clearT).length} clears, mean clear ${avg(rows.filter(x => x.clearT), 'clearT')} s, ${rows.filter(x => x.downT).length} downed, `
    + `${avg(rows, 'trainerKills')} Trainers and ${avg(rows, 'repKills')} Reps killed, ${rows.reduce((a, x) => a + x.swings, 0)} swings (${rows.reduce((a, x) => a + x.landed, 0)} landed), lowest hp ${Math.min(...rows.map(x => x.minHp)).toFixed(0)}`);
  console.log(`Smoothie Bar, sloppy Doc (body shots, half the trigger pulls wasted): ${sloppy.filter(x => x.clearT).length}/${sloppy.length} clears in 150 s, ${sloppy.filter(x => x.downT).length} downed, `
    + `${sloppy.reduce((a, x) => a + x.swings, 0)} swings (${sloppy.reduce((a, x) => a + x.landed, 0)} landed), mean hp lost ${avg(sloppy, 'hpLost')}`);
  for (const x of rows) { assert.ok(x.clearT !== null, `seed ${x.seed} cleared`); assert.equal(x.downT, null, `seed ${x.seed} never downed`); assert.ok(x.minHp > 0); assert.ok(x.trainerKills >= 2, `seed ${x.seed}: Trainers took part`); }
});

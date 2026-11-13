// The first fight, headless and seeded: tokens, telegraphs, cover, push and flank, and the spec's numbers.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sim, I, tuck, R, BOXES, DT } from './fightSim.js';
import { createArsenal } from '../src/combat/arsenal.js';
import { castRay, spreadDir } from '../src/combat/hits.js';
import { fireStance, muzzleOf } from '../src/combat/stance.js';
import { shotDamage } from '../src/combat/targets.js';
import { rng } from '../src/core/random.js';
import { TUNING } from '../src/tuning.js';
import { solveThrowPitch, throwVelocity, throwOrigin } from '../src/combat/grenades.js';
import { lineOfSight, popPos } from '../src/world/coverPoints.js';
import { BARKS } from '../src/director/barks.js';

const COVERISH = new Set(['cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch']);
const solid = BOXES.filter(b => b.kind !== 'floor');
const rad = TUNING.associate.radius;
const mean = xs => xs.reduce((a, b) => a + b, 0) / xs.length;

function inBox(p) {
  return solid.some((b) => {
    if (b.max[1] < 0.05) return false;
    const cx = Math.max(b.min[0], Math.min(p[0], b.max[0])), cz = Math.max(b.min[2], Math.min(p[2], b.max[2]));
    return Math.hypot(p[0] - cx, p[2] - cz) < rad - 0.02;
  });
}

test('before the trigger nothing fires; crossing z -11 starts it with a lockdown bark', () => {
  const idle = sim(6, { at: 'start' });
  assert.equal(idle.f.started, false);
  assert.equal(idle.log.filter(e => e.type === 'enemyShot' || e.type === 'telegraph' || e.type === 'bark').length, 0);
  assert.ok(idle.f.enemies.filter(e => e.alive).every(e => e.state === 'idle'));
  // Walk forward (+z) across the line.
  const walk = sim(3, { at: 'start', intent: () => I({ moveY: -1 }) });
  const bark = walk.log.find(e => e.type === 'bark');
  assert.equal(bark.key, 'lockdown');
  assert.equal(walk.f.started, true);
  assert.ok(walk.m.pos[2] > R.trigger.z);
  assert.equal(walk.log.filter(e => e.type === 'bark' && e.key === 'lockdown').length, 1);
  assert.ok(bark.t > 0.2, 'it waited for the line');
});

test('within 5 s of the start every alive Associate is in a cover state; over 60 s none is ever inside a box', () => {
  for (const seed of [1, 2]) {
    let at5 = null, bad = 0;
    sim(60, {
      at: 'kioskLeft', seed, intent: tuck(),
      each: (i, m, f) => {
        if (i === 300) at5 = f.enemies.filter(e => e.alive).map(e => e.state);
        for (const e of f.enemies) if (e.alive && inBox(e.pos)) bad++;
      },
    });
    assert.ok(at5.every(s => COVERISH.has(s)), `seed ${seed}: ${at5}`);
    assert.equal(bad, 0);
  }
});

test('Normal: over 120 s (player popped at kioskLeft, godMode), at most 2 Associates are in telegraph or burst at any step; casual 1 -> at most 1', () => {
  for (const [casual, limit] of [[0, 2], [1, 1]]) {
    let peak = 0, steps = 0;
    const r = sim(120, {
      at: 'kioskLeft', seed: 3, god: true, intent: tuck(true), tune: t => { t.director.casual = casual; },
      each: (i, m, f) => {
        const n = f.enemies.filter(e => e.state === 'telegraph' || e.state === 'burst').length;
        peak = Math.max(peak, n); steps++;
        assert.ok(f.tokens.held().length <= limit);
      },
    });
    assert.ok(peak <= limit, `casual ${casual}: peak ${peak}`);
    assert.equal(peak, limit, 'and the limit is reached');
    assert.ok(r.log.filter(e => e.type === 'playerHit').length > 0, 'a popped player is hit (head and shoulders)');
  }
});

test('every playerHit comes from a shot fired while its Associate held a token, and every burst follows its telegraph by >= popTime + telegraphTime', () => {
  const { popTime, telegraphTime } = TUNING.associate;
  for (const seed of [1, 2, 3]) {
    const r = sim(60, { at: 'kioskLeft', seed, god: true, intent: tuck(true) });
    const lastTele = new Map();
    let accurate = 0, hits = 0;
    for (const e of r.log) {
      if (e.type === 'telegraph') lastTele.set(e.id, e.t);
      if (e.type === 'enemyShot' && e.accurate) {
        accurate++;
        assert.ok(e.holders.includes(e.id), `${e.id} fired accurately at ${e.t} without a token`);
        assert.ok(e.t - lastTele.get(e.id) >= popTime + telegraphTime - 1e-6, 'the burst waited for the telegraph');
      }
      if (e.type === 'enemyShot' && !e.accurate) assert.ok(!e.holders.includes(e.id), 'suppression is for non-holders');
      if (e.type === 'playerHit') { hits++; assert.ok(e.holders.includes(e.id)); }
    }
    assert.ok(accurate > 20 && hits > 0);
  }
});

test('tucked at K1 facing the enemies for 30 s: zero playerHit events (spec: cannot be hit from the front)', () => {
  for (const seed of [1, 2, 3, 4]) {
    const r = sim(30, { at: 'kioskLeft', seed, intent: tuck(false) });
    assert.equal(r.m.state, 'cover');
    assert.equal(r.log.filter(e => e.type === 'playerHit').length, 0);
    assert.equal(r.health.hp, 100);
    assert.ok(r.log.filter(e => e.type === 'enemyShot' && e.accurate).length > 0, 'they did shoot');
  }
});

function downTimes() {
  return [1, 2, 3, 4, 5].map((seed) => {
    const r = sim(8, { at: 'open', seed });
    const first = r.log.find(e => e.type === 'playerHit'), down = r.log.find(e => e.type === 'playerHit' && e.result === 'downed');
    assert.ok(first && down, `seed ${seed} goes down`);
    return down.t - first.t;
  });
}

test('standing still at features.open on Normal: health 0 between 2.5 s and 3.5 s after the first hit, mean of seeds 1..5 (Gate C: easier, about 3 s)', () => {
  const ts = downTimes();
  const mn = mean(ts);
  console.log('time-to-down after the first hit, seeds 1..5:', ts.map(t => t.toFixed(2)).join(' '), 'mean', mn.toFixed(2));
  assert.ok(mn >= 2.5 && mn <= 3.5, `mean ${mn}`);
});

function damageWindow(seed, runner) {
  const r = sim(8, { at: 'open', seed, god: true, intent: runner });
  const t0 = r.log.find(e => e.type === 'enemyShot' && e.accurate).t;
  return r.log.filter(e => e.type === 'playerHit' && e.t >= t0 && e.t < t0 + 1.5).reduce((a, e) => a + e.amount, 0);
}

test('sprinting across the open for 1.5 s takes under half the damage of standing still for 1.5 s (mean of seeds 1..5)', () => {
  // Sprint along x at z -5, turning back at the ends.
  let dir = -1;
  const runner = (i, m) => {
    if (m.pos[0] > 5) dir = 1; else if (m.pos[0] < -5) dir = -1;
    return I({ moveX: dir, sprint: true });
  };
  const seeds = [1, 2, 3, 4, 5];
  const still = mean(seeds.map(s => damageWindow(s, () => I())));
  dir = -1;
  const sprint = mean(seeds.map((s) => { dir = -1; return damageWindow(s, runner); }));
  console.log('damage in the 1.5 s after the first accurate shot: standing', still.toFixed(1), 'sprinting', sprint.toFixed(1));
  assert.ok(still > 0 && sprint < still / 2, `still ${still}, sprint ${sprint}`);
});

test('hiding tucked for 8 s gives one pusher that ends >= 2 m closer; staying put 12 s gives one flanker (or none if no flank point) and never two of either', () => {
  for (const seed of [1, 2, 3]) {
    let pushers = 0, flankers = 0;
    const before = new Map(), last = new Map();
    const r = sim(12, {
      at: 'kioskLeft', seed, god: true, intent: tuck(false),
      each: (i, m, f) => {
        pushers = Math.max(pushers, f.enemies.filter(e => e.role === 'push').length);
        flankers = Math.max(flankers, f.enemies.filter(e => e.role === 'flank').length);
        for (const e of f.enemies) {
          if (e.role === 'push' && !before.has(e.id)) before.set(e.id, last.get(e.id)); // the point it left (the brain re-picks in the same step)
        }
        for (const e of f.enemies) if (e.alive && e.role === 'hold') last.set(e.id, e.point.index);
      },
    });
    assert.ok(pushers <= 1 && flankers <= 1, 'never two of either at once');
    const pushBarks = r.log.filter(e => e.type === 'bark' && e.key === 'push');
    assert.ok(pushBarks.length >= 1);
    assert.ok(pushBarks[0].t >= TUNING.director.pushAfter && pushBarks[0].t < 8);
    // The first pusher's new point is >= 2 m closer than the one it left.
    const id = pushBarks[0].id;
    const arrive = r.log.find(e => e.type === 'arrive' && e.id === id && e.t > pushBarks[0].t);
    assert.ok(arrive, 'the pusher arrived within 12 s');
    const p0 = r.f.points[before.get(id)].pos;
    const dist = p => Math.hypot(p[0] - r.m.pos[0], p[1] - r.m.pos[2]);
    assert.ok(dist(p0) - dist(arrive.point.pos) >= 2 - 1e-6, `${dist(p0)} -> ${dist(arrive.point.pos)}`);
    const flankBarks = r.log.filter(e => e.type === 'bark' && e.key === 'flank');
    assert.ok(flankBarks.length <= 1 && (flankBarks.length === 0 || flankBarks[0].t >= TUNING.director.flankAfter));
  }
});

test('an Associate whose cover the player walks round (player on its open side) leaves for a new point within 1 s', () => {
  let placed = -1, snapshot = null;
  const r = sim(8, {
    at: 'open', seed: 1, tune: (t) => { t.director.tokens = 0; t.associate.suppressChance = 0; },
    each: (i, m, f) => {
      if (i === 180) { m.place([-3.6, 0, 7.5], Math.PI); placed = f.now; snapshot = f.enemies.filter(e => e.alive).map(e => [e.id, e.point.index]); }
      if (placed > 0 && f.now > placed + 1.0 && snapshot) {
        const a1 = f.enemies[0];
        assert.ok(a1.state === 'run' || a1.state === 'cover');
        assert.notEqual(a1.point.index, snapshot[0][1], 'a1 took a new point');
        snapshot = null;
      }
    },
  });
  assert.ok(placed > 0 && snapshot === null);
  assert.ok(r.log.some(e => e.type === 'arrive' && e.t > placed));
});

test('no two characters overlap (distance >= 2 * radius - 0.05) after any step; the player is never moved by separation', () => {
  let worst = Infinity;
  const check = (f, m) => {
    const live = f.enemies.filter(e => e.alive);
    for (let i = 0; i < live.length; i++) {
      for (let j = i + 1; j < live.length; j++) worst = Math.min(worst, Math.hypot(live[i].pos[0] - live[j].pos[0], live[i].pos[2] - live[j].pos[2]));
    }
  };
  sim(40, { at: 'kioskLeft', seed: 4, god: true, intent: tuck(true), each: (i, m, f) => check(f, m) });
  assert.ok(worst >= 2 * rad - 0.05, `closest ${worst}`);
  // Put the player on top of a tucked clone: the clone moves, the player does not.
  let moved = null, gap = Infinity;
  sim(1, {
    at: 'open', seed: 1,
    intent: (i, m, f) => {
      if (i === 30) { const e = f.enemies[1]; m.place([e.pos[0] + 0.3, 0, e.pos[2]]); moved = [m.pos[0], m.pos[2]]; }
      return I();
    },
    each: (i, m, f) => {
      if (i === 30) {
        assert.deepEqual([m.pos[0], m.pos[2]], moved, 'the player stays put');
        const e = f.enemies[1];
        gap = Math.hypot(e.pos[0] - m.pos[0], e.pos[2] - m.pos[2]);
      }
    },
  });
  assert.ok(gap >= 2 * rad - 0.05, `gap ${gap}`);
});

test('a downed player: every token released within one step, no accurate shots until revive or reset', () => {
  let downAt = -1, heldAfter = null, afterShots = 0, revived = -1, laterShots = 0;
  const r = sim(24, {
    at: 'open', seed: 2, god: false, tune: t => { t.tobble.enabled = 0; },   // the m4 behaviour; with Tobble the Reps may shoot him instead
    intent: (i, m, f) => {
      return I();
    },
    each: (i, m, f, health, ev) => {
      if (downAt < 0 && health.downed) { downAt = i; }
      if (downAt >= 0 && i === downAt + 1) heldAfter = f.tokens.held().length;
      if (downAt >= 0 && i > downAt && revived < 0) afterShots += ev.filter(e => e.type === 'enemyShot' && e.accurate).length;
      if (downAt >= 0 && i === downAt + 600 && revived < 0) { health.reset(); m.revive(); revived = i; }
      if (revived >= 0 && i > revived) laterShots += ev.filter(e => e.type === 'enemyShot' && e.accurate).length;
    },
  });
  assert.ok(downAt > 0, 'went down');
  assert.equal(heldAfter, 0);
  assert.equal(afterShots, 0, 'no accurate shots while downed');
  assert.ok(r.log.some(e => e.type === 'bark' && e.key === 'downed'));
  assert.ok(laterShots > 0, 'they shoot again once the player is up');
});

test('killing all four emits clear once; reset restores four alive at their starts, idle, no tokens, only the start points reserved', () => {
  const r = sim(3, { at: 'open', seed: 1, tune: (t) => { t.director.tokens = 0; } });
  const { f } = r;
  let clears = 0;
  const four = f.enemies.slice(0, 4);
  for (const e of four) assert.equal(f.hurt(e, 1000, 'head'), 'kill');
  // Two deaths open the Spawn Sauna and the clear waits for it: a kettlebell on it closes it (the explosion lands within 2 s).
  f.throwGrenade([4.6, 0.5, 13.4], [0, 0, 0]);
  const m = r.m, health = r.health;
  for (let i = 0; i < 120; i++) for (const ev of f.step(DT, { m, health })) if (ev.type === 'clear') clears++;
  assert.equal(clears, 1);
  assert.equal(f.clear, true);
  // The deaths surfaced as events on the next step.
  f.reset();
  assert.equal(f.clear, false); assert.equal(f.started, false);
  four.forEach((e, i) => {
    assert.equal(e.alive, true); assert.equal(e.state, 'idle'); assert.equal(e.health, TUNING.associate.health);
    assert.deepEqual(e.pos, R.associates[i].pos);
    assert.ok(e.point);
  });
  assert.deepEqual(f.tokens.held(), []);
  assert.deepEqual([...four.map(e => e.point.index)].sort(), [...new Set(four.map(e => e.point.index))].sort());
});

test('the same seed gives the same event log; dt 0 and dt 5 stay finite; tokens 0, burstTime 0, telegraphTime 0, runSpeed 0 give no NaN and no lock-up', () => {
  const run = (seed) => JSON.stringify(sim(20, { at: 'kioskLeft', seed, god: true, intent: tuck(true) }).log.map(e => [e.t, e.type, e.id, e.key, e.amount]));
  assert.equal(run(7), run(7));
  assert.notEqual(run(7), run(8));
  // dt 0 and dt 5 through the fight's own step.
  const r = sim(1, { at: 'open', seed: 1, god: true });
  for (const dt of [0, 5, 0, 5, NaN, -1]) {
    r.f.step(dt, { m: r.m, health: r.health });
    for (const e of r.f.enemies) assert.ok(e.pos.every(Number.isFinite) && Number.isFinite(e.yaw) && Number.isFinite(e.pop));
  }
  const cases = [
    t => { t.director.tokens = 0; }, t => { t.associate.burstTime = 0; }, t => { t.associate.telegraphTime = 0; t.associate.popTime = 0; },
    t => { t.associate.runSpeed = 0; }, t => { t.associate.rate = 0.5; t.associate.suppressRate = 0.5; },
  ];
  cases.forEach((tune, k) => {
    const c = sim(25, { at: 'kioskLeft', seed: 1, god: true, intent: tuck(true), tune });
    for (const e of c.f.enemies) assert.ok(e.pos.every(Number.isFinite) && Number.isFinite(e.yaw) && Number.isFinite(e.pop) && Number.isFinite(e.aim[0]), `case ${k}`);
    for (const e of c.log) if (e.dir) assert.ok(e.dir.every(Number.isFinite));
    if (k === 0) assert.equal(c.log.filter(e => e.type === 'playerHit').length, 0);
    const moves = c.log.filter(e => e.type === 'arrive' || e.type === 'telegraph' || e.type === 'enemyShot').length;
    assert.ok(moves > 0 || k === 0, `case ${k} still does things`);
  });
});

test('tucked at mid (K3) for 30 s: no hit from behind and none at all, seeds 1..5; pushers and flankers stay in front of or beside the player', () => {
  for (const seed of [1, 2, 3, 4, 5]) {
    const r = sim(30, { at: 'mid', seed, intent: tuck(false) });
    assert.equal(r.m.state, 'cover');
    assert.equal(r.log.filter(e => e.type === 'playerHit').length, 0, `seed ${seed}`);
    assert.equal(r.health.hp, 100);
  }
});

test('at any instant the Associates that landed a damaging hit in the last 0.3 s number at most director.tokens (seeds 1..6, three spots, casual too)', () => {
  for (const casual of [0, 1]) {
    for (const [at, aim] of [['open', false], ['kioskLeft', true], ['mid', true]]) {
      for (const seed of [1, 2, 3, 4, 5, 6]) {
        const lastHit = new Map();
        let peak = 0;
        const limit = casual ? TUNING.director.casualTokens : TUNING.director.tokens;
        sim(40, {
          at, seed, god: true, intent: at === 'open' ? () => I() : tuck(aim), tune: t => { t.director.casual = casual; },
          each: (i, m, f, h, ev) => {
            for (const e of ev) if (e.type === 'playerHit') lastHit.set(e.id, f.now);
            let n = 0;
            for (const t of lastHit.values()) if (f.now - t <= 0.3) n++;
            peak = Math.max(peak, n);
            assert.ok(n <= limit, `${at} seed ${seed} casual ${casual} t ${f.now.toFixed(2)}: ${n} shooters hit within 0.3 s`);
          },
        });
        assert.ok(peak <= limit);
      }
    }
  }
});

test('popped at K1 with perfect aim at the chest, firing only while a clone is in telegraph or burst: the marked clone takes a chest hit in its first exposure, and it dies after needs about a second of popped fire (seeds 1..3)', () => {
  const mu = [0, 0, 0];
  for (const seed of [1, 2, 3]) {
    const ars = createArsenal(), rand = rng(99 + seed);
    let fireSteps = 0, killSecs = null, bodyHits = 0, mark = null;
    const firstHit = new Map(), seen = new Set();
    sim(40, {
      at: 'kioskLeft', seed, god: true, intent: (i) => I({ moveY: i === 0 ? -1 : 0, tap: i === 0, aim: i > 0 }),
      tune: t => { t.associate.downChance = 0; t.tobble.enabled = 0; },   // this test counts Doc's kills, not downs or Tobble's kills
      each: (i, m, f) => {
        const stance = fireStance(m);
        if (!mark || !mark.alive) mark = f.enemies.find(e => e.alive && (e.state === 'telegraph' || e.state === 'burst')) || null;
        const t = mark && (mark.state === 'telegraph' || mark.state === 'burst') ? mark : null;
        let dir = null;
        if (t && stance === 'aim') {
          if (!seen.has(t.id)) { seen.add(t.id); firstHit.set(t.id, 0); }
          muzzleOf(m, stance, 0, TUNING.combat, mu);
          const c = [t.pos[0], t.pos[1] + 1.1, t.pos[2]];   // the chest of a blob Rep (its body capsule's axis ends lower, under the shoulders)
          const l = Math.hypot(c[0] - mu[0], c[1] - mu[1], c[2] - mu[2]);
          dir = [(c[0] - mu[0]) / l, (c[1] - mu[1]) / l, (c[2] - mu[2]) / l];
          fireSteps++;
        }
        for (const e of ars.update({ fire: !!dir, firePressed: false, reload: false, weapon: null }, stance, DT)) {
          if (e.type !== 'shot' || !dir) continue;
          const hit = castRay(mu, spreadDir(dir, e.spread, rand), 60, BOXES, f.enemies);
          if (!hit.target) continue;
          if (hit.kind === 'body') { bodyHits++; if (firstHit.has(hit.target.id)) firstHit.set(hit.target.id, firstHit.get(hit.target.id) + 1); }
          if (f.hurt(hit.target, shotDamage(TUNING.weapons.regret, hit.kind, e.mult)) === 'kill' && killSecs === null) killSecs = fireSteps * DT;
        }
      },
    });
    console.log(`seed ${seed}: first kill after ${killSecs && killSecs.toFixed(2)} s of popped fire, ${bodyHits} chest hits`);
    assert.ok(killSecs !== null, `seed ${seed}: a clone dies`);
    assert.ok(killSecs <= 1.6, `seed ${seed}: ${killSecs} s of popped fire`);
    assert.ok(bodyHits >= 7 && [...firstHit.values()][0] >= 1, `seed ${seed}: the marked clone took a chest hit in its first exposure ${[...firstHit]}`);
  }
});

// ---- Milestone 5: slots, reactions, kettlebells, the Spawn Sauna ----
const LOUD = new Set(['telegraph', 'burst']);
// Steps an existing sim result further, by hand. `each(events, i)` after each step.
function go(r, seconds, each) {
  const evs = [];
  for (let i = 0; i < Math.round(seconds / DT); i++) {
    const ev = r.f.step(DT, { m: r.m, health: r.health });
    r.health.update(DT);
    for (const e of ev) evs.push({ t: r.f.now, ...e });
    if (each) each(ev, i);
  }
  return evs;
}
const quiet = t => { t.director.tokens = 0; t.associate.suppressChance = 0; };   // Reps tuck and do not shoot
const alive = f => f.enemies.filter(e => e.alive);
const base4 = f => f.enemies.slice(0, 4);

test('slots: 8 enemies, 4 alive at the start, 4 unused; f.spawnRep x5 never gives more than 8 alive', () => {
  const { f } = sim(0.1, { at: 'start' });
  assert.equal(f.enemies.length, 8);
  assert.equal(alive(f).length, 4);
  assert.deepEqual(f.enemies.slice(4).map(e => [e.state, e.alive]), Array(4).fill(['unused', false]));
  assert.deepEqual(base4(f).map(e => e.id), ['a1', 'a2', 'b1', 'b2']);
  const got = [];
  for (let i = 0; i < 5; i++) got.push(f.spawnRep());
  assert.deepEqual(got.map(e => !!e), [true, true, true, true, false]);
  assert.equal(alive(f).length, 8);
  assert.ok(got.slice(0, 4).every(e => e.state === 'spawn' && e.alive && Math.hypot(e.pos[0] - R.pads[0].pos[0], e.pos[2] - R.pads[0].pos[2]) < 1e-9));
  // A dead slot is reusable only 1 s after its death.
  f.hurt(f.enemies[0], 1000, 'head');
  assert.equal(f.spawnRep(), null, 'its death burst is not over');
  const r = sim(0.1, { at: 'start' });
  for (let i = 0; i < 4; i++) r.f.spawnRep();
  r.f.hurt(r.f.enemies[0], 1000, 'head');
  go(r, 1.05);
  assert.equal(r.f.spawnRep(), r.f.enemies[0], 'the dead slot is taken once 1 s has passed');
  // maxEnemies is read when the fight is created: 6 slots in play.
  const six = sim(0.1, { at: 'start', tune: t => { t.director.maxEnemies = 6; } }).f;
  for (let i = 0; i < 5; i++) six.spawnRep();
  assert.equal(alive(six).length, 6);
});

test('clone revive: a downed Rep gets one helper within 12 m, which kneels 2.5 s; the Rep stands at 40 hp and seeks; killing the helper cancels and a new helper may come', () => {
  const r = sim(3, { at: 'open', seed: 1, tune: quiet });
  const { f } = r, a1 = f.enemies[0];
  assert.equal(a1.state, 'cover');
  assert.equal(f.downRep(a1), true);
  assert.equal(a1.state, 'downed');
  let helpers = 0, kneelFrom = -1, kneelTo = -1, helperId = null;
  const evs = go(r, 8, () => {
    const hs = f.enemies.filter(e => e.role === 'revive');
    helpers = Math.max(helpers, hs.length);
    if (hs.length && !helperId) helperId = hs[0].id;
    const k = f.enemies.find(e => e.state === 'kneel');
    if (k && kneelFrom < 0) kneelFrom = f.now;
    if (k) kneelTo = f.now;
  });
  assert.equal(helpers, 1, 'one helper at a time');
  assert.ok(helperId && helperId !== 'a1');
  const helper = f.enemies.find(e => e.id === helperId);
  assert.ok(evs.some(e => e.type === 'bark' && e.key === 'cloneRevive' && e.id === helperId));
  assert.ok(Math.abs(kneelTo - kneelFrom - 2.5) < 0.1, `knelt ${kneelTo - kneelFrom}`);
  assert.ok(evs.some(e => e.type === 'cloneRevive' && e.target === 'a1'));
  assert.equal(a1.alive, true); assert.ok(a1.state !== 'downed' && a1.state !== 'dead');
  assert.equal(Math.round(a1.health), 40);
  assert.equal(helper.role, 'hold'); assert.equal(a1.helper, null);
  // Killing the helper cancels the revive; another helper may come.
  const r2 = sim(3, { at: 'open', seed: 1, tune: quiet });
  const g = r2.f, d = g.enemies[0];
  g.downRep(d);
  go(r2, 0.1);
  const h1 = g.enemies.find(e => e.role === 'revive');
  assert.ok(h1 && d.helper === h1.id);
  go(r2, 0.3);
  assert.equal(g.hurt(h1, 1000, 'head'), 'kill');
  go(r2, 0.05);
  assert.equal(d.state, 'downed', 'the revive did not finish');
  assert.notEqual(d.helper, h1.id);
  const h2 = g.enemies.find(e => e.role === 'revive');
  assert.ok(h2 && h2.id !== h1.id && d.helper === h2.id, 'a new helper');
  // A hurt (not killed) helper flinches and the revive is cancelled too.
  const h2hit = g.hurt(h2, 10, 'body');
  assert.equal(h2hit, 'hit'); assert.equal(h2.state, 'flinch'); assert.equal(h2.role, 'hold'); assert.equal(d.helper, null);
  // Out of range: no helper (reviveRange 12).
  const far = sim(3, { at: 'open', seed: 1, tune: t => { quiet(t); t.associate.reviveRange = 0.5; } });
  far.f.downRep(far.f.enemies[0]); go(far, 1);
  assert.equal(far.f.enemies[0].helper, null);
});

// Throws a kettlebell at `to` from Doc, fused to burst there (the flight time to it), and returns the throw.
function throwAt(f, m, tun, to, extra = {}) {
  const from = throwOrigin(m, 0, tun.combat, [0, 0, 0]);
  const yaw = Math.atan2(to[0] - from[0], to[2] - from[2]);
  const pitch = solveThrowPitch(from, to, yaw, tun.grenade);
  assert.notEqual(pitch, null, 'the throw is solvable');
  const vel = throwVelocity(yaw, pitch, tun.grenade, [0, 0, 0]);
  const D = Math.hypot(to[0] - from[0], to[2] - from[2]);
  tun.grenade.fuse = extra.fuse ?? D / Math.hypot(vel[0], vel[2]);
  return f.throwGrenade(from, vel);
}

test('kettlebell on the K5 pair (solveThrowPitch from open, diveChance 0): both take blast damage, none is downed by it', () => {
  let tun = null, thrown = null;
  const r = sim(2.2, {
    at: 'open', seed: 1, tune: t => { tun = t; quiet(t); t.associate.diveChance = 0; t.associate.downChance = 1; },
    each: (i, m, f) => { if (i === 0) thrown = throwAt(f, m, tun, [-3.5, 0.6, 4.9]); },
  });
  assert.ok(thrown);
  const ex = r.log.find(e => e.type === 'explode');
  assert.ok(ex, 'it exploded');
  assert.ok(Math.hypot(ex.pos[0] + 3.5, ex.pos[2] - 4.9) < 0.6, `burst at ${ex.pos}`);
  const [a1, a2] = r.f.enemies;
  for (const e of [a1, a2]) {
    assert.ok(e.health < TUNING.associate.health, `${e.id} took damage`);
    assert.notEqual(e.state, 'downed', 'a blast never downs');
  }
  const deaths = r.log.filter(e => e.type === 'death');
  assert.ok(deaths.length >= 2 && deaths.every(d => d.kind === 'blast'), 'inside the kill radius they die by blast');
  assert.equal(ex.kills, 2);
  // Further out the damage falls off, and a Rep the blast cannot see takes nothing (K5 between).
  const far = sim(0.1, { at: 'open', seed: 1, tune: quiet });
  const g = far.f; far.tuning.grenade.fuse = 0.05; g.throwGrenade([-3.5, 0.5, 4.9], [0, 0, 0]);
  go(far, 0.2);
  assert.ok(g.enemies[0].health < 100, 'sanity: an open blast hurts');
  const hid = sim(0.1, { at: 'open', seed: 1, tune: quiet });
  hid.tuning.grenade.fuse = 0.05;
  hid.f.throwGrenade([-3.5, 0.5, 2.6], [0, 0, 0]);   // the K5 box is between this and a1 / a2 at z 4.88
  go(hid, 0.2);
  assert.equal(hid.f.enemies[0].health, 100); assert.equal(hid.f.enemies[1].health, 100);
});

test('Reps dive: diveChance 1, a kettlebell landing between a1 and a2 -> both in dive within 0.3 s, one dive bark', () => {
  let diving = null;
  const r = sim(2, {
    at: 'open', seed: 1, tune: t => { quiet(t); t.associate.diveChance = 1; },
    each: (i, m, f) => {
      if (i === 0) f.throwGrenade([-3.5, 0.5, 4.9], [0, 0, 0]);
      // fuse 1.6, diveWarn 1.0: the roll comes 0.6 s in; both are diving 0.3 s later.
      if (i === Math.round(0.9 / DT)) diving = f.enemies.slice(0, 2).map(e => e.state);
    },
  });
  assert.deepEqual(diving, ['dive', 'dive']);
  assert.equal(r.log.filter(e => e.type === 'bark' && e.key === 'dive').length, 1, 'one bark per kettlebell');
  // Rolled once per kettlebell: with diveChance 0 nobody dives, and a Rep out of diveRadius never rolls.
  const none = sim(2, { at: 'open', seed: 1, tune: t => { quiet(t); t.associate.diveChance = 0; }, each: (i, m, f) => { if (i === 0) f.throwGrenade([-3.5, 0.5, 4.9], [0, 0, 0]); } });
  assert.ok(!none.log.some(e => e.type === 'bark' && e.key === 'dive'));
  // After the blast the divers are alive and away from the burst (they are not in it).
  const ex = r.log.find(e => e.type === 'explode');
  assert.ok(ex.kills === 0 && r.f.enemies.slice(0, 2).every(e => e.alive && Math.hypot(e.pos[0] - ex.pos[0], e.pos[2] - ex.pos[2]) >= 2), 'the divers were clear of the kill radius');
});

test('the sauna: opens after 2 kills, a kettlebell on it closes it (padClosed, PA bark); clear needs the 4 dead and the sauna closed or spent', () => {
  const r = sim(1, { at: 'open', seed: 1, tune: quiet });
  const { f } = r;
  assert.equal(f.pads[0].state, 'dormant');
  f.hurt(f.enemies[0], 1000, 'head'); f.hurt(f.enemies[1], 1000, 'head');
  let evs = go(r, 0.2);
  assert.equal(f.kills, 2);
  assert.equal(f.pads[0].state, 'open');
  const open = evs.find(e => e.type === 'padOpen');
  assert.equal(open.id, 'sauna1');
  assert.ok(evs.some(e => e.type === 'bark' && e.key === 'padOpen' && e.force === true), 'the PA says so, forced');
  f.hurt(f.enemies[2], 1000, 'head'); f.hurt(f.enemies[3], 1000, 'head');
  evs = go(r, 0.5);
  assert.equal(f.clear, false, 'four dead but the sauna is still open');
  f.throwGrenade([4.6, 0.5, 13.4], [0, 0, 0]);
  evs = go(r, 2.0);
  const closed = evs.find(e => e.type === 'padClosed');
  assert.equal(closed.id, 'sauna1');
  assert.ok(evs.some(e => e.type === 'bark' && e.key === 'padClosed'), 'the PA bark');
  assert.equal(evs.find(e => e.type === 'explode').closed[0], 'sauna1');
  assert.equal(f.pads[0].state, 'closed');
  assert.equal(f.clear, true);
  assert.equal(evs.filter(e => e.type === 'clear').length, 1);
  assert.equal(f.pads[0].spawned, 0, 'it never spawned (closed before its first interval)');
});

test('sauna left open: with godMode and every new Rep killed at once, it spends after 6 spawns and the arena clears', () => {
  let spentAt = null, clearAt = null, openAt = null;
  const r = sim(60, {
    at: 'open', seed: 1, god: true, tune: quiet,
    each: (i, m, f, h, ev) => {
      for (const e of ev) {
        if (e.type === 'padSpent') spentAt = f.now;
        if (e.type === 'padOpen') openAt = f.now;
        if (e.type === 'clear' && clearAt === null) clearAt = f.now;
      }
      for (const e of f.enemies) if (e.alive && e.state !== 'unused') f.hurt(e, 1000, 'head');
    },
  });
  assert.equal(r.f.pads[0].state, 'spent'); assert.equal(r.f.pads[0].spawned, 6);
  assert.equal(r.log.filter(e => e.type === 'padSpawn').length, 6);
  assert.ok(spentAt !== null && clearAt !== null && clearAt >= spentAt);
  assert.equal(r.f.clear, true);
  console.log(`sauna left open: opened ${openAt.toFixed(2)} s, spent ${spentAt.toFixed(2)} s (${(spentAt - openAt).toFixed(1)} s after opening), clear ${clearAt.toFixed(2)} s`);
  assert.ok(spentAt - openAt > 25 && spentAt - openAt < 40);
  assert.equal(alive(r.f).length, 0);
});

test('executions: beginExecution locks the Rep (executed, no shots, token released); finishExecution kills with kind execute; releaseExecution -> flinch', () => {
  let held = null, shotsWhileHeld = 0, second = null;
  const r = sim(20, {
    at: 'kioskLeft', seed: 2, god: true, intent: tuck(true),
    each: (i, m, f, h, ev) => {
      if (!held) {
        const holder = f.enemies.find(e => f.tokens.holds(e.id));
        if (holder) { assert.equal(f.beginExecution(holder), true); held = holder; assert.equal(f.tokens.holds(holder.id), false, 'token released'); assert.equal(holder.state, 'executed'); }
      } else if (f.now < 19) {
        shotsWhileHeld += ev.filter(e => e.type === 'enemyShot' && e.id === held.id).length;
        assert.equal(held.state, 'executed', 'it holds');
        assert.equal(f.tokens.holds(held.id), false);
      }
    },
  });
  assert.ok(held, 'a Rep held a token');
  assert.equal(shotsWhileHeld, 0);
  assert.equal(held.point, null);
  assert.equal(r.f.finishExecution(held), 'kill');
  const ev = go(r, 0.05);
  const death = ev.find(e => e.type === 'death' && e.id === held.id);
  assert.equal(death.kind, 'execute');
  assert.equal(held.alive, false);
  assert.equal(r.f.finishExecution(held), null, 'nothing held any more');
  // Release -> flinch, then it seeks again.
  const r2 = sim(3, { at: 'open', seed: 1, tune: quiet });
  const e = r2.f.enemies[2];
  assert.equal(r2.f.beginExecution(e), true);
  assert.equal(r2.f.beginExecution(e), false, 'already held');
  go(r2, 1); assert.equal(e.state, 'executed');
  r2.f.releaseExecution(e);
  assert.equal(e.state, 'flinch');
  go(r2, 0.4); assert.ok(['run', 'cover'].includes(e.state), e.state);
  // A downed Rep released lies down again.
  const d = r2.f.enemies[3]; r2.f.downRep(d);
  assert.equal(r2.f.beginExecution(d), true); r2.f.releaseExecution(d);
  assert.equal(d.state, 'downed');
  // Refusals: a dead, an unused and a diving Rep.
  const dead = r2.f.enemies[0]; r2.f.hurt(dead, 1000, 'head');
  assert.equal(r2.f.beginExecution(dead), false);
  assert.equal(r2.f.beginExecution(r2.f.enemies[7]), false);
  const div = r2.f.enemies[1]; div.state = 'dive';
  assert.equal(r2.f.beginExecution(div), false);
  // A downed Rep with a helper kneeling to it, being executed: the helper is cancelled.
  const r3 = sim(3, { at: 'open', seed: 1, tune: quiet });
  const t3 = r3.f.enemies[0]; r3.f.downRep(t3); go(r3, 0.1);
  const helper = r3.f.enemies.find(x => x.role === 'revive');
  assert.ok(helper);
  r3.f.beginExecution(t3); go(r3, 0.1);
  assert.equal(helper.role, 'hold'); assert.equal(t3.helper, null);
});

test('bash: f.bash on a standing Rep deals 30 and staggers; on a downed Rep kills', () => {
  const r = sim(3, { at: 'open', seed: 1, tune: quiet });
  const { f } = r, a = f.enemies[0], b = f.enemies[1];
  assert.equal(f.bash(a), 'hit');
  assert.equal(a.health, 70); assert.equal(a.state, 'stagger');
  go(r, 0.85); assert.equal(a.state, 'stagger');
  go(r, 0.15); assert.notEqual(a.state, 'stagger');
  f.downRep(b);
  assert.equal(f.bash(b), 'kill');
  assert.equal(b.alive, false);
  assert.equal(f.bash(b), null, 'nothing left to bash');
  assert.equal(f.bash(f.enemies[7]), null, 'an empty slot');
  const ev = go(r, 0.05);
  assert.equal(ev.find(e => e.type === 'death' && e.id === b.id).kind, 'bash');
  // A bash that would kill a standing Rep kills it (never downs).
  const c = f.enemies[2]; c.health = 20;
  assert.equal(f.bash(c), 'kill');
});

test('tokens with the sauna open: over 120 s (godMode, player popped at kioskLeft) at most 2 Reps in telegraph or burst at any step', () => {
  let peak = 0, peakAlive = 0;
  const r = sim(120, {
    at: 'kioskLeft', seed: 3, god: true, intent: tuck(true), tune: t => { t.tobble.enabled = 0; },   // Tobble's kills would thin the Reps this test wants alive
    each: (i, m, f) => {
      const n = f.enemies.filter(e => LOUD.has(e.state)).length;
      peak = Math.max(peak, n);
      peakAlive = Math.max(peakAlive, alive(f).length);
      assert.ok(n <= 2 && f.tokens.held().length <= 2, `t ${f.now.toFixed(2)}: ${n}`);
    },
  });
  assert.ok(['open', 'spent'].includes(r.f.pads[0].state), 'the sauna opened');
  assert.ok(r.f.pads[0].spawned >= 2 && peakAlive >= 6, `spawned ${r.f.pads[0].spawned}, peak alive ${peakAlive}`);
  assert.ok(peak >= 1);
});

test('no two characters overlap after any step with 6 Reps alive and spawns arriving; a shoved tucked Rep re-snaps to its point', () => {
  let worst = Infinity, most = 0, docMoved = 0;
  const r = sim(60, {
    at: 'kioskLeft', seed: 4, god: true, intent: tuck(true),
    each: (i, m, f) => {
      if (i === 60 * 3 || i === 60 * 4) f.spawnRep();
      const live = alive(f); most = Math.max(most, live.length);
      for (let a = 0; a < live.length; a++) for (let b = a + 1; b < live.length; b++) worst = Math.min(worst, Math.hypot(live[a].pos[0] - live[b].pos[0], live[a].pos[2] - live[b].pos[2]));
      for (const e of live) docMoved = Math.min(docMoved, Math.hypot(e.pos[0] - m.pos[0], e.pos[2] - m.pos[2]) - (rad + TUNING.move.radius));
    },
  });
  assert.ok(most >= 6, `${most} alive`);
  assert.ok(worst >= 2 * rad - 0.05, `closest ${worst}`);
  assert.ok(docMoved >= -0.05, `nobody inside Doc's radius: ${docMoved}`);
  // Re-snap: a tucked Rep shoved 0.6 m off its point is back on it after one step.
  const q = sim(3, { at: 'open', seed: 1, tune: quiet });
  const e = q.f.enemies[0];
  assert.equal(e.state, 'cover');
  const home = [e.point.pos[0], e.point.pos[1]];
  e.pos[0] += 0.6; e.pos[2] += 0.2;
  go(q, 1 / 60);
  assert.ok(Math.hypot(e.pos[0] - home[0], e.pos[2] - home[1]) < 0.05, 'snapped back');
  assert.equal(e.state, 'cover');
  // Not when another Rep stands on the point: it seeks instead.
  const w = q.f.enemies[1];
  w.pos[0] = e.point.pos[0] + 0.3; w.pos[2] = e.point.pos[1];
  e.pos[0] += 0.7;
  go(q, 1 / 60);
  assert.ok(['seek', 'run', 'cover'].includes(e.state));
  assert.ok(Math.hypot(e.pos[0] - w.pos[0], e.pos[2] - w.pos[2]) >= 2 * rad - 0.06, 'no overlap');
});

test('shooting an idle Rep before the trigger starts the fight with the lockdown bark (m4 Minor 10)', () => {
  const r = sim(0.2, { at: 'start' });
  assert.equal(r.f.started, false);
  assert.equal(r.f.hurt(r.f.enemies[0], 5, 'body'), 'hit');
  assert.equal(r.f.started, true);
  const ev = go(r, 0.05);
  assert.equal(ev.filter(e => e.type === 'bark' && e.key === 'lockdown').length, 1);
  assert.equal(r.f.enemies[0].health, 95);
  // Only once: the trigger line later does not bark again.
  const more = go(r, 1);
  assert.equal(more.filter(e => e.type === 'bark' && e.key === 'lockdown').length, 0);
  // A hit on an empty slot starts nothing.
  const q = sim(0.1, { at: 'start' });
  assert.equal(q.f.hurt(q.f.enemies[6], 5, 'body'), null);
  assert.equal(q.f.started, false);
});

test('reset mid-execution, mid-flight, mid-clone-revive and mid-spawn: 4 Reps at starts idle, 4 unused, sauna dormant, no balls, kills 0, no helpers', () => {
  const check = (f, label) => {
    base4(f).forEach((e, i) => {
      assert.deepEqual([e.alive, e.state, e.role, e.health, e.helper, e.helping, e.claimed], [true, 'idle', 'hold', TUNING.associate.health, null, null, false], `${label} ${e.id}`);
      assert.deepEqual(e.pos, R.associates[i].pos);
      assert.ok(e.point);
    });
    f.enemies.slice(4).forEach(e => assert.deepEqual([e.alive, e.state, e.helper, e.claimed], [false, 'unused', null, false], label));
    assert.deepEqual([f.pads[0].state, f.pads[0].spawned, f.pads[0].alive], ['dormant', 0, 0], label);
    assert.equal(f.grenades.live.length, 0, label); assert.equal(f.kills, 0, label);
    assert.deepEqual(f.tokens.held(), []); assert.equal(f.started, false); assert.equal(f.clear, false);
  };
  // Mid-execution.
  let r = sim(2, { at: 'open', seed: 1, tune: quiet });
  r.f.beginExecution(r.f.enemies[0]); go(r, 0.2); r.f.reset(); check(r.f, 'execution');
  // Mid-flight.
  r = sim(2, { at: 'open', seed: 1, tune: quiet });
  r.f.throwGrenade([0, 1.5, 0], [3, 2, 3]); go(r, 0.3); assert.equal(r.f.grenades.live.length, 1);
  r.f.reset(); check(r.f, 'flight');
  const quietAfter = go(r, 3); assert.ok(!quietAfter.some(e => e.type === 'explode'), 'the ball never explodes after a reset');
  // Mid-clone-revive.
  r = sim(2, { at: 'open', seed: 1, tune: quiet });
  r.f.downRep(r.f.enemies[0]); go(r, 0.5); assert.ok(r.f.enemies.some(e => e.role === 'revive'));
  r.f.reset(); check(r.f, 'revive');
  // Mid-spawn (and with the sauna open and a Rep still rising).
  r = sim(2, { at: 'open', seed: 1, tune: quiet });
  r.f.hurt(r.f.enemies[0], 1000, 'head'); r.f.hurt(r.f.enemies[1], 1000, 'head');
  go(r, 5.3); assert.ok(r.f.pads[0].spawned >= 1 && r.f.enemies.some(e => e.alive && e.state === 'spawn'), 'a spawn arrived and is rising');
  r.f.reset(); check(r.f, 'spawn');
  // And the fight plays again after the reset.
  const again = go(r, 2); assert.equal(r.f.kills, 0);
  assert.ok(r.f.enemies.slice(0, 4).every(e => e.alive));
  assert.ok(again.every(e => e.type !== 'padOpen'));
});

test('determinism: the same seed gives the same log with kettlebells and the sauna; dt 0 and dt 5 stay finite', () => {
  const run = (seed) => {
    let tun = null;
    const r = sim(40, {
      at: 'kioskLeft', seed, god: true, intent: tuck(true), tune: t => { tun = t; },
      each: (i, m, f) => {
        if (i === 120) f.throwGrenade([-4, 1.5, -9], [2, 3, 8]);
        if (i === 900) f.downRep(f.enemies[1]);
      },
    });
    return JSON.stringify(r.log.map(e => [e.t, e.type, e.id, e.key, e.amount, e.kind, e.enemyId, e.pos && e.pos.map(v => +v.toFixed(4))]));
  };
  const a = run(7);
  assert.equal(a, run(7));
  assert.notEqual(a, run(8));
  assert.ok(a.includes('"padSpawn"') && a.includes('"explode"'), 'the sauna and the kettlebell both appear in the log');
  const r = sim(30, { at: 'kioskLeft', seed: 1, god: true, intent: tuck(true) });
  r.f.throwGrenade([0, 1, 0], [1, 1, 1]);
  for (const dt of [0, 5, 0, 5, NaN, -1]) {
    r.f.step(dt, { m: r.m, health: r.health });
    for (const e of r.f.enemies) assert.ok(e.pos.every(Number.isFinite) && Number.isFinite(e.health), `dt ${dt}`);
  }
});

// ---- Milestone 5: Tobble ----
const downDoc = (health, m) => { health.damage(10000); m.down(); };
const headOf = (e) => { const pp = e.point ? popPos(e.point, TUNING.associate.popShift) : [e.pos[0], e.pos[2]]; return [pp[0], 1.49, pp[1]]; };
const repsSeeing = (f, at) => f.enemies.filter(e => e.alive && !['unused', 'downed', 'spawn'].includes(e.state) && lineOfSight(BOXES, headOf(e), at)).length;

test('Reps target Tobble only when the player cannot be seen from the popped head; across both targets at most 2 in telegraph or burst', () => {
  let toTobble = 0, toPlayer = 0, peak = 0;
  for (const seed of [1, 2, 3]) {
    const prev = new Map();
    sim(60, {
      at: 'kioskLeft', seed, god: true, intent: tuck(),
      each: (i, m, f) => {
        peak = Math.max(peak, f.enemies.filter(e => LOUD.has(e.state)).length);
        for (const e of f.enemies) {
          if (e.state === 'telegraph' && prev.get(e.id) !== 'telegraph' && prev.get(e.id) !== 'burst') {
            const sees = lineOfSight(BOXES, headOf(e), f.tobble.chest !== undefined ? [m.pos[0], m.pos[1] + (m.state === 'cover' ? 0.6 : 1.2), m.pos[2]] : null);
            if (e.target === 'tobble') { toTobble++; assert.equal(sees, false, `${e.id} chose Tobble while it could see Doc`); } else toPlayer++;
          }
          prev.set(e.id, e.state);
        }
      },
    });
  }
  console.log(`telegraphs at Doc ${toPlayer}, at Tobble ${toTobble}`);
  assert.ok(toTobble > 0, 'some telegraphs are aimed at Tobble');
  assert.ok(peak <= 2, `peak ${peak}`);
});

test('player downed: no accurate shot ever targets the player; Tobble arrives and revives after 3 s kneeling -> revived, hp 50, mover state move, revive bark', () => {
  const kneel = [], revived = [];
  let downAt = -1, shotsAtDoc = 0, revHp = null, revState = null;
  const r = sim(14, {
    at: 'kioskLeft', seed: 1, intent: tuck(),
    each: (i, m, f, health, ev) => {
      if (i === 480) { downDoc(health, m); downAt = f.now; }
      if (downAt < 0) { return; }
      for (const e of ev) {
        if (e.type === 'enemyShot' && e.accurate && e.target !== 'tobble' && !revived.length) shotsAtDoc++;
        if (e.type === 'tobbleKneel') kneel.push(f.now);
        if (e.type === 'revived') { revived.push(f.now); revHp = health.hp; revState = m.state; }
      }
    },
  });
  assert.ok(downAt > 0);
  assert.equal(revHp, TUNING.health.max * TUNING.health.reviveHealth, 'stood up at 50 hp');
  assert.equal(revState, 'move', 'the mover is out of downed');
  assert.equal(shotsAtDoc, 0, 'nothing is shot at the downed player');
  assert.equal(r.log.filter(e => e.type === 'playerHit' && e.t > downAt && e.t < revived[0]).length, 0);
  assert.equal(revived.length, 1, 'revived once');
  assert.equal(kneel.length, 1, 'one kneel');
  assert.ok(Math.abs(revived[0] - kneel[0] - TUNING.tobble.reviveTime) < 0.05, `kneeled ${(revived[0] - kneel[0]).toFixed(2)} s`);
  const bark = r.log.find(e => e.type === 'bark' && e.key === 'tobbleRevive');
  assert.ok(bark && bark.force && bark.id === 'tobble' && bark.t >= revived[0] - 1e-9);
  assert.ok(BARKS.tobbleRevive.some(l => l.text === 'I got you! PUSH!'));
  console.log(`Doc down at ${downAt.toFixed(2)} s, Tobble kneels at ${(kneel[0] - downAt).toFixed(2)} s, up at ${(revived[0] - downAt).toFixed(2)} s after`);
});

test('threats: with 3 Reps sighting the downed player, Tobble starts moving no later than 4 s after the downing', () => {
  let downAt = -1, goAt = -1, startThreats = 0;
  sim(10, {
    at: 'flank', seed: 2, tune: t => { t.director.tokens = 0; t.associate.suppressChance = 0; },   // four Reps see Doc here; none shoots
    each: (i, m, f, health) => {
      if (i === 240) {
        downDoc(health, m); downAt = f.now;
        startThreats = repsSeeing(f, [m.pos[0], 0.4, m.pos[2]]);
      }
      if (downAt < 0) return;
      if (goAt < 0 && f.tobble.revGo) goAt = f.now;
    },
  });
  console.log(`threats at the downing: ${startThreats}, Tobble goes after ${(goAt - downAt).toFixed(2)} s`);
  assert.ok(startThreats >= 3, `only ${startThreats} Reps see Doc`);
  assert.ok(goAt > 0 && goAt - downAt <= TUNING.tobble.reviveWaitMax + 0.05, `went after ${goAt - downAt}`);
  assert.ok(goAt - downAt >= TUNING.tobble.reviveWaitMax - 0.05, 'he waited while it was not safe enough');
});

test('Tobble downed: no timer, complain barks every 6 s, Reps never fire at him; f.reviveTobble -> up at 75 hp; the clear stands him up', () => {
  let downAt = -1, shotsAtHim = 0, hitsOnHim = 0;
  const r = sim(40, {
    at: 'kioskLeft', seed: 1, god: true, intent: tuck(),
    each: (i, m, f, health, ev) => {
      if (i === 300) { assert.equal(f.hurtTobble(1000), 'downed'); downAt = f.now; }
      if (downAt < 0 || i === 300) return;
      for (const e of ev) {
        if (e.type === 'enemyShot' && e.target === 'tobble') shotsAtHim++;
        if (e.type === 'tobbleHit') hitsOnHim++;
      }
      assert.equal(f.tobble.downed, true, 'he stays down with no timer');
    },
  });
  assert.equal(shotsAtHim, 0);
  assert.equal(hitsOnHim, 0);
  const complaints = r.log.filter(e => e.type === 'bark' && e.key === 'tobbleComplain').map(e => e.t - downAt);
  assert.ok(complaints.length >= 5, `${complaints.length} complaints in 35 s`);
  complaints.forEach((c, k) => assert.ok(Math.abs(c - 6 * (k + 1)) < 0.05, `complaint ${k} at ${c.toFixed(2)}`));
  assert.ok(r.log.some(e => e.type === 'bark' && e.key === 'tobbleDown' && e.force));
  assert.ok(r.f.tobble.hp === 0);
  // Doc revives him: 75 hp, up, following.
  assert.equal(r.f.reviveTobble(), true);
  assert.equal(r.f.tobble.hp, TUNING.tobble.health * TUNING.tobble.reviveHealth);
  assert.equal(r.f.tobble.hp, 75);
  assert.equal(r.f.tobble.downed, false);
  assert.equal(r.f.reviveTobble(), false, 'already up');
  // The clear stands a downed Tobble up by himself.
  const q = sim(3, { at: 'open', seed: 1, tune: t => { t.director.tokens = 0; } });
  q.f.hurtTobble(1000);
  for (const e of q.f.enemies.slice(0, 4)) q.f.hurt(e, 1000, 'head');
  q.f.throwGrenade([4.6, 0.5, 13.4], [0, 0, 0]);
  const evs = go(q, 3);
  assert.ok(evs.some(e => e.type === 'clear'));
  assert.equal(q.f.tobble.downed, false);
  assert.equal(q.f.tobble.hp, 75);
  assert.ok(evs.some(e => e.type === 'bark' && e.key === 'tobbleClear'));
});

test('both down: player downed then Tobble downed -> one checkpoint event that step; both in the same step -> one checkpoint', () => {
  for (const order of ['doc first', 'tobble first', 'same step']) {
    const cps = [];
    sim(12, {
      at: 'kioskLeft', seed: 1, intent: tuck(),
      each: (i, m, f, health, ev) => {
        if (i === 300 && order !== 'tobble first') downDoc(health, m);
        if (i === 300 && order === 'tobble first') f.hurtTobble(1000);
        if (i === 330 && order === 'doc first') f.hurtTobble(1000);
        if (i === 330 && order === 'tobble first') downDoc(health, m);
        if (i === 300 && order === 'same step') f.hurtTobble(1000);
        for (const e of ev) if (e.type === 'checkpoint') cps.push({ i, ev: e });
      },
    });
    assert.equal(cps.length, 1, `${order}: ${cps.length} checkpoints`);
    assert.equal(cps[0].i, order === 'same step' ? 301 : 331, `${order}: at step ${cps[0].i}`);
  }
});

test('revive races: Tobble downed mid-kneel cancels the revive (no revived event); the player bleeding out mid-kneel is the caller restart, and a reset leaves Tobble at his start, full health, no reservation', () => {
  let kneelAt = -1, revived = 0, cps = 0, killed = false;
  const r = sim(20, {
    at: 'kioskLeft', seed: 1, intent: tuck(), god: false,
    each: (i, m, f, health, ev) => {
      if (i === 300) downDoc(health, m);
      for (const e of ev) {
        if (e.type === 'tobbleKneel' && kneelAt < 0) kneelAt = f.now;
        if (e.type === 'revived') revived++;
        if (e.type === 'checkpoint') cps++;
      }
      if (kneelAt > 0 && !killed && f.now - kneelAt > 1.0) { killed = true; assert.equal(f.hurtTobble(1000), 'downed'); }
    },
  });
  assert.ok(kneelAt > 0 && killed, 'he knelt, then went down');
  assert.equal(revived, 0, 'no revive from a downed Tobble');
  assert.equal(cps, 1, 'both down is a checkpoint');
  assert.equal(r.health.downed, true);
  // Bleeding out mid-kneel (a short timer, a long kneel): the caller restarts and a reset puts everything back.
  let bled = false, knelt = false;
  const q = sim(10, {
    at: 'kioskLeft', seed: 1, intent: tuck(), god: false, tune: t => { t.health.downedTime = 3; t.tobble.reviveTime = 10; },
    each: (i, m, f, health, ev) => {
      if (i === 300) downDoc(health, m);
      if (ev.some(e => e.type === 'tobbleKneel')) knelt = true;
      if (health.downed && health.downT <= 0) bled = true;
    },
  });
  assert.ok(knelt && bled, 'he knelt and Doc bled out');
  q.f.reset(); q.health.reset(); q.m.revive();
  const t = q.f.tobble;
  assert.deepEqual(t.pos, R.tobble.pos);
  assert.equal(t.hp, TUNING.tobble.health);
  assert.equal(t.state, 'idle');
  assert.equal(t.downed, false);
  assert.equal(t.point, null);
  assert.ok(![...q.f.reserved.values()].includes('tobble'), 'no reservation');
  // A reset of a Tobble who was downed and had a reservation.
  q.f.hurtTobble(1000); q.f.reset();
  assert.equal(q.f.tobble.downed, false); assert.equal(q.f.tobble.hp, TUNING.tobble.health);
  assert.ok(![...q.f.reserved.values()].includes('tobble'));
});

test('callouts: a flanker assignment emits tobbleFlank; the sauna opening emits tobblePad; deterministic', () => {
  const run = () => sim(40, { at: 'kioskLeft', seed: 1, god: true, intent: tuck() }).log;
  const log = run();
  const flanks = log.filter(e => e.type === 'bark' && e.key === 'flank'), calls = log.filter(e => e.type === 'bark' && e.key === 'tobbleFlank');
  assert.ok(flanks.length >= 1 && calls.length === flanks.length, `${flanks.length} flankers, ${calls.length} callouts`);
  for (const c of calls) { assert.equal(c.id, 'tobble'); assert.ok(flanks.some(fl => fl.t === c.t), 'on the assignment step'); }
  const open = log.find(e => e.type === 'padOpen'), pad = log.find(e => e.type === 'bark' && e.key === 'tobblePad');
  assert.ok(open && pad && pad.force && pad.t === open.t && pad.id === 'tobble');
  assert.deepEqual(BARKS.tobblePad.map(l => l.speaker), ['Tobble']);
  const key = l => JSON.stringify(l.filter(e => e.type === 'bark' || e.type.startsWith('tobble')).map(e => [e.t, e.type, e.key, e.hit, e.result]));
  assert.equal(key(log), key(run()));
});

test('tobble.enabled 0: f.tobble null, m4 downed behaviour (no checkpoint event, standIn honoured by the caller)', () => {
  let revivedAt = -1, downAt = -1;
  const r = sim(8, {
    at: 'kioskLeft', seed: 1, god: false, intent: tuck(), tune: t => { t.tobble.enabled = 0; t.health.standInRevive = 1; },
    each: (i, m, f, health) => {
      if (i === 120) { downDoc(health, m); downAt = f.now; }
      if (downAt > 0 && revivedAt < 0 && !health.downed) revivedAt = f.now;
    },
  });
  assert.equal(r.f.tobble, null);
  assert.ok(revivedAt > 0 && Math.abs(revivedAt - downAt - TUNING.health.reviveTime) < 0.1, `stood in ${(revivedAt - downAt).toFixed(2)} s after`);
  assert.equal(r.log.filter(e => e.type === 'checkpoint' || e.type === 'tobbleShot' || e.type === 'tobbleKneel').length, 0);
  assert.equal(r.log.filter(e => e.type === 'bark' && /^tobble/.test(e.key)).length, 0);
  assert.equal(r.f.reviveTobble(), false);
  // A reset honours a flag flipped on the panel.
  r.f.reset();
  assert.equal(r.f.tobble, null);
});

test('separation: Tobble never overlaps a Rep or the player, and the player position is never changed by it', () => {
  const rt = TUNING.tobble.radius, rr = TUNING.associate.radius, rp = TUNING.move.radius;
  let worstRep = Infinity, worstDoc = Infinity, before = null, changed = 0;
  sim(60, {
    at: 'kioskLeft', seed: 4, god: true,
    intent: (i, m) => { if (before && (m.pos[0] !== before[0] || m.pos[2] !== before[1])) changed++; return tuck(true)(i); },
    each: (i, m, f) => {
      if (i === 20) { f.tobble.pos[0] = m.pos[0] + 0.2; f.tobble.pos[2] = m.pos[2] + 0.1; }   // on top of Doc
      if (i === 21) { const e = f.enemies[0]; f.tobble.pos[0] = e.pos[0] + 0.1; f.tobble.pos[2] = e.pos[2]; }   // on top of a Rep
      before = [m.pos[0], m.pos[2]];
      if (i < 24) return;
      for (const e of f.enemies) if (e.alive) worstRep = Math.min(worstRep, Math.hypot(e.pos[0] - f.tobble.pos[0], e.pos[2] - f.tobble.pos[2]) - rt - rr);
      worstDoc = Math.min(worstDoc, Math.hypot(m.pos[0] - f.tobble.pos[0], m.pos[2] - f.tobble.pos[2]) - rt - rp);
    },
  });
  assert.ok(worstRep >= -0.05, `closest Rep ${worstRep.toFixed(3)} inside contact`);
  assert.ok(worstDoc >= -0.05, `closest Doc ${worstDoc.toFixed(3)} inside contact`);
  assert.equal(changed, 0, 'the fight never moves Doc');
  // Forced overlap: one step pushes him clear of both.
  const r = sim(0.5, { at: 'open', seed: 1, god: true });
  r.f.tobble.pos[0] = r.m.pos[0] + 0.1; r.f.tobble.pos[2] = r.m.pos[2];
  const doc = [r.m.pos[0], r.m.pos[2]];
  r.f.step(DT, { m: r.m, health: r.health });
  assert.deepEqual([r.m.pos[0], r.m.pos[2]], doc);
  assert.ok(Math.hypot(r.f.tobble.pos[0] - doc[0], r.f.tobble.pos[2] - doc[1]) >= rt + rp - 0.01);
});

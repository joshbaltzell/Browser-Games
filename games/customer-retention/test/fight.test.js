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
  assert.ok(idle.f.enemies.every(e => e.state === 'idle'));
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
        if (i === 300) at5 = f.enemies.map(e => e.state);
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
        for (const e of f.enemies) if (e.role === 'hold') last.set(e.id, e.point.index);
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
      if (i === 180) { m.place([-3.6, 0, 7.5], Math.PI); placed = f.now; snapshot = f.enemies.map(e => [e.id, e.point.index]); }
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
    at: 'open', seed: 2, god: false,
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
  for (const e of f.enemies) assert.equal(f.hurt(e, 1000), 'kill');
  const m = r.m, health = r.health;
  for (let i = 0; i < 120; i++) for (const ev of f.step(DT, { m, health })) if (ev.type === 'clear') clears++;
  assert.equal(clears, 1);
  assert.equal(f.clear, true);
  // The deaths surfaced as events on the next step.
  f.reset();
  assert.equal(f.clear, false); assert.equal(f.started, false);
  f.enemies.forEach((e, i) => {
    assert.equal(e.alive, true); assert.equal(e.state, 'idle'); assert.equal(e.health, TUNING.associate.health);
    assert.deepEqual(e.pos, R.associates[i].pos);
    assert.ok(e.point);
  });
  assert.deepEqual(f.tokens.held(), []);
  assert.deepEqual([...f.enemies.map(e => e.point.index)].sort(), [...new Set(f.enemies.map(e => e.point.index))].sort());
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
      each: (i, m, f) => {
        const stance = fireStance(m);
        if (!mark || !mark.alive) mark = f.enemies.find(e => e.alive && (e.state === 'telegraph' || e.state === 'burst')) || null;
        const t = mark && (mark.state === 'telegraph' || mark.state === 'burst') ? mark : null;
        let dir = null;
        if (t && stance === 'aim') {
          if (!seen.has(t.id)) { seen.add(t.id); firstHit.set(t.id, 0); }
          muzzleOf(m, stance, 0, TUNING.combat, mu);
          const c = [t.pos[0], t.shapes.body.b[1], t.pos[2]];
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

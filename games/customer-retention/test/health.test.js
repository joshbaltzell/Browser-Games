import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TUNING } from '../src/tuning.js';
import { createHealth } from '../src/combat/health.js';

const DT = 1 / 60;
const H = (o = {}) => createHealth({ ...TUNING.health, ...o });
const run = (h, secs, dt = DT) => { const out = []; const n = Math.round(secs / dt); for (let i = 0; i < n; i++) { const r = h.update(dt); if (r) out.push(r); } return out; };

test('starts full; 7 x 15 damage downs from 100 on the 7th; damage while downed is null', () => {
  const h = H();
  assert.equal(h.hp, 100); assert.equal(h.fraction(), 1); assert.equal(h.downed, false);
  for (let i = 0; i < 6; i++) assert.equal(h.damage(15), 'hit');
  assert.equal(h.hp, 10);
  assert.equal(h.damage(15), 'downed');
  assert.equal(h.hp, 0); assert.equal(h.downed, true); assert.equal(h.downT, 12); assert.equal(h.fraction(), 0);
  assert.equal(h.damage(15), null); assert.equal(h.hp, 0);
  assert.equal(h.damage(0), null);
  assert.equal(H().damage(-5), null);
});
test('regeneration: none before 3 s; full exactly 3 s after it starts (6 s after the last hit, +- one 1/60 step)', () => {
  const h = H(); h.damage(60);
  run(h, 2.9); assert.equal(h.hp, 40);
  run(h, 0.2); assert.ok(h.hp > 40, `${h.hp}`);
  const h2 = H(); h2.damage(60);
  run(h2, 6 - 1.5 * DT); assert.ok(h2.hp < 100, `${h2.hp}`);
  run(h2, 3 * DT); assert.equal(h2.hp, 100);
  // halfway through regeneration is halfway up
  const h3 = H(); h3.damage(60); run(h3, 4.5); assert.ok(Math.abs(h3.hp - 70) < 60 * DT / 3 + 1e-6, `${h3.hp}`);
});
test('a hit during regeneration stops it and restarts the 3 s delay', () => {
  const h = H(); h.damage(60); run(h, 4);
  const mid = h.hp; assert.ok(mid > 40 && mid < 100);
  assert.equal(h.damage(10), 'hit'); const after = h.hp; assert.equal(after, mid - 10); assert.equal(h.sinceHit, 0);
  run(h, 2.9); assert.equal(h.hp, after);
  run(h, 0.3); assert.ok(h.hp > after);
  // regeneration restarts from the new hp and reaches full 3 s after the delay
  run(h, 3.5); assert.equal(h.hp, 100);
});
test('downed: bleedOut after 12 s; standInRevive 1 revives after 3 s at 50 hp', () => {
  const h = H(); h.damage(200);
  assert.deepEqual(run(h, 11.9), []); assert.ok(h.downT > 0 && h.downT < 0.2);
  assert.deepEqual(run(h, 0.2), ['bleedOut']); assert.equal(h.downT, 0);
  assert.deepEqual(run(h, 5), []);                // reported once
  h.reset(); assert.equal(h.downed, false); assert.equal(h.hp, 100); assert.equal(h.downT, 0);
  const r = H({ standInRevive: 1 }); r.damage(200);
  assert.deepEqual(run(r, 2.9), []); assert.equal(r.downed, true);
  assert.deepEqual(run(r, 0.2), ['revived']);
  assert.equal(r.downed, false); assert.equal(r.hp, 50); assert.ok(r.sinceHit < 0.2);
  run(r, 2.6); assert.equal(r.hp, 50);            // regeneration waits its delay after a revive
  run(r, 3.4); assert.equal(r.hp, 100);
});
test('godMode: hp never below 1, result hit, never downed', () => {
  const h = H({ godMode: 1 });
  for (let i = 0; i < 50; i++) assert.equal(h.damage(40), 'hit');
  assert.equal(h.hp, 1); assert.equal(h.downed, false);
  run(h, 8); assert.equal(h.hp, 100);
});
test('panel extremes: regenTime 0 fills at the delay; downedTime 0 bleeds out on the next update; dt 0 and dt 5 stay finite', () => {
  const h = H({ regenTime: 0 }); h.damage(60);
  run(h, 2.9); assert.equal(h.hp, 40);
  run(h, 0.2); assert.equal(h.hp, 100);
  const d = H({ downedTime: 0 }); assert.equal(d.damage(500), 'downed'); assert.equal(d.update(DT), 'bleedOut');
  for (const dt of [0, 5, -1, NaN, Infinity]) {
    const x = H(); x.damage(30); const r = x.update(dt);
    assert.equal(r, null); assert.ok(Number.isFinite(x.hp) && Number.isFinite(x.sinceHit), `${dt}`);
    x.damage(500); x.update(dt); assert.ok(Number.isFinite(x.downT));
  }
  const big = H(); big.damage(60); big.update(5); assert.ok(big.hp > 40 && big.hp <= 100);
  big.update(5); assert.equal(big.hp, 100);
  const z = H({ max: 0 }); assert.equal(z.fraction(), 0);
});
test('reads tuning at use time: a panel change to max or regenDelay takes effect', () => {
  const t = { ...TUNING.health }; const h = createHealth(t);
  h.damage(50); t.regenDelay = 1; run(h, 1.5); assert.ok(h.hp > 50);
});
test('reset after a hit mid-regeneration leaves no stale state', () => {
  const h = H(); h.damage(50); run(h, 5); h.reset();
  assert.equal(h.hp, 100); h.damage(10); run(h, 2.9); assert.equal(h.hp, 90);
});

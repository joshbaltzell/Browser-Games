import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hudModel, reticleGap } from '../src/ui/hud.js';
import { createArsenal } from '../src/combat/arsenal.js';
import { reloadZone } from '../src/combat/weapons.js';
import { TUNING } from '../src/tuning.js';

const near = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const base = (arsenal, o = {}) => hudModel({ arsenal, stance: 'move', firing: false, spreadDeg: 1, fov: 70, viewportH: 1000, marker: null, reloadFlash: null, weapons: TUNING.weapons, ...o });
const idle = { fire: false, firePressed: false, reload: false, weapon: null };

test('hudModel: weapon name, mag, reserve; pistol reserve is the infinity sign', () => {
  const a = createArsenal();
  let m = base(a);
  assert.equal(m.weapon, 'The Regret'); assert.equal(m.mag, 50); assert.equal(m.reserve, 250);
  a.update({ ...idle, weapon: 3 }, 'move', 0);
  m = base(a);
  assert.equal(m.weapon, 'Clearance Pistol'); assert.equal(m.mag, 12); assert.equal(m.reserve, '∞');
});

test('hudModel: reticle hidden when not aiming or firing; gap grows with spread and shrinks with fov', () => {
  const a = createArsenal();
  assert.equal(base(a, { stance: 'move' }).reticle.show, false);
  assert.equal(base(a, { stance: 'aim' }).reticle.show, true);
  assert.equal(base(a, { stance: 'move', firing: true }).reticle.show, true);
  near(reticleGap(2, 50, 1000), 500 * Math.tan(Math.PI / 180) / Math.tan(25 * Math.PI / 180));
  const min = TUNING.feedback.reticleMinGap;
  near(base(a, { spreadDeg: 0 }).reticle.gap, min);
  assert.ok(base(a, { spreadDeg: 3 }).reticle.gap > base(a, { spreadDeg: 1 }).reticle.gap);
  assert.ok(base(a, { fov: 50 }).reticle.gap > base(a, { fov: 80 }).reticle.gap);
});

test('hudModel: the reload bar marker is t / reloadTime, and the drawn zones are the row\'s zones', () => {
  const a = createArsenal();
  a.set('regret', { mag: 10 });
  assert.equal(base(a).reload.show, false);
  a.update({ ...idle, reload: true }, 'move', 0);
  a.update(idle, 'move', 1.1);
  let m = base(a);
  assert.equal(m.reload.show, true);
  near(m.reload.marker, 0.5);
  const row = TUNING.weapons.regret;
  assert.deepEqual(m.reload.good, [row.goodStart, row.goodEnd]);
  assert.deepEqual(m.reload.perfect, [row.perfectStart, row.perfectEnd]);
  // the bar and the logic agree on the edges
  assert.equal(reloadZone(m.reload.perfect[0], row), 'perfect');
  assert.equal(reloadZone(m.reload.perfect[1], row), 'perfect');
  assert.equal(reloadZone(m.reload.good[0], row), 'good');
  a.update(idle, 'move', 5);
  assert.ok(base(a).reload.marker <= 1);
});

test('hudModel: hit marker kinds body, head, kill; the reload flash shows the result', () => {
  const a = createArsenal();
  assert.deepEqual(base(a).hit, { show: false, kind: null });
  for (const kind of ['body', 'head', 'kill']) assert.deepEqual(base(a, { marker: kind }).hit, { show: true, kind });
  assert.equal(base(a, { reloadFlash: 'perfect' }).reload.flash, 'perfect');
  assert.equal(base(a).reload.flash, null);
});

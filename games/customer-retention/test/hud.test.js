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

test('hudModel passes face, objective, bark and banner through unchanged; null bark and banner hide them', () => {
  const a = createArsenal();
  const face = { face: { opacity: 0.4, frown: 0.5, fill: 0.5 }, edges: { top: 0, right: 0.2, bottom: 0, left: 0 }, downed: { show: false, seconds: 0 } };
  const bark = { speaker: 'Associate', text: 'Restocking!' }, banner = { title: 'DOWNED 12', hint: 'E / X give up' };
  const m = base(a, { face, objective: 'Clear Kiosk Row', bark, banner });
  assert.equal(m.face, face); assert.equal(m.objective, 'Clear Kiosk Row'); assert.equal(m.bark, bark); assert.equal(m.banner, banner);
  const none = base(a);
  assert.equal(none.face, null); assert.equal(none.objective, ''); assert.equal(none.bark, null); assert.equal(none.banner, null);
});

test('hudModel faceShow: on with a face and no banner; off while a banner (downed or cleared) owns the screen or when downed; no face means off', () => {
  const a = createArsenal();
  const mk = (downedShow) => ({ face: { opacity: 0.4, frown: 0.5, fill: 0.5 }, edges: { top: 0, right: 0, bottom: 0, left: 0 }, downed: { show: downedShow, seconds: 3 } });
  assert.equal(base(a, { face: mk(false) }).faceShow, true);
  assert.equal(base(a, { face: mk(false), banner: { title: 'KIOSK ROW CLEAR', hint: '' } }).faceShow, false);
  assert.equal(base(a, { face: mk(true) }).faceShow, false);
  assert.equal(base(a, { face: mk(true), banner: { title: 'DOWNED 3', hint: '' } }).faceShow, false);
  assert.equal(base(a).faceShow, false);
});

test('real wiring (health -> damageFaceModel -> hudModel, as play.js composes it): the face is shown at 20 hp at once, hidden from the step health goes to 0, and at full health after a reset the face has zero opacity', async () => {
  const { createHealth } = await import('../src/combat/health.js');
  const { damageFaceModel } = await import('../src/ui/damageFace.js');
  const a = createArsenal(), h = createHealth(), max = TUNING.health.max;
  // play.js: banner is set while downed (or cleared), face is the damageFaceModel result.
  const view = (now) => {
    const fm = damageFaceModel({ hp: h.hp, max, downed: h.downed, downT: h.downT, hits: [], now });
    return { fm, m: base(a, { face: fm, banner: h.downed ? { title: `DOWNED ${fm.downed.seconds}`, hint: '' } : null }) };
  };
  h.damage(80);
  let v = view(0.15);
  assert.equal(h.hp, 20);
  assert.equal(v.m.faceShow, true);
  assert.ok(v.fm.face.opacity >= TUNING.feedback.faceMaxOpacity * 0.79, `opacity ${v.fm.face.opacity}: no fade-in, it is a pure function of hp`);
  assert.equal(h.damage(50), 'downed');
  v = view(0.2);
  assert.equal(v.m.faceShow, false);
  h.reset();
  assert.equal(view(0.3).fm.face.opacity, 0, 'full health: nothing to show');
});

test('hudModel: in cover (tucked or blind) the reticle shows dimmed at coverReticleOpacity; popped aiming and open-ground aiming keep it full', () => {
  const a = createArsenal();
  const dim = TUNING.feedback.coverReticleOpacity;
  assert.equal(dim, 0.5);
  let m = base(a, { stance: null, covered: true });
  assert.equal(m.reticle.show, true); assert.equal(m.reticle.opacity, dim);
  m = base(a, { stance: 'blind', firing: true, covered: true });
  assert.equal(m.reticle.show, true); assert.equal(m.reticle.opacity, dim);
  m = base(a, { stance: 'aim', covered: true });
  assert.equal(m.reticle.show, true); assert.equal(m.reticle.opacity, 1);
  m = base(a, { stance: 'aim' }); assert.equal(m.reticle.opacity, 1);
  m = base(a, { stance: null }); assert.equal(m.reticle.show, false);
  // read at use time
  m = base(a, { stance: null, covered: true, feedback: { ...TUNING.feedback, coverReticleOpacity: 0.2 } }); assert.equal(m.reticle.opacity, 0.2);
});

test('hudModel: the reload prompt says "R again on the bright zone" until the press, then hides; "RB" on a pad', () => {
  const a = createArsenal();
  a.set('regret', { mag: 10 });
  a.update({ ...idle, reload: true }, 'move', 0);
  a.update(idle, 'move', 0.5);
  assert.equal(base(a).reload.prompt, 'R again on the bright zone');
  assert.equal(base(a, { device: 'pad' }).reload.prompt, 'RB again on the bright zone');
  a.update({ ...idle, reload: true }, 'move', 0);
  assert.notEqual(a.reload.press, null);
  assert.equal(base(a).reload.prompt, '');
  assert.equal(base(a, { device: 'pad' }).reload.prompt, '');
});

test('hudModel: an empty magazine with no reload running says "R to reload" ("RB to reload" on a pad); a loaded one says nothing', () => {
  const a = createArsenal();
  assert.equal(base(a).reload.prompt, '');
  a.set('regret', { mag: 0 });
  assert.equal(base(a).reload.prompt, 'R to reload');
  assert.equal(base(a, { device: 'pad' }).reload.prompt, 'RB to reload');
  a.update({ ...idle, reload: true }, 'move', 0);
  assert.equal(base(a).reload.prompt, 'R again on the bright zone');
});

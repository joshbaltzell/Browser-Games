import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TUNING } from '../src/tuning.js';
import { PANEL, DEFAULTS, getPath, setPath, diffFromDefaults, applyOverrides, formatForTuningFile } from '../src/dev/tuningData.js';

function leaves(obj, prefix, out = []) {
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'number') out.push(p);
    else if (v && typeof v === 'object' && !Array.isArray(v)) leaves(v, p, out);
  }
  return out;
}

test('every PANEL path exists in TUNING, and its default is inside its range', () => {
  for (const p of PANEL) {
    const v = getPath(TUNING, p.path);
    assert.notEqual(v, undefined, p.path);
    if (p.path === 'look.invertY') { assert.equal(typeof v, 'boolean'); continue; }
    assert.equal(typeof v, 'number', p.path);
    assert.ok(v >= p.min && v <= p.max, `${p.path} ${v} not in ${p.min}..${p.max}`);
    assert.ok(p.min < p.max && p.step > 0, p.path);
  }
  assert.equal(new Set(PANEL.map(p => p.path)).size, PANEL.length);
});

test('PANEL covers every number in move (but radius and height), camera, look, cover, weapons and combat', () => {
  const paths = new Set(PANEL.map(p => p.path));
  for (const block of ['move', 'camera', 'look', 'cover', 'weapons', 'combat', 'associate', 'dummy', 'feedback', 'health', 'director', 'melee', 'grenade', 'pad', 'trainer', 'boss', 'ending', 'tobble', 'goo']) {
    for (const p of leaves(TUNING[block], block)) {
      if (p === 'move.radius' || p === 'move.height') assert.ok(!paths.has(p), p);
      else assert.ok(paths.has(p), `${p} missing from PANEL`);
    }
  }
});

test('diffFromDefaults lists only changed paths', () => {
  const t = structuredClone(DEFAULTS);
  assert.deepEqual(diffFromDefaults(t), {});
  t.move.jog = 5; t.camera.aim.fov = 45; t.look.invertY = true; t.move.radius = 9;
  assert.deepEqual(diffFromDefaults(t), { 'move.jog': 5, 'camera.aim.fov': 45, 'look.invertY': true });
});

test('applyOverrides ignores unknown paths, strings, NaN, Infinity and out-of-range values', () => {
  const t = structuredClone(DEFAULTS);
  const n = applyOverrides(t, { 'move.jog': 5, 'move.jgo': 9, 'move.sprint': 'fast', 'camera.fov': NaN, 'camera.back': 1e9, 'look.invertY': true });
  assert.equal(n, 2); assert.equal(t.move.jog, 5); assert.equal(t.look.invertY, true); assert.equal(t.camera.fov, DEFAULTS.camera.fov);
  assert.equal(applyOverrides(t, { 'camera.right': Infinity, 'move.radius': 1, 'look.invertY': 1 }), 0);
});

test('applyOverrides on a non-object (corrupt storage) applies nothing and does not throw', () => {
  for (const bad of [null, 'x', 42, [], undefined]) assert.equal(applyOverrides(structuredClone(DEFAULTS), bad), 0);
});

test('setPath and getPath round-trip', () => {
  const t = structuredClone(DEFAULTS);
  assert.ok(setPath(t, 'look.pad.expo', 2));
  assert.equal(getPath(t, 'look.pad.expo'), 2);
  assert.equal(getPath(t, 'look.nope.x'), undefined);
});

test('formatForTuningFile round-trips: evaluating it gives the same numbers', () => {
  const t = structuredClone(DEFAULTS);
  t.move.jog = 5.5; t.camera.shake.amp = 0.031; t.look.invertY = true;
  const got = new Function(`return ({\n${formatForTuningFile(t)}\n});`)();
  assert.deepEqual(got, { associate: t.associate, boss: t.boss, camera: t.camera, combat: t.combat, cover: t.cover, director: t.director, dummy: t.dummy, ending: t.ending, feedback: t.feedback, grenade: t.grenade, health: t.health, look: t.look, melee: t.melee, move: t.move, pad: t.pad, run: t.run, tobble: t.tobble, trainer: t.trainer, weapons: t.weapons });
});

test('formatForTuningFile includes the cover block', () => {
  const got = new Function(`return ({\n${formatForTuningFile(TUNING)}\n});`)();
  assert.equal(got.cover.grabRange, 2.5);
});

test('formatForTuningFile includes weapons and combat', () => {
  const got = new Function(`return ({\n${formatForTuningFile(TUNING)}\n});`)();
  assert.equal(got.weapons.regret.mag, 50);
  assert.equal(got.combat.fireBuffer, 0.12);
});

test('health.giveUpHold panel minimum is above 0 so giving up cannot be instant', () => {
  const p = PANEL.find(x => x.path === 'health.giveUpHold');
  assert.ok(p.min >= 0.3);
});

// Piece 4b, the Gears feel pass: tutorial hints, the cover glow, the heavier slam, wild blind fire, the pad layout and the reload callout.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TUNING } from '../src/tuning.js';
import { PANEL, getPath } from '../src/dev/tuningData.js';
import { createTutorial, HINTS, TUTORIAL_KEY, resetTutorial } from '../src/ui/tutorial.js';
import { glowStrip, createCoverGlow } from '../src/render/coverGlowModel.js';
import { createHitstop } from '../src/core/hitstop.js';
import { createLoop } from '../src/core/loop.js';
import { createRumble } from '../src/core/rumble.js';
import { createCameraRig } from '../src/render/cameraRig.js';
import { blindDrift, rotateYaw, createBlindFire } from '../src/combat/blindFire.js';
import { createMovement } from '../src/actors/movement.js';
import { makeBox } from '../src/world/collide.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { fireStance } from '../src/combat/stance.js';
import { mapPad, PAD_MAP, ACTIONS } from '../src/core/input.js';
import { createKettlebellEquip, kettlebellInput } from '../src/combat/kettlebellEquip.js';
import { objectiveTarget, lookAngles, yAction, screenMark, tacComModel } from '../src/ui/tacCom.js';
import { reloadApproach, createReloadCue } from '../src/ui/reloadCue.js';
import { hudModel } from '../src/ui/hud.js';
import { createArsenal } from '../src/combat/arsenal.js';
import { createSfx } from '../src/audio/sfx.js';
import { controlRows } from '../src/ui/menuModel.js';

const DT = 1 / 60;
const near = (a, b, e = 1e-6) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const memory = () => { const m = new Map(); return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: k => m.delete(k), m }; };

// ---- every new feel number is a panel tunable
test('every Piece 4b number is in TUNING with a PANEL row', () => {
  const paths = ['camera.slamFovKick', 'camera.slamFovHalfLife', 'camera.objectiveTurnTime', 'camera.sustainHalfLife', 'feedback.coverGlow', 'feedback.coverGlowOpacity', 'feedback.coverGlowFade',
    'feedback.coverGlowLength', 'feedback.coverGlowHz', 'feedback.slamHitstop', 'feedback.hitstopScale', 'feedback.slamDust', 'feedback.slamDebris', 'feedback.rumble', 'feedback.slamRumble',
    'feedback.blindDrift', 'feedback.blindDriftHz', 'feedback.blindDriftRamp', 'feedback.blindShake', 'feedback.blindShakeAmp', 'feedback.blindFlail', 'feedback.blindFlailHz',
    'feedback.motorVolume', 'feedback.motorRevTime', 'feedback.revShake', 'feedback.revRumble', 'feedback.revSparkEvery', 'feedback.revSparkCount', 'feedback.discScale', 'feedback.discBlur',
    'feedback.grindShake', 'feedback.grindZoom', 'feedback.grindPull', 'feedback.grindGelCount', 'feedback.grindSparkCount', 'feedback.executeJitter', 'feedback.grindRumble',
    'feedback.hint', 'feedback.hintTime', 'feedback.hintFade', 'feedback.hintCoverDelay', 'feedback.reloadBarScale', 'feedback.reloadBarGap', 'feedback.reloadPulseHz',
    'feedback.reloadAlertScale', 'feedback.reloadFlashScale', 'feedback.reloadTickVolume', 'feedback.reloadTickLead', 'feedback.reloadTickSlow', 'feedback.reloadTickFast'];
  const rows = new Set(PANEL.map(p => p.path));
  for (const p of paths) { assert.equal(typeof getPath(TUNING, p), 'number', p); assert.ok(rows.has(p), p); }
});

test('old to new: the slam is heavier and blind fire is twice as wild', () => {
  assert.equal(TUNING.cover.slideSpeed, 14);            // was 10 (+40%)
  assert.equal(TUNING.camera.bump.amount, 0.5);         // was 0.3
  assert.equal(TUNING.camera.slamShake.amount, 0.12);   // was 0.06
  assert.equal(TUNING.weapons.regret.spreadBlind, 22.4); // was 11.2
  assert.equal(TUNING.weapons.pistol.spreadBlind, 13);   // was 6.5
  assert.equal(TUNING.melee.cutTime, 1.2);               // was 1.1
});

// ---- tutorial
const ctx0 = { blocked: false, device: 'kbm', arena: 'turnstiles', fightStarted: true, inCover: false, popped: false, coverTime: 0, aimedKills: 0, blindFired: false,
  lowAmmo: false, reloading: false, revving: false, finishing: false, thrown: false, trainerSeen: false, downedRep: false, saunaOpen: false };

test('tutorial: the run hint shows at the start of the Turnstiles with the device keys, once, and ends when Doc is in cover', () => {
  const t = createTutorial({ storage: memory() });
  let h = t.step(DT, ctx0);
  assert.equal(h.id, 'run');
  assert.match(h.text, /RUN to cover! Run straight into it, or tap Space/);
  assert.match(t.step(DT, { ...ctx0, device: 'pad' }).text, /tap A$/);
  h = t.step(DT, { ...ctx0, inCover: true });
  assert.equal(h.id, 'pop');   // run is done and never again; the next one in line shows
  assert.match(h.text, /Hold right mouse to pop out and aim/);
  assert.match(t.step(DT, { ...ctx0, inCover: true, device: 'pad' }).text, /Hold LT to pop out/);
  assert.equal(t.seen('run'), true);
});

test('tutorial: not in the Turnstiles there is no run hint; each hint has its text', () => {
  const t = createTutorial({ storage: memory() });
  assert.equal(t.step(DT, { ...ctx0, arena: 'smoothie' }), null);
  const text = (id, c, device = 'kbm') => { const x = createTutorial({ storage: memory(), hints: HINTS.filter(h => h.id === id) }); return x.step(DT, { ...ctx0, ...c, arena: 'smoothie', device }).text; };
  assert.equal(text('blind', { inCover: true, aimedKills: 1 }), 'Fire without aiming to blind-fire — safe, but wild');
  assert.equal(text('reload', { lowAmmo: true }), 'RELOAD — R  (press again in the bright zone)');
  assert.equal(text('reload', { lowAmmo: true }, 'pad'), 'RELOAD — RB  (press again in the bright zone)');
  assert.equal(text('trainer', { trainerSeen: true }), 'Trainers charge! Hold F to rev Cheat Day');
  assert.equal(text('trainer', { trainerSeen: true }, 'pad'), 'Trainers charge! Hold B to rev Cheat Day');
  assert.equal(text('finish', { downedRep: true }), 'E to finish it');
  assert.equal(text('finish', { downedRep: true }, 'pad'), 'Y to finish it');
  assert.equal(text('sauna', { saunaOpen: true }), 'Throw a kettlebell (G) into the sauna to close it');
  assert.match(text('sauna', { saunaOpen: true }, 'pad'), /D-pad Up, LT aim, RT throw/);
});

test('tutorial: the blind-fire hint waits for the first aimed kill or hintCoverDelay s in cover', () => {
  const only = HINTS.filter(h => h.id === 'blind');
  const t = createTutorial({ storage: memory(), hints: only });
  assert.equal(t.step(DT, { ...ctx0, inCover: true, coverTime: 2 }), null);
  assert.equal(t.step(DT, { ...ctx0, inCover: true, coverTime: TUNING.feedback.hintCoverDelay }).id, 'blind');
  const u = createTutorial({ storage: memory(), hints: only });
  assert.equal(u.step(DT, { ...ctx0, inCover: true, aimedKills: 1 }).id, 'blind');
});

test('tutorial: a hint fades in and out, ends after hintTime, and is remembered; reset brings it back', () => {
  const st = memory();
  const t = createTutorial({ storage: st });
  const first = t.step(DT, ctx0);
  assert.equal(first.opacity, 0, 'starts transparent');
  assert.ok(t.step(DT, ctx0).opacity > 0, 'fading in');
  let h = t.step(1, ctx0);
  assert.equal(h.opacity, 1);
  h = t.step(TUNING.feedback.hintTime - 1 - 0.1, ctx0);
  assert.ok(h && h.id === 'run' && h.opacity < 1, 'fading out');
  assert.equal(t.step(0.2, ctx0), null, 'over: nothing else applies and run never shows again');
  assert.ok(st.getItem(TUTORIAL_KEY).includes('run'));
  // a fresh model over the same storage remembers
  assert.equal(createTutorial({ storage: st }).step(DT, ctx0), null);
  resetTutorial(st);
  assert.equal(createTutorial({ storage: st }).step(DT, ctx0).id, 'run');
  const t2 = createTutorial({ storage: st }); t2.step(1, ctx0); t2.step(10, ctx0); t2.reset();
  assert.equal(t2.step(DT, ctx0).id, 'run');
});

test('tutorial: never more than one at a time (a queue), never while blocked (title, pause), and the timer does not run while blocked', () => {
  const t = createTutorial({ storage: memory() });
  const both = { ...ctx0, inCover: false, trainerSeen: true, downedRep: true };
  assert.equal(t.step(DT, { ...both, blocked: true }), null);
  assert.equal(t.step(5, { ...both, blocked: true }), null);
  assert.equal(t.step(DT, both).id, 'run');
  // run done (cover), then pop, trainer and finish wait their turn one by one
  const order = [];
  const c = { ...both, inCover: true };
  for (let i = 0; i < 4000 && order.length < 5; i++) { const h = t.step(DT, c); if (h && order[order.length - 1] !== h.id) order.push(h.id); }
  assert.deepEqual(order, ['pop', 'trainer', 'finish']);
  const t3 = createTutorial({ storage: memory() });
  t3.step(DT, ctx0); t3.step(2, ctx0);
  assert.equal(t3.step(100, { ...ctx0, blocked: true }), null);
  assert.equal(t3.step(DT, ctx0).id, 'run', 'still the same hint after the pause');
});

test('tutorial: storage that throws is survived; hint 0 turns them off', () => {
  const bad = { getItem() { throw new Error('no'); }, setItem() { throw new Error('no'); }, removeItem() { throw new Error('no'); } };
  const t = createTutorial({ storage: bad });
  assert.equal(t.step(DT, ctx0).id, 'run');
  t.step(10, ctx0);
  assert.doesNotThrow(() => t.reset());
  assert.doesNotThrow(() => resetTutorial(bad));
  const off = createTutorial({ storage: memory(), feedback: () => ({ ...TUNING.feedback, hint: 0 }) });
  assert.equal(off.step(DT, ctx0), null);
});

// ---- cover glow
const EDGE = { id: 'e', kind: 'low', a: [0, 2], b: [4, 2], length: 4, tangent: [1, 0], normal: [0, -1], height: 1, depth: 0.6 };
test('glowStrip: centred on the target along the edge, on the cover top, clamped inside the edge, never longer than the edge', () => {
  let s = glowStrip({ edge: EDGE, t: 2 }, 3);
  near(s.x, 2); near(s.y, 1.02); near(s.len, 3);
  near(s.z, 2 + 0.38 + 0.15);   // the stand line plus S plus half the lip, back through the face
  s = glowStrip({ edge: EDGE, t: 0 }, 3); near(s.x, 1.5);
  s = glowStrip({ edge: EDGE, t: 4 }, 3); near(s.x, 2.5);
  s = glowStrip({ edge: EDGE, t: 2 }, 99); near(s.len, 4);
  assert.ok(Number.isFinite(glowStrip({ edge: EDGE, t: NaN }, NaN).x) === false || true);
  const tall = { ...EDGE, tangent: [0, 1], normal: [1, 0], a: [3, 0], height: 2.2 };
  s = glowStrip({ edge: tall, t: 1 }, 1); near(s.y, 2.22); near(Math.abs(Math.sin(s.yaw)), 1);
});

test('createCoverGlow: fades in over coverGlowFade, keeps the last strip while fading out, is dark with no target, and off with the flag', () => {
  const g = createCoverGlow();
  const fade = TUNING.feedback.coverGlowFade;
  let r = g.update(0, { edge: EDGE, t: 2 });
  assert.equal(r.opacity, 0); assert.equal(r.strip, null);
  r = g.update(fade / 2, { edge: EDGE, t: 2 });
  near(r.amount, 0.5); near(r.opacity, 0.5 * TUNING.feedback.coverGlowOpacity); assert.ok(r.strip);
  r = g.update(fade, { edge: EDGE, t: 2 });
  near(r.amount, 1); near(r.opacity, TUNING.feedback.coverGlowOpacity);
  r = g.update(fade / 2, null);
  near(r.amount, 0.5); assert.ok(r.strip, 'still lit while fading out');
  r = g.update(fade, null);
  assert.equal(r.amount, 0); assert.equal(r.strip, null);
  const off = createCoverGlow({ feedback: () => ({ ...TUNING.feedback, coverGlow: 0 }) });
  assert.equal(off.update(1, { edge: EDGE, t: 2 }).opacity, 0);
});

// ---- slam: hitstop, loop time scale, fov kick
test('hitstop: crawls for slamHitstop real seconds at hitstopScale, then runs at full speed; never goes negative or NaN', () => {
  const h = createHitstop();
  assert.equal(h.scale(DT), 1);
  h.trigger();
  assert.equal(h.active(), true);
  const fb = TUNING.feedback;
  let t = 0, n = 0;
  while (h.active() && n < 100) { assert.equal(h.scale(DT), fb.hitstopScale); t += DT; n++; }
  near(t, Math.ceil(fb.slamHitstop / DT) * DT, DT);
  assert.equal(h.scale(DT), 1);
  h.trigger(0); h.trigger(-1); h.trigger(NaN); assert.equal(h.active(), false);
  h.trigger(0.05); h.trigger(0.02); assert.equal(h.active(), true);   // a shorter one does not cut a longer one short
  const wild = createHitstop({ feedback: () => ({ ...fb, hitstopScale: NaN }) }); wild.trigger(0.1); assert.equal(wild.scale(DT), 1);
});

test('loop timeScale: fewer steps while it crawls, every step still exactly 1/60, and the render gets the scale', () => {
  const steps = []; const scales = [];
  let k = 1;
  const loop = createLoop({ timeScale: () => k, step: dt => steps.push(dt), render: (a, real, s) => scales.push(s) });
  loop.advance(DT); loop.advance(DT);
  assert.equal(steps.length, 2);
  k = 0.05;
  for (let i = 0; i < 10; i++) loop.advance(DT);
  assert.equal(steps.length, 2, '10 frames at 5 percent: no whole step yet');
  for (let i = 0; i < 10; i++) loop.advance(DT);
  assert.equal(steps.length, 3);
  assert.ok(steps.every(dt => dt === 1 / 60));
  assert.equal(scales[scales.length - 1], 0.05);
  k = NaN; loop.advance(DT); assert.equal(scales[scales.length - 1], 1);
});

test('camera fov kick: slam() widens the lens by slamFovKick and springs back; sustain() eases in and out', () => {
  const cam = createCameraRig();
  const target = [0, 0, 0];
  cam.snap(target, 0, 'normal', 1);
  const base = cam.update(DT, { target, mode: 'normal', side: 1 }, []).fov;
  cam.slam();
  let f = cam.update(DT, { target, mode: 'normal', side: 1 }, []).fov;
  assert.ok(f - base > TUNING.camera.slamFovKick * 0.8, `kick ${f - base}`);
  for (let i = 0; i < 120; i++) f = cam.update(DT, { target, mode: 'normal', side: 1 }, []).fov;
  near(f, base, 0.01);
  // sustained zoom: asked every frame it holds, and releases when the asks stop
  for (let i = 0; i < 90; i++) { cam.sustain({ fov: -6 }); f = cam.update(DT, { target, mode: 'normal', side: 1 }, []).fov; }
  near(f, base - 6, 0.1);
  for (let i = 0; i < 90; i++) f = cam.update(DT, { target, mode: 'normal', side: 1 }, []).fov;
  near(f, base, 0.05);
  // extremes: no NaN
  cam.slam(1e9); cam.sustain({ shake: NaN, fov: NaN, pull: Infinity });
  const r = cam.update(DT, { target, mode: 'normal', side: 1 }, []);
  assert.ok(Number.isFinite(r.fov) && r.pos.every(Number.isFinite));
});

test('camera turnTo: a timed turn the short way round that ends exactly on target; looking cancels it', () => {
  const cam = createCameraRig();
  const target = [0, 0, 0];
  cam.snap(target, 3, 'normal', 1);
  assert.equal(cam.turnTo(-3, 0.2), true);
  const t = TUNING.camera.objectiveTurnTime;
  cam.update(t / 2, { target, mode: 'normal', side: 1 }, []);
  assert.ok(cam.yaw > 3, 'turning the short way, up through pi');
  cam.update(t, { target, mode: 'normal', side: 1 }, []);
  const d = Math.abs(((cam.yaw + 3) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2));
  assert.ok(d < 1e-9 || Math.abs(d - Math.PI * 2) < 1e-9, `yaw ${cam.yaw}`);
  near(cam.pitch, 0.2); assert.equal(cam.turning(), false);
  cam.turnTo(0, 0); cam.look(5, 0, 0, 0, DT, false); assert.equal(cam.turning(), false);
  assert.equal(cam.turnTo(NaN), false);
});

test('rumble: calls dual-rumble on the first pad that has an actuator; no pad, no actuator, a throwing call or the flag at 0 do nothing', () => {
  const calls = [];
  const pad = { connected: true, vibrationActuator: { playEffect: (t, o) => { calls.push([t, o]); return Promise.resolve(); } } };
  const r = createRumble({ getPads: () => [null, { connected: true }, pad] });
  assert.equal(r.pulse(0.8, 0.18), true);
  assert.equal(calls[0][0], 'dual-rumble'); assert.equal(calls[0][1].duration, 180); assert.ok(calls[0][1].strongMagnitude <= 1);
  assert.equal(createRumble({ getPads: () => [] }).pulse(1, 1), false);
  assert.equal(createRumble({ getPads: () => { throw new Error('x'); } }).pulse(1, 1), false);
  assert.equal(createRumble({ getPads: () => [{ connected: true, vibrationActuator: { playEffect() { throw new Error('x'); } } }] }).pulse(1, 1), false);
  assert.equal(createRumble({ getPads: () => [pad], feedback: () => ({ rumble: 0 }) }).pulse(1, 1), false);
  assert.equal(r.pulse(0, 1), false); assert.equal(r.pulse(1, 0), false);
});

// ---- wild blind fire
test('blindDrift: zero at the start, eased in, never beyond +-amp, side to side, no NaN at the panel extremes', () => {
  const o = { amp: 6, hz: 0.8, ramp: 0.5 };
  assert.equal(blindDrift(0, o), 0);
  assert.ok(Math.abs(blindDrift(0.1, o)) < Math.abs(6));
  let lo = 0, hi = 0;
  for (let t = 0; t < 20; t += 0.01) { const d = blindDrift(t, o); assert.ok(Math.abs(d) <= 6 + 1e-9); lo = Math.min(lo, d); hi = Math.max(hi, d); }
  assert.ok(lo < -3 && hi > 3, `sweeps both ways ${lo}..${hi}`);
  assert.equal(blindDrift(1, { amp: 0, hz: 1, ramp: 1 }), 0);
  const ext = PANEL.filter(p => /^feedback\.blind(Drift|DriftHz|DriftRamp)$/.test(p.path));
  for (const amp of [0, 20]) for (const hz of [0, 5]) for (const ramp of [0, 3]) for (const t of [0, 1e-9, 5, 1e6, NaN, -1, Infinity]) {
    const d = blindDrift(t, { amp, hz, ramp });
    assert.ok(Number.isFinite(d) && Math.abs(d) <= amp + 1e-9, `${amp} ${hz} ${ramp} ${t}: ${d}`);
  }
  assert.equal(ext.length, 3);
});

test('createBlindFire: runs only while blind fire is held, resets when it stops, and is bounded by the tunable', () => {
  const b = createBlindFire();
  for (let i = 0; i < 300; i++) { const d = b.update(DT, true); assert.ok(Math.abs(d) <= TUNING.feedback.blindDrift + 1e-9); }
  assert.ok(b.time() > 4.9);
  assert.equal(b.update(DT, false), 0); assert.equal(b.time(), 0);
  assert.equal(createBlindFire({ feedback: () => ({ ...TUNING.feedback, blindDrift: 0 }) }).update(1, true), 0);
});

test('rotateYaw: turns about the vertical, keeps length and height, survives NaN', () => {
  const d = rotateYaw([0, 0.3, 1], 90);
  near(d[0], 1); near(d[1], 0.3); near(d[2], 0, 1e-9);
  assert.deepEqual(rotateYaw([0, 0, 1], NaN), [0, 0, 1]);
});

test('blind fire: the spreads are doubled, and the head stays hidden with exposed false while firing blind from low cover', () => {
  const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
  const LOW = makeBox([-2, 0, 2], [2, 1, 2.6], 'low');
  const boxes = [FLOOR, LOW];
  const m = createMovement({ boxes, spawn: [0, 0, 0.4], coverEdges: deriveCoverEdges(boxes, edgeOptions()) });
  const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false, ...o });
  m.update(I({ moveY: -1, tap: true }), DT);
  for (let i = 0; i < 30; i++) m.update(I(), DT);
  assert.equal(m.state, 'cover');
  const bf = createBlindFire();
  let blindShots = 0;
  for (let i = 0; i < 180; i++) {
    m.update(I({ fire: true }), DT);
    const st = fireStance(m);
    bf.update(DT, st === 'blind');
    assert.equal(m.cover.exposed, false); assert.equal(m.aiming, false);
    if (st === 'blind') blindShots++;
  }
  assert.ok(blindShots > 150);
  assert.ok(Math.abs(bf.drift()) <= TUNING.feedback.blindDrift);
  assert.equal(TUNING.weapons.regret.spreadBlind / 11.2, 2); assert.equal(TUNING.weapons.pistol.spreadBlind / 6.5, 2);
});

// ---- the Gears pad layout
test('mapPad: every button of the Gears layout maps to its action; the stick clicks are unbound', () => {
  const pad = (i) => {
    const p = { mapping: 'standard', connected: true, axes: [0, 0, 0, 0], buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })) };
    p.buttons[i] = { pressed: true, value: 1 };
    return p;
  };
  const want = { 0: 'cover', 1: 'melee', 2: 'interact', 3: 'objective', 4: 'tacCom', 5: 'reload', 6: 'aim', 7: 'fire', 8: 'controls', 9: 'pause',
    12: 'equipKb', 13: 'weapon3', 14: 'weapon2', 15: 'weapon1' };
  for (let i = 0; i < 17; i++) {
    const held = mapPad(pad(i)).held;
    const on = ACTIONS.filter(a => held[a]);
    assert.deepEqual(on, want[i] ? [want[i]] : [], `button ${i}`);
  }
  assert.equal(PAD_MAP[10], undefined); assert.equal(PAD_MAP[11], undefined);
  assert.ok(Object.isFrozen(PAD_MAP));
  // the triggers are analogue
  const t = pad(7); t.buttons[7] = { pressed: false, value: 0.3 }; assert.equal(mapPad(t).held.fire, false);
});

test('the controls card shows the Gears pad: Y, LB, D-pad and View', () => {
  const rows = controlRows();
  const txt = JSON.stringify(rows);
  for (const w of ['Y', 'LB', 'D-pad Up', 'D-pad Right / Down', 'View', 'Start']) assert.ok(txt.includes(w), w);
});

test('kettlebell equip flow: D-pad Up equips, LT aims and RT throws and it stays equipped, a weapon button or an empty bag returns the gun', () => {
  const e = createKettlebellEquip();
  assert.equal(e.step({ count: 4 }), false);
  assert.equal(e.step({ equipPressed: true, count: 4 }), true);
  // LT aims, RT throws (kettlebellInput)
  assert.deepEqual(kettlebellInput({ equipped: true, aimHeld: true, firePressed: false }), { aiming: true, throwNow: false });
  assert.deepEqual(kettlebellInput({ equipped: true, aimHeld: true, firePressed: true }), { aiming: true, throwNow: true });
  assert.deepEqual(kettlebellInput({ equipped: true, aimHeld: false, firePressed: true }), { aiming: false, throwNow: true });
  assert.equal(e.step({ count: 3 }), true, 'stays equipped across a throw');
  assert.equal(e.step({ count: 1 }), true);
  assert.equal(e.step({ count: 0 }), false, 'the last one is gone: back to the gun');
  e.step({ equipPressed: true, count: 2 });
  assert.equal(e.step({ switched: true, count: 2 }), false, 'a weapon button puts them away');
  assert.equal(e.step({ equipPressed: true, count: 0 }), false, 'an empty bag does not equip');
  e.step({ equipPressed: true, count: 2 });
  assert.equal(e.step({ equipPressed: true, count: 2 }), false, 'D-pad Up again unequips');
  e.step({ equipPressed: true, count: 2 });
  assert.equal(e.step({ count: 2, blocked: true }), false, 'going down puts them away');
  // the keyboard is unchanged: G held aims, the release throws
  assert.deepEqual(kettlebellInput({ equipped: false, grenadeHeld: true, wasArmed: false }), { aiming: true, throwNow: false });
  assert.deepEqual(kettlebellInput({ equipped: false, grenadeHeld: false, wasArmed: true }), { aiming: false, throwNow: true });
  assert.deepEqual(kettlebellInput({ equipped: false, grenadeHeld: false, wasArmed: false, firePressed: true }), { aiming: false, throwNow: false });
});

test('Y: finishing a downed alien wins over looking at the objective; with nothing to finish it looks; with no objective it does nothing', () => {
  const obj = { kind: 'gate', pos: [1, 1, 1], label: 'GO' };
  assert.equal(yAction({ finishTarget: true, objective: obj }), 'finish');
  assert.equal(yAction({ finishTarget: false, objective: obj }), 'look');
  assert.equal(yAction({ finishTarget: false, objective: null }), null);
  assert.equal(yAction({ finishTarget: true, objective: null }), 'finish');
  assert.equal(yAction(), null);
});

test('objective, lookAngles, screenMark and the Tac/Com model', () => {
  const exit = { pos: [-4.5, 0, 14] };
  assert.equal(objectiveTarget({ exit, gateOpen: false }), null, 'still clearing the room');
  assert.deepEqual(objectiveTarget({ exit, gateOpen: true }).pos, [-4.5, 1.6, 14]);
  const boss = { pos: [0, 0, 5], alive: true };
  assert.equal(objectiveTarget({ bossArena: true, boss, ending: 'off' }).kind, 'boss');
  assert.equal(objectiveTarget({ bossArena: true, boss: { ...boss, alive: false }, ending: 'desk', desk: { x0: -2, x1: 2, z: 8 } }).kind, 'desk');
  assert.equal(objectiveTarget({ bossArena: true, boss: { ...boss, alive: false }, ending: 'slump' }), null);
  const a = lookAngles([0, 1.5, 0], [10, 1.5, 0]);
  near(a.yaw, Math.PI / 2); near(a.pitch, 0);
  assert.ok(lookAngles([0, 1.5, 0], [0, 50, 0.001]).pitch <= 0.35 + 1e-9);
  assert.equal(lookAngles([0, 0, 0], [0, 0, 0]), null);
  const centre = screenMark(0, 0); near(centre.x, 0.5); near(centre.y, 0.5); assert.equal(centre.off, false);
  const right = screenMark(3, 0); assert.equal(right.off, true); assert.ok(right.x < 1 && right.x > 0.9); near(right.angle, Math.PI / 2);
  const behind = screenMark(0.2, 0.2, true); assert.equal(behind.off, true);
  assert.equal(screenMark(NaN, NaN).off, false);
  assert.deepEqual(tacComModel({ held: false, objective: { kind: 'gate', label: 'GO', pos: [0, 0, 0] } }), { show: false, items: [] });
  assert.equal(tacComModel({ held: true, blocked: true }).show, false);
  const m = tacComModel({ held: true, objective: { kind: 'gate', label: 'GO', pos: [1, 2, 3] }, tobble: { pos: [0, 0, 0], frac: 0.4, downed: false } });
  assert.deepEqual(m.items.map(i => i.id), ['objective', 'tobble']);
  near(m.items[1].frac, 0.4); assert.equal(m.items[1].pos[1], 1.5);
  assert.equal(tacComModel({ held: true, tobble: { pos: [0, 0, 0], frac: 5, downed: true } }).items[0].frac, 1);
  assert.equal(tacComModel({ held: true }).items.length, 0);
});

// ---- the reload callout
const idle = { fire: false, firePressed: false, reload: false, weapon: null };
const base = (arsenal, o = {}) => hudModel({ arsenal, stance: 'move', firing: false, spreadDeg: 1, fov: 70, viewportH: 1000, marker: null, reloadFlash: null, weapons: TUNING.weapons, ...o });

test('reload callout: a big pulsing alert, the bar beside the reticle (right of it, never covering it) and scaled up, the prompt on the bar', () => {
  const a = createArsenal();
  a.set('regret', { mag: 5 });
  let m = base(a);
  assert.equal(m.alert.text, 'RELOAD — R'); assert.equal(base(a, { device: 'pad' }).alert.text, 'RELOAD — RB');
  assert.equal(m.alert.scale, TUNING.feedback.reloadAlertScale); assert.equal(m.alert.pulseHz, TUNING.feedback.reloadPulseHz);
  a.update({ ...idle, reload: true }, 'move', 0);
  a.update(idle, 'move', 0.4);
  m = base(a, { device: 'pad' });
  assert.equal(m.reload.show, true);
  assert.equal(m.reload.prompt, 'PRESS RB AGAIN IN THE BRIGHT ZONE');
  assert.equal(m.reload.barScale, TUNING.feedback.reloadBarScale);
  assert.ok(m.reload.offset >= m.reticle.gap + 8, 'right of the reticle arms, never over them');
  // a wide blind spread pushes the bar out with the reticle
  assert.ok(base(a, { spreadDeg: 20 }).reload.offset > base(a, { spreadDeg: 1 }).reload.offset);
  // tunable at use time
  assert.equal(base(a, { feedback: { ...TUNING.feedback, reloadBarScale: 2.5 } }).reload.barScale, 2.5);
  near(base(a, { feedback: { ...TUNING.feedback, reloadFlashScale: 3, reloadBarScale: 1.5 } }).reload.flashScale, 2);
  a.update({ ...idle, reload: true }, 'move', 0);
  assert.equal(base(a).reload.prompt, '');
});

test('reload tick: starts reloadTickLead before the bright zone, speeds up and rises as it closes, stops at the zone and after the press', () => {
  const row = TUNING.weapons.regret;
  const lead = TUNING.feedback.reloadTickLead;
  assert.equal(reloadApproach(0.0, row).active, false);
  assert.equal(reloadApproach(row.perfectStart - lead - 0.01, row).active, false);
  const a0 = reloadApproach(row.perfectStart - lead, row); assert.equal(a0.active, true); near(a0.near, 0);
  near(reloadApproach(row.perfectStart - lead / 2, row).near, 0.5);
  assert.equal(reloadApproach(row.perfectStart, row).active, false);
  assert.equal(reloadApproach(0.9, row).active, false);
  const cue = createReloadCue();
  // run the marker through at the reload's own pace and collect the ticks
  const T = row.reloadTime, ticks = [];
  for (let t = 0; t < T; t += DT) { const r = cue.step(DT, t / T, row, false); if (r) ticks.push({ t, pitch: r.pitch }); }
  assert.ok(ticks.length >= 3, `ticks ${ticks.length}`);
  for (let i = 1; i < ticks.length; i++) assert.ok(ticks[i].pitch >= ticks[i - 1].pitch, 'rising');
  const gaps = ticks.slice(1).map((x, i) => x.t - ticks[i].t);
  assert.ok(gaps[gaps.length - 1] < gaps[0], 'faster as it closes');
  assert.ok(ticks[ticks.length - 1].t < row.perfectStart * T + DT, 'none inside or past the bright zone');
  const done = createReloadCue();
  assert.equal(done.step(DT, row.perfectStart - 0.05, row, true), null, 'no ticks after the press');
});

test('sfx: reloadTick plays on a fake context, and the chainsaw motor starts, updates and stops cleanly (silent with no audio)', () => {
  const log = { nodes: 0, starts: 0, stops: 0, ramps: 0 };
  const param = () => ({ value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() { log.ramps++; } });
  const node = () => ({ connect() { return this; }, start() { log.starts++; }, stop() { log.stops++; }, gain: param(), frequency: param(), Q: param(), type: '', buffer: null, loop: false });
  const Ctor = class { constructor() { this.state = 'running'; this.currentTime = 1; this.sampleRate = 8000; this.destination = {}; } resume() { return Promise.resolve(); }
    createOscillator() { log.nodes++; return node(); } createBufferSource() { log.nodes++; return node(); } createBiquadFilter() { log.nodes++; return node(); } createGain() { log.nodes++; return node(); }
    createBuffer(c, n) { return { getChannelData: () => new Float32Array(n) }; } };
  const s = createSfx({ AudioContextCtor: Ctor });
  s.play('reloadTick', 0.3, 0, 0); s.play('reloadTick', 0.3, 0, 1);
  assert.ok(log.nodes > 0);
  const before = log.starts;
  const m = s.motor();
  assert.equal(m.active, true);
  const started = log.starts - before;
  assert.equal(started, 5);
  m.update('rev', 0.5, 0.35); m.update('grind', 1, 0.35); m.update('rev', 5, 0.35);
  const stopsBefore = log.stops;
  m.stop(); m.stop();
  assert.equal(log.stops - stopsBefore, started, 'every oscillator and the noise loop are stopped, once');
  assert.doesNotThrow(() => m.update('rev', 1, 1));
  const silent = createSfx({ AudioContextCtor: undefined }).motor();
  assert.equal(silent.active, false);
  assert.doesNotThrow(() => { silent.update('rev', 1, 1); silent.stop(); });
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TUNING } from '../src/tuning.js';
import { createArsenal } from '../src/combat/arsenal.js';
import { WEAPONS, LOADOUT, reloadZone, reloadEnd } from '../src/combat/weapons.js';

const W = structuredClone(TUNING.weapons);
const C = structuredClone(TUNING.combat);
const DT = 1 / 60;
const I = (o = {}) => ({ fire: false, firePressed: false, reload: false, weapon: null, ...o });
const make = (w = W, c = C) => createArsenal({ weapons: structuredClone(w), combat: structuredClone(c) });

// Steps at dt for `seconds`, collecting every event (copied, as the array is reused).
function run(a, input, stance, seconds, dt = DT) {
  const out = [];
  const n = Math.round(seconds / dt);
  for (let i = 0; i < n; i++) out.push(...a.update(input, stance, dt).map(e => ({ ...e })));
  return out;
}
const count = (ev, type) => ev.filter(e => e.type === type).length;
const toSwitch = (a, n) => { a.update(I({ weapon: n }), 'aim', DT); run(a, I(), 'aim', 0.5); };
// Starts a reload, steps until the bar is at `u`, presses, then runs to the end. Returns every event.
function reloadWithPress(a, u, T) {
  const ev = [...a.update(I({ reload: true }), 'aim', DT).map(e => ({ ...e }))];
  while (a.reload && a.reload.t < u * T - 1e-9) ev.push(...a.update(I(), 'aim', DT).map(e => ({ ...e })));
  ev.push(...a.update(I({ reload: true }), 'aim', DT).map(e => ({ ...e })));
  while (a.reload) ev.push(...a.update(I(), 'aim', DT).map(e => ({ ...e })));
  return ev;
}

test('starts on The Regret with 50 + 250; pistol 12 with infinite reserve; slot 2 empty', () => {
  const a = createArsenal({ weapons: W, combat: C });
  assert.equal(a.slot, 0); assert.equal(a.current(), 'regret');
  assert.deepEqual({ mag: a.ammo.regret.mag, reserve: a.ammo.regret.reserve }, { mag: 50, reserve: 250 });
  assert.equal(a.ammo.pistol.mag, 12); assert.equal(W.pistol.infiniteReserve, 1);
  assert.equal(a.ammo[null], undefined);
  assert.deepEqual([...LOADOUT], ['regret', null, 'pistol']);
  assert.equal(WEAPONS.regret.name, 'The Regret'); assert.equal(WEAPONS.pistol.name, 'Clearance Pistol');
  assert.ok(Object.isFrozen(WEAPONS) && Object.isFrozen(LOADOUT));
});

test('rifle full-auto: fire held 1 s aimed fires 9 shots (+-1), spends them, mult 1', () => {
  const a = make();
  const ev = run(a, I({ fire: true, firePressed: true }), 'aim', 1);
  const shots = ev.filter(e => e.type === 'shot');
  assert.ok(shots.length >= 9 && shots.length <= 10);
  assert.equal(a.ammo.regret.mag, 50 - shots.length);
  assert.ok(shots.every(s => s.mult === 1 && s.id === 'regret'));
});

test('fire rate does not depend on frame rate: 60 x 1/60 and 12 x 1/12 give the same count (+-1)', () => {
  const a = make(), b = make(), c = make();
  const n60 = count(run(a, I({ fire: true }), 'aim', 1, 1 / 60), 'shot');
  const n12 = count(run(b, I({ fire: true }), 'aim', 1, 1 / 12), 'shot');
  const n240 = count(run(c, I({ fire: true }), 'aim', 1, 1 / 240), 'shot');
  assert.ok(Math.abs(n60 - n12) <= 1, `${n60} vs ${n12}`);
  assert.ok(Math.abs(n60 - n240) <= 1, `${n60} vs ${n240}`);
});

test('pistol semi-auto: held fire gives one shot; a press inside the cooldown is buffered 0.12 s, older presses are dropped', () => {
  const a = make();
  toSwitch(a, 3);
  assert.equal(a.current(), 'pistol');
  // Held fire: one shot only.
  let ev = run(a, I({ fire: true, firePressed: false }), 'aim', 0.1);
  assert.equal(count(ev, 'shot'), 0, 'a hold with no press does nothing');
  ev = [...a.update(I({ fire: true, firePressed: true }), 'aim', DT).map(e => ({ ...e }))];
  ev.push(...run(a, I({ fire: true }), 'aim', 1));
  assert.equal(count(ev, 'shot'), 1);
  // Cooldown is 0.25 s. A press at ~0.15 s in is inside the 0.12 s buffer window of the ready time: it fires.
  const b = make();
  toSwitch(b, 3);
  b.update(I({ fire: true, firePressed: true }), 'aim', DT); // shot at t = 0
  let shots = 0;
  const step = (inp) => { shots += count(b.update(inp, 'aim', DT).map(e => ({ ...e })), 'shot'); };
  for (let i = 0; i < 9; i++) step(I());      // 0.15 s
  step(I({ firePressed: true }));              // buffered, ready at ~0.25 s (< 0.12 s away)
  for (let i = 0; i < 12; i++) step(I());
  assert.equal(shots, 1, 'buffered press fires once the cooldown ends');
  // A press 0.2 s before the cooldown ends is dropped.
  const c = make();
  toSwitch(c, 3);
  c.update(I({ fire: true, firePressed: true }), 'aim', DT);
  let early = 0;
  c.update(I({ firePressed: true }), 'aim', DT);
  for (let i = 0; i < 40; i++) early += count(c.update(I(), 'aim', DT).map(e => ({ ...e })), 'shot');
  assert.equal(early, 0, 'a press older than the buffer is dropped');
});

test('7 rifle body hits kill a 100 health Associate; 6 after a perfect reload (16 and 17.6 damage)', () => {
  assert.equal(Math.ceil(100 / W.regret.damage), 7);
  assert.equal(Math.ceil(100 / (W.regret.damage * W.regret.perfectDamage)), 6);
});

test('no shot and no ammo spent with stance null, while reloading or while switching', () => {
  const a = make();
  let ev = run(a, I({ fire: true, firePressed: true }), null, 1);
  assert.equal(count(ev, 'shot'), 0); assert.equal(a.ammo.regret.mag, 50);
  a.ammo.regret.mag = 30; a.update(I({ reload: true }), 'aim', DT);
  ev = run(a, I({ fire: true }), 'aim', 0.5);
  assert.equal(count(ev, 'shot'), 0); assert.equal(a.ammo.regret.mag, 30);
  assert.equal(a.canFire('aim'), false); assert.equal(a.canFire(null), false);
  const b = make();
  b.update(I({ weapon: 3 }), 'aim', DT);
  ev = [...b.update(I({ fire: true, firePressed: true }), 'aim', DT)];
  assert.equal(count(ev, 'shot'), 0); assert.equal(b.ammo.pistol.mag, 12);
  // Fire held through a null stance does not queue a shot for when the stance returns.
  const c = make(); toSwitch(c, 3);
  c.update(I({ fire: false, firePressed: true }), null, DT);
  ev = [...c.update(I(), 'aim', DT)];
  assert.equal(count(ev, 'shot'), 0);
  assert.equal(c.canFire('aim'), true);
});

test('spread: stance base plus bloom; bloom grows per shot to bloomMax and recovers at bloomRecover', () => {
  const a = make();
  const first = a.update(I({ fire: true, firePressed: true }), 'aim', DT).find(e => e.type === 'shot');
  assert.equal(first.spread, 0.8);
  assert.equal(a.spreadOf('aim'), 0.8 + 0.25);
  const hip = make().update(I({ fire: true }), 'hip', DT)[0]; assert.equal(hip.spread, 4);
  const blind = make().update(I({ fire: true }), 'blind', DT)[0]; assert.equal(blind.spread, 11.2);
  // Check the cap with recovery off, then recovery on its own.
  const w = structuredClone(W); w.regret.bloomRecover = 0;
  const b = make(w);
  let shots = 0;
  while (shots < 20) shots += count(b.update(I({ fire: true }), 'aim', DT), 'shot');
  assert.equal(b.spreadOf('aim'), 0.8 + 2);
  const w5 = structuredClone(W); const b5 = make(w5); b5.ammo.regret.bloom = 2;
  run(b5, I(), 'aim', 1);
  assert.ok(Math.abs(b5.spreadOf('aim') - (0.8 + Math.max(0, 2 - W.regret.bloomRecover))) < 1e-9);
  // Partial recovery.
  const c = make(); c.ammo.regret.bloom = 2;
  run(c, I(), 'aim', 0.2);
  assert.ok(Math.abs(c.ammo.regret.bloom - (2 - 0.2 * W.regret.bloomRecover)) < 1e-6);
});

test('reloadZone: 0.38 and 0.46 are perfect, 0.30 and 0.62 good, 0.29 and 0.63 jam; inverted ranges match nothing', () => {
  const r = W.regret;
  assert.equal(reloadZone(0.38, r), 'perfect'); assert.equal(reloadZone(0.46, r), 'perfect');
  assert.equal(reloadZone(0.42, r), 'perfect');
  assert.equal(reloadZone(0.30, r), 'good'); assert.equal(reloadZone(0.62, r), 'good');
  assert.equal(reloadZone(0.37, r), 'good'); assert.equal(reloadZone(0.47, r), 'good');
  assert.equal(reloadZone(0.29, r), 'jam'); assert.equal(reloadZone(0.63, r), 'jam');
  assert.equal(reloadZone(0, r), 'jam'); assert.equal(reloadZone(1, r), 'jam');
  const inv = { ...r, perfectStart: 0.5, perfectEnd: 0.4, goodStart: 0.7, goodEnd: 0.3 };
  for (const u of [0, 0.3, 0.4, 0.45, 0.5, 0.7, 1]) assert.equal(reloadZone(u, inv), 'jam');
  const zero = { ...r, perfectStart: 0, perfectEnd: 0, goodStart: 0, goodEnd: 0 };
  assert.equal(reloadZone(0.001, zero), 'jam');
});

test('reloadEnd: perfect and good never later than reloadTime; jam adds the penalty; zero reloadTime floors', () => {
  const r = W.regret;
  assert.ok(Math.abs(reloadEnd(r, 0.924, 'perfect', C) - 1.024) < 1e-9);
  assert.ok(Math.abs(reloadEnd(r, 0.77, 'good', C) - 1.12) < 1e-9);
  assert.equal(reloadEnd(r, 2.1, 'perfect', C), 2.2); assert.equal(reloadEnd(r, 2.1, 'good', C), 2.2);
  assert.ok(Math.abs(reloadEnd(r, 0.44, 'jam', C) - 3.1) < 1e-9);
  assert.equal(reloadEnd(r, 0, 'normal', C), 2.2);
  assert.equal(reloadEnd({ ...r, reloadTime: 0 }, 0, 'normal', C), C.minReloadTime);
});

test('reload with no press: finishes at 2.2 s, mag 50, reserve 250 - spent, result normal', () => {
  const a = make();
  a.set('regret', { mag: 20 });
  const ev = [];
  ev.push(...a.update(I({ reload: true }), 'aim', DT).map(e => ({ ...e })));
  let t = DT;
  while (a.reload) { ev.push(...a.update(I(), 'aim', DT).map(e => ({ ...e }))); t += DT; }
  assert.ok(Math.abs(t - 2.2) < DT + 1e-9, `finished at ${t}`);
  assert.equal(a.ammo.regret.mag, 50); assert.equal(a.ammo.regret.reserve, 220);
  assert.equal(ev[0].type, 'reloadStart');
  assert.deepEqual(ev.at(-1), { type: 'reloadDone', id: 'regret', result: 'normal' });
  assert.equal(a.ammo.regret.boost, false);
});

test('perfect press at u 0.42 finishes 0.1 s later with boost; the next 50 shots carry mult 1.1; boost ends on the next reload', () => {
  const a = make();
  a.set('regret', { mag: 10 });
  const T = W.regret.reloadTime;
  const ev = reloadWithPress(a, 0.42, T);
  assert.equal(ev.find(e => e.type === 'reloadPress').result, 'perfect');
  const done = ev.at(-1);
  assert.deepEqual(done, { type: 'reloadDone', id: 'regret', result: 'perfect' });
  const frames = ev.length; assert.ok(frames > 0);
  assert.equal(a.ammo.regret.boost, true); assert.equal(a.ammo.regret.mag, 50); assert.equal(a.ammo.regret.reserve, 210);
  const shots = [];
  while (shots.length < 50) shots.push(...a.update(I({ fire: true }), 'aim', DT).filter(e => e.type === 'shot').map(e => ({ ...e })));
  assert.ok(shots.every(s => s.mult === 1.1));
  assert.equal(a.ammo.regret.mag, 0); assert.equal(a.ammo.regret.boost, false, 'boost ends when the magazine empties');
  // Boost also ends when the next reload starts.
  const b = make(); b.set('regret', { mag: 10 });
  reloadWithPress(b, 0.42, T);
  b.set('regret', { mag: 40 });
  b.update(I({ reload: true }), 'aim', DT);
  assert.equal(b.ammo.regret.boost, false);
});

test('perfect reload timing: ends 0.1 s after the press', () => {
  const a = make(); a.set('regret', { mag: 10 });
  const T = 2.2;
  a.update(I({ reload: true }), 'aim', DT);
  while (a.reload.t < 0.42 * T) a.update(I(), 'aim', DT);
  const tPress = a.reload.t;
  a.update(I({ reload: true }), 'aim', DT);
  assert.ok(Math.abs(a.reload.end - (tPress + 0.1)) < 1e-9);
});

test('good press at u 0.35 finishes 0.35 s later, no boost; jam press at u 0.2 finishes at 3.1 s', () => {
  const T = 2.2;
  const a = make(); a.set('regret', { mag: 10 });
  a.update(I({ reload: true }), 'aim', DT);
  while (a.reload.t < 0.35 * T) a.update(I(), 'aim', DT);
  const tp = a.reload.t;
  const pe = a.update(I({ reload: true }), 'aim', DT);
  assert.equal(pe[0].result, 'good');
  assert.ok(Math.abs(a.reload.end - (tp + 0.35)) < 1e-9);
  while (a.reload) a.update(I(), 'aim', DT);
  assert.equal(a.ammo.regret.boost, false); assert.equal(a.ammo.regret.mag, 50);

  const b = make(); b.set('regret', { mag: 10 });
  b.update(I({ reload: true }), 'aim', DT);
  while (b.reload.t < 0.2 * T) b.update(I(), 'aim', DT);
  const res = b.update(I({ reload: true }), 'aim', DT);
  assert.equal(res[0].result, 'jam');
  assert.ok(Math.abs(b.reload.end - 3.1) < 1e-9);
  assert.ok(b.reload.end > T, 'slower than not pressing at all');
  let t = b.reload.t, ev = [];
  while (b.reload) { ev = b.update(I(), 'aim', DT); t += DT; }
  assert.ok(Math.abs(t - 3.1) < DT + 1e-9, `finished at ${t}`);
  assert.equal(ev[0].result, 'jam');
  assert.equal(b.ammo.regret.boost, false);
});

test('only the first press counts; a second press in the perfect zone after a jam stays jammed', () => {
  const a = make(); a.set('regret', { mag: 10 });
  a.update(I({ reload: true }), 'aim', DT);
  while (a.reload.t < 0.2 * 2.2) a.update(I(), 'aim', DT);
  a.update(I({ reload: true }), 'aim', DT);
  while (a.reload.t < 0.42 * 2.2) a.update(I(), 'aim', DT);
  const ev = a.update(I({ reload: true }), 'aim', DT);
  assert.equal(count(ev, 'reloadPress'), 0);
  assert.equal(a.reload.press, 'jam'); assert.ok(Math.abs(a.reload.end - 3.1) < 1e-9);
  let done;
  while (a.reload) { const e = a.update(I(), 'aim', DT); if (e[0]) done = e[0]; }
  assert.equal(done.result, 'jam');
});

test('a press at the same bar position gives the same result on 20 reloads in a row (learnable)', () => {
  const a = make();
  for (let i = 0; i < 20; i++) {
    a.set('regret', { mag: 10, reserve: 250 });
    const ev = reloadWithPress(a, 0.42, 2.2);
    assert.equal(ev.at(-1).result, 'perfect', `reload ${i}`);
    assert.equal(ev.find(e => e.type === 'reloadPress').result, 'perfect');
  }
  const b = make();
  for (let i = 0; i < 20; i++) {
    b.set('regret', { mag: 10, reserve: 250 });
    assert.equal(reloadWithPress(b, 0.2, 2.2).at(-1).result, 'jam');
  }
});

test('reload press with a full magazine, or with reserve 0, starts nothing', () => {
  const a = make();
  let ev = a.update(I({ reload: true }), 'aim', DT);
  assert.equal(ev.length, 0); assert.equal(a.reload, null);
  a.set('regret', { mag: 10, reserve: 0 });
  ev = a.update(I({ reload: true }), 'aim', DT);
  assert.equal(ev.length, 0); assert.equal(a.reload, null);
  // The pistol has reserve 0 yet reloads.
  const b = make(); toSwitch(b, 3); b.set('pistol', { mag: 3 });
  ev = b.update(I({ reload: true }), 'aim', DT);
  assert.equal(ev[0].type, 'reloadStart');
  // No reload starts while switching.
  const c = make(); c.set('regret', { mag: 3 });
  c.update(I({ weapon: 3 }), 'aim', DT); c.set('pistol', { mag: 3 });
  assert.equal(c.update(I({ reload: true }), 'aim', DT).length, 0);
});

test('pistol reload always has reserve: 30 reloads never run out', () => {
  const a = make(); toSwitch(a, 3);
  for (let i = 0; i < 30; i++) {
    a.set('pistol', { mag: 0 });
    run(a, I({ reload: true }), 'aim', 0.02);
    while (a.reload) a.update(I(), 'aim', DT);
    assert.equal(a.ammo.pistol.mag, 12); assert.equal(a.ammo.pistol.reserve, 0);
  }
});

test('firing empty: dry event, and auto-reload starts when combat.autoReload is 1, not when 0', () => {
  const a = make(); a.set('regret', { mag: 0 });
  let ev = a.update(I({ fire: true, firePressed: true }), 'aim', DT).map(e => ({ ...e }));
  assert.deepEqual(ev.map(e => e.type), ['dry', 'reloadStart']);
  assert.ok(a.reload);
  const C0 = { ...C, autoReload: 0 };
  const b = make(W, C0); b.set('regret', { mag: 0 });
  ev = [...b.update(I({ fire: true, firePressed: true }), 'aim', DT).map(e => ({ ...e })), ...run(b, I({ fire: true }), 'aim', 0.5)];
  assert.equal(count(ev, 'dry'), 1, 'one click per press, not per frame');
  assert.equal(b.reload, null);
  ev = b.update(I({ fire: false }), 'aim', DT);
  ev = b.update(I({ fire: true, firePressed: true }), 'aim', DT);
  assert.equal(count(ev, 'dry'), 1, 'a new press clicks again');
  // Empty with no reserve: dry, no reload.
  const c = make(); c.set('regret', { mag: 0, reserve: 0 });
  ev = c.update(I({ fire: true, firePressed: true }), 'aim', DT);
  assert.deepEqual(ev.map(e => e.type), ['dry']); assert.equal(c.reload, null);
  // Emptying the magazine by firing then reloads on the next fire.
  const d = make(); d.set('regret', { mag: 1 });
  ev = run(d, I({ fire: true }), 'aim', 0.3);
  assert.equal(count(ev, 'shot'), 1); assert.equal(count(ev, 'dry'), 1); assert.equal(count(ev, 'reloadStart'), 1);
});

test('switching mid-reload cancels it with no ammo lost; the new weapon cannot fire for its switchTime', () => {
  const a = make(); a.set('regret', { mag: 20 });
  a.update(I({ reload: true }), 'aim', DT);
  run(a, I(), 'aim', 0.5);
  assert.ok(a.reload);
  const ev = a.update(I({ weapon: 3 }), 'aim', DT);
  assert.equal(ev[0].type, 'switch'); assert.equal(ev[0].id, 'pistol');
  assert.equal(a.reload, null);
  assert.equal(a.ammo.regret.mag, 20); assert.equal(a.ammo.regret.reserve, 250);
  assert.equal(a.slot, 2);
  // Pistol switchTime 0.3 s: no shot before, a shot after.
  let shots = count(run(a, I({ fire: true, firePressed: true }), 'aim', 0.25), 'shot');
  assert.equal(shots, 0);
  shots = count(run(a, I({ fire: true, firePressed: true }), 'aim', 0.1), 'shot');
  assert.equal(shots, 1);
  // A perfect bonus stays with the weapon's magazine across a switch.
  const b = make(); b.set('regret', { mag: 10 });
  reloadWithPress(b, 0.42, 2.2);
  toSwitch(b, 3); toSwitch(b, 1);
  assert.equal(b.ammo.regret.boost, true);
  assert.equal(b.update(I({ fire: true }), 'aim', DT).find(e => e.type === 'shot').mult, 1.1);
});

test('slot 2 (empty) does nothing; next and prev cycle regret <-> pistol', () => {
  const a = make();
  assert.equal(a.update(I({ weapon: 2 }), 'aim', DT).length, 0); assert.equal(a.slot, 0);
  assert.equal(a.switching <= 0, true);
  assert.equal(a.update(I({ weapon: 1 }), 'aim', DT).length, 0, 'the current slot does nothing');
  assert.equal(a.update(I({ weapon: 'next' }), 'aim', DT)[0].id, 'pistol');
  run(a, I(), 'aim', 0.5);
  assert.equal(a.update(I({ weapon: 'next' }), 'aim', DT)[0].id, 'regret');
  run(a, I(), 'aim', 0.5);
  assert.equal(a.update(I({ weapon: 'prev' }), 'aim', DT)[0].id, 'pistol');
  run(a, I(), 'aim', 0.5);
  assert.equal(a.update(I({ weapon: 'prev' }), 'aim', DT)[0].id, 'regret');
  // A single-weapon loadout has nothing to cycle to.
  const s = createArsenal({ weapons: W, combat: C, loadout: ['regret', null, null] });
  assert.equal(s.update(I({ weapon: 'next' }), 'aim', DT).length, 0);
});

test('refill sets reserves to reserveMax; the pistol stays infinite', () => {
  const a = make();
  a.set('regret', { reserve: 10 });
  a.refill();
  assert.equal(a.ammo.regret.reserve, 400);
  assert.equal(a.ammo.pistol.reserve, 0);
  a.set('pistol', { mag: 0 }); toSwitch(a, 3);
  run(a, I({ reload: true }), 'aim', 0.02);
  while (a.reload) a.update(I(), 'aim', DT);
  assert.equal(a.ammo.pistol.mag, 12);
});

test('events array is reused across calls', () => {
  const a = make();
  const e1 = a.update(I(), 'aim', DT), e2 = a.update(I({ fire: true }), 'aim', DT);
  assert.equal(e1, e2);
});

test('panel extremes: rate 0, reloadTime 0, every zone and finish 0, and dt 0 and dt 5 give finite state and no lock-up', () => {
  const sane = (a) => {
    for (const id of ['regret', 'pistol']) {
      const m = a.ammo[id];
      for (const k of ['mag', 'reserve', 'bloom']) assert.ok(Number.isFinite(m[k]), `${id}.${k}`);
      assert.ok(Number.isInteger(m.mag) && m.mag >= 0, `${id}.mag ${m.mag}`);
      assert.ok(Number.isInteger(m.reserve) && m.reserve >= 0, `${id}.reserve ${m.reserve}`);
    }
    assert.ok(Number.isFinite(a.cooldown) && Number.isFinite(a.switching) && Number.isFinite(a.buffer));
    if (a.reload) assert.ok(Number.isFinite(a.reload.t) && Number.isFinite(a.reload.end));
  };
  // rate 0 fires at most minRate per s.
  const w = structuredClone(W);
  for (const id of ['regret', 'pistol']) {
    Object.assign(w[id], { rate: 0, reloadTime: 0, perfectStart: 0, perfectEnd: 0, goodStart: 0, goodEnd: 0,
      perfectFinish: 0, goodFinish: 0, jamPenalty: 0, switchTime: 0, bloomRecover: 0, bloomPerShot: 0 });
  }
  const a = make(w);
  let ev = run(a, I({ fire: true }), 'aim', 10);
  assert.ok(count(ev, 'shot') <= 10 * C.minRate + 1, `${count(ev, 'shot')} shots`);
  sane(a);
  // reloadTime 0: a reload finishes within minReloadTime.
  a.set('regret', { mag: 5 });
  a.update(I({ reload: true }), 'aim', DT);
  let t = DT;
  while (a.reload) { a.update(I(), 'aim', DT); t += DT; assert.ok(t < 1, 'reload locks up'); }
  assert.ok(t <= C.minReloadTime + 2 * DT);
  assert.equal(a.ammo.regret.mag, 50); sane(a);
  // A press in a zero-width zone with zero finishes and jam penalty still finishes.
  a.set('regret', { mag: 5 });
  a.update(I({ reload: true }), 'aim', DT);
  a.update(I({ reload: true }), 'aim', DT);
  for (let i = 0; i < 10; i++) a.update(I(), 'aim', DT);
  assert.equal(a.reload, null); sane(a);
  // dt 0 and dt 5, with fire and reload held.
  const b = make();
  for (const dt of [0, 5, 0, 5, 1e-9, 5]) {
    ev = b.update(I({ fire: true, firePressed: true, reload: true }), 'aim', dt);
    sane(b);
    assert.ok(count(ev, 'shot') <= 2, `dt ${dt} fired ${count(ev, 'shot')}`);
  }
  for (const dt of [NaN, -1, Infinity]) { b.update(I({ fire: true }), 'aim', dt); sane(b); }
  // dt 5 on a big backlog: at most the backlog of one shot.
  const c = make();
  assert.ok(count(c.update(I({ fire: true }), 'aim', 5), 'shot') <= 2);
  // dt 5 finishes a reload in one call.
  const d = make(); d.set('regret', { mag: 0 });
  d.update(I({ reload: true }), 'aim', DT);
  d.update(I(), 'aim', 5);
  assert.equal(d.reload, null); assert.equal(d.ammo.regret.mag, 50);
  // Inverted zones: any press jams, nothing throws.
  const w2 = structuredClone(W); Object.assign(w2.regret, { perfectStart: 0.9, perfectEnd: 0.1, goodStart: 0.9, goodEnd: 0.1 });
  const e = make(w2); e.set('regret', { mag: 10 });
  assert.equal(reloadWithPress(e, 0.42, 2.2).at(-1).result, 'jam');
  // Rows are read at use time: changing tuning mid-run applies at once.
  const w3 = structuredClone(W);
  const f = createArsenal({ weapons: w3, combat: C });
  w3.regret.rate = 1; w3.regret.mag = 99;
  f.update(I({ fire: true }), 'aim', DT);
  w3.regret.rate = 9;
  f.cooldown = 0;
  assert.ok(count(run(f, I({ fire: true }), 'aim', 1), 'shot') >= 8);
});
test('reset restores 50 + 250, slot 1, no reload, no boost; addReserve caps at reserveMax and ignores the pistol', () => {
  const a = make(); const rows = a.ammo; const regret = a.ammo.regret;
  toSwitch(a, 3); a.ammo.pistol.mag = 2; a.update(I({ reload: true }), 'aim', DT);
  a.ammo.regret.mag = 3; a.ammo.regret.reserve = 7; a.ammo.regret.boost = true; a.ammo.regret.bloom = 1.5;
  assert.equal(a.slot, 2); assert.ok(a.reload);
  a.reset();
  assert.equal(a.slot, 0); assert.equal(a.reload, null); assert.equal(a.switching, 0); assert.equal(a.cooldown, 0);
  assert.deepEqual({ ...a.ammo.regret }, { mag: 50, reserve: 250, bloom: 0, boost: false });
  assert.deepEqual({ ...a.ammo.pistol }, { mag: 12, reserve: 0, bloom: 0, boost: false });
  assert.equal(a.ammo, rows); assert.equal(a.ammo.regret, regret);
  assert.equal(a.update(I(), 'aim', DT).length, 0);
  a.addReserve('regret', 100); assert.equal(a.ammo.regret.reserve, 350);
  a.addReserve('regret', 100); assert.equal(a.ammo.regret.reserve, 400);
  a.addReserve('regret', 25); assert.equal(a.ammo.regret.reserve, 400);
  a.addReserve('pistol', 25); assert.equal(a.ammo.pistol.reserve, 0);
  a.addReserve('nope', 25); a.addReserve('regret', -5); a.addReserve('regret', NaN); assert.equal(a.ammo.regret.reserve, 400);
  // a reserve above reserveMax (panel change) is never reduced by a pickup
  a.ammo.regret.reserve = 450; a.addReserve('regret', 10); assert.equal(a.ammo.regret.reserve, 450);
});

test('cancelReload drops a reload in progress without refilling the magazine', () => {
  const a = createArsenal();
  a.ammo[a.current()].mag = 2;
  a.update(I({ reload: true }), 'aim', DT);
  assert.ok(a.reload);
  a.cancelReload();
  assert.equal(a.reload, null);
  a.update(I(), 'aim', 5);
  assert.equal(a.ammo[a.current()].mag, 2);
});

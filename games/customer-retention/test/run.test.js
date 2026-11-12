import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARENAS, ARENA_TITLES, HOURS, STORAGE_KEY, arenaIndex, createRun, hoursLine, inGate, loadCheckpoint, saveCheckpoint } from '../src/run.js';
import { arenaFor } from '../src/play.js';
import { TUNING } from '../src/tuning.js';

const fakeStorage = (init = {}) => {
  const data = { ...init };
  return { data, getItem: (k) => (k in data ? data[k] : null), setItem: (k, v) => { data[k] = String(v); } };
};
const tick = (run, seconds, dt = 1 / 60) => { const out = []; for (let t = 0; t < seconds; t += dt) out.push(...run.step(dt)); return out; };

test('the order is Turnstiles, Smoothie Bar, Cancellation Desk, with the story names', () => {
  assert.deepEqual([...ARENAS], ['turnstiles', 'smoothie', 'desk']);
  assert.deepEqual(ARENAS.map(a => ARENA_TITLES[a]), ['Check-in Turnstiles', 'Smoothie Bar', 'The Cancellation Desk']);
  assert.equal(arenaIndex('smoothie'), 1);
  assert.equal(arenaIndex('nope'), 0);
});

test('the cancellation hours shrink at each checkpoint: Tues 2:00-2:10, then 2:00-2:05, then by appointment', () => {
  assert.deepEqual([...HOURS], ['Tues 2:00–2:10', 'Tues 2:00–2:05', 'By appointment']);
  assert.equal(hoursLine(0), 'Cancellation hours: Tues 2:00–2:10');
  assert.equal(hoursLine(1), 'Cancellation hours: Tues 2:00–2:05');
  assert.equal(hoursLine(2), 'Cancellation hours: By appointment');
  assert.equal(hoursLine(99), hoursLine(2));
});

test('a new run starts in the Turnstiles with checkpoint 0 and no gate', () => {
  const run = createRun();
  assert.deepEqual([run.arena, run.index, run.checkpoint, run.phase, run.cleared, run.gateOpen, run.fade], ['turnstiles', 0, 0, 'play', false, false, 0]);
});

test('the gate opens on clear; touching it fades out, swaps at black, holds, fades in, and the entered arena is the checkpoint', () => {
  const run = createRun(), R = TUNING.run;
  assert.equal(run.touchGate(), false, 'closed gate');
  assert.equal(run.markClear(), true);
  assert.equal(run.gateOpen, true);
  assert.equal(run.touchGate(), true);
  assert.equal(run.phase, 'fadeOut');
  assert.equal(run.touchGate(), false, 'already fading');
  const events = [];
  let sawHalf = false;
  for (let t = 0; t < R.fadeOut + R.blackHold + R.fadeIn + 0.5; t += 1 / 60) {
    const ev = run.step(1 / 60);
    events.push(...ev);
    if (run.phase === 'fadeOut' && run.fade > 0.4 && run.fade < 0.6) sawHalf = true;
    if (ev.some(e => e.type === 'swap')) { assert.equal(run.fade, 1, 'the swap happens at black'); assert.equal(run.arena, 'smoothie'); assert.equal(run.checkpoint, 1); }
  }
  assert.ok(sawHalf);
  assert.deepEqual(events.map(e => e.type), ['swap', 'faded']);
  assert.deepEqual(events[0], { type: 'swap', from: 'turnstiles', to: 'smoothie' });
  assert.deepEqual([run.phase, run.fade, run.cleared, run.arena], ['play', 0, false, 'smoothie']);
});

test('the fade is monotonic: up through the fade out, 1 while black, down through the fade in', () => {
  const run = createRun();
  run.markClear(); run.touchGate();
  const fades = [];
  for (let i = 0; i < 600; i++) { run.step(1 / 60); fades.push(run.fade); }
  const peak = fades.indexOf(1);
  assert.ok(peak > 0);
  for (let i = 1; i <= peak; i++) assert.ok(fades[i] >= fades[i - 1]);
  const down = fades.lastIndexOf(1);
  for (let i = down + 1; i < fades.length; i++) assert.ok(fades[i] <= fades[i - 1]);
  assert.equal(fades.at(-1), 0);
});

test('the Smoothie Bar leads to the Desk; the Desk is the end: its clear opens no gate', () => {
  const run = createRun();
  run.goTo(1); run.markClear(); run.touchGate();
  assert.deepEqual(tick(run, 3).map(e => e.type), ['swap', 'faded']);
  assert.equal(run.arena, 'desk');
  assert.equal(run.hasNext, false);
  assert.equal(run.markClear(), false);
  assert.equal(run.touchGate(), false);
});

test('a restart (both down, bleed-out) keeps the arena and the checkpoint, and shuts the gate', () => {
  const run = createRun();
  run.goTo(1); run.markClear();
  assert.equal(run.restart(), 'smoothie');
  assert.deepEqual([run.arena, run.checkpoint, run.cleared, run.gateOpen, run.phase], ['smoothie', 1, false, false, 'play']);
  run.markClear(); run.touchGate(); run.restart();
  assert.deepEqual([run.phase, run.fade], ['play', 0], 'a restart mid-fade goes back to play');
});

test('the checkpoint is saved to storage on every entry and read back by a new run as "saved"', () => {
  const st = fakeStorage();
  const run = createRun({ storage: st });
  assert.equal(run.saved, 0);
  run.goTo(1);
  assert.equal(st.data[STORAGE_KEY], '1');
  run.markClear(); run.touchGate(); tick(run, 3);
  assert.equal(st.data[STORAGE_KEY], '2');
  const again = createRun({ storage: st });
  assert.equal(again.saved, 2);
  assert.equal(again.arena, 'turnstiles', 'a reload starts at the front; Continue goes to the saved arena');
  again.goTo(again.saved);
  assert.equal(again.arena, 'desk');
  again.newRun();
  assert.equal(st.data[STORAGE_KEY], '0');
});

test('storage that is missing, garbled or throws never breaks the run', () => {
  assert.equal(loadCheckpoint(null), 0);
  assert.equal(loadCheckpoint(fakeStorage({ [STORAGE_KEY]: 'banana' })), 0);
  assert.equal(loadCheckpoint(fakeStorage({ [STORAGE_KEY]: '7' })), 0);
  assert.equal(loadCheckpoint(fakeStorage({ [STORAGE_KEY]: '-1' })), 0);
  assert.equal(loadCheckpoint(fakeStorage({ [STORAGE_KEY]: '1' })), 1);
  const angry = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('denied'); } };
  assert.equal(loadCheckpoint(angry), 0);
  assert.doesNotThrow(() => saveCheckpoint(angry, 1));
  const run = createRun({ storage: angry });
  assert.doesNotThrow(() => run.goTo(2));
  assert.equal(run.arena, 'desk');
});

test('step ignores a bad dt and the fade times are read from TUNING at use time', () => {
  const tuning = structuredClone(TUNING);
  const run = createRun({ tuning });
  run.markClear(); run.touchGate();
  assert.deepEqual(run.step(NaN), []);
  assert.deepEqual(run.step(-1), []);
  tuning.run.fadeOut = 0.1; tuning.run.blackHold = 0; tuning.run.fadeIn = 0.1;
  assert.deepEqual(tick(run, 0.5).map(e => e.type), ['swap', 'faded']);
});

test('inGate: in front of the door and inside its width, for every way a wall can face', () => {
  const north = { pos: [-4.5, 0, 15], yaw: Math.PI, w: 3 };
  assert.equal(inGate(north, [-4.5, 0, 14.65]), true);
  assert.equal(inGate(north, [-3.3, 0, 14]), true);
  assert.equal(inGate(north, [-2.9, 0, 14]), false, 'past the doorway width');
  assert.equal(inGate(north, [-4.5, 0, 12]), false, 'too far from the door');
  assert.equal(inGate(north, [-4.5, 0, 15.6]), false, 'behind the wall');
  const east = { pos: [10, 0, 2], yaw: -Math.PI / 2, w: 3 };
  assert.equal(inGate(east, [9.4, 0, 2.5]), true);
  assert.equal(inGate(east, [9.4, 0, 4]), false);
  const west = { pos: [-10, 0, 2], yaw: Math.PI / 2, w: 3 };
  assert.equal(inGate(west, [-9.4, 0, 1]), true);
  assert.equal(inGate(west, [-12, 0, 1]), false);
  const south = { pos: [0, 0, -15], yaw: 0, w: 3 };
  assert.equal(inGate(south, [0.5, 0, -14.4]), true);
  assert.equal(inGate(null, [0, 0, 0]), false);
});

test('arenaFor: ?room is the grey room, ?arena= jumps, anything else is the first arena', () => {
  const p = (q) => new URLSearchParams(q);
  assert.deepEqual(arenaFor(p('')), { name: 'turnstiles', jumped: false });
  assert.deepEqual(arenaFor(p('arena=smoothie')), { name: 'smoothie', jumped: true });
  assert.deepEqual(arenaFor(p('arena=desk')), { name: 'desk', jumped: true });
  assert.deepEqual(arenaFor(p('arena=turnstiles')), { name: 'turnstiles', jumped: true });
  assert.deepEqual(arenaFor(p('arena=bogus')), { name: 'turnstiles', jumped: false });
  assert.deepEqual(arenaFor(p('room')), { name: 'greyRoom', jumped: false });
  assert.deepEqual(arenaFor(p('room&arena=desk')), { name: 'greyRoom', jumped: false });
  assert.deepEqual(arenaFor(null), { name: 'turnstiles', jumped: false });
});

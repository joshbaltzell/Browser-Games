// The Spawn Sauna: when it opens, how fast it spawns, when it is spent, and what closes it. No fight here: the slots are fakes.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createPads } from '../src/director/pads.js';
import { TUNING } from '../src/tuning.js';
import { KIOSK_ROW as R } from '../src/world/kioskRow.js';

const DT = 1 / 60;
const POS = R.pads[0].pos;

// A rig: one sauna from the level, a pool of fake slots, and a step that runs `seconds` with the given fight state.
function rig(edit = () => {}, slots = 12) {
  const tuning = structuredClone(TUNING); edit(tuning);
  const pads = createPads(R, tuning);
  const free = Array.from({ length: slots }, (_, i) => ({ id: `s${i}`, used: false }));
  const st = { now: 0, started: true, start: 0, kills: 0, free: true };
  const ctx = {
    get started() { return st.started; }, get sinceStart() { return st.now - st.start; }, get kills() { return st.kills; },
    freeSlot: () => (st.free ? free.find(s => !s.used) || null : null), get now() { return st.now; },
  };
  const log = [];
  const run = (seconds, onEvent) => {
    for (let i = 0; i < Math.round(seconds / DT); i++) {
      st.now += DT;
      for (const ev of pads.step(DT, ctx)) {
        log.push({ t: st.now, ...ev });
        if (ev.type === 'padSpawn') free.find(s => s.id === ev.enemyId).used = true;
        if (onEvent) onEvent(ev);
      }
    }
  };
  return { pads, st, run, log, free, pad: pads.list[0] };
}

test('dormant until started; opens at 2 kills or 25 s after the lockdown, whichever first; one padOpen', () => {
  const a = rig();
  a.st.started = false; a.run(60);
  assert.equal(a.pad.state, 'dormant'); assert.equal(a.log.length, 0);
  assert.deepEqual([a.pad.id, a.pad.pos, a.pad.spawned, a.pad.alive], ['sauna1', POS, 0, 0]);
  a.st.started = true; a.st.start = a.st.now;
  a.run(24.5); assert.equal(a.pad.state, 'dormant', 'not before 25 s with fewer than 2 kills');
  a.st.kills = 1; a.run(0.2); assert.equal(a.pad.state, 'dormant', 'one kill is not enough');
  a.run(1);
  assert.equal(a.pad.state, 'open');
  assert.equal(a.log.filter(e => e.type === 'padOpen').length, 1);
  a.run(20); assert.equal(a.log.filter(e => e.type === 'padOpen').length, 1, 'only once');
  // Two kills open it at once.
  const b = rig(); b.run(2);
  assert.equal(b.pad.state, 'dormant');
  b.st.kills = 2; b.run(0.1);
  assert.equal(b.pad.state, 'open');
  assert.equal(b.log.find(e => e.type === 'padOpen').t < 2.2, true);
  assert.deepEqual(b.log.find(e => e.type === 'padOpen'), { t: b.log[0].t, type: 'padOpen', id: 'sauna1' });
});

test('spawns every 5 s while its alive < 2 and a slot is free; waits when slots are full; spent after 6', () => {
  const a = rig(); a.st.kills = 2;
  a.run(0.1);
  const openAt = a.log[0].t;
  a.run(4.6); assert.equal(a.pad.spawned, 0, 'nothing before the first interval');
  a.run(0.6);
  assert.equal(a.pad.spawned, 1);
  const spawns = () => a.log.filter(e => e.type === 'padSpawn');
  assert.ok(Math.abs(spawns()[0].t - (openAt + 5)) < 0.05, 'the first spawn one interval after opening');
  assert.deepEqual(spawns()[0], { t: spawns()[0].t, type: 'padSpawn', id: 'sauna1', enemyId: 's0' });
  a.run(5); assert.equal(a.pad.spawned, 2); assert.equal(a.pad.alive, 2);
  assert.ok(Math.abs(spawns()[1].t - spawns()[0].t - 5) < 0.05, 'every 5 s');
  a.run(15); assert.equal(a.pad.spawned, 2, 'two alive: no more');
  a.pads.noteDeath('s0'); assert.equal(a.pad.alive, 1);
  a.run(0.1); assert.equal(a.pad.spawned, 3, 'a death makes room at once, the interval having passed');
  // Slots full: it waits and spawns the moment one frees.
  a.pads.noteDeath('s1'); a.st.free = false; a.run(20);
  assert.equal(a.pad.spawned, 3);
  a.st.free = true; a.run(0.1);
  assert.equal(a.pad.spawned, 4);
  // Kill each as it comes: 6 spawns in all, then spent, once.
  const kill = (ev) => { if (ev.type === 'padSpawn') a.pads.noteDeath(ev.enemyId); };
  a.pads.noteDeath('s2'); a.pads.noteDeath('s3');
  a.run(60, kill);
  assert.equal(a.pad.spawned, 6); assert.equal(a.pad.state, 'spent');
  assert.equal(a.log.filter(e => e.type === 'padSpent').length, 1);
  assert.equal(a.pads.allDone(), true);
  a.run(30); assert.equal(a.pad.spawned, 6, 'spent never spawns again');
});

test('blast at 1.8 m from the centre closes it (radius 1.1 + reach 0.8); at 2.0 m it does not; closed never spawns again; reset -> dormant', () => {
  const at = (d) => [POS[0] - d, 0.12, POS[2]];
  const a = rig();
  assert.deepEqual(a.pads.blast(at(2.0)), [], 'out of reach');
  assert.equal(a.pad.state, 'dormant');
  assert.deepEqual(a.pads.blast(at(1.8)), ['sauna1']);
  assert.equal(a.pad.state, 'closed');
  assert.deepEqual(a.pads.blast(at(0)), [], 'closing twice reports nothing');
  a.st.kills = 5; a.run(40);
  assert.equal(a.pad.spawned, 0); assert.equal(a.log.length, 0, 'closed: no open, no spawn');
  assert.equal(a.pads.allDone(), true);
  a.pads.reset();
  assert.deepEqual([a.pad.state, a.pad.spawned, a.pad.alive, a.pads.allDone()], ['dormant', 0, 0, false]);
  // An open sauna closes too, and keeps no spawn pending; reach follows the tuning at use time.
  const b = rig(); b.st.kills = 2; b.run(6);
  assert.equal(b.pad.spawned, 1);
  assert.deepEqual(b.pads.blast(at(1.8)), ['sauna1']);
  b.run(20); assert.equal(b.pad.spawned, 1);
  const c = rig(t => { t.grenade.padReach = 1.5; });
  assert.deepEqual(c.pads.blast(at(2.0)), ['sauna1'], 'reach is read when the blast lands');
  // A spent sauna is not re-closed.
  const d = rig(t => { t.pad.total = 1; }); d.st.kills = 2; d.run(6);
  assert.equal(d.pad.state, 'spent'); assert.deepEqual(d.pads.blast(at(0)), []);
});

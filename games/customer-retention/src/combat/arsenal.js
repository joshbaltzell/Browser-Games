import { TUNING } from '../tuning.js';
import { LOADOUT, reloadZone, reloadEnd } from './weapons.js';

const SPREAD_KEY = { aim: 'spreadAim', hip: 'spreadHip', blind: 'spreadBlind' };

// The player's guns: magazines, reserves, fire rate, bloom, active reload and switching.
// Logic only: no clock, no DOM. It reads each weapon's row from `weapons` at every use.
// Frame-rate independent: everything advances by the dt passed to update.
export function createArsenal({ weapons = TUNING.weapons, combat = TUNING.combat, loadout = LOADOUT } = {}) {
  const ammo = {};
  const fill = () => {
    for (const id of loadout) {
      if (id) Object.assign(ammo[id] || (ammo[id] = {}), { mag: Math.floor(weapons[id].mag), reserve: Math.floor(weapons[id].reserveStart), bloom: 0, boost: false });
    }
  };
  fill();
  const events = [];
  const a = {
    slot: Math.max(0, loadout.findIndex(Boolean)),
    ammo,
    reload: null,
    switching: 0,
    cooldown: 0,
    buffer: 0,
    dryLatched: false,
  };
  const current = () => loadout[a.slot];
  const spreadBase = (row, stance) => row[SPREAD_KEY[stance] || 'spreadHip'];
  const canFire = (stance) => stance !== null && stance !== undefined && a.reload === null && a.switching <= 0;

  function canStartReload() {
    const id = current(), row = weapons[id], am = ammo[id];
    return a.reload === null && a.switching <= 0 && am.mag < row.mag && (row.infiniteReserve > 0 || am.reserve > 0);
  }
  function startReload() {
    const id = current(), row = weapons[id];
    a.reload = { id, t: 0, press: null, end: reloadEnd(row, 0, 'normal', combat) };
    ammo[id].boost = false;
    events.push({ type: 'reloadStart', id });
  }
  function finishReload() {
    const { id, press } = a.reload, row = weapons[id], am = ammo[id];
    const taken = Math.max(0, row.mag - am.mag);
    if (row.infiniteReserve > 0) am.mag += taken;
    else { const t = Math.min(taken, am.reserve); am.mag += t; am.reserve -= t; }
    am.boost = press === 'perfect';
    a.reload = null;
    events.push({ type: 'reloadDone', id, result: press || 'normal' });
  }

  function switchTo(slot) {
    if (slot === a.slot || !loadout[slot]) return;
    a.reload = null;
    a.slot = slot;
    a.switching = weapons[loadout[slot]].switchTime;
    a.cooldown = 0; a.buffer = 0; a.dryLatched = false;
    events.push({ type: 'switch', id: loadout[slot] });
  }
  function cycle(dir) {
    const n = loadout.length;
    for (let i = 1; i < n; i++) {
      const s = (a.slot + dir * i + n * n) % n;
      if (loadout[s]) return switchTo(s);
    }
  }

  a.current = current;
  a.canFire = canFire;
  a.spreadOf = (stance) => spreadBase(weapons[current()], stance) + ammo[current()].bloom;

  a.update = function update(input, stance, dt) {
    events.length = 0;
    if (!(dt > 0) || !Number.isFinite(dt)) dt = 0;

    // 1. switch
    const w = input.weapon;
    if (w === 'next') cycle(1);
    else if (w === 'prev') cycle(-1);
    else if (w === 1 || w === 2 || w === 3) switchTo(w - 1);

    // 2. timers
    a.switching -= dt;
    for (const id of loadout) {
      if (id) ammo[id].bloom = Math.max(0, ammo[id].bloom - weapons[id].bloomRecover * dt);
    }

    // 3. reload
    const id = current(), row = weapons[id], am = ammo[id];
    if (input.reload) {
      if (a.reload === null) { if (canStartReload()) startReload(); }
      else if (a.reload.press === null) {
        const r = a.reload, T = Math.max(row.reloadTime, combat.minReloadTime);
        r.press = reloadZone(r.t / T, row);
        r.end = reloadEnd(row, r.t, r.press, combat);
        events.push({ type: 'reloadPress', id, result: r.press });
      }
    }
    if (a.reload !== null) {
      a.reload.t += dt;
      if (a.reload.t >= a.reload.end) finishReload();
    }

    // 4. fire
    if (input.firePressed) { a.buffer = combat.fireBuffer; a.dryLatched = false; } else a.buffer -= dt;
    if (!input.fire) a.dryLatched = false;
    if (!canFire(stance)) a.buffer = 0; // held or pressed fire here queues nothing
    const auto = row.auto > 0;
    const want = auto ? !!input.fire : a.buffer > 0;
    const interval = 1 / Math.max(row.rate, combat.minRate);
    a.cooldown -= dt;
    if (!want) a.cooldown = Math.max(a.cooldown, 0);
    a.cooldown = Math.max(a.cooldown, -interval);
    while (want && canFire(stance) && a.cooldown <= 0) {
      if (am.mag <= 0) {
        if (!a.dryLatched) { a.dryLatched = true; events.push({ type: 'dry', id }); }
        a.buffer = 0;
        if (combat.autoReload > 0 && canStartReload()) startReload();
        break;
      }
      am.mag--;
      events.push({ type: 'shot', id, mult: am.boost ? row.perfectDamage : 1, spread: a.spreadOf(stance) });
      am.bloom = Math.min(row.bloomMax, am.bloom + row.bloomPerShot);
      a.cooldown += interval;
      if (am.mag === 0) am.boost = false;
      if (!auto) { a.buffer = 0; break; }
    }
    return events;
  };

  // Back to the starting state: every weapon full with its starting reserve, first slot, no reload.
  a.reset = () => {
    // Rows are refilled in place, so anything holding a row sees the reset.
    fill();
    a.slot = Math.max(0, loadout.findIndex(Boolean));
    a.reload = null; a.switching = 0; a.cooldown = 0; a.buffer = 0; a.dryLatched = false;
    events.length = 0;
  };
  // A pickup: adds n rounds of reserve, capped at reserveMax. An infinite reserve ignores it.
  a.addReserve = (id, n) => {
    const am = ammo[id];
    if (!am || weapons[id].infiniteReserve > 0 || !(n > 0)) return;
    am.reserve = Math.max(am.reserve, Math.min(Math.floor(weapons[id].reserveMax), am.reserve + Math.floor(n)));
  };
  a.refill = () => { for (const i of loadout) if (i) ammo[i].reserve = Math.floor(weapons[i].reserveMax); };
  a.set = (i, { mag, reserve } = {}) => {
    if (!ammo[i]) return;
    if (mag !== undefined) ammo[i].mag = mag;
    if (reserve !== undefined) ammo[i].reserve = reserve;
  };
  return a;
}

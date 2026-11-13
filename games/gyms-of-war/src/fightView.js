import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from './tuning.js';
import { PALETTE } from './render/palette.js';
import { createToonMaterial } from './render/toon.js';
import { createBarkLine } from './director/barks.js';
import { hitAngle } from './ui/damageFace.js';
import { SPEAKER_COLORS } from './director/barks.js';

// The fight on screen and in the speakers: the Associates' flashes, tracers, charge whines and blaster sounds, the
// bark line, the ammo pickups they drop, and (milestone 5) the saunas' sounds and steam, the kettlebell blast, Tobble's shots,
// the revive sounds and the deaths that do not come from Doc's gun. The fight (director/fight.js) is the truth; this reacts to its events.
// `views` is one Associate view per enemy, in the same order as fight.enemies. `hooks` is play.js's side of it:
//   { marker(kind) shows the hit marker, restart() goes back to the checkpoint }. `cam` (optional) gets the blast's kick.

const MAX_PICKUPS = 4;
const SPIN = 1.2;
const tip = [0, 0, 0];

function pickupGeometry() {
  const part = (w, h, d, y, color) => {
    const g = new THREE.BoxGeometry(w, h, d).translate(0, y, 0);
    g.deleteAttribute('uv');
    const c = new THREE.Color(color), n = g.getAttribute('position').count, col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return g;
  };
  // A cream box with a wider orange lid, about 0.3 m wide.
  return mergeGeometries([part(0.3, 0.16, 0.22, 0.08, PALETTE.cream), part(0.34, 0.07, 0.26, 0.195, PALETTE.playerOrange)], false);
}

// Where a shot's tracer and flash start, written into out. An accurate shot starts at the Associate's gun; a
// suppression (blind) shot starts at the logic muzzle ev.from, which is above the kiosk top, not at the tucked gun.
export function shotOrigin(ev, gunTip, out) {
  if (ev.accurate && gunTip) { gunTip(out); return out; }
  out[0] = ev.from[0]; out[1] = ev.from[1]; out[2] = ev.from[2];
  return out;
}

export function createFightView({ scene, effects, sfx, fight, views, cam = null, hooks = {} }) {
  const byId = new Map(fight.enemies.map((e, i) => [e.id, views[i]]));
  const enemyById = new Map(fight.enemies.map(e => [e.id, e]));
  const glints = new Map();           // id -> seconds of glint left
  const pickups = [];                 // { pos: [x, y, z] }
  const mesh = new THREE.InstancedMesh(pickupGeometry(), createToonMaterial({ vertexColors: true, rim: 0 }), MAX_PICKUPS);
  mesh.name = 'pickups';
  mesh.frustumCulled = false;
  mesh.count = 0;
  scene.add(mesh);
  const dummy = new THREE.Object3D();
  let clock = 0;
  const barkLine = createBarkLine();
  const goo = [];                     // the Overlord's slump: { t, pos } until it bursts

  const pan = (listener, from) => Math.sin(hitAngle(listener.yaw, listener.pos, from));
  // A sound at a point in the world: louder when it is near, panned to where it is.
  const near = (listener, at) => Math.min(1, 6 / Math.max(Math.hypot(at[0] - listener.pos[0], at[2] - listener.pos[2]), 1e-3));
  const where = [0, 0, 0], dirv = [0, 1, 0];
  const mid = (pos, up = 1.0) => { where[0] = pos[0]; where[1] = pos[1] + up; where[2] = pos[2]; return where; };

  // A Rep died by anything but Doc's gun (the gun's kills are drawn in play.js, with the shot).
  function deathFx(ev, listener) {
    const fb = TUNING.feedback, kind = ev.kind;
    if (ev.boss) {
      // It slumps first (the view); the burst of goo and keycards comes when the slump ends.
      goo.push({ t: TUNING.ending.deathDelay * 0.9, pos: [ev.pos[0], ev.pos[1], ev.pos[2]] });
      effects.gel(mid(ev.pos, 1.5), dirv, fb.gelCount);
      sfx.play('kill', fb.killVolume, pan(listener, ev.pos));
      if (hooks.marker) hooks.marker('kill');
      return;
    }
    if (kind === 'body' || kind === 'head') return;
    const at = mid(ev.pos), n = kind === 'execute' ? fb.killGelCount * 2 : kind === 'bleed' ? fb.gelCount : fb.killGelCount;
    effects.gel(at, dirv, n);
    if (kind === 'bleed') return;
    effects.receipts(mid(ev.pos, 1.2), fb.receiptCount);
    addPickup(ev.pos);
    if (kind === 'tobble') { sfx.play('kill', fb.killVolume * 0.5, pan(listener, ev.pos)); return; }
    if (hooks.marker) hooks.marker('kill');
    sfx.play(kind === 'execute' ? 'finish' : 'kill', kind === 'execute' ? fb.bashVolume : fb.killVolume, pan(listener, ev.pos));
  }

  const padPos = (id) => { const p = fight.pads.find(x => x.id === id); return p ? p.pos : [0, 0, 0]; };

  function nearestEnemy(from) {
    let best = null, bd = Infinity;
    for (const e of fight.enemies) {
      const d = Math.hypot(e.pos[0] - from[0], e.pos[2] - from[2]);
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  // Events from fight.step. listener is { pos, yaw }: where the player stands and which way the camera looks.
  function handle(events, listener) {
    const fb = TUNING.feedback, A = TUNING.associate;
    for (const ev of events) {
      if (ev.type === 'bark') barkLine.say(ev.key, !!ev.force);
      else if (ev.type === 'padOpen') sfx.play('saunaOpen', fb.saunaVolume, pan(listener, padPos(ev.id)));
      else if (ev.type === 'padClosed') sfx.play('saunaClose', fb.saunaVolume, pan(listener, padPos(ev.id)));
      else if (ev.type === 'padSpawn') { const pp = padPos(ev.id); for (let k = 0; k < 4; k++) effects.steam([pp[0] + (k - 1.5) * 0.25, 0.1, pp[2]]); }
      else if (ev.type === 'explode') {
        effects.blast(ev.pos);
        const d = Math.hypot(ev.pos[0] - listener.pos[0], ev.pos[2] - listener.pos[2]), k = Math.min(1, 8 / Math.max(d, 1e-3));
        sfx.play('boom', fb.boomVolume * Math.max(0.4, k), pan(listener, ev.pos));
        if (cam) { cam.kick(4 * k, (Math.random() * 2 - 1) * 2 * k); cam.bump(k); }
      } else if (ev.type === 'clank') sfx.play('clank', fb.clankVolume * near(listener, ev.pos), pan(listener, ev.pos));
      else if (ev.type === 'tobbleShot') {
        const tb = fight.tobble, tv = hooks.tobbleView;
        if (tv && tb && tb.pop >= 0.5) tv.tip(tip); else { tip[0] = ev.from[0]; tip[1] = ev.from[1]; tip[2] = ev.from[2]; }
        const dx = ev.to[0] - tip[0], dy = ev.to[1] - tip[1], dz = ev.to[2] - tip[2], l = Math.hypot(dx, dy, dz) || 1;
        effects.flash(tip, [dx / l, dy / l, dz / l]);
        effects.friendlyTracer(tip, ev.to);
        sfx.play('tobbleShot', fb.tobbleShotVolume * near(listener, ev.from), pan(listener, ev.from));
      } else if (ev.type === 'tobbleHit') {
        const tb = fight.tobble;
        if (tb) effects.gel(tb.chest, [ev.from[0] - tb.chest[0], 0.3, ev.from[2] - tb.chest[2]], 4);
      } else if (ev.type === 'revived') sfx.play('revive', fb.reviveVolume);
      else if (ev.type === 'cloneRevive') { const h = enemyById.get(ev.id); if (h) sfx.play('revive', fb.reviveVolume * 0.6 * near(listener, h.pos), pan(listener, h.pos)); }
      else if (ev.type === 'down') { if (hooks.marker) hooks.marker('kill'); effects.gel(mid(ev.pos), dirv, 6); sfx.play('hit', fb.hitVolume, pan(listener, ev.pos)); }
      else if (ev.type === 'death') deathFx(ev, listener);
      else if (ev.type === 'bossLob') {
        const h = enemyById.get(ev.id);
        sfx.play('throw', fb.throwVolume, h ? pan(listener, h.pos) : 0);
      } else if (ev.type === 'lobLand') {
        // A page of fine print goes off: a blast and a spray of paper, a kick that gets stronger the nearer it was.
        effects.blast(ev.pos);
        effects.receipts(mid(ev.pos, 0.6), fb.receiptCount);
        const d = Math.hypot(ev.pos[0] - listener.pos[0], ev.pos[2] - listener.pos[2]), k = Math.min(1, 8 / Math.max(d, 1e-3));
        sfx.play('boom', fb.boomVolume * Math.max(0.4, k), pan(listener, ev.pos));
        if (cam) { cam.kick(3 * k, (Math.random() * 2 - 1) * 2 * k); cam.bump(k); }
      } else if (ev.type === 'bossPhase') {
        sfx.play(ev.phase === 2 ? 'saunaOpen' : 'charge', ev.phase === 2 ? fb.saunaVolume : fb.chargeVolume);
        if (cam) cam.bump(1.5);
      }
      else if (ev.type === 'checkpoint') { if (hooks.restart) hooks.restart(); }
      else if (ev.type === 'telegraph') {
        glints.set(ev.id, ev.time !== undefined ? ev.time : A.popTime + A.telegraphTime);
        const v = byId.get(ev.id), e = enemyById.get(ev.id);
        if (v) v.glint(true);
        if (e) sfx.play('charge', fb.chargeVolume, pan(listener, e.pos));
      } else if (ev.type === 'trainerSwing') {
        sfx.play('bash', fb.bashVolume * near(listener, ev.from), pan(listener, ev.from));
      } else if (ev.type === 'shotFx') {
        const e = nearestEnemy(ev.from), v = e && byId.get(e.id);
        shotOrigin(ev, v ? v.tip : null, tip);
        const dx = ev.to[0] - tip[0], dy = ev.to[1] - tip[1], dz = ev.to[2] - tip[2], l = Math.hypot(dx, dy, dz) || 1;
        effects.enemyFlash(tip, [dx / l, dy / l, dz / l]);
        effects.enemyTracer(tip, ev.to);
        const dist = Math.hypot(ev.from[0] - listener.pos[0], ev.from[2] - listener.pos[2]);
        sfx.play('blaster', fb.blasterVolume * Math.min(1, 8 / Math.max(dist, 1e-3)), pan(listener, ev.from));
      }
    }
  }

  function addPickup(pos) {
    if (pickups.length >= MAX_PICKUPS) pickups.shift();
    pickups.push({ pos: [pos[0], pos[1], pos[2]] });
    drawPickups();
  }

  function drawPickups() {
    mesh.count = pickups.length;
    for (let i = 0; i < pickups.length; i++) {
      dummy.position.set(pickups[i].pos[0], pickups[i].pos[1], pickups[i].pos[2]);
      dummy.rotation.set(0, clock * SPIN + i, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  return {
    handle,
    // A bark that always shows (downed), and the line on screen now as { speaker, text } or null.
    forceBark: (key) => barkLine.say(key, true),
    bark: () => barkLine.current(),
    pan, near,
    // The bark clock runs on simulation time (once per fixed step), so a line never outlives its time.
    tick: (dt) => barkLine.tick(dt),
    update(dt) {
      if (!(dt > 0)) return;
      clock += dt;
      for (let i = goo.length - 1; i >= 0; i--) {
        goo[i].t -= dt;
        if (goo[i].t > 0) continue;
        const g = goo.splice(i, 1)[0], fb = TUNING.feedback;
        effects.gel(mid(g.pos, 1.5), dirv, fb.killGelCount * 3);
        effects.receipts(mid(g.pos, 2.0), fb.receiptCount * 3);   // the keycards
        sfx.play('finish', fb.bashVolume);
        if (cam) cam.bump(2);
      }
      for (const [id, left] of glints) {
        if (left - dt <= 0) { glints.delete(id); const v = byId.get(id); if (v) v.glint(false); } else glints.set(id, left - dt);
      }
      if (pickups.length) drawPickups();
    },
    addPickup,
    // Removes every pickup within `radius` of pos (x, z) and returns how many.
    collect(pos, radius) {
      let n = 0;
      for (let i = pickups.length - 1; i >= 0; i--) {
        if (Math.hypot(pos[0] - pickups[i].pos[0], pos[2] - pickups[i].pos[2]) <= radius) { pickups.splice(i, 1); n++; }
      }
      if (n) drawPickups();
      return n;
    },
    count: () => pickups.length,
    pickups: () => pickups.map(p => p.pos.slice()),
    reset() {
      pickups.length = 0; mesh.count = 0; mesh.instanceMatrix.needsUpdate = true;
      glints.clear(); barkLine.reset(); goo.length = 0;
    },
  };
}

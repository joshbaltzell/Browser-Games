import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from './tuning.js';
import { PALETTE } from './render/palette.js';
import { createToonMaterial } from './render/toon.js';
import { createBarkLine } from './director/barks.js';
import { hitAngle } from './ui/damageFace.js';

// The fight on screen and in the speakers: the Associates' flashes, tracers, charge whines and blaster sounds, the
// bark line, and the ammo pickups they drop. The fight (director/fight.js) is the truth; this reacts to its events.
// `views` is one Associate view per enemy, in the same order as fight.enemies.

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

export function createFightView({ scene, effects, sfx, fight, views }) {
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

  const pan = (listener, from) => Math.sin(hitAngle(listener.yaw, listener.pos, from));

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
      if (ev.type === 'bark') barkLine.say(ev.key, false);
      else if (ev.type === 'telegraph') {
        glints.set(ev.id, A.popTime + A.telegraphTime);
        const v = byId.get(ev.id), e = enemyById.get(ev.id);
        if (v) v.glint(true);
        if (e) sfx.play('charge', fb.chargeVolume, pan(listener, e.pos));
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
    // The bark clock runs on simulation time (once per fixed step), so a line never outlives its time.
    tick: (dt) => barkLine.tick(dt),
    update(dt) {
      if (!(dt > 0)) return;
      clock += dt;
      for (const [id, left] of glints) {
        if (left - dt <= 0) { glints.delete(id); const v = byId.get(id); if (v) v.glint(false); } else glints.set(id, left - dt);
      }
      if (pickups.length) drawPickups();
    },
    addPickup(pos) {
      if (pickups.length >= MAX_PICKUPS) pickups.shift();
      pickups.push({ pos: [pos[0], pos[1], pos[2]] });
      drawPickups();
    },
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
      glints.clear(); barkLine.reset();
    },
  };
}

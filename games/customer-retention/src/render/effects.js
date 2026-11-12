// Shot effects: muzzle flash, tracer, sparks, gel and receipts. Each kind is one pooled
// InstancedMesh in toon material, so the whole kit costs ten draw calls (the player's flash and tracer, the Associates' acid-green pair, sparks, gel,
// receipts, and milestone 5's blast puffs, steam and dust puffs, and Tobble's orange tracer).
import * as THREE from 'three';
import { TUNING } from '../tuning.js';
import { PALETTE } from './palette.js';
import { createToonMaterial } from './toon.js';
import { createPool } from './fxPool.js';

const UP = new THREE.Vector3(0, 0, 1);

export function createEffects(scene, fb = () => TUNING.feedback) {
  const dummy = new THREE.Object3D();
  const rnd = (a = 1) => (Math.random() * 2 - 1) * a;

  function kind(geometry, color, size) {
    const mesh = new THREE.InstancedMesh(geometry, createToonMaterial({ color, rim: 0 }), size);
    mesh.frustumCulled = false;
    mesh.count = size;
    dummy.position.set(0, -1000, 0); dummy.scale.setScalar(0); dummy.updateMatrix();
    for (let i = 0; i < size; i++) mesh.setMatrixAt(i, dummy.matrix);
    scene.add(mesh);
    return { mesh, pool: createPool(size), pos: new Float32Array(size * 3), vel: new Float32Array(size * 3), aux: new Float32Array(size * 4) };
  }
  const flashes = kind(new THREE.OctahedronGeometry(0.5, 0), PALETTE.playerOrange, 8);
  const tracers = kind(new THREE.BoxGeometry(1, 1, 1), PALETTE.playerOrange, 24);
  const eFlashes = kind(new THREE.OctahedronGeometry(0.5, 0), PALETTE.gel, 8);
  const eTracers = kind(new THREE.BoxGeometry(1, 1, 1), PALETTE.gel, 24);
  const sparks = kind(new THREE.BoxGeometry(0.05, 0.05, 0.05), PALETTE.cream, 48);
  const gels = kind(new THREE.IcosahedronGeometry(0.5, 0), PALETTE.gel, 96);
  const papers = kind(new THREE.BoxGeometry(0.16, 0.2, 0.012), PALETTE.cream, 48);
  const puffs = kind(new THREE.IcosahedronGeometry(0.5, 0), PALETTE.cream, 40);          // steam and dust
  const blasts = kind(new THREE.IcosahedronGeometry(0.5, 1), PALETTE.planet, 4);         // the kettlebell's cream-orange fireball
  const fTracers = kind(new THREE.BoxGeometry(1, 1, 1), PALETTE.playerOrange, 16);       // Tobble's tracer
  const axis = new THREE.Vector3();

  function place(k, i) {
    dummy.updateMatrix();
    k.mesh.setMatrixAt(i, dummy.matrix);
    k.mesh.instanceMatrix.needsUpdate = true;
  }
  const hide = (k, i) => { dummy.position.set(0, -1000, 0); dummy.scale.setScalar(0); dummy.quaternion.identity(); place(k, i); };
  const put = (k, i, x, y, z) => { k.pos[i * 3] = x; k.pos[i * 3 + 1] = y; k.pos[i * 3 + 2] = z; };
  const vel = (k, i, x, y, z) => { k.vel[i * 3] = x; k.vel[i * 3 + 1] = y; k.vel[i * 3 + 2] = z; };

  // A direction (dx, dy, dz) spread around `base` by `jit`, scaled to `speed`.
  function burst(k, i, base, jit, speed) {
    const x = base[0] + rnd(jit), y = base[1] + rnd(jit), z = base[2] + rnd(jit);
    const l = Math.hypot(x, y, z) || 1;
    vel(k, i, x / l * speed * (0.5 + Math.random() * 0.5), y / l * speed * (0.5 + Math.random() * 0.5), z / l * speed * (0.5 + Math.random() * 0.5));
  }
  const kinds = [];
  function ballistic(k, life, size, spin) {
    kinds.push({ k, life, shown: new Uint8Array(k.pool.ages.length), step(dt) {
      const g = fb().gravity, k2 = k;
      for (let i = 0; i < k2.pool.ages.length; i++) {
        if (!k2.pool.alive(i)) continue;
        k2.vel[i * 3 + 1] -= g * dt;
        for (let a = 0; a < 3; a++) k2.pos[i * 3 + a] += k2.vel[i * 3 + a] * dt;
      }
    }, draw(i) {
      const f = 1 - k.pool.ages[i] / life();
      dummy.position.set(k.pos[i * 3], k.pos[i * 3 + 1], k.pos[i * 3 + 2]);
      dummy.scale.setScalar(size(i) * Math.max(0, f));
      if (spin) dummy.rotation.set(k.aux[i * 4] + k.pool.ages[i] * 7, k.aux[i * 4 + 1] + k.pool.ages[i] * 5, k.aux[i * 4 + 2]);
      else dummy.quaternion.identity();
      place(k, i);
    } });
  }
  ballistic(sparks, () => fb().sparkTime, () => 1, false);
  ballistic(gels, () => fb().gelTime, (i) => 0.05 + gels.aux[i * 4 + 3] * 0.07, false);
  ballistic(papers, () => fb().receiptTime, () => 1, true);
  // A flash or tracer kind, sized by the named feedback numbers.
  function flashKind(k, sizeKey) {
    kinds.push({ k, shown: new Uint8Array(k.pool.ages.length), life: () => fb().flashTime, step() {}, draw(i) {
      const f = 1 - k.pool.ages[i] / fb().flashTime;
      dummy.position.set(k.pos[i * 3], k.pos[i * 3 + 1], k.pos[i * 3 + 2]);
      dummy.scale.setScalar(fb()[sizeKey] * (0.5 + 0.5 * Math.max(0, f)));
      dummy.rotation.set(k.aux[i * 4], k.aux[i * 4 + 1], k.aux[i * 4 + 2]);
      place(k, i);
    } });
  }
  function tracerKind(k, timeKey, widthKey, widthScale = 1) {
    kinds.push({ k, shown: new Uint8Array(k.pool.ages.length), life: () => fb()[timeKey], step() {}, draw(i) {
      const f = Math.max(0, 1 - k.pool.ages[i] / fb()[timeKey]);
      const w = fb()[widthKey] * widthScale * f, len = k.aux[i * 4];
      dummy.position.set(k.pos[i * 3], k.pos[i * 3 + 1], k.pos[i * 3 + 2]);
      dummy.quaternion.setFromUnitVectors(UP, axis.set(k.vel[i * 3], k.vel[i * 3 + 1], k.vel[i * 3 + 2]));
      dummy.scale.set(w, w, len);
      place(k, i);
    } });
  }
  // Puffs drift up (no gravity) and swell, then shrink away over PUFF_LIFE; aux[3] is the size at birth.
  const PUFF_LIFE = 0.9;
  kinds.push({ k: puffs, shown: new Uint8Array(puffs.pool.ages.length), life: () => PUFF_LIFE, step(dt) {
    for (let i = 0; i < puffs.pool.ages.length; i++) {
      if (!puffs.pool.alive(i)) continue;
      for (let a = 0; a < 3; a++) puffs.pos[i * 3 + a] += puffs.vel[i * 3 + a] * dt;
    }
  }, draw(i) {
    const f = puffs.pool.ages[i] / PUFF_LIFE;
    dummy.position.set(puffs.pos[i * 3], puffs.pos[i * 3 + 1], puffs.pos[i * 3 + 2]);
    dummy.scale.setScalar(puffs.aux[i * 4 + 3] * (0.5 + f) * (1 - f * f * f));
    dummy.quaternion.identity();
    place(puffs, i);
  } });
  // The blast swells to blastSize over blastTime (fast at first), holds and shrinks away over the last 40 percent.
  kinds.push({ k: blasts, shown: new Uint8Array(blasts.pool.ages.length), life: () => fb().blastTime, step() {}, draw(i) {
    const k = Math.min(blasts.pool.ages[i] / Math.max(fb().blastTime, 1e-3), 1);
    const grow = 1 - (1 - Math.min(k / 0.6, 1)) ** 2, fade = k > 0.6 ? 1 - (k - 0.6) / 0.4 : 1;
    dummy.position.set(blasts.pos[i * 3], blasts.pos[i * 3 + 1], blasts.pos[i * 3 + 2]);
    dummy.scale.setScalar(Math.max(fb().blastSize * grow * fade, 1e-3));
    dummy.rotation.set(0, blasts.aux[i * 4], 0);
    place(blasts, i);
  } });
  tracerKind(fTracers, 'tracerTime', 'tracerWidth', 0.6);
  flashKind(flashes, 'flashSize');
  flashKind(eFlashes, 'enemyFlashSize');
  tracerKind(tracers, 'tracerTime', 'tracerWidth');
  tracerKind(eTracers, 'enemyTracerTime', 'enemyTracerWidth');

  const spawnFlash = (k, pos, dir) => {
    const i = k.pool.spawn();
    put(k, i, pos[0] + dir[0] * 0.1, pos[1] + dir[1] * 0.1, pos[2] + dir[2] * 0.1);
    k.aux[i * 4] = rnd(3); k.aux[i * 4 + 1] = rnd(3); k.aux[i * 4 + 2] = rnd(3);
  };
  const spawnTracer = (k, from, to) => {
    const dx = to[0] - from[0], dy = to[1] - from[1], dz = to[2] - from[2];
    const len = Math.hypot(dx, dy, dz);
    if (!(len > 1e-6)) return;
    const i = k.pool.spawn();
    put(k, i, from[0] + dx / 2, from[1] + dy / 2, from[2] + dz / 2);
    vel(k, i, dx / len, dy / len, dz / len);
    k.aux[i * 4] = len;
  };

  return {
    flash(pos, dir) { spawnFlash(flashes, pos, dir); },
    tracer(from, to) { spawnTracer(tracers, from, to); },
    friendlyTracer(from, to) { spawnTracer(fTracers, from, to); },
    // One cream puff rising from pos (the Spawn Sauna's steam).
    steam(pos) {
      const i = puffs.pool.spawn();
      put(puffs, i, pos[0], pos[1], pos[2]);
      vel(puffs, i, rnd(0.15), 0.7 + Math.random() * 0.4, rnd(0.15));
      puffs.aux[i * 4 + 3] = 0.16 + Math.random() * 0.1;
    },
    // The kettlebell blast: the cream-orange fireball, 12 gel and 6 dust puffs thrown out.
    blast(pos) {
      const i = blasts.pool.spawn();
      put(blasts, i, pos[0], pos[1] + 0.3, pos[2]);
      blasts.aux[i * 4] = Math.random() * 6;
      for (let n = 0; n < 6; n++) {
        const j = puffs.pool.spawn(), a = (n / 6) * Math.PI * 2 + Math.random();
        put(puffs, j, pos[0], pos[1] + 0.2, pos[2]);
        vel(puffs, j, Math.cos(a) * 2.2, 0.8 + Math.random() * 0.6, Math.sin(a) * 2.2);
        puffs.aux[j * 4 + 3] = 0.35 + Math.random() * 0.2;
      }
      this.gel([pos[0], pos[1] + 0.3, pos[2]], [0, 1, 0], 12);
    },
    enemyFlash(pos, dir) { spawnFlash(eFlashes, pos, dir); },
    enemyTracer(from, to) { spawnTracer(eTracers, from, to); },
    spark(pos, normal) {
      for (let n = 0; n < fb().sparkCount; n++) {
        const i = sparks.pool.spawn();
        put(sparks, i, pos[0], pos[1], pos[2]);
        burst(sparks, i, normal, 0.9, 3);
      }
    },
    gel(pos, dir, count = fb().gelCount) {
      for (let n = 0; n < count; n++) {
        const i = gels.pool.spawn();
        put(gels, i, pos[0], pos[1], pos[2]);
        burst(gels, i, dir, 1.2, fb().gelSpeed);
        gels.aux[i * 4 + 3] = Math.random();
      }
    },
    receipts(pos, count = fb().receiptCount) {
      for (let n = 0; n < count; n++) {
        const i = papers.pool.spawn();
        put(papers, i, pos[0], pos[1], pos[2]);
        burst(papers, i, [0, 1, 0], 1.5, fb().gelSpeed);
        papers.aux[i * 4] = rnd(3); papers.aux[i * 4 + 1] = rnd(3); papers.aux[i * 4 + 2] = rnd(3);
      }
    },
    // Drops everything in flight, drawn or not.
    clear() {
      for (const e of kinds) {
        e.k.pool.clear();
        for (let i = 0; i < e.shown.length; i++) if (e.shown[i]) { hide(e.k, i); e.shown[i] = 0; }
      }
    },
    update(dt) {
      if (!(dt > 0)) return;
      for (const e of kinds) {
        e.step(dt);
        const { pool } = e.k;
        pool.update(dt, e.life);
        for (let i = 0; i < pool.ages.length; i++) {
          if (pool.alive(i)) { e.draw(i); e.shown[i] = 1; }
          else if (e.shown[i]) { hide(e.k, i); e.shown[i] = 0; }
        }
      }
    },
  };
}

// Shot effects: muzzle flash, tracer, sparks, gel and receipts. Each kind is one pooled
// InstancedMesh in toon material, so the whole kit costs five draw calls.
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
  const sparks = kind(new THREE.BoxGeometry(0.05, 0.05, 0.05), PALETTE.cream, 48);
  const gels = kind(new THREE.IcosahedronGeometry(0.5, 0), PALETTE.gel, 96);
  const papers = kind(new THREE.BoxGeometry(0.16, 0.2, 0.012), PALETTE.cream, 48);
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
  kinds.push({ k: flashes, shown: new Uint8Array(8), life: () => fb().flashTime, step() {}, draw(i) {
    const f = 1 - flashes.pool.ages[i] / fb().flashTime;
    dummy.position.set(flashes.pos[i * 3], flashes.pos[i * 3 + 1], flashes.pos[i * 3 + 2]);
    dummy.scale.setScalar(fb().flashSize * (0.5 + 0.5 * Math.max(0, f)));
    dummy.rotation.set(flashes.aux[i * 4], flashes.aux[i * 4 + 1], flashes.aux[i * 4 + 2]);
    place(flashes, i);
  } });
  kinds.push({ k: tracers, shown: new Uint8Array(24), life: () => fb().tracerTime, step() {}, draw(i) {
    const f = Math.max(0, 1 - tracers.pool.ages[i] / fb().tracerTime);
    const w = fb().tracerWidth * f, len = tracers.aux[i * 4];
    dummy.position.set(tracers.pos[i * 3], tracers.pos[i * 3 + 1], tracers.pos[i * 3 + 2]);
    dummy.quaternion.setFromUnitVectors(UP, axis.set(tracers.vel[i * 3], tracers.vel[i * 3 + 1], tracers.vel[i * 3 + 2]));
    dummy.scale.set(w, w, len);
    place(tracers, i);
  } });

  return {
    flash(pos, dir) {
      const i = flashes.pool.spawn();
      put(flashes, i, pos[0] + dir[0] * 0.1, pos[1] + dir[1] * 0.1, pos[2] + dir[2] * 0.1);
      flashes.aux[i * 4] = rnd(3); flashes.aux[i * 4 + 1] = rnd(3); flashes.aux[i * 4 + 2] = rnd(3);
    },
    tracer(from, to) {
      const dx = to[0] - from[0], dy = to[1] - from[1], dz = to[2] - from[2];
      const len = Math.hypot(dx, dy, dz);
      if (!(len > 1e-6)) return;
      const i = tracers.pool.spawn();
      put(tracers, i, from[0] + dx / 2, from[1] + dy / 2, from[2] + dz / 2);
      vel(tracers, i, dx / len, dy / len, dz / len);
      tracers.aux[i * 4] = len;
    },
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

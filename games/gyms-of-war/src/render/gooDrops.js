// The blob aliens' goo drops: a few small drops float round each alien's head and now and then one drips off, falls, shrinks and
// grows back. Every alien's drops are instances of one pooled InstancedMesh in the toon material (the toon instancing path), so all of
// them together are one draw call. No three.js scene logic here beyond the mesh; the views say where each alien is (set) and play.js
// advances the clock (update). Nothing allocates per frame.
import * as THREE from 'three';
import { TUNING } from '../tuning.js';
import { PALETTE } from './palette.js';
import { createToonMaterial } from './toon.js';

export const MAX_DROPS = 4;                              // per alien (TUNING.goo.count is at most this)
const HEIGHTS = [0, 0.28, -0.32, 0.5];                   // m, each drop's height about the orbit centre
const RADII = [1, 0.8, 1.12, 0.92];                      // each drop's orbit radius as a fraction of goo.orbitRadius
const SPEEDS = [1, -0.8, 1.3, -1.1];                     // each drop's orbit speed as a fraction of goo.orbitSpeed (negative goes the other way)
const smooth = (a, b, x) => { const t = Math.min(Math.max((x - a) / (b - a), 0), 1); return t * t * (3 - 2 * t); };

// A teardrop of unit height: round at the bottom, drawn to a point at the top.
export function teardropGeometry() {
  const g = new THREE.SphereGeometry(0.5, 8, 6);
  g.deleteAttribute('uv');
  const pos = g.getAttribute('position');
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y > 0) {
      const k = y / 0.5;
      pos.setY(i, y * (1 + 0.9 * k));
      pos.setX(i, pos.getX(i) * (1 - 0.65 * k * k));
      pos.setZ(i, pos.getZ(i) * (1 - 0.65 * k * k));
    }
  }
  g.computeVertexNormals();
  return g;
}

export function createGooDrops(scene, slots = 10, tuning = () => TUNING.goo) {
  const total = slots * MAX_DROPS;
  const mesh = new THREE.InstancedMesh(teardropGeometry(), createToonMaterial({ color: PALETTE.gel, rim: 0.5, rimColor: '#f4ffb0', shadowMix: 0.4 }), total);
  mesh.name = 'gooDrops';
  mesh.frustumCulled = false;
  const dummy = new THREE.Object3D();
  const anchor = new Float32Array(slots * 5);            // x, y, z, scale, on
  let t = 0;

  function hideAll() {
    dummy.position.set(0, -1000, 0); dummy.scale.setScalar(0); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
    for (let i = 0; i < total; i++) mesh.setMatrixAt(i, dummy.matrix);
    mesh.instanceMatrix.needsUpdate = true;
  }
  hideAll();
  scene.add(mesh);

  return {
    mesh,
    // Alien `slot` is at (x, y, z) (its feet) and `scale` times a Rep's size; on false hides its drops.
    set(slot, x, y, z, scale, on) {
      if (slot < 0 || slot >= slots) return;
      const a = slot * 5;
      anchor[a] = x; anchor[a + 1] = y; anchor[a + 2] = z; anchor[a + 3] = scale; anchor[a + 4] = on ? 1 : 0;
    },
    hide(slot) { if (slot >= 0 && slot < slots) anchor[slot * 5 + 4] = 0; },
    clear() { anchor.fill(0); hideAll(); },
    update(dt) {
      if (dt > 0) t += dt;
      const G = tuning(), count = Math.min(Math.max(Math.round(G.count), 0), MAX_DROPS);
      for (let s = 0; s < slots; s++) {
        const a = s * 5, on = anchor[a + 4] === 1;
        for (let j = 0; j < MAX_DROPS; j++) {
          const i = s * MAX_DROPS + j;
          if (!on || j >= count) {
            dummy.position.set(0, -1000, 0); dummy.scale.setScalar(0); dummy.rotation.set(0, 0, 0); dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix);
            continue;
          }
          const sc = anchor[a + 3];
          const ang = t * G.orbitSpeed * SPEEDS[j] + (j / count + s * 0.37) * Math.PI * 2;
          const p = (t / Math.max(G.dripEvery, 0.1) + j * 0.37 + s * 0.13) % 1;       // 0 to 1 through this drop's cycle
          const drip = smooth(0.72, 1, p), grow = smooth(0, 0.12, p);
          const r = G.orbitRadius * RADII[j] * sc;
          dummy.position.set(
            anchor[a] + Math.cos(ang) * r,
            anchor[a + 1] + (G.height + HEIGHTS[j] + 0.04 * Math.sin(t * 2.3 + j * 1.7)) * sc - G.dripFall * drip * drip,
            anchor[a + 2] + Math.sin(ang) * r,
          );
          dummy.rotation.set(0, 0, 0);
          dummy.scale.setScalar(Math.max(G.size * (0.75 + 0.25 * (j % 2)) * grow * (1 - 0.85 * drip), 1e-4));
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        }
      }
      mesh.instanceMatrix.needsUpdate = true;
    },
  };
}

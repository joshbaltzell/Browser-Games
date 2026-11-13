// The blob aliens' goo drops: a few small drops sit on each alien's skin (the head, the shirt and the arms; the rig's skin samples, see
// rig.js SKIN_COUNT). A drop grows on one sample, slides a little down the skin, then drips off: it falls and shrinks, and it grows back on
// a different sample. Every alien's drops are instances of one pooled InstancedMesh in the toon material (the toon instancing path), so all
// of them together are one draw call. The views say where each alien's skin is (set, once it has posed); play.js advances the clock
// (update). Nothing allocates per frame.
import * as THREE from 'three';
import { TUNING } from '../tuning.js';
import { PALETTE } from './palette.js';
import { createToonMaterial } from './toon.js';

export const MAX_DROPS = 4;                              // per alien (TUNING.goo.count is at most this)
const SINK = 0.45;                                       // a drop's centre sits this many of its radii off the skin, so it bulges out of it
const smooth = (a, b, x) => { const t = Math.min(Math.max((x - a) / (b - a), 0), 1); return t * t * (3 - 2 * t); };
const v = new THREE.Vector3();

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

// Which skin sample (0 to n - 1) drop j of alien s grows on in its k-th cycle: a hash, so each cycle picks a new place.
function sampleOf(k, j, s, n) {
  let h = Math.imul(k + 1, 73856093) ^ Math.imul(j + 1, 19349663) ^ Math.imul(s + 1, 83492791);
  h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15;
  return (h >>> 0) % n;
}

export function createGooDrops(scene, slots = 10, tuning = () => TUNING.goo) {
  const total = slots * MAX_DROPS;
  const mesh = new THREE.InstancedMesh(teardropGeometry(), createToonMaterial({ color: PALETTE.gel, rim: 0.5, rimColor: '#f4ffb0', shadowMix: 0.4 }), total);
  mesh.name = 'gooDrops';
  mesh.frustumCulled = false;
  const dummy = new THREE.Object3D();
  const live = new Uint8Array(slots), count = new Int32Array(slots), sc = new Float32Array(slots).fill(1);
  const pos = [], nrm = [];                              // per slot: the skin samples in world space (copied by set)
  for (let s = 0; s < slots; s++) { pos.push(new Float32Array(0)); nrm.push(new Float32Array(0)); }
  let t = 0;

  function hideInstance(i) {
    dummy.position.set(0, -1000, 0); dummy.scale.setScalar(0); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  function hideAll() {
    for (let i = 0; i < total; i++) hideInstance(i);
    mesh.instanceMatrix.needsUpdate = true;
  }
  hideAll();
  scene.add(mesh);

  return {
    mesh,
    // Alien `slot` drips from `skin` ({ n, pos, nrm }: samples in the rig's root space, with outward normals) placed by `matrix` (the rig
    // root's world matrix). `scale` is the alien's size against a Rep; on false hides its drops.
    set(slot, skin, matrix, scale = 1, on = true) {
      if (slot < 0 || slot >= slots) return;
      const n = on && skin ? skin.n : 0;
      live[slot] = n > 0 ? 1 : 0; count[slot] = n; sc[slot] = scale;
      if (!n) return;
      if (pos[slot].length < n * 3) { pos[slot] = new Float32Array(n * 3); nrm[slot] = new Float32Array(n * 3); }
      const P = pos[slot], N = nrm[slot];
      for (let i = 0; i < n; i++) {
        v.fromArray(skin.pos, i * 3).applyMatrix4(matrix);
        P[i * 3] = v.x; P[i * 3 + 1] = v.y; P[i * 3 + 2] = v.z;
        v.fromArray(skin.nrm, i * 3).transformDirection(matrix);
        N[i * 3] = v.x; N[i * 3 + 1] = v.y; N[i * 3 + 2] = v.z;
      }
    },
    hide(slot) { if (slot >= 0 && slot < slots) live[slot] = 0; },
    clear() { live.fill(0); hideAll(); },
    update(dt) {
      if (dt > 0) t += dt;
      const G = tuning(), drops = Math.min(Math.max(Math.round(G.count), 0), MAX_DROPS), every = Math.max(G.dripEvery, 0.1);
      for (let s = 0; s < slots; s++) {
        for (let j = 0; j < MAX_DROPS; j++) {
          const i = s * MAX_DROPS + j;
          if (!live[s] || j >= drops) { hideInstance(i); continue; }
          const x = t / every + j * 0.37 + s * 0.13, k = Math.floor(x), p = x - k;      // p: 0 to 1 through this drop's cycle
          const q = sampleOf(k, j, s, count[s]) * 3, P = pos[s], N = nrm[s];
          const size = G.size * sc[s] * (0.75 + 0.25 * (j % 2));
          const drip = smooth(0.72, 1, p), grow = smooth(0, 0.12, p), slide = G.slide * smooth(0.12, 0.72, p);
          const off = size * SINK;
          dummy.position.set(
            P[q] + N[q] * off,
            P[q + 1] + N[q + 1] * off - (slide + G.dripFall * drip * drip) * sc[s],
            P[q + 2] + N[q + 2] * off,
          );
          dummy.rotation.set(0, 0, 0);
          dummy.scale.setScalar(Math.max(size * grow * (1 - 0.85 * drip), 1e-4));
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        }
      }
      mesh.instanceMatrix.needsUpdate = true;
    },
  };
}

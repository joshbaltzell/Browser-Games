import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from '../tuning.js';
import { PALETTE } from './palette.js';
import { createToonMaterial } from './toon.js';
import { makeSign } from '../world/kit.js';

// The Spawn Saunas on screen: a slatted cream-wood disc, a state ring (gel green and pulsing while open, ink when closed, lilac
// while dormant or spent), steam while open, and a "SPAWN SAUNA" sign on the wall behind. director/pads.js is the truth.

// What a state looks like: the ring colour, whether it pulses and whether steam rises. Anything unknown reads as dormant.
export function padLook(state) {
  if (state === 'open') return { ring: PALETTE.gel, pulse: true, steam: true };
  if (state === 'closed') return { ring: PALETTE.ink, pulse: false, steam: false };
  return { ring: PALETTE.lilac, pulse: false, steam: false };
}

const WOOD = '#e6c28c', SLAT = '#b98a50';
const STEAM_EVERY = 0.3;

function discGeometry(R) {
  const paint = (g, color) => {
    g.deleteAttribute('uv');
    const c = new THREE.Color(color), n = g.getAttribute('position').count, col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return g;
  };
  const parts = [paint(new THREE.CylinderGeometry(R, R, 0.08, 32).translate(0, 0.04, 0).toNonIndexed(), WOOD)];
  // Slat gaps: thin darker strips across the top, clipped to the circle.
  for (let i = -3; i <= 3; i++) {
    const z = i * (R / 3.6), chord = 2 * Math.sqrt(Math.max(R * R - z * z, 0.01)) - 0.04;
    parts.push(paint(new THREE.BoxGeometry(chord, 0.006, 0.035).translate(0, 0.081, z).toNonIndexed(), SLAT));
  }
  return mergeGeometries(parts, false);
}

// pads: the fight's pad list ({ id, pos, state }). effects (optional) supplies the steam puffs.
export function createPadView(scene, pads, effects = null) {
  const items = pads.map(p => {
    const R = TUNING.pad.radius;
    const group = new THREE.Group();
    group.name = `sauna-${p.id}`;
    group.position.set(p.pos[0], p.pos[1], p.pos[2]);
    group.add(new THREE.Mesh(discGeometry(R), createToonMaterial({ vertexColors: true, rim: 0.1 })));
    const ringMat = new THREE.MeshBasicMaterial({ color: PALETTE.lilac, side: THREE.DoubleSide, toneMapped: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(R * 0.9, R * 1.06, 40).rotateX(-Math.PI / 2), ringMat);
    ring.position.y = 0.09;
    group.add(ring);
    scene.add(group);
    const sign = makeSign({ text: 'SPAWN SAUNA', w: 2.4, h: 0.7, bg: PALETTE.glorpPurple, seed: 9 });
    sign.position.set(p.pos[0], 3.05, p.pos[2] + 1.3);   // on the wall behind the sauna, above the other signs
    sign.rotation.y = Math.PI;
    scene.add(sign);
    return { pad: p, group, ring, ringMat, sign, color: '', steamT: 0 };
  });
  let clock = 0;
  return {
    items,
    update(dt) {
      clock += dt > 0 ? dt : 0;
      for (const it of items) {
        const look = padLook(it.pad.state);
        if (look.ring !== it.color) { it.color = look.ring; it.ringMat.color.set(look.ring); }
        it.ring.scale.setScalar(look.pulse ? 1 + 0.07 * Math.sin(clock * 6) : 1);
        if (look.steam && effects && dt > 0) {
          it.steamT += dt;
          if (it.steamT >= STEAM_EVERY) {
            it.steamT = 0;
            const a = Math.random() * Math.PI * 2, r = Math.random() * TUNING.pad.radius * 0.8;
            effects.steam([it.pad.pos[0] + Math.cos(a) * r, 0.1, it.pad.pos[2] + Math.sin(a) * r]);
          }
        } else if (!look.steam) it.steamT = 0;
      }
    },
    reset() { for (const it of items) { it.steamT = 0; it.color = ''; } },
  };
}

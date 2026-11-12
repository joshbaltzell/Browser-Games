import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from '../tuning.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline, computeOutlineNormals } from '../render/outline.js';

// The player's gun on screen. Local space: the grip is at the origin and the barrel points along +z.
// place() puts it at a hand and points it, shot() starts the recoil squash and kick, update() advances them.

// Boxes as [w, h, d, x, y, z], merged into one geometry.
function boxes(list) {
  return mergeGeometries(list.map(([w, h, d, x, y, z]) => new THREE.BoxGeometry(w, h, d).translate(x, y, z)), false);
}
function part(group, geometry, color) {
  const mesh = new THREE.Mesh(computeOutlineNormals(geometry), createToonMaterial({ color }));
  addOutline(mesh);
  group.add(mesh);
  return mesh;
}

// The Regret: a chunky orange rifle, about 0.7 m. The disc under the barrel stands in for milestone 5's cutter.
function buildRifle() {
  const g = new THREE.Group();
  g.name = 'rifle';
  part(g, boxes([[0.06, 0.1, 0.15, 0, 0.04, -0.175], [0.09, 0.12, 0.4, 0, 0.05, 0.1], [0.05, 0.05, 0.15, 0, 0.06, 0.375]]), PALETTE.playerOrange);
  part(g, boxes([[0.05, 0.12, 0.06, 0, -0.07, 0.0]]), PALETTE.ink);
  part(g, new THREE.CylinderGeometry(0.055, 0.055, 0.03, 12).translate(0, -0.035, 0.28), PALETTE.cream);
  return g;
}
function buildPistol() {
  const g = new THREE.Group();
  g.name = 'pistol';
  part(g, boxes([[0.045, 0.06, 0.25, 0, 0.04, 0.075]]), PALETTE.playerOrange);
  part(g, boxes([[0.04, 0.1, 0.05, 0, -0.04, 0.0]]), PALETTE.ink);
  return g;
}
const TIPS = { regret: [0, 0.06, 0.45], pistol: [0, 0.04, 0.2] };

const FROM = new THREE.Vector3(0, 0, 1);
const _d = new THREE.Vector3();
const _p = new THREE.Vector3();

export function createGunView() {
  const group = new THREE.Group();
  group.name = 'gun';
  const models = { regret: buildRifle(), pistol: buildPistol() };
  group.add(models.regret, models.pistol);
  let weapon = 'regret';
  models.pistol.visible = false;
  const base = new THREE.Vector3(), dir = new THREE.Vector3(0, 0, 1);
  let s = Infinity; // seconds since the last shot

  function setWeapon(id) {
    if (!models[id] || id === weapon) return;
    weapon = id;
    for (const k of Object.keys(models)) models[k].visible = k === id;
  }

  // handPos and dir are in the gun group's parent space; dir is a unit vector.
  function place(handPos, d) {
    base.set(handPos[0], handPos[1], handPos[2]);
    dir.set(d[0], d[1], d[2]);
    if (dir.lengthSq() < 1e-12) dir.set(0, 0, 1); else dir.normalize();
    group.quaternion.setFromUnitVectors(FROM, dir);
    apply();
  }

  function apply() {
    const fb = TUNING.feedback, T = Math.max(fb.gunSquashTime, 1e-6);
    const e = s >= 0 && s < T ? Math.sin(Math.PI * s / T) : 0;
    const k = fb.gunSquash * e;
    group.scale.set(1 + k / 2, 1 + k / 2, 1 - k);
    group.position.copy(base).addScaledVector(dir, -fb.gunKick * e);
  }

  return {
    group, setWeapon,
    place,
    shot() { s = 0; apply(); },
    update(dt) { s += dt > 0 ? dt : 0; apply(); },
    // The barrel end in the parent's space, written into out.
    tip(out = [0, 0, 0]) {
      const t = TIPS[weapon];
      group.updateMatrix();
      _p.set(t[0], t[1], t[2]).applyMatrix4(group.matrix);
      out[0] = _p.x; out[1] = _p.y; out[2] = _p.z;
      return out;
    },
  };
}

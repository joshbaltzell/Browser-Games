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

// Cheat Day: the pizza-cutter disc under the barrel, 0.09 m in radius: an orange rim, a cream face and six ink teeth so the spin reads.
export const DISC_RADIUS = 0.09;
function buildDisc() {
  const g = new THREE.Group();
  g.name = 'disc';
  g.position.set(0, -0.05, 0.22);
  part(g, new THREE.CylinderGeometry(DISC_RADIUS, DISC_RADIUS, 0.022, 20), PALETTE.playerOrange);
  part(g, new THREE.CylinderGeometry(DISC_RADIUS - 0.018, DISC_RADIUS - 0.018, 0.034, 20), PALETTE.cream);
  const teeth = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    teeth.push(new THREE.BoxGeometry(0.02, 0.026, 0.05).rotateY(a).translate(Math.sin(a) * (DISC_RADIUS - 0.03), 0, Math.cos(a) * (DISC_RADIUS - 0.03)));
  }
  part(g, mergeGeometries(teeth, false), PALETTE.ink);
  // The blur ring: a pale translucent disc a little wider than the blade, shown (and faded in) while the cutter spins up, so the spin reads as a blur.
  const blur = new THREE.Mesh(new THREE.CylinderGeometry(DISC_RADIUS * 1.12, DISC_RADIUS * 1.12, 0.012, 28),
    new THREE.MeshBasicMaterial({ color: PALETTE.cream, transparent: true, opacity: 0, depthWrite: false }));
  blur.name = 'discBlur';
  blur.visible = false;
  g.add(blur);
  return g;
}

// The Regret: a chunky orange rifle, about 0.7 m, with the Cheat Day disc under the barrel.
function buildRifle() {
  const g = new THREE.Group();
  g.name = 'rifle';
  part(g, boxes([[0.06, 0.1, 0.15, 0, 0.04, -0.175], [0.09, 0.12, 0.4, 0, 0.05, 0.1], [0.05, 0.05, 0.15, 0, 0.06, 0.375]]), PALETTE.playerOrange);
  part(g, boxes([[0.05, 0.12, 0.06, 0, -0.07, 0.0]]), PALETTE.ink);
  g.add(buildDisc());
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
  const disc = models.regret.getObjectByName('disc');
  const blur = disc.getObjectByName('discBlur');
  let s = Infinity; // seconds since the last shot
  let revK = 0;     // 0 to 1, how far the cutter has spun up (the disc grows and the blur ring fades in)

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
    // spin: the disc's turn rate in rad/s (0 when the cutter is off).
    update(dt, spin = 0) {
      s += dt > 0 ? dt : 0;
      if (dt > 0 && spin) disc.rotation.y += spin * dt;
      // The disc swells to feedback.discScale times its size while it spins; the blur ring fades in with it.
      if (dt > 0) revK += ((spin ? 1 : 0) - revK) * (1 - Math.exp(-dt / 0.06));
      const fb = TUNING.feedback;
      disc.scale.setScalar(1 + (Math.max(fb.discScale, 1) - 1) * revK);
      blur.visible = revK > 0.05 && fb.discBlur > 0;
      blur.material.opacity = fb.discBlur * revK;
      apply();
    },
    disc,
    // The cutter's leading edge in the parent's space (where sparks fly), written into out.
    blade(out = [0, 0, 0]) {
      group.updateMatrix();
      _p.set(disc.position.x, disc.position.y, disc.position.z + DISC_RADIUS * disc.scale.x).applyMatrix4(group.matrix);
      out[0] = _p.x; out[1] = _p.y; out[2] = _p.z;
      return out;
    },
    revK: () => revK,
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

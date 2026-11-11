import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';
import {
  makeFloor, makeWall, makeWindow, makeShopFront, makeKiosk, makeBench, makePlanter,
} from './kit.js';

const SIZE = 8;
const HALF = SIZE / 2;
const WALL_T = 0.2;

// One merged mesh of soft purple discs: two stacked ellipses per prop, so the
// middle is darker. No shadow maps in this milestone.
function blobShadows(list) {
  const geos = [];
  for (const s of list) {
    for (const k of [1, 0.62]) {
      const g = new THREE.CircleGeometry(1, 28);
      g.rotateX(-Math.PI / 2);
      g.deleteAttribute('uv');
      g.scale(s.rx * k, 1, s.rz * k);
      g.rotateY(s.rot || 0);
      g.translate(s.x, 0.012, s.z);
      geos.push(g);
    }
  }
  const mesh = new THREE.Mesh(
    mergeGeometries(geos, false),
    new THREE.MeshBasicMaterial({
      color: PALETTE.shadowTint, transparent: true, opacity: 0.3, depthWrite: false, toneMapped: false,
    }),
  );
  mesh.name = 'blobShadows';
  return mesh;
}

// An 8 x 8 m corner of the mall, spawn point at the middle of the floor.
export function buildLookCorner() {
  const group = new THREE.Group();
  group.add(makeFloor({ w: SIZE, d: SIZE }));

  // Back wall (shop front) along z = -4; its front face is at z = -4.
  const back = makeWall({ w: SIZE + WALL_T * 2, h: 4 });
  back.position.set(0, 0, -HALF - WALL_T / 2);
  group.add(back);
  const shopX = 1.3;
  const shop = makeShopFront({ w: 5, h: 3.4, name: 'PRETZEL SINGULARITY', signColor: PALETTE.hotPink });
  shop.position.set(shopX, 0, -HALF + 0.25);
  group.add(shop);

  // Side wall along x = -4, turned to face +x. Its local x runs toward -z.
  const opening = { x: 0.8, y: 1.1, w: 3, h: 2 };
  const side = makeWall({ w: SIZE, h: 4, color: '#f1e6ff', opening });
  side.position.set(-HALF - WALL_T / 2, 0, 0);
  side.rotation.y = Math.PI / 2;
  const win = makeWindow({ w: opening.w, h: opening.h });
  win.position.set(opening.x, opening.y, 0);
  side.add(win);
  group.add(side);

  // Props frame the spawn at the origin without covering it.
  const kiosk = makeKiosk({ seed: 7 });
  kiosk.position.set(2.9, 0, 0.3);
  kiosk.rotation.y = 0.35;
  const bench = makeBench({ seed: 11 });
  bench.position.set(-3.45, 0, -0.8);
  bench.rotation.y = Math.PI / 2;
  const palmA = makePlanter({ seed: 21 });
  palmA.position.set(-3.2, 0, -3.2);
  const palmB = makePlanter({ seed: 33 });
  palmB.position.set(-3.3, 0, 2.7);
  palmB.rotation.y = 1.3;
  group.add(kiosk, bench, palmA, palmB);

  group.add(blobShadows([
    { x: kiosk.position.x, z: kiosk.position.z, rx: 1.4, rz: 0.85, rot: 0.35 },
    { x: bench.position.x + 0.05, z: bench.position.z, rx: 0.4, rz: 1.1 },
    { x: palmA.position.x, z: palmA.position.z, rx: 0.8, rz: 0.8 },
    { x: palmB.position.x, z: palmB.position.z, rx: 0.8, rz: 0.8 },
    { x: shopX, z: -HALF + 0.9, rx: 2.6, rz: 0.75 },
  ]));

  return { group, spawn: [0, 0, 0], update() {} };
}

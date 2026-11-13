import * as THREE from 'three';
import { PALETTE } from '../render/palette.js';
import {
  makeFloor, makeWall, makeWindow, makeShopFront, makeKiosk, makeBench, makePlanter, makeBlobShadow,
} from './kit.js';

const SIZE = 8;
const HALF = SIZE / 2;
const WALL_T = 0.2;

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
  const opening = { x: -0.9, y: 1.7, w: 3, h: 2 };
  const side = makeWall({ w: SIZE, h: 4, color: '#f1e6ff', opening });
  side.position.set(-HALF - WALL_T / 2, 0, 0);
  side.rotation.y = Math.PI / 2;
  const win = makeWindow({ w: opening.w, h: opening.h });
  win.position.set(opening.x, opening.y, 0);
  side.add(win);
  group.add(side);

  // Props frame the spawn at the origin without covering it.
  const kiosk = makeKiosk({ seed: 7 });
  kiosk.position.set(2.4, 0, 0.5);
  kiosk.rotation.y = 0.35;
  const bench = makeBench({ seed: 11 });
  bench.position.set(-3.45, 0, 0.9);
  bench.rotation.y = Math.PI / 2;
  const palmA = makePlanter({ seed: 21 });
  palmA.position.set(-2.95, 0, -2.9);
  group.add(kiosk, bench, palmA);

  // Soft blob shadows (no shadow maps in this milestone), one under each prop.
  const shadow = (x, z, rx, rz, rot = 0) => {
    const m = makeBlobShadow({ rx, rz, opacity: 0.7 });
    m.position.x = x;
    m.position.z = z;
    m.rotation.y = rot;
    group.add(m);
  };
  shadow(kiosk.position.x, kiosk.position.z, 1.3, 0.95, kiosk.rotation.y);
  shadow(bench.position.x + 0.2, bench.position.z, 0.6, 1.2);
  shadow(palmA.position.x, palmA.position.z, 0.95, 0.95);
  shadow(shopX, -HALF + 0.9, 2.7, 0.8);

  return { group, spawn: [0, 0, 0], update() {} };
}

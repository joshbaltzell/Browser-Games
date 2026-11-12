import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from '../tuning.js';
import { PALETTE } from './palette.js';
import { createToonMaterial } from './toon.js';

// Kettlebells on screen: the ones in flight (one instanced mesh), the arc while G is held (one dashed line of 64 points) and the
// ring where the throw lands (it is the kill radius). The sim is the truth (combat/grenades.js); this only draws it.
// Nothing here imports play.js. kettlebellGeometry() is shared with the player's hand.

const MAX_BALLS = 8;
const ARC_POINTS = 64;
const NOMINAL_R = 0.12;      // the drawn radius before the ballRadius scale

// An ink sphere with an orange handle and a cream label, vertex coloured. Built at NOMINAL_R, scaled by ballRadius / NOMINAL_R at use.
export function kettlebellGeometry() {
  const paint = (g, color) => {
    g.deleteAttribute('uv');
    const c = new THREE.Color(color), n = g.getAttribute('position').count, col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return g;
  };
  const body = paint(new THREE.SphereGeometry(NOMINAL_R, 14, 10).toNonIndexed(), PALETTE.ink);
  const handle = [
    new THREE.BoxGeometry(0.03, 0.1, 0.03).translate(-0.055, NOMINAL_R + 0.04, 0),
    new THREE.BoxGeometry(0.03, 0.1, 0.03).translate(0.055, NOMINAL_R + 0.04, 0),
    new THREE.BoxGeometry(0.14, 0.03, 0.03).translate(0, NOMINAL_R + 0.1, 0),
  ].map(g => paint(g.toNonIndexed(), PALETTE.playerOrange));
  const label = paint(new THREE.BoxGeometry(0.07, 0.07, 0.012).translate(0, 0, NOMINAL_R - 0.002).toNonIndexed(), PALETTE.cream);
  return mergeGeometries([body, ...handle, label], false);
}

export function createGrenadeView(scene) {
  const mesh = new THREE.InstancedMesh(kettlebellGeometry(), createToonMaterial({ vertexColors: true, rim: 0.15 }), MAX_BALLS);
  mesh.name = 'kettlebells';
  mesh.frustumCulled = false;
  mesh.count = 0;
  scene.add(mesh);
  const dummy = new THREE.Object3D();
  let clock = 0;

  const positions = new Float32Array(ARC_POINTS * 3);
  const arcGeo = new THREE.BufferGeometry();
  arcGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  arcGeo.setDrawRange(0, 0);
  const arcMat = new THREE.LineDashedMaterial({ color: PALETTE.playerOrange, dashSize: TUNING.feedback.arcDot, gapSize: TUNING.feedback.arcDot });
  const line = new THREE.Line(arcGeo, arcMat);
  line.name = 'kettlebellArc';
  line.frustumCulled = false;
  line.visible = false;
  scene.add(line);
  // A dot on every sample of the path, a few pixels wide whatever the distance: the 1 px dashed line alone is lost against the room.
  const dots = new THREE.Points(arcGeo, new THREE.PointsMaterial({ color: PALETTE.playerOrange, size: 5, sizeAttenuation: false, toneMapped: false }));
  dots.name = 'kettlebellArcDots';
  dots.frustumCulled = false;
  dots.visible = false;
  scene.add(dots);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.88, 1, 40).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: PALETTE.playerOrange, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
  );
  ring.name = 'kettlebellRing';
  ring.visible = false;
  scene.add(ring);

  return {
    mesh, line, ring, dots,
    // balls: fight.grenades.live ({ pos, prevPos, fuse, resting }); alpha interpolates between fixed steps.
    update(balls, alpha, dt = 0) {
      clock += dt > 0 ? dt : 0;
      const n = Math.min(balls.length, MAX_BALLS), s = TUNING.grenade.ballRadius / NOMINAL_R;
      mesh.count = n;
      for (let i = 0; i < n; i++) {
        const b = balls[i];
        const x = b.prevPos[0] + (b.pos[0] - b.prevPos[0]) * alpha, y = b.prevPos[1] + (b.pos[1] - b.prevPos[1]) * alpha, z = b.prevPos[2] + (b.pos[2] - b.prevPos[2]) * alpha;
        // y is the ball's centre: the sphere sits on the floor at y = radius. A ball about to blow swells and throbs.
        const warn = b.fuse < TUNING.associate.diveWarn ? 1 + 0.18 * (0.5 + 0.5 * Math.sin(clock * 40)) : 1;
        dummy.position.set(x, y, z);
        dummy.rotation.set(z * 2.5, 0, -x * 2.5);
        dummy.scale.setScalar(s * warn);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    },
    // points: the 64-point scratch predictArc filled; count of them in use; land: [x, y, z] or null; show: false hides both.
    arc(points, count, land, show) {
      if (!show || !(count > 1)) { line.visible = false; dots.visible = false; ring.visible = false; return; }
      const n = Math.min(count, ARC_POINTS);
      for (let i = 0; i < n; i++) { positions[i * 3] = points[i][0]; positions[i * 3 + 1] = points[i][1]; positions[i * 3 + 2] = points[i][2]; }
      arcGeo.attributes.position.needsUpdate = true;
      arcGeo.setDrawRange(0, n);
      arcMat.dashSize = arcMat.gapSize = Math.max(TUNING.feedback.arcDot, 1e-3);
      line.computeLineDistances();
      line.visible = true; dots.visible = true;
      if (land) { ring.position.set(land[0], land[1] + 0.03, land[2]); ring.scale.setScalar(TUNING.grenade.killRadius); ring.visible = true; } else ring.visible = false;
    },
    reset() { mesh.count = 0; mesh.instanceMatrix.needsUpdate = true; line.visible = false; dots.visible = false; ring.visible = false; },
  };
}

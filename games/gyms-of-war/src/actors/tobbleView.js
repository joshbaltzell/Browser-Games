import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { TUNING } from '../tuning.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline, computeOutlineNormals } from '../render/outline.js';
import { TOBBLE } from './tobble.js';
import { buildRig } from './rig.js';
import { createAnimator } from './animator.js';
import { RUN_SPEED } from './poses.js';

// Tobble on screen. The brain (tobbleBrain.js) is the truth; this picks a clip, a facing and a draw-back from his state and
// draws him, interpolated between fixed steps. He is the Associate's rig in mint colours at tobble.scale, plus a third eye, a huge
// backpack with a rolled mat, a small mint pistol and (only while he is down) a mint "+". It never imports play.js.

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const clamp01 = (v) => clamp(v, 0, 1);
const wrapAngle = (a) => a - 2 * Math.PI * Math.round(a / (2 * Math.PI));
const STEP = 1 / 60;
const kindOf = (t) => (t.point && t.point.kind === 'tall' ? 'tall' : 'low');

// Which clip Tobble plays. speed is how fast he is moving (m/s); below 0.3 he stands.
export function pickTobbleClip(t, speed = t.speed || 0) {
  const moving = speed > 0.3;
  switch (t.state) {
    case 'cover': return kindOf(t) === 'tall' ? 'coverTall' : 'coverLow';
    case 'shoot': return kindOf(t) === 'tall' ? 'aim' : 'coverPop';
    case 'revive': return t.kneeling ? 'revive' : moving ? 'run' : 'idle';
    case 'downed': return 'crawl';
    default: return moving ? 'run' : 'idle';   // idle, follow, sidestep
  }
}

// How far (0 to 1) he is drawn back from a low wall: 1 tucked behind it, falling as he pops up. 0 anywhere else.
export function tobbleDrawBack(t) {
  if (t.downed || !t.point || t.point.kind !== 'low' || (t.state !== 'cover' && t.state !== 'shoot')) return 0;
  return clamp01(1 - t.pop);
}

// The mint "+" over a downed Tobble: pixels built in code (no canvas), an ink outline round a mint cross.
function plusTexture() {
  const N = 64, data = new Uint8Array(N * N * 4);
  const mint = new THREE.Color(PALETTE.tobbleMint), ink = new THREE.Color(PALETTE.ink);
  const arm = (x, y, w) => (Math.abs(x - N / 2 + 0.5) < w && Math.abs(y - N / 2 + 0.5) < N * 0.4) || (Math.abs(y - N / 2 + 0.5) < w && Math.abs(x - N / 2 + 0.5) < N * 0.4);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const i = (y * N + x) * 4, inner = arm(x, y, 8), outer = arm(x, y, 13);
    const c = inner ? mint : ink;
    data[i] = Math.round(c.r * 255); data[i + 1] = Math.round(c.g * 255); data[i + 2] = Math.round(c.b * 255); data[i + 3] = outer ? 255 : 0;
  }
  const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

function part(geometry, color) {
  const mesh = new THREE.Mesh(computeOutlineNormals(geometry), createToonMaterial({ color }));
  addOutline(mesh);
  return mesh;
}

// The mint pistol: grip at the origin, barrel along +z.
const PISTOL_TIP = [0, 0.04, 0.2];
function buildPistol() {
  const g = new THREE.Group();
  g.name = 'tobblePistol';
  const boxes = [[0.045, 0.06, 0.25, 0, 0.04, 0.075], [0.04, 0.1, 0.05, 0, -0.04, 0.0]];
  g.add(part(mergeGeometries(boxes.map(([w, h, d, x, y, z]) => new THREE.BoxGeometry(w, h, d).translate(x, y, z)), false), PALETTE.tobbleMint));
  return g;
}

const FROM = new THREE.Vector3(0, 0, 1);
const _v = new THREE.Vector3(), _d = new THREE.Vector3();
const GUN_DOWN = 0.6;

export function createTobbleView(t) {
  const rig = buildRig(TOBBLE);
  const anim = createAnimator(rig);
  const group = new THREE.Group();
  group.name = 'tobble';
  group.add(rig.root);       // the shadow is in rig.root, so it scales with him
  const bodyNode = rig.root.getObjectByName('body');
  const handR = bodyNode.children[2];   // buildRig adds hips, then handL, handR
  const hips = rig.root.getObjectByName('hips'), head = rig.root.getObjectByName('head');

  // The third eye, above the pair and a little proud of the face.
  const eye = new THREE.Group();
  eye.name = 'thirdEye';
  const E = TOBBLE.thirdEye;
  const ball = new THREE.Mesh(new THREE.SphereGeometry(E.r, 12, 10), new THREE.MeshBasicMaterial({ color: PALETTE.eyeWhite }));
  const pupil = new THREE.Mesh(new THREE.SphereGeometry(E.r * 0.5, 10, 8), new THREE.MeshBasicMaterial({ color: PALETTE.ink }));
  pupil.position.z = E.r * 0.8;
  eye.add(ball, pupil);
  eye.position.set(0, TOBBLE.head.centerY + E.y, 0.27);
  head.add(eye);

  // The backpack: a rounded box with a rolled mat on top, on his back (it leans with the body).
  const B = TOBBLE.backpack;
  const pack = new THREE.Group();
  pack.name = 'backpack';
  pack.add(part(new RoundedBoxGeometry(B.w, B.h, B.d, 3, 0.06), TOBBLE.colors.backpack));
  const mat = part(new THREE.CylinderGeometry(0.085, 0.085, B.w * 0.95, 12).rotateZ(Math.PI / 2), TOBBLE.colors.mat);
  mat.position.y = B.h / 2 + 0.05;
  pack.add(mat);
  pack.position.set(0, 0.2, -0.32);
  hips.add(pack);

  const pistol = buildPistol();
  group.add(pistol);

  const plus = new THREE.Sprite(new THREE.SpriteMaterial({ map: plusTexture(), depthTest: false, depthWrite: false, toneMapped: false }));
  plus.name = 'tobblePlus';
  plus.renderOrder = 20;
  plus.visible = false;
  group.add(plus);

  let clip = '', drawW = 0, yaw = t.yaw, nx = 0, nz = 0, lastExpr = '', clock = 0;

  function reset() {
    clip = ''; drawW = 0; yaw = t.yaw; lastExpr = ''; clock = 0;
    group.position.set(t.start[0], t.start[1], t.start[2]); group.rotation.y = t.startYaw; plus.visible = false;
  }

  function update(alpha, dt) {
    const T = TUNING.tobble, ct = TUNING.cover, sc = T.scale;
    clock += dt > 0 ? dt : 0;
    group.scale.setScalar(sc);
    const p = t.pos, q = t.prevPos;
    const speed = Math.hypot(p[0] - q[0], p[2] - q[2]) / STEP;
    // The Associate's low-cover formula, scaled: tucked behind a low wall he is drawn back so his head and hands sit behind it.
    const target = tobbleDrawBack(t);
    drawW = ct.popTime > 0 ? Math.max(target, drawW + clamp(target - drawW, -dt / ct.popTime, dt / ct.popTime)) : target;
    if (target > 0 && t.point) { nx = t.point.normal[0]; nz = t.point.normal[1]; }
    const back = drawW * ct.lowDrawBack * sc;
    const lift = t.point && !t.downed ? T.popLift * clamp01(t.pop) : 0;   // popped, he stands on his toes
    group.position.set(q[0] + (p[0] - q[0]) * alpha + nx * back, q[1] + (p[1] - q[1]) * alpha + lift, q[2] + (p[2] - q[2]) * alpha + nz * back);
    const want = t.prevYaw + wrapAngle(t.yaw - t.prevYaw) * alpha;
    yaw += wrapAngle(want - yaw) * Math.min(1, dt * 25);
    group.rotation.y = yaw;

    const name = pickTobbleClip(t, speed);
    if (name !== clip) { anim.play(name, { fade: 0.1 }); clip = name; }
    let rate = 1;
    if (name === 'run') rate = clamp(speed / (RUN_SPEED * sc), 0.5, 3);
    else if (name === 'crawl') rate = speed > 1e-3 ? 1 : 0;
    anim.update(dt * rate, rate === 0 ? dt : undefined);
    rig.update(dt);
    const ex = t.downed ? 'scared' : t.state === 'shoot' ? 'angry' : 'smug';
    if (ex !== lastExpr) { rig.face.setExpression(ex); lastExpr = ex; }

    plus.visible = t.downed;
    if (t.downed) { plus.position.set(0, 0.95 / sc + 0.05 * Math.sin(clock * 4), 0); plus.scale.setScalar(0.5 / sc); }
    updatePistol();
  }

  // The pistol sits at the right hand, pointing at what he is shooting, else forward and down.
  function updatePistol() {
    pistol.visible = !t.downed && t.state !== 'revive';
    group.updateMatrixWorld(true);
    handR.getWorldPosition(_v);
    const wx = _v.x, wy = _v.y, wz = _v.z;
    group.worldToLocal(_v);
    pistol.position.copy(_v);
    if (t.state === 'shoot' && t.target && t.target.pos) {
      const cy = Math.cos(group.rotation.y), sy = Math.sin(group.rotation.y);
      const dx = t.target.pos[0] - wx, dz = t.target.pos[2] - wz;
      _d.set(dx * cy - dz * sy, t.target.pos[1] + 1.2 - wy, dx * sy + dz * cy);
    } else _d.set(0, -Math.sin(GUN_DOWN), Math.cos(GUN_DOWN));
    if (_d.lengthSq() < 1e-12) _d.set(0, 0, 1);
    _d.normalize();
    pistol.quaternion.setFromUnitVectors(FROM, _d);
  }

  reset();
  return {
    group, update, reset, rig, anim, pistol, plus, eye, pack,
    // The pistol's muzzle in world space, for the tracer and the flash.
    tip(out = [0, 0, 0]) {
      group.updateMatrixWorld(true);
      _v.set(PISTOL_TIP[0], PISTOL_TIP[1], PISTOL_TIP[2]).applyMatrix4(pistol.matrixWorld);
      out[0] = _v.x; out[1] = _v.y; out[2] = _v.z;
      return out;
    },
  };
}

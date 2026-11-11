import * as THREE from 'three';
import { TUNING } from '../tuning.js';
import { createLoop } from '../core/loop.js';
import { createInput } from '../core/input.js';
import { createRenderer } from '../render/renderer.js';
import { createSky } from '../render/sky.js';
import { setOutlinesVisible } from '../render/outline.js';
import { buildLookCorner } from '../world/lookCorner.js';
import { buildRig } from '../actors/rig.js';
import { createAnimator } from '../actors/animator.js';
import { ASSOCIATE } from '../actors/associate.js';
import { EXPRESSIONS } from '../actors/face.js';

// The milestone-0 look test: the corner, the sky and one Associate, with
// keys and a read-out panel so the look, the motion and the input can be
// judged by hand. Nothing here is game logic.

const ZOOM_MIN = 1.5;
const ZOOM_MAX = 8;
const PITCH_MIN = -0.2;
const PITCH_MAX = 1.3;
const FACING = 0.6;          // the Associate's yaw
const EXTRAS = 10;           // the performance test adds this many more
const EXTRAS_SPACING = 0.8;
const MAX_DT = 0.05;
const ANIM_KEYS = ['idle', 'run', 'aim', 'flinch', 'talk'];
const EXPRESSION_NAMES = Object.keys(EXPRESSIONS);

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Camera offset from the orbit target for a yaw (round the Y axis from +Z),
// pitch (up from the horizon) and distance.
export function orbitOffset(yaw, pitch, dist, out = [0, 0, 0]) {
  out[0] = Math.sin(yaw) * Math.cos(pitch) * dist;
  out[1] = Math.sin(pitch) * dist;
  out[2] = Math.cos(yaw) * Math.cos(pitch) * dist;
  return out;
}

// The in-game camera: over the character's right shoulder. The character faces
// +Z at yaw 0 and its right is -X. Returns the camera position and a point
// ten metres ahead, level with the camera, to look at.
export function gameCameraPose(root, yaw, cam = TUNING.camera) {
  const fx = Math.sin(yaw), fz = Math.cos(yaw);
  const rx = -Math.cos(yaw), rz = Math.sin(yaw);
  const pos = [root[0] + rx * cam.right - fx * cam.back, root[1] + cam.up, root[2] + rz * cam.right - fz * cam.back];
  const look = [pos[0] + fx * 10, pos[1], pos[2] + fz * 10];
  return { pos, look };
}

export function startLookTest({ canvas, gl }) {
  const gfx = createRenderer(canvas, gl);
  const renderer = gfx.renderer;
  const input = createInput(canvas);
  const readout = document.getElementById('cr-readout');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(TUNING.camera.fov, 1, 0.1, 100);

  const sky = createSky();
  scene.add(sky.mesh);
  // Turn the sky so the ringed planet hangs in the corner's window.
  sky.mesh.rotation.set(-0.2, 0.68, 0);

  const corner = buildLookCorner();
  scene.add(corner.group);

  // Everything that moves: the Associate, and the performance test's extras.
  const actors = [];
  function addActor(x, z, seed) {
    const rig = buildRig(seed === undefined ? ASSOCIATE : { ...ASSOCIATE, face: { ...ASSOCIATE.face, seed } });
    rig.root.position.set(x, 0, z);
    rig.root.rotation.y = FACING;
    scene.add(rig.root);
    const anim = createAnimator(rig);
    const actor = { rig, anim };
    actors.push(actor);
    return actor;
  }
  const hero = addActor(corner.spawn[0], corner.spawn[2]);
  let extras = [];
  let perfOn = false;

  let expressionIndex = 0;
  let outlinesOn = true;
  let gameCamOn = false;
  let yaw = 0.685;
  let pitch = 0.1;
  let dist = 4.6;
  let dragging = false;
  const target = new THREE.Vector3(corner.spawn[0], corner.spawn[1] + 1.1, corner.spawn[2]);
  const offset = [0, 0, 0];

  function setAnim(name) {
    if (!ANIM_KEYS.includes(name)) return;
    hero.anim.play(name);
    for (const a of extras) a.anim.play(perfOn ? 'run' : name);
  }
  function setExpression(name) {
    const i = EXPRESSION_NAMES.indexOf(name);
    if (i < 0) return;
    expressionIndex = i;
    for (const a of actors) a.rig.face.setExpression(name);
  }
  function setOutlines(on) {
    outlinesOn = !!on;
    setOutlinesVisible(scene, outlinesOn);
  }
  function setGameCam(on) { gameCamOn = !!on; }
  function setPerf(on) {
    on = !!on;
    if (on === perfOn) return;
    perfOn = on;
    if (on) {
      const z = corner.spawn[2] + 2.4;
      for (let i = 0; i < EXTRAS; i++) {
        const x = corner.spawn[0] + (i - (EXTRAS - 1) / 2) * EXTRAS_SPACING;
        const a = addActor(x, z, 10 + i);
        a.anim.play('run');
        a.rig.face.setExpression(EXPRESSION_NAMES[expressionIndex]);
        extras.push(a);
      }
      setOutlinesVisible(scene, outlinesOn);
    } else {
      for (const a of extras) {
        a.rig.dispose();
        actors.splice(actors.indexOf(a), 1);
      }
      extras = [];
    }
  }

  function resize() {
    const r = gfx.resize();
    camera.aspect = r.aspect;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // Drag orbits; the wheel zooms.
  canvas.addEventListener('mousedown', (e) => { if (e.button === 0) dragging = true; });
  window.addEventListener('mouseup', () => { dragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (dragging && !input.isLocked()) orbit(e.movementX || 0, e.movementY || 0, 0.006);
  });
  canvas.addEventListener('wheel', (e) => {
    dist = clamp(dist * Math.exp(e.deltaY * 0.001), ZOOM_MIN, ZOOM_MAX);
  }, { passive: true });
  function orbit(dx, dy, k) {
    yaw -= dx * k;
    pitch = clamp(pitch + dy * k, PITCH_MIN, PITCH_MAX);
  }

  // Keys with no input action. The rest (1 2 3, E, G) arrive through the input snapshot.
  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (e.code === 'Digit4') setAnim('flinch');
    else if (e.code === 'Digit5') setAnim('talk');
    else if (e.code === 'KeyO') setOutlines(!outlinesOn);
    else if (e.code === 'KeyP') setPerf(!perfOn);
    else if (e.code === 'KeyL') input.requestLock();
  });

  // Frame rate: a one-second rolling average.
  let fps = 0;
  let ms = 0;
  let accFrames = 0;
  let accSeconds = 0;
  let calls = 0;
  let tris = 0;
  let snap = null;
  let panelClock = 0;

  window.__cr.stats = () => ({ fps, ms, calls, tris, scale: gfx.scale(), characters: actors.length });
  window.__cr.anim = setAnim;
  window.__cr.expression = setExpression;
  window.__cr.perf = setPerf;
  window.__cr.gameCam = setGameCam;
  window.__cr.outlines = setOutlines;

  function applyKeys(s) {
    if (s.pressed.weapon1) setAnim('idle');
    if (s.pressed.weapon2) setAnim('run');
    if (s.pressed.weapon3) setAnim('aim');
    if (s.pressed.interact) setExpression(EXPRESSION_NAMES[(expressionIndex + 1) % EXPRESSION_NAMES.length]);
    if (s.pressed.grenade) setGameCam(!gameCamOn);
  }

  function placeCamera() {
    if (gameCamOn) {
      const p = gameCameraPose([hero.rig.root.position.x, hero.rig.root.position.y, hero.rig.root.position.z], hero.rig.root.rotation.y);
      camera.position.fromArray(p.pos);
      camera.lookAt(p.look[0], p.look[1], p.look[2]);
    } else {
      orbitOffset(yaw, pitch, dist, offset);
      camera.position.set(target.x + offset[0], target.y + offset[1], target.z + offset[2]);
      camera.lookAt(target);
    }
  }

  const f1 = (v) => v.toFixed(2);
  function writePanel() {
    const held = snap ? Object.keys(snap.held).filter((a) => snap.held[a]).join(' ') : '';
    const pad = input.padStatus();
    const padLine = snap && pad !== 'none' && pad !== 'unrecognised controller'
      ? `Gamepad: ${pad}\n  move ${f1(snap.moveX)}, ${f1(snap.moveY)}  look ${f1(snap.lookX)}, ${f1(snap.lookY)}\n  held: ${held || 'nothing'}`
      : `Gamepad: ${pad}`;
    readout.textContent = [
      'LOOK TEST',
      'Drag: orbit    Wheel: zoom',
      '1 2 3 4 5: idle run aim flinch talk',
      'E: next expression    G: game camera',
      'O: outlines    P: ten more, running',
      'L: lock pointer (Esc releases)',
      '',
      `${hero.anim.current()} / ${EXPRESSION_NAMES[expressionIndex]}   camera: ${gameCamOn ? 'game' : 'orbit'}   outlines: ${outlinesOn ? 'on' : 'off'}`,
      `${Math.round(fps)} fps   ${f1(ms)} ms   scale ${gfx.scale()}`,
      `${calls} draw calls   ${tris} triangles   ${actors.length} characters`,
      `Pointer lock: ${input.isLocked() ? 'yes' : 'no'}   mouse ${snap ? Math.round(snap.lookDX) : 0}, ${snap ? Math.round(snap.lookDY) : 0}`,
      padLine,
    ].join('\n');
  }

  const loop = createLoop({
    step() {}, // everything runs on the real frame time in render
    render(alpha, realSeconds) {
      const dt = Math.min(realSeconds, MAX_DT);
      snap = input.poll();
      applyKeys(snap);
      if (input.isLocked() && !gameCamOn) orbit(snap.lookDX, snap.lookDY, 0.003);
      if (!gameCamOn) orbit(snap.lookX * 600 * dt, snap.lookY * 600 * dt, 0.004);

      sky.update(performance.now() / 1000);
      corner.update(dt);
      for (const a of actors) {
        a.anim.update(dt);
        a.rig.update(dt);
      }
      placeCamera();
      renderer.render(scene, camera);
      calls = renderer.info.render.calls;
      tris = renderer.info.render.triangles;

      accFrames++;
      accSeconds += realSeconds;
      if (accSeconds >= 1) {
        fps = accFrames / accSeconds;
        ms = (accSeconds / accFrames) * 1000;
        accFrames = 0;
        accSeconds = 0;
      }
      panelClock += realSeconds;
      if (panelClock >= 0.1) { panelClock = 0; writePanel(); }
      gfx.frameDone(realSeconds * 1000);
    },
  });

  placeCamera();
  renderer.render(scene, camera);
  calls = renderer.info.render.calls;
  tris = renderer.info.render.triangles;
  writePanel();
  loop.start();
}

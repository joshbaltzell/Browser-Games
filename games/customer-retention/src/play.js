import * as THREE from 'three';
import { TUNING } from './tuning.js';
import { createLoop } from './core/loop.js';
import { createInput, isTypingTarget } from './core/input.js';
import { createContextButton } from './core/contextButton.js';
import { createRenderer } from './render/renderer.js';
import { createSky } from './render/sky.js';
import { createCameraRig } from './render/cameraRig.js';
import { buildGreyRoom, GREY_ROOM } from './world/greyRoom.js';
import { pointInBoxes } from './world/collide.js';
import { createTuningPanel } from './dev/tuningPanel.js';
import { createMovement } from './actors/movement.js';
import { createPlayerView } from './actors/player.js';

// The milestone-1 grey-box play scene: the player, the camera and a room to
// run round in. Simulation runs at fixed steps, drawing interpolates.

const MAX_DT = 0.05;

// Paused behind "Click to play" unless the pointer is locked, a gamepad is in
// use, or the tuning panel is open.
export function shouldSimulate({ locked, device, panelOpen }) {
  return !!(locked || device === 'pad' || panelOpen);
}

export function startPlay({ canvas, gl, params }) {
  const gfx = createRenderer(canvas, gl);
  const renderer = gfx.renderer;
  const input = createInput(canvas);
  const readout = document.getElementById('cr-readout');
  const pauseBox = document.getElementById('cr-pause');
  const hooks = { panelOpen: () => false };
  window.__cr.hooks = hooks;
  // Created first so stored overrides are in TUNING before anything reads them.
  const panel = createTuningPanel();
  hooks.panelOpen = panel.isOpen;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(TUNING.camera.fov, 1, 0.05, 100);
  const sky = createSky();
  scene.add(sky.mesh);
  const room = buildGreyRoom();
  scene.add(room.group);
  const boxes = room.boxes;

  const spawn = GREY_ROOM.spawn;
  const mover = createMovement({ boxes, spawn: spawn.pos });
  mover.place(spawn.pos, spawn.yaw);
  const view = createPlayerView(mover);
  scene.add(view.group);
  const cam = createCameraRig();
  const button = createContextButton();
  const target = [0, 0, 0];
  cam.snap(spawn.pos, spawn.yaw, 'normal', 1);

  let snap = null;
  let simulating = false;
  let drive = null;          // test override of the input-built intent
  let driveTap = false;
  let driveEnd = false;      // drive(null) arrived while a tap was still waiting
  let aimHeld = false;
  const pending = { cover: false };
  const intent = { moveX: 0, moveY: 0, camYaw: 0, sprint: false, aim: false, tap: false };

  function resize() {
    const r = gfx.resize();
    camera.aspect = r.aspect;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('click', () => input.requestLock());
  const resetButton = () => button.reset();
  window.addEventListener('blur', resetButton);
  document.addEventListener('pointerlockchange', () => { if (!input.isLocked()) button.reset(); });

  window.addEventListener('keydown', (e) => {
    if (e.repeat || isTypingTarget(e.target)) return;
    if (e.code === 'Backquote') {
      panel.toggle();
      if (panel.isOpen() && document.exitPointerLock) document.exitPointerLock();
    } else if (e.code === 'KeyH') readout.style.display = readout.style.display === 'none' ? '' : 'none';
  });

  function modeOf() {
    if (mover.state === 'sprint') return 'sprint';
    if (mover.aiming) return 'aim';
    return 'normal';
  }

  function placeAt(pos, yaw) {
    mover.place(pos, yaw);
    cam.snap(pos, yaw, 'normal', 1);
  }

  let fps = 0, ms = 0, accFrames = 0, accSeconds = 0, calls = 0, tris = 0, panelClock = 0;
  const cr = window.__cr;
  cr.stats = () => ({ fps, ms, calls, tris, scale: gfx.scale(), characters: 1 });
  cr.player = () => ({ pos: mover.pos.slice(), state: mover.state, speed: mover.speed(), facing: mover.facing, entries: mover.entries });
  cr.camera = () => {
    const r = camState;
    return { pos: r.pos.slice(), fov: r.fov, inside: pointInBoxes(boxes, r.pos, 0.1) };
  };
  cr.place = (name) => {
    const f = name === 'spawn' ? spawn : GREY_ROOM.features[name];
    if (f) placeAt(f.pos, f.yaw);
  };
  cr.drive = (i) => {
    if (!i) {
      if (driveTap) driveEnd = true; else drive = null;
      return;
    }
    drive = i; driveEnd = false;
    if (i.tap) driveTap = true;
  };

  function buildIntent(dt) {
    if (drive) {
      intent.moveX = drive.moveX || 0; intent.moveY = drive.moveY || 0;
      intent.sprint = !!drive.sprint; intent.aim = !!drive.aim;
      intent.tap = driveTap;
      if (driveTap) { driveTap = false; if (driveEnd) { drive = null; driveEnd = false; } }
    } else {
      const h = snap.held;
      intent.moveX = snap.moveX; intent.moveY = snap.moveY;
      intent.tap = button.update(h.cover, pending.cover, dt, TUNING.move.tapMax);
      intent.sprint = h.sprint || button.holding();
      intent.aim = h.aim;
    }
    pending.cover = false;
    intent.camYaw = cam.yaw;
    return intent;
  }

  const f1 = (v) => v.toFixed(1);
  function writePanel() {
    const pad = input.padStatus();
    readout.textContent = [
      'MOVEMENT TEST',
      'Mouse + keys: WASD move, mouse look, right mouse aim, Space tap roll / hold sprint, Shift sprint',
      'Gamepad: left stick move, right stick look, left trigger aim, A tap roll / hold sprint',
      '',
      `${mover.state}   ${mover.speed().toFixed(2)} m/s`,
      `${Math.round(fps)} fps   ${f1(ms)} ms   scale ${gfx.scale()}`,
      `${calls} draw calls   ${tris} triangles`,
      `Pointer lock: ${input.isLocked() ? 'yes' : 'no'}   Gamepad: ${pad}`,
      '` tuning panel    ?look look test    H hide panel',
    ].join('\n');
  }

  const camState = { pos: [0, 0, 0], fov: 70 };

  const loop = createLoop({
    before(realSeconds) {
      snap = input.poll();
      const driving = !!drive || driveTap;
      simulating = driving || shouldSimulate({ locked: input.isLocked(), device: input.device(), panelOpen: hooks.panelOpen() });
      pauseBox.hidden = simulating;
      if (!simulating) { button.reset(); pending.cover = false; return; }
      const dt = Math.min(realSeconds, MAX_DT);
      aimHeld = snap.held.aim || (drive && drive.aim);
      cam.look(snap.lookDX, snap.lookDY, snap.lookX, snap.lookY, dt, aimHeld);
      if (snap.pressed.cover) pending.cover = true;
    },
    step(dt) {
      if (!simulating) return;
      mover.update(buildIntent(dt), dt);
    },
    render(alpha, realSeconds) {
      const dt = simulating ? Math.min(realSeconds, MAX_DT) : 0;
      view.update(alpha, dt);
      const p = mover.pos, q = mover.prevPos;
      for (let i = 0; i < 3; i++) target[i] = q[i] + (p[i] - q[i]) * alpha;
      const r = cam.update(dt, { target, mode: modeOf(), side: 1 }, boxes);
      camState.pos[0] = r.pos[0]; camState.pos[1] = r.pos[1]; camState.pos[2] = r.pos[2]; camState.fov = r.fov;
      if (camera.fov !== r.fov) { camera.fov = r.fov; camera.updateProjectionMatrix(); }
      camera.position.set(r.pos[0], r.pos[1], r.pos[2]);
      camera.lookAt(r.pos[0] + r.dir[0], r.pos[1] + r.dir[1], r.pos[2] + r.dir[2]);
      sky.update(performance.now() / 1000);
      room.update(dt);
      renderer.render(scene, camera);
      calls = renderer.info.render.calls;
      tris = renderer.info.render.triangles;
      accFrames++; accSeconds += realSeconds;
      if (accSeconds >= 1) { fps = accFrames / accSeconds; ms = (accSeconds / accFrames) * 1000; accFrames = 0; accSeconds = 0; }
      panelClock += realSeconds;
      if (panelClock >= 0.1) { panelClock = 0; writePanel(); }
      gfx.frameDone(realSeconds * 1000);
    },
  });

  if (params && params.has('tune')) panel.toggle();
  snap = input.poll();
  cam.update(0, { target: spawn.pos, mode: 'normal', side: 1 }, boxes);
  writePanel();
  loop.start();
}

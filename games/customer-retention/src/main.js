import * as THREE from 'three';
import { TUNING } from './tuning.js';
import { createLoop } from './core/loop.js';
import { createInput } from './core/input.js';
import { createRenderer } from './render/renderer.js';
import { PALETTE } from './render/palette.js';
import { createToonMaterial } from './render/toon.js';
import { addOutline, computeOutlineNormals } from './render/outline.js';
import { createSky } from './render/sky.js';

const MESSAGES = {
  webgl: 'Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.',
  boot: 'Something broke while starting the game.',
};

window.__cr = { ready: false, error: null };

function fail(kind, detail) {
  window.__cr.error = { kind, detail: detail || '' };
  document.documentElement.dataset.crError = kind;
  const box = document.getElementById('cr-error');
  if (!box) return;
  box.textContent = '';
  box.appendChild(document.createTextNode(MESSAGES[kind]));
  if (kind === 'boot' && detail) {
    box.appendChild(document.createElement('br'));
    box.appendChild(document.createTextNode(detail));
  }
  box.hidden = false;
}

window.addEventListener('error', (e) => {
  if (!window.__cr.error) fail('boot', e.message);
});

function boot() {
  const canvas = document.getElementById('cr-canvas');
  const gl = canvas.getContext('webgl2', { antialias: true, powerPreference: 'high-performance' });
  if (!gl) {
    fail('webgl');
    return;
  }
  const gfx = createRenderer(canvas, gl);
  const renderer = gfx.renderer;
  const input = createInput(canvas);

  const scene = new THREE.Scene();
  const cam = TUNING.camera;
  const camera = new THREE.PerspectiveCamera(cam.fov, 1, 0.1, 100);
  camera.position.set(cam.right, cam.up, cam.back);
  camera.lookAt(0, 1, 0);

  const sky = createSky();
  scene.add(sky.mesh);

  // Look test: a hard-edged box (outline corners), a smooth sphere and a cream
  // capsule, so the shadow colour can be judged on orange, teal and cream.
  const box = new THREE.Mesh(
    computeOutlineNormals(new THREE.BoxGeometry(0.8, 0.8, 0.8)),
    createToonMaterial({ color: PALETTE.playerOrange }),
  );
  box.position.set(-0.65, 1, 0);
  addOutline(box);
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.38, 32, 16),
    createToonMaterial({ color: PALETTE.teal }),
  );
  ball.position.set(0.3, 0.95, -0.1);
  addOutline(ball);
  const pill = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.26, 0.5, 8, 24),
    createToonMaterial({ color: PALETTE.cream }),
  );
  pill.position.set(1.25, 1.05, -0.5);
  pill.rotation.z = 0.35;
  addOutline(pill);
  scene.add(box, ball, pill);

  function resize() {
    const r = gfx.resize();
    camera.aspect = r.aspect;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  let spin = 0;
  let prevSpin = 0;
  let calls = 0;
  let tris = 0;
  window.__cr.stats = () => ({ calls, tris, scale: gfx.scale() });

  function draw(alpha) {
    const t = prevSpin + (spin - prevSpin) * alpha;
    // Turn about the vertical, tipped toward the camera: at most angles a lit
    // top, a lit side and a shadow side are all in view.
    box.rotation.set(0.35, t * 0.6, 0);
    sky.update(t);
    renderer.render(scene, camera);
    calls = renderer.info.render.calls;
    tris = renderer.info.render.triangles;
  }

  const loop = createLoop({
    step(dt) {
      prevSpin = spin;
      spin += dt;
    },
    render(alpha, realSeconds) {
      input.poll(); // once per frame; nothing consumes the snapshot yet
      draw(alpha);
      gfx.frameDone(realSeconds * 1000);
    },
  });

  draw(0);
  window.__cr.ready = true;
  document.documentElement.dataset.crReady = '1';

  loop.start();
}

try {
  boot();
} catch (err) {
  fail('boot', err && err.message);
}

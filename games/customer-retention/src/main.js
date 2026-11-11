import * as THREE from 'three';
import { TUNING } from './tuning.js';
import { createLoop } from './core/loop.js';
import { createInput } from './core/input.js';
import { createRenderer } from './render/renderer.js';

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
  scene.background = new THREE.Color(0x2a2150);
  const cam = TUNING.camera;
  const camera = new THREE.PerspectiveCamera(cam.fov, 1, 0.1, 100);
  camera.position.set(cam.right, cam.up, cam.back);
  camera.lookAt(0, 1, 0);

  const light = new THREE.DirectionalLight(0xffffff, 2.5);
  light.position.set(...TUNING.lightDir);
  scene.add(light, new THREE.AmbientLight(0x8877cc, 1));

  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xff7a59 }),
  );
  box.position.y = 1;
  scene.add(box);

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
    box.rotation.y = t;
    box.rotation.x = t * 0.7;
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

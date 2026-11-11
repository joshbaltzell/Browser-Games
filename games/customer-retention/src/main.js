import * as THREE from 'three';
import { TUNING } from './tuning.js';

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
  const gl = canvas.getContext('webgl2', { antialias: true });
  if (!gl) {
    fail('webgl');
    return;
  }
  const renderer = new THREE.WebGLRenderer({ canvas, context: gl });
  renderer.setPixelRatio(window.devicePixelRatio || 1);

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
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  function frame(t) {
    box.rotation.y = t * 0.001;
    box.rotation.x = t * 0.0007;
    renderer.render(scene, camera);
  }

  frame(0);
  window.__cr.ready = true;
  document.documentElement.dataset.crReady = '1';

  function loop(t) {
    frame(t);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

try {
  boot();
} catch (err) {
  fail('boot', err && err.message);
}

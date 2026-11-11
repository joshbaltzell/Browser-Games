import * as THREE from 'three';
import { TUNING } from './tuning.js';
import { createLoop } from './core/loop.js';
import { createInput } from './core/input.js';
import { createRenderer } from './render/renderer.js';
import { createSky } from './render/sky.js';
import { buildLookCorner } from './world/lookCorner.js';
import { buildRig } from './actors/rig.js';
import { createAnimator } from './actors/animator.js';
import { ASSOCIATE } from './actors/associate.js';

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
  // Look-test camera: fixed, from the open front corner toward the back corner,
  // so both walls, the sign, the window and the spawn point are all in view.
  const camera = new THREE.PerspectiveCamera(TUNING.camera.fov, 1, 0.1, 100);
  camera.position.set(4.4, 1.8, 5.4);
  camera.lookAt(-1.1, 1.5, -2.3);

  const sky = createSky();
  scene.add(sky.mesh);
  // Turn the sky so the ringed planet hangs in the corner's window.
  sky.mesh.rotation.set(-0.2, 0.68, 0);

  const corner = buildLookCorner();
  scene.add(corner.group);

  // An Associate idles at the corner's spawn point, facing the camera.
  const associate = buildRig(ASSOCIATE);
  associate.root.position.fromArray(corner.spawn);
  associate.root.rotation.y = 0.6;
  scene.add(associate.root);
  const anim = createAnimator(associate);

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
    sky.update(t);
    renderer.render(scene, camera);
    calls = renderer.info.render.calls;
    tris = renderer.info.render.triangles;
  }

  const loop = createLoop({
    step(dt) {
      prevSpin = spin;
      spin += dt;
      corner.update(dt);
      anim.update(dt);
      associate.update(dt);
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

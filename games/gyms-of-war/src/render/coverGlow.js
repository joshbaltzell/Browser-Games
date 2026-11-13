// The cover glow on screen: one soft mint strip, moved along the top of the cover a tap (or a run-in) would take. One mesh, one draw call; the
// logic (which strip, how bright) is coverGlowModel.js. Mint, not acid green (enemies) and not orange (Doc's fire).
import * as THREE from 'three';
import { TUNING } from '../tuning.js';
import { createCoverGlow } from './coverGlowModel.js';

const MINT = 0x4dffc0;   // a bright mint, drawn solid: additive light would vanish on the pale floors

// A soft-edged strip: bright in the middle, fading to nothing at every edge.
function softTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 16;
  const g = c.getContext('2d');
  const gx = g.createLinearGradient(0, 0, 64, 0);
  gx.addColorStop(0, 'rgba(255,255,255,0)'); gx.addColorStop(0.18, 'rgba(255,255,255,1)'); gx.addColorStop(0.82, 'rgba(255,255,255,1)'); gx.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gx; g.fillRect(0, 0, 64, 16);
  g.globalCompositeOperation = 'destination-in';
  const gy = g.createLinearGradient(0, 0, 0, 16);
  gy.addColorStop(0, 'rgba(255,255,255,0.15)'); gy.addColorStop(0.5, 'rgba(255,255,255,1)'); gy.addColorStop(1, 'rgba(255,255,255,0.15)');
  g.fillStyle = gy; g.fillRect(0, 0, 64, 16);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createCoverGlowView(scene) {
  const model = createCoverGlow();
  const tex = softTexture();
  const mat = new THREE.MeshBasicMaterial({ color: MINT, map: tex, transparent: true, opacity: 0, depthWrite: false, fog: false });
  const geo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);   // lies flat, x along the strip, z across it
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'coverGlow';
  mesh.visible = false;
  mesh.frustumCulled = false;
  mesh.renderOrder = 5;
  scene.add(mesh);
  let clock = 0;
  return {
    mesh, model,
    // target: findCoverTarget's result or null. Call once per frame.
    update(dt, target) {
      clock += dt > 0 ? dt : 0;
      const r = model.update(dt, target);
      const st = r.strip;
      mesh.visible = !!st && r.opacity > 0.002;
      if (!mesh.visible) return false;
      const hz = TUNING.feedback.coverGlowHz;
      const pulse = hz > 0 ? 0.72 + 0.28 * Math.sin(2 * Math.PI * hz * clock) : 1;
      mat.opacity = Math.min(1, r.opacity * pulse);
      mesh.position.set(st.x, st.y, st.z);
      mesh.rotation.y = st.yaw;
      mesh.scale.set(st.len, 1, st.width * 3);   // wider than the lip: the soft edge carries past it
      return true;
    },
    reset() { model.reset(); mesh.visible = false; },
    dispose() { scene.remove(mesh); geo.dispose(); mat.dispose(); tex.dispose(); },
  };
}

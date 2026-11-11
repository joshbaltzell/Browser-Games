import * as THREE from 'three';
import { createGovernor, nextResolutionScale } from './governor.js';
import { OUTLINE_SHARED } from './outline.js';

export { nextResolutionScale };

// Pure sizing helpers (importable in Node without a DOM).
export function resizeState(cssW, cssH, dpr, scale) {
  const width = Math.max(1, Math.floor(cssW) || 1);
  const height = Math.max(1, Math.floor(cssH) || 1);
  const ratio = Math.min(dpr > 0 ? dpr : 1, 2) * scale;
  return { width, height, pixelRatio: ratio, aspect: width / height };
}

export function createRenderer(canvas, gl) {
  const renderer = new THREE.WebGLRenderer({
    canvas, context: gl, antialias: true, powerPreference: 'high-performance',
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const governor = createGovernor({ startMs: performance.now() });

  function resize() {
    const s = resizeState(window.innerWidth, window.innerHeight, window.devicePixelRatio, governor.scale());
    renderer.setPixelRatio(s.pixelRatio);
    renderer.setSize(s.width, s.height, false);
    OUTLINE_SHARED.viewportHeight.value = canvas.height; // drawing-buffer pixels
    return s;
  }

  function frameDone(ms) {
    const before = governor.scale();
    if (governor.sample(ms, performance.now()) !== before) resize();
  }

  return { renderer, resize, frameDone, scale: governor.scale };
}

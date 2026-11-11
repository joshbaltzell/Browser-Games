import * as THREE from 'three';

// Pure sizing helpers (importable in Node without a DOM).
export function resizeState(cssW, cssH, dpr, scale) {
  const width = Math.max(1, Math.floor(cssW) || 1);
  const height = Math.max(1, Math.floor(cssH) || 1);
  const ratio = Math.min(dpr > 0 ? dpr : 1, 2) * scale;
  return { width, height, pixelRatio: ratio, aspect: width / height };
}

export function nextResolutionScale(scale, avgFrameMs) {
  let s = scale;
  if (avgFrameMs > 20) s -= 0.1;
  else if (avgFrameMs < 14) s += 0.05;
  return Math.round(Math.min(1, Math.max(0.5, s)) * 100) / 100;
}

export function createRenderer(canvas, gl) {
  const renderer = new THREE.WebGLRenderer({
    canvas, context: gl, antialias: true, powerPreference: 'high-performance',
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  let resScale = 1;
  let sumMs = 0;
  let count = 0;

  function resize() {
    const s = resizeState(window.innerWidth, window.innerHeight, window.devicePixelRatio, resScale);
    renderer.setPixelRatio(s.pixelRatio);
    renderer.setSize(s.width, s.height, false);
    return s;
  }

  // Averages 60 frames and adapts the resolution scale at most once a second.
  function frameDone(ms) {
    sumMs += Math.min(ms, 100); // a hidden-tab hiccup must not read as a slow GPU
    count++;
    if (count < 60 || sumMs < 1000) return;
    const next = nextResolutionScale(resScale, sumMs / count);
    sumMs = 0;
    count = 0;
    if (next !== resScale) {
      resScale = next;
      resize();
    }
  }

  return { renderer, resize, frameDone, scale: () => resScale };
}

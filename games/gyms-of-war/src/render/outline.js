import * as THREE from 'three';
import { PALETTE } from './palette.js';
import { TUNING } from '../tuning.js';

// Shared by reference by every outline material. viewportHeight is the drawing
// buffer height in device pixels; createRenderer().resize() keeps it current.
export const OUTLINE_SHARED = {
  viewportHeight: { value: 1080 },
};

// Adds `outlineNormal`: for each vertex, the normalised average of the normals
// of every vertex at the same position. Hard-edged shapes (a box) have split
// normals at their corners; pushing the outline along this averaged normal
// keeps the hull closed there. Always recomputed from `normal`, so running it
// twice gives the same result, and running it again after the normals change
// refreshes it.
export function computeOutlineNormals(geometry) {
  if (!geometry.getAttribute('normal')) geometry.computeVertexNormals();
  const pos = geometry.getAttribute('position');
  const nrm = geometry.getAttribute('normal');
  const count = pos.count;

  const sums = new Map();
  const keys = new Array(count);
  const q = (x) => Math.round(x * 1e4);
  for (let i = 0; i < count; i++) {
    const key = q(pos.getX(i)) + ',' + q(pos.getY(i)) + ',' + q(pos.getZ(i));
    keys[i] = key;
    let s = sums.get(key);
    if (!s) { s = [0, 0, 0]; sums.set(key, s); }
    s[0] += nrm.getX(i); s[1] += nrm.getY(i); s[2] += nrm.getZ(i);
  }

  let attr = geometry.getAttribute('outlineNormal');
  if (!attr || attr.count !== count) {
    attr = new THREE.BufferAttribute(new Float32Array(count * 3), 3);
    geometry.setAttribute('outlineNormal', attr);
  }
  for (let i = 0; i < count; i++) {
    const s = sums.get(keys[i]);
    let x = s[0], y = s[1], z = s[2];
    let len = Math.hypot(x, y, z);
    if (len < 1e-6) {
      // Opposite normals cancelled (a two-sided sheet): keep the vertex's own.
      x = nrm.getX(i); y = nrm.getY(i); z = nrm.getZ(i);
      len = Math.hypot(x, y, z) || 1;
    }
    attr.setXYZ(i, x / len, y / len, z / len);
  }
  attr.needsUpdate = true;
  return geometry;
}

const vertexShader = /* glsl */ `
uniform float px;
uniform float viewportHeight;
#ifdef USE_OUTLINE_NORMAL
attribute vec3 outlineNormal;
#endif

void main() {
#ifdef USE_OUTLINE_NORMAL
  vec3 objectNormal = outlineNormal;
#else
  vec3 objectNormal = normal;
#endif
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vec4 clip = projectionMatrix * mvPosition;
  vec3 viewNormal = normalize(normalMatrix * objectNormal);

  // The normal's direction on screen, found by projecting a point a short
  // step along it. Exact at any position on screen, not only at the centre.
  // This is (step NDC - vertex NDC) scaled by clip.w * clipStep.w, which never
  // divides, so a vertex on the camera plane (w = 0) cannot produce NaN.
  float eps = 0.001 * max(-mvPosition.z, 0.1);
  vec4 clipStep = projectionMatrix * vec4(mvPosition.xyz + viewNormal * eps, 1.0);
  vec2 ndcDir = clipStep.xy * clip.w - clip.xy * clipStep.w;

  // Pixel space: width from the projection's aspect, height from the viewport.
  float aspect = projectionMatrix[1][1] / projectionMatrix[0][0];
  vec2 viewport = vec2(viewportHeight * aspect, viewportHeight);
  vec2 pixelDir = ndcDir * viewport;
  float len = length(pixelDir);
  pixelDir = len > 1e-9 ? pixelDir / len : vec2(0.0);

  // Thickness is TUNING.outlinePx at 1080 lines and scales with the viewport,
  // but never thinner than one pixel. Multiplying by w keeps it the same on
  // screen at any distance.
  float thickness = max(px * (viewportHeight / 1080.0), 1.0);
  clip.xy += pixelDir * (2.0 * thickness / viewport) * clip.w;
  gl_Position = clip;
}
`;

const fragmentShader = /* glsl */ `
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;

// Inverted-hull outline: back faces pushed out along the normal on screen.
// outlineNormal: true reads the `outlineNormal` attribute (see
// computeOutlineNormals); false reads `normal`. addOutline picks it for you.
export function createOutlineMaterial({ px = TUNING.outlinePx, color = PALETTE.ink, outlineNormal = false } = {}) {
  return new THREE.ShaderMaterial({
    name: 'outline',
    uniforms: {
      px: { value: px },
      inkColor: { value: new THREE.Color(color) },
      viewportHeight: OUTLINE_SHARED.viewportHeight,
    },
    defines: outlineNormal ? { USE_OUTLINE_NORMAL: '' } : {},
    vertexShader,
    fragmentShader,
    side: THREE.BackSide,
  });
}

function ignoreRaycast() {}

// Outline materials shared between meshes with the same settings, so a scene
// full of props does not compile and bind one material per mesh.
const sharedOutlineMaterials = new Map();

function sharedOutlineMaterial(px, color, outlineNormal) {
  const key = px + '|' + new THREE.Color(color).getHexString() + '|' + outlineNormal;
  let material = sharedOutlineMaterials.get(key);
  if (!material) {
    material = createOutlineMaterial({ px, color, outlineNormal });
    sharedOutlineMaterials.set(key, material);
  }
  return material;
}

// Adds a child mesh named `outline` that shares the parent's geometry and
// follows its transform. Uses `outlineNormal` when the geometry has it.
// Outlines with the same settings share one material: do not dispose it.
export function addOutline(mesh, { px = TUNING.outlinePx } = {}) {
  const outlineNormal = !!mesh.geometry.getAttribute('outlineNormal');
  const material = sharedOutlineMaterial(px, PALETTE.ink, outlineNormal);
  const outline = new THREE.Mesh(mesh.geometry, material);
  outline.name = 'outline';
  outline.userData.isOutline = true;
  outline.raycast = ignoreRaycast;
  mesh.add(outline);
  return outline;
}

export function setOutlinesVisible(root, on) {
  root.traverse((o) => {
    if (o.userData.isOutline) o.visible = on;
  });
}

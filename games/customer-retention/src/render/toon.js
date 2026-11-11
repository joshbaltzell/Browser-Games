import * as THREE from 'three';
import { PALETTE } from './palette.js';
import { TUNING } from '../tuning.js';

// Uniforms shared by reference by every toon material: change one value here
// and every surface follows. lightDir points from the surface toward the light,
// in world space.
export const TOON_SHARED = {
  lightDir: { value: new THREE.Vector3(...TUNING.lightDir).normalize() },
  shadowTint: { value: new THREE.Color(PALETTE.shadowTint) },
  bandEdge: { value: 0.15 },
};

const vertexShader = /* glsl */ `
varying vec3 vViewNormal;
varying vec3 vViewPos;
varying vec3 vTint;

void main() {
  vTint = vec3(1.0);
#if defined( USE_COLOR_ALPHA )
  vTint = color.rgb;
#elif defined( USE_COLOR )
  vTint = color;
#endif
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPos = mvPosition.xyz;
  vViewNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = /* glsl */ `
uniform vec3 baseColor;
uniform vec3 lightDir;
uniform vec3 shadowTint;
uniform float bandEdge;
uniform float shadowMix;
uniform float rim;

varying vec3 vViewNormal;
varying vec3 vViewPos;
varying vec3 vTint;

// How far toward edge-on a lit surface must turn before the rim lightens it.
const float RIM_EDGE = 0.3;
// Only rounded surfaces get a rim (radius under about 2 m). A flat face seen
// edge-on (a floor, a wall, a box side) would otherwise lighten all over.
const float RIM_MIN_CURVATURE = 0.5;

void main() {
  vec3 n = normalize(vViewNormal);
  vec3 l = normalize((viewMatrix * vec4(lightDir, 0.0)).xyz);
  vec3 v = isOrthographic ? vec3(0.0, 0.0, 1.0) : normalize(-vViewPos);
  float curvature = length(fwidth(n)) / max(length(fwidth(vViewPos)), 1e-6);

  vec3 base = baseColor * vTint;
  bool lit = dot(n, l) > bandEdge;
  vec3 col = lit ? base : mix(base, base * shadowTint, shadowMix);
  if (lit && dot(n, v) < RIM_EDGE && curvature > RIM_MIN_CURVATURE) col = mix(col, vec3(1.0), rim);

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;

// Two-tone cartoon material: one hard step between the lit colour and the
// purple-tinted shadow colour, plus a thin light rim on the lit side.
export function createToonMaterial({ color = '#ffffff', vertexColors = false, shadowMix = 0.55, rim = 0.25 } = {}) {
  return new THREE.ShaderMaterial({
    name: 'toon',
    uniforms: {
      baseColor: { value: new THREE.Color(color) },
      shadowMix: { value: shadowMix },
      rim: { value: rim },
      lightDir: TOON_SHARED.lightDir,
      shadowTint: TOON_SHARED.shadowTint,
      bandEdge: TOON_SHARED.bandEdge,
    },
    vertexShader,
    fragmentShader,
    vertexColors,
  });
}

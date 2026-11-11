import { PALETTE } from '../render/palette.js';

// The Associate: a cloned customer-retention agent. Purple polo, lanyard,
// headset, slick hair, khakis, and a smile that never leaves.
//
// A character spec is plain data (metres, the character faces +Z so its left
// is +X, feet at y = 0). poses.js reads the numeric fields at the top; rig.js
// reads the rest. Shoulders and hips are the limb roots at rest, in rig space
// with the hips bone at hipHeight. Arms and legs are split into equal upper
// and lower bones (see limb.js on why unequal bones pop).
//
// Nothing here touches three.js or the DOM.

// Mixes two #rrggbb colours in sRGB, for tints derived from the palette.
function mix(a, b, t) {
  const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
  let out = 0;
  for (let s = 16; s >= 0; s -= 8) {
    const ca = (pa >> s) & 255, cb = (pb >> s) & 255;
    out |= Math.round(ca + (cb - ca) * t) << s;
  }
  return '#' + out.toString(16).padStart(6, '0');
}

function deepFreeze(o) {
  for (const v of Object.values(o)) if (v && typeof v === 'object') deepFreeze(v);
  return Object.freeze(o);
}

const SHIRT = PALETTE.glorpPurple;

export const ASSOCIATE = deepFreeze({
  name: 'associate',

  // Used by the pose clips (and the rig).
  height: 1.8,          // floor to the top of the hair
  hipHeight: 0.72,      // hips bone at rest
  armLength: 0.52,      // shoulder to wrist, two bones of 0.26
  legLength: 0.6,       // hip to ankle, two bones of 0.3
  shoulderL: [0.19, 1.095, 0],
  shoulderR: [-0.19, 1.095, 0],
  hipL: [0.1, 0.665, 0],
  hipR: [-0.1, 0.665, 0],
  ankleHeight: 0.1,     // the leg ends this far above the sole

  // Used by the rig.
  neckY: 1.19,          // the head bone, at rest, in rig space
  armRadius: 0.045,
  legRadius: 0.055,
  torso: {
    depth: 0.76,        // front-to-back, as a fraction of the width
    // Profiles: [radius, height above the hips bone], bottom to top.
    pants: [[0, -0.125], [0.14, -0.12], [0.205, -0.09], [0.238, -0.035], [0.249, 0.02], [0.25, 0.06], [0, 0.06]],
    shirt: [[0, 0], [0.24, 0], [0.262, 0.018], [0.262, 0.06], [0.255, 0.13], [0.236, 0.23], [0.205, 0.32],
      [0.17, 0.39], [0.125, 0.445], [0.07, 0.478], [0, 0.49]],
    sleeve: 0.075,      // radius of the short-sleeve caps at the shoulders
  },
  head: {
    // A rounded-box egg with a flattened front for the face to sit on.
    rx: 0.26, ry: 0.29, rz: 0.235, power: 2.5,
    centerY: 0.3,       // above the head bone
    flatZ: 0.16, flatK: 0.22, // in front of flatZ, depth is squashed by flatK
    nose: 0.03,
    ear: 0.05,
  },
  hair: { thickness: 0.032, lift: 0.04, back: 0.05, quiff: true },
  hand: { radius: 0.07 },
  shoe: { length: 0.32, width: 0.17, height: 0.135 },
  colors: {
    shirt: SHIRT,
    collar: mix(SHIRT, PALETTE.ink, 0.25),
    logo: PALETTE.gel,
    pants: mix(PALETTE.planet, PALETTE.ink, 0.3),        // khakis
    skin: PALETTE.daleSkin,
    hair: PALETTE.daleHair,
    shoe: mix(PALETTE.ink, SHIRT, 0.3),
    sole: PALETTE.cream,
    lanyard: PALETTE.hotPink,
    badge: PALETTE.cream,
    badgeStripe: PALETTE.teal,
    headset: mix(PALETTE.ink, PALETTE.lilac, 0.25),
    mic: PALETTE.hotPink,
  },
  outfit: { collar: true, lanyard: true, logo: true, headset: true },
  face: {
    eyeRadius: 0.072, eyeSpacing: 0.158, eyeY: 0.035, eyeZ: 0.204,
    mouthY: -0.105, mouthWidth: 0.15, mouthZ: 0.19,
    brow: 'pair', seed: 6, fixedSmile: 0.75,
  },
});

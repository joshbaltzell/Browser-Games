import { ASSOCIATE } from './associate.js';
import { PALETTE } from '../render/palette.js';

// Doc Vex's rig: the Associate's height, hips, leg and neck heights (so every
// pose clip fits) with Doc's colours (human tan skin, no alien glow), a single
// brow, no headset, lanyard or logo, no fixed smile, and a gym-buff build:
// broad shoulders and chest, a V-taper to a narrow waist, thick neck and arms.
const OFF_WHITE = '#f3efe6';

function deepFreeze(o) {
  for (const v of Object.values(o)) if (v && typeof v === 'object') deepFreeze(v);
  return Object.freeze(o);
}

export const DOC_PLACEHOLDER = deepFreeze({
  ...structuredClone(ASSOCIATE),
  name: 'doc-placeholder',
  // Wider shoulders (rig x), thicker arms, a neck.
  shoulderL: [0.275, 1.095, 0],
  shoulderR: [-0.275, 1.095, 0],
  armRadius: 0.062,
  neck: { radius: 0.1, depth: 0.85 },
  torso: {
    ...ASSOCIATE.torso,
    pants: [[0, -0.125], [0.14, -0.12], [0.205, -0.09], [0.238, -0.035], [0.245, 0.02], [0.235, 0.06], [0, 0.06]],
    // Narrow waist, deep chest, wide shoulders, a sloping trapezius up to the neck.
    shirt: [[0, 0], [0.232, 0], [0.245, 0.02], [0.242, 0.07], [0.258, 0.13], [0.295, 0.22], [0.318, 0.3], [0.29, 0.375],
      [0.235, 0.415], [0.17, 0.445], [0.11, 0.47], [0.075, 0.482], [0, 0.49]],
    sleeve: 0.105,
  },
  // Human skin, normal toon rim, plain white eyes (the alien look is for the Glorp only).
  colors: { ...ASSOCIATE.colors, skin: PALETTE.docSkin, hair: PALETTE.teal, shirt: OFF_WHITE, collar: OFF_WHITE, rim: 0.25, rimColor: '#ffffff' },
  outfit: { collar: false, lanyard: false, logo: false, headset: false },
  face: { ...ASSOCIATE.face, brow: 'uni', fixedSmile: 0, eyeColor: PALETTE.eyeWhite, eyeGlow: false },
});

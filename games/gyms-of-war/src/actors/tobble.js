import { ASSOCIATE } from './associate.js';
import { PALETTE } from '../render/palette.js';

// Tobble: the intern who came along. His spec keeps the Associate's proportions (so every clip fits) and changes the
// colours and the outfit; the view scales the rig by TUNING.tobble.scale. Plain data: nothing here touches three.js or the DOM.
// thirdEye and backpack are view-only and sit in rig units, before the scale.

function deepFreeze(o) {
  for (const v of Object.values(o)) if (v && typeof v === 'object') deepFreeze(v);
  return Object.freeze(o);
}

const mix = (a, b, t) => {
  const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
  let out = 0;
  for (let s = 16; s >= 0; s -= 8) out |= Math.round(((pa >> s) & 255) + (((pb >> s) & 255) - ((pa >> s) & 255)) * t) << s;
  return '#' + out.toString(16).padStart(6, '0');
};

export const TOBBLE = deepFreeze({
  ...ASSOCIATE,
  name: 'tobble',
  hair: { ...ASSOCIATE.hair, quiff: false },
  colors: {
    ...ASSOCIATE.colors,
    shirt: PALETTE.cream,
    collar: mix(PALETTE.cream, PALETTE.ink, 0.2),
    skin: PALETTE.tobbleMint,
    hair: mix(PALETTE.tobbleMint, PALETTE.ink, 0.45),
    backpack: '#ffd23f',                      // a yellow backpack
    lanyard: '#ffd23f',                       // and a visitor badge (cream card, yellow stripe)
    badgeStripe: '#ffd23f',
    rim: 0.25, rimColor: '#ffffff',
    mat: PALETTE.lilac,
  },
  outfit: { collar: false, lanyard: true, logo: false, headset: false },
  face: { ...ASSOCIATE.face, brow: 'pair', fixedSmile: 0.4, eyeColor: PALETTE.eyeWhite, eyeGlow: false },   // friendly white eyes, not the Glorp's glow
  thirdEye: { y: 0.13, r: 0.05 },
  backpack: { w: 0.5, h: 0.6, d: 0.3 },
});

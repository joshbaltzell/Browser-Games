import { ASSOCIATE } from './associate.js';
import { PALETTE } from '../render/palette.js';

// Doc Vex's stand-in until her rig is built (milestone 6): the Associate with
// Doc's colours, a single brow, no headset, lanyard or logo, and no fixed
// smile. Every number is the Associate's, so every pose clip fits.
const OFF_WHITE = '#f3efe6';

function deepFreeze(o) {
  for (const v of Object.values(o)) if (v && typeof v === 'object') deepFreeze(v);
  return Object.freeze(o);
}

export const DOC_PLACEHOLDER = deepFreeze({
  ...structuredClone(ASSOCIATE),
  name: 'doc-placeholder',
  colors: { ...ASSOCIATE.colors, hair: PALETTE.teal, shirt: OFF_WHITE, collar: OFF_WHITE },
  outfit: { collar: false, lanyard: false, logo: false, headset: false },
  face: { ...ASSOCIATE.face, brow: 'uni', fixedSmile: 0 },
});

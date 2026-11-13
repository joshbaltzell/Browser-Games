import { ASSOCIATE } from './associate.js';
import { PALETTE } from '../render/palette.js';

// Doc Vex's rig: the Associate's height, hips, leg and neck heights (so every
// pose clip fits) with Doc's colours (human tan skin, no alien glow), a single
// brow, no headset, lanyard or logo, no fixed smile, and a gym-buff build:
// broad shoulders and chest, a V-taper to a narrow waist, thick neck and arms.
// His kit (kit: true, see rig.js docTorsoParts and friends) is the tactical look
// of the turnaround: spiky light-blue hair, goggles on a headband, a cream vest
// with magenta trim, dark purple cargo trousers, knee pads and cream boots.
const OFF_WHITE = '#f3efe6';
const HAIR_BLUE = '#8fd3f5';
const DARK_PURPLE = '#3e2a63';
const INK_PURPLE = '#2b2145';

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
  armRadius: 0.07,
  legRadius: 0.085,
  neck: { radius: 0.1, depth: 0.85 },
  // The head sits low between the traps (as in the turnaround), with a thin hair shell under the spikes.
  head: { ...ASSOCIATE.head, centerY: 0.27 },
  hair: { ...ASSOCIATE.hair, thickness: 0.02, lift: 0, quiff: false },
  torso: {
    ...ASSOCIATE.torso,
    pants: [[0, -0.125], [0.14, -0.12], [0.205, -0.09], [0.238, -0.035], [0.245, 0.02], [0.235, 0.06], [0, 0.06]],
    // Narrow waist, deep chest, wide shoulders, a sloping trapezius up to the neck.
    shirt: [[0, 0], [0.232, 0], [0.245, 0.02], [0.242, 0.07], [0.258, 0.13], [0.295, 0.22], [0.318, 0.3], [0.29, 0.375],
      [0.235, 0.415], [0.17, 0.445], [0.11, 0.47], [0.075, 0.482], [0, 0.49]],
    sleeve: 0.135,     // round deltoids (the vest is sleeveless)
  },
  // Human skin, normal toon rim, plain white eyes (the alien look is for the Glorp only).
  colors: {
    ...ASSOCIATE.colors,
    skin: PALETTE.docSkin, hair: HAIR_BLUE, shirt: OFF_WHITE, collar: PALETTE.nebulaHot, rim: 0.25, rimColor: '#ffffff',
    pants: DARK_PURPLE, pouch: '#6a5590', strap: INK_PURPLE, band: INK_PURPLE, glove: INK_PURPLE,
    panel: PALETTE.hotPink, lens: PALETTE.hotPink, badge: OFF_WHITE, pad: OFF_WHITE,
    stubble: '#a97855', browRidge: '#e5a57c', shoe: OFF_WHITE, sole: INK_PURPLE,
  },
  outfit: { collar: false, lanyard: false, logo: false, headset: false },
  kit: true,
  lowDip: -0.05,     // crouches deeper in low cover so the spiky hair stays below the wall top
  // The resting face is a heavy-browed scowl with gritted teeth; the other expressions are the Associate's.
  face: {
    ...ASSOCIATE.face, brow: 'uni', fixedSmile: 0, eyeColor: PALETTE.eyeWhite, eyeGlow: false, teeth: true,
    neutral: { browAngle: 0.55, browY: -0.12, lid: 0.25, pupilScale: 0.8, mouthCurve: -0.45, mouthOpen: 0.3 },
  },
});

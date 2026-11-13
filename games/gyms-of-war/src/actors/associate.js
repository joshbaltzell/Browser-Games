import { PALETTE } from '../render/palette.js';

// The Associate: a cloned membership agent. Purple polo, lanyard,
// headset, slick hair, khakis, and a smile that never leaves. (Now an alien: acid-green skin and glowing eyes.)
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
const POLO = mix(mix(SHIRT, PALETTE.hotPink, 0.3), PALETTE.ink, 0.12);   // the blob aliens' polo: the reference's magenta-leaning purple
export const GOLD = '#ffcf3a';
// The Glorp: acid-green jelly skin with a pale lime glow on the lit edge (the toon rim, tinted), and two glowing yellow-green eyes.
export const ALIEN_SKIN = '#8fe04a';
const ALIEN_HAIR = mix(ALIEN_SKIN, PALETTE.ink, 0.6);
const ALIEN_RIM = { rim: 0.55, rimColor: '#e4ff8a' };
export const ALIEN_EYES = Object.freeze({ eyeColor: '#e8ff3a', eyeGlow: true });
// The blob aliens' lighter green bubbles and their droopy yellow-white eyes (a flat, unlit colour).
export const ALIEN_SPOT = '#d4ff6a';
export const BLOB_EYES = Object.freeze({ eyeColor: '#f2eea0', eyeGlow: true });

// Every enemy kind's colourway, in one table. `associate` is the human rig's (the target dummy, Tobble and Doc derive from it); the blob
// aliens (the Rep and the Trainer) have their own below.
export const ENEMY_COLORS = deepFreeze({
  associate: {
    shirt: SHIRT,
    collar: mix(SHIRT, PALETTE.ink, 0.25),
    logo: PALETTE.gel,
    pants: mix(PALETTE.planet, PALETTE.ink, 0.3),        // khakis
    skin: ALIEN_SKIN,
    hair: ALIEN_HAIR,
    ...ALIEN_RIM,
    shoe: mix(PALETTE.ink, SHIRT, 0.3),
    sole: PALETTE.cream,
    lanyard: PALETTE.hotPink,
    badge: PALETTE.cream,
    badgeStripe: PALETTE.teal,
    headset: mix(PALETTE.ink, PALETTE.lilac, 0.25),
    mic: PALETTE.hotPink,
  },
  // The blob aliens (GlorpFit Employees and Personal Trainers): purple polo and dark purple trousers, purple-and-cream sneakers.
  blobRep: {
    shirt: POLO,
    collar: mix(POLO, PALETTE.ink, 0.2),
    logo: PALETTE.gel,
    pants: mix(SHIRT, PALETTE.ink, 0.62),
    skin: ALIEN_SKIN,
    spot: ALIEN_SPOT,
    hair: ALIEN_HAIR,
    ...ALIEN_RIM,
    shoe: mix(SHIRT, PALETTE.ink, 0.1),
    sole: PALETTE.cream,
    toe: PALETTE.cream,
    badge: PALETTE.cream,
    badgeStripe: PALETTE.ink,
    button: PALETTE.cream,
    cuff: mix(POLO, PALETTE.ink, 0.3),
    band: PALETTE.cream,
  },
  trainer: {
    shirt: mix(PALETTE.lilac, SHIRT, 0.55),                // the tank top: a bluer, lighter violet than the polo
    collar: mix(PALETTE.lilac, SHIRT, 0.55),
    logo: PALETTE.gel,
    pants: mix(SHIRT, PALETTE.ink, 0.62),
    skin: ALIEN_SKIN,
    spot: ALIEN_SPOT,
    hair: ALIEN_HAIR,
    ...ALIEN_RIM,
    shoe: mix(SHIRT, PALETTE.ink, 0.1),
    sole: PALETTE.cream,
    toe: PALETTE.cream,
    badge: PALETTE.cream,
    badgeStripe: PALETTE.ink,
    button: PALETTE.cream,
    cuff: mix(PALETTE.lilac, SHIRT, 0.55),
    band: PALETTE.hotPink,                                  // the sweatband
  },
  // The Cancellation Manager (the boss): the blob in the reference's purple polo, cream trim, gold buckle and green goo tank.
  boss: {
    logo: PALETTE.gel,
    skin: ALIEN_SKIN,
    spot: ALIEN_SPOT,
    hair: ALIEN_HAIR,
    ...ALIEN_RIM,
    badge: PALETTE.cream,
    badgeStripe: PALETTE.hotPink,
    button: PALETTE.cream,
    band: PALETTE.cream,
    shirt: POLO,
    collar: mix(POLO, PALETTE.ink, 0.2),
    pants: mix(SHIRT, PALETTE.ink, 0.62),
    shoe: mix(SHIRT, PALETTE.ink, 0.1),
    sole: PALETTE.cream,
    toe: PALETTE.cream,
    cuff: mix(POLO, PALETTE.ink, 0.3),
    pad: mix(SHIRT, PALETTE.hotPink, 0.2),                 // the shoulder pads
    trim: PALETTE.cream,                                    // the piping and the pad trim
    belt: PALETTE.ink,
    buckle: GOLD,
    tank: ALIEN_SKIN,                                       // the goo tank on the back and the cannon's canister
    pack: mix(SHIRT, PALETTE.ink, 0.45),
    gun: mix(PALETTE.ink, SHIRT, 0.35),
    clip: GOLD,
    paper: PALETTE.cream,
    lanyard: PALETTE.hotPink,
    headset: mix(PALETTE.ink, PALETTE.lilac, 0.25),
    mic: PALETTE.hotPink,
  },
});

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
  colors: ENEMY_COLORS.associate,
  outfit: { collar: true, lanyard: true, logo: true, headset: true },
  face: {
    eyeRadius: 0.072, eyeSpacing: 0.158, eyeY: 0.035, eyeZ: 0.204,
    mouthY: -0.105, mouthWidth: 0.15, mouthZ: 0.19,
    brow: 'pair', seed: 6, fixedSmile: 0.75,
    ...ALIEN_EYES,
  },
});

// ------------------------------------------------------------ the blob aliens

// The blob body: one bean-shaped green mass (head and torso with no neck), a polo or tank top over its lower two thirds, thick arms with
// mitten hands. blobSpec(opts) builds a whole character spec from a few knobs, so the Rep, the Trainer and the boss (which is just a bigger
// blob in other clothes) share one body:
//   width    multiplies the girth of the mass, the trousers, the arms and the shoulders (1 = a Rep)
//   scale    multiplies every length (1 = a 1.8 m Rep); a boss would pass about 1.5 here or scale the view's root instead
//   costume  'polo' (collar, two buttons, a name tag, short sleeves) or 'tank' (a sleeveless top and a sweatband)
// The clips read hipHeight, the shoulder and hip points and the limb lengths, which are scaled the same way, so they play unchanged.
const scaleProfile = (profile, w, h) => profile.map(([r, y]) => [r * w, y * h]);
export function blobSpec({ name, colors, width = 1, scale = 1, costume = 'polo', seed = 6, outfit = {}, eyeColor, lowDip = 0 }) {
  const w = width * scale, h = scale;
  const tank = costume === 'tank';
  const shirt = tank
    ? [[0, -0.16], [0.3, -0.16], [0.345, -0.12], [0.375, -0.03], [0.375, 0.08], [0.355, 0.2], [0.3, 0.3], [0.26, 0.37], [0.2, 0.42], [0.1, 0.45], [0, 0.46]]
    : [[0, -0.16], [0.3, -0.16], [0.345, -0.12], [0.375, -0.03], [0.38, 0.08], [0.365, 0.2], [0.33, 0.3], [0.28, 0.38], [0.2, 0.43], [0.1, 0.46], [0, 0.47]];
  const spec = {
    name,
    body: 'blob',
    blob: { width, scale, costume },
    lowDip,             // extra hip drop in low cover: the blob crown is 1.02 m, so the Rep and Trainer crouch deeper (see poses.js)
    height: 1.8 * h,
    hipHeight: 0.72 * h,
    armLength: 0.52 * h,
    legLength: 0.6 * h,
    shoulderL: [0.37 * w, 1.0 * h, 0],
    shoulderR: [-0.37 * w, 1.0 * h, 0],
    hipL: [0.145 * w, 0.665 * h, 0],
    hipR: [-0.145 * w, 0.665 * h, 0],
    ankleHeight: 0.135 * h,
    neckY: 1.14 * h,
    armRadius: 0.078 * w,
    legRadius: 0.13 * w,
    torso: {
      depth: 0.8,
      pants: scaleProfile([[0, -0.3], [0.2, -0.28], [0.3, -0.2], [0.345, -0.1], [0.36, 0], [0, 0.04]], w, h),
      shirt: scaleProfile(shirt, w, h),
      sleeve: (tank ? 0.1 : 0.11) * w,
    },
    head: {
      // A pear: wider at the jaw than the crown, flattened in front for the face, rounded on top.
      rx: 0.3 * w, ry: 0.34 * h, rz: 0.29 * w, power: 2.6,
      centerY: 0.34 * h,
      flatZ: 0.18 * w, flatK: 0.25,
      pear: 0.17,                 // how much wider the jaw is than the crown (the x scale at the chin)
      nose: 0, ear: 0,
    },
    hair: { thickness: 0, lift: 0, back: 0, quiff: false },
    hand: { radius: 0.108 * w },
    shoe: { length: 0.44 * w, width: 0.25 * w, height: 0.17 * h },
    colors,
    outfit: { collar: !tank, buttons: !tank, nameTag: !tank, tank, sweatband: tank, ...outfit },
    face: {
      eyeRadius: 0.098 * w, eyeSpacing: 0.225 * w, eyeY: 0.07 * h, eyeZ: 0.226 * w,
      mouthY: -0.12 * h, mouthWidth: 0.27 * w, mouthZ: 0.214 * w,
      brow: 'pair', seed, fixedSmile: 0, teeth: true, expressions: 'blob',
      ...(eyeColor ? { eyeColor, eyeGlow: true } : BLOB_EYES),
    },
  };
  return deepFreeze(spec);
}

// Low cover: the blob Rep's crown is about 1.03 m, so it crouches deeper than Doc (poses.js lowDip) to keep the head under the 0.95 m rule (the blind
// crouch takes 0.6 of it). The Trainer holds no cover (trainerBrain), so no low-cover clip plays on it and it keeps the standard hips.
const BLOB_LOW_DIP = -0.18;

// The GlorpFit Employee ("Rep") and the Personal Trainer: the blob body in the polo and in the tank top. The view scales the Trainer by
// TUNING.trainer.scaleW and scaleH on top of its width here, so it reads about 1.25 times a Rep's girth.
export const GLORP_REP = blobSpec({ name: 'associate', colors: ENEMY_COLORS.blobRep, seed: 6, lowDip: BLOB_LOW_DIP });
export const TRAINER = blobSpec({ name: 'trainer', colors: ENEMY_COLORS.trainer, width: 1.04, costume: 'tank', seed: 11 });

// The Cancellation Manager (the boss; the view scales it by TUNING.boss.scale): the blob body at 1.2 girth, in the reference's costume. The
// outfit flags are merged into the torso, head and hand meshes, so the boss draws as many meshes as a Rep (plus its cannon and the page).
export const OVERLORD = deepFreeze(blobSpec({
  name: 'overlord', colors: ENEMY_COLORS.boss, width: 1.2, costume: 'polo', seed: 21,
  outfit: { headset: true, pads: true, belt: true, piping: true, lanyard: true, backpack: true, clipboard: true },
}));

// The on-screen prompt lines, with the key swapped for the device in use. Pure strings: no DOM.
export const KEYS = Object.freeze({
  kbm: Object.freeze({ melee: 'F', interact: 'E', grenade: 'G' }),
  pad: Object.freeze({ melee: 'B', interact: 'X', grenade: 'LB' }),
});

const LINES = {
  throw: k => `Release ${k.grenade}  throw`,
  reviveTobble: k => `Hold ${k.interact}  revive Tobble`,
  finish: k => `${k.interact}  finish`,
  revving: () => 'Cheat Day: run into a Rep',
  bash: k => `${k.melee}  bash`,
  rev: k => `Hold ${k.melee}  rev Cheat Day`,
  giveUp: k => `Hold ${k.interact}  renew your membership`,
  giveUpTobble: k => `Tobble is coming! Hold ${k.interact} to renew your membership`,
  sauna: k => `Close the Spawn Sauna (${k.grenade} kettlebell)`,
};

// device is 'kbm' or 'pad'; anything else reads as kbm. An unknown kind gives ''.
export function promptText(kind, device = 'kbm') {
  const line = Object.hasOwn(LINES, kind) ? LINES[kind] : null;
  return line ? line(KEYS[device] || KEYS.kbm) : '';
}

// The slam thud, now one recipe of the sound bank. Silent when there is no AudioContext or it will not start.
import { createSfx } from './sfx.js';

export function createThud(opts) {
  const sfx = createSfx(opts);
  return { play(volume) { sfx.play('thud', volume); } };
}

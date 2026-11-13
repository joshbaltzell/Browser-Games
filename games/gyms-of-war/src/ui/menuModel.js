// The menus' content and rules as pure data (the DOM layer is menus.js): the title and pause items, the controls card, the story card,
// and how a selection moves. No DOM, no WebGL.
import { KEYS } from './prompts.js';

export const TITLE = 'GYMS OF WAR';
export const TAGLINE = 'NO PAIN, NO CANCEL';

// The title: Continue only when a checkpoint past the first arena is saved.
export function titleItems({ saved = 0, arenaTitle = '' } = {}) {
  const items = [];
  if (saved > 0) items.push({ id: 'continue', label: arenaTitle ? `Continue \u2014 ${arenaTitle}` : 'Continue' });
  items.push({ id: 'new', label: 'New Run' }, { id: 'settings', label: 'Settings' }, { id: 'controls', label: 'Controls' }, { id: 'back', label: 'Back to games' });
  return items;
}

export const PAUSE_ITEMS = Object.freeze([
  Object.freeze({ id: 'resume', label: 'Resume' }),
  Object.freeze({ id: 'settings', label: 'Settings' }),
  Object.freeze({ id: 'controls', label: 'Controls' }),
  Object.freeze({ id: 'restart', label: 'Restart arena' }),
  Object.freeze({ id: 'quit', label: 'Quit to title' }),
]);

// Keys and pad side by side (the pad is the Gears of War layout). The bash, interact, kettlebell and finish keys come from prompts.js, so the card always matches the live prompts.
export function controlRows(keys = KEYS) {
  const k = keys.kbm, p = keys.pad;
  return [
    ['Move', 'W A S D', 'Left stick'],
    ['Look', 'Mouse', 'Right stick'],
    ['Aim (pop out of cover)', 'Right mouse', 'LT'],
    ['Fire (no aim in cover: blind fire)', 'Left mouse', 'RT'],
    ['Reload (again on the bright zone)', k.reload, p.reload],
    ['Take cover, vault, roll (tap) / sprint (hold)', k.cover, p.cover],
    ['Bash (tap) / rev Cheat Day (hold)', k.melee, p.melee],
    ['Kettlebell: hold to aim, release to throw (pad: equip, LT aim, RT throw)', k.grenade, p.grenade],
    ['Pick up, revive Tobble, renew, cancel', k.interact, p.interact],
    ['Finish a downed alien', k.finish, p.finish],
    ['Turn toward the objective (tap)', 'Tab', 'Y'],
    ['Tac/Com: objective and Tobble marked (hold)', '\u2014', 'LB'],
    ['The Regret / Guest Pass', '1 / 3 or wheel', 'D-pad Right / Down'],
    ['Pause', 'Esc', 'Start'],
    ['This card', '\u2014', 'View'],
  ];
}

// The opening card (the first play): the premise, in the story's voice.
export const INTRO_LINES = Object.freeze([
  'Seven years ago, on January 2nd, Doc Vex signed up for GlorpFit Orbital.',
  'He went twice.',
  'He has been billed $49.99 every month since.',
  'GlorpFit has been taken over by the Glorp, aliens that feed on unused memberships.',
  'Cancellation must be made in person, at the Cancellation Desk, on the top floor.',
  'It is Tuesday. It is 1:30.',
]);

// Where a selection goes: dir +1 or -1, wrapping.
export function moveSelection(index, count, dir) {
  if (!(count > 0)) return 0;
  return (((index + (dir < 0 ? -1 : 1)) % count) + count) % count;
}

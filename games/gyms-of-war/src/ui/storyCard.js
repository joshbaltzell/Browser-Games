// The story card overlay (#cr-story): the elevator ride between arenas (a framed cab, a floor counter ticking up, the PA's muzak line, the
// dialogue and the new cancellation hours) and the one-liner before an arena restarts after a down. Sits over the black fade and under the
// menus. Content comes from story.js; this file is only DOM. The card ends in run.js (its timer or a skip); this only draws it.
import { SPEAKER_COLORS } from '../director/barks.js';
import { floorAt, climbProgress } from '../story.js';

const COLORS = { ...SPEAKER_COLORS, Doc: '#ff8a1f' };   // Doc and the PA would both be cream

function el(tag, cls, parent, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  if (parent) parent.appendChild(e);
  return e;
}

const LINE_GAP = 0.55, LINE_START = 0.45;   // s: when each dialogue line fades in

export function createStoryCard() {
  const root = el('div', null, document.body);
  root.id = 'cr-story';
  root.hidden = true;
  let ride = null, counter = null, shown = -1, hint = null, dinged = false, onDing = null;

  function lines(parent, list) {
    list.forEach((l, i) => {
      const row = el('div', 'cr-story-line', parent);
      row.style.animationDelay = `${(LINE_START + i * LINE_GAP).toFixed(2)}s`;
      const who = el('span', 'cr-bark-who', row, l.who === 'PA' ? 'PA:' : `${l.who}:`);
      who.style.color = COLORS[l.who] || '#fff3d6';
      el('span', 'cr-story-text', row, l.text);
    });
  }

  const api = {
    get visible() { return !root.hidden; },
    // card: from story.transitionCard(); ding() plays once when the counter arrives.
    showRide(card, ding) {
      root.replaceChildren(); root.hidden = false; root.dataset.kind = 'ride';
      ride = card; shown = -1; dinged = false; onDing = ding || null;
      const cab = el('div', 'cr-cab', root);
      const head = el('div', 'cr-cab-head', cab);
      el('span', 'cr-cab-arrow', head, '▲');
      counter = el('span', 'cr-cab-floor', head, String(card.from));
      el('div', 'cr-cab-name', cab, card.title.toUpperCase());
      lines(el('div', 'cr-story-lines', cab), card.lines);
      el('div', 'cr-cab-hours', cab, card.hours);
      el('div', 'cr-cab-muzak', cab, card.muzak);
      hint = el('div', 'cr-menu-hint cr-story-hint', cab, 'Press any key, click, or A');
      hint.style.visibility = 'hidden';
    },
    showDefeat(list) {
      root.replaceChildren(); root.hidden = false; root.dataset.kind = 'defeat';
      ride = null; counter = null; dinged = true;
      const box = el('div', 'cr-defeat', root);
      lines(box, list);
      hint = el('div', 'cr-menu-hint cr-story-hint', box, 'Press any key');
      hint.style.visibility = 'hidden';
    },
    // Every frame while the card is up: the floor counter and the skip hint.
    tick(elapsed, length, skipAfter) {
      if (root.hidden) return;
      if (hint) hint.style.visibility = elapsed >= skipAfter ? 'visible' : 'hidden';
      if (!ride || !counter) return;
      const u = climbProgress(elapsed, length);
      const n = floorAt(ride.from, ride.to, u);
      if (n !== shown) {
        shown = n;
        counter.textContent = n >= ride.to && ride.top ? 'TOP' : String(n);
      }
      if (!dinged && u >= 1) { dinged = true; root.classList.add('arrived'); if (onDing) onDing(); }
    },
    hide() { root.hidden = true; root.classList.remove('arrived'); root.replaceChildren(); ride = null; counter = null; hint = null; },
    text() { return root.hidden ? '' : root.textContent; },
  };
  return api;
}

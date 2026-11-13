import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { LOGO_SVG, HUB_ART_SVG, EMBLEM_SVG, FAVICON_HREF } from '../src/ui/logo.js';

const read = rel => readFileSync(new URL(rel, import.meta.url), 'utf8');

test('the logo is SVG with the name, the tag, the game colours and no fonts to load', () => {
  assert.match(LOGO_SVG, /^<svg [^>]*viewBox="0 0 440 170"/);
  assert.match(LOGO_SVG, /aria-label="Gyms of War: No Pain, No Cancel"/);
  assert.ok(LOGO_SVG.includes('NO PAIN, NO CANCEL'));
  for (const c of ['#b6ff3c', '#7a3cff', '#ff8a1f']) assert.ok(LOGO_SVG.includes(c), c);
  assert.doesNotMatch(LOGO_SVG, /@font-face|<image|href=/);
  assert.equal(LOGO_SVG.match(/<svg/g).length, 1);
});

test('the hub card art uses the card viewBox and hub.js carries exactly this art', () => {
  assert.match(HUB_ART_SVG, /viewBox="0 0 120 80"/);
  assert.ok(read('../../../hub.js').includes(HUB_ART_SVG), 'hub.js art is stale: regenerate it from src/ui/logo.js');
  assert.ok(read('../../../hub.js').includes('games/gyms-of-war/index.html'));
});

test('the game page has the emblem as an inline SVG favicon, and the title screen shows the logo', () => {
  assert.ok(read('../index.html').includes(`<link rel="icon" type="image/svg+xml" href="${FAVICON_HREF}">`));
  assert.ok(FAVICON_HREF.startsWith('data:image/svg+xml,') && decodeURIComponent(FAVICON_HREF) === 'data:image/svg+xml,' + EMBLEM_SVG);
  assert.match(read('../src/ui/menus.js'), /LOGO_SVG/);
});

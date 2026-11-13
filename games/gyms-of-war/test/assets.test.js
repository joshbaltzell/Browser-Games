import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync, existsSync } from 'node:fs';

const game = rel => new URL(`../${rel}`, import.meta.url);
const read = rel => readFileSync(new URL(rel, import.meta.url), 'utf8');
const size = rel => statSync(game(rel)).size;

test('the logo, emblem and favicon files exist, within their size limits', () => {
  assert.ok(existsSync(game('assets/logo-full.webp')));
  assert.ok(size('assets/logo-full.webp') < 250 * 1024, 'logo-full.webp is over 250 KB');
  assert.ok(size('assets/emblem-256.webp') < 250 * 1024);
  assert.ok(size('assets/favicon-64.png') < 50 * 1024);
});

test('the favicon is a 64 px PNG', () => {
  const b = readFileSync(game('assets/favicon-64.png'));
  assert.equal(b.toString('ascii', 1, 4), 'PNG');
  assert.equal(b.readUInt32BE(16), 64);
  assert.equal(b.readUInt32BE(20), 64);
});

test('the title screen shows the full logo image, not an SVG', () => {
  const menus = read('../src/ui/menus.js');
  assert.match(menus, /const LOGO_SRC = 'assets\/logo-full\.webp'/);
  assert.doesNotMatch(menus, /logo\.js/);
});

test('the game page uses the favicon image', () => {
  assert.ok(read('../index.html').includes('<link rel="icon" type="image/png" sizes="64x64" href="assets/favicon-64.png">'));
});

test('the hub card references the emblem asset, and the file it names exists', () => {
  const hub = read('../../../hub.js');
  assert.ok(hub.includes('<img src="games/gyms-of-war/assets/emblem-256.webp" alt="" />'), 'hub card should use the emblem image');
  assert.ok(hub.includes('games/gyms-of-war/index.html'));
  assert.ok(existsSync(new URL('../../../games/gyms-of-war/assets/emblem-256.webp', import.meta.url)));
});

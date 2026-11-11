import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const js = new URL('../game.js', import.meta.url);

test('index.html loads only classic local files', () => {
  assert.ok(!/type\s*=\s*["']module["']/.test(html));
  assert.ok(!/https?:\/\//.test(html));
  assert.ok(/<script src="game\.js"><\/script>/.test(html));
  assert.ok(html.includes('../../index.html'));
});

test('game.js is a classic script under 1.5 MB', () => {
  const src = readFileSync(js, 'utf8');
  assert.ok(statSync(js).size < 1.5 * 1024 * 1024);
  assert.ok(!/^\s*(import|export)\s/m.test(src));
});

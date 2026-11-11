import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

function fail(msg) {
  console.error(`filecheck FAILED: ${msg}`);
  process.exit(1);
}

function findChrome() {
  const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (existsSync(chrome)) return chrome;
  const cache = join(homedir(), 'Library/Caches/ms-playwright');
  if (existsSync(cache)) {
    const dirs = readdirSync(cache).filter((d) => d.startsWith('chromium-')).sort((a, b) => parseInt(b.slice(9)) - parseInt(a.slice(9)));
    for (const d of dirs) {
      for (const p of [
        'chrome-mac/Chromium.app/Contents/MacOS/Chromium',
        'chrome-mac-arm64/Chromium.app/Contents/MacOS/Chromium',
      ]) {
        const full = join(cache, d, p);
        if (existsSync(full)) return full;
      }
    }
  }
  return null;
}

const chrome = findChrome();
if (!chrome) fail('no Chrome found (looked for Google Chrome.app, then Chromium in ~/Library/Caches/ms-playwright)');

const url = pathToFileURL(fileURLToPath(new URL('../index.html', import.meta.url))).href;
const WEBGL_COPY = 'Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.';

function dump(flags, target = url) {
  const r = spawnSync(chrome, ['--headless=new', '--virtual-time-budget=4000', '--dump-dom', ...flags, target], {
    encoding: 'utf8',
    timeout: 60000,
  });
  if (r.error) fail(`could not run Chrome: ${r.error.message}`);
  if (r.status !== 0) fail(`Chrome exited with status ${r.status}${r.signal ? ` (signal ${r.signal})` : ''}: ${(r.stderr || '').trim().slice(-500)}`);
  return r.stdout || '';
}

const run1 = dump(['--enable-unsafe-swiftshader', '--use-angle=swiftshader']);
if (!run1.includes('data-cr-ready="1"')) fail('run 1 (with WebGL) did not reach data-cr-ready="1"');
if (run1.includes('data-cr-error')) fail('run 1 (with WebGL) set data-cr-error');
console.log('run 1 ok: boots with WebGL');

const run2 = dump(['--disable-gpu', '--disable-3d-apis']);
if (!run2.includes('data-cr-error="webgl"')) fail('run 2 (WebGL disabled) did not reach data-cr-error="webgl"');
if (!run2.includes(WEBGL_COPY)) fail('run 2 (WebGL disabled) did not show the WebGL error copy');
console.log('run 2 ok: shows WebGL error');

const run3 = dump(['--enable-unsafe-swiftshader', '--use-angle=swiftshader'], url + '?look');
if (!run3.includes('data-cr-ready="1"')) fail('run 3 (look test, with WebGL) did not reach data-cr-ready="1"');
if (run3.includes('data-cr-error')) fail('run 3 (look test) set data-cr-error');
console.log('run 3 ok: look test boots with WebGL');

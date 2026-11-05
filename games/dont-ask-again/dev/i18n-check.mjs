#!/usr/bin/env node
// Translation coverage check for Don't Ask Again.
//
// Boots the game in headless Chrome to record every string that goes through tr() at startup
// (all content lists and the static page text), adds every tr('…') literal in game.js (the
// strings built at runtime), and reports what i18n.js is missing for each language.
//
//   node games/dont-ask-again/dev/i18n-check.mjs            # summary + missing keys
//   node games/dont-ask-again/dev/i18n-check.mjs --json out.json   # also write the full key list
//
// Needs Node 22+ (built-in WebSocket) and Google Chrome. Set CHROME=/path/to/chrome to override.

import { spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, existsSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const GAME_DIR = resolve(here, '..');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const jsonOut = process.argv.includes('--json') ? process.argv[process.argv.indexOf('--json') + 1] : null;

// --- strings built at runtime: every tr('literal') in the source ---
const src = readFileSync(join(GAME_DIR, 'game.js'), 'utf8');
const literal = [];
for (const m of src.matchAll(/tr\(\s*('(?:[^'\\]|\\.)*')/g)) literal.push(Function('return ' + m[1])());
// tr() calls whose key comes from a lookup table rather than a literal
const indirect = ['Theme: Light', 'Theme: Dark', 'Theme: Auto'];

// --- strings localized at startup: boot the game and record them ---
const profile = mkdtempSync(join(tmpdir(), 'daa-i18n-'));
const chrome = spawn(CHROME, ['--headless=new', '--remote-debugging-port=0', '--user-data-dir=' + profile,
  '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore' });
const cleanup = () => { try { chrome.kill(); } catch (e) { /* gone */ } try { rmSync(profile, { recursive: true, force: true }); } catch (e) { /* ignore */ } };
process.on('exit', cleanup);
const portFile = join(profile, 'DevToolsActivePort');
for (let i = 0; i < 100 && !existsSync(portFile); i++) await new Promise(r => setTimeout(r, 100));
const port = readFileSync(portFile, 'utf8').split('\n')[0];
const target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === 'page');
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(r => { ws.onopen = r; });
let id = 0;
const pending = new Map();
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await send('Page.enable');
await send('Page.addScriptToEvaluateOnNewDocument', { source: 'window.__i18nCollect = new Set(); try { localStorage.clear(); } catch (e) {}' });
await send('Page.navigate', { url: 'file://' + join(GAME_DIR, 'index.html') + '?nointro&lang=en' });
await new Promise(r => setTimeout(r, 1500));
const boot = (await send('Runtime.evaluate', {
  expression: 'DontAskAgain.openIntro(); [...window.__i18nCollect]', returnByValue: true,
})).result.result.value || [];
const tables = (await send('Runtime.evaluate', { expression: 'window.DAA_I18N', returnByValue: true })).result.result.value || {};
ws.close();
cleanup();

// --- compare ---
const keys = [...new Set([...boot, ...literal, ...indirect])].filter(k => /[A-Za-z]/.test(k));
console.log(`${keys.length} translatable strings (${boot.length} seen at startup, ${literal.length} tr() literals in game.js)`);
let missingAny = false;
for (const lang of ['es', 'pt']) {
  const t = tables[lang] || {};
  const missing = keys.filter(k => !(k in t));
  const unused = Object.keys(t).filter(k => !keys.includes(k));
  console.log(`\n${lang}: ${keys.length - missing.length}/${keys.length} translated` + (unused.length ? `, ${unused.length} no longer used` : ''));
  missing.slice(0, 40).forEach(k => console.log('  missing:', JSON.stringify(k)));
  if (missing.length > 40) console.log(`  …and ${missing.length - 40} more`);
  if (missing.length) missingAny = true;
}
if (jsonOut) writeFileSync(jsonOut, JSON.stringify(keys, null, 1));
process.exit(missingAny ? 1 : 0);

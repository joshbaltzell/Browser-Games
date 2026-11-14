#!/usr/bin/env node
// Headless smoke test over CDP. Zero dependencies (Node 22+: global fetch and WebSocket).
// Usage: node tools/cdp-smoke.js <path/to/index.html> [--wait 3000] [--shot out.png] [--eval "expr"]
// Each run uses a free debugging port and a fresh temporary profile, so runs can overlap.
const fs = require('fs');
const os = require('os');
const net = require('net');
const path = require('path');
const { spawn } = require('child_process');

const argv = process.argv.slice(2);
function opt(name, dflt) { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : dflt; }
const target = argv.find((a, i) => !a.startsWith('--') && !['--wait', '--shot', '--eval'].includes(argv[i - 1]));
if (!target) { console.error('usage: node tools/cdp-smoke.js <index.html> [--wait ms] [--shot out.png] [--eval expr]'); process.exit(2); }
const waitMs = parseInt(opt('--wait', '3000'), 10);
const shotPath = opt('--shot', null);
const evalExpr = opt('--eval', null);
const sleep = ms => new Promise(r => setTimeout(r, ms));

function findChrome() {
  const root = path.join(os.homedir(), 'Library/Caches/ms-playwright');
  const dirs = fs.readdirSync(root).filter(d => /^chromium-\d+$/.test(d))
    .sort((a, b) => parseInt(b.split('-')[1], 10) - parseInt(a.split('-')[1], 10));
  for (const d of dirs) {
    const base = path.join(root, d, 'chrome-mac-arm64');
    if (!fs.existsSync(base)) continue;
    for (const app of fs.readdirSync(base).filter(n => n.endsWith('.app'))) {
      const exe = path.join(base, app, 'Contents/MacOS', app.replace(/\.app$/, ''));
      if (fs.existsSync(exe)) return exe;
    }
  }
  throw new Error('no cached Chrome found in ' + root);
}
function freePort() {
  return new Promise((res, rej) => {
    const s = net.createServer();
    s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); });
    s.on('error', rej);
  });
}

(async () => {
  const file = path.resolve(target);
  if (!fs.existsSync(file)) { console.error('not found: ' + file); process.exit(2); }
  const port = await freePort();
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-smoke-'));
  const chrome = spawn(findChrome(), [
    '--headless=new', '--remote-debugging-port=' + port, '--user-data-dir=' + profile,
    '--no-first-run', '--no-default-browser-check', '--window-size=1280,720', 'about:blank'
  ], { stdio: 'ignore' });
  const errors = [];
  let ws;
  const cleanup = () => {
    try { if (ws) ws.close(); } catch (e) { /* ignore */ }
    try { chrome.kill('SIGKILL'); } catch (e) { /* ignore */ }
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) { /* ignore */ }
  };
  try {
    let tab = null;
    for (let i = 0; i < 100 && !tab; i++) {
      try {
        const list = await (await fetch('http://127.0.0.1:' + port + '/json')).json();
        tab = list.find(t => t.type === 'page');
      } catch (e) { /* not up yet */ }
      if (!tab) await sleep(100);
    }
    if (!tab) throw new Error('Chrome did not start');
    ws = new WebSocket(tab.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = () => rej(new Error('websocket failed')); });
    let id = 0; const pend = new Map();
    ws.onmessage = e => {
      const m = JSON.parse(e.data);
      if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); return; }
      if (m.method === 'Runtime.exceptionThrown') {
        const d = m.params.exceptionDetails;
        errors.push('exception: ' + ((d.exception && d.exception.description) || d.text) + ' (line ' + d.lineNumber + ')');
      } else if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') {
        errors.push('console.error: ' + m.params.args.map(a => a.value !== undefined ? a.value : a.description).join(' '));
      } else if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error') {
        errors.push('log: ' + m.params.entry.text + (m.params.entry.url ? ' ' + m.params.entry.url : ''));
      }
    };
    const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
    await send('Runtime.enable'); await send('Log.enable'); await send('Page.enable');
    await send('Page.bringToFront');
    await send('Page.navigate', { url: 'file://' + file });
    await sleep(waitMs);
    if (evalExpr) {
      const r = await send('Runtime.evaluate', { expression: evalExpr, returnByValue: true, awaitPromise: true });
      if (r.result && r.result.exceptionDetails) errors.push('eval failed: ' + JSON.stringify(r.result.exceptionDetails).slice(0, 300));
      else console.log('eval: ' + JSON.stringify(r.result.result.value));
    }
    if (shotPath) {
      const r = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(shotPath, Buffer.from(r.result.data, 'base64'));
      console.log('screenshot: ' + shotPath);
    }
  } catch (e) {
    errors.push('smoke tool: ' + e.message);
  }
  cleanup();
  if (errors.length) {
    console.log('smoke FAILED, ' + errors.length + ' error' + (errors.length === 1 ? '' : 's'));
    errors.forEach(e => console.log('  ' + e));
    process.exit(1);
  }
  console.log('smoke ok, 0 errors');
  process.exit(0);
})();

#!/usr/bin/env node
// Builds an upload-ready zip for each game: dist/<slug>.zip with index.html at the top.
//
//   node tools/pack.js                         every game
//   node tools/pack.js look-alive picnic-raid  just these
//   node tools/pack.js --back https://joshbaltzell.com/games
//
// What it does to the copy (the games in games/ are never changed):
//   - copies only files tracked by git (no art-src, no stray local files)
//   - leaves out dev/test/source folders and notes (see SKIP_DIRS / SKIP_FILES)
//   - copies in the shared kit files a game loads (../kit/x.js -> kit/x.js)
//   - "Back to games" links: hidden by default, or pointed at --back <url>
//   - checks nothing still points outside the folder, then zips it
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const GAMES = path.join(ROOT, 'games');
const DIST = path.join(ROOT, 'dist');
const SKIP_DIRS = new Set(['dev', 'test', 'src', 'spike', 'art-src', 'node_modules', '.playwright-cli']);
const SKIP_FILES = [/^(?!NOTICES|LICENSE).*\.md$/i, /^package(-lock)?\.json$/, /^\./];   // license notices stay
const NOT_GAMES = new Set(['kit']);
const HUB = '../../index.html';

const args = process.argv.slice(2);
let back = null;
const only = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--back') back = args[++i];
  else if (args[i] === '-h' || args[i] === '--help') { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 15).join('\n')); process.exit(0); }
  else only.push(args[i].replace(/^games\//, '').replace(/\/$/, ''));
}
if (back !== null && !back) { console.error('--back needs a URL'); process.exit(1); }

const slugs = (only.length ? only : fs.readdirSync(GAMES))
  .filter(s => !NOT_GAMES.has(s) && fs.existsSync(path.join(GAMES, s, 'index.html')));
if (!slugs.length) { console.error('No games found' + (only.length ? ' for: ' + only.join(', ') : '')); process.exit(1); }

const tracked = execFileSync('git', ['ls-files', '-z', 'games'], { cwd: ROOT, encoding: 'utf8' }).split('\0').filter(Boolean);
const escAttr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function keep(rel) {
  const parts = rel.split('/');
  if (parts.slice(0, -1).some(p => SKIP_DIRS.has(p))) return false;
  return !SKIP_FILES.some(re => re.test(parts[parts.length - 1]));
}

function fixHtml(html) {
  html = html.replace(/(src|href)="\.\.\/kit\//g, '$1="kit/');
  return html.replace(/<a\b([^>]*?)href="\.\.\/\.\.\/index\.html"([^>]*)>/g, (m, a, b) => back
    ? '<a' + a + 'href="' + escAttr(back) + '"' + b + '>'
    : '<a' + a + 'href="#" style="display:none" aria-hidden="true" tabindex="-1"' + b + '>');
}

function fixJs(js) {
  // Kit's computer notice builds a back link in a string; Gyms of War's bundle navigates to the hub from its pause menu.
  js = fixHtml(js);
  return js.split('window.location.href="' + HUB + '"').join(back ? 'window.location.href=' + JSON.stringify(back) : 'void 0');
}

function check(dir) {
  const problems = [];
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) return walk(p);
    if (!/\.(html|css|js)$/.test(e.name)) return;
    const text = fs.readFileSync(p, 'utf8');
    const rel = path.relative(dir, p);
    if (/["'(]\.\.\//.test(text)) problems.push(rel + ': still has a ../ path');
    const refs = [];
    if (e.name.endsWith('.html')) for (const m of text.matchAll(/\b(?:src|href)="([^"]+)"/g)) refs.push(m[1]);
    if (e.name.endsWith('.css')) for (const m of text.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) refs.push(m[1]);
    for (const r of refs) {
      if (/^(#|data:|https?:|mailto:|javascript:|\/\/)/.test(r) || (back && r === back)) continue;
      const file = path.join(path.dirname(p), decodeURI(r.split(/[?#]/)[0]));
      if (!fs.existsSync(file)) problems.push(rel + ': missing ' + r);
    }
  });
  walk(dir);
  return problems;
}

fs.mkdirSync(DIST, { recursive: true });
let failed = 0;
for (const slug of slugs) {
  const out = path.join(DIST, slug);
  const zip = path.join(DIST, slug + '.zip');
  fs.rmSync(out, { recursive: true, force: true });
  fs.rmSync(zip, { force: true });

  const prefix = 'games/' + slug + '/';
  const files = tracked.filter(f => f.startsWith(prefix)).map(f => f.slice(prefix.length)).filter(keep);
  const kitFiles = new Set();
  for (const rel of files) {
    const src = path.join(GAMES, slug, rel);
    if (!fs.existsSync(src)) continue;   // tracked but deleted locally
    const dest = path.join(out, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (rel.endsWith('.html')) {
      const html = fs.readFileSync(src, 'utf8');
      for (const m of html.matchAll(/(?:src|href)="\.\.\/kit\/([^"]+)"/g)) kitFiles.add(m[1]);
      fs.writeFileSync(dest, fixHtml(html));
    } else if (rel.endsWith('.js')) {
      fs.writeFileSync(dest, fixJs(fs.readFileSync(src, 'utf8')));
    } else {
      fs.copyFileSync(src, dest);
    }
  }
  for (const k of kitFiles) {
    fs.mkdirSync(path.dirname(path.join(out, 'kit', k)), { recursive: true });
    fs.writeFileSync(path.join(out, 'kit', k), fixJs(fs.readFileSync(path.join(GAMES, 'kit', k), 'utf8')));
  }

  const problems = check(out);
  if (problems.length) {
    failed++;
    console.log('FAIL ' + slug);
    problems.forEach(p => console.log('     ' + p));
    continue;
  }
  execFileSync('zip', ['-qrX', zip, '.'], { cwd: out });
  const mb = (fs.statSync(zip).size / 1048576).toFixed(1);
  console.log('ok   ' + slug.padEnd(24) + (mb + ' MB').padStart(8) + (kitFiles.size ? '   kit: ' + [...kitFiles].join(', ') : ''));
}
console.log('\n' + (slugs.length - failed) + ' of ' + slugs.length + ' packed into ' + path.relative(ROOT, DIST) + '/' + (back ? '  (back links -> ' + back + ')' : '  (back links hidden)'));
process.exit(failed ? 1 : 0);

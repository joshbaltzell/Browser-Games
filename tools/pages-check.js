#!/usr/bin/env node
// GitHub Pages check for one game folder. Usage: node tools/pages-check.js games/<slug>
// Looks for things that work on macOS but break on Pages: wrong case, spaces, capitals, leading
// underscores or dots, leading slashes, missing files, ES modules, fetch of local files, no back link.
const fs = require('fs');
const path = require('path');

const dir = path.resolve(process.argv[2] || '');
if (!process.argv[2] || !fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
  console.error('usage: node tools/pages-check.js games/<slug>');
  process.exit(2);
}
const problems = [];
const rel = p => path.relative(process.cwd(), p) || '.';
const bad = (file, msg) => problems.push(rel(file) + ': ' + msg);

// Folders that are not loaded by the game: templates, dev tools, source art, notes
const SKIP_DIRS = new Set(['template', 'dev', 'art-src', 'node_modules']);

function walk(d, out) {
  fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    if (e.name.startsWith('.')) return;
    const full = path.join(d, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(full, out); }
    else out.push(full);
  });
  return out;
}
const files = walk(dir, []);

// Does this path exist with this exact case? Returns '' if yes, else a reason.
function exactCase(abs) {
  const parts = path.relative(path.parse(abs).root, abs).split(path.sep);
  let cur = path.parse(abs).root;
  for (const part of parts) {
    let names;
    try { names = fs.readdirSync(cur); } catch (e) { return 'missing'; }
    if (names.includes(part)) { cur = path.join(cur, part); continue; }
    const ci = names.find(n => n.toLowerCase() === part.toLowerCase());
    return ci ? 'wrong case (on disk: ' + ci + ')' : 'missing';
  }
  return '';
}

function checkRef(fromFile, ref, baseDir) {
  ref = ref.trim();
  if (!ref || /^(https?:|data:|mailto:|javascript:|blob:|#|\/\/)/i.test(ref)) return;
  ref = ref.split('#')[0].split('?')[0];
  if (!ref) return;
  if (ref.startsWith('/')) { bad(fromFile, 'path starts with "/": ' + ref); return; }
  ref.split('/').forEach(seg => {
    if (seg === '..' || seg === '.' || seg === '') return;
    if (/[A-Z]/.test(seg)) bad(fromFile, 'capital letter in "' + seg + '" (' + ref + ')');
    if (/\s|%20/.test(seg)) bad(fromFile, 'space in "' + seg + '" (' + ref + ')');
    if (/^[_.]/.test(seg)) bad(fromFile, 'name starts with "_" or ".": "' + seg + '" (' + ref + ')');
  });
  const why = exactCase(path.resolve(baseDir, ref));
  if (why) bad(fromFile, 'file ' + why + ': ' + ref);
}

function stripComments(js) {
  return js.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[\s;,{}()])\/\/.*$/gm, '$1');
}

files.forEach(f => {
  const ext = path.extname(f).toLowerCase();
  const text = ['.html', '.css', '.js'].includes(ext) ? fs.readFileSync(f, 'utf8') : '';
  const base = path.dirname(f);
  if (ext === '.html') {
    const body = text.replace(/<!--[\s\S]*?-->/g, '');
    for (const m of body.matchAll(/\b(?:src|href)\s*=\s*["']([^"']*)["']/gi)) checkRef(f, m[1], base);
    for (const m of body.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) checkRef(f, m[1], base);
    if (/type\s*=\s*["']module["']/i.test(body)) bad(f, 'type="module" is not allowed (breaks on file://)');
    for (const m of body.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)) codeRules(f, m[1]);
  } else if (ext === '.css') {
    for (const m of text.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) checkRef(f, m[1], base);
  } else if (ext === '.js') {
    codeRules(f, text);
    if (path.basename(f) === 'manifest.js' && path.basename(base) === 'assets') {
      // src values are relative to the page (the game folder), not to assets/
      for (const m of text.matchAll(/\bsrc\s*:\s*["']([^"']+)["']/g)) checkRef(f, m[1], dir);
    }
  }
});

function codeRules(file, text) {
  const code = stripComments(text);
  if (/^\s*import\s+[\w{*"']/m.test(code) || /\bimport\s*\(/.test(code)) bad(file, '"import" is not allowed (no ES modules)');
  if (/^\s*export\s+/m.test(code)) bad(file, '"export" is not allowed (no ES modules)');
  if (/\bfetch\s*\(/.test(code)) bad(file, 'fetch( is not allowed (fails on file://)');
  if (/\bXMLHttpRequest\b/.test(code)) bad(file, 'XMLHttpRequest is not allowed (fails on file://)');
}

// Names of everything in the folder that the game loads: capitals and spaces never help
const index = path.join(dir, 'index.html');
if (fs.existsSync(index)) {
  const html = fs.readFileSync(index, 'utf8');
  if (!/href\s*=\s*["']\.\.\/\.\.\/index\.html["']/.test(html)) bad(index, 'missing the back link to ../../index.html');
}

if (problems.length) {
  console.log('pages problems (' + problems.length + '):');
  problems.forEach(p => console.log('  ' + p));
  process.exit(1);
}
console.log('pages ok');

#!/usr/bin/env node
// Start a game from the kit template.
// Usage: node tools/new-game.js <slug> "<Title>" "<goal line>" [--into <games-dir>]
// Copies games/kit/template/ into games/<slug>/. Never touches assets/ or art-src/, and never overwrites a file.
// If assets/manifest.js is missing it writes an empty one so the page still loads.
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const intoIdx = args.indexOf('--into');
const gamesDir = path.resolve(intoIdx >= 0 ? args.splice(intoIdx, 2)[1] : path.join(__dirname, '..', 'games'));
const [slug, title, goal] = args;
if (!slug || !title || !goal || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error('usage: node tools/new-game.js <slug> "<Title>" "<goal line>"  (slug: lowercase letters, digits, hyphens)');
  process.exit(2);
}
const templateDir = path.join(__dirname, '..', 'games', 'kit', 'template');
const dest = path.join(gamesDir, slug);
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fill = t => t.replace(/\{\{SLUG\}\}/g, slug).replace(/\{\{TITLE\}\}/g, esc(title)).replace(/\{\{GOAL\}\}/g, esc(goal));

const made = [], kept = [];
function copy(from, to) {
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from, { withFileTypes: true }).forEach(e => {
    const f = path.join(from, e.name), t = path.join(to, e.name);
    if (e.isDirectory()) return copy(f, t);
    if (fs.existsSync(t)) { kept.push(path.relative(gamesDir, t)); return; }
    fs.writeFileSync(t, fill(fs.readFileSync(f, 'utf8')));
    made.push(path.relative(gamesDir, t));
  });
}
copy(templateDir, dest);
const manifest = path.join(dest, 'assets', 'manifest.js');
if (!fs.existsSync(manifest)) {
  fs.mkdirSync(path.dirname(manifest), { recursive: true });
  fs.writeFileSync(manifest, 'var ASSETS = {};\nif (typeof module !== "undefined") module.exports = ASSETS;\n');
  made.push(path.relative(gamesDir, manifest));
}
console.log('created ' + made.length + ' files in ' + path.relative(process.cwd(), dest));
made.forEach(f => console.log('  + ' + f));
kept.forEach(f => console.log('  = kept existing ' + f));

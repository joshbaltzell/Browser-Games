// Look Alive lore check. Extracts every player-visible string from the game files and fails on lore breaks.
// Run from the repo root:  node games/look-alive/dev/lore-check.js        (exit 0 = clean, 1 = failures; --list prints every extracted string)
// Rules (Josh's lore, docs/superpowers/plans/2026-11-18-look-alive-wave-2/M5-story-spine.md section C):
//  R1 never the words cow, cattle, mammal, stomach, intestine, gut, rumen, udder;
//  R2 "city" or "cities" only in a sentence that starts "We think" (or "We thought", "We still think", "We no longer think") or inside quotation marks;
//  R3 no architecture words at all (street, tower, lamp, house, district, road, bridge, window, skyscraper, town, village, architecture), and no "build/built" with a city word;
//  R4 green cells are "guards": no "immune", no "white blood cell", "macrophage", "neutrophil", "leukocyte", "antibod"; "green" next to cells must say guard;
//  R5 every real organism name must be in lore-allow.json (natives or alsoAllowed).
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');
const GAME = path.join(ROOT, 'games', 'look-alive');
const ALLOW = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs', 'superpowers', 'plans', '2026-11-18-look-alive-wave-2', 'lore-allow.json'), 'utf8'));
const JS_FILES = ['levels.js', 'game.js', 'cards.js', 'sim.js', 'sim3.js'].concat(fs.existsSync(path.join(__dirname, '..', 'levels2.js')) ? ['levels2.js'] : []).concat(fs.existsSync(path.join(__dirname, '..', 'levels3.js')) ? ['levels3.js'] : []);   // habitat 2 and 3 text is checked too
const HTML_FILES = ['index.html'];

// ---------------------------------------------------------------- extraction
// String literals from ES5 source: skips comments and regex literals. Returns [{file, line, text}].
function jsStrings(file) {
  const src = fs.readFileSync(path.join(GAME, file), 'utf8'), out = [];
  let i = 0, line = 1, prev = '';   // prev = last significant (non-space) character, to tell a regex from a division
  while (i < src.length) {
    const c = src[i], n = src[i + 1];
    if (c === '\n') { line++; i++; continue; }
    if (c === '/' && n === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
    if (c === '/' && n === '*') { i += 2; while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) { if (src[i] === '\n') line++; i++; } i += 2; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const q = c, start = line; let s = ''; i++;
      while (i < src.length && src[i] !== q) {
        if (src[i] === '\\') { const e = src[i + 1]; s += e === 'n' ? '\n' : e === 'u' ? String.fromCharCode(parseInt(src.substr(i + 2, 4), 16)) : e; i += e === 'u' ? 6 : 2; continue; }
        if (src[i] === '\n') line++;
        s += src[i]; i++;
      }
      i++; out.push({ file, line: start, text: s }); prev = q; continue;
    }
    if (c === '/' && (prev === '' || '(,=:[!&|?{};+-*%<>~^'.indexOf(prev) >= 0 || /return$|typeof$/.test(src.slice(Math.max(0, i - 8), i).trim()))) {
      i++; let cls = false;   // regex literal
      while (i < src.length) { const r = src[i]; if (r === '\\') { i += 2; continue; } if (r === '[') cls = true; else if (r === ']') cls = false; else if (r === '/' && !cls) break; else if (r === '\n') break; i++; }
      i++; while (/[a-z]/i.test(src[i] || '')) i++; prev = ')'; continue;
    }
    if (!/\s/.test(c)) prev = c;
    i++;
  }
  return out;
}
// Visible text from HTML: text nodes outside script and style, plus alt, title, aria-label and placeholder values.
function htmlStrings(file) {
  const src = fs.readFileSync(path.join(GAME, file), 'utf8'), out = [];
  const lineAt = (idx) => src.slice(0, idx).split('\n').length;
  const body = src.replace(/<script[\s\S]*?<\/script>/gi, (m) => m.replace(/[^\n]/g, ' ')).replace(/<style[\s\S]*?<\/style>/gi, (m) => m.replace(/[^\n]/g, ' ')).replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));
  let m; const attr = /\b(alt|title|aria-label|placeholder)="([^"]*)"/g;
  while ((m = attr.exec(body))) out.push({ file, line: lineAt(m.index), text: m[2] });
  const txt = />([^<]+)</g;
  while ((m = txt.exec(body))) { const t = m[1].replace(/&[a-z]+;/g, ' ').trim(); if (t) out.push({ file, line: lineAt(m.index), text: t }); }
  return out;
}
// A JS string counts as player text when, with HTML tags removed, it has a space and a letter (ids, class names and keys have no space).
function visible(s) {
  const t = s.text.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
  return /[A-Za-z]/.test(t) && /\s/.test(t) ? Object.assign({}, s, { text: t }) : null;
}
const items = [];
JS_FILES.forEach((f) => jsStrings(f).forEach((s) => { const v = visible(s); if (v) items.push(v); }));
HTML_FILES.forEach((f) => htmlStrings(f).forEach((s) => { const v = visible(s); if (v || s.text.trim()) items.push(v || s); }));

// ---------------------------------------------------------------- rules
const fails = [];
const fail = (s, rule, why) => fails.push(s.file + ':' + s.line + '  [' + rule + '] ' + why + '\n      "' + s.text.slice(0, 160) + (s.text.length > 160 ? '…' : '') + '"');
const sentences = (t) => t.split(/(?<=[.!?])\s+(?=["“‘(]?[A-Z])/);
const BELIEF = /^["“‘(]*(?:We|we) (?:still |now |no longer |)(?:think|thought|assume|assumed)\b/;
const quoted = (sent, word) => { const re = /["“]([^"”]*)["”]/g; let m; while ((m = re.exec(sent))) if (new RegExp('\\b' + word + '\\b', 'i').test(m[1])) return true; return false; };

const R1 = /\b(cows?|cattle|mammals?|mammalian|stomachs?|intestines?|intestinal|guts?|rumens?|udders?)\b/i;
const R3a = /\b(streets?|towers?|lamps?|houses?|districts?|roads?|bridges?|windows?|skyscrapers?|towns?|villages?|architecture)\b/i;
const R3b = /\bbuil(?:d|ds|t|ding)\b[^.]{0,40}\b(cit(?:y|ies)|homes?|walls? around)\b/i;
const R4a = /\b(immune|white blood|macrophages?|neutrophils?|leukocytes?|antibod\w*|lymphocytes?)\b/i;
const R4b = /\bgreen\b[^.]{0,24}\b(cells?|ones|blobs|things)\b/i;

const allowNames = new Set(ALLOW.natives.concat(Object.keys(ALLOW.alsoAllowed)));
const watch = new Set(ALLOW.genusWatch);
const suffix = new RegExp('^[A-Z][a-z]+' + ALLOW.genusSuffix + '$');
const STOP = new Set(['is', 'was', 'has', 'its', 'lets', 'and', 'cells', 'bacteria', 'colony', 'swarms', 'grows', 'grow', 'keeps', 'shows', 'lowers', 'makes', 'builds', 'build', 'live', 'lives', 'in', 'as', 'such', 'that', 'this']);
const LATIN = /^[a-z]{4,}(?:i|ae|is|us|um|a|ii|ensis|ans|ens|ilis|alis)$/;

items.forEach((s) => {
  const t = s.text;
  let m = t.match(R1); if (m) fail(s, 'R1', 'forbidden word "' + m[1] + '"');
  sentences(t).forEach((sent) => {
    if (/\bcit(?:y|ies)\b/i.test(sent) && !BELIEF.test(sent.trim()) && !quoted(sent, 'cit(?:y|ies)')) fail(s, 'R2', '"city" stated as fact (start the sentence with "We think" or quote it): ' + sent.slice(0, 90));
    const g = sent.match(R4b); if (g && !/\bguards?\b/i.test(sent)) fail(s, 'R4', 'green ' + g[1] + ' not called guards');
  });
  m = t.match(R3a); if (m) fail(s, 'R3', 'architecture word "' + m[1] + '"');
  m = t.match(R3b); if (m) fail(s, 'R3', 'build + "' + m[1] + '"');
  m = t.match(R4a); if (m) fail(s, 'R4', 'green cells must be "guards", found "' + m[1] + '"');
  // R5: organism names. A watched or suffix-shaped genus, optionally followed by a Latin species word.
  const words = t.replace(/[^A-Za-z\s-]/g, ' ').split(/\s+/).filter(Boolean);
  for (let k = 0; k < words.length; k++) {
    const w = words[k];
    if (!(watch.has(w) || suffix.test(w))) continue;
    const nx = words[k + 1] || '', bin = LATIN.test(nx) && !STOP.has(nx) ? w + ' ' + nx : null;
    if (bin) { if (!allowNames.has(bin)) fail(s, 'R5', 'organism "' + bin + '" is not in lore-allow.json'); k++; }
    else if (!allowNames.has(w)) fail(s, 'R5', 'genus "' + w + '" is not in lore-allow.json');
  }
});

if (process.argv.includes('--list')) items.forEach((s) => console.log(s.file + ':' + s.line + '  ' + s.text));
console.log('lore-check: ' + items.length + ' player-visible strings from ' + JS_FILES.concat(HTML_FILES).join(', '));
if (fails.length) { console.log(fails.length + ' FAIL\n  ' + fails.join('\n  ')); process.exit(1); }
console.log('0 failures');

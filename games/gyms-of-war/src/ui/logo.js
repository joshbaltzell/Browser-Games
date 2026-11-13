// The Gyms of War logo as SVG strings: a gear-toothed kettlebell emblem, "GYMS OF WAR" in a heavy stencil block face drawn as thick polylines
// (no fonts, so it looks the same everywhere), and "NO PAIN, NO CANCEL" on a strip beneath. Colours come from the game: acid lime, purple, orange
// and hot pink on the dark ink plate. Pure strings: the title screen sets one as innerHTML, hub.js carries a copy of the card art (a test
// keeps the two in step) and index.html carries the emblem as its favicon.
import { PALETTE } from '../render/palette.js';

const INK = PALETTE.ink, LIME = PALETTE.gel, PURPLE = PALETTE.glorpPurple, ORANGE = PALETTE.playerOrange, PINK = PALETTE.hotPink, CREAM = PALETTE.cream;

// Block letters on a 26 x 38 cell (W is 32 wide): centre lines of a 9-unit stroke, plus the little gaps that make it a stencil.
const GLYPHS = {
  G: { w: 26, lines: [[[21.5, 4.5], [4.5, 4.5], [4.5, 33.5], [21.5, 33.5], [21.5, 19], [13, 19]]], gaps: [[0, 16.5, 9, 4]] },
  Y: { w: 26, lines: [[[4.5, 4.5], [13, 19], [21.5, 4.5]], [[13, 19], [13, 33.5]]], gaps: [[8, 24.5, 10, 3.5]] },
  M: { w: 26, lines: [[[4.5, 33.5], [4.5, 4.5], [13, 21], [21.5, 4.5], [21.5, 33.5]]], gaps: [[17, 26, 10, 3.5]] },
  S: { w: 26, lines: [[[21.5, 4.5], [4.5, 4.5], [4.5, 19], [21.5, 19], [21.5, 33.5], [4.5, 33.5]]], gaps: [[0, 10.5, 9, 3.5], [17, 26.5, 9, 3.5]] },
  O: { w: 26, lines: [[[4.5, 4.5], [21.5, 4.5], [21.5, 33.5], [4.5, 33.5], [4.5, 4.5]]], gaps: [[0, 17, 9, 4], [17, 17, 9, 4]] },
  F: { w: 26, lines: [[[21.5, 4.5], [4.5, 4.5], [4.5, 33.5]], [[4.5, 19], [17, 19]]], gaps: [[0, 25.5, 9, 3.5]] },
  W: { w: 32, lines: [[[4.5, 4.5], [10, 33.5], [16, 14], [22, 33.5], [27.5, 4.5]]], gaps: [[12.5, 19, 7, 3.5]] },
  A: { w: 26, lines: [[[4.5, 33.5], [13, 4.5], [21.5, 33.5]], [[8.5, 25], [17.5, 25]]], gaps: [[0, 29, 9, 3.5]] },
  R: { w: 26, lines: [[[4.5, 33.5], [4.5, 4.5], [17, 4.5], [21.5, 9.5], [21.5, 14], [17, 19], [4.5, 19]], [[12, 19], [21.5, 33.5]]], gaps: [[0, 26, 9, 3.5]] },
};
const STROKE = 7;

const pts = (l, ox, oy, k) => l.map(([x, y]) => `${r(ox + x * k)},${r(oy + y * k)}`).join(' ');

// A run of glyphs starting at (x, y) at scale k: { layers, width }.
function word(text, x, y, k, pitchGap) {
  let cx = x, lines = '', gaps = '';
  for (const ch of text) {
    const g = GLYPHS[ch];
    if (!g) { cx += 12 * k; continue; }
    for (const l of g.lines) lines += `<polyline points="${pts(l, cx, y, k)}"/>`;
    for (const [gx, gy, gw, gh] of g.gaps) gaps += `<rect x="${r(cx + gx * k)}" y="${r(y + gy * k)}" width="${r(gw * k)}" height="${r(gh * k)}"/>`;
    cx += (g.w + pitchGap) * k;
  }
  return { lines, gaps, k, width: cx - x - pitchGap * k };
}
const r = v => Math.round(v * 100) / 100;

// A kettlebell whose body is a gear: 12 teeth round a purple body, a hub, a handle over the top. Centre (cx, cy), tooth tips at radius R.
function emblem(cx, cy, R) {
  const teeth = 12, ro = R, ri = R * 0.84;
  let d = '';
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2, s = Math.PI * 2 / teeth;
    const p = (ang, rad) => `${r(cx + Math.sin(ang) * rad)},${r(cy - Math.cos(ang) * rad)}`;
    d += `${i ? 'L' : 'M'}${p(a - s * 0.3, ri)} L${p(a - s * 0.17, ro)} L${p(a + s * 0.17, ro)} L${p(a + s * 0.3, ri)} `;
  }
  d += 'Z';
  const hx = R * 0.6, top = cy - R * 0.98;
  return (
    `<path d="M${r(cx - hx)},${r(cy - R * 0.62)} C${r(cx - hx)},${r(top - R * 0.55)} ${r(cx + hx)},${r(top - R * 0.55)} ${r(cx + hx)},${r(cy - R * 0.62)}" fill="none" stroke="${INK}" stroke-width="${r(R * 0.34)}" stroke-linecap="round"/>` +
    `<path d="M${r(cx - hx)},${r(cy - R * 0.62)} C${r(cx - hx)},${r(top - R * 0.55)} ${r(cx + hx)},${r(top - R * 0.55)} ${r(cx + hx)},${r(cy - R * 0.62)}" fill="none" stroke="${ORANGE}" stroke-width="${r(R * 0.2)}" stroke-linecap="round"/>` +
    `<path d="${d}" fill="${PURPLE}" stroke="${LIME}" stroke-width="${r(R * 0.07)}" stroke-linejoin="round"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r(R * 0.58)}" fill="none" stroke="${INK}" stroke-width="${r(R * 0.09)}"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r(R * 0.34)}" fill="${LIME}" stroke="${INK}" stroke-width="${r(R * 0.07)}"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r(R * 0.13)}" fill="${INK}"/>`
  );
}

export const EMBLEM_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${`<rect width="100" height="100" rx="18" fill="${INK}"/>`}${emblem(50, 58, 36)}</svg>`;

function lockup() {
  const top = word('GYMS OF', 164, 20, 1.0, 5), bot = word('WAR', 164, 64, 1.5, 5);
  const stroked = (w, color, dx, dy) => `<g fill="none" stroke="${color}" stroke-width="${r(STROKE * w.k)}" stroke-linejoin="miter" stroke-miterlimit="1.6" stroke-linecap="butt" transform="translate(${dx} ${dy})">${w.lines}</g>`;
  return (
    emblem(84, 100, 56) +
    stroked(top, PINK, 3, 3) + stroked(top, LIME, 0, 0) + `<g fill="${INK}">${top.gaps}</g>` +
    stroked(bot, PINK, 4, 4) + stroked(bot, LIME, 0, 0) + `<g fill="${INK}">${bot.gaps}</g>`
  );
}

const TAG = `<rect x="160" y="128" width="264" height="26" rx="3" fill="${PINK}"/><text x="292" y="147" text-anchor="middle" font-family="Impact, 'Arial Black', 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="18" letter-spacing="3" fill="${INK}">NO PAIN, NO CANCEL</text>`;

// The full logo: a dark plate, the emblem, the name and the tag.
export const LOGO_BODY = `<rect x="2" y="2" width="436" height="166" rx="14" fill="${INK}" stroke="${PURPLE}" stroke-width="4"/>${lockup()}${TAG}`;
export const LOGO_SVG = `<svg class="cr-logo" viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gyms of War: No Pain, No Cancel"><title>GYMS OF WAR: NO PAIN, NO CANCEL</title>${LOGO_BODY}</svg>`;

// The hub card art: the logo on the card's 120 x 80 canvas.
export const HUB_ART_SVG = `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="120" height="80" fill="${INK}"/><rect x="0" y="62" width="120" height="18" fill="#2a1450"/><path d="M0 62 H120" stroke="${PINK}" stroke-width="1.5"/><g transform="translate(1 17) scale(0.27)">${LOGO_BODY}</g></svg>`;

export const FAVICON_HREF = 'data:image/svg+xml,' + encodeURIComponent(EMBLEM_SVG);
export { CREAM as LOGO_CREAM };

// The HUD: a pure model (testable in Node) and a thin DOM layer that writes only what changed.
import { TUNING } from '../tuning.js';
import { WEAPONS } from '../combat/weapons.js';

// Pixels from the screen centre to a reticle arm for a cone of `spreadDeg` at this fov and viewport height.
export function reticleGap(spreadDeg, fov, viewportH) {
  const rad = Math.PI / 180;
  return (viewportH / 2) * Math.tan(spreadDeg * rad / 2) / Math.tan(fov * rad / 2);
}

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);

// marker is the hit marker kind ('body' | 'head' | 'kill') or null; reloadFlash is 'perfect' | 'good' | 'jam' or null.
// face is the damageFaceModel result (or null); objective is a line of text; bark is { speaker, text } or null;
// banner is { title, hint } or null. The last four pass through unchanged.
// covered: the player is tucked or blind in cover (not popped); the reticle then shows dimmed, at the same screen point the
// aimed shot's camera ray goes through. device is 'kbm' or 'pad': it picks the key name in the reload prompt.
export function hudModel({ arsenal, stance, firing, covered = false, device = 'kbm', spreadDeg, fov, viewportH, marker = null, reloadFlash = null,
  face = null, objective = '', bark = null, banner = null, weapons = TUNING.weapons, combat = TUNING.combat, feedback = TUNING.feedback }) {
  const id = arsenal.current();
  const row = weapons[id], am = arsenal.ammo[id];
  const r = arsenal.reload;
  const key = device === 'pad' ? 'RB' : 'R';
  let reload = { show: false, marker: 0, good: [row.goodStart, row.goodEnd], perfect: [row.perfectStart, row.perfectEnd], flash: reloadFlash, prompt: '' };
  if (r) {
    const T = Math.max(row.reloadTime, combat.minReloadTime);
    reload = { ...reload, show: true, marker: clamp01(r.t / T), prompt: r.press === null ? `${key} again on the bright zone` : '' };
  } else if (am.mag <= 0) reload.prompt = `${key} to reload`;
  const popped = stance === 'aim';
  return {
    weapon: WEAPONS[id].name,
    mag: am.mag,
    reserve: row.infiniteReserve > 0 ? '∞' : am.reserve,
    reticle: {
      show: popped || !!firing || covered,
      gap: feedback.reticleMinGap + reticleGap(spreadDeg, fov, viewportH),
      opacity: covered && !popped ? feedback.coverReticleOpacity : 1,
    },
    reload,
    hit: { show: !!marker, kind: marker || null },
    // The face hides while a banner owns the screen (downed, cleared); the edge glow still follows the face model.
    faceShow: !!face && !banner && !face.downed.show,
    face, objective, bark, banner,
  };
}

// Builds #cr-hud under root. render(model) touches the DOM only for values that changed.
export function createHud(root = document.body) {
  const el = (tag, cls, parent, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  };
  const hud = el('div', '', root); hud.id = 'cr-hud';
  // Behind everything else: the screen edge glows, the damage face and the centre banner.
  const edges = {};
  for (const k of ['top', 'right', 'bottom', 'left']) edges[k] = el('div', `cr-edge cr-edge-${k}`, hud);
  const SVG = 'http://www.w3.org/2000/svg';
  const sv = (tag, attrs, parent) => {
    const e = document.createElementNS(SVG, tag);
    for (const k of Object.keys(attrs)) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const faceEl = el('div', 'cr-face', hud);
  const svg = sv('svg', { viewBox: '0 0 100 100' }, faceEl);
  const defs = sv('defs', {}, svg);
  sv('circle', { cx: 50, cy: 50, r: 46 }, sv('clipPath', { id: 'cr-face-clip' }, defs));
  sv('circle', { cx: 50, cy: 50, r: 46, fill: '#fff3d6' }, svg);
  const fill = sv('rect', { x: 0, width: 100, y: 96, height: 0, fill: '#e0243c', 'clip-path': 'url(#cr-face-clip)' }, svg);
  sv('circle', { cx: 50, cy: 50, r: 46, fill: 'none', stroke: '#1b1f3b', 'stroke-width': 4 }, svg);
  sv('circle', { cx: 35, cy: 40, r: 5.5, fill: '#1b1f3b' }, svg);
  sv('circle', { cx: 65, cy: 40, r: 5.5, fill: '#1b1f3b' }, svg);
  const mouth = sv('path', { d: '', fill: 'none', stroke: '#1b1f3b', 'stroke-width': 4.5, 'stroke-linecap': 'round' }, svg);
  const bannerEl = el('div', 'cr-banner', hud);
  const bannerTitle = el('div', 'cr-banner-title', bannerEl);
  const bannerHint = el('div', 'cr-banner-hint', bannerEl);
  const objectiveEl = el('div', 'cr-objective', hud);
  const barkEl = el('div', 'cr-bark', hud);
  const barkWho = el('span', 'cr-bark-who', barkEl);
  const barkText = el('span', 'cr-bark-text', barkEl);
  const panel = el('div', 'cr-weapon', hud);
  const name = el('div', 'cr-weapon-name', panel);
  const ammo = el('div', 'cr-ammo', panel);
  const prompt = el('div', 'cr-prompt', panel);
  const bar = el('div', 'cr-reload', panel);
  const grey = el('div', 'cr-zone cr-zone-good', bar);
  const bright = el('div', 'cr-zone cr-zone-perfect', bar);
  const mark = el('div', 'cr-marker', bar);
  const result = el('div', 'cr-result', panel);
  const reticle = el('div', 'cr-reticle', hud);
  const arms = ['up', 'down', 'left', 'right'].map(d => el('div', `cr-arm cr-arm-${d}`, reticle));
  const hit = el('div', 'cr-hit', hud);
  el('i', 'cr-hit-a', hit); el('i', 'cr-hit-b', hit); el('i', 'cr-hit-ring', hit);

  const last = {};
  const set = (key, value, write) => { if (last[key] !== value) { last[key] = value; write(value); } };
  const pct = (x) => `${(x * 100).toFixed(1)}%`;
  const zone = (e, [a, b]) => { e.style.left = pct(a); e.style.width = pct(Math.max(0, b - a)); };

  return {
    render(m) {
      set('weapon', m.weapon, v => { name.textContent = v; });
      set('ammo', `${m.mag}|${m.reserve}`, () => { ammo.textContent = `${m.mag} / ${m.reserve}`; });
      set('prompt', m.reload.prompt, v => { prompt.textContent = v; });
      set('reload.show', m.reload.show, v => { bar.hidden = !v; });
      set('good', `${m.reload.good}`, () => zone(grey, m.reload.good));
      set('perfect', `${m.reload.perfect}`, () => zone(bright, m.reload.perfect));
      set('marker', Math.round(m.reload.marker * 500), () => { mark.style.left = pct(m.reload.marker); });
      set('flash', m.reload.flash, v => { result.textContent = v ? v.toUpperCase().replace('JAM', 'JAMMED') : ''; result.dataset.kind = v || ''; });
      set('ret.show', m.reticle.show, v => { reticle.hidden = !v; });
      set('ret.op', Math.round(m.reticle.opacity * 100), () => { reticle.style.opacity = m.reticle.opacity.toFixed(2); });
      set('ret.gap', Math.round(m.reticle.gap), g => { arms.forEach(a => a.style.setProperty('--gap', `${g}px`)); });
      const fc = m.face;
      set('face.show', !!m.faceShow, v => { faceEl.hidden = !v; });
      if (fc) {
        set('face.op', Math.round(fc.face.opacity * 100), () => { faceEl.style.opacity = fc.face.opacity.toFixed(2); });
        set('face.frown', Math.round(fc.face.frown * 50), () => { mouth.setAttribute('d', `M 30 72 Q 50 ${(72 - 24 * fc.face.frown).toFixed(1)} 70 72`); });
        set('face.fill', Math.round(fc.face.fill * 50), () => { const h = 92 * fc.face.fill; fill.setAttribute('y', (96 - h).toFixed(1)); fill.setAttribute('height', h.toFixed(1)); });
        for (const k of Object.keys(edges)) set(`edge.${k}`, Math.round(fc.edges[k] * 50), () => { edges[k].style.opacity = fc.edges[k].toFixed(2); });
      }
      set('banner', m.banner ? `${m.banner.title}|${m.banner.hint}` : '', v => { bannerEl.hidden = !m.banner; if (m.banner) { bannerTitle.textContent = m.banner.title; bannerHint.textContent = m.banner.hint; } });
      set('objective', m.objective || '', v => { objectiveEl.textContent = v; objectiveEl.hidden = !v; });
      set('bark', m.bark ? `${m.bark.speaker}|${m.bark.text}` : '', () => { barkEl.hidden = !m.bark; if (m.bark) { barkWho.textContent = m.bark.speaker; barkText.textContent = m.bark.text; } });
      set('hit', m.hit.show ? m.hit.kind : '', v => { hit.hidden = !v; hit.dataset.kind = v; });
    },
  };
}

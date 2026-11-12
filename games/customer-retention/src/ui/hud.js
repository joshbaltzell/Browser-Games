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
export function hudModel({ arsenal, stance, firing, spreadDeg, fov, viewportH, marker = null, reloadFlash = null,
  weapons = TUNING.weapons, combat = TUNING.combat, feedback = TUNING.feedback }) {
  const id = arsenal.current();
  const row = weapons[id], am = arsenal.ammo[id];
  const r = arsenal.reload;
  let reload = { show: false, marker: 0, good: [row.goodStart, row.goodEnd], perfect: [row.perfectStart, row.perfectEnd], flash: reloadFlash };
  if (r) {
    const T = Math.max(row.reloadTime, combat.minReloadTime);
    reload = { ...reload, show: true, marker: clamp01(r.t / T) };
  }
  return {
    weapon: WEAPONS[id].name,
    mag: am.mag,
    reserve: row.infiniteReserve > 0 ? '∞' : am.reserve,
    reticle: { show: stance === 'aim' || !!firing, gap: feedback.reticleMinGap + reticleGap(spreadDeg, fov, viewportH) },
    reload,
    hit: { show: !!marker, kind: marker || null },
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
  const panel = el('div', 'cr-weapon', hud);
  const name = el('div', 'cr-weapon-name', panel);
  const ammo = el('div', 'cr-ammo', panel);
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
      set('reload.show', m.reload.show, v => { bar.hidden = !v; });
      set('good', `${m.reload.good}`, () => zone(grey, m.reload.good));
      set('perfect', `${m.reload.perfect}`, () => zone(bright, m.reload.perfect));
      set('marker', Math.round(m.reload.marker * 500), () => { mark.style.left = pct(m.reload.marker); });
      set('flash', m.reload.flash, v => { result.textContent = v ? v.toUpperCase().replace('JAM', 'JAMMED') : ''; result.dataset.kind = v || ''; });
      set('ret.show', m.reticle.show, v => { reticle.hidden = !v; });
      set('ret.gap', Math.round(m.reticle.gap), g => { arms.forEach(a => a.style.setProperty('--gap', `${g}px`)); });
      set('hit', m.hit.show ? m.hit.kind : '', v => { hit.hidden = !v; hit.dataset.kind = v; });
    },
  };
}

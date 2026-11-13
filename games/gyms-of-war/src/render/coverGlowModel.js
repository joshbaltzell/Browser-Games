// The cover glow's logic: which strip of cover to light and how bright. Pure maths, no three.js; coverGlow.js draws it.
import { TUNING } from '../tuning.js';
import { springStep } from '../core/spring.js';

const LIP = 0.3;   // m, how far in from the cover's face the lit strip reaches (at most the box's depth)
const LIFT = 0.02; // m, the strip floats this far above the cover top so it never z-fights

// The strip lit for a cover target: its centre (on top of the cover, along its face), its length along the edge, its width across the lip and the
// yaw that turns a box's x axis along the edge. `target` is { edge, t } as findCoverTarget returns it; length is capped at the edge's own length.
export function glowStrip(target, length = TUNING.feedback.coverGlowLength, move = TUNING.move, cover = TUNING.cover) {
  const e = target.edge, S = move.radius + cover.gap;
  const len = Math.max(0.05, Math.min(e.length, Number.isFinite(length) ? length : e.length));
  const lo = len / 2, hi = Math.max(lo, e.length - len / 2);
  const tc = Math.max(lo, Math.min(hi, target.t));
  const width = Math.max(0.05, Math.min(LIP, e.depth || LIP));
  const off = S + width / 2;   // from the stand line back to the middle of the lip, through the face
  return {
    x: e.a[0] + e.tangent[0] * tc - e.normal[0] * off,
    y: e.height + LIFT,
    z: e.a[1] + e.tangent[1] * tc - e.normal[1] * off,
    len, width, yaw: Math.atan2(-e.tangent[1], e.tangent[0]),
  };
}

// The glow's state: `update(dt, target)` with the cover the context button would take now (or null). It fades in and out over coverGlowFade; while
// fading out it keeps lighting the last strip. Returns { opacity, strip } (strip is null once fully faded). The pulse is applied by the view.
export function createCoverGlow({ feedback = () => TUNING.feedback } = {}) {
  let amount = 0, edge = null;
  const t = { x: 0, v: 0 };
  const out = { opacity: 0, amount: 0, strip: null };
  return {
    update(dt, target) {
      const fb = feedback();
      const on = fb.coverGlow > 0 && !!target;
      const step = dt > 0 && Number.isFinite(dt) ? dt : 0;
      if (on) {
        if (target.edge !== edge) { edge = target.edge; t.x = target.t; t.v = 0; }   // a new piece of cover: the strip jumps to it
        else springStep(t, target.t, 0.05, step);
      }
      const fade = Math.max(fb.coverGlowFade, 1e-3);
      amount = Math.max(0, Math.min(1, amount + (on ? step : -step) / fade));
      out.amount = amount;
      out.opacity = amount * Math.max(0, fb.coverGlowOpacity);
      out.strip = amount > 0 && edge ? glowStrip({ edge, t: t.x }, fb.coverGlowLength) : null;
      if (amount === 0) edge = null;
      return out;
    },
    reset() { amount = 0; edge = null; },
  };
}

export function nextResolutionScale(scale, avgFrameMs, fastMs = 14) {
  let s = scale;
  if (avgFrameMs > 20) s -= 0.1;
  else if (avgFrameMs < fastMs) s += 0.05;
  return Math.round(Math.min(1, Math.max(0.5, s)) * 100) / 100;
}

// Pure resolution governor: feed it frame times and a clock, it returns the scale.
// - ignores the first 2 s (shader compiles, warm-up hitches)
// - estimates the display's refresh interval (smallest 60-frame average, 4..20 ms) and
//   only counts "fast" as 10% above it, so a vsync-locked 60 Hz display can recover
// - if a raise is followed by a drop within 10 s, recovery is held off for 10 s, doubling
//   on each repeat up to 80 s
const WARMUP_MS = 2000;
const FLIP_MS = 10000;
const MAX_HOLD_MS = 80000;

export function createGovernor({ startMs = 0, scale = 1 } = {}) {
  let cur = scale;
  let sumMs = 0;
  let count = 0;
  let estimate = 20;
  let lastRaise = null;
  let holdMs = 0;
  let holdUntil = -Infinity;

  function sample(ms, nowMs) {
    if (nowMs - startMs < WARMUP_MS) return cur;
    sumMs += Math.min(ms, 100); // a hidden-tab hiccup must not read as a slow GPU
    count++;
    if (count < 60 || sumMs < 1000) return cur;
    const avg = sumMs / count;
    sumMs = 0;
    count = 0;
    estimate = Math.min(20, Math.max(4, Math.min(estimate, avg)));
    const next = nextResolutionScale(cur, avg, Math.max(14, 1.1 * estimate));
    if (next > cur) {
      if (nowMs < holdUntil) return cur;
      lastRaise = nowMs;
    } else if (next < cur) {
      if (lastRaise !== null && nowMs - lastRaise < FLIP_MS) {
        holdMs = holdMs === 0 ? FLIP_MS : Math.min(holdMs * 2, MAX_HOLD_MS);
        holdUntil = nowMs + holdMs;
      }
      lastRaise = null;
    }
    cur = next;
    return cur;
  }

  return { sample, scale: () => cur };
}

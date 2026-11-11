// Fixed-step simulation with a variable-rate render. Pure apart from start()/stop(),
// which touch requestAnimationFrame and document only when called.

export function createLoop({ step, render, hz = 60, maxSteps = 5 }) {
  const dt = 1 / hz;
  let acc = 0;
  let rafId = 0;
  let last = null;
  let running = false;

  function advance(realSeconds) {
    if (!(realSeconds > 0) || !Number.isFinite(realSeconds)) return;
    acc += realSeconds;
    let n = 0;
    while (acc >= dt && n < maxSteps) {
      step(dt);
      acc -= dt;
      n++;
    }
    if (acc >= dt) acc = 0; // stalled: drop the backlog instead of spiralling
    render(Math.min(acc / dt, 1 - Number.EPSILON), realSeconds);
  }

  function onFrame(t) {
    if (!running) return;
    rafId = requestAnimationFrame(onFrame);
    if (last !== null) advance((t - last) / 1000);
    last = t;
  }

  function onVisibility() {
    if (document.visibilityState === 'visible') last = null; // discard time spent hidden
  }

  function start() {
    if (running) return;
    running = true;
    last = null;
    document.addEventListener('visibilitychange', onVisibility);
    rafId = requestAnimationFrame(onFrame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
    document.removeEventListener('visibilitychange', onVisibility);
  }

  return { advance, start, stop };
}

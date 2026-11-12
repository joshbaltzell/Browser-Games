// Fixed-step simulation with a variable-rate render. Pure apart from start()/stop(),
// which touch requestAnimationFrame and document only when called.

// timeScale(realSeconds) is asked once per frame for how fast the simulation clock runs (1 normally; below 1 is a hitstop crawl): it scales the time fed to
// the accumulator only, so every step is still exactly 1 / hz and the simulation stays deterministic. render gets the scale as its third argument.
export function createLoop({ step, render, before, timeScale, hz = 60, maxSteps = 5 }) {
  const dt = 1 / hz;
  let acc = 0;
  let rafId = 0;
  let last = null;
  let running = false;

  function advance(realSeconds) {
    if (!(realSeconds > 0) || !Number.isFinite(realSeconds)) return;
    if (before) before(realSeconds);
    let k = timeScale ? timeScale(realSeconds) : 1;
    if (!(k >= 0) || !Number.isFinite(k)) k = 1;
    acc += realSeconds * k;
    let n = 0;
    while (acc >= dt && n < maxSteps) {
      step(dt);
      acc -= dt;
      n++;
    }
    if (acc >= dt) acc = 0; // stalled: drop the backlog instead of spiralling
    render(Math.min(acc / dt, 1 - Number.EPSILON), realSeconds, k);
  }

  function onFrame(t) {
    if (!running) return;
    try {
      if (last !== null) advance((t - last) / 1000);
    } catch (err) {
      stop(); // one failure, reported once by the page's error handling
      throw err;
    }
    last = t;
    if (running) rafId = requestAnimationFrame(onFrame);
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

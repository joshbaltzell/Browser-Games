// A page-side run-around for the cover scene: drives window.__cr.drive through a fixed list of
// legs and checks cover is only ever taken on purpose. A classic script, no imports.
// Use: __runAround.start(20); wait; __runAround.done(); __runAround.result().
(function () {
  const TICK_MS = 50;
  const M = (o, t = 0) => ({ t, i: o });
  // Each leg: place, expected outcome, length in seconds, and timed intents (last one at or before now applies).
  const LEGS = [
    { name: 'coverRow right + tap', place: 'coverRow', expect: 'none', len: 1.5, steps: [M({ moveX: 1 }), M({ moveX: 1, tap: true }, 0.5), M({ moveX: 1 }, 0.55)] },
    { name: 'coverRow back + tap', place: 'coverRow', expect: 'none', len: 1, steps: [M({ moveY: 1 }), M({ moveY: 1, tap: true }, 0.3), M({ moveY: 1 }, 0.35)] },
    { name: 'coverRow sprint at wall', place: 'coverRow', expect: 'grab', len: 1.2, steps: [M({ moveY: -1, sprint: true })] },
    { name: 'coverTall sprint along', place: 'coverTall', expect: 'none', len: 1.2, steps: [M({ moveX: -1, sprint: true })] },
    { name: 'coverTall aim-walk into wall', place: 'coverTall', expect: 'none', len: 1, steps: [M({ moveY: -1, aim: true })] },
    { name: 'lane jog + tap', place: 'lane', expect: 'none', len: 1.5, steps: [M({ moveY: -1 }), M({ moveY: -1, tap: true }, 0.5), M({ moveY: -1 }, 0.55)] },
    { name: 'spawn wander', place: 'spawn', expect: 'none', len: 3, steps: [M({ moveX: 1 }), M({ moveY: -1 }, 1), M({ moveX: -1, moveY: 1 }, 1.5)] },
    { name: 'coverRow forward + tap', place: 'coverRow', expect: 'grab', len: 1.5, steps: [M({ moveY: -1, tap: true }), M({}, 0.05), M({ moveY: 1 }, 1.1)] },
    // Hold along the wall only until the end plus a little (the -x end is ~1.8 m away at 3 m/s), then pop, then pull back.
    { name: 'coverTall forward + tap, along, aim', place: 'coverTall', expect: 'grab', len: 2.9, steps: [M({ moveY: -1, tap: true }), M({}, 0.05), M({ moveX: -1 }, 0.5), M({ aim: true }, 1.25), M({ moveY: 1 }, 1.75)] },
  ];
  const GRAB_STATES = ['coverSlide', 'vault', 'coverSwap'];

  let timer = null, finished = true, out = { legs: [], failures: [] };

  function start(seconds = 20) {
    stop();
    out = { legs: [], failures: [] };
    finished = false;
    const cr = window.__cr, t0 = performance.now();
    let li = 0, legStart = 0, started = false, step = -1;
    function beginLeg(now) {
      cr.drive({});
      cr.place(LEGS[li].place);
      cr.clearTransitions();
      legStart = now; step = -1; started = true;
    }
    function endLeg() {
      const leg = LEGS[li];
      cr.drive({});
      const tr = cr.transitions();
      const entries = tr.filter(x => x.state === 'coverSlide').length;
      const untapped = tr.filter(x => GRAB_STATES.includes(x.state) && !x.tapped && !x.auto).length;
      out.legs.push({ name: leg.name, expect: leg.expect, coverEntries: entries, untapped });
      if (leg.expect === 'none' && entries > 0) out.failures.push(`${leg.name}: grabbed cover by accident (${entries})`);
      if (leg.expect === 'grab' && entries === 0) out.failures.push(`${leg.name}: expected a grab, none happened`);
      if (untapped > 0) out.failures.push(`${leg.name}: ${untapped} cover entries that were neither tapped nor a run-in`);
      started = false;
      li = (li + 1) % LEGS.length;
    }
    timer = setInterval(() => {
      const now = performance.now();
      if ((now - t0) / 1000 >= seconds) { stop(); return; } // a leg cut short is dropped, not judged
      if (!started) beginLeg(now);
      const t = (now - legStart) / 1000, leg = LEGS[li];
      if (t >= leg.len) { endLeg(); return; }
      let k = step;
      while (k + 1 < leg.steps.length && leg.steps[k + 1].t <= t) k++;
      if (k !== step) { step = k; cr.drive(leg.steps[k].i); }
    }, TICK_MS);
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null; finished = true;
    if (window.__cr && window.__cr.drive) window.__cr.drive(null);
  }

  window.__runAround = { start, done: () => finished, result: () => out };
})();

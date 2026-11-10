/*
 * KNIT ONE — recorded solutions + script runner.
 * Used by dev/solve-check.js (node) to PROVE every room is solvable, and by the
 * game for the "Hint" button (it draws the path of the recorded solution).
 *
 * A solution is a list of steps, in pixels of the 900x640 play area:
 *   { drag: [[x,y], ...], speed }   press and drag the pointer through the points
 *   { up: seconds }                 let go and wait
 *   { cinch: true }                 press Tie
 *   { drop: true }                  press Drop
 *   { unravel: seconds }            hold Unravel
 *   { wait: seconds }               wait with hands off
 */
(function (root) {
  "use strict";
  const K = root.KnitOne = root.KnitOne || {};

  // points on a circle (angles in degrees, y down, so increasing angle = clockwise on screen)
  function arc(cx, cy, R, a0, a1, step) {
    const pts = [], n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / (step || 20)));
    for (let i = 0; i <= n; i++) {
      const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180;
      pts.push([cx + Math.cos(a) * R, cy + Math.sin(a) * R]);
    }
    return pts;
  }
  K.arc = arc;

  // Runs a script against a fresh world. Returns the world plus a log.
  K.runScript = function (room, steps, opts) {
    opts = opts || {};
    const S = K.sim;
    const w = S.create(room, opts.ghost);
    const inp = { x: S.head(w).x, y: S.head(w).y, down: false, unravel: false };
    let frames = 0;
    const log = { maxStretch: 0, minPegGap: 1e9 };
    const tick = () => {
      S.step(w, inp); frames++;
      // bookkeeping for the checks
      const n = w.nodes;
      for (let i = 0; i < n.length - 1; i++) {
        const d = Math.hypot(n[i + 1].x - n[i].x, n[i + 1].y - n[i].y) / S.SEG_LEN;
        if (d > log.maxStretch) log.maxStretch = d;
      }
      for (const pg of w.pegs) for (let i = 0; i < n.length - 1; i++) {
        const cp = S.closestOnSeg(pg.x, pg.y, n[i], n[i + 1]);
        const g = Math.hypot(cp.x - pg.x, cp.y - pg.y) - pg.r;
        if (g < log.minPegGap) log.minPegGap = g;
      }
      return w.status === "won";
    };
    for (const st of steps) {
      if (st.drag) {
        inp.down = true;
        const speed = (st.speed || 600) * S.DT;
        for (const p of st.drag) {
          let guard = 0;
          while (Math.hypot(p[0] - inp.x, p[1] - inp.y) > 0.5 && guard++ < 4000) {
            const dx = p[0] - inp.x, dy = p[1] - inp.y, d = Math.hypot(dx, dy);
            const m = Math.min(d, speed);
            inp.x += dx / d * m; inp.y += dy / d * m;
            if (tick()) return { w: w, frames: frames, log: log };
          }
        }
        for (let i = 0; i < 12; i++) if (tick()) return { w: w, frames: frames, log: log };
      }
      if (st.up !== undefined || st.wait !== undefined) {
        inp.down = false; inp.unravel = false;
        const n = Math.round((st.up !== undefined ? st.up : st.wait) * 60);
        for (let i = 0; i < n; i++) if (tick()) return { w: w, frames: frames, log: log };
      }
      if (st.cinch) { inp.down = false; S.cinch(w); }
      if (st.drop) { inp.down = false; S.drop(w); }
      if (st.unravel) {
        inp.down = false; inp.unravel = true;
        const n = Math.round(st.unravel * 60);
        for (let i = 0; i < n; i++) tick();
        inp.unravel = false;
        inp.x = S.head(w).x; inp.y = S.head(w).y;
      }
    }
    return { w: w, frames: frames, log: log };
  };

  // a loop that spirals out from radius r0 to r1 around a post, starting at angle a0
  function spiral(cx, cy, r0, r1, a0, deg, dir) {
    const pts = [], n = Math.ceil(deg / 25);
    for (let i = 0; i <= n; i++) {
      const t = i / n, a = (a0 + dir * deg * t) * Math.PI / 180, r = r0 + (r1 - r0) * t;
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
    return pts;
  }
  K.spiral = spiral;
  const px = (room, i) => [900 * room.pegs[i][0], 640 * room.pegs[i][1], room.pegs[i][2]];
  const byId = {};
  K.ROOMS.forEach(r => { byId[r.id] = r; });

  // approach a post from its left side and tie a loop round it (a full turn and a bit)
  function tie(room, i, r0) {
    const p = px(room, i);
    r0 = r0 || p[2] + 10;
    return [[p[0] - r0, p[1]]].concat(spiral(p[0], p[1], r0, r0 + 10, 180, 400, 1));
  }
  K.tiePath = tie;

  const S = K.SOLUTIONS = {};
  let r;

  r = byId["first-stitch"];
  S[r.id] = [{ drag: [[900 * r.target[0], 640 * r.target[1]]], speed: 600 }, { wait: 1 }];

  r = byId["round-the-post"];
  { const p = px(r, 0);
    S[r.id] = [{ drag: [[300, 200]].concat(spiral(p[0], p[1], 48, 48, 180, 250, 1)).concat([[900 * r.target[0], 640 * r.target[1]]]), speed: 600 }, { wait: 1 }]; }

  r = byId["post-to-post"];
  { const a = px(r, 0), b = px(r, 1);
    S[r.id] = [{ drag: [[220, 190]].concat(spiral(a[0], a[1], 44, 44, 180, 250, 1))
      .concat([[b[0] - 44, b[1]]]).concat(spiral(b[0], b[1], 44, 44, 180, 250, 1))
      .concat([[900 * r.target[0], 640 * r.target[1]]]), speed: 600 }, { wait: 1 }]; }

  r = byId["first-knot"];
  S[r.id] = [{ drag: [[300, 232], [520, 290]].concat(tie(r, 0, 36)), speed: 500 },
    { up: 0.2 }, { cinch: true }, { drop: true }, { wait: 6 }];

  r = byId["around-the-corner"];
  { const a = px(r, 0), b = px(r, 1);
    S[r.id] = [{ drag: [[160, 190]].concat([[a[0] - 34, a[1]]]).concat(spiral(a[0], a[1], 34, 46, 180, 400, 1))
      .concat([[a[0], a[1] - 62], [330, 236], [430, 300]]).concat(tie(r, 1, 36)), speed: 500 },
      { up: 0.2 }, { cinch: true }, { drop: true }, { wait: 6 }]; }

  r = byId["heavy-drop"];
  S[r.id] = [{ drag: [[300, 470], [560, 450]].concat(tie(r, 0, 36)), speed: 500 },
    { up: 0.2 }, { cinch: true }, { drop: true }, { wait: 6 }];

  r = byId["thin-ball"];
  S[r.id] = [{ drag: [[300, 100], [200, 420], [320, 110], [220, 430]], speed: 700 },
    { unravel: 2.5 },
    { drag: [[300, 232], [520, 290]].concat(tie(r, 0, 36)), speed: 500 },
    { up: 0.2 }, { cinch: true }, { drop: true }, { wait: 6 }];

  r = byId["two-balls"];
  S[r.id] = [{ drag: [[300, 215], [560, 270]].concat(tie(r, 0, 36)), speed: 500 },
    { up: 0.2 }, { cinch: true }, { drop: true }, { wait: 8 }];

  r = byId["wind-up"];
  { const a = px(r, 0), b = px(r, 1), c = px(r, 2);
    S[r.id] = [{ drag: [[a[0] - 70, 160]].concat([[a[0] - 44, a[1]]]).concat(spiral(a[0], a[1], 44, 44, 180, 250, 1))
      .concat([[b[0] - 44, b[1]]]).concat(spiral(b[0], b[1], 44, 44, 180, 250, 1))
      .concat([[c[0] - 44, c[1]]]).concat(spiral(c[0], c[1], 44, 44, 180, 250, 1))
      .concat([[900 * r.target[0], 640 * r.target[1]]]), speed: 600 }, { wait: 1 }]; }

  r = byId["unravel-the-first"];
  S[r.id] = [{ unravel: 3 },
    { drag: [[300, 215], [520, 340]].concat(tie(r, 0, 36)), speed: 500 },
    { up: 0.2 }, { cinch: true }, { drop: true }, { wait: 6 }];


  if (typeof module !== "undefined" && module.exports) module.exports = K;
})(typeof window !== "undefined" ? window : globalThis);

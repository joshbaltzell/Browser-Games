/*
 * Knit One — solve check. Run: node games/knit-one/dev/solve-check.js
 * Proves, with the real simulation (fixed 1/60 s ticks, no rendering), that:
 *   1. every room is solved by its recorded input sequence (solutions.js);
 *   2. in ball rooms the trivial answers FAIL: a straight line of yarn, the
 *      solution without the Tie press, and the solution with the pointer held;
 *   3. the yarn never stretches far and never enters a post.
 * Exit code is non-zero if anything is off.
 */
"use strict";
const path = require("path");
const dir = path.join(__dirname, "..");
require(path.join(dir, "rooms.js"));
require(path.join(dir, "sim.js"));
const K = require(path.join(dir, "solutions.js"));

let bad = 0;
const fmt = (n, d) => n.toFixed(d === undefined ? 2 : d);
const pad = (s, n) => (s + " ".repeat(n)).slice(0, n);
function check(label, cond, extra) {
  console.log("    " + (cond ? "ok  " : "FAIL") + "  " + label + (extra ? "  " + extra : ""));
  if (!cond) bad++;
}

console.log("Knit One solve check\n");
for (const room of K.ROOMS) {
  const sol = K.SOLUTIONS[room.id];
  console.log(pad(room.id, 20) + room.name);
  if (!sol) { check("has a recorded solution", false); continue; }
  const r = K.runScript(room, sol);
  const w = r.w;
  const used = w.paid;
  check("recorded solution wins", w.status === "won",
    "t=" + fmt(r.frames / 60, 1) + "s knots=" + w.knots.length + " yarn used=" + used + "/" + w.yarnStart +
    (w.balls.length ? " resting=" + w.balls.map(b => Math.round(b.y)).join(",") : ""));
  check("yarn stretch stays under 1.12", r.log.maxStretch < 1.12, "max " + fmt(r.log.maxStretch, 3));
  check("yarn never inside a post", r.log.minPegGap > 0, "gap " + fmt(r.log.minPegGap, 1) + "px");
  if (w.balls.length) {
    check("ball won with pointer released", !w.down);

    // 1. straight line of yarn aimed at the ball's landing spot, ball dropped
    const b = room.balls[0];
    const ax = 900 * room.anchor[0], ay = 640 * room.anchor[1];
    const lx = 900 * b[0], ly = 640 * Math.min(0.9, b[1] + 0.25);
    const straight = [{ drag: [[lx + 80, ly + 10]], speed: 600 }, { up: 0.2 }, { drop: true }, { wait: 8 }];
    const rs = K.runScript(room, straight, { ghost: null });
    check("straight line does NOT win", rs.w.status !== "won", "ball " + rs.w.balls[0].state);

    // 1b. straight line reaching all the way to the post
    if (room.pegs.length) {
      const p = room.pegs[room.pegs.length - 1];
      const st2 = [{ drag: [[900 * p[0] - 40, 640 * p[1]]], speed: 600 }, { up: 0.2 }, { drop: true }, { wait: 8 }];
      const r2 = K.runScript(room, st2);
      check("straight line to the post does NOT win", r2.w.status !== "won", "ball " + r2.w.balls[0].state);
    }

    // 2. the same recorded solution but never pressing Tie
    const noTie = sol.filter(s => !s.cinch);
    const rn = K.runScript(room, noTie);
    check("recorded solution without Tie does NOT win", rn.w.status !== "won", "knots=" + rn.w.knots.length);

    // 3. hands on the yarn: hold the pointer through the wait, must not count
    const held = sol.slice();
    const k = held.map(s => !!s.drop).lastIndexOf(true);
    // re-press the pointer on the head after dropping and keep it down
    const rh = (function () {
      const S = K.sim;
      const w2 = S.create(room);
      const inp = { x: S.head(w2).x, y: S.head(w2).y, down: false, unravel: false };
      // replay up to the drop, then hold on to the head
      const rr = K.runScript(room, sol.slice(0, k));
      const w3 = rr.w;
      S.drop(w3);
      const h = S.head(w3);
      const i3 = { x: h.x, y: h.y, down: true, unravel: false };
      for (let i = 0; i < 60 * 8 && w3.status !== "won"; i++) S.step(w3, i3);
      return w3;
    })();
    check("holding the yarn through the test does NOT win", rh.status !== "won");
  }
  console.log("");
}

// Heavy Drop: slack yarn sags the big ball off the bottom
{
  const room = K.ROOMS.find(r => r.id === "heavy-drop");
  const sloppy = [{ drag: [[300, 560], [560, 560]].concat(K.tiePath(room, 0, 36)), speed: 500 },
    { up: 0.2 }, { cinch: true }, { drop: true }, { wait: 8 }];
  const r = K.runScript(room, sloppy);
  console.log("heavy-drop with a slack span");
  check("slack yarn does NOT win (the ball sags too low)", r.w.status !== "won", "ball y=" + Math.round(r.w.balls[0].y) + " " + r.w.balls[0].state);
}
// Thin Ball: the wasteful first try plus the tidy build without unravelling runs out
{
  const room = K.ROOMS.find(r => r.id === "thin-ball");
  const r = K.runScript(room, K.SOLUTIONS[room.id].filter(s => !s.unravel));
  console.log("thin-ball without unravelling");
  check("running out of yarn means it does NOT win", r.w.status !== "won", "yarn left=" + r.w.yarn);
}
// Forgiving ties: many different loop sizes, speeds and spans all work
{
  let ok = 0, tot = 0;
  for (const id of ["first-knot", "thin-ball"]) {
    const room = K.ROOMS.find(r => r.id === id);
    const p = [900 * room.pegs[0][0], 640 * room.pegs[0][1]];
    for (const r0 of [34, 40, 52]) for (const deg of [380, 450, 540]) for (const dir of [1, -1])
      for (const speed of [350, 750]) for (const sag of [0, 40]) {
        const path = [[300, 200 + sag], [500, 262 + sag * 0.5], [p[0] - r0, p[1]]].concat(K.spiral(p[0], p[1], r0, r0 + 10, 180, deg, dir));
        const r = K.runScript(room, [{ drag: path, speed: speed }, { up: 0.2 }, { cinch: true }, { drop: true }, { wait: 6 }]);
        tot++; if (r.w.status === "won") ok++;
      }
  }
  console.log("forgiving ties");
  check("loop size / speed / direction variations win", ok === tot, ok + "/" + tot);
}

// Post to Post: wrapping order doesn't matter, and one big loop around both posts counts
{
  const room = K.ROOMS.find(r => r.id === "post-to-post");
  const a = [900 * room.pegs[0][0], 640 * room.pegs[0][1]], b = [900 * room.pegs[1][0], 640 * room.pegs[1][1]];
  const t = [900 * room.target[0], 640 * room.target[1]];
  const cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2;
  const big = [[220, 190], [cx - 165, cy]].concat(K.spiral(cx, cy, 165, 165, 180, 400, 1)).concat([t]);
  const rb = K.runScript(room, [{ drag: big, speed: 600 }, { wait: 1 }]);
  console.log("post-to-post, one big loop");
  check("one loop around both posts wins", rb.w.status === "won", "yarn left=" + rb.w.yarn);
  const rev = [[220, 190], [b[0] - 44, b[1]]].concat(K.spiral(b[0], b[1], 44, 44, 180, 250, 1))
    .concat([[a[0] - 44, a[1]]]).concat(K.spiral(a[0], a[1], 44, 44, 180, 250, 1)).concat([t]);
  const rr = K.runScript(room, [{ drag: rev, speed: 600 }, { wait: 1 }]);
  check("post 2 first, then post 1, wins", rr.w.status === "won", "yarn left=" + rr.w.yarn);
  const one = [[220, 190], [a[0] - 44, a[1]]].concat(K.spiral(a[0], a[1], 44, 44, 180, 250, 1)).concat([t]);
  const r1 = K.runScript(room, [{ drag: one, speed: 600 }, { wait: 1 }]);
  check("only one post wrapped does NOT win", r1.w.status !== "won");
}

// the finale must also work with the smallest possible saved knot
{
  const room = K.ROOMS.find(r => r.finale);
  const tiny = { nodes: [{ x: 0, y: 0 }, { x: 10, y: 5 }, { x: 20, y: 10 }, { x: 30, y: 12 }], knots: [] };
  const r = K.runScript(room, K.SOLUTIONS[room.id], { ghost: tiny });
  console.log("finale with a tiny saved knot");
  check("recorded solution wins", r.w.status === "won", "yarn used=" + (r.w.yarnStart - r.w.yarn));
  const r0 = K.runScript(room, K.SOLUTIONS[room.id].filter(s => !s.unravel));
  check("without unravelling the old knot it does NOT win", r0.w.status !== "won", "yarn left=" + r0.w.yarn);
}

console.log(bad ? "\n" + bad + " CHECK(S) FAILED" : "\nAll checks passed.");
process.exit(bad ? 1 : 0);

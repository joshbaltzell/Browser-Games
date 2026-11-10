/*
 * KNIT ONE — simulation core (no DOM, no audio, no rendering).
 * ============================================================
 * Plain script (works from file://) and also loadable from node for the
 * dev/solve-check.js proof. Everything is stepped on a fixed 1/60 s tick so a
 * recorded input sequence always plays back the same way.
 *
 * The rope is QUASI-STATIC: no gravity, no momentum. Yarn stays exactly where
 * you lay it and only moves when the head drags it, a ball presses on it, or a
 * knot / post pushes back. Constraints, in order of strictness:
 *   - posts are solid (nodes AND the line between nodes can't enter one);
 *   - the yarn can't stretch more than MAX_STRETCH (follow-the-leader from the
 *     anchor, so the head is on a leash the length of the yarn you paid out);
 *   - a cinched knot welds two points of yarn together and is a solid bead.
 * A ball only stays up if yarn tied at both ends carries it: the anchor end is
 * fixed, the other end needs a knot around a post. Hands must be off the yarn.
 *
 * YARN STRENGTH: a ball has a weight (default 1). Each strand of yarn tied at both ends and passing
 * under the ball holds one unit, so a x2 ball needs two strands. Too few and the yarn strains for
 * STRAIN_TIME seconds, then snaps (see strandsUnder / strainStep below). A snap counts as a slip.
 */
(function (root) {
  "use strict";
  const K = root.KnitOne = root.KnitOne || {};

  const VW = 900, VH = 640;
  const SEG_LEN = 16;
  const MAX_STRETCH = 1.03;       // yarn can't be pulled past this
  const ROPE_R = 3;               // half thickness for collisions
  const DT = 1 / 60;
  const HEAD_SPEED = 1300;         // px/s the head chases the pointer
  const KNOT_REST = 5;            // welded points sit this close
  const KNOT_BEAD = 9;            // a knot is a solid bead this big
  const BALL_G = 1700, BALL_DAMP = 0.96;
  const ROPE_G = 1300, ROPE_DAMP = 0.92;   // yarn only feels gravity while a ball test is running
  const STILL_SPEED = 30;         // px/s: ball counts as resting below this
  const HOLD_DEFAULT = 1.5;
  const UNRAVEL_RATE = 0.02;      // seconds per node pulled back
  const WRAP_ANGLE = Math.PI * 1.1;
  const REACH_R = 24;
  // Yarn strength: one strand of yarn carries 1 unit of weight. A ball of weight 2 needs two strands
  // passing under it. An overloaded stretch strains for STRAIN_TIME seconds, then snaps.
  const STRAND_HOLD = 1;
  const STRAIN_TIME = 1.1;
  const STRAIN_SPEED = 160;       // px/s: strain only builds once the ball has settled on the yarn

  // --------------------------------------------------------------------------
  // helpers
  // --------------------------------------------------------------------------
  function head(w) { return w.nodes[w.nodes.length - 1]; }

  function closestOnSeg(px, py, a, b) {
    const abx = b.x - a.x, aby = b.y - a.y;
    const len2 = abx * abx + aby * aby || 0.0001;
    let t = ((px - a.x) * abx + (py - a.y) * aby) / len2;
    t = Math.max(0, Math.min(1, t));
    return { x: a.x + abx * t, y: a.y + aby * t, t: t };
  }

  // intersection of segments p1p2 and p3p4; returns point or null
  function segHit(p1, p2, p3, p4) {
    const d1x = p2.x - p1.x, d1y = p2.y - p1.y;
    const d2x = p4.x - p3.x, d2y = p4.y - p3.y;
    const den = d1x * d2y - d1y * d2x;
    if (Math.abs(den) < 1e-6) return null;
    const t = ((p3.x - p1.x) * d2y - (p3.y - p1.y) * d2x) / den;
    const u = ((p3.x - p1.x) * d1y - (p3.y - p1.y) * d1x) / den;
    if (t > 0.01 && t < 0.99 && u > 0.01 && u < 0.99) {
      return { x: p1.x + d1x * t, y: p1.y + d1y * t };
    }
    return null;
  }

  function pointInPoly(px, py, pts) {
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const xi = pts[i].x, yi = pts[i].y, xj = pts[j].x, yj = pts[j].y;
      if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }

  // --------------------------------------------------------------------------
  // world creation
  // --------------------------------------------------------------------------
  // ghost: optional saved rope {nodes:[{x,y}], knots:[{i,j}]} used by the finale.
  function create(room, ghost) {
    const w = {
      room: room,
      anchor: { x: VW * room.anchor[0], y: VH * room.anchor[1] },
      pegs: (room.pegs || []).map(p => ({ x: VW * p[0], y: VH * p[1], r: p[2] })),
      balls: (room.balls || []).map(b => ({
        hx: VW * b[0], hy: VH * b[1], r: b[2] || 22, weight: b[3] || 1,
        x: VW * b[0], y: VH * b[1], px: VW * b[0], py: VH * b[1],
        state: "hook", onYarn: false, speed: 0, strands: 0, strain: 0, pips: [],
      })),
      cups: (room.cups || []).map(c => ({ x: VW * c[0], y: VH * c[1], r: c[2] })),
      target: room.target ? { x: VW * room.target[0], y: VH * room.target[1] } : null,
      nodes: [], knots: [],
      yarn: room.yarn, yarnStart: room.yarn, yarnCap: room.yarn,
      phase: "BUILD",          // BUILD: ball waits on its hook. DROPPED: ball released.
      status: "play",          // play | won
      lost: false,             // a ball fell off the bottom (or the yarn under it snapped)
      snapped: false, cut: [], // yarn gave way under a heavy ball; cut = indices of the segments that broke
      fails: 0, drops: 0,
      hold: 0, holdGoal: room.hold || HOLD_DEFAULT,
      wrapIdx: [], wrapsOk: true, wrapSeen: [],
      reached: false, dwell: 0,
      ghost: null,
      undo: [], prevDown: false,
      unravelling: false, unravelAcc: 0, recovered: 0,
      t: 0, events: [],
      knotsMade: 0, usedHint: false, paid: 0,
    };
    const a = w.anchor;
    w.nodes.push({ x: a.x, y: a.y });
    w.nodes.push({ x: a.x + 8, y: a.y + 8 });
    if (room.finale || room.ghost) seedGhost(w, ghost || K.sampleKnot());
    updateWraps(w, true);
    return w;
  }

  // The finale lays the player's saved first knot down as locked-up yarn: it is
  // translated so its first node sits on the anchor, then nudged clear of posts.
  function seedGhost(w, rec) {
    const src = rec.nodes;
    if (!src || src.length < 4) { rec = K.sampleKnot(); }
    const s = rec.nodes;
    const ox = w.anchor.x - s[0].x, oy = w.anchor.y - s[0].y;
    const from = w.nodes.length;
    // start the ghost right after the live seed so it is one continuous strand
    for (let i = 1; i < s.length; i++) {
      w.nodes.push({ x: clamp(s[i].x + ox, 10, VW - 10), y: clamp(s[i].y + oy, 10, VH - 10) });
    }
    let n = w.nodes.length - from;
    // pad with a loose coil so there is always enough yarn locked inside
    const MIN_GHOST = w.room.ghostMin || 70;
    if (n < MIN_GHOST) {
      const last = w.nodes[w.nodes.length - 1];
      const cx = last.x, cy = last.y;
      for (let i = 0; n < MIN_GHOST; i++, n++) {
        const ang = i * 0.45;
        w.nodes.push({ x: clamp(cx + Math.cos(ang) * (14 + i * 0.5), 10, VW - 10),
                       y: clamp(cy + Math.sin(ang) * (14 + i * 0.5), 10, VH - 10) });
      }
    }
    // re-space so the strand respects the stretch limit
    for (let i = 1; i < w.nodes.length; i++) {
      const p = w.nodes[i - 1], q = w.nodes[i];
      const dx = q.x - p.x, dy = q.y - p.y, d = Math.hypot(dx, dy);
      if (d > SEG_LEN) { q.x = p.x + dx / d * SEG_LEN; q.y = p.y + dy / d * SEG_LEN; }
    }
    // ring the saved knots (indices shifted by the seed node)
    if (rec.knots) {
      for (const k of rec.knots) {
        const i = k.i + (from - 1), j = k.j + (from - 1);
        if (i > 0 && j > 0 && i < w.nodes.length && j < w.nodes.length) w.knots.push({ i: i, j: j });
      }
    }
    w.ghost = { from: from, to: w.nodes.length - 1 };
    // a fresh working end beside the end of the old work
    const e = w.nodes[w.nodes.length - 1];
    w.nodes.push({ x: clamp(e.x + 8, 4, VW - 4), y: clamp(e.y + 8, 4, VH - 4) });
    w.yarnCap = w.yarnStart + (w.ghost.to - w.ghost.from + 1);
    relax(w, 4);
  }

  // Old work from a previous creation is inert: balls pass through it.
  function inert(w, i) { return !!w.ghost && i >= w.ghost.from && i <= w.ghost.to; }

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  // A built-in stand-in for "your first knot": a coil with one tied loop.
  K.sampleKnot = function () {
    const nodes = [{ x: 0, y: 0 }];
    for (let i = 1; i < 80; i++) {
      const t = i / 79, ang = t * Math.PI * 2 * 5;
      const rr = 14 + t * 34;
      nodes.push({ x: Math.cos(ang) * rr + i * 1.0, y: Math.sin(ang) * rr * 0.75 + 20 });
    }
    return { nodes: nodes, knots: [{ i: 30, j: 20 }], sample: true };
  };

  // --------------------------------------------------------------------------
  // undo
  // --------------------------------------------------------------------------
  function snapshot(w) {
    return {
      nodes: w.nodes.map(n => ({ x: n.x, y: n.y })),
      knots: w.knots.map(k => ({ i: k.i, j: k.j })),
      yarn: w.yarn,
      ghost: w.ghost ? { from: w.ghost.from, to: w.ghost.to } : null,
    };
  }
  function pushUndo(w) {
    w.undo.push(snapshot(w));
    if (w.undo.length > 40) w.undo.shift();
  }
  function restoreRope(w, s) {
    w.nodes = s.nodes.map(n => ({ x: n.x, y: n.y }));
    w.knots = s.knots.map(k => ({ i: k.i, j: k.j }));
    w.yarn = s.yarn; w.ghost = s.ghost ? { from: s.ghost.from, to: s.ghost.to } : null;
    w.cut = [];
  }
  // Going back to building: ball to its hook and the yarn exactly as the player left it.
  function ensureBuild(w) {
    if (w.phase !== "DROPPED") return;
    if (w.testSnap) restoreRope(w, w.testSnap);
    returnBalls(w);
  }
  function undo(w) {
    if (!w.undo.length || w.status !== "play") return false;
    const s = w.undo.pop();
    w.nodes = s.nodes; w.knots = s.knots; w.yarn = s.yarn; w.ghost = s.ghost;
    w.cut = []; w.unravelling = false;
    returnBalls(w);
    updateWraps(w, true);
    w.events.push({ type: "undo" });
    return true;
  }

  // --------------------------------------------------------------------------
  // balls
  // --------------------------------------------------------------------------
  function returnBalls(w) {
    for (const b of w.balls) {
      b.x = b.px = b.hx; b.y = b.py = b.hy; b.state = "hook"; b.onYarn = false; b.speed = 0;
      b.strands = 0; b.strain = 0; b.pips = [];
    }
    w.phase = "BUILD"; w.lost = false; w.hold = 0; w.snapped = false; w.cut = [];
  }

  // Drop the ball(s). From BUILD this is "Drop"; afterwards it is "Drop again":
  // balls go back to their hooks and fall again, the yarn is left as it is.
  function drop(w) {
    if (!w.balls.length || w.status !== "play") return false;
    ensureBuild(w);
    w.testSnap = snapshot(w);
    for (const n of w.nodes) { n.px = n.x; n.py = n.y; }
    for (const b of w.balls) {
      b.state = "fall"; b.px = b.x - 0.6; b.py = b.y;     // a hair of drift: nothing balances on a post
    }
    w.phase = "DROPPED"; w.lost = false; w.hold = 0; w.drops++;
    w.events.push({ type: "drop" });
    return true;
  }

  function integrateRope(w) {
    const g = ROPE_G * DT * DT;
    for (let i = 1; i < w.nodes.length; i++) {
      const n = w.nodes[i];
      const vx = (n.x - n.px) * ROPE_DAMP, vy = (n.y - n.py) * ROPE_DAMP;
      n.px = n.x; n.py = n.y;
      n.x += vx; n.y += vy + g;
      if (n.y > VH + 150) n.y = VH + 150;
    }
  }

  function integrateBalls(w) {
    for (const b of w.balls) {
      if (b.state !== "fall") continue;
      const vx = (b.x - b.px) * BALL_DAMP, vy = (b.y - b.py) * BALL_DAMP;
      b.px = b.x; b.py = b.y;
      b.x += vx; b.y += vy + BALL_G * DT * DT;
    }
  }

  function collideBalls(w) {
    for (const b of w.balls) {
      if (b.state !== "fall") continue;
      const R = b.r;
      // yarn
      for (let i = 0; i < w.nodes.length - 1; i++) {
        if (inert(w, i) && inert(w, i + 1)) continue;
        if (w.cut.length && w.cut.indexOf(i) >= 0) continue;
        const A = w.nodes[i], B = w.nodes[i + 1];
        const cp = closestOnSeg(b.x, b.y, A, B);
        let dx = b.x - cp.x, dy = b.y - cp.y, d = Math.hypot(dx, dy);
        const minD = R + ROPE_R;
        if (d < minD) {
          if (d < 1e-4) { dx = 0; dy = -1; d = 1; }
          const nx = dx / d, ny = dy / d, pen = minD - d;
          b.x += nx * pen * 0.6; b.y += ny * pen * 0.6;
          const wa = 1 - cp.t, wb = cp.t, k = pen * 0.4 / (wa * wa + wb * wb || 1);
          if (i > 0) { A.x -= nx * k * wa; A.y -= ny * k * wa; }
          B.x -= nx * k * wb; B.y -= ny * k * wb;
          b.onYarn = true;
        }
      }
      // knots are solid beads
      for (const kn of w.knots) {
        const A = w.nodes[kn.i], B = w.nodes[kn.j];
        if (!A || !B || inert(w, kn.i) || inert(w, kn.j)) continue;
        const kx = (A.x + B.x) / 2, ky = (A.y + B.y) / 2;
        let dx = b.x - kx, dy = b.y - ky, d = Math.hypot(dx, dy);
        const minD = R + KNOT_BEAD;
        if (d < minD) {
          if (d < 1e-4) { dx = 0; dy = -1; d = 1; }
          const nx = dx / d, ny = dy / d, pen = minD - d;
          b.x += nx * pen * 0.6; b.y += ny * pen * 0.6;
          if (kn.i > 0) { A.x -= nx * pen * 0.2; A.y -= ny * pen * 0.2; }
          if (kn.j > 0) { B.x -= nx * pen * 0.2; B.y -= ny * pen * 0.2; }
          b.onYarn = true;
        }
      }
      // posts
      for (const pg of w.pegs) {
        let dx = b.x - pg.x, dy = b.y - pg.y, d = Math.hypot(dx, dy);
        const minD = pg.r + R;
        if (d < minD) {
          if (d < 1e-4) { dx = 0; dy = -1; d = 1; }
          b.x = pg.x + dx / d * minD; b.y = pg.y + dy / d * minD;
        }
      }
      // other balls
      for (const o of w.balls) {
        if (o === b || o.state !== "fall") continue;
        let dx = b.x - o.x, dy = b.y - o.y, d = Math.hypot(dx, dy);
        const minD = R + o.r;
        if (d < minD) {
          if (d < 1e-4) { dx = 1; dy = 0; d = 1; }
          const pen = (minD - d) / 2;
          b.x += dx / d * pen; b.y += dy / d * pen;
          o.x -= dx / d * pen; o.y -= dy / d * pen;
        }
      }
      // side walls
      if (b.x < R) b.x = R;
      if (b.x > VW - R) b.x = VW - R;
    }
  }

  // --------------------------------------------------------------------------
  // rope constraints
  // --------------------------------------------------------------------------
  function pegPush(w) {
    const nodes = w.nodes;
    for (const pg of w.pegs) {
      const minD = pg.r + ROPE_R;
      for (let i = 0; i < nodes.length - 1; i++) {
        const A = nodes[i], B = nodes[i + 1];
        const cp = closestOnSeg(pg.x, pg.y, A, B);
        let dx = cp.x - pg.x, dy = cp.y - pg.y, d = Math.hypot(dx, dy);
        if (d >= minD) continue;
        if (d < 1e-4) { dx = 1; dy = 0; d = 1; }
        const nx = dx / d, ny = dy / d, pen = minD - d;
        let wa = 1 - cp.t, wb = cp.t;
        if (i === 0) { wa = 0; wb = Math.max(wb, 0.25); }   // the spool never moves
        const k = pen / (wa * wa + wb * wb || 1);
        if (wa) { A.x += nx * k * wa; A.y += ny * k * wa; }
        B.x += nx * k * wb; B.y += ny * k * wb;
      }
    }
  }

  function knotWeld(w) {
    for (const kn of w.knots) {
      const A = w.nodes[kn.i], B = w.nodes[kn.j];
      if (!A || !B) continue;
      let dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy) || 1e-4;
      if (d <= KNOT_REST) continue;
      const f = (d - KNOT_REST) / d;
      const aw = kn.i === 0 ? 0 : 0.5, bw = kn.j === 0 ? 0 : 0.5, tw = aw + bw || 1;
      A.x += dx * f * aw / tw; A.y += dy * f * aw / tw;
      B.x -= dx * f * bw / tw; B.y -= dy * f * bw / tw;
    }
  }

  function leash(w) {
    const nodes = w.nodes, maxLen = SEG_LEN * MAX_STRETCH;
    const a0 = w.anchor;
    nodes[0].x = a0.x; nodes[0].y = a0.y;
    for (let i = 1; i < nodes.length; i++) {
      if (w.cut.length && w.cut.indexOf(i - 1) >= 0) continue;
      const A = nodes[i - 1], B = nodes[i];
      const dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy);
      if (d > maxLen) { const k = maxLen / d; B.x = A.x + dx * k; B.y = A.y + dy * k; }
    }
  }

  // Both-way max-distance pass: yarn is inextensible, so a load on one stretch
  // of it is shared back toward the anchor and on toward the tail.
  function sweep(w) {
    const nodes = w.nodes, maxLen = SEG_LEN * MAX_STRETCH;
    const N = nodes.length;
    for (let dir = 0; dir < 2; dir++) {
      for (let k = 0; k < N - 1; k++) {
        const i = dir === 0 ? k : N - 2 - k;
        if (w.cut.length && w.cut.indexOf(i) >= 0) continue;
        const A = nodes[i], B = nodes[i + 1];
        const dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy);
        if (d <= maxLen) continue;
        const f = (d - maxLen) / d;
        const aw = i === 0 ? 0 : 0.5, bw = 0.5, tw = aw + bw;
        A.x += dx * f * aw / tw; A.y += dy * f * aw / tw;
        B.x -= dx * f * bw / tw; B.y -= dy * f * bw / tw;
      }
    }
  }

  // sym: share loads both ways (hands off the yarn). While the player is
  // dragging, only the follow-the-leader pass runs so laid yarn isn't dragged.
  function relax(w, rounds, sym) {
    for (let r = 0; r < rounds; r++) {
      pegPush(w);
      knotWeld(w);
      if (sym) { sweep(w); sweep(w); sweep(w); } else leash(w);
    }
    pegPush(w);
  }

  // --------------------------------------------------------------------------
  // steering + payout
  // --------------------------------------------------------------------------
  function steer(w, tx, ty) {
    const h = head(w);
    const total = Math.hypot(tx - h.x, ty - h.y);
    if (total < 0.01) return;
    let move = Math.min(total, HEAD_SPEED * DT);
    const steps = Math.max(1, Math.ceil(move / 4));
    const sl = move / steps;
    for (let k = 0; k < steps; k++) {
      const dx = tx - h.x, dy = ty - h.y, d = Math.hypot(dx, dy);
      if (d < 0.01) break;
      h.x += dx / d * Math.min(sl, d); h.y += dy / d * Math.min(sl, d);
      for (const pg of w.pegs) {
        const ex = h.x - pg.x, ey = h.y - pg.y, ed = Math.hypot(ex, ey);
        const minD = pg.r + ROPE_R + 1;
        if (ed < minD) {
          const u = ed < 1e-4 ? 1 : ed;
          h.x = pg.x + (ex || 1) / u * minD; h.y = pg.y + ey / u * minD;
        }
      }
    }
    h.x = clamp(h.x, 2, VW - 2); h.y = clamp(h.y, 2, VH - 2);
  }

  function payout(w) {
    while (w.yarn > 0) {
      const N = w.nodes.length;
      const p = w.nodes[N - 2], h = w.nodes[N - 1];
      const d = Math.hypot(h.x - p.x, h.y - p.y);
      if (d <= SEG_LEN) break;
      w.nodes.splice(N - 1, 0, { x: p.x + (h.x - p.x) / d * SEG_LEN, y: p.y + (h.y - p.y) / d * SEG_LEN });
      for (const k of w.knots) { if (k.i >= N - 1) k.i++; if (k.j >= N - 1) k.j++; }
      if (w.ghost && w.ghost.to >= N - 1) w.ghost.to++;
      w.yarn--; w.paid++;
    }
  }

  // --------------------------------------------------------------------------
  // cinch (tie a knot)
  // --------------------------------------------------------------------------
  function nearerNode(w, i, P) {
    const A = w.nodes[i], B = w.nodes[i + 1];
    return Math.hypot(A.x - P.x, A.y - P.y) <= Math.hypot(B.x - P.x, B.y - P.y) ? i : i + 1;
  }
  function alreadyKnotted(w, a, b) {
    // same knot, or a loop that already has a knot tied inside it
    const lo = Math.min(a, b), hi = Math.max(a, b);
    return w.knots.some(k => (Math.abs(k.i - a) <= 2 && Math.abs(k.j - b) <= 2) ||
                             (k.j >= lo - 3 && k.i <= hi + 3));
  }
  function loopHasPeg(w, from, to, P) {
    const pts = [P];
    for (let i = from; i <= to; i++) pts.push(w.nodes[i]);
    pts.push(P);
    for (let p = 0; p < w.pegs.length; p++) {
      if (pointInPoly(w.pegs[p].x, w.pegs[p].y, pts)) return p;
    }
    return -1;
  }

  // Finds the loop a cinch would tie: the latest place the yarn crosses itself
  // (preferring one with a post inside), or, if the head just missed its own line,
  // the nearest earlier yarn the head is almost touching.
  function findCinch(w) {
    const n = w.nodes, N = n.length;
    let fallback = null;
    for (let i = N - 2; i >= 4; i--) {
      for (let j = 0; j <= i - 3; j++) {
        const P = segHit(n[i], n[i + 1], n[j], n[j + 1]);
        if (!P) continue;
        if (i - j < 5 || inert(w, i) || inert(w, j)) continue;
        const a = nearerNode(w, i, P), b = nearerNode(w, j, P);
        if (alreadyKnotted(w, a, b)) continue;
        const peg = loopHasPeg(w, j + 1, i, P);
        const c = { kind: "cross", a: a, b: b, x: P.x, y: P.y, from: j + 1, to: i, peg: peg };
        if (peg >= 0) return c;
        if (!fallback) fallback = c;
      }
    }
    if (fallback) return fallback;
    // near miss: head is almost touching older yarn
    const h = n[N - 1];
    let best = null, bd = 28;
    for (let j = 0; j < N - 8; j++) {
      if (inert(w, j)) continue;
      const cp = closestOnSeg(h.x, h.y, n[j], n[j + 1]);
      const d = Math.hypot(cp.x - h.x, cp.y - h.y);
      if (d < bd) { bd = d; best = { j: j, cp: cp }; }
    }
    if (best) {
      const b = nearerNode(w, best.j, best.cp);
      if (!alreadyKnotted(w, N - 1, b)) {
        const peg = loopHasPeg(w, best.j + 1, N - 1, best.cp);
        if (peg >= 0) return { kind: "near", a: N - 1, b: b, x: best.cp.x, y: best.cp.y, from: best.j + 1, to: N - 1, peg: peg };
      }
    }
    return null;
  }

  function cinch(w) {
    if (w.status !== "play") return null;
    ensureBuild(w);
    const c = findCinch(w);
    if (!c) { w.events.push({ type: "nocinch" }); return null; }
    pushUndo(w);
    w.knots.push({ i: c.a, j: c.b });
    w.knotsMade++;
    w.events.push({ type: "cinch", x: c.x, y: c.y, onPost: c.peg >= 0 });
    relax(w, 3);
    return c;
  }

  // --------------------------------------------------------------------------
  // unravel
  // --------------------------------------------------------------------------
  function unravelStep(w) {
    w.unravelAcc += DT;
    while (w.unravelAcc >= UNRAVEL_RATE && w.nodes.length > 2) {
      w.unravelAcc -= UNRAVEL_RATE;
      w.nodes.pop();
      w.yarn = Math.min(w.yarnCap, w.yarn + 1);
      w.recovered++;
      for (let k = w.knots.length - 1; k >= 0; k--) {
        if (w.knots[k].i >= w.nodes.length || w.knots[k].j >= w.nodes.length) w.knots.splice(k, 1);
      }
      if (w.ghost) {
        if (w.ghost.to >= w.nodes.length) w.ghost.to = w.nodes.length - 1;
        if (w.ghost.to < w.ghost.from) w.ghost = null;
      }
    }
  }

  // --------------------------------------------------------------------------
  // yarn strength: how many strands pass under a resting ball, and when they give way
  // --------------------------------------------------------------------------
  // A "strand under the ball" is a span of yarn tied at both ends (the spool or a knot) that passes
  // under the ball, i.e. crosses the vertical line below the ball's centre. Two passes of the same span
  // (a loose zigzag between two ties) are still one strand, so the only way to get more is to tie more
  // spans: out to a post and back to another, or three posts in turn. Twinned spans in one hammock both
  // count even though the ball only touches the upper one. Yarn wound on a post, a loose tail and the old
  // ghost yarn are never counted; a ball resting on yarn always has at least one.
  function strandsUnder(w, b) {
    const n = w.nodes, out = [], seen = {};
    const pins = [0];
    for (const k of w.knots) { pins.push(k.i, k.j); }
    pins.sort((p, q) => p - q);
    for (let i = 0; i < n.length - 1; i++) {
      if (inert(w, i) && inert(w, i + 1)) continue;
      if (w.cut.length && w.cut.indexOf(i) >= 0) continue;
      const A = n[i], B = n[i + 1];
      const lo = Math.min(A.x, B.x), hi = Math.max(A.x, B.x);
      if (!(b.x >= lo && b.x < hi)) continue;          // half-open, so a node exactly under the ball counts once
      const y = A.y + (b.x - A.x) / (B.x - A.x) * (B.y - A.y);
      if (!(y > b.y)) continue;
      if (w.pegs.some(pg => Math.hypot(pg.x - b.x, pg.y - y) < pg.r + ROPE_R + 12)) continue;   // yarn wound on a post isn't a strand
      let left = -1, right = -1;
      for (const p of pins) { if (p <= i) left = p; else if (right < 0) right = p; }
      if (left < 0 || right < 0) continue;              // not tied at both ends
      const key = left + "-" + right;
      if (seen[key]) { seen[key].segs.push(i); continue; }
      seen[key] = { x: b.x, y: y, i: i, segs: [i] };
      out.push(seen[key]);
    }
    if (!out.length && b.onYarn) {                     // resting on a knot bead or the side of a post's yarn
      let best = null, bd = 1e9;
      for (let i = 0; i < n.length - 1; i++) {
        if (inert(w, i) && inert(w, i + 1)) continue;
        if (w.cut.length && w.cut.indexOf(i) >= 0) continue;
        const cp = closestOnSeg(b.x, b.y, n[i], n[i + 1]);
        const d = Math.hypot(cp.x - b.x, cp.y - b.y);
        if (d < bd) { bd = d; best = { x: cp.x, y: cp.y, i: i }; }
      }
      if (best) { best.segs = [best.i]; out.push(best); }
    }
    return out;
  }

  function snap(w, b) {
    for (const p of b.pips) for (const i of p.segs) if (w.cut.indexOf(i) < 0) w.cut.push(i);
    w.snapped = true; w.lost = true; w.fails++;
    w.events.push({ type: "snap", x: b.x, y: b.y + b.r, weight: b.weight, strands: b.strands });
  }

  function strainStep(w) {
    for (const b of w.balls) {
      if (b.state !== "fall" || w.phase !== "DROPPED") { b.strain = 0; b.strands = 0; b.pips = []; continue; }
      if (!b.onYarn) { b.strands = 0; b.pips = []; b.strain = Math.max(0, b.strain - DT * 3); continue; }
      b.pips = strandsUnder(w, b); b.strands = b.pips.length;
      if (b.strands * STRAND_HOLD < b.weight && b.speed < STRAIN_SPEED) b.strain += DT;
      else b.strain = Math.max(0, b.strain - DT * 2);
      if (b.strain >= STRAIN_TIME && !w.lost) snap(w, b);
    }
  }

  // --------------------------------------------------------------------------
  // wraps (reach rooms): which posts the yarn has gone around. Any order counts, and so does one
  // big loop around several posts at once (players reasonably try that)
  // --------------------------------------------------------------------------
  function wrapIndexFor(w, peg) {
    let total = 0, prev = null;
    for (let i = 0; i < w.nodes.length; i++) {
      const ang = Math.atan2(w.nodes[i].y - peg.y, w.nodes[i].x - peg.x);
      if (prev !== null) {
        let d = ang - prev;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        total += d;
        if (Math.abs(total) >= WRAP_ANGLE) return i;
      }
      prev = ang;
    }
    return -1;
  }

  function updateWraps(w, silent) {
    const list = w.room.wraps || [];
    let ok = true;
    w.wrapIdx = [];
    for (let k = 0; k < list.length; k++) {
      const idx = wrapIndexFor(w, w.pegs[list[k]]);
      w.wrapIdx.push(idx);
      if (idx < 0) ok = false;
      if (idx >= 0 && !w.wrapSeen[k] && !silent) {
        w.wrapSeen[k] = true;
        w.events.push({ type: "wrap", peg: list[k] });
      }
      if (idx < 0) w.wrapSeen[k] = false;
    }
    w.wrapsOk = ok;
  }

  // --------------------------------------------------------------------------
  // the tick
  // --------------------------------------------------------------------------
  // inp: { x, y, down, unravel }
  function step(w, inp) {
    if (w.status !== "play") return;
    w.t += DT;
    const wantUnravel = !!inp.unravel;
    const down = !!inp.down && !wantUnravel;

    if (wantUnravel) {
      if (!w.unravelling && w.nodes.length > 2) {
        ensureBuild(w);
        pushUndo(w); w.unravelling = true; w.recovered = 0; w.unravelAcc = 0;
        w.events.push({ type: "unravel" });
      }
      if (w.unravelling) unravelStep(w);
    } else {
      w.unravelling = false;
    }
    if (down && !w.prevDown) { ensureBuild(w); pushUndo(w); }
    w.prevDown = down;
    w.down = down;

    if (down) { steer(w, inp.x, inp.y); payout(w); }
    if (w.phase === "DROPPED") integrateRope(w);
    relax(w, 2, !down);

    if (w.balls.length) {
      integrateBalls(w);
      for (const b of w.balls) b.onYarn = false;
      for (let s = 0; s < 4; s++) { collideBalls(w); relax(w, 1, !down); }
      collideBalls(w);
      for (const b of w.balls) {
        if (b.state !== "fall") continue;
        b.speed = Math.hypot(b.x - b.px, b.y - b.py) / DT;
        if (b.y > VH + b.r + 10) { b.state = "lost"; }
      }
      if (w.phase === "DROPPED" && !w.lost && w.balls.some(b => b.state === "lost")) {
        w.lost = true; w.fails++;
        w.events.push({ type: "lost" });
      }
      strainStep(w);
    }

    updateWraps(w, false);

    // --- win -------------------------------------------------------------
    if (w.target) {
      const h = head(w);
      if (Math.hypot(h.x - w.target.x, h.y - w.target.y) < REACH_R && w.wrapsOk) {
        w.reached = true; w.dwell += DT;
        if (w.dwell >= 0.4) win(w);
      } else { w.reached = false; w.dwell = Math.max(0, w.dwell - DT * 2); }
    } else if (w.balls.length && w.phase === "DROPPED" && !w.lost) {
      const calm = w.balls.every(b => b.state === "fall" && b.onYarn && b.speed < STILL_SPEED && b.y < VH - b.r - 10 &&
                                      b.strands * STRAND_HOLD >= b.weight);
      const inCups = w.cups.every(c => w.balls.some(b => Math.hypot(b.x - c.x, b.y - c.y) <= c.r));
      if (calm && inCups && !down && !w.unravelling) {
        w.hold += DT;
        if (w.hold >= w.holdGoal) win(w);
      } else {
        w.hold = Math.max(0, w.hold - DT * 2);
      }
    }
  }

  function win(w) {
    w.status = "won";
    w.events.push({ type: "won" });
  }

  K.sim = {
    VW: VW, VH: VH, SEG_LEN: SEG_LEN, MAX_STRETCH: MAX_STRETCH, DT: DT, ROPE_R: ROPE_R,
    KNOT_BEAD: KNOT_BEAD, STILL_SPEED: STILL_SPEED, REACH_R: REACH_R, WRAP_ANGLE: WRAP_ANGLE,
    create: create, step: step, drop: drop, cinch: cinch, undo: undo, pushUndo: pushUndo,
    findCinch: findCinch, head: head, toBuild: ensureBuild, relax: relax, returnBalls: returnBalls,
    wrapIndexFor: wrapIndexFor, closestOnSeg: closestOnSeg,
    STRAIN_TIME: STRAIN_TIME, STRAND_HOLD: STRAND_HOLD, strandsUnder: strandsUnder,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = K;
})(typeof window !== "undefined" ? window : globalThis);

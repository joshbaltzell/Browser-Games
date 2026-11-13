// Waypoint graph and A* over the level's boxes. Points are [x, z]. Pure maths: no WebGL, no DOM.
import { sweepSphere } from './collide.js';

const SWEEP_Y = 0.9;

export function clearPath(boxes, a, b, radius) {
  return sweepSphere(boxes, [a[0], SWEEP_Y, a[1]], [b[0], SWEEP_Y, b[1]], radius) === 1;
}

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

export function buildGraph(points, boxes, { radius, linkMax }) {
  const nodes = points.map(p => [p[0], p[1]]);
  const links = nodes.map(() => []);
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (dist(nodes[i], nodes[j]) <= linkMax && clearPath(boxes, nodes[i], nodes[j], radius)) {
        links[i].push(j); links[j].push(i);
      }
    }
  }
  return { nodes, links };
}

// A* from the set of start nodes to any goal node. Euclidean cost and heuristic (toward `to`).
// Ties go to the lower node index, so the result is deterministic. Returns node indices or null.
function aStar(graph, starts, goals, from, to) {
  const { nodes, links } = graph;
  const g = new Array(nodes.length).fill(Infinity), prev = new Array(nodes.length).fill(-1);
  const closed = new Array(nodes.length).fill(false);
  const isGoal = new Array(nodes.length).fill(false);
  for (const k of goals) isGoal[k] = true;
  const open = [];
  for (const s of starts) { g[s] = dist(from, nodes[s]); open.push(s); }
  const f = (i) => g[i] + dist(nodes[i], to);
  // The goal edge counts: a goal node is reached with its own last leg to `to` added.
  let best = -1, bestCost = Infinity;
  while (open.length) {
    let bi = 0;
    for (let k = 1; k < open.length; k++) {
      const a = open[k], b = open[bi], fa = f(a), fb = f(b);
      if (fa < fb - 1e-12 || (Math.abs(fa - fb) <= 1e-12 && a < b)) bi = k;
    }
    const cur = open.splice(bi, 1)[0];
    if (closed[cur]) continue;
    if (f(cur) >= bestCost) break;           // nothing left can beat the best goal found
    closed[cur] = true;
    if (isGoal[cur]) {
      const c = g[cur] + dist(nodes[cur], to);
      if (c < bestCost - 1e-12 || (Math.abs(c - bestCost) <= 1e-12 && cur < best)) { best = cur; bestCost = c; }
    }
    for (const n of links[cur]) {
      if (closed[n]) continue;
      const ng = g[cur] + dist(nodes[cur], nodes[n]);
      if (ng < g[n] - 1e-12) { g[n] = ng; prev[n] = cur; open.push(n); }
    }
  }
  if (best < 0) return null;
  const path = [];
  for (let n = best; n >= 0; n = prev[n]) path.push(n);
  return path.reverse();
}

export function findPath(graph, boxes, from, to, radius) {
  if (clearPath(boxes, from, to, radius)) return [[to[0], to[1]]];
  const { nodes } = graph;
  const starts = [], goals = [];
  nodes.forEach((n, i) => {
    if (clearPath(boxes, from, n, radius)) starts.push(i);
    if (clearPath(boxes, n, to, radius)) goals.push(i);
  });
  if (!starts.length || !goals.length) return null;
  const idx = aStar(graph, starts, goals, from, to);
  if (!idx) return null;
  const pts = [...idx.map(i => nodes[i]), to];
  // String-pull: drop a point when the last kept point sees the next one.
  const out = [];
  let anchor = from;
  for (let i = 0; i < pts.length; i++) {
    const next = pts[i + 1];
    if (next && clearPath(boxes, anchor, next, radius)) continue;
    out.push([pts[i][0], pts[i][1]]);
    anchor = pts[i];
  }
  return out;
}

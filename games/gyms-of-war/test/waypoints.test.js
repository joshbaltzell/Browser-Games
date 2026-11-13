import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KIOSK_ROW as R } from '../src/world/kioskRow.js';
import { makeBox, pointInBoxes } from '../src/world/collide.js';
import { TUNING } from '../src/tuning.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { clearPath, buildGraph, findPath } from '../src/world/waypoints.js';
import { coverPoints } from '../src/world/coverPoints.js';

const rad = TUNING.associate.radius;
const opt = { radius: rad, linkMax: TUNING.associate.linkMax };
const solid = R.boxes.filter(b => b.kind !== 'floor');
const graph = buildGraph(R.waypoints, R.boxes, opt);
const len = (from, p) => { let l = 0, a = from; for (const q of p) { l += Math.hypot(q[0] - a[0], q[1] - a[1]); a = q; } return l; };
const sampled = (from, path) => {
  let a = from;
  for (const q of path) {
    const n = Math.ceil(Math.hypot(q[0] - a[0], q[1] - a[1]) / 0.1);
    for (let i = 0; i <= n; i++) {
      const x = a[0] + (q[0] - a[0]) * i / n, z = a[1] + (q[1] - a[1]) * i / n;
      if (pointInBoxes(solid, [x, 0.9, z], rad * 0.9)) return [x, z];
    }
    a = q;
  }
  return null;
};

test('every waypoint is >= radius + 0.1 from every box, and the graph is connected', () => {
  for (const [x, z] of R.waypoints) {
    for (const b of solid) {
      const dx = Math.max(b.min[0] - x, 0, x - b.max[0]), dz = Math.max(b.min[2] - z, 0, z - b.max[2]);
      assert.ok(Math.hypot(dx, dz) >= rad + 0.1, `[${x}, ${z}] too close to a box`);
    }
  }
  const seen = new Set([0]), stack = [0];
  while (stack.length) for (const n of graph.links[stack.pop()]) if (!seen.has(n)) { seen.add(n); stack.push(n); }
  assert.equal(seen.size, graph.nodes.length);
  graph.links.forEach((l, i) => l.forEach(j => assert.ok(graph.links[j].includes(i), 'links are symmetric')));
  graph.links.forEach((l, i) => l.forEach(j => assert.ok(Math.hypot(graph.nodes[i][0] - graph.nodes[j][0], graph.nodes[i][1] - graph.nodes[j][1]) <= opt.linkMax)));
});

test('clearPath respects the full radius', () => {
  assert.equal(clearPath(solid, [-6, -12], [6, -12], rad), true);
  assert.equal(clearPath(solid, [0, -12], [0, -5], rad), false, 'through P1');
  // 0.3 m off a box face passes a thin capsule but not a 0.35 one.
  assert.equal(clearPath(solid, [-1.3, -5], [-1.3, 0], 0.2), true);
  assert.equal(clearPath(solid, [-1.3, -5], [-1.3, 0], rad), false);
});

test('findPath: a clear line returns [to]; around K3 the path never enters a box (sampled every 0.1 m with pointInBoxes pad radius * 0.9)', () => {
  assert.deepEqual(findPath(graph, R.boxes, [-6, -12], [6, -12], rad), [[6, -12]]);
  const from = [0, -5], to = [0, 0];
  const p = findPath(graph, R.boxes, from, to, rad);
  assert.ok(p.length >= 2, 'bends around K3');
  assert.deepEqual(p[p.length - 1], to);
  assert.notDeepEqual(p[0], from);
  assert.equal(sampled(from, p), null);
  for (const [a, b] of [[[0, -13.5], [0, 11]], [[-6.2, -3.5], [4.3, 4.88]], [[6, 11], [-6, -12]]]) {
    const q = findPath(graph, R.boxes, a, b, rad);
    assert.ok(q, `${a} to ${b}`);
    assert.equal(sampled(a, q), null);
  }
});

test('findPath reaches every cover point from every associate start', () => {
  const edges = deriveCoverEdges(R.boxes, { ...edgeOptions(), exclude: R.coverExclude });
  const pts = coverPoints(edges, { spacing: TUNING.associate.pointSpacing, cornerZone: TUNING.cover.cornerZone });
  assert.ok(pts.length > 40);
  for (const a of R.associates) for (const c of pts) {
    const from = [a.pos[0], a.pos[2]];
    const p = findPath(graph, R.boxes, from, c.pos, rad);
    assert.ok(p, `${a.id} to point ${c.index} ${c.edgeId} ${c.pos}`);
    assert.deepEqual(p[p.length - 1], c.pos);
    assert.equal(sampled(from, p), null, `${a.id} to point ${c.index} clips a box`);
  }
});

test('findPath returns null when the goal is walled in, and is deterministic', () => {
  const ring = [makeBox([-1, 0, 10.8], [1, 2, 11.2]), makeBox([-1, 0, 12.8], [1, 2, 13.2]), makeBox([-1.2, 0, 10.8], [-0.8, 2, 13.2]), makeBox([0.8, 0, 10.8], [1.2, 2, 13.2])];
  const bx = [...R.boxes, ...ring];
  const g = buildGraph(R.waypoints, bx, opt);
  assert.equal(findPath(g, bx, [0, -5], [0, 12], rad), null);
  assert.equal(findPath(g, bx, [0, 12], [0, -5], rad), null);
  const a = findPath(graph, R.boxes, [-6, -12], [6, 9.5], rad), b = findPath(graph, R.boxes, [-6, -12], [6, 9.5], rad);
  assert.ok(a);
  assert.deepEqual(a, b);
});

test('A* is optimal on a 5-node toy graph with a shortcut', () => {
  // A long wall between from [0, 0] and to [10, 0]. Upper route through nodes 0-1-2 (z = 4);
  // a lower route 3-4 (z = -6) is longer. Node 1 also links to 2 directly (the shortcut) and via a detour 0-3.
  const wall = makeBox([4.5, 0, -8], [5.5, 2, 3]);
  const nodes = [[1, 4], [5, 4], [9, 4], [1, -6], [9, -6]];
  const links = [[1, 3], [0, 2], [1], [0, 4], [3]];
  const g = { nodes, links };
  const path = findPath(g, [wall], [0, 0], [10, 0], 0.35);
  assert.ok(path);
  assert.deepEqual(path[path.length - 1], [10, 0]);
  assert.ok(path.some(p => p[1] > 0) && !path.some(p => p[1] < 0), 'takes the upper route');
  // Oracle: brute-force over simple paths on the link graph, same metric, before string-pulling.
  const d = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const starts = [0, 3], goals = [2, 4];
  let best = Infinity;
  const dfs = (n, seen, cost) => {
    if (goals.includes(n)) best = Math.min(best, cost + d(nodes[n], [10, 0]));
    for (const m of links[n]) if (!seen.has(m)) dfs(m, new Set([...seen, n]), cost + d(nodes[n], nodes[m]));
  };
  for (const s of starts) dfs(s, new Set(), d([0, 0], nodes[s]));
  assert.ok(len([0, 0], path) <= best + 1e-9, `${len([0, 0], path)} vs ${best}`);
  assert.ok(Math.abs(len([0, 0], path) - best) < 1e-9, 'string-pull cannot shorten this one');
});

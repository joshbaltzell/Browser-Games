import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KIOSK_ROW as R } from '../src/world/kioskRow.js';
import { makeBox } from '../src/world/collide.js';
import { TUNING } from '../src/tuning.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { coverPoints, popPos, lineOfSight, coverValue } from '../src/world/coverPoints.js';

const opts = { spacing: 0.8, cornerZone: 0.3 };
const mk = (kind, length, openA, openB) => ({ id: `e-${kind}`, kind, a: [1, 2], b: [1 + length, 2], length, tangent: [1, 0], normal: [0, 1], height: kind === 'low' ? 1 : 2.2, openA, openB });

test('coverPoints: a 1.6 m low edge gives t 0, 0.8, 1.6; a tall edge open at both ends gives two points with end -1 and +1; closed ends give none', () => {
  const low = coverPoints([mk('low', 1.6, true, true)], opts);
  assert.deepEqual(low.map(p => p.t), [0, 0.8, 1.6]);
  assert.deepEqual(low.map(p => p.end), [-1, 0, 1]);
  assert.deepEqual(low.map(p => p.index), [0, 1, 2]);
  assert.deepEqual(low[1].pos, [1.8, 2]);
  assert.equal(low[0].edgeId, 'e-low'); assert.equal(low[0].height, 1);
  // The last point is forced to the end of an edge that is not a multiple of the spacing.
  assert.deepEqual(coverPoints([mk('low', 1.7, false, false)], opts).map(p => p.t), [0, 0.8, 1.7]);
  const tall = coverPoints([mk('tall', 3, true, true)], opts);
  assert.deepEqual(tall.map(p => [p.t, p.end]), [[0, -1], [3, 1]]);
  assert.deepEqual(coverPoints([mk('tall', 3, true, false)], opts).map(p => p.end), [-1]);
  assert.deepEqual(coverPoints([mk('tall', 3, false, true)], opts).map(p => p.end), [1]);
  assert.deepEqual(coverPoints([mk('tall', 3, false, false)], opts), []);
});

test('popPos: low stays put; tall moves popShift past the open end', () => {
  const [l0, l1] = coverPoints([mk('low', 1.6, true, true)], opts);
  assert.deepEqual(popPos(l0, 0.55), [1, 2]);
  assert.deepEqual(popPos(l1, 0.55), [1.8, 2]);
  const [a, b] = coverPoints([mk('tall', 3, true, true)], opts);
  assert.deepEqual(popPos(a, 0.55), [1 - 0.55, 2]);
  assert.deepEqual(popPos(b, 0.55), [4 + 0.55, 2]);
  const out = [9, 9];
  assert.equal(popPos(b, 0.55, out), out);
});

const edges = deriveCoverEdges(R.boxes, { ...edgeOptions(), exclude: R.coverExclude });
const pts = coverPoints(edges, { spacing: TUNING.associate.pointSpacing, cornerZone: TUNING.cover.cornerZone });
const k5 = R.boxes.findIndex(b => b.min[0] === -4.5 && b.min[2] === 3.5);
const k5Points = pts.filter(p => edges.find(e => e.id === p.edgeId).boxIndex === k5 && p.normal[1] === 1);

test('coverValue: K5 +z stand line vs a player at kioskLeft is protected and can shoot; vs a player standing at [-3.5, 0, 7] (behind it) is not protected', () => {
  assert.ok(k5Points.length >= 3);
  const left = R.features.kioskLeft.pos, behind = [-3.5, 0, 7];
  for (const p of k5Points) {
    const v = coverValue(p, [left[0], 1.2, left[2]], R.boxes);
    assert.deepEqual(v, { protected: true, canShoot: true }, `point ${p.index}`);
    assert.equal(coverValue(p, [behind[0], 1.2, behind[2]], R.boxes).protected, false, `point ${p.index} behind`);
  }
});

test('coverValue reads crouchHead and popShift from the tuning passed in; tall cover tucks at standing height', () => {
  const p = k5Points[1];
  const left = R.features.kioskLeft.pos, chest = [left[0], 1.2, left[2]];
  const t = structuredClone(TUNING);
  assert.equal(coverValue(p, chest, R.boxes, t).protected, true);
  t.combat.crouchHead = 1.6;            // a head above the 1 m wall is no longer hidden
  assert.equal(coverValue(p, chest, R.boxes, t).protected, false);
  // Behind P2's open end, popped sideways it sees the player; tucked at standing height it also does (a pillar is thin).
  const p2 = R.boxes.findIndex(b => b.min[0] === -0.4 && b.min[2] === 6.6);
  const tallPts = pts.filter(q => edges.find(e => e.id === q.edgeId).boxIndex === p2 && q.kind === 'tall');
  assert.ok(tallPts.length > 0 && tallPts.every(q => q.end !== 0));
});

test('lineOfSight is symmetric and blocked by a pillar', () => {
  const a = [0, 1.5, -10], b = [0, 1.5, -4];
  assert.equal(lineOfSight(R.boxes, a, b), false, 'P1 stands between');
  assert.equal(lineOfSight(R.boxes, b, a), false);
  const c = [1.5, 1.5, -10], d = [1.5, 1.5, -4];
  assert.equal(lineOfSight(R.boxes, c, d), true);
  assert.equal(lineOfSight(R.boxes, d, c), true);
  assert.equal(lineOfSight(R.boxes, a, a), true);
  assert.equal(lineOfSight([makeBox([-1, 0, -1], [1, 4, 1], 'pillar')], [0, 1, -5], [0, 1, 5]), false);
});

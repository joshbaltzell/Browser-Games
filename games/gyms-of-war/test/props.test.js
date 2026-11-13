import { test } from 'node:test';
import assert from 'node:assert/strict';
import { propKind, propGeometry, windowPanels } from '../src/world/props.js';
import { KIOSK_ROW } from '../src/world/kioskRow.js';
import { GREY_ROOM } from '../src/world/greyRoom.js';
import { SMOOTHIE_BAR } from '../src/world/smoothieBar.js';
import { CANCELLATION_DESK } from '../src/world/cancellationDesk.js';
import { backdropGeometry } from '../src/world/backdrop.js';

const solids = (r) => r.boxes.filter(b => b.kind !== 'floor');

test('propKind: Kiosk Row low boxes are counters, T2 is the desk, T1 is shelving, pillars are pillars', () => {
  const k = KIOSK_ROW.boxes.filter(b => b.kind === 'low');
  assert.ok(k.length === 8 && k.every(b => propKind(b) === 'counter'));
  assert.equal(propKind(KIOSK_ROW.boxes.find(b => b.kind === 'tall' && b.max[1] === 2.2 && b.max[0] - b.min[0] === 3)), 'desk');
  assert.equal(propKind(KIOSK_ROW.boxes.find(b => b.kind === 'tall' && b.max[0] - b.min[0] < 1)), 'shelf');
  assert.ok(KIOSK_ROW.boxes.filter(b => b.kind === 'pillar').every(b => propKind(b) === 'pillar'));
  assert.ok(GREY_ROOM.boxes.some(b => propKind(b) === 'planter'));
});

test('props never rise above the box they dress, so low cover stays at or below 1 m', () => {
  for (const room of [KIOSK_ROW, GREY_ROOM]) {
    const floor = room.boxes.find(b => b.kind === 'floor');
    for (const b of solids(room)) {
      const g = propGeometry([b]), pos = g.getAttribute('position');
      let top = -Infinity, lo = Infinity;
      for (let i = 0; i < pos.count; i++) { top = Math.max(top, pos.getY(i)); lo = Math.min(lo, pos.getY(i)); }
      assert.ok(top <= b.max[1] + 1e-6, `${b.kind} top ${top} vs ${b.max[1]}`);
      assert.ok(lo >= b.min[1] - 1e-6);
      for (let i = 0; i < pos.count; i++) { // at most 10 cm outside the footprint
        assert.ok(pos.getX(i) >= b.min[0] - 0.1 && pos.getX(i) <= b.max[0] + 0.1 && pos.getZ(i) >= b.min[2] - 0.1 && pos.getZ(i) <= b.max[2] + 0.1);
      }
    }
    assert.ok(windowPanels(floor).length > 20);
  }
});

test('the whole fight draws as one merged geometry with a colour per vertex and modest triangle count', () => {
  const g = propGeometry(solids(KIOSK_ROW), KIOSK_ROW.boxes.find(b => b.kind === 'floor'));
  assert.equal(g.getAttribute('color').count, g.getAttribute('position').count);
  assert.ok(g.index.count / 3 < 20000, `${g.index.count / 3} tris`);
});

test('background equipment sits past the north wall, and decor is drawn without collision boxes', () => {
  for (const room of [KIOSK_ROW, SMOOTHIE_BAR]) {
    const floor = room.boxes.find(b => b.kind === 'floor'), pos = backdropGeometry(floor).getAttribute('position');
    let minZ = Infinity;
    for (let i = 0; i < pos.count; i++) minZ = Math.min(minZ, pos.getZ(i));
    assert.ok(minZ > floor.max[2] + 0.3, `backdrop starts at z ${minZ}`);
  }
  for (const room of [KIOSK_ROW, CANCELLATION_DESK]) for (const d of room.decor || []) assert.ok(!room.boxes.includes(d));
});

// Two flat up-facing faces in one plane z-fight where they overlap seen from above. Every prop top face (normal straight up) in each room
// must not share a plane with another overlapping top face within 1 mm.
function upFaces(geo) {
  const pos = geo.getAttribute('position'), idx = geo.index, n = idx ? idx.count : pos.count, out = [];
  for (let i = 0; i + 2 < n; i += 3) {
    const a = [0, 1, 2].map(k => { const v = idx ? idx.getX(i + k) : i + k; return [pos.getX(v), pos.getY(v), pos.getZ(v)]; });
    const e1 = [a[1][0] - a[0][0], a[1][1] - a[0][1], a[1][2] - a[0][2]], e2 = [a[2][0] - a[0][0], a[2][1] - a[0][1], a[2][2] - a[0][2]];
    const nx = e1[1] * e2[2] - e1[2] * e2[1], ny = e1[2] * e2[0] - e1[0] * e2[2], nz = e1[0] * e2[1] - e1[1] * e2[0];
    const len = Math.hypot(nx, ny, nz);
    if (len < 1e-12 || Math.abs(ny) / len < 0.999 || ny < 0) continue;   // flat, facing up
    out.push({ y: (a[0][1] + a[1][1] + a[2][1]) / 3, xz: a.map(v => [v[0], v[2]]) });
  }
  return out;
}
// Separating-axis test for two 2D triangles: true when they overlap with positive area.
function overlap2d(A, B) {
  for (const T of [A, B]) for (let i = 0; i < 3; i++) {
    const [x0, z0] = T[i], [x1, z1] = T[(i + 1) % 3];
    const ax = -(z1 - z0), az = x1 - x0;
    const pa = A.map(([x, z]) => x * ax + z * az), pb = B.map(([x, z]) => x * ax + z * az);
    if (Math.max(...pa) <= Math.min(...pb) + 1e-7 || Math.max(...pb) <= Math.min(...pa) + 1e-7) return false;
  }
  return true;
}
test('no two prop top faces share a plane (within 1 mm) where they overlap: no z-fighting on counters, trims or caps', () => {
  // Plain wall slabs are the room shell (the grey room's two corner walls overlap in the level layout); they are not counters or trims.
  for (const room of [KIOSK_ROW, GREY_ROOM, SMOOTHIE_BAR, CANCELLATION_DESK]) {
    const floor = room.boxes.find(b => b.kind === 'floor');
    const faces = upFaces(propGeometry(solids(room).filter(b => propKind(b) !== 'wall'), floor)).sort((p, q) => p.y - q.y);
    for (let i = 0; i < faces.length; i++) {
      for (let j = i + 1; j < faces.length && faces[j].y - faces[i].y < 0.001; j++) {
        if (overlap2d(faces[i].xz, faces[j].xz)) assert.fail(`coplanar top faces at y ${faces[i].y.toFixed(4)} and ${faces[j].y.toFixed(4)}`);
      }
    }
  }
});

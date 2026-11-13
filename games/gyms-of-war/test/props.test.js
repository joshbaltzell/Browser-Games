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

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ceilingParts, windowCentres, floorExtents, CEILING_Y, WALL_TOP } from '../src/world/ceiling.js';
import { ARENA_LEVELS } from '../src/world/arenas.js';
import { GREY_ROOM } from '../src/world/greyRoom.js';
import { floorSign } from '../src/story.js';
import { TUNING } from '../src/tuning.js';

const SKY_WINDOW_Y = [4.55, 6.0];

test('every run arena has a ceiling spec; the grey room keeps its sky', () => {
  for (const [name, L] of Object.entries(ARENA_LEVELS)) {
    assert.ok(L.ceiling && L.ceiling.floorSign && L.ceiling.banners.length >= 1 && L.ceiling.banners.length <= 2, name);
  }
  assert.equal(GREY_ROOM.ceiling, undefined);
});

test('floor signs name the floor, with the story\'s words, near the entry', () => {
  const names = ['turnstiles', 'smoothie', 'desk'];
  names.forEach((n, i) => {
    const L = ARENA_LEVELS[n], f = L.ceiling.floorSign;
    assert.equal(f.text, floorSign(i));
    assert.ok(Math.hypot(f.pos[0] - L.spawn.pos[0], f.pos[2] - L.spawn.pos[2]) < 6, `${n}: within sight of the entry`);
  });
  assert.equal(ARENA_LEVELS.turnstiles.ceiling.banners.some(b => b.text === 'NEW YEAR, NEW YOU (FOREVER)'), true);
  assert.equal(ARENA_LEVELS.turnstiles.ceiling.banners.some(b => b.text === 'WHERE QUITTING IS NOT AN OPTION'), true);
});

test('the ceiling is above anything the lens can reach, and every part stays over the walls\' top or inside the room', () => {
  const C = TUNING.camera;
  const maxLens = Math.max(C.up + C.back * Math.sin(Math.abs(C.pitchMin)), C.sprint.up + C.sprint.back * Math.sin(Math.abs(C.pitchMin))) + C.bump.amount;
  assert.ok(CEILING_Y > maxLens + 1, `ceiling ${CEILING_Y} vs lens ${maxLens.toFixed(2)}`);
  for (const [name, L] of Object.entries(ARENA_LEVELS)) {
    const p = ceilingParts(L), e = floorExtents(L);
    for (const b of [...p.solids, ...p.lights]) {
      assert.ok(b.min[0] < b.max[0] && b.min[1] < b.max[1] && b.min[2] < b.max[2], name);
      assert.ok(b.max[1] <= CEILING_Y + 1e-9, `${name} part above the ceiling`);
      assert.ok(b.min[0] >= e.x0 - 0.31 && b.max[0] <= e.x1 + 0.31 && b.min[2] >= e.z0 - 0.31 && b.max[2] <= e.z1 + 0.31, `${name} part outside the walls`);
    }
    // Nothing hangs where the camera or Doc can be: parts under the ceiling plane stay above 5.5 m (banners hang from 4.8 m, the signs' own boards).
    for (const b of p.solids) if (b.min[1] < WALL_TOP - 1e-9) assert.fail(`${name}: part below the wall tops`);
    for (const b of p.solids.filter(s => s.min[1] >= WALL_TOP && s.max[1] <= CEILING_Y && s.min[1] < 5.5 && s.max[0] - s.min[0] > 0.1)) {   // (the sign rods are thin)
      // low parts are only the carried-up wall band, which sits in the wall's own thickness (outside the floor)
      assert.ok(b.min[0] < e.x0 || b.max[0] > e.x1 || b.min[2] < e.z0 || b.max[2] > e.z1, `${name}: a low part inside the room`);
    }
  }
});

test('space shows only through the windows: the band is solid except the window openings, on every wall', () => {
  for (const [name, L] of Object.entries(ARENA_LEVELS)) {
    const p = ceilingParts(L), e = floorExtents(L);
    const walls = {
      south: p.solids.filter(b => b.max[2] <= e.z0 && b.min[1] >= WALL_TOP), north: p.solids.filter(b => b.min[2] >= e.z1 && b.min[1] >= WALL_TOP),
      west: p.solids.filter(b => b.max[0] <= e.x0 && b.min[1] >= WALL_TOP), east: p.solids.filter(b => b.min[0] >= e.x1 && b.min[1] >= WALL_TOP),
    };
    for (const [wall, list] of Object.entries(walls)) {
      assert.ok(list.length >= 3, `${name} ${wall}`);
      const ax = (wall === 'south' || wall === 'north') ? 0 : 2, lo = ax === 0 ? e.x0 : e.z0, hi = ax === 0 ? e.x1 : e.z1;
      // sample along the wall at window height: covered by a pier except inside a window
      const wins = windowCentres(lo - (ax === 0 ? 0.3 : 0), hi - lo + (ax === 0 ? 0.6 : 0));
      assert.ok(wins.length >= 1, `${name} ${wall} has a window`);
      for (let s = lo; s <= hi; s += 0.1) {
        const y = (SKY_WINDOW_Y[0] + SKY_WINDOW_Y[1]) / 2;
        const covered = list.some(b => s >= b.min[ax] && s <= b.max[ax] && y >= b.min[1] && y <= b.max[1]);
        const inWindow = wins.some(c => Math.abs(s - c) < 1.6 + 1e-6);
        if (!covered) assert.ok(inWindow, `${name} ${wall}: open at ${s.toFixed(1)} but not a window`);
      }
      // sill and lintel run the whole length, so no sky leaks above 4 m or into the ceiling
      for (const y of [4.2, 6.25]) for (let s = lo; s <= hi; s += 0.25) assert.ok(list.some(b => s >= b.min[ax] - 1e-9 && s <= b.max[ax] + 1e-9 && y >= b.min[1] && y <= b.max[1]), `${name} ${wall}: gap at y ${y}`);
    }
  }
});

test('the light strips: rows in every bay, merged into a handful of boxes per arena', () => {
  for (const [name, L] of Object.entries(ARENA_LEVELS)) {
    const p = ceilingParts(L);
    assert.ok(p.lights.length >= 8, `${name} lights`);
    assert.ok(p.solids.length + p.lights.length < 400, `${name}: boxes (they are merged into 2 meshes)`);
  }
});

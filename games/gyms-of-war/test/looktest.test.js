import { test } from 'node:test';
import assert from 'node:assert/strict';
import { orbitOffset, gameCameraPose } from '../src/dev/lookTest.js';
import { TUNING } from '../src/tuning.js';

const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-9, `${a} vs ${b}`);

test('orbitOffset keeps the requested distance and height', () => {
  const o = orbitOffset(1.1, 0.4, 5);
  near(Math.hypot(...o), 5);
  near(o[1], Math.sin(0.4) * 5);
  const front = orbitOffset(0, 0, 3);
  near(front[2], 3);
  near(front[0], 0);
});

test('game camera sits over the right shoulder at the tuned offsets', () => {
  const { pos, look } = gameCameraPose([0, 0, 0], 0);
  // Facing +Z: right is -X, behind is -Z.
  near(pos[0], -TUNING.camera.right);
  near(pos[1], TUNING.camera.up);
  near(pos[2], -TUNING.camera.back);
  near(look[2], pos[2] + 10);
  near(look[1], pos[1]);
});

test('game camera turns with the character', () => {
  const { pos } = gameCameraPose([2, 0, 3], Math.PI / 2); // facing +X: right is +Z, behind is -X
  near(pos[0], 2 - TUNING.camera.back);
  near(pos[2], 3 + TUNING.camera.right);
});

test('createSky places the planet by a normalised world direction and leaves the mesh unrotated', async () => {
  const { createSky } = await import('../src/render/sky.js');
  const sky = createSky({ planetDir: [0, 3, -4] });
  const d = sky.mesh.material.uniforms.planetDir.value;
  assert.ok(Math.abs(d.length() - 1) < 1e-9);
  assert.ok(Math.abs(d.y - 0.6) < 1e-9 && Math.abs(d.z + 0.8) < 1e-9);
  assert.deepEqual([sky.mesh.rotation.x, sky.mesh.rotation.y, sky.mesh.rotation.z], [0, 0, 0]);
  assert.ok(createSky().mesh.material.uniforms.planetDir.value.z < 0);
});

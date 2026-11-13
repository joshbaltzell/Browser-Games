import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createToonMaterial } from '../src/render/toon.js';
import { createSky } from '../src/render/sky.js';
import { buildLookCorner } from '../src/world/lookCorner.js';

// Nothing else in Node loads the shader modules, so a syntax error in them
// would only show up in the build.
test('render and world modules load in Node and export functions', () => {
  assert.equal(typeof createToonMaterial, 'function');
  assert.equal(typeof createSky, 'function');
  assert.equal(typeof buildLookCorner, 'function');
});

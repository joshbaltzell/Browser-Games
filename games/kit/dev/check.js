// Kit checks. Run: node games/kit/dev/check.js
const assert = require('assert');
const Kit = require('../kit.js');

// ---- K1 core
(function core() {
  const a = Kit.rng(42), b = Kit.rng(42);
  const fa = [0, 1, 2, 3, 4].map(() => a()), fb = [0, 1, 2, 3, 4].map(() => b());
  assert.deepStrictEqual(fa, fb, 'rng repeats');
  fa.forEach(v => assert(v >= 0 && v < 1, 'rng range'));
  assert.notStrictEqual(Kit.rng(1)(), Kit.rng(2)(), 'rng seeds differ');
  assert.strictEqual(Kit.hash('abc'), Kit.hash('abc'));
  assert.notStrictEqual(Kit.hash('abc'), Kit.hash('abd'));
  assert.strictEqual(Kit.dailySeed(new Date(2026, 0, 1)), 0);
  assert.strictEqual(Kit.dailySeed(new Date(2026, 10, 14)), 317);
  assert.strictEqual(typeof localStorage, 'undefined');
  assert.strictEqual(Kit.store.get('x', 7), 7);
  Kit.store.set('x', 1); // must not throw
  const o = { v: 0 };
  Kit.tween(o, { v: 10 }, 100, 'linear');
  Kit.update(100);
  assert.strictEqual(o.v, 10);
  const o2 = { v: 0 };
  Kit.tween(o2, { v: 5 }, 100, 'outElastic'); Kit.update(100);
  assert.strictEqual(o2.v, 5);
  ['linear', 'outQuad', 'inOutSine', 'outBack', 'outElastic'].forEach(n => {
    assert(Math.abs(Kit.ease[n](0)) < 1e-9, n + ' at 0'); assert(Math.abs(Kit.ease[n](1) - 1) < 1e-9, n + ' at 1');
  });
  Kit.burst(0, 0, { n: 5 }); Kit.update(16); Kit.update(2000); // particles expire
  Kit.shake(5, 100); Kit.update(200);
  console.log('kit core ok');
})();

// ---- K8 rhythm
assert.strictEqual(Kit.rhythmPower(0), 1);
assert.strictEqual(Kit.rhythmPower(1), 2);
assert.strictEqual(Kit.rhythmPower(5), 3);

// ---- K4 tune, headless
(function tune() {
  const t = Kit.tune('check', { speed: { v: 3, min: 0, max: 10, step: 1 } });
  assert.strictEqual(t.speed, 3);
  console.log('kit tune ok');
})();

// ---- K3 audio, pure parts
(function audioPure() {
  const A = Kit.audio;
  assert.strictEqual(Math.round(A.hz(69)), 440);
  assert.strictEqual(Math.round(A.hz(81)), 880);
  assert.deepStrictEqual(A.scale(60, 'minorPent'), [60, 63, 65, 67, 70]);
  assert.deepStrictEqual(A.scale(60, 'major'), [60, 62, 64, 65, 67, 69, 71]);
  assert.strictEqual(A.scale(60, 'majorPent', 2).length, 10);
  const gap = A._due(10, 0, 0.15, 0.1);
  assert(gap.length <= 2, 'after a 10 s gap at most two steps, got ' + gap.length);
  assert(gap[0] >= 10, 'resumes from now, not the past');
  const normal = A._due(0, 0, 0.05, 0.1);
  assert.deepStrictEqual(normal, [0, 0.05]);
  assert.deepStrictEqual(A._due(0, 5, 0.05, 0.1), [], 'nothing due yet');
  assert.strictEqual(A.unlock(), null, 'no AudioContext in Node');
  const play = A.sfx({ a: { voice: 'thump' }, b: function () {} });
  play('a'); play('b'); play('missing'); // silent no-ops without a context
  assert.strictEqual(typeof play, 'function');
  console.log('kit audio ok');
})();

// ---- K2 assets (stub Image)
global.Image = function () {};
Object.defineProperty(global.Image.prototype, 'src', {
  set(v) {
    const self = this;
    setTimeout(function () {
      if (/ok\.png$/.test(v)) { self.naturalWidth = 10; self.naturalHeight = 10; self.onload && self.onload(); }
      else self.onerror && self.onerror();
    }, 0);
  }
});
Kit.loadAssets({
  gone: { src: 'nope/missing.png', w: 10, h: 10, fallback: { shape: 'rect', color: '#f00', w: 10, h: 10 } },
  fine: { src: 'x/ok.png', w: 10, h: 10, fallback: { shape: 'rect', color: '#0f0', w: 10, h: 10 } }
}, function () {
  assert.strictEqual(Kit.has('gone'), false);
  assert.strictEqual(Kit.has('fine'), true);
  assert.strictEqual(Kit.has('unknown'), false);
  console.log('kit assets ok');
});

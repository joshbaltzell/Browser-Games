// Kit checks. Run: node games/kit/dev/check.js
const assert = require('assert');
const Kit = require('../kit.js');
require('../rig.js');

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

// ---- rig: pose maths, clips, events
(function rig() {
  const near = (a, b, m) => assert(Math.abs(a - b) < 1e-9, (m || '') + ' ' + a + ' vs ' + b);
  const def = {
    parts: {
      body: { x: 100, y: 50 },
      arm: { parent: 'body', x: 10, y: 0, rot: Math.PI / 2 },
      hand: { parent: 'arm', x: 20, y: 0, image: 'hand', sx: 2 }
    },
    clips: {
      a: { dur: 1000, loop: true, tracks: { body: { rot: [[0, 0], [1000, 0]] }, arm: { rot: [[0, 0], [500, 1, 'linear'], [1000, 0]] } }, events: [{ t: 250, name: 'sing' }] },
      b: { dur: 1000, loop: true, tracks: { arm: { rot: [[0, 0.5], [1000, 0.5]], alpha: [[0, 0.5]] }, hand: { image: [[0, 'hand2'], [400, 'hand3']] } } },
      once: { dur: 400, tracks: { body: { x: [[0, 0], [400, 40]] } }, events: [{ t: 200, name: 'tick' }] }
    }
  };
  // composition: body at (100,50); arm 10 right of body pivot, rotated 90deg; hand 20 along the arm, which now points down
  let P = Kit.rigPose(def, [], 0);
  near(P.body.m[4], 100); near(P.body.m[5], 50);
  near(P.arm.m[4], 110); near(P.arm.m[5], 50);
  near(P.hand.m[4], 110, 'hand x'); near(P.hand.m[5], 70, 'hand y');
  near(P.hand.sx, 2); near(P.hand.m[0], 0, 'hand rotated'); near(P.hand.m[1], 2, 'hand scaled in parent frame');
  const hp = Kit.Rig.apply(P.hand.m, 1, 0);
  near(hp.x, 110); near(hp.y, 72);
  // parent rotation carries children
  P = Kit.rigPose(def, [{ clip: 'a', t: 500 }], 0);
  near(P.arm.rot, Math.PI / 2 + 1);
  // blend 50%
  P = Kit.rigPose(def, [{ clip: 'a', t: 500, w: 0.5 }, { clip: 'b', t: 0, w: 0.5 }], 0);
  near(P.arm.rot, Math.PI / 2 + 0.75, 'blend 50%');
  near(P.arm.alpha, 0.75, 'alpha blend');
  // weights normalise
  P = Kit.rigPose(def, [{ clip: 'a', t: 500, w: 2 }, { clip: 'b', t: 0, w: 2 }], 0);
  near(P.arm.rot, Math.PI / 2 + 0.75, 'weights normalise');
  // image swap, heaviest clip wins, rest image otherwise
  assert.strictEqual(Kit.rigPose(def, [{ clip: 'b', t: 100 }], 0).hand.image, 'hand2');
  assert.strictEqual(Kit.rigPose(def, [{ clip: 'b', t: 500 }], 0).hand.image, 'hand3');
  assert.strictEqual(Kit.rigPose(def, [{ clip: 'a', t: 0 }], 0).hand.image, 'hand');
  // looping wraps, one-shot clamps
  near(Kit.rigPose(def, [{ clip: 'a', t: 1500 }], 0).arm.rot, Math.PI / 2 + 1, 'loop wrap');
  near(Kit.rigPose(def, [{ clip: 'a', t: -500 }], 0).arm.rot, Math.PI / 2 + 1, 'negative wrap');
  near(Kit.rigPose(def, [{ clip: 'once', t: 9999 }], 0).body.x, 140, 'one-shot clamps');
  // layers add on top
  P = Kit.rigPose(def, [{ clip: 'a', t: 0 }], 250, [{ part: 'body', prop: 'y', amp: 4, hz: 1 }]);
  near(P.body.y, 54, 'sine layer at quarter period');
  // instance: events once per loop, blend, one-shot end/next
  const r = Kit.rig(def), seen = [];
  r.on('sing', (n, c) => seen.push(c));
  r.play('a', { blend: 0 });
  for (let i = 0; i < 100; i++) r.update(50); // 5 s = 5 loops
  assert.strictEqual(seen.length, 5, 'sing fires once per loop, got ' + seen.length);
  r.play('b', { blend: 200 });
  r.update(100);
  assert.strictEqual(r.states.length, 2, 'cross-fading');
  const w = r.states.map(s => s.w);
  near(w[0] + w[1], 1, 'fade weights sum to 1');
  r.update(150);
  assert.strictEqual(r.states.length, 1, 'old clip dropped after fade');
  let ticks = 0, ends = 0;
  r.on('tick', () => ticks++); r.on('end', () => ends++);
  r.play('once', { blend: 0, next: 'a' });
  for (let i = 0; i < 10; i++) r.update(100);
  assert.strictEqual(ticks, 1); assert.strictEqual(ends, 1);
  assert.strictEqual(r.states[r.states.length - 1].clip, 'a', 'next clip plays after one-shot');
  r.layer('breath', { part: 'body', prop: 'y', amp: 2, hz: 1 });
  r.update(16);
  assert.strictEqual(typeof r.pose().body.m[5], 'number');
  // drawing with no images and no window must not throw
  const calls = [];
  const ctx = new Proxy({}, { get: (t, k) => (k in t ? t[k] : (...a) => { calls.push(k); }), set: (t, k, v) => { t[k] = v; return true; } });
  r.draw(ctx, 10, 10, { scale: 2, flipX: true });
  console.log('kit rig ok');
})();

// ---- mesh: deformers
(function mesh() {
  const D = Kit.deform, tp = [0, 130, 777];
  const grid = []; for (let u = 0; u <= 1; u += 0.25) for (let v = 0; v <= 1; v += 0.25) grid.push([u, v]);
  const zero = (f, m) => tp.forEach(t => grid.forEach(([u, v]) => {
    const d = f(u, v, t); assert(Math.abs(d.dx) < 1e-12 && Math.abs(d.dy) < 1e-12, m + ' at ' + u + ',' + v);
  }));
  zero(D.breathe(0, 1), 'breathe 0'); zero(D.wobble(0, 2, 1), 'wobble 0');
  zero(D.bulge(0.5, 0.5, 0.3, 0), 'bulge 0'); zero(D.sway(0, 1), 'sway 0'); zero(D.squash(1, 1), 'squash 1');
  zero(D.combine(), 'combine none');
  // sway is fixed at the base and moves the top
  tp.forEach(t => [0, 0.5, 1].forEach(u => { const d = D.sway(0.2, 1)(u, 1, t); assert(d.dx === 0 && d.dy === 0, 'sway fixed at base'); }));
  assert(Math.abs(D.sway(0.2, 1)(0.5, 0, 125).dx) > 0.01, 'sway moves the top');
  // bulge pushes outward inside the radius, nothing outside
  const b = D.bulge(0.5, 0.5, 0.3, 0.4);
  assert(b(0.6, 0.5, 0).dx > 0 && b(0.4, 0.5, 0).dx < 0, 'bulge outward');
  assert.strictEqual(b(0.95, 0.5, 0).dx, 0, 'bulge outside radius');
  assert.strictEqual(b(0.5, 0.5, 0).dx, 0, 'bulge centre fixed');
  // squash scales about the anchor: bottom centre stays, top moves down when sy < 1
  const sq = D.squash(1.2, 0.8);
  assert(Math.abs(sq(0.5, 1, 0).dx) + Math.abs(sq(0.5, 1, 0).dy) < 1e-12, 'squash anchor fixed');
  assert(Math.abs(sq(0.5, 0, 0).dy - 0.2) < 1e-12, 'squash top moves down');
  assert(Math.abs(sq(1, 1, 0).dx - 0.1) < 1e-12, 'squash widens');
  // combine adds offsets
  const f1 = (u, v, t) => ({ dx: 1, dy: 2 }), f2 = (u, v, t) => ({ dx: 0.5, dy: -1 });
  assert.deepStrictEqual(D.combine(f1, f2)(0, 0, 0), { dx: 1.5, dy: 1 });
  // animated arguments
  assert(Math.abs(D.squash(t => 1 + t / 1000, 1)(1, 1, 500).dx - 0.25) < 1e-12);
  // drawing in Node with no image is a safe no-op
  const m = Kit.mesh('nothing', { cols: 4, rows: 4 });
  m.draw(new Proxy({}, { get: () => () => {} }), 0, 0, { w: 10, h: 10, deform: D.breathe(0.1, 1), t: 5 });
  // triangle mapping: identity grid draws each triangle with an identity-like transform
  const seen = [];
  const rec = new Proxy({}, { get: (t, k) => k === 'transform' ? (...a) => seen.push(a) : () => {} });
  Kit.mesh._tri(rec, {}, 100, 100, 0, 0, 1, 0, 0, 1, { x: 0, y: 0 }, { x: 100, y: 0 }, { x: 0, y: 100 });
  seen[0].forEach((v, i) => assert(Math.abs(v - [1, 0, 0, 1, 0, 0][i]) < 1e-9, 'affine identity ' + seen[0]));
  console.log('kit mesh ok');
})();

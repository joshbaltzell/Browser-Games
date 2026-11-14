(function () {
  'use strict';
  // Every feel constant lives here. Press ` in the game to tune it live.
  var TUNE = {
    // example: { v: 1, min: 0, max: 2, step: 0.05 }
  };
  var assets = typeof ASSETS !== 'undefined' ? ASSETS : {};
  var bgName = Object.keys(assets).filter(function (n) { return /^bg/.test(n); })[0];
  var running = false;

  var g = Kit.boot({
    slug: 'nerf-the-wolves',
    world: { w: 1280, h: 720 },
    assets: assets,
    tune: TUNE,
    onStart: function () { /* assets are ready (or replaced by fallbacks) */ },
    onFrame: function (dt, game) {
      var ctx = game.ctx;
      ctx.save();
      Kit.applyShake(ctx);
      if (bgName) Kit.draw(ctx, bgName, 640, 720, { w: 1280, h: 720 });
      else { ctx.fillStyle = '#20242e'; ctx.fillRect(0, 0, 1280, 720); }
      // draw the game here, in 1280x720 world units
      Kit.drawParticles(ctx);
      ctx.restore();
    },
    onPause: function () { /* freeze game timers if you keep any outside the frame loop */ },
    onResume: function () {}
  });

  document.getElementById('start').addEventListener('click', function () {
    document.getElementById('title').classList.add('hidden');
    running = true; // the first tap also unlocks audio (Kit.boot)
  });
  window.__game = { g: g, isRunning: function () { return running; } };
})();

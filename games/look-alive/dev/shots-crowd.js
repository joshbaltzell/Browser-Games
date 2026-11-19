// Crowd screenshots: PREFIX=before|after node games/look-alive/dev/cdp-drive.js games/look-alive/dev/shots-crowd.js
// Dish 2 (ticks 150, 30) and dish 12 (tick 150), carried cell, zoom 1. Writes PNGs to SHOTDIR.
module.exports = async (a) => {
  const W = require('./walk-lib.js')(a);
  const dir = process.env.SHOTDIR || '/private/tmp/claude-501/-Users-joshbaltzell-Documents-GitHub-Browser-Games/89b58f96-d0f7-4429-8a6c-2a36f7040348/scratchpad/shots';
  const pre = process.env.PREFIX || 'after';
  await W.fresh({ seenWorld: true, unlocked: true });
  const one = async (id, tick, name) => {
    await a.eval(`__la.selectDish(${id});__la.show('adapt');1`); await a.sleep(800);
    await a.eval(`__la.run();__la.S.playing=false;__la.seek(${tick});1`); await a.sleep(500);
    await a.eval(`(function(){var g=__la.gl();g.view.zoom=1;g.view.cx=0;g.view.cy=0;g.frame(performance.now());return 1})()`);
    const r = await W.ev(`(function(){var g=__la.gl();return {vis:g.vis,thin:g.thin,t:__la.S.t}})()`); console.log(name, JSON.stringify(r));
    await a.eval(`__la.gl().frame(performance.now());1`);
    await a.shot(`${dir}/${pre}-${name}.png`);
  };
  await one(2, 150, 'd2-t150'); await one(2, 30, 'd2-t30');
  await a.eval(`for(var i=1;i<=10;i++)__la.S.cleared[i]=true;__la.S.cleared[11]=true;__la.S.seenWorldB=true;1`);
  await one(12, 150, 'd12-t150');
};

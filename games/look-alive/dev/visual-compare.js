// Look Alive game-screen visual pass test: event zoom + compare with the previous run, through the CDP driver.
//   node games/look-alive/dev/cdp-drive.js games/look-alive/dev/visual-compare.js        (VW=390 VH=844 MOB=1 for a phone)
// (a) dish 5 carried cell (a loss): the zoom fires once; not in Watch mode; not on a win. (b) dish 5 carried, apply a fix, run again: Hold swaps the renderer run and restores it
// with view and tick unchanged. (c) Keep holds the baseline over a third run. (d) the same as (b) on dish 12. Screenshots: SHOTS=dir (default scratchpad shots).
module.exports = async (a) => {
  const W = require('./walk-lib.js')(a), ev = W.ev, out = [];
  const SHOTS = process.env.SHOTS || '/private/tmp/claude-501/-Users-joshbaltzell-Documents-GitHub-Browser-Games/89b58f96-d0f7-4429-8a6c-2a36f7040348/scratchpad/shots';
  const tag = process.env.VW ? '-' + process.env.VW : '';
  const ok = (c, m) => { out.push(!!c); console.log((c ? 'PASS ' : 'FAIL ') + m); };
  const shot = async (n) => { try { require('fs').mkdirSync(SHOTS, { recursive: true }); await a.shot(SHOTS + '/game-' + n + tag + '.png'); } catch (e) { console.log('shot failed ' + e); } };
  await W.fresh({ seenWorld: true, unlocked: true });
  const has = await ev(`(function(){__la.selectDish(5);__la.show('adapt');return 1})()`); await a.sleep(800);
  // ---- (a) event zoom
  await ev(`(function(){__la.run();__la.S.speed=4;return 1})()`);
  const hasMethods = await ev(`(function(){var g=__la.gl();return !!g&&typeof g.locate==='function'&&typeof g.eventZoom==='function'&&typeof g.eventActive==='function'})()`);
  console.log('renderer has locate/eventZoom/eventActive: ' + hasMethods);
  const info = await ev(`({cause:__la.S.run.autopsy&&__la.S.run.autopsy.cause,from:__la.S.run.autopsy&&__la.S.run.autopsy.from,win:__la.S.run.v.win})`);
  console.log('dish 5 carried: ' + JSON.stringify(info));
  ok(info && !info.win, 'dish 5 carried cell loses');
  let fired = null, firedT = null, line = '', seenActive = false;
  for (let i = 0; i < 160 && !fired; i++) {
    await a.sleep(100);
    const z = await ev(`({z:__la.eventZoomState(),t:__la.S.t,rl:document.getElementById('readLine').textContent})`);
    if (z.z.active) { seenActive = true; line = z.rl; }
    if (z.z.fired) { fired = z.z; firedT = z.t; }
  }
  console.log('event zoom state: ' + JSON.stringify(fired) + ' at t=' + firedT + ' line=' + line);
  if (hasMethods) {
    ok(fired && fired.kind === 'food' && fired.target, 'zoom fired for a bust loss, kind food, with a target');
    ok(firedT >= info.from - 6.5 && firedT <= info.from + 12, 'fired within 6 ticks before the loss start tick (the glide starts early) ' + info.from + ' (t=' + (firedT && firedT.toFixed(1)) + ')');
    ok(seenActive && /CAMERA:/.test(line), 'reading line carries a CAMERA phrase while active: ' + line);
    await a.sleep(400);
    const again = await ev(`__la.eventZoomState()`); ok(again.fired === true, 'stays fired (no second zoom this playback)');
    await a.sleep(7500);
    ok(!/CAMERA/.test(await ev(`document.getElementById('readLine').textContent`)), 'phrase leaves when the zoom ends');
  }
  // restart playback: fired state resets then fires again; Watch mode never does
  await ev(`(function(){__la.seek(0);__la.S.playing=true;__la.S.speed=4;return 1})()`); await a.sleep(300);
  await ev(`(function(){__la.S.t=0;__la.S.playing=true;return 1})()`);
  // Watch mode
  await ev(`(function(){__la.enterWatch();__la.S.speed=16;return 1})()`); await a.sleep(300);
  await ev(`(function(){__la.S.playing=true;return 1})()`); await a.sleep(5000);
  ok((await ev(`__la.eventZoomState()`)).fired === false, 'no event zoom in Watch mode');
  // a win: dish 5 with the rule fix
  await ev(`(function(){__la.show('adapt');__la.fix('stringent');__la.run();__la.S.speed=16;return 1})()`);
  const win = await ev(`__la.S.run.v.win`); console.log('dish 5 stringent win=' + win);
  await a.sleep(6000);
  ok(win && (await ev(`__la.eventZoomState()`)).fired === false, 'no event zoom on a win');

  // ---- (b) compare, dish 5
  async function compareCase(id, fixId, label) {
    await ev(`(function(){delete __la.S.prev[${id}];return 1})()`);
    await ev(`(function(){__la.selectDish(${id});__la.show('adapt');return 1})()`); await a.sleep(600);
    await ev(`(function(){__la.run();__la.S.playing=false;__la.seek(150);return 1})()`); await a.sleep(500);
    const first = await ev(`__la.compareState()`);
    ok(first.available === false, label + ' first run: compare not available');
    if (id === 5) await shot('run-first');
    await ev(`(function(){__la.show('adapt');__la.fix('${fixId}');__la.run();__la.S.playing=false;__la.seek(150);return 1})()`); await a.sleep(600);
    const st = await ev(`__la.compareState()`);
    console.log(label + ' compareState ' + JSON.stringify(st));
    ok(st.available === true, label + ' second run: compare available');
    ok(st.diffText && /Changed:/.test(st.diffText), label + ' diff text names the change');
    const before = await ev(`(function(){var g=__la.gl();return {run:g?g.run===__la.S.run:null,view:g?JSON.stringify(g.view):null,t:__la.S.t,sh:document.getElementById('readLine').textContent}})()`);
    if (id === 5) await shot('run-available');
    await ev(`__la.compare(true)`); await a.sleep(400);
    const held = await ev(`(function(){var g=__la.gl();return {held:__la.compareState().held,run:g?g.run===__la.S.run:null,view:g?JSON.stringify(g.view):null,t:__la.S.t,rl:document.getElementById('readLine').textContent,share:__la.S.run.H.share[150]}})()`);
    console.log(label + ' held ' + JSON.stringify(held));
    if (id === 5) await shot('run-held');
    ok(held.held === true && /^PREVIOUS RUN/.test(held.rl), label + ' held shows PREVIOUS RUN in the reading line');
    if (before.run !== null) { ok(held.run === false, label + ' held: renderer run swapped'); ok(held.view === before.view && held.t === before.t, label + ' held: view and tick unchanged'); }
    await ev(`__la.compare(false)`); await a.sleep(400);
    const rel = await ev(`(function(){var g=__la.gl();return {held:__la.compareState().held,run:g?g.run===__la.S.run:null,view:g?JSON.stringify(g.view):null,t:__la.S.t}})()`);
    ok(rel.held === false && (rel.run === null || rel.run === true), label + ' release restores the current run');
    ok(rel.view === before.view && rel.t === before.t, label + ' release: view and tick unchanged');
    return st;
  }
  await compareCase(5, 'rule', 'dish 5');
  // real pointer: hold with a mouse press, release on mouse up, and leaving the screen releases
  await ev(`(function(){__la.selectDish(5);__la.show('adapt');__la.run();__la.S.playing=false;__la.seek(100);__la.show('adapt');__la.fix('rule');__la.run();__la.S.playing=false;__la.seek(100);return 1})()`); await a.sleep(500);
  const r = await ev(`(function(){document.getElementById('cmpBtn').scrollIntoView({block:'center'});var b=document.getElementById('cmpBtn').getBoundingClientRect();return {x:b.x+b.width/2,y:b.y+b.height/2}})()`);
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: r.x, y: r.y, button: 'none' });
  await a.send('Input.dispatchMouseEvent', { type: 'mousePressed', x: r.x, y: r.y, button: 'left', clickCount: 1 }); await a.sleep(200);
  ok((await ev(`__la.compareState().held`)) === true, 'mouse press holds');
  await a.send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: r.x, y: r.y, button: 'left', clickCount: 1 }); await a.sleep(200);
  ok((await ev(`__la.compareState().held`)) === false, 'mouse release lets go');
  await ev(`__la.compare(true)`); await ev(`__la.show('adapt')`);
  ok((await ev(`__la.compareState().held`)) === false, 'leaving the Run screen releases');
  await ev(`(function(){__la.show('run');__la.compare(true);__la.showResult();return 1})()`);
  ok((await ev(`__la.compareState().held`)) === false, 'opening the result overlay releases');
  // ---- (c) Keep over a third run
  await ev(`(function(){document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.selectDish(5);__la.show('adapt');__la.run();return 1})()`);
  await ev(`(function(){__la.show('adapt');__la.fix('stringent');__la.run();return 1})()`);   // run 2: baseline = carried cell
  const keepBefore = await ev(`__la.compareState().diffText`);
  await ev(`(function(){var k=document.getElementById('cmpKeep');k.checked=true;k.dispatchEvent(new Event('change'));return 1})()`);
  await ev(`(function(){__la.show('adapt');__la.setDial('pace',6);__la.run();return 1})()`);   // run 3
  const keepAfter = await ev(`__la.compareState()`);
  console.log('keep: before ' + keepBefore + ' | after ' + JSON.stringify(keepAfter));
  ok(keepAfter.kept === true && /Stringent/.test(keepAfter.diffText) && /Pace/.test(keepAfter.diffText), 'Keep on: third run still compares to the kept baseline (diff has both the Stringent change and the new Pace): ' + keepAfter.diffText);
  const sameBase = await ev(`(function(){var C=__la.S;return C.ghost&&JSON.stringify(C.ghost.build)===JSON.stringify(__la.S.cmp.base.build)})()`);
  ok(sameBase === true, 'ghost is still the kept baseline after run 3');
  await ev(`(function(){__la.selectDish(5);return 1})()`);
  const cleared = await ev(`__la.S.cmp`); ok(cleared.kept === false && cleared.base === null && cleared.run === null, 'selecting a dish clears compare state');
  // ---- (d) dish 12
  await compareCase(12, 'pili', 'dish 12');
  console.log(out.every(Boolean) ? 'ALL PASS ' + out.length : 'FAILURES ' + out.filter(x => !x).length + ' of ' + out.length);
};

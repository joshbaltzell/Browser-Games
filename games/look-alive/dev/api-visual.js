// Proves the Dish API added for the visual pass:  node games/look-alive/dev/cdp-drive.js games/look-alive/dev/api-visual.js
// locate (colony/thinning/food), eventZoom + return, wheel cancel + userMoved, setRun keepView, reduced-motion refusal.
module.exports = async (a) => {
  const W = require('./walk-lib.js')(a), ev = W.ev; let bad = 0;
  const ok = (c, m) => { if (!c) bad++; console.log((c ? 'PASS ' : 'FAIL ') + m); };
  await W.fresh({ seenWorld: true, unlocked: true });
  await a.eval(`__la.selectDish(2);__la.show('adapt');1`); await a.sleep(800);
  await a.eval(`__la.run();__la.S.playing=false;__la.seek(150);1`); await a.sleep(500);
  const L = await ev(`(function(){var g=__la.gl(),o={};['colony','thinning','food'].forEach(function(k){o[k]=g.locate(k,150)});o.thin30=g.locate('thinning',30);o.bad=g.locate('nope',30);o.last=g.locate('thinning',g.run.T);return o})()`);
  console.log(JSON.stringify(L));
  const sane = (p) => p && isFinite(p.x) && isFinite(p.y) && Math.abs(p.x) <= 1 && Math.abs(p.y) <= 1 && typeof p.cool === 'boolean';
  ok(sane(L.colony), 'colony located'); ok(L.colony && Math.abs(L.colony.x) < 1, 'colony inside dish');
  ok(L.thinning === null || sane(L.thinning), 'thinning null or sane'); ok(L.thin30 === null || sane(L.thin30), 'thinning@30 null or sane');
  ok(sane(L.food), 'food located'); ok(L.bad === null, 'unknown kind -> null'); ok(L.last === null || sane(L.last), 'thinning in last interval ok');
  const cl = await ev(`(function(){var g=__la.gl();return g.locate('colony',150)})()`); const c0 = await ev(`(function(){var g=__la.gl(),c=g.colonyAt(150);return {x:c[0],y:c[1]}})()`);
  ok(Math.abs(cl.x - c0.x) < 1e-9 && Math.abs(cl.y - c0.y) < 1e-9, 'colony matches colonyAt');
  const cool = await ev(`(function(){var g=__la.gl();return g.locate('colony',150).cool})()`); ok(cool === false, 'dish 2 (no temperature) cool=false');
  // event zoom
  await a.eval(`(function(){var g=__la.gl();g.reduced=false;g.userMoved=false;g.anim=null;g.focusBase=0.5;g.exposure=1;g.view.zoom=1;g.view.cx=0;g.view.cy=0;window.__t0=g.view.zoom;return 1})()`);
  const st = await ev(`(function(){var g=__la.gl();return {r:g.eventZoom(g.locate('colony',150)),act:g.eventActive(),again:g.eventZoom({x:0,y:0})}})()`);
  ok(st.r === true && st.act === true && st.again === false, 'eventZoom starts; second call refused while running');
  const step = (dt, n) => a.eval(`(function(){var g=__la.gl();for(var i=0;i<${n};i++)g.stepAnim(${dt});return 1})()`);
  await step(0.1, 25); let v = await ev(`(function(){var g=__la.gl();return {z:g.view.zoom,cx:g.view.cx,cy:g.view.cy,f:g.focusBase,e:g.exposure}})()`);
  console.log('mid-hold', JSON.stringify(v)); ok(v.z > 2.5 && v.z <= 2.61, 'zoomed to about 2.6 during hold'); ok(v.f === 0.5 && v.e === 1, 'focus and exposure untouched');
  await step(0.1, 60); v = await ev(`(function(){var g=__la.gl();return {z:g.view.zoom,cx:g.view.cx,cy:g.view.cy,act:g.eventActive()}})()`);
  ok(v.z === 1 && v.cx === 0 && v.cy === 0 && !v.act, 'returned to the start view, anim cleared'); 
  // wheel cancel
  await a.eval(`(function(){var g=__la.gl();g.userMoved=false;g.eventZoom(g.locate('colony',150));g.stepAnim(0.5);return 1})()`);
  const r = await ev(`(function(){var g=__la.gl(),cv=g.cv;cv.dispatchEvent(new WheelEvent('wheel',{deltaY:-100,clientX:200,clientY:300,bubbles:true,cancelable:true}));return {act:g.eventActive(),um:g.userMoved,z:g.view.zoom}})()`);
  ok(!r.act && r.um === true, 'wheel cancels the event move and sets userMoved (zoom ' + (r.z && r.z.toFixed(2)) + ')');
  const after = await ev(`(function(){var g=__la.gl();g.stepAnim(1);var z=g.view.zoom;g.stepAnim(5);return {z0:z,z1:g.view.zoom,ez:g.eventZoom({x:0.1,y:0.1})}})()`);
  ok(after.z0 === after.z1 && after.ez === false, 'camera stays where the player put it; eventZoom refused after userMoved');
  // keepView
  const k = await ev(`(function(){var g=__la.gl();g.view.zoom=2.2;g.view.cx=0.2;g.view.cy=-0.1;g.setTick(77);var tk=g.tick;g.setRun(g.run,g.D,g.build,{keepView:true,slots:g.slots,machine:g.mach});var kept=[g.view.zoom,g.view.cx,g.view.cy,g.tick,g.userMoved];g.setRun(g.run,g.D,g.build,{slots:g.slots,machine:g.mach});return {kept:kept,reset:[g.view.zoom,g.tick,g.userMoved]}})()`);
  ok(k.kept[0] === 2.2 && k.kept[1] === 0.2 && k.kept[2] === -0.1 && k.kept[3] === 77 && k.kept[4] === true, 'setRun keepView keeps view, tick, userMoved');
  ok(k.reset[0] === 1 && k.reset[1] === 0 && k.reset[2] === false, 'setRun without keepView resets view, tick, userMoved');
  // reduced + jump target
  const j = await ev(`(function(){var g=__la.gl();g.reduced=true;var r=g.eventZoom({x:0.2,y:0.2});g.rackFocus('jump',{x:0.3,y:-0.2});var o={r:r,z:g.view.zoom,cx:g.view.cx,cy:g.view.cy};g.reduced=false;return o})()`);
  ok(j.r === false && j.z > 2 && Math.abs(j.cx - 0.3) < 1e-9 && Math.abs(j.cy + 0.2) < 1e-9, 'reduced: eventZoom refused; rackFocus jump goes to the explicit target');
  // dish 12 cool
  await a.eval(`for(var i=1;i<=10;i++)__la.S.cleared[i]=true;__la.S.cleared[11]=true;__la.S.seenWorldB=true;__la.selectDish(12);__la.show('adapt');1`); await a.sleep(800);
  await a.eval(`__la.run();__la.S.playing=false;__la.seek(150);1`); await a.sleep(500);
  const d12 = await ev(`(function(){var g=__la.gl();return {c:g.locate('colony',150),t:g.locate('thinning',150),f:g.locate('food',150)}})()`);
  console.log('dish12 ' + JSON.stringify(d12)); ok(d12.c && typeof d12.c.cool === 'boolean', 'dish 12 locate gives a boolean cool');
  console.log('API-VISUAL ' + (bad ? 'FAIL' : 'PASS'));
};

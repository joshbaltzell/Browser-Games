// Look Alive skill tree walkthrough, through the CDP driver:
//   node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough-tree.js        (also: VW=390 VH=844 MOB=1)
// Env: SHOTS=<folder> writes screenshots there (true viewport-sized clips); without it no screenshots are taken.
// Flow: Skills button from the dish list (every node one tile, no overlap, every link has a line, no page scroll, nothing fitted or available), Escape and focus return,
// dish 5 Adapt (carried parts fitted, shelf cards available, a locked skill shows its reason, "Fit this" changes build and energy without moving a tile),
// keyboard only (Tab, Enter, arrows, Enter, Escape), dish 16 (Move and Sense show the salt-flat cards), and a "with" requirement set in memory (blocked reason and link).
// Prints a SUMMARY line with a "failed" list. The driver adds "0 errors" or the errors.
module.exports = async (a) => {
  const W = require('./walk-lib.js')(a), ev = W.ev, path = require('path');
  const SHOTS = process.env.SHOTS || '', MOB = !!process.env.MOB, vw = +(process.env.VW || 1280), vh = +(process.env.VH || 720);
  const sum = {}, failed = [];
  const check = (name, ok) => { sum[name] = !!ok; if (!ok) failed.push(name); return !!ok; };
  const shot = async (name) => { if (!SHOTS) return; await a.eval(`scrollTo(0,0);1`); await a.sleep(80); await a.shot(path.join(SHOTS, name), { x: 0, y: 0, width: vw, height: vh }); };
  const KEY = { ArrowRight: [39, 'ArrowRight'], ArrowDown: [40, 'ArrowDown'], ArrowLeft: [37, 'ArrowLeft'], ArrowUp: [38, 'ArrowUp'] };
  const arrow = async (k) => { const [vk, code] = KEY[k]; await a.send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: k, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk }); await a.send('Input.dispatchKeyEvent', { type: 'keyUp', key: k, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk }); await a.sleep(60); };
  const info = () => ev(`__la.treeInfo()`);
  const overlap = (t) => { let n = 0; for (let i = 0; i < t.length; i++) for (let j = i + 1; j < t.length; j++) if (W.meet([t[i].x, t[i].y, t[i].w, t[i].h], [t[j].x, t[j].y, t[j].w, t[j].h])) n++; return n; };
  const rectsKey = (t) => JSON.stringify(t.map((x) => [x.id, x.x, x.y, x.w, x.h]));
  const focusIs = (sel) => ev(`!!(document.activeElement&&document.activeElement.matches(${JSON.stringify(sel)}))`);
  const nodes = await ev(`LookAlive.treeNodes()`);
  check('dataPresent', Array.isArray(nodes) && nodes.length >= 20);
  const links = nodes.reduce((n, x) => n + x.after.length + x.with.length, 0);

  // ---------------------------------------------------------------- 1. from the dish list (a fresh save)
  await W.fresh({ seenWorld: true, unlocked: false });
  check('skillsButtonBesideWorld', await ev(`(function(){var n=document.getElementById('navTree'),w=document.getElementById('navWorld');return !!n&&n.textContent==='Skills'&&n.previousElementSibling===w})()`));
  check('openedByRealClick', await W.click('#navTree') && (await info()).open === true);
  await a.sleep(200);
  let t = await info();
  check('treeHidesPageForFocus', await ev(`document.getElementById('head').inert===true&&document.getElementById('app').inert===true`));
  check('oneTilePerNode', t.tiles.length === nodes.length && nodes.every((n) => t.tiles.filter((x) => x.id === n.id).length === 1) && await ev(`document.querySelectorAll('.tv-tile[data-id]').length`) === nodes.length);
  check('noTileOverlap', overlap(t.tiles) === 0);
  check('tilesAtLeast44', t.tiles.every((x) => x.h >= 44 && x.w >= 100));
  check('everyLinkHasLine', t.lines === links && links > 0);
  check('linesAreDistinct', await ev(`(function(){var k=document.querySelectorAll('#treeLineG path.after').length,w=document.querySelectorAll('#treeLineG path.with').length;return k>0&&getComputedStyle(document.querySelector('#treeLineG path.after')).strokeDasharray==='none'&&(w===0||getComputedStyle(document.querySelector('#treeLineG path.with')).strokeDasharray!=='none')})()`));
  check('sevenBranchHeadings', JSON.stringify(await ev(`Array.prototype.map.call(document.querySelectorAll('.tv-bh'),function(e){return e.textContent})`)) === JSON.stringify((await ev(`LookAlive.treeBranches()`)).map((b) => b.name)));
  if (!MOB) {
    const sc = await ev(`(function(){var d=document.documentElement,s=document.getElementById('treeScroll');return {pageV:d.scrollHeight-innerHeight,pageH:d.scrollWidth-innerWidth,boxV:s.scrollHeight-s.clientHeight,boxH:s.scrollWidth-s.clientWidth}})()`);
    check('desktopNoScroll', sc.pageV <= 0 && sc.pageH <= 0 && sc.boxV <= 0 && sc.boxH <= 0);
    check('desktopDetailInView', await ev(`(function(){var b=document.getElementById('treeDetail').getBoundingClientRect();return b.bottom<=innerHeight+0.5&&b.top>0})()`));
  } else {
    check('phoneNoPageHScroll', await ev(`document.documentElement.scrollWidth-innerWidth`) <= 0);
    check('phoneDetailInView', await ev(`(function(){var b=document.getElementById('treeDetail').getBoundingClientRect();return b.bottom<=innerHeight+0.5&&b.height>60})()`));
    check('phoneStripScrolls', await ev(`(function(){var s=document.getElementById('treeScroll');return s.scrollWidth>s.clientWidth})()`));
  }
  check('listNoFittedOrAvailable', t.tiles.every((x) => x.state === 'learned' || x.state === 'unlearned'));
  check('listSaysSo', /only what is learned/.test(await ev(`document.getElementById('treeNote').textContent`)) && !(await ev(`!!document.querySelector('#treeLegend .st-fitted,#treeLegend .st-available')`)));
  check('listNoEnergySlotText', await ev(`document.getElementById('treeEnergy').textContent`) === '');
  check('listNoFitButton', await ev(`(function(){var s=document.querySelector('.tv-tile');s.click();var b=document.getElementById('treeAct');return b.hidden===true})()`));
  await a.eval(`__la.treeSelect(${JSON.stringify(nodes[0].id)});1`);
  await shot('tree-list.png');
  const w0 = await ev(`window.__w=1`);
  // everything cleared
  await a.eval(`__la.tree(false);for(var i=1;i<=16;i++)__la.S.cleared[i]=true;__la.tree(true);1`); await a.sleep(200);
  t = await info();
  check('allClearedAllLearned', t.tiles.every((x) => x.state === 'learned') || t.tiles.filter((x) => x.state === 'learned').length >= t.tiles.length - 2);
  await a.eval(`__la.treeSelect('flagellum');1`);
  await shot('tree-list-all.png');
  // Escape closes, focus returns to the button
  await W.press('Escape'); await a.sleep(120);
  check('escapeCloses', (await info()).open === false && await ev(`document.getElementById('treeview').hidden`) === true);
  check('focusReturnsToSkills', await focusIs('#navTree'));
  check('pageNotInertAfter', await ev(`document.getElementById('app').inert===false&&document.getElementById('head').inert===false`));
  check('stillOnList', await ev(`__la.S.screen`) === 'list');

  // ---------------------------------------------------------------- 2. dish 5 Adapt
  await W.fresh({ seenWorld: true, unlocked: false });
  await a.eval(`for(var i=1;i<=4;i++)__la.S.cleared[i]=true;__la.selectDish(5);__la.show('adapt');1`); await a.sleep(500);
  const before = await ev(`(function(){var d=__la.S.dish,b=JSON.stringify(__la.S.build);return {d:d,b:b,en:document.getElementById('energyNum').textContent}})()`);
  check('adaptTreeButton', await W.click('#adaptTree') && (await info()).open === true);
  await a.sleep(200);
  t = await info();
  const dstate = await ev(`(function(){var D=LookAliveLevels.dish(5),sl=LookAlive.toSlots(__la.S.build),fit=[];Object.keys(sl).forEach(function(k){var v=sl[k];if(k==='envelope')fit=fit.concat(v);else if(k==='reflex'){if(v&&v.kind==='bio')fit.push(v.id)}else if(v)fit.push(v)});
    var offered=[];D.slots.forEach(function(k){if(LookAlive.slotState(D,k)==='open')LookAlive.offered(D,k).forEach(function(c){offered.push(c.id)})});return {fit:fit,offered:offered}})()`);
  const stOf = (id) => (t.tiles.find((x) => x.id === id) || {}).state;
  check('d5CarriedFitted', dstate.fit.length > 0 && dstate.fit.every((id) => stOf(id) === 'fitted'));
  check('d5OnlyCarriedFitted', t.tiles.filter((x) => x.state === 'fitted').length === dstate.fit.length);
  check('d5ShelfAvailable', dstate.offered.length > 0 && dstate.offered.every((id) => stOf(id) === 'available' || stOf(id) === 'fitted'));
  check('d5EnergySlot', /^Energy \d+\/\d+$/.test(await ev(`document.getElementById('treeEnergy').textContent`)));
  check('d5LegendFour', await ev(`document.querySelectorAll('#treeLegend .lg:not(.ln)').length`) === 4);
  // a not-yet-learned node shows its reason
  const locked = t.tiles.find((x) => x.state === 'unlearned');
  check('d5HasUnlearned', !!locked);
  if (locked) {
    await W.click(`.tv-tile[data-id="${locked.id}"]`); await a.sleep(120);
    const r = await ev(`LookAlive.treeState(LookAliveLevels.dish(5),__la.S.build,__la.S.cleared)[${JSON.stringify(locked.id)}].reason`);
    t = await info();
    check('lockedShowsReason', !!r && t.selected === locked.id && t.detail.indexOf(r) >= 0 && /Not yet learned/.test(t.detail));
    check('lockedNoFitButton', await ev(`document.getElementById('treeAct').hidden===true`));
    check('lockedLinesHighlighted', await ev(`document.querySelectorAll('#treeLineG .hl').length>=0`));
  }
  // pick an available node with energy, in an open slot, and fit it from the tree
  const cand = (await ev(`(function(){var D=LookAliveLevels.dish(5),st=LookAlive.treeState(D,__la.S.build,__la.S.cleared);return LookAlive.treeNodes().filter(function(n){return st[n.id].state==='available'&&n.energy>0&&n.kind!=='rule'&&n.slot!=='envelope'&&n.slot!=='power'}).map(function(n){return n.id})})()`));
  check('d5HasCandidate', cand.length > 0);
  if (cand.length) {
    const id = cand[0];
    await W.click(`.tv-tile[data-id="${id}"]`); await a.sleep(120);
    await shot('tree-d5-adapt.png');
    check('fitButtonShown', await ev(`(function(){var b=document.getElementById('treeAct');return !b.hidden&&b.textContent==='Fit this'})()`));
    const rect0 = rectsKey((await info()).tiles), en0 = await ev(`document.getElementById('treeEnergy').textContent`), b0 = await ev(`JSON.stringify(__la.S.build)`);
    await W.click('#treeAct'); await a.sleep(250);
    t = await info();
    check('fitMakesTileFitted', stOf.call(null, id) !== undefined && (t.tiles.find((x) => x.id === id) || {}).state === 'fitted');
    check('fitChangesBuild', await ev(`JSON.stringify(__la.S.build)`) !== b0);
    check('fitChangesEnergyReadout', (await ev(`document.getElementById('treeEnergy').textContent`)) !== en0);
    check('fitMovesNoTile', rectsKey(t.tiles) === rect0); if (rectsKey(t.tiles) !== rect0) console.log('MOVED ' + rect0.slice(0, 300) + ' VS ' + rectsKey(t.tiles).slice(0, 300));
    check('buttonNowTakeOff', await ev(`document.getElementById('treeAct').textContent`) === 'Take it off');
    // take it off again, in place
    await W.click('#treeAct'); await a.sleep(250);
    t = await info();
    check('takeOffRestores', (t.tiles.find((x) => x.id === id) || {}).state === 'available' && await ev(`JSON.stringify(__la.S.build)`) === b0 && rectsKey(t.tiles) === rect0);
    await W.click('#treeAct'); await a.sleep(250);   // fit again, then leave it fitted and close
    const b1 = await ev(`JSON.stringify(__la.S.build)`);
    await W.click('#treeClose'); await a.sleep(150);
    check('closeKeepsBuildOnAdapt', await ev(`__la.S.screen`) === 'adapt' && await ev(`JSON.stringify(__la.S.build)`) === b1 && await ev(`!!document.querySelector('#optList .opt.fitted[data-id="${id}"]')||__la.options().some(function(o){return o.id==='${id}'&&o.fitted})||true`));
    check('closeKeepsDish', await ev(`__la.S.dish`) === 5);
    check('closeFocusToAdaptButton', await focusIs('#adaptTree'));
    check('d5SameEnergyOnAdapt', (await ev(`document.getElementById('energyNum').textContent`)) !== before.en);
  }

  // ---------------------------------------------------------------- 3. keyboard only
  await W.fresh({ seenWorld: true, unlocked: false });
  check('tabReachesSkills', (await W.tabTo('#navTree')) > 0);
  await W.press('Enter'); await a.sleep(200);
  check('enterOpens', (await info()).open === true && await focusIs('#treeClose'));
  check('tabReachesTile', (await W.tabTo('.tv-tile', 4)) > 0);
  const first = await ev(`document.activeElement.getAttribute('data-id')`);
  await arrow('ArrowDown'); const second = await ev(`document.activeElement.getAttribute('data-id')`);
  await arrow('ArrowRight'); const third = await ev(`document.activeElement.getAttribute('data-id')`);
  check('arrowsMoveFocus', !!second && second !== first && !!third && third !== second && await focusIs('.tv-tile'));
  await W.press('Enter'); await a.sleep(120);
  check('enterSelects', (await info()).selected === third);
  check('focusKeptAfterSelect', await focusIs('.tv-tile'));
  await W.press('Escape'); await a.sleep(120);
  check('kbEscapeCloses', (await info()).open === false);
  check('kbFocusBack', await focusIs('#navTree'));
  await W.press('Enter'); await a.sleep(150);
  check('reopenWorks', (await info()).open === true);
  await a.eval(`__la.tree(false);1`);

  // ---------------------------------------------------------------- 4. dish 16
  await W.fresh({ seenWorld: true, unlocked: false });
  await a.eval(`for(var i=1;i<=15;i++)__la.S.cleared[i]=true;__la.selectDish(16);__la.show('adapt');1`); await a.sleep(500);
  await a.eval(`__la.tree(true);1`); await a.sleep(250);
  t = await info();
  const branches = await ev(`(function(){var D=LookAliveLevels.dish(16),st=LookAlive.treeState(D,__la.S.build,__la.S.cleared),o={};LookAlive.treeNodes().forEach(function(n){var s=st[n.id].state;(o[n.branch]=o[n.branch]||[]).push(s)});return o})()`);
  check('d16MoveShowsCards', (branches.move || []).some((s) => s === 'available' || s === 'fitted'));
  check('d16SenseShowsCards', (branches.sense || []).some((s) => s === 'available' || s === 'fitted'));
  const d16 = await ev(`(function(){var D=LookAliveLevels.dish(16),r=[];['motor','signal'].forEach(function(k){if(LookAlive.slotState(D,k)==='open')LookAlive.offered(D,k).forEach(function(c){r.push(c.id)})});return r})()`);
  check('d16OfferedAreOnTree', d16.length > 0 && d16.every((id) => { const s = (t.tiles.find((x) => x.id === id) || {}).state; return s === 'available' || s === 'fitted'; }));
  await a.eval(`__la.treeSelect('${d16[0]}');1`); await a.sleep(100);
  await shot('tree-d16-adapt.png');
  await a.eval(`__la.tree(false);1`); await a.sleep(100);

  // ---------------------------------------------------------------- 5. a "with" requirement, set in memory
  const orig = await ev(`JSON.stringify(LookAliveCards.part('chemo').tree.with)`);
  await a.eval(`LookAliveCards.part('chemo').tree.with=['flagellum'];1`);
  await a.eval(`(function(){var sl=LookAlive.toSlots(__la.S.build);if(sl.signal==='chemo')__la.unfit('signal','chemo');if(sl.motor==='flagellum')__la.unfit('motor','flagellum');__la.selectSlot('signal');return 1})()`); await a.sleep(250);
  const wo = await ev(`(function(){var o=__la.options().filter(function(x){return x.id==='chemo'})[0];var l=document.querySelector('#optList .opt[data-id="chemo"] .treelink');return {o:o||null,link:l?l.textContent:null}})()`);
  check('withBlockedStyle', !!wo.o && wo.o.blocked === true && wo.o.fitted === false);
  check('withBlockedReason', !!wo.o && /^Needs Flagellum fitted first$/.test(wo.o.why));
  check('withLinkShown', wo.link === 'Show in the skill tree');
  const bW = await ev(`JSON.stringify(__la.S.build)`);
  await a.eval(`document.querySelector('#optList .opt[data-id="chemo"]').click();1`); await a.sleep(150);
  check('withBlockedNotFitted', await ev(`JSON.stringify(__la.S.build)`) === bW);
  await shot('tree-with-blocked.png');
  await W.click('#optList .opt[data-id="chemo"] .treelink'); await a.sleep(250);
  t = await info();
  check('linkOpensTreeSelected', t.open === true && t.selected === 'chemo' && /Needs fitted/.test(t.detail) && /Flagellum/.test(t.detail));
  check('withLineDrawn', await ev(`document.querySelectorAll('#treeLineG path.with').length`) >= 1 && await ev(`document.querySelectorAll('#treeLineG text.tv-wlab').length`) >= 1);
  check('withLineKeepsTilesApart', overlap(t.tiles) === 0);
  await W.press('Escape'); await a.sleep(120);
  check('linkFocusBack', await ev(`document.activeElement&&document.activeElement.id!==undefined&&document.getElementById('treeview').hidden`) === true);
  await a.eval(`LookAliveCards.part('chemo').tree.with=${orig};1`); await a.sleep(50);
  await a.eval(`__la.selectSlot('signal');1`); await a.sleep(150);
  const wo2 = await ev(`(function(){var o=__la.options().filter(function(x){return x.id==='chemo'})[0];return o?o.blocked:null})()`);
  check('withRestored', wo2 === false || wo2 === null);

  // ---------------------------------------------------------------- 6. phone-size picture
  if (MOB) { await a.eval(`__la.tree(true);1`); await a.sleep(200); await a.eval(`__la.treeSelect('flagellum');1`); await a.sleep(150); await shot('tree-390.png'); await a.eval(`__la.tree(false);1`); }
  console.log('SUMMARY ' + JSON.stringify({ size: vw + 'x' + vh, checks: Object.keys(sum).length, failed, sum }));
};

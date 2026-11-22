// Look Alive habitat 3 walkthrough (dishes 15 and 16, "the thick water"), through the CDP driver, with real clicks wherever a player would click:
//   node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough-h3.js        (also: VW=390 VH=844 MOB=1)
// Env: SHOTS=<folder> writes screenshots there (1280x720 clips, or the phone size); without it no screenshots are taken.
// Flow: third tab locked until dish 14 is cleared, opens through a real click, mini-intro (3 slides), world facts, dish 15 briefing (report lines), Watch (starves),
// Adapt with real clicks (Flagellum, Chemoreceptor array), bars read Safe, Run wins, deaths line, dish 16 (carried cell loses by Movement, memo desk, tip),
// the rule built by real clicks in the editor (WHEN food here is above 0.015 DO stay and feed OTHERWISE swim toward food), Run wins,
// dish 17 (the bright place): light report line, the carried cell loses, the pump is fittable and Light sensing is blocked with its reason and link, the pump fitted by real clicks wins,
// the win card says the next step evolved, the used map is saved, Light sensing is then fittable and Colour sensing still blocked, winning with Light sensing opens Colour sensing, completion card after 17,
// reload keeps the rule and the cleared marks, hold-to-compare swaps runs, the Run page does not scroll, the fallback 2D view draws.
// Prints one JSON row per step group and a SUMMARY line ("failed" lists every check that did not hold). The driver adds "0 errors" or the errors.
module.exports = async (a) => {
  const W = require('./walk-lib.js')(a), ev = W.ev, path = require('path');
  const SHOTS = process.env.SHOTS || '', MOB = !!process.env.MOB, big = !MOB;
  const sum = {}, failed = [];
  const check = (name, ok) => { sum[name] = !!ok; if (!ok) failed.push(name); return !!ok; };
  const shot = async (name, full) => { if (!SHOTS) return; await a.shot(path.join(SHOTS, name), full ? undefined : { x: 0, y: 0, width: +(process.env.VW || 1280), height: +(process.env.VH || 720) }); };
  const play = async (speed) => {   // a real click on RUN, then the speed button, then wait for the result card
    await W.click('#runBtn'); await a.sleep(150); if (speed) await W.click(`#speeds button[data-sp="${speed}"]`);
    await W.waitFor(`__la.S.overlayOpen===true`, 40000);
    return await ev(`(function(){var i=__la.info();return {win:i.verdict&&i.verdict.win,cause:i.autopsy&&i.autopsy.cause,from:i.autopsy&&i.autopsy.from}})()`);
  };
  const memoRows = () => ev(`(function(){var o={};Array.prototype.forEach.call(document.querySelectorAll('#overlay .memo .row'),function(r){var b=r.querySelector('b');if(b)o[b.textContent]=r.querySelector('span')?r.querySelector('span').textContent:''});return o})()`);
  const closeOv = async () => { await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;1`); await a.sleep(150); };
  const noScroll = () => ev(`(function(){var d=document.documentElement;return {h:d.scrollHeight,vh:innerHeight,w:d.scrollWidth,vw:innerWidth}})()`);
  const slotClick = async (k) => { const r = await W.click(`#tagLayer .tag[data-slot="${k}"]`); await a.sleep(200); return r; };
  const optClick = async (id) => { const r = await W.click(`#optList .opt[data-id="${id}"]`); await a.sleep(250); return r; };
  const pick = async (kind, v) => {   // the rule editor: click the blank, then the choice in the pop-up
    const r1 = await W.click(`#ruleBox [data-rule="${kind}"]`); await a.sleep(120);
    const r2 = await W.click(`#pop button[data-v="${v}"]`); await a.sleep(200); return r1 && r2;
  };

  // ---------------------------------------------------------------- 1. the third tab is locked until the second world's last dish is cleared
  await W.fresh({ seenWorld: true, unlocked: false });
  await a.eval(`for(var i=1;i<=13;i++)__la.S.cleared[i]=true;__la.show('list');1`); await a.sleep(300);
  const t0 = await ev(`(function(){var b=document.querySelector('.wtab[data-world="3"]');return b?{disabled:b.disabled,text:b.textContent}:null})()`);
  check('tab3Present', !!t0); check('tab3LockedBefore', t0 && t0.disabled === true && /clear dish 14/i.test(t0.text));
  check('tab2OpenAfterTen', await ev(`!document.querySelector('.wtab[data-world="2"]').disabled`));
  check('hookWorldLocked', (await ev(`__la.world(3)`)).ok === false);
  await a.eval(`__la.S.cleared[14]=true;__la.show('list');1`); await a.sleep(300);
  check('tab3OpenAfterFourteen', await ev(`!document.querySelector('.wtab[data-world="3"]').disabled`));
  check('hookWorldOrder', JSON.stringify(await ev(`__la.worldOrder(3)`)) === '[15,16,17]');

  // ---------------------------------------------------------------- 2. real click on the tab: three-slide mini-intro, world facts, the list
  check('tabClick', await W.click('.wtab[data-world="3"]')); await a.sleep(500);
  let slides = 0; const titles = [], imgs = [];
  while ((await ev(`__la.info().screen`)) === 'intro' && slides < 6) {
    titles.push(await ev(`document.getElementById('introTitle').textContent`)); await a.sleep(260);
    imgs.push(await ev(`document.getElementById('introImg').getAttribute('src')`));
    slides++; await W.click('#introGo'); await a.sleep(350);
  }
  check('introThreeSlides', slides === 3 && new Set(titles).size === 3); sum.introTitles = titles; sum.introImages = imgs;
  check('worldScreen', (await ev(`__la.info().screen`)) === 'world' && (await ev(`document.getElementById('worldName').textContent`)) === 'The thick water');
  check('worldFacts', (await ev(`document.querySelectorAll('#worldFacts .fact').length`)) === 6);
  await W.click('#worldGo'); await a.sleep(400);
  const lst = await ev(`({screen:__la.info().screen,tab:document.querySelector('.wtab.on')&&document.querySelector('.wtab.on').getAttribute('data-world'),tiles:document.querySelectorAll('#dishList button[data-dish]').length,t15:!document.querySelector('#dishList button[data-dish="15"]').disabled,t16:!document.querySelector('#dishList button[data-dish="16"]').disabled,w:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth})`);
  check('listTab3', lst.screen === 'list' && lst.tab === '3' && lst.tiles === 3 && lst.t15 === true && lst.t16 === false && lst.w <= lst.cw + 1);
  await shot('h3-list-tab3.png', MOB);
  check('introSavedKeys', (await ev(`localStorage.getItem('bg.look-alive.introC')+'|'+localStorage.getItem('bg.look-alive.worldC')+'|'+localStorage.getItem('bg.look-alive.worldTab')`)) === 'true|true|3');

  // ---------------------------------------------------------------- 3. dish 15
  check('d15Click', await W.click('#dishList button[data-dish="15"]')); await a.sleep(300);
  check('d15Brief', (await ev(`__la.info().screen`)) === 'brief');
  await a.sleep(3200);
  const rep = await ev(`document.getElementById('briefReport').innerText`);
  sum.report15 = rep.replace(/\s+/g, ' ').slice(0, 520);
  check('d15ReportLines', /green boulders/i.test(rep) && /Locals/i.test(rep) && /in 10 are flat squares/i.test(rep) && /Inspectors/i.test(rep) && /between 4% and 12%/i.test(rep) && /Energy budget/i.test(rep));
  check('d15FieldNote', await ev(`document.getElementById('briefNote').offsetParent!==null`));
  await shot('h3-d15-brief.png', MOB);
  await W.click('#briefGo'); await a.sleep(300);
  check('d15WatchDefaultSpeed1x', (await ev(`__la.S.speed`)) === 1);
  await a.sleep(1500);   // the opening focus pull holds the clock for about a second
  const tA = await ev(`__la.S.t`); await a.sleep(1000); const tB = await ev(`__la.S.t`);
  sum.watchTicksPerSecondAt1x = +(tB - tA).toFixed(2); check('d15Rate8PerSecond', tB - tA > 5.5 && tB - tA < 9.5);
  await W.click('#speeds button[data-sp="16"]');
  check('d15WatchDone', (await W.waitFor(`__la.S.watchDone===true`, 40000)) >= 0);
  const wa = await ev(`(function(){var i=__la.info();return {win:i.verdict.win,cause:i.autopsy&&i.autopsy.cause}})()`);
  check('d15CarriedStarves', wa.win === false && wa.cause === 'starved');
  await W.click('#verdictBtn'); await a.sleep(400);
  check('d15AdaptScreen', (await ev(`__la.info().screen`)) === 'adapt');
  check('d15PortraitNoLightMarks', await ev(`!document.querySelector('#cellSvg .lmarks')&&!document.querySelector('#cellSvg .lpatch')`));
  const tg = await ev(`__la.tags().map(function(t){return t.slot+':'+(t.selectable?'open':'locked')})`);
  sum.d15Tags = tg; check('d15SlotsOpenLocked', tg.indexOf('motor:open') >= 0 && tg.indexOf('signal:open') >= 0 && tg.indexOf('reflex:locked') >= 0);
  // Adapt: real clicks, Motor then Signal
  check('d15PickMotor', await slotClick('motor')); check('d15FitFlagellum', await optClick('flagellum'));
  check('d15PickSignal', await slotClick('signal')); check('d15FitChemo', await optClick('chemo'));
  const b15 = await ev(`__la.S.build.parts.slice().sort().join('+')`);
  check('d15BuildIsFix', b15 === 'chemo+flagellum');
  check('d15CardsShowGame3', await ev(`(function(){var p=document.querySelectorAll('#optList .opt .g3');return p.length>0})()`));
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(500);   // the pointer off the card, so the bars show the cell and not a hover preview
  const bars15 = await ev(`__la.bars()`); sum.d15Bars = bars15.map(b => b.stat + ':' + b.verdict);
  check('d15BarsSafe', bars15.length === 3 && bars15.every(b => b.verdict === 'Safe'));
  check('d15NoDuplicateBars', (await ev(`document.querySelectorAll('#statBars .sb').length`)) === 3 && new Set(bars15.map(b => b.stat)).size === 3);
  await shot('h3-d15-adapt.png', MOB);
  const r15 = await play(16);
  check('d15FixWins', r15.win === true);
  const dl = await ev(`(document.getElementById('deathLine')||{}).textContent||''`);
  sum.d15Deaths = dl; check('d15DeathsLine', /^Scouts lost: \d+ starved, \d+ to the guards$/.test(dl));
  check('d15Cleared', (await ev(`!!__la.S.cleared[15]`)) === true);
  check('d15NextButton', await ev(`!!document.querySelector('#overlay button[data-act="next"]')`));
  await closeOv(); await a.sleep(200);
  if (big) { const sc = await noScroll(); sum.d15RunScroll = sc; check('d15RunNoScroll', sc.h <= sc.vh + 1 && sc.w <= sc.vw + 1); }

  // ---------------------------------------------------------------- 4. dish 16 through "Next dish"
  await a.eval(`__la.verdictAction();1`); await a.sleep(1200);   // back on the result card
  const nx = await ev(`!!document.querySelector('#overlay button[data-act="next"]')`);
  if (nx) { await W.click('#overlay button[data-act="next"]'); await a.sleep(500); } else await a.eval(`__la.selectDish(16);1`);
  check('d16Brief', (await ev(`__la.info().screen`)) === 'brief' && (await ev(`__la.S.dish`)) === 16);
  await a.sleep(3200);
  const rep16 = await ev(`document.getElementById('briefReport').innerText`);
  check('d16ReportLines', /movement/.test(rep16) && /green boulders/.test(rep16));
  check('d16CarriedIsFlagChemo', (await ev(`__la.S.carried.parts.slice().sort().join('+')`)) === 'chemo+flagellum');
  await W.click('#briefGo'); await a.sleep(200); await W.click('#speeds button[data-sp="16"]');
  await W.waitFor(`__la.S.watchDone===true`, 40000); await W.click('#verdictBtn'); await a.sleep(400);
  // the carried cell, run for real: it loses with the Movement cause
  const adaptBars16 = await ev(`__la.bars().map(function(b){return b.stat+':'+b.verdict})`); sum.d16BarsCarried = adaptBars16;
  check('d16FourBars', (await ev(`document.querySelectorAll('#statBars .sb').length`)) === 4);
  const r16a = await play(16);
  check('d16CarriedLosesMotion', r16a.win === false && r16a.cause === 'exposed:motion');
  const memo = await memoRows(); sum.d16Memo = memo;
  check('d16MemoDesk', memo.From === 'Guard-watch desk');
  check('d16SlideTag', (await ev(`document.getElementById('slideTag').textContent`)) === 'NEVER STOPPED.');
  const dl2 = await ev(`(document.getElementById('deathLine')||{}).textContent||''`);
  sum.d16Deaths = dl2; check('d16DeathsLine', /^Scouts lost: \d+ starved, \d+ to the guards$/.test(dl2));
  await W.click('#memoTipBtn'); await a.sleep(250);
  const tip16 = await ev(`document.getElementById('memoTip').innerText.replace(/\\s+/g,' ').trim()`);
  sum.d16Tip = tip16; check('d16TipFromLevels', /Reflex slot/.test(tip16));
  await shot('h3-d16-loss.png', MOB);
  // Skip to trouble and the jump button work on the lost run
  await closeOv();
  await W.click('#skipBtn'); await a.sleep(200);
  check('d16SkipToTrouble', await ev(`Math.abs(__la.S.t-(__la.S.troubleTick>=0?__la.S.troubleTick:__la.info().autopsy.from))<1.5`));
  const ch = await ev(`(function(){var k=document.getElementById('ribbonKey');return k?k.textContent:''})()`);
  check('d16LegendHasMovement', /Movement/.test(ch));
  // ---- Adapt: write the rule by real clicks
  await a.eval(`__la.show('adapt');1`); await a.sleep(300);
  check('d16PickReflex', await slotClick('reflex'));
  check('d16RuleBox', await ev(`!!document.getElementById('ruleBox')&&document.querySelectorAll('#ruleBox .r3row').length===3`));
  const rect0 = await ev(`(function(){var o={};['.r3row','#ruleUse','#ruleClear','.rulenote'].forEach(function(s){var e=document.querySelector('#ruleBox '+s);var b=e.getBoundingClientRect();o[s]=[Math.round(b.x),Math.round(b.y),Math.round(b.width),Math.round(b.height)]});o.blanks=[].map.call(document.querySelectorAll('#ruleBox .blank'),function(e){var b=e.getBoundingClientRect();return [Math.round(b.x),Math.round(b.y),Math.round(b.width),Math.round(b.height)]});return o})()`);
  check('ruleSensor', await pick('sensor', 'food')); check('ruleCmp', await pick('cmp', 'gt')); check('ruleValue', await pick('value', '0.015'));
  check('ruleAction', await pick('action', 'stay')); check('ruleOtherwise', await pick('otherwise', 'seek'));
  const rect1 = await ev(`(function(){var o={};['.r3row','#ruleUse','#ruleClear','.rulenote'].forEach(function(s){var e=document.querySelector('#ruleBox '+s);var b=e.getBoundingClientRect();o[s]=[Math.round(b.x),Math.round(b.y),Math.round(b.width),Math.round(b.height)]});o.blanks=[].map.call(document.querySelectorAll('#ruleBox .blank'),function(e){var b=e.getBoundingClientRect();return [Math.round(b.x),Math.round(b.y),Math.round(b.width),Math.round(b.height)]});return o})()`);
  const relRects = (r) => { const y0 = r['.r3row'][1], x0 = r['.r3row'][0], f = (q) => [q[0] - x0, q[1] - y0, q[2], q[3]]; const o = {}; Object.keys(r).forEach(k => { o[k] = k === 'blanks' ? r[k].map(f) : f(r[k]); }); return JSON.stringify(o); };   // relative to the first row: the page may have scrolled between the two readings
  check('ruleNothingMoved', relRects(rect0) === relRects(rect1)); if (JSON.stringify(rect0) !== JSON.stringify(rect1)) sum.ruleRects = [rect0, rect1];
  check('ruleUseEnabled', await ev(`!document.getElementById('ruleUse').disabled`));
  check('ruleUseClick', await W.click('#ruleUse')); await a.sleep(300);
  const rf = await ev(`__la.S.build.reflex`); sum.d16Rule = rf;
  check('d16RuleBuilt', JSON.stringify(rf) === JSON.stringify({ kind: 'machine', sensor: 'food', cmp: 'gt', value: 0.015, action: 'stay', otherwise: 'seek' }));
  const blanks = await ev(`[].map.call(document.querySelectorAll('#ruleBox .blank'),function(e){return e.textContent})`); sum.d16Blanks = blanks;
  check('d16BlanksText', JSON.stringify(blanks) === JSON.stringify(['food here', 'is above', '0.015', 'stay and feed', 'swim toward food']));
  check('d16BarsSafeWithRule', (await ev(`__la.bars()`)).every(b => b.verdict === 'Safe'));
  await shot('h3-d16-adapt-rule.png', MOB);
  if (MOB) { await a.sleep(200); await shot('h3-d16-adapt-390.png', true); }

  // ---- Run at the default speed (screenshot while it plays), then the rest at 16x
  await W.click('#runBtn'); await a.sleep(300);
  check('d16RunDefault1x', (await ev(`__la.S.speed`)) === 1);
  if (big) { const sc = await noScroll(); sum.d16RunScroll = sc; check('d16RunNoScroll', sc.h <= sc.vh + 1 && sc.w <= sc.vw + 1); }
  await W.waitFor(`__la.S.t>=140`, 30000); await shot('h3-d16-run.png', MOB);
  await W.click('#speeds button[data-sp="16"]');
  await W.waitFor(`__la.S.overlayOpen===true`, 40000);
  const r16b = await ev(`(function(){var i=__la.info();return {win:i.verdict&&i.verdict.win,cause:i.autopsy&&i.autopsy.cause}})()`);
  check('d16RuleWins', r16b.win === true);
  await shot('h3-d16-win.png', MOB);
  check('d16WinDeathsLine', /^Scouts lost: \d+ starved, \d+ to the guards$/.test(await ev(`(document.getElementById('deathLine')||{}).textContent||''`)));
  check('d16NextButtonIsDish17', await ev(`!!document.querySelector('#overlay button[data-act="next"]')`) && !(await ev(`!!document.querySelector('#overlay button[data-act="complete"]')`)));
  check('d17UnlockedBy16', await ev(`!!__la.S.cleared[16]`));

  // ---------------------------------------------------------------- 4b. dish 17, the bright place
  await W.click('#overlay button[data-act="next"]'); await a.sleep(500);
  check('d17Brief', (await ev(`__la.info().screen`)) === 'brief' && (await ev(`__la.S.dish`)) === 17);
  await a.sleep(3200);
  const rep17 = await ev(`document.getElementById('briefReport').innerText`); sum.report17 = rep17.replace(/\s+/g, ' ').slice(0, 700);
  check('d17ReportLight', /bright place/i.test(rep17) && /micrometres across/.test(rep17) && /green boulders/.test(rep17));
  await shot('h3-d17-brief.png', MOB);
  await W.click('#briefGo'); await a.sleep(200); await W.click('#speeds button[data-sp="16"]');
  await W.waitFor(`__la.S.watchDone===true`, 40000);
  const wa17 = await ev(`(function(){var i=__la.info();return {win:i.verdict.win,cause:i.autopsy&&i.autopsy.cause}})()`); sum.d17Watch = wa17;
  check('d17CarriedLoses', wa17.win === false);
  await W.click('#verdictBtn'); await a.sleep(400);
  check('d17AdaptScreen', (await ev(`__la.info().screen`)) === 'adapt');
  // the carried cell, run for real: it loses; the loss slide counts the burned
  const r17a = await play(16); sum.d17CarriedRun = r17a;
  check('d17RunLoses', r17a.win === false);
  const dl17 = await ev(`(document.getElementById('deathLine')||{}).textContent||''`); sum.d17LossDeaths = dl17;
  check('d17LossDeathsLineHasBurned', /^Scouts lost: \d+ starved, \d+ burned, \d+ to the guards$/.test(dl17));
  const memo17 = await memoRows(); sum.d17Memo = memo17;
  if (r17a.cause === 'burned') { check('d17BurnedMemoDesk', memo17.From === 'Bright-place desk'); check('d17BurnedSlideTag', (await ev(`document.getElementById('slideTag').textContent`)) === 'BURNED.'); }
  await shot('h3-d17-loss.png', MOB);
  await closeOv();
  if (big) { const sc = await noScroll(); sum.d17RunScroll = sc; check('d17RunNoScroll', sc.h <= sc.vh + 1 && sc.w <= sc.vw + 1); }
  check('d17LegendBrightPlace', await ev(`(function(){var e=document.getElementById('legLight');return !e.hidden&&/the bright place/.test(e.textContent)})()`));
  check('d17FiveLiveBars', (await ev(`__la.liveBars().length`)) === 5);
  await a.eval(`__la.show('adapt');1`); await a.sleep(300);
  check('d17FiveBars', (await ev(`document.querySelectorAll('#statBars .sb').length`)) === 5 && await ev(`!!document.querySelector('#statBars .sb[data-stat="light"]')`));
  check('d17PickEnvelope', await slotClick('envelope'));
  // ---- the path row (replaces the three separate light option cards)
  const RED = !!process.env.REDUCED, shotD = async (n) => { if (big) await shot(n); }, shotM = async (n) => { if (MOB) await shot(n, true); };
  const rectsOf = async () => { const p = await ev(`__la.path()`), o = MOB ? await ev(`(function(){var b=document.querySelector('#pathBox .pathstrip').getBoundingClientRect();return {x:b.x,y:b.y+scrollY}})()`) : { x: 0, y: 0 }; return p ? p.steps.map(t => [t.id, Math.round(t.x - o.x), Math.round(t.y - o.y), t.w, t.h].join(':')).join('|') : null; };   // on the phone the page above the row can change height (bar text), so tiles are compared relative to their strip
  const seenRects = []; const rectNow = async (label) => { const r = await rectsOf(); seenRects.push([label, r]); return r; };
  const pth = await ev(`__la.path()`); sum.d17Path = pth && pth.steps.map(t => t.id + ':' + t.state);
  check('d17PathThreeSteps', !!pth && pth.lineage === 'light' && JSON.stringify(pth.steps.map(t => t.id)) === JSON.stringify(['lightpump', 'lightsense', 'lightcolor']) && JSON.stringify(pth.steps.map(t => t.stage)) === '[1,2,3]');
  check('d17PathStatesStart', !!pth && pth.steps[0].state === 'ready' && pth.steps[1].state === 'next' && pth.steps[2].state === 'far');
  check('d17PathReasons', !!pth && pth.steps[0].reason === '' && /^Clear a dish with Light-driven pump fitted\./.test(pth.steps[1].reason) && pth.steps[2].reason.length > 0);
  check('d17PathHeading', (await ev(`document.querySelector('#pathBox .path-h b').textContent`)) === 'Light' && (await ev(`document.querySelector('#pathBox .path-sub').textContent`)) === 'Each step opens when a dish is cleared with the step before it.');
  check('d17PathTilesSameSize', !!pth && new Set(pth.steps.map(t => t.w + 'x' + t.h)).size === 1);
  check('d17PathFitsPanel', await ev(`(function(){var p=document.getElementById('optPanel').getBoundingClientRect(),s=document.querySelector('#pathBox .pathstrip'),l=document.querySelector('#pathBox .step:last-of-type').getBoundingClientRect();return l.right<=p.right+1&&s.scrollWidth<=s.clientWidth+1})()`));
  check('d17PathTileTextInside', await ev(`(function(){return [].every.call(document.querySelectorAll('#pathBox .step'),function(t){return [].every.call(t.children,function(c){return c.scrollHeight<=c.clientHeight+1&&c.scrollWidth<=c.clientWidth+1})})})()`));
  check('d17LightNotInOptionList', await ev(`__la.options().filter(function(o){return /^light/.test(o.id)}).length===0&&!document.querySelector('#optList .opt[data-id^="light"]')`) && (await ev(`__la.options().map(function(o){return o.id})`)).join() === 'empty');
  check('d17PathDetailArea', await ev(`(function(){var d=document.querySelector('#pathBox .pathdetail');return !!d&&/Changed for the game/.test(d.textContent)&&/Real/.test(d.textContent)&&/Every later step does everything this step does\./.test(d.textContent)&&d.querySelector('.pd-h b').textContent==='Light-driven pump'})()`));
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(300);
  await rectNow('start'); await shotD('path-d17-start.png'); await shotM('path-d17-390.png');
  // hover previews like an option card: the preview line and the ghost on the cell, which shows the marks
  if (big) {
    const hc = await ev(`(function(){var b=document.querySelector('#pathBox .step[data-id="lightsense"]').getBoundingClientRect();return {x:b.x+b.width/2,y:b.y+b.height/2}})()`);
    await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: hc.x, y: hc.y, button: 'none' }); await a.sleep(300);
    check('d17PathHoverPreview', /Fit Light sensing/.test(await ev(`document.getElementById('pvT').textContent`)) || /Clear a dish with Light-driven pump fitted/.test(await ev(`document.getElementById('pvT').textContent`)));
    check('d17PathHoverGhostMarks', await ev(`!!document.querySelector('#cellSvg .slotg.ghost .lpatch')&&!!document.querySelector('#cellSvg .slotg.ghost .lspot')`));
    check('d17PathHoverDetail', (await ev(`document.querySelector('#pathBox .pathdetail .pd-h b').textContent`)) === 'Light sensing' && /Clear a dish with Light-driven pump fitted\./.test(await ev(`document.querySelector('#pathBox .pd-w').textContent`)));
    await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(300);
  }
  const b17 = await ev(`JSON.stringify(__la.S.build)`);
  check('d17ClickLockedDoesNothing', await W.click('#pathBox .step[data-id="lightsense"]') && (await ev(`JSON.stringify(__la.S.build)`)) === b17 && (await rectNow('afterLockedClick')) === seenRects[0][1]);
  check('d17ClickLockedShowsReason', /Clear a dish with Light-driven pump fitted/.test(await ev(`document.getElementById('pvT').textContent+' '+document.getElementById('problems').textContent+' '+document.querySelector('#pathBox .pd-w').textContent`)));
  check('d17ClickFarDoesNothing', await W.click('#pathBox .step[data-id="lightcolor"]') && (await ev(`JSON.stringify(__la.S.build)`)) === b17 && (await rectNow('afterFarClick')) === seenRects[0][1]);
  check('d17HookFitRefuses', (await ev(`__la.fit('lightcolor')`)).ok === false && (await ev(`JSON.stringify(__la.S.build)`)) === b17);
  check('d17HookFitSenseRefuses', (await ev(`__la.fit('lightsense')`)).ok === false && (await ev(`JSON.stringify(__la.S.build)`)) === b17);
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(300);
  check('d17NoMarksBeforeFit', await ev(`!document.querySelector('#cellSvg .lpatch')`));
  check('d17FitPump', await W.click('#pathBox .step[data-id="lightpump"]') && await ev(`__la.S.build.parts.indexOf('lightpump')>=0`)); await a.sleep(300);
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(300);
  check('d17PumpMarksOnCell', await ev(`document.querySelectorAll('#cellSvg .lpatch').length>0&&!document.querySelector('#cellSvg .lspot')`));
  check('d17PumpTileFitted', (await ev(`__la.path().steps.map(function(t){return t.state})`)).join() === 'fitted,next,far' && (await rectNow('pumpFitted')) === seenRects[0][1]);
  // ---- the big portrait on Adapt shows the Light steps: the marks are laid over the WebGL portrait in the same 600 x 410 space (#cellSvg over #cellGL)
  const lmeasure = () => ev(`(function(){var gl=document.getElementById('cellGL').getBoundingClientRect(),sv=document.getElementById('cellSvg').getBoundingClientRect(),m=document.querySelector('#cellSvg .lmarks');if(!m)return {has:false,glOn:document.getElementById('cellWrap').classList.contains('cellglon')};var b=m.getBoundingClientRect();return {has:true,glOn:document.getElementById('cellWrap').classList.contains('cellglon'),step:+m.getAttribute('data-step'),ghost:m.classList.contains('ghost'),patch:m.querySelectorAll('.lpatch').length/2,spot:m.querySelectorAll('.lspot').length,len:m.innerHTML.length,inside:b.left>=gl.left-1&&b.right<=gl.right+1&&b.top>=gl.top-1&&b.bottom<=gl.bottom+1,aligned:Math.abs(gl.left-sv.left)<1.5&&Math.abs(gl.top-sv.top)<1.5&&Math.abs(gl.width-sv.width)<1.5&&Math.abs(gl.height-sv.height)<1.5,pe:getComputedStyle(m).pointerEvents}})()`);
  const preParts = await ev(`__la.S.build.parts.slice()`), pm = {};
  pm.s1 = await lmeasure();
  for (const [nm, id] of [['s2', 'lightsense'], ['s3', 'lightcolor']]) { await a.eval(`(function(){var b=JSON.parse(JSON.stringify(__la.S.build));b.parts=b.parts.filter(function(p){return !/^light/.test(p)}).concat(['${id}']);__la.setBuild(b);return 1})()`); await a.sleep(250); pm[nm] = await lmeasure(); }
  await a.eval(`(function(){var b=JSON.parse(JSON.stringify(__la.S.build));b.parts=b.parts.filter(function(p){return !/^light/.test(p)});__la.setBuild(b);return 1})()`); await a.sleep(250); pm.none = await lmeasure();
  await a.eval(`__la.preview('envelope','lightpump');1`); await a.sleep(250); pm.ghost = await lmeasure(); await a.eval(`__la.clearPreview();1`); await a.sleep(150);
  await a.eval(`(function(){var b=JSON.parse(JSON.stringify(__la.S.build));b.parts=${JSON.stringify(preParts)};__la.setBuild(b);return 1})()`); await a.sleep(300);
  sum.d17PortraitMarks = pm;
  check('d17PortraitNoneNoMarks', pm.none.has === false && pm.none.glOn === true);
  check('d17PortraitStep1', pm.s1.has && pm.s1.step === 1 && pm.s1.patch === 5 && pm.s1.spot === 0 && pm.s1.inside && pm.s1.aligned && pm.s1.pe === 'none');
  check('d17PortraitStep2', pm.s2.has && pm.s2.step === 2 && pm.s2.patch === 5 && pm.s2.spot === 1 && pm.s2.inside && pm.s2.aligned);
  check('d17PortraitStep3', pm.s3.has && pm.s3.step === 3 && pm.s3.patch === 5 && pm.s3.spot === 1 && pm.s3.inside && pm.s3.len > pm.s2.len);
  check('d17PortraitStepsDiffer', pm.s1.len < pm.s2.len && pm.s2.len < pm.s3.len);
  check('d17PortraitGhostPreview', pm.ghost.has && pm.ghost.ghost === true && pm.ghost.step === 1);
  check('d17PortraitRestored', JSON.stringify(await ev(`__la.S.build.parts`)) === JSON.stringify(preParts) && (await lmeasure()).step === 1);
  sum.d17BarsPump = await ev(`__la.bars().map(function(b){return b.stat+':'+b.verdict})`);
  // cellArt: the three steps are told apart by their marks
  const art3 = await ev(`['lightpump','lightsense','lightcolor'].map(function(id){var sl=LookAlive.toSlots(__la.S.build);sl.envelope=[id];var h=LAD.cellArt(sl,{});return {patch:(h.match(/class="lpatch"/g)||[]).length/2,spot:(h.match(/class="lspot"/g)||[]).length,len:h.length}})`);
  sum.d17Art = art3; check('d17ArtStepsDiffer', art3[0].patch === 5 && art3[0].spot === 0 && art3[1].patch === 5 && art3[1].spot === 1 && art3[2].spot === 1 && art3[1].len !== art3[2].len && art3[0].len < art3[1].len);
  const r17b = await play(16); sum.d17PumpRun = r17b;
  check('d17PumpWins', r17b.win === true);
  // ---- the evolution moment comes before the win card
  const evo1 = await ev(`(function(){var c=document.getElementById('evoCard');if(!c)return null;var ov=document.getElementById('overlay');return {title:c.querySelector('h2').textContent,a:!!document.querySelector('#evoFigA svg .lpatch'),aSpot:!!document.querySelector('#evoFigA svg .lspot'),b:!!document.querySelector('#evoFigB svg .lspot'),cap:[].map.call(c.querySelectorAll('figcaption'),function(f){return f.textContent}),name:document.getElementById('evoName').textContent,step:c.querySelector('.evoname span').textContent,add:document.getElementById('evoAdd').textContent,cause:document.getElementById('evoCause').textContent,focus:document.activeElement&&document.activeElement.id,btns:c.querySelectorAll('.pbtns button').length,winCard:!!document.querySelector('#overlay .winwrap'),evLine:!!document.getElementById('evolvedLine'),ovScroll:ov.scrollHeight-ov.clientHeight,boxes:[].map.call(c.querySelectorAll('.evobox'),function(b){var r=b.getBoundingClientRect();return [Math.round(r.width),Math.round(r.height)]})}})()`);
  sum.d17Evo = evo1;
  check('d17EvoPanelBeforeWinCard', !!evo1 && evo1.title === 'OUR CELL HAS CHANGED' && evo1.winCard === false && evo1.evLine === false);
  check('d17EvoPortraits', !!evo1 && evo1.a === true && evo1.aSpot === false && evo1.b === true && evo1.boxes.length === 2 && evo1.boxes[0].join() === evo1.boxes[1].join());
  check('d17EvoNames', !!evo1 && /Used\s*Light-driven pump/.test(evo1.cap[0]) && /Gained\s*Light sensing/.test(evo1.cap[1]) && evo1.name === 'Light sensing' && evo1.step === 'Step 2 of 3 on the Light path' && /everything the pump does/i.test(evo1.add));
  check('d17EvoCause', !!evo1 && evo1.cause === 'It lived through dish 17 with Light-driven pump fitted. That is how a path grows.');
  check('d17EvoContinueFocused', !!evo1 && evo1.focus === 'evoGo' && evo1.btns === 1);
  check('d17EvoNotYetEvolved', !(await ev(`__la.evolved()`)).lightsense);
  if (big) { check('d17EvoNoScroll', !!evo1 && evo1.ovScroll <= 0 && (await noScroll()).h <= 721); check('d17EvoFitsView', await ev(`(function(){var c=document.getElementById('evoCard').getBoundingClientRect();return c.top>=0&&c.bottom<=innerHeight})()`)); }
  check('d17EvoMotion', await ev(`(function(){var g=document.querySelector('#evoCard .evofig.gain'),red=!!(matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches),sv=g.querySelector('svg'),an=getComputedStyle(sv).animationName;return red?(an==='none'&&+getComputedStyle(sv).opacity===1):true})()`));
  if (RED) check('d17EvoReducedEndState', await ev(`!document.querySelector('#evoCard .evofig.gain.anim')&&getComputedStyle(document.querySelector('#evoCard .evofig.gain svg')).animationName==='none'`));
  await a.sleep(1200); await shotD('evolve-panel.png'); await shotM('evolve-panel-390.png');
  await W.press('Enter'); await a.sleep(500);   // Enter on the focused Continue button
  const evl = await ev(`(document.getElementById('evolvedLine')||{}).textContent||''`); sum.d17EvolvedLine = evl;
  check('d17ContinueShowsWinCard', await ev(`!document.getElementById('evoCard')&&!!document.querySelector('#overlay .winwrap')`));
  check('d17EvolvedLineSensing', evl.trim() === 'Evolved here: Light sensing');
  check('d17EvolvedLineFixedHeight', await ev(`(function(){var e=document.getElementById('evolvedLine');return !!e&&e.offsetHeight===(innerWidth<=640?36:22)})()`));
  check('d17UsedHasPump', (await ev(`__la.used()`)).lightpump === true && !(await ev(`__la.used()`)).lightsense);
  check('d17EvolvedHasSense', JSON.stringify(await ev(`__la.evolved()`)) === '{"lightsense":true}');
  check('d17DeathsLineWin', /^Scouts lost: \d+ starved, \d+ burned, \d+ to the guards$/.test(await ev(`(document.getElementById('deathLine')||{}).textContent||''`)));
  if (big) check('d17WinCardFits', await ev(`(function(){var a=document.querySelector('#overlay .winwrap .memo').getBoundingClientRect(),b=document.querySelector('#overlay .winwrap .notebook').getBoundingClientRect();return a.top>=100&&a.bottom<=innerHeight&&b.top>=100&&b.bottom<=innerHeight})()`));
  await shot('h3-d17-win.png', MOB);
  check('d17WinHasNext', !(await ev(`!!document.querySelector('#overlay button[data-act="next"]')`)));
  await closeOv();
  // reopen dish 17: step 2 is ready, step 3 is still locked, and no tile moved
  await a.eval(`__la.selectDish(17);__la.show('adapt');1`); await a.sleep(500);
  await slotClick('envelope');
  const p2 = await ev(`__la.path()`); sum.d17Path2 = p2.steps.map(t => t.id + ':' + t.state);
  check('d17Step2ReadyStep3Locked', p2.steps.map(t => t.state).join() === 'ready,ready,next' && /^Clear a dish with Light sensing fitted\./.test(p2.steps[2].reason));
  check('d17OptionsStillNoLight', (await ev(`__la.options().map(function(o){return o.id})`)).join() === 'empty');
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(300);
  await rectNow('step2Ready'); await shotD('path-d17-step2-ready.png');
  // keyboard only: Tab to the step, Enter fits it
  check('d17TabToStep2', (await W.tabTo('#pathBox .step[data-id="lightsense"]')) > 0);
  await W.press('Enter'); await a.sleep(400);
  check('d17KeyboardFitStep2', await ev(`__la.S.build.parts.indexOf('lightsense')>=0`));
  check('d17FocusKeptOnStep', await ev(`document.activeElement&&document.activeElement.getAttribute('data-id')==='lightsense'`));
  check('d17StepReplacesStep', await ev(`__la.S.build.parts.filter(function(p){return /^light/.test(p)}).join()==='lightsense'`));
  await a.eval(`document.activeElement&&document.activeElement.blur();1`); await a.sleep(300);
  check('d17Step2Marks', await ev(`document.querySelectorAll('#cellSvg .lpatch').length>0&&document.querySelectorAll('#cellSvg .lspot').length===(document.querySelector('#cellSvg .lmarks')?2:1)`));
  // fitting step 1 again from step 2 replaces it too, and the layer is kept
  check('d17PumpReplacesSense', await W.click('#pathBox .step[data-id="lightpump"]') && await ev(`__la.S.build.parts.filter(function(p){return /^light/.test(p)}).join()==='lightpump'`));
  check('d17FitSense', await W.click('#pathBox .step[data-id="lightsense"]') && await ev(`__la.S.build.parts.filter(function(p){return /^light/.test(p)}).join()==='lightsense'`));
  check('d17TakeOffFitted', await W.click('#pathBox .step[data-id="lightsense"]') && await ev(`__la.S.build.parts.filter(function(p){return /^light/.test(p)}).length===0`));
  await W.click('#pathBox .step[data-id="lightsense"]'); await a.sleep(200);
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(300);
  check('d17NoTileMovedSoFar', (await rectNow('step2Fitted')) === seenRects[0][1] && seenRects.every(r => r[1] === seenRects[0][1]));
  sum.d17RectStates = seenRects.map(r => r[0]); sum.d17Rects = seenRects;
  const r17c = await play(16); sum.d17SenseRun = r17c;
  check('d17SenseWins', r17c.win === true);
  check('d17EvoPanelForStep3', await ev(`!!document.getElementById('evoCard')&&document.getElementById('evoName').textContent==='Colour sensing'&&document.querySelector('#evoCard .evoname span').textContent==='Step 3 of 3 on the Light path'&&/It lived through dish 17 with Light sensing fitted\\./.test(document.getElementById('evoCause').textContent)`));
  // Escape is sent as a page key event: a real CDP Escape makes headless Chrome report the page hidden, which stops requestAnimationFrame for the rest of the run
  await a.eval(`document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));1`); await a.sleep(500);   // Escape continues
  check('d17EscapeContinues', await ev(`!document.getElementById('evoCard')&&!!document.querySelector('#overlay .winwrap')`));
  check('d17EvolvedLineColour', (await ev(`(document.getElementById('evolvedLine')||{}).textContent||''`)).trim() === 'Evolved here: Colour sensing');
  check('d17UsedHasSense', (await ev(`__la.used()`)).lightsense === true);
  check('d17EvolvedHasBoth', JSON.stringify(await ev(`__la.evolved()`)) === '{"lightsense":true,"lightcolor":true}');
  await closeOv();
  await a.eval(`__la.selectDish(17);__la.show('adapt');1`); await a.sleep(500);
  await slotClick('envelope');
  check('d17ColourReadyAfterSense', (await ev(`__la.path().steps.map(function(t){return t.state})`)).join() === 'ready,ready,ready');
  // winning with Light sensing a second time shows no evolution panel and no evolved line; dish 17 is the last of its world, so the completion button shows
  await W.click('#pathBox .step[data-id="lightsense"]');
  const r17d = await play(16); check('d17SenseWinsAgain', r17d.win === true);
  check('d17NoEvoPanelSecondTime', (await ev(`!document.getElementById('evoCard')&&!!document.querySelector('#overlay .winwrap')`)));
  sum.d17SecondDebug = await ev(`({line:(document.getElementById('evolvedLine')||{}).textContent,en:__la.S.evolvedNew,shown:__la.S.evoShown,ev:__la.evolved(),used:__la.used(),build:__la.S.build.parts})`);
  check('d17NoEvolvedLineSecondTime', (await ev(`!document.getElementById('evolvedLine')`)));
  check('d17CompleteButton', await ev(`!!document.querySelector('#overlay button[data-act="complete"]')`));
  sum.completeBtn = await W.click('#overlay button[data-act="complete"]'); await a.sleep(400);
  const card = await ev(`(function(){var c=document.getElementById('completeCard');return c?c.textContent.replace(/\\s+/g,' '):null})()`);
  sum.complete = card && card.slice(0, 300); check('completionCard', !!card && /THICK WATER/.test(card) && /Where the Food Is/.test(card) && /Stop When Fed/.test(card) && /bright place/i.test(card) && /The three dishes/.test(card) && !/The two dishes/.test(card));
  await shot('h3-complete.png', MOB);

  // ---------------------------------------------------------------- 5. reload keeps the rule and the cleared marks; compare swaps runs
  await a.eval(`location.reload();1`); await a.sleep(1800);
  const kept = await ev(`(function(){var S=__la.S;return {used:S.used,evolved:S.evolved,c17:!!S.cleared[17],c15:!!S.cleared[15],c16:!!S.cleared[16],rule:S.wins[16]&&S.wins[16].reflex,tab:S.worldTab,intro:S.seenIntroC,world:S.seenWorldC}})()`);
  sum.afterReload = kept;
  check('reloadKeepsUsed', kept.used && kept.used.lightpump === true && kept.used.lightsense === true);
  check('reloadKeepsEvolved', !!kept.evolved && kept.evolved.lightsense === true && kept.evolved.lightcolor === true && kept.evolved.lightpump === undefined);
  check('reloadKeepsCleared', kept.c15 && kept.c16 && kept.c17 && kept.tab === 3 && kept.intro === true && kept.world === true);
  check('reloadKeepsRule', JSON.stringify(kept.rule) === JSON.stringify({ kind: 'machine', sensor: 'food', cmp: 'gt', value: 0.015, action: 'stay', otherwise: 'seek' }));
  await a.eval(`__la.show('list');1`); await a.sleep(300);
  check('reloadTilesCleared', (await ev(`document.querySelectorAll('#dishList .dtile.cleared').length`)) === 3);
  await W.click('#dishList button[data-dish="16"]'); await a.sleep(400);
  check('reloadD16Brief', (await ev(`__la.info().screen`)) === 'brief');
  await a.eval(`__la.show('adapt');1`); await a.sleep(300);
  const r16c = await play(16);   // the carried cell again, so there is a previous run to compare with
  check('compareBaseLoses', r16c.win === false);
  await closeOv();
  // the rule comes back from the saved build and syncRuleFromBuild restores all five parts
  await a.eval(`__la.setBuild(__la.S.wins[16]);__la.show('adapt');1`); await a.sleep(300);
  await slotClick('reflex');
  const blanks2 = await ev(`[].map.call(document.querySelectorAll('#ruleBox .blank'),function(e){return e.textContent})`);
  check('syncRestoresFive', JSON.stringify(blanks2) === JSON.stringify(['food here', 'is above', '0.015', 'stay and feed', 'swim toward food']));
  const r16d = await play(16); check('d16RuleWinsAfterReload', r16d.win === true);
  await closeOv(); await a.sleep(300);
  const cs0 = await ev(`__la.compareState()`); check('compareAvailable', cs0.available === true);
  const bb = await ev(`(function(){var b=document.getElementById('cmpBtn').getBoundingClientRect();return {x:b.x+b.width/2,y:b.y+b.height/2}})()`);
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: bb.x, y: bb.y, button: 'none' });
  await a.send('Input.dispatchMouseEvent', { type: 'mousePressed', x: bb.x, y: bb.y, button: 'left', clickCount: 1 }); await a.sleep(300);
  const held = await ev(`(function(){var C=__la.S.cmp,g=__la.gl();return {held:C.held,glSwapped:g?g.run===C.run&&g.run!==__la.S.run:null,line:document.getElementById('readLine').textContent,btn:document.getElementById('cmpBtn').textContent}})()`);
  sum.compareHeld = held; check('compareHeldShowsPrevious', held.held === true && /PREVIOUS RUN/.test(held.line) && held.glSwapped !== false);
  await a.send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: bb.x, y: bb.y, button: 'left', clickCount: 1 }); await a.sleep(300);
  const rel = await ev(`(function(){var C=__la.S.cmp,g=__la.gl();return {held:C.held,glBack:g?g.run===__la.S.run:null}})()`);
  check('compareReleaseRestores', rel.held === false && rel.glBack !== false);

  // ---------------------------------------------------------------- 6. the simple (non-WebGL) view draws the real cells on dish 15
  await a.eval(`__la.forceFallback(true);__la.selectDish(15);__la.show('adapt');1`); await a.sleep(300);
  await W.click('#runBtn'); await a.sleep(1500);
  const px = await ev(`(function(){var c=document.getElementById('runDish');if(!c||!c.width)return null;var x=c.getContext('2d'),d=x.getImageData(0,0,c.width,c.height).data,pink=0,lit=0;for(var i=0;i<d.length;i+=4){if(d[i]+d[i+1]+d[i+2]>60)lit++;if(d[i]>180&&d[i+1]<130&&d[i+2]>90)pink++}return {w:c.width,h:c.height,lit:lit,pink:pink,visible:c.style.display!=='none'}})()`);
  sum.fallback = px; check('fallbackDraws', !!px && px.visible && px.lit > 2000 && px.pink > 10);
  await shot('h3-d15-fallback.png', MOB);
  await a.eval(`__la.forceFallback(false);1`);


  // ---------------------------------------------------------------- 7. all three evolved, step 3 fitted; then the choice between two lineages (a second one made in memory, never in cards.js)
  await a.eval(`__la.selectDish(17);__la.show('adapt');1`); await a.sleep(500); await slotClick('envelope');
  check('d17AllEvolvedAfterReload', (await ev(`__la.path().steps.map(function(t){return t.state})`)).join() === 'ready,ready,ready');
  check('d17FitColour', await W.click('#pathBox .step[data-id="lightcolor"]') && await ev(`__la.S.build.parts.filter(function(p){return /^light/.test(p)}).join()==='lightcolor'`));
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(300);
  await a.eval(`document.activeElement&&document.activeElement.blur();1`); await a.sleep(200);
  check('d17ColourMarks', await ev(`document.querySelectorAll('#cellSvg .lpatch').length>0&&document.querySelectorAll('#cellSvg .lspot').length===(document.querySelector('#cellSvg .lmarks')?2:1)&&document.querySelectorAll('#cellSvg .lspot ~ path').length>0`));
  check('d17AllStatesNoTileMoved', (await rectNow('allFitted')) === seenRects[0][1] && seenRects.every(r => r[1] === seenRects[0][1]));
  await shotD('path-d17-all.png');
  await a.eval(`window.__mvSave={f:JSON.stringify(LookAliveCards.part('flagellum').tree),p:JSON.stringify(LookAliveCards.part('pili').tree)};var F=LookAliveCards.part('flagellum').tree,P=LookAliveCards.part('pili').tree;F.lineage='move';F.stage=2;P.lineage='move';P.stage=1;__la.setUsed({lightpump:true,pili:true});__la.setEvolved({});1`);
  check('choiceSetup', (await ev(`JSON.stringify(__la.evolved())`)) === '{}' && (await ev(`__la.used()`)).pili === true);
  await a.eval(`__la.selectDish(17);__la.show('adapt');1`); await a.sleep(500); await slotClick('envelope');
  check('choiceFitPump', await W.click('#pathBox .step[data-id="lightpump"]') && await ev(`__la.S.build.parts.indexOf('lightpump')>=0`));
  const rc = await play(16); check('choiceRunWins', rc.win === true);
  const ch1 = await ev(`(function(){var c=document.getElementById('evoCard');if(!c)return null;var p=[].map.call(c.querySelectorAll('.evopick'),function(b){var r=b.getBoundingClientRect();var cr=c.getBoundingClientRect();return {t:b.textContent,on:b.className.indexOf('on')>=0,r:[Math.round(r.x-cr.x),Math.round(r.y-cr.y),Math.round(r.width),Math.round(r.height)]}});return {picks:p,name:document.getElementById('evoName').textContent,box:c.getBoundingClientRect().height,focus:document.activeElement&&document.activeElement.id,winCard:!!document.querySelector('#overlay .winwrap')}})()`);
  sum.choice1 = ch1;
  check('choiceTwoTiles', !!ch1 && ch1.picks.length === 2 && /Light/.test(ch1.picks[0].t) && /Light sensing/.test(ch1.picks[0].t) && /Move/.test(ch1.picks[1].t) && /Flagellum/.test(ch1.picks[1].t) && ch1.winCard === false && ch1.focus === 'evoGo');
  check('choiceTilesFixed', !!ch1 && !!ch1.picks && ch1.picks[0].r[2] === ch1.picks[1].r[2] && ch1.picks[0].r[3] === ch1.picks[1].r[3]);
  await a.sleep(1200); await shotD('evolve-choice.png');
  sum.choiceDebug = await ev(`({win:__la.info().verdict&&__la.info().verdict.win,build:__la.S.build.parts,evoS:__la.S.evo&&__la.S.evo.cands.length,used:__la.used()})`);
  await W.click('#evoCard .evopick[data-i="1"]'); await a.sleep(300);
  const ch2 = !ch1 ? { p: [], name: '', cause: '', box: 0 } : await ev(`(function(){var p=[].map.call(document.querySelectorAll('#evoCard .evopick'),function(b){var r=b.getBoundingClientRect(),cr=document.getElementById('evoCard').getBoundingClientRect();return [b.className.indexOf('on')>=0,Math.round(r.x-cr.x),Math.round(r.y-cr.y),Math.round(r.width),Math.round(r.height)].join()});return {p:p,name:document.getElementById('evoName').textContent,cause:document.getElementById('evoCause').textContent,box:document.getElementById('evoCard').getBoundingClientRect().height}})()`);
  check('choicePickChangesPanel', !!ch1 && ch2.name === 'Flagellum' && /with Twitching pili fitted/.test(ch2.cause) && ch2.p[1].split(',')[0] === 'true' && ch2.p[0].split(',')[0] === 'false' && Math.abs(ch2.box - ch1.box) < 1);
  check('choiceTilesDidNotMove', !!ch1 && ch2.p.map(x => x.split(',').slice(1).join()).join('|') === ch1.picks.map(x => x.r.join()).join('|'));
  await W.click('#evoGo'); await a.sleep(500);
  check('choiceEvolvedOnlyPicked', JSON.stringify(await ev(`__la.evolved()`)) === '{"flagellum":true}');
  check('choiceWinCardLine', (await ev(`(document.getElementById('evolvedLine')||{}).textContent||''`)).trim() === 'Evolved here: Flagellum');
  await closeOv();
  await a.eval(`__la.selectDish(17);__la.show('adapt');1`); await a.sleep(500); await slotClick('envelope');
  await W.click('#pathBox .step[data-id="lightpump"]');
  const rc2 = await play(16); check('choiceSecondWins', rc2.win === true);
  check('choiceOtherOfferedAgain', await ev(`!!document.getElementById('evoCard')&&document.querySelectorAll('#evoCard .evopick').length===0&&document.getElementById('evoName').textContent==='Light sensing'`));
  await W.click('#evoGo'); await a.sleep(400);
  check('choiceBothEvolvedNow', JSON.stringify(await ev(`__la.evolved()`)) === '{"flagellum":true,"lightsense":true}');
  await closeOv();
  await a.eval(`var T=LookAliveCards.part('flagellum').tree,P=LookAliveCards.part('pili').tree,sv=window.__mvSave;delete T.lineage;delete T.stage;delete P.lineage;delete P.stage;T.lineage=JSON.parse(sv.f).lineage;P.lineage=JSON.parse(sv.p).lineage;__la.setUsed({lightpump:true,lightsense:true});1`);
  check('choiceRestored', (await ev(`LookAliveCards.part('flagellum').tree.lineage===undefined&&LookAliveCards.part('pili').tree.lineage===undefined&&LookAlive.lineageStage('flagellum')===null`)));

  sum.failed = failed; sum.checks = Object.keys(sum).filter(k => sum[k] === true).length;
  console.log('SUMMARY ' + JSON.stringify(sum));
};

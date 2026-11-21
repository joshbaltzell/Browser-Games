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
  const o17 = await ev(`__la.options().filter(function(o){return /^light/.test(o.id)})`); sum.d17Options = o17.map(o => o.id + ':' + (o.blocked ? 'blocked' : 'open') + (o.why ? ' (' + o.why + ')' : ''));
  const oo = (id) => o17.find((o) => o.id === id) || {};
  check('d17PumpFittable', oo('lightpump').blocked === false);
  check('d17SenseBlockedWithReason', oo('lightsense').blocked === true && /^Clear a dish with Light-driven pump fitted to evolve this\./.test(oo('lightsense').why));
  check('d17ColourBlocked', oo('lightcolor').blocked === true && /^Clear a dish with Light sensing fitted to evolve this\./.test(oo('lightcolor').why));
  check('d17BlockedHasTreeLink', await ev(`!!document.querySelector('#optList .opt[data-id="lightsense"] .treelink')&&!!document.querySelector('#optList .opt[data-id="lightcolor"] .treelink')&&!document.querySelector('#optList .opt[data-id="lightpump"] .treelink')`));
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(300);
  await shot('h3-d17-adapt.png', MOB);
  const b17 = await ev(`JSON.stringify(__la.S.build)`);
  check('d17ClickBlockedRefuses', await optClick('lightsense') && (await ev(`JSON.stringify(__la.S.build)`)) === b17 && /Clear a dish with Light-driven pump fitted to evolve this\./.test(await ev(`document.getElementById('pvT').textContent+' '+document.getElementById('problems').textContent`)));
  check('d17HookFitRefuses', (await ev(`__la.fit('lightcolor')`)).ok === false && (await ev(`JSON.stringify(__la.S.build)`)) === b17);
  check('d17FitPump', await optClick('lightpump') && await ev(`__la.S.build.parts.indexOf('lightpump')>=0`));
  await a.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 3, y: 3, button: 'none' }); await a.sleep(400);
  sum.d17BarsPump = await ev(`__la.bars().map(function(b){return b.stat+':'+b.verdict})`);
  const r17b = await play(16); sum.d17PumpRun = r17b;
  check('d17PumpWins', r17b.win === true);
  const evl = await ev(`(document.getElementById('evolvedLine')||{}).textContent||''`); sum.d17EvolvedLine = evl;
  check('d17EvolvedLineSensing', evl.trim() === 'A new step has evolved: Light sensing. Find it in the skill tree.');
  check('d17EvolvedLineFixedHeight', await ev(`(function(){var e=document.getElementById('evolvedLine');return !!e&&e.offsetHeight===(innerWidth<=640?36:22)})()`));
  check('d17UsedHasPump', (await ev(`__la.used()`)).lightpump === true && !(await ev(`__la.used()`)).lightsense);
  check('d17DeathsLineWin', /^Scouts lost: \d+ starved, \d+ burned, \d+ to the guards$/.test(await ev(`(document.getElementById('deathLine')||{}).textContent||''`)));
  if (big) check('d17WinCardFits', await ev(`(function(){var a=document.querySelector('#overlay .winwrap .memo').getBoundingClientRect(),b=document.querySelector('#overlay .winwrap .notebook').getBoundingClientRect();return a.top>=100&&a.bottom<=innerHeight&&b.top>=100&&b.bottom<=innerHeight})()`));
  await shot('h3-d17-win.png', MOB);
  check('d17WinHasNext', !(await ev(`!!document.querySelector('#overlay button[data-act="next"]')`)));
  await closeOv();
  // reopen dish 17: Light sensing is now fittable, Colour sensing is still blocked
  await a.eval(`__la.selectDish(17);__la.show('adapt');1`); await a.sleep(500);
  await slotClick('envelope');
  const o17b = await ev(`__la.options().filter(function(o){return /^light/.test(o.id)})`); const oo2 = (id) => o17b.find((o) => o.id === id) || {};
  check('d17SenseFittableAfterPump', oo2('lightsense').blocked === false && !oo2('lightsense').why);
  check('d17ColourStillBlocked', oo2('lightcolor').blocked === true && /^Clear a dish with Light sensing fitted to evolve this\./.test(oo2('lightcolor').why));
  check('d17FitSense', await optClick('lightsense') && await ev(`__la.S.build.parts.indexOf('lightsense')>=0`));
  const r17c = await play(16); sum.d17SenseRun = r17c;
  check('d17SenseWins', r17c.win === true);
  check('d17EvolvedLineColour', (await ev(`(document.getElementById('evolvedLine')||{}).textContent||''`)).trim() === 'A new step has evolved: Colour sensing. Find it in the skill tree.');
  check('d17UsedHasSense', (await ev(`__la.used()`)).lightsense === true);
  await closeOv();
  await a.eval(`__la.selectDish(17);__la.show('adapt');1`); await a.sleep(500);
  await slotClick('envelope');
  const o17c = await ev(`__la.options().filter(function(o){return o.id==='lightcolor'})[0]`);
  check('d17ColourFittableAfterSense', !!o17c && o17c.blocked === false);
  // winning with Light sensing a second time says nothing new; dish 17 is the last of its world, so the completion button shows
  await optClick('lightsense');
  const r17d = await play(16); check('d17SenseWinsAgain', r17d.win === true);
  check('d17NoEvolvedLineSecondTime', (await ev(`!document.getElementById('evolvedLine')`)));
  check('d17CompleteButton', await ev(`!!document.querySelector('#overlay button[data-act="complete"]')`));
  await W.click('#overlay button[data-act="complete"]'); await a.sleep(400);
  const card = await ev(`(function(){var c=document.getElementById('completeCard');return c?c.textContent.replace(/\\s+/g,' '):null})()`);
  sum.complete = card && card.slice(0, 300); check('completionCard', !!card && /THICK WATER/.test(card) && /Where the Food Is/.test(card) && /Stop When Fed/.test(card) && /bright place/i.test(card) && /The three dishes/.test(card) && !/The two dishes/.test(card));
  await shot('h3-complete.png', MOB);

  // ---------------------------------------------------------------- 5. reload keeps the rule and the cleared marks; compare swaps runs
  await a.eval(`location.reload();1`); await a.sleep(1800);
  const kept = await ev(`(function(){var S=__la.S;return {used:S.used,c17:!!S.cleared[17],c15:!!S.cleared[15],c16:!!S.cleared[16],rule:S.wins[16]&&S.wins[16].reflex,tab:S.worldTab,intro:S.seenIntroC,world:S.seenWorldC}})()`);
  sum.afterReload = kept;
  check('reloadKeepsUsed', kept.used && kept.used.lightpump === true && kept.used.lightsense === true);
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

  sum.failed = failed; sum.checks = Object.keys(sum).filter(k => sum[k] === true).length;
  console.log('SUMMARY ' + JSON.stringify(sum));
};

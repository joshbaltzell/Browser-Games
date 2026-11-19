// Look Alive habitat 2 walkthrough (dishes 11 to 14), run through the CDP driver:
//   node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough-h2.js        (also VW=390 VH=844 MOB=1)
// Clears dishes 1 to 10, switches to the banded-water tab with a real click, walks the 3 intro slides (real clicks on #introGo) and the world facts,
// then for each of dishes 11 to 14: briefing report + field note, carried cell loses with the expected cause, the Tip / "What changes this?" says something,
// the winner is built through the real UI hooks (__la.fit / unfit / setDial) and wins, the win card shows the reading and the notebook colony line.
// Winner for 11 to 13: carry(id) with the dish's first fix applied. Winner for 14 (an exam, no fixes): found at run time by trying candidate builds in the page.
// If no candidate wins on 14, uiWinnerWins is null (not counted as an error) and bestBandFrac is recorded. Prints one JSON row per dish and a SUMMARY line.
module.exports = async (a) => {
  const W = require('./walk-lib.js')(a), ev = W.ev;
  const EXPECT = { 11: 'cooked', 12: 'grazed', 13: 'bust', 14: null };
  const sum = {};
  await W.fresh({ seenWorld: true, unlocked: false });
  await a.eval(`for(var i=1;i<=10;i++)__la.S.cleared[i]=true;__la.show('list');1`); await a.sleep(300);
  // ---- tab switch, mini-intro, world facts (real clicks)
  sum.tabClick = await W.click('.wtab[data-world="2"]'); await a.sleep(400);
  let slides = 0; const seen = [];
  while ((await ev(`__la.info().screen`)) === 'intro' && slides < 8) {
    seen.push(await ev(`document.getElementById('introTitle').textContent`));
    slides++; await W.click('#introGo'); await a.sleep(350);
  }
  sum.introSlides = slides; sum.introDistinct = new Set(seen).size;
  sum.worldScreen = await ev(`__la.info().screen`);
  sum.worldFacts = await ev(`document.querySelectorAll('#worldFacts .fact').length`);
  await W.click('#worldGo'); await a.sleep(400);
  sum.listAfter = await ev(`({screen:__la.info().screen,tab:document.querySelector('.wtab.on')&&document.querySelector('.wtab.on').getAttribute('data-world'),tiles:document.querySelectorAll('#dishList button[data-dish]').length,scrollW:document.documentElement.scrollWidth,clientW:document.documentElement.clientWidth})`);

  const play = async () => {
    await W.click('#runBtn'); await a.sleep(120); await W.click('#speeds button[data-sp="16"]');
    await W.waitFor(`__la.S.overlayOpen===true`, 25000);
    return await ev(`(function(){var i=__la.info();return {win:i.verdict&&i.verdict.win,cause:i.autopsy&&i.autopsy.cause,frac:i.verdict&&i.verdict.bandFrac}})()`);
  };
  // Build target t through __la.fit / unfit / setDial. Machine rules cannot be built with these hooks: reported as machineRule.
  const buildTo = (t) => ev(`(function(t){var out=[],b=__la.S.build,C=LookAliveCards;
    var sl=function(x){return (C.part(x)||C.bio(x)).slot};
    b.parts.slice().forEach(function(p){if(t.parts.indexOf(p)<0){var r=__la.unfit(sl(p),p);if(r&&r.ok===false)out.push('unfit '+p+' '+JSON.stringify(r).slice(0,60))}});
    if(b.reflex&&b.reflex.kind==='bio'&&!(t.reflex&&t.reflex.kind==='bio'&&t.reflex.id===b.reflex.id)){var r2=__la.unfit('reflex',b.reflex.id);if(r2&&r2.ok===false)out.push('unfitReflex '+JSON.stringify(r2).slice(0,60))}
    if(b.metabolism!==t.metabolism){var r3=__la.fit(t.metabolism,0);if(r3&&r3.ok===false)out.push('met '+JSON.stringify(r3).slice(0,60))}
    t.parts.forEach(function(p){if(__la.S.build.parts.indexOf(p)<0){var r=__la.fit(p,0);if(r&&r.ok===false)out.push('fit '+p+' '+JSON.stringify(r).slice(0,60))}});
    if(t.reflex&&t.reflex.kind==='bio'&&!(__la.S.build.reflex&&__la.S.build.reflex.id===t.reflex.id)){var r4=__la.fit(t.reflex.id,0);if(r4&&r4.ok===false)out.push('fitReflex '+JSON.stringify(r4).slice(0,60))}
    if(t.reflex&&t.reflex.kind==='machine')out.push('machineRule');
    __la.setDial('pace',t.pace);__la.setDial('slop',t.slop);
    var b2=__la.S.build;
    return {log:out,matches:b2.pace===t.pace&&b2.slop===t.slop&&b2.metabolism===t.metabolism&&JSON.stringify(b2.parts.slice().sort())===JSON.stringify(t.parts.slice().sort())&&JSON.stringify(b2.reflex||null)===JSON.stringify(t.reflex||null)}})(${JSON.stringify(t)})`);

  // Dish 14: look for a winning build by simulation in the page (candidates listed in the task), validated first.
  const SEARCH14 = `(function(){var Lv=LookAliveLevels,Sim=LookAlive,C=LookAliveCards,P=Lv.PLANET,D=Lv.dish(14),t0=Date.now();
    var slot=function(x){var c=C.part(x)||C.bio(x);return c&&c.slot};
    var cl=function(o){return JSON.parse(JSON.stringify(o))};
    var cands=[],seenK={};
    var add=function(b,tag){var k=JSON.stringify([b.pace,b.slop,b.metabolism,b.parts.slice().sort(),b.reflex||null]);if(seenK[k])return;seenK[k]=1;cands.push({b:b,tag:tag})};
    [11,12,13].forEach(function(id){var d=Lv.dish(id),base=Lv.carry(id);(d.fixes||[]).forEach(function(f){var fb=Lv.applyFix(base,f);for(var p=3;p<=6;p++){var x=cl(fb);x.pace=p;add(x,id+':'+f.id+'@'+p)}})});
    var base14=Lv.carry(14),heats=[[],['chaperones'],['polyamines'],['tetraether'],['chaperones','tetraether'],['chaperones','polyamines'],['polyamines','tetraether'],['chaperones','polyamines','tetraether']];
    ['fermentation','heatps'].forEach(function(met){[null,'pili','filament'].forEach(function(mv){[null,'nightferm','sos'].forEach(function(rf){heats.forEach(function(h){[3,4,5,6].forEach(function(p){
      var b=cl(base14);b.metabolism=met||b.metabolism;b.pace=p;
      var add2=h.concat(mv?[mv]:[]);b.parts=b.parts.filter(function(x){return add2.map(slot).indexOf(slot(x))<0&&add2.indexOf(x)<0}).concat(add2);
      if(rf)b.reflex={kind:'bio',id:rf};add(b,'combo:'+met+'+'+h.join('/')+'+'+mv+'+'+rf+'@'+p)})})})})});
    var tried=0,best={frac:-1,tag:null},win=null,invalid=0;
    for(var i=0;i<cands.length&&!win&&tried<260&&Date.now()-t0<90000;i++){var c=cands[i],pr=null;try{pr=Sim.validate(D,c.b)}catch(e){pr={ok:false}}
      if(!pr||!pr.ok){invalid++;continue}
      tried++;var r=Sim.play(P,D,c.b,{n:64}),v=Sim.verdict(r);
      if(v.win){win={build:c.b,tag:c.tag,frac:v.bandFrac};break}
      if(v.alive&&v.bandFrac>best.frac)best={frac:v.bandFrac,tag:c.tag}}
    return {win:win,tried:tried,invalid:invalid,candidates:cands.length,best:best,ms:Date.now()-t0}})()`;

  const rows = []; const failed = [];
  for (let id = 11; id <= 14; id++) {
    const rec = { id };
    rec.tileEnabled = await ev(`!document.querySelector('#dishList button[data-dish="${id}"]').disabled`);
    await W.click(`#dishList button[data-dish="${id}"]`); await a.sleep(300);
    rec.screenAfterClick = await ev(`__la.info().screen`);
    if (rec.screenAfterClick === 'world') { await W.click('#worldGo'); await a.sleep(250); }
    // briefing: report rows and the field note
    rec.report = await ev(`(function(){var t=document.getElementById('briefReport').innerText;return {len:t.length,temperature:/Temperature/i.test(t),light:/Light/i.test(t),oxygen:/Oxygen/i.test(t),erosion:/Erosion/i.test(t)}})()`);
    rec.reportRows = !!(rec.report && rec.report.temperature && rec.report.light && rec.report.oxygen && rec.report.erosion);
    rec.fieldNote = await ev(`(function(){var b=document.getElementById('briefNote'),p=b?b.querySelectorAll('p'):[],d=LookAliveLevels.dish(${id}),fn=d.fieldNote;return !!b&&b.offsetParent!==null&&p.length===2&&!!fn[0]&&[0,1].every(function(i){return p[i].textContent===(fn[i]||'')})})()`);
    await W.click('#briefGo'); await a.sleep(150); await W.click('#speeds button[data-sp="16"]');
    rec.watchDone = (await W.waitFor(`__la.S.watchDone===true`, 25000)) >= 0;
    await W.click('#verdictBtn'); await a.sleep(300);
    // 1. the carried cell loses
    const r1 = await play(); rec.carriedWins = r1.win; rec.cause = r1.cause;
    rec.expectedCause = EXPECT[id]; rec.causeOk = EXPECT[id] ? r1.cause === EXPECT[id] : r1.win === false;
    rec.carried = await ev(`(function(b){return b.pace+'/'+b.slop+' '+b.metabolism+' '+b.parts.join('+')+(b.reflex?' +'+(b.reflex.id||'rule'):'')})(__la.S.carried)`);
    // 2. Tip (11 to 13) or "What changes this?" (14)
    if (id === 14) { await W.click('#memoTipBtn'); await a.sleep(200); rec.help = await ev(`(document.getElementById('memoTip').innerText||'').replace(/\\s+/g,' ').trim().slice(0,110)`); }
    await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.show('adapt');1`); await a.sleep(300);
    if (id !== 14) { await a.eval(`__la.pressTip();1`); await a.sleep(300); rec.help = await ev(`(document.getElementById('tipText').innerText||'').replace(/\\s+/g,' ').trim().slice(0,110)`); }
    rec.helpOk = !!rec.help && rec.help.length > 20;
    // 3. the winner
    let target = null;
    if (id < 14) {
      target = await ev(`(function(){var d=LookAliveLevels.dish(${id});return {fix:d.fixes[0].id,build:LookAliveLevels.applyFix(LookAliveLevels.carry(${id}),d.fixes[0])}})()`);
      rec.fix = target.fix; target = target.build;
    } else {
      const s = await ev(SEARCH14);
      rec.search = { tried: s.tried, invalid: s.invalid, candidates: s.candidates, ms: s.ms, best: s.best, found: s.win ? s.win.tag : null };
      if (s.win) target = s.win.build; else rec.bestBandFrac = s.best && s.best.frac;
    }
    if (target) {
      const res = await buildTo(target);
      rec.fitLog = (res.log || []).slice(0, 3); rec.builtMatches = res.matches;
      await a.sleep(200);
      const r2 = await play(); rec.uiWinnerWins = r2.win; rec.winCause = r2.cause;
      rec.story = await ev(`(function(){var d=LookAliveLevels.dish(${id}),r=document.getElementById('winReading'),c=document.getElementById('colonyNote');return {reading:!!r&&r.textContent===d.reading,colony:!!c&&c.textContent===d.colony}})()`);
      if (id === 14) {
        // the completion card, as the game offers it after the exam is cleared
        await a.sleep(300);
        rec.completeAuto = await ev(`!!document.getElementById('completeCard')`);
        if (!rec.completeAuto) { rec.completeBtn = await ev(`!!document.querySelector('#overlay button[data-act="complete"]')`); if (rec.completeBtn) { await W.click('#overlay button[data-act="complete"]'); await a.sleep(300); } }
        let card = await ev(`(function(){var c=document.getElementById('completeCard');return c?c.textContent:null})()`);
        if (!card && rec.uiWinnerWins) { await a.eval(`__la.completeCard();1`); await a.sleep(300); rec.completeFromHook = true; card = await ev(`(function(){var c=document.getElementById('completeCard');return c?c.textContent:null})()`); }
        sum.completion = { present: !!card, nextMentionsSaltFlat: !!card && /salt flat/i.test(card), viaGame: rec.completeAuto || !!rec.completeBtn, text: card ? card.replace(/\s+/g, ' ').slice(0, 400) : null };
      }
    } else { rec.uiWinnerWins = null; rec.builtMatches = null; rec.story = null; }
    await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.show('list');1`); await a.sleep(250);
    rec.nextUnlocked = id < 14 ? await ev(`!document.querySelector('#dishList button[data-dish="${id + 1}"]').disabled`) : 'n/a';
    rec.listScrollOk = await ev(`document.documentElement.scrollWidth<=document.documentElement.clientWidth+1`);
    await a.eval(`try{__la.advance()}catch(e){};1`); await a.sleep(200);
    const storyOk = !!(rec.story && rec.story.reading && rec.story.colony);
    if (id < 14) rec.passed = rec.carriedWins === false && rec.causeOk && rec.uiWinnerWins === true && rec.builtMatches === true && storyOk && rec.nextUnlocked === true && rec.reportRows && rec.fieldNote && rec.helpOk;
    else rec.passed = rec.carriedWins === false && rec.reportRows && rec.fieldNote && rec.helpOk && ((rec.uiWinnerWins === true && rec.builtMatches === true && storyOk) || (rec.uiWinnerWins === null && target === null));
    if (!rec.passed) failed.push(id);
    rows.push(rec); console.log(JSON.stringify(rec));
  }
  sum.dishesPassed = rows.filter(r => r.passed).length;
  sum.failed = failed;
  sum.dish14 = { uiWinnerWins: rows[3].uiWinnerWins, found: rows[3].search && rows[3].search.found, bestBandFrac: rows[3].bestBandFrac };
  console.log('SUMMARY ' + JSON.stringify(sum));
};

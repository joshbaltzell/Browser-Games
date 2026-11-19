// Ten-dish walkthrough. For every dish: the carried cell must LOSE (nothing is automatic), the tip or "What changes this?" must say something,
// then the minimal winner is built through the real fit/unfit/dial functions, must WIN, and the next dish must unlock on its own.
// Wave 2 (M0): also the intro through real clicks, Watch and Run through real playback at 16x, a keyboard-only dish 1, an exam loss read through the memo,
// and first-minute numbers (dish 1 Watch wall time and pink timeline, Adapt slot tags and Tab presses to RUN on dishes 1 to 5).
// Run: node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js   (one JSON row per dish, then one SUMMARY line)
// Env: ONLY=intro,kb,watch1,exam,dishes,metrics (comma list; default all).
const WIN10={pace:3,slop:6,metabolism:'fermentation',parts:['acidproof'],reflex:{kind:'bio',id:'sporulate'}};
module.exports=async(a)=>{
 const W=require('./walk-lib.js')(a), ev=W.ev;
 const only=(process.env.ONLY||'intro,kb,watch1,metrics,exam,dishes').split(',');
 const sum={};
 // ---- 1. intro through real clicks: five slides, Next x4, Begin, lands on the dish list
 if(only.includes('intro')){
  await W.fresh({skipIntro:false});
  const seen=[];let ok=(await ev(`__la.info().screen`))==='intro';
  for(let i=0;i<5&&ok;i++){seen.push(await ev(`document.getElementById('introKicker').textContent`));ok=await W.click('#introGo');await a.sleep(260);}
  sum.intro=ok&&seen.length===5&&(await ev(`__la.info().screen`))==='list'&&(await ev(`localStorage.getItem('bg.look-alive.intro2')`))==='true';
  sum.introSlides=seen.length;
 }
 // ---- 2. keyboard only, dish 1: Skip intro, Start, Continue, Start the test, Adapt, fit the Proton pump, RUN, win
 if(only.includes('kb')){
  await W.fresh({skipIntro:false});W.resetCounts();
  const steps=[['#introSkip','list'],['#dishList button[data-dish="1"]','world'],['#worldGo','brief'],['#briefGo','run']];
  let ok=true;
  for(const [sel,want] of steps){if(await W.tabTo(sel)<0){ok=false;break;}await W.press('Enter');await a.sleep(300);if((await ev(`__la.info().screen`))!==want){ok=false;break;}}
  ok=ok&&await W.waitFor(`__la.S.watchDone===true`,15000)>=0;
  if(ok){ok=await W.tabTo('#verdictBtn')>0;await W.press('Enter');await a.sleep(400);}
  const tabsToRunFromAdapt=ok?await (async()=>{const n0=W.counts().presses;const n=await W.tabTo('#runBtn');return n<0?-1:W.counts().presses-n0;})():-1;
  // focus is now on RUN; walk to the envelope tag, then the pump option
  if(ok){ok=await W.tabTo('#tagLayer .tag[data-slot="envelope"]')>0;await W.press('Enter');await a.sleep(250);
   sum.kbFocusInOptionsAfterSlot=await ev(`!!(document.activeElement&&document.activeElement.closest&&document.activeElement.closest('#optList'))`);}
  if(ok){ok=await W.tabTo('#optList .opt[data-id="pump"]')>0;await W.press('Enter');await a.sleep(250);}
  if(ok){ok=await W.tabTo('#runBtn')>0;await W.press('Enter');await a.sleep(300);}
  ok=ok&&await W.waitFor(`__la.S.overlayOpen===true`,30000)>=0;
  sum.keyboardOnly=ok&&(await ev(`__la.info().verdict.win`))===true;
  sum.kbPresses=W.counts().presses;sum.kbTabsToRunOnArrival=tabsToRunFromAdapt;
 }
 // ---- 3. dish 1 Watch at default speed: wall time and the pink timeline (t:pink)
 if(only.includes('watch1')){
  await W.fresh({seenWorld:true});
  await W.click('#dishList button[data-dish="1"]');await a.sleep(200);
  const t0=Date.now();await W.click('#briefGo');
  const tl=[];let pink0=0,visibleMs=0,last=Date.now();
  while(Date.now()-t0<15000){const p=await W.pink();const now=Date.now();
   if(p){if(p.t===0&&p.pink>pink0)pink0=p.pink;tl.push(Math.round(p.t)+':'+p.pink);if(p.t>0&&pink0&&p.pink>=0.25*pink0)visibleMs+=now-last;}
   last=now;if(await ev(`__la.S.watchDone`))break;await a.sleep(120);}
  sum.watchWallClockSeconds=+((Date.now()-t0)/1000).toFixed(2);
  sum.watchPinkVisibleSeconds=+(visibleMs/1000).toFixed(2);   // wall time with t>0 and pink >= 25% of the tick-0 count
  sum.watchPink0=pink0;sum.watchPinkTimeline=tl.join(' ');
  sum.watchPinkEnd=tl.length?+tl[tl.length-1].split(':')[1]:null;
 }
 // ---- 4. first-minute numbers on Adapt, dishes 1 to 5 (before-numbers for M1)
 if(only.includes('metrics')){
  await W.fresh({seenWorld:true,unlocked:true});
  sum.adaptVisibleSlotTags={};sum.adaptTabsToRun={};sum.adaptFocusables={};
  for(let id=1;id<=5;id++){
   await a.eval(`__la.selectDish(${id});__la.show('adapt');document.activeElement&&document.activeElement.blur();scrollTo(0,0);1`);await a.sleep(300);
   sum.adaptVisibleSlotTags[id]=await ev(`Array.prototype.filter.call(document.querySelectorAll('#tagLayer .tag'),function(b){return b.offsetParent!==null&&getComputedStyle(b).visibility!=='hidden'}).length`);
   sum.adaptFocusables[id]=await ev(`Array.prototype.filter.call(document.querySelectorAll('#screen-adapt button,#screen-adapt [tabindex="0"],#screen-adapt input'),function(b){return b.offsetParent!==null&&!b.disabled}).length`);
   const n0=W.counts().presses;await a.eval(`document.body.focus();1`);const n=await W.tabTo('#runBtn');sum.adaptTabsToRun[id]=n<0?-1:W.counts().presses-n0;
  }
 }
 // ---- 5. exam dishes: the carried cell loses through real playback, the memo is read, "What changes this?" says something
 if(only.includes('exam')){
  await W.fresh({seenWorld:true,unlocked:true});sum.exam={};
  for(let id=6;id<=10;id++){
   await a.eval(`__la.selectDish(${id});__la.show('adapt');1`);await a.sleep(250);
   await W.click('#runBtn');await a.sleep(150);await W.click('#speeds button[data-sp="16"]');
   const ok=await W.waitFor(`__la.S.overlayOpen===true`,20000)>=0;
   const memo=await ev(`(function(){var rows={};Array.prototype.forEach.call(document.querySelectorAll('#overlay .memo .row'),function(r){var b=r.querySelector('b');if(b)rows[b.textContent]=r.querySelector('span')?r.querySelector('span').textContent.replace(/\\s+/g,' ').trim():''});return rows})()`);
   await W.click('#memoTipBtn');await a.sleep(200);
   const help=await ev(`(document.getElementById('memoTip').innerText||'').replace(/\\s+/g,' ').trim()`);
   const generic=await ev(`(function(){var d=LookAliveLevels.dish(${id}),c=__la.info().autopsy.cause;return !d.tips[c]})()`);
   sum.exam[id]={lost:ok&&(await ev(`__la.info().verdict.win`))===false,cause:await ev(`__la.info().autopsy.cause`),from:memo&&memo.From,finding:(memo&&memo.Finding||'').slice(0,140),helpLen:help.length,tipIsGenericFallback:generic};
   await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;1`);
  }
 }
 // ---- 6. the ten dishes (Watch and both runs through real playback at 16x)
 const rows=[];
 if(only.includes('dishes')){
 await W.fresh({seenWorld:false});
 const play=async()=>{await W.click('#runBtn');await a.sleep(120);await W.click('#speeds button[data-sp="16"]');
   await W.waitFor(`__la.S.overlayOpen===true`,20000);
   return await ev(`(function(){var i=__la.info();return {win:i.verdict&&i.verdict.win,cause:i.autopsy&&i.autopsy.cause}})()`);};
 for(let id=1;id<=10;id++){
  const rec={id};
  rec.lockedBefore=await ev(`document.querySelector('#dishList button[data-dish="${id}"]').disabled`);
  await W.click(`#dishList button[data-dish="${id}"]`);await a.sleep(200);
  if(id===1&&(await ev(`__la.info().screen`))==='world')rec.scaleWorld=await ev(`(document.querySelector('#scaleWorld .sv')||{}).textContent===LookAliveLevels.WORLD.scale[0].state`);
  if(id===1){if((await ev(`__la.info().screen`))==='world')await W.click('#worldGo');await a.sleep(200);}
  rec.reportShown=await ev(`document.getElementById('briefReport').innerText.length>60`);
  // M5: the briefing shows this dish's two-line field note
  rec.fieldNote=await ev(`(function(){var b=document.getElementById('briefNote'),p=b?b.querySelectorAll('p'):[],d=LookAliveLevels.dish(${id});return !!b&&b.offsetParent!==null&&p.length===2&&p[0].textContent===d.fieldNote[0]&&p[1].textContent===d.fieldNote[1]})()`);
  await W.click('#briefGo');await a.sleep(150);await W.click('#speeds button[data-sp="16"]');
  rec.watchDone=await W.waitFor(`__la.S.watchDone===true`,20000)>=0;
  rec.watchCause=await ev(`__la.info().autopsy&&__la.info().autopsy.cause`);
  await W.click('#verdictBtn');await a.sleep(300);
  // 1. carried cell must fail
  const r1=await play(); rec.carriedWins=r1.win; rec.cause=r1.cause;
  // M5: the memo is from a desk that fits the cause, and the finding does not repeat the headline's lead-in
  rec.memo=await ev(`(function(){var f=document.getElementById('memoFrom'),r=document.querySelector('#memoFinding .rest');return {from:f?f.textContent:null,dup:r?/^[^:.]{0,60}\\btick \\d+(?: to \\d+)?:/.test(r.textContent):null}})()`);
  await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.show('adapt');__la.pressTip();1`);await a.sleep(300);
  rec.help=await ev(`(document.getElementById('tipText').innerText||'').replace(/\\s+/g,' ').slice(0,110)`);
  // 2. build the winner through the real UI functions
  const target=id===10?WIN10:await ev(`LookAliveLevels.carry(${id+1})`);
  rec.carried=await ev(`(function(b){return b.pace+'/'+b.slop+' '+b.metabolism+' '+b.parts.join('+')+(b.reflex?' +'+(b.reflex.id||'rule'):'')})(__la.S.carried)`);
  const res=await ev(`(function(t){var out=[],b=__la.S.build,C=LookAliveCards;
    var sl=function(x){return (C.part(x)||C.bio(x)).slot};
    b.parts.slice().forEach(function(p){if(t.parts.indexOf(p)<0){out.push('unfit '+p+' '+JSON.stringify(__la.unfit(sl(p),p)).slice(0,60))}});
    if(b.reflex&&b.reflex.kind==='bio'&&!(t.reflex&&t.reflex.kind==='bio'&&t.reflex.id===b.reflex.id))out.push('unfit reflex '+b.reflex.id+' '+JSON.stringify(__la.unfit('reflex',b.reflex.id)).slice(0,60));
    if(b.metabolism!==t.metabolism)out.push('met '+JSON.stringify(__la.fit(t.metabolism,0)));
    t.parts.forEach(function(p){if(__la.S.build.parts.indexOf(p)<0)out.push('fit '+p+' '+JSON.stringify(__la.fit(p,0)))});
    if(t.reflex&&t.reflex.kind==='bio'&&!(__la.S.build.reflex&&__la.S.build.reflex.id===t.reflex.id))out.push('fit '+t.reflex.id+' '+JSON.stringify(__la.fit(t.reflex.id,0)));
    __la.setDial('pace',t.pace);__la.setDial('slop',t.slop);
    return out})(${JSON.stringify(target)})`);
  rec.fitLog=(res||[]).filter(x=>/"ok":false|reason/.test(x)).slice(0,3);
  rec.builtMatches=await ev(`(function(t){var b=__la.S.build;return b.pace===t.pace&&b.slop===t.slop&&b.metabolism===t.metabolism&&JSON.stringify(b.parts.slice().sort())===JSON.stringify(t.parts.slice().sort())&&JSON.stringify(b.reflex||null)===JSON.stringify(t.reflex||null)})(${JSON.stringify(target)})`);
  const r2=await play(); rec.uiWinnerWins=r2.win;
  // M5: the win shows this dish's reading and the notebook page's colony comment
  rec.story=await ev(`(function(){var d=LookAliveLevels.dish(${id}),r=document.getElementById('winReading'),c=document.getElementById('colonyNote');return {reading:!!r&&r.textContent===d.reading,colony:!!c&&c.textContent===d.colony}})()`);
  await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.show('list');1`);await a.sleep(250);
  rec.nextUnlocked=await ev(id<10?`!document.querySelector('#dishList button[data-dish="${id+1}"]').disabled`:`'n/a'`);
  rec.clearedNow=await ev(`Object.keys(__la.S.cleared).join(',')`);
  rec.scaleList=await ev(`(document.querySelector('#scaleList .sv')||{}).textContent===LookAliveLevels.WORLD.scale[${id}].state`);
  await a.eval(`try{__la.advance()}catch(e){};1`);await a.sleep(300);
  rows.push(rec);
 }
 // M5: the completion card carries the seed of the next rung; every dish passed the story checks
 const done=await ev(`(function(){__la.completeCard();var c=document.getElementById('completeCard'),t=c?c.textContent:'';var o={card:!!c,twitched:/twitched/.test(t),setsAcid:/sets the acid/.test(t),sameWay:/every acid/.test(t)};document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;return o})()`);
 const failDishes=rows.filter(r=>!r.fieldNote||!r.story||!r.story.reading||!r.story.colony||!r.scaleList||!r.memo||!r.memo.from||/Coroner|Immune/.test(r.memo.from)||r.memo.dup!==false).map(r=>r.id);
 sum.story={fieldNotes:rows.filter(r=>r.fieldNote).length,readings:rows.filter(r=>r.story&&r.story.reading).length,colony:rows.filter(r=>r.story&&r.story.colony).length,scaleWorld:rows[0].scaleWorld,complete:done,failDishes};
 console.log(JSON.stringify(rows));
 sum.dishesPassed=rows.filter(r=>r.carriedWins===false&&r.uiWinnerWins===true&&r.builtMatches===true&&(r.id===10||r.nextUnlocked===true)).length;
 }
 console.log('SUMMARY '+JSON.stringify(sum));
};

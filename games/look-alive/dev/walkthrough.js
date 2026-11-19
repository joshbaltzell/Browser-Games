// Ten-dish walkthrough. For every dish: the carried cell must LOSE (nothing is automatic), the tip or "What changes this?" must say something,
// then the minimal winner is built through the real fit/unfit/dial functions, must WIN, and the next dish must unlock on its own.
// Run: node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js   (prints one JSON row per dish)
const WIN10={pace:3,slop:6,metabolism:'fermentation',parts:['acidproof'],reflex:{kind:'bio',id:'sporulate'}};
module.exports=async(a)=>{
 const ev=async(js)=>{const r=await a.eval(`(function(){try{return JSON.stringify(${js})}catch(e){return JSON.stringify({err:String(e)})}})()`);try{return JSON.parse(r)}catch(e){return r}};
 await a.eval(`localStorage.clear();1`);await a.eval(`location.reload();1`);await a.sleep(1500);
 await a.eval(`__la.S.seenIntro=true;__la.show('list');1`);await a.sleep(300);
 const rows=[];
 for(let id=1;id<=10;id++){
  const rec={id};
  rec.lockedBefore=await ev(`document.querySelector('#dishList button[data-dish="${id}"]').disabled`);
  await a.eval(`__la.selectDish(${id});1`);await a.sleep(200);
  if(id===1){await a.eval(`if(__la.info().screen==='world')__la.worldContinue();1`);await a.sleep(200);}
  rec.reportShown=await ev(`document.getElementById('briefReport').innerText.length>60`);
  await a.eval(`__la.show('adapt');1`);await a.sleep(250);
  const play=async()=>{await a.eval(`__la.run();1`);await a.sleep(400);
   await a.eval(`(function(){__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult();return 1})()`);await a.sleep(500);
   return await ev(`(function(){var i=__la.info();return {win:i.verdict&&i.verdict.win,cause:i.autopsy&&i.autopsy.cause}})()`);};
  // 1. carried cell must fail
  const r1=await play(); rec.carriedWins=r1.win; rec.cause=r1.cause;
  await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.show('adapt');__la.pressTip();1`);await a.sleep(300);
  rec.help=await ev(`(document.getElementById('tipText').innerText||'').replace(/\\s+/g,' ').slice(0,110)`);
  // 2. build the winner through the real UI functions
  const target=id===10?WIN10:await ev(`LookAliveLevels.carry(${id+1})`);
  rec.carried=await ev(`(function(b){return b.pace+'/'+b.slop+' '+b.metabolism+' '+b.parts.join('+')+(b.reflex?' +'+(b.reflex.id||'rule'):'')})(__la.S.carried)`);
  const res=await ev(`(function(t){var out=[],b=__la.S.build,C=LookAliveCards;
    var sl=function(x){return (C.part(x)||C.bio(x)).slot};
    b.parts.slice().forEach(function(p){if(t.parts.indexOf(p)<0&&!(sl(p)==='division'&&p==='clock'&&false)){out.push('unfit '+p+' '+JSON.stringify(__la.unfit(sl(p),p)).slice(0,60))}});
    if(b.reflex&&b.reflex.kind==='bio'&&!(t.reflex&&t.reflex.kind==='bio'&&t.reflex.id===b.reflex.id))out.push('unfit reflex '+b.reflex.id+' '+JSON.stringify(__la.unfit('reflex',b.reflex.id)).slice(0,60));
    if(b.metabolism!==t.metabolism)out.push('met '+JSON.stringify(__la.fit(t.metabolism,0)));
    t.parts.forEach(function(p){if(__la.S.build.parts.indexOf(p)<0)out.push('fit '+p+' '+JSON.stringify(__la.fit(p,0)))});
    if(t.reflex&&t.reflex.kind==='bio'&&!(__la.S.build.reflex&&__la.S.build.reflex.id===t.reflex.id))out.push('fit '+t.reflex.id+' '+JSON.stringify(__la.fit(t.reflex.id,0)));
    __la.setDial('pace',t.pace);__la.setDial('slop',t.slop);
    return out})(${JSON.stringify(target)})`);
  rec.fitLog=(res||[]).filter(x=>/"ok":false|reason/.test(x)).slice(0,3);
  rec.builtMatches=await ev(`(function(t){var b=__la.S.build;return b.pace===t.pace&&b.slop===t.slop&&b.metabolism===t.metabolism&&JSON.stringify(b.parts.slice().sort())===JSON.stringify(t.parts.slice().sort())&&JSON.stringify(b.reflex||null)===JSON.stringify(t.reflex||null)})(${JSON.stringify(target)})`);
  const r2=await play(); rec.uiWinnerWins=r2.win;
  await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.show('list');1`);await a.sleep(250);
  rec.nextUnlocked=await ev(id<10?`!document.querySelector('#dishList button[data-dish="${id+1}"]').disabled`:`'n/a'`);
  rec.clearedNow=await ev(`Object.keys(__la.S.cleared).join(',')`);
  await a.eval(`try{__la.advance()}catch(e){};1`);await a.sleep(300);
  rows.push(rec);
 }
 console.log(JSON.stringify(rows));
};

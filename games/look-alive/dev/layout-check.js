// Layout and first-minute checks for Look Alive wave 2 (M1). One PASS/FAIL line per check, then a LAYOUT JSON line with the raw numbers.
// Run at each size:  VW=1280 VH=720 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/layout-check.js
//   also VW=1366 VH=768;  VW=390 VH=844 MOB=1;  VW=320 VH=640 MOB=1;  VW=844 VH=390 MOB=1
// Before M1 most lines FAIL: that output is the baseline.
module.exports=async(a)=>{
 const W=require('./walk-lib.js')(a), ev=W.ev, R=W.RECT_FN;
 const vw=+(process.env.VW||1280), vh=+(process.env.VH||720), desktop=vw>=1181&&vh>=700, phone=vw<=820||vh<=500;
 const out={size:vw+'x'+vh}, res=[];
 const check=(id,ok,info)=>{res.push((ok?'PASS ':'FAIL ')+id+' '+(info===undefined?'':JSON.stringify(info)));};
 const overflow=()=>ev(`document.documentElement.scrollWidth-innerWidth`);
 await W.fresh({seenWorld:true,unlocked:true});
 const ovf={list:await overflow()};
 // ---- Adapt, dishes 1 to 5
 const ad={};
 for(let id=1;id<=5;id++){
  await a.eval(`__la.selectDish(${id});__la.show('adapt');scrollTo(0,0);1`);await a.sleep(350);
  ad[id]=await ev(`(function(){${R};
   var tags=Array.prototype.filter.call(document.querySelectorAll('#tagLayer .tag'),function(b){return b.offsetParent!==null&&getComputedStyle(b).visibility!=='hidden'});
   var trunc=Array.prototype.filter.call(document.querySelectorAll('#tagLayer .tag .tv,#tagLayer .tag .tn,.brand'),function(e){return e.offsetParent!==null&&e.scrollWidth>e.clientWidth+1}).map(function(e){return e.className||e.id});
   var rb=document.getElementById('runBtn').getBoundingClientRect(), ud=document.getElementById('undo').getBoundingClientRect(), en=document.querySelector('.tuning .energy');var eb=en?en.getBoundingClientRect():null;
   var inV=function(b){return !!b&&b.width>0&&b.top>=0&&b.left>=0&&b.bottom<=innerHeight+0.5&&b.right<=innerWidth+0.5};
   var rects=tags.map(function(t){return R(t)}),overlap=0;for(var i=0;i<rects.length;i++)for(var j=i+1;j<rects.length;j++){var p=rects[i],q=rects[j];if(p[0]<q[0]+q[2]&&q[0]<p[0]+p[2]&&p[1]<q[1]+q[3]&&q[1]<p[1]+p[3])overlap++;}
   var co=document.getElementById('coach'),fl=document.getElementById('factoryLine');
   return {tags:tags.length,slots:LookAliveLevels.dish(${id}).slots.length,trunc:trunc,overlap:overlap,runInView:inV(rb),runBottom:Math.round(rb.bottom),undoInView:inV(ud),energyInView:inV(eb),
     coach:!!(co&&co.offsetParent!==null&&!co.hidden),coachRect:co&&!co.hidden?R(co):null,factory:fl&&!fl.hidden&&fl.offsetParent!==null?fl.textContent:'',overflow:document.documentElement.scrollWidth-innerWidth,
     slop:(document.querySelector('#slopBox .dtext b')||{}).textContent||''}})()`);
  if(id<=2&&ad[id].coach){await a.eval(`__la.fit('${id===1?'pump':'quorum'}',0);1`);await a.sleep(250);
   ad[id].coachAfterFit=await ev(`(function(){var co=document.getElementById('coach');return !!(co&&co.offsetParent!==null&&!co.hidden)})()`);}
  ovf['adapt'+id]=ad[id].overflow;
 }
 out.adapt=ad;
 // ---- Run, dishes 1, 2 and 5 (carried cell), measured at a mid tick
 const rn={};
 for(const id of [1,2,5]){
  await a.eval(`__la.selectDish(${id});__la.show('adapt');1`);await a.sleep(200);
  await a.eval(`__la.run();1`);await a.sleep(1400);await a.eval(`__la.S.playing=false;__la.seek(60);scrollTo(0,0);1`);await a.sleep(300);
  rn[id]=await ev(`(function(){${R};
   var h=document.querySelector('.dhint'),ht=null;if(h&&h.firstChild&&getComputedStyle(h).opacity!=='0'){var rg=document.createRange();rg.selectNodeContents(h);var q=rg.getBoundingClientRect();ht=[Math.round(q.x),Math.round(q.y+scrollY),Math.round(q.width),Math.round(q.height)]}
   var gs=document.getElementById('gShare').getBoundingClientRect();
   return {dish:R('#dishWrap'),gShareBottom:Math.round(gs.bottom),gShareH:Math.round(gs.height),hint:ht,yourCell:R('#yourCell'),docH:document.documentElement.scrollHeight,overflow:document.documentElement.scrollWidth-innerWidth,
     gl:(function(){var s=__la.glStats();return s&&s.supported?{tier:s.tier,drawn:s.drawn,frameMs:s.frameMs,size:s.size}:null})(),legend:(document.querySelector('.legend')||{}).textContent||'',verdict:(document.getElementById('verdictText')||{}).textContent||'',readLine:R('#readLine')}})()`);
  rn[id].hintHitsYourCell=W.meet(rn[id].hint,rn[id].yourCell);
  ovf['run'+id]=rn[id].overflow;
  // the memo for this run
  await a.eval(`__la.S.runFinished=true;__la.showResult();1`);await a.sleep(300);
  rn[id].memo=await ev(`(function(){var rows={};Array.prototype.forEach.call(document.querySelectorAll('#overlay .memo .row'),function(r){var b=r.querySelector('b');if(b)rows[b.textContent]=r.querySelector('span')?r.querySelector('span').textContent.replace(/\\s+/g,' ').trim():''});return rows})()`);
  ovf['memo'+id]=await overflow();
  await a.eval(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;1`);
 }
 out.run=rn;out.overflow=ovf;
 // ---- checks
 check('L1 no horizontal overflow',Object.values(ovf).every(v=>v<=0),ovf);
 check('L2 hidden locked slots: dishes 1-4 show only open slots, dish 5 shows all 7',[1,2,3,4].every(i=>ad[i].tags===ad[i].slots)&&ad[5].tags===7&&ad[1].tags<=3,[1,2,3,4,5].map(i=>ad[i].tags));
 check('L3 factory line: dish 1 names Respiration and Sync pulse, dish 4 has none',/Respiration/.test(ad[1].factory)&&/Sync pulse/.test(ad[1].factory)&&/Sync pulse/.test(ad[3].factory)&&!/Respiration/.test(ad[3].factory)&&!ad[4].factory,[ad[1].factory,ad[3].factory,ad[4].factory]);
 check('L4 coach on dishes 1 and 2 only, gone after the first fit',ad[1].coach&&ad[2].coach&&!ad[3].coach&&!ad[5].coach&&ad[1].coachAfterFit===false&&ad[2].coachAfterFit===false,[1,2,3,5].map(i=>ad[i].coach).concat([ad[1].coachAfterFit,ad[2].coachAfterFit]));
 check('L5 no truncated slot tag or title text',[1,2,3,4,5].every(i=>!ad[i].trunc.length),[1,2,3,4,5].map(i=>ad[i].trunc.join('|')));
 check('L6 visible slot tags do not overlap',[1,2,3,4,5].every(i=>!ad[i].overlap),[1,2,3,4,5].map(i=>ad[i].overlap));
 check('L7 RUN visible at scrollY 0 on Adapt (dishes 1-5)',[1,2,3,4,5].every(i=>ad[i].runInView),[1,2,3,4,5].map(i=>ad[i].runBottom));
 if(phone)check('L8 phone bar: Undo and energy meter visible at scrollY 0',[1,2,3,4,5].every(i=>ad[i].undoInView&&ad[i].energyInView),[1,2,3,4,5].map(i=>ad[i].undoInView+'/'+ad[i].energyInView));
 if(desktop){
  check('L9 dish at least 520 px wide',[1,2,5].every(i=>rn[i].dish&&rn[i].dish[2]>=520),[1,2,5].map(i=>rn[i].dish&&rn[i].dish[2]));
  check('L10 share chart fully visible and no page scroll on Run',[1,2,5].every(i=>rn[i].gShareBottom<=vh&&rn[i].gShareH>=80&&rn[i].docH<=vh+1),[1,2,5].map(i=>rn[i].gShareBottom+'/'+rn[i].docH));
 }
 check('L11 zoom hint text clear of the Your cell thumbnail',[1,2,5].every(i=>!rn[i].hintHitsYourCell),[1,2,5].map(i=>rn[i].hint));
 check('L12 legend says guards, not immune cells',!/immune/i.test(rn[2].legend)&&/guards/.test(rn[2].legend),rn[2].legend);
 check('L13 memo From by cause (dish 1 acid, dish 2 guards)',rn[1].memo.From==="The lab's acid sampler"&&rn[2].memo.From==='Office of the Guards',[rn[1].memo.From,rn[2].memo.From]);
 const dup=s=>{const m=(s||'').toLowerCase().match(/tick \d+/g)||[];return m.length!==new Set(m).size;};
 check('L14 memo finding says its tick once',[1,2,5].every(i=>!dup(rn[i].memo.Finding)),[1,2,5].map(i=>(rn[i].memo.Finding||'').slice(0,90)));
 check('L15 Sloppy dial label',/^0: Perfectly regular/.test(ad[4].slop),ad[4].slop);
 console.log(res.join('\n'));console.log('LAYOUT '+JSON.stringify(out));
};

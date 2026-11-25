// node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-check.js            (1280x720)
// REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-check.js   (adds the no-animation check)
module.exports=async(a)=>{const E=s=>a.eval(s+';1'),V=async s=>JSON.parse(await a.eval('JSON.stringify((function(){'+s+'})())'));let bad=0;
 const ck=(ok,m)=>{console.log((ok?'PASS ':'FAIL ')+m);if(!ok)bad++;};
 const bars=`return Array.prototype.map.call(document.querySelectorAll(SELBOX+' .sb'),function(r){var t=getComputedStyle(r.querySelector('.sb-track')).backgroundImage,n=getComputedStyle(r.querySelector('.sb-name'),'::before');return {stat:r.getAttribute('data-stat'),pat:/data:image\\/svg/.test(t),ico:/data:image\\/svg/.test(n.webkitMaskImage||n.maskImage||'')};});`;
 await E(`localStorage.clear();__la.S.seenIntro=true;__la.S.unlocked=true;__la.selectDish(10);__la.show('adapt')`);await a.sleep(800);
 let b=await V(bars.replace('SELBOX',"'#statBars'"));ck(b.length===5&&b.every(x=>x.pat&&x.ico),`T1 forecast bars patterned+icon ${JSON.stringify(b)}`);
 await E(`__la.run();__la.S.playing=false;__la.seek(60)`);await a.sleep(1200);b=await V(bars.replace('SELBOX',"'#liveBars'"));ck(b.length===5&&b.every(x=>x.pat&&x.ico),'T1 live bars patterned+icon');
 ck(await V(`return Array.prototype.every.call(document.querySelectorAll('.legend .sw'),function(s){var c=getComputedStyle(s);return /data:image\\/svg/.test(c.webkitMaskImage||c.maskImage||'')})&&document.querySelectorAll('.legend .sw').length>=4`),'T1 legend items carry a shape icon');
 await E(`__la.selectDish(1)`);await a.sleep(400);await E(`if(__la.info().screen==='world')__la.worldContinue()`);await a.sleep(2400);
 ck(await V(`var l=document.getElementById('briefLetter');return !!l&&l.classList.contains('paper')&&/<i>/.test(document.getElementById('briefCover').innerHTML)&&document.getElementById('briefReport').innerText.length>60`),'T2a briefing is a paper letter with a specimen label');
 await E(`__la.show('adapt');__la.run();__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult()`);await a.sleep(1600);
 ck(await V(`var f=document.querySelector('#slideBars .sb.failed'),a=__la.info().autopsy,T=__la.S.run.T,p=document.querySelector('#lossSlide .pin');var cx=p?+p.getAttribute('cx'):-1;return !!document.getElementById('lossSlide')&&!!(f&&f.querySelector('.chalk'))&&Math.abs(cx-(10+580*a.from/T))<12&&document.getElementById('slideTag').textContent.trim().length>2&&!!document.getElementById('memoTipBtn')`),'T2b loss slide: chalk arrow on the failed bar, pin at autopsy.from, tag, memo kept');
 ck(await V(`var i=document.getElementById('slideImg');return !i||i.style.display==='none'||i.naturalWidth>0`),'T2b slide snapshot loaded or hidden');
 ck(await V(`var o=document.getElementById('overlay');return o.scrollHeight<=o.clientHeight+1`),'T2b loss overlay fits 1280x720 without scrolling');
 await E(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.selectDish(1);__la.show('adapt');__la.setBuild(LookAliveLevels.carry(2));__la.run();__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult()`);await a.sleep(1600);
 ck(await V(`var s=document.getElementById('stamp');return s.classList.contains('win')&&document.querySelectorAll('#winBars .sb').length===LookAliveLevels.dish(1).stats.length`),'T2b win card: green stamp + final bars');
 ck(await V(`var o=document.getElementById('overlay');return o.scrollHeight<=o.clientHeight+1`),'T2b win overlay fits 1280x720 without scrolling');
 if(process.env.REDUCED)ck(await V(`return document.getAnimations().length`)===0,'reduced motion: no running animations after the stamp');
 await E(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.show('list')`);await a.sleep(800);
 ck(await V(`var t=document.querySelectorAll('#dishList .dtile'),h=Array.prototype.map.call(t,function(x){return x.getBoundingClientRect().height});return t.length===10&&h.every(function(v){return Math.abs(v-h[0])<1})&&document.querySelectorAll('#dishList button[data-dish]').length===10`),'T2c ten wall tiles, equal heights, buttons kept');
 ck(await V(`return Array.prototype.every.call(document.querySelectorAll('#dishList .dtile:not(.locked) img'),function(i){return i.naturalWidth>=240})`),'T2c unlocked tiles show a thumbnail');
 console.log(bad?'U1 CHECK: '+bad+' FAIL':'U1 CHECK: all pass');};

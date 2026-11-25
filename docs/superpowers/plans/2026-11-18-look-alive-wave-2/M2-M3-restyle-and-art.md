# Look Alive wave 2: M2 (interface restyle, U1) and M3 (natives you can tell apart, honest card art)

Execution plan for cheaper implementers. Written 2026-11-18 against branch `look-alive-wave-2` at `f83a238` (working tree = the PR #17 code). Assumes PLAN.md sections 0 to 3 are accepted with full scope. Line numbers below were read today; **M1 runs before M2 and will move lines in `game.js`, `style.css`, `index.html`**, so every task also names a search anchor (function name, selector or literal string). Agents locate by anchor, not by number.

Lore rules that bind every string in this file: the aliens are a colony of tiny aliens; never state cow, mammal, stomach or city as fact; green cells are "guards"; no bacteria building anything; native names are real; English only.

---

## 0. Summary, order and cost

| Task | What | Files it may touch | Model | Cap (tool calls) | Est. |
|---|---|---|---|---|---|
| S0 | Dev scripts: `fingerprint.js`, `m3-measure.js`, `m3-compare.js`, `u1-shots.js`, `u1-check.js`, `contrast.js`, `thumbs.js` (all code is in this file) | `games/look-alive/dev/*` (new files only) | haiku | 20 | $0.5 |
| B0 | Baselines (orchestrator, no agent): fingerprint, M3 before-numbers, U1 before-shots | none | me | 6 | $0 |
| M3-R | Species shapes, ringed beacon, less milk at zoom 6, crisper tails and granules | `render-gl.js` only | sonnet | 45 | $5 to 7 |
| M3-A | Card art redraws (8 cards) | new `art-requests-cards-v2.json`, `art-src/cards-v2/`, `assets/cards/*.jpg` (8 files) | me (or haiku) | 15 | images about $0.75 |
| M2-T1 | Tier 1: tokens, panel chrome, patterned bars, line icons | `style.css` only | haiku | 20 | $0.5 |
| M2-T2a | Tier 2: paper briefing, specimen label, ink filters, locals key | `index.html`, `style.css`, `game.js` (`renderBrief`, `renderWorld`) | sonnet | 35 | $3 |
| M2-T2b | Tier 2: win card with green stamp and final bars; loss slide with chalk arrow, red pin, paper tag, dish snapshot | `game.js` (`showResult` and three new helpers), `style.css` | sonnet | 45 | $4 to 5 |
| M2-T2c | Tier 2: dish wall with frozen shader thumbnails | `game.js` (`renderList`), `style.css`, `assets/thumbs/` (generated) | sonnet | 40 | $3 to 4 |
| M2-REV | One regression review of M2 (UI only) | read only | sonnet | 30 | $2 |

**Parallel groups.**
- Group A (any time after S0 and B0): **M3-R** and **M3-A** in parallel with each other and with M1 or M2 (disjoint files). M3-R measures on its own fixed 480 px canvas, so M1's dish resize does not change its numbers.
- Group B (strictly sequential, after M1 is committed): **M2-T1 -> M2-T2a -> M2-T2b -> M2-T2c -> M2-REV**. All of them edit `style.css` and three edit `game.js`; the Edit tool rejects a file changed since the agent read it, so two agents on one file at once will collide. Do not parallelise these.
- `thumbs.js` output (`assets/thumbs/dish-N.jpg`) must be regenerated **after M3-R is accepted** (thumbnails show the species). If M2-T2c lands first, re-run the one command in 5.4 after M3-R.
- `NOTES.md` (renderer section, lines 67 to 91, and the U1 notes) is updated by the orchestrator at the end, never by an agent.

**Tier gates.** M2 tier 1 is judged alone (screenshots after M2-T1, before any tier 2 work). If tier 1 looks worse than before, stop and fix before tier 2. Each tier 2 task is judged on its own before the next starts.

---

## 1. The fingerprint guard and the other shared dev scripts (task S0)

All files are new, plain Node or CDP step files, under `games/look-alive/dev/`. Runner for step files: `node games/look-alive/dev/cdp-drive.js <steps.js>` (env `VW`, `VH`, `MOB=1`, `REDUCED=1`; prints `0 errors` or `ERRORS n` last). If M0 already built `fingerprint.js`, keep M0's version and skip 1.1.

### 1.1 `dev/fingerprint.js` (verified today: deterministic, 4.8 s, all 10 carried builds lose, all 10 winners win)
```js
// node games/look-alive/dev/fingerprint.js           writes dev/fingerprint.json
// node games/look-alive/dev/fingerprint.js --check   exit 1 and print the keys that differ
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const Sim=require('../sim.js'),Lv=require('../levels.js');
const WIN10={pace:3,slop:6,metabolism:'fermentation',parts:['acidproof'],reflex:{kind:'bio',id:'sporulate'}};
function feed(h,v){ if(v==null){h.update('n');return;}
  if(ArrayBuffer.isView(v)||Array.isArray(v)){for(let i=0;i<v.length;i++)feed(h,v[i]);return;}
  if(typeof v==='number'){h.update((Math.round(v*1e9)/1e9)+',');return;} if(typeof v==='function')return;
  if(typeof v==='object'){for(const k of Object.keys(v).sort()){h.update(k+':');feed(h,v[k]);}return;} h.update(String(v)+','); }
const out={};
for(let id=1;id<=10;id++){ const B={carried:Lv.carry(id),winner:id<10?Lv.carry(id+1):WIN10};
  for(const [k,b] of Object.entries(B)){ const run=Sim.play(Lv.PLANET,Lv.dish(id),JSON.parse(JSON.stringify(b)),{n:64,snapEvery:10});
    const h=crypto.createHash('sha1'); feed(h,run.H); feed(h,run.snaps); const v=Sim.verdict(run); feed(h,v);
    out[id+':'+k]=h.digest('hex').slice(0,16)+(v.win?' W':' L'); } }
const f=path.join(__dirname,'fingerprint.json');
if(process.argv.includes('--check')){ const old=JSON.parse(fs.readFileSync(f,'utf8')); const bad=Object.keys(out).filter(k=>old[k]!==out[k]);
  console.log(bad.length?'FINGERPRINT CHANGED: '+bad.join(', '):'fingerprint unchanged (20 runs)'); process.exit(bad.length?1:0); }
fs.writeFileSync(f,JSON.stringify(out,null,1)); console.log('wrote',f);
```

### 1.2 `dev/m3-measure.js` (standalone renderer on a fixed 480x480 canvas; independent of `game.js` layout; works on the old and the new renderer)
```js
// REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/m3-measure.js > out.txt   (one line "M3 {...}")
module.exports=async(a)=>{
 await a.eval(`(function(){var L=LookAliveLevels,Sim=LookAlive,R=LookAliveRender;
  function mach(b){return (b.parts||[]).concat([b.metabolism]).filter(function(x){var c=LookAliveCards.part(x);return c&&c.shelf==='machine'}).length+(b.reflex&&b.reflex.kind==='machine'?1:0);}
  window.__m3={
   mk:function(id){var d=L.dish(id),b=L.carry(id),run=Sim.play(L.PLANET,d,JSON.parse(JSON.stringify(b)),{n:64,snapEvery:10});
    var host=document.createElement('div');host.style.cssText='position:fixed;left:0;top:0;width:480px;height:480px;z-index:99;background:#000';
    var c=document.createElement('canvas');c.style.cssText='width:480px;height:480px;display:block';host.appendChild(c);document.body.appendChild(host);
    var r=R.create(c,{host:host,reduced:true,tier:'laptop',noAuto:true});r.setRun(run,d,b,{slots:Sim.toSlots(b),machine:mach(b)});r.visible=true;r._host=host;return r;},
   kill:function(r){r.destroy();r._host.remove();},
   view:function(r,z,cx,cy){r.view.zoom=z;r.view.cx=cx||0;r.view.cy=cy||0;r.clampView();},
   grab:function(r,t){r.setTick(t);r.frame(performance.now());var gl=r.eng.gl,W=r.eng.W,H=r.eng.H,px=new Uint8Array(W*H*4);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,px);
    var pink=0,vio=0,Ls=[],i,x,y,z;for(i=0;i<px.length;i+=4){x=px[i];y=px[i+1];z=px[i+2];
     if(x>60&&x>z*1.25&&z>y*0.95)pink++;else if(z>60&&z>x*1.12&&x>y*1.02)vio++;Ls.push(.2126*x+.7152*y+.0722*z);}
    Ls.sort(function(p,q){return p-q});var lo=Math.floor(Ls.length*.3),hi=Math.floor(Ls.length*.7),s=0;for(i=lo;i<hi;i++)s+=Ls[i];
    return {pink:pink,vio:vio,ratio:+(pink/Math.max(1,vio)).toFixed(4),veil:+(s/Math.max(1,hi-lo)).toFixed(3)};},
   ftime:function(r,t,n){r.setTick(t);var gl=r.eng.gl,t0=performance.now(),i;for(i=0;i<n;i++){r.frame(t0+i*16.7);gl.finish();}return +((performance.now()-t0)/n).toFixed(3);}
  };return 1;})()`);
 const J=async(js)=>JSON.parse(await a.eval(`JSON.stringify((function(){var M=__m3,T=LookAliveRender.TUNE;${js}})())`));
 const o={};
 o.ratio=await J(`var o={};[2,6].forEach(function(id){var r=M.mk(id);T.beacon=0;M.view(r,1);[20,60].forEach(function(t){o[id+':'+t]=M.grab(r,t);});M.kill(r);});T.beacon=1;return o;`);
 o.beacon=await J(`var r=M.mk(2),o={};M.view(r,1);T.beacon=1;o.on1=M.grab(r,20).pink;T.beacon=0;o.off1=M.grab(r,20).pink;M.view(r,3);T.beacon=1;o.on3=M.grab(r,20).pink;T.beacon=0;o.off3=M.grab(r,20).pink;T.beacon=1;M.kill(r);return o;`);
 o.veil=await J(`var r=M.mk(2),c=r.colonyAt(45);M.view(r,6,c[0],c[1]);var g=M.grab(r,45);M.kill(r);return g;`);
 o.natOnly=await J(`var r=M.mk(1);M.view(r,1);var g=M.grab(r,290);M.kill(r);return g;`);
 o.shapes=await J(`var r=M.mk(2);M.view(r,3);M.grab(r,40);var s=r.stats();M.kill(r);return {shapeCounts:s.shapeCounts||null,drawn:s.drawn};`);
 o.sig=await J(`var o={};[2,6,8].forEach(function(id){[40,120].forEach(function(t){var r=M.mk(id),A=r.signature(t);r.setTick(150);M.view(r,3,.3,-.2);r.frame(performance.now());var B=r.signature(t);M.kill(r);var r2=M.mk(id),C=r2.signature(t);M.kill(r2);o[id+':'+t]={a:A.hash,n:A.count,same:A.hash===B.hash&&B.hash===C.hash&&A.count===C.count};});});return o;`);
 o.ftime=await J(`var r=M.mk(2),o={};M.view(r,1);M.ftime(r,60,20);o.z1=M.ftime(r,60,120);M.view(r,3);o.z3=M.ftime(r,60,120);M.kill(r);return o;`);
 console.log('M3 '+JSON.stringify(o));
};
```

### 1.3 `dev/m3-compare.js`
```js
// node games/look-alive/dev/m3-compare.js before.txt after.txt     exit 1 on any FAIL
const fs=require('fs');const rd=f=>JSON.parse(fs.readFileSync(f,'utf8').split('\n').find(l=>l.startsWith('M3 ')).slice(3));
const A=rd(process.argv[2]),B=rd(process.argv[3]);let bad=0;const ck=(ok,m)=>{console.log((ok?'PASS ':'FAIL ')+m);if(!ok)bad++;};
for(const k of Object.keys(A.ratio)){const r=B.ratio[k].ratio/Math.max(1e-6,A.ratio[k].ratio);ck(Math.abs(r-1)<=0.10,`ratio ${k} after/before ${r.toFixed(3)}`);}
ck(B.beacon.on1-B.beacon.off1>=60,`beacon at zoom 1 adds ${B.beacon.on1-B.beacon.off1} pink px (>=60)`);
ck(Math.abs(B.beacon.on3-B.beacon.off3)<=5,`beacon at zoom 3 adds ${B.beacon.on3-B.beacon.off3} px (<=5)`);
if(A.veil.veil<6)console.log('NOTE veil baseline under 6: judge zoom 6 by eye'); else ck(B.veil.veil<=0.80*A.veil.veil,`zoom 6 veil ${A.veil.veil} -> ${B.veil.veil} (<=80%)`);
ck(B.veil.vio>=0.6*A.veil.vio,`zoom 6 violet px ${A.veil.vio} -> ${B.veil.vio} (>=60%)`);
ck(B.natOnly.pink<=A.natOnly.pink+20,`natives-only frame pink ${A.natOnly.pink} -> ${B.natOnly.pink}`);
const s=B.shapes.shapeCounts||{},t=(s.lacto||0)+(s.strep||0)+(s.helico||0);
ck(t>=200&&['lacto','strep','helico'].every(k=>(s[k]||0)/t>=0.15),`shapes at zoom 3 ${JSON.stringify(s)} (each >=15%)`);
for(const k of Object.keys(B.sig))ck(B.sig[k].same,`glSig ${k} stable ${B.sig[k].a} n=${B.sig[k].n}`);
for(const z of ['z1','z3'])ck(B.ftime[z]<=A.ftime[z]*1.15+0.3,`frame ${z} ${A.ftime[z]} -> ${B.ftime[z]} ms (<=+15%)`);
process.exit(bad?1:0);
```

### 1.4 `dev/u1-shots.js` (six before/after screens at the viewport the driver sets)
```js
// OUT=/path/prefix- node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-shots.js
module.exports=async(a)=>{const P=process.env.OUT||'u1-';const E=s=>a.eval(s+';1');
 await E(`localStorage.clear();__la.S.seenIntro=true;__la.S.unlocked=true;__la.show('list')`);await a.sleep(700);await a.shot(P+'list.png');
 await E(`__la.selectDish(1);if(__la.info().screen==='world')__la.worldContinue()`);await a.sleep(2400);await a.shot(P+'brief.png');
 await E(`__la.selectDish(4);__la.show('adapt')`);await a.sleep(800);await a.shot(P+'adapt.png');
 await E(`__la.selectDish(3);__la.show('adapt');__la.run();__la.S.playing=false;__la.seek(80)`);await a.sleep(2000);await a.shot(P+'run.png');
 await E(`__la.selectDish(1);__la.show('adapt');__la.run();__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult()`);await a.sleep(1500);await a.shot(P+'loss.png');
 await E(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.selectDish(1);__la.show('adapt');__la.setBuild(LookAliveLevels.carry(2));__la.run();__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult()`);await a.sleep(1500);await a.shot(P+'win.png');};
```

### 1.5 `dev/contrast.js` (WCAG ratio of text against its composited background colour; background images are ignored on purpose, so paper texture must stay faint)
```js
// node games/look-alive/dev/cdp-drive.js games/look-alive/dev/contrast.js     prints "CONTRAST {...}"; pass = fails is empty
module.exports=async(a)=>{
 const probe=`(function(){var SEL='#screen-list *, #screen-brief *, #screen-world *, #screen-run .panel *, #overlay *';
  function rgb(s){var m=s&&s.match(/rgba?\\(([^)]+)\\)/);if(!m)return null;var p=m[1].split(',').map(parseFloat);return {r:p[0],g:p[1],b:p[2],a:p.length>3?p[3]:1};}
  function lum(c){function f(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)}return .2126*f(c.r)+.7152*f(c.g)+.0722*f(c.b);}
  function bgOf(e){var st=[];for(var n=e;n&&n.nodeType===1;n=n.parentElement){var c=rgb(getComputedStyle(n).backgroundColor);if(c&&c.a>0){st.push(c);if(c.a>=1)break;}}
   var o={r:4,g:5,b:10};for(var i=st.length-1;i>=0;i--){var c=st[i];o={r:c.r*c.a+o.r*(1-c.a),g:c.g*c.a+o.g*(1-c.a),b:c.b*c.a+o.b*(1-c.a)};}return o;}
  var fails=[],n=0;document.querySelectorAll(SEL).forEach(function(e){
   if(e.closest('.locked,[disabled],[hidden],[aria-hidden="true"]'))return; var r=e.getBoundingClientRect();if(!r.width||!r.height)return;
   if(!Array.prototype.some.call(e.childNodes,function(x){return x.nodeType===3&&x.textContent.trim()}))return;
   var cs=getComputedStyle(e),fg=rgb(cs.color),bg=bgOf(e);if(!fg||cs.visibility==='hidden')return;
   if(fg.a<1)fg={r:fg.r*fg.a+bg.r*(1-fg.a),g:fg.g*fg.a+bg.g*(1-fg.a),b:fg.b*fg.a+bg.b*(1-fg.a)};
   var L1=lum(fg),L2=lum(bg),cr=(Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05),sz=parseFloat(cs.fontSize),large=sz>=24||(+cs.fontWeight>=600&&sz>=18.66),need=large?3:4.5;n++;
   if(cr<need)fails.push({cls:String(e.className).slice(0,40)||e.tagName,text:e.textContent.trim().slice(0,30),cr:+cr.toFixed(2),need:need});});
  return JSON.stringify({n:n,fails:fails});})()`;
 const E=s=>a.eval(s+';1'),res={};
 await E(`localStorage.clear();__la.S.seenIntro=true;__la.S.unlocked=true;__la.show('list')`);await a.sleep(600);res.list=JSON.parse(await a.eval(probe));
 await E(`__la.selectDish(1);if(__la.info().screen==='world'){}`);await a.sleep(300);res.world=JSON.parse(await a.eval(probe));
 await E(`if(__la.info().screen==='world')__la.worldContinue()`);await a.sleep(2400);res.brief=JSON.parse(await a.eval(probe));
 await E(`__la.selectDish(6);`);await a.sleep(2400);res.brief6=JSON.parse(await a.eval(probe));
 await E(`__la.selectDish(1);__la.show('adapt');__la.run();__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult()`);await a.sleep(1500);res.loss=JSON.parse(await a.eval(probe));
 await E(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.selectDish(1);__la.show('adapt');__la.setBuild(LookAliveLevels.carry(2));__la.run();__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult()`);await a.sleep(1500);res.win=JSON.parse(await a.eval(probe));
 const fails=[].concat(...Object.entries(res).map(([k,v])=>v.fails.map(f=>Object.assign({screen:k},f))));
 console.log('CONTRAST '+JSON.stringify({checked:Object.fromEntries(Object.entries(res).map(([k,v])=>[k,v.n])),fails}));};
```

### 1.6 `dev/u1-check.js` (the M2 acceptance in one run; each line PASS or FAIL)
```js
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
```

### 1.7 `dev/thumbs.js` (frozen dish-wall thumbnails rendered by the real shader; zero image cost)
```js
// REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/thumbs.js    writes assets/thumbs/dish-1.jpg .. dish-10.jpg
const fs=require('fs'),path=require('path');
module.exports=async(a)=>{const out=path.resolve(__dirname,'../assets/thumbs');fs.mkdirSync(out,{recursive:true});
 for(let id=1;id<=10;id++){
  const url=await a.eval(`(function(){var L=LookAliveLevels,Sim=LookAlive,d=L.dish(${id}),b=L.carry(${id});
   var run=Sim.play(L.PLANET,d,JSON.parse(JSON.stringify(b)),{n:64,snapEvery:10});run.v=Sim.verdict(run);var au=run.v.win?null:Sim.autopsy(run);
   var t=au?Math.min(run.T,(au.from||0)+6):Math.round(run.T*0.4);
   var mc=(b.parts||[]).concat([b.metabolism]).filter(function(x){var c=LookAliveCards.part(x);return c&&c.shelf==='machine'}).length+(b.reflex&&b.reflex.kind==='machine'?1:0);
   var host=document.createElement('div');host.style.cssText='position:fixed;left:0;top:0;width:480px;height:480px;z-index:99';
   var c=document.createElement('canvas');c.style.cssText='width:480px;height:480px;display:block';host.appendChild(c);document.body.appendChild(host);
   var r=LookAliveRender.create(c,{host:host,reduced:true,tier:'laptop',noAuto:true});if(!r.supported)return 'ERR '+r.err;
   r.setRun(run,d,b,{slots:Sim.toSlots(b),machine:mc});r.visible=true;r.setTick(t);
   var cc=r.colonyAt(t);r.view.zoom=1.25;r.view.cx=cc[0]*0.25;r.view.cy=cc[1]*0.25;r.clampView();
   for(var i=0;i<3;i++)r.frame(performance.now()+i*16);var u=c.toDataURL('image/jpeg',0.82);r.destroy();host.remove();return u;})()`);
  if(!url||!String(url).startsWith('data:image/jpeg')){console.log('thumb',id,'FAILED',String(url).slice(0,80));continue;}
  fs.writeFileSync(path.join(out,'dish-'+id+'.jpg'),Buffer.from(url.split(',')[1],'base64'));console.log('thumb',id,'ok');}};
```
Thumbnail check (node one-liner, run by the orchestrator):
```
node -e "const fs=require('fs'),c=require('crypto'),d='games/look-alive/assets/thumbs/';const h=[...Array(10)].map((_,i)=>{const b=fs.readFileSync(d+'dish-'+(i+1)+'.jpg');if(b.length<8000)throw 'small '+(i+1);return c.createHash('sha1').update(b).digest('hex')});console.log(new Set(h).size===10?'PASS 10 distinct thumbnails':'FAIL duplicates')"
```

### B0. Baselines (orchestrator, before M3-R and M2 dispatch)
```
node games/look-alive/dev/fingerprint.js                         # writes dev/fingerprint.json (commit it)
REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/m3-measure.js > $SCRATCH/m3-before.txt
OUT=$SCRATCH/u1-before- node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-shots.js    # after M1 is committed
node games/look-alive/dev/cdp-drive.js games/look-alive/dev/contrast.js > $SCRATCH/contrast-before.txt
```
`contrast-before` will already list failures (for example `.dhint`, `.dthin` at alpha .55 to .6). Those are not M2's to fix unless they sit on new surfaces; M2 must not add new failures.

**S0 dispatch brief (haiku, cap 20).**
> Create seven new files under `games/look-alive/dev/`: `fingerprint.js`, `m3-measure.js`, `m3-compare.js`, `u1-shots.js`, `contrast.js`, `u1-check.js`, `thumbs.js`. Their full code is in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M2-M3-restyle-and-art.md` sections 1.1 to 1.7: copy it exactly, keep the header comment of each. Do not edit any other file. Do not touch `sim.js`, `levels.js`, `cards.js`, `game.js`, `render-gl.js`, `style.css`, `index.html`. Do not run git. Then run only: `node games/look-alive/dev/fingerprint.js` twice (the second time with `--check`; it must print "fingerprint unchanged"), and `REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/m3-measure.js` once (must print a line starting `M3 {` and `0 errors`). Report the two outputs verbatim. If a script throws, fix only that script and say what you changed. Edit, do not rewrite. Report honestly anything that did not run.

---

## 2. M3-R: natives you can tell apart (renderer only)

### 2.1 How identity works today (verified in `render-gl.js`)
- `buildCands()` (lines 623 to 687): for each of the 64x64 grid cells `c` and each species (`spc` 0 natives, 1 robots), `species()` (636 to 657) seeds `R = mul(hash32(c, spc, 17))` and draws `kk` candidates; per candidate it pulls a fixed sequence of `R()` values (`px, py, acc, h1, h2, h3, th, ph, a, sz, t1, dp(4 calls), hl, sd, h4`) **before** the mask test, so a rejected candidate still consumes its numbers. Natives: depth `0.5 +- 0.12`, 25% cocci (`hl < 0.25` -> `hl = sd*0.25`), else rods `hl = 0.8 + 1.5*sd`, 30% tails.
- **Rule 1: never add, remove or reorder an `R()` call in `species()`.** That would shift every later candidate in the same cell and change which individuals exist. New per-individual values must come from an independent hash of `(c, q)`, where `q` is the loop index of the candidate slot in its cell (it counts rejected slots too, so it is stable).
- Thinning: `pack()` (822 to 933) skips natives with `S.g4[j] > thinN` (843 to 849). `g4` is untouched, so the thinned subset is unchanged.
- `signature(t)` (936 to 942) hashes `inst[0 .. n*16)` packed with no jitter and no culling (`pack(t, 0, 1, true)`; `minN = minPxN*px/1` is constant). Any new per-instance value written into `inst` changes the hash **value** (it was `51b76eea` for dish 2 tick 40 in NOTES.md) but must stay **stable** across scrub, zoom, pan, replay. The orchestrator records the new value in NOTES.md.
- The simulation never reads the renderer: species are visual labels on the same candidates, so the native **count** cannot move. What must be normalised is drawn **area** (chains are bigger), which is what keeps the pink to violet pixel ratio.

### 2.2 Instance layout (16 floats; `aA, aB, aC, aD` in `VS_CELL`)
`[0 x, 1 y, 2 r, 3 ang | 4 species, 5 depth, 6 phase, 7 hl | 8 pinch, 9 dissolve, 10 seam, 11 tail | 12 fade, 13 engulf, 14 dormant, 15 free]`. For natives, slots 8, 9, 10, 13, 14, 15 are 0 today and slot 10 (`seam`) is read only inside `if(rob)` in `FS_CELL`. New use, natives only: **slot 15 = form** (1 Lactobacillus, 2 Streptococcus, 3 Helicobacter pylori; 0 = old rod, kept for robots and the portrait), **slot 10 = segments** (chain length), slot 7 = species half-length, slot 11 = tail flag.

### 2.3 TUNE keys to add (inside `var TUNE = {` at lines 11 to 28, after `slowMs: 30, slowFrames: 50`)
```js
    // native species (visual only; the sim has one native field). [Lactobacillus, Streptococcus, Helicobacter pylori] by dish id; 0 = default
    speciesMix: { 0: [0.45, 0.35, 0.20], 1: [0.50, 0.30, 0.20], 6: [0.36, 0.30, 0.34], 9: [0.40, 0.40, 0.20], 10: [0.34, 0.33, 0.33] },
    lacHl: [1.4, 1.2], lacSeg2: 0.35, lacR: 0.85, chainGap: 0.16,     // long rods, 35% in chains of two; gap between links (x radius)
    strSegs: [2, 2, 3, 4], strPitch: 0.92, strR: 0.95,               // cocci: half pairs, the rest chains of 3 or 4; centre spacing (x diameter)
    helHl: [1.6, 0.8], helR: 0.8, helAmp: 0.55, helWaves: 1.6, helTuft: 0.85,   // curved spiral rods; 85% carry a tuft of 3 tails at one end
    spAreaK: 1.0,                                                    // one-shot fudge if the pink:violet ratio check misses
    granS: 0.85, tailW: 0.75,                                        // crisper native granules and tails
    bokehCut: 0.55, bokehZ0: 2.5, bokehZ1: 6,                        // less milky veil of out-of-focus bokeh discs when zoomed in
    beacon: 1, beaconR: 0.09, beaconZ0: 1.15, beaconZ1: 1.8          // the ringed pink disc on your colony at zoom 1 (mock-up 04); 0 = off
```

### 2.4 Code changes, in file order

**(a) `VS_CELL` line 118** (anchor `float ex=hpx+rpx+tail+pad, ey=`): give the helix and the tuft room.
```glsl
'  float ex=hpx+rpx+tail+pad, ey=rpx+pad+(aC.w>.5?rpx*(aD.w>2.5?1.5:.75):0.)+(aB.x<.5?rpx*(aD.w>2.5?1.15:.55):0.);',
```

**(b) `FS_CELL` uniforms, line 131** (anchor `uniform float uTime,uGranK`): append a second line
```glsl
'uniform float uHelAmp,uHelWaves,uTailW,uChainGap,uStrPitch,uGranS,uBokK;',
```

**(c) after line 149** (anchor `float d; vec2 g; vec2 wp=vP;`): add
```glsl
'  float h2f=h2, fm=vD.w, nsg=max(vC.z,1.), phs=vPh;',
```

**(d) native branch, after the `wob=1.+nv*(...)` line 162 and still inside `if(sp<.5){`**: add the three species. Order matters: the existing bend uses the full length first, then a chain picks its own link.
```glsl
'      if(fm>2.5){ wp.y-=rr*uHelAmp*sin(u1*3.14159*uHelWaves+vPh*6.283); }',
'      else if(fm>1.5){ float P2=2.*rr*uStrPitch, hf=(nsg-1.)*.5*P2; float k=clamp(floor((vP.x+hf)/P2+.5),0.,nsg-1.); wp.x=vP.x+hf-k*P2; h2=0.; phs=vPh+k*.173; wob=1.+nv*.05*sin(atan(wp.y,wp.x)*3.+phs*20.); }',
'      else if(fm>.5&&nsg>1.5){ float gg=rr*uChainGap, P1=(2.*(h2+rr)+gg)/nsg; float k=clamp(floor((vP.x+h2+rr+gg*.5)/P1),0.,nsg-1.); wp.x=vP.x+h2+rr+gg*.5-(k+.5)*P1; h2=max(P1*.5-gg*.5-rr,0.); phs=vPh+k*.173; }',
```
Geometry check (r units): Lactobacillus chain of `s` links with link half-length `hs` and gap `g` has `hl = s*(hs+1+g/2) - g/2 - 1`; the shader recovers pitch `P1 = (2(h2+r)+g)/s` and link half-length `P1/2 - g/2 - r = hs`. Streptococcus: `hl = (s-1)*strPitch`, centres at `-hf + k*P2`.

**(e) low-detail path, line 174** (anchor `float cn=exp(-sq(vP.x/(h2*.5+rr*.7))-sq(vP.y/(rr*.55)))`): replace `vP.x` and `vP.y` there with `wp.x` and `wp.y`.

**(f) granule loop, lines 185 to 191** (anchor `for(int i=0;i<6;i++)`): replace `vPh` with `phs` (three places), `vec2 dd=vP-gp;` with `vec2 dd=wp-gp;`, and `float gs=rr*(.09+.12*h11(...))+.5;` with `float gs=(rr*(.09+.12*h11(phs*3.3+fi*5.))+.5)*uGranS;`. Robots do not enter this loop (`!rob||uPort`), and for the portrait `phs==vPh`, `wp==vP`, `uGranS==1`, so both are unchanged.

**(g) bokeh, lines 203 and 207**: `float Rd=rr+h2*.6+bl*.55;` -> `rr+h2f*.6+bl*.55`; in `areaK` replace `(rr+h2)` with `(rr+h2f)`.

**(h) native body, lines 216 to 222** (inside `if(sp<.5){ float nd=...`): replace every `vPh` with `phs`; multiply `gz` by `uGranS` (`float gz=(rr*(.12+.10*h11(phs*4.7+fi*3.7))+.4)*uGranS;`).

**(i) central streak, line 228** (anchor `col*fill*exp(-sq(vP.y/(rr*.55)))*sq(sq(clamp(1.-abs(vP.x)/(h2+rr*.9)`): use `wp.y` and `wp.x` (h2 is per link there, so each link gets its own streak).

**(j) line 262**: `vec3 bok=col*(fillB*.30+ringB*.55)*areaK*.42;` -> `...*areaK*.42*uBokK;`

**(k) tail block, lines 263 to 273**: replace the whole `if(tailF>.5){ ... }` with (robots keep exactly one tail of the old width):
```glsl
'  if(tailF>.5){',
'    float nt=(sp<.5&&fm>2.5)?3.:1.;',
'    for(int k=0;k<3;k++){ float fk=float(k); if(fk>=nt) break;',
'      float ao=(fk-(nt-1.)*.5)*.30; vec2 pv=vP+vec2(h2f+rr*.78,0.); pv=vec2(cos(ao)*pv.x+sin(ao)*pv.y,-sin(ao)*pv.x+cos(ao)*pv.y);',
'      float s0=-pv.x; float Lt=rr*4.;',
'      if(s0>0.&&s0<Lt){',
'        float u2=s0/Lt; float amp=rr*.45*(.25+u2)*(nt>1.?.7:1.);',
'        float yc=amp*sin(s0/(rr*1.15)-uTime*5.5+vPh*6.28+fk*1.7);',
'        float tw=(max(.55,.10*rr)*(1.-.45*u2)+bl*.6)*(rob?1.:uTailW)*(nt>1.?.75:1.);',
'        float tv=exp(-sq((pv.y-yc)/tw))*(1.-u2*u2)*smoothstep(2.5,6.,rr)*att;',
'        vec3 tc=rob?C_AMB:mix(col,vec3(1.),.35); s+=tc*tv*(nt>1.?.6:.85);',
'      }',
'    }',
'  }',
```

**(l) `FS_SPECK`, line 346** (anchor `if(vKind>1.5){ I=ring*.9`): put the beacon branch first, so the chain becomes `if(vKind>2.5){...} else if(vKind>1.5){...} else if(vB<1.5){...} else {...}`:
```glsl
'  if(vKind>2.5){ float rw=max(.9,vR*.09); float rg=exp(-((d+vR*.14)*(d+vR*.14))/(rw*rw)); float core=exp(-dot(vP,vP)/(vR*vR*.06+1.)); float halo=exp(-max(d,0.)/(vR*.45+1.)); c=vec3(1.,.42,.58); I=rg*1.15+core*.85+halo*.25; }',
'  else if(vKind>1.5){ ...existing... }',
```
`VS_SPECK` already treats any kind above 1.5 as world coordinates; with depth `TUNE.focus` the blur is 0.

**(m) `Engine.render`, lines 505 to 508** (anchor `this.U(this.pCell, Object.assign({}, common, {`): add to the uniform object
```js
uHelAmp: sp.helAmp, uHelWaves: sp.helWaves, uTailW: sp.tailW, uChainGap: sp.gap, uStrPitch: sp.strPitch, uGranS: sp.granS, uBokK: sp.bokK
```
with `var sp = P.sp || SP0;` at the top of `render`, and next to `buildFlags` (line 547): `var SP0 = { helAmp: 0, helWaves: 0, tailW: 1, gap: 0.16, strPitch: 0.92, granS: 1, bokK: 1 };` (the portrait passes no `sp`, so it is unchanged).

**(n) `species()` inside `buildCands`, lines 637 to 650**: add `su: new Float32Array(cap), sv: new Float32Array(cap), sw: new Float32Array(cap),` to the object `o`, and after `o.g4[i2] = h4;` add
```js
o.su[i2] = hash32(c, q, 7001) / 4294967296; o.sv[i2] = hash32(c, q, 7002) / 4294967296; o.sw[i2] = hash32(c, q, 7003) / 4294967296;
```
At the end of `buildCands` (after `this.tickKey = -1;`, line 686) add `this.assignSpecies();`. In `setRun` (after `this.bf = buildFlags(...)`, line 692) add `this.assignSpecies();` (the dish id is known there; `buildCands` runs first from the constructor with dish id 0 and again on every tier change).

**(o) new method after `buildCands`:**
```js
  // Visual species by identity hash: the same individual is always the same species, across scrub, zoom, tier and replay.
  // Radii are scaled so the mean drawn area equals the old mean (chains are longer), so the on-screen pink:violet balance holds.
  Dish.prototype.assignSpecies = function () {
    var S = this.nat, n = S.n, id = this.D ? this.D.id : 0, mix = TUNE.speciesMix[id] || TUNE.speciesMix[0], j, a0 = 0, a1 = 0, PI = Math.PI;
    var F = new Uint8Array(n), G = new Uint8Array(n), HL = new Float32Array(n), RK = new Float32Array(n), TL = new Uint8Array(n);
    for (j = 0; j < n; j++) {
      var u = S.su[j], v = S.sv[j], w = S.sw[j], r0 = 0.8 + 0.5 * S.sz[j], r2 = r0 * r0, an;
      a0 += r2 * (PI + 4 * S.hl[j]);
      if (u < mix[0]) {                                   // Lactobacillus
        var segs = w < TUNE.lacSeg2 ? 2 : 1, hs = TUNE.lacHl[0] + TUNE.lacHl[1] * v, g = TUNE.chainGap;
        F[j] = 1; G[j] = segs; RK[j] = TUNE.lacR; HL[j] = segs * (hs + 1 + g / 2) - g / 2 - 1; TL[j] = 0; an = segs * (PI + 4 * hs);
      } else if (u < mix[0] + mix[1]) {                   // Streptococcus
        var sg = TUNE.strSegs[Math.min(TUNE.strSegs.length - 1, (v * TUNE.strSegs.length) | 0)];
        F[j] = 2; G[j] = sg; RK[j] = TUNE.strR; HL[j] = (sg - 1) * TUNE.strPitch; TL[j] = 0; an = sg * PI;
      } else {                                            // Helicobacter pylori
        F[j] = 3; G[j] = 1; RK[j] = TUNE.helR; HL[j] = TUNE.helHl[0] + TUNE.helHl[1] * v; TL[j] = w < TUNE.helTuft ? 1 : 0; an = PI + 4 * HL[j];
      }
      a1 += r2 * RK[j] * RK[j] * an;
    }
    var k = Math.sqrt(a0 / Math.max(1e-6, a1)) * TUNE.spAreaK;
    for (j = 0; j < n; j++) RK[j] *= k;
    this.natForm = F; this.natSeg = G; this.natHl = HL; this.natRK = RK; this.natTail = TL; this.spK = k;
  };
  Dish.prototype.colonyAtSmooth = function (t) {   // like colonyAt, interpolated between snapshots so the beacon glides
    var n = this.agg.length, x = clamp(t / 10, 0, n - 1), i = Math.floor(x), j = Math.min(n - 1, i + 1), f = x - i, a = this.agg[i], b = this.agg[j];
    return [a.cx + (b.cx - a.cx) * f, a.cy + (b.cy - a.cy) * f];
  };
```

**(p) `pack()` natives loop, lines 851 to 864.** Before the loop: `if (!noCull) this.shapeCounts = { lacto: 0, strep: 0, helico: 0 };`. In the loop: multiply the radius (`inst[o + 2] = ...`) by `this.natRK[j]`; set `inst[o + 7] = this.natHl[j]; inst[o + 10] = this.natSeg[j]; inst[o + 11] = this.natTail[j]; inst[o + 15] = this.natForm[j];` (they replace the `S.hl[j]`, `0`, `S.tail[j]`, `0` written today); after `n++` add `if (!noCull) { var fmj = this.natForm[j]; if (fmj === 1) this.shapeCounts.lacto++; else if (fmj === 2) this.shapeCounts.strep++; else this.shapeCounts.helico++; }`. Leave the budding (`bud`) code and `S.g4` thinning as they are.

**(q) beacon in `pack()`**, after the food-speck loop (line 925) and before the field loop. Only when `!noCull`, so `signature()` (which reports `specks`) is unchanged:
```js
    this.beaconA = 0;
    if (!noCull && TUNE.beacon > 0 && ns < scap) {
      var lg = this.lag[ti] + (this.lag[tj] - this.lag[ti]) * tf, l0 = Math.max(1e-6, this.lag[0]);
      var bz = TUNE.beacon * (1 - smooth(TUNE.beaconZ0, TUNE.beaconZ1, zz)) * (1 - smooth(0.3, 0.6, cntR / Math.max(1, cntN + cntR))) * smooth(0.02, 0.12, lg / l0);
      if (bz > 0.02) { var cb = this.colonyAtSmooth(t), kb = ns * 8;
        spk[kb] = cb[0]; spk[kb + 1] = cb[1]; spk[kb + 2] = TUNE.beaconR * clamp(Math.sqrt(lg / l0), 0.45, 2.0); spk[kb + 3] = TUNE.focus;
        spk[kb + 4] = 3; spk[kb + 5] = 0; spk[kb + 6] = 0; spk[kb + 7] = bz; ns++; this.beaconA = bz; }
    }
```
Ref 04 reading: at zoom 1 your colony reads as one bright pink disc with a ring and a halo; it fades out between zoom 1.15 and 1.8, when crowded (share of drawn robots 30% to 60%), and as the colony dies. It is your own instrument's marker, not a tell to the guards.

**(r) `frame()`, the `eng.render({...})` call at 963 to 968**: add
```js
sp: { helAmp: TUNE.helAmp, helWaves: TUNE.helWaves, tailW: TUNE.tailW, gap: TUNE.chainGap, strPitch: TUNE.strPitch, granS: TUNE.granS, bokK: 1 - TUNE.bokehCut * smooth(TUNE.bokehZ0, TUNE.bokehZ1, zoom) },
```

**(s) `stats()`, line 999**: add `shapeCounts: this.shapeCounts || null, beacon: +(this.beaconA || 0).toFixed(2), spK: +(this.spK || 0).toFixed(3),`.

### 2.5 The milky look at zoom 6 (PLAN.md has the cause wrong)
PLAN says "lowering the cloud pass". The cloud pass is on only while `cellPx = 0.0105*ss*1.45*2.5*sc < 8`, with `ss = 0.765` at 20k cells, so `cellPx = 0.029*sc`; at zoom 6 on any dish wider than about 50 px it is off. The veil in the old zoom-6 captures (`art-src/tmp/a5_d2_z6.png`) is the **additive bokeh discs of out-of-focus natives** (`mB` path, `bok`), whose blur grows with `sqrt(zoom)`. Fix: `uBokK` (2.4 j and r). Measured by `veil` in 1.2.

### 2.6 Acceptance for M3-R (all runnable)
```
node games/look-alive/dev/fingerprint.js --check                                    # "fingerprint unchanged"
REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/m3-measure.js > $SCRATCH/m3-after.txt
node games/look-alive/dev/m3-compare.js $SCRATCH/m3-before.txt $SCRATCH/m3-after.txt   # every line PASS
node tools/pages-check.js games/look-alive && node tools/cdp-smoke.js games/look-alive/index.html
node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js | tail -2    # ten rows, carriedWins false, uiWinnerWins true; "0 errors"
```
Thresholds (in `m3-compare.js`): pink:violet ratio within 10% at dishes 2 and 6, ticks 20 and 60, zoom 1, beacon off; beacon adds at least 60 pink px at zoom 1 and at most 5 at zoom 3; zoom-6 veil at most 80% of before, violet pixels at least 60% of before; natives-only frame (dish 1 tick 290) gains at most 20 pink px; at zoom 3 dish 2 tick 40 at least 200 natives drawn and each species at least 15%; `signature` identical across scrub, zoom, pan and a fresh run at dishes 2, 6, 8, ticks 40 and 120; frame time at most +15% (+0.3 ms) at zoom 1 and 3. If only the ratio fails, the agent may change `TUNE.spAreaK` once (within 0.85 to 1.15) and re-measure; no other tuning loops.

**By eye (orchestrator):** a 2x3 sheet at 1280x720 of dish 2 tick 40 at zoom 1, 3 and 8, dish 6 tick 60 at zoom 3, dish 8 tick 120 at zoom 6 (before and after). Check: three shapes are told apart at zoom 3 without a legend (beaded chains, long two-link rods, wavy rods with a tail tuft); no native looks pink; robots unchanged; the beacon sits on the colony and is gone by zoom 2; zoom 6 has black between cells again.

### 2.7 Risks (M3-R)
- **SDF of a bent capsule** is not a true distance; at large `helAmp` the rim thickens on the bends. Keep `helAmp` at or under 0.6.
- **Long chains at zoom 1** are clamped by `minPxN`, then shrunk by `natRK`; if natives at zoom 1 become sub-pixel mush, the ratio test passes but legibility drops. Judge by eye at zoom 1.
- **Shader compile failure** shows as the 2D fallback note, not an exception. `m3-measure` prints `ERR` from `create()`; `cdp-smoke` alone will not catch it.
- **Thumbnails, NOTES hash and `u1` screenshots** all go stale after M3-R; regenerate thumbnails (5.4) and record the new `signature` value.

### 2.8 M3-R context pack and dispatch brief
Context pack: `games/look-alive/render-gl.js` only. API: `LookAliveRender.create(canvas, opts)` -> Dish; `Dish.setRun(run, dish, build, {slots, machine})`, `setTick`, `frame(ts)`, `signature(t)`, `stats()`, `colonyAt(t)`, `view {cx, cy, zoom}`, `clampView()`. Lines: TUNE 11 to 28; `VS_CELL` 100 to 126; `FS_CELL` 128 to 284 (native branch 155 to 166, low-detail 171 to 178, granules 184 to 192, native body 215 to 223, streak 228, bokeh 262, tails 263 to 273); `FS_SPECK` 334 to 351; `Engine.render` 487 to 540; `buildFlags` 547; `buildCands` 623 to 687; `setRun` 690 to 723; `pack` 822 to 933; `signature` 936 to 942; `frame` 945 to 974; `stats` 997 to 1002.

**Dispatch brief (sonnet, cap 45).**
> Task: M3-R in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M2-M3-restyle-and-art.md` section 2. You may edit ONLY `games/look-alive/render-gl.js`. Do not touch `sim.js`, `levels.js`, `cards.js`, `game.js`, `draw.js`, `style.css`, `index.html`, `NOTES.md`, or anything in `dev/` except running scripts. Do not run git. Read section 2.1 first: never add or reorder an `R()` call inside `species()`; new per-individual values come only from `hash32(c, q, 7001..7003)`. Apply changes 2.4 (a) to (s) exactly, in order; edit, do not rewrite; keep all existing behaviour for robots, guards, specks and the portrait. Then run the five commands in 2.6. The before file is `$SCRATCH/m3-before.txt` (path given by the orchestrator). Every `m3-compare` line must PASS; if only the ratio fails you may set `TUNE.spAreaK` once within 0.85 to 1.15. Take two screenshots at most (dish 2 tick 40 at zoom 1 and 3, via the `__m3` helpers in `dev/m3-measure.js` plus `a.shot`). Report: the compare output verbatim, the new `signature` hash for dish 2 tick 40, `spK`, and honestly what still looks weaker (for example a shape that does not read at zoom 1).

---

## 3. M3-A: honest card art

### 3.1 Audit (I looked at all 20 files in `games/look-alive/assets/cards/`: 19 cards plus `world-acidica.jpg`; 12 Biology, 7 Machine)
| Card | Shelf | What it shows | Verdict |
|---|---|---|---|
| card-acidproof | Bio | Smiley face (eyes, cheeks, mouth), central nucleus, 4 mitochondria with cristae, Golgi stack, ER ribbons | **Redraw** |
| card-fermentation | Bio | Nucleus, Golgi/ER stacks inside the pink cell | **Redraw** |
| card-respiration | Bio | Four bean organelles with segmented cristae (mitochondria) | **Redraw** |
| card-sos | Bio | Mitochondria (3), Golgi stacks (2), ladder double helix | **Redraw** |
| card-lipids | Bio | Large central nucleus with nucleolus, two mitochondria | **Redraw** |
| card-stringent | Bio | Folded ER-like mass with two mitochondria around the alarm glow | **Redraw** |
| card-naps | Bio | Three sleeping faces (closed eyes, mouths); cells packed and joined like tissue | **Redraw** |
| card-wall | Bio | Large round inner body behind the mesh that reads as a nucleus | **Redraw** |
| card-quorum | Bio | No organelles; a curled line in a few cells can read as a faint smile at full size, not at 84 px | Keep (optional redraw) |
| card-pump | Bio | Clear interior, membrane pumps | Keep |
| card-flagellum | Bio | Bacterial rod, pili, one flagellum, small inclusions | Keep (used as a style reference) |
| card-sporulate | Bio | Rod with an endospore, two free spores | Keep |
| card-clock, -copier, -factory, -fuelcell, -radio, -repair, -shell | Machine | Machine parts by design; nothing eukaryotic | Keep |
| world-acidica | World | Violet rods with amber plumes, pink cell fizzing | Keep |

So 8 redraws, not the 9 in PLAN.md: `card-pump` and `card-quorum` are fine; `card-wall` is missing from PLAN's list.

### 3.2 The request file (new; the old one cannot be used: `art-src/refs/_usage.json` already shows 50 of its cap of 50 images, $2.262, so `gen-refs.js` would stop on the first request)
Write to `docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-cards-v2.json`. Two variants per card (same prompt, the model varies); refs must sit inside `outDir`.
```json
{
  "slug": "look-alive-cards-v2",
  "outDir": "games/look-alive/art-src/cards-v2",
  "cap": 30,
  "style": "STYLE (applies to every image): a single illustration for a game card, in the same dark-field microscope style as the attached images. Pure black background. One clear subject, centred, filling about two thirds of the square, readable at small size. Translucent glowing bodies with a bright rim and a glassy darker interior, soft bloom. Colours with fixed meanings: pink (#FF5C8A) for the player's own cell, violet (#8B5CF6) only for native bystander cells, amber (#F5A524) for acid, waste and chemicals, green (#2DD4A7) only for immune activity. BACTERIAL ANATOMY ONLY: every cell is a bacterium shaped like a ball or a short capsule. Its edge is one clean glowing envelope ring (a membrane, sometimes with a wall outside it). Inside there is only clear fluid, one loose tangled glowing thread of DNA lying free in the middle with no bag or round body around it, and a fine scatter of tiny ribosome dots. There is no nucleus, no round inner body, no mitochondria or bean-shaped organelles, no stacked or folded membranes, no inner tubes, no walled bubbles. Cells have no faces, eyes, mouths or expressions. Nothing is built: no buildings, streets or structures. Clean, charming, scientific. No text, no letters, no numbers, no labels, no border, no frame, no watermark.",
  "requests": [
    { "id": "LC2-03a", "file": "card-acidproof-a.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A round pink bacterial cell sitting completely relaxed in amber acid haze. The amber haze is both outside and inside the cell: the clear fluid inside is tinted amber, and the loose glowing DNA thread and the tiny ribosome dots inside are tinted amber too, calm and unharmed. The envelope is one clean, even glowing ring, not thickened. The cell looks content but has no face. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-03b", "file": "card-acidproof-b.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A round pink bacterial cell sitting completely relaxed in amber acid haze. The amber haze is both outside and inside the cell: the clear fluid inside is tinted amber, and the loose glowing DNA thread and the tiny ribosome dots inside are tinted amber too, calm and unharmed. The envelope is one clean, even glowing ring, not thickened. The cell looks content but has no face. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-09a", "file": "card-fermentation-a.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A short capsule-shaped pink bacterial cell with a modest inner glow, trailing a long curling plume of amber sour haze behind it, like a wisp of smoke in still air. Inside: clear fluid, one loose glowing DNA thread and fine ribosome dots, plus a few tiny amber specks near the membrane where the sour waste leaves. A few violet native rod cells drift out of focus in the background, each trailing its own faint amber wisp. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-09b", "file": "card-fermentation-b.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A short capsule-shaped pink bacterial cell with a modest inner glow, trailing a long curling plume of amber sour haze behind it, like a wisp of smoke in still air. Inside: clear fluid, one loose glowing DNA thread and fine ribosome dots, plus a few tiny amber specks near the membrane where the sour waste leaves. A few violet native rod cells drift out of focus in the background, each trailing its own faint amber wisp. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-08a", "file": "card-respiration-a.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A round pink bacterial cell glowing brightly. The light comes from its edge: the inner surface of its envelope is lined with a dense ring of tiny bright sparks, because in bacteria this work happens in the membrane. Inside: clear fluid, one loose glowing DNA thread and fine ribosome dots, nothing else. A few clean, clear bubbles drift away from the cell. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-08b", "file": "card-respiration-b.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A round pink bacterial cell glowing brightly. The light comes from its edge: the inner surface of its envelope is lined with a dense ring of tiny bright sparks, because in bacteria this work happens in the membrane. Inside: clear fluid, one loose glowing DNA thread and fine ribosome dots, nothing else. A few clean, clear bubbles drift away from the cell. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-17a", "file": "card-sos-a.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A round pink bacterial cell holding still while it repairs itself. Inside, the single loose glowing DNA thread lies in open loops, and one section of it is broken; a few tiny amber helper dots sit on the two broken ends, pulling them together. The envelope is thickened and brighter, like a raised shield. Nothing else is inside except fine ribosome dots. The DNA is a soft thread, not a ladder. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-17b", "file": "card-sos-b.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A round pink bacterial cell holding still while it repairs itself. Inside, the single loose glowing DNA thread lies in open loops, and one section of it is broken; a few tiny amber helper dots sit on the two broken ends, pulling them together. The envelope is thickened and brighter, like a raised shield. Nothing else is inside except fine ribosome dots. The DNA is a soft thread, not a ladder. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-02a", "file": "card-lipids-a.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A round pink bacterial cell whose envelope is unusually thick: several thin, tightly packed glowing layers at the edge, like the rings of an onion seen in cross-section. Small amber acid droplets bounce off the outside without getting through; a few are flattened against the surface. Inside the thick edge: clear fluid, one loose glowing DNA thread and fine ribosome dots, nothing else. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-02b", "file": "card-lipids-b.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A round pink bacterial cell whose envelope is unusually thick: several thin, tightly packed glowing layers at the edge, like the rings of an onion seen in cross-section. Small amber acid droplets bounce off the outside without getting through; a few are flattened against the surface. Inside the thick edge: clear fluid, one loose glowing DNA thread and fine ribosome dots, nothing else. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-16a", "file": "card-stringent-a.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A pink bacterial cell that has gone quiet and tight: it is a little smaller and dimmer than usual, its loose DNA thread is pulled into a compact tangle in the middle, and the ribosome dots are few and faint. One small amber alarm glow sits next to the tangle. Around the cell the black field is empty of food, with only one or two faint specks left. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-16b", "file": "card-stringent-b.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A pink bacterial cell that has gone quiet and tight: it is a little smaller and dimmer than usual, its loose DNA thread is pulled into a compact tangle in the middle, and the ribosome dots are few and faint. One small amber alarm glow sits next to the tangle. Around the cell the black field is empty of food, with only one or two faint specks left. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-07a", "file": "card-naps-a.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A loose group of about ten pink bacterial cells, round and capsule-shaped, spread out with dark gaps between them, not packed together and not touching. Most are bright and busy, each with a loose DNA thread and ribosome dots inside. Three of them are dormant: smaller, dimmer, with a frosted, slightly thicker rim and a still, compact interior. The dormant ones are shown only by dimness and stillness; no cell has a face, eyes, eyelids or an expression. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-07b", "file": "card-naps-b.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A loose group of about ten pink bacterial cells, round and capsule-shaped, spread out with dark gaps between them, not packed together and not touching. Most are bright and busy, each with a loose DNA thread and ribosome dots inside. Three of them are dormant: smaller, dimmer, with a frosted, slightly thicker rim and a still, compact interior. The dormant ones are shown only by dimness and stillness; no cell has a face, eyes, eyelids or an expression. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-11a", "file": "card-wall-a.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A plump pink bacterial cell wrapped in a thick, sturdy outer wall drawn as a visible woven mesh, like a fine net bag, holding its shape firmly. Through the mesh you can see the inside: clear fluid, one loose glowing DNA thread lying free and fine ribosome dots. There is no large oval or round body inside. A few violet native rod cells drift out of focus nearby. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." },
    { "id": "LC2-11b", "file": "card-wall-b.png", "size": "1024x1024", "refs": ["01-style-frame.png", "card-flagellum.png"], "prompt": "A plump pink bacterial cell wrapped in a thick, sturdy outer wall drawn as a visible woven mesh, like a fine net bag, holding its shape firmly. Through the mesh you can see the inside: clear fluid, one loose glowing DNA thread lying free and fine ribosome dots. There is no large oval or round body inside. A few violet native rod cells drift out of focus nearby. This is a BIOLOGY card: everything looks organic, soft, slightly irregular and alive." }
  ]
}
```
Optional quorum entry (only if Josh wants it): id `LC2-06a`, file `card-quorum-a.png`, prompt "A loose cluster of about nine pink bacterial cells with small dark gaps between them, each leaking tiny glowing amber dots that gather into a soft shared haze around the group. The cells in the crowded middle are dimmer and calmer than the ones at the edge. Inside each: a loose DNA thread and ribosome dots only. This is a BIOLOGY card: ...".

### 3.3 Commands (repo root)
```
mkdir -p games/look-alive/art-src/cards-v2
cp games/look-alive/art-src/refs/01-style-frame.png games/look-alive/art-src/refs/card-flagellum.png games/look-alive/art-src/cards-v2/
node tools/gen-refs.js docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-cards-v2.json --dry-run    # 16 requests, 0/30, all "edit"
node tools/gen-refs.js docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-cards-v2.json              # about 16 x $0.045 = $0.72
python3 -c "
from PIL import Image;import glob
f=sorted(glob.glob('games/look-alive/art-src/cards-v2/card-*-[ab].png'));W=256;s=Image.new('RGB',(W*4,W*((len(f)+3)//4)))
[s.paste(Image.open(p).convert('RGB').resize((W,W)),((i%4)*W,(i//4)*W)) for i,p in enumerate(f)];s.save('$SCRATCH/cards-v2-sheet.jpg',quality=85);print(len(f))"
# retry one card (after deleting or with --force):   node tools/gen-refs.js <json> --only LC2-07a --force
# install a chosen variant (768 px JPEG like the existing cards):
sips -s format jpeg -s formatOptions 82 -Z 768 games/look-alive/art-src/cards-v2/card-naps-b.png --out games/look-alive/assets/cards/card-naps.jpg
```
Cost: the old run averaged $0.045 per image with refs (PLAN says $0.03). Budget at 2.5 attempts per card: about 20 images, $0.90; stop at the cap of 30.

**Acceptance (M3-A).** By eye on the sheet and on a before/after 4x5 contact sheet of all 20 card files: none of the 8 shows a nucleus, mitochondria, stacked membranes, a face, eyes or architecture; each still reads at 84 px (the Adapt thumbnail) and at 36 px (the run strip); colour meanings held (pink = you, violet = natives, amber = chemicals). Headless: `node -e "['acidproof','fermentation','respiration','sos','lipids','stringent','naps','wall'].forEach(id=>{const s=require('fs').statSync('games/look-alive/assets/cards/card-'+id+'.jpg');if(s.size<30000||Date.now()-s.mtimeMs>864e5)throw id})"` and `__la.options()` on Adapt dish 1 envelope reports `img` widths of 768. `pages-check` clean.

**M3-A dispatch brief (haiku, cap 15; or do it inline, it is five commands).**
> Task: M3-A in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M2-M3-restyle-and-art.md` section 3. Create `docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-cards-v2.json` with the exact JSON in 3.2. Run the commands in 3.3 up to and including the contact sheet (use the scratchpad path the orchestrator gives as `$SCRATCH`). Do NOT run `sips` to install anything and do not touch `games/look-alive/assets/`; the orchestrator picks the variants by eye. Do not edit any game file or `tools/`. Do not run git. Never print the API key. If `gen-refs` fails on a request, retry that one id once with `--only ID --force`; no further retries. Report: the dry-run output, the dollars line of the last generation, and the sheet path. Report honestly any image you can already see is wrong (organelles, faces).

**Risks (M3-A).** The edit endpoint copies the style frame's interior; if both variants of a card still show organelles, drop `card-flagellum.png` from `refs` for that id and retry once. Faces are the stubborn failure; describe dormancy by dimness only (done). Do not over-explain eukaryotic words to the model in prompts beyond the style block.

---

## 4. M2 tier 1: tokens, panel chrome, patterned bars, line icons (style.css only)

**What changes.** Purely appended CSS at the end of `style.css` under a header comment; existing rules are not deleted. Bars get a pattern in their danger ends (the safe zone is drawn opaque on top, so the pattern shows only outside it), each stat name gets a line icon, legend swatches become shape icons, panels get the thin violet line and soft glow of mock-ups 03 and 24. Stat to pattern mapping follows the suspicion channels already in `draw.js` (`CH`, lines 6 to 11) where they overlap: Growth = pink stripes (channel Growth), Smell = amber dots (channel Smell), Naturalness = cyan zigzag (channel Naturalness), Acid defence = acid-yellow cross-hatch (the shader's acid colour), Crash survival = violet waves.

Anchors used: `.panel` (style.css 20), `.cellpanel` (101), `.sb`, `.sb-track`, `.sb-zone`, `.sb-name` (233 to 247), `.legend`, `.sw` (91 to 93), `.ptitle` (21). Rows already carry `data-stat` (`buildBars`, game.js 694 to 703), so no markup change is needed.

```css
/* ================= U1 tier 1 (wave 2, M2): tokens, panel chrome, patterned bars, line icons ================= */
:root {
  --vline: rgba(167,139,250,.34); --vline2: rgba(167,139,250,.62); --vglow: 0 0 0 1px rgba(167,139,250,.06), 0 0 24px rgba(120,100,230,.10);
  --rad: 14px; --paper: #efe6d0; --paper2: #e3d8bd; --pink-ink: #2b2418; --paper-dim: #5a4a2e; --paper-key: #7a4a00;
  --stamp-red: #b3202e; --stamp-grn: #1d6b4a; --chalk: #f2efe6; --c-acid: #c8d23a;
}
.panel:not(.cellpanel) { border-color: var(--vline); border-radius: var(--rad); box-shadow: var(--vglow); background-image: linear-gradient(180deg, rgba(24,20,48,.45), rgba(9,11,18,0) 60%); }
.cellpanel { border-color: var(--vline); border-radius: var(--rad); }
.ptitle { color: #9aa0b8; }
.runR .ptitle::before, .forecast .ptitle::before { content: "\2022\2022\2022"; letter-spacing: 2px; color: var(--vio); margin-right: 8px; }
#stepbar li { border-color: var(--vline); border-radius: 999px; }
#stepbar li.on { box-shadow: 0 0 16px rgba(255,107,149,.35); }
.dishcanvas.gl { box-shadow: 0 0 0 3px #1b1f3a, 0 0 0 4px var(--vline2), 0 0 26px 4px rgba(120,100,230,.28); }

/* stat bars: pattern in the danger ends, opaque safe zone, line icon per stat */
.sb-track { height: 14px; border-radius: 7px; border-color: var(--vline); background-color: #121426; background-repeat: repeat; overflow: hidden; }
.sb-zone { background: linear-gradient(rgba(45,212,167,.34), rgba(45,212,167,.34)), #0e1c1c; border-left: 1px solid var(--grn); border-right: 1px solid var(--grn); }
.sb-mark, .sb-ghost { top: -3px; height: 18px; }
.sb[data-stat="acid"]    { --sc: var(--c-acid); --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 1.5C8 1.5 3 7.5 3 10.5a5 5 0 0 0 10 0C13 7.5 8 1.5 8 1.5z' fill='none' stroke='%23000' stroke-width='1.6'/%3E%3Ccircle cx='6.6' cy='10.6' r='1.3'/%3E%3C/svg%3E"); }
.sb[data-stat="growth"]  { --sc: var(--pink); --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M2 2v12h12'/%3E%3Cpath d='M4 12C8 11.5 10.5 8 13 3.5'/%3E%3Cpath d='M10.5 3.5H13V6'/%3E%3C/svg%3E"); }
.sb[data-stat="smell"]   { --sc: var(--amb); --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M5 14c-2-3 2-4 0-7s1-4 0-6'/%3E%3Cpath d='M10.5 14c-2-3 2-4 0-7s1-4 0-6'/%3E%3C/svg%3E"); }
.sb[data-stat="natural"] { --sc: var(--cy); --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round'%3E%3Cpath d='M4.5 14.5h7L9.6 1.5H6.4z'/%3E%3Cpath d='M8 11l3.6-6.5'/%3E%3C/svg%3E"); }
.sb[data-stat="crash"]   { --sc: var(--vio); --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='2.6' stroke-linecap='round'%3E%3Cpath d='M1.8 11.2L6.4 8.6'/%3E%3Cpath d='M9.6 7.4L14.2 4.8'/%3E%3Cpath d='M8 3.2v1.6M8 11.2v1.6M5.2 4.2l.8 1.1M10 10.7l.8 1.1' stroke-width='1.1'/%3E%3C/svg%3E"); }
.sb[data-stat="acid"] .sb-track    { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M0 0L8 8M8 0L0 8' stroke='%23c8d23a' stroke-opacity='.6' stroke-width='1'/%3E%3C/svg%3E"); }
.sb[data-stat="growth"] .sb-track  { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M-2 10L10 -2M-2 2L2 -2M6 10L10 6' stroke='%23ff6b95' stroke-opacity='.6' stroke-width='1.6'/%3E%3C/svg%3E"); }
.sb[data-stat="smell"] .sb-track   { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6'%3E%3Ccircle cx='3' cy='3' r='1.3' fill='%23f5a524' fill-opacity='.75'/%3E%3C/svg%3E"); }
.sb[data-stat="natural"] .sb-track { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='14'%3E%3Cpath d='M0 9.5L2.5 4.5L5 9.5L7.5 4.5L10 9.5' fill='none' stroke='%235fd0ff' stroke-opacity='.65' stroke-width='1.2'/%3E%3C/svg%3E"); }
.sb[data-stat="crash"] .sb-track   { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14'%3E%3Cpath d='M0 7Q3 3 6 7T12 7' fill='none' stroke='%23a78bfa' stroke-opacity='.7' stroke-width='1.2'/%3E%3C/svg%3E"); }
.sb-name::before { content: ""; display: inline-block; width: 13px; height: 13px; margin-right: 5px; vertical-align: -2px; background: var(--sc, currentColor); -webkit-mask: var(--ico) center / contain no-repeat; mask: var(--ico) center / contain no-repeat; }
.sb.unchecked .sb-track { background-image: none; }

/* legend: shape + colour, never colour alone */
.legend .sw { width: 14px; height: 14px; border-radius: 0; vertical-align: -3px; -webkit-mask: var(--ico) center / contain no-repeat; mask: var(--ico) center / contain no-repeat; }
.legend .sw.vio  { --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect x='1.5' y='5.5' width='13' height='5' rx='2.5' fill='none' stroke='%23000' stroke-width='1.6' transform='rotate(-30 8 8)'/%3E%3C/svg%3E"); }
.legend .sw.pink { --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6.2' fill='none' stroke='%23000' stroke-width='1.4'/%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E"); }
.legend .sw.amb  { --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M5 14c-2-3 2-4 0-7s1-4 0-6'/%3E%3Cpath d='M10.5 14c-2-3 2-4 0-7s1-4 0-6'/%3E%3C/svg%3E"); }
.legend .sw.grn  { --ico: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 2c3 0 5.5 2 5.5 5.2 0 1.6 1.2 2.4.6 4-.9 2.3-3.6 2.8-6.1 2.8S2.8 13.2 2.3 11c-.4-1.6.6-2.2.6-3.8C2.9 4 5 2 8 2z' fill='none' stroke='%23000' stroke-width='1.6'/%3E%3Ccircle cx='8' cy='8' r='1.8'/%3E%3C/svg%3E"); }
```

**Acceptance (T1).** `u1-check.js` lines "T1 ..." PASS (forecast and live bars on dish 10 all patterned and with an icon; four legend icons); `contrast.js` adds no new failure against `contrast-before`; `walkthrough.js` ten rows; at 1280x720 the Adapt screen still has no page scroll on dishes 1 to 3 (`document.scrollingElement.scrollHeight <= innerHeight`), since the track grew from 12 to 14 px. By eye: `u1-after-adapt.png` and `u1-after-run.png` against `u1-before-*` and refs 03 and 24.

**Risks (T1).** A bar's danger colour now hints at the stat, while the marker colour still says good or bad; check the two do not fight (marker stays white, green, red). `mask` with `var()` inside `url()` works in Chromium and Safari; Firefox needs no prefix. If the panel glow makes Adapt look busy, drop the `background-image` line only.

**T1 dispatch brief (haiku, cap 20).**
> Task: M2 tier 1 in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M2-M3-restyle-and-art.md` section 4. Append the CSS block from section 4 to the END of `games/look-alive/style.css`, exactly as written (it is all URL-encoded already). Edit, do not rewrite: do not delete or change any existing rule. You may touch ONLY `games/look-alive/style.css`. Do not touch `game.js`, `index.html`, `draw.js`, `render-gl.js`, `sim.js`, `levels.js`, `cards.js`. Do not run git. Then run: `node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-check.js` (only the three "T1" lines must PASS; the T2 lines will FAIL now and that is expected), `node games/look-alive/dev/cdp-drive.js games/look-alive/dev/contrast.js`, and `OUT=$SCRATCH/u1-t1- node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-shots.js` (path from the orchestrator). Report the three outputs verbatim and the screenshot paths. Report honestly what looks weaker than before; do not tune colours on your own.

---

## 5. M2 tier 2

### 5.1 T2a: the briefing as the handler letter (13) with a specimen label (02); ink filters; a key to the locals

**Markup, `index.html` lines 68 to 79** (anchor `<section class="screen" id="screen-brief">`). Wrap everything from the kicker to the "Your cell" row in a paper letter; keep every existing id and the `briefGo` button outside the paper:
```html
<section class="screen" id="screen-brief">
  <div class="briefwrap">
    <div class="paper letter" id="briefLetter">
      <div class="lethead"><svg class="leteye" viewBox="0 0 40 40" aria-hidden="true"><polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 20q11-10 22 0q-11 10-22 0z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20" r="3.5" fill="currentColor"/></svg><span class="letorg">Department of Plausible Deniability</span></div>
      <div class="kicker" id="briefKicker"></div>
      <h1 id="briefTitle"></h1>
      ...the existing #briefReport and the four .briefrow divs, unchanged...
      <div class="specimen"><span id="briefCover"></span> &ndash; not a robot.</div>
      <div class="letstamp" aria-hidden="true">BE COOL.</div>
      <div class="coffee" aria-hidden="true"></div>
    </div>
    <button type="button" class="big" id="briefGo">Start the test</button>
  </div>
</section>
```
**Shared SVG filters**, once, right after `<body>` (line 10):
```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <filter id="inkRough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.6" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>
  <filter id="chalkRough" x="-10%" y="-30%" width="120%" height="160%"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="3" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="2.6" xChannelSelector="R" yChannelSelector="G"/></filter>
</defs></svg>
```
**Locals key on the world screen** (`index.html` line 61, after `<div class="facts" id="worldFacts"></div>`), so the three names in the facts point at the three shapes the dish now draws:
```html
<div class="localskey" aria-label="How the locals look in the dish"><span><svg viewBox="0 0 40 16" aria-hidden="true"><rect x="1" y="4" width="17" height="8" rx="4"/><rect x="21" y="4" width="17" height="8" rx="4"/></svg><i>Lactobacillus</i> long rods, often in pairs</span><span><svg viewBox="0 0 40 16" aria-hidden="true"><circle cx="6" cy="8" r="4.5"/><circle cx="15" cy="8" r="4.5"/><circle cx="24" cy="8" r="4.5"/><circle cx="33" cy="8" r="4.5"/></svg><i>Streptococcus</i> beads in pairs and chains</span><span><svg viewBox="0 0 40 16" aria-hidden="true"><path d="M12 8c3-6 7-6 10 0s7 6 10 0"/><path d="M12 8C9 5 6 7 2 4M12 8C9 8 6 10 2 9M12 8c-3 3-6 4-9 7" stroke-width="1"/></svg><i>Helicobacter pylori</i> curved spirals with a tuft of tails</span></div>
```
**`game.js`, `renderBrief`** (lines 260 to 268): add `$('briefCover').innerHTML = coverName(S.carried);` (`coverName` is a hoisted function declaration at line 1032 and returns `<i>Genus epithet</i>`). Nothing else in `game.js`.

**CSS** (append after tier 1, header `/* U1 tier 2a: paper briefing */`):
```css
.letter { position: relative; margin: 0 0 14px; padding: 22px 34px 26px; transform: rotate(-.4deg); max-width: 900px;
  background-color: var(--paper); background-image: repeating-linear-gradient(0deg, transparent 0 25px, rgba(60,40,10,.05) 25px 26px), radial-gradient(circle at 20% 10%, rgba(255,255,255,.35), transparent 60%); }
.letter .lethead { display: flex; flex-direction: column; align-items: center; gap: 4px; color: var(--pink-ink); border-bottom: 2px solid var(--pink-ink); padding-bottom: 8px; margin-bottom: 10px; }
.leteye { width: 38px; height: 38px; } .letorg { font-family: var(--type); font-size: 18px; letter-spacing: .14em; text-transform: uppercase; }
.letter .kicker { color: var(--paper-dim); } .letter h1 { color: #8a1f3a; font-family: var(--type); font-weight: 400; }
.letter .report { background: transparent; border: 1px dashed rgba(43,36,24,.4); font-family: var(--type); color: var(--pink-ink); }
.letter .report .rh { color: var(--paper-dim); } .letter .report .rk { color: var(--paper-key); } .letter .report .rl.status { color: var(--stamp-grn); }
.letter .briefrow { border-bottom: 1px dotted rgba(43,36,24,.35); color: var(--pink-ink); font-family: var(--type); }
.letter .briefrow b { color: var(--paper-dim); }
.specimen { display: inline-block; margin: 12px 0 0; padding: 6px 16px; font-family: var(--type); font-size: 17px; color: var(--pink-ink); background: #f3e3c0; border: 1px solid #a3885a; border-radius: 4px; box-shadow: inset 0 0 0 3px #f3e3c0, inset 0 0 0 4px #a3885a; clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px); }
.letstamp { position: absolute; right: 34px; bottom: 26px; transform: rotate(-9deg); border: 4px double var(--stamp-red); color: var(--stamp-red); font-family: var(--type); font-size: 30px; padding: 4px 16px; mix-blend-mode: multiply; opacity: .85; filter: url(#inkRough); pointer-events: none; }
.coffee { position: absolute; left: 14px; bottom: 10px; width: 120px; height: 120px; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, transparent 54%, rgba(120,80,30,.20) 56%, rgba(120,80,30,.08) 60%, transparent 63%); }
.localskey { display: flex; flex-wrap: wrap; gap: 8px 22px; margin: -6px 0 14px; color: var(--dim); font-size: 13px; }
.localskey span { display: inline-flex; align-items: center; gap: 8px; } .localskey i { color: var(--ink); }
.localskey svg { width: 40px; height: 16px; fill: none; stroke: var(--vio); stroke-width: 1.6; stroke-linecap: round; }
@media (max-width: 560px) { .letter { padding: 16px 16px 60px; transform: none; } .letstamp { font-size: 22px; right: 14px; bottom: 12px; } }
```
**Acceptance (T2a).** `u1-check` "T2a" PASS; `contrast` no new fails on `brief`, `brief6`, `world`; `walkthrough.js` ten rows (it reads `#briefReport`); five viewport sizes (command in 5.5) have no horizontal overflow (`document.scrollingElement.scrollWidth <= innerWidth`). By eye against ref 13 and ref 02.

**T2a dispatch brief (sonnet, cap 35).**
> Task: M2 tier 2a in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M2-M3-restyle-and-art.md` section 5.1. Files you may touch: `games/look-alive/index.html` (the `#screen-brief` section, the filter defs after `<body>`, the locals key after `#worldFacts`), `games/look-alive/style.css` (append only), `games/look-alive/game.js` (one line in `renderBrief`). Must NOT touch: `render-gl.js`, `draw.js`, `sim.js`, `levels.js`, `cards.js`, `dev/`, `assets/`. Do not run git. Keep every existing id (`briefKicker`, `briefTitle`, `briefReport`, `briefProblem`, `briefGoal`, `briefExam`, `briefFig`, `briefCell`, `briefGo`); M1 may have changed text in these, keep its changes. Edit, do not rewrite. Copy the snippets as given; adjust spacing only if the letter overflows at 1280x720 or 390x844. Before/after rule: take `OUT=$SCRATCH/u1-t2a- ... u1-shots.js` once after your change (the before shots exist), at most one fix round and one more shot. Run `u1-check.js` (T1 and T2a lines must PASS), `contrast.js`, `walkthrough.js`. Report outputs verbatim and honestly what still looks weaker than mock-ups 13 and 02.

### 5.2 T2b: the win card (12) and the loss slide (11)

**`game.js`, near `showResult` (anchor `function showResult() {`, lines 1054 to 1078).** Add three helpers above it:
```js
  var TAG_WORDS = { acid: 'DISSOLVED.', overgrew: 'TOOK OVER.', starved: 'STARVED OUT.', bust: 'STARVED OUT.', bloom: 'OUTGROWN.', below: 'TOO FEW.', band: 'OUT OF STEP.' };
  function slideTag(cause) { return TAG_WORDS[cause] || (/^exposed:/.test(cause) ? 'COVER BLOWN.' : 'FAILED.'); }
  function timelineSvg(T, from, to) {
    function x(t) { return 10 + 580 * Math.max(0, Math.min(T, t)) / T; }
    var o = '<svg class="slidetime" viewBox="0 0 600 46" role="img" aria-label="Timeline: it went wrong at tick ' + from + ' of ' + T + '"><line class="tl" x1="10" y1="22" x2="590" y2="22"/>', i;
    for (i = 0; i <= 10; i++) o += '<line class="tk" x1="' + x(T * i / 10).toFixed(1) + '" y1="17" x2="' + x(T * i / 10).toFixed(1) + '" y2="27"/>';
    o += '<rect class="tb" x="' + x(from).toFixed(1) + '" y="14" width="' + Math.max(2, x(to) - x(from)).toFixed(1) + '" height="16"/>';
    o += '<circle class="pin" cx="' + x(from).toFixed(1) + '" cy="22" r="7"/><circle class="pinhi" cx="' + (x(from) - 2).toFixed(1) + '" cy="20" r="2"/>';
    return o + '<text class="tt" x="' + x(from).toFixed(1) + '" y="43">tick ' + from + '</text></svg>';
  }
  function chalkSvg() { return '<svg class="chalk" viewBox="0 0 130 44" aria-hidden="true"><path class="ch" d="M4 8 C 34 2, 64 34, 112 26"/><path class="ch" d="M100 16 L 115 26 L 99 35"/></svg>'; }
  function dishSnapshot(t) {   // the dish at the moment it went wrong, as a still for the slide
    try {
      var g = GL.r;
      if (g && g.supported && GL.canvas) { g.setTick(t); g.visible = true; g.frame(performance.now()); var u = GL.canvas.toDataURL('image/jpeg', 0.85); g.setTick(S.t); return u; }
      var c = $('runDish'); if (c && c.width) return c.toDataURL('image/jpeg', 0.85);
    } catch (e) { /* lost context */ }
    return '';
  }
```
**Win branch.** In the `html = '<div class="winwrap">...` string: give the stamp the class `win` (`'<div class="stamp win' + (reduced ? '' : ' slam') + '" id="stamp">'`), and after `gradeHtml` insert `'<div class="covercap">Final readings</div><div class="paperbars statbars" id="winBars"></div>'`.
**Loss branch.** Wrap the existing memo (unchanged, including M1's text and every `data-act` button, `memoTipBtn`, `memoTip`) as the right column:
```js
html = '<div class="losswrap"><div class="slide" id="lossSlide"><div class="slidetag" id="slideTag">' + slideTag(a.cause) + '</div>' +
  '<div class="slidetop"><img class="slideimg" id="slideImg" alt="The dish at the moment it went wrong"><div class="slidebars statbars" id="slideBars"></div></div>' +
  timelineSvg(run.T, a.from, a.to) + '</div>' + '<div class="paper memo">' + /* existing memo inner HTML */ + '</div></div>';
```
**After `ov.innerHTML = html; ov.hidden = false;`** add:
```js
    var fsx = Sim.stats(d, run.build);
    if (v.win) { buildBars($('winBars'), d.stats); Array.prototype.forEach.call($('winBars').children, function (row, i) { setBar(row, fsx[i], {}); }); }
    else {
      buildBars($('slideBars'), d.stats); var hit = false;
      Array.prototype.forEach.call($('slideBars').children, function (row, i) { var f = run.autopsy.stat === fsx[i].id; setBar(row, fsx[i], { fail: f }); if (f) { row.insertAdjacentHTML('beforeend', chalkSvg()); hit = true; } });
      if (!hit) $('lossSlide').insertAdjacentHTML('beforeend', chalkSvg().replace('class="chalk"', 'class="chalk ontime"'));
      var src = dishSnapshot(run.autopsy.from), im = $('slideImg'); if (src) im.src = src; else im.style.display = 'none';
    }
```
(The existing red pin on the share chart, `D.chart(... pin ...)`, stays; the slide's pin is a second, larger one.)

**CSS** (append, header `/* U1 tier 2b: win card and loss slide */`):
```css
.stamp.win { border-color: var(--stamp-grn); color: var(--stamp-grn); filter: url(#inkRough); }
.paperbars { display: grid; grid-template-columns: 1fr 1fr; gap: 0 14px; margin: 2px 0 6px; }
.paperbars .sb { height: 38px; padding-top: 1px; } .paperbars .sb-top { height: 14px; }
.paperbars .sb-name { font-family: var(--type); font-weight: 400; color: var(--pink-ink); }
.paperbars .sb-track { background-color: var(--paper2); border-color: var(--paper-dim); }
.paperbars .sb-zone { background: linear-gradient(rgba(29,107,74,.30), rgba(29,107,74,.30)), #d6dcc0; border-color: var(--stamp-grn); }
.paperbars .sb-verdict { font-size: 10.5px; height: 13px; line-height: 13px; }
.paperbars .sb-verdict.ok { color: var(--stamp-grn); } .paperbars .sb-verdict.bad { color: #8a1f3a; } .paperbars .sb-verdict.amb { color: var(--paper-key); } .paperbars .sb-verdict.neu { color: var(--paper-dim); }
.paperbars .sb-arrow, .paperbars .sb-tag { display: none; }
.winwrap .memo { transform: rotate(-.6deg); }
.losswrap { display: grid; grid-template-columns: minmax(0, 560px) minmax(0, 560px); gap: 18px; align-items: start; max-width: 100%; }
.slide { position: relative; background: #05060c; border: 1px solid var(--vline); border-radius: var(--rad); padding: 16px 16px 10px; box-shadow: 0 10px 40px #000; }
.slidetop { display: grid; grid-template-columns: 200px minmax(0, 1fr); gap: 16px; align-items: center; }
.slideimg { width: 200px; height: 200px; border-radius: 50%; object-fit: cover; background: #000; box-shadow: 0 0 0 3px #1b1f3a, 0 0 0 4px var(--vline2); }
.slidebars .sb { position: relative; overflow: visible; }
.chalk { position: absolute; right: 100%; top: -8px; width: 130px; height: 44px; margin-right: -6px; overflow: visible; pointer-events: none; }
.chalk.ontime { right: auto; left: 40%; top: auto; bottom: 34px; }
.ch { fill: none; stroke: var(--chalk); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; filter: url(#chalkRough); stroke-dasharray: 240; animation: chalkdraw .8s ease-out .3s both; }
@keyframes chalkdraw { from { stroke-dashoffset: 240; } to { stroke-dashoffset: 0; } }
.slidetag { position: absolute; right: -10px; top: -14px; z-index: 2; transform: rotate(6deg); background: var(--paper); color: var(--stamp-red); font-family: var(--type); font-size: 22px; padding: 6px 16px 6px 26px; border: 3px double var(--stamp-red); border-radius: 3px; box-shadow: 0 4px 14px #000; }
.slidetag::before { content: ""; position: absolute; left: 9px; top: 50%; width: 8px; height: 8px; margin-top: -4px; border-radius: 50%; background: #05060c; box-shadow: 0 0 0 1.5px #a3885a; }
.slidetime { display: block; width: 100%; height: 46px; margin-top: 10px; }
.slidetime .tl { stroke: #c9c4b4; stroke-width: 1.5; } .slidetime .tk { stroke: #8a8576; } .slidetime .tb { fill: rgba(255,93,108,.22); }
.slidetime .pin { fill: #e0283c; stroke: #000; } .slidetime .pinhi { fill: #ffb3bb; } .slidetime .tt { fill: #e6e9f4; font-family: var(--mono); font-size: 11px; text-anchor: middle; }
@media (max-width: 1180px) { .losswrap { grid-template-columns: minmax(0, 1fr); } }
@media (max-width: 560px) { .slidetop { grid-template-columns: 1fr; justify-items: center; } .slideimg { width: 160px; height: 160px; } .chalk { display: none; } }
@media (prefers-reduced-motion: reduce) { .ch { animation: none; } }
```
**Acceptance (T2b).** `u1-check` T2b lines PASS at 1280x720, including "fits without scrolling" for both overlays (if the loss overlay overflows, shrink `.slideimg` to 170 px and `.paperbars .sb` to 34 px; no other layout change); with `REDUCED=1`, "no running animations" PASS; `contrast` no new fails on `win` and `loss`; the keyboard-only test from M0 (Escape closes the overlay; Tab reaches every `data-act` button) still passes; `walkthrough.js` ten rows. Loss on an exam dish: run `u1-check` variant by eye on dish 6 (`__la.selectDish(6)` then the loss lines). By eye against refs 11 and 12, and check the chalk arrow points at the failed bar and the pin sits under the red bracket of the share chart.

**Risks (T2b).** `toDataURL` after `frame()` in the same task is reliable in Chromium; in Safari, without `preserveDrawingBuffer`, it can return a blank image: the `img` then shows black, so test on Safari once (M9 manual list). The overlay gets taller; at 720 high the memo and the slide must both fit (acceptance). A failing stat that is not among `d.stats` (for example the band cause on a dish without that bar) gets the arrow on the timeline instead (`ontime`).

**T2b dispatch brief (sonnet, cap 45).**
> Task: M2 tier 2b in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M2-M3-restyle-and-art.md` section 5.2. Files you may touch: `games/look-alive/game.js` (only `showResult` and the four new helpers placed just above it), `games/look-alive/style.css` (append only). Must NOT touch: `index.html` (the `#inkRough` and `#chalkRough` filters already exist from T2a), `render-gl.js`, `draw.js`, `sim.js`, `levels.js`, `cards.js`, `dev/`. Do not run git. Keep the memo's text exactly as it is now (M1 changed it), every `data-act` button, `memoTipBtn`, `memoTip`, `gradeBox`, `stamp`, `coverName`, the notebook. Edit, do not rewrite. Run `u1-check.js` normally and with `REDUCED=1` (T1, T2a, T2b lines must PASS), `contrast.js`, `walkthrough.js`, and `u1-shots.js` once with `OUT=$SCRATCH/u1-t2b-`. At most one fix round and one more shot. Report outputs verbatim and honestly what still looks weaker than mock-ups 11 and 12.

### 5.3 T2c: the dish wall (25) with frozen shader thumbnails

**Thumbnails** are static JPEGs made once by `dev/thumbs.js` (1.7): the dish's carried cell at 6 ticks after its failure begins (`autopsy.from + 6`), zoom 1.25 toward the colony, reduced motion, 480x480, quality 0.82 (about 30 to 60 KB each). They live in `games/look-alive/assets/thumbs/dish-1.jpg` to `dish-10.jpg` (lowercase, Pages-safe, `file://` safe as plain `img`).

**`game.js`, `renderList`** (lines 200 to 215; anchor `function renderList() {`). Replace the row building with tiles inside two wall grids; keep the group headings, keep `button[data-dish]` with `disabled` for locked (the walkthrough reads `#dishList button[data-dish="N"]`), keep the "You start with" line (it is the cell the player will carry):
```js
  function renderList() {
    var box = $('dishList'); box.innerHTML = ''; var wall = null;
    ORDER.forEach(function (id) {
      var d = Lv.dish(id), locked = isLocked(id), cleared = !!S.cleared[id], gr = S.grades[id];
      if (id === 1 || id === 6) {
        box.appendChild(el('div', 'grouph', id === 1 ? 'Learning the cell <span class="dim">dishes 1 to 5: one new problem each</span>' : 'Exams <span class="dim">dishes 6 to 10: no answer tips, several cells can pass</span>'));
        wall = el('div', 'wall'); box.appendChild(wall);
      }
      var st = locked ? 'Locked' : cleared ? (d.exam && gr ? gr : 'Cleared') : 'Open';
      var tile = el('div', 'dtile' + (locked ? ' locked' : cleared ? ' cleared' : ' open'));
      tile.innerHTML = '<div class="dthumb">' + (locked ? '' : '<img alt="" src="assets/thumbs/dish-' + id + '.jpg">') + (cleared ? '<span class="dstamp' + (gr ? ' g-' + gr.toLowerCase() : '') + '">' + esc(st) + '</span>' : '') + '</div>' +
        '<div class="dmeta"><span class="num">' + id + '</span><span class="t">' + esc(d.title) + '</span></div><div class="g">' + esc(d.problem) + '</div>' +
        '<div class="c">You start with: ' + esc(buildWords(carriedFor(id))) + '</div>';
      var im = tile.querySelector('img'); if (im) im.addEventListener('error', function () { im.remove(); });
      var b = el('button', 'big', locked ? 'Locked' : cleared ? 'Again' : 'Start'); b.disabled = locked; b.setAttribute('data-dish', id);
      b.addEventListener('click', function () { selectDish(id); }); tile.appendChild(b); wall.appendChild(tile);
    });
  }
```
**CSS** (append, header `/* U1 tier 2c: dish wall */`). Fixed tile height and fixed rows, so nothing reflows under the cursor:
```css
.listwrap { max-width: 1120px; }
.wall { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px 18px; margin-bottom: 8px; }
.dtile { position: relative; height: 292px; display: grid; grid-template-rows: 146px 22px 34px 32px 44px; gap: 3px; padding: 10px; background: var(--panel); border: 1px solid var(--vline); border-radius: var(--rad); }
.dthumb { position: relative; width: 140px; height: 140px; justify-self: center; border-radius: 50%; overflow: visible; background: radial-gradient(circle, #0b0c18 0, #04050a 70%); box-shadow: 0 0 0 2px #1b1f3a, 0 0 0 3px var(--vline2), 0 0 18px rgba(120,100,230,.22); }
.dthumb img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
.dtile:not(:nth-child(5n)) .dthumb::after { content: ""; position: absolute; left: calc(100% + 24px); top: 50%; width: 40px; border-top: 1px dashed var(--vline2); }
.dmeta { display: flex; gap: 8px; align-items: baseline; white-space: nowrap; overflow: hidden; } .dmeta .num { font-family: var(--mono); color: var(--vio); font-size: 16px; } .dmeta .t { font-weight: 600; font-size: 14px; overflow: hidden; text-overflow: ellipsis; }
.dtile .g { font-size: 12px; line-height: 1.35; color: var(--ink); overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.dtile .c { font-size: 11px; line-height: 1.35; color: var(--dim); overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.dtile button.big { min-height: 40px; font-size: 14px; }
.dtile.locked { opacity: .5; } .dtile.locked .dthumb { box-shadow: 0 0 0 2px #15182a, 0 0 0 3px #262a40; }
.dstamp { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(-12deg); padding: 3px 10px; font-family: var(--type); font-size: 15px; letter-spacing: .08em; color: #8cebd0; border: 3px double #2dd4a7; background: rgba(4,20,15,.72); border-radius: 3px; white-space: nowrap; }
.dstamp.g-convincing { color: #a8e6ff; border-color: var(--cy); } .dstamp.g-passable { color: #ffd9a0; border-color: var(--amb); }
@media (max-width: 1180px) { .wall { grid-template-columns: repeat(3, minmax(0, 1fr)); } .dtile .dthumb::after { display: none; } }
@media (max-width: 820px) { .wall { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; } .dtile { height: 276px; grid-template-rows: 124px 22px 34px 32px 44px; } .dthumb { width: 118px; height: 118px; } }
```
(The old `.dishrow` rules stay in the file, unused; M9 may delete them.)

**Acceptance (T2c).** `u1-check` T2c lines PASS; thumbnail check one-liner (1.7) PASS; `walkthrough.js` ten rows with `lockedBefore` true for 2 to 10 on a clean state; at 390x844 and 320x640 no horizontal overflow and every `#dishList button` has `getBoundingClientRect().height >= 40`; `contrast` no new fails on `list`. By eye against ref 25: ten different lit dishes, locked ones dark, cleared ones stamped.

**Risks (T2c).** Thumbnails go stale when the renderer or a dish changes; re-run `thumbs.js` after M3-R and after M4 (balance changes the carried runs). The thumbnail of a failing moment can be mostly empty on dish 1 (acid at tick 6 to 12): if it reads as a black disc, change only the tick rule for that dish to `from + 2` in `thumbs.js`.

**T2c dispatch brief (sonnet, cap 40).**
> Task: M2 tier 2c in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M2-M3-restyle-and-art.md` section 5.3. First run `REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/thumbs.js` (it writes `games/look-alive/assets/thumbs/`), then the thumbnail one-liner in section 1.7. Files you may touch: `games/look-alive/game.js` (only `renderList`), `games/look-alive/style.css` (append only), `games/look-alive/assets/thumbs/` (generated files), and `games/look-alive/dev/thumbs.js` (only the tick rule, only if a thumbnail is an empty black disc). Must NOT touch: `index.html`, `render-gl.js`, `draw.js`, `sim.js`, `levels.js`, `cards.js`, other `dev/` files. Do not run git. Keep `#dishList button[data-dish]`, its `disabled`, and `selectDish`. Edit, do not rewrite. Run `u1-check.js`, `contrast.js`, `walkthrough.js` and the five-size loop in 5.5; take `u1-shots.js` once with `OUT=$SCRATCH/u1-t2c-`. At most one fix round. Report outputs verbatim, list the ten thumbnail sizes, and say honestly which thumbnails read poorly.

### 5.4 Regenerate thumbnails after M3-R (orchestrator)
`REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/thumbs.js` then the one-liner in 1.7.

### 5.5 Whole-M2 acceptance and the regression review
```
node tools/pages-check.js games/look-alive && node tools/cdp-smoke.js games/look-alive/index.html
node games/look-alive/dev/fingerprint.js --check
node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-check.js && REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-check.js
node games/look-alive/dev/cdp-drive.js games/look-alive/dev/contrast.js            # fails: [] on new surfaces; no new entries vs contrast-before
for s in 1280x720 1366x768 390x844 320x640 844x390; do W=${s%x*}; H=${s#*x}; M=; [ $W -lt 900 ] && M=1; VW=$W VH=$H MOB=$M node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js | tail -2; done
# plus the M0 keyboard-only run and the M1 layout assertions (they must still pass)
OUT=$SCRATCH/u1-after- node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-shots.js
```
By eye (orchestrator, true 1280x720): six before/after pairs `u1-before-*` vs `u1-after-*` against refs 03 (run), 10 (adapt), 11 (loss), 12 (win), 13 (brief), 25 (list).

**M2-REV dispatch brief (sonnet, cap 30, read only).**
> Review only; do not edit anything; do not run git. Read the diff of `games/look-alive/style.css`, `game.js`, `index.html` against the commit the orchestrator names (`git` is off limits to you, so the orchestrator pastes the diff into `$SCRATCH/m2.diff`; read that file). Look for: a removed or renamed id or class that `dev/walkthrough.js`, `dev/u1-check.js`, `dev/check*.js` or `window.__la` use; selectors from different tiers that override each other by accident (later `.panel`, `.sb`, `.memo` rules); fixed heights that clip text at 390x844 or 320x640; any animation not stopped under `prefers-reduced-motion`; any player-visible string that breaks the lore (cow, mammal, stomach, intestine, "city" as fact, bacteria building anything, green cells called anything but guards); string concatenation into `innerHTML` that skips `esc()` for level data. Run `u1-check.js` and `contrast.js` once to confirm. Report a numbered list: file, anchor, problem, the smallest fix. Say plainly if you found nothing.

---

## 6. Things the orchestrator must check by eye (both milestones)
1. M3: three species are told apart at zoom 3 without help; no native looks like "you"; at zoom 1 the beacon marks the colony and does not look like a guard or a UI badge; the zoom-6 view has black between cells.
2. M3: cards at 84 px and 36 px still read; no organelle or face survived.
3. M2 tier 1: the bars are calmer, not busier; the marker stays the most visible thing on a bar; icons are recognisable at 13 px.
4. M2 tier 2: paper surfaces are legible (type font at 14 to 17 px), the stamp does not cover text, the chalk arrow points at the right bar, the pin and the chart bracket agree, the wall reads as ten dishes and not ten buttons.
5. Lore: letterhead, stamps, tags and the locals key say nothing as fact that the aliens would not know.

---

## Cheaper-model opportunities I found
- **S0, M2-T1 and M3-A can be haiku or no agent at all**: every line of code and CSS is in this file; they are paste-and-run jobs. M3-A is five shell commands the orchestrator can run inline for less than an agent's startup cost.
- **One sonnet for M3-R is enough** because the shader patch is specified line by line and the compare script makes pass or fail objective; reserve Opus only if two `m3-compare` runs fail on something other than `spAreaK`.
- **Merge T2b and T2c into one sonnet session** if T2b finishes under its cap: both are in `game.js` and `style.css`, the second only rewrites `renderList`. It saves one agent startup and one re-read of `style.css`.
- **Skip the M2 Sonnet review if `u1-check` and `contrast` are clean and the orchestrator has looked at the six pairs**; the review's remaining value is the lore and `esc()` scan, which a 20-line grep in M5's `lore-check.js` will repeat anyway.
- **The two optional M2 images (paper texture, stamp ink) are not needed**: `#inkRough` and the CSS paper lines replace them at zero image cost.
- **Thumbnails cost nothing** (shader through the driver), and the same `thumbs.js` can produce M8's habitat thumbnails with the dish ids changed.

## Things in PLAN.md that are wrong or underspecified
1. **The milky look at zoom 6 does not come from the cloud pass.** The cloud pass switches off once `0.029*sc >= 8` (from zoom about 2 on a 330 px dish; at zoom 1 on M1's 520 px dish it is already near the limit). The veil is the additive bokeh of out-of-focus natives; the fix is `uBokK` (2.5).
2. **The art budget file is full**: `art-src/refs/_usage.json` shows 50 of the cap of 50 images used ($2.262) for `art-requests-cards.json`, so `gen-refs` stops immediately. A new request file with its own `outDir` is needed (3.2). PLAN also omits the PNG 1024 to JPEG 768 conversion into `assets/cards/` (3.3), and the real cost is about $0.045 per image with reference images, not $0.03.
3. **The redraw list is off by two.** By my look at all 20 files: 8 redraws (acidproof, fermentation, respiration, SOS, lipids, stringent, naps, wall). `card-pump` and `card-quorum` are fine; `card-wall` (nucleus-like inner body) is missing from PLAN's list. PLAN 1.4 calls lipids, stringent and naps "borderline"; they show a nucleus, mitochondria and faces. Also there are 19 card images plus `world-acidica.jpg`, 20 files.
4. **M2's three Sonnet agents cannot run at the same time**: all edit `style.css` and two edit `game.js`; the Edit tool refuses a file changed since it was read. They must be sequential (or each would need its own CSS file and the IIFE would need to expose helpers).
5. **"Mix by a fixed ratio per dish, all summing to the same density so no sim number moves"** names the wrong quantity. The sim cannot move (the renderer never feeds it), and the drawn count is unchanged because species are labels on existing candidates. What must be held is the drawn **area** (chains are larger), hence the radius normaliser `spK` (2.4 o).
6. **`glSig` "stable as before" is ambiguous**: the hash **value** changes by design when the instances carry species data (NOTES.md quotes `51b76eea` for dish 2 tick 40); only stability across scrub, zoom and replay can be required. NOTES needs the new value.
7. **"Pink to violet ratio within 10% of the old build" needs a baseline captured before M3 with reduced motion and the beacon off**, on a canvas whose size does not depend on M1's layout. PLAN runs M3 in parallel with M1, which changes the dish to 520 px; `m3-measure.js` uses its own 480 px canvas for this reason.
8. **Dish-wall thumbnails depend on M3 and M4**: PLAN puts them in M2 with no regeneration step. They must be re-rendered after the renderer (M3) and after balance changes (M4) or they show stale dishes.
9. **"Every stat bar carries a pattern class"** does not need a class: rows already carry `data-stat`; the check is the computed `background-image` (1.6). Tier 1 stays CSS-only this way.
10. **The ringed pink disc of ref 04 is not specified as an object.** In the mock-up it is a bright pink disc with a ring and halo on the colony at full view. I specified it as a beacon on your colony that fades with zoom, crowding and colony death (2.4 q); if Josh meant restyling each pink cell at zoom 1, that is a different change.

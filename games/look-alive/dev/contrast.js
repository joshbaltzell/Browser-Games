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

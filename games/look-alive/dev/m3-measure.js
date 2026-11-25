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

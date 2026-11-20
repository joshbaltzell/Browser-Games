// Look Alive habitat 3 pixel test:  node games/look-alive/dev/cdp-drive.js games/look-alive/dev/pixel-h3.js
// Dish 15 (agent dish): the WebGL microscope draws every recorded individual from run.frames.
// (a) scout and native instance counts equal the recorded counts at ticks 0, 100, 200
// (b) between tick 100.0 and 100.5 a moving scout's drawn position moves; a quad native's does not (more than jitter)
// (c) tick 150 frame has pink, violet and green pixels; green drops to near zero with boulders hidden (g.noBoulders = true)
// (d) locate('food'|'colony'|'thinning') and colonyAt return points inside the dish
// (e) setRun(..., { keepView: true }) keeps view and tick
// (f) mean frame time over 60 frames at tick 150 under 8 ms (CPU submit plus a synchronous 1 px readback)
module.exports = async (a) => {
  const W = require('./walk-lib.js')(a), ev = W.ev;
  await W.fresh({ seenWorld: true, unlocked: true });
  await a.eval(`__la.selectDish(15);__la.show('adapt');1`); await a.sleep(800);
  // a build with a flagellum, so scouts swim (the carried cell has no motor and only jitters)
  await a.eval(`__la.setBuild({pace:4,slop:3,metabolism:'respiration',parts:['flagellum'],reflex:null});__la.run();__la.S.playing=false;__la.seek(150);1`); await a.sleep(600);
  const out = []; const line = (ok, msg) => { out.push(ok); console.log((ok ? 'PASS ' : 'FAIL ') + msg); };
  const init = await ev(`(function(){var g=__la.gl(),r=__la.S.run;if(!g||!g.supported||!r||!r.agents)return null;g.resetView();g.noBoulders=false;return {T:r.T,frames:r.frames.length}})()`);
  if (!init) { line(false, 'agent run or GL renderer not available'); console.log('PIXEL-H3 FAIL'); return; }
  // (a)
  for (const t of [0, 100, 200]) {
    const r = await ev(`(function(){var g=__la.gl(),r=__la.S.run;g.resetView();g.setTick(${t});g.frame(performance.now());var fr=r.frames[${t}],sc=0,nn=0;for(var i=0;i<fr.n;i++){if((fr.k[i]&7)===0)sc++;else nn++}
      var s=g.stats(),sig=g.signature(${t}),alive=0;r.boulders.forEach(function(b){var age=${t}-b.birth;if(age>=0&&(b.death==null||${t}<b.death+8))alive++});
      return {recS:sc,recN:nn,drawS:s.scouts,drawN:s.natives,inst:sig.count,alive:alive}})()`);
    line(r.recS === r.drawS && r.recN === r.drawN, `tick ${t}: scouts drawn ${r.drawS} vs recorded ${r.recS}; natives drawn ${r.drawN} vs recorded ${r.recN}; instances ${r.inst} (= ${r.recS + r.recN} cells + ${r.alive} boulders alive)`);
  }
  // (b)
  const mv = await ev(`(function(){var g=__la.gl(),r=__la.S.run,A=r.frames[100],B=r.frames[101],ia=0,ib=0,sc=null,qd=null;
    while(ia<A.n&&ib<B.n){var x=A.id[ia],y=B.id[ib];if(x<y)ia++;else if(y<x)ib++;else{var k=A.k[ia]&7,mvg=(A.k[ia]&8)&&!(A.k[ia]&16);if(k===0&&mvg&&!sc)sc=x;if(k===1&&!qd)qd=x;ia++;ib++}}
    function pos(t,id){g.resetView();g.setTick(t);g.frame(performance.now());var ids=g.agIds,inst=g.eng.inst;for(var i=0;i<4000;i++){if(ids[i]===id)return [inst[i*16],inst[i*16+1]]}return null}
    var s0=pos(100,sc),s1=pos(100.5,sc),q0=pos(100,qd),q1=pos(100.5,qd);
    return {sc:sc,qd:qd,sMove:s0&&s1?Math.hypot(s1[0]-s0[0],s1[1]-s0[1]):null,qMove:q0&&q1?Math.hypot(q1[0]-q0[0],q1[1]-q0[1]):null}})()`);
  line(mv.sc != null && mv.sMove > 0.01, `moving scout id ${mv.sc} moved ${mv.sMove && mv.sMove.toFixed(4)} dish units between tick 100.0 and 100.5 (want > 0.01 = 2.5 um)`);
  line(mv.qd != null && mv.qMove < 0.01, `quad native id ${mv.qd} moved ${mv.qMove && mv.qMove.toFixed(4)} dish units (want < 0.01 = 2.5 um jitter)`);
  // (c)
  const COUNT = (hide) => `(function(){var g=__la.gl();g.resetView();g.noBoulders=${hide};g.setTick(150);g.frame(performance.now());var gl=g.eng.gl,w=gl.drawingBufferWidth,h=gl.drawingBufferHeight,px=new Uint8Array(w*h*4);gl.readPixels(0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,px);
    var pink=0,vio=0,grn=0;for(var i=0;i<px.length;i+=4){var r=px[i],gg=px[i+1],b=px[i+2];
      if(r>150&&r>gg+60&&b>gg+10&&r>b)pink++;
      if(b>150&&b>r+30&&r>gg+25)vio++;
      if(gg>110&&gg>r+40&&b<gg*0.6)grn++}
    g.noBoulders=false;return {pink:pink,vio:vio,grn:grn}})()`;
  const on = await ev(COUNT(false)), off = await ev(COUNT(true));
  line(on.pink > 30 && on.vio > 200 && on.grn > 400, `tick 150 pixels: pink ${on.pink}, violet ${on.vio}, green ${on.grn} (want pink > 30, violet > 200, green > 400)`);
  line(off.grn < 0.05 * on.grn + 20, `boulders hidden: green ${off.grn} (was ${on.grn}; want near zero)`);
  // (d)
  const loc = await ev(`(function(){var g=__la.gl(),o={};['colony','thinning','food'].forEach(function(k){var ok=true,pts=[];for(var t=0;t<=300;t+=25){var p=g.locate(k,t);if(p===null){var fr=__la.S.run.frames[t],sn=0;for(var q=0;q<fr.n;q++)if((fr.k[q]&7)===0)sn++;if(sn>0)ok=false;continue}pts.push(p);if(!(p.x*p.x+p.y*p.y<=1))ok=false}o[k]={ok:ok,n:pts.length,at150:g.locate(k,150)}});
    var c=true;for(var t=0;t<=300;t+=25){var q=g.colonyAt(t);if(!(q[0]*q[0]+q[1]*q[1]<=1))c=false}o.colonyAt=c;return o})()`);
  line(loc.food.ok && loc.food.at150 && loc.food.n > 0, `locate('food') inside dish at all sampled ticks (n=${loc.food.n}; at 150 ${JSON.stringify(loc.food.at150)})`);
  line(loc.colony.ok && !!loc.colony.at150, `locate('colony') inside dish (n=${loc.colony.n}; at 150 ${JSON.stringify(loc.colony.at150)}); thinning ok=${loc.thinning.ok} n=${loc.thinning.n}`);
  line(loc.colonyAt === true, 'colonyAt(t) inside dish at t = 0..300 step 25');
  // (e)
  const kv = await ev(`(function(){var g=__la.gl(),r=__la.S.run;g.view.zoom=3;g.view.cx=0.2;g.view.cy=-0.1;g.setTick(120);var r2=Object.assign({},r);r2.__second=true;
    g.setRun(r2,r.dish,r.build,{keepView:true});var ok1=g.view.zoom===3&&g.view.cx===0.2&&g.view.cy===-0.1&&g.tick===120&&g.run===r2&&g.ag===true;
    g.setRun(r,r.dish,r.build,{keepView:true});g.frame(performance.now());return {ok1:ok1,after:[g.view.zoom,g.view.cx,g.view.cy,g.tick],ag:g.ag,sc:g.stats().scouts}})()`);
  line(kv.ok1 && kv.after[0] === 3 && kv.after[3] === 120 && kv.sc > 0, `keepView second run keeps view and tick: ${JSON.stringify(kv)}`);
  // (f)
  const ft = await ev(`(function(){var g=__la.gl();g.resetView();g.setTick(150);g.warm=99;var gl=g.eng.gl,p=new Uint8Array(4),i,t0,sum=0,cpu=0;for(i=0;i<5;i++){g.frame(performance.now());gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,p)}
    for(i=0;i<60;i++){t0=performance.now();g.frame(t0+i*16);var t1=performance.now();gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,p);sum+=performance.now()-t0;cpu+=t1-t0}return {total:sum/60,cpu:cpu/60,size:[g.eng.W,g.eng.H]}})()`);
  line(ft.total < 8, `mean frame time over 60 frames at tick 150: ${ft.total.toFixed(2)} ms with synchronous readback (CPU submit ${ft.cpu.toFixed(2)} ms), drawing buffer ${ft.size.join('x')} (want < 8 ms)`);
  console.log('PIXEL-H3 ' + (out.every(Boolean) ? 'PASS' : 'FAIL'));
};

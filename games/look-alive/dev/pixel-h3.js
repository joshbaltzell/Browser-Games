// Look Alive habitat 3 pixel test:  node games/look-alive/dev/cdp-drive.js games/look-alive/dev/pixel-h3.js
// Dish 15 (agent dish): the WebGL microscope draws every recorded individual from run.frames.
// (a) scout and native instance counts equal the recorded counts at ticks 0, 100, 200
// (b) between tick 100.0 and 100.5 a moving scout's drawn position moves; a quad native's does not (more than jitter)
// (c) tick 150 frame has pink, violet and green pixels; green drops to near zero with boulders hidden (g.noBoulders = true)
// (d) locate('food'|'colony'|'thinning') and colonyAt return points inside the dish
// (e) setRun(..., { keepView: true }) keeps view and tick
// (f) mean frame time over 60 frames at tick 150 under 8 ms (CPU submit plus a synchronous 1 px readback)
// (g) dish 17 (the bright place): water inside the light band is brighter than water outside it, away from cells and boulders, and the core is brighter than the band;
//     the same measure on dish 15 (same places) finds no patch
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

  // (g) the light on dish 17, measured on water pixels only (every pixel near a recorded cell or boulder is left out)
  const MEASURE = (t, geo) => `(function(){var g=__la.gl(),r=__la.S.run;g.resetView();g.setTick(${t});g.frame(performance.now());
    var gl=g.eng.gl,W=gl.drawingBufferWidth,H=gl.drawingBufferHeight,px=new Uint8Array(W*H*4);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,px);
    var sc=g.scNow,R=g.agR,geo=${JSON.stringify(geo)},fr=r.frames[${t}],k16=2*R/65535,bad=new Uint8Array(W*H),i,j;
    function mark(wx,wy,rad){var cx=W/2+wx*sc,cy=H/2+wy*sc,r2=rad*rad,x0=Math.max(0,Math.floor(cx-rad)),x1=Math.min(W-1,Math.ceil(cx+rad)),y0=Math.max(0,Math.floor(cy-rad)),y1=Math.min(H-1,Math.ceil(cy+rad));for(var y=y0;y<=y1;y++)for(var x=x0;x<=x1;x++)if((x-cx)*(x-cx)+(y-cy)*(y-cy)<=r2)bad[y*W+x]=1}
    for(i=0;i<fr.n;i++)mark((fr.x[i]*k16-R)/R,(fr.y[i]*k16-R)/R,16);
    (r.boulders||[]).forEach(function(b){if(${t}>=b.birth&&(b.death==null||${t}<b.death+8))mark(b.x/R,b.y/R,Math.max(30,b.sigma*0.9/R*sc))});
    var cx0=geo.x/R,cy0=geo.y/R,rb=geo.r/R,rc=geo.core/R,acc={core:[0,0],band:[0,0],out:[0,0]};
    for(var y=0;y<H;y++){var yt=H-1-y,wy=(yt-H/2)/sc;for(var x=0;x<W;x++){if(bad[yt*W+x])continue;var wx=(x-W/2)/sc,rd=Math.hypot(wx,wy);if(rd>0.9)continue;var ld=Math.hypot(wx-cx0,wy-cy0),o=(y*W+x)*4,lum=(px[o]*0.3+px[o+1]*0.59+px[o+2]*0.11),key=ld<rc*0.7?'core':(ld>rc*1.2&&ld<rb*0.8)?'band':ld>rb*1.08?'out':null;if(key){acc[key][0]+=lum;acc[key][1]++}}}
    function m(a){return a[1]?a[0]/a[1]:null}
    return {core:m(acc.core),band:m(acc.band),out:m(acc.out),n:[acc.core[1],acc.band[1],acc.out[1]]}})()`;
  if (await ev(`!!LookAliveLevels.dish(17)`)) {
    await a.eval(`__la.selectDish(17);__la.show('adapt');1`); await a.sleep(600);
    await a.eval(`__la.run();__la.S.playing=false;1`); await a.sleep(500);
    const lg = await ev(`(function(){var l=__la.S.run.light;if(!l)return null;var T=l.x.length-1,best=null;for(var t=40;t<=T-20;t+=10){var d=Math.hypot(l.x[t],l.y[t]);if(!best||d>best.d)best={t:t,d:d}}   /* the tick with the patch furthest to one side, so there is bare water outside it */return {t:best.t,x:l.x[best.t],y:l.y[best.t],r:l.r,core:l.core,T:T}})()`);
    line(!!lg, 'dish 17 run carries run.light ' + JSON.stringify(lg));
    if (lg) {
      const m17 = await ev(MEASURE(lg.t, lg)); console.log('  dish 17 light at tick ' + lg.t + ' (patch pushed to one side): water luma core ' + (m17.core && m17.core.toFixed(1)) + ', band ' + (m17.band && m17.band.toFixed(1)) + ', outside ' + (m17.out && m17.out.toFixed(1)) + ', pixels ' + m17.n.join('/'));
      line(m17.band != null && m17.out != null && m17.band - m17.out > 6, `band water is brighter than water outside the patch by ${m17.band && m17.out ? (m17.band - m17.out).toFixed(1) : 'n/a'} (want > 6)`);
      line(m17.core != null && m17.band != null && m17.core - m17.band > 25, `core is brighter than the band by ${m17.core && m17.band ? (m17.core - m17.band).toFixed(1) : 'n/a'} (want > 25)`);
      await a.eval(`__la.selectDish(15);__la.show('adapt');__la.setBuild({pace:4,slop:3,metabolism:'respiration',parts:['flagellum'],reflex:null});__la.run();__la.S.playing=false;1`); await a.sleep(600);
      const m15 = await ev(MEASURE(lg.t, lg)); console.log('  dish 15 at the same places: core ' + (m15.core && m15.core.toFixed(1)) + ', band ' + (m15.band && m15.band.toFixed(1)) + ', outside ' + (m15.out && m15.out.toFixed(1)));
      line(await ev(`__la.S.run.light==null`), 'dish 15 run has no run.light');
      line(m15.band != null && m15.out != null && Math.abs(m15.band - m15.out) < 3 && m15.core != null && Math.abs(m15.core - m15.out) < 4, `dish 15 shows no patch: band minus outside ${m15.band && m15.out ? (m15.band - m15.out).toFixed(1) : 'n/a'}, core minus outside ${m15.core && m15.out ? (m15.core - m15.out).toFixed(1) : 'n/a'} (want within 3 and 4)`);
    }
  } else line(false, 'dish 17 does not exist yet');
  console.log('PIXEL-H3 ' + (out.every(Boolean) ? 'PASS' : 'FAIL'));
};

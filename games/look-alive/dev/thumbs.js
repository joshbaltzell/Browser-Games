// REDUCED=1 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/thumbs.js    writes assets/thumbs/dish-1.jpg .. dish-10.jpg
const fs=require('fs'),path=require('path');
module.exports=async(a)=>{const out=path.resolve(__dirname,'../assets/thumbs');fs.mkdirSync(out,{recursive:true});
 const IDS=process.env.IDS?process.env.IDS.split(",").map(Number):[1,2,3,4,5,6,7,8,9,10];   // IDS=11,12,13,14 renders the habitat-2 thumbnails
 for(const id of IDS){
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

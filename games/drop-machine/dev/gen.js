// Search tool: node dev/gen.js '<json specs [{type,len,angle,mode?,div?}]>' gapSteps  -> prints candidate geometry
const DM = require('../sim.js'); const sd = 60/110/4;
const specs = JSON.parse(process.argv[2]), gap = +process.argv[3];
const out=[];
for (const dir of [1,-1]) for (const X0 of [50,90,130,230,270,310]) for (const y0 of [100,140]) for (const ang of [10,15,20]) for (const g of [gap-1,gap,gap+1]) {
  const m = DM.newMachine(); const p = m.pits[0]; p.dropperX = X0;
  const mk=(sp,x,y,k)=>DM.addPart(m,p,Object.assign({},sp,{x,y,angle: sp.type==='pad'?sp.angle:(k%2?-1:1)*dir*ang}));
  mk(specs[0],X0+10*dir,y0,0); let ok=true;
  for(let k=1;k<specs.length;k++){
    const r=DM.simulatePit(p,m); const h=r.hits.filter(h=>h.partId===p.parts[k-1].id)[0]; if(!h){ok=false;break;}
    const P=r.path; let bi=-1; for(let i=1;i<P.x.length;i++) if(i*P.dt>=h.t+g*sd){bi=i;break;} if(bi<0){ok=false;break;}
    mk(specs[k],Math.round(P.x[bi]/10)*10,Math.round((P.y[bi]+10)/10)*10,k);
  }
  if(!ok||p.parts.some(q=>q.x<30||q.x>330||q.y>600)) continue;
  const r=DM.simulatePit(p,m); const first=p.parts.map(q=>r.hits.findIndex(h=>h.partId===q.id));
  if(first.some(i=>i<0)||first.some((v,i)=>i&&v<first[i-1])) continue;
  const ts=r.hits.map(h=>h.t/sd); if(ts[ts.length-1]>15) continue;
  out.push({n:r.hits.length,end:r.end,X0,y0,ang,g,dir,seq:r.hits.map(h=>h.partId).join(''),first:ts[0].toFixed(1),last:ts[ts.length-1].toFixed(1),parts:p.parts.map(q=>[q.x,q.y,q.len,q.angle])});
}
out.sort((a,b)=>a.n-b.n); out.slice(0,5).forEach(o=>console.log(JSON.stringify(o))); console.log(out.length);

// Search tool for preset geometry: node dev/chain.js big,small,medium,small 2,2,2  (gaps in sixteenths)
const DM = require('../sim.js'); const sd = 60/110/4;
const sizes = process.argv[2].split(','), gaps = process.argv[3].split(',').map(Number);
const tag = (sz) => sz;
let best = [];
for (const sign0 of [1,-1]) for (const X0 of [40,70,100,140,180,220,260,290,320]) for (const y0 of [120,160,200,250]) for (const off of [2,4,6,8,10]) {
  const m = DM.newMachine(); const p = m.pits[0]; p.life = 4; p.dropperX = X0; let sign = sign0;
  const len0 = DM.partLen({type:'drum',size:sizes[0]});
  DM.addPart(m,p,{type:'drum',size:sizes[0],x:X0 - sign*(len0/2+off),y:y0,bounce:'musical'});
  let ok = true;
  for (let k=1;k<sizes.length;k++){
    const r = DM.simulatePit(p,m); const h = r.hits[r.hits.length-1]; if(!h){ok=false;break;}
    const P=r.path; let bi=-1; for(let i=1;i<P.x.length;i++) if(i*P.dt>=h.t+gaps[k-1]*sd){bi=i;break;}
    if(bi<0){ok=false;break;}
    sign = Math.sign(P.x[bi]-P.x[bi-1])||1; const len=DM.partLen({type:'drum',size:sizes[k]});
    const last = k===sizes.length-1;
    DM.addPart(m,p,{type:'drum',size:sizes[k],x:Math.round((P.x[bi]-sign*(len/2+off))/10)*10,y:Math.round((P.y[bi]+12)/10)*10,bounce:last?'sticky':'musical'});
  }
  if(!ok) continue;
  const r = DM.simulatePit(p,m); const ids=r.hits.map(h=>h.partId);
  if (ids.join('')!==sizes.map((_,i)=>i+1).join('')) continue;
  if (p.parts.some(q=>q.x<30||q.x>330||q.y>600)) continue;
  let err=0; for(let i=1;i<r.hits.length;i++) err+=Math.abs((r.hits[i].t-r.hits[i-1].t)/sd-gaps[i-1]);
  best.push({err,X0,y0,off,sign0,first:(r.hits[0].t/sd).toFixed(2),parts:p.parts.map(q=>[q.size,q.x,q.y])});
}
best.sort((a,b)=>a.err-b.err); best.slice(0,4).forEach(b=>console.log(JSON.stringify(b)));
console.log(best.length);

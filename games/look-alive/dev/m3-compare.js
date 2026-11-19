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

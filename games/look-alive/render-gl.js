// Look Alive: WebGL2 dish renderer ("dark field with depth and haze"). Plain script, file:// safe, no libraries.
// Global LookAliveRender:
//   create(canvas, opts) -> dish renderer { supported, setRun, setTick, frame, rackFocus, setQuality, resize, destroy, stats, signature, ... }
//   portrait(canvas)     -> big single-cell picture for the Adapt screen { supported, draw(slots, o), tick(ts), resize, destroy }
// Ported from docs/superpowers/plans/2026-11-16-look-alive/graphics-lab.html (instanced signed-distance cells, depth as edge softness,
// bokeh, cloud pass, haze field, bloom, hue-preserving tone map). The stand-in simulation there is replaced by the real snapshots.
var LookAliveRender = (function () {
  'use strict';

  // ---------------------------------------------------------------- tuning (all in one place; see NOTES.md)
  var TUNE = {
    tiers: { phone: 5000, laptop: 20000, high: 50000 },
    tierScale: { phone: 0.8, laptop: 1, high: 1 },      // render resolution multiplier
    nativeFill: 0.9, robotFill: 0.9,                    // candidate individuals per species, as a fraction of the tier budget
    topP: 1.3,                                          // density (as a multiple of the starting native density) that shows every candidate
    voidFloor: 0.0, voidLo: 0.46, voidHi: 0.63, voidFreq: 4.2,        // visual colony mask: smoothstep of low-frequency noise (natives)
    robotMask: 0.45,                                    // how strongly robots follow the colony mask (0 = ignore, 1 = same as natives)
    blur: 0.6, focus: 0.5, tol: 0.17,                   // blur strength, focal plane, in-focus half band
    rackBoost: 1.6, rackDur: 2.0, rackFreq: 0.6, rackDecay: 3.0, rackStart: -1.35, rackExposure: 0.45,
    screenCells: { phone: 150, laptop: 300, high: 520 }, robotBoost: 1.7, boostLo: 0.06, boostUntil: 0.22, cellR: 0.0050, minPxN: 3.1, minPxR: 3.7, cloud: 0.25,
    immSpread: 0.6, immOrbit: 0.35, immRadius: 0.04, immRate: 0.16, immRoam: 0.35,   // immune cells: how tightly they converge on the colony, orbit speed (rad/s), orbit radius
    glint: 1.0, pulseSize: 0.22, pulseGlow: 0.9,
    zoomMax: 16, jumpZoom: 2.1,
    bloom: 0.35, bloomThr: 0.8, vignette: 1, chroma: 1, grain: 1,
    slowMs: 30, slowFrames: 50
  };

  var INT_RE = /^i[A-Z]/;
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function smooth(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  function mul(seed) { return function () { seed = (seed + 0x6D2B79F5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function hash32(a, b, c) { var h = (Math.imul(a | 0, 0x9E3779B1) ^ Math.imul(b | 0, 0x85EBCA6B) ^ Math.imul(c | 0, 0xC2B2AE35)) | 0; h = Math.imul(h ^ (h >>> 15), 0x2C1B3C6D); h = Math.imul(h ^ (h >>> 12), 0x297A2D39); return (h ^ (h >>> 15)) >>> 0; }
  // value noise for the colony mask (deterministic, no state)
  function hv(ix, iy, s) { return hash32(ix, iy, s) / 4294967296; }
  function vnoise(x, y, s) {
    var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    var a = hv(ix, iy, s), b = hv(ix + 1, iy, s), c = hv(ix, iy + 1, s), d = hv(ix + 1, iy + 1, s);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  }
  function fbm(x, y, s) { var a = 0.5, t = 0, i; for (i = 0; i < 4; i++) { t += a * vnoise(x, y, s + i * 7); x = x * 2.03 + 17.1; y = y * 2.03 + 9.2; a *= 0.5; } return t; }

  // ---------------------------------------------------------------- GLSL
  var GL_COMMON = [
    'const vec3 C_NAT=vec3(0.655,0.545,0.980);',
    'const vec3 C_ROB=vec3(1.0,0.42,0.584);',
    'const vec3 C_AMB=vec3(0.961,0.647,0.141);',
    'const vec3 C_IMM=vec3(0.176,0.827,0.655);',
    'float sq(float x){return x*x;}',
    'float h11(float p){p=fract(p*.1031);p*=p+33.33;p*=p+p;return fract(p);}',
    'float h21(vec2 p){vec3 p3=fract(vec3(p.xyx)*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}',
    'float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}',
    'float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*vn(p);p=p*2.03+vec2(17.1,9.2);a*=.5;}return s;}'
  ].join('\n');

  var VS_FULL = '#version 300 es\nvoid main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));gl_Position=vec4(p*2.-1.,0.,1.);}';

  // background: dish field, rim, waste haze, acid ambient, immune glow, acid fizz
  var FS_BG = [
    '#version 300 es', 'precision highp float; precision highp int;',
    'uniform vec2 uRes,uCen; uniform float uScale,uTime,uBgBlur,uAcid,uHaze,uDish,uFizz; uniform sampler2D uF;',
    'out vec4 o;', GL_COMMON,
    'void main(){',
    '  vec2 px=gl_FragCoord.xy; px.y=uRes.y-px.y;',
    '  vec2 w=(px-.5*uRes)/uScale+uCen;',
    '  float rd=length(w);',
    '  float aa=1.4/uScale, bb=uBgBlur/uScale;',
    '  float inside=uDish>.5?1.-smoothstep(1.-aa-bb,1.+aa+bb,rd):1.;',
    '  float rr2=length(px-.5*uRes)/min(uRes.x,uRes.y);',
    '  vec3 base=vec3(.004,.004,.013)+vec3(.012,.006,.03)*smoothstep(.3,1.,rd)*uDish+vec3(.03,.034,.06)*(1.-smoothstep(0.,.7,rr2))*(1.-uDish);',
    '  vec3 c=mix(vec3(0.),base,inside);',
    '  if(uHaze>.5){',
    '    vec2 fuv=(w+1.)/2.; vec4 F=texture(uF,fuv);',
    '    float inb=step(abs(w.x),1.)*step(abs(w.y),1.);',
    '    float wst=F.r*inb, imu=F.g*inb, fzl=F.b*inb;',
    '    float tt=uTime*.06; vec2 q=w*2.6;',
    '    vec2 warp=vec2(fbm(q+vec2(tt,0.)),fbm(q*1.1+vec2(5.2,1.3)-vec2(0.,tt)));',
    '    float hz=fbm(q*1.3+warp*1.8+tt*.5);',
    '    float bf=clamp(uBgBlur/18.,0.,.85); hz=mix(hz,.5,bf);',
    '    float haze=smoothstep(.12,.92,hz);',
    '    vec3 hc=C_AMB*wst*(.06+1.0*haze*haze)*.5+C_IMM*imu*(.08+.9*haze)*.6;',
    '    float ac=uAcid;',
    '    hc+=vec3(.78,.82,.18)*ac*(.012+.28*haze*haze)*inside;',
    '    vec2 gq=mat2(.8,.6,-.6,.8)*w*38.; vec2 id=floor(gq); float hh=h21(id); vec2 fq=fract(gq)-.5-(vec2(h21(id+3.1),h21(id+7.7))-.5)*.5;',
    '    float ph=fract(uTime*(.4+hh)+hh*7.);',
    '    float fz=exp(-sq((length(fq)-ph*(.2+.28*h21(id+1.7)))/.05))*(1.-ph)*step(.55,hh)*uFizz*min(1.,fzl*4.)*inside;',
    '    hc+=vec3(1.,.85,.45)*fz*1.4;',
    '    c+=hc*inside;',
    '  }',
    '  if(uDish>.5){',
    '    float ring=exp(-sq((rd-1.)/(.0065+bb*.9)));',
    '    float outer=exp(-max(rd-1.,0.)/.045)*step(1.,rd);',
    '    c+=vec3(.50,.40,.95)*(ring*.95+outer*.16);',
    '  }',
    '  o=vec4(c,1.);',
    '}'].join('\n');

  var VS_CELL = [
    '#version 300 es', 'precision highp float; precision highp int;',
    'layout(location=0) in vec2 aCorner;',
    'layout(location=1) in vec4 aA;', // x y r ang
    'layout(location=2) in vec4 aB;', // species depth phase hl
    'layout(location=3) in vec4 aC;', // pinch dissolve seam tail
    'layout(location=4) in vec4 aD;', // fade engulf dormant -
    'uniform vec2 uRes,uCen; uniform float uScale,uFocus,uK,uTol,uZoom,uDepth,uEnv,uEE,uHead,uShell,uPump;',
    'out vec2 vP; out float vR,vHs,vBlur,vDep,vPh; flat out float vSp; out vec4 vC,vD;',
    'void main(){',
    '  float rpx=aA.z*uScale, pin=aC.x;',
    '  float hs=rpx*aB.w;',
    '  float hpx=hs*(1.+.9*pin)+rpx*.9*pin;',
    '  float b=0.;',
    '  if(uDepth>.5) b=clamp(max(abs(aB.y-uFocus)-uTol,0.)*uK*(.55+.45*sqrt(uZoom)),0.,72.);',
    '  float tail=aC.w*rpx*4.4;',
    '  float ee=uEE>0.?uEE:max(2.,.07*rpx);',
    '  float pad=2.5+b*1.5+ee*3.*step(.5,uEnv)+rpx*.6*step(.5,uHead+uShell+uPump);',
    '  float ex=hpx+rpx+tail+pad, ey=rpx+pad+(aC.w>.5?rpx*.75:0.)+(aB.x<.5?rpx*.55:0.);',
    '  if(aB.x>1.5&&aB.x<2.5){ex=rpx*1.5+pad;ey=ex;}',
    '  vec2 p=aCorner*vec2(ex,ey);',
    '  vec2 pos=(aA.xy-uCen)*uScale+.5*uRes;',
    '  float ca=cos(aA.w),sa=sin(aA.w);',
    '  vec2 pp=pos+vec2(ca*p.x-sa*p.y,sa*p.x+ca*p.y);',
    '  gl_Position=vec4(pp.x/uRes.x*2.-1.,1.-pp.y/uRes.y*2.,0.,1.);',
    '  vP=p; vR=rpx; vHs=hs; vBlur=b; vDep=aB.y; vPh=aB.z; vSp=aB.x; vC=aC; vD=aD;',
    '}'].join('\n');

  var FS_CELL = [
    '#version 300 es', 'precision highp float; precision highp int;',
    'in vec2 vP; in float vR,vHs,vBlur,vDep,vPh; flat in float vSp; in vec4 vC,vD;',
    'uniform float uTime,uGranK,uEnv,uCloud,uScale,uEE,uTight,uPump,uShell,uAcidIn,uSync,uHead,uReflex,uCore,uRefA,uPulse,uPort,uPG,uGlint;',
    'out vec4 o;', GL_COMMON,
    'float hexd(vec2 p,float r){p=abs(p);return max(p.x*.8660254+p.y*.5,p.y)-r*.8660254;}',
    'void main(){',
    '  float sp=vSp;',
    '  bool rob=sp>.5&&sp<1.5, imm=sp>1.5&&sp<2.5;',
    '  vec3 col=sp<.5?C_NAT:(rob?C_ROB:(imm?C_IMM:C_AMB));',
    '  col=pow(col,vec3(1.5))*(sp<.5?1.12:(rob?1.5:1.12));',
    '  float r=vR, bl=vBlur;',
    '  float pin=vC.x, dis=max(vC.y,0.), seam=vC.z, tailF=vC.w, fade=vD.x, eng=vD.y, dorm=vD.z;',
    '  vec3 colI=col;',
    '  if(rob){',
    '    col=mix(col,pow(C_IMM,vec3(1.5))*1.12,eng*.8); colI=col;',
    '    if(uAcidIn>.5) colI=mix(colI,vec3(1.,.5,.12),.62);',
    '    col=mix(col,vec3(.60,.40,.52),dorm*.5); colI=mix(colI,vec3(.60,.40,.52),dorm*.5);',
    '  }',
    '  float rr=r*(1.-.3*dis)*(1.-.3*eng);',
    '  float h2=vHs*(1.+.9*pin)+r*.9*pin;',
    '  float d; vec2 g; vec2 wp=vP;',
    '  if(imm){',
    '    float a=atan(vP.y,vP.x);',
    '    float w=1.+.15*sin(3.*a+uTime*1.6+vPh*20.)+.09*sin(5.*a-uTime*2.3+vPh*9.)+.05*sin(2.*a+uTime*.8);',
    '    float L=length(vP)+1e-4; d=L-rr*w; g=vP/L; h2=0.;',
    '  } else {',
    '    float wob=1.;',
    '    if(sp<.5){',
    '      float nv=smoothstep(3.4,7.,rr);',
    '      float bnd=(h11(vPh*5.3+1.7)-.5)*1.1*smoothstep(.3,1.2,h2/max(rr,1.));',
    '      float u1=clamp(vP.x/(h2+rr+1.),-1.,1.);',
    '      wp.y=vP.y-nv*rr*bnd*(u1*u1-.33);',
    '      float aw=atan(wp.y,vP.x-clamp(vP.x,-h2,h2));',
    '      wob=1.+nv*(.10*sin(aw*2.+vPh*40.)+.07*sin(aw*3.+vPh*17.)+.10*(h11(vPh*9.1)-.5)*u1);',
    '    }',
    '    float x=clamp(wp.x,-h2,h2); vec2 q=vec2(wp.x-x,wp.y); float L=length(q)+1e-4;',
    '    float pr=(1.-.82*pin*pin*exp(-sq(vP.x/(.42*(h2+rr)+1.))))*wob;',
    '    d=L-rr*pr; g=q/L;',
    '  }',
    '  float soft=.7+bl*.85;',
    '  float fill=1.-smoothstep(-soft,soft,d);',
    '  float t=clamp(-d/max(rr,.5),0.,1.);',
    '  if(rr<3.2&&bl<2.5){',
    '    float rm=exp(-sq((d+.9)/max(1.,.12*rr+bl*.5)));',
    '    vec3 cs=col*(fill*.2+rm*.6)*(1.-.45*dorm);',
    '    if(sp<.5){ float cn=exp(-sq(vP.x/(h2*.5+rr*.7))-sq(vP.y/(rr*.55))); cs=col*(fill*(.34-.14*cn*0.)+rm*.62+cn*fill*.16*smoothstep(2.2,3.2,rr))*(1.-.45*dorm); }',
    '    float vs=1.; if(uCloud>.5) vs=smoothstep(2.,4.5,rr+h2);',
    '    float kp=1.-dis;',
    '    o=vec4(cs*(1.-fade)*vs*kp*(1.+uPG*.6*uPulse*float(rob)),1.);return;',
    '  }',
    '  float lodv=smoothstep(2.5,7.,rr);',
    '  float big=smoothstep(12.,45.,rr);',
    '  vec2 np=vP/max(rr,1.)*2.2+vPh*31.+vec2(uTime*.04,-uTime*.03);',
    '  float mot=vn(np)*.6+vn(np*2.3)*.4;',
    '  float gran=0.;',
    '  if(!rob||uPort>.5){',
    '    for(int i=0;i<6;i++){',
    '      float fi=float(i);',
    '      vec2 gp=vec2((h11(vPh*13.1+fi)-.5)*2.*(h2+rr*.5),(h11(vPh*7.7+fi*3.1)-.5)*rr*1.0);',
    '      gp+=.12*rr*vec2(sin(uTime*.35+fi*2.1+vPh*9.),cos(uTime*.3+fi*1.7+vPh*5.));',
    '      float gs=rr*(.09+.12*h11(vPh*3.3+fi*5.))+.5;',
    '      vec2 dd=vP-gp; gran+=exp(-dot(dd,dd)/(gs*gs));',
    '    }',
    '  }',
    '  float latt=0.,seamLine=0.;',
    '  if(rob){',
    '    float u=max(rr*.36,2.0); vec2 hp=vP/u; vec2 rv=vec2(1.,1.732); vec2 hh=rv*.5;',
    '    vec2 a=mod(hp,rv)-hh; vec2 b2=mod(hp-hh,rv)-hh; vec2 gv=dot(a,a)<dot(b2,b2)?a:b2;',
    '    vec2 aa=abs(gv); float hd=max(dot(aa,normalize(vec2(1.,1.732))),aa.x); float e=.5-hd;',
    '    latt=exp(-dot(gv,gv)*10.);',
    '    seamLine=1.-smoothstep(0.,1.1/u+.015,e);',
    '  }',
    '  float att=1./(1.+sq(bl/(rr+2.))*.9);',
    '  float mB=smoothstep(2.5,14.,bl);',
    '  float Rd=rr+h2*.6+bl*.55;',
    '  float db=length(vP)-Rd; float sb=1.+Rd*.16;',
    '  float fillB=1.-smoothstep(-sb,sb,db);',
    '  float ringB=exp(-sq((db+sb*.8)/(sb*.9)));',
    '  float areaK=clamp(rr*(rr+h2)*2.4/(Rd*Rd),.03,1.);',
    '  float rimW=max(1.,.10*rr)*(rob?1.+1.1*uTight:1.)+bl*.5;',
    '  float rim=exp(-sq((d+rimW*.8)/rimW));',
    '  float spec=pow(max(dot(-g,normalize(vec2(-.55,-.85))),0.),6.)*rim;',
    '  float edgeGlow=exp(-max(d,0.)/(.9+.12*rr+bl*.5))*step(0.,d)*.35;',
    '  vec3 rimc=mix(col,vec3(1.),.16);',
    '  float dk=1.-dorm;',
    '  vec3 nb=vec3(0.);',
    '  if(sp<.5){',
    '    float nd=smoothstep(2.6,5.,rr);',
    '    float bodyG=.06+.34*pow(1.-t,2.);',
    '    float nuc=exp(-sq(wp.y/(rr*.38))-sq((vP.x-(h11(vPh*2.9)-.5)*h2*.8)/(max(h2,rr*.5)*.55+rr*.35)));',
    '    float gn=0.;',
    '    for(int i=0;i<5;i++){ float fi=float(i); vec2 gq=vec2((h11(vPh*17.3+fi*2.7)-.5)*2.*(h2+rr*.45),(h11(vPh*11.1+fi*4.3)-.5)*rr*.95); gq+=.1*rr*vec2(sin(uTime*.4+fi*2.3+vPh*7.),cos(uTime*.33+fi*1.9+vPh*3.)); vec2 gd=wp-gq; float gz=rr*(.12+.10*h11(vPh*4.7+fi*3.7))+.4; gn+=exp(-dot(gd,gd)/(gz*gz)); }',
    '    nb=(col*4.*(bodyG*(.6+.8*mot)+nuc*.1)*fill+mix(col,vec3(1.),.5)*gn*fill*1.3*smoothstep(.12,.45,t))*nd*(1.-.65*dorm);',
    '    nb+=col*fill*.05*(1.-nd);',
    '  }',
    '  vec3 s=nb+col*fill*.07',
    '   +(rimc*(rim*.78*(1.+.5*dorm+1.1*uPort)+edgeGlow*.7)+vec3(spec)*.22)',
    '   +colI*fill*(.03+.12*pow(1.-t,1.5))*mix(.45+1.1*mot,.75+.45*mot,uPort)*mix(.6,1.,lodv)*(1.+1.3*big+(rob?0.:1.6)*smoothstep(4.,10.,rr))*(1.-.65*dorm)',
    '   +mix(rob?vec3(1.,.62,.2):col,vec3(1.),.4)*(gran*(.55+.6*big))*fill*lodv*uGranK',
    '   +col*fill*exp(-sq(vP.y/(rr*.55)))*sq(sq(clamp(1.-abs(vP.x)/(h2+rr*.9),0.,1.)))*.07*big*(rob?0.:1.);',
    '  if(rob){',
    '    s+=mix(col,vec3(1.),.3)*latt*fill*(.55+.5*uSync-.35*uPort)*lodv*uGranK*dk*(1.+.6*uSync*uPulse);',
    '    s+=mix(col,vec3(1.),.55)*seamLine*(seam+.55*uSync+.16*uPort)*fill*1.25*lodv*dk;',
    '    s+=vec3(.75,1.,1.)*exp(-sq(hexd(vP,rr*1.05)/(.9+.03*rr)))*seam*uGlint*(.55+1.6*uPulse)*smoothstep(2.5,4.5,rr)*dk;',
    '    float ee=uEE>0.?uEE:max(2.,.07*rr);',
    '    if(uShell>.5){',
    '      float hx=hexd(vP,rr*1.16);',
    '      s+=vec3(.37,.82,1.)*(exp(-sq(hx/(.9+.025*rr+bl*.4)))*.95+exp(-sq((hexd(vP,rr*1.0))/(.8+bl*.4)))*.35)*smoothstep(2.5,6.,rr);',
    '    } else {',
    '      for(int k=1;k<3;k++){ if(float(k)<=uEnv+.01){ float wk=(.75+bl*.4)*(k==1?1.+1.0*uTight:1.); s+=col*exp(-sq((d-float(k)*ee)/wk))*((.65+.5*uTight*float(2-k))/float(k)); } }',
    '    }',
    '    if(uPump>.5){',
    '      float an=atan(vP.y,vP.x); float sec=6.2831853/10.; float kk=floor(an/sec+.5); float aa2=kk*sec;',
    '      vec2 pc=vec2(cos(aa2),sin(aa2));',
    '      float dd1=length(vP-pc*rr)-max(.9,.06*rr); float dd2=length(vP-pc*rr*1.3)-max(.6,.035*rr);',
    '      s+=vec3(1.,.72,.2)*(exp(-sq(dd1/(.7+bl*.4)))*.9+exp(-sq(dd2/(.6+bl*.4)))*.7)*smoothstep(3.,7.,rr)*dk;',
    '    }',
    '    if(uHead>.5){',
    '      for(int k=0;k<3;k++){ float ak=uTime*.35+float(k)*2.094+vPh*6.28; vec2 pc=vec2(cos(ak),sin(ak))*rr*(1.55+.1*float(k)); float dd=length(vP-pc)-max(.8,.05*rr); s+=C_AMB*exp(-sq(dd/(.7+bl*.4)))*.85*smoothstep(3.,6.,rr); }',
    '    }',
    '    if(uReflex>.5){',
    '      vec2 pc=vec2(cos(uRefA),sin(uRefA))*(rr+uEnv*ee); float rdp=max(1.1,.11*rr);',
    '      float dd=uReflex>1.5?hexd(vP-pc,rdp*1.9):length((vP-pc)*vec2(.62,1.))-rdp;',
    '      vec3 rc=uReflex>1.5?vec3(.25,.65,.85):vec3(.08,.7,.45);',
    '      s+=rc*(exp(-sq(dd/(.7+bl*.4)))*.8+.5*(1.-smoothstep(-.5,.5,dd)))*smoothstep(3.,6.,rr);',
    '    }',
    '    if(uCore>.5){',
    '      vec3 cc=uCore<1.5?vec3(1.,.55,.7):(uCore<2.5?vec3(1.,.7,.25):vec3(.37,.82,1.));',
    '      float cdd=length(vP)-rr*.24;',
    '      s+=cc*(exp(-dot(vP,vP)/(rr*rr*.05))*.55+(1.-smoothstep(-1.,1.,cdd))*.8+exp(-sq(cdd/(1.+.012*rr)))*.6)*smoothstep(14.,40.,rr)*fill;',
    '    }',
    '    s*=1.+uPG*uPulse;',
    '  }',
    '  vec3 bok=col*(fillB*.30+ringB*.55)*areaK*.42;',
    '  if(tailF>.5){',
    '    float s0=-vP.x-(h2+rr*.78); float Lt=rr*4.;',
    '    if(s0>0.&&s0<Lt){',
    '      float u2=s0/Lt; float amp=rr*.45*(.25+u2);',
    '      float yc=amp*sin(s0/(rr*1.15)-uTime*5.5+vPh*6.28);',
    '      float tw=max(.55,.10*rr)*(1.-.45*u2)+bl*.6;',
    '      float tv=exp(-sq((vP.y-yc)/tw))*(1.-u2*u2)*smoothstep(2.5,6.,rr)*att;',
    '      vec3 tc=rob?C_AMB:mix(col,vec3(1.),.35);',
    '      s+=tc*tv*.85;',
    '    }',
    '  }',
    '  vec3 rgb=mix(s*att,bok,mB);',
    '  if(dis>.001){',
    '    float nn=vn(vP/max(rr,1.)*2.6+vPh*40.)*.7+.3*clamp(length(vP)/(h2+rr+1.),0.,1.);',
    '    float th=dis*1.15;',
    '    float keep=smoothstep(th-.12,th+.02,nn);',
    '    float burn=exp(-sq((nn-th+.04)/.07))*smoothstep(-2.,1.,-d);',
    '    rgb=rgb*keep*(1.+.6*sin(dis*3.14))+vec3(1.,.72,.28)*burn*1.4;',
    '  }',
    '  float vis=1.; if(uCloud>.5) vis=smoothstep(2.,4.5,rr+h2);',
    '  o=vec4(rgb*(1.-fade)*vis,1.);',
    '}'].join('\n');

  var VS_CLOUD = [
    '#version 300 es', 'precision highp float; precision highp int;',
    'layout(location=0) in vec2 aCorner; layout(location=1) in vec4 aA; layout(location=2) in vec4 aB; layout(location=3) in vec4 aC; layout(location=4) in vec4 aD;',
    'uniform vec2 uRes,uCen; uniform float uScale,uFocus,uK,uTol,uZoom,uDepth,uCloudK;',
    'out vec2 vP; out float vSig,vAmp; flat out float vSp; out float vFade;',
    'void main(){',
    '  float rpx=aA.z*uScale, hpx=rpx*aB.w;',
    '  float b=0.;',
    '  if(uDepth>.5) b=clamp(max(abs(aB.y-uFocus)-uTol,0.)*uK*(.55+.45*sqrt(uZoom)),0.,72.);',
    '  float sig=(rpx+hpx)*1.05+2.5+b*.7;',
    '  float vis=smoothstep(2.,4.5,rpx+hpx);',
    '  vec2 p=aCorner*sig*2.35;',
    '  vec2 pos=(aA.xy-uCen)*uScale+.5*uRes+p;',
    '  gl_Position=vec4(pos.x/uRes.x*2.-1.,1.-pos.y/uRes.y*2.,0.,1.);',
    '  vP=p; vSig=sig;',
    '  float s1=rpx+hpx+1.;',
    '  vAmp=(1.-vis)*clamp(.32*s1*s1/(sig*sig),.01,.2)*(1.-aD.x)*(1.-.5*clamp(aC.y,0.,1.))*(1.-.35*aD.z)*(1.-.3*aD.y)*uCloudK;',
    '  vSp=aB.x; vFade=aD.x;',
    '}'].join('\n');
  var FS_CLOUD = [
    '#version 300 es', 'precision highp float; precision highp int;',
    'in vec2 vP; in float vSig,vAmp; flat in float vSp; in float vFade;',
    'out vec4 o;',
    'const vec3 C_NAT=vec3(0.655,0.545,0.980); const vec3 C_ROB=vec3(1.0,0.42,0.584); const vec3 C_AMB=vec3(0.961,0.647,0.141); const vec3 C_IMM=vec3(0.176,0.827,0.655);',
    'void main(){',
    '  float gg=max(exp(-dot(vP,vP)/(2.*vSig*vSig))-.063,0.)*vAmp*1.07;',
    '  vec3 col=vSp<.5?C_NAT:(vSp<1.5?C_ROB:(vSp<2.5?C_IMM:C_AMB));',
    '  col=pow(col,vec3(1.5))*1.12;',
    '  o=vec4(col*gg*1.15,1.);',
    '}'].join('\n');

  // specks: dust, food, out-of-focus lens specks, acid bubbles
  var VS_SPECK = [
    '#version 300 es', 'precision highp float; precision highp int;',
    'layout(location=0) in vec2 aCorner; layout(location=1) in vec4 aS; layout(location=2) in vec4 aT;',
    'uniform vec2 uRes,uCen; uniform float uScale,uFocus,uK,uTol,uZoom,uDepth;',
    'out vec2 vP; out float vR,vB,vH,vAl,vKind,vPh;',
    'void main(){',
    '  float kind=aT.x; float szpx; vec2 pos; float b;',
    '  if(kind<.5||kind>1.5){ szpx=aS.z*uScale; pos=(aS.xy-uCen)*uScale+.5*uRes;',
    '    b=uDepth>.5?clamp(max(abs(aS.w-uFocus)-uTol,0.)*uK*(.55+.45*sqrt(uZoom)),0.,72.):0.; }',
    '  else { szpx=aS.z; pos=aS.xy*uRes; b=aS.w; }',
    '  float R=max(szpx*.5,.55)+b*.6;',
    '  float ext=R*1.5+3.;',
    '  vec2 p=aCorner*ext; vec2 pp=pos+p;',
    '  gl_Position=vec4(pp.x/uRes.x*2.-1.,1.-pp.y/uRes.y*2.,0.,1.);',
    '  vP=p; vR=R; vB=b; vH=aT.z; vAl=aT.w; vKind=kind; vPh=aT.y;',
    '}'].join('\n');
  var FS_SPECK = [
    '#version 300 es', 'precision highp float; precision highp int;',
    'in vec2 vP; in float vR,vB,vH,vAl,vKind,vPh;',
    'out vec4 o;',
    'void main(){',
    '  float d=length(vP)-vR;',
    '  float sf=1.+vR*.16+vB*.1;',
    '  float fill=1.-smoothstep(-sf,sf,d);',
    '  float ring=exp(-((d+sf*.8)/(sf*.9))*((d+sf*.8)/(sf*.9)));',
    '  float amp=clamp(vR*vR*.9/((vR+vB)*(vR+vB)+1.),.05,1.);',
    '  vec3 c=vH<.5?vec3(.72,.78,1.):(vH<.8?vec3(.96,.65,.14):vec3(.65,.55,.98));',
    '  float I;',
    '  if(vKind>1.5){ I=ring*.9+fill*.05; vec2 hp=vP-vec2(-.3,-.3)*vR; I+=exp(-dot(hp,hp)/(vR*vR*.05+.5))*.7*smoothstep(2.,5.,vR); c=vec3(1.,.85,.5); }',
    '  else if(vB<1.5){ I=fill*.7+ring*.2; }',
    '  else { I=fill*.28+ring*.5; }',
    '  I*=amp*vAl;',
    '  o=vec4(c*I,1.);',
    '}'].join('\n');

  var FS_BRIGHT = [
    '#version 300 es', 'precision highp float; precision highp int; uniform sampler2D uS; uniform vec2 uPx; uniform float uThr;', 'out vec4 o;',
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy*uPx*2.;',
    '  vec3 c=texture(uS,uv+uPx*vec2(-.5,-.5)).rgb+texture(uS,uv+uPx*vec2(.5,-.5)).rgb+texture(uS,uv+uPx*vec2(-.5,.5)).rgb+texture(uS,uv+uPx*vec2(.5,.5)).rgb;',
    '  c*=.25; vec3 b=max(c-uThr,0.); o=vec4(b*1.5,1.);',
    '}'].join('\n');
  var FS_DOWN = [
    '#version 300 es', 'precision highp float; precision highp int; uniform sampler2D uS; uniform vec2 uPx;', 'out vec4 o;',
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy*uPx*2.;',
    '  vec3 c=texture(uS,uv+uPx*vec2(-.5,-.5)).rgb+texture(uS,uv+uPx*vec2(.5,-.5)).rgb+texture(uS,uv+uPx*vec2(-.5,.5)).rgb+texture(uS,uv+uPx*vec2(.5,.5)).rgb;',
    '  o=vec4(c*.25,1.);',
    '}'].join('\n');
  var FS_BLUR = [
    '#version 300 es', 'precision highp float; precision highp int; uniform sampler2D uS; uniform vec2 uDir,uPx;', 'out vec4 o;',
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy*uPx;',
    '  vec3 c=texture(uS,uv).rgb*.2270270;',
    '  c+=(texture(uS,uv+uDir*1.3846153).rgb+texture(uS,uv-uDir*1.3846153).rgb)*.3162162;',
    '  c+=(texture(uS,uv+uDir*3.2307692).rgb+texture(uS,uv-uDir*3.2307692).rgb)*.0702702;',
    '  o=vec4(c,1.);',
    '}'].join('\n');
  var FS_COMP = [
    '#version 300 es', 'precision highp float; precision highp int;',
    'uniform sampler2D uS,uB1,uB2; uniform vec2 uRes; uniform float uBloom,uVig,uChroma,uGrain,uExp,uTime;', 'out vec4 o;', GL_COMMON,
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy/uRes; vec2 cc=uv-.5; float rad=dot(cc,cc);',
    '  vec3 c; float k=.03*uChroma;',
    '  c.r=texture(uS,uv+cc*rad*k).r; c.g=texture(uS,uv).g; c.b=texture(uS,uv-cc*rad*k).b;',
    '  vec3 b=texture(uB1,uv).rgb*.24+texture(uB2,uv).rgb*.4;',
    '  c+=b*uBloom;',
    '  float v=1.-uVig*.66*smoothstep(.26,.80,length(cc)*1.18);',
    '  c*=v*uExp;',
    '  c=max(c,0.); float mx=max(max(c.r,c.g),max(c.b,1e-4)); vec3 hp=c/mx*(1.-exp(-mx*1.15)); vec3 pc=1.-exp(-c*1.5); c=mix(pc,hp,.78); c=pow(c,vec3(.93));',
    '  float n=h21(gl_FragCoord.xy+fract(uTime*3.7)*113.)-.5;',
    '  float n2=h21(gl_FragCoord.xy*.5+fract(uTime*1.3)*71.)-.5;',
    '  float lum=dot(c,vec3(.33));',
    '  c+=(n+n2*.5)*uGrain*.06*(1.15-lum);',
    '  c+=(h21(gl_FragCoord.xy)-.5)/255.;',
    '  o=vec4(max(c,0.),1.);',
    '}'].join('\n');

  // ---------------------------------------------------------------- engine: programs, buffers, targets, one frame
  var FG = 64;
  function Engine(cv, mode, o) {
    this.cv = cv; this.mode = mode; this.o = o || {}; this.ok = false; this.err = '';
    this.W = 0; this.H = 0; this.px = 1; this.qScale = 1; this.targets = {}; this.t0 = 0;
    this.gpuMs = -1; this.cpuMs = 0; this.name = 'unknown';
    var gl = null;
    try { gl = cv.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'high-performance' }); } catch (e) { gl = null; }
    this.gl = gl;
    if (!gl) { this.err = 'WebGL2 is not available'; return; }
    try { this.init(); this.ok = true; } catch (e) { this.err = String(e && e.message || e); }
  }
  Engine.prototype.prog = function (vs, fs) {
    var gl = this.gl;
    function mk(t, s) { var sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh); if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh)); return sh; }
    var p = gl.createProgram(); gl.attachShader(p, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(p, mk(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    return { h: p, u: {}, tx: null };
  };
  Engine.prototype.U = function (p, vals) {
    var gl = this.gl, k, l, v; gl.useProgram(p.h);
    for (k in vals) {
      l = p.u[k]; if (l === undefined) l = p.u[k] = gl.getUniformLocation(p.h, k); if (l === null) continue;
      v = vals[k];
      if (INT_RE.test(k)) gl.uniform1i(l, v);
      else if (typeof v === 'number') gl.uniform1f(l, v);
      else if (v.length === 2) gl.uniform2f(l, v[0], v[1]);
      else if (v.length === 4) gl.uniform4f(l, v[0], v[1], v[2], v[3]);
    }
    if (p.tx) for (k in p.tx) { l = gl.getUniformLocation(p.h, k); if (l) gl.uniform1i(l, p.tx[k]); }
  };
  Engine.prototype.init = function () {
    var gl = this.gl;
    this.floatOK = !!gl.getExtension('EXT_color_buffer_float');
    gl.getExtension('OES_texture_float_linear');
    this.timer = gl.getExtension('EXT_disjoint_timer_query_webgl2');
    var dbg = gl.getExtension('WEBGL_debug_renderer_info');
    this.name = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : String(gl.getParameter(gl.RENDERER));
    this.pBg = this.prog(VS_FULL, FS_BG); this.pCell = this.prog(VS_CELL, FS_CELL); this.pCloud = this.prog(VS_CLOUD, FS_CLOUD);
    this.pSpeck = this.prog(VS_SPECK, FS_SPECK); this.pBright = this.prog(VS_FULL, FS_BRIGHT); this.pDown = this.prog(VS_FULL, FS_DOWN);
    this.pBlur = this.prog(VS_FULL, FS_BLUR); this.pComp = this.prog(VS_FULL, FS_COMP);
    this.vaoEmpty = gl.createVertexArray();
    var quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    this.quad = quad;
    this.cellBuf = gl.createBuffer(); this.vaoCell = gl.createVertexArray();
    this.speckBuf = gl.createBuffer(); this.vaoSpeck = gl.createVertexArray();
    this.setCaps(this.o.cap || 64, this.o.speckCap || 64);
    this.fieldTex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, this.fieldTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, FG, FG, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  };
  Engine.prototype.setCaps = function (cap, scap) {
    var gl = this.gl, k;
    this.ICAP = cap; this.inst = new Float32Array(cap * 16);
    gl.bindVertexArray(this.vaoCell);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.cellBuf); gl.bufferData(gl.ARRAY_BUFFER, cap * 64, gl.DYNAMIC_DRAW);
    for (k = 0; k < 4; k++) { gl.enableVertexAttribArray(1 + k); gl.vertexAttribPointer(1 + k, 4, gl.FLOAT, false, 64, k * 16); gl.vertexAttribDivisor(1 + k, 1); }
    this.SCAP = scap; this.spk = new Float32Array(scap * 8);
    gl.bindVertexArray(this.vaoSpeck);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.speckBuf); gl.bufferData(gl.ARRAY_BUFFER, scap * 32, gl.DYNAMIC_DRAW);
    for (k = 0; k < 2; k++) { gl.enableVertexAttribArray(1 + k); gl.vertexAttribPointer(1 + k, 4, gl.FLOAT, false, 32, k * 16); gl.vertexAttribDivisor(1 + k, 1); }
    gl.bindVertexArray(null);
  };
  Engine.prototype.mkTarget = function (w, h, flt) {
    var gl = this.gl, tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
    if (flt) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
    else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    var fb = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, fb); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    return { tex: tex, fb: fb, w: w, h: h };
  };
  // Size the drawing buffer to the canvas. Returns true if the size changed.
  Engine.prototype.resize = function () {
    var cv = this.cv, r = cv.getBoundingClientRect(), cssW = Math.max(2, Math.round(r.width)), cssH = Math.max(2, Math.round(r.height));
    var px = Math.min(window.devicePixelRatio || 1, 2) * this.qScale, budget = this.o.budget || 1.8e6;
    if (cssW * cssH * px * px > budget) px = Math.sqrt(budget / (cssW * cssH));
    var W = Math.max(2, Math.round(cssW * px)), H = Math.max(2, Math.round(cssH * px));
    if (W === this.W && H === this.H && this.targets.scene) return false;
    this.W = W; this.H = H; this.px = px; this.cssW = cssW; this.cssH = cssH; cv.width = W; cv.height = H;
    if (!this.ok) return true;
    var gl = this.gl, T = this.targets, k, f = this.floatOK;
    for (k in T) { gl.deleteTexture(T[k].tex); gl.deleteFramebuffer(T[k].fb); }
    var hw = Math.max(2, W >> 1), hh = Math.max(2, H >> 1), qw = Math.max(2, W >> 2), qh = Math.max(2, H >> 2);
    this.targets = { scene: this.mkTarget(W, H, f), a: this.mkTarget(hw, hh, f), b: this.mkTarget(hw, hh, f), c: this.mkTarget(qw, qh, f), d: this.mkTarget(qw, qh, f) };
    return true;
  };
  // P: { n, ns, cx, cy, sc, zoom, focus, K, tol, depth, bgBlur, acid, fizz, time, exposure, cloud, dish, haze, bloom, vig, chroma, grain, field, bld }
  Engine.prototype.render = function (P) {
    var gl = this.gl, T = this.targets, W = this.W, H = this.H, n = P.n, ns = P.ns, t0 = performance.now(), q = null;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.cellBuf); if (n) gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.inst, 0, n * 16);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.speckBuf); if (ns) gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.spk, 0, ns * 8);
    if (P.field) { gl.bindTexture(gl.TEXTURE_2D, this.fieldTex); gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, FG, FG, gl.RGBA, gl.UNSIGNED_BYTE, P.field); }
    var b = P.bld || {};
    var common = { uRes: [W, H], uCen: [P.cx, P.cy], uScale: P.sc, uFocus: P.focus, uK: P.K, uTol: P.tol, uZoom: P.zoom, uDepth: P.depth, uTime: P.time };
    if (this.timer && !this.qBusy) { q = gl.createQuery(); gl.beginQuery(this.timer.TIME_ELAPSED_EXT, q); }
    gl.disable(gl.DEPTH_TEST); gl.disable(gl.CULL_FACE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, T.scene.fb); gl.viewport(0, 0, W, H);
    gl.disable(gl.BLEND);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.fieldTex);
    this.pBg.tx = { uF: 0 };
    this.U(this.pBg, { uRes: [W, H], uCen: [P.cx, P.cy], uScale: P.sc, uTime: P.time, uBgBlur: P.bgBlur, uAcid: P.acid, uFizz: P.fizz, uHaze: P.haze, uDish: P.dish });
    gl.bindVertexArray(this.vaoEmpty); gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE);
    gl.bindVertexArray(this.vaoCell);
    if (P.cloud && n) { this.U(this.pCloud, Object.assign({}, common, { uCloudK: P.cloudK })); gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, n); }
    this.U(this.pCell, Object.assign({}, common, {
      uGranK: 1, uEnv: b.env || 0, uCloud: P.cloud ? 1 : 0, uEE: b.ee || 0, uTight: b.tight || 0, uPump: b.pump || 0, uShell: b.shell || 0, uAcidIn: b.acidIn || 0, uSync: b.sync || 0,
      uHead: b.head || 0, uReflex: b.reflex || 0, uCore: b.core || 0, uRefA: b.refA || 0, uPulse: P.pulse || 0, uPG: P.pulseGlow == null ? 0.3 : P.pulseGlow, uGlint: P.glint || 0, uPort: this.mode === 'portrait' ? 1 : 0
    }));
    if (n) gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, n);
    if (ns) { gl.bindVertexArray(this.vaoSpeck); this.U(this.pSpeck, common); gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, ns); }
    gl.disable(gl.BLEND);
    gl.bindVertexArray(this.vaoEmpty);
    var bloomOn = P.bloom > 0;
    if (bloomOn) {
      var bind = function (tg, src) { gl.bindFramebuffer(gl.FRAMEBUFFER, tg.fb); gl.viewport(0, 0, tg.w, tg.h); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, src.tex); };
      var self = this, blur = function (dst, src, dx, dy) { bind(dst, src); self.pBlur.tx = { uS: 0 }; self.U(self.pBlur, { uPx: [1 / dst.w, 1 / dst.h], uDir: [dx / dst.w, dy / dst.h] }); gl.drawArrays(gl.TRIANGLES, 0, 3); };
      bind(T.a, T.scene); this.pBright.tx = { uS: 0 }; this.U(this.pBright, { uPx: [1 / W, 1 / H], uThr: P.bloomThr || 0.6 }); gl.drawArrays(gl.TRIANGLES, 0, 3);
      blur(T.b, T.a, 1, 0); blur(T.a, T.b, 0, 1);
      bind(T.c, T.a); this.pDown.tx = { uS: 0 }; this.U(this.pDown, { uPx: [1 / T.a.w, 1 / T.a.h] }); gl.drawArrays(gl.TRIANGLES, 0, 3);
      blur(T.d, T.c, 1.8, 0); blur(T.c, T.d, 0, 1.8);
      if (!P.lowBloom) { blur(T.d, T.c, 3, 0); blur(T.c, T.d, 0, 3); }
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, W, H);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, T.scene.tex);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, T.a.tex);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, T.c.tex);
    this.pComp.tx = { uS: 0, uB1: 1, uB2: 2 };
    this.U(this.pComp, { uRes: [W, H], uBloom: bloomOn ? P.bloom : 0, uVig: P.vig, uChroma: P.chroma, uGrain: P.grain, uExp: P.exposure, uTime: P.time });
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.activeTexture(gl.TEXTURE0);
    if (q) { gl.endQuery(this.timer.TIME_ELAPSED_EXT); this.qBusy = q; }
    else if (this.qBusy) {
      var qq = this.qBusy;
      if (gl.getQueryParameter(qq, gl.QUERY_RESULT_AVAILABLE)) {
        if (!gl.getParameter(this.timer.GPU_DISJOINT_EXT)) this.gpuMs = gl.getQueryParameter(qq, gl.QUERY_RESULT) / 1e6;
        gl.deleteQuery(qq); this.qBusy = null;
      }
    }
    this.cpuMs += ((performance.now() - t0) - this.cpuMs) * 0.1;
  };
  Engine.prototype.destroy = function () {
    try { var e = this.gl && this.gl.getExtension('WEBGL_lose_context'); if (e) e.loseContext(); } catch (x) { /* ignore */ }
    this.ok = false;
  };

  // ---------------------------------------------------------------- build features -> shader flags
  function buildFlags(slots, mach) {
    var env = (slots && slots.envelope) || [], b = { env: 0, tight: 0, pump: 0, shell: 0, acidIn: 0, sync: 0, head: 0, reflex: 0, core: 0 };
    if (!slots) return b;
    if (env.length && env[0] === 'shell') { b.shell = 1; }
    else {
      b.env = env.length;
      env.forEach(function (id) { if (id === 'pump') b.pump = 1; else if (id === 'lipids') b.tight = 1; else if (id === 'wall') b.tight = Math.max(b.tight, 0.6); });
    }
    b.acidIn = slots.insides === 'acidproof' ? 1 : 0;
    b.sync = slots.division === 'clock' ? 1 : 0;
    b.head = slots.signal === 'quorum' ? 1 : 0;
    b.reflex = slots.reflex ? (slots.reflex.kind === 'machine' ? 2 : 1) : 0;
    b.core = slots.power === 'fuelcell' ? 3 : slots.power === 'fermentation' ? 2 : slots.power ? 1 : 0;
    b.naps = slots.division === 'naps' || slots.division === 'errors' ? 1 : 0;
    b.motor = slots.motor ? 1 : 0;
    b.mach = mach || 0;
    return b;
  }

  // ---------------------------------------------------------------- dish renderer
  function Dish(canvas, opts) {
    var self = this; opts = opts || {};
    this.cv = canvas; this.opts = opts; this.host = opts.host || canvas.parentNode; this.reduced = !!opts.reduced;
    this.supported = false; this.err = ''; this.lost = false; this.onfail = opts.onfail || null;
    this.eng = new Engine(canvas, 'dish', {});
    if (!this.eng.ok) { this.err = this.eng.err; return; }
    this.supported = true;
    this.tierName = opts.tier || (window.matchMedia && window.matchMedia('(pointer:coarse)').matches && Math.min(screen.width, screen.height) < 700 ? 'phone' : 'laptop');
    this.run = null; this.tick = 0; this.time = 0; this.lastTs = 0; this.visible = true; this.frames = 0;
    this.view = { cx: 0, cy: 0, zoom: 1 }; this.anim = null; this.exposure = 1; this.focusBase = TUNE.focus; this.focus = TUNE.focus;
    this.dust = []; this.lens = [];
    var R = mul(4242), i, a, d;
    for (i = 0; i < 150; i++) { a = R() * 6.283; d = Math.sqrt(R()) * 1.05; this.dust.push({ x: Math.cos(a) * d, y: Math.sin(a) * d, s: 0.0025 + 0.009 * R() * R() * 2, z: R(), h: R(), ph: R() }); }
    for (i = 0; i < 34; i++) this.lens.push({ x: R(), y: R(), s: 6 + 30 * R() * R(), b: 8 + 22 * R(), h: R() * 0.5, al: 0.035 + 0.07 * R(), ph: R() });
    this.field = new Uint8Array(FG * FG * 4);
    this.cand = null;
    this.ft = 16; this.slowCount = 0; this.warm = 30; this.stepped = []; this.fpsAvg = 60;
    this.gpuTimes = {};
    this.buildOverlay();
    this.setQuality(this.tierName, true);
    this.bindInput();
    canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); if (self.destroyed) return; self.lost = true; self.supported = false; self.err = 'WebGL context lost'; if (self.onfail) self.onfail('context lost'); });
    if ('IntersectionObserver' in window) { this.io = new IntersectionObserver(function (es) { es.forEach(function (e) { self.visible = e.isIntersecting; }); }, { rootMargin: '40px' }); this.io.observe(canvas); }
    this.eng.resize();
  }

  Dish.prototype.buildOverlay = function () {
    var self = this, host = this.host; if (!host) return;
    var box = document.createElement('div'); box.className = 'dishui';
    box.innerHTML = '<div class="dscale" aria-hidden="true"><i></i><span></span></div>' +
      '<label class="dq" title="Cells drawn: Phone 5,000, Laptop 20,000, High 50,000. Steps down by itself if frames are slow."><span class="dqk">Detail</span><select aria-label="Dish detail"><option value="phone">5k</option><option value="laptop">20k</option><option value="high">50k</option></select></label>' +
      '<div class="dhint" aria-hidden="true">scroll to zoom, drag to move, double-click to reset</div><div class="dnote" role="status" hidden></div><div class="dthin" aria-hidden="true" hidden>Thinned view. Zoom in for every cell.</div>';
    host.appendChild(box); this.ui = box;
    this.uiScale = box.querySelector('.dscale'); this.uiSel = box.querySelector('select'); this.uiHint = box.querySelector('.dhint'); this.uiNote = box.querySelector('.dnote'); this.uiThin = box.querySelector('.dthin');
    this.uiSel.value = this.tierName;
    this.uiSel.addEventListener('change', function () { self.setQuality(self.uiSel.value); });
    this.hintTimer = setTimeout(function () { if (self.uiHint) self.uiHint.style.opacity = '0'; }, 6000);
  };
  Dish.prototype.note = function (msg) { if (!this.uiNote) return; this.uiNote.textContent = msg || ''; this.uiNote.hidden = !msg; };

  // ---- quality tiers and the fixed pool of candidate individuals
  Dish.prototype.setQuality = function (name, silent) {
    if (!TUNE.tiers[name]) name = 'laptop';
    this.tierName = name; this.C = TUNE.tiers[name];
    if (this.uiSel) this.uiSel.value = name;
    this.eng.qScale = TUNE.tierScale[name];
    this.eng.setCaps(Math.ceil(this.C * 1.45) + 600, Math.min(9000, Math.ceil(this.C * 0.22) + 800));
    this.eng.W = 0; this.eng.resize();
    this.buildCands();
    this.slowCount = 0; this.warm = 30; this.ft = 16;
  };
  Dish.prototype.maskAt = function (x, y) {   // visual colony mask for natives: 0 in the gaps, 1 inside colonies
    var c = fbm(x * TUNE.voidFreq * 0.55 + 3.7, y * TUNE.voidFreq * 0.55 + 1.3, 91), w = smooth(TUNE.voidLo, TUNE.voidHi, c);      // colonies
    var v = 1 - Math.abs(2 * fbm(x * TUNE.voidFreq + 8.1, y * TUNE.voidFreq + 4.4, 55) - 1), vein = smooth(0.72, 0.93, v) * smooth(0.3, 0.5, c);    // thin filaments between them
    return TUNE.voidFloor + (1 - TUNE.voidFloor) * Math.max(w, vein * 0.85);
  };
  Dish.prototype.buildCands = function () {
    var n = 64, C = this.C, i, x, y, cx, cy, cells = 0, mwN = 0, k, j, cnt = 0, self = this;
    this.gn = n;
    // normalisers: mean mask value over the disc, so the total number of individuals does not depend on the mask
    var ms = 0, mr = 0, nm = 0, gx, gy;
    for (gy = 0; gy < 96; gy++) for (gx = 0; gx < 96; gx++) {
      x = (gx + 0.5) / 48 - 1; y = (gy + 0.5) / 48 - 1; if (x * x + y * y > 1) continue;
      var m = this.maskAt(x, y); ms += m; mr += 1 - TUNE.robotMask + TUNE.robotMask * m; nm++;
    }
    var mN = ms / nm, mR = mr / nm;
    for (j = 0; j < n * n; j++) { cx = ((j % n) + 0.5) / n * 2 - 1; cy = (((j / n) | 0) + 0.5) / n * 2 - 1; if (cx * cx + cy * cy < 1.06) cells++; }
    var kbN = TUNE.nativeFill * C / cells, kbR = TUNE.robotFill * C / cells;
    var ss = clamp(Math.pow(1500 / C, 0.35), 0.45, 1.15) * 1.7; this.ss = ss;
    function species(spc, kb, mn, maskFn) {
      var cap = Math.ceil(kb * cells / mn * 1.2) + 64, o = {
        x: new Float32Array(cap), y: new Float32Array(cap), ci: new Uint16Array(cap), th: new Float32Array(cap), ph: new Float32Array(cap), sz: new Float32Array(cap), dep: new Float32Array(cap),
        hl: new Float32Array(cap), ang: new Float32Array(cap), g4: new Float32Array(cap), g1: new Float32Array(cap), g2: new Float32Array(cap), g3: new Float32Array(cap), tail: new Uint8Array(cap), n: 0
      }, c;
      for (c = 0; c < n * n; c++) {
        var col = c % n, row = (c / n) | 0, mx = (col + 0.5) / n * 2 - 1, my = (row + 0.5) / n * 2 - 1;
        if (mx * mx + my * my > 1.06) continue;
        var R = mul(hash32(c, spc, 17)), K = kb / mn, kk = Math.floor(K) + (R() < K - Math.floor(K) ? 1 : 0), q;
        for (q = 0; q < kk; q++) {
          var px = (col + R()) / n * 2 - 1, py = (row + R()) / n * 2 - 1, rr = px * px + py * py, acc = R(), g = function () { return (R() + R() + R() + R() - 2) * 1.73; };
          var h1 = R(), h2 = R(), h3 = R(), th = R(), ph = R(), a = R() * 6.2832, sz = R(), t1 = R(), dp = g(), hl = R(), sd = R(), h4 = R();
          if (rr > 1.0 || acc > maskFn(px, py) || o.n >= cap) continue;
          var i2 = o.n++;
          o.x[i2] = px; o.y[i2] = py; o.ci[i2] = c; o.th[i2] = th; o.ph[i2] = ph; o.sz[i2] = sz; o.ang[i2] = a; o.g1[i2] = h1; o.g2[i2] = h2; o.g3[i2] = h3; o.g4[i2] = h4;
          if (spc === 0) {
            o.dep[i2] = clamp(0.5 + dp * 0.12, 0, 1); var coc = hl < 0.25; o.hl[i2] = coc ? sd * 0.25 : 0.8 + 1.5 * sd; o.tail[i2] = t1 < 0.3 ? 1 : 0;
          } else { o.dep[i2] = clamp(0.5 + dp * 0.016, 0, 1); o.hl[i2] = hl * 0.12; o.tail[i2] = 0; }
        }
      }
      return o;
    }
    this.nat = species(0, kbN, mN, function (x, y) { return self.maskAt(x, y); });
    this.rob = species(1, kbR, mR, function (x, y) { return 1 - TUNE.robotMask + TUNE.robotMask * self.maskAt(x, y); });
    // food specks: identity by hash, shown while the food field is high at their spot
    var nF = Math.min(7000, Math.round(C * 0.12)), RF = mul(777), fo = { x: new Float32Array(nF), y: new Float32Array(nF), ci: new Uint16Array(nF), th: new Float32Array(nF), sz: new Float32Array(nF), z: new Float32Array(nF), ph: new Float32Array(nF), n: 0 };
    while (fo.n < nF) {
      x = RF() * 2 - 1; y = RF() * 2 - 1; var s2 = RF(), s3 = RF(), s4 = RF(), s5 = RF();
      if (x * x + y * y > 0.98) continue;
      i = fo.n++; fo.x[i] = x; fo.y[i] = y; fo.ci[i] = Math.min(n - 1, ((y + 1) / 2 * n) | 0) * n + Math.min(n - 1, ((x + 1) / 2 * n) | 0); fo.th[i] = s2; fo.sz[i] = 0.0016 + 0.0016 * s3; fo.z[i] = s4; fo.ph[i] = s5;
    }
    this.food = fo;
    // immune cells: identities (rim start, colony target offsets, depth)
    var RI = mul(31337), NI = 170; this.imm = { n: NI, a: new Float32Array(NI), tx: new Float32Array(NI), ty: new Float32Array(NI), ph: new Float32Array(NI), h: new Float32Array(NI), sz: new Float32Array(NI), dep: new Float32Array(NI) };
    for (i = 0; i < NI; i++) {
      this.imm.a[i] = RI() * 6.2832; this.imm.tx[i] = (RI() + RI() + RI() - 1.5) * 0.45; this.imm.ty[i] = (RI() + RI() + RI() - 1.5) * 0.45;
      this.imm.ph[i] = RI(); this.imm.h[i] = RI(); this.imm.sz[i] = 0.9 + 0.3 * RI(); this.imm.dep[i] = clamp(0.62 + (RI() - 0.5) * 0.2, 0, 1);
    }
    // guard routes: a slow meander through the dish per cell (two slow sinusoids with their own rates, phases, amplitudes and home point), deterministic in time
    var RW = mul(5150); this.imm.rw = new Float32Array(NI * 8);
    for (i = 0; i < NI; i++) {
      var hr = Math.sqrt(RW()) * 0.62, ha = RW() * 6.2832, b8 = i * 8;
      this.imm.rw[b8] = TUNE.immRate * (0.55 + 0.9 * RW()); this.imm.rw[b8 + 1] = TUNE.immRate * (0.55 + 0.9 * RW());
      this.imm.rw[b8 + 2] = RW() * 6.2832; this.imm.rw[b8 + 3] = RW() * 6.2832;
      this.imm.rw[b8 + 4] = Math.cos(ha) * hr; this.imm.rw[b8 + 5] = Math.sin(ha) * hr;
      this.imm.rw[b8 + 6] = TUNE.immRoam * (0.6 + 0.8 * RW()); this.imm.rw[b8 + 7] = TUNE.immRoam * (0.6 + 0.8 * RW());
    }
    this.cellCount = this.nat.n + this.rob.n;
    this.fieldBuf = { N: new Float32Array(n * n), R: new Float32Array(n * n), W: new Float32Array(n * n), F: new Float32Array(n * n), Z: new Float32Array(n * n) };
    this.pN = new Float32Array(n * n); this.pR = new Float32Array(n * n); this.pF = new Float32Array(n * n); this.dz = new Float32Array(n * n);
    this.tickKey = -1;
  };

  // ---- the run
  Dish.prototype.setRun = function (run, dish, build, extra) {
    extra = extra || {};
    this.run = run; this.D = dish; this.build = build; this.slots = extra.slots || null; this.mach = extra.machine || 0; this.bf = buildFlags(this.slots, this.mach);
    var H = run.H, T = run.T, n = run.n, nn = n * n, S = run.snaps, k, t, i;
    this.T = T; this.tickKey = -1;
    this.agg = S.map(function (sn) {
      var mN = 0, mR = 0, mF = 0, j, bi = 0, bv = -1, bx = 0, by = 0;
      for (j = 0; j < nn; j++) { mN += sn.native[j]; mR += sn.robot[j]; mF += sn.food[j]; }
      // colony focus: the 4x4-cell block with the most robots, weighted centre
      for (var gy = 0; gy < n - 3; gy += 2) for (var gx = 0; gx < n - 3; gx += 2) {
        var s = 0, sx = 0, sy = 0, yy, xx;
        for (yy = 0; yy < 4; yy++) for (xx = 0; xx < 4; xx++) { var v = sn.robot[(gy + yy) * n + gx + xx]; s += v; sx += v * (gx + xx + 0.5); sy += v * (gy + yy + 0.5); }
        if (s > bv) { bv = s; bx = sx / (s || 1); by = sy / (s || 1); }
      }
      return { mN: mN / nn, mR: mR / nn, mF: mF / nn, cx: bx / n * 2 - 1, cy: by / n * 2 - 1 };
    });
    this.ref = H.nat[0] || 0.9; this.food0 = H.food[0] || 0.4;
    // robots fall with a slow release, so acid losses read as a dissolve rather than a blink
    this.lag = new Float32Array(T + 1); this.lag[0] = H.rob[0];
    for (t = 1; t <= T; t++) { var rv = H.rob[t], lv = this.lag[t - 1]; this.lag[t] = rv < lv ? lv + (rv - lv) * 0.13 : rv; }
    // immune presence and closeness as deterministic series of the tick
    var stT = [0, 9, 30, 70], clT = [0, 0.35, 0.72, 1.0], sc = Math.sqrt(this.C / 20000);
    this.iM = new Float32Array(T + 1); this.iC = new Float32Array(T + 1);
    for (t = 1; t <= T; t++) {
      var st = clamp(H.stage[t] | 0, 0, 3);
      this.iM[t] = this.iM[t - 1] + (stT[st] * sc - this.iM[t - 1]) * 0.1; this.iC[t] = this.iC[t - 1] + (clT[st] - this.iC[t - 1]) * 0.07;
    }
    // seam strength: the Naturalness (Regularity) suspicion channel, only when the build has Machine parts
    this.seamS = new Float32Array(T + 1);
    var reg = H.susp && H.susp.regularity, mf = this.mach > 0 ? Math.min(1, 0.45 + 0.3 * this.mach) : 0;
    for (t = 0; t <= T; t++) this.seamS[t] = reg ? clamp(reg[t] / 6, 0, 1) * mf : 0;
    this.resetView(); this.tick = 0; this.anim = null; this.exposure = 1; this.warm = 20; this.slowCount = 0;
    if (this.uiNote) this.note('');
  };
  Dish.prototype.setTick = function (t) { this.tick = t; };

  Dish.prototype.resetView = function () { this.view.cx = 0; this.view.cy = 0; this.view.zoom = 1; this.zoomAnim = null; };
  Dish.prototype.colonyAt = function (t) {
    var si = Math.min(this.agg.length - 1, Math.floor(t / 10)), a = this.agg[si];
    return a ? [a.cx, a.cy] : [0, 0];
  };

  // ---- rack focus: start blurred, hunt past focus once, settle (about 1.5 s). Three moments only: watch, run, jump.
  Dish.prototype.rackFocus = function (kind) {
    if (!this.supported) return;
    if (kind === 'jump') {
      var c = this.colonyAt(this.tick);
      if (this.reduced) { this.view.zoom = TUNE.jumpZoom; this.view.cx = c[0] * 0.6; this.view.cy = c[1] * 0.6; this.clampView(); return; }
      this.anim = { kind: 'jump', t: 0, dur: TUNE.rackDur, z0: this.view.zoom, c0: [this.view.cx, this.view.cy], c1: c, f0: -0.9 };
    } else {
      if (this.reduced) return;
      this.resetView(); this.anim = { kind: kind, t: 0, dur: TUNE.rackDur, f0: kind === 'watch' ? TUNE.rackStart : TUNE.rackStart * 0.9 };
    }
  };
  Dish.prototype.stepAnim = function (dt) {
    var a = this.anim; if (!a) return;
    a.t += dt;
    var hunt = function (t, f0, tg) { return tg + (f0 - tg) * Math.exp(-TUNE.rackDecay * t) * Math.cos(2 * Math.PI * TUNE.rackFreq * t); };
    var e = function (x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
    this.focusBase = hunt(a.t, a.f0, TUNE.focus);
    this.exposure = TUNE.rackExposure + (1 - TUNE.rackExposure) * e(a.t / 1.0);
    if (a.kind === 'jump') {
      var u = e(a.t / 1.7);
      this.view.zoom = a.z0 + (TUNE.jumpZoom - a.z0) * u;
      this.view.cx = a.c0[0] + (a.c1[0] * 0.6 - a.c0[0]) * u; this.view.cy = a.c0[1] + (a.c1[1] * 0.6 - a.c0[1]) * u; this.clampView();
    }
    if (a.t >= a.dur) { this.anim = null; this.focusBase = TUNE.focus; this.exposure = 1; }
  };

  // ---- camera
  Dish.prototype.clampView = function () {
    var v = this.view; v.zoom = clamp(v.zoom, 1, TUNE.zoomMax);
    var lim = Math.max(0, 1 - 0.9 / v.zoom), d = Math.sqrt(v.cx * v.cx + v.cy * v.cy);
    if (d > lim) { v.cx *= lim / d; v.cy *= lim / d; }
  };
  Dish.prototype.baseScale = function () { return Math.min(this.eng.W, this.eng.H) * 0.475; };
  Dish.prototype.bindInput = function () {
    var self = this, cv = this.cv, ptrs = {}, last = null, pinch = 0;
    cv.style.touchAction = 'none';
    function toWorld(e) {
      var r = cv.getBoundingClientRect(), sc = self.baseScale() * self.view.zoom / self.eng.px;
      return [(e.clientX - r.left - r.width / 2) / sc + self.view.cx, (e.clientY - r.top - r.height / 2) / sc + self.view.cy, sc];
    }
    cv.addEventListener('wheel', function (e) {
      e.preventDefault(); if (!self.run) return;
      self.anim = self.anim && self.anim.kind === 'jump' ? null : self.anim;
      var w0 = toWorld(e), z = clamp(self.view.zoom * Math.exp(-e.deltaY * (e.deltaMode ? 0.05 : 0.0016)), 1, TUNE.zoomMax);
      self.view.zoom = z; var w1 = toWorld(e); self.view.cx += w0[0] - w1[0]; self.view.cy += w0[1] - w1[1]; self.clampView(); self.touchedView();
    }, { passive: false });
    cv.addEventListener('pointerdown', function (e) { try { cv.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ } ptrs[e.pointerId] = [e.clientX, e.clientY]; last = [e.clientX, e.clientY]; pinch = 0; self.anim = self.anim && self.anim.kind === 'jump' ? null : self.anim; });
    cv.addEventListener('pointermove', function (e) {
      if (!ptrs[e.pointerId]) return;
      var ids = Object.keys(ptrs), r = cv.getBoundingClientRect();
      ptrs[e.pointerId] = [e.clientX, e.clientY];
      if (ids.length >= 2) {
        var a = ptrs[ids[0]], b = ptrs[ids[1]], dd = Math.hypot(a[0] - b[0], a[1] - b[1]);
        if (pinch > 0) { self.view.zoom = clamp(self.view.zoom * dd / pinch, 1, TUNE.zoomMax); self.clampView(); self.touchedView(); }
        pinch = dd; return;
      }
      if (!last) return;
      var sc = self.baseScale() * self.view.zoom / self.eng.px;
      self.view.cx -= (e.clientX - last[0]) / sc; self.view.cy -= (e.clientY - last[1]) / sc; last = [e.clientX, e.clientY]; self.clampView(); self.touchedView();
    });
    function up(e) { delete ptrs[e.pointerId]; last = Object.keys(ptrs).length ? last : null; pinch = 0; }
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('dblclick', function () { self.resetView(); self.touchedView(); });
  };
  Dish.prototype.touchedView = function () { if (this.uiHint) this.uiHint.style.opacity = '0'; };

  // ---- fields at a tick (interpolated between the 10-tick snapshots, then scaled by the per-tick history)
  Dish.prototype.fieldsAt = function (t) {
    var run = this.run, S = run.snaps, H = run.H, nn = this.gn * this.gn, si = Math.min(S.length - 1, Math.floor(t / 10)), sj = Math.min(S.length - 1, si + 1);
    var f = si === sj ? 0 : clamp((t - S[si].tick) / (S[sj].tick - S[si].tick), 0, 1), A = S[si], B = S[sj], ag = this.agg;
    var ti = Math.min(this.T, Math.floor(t)), tj = Math.min(this.T, ti + 1), tf = t - ti;
    function hs(arr) { return arr[ti] + (arr[tj] - arr[ti]) * tf; }
    var mN = ag[si].mN + (ag[sj].mN - ag[si].mN) * f, mR = ag[si].mR + (ag[sj].mR - ag[si].mR) * f, mF = ag[si].mF + (ag[sj].mF - ag[si].mF) * f;
    var lagv = this.lag[ti] + (this.lag[tj] - this.lag[ti]) * tf;
    var scN = mN > 1e-6 ? hs(H.nat) / mN : 0, scR = mR > 1e-6 ? lagv / mR : 0, scF = mF > 1e-6 ? hs(H.food) / mF : 0;
    var ref = this.ref, top = TUNE.topP, F = this.fieldBuf, i, N = A.native, N2 = B.native, R = A.robot, R2 = B.robot, Fo = A.food, Fo2 = B.food, W = A.waste, W2 = B.waste, Z = A.st.Z, Z2 = B.st.Z, SP = A.st.SP, SP2 = B.st.SP;
    for (i = 0; i < nn; i++) {
      this.pN[i] = clamp((N[i] + (N2[i] - N[i]) * f) * scN / ref, 0, top) / top;
      var rb = R[i] + (R2[i] - R[i]) * f;
      this.pR[i] = clamp(rb * scR / ref, 0, top) / top;
      this.pF[i] = clamp((Fo[i] + (Fo2[i] - Fo[i]) * f) * scF / (this.food0 * 1.35), 0, 1);
      F.W[i] = W[i] + (W2[i] - W[i]) * f;
      var dzv = (Z[i] + (Z2[i] - Z[i]) * f) + (SP[i] + (SP2[i] - SP[i]) * f);
      this.dz[i] = rb > 1e-6 ? clamp(dzv / rb, 0, 1) : 0;
    }
    return { scN: scN, scR: scR, scF: scF, ti: ti, tf: tf, f: f };
  };

  // ---- pack one frame of instances; noJitter/noCull are used by signature()
  Dish.prototype.pack = function (t, tm, sc, noCull) {
    var eng = this.eng, inst = eng.inst, cap = eng.ICAP - 2, spk = eng.spk, scap = eng.SCAP, n = 0, ns = 0, i, o;
    var fx = this.fieldsAt(t), H = this.run.H, ti = fx.ti, tj = Math.min(this.T, ti + 1), tf = fx.tf;
    function hs(arr) { return arr[ti] + (arr[tj] - arr[ti]) * tf; }
    var W = eng.W, Hh = eng.H, cx = this.view.cx, cy = this.view.cy, hw = W * 0.5 / sc, hh = Hh * 0.5 / sc, ss = this.ss;
    var acidLoss = hs(H.acid), stress = clamp((acidLoss - 0.03) * 4, 0, 1) * smooth(0, 0.55, 1 - (this.lag[Math.min(this.T, Math.floor(t))] + (this.lag[Math.min(this.T, Math.floor(t) + 1)] - this.lag[Math.min(this.T, Math.floor(t))]) * (t - Math.floor(t))) / Math.max(1e-6, this.lag[0])), foodRatio = clamp(hs(H.food) / this.food0, 0, 1.3);
    var crash = clamp((0.72 - foodRatio) / 0.45, 0, 1), crashFade = crash * 0.5;
    var kill = hs(H.kill), stage = clamp(Math.round(hs(H.stage)), 0, 3), engK = stage >= 3 ? clamp(kill * 9, 0, 0.85) : 0;
    var seamS = this.seamS[ti] + (this.seamS[tj] - this.seamS[ti]) * tf;
    var pulse = this.reduced ? 0 : seamS > 0.18 ? seamS * (0.5 + 0.5 * Math.sin(tm * 5.5)) : 0;
    this.lastPulse = pulse;
    var jit = this.reduced || noCull ? 0 : 1, rN0 = TUNE.cellR / Math.sqrt(this.C / 20000), minN = TUNE.minPxN * eng.px / sc, minR = TUNE.minPxR * eng.px / sc, rN = Math.max(rN0, minN), rR = Math.max(rN0 * 1.7, minR), bf = this.bf, napF = bf.naps ? 0.14 : 0;
    var colX = this.colonyAt(t), self = this, bubbles = 0, S = this.nat, q, th, vis, x, y, j;
    var pad = 0.04, X0 = cx - hw - pad - 0.1, X1 = cx + hw + pad + 0.1, Y0 = cy - hh - pad - 0.1, Y1 = cy + hh + pad + 0.1;
    // level of detail: when more individuals would be on screen than the tier shows legibly, a fixed subset (by identity) is drawn, a little larger
    var zz = this.view.zoom, cntN = 0, cntR = 0, thinN = 1, thinR = 1, sCap = TUNE.screenCells[this.tierName] * zz * zz * Math.pow(Math.min(eng.W, eng.H) / eng.px / 320, 2);
    if (!noCull) {
      for (j = 0; j < this.nat.n; j++) if (this.pN[this.nat.ci[j]] > this.nat.th[j]) cntN++;
      for (j = 0; j < this.rob.n; j++) if (this.pR[this.rob.ci[j]] > this.rob.th[j]) cntR++;
      thinN = clamp(sCap / Math.max(1, cntN + cntR), 0.04, 1); var rsh = cntR / Math.max(1, cntN + cntR), bst = 1 + (TUNE.robotBoost - 1) * (1 - smooth(TUNE.boostLo, TUNE.boostUntil, rsh)); thinR = Math.min(1, thinN * bst);   // robots are thinned less (you must stay findable); the on-screen pink share is overstated by robotBoost only while zoomed out
    }
    this.thin = [thinN, thinR]; this.vis = [cntN, cntR];
    var compN = 1, compR = 1;
    // natives
    for (j = 0; j < S.n && n < cap; j++) {
      q = this.pN[S.ci[j]]; th = S.th[j]; if (q <= th || S.g4[j] > thinN) continue;
      x = S.x[j]; y = S.y[j];
      if (jit) { x += 0.0045 * Math.sin(tm * 0.31 + S.ph[j] * 40) + 0.003 * Math.sin(tm * 0.77 + S.g1[j] * 30); y += 0.0045 * Math.cos(tm * 0.27 + S.g2[j] * 40) + 0.003 * Math.cos(tm * 0.71 + S.ph[j] * 23); }
      if (!noCull && (x < X0 || x > X1 || y < Y0 || y > Y1)) continue;
      vis = Math.min(1, (q - th) / (0.22 * q + 0.004));
      o = n * 16; inst[o] = x; inst[o + 1] = y; inst[o + 2] = rN * compN * (0.8 + 0.5 * S.sz[j]) * (0.55 + 0.45 * vis) * clamp((thinN - S.g4[j]) / 0.08 + 0.3, 0.3, 1); inst[o + 3] = S.ang[j] + (jit ? 0.25 * Math.sin(tm * 0.2 + S.ph[j] * 30) : 0);
      inst[o + 4] = 0; inst[o + 5] = S.dep[j]; inst[o + 6] = S.ph[j]; inst[o + 7] = S.hl[j];
      inst[o + 8] = 0; inst[o + 9] = 0; inst[o + 10] = 0; inst[o + 11] = S.tail[j]; inst[o + 12] = crashFade * (0.6 + 0.4 * S.g3[j]); inst[o + 13] = 0; inst[o + 14] = 0; inst[o + 15] = 0;
      n++;
    }
    // robots (pink): dissolve under acid, engulfed by immune cells, dormant ovals, seams from the Naturalness channel
    S = this.rob;
    for (j = 0; j < S.n && n < cap; j++) {
      q = this.pR[S.ci[j]]; th = S.th[j]; if (q <= th || S.g4[j] > thinR) continue;
      x = S.x[j]; y = S.y[j];
      if (jit) { x += 0.0035 * Math.sin(tm * 0.37 + S.ph[j] * 40); y += 0.0035 * Math.cos(tm * 0.33 + S.g2[j] * 40); }
      if (!noCull && (x < X0 || x > X1 || y < Y0 || y > Y1)) continue;
      vis = Math.min(1, (q - th) / (0.22 * q + 0.004));
      var dis = Math.max(0, 1 - (q - th) / (0.3 * q + 0.004)), dormant = (S.g1[j] < this.dz[S.ci[j]] || S.g3[j] < napF) ? 1 : 0;
      if (stress > 0) dis = Math.max(dis, stress * (0.04 + 0.4 * S.g2[j]));
      if (dis > 0.99) continue;
      var rd = Math.sqrt((x - colX[0]) * (x - colX[0]) + (y - colX[1]) * (y - colX[1])), eg = engK > 0 ? clamp((engK - (S.g2[j] * 0.65 + rd * 0.25)) * 5, 0, 1) : 0;
      var sm = seamS > 0 ? clamp(seamS * 1.5 - 0.5 * S.g1[j], 0, 1) : 0;
      o = n * 16; inst[o] = x; inst[o + 1] = y;
      inst[o + 2] = rR * compR * (0.8 + 0.4 * S.sz[j]) * (0.5 + 0.5 * vis) * (dormant ? 0.72 : 1) * (1 + TUNE.pulseSize * pulse) * (1 - 0.35 * stress); inst[o + 3] = S.ang[j];
      inst[o + 4] = 1; inst[o + 5] = S.dep[j]; inst[o + 6] = S.ph[j]; inst[o + 7] = dormant ? 0.55 : S.hl[j];
      inst[o + 8] = 0; inst[o + 9] = dis; inst[o + 10] = sm; inst[o + 11] = bf.motor && !dormant && S.g1[j] < 0.35 ? 1 : 0;
      inst[o + 12] = crashFade * (0.6 + 0.4 * S.g3[j]); inst[o + 13] = eg; inst[o + 14] = dormant; inst[o + 15] = 0;
      n++;
      if (dis > 0.06 && dis < 0.94 && bubbles < 220 && ns < scap - 1 && (S.g1[j] < 0.55)) {   // acid fizz: a bubble rising off each dissolving cell
        bubbles++; var k2 = ns * 8; spk[k2] = x + 0.004 * Math.sin(S.ph[j] * 50); spk[k2 + 1] = y - dis * 0.03 - 0.004; spk[k2 + 2] = 0.0035 + 0.005 * S.g3[j]; spk[k2 + 3] = S.dep[j];
        spk[k2 + 4] = 2; spk[k2 + 5] = S.ph[j]; spk[k2 + 6] = 0.6; spk[k2 + 7] = Math.min(1, 1.4 * (1 - dis)); ns++;
      }
    }
    // immune cells: from the rim toward the colony, more and closer with the stage
    var im = this.imm, mNow = this.iM[ti] + (this.iM[tj] - this.iM[ti]) * tf, cl = this.iC[ti] + (this.iC[tj] - this.iC[ti]) * tf;
    this.immVisible = 0;
    var fieldG = this.field, k3, ii;
    for (k3 = 0; k3 < FG * FG; k3++) fieldG[k3 * 4 + 1] = 0;
    for (ii = 0; ii < im.n && ii < mNow + 1 && n < cap; ii++) {
      var al = clamp(mNow - ii, 0, 1); if (al <= 0.01) continue;
      var e = clamp(cl * 1.3 - 0.3 * im.h[ii], 0, 1); e = e * e * (3 - 2 * e);
      var sx = Math.cos(im.a[ii]) * 0.97, sy = Math.sin(im.a[ii]) * 0.97, tx = colX[0] + im.tx[ii] * TUNE.immSpread, ty = colX[1] + im.ty[ii] * TUNE.immSpread;
      // guard: enters from the rim, then patrols a slow meandering route; the stage pulls the route toward the colony (e), where the cells mill around it together
      var rw = im.rw, b8 = ii * 8, tt = jit ? tm : 0, q = al * al * (3 - 2 * al);
      var p1 = rw[b8] * tt + rw[b8 + 2], p2 = rw[b8 + 1] * tt + rw[b8 + 3];
      var rx = rw[b8 + 4] + rw[b8 + 6] * Math.sin(p1), ry = rw[b8 + 5] + rw[b8 + 7] * Math.sin(p2);
      var vx = rw[b8 + 6] * rw[b8] * Math.cos(p1), vy = rw[b8 + 7] * rw[b8 + 1] * Math.cos(p2), rr0 = Math.sqrt(rx * rx + ry * ry);
      if (rr0 > 0.9) { rx *= 0.9 / rr0; ry *= 0.9 / rr0; }
      var bx = sx + (rx - sx) * q, by = sy + (ry - sy) * q;
      x = bx + (tx - bx) * e; y = by + (ty - by) * e;
      var ob = tm * TUNE.immOrbit + im.ph[ii] * 6.2832, vl = Math.sqrt(vx * vx + vy * vy) + 1e-6, ho = Math.atan2(vy / vl * (1 - e) + (ty - by) * e, vx / vl * (1 - e) + (tx - bx) * e);
      if (jit) { x += TUNE.immRadius * e * Math.cos(ob); y += TUNE.immRadius * e * Math.sin(ob); }
      var gx = ((x + 1) / 2 * FG) | 0, gy = ((y + 1) / 2 * FG) | 0;
      if (gx >= 0 && gx < FG && gy >= 0 && gy < FG) fieldG[(gy * FG + gx) * 4 + 1] = Math.min(255, fieldG[(gy * FG + gx) * 4 + 1] + 70 * al);
      if (!noCull && (x < X0 || x > X1 || y < Y0 || y > Y1)) { this.immVisible++; continue; }
      o = n * 16; inst[o] = x; inst[o + 1] = y; inst[o + 2] = 0.034 * im.sz[ii] * Math.sqrt(0.6 + 0.4 * Math.min(1, zz)) * (0.4 + 0.6 * al); inst[o + 3] = ho;
      inst[o + 4] = 2; inst[o + 5] = im.dep[ii]; inst[o + 6] = im.ph[ii]; inst[o + 7] = 0; inst[o + 8] = 0; inst[o + 9] = 0; inst[o + 10] = 0; inst[o + 11] = 0; inst[o + 12] = 1 - al * 0.95 + (1 - al) * 0; inst[o + 13] = 0; inst[o + 14] = 0; inst[o + 15] = 0;
      inst[o + 12] = 0; n++; this.immVisible++;
    }
    // specks: dust and lens specks always, food while the food field is high
    var dk;
    for (dk = 0; dk < this.dust.length && ns < scap; dk++) { var d0 = this.dust[dk], k4 = ns * 8; spk[k4] = d0.x + (jit ? 0.004 * Math.sin(tm * 0.1 + d0.ph * 30) : 0); spk[k4 + 1] = d0.y + (jit ? 0.004 * Math.cos(tm * 0.12 + d0.ph * 20) : 0); spk[k4 + 2] = d0.s; spk[k4 + 3] = d0.z; spk[k4 + 4] = 0; spk[k4 + 5] = d0.ph; spk[k4 + 6] = d0.h; spk[k4 + 7] = 0.55; ns++; }
    for (dk = 0; dk < this.lens.length && ns < scap; dk++) { var l0 = this.lens[dk], k5 = ns * 8; spk[k5] = l0.x; spk[k5 + 1] = l0.y; spk[k5 + 2] = l0.s; spk[k5 + 3] = l0.b; spk[k5 + 4] = 1; spk[k5 + 5] = l0.ph; spk[k5 + 6] = l0.h; spk[k5 + 7] = l0.al * 1.6; ns++; }
    var fo = this.food;
    for (dk = 0; dk < fo.n && ns < scap; dk++) {
      var pf = this.pF[fo.ci[dk]]; if (pf * 0.92 <= fo.th[dk]) continue;
      var fxp = fo.x[dk] + (jit ? 0.003 * Math.sin(tm * 0.2 + fo.ph[dk] * 40) : 0), fyp = fo.y[dk] + (jit ? 0.003 * Math.cos(tm * 0.22 + fo.ph[dk] * 33) : 0);
      if (!noCull && (fxp < X0 || fxp > X1 || fyp < Y0 || fyp > Y1)) continue;
      var k6 = ns * 8; spk[k6] = fxp; spk[k6 + 1] = fyp; spk[k6 + 2] = fo.sz[dk] * (0.7 + 0.3 * Math.min(1, (pf * 0.92 - fo.th[dk]) / 0.15)); spk[k6 + 3] = fo.z[dk]; spk[k6 + 4] = 0; spk[k6 + 5] = fo.ph[dk]; spk[k6 + 6] = 0.2; spk[k6 + 7] = 0.42; ns++;
    }
    // waste haze texture (red), fizz zone (blue: where robots are, as a share of the colony), immune glow (green, written above)
    for (k3 = 0; k3 < FG * FG; k3++) {
      var gi = ((((k3 / FG) | 0) * this.gn / FG) | 0) * this.gn + (((k3 % FG) * this.gn / FG) | 0);
      fieldG[k3 * 4] = clamp((this.fieldBuf.W[gi] - 0.125) / 0.10, 0, 1) * 255; fieldG[k3 * 4 + 2] = clamp(this.pR[gi] * 4, 0, 1) * 255; fieldG[k3 * 4 + 3] = 255;
    }
    this.fx = { acidLoss: acidLoss, stress: stress, crash: crash, stage: stage, kill: kill, seamS: seamS, pulse: pulse, foodRatio: foodRatio };
    return { n: n, ns: ns };
  };

  // identity check: a hash over the packed individuals (no jitter, no culling) at a tick
  Dish.prototype.signature = function (t) {
    if (!this.run || !this.supported) return null;
    var keepView = [this.view.cx, this.view.cy, this.view.zoom], r = this.pack(t, 0, 1, true), h = 2166136261, inst = this.eng.inst, i, cnt = r.n * 16;
    for (i = 0; i < cnt; i++) { h ^= Math.round(inst[i] * 10000) | 0; h = Math.imul(h, 16777619); }
    this.view.cx = keepView[0]; this.view.cy = keepView[1]; this.view.zoom = keepView[2]; this.tickKey = -1;
    return { count: r.n, hash: (h >>> 0).toString(16), specks: r.ns };
  };

  // ---- one frame (call from requestAnimationFrame while the dish is on screen)
  Dish.prototype.frame = function (ts) {
    if (!this.supported || !this.run || !this.visible) return;
    var dt = this.lastTs ? Math.min(0.1, (ts - this.lastTs) / 1000) : 0.016; var raw = this.lastTs ? ts - this.lastTs : 16; this.lastTs = ts;
    var tJs = performance.now();
    this.time += dt; this.frames++;
    var eng = this.eng; if (eng.cv.clientWidth < 4) return;
    eng.resize();
    this.stepAnim(dt);
    var focus = this.focusBase;
    if (!this.reduced && !this.anim) focus += 0.03 * Math.sin(this.time * 0.8) + 0.014 * Math.sin(this.time * 2.1 + 1);
    this.focus = focus;
    var zoom = this.view.zoom, sc = this.baseScale() * zoom, K = 34 * TUNE.blur * clamp(Math.min(eng.W, eng.H) / eng.px / 760, 0.28, 1.2) * (this.anim ? 1 + TUNE.rackBoost * Math.exp(-1.8 * this.anim.t) : 1), kz = 0.55 + 0.45 * Math.sqrt(zoom);
    var bgBlur = clamp(Math.max(Math.abs(TUNE.focus - focus) - TUNE.tol, 0) * K * kz, 0, 72);
    var tm = this.reduced ? 0 : this.time;
    var r = this.pack(Math.min(this.T, Math.max(0, this.tick)), tm, sc, false), fx = this.fx;
    var cellPx = 0.0105 * this.ss * 1.45 * 2.5 * sc, cloud = cellPx < 8;
    var D = this.D, acidAmb = D && D.acid ? Math.min(1, D.acid * 2) * 0.25 : 0;
    var expo = this.exposure * (r.n > 1500 ? Math.max(0.55, 1 - 0.3 * Math.log(r.n / 1500) / Math.LN10) : 1);
    eng.render({
      n: r.n, ns: r.ns, cx: this.view.cx, cy: this.view.cy, sc: sc, zoom: zoom, focus: focus, K: K, tol: TUNE.tol, depth: 1, bgBlur: bgBlur,
      acid: acidAmb, fizz: clamp(fx.acidLoss * 2.5, 0, 1), time: tm, exposure: expo, cloud: cloud, dish: 1, haze: 1, bloom: TUNE.bloom, bloomThr: TUNE.bloomThr, cloudK: TUNE.cloud, vig: TUNE.vignette, chroma: TUNE.chroma, grain: TUNE.grain,
      field: this.field, bld: { env: this.bf.env, ee: 0, tight: this.bf.tight, pump: this.bf.pump, shell: this.bf.shell, acidIn: this.bf.acidIn, sync: this.bf.sync, head: this.bf.head, reflex: this.bf.reflex, core: this.bf.core, refA: -2.356 },
      pulse: fx.pulse, lowBloom: this.tierName === 'phone', pulseGlow: TUNE.pulseGlow, glint: TUNE.glint
    });
    this.drawn = r.n; this.focusNow = focus; this.bgBlur = bgBlur; this.scNow = sc;
    this.updateScale(sc);
    if (this.uiThin) { var th = this.thin && this.thin[0] < 0.97 && this.vis && this.vis[1] > 0; if (th !== this.thinShown) { this.thinShown = th; this.uiThin.hidden = !th; } }
    this.jsMs = (this.jsMs || 0) + ((performance.now() - tJs) - (this.jsMs || 0)) * 0.1;
    this.autoTier(raw);
  };
  Dish.prototype.updateScale = function (sc) {
    if (!this.uiScale) return;
    var perUm = sc / this.eng.px / 100, opts = [5, 10, 20, 50, 100, 200, 500], best = 5, i;   // one world unit is taken as 100 micrometres
    for (i = 0; i < opts.length; i++) if (opts[i] * perUm <= 90) best = opts[i];
    var key = best + '|' + Math.round(best * perUm);
    if (key === this.scaleKey) return; this.scaleKey = key;
    this.uiScale.firstChild.style.width = Math.round(best * perUm) + 'px'; this.uiScale.lastChild.textContent = best + ' µm';
  };
  // Step the tier down when frames stay slow; below the phone tier fall back to the flat 2D drawing.
  Dish.prototype.autoTier = function (raw) {
    if (this.warm > 0) { this.warm--; return; }
    if (document.hidden) return;
    this.ft += (Math.min(raw, 200) - this.ft) * 0.15;
    if (this.ft > TUNE.slowMs) this.slowCount++; else this.slowCount = Math.max(0, this.slowCount - 2);
    if (this.slowCount > TUNE.slowFrames && !this.opts.noAuto) {
      var order = ['high', 'laptop', 'phone'], i = order.indexOf(this.tierName);
      if (i < order.length - 1) { var was = this.tierName; this.stepped.push(was); this.setQuality(order[i + 1]); this.note('Frames were slow, so the dish stepped down to ' + TUNE.tiers[this.tierName].toLocaleString('en-US') + ' cells.'); }
      else if (this.opts.autoFallback !== false) { this.supported = false; this.err = 'too slow'; if (this.onfail) this.onfail('slow'); }
      this.slowCount = 0;
    }
  };
  Dish.prototype.resize = function () { if (this.supported) this.eng.resize(); };
  Dish.prototype.stats = function () {
    var e = this.eng;
    return { supported: this.supported, webgl2: !!e.gl, renderer: e.name, tier: this.tierName, budget: this.C, candidates: this.cellCount, drawn: this.drawn || 0, immune: this.immVisible || 0,
      cpuMs: +e.cpuMs.toFixed(2), jsMs: +(this.jsMs || 0).toFixed(2), gpuMs: e.gpuMs, frameMs: +this.ft.toFixed(1), stepped: this.stepped.slice(), zoom: +this.view.zoom.toFixed(2), focus: +(this.focusNow || 0).toFixed(3), bgBlur: +(this.bgBlur || 0).toFixed(1),
      size: [e.W, e.H], px: +e.px.toFixed(2), floatTargets: e.floatOK, fx: this.fx || null, lost: this.lost, anim: this.anim ? this.anim.kind : null, reduced: this.reduced };
  };
  Dish.prototype.destroy = function () {
    this.destroyed = true; this.supported = false; if (this.io) this.io.disconnect(); if (this.ui && this.ui.parentNode) this.ui.parentNode.removeChild(this.ui); if (this.hintTimer) clearTimeout(this.hintTimer);
    if (this.eng) this.eng.destroy();
  };
  Dish.prototype.show = function (on) { if (this.ui) this.ui.style.display = on ? '' : 'none'; };

  // ---------------------------------------------------------------- portrait (the Adapt screen's large cell)
  var SVG_W = 600, SVG_H = 410;
  function Portrait(canvas) {
    this.cv = canvas; this.supported = false; this.err = '';
    this.eng = new Engine(canvas, 'portrait', { cap: 4, speckCap: 4, budget: 1.6e6 });
    if (!this.eng.ok) { this.err = this.eng.err; return; }
    this.supported = true; this.slots = null; this.mach = 0; this.time = 0; this.lastDraw = 0;
    var self = this; canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); self.supported = false; self.err = 'context lost'; if (self.onfail) self.onfail('context lost'); });
  }
  // slots: LookAlive.toSlots(build) (with any preview already merged in). o: { time }
  Portrait.prototype.draw = function (slots, o) {
    if (!this.supported) return; o = o || {};
    if (slots) { this.slots = slots; this.bf = buildFlags(slots, 0); }
    if (!this.slots) return;
    var eng = this.eng; if (eng.cv.clientWidth < 4) return; eng.resize();
    var sc = Math.min(eng.W / SVG_W, eng.H / SVG_H), bf = this.bf, inst = eng.inst, tm = this.time;
    var rot = -0.698;   // the tail leaves toward the lower left, where the diagram puts the Motor slot
    var rf = 97;        // body radius in diagram units (the fluid disc); membrane layers sit outside it
    inst[0] = 300; inst[1] = 205; inst[2] = rf; inst[3] = rot + 0.012 * Math.sin(tm * 0.7);
    inst[4] = 1; inst[5] = 0.5; inst[6] = 0.37; inst[7] = 0;
    inst[8] = 0; inst[9] = 0; inst[10] = 0; inst[11] = bf.motor ? 1 : 0;
    inst[12] = 0; inst[13] = 0; inst[14] = 0; inst[15] = 0;
    eng.render({
      n: 1, ns: 0, cx: 300, cy: 205, sc: sc * eng.px, zoom: 3, focus: 0.5, K: 0, tol: 0.09, depth: 0, bgBlur: 0, acid: 0, fizz: 0, time: tm, exposure: 1, cloud: false, dish: 0, haze: 0,
      bloom: 1, vig: 0.4, chroma: 0, grain: 0.5, field: null, lowBloom: true, pulse: 0,
      bld: { env: bf.env, ee: 11.5 * sc * eng.px, tight: bf.tight, pump: bf.pump, shell: bf.shell, acidIn: bf.acidIn, sync: bf.sync, head: bf.head, reflex: bf.reflex, core: bf.core, refA: -2.356 - rot }
    });
  };
  Portrait.prototype.tick = function (ts) {
    if (!this.supported || !this.slots) return;
    if (ts - this.lastDraw < 45) return; this.lastDraw = ts; this.time = ts / 1000; this.draw(null);
  };
  Portrait.prototype.resize = function () { if (this.supported) { this.eng.resize(); this.draw(null); } };
  Portrait.prototype.destroy = function () { this.supported = false; if (this.eng) this.eng.destroy(); };

  // ---------------------------------------------------------------- public
  function probe() { try { var c = document.createElement('canvas'); var g = c.getContext('webgl2'); return !!g; } catch (e) { return false; } }
  return {
    TUNE: TUNE,
    probe: probe,
    create: function (canvas, opts) { var d = new Dish(canvas, opts); return d; },
    portrait: function (canvas) { return new Portrait(canvas); }
  };
})();

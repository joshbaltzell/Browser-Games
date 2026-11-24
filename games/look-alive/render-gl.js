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
    driftAmp: 0.03, deathMargin: 0.03,                  // natives and yours: slow drift (dish units), and how long a dying individual lingers while it shrinks
    crowd: 3.5,                                         // extra on-screen cells as your share passes 30% to 85% (a take-over must look crowded)
    immSpread: 0.6, immOrbit: 0.35, immRadius: 0.04, immRate: 0.16, immRoam: 0.35,   // immune cells: how tightly they converge on the colony, orbit speed (rad/s), orbit radius
    glint: 1.0, pulseSize: 0.22, pulseGlow: 0.9,
    zoomMax: 16, jumpZoom: 2.1,
    crowdDim: 0.72, crowdLo: 0.14, crowdHi: 0.27, crowdShare: [0.5, 0.8], crowdZoom: [2, 3.5], nativeLift: 0.3,   // readable crowds: pink cells in a dense pink bank dim by up to crowdDim (local pink density, smoothed, between crowdLo and crowdHi); natives lift by nativeLift as the on-screen pink share passes crowdShare; both fade out as zoom goes crowdZoom[0] to [1]
    eventZoom: 2.6, eventHold: 3, eventIn: 1.5, eventOut: 1.3,   // automatic camera move to a located spot: zoom, hold seconds, glide in and ease back seconds
    bloom: 0.35, bloomThr: 0.8, vignette: 1, chroma: 1, grain: 1,
    slowMs: 42, slowFrames: 50, failMs: 90,             // slow = under about 24 frames a second (a browser capped at 30 is not slow); the flat 2D view only below about 11
    // native species (visual only; the sim has one native field). [Lactobacillus, Streptococcus, Helicobacter pylori] by dish id; 0 = default
    speciesMix: { 0: [0.45, 0.35, 0.20], 1: [0.50, 0.30, 0.20], 6: [0.36, 0.30, 0.34], 9: [0.40, 0.40, 0.20], 10: [0.34, 0.33, 0.33] },
    lacHl: [1.4, 1.2], lacSeg2: 0.35, lacR: 0.85, chainGap: 0.16,     // long rods, 35% in chains of two; gap between links (x radius)
    strSegs: [2, 2, 3, 4], strPitch: 0.92, strR: 0.95,               // cocci: half pairs, the rest chains of 3 or 4; centre spacing (x diameter)
    helHl: [1.6, 0.8], helR: 0.8, helAmp: 0.55, helWaves: 1.6, helTuft: 0.85,   // curved spiral rods; 85% carry a tuft of 3 tails at one end
    spAreaK: 1.065,                                                   // one-shot fudge if the pink:violet ratio check misses
    granS: 0.85, tailW: 0.75,                                        // crisper native granules and tails
    bokehCut: 0.55, bokehZ0: 2.5, bokehZ1: 6,                        // less milky veil of out-of-focus bokeh discs when zoomed in
    beacon: 1, beaconR: 0.09, beaconZ0: 1.15, beaconZ1: 1.8,         // the ringed pink disc on your colony at zoom 1 (mock-up 04); 0 = off
    // agent dishes (habitat 3: every recorded individual drawn where the simulation put it). True sizes in micrometres (dish radius 250), clamped to a minimum on-screen radius in px
    agScoutUm: 0.65, agScoutHl: 0.06, agScoutHlRest: 0.55, agQuadUm: 1.5, agHaloUm: 0.5, agHaloHl: 1.8, agSaliUm: 0.4, agSaliHl: 2.6, agMinPxS: 3.9, agMinPxN: 3.1,
    agBoulder: 0.7, agGrow: 8, agFade: 8,                              // boulder radius as a share of its sigma; ticks to grow in and to fade out
    agFoodK: 0.04, agFoodGlow: 1.2, agFoodSpeck: 0.06                  // food glow: 1-exp(-food/K) scaled by Glow into the haze channel; food level (units) at which food specks are at full density
  };

  var INT_RE = /^i[A-Z]/;
  var LT0 = [0, 0, 0, 0];
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
    'const vec3 C_GRN=vec3(0.36,0.80,0.30);',
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
    'uniform vec2 uRes,uCen; uniform float uScale,uTime,uBgBlur,uAcid,uHaze,uDish,uFizz,uTH,uTC,uLtA; uniform vec4 uLt; uniform sampler2D uF;',
    'out vec4 o;', GL_COMMON,
    'float tkm(float x,float f0){ if(f0<=0.||f0>=1.) return 0.; float x0=acos(1.-2.*f0)/3.14159265-1.; return exp(-sq((x-x0)/.006))+exp(-sq((x+x0)/.006)); }',
    'void main(){',
    '  vec2 px=gl_FragCoord.xy; px.y=uRes.y-px.y;',
    '  vec2 w=(px-.5*uRes)/uScale+uCen;',
    '  float rd=length(w);',
    '  float aa=1.4/uScale, bb=uBgBlur/uScale;',
    '  float inside=uDish>.5?1.-smoothstep(1.-aa-bb,1.+aa+bb,rd):1.;',
    '  float rr2=length(px-.5*uRes)/min(uRes.x,uRes.y);',
    '  vec3 base=vec3(.004,.004,.013)+vec3(.012,.006,.03)*smoothstep(.3,1.,rd)*uDish+vec3(.03,.034,.06)*(1.-smoothstep(0.,.7,rr2))*(1.-uDish);',
    '  vec3 c=mix(vec3(0.),base,inside);',
    '  float tU=clamp((w.x+1.)*.5,0.,1.), tF=clamp((.5-.5*cos(6.28318*tU)),0.,1.);',
    '  if(uTH>0.) c+=mix(vec3(.05,.065,.13),vec3(.16,.095,.05),tF)*inside;',
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
    '  if(uLtA>.5){',   // dish 17's light: a soft pale-blue band (the useful light), a thin ring where it ends, and a harder white core (the glare); the amber food haze stays warm
    '    float ld=length(w-uLt.xy);',
    '    float lb=1.-smoothstep(uLt.z*.5,uLt.z,ld), lc=1.-smoothstep(uLt.w*.8,uLt.w,ld), le=exp(-sq((ld-uLt.z)/(.007+bb*.8)));',
    '    c+=(vec3(.12,.16,.27)*lb+vec3(.08,.11,.19)*le+vec3(.5,.54,.62)*lc)*inside;',
    '  }',
    '  if(uDish>.5){',
    '    float ring=exp(-sq((rd-1.)/(.0065+bb*.9)));',
    '    float outer=exp(-max(rd-1.,0.)/.045)*step(1.,rd);',
    '    c+=vec3(.50,.40,.95)*(ring*.95+outer*.16);',
    '  }',
    '  if(uTH>0.){',   // temperature strip just outside the rim: amber-white where hot, dim violet-blue where cool, ticks at 40 C and 72 C
    '    float fr=clamp(tF,0.,1.), band=smoothstep(1.015-aa,1.02+aa+bb*.5,rd)*(1.-smoothstep(1.045-aa,1.05+aa+bb*.5,rd))*step(abs(w.x),1.);',
    '    float spn=max(1.,uTH-uTC);',
    '    float tk=(tkm(w.x,(40.-uTC)/spn)+tkm(w.x,(72.-uTC)/spn))*step(1.005,rd)*(1.-step(1.07,rd));',
    '    c+=mix(vec3(.14,.12,.42),vec3(1.,.82,.5),fr*fr*(3.-2.*fr))*band*1.1+vec3(.9,.92,1.)*tk*.6;',
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
    '  float ex=hpx+rpx+tail+pad, ey=rpx+pad+(aC.w>.5?rpx*(aD.w>2.5?1.5:.75):0.)+(aB.x<.5?rpx*(aD.w>2.5?1.15:.55):0.);',
    '  if((aB.x>1.5&&aB.x<2.5)||aB.x>3.5){ex=rpx*1.5+pad;ey=ex;}',
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
    'uniform float uHelAmp,uHelWaves,uTailW,uChainGap,uStrPitch,uGranS,uBokK;',
    'out vec4 o;', GL_COMMON,
    'float hexd(vec2 p,float r){p=abs(p);return max(p.x*.8660254+p.y*.5,p.y)-r*.8660254;}',
    'void main(){',
    '  float sp=vSp;',
    '  bool rob=sp>.5&&sp<1.5, imm=sp>1.5&&sp<2.5, bld=sp>3.5;',
    '  vec3 col=bld?C_GRN:(sp<.5?C_NAT:(rob?C_ROB:(imm?C_IMM:C_AMB)));',
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
    '  float h2f=h2, fm=vD.w, nsg=max(vC.z,1.), phs=vPh;',
    '  if(imm||bld){',
    '    float a=atan(vP.y,vP.x);',
    '    float w=1.+.15*sin(3.*a+uTime*1.6+vPh*20.)+.09*sin(5.*a-uTime*2.3+vPh*9.)+.05*sin(2.*a+uTime*.8);',
    '    if(bld) w=1.+.055*sin(2.*a+uTime*.35+vPh*20.)+.04*sin(3.*a-uTime*.5+vPh*9.)+.03*sin(5.*a+vPh*31.);',
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
    '      if(fm>4.5){ wp=vP; }',
    '      else if(fm>3.5){ wp.y-=(h11(vPh*3.7)>.5?1.:-1.)*rr*1.0*(u1*u1-.33); }',
    '      else if(fm>2.5){ wp.y-=rr*uHelAmp*sin(u1*3.14159*uHelWaves+vPh*6.283); }',
    '      else if(fm>1.5){ float P2=2.*rr*uStrPitch, hf=(nsg-1.)*.5*P2; float k=clamp(floor((vP.x+hf)/P2+.5),0.,nsg-1.); wp.x=vP.x+hf-k*P2; h2=0.; phs=vPh+k*.173; wob=1.+nv*.05*sin(atan(wp.y,wp.x)*3.+phs*20.); }',
    '      else if(fm>.5&&nsg>1.5){ float gg=rr*uChainGap, P1=(2.*(h2+rr)+gg)/nsg; float k=clamp(floor((vP.x+h2+rr+gg*.5)/P1),0.,nsg-1.); wp.x=vP.x+h2+rr+gg*.5-(k+.5)*P1; h2=max(P1*.5-gg*.5-rr,0.); phs=vPh+k*.173; }',
    '    }',
    '    float x=clamp(wp.x,-h2,h2); vec2 q=vec2(wp.x-x,wp.y); float L=length(q)+1e-4;',
    '    float pr=(1.-.82*pin*pin*exp(-sq(vP.x/(.42*(h2+rr)+1.))))*wob;',
    '    d=L-rr*pr; g=q/L;',
    '    if(sp<.5&&fm>4.5){ float cr=rr*.22; vec2 qq=abs(vP)-vec2(rr*.92-cr); d=length(max(qq,0.))+min(max(qq.x,qq.y),0.)-cr; g=normalize(vP+1e-4); }',
    '  }',
    '  float soft=.7+bl*.85;',
    '  float fill=1.-smoothstep(-soft,soft,d);',
    '  float t=clamp(-d/max(rr,.5),0.,1.);',
    '  if(rr<3.2&&bl<2.5){',
    '    float rm=exp(-sq((d+.9)/max(1.,.12*rr+bl*.5)));',
    '    vec3 cs=col*(fill*.2+rm*.6)*(1.-.45*dorm);',
    '    if(sp<.5){ float cn=exp(-sq(wp.x/(h2*.5+rr*.7))-sq(wp.y/(rr*.55))); cs=col*(fill*(.34-.14*cn*0.)+rm*.62+cn*fill*.16*smoothstep(2.2,3.2,rr))*(1.-.45*dorm); }',
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
    '      vec2 gp=vec2((h11(phs*13.1+fi)-.5)*2.*(h2+rr*.5),(h11(phs*7.7+fi*3.1)-.5)*rr*1.0);',
    '      gp+=.12*rr*vec2(sin(uTime*.35+fi*2.1+phs*9.),cos(uTime*.3+fi*1.7+phs*5.));',
    '      float gs=(rr*(.09+.12*h11(phs*3.3+fi*5.))+.5)*uGranS;',
    '      vec2 dd=wp-gp; gran+=exp(-dot(dd,dd)/(gs*gs));',
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
    '  float Rd=rr+h2f*.6+bl*.55;',
    '  float db=length(vP)-Rd; float sb=1.+Rd*.16;',
    '  float fillB=1.-smoothstep(-sb,sb,db);',
    '  float ringB=exp(-sq((db+sb*.8)/(sb*.9)));',
    '  float areaK=clamp(rr*(rr+h2f)*2.4/(Rd*Rd),.03,1.);',
    '  float rimW=max(1.,.10*rr)*(rob?1.+1.1*uTight:1.)+bl*.5;',
    '  float rim=exp(-sq((d+rimW*.8)/rimW))*(bld?.85:1.);',
    '  float spec=pow(max(dot(-g,normalize(vec2(-.55,-.85))),0.),6.)*rim;',
    '  float edgeGlow=exp(-max(d,0.)/(.9+.12*rr+bl*.5))*step(0.,d)*.35;',
    '  vec3 rimc=mix(col,vec3(1.),.16);',
    '  float dk=1.-dorm;',
    '  vec3 nb=vec3(0.);',
    '  if(sp<.5){',
    '    float nd=smoothstep(2.6,5.,rr);',
    '    float bodyG=.06+.34*pow(1.-t,2.);',
    '    float nuc=exp(-sq(wp.y/(rr*.38))-sq((vP.x-(h11(phs*2.9)-.5)*h2*.8)/(max(h2,rr*.5)*.55+rr*.35)));',
    '    float gn=0.;',
    '    for(int i=0;i<5;i++){ float fi=float(i); vec2 gq=vec2((h11(phs*17.3+fi*2.7)-.5)*2.*(h2+rr*.45),(h11(phs*11.1+fi*4.3)-.5)*rr*.95); gq+=.1*rr*vec2(sin(uTime*.4+fi*2.3+phs*7.),cos(uTime*.33+fi*1.9+phs*3.)); vec2 gd=wp-gq; float gz=(rr*(.12+.10*h11(phs*4.7+fi*3.7))+.4)*uGranS; gn+=exp(-dot(gd,gd)/(gz*gz)); }',
    '    nb=(col*4.*(bodyG*(.6+.8*mot)+nuc*.1)*fill+mix(col,vec3(1.),.5)*gn*fill*1.3*smoothstep(.12,.45,t))*nd*(1.-.65*dorm);',
    '    nb+=col*fill*.05*(1.-nd);',
    '    if(fm>4.5) nb*=.5;',
    '  }',
    '  vec3 s=nb+col*fill*.07',
    '   +(rimc*(rim*.78*(1.+.5*dorm+1.1*uPort)+edgeGlow*.7)+vec3(spec)*.22)',
    '   +colI*fill*(.03+.12*pow(1.-t,1.5))*mix(.45+1.1*mot,.75+.45*mot,uPort)*mix(.6,1.,lodv)*(1.+1.3*big+(rob?0.:1.6)*smoothstep(4.,10.,rr))*(1.-.65*dorm)',
    '   +mix(rob?vec3(1.,.62,.2):col,vec3(1.),.4)*(gran*(.55+.6*big))*fill*lodv*uGranK',
    '   +col*fill*exp(-sq(wp.y/(rr*.55)))*sq(sq(clamp(1.-abs(wp.x)/(h2+rr*.9),0.,1.)))*.07*big*(rob?0.:1.);',
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
    '  if(bld){ s+=col*fill*(.03+.11*pow(1.-t,1.6))*(.7+.6*mot)*(.5+.5*smoothstep(3.,16.,rr)); }',
    '  vec3 bok=col*(fillB*.30+ringB*.55)*areaK*.42*uBokK;',
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
    '  if(vKind>2.5){ float rw=max(.9,vR*.09); float rg=exp(-((d+vR*.14)*(d+vR*.14))/(rw*rw)); float core=exp(-dot(vP,vP)/(vR*vR*.06+1.)); float halo=exp(-max(d,0.)/(vR*.45+1.)); c=vec3(1.,.42,.58); I=rg*1.15+core*.85+halo*.25; }',
    '  else if(vKind>1.5){ I=ring*.9+fill*.05; vec2 hp=vP-vec2(-.3,-.3)*vR; I+=exp(-dot(hp,hp)/(vR*vR*.05+.5))*.7*smoothstep(2.,5.,vR); c=vec3(1.,.85,.5); }',
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
    'uniform sampler2D uS,uB1,uB2,uF; uniform vec2 uRes,uCen; uniform float uBloom,uVig,uChroma,uGrain,uExp,uTime,uShadow,uScale;', 'out vec4 o;', GL_COMMON,
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy/uRes; vec2 cc=uv-.5; float rad=dot(cc,cc);',
    '  vec3 c; float k=.03*uChroma;',
    '  c.r=texture(uS,uv+cc*rad*k).r; c.g=texture(uS,uv).g; c.b=texture(uS,uv-cc*rad*k).b;',
    '  vec3 b=texture(uB1,uv).rgb*.24+texture(uB2,uv).rgb*.4;',
    '  c+=b*uBloom;',
    '  float v=1.-uVig*.66*smoothstep(.26,.80,length(cc)*1.18);',
    '  if(uShadow>0.){',   // grazer shadow: huge, slow and far out of focus; alpha of the field texture, blurred by a warped 4-tap and a low-frequency fbm, no edges
    '    vec2 sp=gl_FragCoord.xy; sp.y=uRes.y-sp.y; vec2 sw=(sp-.5*uRes)/uScale+uCen;',
    '    vec2 dr=vec2(uTime*.02,0.); vec2 wq=sw+.2*(vec2(fbm(sw*.8+dr),fbm(sw*.8+vec2(4.1,2.3)-dr))-.5);',
    '    float sh=(texture(uF,(wq+vec2(.14,.1)+1.)*.5).a+texture(uF,(wq+vec2(-.14,.1)+1.)*.5).a+texture(uF,(wq+vec2(.14,-.1)+1.)*.5).a+texture(uF,(wq+vec2(-.14,-.1)+1.)*.5).a)*.25;',
    '    sh*=1.-smoothstep(.9,1.08,length(sw));',
    '    c*=1.-.8*uShadow*sh*(.62+.38*fbm(sw*.7+dr));',
    '  }',
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
    var b = P.bld || {}, sp = P.sp || SP0;
    var common = { uRes: [W, H], uCen: [P.cx, P.cy], uScale: P.sc, uFocus: P.focus, uK: P.K, uTol: P.tol, uZoom: P.zoom, uDepth: P.depth, uTime: P.time };
    if (this.timer && !this.qBusy) { q = gl.createQuery(); gl.beginQuery(this.timer.TIME_ELAPSED_EXT, q); }
    gl.disable(gl.DEPTH_TEST); gl.disable(gl.CULL_FACE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, T.scene.fb); gl.viewport(0, 0, W, H);
    gl.disable(gl.BLEND);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.fieldTex);
    this.pBg.tx = { uF: 0 };
    this.U(this.pBg, { uRes: [W, H], uCen: [P.cx, P.cy], uScale: P.sc, uTime: P.time, uBgBlur: P.bgBlur, uAcid: P.acid, uFizz: P.fizz, uHaze: P.haze, uDish: P.dish, uTH: P.tH || 0, uTC: P.tC || 0, uLtA: P.lt ? 1 : 0, uLt: P.lt || LT0 });
    gl.bindVertexArray(this.vaoEmpty); gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE);
    gl.bindVertexArray(this.vaoCell);
    if (P.cloud && n) { this.U(this.pCloud, Object.assign({}, common, { uCloudK: P.cloudK })); gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, n); }
    this.U(this.pCell, Object.assign({}, common, {
      uGranK: 1, uEnv: b.env || 0, uCloud: P.cloud ? 1 : 0, uEE: b.ee || 0, uTight: b.tight || 0, uPump: b.pump || 0, uShell: b.shell || 0, uAcidIn: b.acidIn || 0, uSync: b.sync || 0,
      uHead: b.head || 0, uReflex: b.reflex || 0, uCore: b.core || 0, uRefA: b.refA || 0, uPulse: P.pulse || 0, uPG: P.pulseGlow == null ? 0.3 : P.pulseGlow, uGlint: P.glint || 0, uPort: this.mode === 'portrait' ? 1 : 0,
      uHelAmp: sp.helAmp, uHelWaves: sp.helWaves, uTailW: sp.tailW, uChainGap: sp.gap, uStrPitch: sp.strPitch, uGranS: sp.granS, uBokK: sp.bokK
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
    gl.activeTexture(gl.TEXTURE3); gl.bindTexture(gl.TEXTURE_2D, this.fieldTex); gl.activeTexture(gl.TEXTURE0);
    this.pComp.tx = { uS: 0, uB1: 1, uB2: 2, uF: 3 };
    this.U(this.pComp, { uRes: [W, H], uBloom: bloomOn ? P.bloom : 0, uVig: P.vig, uChroma: P.chroma, uGrain: P.grain, uExp: P.exposure, uTime: P.time, uShadow: P.shadow || 0, uCen: [P.cx, P.cy], uScale: P.sc });
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
  var SP0 = { helAmp: 0, helWaves: 0, tailW: 1, gap: 0.16, strPitch: 0.92, granS: 1, bokK: 1 };
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
    this.view = { cx: 0, cy: 0, zoom: 1 }; this.userMoved = false; this.anim = null; this.exposure = 1; this.focusBase = TUNE.focus; this.focus = TUNE.focus;
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
        hl: new Float32Array(cap), ang: new Float32Array(cap), g4: new Float32Array(cap), g1: new Float32Array(cap), g2: new Float32Array(cap), g3: new Float32Array(cap), tail: new Uint8Array(cap), su: new Float32Array(cap), sv: new Float32Array(cap), sw: new Float32Array(cap), n: 0
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
          o.su[i2] = hash32(c, q, 7001) / 4294967296; o.sv[i2] = hash32(c, q, 7002) / 4294967296; o.sw[i2] = hash32(c, q, 7003) / 4294967296;
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
    this.assignSpecies();
  };

  // ---- the run
  Dish.prototype.setRun = function (run, dish, build, extra) {
    extra = extra || {};
    this.run = run; this.D = dish; this.build = build; this.slots = extra.slots || null; this.mach = extra.machine || 0; this.bf = buildFlags(this.slots, this.mach);
    this.ag = !!(run && run.agents && run.frames && run.frames.length);            // habitat 3: draw the recorded individuals instead of the density pool
    this.agR = this.ag ? ((run.P3 && run.P3.R) || (run.P && run.P.R) || 250) : 250;
    var bparts = (build && build.parts) || (run && run.build && run.build.parts) || [];
    this.agFlag = bparts.indexOf('flagellum') >= 0;
    this.agCount = { scouts: 0, natives: 0, boulders: 0 };
    this.assignSpecies();
    // grazer shadow strength per cell (habitat 2): water under 40 C, scaled by the dish's grazing; none on world 1
    var gzn = this.gn * this.gn, TP = dish && dish.temp; this.gz = null; this.gzMax = 0;
    if (TP && TP.graze > 0) {
      this.gz = new Float32Array(gzn);
      for (i = 0; i < gzn; i++) { var tcx = ((i % this.gn) + 0.5) / this.gn, tcT = TP.cool + (TP.hot - TP.cool) * (0.5 - 0.5 * Math.cos(2 * Math.PI * tcx)); this.gz[i] = clamp((40 - tcT) / 6, 0, 1) * Math.min(1, TP.graze / 0.2); if (this.gz[i] > this.gzMax) this.gzMax = this.gz[i]; }
    }
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
      return { mN: mN / nn, mR: mR / nn, mF: mF / nn, cx: bx / n * 2 - 1, cy: by / n * 2 - 1, none: bv <= 1e-9 };
    });
    if (this.ag) {   // agent dishes: with no scouts alive the colony point stays where the colony last was (or the middle), never a corner
      var lastC = null, ai;
      for (ai = 0; ai < this.agg.length; ai++) { if (this.agg[ai].none) { if (lastC) { this.agg[ai].cx = lastC[0]; this.agg[ai].cy = lastC[1]; } else { this.agg[ai].cx = 0; this.agg[ai].cy = 0; } } else lastC = [this.agg[ai].cx, this.agg[ai].cy]; }
    }
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
    if (!extra.keepView) { this.resetView(); this.tick = 0; this.anim = null; this.exposure = 1; this.userMoved = false; }
    this.warm = 20; this.slowCount = 0;
    if (this.uiNote) this.note('');
  };
  Dish.prototype.setTick = function (t) { this.tick = t; };

  Dish.prototype.resetView = function () { this.view.cx = 0; this.view.cy = 0; this.view.zoom = 1; this.zoomAnim = null; };
  // Visual species by identity hash: the same individual is always the same species, across scrub, zoom, tier and replay.
  // Radii are scaled so the mean drawn area equals the old mean (chains are longer), so the on-screen pink:violet balance holds.
  Dish.prototype.assignSpecies = function () {
    var S = this.nat, n = S.n, id = this.D ? this.D.id : 0, mix = TUNE.speciesMix[id] || TUNE.speciesMix[0], j, a0 = 0, a1 = 0, PI = Math.PI;
    var F = new Uint8Array(n), G = new Uint8Array(n), HL = new Float32Array(n), RK = new Float32Array(n), TL = new Uint8Array(n), KD = new Uint8Array(n);
    var TP = this.D && this.D.temp, gnn = this.gn || 64;
    for (j = 0; j < n; j++) {
      var u = S.su[j], v = S.sv[j], w = S.sw[j], r0 = 0.8 + 0.5 * S.sz[j], r2 = r0 * r0, an;
      a0 += r2 * (PI + 4 * S.hl[j]);
      if (TP) {                                           // hot spring: the kind follows the cell's temperature; same shape forms, no new shader shape (Fischerella's Y and Thermus are skipped)
        var tT = TP.cool + (TP.hot - TP.cool) * (0.5 - 0.5 * Math.cos(2 * PI * (((S.ci[j] % gnn) + 0.5) / gnn)));
        if (tT >= 73) {                                   // Thermocrinis: thin long single rods
          KD[j] = 3; F[j] = 1; G[j] = 1; RK[j] = TUNE.lacR * 0.55; HL[j] = 2.4 + 1.6 * v; TL[j] = 0; an = PI + 4 * HL[j];
        } else if (w < (tT < 50 ? 0.55 : 0.3)) {          // Roseiflexus / Chloroflexus: long gliding filaments, 3 to 4 linked segments
          var fs = v < 0.5 ? 3 : 4, fh = 0.9, fg = TUNE.chainGap;
          KD[j] = 2; F[j] = 1; G[j] = fs; RK[j] = TUNE.lacR * 0.7; HL[j] = fs * (fh + 1 + fg / 2) - fg / 2 - 1; TL[j] = 0; an = fs * (PI + 4 * fh);
        } else {                                          // Thermostichus: short cylinders
          KD[j] = 1; F[j] = 1; G[j] = 1; RK[j] = TUNE.lacR; HL[j] = 0.5 + 0.3 * v; TL[j] = 0; an = PI + 4 * HL[j];
        }
      } else if (u < mix[0]) {                                   // Lactobacillus
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
    this.natKind = TP ? KD : null; this.natForm = F; this.natSeg = G; this.natHl = HL; this.natRK = RK; this.natTail = TL; this.spK = k;
  };
  Dish.prototype.colonyAtSmooth = function (t) {   // like colonyAt, interpolated between snapshots so the beacon glides
    var n = this.agg.length, x = clamp(t / 10, 0, n - 1), i = Math.floor(x), j = Math.min(n - 1, i + 1), f = x - i, a = this.agg[i], b = this.agg[j];
    return [a.cx + (b.cx - a.cx) * f, a.cy + (b.cy - a.cy) * f];
  };
  Dish.prototype.colonyAt = function (t) {
    var si = Math.min(this.agg.length - 1, Math.floor(t / 10)), a = this.agg[si];
    return a ? [a.cx, a.cy] : [0, 0];
  };

  // ---- rack focus: start blurred, hunt past focus once, settle (about 1.5 s). Three moments only: watch, run, jump.
  Dish.prototype.rackFocus = function (kind, target) {   // target {x, y} (optional, jump only): go to that point instead of the colony
    if (!this.supported) return;
    if (kind === 'jump') {
      var c = target ? [target.x, target.y] : this.colonyAt(this.tick), kk = target ? 1 : 0.6;
      if (this.reduced) { this.view.zoom = TUNE.jumpZoom; this.view.cx = c[0] * kk; this.view.cy = c[1] * kk; this.clampView(); return; }
      this.anim = { kind: 'jump', t: 0, dur: TUNE.rackDur, z0: this.view.zoom, c0: [this.view.cx, this.view.cy], c1: c, k1: kk, f0: -0.9 };
    } else {
      if (this.reduced) return;
      this.resetView(); this.anim = { kind: kind, t: 0, dur: TUNE.rackDur, f0: kind === 'watch' ? TUNE.rackStart : TUNE.rackStart * 0.9 };
    }
  };
  Dish.prototype.stepAnim = function (dt) {
    var a = this.anim; if (!a) return;
    a.t += dt;
    if (a.kind === 'event') {   // glide in, hold, ease back to the starting view; focus and exposure are left alone
      var ee = function (x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }, v = this.view, k;
      if (a.t >= a.tIn + a.tHold + a.tOut) { v.cx = a.c0[0]; v.cy = a.c0[1]; v.zoom = a.z0; this.anim = null; return; }
      if (a.t < a.tIn) k = ee(a.t / a.tIn); else if (a.t < a.tIn + a.tHold) k = 1; else k = 1 - ee((a.t - a.tIn - a.tHold) / a.tOut);
      v.zoom = a.z0 + (a.z1 - a.z0) * k; v.cx = a.c0[0] + (a.c1[0] - a.c0[0]) * k; v.cy = a.c0[1] + (a.c1[1] - a.c0[1]) * k;
      return;
    }
    var hunt = function (t, f0, tg) { return tg + (f0 - tg) * Math.exp(-TUNE.rackDecay * t) * Math.cos(2 * Math.PI * TUNE.rackFreq * t); };
    var e = function (x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
    this.focusBase = hunt(a.t, a.f0, TUNE.focus);
    this.exposure = TUNE.rackExposure + (1 - TUNE.rackExposure) * e(a.t / 1.0);
    if (a.kind === 'jump') {
      var u = e(a.t / 1.7);
      this.view.zoom = a.z0 + (TUNE.jumpZoom - a.z0) * u;
      this.view.cx = a.c0[0] + (a.c1[0] * a.k1 - a.c0[0]) * u; this.view.cy = a.c0[1] + (a.c1[1] * a.k1 - a.c0[1]) * u; this.clampView();
    }
    if (a.t >= a.dur) { this.anim = null; this.focusBase = TUNE.focus; this.exposure = 1; }
  };

  // ---- event zoom: a one-shot camera move to a located spot (the game decides when; the player's input always wins)
  Dish.prototype.eventActive = function () { return !!(this.anim && this.anim.kind === 'event'); };
  Dish.prototype.eventZoom = function (target, opts) {
    if (!this.supported || !this.run || this.reduced || this.userMoved || this.anim || !target || !isFinite(target.x) || !isFinite(target.y)) return false;
    opts = opts || {};
    var z1 = clamp(opts.zoom || TUNE.eventZoom, 1, TUNE.zoomMax), lim = Math.max(0, 1 - 0.9 / z1), d = Math.sqrt(target.x * target.x + target.y * target.y), f = d > lim ? lim / d : 1;
    this.anim = { kind: 'event', t: 0, z0: this.view.zoom, c0: [this.view.cx, this.view.cy], z1: z1, c1: [target.x * f, target.y * f], tIn: opts.glide || TUNE.eventIn, tHold: opts.hold || TUNE.eventHold, tOut: opts.back || TUNE.eventOut };
    return true;
  };
  // locate(kind, tick) -> {x, y, cool} in dish coordinates, or null. kind: 'colony' | 'thinning' | 'food'. Computed on demand from the 10-tick snapshots.
  Dish.prototype.locate = function (kind, tick) {
    var run = this.run; if (!run || !run.snaps || !run.snaps.length) return null;
    var S = run.snaps, n = run.n, last = S.length - 1, si = clamp(Math.floor((tick || 0) / 10), 0, last), TP = this.D && this.D.temp;
    function blocks(sn) {   // 4x4-cell blocks stepped by 2, as the colony focus does
      var out = [], gx, gy, xx, yy, s, f, sx, sy, v;
      for (gy = 0; gy < n - 3; gy += 2) for (gx = 0; gx < n - 3; gx += 2) {
        s = 0; f = 0; sx = 0; sy = 0;
        for (yy = 0; yy < 4; yy++) for (xx = 0; xx < 4; xx++) { v = sn.robot[(gy + yy) * n + gx + xx]; s += v; sx += v * (gx + xx + 0.5); sy += v * (gy + yy + 0.5); f += sn.food[(gy + yy) * n + gx + xx]; }
        out.push({ s: s, f: f, wx: s > 0 ? sx / s : gx + 2, wy: s > 0 ? sy / s : gy + 2, gx: gx + 2, gy: gy + 2 });
      }
      return out;
    }
    var B = blocks(S[si]), i, best = null, bv, pt;
    if (kind === 'colony') {
      for (i = 0; i < B.length; i++) if (!best || B[i].s > best.s) best = B[i];
      if (!best || best.s <= 0) return null;
      pt = [best.wx, best.wy];
    } else if (kind === 'thinning') {
      var a = si < last ? si : last - 1; if (a < 0) return null;
      var B0 = blocks(S[a]), B1 = blocks(S[a + 1]); bv = 0;
      for (i = 0; i < B0.length; i++) { var dv = B0[i].s - B1[i].s; if (dv > bv) { bv = dv; best = B0[i]; } }
      if (!best) return null;
      pt = [best.gx, best.gy];
    } else if (kind === 'food') {
      var mx = 0; for (i = 0; i < B.length; i++) if (B[i].s > mx) mx = B[i].s;
      if (mx <= 0) return null;
      for (i = 0; i < B.length; i++) if (B[i].s >= 0.25 * mx && (!best || B[i].f < best.f)) best = B[i];
      if (!best) return null;
      pt = [best.gx, best.gy];
    } else return null;
    var x = pt[0] / n * 2 - 1, y = pt[1] / n * 2 - 1, cool = false;
    if (TP) { var tcT = TP.cool + (TP.hot - TP.cool) * (0.5 - 0.5 * Math.cos(2 * Math.PI * ((x + 1) / 2))); cool = tcT < 40; }
    return { x: x, y: y, cool: cool };
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
      self.cancelAuto();
      var w0 = toWorld(e), z = clamp(self.view.zoom * Math.exp(-e.deltaY * (e.deltaMode ? 0.05 : 0.0016)), 1, TUNE.zoomMax);
      self.view.zoom = z; var w1 = toWorld(e); self.view.cx += w0[0] - w1[0]; self.view.cy += w0[1] - w1[1]; self.clampView(); self.touchedView();
    }, { passive: false });
    cv.addEventListener('pointerdown', function (e) { try { cv.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ } ptrs[e.pointerId] = [e.clientX, e.clientY]; last = [e.clientX, e.clientY]; pinch = 0; self.cancelAuto(); });
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
  Dish.prototype.cancelAuto = function () { if (this.anim && this.anim.kind === 'jump') this.anim = null; else if (this.anim && this.anim.kind === 'event') { this.anim = null; this.userMoved = true; } };
  Dish.prototype.touchedView = function () { this.userMoved = true; if (this.anim && this.anim.kind === 'event') this.anim = null; if (this.uiHint) this.uiHint.style.opacity = '0'; };

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
    var ag = this.ag, crash = clamp((0.72 - foodRatio) / 0.45, 0, 1), crashFade = ag ? 0 : crash * 0.5;
    var kill = hs(H.kill), stage = clamp(Math.round(hs(H.stage)), 0, 3), engK = stage >= 3 ? clamp(kill * 9, 0, 0.85) : 0;
    var seamS = this.seamS[ti] + (this.seamS[tj] - this.seamS[ti]) * tf;
    var pulse = this.reduced ? 0 : seamS > 0.18 ? seamS * (0.5 + 0.5 * Math.sin(tm * 5.5)) : 0;
    this.lastPulse = pulse;
    var jit = this.reduced || noCull ? 0 : 1, rN0 = TUNE.cellR / Math.sqrt(this.C / 20000), minN = TUNE.minPxN * eng.px / sc, minR = TUNE.minPxR * eng.px / sc, rN = Math.max(rN0, minN), rR = Math.max(rN0 * 1.7, minR), bf = this.bf, napF = bf.naps ? 0.14 : 0;
    var colX = this.colonyAt(t), self = this, bubbles = 0, S = this.nat, q, th, vis, x, y, j;
    var DX = 0, DY = 0;
    function wander(Sp, jj) {   // slow drift plus a faint jiggle, the same for natives and for you (so it is no tell)
      var a1 = 0.2 + 0.5 * Sp.g1[jj], a2 = 0.8 + 1.7 * Sp.g2[jj];
      DX = TUNE.driftAmp * Math.sin(a1 * tm + Sp.ph[jj] * 40) + 0.004 * Math.sin(a2 * tm + Sp.g1[jj] * 30);
      DY = TUNE.driftAmp * Math.cos(a1 * 1.13 * tm + Sp.g3[jj] * 40) + 0.004 * Math.cos(a2 * 0.9 * tm + Sp.ph[jj] * 23);
    }
    var pad = 0.04, X0 = cx - hw - pad - 0.1, X1 = cx + hw + pad + 0.1, Y0 = cy - hh - pad - 0.1, Y1 = cy + hh + pad + 0.1;
    // level of detail: when more individuals would be on screen than the tier shows legibly, a fixed subset (by identity) is drawn, a little larger
    var zz = this.view.zoom, cntN = 0, cntR = 0, thinN = 1, thinR = 1, sCap = TUNE.screenCells[this.tierName] * zz * zz * Math.pow(Math.min(eng.W, eng.H) / eng.px / 320, 2);
    if (!noCull && !ag) {
      for (j = 0; j < this.nat.n; j++) if (this.pN[this.nat.ci[j]] > this.nat.th[j]) cntN++;
      for (j = 0; j < this.rob.n; j++) if (this.pR[this.rob.ci[j]] > this.rob.th[j]) cntR++;
      var rsh = cntR / Math.max(1, cntN + cntR); sCap *= 1 + TUNE.crowd * smooth(0.3, 0.85, rsh); thinN = clamp(sCap / Math.max(1, cntN + cntR), 0.04, 1); var bst = 1 + (TUNE.robotBoost - 1) * (1 - smooth(TUNE.boostLo, TUNE.boostUntil, rsh)); thinR = Math.min(1, thinN * bst);   // robots are thinned less (you must stay findable); the on-screen pink share is overstated by robotBoost only while zoomed out
    }
    this.thin = [thinN, thinR]; this.vis = [cntN, cntR];
    var compN = 1, compR = 1, crowdK = 0, liftK = 0, pS = null, gn = this.gn;
    if (!noCull && !ag) {   // readable crowds (never part of signature(), which packs with noCull)
      var zg = 1 - smooth(TUNE.crowdZoom[0], TUNE.crowdZoom[1], zz), shg = smooth(TUNE.crowdShare[0], TUNE.crowdShare[1], rsh);
      crowdK = TUNE.crowdDim * zg * shg; liftK = TUNE.nativeLift * zg * shg;
      if (crowdK > 0.001) {
        var pR = this.pR, ix, iy, dx, dy, sx, sy, sm9, cnt9;
        if (!this.pRs || this.pRs.length !== gn * gn) this.pRs = new Float32Array(gn * gn);
        pS = this.pRs;
        for (iy = 0; iy < gn; iy++) for (ix = 0; ix < gn; ix++) {
          sm9 = 0; cnt9 = 0;
          for (dy = -1; dy <= 1; dy++) { sy = iy + dy; if (sy < 0 || sy >= gn) continue; for (dx = -1; dx <= 1; dx++) { sx = ix + dx; if (sx < 0 || sx >= gn) continue; sm9 += pR[sy * gn + sx]; cnt9++; } }
          pS[iy * gn + ix] = sm9 / cnt9;
        }
      }
    }
    // natives
    if (!noCull && !ag) this.shapeCounts = this.natKind ? { thermostichus: 0, filament: 0, thermocrinis: 0 } : { lacto: 0, strep: 0, helico: 0 };
    var AG = null;
    if (ag) { AG = this.packAgents(t, sc, noCull, [X0, X1, Y0, Y1], cap); n = AG.n; cntN = AG.natives; cntR = AG.scouts; this.vis = [cntN, cntR]; this.agCount = { scouts: AG.scouts, natives: AG.natives, boulders: AG.boulders }; if (!noCull) this.shapeCounts = { scouts: AG.scouts, quad: AG.kinds[1], halo: AG.kinds[2], sali: AG.kinds[3] }; }
    for (j = 0; j < S.n && n < cap && !ag; j++) {
      q = this.pN[S.ci[j]]; th = S.th[j]; vis = clamp((q - th + TUNE.deathMargin) / (0.22 * q + 0.004 + TUNE.deathMargin), 0, 1); if (vis <= 0.04 || S.g4[j] > thinN) continue;
      x = S.x[j]; y = S.y[j];
      // multiplying and dying: a newborn comes out of its parent (the previous individual in the same cell, if alive) and settles at its own place; a dying one shrinks back toward the parent
      if (j > 0 && S.ci[j - 1] === S.ci[j] && this.pN[S.ci[j]] > S.th[j - 1]) { var bud = smooth(0, 1, clamp((q - th) / (0.22 * q + 0.004), 0, 1)); x = S.x[j - 1] + (x - S.x[j - 1]) * bud; y = S.y[j - 1] + (y - S.y[j - 1]) * bud; }
      if (jit) { wander(S, j); x += DX; y += DY; }
      if (!noCull && (x < X0 || x > X1 || y < Y0 || y > Y1)) continue;
      vis = Math.min(1, (q - th) / (0.22 * q + 0.004));
      o = n * 16; inst[o] = x; inst[o + 1] = y; inst[o + 2] = rN * compN * (0.8 + 0.5 * S.sz[j]) * (0.12 + 0.88 * Math.pow(vis, 0.7)) * clamp((thinN - S.g4[j]) / 0.08 + 0.3, 0.3, 1) * this.natRK[j]; inst[o + 3] = S.ang[j] + (jit ? 0.25 * Math.sin(tm * 0.2 + S.ph[j] * 30) : 0);
      inst[o + 4] = 0; inst[o + 5] = S.dep[j]; inst[o + 6] = S.ph[j]; inst[o + 7] = this.natHl[j];
      inst[o + 8] = 0; inst[o + 9] = 0; inst[o + 10] = this.natSeg[j]; inst[o + 11] = this.natTail[j]; inst[o + 12] = crashFade * (0.6 + 0.4 * S.g3[j]) - liftK; inst[o + 13] = 0; inst[o + 14] = 0; inst[o + 15] = this.natForm[j];
      n++;
      if (!noCull && this.natKind) { var kdj = this.natKind[j]; if (kdj === 1) this.shapeCounts.thermostichus++; else if (kdj === 2) this.shapeCounts.filament++; else this.shapeCounts.thermocrinis++; }
      else if (!noCull) { var fmj = this.natForm[j]; if (fmj === 1) this.shapeCounts.lacto++; else if (fmj === 2) this.shapeCounts.strep++; else this.shapeCounts.helico++; }
    }
    // robots (pink): dissolve under acid, engulfed by immune cells, dormant ovals, seams from the Naturalness channel
    S = this.rob;
    for (j = 0; j < S.n && n < cap && !ag; j++) {
      q = this.pR[S.ci[j]]; th = S.th[j]; if (q <= th || S.g4[j] > thinR) continue;
      x = S.x[j]; y = S.y[j];
      if (jit) { wander(S, j); x += DX; y += DY; }
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
      inst[o + 12] = pS ? 1 - (1 - crashFade * (0.6 + 0.4 * S.g3[j])) * (1 - crowdK * smooth(TUNE.crowdLo, TUNE.crowdHi, pS[S.ci[j]])) : crashFade * (0.6 + 0.4 * S.g3[j]); inst[o + 13] = eg; inst[o + 14] = dormant; inst[o + 15] = 0;
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
    this.beaconA = 0;
    if (!noCull && TUNE.beacon > 0 && ns < scap) {
      var lg = this.lag[ti] + (this.lag[tj] - this.lag[ti]) * tf, l0 = Math.max(1e-6, this.lag[0]);
      var bz = TUNE.beacon * (1 - smooth(TUNE.beaconZ0, TUNE.beaconZ1, zz)) * (1 - smooth(0.3, 0.6, cntR / Math.max(1, cntN + cntR))) * smooth(0.02, 0.12, lg / l0);
      if (bz > 0.02) { var cb = this.colonyAtSmooth(t), kb = ns * 8;
        spk[kb] = cb[0]; spk[kb + 1] = cb[1]; spk[kb + 2] = TUNE.beaconR * clamp(Math.sqrt(lg / l0), 0.45, 2.0); spk[kb + 3] = TUNE.focus;
        spk[kb + 4] = 3; spk[kb + 5] = 0; spk[kb + 6] = 0; spk[kb + 7] = bz; ns++; this.beaconA = bz; }
    }
    // waste haze texture (red), fizz zone (blue: where robots are, as a share of the colony), immune glow (green, written above)
    for (k3 = 0; k3 < FG * FG; k3++) {
      var gi = ((((k3 / FG) | 0) * this.gn / FG) | 0) * this.gn + (((k3 % FG) * this.gn / FG) | 0);
      if (ag) { fieldG[k3 * 4] = this.foodR[gi]; fieldG[k3 * 4 + 2] = 0; } else { fieldG[k3 * 4] = clamp((this.fieldBuf.W[gi] - 0.125) / 0.10, 0, 1) * 255; fieldG[k3 * 4 + 2] = clamp(this.pR[gi] * 4, 0, 1) * 255; } fieldG[k3 * 4 + 3] = this.gz ? this.gz[gi] * 255 : 255;
    }
    this.fx = { acidLoss: acidLoss, stress: stress, crash: crash, stage: stage, kill: kill, seamS: seamS, pulse: pulse, foodRatio: foodRatio };
    return { n: n, ns: ns };
  };

  // ---- agent dishes: one instance per recorded individual, interpolated between frames[floor(t)] and the next by matching ids (both sorted by id)
  Dish.prototype.packAgents = function (t, sc, noCull, bnd, cap) {
    var eng = this.eng, inst = eng.inst, run = this.run, F = run.frames, T = F.length - 1, R = this.agR, um = 1 / R, k16 = 2 * R / 65535, TAU = 6.283185307179586;
    t = clamp(t, 0, T); var i0 = Math.floor(t), i1 = Math.min(T, i0 + 1), f = t - i0, A = F[i0], B = F[i1];
    var minS = TUNE.agMinPxS * eng.px / sc, minN = TUNE.agMinPxN * eng.px / sc, flag = this.agFlag;
    var n = 0, nS = 0, nN = 0, nB = 0, kinds = [0, 0, 0, 0], a = 0, b = 0, na = A.n, nb = B.n, idA = A.id, idB = B.id, o, mg = 0.03, i;
    var X0 = bnd[0], X1 = bnd[1], Y0 = bnd[2], Y1 = bnd[3];
    if (!this.agIds || this.agIds.length < eng.ICAP) this.agIds = new Int32Array(eng.ICAP);
    var ids = this.agIds;
    // food: the recorded grid (every 5 ticks), interpolated; drives the warm glow (haze channel) and the food specks
    var fs = run.foods, fi = t / 5, fa = Math.min(fs.length - 1, Math.floor(fi)), fb = Math.min(fs.length - 1, fa + 1), fg = fi - fa, FA = fs[fa], FB = fs[fb];
    if (!this.foodR) this.foodR = new Uint8ClampedArray(this.gn * this.gn);
    var q, fv, nnn = this.gn * this.gn;
    for (q = 0; q < nnn; q++) {
      fv = (FA[q] + (FB[q] - FA[q]) * fg) / (run.P3 ? run.P3.foodScale : 1500);
      this.pF[q] = clamp(fv / TUNE.agFoodSpeck, 0, 1);
      this.foodR[q] = (1 - Math.exp(-fv / TUNE.agFoodK)) * 255 * TUNE.agFoodGlow;
    }
    while ((a < na || b < nb) && n < cap) {
      var ia = a < na ? idA[a] : 4294967295, ib = b < nb ? idB[b] : 4294967295, kb, x, y, hd, al = 1, id;
      if (ia === ib) {
        var d = B.h[b] - A.h[a]; if (d > 128) d -= 256; else if (d < -128) d += 256;
        x = A.x[a] + (B.x[b] - A.x[a]) * f; y = A.y[a] + (B.y[b] - A.y[a]) * f; hd = (A.h[a] + d * f) * TAU / 256; kb = A.k[a]; id = ia; a++; b++;
      } else if (ia < ib) { x = A.x[a]; y = A.y[a]; hd = A.h[a] * TAU / 256; kb = A.k[a]; id = ia; al = 1 - f; a++; }
      else { x = B.x[b]; y = B.y[b]; hd = B.h[b] * TAU / 256; kb = B.k[b]; id = ib; al = f; b++; }
      if (al < 0.002) continue;
      x = (x * k16 - R) * um; y = (y * k16 - R) * um;
      if (!noCull && (x < X0 || x > X1 || y < Y0 || y > Y1)) { var kk0 = kb & 7; if (kk0 === 0) nS++; else nN++; kinds[kk0]++; continue; }
      var kd = kb & 7, mv = (kb & 8) !== 0, rest = (kb & 16) !== 0, hh = hash32(id, 3, 9) / 4294967296, hz = (hash32(id, 5, 1) / 4294967296 + hash32(id, 6, 2) / 4294967296 + hash32(id, 7, 3) / 4294967296 - 1.5) * 1.15;
      o = n * 16; inst[o] = x; inst[o + 1] = y; inst[o + 3] = hd; inst[o + 6] = hh; inst[o + 8] = 0; inst[o + 9] = 0; inst[o + 10] = 0; inst[o + 11] = 0; inst[o + 12] = 1 - al; inst[o + 13] = 0; inst[o + 14] = 0; inst[o + 15] = 0;
      if (kd === 0) {
        var dorm = rest ? 1 : 0;
        inst[o + 2] = Math.max(TUNE.agScoutUm * um, minS) * (0.92 + 0.16 * hh) * (dorm ? 0.72 : 1); inst[o + 4] = 1; inst[o + 5] = clamp(0.5 + hz * 0.02, 0, 1); inst[o + 7] = dorm ? TUNE.agScoutHlRest : TUNE.agScoutHl;
        inst[o + 11] = flag && mv && !dorm ? 1 : 0; inst[o + 14] = dorm; nS++;
      } else {
        inst[o + 4] = 0; inst[o + 5] = clamp(0.5 + hz * 0.12, 0, 1); nN++;
        if (kd === 1) { inst[o + 2] = Math.max(TUNE.agQuadUm * um, minN * 1.15); inst[o + 7] = 0; inst[o + 15] = 5; }
        else if (kd === 2) { inst[o + 2] = Math.max(TUNE.agHaloUm * um, minN); inst[o + 7] = TUNE.agHaloHl; inst[o + 10] = 1; inst[o + 15] = 1; inst[o + 11] = mv ? 1 : 0; }
        else { inst[o + 2] = Math.max(TUNE.agSaliUm * um, minN * 0.8); inst[o + 7] = TUNE.agSaliHl; inst[o + 15] = 4; }
      }
      ids[n] = id; kinds[kd]++; n++;
    }
    if (!this.noBoulders) {
      var bl = run.boulders || [], GR = TUNE.agGrow, FD = TUNE.agFade;
      for (i = 0; i < bl.length && n < cap; i++) {
        var Bq = bl[i], age = t - Bq.birth, alpha = 1, gs = 1;
        if (age < 0) continue;
        if (Bq.death != null) { if (t >= Bq.death + FD) continue; if (t >= Bq.death) alpha = 1 - (t - Bq.death) / FD; }
        if (age < GR) { gs = smooth(0, 1, age / GR); alpha = Math.min(alpha, 0.25 + 0.75 * gs); }
        var hp = Bq.hp ? Bq.hp[Math.max(0, Math.min(Bq.hp.length - 1, Math.floor(t)))] : 1;   // a boulder being eaten shrinks and fades (dishes with deplete)
        if (hp < 1) alpha *= 0.35 + 0.65 * hp;
        var bx = Bq.x * um, by = Bq.y * um, br = Bq.sigma * TUNE.agBoulder * um * (0.3 + 0.7 * gs) * (hp < 1 ? 0.45 + 0.55 * hp : 1);
        if (!noCull && (bx + br < X0 || bx - br > X1 || by + br < Y0 || by - br > Y1)) { nB++; continue; }
        o = n * 16; inst[o] = bx; inst[o + 1] = by; inst[o + 2] = br; inst[o + 3] = 0; inst[o + 4] = 4; inst[o + 5] = clamp(0.5 + (hash32(i, 11, 4) / 4294967296 - 0.5) * 0.08, 0, 1); inst[o + 6] = hash32(i, 12, 5) / 4294967296;
        inst[o + 7] = 0; inst[o + 8] = 0; inst[o + 9] = 0; inst[o + 10] = 0; inst[o + 11] = 0; inst[o + 12] = 1 - alpha; inst[o + 13] = 0; inst[o + 14] = 0; inst[o + 15] = 0; ids[n] = -1 - i; n++; nB++;
      }
    }
    return { n: n, scouts: nS, natives: nN, boulders: nB, kinds: kinds };
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
    if (!this.reduced && (!this.anim || this.anim.kind === 'event')) focus += 0.03 * Math.sin(this.time * 0.8) + 0.014 * Math.sin(this.time * 2.1 + 1);
    this.focus = focus;
    var zoom = this.view.zoom, sc = this.baseScale() * zoom, K = 34 * TUNE.blur * clamp(Math.min(eng.W, eng.H) / eng.px / 760, 0.28, 1.2) * (this.anim && this.anim.kind !== 'event' ? 1 + TUNE.rackBoost * Math.exp(-1.8 * this.anim.t) : 1), kz = 0.55 + 0.45 * Math.sqrt(zoom);
    var bgBlur = clamp(Math.max(Math.abs(TUNE.focus - focus) - TUNE.tol, 0) * K * kz, 0, 72);
    var tm = this.reduced ? 0 : this.time;
    var r = this.pack(Math.min(this.T, Math.max(0, this.tick)), tm, sc, false), fx = this.fx;
    var cellPx = 0.0105 * this.ss * 1.45 * 2.5 * sc, cloud = cellPx < 8 && !this.ag;
    var lt = null, LG = this.ag && this.run && this.run.light;   // dish 17: the moving light patch, micrometres to dish units
    if (LG && LG.x && LG.x.length) { var lti = Math.min(LG.x.length - 1, Math.max(0, Math.floor(this.tick))), ltj = Math.min(LG.x.length - 1, lti + 1), ltf = clamp(this.tick, 0, LG.x.length - 1) - lti, uR = 1 / this.agR; lt = this.ltBuf || (this.ltBuf = [0, 0, 0, 0]); lt[0] = (LG.x[lti] + (LG.x[ltj] - LG.x[lti]) * ltf) * uR; lt[1] = (LG.y[lti] + (LG.y[ltj] - LG.y[lti]) * ltf) * uR; lt[2] = LG.r * uR; lt[3] = LG.core * uR; }
    var D = this.D, acidAmb = D && D.acid ? Math.min(1, D.acid * 2) * 0.25 : 0;
    var expo = this.exposure * (r.n > 1500 ? Math.max(0.55, 1 - 0.3 * Math.log(r.n / 1500) / Math.LN10) : 1);
    eng.render({
      n: r.n, ns: r.ns, cx: this.view.cx, cy: this.view.cy, sc: sc, zoom: zoom, focus: focus, K: K, tol: TUNE.tol, depth: 1, bgBlur: bgBlur,
      acid: acidAmb, fizz: clamp(fx.acidLoss * 2.5, 0, 1), time: tm, exposure: expo, cloud: cloud, dish: 1, haze: 1, bloom: TUNE.bloom, bloomThr: TUNE.bloomThr, cloudK: TUNE.cloud, vig: TUNE.vignette, chroma: TUNE.chroma, grain: TUNE.grain,
      field: this.field, bld: { env: this.bf.env, ee: 0, tight: this.bf.tight, pump: this.bf.pump, shell: this.bf.shell, acidIn: this.bf.acidIn, sync: this.bf.sync, head: this.bf.head, reflex: this.bf.reflex, core: this.bf.core, refA: -2.356 },
      lt: lt, shadow: this.gzMax > 0 ? 1 : 0, tH: D && D.temp ? D.temp.hot : 0, tC: D && D.temp ? D.temp.cool : 0,
      pulse: fx.pulse, lowBloom: this.tierName === 'phone', pulseGlow: TUNE.pulseGlow, glint: TUNE.glint,
      sp: { helAmp: TUNE.helAmp, helWaves: TUNE.helWaves, tailW: TUNE.tailW, gap: TUNE.chainGap, strPitch: TUNE.strPitch, granS: TUNE.granS, bokK: 1 - TUNE.bokehCut * smooth(TUNE.bokehZ0, TUNE.bokehZ1, zoom) }
    });
    this.drawn = r.n; this.focusNow = focus; this.bgBlur = bgBlur; this.scNow = sc;
    this.updateScale(sc);
    if (this.uiThin) { var th = this.thin && this.thin[0] < 0.97 && this.vis && this.vis[1] > 0; if (th !== this.thinShown) { this.thinShown = th; this.uiThin.hidden = !th; } }
    this.jsMs = (this.jsMs || 0) + ((performance.now() - tJs) - (this.jsMs || 0)) * 0.1;
    this.autoTier(raw);
  };
  Dish.prototype.updateScale = function (sc) {
    if (!this.uiScale) return;
    var perUm = sc / this.eng.px / (this.ag ? this.agR : 100), opts = [5, 10, 20, 50, 100, 200, 500], best = 5, i;   // one world unit is taken as 100 micrometres
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
      else if (this.opts.autoFallback !== false && this.ft > TUNE.failMs) { this.supported = false; this.err = 'too slow'; if (this.onfail) this.onfail('slow'); }   // at the lowest tier the detailed view stays unless frames are very slow: a choppy real dish beats the flat one
      this.slowCount = 0;
    }
  };
  Dish.prototype.resize = function () { if (this.supported) this.eng.resize(); };
  Dish.prototype.stats = function () {
    var e = this.eng;
    var ac = this.ag ? this.agCount : null;
    return { agents: !!this.ag, scouts: ac ? ac.scouts : null, natives: ac ? ac.natives : null, boulders: ac ? ac.boulders : null, supported: this.supported, webgl2: !!e.gl, renderer: e.name, tier: this.tierName, budget: this.C, candidates: this.cellCount, drawn: this.drawn || 0, shapeCounts: this.shapeCounts || null, beacon: +(this.beaconA || 0).toFixed(2), spK: +(this.spK || 0).toFixed(3), immune: this.immVisible || 0,
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

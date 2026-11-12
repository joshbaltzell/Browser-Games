/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var dm=0,Yd=1,fm=2;var qa=1,pm=2,To=3,Os=0,nn=1,An=2,Mr=0,Eo=1,qd=2,$d=3,Zd=4,mm=5;var wr=100,gm=101,xm=102,vm=103,ym=104,_m=200,bm=201,Mm=202,wm=203,Kd=204,Jd=205,Sm=206,Tm=207,Em=208,Am=209,Rm=210,Cm=211,Pm=212,Im=213,Lm=214,fc=0,pc=1,mc=2,co=3,gc=4,xc=5,vc=6,yc=7,jd=0,Dm=1,Nm=2,Fi=0,Qd=1,ef=2,tf=3,nf=4,sf=5,rf=6,of=7;var af=300,Sr=301,Ao=302,Jc=303,jc=304,_c=1e3,Ni=1001,bc=1002,un=1003,Om=1004;var $a=1005;var dn=1006,Qc=1007;var fs=1008;var $n=1009,lf=1010,cf=1011,Ro=1012,eh=1013,wi=1014,si=1015,Si=1016,th=1017,nh=1018,Tr=1020,hf=35902,uf=35899,df=1021,ff=1022,Zn=1023,hs=1026,ps=1027,ih=1028,sh=1029,ks=1030,rh=1031;var oh=1033,Za=33776,Ka=33777,Ja=33778,ja=33779,ah=35840,lh=35841,ch=35842,hh=35843,uh=36196,dh=37492,fh=37496,ph=37488,mh=37489,Qa=37490,gh=37491,xh=37808,vh=37809,yh=37810,_h=37811,bh=37812,Mh=37813,wh=37814,Sh=37815,Th=37816,Eh=37817,Ah=37818,Rh=37819,Ch=37820,Ph=37821,Ih=36492,Lh=36494,Dh=36495,Nh=36283,Oh=36284,el=36285,kh=36286;var fa=2300,Mc=2301,uc=2302,kd=2303,Ud=2400,Fd=2401,Bd=2402;var km=3200;var pf=0,Um=1,ms="",tn="srgb",pa="srgb-linear",ma="linear",Dt="srgb";var dc=7680;var Fm=519,Bm=512,zm=513,Hm=514,mf=515,Gm=516,Vm=517,gf=518,xf=519,vf=35044,Co=35048;var yf="300 es",ii=2e3,ga=2001;function A_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function R_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function xa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Wm(){let t=xa("canvas");return t.style.display="block",t}var C0={},ho=null;function va(...t){let e="THREE."+t.shift();ho?ho("log",e,...t):console.log(e,...t)}function Xm(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function lt(...t){t=Xm(t);let e="THREE."+t.shift();if(ho)ho("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ht(...t){t=Xm(t);let e="THREE."+t.shift();if(ho)ho("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function la(...t){let e=t.join(" ");e in C0||(C0[e]=!0,lt(...t))}function Ym(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var qm={[fc]:fc,[mc]:vc,[gc]:gc,[co]:xc,[pc]:pc,[vc]:mc,[yc]:yc,[xc]:co},Oi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],P0=1234567,ca=Math.PI/180,uo=180/Math.PI;function gs(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[t&255]+Sn[t>>8&255]+Sn[t>>16&255]+Sn[t>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function St(t,e,n){return Math.max(e,Math.min(n,t))}function _f(t,e){return(t%e+e)%e}function C_(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function P_(t,e,n){return t!==e?(n-t)/(e-t):0}function ha(t,e,n){return(1-n)*t+n*e}function I_(t,e,n,i){return ha(t,e,1-Math.exp(-n*i))}function L_(t,e=1){return e-Math.abs(_f(t,e*2)-e)}function D_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function N_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function O_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function k_(t,e){return t+Math.random()*(e-t)}function U_(t){return t*(.5-Math.random())}function F_(t){t!==void 0&&(P0=t);let e=P0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B_(t){return t*ca}function z_(t){return t*uo}function H_(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function G_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function bf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function V_(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*p,l*f,a*c);break;case"YXY":t.set(l*f,a*h,l*p,a*c);break;case"ZYZ":t.set(l*p,l*f,a*h,a*c);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Uh(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Mf(t,e){if(e.constructor===Float32Array)return t;let n=Uh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function wf(t,e){if(e.constructor===Float32Array)return t;let n=Uh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var Fh={DEG2RAD:ca,RAD2DEG:uo,generateUUID:gs,clamp:St,euclideanModulo:_f,mapLinear:C_,inverseLerp:P_,lerp:ha,damp:I_,pingpong:L_,smoothstep:D_,smootherstep:N_,randInt:O_,randFloat:k_,randFloatSpread:U_,seededRandom:F_,degToRad:B_,radToDeg:z_,isPowerOfTwo:H_,ceilPowerOfTwo:G_,floorPowerOfTwo:bf,setQuaternionFromProperEuler:V_,normalize:wf,denormalize:Mf},Cf=class Cf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cf.prototype.isVector2=!0;var Xe=Cf,Ln=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(d!==g||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*g;m<0&&(u=-u,f=-f,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);x=Math.sin(x*y)/w,a=Math.sin(a*y)/w,l=l*x+u*a,c=c*x+f*a,h=h*x+p*a,d=d*x+g*a}else{l=l*x+u*a,c=c*x+f*a,h=h*x+p*a,d=d*x+g*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[n]=a*p+h*d+l*f-c*u,e[n+1]=l*p+h*u+c*d-a*f,e[n+2]=c*p+h*f+a*u-l*d,e[n+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pf=class Pf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(I0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(I0.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pf.prototype.isVector3=!0;var B=Pf,dd=new B,I0=new Ln,If=class If{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],g=s[0],m=s[3],x=s[6],y=s[1],w=s[4],b=s[7],M=s[2],_=s[5],v=s[8];return r[0]=o*g+a*y+l*M,r[3]=o*m+a*w+l*_,r[6]=o*x+a*b+l*v,r[1]=c*g+h*y+d*M,r[4]=c*m+h*w+d*_,r[7]=c*x+h*b+d*v,r[2]=u*g+f*y+p*M,r[5]=u*m+f*w+p*_,r[8]=u*x+f*b+p*v,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=n*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=d*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=u*g,e[4]=(h*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=f*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return la("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fd.makeScale(e,n)),this}rotate(e){return la("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fd.makeRotation(-e)),this}translate(e,n){return la("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};If.prototype.isMatrix3=!0;var dt=If,fd=new dt,L0=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D0=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W_(){let t={enabled:!0,workingColorSpace:pa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Dt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ms?ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[pa]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:L0,fromXYZ:D0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:L0,fromXYZ:D0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),t}var At=W_();function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Wr,wc=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=xa("canvas")),Wr.width=e.width,Wr.height=e.height;let s=Wr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=xa("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},X_=0,fo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pd(s[o].image)):r.push(pd(s[o]))}else r=pd(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function pd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wc.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var Y_=0,md=new B,Dn=class t extends Oi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Ni,s=Ni,r=dn,o=fs,a=Zn,l=$n,c=t.DEFAULT_ANISOTROPY,h=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=gs(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _c:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _c:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=af;Dn.DEFAULT_ANISOTROPY=1;var Lf=class Lf{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let w=(c+1)/2,b=(f+1)/2,M=(x+1)/2,_=(h+u)/4,v=(d+g)/4,S=(p+m)/4;return w>b&&w>M?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=_/i,r=v/i):b>M?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=_/s,r=S/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=v/r,s=S/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lf.prototype.isVector4=!0;var Xt=Lf,Sc=class extends Oi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Dn({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new fo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends Sc{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ya=class extends Dn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends Dn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Kc=class Kc{constructor(e,n,i,s,r,o,a,l,c,h,d,u,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,d,u,f,p,g,m)}set(e,n,i,s,r,o,a,l,c,h,d,u,f,p,g,m){let x=this.elements;return x[0]=e,x[4]=n,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=u,x[3]=f,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Xr.setFromMatrixColumn(e,0).length(),r=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,g=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+p*c,n[5]=u-g*c,n[9]=-a*l,n[2]=g-u*c,n[6]=p+f*c,n[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,g=c*d;n[0]=u+g*a,n[4]=p*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-p,n[6]=g+u*a,n[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,g=c*d;n[0]=u-g*a,n[4]=-o*d,n[8]=p+f*a,n[1]=f+p*a,n[5]=o*h,n[9]=g-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,g=a*d;n[0]=l*h,n[4]=p*c-f,n[8]=u*c+g,n[1]=l*d,n[5]=g*c+u,n[9]=f*c-p,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,g=a*c;n[0]=l*h,n[4]=g-u*d,n[8]=p*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*d+p,n[10]=u-g*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,g=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+g,n[5]=o*h,n[9]=f*d-p,n[2]=p*d-f,n[6]=a*h,n[10]=g*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q_,e,$_)}lookAt(e,n,i){let s=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Es.crossVectors(i,Wn),Es.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Es.crossVectors(i,Wn)),Es.normalize(),Ol.crossVectors(Wn,Es),s[0]=Es.x,s[4]=Ol.x,s[8]=Wn.x,s[1]=Es.y,s[5]=Ol.y,s[9]=Wn.y,s[2]=Es.z,s[6]=Ol.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],g=i[6],m=i[10],x=i[14],y=i[3],w=i[7],b=i[11],M=i[15],_=s[0],v=s[4],S=s[8],P=s[12],R=s[1],D=s[5],T=s[9],L=s[13],E=s[2],N=s[6],U=s[10],G=s[14],te=s[3],X=s[7],ne=s[11],Z=s[15];return r[0]=o*_+a*R+l*E+c*te,r[4]=o*v+a*D+l*N+c*X,r[8]=o*S+a*T+l*U+c*ne,r[12]=o*P+a*L+l*G+c*Z,r[1]=h*_+d*R+u*E+f*te,r[5]=h*v+d*D+u*N+f*X,r[9]=h*S+d*T+u*U+f*ne,r[13]=h*P+d*L+u*G+f*Z,r[2]=p*_+g*R+m*E+x*te,r[6]=p*v+g*D+m*N+x*X,r[10]=p*S+g*T+m*U+x*ne,r[14]=p*P+g*L+m*G+x*Z,r[3]=y*_+w*R+b*E+M*te,r[7]=y*v+w*D+b*N+M*X,r[11]=y*S+w*T+b*U+M*ne,r[15]=y*P+w*L+b*G+M*Z,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],g=e[7],m=e[11],x=e[15],y=l*f-c*u,w=a*f-c*d,b=a*u-l*d,M=o*f-c*h,_=o*u-l*h,v=o*d-a*h;return n*(g*y-m*w+x*b)-i*(p*y-m*M+x*_)+s*(p*w-g*M+x*v)-r*(p*b-g*_+m*v)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return n*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],g=e[13],m=e[14],x=e[15],y=n*a-i*o,w=n*l-s*o,b=n*c-r*o,M=i*l-s*a,_=i*c-r*a,v=s*c-r*l,S=h*g-d*p,P=h*m-u*p,R=h*x-f*p,D=d*m-u*g,T=d*x-f*g,L=u*x-f*m,E=y*L-w*T+b*D+M*R-_*P+v*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/E;return e[0]=(a*L-l*T+c*D)*N,e[1]=(s*T-i*L-r*D)*N,e[2]=(g*v-m*_+x*M)*N,e[3]=(u*_-d*v-f*M)*N,e[4]=(l*R-o*L-c*P)*N,e[5]=(n*L-s*R+r*P)*N,e[6]=(m*b-p*v-x*w)*N,e[7]=(h*v-u*b+f*w)*N,e[8]=(o*T-a*R+c*S)*N,e[9]=(i*R-n*T-r*S)*N,e[10]=(p*_-g*b+x*y)*N,e[11]=(d*b-h*_-f*y)*N,e[12]=(a*P-o*D-l*S)*N,e[13]=(n*D-i*P+s*S)*N,e[14]=(g*w-p*M-m*y)*N,e[15]=(h*M-d*w+u*y)*N,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,g=o*h,m=o*d,x=a*d,y=l*c,w=l*h,b=l*d,M=i.x,_=i.y,v=i.z;return s[0]=(1-(g+x))*M,s[1]=(f+b)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(f-b)*_,s[5]=(1-(u+x))*_,s[6]=(m+y)*_,s[7]=0,s[8]=(p+w)*v,s[9]=(m-y)*v,s[10]=(1-(u+g))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Xr.set(s[0],s[1],s[2]).length(),a=Xr.set(s[4],s[5],s[6]).length(),l=Xr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yi.copy(this);let c=1/o,h=1/a,d=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,n.setFromRotationMatrix(yi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=ii,l=!1){let c=this.elements,h=2*r/(n-e),d=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ga)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ii,l=!1){let c=this.elements,h=2/(n-e),d=2/(i-s),u=-(n+e)/(n-e),f=-(i+s)/(i-s),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===ii)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===ga)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Kc.prototype.isMatrix4=!0;var Mt=Kc,Xr=new B,yi=new Mt,q_=new B(0,0,0),$_=new B(1,1,1),Es=new B,Ol=new B,Wn=new B,N0=new Mt,O0=new Ln,zn=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return N0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return O0.setFromEuler(this),this.setFromQuaternion(O0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var _a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Z_=0,k0=new B,Yr=new Ln,is=new Mt,kl=new B,Jo=new B,K_=new B,J_=new Ln,U0=new B(1,0,0),F0=new B(0,1,0),B0=new B(0,0,1),z0={type:"added"},j_={type:"removed"},qr={type:"childadded",child:null},gd={type:"childremoved",child:null},Kt=class t extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new B,n=new zn,i=new Ln,s=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new dt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(U0,e)}rotateY(e){return this.rotateOnAxis(F0,e)}rotateZ(e){return this.rotateOnAxis(B0,e)}translateOnAxis(e,n){return k0.copy(e).applyQuaternion(this.quaternion),this.position.add(k0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(U0,e)}translateY(e){return this.translateOnAxis(F0,e)}translateZ(e){return this.translateOnAxis(B0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?kl.copy(e):kl.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Jo,kl,this.up):is.lookAt(kl,Jo,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(is),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z0),qr.child=e,this.dispatchEvent(qr),qr.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(j_),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z0),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,K_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,J_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new B(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mt=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q_={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=n.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},$m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function xd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var et=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=At.workingColorSpace){return this.r=e,this.g=n,this.b=i,At.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=At.workingColorSpace){if(e=_f(e,1),n=St(n,0,1),i=St(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=xd(o,r,e+1/3),this.g=xd(o,r,e),this.b=xd(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,n=tn){function i(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tn){let i=$m[e.toLowerCase()];return i!==void 0?this.setHex(i,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return At.workingToColorSpace(Tn.copy(this),e),Math.round(St(Tn.r*255,0,255))*65536+Math.round(St(Tn.g*255,0,255))*256+Math.round(St(Tn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Tn.copy(this),n);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=tn){At.workingToColorSpace(Tn.copy(this),e);let n=Tn.r,i=Tn.g,s=Tn.b;return e!==tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(As),this.setHSL(As.h+e,As.s+n,As.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(As),e.getHSL(Ul);let i=ha(As.h,Ul.h,n),s=ha(As.s,Ul.s,n),r=ha(As.l,Ul.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new et;et.NAMES=$m;var pr=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},_i=new B,ss=new B,vd=new B,rs=new B,$r=new B,Zr=new B,H0=new B,yd=new B,_d=new B,bd=new B,Md=new Xt,wd=new Xt,Sd=new Xt,ls=class t{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),_i.subVectors(e,n),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){_i.subVectors(s,n),ss.subVectors(i,n),vd.subVectors(e,n);let o=_i.dot(_i),a=_i.dot(ss),l=_i.dot(vd),c=ss.dot(ss),h=ss.dot(vd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(o,rs.y),l.addScaledVector(a,rs.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Md.setScalar(0),wd.setScalar(0),Sd.setScalar(0),Md.fromBufferAttribute(e,n),wd.fromBufferAttribute(e,i),Sd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Md,r.x),o.addScaledVector(wd,r.y),o.addScaledVector(Sd,r.z),o}static isFrontFacing(e,n,i,s){return _i.subVectors(i,n),ss.subVectors(e,n),_i.cross(ss).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),_i.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;$r.subVectors(s,i),Zr.subVectors(r,i),yd.subVectors(e,i);let l=$r.dot(yd),c=Zr.dot(yd);if(l<=0&&c<=0)return n.copy(i);_d.subVectors(e,s);let h=$r.dot(_d),d=Zr.dot(_d);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),n.copy(i).addScaledVector($r,o);bd.subVectors(e,r);let f=$r.dot(bd),p=Zr.dot(bd);if(p>=0&&f<=p)return n.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(Zr,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return H0.subVectors(r,s),a=(d-h)/(d-h+(f-p)),n.copy(s).addScaledVector(H0,a);let x=1/(m+g+u);return o=g*x,a=u*x,n.copy(i).addScaledVector($r,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ki=class{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fl.copy(i.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Bl.subVectors(this.max,jo),Kr.subVectors(e.a,jo),Jr.subVectors(e.b,jo),jr.subVectors(e.c,jo),Rs.subVectors(Jr,Kr),Cs.subVectors(jr,Jr),cr.subVectors(Kr,jr);let n=[0,-Rs.z,Rs.y,0,-Cs.z,Cs.y,0,-cr.z,cr.y,Rs.z,0,-Rs.x,Cs.z,0,-Cs.x,cr.z,0,-cr.x,-Rs.y,Rs.x,0,-Cs.y,Cs.x,0,-cr.y,cr.x,0];return!Td(n,Kr,Jr,jr,Bl)||(n=[1,0,0,0,1,0,0,0,1],!Td(n,Kr,Jr,jr,Bl))?!1:(zl.crossVectors(Rs,Cs),n=[zl.x,zl.y,zl.z],Td(n,Kr,Jr,jr,Bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},os=[new B,new B,new B,new B,new B,new B,new B,new B],bi=new B,Fl=new ki,Kr=new B,Jr=new B,jr=new B,Rs=new B,Cs=new B,cr=new B,jo=new B,Bl=new B,zl=new B,hr=new B;function Td(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){hr.fromArray(t,r);let a=s.x*Math.abs(hr.x)+s.y*Math.abs(hr.y)+s.z*Math.abs(hr.z),l=e.dot(hr),c=n.dot(hr),h=i.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qt=new B,Hl=new Xe,e1=0,Et=class extends Oi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vf,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=e!==void 0?Uh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hl.fromBufferAttribute(this,n),Hl.applyMatrix3(e),this.setXY(n,Hl.x,Hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Mf(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):wf(e,this.array)}};var ba=class extends Et{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Ma=class extends Et{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var xt=class extends Et{constructor(e,n,i){super(new Float32Array(e),n,i)}},t1=new ki,Qo=new B,Ed=new B,Hn=class{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):t1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);let n=Qo.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Qo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(Ed)),this.expandByPoint(Qo.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},n1=0,ni=new Mt,Ad=new Kt,Qr=new B,Xn=new ki,ea=new ki,hn=new B,Lt=class t extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A_(e)?Ma:ba)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new dt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Xn.min,ea.min),Xn.expandByPoint(hn),hn.addVectors(Xn.max,ea.max),Xn.expandByPoint(hn)):(Xn.expandByPoint(ea.min),Xn.expandByPoint(ea.max))}Xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),hn.add(Qr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Et(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new B,l[P]=new B;let h=new B,d=new B,u=new B,f=new Xe,p=new Xe,g=new Xe,m=new B,x=new B;function y(P,R,D){c[P]=c[R]=c[D]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,D),d.sub(h),u.sub(h),p.sub(f),g.sub(f);let T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(T),x.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(T),a[P].add(m),a[R].add(m),a[D].add(m),l[P].add(x),l[R].add(x),l[D].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,R=w.length;P<R;++P){let D=w[P],T=D.start,L=D.count;for(let E=T,N=T+L;E<N;E+=3)y(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let b=new B,M=new B,_=new B,v=new B;function S(P){_.fromBufferAttribute(s,P),v.copy(_);let R=a[P];b.copy(R),b.sub(_.multiplyScalar(_.dot(R))).normalize(),M.crossVectors(v,R);let T=M.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,T)}for(let P=0,R=i.count;P<R;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Et(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(n,p),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)hn.fromBufferAttribute(e,n),hn.normalize(),e.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let x=0;x<h;x++)u[p++]=c[f++]}return new Et(u,h,d)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wa=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=vf,this.updateRanges=[],this.version=0,this.uuid=gs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=G0(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[n]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=G0(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function G0(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=gs()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}var In=new B,mo=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Uh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)In.fromBufferAttribute(this,n),In.applyMatrix4(e),this.setXYZ(n,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)In.fromBufferAttribute(this,n),In.applyNormalMatrix(e),this.setXYZ(n,In.x,In.y,In.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)In.fromBufferAttribute(this,n),In.transformDirection(e),this.setXYZ(n,In.x,In.y,In.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Et(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Mf(e,this.data.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):wf(e,this.data.array)}},Rd=new B,i1=new B,s1=new dt,Mi=class{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Rd.subVectors(i,n).cross(i1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(Rd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||s1.getNormalMatrix(e),s=this.coplanarPoint(Rd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},r1=0,Ui=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Eo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Jd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dc,this.stencilZFail=dc,this.stencilZPass=dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Mi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},go=class extends Ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eo,ta=new B,to=new B,no=new B,io=new Xe,na=new Xe,Zm=new Mt,Gl=new B,ia=new B,Vl=new B,V0=new Xe,Cd=new Xe,W0=new Xe,Sa=class extends Kt{constructor(e=new go){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new Lt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wa(n,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new mo(i,3,0,!1)),eo.setAttribute("uv",new mo(i,2,3,!1))}this.geometry=eo,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),Zm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Wl(Gl.set(-.5,-.5,0),no,o,to,s,r),Wl(ia.set(.5,-.5,0),no,o,to,s,r),Wl(Vl.set(.5,.5,0),no,o,to,s,r),V0.set(0,0),Cd.set(1,0),W0.set(1,1);let a=e.ray.intersectTriangle(Gl,ia,Vl,!1,ta);if(a===null&&(Wl(ia.set(-.5,.5,0),no,o,to,s,r),Cd.set(0,1),a=e.ray.intersectTriangle(Gl,Vl,ia,!1,ta),a===null))return;let l=e.ray.origin.distanceTo(ta);l<e.near||l>e.far||n.push({distance:l,point:ta.clone(),uv:ls.getInterpolation(ta,Gl,ia,Vl,V0,Cd,W0,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let n=super.toJSON(e);return n.object.center=this.center.toArray(),n}};function Wl(t,e,n,i,s,r){io.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(na.x=r*io.x-s*io.y,na.y=s*io.x+r*io.y):na.copy(io),t.copy(e),t.x+=na.x,t.y+=na.y,t.applyMatrix4(Zm)}var as=new B,Pd=new B,Xl=new B,Yl=new B,xo=class{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=as.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,n),as.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Pd.copy(e).add(n).multiplyScalar(.5),Xl.copy(n).sub(e).normalize(),Yl.copy(this.origin).sub(Pd);let r=e.distanceTo(n)*.5,o=-this.direction.dot(Xl),a=Yl.dot(this.direction),l=-Yl.dot(Xl),c=Yl.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pd).addScaledVector(Xl,u),f}intersectSphere(e,n){if(e.radius<0)return null;as.subVectors(e.center,this.origin);let i=as.dot(this.direction),s=as.dot(as)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,n,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=n.x-o.x,g=n.y-o.y,m=n.z-o.z,x=i.x-o.x,y=i.y-o.y,w=i.z-o.z,b=Math.abs(l),M=Math.abs(c),_=Math.abs(h),v,S,P,R,D,T,L,E,N,U,G,te;if(b>=M&&b>=_?(P=l,T=d,N=p,te=x,l>=0?(v=c,S=h,R=u,D=f,L=g,E=m,U=y,G=w):(v=h,S=c,R=f,D=u,L=m,E=g,U=w,G=y)):M>=_?(P=c,T=u,N=g,te=y,c>=0?(v=h,S=l,R=f,D=d,L=m,E=p,U=w,G=x):(v=l,S=h,R=d,D=f,L=p,E=m,U=x,G=w)):(P=h,T=f,N=m,te=w,h>=0?(v=l,S=c,R=d,D=u,L=p,E=g,U=x,G=y):(v=c,S=l,R=u,D=d,L=g,E=p,U=y,G=x)),P===0)return null;let X=v/P,ne=S/P,Z=1/P,Y=R-X*T,ye=D-ne*T,J=L-X*N,K=E-ne*N,fe=U-X*te,Ue=G-ne*te,W=fe*K-Ue*J,_e=Y*Ue-ye*fe,De=J*ye-K*Y;if(s){if(W<0||_e<0||De<0)return null}else if((W<0||_e<0||De<0)&&(W>0||_e>0||De>0))return null;let Se=W+_e+De;if(Se===0)return null;let ge=Z*(W*T+_e*N+De*te);return(Se>0?ge<0:ge>0)?null:this.at(ge/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},X0=new Mt,ur=new xo,ql=new Hn,Y0=new B,$l=new B,Zl=new B,Kl=new B,Id=new B,Jl=new B,q0=new B,jl=new B,at=class extends Kt{constructor(e=new Lt,n=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Jl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Id.fromBufferAttribute(d,e),o?Jl.addScaledVector(Id,h):Jl.addScaledVector(Id.sub(n),h))}n.add(Jl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(r),ur.copy(e.ray).recast(e.near),!(ql.containsPoint(ur.origin)===!1&&(ur.intersectSphere(ql,Y0)===null||ur.origin.distanceToSquared(Y0)>(e.far-e.near)**2))&&(X0.copy(r).invert(),ur.copy(e.ray).applyMatrix4(X0),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ur)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let m=u[p],x=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,M=w;b<M;b+=3){let _=a.getX(b),v=a.getX(b+1),S=a.getX(b+2);s=Ql(this,x,e,i,c,h,d,_,v,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let y=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=Ql(this,o,e,i,c,h,d,y,w,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let m=u[p],x=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,M=w;b<M;b+=3){let _=b,v=b+1,S=b+2;s=Ql(this,x,e,i,c,h,d,_,v,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let y=m,w=m+1,b=m+2;s=Ql(this,o,e,i,c,h,d,y,w,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function o1(t,e,n,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Os,a),l===null)return null;jl.copy(a),jl.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(jl);return c<n.near||c>n.far?null:{distance:c,point:jl.clone(),object:t}}function Ql(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,$l),t.getVertexPosition(l,Zl),t.getVertexPosition(c,Kl);let h=o1(t,e,n,i,$l,Zl,Kl,q0);if(h){let d=new B;ls.getBarycoord(q0,$l,Zl,Kl,d),s&&(h.uv=ls.getInterpolatedAttribute(s,a,l,c,d,new Xe)),r&&(h.uv1=ls.getInterpolatedAttribute(r,a,l,c,d,new Xe)),o&&(h.normal=ls.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};ls.getNormal($l,Zl,Kl,u.normal),h.face=u,h.barycoord=d}return h}var mr=class extends Dn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=un,h=un,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vo=class extends Et{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},so=new Mt,$0=new Mt,ec=[],Z0=new ki,a1=new Mt,sa=new at,ra=new Hn,us=class extends at{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,a1)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,so),Z0.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Z0)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,so),ra.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(ra)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(i),e.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,so),$0.multiplyMatrices(i,so),sa.matrixWorld=$0,sa.raycast(e,ec);for(let o=0,a=ec.length;o<a;o++){let l=ec[o];l.instanceId=r,l.object=this,n.push(l)}ec.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new mr(new Float32Array(s*this.count),s,this.count,ih,si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dr=new Hn,l1=new Xe(.5,.5),tc=new B,gr=class{constructor(e=new Mi,n=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],g=r[9],m=r[10],x=r[11],y=r[12],w=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-o,f-h,x-p,M-y).normalize(),s[1].setComponents(c+o,f+h,x+p,M+y).normalize(),s[2].setComponents(c+a,f+d,x+g,M+w).normalize(),s[3].setComponents(c-a,f-d,x-g,M-w).normalize(),i)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,f-u,x-m,M-b).normalize();else if(s[4].setComponents(c-l,f-u,x-m,M-b).normalize(),n===ii)s[5].setComponents(c+l,f+u,x+m,M+b).normalize();else if(n===ga)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let n=l1.distanceTo(e.center);return dr.radius=.7071067811865476+n,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(tc.x=s.normal.x>0?e.max.x:e.min.x,tc.y=s.normal.y>0?e.max.y:e.min.y,tc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},K0=new Mt,Ec=class t{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let r=n[s];K0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new gr),i[s].setFromProjectionMatrix(K0,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)n[s]===void 0&&(n[s]=new gr),n[s].copy(i[s]);return this._count=e._count,this}clone(){return new t().copy(this)}};var Ta=class extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ac=new B,Rc=new B,J0=new Mt,oa=new xo,nc=new Hn,Ld=new B,j0=new B,Ea=class extends Kt{constructor(e=new Lt,n=new Ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ac.fromBufferAttribute(n,s-1),Rc.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ac.distanceTo(Rc);e.setAttribute("lineDistance",new xt(i,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;J0.copy(s).invert(),oa.copy(e.ray).applyMatrix4(J0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let x=h.getX(g),y=h.getX(g+1),w=ic(this,e,oa,l,x,y,g);w&&n.push(w)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(f),x=ic(this,e,oa,l,g,m,p-1);x&&n.push(x)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let x=ic(this,e,oa,l,g,g+1,g);x&&n.push(x)}if(this.isLineLoop){let g=ic(this,e,oa,l,p-1,f,p-1);g&&n.push(g)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ic(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(Ac.fromBufferAttribute(a,s),Rc.fromBufferAttribute(a,r),n.distanceSqToSegment(Ac,Rc,Ld,j0)>i)return;Ld.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Ld);if(!(c<e.near||c>e.far))return{distance:c,point:j0.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var yo=class extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Q0=new Mt,zd=new xo,sc=new Hn,rc=new B,Aa=class extends Kt{constructor(e=new Lt,n=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(s),sc.radius+=r,e.ray.intersectsSphere(sc)===!1)return;Q0.copy(s).invert(),zd.copy(e.ray).applyMatrix4(Q0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,g=f;p<g;p++){let m=c.getX(p);rc.fromBufferAttribute(d,m),em(rc,m,l,s,e,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,g=f;p<g;p++)rc.fromBufferAttribute(d,p),em(rc,p,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function em(t,e,n,i,s,r,o){let a=zd.distanceSqToPoint(t);if(a<n){let l=new B;zd.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends Dn{constructor(e=[],n=Sr,i,s,r,o,a,l,c,h){super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ca=class extends Dn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ds=class extends Dn{constructor(e,n,i=wi,s,r,o,a=un,l=un,c,h=hs,d=1){if(h!==hs&&h!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},Pa=class extends ds{constructor(e,n=wi,i=Sr,s,r,o=un,a=un,l,c=hs){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vt=class t extends Lt{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,n,e,o,r,0),p("z","y","x",1,-1,i,n,-e,o,r,1),p("x","z","y",1,1,e,i,n,s,o,2),p("x","z","y",1,-1,e,i,-n,s,o,3),p("x","y","z",1,-1,e,n,i,s,r,4),p("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function p(g,m,x,y,w,b,M,_,v,S,P){let R=b/v,D=M/S,T=b/2,L=M/2,E=_/2,N=v+1,U=S+1,G=0,te=0,X=new B;for(let ne=0;ne<U;ne++){let Z=ne*D-L;for(let Y=0;Y<N;Y++){let ye=Y*R-T;X[g]=ye*y,X[m]=Z*w,X[x]=E,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[x]=_>0?1:-1,h.push(X.x,X.y,X.z),d.push(Y/v),d.push(1-ne/S),G+=1}}for(let ne=0;ne<S;ne++)for(let Z=0;Z<v;Z++){let Y=u+Z+N*ne,ye=u+Z+N*(ne+1),J=u+(Z+1)+N*(ne+1),K=u+(Z+1)+N*ne;l.push(Y,ye,K),l.push(ye,J,K),te+=6}a.addGroup(f,te,P),f+=te,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Jt=class t extends Lt{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,g=[],m=i/2,x=0;y(),o===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function y(){let b=new B,M=new B,_=0,v=(n-e)/i;for(let S=0;S<=r;S++){let P=[],R=S/r,D=R*(n-e)+e;for(let T=0;T<=s;T++){let L=T/s,E=L*l+a,N=Math.sin(E),U=Math.cos(E);M.x=D*N,M.y=-R*i+m,M.z=D*U,d.push(M.x,M.y,M.z),b.set(N,v,U).normalize(),u.push(b.x,b.y,b.z),f.push(L,1-R),P.push(p++)}g.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let R=g[P][S],D=g[P+1][S],T=g[P+1][S+1],L=g[P][S+1];(e>0||P!==0)&&(h.push(R,D,L),_+=3),(n>0||P!==r-1)&&(h.push(D,T,L),_+=3)}c.addGroup(x,_,0),x+=_}function w(b){let M=p,_=new Xe,v=new B,S=0,P=b===!0?e:n,R=b===!0?1:-1;for(let T=1;T<=s;T++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;let D=p;for(let T=0;T<=s;T++){let E=T/s*l+a,N=Math.cos(E),U=Math.sin(E);v.x=P*U,v.y=m*R,v.z=P*N,d.push(v.x,v.y,v.z),u.push(0,R,0),_.x=N*.5+.5,_.y=U*.5*R+.5,f.push(_.x,_.y),p++}for(let T=0;T<s;T++){let L=M+T,E=D+T;b===!0?h.push(E,E+1,L):h.push(E+1,E,L),S+=3}c.addGroup(x,S,b===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var La=class t extends Lt{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new B,b=new B,M=new B;for(let _=0;_<n.length;_+=3)f(n[_+0],w),f(n[_+1],b),f(n[_+2],M),l(w,b,M,y)}function l(y,w,b,M){let _=M+1,v=[];for(let S=0;S<=_;S++){v[S]=[];let P=y.clone().lerp(b,S/_),R=w.clone().lerp(b,S/_),D=_-S;for(let T=0;T<=D;T++)T===0&&S===_?v[S][T]=P:v[S][T]=P.clone().lerp(R,T/D)}for(let S=0;S<_;S++)for(let P=0;P<2*(_-S)-1;P++){let R=Math.floor(P/2);P%2===0?(u(v[S][R+1]),u(v[S+1][R]),u(v[S][R])):(u(v[S][R+1]),u(v[S+1][R+1]),u(v[S+1][R]))}}function c(y){let w=new B;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(y),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){let y=new B;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let b=m(y)/2/Math.PI+.5,M=x(y)/Math.PI+.5;o.push(b,1-M)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],b=o[y+2],M=o[y+4],_=Math.max(w,b,M),v=Math.min(w,b,M);_>.9&&v<.1&&(w<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){let b=y*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function p(){let y=new B,w=new B,b=new B,M=new B,_=new Xe,v=new Xe,S=new Xe;for(let P=0,R=0;P<r.length;P+=9,R+=6){y.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),b.set(r[P+6],r[P+7],r[P+8]),_.set(o[R+0],o[R+1]),v.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),M.copy(y).add(w).add(b).divideScalar(3);let D=m(M);g(_,R+0,y,D),g(v,R+2,w,D),g(S,R+4,b,D)}}function g(y,w,b,M){M<0&&y.x===1&&(o[w]=y.x-1),b.x===0&&b.z===0&&(o[w]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function x(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new Xe:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){let i=new B,s=[],r=[],o=[],a=new B,l=new Mt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(St(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(St(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},_o=class extends Nn{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Xe){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cc=class extends _o{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sf(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return t+e*r+n*o+i*a}}}var tm=new B,nm=new B,Dd=new Sf,Nd=new Sf,Od=new Sf,Pc=class extends Nn{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new B){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(nm.subVectors(s[0],s[1]).add(s[0]),c=nm);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(tm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Dd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,g,m),Nd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,g,m),Od.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(Dd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Nd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Od.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Dd.calc(l),Nd.calc(l),Od.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function im(t,e,n,i,s){let r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function c1(t,e){let n=1-t;return n*n*e}function h1(t,e){return 2*(1-t)*t*e}function u1(t,e){return t*t*e}function ua(t,e,n,i){return c1(t,e)+h1(t,n)+u1(t,i)}function d1(t,e){let n=1-t;return n*n*n*e}function f1(t,e){let n=1-t;return 3*n*n*t*e}function p1(t,e){return 3*(1-t)*t*t*e}function m1(t,e){return t*t*t*e}function da(t,e,n,i,s){return d1(t,e)+f1(t,n)+p1(t,i)+m1(t,s)}var Da=class extends Nn{constructor(e=new Xe,n=new Xe,i=new Xe,s=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new Xe){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(da(e,s.x,r.x,o.x,a.x),da(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ic=class extends Nn{constructor(e=new B,n=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new B){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(da(e,s.x,r.x,o.x,a.x),da(e,s.y,r.y,o.y,a.y),da(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends Nn{constructor(e=new Xe,n=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Xe){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Xe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends Nn{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends Nn{constructor(e=new Xe,n=new Xe,i=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Xe){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ua(e,s.x,r.x,o.x),ua(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Nn{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ua(e,s.x,r.x,o.x),ua(e,s.y,r.y,o.y),ua(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Xe){let i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(im(a,l.x,c.x,h.x,d.x),im(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new Xe().fromArray(s))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:Cc,CatmullRomCurve3:Pc,CubicBezierCurve:Da,CubicBezierCurve3:Ic,EllipseCurve:_o,LineCurve:Na,LineCurve3:Lc,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:ka,SplineCurve:Ua}),Nc=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(new Dc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},xr=class extends Nc{constructor(e){super(),this.type="Path",this.currentPoint=new Xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new Na(this.currentPoint.clone(),new Xe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){let r=new Oa(this.currentPoint.clone(),new Xe(e,n),new Xe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){let a=new Da(this.currentPoint.clone(),new Xe(e,n),new Xe(i,s),new Xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new Ua(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){let c=new _o(e,n,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bo=class extends xr{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(new xr().fromJSON(s))}return this}};function g1(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=Km(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=b1(t,e,r,n)),t.length>80*n){a=t[0],l=t[1];let h=a,d=l;for(let u=n;u<s;u+=n){let f=t[u],p=t[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Fa(r,o,n,a,l,c,0),o}function Km(t,e,n,i,s){let r;if(s===L1(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=sm(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=sm(o/i|0,t[o],t[o+1],r);return r&&Mo(r,r.next)&&(za(r),r=r.next),r}function vr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Mo(n,n.next)||Wt(n.prev,n,n.next)===0)){if(za(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Fa(t,e,n,i,s,r,o){if(!t)return;!o&&r&&E1(t,i,s,r);let a=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?v1(t,i,s,r):x1(t)){e.push(l.i,t.i,c.i),za(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=y1(vr(t),e),Fa(t,e,n,i,s,r,2)):o===2&&_1(t,e,n,i,s,r):Fa(vr(t),e,n,i,s,r,1);break}}}function x1(t){let e=t.prev,n=t,i=t.next;if(Wt(e,n,i)>=0)return!1;let s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&aa(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function v1(t,e,n,i){let s=t.prev,r=t,o=t.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),g=Math.max(a,l,c),m=Math.max(h,d,u),x=Hd(f,p,e,n,i),y=Hd(g,m,e,n,i),w=t.prevZ,b=t.nextZ;for(;w&&w.z>=x&&b&&b.z<=y;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&aa(a,h,l,d,c,u,w.x,w.y)&&Wt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&aa(a,h,l,d,c,u,b.x,b.y)&&Wt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=x;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&aa(a,h,l,d,c,u,w.x,w.y)&&Wt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&aa(a,h,l,d,c,u,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function y1(t,e){let n=t;do{let i=n.prev,s=n.next.next;!Mo(i,s)&&jm(i,n,n.next,s)&&Ba(i,s)&&Ba(s,i)&&(e.push(i.i,n.i,s.i),za(n),za(n.next),n=t=s),n=n.next}while(n!==t);return vr(n)}function _1(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C1(o,a)){let l=Qm(o,a);o=vr(o,o.next),l=vr(l,l.next),Fa(o,e,n,i,s,r,0),Fa(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function b1(t,e,n,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=Km(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(R1(c))}s.sort(M1);for(let r=0;r<s.length;r++)n=w1(s[r],n);return n}function M1(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function w1(t,e){let n=S1(t,e);if(!n)return e;let i=Qm(n,t);return vr(i,i.next),vr(n,n.next)}function S1(t,e){let n=e,i=t.x,s=t.y,r=-1/0,o;if(Mo(t,n))return n;do{if(Mo(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r&&(r=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Jm(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);Ba(n,t)&&(d<h||d===h&&(n.x>o.x||n.x===o.x&&T1(o,n)))&&(o=n,h=d)}n=n.next}while(n!==a);return o}function T1(t,e){return Wt(t.prev,t,e.prev)<0&&Wt(e.next,t,t.next)<0}function E1(t,e,n,i){let s=t;do s.z===0&&(s.z=Hd(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,A1(s)}function A1(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function Hd(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function R1(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Jm(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function aa(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&Jm(t,e,n,i,s,r,o,a)}function C1(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!P1(t,e)&&(Ba(t,e)&&Ba(e,t)&&I1(t,e)&&(Wt(t.prev,t,e.prev)||Wt(t,e.prev,e))||Mo(t,e)&&Wt(t.prev,t,t.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Mo(t,e){return t.x===e.x&&t.y===e.y}function jm(t,e,n,i){let s=ac(Wt(t,e,n)),r=ac(Wt(t,e,i)),o=ac(Wt(n,i,t)),a=ac(Wt(n,i,e));return!!(s!==r&&o!==a||s===0&&oc(t,n,e)||r===0&&oc(t,i,e)||o===0&&oc(n,t,i)||a===0&&oc(n,e,i))}function oc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ac(t){return t>0?1:t<0?-1:0}function P1(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&jm(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ba(t,e){return Wt(t.prev,t,t.next)<0?Wt(t,e,t.next)>=0&&Wt(t,t.prev,e)>=0:Wt(t,e,t.prev)<0||Wt(t,t.next,e)<0}function I1(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Qm(t,e){let n=Gd(t.i,t.x,t.y),i=Gd(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function sm(t,e,n,i){let s=Gd(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function za(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Gd(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L1(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}var Vd=class{static triangulate(e,n,i=2){return g1(e,n,i)}},fr=class t{static area(e){let n=e.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],s=[],r=[];rm(e),om(i,e);let o=e.length;n.forEach(rm);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,om(i,n[l]);let a=Vd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function rm(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function om(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Ha=class t extends Lt{constructor(e=new bo([new Xe(.5,.5),new Xe(-.5,.5),new Xe(-.5,-.5),new Xe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,p=n.bevelSize!==void 0?n.bevelSize:f-.1,g=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,x=n.extrudePath,y=n.UVGenerator!==void 0?n.UVGenerator:D1,w,b=!1,M,_,v,S;if(x){w=x.getSpacedPoints(h),b=!0,u=!1;let me=x.isCatmullRomCurve3?x.closed:!1;M=x.computeFrenetFrames(h,me),_=new B,v=new B,S=new B}u||(m=0,f=0,p=0,g=0);let P=a.extractPoints(c),R=P.shape,D=P.holes;if(!fr.isClockWise(R)){R=R.reverse();for(let me=0,ke=D.length;me<ke;me++){let Ne=D[me];fr.isClockWise(Ne)&&(D[me]=Ne.reverse())}}function L(me){let Ne=10000000000000001e-36,Re=me[0];for(let Me=1;Me<=me.length;Me++){let Ye=Me%me.length,H=me[Ye],j=H.x-Re.x,re=H.y-Re.y,Pe=j*j+re*re,k=Math.max(Math.abs(H.x),Math.abs(H.y),Math.abs(Re.x),Math.abs(Re.y)),ie=Ne*k*k;if(Pe<=ie){me.splice(Ye,1),Me--;continue}Re=H}}L(R),D.forEach(L);let E=D.length,N=R;for(let me=0;me<E;me++){let ke=D[me];R=R.concat(ke)}function U(me,ke,Ne){return ke||ht("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(ke,Ne)}let G=R.length;function te(me,ke,Ne){let Re,Me,Ye,H=me.x-ke.x,j=me.y-ke.y,re=Ne.x-me.x,Pe=Ne.y-me.y,k=H*H+j*j,ie=H*Pe-j*re;if(Math.abs(ie)>Number.EPSILON){let de=Math.sqrt(k),Ce=Math.sqrt(re*re+Pe*Pe),Q=ke.x-j/de,He=ke.y+H/de,Fe=Ne.x-Pe/Ce,Ve=Ne.y+re/Ce,O=((Fe-Q)*Pe-(Ve-He)*re)/(H*Pe-j*re);Re=Q+H*O-me.x,Me=He+j*O-me.y;let A=Re*Re+Me*Me;if(A<=2)return new Xe(Re,Me);Ye=Math.sqrt(A/2)}else{let de=!1;H>Number.EPSILON?re>Number.EPSILON&&(de=!0):H<-Number.EPSILON?re<-Number.EPSILON&&(de=!0):Math.sign(j)===Math.sign(Pe)&&(de=!0),de?(Re=-j,Me=H,Ye=Math.sqrt(k)):(Re=H,Me=j,Ye=Math.sqrt(k/2))}return new Xe(Re/Ye,Me/Ye)}let X=[];for(let me=0,ke=N.length,Ne=ke-1,Re=me+1;me<ke;me++,Ne++,Re++)Ne===ke&&(Ne=0),Re===ke&&(Re=0),X[me]=te(N[me],N[Ne],N[Re]);let ne=[],Z,Y=X.concat();for(let me=0,ke=E;me<ke;me++){let Ne=D[me];Z=[];for(let Re=0,Me=Ne.length,Ye=Me-1,H=Re+1;Re<Me;Re++,Ye++,H++)Ye===Me&&(Ye=0),H===Me&&(H=0),Z[Re]=te(Ne[Re],Ne[Ye],Ne[H]);ne.push(Z),Y=Y.concat(Z)}let ye;if(m===0)ye=fr.triangulateShape(N,D);else{let me=[],ke=[];for(let Ne=0;Ne<m;Ne++){let Re=Ne/m,Me=f*Math.cos(Re*Math.PI/2),Ye=p*Math.sin(Re*Math.PI/2)+g;for(let H=0,j=N.length;H<j;H++){let re=U(N[H],X[H],Ye);_e(re.x,re.y,-Me),Re===0&&me.push(re)}for(let H=0,j=E;H<j;H++){let re=D[H];Z=ne[H];let Pe=[];for(let k=0,ie=re.length;k<ie;k++){let de=U(re[k],Z[k],Ye);_e(de.x,de.y,-Me),Re===0&&Pe.push(de)}Re===0&&ke.push(Pe)}}ye=fr.triangulateShape(me,ke)}let J=ye.length,K=p+g;for(let me=0;me<G;me++){let ke=u?U(R[me],Y[me],K):R[me];b?(v.copy(M.normals[0]).multiplyScalar(ke.x),_.copy(M.binormals[0]).multiplyScalar(ke.y),S.copy(w[0]).add(v).add(_),_e(S.x,S.y,S.z)):_e(ke.x,ke.y,0)}for(let me=1;me<=h;me++)for(let ke=0;ke<G;ke++){let Ne=u?U(R[ke],Y[ke],K):R[ke];b?(v.copy(M.normals[me]).multiplyScalar(Ne.x),_.copy(M.binormals[me]).multiplyScalar(Ne.y),S.copy(w[me]).add(v).add(_),_e(S.x,S.y,S.z)):_e(Ne.x,Ne.y,d/h*me)}for(let me=m-1;me>=0;me--){let ke=me/m,Ne=f*Math.cos(ke*Math.PI/2),Re=p*Math.sin(ke*Math.PI/2)+g;for(let Me=0,Ye=N.length;Me<Ye;Me++){let H=U(N[Me],X[Me],Re);_e(H.x,H.y,d+Ne)}for(let Me=0,Ye=D.length;Me<Ye;Me++){let H=D[Me];Z=ne[Me];for(let j=0,re=H.length;j<re;j++){let Pe=U(H[j],Z[j],Re);b?_e(Pe.x,Pe.y+w[h-1].y,w[h-1].x+Ne):_e(Pe.x,Pe.y,d+Ne)}}}fe(),Ue();function fe(){let me=s.length/3;if(u){let ke=0,Ne=G*ke;for(let Re=0;Re<J;Re++){let Me=ye[Re];De(Me[2]+Ne,Me[1]+Ne,Me[0]+Ne)}ke=h+m*2,Ne=G*ke;for(let Re=0;Re<J;Re++){let Me=ye[Re];De(Me[0]+Ne,Me[1]+Ne,Me[2]+Ne)}}else{for(let ke=0;ke<J;ke++){let Ne=ye[ke];De(Ne[2],Ne[1],Ne[0])}for(let ke=0;ke<J;ke++){let Ne=ye[ke];De(Ne[0]+G*h,Ne[1]+G*h,Ne[2]+G*h)}}i.addGroup(me,s.length/3-me,0)}function Ue(){let me=s.length/3,ke=0;W(N,ke),ke+=N.length;for(let Ne=0,Re=D.length;Ne<Re;Ne++){let Me=D[Ne];W(Me,ke),ke+=Me.length}i.addGroup(me,s.length/3-me,1)}function W(me,ke){let Ne=me.length;for(;--Ne>=0;){let Re=Ne,Me=Ne-1;Me<0&&(Me=me.length-1);for(let Ye=0,H=h+m*2;Ye<H;Ye++){let j=G*Ye,re=G*(Ye+1),Pe=ke+Re+j,k=ke+Me+j,ie=ke+Me+re,de=ke+Re+re;Se(Pe,k,ie,de)}}}function _e(me,ke,Ne){l.push(me),l.push(ke),l.push(Ne)}function De(me,ke,Ne){ge(me),ge(ke),ge(Ne);let Re=s.length/3,Me=y.generateTopUV(i,s,Re-3,Re-2,Re-1);Ie(Me[0]),Ie(Me[1]),Ie(Me[2])}function Se(me,ke,Ne,Re){ge(me),ge(ke),ge(Re),ge(ke),ge(Ne),ge(Re);let Me=s.length/3,Ye=y.generateSideWallUV(i,s,Me-6,Me-3,Me-2,Me-1);Ie(Ye[0]),Ie(Ye[1]),Ie(Ye[3]),Ie(Ye[1]),Ie(Ye[2]),Ie(Ye[3])}function ge(me){s.push(l[me*3+0]),s.push(l[me*3+1]),s.push(l[me*3+2])}function Ie(me){r.push(me.x),r.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return N1(n,i,e)}static fromJSON(e,n){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=n[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dc[s.type]().fromJSON(s)),new t(i,e.options)}},D1={generateTopUV:function(t,e,n,i,s){let r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Xe(r,o),new Xe(a,l),new Xe(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],g=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Xe(o,1-l),new Xe(c,1-d),new Xe(u,1-p),new Xe(g,1-x)]:[new Xe(a,1-l),new Xe(h,1-d),new Xe(f,1-p),new Xe(m,1-x)]}};function N1(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var yr=class t extends La{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},Ga=class t extends Lt{constructor(e=[new Xe(0,-.5),new Xe(.5,0),new Xe(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=St(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/n,d=new B,u=new Xe,f=new B,p=new B,g=new B,m=0,x=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let y=0;y<=n;y++){let w=i+y*h*s,b=Math.sin(w),M=Math.cos(w);for(let _=0;_<=e.length-1;_++){d.x=e[_].x*b,d.y=e[_].y,d.z=e[_].x*M,o.push(d.x,d.y,d.z),u.x=y/n,u.y=_/(e.length-1),a.push(u.x,u.y);let v=l[3*_+0]*b,S=l[3*_+1],P=l[3*_+0]*M;c.push(v,S,P)}}for(let y=0;y<n;y++)for(let w=0;w<e.length-1;w++){let b=w+y*e.length,M=b,_=b+e.length,v=b+e.length+1,S=b+1;r.push(M,_,S),r.push(v,S,_)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}},wo=class t extends La{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},Is=class t extends Lt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=n/l,f=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let y=x*u-o;for(let w=0;w<c;w++){let b=w*d-r;p.push(b,-y,0),g.push(0,0,1),m.push(w/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<a;y++){let w=y+c*x,b=y+c*(x+1),M=y+1+c*(x+1),_=y+1+c*x;f.push(w,b,_),f.push(b,M,_)}this.setIndex(f),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(g,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},_r=class t extends Lt{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(n-e)/s,f=new B,p=new Xe;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){let x=r+m/i*o;f.x=d*Math.cos(x),f.y=d*Math.sin(x),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/n+1)/2,p.y=(f.y/n+1)/2,h.push(p.x,p.y)}d+=u}for(let g=0;g<s;g++){let m=g*(i+1);for(let x=0;x<i;x++){let y=x+m,w=y,b=y+i+1,M=y+i+2,_=y+1;a.push(w,b,_),a.push(b,M,_)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var $t=class t extends Lt{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new B,u=new B,f=[],p=[],g=[],m=[];for(let x=0;x<=i;x++){let y=[],w=x/i,b=o+w*a,M=e*Math.cos(b),_=Math.sqrt(e*e-M*M),v=0;x===0&&o===0?v=.5/n:x===i&&l===Math.PI&&(v=-.5/n);for(let S=0;S<=n;S++){let P=S/n,R=s+P*r;d.x=-_*Math.cos(R),d.y=M,d.z=_*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(P+v,1-w),y.push(c++)}h.push(y)}for(let x=0;x<i;x++)for(let y=0;y<n;y++){let w=h[x][y+1],b=h[x][y],M=h[x+1][y],_=h[x+1][y+1];(x!==0||o>0)&&f.push(w,b,_),(x!==i-1||l<Math.PI)&&f.push(b,M,_)}this.setIndex(f),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(g,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var br=class t extends Lt{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new B,f=new B,p=new B;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=s;x++){let y=x/s*r;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(x/s),d.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,y=(s+1)*(g-1)+m-1,w=(s+1)*(g-1)+m,b=(s+1)*g+m;l.push(x,y,b),l.push(y,w,b)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Va=class t extends Lt{constructor(e=new ka(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new Xe,h=new B,d=[],u=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function g(){for(let w=0;w<n;w++)m(w);m(r===!1?n:0),y(),x()}function m(w){h=e.getPointAt(w/n,h);let b=o.normals[w],M=o.binormals[w];for(let _=0;_<=s;_++){let v=_/s*Math.PI*2,S=Math.sin(v),P=-Math.cos(v);l.x=P*b.x+S*M.x,l.y=P*b.y+S*M.y,l.z=P*b.z+S*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function x(){for(let w=1;w<=n;w++)for(let b=1;b<=s;b++){let M=(s+1)*(w-1)+(b-1),_=(s+1)*w+(b-1),v=(s+1)*w+b,S=(s+1)*(w-1)+b;p.push(M,_,S),p.push(_,v,S)}}function y(){for(let w=0;w<=n;w++)for(let b=0;b<=s;b++)c.x=w/n,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new Dc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Er(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(am(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(am(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Rn(t){let e={};for(let n=0;n<t.length;n++){let i=Er(t[n]);for(let s in i)e[s]=i[s]}return e}function am(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function O1(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tf(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var eg={clone:Er,merge:Rn},k1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k1,this.fragmentShader=U1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=O1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oc=class extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var kc=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Wa=class extends Ta{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ro(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function lc(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Ls=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break e}o=n.length;break t}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fc=class extends Ls{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ud,endingEnd:Ud}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fd:r=e,a=2*n-i;break;case Bd:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fd:o=e,l=2*i-n;break;case Bd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-n)/(s-n),g=p*p,m=g*p,x=-u*m+2*u*g-u*p,y=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*g+.5*p,b=f*m-f*g;for(let M=0;M!==a;++M)r[M]=x*o[h+M]+y*o[c+M]+w*o[l+M]+b*o[d+M];return r}},Bc=class extends Ls{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},zc=class extends Ls{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hc=class extends Ls{interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-n)/(s-n),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=f*u+p*2,y=d[x],w=d[x+1],b=e*u+p*2,M=h[b],_=h[b+1],v=B1(i,n,y,M,s);r[p]=tg(v,g,w,_,m)}return r}};function tg(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function F1(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function B1(t,e,n,i,s){let r=(t-e)/(s-e);for(let o=0;o<8;o++){let a=tg(r,e,n,i,s)-t;if(Math.abs(a)<1e-10)break;let l=F1(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var qn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(n,this.TimeBufferType),this.values=ro(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),lc(e.settings)&&(i.settings={inTangents:ro(e.settings.inTangents,Array),outTangents:ro(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Hc(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case fa:n=this.InterpolantFactoryMethodDiscrete;break;case Mc:n=this.InterpolantFactoryMethodLinear;break;case uc:n=this.InterpolantFactoryMethodSmooth;break;case kd:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return lt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return uc;case this.InterpolantFactoryMethodBezier:return kd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e;lc(this.settings)&&(lm(this.settings.inTangents,e),lm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;lc(this.settings)&&(cm(this.settings.inTangents,e),cm(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ht("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ht("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&R_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ht("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===uc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let g=n[d+p];if(g!==n[u+p]||g!==n[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,lc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lm(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function cm(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Mc;var Ds=class extends qn{constructor(e,n,i){super(e,n,i)}};Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=fa;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends qn{constructor(e,n,i,s){super(e,n,i,s)}};Gc.prototype.ValueTypeName="color";var Vc=class extends qn{constructor(e,n,i,s){super(e,n,i,s)}};Vc.prototype.ValueTypeName="number";var Wc=class extends Ls{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let h=c+a;c!==h;c+=4)Ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xa=class extends qn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};Xa.prototype.ValueTypeName="quaternion";Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends qn{constructor(e,n,i){super(e,n,i)}};Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=fa;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends qn{constructor(e,n,i,s){super(e,n,i,s)}};Xc.prototype.ValueTypeName="vector";var Yc=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ng=new Yc,qc=class{constructor(e){this.manager=e!==void 0?e:ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var cc=new B,hc=new Ln,Di=new B,Ya=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cc,hc,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,hc,Di.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(cc,hc,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,hc,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ps=new B,hm=new Xe,um=new Xe,xn=class extends Ya{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,n){return this.getViewBounds(e,hm,um),n.subVectors(um,hm)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var $c=class extends Ya{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var oo=-90,ao=1,So=class extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(oo,ao,e,n);s.layers=this.layers,this.add(s);let r=new xn(oo,ao,e,n);r.layers=this.layers,this.add(r);let o=new xn(oo,ao,e,n);o.layers=this.layers,this.add(o);let a=new xn(oo,ao,e,n);a.layers=this.layers,this.add(a);let l=new xn(oo,ao,e,n);l.layers=this.layers,this.add(l);let c=new xn(oo,ao,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Zc=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ef="\\[\\]\\.:\\/",z1=new RegExp("["+Ef+"]","g"),Af="[^"+Ef+"]",H1="[^"+Ef.replace("\\.","")+"]",G1=/((?:WC+[\/:])*)/.source.replace("WC",Af),V1=/(WCOD+)?/.source.replace("WCOD",H1),W1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Af),X1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Af),Y1=new RegExp("^"+G1+V1+W1+X1+"$"),q1=["material","materials","bones","map"],Wd=class{constructor(e,n,i){let s=i||Bt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Bt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z1,"")}static parseTrackName(e){let n=Y1.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);q1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Wd;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yC=new Float32Array(1);var Df=class Df{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Df.prototype.isMatrix2=!0;var Xd=Df;function Rf(t,e,n,i){let s=$1(i);switch(n){case df:return t*e;case ih:return t*e/s.components*s.byteLength;case sh:return t*e/s.components*s.byteLength;case ks:return t*e*2/s.components*s.byteLength;case rh:return t*e*2/s.components*s.byteLength;case ff:return t*e*3/s.components*s.byteLength;case Zn:return t*e*4/s.components*s.byteLength;case oh:return t*e*4/s.components*s.byteLength;case Za:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ja:case ja:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lh:case hh:return Math.max(t,16)*Math.max(e,8)/4;case ah:case ch:return Math.max(t,8)*Math.max(e,8)/2;case uh:case dh:case ph:case mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fh:case Qa:case gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Lh:case Dh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Nh:case Oh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case el:case kh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $1(t){switch(t){case $n:case lf:return{byteLength:1,components:1};case Ro:case cf:case Si:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case wi:case eh:case si:return{byteLength:4,components:1};case hf:case uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sg(){let t=null,e=!1,n=null,i=null;function s(r,o){i=t.requestAnimationFrame(s),n(r,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Q1(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let g=d[f];t.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ob=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fM=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$M=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ew=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nw=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ow=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_w=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ew=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:eb,alphahash_pars_fragment:tb,alphamap_fragment:nb,alphamap_pars_fragment:ib,alphatest_fragment:sb,alphatest_pars_fragment:rb,aomap_fragment:ob,aomap_pars_fragment:ab,batching_pars_vertex:lb,batching_vertex:cb,begin_vertex:hb,beginnormal_vertex:ub,bsdfs:db,iridescence_fragment:fb,bumpmap_pars_fragment:pb,clipping_planes_fragment:mb,clipping_planes_pars_fragment:gb,clipping_planes_pars_vertex:xb,clipping_planes_vertex:vb,color_fragment:yb,color_pars_fragment:_b,color_pars_vertex:bb,color_vertex:Mb,common:wb,defaultnormal_vertex:Sb,displacementmap_pars_vertex:Tb,displacementmap_vertex:Eb,emissivemap_fragment:Ab,emissivemap_pars_fragment:Rb,colorspace_fragment:Cb,colorspace_pars_fragment:Pb,envmap_fragment:Ib,envmap_common_pars_fragment:Lb,envmap_pars_fragment:Db,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:Xb,envmap_vertex:Ob,fog_vertex:kb,fog_pars_vertex:Ub,fog_fragment:Fb,fog_pars_fragment:Bb,gradientmap_pars_fragment:zb,lightmap_pars_fragment:Hb,lights_lambert_fragment:Gb,lights_lambert_pars_fragment:Vb,lights_pars_begin:Wb,lights_toon_fragment:Yb,lights_toon_pars_fragment:qb,lights_phong_fragment:$b,lights_phong_pars_fragment:Zb,lights_physical_fragment:Kb,lights_physical_pars_fragment:Jb,lights_fragment_begin:jb,lights_fragment_maps:Qb,lights_fragment_end:eM,lightprobes_pars_fragment:tM,logdepthbuf_fragment:nM,logdepthbuf_pars_fragment:iM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:rM,map_fragment:oM,map_pars_fragment:aM,map_particle_fragment:lM,map_particle_pars_fragment:cM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:uM,morphinstance_vertex:dM,morphcolor_vertex:fM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:xM,normal_fragment_maps:vM,normal_pars_fragment:yM,normal_pars_vertex:_M,normal_vertex:bM,normalmap_pars_fragment:MM,clearcoat_normal_fragment_begin:wM,clearcoat_normal_fragment_maps:SM,clearcoat_pars_fragment:TM,iridescence_pars_fragment:EM,opaque_fragment:AM,packing:RM,premultiplied_alpha_fragment:CM,project_vertex:PM,dithering_fragment:IM,dithering_pars_fragment:LM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:NM,shadowmap_pars_fragment:OM,shadowmap_pars_vertex:kM,shadowmap_vertex:UM,shadowmask_pars_fragment:FM,skinbase_vertex:BM,skinning_pars_vertex:zM,skinning_vertex:HM,skinnormal_vertex:GM,specularmap_fragment:VM,specularmap_pars_fragment:WM,tonemapping_fragment:XM,tonemapping_pars_fragment:YM,transmission_fragment:qM,transmission_pars_fragment:$M,uv_pars_fragment:ZM,uv_pars_vertex:KM,uv_vertex:JM,worldpos_vertex:jM,background_vert:QM,background_frag:ew,backgroundCube_vert:tw,backgroundCube_frag:nw,cube_vert:iw,cube_frag:sw,depth_vert:rw,depth_frag:ow,distance_vert:aw,distance_frag:lw,equirect_vert:cw,equirect_frag:hw,linedashed_vert:uw,linedashed_frag:dw,meshbasic_vert:fw,meshbasic_frag:pw,meshlambert_vert:mw,meshlambert_frag:gw,meshmatcap_vert:xw,meshmatcap_frag:vw,meshnormal_vert:yw,meshnormal_frag:_w,meshphong_vert:bw,meshphong_frag:Mw,meshphysical_vert:ww,meshphysical_frag:Sw,meshtoon_vert:Tw,meshtoon_frag:Ew,points_vert:Aw,points_frag:Rw,shadow_vert:Cw,shadow_frag:Pw,sprite_vert:Iw,sprite_frag:Lw},je={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},zi={basic:{uniforms:Rn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Rn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Rn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Rn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Rn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new et(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Rn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Rn([je.points,je.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Rn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Rn([je.common,je.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Rn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Rn([je.sprite,je.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Rn([je.common,je.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Rn([je.lights,je.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};zi.physical={uniforms:Rn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var Bh={r:0,b:0,g:0},Dw=new Mt,Tg=new dt;Tg.set(-1,0,0,0,1,0,0,0,1);function Nw(t,e,n,i,s,r){let o=new et(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function p(y){let w=!1,b=f(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),w=!0);let M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,w){let b=f(w);b&&b.isCubeTexture?(c===void 0&&(c=new at(new vt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Er(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,_,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dw.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tg),c.material.toneMapped=At.getTransfer(b.colorSpace)!==Dt,(h!==b||d!==b.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new at(new Is(2,2),new En({name:"BackgroundMaterial",uniforms:Er(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=At.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Bh,Tf(t)),n.buffers.color.setClear(Bh.r,Bh.g,Bh.b,w,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:g,dispose:x}}function Ow(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(D,T,L,E,N){let U=!1,G=d(D,E,L,T);r!==G&&(r=G,c(r.object)),U=f(D,E,L,N),U&&p(D,E,L,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,b(D,T,L,E),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function d(D,T,L,E){let N=E.wireframe===!0,U=i[T.id];U===void 0&&(U={},i[T.id]=U);let G=D.isInstancedMesh===!0?D.id:0,te=U[G];te===void 0&&(te={},U[G]=te);let X=te[L.id];X===void 0&&(X={},te[L.id]=X);let ne=X[N];return ne===void 0&&(ne=u(l()),X[N]=ne),ne}function u(D){let T=[],L=[],E=[];for(let N=0;N<n;N++)T[N]=0,L[N]=0,E[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:E,object:D,attributes:{},index:null}}function f(D,T,L,E){let N=r.attributes,U=T.attributes,G=0,te=L.getAttributes();for(let X in te)if(te[X].location>=0){let Z=N[X],Y=U[X];if(Y===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Z===void 0||Z.attribute!==Y||Y&&Z.data!==Y.data)return!0;G++}return r.attributesNum!==G||r.index!==E}function p(D,T,L,E){let N={},U=T.attributes,G=0,te=L.getAttributes();for(let X in te)if(te[X].location>=0){let Z=U[X];Z===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));let Y={};Y.attribute=Z,Z&&Z.data&&(Y.data=Z.data),N[X]=Y,G++}r.attributes=N,r.attributesNum=G,r.index=E}function g(){let D=r.newAttributes;for(let T=0,L=D.length;T<L;T++)D[T]=0}function m(D){x(D,0)}function x(D,T){let L=r.newAttributes,E=r.enabledAttributes,N=r.attributeDivisors;L[D]=1,E[D]===0&&(t.enableVertexAttribArray(D),E[D]=1),N[D]!==T&&(t.vertexAttribDivisor(D,T),N[D]=T)}function y(){let D=r.newAttributes,T=r.enabledAttributes;for(let L=0,E=T.length;L<E;L++)T[L]!==D[L]&&(t.disableVertexAttribArray(L),T[L]=0)}function w(D,T,L,E,N,U,G){G===!0?t.vertexAttribIPointer(D,T,L,N,U):t.vertexAttribPointer(D,T,L,E,N,U)}function b(D,T,L,E){g();let N=E.attributes,U=L.getAttributes(),G=T.defaultAttributeValues;for(let te in U){let X=U[te];if(X.location>=0){let ne=N[te];if(ne===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){let Z=ne.normalized,Y=ne.itemSize,ye=e.get(ne);if(ye===void 0)continue;let J=ye.buffer,K=ye.type,fe=ye.bytesPerElement,Ue=K===t.INT||K===t.UNSIGNED_INT||ne.gpuType===eh;if(ne.isInterleavedBufferAttribute){let W=ne.data,_e=W.isInterleavedBuffer===!0?W.stride:W.itemSize,De=ne.offset;if(W.isInstancedInterleavedBuffer||W.isInstancedBufferAttribute){for(let Se=0;Se<X.locationSize;Se++)x(X.location+Se,W.meshPerAttribute);D.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Se=0;Se<X.locationSize;Se++)m(X.location+Se);t.bindBuffer(t.ARRAY_BUFFER,J);for(let Se=0;Se<X.locationSize;Se++)w(X.location+Se,Y/X.locationSize,K,Z,_e*fe,(De+Y/X.locationSize*Se)*fe,Ue)}else{if(ne.isInstancedBufferAttribute){for(let W=0;W<X.locationSize;W++)x(X.location+W,ne.meshPerAttribute);D.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let W=0;W<X.locationSize;W++)m(X.location+W);t.bindBuffer(t.ARRAY_BUFFER,J);for(let W=0;W<X.locationSize;W++)w(X.location+W,Y/X.locationSize,K,Z,Y*fe,Y/X.locationSize*W*fe,Ue)}}else if(G!==void 0){let Z=G[te];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(X.location,Z);break;case 3:t.vertexAttrib3fv(X.location,Z);break;case 4:t.vertexAttrib4fv(X.location,Z);break;default:t.vertexAttrib1fv(X.location,Z)}}}}y()}function M(){P();for(let D in i){let T=i[D];for(let L in T){let E=T[L];for(let N in E){let U=E[N];for(let G in U)h(U[G].object),delete U[G];delete E[N]}}delete i[D]}}function _(D){if(i[D.id]===void 0)return;let T=i[D.id];for(let L in T){let E=T[L];for(let N in E){let U=E[N];for(let G in U)h(U[G].object),delete U[G];delete E[N]}}delete i[D.id]}function v(D){for(let T in i){let L=i[T];for(let E in L){let N=L[E];if(N[D.id]===void 0)continue;let U=N[D.id];for(let G in U)h(U[G].object),delete U[G];delete N[D.id]}}}function S(D){for(let T in i){let L=i[T],E=D.isInstancedMesh===!0?D.id:0,N=L[E];if(N!==void 0){for(let U in N){let G=N[U];for(let te in G)h(G[te].object),delete G[te];delete N[U]}delete L[E],Object.keys(L).length===0&&delete i[T]}}}function P(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:_,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function kw(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Uw(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Zn&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==$n&&v!==si&&!S&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),_=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:M,samples:_}}function Fw(t){let e=this,n=null,i=0,s=!1,r=!1,o=new Mi,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,x=t.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,w=y*4,b=x.clippingState||null;l.value=b,b=h(p,u,w,f);for(let M=0;M!==w;++M)b[M]=n[M];x.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=f+g*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,b=f;w!==g;++w,b+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var il=class extends Yn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ra(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vt(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Mr});r.uniforms.tEquirect.value=n;let o=new at(s,r),a=n.minFilter;return n.minFilter===fs&&(n.minFilter=dn),new So(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}},ig=256,Bw=3,zw=20,Eg=256,Ag=16,Hw=3,Gw=new B,Vw=new et,Hh=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new So(1,10,null),this._boxMesh=new at(new vt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=Gw}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(Vw));let m=new So(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=g,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(ig,bf(e))}_fromTexture(e,n){e.mapping===Sr||e.mapping===Ao?this._setSize(e.image.length===0?ig:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=sg(e,!1,!1),i=Math.log2(e)-Bw;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:e>>s,height:e>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=sg(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=n;let o=e.width>>n;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Sr||e.mapping===Ao?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rg()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ww(),this._integrationMaterial=Xw());let n=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/Ag);for(let o=0;o<=i;o++){let a=t.lodToRoughness(o,i);if(o>i-Hw)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(n)+.5*Math.log2(6/(Eg*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Yw());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function sg(t,e,n){return new il(t,{minFilter:fs,generateMipmaps:e,type:Si,colorSpace:pa,depthBuffer:n})}function sl(t,e,n){return new En({name:t,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:n,side:nn,blending:Mr,depthTest:!1,depthWrite:!1})}function Ww(){return sl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Eg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xw(){return sl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ag}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yw(){return sl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zw}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rg(){return sl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function og(){return sl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qw(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Jc||f===jc)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let g=new il(p.height);return g.fromEquirectangularTexture(t,u),e.set(u,g),u.addEventListener("dispose",c),a(g.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Jc||f===jc,g=f===Sr||f===Ao;if(p||g){let m=n.get(u),x=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return i===null&&(i=new Hh(t)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Hh(t)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Jc?u.mapping=Sr:f===jc&&(u.mapping=Ao),u}function l(u){let f=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=n.get(f);p!==void 0&&(n.delete(f),p.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function $w(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&la("WebGLRenderer: "+i+" extension not supported."),s}}}function Zw(t,e,n,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function c(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),n.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)e.update(g[m],t.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let y=g!==null?g.array.length:m.array.length/3-1,w=m.count>=65535?Ma:ba,b=new w(Math.ceil(y/3)*6,1),M=b.array;if(g!==null){let v=g.array;x=g.version;for(let S=0,P=0;S<y;S+=3){let R=v[S+0],D=v[S+1],T=v[S+2];M[P++]=R,M[P++]=D,M[P++]=D,M[P++]=T,M[P++]=T,M[P++]=R}}else{x=m.version;for(let v=0,S=0;v<y;v+=3){let P=v+0,R=v+1,D=v+2;M[S++]=P,M[S++]=R,M[S++]=R,M[S++]=D,M[S++]=D,M[S++]=P}}b.version=x;let _=r.get(p);_&&e.remove(_),r.set(p,b)}function u(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Kw(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*o),n.update(u,i,1)}function c(d,u,f){f!==0&&(t.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m];n.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Jw(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function jw(t,e,n){let i=new WeakMap,s=new Xt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let P=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),g===!0&&(w=3);let b=a.attributes.position.count*w,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let _=new Float32Array(b*M*4*d),v=new ya(_,b,M,d);v.type=si,v.needsUpdate=!0;let S=w*4;for(let R=0;R<d;R++){let D=m[R],T=x[R],L=y[R],E=b*M*4*R;for(let N=0;N<D.count;N++){let U=N*S;f===!0&&(s.fromBufferAttribute(D,N),_[E+U+0]=s.x,_[E+U+1]=s.y,_[E+U+2]=s.z,_[E+U+3]=0),p===!0&&(s.fromBufferAttribute(T,N),_[E+U+4]=s.x,_[E+U+5]=s.y,_[E+U+6]=s.z,_[E+U+7]=0),g===!0&&(s.fromBufferAttribute(L,N),_[E+U+8]=s.x,_[E+U+9]=s.y,_[E+U+10]=s.z,_[E+U+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new Xe(b,M)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",p),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function Qw(t,e,n,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var eS={[Qd]:"LINEAR_TONE_MAPPING",[ef]:"REINHARD_TONE_MAPPING",[tf]:"CINEON_TONE_MAPPING",[nf]:"ACES_FILMIC_TONE_MAPPING",[rf]:"AGX_TONE_MAPPING",[of]:"NEUTRAL_TONE_MAPPING",[sf]:"CUSTOM_TONE_MAPPING"};function tS(t,e,n,i,s,r){let o=new Yn(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Lt;h.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xt([0,2,0,0,2,0],2));let d=new Oc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new at(h,d),f=new $c(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,y=null,w=[],b=!1;this.setSize=function(M,_){o.setSize(M,_),a!==null&&a.setSize(M,_),l!==null&&l.setSize(M,_);for(let v=0;v<w.length;v++){let S=w[v];S.setSize&&S.setSize(M,_)}},this.setEffects=function(M){w=M,b=w.length>0&&w[0].isRenderPass===!0;let _=o.width,v=o.height;w.length>0&&a===null&&(a=new Yn(_,v,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new Yn(_,v,{type:Si,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new ds(_,v),r===!0&&(c.format=ps,c.type=Tr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<w.length;P++){let R=w[P];R.setSize&&R.setSize(_,v),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(M,_){if(m||M.toneMapping===Fi&&w.length===0)return!1;if(y=_,_!==null){let v=_.width,S=_.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return b===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Fi,!0},this.hasRenderPass=function(){return b},this.end=function(M,_){M.toneMapping=x,m=!0;let v=o,S=a;for(let P=0;P<w.length;P++){let R=w[P];R.enabled!==!1&&(R.render(M,S,v,_),R.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,d.defines={},At.getTransfer(p)===Dt&&(d.defines.SRGB_TRANSFER="");let P=eS[g];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(y),M.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Rg=new Dn,Cg=new ds(1,1),Pg=new Pa(1),Ig=new ya,Lg=new Tc,Dg=new Ra,ag=[],lg=[],cg=new Float32Array(16),hg=new Float32Array(9),ug=new Float32Array(4);function Io(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=ag[s];if(r===void 0&&(r=new Float32Array(s),ag[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vh(t,e){let n=lg[e];n===void 0&&(n=new Int32Array(e),lg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nS(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function iS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function sS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function rS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function oS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;ug.set(i),t.uniformMatrix2fv(this.addr,!1,ug),rn(n,i)}}function aS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;hg.set(i),t.uniformMatrix3fv(this.addr,!1,hg),rn(n,i)}}function lS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;cg.set(i),t.uniformMatrix4fv(this.addr,!1,cg),rn(n,i)}}function cS(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function uS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function dS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function fS(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function mS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function gS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function Wh(t){return t.version===0&&(t.compareFunction=xf,t.needsUpdate=!0),t}function xS(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?r=Wh(Cg):r=Rg,n.setTexture2D(e||r,s)}function vS(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Lg,s)}function yS(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=Wh(Pg):r=Dg,n.setTextureCube(e||r,s)}function _S(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Ig,s)}function bS(t){switch(t){case 5126:return nS;case 35664:return iS;case 35665:return sS;case 35666:return rS;case 35674:return oS;case 35675:return aS;case 35676:return lS;case 5124:case 35670:return cS;case 35667:case 35671:return hS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return fS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return _S}}function MS(t,e){t.uniform1fv(this.addr,e)}function wS(t,e){let n=Io(e,this.size,2);t.uniform2fv(this.addr,n)}function SS(t,e){let n=Io(e,this.size,3);t.uniform3fv(this.addr,n)}function TS(t,e){let n=Io(e,this.size,4);t.uniform4fv(this.addr,n)}function ES(t,e){let n=Io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function AS(t,e){let n=Io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RS(t,e){let n=Io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function CS(t,e){t.uniform1iv(this.addr,e)}function PS(t,e){t.uniform2iv(this.addr,e)}function IS(t,e){t.uniform3iv(this.addr,e)}function LS(t,e){t.uniform4iv(this.addr,e)}function DS(t,e){t.uniform1uiv(this.addr,e)}function NS(t,e){t.uniform2uiv(this.addr,e)}function OS(t,e){t.uniform3uiv(this.addr,e)}function kS(t,e){t.uniform4uiv(this.addr,e)}function US(t,e,n){let i=this.cache,s=e.length,r=Vh(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Wh(Cg):o=Rg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function FS(t,e,n){let i=this.cache,s=e.length,r=Vh(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Lg,r[o])}function BS(t,e,n){let i=this.cache,s=e.length,r=Vh(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));let o;this.type===t.SAMPLER_CUBE_SHADOW?o=Wh(Pg):o=Dg;for(let a=0;a!==s;++a)n.setTextureCube(e[a]||o,r[a])}function zS(t,e,n){let i=this.cache,s=e.length,r=Vh(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Ig,r[o])}function HS(t){switch(t){case 5126:return MS;case 35664:return wS;case 35665:return SS;case 35666:return TS;case 35674:return ES;case 35675:return AS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return PS;case 35668:case 35672:return IS;case 35669:case 35673:return LS;case 5125:return DS;case 36294:return NS;case 36295:return OS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return zS}}var kf=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bS(n.type)}},Uf=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HS(n.type)}},Ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},Nf=/(\w+)(\])?(\[|\.)?/g;function dg(t,e){t.seq.push(e),t.map[e.id]=e}function GS(t,e,n){let i=t.name,s=i.length;for(Nf.lastIndex=0;;){let r=Nf.exec(i),o=Nf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dg(n,c===void 0?new kf(a,t,e):new Uf(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Ff(a),dg(n,d)),n=d}}}var Po=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);GS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function fg(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var VS=37297,WS=0;function XS(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var pg=new dt;function YS(t){At._getMatrix(pg,At.workingColorSpace,t);let e=`mat3( ${pg.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(t)){case ma:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function mg(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+XS(t.getShaderSource(e),a)}else return r}function qS(t,e){let n=YS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $S={[Qd]:"Linear",[ef]:"Reinhard",[tf]:"Cineon",[nf]:"ACESFilmic",[rf]:"AgX",[of]:"Neutral",[sf]:"Custom"};function ZS(t,e){let n=$S[e];return n===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var zh=new B;function KS(){At.getLuminanceCoefficients(zh);let t=zh.x.toFixed(4),e=zh.y.toFixed(4),n=zh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function jS(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function QS(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function nl(t){return t!==""}function gg(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(t){return t.replace(eT,tT)}function tT(t,e){let n=wt[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Bf(n)}var nT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(t){return t.replace(nT,iT)}function iT(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var sT={[qa]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function rT(t){return sT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oT={[Ao]:"ENVMAP_MODE_REFRACTION"};function aT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":oT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lT={[jd]:"ENVMAP_BLENDING_MULTIPLY",[Dm]:"ENVMAP_BLENDING_MIX",[Nm]:"ENVMAP_BLENDING_ADD"};function cT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":lT[t.combine]||"ENVMAP_BLENDING_NONE"}function hT(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=rT(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=aT(n),d=cT(n),u=JS(n),f=jS(r),p=s.createProgram(),g,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(nl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(nl).join(`
`),m.length>0&&(m+=`
`)):(g=[yg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),m=[yg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?wt.tonemapping_pars_fragment:"",n.toneMapping!==Fi?ZS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,qS("linearToOutputTexel",n.outputColorSpace),KS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),o=Bf(o),o=gg(o,n),o=xg(o,n),a=Bf(a),a=gg(a,n),a=xg(a,n),o=vg(o),a=vg(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=x+g+o,w=x+m+a,b=fg(s,s.VERTEX_SHADER,y),M=fg(s,s.FRAGMENT_SHADER,w);s.attachShader(p,b),s.attachShader(p,M),n.index0AttributeName!==void 0?s.bindAttribLocation(p,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function _(R){if(t.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",T=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(M)||"",E=D.trim(),N=T.trim(),U=L.trim(),G=!0,te=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,p,b,M);else{let X=mg(s,b,"vertex"),ne=mg(s,M,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+E+`
`+X+`
`+ne)}else E!==""?lt("WebGLProgram: Program Info Log:",E):(N===""||U==="")&&(te=!1);te&&(R.diagnostics={runnable:G,programLog:E,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(b),s.deleteShader(M),v=new Po(s,p),S=QS(s,p)}let v;this.getUniforms=function(){return v===void 0&&_(this),v};let S;this.getAttributes=function(){return S===void 0&&_(this),S};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,VS)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=M,this}var uT=0,zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Hf(e),n.set(e,i)),i}},Hf=class{constructor(e){this.id=uT++,this.code=e,this.usedTimes=0}};function dT(t){return t===ks||t===Qa||t===el}function fT(t,e,n,i,s,r){let o=new _a,a=new zf,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,P,R,D,T){let L=R.fog,E=D.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||N,U),te=u[v.type],X=i.precision;v.precision!==null&&(X=i.getMaxPrecision(v.precision),X!==v.precision&&lt("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));let ne=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Z=ne!==void 0?ne.length:0,Y=0;E.morphAttributes.position!==void 0&&(Y=1),E.morphAttributes.normal!==void 0&&(Y=2),E.morphAttributes.color!==void 0&&(Y=3);let ye,J,K,fe;if(te){let Ge=zi[te];ye=Ge.vertexShader,J=Ge.fragmentShader}else{ye=v.vertexShader,J=v.fragmentShader;let Ge=a.getVertexShaderStage(v),st=a.getFragmentShaderStage(v);a.update(v,Ge,st),K=Ge.id,fe=st.id}let Ue=t.getRenderTarget(),W=t.state.buffers.depth.getReversed(),_e=D.isInstancedMesh===!0,De=D.isBatchedMesh===!0,Se=!!v.map,ge=!!v.matcap,Ie=!!G,me=Ie&&G.isPMREMTexture===!0,ke=!!v.aoMap,Ne=!!v.lightMap,Re=!!v.bumpMap&&v.wireframe===!1,Me=!!v.normalMap,Ye=!!v.displacementMap,H=!!v.emissiveMap,j=!!v.metalnessMap,re=!!v.roughnessMap,Pe=v.anisotropy>0,k=v.clearcoat>0,ie=v.diffuseRoughness>0,de=v.dispersion>0,Ce=v.retroreflectivity>0,Q=v.iridescence>0,He=v.sheen>0,Fe=v.transmission>0,Ve=Pe&&!!v.anisotropyMap,O=k&&!!v.clearcoatMap,A=k&&!!v.clearcoatNormalMap,ee=k&&!!v.clearcoatRoughnessMap,be=ie&&!!v.diffuseRoughnessMap,pe=Q&&!!v.iridescenceMap,xe=Q&&!!v.iridescenceThicknessMap,Ae=He&&!!v.sheenColorMap,oe=He&&!!v.sheenRoughnessMap,he=!!v.specularMap,Oe=!!v.specularColorMap,V=!!v.specularIntensityMap,ce=Fe&&!!v.transmissionMap,le=Fe&&!!v.thicknessMap,ze=!!v.gradientMap,Le=!!v.alphaMap,ve=v.alphaTest>0,Te=!!v.alphaHash,Ke=!!v.extensions,Ee=Fi;v.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Ee=t.toneMapping);let qe=me?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Qe={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:ye,fragmentShader:J,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:De,batchingColor:De&&D._colorsTexture!==null,instancing:_e,instancingColor:_e&&D.instanceColor!==null,instancingMorph:_e&&D.morphTexture!==null,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Se,matcap:ge,envMap:Ie,envMapMode:Ie&&G.mapping,envMapPMREM:me,envMapMaxLod:me?qe.length-1:null,envMapSize:me?qe[0].width:null,aoMap:ke,lightMap:Ne,bumpMap:Re,normalMap:Me,displacementMap:Ye,emissiveMap:H,normalMapObjectSpace:Me&&v.normalMapType===Um,normalMapTangentSpace:Me&&v.normalMapType===pf,packedNormalMap:Me&&v.normalMapType===pf&&dT(v.normalMap.format),metalnessMap:j,roughnessMap:re,anisotropy:Pe,anisotropyMap:Ve,clearcoat:k,clearcoatMap:O,clearcoatNormalMap:A,clearcoatRoughnessMap:ee,diffuseRoughness:ie,diffuseRoughnessMap:be,dispersion:de,retroreflection:Ce,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:xe,sheen:He,sheenColorMap:Ae,sheenRoughnessMap:oe,specularMap:he,specularColorMap:Oe,specularIntensityMap:V,transmission:Fe,transmissionMap:ce,thicknessMap:le,gradientMap:ze,opaque:v.transparent===!1&&v.blending===Eo&&v.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:Te,combine:v.combine,mapUv:Se&&f(v.map.channel),aoMapUv:ke&&f(v.aoMap.channel),lightMapUv:Ne&&f(v.lightMap.channel),bumpMapUv:Re&&f(v.bumpMap.channel),normalMapUv:Me&&f(v.normalMap.channel),displacementMapUv:Ye&&f(v.displacementMap.channel),emissiveMapUv:H&&f(v.emissiveMap.channel),metalnessMapUv:j&&f(v.metalnessMap.channel),roughnessMapUv:re&&f(v.roughnessMap.channel),anisotropyMapUv:Ve&&f(v.anisotropyMap.channel),clearcoatMapUv:O&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:oe&&f(v.sheenRoughnessMap.channel),specularMapUv:he&&f(v.specularMap.channel),specularColorMapUv:Oe&&f(v.specularColorMap.channel),specularIntensityMapUv:V&&f(v.specularIntensityMap.channel),transmissionMapUv:ce&&f(v.transmissionMap.channel),thicknessMapUv:le&&f(v.thicknessMap.channel),alphaMapUv:Le&&f(v.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Me||Pe),vertexNormals:!!E.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!E.attributes.uv&&(Se||Le),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||E.attributes.normal===void 0&&Me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Y,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:T.filter(Ge=>Ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Se&&v.map.isVideoTexture===!0&&At.getTransfer(v.map.colorSpace)===Dt,decodeVideoTextureEmissive:H&&v.emissiveMap.isVideoTexture===!0&&At.getTransfer(v.emissiveMap.colorSpace)===Dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ke&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&v.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function g(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)S.push(P),S.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(m(S,v),x(S,v),S.push(t.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let S=u[v.type],P;if(S){let R=zi[S];P=eg.clone(R.uniforms)}else P=v.uniforms;return P}function w(v,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new hT(t,S,v,s),c.push(P),h.set(S,P)),P}function b(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function _(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:_}}function pT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function mT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function _g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bg(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,g,m,x){let y=t[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},t[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=g,y.renderOrder=u.renderOrder,y.z=m,y.group=x),e++,y}function l(u,f,p,g,m,x,y){y.reversedDepth===!0&&(m=-m);let w=a(u,f,p,g,m,x);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):n.push(w)}function c(u,f,p,g,m,x){let y=a(u,f,p,g,m,x);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):n.unshift(y)}function h(u,f){n.length>1&&n.sort(u||mT),i.length>1&&i.sort(f||_g),s.length>1&&s.sort(f||_g)}function d(){for(let u=e,f=t.length;u<f;u++){let p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function gT(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new bg,t.set(i,[o])):s>=r.length?(o=new bg,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function xT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new B,color:new et};break;case"SpotLight":n={position:new B,direction:new B,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function vT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var yT=0;function _T(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bT(t){let e=new xT,n=vT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new Mt,o=new Mt;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,p=0,g=0,m=0,x=0,y=0,w=0,b=0,M=0,_=0,v=0,S=0,P=0,R=0;c.sort(_T);for(let T=0,L=c.length;T<L;T++){let E=c[T],N=E.color,U=E.intensity,G=E.distance,te=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===ks?te=E.shadow.map.texture:te=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=N.r*U,d+=N.g*U,u+=N.b*U;else if(E.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(E.sh.coefficients[X],U);R++}else if(E.isSunLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let ne=E.shadow,Z=n.get(E);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[p]=Z,i.sunShadowMap[p]=te;let Y=ne.getViewportCount();for(let ye=0;ye<Y;ye++)i.sunShadowMatrix[g+ye]=ne.getMatrix(ye),i.sunShadowCascade[g+ye]=ne._cascadeData[ye];g+=Y,p++}i.sun[f]=X,f++}else if(E.isDirectionalLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let ne=E.shadow,Z=n.get(E);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=E.shadow.matrix,M++}i.directional[m]=X,m++}else if(E.isSpotLight){let X=e.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(N).multiplyScalar(U),X.distance=G,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,i.spot[y]=X;let ne=E.shadow;if(E.map&&(i.spotLightMap[S]=E.map,S++,ne.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[y]=ne.matrix,E.castShadow){let Z=n.get(E);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,i.spotShadow[y]=Z,i.spotShadowMap[y]=te,v++}y++}else if(E.isRectAreaLight){let X=e.get(E);X.color.copy(N).multiplyScalar(U),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),i.rectArea[w]=X,w++}else if(E.isPointLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){let ne=E.shadow,Z=n.get(E);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,Z.shadowCameraNear=ne.camera.near,Z.shadowCameraFar=ne.camera.far,i.pointShadow[x]=Z,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=E.shadow.matrix,_++}i.point[x]=X,x++}else if(E.isHemisphereLight){let X=e.get(E);X.skyColor.copy(E.color).multiplyScalar(U),X.groundColor.copy(E.groundColor).multiplyScalar(U),i.hemi[b]=X,b++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=je.LTC_FLOAT_1,i.rectAreaLTC2=je.LTC_FLOAT_2):(i.rectAreaLTC1=je.LTC_HALF_1,i.rectAreaLTC2=je.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==w||D.hemiLength!==b||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==S||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=w,i.point.length=x,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.pointShadowMatrix.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=x,D.spotLength=y,D.rectAreaLength=w,D.hemiLength=b,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=S,D.numLightProbes=R,i.version=yT++)}function l(c,h){let d=0,u=0,f=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let b=c[y];if(b.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(x),d++}else if(b.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),u++}else if(b.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),p++}else if(b.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),f++}else if(b.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function Mg(t){let e=new bT(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):n.push(d)}function a(d){i.push(d)}function l(){e.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function MT(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Mg(t),e.set(s,[a])):r>=o.length?(a=new Mg(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var wT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ST=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,TT=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],ET=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],wg=new Mt,tl=new B,Of=new B;function AT(t,e,n){let i=new gr,s=new Xe,r=new Xe,o=new Xt,a=new kc,l=new Uc,c={},h=n.maxTextureSize,d={[Os]:nn,[nn]:Os,[An]:An},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:wT,fragmentShader:ST}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Lt;p.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new at(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let x=this.type;this.render=function(_,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;this.type===pm&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qa);let P=t.getRenderTarget(),R=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),T=t.state;T.setBlending(Mr),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let L=x!==this.type;L&&v.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(N=>N.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,N=_.length;E<N;E++){let U=_[E],G=U.shadow;if(G===void 0){lt("WebGLShadowMap:",U,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let te=G.getFrameExtents();s.multiply(te),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,G.mapSize.y=r.y));let X=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||L===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===To){if(U.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Yn(s.x,s.y,{format:ks,type:Si,minFilter:dn,magFilter:dn,generateMipmaps:!1}),G.map.texture.name=U.name+".shadowMap",G.map.depthTexture=new ds(s.x,s.y,si),G.map.depthTexture.name=U.name+".shadowMapDepth",G.map.depthTexture.format=hs,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un}else U.isPointLight?(G.map=new il(s.x),G.map.depthTexture=new Pa(s.x,wi)):(G.map=new Yn(s.x,s.y),G.map.depthTexture=new ds(s.x,s.y,wi)),G.map.depthTexture.name=U.name+".shadowMap",G.map.depthTexture.format=hs,this.type===qa?(G.map.depthTexture.compareFunction=X?gf:mf,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let ne=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();U.isPointLight!==!0&&G.updateMatrices(U,S);let Z=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Y=0;Y<ne;Y++){let ye=G.getCamera(Y);if(U.isPointLight){let J=G.camera,K=G.matrix,fe=U.distance||J.far;fe!==J.far&&(J.far=fe,J.updateProjectionMatrix()),tl.setFromMatrixPosition(U.matrixWorld),J.position.copy(tl),Of.copy(J.position),Of.add(TT[Y]),J.up.copy(ET[Y]),J.lookAt(Of),J.updateMatrixWorld(),K.makeTranslation(-tl.x,-tl.y,-tl.z),wg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(wg,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,Y),t.clear();else{Y===0&&(t.setRenderTarget(G.map),t.clear());let J=G.getViewport(Y);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),T.viewport(o)}i=G.getFrustum(Y),b(v,S,ye,U,Z,this.type)}G.isPointLightShadow!==!0&&this.type===To&&y(G,S),G.needsUpdate=!1}x=this.type,m.needsUpdate=!1,t.setRenderTarget(P,R,D)};function y(_,v){let S=e.update(g);u.defines.VSM_SAMPLES!==_.blurSamples&&(u.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null?_.mapPass=new Yn(s.x,s.y,{format:ks,type:Si}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),u.uniforms.shadow_pass.value=_.map.depthTexture,u.uniforms.resolution.value.set(_.map.width,_.map.height),u.uniforms.radius.value=_.radius,t.setRenderTarget(_.mapPass),t.clear(),t.renderBufferDirect(v,null,S,u,g,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value.set(_.map.width,_.map.height),f.uniforms.radius.value=_.radius,t.setRenderTarget(_.map),t.clear(),t.renderBufferDirect(v,null,S,f,g,null)}function w(_,v,S,P){let R=null,D=S.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?l:a,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let T=R.uuid,L=v.uuid,E=c[T];E===void 0&&(E={},c[T]=E);let N=E[L];N===void 0&&(N=R.clone(),E[L]=N,v.addEventListener("dispose",M)),R=N}if(R.visible=v.visible,R.wireframe=v.wireframe,P===To?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let T=t.properties.get(R);T.light=S}return R}function b(_,v,S,P,R,D){if(_.visible===!1)return;if(_.layers.test(R)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&D===To)&&(!_.frustumCulled||_.intersectsFrustum(i))){_.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,_.matrixWorld);let E=e.update(_),N=_.material;if(Array.isArray(N)){let U=E.groups;for(let G=0,te=U.length;G<te;G++){let X=U[G],ne=N[X.materialIndex];if(ne&&ne.visible){let Z=w(_,ne,P,D);_.onBeforeShadow(t,_,v,S,E,Z,X),t.renderBufferDirect(S,null,E,Z,_,X),_.onAfterShadow(t,_,v,S,E,Z,X)}}}else if(N.visible){let U=w(_,N,P,D);_.onBeforeShadow(t,_,v,S,E,U,null),t.renderBufferDirect(S,null,E,U,_,null),_.onAfterShadow(t,_,v,S,E,U,null)}}let L=_.children;for(let E=0,N=L.length;E<N;E++)b(L[E],v,S,P,R,D)}function M(_){_.target.removeEventListener("dispose",M);for(let S in c){let P=c[S],R=_.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function RT(t,e){function n(){let V=!1,ce=new Xt,le=null,ze=new Xt(0,0,0,0);return{setMask:function(Le){le!==Le&&!V&&(t.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){V=Le},setClear:function(Le,ve,Te,Ke,Ee){Ee===!0&&(Le*=Ke,ve*=Ke,Te*=Ke),ce.set(Le,ve,Te,Ke),ze.equals(ce)===!1&&(t.clearColor(Le,ve,Te,Ke),ze.copy(ce))},reset:function(){V=!1,le=null,ze.set(-1,0,0,0)}}}function i(){let V=!1,ce=!1,le=null,ze=null,Le=null;return{setReversed:function(ve){if(ce!==ve){let Te=e.get("EXT_clip_control");ve?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ce=ve;let Ke=Le;Le=null,this.setClear(Ke)}},getReversed:function(){return ce},setTest:function(ve){ve?W(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(ve){le!==ve&&!V&&(t.depthMask(ve),le=ve)},setFunc:function(ve){if(ce&&(ve=qm[ve]),ze!==ve){switch(ve){case fc:t.depthFunc(t.NEVER);break;case pc:t.depthFunc(t.ALWAYS);break;case mc:t.depthFunc(t.LESS);break;case co:t.depthFunc(t.LEQUAL);break;case gc:t.depthFunc(t.EQUAL);break;case xc:t.depthFunc(t.GEQUAL);break;case vc:t.depthFunc(t.GREATER);break;case yc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ze=ve}},setLocked:function(ve){V=ve},setClear:function(ve){Le!==ve&&(Le=ve,ce&&(ve=1-ve),t.clearDepth(ve))},reset:function(){V=!1,le=null,ze=null,Le=null,ce=!1}}}function s(){let V=!1,ce=null,le=null,ze=null,Le=null,ve=null,Te=null,Ke=null,Ee=null;return{setTest:function(qe){V||(qe?W(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(qe){ce!==qe&&!V&&(t.stencilMask(qe),ce=qe)},setFunc:function(qe,Qe,Ge){(le!==qe||ze!==Qe||Le!==Ge)&&(t.stencilFunc(qe,Qe,Ge),le=qe,ze=Qe,Le=Ge)},setOp:function(qe,Qe,Ge){(ve!==qe||Te!==Qe||Ke!==Ge)&&(t.stencilOp(qe,Qe,Ge),ve=qe,Te=Qe,Ke=Ge)},setLocked:function(qe){V=qe},setClear:function(qe){Ee!==qe&&(t.clearStencil(qe),Ee=qe)},reset:function(){V=!1,ce=null,le=null,ze=null,Le=null,ve=null,Te=null,Ke=null,Ee=null}}}let r=new n,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],g=null,m=!1,x=null,y=null,w=null,b=null,M=null,_=null,v=null,S=new et(0,0,0),P=0,R=!1,D=null,T=null,L=null,E=null,N=null,U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=te>=2);let ne=null,Z={},Y=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),J=new Xt().fromArray(Y),K=new Xt().fromArray(ye);function fe(V,ce,le,ze){let Le=new Uint8Array(4),ve=t.createTexture();t.bindTexture(V,ve),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<le;Te++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(ce+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return ve}let Ue={};Ue[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(t.DEPTH_TEST),o.setFunc(co),Re(!1),Me(Yd),W(t.CULL_FACE),ke(Mr);function W(V){h[V]!==!0&&(t.enable(V),h[V]=!0)}function _e(V){h[V]!==!1&&(t.disable(V),h[V]=!1)}function De(V,ce){return u[V]!==ce?(t.bindFramebuffer(V,ce),u[V]=ce,V===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),V===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Se(V,ce){let le=p,ze=!1;if(V){le=f.get(ce),le===void 0&&(le=[],f.set(ce,le));let Le=V.textures;if(le.length!==Le.length||le[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Te=Le.length;ve<Te;ve++)le[ve]=t.COLOR_ATTACHMENT0+ve;le.length=Le.length,ze=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,ze=!0);ze&&t.drawBuffers(le)}function ge(V){return g!==V?(t.useProgram(V),g=V,!0):!1}let Ie={[wr]:t.FUNC_ADD,[gm]:t.FUNC_SUBTRACT,[xm]:t.FUNC_REVERSE_SUBTRACT};Ie[vm]=t.MIN,Ie[ym]=t.MAX;let me={[_m]:t.ZERO,[bm]:t.ONE,[Mm]:t.SRC_COLOR,[Kd]:t.SRC_ALPHA,[Rm]:t.SRC_ALPHA_SATURATE,[Em]:t.DST_COLOR,[Sm]:t.DST_ALPHA,[wm]:t.ONE_MINUS_SRC_COLOR,[Jd]:t.ONE_MINUS_SRC_ALPHA,[Am]:t.ONE_MINUS_DST_COLOR,[Tm]:t.ONE_MINUS_DST_ALPHA,[Cm]:t.CONSTANT_COLOR,[Pm]:t.ONE_MINUS_CONSTANT_COLOR,[Im]:t.CONSTANT_ALPHA,[Lm]:t.ONE_MINUS_CONSTANT_ALPHA};function ke(V,ce,le,ze,Le,ve,Te,Ke,Ee,qe){if(V===Mr){m===!0&&(_e(t.BLEND),m=!1);return}if(m===!1&&(W(t.BLEND),m=!0),V!==mm){if(V!==x||qe!==R){if((y!==wr||M!==wr)&&(t.blendEquation(t.FUNC_ADD),y=wr,M=wr),qe)switch(V){case Eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qd:t.blendFunc(t.ONE,t.ONE);break;case $d:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ht("WebGLState: Invalid blending: ",V);break}else switch(V){case Eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $d:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zd:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",V);break}w=null,b=null,_=null,v=null,S.set(0,0,0),P=0,x=V,R=qe}return}Le=Le||ce,ve=ve||le,Te=Te||ze,(ce!==y||Le!==M)&&(t.blendEquationSeparate(Ie[ce],Ie[Le]),y=ce,M=Le),(le!==w||ze!==b||ve!==_||Te!==v)&&(t.blendFuncSeparate(me[le],me[ze],me[ve],me[Te]),w=le,b=ze,_=ve,v=Te),(Ke.equals(S)===!1||Ee!==P)&&(t.blendColor(Ke.r,Ke.g,Ke.b,Ee),S.copy(Ke),P=Ee),x=V,R=!1}function Ne(V,ce){V.side===An?_e(t.CULL_FACE):W(t.CULL_FACE);let le=V.side===nn;ce&&(le=!le),Re(le),V.blending===Eo&&V.transparent===!1?ke(Mr):ke(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let ze=V.stencilWrite;a.setTest(ze),ze&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),H(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?W(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(V){D!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),D=V)}function Me(V){V!==dm?(W(t.CULL_FACE),V!==T&&(V===Yd?t.cullFace(t.BACK):V===fm?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),T=V}function Ye(V){V!==L&&(G&&t.lineWidth(V),L=V)}function H(V,ce,le){V?(W(t.POLYGON_OFFSET_FILL),(E!==ce||N!==le)&&(E=ce,N=le,o.getReversed()&&(ce=-ce,le=-le),t.polygonOffset(ce,le))):_e(t.POLYGON_OFFSET_FILL)}function j(V){V?W(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function re(V){V===void 0&&(V=t.TEXTURE0+U-1),ne!==V&&(t.activeTexture(V),ne=V)}function Pe(V,ce,le){le===void 0&&(ne===null?le=t.TEXTURE0+U-1:le=ne);let ze=Z[le];ze===void 0&&(ze={type:void 0,texture:void 0},Z[le]=ze),(ze.type!==V||ze.texture!==ce)&&(ne!==le&&(t.activeTexture(le),ne=le),t.bindTexture(V,ce||Ue[V]),ze.type=V,ze.texture=ce)}function k(){let V=Z[ne];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ie(){try{t.compressedTexImage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function de(){try{t.compressedTexImage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function Ce(){try{t.texSubImage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function Q(){try{t.texSubImage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function He(){try{t.compressedTexSubImage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function Fe(){try{t.compressedTexSubImage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function Ve(){try{t.texStorage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function O(){try{t.texStorage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function A(){try{t.texImage2D(...arguments)}catch(V){ht("WebGLState:",V)}}function ee(){try{t.texImage3D(...arguments)}catch(V){ht("WebGLState:",V)}}function be(V){return d[V]!==void 0?d[V]:t.getParameter(V)}function pe(V,ce){d[V]!==ce&&(t.pixelStorei(V,ce),d[V]=ce)}function xe(V){J.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),J.copy(V))}function Ae(V){K.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),K.copy(V))}function oe(V,ce){let le=c.get(ce);le===void 0&&(le=new WeakMap,c.set(ce,le));let ze=le.get(V);ze===void 0&&(ze=t.getUniformBlockIndex(ce,V.name),t.uniformBlockBinding(ce,ze,ze),le.set(V,ze))}function he(V,ce,le){let Le=c.get(ce).get(V);l[Le]!==le&&(t.bindBufferBase(t.UNIFORM_BUFFER,Le,le),l[Le]=le)}function Oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,Z={},u={},l={},f=new WeakMap,p=[],g=null,m=!1,x=null,y=null,w=null,b=null,M=null,_=null,v=null,S=new et(0,0,0),P=0,R=!1,D=null,T=null,L=null,E=null,N=null,J.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:_e,bindFramebuffer:De,drawBuffers:Se,useProgram:ge,setBlending:ke,setMaterial:Ne,setFlipSided:Re,setCullFace:Me,setLineWidth:Ye,setPolygonOffset:H,setScissorTest:j,activeTexture:re,bindTexture:Pe,unbindTexture:k,compressedTexImage2D:ie,compressedTexImage3D:de,texImage2D:A,texImage3D:ee,pixelStorei:pe,getParameter:be,updateUBOMapping:oe,uniformBlockBinding:he,texStorage2D:Ve,texStorage3D:O,texSubImage2D:Ce,texSubImage3D:Q,compressedTexSubImage2D:He,compressedTexSubImage3D:Fe,scissor:xe,viewport:Ae,reset:Oe}}function CT(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,g=new FinalizationRegistry(O=>p.delete(O)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,A){return m?new OffscreenCanvas(O,A):xa("canvas")}function y(O,A,ee){let be=1,pe=Ve(O);if((pe.width>ee||pe.height>ee)&&(be=ee/Math.max(pe.width,pe.height)),be<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let xe=Math.floor(be*pe.width),Ae=Math.floor(be*pe.height);u===void 0&&(u=x(xe,Ae));let oe=A?x(xe,Ae):u;return oe.width=xe,oe.height=Ae,oe.getContext("2d").drawImage(O,0,0,xe,Ae),lt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+xe+"x"+Ae+")."),oe}else return"data"in O&&lt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),O;return O}function w(O){return O.generateMipmaps}function b(O){t.generateMipmap(O)}function M(O){return O.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?t.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(O,A,ee,be,pe,xe=!1){if(O!==null){if(t[O]!==void 0)return t[O];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ae;be&&(Ae=e.get("EXT_texture_norm16"),Ae||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=A;if(A===t.RED&&(ee===t.FLOAT&&(oe=t.R32F),ee===t.HALF_FLOAT&&(oe=t.R16F),ee===t.UNSIGNED_BYTE&&(oe=t.R8),ee===t.UNSIGNED_SHORT&&Ae&&(oe=Ae.R16_EXT),ee===t.SHORT&&Ae&&(oe=Ae.R16_SNORM_EXT)),A===t.RED_INTEGER&&(ee===t.UNSIGNED_BYTE&&(oe=t.R8UI),ee===t.UNSIGNED_SHORT&&(oe=t.R16UI),ee===t.UNSIGNED_INT&&(oe=t.R32UI),ee===t.BYTE&&(oe=t.R8I),ee===t.SHORT&&(oe=t.R16I),ee===t.INT&&(oe=t.R32I)),A===t.RG&&(ee===t.FLOAT&&(oe=t.RG32F),ee===t.HALF_FLOAT&&(oe=t.RG16F),ee===t.UNSIGNED_BYTE&&(oe=t.RG8),ee===t.UNSIGNED_SHORT&&Ae&&(oe=Ae.RG16_EXT),ee===t.SHORT&&Ae&&(oe=Ae.RG16_SNORM_EXT)),A===t.RG_INTEGER&&(ee===t.UNSIGNED_BYTE&&(oe=t.RG8UI),ee===t.UNSIGNED_SHORT&&(oe=t.RG16UI),ee===t.UNSIGNED_INT&&(oe=t.RG32UI),ee===t.BYTE&&(oe=t.RG8I),ee===t.SHORT&&(oe=t.RG16I),ee===t.INT&&(oe=t.RG32I)),A===t.RGB_INTEGER&&(ee===t.UNSIGNED_BYTE&&(oe=t.RGB8UI),ee===t.UNSIGNED_SHORT&&(oe=t.RGB16UI),ee===t.UNSIGNED_INT&&(oe=t.RGB32UI),ee===t.BYTE&&(oe=t.RGB8I),ee===t.SHORT&&(oe=t.RGB16I),ee===t.INT&&(oe=t.RGB32I)),A===t.RGBA_INTEGER&&(ee===t.UNSIGNED_BYTE&&(oe=t.RGBA8UI),ee===t.UNSIGNED_SHORT&&(oe=t.RGBA16UI),ee===t.UNSIGNED_INT&&(oe=t.RGBA32UI),ee===t.BYTE&&(oe=t.RGBA8I),ee===t.SHORT&&(oe=t.RGBA16I),ee===t.INT&&(oe=t.RGBA32I)),A===t.RGB&&(ee===t.UNSIGNED_SHORT&&Ae&&(oe=Ae.RGB16_EXT),ee===t.SHORT&&Ae&&(oe=Ae.RGB16_SNORM_EXT),ee===t.UNSIGNED_INT_5_9_9_9_REV&&(oe=t.RGB9_E5),ee===t.UNSIGNED_INT_10F_11F_11F_REV&&(oe=t.R11F_G11F_B10F)),A===t.RGBA){let he=xe?ma:At.getTransfer(pe);ee===t.FLOAT&&(oe=t.RGBA32F),ee===t.HALF_FLOAT&&(oe=t.RGBA16F),ee===t.UNSIGNED_BYTE&&(oe=he===Dt?t.SRGB8_ALPHA8:t.RGBA8),ee===t.UNSIGNED_SHORT&&Ae&&(oe=Ae.RGBA16_EXT),ee===t.SHORT&&Ae&&(oe=Ae.RGBA16_SNORM_EXT),ee===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),ee===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(O,A){let ee;return O?A===null||A===wi||A===Tr?ee=t.DEPTH24_STENCIL8:A===si?ee=t.DEPTH32F_STENCIL8:A===Ro&&(ee=t.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===wi||A===Tr?ee=t.DEPTH_COMPONENT24:A===si?ee=t.DEPTH_COMPONENT32F:A===Ro&&(ee=t.DEPTH_COMPONENT16),ee}function S(O,A){return w(O)===!0||O.isFramebufferTexture&&O.minFilter!==un&&O.minFilter!==dn?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function P(O){let A=new WeakRef(O);i.get(O).__ref=A,p.add(A),g.register(O,A,A)}function R(O){let A=i.get(O).__ref;A!==void 0&&(p.delete(A),g.unregister(A))}function D(O){L(O.target)}function T(O){E(O.target)}function L(O){O.removeEventListener("dispose",D),R(O),U(O),O.isVideoTexture&&h.delete(O),O.isHTMLTexture&&d.delete(O)}function E(O){O.removeEventListener("dispose",T),R(O),te(O)}function N(){for(let O of p){let A=O.deref();A!==void 0&&(A.isRenderTarget===!0?E(A):L(A))}p.clear(),d.clear()}function U(O){let A=i.get(O);if(A.__webglInit===void 0)return;let ee=O.source,be=f.get(ee);if(be){let pe=be[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&G(O),Object.keys(be).length===0&&f.delete(ee)}i.remove(O)}function G(O){let A=i.get(O);t.deleteTexture(A.__webglTexture);let ee=O.source,be=f.get(ee);delete be[A.__cacheKey],o.memory.textures--}function te(O){let A=i.get(O);A.__depthDisposeCallback&&A.__depthDisposeCallback();let ee=O.depthTexture;if(ee&&ee.renderTarget===O&&L(ee),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let xe=0;xe<A.__webglFramebuffer[pe].length;xe++)t.deleteFramebuffer(A.__webglFramebuffer[pe][xe]);else t.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)t.deleteFramebuffer(A.__webglFramebuffer[pe]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let be=O.textures;for(let pe=0,xe=be.length;pe<xe;pe++){let Ae=i.get(be[pe]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(be[pe])}i.remove(O)}let X=0;function ne(){X=0}function Z(){return X}function Y(O){X=O}function ye(){let O=X;return O>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,O}function J(O){let A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.mipmapsAutoUpdate),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function K(O,A){let ee=i.get(O);if(O.isVideoTexture&&He(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ee.__version!==O.version){let be=O.image;if(be===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(ee,O,A);return}}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture,t.TEXTURE0+A)}function fe(O,A){let ee=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){Ne(ee,O,A);return}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,ee.__webglTexture,t.TEXTURE0+A)}function Ue(O,A){let ee=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){Ne(ee,O,A);return}n.bindTexture(t.TEXTURE_3D,ee.__webglTexture,t.TEXTURE0+A)}function W(O,A){let ee=i.get(O);if(O.version>0&&ee.__version!==O.version){Re(ee,O,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture,t.TEXTURE0+A)}let _e={[_c]:t.REPEAT,[Ni]:t.CLAMP_TO_EDGE,[bc]:t.MIRRORED_REPEAT},De={[un]:t.NEAREST,[Om]:t.NEAREST_MIPMAP_NEAREST,[$a]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[fs]:t.LINEAR_MIPMAP_LINEAR},Se={[Bm]:t.NEVER,[xf]:t.ALWAYS,[zm]:t.LESS,[mf]:t.LEQUAL,[Hm]:t.EQUAL,[gf]:t.GEQUAL,[Gm]:t.GREATER,[Vm]:t.NOTEQUAL};function ge(O,A){if(A.type===si&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===dn||A.magFilter===Qc||A.magFilter===$a||A.magFilter===fs||A.minFilter===dn||A.minFilter===Qc||A.minFilter===$a||A.minFilter===fs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(O,t.TEXTURE_WRAP_S,_e[A.wrapS]),t.texParameteri(O,t.TEXTURE_WRAP_T,_e[A.wrapT]),(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)&&t.texParameteri(O,t.TEXTURE_WRAP_R,_e[A.wrapR]),t.texParameteri(O,t.TEXTURE_MAG_FILTER,De[A.magFilter]),t.texParameteri(O,t.TEXTURE_MIN_FILTER,De[A.minFilter]),A.compareFunction&&(t.texParameteri(O,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(O,t.TEXTURE_COMPARE_FUNC,Se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===un||A.minFilter!==$a&&A.minFilter!==fs||A.type===si&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let ee=e.get("EXT_texture_filter_anisotropic");t.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ie(O,A){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",D),P(A));let be=A.source,pe=f.get(be);pe===void 0&&(pe={},f.set(be,pe));let xe=J(A);if(xe!==O.__cacheKey){pe[xe]===void 0&&(pe[xe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),pe[xe].usedTimes++;let Ae=pe[O.__cacheKey];Ae!==void 0&&(pe[O.__cacheKey].usedTimes--,Ae.usedTimes===0&&G(A)),O.__cacheKey=xe,O.__webglTexture=pe[xe].texture}return ee}function me(O,A,ee){return Math.floor(Math.floor(O/ee)/A)}function ke(O,A,ee,be){let xe=O.updateRanges;if(xe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,ee,be,A.data);else{xe.sort((V,ce)=>V.start-ce.start);let Ae=0;for(let V=1;V<xe.length;V++){let ce=xe[Ae],le=xe[V],ze=ce.start+ce.count,Le=me(le.start,A.width,4),ve=me(ce.start,A.width,4);le.start<=ze+1&&Le===ve&&me(le.start+le.count-1,A.width,4)===Le?ce.count=Math.max(ce.count,le.start+le.count-ce.start):(++Ae,xe[Ae]=le)}xe.length=Ae+1;let oe=n.getParameter(t.UNPACK_ROW_LENGTH),he=n.getParameter(t.UNPACK_SKIP_PIXELS),Oe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let V=0,ce=xe.length;V<ce;V++){let le=xe[V],ze=Math.floor(le.start/4),Le=Math.ceil(le.count/4),ve=ze%A.width,Te=Math.floor(ze/A.width),Ke=Le,Ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,Te),n.texSubImage2D(t.TEXTURE_2D,0,ve,Te,Ke,Ee,ee,be,A.data)}O.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,oe),n.pixelStorei(t.UNPACK_SKIP_PIXELS,he),n.pixelStorei(t.UNPACK_SKIP_ROWS,Oe)}}function Ne(O,A,ee){let be=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(be=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(be=t.TEXTURE_3D);let pe=Ie(O,A),xe=A.source;n.bindTexture(be,O.__webglTexture,t.TEXTURE0+ee);let Ae=i.get(xe);if(xe.version!==Ae.__version||pe===!0){if(n.activeTexture(t.TEXTURE0+ee),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let Ee=At.getPrimaries(At.workingColorSpace),qe=A.colorSpace===ms?null:At.getPrimaries(A.colorSpace),Qe=A.colorSpace===ms||Ee===qe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}n.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment);let he=y(A.image,!1,s.maxTextureSize);he=Fe(A,he);let Oe=r.convert(A.format,A.colorSpace),V=r.convert(A.type),ce=_(A.internalFormat,Oe,V,A.normalized,A.colorSpace,A.isVideoTexture);ge(be,A);let le,ze=A.mipmaps,Le=A.isVideoTexture!==!0,ve=Ae.__version===void 0||pe===!0,Te=xe.dataReady,Ke=S(A,he);if(A.isDepthTexture)ce=v(A.format===ps,A.type),ve&&(Le?n.texStorage2D(t.TEXTURE_2D,1,ce,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,ce,he.width,he.height,0,Oe,V,null));else if(A.isDataTexture)if(ze.length>0){Le&&ve&&n.texStorage2D(t.TEXTURE_2D,Ke,ce,ze[0].width,ze[0].height);for(let Ee=0,qe=ze.length;Ee<qe;Ee++)le=ze[Ee],Le?Te&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,le.width,le.height,Oe,V,le.data):n.texImage2D(t.TEXTURE_2D,Ee,ce,le.width,le.height,0,Oe,V,le.data);A.generateMipmaps=!1}else Le?(ve&&n.texStorage2D(t.TEXTURE_2D,Ke,ce,he.width,he.height),Te&&ke(A,he,Oe,V)):n.texImage2D(t.TEXTURE_2D,0,ce,he.width,he.height,0,Oe,V,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Le&&ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ke,ce,ze[0].width,ze[0].height,he.depth);for(let Ee=0,qe=ze.length;Ee<qe;Ee++)if(le=ze[Ee],A.format!==Zn)if(Oe!==null)if(Le){if(Te)if(A.layerUpdates.size>0){let Qe=Rf(le.width,le.height,A.format,A.type);for(let Ge of A.layerUpdates){let st=le.data.subarray(Ge*Qe/le.data.BYTES_PER_ELEMENT,(Ge+1)*Qe/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,Ge,le.width,le.height,1,Oe,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,le.width,le.height,he.depth,Oe,le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ee,ce,le.width,le.height,he.depth,0,le.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?Te&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,le.width,le.height,he.depth,Oe,V,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ee,ce,le.width,le.height,he.depth,0,Oe,V,le.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Le&&ve&&n.texStorage2D(t.TEXTURE_2D,Ke,ce,ze[0].width,ze[0].height);for(let Ee=0,qe=ze.length;Ee<qe;Ee++)le=ze[Ee],A.format!==Zn?Oe!==null?Le?Te&&n.compressedTexSubImage2D(t.TEXTURE_2D,Ee,0,0,le.width,le.height,Oe,le.data):n.compressedTexImage2D(t.TEXTURE_2D,Ee,ce,le.width,le.height,0,le.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?Te&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,le.width,le.height,Oe,V,le.data):n.texImage2D(t.TEXTURE_2D,Ee,ce,le.width,le.height,0,Oe,V,le.data)}else if(A.isDataArrayTexture)if(Le){if(ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ke,ce,he.width,he.height,he.depth),Te)if(A.layerUpdates.size>0){let Ee=Rf(he.width,he.height,A.format,A.type);for(let qe of A.layerUpdates){let Qe=he.data.subarray(qe*Ee/he.data.BYTES_PER_ELEMENT,(qe+1)*Ee/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,qe,he.width,he.height,1,Oe,V,Qe)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Oe,V,he.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,he.width,he.height,he.depth,0,Oe,V,he.data);else if(A.isData3DTexture)Le?(ve&&n.texStorage3D(t.TEXTURE_3D,Ke,ce,he.width,he.height,he.depth),Te&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Oe,V,he.data)):n.texImage3D(t.TEXTURE_3D,0,ce,he.width,he.height,he.depth,0,Oe,V,he.data);else if(A.isFramebufferTexture){if(ve)if(Le)n.texStorage2D(t.TEXTURE_2D,Ke,ce,he.width,he.height);else{let Ee=he.width,qe=he.height;for(let Qe=0;Qe<Ke;Qe++)n.texImage2D(t.TEXTURE_2D,Qe,ce,Ee,qe,0,Oe,V,null),Ee>>=1,qe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in t){let Ee=t.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),he.parentNode!==Ee){Ee.appendChild(he),d.add(A),Ee.onpaint=qe=>{let Qe=qe.changedElements;for(let Ge of d)Qe.includes(Ge.image)&&(Ge.needsUpdate=!0)},Ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,he);else{let Qe=t.RGBA,Ge=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Qe,Ge,st,he)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Le&&ve){let Ee=Ve(ze[0]);n.texStorage2D(t.TEXTURE_2D,Ke,ce,Ee.width,Ee.height)}for(let Ee=0,qe=ze.length;Ee<qe;Ee++)le=ze[Ee],Le?Te&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,Oe,V,le):n.texImage2D(t.TEXTURE_2D,Ee,ce,Oe,V,le);A.generateMipmaps=!1}else if(Le){if(ve){let Ee=Ve(he);n.texStorage2D(t.TEXTURE_2D,Ke,ce,Ee.width,Ee.height)}Te&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Oe,V,he)}else n.texImage2D(t.TEXTURE_2D,0,ce,Oe,V,he);w(A)&&A.mipmapsAutoUpdate===!0&&b(be),Ae.__version=xe.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Re(O,A,ee){if(A.image.length!==6)return;let be=Ie(O,A),pe=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+ee);let xe=i.get(pe);if(pe.version!==xe.__version||be===!0){n.activeTexture(t.TEXTURE0+ee);let Ae=At.getPrimaries(At.workingColorSpace),oe=A.colorSpace===ms?null:At.getPrimaries(A.colorSpace),he=A.colorSpace===ms||Ae===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Oe=A.isCompressedTexture||A.image[0].isCompressedTexture,V=A.image[0]&&A.image[0].isDataTexture,ce=[];for(let Ge=0;Ge<6;Ge++)!Oe&&!V?ce[Ge]=y(A.image[Ge],!0,s.maxCubemapSize):ce[Ge]=V?A.image[Ge].image:A.image[Ge],ce[Ge]=Fe(A,ce[Ge]);let le=ce[0],ze=r.convert(A.format,A.colorSpace),Le=r.convert(A.type),ve=_(A.internalFormat,ze,Le,A.normalized,A.colorSpace),Te=A.isVideoTexture!==!0,Ke=xe.__version===void 0||be===!0,Ee=pe.dataReady,qe=S(A,le);ge(t.TEXTURE_CUBE_MAP,A);let Qe;if(A.isDepthTexture){if(ve=v(A.format===ps,A.type),Ke)if(Te)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ve,le.width,le.height);else for(let Ge=0;Ge<6;Ge++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,ve,le.width,le.height,0,ze,Le,null)}else if(Oe){Te&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,qe,ve,le.width,le.height);for(let Ge=0;Ge<6;Ge++){Qe=ce[Ge].mipmaps;for(let st=0;st<Qe.length;st++){let ft=Qe[st];A.format!==Zn?ze!==null?Te?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,st,0,0,ft.width,ft.height,ze,ft.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,st,ve,ft.width,ft.height,0,ft.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,st,0,0,ft.width,ft.height,ze,Le,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,st,ve,ft.width,ft.height,0,ze,Le,ft.data)}}}else{if(Qe=A.mipmaps,Te&&Ke){Qe.length>0&&qe++;let Ge=Ve(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,qe,ve,Ge.width,Ge.height)}for(let Ge=0;Ge<6;Ge++)if(V){Te?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,ce[Ge].width,ce[Ge].height,ze,Le,ce[Ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,ve,ce[Ge].width,ce[Ge].height,0,ze,Le,ce[Ge].data);for(let st=0;st<Qe.length;st++){let Rt=Qe[st].image[Ge].image;Te?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,st+1,0,0,Rt.width,Rt.height,ze,Le,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,st+1,ve,Rt.width,Rt.height,0,ze,Le,Rt.data)}}else{Te?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,ze,Le,ce[Ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,ve,ze,Le,ce[Ge]);for(let st=0;st<Qe.length;st++){let ft=Qe[st];Te?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,st+1,0,0,ze,Le,ft.image[Ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,st+1,ve,ze,Le,ft.image[Ge])}}}w(A)&&A.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),xe.__version=pe.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Me(O,A,ee,be,pe,xe){let Ae=r.convert(ee.format,ee.colorSpace),oe=r.convert(ee.type),he=_(ee.internalFormat,Ae,oe,ee.normalized,ee.colorSpace),Oe=i.get(A),V=i.get(ee);if(V.__renderTarget=A,!Oe.__hasExternalTextures){let ce=Math.max(1,A.width>>xe),le=Math.max(1,A.height>>xe);pe===t.TEXTURE_3D||pe===t.TEXTURE_2D_ARRAY?n.texImage3D(pe,xe,he,ce,le,A.depth,0,Ae,oe,null):n.texImage2D(pe,xe,he,ce,le,0,Ae,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,O),Q(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,be,pe,V.__webglTexture,0,Ce(A)):(pe===t.TEXTURE_2D||pe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,be,pe,V.__webglTexture,xe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(O,A,ee){if(t.bindRenderbuffer(t.RENDERBUFFER,O),A.depthBuffer){let be=A.depthTexture,pe=be&&be.isDepthTexture?be.type:null,xe=v(A.stencilBuffer,pe),Ae=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Q(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce(A),xe,A.width,A.height):ee?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce(A),xe,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,xe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,O)}else{let be=A.textures;for(let pe=0;pe<be.length;pe++){let xe=be[pe],Ae=r.convert(xe.format,xe.colorSpace),oe=r.convert(xe.type),he=_(xe.internalFormat,Ae,oe,xe.normalized,xe.colorSpace);Q(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce(A),he,A.width,A.height):ee?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce(A),he,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,he,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function H(O,A,ee){let be=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=i.get(A.depthTexture);pe.__renderTarget=A;let xe=be?A.depthTexture.image[0]:A.depthTexture.image;(!pe.__webglTexture||xe.width!==A.width||xe.height!==A.height)&&(xe.width=A.width,xe.height=A.height,A.depthTexture.needsUpdate=!0),be?W(A.depthTexture,0):K(A.depthTexture,0);let Ae=pe.__webglTexture,oe=Ce(A),he=be?t.TEXTURE_CUBE_MAP_POSITIVE_X+ee:t.TEXTURE_2D,Oe=A.depthTexture.format===ps?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(A.depthTexture.format===hs)Q(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Oe,he,Ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,Oe,he,Ae,0);else if(A.depthTexture.format===ps)Q(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Oe,he,Ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,Oe,he,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(O){let A=i.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){let be=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),be){let pe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,be.removeEventListener("dispose",pe)};be.addEventListener("dispose",pe),A.__depthDisposeCallback=pe}A.__boundDepthTexture=be}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(ee)for(let be=0;be<6;be++)H(A.__webglFramebuffer[be],O,be);else O.texture.mipmaps.length>0?H(A.__webglFramebuffer[0],O,0):H(A.__webglFramebuffer,O,0);else if(ee){A.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[be]),A.__webglDepthbuffer[be]===void 0)A.__webglDepthbuffer[be]=t.createRenderbuffer(),Ye(A.__webglDepthbuffer[be],O,!1);else{let pe=O.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer[be];t.bindRenderbuffer(t.RENDERBUFFER,xe),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,xe)}}else if(O.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),Ye(A.__webglDepthbuffer,O,!1);else{let pe=O.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,xe),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,xe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(O,A,ee){let be=i.get(O);A!==void 0&&Me(be.__webglFramebuffer,O,O.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ee!==void 0&&j(O)}function Pe(O){let A=O.texture,ee=i.get(O),be=i.get(A);O.addEventListener("dispose",T),P(O);let pe=O.textures,xe=O.isWebGLCubeRenderTarget===!0,Ae=pe.length>1;if(Ae||(be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture()),be.__version=A.version,o.memory.textures++),xe){ee.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(A.mipmaps.length>0){ee.__webglFramebuffer[oe]=[];for(let he=0;he<A.mipmaps.length;he++)ee.__webglFramebuffer[oe][he]=t.createFramebuffer()}else ee.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let oe=0;oe<A.mipmaps.length;oe++)ee.__webglFramebuffer[oe]=t.createFramebuffer()}else ee.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let oe=0,he=pe.length;oe<he;oe++){let Oe=i.get(pe[oe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),o.memory.textures++)}if(O.samples>0&&Q(O)===!1){ee.__webglMultisampledFramebuffer=t.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let oe=0;oe<pe.length;oe++){let he=pe[oe];ee.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ee.__webglColorRenderbuffer[oe]);let Oe=r.convert(he.format,he.colorSpace),V=r.convert(he.type),ce=_(he.internalFormat,Oe,V,he.normalized,he.colorSpace,O.isXRRenderTarget===!0),le=Ce(O);t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ce,O.width,O.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,ee.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(ee.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(xe){n.bindTexture(t.TEXTURE_CUBE_MAP,be.__webglTexture),ge(t.TEXTURE_CUBE_MAP,A);for(let oe=0;oe<6;oe++)if(A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)Me(ee.__webglFramebuffer[oe][he],O,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else Me(ee.__webglFramebuffer[oe],O,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);w(A)?b(t.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),n.unbindTexture()}else if(Ae){for(let oe=0,he=pe.length;oe<he;oe++){let Oe=pe[oe],V=i.get(Oe),ce=t.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ce=O.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,V.__webglTexture),ge(ce,Oe),Me(ee.__webglFramebuffer,O,Oe,t.COLOR_ATTACHMENT0+oe,ce,0),w(Oe)&&b(ce)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(oe=O.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,be.__webglTexture),ge(oe,A),A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)Me(ee.__webglFramebuffer[he],O,A,t.COLOR_ATTACHMENT0,oe,he);else Me(ee.__webglFramebuffer,O,A,t.COLOR_ATTACHMENT0,oe,0);w(A)?b(oe):A.mipmaps.length>0&&t.texParameteri(oe,t.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),n.unbindTexture()}O.depthBuffer&&j(O)}function k(O){let A=O.textures;for(let ee=0,be=A.length;ee<be;ee++){let pe=A[ee];if(w(pe)&&pe.mipmapsAutoUpdate===!0){let xe=M(O),Ae=i.get(pe).__webglTexture;n.bindTexture(xe,Ae),b(xe),n.unbindTexture()}}}let ie=[];function de(O){if(O.samples>0){if(Q(O)===!1){let A=O.textures,ee=O.width,be=O.height,pe=t.COLOR_BUFFER_BIT,xe=O.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(O),oe=A.length>1;if(oe)for(let Oe=0;Oe<A.length;Oe++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pe|=t.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pe|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Oe]);let V=i.get(A[Oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,V,0)}t.blitFramebuffer(0,0,ee,be,0,0,ee,be,pe,t.NEAREST),l===!0&&(ie.length=0,ie.push(t.COLOR_ATTACHMENT0+Oe),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&ie.push(xe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let Oe=0;Oe<A.length;Oe++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Oe]);let V=i.get(A[Oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,V,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let A=O.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function Ce(O){return Math.min(s.maxSamples,O.samples)}function Q(O){let A=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function He(O){let A=o.render.frame;h.get(O)!==A&&(h.set(O,A),O.update())}function Fe(O,A){let ee=O.colorSpace,be=O.format,pe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==pa&&ee!==ms&&(At.getTransfer(ee)===Dt?(be!==Zn||pe!==$n)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",ee)),A}function Ve(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=ye,this.resetTextureUnits=ne,this.getTextureUnits=Z,this.setTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=fe,this.setTexture3D=Ue,this.setTextureCube=W,this.rebindTextures=re,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Q,this.dispose=N}function PT(t,e){function n(i,s=ms){let r,o=At.getTransfer(s);if(i===$n)return t.UNSIGNED_BYTE;if(i===th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uf)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===lf)return t.BYTE;if(i===cf)return t.SHORT;if(i===Ro)return t.UNSIGNED_SHORT;if(i===eh)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===Si)return t.HALF_FLOAT;if(i===df)return t.ALPHA;if(i===ff)return t.RGB;if(i===Zn)return t.RGBA;if(i===hs)return t.DEPTH_COMPONENT;if(i===ps)return t.DEPTH_STENCIL;if(i===ih)return t.RED;if(i===sh)return t.RED_INTEGER;if(i===ks)return t.RG;if(i===rh)return t.RG_INTEGER;if(i===oh)return t.RGBA_INTEGER;if(i===Za||i===Ka||i===Ja||i===ja)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ah||i===lh||i===ch||i===hh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ah)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uh||i===dh||i===fh||i===ph||i===mh||i===Qa||i===gh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===uh||i===dh)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ph)return r.COMPRESSED_R11_EAC;if(i===mh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qa)return r.COMPRESSED_RG11_EAC;if(i===gh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xh||i===vh||i===yh||i===_h||i===bh||i===Mh||i===wh||i===Sh||i===Th||i===Eh||i===Ah||i===Rh||i===Ch||i===Ph)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_h)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Th)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ah)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ch)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ph)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ih||i===Lh||i===Dh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ih)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nh||i===Oh||i===el||i===kh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var IT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Ia(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new En({vertexShader:IT,fragmentShader:LT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vf=class extends Oi{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new Gf,x={},y=n.getContextAttributes(),w=null,b=null,M=[],_=[],v=new Xe,S=null,P=null,R=new xn;R.viewport=new Xt;let D=new xn;D.viewport=new Xt;let T=[R,D],L=new Zc,E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let K=M[J];return K===void 0&&(K=new po,M[J]=K),K.getTargetRaySpace()},this.getControllerGrip=function(J){let K=M[J];return K===void 0&&(K=new po,M[J]=K),K.getGripSpace()},this.getHand=function(J){let K=M[J];return K===void 0&&(K=new po,M[J]=K),K.getHandSpace()};function U(J){let K=_.indexOf(J.inputSource);if(K===-1)return;let fe=M[K];fe!==void 0&&(fe.update(J.inputSource,J.frame,c||o),fe.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let J=0;J<M.length;J++){let K=_[J];K!==null&&(_[J]=null,M[J].disconnect(K))}E=null,N=null,m.reset();for(let J in x)delete x[J];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,b=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),P!==null){let J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ue=null,W=null;y.depth&&(W=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=y.stencil?ps:hs,Ue=y.stencil?Tr:wi);let _e={colorFormat:n.RGBA8,depthFormat:W,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(_e),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Yn(u.textureWidth,u.textureHeight,{format:Zn,type:$n,depthTexture:new ds(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(J){for(let K=0;K<J.removed.length;K++){let fe=J.removed[K],Ue=_.indexOf(fe);Ue>=0&&(_[Ue]=null,M[Ue].disconnect(fe))}for(let K=0;K<J.added.length;K++){let fe=J.added[K],Ue=_.indexOf(fe);if(Ue===-1){for(let _e=0;_e<M.length;_e++)if(_e>=_.length){_.push(fe),Ue=_e;break}else if(_[_e]===null){_[_e]=fe,Ue=_e;break}if(Ue===-1)break}let W=M[Ue];W&&W.connect(fe)}}function X(J,K){K===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(K.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let K=J.near,fe=J.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),L.near=D.near=R.near=K,L.far=D.far=R.far=fe,(E!==L.near||N!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),E=L.near,N=L.far),L.layers.mask=J.layers.mask|6,R.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;let Ue=J.parent,W=L.cameras;X(L,Ue);for(let _e=0;_e<W.length;_e++)X(W[_e],Ue);L.projectionMatrix.copy(R.projectionMatrix),L.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),ne(J,L,Ue)};function ne(J,K,fe){fe===null?J.matrix.copy(K.matrixWorld):(J.matrix.copy(fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(K.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=uo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(J){return x[J]};let Z=null;function Y(J,K){if(h=K.getViewerPose(c||o),p=K,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;fe.length!==L.cameras.length&&(L.cameras.length=0,Ue=!0);for(let Se=0;Se<fe.length;Se++){let ge=fe[Se],Ie=null;if(f!==null)Ie=f.getViewport(ge);else{let ke=d.getViewSubImage(u,ge);Ie=ke.viewport,Se===0&&(e.setRenderTargetTextures(b,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(b))}let me=T[Se];me===void 0&&(me=new xn,me.layers.enable(Se),me.viewport=new Xt,T[Se]=me),me.matrix.fromArray(ge.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ge.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Se===0&&(L.matrix.copy(me.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ue===!0&&L.cameras.push(me)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Se=d.getDepthInformation(fe[0]);Se&&Se.isValid&&Se.texture&&m.init(Se,s.renderState)}if(W&&W.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Se=0;Se<fe.length;Se++){let ge=fe[Se].camera;if(ge){let Ie=x[ge];Ie||(Ie=new Ia,x[ge]=Ie);let me=d.getCameraImage(ge);Ie.sourceTexture=me}}}}for(let fe=0;fe<M.length;fe++){let Ue=_[fe],W=M[fe];Ue!==null&&W!==void 0&&W.update(Ue,K,c||o)}Z&&Z(J,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),p=null}let ye=new Sg;ye.setAnimationLoop(Y),this.setAnimationLoop=function(J){Z=J},this.dispose=function(){}}},DT=new Mt,Ng=new dt;Ng.set(-1,0,0,0,1,0,0,0,1);function NT(t,e){function n(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,Tf(t)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,y,w,b){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),d(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),u(m,x),x.isMeshPhysicalMaterial&&f(m,x,b)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,y,w):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,n(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,n(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,n(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===nn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,n(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===nn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,n(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,n(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let y=e.get(x),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(DT.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ng),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,n(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,y,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*y,m.scale.value=w*.5,x.map&&(m.map.value=x.map,n(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,n(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,n(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,n(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function d(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function u(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,y){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,n(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===nn&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let y=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OT(t,e,n,i){let s={},r={};function o(y,w){let b=w.program;i.uniformBlockBinding(y,b,s[y.id])}function a(y,w){let b=s[y.id];b===void 0&&(p(y),b=l(y),s[y.id]=b,y.addEventListener("dispose",m));let M=w.program;i.updateUBOMapping(y,M);let _=e.render.frame;r[y.id]!==_&&(c(y),r[y.id]=_)}function l(y){let w=t.createBuffer(),b=y.__size,M=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,b,M),t.bindBuffer(t.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],b=y.uniforms,M=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let _=0,v=b.length;_<v;_++){let S=b[_];if(Array.isArray(S))for(let P=0,R=S.length;P<R;P++)h(S[P],_,P,M);else h(S,_,0,M)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,w,b,M){if(u(y,w,b,M)===!0){let _=y.__offset,v=y.value;if(Array.isArray(v)){let S=0;for(let P=0;P<v.length;P++){let R=v[P],D=g(R,!0);d(R,y.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,y.__data)}}function d(y,w,b){typeof y=="number"||typeof y=="boolean"?w[b]=y:y.isMatrix3?(w[b]=y.elements[0],w[b+1]=y.elements[1],w[b+2]=y.elements[2],w[b+3]=0,w[b+4]=y.elements[3],w[b+5]=y.elements[4],w[b+6]=y.elements[5],w[b+7]=0,w[b+8]=y.elements[6],w[b+9]=y.elements[7],w[b+10]=y.elements[8],w[b+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-b),b):y.toArray(w,b)}function u(y,w,b,M){let _=y.value,v=w+"_"+b;if(Array.isArray(_)){M[v]===void 0&&(M[v]=[]);let S=M[v],P=!1;for(let R=0;R<_.length;R++)f(_[R],S,R)===!0&&(P=!0);return P}return f(_,M,v)}function f(y,w,b){if(w[b]===void 0)return typeof y=="number"||typeof y=="boolean"?w[b]=y:ArrayBuffer.isView(y)?w[b]=y.slice():w[b]=y.clone(),!0;{let M=w[b];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return w[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function p(y){let w=y.uniforms,b=0,M=16;for(let v=0,S=w.length;v<S;v++){let P=Array.isArray(w[v])?w[v]:[w[v]];for(let R=0,D=P.length;R<D;R++){let T=P[R],L=Array.isArray(T.value)?T.value:[T.value],E=Array.isArray(w[v])||Array.isArray(T.value),N=b;for(let G=0,te=L.length;G<te;G++){let X=L[G],ne=g(X,E),Z=b%M,Y=Z%ne.boundary,ye=Z+Y;b+=Y,ye!==0&&M-ye<ne.storage&&(b+=M-ye),G===0&&(N=b),b+=ne.storage}let U=T.type==="int"?Int32Array:T.type==="uint"?Uint32Array:Float32Array;T.__data=new U((b-N)/Float32Array.BYTES_PER_ELEMENT),T.__offset=N}}let _=b%M;return _>0&&(b+=M-_),y.__size=b,y.__cache={},this}function g(y,w){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){let w=y.target;w.removeEventListener("dispose",m),t.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function x(){for(let y in s)t.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:x}}var kT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function UT(){return Bi===null&&(Bi=new mr(kT,16,16,ks,Si),Bi.name="DFG_LUT",Bi.minFilter=dn,Bi.magFilter=dn,Bi.wrapS=Ni,Bi.wrapT=Ni,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Gh=class{constructor(e={}){let{canvas:n=Wm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$n}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=f,m=new Set([oh,rh,sh]),x=new Set([$n,wi,Ro,Tr,th,nh]),y=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},M=null,_=null,v=[],S=[],P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,T=null,L=null,E=null,N=null;this._outputColorSpace=tn;let U=0,G=0,te=null,X=-1,ne=null,Z=new Xt,Y=new Xt,ye=null,J=new et(0),K=0,fe=n.width,Ue=n.height,W=1,_e=null,De=null,Se=new Xt(0,0,fe,Ue),ge=new Xt(0,0,fe,Ue),Ie=!1,me=new gr,ke=new Ec,Ne=!1,Re=!1,Me=new Mt,Ye=new B,H=new Xt,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function Pe(){return te===null?W:1}let k=i;function ie(I,$){return n.getContext(I,$)}let de,Ce,Q,He,Fe,Ve,O,A,ee,be,pe,xe,Ae,oe,he,Oe,V,ce,le,ze,Le,ve,Te;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",qe,!1),n.addEventListener("webglcontextrestored",Qe,!1),n.addEventListener("webglcontextcreationerror",Ge,!1),k===null){let $="webgl2";if(k=ie($,I),k===null)throw ie($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(I){throw n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",Qe,!1),n.removeEventListener("webglcontextcreationerror",Ge,!1),ht("WebGLRenderer: "+I.message),I}function Ke(){de=new $w(k),de.init(),Le=new PT(k,de),Ce=new Uw(k,de,e,Le),Q=new RT(k,de),Ce.reversedDepthBuffer&&u&&Q.buffers.depth.setReversed(!0),L=k.createFramebuffer(),E=k.createFramebuffer(),N=k.createFramebuffer(),He=new Jw(k),Fe=new pT,Ve=new CT(k,de,Q,Fe,Ce,Le,He),O=new qw(R),A=new Q1(k),ve=new Ow(k,A),ee=new Zw(k,A,He,ve),be=new Qw(k,ee,A,ve,He),ce=new jw(k,Ce,Ve),he=new Fw(Fe),pe=new fT(R,O,de,Ce,ve,he),xe=new NT(R,Fe),Ae=new gT,oe=new MT(de),V=new Nw(R,O,Q,be,p,l),Oe=new AT(R,be,Ce),Te=new OT(k,He,Ce,Q),le=new kw(k,de,He),ze=new Kw(k,de,He),He.programs=pe.programs,R.capabilities=Ce,R.extensions=de,R.properties=Fe,R.renderLists=Ae,R.shadowMap=Oe,R.state=Q,R.info=He}g!==$n&&(P=new tS(g,n.width,n.height,a,s,r));let Ee=new Vf(R,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let I=de.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=de.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(I){I!==void 0&&(W=I,this.setSize(fe,Ue,!1))},this.getSize=function(I){return I.set(fe,Ue)},this.setSize=function(I,$,ue=!0){if(Ee.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=I,Ue=$,n.width=Math.floor(I*W),n.height=Math.floor($*W),ue===!0&&(n.style.width=I+"px",n.style.height=$+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(fe*W,Ue*W).floor()},this.setDrawingBufferSize=function(I,$,ue){fe=I,Ue=$,W=ue,n.width=Math.floor(I*ue),n.height=Math.floor($*ue),this.setViewport(0,0,I,$)},this.setEffects=function(I){if(g===$n){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let $=0;$<I.length;$++)if(I[$].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(Z)},this.getViewport=function(I){return I.copy(Se)},this.setViewport=function(I,$,ue,se){I.isVector4?Se.set(I.x,I.y,I.z,I.w):Se.set(I,$,ue,se),Q.viewport(Z.copy(Se).multiplyScalar(Pe()).round())},this.getScissor=function(I){return I.copy(ge)},this.setScissor=function(I,$,ue,se){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,$,ue,se),Q.scissor(Y.copy(ge).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(I){Q.setScissorTest(Ie=I)},this.setOpaqueSort=function(I){_e=I},this.setTransparentSort=function(I){De=I},this.getClearColor=function(I){return I.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(I=!0,$=!0,ue=!0){let se=0;if(I){let ae=!1;if(te!==null){let Ze=te.texture.format;ae=m.has(Ze)}if(ae){let Ze=te.texture.type,tt=x.has(Ze),$e=V.getClearColor(),Je=V.getClearAlpha(),it=$e.r,pt=$e.g,Tt=$e.b;tt?(y[0]=it,y[1]=pt,y[2]=Tt,y[3]=Je,k.clearBufferuiv(k.COLOR,0,y)):(w[0]=it,w[1]=pt,w[2]=Tt,w[3]=Je,k.clearBufferiv(k.COLOR,0,w))}else se|=k.COLOR_BUFFER_BIT}$&&(se|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),T=I},this.dispose=function(){n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",Qe,!1),n.removeEventListener("webglcontextcreationerror",Ge,!1),V.dispose(),Ae.dispose(),oe.dispose(),Ve.dispose(),Fe.dispose(),O.dispose(),be.dispose(),ee.dispose(),ve.dispose(),Te.dispose(),pe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",mn),Ee.removeEventListener("sessionend",Ot),wn.stop()};function qe(I){I.preventDefault(),va("WebGLRenderer: Context Lost."),D=!0}function Qe(){va("WebGLRenderer: Context Restored."),D=!1;let I=He.autoReset,$=Oe.enabled,ue=Oe.autoUpdate,se=Oe.needsUpdate,ae=Oe.type;Ke(),He.autoReset=I,Oe.enabled=$,Oe.autoUpdate=ue,Oe.needsUpdate=se,Oe.type=ae}function Ge(I){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function st(I){let $=I.target;$.removeEventListener("dispose",st),ft($)}function ft(I){Rt(I),Fe.remove(I)}function Rt(I){let $=Fe.get(I).programs;$!==void 0&&($.forEach(function(ue){pe.releaseProgram(ue)}),I.isShaderMaterial&&pe.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ue,se,ae,Ze){$===null&&($=j);let tt=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,$e=_t(I,$,ue,se,ae);Q.setMaterial(se,tt);let Je=ue.index,it=1;if(se.wireframe===!0){if(Je=ee.getWireframeAttribute(ue),Je===void 0)return;it=2}let pt=ue.drawRange,Tt=ue.attributes.position,nt=pt.start*it,F=(pt.start+pt.count)*it;Ze!==null&&(nt=Math.max(nt,Ze.start*it),F=Math.min(F,(Ze.start+Ze.count)*it)),Je!==null?(nt=Math.max(nt,0),F=Math.min(F,Je.count)):Tt!=null&&(nt=Math.max(nt,0),F=Math.min(F,Tt.count));let we=F-nt;if(we<0||we===1/0)return;ve.setup(ae,se,$e,ue,Je);let Be,ot=le;if(Je!==null&&(Be=A.get(Je),ot=ze,ot.setIndex(Be)),ae.isMesh)se.wireframe===!0?(Q.setLineWidth(se.wireframeLinewidth*Pe()),ot.setMode(k.LINES)):ot.setMode(k.TRIANGLES);else if(ae.isLine){let ut=se.linewidth;ut===void 0&&(ut=1),Q.setLineWidth(ut*Pe()),ae.isLineSegments?ot.setMode(k.LINES):ae.isLineLoop?ot.setMode(k.LINE_LOOP):ot.setMode(k.LINE_STRIP)}else ae.isPoints?ot.setMode(k.POINTS):ae.isSprite&&ot.setMode(k.TRIANGLES);if(ae.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let ut=ae._multiDrawStarts,We=ae._multiDrawCounts,ct=ae._multiDrawCount,bt=Je?A.get(Je).bytesPerElement:1,gi=Fe.get(se).currentProgram.getUniforms();for(let Zt=0;Zt<ct;Zt++)gi.setValue(k,"_gl_DrawID",Zt),ot.render(ut[Zt]/bt,We[Zt])}else if(ae.isInstancedMesh)ot.renderInstances(nt,we,ae.count);else if(ue.isInstancedBufferGeometry){let ut=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,We=Math.min(ue.instanceCount,ut);ot.renderInstances(nt,we,We)}else ot.render(nt,we)};function Gt(I,$,ue,se){T!==null&&I.isNodeMaterial&&T.setObject(se,I),Ne===!0&&he.setState(I,ue,!1),I.transparent===!0&&I.side===An&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,mi(I,$,se),I.side=Os,I.needsUpdate=!0,mi(I,$,se),I.side=An):mi(I,$,se)}this.compile=function(I,$,ue=null){ue===null&&(ue=I),T!==null&&T.renderStart(I,$,ue),_=oe.get(ue),_.init($),S.push(_),ue.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(_.pushLight(ae),ae.castShadow&&_.pushShadow(ae))}),I!==ue&&I.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(_.pushLight(ae),ae.castShadow&&_.pushShadow(ae))}),_.setupLights(),T!==null&&T.updateLights(_.state.lightsArray),Re=this.localClippingEnabled,Ne=he.init(this.clippingPlanes,Re),Ne===!0&&he.setGlobalState(this.clippingPlanes,$),T!==null&&Oe.render(_.state.shadowsArray,ue,$);let se=new Set;return I.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Ze=ae.material;if(Ze)if(Array.isArray(Ze))for(let tt=0;tt<Ze.length;tt++){let $e=Ze[tt];Gt($e,ue,$,ae),se.add($e)}else Gt(Ze,ue,$,ae),se.add(Ze)}),_=S.pop(),T!==null&&T.renderEnd(),se},this.compileAsync=function(I,$,ue=null){let se=this.compile(I,$,ue);return new Promise(ae=>{function Ze(){if(se.forEach(function(tt){let Je=Fe.get(tt).currentProgram;(Je===void 0||Je.isReady())&&se.delete(tt)}),se.size===0){ae(I);return}setTimeout(Ze,10)}de.get("KHR_parallel_shader_compile")!==null?Ze():setTimeout(Ze,10)})};let Ft=null;function Vn(I){Ft&&Ft(I)}function mn(){wn.stop()}function Ot(){wn.start()}let wn=new Sg;wn.setAnimationLoop(Vn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(I){Ft=I,Ee.setAnimationLoop(I),I===null?wn.stop():wn.start()},Ee.addEventListener("sessionstart",mn),Ee.addEventListener("sessionend",Ot),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;T!==null&&T.renderStart(I,$);let ue=Ee.enabled===!0&&Ee.isPresenting===!0,se=P!==null&&(te===null||ue)&&P.begin(R,te);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera($),$=Ee.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,$,te),_=oe.get(I,S.length),_.init($),_.state.textureUnits=Ve.getTextureUnits(),S.push(_),Me.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?ke.setFromArrayCamera($):me.setFromProjectionMatrix(Me,ii,$.reversedDepth),Re=this.localClippingEnabled,Ne=he.init(this.clippingPlanes,Re),M=Ae.get(I,v.length),M.init(),v.push(M),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){let tt=R.xr.getDepthSensingMesh();tt!==null&&kt(tt,$,-1/0,R.sortObjects)}kt(I,$,0,R.sortObjects),M.finish(),T!==null&&T.updateLights(_.state.lightsArray),R.sortObjects===!0&&M.sort(_e,De),re=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,re&&V.addToRenderList(M,I),this.info.autoReset===!0&&this.info.reset(),Ne===!0&&he.beginShadows();let ae=_.state.shadowsArray;if(Oe.render(ae,I,$),Ne===!0&&he.endShadows(),(se&&P.hasRenderPass())===!1){let tt=M.opaque,$e=M.transmissive;if(_.setupLights(),$.isArrayCamera){let Je=$.cameras;if($e.length>0)for(let it=0,pt=Je.length;it<pt;it++){let Tt=Je[it];fi(tt,$e,I,Tt)}re&&V.render(I);for(let it=0,pt=Je.length;it<pt;it++){let Tt=Je[it];Bn(M,I,Tt,Tt.viewport)}}else $e.length>0&&fi(tt,$e,I,$),re&&V.render(I),Bn(M,I,$)}te!==null&&G===0&&(Ve.updateMultisampleRenderTarget(te),Ve.updateRenderTargetMipmap(te)),se&&P.end(R),I.isScene===!0&&I.onAfterRender(R,I,$),ve.resetDefaultState(),X=-1,ne=null,S.pop(),S.length>0?(_=S[S.length-1],Ve.setTextureUnits(_.state.textureUnits),Ne===!0&&he.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,T!==null&&T.renderEnd()};function kt(I,$,ue,se){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ue=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){let tt=$.isArrayCamera?ke:me;if(!I.frustumCulled||I.intersectsFrustum(tt)){se&&H.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Me);let $e=be.update(I),Je=I.material;Je.visible&&M.push(I,$e,Je,ue,H.z,null,$)}}else if(I.isMesh||I.isLine||I.isPoints){let tt=$.isArrayCamera?ke:me;if(!I.frustumCulled||I.intersectsFrustum(tt)){let $e=be.update(I),Je=I.material;if(se&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),H.copy(I.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),H.copy($e.boundingSphere.center)),H.applyMatrix4(I.matrixWorld).applyMatrix4(Me)),Array.isArray(Je)){let it=$e.groups;for(let pt=0,Tt=it.length;pt<Tt;pt++){let nt=it[pt],F=Je[nt.materialIndex];F&&F.visible&&M.push(I,$e,F,ue,H.z,nt,$)}}else Je.visible&&M.push(I,$e,Je,ue,H.z,null,$)}}}let Ze=I.children;for(let tt=0,$e=Ze.length;tt<$e;tt++)kt(Ze[tt],$,ue,se)}function Bn(I,$,ue,se){let{opaque:ae,transmissive:Ze,transparent:tt}=I;_.setupLightsView(ue),Ne===!0&&he.setGlobalState(R.clippingPlanes,ue),se&&Q.viewport(Z.copy(se)),ae.length>0&&pi(ae,$,ue),Ze.length>0&&pi(Ze,$,ue),tt.length>0&&pi(tt,$,ue),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function fi(I,$,ue,se){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[se.id]===void 0){let nt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[se.id]=new Yn(1,1,{generateMipmaps:!0,type:nt?Si:$n,minFilter:fs,samples:Math.max(4,Ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let Ze=_.state.transmissionRenderTarget[se.id],tt=se.viewport||Z;Ze.setSize(tt.z*R.transmissionResolutionScale,tt.w*R.transmissionResolutionScale);let $e=R.getRenderTarget(),Je=R.getActiveCubeFace(),it=R.getActiveMipmapLevel();R.setRenderTarget(Ze),R.getClearColor(J),K=R.getClearAlpha(),K<1&&R.setClearColor(16777215,.5),R.clear(),re&&V.render(ue);let pt=R.toneMapping;R.toneMapping=Fi;let Tt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),Ne===!0&&he.setGlobalState(R.clippingPlanes,se),pi(I,ue,se),Ve.updateMultisampleRenderTarget(Ze),Ve.updateRenderTargetMipmap(Ze),de.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let F=0,we=$.length;F<we;F++){let Be=$[F],{object:ot,geometry:ut,material:We,group:ct}=Be;if(We.side===An&&ot.layers.test(se.layers)){let bt=We.side;We.side=nn,We.needsUpdate=!0,ts(ot,ue,se,ut,We,ct),We.side=bt,We.needsUpdate=!0,nt=!0}}nt===!0&&(Ve.updateMultisampleRenderTarget(Ze),Ve.updateRenderTargetMipmap(Ze))}R.setRenderTarget($e,Je,it),R.setClearColor(J,K),Tt!==void 0&&(se.viewport=Tt),R.toneMapping=pt}function pi(I,$,ue){let se=$.isScene===!0?$.overrideMaterial:null;for(let ae=0,Ze=I.length;ae<Ze;ae++){let tt=I[ae],{object:$e,geometry:Je,group:it}=tt,pt=tt.material;pt.allowOverride===!0&&se!==null&&(pt=se),$e.layers.test(ue.layers)&&ts($e,$,ue,Je,pt,it)}}function ts(I,$,ue,se,ae,Ze){T!==null&&ae.isNodeMaterial&&T.setObject(I,ae),I.onBeforeRender(R,$,ue,se,ae,Ze),I.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ae.onBeforeRender(R,$,ue,se,I,Ze),ae.transparent===!0&&ae.side===An&&ae.forceSinglePass===!1?(ae.side=nn,ae.needsUpdate=!0,R.renderBufferDirect(ue,$,se,ae,I,Ze),ae.side=Os,ae.needsUpdate=!0,R.renderBufferDirect(ue,$,se,ae,I,Ze),ae.side=An):R.renderBufferDirect(ue,$,se,ae,I,Ze),I.onAfterRender(R,$,ue,se,ae,Ze)}function ti(I){let $=0;for(let ue of I)ue.texture!==null&&$++;return $}function mi(I,$,ue){$.isScene!==!0&&($=j);let se=Fe.get(I),ae=_.state.lights,Ze=_.state.shadowsArray,tt=ae.state.version,$e=pe.getParameters(I,ae.state,Ze,$,ue,_.state.lightProbeGridArray),Je=pe.getProgramCacheKey($e),it=se.programs;se.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?$.environment:null,se.fog=$.fog;let pt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;se.envMap=O.get(I.envMap||se.environment,pt),se.envMapRotation=se.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,it===void 0&&(I.addEventListener("dispose",st),it=new Map,se.programs=it,se.programVariants=new Map);let Tt=it.get(Je);if(Tt!==void 0){if(se.currentProgram===Tt&&se.lightsStateVersion===tt)return Gr(I,$e),Tt}else $e.uniforms=pe.getUniforms(I),T!==null&&I.isNodeMaterial&&T.build(I,ue,$e),I.onBeforeCompile($e,R),Tt=pe.acquireProgram($e,Je),it.set(Je,Tt),se.uniforms=$e.uniforms;let nt=se.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(nt.clippingPlanes=he.uniform),Gr(I,$e),se.needsLights=ud(I),se.lightsStateVersion=tt,se.needsLights&&(nt.ambientLightColor.value=ae.state.ambient,nt.lightProbe.value=ae.state.probe,nt.sunLights.value=ae.state.sun,nt.sunLightShadows.value=ae.state.sunShadow,nt.directionalLights.value=ae.state.directional,nt.directionalLightShadows.value=ae.state.directionalShadow,nt.spotLights.value=ae.state.spot,nt.spotLightShadows.value=ae.state.spotShadow,nt.rectAreaLights.value=ae.state.rectArea,nt.ltc_1.value=ae.state.rectAreaLTC1,nt.ltc_2.value=ae.state.rectAreaLTC2,nt.pointLights.value=ae.state.point,nt.pointLightShadows.value=ae.state.pointShadow,nt.hemisphereLights.value=ae.state.hemi,nt.sunShadowMatrix.value=ae.state.sunShadowMatrix,nt.sunShadowCascade.value=ae.state.sunShadowCascade,nt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,nt.spotLightMatrix.value=ae.state.spotLightMatrix,nt.spotLightMap.value=ae.state.spotLightMap,nt.pointShadowMatrix.value=ae.state.pointShadowMatrix),se.numLightProbeGrids=ti(_.state.lightProbeGridArray),se.currentProgram=Tt,se.uniformsList=null,Tt}function Hr(I,$,ue,se,ae){let Ze=Fe.get(I),tt=Ze.currentProgram.id+","+se+","+ae,$e=Ze.programVariants.get(tt);return $e===void 0?($e=mi(I,$,ue),Ze.programVariants.set(tt,$e)):(Ze.currentProgram=$e,Ze.uniformsList=null,Ze.outputColorSpace=se,Ze.toneMapping=ae),$e}function lr(I){if(I.uniformsList===null){let $=I.currentProgram.getUniforms();I.uniformsList=Po.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function Gr(I,$){let ue=Fe.get(I);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function _t(I,$,ue,se,ae){$.isScene!==!0&&($=j),Ve.resetTextureUnits();let Ze=$.fog,tt=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?$.environment:null,$e=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:At.workingColorSpace,Je=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,it=O.get(se.envMap||tt,Je),pt=se.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Tt=!!ue.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),nt=!!ue.morphAttributes.position,F=!!ue.morphAttributes.normal,we=!!ue.morphAttributes.color,Be=Fi;se.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Be=R.toneMapping);let ot=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ut=ot!==void 0?ot.length:0,We=Fe.get(se),ct=_.state.lights;if(Ne===!0&&(Re===!0||I!==ne)){let Vt=I===ne&&se.id===X;he.setState(se,I,Vt)}let bt=!1,gi=!1;se.version===We.__version?We.needsLights&&We.lightsStateVersion!==ct.state.version||ae.isBatchedMesh&&We.batching===!1||!ae.isBatchedMesh&&We.batching===!0||ae.isBatchedMesh&&We.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&We.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&We.instancing===!1||!ae.isInstancedMesh&&We.instancing===!0||ae.isSkinnedMesh&&We.skinning===!1||!ae.isSkinnedMesh&&We.skinning===!0||ae.isInstancedMesh&&We.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&We.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&We.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&We.instancingMorph===!1&&ae.morphTexture!==null||We.envMap!==it||se.fog===!0&&We.fog!==Ze||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==he.numPlanes||We.numIntersection!==he.numIntersection)||We.vertexAlphas!==pt||We.vertexTangents!==Tt||We.morphTargets!==nt||We.morphNormals!==F||We.morphColors!==we||We.morphTargetsCount!==ut||We.numLightProbeGrids!==ti(_.state.lightProbeGridArray)?bt=!0:(We.outputColorSpace!==$e||We.toneMapping!==Be)&&(gi=!0):(bt=!0,We.__version=se.version);let Zt=We.currentProgram;(bt===!0||gi===!0)&&(Zt=gi===!0?Hr(se,$,ae,$e,Be):mi(se,$,ae),T&&se.isNodeMaterial&&T.onUpdateProgram(se,Zt,We));let Vr=!1,xi=!1,Ut=!1,It=Zt.getUniforms(),gn=We.uniforms;if(Q.useProgram(Zt.program)&&(Vr=!0,xi=!0,Ut=!0),se.id!==X&&(X=se.id,xi=!0),Vr||ne!==I){Q.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),It.setValue(k,"projectionMatrix",I.projectionMatrix),It.setValue(k,"viewMatrix",I.matrixWorldInverse);let cn=It.map.cameraPosition;cn!==void 0&&cn.setValue(k,Ye.setFromMatrixPosition(I.matrixWorld)),Ce.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(k,"isOrthographic",I.isOrthographicCamera===!0),ne!==I&&(ne=I,xi=!0,Ut=!0)}if(We.needsLights&&(ct.state.sunShadowMap.length>0&&It.setValue(k,"sunShadowMap",ct.state.sunShadowMap,Ve),ct.state.directionalShadowMap.length>0&&It.setValue(k,"directionalShadowMap",ct.state.directionalShadowMap,Ve),ct.state.spotShadowMap.length>0&&It.setValue(k,"spotShadowMap",ct.state.spotShadowMap,Ve),ct.state.pointShadowMap.length>0&&It.setValue(k,"pointShadowMap",ct.state.pointShadowMap,Ve)),ae.isSkinnedMesh){It.setOptional(k,ae,"bindMatrix"),It.setOptional(k,ae,"bindMatrixInverse");let Vt=ae.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),It.setValue(k,"boneTexture",Vt.boneTexture,Ve))}ae.isBatchedMesh&&(It.setOptional(k,ae,"batchingTexture"),It.setValue(k,"batchingTexture",ae._matricesTexture,Ve),It.setOptional(k,ae,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",ae._indirectTexture,Ve),It.setOptional(k,ae,"batchingColorTexture"),ae._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",ae._colorsTexture,Ve));let vi=ue.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&ce.update(ae,ue,Zt),(xi||We.receiveShadow!==ae.receiveShadow)&&(We.receiveShadow=ae.receiveShadow,It.setValue(k,"receiveShadow",ae.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&$.environment!==null&&(gn.envMapIntensity.value=$.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=UT()),xi){if(It.setValue(k,"toneMappingExposure",R.toneMappingExposure),We.needsLights&&hd(gn,Ut),Ze&&se.fog===!0&&xe.refreshFogUniforms(gn,Ze),xe.refreshMaterialUniforms(gn,se,W,Ue,_.state.transmissionRenderTarget[I.id]),We.needsLights&&We.numLightProbeGrids>0){let Vt=b,cn=0;for(let ns of _.state.lightProbeGridArray)ns.texture!==null&&(Vt.textures[cn]=ns.texture,Vt.min[cn]=ns.boundingBox.min,Vt.max[cn]=ns.boundingBox.max,Vt.resolution[cn]=ns.resolution,cn++);for(let ns in Vt)Vt[ns].length=cn;gn.probesSH.value=Vt.textures,gn.probesMin.value=Vt.min,gn.probesMax.value=Vt.max,gn.probesResolution.value=Vt.resolution}Po.upload(k,lr(We),gn,Ve)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Po.upload(k,lr(We),gn,Ve),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(k,"center",ae.center),It.setValue(k,"modelViewMatrix",ae.modelViewMatrix),It.setValue(k,"normalMatrix",ae.normalMatrix),It.setValue(k,"modelMatrix",ae.matrixWorld),se.uniformsGroups!==void 0){let Vt=se.uniformsGroups;for(let cn=0,ns=Vt.length;cn<ns;cn++){let R0=Vt[cn];Te.update(R0,Zt),Te.bind(R0,Zt)}}return Zt}function hd(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.sunLights.needsUpdate=$,I.sunLightShadows.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function ud(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(I,$,ue){let se=Fe.get(I);se.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Fe.get(I.texture).__webglTexture=$,Fe.get(I.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ue,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,$){let ue=Fe.get(I);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,ue=0){te=I,U=$,G=ue;let se=null,ae=!1,Ze=!1;if(I){let $e=Fe.get(I);if($e.__useDefaultFramebuffer!==void 0){Q.bindFramebuffer(k.FRAMEBUFFER,$e.__webglFramebuffer),Z.copy(I.viewport),Y.copy(I.scissor),ye=I.scissorTest,Q.viewport(Z),Q.scissor(Y),Q.setScissorTest(ye),X=-1;return}else if($e.__webglFramebuffer===void 0)Ve.setupRenderTarget(I);else if($e.__hasExternalTextures)Ve.rebindTextures(I,Fe.get(I.texture).__webglTexture,Fe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let pt=I.depthTexture;if($e.__boundDepthTexture!==pt){if(pt!==null&&Fe.has(pt)&&(I.width!==pt.image.width||I.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(I)}}let Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ze=!0);let it=Fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(it[$])?se=it[$][ue]:se=it[$],ae=!0):I.samples>0&&Ve.useMultisampledRTT(I)===!1?se=Fe.get(I).__webglMultisampledFramebuffer:Array.isArray(it)?se=it[ue]:se=it,Z.copy(I.viewport),Y.copy(I.scissor),ye=I.scissorTest}else Z.copy(Se).multiplyScalar(W).floor(),Y.copy(ge).multiplyScalar(W).floor(),ye=Ie;if(ue!==0&&(se=L),Q.bindFramebuffer(k.FRAMEBUFFER,se)&&Q.drawBuffers(I,se),Q.viewport(Z),Q.scissor(Y),Q.setScissorTest(ye),ae){let $e=Fe.get(I.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,$e.__webglTexture,ue)}else if(Ze){let $e=$;for(let Je=0;Je<I.textures.length;Je++){let it=Fe.get(I.textures[Je]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Je,it.__webglTexture,ue,$e)}}else if(I!==null&&ue!==0){let $e=Fe.get(I.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$e.__webglTexture,ue)}X=-1};function Nl(I){let $=Fe.get(I);return($.__readFormat!==I.format||$.__readType!==I.type)&&($.__readFormat=I.format,$.__readType=I.type,$.__formatReadable=Ce.textureFormatReadable(I.format),$.__typeReadable=Ce.textureTypeReadable(I.type)),$}this.readRenderTargetPixels=function(I,$,ue,se,ae,Ze,tt,$e=0){if(!(I&&I.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&tt!==void 0&&(Je=Je[tt],Array.isArray(Je)&&(Je=Je[0])),Je){Q.bindFramebuffer(k.FRAMEBUFFER,Je);try{let it=I.textures[$e],pt=it.format,Tt=it.type;I.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+$e);let nt=Nl(it);if(nt.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-se&&ue>=0&&ue<=I.height-ae&&k.readPixels($,ue,se,ae,Le.convert(pt),Le.convert(Tt),Ze)}finally{let it=te!==null?Fe.get(te).__webglFramebuffer:null;Q.bindFramebuffer(k.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(I,$,ue,se,ae,Ze,tt,$e=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&tt!==void 0&&(Je=Je[tt],Array.isArray(Je)&&(Je=Je[0])),Je)if($>=0&&$<=I.width-se&&ue>=0&&ue<=I.height-ae){Q.bindFramebuffer(k.FRAMEBUFFER,Je);let it=I.textures[$e],pt=it.format,Tt=it.type;I.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+$e);let nt=Nl(it);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let F=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,F),k.bufferData(k.PIXEL_PACK_BUFFER,Ze.byteLength,k.STREAM_READ),k.readPixels($,ue,se,ae,Le.convert(pt),Le.convert(Tt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let we=te!==null?Fe.get(te).__webglFramebuffer:null;Q.bindFramebuffer(k.FRAMEBUFFER,we);let Be=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ym(k,Be,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,F),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ze),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(F),k.deleteSync(Be),Ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,$=null,ue=0){let se=Math.pow(2,-ue),ae=Math.floor(I.image.width*se),Ze=Math.floor(I.image.height*se),tt=$!==null?$.x:0,$e=$!==null?$.y:0;Ve.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,ue,0,0,tt,$e,ae,Ze),Q.unbindTexture()},this.copyTextureToTexture=function(I,$,ue=null,se=null,ae=0,Ze=0){let tt,$e,Je,it,pt,Tt,nt,F,we,Be=I.isCompressedTexture?I.mipmaps[Ze]:I.image;if(ue!==null)tt=ue.max.x-ue.min.x,$e=ue.max.y-ue.min.y,Je=ue.isBox3?ue.max.z-ue.min.z:1,it=ue.min.x,pt=ue.min.y,Tt=ue.isBox3?ue.min.z:0;else{let It=Math.pow(2,-ae);tt=Math.floor(Be.width*It),$e=Math.floor(Be.height*It),I.isDataArrayTexture?Je=Be.depth:I.isData3DTexture?Je=Math.floor(Be.depth*It):Je=1,it=0,pt=0,Tt=0}se!==null?(nt=se.x,F=se.y,we=se.z):(nt=0,F=0,we=0);let ot=Le.convert($.format),ut=Le.convert($.type),We;$.isData3DTexture?(Ve.setTexture3D($,0),We=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Ve.setTexture2DArray($,0),We=k.TEXTURE_2D_ARRAY):(Ve.setTexture2D($,0),We=k.TEXTURE_2D),Q.activeTexture(k.TEXTURE0),Q.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),Q.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Q.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);let ct=Q.getParameter(k.UNPACK_ROW_LENGTH),bt=Q.getParameter(k.UNPACK_IMAGE_HEIGHT),gi=Q.getParameter(k.UNPACK_SKIP_PIXELS),Zt=Q.getParameter(k.UNPACK_SKIP_ROWS),Vr=Q.getParameter(k.UNPACK_SKIP_IMAGES);Q.pixelStorei(k.UNPACK_ROW_LENGTH,Be.width),Q.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Be.height),Q.pixelStorei(k.UNPACK_SKIP_PIXELS,it),Q.pixelStorei(k.UNPACK_SKIP_ROWS,pt),Q.pixelStorei(k.UNPACK_SKIP_IMAGES,Tt);let xi=I.isDataArrayTexture||I.isData3DTexture,Ut=$.isDataArrayTexture||$.isData3DTexture;if(I.isDepthTexture){let It=Fe.get(I),gn=Fe.get($),vi=Fe.get(It.__renderTarget),Vt=Fe.get(gn.__renderTarget);Q.bindFramebuffer(k.READ_FRAMEBUFFER,vi.__webglFramebuffer),Q.bindFramebuffer(k.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let cn=0;cn<Je;cn++)xi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(I).__webglTexture,ae,Tt+cn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get($).__webglTexture,Ze,we+cn)),k.blitFramebuffer(it,pt,it+tt,pt+$e,nt,F,nt+tt,F+$e,k.DEPTH_BUFFER_BIT,k.NEAREST);Q.bindFramebuffer(k.READ_FRAMEBUFFER,null),Q.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ae!==0||I.isRenderTargetTexture||Fe.has(I)){let It=Fe.get(I),gn=Fe.get($);Q.bindFramebuffer(k.READ_FRAMEBUFFER,E),Q.bindFramebuffer(k.DRAW_FRAMEBUFFER,N);for(let vi=0;vi<Je;vi++)xi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,It.__webglTexture,ae,Tt+vi):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,It.__webglTexture,ae),Ut?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gn.__webglTexture,Ze,we+vi):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gn.__webglTexture,Ze),ae!==0?k.blitFramebuffer(it,pt,it+tt,pt+$e,nt,F,nt+tt,F+$e,k.COLOR_BUFFER_BIT,k.NEAREST):Ut?k.copyTexSubImage3D(We,Ze,nt,F,we+vi,it,pt,tt,$e):k.copyTexSubImage2D(We,Ze,nt,F,it,pt,tt,$e);Q.bindFramebuffer(k.READ_FRAMEBUFFER,null),Q.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ut?I.isDataTexture||I.isData3DTexture?k.texSubImage3D(We,Ze,nt,F,we,tt,$e,Je,ot,ut,Be.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(We,Ze,nt,F,we,tt,$e,Je,ot,Be.data):k.texSubImage3D(We,Ze,nt,F,we,tt,$e,Je,ot,ut,Be):I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ze,nt,F,tt,$e,ot,ut,Be.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ze,nt,F,Be.width,Be.height,ot,Be.data):k.texSubImage2D(k.TEXTURE_2D,Ze,nt,F,tt,$e,ot,ut,Be);Q.pixelStorei(k.UNPACK_ROW_LENGTH,ct),Q.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt),Q.pixelStorei(k.UNPACK_SKIP_PIXELS,gi),Q.pixelStorei(k.UNPACK_SKIP_ROWS,Zt),Q.pixelStorei(k.UNPACK_SKIP_IMAGES,Vr),Ze===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&k.generateMipmap(We),Q.unbindTexture()},this.initRenderTarget=function(I){Fe.get(I).__webglFramebuffer===void 0&&Ve.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ve.setTextureCube(I,0):I.isData3DTexture?Ve.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ve.setTexture2DArray(I,0):Ve.setTexture2D(I,0),Q.unbindTexture()},this.resetState=function(){U=0,G=0,te=null,Q.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}};var q={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfterKillsSmoothie:3,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8,trainerShare:0,trainerShareSmoothie:.5},trainer:{health:130,scaleW:1.2,scaleH:1.1,runSpeed:6.2,turnRate:12,maxAlive:3,swingRange:1.6,swingSlack:.4,swingArc:120,windup:.5,lockTime:.15,swingTime:.3,recover:.8,swingGap:.6,damage:30,tobbleDamage:30,knockback:1.6,knockTime:.35,staggerTime:.8,preferDoc:.6,retargetTime:.4,repathTime:.5,avoidRadius:1.8,avoidWeight:1.5,stuckTime:.6,diveChance:.4,barkChance:.5},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4,barkMinShow:1.2,bashVolume:.6,revVolume:.35,cutVolume:.5,throwVolume:.45,clankVolume:.35,boomVolume:.7,saunaVolume:.4,reviveVolume:.4,tobbleShotVolume:.25,blastSize:2.5,blastTime:.35,executeShake:.05,cutGelEvery:.1,arcDot:.06},run:{fadeOut:.6,blackHold:.25,fadeIn:.6,gateReach:1.6,hoursTime:6,gateOpenTime:.8}};function Xh({step:t,render:e,before:n,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(g){if(!(g>0)||!Number.isFinite(g))return;n&&n(g),o+=g;let m=0;for(;o>=r&&m<s;)t(r),o-=r,m++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),g)}function d(g){if(c){try{l!==null&&h((g-l)/1e3)}catch(m){throw p(),m}l=g,c&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function f(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function p(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:f,stop:p}}var Wf=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),FT={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},BT={0:"fire",2:"aim"},Og={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},kg={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},zT=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function Xf(t){if(!t||typeof t.tagName!="string")return!1;let e=t.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!zT.has(String(t.type||"text").toLowerCase()):!!t.isContentEditable}function Ug(t){return FT[t]||null}function Fg(t){return BT[t]||null}function Lo(){let t={};for(let e of Wf)t[e]=!1;return t}function Bg(t,e,n=.15){let i=Math.hypot(t,e);if(i<n)return[0,0];let s=Math.min(1,(i-n)/(1-n))/i;return[t*s,e*s]}function HT(t){if(!t||!t.connected)return{ok:!1,reason:"none"};if(t.mapping!=="standard"||!t.buttons||t.buttons.length<16||!t.axes||t.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,n]=Bg(t.axes[0],t.axes[1]),[i,s]=Bg(t.axes[2],t.axes[3]),r=Lo();for(let o in Og){let a=t.buttons[o];r[Og[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:n,lookX:i,lookY:s,held:r}}function GT(t){t.downCodes&&t.downCodes.clear(),t.downButtons&&t.downButtons.clear(),t.latched&&t.latched.clear(),t.held=t.held||{};for(let e of Wf)t.held[e]=!1;for(let e in t.held)t.held[e]=!1;return t.lookDX=0,t.lookDY=0,t.lookX=0,t.lookY=0,t.moveX=0,t.moveY=0,t}function Yh(t){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:Lo(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:n,downButtons:i,latched:s}=e,r="kbm",o="none",a=Lo();t.tabIndex<0&&(t.tabIndex=0);let l=()=>document.pointerLockElement===t,c=()=>l()||document.activeElement===t;function h(){GT(e)}function d(M){if(Xf(M.target))return;let _=Ug(M.code);(_||M.code in kg)&&(c()&&(M.code==="Tab"||M.code==="Space")&&M.preventDefault(),r="kbm",!M.repeat&&!n.has(M.code)&&_&&s.add(_),n.add(M.code))}function u(M){n.delete(M.code)}function f(M){M.target===t&&t.focus();let _=Fg(M.button);_&&(r="kbm",i.has(M.button)||s.add(_),i.add(M.button))}function p(M){i.delete(M.button)}function g(M){l()&&(r="kbm",e.lookDX+=M.movementX||0,e.lookDY+=M.movementY||0)}function m(M){!c()||!M.deltaY||(r="kbm",s.add(M.deltaY>0?"weaponNext":"weaponPrev"),M.preventDefault())}function x(M){M.preventDefault()}function y(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",p),window.addEventListener("blur",h),document.addEventListener("mousemove",g),document.addEventListener("pointerlockchange",y),t.addEventListener("mousedown",f),t.addEventListener("wheel",m,{passive:!1}),t.addEventListener("contextmenu",x);function w(){let M=[];try{M=navigator.getGamepads&&navigator.getGamepads()||[]}catch{M=[]}let _=null;for(let S of M)if(S&&S.connected){_=S;break}let v=HT(_);return o=v.ok?_.id:v.reason==="none"?"none":"unrecognised controller",v}function b(){let M={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:Lo(),pressed:Lo()};e.lookDX=0,e.lookDY=0;for(let S of n){let P=Ug(S);P&&(M.held[P]=!0);let R=kg[S];R&&(M.moveX+=R[0],M.moveY+=R[1])}for(let S of i){let P=Fg(S);P&&(M.held[P]=!0)}let _=Math.hypot(M.moveX,M.moveY);_>1&&(M.moveX/=_,M.moveY/=_);for(let S of s)M.pressed[S]=!0;s.clear();let v=w();if(v.ok){M.lookX=v.lookX,M.lookY=v.lookY;let S=v.moveX!==0||v.moveY!==0||v.lookX!==0||v.lookY!==0;for(let R of Wf)v.held[R]&&(S=!0,M.held[R]=!0,a[R]||(M.pressed[R]=!0));a=v.held,M.moveX+=v.moveX,M.moveY+=v.moveY;let P=Math.hypot(M.moveX,M.moveY);P>1&&(M.moveX/=P,M.moveY/=P),S&&(r="pad")}else a=Lo();return M}return{poll:b,requestLock(){try{let M=t.requestPointerLock&&t.requestPointerLock();M&&typeof M.catch=="function"&&M.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Hg(t,e,n=14){let i=t;return e>20?i-=.1:e<n&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var VT=2e3,zg=1e4,WT=8e4;function Gg({startMs:t=0,scale:e=1}={}){let n=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-t<VT||(i+=Math.min(h,100),s++,s<60||i<1e3))return n;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=Hg(n,u,Math.max(14,1.1*r));if(f>n){if(d<l)return n;o=d}else f<n&&(o!==null&&d-o<zg&&(a=a===0?zg:Math.min(a*2,WT),l=d+a),o=null);return n=f,n}return{sample:c,scale:()=>n}}var z=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Yf={viewportHeight:{value:1080}};function Kn(t){t.getAttribute("normal")||t.computeVertexNormals();let e=t.getAttribute("position"),n=t.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=n.getX(l),h[1]+=n.getY(l),h[2]+=n.getZ(l)}let a=t.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Et(new Float32Array(i*3),3),t.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=n.getX(l),d=n.getY(l),u=n.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,t}var XT=`
uniform float px;
uniform float viewportHeight;
#ifdef USE_OUTLINE_NORMAL
attribute vec3 outlineNormal;
#endif

void main() {
#ifdef USE_OUTLINE_NORMAL
  vec3 objectNormal = outlineNormal;
#else
  vec3 objectNormal = normal;
#endif
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vec4 clip = projectionMatrix * mvPosition;
  vec3 viewNormal = normalize(normalMatrix * objectNormal);

  // The normal's direction on screen, found by projecting a point a short
  // step along it. Exact at any position on screen, not only at the centre.
  // This is (step NDC - vertex NDC) scaled by clip.w * clipStep.w, which never
  // divides, so a vertex on the camera plane (w = 0) cannot produce NaN.
  float eps = 0.001 * max(-mvPosition.z, 0.1);
  vec4 clipStep = projectionMatrix * vec4(mvPosition.xyz + viewNormal * eps, 1.0);
  vec2 ndcDir = clipStep.xy * clip.w - clip.xy * clipStep.w;

  // Pixel space: width from the projection's aspect, height from the viewport.
  float aspect = projectionMatrix[1][1] / projectionMatrix[0][0];
  vec2 viewport = vec2(viewportHeight * aspect, viewportHeight);
  vec2 pixelDir = ndcDir * viewport;
  float len = length(pixelDir);
  pixelDir = len > 1e-9 ? pixelDir / len : vec2(0.0);

  // Thickness is TUNING.outlinePx at 1080 lines and scales with the viewport,
  // but never thinner than one pixel. Multiplying by w keeps it the same on
  // screen at any distance.
  float thickness = max(px * (viewportHeight / 1080.0), 1.0);
  clip.xy += pixelDir * (2.0 * thickness / viewport) * clip.w;
  gl_Position = clip;
}
`,YT=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function qT({px:t=q.outlinePx,color:e=z.ink,outlineNormal:n=!1}={}){return new En({name:"outline",uniforms:{px:{value:t},inkColor:{value:new et(e)},viewportHeight:Yf.viewportHeight},defines:n?{USE_OUTLINE_NORMAL:""}:{},vertexShader:XT,fragmentShader:YT,side:nn})}function $T(){}var Vg=new Map;function ZT(t,e,n){let i=t+"|"+new et(e).getHexString()+"|"+n,s=Vg.get(i);return s||(s=qT({px:t,color:e,outlineNormal:n}),Vg.set(i,s)),s}function yn(t,{px:e=q.outlinePx}={}){let n=!!t.geometry.getAttribute("outlineNormal"),i=ZT(e,z.ink,n),s=new at(t.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=$T,t.add(s),s}function qf(t,e){t.traverse(n=>{n.userData.isOutline&&(n.visible=e)})}function KT(t,e,n,i){let s=Math.max(1,Math.floor(t)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(n>0?n:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function qh(t,e){let n=new Gh({canvas:t,context:e,antialias:!0,powerPreference:"high-performance"});n.outputColorSpace=tn;let i=Gg({startMs:performance.now()});function s(){let o=KT(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return n.setPixelRatio(o.pixelRatio),n.setSize(o.width,o.height,!1),Yf.viewportHeight.value=t.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:n,resize:s,frameDone:r,scale:i.scale}}var xs={lightDir:{value:new B(...q.lightDir).normalize()},shadowTint:{value:new et(z.shadowTint)},bandEdge:{value:.15},shadowLift:{value:q.shadowLift}},JT=`
varying vec3 vViewNormal;
varying vec3 vViewPos;
varying vec3 vTint;

void main() {
  vTint = vec3(1.0);
#if defined( USE_COLOR_ALPHA )
  vTint = color.rgb;
#elif defined( USE_COLOR )
  vTint = color;
#endif
  vec3 pos = position;
  vec3 nrm = normal;
#ifdef USE_INSTANCING
  // Instanced meshes (the shot effects) carry a matrix per instance.
  pos = (instanceMatrix * vec4(position, 1.0)).xyz;
  nrm = mat3(instanceMatrix) * normal;
#endif
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  vViewPos = mvPosition.xyz;
  vViewNormal = normalize(normalMatrix * nrm);
  gl_Position = projectionMatrix * mvPosition;
}
`,jT=`
uniform vec3 baseColor;
uniform vec3 lightDir;
uniform vec3 shadowTint;
uniform float bandEdge;
uniform float shadowLift;
uniform float shadowMix;
uniform float rim;

varying vec3 vViewNormal;
varying vec3 vViewPos;
varying vec3 vTint;

// How far toward edge-on a lit surface must turn before the rim lightens it.
const float RIM_EDGE = 0.3;
// Only rounded surfaces get a rim (radius under about 2 m). A flat face seen
// edge-on (a floor, a wall, a box side) would otherwise lighten all over.
const float RIM_MIN_CURVATURE = 0.5;

// A hard step at edge, softened over about one pixel so it does not crawl
// on moving meshes. The width is capped so a 2x2 pixel block that straddles a
// sharp crease (a box edge) is not smeared into a visible gradient.
float pixelStep(float edge, float x, float w) {
  float h = 0.5 * clamp(w, 1e-4, 0.1);
  return smoothstep(edge - h, edge + h, x);
}

void main() {
  vec3 n = normalize(vViewNormal);
  vec3 l = normalize((viewMatrix * vec4(lightDir, 0.0)).xyz);
  vec3 v = isOrthographic ? vec3(0.0, 0.0, 1.0) : normalize(-vViewPos);
  float ndl = dot(n, l);
  float facing = dot(n, v);
  // All derivatives up front, in uniform control flow.
  float curvature = length(fwidth(n)) / max(length(fwidth(vViewPos)), 1e-6);
  float ndlWidth = fwidth(ndl);
  float facingWidth = fwidth(facing);

  vec3 base = baseColor * vTint;
  // Shadow: darken through the tint, then lift toward the tint itself so warm
  // colours go plum instead of brown.
  vec3 shade = mix(mix(base, base * shadowTint, shadowMix), shadowTint, shadowLift);
  float lit = pixelStep(bandEdge, ndl, ndlWidth);
  vec3 col = mix(shade, base, lit);
  float rimAmount = lit * (1.0 - pixelStep(RIM_EDGE, facing, facingWidth))
    * step(RIM_MIN_CURVATURE, curvature);
  col = mix(col, mix(col, vec3(1.0), rim), rimAmount);

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;function Pt({color:t="#ffffff",vertexColors:e=!1,shadowMix:n=.55,rim:i=.25}={}){return new En({name:"toon",uniforms:{baseColor:{value:new et(t)},shadowMix:{value:n},rim:{value:i},lightDir:xs.lightDir,shadowTint:xs.shadowTint,bandEdge:xs.bandEdge,shadowLift:xs.shadowLift},vertexShader:JT,fragmentShader:jT,vertexColors:e})}var QT=400,eE=[-.45,.22,-1],tE=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,nE=`
uniform vec3 deep;
uniform vec3 hot;
uniform vec3 pink;
uniform vec3 lilac;
uniform vec3 ink;
uniform vec3 planetColor;
uniform vec3 shadowTint;
uniform float shadowLift;
uniform float bandEdge;
uniform vec3 lightDir;
uniform vec3 planetDir;
uniform float time;

varying vec3 vDir;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}

float valueNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x),
        mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x),
        mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y),
    f.z);
}

float clouds(vec3 d) {
  vec3 p = d * 2.2 + vec3(time * 0.012, 0.0, time * 0.007);
  float n = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    n += amp * valueNoise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 4.1);
    amp *= 0.5;
  }
  return n;
}

// A hard edge at t, softened by one pixel so it does not crawl.
float edge(float t, float x) {
  float w = max(fwidth(x), 1e-4);
  return smoothstep(t - w, t + w, x);
}

void main() {
  vec3 d = normalize(vDir);

  // Vertical gradient: hot at and below the horizon, deep overhead.
  vec3 col = mix(hot, deep, smoothstep(-0.2, 0.4, d.y));

  // Nebula clouds, quantised to three flat steps.
  float n = clouds(d);
  float s1 = edge(0.50, n);
  float s2 = edge(0.60, n);
  float s3 = edge(0.70, n);
  col = mix(col, mix(col, lilac, 0.25), s1);
  col = mix(col, mix(hot, pink, 0.6), s2);
  col = mix(col, mix(pink, lilac, 0.55), s3);

  // Stars: a hashed dot in a few cells of a grid, hidden by thicker cloud.
  // Branch-free, so the derivatives used for the soft edge stay defined.
  vec3 sp = d * 90.0;
  float spPx = max(0.5 * length(fwidth(sp)), 1e-4);
  vec3 cell = floor(sp);
  vec3 h = hash33(cell);
  vec3 centre = normalize(cell + 0.25 + 0.5 * h) * length(sp);
  float sr = mix(0.12, 0.3, h.y);
  float star = (1.0 - smoothstep(sr - spPx, sr + spPx, length(sp - centre))) * step(0.975, h.x);
  col = mix(col, vec3(1.0, 0.97, 0.9), star * (1.0 - s2));

  // Planet: a disc with a flat shadow side, an ink outline and an ink ring.
  vec3 up = abs(planetDir.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 tx = normalize(cross(up, planetDir));
  vec3 ty = cross(planetDir, tx);
  float radius = 0.11;
  vec2 uv = vec2(dot(d, tx), dot(d, ty)) / radius;
  float front = step(0.0, dot(d, planetDir));
  float r = length(uv);
  float px = max(fwidth(r), 1e-4);

  // The ring: an ellipse tilted across the disc. Its back half sits behind the
  // planet, its front half crosses in front of it.
  float tilt = -0.35;
  vec2 ru = mat2(cos(tilt), sin(tilt), -sin(tilt), cos(tilt)) * uv;
  float re = length(vec2(ru.x, ru.y / 0.28));
  float rpx = max(fwidth(re), 1e-4);
  float ring = (1.0 - smoothstep(0.07 - rpx, 0.07 + rpx, abs(re - 1.6))) * front;
  float ringInFront = step(ru.y, 0.0);

  col = mix(col, ink, ring * (1.0 - ringInFront));
  float disc = (1.0 - smoothstep(1.0 - px, 1.0 + px, r)) * front;
  // Shaded like a toon surface, by the scene light: the disc's face points back
  // at the viewer (-planetDir), with tx and ty across it.
  vec3 sphereN = vec3(uv, sqrt(max(0.0, 1.0 - r * r)));
  vec3 planetLight = normalize(vec3(dot(lightDir, tx), dot(lightDir, ty), -dot(lightDir, planetDir)));
  float ndl = dot(sphereN, planetLight);
  float ndlPx = 0.5 * clamp(fwidth(ndl), 1e-4, 0.1);
  float lit = smoothstep(bandEdge - ndlPx, bandEdge + ndlPx, ndl);
  vec3 planetShade = mix(mix(planetColor, planetColor * shadowTint, 0.55), shadowTint, shadowLift);
  vec3 planet = mix(planetShade, planetColor, lit);
  float rimInk = smoothstep(0.965 - px, 0.965 + px, r);
  planet = mix(planet, ink, rimInk);
  col = mix(col, planet, disc);
  col = mix(col, ink, ring * ringInFront);

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;function $h({planetDir:t=eE}={}){let e=r=>new et(r),n=new En({name:"sky",uniforms:{deep:{value:e(z.nebulaDeep)},hot:{value:e(z.nebulaHot)},pink:{value:e(z.hotPink)},lilac:{value:e(z.lilac)},ink:{value:e(z.ink)},planetColor:{value:e(z.planet)},shadowTint:xs.shadowTint,shadowLift:xs.shadowLift,bandEdge:xs.bandEdge,lightDir:xs.lightDir,planetDir:{value:new B(...t).normalize()},time:{value:0}},vertexShader:tE,fragmentShader:nE,side:nn,depthWrite:!1}),i=new at(new $t(QT,48,24),n);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){n.uniforms.time.value=r}return{mesh:i,update:s}}function zt(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},o={},a=t[0].morphTargetsRelative,l=new Lt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0,f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==t[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let f=t[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Wg(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][u]);let p=Wg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Wg(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new e(r),a=new Et(o,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<n;p++){let g=h.getComponent(u,p);a.setComponent(u+d,p,g)}}else o.set(h.array,l);l+=h.count*n}return s!==void 0&&(a.gpuType=s),a}function Yg(t,e=1e-4){e=Math.max(e,Number.EPSILON);let n={},i=t.getIndex(),s=t.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(t.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=e*.5,f=Math.log10(1/e),p=Math.pow(10,f),g=u*p;for(let x=0;x<r;x++){let y=i?i.getX(x):x,w="";for(let b=0,M=a.length;b<M;b++){let _=a[b],v=t.getAttribute(_),S=v.itemSize;for(let P=0;P<S;P++)w+=`${Math.trunc(v[d[P]](y)*p+g)},`}w in n?h.push(n[w]):(l.push(y),n[w]=o,h.push(o),o++)}let m=t.clone();for(let x in t.attributes)m.setAttribute(x,Xg(t.attributes[x],l,c));for(let x in t.morphAttributes)m.morphAttributes[x]=t.morphAttributes[x].map(y=>Xg(y,l,c));return m.setIndex(h),m}function Xg(t,e,n=new Map){let i=t.isInterleavedBufferAttribute,s=i?t.data:t,r=i?s.stride:t.itemSize,o=i?n.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new t.constructor(l,t.itemSize,t.normalized,t.meshPerAttribute),o.setUsage(s.usage),i&&n.set(s,o)}let a=i?new t.constructor(o,t.itemSize,t.offset,t.normalized):o;return a.name=t.name,i||(a.gpuType=t.gpuType),a}function Do(t){let e=t>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function qg(t,e,n=.03,i=.04){let s=t.getAttribute("position"),r=t.getAttribute("normal");t.computeBoundingBox();let o=t.boundingBox,a=o.getSize(new B),l=o.getCenter(new B),c=a.length(),h=Do(e*7919+13>>>0),d=[];for(let x=0;x<8;x++)d.push(h()*2-1);let u=Math.min(n*c,i)*.99/Math.sqrt(3),f=(x,y)=>y>1e-9?2*x/y:0,p=[a.x,a.y,a.z].map(x=>x>1e-9?2/x:0),g=new dt,m=new B;for(let x=0;x<s.count;x++){let y=f(s.getX(x)-l.x,a.x),w=f(s.getY(x)-l.y,a.y),b=f(s.getZ(x)-l.z,a.z),M=(w+1)/2,_=(d[0]*w+d[1]*y*w)/2,v=(d[2]*y+d[3]*b)/2*M,S=(d[4]*w+d[5]*b*w)/2;if(r){let P=[d[1]*w/2,(d[0]+d[1]*y)/2,0],R=[d[2]/2*M,(d[2]*y+d[3]*b)/2*.5,d[3]/2*M],D=[0,(d[4]+d[5]*b)/2,d[5]*w/2];g.set(1+u*P[0]*p[0],u*P[1]*p[1],u*P[2]*p[2],u*R[0]*p[0],1+u*R[1]*p[1],u*R[2]*p[2],u*D[0]*p[0],u*D[1]*p[1],1+u*D[2]*p[2]),g.invert().transpose(),m.set(r.getX(x),r.getY(x),r.getZ(x)).applyMatrix3(g).normalize(),r.setXYZ(x,m.x,m.y,m.z)}s.setXYZ(x,s.getX(x)+u*_,s.getY(x)+u*v,s.getZ(x)+u*S)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),t.computeBoundingBox(),t.computeBoundingSphere(),t}var $f=null;function iE(){return $f||($f=Pt({vertexColors:!0})),$f}var Kf=(t,e,n)=>new et(t).lerp(new et(e),n),Jf=(t,e=.3)=>Kf(t,"#ffffff",e),Zh=(t,e=.2)=>Kf(t,z.shadowTint,e),$g=new Mt,Zg=new Ln,Kg=new zn,sE=new B,rE=new B;function Us(t=1,e=.02,n="prop"){let i=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let p=u.wonk===void 0?e:u.wonk;p>0&&qg(f,t*131+s,p),s++;let g=f.getAttribute("normal"),m=new Float32Array(g.count*3);for(let x=0;x<g.count;x++){let y=typeof d=="function"?d(g.getX(x),g.getY(x),g.getZ(x)):d;m[x*3]=y.r,m[x*3+1]=y.g,m[x*3+2]=y.b}return f.setAttribute("color",new Et(m,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),Kg.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),Zg.setFromEuler(Kg),$g.compose(sE.set(u.x||0,u.y||0,u.z||0),Zg,rE.set(1,1,1)),f.applyMatrix4($g),i.push(f),f}function o(h,d={}){let u=d.top||Jf(h),f=d.side||Zh(h,.22),p=Zh(h,.4),g=new et(h);return(m,x,y)=>x>.5?u:x<-.5?p:Math.abs(m)>.5?f:y>0?g:p}function a(h,d,u,f,p={}){return r(new vt(h,d,u),o(f,p),p)}function l(h,d,u,f,p,g,m,x={}){return a(d-h,f-u,g-p,m,{...x,x:(h+d)/2,y:(u+f)/2,z:(p+g)/2})}function c(h=0){let d=zt(i,!1);if(!d)throw new Error(`${n}: parts have different attributes and cannot be merged`);return h>0&&qg(d,t,h),Kn(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function Fs(t){let e=new mt,n=new at(t,iE());return yn(n),e.add(n),e}var vs=t=>()=>new et(t);function Kh({w:t,d:e,tile:n=1,colors:i=[z.cream,z.tealLight]}){let s=Us(1,0,"floor");s.span(-t/2,t/2,-.15,-.002,-e/2,e/2,z.lilac,{top:new et(z.lilac)});let o=Math.round(t/n),a=Math.round(e/n);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new Is(n,n);h.rotateX(-Math.PI/2),s.add(h,vs(i[(l+c)%2]),{wonk:0,x:-t/2+(l+.5)*n,y:0,z:-e/2+(c+.5)*n})}return Fs(s.finish())}function jf({w:t,h:e,color:n=z.cream,stripe:i=z.hotPink,opening:s=null,seed:r=2}){let o=Us(r,0,"wall"),a=.2,l=a/2,c=-t/2,h=t/2,d=-.3,u=new bo;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,e),u.lineTo(c,e),u.closePath(),s){let x=new xr,y=s.x-s.w/2,w=s.x+s.w/2;x.moveTo(y,s.y),x.lineTo(y,s.y+s.h),x.lineTo(w,s.y+s.h),x.lineTo(w,s.y),x.closePath(),u.holes.push(x)}let f=new Ha(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(n),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,z.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,z.teal);let p=.5,g=.8;return s&&s.y<g&&s.y+s.h>p?(o.span(c,s.x-s.w/2,p,g,l-.01,l+.03,i),o.span(s.x+s.w/2,h,p,g,l-.01,l+.03,i)):o.span(c,h,p,g,l-.01,l+.03,i),Fs(o.finish(.006))}function oE(t,e,n,i){let s=m=>Math.min(2048,Math.max(64,Math.round(m))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=t.split(" "),d=[[t]];for(let m=1;m<h.length;m++)d.push([h.slice(0,m).join(" "),h.slice(m).join(" ")]);let u=null;for(let m of d){let x=Math.max(...m.map(w=>l.measureText(w).width)),y=Math.min(r*.88*100/x,o*.8/(m.length*1.08));(!u||y>u.size)&&(u={lines:m,size:y})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=n,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,p=o/2-(u.lines.length-1)*f/2;u.lines.forEach((m,x)=>{let y=p+x*f;l.fillStyle=z.ink,l.fillText(m,r/2+u.size*.05,y+u.size*.06),l.fillStyle=n,l.fillText(m,r/2,y)});let g=new Ca(a);return g.colorSpace=tn,g.anisotropy=8,g}function Bs({text:t,w:e,h:n,bg:i=z.hotPink,fg:s=z.cream,tilt:r=.04,seed:o=3}){let c=Us(o,0,"sign");c.box(e,n,.14,s,{wonk:0});let h=Fs(c.finish()),d=e-.14*2,u=n-.14*2,f=new at(new Is(d,u),new vn({map:oE(t,i,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function Jg({w:t,h:e,seed:n=4}){let i=Us(n,.012,"window"),s=.15,r=.34;return i.span(-t/2,-t/2+s,0,e,-r/2,r/2,z.teal),i.span(t/2-s,t/2,0,e,-r/2,r/2,z.teal),i.span(-t/2+s,t/2-s,e-s,e,-r/2,r/2,z.teal),i.span(-t/2+s,t/2-s,0,s,-r/2,r/2,z.teal),i.span(-t/2-.2,t/2+.2,-.08,.06,-r/2,r/2+.28,z.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,z.cream),i.span(-t/2+s,t/2-s,e/2-.04,e/2+.04,-.04,.04,z.cream),Fs(i.finish(.006))}function rl(t,e,n,i,s,r){let o=new br(.16,.05,8,20);t.add(o,vs(z.planet),{wonk:.04,x:e,y:n,z:i,rx:-Math.PI/2+s,ry:r})}function jg({w:t,h:e,name:n,signColor:i=z.hotPink,seed:s=5}){let r=Us(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=Kf(z.glorpPurple,z.ink,.7);r.span(-t/2+a,t/2-a,0,c,-o/2,-o/2+.1,h),r.span(-t/2+a,t/2-a,1.15,1.22,-o/2,-o/2+.4,z.lilac);for(let x of[-1,1]){let y=x*(t/2-a/2);r.span(y-a/2,y+a/2,0,c,-o/2,o/2,z.lilac),r.span(y-a/2-.04,y+a/2+.04,0,.3,-o/2,o/2+.04,z.teal)}r.span(-t/2,t/2,c,l,-o/2,o/2,z.teal);let d=t-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,z.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,z.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,z.cream),rl(r,-.9,1.01,.4,.1,.4),rl(r,-.2,1.01,.5,-.1,-.3),rl(r,.6,1.01,.38,.12,.9),rl(r,1.2,1.01,.52,0,.1);let u=10,f=(t-.1)/u,p=.42;for(let x=0;x<u;x++){let y=x%2?z.cream:i,w=-t/2+.05+(x+.5)*f;r.box(f,.08,.95,y,{x:w,y:c-.02,z:o/2+.35,rx:p,top:Jf(y,.2)}),r.box(f,.22,.06,y,{x:w,y:c-.24,z:o/2+.8,rx:.1})}let g=Fs(r.finish(.006)),m=Bs({text:n,w:t-.7,h:1.15,bg:i,fg:z.cream,seed:s+1});return m.position.set(0,c+.7,o/2+.01),g.add(m),g}function Qg({w:t=2,d:e=1,h:n=.9,color:i=z.teal,seed:s=7}={}){let r=Us(s,.018,"kiosk");r.span(-t/2+.03,t/2-.03,0,.16,-e/2+.03,e/2-.03,z.lilac),r.span(-t/2,t/2,.16,n-.08,-e/2,e/2,i),r.span(-t/2-.07,t/2+.07,n-.08,n,-e/2-.07,e/2+.07,z.cream);let o=4,a=(t-.3)/o;for(let c=0;c<o;c++){let h=c%2?z.cream:z.hotPink;r.box(a-.04,n-.45,.05,h,{x:-t/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,z.glorpPurple,{x:-.55,y:n+.14,z:-.1}),r.box(.3,.14,.04,z.gel,{x:-.55,y:n+.28,z:.07,rx:-.5,wonk:0}),rl(r,.45,n+.06,.05,.1,.5);let l=Fs(r.finish(.006));return l.userData.footprint={w:t+.14,d:e+.14},l}function ex({w:t=1.8,seed:e=11}={}){let n=Us(e,.02,"bench"),i=.5;n.box(t,.1,i,z.lilac,{y:.46}),n.box(t,.42,.08,z.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])n.box(.1,.46,i-.06,z.teal,{x:r*(t/2-.2),y:.23}),n.box(.08,.5,.08,z.teal,{x:r*(t/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=Fs(n.finish(.006));return s.userData.footprint={w:t,d:i},s}function aE(t,e,n){let i=new vt(.035,t,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+t/2)/t;s.setXYZ(r,s.getX(r)+n*o*o,s.getY(r)+t/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function tx({seed:t=21}={}){let e=Us(t,.02,"planter"),n=Do(t);e.add(new Jt(.42,.32,.55,16),vs(z.teal),{y:.275}),e.add(new Jt(.47,.44,.12,16),vs(z.hotPink),{y:.6}),e.add(new Jt(.4,.4,.04,16),vs(Zh(z.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Zh(z.planet,.15);for(let l=0;l<6;l++)e.add(new Jt(.06-l*.004,.07-l*.004,.34,8),vs(l%2?Jf(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+n()*.3,h=l%2?.95+n()*.25:1.45+n()*.25,d=new Mt().makeTranslation(i,s,0).multiply(new Mt().makeRotationY(c)).multiply(new Mt().makeRotationZ(-h));e.add(aE(.95,.24,l%2?.22:.4),vs(l%2?z.gel:z.teal),{m:d,wonk:.03})}e.add(new $t(.1,10,8),vs(z.planet),{x:i,y:s-.05,z:.08}),e.add(new $t(.1,10,8),vs(z.planet),{x:i+.07,y:s-.1,z:-.07});let a=Fs(e.finish());return a.userData.footprint={w:.95,d:.95},a}var Zf=null;function Jh({rx:t,rz:e,opacity:n=.35}){let r=new et(z.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,n];for(let d=1;d<=8;d++){let u=d/8,f=n*(1-u*u*(3-2*u));for(let p=0;p<28;p++){let g=p/28*Math.PI*2;o.push(Math.cos(g)*t*u,0,Math.sin(g)*e*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let p=0;p<28;p++){let g=(p+1)%28;l.push(u+p,u+g,f+p,u+g,f+g,f+p)}}let c=new Lt;c.setAttribute("position",new xt(o,3)),c.setAttribute("color",new xt(a,4)),c.setIndex(l),Zf||(Zf=new vn({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new at(c,Zf);return h.name="blobShadow",h.position.y=.012,h}var ol=8,jh=ol/2,Qf=.2;function nx(){let t=new mt;t.add(Kh({w:ol,d:ol}));let e=jf({w:ol+Qf*2,h:4});e.position.set(0,0,-jh-Qf/2),t.add(e);let n=1.3,i=jg({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:z.hotPink});i.position.set(n,0,-jh+.25),t.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=jf({w:ol,h:4,color:"#f1e6ff",opening:s});r.position.set(-jh-Qf/2,0,0),r.rotation.y=Math.PI/2;let o=Jg({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),t.add(r);let a=Qg({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=ex({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=tx({seed:21});c.position.set(-2.95,0,-2.9),t.add(a,l,c);let h=(d,u,f,p,g=0)=>{let m=Jh({rx:f,rz:p,opacity:.7});m.position.x=d,m.position.z=u,m.rotation.y=g,t.add(m)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(n,-jh+.9,2.7,.8),{group:t,spawn:[0,0,0],update(){}}}function On(t,e,n,i){if(!(n>0)||!(i>0))return n>0||(t.x=e,t.v=0),t;let s=4*Math.LN2/n/2,r=t.x-e,o=t.v+r*s,a=Math.exp(-s*i);return t.x=a*(r+o*i)+e,t.v=a*(t.v-o*s*i),t}function ep(t,e,n,i,s,r){let o=n+i,a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=e[0],f=e[1],p=e[2];h>d&&(h=d,u=t[0]+a*h,f=t[1]+l*h,p=t[2]+c*h);let g=h>o?h/o:1;if(h>=o){let S=h*(o>0?n/o:.5);return ix(r,t[0]+a*S,t[1]+l*S,t[2]+c*S,u,f,p,g)}let m=Math.max(h,1e-6),x=Math.min(Math.max((m*m+n*n-i*i)/(2*m),-n),n),y=Math.sqrt(Math.max(n*n-x*x,0)),w=s[0],b=s[1],M=s[2],_=w*a+b*l+M*c;w-=a*_,b-=l*_,M-=c*_;let v=Math.hypot(w,b,M);return v<1e-6&&(Math.abs(a)<.9?(w=0,b=c,M=-l):(w=-c,b=0,M=a),v=Math.hypot(w,b,M)||1),w/=v,b/=v,M/=v,ix(r,t[0]+a*x+w*y,t[1]+l*x+b*y,t[2]+c*x+M*y,u,f,p,g)}function ix(t,e,n,i,s,r,o,a){if(!t)return{mid:[e,n,i],end:[s,r,o],stretch:a};let l=t.mid,c=t.end;return l[0]=e,l[1]=n,l[2]=i,c[0]=s,c[1]=r,c[2]=o,t.stretch=a,t}var sx=[.65,1.2];function tp({radius:t=.06,rings:e=8,sides:n=8,color:i="#ffffff"}={}){let s=e+1,r=sx.length,o=s*n,a=[o,o+r*n+1],l=o+2*(r*n+1),c=[],h=(Re,Me,Ye)=>{for(let H=0;H<n;H++){let j=(H+1)%n,re=Re+H,Pe=Re+j,k=Me+H,ie=Me+j;Ye?c.push(re,k,Pe,Pe,k,ie):c.push(re,Pe,k,Pe,ie,k)}};for(let Re=0;Re<e;Re++)h(Re*n,(Re+1)*n,!1);for(let Re=0;Re<2;Re++){let Me=Re===0,Ye=Re===0?0:e*n;for(let j=0;j<r;j++){let re=a[Re]+j*n;h(Ye,re,Me),Ye=re}let H=a[Re]+r*n;for(let j=0;j<n;j++){let re=Ye+j,Pe=Ye+(j+1)%n;Me?c.push(re,H,Pe):c.push(re,Pe,H)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new Lt,p=new Et(d,3),g=new Et(u,3);p.setUsage(Co),g.setUsage(Co),f.setAttribute("position",p),f.setAttribute("normal",g),f.setIndex(c);let m=new at(f,Pt({color:i}));m.name="limb";let x=new Hn(new B,t*2);f.boundingSphere=x,yn(m);let y=new Float64Array(n),w=new Float64Array(n);for(let Re=0;Re<n;Re++)y[Re]=Math.cos(Re/n*Math.PI*2),w[Re]=Math.sin(Re/n*Math.PI*2);let b=0,M=-1,_=0,v=1,S=0,P=0,R=0,D=0,T=1,L=0,E=0,N=0,U=0,G=0,te=0,X=0,ne=0,Z=0,Y=0,ye=0,J=0,K=0,fe=0,Ue=0,W=0,_e=0,De=0;function Se(Re,Me,Ye,H,j,re,Pe,k,ie,de,Ce,Q,He,Fe,Ve,O){for(let A=0;A<n;A++){let ee=y[A]*re+w[A]*ie,be=y[A]*Pe+w[A]*de,pe=y[A]*k+w[A]*Ce,xe=(Re+A)*3;d[xe]=Me+ee*j,d[xe+1]=Ye+be*j,d[xe+2]=H+pe*j,u[xe]=ee*Ve+Q*O,u[xe+1]=be*Ve+He*O,u[xe+2]=pe*Ve+Fe*O}}let ge=!1,Ie=1,me=0,ke=0;function Ne(Re,Me,Ye,H=1){let j=t/Math.sqrt(H>1?H:1),re=2*Me[0]-(Re[0]+Ye[0])/2,Pe=2*Me[1]-(Re[1]+Ye[1])/2,k=2*Me[2]-(Re[2]+Ye[2])/2,ie=Re[0],de=Re[1],Ce=Re[2],Q=Ye[0],He=Ye[1],Fe=Ye[2],Ve=(Me[1]-de)*(Fe-Me[2])-(Me[2]-Ce)*(He-Me[1]),O=(Me[2]-Ce)*(Q-Me[0])-(Me[0]-ie)*(Fe-Me[2]),A=(Me[0]-ie)*(He-Me[1])-(Me[1]-de)*(Q-Me[0]),ee=Math.hypot(Ve,O,A),be=Me[0]-ie,pe=Me[1]-de,xe=Me[2]-Ce,Ae=Math.hypot(be,pe,xe),oe=Q-Me[0],he=He-Me[1],Oe=Fe-Me[2],V=!1;ee>1e-4*Ae*Math.hypot(oe,he,Oe)&&ee>1e-12?(Ve/=ee,O/=ee,A/=ee,ge&&Ve*Ie+O*me+A*ke<0&&(Ve=-Ve,O=-O,A=-A),V=!0):Ae>1e-9&&be*oe+pe*he+xe*Oe<0&&(re=(ie+Q)/2,Pe=(de+He)/2,k=(Ce+Fe)/2);let ce=(ie+re+Q)/3,le=(de+Pe+He)/3,ze=(Ce+k+Fe)/3,Le=Math.max(Math.hypot(ie-ce,de-le,Ce-ze),Math.hypot(re-ce,Pe-le,k-ze),Math.hypot(Q-ce,He-le,Fe-ze));x.center.set(ce,le,ze),x.radius=Le+t*1.5+.02;for(let ve=0;ve<s;ve++){let Te=ve/e,Ke=1-Te,Ee=Ke*Ke,qe=2*Ke*Te,Qe=Te*Te,Ge=Ee*ie+qe*re+Qe*Q,st=Ee*de+qe*Pe+Qe*He,ft=Ee*Ce+qe*k+Qe*Fe,Rt=2*Ke*(re-ie)+2*Te*(Q-re),Gt=2*Ke*(Pe-de)+2*Te*(He-Pe),Ft=2*Ke*(k-Ce)+2*Te*(Fe-k),Vn=Math.hypot(Rt,Gt,Ft);if(Vn>1e-9?(b=Rt/Vn,M=Gt/Vn,_=Ft/Vn):ve===0&&(b=0,M=-1,_=0),ve===0){V?(v=Ve,S=O,P=A):ge?(v=Ie,S=me,P=ke):(v=1,S=0,P=0);let mn=v*b+S*M+P*_;v-=b*mn,S-=M*mn,P-=_*mn;let Ot=Math.hypot(v,S,P);Ot<1e-6&&(Math.abs(b)<.9?(v=0,S=_,P=-M):(v=-_,S=0,P=b),Ot=Math.hypot(v,S,P)||1),v/=Ot,S/=Ot,P/=Ot,Ie=v,me=S,ke=P,ge=!0}else{let mn=v*b+S*M+P*_;v-=b*mn,S-=M*mn,P-=_*mn;let Ot=Math.hypot(v,S,P);Ot<1e-6&&(Math.abs(b)<.9?(v=0,S=_,P=-M):(v=-_,S=0,P=b),Ot=Math.hypot(v,S,P)||1),v/=Ot,S/=Ot,P/=Ot}R=M*P-_*S,D=_*v-b*P,T=b*S-M*v,Se(ve*n,Ge,st,ft,j,v,S,P,R,D,T,0,0,0,1,0),ve===0&&(L=b,E=M,N=_,U=v,G=S,te=P,X=R,ne=D,Z=T),ve===s-1&&(Y=b,ye=M,J=_,K=v,fe=S,Ue=P,W=R,_e=D,De=T)}for(let ve=0;ve<2;ve++){let Te=ve===0?-1:1,Ke=ve===0?ie:Q,Ee=ve===0?de:He,qe=ve===0?Ce:Fe,Qe=ve===0?L:Y,Ge=ve===0?E:ye,st=ve===0?N:J,ft=ve===0?U:K,Rt=ve===0?G:fe,Gt=ve===0?te:Ue,Ft=ve===0?X:W,Vn=ve===0?ne:_e,mn=ve===0?Z:De,Ot=Qe*Te,wn=Ge*Te,kt=st*Te;for(let fi=0;fi<r;fi++){let pi=sx[fi],ts=Math.cos(pi),ti=Math.sin(pi);Se(a[ve]+fi*n,Ke+Ot*j*ti,Ee+wn*j*ti,qe+kt*j*ti,j*ts,ft,Rt,Gt,Ft,Vn,mn,Ot,wn,kt,ts,ti)}let Bn=(a[ve]+r*n)*3;d[Bn]=Ke+Ot*j,d[Bn+1]=Ee+wn*j,d[Bn+2]=qe+kt*j,u[Bn]=Ot,u[Bn+1]=wn,u[Bn+2]=kt}p.needsUpdate=!0,g.needsUpdate=!0}return{mesh:m,set:Ne}}var Ar=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),lE=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),Qh=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],np=.04,cE=9;function eu(t,e){let n=Math.sin(t*12.9898+e*78.233)*43758.5453;return(n-Math.floor(n))*Math.PI*2}function hE(t,e,n=[0,0]){return n[0]=.05*Math.sin(1.3*t+eu(e,1))+.03*Math.sin(2.1*t+eu(e,2)),n[1]=.04*Math.sin(1.7*t+eu(e,3))+.02*Math.sin(2.6*t+eu(e,4)),n}var uE=(t,e)=>Math.min(t*2,1)*Math.max(e,0),al=16,rx=al+1,Hi=11,zs=4,tu=13,dE=.07,fE=t=>{let e=t<0?0:t>1?1:t;return e*e*(3-2*e)};function ox({eyeRadius:t=.1,eyeSpacing:e=.26,eyeY:n=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=z.ink,fixedSmile:h=0}={}){let d=t,u=e/2,f=[-u,u],p=.35,g=.035*d,m=d*.3,x=a==="uni",y=0,w=y+2*rx,b=w+16,M=b+2*Hi*zs,_=M+2*Hi*2,v=_+(x?6:8),S=v+tu*2,P=[],R=ie=>P.push(ie,ie+1,ie+2,ie,ie+2,ie+3),D=(ie,de)=>{for(let Ce=0;Ce<de-1;Ce++){let Q=ie+Ce*2;P.push(Q,Q+1,Q+2,Q+1,Q+3,Q+2)}};for(let ie=0;ie<2;ie++){let de=y+ie*rx;for(let Ce=0;Ce<al;Ce++)P.push(de,de+1+Ce,de+1+(Ce+1)%al)}for(let ie=0;ie<4;ie++)R(w+ie*4);for(let ie=0;ie<2;ie++){let de=b+ie*Hi*zs;for(let Ce=0;Ce<Hi-1;Ce++)for(let Q=0;Q<zs-1;Q++){let He=de+Ce*zs+Q,Fe=He+1,Ve=He+zs,O=Ve+1;P.push(He,Fe,Ve,Fe,O,Ve)}D(M+ie*Hi*2,Hi)}x?P.push(_,_+1,_+2,_+1,_+3,_+2,_+2,_+3,_+4,_+3,_+5,_+4):(R(_),R(_+4)),D(v,tu);let T=[];for(let ie=0;ie<2;ie++){let de=new $t(d,18,12);de.deleteAttribute("uv"),de.applyMatrix4(new Mt().makeScale(1,1,p).setPosition(f[ie],n,i)),T.push(de)}let L=new at(zt(T,!1),Pt({color:z.eyeWhite,shadowMix:.35,rim:0}));L.name="eyes",yn(L,{px:2});let E=new Float32Array(S*3),N=new Float32Array(S*3),U=new Float32Array(S*3),G=new et(z.ink),te=new et(c);for(let ie=0;ie<S;ie++){N[ie*3+2]=1;let de=ie>=b&&ie<M?te:G;U[ie*3]=de.r,U[ie*3+1]=de.g,U[ie*3+2]=de.b}let X=new Lt,ne=new Et(E,3);ne.setUsage(Co),X.setAttribute("position",ne),X.setAttribute("normal",new Et(N,3)),X.setAttribute("color",new Et(U,3)),X.setIndex(P);let Z=n+d*3.5,Y=s-r*1.5-d,ye=Math.max(u+2.5*d,r);X.boundingSphere=new Hn(new B(0,(Z+Y)/2,i),Math.hypot(ye,(Z-Y)/2,d*2));let J=Pt({color:"#ffffff",vertexColors:!0,rim:0});J.side=An;let K=new at(X,J);K.name="features";let fe=new mt;fe.name="face",fe.add(L,K);let Ue=Ar.neutral,W=ie=>{let de=h>0?lE[ie]:0;return de>0?h*de:-1/0},_e=W("neutral"),De=ie=>ie==="mouthCurve"&&Ue.mouthCurve<_e?_e:Ue[ie],Se={};for(let ie of Qh)Se[ie]={x:De(ie),v:0};let ge={x:0,v:0},Ie={x:0,v:0},me=0,ke=!1,Ne=0,Re=[0,0],Me=0;function Ye(ie,de,Ce){let Q=Me*3;E[Q]=ie,E[Q+1]=de,E[Q+2]=Ce,Me++}function H(ie,de,Ce){let Q=1-(ie*ie+de*de)/(d*d);return i+d*p*Math.sqrt(Q>0?Q:0)+Ce}function j(ie,de,Ce,Q,He,Fe){let Ve=-(Q-de),O=Ce-ie,A=Math.hypot(Ve,O)||1;Ve=Ve/A*He/2,O=O/A*He/2,Ye(ie+Ve,de+O,Fe),Ye(Ce+Ve,Q+O,Fe),Ye(Ce-Ve,Q-O,Fe),Ye(ie-Ve,de-O,Fe)}let re=d*1.03;function Pe(){let ie=Se,de=ie.pupilScale.x*(1-ge.x),Ce=ge.x,Q=Math.min(Math.max(ie.lid.x,0),.95),He=ie.browAngle.x,Fe=Q>.005,Ve=re-2*re*Q,O=He*.6*Math.min(Q*4,1),A=d*dE*Math.min(Q*10,1);Me=y;for(let Te=0;Te<2;Te++){let Ke=Te===0?-1:1;hE(Ne,l+Te*7.31,Re);let Ee=d*.5*(de>0?de:0),qe=Re[0]*d,Qe=Re[1]*d;if(Fe){let st=Ve+O*Ke*qe-Math.abs(O)*Ee-A-(Qe+Ee);if(st>0){let ft=Math.min(Math.max((st-.1*d)/(.1*d),0),1);Qe+=st*(1-fE(ft))}}Ye(f[Te]+qe,n+Qe,H(qe,Qe,g));for(let Ge=0;Ge<al;Ge++){let st=Ge/al*Math.PI*2,ft=qe+Math.cos(st)*Ee,Rt=Qe+Math.sin(st)*Ee;Ye(f[Te]+ft,n+Rt,H(ft,Rt,g))}}Me=w;for(let Te=0;Te<2;Te++){let Ke=d*.55*Ce,Ee=H(0,0,g),qe=d*.26*Ce;j(f[Te]-Ke,n-Ke,f[Te]+Ke,n+Ke,qe,Ee),j(f[Te]-Ke,n+Ke,f[Te]+Ke,n-Ke,qe,Ee)}for(let Te=0;Te<2;Te++){let Ke=Te===0?-1:1;for(let Ee=0;Ee<2;Ee++){Me=Ee===0?b+Te*Hi*zs:M+Te*Hi*2;for(let qe=0;qe<Hi;qe++){let Qe=(qe/(Hi-1)*2-1)*(Math.PI/2),Ge=re*Math.sin(Qe),st=re*Math.cos(Qe),ft=Fe?Ve+O*Ge:st;ft>st&&(ft=st),ft<-st&&(ft=-st);let Rt=Ke*Ge;if(Ee===0)for(let Gt=0;Gt<zs;Gt++){let Ft=st+(ft-st)*(Gt/(zs-1));Ye(f[Te]+Rt,n+Ft,H(Rt,Ft*.97,g*3))}else{let Gt=ft+(Fe?d*.02:0);Gt>st&&(Gt=st);let Ft=ft-A;Ft<-st&&(Ft=-st),Ye(f[Te]+Rt,n+Gt,H(Rt,Gt*.97,g*3.5)),Ye(f[Te]+Rt,n+Ft,H(Rt,Ft*.97,g*3.5))}}}}Me=_;let ee=d*.9,be=n+d*(1.4+ie.browY.x),pe=Math.cos(He),xe=Math.sin(He),Ae=i+d*.15;if(x){let Te=u+ee*pe,Ke=be+ee*xe,Ee=be-xe/(pe>.3?pe:.3)*u,qe=-(Ee-Ke),Qe=Te,Ge=Math.hypot(qe,Qe)||1;qe/=Ge,Qe/=Ge;let st=-(Ke-Ee),ft=Te,Rt=Math.hypot(st,ft)||1;st/=Rt,ft/=Rt;let Gt=qe+st,Ft=Qe+ft,Vn=Math.hypot(Gt,Ft)||1;Gt/=Vn,Ft/=Vn;let mn=Gt*qe+Ft*Qe,Ot=m/2/(mn>.4?mn:.4);Ye(-Te+qe*m/2,Ke+Qe*m/2,Ae),Ye(-Te-qe*m/2,Ke-Qe*m/2,Ae),Ye(Gt*Ot,Ee+Ft*Ot,Ae),Ye(-Gt*Ot,Ee-Ft*Ot,Ae),Ye(Te+st*m/2,Ke+ft*m/2,Ae),Ye(Te-st*m/2,Ke-ft*m/2,Ae)}else for(let Te=0;Te<2;Te++){let Ke=Te===0?-1:1;j(f[Te]-Ke*ee*pe,be-ee*xe,f[Te]+Ke*ee*pe,be+ee*xe,m,Ae)}Me=v;let oe=ie.mouthOpen.x+Ie.x*(.55+.45*Math.sin((Ne+l*.37)*cE*Math.PI*2))*.8,he=oe>0?oe<1.2?oe:1.2:0,Oe=-ie.mouthCurve.x/.5,V=(Oe>1?1:Oe>0?Oe:0)*(he<.4?he/.4:1),ce=r/2*(1-.35*(he<1?he:1)*(1-.7*V)),le=uE(ie.lid.x,ie.mouthCurve.x),ze=ie.mouthCurve.x*ce*.5*(1-.4*le)*(1+.6*V),Le=.55+.5*V,ve=he*ce*.9;for(let Te=0;Te<tu;Te++){let Ke=Te/(tu-1)*2-1,Ee=1-Ke*Ke,qe=Ke*ce*(1-.25*le)+le*ce*.2,Qe=s-ze*Ee+le*ce*.45*Ke+ge.x*m*.6*Math.sin(Ke*Math.PI*3);Ye(qe,Qe,o),Ye(qe,Qe-m-ve*Math.pow(Ee,Le)+ze*Ee*V,o)}ne.needsUpdate=!0}function k(ie){Ne+=ie;for(let de=0;de<Qh.length;de++)On(Se[Qh[de]],De(Qh[de]),np,ie);On(ge,me,np,ie),On(Ie,ke?1:0,np,ie),Pe()}return Pe(),{group:fe,setExpression(ie){Ue=Object.prototype.hasOwnProperty.call(Ar,ie)?Ar[ie]:Ar.neutral,me=ie==="dead"?1:0,_e=W(Object.prototype.hasOwnProperty.call(Ar,ie)?ie:"neutral")},setTalking(ie){ke=!!ie},update:k}}var kn=Math.PI*2,ll=["handL","handR","footL","footR"];function Vi(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function ax(t,e){e.hipsY=t.hipsY,e.lean=t.lean,e.twist=t.twist,e.headYaw=t.headYaw,e.headPitch=t.headPitch,e.squash=t.squash,e.elbows=t.elbows;for(let n=0;n<4;n++){let i=t[ll[n]],s=e[ll[n]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function cl(t,e,n,i=[0,0,0]){let s=n[0],r=n[1]-t.hipHeight,o=n[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+e.hipsY,i[2]=-s*h+u*c,i}var pE=t=>t<0?0:t>1?1:t,Gi=(t,e,n)=>{let i=pE((n-t)/(e-t));return i*i*(3-2*i)},Rr=(t,e,n,i,s)=>Gi(e,n,t)*(1-Gi(i,s,t));function Ct(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}var nu=[0,0,0];function ri(t,e,n,i,s,r){return nu[0]=n,nu[1]=i,nu[2]=s,cl(t,e,nu,r)}var iu={sx:0,sy:0,fx:0};function Pn(t){return iu.sx=Math.abs(t.shoulderL[0]),iu.sy=t.shoulderL[1],iu.fx=Math.abs(t.hipL[0])+.035,iu}var Oo=(t,e)=>e>0?t.handL:t.handR;function ip(t,e,n,i,s){return ri(t,e,s*(n.sx+.16),t.hipHeight+0,.1,i)}var sp=.55;function lu(t,e,n){let i=Pn(e),s=t/yt.idle.duration,r=kn*s,o=e.hipHeight,a=Rr(s,.42,.52,.72,.86);return n.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),n.lean=.03+.015*Math.sin(r+.4),n.twist=.05*Math.sin(r+.6),n.headYaw=.03*Math.sin(r)+.3*a,n.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,n.squash=1+.008*Math.sin(r),n.elbows=sp,ip(e,n,i,n.handL,1),ip(e,n,i,n.handR,-1),n.handL[1]+=.008*Math.sin(r-.5),n.handR[1]+=.008*Math.sin(r+.4),n.handL[2]+=.01*Math.sin(r+1.1),n.handR[2]+=.01*Math.sin(r-.7),Ct(n.footL,i.fx,0,.015),Ct(n.footR,-i.fx,0,-.015),n}var ys=.34,rp=.25,hx=-.33,mE=.4,gE=.37,xE=.035,au=(rp-hx)/ys;function lx(t,e){if(t<ys)return e[0]=0,e[1]=rp-au*t,e;let n=(t-ys)/(1-ys),i=-au*(1-ys),s=-.35*au*(1-ys),r=n*n,o=r*n;return e[1]=(2*o-3*r+1)*hx+(o-2*r+n)*i+(-2*o+3*r)*rp+(o-r)*s,e[0]=mE*Math.sin(Math.PI*Math.pow(n,.8)),e}var fn=[0,0];function ux(t,e,n){let i=Pn(e),s=t/yt.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*kn*(r-(ys+.5)/2);n.hipsY=o-.06+xE*Math.cos(a),n.squash=1+.045*Math.cos(2*kn*(r-ys-.03)),n.lean=gE+.03*Math.cos(2*kn*(r-ys));let l=Math.cos(kn*(r+.03));n.twist=.2*l,n.headYaw=-.15*l,n.headPitch=-.28+.04*Math.cos(a),n.elbows=0,lx(r,fn),Ct(n.footL,i.fx*.75,fn[0],fn[1]),lx(r<.5?r+.5:r-.5,fn),Ct(n.footR,-i.fx*.75,fn[0],fn[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;ri(e,n,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,Oo(n,c))}return n}function dx(t,e,n){let i=Pn(e),s=kn*t/yt.aim.duration,r=e.hipHeight;n.hipsY=r-.05+.005*Math.sin(s),n.lean=.12+.01*Math.sin(s),n.twist=-.1,n.headYaw=.08,n.headPitch=.04+.012*Math.sin(2*s),n.squash=1,n.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Ct(n.handL,i.sx*1.2+o,i.sy-.12+a,.56),Ct(n.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Ct(n.footL,i.fx+.02,0,.15),Ct(n.footR,-i.fx-.03,0,-.13),n}var op=.35;function vE(t){return t<.06?Gi(0,.06,t):Math.exp(-9*(t-.06))*(1-Gi(.24,op,t))}function yE(t){if(t<.07)return Gi(0,.07,t);let e=t-.07;return Math.exp(-11*e)*Math.cos(kn*e/.22)*(1-Gi(.26,op,t))}function _E(t,e,n){let i=Pn(e),s=e.hipHeight,r=vE(t);n.hipsY=s-.012-.05*r,n.lean=.03-.4*r,n.twist=.12*r,n.headYaw=-.12*r,n.headPitch=-.02-.32*r,n.squash=1-.15*yE(t),n.elbows=sp+(1-sp)*r;for(let o=-1;o<=1;o+=2){let a=Oo(n,o);ip(e,n,i,a,o);let l=a[0],c=a[1],h=a[2];ri(e,n,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Ct(n.footL,i.fx,0,.015),Ct(n.footR,-i.fx,0,-.015),n}var Hs=[0,0,0];function bE(t,e,n){lu(t,e,n);let i=Pn(e),s=t/yt.talk.duration,r=kn*s,o=Rr(s,.04,.17,.4,.55),a=Rr(s,.5,.63,.8,.95),l=Math.sin(3*r);n.headPitch+=.05*Math.sin(4*r)-.04*(o+a),n.headYaw+=-.12*o+.12*a,n.elbows+=(.85-n.elbows)*Math.max(o,a),ri(e,n,-(i.sx+.19),i.sy-.1+.03*l,.36,Hs);for(let c=0;c<3;c++)n.handR[c]+=(Hs[c]-n.handR[c])*o;ri(e,n,i.sx+.19,i.sy-.12-.03*l,.34,Hs);for(let c=0;c<3;c++)n.handL[c]+=(Hs[c]-n.handL[c])*a;return n}var Gn=Vi();function ME(t,e,n){let i=t/yt.roll.duration,s=Rr(i,0,.15,.75,1),r=Pn(e);lu(0,e,Gn);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(Gn.hipsY,.45),n.lean=o(Gn.lean,1.3),n.twist=0,n.headYaw=0,n.headPitch=o(Gn.headPitch,.35),n.squash=o(1,.9),n.elbows=1;for(let a=-1;a<=1;a+=2){let l=Oo(n,a),c=Oo(Gn,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?n.footL:n.footR,d=a>0?Gn.footL:Gn.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return n}function wE(t,e,n){return ux(t,e,n),n.hipsY-=.12,n.lean+=.15,n}var SE=.25,TE=.85,EE=.82;function fx(t,e,n){let i=Pn(e),s=kn*t/yt.coverLow.duration;return n.hipsY=SE+.006*Math.sin(s),n.lean=TE+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=-.55+.03*Math.sin(2*s+1),n.squash=EE,n.elbows=1,Ct(n.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Ct(n.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Ct(n.footL,i.fx+.08,0,.12),Ct(n.footR,-i.fx-.08,0,.12),n}function px(t,e,n,i){let s=Pn(t),r=i/yt[n].duration,o=Math.sin(kn*r);return e.hipsY+=.012*Math.cos(2*kn*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function AE(t,e,n){return fx(0,e,n),px(e,n,"coverLowMove",t),n}function ap(t,e,n){let i=Pn(e),s=kn*t/yt.coverTall.duration;return n.hipsY=e.hipHeight-.012+.006*Math.sin(s),n.lean=.07+.01*Math.sin(s+.4),n.twist=.02*Math.sin(s+.6),n.headYaw=.05*Math.sin(s),n.headPitch=0+.02*Math.sin(2*s+1),n.squash=1+.006*Math.sin(s),n.elbows=1,ri(e,n,i.sx+.14,i.sy+0,.31,n.handL),ri(e,n,-i.sx-.14,i.sy+0,.31,n.handR),Ct(n.footL,i.fx,0,.015),Ct(n.footR,-i.fx,0,-.015),n}function RE(t,e,n){return ap(0,e,n),px(e,n,"coverTallMove",t),n}function CE(t,e,n){return dx(t*(yt.aim.duration/yt.coverPop.duration),e,n),n.hipsY-=.07,n.lean+=.06,n.footL[2]+=.04,n.footR[2]-=.04,n.footL[0]+=.04,n.footR[0]-=.04,n}function PE(t,e,n){let i=t/yt.vault.duration,s=Rr(i,0,.3,.7,1),r=Pn(e);lu(0,e,Gn);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(Gn.hipsY,e.hipHeight-.02),n.lean=o(Gn.lean,.55),n.twist=0,n.headYaw=0,n.headPitch=o(Gn.headPitch,-.25),n.squash=1,n.elbows=1;for(let a=-1;a<=1;a+=2){let l=Oo(n,a),c=Oo(Gn,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?n.footL:n.footR,d=a>0?Gn.footL:Gn.footR;h[0]=o(d[0],a*(r.fx+.04)),h[1]=o(d[1],.55),h[2]=o(d[2],.3)}return n}var IE=.17,LE=.5,DE=-.9,NE=.82;function OE(t,e,n){let i=Pn(e),s=kn*t/yt.coverBlindLow.duration;return n.hipsY=IE+.006*Math.sin(s),n.lean=LE+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=DE+.03*Math.sin(2*s+1),n.squash=NE,n.elbows=1,cl(e,n,e.shoulderR,Hs),Ct(n.handR,Hs[0]-.02,Hs[1]+.44+.008*Math.sin(s+.4),Hs[2]+.12),Ct(n.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Ct(n.footL,i.fx+.08,0,.12),Ct(n.footR,-i.fx-.08,0,.12),n}function cx(t,e,n,i){ap(t*(yt.coverTall.duration/yt.coverBlindTallL.duration),e,n);let s=Pn(e);return ri(e,n,i*(s.sx+.4),s.sy,.2,i>0?n.handL:n.handR),n}var kE=.3,UE=1.2,su=[.4,.62],ru=[-.6,-.36];function ou(t,e,n,i,s,r){if(t-=Math.floor(t),t<.5)return r[0]=s,r[1]=e+(n-e)*(t/.5),r;let o=(t-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=n+(e-n)*(o*o*(3-2*o)),r}function FE(t,e,n){let i=Pn(e),s=t/yt.crawl.duration,r=kn*s;return n.hipsY=kE+.012*Math.cos(2*r),n.lean=UE+.03*Math.cos(2*r),n.twist=.1*Math.sin(r),n.headYaw=-.1*Math.sin(r),n.headPitch=-.75,n.squash=1,n.elbows=1,ou(s,su[1],su[0],.16,.04,fn),Ct(n.handL,i.sx+.12,fn[0],fn[1]),ou(s+.5,su[1],su[0],.16,.04,fn),Ct(n.handR,-i.sx-.12,fn[0],fn[1]),ou(s,ru[1],ru[0],.16,0,fn),Ct(n.footR,-i.fx-.02,fn[0],fn[1]),ou(s+.5,ru[1],ru[0],.16,0,fn),Ct(n.footL,i.fx+.02,fn[0],fn[1]),n}function No(t,e,n){let i=e.length;if(t<=e[0][0])return Ct(n,e[0][1],e[0][2],e[0][3]);for(let r=0;r<i-1;r++){let o=e[r],a=e[r+1];if(t<a[0]){let l=Gi(o[0],a[0],t);return Ct(n,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l,o[3]+(a[3]-o[3])*l)}}let s=e[i-1];return Ct(n,s[1],s[2],s[3])}var BE=.4,zE=.9;function HE(t,e,n){let i=Pn(e),s=t/yt.revive.duration,r=kn*s;return n.hipsY=BE+.012*Math.sin(2*r),n.lean=zE+.05*Math.sin(2*r),n.twist=.04*Math.sin(r),n.headYaw=.04*Math.sin(r),n.headPitch=-.55,n.squash=1,n.elbows=1,Ct(n.handL,i.sx-.06,.37-.06*Math.sin(r),.64),Ct(n.handR,-i.sx+.06,.37+.06*Math.sin(r),.64),Ct(n.footL,i.fx+.06,0,-.32),Ct(n.footR,-i.fx-.06,0,-.32),n}var GE=[[0,-.3,1,.3],[.17,-.29,1.08,.08],[.33,-.23,1.17,.5],[.55,-.23,1.17,.5],[1,-.3,1,.3]],VE=[[0,.1,0,0],[.17,-.05,0,0],[.33,.15,0,0],[.55,.15,0,0],[1,.1,0,0]],WE=[[0,0,0,0],[.17,-.3,0,0],[.33,.3,0,0],[.55,.25,0,0],[1,0,0,0]],Cn=[0,0,0];function XE(t,e,n){let i=Pn(e),s=t/yt.bash.duration;return No(s,VE,Cn),n.lean=Cn[0],No(s,WE,Cn),n.twist=Cn[0],n.hipsY=e.hipHeight-.09-.03*Rr(s,.2,.33,.55,.9),n.headYaw=-.5*n.twist,n.headPitch=-.1,n.squash=1,n.elbows=1,No(s,GE,Cn),ri(e,n,Cn[0],Cn[1],Cn[2],n.handR),ri(e,n,i.sx+.14,i.sy-.1,.32,n.handL),Ct(n.footL,i.fx+.04,0,-.14),Ct(n.footR,-i.fx-.04,0,.2),n}var YE=[[0,-.3,1,.3],[.3,-.31,1.38,-.12],[.4,-.22,1.6,.04],[.6,-.2,1.22,.5],[.9,-.15,.98,.46],[1,-.3,1,.3]],qE=[[0,.1,0,0],[.3,-.2,0,0],[.4,-.28,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,.1,0,0]],$E=[[0,-.1,0,0],[.3,-.45,0,0],[.4,-.45,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,-.1,0,0]];function ZE(t,e,n){let i=Pn(e),s=t/yt.throw.duration;return No(s,qE,Cn),n.lean=Cn[0],No(s,$E,Cn),n.twist=Cn[0],n.hipsY=e.hipHeight-.07-.03*Rr(s,.4,.6,.9,1),n.headYaw=-.4*n.twist,n.headPitch=-.05,n.squash=1,n.elbows=1,No(s,YE,Cn),ri(e,n,Cn[0],Cn[1],Cn[2],n.handR),ri(e,n,i.sx+.2,i.sy-.12-.08*Gi(.5,.9,s),.34-.12*Gi(.5,.9,s),n.handL),Ct(n.footL,i.fx+.04,0,.1+.06*Gi(.4,.7,s)),Ct(n.footR,-i.fx-.04,0,-.16),n}var KE=.05;function en(t,e,n,i=KE){return Object.freeze({duration:t,loop:e,ease:i,sample:(s,r,o=Vi())=>n(s,r,o)})}var yt=Object.freeze({idle:en(2.4,!0,lu),run:en(.56,!0,ux,.008),aim:en(1.6,!0,dx),flinch:en(op,!1,_E),talk:en(2.4,!0,bE),roll:en(.55,!1,ME,.02),sprint:en(.56,!0,wE,.008),coverLow:en(2.4,!0,fx),coverLowMove:en(.5,!0,AE),coverTall:en(2.4,!0,ap),coverTallMove:en(.5,!0,RE),coverPop:en(1.6,!0,CE),vault:en(.5,!1,PE,.02),coverBlindLow:en(1.6,!0,OE),coverBlindTallL:en(1.6,!0,(t,e,n)=>cx(t,e,n,1)),coverBlindTallR:en(1.6,!0,(t,e,n)=>cx(t,e,n,-1)),crawl:en(1,!0,FE),revive:en(.5,!0,HE),bash:en(.45,!1,XE,.02),throw:en(.5,!1,ZE,.02)}),Wi=au/yt.run.duration;function hl(t,e,n,i){let s=Object.prototype.hasOwnProperty.call(yt,t)?yt[t]:null;if(!s)throw new Error(`unknown clip: ${t}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,n,i||Vi())}function cu(t,e,n,i=Vi()){if(!(n>0))return ax(t,i);if(n>=1)return ax(e,i);let s=1-n;i.hipsY=t.hipsY*s+e.hipsY*n,i.lean=t.lean*s+e.lean*n,i.twist=t.twist*s+e.twist*n,i.headYaw=t.headYaw*s+e.headYaw*n,i.headPitch=t.headPitch*s+e.headPitch*n,i.squash=t.squash*s+e.squash*n,i.elbows=t.elbows*s+e.elbows*n;for(let r=0;r<4;r++){let o=t[ll[r]],a=e[ll[r]],l=i[ll[r]];l[0]=o[0]*s+a[0]*n,l[1]=o[1]*s+a[1]*n,l[2]=o[2]*s+a[2]*n}return i}var JE=.05,_s=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],ul=["handL","handR","footL","footR"],lp=_s.length+ul.length*3,ko=[.35,-.2,-.8],cp=[.75,-.85,-.15];function jt(t,e){if(t.deleteAttribute("uv"),!t.index){let r=t.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;t.setIndex(o)}let n=new et(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new Et(s,3)),t}var jE=new Mt,oi=(t,e,n,i,s=0,r=0,o=0,a=1,l=1,c=1)=>t.applyMatrix4(jE.compose(new B(e,n,i),new Ln().setFromEuler(new zn(s,r,o)),new B(a,l,c)));function Cr(t=20,e=14){let n=new $t(1,t,e);return n.deleteAttribute("uv"),n.deleteAttribute("normal"),Yg(n)}function hp(t,e,n){let i=Cr(e,n),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)t(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function uu(t,e,n){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2],o=Math.hypot(i,s,r),a=new Jt(n,n,o,6,1),l=new Ln().setFromUnitVectors(new B(0,1,0),new B(i/o,s/o,r/o));return a.applyMatrix4(new Mt().compose(new B((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),l,new B(1,1,1))),a}function du(t,e){let n=zt(t,!1);if(!n)throw new Error(`rig: could not merge the ${e} parts`);Kn(n),n.computeBoundingSphere();let i=new at(n,Pt({color:"#ffffff",vertexColors:!0}));return i.name=e,yn(i),i}function up(t,e,n,i,s){let r=2/t.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*t.rx,s[1]=o(n)*t.ry;let a=o(i)*t.rz;return a>t.flatZ&&(a=t.flatZ+(a-t.flatZ)*t.flatK),s[2]=a,s}function QE(t){let e=t.torso,n=t.colors,i=t.outfit,s=(h,d)=>{let u=new Ga(h.map(([f,p])=>new Xe(f,p)),22);return u.scale(1,1,e.depth),jt(u,d)},r=[s(e.pants,n.pants),s(e.shirt,n.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let d=e.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=t.shoulderL[1]-t.hipHeight;for(let h of[-1,1]){let d=Cr(14,10);oi(d,h*Math.abs(t.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),d.computeVertexNormals(),r.push(jt(d,n.shirt))}if(i.collar){let h=new br(.1,.03,8,20);oi(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(jt(h,n.collar))}if(i.logo){let u=new Jt(.03,.03,.01,12);oi(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(jt(u,n.logo))}if(i.lanyard){let d=l(0,.15)+.012;for(let p of[-1,1]){let g=[p*.075,o-.03,.085],m=[p*.05,.34,l(.05,.34)+.014],x=[p*.014,.15+.05,l(.014,.15+.05)+.01];r.push(jt(uu(g,m,.008),n.lanyard),jt(uu(m,x,.008),n.lanyard))}let u=new vt(.075,.1,.014);oi(u,0,.15,d,-.05,0,.04);let f=new vt(.077,.026,.016);oi(f,0,.15+.028,d,-.05,0,.04),r.push(jt(u,n.badge),jt(f,n.badgeStripe))}return du(r,"torso")}function e2(t){let e=t.head,n=t.hair,i=t.colors,s=t.outfit,r=[],o=hp((a,l,c,h)=>up(e,a,l,c,h),40,28);r.push(jt(o,i.skin),jt(t2(e,n),i.hair));for(let a of[-1,1]){let l=Cr(12,8);oi(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(jt(l,i.skin))}{let a=t.face,l=(a.eyeY+a.mouthY)/2-.005,c=Cr(12,8);oi(c,0,l,n2(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(jt(c,i.skin))}if(s.headset){let a=e.ry+n.thickness+.03,l=new Nn;l.getPoint=(g,m=new B)=>m.set(Math.cos(Math.PI*g)*(e.rx+n.thickness+.012),Math.sin(Math.PI*g)*a,0);let c=new Va(l,24,.014,6,!1);oi(c,0,0,-.03,-.12,0,0),r.push(jt(c,i.headset));for(let g of[-1,1]){let m=new Jt(.055,.06,.05,14);oi(m,g*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(jt(m,i.headset))}let h=t.face,d=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(jt(uu(d,u,.009),i.headset),jt(uu(u,f,.009),i.headset));let p=Cr(10,8);oi(p,f[0],f[1],f[2],0,0,0,.022,.02,.022),p.computeVertexNormals(),r.push(jt(p,i.mic))}return du(r,"headMesh")}var Gs=48,hu=12;function t2(t,e){let n=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,i=[0,0,0],s=Fh.smoothstep,r=[],o=(u,f,p)=>{let g=Math.sin(u)*Math.sin(f),m=Math.cos(u),x=Math.sin(u)*Math.cos(f);up(t,g,m,x,i);let y=i[0]/(t.rx*t.rx),w=i[1]/(t.ry*t.ry),b=i[2]/(t.rz*t.rz),M=Math.hypot(y,w,b)||1;y/=M,w/=M,b/=M;let _=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(x+.3,0),v=e.quiff?e.lift*Math.max(x,0)*s(i[1],.12,.26)*(1-.5*g):0,S=e.back*Math.max(-x,0)*s(i[1],-.15,.1),P=p?-.01:e.thickness*(1-.55*Math.min(_,1))+v+S;r.push(i[0]+y*P,i[1]+w*P,i[2]+b*P)},a=u=>{let f=0,p=Math.PI;for(let g=0;g<40;g++){let m=(f+p)/2,x=Math.sin(m)*Math.sin(u),y=Math.sin(m)*Math.cos(u);up(t,x,Math.cos(m),y,i),i[1]>n(x,y)?f=m:p=m}return f};o(0,0,!1);let l=[];for(let u=0;u<Gs;u++)l.push(a(u/Gs*Math.PI*2));for(let u=1;u<=hu+1;u++)for(let f=0;f<Gs;f++){let p=f/Gs*Math.PI*2,g=u>hu;o(g?l[f]+.03:l[f]*(u/hu),p,g)}let c=(u,f)=>1+(u-1)*Gs+f%Gs,h=[];for(let u=0;u<Gs;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=hu;u++)for(let f=0;f<Gs;f++){let p=c(u,f),g=c(u,f+1),m=c(u+1,f),x=c(u+1,f+1);h.push(p,m,x,p,x,g)}let d=new Lt;return d.setAttribute("position",new xt(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function n2(t,e,n){let i=1-Math.pow(Math.abs(e/t.rx),t.power)-Math.pow(Math.abs(n/t.ry),t.power),s=i>0?t.rz*Math.pow(i,1/t.power):0;return s>t.flatZ?t.flatZ+(s-t.flatZ)*t.flatK:s}function mx(t,e){let n=t.hand.radius,i=t.colors,s=Cr(14,10);oi(s,0,n*.75,0,0,0,0,n*.78,n*1.1,n*.95),s.computeVertexNormals();let r=Cr(10,8);return oi(r,n*.3,n*.45,e*n*.75,e*-.6,0,.3,n*.34,n*.55,n*.34),r.computeVertexNormals(),du([jt(s,i.skin),jt(r,i.skin)],e>0?"handL":"handR")}function gx(t,e){let n=t.shoe,i=t.colors,s=n.width/2,r=n.length/2,o=n.length*.18,a=.03,l=hp((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,n.height*.55+d*n.height*.6-Math.max(u,0)*n.height*.25),f[2]=o+u*r*.96},20,12),c=hp((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return du([jt(l,i.shoe),jt(c,i.sole)],e>0?"footL":"footR")}function Xi(t){let e=new mt;e.name=t.name||"character";let n=new mt;n.name="body",e.add(n);let i=new mt;i.name="hips",i.rotation.order="YXZ";let s=QE(t);i.add(s);let r=new mt;r.name="head",r.rotation.order="YXZ",r.position.set(0,t.neckY-t.hipHeight,0),i.add(r);let o=e2(t);o.position.y=t.head.centerY,r.add(o);let a=ox({...t.face,lidColor:t.colors.skin});a.group.position.y=t.head.centerY,r.add(a.group),n.add(i);let l=[mx(t,1),mx(t,-1)],c=[gx(t,1),gx(t,-1)],h=[0,1].map(()=>tp({radius:t.armRadius,color:t.colors.skin})),d=[0,1].map(()=>tp({radius:t.legRadius,color:t.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",n.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=Jh({rx:.45,rz:.38,opacity:.55});e.add(u);let f=Vi(),p=Vi(),g=[];for(let Z=0;Z<lp;Z++)g.push({x:0,v:0});let m=!1,x=JE,y=(Z,Y)=>Y<_s.length?Z[_s[Y]]:Z[ul[(Y-_s.length)/3|0]][(Y-_s.length)%3];function w(Z,Y,ye){Y<_s.length?Z[_s[Y]]=ye:Z[ul[(Y-_s.length)/3|0]][(Y-_s.length)%3]=ye}function b(Z,Y){Y>=0&&(x=Y),f.hipsY=Z.hipsY,f.lean=Z.lean,f.twist=Z.twist,f.headYaw=Z.headYaw,f.headPitch=Z.headPitch,f.squash=Z.squash,f.elbows=Z.elbows>=0?Z.elbows:0;for(let ye=0;ye<4;ye++){let J=Z[ul[ye]],K=f[ul[ye]];K[0]=J[0],K[1]=J[1],K[2]=J[2]}if(!m){m=!0;for(let ye=0;ye<lp;ye++)g[ye].x=y(f,ye),g[ye].v=0}}let M=[0,0,0],_=[0,0,0],v=[0,0,0],S=[0,0,0],P={mid:[0,0,0],end:[0,0,0],stretch:1},R=new B,D=new B,T=new B,L=new Mt,E=t.armLength/2,N=t.legLength/2,U=t.ankleHeight;function G(Z,Y,ye){let J=Math.cos(p.twist),K=Math.sin(p.twist);S[0]=Z*J+ye*K,S[1]=Y,S[2]=-Z*K+ye*J}function te(){let Z=p.squash>.2?p.squash:.2,Y=1/Math.sqrt(Z);n.scale.set(Y,Z,Y),i.position.set(0,p.hipsY,0),i.rotation.set(p.lean,p.twist,0),r.rotation.set(p.headPitch,p.headYaw,0);for(let ye=0;ye<2;ye++){let J=ye===0?1:-1;cl(t,p,ye===0?t.shoulderL:t.shoulderR,M);let K=p.elbows<0?0:p.elbows>1?1:p.elbows;G(J*(ko[0]+(cp[0]-ko[0])*K),ko[1]+(cp[1]-ko[1])*K,ko[2]+(cp[2]-ko[2])*K),ep(M,ye===0?p.handL:p.handR,E,E,S,P),h[ye].set(M,P.mid,P.end,P.stretch);let fe=l[ye];fe.position.set(P.end[0],P.end[1],P.end[2]),R.set(P.end[0]-P.mid[0],P.end[1]-P.mid[1],P.end[2]-P.mid[2]),R.lengthSq()<1e-10&&R.set(0,-1,0),R.normalize(),D.set(-J*Math.cos(p.twist),0,J*Math.sin(p.twist)),D.addScaledVector(R,-D.dot(R)),D.lengthSq()<1e-4&&D.set(0,0,1).addScaledVector(R,-R.z),D.normalize(),T.crossVectors(D,R),L.makeBasis(D,R,T),fe.quaternion.setFromRotationMatrix(L),cl(t,p,ye===0?t.hipL:t.hipR,_);let Ue=ye===0?p.footL:p.footR;v[0]=Ue[0],v[1]=Ue[1]+U,v[2]=Ue[2],G(J*.15,0,1),ep(_,v,N,N,S,P),d[ye].set(_,P.mid,P.end,P.stretch);let W=c[ye];W.position.set(P.end[0],P.end[1]-U,P.end[2]),W.rotation.set(Math.min(Math.max(P.end[1]-U,0),.3)*1.1,p.twist*.3,0)}}function X(Z){if(m)for(let Y=0;Y<lp;Y++)On(g[Y],y(f,Y),x,Z),w(p,Y,g[Y].x);te(),a.update(Z)}hl("idle",0,t,p),te();function ne(){e.traverse(Z=>{!Z.isMesh||Z.userData.isOutline||(Z.geometry.dispose(),Z!==u&&Z.material.dispose())}),e.removeFromParent()}return{root:e,spec:t,face:a,setPose:b,update:X,dispose:ne,shadow:u}}var i2=.15,s2=.03,xx=t=>t<=0?0:t>=1?1:t*t*(3-2*t);function Yi(t){let e=t.spec,n="idle",i=0,s="idle",r=0,o=0,a=yt[n].ease,l=Vi(),c=Vi(),h=hl(n,0,e);cu(h,h,1,l);function d(p,{fade:g,at:m}={}){Object.prototype.hasOwnProperty.call(yt,p)&&(p===n&&yt[p].loop||(p==="flinch"&&n!=="flinch"&&(s=n),cu(h,h,1,l),a=u(),r=g===void 0?p==="flinch"?s2:i2:Math.max(g,0),o=0,n=p,i=Number.isFinite(m)&&m>0?m:0,t.face.setTalking(p==="talk")))}function u(){let p=r>0?xx(o/r):1;return a+(yt[n].ease-a)*p}function f(p,g=p){let m=yt[n];if(i+=p,o+=g,m.loop)i>=m.duration&&(i-=m.duration*Math.floor(i/m.duration));else if(i>=m.duration)return d(s),f(0);hl(n,i,e,c),cu(l,c,r>0?xx(o/r):1,h),t.setPose(h,u())}return{play:d,update:f,current:()=>n}}function dl(t,e,n){let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*n)<<o}return"#"+r.toString(16).padStart(6,"0")}function fu(t){for(let e of Object.values(t))e&&typeof e=="object"&&fu(e);return Object.freeze(t)}var dp=z.glorpPurple,vx=fu({associate:{shirt:dp,collar:dl(dp,z.ink,.25),logo:z.gel,pants:dl(z.planet,z.ink,.3),skin:z.daleSkin,hair:z.daleHair,shoe:dl(z.ink,dp,.3),sole:z.cream,lanyard:z.hotPink,badge:z.cream,badgeStripe:z.teal,headset:dl(z.ink,z.lilac,.25),mic:z.hotPink},trainer:{shirt:z.planet,collar:z.planet,logo:z.gel,pants:dl(z.teal,z.ink,.45),skin:z.daleSkin,hair:z.daleHair,shoe:z.cream,sole:z.ink,lanyard:z.hotPink,badge:z.cream,badgeStripe:z.teal,headset:z.ink,mic:z.hotPink}}),Nt=fu({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:vx.associate,outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}}),yx=fu({...Nt,name:"trainer",colors:vx.trainer,torso:{...Nt.torso,sleeve:.02},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Nt.face,seed:11}});var r2=1.5,o2=8,a2=-.2,l2=1.3,_x=.6,c2=Math.atan2(1.3,-4),h2=new B(-.45,.22,-1).applyEuler(new zn(-.2,.68,0)).toArray(),bx=10,u2=.8,d2=.05,f2=["idle","run","aim","flinch","talk"],fl=Object.keys(Ar),Mx=(t,e,n)=>Math.min(n,Math.max(e,t));function p2(t,e,n,i=[0,0,0]){return i[0]=Math.sin(t)*Math.cos(e)*n,i[1]=Math.sin(e)*n,i[2]=Math.cos(t)*Math.cos(e)*n,i}function m2(t,e,n=q.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[t[0]+r*n.right-i*n.back,t[1]+n.up,t[2]+o*n.right-s*n.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function wx({canvas:t,gl:e}){let n=qh(t,e),i=n.renderer,s=Yh(t),r=document.getElementById("cr-readout"),o=new pr,a=new xn(q.camera.fov,1,.1,100),l=$h({planetDir:h2});o.add(l.mesh);let c=nx();o.add(c.group);let h=[];function d(W,_e,De){let Se=Xi(De===void 0?Nt:{...Nt,face:{...Nt.face,seed:De}});Se.root.position.set(W,0,_e),Se.root.rotation.y=_x,o.add(Se.root);let ge=Yi(Se),Ie={rig:Se,anim:ge};return h.push(Ie),Ie}let u=d(c.spawn[0],c.spawn[2]),f=[],p=!1,g=0,m=!0,x=!1,y=.685,w=.1,b=4.6,M=!1,_=new B(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),v=[0,0,0];function S(W){if(!(!f2.includes(W)&&!Object.prototype.hasOwnProperty.call(yt,W))){u.anim.play(W);for(let _e of f)_e.anim.play(p?"run":W)}}function P(W){let _e=fl.indexOf(W);if(!(_e<0)){g=_e;for(let De of h)De.rig.face.setExpression(W)}}function R(W){m=!!W,qf(o,m)}function D(W){x=!!W,u.rig.root.rotation.y=x?c2:_x}function T(W){if(W=!!W,W!==p)if(p=W,W){let _e=c.spawn[2]+2.4;for(let De=0;De<bx;De++){let Se=c.spawn[0]+(De-(bx-1)/2)*u2,ge=d(Se,_e,10+De);ge.anim.play("run"),ge.rig.face.setExpression(fl[g]),f.push(ge)}qf(o,m)}else{for(let _e of f)_e.rig.dispose(),h.splice(h.indexOf(_e),1);f=[]}}function L(){let W=n.resize();a.aspect=W.aspect,a.updateProjectionMatrix()}L(),window.addEventListener("resize",L),t.addEventListener("mousedown",W=>{W.button===0&&(M=!0)}),window.addEventListener("mouseup",()=>{M=!1}),window.addEventListener("mousemove",W=>{M&&!s.isLocked()&&E(W.movementX||0,W.movementY||0,.006)}),t.addEventListener("wheel",W=>{b=Mx(b*Math.exp(W.deltaY*.001),r2,o2)},{passive:!0});function E(W,_e,De){y-=W*De,w=Mx(w+_e*De,a2,l2)}window.addEventListener("keydown",W=>{W.repeat||(W.code==="Digit4"?S("flinch"):W.code==="Digit5"?S("talk"):W.code==="KeyO"?R(!m):W.code==="KeyP"?T(!p):W.code==="KeyL"?s.requestLock():W.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let N=0,U=0,G=0,te=0,X=0,ne=0,Z=null,Y=0;window.__cr.stats=()=>({fps:N,ms:U,calls:X,tris:ne,scale:n.scale(),characters:h.length}),window.__cr.anim=S,window.__cr.orbit=(W,_e,De)=>{y=W,w=_e,De&&(b=De)},window.__cr.expression=P,window.__cr.perf=T,window.__cr.gameCam=D,window.__cr.outlines=R;function ye(W){W.pressed.weapon1&&S("idle"),W.pressed.weapon2&&S("run"),W.pressed.weapon3&&S("aim"),W.pressed.interact&&P(fl[(g+1)%fl.length]),W.pressed.grenade&&D(!x)}function J(){if(x){let W=m2([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(W.pos),a.lookAt(W.look[0],W.look[1],W.look[2])}else p2(y,w,b,v),a.position.set(_.x+v[0],_.y+v[1],_.z+v[2]),a.lookAt(_)}let K=W=>W.toFixed(2);function fe(){let W=Z?Object.keys(Z.held).filter(Se=>Z.held[Se]).join(" "):"",_e=s.padStatus(),De=Z&&_e!=="none"&&_e!=="unrecognised controller"?`Gamepad: ${_e}
  move ${K(Z.moveX)}, ${K(Z.moveY)}  look ${K(Z.lookX)}, ${K(Z.lookY)}
  held: ${W||"nothing"}`:`Gamepad: ${_e}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${fl[g]}   camera: ${x?"game":"orbit"}   outlines: ${m?"on":"off"}`,`${Math.round(N)} fps   ${K(U)} ms   scale ${n.scale()}`,`${X} draw calls   ${ne} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${Z?Math.round(Z.lookDX):0}, ${Z?Math.round(Z.lookDY):0}`,De].join(`
`)}let Ue=Xh({step(){},render(W,_e){let De=Math.min(_e,d2);Z=s.poll(),ye(Z),s.isLocked()&&!x&&E(Z.lookDX,Z.lookDY,.003),x||E(Z.lookX*600*De,Z.lookY*600*De,.004),l.update(performance.now()/1e3),c.update(De);for(let Se of h)Se.anim.update(De),Se.rig.update(De);J(),i.render(o,a),X=i.info.render.calls,ne=i.info.render.triangles,G++,te+=_e,te>=1&&(N=G/te,U=te/G*1e3,G=0,te=0),Y+=_e,Y>=.1&&(Y=0,fe()),n.frameDone(_e*1e3)}});J(),i.render(o,a),X=i.info.render.calls,ne=i.info.render.triangles,fe(),Ue.start()}function pu(){let t=!1,e=0,n=.18;return{update(i,s,r,o){return n=o,t?(e+=r,i?!1:(t=!1,e<=o)):s?i?(t=!0,e=r,!1):!0:!1},holding(){return t&&e>n},reset(){t=!1,e=0}}}function rt(t,e,n="wall",i=void 0){let s={min:Object.freeze([...t]),max:Object.freeze([...e]),kind:n};return i&&(s.prop=i),Object.freeze(s)}var fp=1e-9;function _n(t,e,n,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=t.filter(m=>m.max[1]>o&&m.min[1]<a),c=Math.hypot(n[0],n[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=n[0]/h,u=n[2]/h,f=!1,p=0,g=0;for(let m=0;m<h;m++){let x=r[0],y=r[2];r[0]+=d,r[2]+=u;let w=!1;for(let b=0;b<5;b++){let M=null,_=fp;for(let v of l){let S=Math.max(v.min[0],Math.min(r[0],v.max[0])),P=Math.max(v.min[2],Math.min(r[2],v.max[2])),R=r[0]-S,D=r[2]-P,T=Math.hypot(R,D),L,E,N;if(T>fp){if(T>=i)continue;L=i-T,E=R/T,N=D/T}else{let U=[[r[0]-v.min[0],-1,0],[v.max[0]-r[0],1,0],[r[2]-v.min[2],0,-1],[v.max[2]-r[2],0,1]],G=U[0];for(let te of U)te[0]<G[0]&&(G=te);L=G[0]+i,E=G[1],N=G[2]}L>_&&(_=L,M=[E,N])}if(!M){w=!0;break}if(b===4)break;r[0]+=M[0]*_,r[2]+=M[1]*_,f=!0,p=M[0],g=M[1]}w||(r[0]=x,r[2]=y,f=!0)}return f||(r[0]=e[0]+n[0],r[2]=e[2]+n[2]),{pos:r,hit:f,normal:[p,0,g]}}function ai(t,e,n,i){let s=1,r=[n[0]-e[0],n[1]-e[1],n[2]-e[2]];for(let o of t){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<fp)(e[h]<d||e[h]>u)&&(c=!1);else{let f=(d-e[h])/r[h],p=(u-e[h])/r[h];if(f>p){let g=f;f=p,p=g}f>a&&(a=f),p<l&&(l=p),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function Uo(t,e,n=0){for(let i of t)if(e[0]>=i.min[0]-n&&e[0]<=i.max[0]+n&&e[1]>=i.min[1]-n&&e[1]<=i.max[1]+n&&e[2]>=i.min[2]-n&&e[2]<=i.max[2]+n)return!0;return!1}var pp=["fov","right","up","back"],mu=Math.PI*2,g2=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),Ex=t=>t!=="normal"&&g2.includes(t);function Sx(t,e,n={}){let i=Ex(e)&&t[e]&&typeof t[e]=="object"?t[e]:null;for(let s of pp)n[s]=i&&i[s]!==void 0?i[s]:t[s];return n}function Tx(t,e){let n=Ex(e)?t[e]:null;return n&&typeof n=="object"&&n.shakeWeight>0?n.shakeWeight:0}function Ax(t,e,n,i=0){return e?t>=n:t>=n+i}function Rx({tuning:t=q.camera,look:e=q.look}={}){let n={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],c={x:0,v:0},h=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],d={},u=[0,0,0],f=[0,0,0],p=[0,0,0],g=[0,0,0],m=[0,0,1],x={pos:g,dir:m,fov:70},y={on:!1,t:0,p:[0,0,0]},w=1,b=0,M=!1;return{yaw:0,pitch:0,look(v,S,P,R,D,T,L=1){(v||S||P||R)&&(y.on=!1);let E=T?e.aimScale:1,N=e.invertY?-1:1;this.yaw-=v*e.mouse*E,this.pitch-=S*e.mouse*E*N;let U=e.pad,G=E*L;P&&(this.yaw-=Math.sign(P)*Math.abs(P)**U.expo*U.yawRate*G*D),R&&(this.pitch-=Math.sign(R)*Math.abs(R)**U.expo*U.pitchRate*G*D*N),this.pitch<t.pitchMin&&(this.pitch=t.pitchMin),this.pitch>t.pitchMax&&(this.pitch=t.pitchMax)},bump(v=1){let S=t.bump;if(!S||!(S.amount>0)||!(v>0))return;s.x=Math.min(s.x+S.amount*v,2*S.amount);let P=t.slamShake;P&&P.amount>0&&P.time>0&&(o.t=P.time,o.amp=P.amount*v)},dip(v){Number.isFinite(v)&&v>0&&(r.x=Math.min(r.x+v,.1))},kick(v,S=0){let P=t.recoil?t.recoil.max:0;if(!(P>0))return;let R=(D,T)=>Math.max(-P,Math.min(P,D+(Number.isFinite(T)?T:0)));a.p.x=Math.max(0,R(a.p.x,v)),a.y.x=R(a.y.x,S)},hold(v){if(!(t.holdTime>0)){y.on=!1;return}y.on=!0,y.t=t.holdTime,y.p[0]=v[0],y.p[1]=v[1],y.p[2]=v[2]},holding(){return y.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(v,S,P="normal",R=1){S!==void 0&&(this.yaw=S),Sx(t,P,d);for(let D of pp)n[D].x=d[D],n[D].v=0;i.x=R,i.v=0,c.x=Tx(t,P),c.v=0;for(let D=0;D<3;D++)h[D].x=v[D],h[D].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,w=1,M=!0,y.on=!1},update(v,{target:S,mode:P="normal",side:R=1},D){M||this.snap(S,this.yaw,P,R),v>0||(v=0),b+=v,Sx(t,P,d);for(let Z of pp)On(n[Z],d[Z],t.blendHalfLife,v);On(c,Tx(t,P),t.blendHalfLife,v),On(i,R,t.sideHalfLife,v);for(let Z=0;Z<3;Z++)On(h[Z],S[Z],t.followHalfLife,v);On(s,0,t.bump?t.bump.halfLife:0,v),On(r,0,t.bump?t.bump.halfLife:0,v);let T=t.recoil?t.recoil.halfLife:0;On(a.p,0,T,v),On(a.y,0,T,v);let L=Math.PI/180,E=t.probeRadius,N=n.back.x,U=1,G=0,te=Z=>{let Y=this.yaw+a.y.x*L,ye=Math.max(t.pitchMin,Math.min(t.pitchMax,this.pitch+a.p.x*L));G=Math.sin(Y),U=Math.cos(Y);let J=Math.sin(ye),K=Math.cos(ye);u[0]=h[0].x,u[1]=h[1].x+n.up.x,u[2]=h[2].x,l[0]=S[0],l[1]=S[1]+n.up.x,l[2]=S[2];let fe=ai(D,l,u,E);if(fe<1)for(let Ie=0;Ie<3;Ie++)u[Ie]=l[Ie]+(u[Ie]-l[Ie])*fe;let Ue=n.right.x*i.x;f[0]=u[0]-U*Ue,f[1]=u[1],f[2]=u[2]+G*Ue;let W=ai(D,u,f,E);for(let Ie=0;Ie<3;Ie++)f[Ie]=u[Ie]+(f[Ie]-u[Ie])*W;m[0]=G*K,m[1]=J,m[2]=U*K;for(let Ie=0;Ie<3;Ie++)p[Ie]=f[Ie]-m[Ie]*N;let _e=ai(D,f,p,E),De=N>1e-6?Math.max(t.minBack/N,_e):1;De>1&&(De=1),De<w?w=De:Z&&(w+=(De-w)*(t.wallReturnHalfLife>0?1-Math.pow(2,-v/t.wallReturnHalfLife):1));let Se=N*w-s.x;for(let Ie=0;Ie<3;Ie++)g[Ie]=f[Ie]-m[Ie]*Se;let ge=ai(D,u,g,E);if(ge<1)for(let Ie=0;Ie<3;Ie++)g[Ie]=u[Ie]+(g[Ie]-u[Ie])*ge};if(te(!0),y.on)if(y.t-=v,y.t<=0||P!=="aim")y.on=!1;else for(let Z=0;Z<3;Z++){let Y=y.p[0]-g[0],ye=y.p[1]-g[1],J=y.p[2]-g[2],K=Math.hypot(Y,ye,J);if(K<.5)break;this.yaw=Math.atan2(Y,J)-a.y.x*L,this.pitch=Math.max(t.pitchMin,Math.min(t.pitchMax,Math.asin(ye/K)-a.p.x*L)),te(!1)}let X=t.shake;if(X&&X.amp&&c.x>0){let Z=X.amp*(c.x>1?1:c.x),Y=Math.sin(mu*X.hz*b)*Z,ye=Math.sin(mu*X.hz*1.3*b+1)*Z,J=-U,K=G;g[0]+=J*Y-K*m[1]*ye,g[1]+=(K*m[0]-J*m[2])*ye,g[2]+=K*Y+J*m[1]*ye}g[1]-=r.x;let ne=t.slamShake;if(o.t>0&&ne&&ne.time>0){o.t=Math.max(0,o.t-v);let Z=o.t/ne.time,Y=o.amp*Z*Z,ye=Math.sin(mu*ne.hz*o.t)*Y,J=Math.sin(mu*ne.hz*1.27*o.t+2)*Y,K=-U,fe=G;g[0]+=K*ye-fe*m[1]*J,g[1]+=(fe*m[0]-K*m[2])*J,g[2]+=fe*ye+K*m[1]*J}return x.fov=n.fov.x,x}}}var pn=[z.hotPink,z.playerOrange,z.glorpPurple,z.tealLight,z.lilac];function x2(t){if(t.prop)return t.prop;let e=t.max[0]-t.min[0],n=t.max[2]-t.min[2],i=t.max[1]-t.min[1],s=Math.max(e,n),r=Math.min(e,n);return t.kind==="pillar"?"pillar":t.kind==="low"?r<.7&&s>=1.8?"planter":"counter":t.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function v2(){let t=[],e=(n,i)=>{let s=new et(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new Et(o,3)),n};return{list:t,box(n,i,s){let r=new vt(i[0]-n[0],i[1]-n[1],i[2]-n[2]);r.translate((n[0]+i[0])/2,(n[1]+i[1])/2,(n[2]+i[2])/2),t.push(e(r,s))},cyl(n,i,s,r,o,a,l="y"){let c=new Jt(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(n,i,s),t.push(e(c,a))},ball(n,i,s,r,o){let a=new $t(r,7,5);a.translate(n,i,s),t.push(e(a,o))}}}var Ti=(t,e,n=t.min[1],i=t.max[1])=>[[t.min[0]-e,n,t.min[2]-e],[t.max[0]+e,i,t.max[2]+e]];function y2(t,e,n,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],d=.015,u=.06;o?(t.box([a+s,n,l+d],[c-s,i,l+u],r),t.box([a+s,n,h-u],[c-s,i,h-d],r)):(t.box([a+d,n,l+s],[a+u,i,h-s],r),t.box([c-u,n,l+s],[c-d,i,h-s],r))}function Ei(t,e){let n=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=n>=i,r=s?n:i,o=s?i:n,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,d,u,f,p,g){let m=a(c,d),x=a(h,u),y=l(c,d),w=l(h,u);t.box([Math.min(m,x),f,Math.min(y,w)],[Math.max(m,x),p,Math.max(y,w)],g)},cyl(c,h,d,u,f,p,g="y"){let m=g==="y"?"y":g==="u"?s?"x":"z":s?"z":"x";t.cyl(a(c,h),d,l(c,h),u,f,p,m)}}}function _2(t,e){let n=Ei(t,e),{len:i,dep:s}=n,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;n.slab(.03,i-.03,.04,s-.04,0,.5,z.shadowTint);for(let l=0;l<=o;l++){let c=l*a;n.slab(c,c+r,.06,s-.06,0,e.max[1],z.lilac),n.slab(c+.03,c+r-.03,0,.07,.8,.94,z.hotPink),n.slab(c+.03,c+r-.03,s-.07,s,.8,.94,z.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;n.slab(c,h,s/2-.03,s/2+.03,.5,.94,z.tealLight),n.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,z.cream)}}function b2(t,e,n){let i=Ei(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,z.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,z.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,z.cream),i.slab(.15,s-.15,0,.06,.25,.6,z.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,z.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let d=(h+.5+c%2*.25)/l*s,u=a===1?r/2:r*(.3+c*.4);i.cyl(d,u,(.82+o-.02)/2,.14,o-.84,pn[(h+c*2+n)%pn.length]),i.cyl(d,u,o-.01,.15,.02,z.cream)}}function M2(t,e,n){n%3===1?b2(t,e,n):_2(t,e)}function w2(t,e,n){let i=Ei(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,z.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,z.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,z.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,z.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?z.ink:pn[(l+n)%pn.length])}function S2(t,e,n){let i=Ei(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,z.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,z.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,z.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let d=0;d<a;d++)for(let u=0;u<l;u++){let f=(u+.5)/l*s,p=a===1?r/2:r*(.3+d*.4),g=pn[(u+d+n)%pn.length];i.cyl(f,p,h,.015,.14,z.cream,"u"),i.cyl(f-.07,p,h,c,.06,g,"u"),i.cyl(f+.07,p,h,c,.06,g,"u")}}function T2(t,e){let n=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=n?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];t.box(...Ti({min:e.min,max:o},-.03,e.min[1],o[1]-.1),z.teal),t.box(...Ti({min:e.min,max:o},0,o[1]-.1,o[1]),z.cream),y2(t,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,z.hotPink,n);let a=(p,g,m,x,y)=>t.box(n?[e.min[0]+p,m,e.min[2]+.12]:[e.min[0]+.12,m,e.min[2]+p],n?[e.min[0]+g,x,e.max[2]-.12]:[e.max[0]-.12,x,e.min[2]+g],y);a(.3,.7,o[1],o[1]+.06,z.cream),a(.32,.68,o[1]+.06,o[1]+.12,z.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,z.cream);let l=n?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=p=>n?e.min[0]+p:e.min[2]+p;n?t.cyl(c(r-.5),o[1]+.14,l,.06,.28,z.gel):t.cyl(l,o[1]+.14,c(r-.5),.06,.28,z.gel);let h=.14,d=n?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[p,g]of d)n?t.box([p,e.min[1],e.min[2]],[g,i,e.max[2]],z.lilac):t.box([e.min[0],e.min[1],p],[e.max[0],i,g],z.lilac);let u=d[0][1],f=d[1][0];n?(t.box([u,i-.12,e.min[2]],[f,i,e.max[2]],z.lilac),t.box([u,o[1],e.min[2]+.2],[f,i-.12,e.max[2]-.2],z.tealLight)):(t.box([e.min[0],i-.12,u],[e.max[0],i,f],z.lilac),t.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,f],z.tealLight))}function E2(t,e,n){let i=Ei(t,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,z.shadowTint);for(let[h,d]of[[0,a],[s-a,s]])for(let[u,f]of[[0,a],[r-a,r]])i.slab(h,d,u,f,.12,o,z.lilac);i.slab(0,s,0,r,o-.1,o,z.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,z.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,z.cream),i.cyl(s/2,c,l,.025,s+.1,z.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?z.ink:pn[n%pn.length],"u")}function A2(t,e,n){let i=Ei(t,e),{len:s,dep:r}=i,o=e.max[1],a=1.1;i.slab(.06,s-.06,.04,r-.04,0,.08,z.shadowTint),i.slab(.04,s-.04,.02,r-.02,.08,a-.06,z.hotPink),i.slab(.15,s-.15,0,.05,.3,.7,z.cream),i.slab(.15,s-.15,r-.05,r,.3,.7,z.cream),i.slab(-.04,s+.04,-.04,r+.04,a-.06,a,z.cream),i.slab(0,s,r/2-.04,r/2+.04,a,o,z.lilac),i.slab(0,s,r/2-.07,r/2+.07,o-.1,o,z.shadowTint);let l=Math.max(2,Math.floor(s/.9));for(let c=0;c<l;c++)for(let h of[r*.2,r*.8]){let d=(c+.5)/l*s,u=pn[(c+n+(h>r/2?2:0))%pn.length],f=Math.min(o-.14,a+.55);i.cyl(d,h,a+.04,.13,.08,z.ink),i.cyl(d,h,(a+.08+f)/2,.11,f-a-.08,u),i.cyl(d,h,f+.03,.12,.06,z.cream)}}function R2(t,e,n){let i=Ei(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.06,s-.06,.05,r-.05,0,.1,z.shadowTint),i.slab(.03,s-.03,.03,r-.03,.1,o-.1,z.teal),i.slab(.2,s-.2,0,.06,.25,.65,z.hotPink),i.slab(.2,s-.2,r-.06,r,.25,.65,z.hotPink),i.slab(-.04,s+.04,-.04,r+.04,o-.1,o-.04,z.cream);let a=Math.max(2,Math.floor(s/.6));for(let l=0;l<a;l++){let c=(l+.5)/a*s;i.cyl(c,r/2,o-.035,.2,.07,z.ink),i.cyl(c,r/2,o-.02,.17,.04,pn[(l+n)%pn.length])}}function C2(t,e,n){let i=Ei(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.05,s-.05,.05,r-.05,0,.1,z.shadowTint),i.slab(.08,s-.08,.08,r-.08,.1,o-.08,z.cream),i.slab(.08,s-.08,.04,.09,.4,.55,pn[n%pn.length]),i.slab(.08,s-.08,r-.09,r-.04,.4,.55,pn[n%pn.length]),i.slab(-.04,s+.04,-.04,r+.04,o-.08,o,z.lilac)}function P2(t,e,n){t.box(...Ti(e,0,e.min[1],e.max[1]),z.cream),t.box(...Ti(e,.05,e.min[1],e.min[1]+.25),z.shadowTint),t.box(...Ti(e,.04,e.min[1]+1.1,e.min[1]+2.9),z.ink),[1.4,1.75,2.1,2.45].forEach((i,s)=>t.box(...Ti(e,.055,e.min[1]+i,e.min[1]+i+.1),pn[(s+n)%pn.length])),t.box(...Ti(e,.05,e.max[1]-.25,e.max[1]),z.shadowTint)}function I2(t,e){let n=Ei(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.05,.2,.05,s-.05,0,r-.12,z.lilac),n.slab(i-.2,i-.05,.05,s-.05,0,r-.12,z.lilac),n.slab(0,i,0,s,r-.12,r,z.teal);for(let o=.3;o<i-.2;o+=.3)n.slab(o,o+.03,0,s,r-.125,r-.1,z.shadowTint)}function L2(t,e,n){let i=Ei(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.02,s-.02,.02,r-.02,0,o*.5,z.playerOrange),i.slab(0,s,0,r,o*.5-.06,o*.5,z.shadowTint);let a=Math.max(2,Math.floor(s/.5)),l=Math.min(r/2-.02,(o-o*.5)/2-.01);for(let c=0;c<a;c++)i.cyl((c+.5)/a*s,r/2,o*.5+l+.005,l,l*2,c%2?z.gel:z.teal)}function D2(t,e){let n=Ei(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.04,i-.04,.04,s-.04,0,.12,z.shadowTint),n.slab(.02,i-.02,.02,s-.02,.12,r-.1,z.hotPink),n.slab(.1,i-.1,0,.05,.3,.5,z.cream),n.slab(.1,i-.1,s-.05,s,.3,.5,z.cream),n.slab(0,i,0,s,r-.1,r,z.playerOrange)}function N2(t,e){t.box(...Ti(e,0,e.min[1],e.max[1]),z.cream),t.box(...Ti(e,.05,e.min[1],e.min[1]+.25),z.shadowTint),t.box(...Ti(e,.03,e.min[1]+1,e.min[1]+1.12),z.hotPink),t.box(...Ti(e,.05,e.max[1]-.25,e.max[1]),z.shadowTint)}function O2(t){if(!t)return[];let[e,,n]=t.min,[i,,s]=t.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,n],max:[h+c/2,l,n+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=n+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function Cx(t,e=null){let n=v2();for(let s of O2(e))n.box(s.min,s.max,z.tealLight);let i=0;return t.forEach((s,r)=>{let o=x2(s);o==="counter"?M2(n,s,i++):o==="planter"?(r%2?S2:w2)(n,s,r):o==="desk"?T2(n,s):o==="shelf"?E2(n,s,r):o==="pillar"?N2(n,s):o==="bar"?A2(n,s,r):o==="bowl"?R2(n,s,r):o==="booth"?C2(n,s,r):o==="menu"?P2(n,s,r):o==="seat"?I2(n,s):o==="plant"?L2(n,s,r):o==="velvet"?D2(n,s):n.box(s.min,s.max,z.lilac)}),zt(n.list,!1)}var Vs=2.7,gu=.22,xu=.16;function pl(t,e,n){let i=new vt(e[0]-t[0],e[1]-t[1],e[2]-t[2]);i.translate((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),i.deleteAttribute("uv");let s=new et(n),r=i.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return i.setAttribute("color",new Et(o,3)),i}function Px(t){let e=t.w,n=e/2,i=new mt;i.name="exit-gate",i.position.set(t.pos[0],t.pos[1],t.pos[2]),i.rotation.y=t.yaw;let s=new at(zt([pl([-n-gu,0,0],[-n,Vs+.25,xu],z.lilac),pl([n,0,0],[n+gu,Vs+.25,xu],z.lilac),pl([-n-gu,Vs,0],[n+gu,Vs+.25,xu],z.hotPink),pl([-n,0,.005],[n,Vs,.04],z.gel)].map(u=>u.toNonIndexed()),!1),Pt({vertexColors:!0,rim:.1}));s.name="gate-frame",i.add(s);let r=u=>{let f=new at(pl(u<0?[0,0,.04]:[-n,0,.04],u<0?[n,Vs,.1]:[0,Vs,.1],z.teal).toNonIndexed(),Pt({vertexColors:!0,rim:.1}));return f.position.x=u*n,f.name=u<0?"gate-door-west":"gate-door-east",i.add(f),f},o=r(-1),a=r(1),l=Bs({text:"GO \u2192",w:2.2,h:.8,bg:z.glorpPurple,fg:z.gel,seed:5});l.position.set(0,Vs+.85,xu+.1),i.add(l);let c=0,h=0,d=()=>{let u=Math.max(.06,1-c);o.scale.x=u,a.scale.x=u,l.visible=c>.5};return d(),{group:i,setOpen(u,f=!1){h=u?1:0,f&&(c=h,d())},update(u){if(c===h||!(u>0))return;let f=1/Math.max(q.run.gateOpenTime,.001);c=c<h?Math.min(h,c+u*f):Math.max(h,c-u*f),d()},openness:()=>c}}var Ix=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(Ix)),t),Ws=.3,k2=[rt([-12,-1,-12],[12,0,12],"floor"),rt([-12-Ws,0,-12-Ws],[12+Ws,4,-12]),rt([-12-Ws,0,12],[12+Ws,4,12+Ws]),rt([-12-Ws,0,-12],[-12,4,12]),rt([12,0,-12],[12+Ws,4,12]),rt([5,0,-9],[5.3,4,-3]),rt([6.7,0,-9],[7,4,-3]),rt([-11,0,-7.3],[-6,3,-7]),rt([-6.3,0,-11],[-6,3,-7]),rt([-4,0,-3],[-2,1,-2.4],"low"),rt([3,0,3],[3.6,1,5],"low"),rt([-5,0,3],[-3.8,2.2,3.6],"tall"),rt([1,0,-6],[1.6,2.2,-4],"tall"),rt([-9.4,0,.6],[-8.6,4,1.4],"pillar"),rt([8.6,0,3.6],[9.4,4,4.4],"pillar"),rt([-9,0,6.5],[-6,1,7.1],"low"),rt([-4,0,6.5],[-1,1,7.1],"low"),rt([6,0,6],[10,2.2,6.6],"tall"),rt([-12,0,-1],[-10,1,-.4],"low")],Lx=[];for(let t=0;t<=12;t++)Lx.push({min:[-10+t-.05,0,10],max:[-10+t+.05,.02,11]});var yu=Ix({boxes:k2,marks:Lx,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function mp(t){let e=t.map(n=>{let i=new vt(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);return i.translate((n.min[0]+n.max[0])/2,(n.min[1]+n.max[1])/2,(n.min[2]+n.max[2])/2),i});return zt(e,!1)}var Xs=.03,Ys=.3,qs=.12,vu=2;function U2(t=yu){let e=t.boxes.find(c=>c.kind==="floor");if(!e)return[];let[n,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([n,0,i],[s,Ys,i+Xs]),l([n,0,r-Xs],[s,Ys,r]),l([n,0,i],[n+Xs,Ys,r]),l([s-Xs,0,i],[s,Ys,r]);for(let c=n+vu;c<s-.5;c+=vu)l([c-qs/2,Ys,i],[c+qs/2,o,i+Xs]),l([c-qs/2,Ys,r-Xs],[c+qs/2,o,r]);for(let c=i+vu;c<r-.5;c+=vu)l([n,Ys,c-qs/2],[n+Xs,o,c+qs/2]),l([s-Xs,Ys,c-qs/2],[s,o,c+qs/2]);return a}function Dx(t=yu){let e=new mt,n=t.boxes.find(o=>o.kind==="floor");e.add(Kh({w:n.max[0]-n.min[0],d:n.max[2]-n.min[2]}));let i=t.boxes.filter(o=>o.kind!=="floor");if(i.length){let o=new at(Kn(Cx(i,n)),Pt({vertexColors:!0}));o.name="grey-props",yn(o),e.add(o)}let s=U2(t);if(s.length){let o=new at(mp(s),Pt({color:z.shadowTint}));o.name="grey-wall-trim",e.add(o)}if(t.marks.length){let o=new at(mp(t.marks),Pt({color:z.hotPink}));o.name="grey-marks",e.add(o)}if(t.ammoCrates&&t.ammoCrates.length){let o=[];for(let l of t.ammoCrates)o.push({min:[l.pos[0]-.35,0,l.pos[2]-.25],max:[l.pos[0]+.35,.4,l.pos[2]+.25]}),o.push({min:[l.pos[0]-.39,.4,l.pos[2]-.29],max:[l.pos[0]+.39,.5,l.pos[2]+.29]});let a=new at(Kn(mp(o)),Pt({color:z.playerOrange}));a.name="grey-crate",yn(a),e.add(a)}if(t.landmark){let o=t.landmark,a=Bs({text:o.text,w:o.w,h:o.h});a.position.set(o.pos[0],o.pos[1],o.pos[2]),a.rotation.y=Math.PI,e.add(a)}for(let o of t.signs||[]){let a=Bs({text:o.text,w:o.w,h:o.h,bg:o.bg,seed:4});a.position.set(o.pos[0],o.pos[1],o.pos[2]),a.rotation.y=o.yaw,e.add(a)}let r=t.exit?Px(t.exit):null;return r&&e.add(r.group),{group:e,boxes:t.boxes,gate:r,setGateOpen(o,a=!1){r&&r.setOpen(o,a)},update(o){r&&r.update(o)}}}var Nx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(Nx)),t),$s=.3,qi=7,Ai=15,F2=[rt([-qi,-1,-Ai],[qi,0,Ai],"floor"),rt([-qi-$s,0,-Ai-$s],[qi+$s,4,-Ai]),rt([-qi-$s,0,Ai],[qi+$s,4,Ai+$s]),rt([-qi-$s,0,-Ai],[-qi,4,Ai]),rt([qi,0,-Ai],[qi+$s,4,Ai]),rt([-5,0,-9.5],[-3,1,-8.5],"low"),rt([2,0,-9.5],[4,1,-8.5],"low"),rt([-.4,0,-7.4],[.4,4,-6.6],"pillar"),rt([-1,0,-3.5],[1,1,-2.5],"low"),rt([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),rt([3.5,0,-1.5],[5.5,1,-.5],"low"),rt([-4.5,0,3.5],[-2.5,1,4.5],"low"),rt([2.5,0,3.5],[4.5,1,4.5],"low"),rt([-.4,0,6.6],[.4,4,7.4],"pillar"),rt([-4.5,0,9],[-2.5,1,10],"low"),rt([2.5,0,9],[4.5,1,10],"low"),rt([-1.5,0,12],[1.5,2.2,12.6],"tall")],B2=[-12,-6,.5,7,11],z2=[-6,-2,2,6],_u=[];for(let t of B2)for(let e of z2)_u.push([e,t]);_u.push([0,-5],[0,0],[0,9.5]);_u.push([-3.5,13.5],[3.5,13.5]);var Ox=Nx({name:"kioskRow",boxes:F2,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:_u,ammoCrates:[{pos:[5.5,0,-12.5]}],exit:{pos:[-4.5,0,Ai],yaw:Math.PI,w:3},landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});function H2(t,e,n){let i=Math.max(t.min[0]-e,0,e-t.max[0]),s=Math.max(t.min[2]-n,0,n-t.max[2]);return Math.hypot(i,s)}function bu(t,{cols:e,rows:n,clearance:i=.8}){let s=t.filter(o=>o.kind!=="floor"),r=[];for(let o of n)for(let a of e)s.every(l=>H2(l,a,o)>=i)&&r.push([a,o]);return r}var kx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(kx)),t),Zs=.3,Jn=20,li=18,qt=(t,e,n,i)=>rt(t,e,n,i),Ux=[rt([-Jn,-1,-li],[Jn,0,li],"floor"),rt([-Jn-Zs,0,-li-Zs],[Jn+Zs,4,-li]),rt([-Jn-Zs,0,li],[Jn+Zs,4,li+Zs]),rt([-Jn-Zs,0,-li],[-Jn,4,li]),rt([Jn,0,-li],[Jn+Zs,4,li]),qt([-7,0,-.35],[7,2.2,.35],"tall","bar"),qt([-3,0,14.2],[3,2.2,14.9],"tall","bar"),qt([-9,0,9.5],[-5,1,10.5],"low","bowl"),qt([5,0,9.5],[9,1,10.5],"low","bowl"),qt([-1,0,10.8],[1,1,11.8],"low","booth"),qt([-14.6,0,-5],[-13,1,-4],"low","booth"),qt([13,0,-5],[14.6,1,-4],"low","booth"),qt([-14.6,0,4],[-13,1,5],"low","booth"),qt([13,0,4],[14.6,1,5],"low","booth"),qt([-3.6,0,-6.5],[-2,1,-5.5],"low","booth"),qt([2,0,-6.5],[3.6,1,-5.5],"low","booth"),qt([-3.6,0,4.5],[-2,1,5.5],"low","booth"),qt([2,0,4.5],[3.6,1,5.5],"low","booth"),qt([-9,0,-13],[-6,1,-12.4],"low","plant"),qt([6,0,-13],[9,1,-12.4],"low","plant"),qt([-17,0,10],[-14,1,10.6],"low","plant"),qt([10.5,0,13.2],[13.5,1,13.8],"low","plant"),qt([-18.5,0,-10],[-16.5,1,-9.4],"low","seat"),qt([16.5,0,-10],[18.5,1,-9.4],"low","seat"),qt([-12.4,0,-9.4],[-11.6,4,-8.6],"pillar","menu"),qt([11.6,0,-9.4],[12.4,4,-8.6],"pillar","menu"),qt([-12.4,0,8.6],[-11.6,4,9.4],"pillar","menu"),qt([11.6,0,8.6],[12.4,4,9.4],"pillar","menu")],Fx=bu(Ux,{cols:[-17.5,-12.5,-7.5,-2.5,2.5,7.5,12.5,17.5],rows:[-15.5,-10.5,-7.5,-2.5,2.5,7.5,12,16.5],clearance:.9});Fx.push([0,-3.5],[0,3.5],[0,8],[-4,15.8],[0,15.8],[4,15.8],[14.5,12],[16,16.5],[-12,16],[-9.5,12],[9.5,12]);var Bx=kx({name:"smoothieBar",boxes:Ux,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-16.5],yaw:0},trigger:{z:-14},features:{start:{pos:[0,0,-16.5],yaw:0},startCover:{pos:[-7.5,0,-13.4],yaw:0},mid:{pos:[0,0,-3.5],yaw:0},open:{pos:[0,0,-9],yaw:0},flankWest:{pos:[-16,0,0],yaw:0},flankEast:{pos:[16,0,0],yaw:0}},associates:[{id:"a1",pos:[-8.3,0,10.88]},{id:"a2",pos:[-5.7,0,10.88]},{id:"b1",pos:[5.7,0,10.88]},{id:"b2",pos:[8.3,0,10.88]},{id:"c1",pos:[0,0,12.18]},{id:"t1",kind:"trainer",pos:[-12,0,6]}],pads:[{id:"sauna1",pos:[14.5,0,16.4],spawns:"associate",openKey:"openAfterKillsSmoothie",shareKey:"trainerShareSmoothie"}],tobble:{pos:[1.6,0,-16.5],yaw:0},waypoints:Fx,ammoCrates:[{pos:[6.5,0,-16.8]},{pos:[-16.5,0,14.5]}],exit:{pos:[-12,0,li],yaw:Math.PI,w:3.4},landmark:{pos:[9,3.2,li-.3],text:"SMOOTHIE BAR",w:7,h:1.4},signs:[{pos:[0,2.9,14.95],yaw:Math.PI,text:"FREE TRIAL COUNTER \u2014 No commitment!*",w:6.2,h:1,bg:"#ff4f9a"},{pos:[-Jn+.14,2.2,-2],yaw:Math.PI/2,text:"BUILD-YOUR-BOWL",w:3.2,h:1.2,bg:"#2ec4b6"},{pos:[Jn-.14,2.2,2],yaw:-Math.PI/2,text:"BLEND NOW, QUIT LATER",w:3.6,h:1.2,bg:"#ff8a1f"},{pos:[Jn-.14,2.4,-12],yaw:-Math.PI/2,text:"SMOOTHIE BAR",w:3.6,h:1.2,bg:"#b9a7ff"}]});var zx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(zx)),t),Ks=.3,ci=12,Ri=10,Hx=[rt([-ci,-1,-Ri],[ci,0,Ri],"floor"),rt([-ci-Ks,0,-Ri-Ks],[ci+Ks,4,-Ri]),rt([-ci-Ks,0,Ri],[ci+Ks,4,Ri+Ks]),rt([-ci-Ks,0,-Ri],[-ci,4,Ri]),rt([ci,0,-Ri],[ci+Ks,4,Ri]),rt([-4,0,7.2],[4,2.2,7.9],"tall","desk"),rt([-8,0,-3.2],[-5.5,1,-2.6],"low","velvet"),rt([5.5,0,-3.2],[8,1,-2.6],"low","velvet"),rt([-4.5,0,1.8],[-2,1,2.4],"low","velvet"),rt([2,0,1.8],[4.5,1,2.4],"low","velvet"),rt([-6.4,0,-.4],[-5.6,4,.4],"pillar"),rt([5.6,0,4.2],[6.4,4,5],"pillar")],Gx=bu(Hx,{cols:[-10,-6,-2,2,6,10],rows:[-8,-5,-1.5,3.5,6,8.8],clearance:.9});Gx.push([0,-3.5],[0,2],[-6,5.5],[6,5.5],[-5.5,9],[5.5,9],[0,9]);var Vx=zx({name:"cancellationDesk",boss:!0,boxes:Hx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-8.5],yaw:0},trigger:{z:1/0},features:{start:{pos:[0,0,-8.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},desk:{pos:[0,0,5.8],yaw:0}},associates:[],pads:[{id:"sauna1",pos:[-9,0,8.4],spawns:"associate"},{id:"sauna2",pos:[9,0,8.4],spawns:"associate"}],tobble:{pos:[1.5,0,-8.7],yaw:0},waypoints:Gx,ammoCrates:[{pos:[-10.5,0,-8.8]}],landmark:{pos:[0,3.2,Ri-.3],text:"CANCELLATION DESK",w:7,h:1.3},signs:[{pos:[-ci+.14,2.2,-1],yaw:Math.PI/2,text:"PLEASE TAKE A NUMBER \u2014 NOW SERVING: 3",w:4.2,h:1.3,bg:"#ff4f9a"},{pos:[ci-.14,2.2,-1],yaw:-Math.PI/2,text:"ALL SALES FINAL. ALL EXITS FINAL.",w:4.2,h:1.3,bg:"#7a3cff"}]});var Wx=Object.freeze({turnstiles:Ox,smoothie:Bx,desk:Vx});var Un=Object.freeze(["turnstiles","smoothie","desk"]),wu=Object.freeze({turnstiles:"Check-in Turnstiles",smoothie:"Smoothie Bar",desk:"The Cancellation Desk"}),Xx=Object.freeze(["Tues 2:00\u20132:10","Tues 2:00\u20132:05","By appointment"]),gp=t=>`Cancellation hours: ${Xx[Math.max(0,Math.min(Xx.length-1,t|0))]}`,Yx="gyms-of-war.checkpoint",Mu=t=>Number.isInteger(t)&&t>=0&&t<Un.length?t:0,xp=t=>{let e=Un.indexOf(t);return e<0?0:e};function G2(t){try{let e=t&&t.getItem(Yx);return e==null?0:Mu(Number(e))}catch{return 0}}function V2(t,e){try{t&&t.setItem(Yx,String(Mu(e)))}catch{}}function qx(t,e,n=q.run.gateReach){if(!t)return!1;let i=e[0]-t.pos[0],s=e[2]-t.pos[2],r=Math.sin(t.yaw),o=Math.cos(t.yaw),a=i*o-s*r,l=i*r+s*o;return Math.abs(a)<=t.w/2&&l>=-.25&&l<=n}function $x({storage:t=null,tuning:e=q}={}){let n=()=>e.run,i=0,s=0,r="play",o=0,a=!1,l=G2(t),c=d=>{s=Mu(d),V2(t,s)},h={get index(){return i},get checkpoint(){return s},get arena(){return Un[i]},get phase(){return r},get cleared(){return a},get fading(){return r!=="play"},get hasNext(){return i<Un.length-1},saved:l,get fade(){return r==="fadeOut"?Math.min(1,o/Math.max(n().fadeOut,1e-6)):r==="black"?1:r==="fadeIn"?Math.max(0,1-o/Math.max(n().fadeIn,1e-6)):0},get gateOpen(){return a&&h.hasNext},markClear(){return r==="play"&&(a=!0),h.gateOpen},touchGate(){return r!=="play"||!h.gateOpen?!1:(r="fadeOut",o=0,!0)},restart(){return a=!1,r="play",o=0,Un[i]},goTo(d){return i=Mu(d),c(i),a=!1,r="play",o=0,Un[i]},newRun(){return h.goTo(0)},step(d){let u=[];if(!(d>0)||r==="play")return u;if(o+=d,r==="fadeOut"&&o>=n().fadeOut){let f=Un[i];i=Math.min(Un.length-1,i+1),c(i),a=!1,r="black",o=0,u.push({type:"swap",from:f,to:Un[i]})}return r==="black"&&o>=n().blackHold&&(r="fadeIn",o=0),r==="fadeIn"&&o>=n().fadeIn&&(r="play",o=0,u.push({type:"faded"})),u}};return h}function vp(t){let e=new Set,n=new Set,i=new Set;t.traverse(s=>{s.geometry&&e.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];if(!(s.userData&&s.userData.isOutline))for(let o of r)n.add(o)});for(let s of n)for(let r of Object.keys(s)){let o=s[r];o&&o.isTexture&&i.add(o)}return e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),t.parent&&t.parent.remove(t),{geometries:e.size,materials:n.size,textures:i.size}}var Js=class t{constructor(e,n,i,s,r="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),t.nextNameID=t.nextNameID||0,this.$name.id=`lil-gui-name-${++t.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},yp=class extends Js{constructor(e,n,i){super(e,n,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function _p(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}var W2={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:_p,toHexString:_p},gl={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},X2={isPrimitive:!1,match:t=>Array.isArray(t)||ArrayBuffer.isView(t),fromHexString(t,e,n=1){let i=gl.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(i&255)/255*n},toHexString([t,e,n],i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return gl.toHexString(s)}},Y2={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){let i=gl.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(i&255)/255*n},toHexString({r:t,g:e,b:n},i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return gl.toHexString(s)}},q2=[W2,gl,X2,Y2];function $2(t){return q2.find(e=>e.match(t))}var bp=class extends Js{constructor(e,n,i,s){super(e,n,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=$2(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=_p(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},ml=class extends Js{constructor(e,n,i){super(e,n,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Mp=class extends Js{constructor(e,n,i,s,r,o){super(e,n,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let n=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},i=y=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),i(this._step*this._normalizeMouseWheel(y)))},o=!1,a,l,c,h,d,u=5,f=y=>{a=y.clientX,l=c=y.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=y=>{if(o){let w=y.clientX-a,b=y.clientY-l;Math.abs(b)>u?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&g()}if(!o){let w=y.clientY-c;d-=w*this._step*this._arrowKeyMultiplier(y),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=y.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(x,y,w,b,M)=>(x-y)/(w-y)*(M-b)+b,n=x=>{let y=this.$slider.getBoundingClientRect(),w=e(x,y.left,y.right,this._min,this._max);this._snapClampSetValue(w)},i=x=>{this._setDraggingStyle(!0),n(x.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=x=>{n(x.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=x=>{x.preventDefault(),this._setDraggingStyle(!0),n(x.touches[0].clientX),o=!1},h=x=>{x.touches.length>1||(this._hasScrollBar?(a=x.touches[0].clientX,l=x.touches[0].clientY,o=!0):c(x),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=x=>{if(o){let y=x.touches[0].clientX-a,w=x.touches[0].clientY-l;Math.abs(y)>Math.abs(w)?c(x):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else x.preventDefault(),n(x.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),p=400,g,m=x=>{if(Math.abs(x.deltaX)<Math.abs(x.deltaY)&&this._hasScrollBar)return;x.preventDefault();let w=this._normalizeMouseWheel(x)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,p)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),e-=n,e=Math.round(e/this._step)*this._step,e+=n,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},wp=class extends Js{constructor(e,n,i,s){super(e,n,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(n=>{let i=document.createElement("option");i.textContent=n,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?e:this._names[n],this}},Sp=class extends Js{constructor(e,n,i){super(e,n,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Z2=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "\u25B8";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function K2(t){let e=document.createElement("style");e.innerHTML=t;let n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}var Zx=!1,Su=class t{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Zx&&a&&(K2(Z2),Zx=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,n,i,s,r){if(Object(i)===i)return new wp(this,e,n,i);let o=e[n];switch(typeof o){case"number":return new Mp(this,e,n,i,s,r);case"boolean":return new yp(this,e,n);case"string":return new Sp(this,e,n);case"function":return new ml(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,o)}addColor(e,n,i=1){return new bp(this,e,n,i)}addFolder(e){let n=new t({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof ml||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ml)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}};var C=(t,e,n,i)=>({path:t,min:e,max:n,step:i});function Kx(t){let e=(n,i,s,r)=>C(`weapons.${t}.${n}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var xl=Object.freeze([C("move.jog",1,10,.1),C("move.aimWalk",.5,6,.1),C("move.sprint",2,14,.1),C("move.accelTime",.01,.6,.01),C("move.stopTime",.01,.6,.01),C("move.turnRate",1,40,.5),C("move.aimTurnRate",1,40,.5),C("move.sprintTurnRate",.2,20,.1),C("move.rollDistance",1,12,.1),C("move.rollTime",.2,1.5,.01),C("move.rollEase",1,4,.05),C("move.rollBuffer",0,.5,.01),C("move.tapMax",.05,.5,.01),C("move.stickSprintMin",0,1,.05),C("move.faceMinSpeed",0,2,.05),C("move.sprintHeadingMinSpeed",0,3,.05),C("move.runClipMinSpeed",0,2,.05),C("move.runRateMin",.1,2,.05),C("move.runRateMax",.5,4,.05),C("move.sprintRateMin",.1,2,.05),C("move.sprintRateMax",.5,4,.05),C("move.stepEvery",.4,4,.05),C("move.stepEverySprint",.4,6,.05),C("move.crawlSpeed",.2,4,.05),C("move.crawlTurnRate",.5,20,.5),C("camera.fov",40,110,1),C("camera.right",-1.5,1.5,.01),C("camera.up",.5,3,.01),C("camera.back",.5,6,.05),C("camera.aim.fov",20,90,1),C("camera.aim.back",.3,5,.05),C("camera.sprint.fov",50,120,1),C("camera.sprint.up",.3,3,.01),C("camera.sprint.back",.5,6,.05),C("camera.sprint.shakeWeight",0,3,.05),C("camera.coverLow.fov",50,120,1),C("camera.coverLow.right",-1.5,1.5,.01),C("camera.coverLow.up",.3,3,.01),C("camera.coverLow.back",.5,6,.05),C("camera.coverTall.fov",50,120,1),C("camera.coverTall.right",-1.5,1.5,.01),C("camera.coverTall.up",.3,3,.01),C("camera.coverTall.back",.5,6,.05),C("camera.downed.fov",40,120,1),C("camera.downed.up",.2,3,.01),C("camera.downed.back",.5,6,.05),C("camera.bump.amount",0,.6,.01),C("camera.bump.halfLife",.01,.3,.005),C("camera.slamShake.amount",0,.3,.005),C("camera.slamShake.time",.02,1,.01),C("camera.slamShake.hz",2,60,.5),C("camera.blendHalfLife",0,.5,.005),C("camera.holdTime",0,2,.05),C("camera.holdRange",10,300,5),C("camera.followHalfLife",0,.5,.005),C("camera.sideHalfLife",0,.6,.005),C("camera.headHideDist",0,2,.05),C("camera.headHideMargin",0,1,.01),C("camera.shake.amp",0,.15,.001),C("camera.shake.hz",1,30,.5),C("camera.probeRadius",.05,.6,.01),C("camera.minBack",0,2,.01),C("camera.wallReturnHalfLife",0,1,.01),C("camera.pitchMin",-1.5,0,.01),C("camera.pitchMax",0,1.5,.01),C("look.mouse",5e-4,.008,1e-4),C("look.pad.yawRate",.5,10,.1),C("look.pad.pitchRate",.5,10,.1),C("look.pad.expo",1,3,.05),C("look.aimScale",.1,1.5,.01),{path:"look.invertY"},C("cover.grabRange",0,5,.05),C("cover.grabAngle",0,180,1),C("cover.grabViewAngle",0,180,1),C("cover.grabSlack",0,5,.05),C("cover.grabMinTilt",0,1,.05),C("cover.gap",0,5,.01),C("cover.endInset",0,5,.01),C("cover.minLength",0,5,.05),C("cover.slideSpeed",0,30,.5),C("cover.slideMinTime",0,2,.01),C("cover.slideMaxTime",0,2,.01),C("cover.slideTurnRate",1,60,.5),C("cover.moveSpeed",0,30,.1),C("cover.alongDeadzone",0,1,.05),C("cover.leaveTilt",0,1,.05),C("cover.leaveAngle",0,180,1),C("cover.endLeaveTime",0,2,.01),C("cover.cornerZone",0,5,.05),C("cover.popTime",0,2,.01),C("cover.blindTime",0,2,.01),C("cover.popShift",0,5,.05),C("cover.pushAngle",0,180,1),C("cover.lowDrawBack",0,1,.01),C("cover.blindDrawBack",0,1,.01),C("cover.vaultTime",0,2,.01),C("cover.vaultMaxDepth",0,5,.05),C("cover.vaultHop",0,5,.05),C("cover.vaultExitSpeed",0,30,.1),C("cover.swapRange",0,5,.05),C("cover.swapSpeed",0,30,.5),C("cover.swapAngle",0,180,1),C("cover.swapMaxOffset",0,5,.05),C("cover.slamSquash",0,1,.01),C("cover.slamSquashTime",0,2,.01),C("cover.thudVolume",0,1,.05),C("cover.autoSlam",0,1,1),C("cover.autoAngle",0,90,1),C("cover.autoDist",0,1,.01),C("cover.autoMinTilt",0,1,.05),C("cover.autoMinSpeed",0,12,.1),C("cover.autoTime",0,1,.01),...Kx("regret"),...Kx("pistol"),C("combat.fireBuffer",0,.5,.01),C("combat.autoReload",0,1,1),C("combat.minRate",.01,1,.01),C("combat.minReloadTime",.01,.5,.01),C("combat.muzzleUp",.5,2,.01),C("combat.muzzleRight",-1,1,.01),C("combat.muzzleForward",0,2,.01),C("combat.blindLift",0,1,.01),C("combat.blindReach",0,1,.01),C("combat.crateRadius",.3,3,.05),C("combat.hitPad",0,.3,.005),C("combat.crouchHead",0,3,.01),C("combat.crouchBodyTop",0,3,.01),C("combat.shoulderDrop",0,1,.01),C("combat.pickupRadius",.2,3,.05),C("health.max",1,500,1),C("health.regenDelay",0,15,.1),C("health.regenTime",0,15,.1),C("health.downedTime",0,60,.5),C("health.standInRevive",0,1,1),C("health.reviveTime",0,10,.1),C("health.reviveHealth",0,1,.05),C("health.godMode",0,1,1),C("health.giveUpHold",.3,5,.01),C("associate.radius",0,3,.01),C("associate.height",0,3,.01),C("associate.pointSpacing",.2,3,.01),C("associate.reserveRadius",0,3,.01),C("associate.popShift",0,3,.01),C("associate.linkMax",2,15,.5),C("associate.health",1,1e3,1),C("associate.runSpeed",0,12,.1),C("associate.turnRate",.5,40,.5),C("associate.arriveDist",.01,1,.01),C("associate.stuckTime",.1,5,.1),C("associate.popTime",0,1,.01),C("associate.telegraphTime",0,2,.01),C("associate.burstTime",0,5,.1),C("associate.rate",.5,20,.5),C("associate.damage",0,50,.5),C("associate.range",5,100,1),C("associate.spread",0,15,.1),C("associate.moveSpread",0,15,.1),C("associate.aimLag",0,1,.01),C("associate.suppressChance",0,1,.05),C("associate.suppressTime",0,5,.1),C("associate.suppressRate",.5,20,.5),C("associate.suppressMiss",0,5,.1),C("associate.suppressSpread",0,20,.5),C("associate.coverWaitMin",0,5,.1),C("associate.coverWaitMax",0,8,.1),C("associate.magBursts",1,10,1),C("associate.reloadTime",0,6,.1),C("associate.flinchTime",0,2,.01),C("associate.minRange",0,20,.5),C("associate.preferRange",0,40,.5),C("associate.maxRange",1,60,.5),C("associate.relocateCheck",.05,3,.05),C("associate.relocateAfter",1,60,.5),C("associate.ammoDrop",0,200,1),C("associate.muzzleUp",.5,2,.01),C("director.tokens",0,8,1),C("director.casualTokens",0,8,1),C("director.casual",0,1,1),C("director.tokenCooldown",0,5,.1),C("director.tokenMaxHold",.5,10,.1),C("director.requestWindow",0,2,.05),C("director.pushAfter",1,30,.5),C("director.flankAfter",1,60,.5),C("director.stayRadius",.5,10,.1),C("director.flankAngle",0,180,1),C("director.flankMaxAngle",60,180,1),C("director.maxEnemies",4,8,1),C("associate.downChance",0,1,.05),C("associate.downedCrawl",0,3,.05),C("associate.bleedTime",1,60,.5),C("associate.reviveTime",0,10,.1),C("associate.reviveHealth",.05,1,.05),C("associate.reviveRange",0,40,.5),C("associate.staggerTime",0,3,.05),C("associate.diveWarn",0,1.6,.05),C("associate.diveRadius",0,12,.1),C("associate.diveChance",0,1,.05),C("associate.diveReaction",0,2,.05),C("associate.diveDistance",0,10,.1),C("associate.diveTime",.05,3,.05),C("pad.radius",.1,4,.05),C("pad.openAfterKills",0,8,1),C("pad.openAfterKillsSmoothie",0,8,1),C("pad.openAfter",0,120,1),C("pad.interval",.5,30,.5),C("pad.maxAlive",1,8,1),C("pad.total",1,30,1),C("pad.riseTime",0,3,.05),C("pad.trainerShare",0,1,.05),C("pad.trainerShareSmoothie",0,1,.05),C("trainer.health",1,1e3,1),C("trainer.scaleW",.5,2,.05),C("trainer.scaleH",.5,2,.05),C("trainer.runSpeed",0,12,.1),C("trainer.turnRate",.5,40,.5),C("trainer.maxAlive",0,8,1),C("trainer.swingRange",.5,4,.05),C("trainer.swingSlack",0,2,.05),C("trainer.swingArc",10,360,5),C("trainer.windup",.05,2,.05),C("trainer.lockTime",0,1,.05),C("trainer.swingTime",.05,1.5,.05),C("trainer.recover",0,3,.05),C("trainer.swingGap",0,3,.05),C("trainer.damage",0,100,1),C("trainer.tobbleDamage",0,100,1),C("trainer.knockback",0,6,.1),C("trainer.knockTime",.05,1.5,.05),C("trainer.staggerTime",0,3,.05),C("trainer.preferDoc",.1,2,.05),C("trainer.retargetTime",.05,3,.05),C("trainer.repathTime",.1,3,.05),C("trainer.avoidRadius",0,5,.1),C("trainer.avoidWeight",0,5,.1),C("trainer.stuckTime",.1,3,.1),C("trainer.diveChance",0,1,.05),C("trainer.barkChance",0,1,.05),C("run.fadeOut",.05,3,.05),C("run.blackHold",0,2,.05),C("run.fadeIn",.05,3,.05),C("run.gateReach",.5,4,.1),C("run.hoursTime",1,20,.5),C("run.gateOpenTime",.1,3,.05),C("tobble.enabled",0,1,1),C("tobble.scale",.3,1.2,.01),C("tobble.radius",.1,.6,.01),C("tobble.height",.5,2,.01),C("tobble.health",1,1e3,1),C("tobble.regenDelay",0,20,.5),C("tobble.regenTime",0,20,.5),C("tobble.runSpeed",0,12,.1),C("tobble.turnRate",1,30,.5),C("tobble.followMin",0,20,.5),C("tobble.followMax",1,30,.5),C("tobble.personalSpace",0,5,.05),C("tobble.lofClear",0,4,.05),C("tobble.lofRange",1,60,1),C("tobble.sidestepReact",0,3,.05),C("tobble.sidestepDist",0,5,.1),C("tobble.popTime",.01,1,.01),C("tobble.popLift",0,.6,.01),C("tobble.muzzleUp",.3,2,.01),C("tobble.coverWaitMin",0,5,.1),C("tobble.coverWaitMax",0,8,.1),C("tobble.burstTime",0,6,.1),C("tobble.rate",.5,20,.5),C("tobble.damage",0,100,1),C("tobble.spread",0,20,.5),C("tobble.range",1,100,1),C("tobble.reviveMaxThreats",0,8,1),C("tobble.reviveWaitMax",0,20,.5),C("tobble.reviveRange",.3,4,.05),C("tobble.reviveTime",0,15,.1),C("tobble.reviveHealth",.05,1,.05),C("tobble.playerReviveTime",0,10,.1),C("tobble.playerReviveRange",.3,5,.05),C("tobble.crawlSpeed",0,3,.05),C("tobble.complainEvery",1,30,.5),C("dummy.health",1,1e3,1),C("dummy.respawnTime",0,30,.5),C("dummy.railSpeed",0,10,.1),C("camera.recoil.halfLife",.01,.5,.01),C("camera.recoil.max",0,20,.5),C("look.pad.assist",.1,1,.05),C("feedback.flashTime",.01,.3,.01),C("feedback.flashSize",.05,1.5,.05),C("feedback.tracerTime",.01,.3,.01),C("feedback.tracerWidth",.005,.2,.005),C("feedback.sparkTime",.05,1,.01),C("feedback.sparkCount",0,12,1),C("feedback.gelTime",.1,2,.05),C("feedback.gelCount",0,24,1),C("feedback.gelSpeed",0,10,.1),C("feedback.killGelCount",0,48,1),C("feedback.receiptCount",0,24,1),C("feedback.receiptTime",.2,4,.05),C("feedback.gravity",0,30,.1),C("feedback.hitMarkerTime",.02,1,.01),C("feedback.killMarkerTime",.05,1,.01),C("feedback.reloadResultTime",.1,2,.05),C("feedback.reticleMinGap",0,30,1),C("feedback.lowAmmoFrac",0,1,.05),C("feedback.coverReticleOpacity",0,1,.05),C("feedback.stepDip",0,.1,.001),C("feedback.stepVolume",0,1,.05),C("feedback.shotVolume",0,1,.05),C("feedback.hitVolume",0,1,.05),C("feedback.killVolume",0,1,.05),C("feedback.reloadVolume",0,1,.05),C("feedback.gunSquash",0,.6,.01),C("feedback.gunSquashTime",.01,.5,.01),C("feedback.gunKick",0,.3,.01),C("feedback.bodyKick",0,.3,.01),C("feedback.dummyBurstTime",.01,1,.01),C("feedback.dummyRespawnPop",0,1,.01),C("feedback.faceMaxOpacity",0,1,.05),C("feedback.edgeMaxOpacity",0,1,.05),C("feedback.hitFlashTime",.05,2,.01),C("feedback.hitKick",0,3,.05),C("feedback.hurtVolume",0,1,.05),C("feedback.enemyFlashSize",.05,1.5,.05),C("feedback.enemyTracerTime",.01,.3,.01),C("feedback.enemyTracerWidth",.005,.2,.005),C("feedback.glintSize",.02,.4,.01),C("feedback.blasterVolume",0,1,.05),C("feedback.chargeVolume",0,1,.05),C("feedback.pickupVolume",0,1,.05),C("feedback.barkTime",.2,6,.1),C("feedback.barkGap",0,12,.5),C("feedback.barkMinShow",0,4,.1),C("feedback.bashVolume",0,1,.05),C("feedback.revVolume",0,1,.05),C("feedback.cutVolume",0,1,.05),C("feedback.throwVolume",0,1,.05),C("feedback.clankVolume",0,1,.05),C("feedback.boomVolume",0,1,.05),C("feedback.saunaVolume",0,1,.05),C("feedback.reviveVolume",0,1,.05),C("feedback.tobbleShotVolume",0,1,.05),C("feedback.blastSize",.2,8,.1),C("feedback.blastTime",.05,2,.01),C("feedback.executeShake",0,.3,.005),C("feedback.cutGelEvery",.02,1,.01),C("feedback.arcDot",.01,.5,.01),C("melee.holdTime",0,5,.01),C("melee.bashTime",0,5,.01),C("melee.bashHitAt",0,5,.01),C("melee.bashRange",0,10,.05),C("melee.bashAngle",0,180,1),C("melee.bashDamage",0,500,1),C("melee.bashLunge",0,10,.05),C("melee.bashCooldown",0,5,.01),C("melee.revSpeed",0,30,.1),C("melee.revPulse",.05,5,.01),C("melee.cutterReach",0,10,.05),C("melee.cutterAngle",0,180,1),C("melee.cutTime",0,5,.01),C("melee.finishTime",0,5,.01),C("melee.executeRange",0,10,.05),C("melee.executeAngle",0,180,1),C("melee.promptRange",0,10,.05),C("melee.cutterSpin",0,100,1),C("grenade.carry",0,10,1),C("grenade.start",0,10,1),C("grenade.throwSpeed",0,30,.1),C("grenade.throwLift",0,180,1),C("grenade.gravity",.5,30,.1),C("grenade.ballRadius",.02,1,.01),C("grenade.restitution",0,1,.01),C("grenade.friction",0,1,.01),C("grenade.fuse",0,5,.01),C("grenade.radius",0,10,.05),C("grenade.damage",0,500,1),C("grenade.killRadius",0,10,.05),C("grenade.killDamage",0,500,1),C("grenade.selfDamage",0,2,.05),C("grenade.padReach",0,10,.05),C("grenade.arcTime",0,5,.01),C("grenade.throwTime",0,5,.01)]),J2=new Map(xl.map(t=>[t.path,t])),vl=structuredClone(q);function Pr(t,e){let n=t;for(let i of e.split(".")){if(n===null||typeof n!="object")return;n=n[i]}return n}function Ep(t,e,n){let i=e.split("."),s=t;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=n,!0}function Ap(t=q,e=vl){let n={};for(let i of xl){let s=Pr(t,i.path);s!==Pr(e,i.path)&&(n[i.path]=s)}return n}function Jx(t,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let n=0;for(let i of Object.keys(e)){let s=J2.get(i);if(!s)continue;let r=e[i],o=Pr(vl,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||Ep(t,i,r)&&n++)}return n}function Tp(t,e){if(t===null||typeof t!="object")return JSON.stringify(t);if(Array.isArray(t))return`[${t.map(s=>Tp(s,e)).join(", ")}]`;let n="  ".repeat(e+1);return`{
${Object.keys(t).map(s=>`${n}${s}: ${Tp(t[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function jx(t=q){return["associate","camera","combat","cover","director","dummy","feedback","grenade","health","look","melee","move","pad","run","tobble","trainer","weapons"].map(e=>`  ${e}: ${Tp(t[e],1)},`).join(`
`)}var Rp="cr-tuning",j2={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},Q2=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function Qx(t){let e=t.split("."),n=e.slice(0,-1);return n.length===1&&n[0]==="camera"&&Q2.has(e[1])&&n.push("wall"),n[0]==="look"&&n[1]==="pad"&&(n[1]="lookPad"),n}function eA(){try{return window.localStorage}catch{return null}}function ev({storage:t=eA()}={}){let e=()=>{try{return t?t.getItem(Rp):null}catch{return null}},n=g=>{try{t&&(g===null?t.removeItem(Rp):t.setItem(Rp,g))}catch{}};try{let g=e();g&&Jx(q,JSON.parse(g))}catch{}let i=new Su({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let g=document.activeElement;g&&g!==document.body&&s.contains(g)&&g.blur&&g.blur()}s.addEventListener("click",g=>{let m=g.target;m&&m.closest&&m.closest(".lil-title")&&m.blur!==void 0&&r()});let o=new Map;function a(g){let m=i,x="";for(let y of g){if(x+=`.${y}`,!o.has(x)){let w=m.addFolder(j2[y]||y);w.close(),o.set(x,w)}m=o.get(x)}return m}function l(){let g=Ap();n(Object.keys(g).length?JSON.stringify(g):null)}for(let g of xl){let m=g.path.split("."),x=m[m.length-1],y=Pr(q,m.slice(0,-1).join(".")),w=typeof Pr(vl,g.path)=="boolean"?a(Qx(g.path)).add(y,x):a(Qx(g.path)).add(y,x,g.min,g.max,g.step);w.onChange(l),w.onFinishChange(r)}let c=null;function h(g){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let m=document.createElement("div");m.textContent="Press Cmd+C to copy",m.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=m,s.appendChild(m),s.appendChild(c)}c.value=g,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(g){c&&(c.hidden=!0,c.note.hidden=!0);let m=null;try{m=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(g):null}catch{m=null}if(!m){h(g);return}m.catch(()=>h(g))}let u={copyChanges(){r(),d(JSON.stringify(Ap(),null,2))},copyForFile(){r(),d(jx())},resetAll(){r();for(let g of xl)Ep(q,g.path,Pr(vl,g.path));n(null),i.controllersRecursive().forEach(g=>g.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let f=!1;function p(g){f=g,s.style.display=g?"":"none"}return p(!1),{toggle(){p(!f)},isOpen:()=>f}}var tv=Math.PI*2,jn=t=>t-tv*Math.round(t/tv),Ci=(t,e)=>Math.atan2(t,e);function yl(t){return Math.min(1,Math.hypot(t.moveX,t.moveY))}function hi(t,e){let n=Math.sin(t.camYaw),i=Math.cos(t.camYaw),s=-t.moveY*n-t.moveX*i,r=-t.moveY*i+t.moveX*n,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function Ht(t,e,n){let i=jn(e-t);return t+Math.max(-n,Math.min(n,i))}function Fo(t,e,n,i,s,r){let o=t.vel,a=(Math.hypot(e,n)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=n-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=n):(o[0]+=l/h*a,o[2]+=c/h*a)}var Cp=[0,0],js=[0,0,0],Bo=1e-9,tA=1.5;var Pp=(t=q)=>t.tobble?.playerReviveTime??tA;function nv(t,e,n){let i=e-t.pos[0],s=n-t.pos[2];Math.hypot(i,s)>1e-6&&(t.facing=t.facing+jn(Math.atan2(i,s)-t.facing)),t.heading=t.facing}function _l(t){t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0}var Tu={knocked:{acceptsTap:!1,selfMoves:!0,enter(t){_l(t),t.cover=null,t.coverTarget=null,t.scratch.prevOff=0},update(t,e,n){let i=t.scratch;t.aiming=!1,t.firing=!1;let s=i.time>0?i.time:0,r=t.stateTime>=s-Bo,o=r||!(s>0)?1:t.stateTime/s,a=i.dist*(1-(1-o)*(1-o)),l=a-i.prevOff;return i.prevOff=a,js[0]=i.dir[0]*l,js[1]=0,js[2]=i.dir[1]*l,t.moveBy(js,n,!1),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},bash:{acceptsTap:!1,selfMoves:!0,enter(t){t.aiming=!1,t.firing=!1,t.scratch.dir=[Math.sin(t.facing),Math.cos(t.facing)],t.scratch.prevOff=0,t.scratch.hit=!1,t.heading=t.facing},update(t,e,n){let i=q.melee,s=t.scratch;t.aiming=!1,t.firing=!1;let r=t.stateTime>=i.bashTime-Bo,o=r||!(i.bashTime>0)?1:t.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,js[0]=s.dir[0]*l,js[1]=0,js[2]=s.dir[1]*l,t.moveBy(js,n,!1),!s.hit&&(r||t.stateTime>=i.bashHitAt-Bo)&&(s.hit=!0,t.onAction?.({type:"bashHit"})),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(t){t.aiming=!1,t.firing=!1,t.heading=t.facing},update(t,e,n){let i=t.tuning,s=q.melee.revSpeed;t.aiming=!1,t.firing=!1,hi(e,Cp),Fo(t,Cp[0]*s,Cp[1]*s,s,n,i);let r=t.speed();return r>s&&(t.vel[0]*=s/r,t.vel[2]*=s/r),r>i.faceMinSpeed?t.facing=Ht(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n):t.facing=Ht(t.facing,e.camYaw,i.aimTurnRate*n),t.heading=t.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(t){_l(t)},update(t){return _l(t),t.stateTime<t.scratch.time-Bo?null:(t.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(t){_l(t)},update(t,e){return _l(t),e.interactHeld?t.stateTime<Pp()-Bo?null:(t.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},zo={bash(t,e){return t.state!=="move"&&t.state!=="sprint"||t.bashReadyAt>t.clock+Bo?!1:(t.bashReadyAt=t.clock+q.melee.bashCooldown,Number.isFinite(e)&&(t.facing=t.facing+jn(e-t.facing)),t.go("bash",{}),!0)},rev(t,e){return e?t.state!=="move"&&t.state!=="sprint"?!1:(t.go("rev",{}),!0):t.state!=="rev"?!1:(t.go("move",{}),!0)},execute(t,e,n){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("execute",{}),t.scratch.time=Number.isFinite(n)&&n>0?n:0,nv(t,e[0],e[1]),!0)},knock(t,e,n,i,s){if(t.state==="roll"||t.state==="execute"||t.state==="reviveTobble"||t.state==="knocked"||t.state==="downed")return!1;let r=Math.hypot(e,n);return r>1e-9?(t.go("knocked",{}),t.scratch.dir=[e/r,n/r],t.scratch.dist=i>0?i:0,t.scratch.time=s,!0):!1},reviveTobble(t,e){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("reviveTobble",{}),nv(t,e[0],e.length>2?e[2]:e[1]),!0)}};var $i=1e-9,Ip=Math.PI/180,sv=.05,nA=1.8,iA={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function rv(t=q.cover,e=q.move){return{radius:e.radius,gap:t.gap,endInset:t.endInset,minLength:t.minLength}}var sA=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],rA=t=>{for(let e of["a","b","tangent","normal"])Object.freeze(t[e]);return Object.freeze(t)};function ov(t,{radius:e,gap:n,endInset:i,minLength:s,exclude:r=[]}){let o=e+n,a=[];return t.forEach((l,c)=>{let h=iA[l.kind];if(!h)return;let d=t.filter((u,f)=>f!==c&&u.kind!=="floor"&&u.max[1]>sv&&u.min[1]<nA);for(let u of sA){let f=u.axis*2,p=2-f,g=(u.sign>0?l.max[f]:l.min[f])+u.sign*o,m=l.min[p],x=l.max[p],y=x-m,w=[];for(let S of d){if(!(g>S.min[f]-o+$i&&g<S.max[f]+o-$i))continue;let P=S.min[p]-o-m,R=S.max[p]+o-m;R>$i&&P<y-$i&&w.push([Math.max(P,0),Math.min(R,y)])}w.sort((S,P)=>S[0]-P[0]);let b=[];for(let S of w){let P=b[b.length-1];P&&S[0]<=P[1]+$i?P[1]=Math.max(P[1],S[1]):b.push([S[0],S[1]])}let M=[],_=0,v=!0;for(let[S,P]of b)S>_+$i&&M.push([_,S,v,!1]),_=P,v=!1;y>_+$i&&M.push([_,y,v,!0]),M.forEach(([S,P,R,D],T)=>{let L=`${c}${u.name}#${T}`;if(r.includes(L))return;let E=m+S+(R?i:0),N=m+P-(D?i:0),U=N-E;if(U<s-$i)return;let G=u.axis===0?[g,E]:[E,g],te=u.axis===0?[g,N]:[N,g];a.push(rA({id:L,kind:h,boxIndex:c,a:G,b:te,length:U,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[f]-l.min[f],openA:R,openB:D}))})}}),a}function Pi(t,e,n=[0,0]){return n[0]=t.a[0]+t.tangent[0]*e,n[1]=t.a[1]+t.tangent[1]*e,n}function Qs(t,e,n=q.cover){let i=e<=n.cornerZone,s=t.length-e<=n.cornerZone;return i&&s?e<=t.length-e?-1:1:i?-1:s?1:0}function bl(t,e){return e<0?t.openA:t.openB}var iv=.9,av=(t,e,n,i)=>ai(t,[e[0],iv,e[1]],[n[0],iv,n[1]],.9*i)===1;function Ml(t,e,n,i,s,r,o){let a=Math.cos(r.grabAngle*Ip),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*Ip,d=null;for(let u of t){let f=(n[0]-u.a[0])*u.normal[0]+(n[2]-u.a[1])*u.normal[1],p=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(f<-(r.gap+.02)||p<a||p<=$i)continue;let g=Math.max(f,0)/p,m=(n[0]+i[0]*g-u.a[0])*u.tangent[0]+(n[2]+i[1]*g-u.a[1])*u.tangent[1];if(m<-r.grabSlack||m>u.length+r.grabSlack)continue;let x=Math.max(0,Math.min(u.length,m)),y=Pi(u,x),w=y[0]-n[0],b=y[1]-n[2],M=Math.hypot(w,b);if(!(M>r.grabRange||d&&M>=d.dist)){if(M>.3){let _=(w*l+b*c)/M;if(Math.acos(Math.max(-1,Math.min(1,_)))>h)continue}av(e,[n[0],n[2]],y,o)&&(d={edge:u,t:x,point:y,dist:M})}}return d}function lv(t,e,n,i,s,r,o){if(Qs(n,i,r)!==s||!bl(n,s))return null;let a=Pi(n,i),l=Math.cos(r.swapAngle*Ip),c=null;for(let h of t){if(h===n||h.normal[0]*n.normal[0]+h.normal[1]*n.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),f=d<=u?0:h.length,p=Pi(h,f),g=p[0]-a[0],m=p[1]-a[1],x=Math.hypot(g,m);(g*n.tangent[0]+m*n.tangent[1])*s<=0||Math.abs(g*n.normal[0]+m*n.normal[1])>r.swapMaxOffset||x>r.swapRange||c&&x>=c.dist||av(e,a,p,o)&&(c={edge:h,t:f,point:p,dist:x})}return c}function oA(t,e,n,i){let s=e[1]+sv,r=e[1]+i;for(let o of t){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<n-$i)return!1}return!0}function cv(t,e,n,i,s,r){if(t.kind!=="low"||t.depth>i.vaultMaxDepth)return null;let o=Pi(t,e),a=t.depth+2*(s+i.gap),l=[o[0]-t.normal[0]*a,0,o[1]-t.normal[1]*a];if(!oA(n,l,s,r))return null;let c=n.filter((h,d)=>d!==t.boxIndex);return ai(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var aA=["coverSlide","cover","vault","coverSwap"],hv=Math.PI/180,on=[0,0],Au=[0,0],er=[0,0,0],fv=.001,lA=2,Lp=(t,e,n)=>Math.max(e,Math.min(n,t));function Dp(t,e,n){if(yl(e)>=t.coverTuning.grabMinTilt){hi(e,on);let i=Math.hypot(on[0],on[1]);n[0]=on[0]/i,n[1]=on[1]/i}else n[0]=Math.sin(t.facing),n[1]=Math.cos(t.facing);return n}var pv={name:"cover",state:"coverSlide",when(t,e){return t.coverTarget=Ml(t.coverEdges,t.boxes,t.pos,Dp(t,e,Au),e.camYaw,t.coverTuning,t.tuning.radius),t.coverTarget!==null}},Eu={};function mv(t,e){let n=t.coverTuning;if(!n.autoSlam||e.aim||yl(e)<n.autoMinTilt)return null;Object.assign(Eu,n),Eu.grabAngle=n.autoAngle,Eu.grabRange=n.autoDist,hi(e,on);let i=Math.hypot(on[0],on[1]);Au[0]=on[0]/i,Au[1]=on[1]/i;let s=Ml(t.coverEdges,t.boxes,t.pos,Au,e.camYaw,Eu,t.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(t.runVel[0]*r[0]+t.runVel[1]*r[1])>=n.autoMinSpeed?s:null}function cA(t,e,n){let i=Qs(t,e,n);return t.kind==="low"||i!==0&&bl(t,i)}function bs(t){return t.cover?t.cover.edge:t.scratch.edge||null}function Np(t){if(t.state==="downed")return"downed";if(t.state==="sprint")return"sprint";if(t.cover&&t.cover.pop>=.5)return"aim";if(t.state==="cover"||t.state==="coverSlide"||t.state==="coverSwap"){let e=bs(t);if(e)return e.kind==="low"?"coverLow":"coverTall"}return t.aiming?"aim":"normal"}function Ir(t){let e=t.cover;if(!e)return 1;let n=e.edge,i=e.popEnd;if(i===0&&(i=Qs(n,e.t,t.coverTuning)),i===0)return 1;let s=Ci(-n.normal[0],-n.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=n.tangent[0]*i*r+n.tangent[1]*i*o<0?-1:1;return bl(n,i)?a:-a}function uv(t,e,n,i){let s=t.coverTarget;t.coverTarget=null;let r=t.scratch;r.edge=s.edge,r.t=s.t,r.from=[t.pos[0],t.pos[1],t.pos[2]],r.to=[s.point[0],t.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(fv,Lp(o/Math.max(e,1e-6),n,i)),t.aiming=!1}function dv(t,e,n,i){let s=t.scratch,r=Math.min(1,t.stateTime/s.dur+1e-9);return er[0]=s.from[0]+(s.to[0]-s.from[0])*r-t.pos[0],er[1]=0,er[2]=s.from[2]+(s.to[2]-s.from[2])*r-t.pos[2],t.moveBy(er,e,!1),i!==null&&(t.facing=Ht(t.facing,i,n*e)),t.heading=t.facing,r<1?null:Math.hypot(t.pos[0]-s.to[0],t.pos[2]-s.to[2])>.1?"move":(t.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},t.vel[0]=t.vel[1]=t.vel[2]=0,t.slams++,"cover")}var hA={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;uv(t,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(t,e,n){let i=t.scratch.edge;return dv(t,n,t.coverTuning.slideTurnRate,Ci(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;t.cover=null,uv(t,e.swapSpeed,0,lA);let n=t.scratch;t.heading=Ci(n.to[0]-n.from[0],n.to[2]-n.from[2]),t.facing=t.facing+jn(t.heading-t.facing)},update(t,e,n){return dv(t,n,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTarget;t.coverTarget=null;let n=t.scratch,i=e.edge;t.cover=null,t.aiming=!1,n.edge=i,n.landing=e.landing,n.from=[t.pos[0],t.pos[2]],t.heading=Ci(-i.normal[0],-i.normal[1]),t.facing=t.facing+jn(t.heading-t.facing)},update(t,e,n){let i=t.scratch,s=t.coverTuning,r=Math.min(1,t.stateTime/Math.max(s.vaultTime,fv)+1e-9);return t.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,t.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(t.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,t.vel[1]=0,t.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(t){t.cover=null,t.aiming=!1},update(t,e,n){let i=t.coverTuning,s=t.cover,r=s.edge,o=t.tuning,a=hi(e,on),l=Math.hypot(on[0],on[1]),c=l>0?on[0]/l:0,h=l>0?on[1]/l:0,d=r.normal[0],u=r.normal[1],f=a>=i.leaveTilt,p=(S,P)=>(t.vel[0]=S*o.jog,t.vel[1]=0,t.vel[2]=P*o.jog,"move");if(f&&c*d+h*u>=Math.cos(i.leaveAngle*hv))return p(on[0],on[1]);if(e.tap&&f){let S=Math.cos(i.pushAngle*hv);if(-(c*d+h*u)>=S){let R=cv(r,s.t,t.boxes,i,o.radius,o.height);if(R)return t.coverTarget={landing:R,edge:r},"vault"}let P=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(P)>=S){let R=lv(t.coverEdges,t.boxes,r,s.t,P>0?1:-1,i,o.radius);if(R)return t.coverTarget=R,"coverSwap"}}let g=Qs(r,s.t,i),m=cA(r,s.t,i),x=e.aim&&m?1:0,y=e.fire&&!e.aim&&m?1:0,w=i.popTime>0?n/i.popTime:1;s.pop=s.pop<x?Math.min(x,s.pop+w):Math.max(x,s.pop-w);let b=i.blindTime>0?n/i.blindTime:1;s.blind=s.blind<y?Math.min(y,s.blind+b):Math.max(y,s.blind-b),s.popEnd=s.pop>0&&r.kind!=="low"?g:0,s.blindEnd=s.blind>0&&r.kind!=="low"?g:0,s.exposed=s.pop>=.5,t.aiming=s.exposed;let M=!1;if(s.pop===0&&s.blind===0){let S=on[0]*r.tangent[0]+on[1]*r.tangent[1];if(Math.abs(S)>=i.alongDeadzone){let P=s.t+S*i.moveSpeed*n;if(s.t=Lp(P,0,r.length),P!==s.t&&bl(r,S>0?1:-1)&&(M=!0,s.endPush+=n,s.endPush>=i.endLeaveTime))return p(r.tangent[0]*Math.sign(S),r.tangent[1]*Math.sign(S))}}else s.blindEnd!==0&&y===1&&(s.t=Lp(s.t+s.blindEnd*i.moveSpeed*n,0,r.length));M||(s.endPush=0);let _=Pi(r,s.t),v=s.popEnd*i.popShift*s.pop;return er[0]=_[0]+r.tangent[0]*v-t.pos[0],er[1]=0,er[2]=_[1]+r.tangent[1]*v-t.pos[2],t.moveBy(er,n,!1),s.pop>0?t.facing=Ht(t.facing,e.camYaw,o.aimTurnRate*n):t.facing=Ht(t.facing,Ci(-d,-u),o.turnRate*n),t.heading=t.facing,null}}},gv=Object.fromEntries(aA.map(t=>[t,hA[t]]));var Cu=t=>[Math.sin(t),0,Math.cos(t)],Pu=t=>[-Math.cos(t),0,Math.sin(t)],uA=(t,e,n)=>e*(1-(1-t)**n),bn=[0,0],Ru=[0,0,0];function Op(t,e,n){return e.sprint&&!e.aim&&!e.grenade&&yl(e)>=n.stickSprintMin}var dA={move:{acceptsTap:!0,enter(){},update(t,e,n){let i=t.tuning;if(Op(t,e,i))return"sprint";t.aiming=e.aim,t.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return hi(e,bn),Fo(t,bn[0]*s,bn[1]*s,s,n,i),e.aim||e.fire||e.grenade?t.facing=Ht(t.facing,e.camYaw,i.aimTurnRate*n):t.speed()>i.faceMinSpeed&&(t.facing=Ht(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n)),t.heading=t.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(t,e){t.aiming=!1,t.speed()>t.tuning.sprintHeadingMinSpeed?t.heading=Math.atan2(t.vel[0],t.vel[2]):hi(e,bn)>.01?t.heading=Math.atan2(bn[0],bn[1]):t.heading=t.facing},update(t,e,n){let i=t.tuning;return Op(t,e,i)?(hi(e,bn),t.heading=Ht(t.heading,Math.atan2(bn[0],bn[1]),i.sprintTurnRate*n),Fo(t,Math.sin(t.heading)*i.sprint,Math.cos(t.heading)*i.sprint,i.sprint,n,i),t.facing=t.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(t,e){t.aiming=!1;let n=t.scratch;if(n.dir=[Math.sin(t.facing),Math.cos(t.facing)],hi(e,bn)>.01){let i=Math.hypot(bn[0],bn[1]);n.dir[0]=bn[0]/i,n.dir[1]=bn[1]/i}n.prevOff=0,n.queued=!1,t.heading=Math.atan2(n.dir[0],n.dir[1]),t.facing=t.facing+jn(t.heading-t.facing)},update(t,e,n){let i=t.tuning,s=t.scratch;e.tap&&t.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=t.stateTime>=i.rollTime-1e-9,o=uA(r?1:t.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,Ru[0]=s.dir[0]*a,Ru[1]=0,Ru[2]=s.dir[1]*a,t.moveBy(Ru,n,!1),r?s.queued?"roll":Op(t,e,i)?"sprint":(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(t){t.cover=null,t.coverTarget=null,t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0},update(t,e,n){let i=t.tuning;return t.aiming=!1,t.firing=!1,hi(e,bn),Fo(t,bn[0]*i.crawlSpeed,bn[1]*i.crawlSpeed,i.crawlSpeed,n,i),t.speed()>i.faceMinSpeed&&(t.facing=Ht(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.crawlTurnRate*n)),t.heading=t.facing,null},exit(){}},...gv,...Tu},fA=[pv,{name:"roll",when:()=>!0,state:"roll"}];function xv({boxes:t,spawn:e,tuning:n=q.move,coverTuning:i=q.cover,coverEdges:s=[],states:r=dA,contextActions:o=fA,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:n,boxes:t,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(d,u,f=!0){let p=h.pos,g=_n(h.boxes,p,d,n.radius,n.height);if(h.hit=!!g.hit,!f)u>0&&(h.vel[0]=(g.pos[0]-p[0])/u,h.vel[2]=(g.pos[2]-p[2])/u);else if(g.hit)if(u>0)h.vel[0]=(g.pos[0]-p[0])/u,h.vel[2]=(g.pos[2]-p[2])/u;else{let m=g.normal,x=h.vel[0]*m[0]+h.vel[1]*m[1]+h.vel[2]*m[2];x<0&&(h.vel[0]-=m[0]*x,h.vel[1]-=m[1]*x,h.vel[2]-=m[2]*x)}p[0]=g.pos[0],p[1]=g.pos[1],p[2]=g.pos[2]},go(d,u){let f=h.state;r[f].exit?.(h),h.state=d,h.stateTime=0,h.entries++,h.scratch={},r[f].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[d].enter(h,u),h.onState?.(d,f,u)},down(){h.go("downed",{})},bash(d){return zo.bash(h,d)},rev(d){return zo.rev(h,d)},execute(d,u){return zo.execute(h,d,u)},reviveTobble(d){return zo.reviveTobble(h,d)},knock(d,u,f,p){return zo.knock(h,d,u,f,p)},revive(){h.state==="downed"&&h.go("move",{})},place(d,u){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=d[0],h.pos[1]=h.prevPos[1]=d[1],h.pos[2]=h.prevPos[2]=d[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,u!==void 0?h.facing=h.prevFacing=h.heading=u:h.prevFacing=h.facing},update(d,u){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,u>0&&(h.clock+=u),h.grenadeAim=!!d.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),d.tap&&r[h.state].acceptsTap){for(let g of o)if(g.when(h,d)){h.go(g.state,d);break}}h.stateTime+=u;let f=r[h.state].update(h,d,u),p=h.state;if(!r[p].selfMoves){let g=h.vel[0],m=h.vel[2],x=Math.hypot(g,m);h.moveBy([h.vel[0]*u,0,h.vel[2]*u],u,!0),h.hit?(h.hitTime+=u,(x>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=g,h.runVel[1]=m)):(h.runVel[0]=g,h.runVel[1]=m,h.hitTime=0)}if(p==="move"||p==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let m=Math.max(.1,p==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=m&&(h.stepDist%=m,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:p==="sprint",speed:h.speed()}))}if(p==="move"||p==="sprint"){let g=mv(h,d);if(!g)h.autoTimer=0;else if((h.autoTimer+=u)>=h.coverTuning.autoTime){h.coverTarget=g,h.go("coverSlide",d);return}}f&&h.go(f,d)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function vv({AudioContextCtor:t=globalThis.AudioContext}={}){let e=null,n=null,i=!1,s=null;function r(){if(e||i||!t)return e;try{e=new t;let p=Math.max(1,Math.floor(e.sampleRate*.4));n=e.createBuffer(1,p,e.sampleRate);let g=n.getChannelData(0);for(let m=0;m<p;m++)g[m]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(p){if(!(p>0||p<0)||!e.createStereoPanner)return e.destination;let g=e.createStereoPanner();return g.pan.value=Math.max(-1,Math.min(1,p)),g.connect(e.destination),g}let a=()=>{if(e.state==="suspended"){let p=e.resume();p&&p.catch&&p.catch(()=>{})}};function l(p,g,m){let x=e.createGain();return x.gain.setValueAtTime(m,p),x.gain.exponentialRampToValueAtTime(.001,p+g),x.connect(s),x}function c(p,g,m,x,y,w){let b=e.createOscillator();b.type=g,b.frequency.setValueAtTime(m,y),x!==m&&b.frequency.exponentialRampToValueAtTime&&b.frequency.exponentialRampToValueAtTime(x,y+w),b.connect(p),b.start(y),b.stop(y+w)}function h(p,g,m,x,y){let w=e.createBufferSource();w.buffer=n;let b=e.createBiquadFilter();b.type=g,b.frequency.setValueAtTime(m,x),w.connect(b),b.connect(p),w.start(x),w.stop(x+y)}function d(p,g,m,x,y,w){let b=e.createBufferSource();b.buffer=n;let M=e.createBiquadFilter();M.type=g,M.frequency.setValueAtTime(m,y),M.frequency.exponentialRampToValueAtTime&&M.frequency.exponentialRampToValueAtTime(x,y+w),b.connect(M),M.connect(p),b.start(y),b.stop(y+w)}let u=(p,g,m)=>{let x=l(p,.03,m);h(x,"bandpass",g,p,.03)},f={rifle:(p,g)=>{h(l(p,.05,g*.55),"bandpass",2200,p,.05),c(l(p,.16,g*.9),"sine",150,48,p,.16),c(l(p,.22,g*.8),"sine",62,34,p,.22),h(l(p,.26,g*.35),"lowpass",700,p,.26)},pistol:(p,g)=>{h(l(p,.06,g*.6),"bandpass",2e3,p,.06),c(l(p,.2,g*.9),"sine",130,42,p,.2),c(l(p,.26,g*.85),"sine",56,30,p,.26),h(l(p,.3,g*.4),"lowpass",600,p,.3)},dry:(p,g)=>c(l(p,.02,g),"square",1200,1200,p,.02),hit:(p,g)=>c(l(p,.04,g),"sine",1600,1600,p,.04),head:(p,g)=>{let m=l(p,.06,g);c(m,"sine",2400,2400,p,.06),c(m,"sine",3200,3200,p,.06)},kill:(p,g)=>{let m=l(p,.12,g);c(m,"sine",300,900,p,.12);let x=l(p,.2,g*.8);h(x,"lowpass",1400,p,.2)},magOut:(p,g)=>{u(p,3e3,g),u(p+.08,2200,g)},magIn:(p,g)=>{u(p,2e3,g),u(p+.08,3400,g)},perfect:(p,g)=>{let m=l(p,.35,g);c(m,"sine",1320,1320,p,.35),c(m,"sine",1980,1980,p,.35)},good:(p,g)=>c(l(p,.15,g),"sine",990,990,p,.15),jam:(p,g)=>c(l(p,.15,g),"square",90,90,p,.15),blaster:(p,g)=>{let m=l(p,.1,g);c(m,"square",900,300,p,.1),h(m,"bandpass",1500,p,.1)},charge:(p,g)=>{let m=e.createGain();m.gain.setValueAtTime(.001,p),m.gain.exponentialRampToValueAtTime(g,p+.3),m.gain.exponentialRampToValueAtTime(.001,p+.35),m.connect(s),c(m,"sine",300,900,p,.35)},hurt:(p,g)=>{let m=l(p,.15,g);h(m,"lowpass",600,p,.15),c(m,"sine",80,80,p,.15)},downed:(p,g)=>c(l(p,.6,g),"sine",400,80,p,.6),clear:(p,g)=>{[523,659,784].forEach((m,x)=>c(l(p+x*.12,.15,g),"sine",m,m,p+x*.12,.15))},pickup:(p,g)=>{c(l(p,.06,g),"sine",880,880,p,.06),c(l(p+.07,.08,g),"sine",1320,1320,p+.07,.08)},thud:(p,g)=>{c(l(p,.32,g),"sine",60,30,p,.32),h(l(p,.28,g*.6),"lowpass",260,p,.28),h(l(p,.07,g*.3),"bandpass",900,p,.07)},bash:(p,g)=>{c(l(p,.2,g),"sine",120,40,p,.2),h(l(p,.06,g*.6),"bandpass",1800,p,.06)},rev:(p,g)=>{c(l(p,.25,g*.5),"sawtooth",180,260,p,.25),h(l(p,.25,g*.25),"bandpass",2600,p,.25)},cut:(p,g)=>{c(l(p,.3,g*.5),"sawtooth",150,105,p,.3),h(l(p,.3,g*.5),"bandpass",900,p,.3),h(l(p,.2,g*.3),"lowpass",400,p,.2)},finish:(p,g)=>{c(l(p,.4,g),"sine",70,26,p,.4),h(l(p,.3,g*.5),"lowpass",220,p,.3)},throw:(p,g)=>{d(l(p,.3,g*.6),"bandpass",400,1600,p,.3),c(l(p,.18,g*.5),"sawtooth",140,85,p+.02,.18)},clank:(p,g)=>{let m=l(p,.14,g*.6);c(m,"square",1450,1450,p,.14),c(m,"square",2230,2230,p,.14),h(l(p,.04,g*.5),"bandpass",3500,p,.04)},boom:(p,g)=>{c(l(p,.5,g),"sine",50,50,p,.5),c(l(p,.3,g*.7),"sine",110,40,p,.3),h(l(p,.45,g*.6),"lowpass",500,p,.45)},saunaOpen:(p,g)=>{d(l(p,.5,g*.7),"bandpass",700,3200,p,.5)},saunaClose:(p,g)=>{d(l(p,.3,g*.6),"bandpass",2600,600,p,.3),c(l(p+.28,.2,g),"sine",95,45,p+.28,.2)},revive:(p,g)=>{c(l(p,.2,g*.8),"triangle",440,440,p,.2),c(l(p+.17,.3,g),"triangle",660,660,p+.17,.3)},tobbleShot:(p,g)=>{c(l(p,.07,g),"sine",700,280,p,.07),h(l(p,.04,g*.5),"bandpass",2800,p,.04)},step:(p,g)=>{c(l(p,.1,g),"sine",95,50,p,.1),h(l(p,.07,g*.5),"lowpass",280,p,.07)}};return{play(p,g,m=0){let x=f[p];if(!(!x||!(g>0)||!r()))try{a(),s=o(m),x(e.currentTime,g)}catch{}},unlock(){if(r())try{a()}catch{}}}}function yv(){let t=!1;return{update(e,n,i){return i?(n&&(t=!0),e||(t=!1),{fire:t&&!!e,firePressed:!!n}):(t=!1,{fire:!1,firePressed:!1})},reset(){t=!1}}}var Iu=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),_v=Object.freeze(["regret",null,"pistol"]);function bv(t,e){return t>=e.perfectStart&&t<=e.perfectEnd?"perfect":t>=e.goodStart&&t<=e.goodEnd?"good":"jam"}function kp(t,e,n,i){let s=Math.max(t.reloadTime,i.minReloadTime);return n==="perfect"?Math.min(e+t.perfectFinish,s):n==="good"?Math.min(e+t.goodFinish,s):n==="jam"?s+t.jamPenalty:s}var pA={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function Mv({weapons:t=q.weapons,combat:e=q.combat,loadout:n=_v}={}){let i={},s=()=>{for(let g of n)g&&Object.assign(i[g]||(i[g]={}),{mag:Math.floor(t[g].mag),reserve:Math.floor(t[g].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,n.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>n[o.slot],l=(g,m)=>g[pA[m]||"spreadHip"],c=g=>g!=null&&o.reload===null&&o.switching<=0;function h(){let g=a(),m=t[g],x=i[g];return o.reload===null&&o.switching<=0&&x.mag<m.mag&&(m.infiniteReserve>0||x.reserve>0)}function d(){let g=a(),m=t[g];o.reload={id:g,t:0,press:null,end:kp(m,0,"normal",e)},i[g].boost=!1,r.push({type:"reloadStart",id:g})}function u(){let{id:g,press:m}=o.reload,x=t[g],y=i[g],w=Math.max(0,x.mag-y.mag);if(x.infiniteReserve>0)y.mag+=w;else{let b=Math.min(w,y.reserve);y.mag+=b,y.reserve-=b}y.boost=m==="perfect",o.reload=null,r.push({type:"reloadDone",id:g,result:m||"normal"})}function f(g){g===o.slot||!n[g]||(o.reload=null,o.slot=g,o.switching=t[n[g]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:n[g]}))}function p(g){let m=n.length;for(let x=1;x<m;x++){let y=(o.slot+g*x+m*m)%m;if(n[y])return f(y)}}return o.current=a,o.canFire=c,o.spreadOf=g=>l(t[a()],g)+i[a()].bloom,o.update=function(m,x,y){r.length=0,(!(y>0)||!Number.isFinite(y))&&(y=0);let w=m.weapon;w==="next"?p(1):w==="prev"?p(-1):(w===1||w===2||w===3)&&f(w-1),o.switching-=y;for(let R of n)R&&(i[R].bloom=Math.max(0,i[R].bloom-t[R].bloomRecover*y));let b=a(),M=t[b],_=i[b];if(m.reload){if(o.reload===null)h()&&d();else if(o.reload.press===null){let R=o.reload,D=Math.max(M.reloadTime,e.minReloadTime);R.press=bv(R.t/D,M),R.end=kp(M,R.t,R.press,e),r.push({type:"reloadPress",id:b,result:R.press})}}o.reload!==null&&(o.reload.t+=y,o.reload.t>=o.reload.end&&u()),m.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=y,m.fire||(o.dryLatched=!1),c(x)||(o.buffer=0);let v=M.auto>0,S=v?!!m.fire:o.buffer>0,P=1/Math.max(M.rate,e.minRate);for(o.cooldown-=y,S||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-P);S&&c(x)&&o.cooldown<=0;){if(_.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:b})),o.buffer=0,e.autoReload>0&&h()&&d();break}if(_.mag--,r.push({type:"shot",id:b,mult:_.boost?M.perfectDamage:1,spread:o.spreadOf(x)}),_.bloom=Math.min(M.bloomMax,_.bloom+M.bloomPerShot),o.cooldown+=P,_.mag===0&&(_.boost=!1),!v){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,n.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(g,m)=>{let x=i[g];!x||t[g].infiniteReserve>0||!(m>0)||(x.reserve=Math.max(x.reserve,Math.min(Math.floor(t[g].reserveMax),x.reserve+Math.floor(m))))},o.refill=()=>{for(let g of n)g&&(i[g].reserve=Math.floor(t[g].reserveMax))},o.set=(g,{mag:m,reserve:x}={})=>{i[g]&&(m!==void 0&&(i[g].mag=m),x!==void 0&&(i[g].reserve=x))},o}function wv(t){if(t.grenadeAim||Object.hasOwn(Tu,t.state))return null;if(t.state==="move")return t.aiming?"aim":t.firing?"hip":null;if(t.state==="cover"&&t.cover){if(t.cover.pop===1)return"aim";if(t.cover.blind===1)return"blind"}return null}var Ho=[0,0];function Lu(t,e,n,i=q.combat,s=[0,0,0]){if(e==="blind"&&t.cover){let l=t.cover,c=l.edge,h=t.tuning.radius+t.coverTuning.gap,d=c.normal;if(c.kind==="low")Pi(c,l.t,Ho),s[0]=Ho[0]-d[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=Ho[1]-d[1]*(h+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;Pi(c,u<0?0:c.length,Ho);let f=t.coverTuning.endInset+i.blindReach;s[0]=Ho[0]+c.tangent[0]*u*f-d[0]*h,s[1]=i.muzzleUp,s[2]=Ho[1]+c.tangent[1]*u*f-d[1]*h}return s}let r=i.muzzleRight*Ir(t),o=Math.sin(n),a=Math.cos(n);s[1]=t.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=t.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=t.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!Uo(t.boxes,s,0)));l-=.25);return s}function mA(t,e,n,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(t[o]<n.min[o]||t[o]>n.max[o])return 1/0}else{let a=(n.min[o]-t[o])/e[o],l=(n.max[o]-t[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function Up(t,e,n,i,s=1/0){let r=t[0]-n[0],o=t[1]-n[1],a=t[2]-n[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let d=-l-Math.sqrt(h);return d>=0&&d<=s?d:1/0}function gA(t,e,n,i,s,r=1/0){let o=i[0]-n[0],a=i[1]-n[1],l=i[2]-n[2],c=t[0]-n[0],h=t[1]-n[1],d=t[2]-n[2],u=o*o+a*a+l*l,f=o*c+a*h+l*d,p=u>1e-12?Math.max(0,Math.min(1,f/u)):0,g=c-o*p,m=h-a*p,x=d-l*p;if(g*g+m*m+x*x<=s*s)return 0;let y=Math.min(Up(t,e,n,s,r),Up(t,e,i,s,r));if(u>1e-12){let w=o*e[0]+a*e[1]+l*e[2],b=e[0]*c+e[1]*h+e[2]*d,M=c*c+h*h+d*d,_=u-w*w;if(_>1e-12*u){let v=u*b-f*w,S=u*M-f*f-s*s*u,P=v*v-_*S;if(P>=0){let R=(-v-Math.sqrt(P))/_,D=f+R*w;R>=0&&R<=r&&D>0&&D<u&&R<y&&(y=R)}}}return y}function Mn(t,e,n,i,s,{ignoreBox:r=-1}={}){let o=n,a="none",l=null,c=-1,h=!1;for(let d=0;d<i.length;d++){if(d===r)continue;let u=mA(t,e,i[d],o);u<=o&&u!==1/0&&(o=u,a="world",c=d,l=null,h=!0)}for(let d of s){if(!d.alive)continue;let{head:u,body:f}=d.shapes,p=Up(t,e,u.c,u.r,o);p<=o&&p!==1/0&&(o=p,a="head",l=d,c=-1,h=!0);let g=gA(t,e,f.a,f.b,f.r,o);g<=o&&g!==1/0&&(o=g,a="body",l=d,c=-1,h=!0)}return h?{t:o,point:[t[0]+e[0]*o,t[1]+e[1]*o,t[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[t[0]+e[0]*n,t[1]+e[1]*n,t[2]+e[2]*n],kind:"none",target:null,boxIndex:-1}}function Go(t,e,n,i=[0,0,0]){if(!(e>0))return i[0]=t[0],i[1]=t[1],i[2]=t[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*n(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*n(),l=Math.abs(t[1])<.9?0:1,c=l===0?1:0,h=t[1]*0-t[2]*c,d=t[2]*l-t[0]*0,u=t[0]*c-t[1]*l,f=Math.hypot(h,d,u);h/=f,d/=f,u/=f;let p=t[1]*u-t[2]*d,g=t[2]*h-t[0]*u,m=t[0]*d-t[1]*h,x=Math.cos(a)*o,y=Math.sin(a)*o;return i[0]=t[0]*r+h*x+p*y,i[1]=t[1]*r+d*x+g*y,i[2]=t[2]*r+u*x+m*y,i}function Sv({lens:t,view:e,muzzle:n,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let m=Go(e,i,l),x=Mn(t,m,s,r,o,{ignoreBox:a}),y=[x.point[0]-n[0],x.point[1]-n[1],x.point[2]-n[2]],w=Math.hypot(y[0],y[1],y[2]),b=w>1e-9?[y[0]/w,y[1]/w,y[2]/w]:[m[0],m[1],m[2]];return{from:n,dir:b,hit:x}}let h=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),d=Mn(t,e,s+h,r,o,{ignoreBox:a}),u=d.kind==="none"?[t[0]+e[0]*s,t[1]+e[1]*s,t[2]+e[2]*s]:d.point,f=[u[0]-n[0],u[1]-n[1],u[2]-n[2]],p=Math.hypot(f[0],f[1],f[2]);p>1e-9?(f[0]/=p,f[1]/=p,f[2]/=p):(f[0]=e[0],f[1]=e[1],f[2]=e[2]);let g=Go(f,i,l);return{from:n,dir:g,hit:Mn(n,g,s,r,o)}}var gt=Object.freeze({head:Object.freeze({cy:Nt.neckY+Nt.head.centerY,r:Nt.head.rx}),body:Object.freeze({ay:Nt.ankleHeight,by:Nt.neckY,r:Math.max(...Nt.torso.shirt.map(t=>t[0]))})});function Tv(t,e=q.combat.hitPad){let[n,i,s]=t.pos,r=t.shapes;r.head.c[0]=n,r.head.c[1]=i+gt.head.cy,r.head.c[2]=s,r.head.r=gt.head.r+e,r.body.r=gt.body.r+e,r.body.a[0]=n,r.body.a[1]=i+gt.body.ay,r.body.a[2]=s,r.body.b[0]=n,r.body.b[1]=i+gt.body.by,r.body.b[2]=s}function Ev({id:t,pos:e,yaw:n=0,rail:i=null},s=q.dummy){let r={id:t,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:n,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:gt.body.r}}};return Tv(r),r}function xA(t,e){let n=t%(4*e);return n<e?n:n<3*e?2*e-n:n-4*e}function Av(t,e,n=q.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!t.alive)t.respawnT-=e,t.respawnT<=0&&(t.alive=!0,t.respawnT=0,t.health=n.health,t.railT=0,t.pos[0]=t.home[0],t.pos[1]=t.home[1],t.pos[2]=t.home[2]);else if(t.rail&&t.rail.half>0){t.railT+=e*Math.max(0,n.railSpeed);let i=xA(t.railT,t.rail.half),s=t.rail.axis==="x"?0:2;t.pos[0]=t.home[0],t.pos[2]=t.home[2],t.pos[s]=t.home[s]+i}Tv(t)}function Rv(t,e,n=q.dummy){return!t.alive||!(e>0)?null:(t.health-=e,t.health>0?"hit":(t.health=0,t.alive=!1,t.respawnT=n.respawnTime,"kill"))}function Fp(t,e,n=1){return e!=="head"&&e!=="body"?0:t.damage*n*(e==="head"?t.headMult:1)}function Cv(t,e,n){for(let i of e)if(Math.hypot(t[0]-i.pos[0],t[2]-i.pos[2])<=n)return!0;return!1}function Pv(t){let e=new Float32Array(t),n=new Uint8Array(t),i=0;return{ages:e,alive:s=>n[s]===1,spawn(){let s=-1;for(let r=0;r<t;r++){let o=(i+r)%t;if(!n[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<t;r++)e[r]>e[s]&&(s=r)}return n[s]=1,e[s]=0,i=(s+1)%t,s},clear(){n.fill(0)},update(s,r){for(let o=0;o<t;o++)n[o]&&(e[o]+=s,e[o]>r(o)&&(n[o]=0))}}}var vA=new B(0,0,1);function Iv(t,e=()=>q.feedback){let n=new Kt,i=(T=1)=>(Math.random()*2-1)*T;function s(T,L,E){let N=new us(T,Pt({color:L,rim:0}),E);N.frustumCulled=!1,N.count=E,n.position.set(0,-1e3,0),n.scale.setScalar(0),n.updateMatrix();for(let U=0;U<E;U++)N.setMatrixAt(U,n.matrix);return t.add(N),{mesh:N,pool:Pv(E),pos:new Float32Array(E*3),vel:new Float32Array(E*3),aux:new Float32Array(E*4)}}let r=s(new wo(.5,0),z.playerOrange,8),o=s(new vt(1,1,1),z.playerOrange,24),a=s(new wo(.5,0),z.gel,8),l=s(new vt(1,1,1),z.gel,24),c=s(new vt(.05,.05,.05),z.cream,48),h=s(new yr(.5,0),z.gel,96),d=s(new vt(.16,.2,.012),z.cream,48),u=s(new yr(.5,0),z.cream,40),f=s(new yr(.5,1),z.planet,4),p=s(new vt(1,1,1),z.playerOrange,16),g=new B;function m(T,L){n.updateMatrix(),T.mesh.setMatrixAt(L,n.matrix),T.mesh.instanceMatrix.needsUpdate=!0}let x=(T,L)=>{n.position.set(0,-1e3,0),n.scale.setScalar(0),n.quaternion.identity(),m(T,L)},y=(T,L,E,N,U)=>{T.pos[L*3]=E,T.pos[L*3+1]=N,T.pos[L*3+2]=U},w=(T,L,E,N,U)=>{T.vel[L*3]=E,T.vel[L*3+1]=N,T.vel[L*3+2]=U};function b(T,L,E,N,U){let G=E[0]+i(N),te=E[1]+i(N),X=E[2]+i(N),ne=Math.hypot(G,te,X)||1;w(T,L,G/ne*U*(.5+Math.random()*.5),te/ne*U*(.5+Math.random()*.5),X/ne*U*(.5+Math.random()*.5))}let M=[];function _(T,L,E,N){M.push({k:T,life:L,shown:new Uint8Array(T.pool.ages.length),step(U){let G=e().gravity,te=T;for(let X=0;X<te.pool.ages.length;X++)if(te.pool.alive(X)){te.vel[X*3+1]-=G*U;for(let ne=0;ne<3;ne++)te.pos[X*3+ne]+=te.vel[X*3+ne]*U}},draw(U){let G=1-T.pool.ages[U]/L();n.position.set(T.pos[U*3],T.pos[U*3+1],T.pos[U*3+2]),n.scale.setScalar(E(U)*Math.max(0,G)),N?n.rotation.set(T.aux[U*4]+T.pool.ages[U]*7,T.aux[U*4+1]+T.pool.ages[U]*5,T.aux[U*4+2]):n.quaternion.identity(),m(T,U)}})}_(c,()=>e().sparkTime,()=>1,!1),_(h,()=>e().gelTime,T=>.05+h.aux[T*4+3]*.07,!1),_(d,()=>e().receiptTime,()=>1,!0);function v(T,L){M.push({k:T,shown:new Uint8Array(T.pool.ages.length),life:()=>e().flashTime,step(){},draw(E){let N=1-T.pool.ages[E]/e().flashTime;n.position.set(T.pos[E*3],T.pos[E*3+1],T.pos[E*3+2]),n.scale.setScalar(e()[L]*(.5+.5*Math.max(0,N))),n.rotation.set(T.aux[E*4],T.aux[E*4+1],T.aux[E*4+2]),m(T,E)}})}function S(T,L,E,N=1){M.push({k:T,shown:new Uint8Array(T.pool.ages.length),life:()=>e()[L],step(){},draw(U){let G=Math.max(0,1-T.pool.ages[U]/e()[L]),te=e()[E]*N*G,X=T.aux[U*4];n.position.set(T.pos[U*3],T.pos[U*3+1],T.pos[U*3+2]),n.quaternion.setFromUnitVectors(vA,g.set(T.vel[U*3],T.vel[U*3+1],T.vel[U*3+2])),n.scale.set(te,te,X),m(T,U)}})}let P=.9;M.push({k:u,shown:new Uint8Array(u.pool.ages.length),life:()=>P,step(T){for(let L=0;L<u.pool.ages.length;L++)if(u.pool.alive(L))for(let E=0;E<3;E++)u.pos[L*3+E]+=u.vel[L*3+E]*T},draw(T){let L=u.pool.ages[T]/P;n.position.set(u.pos[T*3],u.pos[T*3+1],u.pos[T*3+2]),n.scale.setScalar(u.aux[T*4+3]*(.5+L)*(1-L*L*L)),n.quaternion.identity(),m(u,T)}}),M.push({k:f,shown:new Uint8Array(f.pool.ages.length),life:()=>e().blastTime,step(){},draw(T){let L=Math.min(f.pool.ages[T]/Math.max(e().blastTime,.001),1),E=1-(1-Math.min(L/.6,1))**2,N=L>.6?1-(L-.6)/.4:1;n.position.set(f.pos[T*3],f.pos[T*3+1],f.pos[T*3+2]),n.scale.setScalar(Math.max(e().blastSize*E*N,.001)),n.rotation.set(0,f.aux[T*4],0),m(f,T)}}),S(p,"tracerTime","tracerWidth",.6),v(r,"flashSize"),v(a,"enemyFlashSize"),S(o,"tracerTime","tracerWidth"),S(l,"enemyTracerTime","enemyTracerWidth");let R=(T,L,E)=>{let N=T.pool.spawn();y(T,N,L[0]+E[0]*.1,L[1]+E[1]*.1,L[2]+E[2]*.1),T.aux[N*4]=i(3),T.aux[N*4+1]=i(3),T.aux[N*4+2]=i(3)},D=(T,L,E)=>{let N=E[0]-L[0],U=E[1]-L[1],G=E[2]-L[2],te=Math.hypot(N,U,G);if(!(te>1e-6))return;let X=T.pool.spawn();y(T,X,L[0]+N/2,L[1]+U/2,L[2]+G/2),w(T,X,N/te,U/te,G/te),T.aux[X*4]=te};return{flash(T,L){R(r,T,L)},tracer(T,L){D(o,T,L)},friendlyTracer(T,L){D(p,T,L)},steam(T){let L=u.pool.spawn();y(u,L,T[0],T[1],T[2]),w(u,L,i(.15),.7+Math.random()*.4,i(.15)),u.aux[L*4+3]=.16+Math.random()*.1},blast(T){let L=f.pool.spawn();y(f,L,T[0],T[1]+.3,T[2]),f.aux[L*4]=Math.random()*6;for(let E=0;E<6;E++){let N=u.pool.spawn(),U=E/6*Math.PI*2+Math.random();y(u,N,T[0],T[1]+.2,T[2]),w(u,N,Math.cos(U)*2.2,.8+Math.random()*.6,Math.sin(U)*2.2),u.aux[N*4+3]=.35+Math.random()*.2}this.gel([T[0],T[1]+.3,T[2]],[0,1,0],12)},enemyFlash(T,L){R(a,T,L)},enemyTracer(T,L){D(l,T,L)},spark(T,L){for(let E=0;E<e().sparkCount;E++){let N=c.pool.spawn();y(c,N,T[0],T[1],T[2]),b(c,N,L,.9,3)}},gel(T,L,E=e().gelCount){for(let N=0;N<E;N++){let U=h.pool.spawn();y(h,U,T[0],T[1],T[2]),b(h,U,L,1.2,e().gelSpeed),h.aux[U*4+3]=Math.random()}},receipts(T,L=e().receiptCount){for(let E=0;E<L;E++){let N=d.pool.spawn();y(d,N,T[0],T[1],T[2]),b(d,N,[0,1,0],1.5,e().gelSpeed),d.aux[N*4]=i(3),d.aux[N*4+1]=i(3),d.aux[N*4+2]=i(3)}},clear(){for(let T of M){T.k.pool.clear();for(let L=0;L<T.shown.length;L++)T.shown[L]&&(x(T.k,L),T.shown[L]=0)}},update(T){if(T>0)for(let L of M){L.step(T);let{pool:E}=L.k;E.update(T,L.life);for(let N=0;N<E.ages.length;N++)E.alive(N)?(L.draw(N),L.shown[N]=1):L.shown[N]&&(x(L.k,N),L.shown[N]=0)}}}}function yA(t,e,n){let i=Math.PI/180;return n/2*Math.tan(t*i/2)/Math.tan(e*i/2)}var _A=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),Bp=t=>t<0?0:t>1?1:t;function Lv({arsenal:t,stance:e,firing:n,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:d="",hours:u="",bark:f=null,banner:p=null,grenades:g=null,action:m=null,weapons:x=q.weapons,combat:y=q.combat,feedback:w=q.feedback}){let b=t.current(),M=x[b],_=t.ammo[b],v=t.reload,S=s==="pad"?"RB":"R",P={show:!1,marker:0,good:[M.goodStart,M.goodEnd],perfect:[M.perfectStart,M.perfectEnd],flash:c,prompt:""};if(v){let E=Math.max(M.reloadTime,y.minReloadTime);P={...P,show:!0,marker:Bp(v.t/E),prompt:v.press===null?`${S} again on the bright zone`:""}}else _.mag<=0&&(P.prompt=`${S} to reload`);let R=_.mag<=Math.max(0,w.lowAmmoFrac)*M.mag,D=M.infiniteReserve<=0&&_.reserve<=0,T={show:!1,text:"",kind:""};!v&&R&&!p&&(T.show=!0,D&&_.mag<=0?(T.text="NO AMMO",T.kind="none"):D?(T.text="LOW AMMO",T.kind="low"):_.mag<=0?(T.text=`EMPTY \u2014 RELOAD  ${S}`,T.kind="empty"):(T.text=`RELOAD  ${S}`,T.kind="low"));let L=e==="aim";return{weapon:Iu[b].name,mag:_.mag,reserve:M.infiniteReserve>0?"\u221E":_.reserve,reticle:{show:L||!!n||i,gap:w.reticleMinGap+yA(r,o,a),opacity:i&&!L?w.coverReticleOpacity:1},reload:P,alert:T,hit:{show:!!l,kind:l||null},faceShow:!!h&&!p&&!h.downed.show,face:h,objective:d,hours:u||"",bark:f,banner:p,grenades:Number.isFinite(g)?g:null,action:m&&m.text?{text:m.text,hold:Number.isFinite(m.hold)?Bp(m.hold):null}:null}}function Dv(t=document.body){let e=(K,fe,Ue,W)=>{let _e=document.createElement(K);return fe&&(_e.className=fe),W!==void 0&&(_e.textContent=W),Ue&&Ue.appendChild(_e),_e},n=e("div","",t);n.id="cr-hud";let i={};for(let K of["top","right","bottom","left"])i[K]=e("div",`cr-edge cr-edge-${K}`,n);let s="http://www.w3.org/2000/svg",r=(K,fe,Ue)=>{let W=document.createElementNS(s,K);for(let _e of Object.keys(fe))W.setAttribute(_e,fe[_e]);return Ue&&Ue.appendChild(W),W},o=e("div","cr-face",n),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),d=e("div","cr-banner",n),u=e("div","cr-banner-title",d),f=e("div","cr-banner-hint",d),p=e("i","cr-ring",d),g=e("div","cr-action",n),m=e("span","cr-action-text",g),x=e("i","cr-ring",g),y=e("div","cr-objective",n),w=e("div","cr-hours",n),b=e("div","cr-bark",n),M=e("span","cr-bark-who",b),_=e("span","cr-bark-text",b),v=e("div","cr-weapon",n),S=e("div","cr-weapon-name",v),P=e("div","cr-ammo",v),R=e("div","cr-kb",v),D=e("div","cr-prompt",v),T=e("div","cr-reload",v),L=e("div","cr-zone cr-zone-good",T),E=e("div","cr-zone cr-zone-perfect",T),N=e("div","cr-marker",T),U=e("div","cr-result",v),G=e("div","cr-alert",n),te=e("div","cr-reticle",n),X=["up","down","left","right"].map(K=>e("div",`cr-arm cr-arm-${K}`,te)),ne=e("div","cr-hit",n);e("i","cr-hit-a",ne),e("i","cr-hit-b",ne),e("i","cr-hit-ring",ne);let Z={},Y=(K,fe,Ue)=>{Z[K]!==fe&&(Z[K]=fe,Ue(fe))},ye=K=>`${(K*100).toFixed(1)}%`,J=(K,[fe,Ue])=>{K.style.left=ye(fe),K.style.width=ye(Math.max(0,Ue-fe))};return{render(K){Y("weapon",K.weapon,W=>{S.textContent=W}),Y("ammo",`${K.mag}|${K.reserve}`,()=>{P.textContent=`${K.mag} / ${K.reserve}`}),Y("prompt",K.reload.prompt,W=>{D.textContent=W}),Y("reload.show",K.reload.show,W=>{T.hidden=!W}),Y("good",`${K.reload.good}`,()=>J(L,K.reload.good)),Y("perfect",`${K.reload.perfect}`,()=>J(E,K.reload.perfect)),Y("marker",Math.round(K.reload.marker*500),()=>{N.style.left=ye(K.reload.marker)}),Y("flash",K.reload.flash,W=>{U.textContent=W&&_A[W]||"",U.dataset.kind=W||""}),Y("alert",K.alert.show?`${K.alert.kind}|${K.alert.text}`:"",()=>{G.hidden=!K.alert.show,G.textContent=K.alert.text,G.dataset.kind=K.alert.kind}),Y("ret.show",K.reticle.show,W=>{te.hidden=!W}),Y("ret.op",Math.round(K.reticle.opacity*100),()=>{te.style.opacity=K.reticle.opacity.toFixed(2)}),Y("ret.gap",Math.round(K.reticle.gap),W=>{X.forEach(_e=>_e.style.setProperty("--gap",`${W}px`))});let fe=K.face;if(Y("face.show",!!K.faceShow,W=>{o.hidden=!W}),fe){Y("face.op",Math.round(fe.face.opacity*100),()=>{o.style.opacity=fe.face.opacity.toFixed(2)}),Y("face.frown",Math.round(fe.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*fe.face.frown).toFixed(1)} 70 72`)}),Y("face.fill",Math.round(fe.face.fill*50),()=>{let W=92*fe.face.fill;c.setAttribute("y",(96-W).toFixed(1)),c.setAttribute("height",W.toFixed(1))});for(let W of Object.keys(i))Y(`edge.${W}`,Math.round(fe.edges[W]*50),()=>{i[W].style.opacity=fe.edges[W].toFixed(2)})}Y("kb",K.grenades===null?"":String(K.grenades),W=>{R.hidden=W==="",R.textContent=`KETTLEBELLS ${W}`}),Y("action",K.action?K.action.text:"",W=>{g.hidden=!K.action,m.textContent=W}),Y("action.hold",K.action&&K.action.hold!==null?Math.round(K.action.hold*100):-1,W=>{x.hidden=W<0,x.style.setProperty("--hold",`${Math.max(W,0)*3.6}deg`)});let Ue=K.banner&&K.banner.hold!==void 0&&K.banner.hold!==null?Math.round(Bp(K.banner.hold)*100):-1;Y("banner.hold",Ue,W=>{p.hidden=W<0,p.style.setProperty("--hold",`${Math.max(W,0)*3.6}deg`)}),Y("banner",K.banner?`${K.banner.title}|${K.banner.hint}`:"",W=>{d.hidden=!K.banner,K.banner&&(u.textContent=K.banner.title,f.textContent=K.banner.hint)}),Y("objective",K.objective||"",W=>{y.textContent=W,y.hidden=!W}),Y("hours",K.hours||"",W=>{w.textContent=W,w.hidden=!W}),Y("bark",K.bark?`${K.bark.speaker}|${K.bark.text}`:"",()=>{b.hidden=!K.bark,K.bark&&(M.textContent=K.bark.speaker,M.style.color=K.bark.color||"",_.textContent=K.bark.text)}),Y("hit",K.hit.show?K.hit.kind:"",W=>{ne.hidden=!W,ne.dataset.kind=W})}}}function Nv(t){let e=Xi(Nt),n=Yi(e),i=new mt;i.name=`dummy-${t.id}`,i.add(e.root),i.add(e.shadow);let s=!!(t.rail&&t.rail.half>0),r=t.yaw,o=t.pos[0],a=t.pos[2],l="live",c=0;s&&n.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function d(u){i.position.set(t.pos[0],t.pos[1],t.pos[2]);let f=t.pos[0]-o,p=t.pos[2]-a;s&&f*f+p*p>1e-8&&(r=Math.atan2(f,p)),o=t.pos[0],a=t.pos[2],i.rotation.y=r;let g=q.feedback;if(l==="burst"){c+=u;let m=g.dummyBurstTime>0?Math.min(c/g.dummyBurstTime,1):1;h(1+.2*m),m>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=u;let m=g.dummyRespawnPop>0?Math.min(c/g.dummyRespawnPop,1):1;h(m),m>=1&&(l="live")}l!=="gone"&&(n.update(s?u*Math.min(Math.max(q.dummy.railSpeed/Wi,.3),3):u),e.update(u))}return{group:i,update:d,hit(){(l==="live"||l==="pop")&&n.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var Ov="#f3efe6";function kv(t){for(let e of Object.values(t))e&&typeof e=="object"&&kv(e);return Object.freeze(t)}var Uv=kv({...structuredClone(Nt),name:"doc-placeholder",colors:{...Nt.colors,hair:z.teal,shirt:Ov,collar:Ov},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Nt.face,brow:"uni",fixedSmile:0}});function Nu(t){return zt(t.map(([e,n,i,s,r,o])=>new vt(e,n,i).translate(s,r,o)),!1)}function Lr(t,e,n){let i=new at(Kn(e),Pt({color:n}));return yn(i),t.add(i),i}var Vo=.09;function bA(){let t=new mt;t.name="disc",t.position.set(0,-.05,.22),Lr(t,new Jt(Vo,Vo,.022,20),z.playerOrange),Lr(t,new Jt(Vo-.018,Vo-.018,.034,20),z.cream);let e=[];for(let n=0;n<6;n++){let i=n/6*Math.PI*2;e.push(new vt(.02,.026,.05).rotateY(i).translate(Math.sin(i)*(Vo-.03),0,Math.cos(i)*(Vo-.03)))}return Lr(t,zt(e,!1),z.ink),t}function MA(){let t=new mt;return t.name="rifle",Lr(t,Nu([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),z.playerOrange),Lr(t,Nu([[.05,.12,.06,0,-.07,0]]),z.ink),t.add(bA()),t}function wA(){let t=new mt;return t.name="pistol",Lr(t,Nu([[.045,.06,.25,0,.04,.075]]),z.playerOrange),Lr(t,Nu([[.04,.1,.05,0,-.04,0]]),z.ink),t}var SA={regret:[0,.06,.45],pistol:[0,.04,.2]},TA=new B(0,0,1),CN=new B,Du=new B;function Fv(){let t=new mt;t.name="gun";let e={regret:MA(),pistol:wA()};t.add(e.regret,e.pistol);let n="regret";e.pistol.visible=!1;let i=new B,s=new B(0,0,1),r=e.regret.getObjectByName("disc"),o=1/0;function a(h){if(!(!e[h]||h===n)){n=h;for(let d of Object.keys(e))e[d].visible=d===h}}function l(h,d){i.set(h[0],h[1],h[2]),s.set(d[0],d[1],d[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),t.quaternion.setFromUnitVectors(TA,s),c()}function c(){let h=q.feedback,d=Math.max(h.gunSquashTime,1e-6),u=o>=0&&o<d?Math.sin(Math.PI*o/d):0,f=h.gunSquash*u;t.scale.set(1+f/2,1+f/2,1-f),t.position.copy(i).addScaledVector(s,-h.gunKick*u)}return{group:t,setWeapon:a,place:l,shot(){o=0,c()},update(h,d=0){o+=h>0?h:0,h>0&&d&&(r.rotation.y+=d*h),c()},disc:r,tip(h=[0,0,0]){let d=SA[n];return t.updateMatrix(),Du.set(d[0],d[1],d[2]).applyMatrix4(t.matrix),h[0]=Du.x,h[1]=Du.y,h[2]=Du.z,h}}}var Bv=8,zv=64,Wo=.12;function wl(){let t=(s,r)=>{s.deleteAttribute("uv");let o=new et(r),a=s.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=o.r,l[c*3+1]=o.g,l[c*3+2]=o.b;return s.setAttribute("color",new Et(l,3)),s},e=t(new $t(Wo,14,10).toNonIndexed(),z.ink),n=[new vt(.03,.1,.03).translate(-.055,Wo+.04,0),new vt(.03,.1,.03).translate(.055,Wo+.04,0),new vt(.14,.03,.03).translate(0,Wo+.1,0)].map(s=>t(s.toNonIndexed(),z.playerOrange)),i=t(new vt(.07,.07,.012).translate(0,0,Wo-.002).toNonIndexed(),z.cream);return zt([e,...n,i],!1)}function Hv(t){let e=new us(wl(),Pt({vertexColors:!0,rim:.15}),Bv);e.name="kettlebells",e.frustumCulled=!1,e.count=0,t.add(e);let n=new Kt,i=0,s=new Float32Array(zv*3),r=new Lt;r.setAttribute("position",new Et(s,3)),r.setDrawRange(0,0);let o=new Wa({color:z.playerOrange,dashSize:q.feedback.arcDot,gapSize:q.feedback.arcDot}),a=new Ea(r,o);a.name="kettlebellArc",a.frustumCulled=!1,a.visible=!1,t.add(a);let l=new Aa(r,new yo({color:z.playerOrange,size:5,sizeAttenuation:!1,toneMapped:!1}));l.name="kettlebellArcDots",l.frustumCulled=!1,l.visible=!1,t.add(l);let c=new at(new _r(.88,1,40).rotateX(-Math.PI/2),new vn({color:z.playerOrange,side:An,depthWrite:!1,toneMapped:!1}));return c.name="kettlebellRing",c.visible=!1,t.add(c),{mesh:e,line:a,ring:c,dots:l,update(h,d,u=0){i+=u>0?u:0;let f=Math.min(h.length,Bv),p=q.grenade.ballRadius/Wo;e.count=f;for(let g=0;g<f;g++){let m=h[g],x=m.prevPos[0]+(m.pos[0]-m.prevPos[0])*d,y=m.prevPos[1]+(m.pos[1]-m.prevPos[1])*d,w=m.prevPos[2]+(m.pos[2]-m.prevPos[2])*d,b=m.fuse<q.associate.diveWarn?1+.18*(.5+.5*Math.sin(i*40)):1;n.position.set(x,y,w),n.rotation.set(w*2.5,0,-x*2.5),n.scale.setScalar(p*b),n.updateMatrix(),e.setMatrixAt(g,n.matrix)}e.instanceMatrix.needsUpdate=!0},arc(h,d,u,f){if(!f||!(d>1)){a.visible=!1,l.visible=!1,c.visible=!1;return}let p=Math.min(d,zv);for(let g=0;g<p;g++)s[g*3]=h[g][0],s[g*3+1]=h[g][1],s[g*3+2]=h[g][2];r.attributes.position.needsUpdate=!0,r.setDrawRange(0,p),o.dashSize=o.gapSize=Math.max(q.feedback.arcDot,.001),a.computeLineDistances(),a.visible=!0,l.visible=!0,u?(c.position.set(u[0],u[1]+.03,u[2]),c.scale.setScalar(q.grenade.killRadius),c.visible=!0):c.visible=!1},reset(){e.count=0,e.instanceMatrix.needsUpdate=!0,a.visible=!1,l.visible=!1,c.visible=!1}}}var ku=Math.PI*2,Zi=(t,e,n)=>t<e?e:t>n?n:t,EA=t=>t-ku*Math.round(t/ku),Wv=.001,zp=.5,Hp=.3;function AA(t,e=t.tuning||q.move){let n=t.state,i=t.speed();if(n==="bash")return{name:"bash",rate:yt.bash.duration/Math.max(q.melee.bashTime,.001)};if(n==="rev")return{name:"aim",rate:1};if(n==="execute")return{name:"bash",rate:1,loop:!0};if(n==="reviveTobble")return{name:"revive",rate:1};if(n==="knocked")return{name:"flinch",rate:1};if(n==="downed")return{name:"crawl",rate:Zi(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(n==="roll")return{name:"roll",rate:yt.roll.duration/e.rollTime};if(n==="sprint")return{name:"sprint",rate:Zi(i/Wi,e.sprintRateMin,e.sprintRateMax)};if(n==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:Zi(i/Wi,e.runRateMin,e.runRateMax)};if(t.grenadeAim)return{name:"throw",rate:0,at:Hp*yt.throw.duration};if(t.aiming||t.firing)return{name:"aim",rate:1}}if(n==="coverSlide")return{name:bs(t).kind==="low"?"coverLow":"coverTall",rate:1};if(n==="coverSwap")return{name:"sprint",rate:Zi(i/Wi,e.sprintRateMin,e.sprintRateMax)};if(n==="cover"&&t.cover){let s=t.cover,r=t.coverTuning||q.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":Ir(t)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:Zi(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return n==="vault"?{name:"vault",rate:yt.vault.duration/Math.max((t.coverTuning||q.cover).vaultTime,Wv)}:{name:"idle",rate:1}}function RA(t){let e=t.state==="cover"||t.state==="coverSlide"?bs(t):null;return!e||e.kind!=="low"?0:t.state==="coverSlide"?Zi(t.stateTime/Math.max(t.scratch.dur,1e-6),0,1):t.cover?Zi(1-Math.max(t.cover.pop,t.cover.blind||0),0,1):0}var CA=(t,e)=>4*e*t*(1-t),PA=(t,e,n)=>t>=0&&t<n?e*Math.sin(Math.PI*t/n):0;function Gp(t){if(t<=.08)return 0;if(t>=.9)return ku;let e=(t-.08)/.82;return ku*e*e*(3-2*e)}var Gv=.95,Vv=.6,Ms=new B,Qn=[0,0,1],Ou=[0,0,0];function Xv(t,e=Uv){let n=Xi(e),i=Yi(n),s=new mt;s.name="player";let r=new mt;r.position.y=zp,n.root.position.y=-zp,r.add(n.root),s.add(r),s.add(n.shadow);let o=n.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=Fv();s.add(l.group);let c=new at(wl(),Pt({vertexColors:!0,rim:.15}));c.name="kettlebellInHand",c.position.set(0,.1,0),c.visible=!1,a.R.add(c);let h=0,d=1/0,u=n.root.getObjectByName("head"),f=new B,p=!0;function g(L,E,N){u.getWorldPosition(f),f.y+=n.spec.head.centerY;let U=Math.hypot(L[0]-f.x,L[1]-f.y,L[2]-f.z);return p=Ax(U,p,E,N),u.visible=p,p}let m=0,x=0,y=0,w="",b=0,M=-1,_=t.slams||0,v=1/0;function S(L,E,N){let U=t.pos,G=t.prevPos,te=t.coverTuning||q.cover,X=RA(t);m=te.popTime>0?Math.max(X,m+Zi(X-m,-E/te.popTime,E/te.popTime)):X;let ne=t.state==="cover"&&t.cover&&t.cover.edge.kind==="low"?Zi(t.cover.blind||0,0,1):0;if(X>0||ne>0){let De=bs(t);x=De.normal[0],y=De.normal[1]}let Z=m*te.lowDrawBack+ne*te.blindDrawBack;s.position.set(G[0]+(U[0]-G[0])*L+x*Z,G[1]+(U[1]-G[1])*L,G[2]+(U[2]-G[2])*L+y*Z),s.rotation.y=t.prevFacing+EA(t.facing-t.prevFacing)*L;let Y=AA(t),ye=h>0;ye&&(Y={name:"throw",rate:yt.throw.duration*(1-Hp)/Math.max(q.grenade.throwTime,.001),at:Hp*yt.throw.duration},h-=E);let J=ye?"throw!":Y.name;J!==w||t.entries!==M?(i.play(Y.name,Y.name==="roll"?{fade:.05}:Y.at!==void 0?{fade:.06,at:Y.at}:void 0),w=J,M=t.entries,b=0):Y.loop&&(b+=E*Y.rate,b>=yt[Y.name].duration&&(b-=yt[Y.name].duration,i.play(Y.name,{fade:0}))),i.update(E*Y.rate,Y.rate===0?E:void 0),n.update(E);let K=q.feedback,fe=Math.max(K.gunSquashTime,1e-6);d=N&&N.shot?E:d+E;let Ue=d<fe?K.bodyKick*Math.sin(Math.PI*d/fe):0;r.rotation.x=(t.state==="roll"?Gp(t.stateTime/t.tuning.rollTime):0)-Ue,(t.slams||0)!==_?(_=t.slams||0,v=0):v+=E;let W=t.state==="vault"?CA(Zi(t.stateTime/Math.max(te.vaultTime,Wv),0,1),te.vaultHop):0,_e=PA(v,te.slamSquash,te.slamSquashTime);r.scale.set(1+_e/2,1-_e,1+_e/2),r.position.y=zp*(1-_e)+W,c.visible=!!(N&&N.kettlebell)&&!ye,c.scale.setScalar(q.grenade.ballRadius/.12),P(Y.name,E,N)}function P(L,E,N){if(s.updateMatrixWorld(!0),(L==="coverBlindTallL"?a.L:a.R).getWorldPosition(Ms),s.worldToLocal(Ms),N&&N.stance&&L==="coverBlindLow")Qn[0]=0,Qn[1]=Math.sin(Gv),Qn[2]=Math.cos(Gv);else if(t.state==="bash"||t.state==="rev"||t.state==="execute")Qn[0]=0,Qn[1]=-.05,Qn[2]=1;else if(N&&N.stance&&N.dir){let G=Math.cos(s.rotation.y),te=Math.sin(s.rotation.y);Qn[0]=N.dir[0]*G-N.dir[2]*te,Qn[1]=N.dir[1],Qn[2]=N.dir[0]*te+N.dir[2]*G}else Qn[0]=0,Qn[1]=-Math.sin(Vv),Qn[2]=Math.cos(Vv);N&&N.weapon&&l.setWeapon(N.weapon),l.place([Ms.x,Ms.y,Ms.z],Qn),N&&N.shot&&l.shot(),l.update(E,t.state==="rev"||t.state==="execute"?q.melee.cutterSpin:0),l.group.visible=t.state!=="roll"&&t.state!=="downed"&&t.state!=="reviveTobble"&&!c.visible&&h<=0}function R(L=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(Ou),Ms.set(Ou[0],Ou[1],Ou[2]).applyMatrix4(s.matrixWorld),L[0]=Ms.x,L[1]=Ms.y,L[2]=Ms.z,L}function D(){n.dispose(),n.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:S,dispose:D,rig:n,anim:i,fadeHeadFor:g,gun:l,gunTip:R,throwNow:()=>{h=Math.max(q.grenade.throwTime,.001)},kettlebell:c}}var Fu=new Set(["telegraph","burst"]),Xo=(t,e,n)=>t<e?e:t>n?n:t,IA=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),Yv=.5,LA=-.6,DA=t=>t.point&&t.point.kind==="tall"?"tall":"low";function NA(t){let e=DA(t)==="tall";switch(t.state){case"run":return"run";case"flinch":case"stagger":case"executed":return"flinch";case"downed":return"crawl";case"kneel":return"revive";case"dive":return"roll";case"spawn":return"idle";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let n=t.point,i=Ci(-n.normal[0],-n.normal[1]);return n.tangent[0]*n.end*Math.cos(i)-n.tangent[1]*n.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function OA(t){if(t.kind==="trainer")return t.yaw;if((t.state==="idle"||t.state==="cover"||t.state==="reload"||t.state==="flinch"||t.state==="suppress")&&t.point)return Ci(-t.point.normal[0],-t.point.normal[1]);if(Fu.has(t.state))return Ci(t.aim[0]-t.pos[0],t.aim[2]-t.pos[2]);if(t.state==="run"&&t.path&&t.path[t.pathI]){let e=t.path[t.pathI];if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[2])>1e-6)return Ci(e[0]-t.pos[0],e[1]-t.pos[2])}return t.yaw}function kA(t){switch(t.state){case"run":return"run";case"windup":case"swing":return"throw";case"stagger":case"executed":return"flinch";case"dive":return"roll";default:return"idle"}}function UA(t){return t.state==="dead"||!t.alive?"dead":t.kind==="trainer"&&(t.state==="run"||t.state==="windup"||t.state==="swing")||Fu.has(t.state)?"angry":t.state==="flinch"||t.state==="stagger"||t.state==="downed"||t.state==="executed"||t.state==="dive"?"scared":"smug"}var Kv=.03,Vp=[0,.06,.32];function FA(){let t=new mt;t.name="blaster";let n=zt([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new vt(r,o,a).translate(l,c,h)),!1),i=new at(Kn(n),Pt({color:z.glorpPurple}));yn(i),t.add(i);let s=new at(new $t(Kv,10,8),new vn({color:z.gel}));return s.name="emitter",s.position.set(Vp[0],Vp[1],Vp[2]),t.add(s),{group:t,emitter:s}}var BA=new B(0,0,1),ui=new B,tr=new B,qv=.6,Uu=.4,$v=.95,zA=1.3;function HA(){let t=wl();t.translate(0,-.22,0).rotateX(Math.PI);let e=new mt;e.name="trainerKettlebell",e.scale.setScalar(zA),e.add(new at(t,Pt({vertexColors:!0,rim:.15})));let n=new at(new $t(.07,10,8),new vn({color:"#ff4a1c",toneMapped:!1}));return n.name="glint",n.position.set(0,.22,0),n.visible=!1,e.add(n),{group:e,glint:n}}function Zv(t){let e=t==="trainer",n=Xi(e?yx:Nt),i=Yi(n),s=new mt;s.name=t;let r=new mt;r.position.y=Yv,n.root.position.y=-Yv,r.add(n.root),s.add(r),s.add(n.shadow);let o=n.root.getObjectByName("body").children[2],a=e?HA():FA();return e?o.add(a.group):s.add(a.group),{kind:t,rig:n,anim:i,root:s,tumble:r,handR:o,weapon:a}}function Jv(t){let e=new mt;e.name=`associate-${t.id}`;let n={associate:Zv("associate"),trainer:null},i=n.associate;e.add(i.root);let s=i.weapon,r="",o=0,a="",l=0,c=t.yaw,h="live",d=0,u=!1,f=0,p=0,g=0,m=0;function x(_){if(i.kind===_)return;n[_]||(n[_]=Zv(_),e.add(n[_].root)),i.root.visible=!1,i=n[_],i.root.visible=!0;let v=q.trainer.scaleW,S=q.trainer.scaleH;r="",a=""}function y(){h="live",d=0,l=0,c=t.yaw,u=!1,f=0,e.visible=!0,e.scale.setScalar(1),i.tumble.rotation.x=0,r="",a="",o=0,s.emitter.scale.setScalar(1),n.trainer&&(n.trainer.weapon.glint.visible=!1)}function w(_,v){let S=q.feedback,P=q.cover,R=q.associate;if(t.state==="unused"){e.visible=!1;return}if(t.state==="spawn"&&(h==="burst"||h==="gone")&&y(),t.state!=="dead"&&t.alive&&x(t.kind||"associate"),!t.alive&&t.state==="dead"&&h==="live"&&(h="burst",d=0),h==="live"&&(e.visible=!0),h==="burst"){d+=v;let Se=S.dummyBurstTime>0?Math.min(d/S.dummyBurstTime,1):1;e.scale.setScalar(1+.2*Se),Se>=1&&(h="gone",e.visible=!1)}if(h==="gone")return;let D=h==="burst",{rig:T,anim:L,tumble:E,handR:N}=i,U=i.kind==="trainer",G=q.trainer;i.root.scale.set(U?G.scaleW:1,U?G.scaleH:1,U?G.scaleW:1);let te=t.pos,X=t.prevPos,ne=!D&&t.point&&t.point.kind==="low"&&t.state!=="run"&&t.state!=="dead",Z=ne?Xo(1-Math.max(t.pop,t.blind),0,1):0;l=P.popTime>0?Math.max(Z,l+Xo(Z-l,-v/P.popTime,v/P.popTime)):Z;let Y=ne?Xo(t.blind,0,1):0;ne&&(p=t.point.normal[0],g=t.point.normal[1]);let ye=l*P.lowDrawBack+Y*P.blindDrawBack,J=t.state==="spawn"?LA*(1-Xo(t.stateT/Math.max(q.pad.riseTime,.001),0,1)):0;e.position.set(X[0]+(te[0]-X[0])*_+p*ye,X[1]+(te[1]-X[1])*_+J,X[2]+(te[2]-X[2])*_+g*ye);let K=U||t.state==="run"||Fu.has(t.state)?t.prevYaw+IA(t.yaw-t.prevYaw)*_:OA(t);if(c=Ht(c,K,(U?G.turnRate:R.turnRate)*1.5*v),e.rotation.y=c,D)return;let fe=U?kA(t):NA(t),Ue=U?fe+":"+t.state:fe,W=yt.throw.duration;if(Ue!==r){if(U&&fe==="throw"){let Se=t.state==="swing"?Uu*W:0;L.play(fe,{fade:t.state==="swing"?.02:.08,at:Se}),m=Se}else L.play(fe,fe==="flinch"?void 0:{fade:.1});r=Ue,o=0}else t.state==="executed"&&(o+=v,o>=yt.flinch.duration&&(o=0,L.play("flinch")));let _e=fe==="run"?Xo((U?G.runSpeed:R.runSpeed)/Wi,.5,3):1;fe==="crawl"&&(_e=Math.hypot(te[0]-X[0],te[2]-X[2])>1e-5?1:0),fe==="roll"&&(_e=yt.roll.duration/Math.max(R.diveReaction+R.diveTime,.001)),U&&t.state==="windup"&&(_e=m<Uu*W-1e-6?Uu*W/Math.max(G.windup,.001):0),U&&t.state==="swing"&&(_e=(1-Uu)*W/Math.max(G.swingTime,.001)),m+=v*_e,E.rotation.x=fe==="roll"?Gp(Xo(t.stateT/Math.max(R.diveReaction+R.diveTime,.001),0,1)):0,L.update(v*_e,_e===0?v:void 0),T.update(v);let De=UA(t);De!==a&&(T.face.setExpression(De),a=De),U?b(v):M(fe,v,N)}function b(_){let v=n.trainer.weapon.glint;v.visible=u&&t.state==="windup",v.visible&&(f+=_,v.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function M(_,v,S){s.group.visible=t.state!=="downed"&&t.state!=="dive",e.updateMatrixWorld(!0),S.getWorldPosition(ui);let P=ui.x,R=ui.y,D=ui.z;e.worldToLocal(ui);let T=ui.x,L=ui.y,E=ui.z;if(Fu.has(t.state)){let N=Math.cos(e.rotation.y),U=Math.sin(e.rotation.y),G=t.aim[0]-P,te=t.aim[2]-D;tr.set(G*N-te*U,t.aim[1]-R,G*U+te*N)}else _==="coverBlindLow"?tr.set(0,Math.sin($v),Math.cos($v)):t.state==="suppress"?tr.set(0,.05,1):tr.set(0,-Math.sin(qv),Math.cos(qv));if(tr.lengthSq()<1e-12&&tr.set(0,0,1),tr.normalize(),s.group.position.set(T,L,E),s.group.quaternion.setFromUnitVectors(BA,tr),u){f+=v;let N=.5+.5*Math.sin(f*2*Math.PI*8),U=q.feedback.glintSize/Kv;s.emitter.scale.setScalar(1+(U-1)*N)}else s.emitter.scale.setScalar(1)}return{group:e,update:w,reset:y,death(){h==="live"&&(h="burst",d=0)},glint(_){_&&!u&&(f=0),u=!!_},tip(_=[0,0,0]){return e.updateMatrixWorld(!0),(i.kind==="trainer"?i.weapon.glint:s.emitter).getWorldPosition(ui),_[0]=ui.x,_[1]=ui.y,_[2]=ui.z,_},get rig(){return i.rig},get anim(){return i.anim},blaster:s,get kind(){return i.kind}}}var Sl=new B;function di(t,e,n,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Sl.copy(e),Sl[i]=0,Sl.normalize();let c=.5*o/(o+a),h=1-Sl.angleTo(t)/l;return Math.sign(Sl[n])===1?h*c:a/(o+a)+c+c*(1-h)}var Bu=class t extends vt{constructor(e=1,n=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,n/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new B,c=new B,h=new B(e,n,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,g=new B,m=.5/o;for(let x=0,y=0;x<d.length;x+=3,y+=2)switch(l.fromArray(d,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[x+0]=h.x*Math.sign(l.x)+c.x*r,d[x+1]=h.y*Math.sign(l.y)+c.y*r,d[x+2]=h.z*Math.sign(l.z)+c.z*r,u[x+0]=c.x,u[x+1]=c.y,u[x+2]=c.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[y+0]=di(g,c,"z","y",r,i),f[y+1]=1-di(g,c,"y","z",r,n);break;case 1:g.set(-1,0,0),f[y+0]=1-di(g,c,"z","y",r,i),f[y+1]=1-di(g,c,"y","z",r,n);break;case 2:g.set(0,1,0),f[y+0]=1-di(g,c,"x","z",r,e),f[y+1]=di(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),f[y+0]=1-di(g,c,"x","z",r,e),f[y+1]=1-di(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),f[y+0]=1-di(g,c,"x","y",r,e),f[y+1]=1-di(g,c,"y","x",r,n);break;case 5:g.set(0,0,-1),f[y+0]=di(g,c,"x","y",r,e),f[y+1]=1-di(g,c,"y","x",r,n);break}}static fromJSON(e){return new t(e.width,e.height,e.depth,e.segments,e.radius)}};function Qv(t){for(let e of Object.values(t))e&&typeof e=="object"&&Qv(e);return Object.freeze(t)}var jv=(t,e,n)=>{let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8)r|=Math.round((i>>o&255)+((s>>o&255)-(i>>o&255))*n)<<o;return"#"+r.toString(16).padStart(6,"0")},Dr=Qv({...Nt,name:"tobble",hair:{...Nt.hair,quiff:!1},colors:{...Nt.colors,shirt:z.cream,collar:jv(z.cream,z.ink,.2),skin:z.tobbleMint,hair:jv(z.tobbleMint,z.ink,.45),backpack:z.teal,mat:z.lilac},outfit:{collar:!1,lanyard:!0,logo:!1,headset:!1},face:{...Nt.face,brow:"pair",fixedSmile:.4},thirdEye:{y:.13,r:.05},backpack:{w:.5,h:.6,d:.3}});var Xp=(t,e,n)=>t<e?e:t>n?n:t,iy=t=>Xp(t,0,1),ey=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),GA=1/60,ty=t=>t.point&&t.point.kind==="tall"?"tall":"low";function VA(t,e=t.speed||0){let n=e>.3;switch(t.state){case"cover":return ty(t)==="tall"?"coverTall":"coverLow";case"shoot":return ty(t)==="tall"?"aim":"coverPop";case"revive":return t.kneeling?"revive":n?"run":"idle";case"downed":return"crawl";default:return n?"run":"idle"}}function WA(t){return t.downed||!t.point||t.point.kind!=="low"||t.state!=="cover"&&t.state!=="shoot"?0:iy(1-t.pop)}function XA(){let e=new Uint8Array(16384),n=new et(z.tobbleMint),i=new et(z.ink),s=(o,a,l)=>Math.abs(o-64/2+.5)<l&&Math.abs(a-64/2+.5)<64*.4||Math.abs(a-64/2+.5)<l&&Math.abs(o-64/2+.5)<64*.4;for(let o=0;o<64;o++)for(let a=0;a<64;a++){let l=(o*64+a)*4,c=s(a,o,8),h=s(a,o,13),d=c?n:i;e[l]=Math.round(d.r*255),e[l+1]=Math.round(d.g*255),e[l+2]=Math.round(d.b*255),e[l+3]=h?255:0}let r=new mr(e,64,64,Zn);return r.colorSpace=tn,r.magFilter=dn,r.minFilter=dn,r.needsUpdate=!0,r}function Yp(t,e){let n=new at(Kn(t),Pt({color:e}));return yn(n),n}var Wp=[0,.04,.2];function YA(){let t=new mt;t.name="tobblePistol";let e=[[.045,.06,.25,0,.04,.075],[.04,.1,.05,0,-.04,0]];return t.add(Yp(zt(e.map(([n,i,s,r,o,a])=>new vt(n,i,s).translate(r,o,a)),!1),z.tobbleMint)),t}var qA=new B(0,0,1),Ki=new B,Yo=new B,ny=.6;function sy(t){let e=Xi(Dr),n=Yi(e),i=new mt;i.name="tobble",i.add(e.root);let r=e.root.getObjectByName("body").children[2],o=e.root.getObjectByName("hips"),a=e.root.getObjectByName("head"),l=new mt;l.name="thirdEye";let c=Dr.thirdEye,h=new at(new $t(c.r,12,10),new vn({color:z.eyeWhite})),d=new at(new $t(c.r*.5,10,8),new vn({color:z.ink}));d.position.z=c.r*.8,l.add(h,d),l.position.set(0,Dr.head.centerY+c.y,.27),a.add(l);let u=Dr.backpack,f=new mt;f.name="backpack",f.add(Yp(new Bu(u.w,u.h,u.d,3,.06),Dr.colors.backpack));let p=Yp(new Jt(.085,.085,u.w*.95,12).rotateZ(Math.PI/2),Dr.colors.mat);p.position.y=u.h/2+.05,f.add(p),f.position.set(0,.2,-.32),o.add(f);let g=YA();i.add(g);let m=new Sa(new go({map:XA(),depthTest:!1,depthWrite:!1,toneMapped:!1}));m.name="tobblePlus",m.renderOrder=20,m.visible=!1,i.add(m);let x="",y=0,w=t.yaw,b=0,M=0,_="",v=0;function S(){x="",y=0,w=t.yaw,_="",v=0,i.position.set(t.start[0],t.start[1],t.start[2]),i.rotation.y=t.startYaw,m.visible=!1}function P(D,T){let L=q.tobble,E=q.cover,N=L.scale;v+=T>0?T:0,i.scale.setScalar(N);let U=t.pos,G=t.prevPos,te=Math.hypot(U[0]-G[0],U[2]-G[2])/GA,X=WA(t);y=E.popTime>0?Math.max(X,y+Xp(X-y,-T/E.popTime,T/E.popTime)):X,X>0&&t.point&&(b=t.point.normal[0],M=t.point.normal[1]);let ne=y*E.lowDrawBack*N,Z=t.point&&!t.downed?L.popLift*iy(t.pop):0;i.position.set(G[0]+(U[0]-G[0])*D+b*ne,G[1]+(U[1]-G[1])*D+Z,G[2]+(U[2]-G[2])*D+M*ne);let Y=t.prevYaw+ey(t.yaw-t.prevYaw)*D;w+=ey(Y-w)*Math.min(1,T*25),i.rotation.y=w;let ye=VA(t,te);ye!==x&&(n.play(ye,{fade:.1}),x=ye);let J=1;ye==="run"?J=Xp(te/(Wi*N),.5,3):ye==="crawl"&&(J=te>.001?1:0),n.update(T*J,J===0?T:void 0),e.update(T);let K=t.downed?"scared":t.state==="shoot"?"angry":"smug";K!==_&&(e.face.setExpression(K),_=K),m.visible=t.downed,t.downed&&(m.position.set(0,.95/N+.05*Math.sin(v*4),0),m.scale.setScalar(.5/N)),R()}function R(){g.visible=!t.downed&&t.state!=="revive",i.updateMatrixWorld(!0),r.getWorldPosition(Ki);let D=Ki.x,T=Ki.y,L=Ki.z;if(i.worldToLocal(Ki),g.position.copy(Ki),t.state==="shoot"&&t.target&&t.target.pos){let E=Math.cos(i.rotation.y),N=Math.sin(i.rotation.y),U=t.target.pos[0]-D,G=t.target.pos[2]-L;Yo.set(U*E-G*N,t.target.pos[1]+1.2-T,U*N+G*E)}else Yo.set(0,-Math.sin(ny),Math.cos(ny));Yo.lengthSq()<1e-12&&Yo.set(0,0,1),Yo.normalize(),g.quaternion.setFromUnitVectors(qA,Yo)}return S(),{group:i,update:P,reset:S,rig:e,anim:n,pistol:g,plus:m,eye:l,pack:f,tip(D=[0,0,0]){return i.updateMatrixWorld(!0),Ki.set(Wp[0],Wp[1],Wp[2]).applyMatrix4(g.matrixWorld),D[0]=Ki.x,D[1]=Ki.y,D[2]=Ki.z,D}}}function $A(t){return t==="open"?{ring:z.gel,pulse:!0,steam:!0}:t==="closed"?{ring:z.ink,pulse:!1,steam:!1}:{ring:z.lilac,pulse:!1,steam:!1}}var ZA="#e6c28c",KA="#b98a50",JA=.3;function jA(t){let e=(i,s)=>{i.deleteAttribute("uv");let r=new et(s),o=i.getAttribute("position").count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;return i.setAttribute("color",new Et(a,3)),i},n=[e(new Jt(t,t,.08,32).translate(0,.04,0).toNonIndexed(),ZA)];for(let i=-3;i<=3;i++){let s=i*(t/3.6),r=2*Math.sqrt(Math.max(t*t-s*s,.01))-.04;n.push(e(new vt(r,.006,.035).translate(0,.081,s).toNonIndexed(),KA))}return zt(n,!1)}function ry(t,e,n=null){let i=e.map(r=>{let o=q.pad.radius,a=new mt;a.name=`sauna-${r.id}`,a.position.set(r.pos[0],r.pos[1],r.pos[2]),a.add(new at(jA(o),Pt({vertexColors:!0,rim:.1})));let l=new vn({color:z.lilac,side:An,toneMapped:!1}),c=new at(new _r(o*.9,o*1.06,40).rotateX(-Math.PI/2),l);c.position.y=.09,a.add(c),t.add(a);let h=Bs({text:"SPAWN SAUNA",w:2.4,h:.7,bg:z.glorpPurple,seed:9});return h.position.set(r.pos[0],3.05,r.pos[2]+1.3),h.rotation.y=Math.PI,t.add(h),{pad:r,group:a,ring:c,ringMat:l,sign:h,color:"",steamT:0}}),s=0;return{items:i,update(r){s+=r>0?r:0;for(let o of i){let a=$A(o.pad.state);if(a.ring!==o.color&&(o.color=a.ring,o.ringMat.color.set(a.ring)),o.ring.scale.setScalar(a.pulse?1+.07*Math.sin(s*6):1),a.steam&&n&&r>0){if(o.steamT+=r,o.steamT>=JA){o.steamT=0;let l=Math.random()*Math.PI*2,c=Math.random()*q.pad.radius*.8;n.steam([o.pad.pos[0]+Math.cos(l)*c,.1,o.pad.pos[2]+Math.sin(l)*c])}}else a.steam||(o.steamT=0)}},reset(){for(let r of i)r.steamT=0,r.color=""}}}var qo=Math.PI/180,oy=.3,qp=1e-6,QA=64,eR=4,tR=64,ay=(t,e,n)=>Math.max(e,Math.min(n,t));function Zp(t,e,n=q.grenade,i=[0,0,0]){let s=ay(e+n.throwLift*qo,-30*qo,70*qo),r=Math.cos(s);return i[0]=n.throwSpeed*Math.sin(t)*r,i[1]=n.throwSpeed*Math.sin(s),i[2]=n.throwSpeed*Math.cos(t)*r,i}function zu(t,e,n=q.combat,i=[0,0,0]){if(t.cover)return Lu(t,"blind",e,n,i);let s=Pu(e),r=Cu(e);i[1]=t.pos[1]+1.6;for(let o=1;o>=0&&(i[0]=t.pos[0]+(s[0]*.2+r[0]*.3)*o,i[2]=t.pos[2]+(s[2]*.2+r[2]*.3)*o,!(o===0||!Uo(t.boxes,i,0)));o-=.25);return i}var Nr=[0,0,0];function nR(t,e){let n=null,i=1/0;for(let a of t){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),d=Math.hypot(l,c,h);d<i&&(i=d,n=a)}if(Nr[0]=Nr[1]=Nr[2]=0,!n)return Nr[1]=1,Nr;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=n.min[a]-e[a],c=e[a]-n.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return Nr[s]=o,Nr}var $p={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},Ji=[0,0,0];function ly(t,e,n,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=t.pos,l=t.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=ay(Math.ceil(c/r),1,QA),d=e/h;for(let u=0;u<h;u++){let f=d;for(let p=0;p<=eR&&f>0;p++){Ji[0]=a[0]+l[0]*f,Ji[1]=a[1]+l[1]*f-.5*o*f*f,Ji[2]=a[2]+l[2]*f;let g=ai(n,a,Ji,r);if(g>=1){a[0]=Ji[0],a[1]=Ji[1],a[2]=Ji[2],l[1]-=o*f;break}a[0]+=(Ji[0]-a[0])*g,a[1]+=(Ji[1]-a[1])*g,a[2]+=(Ji[2]-a[2])*g,l[1]-=o*f*g;let m=nR(n,a),x=l[0]*m[0]+l[1]*m[1]+l[2]*m[2];if(x<0){let y=l[0]-m[0]*x,w=l[1]-m[1]*x,b=l[2]-m[2]*x;l[0]=y*i.friction-m[0]*x*i.restitution,l[1]=w*i.friction-m[1]*x*i.restitution,l[2]=b*i.friction-m[2]*x*i.restitution,-x>=oy&&(s.clank=!0),m[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-m[0]*r,s.upPos[1]=a[1]-m[1]*r,s.upPos[2]=a[2]-m[2]*r)}if(a[0]+=m[0]*qp,a[1]+=m[1]*qp,a[2]+=m[2]*qp,m[1]>.7&&Math.hypot(l[0],l[1],l[2])<oy){l[0]=l[1]=l[2]=0,t.resting=!0,s.rested=!0;return}f*=1-g}}}function iR(t,e,n,i=q.grenade){return ly(t,e,n,i,$p),$p.clank?"clank":$p.rested?"rest":null}var sR={pos:[0,0,0],vel:[0,0,0],prevPos:[0,0,0],resting:!1,fuse:0},Tl={clank:!1,rested:!1,up:!1,upPos:[0,0,0]};function cy(t,e,n,i=q.grenade,s){let r=sR;for(let h=0;h<3;h++)r.pos[h]=t[h],r.vel[h]=e[h],r.prevPos[h]=t[h];r.resting=!1;let o=Math.min(s.length,tR),a=Math.floor(Math.max(0,i.arcTime)*30+1e-9),l=0,c=null;for(let h=0;h<=a&&l<o;h++){let d=s[l++];if(d[0]=r.pos[0],d[1]=r.pos[1],d[2]=r.pos[2],h===a||r.resting)break;for(let u=0;u<2;u++)ly(r,1/60,n,i,Tl),!c&&Tl.up&&(c=[Tl.upPos[0],Tl.upPos[1],Tl.upPos[2]])}return{count:l,land:c}}function hy(t,e=q.grenade){return t>=0?t<=e.killRadius?e.killDamage:t>=e.radius?0:e.damage*(1-t/e.radius):0}function uy(t,e,n,i=q.grenade){let s=e[0]-t[0],r=e[2]-t[2],o=e[1]-t[1],a=s*Math.sin(n)+r*Math.cos(n),l=Math.abs(s*Math.cos(n)-r*Math.sin(n));if(!(a>.01)||l>.3)return null;let c=i.throwSpeed,h=i.gravity,d=x=>{let y=Math.cos(x);return a*Math.tan(x)-h*a*a/(2*c*c*y*y)},u=-30*qo,f=Math.min(70*qo,Math.atan(c*c/(h*a)));if(!(f>u)||d(u)>o||d(f)<o)return null;let p=u,g=f;for(let x=0;x<50;x++){let y=(p+g)/2;d(y)<o?p=y:g=y}let m=(p+g)/2;return Math.abs(d(m)-o)<=.3?m-i.throwLift*qo:null}function dy(t=q.grenade){let e=[];return{live:e,throw(n,i){let s={pos:[n[0],n[1],n[2]],vel:[i[0],i[1],i[2]],prevPos:[n[0],n[1],n[2]],resting:!1,fuse:t.fuse};return e.push(s),s},step(n,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=n,iR(o,n,i,t)==="clank"&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.fuse<=1e-9&&(s.push({type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}function fy(t=q.grenade){let e={count:Math.min(t.start,t.carry),take(){return e.count<=0?!1:(e.count--,!0)},refill(){e.count=t.carry},reset(){e.count=Math.min(t.start,t.carry)}};return e}var py=1.49,my=.2;function gy(t,{spacing:e,cornerZone:n}){e=Math.max(my,Number.isFinite(e)?e:my);let i={cornerZone:n},s=[],r=(o,a,l)=>{let c=Pi(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return t.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,Qs(o,c,i))}r(o,o.length,Qs(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function Or(t,e,n=[0,0]){let i=t.kind==="low"?0:t.end*e;return n[0]=t.pos[0]+t.tangent[0]*i,n[1]=t.pos[1]+t.tangent[1]*i,n}function an(t,e,n){let i=n[0]-e[0],s=n[1]-e[1],r=n[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:Mn(e,[i/o,s/o,r/o],o,t,[]).t>=o-1e-6}function Hu(t,e,n,i=q){let s=[t.pos[0],t.kind==="low"?i.combat.crouchHead:py,t.pos[1]],r=Or(t,i.associate.popShift),o=[r[0],py,r[1]];return{protected:!an(n,s,e),canShoot:an(n,o,e)}}var rR=Math.PI/180,oR=1.5,Gu=[0,0,0],Vu=[0,0,0],aR={bash:t=>[t.melee.bashRange,t.melee.bashAngle],cutter:t=>[t.melee.cutterReach,t.melee.cutterAngle],finish:t=>[t.melee.executeRange,t.melee.executeAngle]};function El(t,e,n,i,s,r=q){let[o,a]=aR[t](r),l=a*rR/2,c=null,h=1/0;for(let d of i){if(!d.alive||d.state==="unused"||d.state==="executed")continue;let u=d.state==="downed";if(t==="finish"&&!u)continue;let f=d.pos[0]-e[0],p=d.pos[2]-e[2],g=Math.hypot(f,p);g>o||g>=h||g>1e-6&&Math.abs(jn(Math.atan2(f,p)-n))>l+1e-9||(Gu[0]=e[0],Gu[1]=e[1]+1,Gu[2]=e[2],Vu[0]=d.pos[0],Vu[1]=d.pos[1]+(u?.3:1),Vu[2]=d.pos[2],an(s,Gu,Vu)&&(c=d,h=g))}return c}function xy({downed:t,clear:e,tobble:n,pos:i,yaw:s,enemies:r,boxes:o,t:a=q}){if(t)return{kind:"giveUp",hold:!0,target:null};if(e)return{kind:"again",hold:!1,target:null};if(n&&n.downed){let c=a.tobble?.playerReviveRange??oR;if(Math.hypot(n.pos[0]-i[0],n.pos[2]-i[2])<=c)return{kind:"reviveTobble",hold:!0,target:n}}let l=El("finish",i,s,r,o,a);return l?{kind:"finish",hold:!1,target:l}:{kind:null,hold:!1,target:null}}var vy=Object.freeze({kbm:Object.freeze({melee:"F",interact:"E",grenade:"G"}),pad:Object.freeze({melee:"B",interact:"X",grenade:"LB"})}),yy={throw:t=>`Release ${t.grenade}  throw`,reviveTobble:t=>`Hold ${t.interact}  revive Tobble`,finish:t=>`${t.interact}  finish`,revving:()=>"Cheat Day: run into a Rep",bash:t=>`${t.melee}  bash`,rev:t=>`Hold ${t.melee}  rev Cheat Day`,giveUp:t=>`Hold ${t.interact}  renew your membership`,giveUpTobble:t=>`Tobble is coming! Hold ${t.interact} to renew your membership`,sauna:t=>`Close the Spawn Sauna (${t.grenade} kettlebell)`};function Al(t,e="kbm"){let n=Object.hasOwn(yy,t)?yy[t]:null;return n?n(vy[e]||vy.kbm):""}var jp=t=>t<0?0:t>1?1:t,Kp=new Set(["move","sprint"]),Jp=new Set(["move","sprint","cover"]);function lR({device:t="kbm",grenadeHeld:e=!1,interact:n=null,reviving:i=!1,revving:s=!1,bashTarget:r=!1,cutterNear:o=!1,regretInHand:a=!1,holdFrac:l=0}={}){let c=(h,d=null)=>({text:Al(h,t),hold:d});return e?c("throw"):i||n&&n.kind==="reviveTobble"?c("reviveTobble",i?jp(l):0):n&&n.kind==="finish"?c("finish"):s?c("revving"):r?c("bash"):a&&o?c("rev"):null}function _y({mover:t,fight:e,arsenal:n,bag:i,cam:s,sfx:r,effects:o,views:a=[],health:l,playerView:c=null,grenadeView:h=null,boxes:d,hooks:u={}}){let f=pu(),p=Array.from({length:64},()=>[0,0,0]),g=[0,0,0],m=[0,0,0],x=[0,0,0],y=[0,1,0],w=0,b=0,M="kbm",_=!1,v=0,S=0,P=!1,R=0,D=!1,T=null,L={count:0,land:null,show:!1},E=null,N=0,U=()=>{u.restart&&u.restart()},G=De=>{u.marker&&u.marker(De)},te=(De,Se=1)=>(x[0]=De.pos[0],x[1]=De.pos[1]+Se,x[2]=De.pos[2],x),X=De=>{let Se=De.pos[0]-t.pos[0],ge=De.pos[2]-t.pos[2],Ie=Math.hypot(Se,ge)||1;return y[0]=Se/Ie,y[1]=.5,y[2]=ge/Ie,y};function ne(){T&&T.e.state==="executed"&&e.releaseExecution(T.e),T=null}function Z(De,Se,ge){return e.beginExecution(De)?t.execute([De.pos[0],De.pos[2]],Se)?(T={e:De,kind:ge,gelT:0,sfxT:0},!0):(e.releaseExecution(De),!1):!1}function Y(De){let Se=q.feedback;if(De.type==="bashHit"){let ge=El("bash",t.pos,w,e.enemies,d);if(s.bump(),r.play("bash",Se.bashVolume),!ge)return;let Ie=e.bash(ge);o.gel(te(ge),X(ge),Se.gelCount),Ie==="hit"&&G("body")}else if(De.type==="executeDone"){let ge=T;if(T=null,!ge)return;s.bump(1.5),e.finishExecution(ge.e),ge.kind==="stomp"&&r.play("finish",Se.bashVolume)}else De.type==="reviveDone"&&e.reviveTobble()&&r.play("revive",Se.reviveVolume)}function ye(){if(!(R>0)){if(!i.take()){r.play("dry",q.feedback.reloadVolume);return}zu(t,w,q.combat,g),Zp(w,b,q.grenade,m),e.throwGrenade(g,m),c&&c.throwNow(),r.play("throw",q.feedback.throwVolume),s.kick(1.5,0),R=q.grenade.throwTime}}function J(){h&&h.arc(p,L.count,L.land,L.show)}function K(){let De=q.melee.promptRange;for(let Se of e.enemies){if(!Se.alive||Se.state==="unused"||Se.state==="downed"||Se.state==="executed")continue;let ge=Se.pos[0]-t.pos[0],Ie=Se.pos[2]-t.pos[2],me=Math.hypot(ge,Ie);if(!(me>De)&&(me<.5||Math.cos(Math.atan2(ge,Ie)-w)>=.5))return!0}return!1}function fe(){f.reset(),_=!1,v=0,S=0,P=!1,R=0,D=!1,T=null,L={count:0,land:null,show:!1},E=null,N=0,J()}function Ue(De,Se){w=Se.camYaw,b=Se.camPitch||0,M=Se.device||"kbm";let ge=t,Ie=q.melee,me=q.grenade;if(R>0&&(R=Math.max(0,R-De)),L.show=!1,E=null,N=0,l.downed){T&&ne(),f.reset(),_=!1,D=!1,v=0,Se.interactHeld||(P=!0),S=Se.interactHeld&&P?S+De:0,N=jp(S/Math.max(q.health.giveUpHold,.001)),J(),S>=q.health.giveUpHold-1e-9&&(S=0,U());return}S=0,P=!1,T&&(ge.state!=="execute"||T.e.state!=="executed")&&ne();let ke=f.update(Se.meleeHeld,Se.meleePressed,De,Ie.holdTime),Ne=f.holding();Se.meleeHeld||(_=!1);let Re=n.current()==="regret"&&n.reload===null&&!(n.switching>0);if(ke&&ge.bash(w),ge.state==="rev"&&(!Ne||_||!Re||Se.grenadeHeld)?ge.rev(!1):Ne&&!_&&Re&&!Se.grenadeHeld&&R<=0&&Kp.has(ge.state)&&ge.rev(!0),ge.state==="rev"){v-=De,v<=0&&(v=Math.max(Ie.revPulse,.05),r.play("rev",q.feedback.revVolume));let k=El("cutter",ge.pos,ge.facing,e.enemies,d);k&&Z(k,Ie.cutTime,"cut")&&r.play("cut",q.feedback.cutVolume)}else v=0;if(T&&ge.state==="execute"){let k=q.feedback;if(T.gelT-=De,T.sfxT-=De,T.kind==="cut"){if(T.gelT<=0){T.gelT=Math.max(k.cutGelEvery,.02),o.gel(te(T.e),X(T.e),5);let ie=q.camera.bump.amount;ie>0&&s.bump(k.executeShake/ie)}T.sfxT<=0&&(T.sfxT=.3,r.play("cut",k.cutVolume))}}let Me=e.tobble,Ye=xy({downed:!1,clear:e.clear,tobble:Me,pos:ge.pos,yaw:ge.facing,enemies:e.enemies,boxes:d});if(Ye.kind==="again"&&Se.interactPressed){U();return}Ye.kind==="finish"&&Se.interactPressed&&Jp.has(ge.state)&&Z(Ye.target,Ie.finishTime,"stomp")&&s.bump(.6),Ye.kind==="reviveTobble"&&Se.interactHeld&&Jp.has(ge.state)&&ge.reviveTobble(Me.pos);let H=ge.state==="reviveTobble";H&&(N=jp(ge.stateTime/Math.max(Pp(),.001)));let j=D;if(D=!!Se.grenadeHeld&&ge.grenadeAim,j&&!Se.grenadeHeld&&ye(),D&&i.count>0){zu(ge,w,q.combat,g),Zp(w,b,me,m);let k=cy(g,m,d,me,p);L={count:k.count,land:k.land,show:!0}}J();let re=Jp.has(ge.state),Pe=Kp.has(ge.state)&&R<=0;E=lR({device:M,grenadeHeld:D&&i.count>0,interact:re?Ye:null,reviving:H,revving:ge.state==="rev",bashTarget:Kp.has(ge.state)&&ge.bashReadyAt<=ge.clock&&!!El("bash",ge.pos,w,e.enemies,d),cutterNear:Pe&&K(),regretInHand:Re,holdFrac:N})}function W(){t.state==="rev"&&(t.rev(!1),_=!0)}function _e(De,Se){let ge=null;for(let Ie=0;Ie<3;Ie++){zu(t,w,q.combat,g);let me=Math.atan2(De-g[0],Se-g[2]);if(w=me,ge=uy(g,[De,q.grenade.ballRadius,Se],me),ge===null)return!1}return s.yaw=w,s.pitch=ge,!0}return{step:Ue,reset:fe,onAction:Y,onPlayerHit:W,aimThrow:_e,prompt:()=>E,arc:()=>({count:L.count,land:L.land,show:L.show}),busy:()=>R>0,armed:()=>D&&i.count>0,giveUpFrac:()=>l.downed?N:null,execution:()=>T?{id:T.e.id,kind:T.kind}:null}}function by(t=q.health){let e=-1,n=0,i=0,s=!1,r={hp:t.max,downed:!1,downT:0,sinceHit:0,fraction(){return t.max>0?Math.max(0,Math.min(1,r.hp/t.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,n=0,t.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=t.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,t.reviveHealth*t.max),r.sinceHit=0,e=-1,n=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&t.standInRevive>0&&(i+=o,i>=t.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<t.max&&r.sinceHit>=t.regenDelay&&(e<0&&(e=r.hp,n=0),n+=Math.min(o,r.sinceHit-t.regenDelay),r.hp=t.regenTime>0&&n<t.regenTime?e+(t.max-e)*n/t.regenTime:t.max),r.hp>=t.max&&(r.hp=t.max,e=-1),null)},reset(){r.hp=t.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,n=0,i=0,s=!1}};return r}var cR=new Set(["cover","coverSlide","coverSwap"]),hR=[],uR=e0(),dR=e0(),Wu=[null];function e0(){return{alive:!0,shapes:{head:{c:[0,0,0],r:gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:gt.body.r}}}}function My(t){return cR.has(t.state)?bs(t):null}function Qp(t,e,n,i,s){let r=t.shapes;return r.head.r=gt.head.r,r.body.r=gt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+n,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],t}function Xu(t,e=e0(),n=q.combat){let i=My(t),s=!!i&&i.kind==="low"&&!(t.cover&&t.cover.pop>=.5);return e.alive=!0,s?Qp(e,t.pos,n.crouchHead,.1,n.crouchBodyTop):Qp(e,t.pos,gt.head.cy,gt.body.ay,gt.body.by)}function wy(t,e,n,i,s,r=q.combat){let o=My(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return Mn(t,e,n,i,hR);if(!a)return Wu[0]=Xu(s,uR,r),Mn(t,e,n,i,Wu);let l=gt.body.by;return Wu[0]=Qp(dR,s.pos,gt.head.cy,l-r.shoulderDrop,l),Mn(t,e,n,i,Wu)}var Sy=.9;function kr(t,e,n,i){return ai(t,[e[0],Sy,e[1]],[n[0],Sy,n[1]],i)===1}var Rl=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function Ty(t,e,{radius:n,linkMax:i}){let s=t.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)Rl(s[o],s[a])<=i&&kr(e,s[o],s[a],n)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function fR(t,e,n,i,s){let{nodes:r,links:o}=t,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let m of n)h[m]=!0;let d=[];for(let m of e)a[m]=Rl(i,r[m]),d.push(m);let u=m=>a[m]+Rl(r[m],s),f=-1,p=1/0;for(;d.length;){let m=0;for(let y=1;y<d.length;y++){let w=d[y],b=d[m],M=u(w),_=u(b);(M<_-1e-12||Math.abs(M-_)<=1e-12&&w<b)&&(m=y)}let x=d.splice(m,1)[0];if(!c[x]){if(u(x)>=p)break;if(c[x]=!0,h[x]){let y=a[x]+Rl(r[x],s);(y<p-1e-12||Math.abs(y-p)<=1e-12&&x<f)&&(f=x,p=y)}for(let y of o[x]){if(c[y])continue;let w=a[x]+Rl(r[x],r[y]);w<a[y]-1e-12&&(a[y]=w,l[y]=x,d.push(y))}}}if(f<0)return null;let g=[];for(let m=f;m>=0;m=l[m])g.push(m);return g.reverse()}function Ur(t,e,n,i,s){if(kr(e,n,i,s))return[[i[0],i[1]]];let{nodes:r}=t,o=[],a=[];if(r.forEach((u,f)=>{kr(e,n,u,s)&&o.push(f),kr(e,u,i,s)&&a.push(f)}),!o.length||!a.length)return null;let l=fR(t,o,a,n,i);if(!l)return null;let c=[...l.map(u=>r[u]),i],h=[],d=n;for(let u=0;u<c.length;u++){let f=c[u+1];f&&kr(e,d,f,s)||(h.push([c[u][0],c[u][1]]),d=c[u])}return h}var n0=new Set(["executed","unused","dead"]),Ey=1.3,nr=1e-9,Ay=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]),Ku=(t=q)=>t.associate.radius*t.trainer.scaleW,Ry=(t=q)=>t.associate.height*t.trainer.scaleH;function Ii(t,e){t.state=e,t.stateT=0}function i0(t,e=q){return t.kind="trainer",t.health=e.trainer.health,t.strikeAt=-1,t.windupLen=0,t.struckAt=-1/0,t.retargetT=0,t.repathT=0,t.forcePathT=0,t.stuckCount=0,t.target="player",t.path=[],t.pathI=0,t.point=null,t.pop=0,t.blind=0,t.role="hold",t}function Cy(t,e=q.combat,n=q){let[i,s,r]=t.pos,o=t.shapes,a=n.trainer.scaleW,l=n.trainer.scaleH;return o.head.r=gt.head.r*a+e.hitPad,o.body.r=gt.body.r*a+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+gt.head.cy*l,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+gt.body.ay*l,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+gt.body.by*l,o.body.b[2]=r,o}var s0=t=>t.tobble&&!t.tobble.downed?t.tobble:null,Py=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,pR=(t,e)=>t.target==="tobble"?!s0(e):e.player.downed;function Iy(t,e,n){let i=e.player,s=s0(e);return i.downed?s?"tobble":null:s&&Ay(t.pos,s.pos)<Ay(t.pos,i.pos)*n.preferDoc?"tobble":"player"}function Ly(t,e,n){e.events.push({type:"bark",id:t.id,key:n})}function Cl(t,e,n,i){let s=Iy(t,e,n);if(!s){Ii(t,"idle");return}t.target=s,t.retargetT=n.retargetTime,t.repathT=0,t.path=[],t.pathI=0,Ii(t,"run"),i&&e.rand()<n.barkChance&&Ly(t,e,"trainerCharge")}function mR(t,e,n,i){i[0]=i[1]=0;let s=n.avoidRadius;if(!(s>0))return i;let r=(a,l,c)=>{let h=t.pos[0]-a,d=t.pos[2]-l,u=Math.hypot(h,d);if(u>=s||u<1e-6)return;let f=(s-u)/s*c/u;i[0]+=h*f,i[1]+=d*f};for(let a of e.others||[])a!==t&&a.alive&&a.state!=="unused"&&a.state!=="executed"&&a.state!=="dead"&&r(a.pos[0],a.pos[2],1);t.target!=="player"&&!e.player.downed&&r(e.player.pos[0],e.player.pos[2],1);let o=s0(e);return o&&t.target!=="tobble"&&r(o.pos[0],o.pos[2],1),i}var t0=[0,0],Yu=[0,0],qu=[0,0],$u=[0,0,0],Zu=[0,0,0];function gR(t,e,n,i){return Math.hypot(i[0]-t.pos[0],i[2]-t.pos[2])>n.swingRange?!1:($u[0]=t.pos[0],$u[1]=t.pos[1]+Ey,$u[2]=t.pos[2],Zu[0]=i[0],Zu[1]=t.pos[1]+Ey,Zu[2]=i[2],an(e.boxes,$u,Zu))}function xR(t,e,n){let i=e.now+n.windup,s=(e.others||[]).filter(r=>r!==t&&r.kind==="trainer"&&r.alive);for(let r=0;r<=s.length;r++){let o=!1;for(let a of s)for(let l of[a.struckAt,a.state==="windup"?a.strikeAt:-1/0])Number.isFinite(l)&&Math.abs(i-l)<n.swingGap-nr&&(i=l+n.swingGap,o=!0);if(!o)break}t.strikeAt=i,t.windupLen=Math.max(n.windup,i-e.now),Ii(t,"windup"),e.events.push({type:"telegraph",id:t.id,kind:"trainer",time:t.windupLen}),Ly(t,e,"trainerWindup")}function vR(t,e,n,i,s){if(t.retargetT-=i,t.repathT-=i,t.forcePathT-=i,t.retargetT<=0||pR(t,e)){let m=Iy(t,e,n);if(!m){Ii(t,"idle");return}t.target=m,t.retargetT=n.retargetTime}let r=Py(t,e);if(gR(t,e,n,r)){xR(t,e,n);return}let o=Ku(s),a=Ry(s);Yu[0]=t.pos[0],Yu[1]=t.pos[2],qu[0]=r[0],qu[1]=r[2];let l=r[0],c=r[2];if(t.forcePathT>0||!kr(e.boxes,Yu,qu,o*.9)){for((t.repathT<=0||!t.path.length)&&(t.path=Ur(e.graph,e.boxes,Yu,qu,o)||[[r[0],r[2]]],t.pathI=0,t.repathT=n.repathTime);t.pathI<t.path.length-1&&Math.hypot(t.path[t.pathI][0]-t.pos[0],t.path[t.pathI][1]-t.pos[2])<.35;)t.pathI++;l=t.path[t.pathI][0],c=t.path[t.pathI][1]}else t.path.length=0;let h=l-t.pos[0],d=c-t.pos[2],u=Math.hypot(h,d)||1;h/=u,d/=u,mR(t,e,n,t0),h+=t0[0]*n.avoidWeight,d+=t0[1]*n.avoidWeight;let f=Math.hypot(h,d)||1;h/=f,d/=f,t.yaw=Ht(t.yaw,Math.atan2(h,d),n.turnRate*i);let p=n.runSpeed*i,g=_n(e.boxes,t.pos,[h*p,0,d*p],o,a);t.pos[0]=g.pos[0],t.pos[2]=g.pos[2],t.stuckT+=i,t.stuckT>=n.stuckTime&&(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<n.runSpeed*n.stuckTime*.25&&(t.forcePathT=1,t.repathT=0,t.stuckCount++),t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2])}function yR(t,e,n,i){let s=Py(t,e);if(t.stateT<t.windupLen-n.lockTime){let r=s[0]-t.pos[0],o=s[2]-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(r,o),n.turnRate*i))}if(!(t.stateT<t.windupLen-nr)){for(let r of e.others||[])if(r!==t&&r.kind==="trainer"&&e.now-r.struckAt<n.swingGap-nr)return;t.struckAt=e.now,t.strikeAt=-1,Ii(t,"swing"),e.events.push({type:"trainerSwing",id:t.id,from:[t.pos[0],t.pos[1],t.pos[2]],yaw:t.yaw,reach:n.swingRange+n.swingSlack,arc:n.swingArc,target:t.target})}}function _R(t,e,n,i,s){let r=i.associate,o=Math.max(r.diveTime,.001),a=Math.max(t.stateT-s,r.diveReaction),l=Math.min(t.stateT,r.diveReaction+o);if(l>a){let c=r.diveDistance*(l-a)/o,h=_n(e.boxes,t.pos,[t.diveDir[0]*c,0,t.diveDir[1]*c],Ku(i),Ry(i));t.pos[0]=h.pos[0],t.pos[2]=h.pos[2]}t.stateT>=r.diveReaction+o-nr&&Cl(t,e,n,!1)}function Dy(t,e,n){let i=e.tuning||q,s=i.trainer;switch(t.state){case"idle":e.started&&Cl(t,e,s,!0);break;case"spawn":t.stateT>=i.pad.riseTime-nr&&Cl(t,e,s,!0);break;case"run":vR(t,e,s,n,i);break;case"windup":yR(t,e,s,n);break;case"swing":t.stateT>=s.swingTime-nr&&Ii(t,"recover");break;case"recover":t.stateT>=s.recover-nr&&Cl(t,e,s,!1);break;case"stagger":t.stateT>=s.staggerTime-nr&&Cl(t,e,s,!1);break;case"dive":_R(t,e,s,i,n);break;default:break}}function Ny(t){return!t.alive||n0.has(t.state)?!1:(t.strikeAt=-1,Ii(t,"stagger"),!0)}function Oy(t,e){if(!t.alive||n0.has(t.state)||t.state==="dive")return!1;t.strikeAt=-1,t.path=[],t.pathI=0;let n=t.pos[0]-e[0],i=t.pos[2]-e[2],s=Math.hypot(n,i);return s<1e-6?(n=Math.sin(t.yaw),i=Math.cos(t.yaw)):(n/=s,i/=s),t.diveDir[0]=n,t.diveDir[1]=i,t.yaw=Math.atan2(n,i),Ii(t,"dive"),!0}function ky(t){return!t.alive||n0.has(t.state)||t.state==="dive"?!1:(t.strikeAt=-1,t.wasDowned=!1,Ii(t,"executed"),!0)}function Uy(t){return!t.alive||t.state!=="executed"?!1:(Ii(t,"recover"),!0)}function Fy(t,e,n){return t.alive=!1,t.strikeAt=-1,t.pop=0,t.blind=0,Ii(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),e.events.push({type:"bark",id:t.id,key:"trainerDeath"}),"kill"}function By(t,e,n="execute"){return!t.alive||t.state!=="executed"?null:(t.health=0,Fy(t,e,n))}function zy(t,e,n,i="body"){return!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:(t.health-=e,t.health<=0?(t.health=0,Fy(t,n,i)):"hit")}var bR=.25,ju=new Set(["executed","unused","dead"]),MR=new Set(["cover","suppress","reload"]),ir={r:.25,y:.25,back:.2,front:.6},wR=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),SR=new Set(["telegraph","burst","suppress"]),l0=t=>Math.max(0,Math.min(1,t)),ji=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),Hy=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function c0(t,e=q.associate,n=q){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=Math.PI,t.state="idle",t.stateT=0,t.health=e.health,t.alive=!0,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.aim[0]=t.aim[1]=t.aim[2]=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckRef[0]=t.start[0],t.stuckRef[1]=t.start[2],t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.diveDir[0]=t.diveDir[1]=0,t.divePoint=null,t.claimed=!1,t.diedAt=-1/0,t.wasDowned=!1,t.kind=t.startKind,t.kind==="trainer"&&i0(t,n),$o(t,n.combat,n),t}function h0(t){return t.alive=!1,t.state="unused",t.stateT=0,t.health=0,t.pos[1]=t.prevPos[1]=-50,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.helping=null,t.claimed=!1,t.wasDowned=!1,t.kind="associate",$o(t),t}function Qu(t,e,n,i="associate"){let s=n.tuning||q,r=s.associate;for(let a=0;a<3;a++)t.pos[a]=e[a],t.prevPos[a]=e[a];let o=n.player;return t.yaw=t.prevYaw=o?Math.atan2(o.pos[0]-e[0],o.pos[2]-e[2]):Math.PI,t.state="spawn",t.stateT=0,t.health=r.health,t.alive=!0,t.claimed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.wasDowned=!1,t.diedAt=-1/0,t.divePoint=null,t.kind=i,i==="trainer"&&i0(t,s),$o(t,s.combat,s),t}function u0({id:t,pos:e,kind:n="associate"},i=q.associate,s=q){let r={id:t,kind:n,startKind:n,strikeAt:-1,windupLen:0,struckAt:-1/0,retargetT:0,repathT:0,forcePathT:0,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:gt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return c0(r,i,s)}function $o(t,e=q.combat,n=q){if(t.kind==="trainer")return Cy(t,e,n);let[i,s,r]=t.pos,o=t.shapes;if(t.state==="downed"){let l=Math.sin(t.yaw),c=Math.cos(t.yaw);return o.body.r=ir.r,o.head.r=gt.head.r,o.body.a[0]=i-l*ir.back,o.body.a[1]=s+ir.y,o.body.a[2]=r-c*ir.back,o.body.b[0]=i+l*ir.front,o.body.b[1]=s+ir.y,o.body.b[2]=r+c*ir.front,o.head.c[0]=o.body.b[0],o.head.c[1]=s+ir.y,o.head.c[2]=o.body.b[2],o}let a=wR.has(t.state)&&t.point&&t.point.kind==="low"&&t.pop<.5;return o.head.r=gt.head.r+e.hitPad,o.body.r=gt.body.r+e.hitPad,o.head.c[0]=i,o.head.c[2]=r,o.body.a[0]=i,o.body.a[2]=r,o.body.b[0]=i,o.body.b[2]=r,a?(o.head.c[1]=s+e.crouchHead-e.hitPad,o.body.a[1]=s+.1,o.body.b[1]=s+e.crouchBodyTop):(o.head.c[1]=s+gt.head.cy,o.body.a[1]=s+gt.body.ay,o.body.b[1]=s+gt.body.by),o}function ln(t,e){t.state=e,t.stateT=0}function Qi(t,e,n){e=l0(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var sr=(t,e)=>e>0?t/e:1;function Pl(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(r,o),i.turnRate*s))}function Gy(t,e,n){let i=t.point.normal;t.yaw=Ht(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function es(t,e){e.tokens.holds(t.id)&&e.tokens.release(t.id,e.now,e.director)}function d0(t,e){let n=e.player.pos;return t.chest[0]=n[0],t.chest[1]=n[1]+1.2,t.chest[2]=n[2],t.chest}function ed(t,e){let n=e.tuning||q,i=n.associate,s=e.director||n.director,r=e.player,o=[r.pos[0],r.pos[2]],a=d0(t,e),l=t.point,c=ji(l?l.pos:[t.pos[0],t.pos[2]],o),h=t.role,d=!!l&&(t.mustMove||h!=="hold"),u=[t.pos[0],t.pos[2]],f=Math.cos(s.flankAngle*Math.PI/180),p=Math.cos(s.flankMaxAngle*Math.PI/180),g=0,m=0;if(r.coverNormal)g=-r.coverNormal[0],m=-r.coverNormal[1];else{let M=0;for(let _ of e.others||[])_.alive&&(g+=_.pos[0],m+=_.pos[2],M++);M?(g=g/M-o[0],m=m/M-o[1]):(g=t.pos[0]-o[0],m=t.pos[2]-o[1])}let x=Math.hypot(g,m)||1;g/=x,m/=x;let y=[];for(let[M,_]of e.reserved)_!==t.id&&y.push(e.points[M].pos);let w=null,b=-1/0;for(let M of e.points){let _=e.reserved.get(M.index);if(_!==void 0&&_!==t.id||d&&M.index===l.index||t.mustMove&&l&&ji(M.pos,l.pos)<2*i.reserveRadius)continue;let v=ji(M.pos,o);if(v<i.reserveRadius||v<i.minRange||v>i.maxRange)continue;let S=!1;for(let L of y)if(ji(L,M.pos)<i.reserveRadius){S=!0;break}if(S)continue;let P=((M.pos[0]-o[0])*g+(M.pos[1]-o[1])*m)/v;if(h==="flank"?P<p:P<0)continue;let R=0;if(h==="push"){let L=c-v;if(L<2)continue;R=2*L}else if(h==="flank"){if(!r.coverNormal||P>f)continue;R=10}let D=Hu(M,a,e.boxes,n);if(!D.protected||!D.canShoot)continue;let T=-ji(u,M.pos)-.5*Math.abs(v-i.preferRange)+R;T>b+1e-9&&(b=T,w=M)}return w?{point:w,score:b}:null}function TR(t,e){let n=ed(t,e);return n?n.point:null}function r0(t,e,n){let i=e.tuning||q,s=[t.pos[0],t.pos[2]],r=d0(t,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==t.id)continue;let h=ji(s,l.pos);h>=a||n&&!Hu(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function ws(t,e,n){ln(t,"cover"),t.blind=0,t.wantSuppress=null,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function ei(t,e,n){es(t,e),Qi(t,0,n),t.blind=0;let i=t.stuckCount>=3?r0(t,e,!1):TR(t,e);if(!i){if(t.mustMove=!1,t.role!=="hold"&&(t.role="hold"),t.point&&ji(t.point.pos,[t.pos[0],t.pos[2]])<=.5){ws(t,e,n);return}if(i=r0(t,e,!0)||r0(t,e,!1),!i){ws(t,e,n);return}}if(t.point&&t.point.index!==i.index&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),e.reserved.set(i.index,t.id),t.point=i,t.mustMove=!1,Math.hypot(i.pos[0]-t.pos[0],i.pos[1]-t.pos[2])<=n.arriveDist){Vy(t,e,n);return}let s=t.stuckCount>=3?null:Ur(e.graph,e.boxes,[t.pos[0],t.pos[2]],i.pos,n.radius);t.path=s||[[i.pos[0],i.pos[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],ln(t,"run")}function Vy(t,e,n){if(t.role==="revive"){ln(t,"kneel");return}let i=t.point;t.pos[0]=i.pos[0],t.pos[2]=i.pos[1],t.role="hold",t.stuckCount=0,t.pointT=0,t.relocT=0,t.mustMove=!1,e.events.push({type:"arrive",id:t.id,point:i}),ws(t,e,n)}function ER(t,e,n,i){if(t.role==="revive"){let r=$y(t,e);if(!r){Ss(t,e),ei(t,e,n);return}if(Hy(t.pos,r.pos)<=qy){ln(t,"kneel");return}}let s=n.runSpeed*i;for(let r=0;r<t.path.length+2;r++){let o=t.path[t.pathI],a=t.pathI===t.path.length-1,l=o[0]-t.pos[0],c=o[1]-t.pos[2],h=Math.hypot(l,c);if(h<=n.arriveDist){if(a){Vy(t,e,n);return}t.pathI++;continue}Pl(t,o[0],o[1],n,i);let d=Math.min(s,h);if(d<=1e-9)break;let u=_n(e.boxes,t.pos,[l/h*d,0,c/h*d],n.radius,n.height),f=Math.hypot(u.pos[0]-t.pos[0],u.pos[2]-t.pos[2]);if(t.pos[0]=u.pos[0],t.pos[2]=u.pos[2],s-=f,f<d*.5)break;f>=h-1e-9}if(t.stuckT+=i,t.stuckT>=n.stuckTime){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05){t.role==="revive"&&Ss(t,e),t.stuckCount++,ei(t,e,n);return}t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}}function f0(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var Wy=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1),p0=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function AR(t,e,n){if(t.point){let i=Or(t.point,(e.tuning||q).associate.popShift);n[0]=i[0],n[2]=i[1]}else n[0]=t.pos[0],n[2]=t.pos[2];return n[1]=1.49,n}var o0=[0,0,0];function RR(t,e){let n=p0(e),i=e.player;return n?(AR(t,e,o0),!i.downed&&an(e.boxes,o0,i.chest)?"player":an(e.boxes,o0,n.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var Xy=(t,e)=>t.target==="tobble"?!p0(e):e.player.downed,Yy=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function CR(t,e,n,i,s){Qi(t,t.pop-sr(s,n.popTime),n),Gy(t,n,s);let r=e.player;if(r.downed&&!p0(e))return;if(!r.downed){if(t.pointT+=s,t.role!=="hold"){ei(t,e,n);return}if(t.relocT+=s,t.relocT>=n.relocateCheck){t.relocT=0;let a=Hu(t.point,d0(t,e),e.boxes,e.tuning||q);if(!a.protected||!a.canShoot||ji(t.point.pos,[r.pos[0],r.pos[2]])<n.reserveRadius){t.mustMove=!0,ei(t,e,n);return}}if(t.pointT>=n.relocateAfter){t.mustMove=!0,t.pointT=0,ei(t,e,n);return}}if(t.stateT<t.wait)return;if(t.wantSuppress===null&&(t.wantSuppress=e.rand()<n.suppressChance),t.bursts>=n.magBursts){ln(t,"reload"),e.events.push({type:"bark",id:t.id,key:"reload"});return}let o=RR(t,e);if(o&&e.tokens.request(t.id,e.now,e.tokenCount,i)){t.target=o,ln(t,"telegraph"),t.shots=0,f0(t,e,n,s,!0),e.events.push({type:"telegraph",id:t.id});return}t.wantSuppress&&!r.downed&&(ln(t,"suppress"),t.shots=0)}function a0(t,e,n,i){es(t,e),i&&t.bursts++,ws(t,e,n)}function PR(t,e,n,i){Qi(t,t.pop+sr(i,n.popTime),n);let s=Yy(t,e);if(Pl(t,s[0],s[2],n,i),f0(t,e,n,i,!1),Xy(t,e)||!e.tokens.holds(t.id)){a0(t,e,n,!1);return}t.stateT>=n.popTime+n.telegraphTime-1e-9&&(ln(t,"burst"),t.shots=0)}function IR(t,e,n,i){let s=e.player;Qi(t,t.pop+sr(i,n.popTime),n);let r=Yy(t,e);if(Pl(t,r[0],r[2],n,i),f0(t,e,n,i,!1),Xy(t,e)||!e.tokens.holds(t.id)){a0(t,e,n,!0);return}let o=t.muzzle;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp,o[2]=t.pos[2];let a=Wy(t.stateT,n.rate,n.burstTime),l=t.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||q).move.sprint);for(;t.shots<a;){t.shots++;let c=t.aim[0]-o[0],h=t.aim[1]-o[1],d=t.aim[2]-o[2],u=Math.hypot(c,h,d)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[c/u,h/u,d/u],accurate:!0,target:t.target,spread:n.spread+n.moveSpread*l})}t.stateT>=n.burstTime-1e-9&&a0(t,e,n,!0)}function LR(t,e,n,i){let s=e.player;if(t.blind=l0(t.blind+sr(i,n.popTime)),Pl(t,s.pos[0],s.pos[2],n,i),s.downed){t.blind=0,ws(t,e,n);return}let r=t.stateT-n.popTime;if(r<0&&t.blind<1)return;let o=t.point,a=Math.max(0,r),l=t.muzzle;l[0]=t.pos[0],l[2]=t.pos[2],l[1]=t.pos[1]+(o.kind==="low"?o.height+(e.tuning||q).combat.blindLift:n.muzzleUp);let c=Wy(a,n.suppressRate,n.suppressTime);for(;t.shots<c;){t.shots++;let h=s.head[0]-l[0],d=s.head[1]-l[1],u=s.head[2]-l[2],f=Math.hypot(h,d,u)||1;h/=f,d/=f,u/=f;let p=u,g=-h,m=Math.hypot(p,g);m<1e-6&&(p=1,g=0,m=1),p/=m,g/=m;let x=d*g,y=u*p-h*g,w=-d*p,b=2*Math.PI*e.rand(),M=n.suppressMiss*(1+.5*e.rand()),_=Math.cos(b)*M,v=Math.sin(b)*M,S=s.head[0]+p*_+x*v,P=s.head[1]+y*v,R=s.head[2]+g*_+w*v,D=S-l[0],T=P-l[1],L=R-l[2],E=Math.hypot(D,T,L)||1;e.events.push({type:"enemyShot",id:t.id,from:[l[0],l[1],l[2]],dir:[D/E,T/E,L/E],accurate:!1,spread:n.suppressSpread})}r>=n.suppressTime-1e-9&&(t.blind=0,ws(t,e,n))}var qy=.8;function $y(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);return n&&n.alive&&n.state==="downed"&&n.helper===t.id?n:null}function Ss(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);n&&n.helper===t.id&&(n.helper=null),t.helping=null,t.role="hold"}function Zy(t,e,n){let i=(n.tuning||q).associate;es(t,n),Qi(t,0,i),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.point=null,t.role="revive",t.helping=e.id,e.helper=t.id,t.mustMove=!1;let s=t.pos[0]-e.pos[0],r=t.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=qy){ln(t,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];t.path=Ur(n.graph,n.boxes,[t.pos[0],t.pos[2]],a,i.radius)||[a],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],ln(t,"run")}function DR(t,e,n,i){let s=$y(t,e);if(!s){Ss(t,e),ei(t,e,n);return}Pl(t,s.pos[0],s.pos[2],n,i),!(t.stateT<n.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,n.reviveHealth*n.health),s.role="hold",s.mustMove=!1,s.bursts=0,ln(s,"seek"),e.events.push({type:"cloneRevive",id:t.id,target:s.id}),t.helping=null,t.role="hold",ei(t,e,n))}function NR(t,e,n,i){if(t.stateT>=n.bleedTime-1e-9){t.health=0,Ju(t,e,"bleed");return}if(t.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===t||!c.alive||!MR.has(c.state))continue;let h=Hy(t.pos,c.pos);h<o&&(o=h,s=c.pos[0]-t.pos[0],r=c.pos[2]-t.pos[2])}if(o===1/0)s=t.pos[0]-e.player.pos[0],r=t.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),t.yaw=Ht(t.yaw,Math.atan2(s,r),n.turnRate*i);let a=n.downedCrawl*i,l=_n(e.boxes,t.pos,[s/o*a,0,r/o*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}function OR(t,e,n){t.point&&e.reserved.get(t.point.index)===t.id&&t.pop<=1e-6&&ji(t.point.pos,[t.pos[0],t.pos[2]])<=.3?ws(t,e,n):ei(t,e,n)}function Ky(t,e){return t.kind==="trainer"?Ny(t):!t.alive||ju.has(t.state)||t.state==="downed"?!1:(t.role==="revive"&&Ss(t,e),es(t,e),t.blind=0,ln(t,"stagger"),!0)}function Jy(t,e,n){if(t.kind==="trainer")return Oy(t,e);if(!t.alive||ju.has(t.state)||t.state==="downed"||t.state==="dive")return!1;t.role==="revive"&&Ss(t,n),es(t,n),Qi(t,0,(n.tuning||q).associate),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.divePoint=t.point,t.point=null,t.role="hold",t.path=[],t.pathI=0;let i=t.pos[0]-e[0],s=t.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(t.yaw),s=Math.cos(t.yaw)):(i/=r,s/=r),t.diveDir[0]=i,t.diveDir[1]=s,t.yaw=Math.atan2(i,s),ln(t,"dive"),!0}function kR(t,e,n,i){let s=Math.max(n.diveTime,.001),r=Math.max(t.stateT-i,n.diveReaction),o=Math.min(t.stateT,n.diveReaction+s);if(o>r){let a=n.diveDistance*(o-r)/s,l=_n(e.boxes,t.pos,[t.diveDir[0]*a,0,t.diveDir[1]*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}t.stateT>=n.diveReaction+s-1e-9&&(t.point=t.divePoint,t.divePoint=null,t.mustMove=!0,ei(t,e,n))}function jy(t,e){return t.kind==="trainer"?ky(t):!t.alive||ju.has(t.state)||t.state==="dive"?!1:(t.role==="revive"&&Ss(t,e),es(t,e),Qi(t,0,(e.tuning||q).associate),t.blind=0,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.wasDowned=t.state==="downed",t.point=null,t.role="hold",t.helper=null,t.mustMove=!1,ln(t,"executed"),!0)}function Qy(t){return t.kind==="trainer"?Uy(t):!t.alive||t.state!=="executed"?!1:(ln(t,t.wasDowned?"downed":"flinch"),t.wasDowned=!1,!0)}function e_(t,e,n="execute"){return t.kind==="trainer"?By(t,e,n):!t.alive||t.state!=="executed"?null:(t.health=0,Ju(t,e,n))}function Ju(t,e,n){return t.alive=!1,es(t,e),t.role==="revive"&&Ss(t,e),t.helper=null,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.pop=0,t.blind=0,ln(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),"kill"}function m0(t,e){return t.kind==="trainer"||!t.alive||ju.has(t.state)||t.state==="downed"?null:(es(t,e),t.role==="revive"&&Ss(t,e),t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.point=null,t.health=1,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.mustMove=!1,ln(t,"downed"),e.events.push({type:"down",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]]}),e.events.push({type:"bark",id:t.id,key:"cloneDown"}),"down")}function t_(t,e,n){if(!t.alive)return;(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,bR);let i=(e.tuning||q).associate,s=e.director||q.director;if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.kind==="trainer"){Dy(t,e,n);return}switch(t.state){case"idle":e.started&&ei(t,e,i);break;case"seek":ei(t,e,i);break;case"run":ER(t,e,i,n);break;case"cover":CR(t,e,i,s,n);break;case"telegraph":PR(t,e,i,n);break;case"burst":IR(t,e,i,n);break;case"suppress":LR(t,e,i,n);break;case"reload":Qi(t,t.pop-sr(n,i.popTime),i),Gy(t,i,n),t.stateT>=i.reloadTime&&(t.bursts=0,ws(t,e,i));break;case"flinch":Qi(t,t.pop-sr(n,i.popTime),i),t.blind=l0(t.blind-sr(n,i.popTime)),t.stateT>=i.flinchTime&&(t.point?ws(t,e,i):ei(t,e,i));break;case"stagger":Qi(t,t.pop-sr(n,i.popTime),i),t.stateT>=i.staggerTime-1e-9&&OR(t,e,i);break;case"dive":kR(t,e,i,n);break;case"kneel":DR(t,e,i,n);break;case"downed":NR(t,e,i,n);break;case"spawn":t.stateT>=(e.tuning||q).pad.riseTime-1e-9&&ei(t,e,i);break;default:break}}function n_(t,e,n,i="body"){return t.kind==="trainer"?zy(t,e,n,i):!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:t.state==="downed"?(t.health=0,Ju(t,n,i)):(t.health-=e,t.health<=0?(i==="body"||i==="tobble")&&n.rand()<(n.tuning||q).associate.downChance?m0(t,n):(t.health=0,Ju(t,n,i)):t.role==="revive"?(Ss(t,n),es(t,n),ln(t,"flinch"),"hit"):(SR.has(t.state)&&(es(t,n),ln(t,"flinch"),t.blind=Math.min(t.blind,1)),"hit"))}function i_(){let t=new Map,e=new Map,n=new Map,i={request(s,r,o,a=q.director){if(t.has(s))return!0;if(r<(n.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[d,u]of e)r-u.last>a.requestWindow&&e.delete(d);if(t.size>=o)return!1;let c=null,h=1/0;for(let[d,u]of e)u.first<h&&(c=d,h=u.first);return c!==s?!1:(e.delete(s),t.set(s,r),!0)},release(s,r,o=q.director){e.delete(s),t.delete(s)&&n.set(s,r+o.tokenCooldown)},holds(s){return t.has(s)},held(){return[...t.keys()]},expire(s,r=q.director){let o=[];for(let[a,l]of t)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){t.clear(),e.clear(),n.clear()}};return i}function s_(t,e=q){let n=(t.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,openKey:r.openKey,shareKey:r.shareKey,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(n.map(r=>[r.id,new Set]));return{list:n,step(r,o){let a=e.pad,l=[];for(let c of n){if(c.state==="dormant"){if(!o.started||!(o.kills>=(c.openKey&&Number.isFinite(a[c.openKey])?a[c.openKey]:a.openAfterKills)||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of n)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of n)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return n.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of n)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var UR=.25,FR=1.49,BR=.5,Br="tobble",zR=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn","windup","swing","recover"]),td=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),od=t=>Math.max(0,Math.min(1,t)),r_=(t,e)=>e&&e.tuning?e.tuning.tobble:t.cfg,HR=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function v0({pos:t,yaw:e=0},n=q.tobble){let i={id:Br,cfg:n,start:[t[0],t[1],t[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:gt.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return y0(i)}function y0(t){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=t.startYaw,t.state="idle",t.stateT=0,t.hp=t.cfg.health,t.alive=!0,t.downed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.target=null,t.reviveT=0,t.threatT=0,t.lofT=0,t.wait=0,t.shots=0,t.sinceHit=0,t.relocT=0,t.complainT=0,t.stuckT=0,t.stuckCount=0,t.kneeling=!1,t.revGo=!1,t.sideLeft=0,t.speed=0,t.aim[0]=t.aim[1]=t.aim[2]=0,Il(t),t}function Il(t,e=q.combat){let n=t.cfg,i=n.scale,[s,r,o]=t.pos,a=t.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,t.downed){let c=Math.sin(t.yaw),h=Math.cos(t.yaw);a.body.r=.25*i,a.head.r=gt.head.r*i,a.body.a[0]=s-c*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-h*.2*i,a.body.b[0]=s+c*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+h*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],t.chest[0]=s,t.chest[1]=r+.25*i,t.chest[2]=o}else if(t.point&&t.point.kind==="low"&&t.pop<.5)a.head.r=(gt.head.r+l)*i,a.body.r=(gt.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,t.chest[0]=s,t.chest[1]=r+e.crouchBodyTop*i*.9,t.chest[2]=o;else{let c=t.point?n.popLift*od(t.pop):0;a.head.r=(gt.head.r+l)*i,a.body.r=(gt.body.r+l)*i,a.head.c[1]=r+gt.head.cy*i+c,a.body.a[1]=r+gt.body.ay*i+c,a.body.b[1]=r+gt.body.by*i+c,t.chest[0]=s,t.chest[1]=r+n.height*(1.2/1.8)+c,t.chest[2]=o}return t.head[0]=a.head.c[0],t.head[1]=a.head.c[1],t.head[2]=a.head.c[2],a}function zr(t,e){t.state=e,t.stateT=0}var ad=(t,e,n=!1)=>t.events.push(n?{type:"bark",id:Br,key:e,force:n}:{type:"bark",id:Br,key:e});function Ll(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(r,o),i.turnRate*s))}function GR(t,e,n){let i=t.point.normal;t.yaw=Ht(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function Ko(t,e,n){e=od(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.tuning.associate.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var _0=(t,e)=>e>0?t/e:1;function Dl(t,e){t.point&&e.reserved.get(t.point.index)===Br&&e.reserved.delete(t.point.index),t.point=null}function o_(t,e,n,i){let s=t.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,c=o/a,h=n-s.lens[0],d=i-s.lens[2],u=Math.max(.5,Math.min(e.lofRange,h*l+d*c));return Math.hypot(h-l*u,d-c*u)}function VR(t,e,n){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=t.pos[0]-i.lens[0],l=t.pos[2]-i.lens[2],c=-o*a+r*l>=0?1:-1;t.side[0]=-o*c,t.side[1]=r*c,t.sideLeft=n.sidestepDist,Dl(t,e),Ko(t,0,e),t.target=null,t.lofT=0,zr(t,"sidestep")}var Fr=t=>t.alive&&zR.has(t.state)&&t.state!=="executed",Zo=t=>t.state==="downed";function WR(t,e,n,i){return t.point?(Or(t.point,e.tuning.associate.popShift,Ts),i[0]=Ts[0],i[2]=Ts[1]):(i[0]=t.pos[0],i[2]=t.pos[2]),i[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0),i}function sd(t,e){let n=t.shapes.body;return e[0]=(n.a[0]+n.b[0])/2,e[1]=(n.a[1]+n.b[1])/2,e[2]=(n.a[2]+n.b[2])/2,e}var Li=[0,0,0],g0=[0,0,0],Ts=[0,0];function b0(t,e,n){return t.point?(Or(t.point,e.tuning.associate.popShift,Ts),n[0]=Ts[0],n[2]=Ts[1]):(n[0]=t.pos[0],n[2]=t.pos[2]),n[1]=FR,n}function a_(t,e,n){WR(t,e,n,g0);let i=null,s=1/0;for(let r of e.enemies){if(!Fr(r)||Zo(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);o>=s||o>n.range||an(e.boxes,g0,sd(r,Li))&&(s=o,i=r)}return i}function l_(t,e,n){let i=null,s=1/0;for(let r of t.enemies){if(!Fr(r)||Zo(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-n);o<s&&(s=o,i=r)}return i}var rd=[0,0,0],rr=[0,0,0],nd=[0,0,0];function c_(t,e,n){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[t.pos[0],t.pos[2]],l=l_(e,t.pos[0],t.pos[2]),c=[];for(let[f,p]of e.reserved)p!==Br&&c.push(e.points[f].pos);let h=(n.followMin+n.followMax)/2,d=null,u=-1/0;for(let f of e.points){let p=e.reserved.get(f.index);if(p!==void 0&&p!==Br)continue;let g=td(f.pos,o);if(g<n.followMin||g>n.followMax||g<=n.personalSpace||o_(e,n,f.pos[0],f.pos[1])<n.lofClear)continue;let m=!1;for(let b of c)if(td(b,f.pos)<s.reserveRadius){m=!0;break}if(m)continue;let x=!0;for(let b of e.enemies)if(Fr(b)&&td([b.pos[0],b.pos[2]],f.pos)<s.radius+n.radius+.2){x=!1;break}if(!x)continue;let y=!1;if(l){if(b0(l,e,rd),rr[0]=f.pos[0],rr[1]=f.kind==="low"?i.combat.crouchHead*n.scale:n.height,rr[2]=f.pos[1],an(e.boxes,rr,rd))continue;Or(f,s.popShift,Ts),nd[0]=Ts[0],nd[1]=n.muzzleUp+n.popLift,nd[2]=Ts[1],y=an(e.boxes,nd,sd(l,Li))}let w=-td(a,f.pos)-.5*Math.abs(g-h)+(y?8:0);w>u+1e-9&&(u=w,d=f)}return d}function XR(t,e,n){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let d=Math.hypot(i.dir[0],i.dir[2]);d>1e-6&&(r=i.dir[0]/d,o=i.dir[2]/d)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,c=(-o+r)*a,h=_n(e.boxes,[s[0],t.pos[1],s[2]],[l,0,c],n.radius,n.height);return[h.pos[0],h.pos[2]]}function h_(t,e,n,i){t.goal[0]=i[0],t.goal[1]=i[1],t.path=t.stuckCount>=3?[[i[0],i[1]]]:Ur(e.graph,e.boxes,[t.pos[0],t.pos[2]],i,n.radius)||[[i[0],i[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}function u_(t,e,n,i,s){let r=s*i,o=.15;for(let a=0;a<t.path.length+2;a++){let l=t.path[t.pathI],c=t.pathI===t.path.length-1,h=l[0]-t.pos[0],d=l[1]-t.pos[2],u=Math.hypot(h,d);if(u<=o){if(c)return"arrived";t.pathI++;continue}Ll(t,l[0],l[1],n,i);let f=Math.min(r,u);if(f<=1e-9)break;let p=_n(e.boxes,t.pos,[h/u*f,0,d/u*f],n.radius,n.height),g=Math.hypot(p.pos[0]-t.pos[0],p.pos[2]-t.pos[2]);if(t.pos[0]=p.pos[0],t.pos[2]=p.pos[2],r-=g,g<f*.5)break}if(t.stuckT+=i,t.stuckT>=1){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05)return"stuck";t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}return"moving"}function or(t,e,n){let i=e.started?c_(t,e,n):null;t.point&&(!i||i.index!==t.point.index)&&Dl(t,e),Ko(t,0,e);let s;if(i?(t.point=i,e.reserved.set(i.index,Br),s=i.pos):s=XR(t,e,n),t.shots=0,t.target=null,Math.hypot(s[0]-t.pos[0],s[1]-t.pos[2])<=.15){d_(t,e,n);return}h_(t,e,n,s),zr(t,"follow")}function d_(t,e,n){if(t.stuckCount=0,t.point&&(t.pos[0]=t.point.pos[0],t.pos[2]=t.point.pos[1]),!e.started&&!t.point){zr(t,"idle");return}x0(t,e,n)}function x0(t,e,n){zr(t,"cover"),t.target=null,t.relocT=0,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function YR(t,e,n,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax){or(t,e,n);return}Ll(t,s[0],s[2],n,i)}function qR(t,e,n,i){let s=u_(t,e,n,i,n.runSpeed);s==="arrived"?d_(t,e,n):s==="stuck"&&(t.stuckCount++,Dl(t,e),or(t,e,n))}function $R(t,e,n,i){Ko(t,t.pop-_0(i,n.popTime),e);let s=e.player.pos;if(t.point?GR(t,n,i):Ll(t,s[0],s[2],n,i),t.relocT+=i,t.relocT>=BR){t.relocT=0;let o=Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax;if(t.point){let a=t.point.pos,l=Math.hypot(t.pos[0]-a[0],t.pos[2]-a[1])>.3,c=l_(e,t.pos[0],t.pos[2]),h=!1;if(c){b0(c,e,rd);let d=t.point.kind==="low"?e.tuning.combat.crouchHead*n.scale:n.height;rr[0]=a[0],rr[1]=d,rr[2]=a[1],h=an(e.boxes,rr,rd)}if(o||l||h){or(t,e,n);return}}else if(o||e.started&&c_(t,e,n)){or(t,e,n);return}}if(!e.started||t.stateT<t.wait)return;let r=a_(t,e,n);r&&(t.target=r,t.shots=0,zr(t,"shoot"))}function ZR(t,e,n,i){Ko(t,t.pop+_0(i,n.popTime),e);let s=t.target;if((!s||!Fr(s)||Zo(s)||!an(e.boxes,KR(t,n),sd(s,Li)))&&(s=t.target=a_(t,e,n)),!s){x0(t,e,n);return}if(Ll(t,s.pos[0],s.pos[2],n,i),t.stateT<n.popTime-1e-9)return;let r=t.muzzle;r[0]=t.pos[0],r[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0)*od(t.pop),r[2]=t.pos[2];let o=HR(t.stateT-n.popTime,n.rate,n.burstTime);for(;t.shots<o;){t.shots++,sd(s,Li);let a=Li[0]-r[0],l=Li[1]-r[1],c=Li[2]-r[2],h=Math.hypot(a,l,c)||1,d=Go([a/h,l/h,c/h],n.spread,e.rand,t.scratch),u=Mn(r,d,n.range,e.boxes,e.enemies),f=u.target&&(u.kind==="head"||u.kind==="body")?u.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:u.point,hit:f?f.id:null}),f&&e.hurtRep&&e.hurtRep(f,n.damage),!Fr(s)||Zo(s))break}(!Fr(s)||Zo(s))&&(t.target=null),t.stateT>=n.popTime+n.burstTime-1e-9&&x0(t,e,n)}var id=[0,0,0];function KR(t,e){return id[0]=t.pos[0],id[1]=t.pos[1]+e.muzzleUp+(t.point?e.popLift:0)*od(t.pop),id[2]=t.pos[2],id}function JR(t,e,n,i){let s=Math.min(n.runSpeed*i,t.sideLeft);if(s>0){let r=_n(e.boxes,t.pos,[t.side[0]*s,0,t.side[1]*s],n.radius,n.height),o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);t.pos[0]=r.pos[0],t.pos[2]=r.pos[2],t.sideLeft-=o<s*.5?t.sideLeft:o}t.sideLeft<=1e-6&&or(t,e,n)}function jR(t){let e=t.player.pos,n=0;Li[0]=e[0],Li[1]=.4,Li[2]=e[2];for(let i of t.enemies)!Fr(i)||Zo(i)||i.state==="spawn"||an(t.boxes,b0(i,t,g0),Li)&&n++;return n}function QR(t,e){Dl(t,e),Ko(t,0,e),t.target=null,t.revGo=!1,t.threatT=0,t.kneeling=!1,t.reviveT=0,t.path=[],t.pathI=0,t.goal[0]=t.goal[1]=1/0,zr(t,"revive")}function eC(t,e,n,i){let s=e.player.pos;if(!t.revGo)if(t.threatT+=i,Ko(t,t.pop-_0(i,n.popTime),e),jR(e)<=n.reviveMaxThreats||t.threatT>=n.reviveWaitMax-1e-9)t.revGo=!0;else return;if(Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])<=n.reviveRange){t.kneeling||(t.kneeling=!0,t.reviveT=0,e.events.push({type:"tobbleKneel"})),Ll(t,s[0],s[2],n,i),t.reviveT+=i,t.reviveT>=n.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&ad(e,"tobbleRevive",!0),or(t,e,n));return}if(t.kneeling=!1,t.reviveT=0,Math.hypot(s[0]-t.goal[0],s[2]-t.goal[1])>n.reviveRange+.4||!t.path.length){let a=t.pos[0]-s[0],l=t.pos[2]-s[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.min(.8,n.reviveRange*.8);h_(t,e,n,[s[0]+a*h,s[2]+l*h]),t.goal[0]=s[0],t.goal[1]=s[2]}let o=u_(t,e,n,i,n.runSpeed);o==="stuck"?(t.stuckCount++,t.path=[]):o==="arrived"&&(t.path=[])}function tC(t,e,n,i){let s=e.player.pos,r=s[0]-t.pos[0],o=s[2]-t.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(r,o),n.turnRate*i)),a>n.reviveRange&&n.crawlSpeed>0){let l=Math.min(n.crawlSpeed*i,a-n.reviveRange),c=_n(e.boxes,t.pos,[r/a*l,0,o/a*l],n.radius,n.height);t.pos[0]=c.pos[0],t.pos[2]=c.pos[2]}t.complainT+=i,t.complainT>=n.complainEvery-1e-9&&(t.complainT=0,ad(e,"tobbleComplain"))}function f_(t,e,n){(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,UR);let i=r_(t,e);if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.sinceHit+=n,t.downed){tC(t,e,i,n);return}switch(t.hp<i.health&&t.sinceHit>=i.regenDelay&&(t.hp=Math.min(i.health,t.hp+(i.regenTime>0?i.health/i.regenTime*n:i.health))),e.playerDowned?t.state!=="revive"&&QR(t,e):t.state==="revive"&&or(t,e,i),t.state!=="sidestep"&&t.state!=="revive"&&e.aim&&e.aim.active&&o_(e,i,t.pos[0],t.pos[2])<i.lofClear?(t.lofT+=n,t.lofT>=i.sidestepReact-1e-9&&VR(t,e,i)):t.state!=="sidestep"&&(t.lofT=0),t.state){case"idle":YR(t,e,i,n);break;case"follow":qR(t,e,i,n);break;case"cover":$R(t,e,i,n);break;case"shoot":ZR(t,e,i,n);break;case"sidestep":JR(t,e,i,n);break;case"revive":eC(t,e,i,n);break;default:break}}function ld(t,e,n){return t.downed||!(e>0)?null:(t.hp-=e,t.sinceHit=0,t.hp>0?"hit":(t.hp=0,t.downed=!0,t.kneeling=!1,t.reviveT=0,t.complainT=0,t.target=null,t.pop=0,Dl(t,n),zr(t,"downed"),n.events.push({type:"tobbleDown"}),ad(n,"tobbleDown",!0),"downed"))}function M0(t,e){if(!t.downed)return!1;let n=r_(t,e);return t.downed=!1,t.hp=Math.max(1,n.reviveHealth*n.health),t.sinceHit=0,t.lofT=0,t.complainT=0,e.events.push({type:"tobbleUp"}),ad(e,"tobbleUp"),or(t,e,n),!0}var p_=new Set(["cover","coverSlide","coverSwap"]),m_=new Set(["cover","suppress","reload","flinch"]),nC=new Set(["cover","suppress","reload"]),g_=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),x_=8,iC=1,sC=.1,v_=1.3,w0=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function y_({level:t,boxes:e,edges:n,rand:i,tuning:s=q}){let r=()=>s.associate,o=gy(n,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=Ty(t.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=i_(),c=dy(s.grenade),h=s_(t,s),d=new Map,u=()=>!!t.tobble&&s.tobble.enabled>0,f=[],p=[],g=t.associates.length,m=t.associates.map(H=>u0(H,s.associate,s));for(let H=g;H<x_;H++)m.push(h0(u0({id:`r${H+1}`,pos:[0,0,0]},s.associate,s)));let x=()=>Math.max(g,Math.min(x_,Math.round(s.director.maxEnemies))),y=x(),w=Xu({state:"move",pos:[0,0,0],cover:null,scratch:{}}),b={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},M={boxes:e,points:o,graph:a,tokens:l,reserved:d,player:b,now:0,rand:i,tokenCount:0,events:f,tuning:s,director:s.director,others:m,started:!1,aim:void 0,tobble:null,enemies:m,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null},_={enemies:m,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list,tobble:null},v=!1,S=0,P=[0,0],R=!1,D=!1;function T(){d.clear();for(let H of m.slice(0,g)){if(H.kind==="trainer")continue;let j=null,re=1/0;for(let Pe of o){let k=Math.hypot(Pe.pos[0]-H.pos[0],Pe.pos[1]-H.pos[2]);k<re&&(re=k,j=Pe)}H.point=j,j&&d.set(j.index,H.id)}}T(),_.tobble=M.tobble=u()?v0(t.tobble,s.tobble):null;let L=()=>_.tobble&&!_.tobble.downed,E=(H,j,re=f,Pe=!1)=>re.push(Pe?{type:"bark",id:H,key:j,force:Pe}:{type:"bark",id:H,key:j}),N=()=>m.find(H=>H.alive)||m[0];function U(){for(let H of l.held())l.release(H,_.now,s.director)}function G(H){_.started=!0,_.startT=_.now,E(N().id,"lockdown",H)}function te(H){H.diedAt=_.now,_.kills++,h.noteDeath(H.id)}function X(H,j,re,Pe){!_.started&&H.alive&&H.state!=="unused"&&j>0&&G(Pe),M.events=Pe;let k=n_(H,j,M,re);return M.events=f,k==="kill"&&te(H),k==="kill"&&re==="head"&&L()&&++S%3===0&&E("tobble","tobbleHeadshot",Pe),k}M.hurtRep=(H,j)=>X(H,j,"tobble",f),M.reviveDoc=()=>!M.health||!M.health.downed?!1:(M.health.revive(),M.m.revive(),b.downed=!1,f.push({type:"revived"}),!0);function ne(H,j){let re=b,Pe=s.combat;re.pos[0]=H.pos[0],re.pos[1]=H.pos[1],re.pos[2]=H.pos[2];let k=p_.has(H.state)?bs(H):null;re.exposed=!!(H.cover&&H.cover.exposed);let ie=!!k&&k.kind==="low"&&!re.exposed;re.chest[0]=H.pos[0],re.chest[1]=H.pos[1]+(ie?.6:1.2),re.chest[2]=H.pos[2];let de=Xu(H,w,Pe).shapes.head.c;re.head[0]=de[0],re.head[1]=de[1],re.head[2]=de[2],re.speed=H.speed(),re.coverNormal=k?k.normal:null,re.downed=!!j.downed}function Z(H,j){let re=s.director;if(p_.has(H.state)?b.exposed||(_.hideT+=j):_.hideT=0,!D||Math.hypot(H.pos[0]-P[0],H.pos[2]-P[1])>re.stayRadius?(P[0]=H.pos[0],P[1]=H.pos[2],D=!0,_.stayT=0):_.stayT+=j,_.hideT>=re.pushAfter&&!m.some(k=>k.alive&&k.role==="push")){let k=m.filter(de=>de.alive&&de.role==="hold"&&m_.has(de.state)&&!l.holds(de.id)).sort((de,Ce)=>w0(de.pos,b.pos)-w0(Ce.pos,b.pos)),ie=null;for(let de of k){if(de.role="push",ed(de,M)){ie=de;break}de.role="hold"}ie?(E(ie.id,"push"),_.hideT=0):_.hideT=Math.max(0,re.pushAfter-1)}if(_.stayT>=re.flankAfter&&!m.some(k=>k.alive&&k.role==="flank")){let k=null,ie=-1/0;for(let de of m){if(!de.alive||de.role!=="hold"||!m_.has(de.state)||l.holds(de.id))continue;de.role="flank";let Ce=ed(de,M);de.role="hold",Ce&&Ce.score>ie&&(ie=Ce.score,k=de)}k&&(k.role="flank",L()&&E("tobble","tobbleFlank"),E(k.id,"flank")),_.stayT=0}}function Y(){let H=r().reviveRange;for(let j of m){if(!j.alive||j.state!=="downed"||j.helper)continue;let re=null,Pe=1/0;for(let k of m){if(!k.alive||!nC.has(k.state)||k.role!=="hold"||l.holds(k.id))continue;let ie=w0(k.pos,j.pos);ie<=H&&ie<Pe&&(Pe=ie,re=k)}re&&(Zy(re,j,M),E(re.id,"cloneRevive"))}}function ye(){for(let H=0;H<y;H++){let j=m[H];if(!j.claimed&&(j.state==="unused"||j.state==="dead"&&_.now-j.diedAt>=iC-1e-9))return j.claimed=!0,j}return null}function J(){let H=h.step(0,{started:_.started,sinceStart:_.now-_.startT,kills:_.kills,freeSlot:ye,now:_.now});for(let j of H){if(f.push(j),j.type==="padOpen"){E(j.id,"padOpen",f,!0),L()&&E("tobble","tobblePad",f,!0);continue}if(j.type!=="padSpawn")continue;let re=h.list.find(k=>k.id===j.id),Pe=m.find(k=>k.id===j.enemyId);Qu(Pe,re.pos,M,fe(re))}}let K=()=>m.reduce((H,j)=>H+(j.kind==="trainer"&&j.alive?1:0),0);function fe(H){let j=s.pad,re=H.shareKey&&Number.isFinite(j[H.shareKey])?j[H.shareKey]:j.trainerShare;return re>0&&K()<s.trainer.maxAlive&&i()<re?"trainer":"associate"}let Ue=[0,0,0],W=[0,0,0];function _e(H,j){let re=j[0]-H.from[0],Pe=j[2]-H.from[2],k=Math.hypot(re,Pe);return k>H.reach||k>1e-6&&Math.abs(jn(Math.atan2(re,Pe)-H.yaw))>H.arc*Math.PI/360+1e-9?!1:(Ue[0]=H.from[0],Ue[1]=H.from[1]+v_,Ue[2]=H.from[2],W[0]=j[0],W[1]=H.from[1]+v_,W[2]=j[2],an(e,Ue,W))}function De(H,j){let re=s.trainer;for(let Pe=0;Pe<f.length;Pe++){let k=f[Pe];if(k.type!=="trainerSwing")continue;if(!j.downed&&_e(k,H.pos)){let de=j.damage(re.damage);if(de!==null){if(f.push({type:"playerHit",id:k.id,from:k.from,amount:re.damage,result:de,melee:!0}),de==="downed")H.state!=="downed"&&H.down(),U();else if(H.knock){let Ce=H.pos[0]-k.from[0],Q=H.pos[2]-k.from[2],He=Math.hypot(Ce,Q)||1;H.knock(Ce/He,Q/He,re.knockback,re.knockTime)}}}let ie=_.tobble;if(ie&&!ie.downed&&_e(k,ie.pos)){let de=ld(ie,re.tobbleDamage,M);f.push({type:"tobbleHit",id:k.id,from:k.from,result:de})}}}let Se=[0,0,0],ge=[0,0,0];function Ie(H,j,re){let Pe=s.grenade,k=0;Se[0]=H[0],Se[1]=H[1]+.3,Se[2]=H[2];let ie=(Ce,Q)=>{let He=Math.hypot(Ce[0]-H[0],Ce[1]-H[1],Ce[2]-H[2]),Fe=hy(He,Pe);return Fe>0&&an(e,Se,Ce)?Q(Fe):null};for(let Ce of m){if(!Ce.alive||Ce.state==="executed")continue;let Q=Ce.shapes.body;ge[0]=Ce.pos[0],ge[1]=(Q.a[1]+Q.b[1])/2,ge[2]=Ce.pos[2],ie(ge,He=>X(Ce,He,"blast",f))==="kill"&&k++}ge[0]=j.pos[0],ge[1]=j.pos[1]+(b.chest[1]-j.pos[1]<1?.45:.9),ge[2]=j.pos[2],ie(ge,Ce=>{let Q=Ce*Pe.selfDamage,He=re.damage(Q);return He===null||(f.push({type:"playerHit",id:null,from:[H[0],H[1],H[2]],amount:Q,result:He}),He==="downed"&&(j.state!=="downed"&&j.down(),U())),null});let de=h.blast(H);for(let Ce of de)f.push({type:"padClosed",id:Ce}),E(Ce,"padClosed");f.push({type:"explode",pos:[H[0],H[1],H[2]],kills:k,closed:de})}function me(H,j,re){for(let Pe of c.step(H,e))Pe.type==="explode"?Ie(Pe.pos,j,re):f.push(Pe)}function ke(){let H=r();for(let j of c.live)if(!(j.fuse>H.diveWarn))for(let re of m)!re.alive||re.state==="downed"||re.state==="executed"||re.state==="dive"||j.rolled&&j.rolled.has(re.id)||Math.hypot(re.pos[0]-j.pos[0],re.pos[2]-j.pos[2])>H.diveRadius||((j.rolled||(j.rolled=new Set)).add(re.id),i()<(re.kind==="trainer"?s.trainer.diveChance:H.diveChance)&&Jy(re,j.pos,M)&&!j.barked&&(j.barked=!0,E(re.id,"dive")))}let Ne=H=>{let j=H.point,re=r();return j.kind==="tall"&&H.pop>0?[j.pos[0]+j.tangent[0]*j.end*re.popShift*H.pop,j.pos[1]+j.tangent[1]*j.end*re.popShift*H.pop]:j.pos};function Re(H){let j=s.associate.radius,re=s.associate.height,Pe=Q=>Q.kind==="trainer"?Ku(s):j,k=Q=>Q.kind==="trainer"?re*s.trainer.scaleH:re,ie=(Q,He,Fe)=>{if(Q.state==="executed")return;let Ve=_n(e,Q.pos,[He,0,Fe],Pe(Q),k(Q));Q.pos[0]=Ve.pos[0],Q.pos[2]=Ve.pos[2]},de=Q=>Q.state==="executed";for(let Q=0;Q<m.length;Q++){let He=m[Q];if(!He.alive)continue;for(let ee=Q+1;ee<m.length;ee++){let be=m[ee];if(!be.alive)continue;let pe=be.pos[0]-He.pos[0],xe=be.pos[2]-He.pos[2],Ae=Math.hypot(pe,xe),oe=Pe(He)+Pe(be);if(Ae>=oe)continue;Ae<1e-6&&(pe=1,xe=0,Ae=1);let he=(oe-Ae)/2,Oe=de(be)?2:de(He)?0:1,V=de(He)?2:de(be)?0:1;ie(He,-pe/Ae*he*Oe,-xe/Ae*he*Oe),ie(be,pe/Ae*he*V,xe/Ae*he*V)}let Fe=He.pos[0]-H.pos[0],Ve=He.pos[2]-H.pos[2],O=Math.hypot(Fe,Ve),A=Pe(He)+s.move.radius;O<A&&(O<1e-6&&(Fe=1,Ve=0,O=1),ie(He,Fe/O*(A-O),Ve/O*(A-O)))}let Ce=_.tobble;if(Ce){let Q=s.tobble.radius,He=s.tobble.height,Fe=(be,pe)=>{let xe=_n(e,Ce.pos,[be,0,pe],Q,He);Ce.pos[0]=xe.pos[0],Ce.pos[2]=xe.pos[2]};for(let be of m){if(!be.alive)continue;let pe=be.pos[0]-Ce.pos[0],xe=be.pos[2]-Ce.pos[2],Ae=Math.hypot(pe,xe),oe=Q+Pe(be);if(Ae>=oe)continue;Ae<1e-6&&(pe=1,xe=0,Ae=1);let he=oe-Ae,Oe=de(be)||be.point&&g_.has(be.state)?1:.5;Fe(-pe/Ae*he*Oe,-xe/Ae*he*Oe),ie(be,pe/Ae*he*(1-Oe),xe/Ae*he*(1-Oe))}let Ve=Ce.pos[0]-H.pos[0],O=Ce.pos[2]-H.pos[2],A=Math.hypot(Ve,O),ee=Q+s.move.radius;A<ee&&(A<1e-6&&(Ve=1,O=0,A=1),Fe(Ve/A*(ee-A),O/A*(ee-A)))}for(let Q of m){if(!Q.alive||!Q.point||!g_.has(Q.state))continue;let He=Ne(Q);if(Math.hypot(Q.pos[0]-He[0],Q.pos[2]-He[1])<=.3)continue;let Fe=Math.hypot(He[0]-H.pos[0],He[1]-H.pos[2])>=j+s.move.radius-.001;_.tobble&&Math.hypot(He[0]-_.tobble.pos[0],He[1]-_.tobble.pos[2])<j+s.tobble.radius-.001&&(Fe=!1);for(let Ve of m)Ve===Q||!Ve.alive||!Fe||Math.hypot(He[0]-Ve.pos[0],He[1]-Ve.pos[2])<2*j-.001&&(Fe=!1);if(Fe){Q.pos[0]=He[0],Q.pos[2]=He[1];continue}l.holds(Q.id)&&l.release(Q.id,_.now,s.director),Q.mustMove=!0,Q.pop=0,Q.blind=0,Q.state="seek",Q.stateT=0}}let Me=[null];function Ye(H,j){let re=r(),Pe=[0,0,0];Me[0]=_.tobble;for(let k=0;k<f.length;k++){let ie=f[k];if(ie.type!=="enemyShot")continue;if(ie.accurate&&j.downed&&ie.target!=="tobble"){f.splice(k--,1);continue}let de=Go(ie.dir,ie.spread,i,Pe);if(ie.target==="tobble"){let Ce=_.tobble,Q=Mn(ie.from,de,re.range,e,Me);if(Ce&&!Ce.downed&&(Q.kind==="head"||Q.kind==="body")){let He=ld(Ce,re.damage,M);f.push({type:"tobbleHit",id:ie.id,from:ie.from,result:He})}f.push({type:"shotFx",from:ie.from,to:Q.point,accurate:!0})}else if(ie.accurate){let Ce=wy(ie.from,de,re.range,e,H,s.combat),Q=Ce.point;if(Ce.kind==="head"||Ce.kind==="body"){let He=j.damage(re.damage);f.push({type:"playerHit",id:ie.id,from:ie.from,amount:re.damage,result:He}),He==="downed"&&(H.state!=="downed"&&H.down(),U())}f.push({type:"shotFx",from:ie.from,to:Q.slice(),accurate:!0})}else{let Ce=Mn(ie.from,de,re.range,e,[]);f.push({type:"shotFx",from:ie.from,to:Ce.point,accurate:!1})}}}return _.targets=()=>m,_.freeSlot=ye,_.step=(H,j)=>{(!(H>0)||!Number.isFinite(H))&&(H=0),H=Math.min(H,sC),f.length=0;for(let de of p)f.push(de);p.length=0;let{m:re,health:Pe}=j;if(_.now+=H,M.now=_.now,M.aim=j.aim,M.m=re,M.health=Pe,!_.started&&re.pos[2]>t.trigger.z&&G(f),M.started=_.started,ne(re,Pe),M.playerDowned=b.downed,b.downed){L()||U();for(let de of m)de.role!=="revive"&&(de.role="hold");!R&&_.started&&E(N().id,"downed")}else _.started&&!_.clear&&Z(re,H);R=b.downed,_.started&&(Y(),J()),l.expire(_.now,s.director),M.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,me(H,re,Pe),ke(),_.tobble&&(f_(_.tobble,M,H),Il(_.tobble,s.combat));let k=f.length;for(let de of m)t_(de,M,H);for(let de=k;de<f.length;de++)f[de].type==="death"&&te(m.find(Ce=>Ce.id===f[de].id));Ye(re,Pe),De(re,Pe),Re(re);for(let de of m)$o(de,s.combat,s);_.tobble&&Il(_.tobble,s.combat);let ie=!!_.tobble&&_.tobble.downed&&Pe.downed;return ie&&!v&&f.push({type:"checkpoint"}),v=ie,_.started&&!_.clear&&m.every(de=>!de.alive)&&h.allDone()&&(_.clear=!0,f.push({type:"clear"}),E(m[0].id,"clear"),_.tobble&&(M0(_.tobble,M),E("tobble","tobbleClear"))),f},_.hurt=(H,j,re="body")=>X(H,j,re,p),_.bash=H=>{if(!H.alive||H.state==="executed"||H.state==="unused")return null;let j=X(H,s.melee.bashDamage,"bash",p);return j==="hit"?(Ky(H,M),"hit"):j==="kill"?"kill":null},_.beginExecution=H=>jy(H,M),_.finishExecution=H=>{M.events=p;let j=e_(H,M,"execute");return M.events=f,j==="kill"&&te(H),j},_.releaseExecution=H=>Qy(H),_.openPad=H=>{let j=h.list.find(re=>re.id===H);return!j||j.state!=="dormant"?!1:(j.state="open",j.nextT=_.now+s.pad.interval,p.push({type:"padOpen",id:H}),E(H,"padOpen",p,!0),L()&&E("tobble","tobblePad",p,!0),!0)},_.forceClear=()=>{for(let H of m)H.alive&&X(H,1e6,"blast",p);for(let H of h.list)(H.state==="dormant"||H.state==="open")&&(H.state="closed");return!0},_.spawnRep=()=>{let H=ye();if(!H)return null;let j=h.list[0];return Qu(H,j?j.pos:[0,0,0],M)},_.spawnTrainer=H=>{if(K()>=s.trainer.maxAlive)return null;let j=ye();if(!j)return null;let re=h.list[0];return Qu(j,H||(re?re.pos:[0,0,0]),M,"trainer")},_.downRep=H=>{M.events=p;let j=m0(H,M);return M.events=f,j==="down"},_.hurtTobble=H=>{if(!_.tobble)return null;M.events=p;let j=ld(_.tobble,H,M);return M.events=f,j},_.reserved=d,_.reviveTobble=()=>{if(!_.tobble)return!1;M.events=p;let H=M0(_.tobble,M);return M.events=f,H&&Il(_.tobble,s.combat),H},_.throwGrenade=(H,j)=>c.throw(H,j),_.reset=()=>{l.reset(),c.reset(),h.reset(),y=x(),m.forEach((H,j)=>{c0(H,s.associate,s),j>=g&&h0(H)}),T(),_.tobble=M.tobble=u()?_.tobble?y0(_.tobble):v0(t.tobble,s.tobble):null,v=!1,S=0,M.playerDowned=!1,f.length=0,p.length=0,_.started=_.clear=!1,_.now=0,_.startT=0,_.kills=0,_.hideT=_.stayT=0,M.now=0,M.started=!1,M.aim=void 0,R=!1,D=!1;for(let H of m)$o(H,s.combat,s)},_}function cd(t,e,n){let i=n[0]-e[0],s=n[2]-e[2],r=Cu(t),o=Pu(t),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var __=t=>Math.max(0,Math.min(1,t));function b_({hp:t,max:e,downed:n,downT:i,hits:s=[],now:r,fb:o=q.feedback}){let a=n?1:e>0?__(1-t/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let d=o.hitFlashTime>0?__(1-(r-h.t)/o.hitFlashTime):0;if(d<=0)continue;let u=Math.cos(h.angle),f=Math.sin(h.angle);l.top=Math.max(l.top,d*Math.max(0,u)),l.right=Math.max(l.right,d*Math.max(0,f)),l.bottom=Math.max(l.bottom,d*Math.max(0,-u)),l.left=Math.max(l.left,d*Math.max(0,-f))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!n,seconds:n?Math.ceil(Math.max(0,i)):0}}}var rC=Object.freeze({Rep:z.glorpPurple,PA:z.cream,Tobble:z.tobbleMint,Trainer:z.planet}),ar=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Tobble",text:e}))),S0=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Trainer",text:e}))),T0=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),trainerCharge:S0("ONE MORE REP!","You're not quitting, you're just TIRED!","PAIN IS WEAKNESS LEAVING YOUR WALLET!","NO EXCUSES!"),trainerWindup:S0("HUP!"),trainerDeath:S0("\u2026tell my\u2026 macros\u2026"),tobbleRevive:ar("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:ar("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:ar("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:ar("Two more reps! I'm good!"),tobbleFlank:ar("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:ar("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:ar("Ooh, you closed your rings!"),tobbleHeadshot:ar("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function M_(t=()=>q.feedback){let e=1/0,n=0,i=null,s={},r=[],o=l=>{let c=T0[l],h=c[(s[l]||0)%c.length];return typeof h=="string"?"Rep":h.speaker};function a(l){let c=T0[l],h=(s[l]||0)%c.length;s[l]=h+1,i=typeof c[h]=="string"?{speaker:"Rep",text:c[h]}:c[h],n=t().barkTime,e=0}return{say(l,c=!1){return!T0[l]||!c&&e<t().barkGap?!1:c&&i&&n>0&&e<1e-9&&o(l)!==i.speaker?(r.push(l),!0):(a(l),!0)},tick(l){l>0&&(e+=l,n-=l,r.length&&e>=t().barkMinShow&&a(r.shift()))},current:()=>n>0&&i?{speaker:i.speaker,text:i.text,color:rC[i.speaker]||null}:null,reset(){e=1/0,n=0,i=null,r.length=0;for(let l of Object.keys(s))s[l]=0}}}var w_=4,oC=1.2,Fn=[0,0,0];function aC(){let t=(e,n,i,s,r)=>{let o=new vt(e,n,i).translate(0,s,0);o.deleteAttribute("uv");let a=new et(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new Et(c,3)),o};return zt([t(.3,.16,.22,.08,z.cream),t(.34,.07,.26,.195,z.playerOrange)],!1)}function lC(t,e,n){return t.accurate&&e?(e(n),n):(n[0]=t.from[0],n[1]=t.from[1],n[2]=t.from[2],n)}function S_({scene:t,effects:e,sfx:n,fight:i,views:s,cam:r=null,hooks:o={}}){let a=new Map(i.enemies.map((R,D)=>[R.id,s[D]])),l=new Map(i.enemies.map(R=>[R.id,R])),c=new Map,h=[],d=new us(aC(),Pt({vertexColors:!0,rim:0}),w_);d.name="pickups",d.frustumCulled=!1,d.count=0,t.add(d);let u=new Kt,f=0,p=M_(),g=(R,D)=>Math.sin(cd(R.yaw,R.pos,D)),m=(R,D)=>Math.min(1,6/Math.max(Math.hypot(D[0]-R.pos[0],D[2]-R.pos[2]),.001)),x=[0,0,0],y=[0,1,0],w=(R,D=1)=>(x[0]=R[0],x[1]=R[1]+D,x[2]=R[2],x);function b(R,D){let T=q.feedback,L=R.kind;if(L==="body"||L==="head")return;let E=w(R.pos),N=L==="execute"?T.killGelCount*2:L==="bleed"?T.gelCount:T.killGelCount;if(e.gel(E,y,N),L!=="bleed"){if(e.receipts(w(R.pos,1.2),T.receiptCount),S(R.pos),L==="tobble"){n.play("kill",T.killVolume*.5,g(D,R.pos));return}o.marker&&o.marker("kill"),n.play(L==="execute"?"finish":"kill",L==="execute"?T.bashVolume:T.killVolume,g(D,R.pos))}}let M=R=>{let D=i.pads.find(T=>T.id===R);return D?D.pos:[0,0,0]};function _(R){let D=null,T=1/0;for(let L of i.enemies){let E=Math.hypot(L.pos[0]-R[0],L.pos[2]-R[2]);E<T&&(T=E,D=L)}return D}function v(R,D){let T=q.feedback,L=q.associate;for(let E of R)if(E.type==="bark")p.say(E.key,!!E.force);else if(E.type==="padOpen")n.play("saunaOpen",T.saunaVolume,g(D,M(E.id)));else if(E.type==="padClosed")n.play("saunaClose",T.saunaVolume,g(D,M(E.id)));else if(E.type==="padSpawn"){let N=M(E.id);for(let U=0;U<4;U++)e.steam([N[0]+(U-1.5)*.25,.1,N[2]])}else if(E.type==="explode"){e.blast(E.pos);let N=Math.hypot(E.pos[0]-D.pos[0],E.pos[2]-D.pos[2]),U=Math.min(1,8/Math.max(N,.001));n.play("boom",T.boomVolume*Math.max(.4,U),g(D,E.pos)),r&&(r.kick(4*U,(Math.random()*2-1)*2*U),r.bump(U))}else if(E.type==="clank")n.play("clank",T.clankVolume*m(D,E.pos),g(D,E.pos));else if(E.type==="tobbleShot"){let N=i.tobble,U=o.tobbleView;U&&N&&N.pop>=.5?U.tip(Fn):(Fn[0]=E.from[0],Fn[1]=E.from[1],Fn[2]=E.from[2]);let G=E.to[0]-Fn[0],te=E.to[1]-Fn[1],X=E.to[2]-Fn[2],ne=Math.hypot(G,te,X)||1;e.flash(Fn,[G/ne,te/ne,X/ne]),e.friendlyTracer(Fn,E.to),n.play("tobbleShot",T.tobbleShotVolume*m(D,E.from),g(D,E.from))}else if(E.type==="tobbleHit"){let N=i.tobble;N&&e.gel(N.chest,[E.from[0]-N.chest[0],.3,E.from[2]-N.chest[2]],4)}else if(E.type==="revived")n.play("revive",T.reviveVolume);else if(E.type==="cloneRevive"){let N=l.get(E.id);N&&n.play("revive",T.reviveVolume*.6*m(D,N.pos),g(D,N.pos))}else if(E.type==="down")o.marker&&o.marker("kill"),e.gel(w(E.pos),y,6),n.play("hit",T.hitVolume,g(D,E.pos));else if(E.type==="death")b(E,D);else if(E.type==="checkpoint")o.restart&&o.restart();else if(E.type==="telegraph"){c.set(E.id,E.time!==void 0?E.time:L.popTime+L.telegraphTime);let N=a.get(E.id),U=l.get(E.id);N&&N.glint(!0),U&&n.play("charge",T.chargeVolume,g(D,U.pos))}else if(E.type==="trainerSwing")n.play("bash",T.bashVolume*m(D,E.from),g(D,E.from));else if(E.type==="shotFx"){let N=_(E.from),U=N&&a.get(N.id);lC(E,U?U.tip:null,Fn);let G=E.to[0]-Fn[0],te=E.to[1]-Fn[1],X=E.to[2]-Fn[2],ne=Math.hypot(G,te,X)||1;e.enemyFlash(Fn,[G/ne,te/ne,X/ne]),e.enemyTracer(Fn,E.to);let Z=Math.hypot(E.from[0]-D.pos[0],E.from[2]-D.pos[2]);n.play("blaster",T.blasterVolume*Math.min(1,8/Math.max(Z,.001)),g(D,E.from))}}function S(R){h.length>=w_&&h.shift(),h.push({pos:[R[0],R[1],R[2]]}),P()}function P(){d.count=h.length;for(let R=0;R<h.length;R++)u.position.set(h[R].pos[0],h[R].pos[1],h[R].pos[2]),u.rotation.set(0,f*oC+R,0),u.updateMatrix(),d.setMatrixAt(R,u.matrix);d.instanceMatrix.needsUpdate=!0}return{handle:v,forceBark:R=>p.say(R,!0),bark:()=>p.current(),pan:g,near:m,tick:R=>p.tick(R),update(R){if(R>0){f+=R;for(let[D,T]of c)if(T-R<=0){c.delete(D);let L=a.get(D);L&&L.glint(!1)}else c.set(D,T-R);h.length&&P()}},addPickup:S,collect(R,D){let T=0;for(let L=h.length-1;L>=0;L--)Math.hypot(R[0]-h[L].pos[0],R[2]-h[L].pos[2])<=D&&(h.splice(L,1),T++);return T&&P(),T},count:()=>h.length,pickups:()=>h.map(R=>R.pos.slice()),reset(){h.length=0,d.count=0,d.instanceMatrix.needsUpdate=!0,c.clear(),p.reset()}}}var E0=.05;function cC({locked:t,device:e,panelOpen:n}){return!!(t||e==="pad"||n)}function T_(t){return`${t.gap}|${t.endInset}|${t.minLength}`}function hC(t){if(t&&t.has("room"))return{name:"greyRoom",jumped:!1};let e=t&&t.get("arena");return e&&Un.includes(e)?{name:e,jumped:!0}:{name:Un[0],jumped:!1}}function uC(t,e,{downed:n=!1,busy:i=!1}={}){return n&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(n||i)&&(t.fire=!1),t}var dC=2e3,fC=500,pC=500,mC=new Set(["enemyShot","playerHit","telegraph","death","clear","bark","down","explode","padOpen","padClosed","padSpawn","tobbleShot","tobbleHit","revived","checkpoint"]);function gC(){try{return window.localStorage||null}catch{return null}}function E_({canvas:t,gl:e,params:n}){let i=qh(t,e),s=i.renderer,r=Yh(t),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=ev();l.panelOpen=c.isOpen;let h=new pr,d=new xn(q.camera.fov,1,.05,100),u=$h();h.add(u.mesh);let f=hC(n),p=$x({storage:f.name==="greyRoom"?null:gC()}),g=null,m="",x=null,y=null,w=[],b={pos:[0,0,0],yaw:0},M=[],_=[],v=null,S=[],P=new Map,R=null,D=null,T=null,L=null,E=null,N=null,U=[],G=()=>ov(w,{...rv(),exclude:x.coverExclude}),te=T_(q.cover),X=[],ne=0,Z=!1,Y=xv({boxes:w,spawn:[0,0,0],coverEdges:[],onAction(F){N&&N.onAction(F)},onState(F,we){X.push({state:F,from:we,t:ne,tapped:Z,auto:F==="coverSlide"&&!Z&&(we==="move"||we==="sprint")}),X.length>dC&&X.shift()},onStep(F){J.dip(q.feedback.stepDip),fe.play("step",q.feedback.stepVolume*(F.sprint?1.25:1))}}),ye=Xv(Y);h.add(ye.group);let J=Rx(),K=pu(),fe=vv({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),Ue=yv(),W=Mv(),_e=Iv(h),De=Dv(document.body),Se=Do(1),ge=by(),Ie=fy(),me=!1,ke=null,Ne=0,Re={restart:()=>{me=!0},marker:F=>{ke=F,Ne=q.feedback.killMarkerTime},tobbleView:null};function Me(){!v||E===v.tobble||(L&&(g.remove(L.group),vp(L.group)),L=v.tobble?sy(v.tobble):null,L&&g.add(L.group),E=v.tobble,Re.tobbleView=L)}function Ye(){g&&(vp(g),g=null,L=null,E=null,Re.tobbleView=null)}function H(F){Ye(),m=F,x=F==="greyRoom"?yu:Wx[F],g=new mt,g.name=`arena-${F}`,h.add(g),y=Dx(x),g.add(y.group),w=y.boxes,b=x.spawn,Y.boxes=w,Y.coverEdges=G(),M=(x.dummies||[]).map(we=>{let Be=Ev(we),ot=Nv(Be);return g.add(ot.group),{dummy:Be,view:ot,wasAlive:!0}}),_=M.map(we=>we.dummy),v=F==="greyRoom"?null:y_({level:x,boxes:w,edges:G(),rand:Do(4242)}),S=v?v.enemies.map(we=>{let Be=Jv(we);return g.add(Be.group),Be}):[],P=new Map(v?v.enemies.map((we,Be)=>[we,S[Be]]):[]),R=v?Hv(g):null,D=v?ry(g,v.pads,_e):null,T=v?S_({scene:g,effects:_e,sfx:fe,fight:v,views:S,cam:J,hooks:Re}):null,Me(),N=v?_y({mover:Y,fight:v,arsenal:W,bag:Ie,cam:J,sfx:fe,effects:_e,views:S,health:ge,playerView:ye,grenadeView:R,boxes:w,hooks:Re}):null,U=v?v.targets():_,y.setGateOpen(!1,!0),j=!1}let j=!1,re=[],Pe=[],k={pos:[0,0,0],yaw:0},ie=[],de="-",Ce="-",Q=null,He=null,Fe=0,Ve=1,O=[],A={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},ee=[0,0,0],be=0,pe=[0,0,0],xe=null,Ae=!1,oe=null,he=!1,Oe=!1,V=!1,ce={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1,melee:!1},le={reload:!1,weapon:null,fire:!1,interact:!1,melee:!1},ze={melee:!1,interact:!1},Le={melee:!1,grenade:!1,interact:!1},ve={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1,grenade:!1,interactHeld:!1},Te={weapon:null,reload:!1,fire:!1,firePressed:!1},Ke=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function Ee(){let F=i.resize();d.aspect=F.aspect,d.updateProjectionMatrix()}Ee(),window.addEventListener("resize",Ee),t.addEventListener("click",()=>r.requestLock());let qe=()=>{K.reset(),Ue.reset()};window.addEventListener("blur",qe),document.addEventListener("pointerlockchange",()=>{r.isLocked()||qe()});let Qe=()=>fe.unlock();window.addEventListener("pointerdown",Qe),window.addEventListener("keydown",Qe),window.addEventListener("keydown",F=>{F.repeat||Xf(F.target)||(F.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):F.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function Ge(){ge.reset(),W.reset(),Ie.reset(),wn(b.pos,b.yaw),Q=null,K.reset(),Ue.reset(),J.recenter(),_e.clear(),O.length=0,re.length=0,ke=null,He=null,Ne=0,Fe=0,me=!1}function st(){v&&v.reset(),Ge(),T&&T.reset();for(let F of S)F.reset();v&&(N.reset(),R.reset(),D.reset(),Me(),L&&L.reset()),p.restart(),y.setGateOpen(!1,!0),j=!1}function ft(F){H(F),Ge(),J.snap(b.pos,b.yaw,"normal",1),Rt=F==="greyRoom"?0:q.run.hoursTime}let Rt=0;function Gt(){p.markClear()&&!j&&(j=!0,y.setGateOpen(!0),fe.play("saunaOpen",q.feedback.saunaVolume))}function Ft(){Y.state!=="downed"&&Y.down(),W.cancelReload(),fe.play("downed",q.feedback.hurtVolume),T&&T.forceBark("downed")}function Vn(F){Pe.push({t:ne,type:F.type,id:F.id||null,accurate:!!F.accurate,hit:F.type==="playerHit",key:F.key||null,kind:F.kind||null}),Pe.length>pC&&Pe.shift()}function mn(F){let we=q.feedback;k.pos[0]=Y.pos[0],k.pos[1]=Y.pos[1],k.pos[2]=Y.pos[2],k.yaw=J.yaw;let Be=v.step(F,{m:Y,health:ge,aim:{lens:kt.pos,dir:kt.dir,active:!!Q&&Q!=="blind"||Y.grenadeAim}});T.handle(Be,k);for(let We of Be)if(mC.has(We.type)&&Vn(We),We.type==="playerHit"){let ct=cd(J.yaw,Y.pos,We.from);re.push({t:ne,angle:ct});let bt=Math.random()*2*Math.PI;J.kick(we.hitKick*Math.cos(bt),we.hitKick*Math.sin(bt)),fe.play("hurt",we.hurtVolume,Math.sin(ct)),N.onPlayerHit(),We.result==="downed"&&Ft()}else We.type==="clear"&&(fe.play("clear",we.killVolume),Gt());for(;re.length&&ne-re[0].t>we.hitFlashTime;)re.shift();let ot=ge.update(F,{standIn:!v.tobble});if(ot==="revived"&&Y.revive(),ot==="bleedOut"||me){st();return}let ut=ge.downed?0:T.collect(Y.pos,q.combat.pickupRadius);ut&&(W.addReserve("regret",ut*q.associate.ammoDrop),fe.play("pickup",we.pickupVolume))}function Ot(){let F=wu[p.arena];return x.boss?F:v.clear?p.gateOpen?`${F}: clear \u2014 head for the GO gate`:`${F}: set complete`:v.pads.some(we=>we.state==="open")?Al("sauna",r.device()):v.started?p.arena==="turnstiles"?"Get past the front desk":`${F}: clear the room`:"Walk in"}function wn(F,we){Y.place(F,we),J.snap(F,we,Np(Y),Ir(Y)),be=Y.slams}let kt={pos:[0,0,0],dir:[0,0,1],fov:70},Bn="normal",fi=1,pi=0,ts=0,ti=0,mi=0,Hr=0,lr=0,Gr=0,_t=window.__cr;_t.stats=()=>({fps:pi,ms:ts,calls:Hr,tris:lr,scale:i.scale(),characters:1+S.length+(L?1:0)}),_t.player=()=>{let F=Y.cover;return{pos:Y.pos.slice(),state:Y.state,speed:Y.speed(),facing:Y.facing,entries:Y.entries,cover:F?{id:F.edge.id,kind:F.edge.kind,t:F.t,length:F.edge.length,pop:F.pop,exposed:F.exposed}:null,slams:Y.slams,steps:Y.steps,blind:F?F.blind:0,firing:!!Y.firing}},_t.gun=()=>{let F=W.current(),we=W.ammo[F],Be=W.reload,ot=q.weapons[F];return{id:F,slot:W.slot,mag:we.mag,reserve:we.reserve,boost:we.boost,reload:Be?{u:Be.t/Math.max(ot.reloadTime,q.combat.minReloadTime),press:Be.press}:null,switching:W.switching>0,spread:W.spreadOf(Q||"hip"),stance:Q}},_t.dummies=()=>_.map(F=>({id:F.id,health:F.health,alive:F.alive,pos:F.pos.slice()})),_t.level=()=>x.name||m,_t.run=()=>({arena:p.arena,index:p.index,checkpoint:p.checkpoint,phase:p.phase,cleared:p.cleared,gateOpen:p.gateOpen,fade:p.fade,saved:p.saved,hours:Rt>0?gp(p.checkpoint):null}),_t.gate=()=>x.exit?{pos:x.exit.pos.slice(),yaw:x.exit.yaw,w:x.exit.w,open:j,openness:y.gate?y.gate.openness():0}:null,_t.go=F=>Un.includes(F)?(p.goTo(xp(F)),ft(F),!0):!1,_t.clearArena=()=>v?v.forceClear():!1,_t.gpu=()=>{let F=s.info;return{geometries:F.memory.geometries,textures:F.memory.textures,programs:(F.programs||[]).length,calls:Hr,tris:lr}},_t.fight=()=>v?{started:v.started,clear:v.clear,tokens:v.tokens.held(),pickups:T.count(),pickupPos:T.pickups(),enemies:v.enemies.filter(F=>F.state!=="unused").map(F=>({id:F.id,slot:v.enemies.indexOf(F),kind:F.kind||"associate",state:F.state,health:F.health,alive:F.alive,pos:F.pos.slice(),holds:v.tokens.holds(F.id),role:F.role,point:F.point?F.point.index:null,pop:F.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},_t.tobble=()=>{let F=v&&v.tobble;return F?{state:F.state,hp:F.hp,downed:F.downed,pos:F.pos.slice(),point:F.point?F.point.index:null}:null},_t.pads=()=>v?v.pads.map(F=>({id:F.id,state:F.state,spawned:F.spawned,alive:F.alive})):[],_t.grenades=()=>({count:Ie.count,live:v?v.grenades.live.map(F=>({pos:F.pos.slice(),fuse:F.fuse})):[]}),_t.aimThrow=(F,we)=>N?N.aimThrow(F,we):!1,_t.hurtTobble=F=>v?v.hurtTobble(F):null,_t.spawnTrainer=F=>{let we=v&&v.spawnTrainer(F);return we?we.id:null},_t.downRep=F=>{let we=v&&v.enemies.find(Be=>Be.id===F);return!!we&&v.downRep(we)},_t.openPad=F=>v?v.openPad(F):!1,_t.spawnRep=()=>{let F=v&&v.spawnRep();return F?F.id:null},_t.health=()=>({hp:ge.hp,max:q.health.max,downed:ge.downed,downT:ge.downT}),_t.hurt=F=>{ge.damage(F)==="downed"&&Ft()},_t.god=F=>{q.health.godMode=F?1:0},_t.fightLog=()=>Pe.map(F=>({...F})),_t.clearFightLog=()=>{Pe.length=0},_t.restart=()=>st(),_t.shots=()=>ie.map(F=>({...F})),_t.clearShots=()=>{ie.length=0},_t.setGun=(F,we)=>W.set(F,we),_t.look=(F,we)=>{J.yaw=F,J.pitch=we},_t.camera=()=>{let F=kt;return{pos:F.pos.slice(),fov:F.fov,inside:Uo(w,F.pos,.1),mode:Bn,side:fi,yaw:J.yaw,pitch:J.pitch}},_t.transitions=()=>X.map(F=>({...F})),_t.clearTransitions=()=>{X.length=0},_t.coverTarget=()=>{let F=oe||{moveX:xe?xe.moveX:0,moveY:xe?xe.moveY:0},we=Ml(Y.coverEdges,w,Y.pos,Dp(Y,{moveX:F.moveX||0,moveY:F.moveY||0,camYaw:J.yaw},[0,0]),J.yaw,q.cover,q.move.radius);return we?{id:we.edge.id,kind:we.edge.kind,dist:we.dist}:null},_t.place=F=>{let we=F==="spawn"?b:x.features[F];we&&wn(we.pos,we.yaw)},_t.at=(F,we,Be=0)=>wn([F,0,we],Be),_t.drive=F=>{if(!F){he?Oe=!0:oe=null;return}F.fire&&!(oe&&oe.fire)&&(le.fire=!0),F.melee&&!(oe&&oe.melee)&&(le.melee=!0),oe=F,Oe=!1,F.tap&&(he=!0),F.reload&&(le.reload=!0),F.interact&&(le.interact=!0),F.weapon&&(le.weapon=F.weapon)};function hd(F){if(oe){ve.moveX=oe.moveX||0,ve.moveY=oe.moveY||0,ve.sprint=!!oe.sprint,ve.aim=!!oe.aim,ve.tap=he;let we=Ue.update(!!oe.fire,le.fire,!0);le.fire=!1,ve.fire=we.fire,Te.fire=we.fire,Te.firePressed=we.firePressed,Te.reload=le.reload,Te.weapon=le.weapon,le.reload=!1,le.weapon=null,Le.melee=!!oe.melee,Le.grenade=!!oe.grenade,Le.interact=!!oe.interactHeld,he&&(he=!1,Oe&&(oe=null,Oe=!1))}else{let we=xe.held;ve.moveX=xe.moveX,ve.moveY=xe.moveY,ve.tap=K.update(we.cover,ce.cover,F,q.move.tapMax),ve.sprint=we.sprint||K.holding(),ve.aim=we.aim;let Be=Ue.update(we.fire,ce.fire,!0);ve.fire=Be.fire,Te.fire=Be.fire,Te.firePressed=Be.firePressed,Te.reload=ce.reload,Te.weapon=ce.weapon,Le.melee=we.melee,Le.grenade=we.grenade,Le.interact=we.interact}return ze.interact=ce.interact||le.interact,ze.melee=ce.melee||le.melee,ve.grenade=Le.grenade,ve.interactHeld=Le.interact,ce.cover=!1,ce.fire=!1,ce.reload=!1,ce.weapon=null,ce.interact=!1,ce.melee=!1,le.interact=!1,le.melee=!1,ve.camYaw=J.yaw,Z=ve.tap,ve}let ud=F=>F.toFixed(1);function Nl(){let F=Y.cover;if(F)return`cover: ${F.edge.kind} ${F.edge.id}  t ${F.t.toFixed(2)}/${F.edge.length.toFixed(2)}  pop ${F.pop.toFixed(2)}`;let we=_t.coverTarget();return we?`tap grabs: ${we.kind} ${we.dist.toFixed(1)} m`:"tap grabs: nothing"}function I(){let F=_t.gun(),we=F.id;return`gun: ${Iu[we].name} ${F.mag}/${q.weapons[we].infiniteReserve>0?"\u221E":F.reserve}  ${F.stance||"-"}  spread ${F.spread.toFixed(1)}`}function $(){let F=r.padStatus(),we=[v?`GYMS OF WAR \u2014 ${wu[p.arena].toUpperCase()}`:"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];if(v&&we.push("E / X: hold to renew your membership when downed, another set when clear","F / B: tap bash, hold rev Cheat Day (The Regret)   G / LB: hold to aim a kettlebell, release to throw   E / X: finish a downed Rep, hold to revive Tobble"),we.push("Sound starts after a click or key","",`${Y.state}   ${Y.speed().toFixed(2)} m/s`,Nl(),I()),v){we.push(`fight: ${v.enemies.filter(ut=>ut.alive).length}/${v.enemies.filter(ut=>ut.state!=="unused").length}  tokens ${v.tokens.held().join(",")||"-"}  hp ${ge.hp.toFixed(0)}`),we.push(`health: ${ge.hp.toFixed(0)}/${q.health.max}  ${ge.downed?`downed ${ge.downT.toFixed(1)}`:"-"}`);let Be=v.tobble,ot=v.pads[0];we.push(`tobble: ${Be?`${Be.state} hp ${Be.hp.toFixed(0)}`:"off"}`,`sauna: ${ot?`${ot.state} ${ot.spawned}/${q.pad.total}`:"-"}   kettlebells ${Ie.count}`)}else we.push(`dummies: ${_.filter(Be=>Be.alive).length}/${_.length}  last: ${de} ${Ce}`);we.push(`${Math.round(pi)} fps   ${ud(ts)} ms   scale ${i.scale()}`,`${Hr} draw calls   ${lr} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${F}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=we.join(`
`)}let ue=F=>q.feedback[F];function se(F){F.type==="shot"?tt(F):F.type==="reloadStart"?fe.play("magOut",ue("reloadVolume")):F.type==="reloadPress"?(fe.play(F.result,ue("reloadVolume")),He=F.result,Fe=0):F.type==="reloadDone"?fe.play("magIn",ue("reloadVolume")):F.type==="dry"&&fe.play("dry",ue("reloadVolume"))}function ae(F,we){Av(F.dummy,we),F.dummy.alive&&!F.wasAlive&&F.view.respawn(),F.wasAlive=F.dummy.alive}let Ze=[0,0,0];function tt(F){let we=q.weapons[F.id],Be=Y.cover?Y.cover.edge:null;Lu(Y,Q,J.yaw,q.combat,ee);let ot=Sv({lens:kt.pos,view:kt.dir,muzzle:ee,spreadDeg:F.spread,range:we.range,boxes:w,targets:U,ignoreBox:Be?Be.boxIndex:-1,rand:Se,aimed:Q==="aim"}),ut=ot.hit,We=ut.target,ct=null;We&&(ct=v?v.hurt(We,Fp(we,ut.kind,F.mult),ut.kind==="head"?"head":"body"):Rv(We,Fp(we,ut.kind,F.mult))),de=ut.kind,Ce=We?We.id:"-",ie.push({t:ne,kind:ut.kind,target:We?We.id:null,point:ut.point.slice(),stance:Q}),ie.length>fC&&ie.shift();let bt=[ot.dir[0],ot.dir[1],ot.dir[2]];if(O.push({id:F.id,from:ee.slice(),dir:bt,hit:ut,target:We,result:ct}),ct==="kill"&&!v){let gi=M.find(Zt=>Zt.dummy===We);gi.wasAlive=!1}}function $e(F){let we=q.weapons[F.id],Be=q.feedback,ot=ye.gunTip(Ze);J.kick(we.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*we.kickYaw),_e.flash(ot,F.dir),_e.tracer(ot,F.hit.point),fe.play(F.id==="regret"?"rifle":"pistol",Be.shotVolume);let ut=[-F.dir[0],-F.dir[1],-F.dir[2]];if(F.hit.kind==="world")_e.spark(F.hit.point,ut);else if(F.target){let We=v?P.get(F.target):M.find(ct=>ct.dummy===F.target).view;F.result==="kill"?(v?(We.death(),T.addPickup(F.target.pos)):We.burst(),_e.gel(F.hit.point,ut,Be.killGelCount),_e.receipts(F.target.pos.map((ct,bt)=>bt===1?ct+1.2:ct),Be.receiptCount),ke="kill",Ne=Be.killMarkerTime,fe.play("kill",Be.killVolume)):F.result==="down"?(_e.gel(F.hit.point,ut,Be.gelCount),ke="kill",Ne=Be.killMarkerTime,fe.play("hit",Be.hitVolume)):(v||We.hit(F.hit.kind),_e.gel(F.hit.point,ut),ke=F.hit.kind,Ne=Be.hitMarkerTime,fe.play(F.hit.kind==="head"?"head":"hit",Be.hitVolume))}}let Je=Xh({before(F){if(xe=r.poll(),Ae=!!oe||he||cC({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=Ae,!Ae){K.reset(),Ue.reset(),ce.cover=!1,ce.fire=!1,ce.reload=!1,ce.weapon=null,ce.interact=!1,ce.melee=!1;return}let Be=Math.min(F,E0);V=xe.held.aim||oe&&oe.aim,J.look(xe.lookDX,xe.lookDY,xe.lookX,xe.lookY,Be,V,Ve),xe.pressed.cover&&(ce.cover=!0),xe.pressed.fire&&(ce.fire=!0),xe.pressed.reload&&(ce.reload=!0),xe.pressed.interact&&(ce.interact=!0),xe.pressed.melee&&(ce.melee=!0);for(let[ot,ut]of Ke)xe.pressed[ot]&&(ce.weapon=ut)},step(F){if(!Ae)return;let we=T_(q.cover);we!==te&&(te=we,Y.coverEdges=G()),ne+=F;let Be=hd(F);uC(Be,Te,{downed:!!v&&ge.downed,busy:W.reload!==null||W.switching>0}),p.fading&&(Be.moveX=0,Be.moveY=0,Be.tap=!1,Be.sprint=!1,Be.fire=!1,Be.grenade=!1,Te.fire=!1,Te.firePressed=!1),N&&(N.step(F,{meleeHeld:Le.melee,meleePressed:ze.melee,grenadeHeld:Le.grenade,interactHeld:Le.interact,interactPressed:ze.interact,device:r.device(),camYaw:J.yaw,camPitch:J.pitch}),N.busy()&&(Te.fire=!1,Te.firePressed=!1,Be.fire=!1)),Y.update(Be,F),Q=wv(Y);let ot=W.update(Te,Q,F);for(let ut of ot)se(ut);v&&(T.tick(F),mn(F));for(let ut of M)ae(ut,F);Cv(Y.pos,x.ammoCrates,q.combat.crateRadius)&&(W.refill(),Ie.refill()),me&&st(),v&&j&&!p.fading&&qx(x.exit,Y.pos)&&p.touchGate()&&fe.play("clear",q.feedback.killVolume)},render(F,we){let Be=Ae?Math.min(we,E0):0;for(let Ut of p.step(Math.min(we,E0)))Ut.type==="swap"&&ft(Ut.to);Rt>0&&Ae&&(Rt=Math.max(0,Rt-Be)),Tt(p.fade),A.shot=O.length>0,A.dir=kt.dir,A.stance=Q,A.weapon=W.current(),A.kettlebell=!!N&&N.armed(),ye.update(F,Be,A);for(let Ut of M)Ut.view.update(Be);for(let Ut of S)Ut.update(F,Be);T&&(T.update(Be),R.update(v.grenades.live,F,Be),D.update(Be),L&&(L.group.visible=!!v.tobble,v.tobble&&L.update(F,Be)));let ot=Y.pos,ut=Y.prevPos;for(let Ut=0;Ut<3;Ut++)pe[Ut]=ut[Ut]+(ot[Ut]-ut[Ut])*F;Y.slams>be&&(be=Y.slams,J.bump(),fe.play("thud",q.cover.thudVolume));let We=Np(Y);if(We==="aim"&&Bn!=="aim"){let Ut=Y.cover?Y.cover.edge:null;J.hold(Mn(kt.pos,kt.dir,q.camera.holdRange,w,U,{ignoreBox:Ut?Ut.boxIndex:-1}).point)}Bn=We,fi=Ir(Y);let ct=J.update(Be,{target:pe,mode:Bn,side:fi},w);kt.pos[0]=ct.pos[0],kt.pos[1]=ct.pos[1],kt.pos[2]=ct.pos[2],kt.fov=ct.fov,kt.dir[0]=ct.dir[0],kt.dir[1]=ct.dir[1],kt.dir[2]=ct.dir[2],d.fov!==ct.fov&&(d.fov=ct.fov,d.updateProjectionMatrix()),ye.fadeHeadFor(ct.pos,q.camera.headHideDist,q.camera.headHideMargin),d.position.set(ct.pos[0],ct.pos[1],ct.pos[2]),d.lookAt(ct.pos[0]+ct.dir[0],ct.pos[1]+ct.dir[1],ct.pos[2]+ct.dir[2]);for(let Ut of O)$e(Ut);O.length=0,_e.update(Be),Ne-=Be,Ne<=0&&(ke=null),He&&(Fe+=Be,Fe>=q.feedback.reloadResultTime&&(He=null));let bt=Y.cover?Y.cover.edge:null,gi=Mn(kt.pos,kt.dir,100,w,U,{ignoreBox:bt?bt.boxIndex:-1});Ve=r.device()==="pad"&&gi.target?q.look.pad.assist:1;let Zt=!!Y.cover&&Y.cover.pop<.5,Vr=Q||(Y.cover&&(Y.cover.pop>0||Zt)?"aim":"hip"),xi=v?b_({hp:ge.hp,max:q.health.max,downed:ge.downed,downT:ge.downT,hits:re,now:ne}):null;De.render(Lv({arsenal:W,stance:Q,firing:ve.fire,covered:Zt,device:r.device(),spreadDeg:W.spreadOf(Vr),fov:d.fov,viewportH:t.clientHeight||window.innerHeight,marker:ke,reloadFlash:He,face:xi,bark:T?T.bark():null,objective:v?Ot():"",banner:v?ge.downed?{title:`You've hit a plateau ${xi.downed.seconds}`,hint:Al(v.tobble&&!v.tobble.downed?"giveUpTobble":"giveUp",r.device()),hold:N.giveUpFrac()}:v.clear?{title:"SET COMPLETE",hint:`${p.gateOpen?"Head for the GO gate!  ":"Rest 60 seconds!  "}${r.device()==="pad"?"X":"E"} for another set`}:null:null,grenades:v?Ie.count:null,action:N?N.prompt():null,hours:Rt>0?gp(p.checkpoint):""})),u.update(performance.now()/1e3),y.update(Be),s.render(h,d),Hr=s.info.render.calls,lr=s.info.render.triangles,ti++,mi+=we,mi>=1&&(pi=ti/mi,ts=mi/ti*1e3,ti=0,mi=0),Gr+=we,Gr>=.1&&(Gr=0,$()),i.frameDone(we*1e3)}});n&&n.has("tune")&&c.toggle();let it=document.createElement("div");it.id="cr-fade",document.body.appendChild(it);let pt=-1;function Tt(F){let we=Math.round(F*100);we!==pt&&(pt=we,it.style.opacity=(we/100).toFixed(2))}f.name!=="greyRoom"&&f.jumped?(p.goTo(xp(f.name)),ft(f.name)):ft(f.name==="greyRoom"?"greyRoom":Un[0]),f.name!=="greyRoom"&&!f.jumped&&p.saved>0&&nt();function nt(){let F=document.createElement("div");F.id="cr-continue",Rt=0;let we=(Be,ot,ut)=>{let We=document.createElement("button");We.textContent=Be,We.className=ut,We.addEventListener("click",ct=>{ct.stopPropagation(),F.remove(),ot()}),F.appendChild(We)};we(`Continue \u2014 ${wu[Un[p.saved]]}`,()=>{p.goTo(p.saved),ft(p.arena)},"cr-continue-yes"),we("New run",()=>{p.newRun(),Rt=q.run.hoursTime},"cr-continue-no"),document.body.appendChild(F)}xe=r.poll(),J.update(0,{target:b.pos,mode:"normal",side:1},w),$(),Je.start()}var xC={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function A0(t,e){window.__cr.error={kind:t,detail:e||""},document.documentElement.dataset.crError=t;let n=document.getElementById("cr-error");n&&(n.textContent="",n.appendChild(document.createTextNode(xC[t])),t==="boot"&&e&&(n.appendChild(document.createElement("br")),n.appendChild(document.createTextNode(e))),n.hidden=!1)}window.addEventListener("error",t=>{window.__cr.error||A0("boot",t.message)});function vC(){let t=document.getElementById("cr-canvas"),e=t.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){A0("webgl");return}let n=new URLSearchParams(location.search);n.has("look")?wx({canvas:t,gl:e}):E_({canvas:t,gl:e,params:n}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{vC()}catch(t){A0("boot",t&&t.message)}})();

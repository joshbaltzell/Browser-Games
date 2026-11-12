/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var Nm=0,df=1,km=2;var cl=1,Om=2,Do=3,zs=0,hn=1,yn=2,Rr=0,No=1,ff=2,pf=3,mf=4,Um=5;var Cr=100,Fm=101,Bm=102,zm=103,Hm=104,Gm=200,Vm=201,Wm=202,Xm=203,gf=204,vf=205,Ym=206,qm=207,$m=208,Zm=209,Km=210,Jm=211,jm=212,Qm=213,eg=214,Dc=0,Nc=1,kc=2,xo=3,Oc=4,Uc=5,Fc=6,Bc=7,xf=0,tg=1,ng=2,Fi=0,yf=1,_f=2,bf=3,Mf=4,wf=5,Sf=6,Tf=7;var Ef=300,Pr=301,ko=302,vh=303,xh=304,zc=1e3,Di=1001,Hc=1002,vn=1003,ig=1004;var hl=1005;var xn=1006,yh=1007;var ps=1008;var Jn=1009,Af=1010,Rf=1011,Oo=1012,_h=1013,bi=1014,ai=1015,Mi=1016,bh=1017,Mh=1018,Ir=1020,Cf=35902,Pf=35899,If=1021,Lf=1022,jn=1023,ds=1026,ms=1027,wh=1028,Sh=1029,Hs=1030,Th=1031;var Eh=1033,ul=33776,dl=33777,fl=33778,pl=33779,Ah=35840,Rh=35841,Ch=35842,Ph=35843,Ih=36196,Lh=37492,Dh=37496,Nh=37488,kh=37489,ml=37490,Oh=37491,Uh=37808,Fh=37809,Bh=37810,zh=37811,Hh=37812,Gh=37813,Vh=37814,Wh=37815,Xh=37816,Yh=37817,qh=37818,$h=37819,Zh=37820,Kh=37821,Jh=36492,jh=36494,Qh=36495,eu=36283,tu=36284,gl=36285,nu=36286;var Aa=2300,Gc=2301,Ic=2302,tf=2303,nf=2400,sf=2401,rf=2402;var sg=3200;var Df=0,rg=1,gs="",cn="srgb",Ra="srgb-linear",Ca="linear",Lt="srgb";var Lc=7680;var og=519,ag=512,lg=513,cg=514,Nf=515,hg=516,ug=517,kf=518,Of=519,Uf=35044,Uo=35048;var Ff="300 es",oi=2e3,Pa=2001;function c_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function h_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dg(){let t=Ia("canvas");return t.style.display="block",t}var J0={},yo=null;function La(...t){let e="THREE."+t.shift();yo?yo("log",e,...t):console.log(e,...t)}function fg(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function lt(...t){t=fg(t);let e="THREE."+t.shift();if(yo)yo("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ut(...t){t=fg(t);let e="THREE."+t.shift();if(yo)yo("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ma(...t){let e=t.join(" ");e in J0||(J0[e]=!0,lt(...t))}function pg(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var mg={[Dc]:Dc,[kc]:Fc,[Oc]:Oc,[xo]:Uc,[Nc]:Nc,[Fc]:kc,[Bc]:Bc,[Uc]:xo},Ni=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],j0=1234567,wa=Math.PI/180,_o=180/Math.PI;function vs(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[t&255]+Cn[t>>8&255]+Cn[t>>16&255]+Cn[t>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function St(t,e,n){return Math.max(e,Math.min(n,t))}function Bf(t,e){return(t%e+e)%e}function u_(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function d_(t,e,n){return t!==e?(n-t)/(e-t):0}function Sa(t,e,n){return(1-n)*t+n*e}function f_(t,e,n,i){return Sa(t,e,1-Math.exp(-n*i))}function p_(t,e=1){return e-Math.abs(Bf(t,e*2)-e)}function m_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function g_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function v_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function x_(t,e){return t+Math.random()*(e-t)}function y_(t){return t*(.5-Math.random())}function __(t){t!==void 0&&(j0=t);let e=j0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b_(t){return t*wa}function M_(t){return t*_o}function w_(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function S_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function zf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function T_(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*p,l*f,a*c);break;case"YXY":t.set(l*f,a*h,l*p,a*c);break;case"ZYZ":t.set(l*p,l*f,a*h,a*c);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function iu(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hf(t,e){if(e.constructor===Float32Array)return t;let n=iu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Gf(t,e){if(e.constructor===Float32Array)return t;let n=iu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var su={DEG2RAD:wa,RAD2DEG:_o,generateUUID:vs,clamp:St,euclideanModulo:Bf,mapLinear:u_,inverseLerp:d_,lerp:Sa,damp:f_,pingpong:p_,smoothstep:m_,smootherstep:g_,randInt:v_,randFloat:x_,randFloatSpread:y_,seededRandom:__,degToRad:b_,radToDeg:M_,isPowerOfTwo:w_,ceilPowerOfTwo:S_,floorPowerOfTwo:zf,setQuaternionFromProperEuler:T_,normalize:Gf,denormalize:Hf},$f=class $f{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$f.prototype.isVector2=!0;var Be=$f,Un=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(d!==g||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*g;m<0&&(u=-u,f=-f,p=-p,g=-g,m=-m);let v=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);v=Math.sin(v*y)/M,a=Math.sin(a*y)/M,l=l*v+u*a,c=c*v+f*a,h=h*v+p*a,d=d*v+g*a}else{l=l*v+u*a,c=c*v+f*a,h=h*v+p*a,d=d*v+g*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[n]=a*p+h*d+l*f-c*u,e[n+1]=l*p+h*u+c*d-a*f,e[n+2]=c*p+h*f+a*u-l*d,e[n+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zf=class Zf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Q0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Q0.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Id.copy(this).projectOnVector(e),this.sub(Id)}reflect(e){return this.sub(Id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zf.prototype.isVector3=!0;var z=Zf,Id=new z,Q0=new Un,Kf=class Kf{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],g=s[0],m=s[3],v=s[6],y=s[1],M=s[4],b=s[7],w=s[2],S=s[5],x=s[8];return r[0]=o*g+a*y+l*w,r[3]=o*m+a*M+l*S,r[6]=o*v+a*b+l*x,r[1]=c*g+h*y+d*w,r[4]=c*m+h*M+d*S,r[7]=c*v+h*b+d*x,r[2]=u*g+f*y+p*w,r[5]=u*m+f*M+p*S,r[8]=u*v+f*b+p*x,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=n*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=d*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=u*g,e[4]=(h*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=f*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ld.makeScale(e,n)),this}rotate(e){return Ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ld.makeRotation(-e)),this}translate(e,n){return Ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ld.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kf.prototype.isMatrix3=!0;var pt=Kf,Ld=new pt,em=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){let t={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=vo(s.r),s.g=vo(s.g),s.b=vo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gs?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ra]:{primaries:e,whitePoint:i,transfer:Ca,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),t}var Rt=E_();function us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var jr,Vc=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=Ia("canvas")),jr.width=e.width,jr.height=e.height;let s=jr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Ia("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=us(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(us(n[i]/255)*255):n[i]=us(n[i]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},A_=0,bo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dd(s[o].image)):r.push(Dd(s[o]))}else r=Dd(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function Dd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vc.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var R_=0,Nd=new z,Fn=class t extends Ni{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Di,s=Di,r=xn,o=ps,a=jn,l=Jn,c=t.DEFAULT_ANISOTROPY,h=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=vs(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Ef;Fn.DEFAULT_ANISOTROPY=1;var Jf=class Jf{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],g=l[2],m=l[6],v=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,b=(f+1)/2,w=(v+1)/2,S=(h+u)/4,x=(d+g)/4,_=(p+m)/4;return M>b&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=S/i,r=x/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=x/r,s=_/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+v-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jf.prototype.isVector4=!0;var qt=Jf,Wc=class extends Ni{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Fn({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new bo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Wc{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Da=class extends Fn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xc=class extends Fn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gh=class gh{constructor(e,n,i,s,r,o,a,l,c,h,d,u,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,d,u,f,p,g,m)}set(e,n,i,s,r,o,a,l,c,h,d,u,f,p,g,m){let v=this.elements;return v[0]=e,v[4]=n,v[8]=i,v[12]=s,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=d,v[14]=u,v[3]=f,v[7]=p,v[11]=g,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gh().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Qr.setFromMatrixColumn(e,0).length(),r=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,g=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+p*c,n[5]=u-g*c,n[9]=-a*l,n[2]=g-u*c,n[6]=p+f*c,n[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,g=c*d;n[0]=u+g*a,n[4]=p*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-p,n[6]=g+u*a,n[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,g=c*d;n[0]=u-g*a,n[4]=-o*d,n[8]=p+f*a,n[1]=f+p*a,n[5]=o*h,n[9]=g-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,g=a*d;n[0]=l*h,n[4]=p*c-f,n[8]=u*c+g,n[1]=l*d,n[5]=g*c+u,n[9]=f*c-p,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,g=a*c;n[0]=l*h,n[4]=g-u*d,n[8]=p*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*d+p,n[10]=u-g*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,g=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+g,n[5]=o*h,n[9]=f*d-p,n[2]=p*d-f,n[6]=a*h,n[10]=g*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C_,e,P_)}lookAt(e,n,i){let s=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ps.crossVectors(i,qn),Ps.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ps.crossVectors(i,qn)),Ps.normalize(),tc.crossVectors(qn,Ps),s[0]=Ps.x,s[4]=tc.x,s[8]=qn.x,s[1]=Ps.y,s[5]=tc.y,s[9]=qn.y,s[2]=Ps.z,s[6]=tc.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],g=i[6],m=i[10],v=i[14],y=i[3],M=i[7],b=i[11],w=i[15],S=s[0],x=s[4],_=s[8],L=s[12],D=s[1],I=s[5],E=s[9],N=s[13],R=s[2],C=s[6],U=s[10],H=s[14],ee=s[3],q=s[7],te=s[11],Y=s[15];return r[0]=o*S+a*D+l*R+c*ee,r[4]=o*x+a*I+l*C+c*q,r[8]=o*_+a*E+l*U+c*te,r[12]=o*L+a*N+l*H+c*Y,r[1]=h*S+d*D+u*R+f*ee,r[5]=h*x+d*I+u*C+f*q,r[9]=h*_+d*E+u*U+f*te,r[13]=h*L+d*N+u*H+f*Y,r[2]=p*S+g*D+m*R+v*ee,r[6]=p*x+g*I+m*C+v*q,r[10]=p*_+g*E+m*U+v*te,r[14]=p*L+g*N+m*H+v*Y,r[3]=y*S+M*D+b*R+w*ee,r[7]=y*x+M*I+b*C+w*q,r[11]=y*_+M*E+b*U+w*te,r[15]=y*L+M*N+b*H+w*Y,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],g=e[7],m=e[11],v=e[15],y=l*f-c*u,M=a*f-c*d,b=a*u-l*d,w=o*f-c*h,S=o*u-l*h,x=o*d-a*h;return n*(g*y-m*M+v*b)-i*(p*y-m*w+v*S)+s*(p*M-g*w+v*x)-r*(p*b-g*S+m*x)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return n*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],g=e[13],m=e[14],v=e[15],y=n*a-i*o,M=n*l-s*o,b=n*c-r*o,w=i*l-s*a,S=i*c-r*a,x=s*c-r*l,_=h*g-d*p,L=h*m-u*p,D=h*v-f*p,I=d*m-u*g,E=d*v-f*g,N=u*v-f*m,R=y*N-M*E+b*I+w*D-S*L+x*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=(a*N-l*E+c*I)*C,e[1]=(s*E-i*N-r*I)*C,e[2]=(g*x-m*S+v*w)*C,e[3]=(u*S-d*x-f*w)*C,e[4]=(l*D-o*N-c*L)*C,e[5]=(n*N-s*D+r*L)*C,e[6]=(m*b-p*x-v*M)*C,e[7]=(h*x-u*b+f*M)*C,e[8]=(o*E-a*D+c*_)*C,e[9]=(i*D-n*E-r*_)*C,e[10]=(p*S-g*b+v*y)*C,e[11]=(d*b-h*S-f*y)*C,e[12]=(a*L-o*I-l*_)*C,e[13]=(n*I-i*L+s*_)*C,e[14]=(g*M-p*w-m*y)*C,e[15]=(h*w-d*M+u*y)*C,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,g=o*h,m=o*d,v=a*d,y=l*c,M=l*h,b=l*d,w=i.x,S=i.y,x=i.z;return s[0]=(1-(g+v))*w,s[1]=(f+b)*w,s[2]=(p-M)*w,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(u+v))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(p+M)*x,s[9]=(m-y)*x,s[10]=(1-(u+g))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Qr.set(s[0],s[1],s[2]).length(),a=Qr.set(s[4],s[5],s[6]).length(),l=Qr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vi.copy(this);let c=1/o,h=1/a,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,n.setFromRotationMatrix(vi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=oi,l=!1){let c=this.elements,h=2*r/(n-e),d=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=oi,l=!1){let c=this.elements,h=2/(n-e),d=2/(i-s),u=-(n+e)/(n-e),f=-(i+s)/(i-s),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===oi)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Pa)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};gh.prototype.isMatrix4=!0;var Mt=gh,Qr=new z,vi=new Mt,C_=new z(0,0,0),P_=new z(1,1,1),Ps=new z,tc=new z,qn=new z,nm=new Mt,im=new Un,Wn=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},I_=0,sm=new z,eo=new Un,rs=new Mt,nc=new z,ua=new z,L_=new z,D_=new Un,rm=new z(1,0,0),om=new z(0,1,0),am=new z(0,0,1),lm={type:"added"},N_={type:"removed"},to={type:"childadded",child:null},kd={type:"childremoved",child:null},en=class t extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new z,n=new Wn,i=new Un,s=new z(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new pt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nc.copy(e):nc.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(ua,nc,this.up):rs.lookAt(nc,ua,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),eo.setFromRotationMatrix(rs),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),to.child=e,this.dispatchEvent(to),to.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(N_),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,L_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new z(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},k_={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=n.getJointPose(g,i),v=this._getHandJoint(c,g);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Od(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ke=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Rt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Rt.workingColorSpace){if(e=Bf(e,1),n=St(n,0,1),i=St(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Od(o,r,e+1/3),this.g=Od(o,r,e),this.b=Od(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,n=cn){function i(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=cn){let i=gg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Rt.workingToColorSpace(Pn.copy(this),e),Math.round(St(Pn.r*255,0,255))*65536+Math.round(St(Pn.g*255,0,255))*256+Math.round(St(Pn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Pn.copy(this),n);let i=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=cn){Rt.workingToColorSpace(Pn.copy(this),e);let n=Pn.r,i=Pn.g,s=Pn.b;return e!==cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+n,Is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Is),e.getHSL(ic);let i=Sa(Is.h,ic.h,n),s=Sa(Is.s,ic.s,n),r=Sa(Is.l,ic.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Ke;Ke.NAMES=gg;var br=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},xi=new z,os=new z,Ud=new z,as=new z,no=new z,io=new z,cm=new z,Fd=new z,Bd=new z,zd=new z,Hd=new qt,Gd=new qt,Vd=new qt,hs=class t{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),xi.subVectors(e,n),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){xi.subVectors(s,n),os.subVectors(i,n),Ud.subVectors(e,n);let o=xi.dot(xi),a=xi.dot(os),l=xi.dot(Ud),c=os.dot(os),h=os.dot(Ud),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,as.x),l.addScaledVector(o,as.y),l.addScaledVector(a,as.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(e,n),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hd,r.x),o.addScaledVector(Gd,r.y),o.addScaledVector(Vd,r.z),o}static isFrontFacing(e,n,i,s){return xi.subVectors(i,n),os.subVectors(e,n),xi.cross(os).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),os.subVectors(this.a,this.b),xi.cross(os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;no.subVectors(s,i),io.subVectors(r,i),Fd.subVectors(e,i);let l=no.dot(Fd),c=io.dot(Fd);if(l<=0&&c<=0)return n.copy(i);Bd.subVectors(e,s);let h=no.dot(Bd),d=io.dot(Bd);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),n.copy(i).addScaledVector(no,o);zd.subVectors(e,r);let f=no.dot(zd),p=io.dot(zd);if(p>=0&&f<=p)return n.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(io,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return cm.subVectors(r,s),a=(d-h)/(d-h+(f-p)),n.copy(s).addScaledVector(cm,a);let v=1/(m+g+u);return o=g*v,a=u*v,n.copy(i).addScaledVector(no,o).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ki=class{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sc.copy(i.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),rc.subVectors(this.max,da),so.subVectors(e.a,da),ro.subVectors(e.b,da),oo.subVectors(e.c,da),Ls.subVectors(ro,so),Ds.subVectors(oo,ro),gr.subVectors(so,oo);let n=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-gr.z,gr.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,gr.z,0,-gr.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-gr.y,gr.x,0];return!Wd(n,so,ro,oo,rc)||(n=[1,0,0,0,1,0,0,0,1],!Wd(n,so,ro,oo,rc))?!1:(oc.crossVectors(Ls,Ds),n=[oc.x,oc.y,oc.z],Wd(n,so,ro,oo,rc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ls=[new z,new z,new z,new z,new z,new z,new z,new z],yi=new z,sc=new ki,so=new z,ro=new z,oo=new z,Ls=new z,Ds=new z,gr=new z,da=new z,rc=new z,oc=new z,vr=new z;function Wd(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){vr.fromArray(t,r);let a=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),h=i.dot(vr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new z,ac=new Be,O_=0,bt=class extends Ni{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Uf,this.updateRanges=[],this.gpuType=ai,this.version=0,this._normalizationScale=e!==void 0?iu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ac.fromBufferAttribute(this,n),ac.applyMatrix3(e),this.setXY(n,ac.x,ac.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix3(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(e),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.transformDirection(e),this.setXYZ(n,on.x,on.y,on.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Hf(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Gf(e,this.array)}};var ka=class extends bt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Oa=class extends bt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var vt=class extends bt{constructor(e,n,i){super(new Float32Array(e),n,i)}},U_=new ki,fa=new z,Xd=new z,Xn=class{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):U_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let n=fa.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(fa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Xd)),this.expandByPoint(fa.copy(e.center).sub(Xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},F_=0,ri=new Mt,Yd=new en,ao=new z,$n=new ki,pa=new ki,gn=new z,It=class t extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c_(e)?Oa:ka)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,n,i){return ri.makeTranslation(e,n,i),this.applyMatrix4(ri),this}scale(e,n,i){return ri.makeScale(e,n,i),this.applyMatrix4(ri),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors($n.min,pa.min),$n.expandByPoint(gn),gn.addVectors($n.max,pa.max),$n.expandByPoint(gn)):($n.expandByPoint(pa.min),$n.expandByPoint(pa.max))}$n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gn));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(ao.fromBufferAttribute(e,c),gn.add(ao)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new bt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new z,l[L]=new z;let h=new z,d=new z,u=new z,f=new Be,p=new Be,g=new Be,m=new z,v=new z;function y(L,D,I){c[L]=c[D]=c[I]=1,h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,D),u.fromBufferAttribute(i,I),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,D),g.fromBufferAttribute(r,I),d.sub(h),u.sub(h),p.sub(f),g.sub(f);let E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),v.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(E),a[L].add(m),a[D].add(m),a[I].add(m),l[L].add(v),l[D].add(v),l[I].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,D=M.length;L<D;++L){let I=M[L],E=I.start,N=I.count;for(let R=E,C=E+N;R<C;R+=3)y(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let b=new z,w=new z,S=new z,x=new z;function _(L){S.fromBufferAttribute(s,L),x.copy(S);let D=a[L];b.copy(D),b.sub(S.multiplyScalar(S.dot(D))).normalize(),w.crossVectors(x,D);let E=w.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,E)}for(let L=0,D=i.count;L<D;++L)c[L]&&_(L);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new bt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(n,p),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)gn.fromBufferAttribute(e,n),gn.normalize(),e.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let v=0;v<h;v++)u[p++]=c[f++]}return new bt(u,h,d)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ua=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Uf,this.updateRanges=[],this.version=0,this.uuid=vs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=hm(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[n]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=hm(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function hm(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=vs()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}var On=new z,wo=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?iu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)On.fromBufferAttribute(this,n),On.applyMatrix4(e),this.setXYZ(n,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)On.fromBufferAttribute(this,n),On.applyNormalMatrix(e),this.setXYZ(n,On.x,On.y,On.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)On.fromBufferAttribute(this,n),On.transformDirection(e),this.setXYZ(n,On.x,On.y,On.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){La("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new bt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){La("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Hf(e,this.data.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Gf(e,this.data.array)}},qd=new z,B_=new z,z_=new pt,_i=class{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=qd.subVectors(i,n).cross(B_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(qd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||z_.getNormalMatrix(e),s=this.coplanarPoint(qd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},H_=0,Oi=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=No,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=vf,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lc,this.stencilZFail=Lc,this.stencilZPass=Lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new _i().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},So=class extends Oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lo,ma=new z,co=new z,ho=new z,uo=new Be,ga=new Be,vg=new Mt,lc=new z,va=new z,cc=new z,um=new Be,$d=new Be,dm=new Be,Fa=class extends en{constructor(e=new So){if(super(),this.isSprite=!0,this.type="Sprite",lo===void 0){lo=new It;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ua(n,5);lo.setIndex([0,1,2,0,2,3]),lo.setAttribute("position",new wo(i,3,0,!1)),lo.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=lo,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),co.setFromMatrixScale(this.matrixWorld),vg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ho.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&co.multiplyScalar(-ho.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;hc(lc.set(-.5,-.5,0),ho,o,co,s,r),hc(va.set(.5,-.5,0),ho,o,co,s,r),hc(cc.set(.5,.5,0),ho,o,co,s,r),um.set(0,0),$d.set(1,0),dm.set(1,1);let a=e.ray.intersectTriangle(lc,va,cc,!1,ma);if(a===null&&(hc(va.set(-.5,.5,0),ho,o,co,s,r),$d.set(0,1),a=e.ray.intersectTriangle(lc,cc,va,!1,ma),a===null))return;let l=e.ray.origin.distanceTo(ma);l<e.near||l>e.far||n.push({distance:l,point:ma.clone(),uv:hs.getInterpolation(ma,lc,va,cc,um,$d,dm,new Be),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let n=super.toJSON(e);return n.object.center=this.center.toArray(),n}};function hc(t,e,n,i,s,r){uo.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(ga.x=r*uo.x-s*uo.y,ga.y=s*uo.x+r*uo.y):ga.copy(uo),t.copy(e),t.x+=ga.x,t.y+=ga.y,t.applyMatrix4(vg)}var cs=new z,Zd=new z,uc=new z,dc=new z,To=class{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=cs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,n),cs.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Zd.copy(e).add(n).multiplyScalar(.5),uc.copy(n).sub(e).normalize(),dc.copy(this.origin).sub(Zd);let r=e.distanceTo(n)*.5,o=-this.direction.dot(uc),a=dc.dot(this.direction),l=-dc.dot(uc),c=dc.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zd).addScaledVector(uc,u),f}intersectSphere(e,n){if(e.radius<0)return null;cs.subVectors(e.center,this.origin);let i=cs.dot(this.direction),s=cs.dot(cs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,n,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=n.x-o.x,g=n.y-o.y,m=n.z-o.z,v=i.x-o.x,y=i.y-o.y,M=i.z-o.z,b=Math.abs(l),w=Math.abs(c),S=Math.abs(h),x,_,L,D,I,E,N,R,C,U,H,ee;if(b>=w&&b>=S?(L=l,E=d,C=p,ee=v,l>=0?(x=c,_=h,D=u,I=f,N=g,R=m,U=y,H=M):(x=h,_=c,D=f,I=u,N=m,R=g,U=M,H=y)):w>=S?(L=c,E=u,C=g,ee=y,c>=0?(x=h,_=l,D=f,I=d,N=m,R=p,U=M,H=v):(x=l,_=h,D=d,I=f,N=p,R=m,U=v,H=M)):(L=h,E=f,C=m,ee=M,h>=0?(x=l,_=c,D=d,I=u,N=p,R=g,U=v,H=y):(x=c,_=l,D=u,I=d,N=g,R=p,U=y,H=v)),L===0)return null;let q=x/L,te=_/L,Y=1/L,K=D-q*E,Se=I-te*E,Z=N-q*C,ye=R-te*C,Ae=U-q*ee,He=H-te*ee,se=Ae*ye-He*Z,Ne=K*He-Se*Ae,fe=Z*Se-ye*K;if(s){if(se<0||Ne<0||fe<0)return null}else if((se<0||Ne<0||fe<0)&&(se>0||Ne>0||fe>0))return null;let ge=se+Ne+fe;if(ge===0)return null;let Ce=Y*(se*E+Ne*C+fe*ee);return(ge>0?Ce<0:Ce>0)?null:this.at(Ce/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fm=new Mt,xr=new To,fc=new Xn,pm=new z,pc=new z,mc=new z,gc=new z,Kd=new z,vc=new z,mm=new z,xc=new z,ot=class extends en{constructor(e=new It,n=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){vc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Kd.fromBufferAttribute(d,e),o?vc.addScaledVector(Kd,h):vc.addScaledVector(Kd.sub(n),h))}n.add(vc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(r),xr.copy(e.ray).recast(e.near),!(fc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(fc,pm)===null||xr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(fm.copy(r).invert(),xr.copy(e.ray).applyMatrix4(fm),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let m=u[p],v=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,w=M;b<w;b+=3){let S=a.getX(b),x=a.getX(b+1),_=a.getX(b+2);s=yc(this,v,e,i,c,h,d,S,x,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,v=g;m<v;m+=3){let y=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);s=yc(this,o,e,i,c,h,d,y,M,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let m=u[p],v=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,w=M;b<w;b+=3){let S=b,x=b+1,_=b+2;s=yc(this,v,e,i,c,h,d,S,x,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,v=g;m<v;m+=3){let y=m,M=m+1,b=m+2;s=yc(this,o,e,i,c,h,d,y,M,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function G_(t,e,n,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===zs,a),l===null)return null;xc.copy(a),xc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(xc);return c<n.near||c>n.far?null:{distance:c,point:xc.clone(),object:t}}function yc(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,pc),t.getVertexPosition(l,mc),t.getVertexPosition(c,gc);let h=G_(t,e,n,i,pc,mc,gc,mm);if(h){let d=new z;hs.getBarycoord(mm,pc,mc,gc,d),s&&(h.uv=hs.getInterpolatedAttribute(s,a,l,c,d,new Be)),r&&(h.uv1=hs.getInterpolatedAttribute(r,a,l,c,d,new Be)),o&&(h.normal=hs.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};hs.getNormal(pc,mc,gc,u.normal),h.face=u,h.barycoord=d}return h}var Mr=class extends Fn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=vn,h=vn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eo=class extends bt{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fo=new Mt,gm=new Mt,_c=[],vm=new ki,V_=new Mt,xa=new ot,ya=new Xn,Ui=class extends ot{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Eo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,V_)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,fo),vm.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(vm)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,fo),ya.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(ya)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(i),e.ray.intersectsSphere(ya)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fo),gm.multiplyMatrices(i,fo),xa.matrixWorld=gm,xa.raycast(e,_c);for(let o=0,a=_c.length;o<a;o++){let l=_c[o];l.instanceId=r,l.object=this,n.push(l)}_c.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(s*this.count),s,this.count,wh,ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yr=new Xn,W_=new Be(.5,.5),bc=new z,wr=class{constructor(e=new _i,n=new _i,i=new _i,s=new _i,r=new _i,o=new _i){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],g=r[9],m=r[10],v=r[11],y=r[12],M=r[13],b=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,v-p,w-y).normalize(),s[1].setComponents(c+o,f+h,v+p,w+y).normalize(),s[2].setComponents(c+a,f+d,v+g,w+M).normalize(),s[3].setComponents(c-a,f-d,v-g,w-M).normalize(),i)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,f-u,v-m,w-b).normalize();else if(s[4].setComponents(c-l,f-u,v-m,w-b).normalize(),n===oi)s[5].setComponents(c+l,f+u,v+m,w+b).normalize();else if(n===Pa)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);let n=W_.distanceTo(e.center);return yr.radius=.7071067811865476+n,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(bc.x=s.normal.x>0?e.max.x:e.min.x,bc.y=s.normal.y>0?e.max.y:e.min.y,bc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xm=new Mt,Yc=class t{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let r=n[s];xm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new wr),i[s].setFromProjectionMatrix(xm,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)n[s]===void 0&&(n[s]=new wr),n[s].copy(i[s]);return this._count=e._count,this}clone(){return new t().copy(this)}};var Ba=class extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qc=new z,$c=new z,ym=new Mt,_a=new To,Mc=new Xn,Jd=new z,_m=new z,za=class extends en{constructor(e=new It,n=new Ba){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)qc.fromBufferAttribute(n,s-1),$c.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=qc.distanceTo($c);e.setAttribute("lineDistance",new vt(i,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(s),Mc.radius+=r,e.ray.intersectsSphere(Mc)===!1)return;ym.copy(s).invert(),_a.copy(e.ray).applyMatrix4(ym);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let v=h.getX(g),y=h.getX(g+1),M=wc(this,e,_a,l,v,y,g);M&&n.push(M)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(f),v=wc(this,e,_a,l,g,m,p-1);v&&n.push(v)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let v=wc(this,e,_a,l,g,g+1,g);v&&n.push(v)}if(this.isLineLoop){let g=wc(this,e,_a,l,p-1,f,p-1);g&&n.push(g)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wc(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(qc.fromBufferAttribute(a,s),$c.fromBufferAttribute(a,r),n.distanceSqToSegment(qc,$c,Jd,_m)>i)return;Jd.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Jd);if(!(c<e.near||c>e.far))return{distance:c,point:_m.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var Ao=class extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bm=new Mt,of=new To,Sc=new Xn,Tc=new z,Ha=class extends en{constructor(e=new It,n=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(s),Sc.radius+=r,e.ray.intersectsSphere(Sc)===!1)return;bm.copy(s).invert(),of.copy(e.ray).applyMatrix4(bm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,g=f;p<g;p++){let m=c.getX(p);Tc.fromBufferAttribute(d,m),Mm(Tc,m,l,s,e,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,g=f;p<g;p++)Tc.fromBufferAttribute(d,p),Mm(Tc,p,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mm(t,e,n,i,s,r,o){let a=of.distanceSqToPoint(t);if(a<n){let l=new z;of.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ga=class extends Fn{constructor(e=[],n=Pr,i,s,r,o,a,l,c,h){super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Va=class extends Fn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fs=class extends Fn{constructor(e,n,i=bi,s,r,o,a=vn,l=vn,c,h=ds,d=1){if(h!==ds&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},Wa=class extends fs{constructor(e,n=bi,i=Pr,s,r,o=vn,a=vn,l,c=ds){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xa=class extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mt=class t extends It{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,n,e,o,r,0),p("z","y","x",1,-1,i,n,-e,o,r,1),p("x","z","y",1,1,e,i,n,s,o,2),p("x","z","y",1,-1,e,i,-n,s,o,3),p("x","y","z",1,-1,e,n,i,s,r,4),p("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function p(g,m,v,y,M,b,w,S,x,_,L){let D=b/x,I=w/_,E=b/2,N=w/2,R=S/2,C=x+1,U=_+1,H=0,ee=0,q=new z;for(let te=0;te<U;te++){let Y=te*I-N;for(let K=0;K<C;K++){let Se=K*D-E;q[g]=Se*y,q[m]=Y*M,q[v]=R,c.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[v]=S>0?1:-1,h.push(q.x,q.y,q.z),d.push(K/x),d.push(1-te/_),H+=1}}for(let te=0;te<_;te++)for(let Y=0;Y<x;Y++){let K=u+Y+C*te,Se=u+Y+C*(te+1),Z=u+(Y+1)+C*(te+1),ye=u+(Y+1)+C*te;l.push(K,Se,ye),l.push(Se,Z,ye),ee+=6}a.addGroup(f,ee,L),f+=ee,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ya=class t extends It{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],l=[],c=new z,h=new Be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){let f=i+d/n*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wt=class t extends It{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,g=[],m=i/2,v=0;y(),o===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function y(){let b=new z,w=new z,S=0,x=(n-e)/i;for(let _=0;_<=r;_++){let L=[],D=_/r,I=D*(n-e)+e;for(let E=0;E<=s;E++){let N=E/s,R=N*l+a,C=Math.sin(R),U=Math.cos(R);w.x=I*C,w.y=-D*i+m,w.z=I*U,d.push(w.x,w.y,w.z),b.set(C,x,U).normalize(),u.push(b.x,b.y,b.z),f.push(N,1-D),L.push(p++)}g.push(L)}for(let _=0;_<s;_++)for(let L=0;L<r;L++){let D=g[L][_],I=g[L+1][_],E=g[L+1][_+1],N=g[L][_+1];(e>0||L!==0)&&(h.push(D,I,N),S+=3),(n>0||L!==r-1)&&(h.push(I,E,N),S+=3)}c.addGroup(v,S,0),v+=S}function M(b){let w=p,S=new Be,x=new z,_=0,L=b===!0?e:n,D=b===!0?1:-1;for(let E=1;E<=s;E++)d.push(0,m*D,0),u.push(0,D,0),f.push(.5,.5),p++;let I=p;for(let E=0;E<=s;E++){let R=E/s*l+a,C=Math.cos(R),U=Math.sin(R);x.x=L*U,x.y=m*D,x.z=L*C,d.push(x.x,x.y,x.z),u.push(0,D,0),S.x=C*.5+.5,S.y=U*.5*D+.5,f.push(S.x,S.y),p++}for(let E=0;E<s;E++){let N=w+E,R=I+E;b===!0?h.push(R,R+1,N):h.push(R+1,R,N),_+=3}c.addGroup(v,_,b===!0?1:2),v+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qa=class t extends Wt{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$a=class t extends It{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new z,b=new z,w=new z;for(let S=0;S<n.length;S+=3)f(n[S+0],M),f(n[S+1],b),f(n[S+2],w),l(M,b,w,y)}function l(y,M,b,w){let S=w+1,x=[];for(let _=0;_<=S;_++){x[_]=[];let L=y.clone().lerp(b,_/S),D=M.clone().lerp(b,_/S),I=S-_;for(let E=0;E<=I;E++)E===0&&_===S?x[_][E]=L:x[_][E]=L.clone().lerp(D,E/I)}for(let _=0;_<S;_++)for(let L=0;L<2*(S-_)-1;L++){let D=Math.floor(L/2);L%2===0?(u(x[_][D+1]),u(x[_+1][D]),u(x[_][D])):(u(x[_][D+1]),u(x[_+1][D+1]),u(x[_+1][D]))}}function c(y){let M=new z;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(y),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){let y=new z;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let b=m(y)/2/Math.PI+.5,w=v(y)/Math.PI+.5;o.push(b,1-w)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],b=o[y+2],w=o[y+4],S=Math.max(M,b,w),x=Math.min(M,b,w);S>.9&&x<.1&&(M<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){let b=y*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function p(){let y=new z,M=new z,b=new z,w=new z,S=new Be,x=new Be,_=new Be;for(let L=0,D=0;L<r.length;L+=9,D+=6){y.set(r[L+0],r[L+1],r[L+2]),M.set(r[L+3],r[L+4],r[L+5]),b.set(r[L+6],r[L+7],r[L+8]),S.set(o[D+0],o[D+1]),x.set(o[D+2],o[D+3]),_.set(o[D+4],o[D+5]),w.copy(y).add(M).add(b).divideScalar(3);let I=m(w);g(S,D+0,y,I),g(x,D+2,M,I),g(_,D+4,b,I)}}function g(y,M,b,w){w<0&&y.x===1&&(o[M]=y.x-1),b.x===0&&b.z===0&&(o[M]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function v(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new Be:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){let i=new z,s=[],r=[],o=[],a=new z,l=new Mt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(St(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(St(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ro=class extends Bn{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Be){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zc=class extends Ro{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vf(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return t+e*r+n*o+i*a}}}var wm=new z,Sm=new z,jd=new Vf,Qd=new Vf,ef=new Vf,Kc=class extends Bn{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new z){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Sm.subVectors(s[0],s[1]).add(s[0]),c=Sm);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),jd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,g,m),Qd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,g,m),ef.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(jd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Qd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ef.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(jd.calc(l),Qd.calc(l),ef.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tm(t,e,n,i,s){let r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function X_(t,e){let n=1-t;return n*n*e}function Y_(t,e){return 2*(1-t)*t*e}function q_(t,e){return t*t*e}function Ta(t,e,n,i){return X_(t,e)+Y_(t,n)+q_(t,i)}function $_(t,e){let n=1-t;return n*n*n*e}function Z_(t,e){let n=1-t;return 3*n*n*t*e}function K_(t,e){return 3*(1-t)*t*t*e}function J_(t,e){return t*t*t*e}function Ea(t,e,n,i,s){return $_(t,e)+Z_(t,n)+K_(t,i)+J_(t,s)}var Za=class extends Bn{constructor(e=new Be,n=new Be,i=new Be,s=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new Be){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends Bn{constructor(e=new z,n=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new z){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y),Ea(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends Bn{constructor(e=new Be,n=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Be){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Be){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jc=class extends Bn{constructor(e=new z,n=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new z){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Bn{constructor(e=new Be,n=new Be,i=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Be){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Ta(e,s.x,r.x,o.x),Ta(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Bn{constructor(e=new z,n=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new z){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Ta(e,s.x,r.x,o.x),Ta(e,s.y,r.y,o.y),Ta(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Be){let i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Tm(a,l.x,c.x,h.x,d.x),Tm(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new Be().fromArray(s))}return this}},Qc=Object.freeze({__proto__:null,ArcCurve:Zc,CatmullRomCurve3:Kc,CubicBezierCurve:Za,CubicBezierCurve3:Jc,EllipseCurve:Ro,LineCurve:Ka,LineCurve3:jc,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:ja,SplineCurve:Qa}),eh=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(new Qc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Sr=class extends eh{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new Ka(this.currentPoint.clone(),new Be(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){let r=new Ja(this.currentPoint.clone(),new Be(e,n),new Be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){let a=new Za(this.currentPoint.clone(),new Be(e,n),new Be(i,s),new Be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new Qa(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){let c=new Ro(e,n,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Co=class extends Sr{constructor(e){super(e),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(new Sr().fromJSON(s))}return this}};function j_(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=xg(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=ib(t,e,r,n)),t.length>80*n){a=t[0],l=t[1];let h=a,d=l;for(let u=n;u<s;u+=n){let f=t[u],p=t[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return el(r,o,n,a,l,c,0),o}function xg(t,e,n,i,s){let r;if(s===pb(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=Em(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=Em(o/i|0,t[o],t[o+1],r);return r&&Po(r,r.next)&&(nl(r),r=r.next),r}function Tr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Po(n,n.next)||Yt(n.prev,n,n.next)===0)){if(nl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function el(t,e,n,i,s,r,o){if(!t)return;!o&&r&&lb(t,i,s,r);let a=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?eb(t,i,s,r):Q_(t)){e.push(l.i,t.i,c.i),nl(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=tb(Tr(t),e),el(t,e,n,i,s,r,2)):o===2&&nb(t,e,n,i,s,r):el(Tr(t),e,n,i,s,r,1);break}}}function Q_(t){let e=t.prev,n=t,i=t.next;if(Yt(e,n,i)>=0)return!1;let s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&ba(s,a,r,l,o,c,p.x,p.y)&&Yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function eb(t,e,n,i){let s=t.prev,r=t,o=t.next;if(Yt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),g=Math.max(a,l,c),m=Math.max(h,d,u),v=af(f,p,e,n,i),y=af(g,m,e,n,i),M=t.prevZ,b=t.nextZ;for(;M&&M.z>=v&&b&&b.z<=y;){if(M.x>=f&&M.x<=g&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ba(a,h,l,d,c,u,M.x,M.y)&&Yt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ba(a,h,l,d,c,u,b.x,b.y)&&Yt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=v;){if(M.x>=f&&M.x<=g&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ba(a,h,l,d,c,u,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ba(a,h,l,d,c,u,b.x,b.y)&&Yt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function tb(t,e){let n=t;do{let i=n.prev,s=n.next.next;!Po(i,s)&&_g(i,n,n.next,s)&&tl(i,s)&&tl(s,i)&&(e.push(i.i,n.i,s.i),nl(n),nl(n.next),n=t=s),n=n.next}while(n!==t);return Tr(n)}function nb(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ub(o,a)){let l=bg(o,a);o=Tr(o,o.next),l=Tr(l,l.next),el(o,e,n,i,s,r,0),el(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function ib(t,e,n,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=xg(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(hb(c))}s.sort(sb);for(let r=0;r<s.length;r++)n=rb(s[r],n);return n}function sb(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function rb(t,e){let n=ob(t,e);if(!n)return e;let i=bg(n,t);return Tr(i,i.next),Tr(n,n.next)}function ob(t,e){let n=e,i=t.x,s=t.y,r=-1/0,o;if(Po(t,n))return n;do{if(Po(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r&&(r=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&yg(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);tl(n,t)&&(d<h||d===h&&(n.x>o.x||n.x===o.x&&ab(o,n)))&&(o=n,h=d)}n=n.next}while(n!==a);return o}function ab(t,e){return Yt(t.prev,t,e.prev)<0&&Yt(e.next,t,t.next)<0}function lb(t,e,n,i){let s=t;do s.z===0&&(s.z=af(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,cb(s)}function cb(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function af(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function hb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function yg(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function ba(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&yg(t,e,n,i,s,r,o,a)}function ub(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!db(t,e)&&(tl(t,e)&&tl(e,t)&&fb(t,e)&&(Yt(t.prev,t,e.prev)||Yt(t,e.prev,e))||Po(t,e)&&Yt(t.prev,t,t.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Po(t,e){return t.x===e.x&&t.y===e.y}function _g(t,e,n,i){let s=Ac(Yt(t,e,n)),r=Ac(Yt(t,e,i)),o=Ac(Yt(n,i,t)),a=Ac(Yt(n,i,e));return!!(s!==r&&o!==a||s===0&&Ec(t,n,e)||r===0&&Ec(t,i,e)||o===0&&Ec(n,t,i)||a===0&&Ec(n,e,i))}function Ec(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ac(t){return t>0?1:t<0?-1:0}function db(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&_g(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function tl(t,e){return Yt(t.prev,t,t.next)<0?Yt(t,e,t.next)>=0&&Yt(t,t.prev,e)>=0:Yt(t,e,t.prev)<0||Yt(t,t.next,e)<0}function fb(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function bg(t,e){let n=lf(t.i,t.x,t.y),i=lf(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Em(t,e,n,i){let s=lf(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function lf(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pb(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}var cf=class{static triangulate(e,n,i=2){return j_(e,n,i)}},_r=class t{static area(e){let n=e.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],s=[],r=[];Am(e),Rm(i,e);let o=e.length;n.forEach(Am);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,Rm(i,n[l]);let a=cf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Am(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Rm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var il=class t extends It{constructor(e=new Co([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,p=n.bevelSize!==void 0?n.bevelSize:f-.1,g=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,v=n.extrudePath,y=n.UVGenerator!==void 0?n.UVGenerator:mb,M,b=!1,w,S,x,_;if(v){M=v.getSpacedPoints(h),b=!0,u=!1;let ie=v.isCatmullRomCurve3?v.closed:!1;w=v.computeFrenetFrames(h,ie),S=new z,x=new z,_=new z}u||(m=0,f=0,p=0,g=0);let L=a.extractPoints(c),D=L.shape,I=L.holes;if(!_r.isClockWise(D)){D=D.reverse();for(let ie=0,Te=I.length;ie<Te;ie++){let Ie=I[ie];_r.isClockWise(Ie)&&(I[ie]=Ie.reverse())}}function N(ie){let Ie=10000000000000001e-36,_e=ie[0];for(let oe=1;oe<=ie.length;oe++){let Oe=oe%ie.length,ze=ie[Oe],$e=ze.x-_e.x,et=ze.y-_e.y,nt=$e*$e+et*et,W=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(_e.x),Math.abs(_e.y)),Le=Ie*W*W;if(nt<=Le){ie.splice(Oe,1),oe--;continue}_e=ze}}N(D),I.forEach(N);let R=I.length,C=D;for(let ie=0;ie<R;ie++){let Te=I[ie];D=D.concat(Te)}function U(ie,Te,Ie){return Te||ut("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(Te,Ie)}let H=D.length;function ee(ie,Te,Ie){let _e,oe,Oe,ze=ie.x-Te.x,$e=ie.y-Te.y,et=Ie.x-ie.x,nt=Ie.y-ie.y,W=ze*ze+$e*$e,Le=ze*nt-$e*et;if(Math.abs(Le)>Number.EPSILON){let Ue=Math.sqrt(W),Ze=Math.sqrt(et*et+nt*nt),O=Te.x-$e/Ue,ne=Te.y+ze/Ue,j=Ie.x-nt/Ze,ve=Ie.y+et/Ze,P=((j-O)*nt-(ve-ne)*et)/(ze*nt-$e*et);_e=O+ze*P-ie.x,oe=ne+$e*P-ie.y;let T=_e*_e+oe*oe;if(T<=2)return new Be(_e,oe);Oe=Math.sqrt(T/2)}else{let Ue=!1;ze>Number.EPSILON?et>Number.EPSILON&&(Ue=!0):ze<-Number.EPSILON?et<-Number.EPSILON&&(Ue=!0):Math.sign($e)===Math.sign(nt)&&(Ue=!0),Ue?(_e=-$e,oe=ze,Oe=Math.sqrt(W)):(_e=ze,oe=$e,Oe=Math.sqrt(W/2))}return new Be(_e/Oe,oe/Oe)}let q=[];for(let ie=0,Te=C.length,Ie=Te-1,_e=ie+1;ie<Te;ie++,Ie++,_e++)Ie===Te&&(Ie=0),_e===Te&&(_e=0),q[ie]=ee(C[ie],C[Ie],C[_e]);let te=[],Y,K=q.concat();for(let ie=0,Te=R;ie<Te;ie++){let Ie=I[ie];Y=[];for(let _e=0,oe=Ie.length,Oe=oe-1,ze=_e+1;_e<oe;_e++,Oe++,ze++)Oe===oe&&(Oe=0),ze===oe&&(ze=0),Y[_e]=ee(Ie[_e],Ie[Oe],Ie[ze]);te.push(Y),K=K.concat(Y)}let Se;if(m===0)Se=_r.triangulateShape(C,I);else{let ie=[],Te=[];for(let Ie=0;Ie<m;Ie++){let _e=Ie/m,oe=f*Math.cos(_e*Math.PI/2),Oe=p*Math.sin(_e*Math.PI/2)+g;for(let ze=0,$e=C.length;ze<$e;ze++){let et=U(C[ze],q[ze],Oe);Ne(et.x,et.y,-oe),_e===0&&ie.push(et)}for(let ze=0,$e=R;ze<$e;ze++){let et=I[ze];Y=te[ze];let nt=[];for(let W=0,Le=et.length;W<Le;W++){let Ue=U(et[W],Y[W],Oe);Ne(Ue.x,Ue.y,-oe),_e===0&&nt.push(Ue)}_e===0&&Te.push(nt)}}Se=_r.triangulateShape(ie,Te)}let Z=Se.length,ye=p+g;for(let ie=0;ie<H;ie++){let Te=u?U(D[ie],K[ie],ye):D[ie];b?(x.copy(w.normals[0]).multiplyScalar(Te.x),S.copy(w.binormals[0]).multiplyScalar(Te.y),_.copy(M[0]).add(x).add(S),Ne(_.x,_.y,_.z)):Ne(Te.x,Te.y,0)}for(let ie=1;ie<=h;ie++)for(let Te=0;Te<H;Te++){let Ie=u?U(D[Te],K[Te],ye):D[Te];b?(x.copy(w.normals[ie]).multiplyScalar(Ie.x),S.copy(w.binormals[ie]).multiplyScalar(Ie.y),_.copy(M[ie]).add(x).add(S),Ne(_.x,_.y,_.z)):Ne(Ie.x,Ie.y,d/h*ie)}for(let ie=m-1;ie>=0;ie--){let Te=ie/m,Ie=f*Math.cos(Te*Math.PI/2),_e=p*Math.sin(Te*Math.PI/2)+g;for(let oe=0,Oe=C.length;oe<Oe;oe++){let ze=U(C[oe],q[oe],_e);Ne(ze.x,ze.y,d+Ie)}for(let oe=0,Oe=I.length;oe<Oe;oe++){let ze=I[oe];Y=te[oe];for(let $e=0,et=ze.length;$e<et;$e++){let nt=U(ze[$e],Y[$e],_e);b?Ne(nt.x,nt.y+M[h-1].y,M[h-1].x+Ie):Ne(nt.x,nt.y,d+Ie)}}}Ae(),He();function Ae(){let ie=s.length/3;if(u){let Te=0,Ie=H*Te;for(let _e=0;_e<Z;_e++){let oe=Se[_e];fe(oe[2]+Ie,oe[1]+Ie,oe[0]+Ie)}Te=h+m*2,Ie=H*Te;for(let _e=0;_e<Z;_e++){let oe=Se[_e];fe(oe[0]+Ie,oe[1]+Ie,oe[2]+Ie)}}else{for(let Te=0;Te<Z;Te++){let Ie=Se[Te];fe(Ie[2],Ie[1],Ie[0])}for(let Te=0;Te<Z;Te++){let Ie=Se[Te];fe(Ie[0]+H*h,Ie[1]+H*h,Ie[2]+H*h)}}i.addGroup(ie,s.length/3-ie,0)}function He(){let ie=s.length/3,Te=0;se(C,Te),Te+=C.length;for(let Ie=0,_e=I.length;Ie<_e;Ie++){let oe=I[Ie];se(oe,Te),Te+=oe.length}i.addGroup(ie,s.length/3-ie,1)}function se(ie,Te){let Ie=ie.length;for(;--Ie>=0;){let _e=Ie,oe=Ie-1;oe<0&&(oe=ie.length-1);for(let Oe=0,ze=h+m*2;Oe<ze;Oe++){let $e=H*Oe,et=H*(Oe+1),nt=Te+_e+$e,W=Te+oe+$e,Le=Te+oe+et,Ue=Te+_e+et;ge(nt,W,Le,Ue)}}}function Ne(ie,Te,Ie){l.push(ie),l.push(Te),l.push(Ie)}function fe(ie,Te,Ie){Ce(ie),Ce(Te),Ce(Ie);let _e=s.length/3,oe=y.generateTopUV(i,s,_e-3,_e-2,_e-1);re(oe[0]),re(oe[1]),re(oe[2])}function ge(ie,Te,Ie,_e){Ce(ie),Ce(Te),Ce(_e),Ce(Te),Ce(Ie),Ce(_e);let oe=s.length/3,Oe=y.generateSideWallUV(i,s,oe-6,oe-3,oe-2,oe-1);re(Oe[0]),re(Oe[1]),re(Oe[3]),re(Oe[1]),re(Oe[2]),re(Oe[3])}function Ce(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function re(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return gb(n,i,e)}static fromJSON(e,n){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=n[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qc[s.type]().fromJSON(s)),new t(i,e.options)}},mb={generateTopUV:function(t,e,n,i,s){let r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Be(r,o),new Be(a,l),new Be(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],g=e[r*3],m=e[r*3+1],v=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Be(o,1-l),new Be(c,1-d),new Be(u,1-p),new Be(g,1-v)]:[new Be(a,1-l),new Be(h,1-d),new Be(f,1-p),new Be(m,1-v)]}};function gb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var Er=class t extends $a{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},sl=class t extends It{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=St(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/n,d=new z,u=new Be,f=new z,p=new z,g=new z,m=0,v=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,v=e[y+1].y-e[y].y,f.x=v*1,f.y=-m,f.z=v*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=e[y+1].x-e[y].x,v=e[y+1].y-e[y].y,f.x=v*1,f.y=-m,f.z=v*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let y=0;y<=n;y++){let M=i+y*h*s,b=Math.sin(M),w=Math.cos(M);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*b,d.y=e[S].y,d.z=e[S].x*w,o.push(d.x,d.y,d.z),u.x=y/n,u.y=S/(e.length-1),a.push(u.x,u.y);let x=l[3*S+0]*b,_=l[3*S+1],L=l[3*S+0]*w;c.push(x,_,L)}}for(let y=0;y<n;y++)for(let M=0;M<e.length-1;M++){let b=M+y*e.length,w=b,S=b+e.length,x=b+e.length+1,_=b+1;r.push(w,S,_),r.push(x,_,S)}this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(a,2)),this.setAttribute("normal",new vt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}},Io=class t extends $a{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},ks=class t extends It{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=n/l,f=[],p=[],g=[],m=[];for(let v=0;v<h;v++){let y=v*u-o;for(let M=0;M<c;M++){let b=M*d-r;p.push(b,-y,0),g.push(0,0,1),m.push(M/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){let M=y+c*v,b=y+c*(v+1),w=y+1+c*(v+1),S=y+1+c*v;f.push(M,b,S),f.push(b,w,S)}this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Os=class t extends It{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(n-e)/s,f=new z,p=new Be;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){let v=r+m/i*o;f.x=d*Math.cos(v),f.y=d*Math.sin(v),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/n+1)/2,p.y=(f.y/n+1)/2,h.push(p.x,p.y)}d+=u}for(let g=0;g<s;g++){let m=g*(i+1);for(let v=0;v<i;v++){let y=v+m,M=y,b=y+i+1,w=y+i+2,S=y+1;a.push(M,b,S),a.push(b,w,S)}}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var $t=class t extends It{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new z,u=new z,f=[],p=[],g=[],m=[];for(let v=0;v<=i;v++){let y=[],M=v/i,b=o+M*a,w=e*Math.cos(b),S=Math.sqrt(e*e-w*w),x=0;v===0&&o===0?x=.5/n:v===i&&l===Math.PI&&(x=-.5/n);for(let _=0;_<=n;_++){let L=_/n,D=s+L*r;d.x=-S*Math.cos(D),d.y=w,d.z=S*Math.sin(D),p.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(L+x,1-M),y.push(c++)}h.push(y)}for(let v=0;v<i;v++)for(let y=0;y<n;y++){let M=h[v][y+1],b=h[v][y],w=h[v+1][y],S=h[v+1][y+1];(v!==0||o>0)&&f.push(M,b,S),(v!==i-1||l<Math.PI)&&f.push(b,w,S)}this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ar=class t extends It{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new z,f=new z,p=new z;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let v=0;v<=s;v++){let y=v/s*r;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(v/s),d.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let v=(s+1)*g+m-1,y=(s+1)*(g-1)+m-1,M=(s+1)*(g-1)+m,b=(s+1)*g+m;l.push(v,y,b),l.push(y,M,b)}this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var rl=class t extends It{constructor(e=new ja(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,l=new z,c=new Be,h=new z,d=[],u=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function g(){for(let M=0;M<n;M++)m(M);m(r===!1?n:0),y(),v()}function m(M){h=e.getPointAt(M/n,h);let b=o.normals[M],w=o.binormals[M];for(let S=0;S<=s;S++){let x=S/s*Math.PI*2,_=Math.sin(x),L=-Math.cos(x);l.x=L*b.x+_*w.x,l.y=L*b.y+_*w.y,l.z=L*b.z+_*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function v(){for(let M=1;M<=n;M++)for(let b=1;b<=s;b++){let w=(s+1)*(M-1)+(b-1),S=(s+1)*M+(b-1),x=(s+1)*M+b,_=(s+1)*(M-1)+b;p.push(w,S,_),p.push(S,x,_)}}function y(){for(let M=0;M<=n;M++)for(let b=0;b<=s;b++)c.x=M/n,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new Qc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Lr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Cm(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(Cm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Ln(t){let e={};for(let n=0;n<t.length;n++){let i=Lr(t[n]);for(let s in i)e[s]=i[s]}return e}function Cm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function vb(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wf(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var Mg={clone:Lr,merge:Ln},xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=vb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},th=class extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var nh=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ih=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var ol=class extends Ba{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function po(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Rc(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Us=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break e}o=n.length;break t}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sh=class extends Us{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nf,endingEnd:nf}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sf:r=e,a=2*n-i;break;case rf:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sf:o=e,l=2*i-n;break;case rf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-n)/(s-n),g=p*p,m=g*p,v=-u*m+2*u*g-u*p,y=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*g+.5*p,b=f*m-f*g;for(let w=0;w!==a;++w)r[w]=v*o[h+w]+y*o[c+w]+M*o[l+w]+b*o[d+w];return r}},rh=class extends Us{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},oh=class extends Us{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ah=class extends Us{interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-n)/(s-n),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],v=f*u+p*2,y=d[v],M=d[v+1],b=e*u+p*2,w=h[b],S=h[b+1],x=bb(i,n,y,w,s);r[p]=wg(x,g,M,S,m)}return r}};function wg(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function _b(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function bb(t,e,n,i,s){let r=(t-e)/(s-e);for(let o=0;o<8;o++){let a=wg(r,e,n,i,s)-t;if(Math.abs(a)<1e-10)break;let l=_b(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Kn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=po(n,this.TimeBufferType),this.values=po(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:po(e.times,Array),values:po(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Rc(e.settings)&&(i.settings={inTangents:po(e.settings.inTangents,Array),outTangents:po(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new ah(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Aa:n=this.InterpolantFactoryMethodDiscrete;break;case Gc:n=this.InterpolantFactoryMethodLinear;break;case Ic:n=this.InterpolantFactoryMethodSmooth;break;case tf:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return lt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Gc;case this.InterpolantFactoryMethodSmooth:return Ic;case this.InterpolantFactoryMethodBezier:return tf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e;Rc(this.settings)&&(Pm(this.settings.inTangents,e),Pm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;Rc(this.settings)&&(Im(this.settings.inTangents,e),Im(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(ut("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ut("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ut("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ut("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&h_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ut("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ic,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let g=n[d+p];if(g!==n[u+p]||g!==n[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,Rc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pm(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function Im(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Gc;var Fs=class extends Kn{constructor(e,n,i){super(e,n,i)}};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Aa;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var lh=class extends Kn{constructor(e,n,i,s){super(e,n,i,s)}};lh.prototype.ValueTypeName="color";var ch=class extends Kn{constructor(e,n,i,s){super(e,n,i,s)}};ch.prototype.ValueTypeName="number";var hh=class extends Us{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let h=c+a;c!==h;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},al=class extends Kn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}};al.prototype.ValueTypeName="quaternion";al.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends Kn{constructor(e,n,i){super(e,n,i)}};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Aa;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends Kn{constructor(e,n,i,s){super(e,n,i,s)}};uh.prototype.ValueTypeName="vector";var dh=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sg=new dh,fh=class{constructor(e){this.manager=e!==void 0?e:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cc=new z,Pc=new Un,Li=new z,ll=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cc,Pc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Pc,Li.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Cc,Pc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Pc,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new z,Lm=new Be,Dm=new Be,Sn=class extends ll{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,n){return this.getViewBounds(e,Lm,Dm),n.subVectors(Dm,Lm)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var ph=class extends ll{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var mo=-90,go=1,Lo=class extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Sn(mo,go,e,n);s.layers=this.layers,this.add(s);let r=new Sn(mo,go,e,n);r.layers=this.layers,this.add(r);let o=new Sn(mo,go,e,n);o.layers=this.layers,this.add(o);let a=new Sn(mo,go,e,n);a.layers=this.layers,this.add(a);let l=new Sn(mo,go,e,n);l.layers=this.layers,this.add(l);let c=new Sn(mo,go,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},mh=class extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Xf="\\[\\]\\.:\\/",Mb=new RegExp("["+Xf+"]","g"),Yf="[^"+Xf+"]",wb="[^"+Xf.replace("\\.","")+"]",Sb=/((?:WC+[\/:])*)/.source.replace("WC",Yf),Tb=/(WCOD+)?/.source.replace("WCOD",wb),Eb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yf),Ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yf),Rb=new RegExp("^"+Sb+Tb+Eb+Ab+"$"),Cb=["material","materials","bones","map"],hf=class{constructor(e,n,i){let s=i||Vt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Vt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mb,"")}static parseTrackName(e){let n=Rb.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Cb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;ut("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=hf;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _3=new Float32Array(1);var jf=class jf{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};jf.prototype.isMatrix2=!0;var uf=jf;function qf(t,e,n,i){let s=Pb(i);switch(n){case If:return t*e;case wh:return t*e/s.components*s.byteLength;case Sh:return t*e/s.components*s.byteLength;case Hs:return t*e*2/s.components*s.byteLength;case Th:return t*e*2/s.components*s.byteLength;case Lf:return t*e*3/s.components*s.byteLength;case jn:return t*e*4/s.components*s.byteLength;case Eh:return t*e*4/s.components*s.byteLength;case ul:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Ph:return Math.max(t,16)*Math.max(e,8)/4;case Ah:case Ch:return Math.max(t,8)*Math.max(e,8)/2;case Ih:case Lh:case Nh:case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dh:case ml:case Oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jh:case jh:case Qh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case eu:case tu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gl:case nu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Pb(t){switch(t){case Jn:case Af:return{byteLength:1,components:1};case Oo:case Rf:case Mi:return{byteLength:2,components:1};case bh:case Mh:return{byteLength:2,components:4};case bi:case _h:case ai:return{byteLength:4,components:1};case Cf:case Pf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Yg(){let t=null,e=!1,n=null,i=null;function s(r,o){i=t.requestAnimationFrame(s),n(r,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function kb(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let g=d[f];t.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
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
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
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
#endif`,Xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$b=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zb=`#ifdef USE_IRIDESCENCE
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
#endif`,Kb=`#ifdef USE_BUMPMAP
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rM=`#define PI 3.141592653589793
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
} // validated`,oM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
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
}`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,AM=`#ifdef USE_ENVMAP
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
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
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
#endif`,DM=`uniform sampler2D dfgLUT;
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
}`,NM=`
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
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
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,FM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XM=`#if defined( USE_POINTS_UV )
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
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZM=`#if defined( USE_MORPHCOLORS )
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
#endif`,KM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
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
#endif`,jM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
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
#endif`,rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_w=`float getShadowMask() {
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
}`,bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mw=`#ifdef USE_SKINNING
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
#endif`,ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sw=`#ifdef USE_SKINNING
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
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ew=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cw=`#ifdef USE_TRANSMISSION
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
#endif`,Pw=`#ifdef USE_TRANSMISSION
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
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
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
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`uniform float backgroundBlurriness;
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
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`#include <common>
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
}`,Gw=`#if DEPTH_PACKING == 3200
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
}`,Vw=`#define DISTANCE
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
}`,Ww=`#define DISTANCE
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
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`uniform float scale;
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
}`,$w=`uniform vec3 diffuse;
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
}`,Zw=`#include <common>
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Jw=`#define LAMBERT
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
}`,jw=`#define LAMBERT
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
}`,Qw=`#define MATCAP
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
}`,eS=`#define MATCAP
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
}`,tS=`#define NORMAL
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
}`,nS=`#define NORMAL
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
}`,iS=`#define PHONG
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
}`,sS=`#define PHONG
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
}`,rS=`#define STANDARD
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
}`,oS=`#define STANDARD
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
}`,aS=`#define TOON
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
}`,lS=`#define TOON
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
}`,cS=`uniform float size;
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
}`,hS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,dS=`uniform vec3 color;
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
}`,fS=`uniform float rotation;
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
}`,pS=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Ob,alphahash_pars_fragment:Ub,alphamap_fragment:Fb,alphamap_pars_fragment:Bb,alphatest_fragment:zb,alphatest_pars_fragment:Hb,aomap_fragment:Gb,aomap_pars_fragment:Vb,batching_pars_vertex:Wb,batching_vertex:Xb,begin_vertex:Yb,beginnormal_vertex:qb,bsdfs:$b,iridescence_fragment:Zb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:eM,color_fragment:tM,color_pars_fragment:nM,color_pars_vertex:iM,color_vertex:sM,common:rM,defaultnormal_vertex:oM,displacementmap_pars_vertex:aM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:hM,colorspace_fragment:uM,colorspace_pars_fragment:dM,envmap_fragment:fM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:AM,envmap_vertex:vM,fog_vertex:xM,fog_pars_vertex:yM,fog_fragment:_M,fog_pars_fragment:bM,gradientmap_pars_fragment:MM,lightmap_pars_fragment:wM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:TM,lights_pars_begin:EM,lights_toon_fragment:RM,lights_toon_pars_fragment:CM,lights_phong_fragment:PM,lights_phong_pars_fragment:IM,lights_physical_fragment:LM,lights_physical_pars_fragment:DM,lights_fragment_begin:NM,lights_fragment_maps:kM,lights_fragment_end:OM,lightprobes_pars_fragment:UM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:HM,map_fragment:GM,map_pars_fragment:VM,map_particle_fragment:WM,map_particle_pars_fragment:XM,metalnessmap_fragment:YM,metalnessmap_pars_fragment:qM,morphinstance_vertex:$M,morphcolor_vertex:ZM,morphnormal_vertex:KM,morphtarget_pars_vertex:JM,morphtarget_vertex:jM,normal_fragment_begin:QM,normal_fragment_maps:ew,normal_pars_fragment:tw,normal_pars_vertex:nw,normal_vertex:iw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:rw,clearcoat_normal_fragment_maps:ow,clearcoat_pars_fragment:aw,iridescence_pars_fragment:lw,opaque_fragment:cw,packing:hw,premultiplied_alpha_fragment:uw,project_vertex:dw,dithering_fragment:fw,dithering_pars_fragment:pw,roughnessmap_fragment:mw,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:xw,shadowmap_vertex:yw,shadowmask_pars_fragment:_w,skinbase_vertex:bw,skinning_pars_vertex:Mw,skinning_vertex:ww,skinnormal_vertex:Sw,specularmap_fragment:Tw,specularmap_pars_fragment:Ew,tonemapping_fragment:Aw,tonemapping_pars_fragment:Rw,transmission_fragment:Cw,transmission_pars_fragment:Pw,uv_pars_fragment:Iw,uv_pars_vertex:Lw,uv_vertex:Dw,worldpos_vertex:Nw,background_vert:kw,background_frag:Ow,backgroundCube_vert:Uw,backgroundCube_frag:Fw,cube_vert:Bw,cube_frag:zw,depth_vert:Hw,depth_frag:Gw,distance_vert:Vw,distance_frag:Ww,equirect_vert:Xw,equirect_frag:Yw,linedashed_vert:qw,linedashed_frag:$w,meshbasic_vert:Zw,meshbasic_frag:Kw,meshlambert_vert:Jw,meshlambert_frag:jw,meshmatcap_vert:Qw,meshmatcap_frag:eS,meshnormal_vert:tS,meshnormal_frag:nS,meshphong_vert:iS,meshphong_frag:sS,meshphysical_vert:rS,meshphysical_frag:oS,meshtoon_vert:aS,meshtoon_frag:lS,points_vert:cS,points_frag:hS,shadow_vert:uS,shadow_frag:dS,sprite_vert:fS,sprite_frag:pS},qe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},zi={basic:{uniforms:Ln([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Ln([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Ln([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Ln([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Ln([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Ln([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Ln([qe.points,qe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Ln([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Ln([qe.common,qe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Ln([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Ln([qe.sprite,qe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Ln([qe.common,qe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Ln([qe.lights,qe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};zi.physical={uniforms:Ln([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var ru={r:0,b:0,g:0},mS=new Mt,qg=new pt;qg.set(-1,0,0,0,1,0,0,0,1);function gS(t,e,n,i,s,r){let o=new Ke(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let b=y.backgroundBlurriness>0;M=e.get(M,b)}return M}function p(y){let M=!1,b=f(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),M=!0);let w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,M){let b=f(M);b&&b.isCubeTexture?(c===void 0&&(c=new ot(new mt(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Lr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mS.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qg),c.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Lt,(h!==b||d!==b.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ot(new ks(2,2),new In({name:"BackgroundMaterial",uniforms:Lr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(ru,Wf(t)),n.buffers.color.setClear(ru.r,ru.g,ru.b,M,r)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:g,dispose:v}}function vS(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(I,E,N,R,C){let U=!1,H=d(I,R,N,E);r!==H&&(r=H,c(r.object)),U=f(I,R,N,C),U&&p(I,R,N,C),C!==null&&e.update(C,t.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,b(I,E,N,R),C!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function d(I,E,N,R){let C=R.wireframe===!0,U=i[E.id];U===void 0&&(U={},i[E.id]=U);let H=I.isInstancedMesh===!0?I.id:0,ee=U[H];ee===void 0&&(ee={},U[H]=ee);let q=ee[N.id];q===void 0&&(q={},ee[N.id]=q);let te=q[C];return te===void 0&&(te=u(l()),q[C]=te),te}function u(I){let E=[],N=[],R=[];for(let C=0;C<n;C++)E[C]=0,N[C]=0,R[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:R,object:I,attributes:{},index:null}}function f(I,E,N,R){let C=r.attributes,U=E.attributes,H=0,ee=N.getAttributes();for(let q in ee)if(ee[q].location>=0){let Y=C[q],K=U[q];if(K===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),Y===void 0||Y.attribute!==K||K&&Y.data!==K.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function p(I,E,N,R){let C={},U=E.attributes,H=0,ee=N.getAttributes();for(let q in ee)if(ee[q].location>=0){let Y=U[q];Y===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let K={};K.attribute=Y,Y&&Y.data&&(K.data=Y.data),C[q]=K,H++}r.attributes=C,r.attributesNum=H,r.index=R}function g(){let I=r.newAttributes;for(let E=0,N=I.length;E<N;E++)I[E]=0}function m(I){v(I,0)}function v(I,E){let N=r.newAttributes,R=r.enabledAttributes,C=r.attributeDivisors;N[I]=1,R[I]===0&&(t.enableVertexAttribArray(I),R[I]=1),C[I]!==E&&(t.vertexAttribDivisor(I,E),C[I]=E)}function y(){let I=r.newAttributes,E=r.enabledAttributes;for(let N=0,R=E.length;N<R;N++)E[N]!==I[N]&&(t.disableVertexAttribArray(N),E[N]=0)}function M(I,E,N,R,C,U,H){H===!0?t.vertexAttribIPointer(I,E,N,C,U):t.vertexAttribPointer(I,E,N,R,C,U)}function b(I,E,N,R){g();let C=R.attributes,U=N.getAttributes(),H=E.defaultAttributeValues;for(let ee in U){let q=U[ee];if(q.location>=0){let te=C[ee];if(te===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){let Y=te.normalized,K=te.itemSize,Se=e.get(te);if(Se===void 0)continue;let Z=Se.buffer,ye=Se.type,Ae=Se.bytesPerElement,He=ye===t.INT||ye===t.UNSIGNED_INT||te.gpuType===_h;if(te.isInterleavedBufferAttribute){let se=te.data,Ne=se.isInterleavedBuffer===!0?se.stride:se.itemSize,fe=te.offset;if(se.isInstancedInterleavedBuffer||se.isInstancedBufferAttribute){for(let ge=0;ge<q.locationSize;ge++)v(q.location+ge,se.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let ge=0;ge<q.locationSize;ge++)M(q.location+ge,K/q.locationSize,ye,Y,Ne*Ae,(fe+K/q.locationSize*ge)*Ae,He)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)v(q.location+se,te.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<q.locationSize;se++)m(q.location+se);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let se=0;se<q.locationSize;se++)M(q.location+se,K/q.locationSize,ye,Y,K*Ae,K/q.locationSize*se*Ae,He)}}else if(H!==void 0){let Y=H[ee];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(q.location,Y);break;case 3:t.vertexAttrib3fv(q.location,Y);break;case 4:t.vertexAttrib4fv(q.location,Y);break;default:t.vertexAttrib1fv(q.location,Y)}}}}y()}function w(){L();for(let I in i){let E=i[I];for(let N in E){let R=E[N];for(let C in R){let U=R[C];for(let H in U)h(U[H].object),delete U[H];delete R[C]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let E=i[I.id];for(let N in E){let R=E[N];for(let C in R){let U=R[C];for(let H in U)h(U[H].object),delete U[H];delete R[C]}}delete i[I.id]}function x(I){for(let E in i){let N=i[E];for(let R in N){let C=N[R];if(C[I.id]===void 0)continue;let U=C[I.id];for(let H in U)h(U[H].object),delete U[H];delete C[I.id]}}}function _(I){for(let E in i){let N=i[E],R=I.isInstancedMesh===!0?I.id:0,C=N[R];if(C!==void 0){for(let U in C){let H=C[U];for(let ee in H)h(H[ee].object),delete H[ee];delete C[U]}delete N[R],Object.keys(N).length===0&&delete i[E]}}}function L(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function xS(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function yS(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==jn&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let _=x===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Jn&&x!==ai&&!_&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),S=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,maxSamples:w,samples:S}}function _S(t){let e=this,n=null,i=0,s=!1,r=!1,o=new _i,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,v=t.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,M=y*4,b=v.clippingState||null;l.value=b,b=h(p,u,M,f);for(let w=0;w!==M;++w)b[w]=n[w];v.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let v=f+g*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<v)&&(m=new Float32Array(v));for(let M=0,b=f;M!==g;++M,b+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var yl=class extends Zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ga(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Rr});r.uniforms.tEquirect.value=n;let o=new ot(s,r),a=n.minFilter;return n.minFilter===ps&&(n.minFilter=xn),new Lo(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}},Tg=256,bS=3,MS=20,$g=256,Zg=16,wS=3,SS=new z,TS=new Ke,au=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lo(1,10,null),this._boxMesh=new ot(new mt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=SS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(TS));let m=new Lo(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=g,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Tg,zf(e))}_fromTexture(e,n){e.mapping===Pr||e.mapping===ko?this._setSize(e.image.length===0?Tg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=Eg(e,!1,!1),i=Math.log2(e)-bS;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:e>>s,height:e>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Eg(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=n;let o=e.width>>n;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Pr||e.mapping===ko?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ag()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ES(),this._integrationMaterial=AS());let n=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/Zg);for(let o=0;o<=i;o++){let a=t.lodToRoughness(o,i);if(o>i-wS)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(n)+.5*Math.log2(6/($g*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=RS());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Eg(t,e,n){return new yl(t,{minFilter:ps,generateMipmaps:e,type:Mi,colorSpace:Ra,depthBuffer:n})}function _l(t,e,n){return new In({name:t,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:n,side:hn,blending:Rr,depthTest:!1,depthWrite:!1})}function ES(){return _l("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$g}u

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
	`)}function AS(){return _l("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zg}},`

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
	`)}function RS(){return _l("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${MS}
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
	`)}function Ag(){return _l("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Rg(){return _l("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function CS(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===vh||f===xh)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let g=new yl(p.height);return g.fromEquirectangularTexture(t,u),e.set(u,g),u.addEventListener("dispose",c),a(g.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===vh||f===xh,g=f===Pr||f===ko;if(p||g){let m=n.get(u),v=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return i===null&&(i=new au(t)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new au(t)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===vh?u.mapping=Pr:f===xh&&(u.mapping=ko),u}function l(u){let f=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=n.get(f);p!==void 0&&(n.delete(f),p.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function PS(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ma("WebGLRenderer: "+i+" extension not supported."),s}}}function IS(t,e,n,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function c(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),n.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)e.update(g[m],t.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,v=0;if(m===void 0)return;let y=g!==null?g.array.length:m.array.length/3-1,M=m.count>=65535?Oa:ka,b=new M(Math.ceil(y/3)*6,1),w=b.array;if(g!==null){let x=g.array;v=g.version;for(let _=0,L=0;_<y;_+=3){let D=x[_+0],I=x[_+1],E=x[_+2];w[L++]=D,w[L++]=I,w[L++]=I,w[L++]=E,w[L++]=E,w[L++]=D}}else{v=m.version;for(let x=0,_=0;x<y;x+=3){let L=x+0,D=x+1,I=x+2;w[_++]=L,w[_++]=D,w[_++]=D,w[_++]=I,w[_++]=I,w[_++]=L}}b.version=v;let S=r.get(p);S&&e.remove(S),r.set(p,b)}function u(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function LS(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*o),n.update(u,i,1)}function c(d,u,f){f!==0&&(t.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m];n.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function DS(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function NS(t,e,n){let i=new WeakMap,s=new qt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),g===!0&&(M=3);let b=a.attributes.position.count*M,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*w*4*d),x=new Da(S,b,w,d);x.type=ai,x.needsUpdate=!0;let _=M*4;for(let D=0;D<d;D++){let I=m[D],E=v[D],N=y[D],R=b*w*4*D;for(let C=0;C<I.count;C++){let U=C*_;f===!0&&(s.fromBufferAttribute(I,C),S[R+U+0]=s.x,S[R+U+1]=s.y,S[R+U+2]=s.z,S[R+U+3]=0),p===!0&&(s.fromBufferAttribute(E,C),S[R+U+4]=s.x,S[R+U+5]=s.y,S[R+U+6]=s.z,S[R+U+7]=0),g===!0&&(s.fromBufferAttribute(N,C),S[R+U+8]=s.x,S[R+U+9]=s.y,S[R+U+10]=s.z,S[R+U+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Be(b,w)},i.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",p),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function kS(t,e,n,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var OS={[yf]:"LINEAR_TONE_MAPPING",[_f]:"REINHARD_TONE_MAPPING",[bf]:"CINEON_TONE_MAPPING",[Mf]:"ACES_FILMIC_TONE_MAPPING",[Sf]:"AGX_TONE_MAPPING",[Tf]:"NEUTRAL_TONE_MAPPING",[wf]:"CUSTOM_TONE_MAPPING"};function US(t,e,n,i,s,r){let o=new Zn(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new It;h.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new vt([0,2,0,0,2,0],2));let d=new th({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ot(h,d),f=new ph(-1,1,1,-1,0,1),p=null,g=null,m=!1,v,y=null,M=[],b=!1;this.setSize=function(w,S){o.setSize(w,S),a!==null&&a.setSize(w,S),l!==null&&l.setSize(w,S);for(let x=0;x<M.length;x++){let _=M[x];_.setSize&&_.setSize(w,S)}},this.setEffects=function(w){M=w,b=M.length>0&&M[0].isRenderPass===!0;let S=o.width,x=o.height;M.length>0&&a===null&&(a=new Zn(S,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(S,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&M.some(L=>L.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&c===null&&(c=new fs(S,x),r===!0&&(c.format=ms,c.type=Ir)),o.dispose(),o.depthTexture=_?c:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let L=0;L<M.length;L++){let D=M[L];D.setSize&&D.setSize(S,x),_&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(w,S){if(m||w.toneMapping===Fi&&M.length===0)return!1;if(y=S,S!==null){let x=S.width,_=S.height;(o.width!==x||o.height!==_)&&this.setSize(x,_)}return b===!1&&w.setRenderTarget(o),v=w.toneMapping,w.toneMapping=Fi,!0},this.hasRenderPass=function(){return b},this.end=function(w,S){w.toneMapping=v,m=!0;let x=o,_=a;for(let L=0;L<M.length;L++){let D=M[L];D.enabled!==!1&&(D.render(w,_,x,S),D.needsSwap!==!1&&(x=_,_=_===a?l:a))}if(p!==w.outputColorSpace||g!==w.toneMapping){p=w.outputColorSpace,g=w.toneMapping,d.defines={},Rt.getTransfer(p)===Lt&&(d.defines.SRGB_TRANSFER="");let L=OS[g];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(y),w.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Kg=new Fn,Jg=new fs(1,1),jg=new Wa(1),Qg=new Da,ev=new Xc,tv=new Ga,Cg=[],Pg=[],Ig=new Float32Array(16),Lg=new Float32Array(9),Dg=new Float32Array(4);function Bo(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Cg[s];if(r===void 0&&(r=new Float32Array(s),Cg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function un(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function dn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cu(t,e){let n=Pg[e];n===void 0&&(n=new Int32Array(e),Pg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FS(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2fv(this.addr,e),dn(n,e)}}function zS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(un(n,e))return;t.uniform3fv(this.addr,e),dn(n,e)}}function HS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4fv(this.addr,e),dn(n,e)}}function GS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(un(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(un(n,i))return;Dg.set(i),t.uniformMatrix2fv(this.addr,!1,Dg),dn(n,i)}}function VS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(un(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(un(n,i))return;Lg.set(i),t.uniformMatrix3fv(this.addr,!1,Lg),dn(n,i)}}function WS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(un(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(un(n,i))return;Ig.set(i),t.uniformMatrix4fv(this.addr,!1,Ig),dn(n,i)}}function XS(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2iv(this.addr,e),dn(n,e)}}function qS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;t.uniform3iv(this.addr,e),dn(n,e)}}function $S(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4iv(this.addr,e),dn(n,e)}}function ZS(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2uiv(this.addr,e),dn(n,e)}}function JS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;t.uniform3uiv(this.addr,e),dn(n,e)}}function jS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4uiv(this.addr,e),dn(n,e)}}function hu(t){return t.version===0&&(t.compareFunction=Of,t.needsUpdate=!0),t}function QS(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?r=hu(Jg):r=Kg,n.setTexture2D(e||r,s)}function eT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||ev,s)}function tT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=hu(jg):r=tv,n.setTextureCube(e||r,s)}function nT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Qg,s)}function iT(t){switch(t){case 5126:return FS;case 35664:return BS;case 35665:return zS;case 35666:return HS;case 35674:return GS;case 35675:return VS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return $S;case 5125:return ZS;case 36294:return KS;case 36295:return JS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}function sT(t,e){t.uniform1fv(this.addr,e)}function rT(t,e){let n=Bo(e,this.size,2);t.uniform2fv(this.addr,n)}function oT(t,e){let n=Bo(e,this.size,3);t.uniform3fv(this.addr,n)}function aT(t,e){let n=Bo(e,this.size,4);t.uniform4fv(this.addr,n)}function lT(t,e){let n=Bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cT(t,e){let n=Bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hT(t,e){let n=Bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uT(t,e){t.uniform1iv(this.addr,e)}function dT(t,e){t.uniform2iv(this.addr,e)}function fT(t,e){t.uniform3iv(this.addr,e)}function pT(t,e){t.uniform4iv(this.addr,e)}function mT(t,e){t.uniform1uiv(this.addr,e)}function gT(t,e){t.uniform2uiv(this.addr,e)}function vT(t,e){t.uniform3uiv(this.addr,e)}function xT(t,e){t.uniform4uiv(this.addr,e)}function yT(t,e,n){let i=this.cache,s=e.length,r=cu(n,s);un(i,r)||(t.uniform1iv(this.addr,r),dn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=hu(Jg):o=Kg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function _T(t,e,n){let i=this.cache,s=e.length,r=cu(n,s);un(i,r)||(t.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||ev,r[o])}function bT(t,e,n){let i=this.cache,s=e.length,r=cu(n,s);un(i,r)||(t.uniform1iv(this.addr,r),dn(i,r));let o;this.type===t.SAMPLER_CUBE_SHADOW?o=hu(jg):o=tv;for(let a=0;a!==s;++a)n.setTextureCube(e[a]||o,r[a])}function MT(t,e,n){let i=this.cache,s=e.length,r=cu(n,s);un(i,r)||(t.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Qg,r[o])}function wT(t){switch(t){case 5126:return sT;case 35664:return rT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return cT;case 35676:return hT;case 5124:case 35670:return uT;case 35667:case 35671:return dT;case 35668:case 35672:return fT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return MT}}var tp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iT(n.type)}},np=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wT(n.type)}},ip=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},Qf=/(\w+)(\])?(\[|\.)?/g;function Ng(t,e){t.seq.push(e),t.map[e.id]=e}function ST(t,e,n){let i=t.name,s=i.length;for(Qf.lastIndex=0;;){let r=Qf.exec(i),o=Qf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ng(n,c===void 0?new tp(a,t,e):new np(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new ip(a),Ng(n,d)),n=d}}}var Fo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);ST(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function kg(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var TT=37297,ET=0;function AT(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Og=new pt;function RT(t){Rt._getMatrix(Og,Rt.workingColorSpace,t);let e=`mat3( ${Og.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(t)){case Ca:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ug(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+AT(t.getShaderSource(e),a)}else return r}function CT(t,e){let n=RT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var PT={[yf]:"Linear",[_f]:"Reinhard",[bf]:"Cineon",[Mf]:"ACESFilmic",[Sf]:"AgX",[Tf]:"Neutral",[wf]:"Custom"};function IT(t,e){let n=PT[e];return n===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ou=new z;function LT(){Rt.getLuminanceCoefficients(ou);let t=ou.x.toFixed(4),e=ou.y.toFixed(4),n=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function NT(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kT(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function xl(t){return t!==""}function Fg(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var OT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(t){return t.replace(OT,UT)}function UT(t,e){let n=wt[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return sp(n)}var FT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(t){return t.replace(FT,BT)}function BT(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var zT={[cl]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function HT(t){return zT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var GT={[ko]:"ENVMAP_MODE_REFRACTION"};function VT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":GT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var WT={[xf]:"ENVMAP_BLENDING_MULTIPLY",[tg]:"ENVMAP_BLENDING_MIX",[ng]:"ENVMAP_BLENDING_ADD"};function XT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":WT[t.combine]||"ENVMAP_BLENDING_NONE"}function YT(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=HT(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=VT(n),d=XT(n),u=DT(n),f=NT(r),p=s.createProgram(),g,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(xl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(xl).join(`
`),m.length>0&&(m+=`
`)):(g=[Hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),m=[Hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?wt.tonemapping_pars_fragment:"",n.toneMapping!==Fi?IT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,CT("linearToOutputTexel",n.outputColorSpace),LT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xl).join(`
`)),o=sp(o),o=Fg(o,n),o=Bg(o,n),a=sp(a),a=Fg(a,n),a=Bg(a,n),o=zg(o),a=zg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+g+o,M=v+m+a,b=kg(s,s.VERTEX_SHADER,y),w=kg(s,s.FRAGMENT_SHADER,M);s.attachShader(p,b),s.attachShader(p,w),n.index0AttributeName!==void 0?s.bindAttribLocation(p,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(D){if(t.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",E=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(w)||"",R=I.trim(),C=E.trim(),U=N.trim(),H=!0,ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,p,b,w);else{let q=Ug(s,b,"vertex"),te=Ug(s,w,"fragment");ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+R+`
`+q+`
`+te)}else R!==""?lt("WebGLProgram: Program Info Log:",R):(C===""||U==="")&&(ee=!1);ee&&(D.diagnostics={runnable:H,programLog:R,vertexShader:{log:C,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(b),s.deleteShader(w),x=new Fo(s,p),_=kT(s,p)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,TT)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ET++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=w,this}var qT=0,rp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new op(e),n.set(e,i)),i}},op=class{constructor(e){this.id=qT++,this.code=e,this.usedTimes=0}};function $T(t){return t===Hs||t===ml||t===gl}function ZT(t,e,n,i,s,r){let o=new Na,a=new rp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,_,L,D,I,E){let N=D.fog,R=I.geometry,C=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||C,U),ee=u[x.type],q=i.precision;x.precision!==null&&(q=i.getMaxPrecision(x.precision),q!==x.precision&&lt("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let te=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Y=te!==void 0?te.length:0,K=0;R.morphAttributes.position!==void 0&&(K=1),R.morphAttributes.normal!==void 0&&(K=2),R.morphAttributes.color!==void 0&&(K=3);let Se,Z,ye,Ae;if(ee){let Fe=zi[ee];Se=Fe.vertexShader,Z=Fe.fragmentShader}else{Se=x.vertexShader,Z=x.fragmentShader;let Fe=a.getVertexShaderStage(x),rt=a.getFragmentShaderStage(x);a.update(x,Fe,rt),ye=Fe.id,Ae=rt.id}let He=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),Ne=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,ge=!!x.map,Ce=!!x.matcap,re=!!H,ie=re&&H.isPMREMTexture===!0,Te=!!x.aoMap,Ie=!!x.lightMap,_e=!!x.bumpMap&&x.wireframe===!1,oe=!!x.normalMap,Oe=!!x.displacementMap,ze=!!x.emissiveMap,$e=!!x.metalnessMap,et=!!x.roughnessMap,nt=x.anisotropy>0,W=x.clearcoat>0,Le=x.diffuseRoughness>0,Ue=x.dispersion>0,Ze=x.retroreflectivity>0,O=x.iridescence>0,ne=x.sheen>0,j=x.transmission>0,ve=nt&&!!x.anisotropyMap,P=W&&!!x.clearcoatMap,T=W&&!!x.clearcoatNormalMap,V=W&&!!x.clearcoatRoughnessMap,ce=Le&&!!x.diffuseRoughnessMap,Q=O&&!!x.iridescenceMap,me=O&&!!x.iridescenceThicknessMap,De=ne&&!!x.sheenColorMap,ae=ne&&!!x.sheenRoughnessMap,de=!!x.specularMap,Pe=!!x.specularColorMap,G=!!x.specularIntensityMap,ue=j&&!!x.transmissionMap,he=j&&!!x.thicknessMap,we=!!x.gradientMap,Ee=!!x.alphaMap,Re=x.alphaTest>0,be=!!x.alphaHash,ke=!!x.extensions,xe=Fi;x.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(xe=t.toneMapping);let Ge=ie?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Je={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Se,fragmentShader:Z,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&I.instanceColor!==null,instancingMorph:Ne&&I.morphTexture!==null,outputColorSpace:He===null?t.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ge,matcap:Ce,envMap:re,envMapMode:re&&H.mapping,envMapPMREM:ie,envMapMaxLod:ie?Ge.length-1:null,envMapSize:ie?Ge[0].width:null,aoMap:Te,lightMap:Ie,bumpMap:_e,normalMap:oe,displacementMap:Oe,emissiveMap:ze,normalMapObjectSpace:oe&&x.normalMapType===rg,normalMapTangentSpace:oe&&x.normalMapType===Df,packedNormalMap:oe&&x.normalMapType===Df&&$T(x.normalMap.format),metalnessMap:$e,roughnessMap:et,anisotropy:nt,anisotropyMap:ve,clearcoat:W,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:V,diffuseRoughness:Le,diffuseRoughnessMap:ce,dispersion:Ue,retroreflection:Ze,iridescence:O,iridescenceMap:Q,iridescenceThicknessMap:me,sheen:ne,sheenColorMap:De,sheenRoughnessMap:ae,specularMap:de,specularColorMap:Pe,specularIntensityMap:G,transmission:j,transmissionMap:ue,thicknessMap:he,gradientMap:we,opaque:x.transparent===!1&&x.blending===No&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Re,alphaHash:be,combine:x.combine,mapUv:ge&&f(x.map.channel),aoMapUv:Te&&f(x.aoMap.channel),lightMapUv:Ie&&f(x.lightMap.channel),bumpMapUv:_e&&f(x.bumpMap.channel),normalMapUv:oe&&f(x.normalMap.channel),displacementMapUv:Oe&&f(x.displacementMap.channel),emissiveMapUv:ze&&f(x.emissiveMap.channel),metalnessMapUv:$e&&f(x.metalnessMap.channel),roughnessMapUv:et&&f(x.roughnessMap.channel),anisotropyMapUv:ve&&f(x.anisotropyMap.channel),clearcoatMapUv:P&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ae&&f(x.sheenRoughnessMap.channel),specularMapUv:de&&f(x.specularMap.channel),specularColorMapUv:Pe&&f(x.specularColorMap.channel),specularIntensityMapUv:G&&f(x.specularIntensityMap.channel),transmissionMapUv:ue&&f(x.transmissionMap.channel),thicknessMapUv:he&&f(x.thicknessMap.channel),alphaMapUv:Ee&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(oe||nt),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!R.attributes.uv&&(ge||Ee),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&oe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:K,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:E.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:xe,decodeVideoTexture:ge&&x.map.isVideoTexture===!0&&Rt.getTransfer(x.map.colorSpace)===Lt,decodeVideoTextureEmissive:ze&&x.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(x.emissiveMap.colorSpace)===Lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yn,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ke&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&x.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function g(x){let _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)_.push(L),_.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(_,x),v(_,x),_.push(t.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function m(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapPMREM),x.push(_.envMapMaxLod),x.push(_.envMapSize),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.diffuseRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.numSunLights),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numSunLightShadows),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.numLightProbeGrids),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function v(x,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let _=u[x.type],L;if(_){let D=zi[_];L=Mg.clone(D.uniforms)}else L=x.uniforms;return L}function M(x,_){let L=h.get(_);return L!==void 0?++L.usedTimes:(L=new YT(t,_,x,s),c.push(L),h.set(_,L)),L}function b(x){if(--x.usedTimes===0){let _=c.indexOf(x);c[_]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:S}}function KT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function JT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vg(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,g,m,v){let y=t[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:v},t[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=g,y.renderOrder=u.renderOrder,y.z=m,y.group=v),e++,y}function l(u,f,p,g,m,v,y){y.reversedDepth===!0&&(m=-m);let M=a(u,f,p,g,m,v);p.transmission>0?i.push(M):p.transparent===!0?s.push(M):n.push(M)}function c(u,f,p,g,m,v){let y=a(u,f,p,g,m,v);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):n.unshift(y)}function h(u,f){n.length>1&&n.sort(u||JT),i.length>1&&i.sort(f||Gg),s.length>1&&s.sort(f||Gg)}function d(){for(let u=e,f=t.length;u<f;u++){let p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function jT(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new Vg,t.set(i,[o])):s>=r.length?(o=new Vg,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function QT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new z,color:new Ke};break;case"SpotLight":n={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function eE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var tE=0;function nE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iE(t){let e=new QT,n=eE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new Mt,o=new Mt;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,p=0,g=0,m=0,v=0,y=0,M=0,b=0,w=0,S=0,x=0,_=0,L=0,D=0;c.sort(nE);for(let E=0,N=c.length;E<N;E++){let R=c[E],C=R.color,U=R.intensity,H=R.distance,ee=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Hs?ee=R.shadow.map.texture:ee=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=C.r*U,d+=C.g*U,u+=C.b*U;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],U);D++}else if(R.isSunLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,Y=n.get(R);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[p]=Y,i.sunShadowMap[p]=ee;let K=te.getViewportCount();for(let Se=0;Se<K;Se++)i.sunShadowMatrix[g+Se]=te.getMatrix(Se),i.sunShadowCascade[g+Se]=te._cascadeData[Se];g+=K,p++}i.sun[f]=q,f++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,Y=n.get(R);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=R.shadow.matrix,w++}i.directional[m]=q,m++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(C).multiplyScalar(U),q.distance=H,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[y]=q;let te=R.shadow;if(R.map&&(i.spotLightMap[_]=R.map,_++,te.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[y]=te.matrix,R.castShadow){let Y=n.get(R);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=ee,x++}y++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(C).multiplyScalar(U),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=q,M++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let te=R.shadow,Y=n.get(R);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,Y.shadowCameraNear=te.camera.near,Y.shadowCameraFar=te.camera.far,i.pointShadow[v]=Y,i.pointShadowMap[v]=ee,i.pointShadowMatrix[v]=R.shadow.matrix,S++}i.point[v]=q,v++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(U),q.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[b]=q,b++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_FLOAT_1,i.rectAreaLTC2=qe.LTC_FLOAT_2):(i.rectAreaLTC1=qe.LTC_HALF_1,i.rectAreaLTC2=qe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==v||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==b||I.numSunShadows!==p||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==_||I.numLightProbes!==D)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=M,i.point.length=v,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+_-L,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,I.sunLength=f,I.directionalLength=m,I.pointLength=v,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=b,I.numSunShadows=p,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=_,I.numLightProbes=D,i.version=tE++)}function l(c,h){let d=0,u=0,f=0,p=0,g=0,m=0,v=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let b=c[y];if(b.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(v),d++}else if(b.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),u++}else if(b.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),p++}else if(b.isRectAreaLight){let w=i.rectArea[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(v),o.identity(),r.copy(b.matrixWorld),r.premultiply(v),o.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(v),f++}else if(b.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(v),m++}}}return{setup:a,setupView:l,state:i}}function Wg(t){let e=new iE(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):n.push(d)}function a(d){i.push(d)}function l(){e.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sE(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Wg(t),e.set(s,[a])):r>=o.length?(a=new Wg(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var rE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
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
}`,aE=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],lE=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Xg=new Mt,vl=new z,ep=new z;function cE(t,e,n){let i=new wr,s=new Be,r=new Be,o=new qt,a=new nh,l=new ih,c={},h=n.maxTextureSize,d={[zs]:hn,[hn]:zs,[yn]:yn},u=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:rE,fragmentShader:oE}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new It;p.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ot(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let v=this.type;this.render=function(S,x,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Om&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cl);let L=t.getRenderTarget(),D=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),E=t.state;E.setBlending(Rr),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let N=v!==this.type;N&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(C=>C.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,C=S.length;R<C;R++){let U=S[R],H=U.shadow;if(H===void 0){lt("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ee=H.getFrameExtents();s.multiply(ee),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,H.mapSize.y=r.y));let q=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||N===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Do){if(U.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Zn(s.x,s.y,{format:Hs,type:Mi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new fs(s.x,s.y,ai),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=ds,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=vn,H.map.depthTexture.magFilter=vn}else U.isPointLight?(H.map=new yl(s.x),H.map.depthTexture=new Wa(s.x,bi)):(H.map=new Zn(s.x,s.y),H.map.depthTexture=new fs(s.x,s.y,bi)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=ds,this.type===cl?(H.map.depthTexture.compareFunction=q?kf:Nf,H.map.depthTexture.minFilter=xn,H.map.depthTexture.magFilter=xn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=vn,H.map.depthTexture.magFilter=vn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let te=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();U.isPointLight!==!0&&H.updateMatrices(U,_);let Y=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:_.layers;for(let K=0;K<te;K++){let Se=H.getCamera(K);if(U.isPointLight){let Z=H.camera,ye=H.matrix,Ae=U.distance||Z.far;Ae!==Z.far&&(Z.far=Ae,Z.updateProjectionMatrix()),vl.setFromMatrixPosition(U.matrixWorld),Z.position.copy(vl),ep.copy(Z.position),ep.add(aE[K]),Z.up.copy(lE[K]),Z.lookAt(ep),Z.updateMatrixWorld(),ye.makeTranslation(-vl.x,-vl.y,-vl.z),Xg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Xg,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,K),t.clear();else{K===0&&(t.setRenderTarget(H.map),t.clear());let Z=H.getViewport(K);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),E.viewport(o)}i=H.getFrustum(K),b(x,_,Se,U,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Do&&y(H,_),H.needsUpdate=!1}v=this.type,m.needsUpdate=!1,t.setRenderTarget(L,D,I)};function y(S,x){let _=e.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Zn(s.x,s.y,{format:Hs,type:Mi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(x,null,_,u,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(x,null,_,f,g,null)}function M(S,x,_,L){let D=null,I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)D=I;else if(D=_.isPointLight===!0?l:a,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let E=D.uuid,N=x.uuid,R=c[E];R===void 0&&(R={},c[E]=R);let C=R[N];C===void 0&&(C=D.clone(),R[N]=C,x.addEventListener("dispose",w)),D=C}if(D.visible=x.visible,D.wireframe=x.wireframe,L===Do?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:d[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,D.map=x.map,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let E=t.properties.get(D);E.light=_}return D}function b(S,x,_,L,D,I){if(S.visible===!1)return;if(S.layers.test(D)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Do)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let R=e.update(S),C=S.material;if(Array.isArray(C)){let U=R.groups;for(let H=0,ee=U.length;H<ee;H++){let q=U[H],te=C[q.materialIndex];if(te&&te.visible){let Y=M(S,te,L,I);S.onBeforeShadow(t,S,x,_,R,Y,q),t.renderBufferDirect(_,null,R,Y,S,q),S.onAfterShadow(t,S,x,_,R,Y,q)}}}else if(C.visible){let U=M(S,C,L,I);S.onBeforeShadow(t,S,x,_,R,U,null),t.renderBufferDirect(_,null,R,U,S,null),S.onAfterShadow(t,S,x,_,R,U,null)}}let N=S.children;for(let R=0,C=N.length;R<C;R++)b(N[R],x,_,L,D,I)}function w(S){S.target.removeEventListener("dispose",w);for(let _ in c){let L=c[_],D=S.target.uuid;D in L&&(L[D].dispose(),delete L[D])}}}function hE(t,e){function n(){let G=!1,ue=new qt,he=null,we=new qt(0,0,0,0);return{setMask:function(Ee){he!==Ee&&!G&&(t.colorMask(Ee,Ee,Ee,Ee),he=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,Re,be,ke,xe){xe===!0&&(Ee*=ke,Re*=ke,be*=ke),ue.set(Ee,Re,be,ke),we.equals(ue)===!1&&(t.clearColor(Ee,Re,be,ke),we.copy(ue))},reset:function(){G=!1,he=null,we.set(-1,0,0,0)}}}function i(){let G=!1,ue=!1,he=null,we=null,Ee=null;return{setReversed:function(Re){if(ue!==Re){let be=e.get("EXT_clip_control");Re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ue=Re;let ke=Ee;Ee=null,this.setClear(ke)}},getReversed:function(){return ue},setTest:function(Re){Re?se(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(Re){he!==Re&&!G&&(t.depthMask(Re),he=Re)},setFunc:function(Re){if(ue&&(Re=mg[Re]),we!==Re){switch(Re){case Dc:t.depthFunc(t.NEVER);break;case Nc:t.depthFunc(t.ALWAYS);break;case kc:t.depthFunc(t.LESS);break;case xo:t.depthFunc(t.LEQUAL);break;case Oc:t.depthFunc(t.EQUAL);break;case Uc:t.depthFunc(t.GEQUAL);break;case Fc:t.depthFunc(t.GREATER);break;case Bc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}we=Re}},setLocked:function(Re){G=Re},setClear:function(Re){Ee!==Re&&(Ee=Re,ue&&(Re=1-Re),t.clearDepth(Re))},reset:function(){G=!1,he=null,we=null,Ee=null,ue=!1}}}function s(){let G=!1,ue=null,he=null,we=null,Ee=null,Re=null,be=null,ke=null,xe=null;return{setTest:function(Ge){G||(Ge?se(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(Ge){ue!==Ge&&!G&&(t.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,Je,Fe){(he!==Ge||we!==Je||Ee!==Fe)&&(t.stencilFunc(Ge,Je,Fe),he=Ge,we=Je,Ee=Fe)},setOp:function(Ge,Je,Fe){(Re!==Ge||be!==Je||ke!==Fe)&&(t.stencilOp(Ge,Je,Fe),Re=Ge,be=Je,ke=Fe)},setLocked:function(Ge){G=Ge},setClear:function(Ge){xe!==Ge&&(t.clearStencil(Ge),xe=Ge)},reset:function(){G=!1,ue=null,he=null,we=null,Ee=null,Re=null,be=null,ke=null,xe=null}}}let r=new n,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],g=null,m=!1,v=null,y=null,M=null,b=null,w=null,S=null,x=null,_=new Ke(0,0,0),L=0,D=!1,I=null,E=null,N=null,R=null,C=null,U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=ee>=2);let te=null,Y={},K=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Z=new qt().fromArray(K),ye=new qt().fromArray(Se);function Ae(G,ue,he,we){let Ee=new Uint8Array(4),Re=t.createTexture();t.bindTexture(G,Re),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<he;be++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(ue+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return Re}let He={};He[t.TEXTURE_2D]=Ae(t.TEXTURE_2D,t.TEXTURE_2D,1),He[t.TEXTURE_CUBE_MAP]=Ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[t.TEXTURE_2D_ARRAY]=Ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),He[t.TEXTURE_3D]=Ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(xo),_e(!1),oe(df),se(t.CULL_FACE),Te(Rr);function se(G){h[G]!==!0&&(t.enable(G),h[G]=!0)}function Ne(G){h[G]!==!1&&(t.disable(G),h[G]=!1)}function fe(G,ue){return u[G]!==ue?(t.bindFramebuffer(G,ue),u[G]=ue,G===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),G===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function ge(G,ue){let he=p,we=!1;if(G){he=f.get(ue),he===void 0&&(he=[],f.set(ue,he));let Ee=G.textures;if(he.length!==Ee.length||he[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,be=Ee.length;Re<be;Re++)he[Re]=t.COLOR_ATTACHMENT0+Re;he.length=Ee.length,we=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,we=!0);we&&t.drawBuffers(he)}function Ce(G){return g!==G?(t.useProgram(G),g=G,!0):!1}let re={[Cr]:t.FUNC_ADD,[Fm]:t.FUNC_SUBTRACT,[Bm]:t.FUNC_REVERSE_SUBTRACT};re[zm]=t.MIN,re[Hm]=t.MAX;let ie={[Gm]:t.ZERO,[Vm]:t.ONE,[Wm]:t.SRC_COLOR,[gf]:t.SRC_ALPHA,[Km]:t.SRC_ALPHA_SATURATE,[$m]:t.DST_COLOR,[Ym]:t.DST_ALPHA,[Xm]:t.ONE_MINUS_SRC_COLOR,[vf]:t.ONE_MINUS_SRC_ALPHA,[Zm]:t.ONE_MINUS_DST_COLOR,[qm]:t.ONE_MINUS_DST_ALPHA,[Jm]:t.CONSTANT_COLOR,[jm]:t.ONE_MINUS_CONSTANT_COLOR,[Qm]:t.CONSTANT_ALPHA,[eg]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(G,ue,he,we,Ee,Re,be,ke,xe,Ge){if(G===Rr){m===!0&&(Ne(t.BLEND),m=!1);return}if(m===!1&&(se(t.BLEND),m=!0),G!==Um){if(G!==v||Ge!==D){if((y!==Cr||w!==Cr)&&(t.blendEquation(t.FUNC_ADD),y=Cr,w=Cr),Ge)switch(G){case No:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ff:t.blendFunc(t.ONE,t.ONE);break;case pf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",G);break}else switch(G){case No:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ff:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case pf:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mf:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",G);break}M=null,b=null,S=null,x=null,_.set(0,0,0),L=0,v=G,D=Ge}return}Ee=Ee||ue,Re=Re||he,be=be||we,(ue!==y||Ee!==w)&&(t.blendEquationSeparate(re[ue],re[Ee]),y=ue,w=Ee),(he!==M||we!==b||Re!==S||be!==x)&&(t.blendFuncSeparate(ie[he],ie[we],ie[Re],ie[be]),M=he,b=we,S=Re,x=be),(ke.equals(_)===!1||xe!==L)&&(t.blendColor(ke.r,ke.g,ke.b,xe),_.copy(ke),L=xe),v=G,D=!1}function Ie(G,ue){G.side===yn?Ne(t.CULL_FACE):se(t.CULL_FACE);let he=G.side===hn;ue&&(he=!he),_e(he),G.blending===No&&G.transparent===!1?Te(Rr):Te(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let we=G.stencilWrite;a.setTest(we),we&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function _e(G){I!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),I=G)}function oe(G){G!==Nm?(se(t.CULL_FACE),G!==E&&(G===df?t.cullFace(t.BACK):G===km?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),E=G}function Oe(G){G!==N&&(H&&t.lineWidth(G),N=G)}function ze(G,ue,he){G?(se(t.POLYGON_OFFSET_FILL),(R!==ue||C!==he)&&(R=ue,C=he,o.getReversed()&&(ue=-ue,he=-he),t.polygonOffset(ue,he))):Ne(t.POLYGON_OFFSET_FILL)}function $e(G){G?se(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function et(G){G===void 0&&(G=t.TEXTURE0+U-1),te!==G&&(t.activeTexture(G),te=G)}function nt(G,ue,he){he===void 0&&(te===null?he=t.TEXTURE0+U-1:he=te);let we=Y[he];we===void 0&&(we={type:void 0,texture:void 0},Y[he]=we),(we.type!==G||we.texture!==ue)&&(te!==he&&(t.activeTexture(he),te=he),t.bindTexture(G,ue||He[G]),we.type=G,we.texture=ue)}function W(){let G=Y[te];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Le(){try{t.compressedTexImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function Ue(){try{t.compressedTexImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function Ze(){try{t.texSubImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function O(){try{t.texSubImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function ne(){try{t.compressedTexSubImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function ve(){try{t.texStorage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function P(){try{t.texStorage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function T(){try{t.texImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function V(){try{t.texImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function ce(G){return d[G]!==void 0?d[G]:t.getParameter(G)}function Q(G,ue){d[G]!==ue&&(t.pixelStorei(G,ue),d[G]=ue)}function me(G){Z.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),Z.copy(G))}function De(G){ye.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),ye.copy(G))}function ae(G,ue){let he=c.get(ue);he===void 0&&(he=new WeakMap,c.set(ue,he));let we=he.get(G);we===void 0&&(we=t.getUniformBlockIndex(ue,G.name),t.uniformBlockBinding(ue,we,we),he.set(G,we))}function de(G,ue,he){let Ee=c.get(ue).get(G);l[Ee]!==he&&(t.bindBufferBase(t.UNIFORM_BUFFER,Ee,he),l[Ee]=he)}function Pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,Y={},u={},l={},f=new WeakMap,p=[],g=null,m=!1,v=null,y=null,M=null,b=null,w=null,S=null,x=null,_=new Ke(0,0,0),L=0,D=!1,I=null,E=null,N=null,R=null,C=null,Z.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Ne,bindFramebuffer:fe,drawBuffers:ge,useProgram:Ce,setBlending:Te,setMaterial:Ie,setFlipSided:_e,setCullFace:oe,setLineWidth:Oe,setPolygonOffset:ze,setScissorTest:$e,activeTexture:et,bindTexture:nt,unbindTexture:W,compressedTexImage2D:Le,compressedTexImage3D:Ue,texImage2D:T,texImage3D:V,pixelStorei:Q,getParameter:ce,updateUBOMapping:ae,uniformBlockBinding:de,texStorage2D:ve,texStorage3D:P,texSubImage2D:Ze,texSubImage3D:O,compressedTexSubImage2D:ne,compressedTexSubImage3D:j,scissor:me,viewport:De,reset:Pe}}function uE(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,g=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,T){return m?new OffscreenCanvas(P,T):Ia("canvas")}function y(P,T,V){let ce=1,Q=ve(P);if((Q.width>V||Q.height>V)&&(ce=V/Math.max(Q.width,Q.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let me=Math.floor(ce*Q.width),De=Math.floor(ce*Q.height);u===void 0&&(u=v(me,De));let ae=T?v(me,De):u;return ae.width=me,ae.height=De,ae.getContext("2d").drawImage(P,0,0,me,De),lt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+me+"x"+De+")."),ae}else return"data"in P&&lt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function M(P){return P.generateMipmaps}function b(P){t.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(P,T,V,ce,Q,me=!1){if(P!==null){if(t[P]!==void 0)return t[P];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let De;ce&&(De=e.get("EXT_texture_norm16"),De||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=T;if(T===t.RED&&(V===t.FLOAT&&(ae=t.R32F),V===t.HALF_FLOAT&&(ae=t.R16F),V===t.UNSIGNED_BYTE&&(ae=t.R8),V===t.UNSIGNED_SHORT&&De&&(ae=De.R16_EXT),V===t.SHORT&&De&&(ae=De.R16_SNORM_EXT)),T===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ae=t.R8UI),V===t.UNSIGNED_SHORT&&(ae=t.R16UI),V===t.UNSIGNED_INT&&(ae=t.R32UI),V===t.BYTE&&(ae=t.R8I),V===t.SHORT&&(ae=t.R16I),V===t.INT&&(ae=t.R32I)),T===t.RG&&(V===t.FLOAT&&(ae=t.RG32F),V===t.HALF_FLOAT&&(ae=t.RG16F),V===t.UNSIGNED_BYTE&&(ae=t.RG8),V===t.UNSIGNED_SHORT&&De&&(ae=De.RG16_EXT),V===t.SHORT&&De&&(ae=De.RG16_SNORM_EXT)),T===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ae=t.RG8UI),V===t.UNSIGNED_SHORT&&(ae=t.RG16UI),V===t.UNSIGNED_INT&&(ae=t.RG32UI),V===t.BYTE&&(ae=t.RG8I),V===t.SHORT&&(ae=t.RG16I),V===t.INT&&(ae=t.RG32I)),T===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ae=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ae=t.RGB16UI),V===t.UNSIGNED_INT&&(ae=t.RGB32UI),V===t.BYTE&&(ae=t.RGB8I),V===t.SHORT&&(ae=t.RGB16I),V===t.INT&&(ae=t.RGB32I)),T===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ae=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ae=t.RGBA16UI),V===t.UNSIGNED_INT&&(ae=t.RGBA32UI),V===t.BYTE&&(ae=t.RGBA8I),V===t.SHORT&&(ae=t.RGBA16I),V===t.INT&&(ae=t.RGBA32I)),T===t.RGB&&(V===t.UNSIGNED_SHORT&&De&&(ae=De.RGB16_EXT),V===t.SHORT&&De&&(ae=De.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(ae=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(ae=t.R11F_G11F_B10F)),T===t.RGBA){let de=me?Ca:Rt.getTransfer(Q);V===t.FLOAT&&(ae=t.RGBA32F),V===t.HALF_FLOAT&&(ae=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ae=de===Lt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&De&&(ae=De.RGBA16_EXT),V===t.SHORT&&De&&(ae=De.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(P,T){let V;return P?T===null||T===bi||T===Ir?V=t.DEPTH24_STENCIL8:T===ai?V=t.DEPTH32F_STENCIL8:T===Oo&&(V=t.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bi||T===Ir?V=t.DEPTH_COMPONENT24:T===ai?V=t.DEPTH_COMPONENT32F:T===Oo&&(V=t.DEPTH_COMPONENT16),V}function _(P,T){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==vn&&P.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){let T=new WeakRef(P);i.get(P).__ref=T,p.add(T),g.register(P,T,T)}function D(P){let T=i.get(P).__ref;T!==void 0&&(p.delete(T),g.unregister(T))}function I(P){N(P.target)}function E(P){R(P.target)}function N(P){P.removeEventListener("dispose",I),D(P),U(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function R(P){P.removeEventListener("dispose",E),D(P),ee(P)}function C(){for(let P of p){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?R(T):N(T))}p.clear(),d.clear()}function U(P){let T=i.get(P);if(T.__webglInit===void 0)return;let V=P.source,ce=f.get(V);if(ce){let Q=ce[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(P),Object.keys(ce).length===0&&f.delete(V)}i.remove(P)}function H(P){let T=i.get(P);t.deleteTexture(T.__webglTexture);let V=P.source,ce=f.get(V);delete ce[T.__cacheKey],o.memory.textures--}function ee(P){let T=i.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let V=P.depthTexture;if(V&&V.renderTarget===P&&N(V),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let me=0;me<T.__webglFramebuffer[Q].length;me++)t.deleteFramebuffer(T.__webglFramebuffer[Q][me]);else t.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)t.deleteFramebuffer(T.__webglFramebuffer[Q]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ce=P.textures;for(let Q=0,me=ce.length;Q<me;Q++){let De=i.get(ce[Q]);De.__webglTexture&&(t.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(ce[Q])}i.remove(P)}let q=0;function te(){q=0}function Y(){return q}function K(P){q=P}function Se(){let P=q;return P>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,P}function Z(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ye(P,T){let V=i.get(P);if(P.isVideoTexture&&ne(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let ce=P.image;if(ce===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(V,P,T);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+T)}function Ae(P,T){let V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Ie(V,P,T);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+T)}function He(P,T){let V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Ie(V,P,T);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+T)}function se(P,T){let V=i.get(P);if(P.version>0&&V.__version!==P.version){_e(V,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+T)}let Ne={[zc]:t.REPEAT,[Di]:t.CLAMP_TO_EDGE,[Hc]:t.MIRRORED_REPEAT},fe={[vn]:t.NEAREST,[ig]:t.NEAREST_MIPMAP_NEAREST,[hl]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[yh]:t.LINEAR_MIPMAP_NEAREST,[ps]:t.LINEAR_MIPMAP_LINEAR},ge={[ag]:t.NEVER,[Of]:t.ALWAYS,[lg]:t.LESS,[Nf]:t.LEQUAL,[cg]:t.EQUAL,[kf]:t.GEQUAL,[hg]:t.GREATER,[ug]:t.NOTEQUAL};function Ce(P,T){if(T.type===ai&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===xn||T.magFilter===yh||T.magFilter===hl||T.magFilter===ps||T.minFilter===xn||T.minFilter===yh||T.minFilter===hl||T.minFilter===ps)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,Ne[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Ne[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Ne[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,fe[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vn||T.minFilter!==hl&&T.minFilter!==ps||T.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function re(P,T){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",I),L(T));let ce=T.source,Q=f.get(ce);Q===void 0&&(Q={},f.set(ce,Q));let me=Z(T);if(me!==P.__cacheKey){Q[me]===void 0&&(Q[me]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[me].usedTimes++;let De=Q[P.__cacheKey];De!==void 0&&(Q[P.__cacheKey].usedTimes--,De.usedTimes===0&&H(T)),P.__cacheKey=me,P.__webglTexture=Q[me].texture}return V}function ie(P,T,V){return Math.floor(Math.floor(P/V)/T)}function Te(P,T,V,ce){let me=P.updateRanges;if(me.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,V,ce,T.data);else{me.sort((G,ue)=>G.start-ue.start);let De=0;for(let G=1;G<me.length;G++){let ue=me[De],he=me[G],we=ue.start+ue.count,Ee=ie(he.start,T.width,4),Re=ie(ue.start,T.width,4);he.start<=we+1&&Ee===Re&&ie(he.start+he.count-1,T.width,4)===Ee?ue.count=Math.max(ue.count,he.start+he.count-ue.start):(++De,me[De]=he)}me.length=De+1;let ae=n.getParameter(t.UNPACK_ROW_LENGTH),de=n.getParameter(t.UNPACK_SKIP_PIXELS),Pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let G=0,ue=me.length;G<ue;G++){let he=me[G],we=Math.floor(he.start/4),Ee=Math.ceil(he.count/4),Re=we%T.width,be=Math.floor(we/T.width),ke=Ee,xe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(t.UNPACK_SKIP_ROWS,be),n.texSubImage2D(t.TEXTURE_2D,0,Re,be,ke,xe,V,ce,T.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ae),n.pixelStorei(t.UNPACK_SKIP_PIXELS,de),n.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function Ie(P,T,V){let ce=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=t.TEXTURE_3D);let Q=re(P,T),me=T.source;n.bindTexture(ce,P.__webglTexture,t.TEXTURE0+V);let De=i.get(me);if(me.version!==De.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let xe=Rt.getPrimaries(Rt.workingColorSpace),Ge=T.colorSpace===gs?null:Rt.getPrimaries(T.colorSpace),Je=T.colorSpace===gs||xe===Ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}n.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment);let de=y(T.image,!1,s.maxTextureSize);de=j(T,de);let Pe=r.convert(T.format,T.colorSpace),G=r.convert(T.type),ue=S(T.internalFormat,Pe,G,T.normalized,T.colorSpace,T.isVideoTexture);Ce(ce,T);let he,we=T.mipmaps,Ee=T.isVideoTexture!==!0,Re=De.__version===void 0||Q===!0,be=me.dataReady,ke=_(T,de);if(T.isDepthTexture)ue=x(T.format===ms,T.type),Re&&(Ee?n.texStorage2D(t.TEXTURE_2D,1,ue,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,ue,de.width,de.height,0,Pe,G,null));else if(T.isDataTexture)if(we.length>0){Ee&&Re&&n.texStorage2D(t.TEXTURE_2D,ke,ue,we[0].width,we[0].height);for(let xe=0,Ge=we.length;xe<Ge;xe++)he=we[xe],Ee?be&&n.texSubImage2D(t.TEXTURE_2D,xe,0,0,he.width,he.height,Pe,G,he.data):n.texImage2D(t.TEXTURE_2D,xe,ue,he.width,he.height,0,Pe,G,he.data);T.generateMipmaps=!1}else Ee?(Re&&n.texStorage2D(t.TEXTURE_2D,ke,ue,de.width,de.height),be&&Te(T,de,Pe,G)):n.texImage2D(t.TEXTURE_2D,0,ue,de.width,de.height,0,Pe,G,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ee&&Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,ue,we[0].width,we[0].height,de.depth);for(let xe=0,Ge=we.length;xe<Ge;xe++)if(he=we[xe],T.format!==jn)if(Pe!==null)if(Ee){if(be)if(T.layerUpdates.size>0){let Je=qf(he.width,he.height,T.format,T.type);for(let Fe of T.layerUpdates){let rt=he.data.subarray(Fe*Je/he.data.BYTES_PER_ELEMENT,(Fe+1)*Je/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,xe,0,0,Fe,he.width,he.height,1,Pe,rt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,xe,0,0,0,he.width,he.height,de.depth,Pe,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,xe,ue,he.width,he.height,de.depth,0,he.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,xe,0,0,0,he.width,he.height,de.depth,Pe,G,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,xe,ue,he.width,he.height,de.depth,0,Pe,G,he.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ee&&Re&&n.texStorage2D(t.TEXTURE_2D,ke,ue,we[0].width,we[0].height);for(let xe=0,Ge=we.length;xe<Ge;xe++)he=we[xe],T.format!==jn?Pe!==null?Ee?be&&n.compressedTexSubImage2D(t.TEXTURE_2D,xe,0,0,he.width,he.height,Pe,he.data):n.compressedTexImage2D(t.TEXTURE_2D,xe,ue,he.width,he.height,0,he.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?be&&n.texSubImage2D(t.TEXTURE_2D,xe,0,0,he.width,he.height,Pe,G,he.data):n.texImage2D(t.TEXTURE_2D,xe,ue,he.width,he.height,0,Pe,G,he.data)}else if(T.isDataArrayTexture)if(Ee){if(Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,ue,de.width,de.height,de.depth),be)if(T.layerUpdates.size>0){let xe=qf(de.width,de.height,T.format,T.type);for(let Ge of T.layerUpdates){let Je=de.data.subarray(Ge*xe/de.data.BYTES_PER_ELEMENT,(Ge+1)*xe/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ge,de.width,de.height,1,Pe,G,Je)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,G,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,de.width,de.height,de.depth,0,Pe,G,de.data);else if(T.isData3DTexture)Ee?(Re&&n.texStorage3D(t.TEXTURE_3D,ke,ue,de.width,de.height,de.depth),be&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,G,de.data)):n.texImage3D(t.TEXTURE_3D,0,ue,de.width,de.height,de.depth,0,Pe,G,de.data);else if(T.isFramebufferTexture){if(Re)if(Ee)n.texStorage2D(t.TEXTURE_2D,ke,ue,de.width,de.height);else{let xe=de.width,Ge=de.height;for(let Je=0;Je<ke;Je++)n.texImage2D(t.TEXTURE_2D,Je,ue,xe,Ge,0,Pe,G,null),xe>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in t){let xe=t.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),de.parentNode!==xe){xe.appendChild(de),d.add(T),xe.onpaint=Ge=>{let Je=Ge.changedElements;for(let Fe of d)Je.includes(Fe.image)&&(Fe.needsUpdate=!0)},xe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,de);else{let Je=t.RGBA,Fe=t.RGBA,rt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Je,Fe,rt,de)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ee&&Re){let xe=ve(we[0]);n.texStorage2D(t.TEXTURE_2D,ke,ue,xe.width,xe.height)}for(let xe=0,Ge=we.length;xe<Ge;xe++)he=we[xe],Ee?be&&n.texSubImage2D(t.TEXTURE_2D,xe,0,0,Pe,G,he):n.texImage2D(t.TEXTURE_2D,xe,ue,Pe,G,he);T.generateMipmaps=!1}else if(Ee){if(Re){let xe=ve(de);n.texStorage2D(t.TEXTURE_2D,ke,ue,xe.width,xe.height)}be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,G,de)}else n.texImage2D(t.TEXTURE_2D,0,ue,Pe,G,de);M(T)&&T.mipmapsAutoUpdate===!0&&b(ce),De.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function _e(P,T,V){if(T.image.length!==6)return;let ce=re(P,T),Q=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+V);let me=i.get(Q);if(Q.version!==me.__version||ce===!0){n.activeTexture(t.TEXTURE0+V);let De=Rt.getPrimaries(Rt.workingColorSpace),ae=T.colorSpace===gs?null:Rt.getPrimaries(T.colorSpace),de=T.colorSpace===gs||De===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,G=T.image[0]&&T.image[0].isDataTexture,ue=[];for(let Fe=0;Fe<6;Fe++)!Pe&&!G?ue[Fe]=y(T.image[Fe],!0,s.maxCubemapSize):ue[Fe]=G?T.image[Fe].image:T.image[Fe],ue[Fe]=j(T,ue[Fe]);let he=ue[0],we=r.convert(T.format,T.colorSpace),Ee=r.convert(T.type),Re=S(T.internalFormat,we,Ee,T.normalized,T.colorSpace),be=T.isVideoTexture!==!0,ke=me.__version===void 0||ce===!0,xe=Q.dataReady,Ge=_(T,he);Ce(t.TEXTURE_CUBE_MAP,T);let Je;if(T.isDepthTexture){if(Re=x(T.format===ms,T.type),ke)if(be)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,Re,he.width,he.height);else for(let Fe=0;Fe<6;Fe++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Re,he.width,he.height,0,we,Ee,null)}else if(Pe){be&&ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ge,Re,he.width,he.height);for(let Fe=0;Fe<6;Fe++){Je=ue[Fe].mipmaps;for(let rt=0;rt<Je.length;rt++){let xt=Je[rt];T.format!==jn?we!==null?be?xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,rt,0,0,xt.width,xt.height,we,xt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,rt,Re,xt.width,xt.height,0,xt.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,rt,0,0,xt.width,xt.height,we,Ee,xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,rt,Re,xt.width,xt.height,0,we,Ee,xt.data)}}}else{if(Je=T.mipmaps,be&&ke){Je.length>0&&Ge++;let Fe=ve(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ge,Re,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(G){be?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ue[Fe].width,ue[Fe].height,we,Ee,ue[Fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Re,ue[Fe].width,ue[Fe].height,0,we,Ee,ue[Fe].data);for(let rt=0;rt<Je.length;rt++){let Dt=Je[rt].image[Fe].image;be?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,rt+1,0,0,Dt.width,Dt.height,we,Ee,Dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,rt+1,Re,Dt.width,Dt.height,0,we,Ee,Dt.data)}}else{be?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,we,Ee,ue[Fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Re,we,Ee,ue[Fe]);for(let rt=0;rt<Je.length;rt++){let xt=Je[rt];be?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,rt+1,0,0,we,Ee,xt.image[Fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,rt+1,Re,we,Ee,xt.image[Fe])}}}M(T)&&T.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),me.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function oe(P,T,V,ce,Q,me){let De=r.convert(V.format,V.colorSpace),ae=r.convert(V.type),de=S(V.internalFormat,De,ae,V.normalized,V.colorSpace),Pe=i.get(T),G=i.get(V);if(G.__renderTarget=T,!Pe.__hasExternalTextures){let ue=Math.max(1,T.width>>me),he=Math.max(1,T.height>>me);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,me,de,ue,he,T.depth,0,De,ae,null):n.texImage2D(Q,me,de,ue,he,0,De,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),O(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,Q,G.__webglTexture,0,Ze(T)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,Q,G.__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(P,T,V){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer){let ce=T.depthTexture,Q=ce&&ce.isDepthTexture?ce.type:null,me=x(T.stencilBuffer,Q),De=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;O(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze(T),me,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze(T),me,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,me,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,P)}else{let ce=T.textures;for(let Q=0;Q<ce.length;Q++){let me=ce[Q],De=r.convert(me.format,me.colorSpace),ae=r.convert(me.type),de=S(me.internalFormat,De,ae,me.normalized,me.colorSpace);O(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze(T),de,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze(T),de,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,de,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(P,T,V){let ce=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(T.depthTexture);Q.__renderTarget=T;let me=ce?T.depthTexture.image[0]:T.depthTexture.image;(!Q.__webglTexture||me.width!==T.width||me.height!==T.height)&&(me.width=T.width,me.height=T.height,T.depthTexture.needsUpdate=!0),ce?se(T.depthTexture,0):ye(T.depthTexture,0);let De=Q.__webglTexture,ae=Ze(T),de=ce?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,Pe=T.depthTexture.format===ms?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(T.depthTexture.format===ds)O(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,de,De,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,de,De,0);else if(T.depthTexture.format===ms)O(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,de,De,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,de,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(P){let T=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ce=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",Q)};ce.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=ce}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let ce=0;ce<6;ce++)ze(T.__webglFramebuffer[ce],P,ce);else P.texture.mipmaps.length>0?ze(T.__webglFramebuffer[0],P,0):ze(T.__webglFramebuffer,P,0);else if(V){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=t.createRenderbuffer(),Oe(T.__webglDepthbuffer[ce],P,!1);else{let Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[ce];t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,me)}}else if(P.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),Oe(T.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,me)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(P,T,V){let ce=i.get(P);T!==void 0&&oe(ce.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&$e(P)}function nt(P){let T=P.texture,V=i.get(P),ce=i.get(T);P.addEventListener("dispose",E),L(P);let Q=P.textures,me=P.isWebGLCubeRenderTarget===!0,De=Q.length>1;if(De||(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=T.version,o.memory.textures++),me){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(T.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let de=0;de<T.mipmaps.length;de++)V.__webglFramebuffer[ae][de]=t.createFramebuffer()}else V.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<T.mipmaps.length;ae++)V.__webglFramebuffer[ae]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(De)for(let ae=0,de=Q.length;ae<de;ae++){let Pe=i.get(Q[ae]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&O(P)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){let de=Q[ae];V.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ae]);let Pe=r.convert(de.format,de.colorSpace),G=r.convert(de.type),ue=S(de.internalFormat,Pe,G,de.normalized,de.colorSpace,P.isXRRenderTarget===!0),he=Ze(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ue,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,V.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(V.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,T);for(let ae=0;ae<6;ae++)if(T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)oe(V.__webglFramebuffer[ae][de],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else oe(V.__webglFramebuffer[ae],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);M(T)?b(t.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}else if(De){for(let ae=0,de=Q.length;ae<de;ae++){let Pe=Q[ae],G=i.get(Pe),ue=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,G.__webglTexture),Ce(ue,Pe),oe(V.__webglFramebuffer,P,Pe,t.COLOR_ATTACHMENT0+ae,ue,0),M(Pe)&&b(ue)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,ce.__webglTexture),Ce(ae,T),T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)oe(V.__webglFramebuffer[de],P,T,t.COLOR_ATTACHMENT0,ae,de);else oe(V.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,ae,0);M(T)?b(ae):T.mipmaps.length>0&&t.texParameteri(ae,t.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}P.depthBuffer&&$e(P)}function W(P){let T=P.textures;for(let V=0,ce=T.length;V<ce;V++){let Q=T[V];if(M(Q)&&Q.mipmapsAutoUpdate===!0){let me=w(P),De=i.get(Q).__webglTexture;n.bindTexture(me,De),b(me),n.unbindTexture()}}}let Le=[];function Ue(P){if(P.samples>0){if(O(P)===!1){let T=P.textures,V=P.width,ce=P.height,Q=t.COLOR_BUFFER_BIT,me=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(P),ae=T.length>1;if(ae)for(let Pe=0;Pe<T.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);let G=i.get(T[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,G,0)}t.blitFramebuffer(0,0,V,ce,0,0,V,ce,Q,t.NEAREST),l===!0&&(Le.length=0,Le.push(t.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Le.push(me),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let Pe=0;Pe<T.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);let G=i.get(T[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,G,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ze(P){return Math.min(s.maxSamples,P.samples)}function O(P){let T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ne(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function j(P,T){let V=P.colorSpace,ce=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Ra&&V!==gs&&(Rt.getTransfer(V)===Lt?(ce!==jn||Q!==Jn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",V)),T}function ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Se,this.resetTextureUnits=te,this.getTextureUnits=Y,this.setTextureUnits=K,this.setTexture2D=ye,this.setTexture2DArray=Ae,this.setTexture3D=He,this.setTextureCube=se,this.rebindTextures=et,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=O,this.dispose=C}function dE(t,e){function n(i,s=gs){let r,o=Rt.getTransfer(s);if(i===Jn)return t.UNSIGNED_BYTE;if(i===bh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Mh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Cf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Af)return t.BYTE;if(i===Rf)return t.SHORT;if(i===Oo)return t.UNSIGNED_SHORT;if(i===_h)return t.INT;if(i===bi)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Mi)return t.HALF_FLOAT;if(i===If)return t.ALPHA;if(i===Lf)return t.RGB;if(i===jn)return t.RGBA;if(i===ds)return t.DEPTH_COMPONENT;if(i===ms)return t.DEPTH_STENCIL;if(i===wh)return t.RED;if(i===Sh)return t.RED_INTEGER;if(i===Hs)return t.RG;if(i===Th)return t.RG_INTEGER;if(i===Eh)return t.RGBA_INTEGER;if(i===ul||i===dl||i===fl||i===pl)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ah||i===Rh||i===Ch||i===Ph)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ah)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ch)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ph)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ih||i===Lh||i===Dh||i===Nh||i===kh||i===ml||i===Oh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ih||i===Lh)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nh)return r.COMPRESSED_R11_EAC;if(i===kh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ml)return r.COMPRESSED_RG11_EAC;if(i===Oh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uh||i===Fh||i===Bh||i===zh||i===Hh||i===Gh||i===Vh||i===Wh||i===Xh||i===Yh||i===qh||i===$h||i===Zh||i===Kh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$h)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jh||i===jh||i===Qh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jh)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eu||i===tu||i===gl||i===nu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===eu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var fE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
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

}`,ap=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Xa(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new In({vertexShader:fE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ot(new ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lp=class extends Ni{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new ap,v={},y=n.getContextAttributes(),M=null,b=null,w=[],S=[],x=new Be,_=null,L=null,D=new Sn;D.viewport=new qt;let I=new Sn;I.viewport=new qt;let E=[D,I],N=new mh,R=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ye=w[Z];return ye===void 0&&(ye=new Mo,w[Z]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(Z){let ye=w[Z];return ye===void 0&&(ye=new Mo,w[Z]=ye),ye.getGripSpace()},this.getHand=function(Z){let ye=w[Z];return ye===void 0&&(ye=new Mo,w[Z]=ye),ye.getHandSpace()};function U(Z){let ye=S.indexOf(Z.inputSource);if(ye===-1)return;let Ae=w[ye];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,c||o),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<w.length;Z++){let ye=S[Z];ye!==null&&(S[Z]=null,w[Z].disconnect(ye))}R=null,C=null,m.reset();for(let Z in v)delete v[Z];if(e.setRenderTarget(M),f=null,u=null,d=null,s=null,b=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(x.width,x.height,!1),L!==null){let Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ee),y.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,He=null,se=null;y.depth&&(se=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=y.stencil?ms:ds,He=y.stencil?Ir:bi);let Ne={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ne),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Zn(u.textureWidth,u.textureHeight,{format:jn,type:Jn,depthTexture:new fs(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Zn(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Z){for(let ye=0;ye<Z.removed.length;ye++){let Ae=Z.removed[ye],He=S.indexOf(Ae);He>=0&&(S[He]=null,w[He].disconnect(Ae))}for(let ye=0;ye<Z.added.length;ye++){let Ae=Z.added[ye],He=S.indexOf(Ae);if(He===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=S.length){S.push(Ae),He=Ne;break}else if(S[Ne]===null){S[Ne]=Ae,He=Ne;break}if(He===-1)break}let se=w[He];se&&se.connect(Ae)}}function q(Z,ye){ye===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ye.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ye=Z.near,Ae=Z.far;m.texture!==null&&(m.depthNear>0&&(ye=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),N.near=I.near=D.near=ye,N.far=I.far=D.far=Ae,(R!==N.near||C!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,C=N.far),N.layers.mask=Z.layers.mask|6,D.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let He=Z.parent,se=N.cameras;q(N,He);for(let Ne=0;Ne<se.length;Ne++)q(se[Ne],He);N.projectionMatrix.copy(D.projectionMatrix),N.projectionMatrixInverse.copy(D.projectionMatrixInverse),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),te(Z,N,He)};function te(Z,ye,Ae){Ae===null?Z.matrix.copy(ye.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ye.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ye.projectionMatrix),Z.projectionMatrixInverse.copy(ye.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_o*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return v[Z]};let Y=null;function K(Z,ye){if(h=ye.getViewerPose(c||o),p=ye,h!==null){let Ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let He=!1;Ae.length!==N.cameras.length&&(N.cameras.length=0,He=!0);for(let ge=0;ge<Ae.length;ge++){let Ce=Ae[ge],re=null;if(f!==null)re=f.getViewport(Ce);else{let Te=d.getViewSubImage(u,Ce);re=Te.viewport,ge===0&&(e.setRenderTargetTextures(b,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(b))}let ie=E[ge];ie===void 0&&(ie=new Sn,ie.layers.enable(ge),ie.viewport=new qt,E[ge]=ie),ie.matrix.fromArray(Ce.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Ce.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(re.x,re.y,re.width,re.height),ge===0&&(N.matrix.copy(ie.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),He===!0&&N.cameras.push(ie)}let se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let ge=d.getDepthInformation(Ae[0]);ge&&ge.isValid&&ge.texture&&m.init(ge,s.renderState)}if(se&&se.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let ge=0;ge<Ae.length;ge++){let Ce=Ae[ge].camera;if(Ce){let re=v[Ce];re||(re=new Xa,v[Ce]=re);let ie=d.getCameraImage(Ce);re.sourceTexture=ie}}}}for(let Ae=0;Ae<w.length;Ae++){let He=S[Ae],se=w[Ae];He!==null&&se!==void 0&&se.update(He,ye,c||o)}Y&&Y(Z,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),p=null}let Se=new Yg;Se.setAnimationLoop(K),this.setAnimationLoop=function(Z){Y=Z},this.dispose=function(){}}},mE=new Mt,nv=new pt;nv.set(-1,0,0,0,1,0,0,0,1);function gE(t,e){function n(m,v){m.matrixAutoUpdate===!0&&m.updateMatrix(),v.value.copy(m.matrix)}function i(m,v){v.color.getRGB(m.fogColor.value,Wf(t)),v.isFog?(m.fogNear.value=v.near,m.fogFar.value=v.far):v.isFogExp2&&(m.fogDensity.value=v.density)}function s(m,v,y,M,b){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?r(m,v):v.isMeshLambertMaterial?(r(m,v),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(r(m,v),d(m,v)):v.isMeshPhongMaterial?(r(m,v),h(m,v),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(r(m,v),u(m,v),v.isMeshPhysicalMaterial&&f(m,v,b)):v.isMeshMatcapMaterial?(r(m,v),p(m,v)):v.isMeshDepthMaterial?r(m,v):v.isMeshDistanceMaterial?(r(m,v),g(m,v)):v.isMeshNormalMaterial?r(m,v):v.isLineBasicMaterial?(o(m,v),v.isLineDashedMaterial&&a(m,v)):v.isPointsMaterial?l(m,v,y,M):v.isSpriteMaterial?c(m,v):v.isShadowMaterial?(m.color.value.copy(v.color),m.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(m,v){m.opacity.value=v.opacity,v.color&&m.diffuse.value.copy(v.color),v.emissive&&m.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(m.map.value=v.map,n(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,n(v.alphaMap,m.alphaMapTransform)),v.bumpMap&&(m.bumpMap.value=v.bumpMap,n(v.bumpMap,m.bumpMapTransform),m.bumpScale.value=v.bumpScale,v.side===hn&&(m.bumpScale.value*=-1)),v.normalMap&&(m.normalMap.value=v.normalMap,n(v.normalMap,m.normalMapTransform),m.normalScale.value.copy(v.normalScale),v.side===hn&&m.normalScale.value.negate()),v.displacementMap&&(m.displacementMap.value=v.displacementMap,n(v.displacementMap,m.displacementMapTransform),m.displacementScale.value=v.displacementScale,m.displacementBias.value=v.displacementBias),v.emissiveMap&&(m.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,m.emissiveMapTransform)),v.specularMap&&(m.specularMap.value=v.specularMap,n(v.specularMap,m.specularMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);let y=e.get(v),M=y.envMap,b=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(mE.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nv),m.reflectivity.value=v.reflectivity,m.ior.value=v.ior,m.refractionRatio.value=v.refractionRatio),v.lightMap&&(m.lightMap.value=v.lightMap,m.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,m.lightMapTransform)),v.aoMap&&(m.aoMap.value=v.aoMap,m.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,m.aoMapTransform))}function o(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,v.map&&(m.map.value=v.map,n(v.map,m.mapTransform))}function a(m,v){m.dashSize.value=v.dashSize,m.totalSize.value=v.dashSize+v.gapSize,m.scale.value=v.scale}function l(m,v,y,M){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.size.value=v.size*y,m.scale.value=M*.5,v.map&&(m.map.value=v.map,n(v.map,m.uvTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,n(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function c(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.rotation.value=v.rotation,v.map&&(m.map.value=v.map,n(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,n(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function h(m,v){m.specular.value.copy(v.specular),m.shininess.value=Math.max(v.shininess,1e-4)}function d(m,v){v.gradientMap&&(m.gradientMap.value=v.gradientMap)}function u(m,v){m.metalness.value=v.metalness,v.metalnessMap&&(m.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,m.metalnessMapTransform)),m.roughness.value=v.roughness,v.roughnessMap&&(m.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,m.roughnessMapTransform)),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)}function f(m,v,y){m.ior.value=v.ior,v.diffuseRoughness>0&&(m.diffuseRoughness.value=v.diffuseRoughness,v.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=v.diffuseRoughnessMap,n(v.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),v.sheen>0&&(m.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),m.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(m.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,m.sheenColorMapTransform)),v.sheenRoughnessMap&&(m.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,m.sheenRoughnessMapTransform))),v.clearcoat>0&&(m.clearcoat.value=v.clearcoat,m.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(m.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,m.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(m.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===hn&&m.clearcoatNormalScale.value.negate())),v.dispersion>0&&(m.dispersion.value=v.dispersion),v.retroreflectivity>0&&(m.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(m.iridescence.value=v.iridescence,m.iridescenceIOR.value=v.iridescenceIOR,m.iridescenceThicknessMinimum.value=v.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=v.iridescenceThicknessMaximum,v.iridescenceMap&&(m.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,m.iridescenceMapTransform)),v.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),v.transmission>0&&(m.transmission.value=v.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),v.transmissionMap&&(m.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,m.transmissionMapTransform)),m.thickness.value=v.thickness,v.thicknessMap&&(m.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=v.attenuationDistance,m.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(m.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(m.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=v.specularIntensity,m.specularColor.value.copy(v.specularColor),v.specularColorMap&&(m.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,m.specularColorMapTransform)),v.specularIntensityMap&&(m.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,v){v.matcap&&(m.matcap.value=v.matcap)}function g(m,v){let y=e.get(v).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vE(t,e,n,i){let s={},r={};function o(y,M){let b=M.program;i.uniformBlockBinding(y,b,s[y.id])}function a(y,M){let b=s[y.id];b===void 0&&(p(y),b=l(y),s[y.id]=b,y.addEventListener("dispose",m));let w=M.program;i.updateUBOMapping(y,w);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let M=t.createBuffer(),b=y.__size,w=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,w),t.bindBuffer(t.UNIFORM_BUFFER,null),M}function c(y){let M=s[y.id],b=y.uniforms,w=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let S=0,x=b.length;S<x;S++){let _=b[S];if(Array.isArray(_))for(let L=0,D=_.length;L<D;L++)h(_[L],S,L,w);else h(_,S,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,M,b,w){if(u(y,M,b,w)===!0){let S=y.__offset,x=y.value;if(Array.isArray(x)){let _=0;for(let L=0;L<x.length;L++){let D=x[L],I=g(D,!0);d(D,y.__data,_),_+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,y.__data)}}function d(y,M,b){typeof y=="number"||typeof y=="boolean"?M[b]=y:y.isMatrix3?(M[b]=y.elements[0],M[b+1]=y.elements[1],M[b+2]=y.elements[2],M[b+3]=0,M[b+4]=y.elements[3],M[b+5]=y.elements[4],M[b+6]=y.elements[5],M[b+7]=0,M[b+8]=y.elements[6],M[b+9]=y.elements[7],M[b+10]=y.elements[8],M[b+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-b),b):y.toArray(M,b)}function u(y,M,b,w){let S=y.value,x=M+"_"+b;if(Array.isArray(S)){w[x]===void 0&&(w[x]=[]);let _=w[x],L=!1;for(let D=0;D<S.length;D++)f(S[D],_,D)===!0&&(L=!0);return L}return f(S,w,x)}function f(y,M,b){if(M[b]===void 0)return typeof y=="number"||typeof y=="boolean"?M[b]=y:ArrayBuffer.isView(y)?M[b]=y.slice():M[b]=y.clone(),!0;{let w=M[b];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return M[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function p(y){let M=y.uniforms,b=0,w=16;for(let x=0,_=M.length;x<_;x++){let L=Array.isArray(M[x])?M[x]:[M[x]];for(let D=0,I=L.length;D<I;D++){let E=L[D],N=Array.isArray(E.value)?E.value:[E.value],R=Array.isArray(M[x])||Array.isArray(E.value),C=b;for(let H=0,ee=N.length;H<ee;H++){let q=N[H],te=g(q,R),Y=b%w,K=Y%te.boundary,Se=Y+K;b+=K,Se!==0&&w-Se<te.storage&&(b+=w-Se),H===0&&(C=b),b+=te.storage}let U=E.type==="int"?Int32Array:E.type==="uint"?Uint32Array:Float32Array;E.__data=new U((b-C)/Float32Array.BYTES_PER_ELEMENT),E.__offset=C}}let S=b%w;return S>0&&(b+=w-S),y.__size=b,y.__cache={},this}function g(y,M){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){let M=y.target;M.removeEventListener("dispose",m),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function v(){for(let y in s)t.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:v}}var xE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function yE(){return Bi===null&&(Bi=new Mr(xE,16,16,Hs,Mi),Bi.name="DFG_LUT",Bi.minFilter=xn,Bi.magFilter=xn,Bi.wrapS=Di,Bi.wrapT=Di,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var lu=class{constructor(e={}){let{canvas:n=dg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Jn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=f,m=new Set([Eh,Th,Sh]),v=new Set([Jn,bi,Oo,Ir,bh,Mh]),y=new Uint32Array(4),M=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},w=null,S=null,x=[],_=[],L=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,I=!1,E=null,N=null,R=null,C=null;this._outputColorSpace=cn;let U=0,H=0,ee=null,q=-1,te=null,Y=new qt,K=new qt,Se=null,Z=new Ke(0),ye=0,Ae=n.width,He=n.height,se=1,Ne=null,fe=null,ge=new qt(0,0,Ae,He),Ce=new qt(0,0,Ae,He),re=!1,ie=new wr,Te=new Yc,Ie=!1,_e=!1,oe=new Mt,Oe=new z,ze=new qt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function nt(){return ee===null?se:1}let W=i;function Le(k,$){return n.getContext(k,$)}let Ue,Ze,O,ne,j,ve,P,T,V,ce,Q,me,De,ae,de,Pe,G,ue,he,we,Ee,Re,be;try{let k={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Ge,!1),n.addEventListener("webglcontextrestored",Je,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),W===null){let $="webgl2";if(W=Le($,k),W===null)throw Le($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(k){throw n.removeEventListener("webglcontextlost",Ge,!1),n.removeEventListener("webglcontextrestored",Je,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),ut("WebGLRenderer: "+k.message),k}function ke(){Ue=new PS(W),Ue.init(),Ee=new dE(W,Ue),Ze=new yS(W,Ue,e,Ee),O=new hE(W,Ue),Ze.reversedDepthBuffer&&u&&O.buffers.depth.setReversed(!0),N=W.createFramebuffer(),R=W.createFramebuffer(),C=W.createFramebuffer(),ne=new DS(W),j=new KT,ve=new uE(W,Ue,O,j,Ze,Ee,ne),P=new CS(D),T=new kb(W),Re=new vS(W,T),V=new IS(W,T,ne,Re),ce=new kS(W,V,T,Re,ne),ue=new NS(W,Ze,ve),de=new _S(j),Q=new ZT(D,P,Ue,Ze,Re,de),me=new gE(D,j),De=new jT,ae=new sE(Ue),G=new gS(D,P,O,ce,p,l),Pe=new cE(D,ce,Ze),be=new vE(W,ne,Ze,O),he=new xS(W,Ue,ne),we=new LS(W,Ue,ne),ne.programs=Q.programs,D.capabilities=Ze,D.extensions=Ue,D.properties=j,D.renderLists=De,D.shadowMap=Pe,D.state=O,D.info=ne}g!==Jn&&(L=new US(g,n.width,n.height,a,s,r));let xe=new lp(D,W);this.xr=xe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let k=Ue.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=Ue.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(k){k!==void 0&&(se=k,this.setSize(Ae,He,!1))},this.getSize=function(k){return k.set(Ae,He)},this.setSize=function(k,$,pe=!0){if(xe.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=k,He=$,n.width=Math.floor(k*se),n.height=Math.floor($*se),pe===!0&&(n.style.width=k+"px",n.style.height=$+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,k,$)},this.getDrawingBufferSize=function(k){return k.set(Ae*se,He*se).floor()},this.setDrawingBufferSize=function(k,$,pe){Ae=k,He=$,se=pe,n.width=Math.floor(k*pe),n.height=Math.floor($*pe),this.setViewport(0,0,k,$)},this.setEffects=function(k){if(g===Jn){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let $=0;$<k.length;$++)if(k[$].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(Y)},this.getViewport=function(k){return k.copy(ge)},this.setViewport=function(k,$,pe,le){k.isVector4?ge.set(k.x,k.y,k.z,k.w):ge.set(k,$,pe,le),O.viewport(Y.copy(ge).multiplyScalar(nt()).round())},this.getScissor=function(k){return k.copy(Ce)},this.setScissor=function(k,$,pe,le){k.isVector4?Ce.set(k.x,k.y,k.z,k.w):Ce.set(k,$,pe,le),O.scissor(K.copy(Ce).multiplyScalar(nt()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(k){O.setScissorTest(re=k)},this.setOpaqueSort=function(k){Ne=k},this.setTransparentSort=function(k){fe=k},this.getClearColor=function(k){return k.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(k=!0,$=!0,pe=!0){let le=0;if(k){let J=!1;if(ee!==null){let We=ee.texture.format;J=m.has(We)}if(J){let We=ee.texture.type,je=v.has(We),Ve=G.getClearColor(),Ye=G.getClearAlpha(),it=Ve.r,ht=Ve.g,Tt=Ve.b;je?(y[0]=it,y[1]=ht,y[2]=Tt,y[3]=Ye,W.clearBufferuiv(W.COLOR,0,y)):(M[0]=it,M[1]=ht,M[2]=Tt,M[3]=Ye,W.clearBufferiv(W.COLOR,0,M))}else le|=W.COLOR_BUFFER_BIT}$&&(le|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),E=k},this.dispose=function(){n.removeEventListener("webglcontextlost",Ge,!1),n.removeEventListener("webglcontextrestored",Je,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),G.dispose(),De.dispose(),ae.dispose(),ve.dispose(),j.dispose(),P.dispose(),ce.dispose(),V.dispose(),Re.dispose(),be.dispose(),Q.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Mn),xe.removeEventListener("sessionend",zt),Vn.stop()};function Ge(k){k.preventDefault(),La("WebGLRenderer: Context Lost."),I=!0}function Je(){La("WebGLRenderer: Context Restored."),I=!1;let k=ne.autoReset,$=Pe.enabled,pe=Pe.autoUpdate,le=Pe.needsUpdate,J=Pe.type;ke(),ne.autoReset=k,Pe.enabled=$,Pe.autoUpdate=pe,Pe.needsUpdate=le,Pe.type=J}function Fe(k){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function rt(k){let $=k.target;$.removeEventListener("dispose",rt),xt($)}function xt(k){Dt(k),j.remove(k)}function Dt(k){let $=j.get(k).programs;$!==void 0&&($.forEach(function(pe){Q.releaseProgram(pe)}),k.isShaderMaterial&&Q.releaseShaderCache(k))}this.renderBufferDirect=function(k,$,pe,le,J,We){$===null&&($=$e);let je=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ve=aa(k,$,pe,le,J);O.setMaterial(le,je);let Ye=pe.index,it=1;if(le.wireframe===!0){if(Ye=V.getWireframeAttribute(pe),Ye===void 0)return;it=2}let ht=pe.drawRange,Tt=pe.attributes.position,tt=ht.start*it,Et=(ht.start+ht.count)*it;We!==null&&(tt=Math.max(tt,We.start*it),Et=Math.min(Et,(We.start+We.count)*it)),Ye!==null?(tt=Math.max(tt,0),Et=Math.min(Et,Ye.count)):Tt!=null&&(tt=Math.max(tt,0),Et=Math.min(Et,Tt.count));let Jt=Et-tt;if(Jt<0||Jt===1/0)return;Re.setup(J,le,Ve,pe,Ye);let Ft,kt=he;if(Ye!==null&&(Ft=T.get(Ye),kt=we,kt.setIndex(Ft)),J.isMesh)le.wireframe===!0?(O.setLineWidth(le.wireframeLinewidth*nt()),kt.setMode(W.LINES)):kt.setMode(W.TRIANGLES);else if(J.isLine){let rn=le.linewidth;rn===void 0&&(rn=1),O.setLineWidth(rn*nt()),J.isLineSegments?kt.setMode(W.LINES):J.isLineLoop?kt.setMode(W.LINE_LOOP):kt.setMode(W.LINE_STRIP)}else J.isPoints?kt.setMode(W.POINTS):J.isSprite&&kt.setMode(W.TRIANGLES);if(J.isBatchedMesh)if(Ue.get("WEBGL_multi_draw"))kt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let rn=J._multiDrawStarts,Qe=J._multiDrawCounts,wn=J._multiDrawCount,Pt=Ye?T.get(Ye).bytesPerElement:1,B=j.get(le).currentProgram.getUniforms();for(let Me=0;Me<wn;Me++)B.setValue(W,"_gl_DrawID",Me),kt.render(rn[Me]/Pt,Qe[Me])}else if(J.isInstancedMesh)kt.renderInstances(tt,Jt,J.count);else if(pe.isInstancedBufferGeometry){let rn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Qe=Math.min(pe.instanceCount,rn);kt.renderInstances(tt,Jt,Qe)}else kt.render(tt,Jt)};function Gt(k,$,pe,le){E!==null&&k.isNodeMaterial&&E.setObject(le,k),Ie===!0&&de.setState(k,pe,!1),k.transparent===!0&&k.side===yn&&k.forceSinglePass===!1?(k.side=hn,k.needsUpdate=!0,fr(k,$,le),k.side=zs,k.needsUpdate=!0,fr(k,$,le),k.side=yn):fr(k,$,le)}this.compile=function(k,$,pe=null){pe===null&&(pe=k),E!==null&&E.renderStart(k,$,pe),S=ae.get(pe),S.init($),_.push(S),pe.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),k!==pe&&k.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),E!==null&&E.updateLights(S.state.lightsArray),_e=this.localClippingEnabled,Ie=de.init(this.clippingPlanes,_e),Ie===!0&&de.setGlobalState(this.clippingPlanes,$),E!==null&&Pe.render(S.state.shadowsArray,pe,$);let le=new Set;return k.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let We=J.material;if(We)if(Array.isArray(We))for(let je=0;je<We.length;je++){let Ve=We[je];Gt(Ve,pe,$,J),le.add(Ve)}else Gt(We,pe,$,J),le.add(We)}),S=_.pop(),E!==null&&E.renderEnd(),le},this.compileAsync=function(k,$,pe=null){let le=this.compile(k,$,pe);return new Promise(J=>{function We(){if(le.forEach(function(je){let Ye=j.get(je).currentProgram;(Ye===void 0||Ye.isReady())&&le.delete(je)}),le.size===0){J(k);return}setTimeout(We,10)}Ue.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Nt=null;function nn(k){Nt&&Nt(k)}function Mn(){Vn.stop()}function zt(){Vn.start()}let Vn=new Yg;Vn.setAnimationLoop(nn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(k){Nt=k,xe.setAnimationLoop(k),k===null?Vn.stop():Vn.start()},xe.addEventListener("sessionstart",Mn),xe.addEventListener("sessionend",zt),this.render=function(k,$){if($!==void 0&&$.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;E!==null&&E.renderStart(k,$);let pe=xe.enabled===!0&&xe.isPresenting===!0,le=L!==null&&(ee===null||pe)&&L.begin(D,ee);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera($),$=xe.getCamera()),k.isScene===!0&&k.onBeforeRender(D,k,$,ee),S=ae.get(k,_.length),S.init($),S.state.textureUnits=ve.getTextureUnits(),_.push(S),oe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?Te.setFromArrayCamera($):ie.setFromProjectionMatrix(oe,oi,$.reversedDepth),_e=this.localClippingEnabled,Ie=de.init(this.clippingPlanes,_e),w=De.get(k,x.length),w.init(),x.push(w),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){let je=D.xr.getDepthSensingMesh();je!==null&&Ii(je,$,-1/0,D.sortObjects)}Ii(k,$,0,D.sortObjects),w.finish(),E!==null&&E.updateLights(S.state.lightsArray),D.sortObjects===!0&&w.sort(Ne,fe),et=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,et&&G.addToRenderList(w,k),this.info.autoReset===!0&&this.info.reset(),Ie===!0&&de.beginShadows();let J=S.state.shadowsArray;if(Pe.render(J,k,$),Ie===!0&&de.endShadows(),(le&&L.hasRenderPass())===!1){let je=w.opaque,Ve=w.transmissive;if(S.setupLights(),$.isArrayCamera){let Ye=$.cameras;if(Ve.length>0)for(let it=0,ht=Ye.length;it<ht;it++){let Tt=Ye[it];ns(je,Ve,k,Tt)}et&&G.render(k);for(let it=0,ht=Ye.length;it<ht;it++){let Tt=Ye[it];si(w,k,Tt,Tt.viewport)}}else Ve.length>0&&ns(je,Ve,k,$),et&&G.render(k),si(w,k,$)}ee!==null&&H===0&&(ve.updateMultisampleRenderTarget(ee),ve.updateRenderTargetMipmap(ee)),le&&L.end(D),k.isScene===!0&&k.onAfterRender(D,k,$),Re.resetDefaultState(),q=-1,te=null,_.pop(),_.length>0?(S=_[_.length-1],ve.setTextureUnits(S.state.textureUnits),Ie===!0&&de.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,E!==null&&E.renderEnd()};function Ii(k,$,pe,le){if(k.visible===!1)return;if(k.layers.test($.layers)){if(k.isGroup)pe=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update($);else if(k.isLight)S.pushLight(k),k.castShadow&&S.pushShadow(k);else if(k.isSprite){let je=$.isArrayCamera?Te:ie;if(!k.frustumCulled||k.intersectsFrustum(je)){le&&ze.setFromMatrixPosition(k.matrixWorld).applyMatrix4(oe);let Ve=ce.update(k),Ye=k.material;Ye.visible&&w.push(k,Ve,Ye,pe,ze.z,null,$)}}else if(k.isMesh||k.isLine||k.isPoints){let je=$.isArrayCamera?Te:ie;if(!k.frustumCulled||k.intersectsFrustum(je)){let Ve=ce.update(k),Ye=k.material;if(le&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),ze.copy(k.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ze.copy(Ve.boundingSphere.center)),ze.applyMatrix4(k.matrixWorld).applyMatrix4(oe)),Array.isArray(Ye)){let it=Ve.groups;for(let ht=0,Tt=it.length;ht<Tt;ht++){let tt=it[ht],Et=Ye[tt.materialIndex];Et&&Et.visible&&w.push(k,Ve,Et,pe,ze.z,tt,$)}}else Ye.visible&&w.push(k,Ve,Ye,pe,ze.z,null,$)}}}let We=k.children;for(let je=0,Ve=We.length;je<Ve;je++)Ii(We[je],$,pe,le)}function si(k,$,pe,le){let{opaque:J,transmissive:We,transparent:je}=k;S.setupLightsView(pe),Ie===!0&&de.setGlobalState(D.clippingPlanes,pe),le&&O.viewport(Y.copy(le)),J.length>0&&is(J,$,pe),We.length>0&&is(We,$,pe),je.length>0&&is(je,$,pe),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function ns(k,$,pe,le){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[le.id]===void 0){let tt=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[le.id]=new Zn(1,1,{generateMipmaps:!0,type:tt?Mi:Jn,minFilter:ps,samples:Math.max(4,Ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let We=S.state.transmissionRenderTarget[le.id],je=le.viewport||Y;We.setSize(je.z*D.transmissionResolutionScale,je.w*D.transmissionResolutionScale);let Ve=D.getRenderTarget(),Ye=D.getActiveCubeFace(),it=D.getActiveMipmapLevel();D.setRenderTarget(We),D.getClearColor(Z),ye=D.getClearAlpha(),ye<1&&D.setClearColor(16777215,.5),D.clear(),et&&G.render(pe);let ht=D.toneMapping;D.toneMapping=Fi;let Tt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),S.setupLightsView(le),Ie===!0&&de.setGlobalState(D.clippingPlanes,le),is(k,pe,le),ve.updateMultisampleRenderTarget(We),ve.updateRenderTargetMipmap(We),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Et=0,Jt=$.length;Et<Jt;Et++){let Ft=$[Et],{object:kt,geometry:rn,material:Qe,group:wn}=Ft;if(Qe.side===yn&&kt.layers.test(le.layers)){let Pt=Qe.side;Qe.side=hn,Qe.needsUpdate=!0,dr(kt,pe,le,rn,Qe,wn),Qe.side=Pt,Qe.needsUpdate=!0,tt=!0}}tt===!0&&(ve.updateMultisampleRenderTarget(We),ve.updateRenderTargetMipmap(We))}D.setRenderTarget(Ve,Ye,it),D.setClearColor(Z,ye),Tt!==void 0&&(le.viewport=Tt),D.toneMapping=ht}function is(k,$,pe){let le=$.isScene===!0?$.overrideMaterial:null;for(let J=0,We=k.length;J<We;J++){let je=k[J],{object:Ve,geometry:Ye,group:it}=je,ht=je.material;ht.allowOverride===!0&&le!==null&&(ht=le),Ve.layers.test(pe.layers)&&dr(Ve,$,pe,Ye,ht,it)}}function dr(k,$,pe,le,J,We){E!==null&&J.isNodeMaterial&&E.setObject(k,J),k.onBeforeRender(D,$,pe,le,J,We),k.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),J.onBeforeRender(D,$,pe,le,k,We),J.transparent===!0&&J.side===yn&&J.forceSinglePass===!1?(J.side=hn,J.needsUpdate=!0,D.renderBufferDirect(pe,$,le,J,k,We),J.side=zs,J.needsUpdate=!0,D.renderBufferDirect(pe,$,le,J,k,We),J.side=yn):D.renderBufferDirect(pe,$,le,J,k,We),k.onAfterRender(D,$,pe,le,J,We)}function ss(k){let $=0;for(let pe of k)pe.texture!==null&&$++;return $}function fr(k,$,pe){$.isScene!==!0&&($=$e);let le=j.get(k),J=S.state.lights,We=S.state.shadowsArray,je=J.state.version,Ve=Q.getParameters(k,J.state,We,$,pe,S.state.lightProbeGridArray),Ye=Q.getProgramCacheKey(Ve),it=le.programs;le.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?$.environment:null,le.fog=$.fog;let ht=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;le.envMap=P.get(k.envMap||le.environment,ht),le.envMapRotation=le.environment!==null&&k.envMap===null?$.environmentRotation:k.envMapRotation,it===void 0&&(k.addEventListener("dispose",rt),it=new Map,le.programs=it,le.programVariants=new Map);let Tt=it.get(Ye);if(Tt!==void 0){if(le.currentProgram===Tt&&le.lightsStateVersion===je)return pr(k,Ve),Tt}else Ve.uniforms=Q.getUniforms(k),E!==null&&k.isNodeMaterial&&E.build(k,pe,Ve),k.onBeforeCompile(Ve,D),Tt=Q.acquireProgram(Ve,Ye),it.set(Ye,Tt),le.uniforms=Ve.uniforms;let tt=le.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(tt.clippingPlanes=de.uniform),pr(k,Ve),le.needsLights=ca(k),le.lightsStateVersion=je,le.needsLights&&(tt.ambientLightColor.value=J.state.ambient,tt.lightProbe.value=J.state.probe,tt.sunLights.value=J.state.sun,tt.sunLightShadows.value=J.state.sunShadow,tt.directionalLights.value=J.state.directional,tt.directionalLightShadows.value=J.state.directionalShadow,tt.spotLights.value=J.state.spot,tt.spotLightShadows.value=J.state.spotShadow,tt.rectAreaLights.value=J.state.rectArea,tt.ltc_1.value=J.state.rectAreaLTC1,tt.ltc_2.value=J.state.rectAreaLTC2,tt.pointLights.value=J.state.point,tt.pointLightShadows.value=J.state.pointShadow,tt.hemisphereLights.value=J.state.hemi,tt.sunShadowMatrix.value=J.state.sunShadowMatrix,tt.sunShadowCascade.value=J.state.sunShadowCascade,tt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,tt.spotLightMatrix.value=J.state.spotLightMatrix,tt.spotLightMap.value=J.state.spotLightMap,tt.pointShadowMatrix.value=J.state.pointShadowMatrix),le.numLightProbeGrids=ss(S.state.lightProbeGridArray),le.currentProgram=Tt,le.uniformsList=null,Tt}function oa(k,$,pe,le,J){let We=j.get(k),je=We.currentProgram.id+","+le+","+J,Ve=We.programVariants.get(je);return Ve===void 0?(Ve=fr(k,$,pe),We.programVariants.set(je,Ve)):(We.currentProgram=Ve,We.uniformsList=null,We.outputColorSpace=le,We.toneMapping=J),Ve}function sn(k){if(k.uniformsList===null){let $=k.currentProgram.getUniforms();k.uniformsList=Fo.seqWithValue($.seq,k.uniforms)}return k.uniformsList}function pr(k,$){let pe=j.get(k);pe.outputColorSpace=$.outputColorSpace,pe.batching=$.batching,pe.batchingColor=$.batchingColor,pe.instancing=$.instancing,pe.instancingColor=$.instancingColor,pe.instancingMorph=$.instancingMorph,pe.skinning=$.skinning,pe.morphTargets=$.morphTargets,pe.morphNormals=$.morphNormals,pe.morphColors=$.morphColors,pe.morphTargetsCount=$.morphTargetsCount,pe.numClippingPlanes=$.numClippingPlanes,pe.numIntersection=$.numClipIntersection,pe.vertexAlphas=$.vertexAlphas,pe.vertexTangents=$.vertexTangents,pe.toneMapping=$.toneMapping}function aa(k,$,pe,le,J){$.isScene!==!0&&($=$e),ve.resetTextureUnits();let We=$.fog,je=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?$.environment:null,Ve=ee===null?D.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Rt.workingColorSpace,Ye=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,it=P.get(le.envMap||je,Ye),ht=le.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Tt=!!pe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),tt=!!pe.morphAttributes.position,Et=!!pe.morphAttributes.normal,Jt=!!pe.morphAttributes.color,Ft=Fi;le.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ft=D.toneMapping);let kt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,rn=kt!==void 0?kt.length:0,Qe=j.get(le),wn=S.state.lights;if(Ie===!0&&(_e===!0||k!==te)){let Ht=k===te&&le.id===q;de.setState(le,k,Ht)}let Pt=!1,B=!1;le.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==wn.state.version||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==it||le.fog===!0&&Qe.fog!==We||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==de.numPlanes||Qe.numIntersection!==de.numIntersection)||Qe.vertexAlphas!==ht||Qe.vertexTangents!==Tt||Qe.morphTargets!==tt||Qe.morphNormals!==Et||Qe.morphColors!==Jt||Qe.morphTargetsCount!==rn||Qe.numLightProbeGrids!==ss(S.state.lightProbeGridArray)?Pt=!0:(Qe.outputColorSpace!==Ve||Qe.toneMapping!==Ft)&&(B=!0):(Pt=!0,Qe.__version=le.version);let Me=Qe.currentProgram;(Pt===!0||B===!0)&&(Me=B===!0?oa(le,$,J,Ve,Ft):fr(le,$,J),E&&le.isNodeMaterial&&E.onUpdateProgram(le,Me,Qe));let Xe=!1,_t=!1,gt=!1,st=Me.getUniforms(),ct=Qe.uniforms;if(O.useProgram(Me.program)&&(Xe=!0,_t=!0,gt=!0),le.id!==q&&(q=le.id,_t=!0),Xe||te!==k){O.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),st.setValue(W,"projectionMatrix",k.projectionMatrix),st.setValue(W,"viewMatrix",k.matrixWorldInverse);let Xt=st.map.cameraPosition;Xt!==void 0&&Xt.setValue(W,Oe.setFromMatrixPosition(k.matrixWorld)),Ze.logarithmicDepthBuffer&&st.setValue(W,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&st.setValue(W,"isOrthographic",k.isOrthographicCamera===!0),te!==k&&(te=k,_t=!0,gt=!0)}if(Qe.needsLights&&(wn.state.sunShadowMap.length>0&&st.setValue(W,"sunShadowMap",wn.state.sunShadowMap,ve),wn.state.directionalShadowMap.length>0&&st.setValue(W,"directionalShadowMap",wn.state.directionalShadowMap,ve),wn.state.spotShadowMap.length>0&&st.setValue(W,"spotShadowMap",wn.state.spotShadowMap,ve),wn.state.pointShadowMap.length>0&&st.setValue(W,"pointShadowMap",wn.state.pointShadowMap,ve)),J.isSkinnedMesh){st.setOptional(W,J,"bindMatrix"),st.setOptional(W,J,"bindMatrixInverse");let Ht=J.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),st.setValue(W,"boneTexture",Ht.boneTexture,ve))}J.isBatchedMesh&&(st.setOptional(W,J,"batchingTexture"),st.setValue(W,"batchingTexture",J._matricesTexture,ve),st.setOptional(W,J,"batchingIdTexture"),st.setValue(W,"batchingIdTexture",J._indirectTexture,ve),st.setOptional(W,J,"batchingColorTexture"),J._colorsTexture!==null&&st.setValue(W,"batchingColorTexture",J._colorsTexture,ve));let Qt=pe.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&ue.update(J,pe,Me),(_t||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,st.setValue(W,"receiveShadow",J.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&$.environment!==null&&(ct.envMapIntensity.value=$.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=yE()),_t){if(st.setValue(W,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&la(ct,gt),We&&le.fog===!0&&me.refreshFogUniforms(ct,We),me.refreshMaterialUniforms(ct,le,se,He,S.state.transmissionRenderTarget[k.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let Ht=b,Xt=0;for(let gi of S.state.lightProbeGridArray)gi.texture!==null&&(Ht.textures[Xt]=gi.texture,Ht.min[Xt]=gi.boundingBox.min,Ht.max[Xt]=gi.boundingBox.max,Ht.resolution[Xt]=gi.resolution,Xt++);for(let gi in Ht)Ht[gi].length=Xt;ct.probesSH.value=Ht.textures,ct.probesMin.value=Ht.min,ct.probesMax.value=Ht.max,ct.probesResolution.value=Ht.resolution}Fo.upload(W,sn(Qe),ct,ve)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Fo.upload(W,sn(Qe),ct,ve),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&st.setValue(W,"center",J.center),st.setValue(W,"modelViewMatrix",J.modelViewMatrix),st.setValue(W,"normalMatrix",J.normalMatrix),st.setValue(W,"modelMatrix",J.matrixWorld),le.uniformsGroups!==void 0){let Ht=le.uniformsGroups;for(let Xt=0,gi=Ht.length;Xt<gi;Xt++){let ha=Ht[Xt];be.update(ha,Me),be.bind(ha,Me)}}return Me}function la(k,$){k.ambientLightColor.needsUpdate=$,k.lightProbe.needsUpdate=$,k.sunLights.needsUpdate=$,k.sunLightShadows.needsUpdate=$,k.directionalLights.needsUpdate=$,k.directionalLightShadows.needsUpdate=$,k.pointLights.needsUpdate=$,k.pointLightShadows.needsUpdate=$,k.spotLights.needsUpdate=$,k.spotLightShadows.needsUpdate=$,k.rectAreaLights.needsUpdate=$,k.hemisphereLights.needsUpdate=$}function ca(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(k,$,pe){let le=j.get(k);le.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),j.get(k.texture).__webglTexture=$,j.get(k.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:pe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,$){let pe=j.get(k);pe.__webglFramebuffer=$,pe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(k,$=0,pe=0){ee=k,U=$,H=pe;let le=null,J=!1,We=!1;if(k){let Ve=j.get(k);if(Ve.__useDefaultFramebuffer!==void 0){O.bindFramebuffer(W.FRAMEBUFFER,Ve.__webglFramebuffer),Y.copy(k.viewport),K.copy(k.scissor),Se=k.scissorTest,O.viewport(Y),O.scissor(K),O.setScissorTest(Se),q=-1;return}else if(Ve.__webglFramebuffer===void 0)ve.setupRenderTarget(k);else if(Ve.__hasExternalTextures)ve.rebindTextures(k,j.get(k.texture).__webglTexture,j.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let ht=k.depthTexture;if(Ve.__boundDepthTexture!==ht){if(ht!==null&&j.has(ht)&&(k.width!==ht.image.width||k.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(k)}}let Ye=k.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(We=!0);let it=j.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(it[$])?le=it[$][pe]:le=it[$],J=!0):k.samples>0&&ve.useMultisampledRTT(k)===!1?le=j.get(k).__webglMultisampledFramebuffer:Array.isArray(it)?le=it[pe]:le=it,Y.copy(k.viewport),K.copy(k.scissor),Se=k.scissorTest}else Y.copy(ge).multiplyScalar(se).floor(),K.copy(Ce).multiplyScalar(se).floor(),Se=re;if(pe!==0&&(le=N),O.bindFramebuffer(W.FRAMEBUFFER,le)&&O.drawBuffers(k,le),O.viewport(Y),O.scissor(K),O.setScissorTest(Se),J){let Ve=j.get(k.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ve.__webglTexture,pe)}else if(We){let Ve=$;for(let Ye=0;Ye<k.textures.length;Ye++){let it=j.get(k.textures[Ye]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ye,it.__webglTexture,pe,Ve)}}else if(k!==null&&pe!==0){let Ve=j.get(k.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ve.__webglTexture,pe)}q=-1};function mr(k){let $=j.get(k);return($.__readFormat!==k.format||$.__readType!==k.type)&&($.__readFormat=k.format,$.__readType=k.type,$.__formatReadable=Ze.textureFormatReadable(k.format),$.__typeReadable=Ze.textureTypeReadable(k.type)),$}this.readRenderTargetPixels=function(k,$,pe,le,J,We,je,Ve=0){if(!(k&&k.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=j.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&je!==void 0&&(Ye=Ye[je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye){O.bindFramebuffer(W.FRAMEBUFFER,Ye);try{let it=k.textures[Ve],ht=it.format,Tt=it.type;k.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ve);let tt=mr(it);if(tt.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=k.width-le&&pe>=0&&pe<=k.height-J&&W.readPixels($,pe,le,J,Ee.convert(ht),Ee.convert(Tt),We)}finally{let it=ee!==null?j.get(ee).__webglFramebuffer:null;O.bindFramebuffer(W.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(k,$,pe,le,J,We,je,Ve=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=j.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&je!==void 0&&(Ye=Ye[je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye)if($>=0&&$<=k.width-le&&pe>=0&&pe<=k.height-J){O.bindFramebuffer(W.FRAMEBUFFER,Ye);let it=k.textures[Ve],ht=it.format,Tt=it.type;k.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ve);let tt=mr(it);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Et),W.bufferData(W.PIXEL_PACK_BUFFER,We.byteLength,W.STREAM_READ),W.readPixels($,pe,le,J,Ee.convert(ht),Ee.convert(Tt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Jt=ee!==null?j.get(ee).__webglFramebuffer:null;O.bindFramebuffer(W.FRAMEBUFFER,Jt);let Ft=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await pg(W,Ft,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Et),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,We),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Et),W.deleteSync(Ft),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,$=null,pe=0){let le=Math.pow(2,-pe),J=Math.floor(k.image.width*le),We=Math.floor(k.image.height*le),je=$!==null?$.x:0,Ve=$!==null?$.y:0;ve.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,pe,0,0,je,Ve,J,We),O.unbindTexture()},this.copyTextureToTexture=function(k,$,pe=null,le=null,J=0,We=0){let je,Ve,Ye,it,ht,Tt,tt,Et,Jt,Ft=k.isCompressedTexture?k.mipmaps[We]:k.image;if(pe!==null)je=pe.max.x-pe.min.x,Ve=pe.max.y-pe.min.y,Ye=pe.isBox3?pe.max.z-pe.min.z:1,it=pe.min.x,ht=pe.min.y,Tt=pe.isBox3?pe.min.z:0;else{let st=Math.pow(2,-J);je=Math.floor(Ft.width*st),Ve=Math.floor(Ft.height*st),k.isDataArrayTexture?Ye=Ft.depth:k.isData3DTexture?Ye=Math.floor(Ft.depth*st):Ye=1,it=0,ht=0,Tt=0}le!==null?(tt=le.x,Et=le.y,Jt=le.z):(tt=0,Et=0,Jt=0);let kt=Ee.convert($.format),rn=Ee.convert($.type),Qe;$.isData3DTexture?(ve.setTexture3D($,0),Qe=W.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ve.setTexture2DArray($,0),Qe=W.TEXTURE_2D_ARRAY):(ve.setTexture2D($,0),Qe=W.TEXTURE_2D),O.activeTexture(W.TEXTURE0),O.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment);let wn=O.getParameter(W.UNPACK_ROW_LENGTH),Pt=O.getParameter(W.UNPACK_IMAGE_HEIGHT),B=O.getParameter(W.UNPACK_SKIP_PIXELS),Me=O.getParameter(W.UNPACK_SKIP_ROWS),Xe=O.getParameter(W.UNPACK_SKIP_IMAGES);O.pixelStorei(W.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(W.UNPACK_SKIP_PIXELS,it),O.pixelStorei(W.UNPACK_SKIP_ROWS,ht),O.pixelStorei(W.UNPACK_SKIP_IMAGES,Tt);let _t=k.isDataArrayTexture||k.isData3DTexture,gt=$.isDataArrayTexture||$.isData3DTexture;if(k.isDepthTexture){let st=j.get(k),ct=j.get($),Qt=j.get(st.__renderTarget),Ht=j.get(ct.__renderTarget);O.bindFramebuffer(W.READ_FRAMEBUFFER,Qt.__webglFramebuffer),O.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Xt=0;Xt<Ye;Xt++)_t&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,j.get(k).__webglTexture,J,Tt+Xt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,j.get($).__webglTexture,We,Jt+Xt)),W.blitFramebuffer(it,ht,it+je,ht+Ve,tt,Et,tt+je,Et+Ve,W.DEPTH_BUFFER_BIT,W.NEAREST);O.bindFramebuffer(W.READ_FRAMEBUFFER,null),O.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(J!==0||k.isRenderTargetTexture||j.has(k)){let st=j.get(k),ct=j.get($);O.bindFramebuffer(W.READ_FRAMEBUFFER,R),O.bindFramebuffer(W.DRAW_FRAMEBUFFER,C);for(let Qt=0;Qt<Ye;Qt++)_t?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.__webglTexture,J,Tt+Qt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,st.__webglTexture,J),gt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ct.__webglTexture,We,Jt+Qt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ct.__webglTexture,We),J!==0?W.blitFramebuffer(it,ht,it+je,ht+Ve,tt,Et,tt+je,Et+Ve,W.COLOR_BUFFER_BIT,W.NEAREST):gt?W.copyTexSubImage3D(Qe,We,tt,Et,Jt+Qt,it,ht,je,Ve):W.copyTexSubImage2D(Qe,We,tt,Et,it,ht,je,Ve);O.bindFramebuffer(W.READ_FRAMEBUFFER,null),O.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else gt?k.isDataTexture||k.isData3DTexture?W.texSubImage3D(Qe,We,tt,Et,Jt,je,Ve,Ye,kt,rn,Ft.data):$.isCompressedArrayTexture?W.compressedTexSubImage3D(Qe,We,tt,Et,Jt,je,Ve,Ye,kt,Ft.data):W.texSubImage3D(Qe,We,tt,Et,Jt,je,Ve,Ye,kt,rn,Ft):k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,We,tt,Et,je,Ve,kt,rn,Ft.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,We,tt,Et,Ft.width,Ft.height,kt,Ft.data):W.texSubImage2D(W.TEXTURE_2D,We,tt,Et,je,Ve,kt,rn,Ft);O.pixelStorei(W.UNPACK_ROW_LENGTH,wn),O.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(W.UNPACK_SKIP_PIXELS,B),O.pixelStorei(W.UNPACK_SKIP_ROWS,Me),O.pixelStorei(W.UNPACK_SKIP_IMAGES,Xe),We===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&W.generateMipmap(Qe),O.unbindTexture()},this.initRenderTarget=function(k){j.get(k).__webglFramebuffer===void 0&&ve.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?ve.setTextureCube(k,0):k.isData3DTexture?ve.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?ve.setTexture2DArray(k,0):ve.setTexture2D(k,0),O.unbindTexture()},this.resetState=function(){U=0,H=0,ee=null,O.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}};var X={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfterKillsSmoothie:3,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8,trainerShare:0,trainerShareSmoothie:.5,trainerShareBoss:.4},trainer:{health:130,scaleW:1.2,scaleH:1.1,runSpeed:6.2,turnRate:12,maxAlive:3,swingRange:1.6,swingSlack:.4,swingArc:120,windup:.5,lockTime:.15,swingTime:.3,recover:.8,swingGap:.6,damage:30,tobbleDamage:30,knockback:1.6,knockTime:.35,staggerTime:.8,preferDoc:.6,retargetTime:.4,repathTime:.5,avoidRadius:1.8,avoidWeight:1.5,stuckTime:.6,diveChance:.4,barkChance:.5},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4,barkMinShow:1.2,bashVolume:.6,revVolume:.35,cutVolume:.5,throwVolume:.45,clankVolume:.35,boomVolume:.7,saunaVolume:.4,reviveVolume:.4,tobbleShotVolume:.25,blastSize:2.5,blastTime:.35,executeShake:.05,cutGelEvery:.1,arcDot:.06},run:{fadeOut:.6,blackHold:.25,fadeIn:.6,gateReach:1.6,hoursTime:6,gateOpenTime:.8},boss:{health:4500,scale:2,crouchY:.5,headMult:2,phase2At:.66,phase3At:.33,popTime:.5,telegraphTime:1,burstTime:2.4,rate:5,damage:6,spread:2.5,aimLag:.25,muzzleUp:1.35,coverWaitMin:1.2,coverWaitMax:2.2,shiftTime:.8,lobEvery:2,lobWindup:1.2,lobFlight:1.5,lobRecover:.7,lobRadius:2.5,lobDamage:32,lobTobbleDamage:32,lobFalloff:.5,retreatSpeed:4.5,returnSpeed:4.5,minHide:2,fastTelegraph:.8,fastBurstTime:2,fastRate:7,fastWaitMin:.5,fastWaitMax:1.1,offerGap:.4},ending:{deathDelay:2.2,deskReach:2.6,holdTime:1,card1Time:2.2,card2Time:6,card3Time:3.4,skipLock:.7,finalLock:1.2}};function uu({step:t,render:e,before:n,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(g){if(!(g>0)||!Number.isFinite(g))return;n&&n(g),o+=g;let m=0;for(;o>=r&&m<s;)t(r),o-=r,m++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),g)}function d(g){if(c){try{l!==null&&h((g-l)/1e3)}catch(m){throw p(),m}l=g,c&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function f(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function p(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:f,stop:p}}var cp=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),_E={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},bE={0:"fire",2:"aim"},iv={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},sv={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},ME=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function hp(t){if(!t||typeof t.tagName!="string")return!1;let e=t.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!ME.has(String(t.type||"text").toLowerCase()):!!t.isContentEditable}function rv(t){return _E[t]||null}function ov(t){return bE[t]||null}function zo(){let t={};for(let e of cp)t[e]=!1;return t}function av(t,e,n=.15){let i=Math.hypot(t,e);if(i<n)return[0,0];let s=Math.min(1,(i-n)/(1-n))/i;return[t*s,e*s]}function wE(t){if(!t||!t.connected)return{ok:!1,reason:"none"};if(t.mapping!=="standard"||!t.buttons||t.buttons.length<16||!t.axes||t.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,n]=av(t.axes[0],t.axes[1]),[i,s]=av(t.axes[2],t.axes[3]),r=zo();for(let o in iv){let a=t.buttons[o];r[iv[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:n,lookX:i,lookY:s,held:r}}function SE(t){t.downCodes&&t.downCodes.clear(),t.downButtons&&t.downButtons.clear(),t.latched&&t.latched.clear(),t.held=t.held||{};for(let e of cp)t.held[e]=!1;for(let e in t.held)t.held[e]=!1;return t.lookDX=0,t.lookDY=0,t.lookX=0,t.lookY=0,t.moveX=0,t.moveY=0,t}function du(t){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:zo(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:n,downButtons:i,latched:s}=e,r="kbm",o="none",a=zo();t.tabIndex<0&&(t.tabIndex=0);let l=()=>document.pointerLockElement===t,c=()=>l()||document.activeElement===t;function h(){SE(e)}function d(w){if(hp(w.target))return;let S=rv(w.code);(S||w.code in sv)&&(c()&&(w.code==="Tab"||w.code==="Space")&&w.preventDefault(),r="kbm",!w.repeat&&!n.has(w.code)&&S&&s.add(S),n.add(w.code))}function u(w){n.delete(w.code)}function f(w){w.target===t&&t.focus();let S=ov(w.button);S&&(r="kbm",i.has(w.button)||s.add(S),i.add(w.button))}function p(w){i.delete(w.button)}function g(w){l()&&(r="kbm",e.lookDX+=w.movementX||0,e.lookDY+=w.movementY||0)}function m(w){!c()||!w.deltaY||(r="kbm",s.add(w.deltaY>0?"weaponNext":"weaponPrev"),w.preventDefault())}function v(w){w.preventDefault()}function y(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",p),window.addEventListener("blur",h),document.addEventListener("mousemove",g),document.addEventListener("pointerlockchange",y),t.addEventListener("mousedown",f),t.addEventListener("wheel",m,{passive:!1}),t.addEventListener("contextmenu",v);function M(){let w=[];try{w=navigator.getGamepads&&navigator.getGamepads()||[]}catch{w=[]}let S=null;for(let _ of w)if(_&&_.connected){S=_;break}let x=wE(S);return o=x.ok?S.id:x.reason==="none"?"none":"unrecognised controller",x}function b(){let w={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:zo(),pressed:zo()};e.lookDX=0,e.lookDY=0;for(let _ of n){let L=rv(_);L&&(w.held[L]=!0);let D=sv[_];D&&(w.moveX+=D[0],w.moveY+=D[1])}for(let _ of i){let L=ov(_);L&&(w.held[L]=!0)}let S=Math.hypot(w.moveX,w.moveY);S>1&&(w.moveX/=S,w.moveY/=S);for(let _ of s)w.pressed[_]=!0;s.clear();let x=M();if(x.ok){w.lookX=x.lookX,w.lookY=x.lookY;let _=x.moveX!==0||x.moveY!==0||x.lookX!==0||x.lookY!==0;for(let D of cp)x.held[D]&&(_=!0,w.held[D]=!0,a[D]||(w.pressed[D]=!0));a=x.held,w.moveX+=x.moveX,w.moveY+=x.moveY;let L=Math.hypot(w.moveX,w.moveY);L>1&&(w.moveX/=L,w.moveY/=L),_&&(r="pad")}else a=zo();return w}return{poll:b,requestLock(){try{let w=t.requestPointerLock&&t.requestPointerLock();w&&typeof w.catch=="function"&&w.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function cv(t,e,n=14){let i=t;return e>20?i-=.1:e<n&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var TE=2e3,lv=1e4,EE=8e4;function hv({startMs:t=0,scale:e=1}={}){let n=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-t<TE||(i+=Math.min(h,100),s++,s<60||i<1e3))return n;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=cv(n,u,Math.max(14,1.1*r));if(f>n){if(d<l)return n;o=d}else f<n&&(o!==null&&d-o<lv&&(a=a===0?lv:Math.min(a*2,EE),l=d+a),o=null);return n=f,n}return{sample:c,scale:()=>n}}var F=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var up={viewportHeight:{value:1080}};function Qn(t){t.getAttribute("normal")||t.computeVertexNormals();let e=t.getAttribute("position"),n=t.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=n.getX(l),h[1]+=n.getY(l),h[2]+=n.getZ(l)}let a=t.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new bt(new Float32Array(i*3),3),t.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=n.getX(l),d=n.getY(l),u=n.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,t}var AE=`
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
`,RE=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function CE({px:t=X.outlinePx,color:e=F.ink,outlineNormal:n=!1}={}){return new In({name:"outline",uniforms:{px:{value:t},inkColor:{value:new Ke(e)},viewportHeight:up.viewportHeight},defines:n?{USE_OUTLINE_NORMAL:""}:{},vertexShader:AE,fragmentShader:RE,side:hn})}function PE(){}var uv=new Map;function IE(t,e,n){let i=t+"|"+new Ke(e).getHexString()+"|"+n,s=uv.get(i);return s||(s=CE({px:t,color:e,outlineNormal:n}),uv.set(i,s)),s}function Tn(t,{px:e=X.outlinePx}={}){let n=!!t.geometry.getAttribute("outlineNormal"),i=IE(e,F.ink,n),s=new ot(t.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=PE,t.add(s),s}function dp(t,e){t.traverse(n=>{n.userData.isOutline&&(n.visible=e)})}function LE(t,e,n,i){let s=Math.max(1,Math.floor(t)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(n>0?n:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function fu(t,e){let n=new lu({canvas:t,context:e,antialias:!0,powerPreference:"high-performance"});n.outputColorSpace=cn;let i=hv({startMs:performance.now()});function s(){let o=LE(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return n.setPixelRatio(o.pixelRatio),n.setSize(o.width,o.height,!1),up.viewportHeight.value=t.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:n,resize:s,frameDone:r,scale:i.scale}}var xs={lightDir:{value:new z(...X.lightDir).normalize()},shadowTint:{value:new Ke(F.shadowTint)},bandEdge:{value:.15},shadowLift:{value:X.shadowLift}},DE=`
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
`,NE=`
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
`;function At({color:t="#ffffff",vertexColors:e=!1,shadowMix:n=.55,rim:i=.25}={}){return new In({name:"toon",uniforms:{baseColor:{value:new Ke(t)},shadowMix:{value:n},rim:{value:i},lightDir:xs.lightDir,shadowTint:xs.shadowTint,bandEdge:xs.bandEdge,shadowLift:xs.shadowLift},vertexShader:DE,fragmentShader:NE,vertexColors:e})}var kE=400,OE=[-.45,.22,-1],UE=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,FE=`
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
`;function pu({planetDir:t=OE}={}){let e=r=>new Ke(r),n=new In({name:"sky",uniforms:{deep:{value:e(F.nebulaDeep)},hot:{value:e(F.nebulaHot)},pink:{value:e(F.hotPink)},lilac:{value:e(F.lilac)},ink:{value:e(F.ink)},planetColor:{value:e(F.planet)},shadowTint:xs.shadowTint,shadowLift:xs.shadowLift,bandEdge:xs.bandEdge,lightDir:xs.lightDir,planetDir:{value:new z(...t).normalize()},time:{value:0}},vertexShader:UE,fragmentShader:FE,side:hn,depthWrite:!1}),i=new ot(new $t(kE,48,24),n);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){n.uniforms.time.value=r}return{mesh:i,update:s}}function Ot(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},o={},a=t[0].morphTargetsRelative,l=new It;l.morphTargetsRelative=a;let c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0,f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==t[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let f=t[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=dv(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][u]);let p=dv(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function dv(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new e(r),a=new bt(o,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<n;p++){let g=h.getComponent(u,p);a.setComponent(u+d,p,g)}}else o.set(h.array,l);l+=h.count*n}return s!==void 0&&(a.gpuType=s),a}function pv(t,e=1e-4){e=Math.max(e,Number.EPSILON);let n={},i=t.getIndex(),s=t.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(t.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=e*.5,f=Math.log10(1/e),p=Math.pow(10,f),g=u*p;for(let v=0;v<r;v++){let y=i?i.getX(v):v,M="";for(let b=0,w=a.length;b<w;b++){let S=a[b],x=t.getAttribute(S),_=x.itemSize;for(let L=0;L<_;L++)M+=`${Math.trunc(x[d[L]](y)*p+g)},`}M in n?h.push(n[M]):(l.push(y),n[M]=o,h.push(o),o++)}let m=t.clone();for(let v in t.attributes)m.setAttribute(v,fv(t.attributes[v],l,c));for(let v in t.morphAttributes)m.morphAttributes[v]=t.morphAttributes[v].map(y=>fv(y,l,c));return m.setIndex(h),m}function fv(t,e,n=new Map){let i=t.isInterleavedBufferAttribute,s=i?t.data:t,r=i?s.stride:t.itemSize,o=i?n.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new t.constructor(l,t.itemSize,t.normalized,t.meshPerAttribute),o.setUsage(s.usage),i&&n.set(s,o)}let a=i?new t.constructor(o,t.itemSize,t.offset,t.normalized):o;return a.name=t.name,i||(a.gpuType=t.gpuType),a}function Ho(t){let e=t>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function mv(t,e,n=.03,i=.04){let s=t.getAttribute("position"),r=t.getAttribute("normal");t.computeBoundingBox();let o=t.boundingBox,a=o.getSize(new z),l=o.getCenter(new z),c=a.length(),h=Ho(e*7919+13>>>0),d=[];for(let v=0;v<8;v++)d.push(h()*2-1);let u=Math.min(n*c,i)*.99/Math.sqrt(3),f=(v,y)=>y>1e-9?2*v/y:0,p=[a.x,a.y,a.z].map(v=>v>1e-9?2/v:0),g=new pt,m=new z;for(let v=0;v<s.count;v++){let y=f(s.getX(v)-l.x,a.x),M=f(s.getY(v)-l.y,a.y),b=f(s.getZ(v)-l.z,a.z),w=(M+1)/2,S=(d[0]*M+d[1]*y*M)/2,x=(d[2]*y+d[3]*b)/2*w,_=(d[4]*M+d[5]*b*M)/2;if(r){let L=[d[1]*M/2,(d[0]+d[1]*y)/2,0],D=[d[2]/2*w,(d[2]*y+d[3]*b)/2*.5,d[3]/2*w],I=[0,(d[4]+d[5]*b)/2,d[5]*M/2];g.set(1+u*L[0]*p[0],u*L[1]*p[1],u*L[2]*p[2],u*D[0]*p[0],1+u*D[1]*p[1],u*D[2]*p[2],u*I[0]*p[0],u*I[1]*p[1],1+u*I[2]*p[2]),g.invert().transpose(),m.set(r.getX(v),r.getY(v),r.getZ(v)).applyMatrix3(g).normalize(),r.setXYZ(v,m.x,m.y,m.z)}s.setXYZ(v,s.getX(v)+u*S,s.getY(v)+u*x,s.getZ(v)+u*_)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),t.computeBoundingBox(),t.computeBoundingSphere(),t}var fp=null;function BE(){return fp||(fp=At({vertexColors:!0})),fp}var mp=(t,e,n)=>new Ke(t).lerp(new Ke(e),n),gp=(t,e=.3)=>mp(t,"#ffffff",e),mu=(t,e=.2)=>mp(t,F.shadowTint,e),gv=new Mt,vv=new Un,xv=new Wn,zE=new z,HE=new z;function Gs(t=1,e=.02,n="prop"){let i=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let p=u.wonk===void 0?e:u.wonk;p>0&&mv(f,t*131+s,p),s++;let g=f.getAttribute("normal"),m=new Float32Array(g.count*3);for(let v=0;v<g.count;v++){let y=typeof d=="function"?d(g.getX(v),g.getY(v),g.getZ(v)):d;m[v*3]=y.r,m[v*3+1]=y.g,m[v*3+2]=y.b}return f.setAttribute("color",new bt(m,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),xv.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),vv.setFromEuler(xv),gv.compose(zE.set(u.x||0,u.y||0,u.z||0),vv,HE.set(1,1,1)),f.applyMatrix4(gv),i.push(f),f}function o(h,d={}){let u=d.top||gp(h),f=d.side||mu(h,.22),p=mu(h,.4),g=new Ke(h);return(m,v,y)=>v>.5?u:v<-.5?p:Math.abs(m)>.5?f:y>0?g:p}function a(h,d,u,f,p={}){return r(new mt(h,d,u),o(f,p),p)}function l(h,d,u,f,p,g,m,v={}){return a(d-h,f-u,g-p,m,{...v,x:(h+d)/2,y:(u+f)/2,z:(p+g)/2})}function c(h=0){let d=Ot(i,!1);if(!d)throw new Error(`${n}: parts have different attributes and cannot be merged`);return h>0&&mv(d,t,h),Qn(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function Vs(t){let e=new ft,n=new ot(t,BE());return Tn(n),e.add(n),e}var ys=t=>()=>new Ke(t);function gu({w:t,d:e,tile:n=1,colors:i=[F.cream,F.tealLight]}){let s=Gs(1,0,"floor");s.span(-t/2,t/2,-.15,-.002,-e/2,e/2,F.lilac,{top:new Ke(F.lilac)});let o=Math.round(t/n),a=Math.round(e/n);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new ks(n,n);h.rotateX(-Math.PI/2),s.add(h,ys(i[(l+c)%2]),{wonk:0,x:-t/2+(l+.5)*n,y:0,z:-e/2+(c+.5)*n})}return Vs(s.finish())}function vp({w:t,h:e,color:n=F.cream,stripe:i=F.hotPink,opening:s=null,seed:r=2}){let o=Gs(r,0,"wall"),a=.2,l=a/2,c=-t/2,h=t/2,d=-.3,u=new Co;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,e),u.lineTo(c,e),u.closePath(),s){let v=new Sr,y=s.x-s.w/2,M=s.x+s.w/2;v.moveTo(y,s.y),v.lineTo(y,s.y+s.h),v.lineTo(M,s.y+s.h),v.lineTo(M,s.y),v.closePath(),u.holes.push(v)}let f=new il(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(n),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,F.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,F.teal);let p=.5,g=.8;return s&&s.y<g&&s.y+s.h>p?(o.span(c,s.x-s.w/2,p,g,l-.01,l+.03,i),o.span(s.x+s.w/2,h,p,g,l-.01,l+.03,i)):o.span(c,h,p,g,l-.01,l+.03,i),Vs(o.finish(.006))}function GE(t,e,n,i){let s=m=>Math.min(2048,Math.max(64,Math.round(m))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=t.split(" "),d=[[t]];for(let m=1;m<h.length;m++)d.push([h.slice(0,m).join(" "),h.slice(m).join(" ")]);let u=null;for(let m of d){let v=Math.max(...m.map(M=>l.measureText(M).width)),y=Math.min(r*.88*100/v,o*.8/(m.length*1.08));(!u||y>u.size)&&(u={lines:m,size:y})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=n,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,p=o/2-(u.lines.length-1)*f/2;u.lines.forEach((m,v)=>{let y=p+v*f;l.fillStyle=F.ink,l.fillText(m,r/2+u.size*.05,y+u.size*.06),l.fillStyle=n,l.fillText(m,r/2,y)});let g=new Va(a);return g.colorSpace=cn,g.anisotropy=8,g}function _s({text:t,w:e,h:n,bg:i=F.hotPink,fg:s=F.cream,tilt:r=.04,seed:o=3}){let c=Gs(o,0,"sign");c.box(e,n,.14,s,{wonk:0});let h=Vs(c.finish()),d=e-.14*2,u=n-.14*2,f=new ot(new ks(d,u),new an({map:GE(t,i,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function yv({w:t,h:e,seed:n=4}){let i=Gs(n,.012,"window"),s=.15,r=.34;return i.span(-t/2,-t/2+s,0,e,-r/2,r/2,F.teal),i.span(t/2-s,t/2,0,e,-r/2,r/2,F.teal),i.span(-t/2+s,t/2-s,e-s,e,-r/2,r/2,F.teal),i.span(-t/2+s,t/2-s,0,s,-r/2,r/2,F.teal),i.span(-t/2-.2,t/2+.2,-.08,.06,-r/2,r/2+.28,F.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,F.cream),i.span(-t/2+s,t/2-s,e/2-.04,e/2+.04,-.04,.04,F.cream),Vs(i.finish(.006))}function bl(t,e,n,i,s,r){let o=new Ar(.16,.05,8,20);t.add(o,ys(F.planet),{wonk:.04,x:e,y:n,z:i,rx:-Math.PI/2+s,ry:r})}function _v({w:t,h:e,name:n,signColor:i=F.hotPink,seed:s=5}){let r=Gs(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=mp(F.glorpPurple,F.ink,.7);r.span(-t/2+a,t/2-a,0,c,-o/2,-o/2+.1,h),r.span(-t/2+a,t/2-a,1.15,1.22,-o/2,-o/2+.4,F.lilac);for(let v of[-1,1]){let y=v*(t/2-a/2);r.span(y-a/2,y+a/2,0,c,-o/2,o/2,F.lilac),r.span(y-a/2-.04,y+a/2+.04,0,.3,-o/2,o/2+.04,F.teal)}r.span(-t/2,t/2,c,l,-o/2,o/2,F.teal);let d=t-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,F.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,F.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,F.cream),bl(r,-.9,1.01,.4,.1,.4),bl(r,-.2,1.01,.5,-.1,-.3),bl(r,.6,1.01,.38,.12,.9),bl(r,1.2,1.01,.52,0,.1);let u=10,f=(t-.1)/u,p=.42;for(let v=0;v<u;v++){let y=v%2?F.cream:i,M=-t/2+.05+(v+.5)*f;r.box(f,.08,.95,y,{x:M,y:c-.02,z:o/2+.35,rx:p,top:gp(y,.2)}),r.box(f,.22,.06,y,{x:M,y:c-.24,z:o/2+.8,rx:.1})}let g=Vs(r.finish(.006)),m=_s({text:n,w:t-.7,h:1.15,bg:i,fg:F.cream,seed:s+1});return m.position.set(0,c+.7,o/2+.01),g.add(m),g}function bv({w:t=2,d:e=1,h:n=.9,color:i=F.teal,seed:s=7}={}){let r=Gs(s,.018,"kiosk");r.span(-t/2+.03,t/2-.03,0,.16,-e/2+.03,e/2-.03,F.lilac),r.span(-t/2,t/2,.16,n-.08,-e/2,e/2,i),r.span(-t/2-.07,t/2+.07,n-.08,n,-e/2-.07,e/2+.07,F.cream);let o=4,a=(t-.3)/o;for(let c=0;c<o;c++){let h=c%2?F.cream:F.hotPink;r.box(a-.04,n-.45,.05,h,{x:-t/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,F.glorpPurple,{x:-.55,y:n+.14,z:-.1}),r.box(.3,.14,.04,F.gel,{x:-.55,y:n+.28,z:.07,rx:-.5,wonk:0}),bl(r,.45,n+.06,.05,.1,.5);let l=Vs(r.finish(.006));return l.userData.footprint={w:t+.14,d:e+.14},l}function Mv({w:t=1.8,seed:e=11}={}){let n=Gs(e,.02,"bench"),i=.5;n.box(t,.1,i,F.lilac,{y:.46}),n.box(t,.42,.08,F.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])n.box(.1,.46,i-.06,F.teal,{x:r*(t/2-.2),y:.23}),n.box(.08,.5,.08,F.teal,{x:r*(t/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=Vs(n.finish(.006));return s.userData.footprint={w:t,d:i},s}function VE(t,e,n){let i=new mt(.035,t,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+t/2)/t;s.setXYZ(r,s.getX(r)+n*o*o,s.getY(r)+t/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function wv({seed:t=21}={}){let e=Gs(t,.02,"planter"),n=Ho(t);e.add(new Wt(.42,.32,.55,16),ys(F.teal),{y:.275}),e.add(new Wt(.47,.44,.12,16),ys(F.hotPink),{y:.6}),e.add(new Wt(.4,.4,.04,16),ys(mu(F.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=mu(F.planet,.15);for(let l=0;l<6;l++)e.add(new Wt(.06-l*.004,.07-l*.004,.34,8),ys(l%2?gp(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+n()*.3,h=l%2?.95+n()*.25:1.45+n()*.25,d=new Mt().makeTranslation(i,s,0).multiply(new Mt().makeRotationY(c)).multiply(new Mt().makeRotationZ(-h));e.add(VE(.95,.24,l%2?.22:.4),ys(l%2?F.gel:F.teal),{m:d,wonk:.03})}e.add(new $t(.1,10,8),ys(F.planet),{x:i,y:s-.05,z:.08}),e.add(new $t(.1,10,8),ys(F.planet),{x:i+.07,y:s-.1,z:-.07});let a=Vs(e.finish());return a.userData.footprint={w:.95,d:.95},a}var pp=null;function vu({rx:t,rz:e,opacity:n=.35}){let r=new Ke(F.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,n];for(let d=1;d<=8;d++){let u=d/8,f=n*(1-u*u*(3-2*u));for(let p=0;p<28;p++){let g=p/28*Math.PI*2;o.push(Math.cos(g)*t*u,0,Math.sin(g)*e*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let p=0;p<28;p++){let g=(p+1)%28;l.push(u+p,u+g,f+p,u+g,f+g,f+p)}}let c=new It;c.setAttribute("position",new vt(o,3)),c.setAttribute("color",new vt(a,4)),c.setIndex(l),pp||(pp=new an({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new ot(c,pp);return h.name="blobShadow",h.position.y=.012,h}var Ml=8,xu=Ml/2,xp=.2;function Sv(){let t=new ft;t.add(gu({w:Ml,d:Ml}));let e=vp({w:Ml+xp*2,h:4});e.position.set(0,0,-xu-xp/2),t.add(e);let n=1.3,i=_v({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:F.hotPink});i.position.set(n,0,-xu+.25),t.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=vp({w:Ml,h:4,color:"#f1e6ff",opening:s});r.position.set(-xu-xp/2,0,0),r.rotation.y=Math.PI/2;let o=yv({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),t.add(r);let a=bv({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=Mv({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=wv({seed:21});c.position.set(-2.95,0,-2.9),t.add(a,l,c);let h=(d,u,f,p,g=0)=>{let m=vu({rx:f,rz:p,opacity:.7});m.position.x=d,m.position.z=u,m.rotation.y=g,t.add(m)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(n,-xu+.9,2.7,.8),{group:t,spawn:[0,0,0],update(){}}}function zn(t,e,n,i){if(!(n>0)||!(i>0))return n>0||(t.x=e,t.v=0),t;let s=4*Math.LN2/n/2,r=t.x-e,o=t.v+r*s,a=Math.exp(-s*i);return t.x=a*(r+o*i)+e,t.v=a*(t.v-o*s*i),t}function yp(t,e,n,i,s,r){let o=n+i,a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=e[0],f=e[1],p=e[2];h>d&&(h=d,u=t[0]+a*h,f=t[1]+l*h,p=t[2]+c*h);let g=h>o?h/o:1;if(h>=o){let _=h*(o>0?n/o:.5);return Tv(r,t[0]+a*_,t[1]+l*_,t[2]+c*_,u,f,p,g)}let m=Math.max(h,1e-6),v=Math.min(Math.max((m*m+n*n-i*i)/(2*m),-n),n),y=Math.sqrt(Math.max(n*n-v*v,0)),M=s[0],b=s[1],w=s[2],S=M*a+b*l+w*c;M-=a*S,b-=l*S,w-=c*S;let x=Math.hypot(M,b,w);return x<1e-6&&(Math.abs(a)<.9?(M=0,b=c,w=-l):(M=-c,b=0,w=a),x=Math.hypot(M,b,w)||1),M/=x,b/=x,w/=x,Tv(r,t[0]+a*v+M*y,t[1]+l*v+b*y,t[2]+c*v+w*y,u,f,p,g)}function Tv(t,e,n,i,s,r,o,a){if(!t)return{mid:[e,n,i],end:[s,r,o],stretch:a};let l=t.mid,c=t.end;return l[0]=e,l[1]=n,l[2]=i,c[0]=s,c[1]=r,c[2]=o,t.stretch=a,t}var Ev=[.65,1.2];function _p({radius:t=.06,rings:e=8,sides:n=8,color:i="#ffffff"}={}){let s=e+1,r=Ev.length,o=s*n,a=[o,o+r*n+1],l=o+2*(r*n+1),c=[],h=(_e,oe,Oe)=>{for(let ze=0;ze<n;ze++){let $e=(ze+1)%n,et=_e+ze,nt=_e+$e,W=oe+ze,Le=oe+$e;Oe?c.push(et,W,nt,nt,W,Le):c.push(et,nt,W,nt,Le,W)}};for(let _e=0;_e<e;_e++)h(_e*n,(_e+1)*n,!1);for(let _e=0;_e<2;_e++){let oe=_e===0,Oe=_e===0?0:e*n;for(let $e=0;$e<r;$e++){let et=a[_e]+$e*n;h(Oe,et,oe),Oe=et}let ze=a[_e]+r*n;for(let $e=0;$e<n;$e++){let et=Oe+$e,nt=Oe+($e+1)%n;oe?c.push(et,ze,nt):c.push(et,nt,ze)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new It,p=new bt(d,3),g=new bt(u,3);p.setUsage(Uo),g.setUsage(Uo),f.setAttribute("position",p),f.setAttribute("normal",g),f.setIndex(c);let m=new ot(f,At({color:i}));m.name="limb";let v=new Xn(new z,t*2);f.boundingSphere=v,Tn(m);let y=new Float64Array(n),M=new Float64Array(n);for(let _e=0;_e<n;_e++)y[_e]=Math.cos(_e/n*Math.PI*2),M[_e]=Math.sin(_e/n*Math.PI*2);let b=0,w=-1,S=0,x=1,_=0,L=0,D=0,I=0,E=1,N=0,R=0,C=0,U=0,H=0,ee=0,q=0,te=0,Y=0,K=0,Se=0,Z=0,ye=0,Ae=0,He=0,se=0,Ne=0,fe=0;function ge(_e,oe,Oe,ze,$e,et,nt,W,Le,Ue,Ze,O,ne,j,ve,P){for(let T=0;T<n;T++){let V=y[T]*et+M[T]*Le,ce=y[T]*nt+M[T]*Ue,Q=y[T]*W+M[T]*Ze,me=(_e+T)*3;d[me]=oe+V*$e,d[me+1]=Oe+ce*$e,d[me+2]=ze+Q*$e,u[me]=V*ve+O*P,u[me+1]=ce*ve+ne*P,u[me+2]=Q*ve+j*P}}let Ce=!1,re=1,ie=0,Te=0;function Ie(_e,oe,Oe,ze=1){let $e=t/Math.sqrt(ze>1?ze:1),et=2*oe[0]-(_e[0]+Oe[0])/2,nt=2*oe[1]-(_e[1]+Oe[1])/2,W=2*oe[2]-(_e[2]+Oe[2])/2,Le=_e[0],Ue=_e[1],Ze=_e[2],O=Oe[0],ne=Oe[1],j=Oe[2],ve=(oe[1]-Ue)*(j-oe[2])-(oe[2]-Ze)*(ne-oe[1]),P=(oe[2]-Ze)*(O-oe[0])-(oe[0]-Le)*(j-oe[2]),T=(oe[0]-Le)*(ne-oe[1])-(oe[1]-Ue)*(O-oe[0]),V=Math.hypot(ve,P,T),ce=oe[0]-Le,Q=oe[1]-Ue,me=oe[2]-Ze,De=Math.hypot(ce,Q,me),ae=O-oe[0],de=ne-oe[1],Pe=j-oe[2],G=!1;V>1e-4*De*Math.hypot(ae,de,Pe)&&V>1e-12?(ve/=V,P/=V,T/=V,Ce&&ve*re+P*ie+T*Te<0&&(ve=-ve,P=-P,T=-T),G=!0):De>1e-9&&ce*ae+Q*de+me*Pe<0&&(et=(Le+O)/2,nt=(Ue+ne)/2,W=(Ze+j)/2);let ue=(Le+et+O)/3,he=(Ue+nt+ne)/3,we=(Ze+W+j)/3,Ee=Math.max(Math.hypot(Le-ue,Ue-he,Ze-we),Math.hypot(et-ue,nt-he,W-we),Math.hypot(O-ue,ne-he,j-we));v.center.set(ue,he,we),v.radius=Ee+t*1.5+.02;for(let Re=0;Re<s;Re++){let be=Re/e,ke=1-be,xe=ke*ke,Ge=2*ke*be,Je=be*be,Fe=xe*Le+Ge*et+Je*O,rt=xe*Ue+Ge*nt+Je*ne,xt=xe*Ze+Ge*W+Je*j,Dt=2*ke*(et-Le)+2*be*(O-et),Gt=2*ke*(nt-Ue)+2*be*(ne-nt),Nt=2*ke*(W-Ze)+2*be*(j-W),nn=Math.hypot(Dt,Gt,Nt);if(nn>1e-9?(b=Dt/nn,w=Gt/nn,S=Nt/nn):Re===0&&(b=0,w=-1,S=0),Re===0){G?(x=ve,_=P,L=T):Ce?(x=re,_=ie,L=Te):(x=1,_=0,L=0);let Mn=x*b+_*w+L*S;x-=b*Mn,_-=w*Mn,L-=S*Mn;let zt=Math.hypot(x,_,L);zt<1e-6&&(Math.abs(b)<.9?(x=0,_=S,L=-w):(x=-S,_=0,L=b),zt=Math.hypot(x,_,L)||1),x/=zt,_/=zt,L/=zt,re=x,ie=_,Te=L,Ce=!0}else{let Mn=x*b+_*w+L*S;x-=b*Mn,_-=w*Mn,L-=S*Mn;let zt=Math.hypot(x,_,L);zt<1e-6&&(Math.abs(b)<.9?(x=0,_=S,L=-w):(x=-S,_=0,L=b),zt=Math.hypot(x,_,L)||1),x/=zt,_/=zt,L/=zt}D=w*L-S*_,I=S*x-b*L,E=b*_-w*x,ge(Re*n,Fe,rt,xt,$e,x,_,L,D,I,E,0,0,0,1,0),Re===0&&(N=b,R=w,C=S,U=x,H=_,ee=L,q=D,te=I,Y=E),Re===s-1&&(K=b,Se=w,Z=S,ye=x,Ae=_,He=L,se=D,Ne=I,fe=E)}for(let Re=0;Re<2;Re++){let be=Re===0?-1:1,ke=Re===0?Le:O,xe=Re===0?Ue:ne,Ge=Re===0?Ze:j,Je=Re===0?N:K,Fe=Re===0?R:Se,rt=Re===0?C:Z,xt=Re===0?U:ye,Dt=Re===0?H:Ae,Gt=Re===0?ee:He,Nt=Re===0?q:se,nn=Re===0?te:Ne,Mn=Re===0?Y:fe,zt=Je*be,Vn=Fe*be,Ii=rt*be;for(let ns=0;ns<r;ns++){let is=Ev[ns],dr=Math.cos(is),ss=Math.sin(is);ge(a[Re]+ns*n,ke+zt*$e*ss,xe+Vn*$e*ss,Ge+Ii*$e*ss,$e*dr,xt,Dt,Gt,Nt,nn,Mn,zt,Vn,Ii,dr,ss)}let si=(a[Re]+r*n)*3;d[si]=ke+zt*$e,d[si+1]=xe+Vn*$e,d[si+2]=Ge+Ii*$e,u[si]=zt,u[si+1]=Vn,u[si+2]=Ii}p.needsUpdate=!0,g.needsUpdate=!0}return{mesh:m,set:Ie}}var Dr=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),WE=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),yu=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],bp=.04,XE=9;function _u(t,e){let n=Math.sin(t*12.9898+e*78.233)*43758.5453;return(n-Math.floor(n))*Math.PI*2}function YE(t,e,n=[0,0]){return n[0]=.05*Math.sin(1.3*t+_u(e,1))+.03*Math.sin(2.1*t+_u(e,2)),n[1]=.04*Math.sin(1.7*t+_u(e,3))+.02*Math.sin(2.6*t+_u(e,4)),n}var qE=(t,e)=>Math.min(t*2,1)*Math.max(e,0),wl=16,Av=wl+1,Hi=11,Ws=4,bu=13,$E=.07,ZE=t=>{let e=t<0?0:t>1?1:t;return e*e*(3-2*e)};function Rv({eyeRadius:t=.1,eyeSpacing:e=.26,eyeY:n=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=F.ink,fixedSmile:h=0}={}){let d=t,u=e/2,f=[-u,u],p=.35,g=.035*d,m=d*.3,v=a==="uni",y=0,M=y+2*Av,b=M+16,w=b+2*Hi*Ws,S=w+2*Hi*2,x=S+(v?6:8),_=x+bu*2,L=[],D=Le=>L.push(Le,Le+1,Le+2,Le,Le+2,Le+3),I=(Le,Ue)=>{for(let Ze=0;Ze<Ue-1;Ze++){let O=Le+Ze*2;L.push(O,O+1,O+2,O+1,O+3,O+2)}};for(let Le=0;Le<2;Le++){let Ue=y+Le*Av;for(let Ze=0;Ze<wl;Ze++)L.push(Ue,Ue+1+Ze,Ue+1+(Ze+1)%wl)}for(let Le=0;Le<4;Le++)D(M+Le*4);for(let Le=0;Le<2;Le++){let Ue=b+Le*Hi*Ws;for(let Ze=0;Ze<Hi-1;Ze++)for(let O=0;O<Ws-1;O++){let ne=Ue+Ze*Ws+O,j=ne+1,ve=ne+Ws,P=ve+1;L.push(ne,j,ve,j,P,ve)}I(w+Le*Hi*2,Hi)}v?L.push(S,S+1,S+2,S+1,S+3,S+2,S+2,S+3,S+4,S+3,S+5,S+4):(D(S),D(S+4)),I(x,bu);let E=[];for(let Le=0;Le<2;Le++){let Ue=new $t(d,18,12);Ue.deleteAttribute("uv"),Ue.applyMatrix4(new Mt().makeScale(1,1,p).setPosition(f[Le],n,i)),E.push(Ue)}let N=new ot(Ot(E,!1),At({color:F.eyeWhite,shadowMix:.35,rim:0}));N.name="eyes",Tn(N,{px:2});let R=new Float32Array(_*3),C=new Float32Array(_*3),U=new Float32Array(_*3),H=new Ke(F.ink),ee=new Ke(c);for(let Le=0;Le<_;Le++){C[Le*3+2]=1;let Ue=Le>=b&&Le<w?ee:H;U[Le*3]=Ue.r,U[Le*3+1]=Ue.g,U[Le*3+2]=Ue.b}let q=new It,te=new bt(R,3);te.setUsage(Uo),q.setAttribute("position",te),q.setAttribute("normal",new bt(C,3)),q.setAttribute("color",new bt(U,3)),q.setIndex(L);let Y=n+d*3.5,K=s-r*1.5-d,Se=Math.max(u+2.5*d,r);q.boundingSphere=new Xn(new z(0,(Y+K)/2,i),Math.hypot(Se,(Y-K)/2,d*2));let Z=At({color:"#ffffff",vertexColors:!0,rim:0});Z.side=yn;let ye=new ot(q,Z);ye.name="features";let Ae=new ft;Ae.name="face",Ae.add(N,ye);let He=Dr.neutral,se=Le=>{let Ue=h>0?WE[Le]:0;return Ue>0?h*Ue:-1/0},Ne=se("neutral"),fe=Le=>Le==="mouthCurve"&&He.mouthCurve<Ne?Ne:He[Le],ge={};for(let Le of yu)ge[Le]={x:fe(Le),v:0};let Ce={x:0,v:0},re={x:0,v:0},ie=0,Te=!1,Ie=0,_e=[0,0],oe=0;function Oe(Le,Ue,Ze){let O=oe*3;R[O]=Le,R[O+1]=Ue,R[O+2]=Ze,oe++}function ze(Le,Ue,Ze){let O=1-(Le*Le+Ue*Ue)/(d*d);return i+d*p*Math.sqrt(O>0?O:0)+Ze}function $e(Le,Ue,Ze,O,ne,j){let ve=-(O-Ue),P=Ze-Le,T=Math.hypot(ve,P)||1;ve=ve/T*ne/2,P=P/T*ne/2,Oe(Le+ve,Ue+P,j),Oe(Ze+ve,O+P,j),Oe(Ze-ve,O-P,j),Oe(Le-ve,Ue-P,j)}let et=d*1.03;function nt(){let Le=ge,Ue=Le.pupilScale.x*(1-Ce.x),Ze=Ce.x,O=Math.min(Math.max(Le.lid.x,0),.95),ne=Le.browAngle.x,j=O>.005,ve=et-2*et*O,P=ne*.6*Math.min(O*4,1),T=d*$E*Math.min(O*10,1);oe=y;for(let be=0;be<2;be++){let ke=be===0?-1:1;YE(Ie,l+be*7.31,_e);let xe=d*.5*(Ue>0?Ue:0),Ge=_e[0]*d,Je=_e[1]*d;if(j){let rt=ve+P*ke*Ge-Math.abs(P)*xe-T-(Je+xe);if(rt>0){let xt=Math.min(Math.max((rt-.1*d)/(.1*d),0),1);Je+=rt*(1-ZE(xt))}}Oe(f[be]+Ge,n+Je,ze(Ge,Je,g));for(let Fe=0;Fe<wl;Fe++){let rt=Fe/wl*Math.PI*2,xt=Ge+Math.cos(rt)*xe,Dt=Je+Math.sin(rt)*xe;Oe(f[be]+xt,n+Dt,ze(xt,Dt,g))}}oe=M;for(let be=0;be<2;be++){let ke=d*.55*Ze,xe=ze(0,0,g),Ge=d*.26*Ze;$e(f[be]-ke,n-ke,f[be]+ke,n+ke,Ge,xe),$e(f[be]-ke,n+ke,f[be]+ke,n-ke,Ge,xe)}for(let be=0;be<2;be++){let ke=be===0?-1:1;for(let xe=0;xe<2;xe++){oe=xe===0?b+be*Hi*Ws:w+be*Hi*2;for(let Ge=0;Ge<Hi;Ge++){let Je=(Ge/(Hi-1)*2-1)*(Math.PI/2),Fe=et*Math.sin(Je),rt=et*Math.cos(Je),xt=j?ve+P*Fe:rt;xt>rt&&(xt=rt),xt<-rt&&(xt=-rt);let Dt=ke*Fe;if(xe===0)for(let Gt=0;Gt<Ws;Gt++){let Nt=rt+(xt-rt)*(Gt/(Ws-1));Oe(f[be]+Dt,n+Nt,ze(Dt,Nt*.97,g*3))}else{let Gt=xt+(j?d*.02:0);Gt>rt&&(Gt=rt);let Nt=xt-T;Nt<-rt&&(Nt=-rt),Oe(f[be]+Dt,n+Gt,ze(Dt,Gt*.97,g*3.5)),Oe(f[be]+Dt,n+Nt,ze(Dt,Nt*.97,g*3.5))}}}}oe=S;let V=d*.9,ce=n+d*(1.4+Le.browY.x),Q=Math.cos(ne),me=Math.sin(ne),De=i+d*.15;if(v){let be=u+V*Q,ke=ce+V*me,xe=ce-me/(Q>.3?Q:.3)*u,Ge=-(xe-ke),Je=be,Fe=Math.hypot(Ge,Je)||1;Ge/=Fe,Je/=Fe;let rt=-(ke-xe),xt=be,Dt=Math.hypot(rt,xt)||1;rt/=Dt,xt/=Dt;let Gt=Ge+rt,Nt=Je+xt,nn=Math.hypot(Gt,Nt)||1;Gt/=nn,Nt/=nn;let Mn=Gt*Ge+Nt*Je,zt=m/2/(Mn>.4?Mn:.4);Oe(-be+Ge*m/2,ke+Je*m/2,De),Oe(-be-Ge*m/2,ke-Je*m/2,De),Oe(Gt*zt,xe+Nt*zt,De),Oe(-Gt*zt,xe-Nt*zt,De),Oe(be+rt*m/2,ke+xt*m/2,De),Oe(be-rt*m/2,ke-xt*m/2,De)}else for(let be=0;be<2;be++){let ke=be===0?-1:1;$e(f[be]-ke*V*Q,ce-V*me,f[be]+ke*V*Q,ce+V*me,m,De)}oe=x;let ae=Le.mouthOpen.x+re.x*(.55+.45*Math.sin((Ie+l*.37)*XE*Math.PI*2))*.8,de=ae>0?ae<1.2?ae:1.2:0,Pe=-Le.mouthCurve.x/.5,G=(Pe>1?1:Pe>0?Pe:0)*(de<.4?de/.4:1),ue=r/2*(1-.35*(de<1?de:1)*(1-.7*G)),he=qE(Le.lid.x,Le.mouthCurve.x),we=Le.mouthCurve.x*ue*.5*(1-.4*he)*(1+.6*G),Ee=.55+.5*G,Re=de*ue*.9;for(let be=0;be<bu;be++){let ke=be/(bu-1)*2-1,xe=1-ke*ke,Ge=ke*ue*(1-.25*he)+he*ue*.2,Je=s-we*xe+he*ue*.45*ke+Ce.x*m*.6*Math.sin(ke*Math.PI*3);Oe(Ge,Je,o),Oe(Ge,Je-m-Re*Math.pow(xe,Ee)+we*xe*G,o)}te.needsUpdate=!0}function W(Le){Ie+=Le;for(let Ue=0;Ue<yu.length;Ue++)zn(ge[yu[Ue]],fe(yu[Ue]),bp,Le);zn(Ce,ie,bp,Le),zn(re,Te?1:0,bp,Le),nt()}return nt(),{group:Ae,setExpression(Le){He=Object.prototype.hasOwnProperty.call(Dr,Le)?Dr[Le]:Dr.neutral,ie=Le==="dead"?1:0,Ne=se(Object.prototype.hasOwnProperty.call(Dr,Le)?Le:"neutral")},setTalking(Le){Te=!!Le},update:W}}var Hn=Math.PI*2,Sl=["handL","handR","footL","footR"];function Vi(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function Cv(t,e){e.hipsY=t.hipsY,e.lean=t.lean,e.twist=t.twist,e.headYaw=t.headYaw,e.headPitch=t.headPitch,e.squash=t.squash,e.elbows=t.elbows;for(let n=0;n<4;n++){let i=t[Sl[n]],s=e[Sl[n]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function Tl(t,e,n,i=[0,0,0]){let s=n[0],r=n[1]-t.hipHeight,o=n[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+e.hipsY,i[2]=-s*h+u*c,i}var KE=t=>t<0?0:t>1?1:t,Gi=(t,e,n)=>{let i=KE((n-t)/(e-t));return i*i*(3-2*i)},Nr=(t,e,n,i,s)=>Gi(e,n,t)*(1-Gi(i,s,t));function Ct(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}var Mu=[0,0,0];function li(t,e,n,i,s,r){return Mu[0]=n,Mu[1]=i,Mu[2]=s,Tl(t,e,Mu,r)}var wu={sx:0,sy:0,fx:0};function Nn(t){return wu.sx=Math.abs(t.shoulderL[0]),wu.sy=t.shoulderL[1],wu.fx=Math.abs(t.hipL[0])+.035,wu}var Vo=(t,e)=>e>0?t.handL:t.handR;function Mp(t,e,n,i,s){return li(t,e,s*(n.sx+.16),t.hipHeight+0,.1,i)}var wp=.55;function Ru(t,e,n){let i=Nn(e),s=t/yt.idle.duration,r=Hn*s,o=e.hipHeight,a=Nr(s,.42,.52,.72,.86);return n.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),n.lean=.03+.015*Math.sin(r+.4),n.twist=.05*Math.sin(r+.6),n.headYaw=.03*Math.sin(r)+.3*a,n.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,n.squash=1+.008*Math.sin(r),n.elbows=wp,Mp(e,n,i,n.handL,1),Mp(e,n,i,n.handR,-1),n.handL[1]+=.008*Math.sin(r-.5),n.handR[1]+=.008*Math.sin(r+.4),n.handL[2]+=.01*Math.sin(r+1.1),n.handR[2]+=.01*Math.sin(r-.7),Ct(n.footL,i.fx,0,.015),Ct(n.footR,-i.fx,0,-.015),n}var bs=.34,Sp=.25,Lv=-.33,JE=.4,jE=.37,QE=.035,Au=(Sp-Lv)/bs;function Pv(t,e){if(t<bs)return e[0]=0,e[1]=Sp-Au*t,e;let n=(t-bs)/(1-bs),i=-Au*(1-bs),s=-.35*Au*(1-bs),r=n*n,o=r*n;return e[1]=(2*o-3*r+1)*Lv+(o-2*r+n)*i+(-2*o+3*r)*Sp+(o-r)*s,e[0]=JE*Math.sin(Math.PI*Math.pow(n,.8)),e}var _n=[0,0];function Dv(t,e,n){let i=Nn(e),s=t/yt.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*Hn*(r-(bs+.5)/2);n.hipsY=o-.06+QE*Math.cos(a),n.squash=1+.045*Math.cos(2*Hn*(r-bs-.03)),n.lean=jE+.03*Math.cos(2*Hn*(r-bs));let l=Math.cos(Hn*(r+.03));n.twist=.2*l,n.headYaw=-.15*l,n.headPitch=-.28+.04*Math.cos(a),n.elbows=0,Pv(r,_n),Ct(n.footL,i.fx*.75,_n[0],_n[1]),Pv(r<.5?r+.5:r-.5,_n),Ct(n.footR,-i.fx*.75,_n[0],_n[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;li(e,n,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,Vo(n,c))}return n}function Nv(t,e,n){let i=Nn(e),s=Hn*t/yt.aim.duration,r=e.hipHeight;n.hipsY=r-.05+.005*Math.sin(s),n.lean=.12+.01*Math.sin(s),n.twist=-.1,n.headYaw=.08,n.headPitch=.04+.012*Math.sin(2*s),n.squash=1,n.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Ct(n.handL,i.sx*1.2+o,i.sy-.12+a,.56),Ct(n.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Ct(n.footL,i.fx+.02,0,.15),Ct(n.footR,-i.fx-.03,0,-.13),n}var Tp=.35;function e2(t){return t<.06?Gi(0,.06,t):Math.exp(-9*(t-.06))*(1-Gi(.24,Tp,t))}function t2(t){if(t<.07)return Gi(0,.07,t);let e=t-.07;return Math.exp(-11*e)*Math.cos(Hn*e/.22)*(1-Gi(.26,Tp,t))}function n2(t,e,n){let i=Nn(e),s=e.hipHeight,r=e2(t);n.hipsY=s-.012-.05*r,n.lean=.03-.4*r,n.twist=.12*r,n.headYaw=-.12*r,n.headPitch=-.02-.32*r,n.squash=1-.15*t2(t),n.elbows=wp+(1-wp)*r;for(let o=-1;o<=1;o+=2){let a=Vo(n,o);Mp(e,n,i,a,o);let l=a[0],c=a[1],h=a[2];li(e,n,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Ct(n.footL,i.fx,0,.015),Ct(n.footR,-i.fx,0,-.015),n}var Xs=[0,0,0];function i2(t,e,n){Ru(t,e,n);let i=Nn(e),s=t/yt.talk.duration,r=Hn*s,o=Nr(s,.04,.17,.4,.55),a=Nr(s,.5,.63,.8,.95),l=Math.sin(3*r);n.headPitch+=.05*Math.sin(4*r)-.04*(o+a),n.headYaw+=-.12*o+.12*a,n.elbows+=(.85-n.elbows)*Math.max(o,a),li(e,n,-(i.sx+.19),i.sy-.1+.03*l,.36,Xs);for(let c=0;c<3;c++)n.handR[c]+=(Xs[c]-n.handR[c])*o;li(e,n,i.sx+.19,i.sy-.12-.03*l,.34,Xs);for(let c=0;c<3;c++)n.handL[c]+=(Xs[c]-n.handL[c])*a;return n}var Yn=Vi();function s2(t,e,n){let i=t/yt.roll.duration,s=Nr(i,0,.15,.75,1),r=Nn(e);Ru(0,e,Yn);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(Yn.hipsY,.45),n.lean=o(Yn.lean,1.3),n.twist=0,n.headYaw=0,n.headPitch=o(Yn.headPitch,.35),n.squash=o(1,.9),n.elbows=1;for(let a=-1;a<=1;a+=2){let l=Vo(n,a),c=Vo(Yn,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?n.footL:n.footR,d=a>0?Yn.footL:Yn.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return n}function r2(t,e,n){return Dv(t,e,n),n.hipsY-=.12,n.lean+=.15,n}var o2=.25,a2=.85,l2=.82;function kv(t,e,n){let i=Nn(e),s=Hn*t/yt.coverLow.duration;return n.hipsY=o2+.006*Math.sin(s),n.lean=a2+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=-.55+.03*Math.sin(2*s+1),n.squash=l2,n.elbows=1,Ct(n.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Ct(n.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Ct(n.footL,i.fx+.08,0,.12),Ct(n.footR,-i.fx-.08,0,.12),n}function Ov(t,e,n,i){let s=Nn(t),r=i/yt[n].duration,o=Math.sin(Hn*r);return e.hipsY+=.012*Math.cos(2*Hn*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function c2(t,e,n){return kv(0,e,n),Ov(e,n,"coverLowMove",t),n}function Ep(t,e,n){let i=Nn(e),s=Hn*t/yt.coverTall.duration;return n.hipsY=e.hipHeight-.012+.006*Math.sin(s),n.lean=.07+.01*Math.sin(s+.4),n.twist=.02*Math.sin(s+.6),n.headYaw=.05*Math.sin(s),n.headPitch=0+.02*Math.sin(2*s+1),n.squash=1+.006*Math.sin(s),n.elbows=1,li(e,n,i.sx+.14,i.sy+0,.31,n.handL),li(e,n,-i.sx-.14,i.sy+0,.31,n.handR),Ct(n.footL,i.fx,0,.015),Ct(n.footR,-i.fx,0,-.015),n}function h2(t,e,n){return Ep(0,e,n),Ov(e,n,"coverTallMove",t),n}function u2(t,e,n){return Nv(t*(yt.aim.duration/yt.coverPop.duration),e,n),n.hipsY-=.07,n.lean+=.06,n.footL[2]+=.04,n.footR[2]-=.04,n.footL[0]+=.04,n.footR[0]-=.04,n}function d2(t,e,n){let i=t/yt.vault.duration,s=Nr(i,0,.3,.7,1),r=Nn(e);Ru(0,e,Yn);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(Yn.hipsY,e.hipHeight-.02),n.lean=o(Yn.lean,.55),n.twist=0,n.headYaw=0,n.headPitch=o(Yn.headPitch,-.25),n.squash=1,n.elbows=1;for(let a=-1;a<=1;a+=2){let l=Vo(n,a),c=Vo(Yn,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?n.footL:n.footR,d=a>0?Yn.footL:Yn.footR;h[0]=o(d[0],a*(r.fx+.04)),h[1]=o(d[1],.55),h[2]=o(d[2],.3)}return n}var f2=.17,p2=.5,m2=-.9,g2=.82;function v2(t,e,n){let i=Nn(e),s=Hn*t/yt.coverBlindLow.duration;return n.hipsY=f2+.006*Math.sin(s),n.lean=p2+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=m2+.03*Math.sin(2*s+1),n.squash=g2,n.elbows=1,Tl(e,n,e.shoulderR,Xs),Ct(n.handR,Xs[0]-.02,Xs[1]+.44+.008*Math.sin(s+.4),Xs[2]+.12),Ct(n.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Ct(n.footL,i.fx+.08,0,.12),Ct(n.footR,-i.fx-.08,0,.12),n}function Iv(t,e,n,i){Ep(t*(yt.coverTall.duration/yt.coverBlindTallL.duration),e,n);let s=Nn(e);return li(e,n,i*(s.sx+.4),s.sy,.2,i>0?n.handL:n.handR),n}var x2=.3,y2=1.2,Su=[.4,.62],Tu=[-.6,-.36];function Eu(t,e,n,i,s,r){if(t-=Math.floor(t),t<.5)return r[0]=s,r[1]=e+(n-e)*(t/.5),r;let o=(t-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=n+(e-n)*(o*o*(3-2*o)),r}function _2(t,e,n){let i=Nn(e),s=t/yt.crawl.duration,r=Hn*s;return n.hipsY=x2+.012*Math.cos(2*r),n.lean=y2+.03*Math.cos(2*r),n.twist=.1*Math.sin(r),n.headYaw=-.1*Math.sin(r),n.headPitch=-.75,n.squash=1,n.elbows=1,Eu(s,Su[1],Su[0],.16,.04,_n),Ct(n.handL,i.sx+.12,_n[0],_n[1]),Eu(s+.5,Su[1],Su[0],.16,.04,_n),Ct(n.handR,-i.sx-.12,_n[0],_n[1]),Eu(s,Tu[1],Tu[0],.16,0,_n),Ct(n.footR,-i.fx-.02,_n[0],_n[1]),Eu(s+.5,Tu[1],Tu[0],.16,0,_n),Ct(n.footL,i.fx+.02,_n[0],_n[1]),n}function Go(t,e,n){let i=e.length;if(t<=e[0][0])return Ct(n,e[0][1],e[0][2],e[0][3]);for(let r=0;r<i-1;r++){let o=e[r],a=e[r+1];if(t<a[0]){let l=Gi(o[0],a[0],t);return Ct(n,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l,o[3]+(a[3]-o[3])*l)}}let s=e[i-1];return Ct(n,s[1],s[2],s[3])}var b2=.4,M2=.9;function w2(t,e,n){let i=Nn(e),s=t/yt.revive.duration,r=Hn*s;return n.hipsY=b2+.012*Math.sin(2*r),n.lean=M2+.05*Math.sin(2*r),n.twist=.04*Math.sin(r),n.headYaw=.04*Math.sin(r),n.headPitch=-.55,n.squash=1,n.elbows=1,Ct(n.handL,i.sx-.06,.37-.06*Math.sin(r),.64),Ct(n.handR,-i.sx+.06,.37+.06*Math.sin(r),.64),Ct(n.footL,i.fx+.06,0,-.32),Ct(n.footR,-i.fx-.06,0,-.32),n}var S2=[[0,-.3,1,.3],[.17,-.29,1.08,.08],[.33,-.23,1.17,.5],[.55,-.23,1.17,.5],[1,-.3,1,.3]],T2=[[0,.1,0,0],[.17,-.05,0,0],[.33,.15,0,0],[.55,.15,0,0],[1,.1,0,0]],E2=[[0,0,0,0],[.17,-.3,0,0],[.33,.3,0,0],[.55,.25,0,0],[1,0,0,0]],Dn=[0,0,0];function A2(t,e,n){let i=Nn(e),s=t/yt.bash.duration;return Go(s,T2,Dn),n.lean=Dn[0],Go(s,E2,Dn),n.twist=Dn[0],n.hipsY=e.hipHeight-.09-.03*Nr(s,.2,.33,.55,.9),n.headYaw=-.5*n.twist,n.headPitch=-.1,n.squash=1,n.elbows=1,Go(s,S2,Dn),li(e,n,Dn[0],Dn[1],Dn[2],n.handR),li(e,n,i.sx+.14,i.sy-.1,.32,n.handL),Ct(n.footL,i.fx+.04,0,-.14),Ct(n.footR,-i.fx-.04,0,.2),n}var R2=[[0,-.3,1,.3],[.3,-.31,1.38,-.12],[.4,-.22,1.6,.04],[.6,-.2,1.22,.5],[.9,-.15,.98,.46],[1,-.3,1,.3]],C2=[[0,.1,0,0],[.3,-.2,0,0],[.4,-.28,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,.1,0,0]],P2=[[0,-.1,0,0],[.3,-.45,0,0],[.4,-.45,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,-.1,0,0]];function I2(t,e,n){let i=Nn(e),s=t/yt.throw.duration;return Go(s,C2,Dn),n.lean=Dn[0],Go(s,P2,Dn),n.twist=Dn[0],n.hipsY=e.hipHeight-.07-.03*Nr(s,.4,.6,.9,1),n.headYaw=-.4*n.twist,n.headPitch=-.05,n.squash=1,n.elbows=1,Go(s,R2,Dn),li(e,n,Dn[0],Dn[1],Dn[2],n.handR),li(e,n,i.sx+.2,i.sy-.12-.08*Gi(.5,.9,s),.34-.12*Gi(.5,.9,s),n.handL),Ct(n.footL,i.fx+.04,0,.1+.06*Gi(.4,.7,s)),Ct(n.footR,-i.fx-.04,0,-.16),n}var L2=.05;function ln(t,e,n,i=L2){return Object.freeze({duration:t,loop:e,ease:i,sample:(s,r,o=Vi())=>n(s,r,o)})}var yt=Object.freeze({idle:ln(2.4,!0,Ru),run:ln(.56,!0,Dv,.008),aim:ln(1.6,!0,Nv),flinch:ln(Tp,!1,n2),talk:ln(2.4,!0,i2),roll:ln(.55,!1,s2,.02),sprint:ln(.56,!0,r2,.008),coverLow:ln(2.4,!0,kv),coverLowMove:ln(.5,!0,c2),coverTall:ln(2.4,!0,Ep),coverTallMove:ln(.5,!0,h2),coverPop:ln(1.6,!0,u2),vault:ln(.5,!1,d2,.02),coverBlindLow:ln(1.6,!0,v2),coverBlindTallL:ln(1.6,!0,(t,e,n)=>Iv(t,e,n,1)),coverBlindTallR:ln(1.6,!0,(t,e,n)=>Iv(t,e,n,-1)),crawl:ln(1,!0,_2),revive:ln(.5,!0,w2),bash:ln(.45,!1,A2,.02),throw:ln(.5,!1,I2,.02)}),Wi=Au/yt.run.duration;function El(t,e,n,i){let s=Object.prototype.hasOwnProperty.call(yt,t)?yt[t]:null;if(!s)throw new Error(`unknown clip: ${t}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,n,i||Vi())}function Cu(t,e,n,i=Vi()){if(!(n>0))return Cv(t,i);if(n>=1)return Cv(e,i);let s=1-n;i.hipsY=t.hipsY*s+e.hipsY*n,i.lean=t.lean*s+e.lean*n,i.twist=t.twist*s+e.twist*n,i.headYaw=t.headYaw*s+e.headYaw*n,i.headPitch=t.headPitch*s+e.headPitch*n,i.squash=t.squash*s+e.squash*n,i.elbows=t.elbows*s+e.elbows*n;for(let r=0;r<4;r++){let o=t[Sl[r]],a=e[Sl[r]],l=i[Sl[r]];l[0]=o[0]*s+a[0]*n,l[1]=o[1]*s+a[1]*n,l[2]=o[2]*s+a[2]*n}return i}var D2=.05,Ms=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Al=["handL","handR","footL","footR"],Ap=Ms.length+Al.length*3,Wo=[.35,-.2,-.8],Rp=[.75,-.85,-.15];function tn(t,e){if(t.deleteAttribute("uv"),!t.index){let r=t.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;t.setIndex(o)}let n=new Ke(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new bt(s,3)),t}var N2=new Mt,ci=(t,e,n,i,s=0,r=0,o=0,a=1,l=1,c=1)=>t.applyMatrix4(N2.compose(new z(e,n,i),new Un().setFromEuler(new Wn(s,r,o)),new z(a,l,c)));function kr(t=20,e=14){let n=new $t(1,t,e);return n.deleteAttribute("uv"),n.deleteAttribute("normal"),pv(n)}function Cp(t,e,n){let i=kr(e,n),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)t(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function Iu(t,e,n){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2],o=Math.hypot(i,s,r),a=new Wt(n,n,o,6,1),l=new Un().setFromUnitVectors(new z(0,1,0),new z(i/o,s/o,r/o));return a.applyMatrix4(new Mt().compose(new z((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),l,new z(1,1,1))),a}function Lu(t,e){let n=Ot(t,!1);if(!n)throw new Error(`rig: could not merge the ${e} parts`);Qn(n),n.computeBoundingSphere();let i=new ot(n,At({color:"#ffffff",vertexColors:!0}));return i.name=e,Tn(i),i}function Pp(t,e,n,i,s){let r=2/t.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*t.rx,s[1]=o(n)*t.ry;let a=o(i)*t.rz;return a>t.flatZ&&(a=t.flatZ+(a-t.flatZ)*t.flatK),s[2]=a,s}function k2(t){let e=t.torso,n=t.colors,i=t.outfit,s=(h,d)=>{let u=new sl(h.map(([f,p])=>new Be(f,p)),22);return u.scale(1,1,e.depth),tn(u,d)},r=[s(e.pants,n.pants),s(e.shirt,n.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let d=e.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=t.shoulderL[1]-t.hipHeight;for(let h of[-1,1]){let d=kr(14,10);ci(d,h*Math.abs(t.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),d.computeVertexNormals(),r.push(tn(d,n.shirt))}if(i.collar){let h=new Ar(.1,.03,8,20);ci(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(tn(h,n.collar))}if(i.logo){let u=new Wt(.03,.03,.01,12);ci(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(tn(u,n.logo))}if(i.lanyard){let d=l(0,.15)+.012;for(let p of[-1,1]){let g=[p*.075,o-.03,.085],m=[p*.05,.34,l(.05,.34)+.014],v=[p*.014,.15+.05,l(.014,.15+.05)+.01];r.push(tn(Iu(g,m,.008),n.lanyard),tn(Iu(m,v,.008),n.lanyard))}let u=new mt(.075,.1,.014);ci(u,0,.15,d,-.05,0,.04);let f=new mt(.077,.026,.016);ci(f,0,.15+.028,d,-.05,0,.04),r.push(tn(u,n.badge),tn(f,n.badgeStripe))}return Lu(r,"torso")}function O2(t){let e=t.head,n=t.hair,i=t.colors,s=t.outfit,r=[],o=Cp((a,l,c,h)=>Pp(e,a,l,c,h),40,28);r.push(tn(o,i.skin),tn(U2(e,n),i.hair));for(let a of[-1,1]){let l=kr(12,8);ci(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(tn(l,i.skin))}{let a=t.face,l=(a.eyeY+a.mouthY)/2-.005,c=kr(12,8);ci(c,0,l,F2(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(tn(c,i.skin))}if(s.headset){let a=e.ry+n.thickness+.03,l=new Bn;l.getPoint=(g,m=new z)=>m.set(Math.cos(Math.PI*g)*(e.rx+n.thickness+.012),Math.sin(Math.PI*g)*a,0);let c=new rl(l,24,.014,6,!1);ci(c,0,0,-.03,-.12,0,0),r.push(tn(c,i.headset));for(let g of[-1,1]){let m=new Wt(.055,.06,.05,14);ci(m,g*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(tn(m,i.headset))}let h=t.face,d=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(tn(Iu(d,u,.009),i.headset),tn(Iu(u,f,.009),i.headset));let p=kr(10,8);ci(p,f[0],f[1],f[2],0,0,0,.022,.02,.022),p.computeVertexNormals(),r.push(tn(p,i.mic))}return Lu(r,"headMesh")}var Ys=48,Pu=12;function U2(t,e){let n=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,i=[0,0,0],s=su.smoothstep,r=[],o=(u,f,p)=>{let g=Math.sin(u)*Math.sin(f),m=Math.cos(u),v=Math.sin(u)*Math.cos(f);Pp(t,g,m,v,i);let y=i[0]/(t.rx*t.rx),M=i[1]/(t.ry*t.ry),b=i[2]/(t.rz*t.rz),w=Math.hypot(y,M,b)||1;y/=w,M/=w,b/=w;let S=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(v+.3,0),x=e.quiff?e.lift*Math.max(v,0)*s(i[1],.12,.26)*(1-.5*g):0,_=e.back*Math.max(-v,0)*s(i[1],-.15,.1),L=p?-.01:e.thickness*(1-.55*Math.min(S,1))+x+_;r.push(i[0]+y*L,i[1]+M*L,i[2]+b*L)},a=u=>{let f=0,p=Math.PI;for(let g=0;g<40;g++){let m=(f+p)/2,v=Math.sin(m)*Math.sin(u),y=Math.sin(m)*Math.cos(u);Pp(t,v,Math.cos(m),y,i),i[1]>n(v,y)?f=m:p=m}return f};o(0,0,!1);let l=[];for(let u=0;u<Ys;u++)l.push(a(u/Ys*Math.PI*2));for(let u=1;u<=Pu+1;u++)for(let f=0;f<Ys;f++){let p=f/Ys*Math.PI*2,g=u>Pu;o(g?l[f]+.03:l[f]*(u/Pu),p,g)}let c=(u,f)=>1+(u-1)*Ys+f%Ys,h=[];for(let u=0;u<Ys;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=Pu;u++)for(let f=0;f<Ys;f++){let p=c(u,f),g=c(u,f+1),m=c(u+1,f),v=c(u+1,f+1);h.push(p,m,v,p,v,g)}let d=new It;return d.setAttribute("position",new vt(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function F2(t,e,n){let i=1-Math.pow(Math.abs(e/t.rx),t.power)-Math.pow(Math.abs(n/t.ry),t.power),s=i>0?t.rz*Math.pow(i,1/t.power):0;return s>t.flatZ?t.flatZ+(s-t.flatZ)*t.flatK:s}function Uv(t,e){let n=t.hand.radius,i=t.colors,s=kr(14,10);ci(s,0,n*.75,0,0,0,0,n*.78,n*1.1,n*.95),s.computeVertexNormals();let r=kr(10,8);return ci(r,n*.3,n*.45,e*n*.75,e*-.6,0,.3,n*.34,n*.55,n*.34),r.computeVertexNormals(),Lu([tn(s,i.skin),tn(r,i.skin)],e>0?"handL":"handR")}function Fv(t,e){let n=t.shoe,i=t.colors,s=n.width/2,r=n.length/2,o=n.length*.18,a=.03,l=Cp((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,n.height*.55+d*n.height*.6-Math.max(u,0)*n.height*.25),f[2]=o+u*r*.96},20,12),c=Cp((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return Lu([tn(l,i.shoe),tn(c,i.sole)],e>0?"footL":"footR")}function Xi(t){let e=new ft;e.name=t.name||"character";let n=new ft;n.name="body",e.add(n);let i=new ft;i.name="hips",i.rotation.order="YXZ";let s=k2(t);i.add(s);let r=new ft;r.name="head",r.rotation.order="YXZ",r.position.set(0,t.neckY-t.hipHeight,0),i.add(r);let o=O2(t);o.position.y=t.head.centerY,r.add(o);let a=Rv({...t.face,lidColor:t.colors.skin});a.group.position.y=t.head.centerY,r.add(a.group),n.add(i);let l=[Uv(t,1),Uv(t,-1)],c=[Fv(t,1),Fv(t,-1)],h=[0,1].map(()=>_p({radius:t.armRadius,color:t.colors.skin})),d=[0,1].map(()=>_p({radius:t.legRadius,color:t.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",n.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=vu({rx:.45,rz:.38,opacity:.55});e.add(u);let f=Vi(),p=Vi(),g=[];for(let Y=0;Y<Ap;Y++)g.push({x:0,v:0});let m=!1,v=D2,y=(Y,K)=>K<Ms.length?Y[Ms[K]]:Y[Al[(K-Ms.length)/3|0]][(K-Ms.length)%3];function M(Y,K,Se){K<Ms.length?Y[Ms[K]]=Se:Y[Al[(K-Ms.length)/3|0]][(K-Ms.length)%3]=Se}function b(Y,K){K>=0&&(v=K),f.hipsY=Y.hipsY,f.lean=Y.lean,f.twist=Y.twist,f.headYaw=Y.headYaw,f.headPitch=Y.headPitch,f.squash=Y.squash,f.elbows=Y.elbows>=0?Y.elbows:0;for(let Se=0;Se<4;Se++){let Z=Y[Al[Se]],ye=f[Al[Se]];ye[0]=Z[0],ye[1]=Z[1],ye[2]=Z[2]}if(!m){m=!0;for(let Se=0;Se<Ap;Se++)g[Se].x=y(f,Se),g[Se].v=0}}let w=[0,0,0],S=[0,0,0],x=[0,0,0],_=[0,0,0],L={mid:[0,0,0],end:[0,0,0],stretch:1},D=new z,I=new z,E=new z,N=new Mt,R=t.armLength/2,C=t.legLength/2,U=t.ankleHeight;function H(Y,K,Se){let Z=Math.cos(p.twist),ye=Math.sin(p.twist);_[0]=Y*Z+Se*ye,_[1]=K,_[2]=-Y*ye+Se*Z}function ee(){let Y=p.squash>.2?p.squash:.2,K=1/Math.sqrt(Y);n.scale.set(K,Y,K),i.position.set(0,p.hipsY,0),i.rotation.set(p.lean,p.twist,0),r.rotation.set(p.headPitch,p.headYaw,0);for(let Se=0;Se<2;Se++){let Z=Se===0?1:-1;Tl(t,p,Se===0?t.shoulderL:t.shoulderR,w);let ye=p.elbows<0?0:p.elbows>1?1:p.elbows;H(Z*(Wo[0]+(Rp[0]-Wo[0])*ye),Wo[1]+(Rp[1]-Wo[1])*ye,Wo[2]+(Rp[2]-Wo[2])*ye),yp(w,Se===0?p.handL:p.handR,R,R,_,L),h[Se].set(w,L.mid,L.end,L.stretch);let Ae=l[Se];Ae.position.set(L.end[0],L.end[1],L.end[2]),D.set(L.end[0]-L.mid[0],L.end[1]-L.mid[1],L.end[2]-L.mid[2]),D.lengthSq()<1e-10&&D.set(0,-1,0),D.normalize(),I.set(-Z*Math.cos(p.twist),0,Z*Math.sin(p.twist)),I.addScaledVector(D,-I.dot(D)),I.lengthSq()<1e-4&&I.set(0,0,1).addScaledVector(D,-D.z),I.normalize(),E.crossVectors(I,D),N.makeBasis(I,D,E),Ae.quaternion.setFromRotationMatrix(N),Tl(t,p,Se===0?t.hipL:t.hipR,S);let He=Se===0?p.footL:p.footR;x[0]=He[0],x[1]=He[1]+U,x[2]=He[2],H(Z*.15,0,1),yp(S,x,C,C,_,L),d[Se].set(S,L.mid,L.end,L.stretch);let se=c[Se];se.position.set(L.end[0],L.end[1]-U,L.end[2]),se.rotation.set(Math.min(Math.max(L.end[1]-U,0),.3)*1.1,p.twist*.3,0)}}function q(Y){if(m)for(let K=0;K<Ap;K++)zn(g[K],y(f,K),v,Y),M(p,K,g[K].x);ee(),a.update(Y)}El("idle",0,t,p),ee();function te(){e.traverse(Y=>{!Y.isMesh||Y.userData.isOutline||(Y.geometry.dispose(),Y!==u&&Y.material.dispose())}),e.removeFromParent()}return{root:e,spec:t,face:a,setPose:b,update:q,dispose:te,shadow:u}}var B2=.15,z2=.03,Bv=t=>t<=0?0:t>=1?1:t*t*(3-2*t);function Yi(t){let e=t.spec,n="idle",i=0,s="idle",r=0,o=0,a=yt[n].ease,l=Vi(),c=Vi(),h=El(n,0,e);Cu(h,h,1,l);function d(p,{fade:g,at:m}={}){Object.prototype.hasOwnProperty.call(yt,p)&&(p===n&&yt[p].loop||(p==="flinch"&&n!=="flinch"&&(s=n),Cu(h,h,1,l),a=u(),r=g===void 0?p==="flinch"?z2:B2:Math.max(g,0),o=0,n=p,i=Number.isFinite(m)&&m>0?m:0,t.face.setTalking(p==="talk")))}function u(){let p=r>0?Bv(o/r):1;return a+(yt[n].ease-a)*p}function f(p,g=p){let m=yt[n];if(i+=p,o+=g,m.loop)i>=m.duration&&(i-=m.duration*Math.floor(i/m.duration));else if(i>=m.duration)return d(s),f(0);El(n,i,e,c),Cu(l,c,r>0?Bv(o/r):1,h),t.setPose(h,u())}return{play:d,update:f,current:()=>n}}function Or(t,e,n){let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*n)<<o}return"#"+r.toString(16).padStart(6,"0")}function Cl(t){for(let e of Object.values(t))e&&typeof e=="object"&&Cl(e);return Object.freeze(t)}var Rl=F.glorpPurple,ws="#ffcf3a",Ip=Cl({associate:{shirt:Rl,collar:Or(Rl,F.ink,.25),logo:F.gel,pants:Or(F.planet,F.ink,.3),skin:F.daleSkin,hair:F.daleHair,shoe:Or(F.ink,Rl,.3),sole:F.cream,lanyard:F.hotPink,badge:F.cream,badgeStripe:F.teal,headset:Or(F.ink,F.lilac,.25),mic:F.hotPink},trainer:{shirt:F.planet,collar:F.planet,logo:F.gel,pants:Or(F.teal,F.ink,.45),skin:F.daleSkin,hair:F.daleHair,shoe:F.cream,sole:F.ink,lanyard:F.hotPink,badge:F.cream,badgeStripe:F.teal,headset:F.ink,mic:F.hotPink},boss:{shirt:Or(Rl,F.ink,.15),collar:ws,logo:ws,pants:Or(Rl,F.ink,.55),skin:F.daleSkin,hair:ws,shoe:ws,sole:F.ink,lanyard:ws,badge:F.cream,badgeStripe:F.hotPink,headset:ws,mic:F.hotPink}}),Ut=Cl({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:Ip.associate,outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}}),zv=Cl({...Ut,name:"trainer",colors:Ip.trainer,torso:{...Ut.torso,sleeve:.02},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Ut.face,seed:11}}),Du=Cl({...Ut,name:"overlord",colors:Ip.boss,face:{...Ut.face,seed:21}});var H2=1.5,G2=8,V2=-.2,W2=1.3,Hv=.6,X2=Math.atan2(1.3,-4),Y2=new z(-.45,.22,-1).applyEuler(new Wn(-.2,.68,0)).toArray(),Gv=10,q2=.8,$2=.05,Z2=["idle","run","aim","flinch","talk"],Pl=Object.keys(Dr),Vv=(t,e,n)=>Math.min(n,Math.max(e,t));function K2(t,e,n,i=[0,0,0]){return i[0]=Math.sin(t)*Math.cos(e)*n,i[1]=Math.sin(e)*n,i[2]=Math.cos(t)*Math.cos(e)*n,i}function J2(t,e,n=X.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[t[0]+r*n.right-i*n.back,t[1]+n.up,t[2]+o*n.right-s*n.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Wv({canvas:t,gl:e}){let n=fu(t,e),i=n.renderer,s=du(t),r=document.getElementById("cr-readout"),o=new br,a=new Sn(X.camera.fov,1,.1,100),l=pu({planetDir:Y2});o.add(l.mesh);let c=Sv();o.add(c.group);let h=[];function d(se,Ne,fe){let ge=Xi(fe===void 0?Ut:{...Ut,face:{...Ut.face,seed:fe}});ge.root.position.set(se,0,Ne),ge.root.rotation.y=Hv,o.add(ge.root);let Ce=Yi(ge),re={rig:ge,anim:Ce};return h.push(re),re}let u=d(c.spawn[0],c.spawn[2]),f=[],p=!1,g=0,m=!0,v=!1,y=.685,M=.1,b=4.6,w=!1,S=new z(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),x=[0,0,0];function _(se){if(!(!Z2.includes(se)&&!Object.prototype.hasOwnProperty.call(yt,se))){u.anim.play(se);for(let Ne of f)Ne.anim.play(p?"run":se)}}function L(se){let Ne=Pl.indexOf(se);if(!(Ne<0)){g=Ne;for(let fe of h)fe.rig.face.setExpression(se)}}function D(se){m=!!se,dp(o,m)}function I(se){v=!!se,u.rig.root.rotation.y=v?X2:Hv}function E(se){if(se=!!se,se!==p)if(p=se,se){let Ne=c.spawn[2]+2.4;for(let fe=0;fe<Gv;fe++){let ge=c.spawn[0]+(fe-(Gv-1)/2)*q2,Ce=d(ge,Ne,10+fe);Ce.anim.play("run"),Ce.rig.face.setExpression(Pl[g]),f.push(Ce)}dp(o,m)}else{for(let Ne of f)Ne.rig.dispose(),h.splice(h.indexOf(Ne),1);f=[]}}function N(){let se=n.resize();a.aspect=se.aspect,a.updateProjectionMatrix()}N(),window.addEventListener("resize",N),t.addEventListener("mousedown",se=>{se.button===0&&(w=!0)}),window.addEventListener("mouseup",()=>{w=!1}),window.addEventListener("mousemove",se=>{w&&!s.isLocked()&&R(se.movementX||0,se.movementY||0,.006)}),t.addEventListener("wheel",se=>{b=Vv(b*Math.exp(se.deltaY*.001),H2,G2)},{passive:!0});function R(se,Ne,fe){y-=se*fe,M=Vv(M+Ne*fe,V2,W2)}window.addEventListener("keydown",se=>{se.repeat||(se.code==="Digit4"?_("flinch"):se.code==="Digit5"?_("talk"):se.code==="KeyO"?D(!m):se.code==="KeyP"?E(!p):se.code==="KeyL"?s.requestLock():se.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let C=0,U=0,H=0,ee=0,q=0,te=0,Y=null,K=0;window.__cr.stats=()=>({fps:C,ms:U,calls:q,tris:te,scale:n.scale(),characters:h.length}),window.__cr.anim=_,window.__cr.orbit=(se,Ne,fe)=>{y=se,M=Ne,fe&&(b=fe)},window.__cr.expression=L,window.__cr.perf=E,window.__cr.gameCam=I,window.__cr.outlines=D;function Se(se){se.pressed.weapon1&&_("idle"),se.pressed.weapon2&&_("run"),se.pressed.weapon3&&_("aim"),se.pressed.interact&&L(Pl[(g+1)%Pl.length]),se.pressed.grenade&&I(!v)}function Z(){if(v){let se=J2([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(se.pos),a.lookAt(se.look[0],se.look[1],se.look[2])}else K2(y,M,b,x),a.position.set(S.x+x[0],S.y+x[1],S.z+x[2]),a.lookAt(S)}let ye=se=>se.toFixed(2);function Ae(){let se=Y?Object.keys(Y.held).filter(ge=>Y.held[ge]).join(" "):"",Ne=s.padStatus(),fe=Y&&Ne!=="none"&&Ne!=="unrecognised controller"?`Gamepad: ${Ne}
  move ${ye(Y.moveX)}, ${ye(Y.moveY)}  look ${ye(Y.lookX)}, ${ye(Y.lookY)}
  held: ${se||"nothing"}`:`Gamepad: ${Ne}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${Pl[g]}   camera: ${v?"game":"orbit"}   outlines: ${m?"on":"off"}`,`${Math.round(C)} fps   ${ye(U)} ms   scale ${n.scale()}`,`${q} draw calls   ${te} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${Y?Math.round(Y.lookDX):0}, ${Y?Math.round(Y.lookDY):0}`,fe].join(`
`)}let He=uu({step(){},render(se,Ne){let fe=Math.min(Ne,$2);Y=s.poll(),Se(Y),s.isLocked()&&!v&&R(Y.lookDX,Y.lookDY,.003),v||R(Y.lookX*600*fe,Y.lookY*600*fe,.004),l.update(performance.now()/1e3),c.update(fe);for(let ge of h)ge.anim.update(fe),ge.rig.update(fe);Z(),i.render(o,a),q=i.info.render.calls,te=i.info.render.triangles,H++,ee+=Ne,ee>=1&&(C=H/ee,U=ee/H*1e3,H=0,ee=0),K+=Ne,K>=.1&&(K=0,Ae()),n.frameDone(Ne*1e3)}});Z(),i.render(o,a),q=i.info.render.calls,te=i.info.render.triangles,Ae(),He.start()}function Nu(){let t=!1,e=0,n=.18;return{update(i,s,r,o){return n=o,t?(e+=r,i?!1:(t=!1,e<=o)):s?i?(t=!0,e=r,!1):!0:!1},holding(){return t&&e>n},reset(){t=!1,e=0}}}function at(t,e,n="wall",i=void 0){let s={min:Object.freeze([...t]),max:Object.freeze([...e]),kind:n};return i&&(s.prop=i),Object.freeze(s)}var Lp=1e-9;function En(t,e,n,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=t.filter(m=>m.max[1]>o&&m.min[1]<a),c=Math.hypot(n[0],n[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=n[0]/h,u=n[2]/h,f=!1,p=0,g=0;for(let m=0;m<h;m++){let v=r[0],y=r[2];r[0]+=d,r[2]+=u;let M=!1;for(let b=0;b<5;b++){let w=null,S=Lp;for(let x of l){let _=Math.max(x.min[0],Math.min(r[0],x.max[0])),L=Math.max(x.min[2],Math.min(r[2],x.max[2])),D=r[0]-_,I=r[2]-L,E=Math.hypot(D,I),N,R,C;if(E>Lp){if(E>=i)continue;N=i-E,R=D/E,C=I/E}else{let U=[[r[0]-x.min[0],-1,0],[x.max[0]-r[0],1,0],[r[2]-x.min[2],0,-1],[x.max[2]-r[2],0,1]],H=U[0];for(let ee of U)ee[0]<H[0]&&(H=ee);N=H[0]+i,R=H[1],C=H[2]}N>S&&(S=N,w=[R,C])}if(!w){M=!0;break}if(b===4)break;r[0]+=w[0]*S,r[2]+=w[1]*S,f=!0,p=w[0],g=w[1]}M||(r[0]=v,r[2]=y,f=!0)}return f||(r[0]=e[0]+n[0],r[2]=e[2]+n[2]),{pos:r,hit:f,normal:[p,0,g]}}function hi(t,e,n,i){let s=1,r=[n[0]-e[0],n[1]-e[1],n[2]-e[2]];for(let o of t){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<Lp)(e[h]<d||e[h]>u)&&(c=!1);else{let f=(d-e[h])/r[h],p=(u-e[h])/r[h];if(f>p){let g=f;f=p,p=g}f>a&&(a=f),p<l&&(l=p),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function Xo(t,e,n=0){for(let i of t)if(e[0]>=i.min[0]-n&&e[0]<=i.max[0]+n&&e[1]>=i.min[1]-n&&e[1]<=i.max[1]+n&&e[2]>=i.min[2]-n&&e[2]<=i.max[2]+n)return!0;return!1}var Dp=["fov","right","up","back"],ku=Math.PI*2,j2=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),qv=t=>t!=="normal"&&j2.includes(t);function Xv(t,e,n={}){let i=qv(e)&&t[e]&&typeof t[e]=="object"?t[e]:null;for(let s of Dp)n[s]=i&&i[s]!==void 0?i[s]:t[s];return n}function Yv(t,e){let n=qv(e)?t[e]:null;return n&&typeof n=="object"&&n.shakeWeight>0?n.shakeWeight:0}function $v(t,e,n,i=0){return e?t>=n:t>=n+i}function Zv({tuning:t=X.camera,look:e=X.look}={}){let n={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],c={x:0,v:0},h=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],d={},u=[0,0,0],f=[0,0,0],p=[0,0,0],g=[0,0,0],m=[0,0,1],v={pos:g,dir:m,fov:70},y={on:!1,t:0,p:[0,0,0]},M=1,b=0,w=!1;return{yaw:0,pitch:0,look(x,_,L,D,I,E,N=1){(x||_||L||D)&&(y.on=!1);let R=E?e.aimScale:1,C=e.invertY?-1:1;this.yaw-=x*e.mouse*R,this.pitch-=_*e.mouse*R*C;let U=e.pad,H=R*N;L&&(this.yaw-=Math.sign(L)*Math.abs(L)**U.expo*U.yawRate*H*I),D&&(this.pitch-=Math.sign(D)*Math.abs(D)**U.expo*U.pitchRate*H*I*C),this.pitch<t.pitchMin&&(this.pitch=t.pitchMin),this.pitch>t.pitchMax&&(this.pitch=t.pitchMax)},bump(x=1){let _=t.bump;if(!_||!(_.amount>0)||!(x>0))return;s.x=Math.min(s.x+_.amount*x,2*_.amount);let L=t.slamShake;L&&L.amount>0&&L.time>0&&(o.t=L.time,o.amp=L.amount*x)},dip(x){Number.isFinite(x)&&x>0&&(r.x=Math.min(r.x+x,.1))},kick(x,_=0){let L=t.recoil?t.recoil.max:0;if(!(L>0))return;let D=(I,E)=>Math.max(-L,Math.min(L,I+(Number.isFinite(E)?E:0)));a.p.x=Math.max(0,D(a.p.x,x)),a.y.x=D(a.y.x,_)},hold(x){if(!(t.holdTime>0)){y.on=!1;return}y.on=!0,y.t=t.holdTime,y.p[0]=x[0],y.p[1]=x[1],y.p[2]=x[2]},holding(){return y.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(x,_,L="normal",D=1){_!==void 0&&(this.yaw=_),Xv(t,L,d);for(let I of Dp)n[I].x=d[I],n[I].v=0;i.x=D,i.v=0,c.x=Yv(t,L),c.v=0;for(let I=0;I<3;I++)h[I].x=x[I],h[I].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,M=1,w=!0,y.on=!1},update(x,{target:_,mode:L="normal",side:D=1},I){w||this.snap(_,this.yaw,L,D),x>0||(x=0),b+=x,Xv(t,L,d);for(let Y of Dp)zn(n[Y],d[Y],t.blendHalfLife,x);zn(c,Yv(t,L),t.blendHalfLife,x),zn(i,D,t.sideHalfLife,x);for(let Y=0;Y<3;Y++)zn(h[Y],_[Y],t.followHalfLife,x);zn(s,0,t.bump?t.bump.halfLife:0,x),zn(r,0,t.bump?t.bump.halfLife:0,x);let E=t.recoil?t.recoil.halfLife:0;zn(a.p,0,E,x),zn(a.y,0,E,x);let N=Math.PI/180,R=t.probeRadius,C=n.back.x,U=1,H=0,ee=Y=>{let K=this.yaw+a.y.x*N,Se=Math.max(t.pitchMin,Math.min(t.pitchMax,this.pitch+a.p.x*N));H=Math.sin(K),U=Math.cos(K);let Z=Math.sin(Se),ye=Math.cos(Se);u[0]=h[0].x,u[1]=h[1].x+n.up.x,u[2]=h[2].x,l[0]=_[0],l[1]=_[1]+n.up.x,l[2]=_[2];let Ae=hi(I,l,u,R);if(Ae<1)for(let re=0;re<3;re++)u[re]=l[re]+(u[re]-l[re])*Ae;let He=n.right.x*i.x;f[0]=u[0]-U*He,f[1]=u[1],f[2]=u[2]+H*He;let se=hi(I,u,f,R);for(let re=0;re<3;re++)f[re]=u[re]+(f[re]-u[re])*se;m[0]=H*ye,m[1]=Z,m[2]=U*ye;for(let re=0;re<3;re++)p[re]=f[re]-m[re]*C;let Ne=hi(I,f,p,R),fe=C>1e-6?Math.max(t.minBack/C,Ne):1;fe>1&&(fe=1),fe<M?M=fe:Y&&(M+=(fe-M)*(t.wallReturnHalfLife>0?1-Math.pow(2,-x/t.wallReturnHalfLife):1));let ge=C*M-s.x;for(let re=0;re<3;re++)g[re]=f[re]-m[re]*ge;let Ce=hi(I,u,g,R);if(Ce<1)for(let re=0;re<3;re++)g[re]=u[re]+(g[re]-u[re])*Ce};if(ee(!0),y.on)if(y.t-=x,y.t<=0||L!=="aim")y.on=!1;else for(let Y=0;Y<3;Y++){let K=y.p[0]-g[0],Se=y.p[1]-g[1],Z=y.p[2]-g[2],ye=Math.hypot(K,Se,Z);if(ye<.5)break;this.yaw=Math.atan2(K,Z)-a.y.x*N,this.pitch=Math.max(t.pitchMin,Math.min(t.pitchMax,Math.asin(Se/ye)-a.p.x*N)),ee(!1)}let q=t.shake;if(q&&q.amp&&c.x>0){let Y=q.amp*(c.x>1?1:c.x),K=Math.sin(ku*q.hz*b)*Y,Se=Math.sin(ku*q.hz*1.3*b+1)*Y,Z=-U,ye=H;g[0]+=Z*K-ye*m[1]*Se,g[1]+=(ye*m[0]-Z*m[2])*Se,g[2]+=ye*K+Z*m[1]*Se}g[1]-=r.x;let te=t.slamShake;if(o.t>0&&te&&te.time>0){o.t=Math.max(0,o.t-x);let Y=o.t/te.time,K=o.amp*Y*Y,Se=Math.sin(ku*te.hz*o.t)*K,Z=Math.sin(ku*te.hz*1.27*o.t+2)*K,ye=-U,Ae=H;g[0]+=ye*Se-Ae*m[1]*Z,g[1]+=(Ae*m[0]-ye*m[2])*Z,g[2]+=Ae*Se+ye*m[1]*Z}return v.fov=n.fov.x,v}}}var bn=[F.hotPink,F.playerOrange,F.glorpPurple,F.tealLight,F.lilac];function Q2(t){if(t.prop)return t.prop;let e=t.max[0]-t.min[0],n=t.max[2]-t.min[2],i=t.max[1]-t.min[1],s=Math.max(e,n),r=Math.min(e,n);return t.kind==="pillar"?"pillar":t.kind==="low"?r<.7&&s>=1.8?"planter":"counter":t.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function eA(){let t=[],e=(n,i)=>{let s=new Ke(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new bt(o,3)),n};return{list:t,box(n,i,s){let r=new mt(i[0]-n[0],i[1]-n[1],i[2]-n[2]);r.translate((n[0]+i[0])/2,(n[1]+i[1])/2,(n[2]+i[2])/2),t.push(e(r,s))},cyl(n,i,s,r,o,a,l="y"){let c=new Wt(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(n,i,s),t.push(e(c,a))},ball(n,i,s,r,o){let a=new $t(r,7,5);a.translate(n,i,s),t.push(e(a,o))}}}var wi=(t,e,n=t.min[1],i=t.max[1])=>[[t.min[0]-e,n,t.min[2]-e],[t.max[0]+e,i,t.max[2]+e]];function tA(t,e,n,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],d=.015,u=.06;o?(t.box([a+s,n,l+d],[c-s,i,l+u],r),t.box([a+s,n,h-u],[c-s,i,h-d],r)):(t.box([a+d,n,l+s],[a+u,i,h-s],r),t.box([c-u,n,l+s],[c-d,i,h-s],r))}function Si(t,e){let n=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=n>=i,r=s?n:i,o=s?i:n,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,d,u,f,p,g){let m=a(c,d),v=a(h,u),y=l(c,d),M=l(h,u);t.box([Math.min(m,v),f,Math.min(y,M)],[Math.max(m,v),p,Math.max(y,M)],g)},cyl(c,h,d,u,f,p,g="y"){let m=g==="y"?"y":g==="u"?s?"x":"z":s?"z":"x";t.cyl(a(c,h),d,l(c,h),u,f,p,m)}}}function nA(t,e){let n=Si(t,e),{len:i,dep:s}=n,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;n.slab(.03,i-.03,.04,s-.04,0,.5,F.shadowTint);for(let l=0;l<=o;l++){let c=l*a;n.slab(c,c+r,.06,s-.06,0,e.max[1],F.lilac),n.slab(c+.03,c+r-.03,0,.07,.8,.94,F.hotPink),n.slab(c+.03,c+r-.03,s-.07,s,.8,.94,F.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;n.slab(c,h,s/2-.03,s/2+.03,.5,.94,F.tealLight),n.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,F.cream)}}function iA(t,e,n){let i=Si(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,F.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,F.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,F.cream),i.slab(.15,s-.15,0,.06,.25,.6,F.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,F.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let d=(h+.5+c%2*.25)/l*s,u=a===1?r/2:r*(.3+c*.4);i.cyl(d,u,(.82+o-.02)/2,.14,o-.84,bn[(h+c*2+n)%bn.length]),i.cyl(d,u,o-.01,.15,.02,F.cream)}}function sA(t,e,n){n%3===1?iA(t,e,n):nA(t,e)}function rA(t,e,n){let i=Si(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,F.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,F.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,F.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,F.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?F.ink:bn[(l+n)%bn.length])}function oA(t,e,n){let i=Si(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,F.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,F.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,F.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let d=0;d<a;d++)for(let u=0;u<l;u++){let f=(u+.5)/l*s,p=a===1?r/2:r*(.3+d*.4),g=bn[(u+d+n)%bn.length];i.cyl(f,p,h,.015,.14,F.cream,"u"),i.cyl(f-.07,p,h,c,.06,g,"u"),i.cyl(f+.07,p,h,c,.06,g,"u")}}function aA(t,e){let n=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=n?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];t.box(...wi({min:e.min,max:o},-.03,e.min[1],o[1]-.1),F.teal),t.box(...wi({min:e.min,max:o},0,o[1]-.1,o[1]),F.cream),tA(t,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,F.hotPink,n);let a=(p,g,m,v,y)=>t.box(n?[e.min[0]+p,m,e.min[2]+.12]:[e.min[0]+.12,m,e.min[2]+p],n?[e.min[0]+g,v,e.max[2]-.12]:[e.max[0]-.12,v,e.min[2]+g],y);a(.3,.7,o[1],o[1]+.06,F.cream),a(.32,.68,o[1]+.06,o[1]+.12,F.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,F.cream);let l=n?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=p=>n?e.min[0]+p:e.min[2]+p;n?t.cyl(c(r-.5),o[1]+.14,l,.06,.28,F.gel):t.cyl(l,o[1]+.14,c(r-.5),.06,.28,F.gel);let h=.14,d=n?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[p,g]of d)n?t.box([p,e.min[1],e.min[2]],[g,i,e.max[2]],F.lilac):t.box([e.min[0],e.min[1],p],[e.max[0],i,g],F.lilac);let u=d[0][1],f=d[1][0];n?(t.box([u,i-.12,e.min[2]],[f,i,e.max[2]],F.lilac),t.box([u,o[1],e.min[2]+.2],[f,i-.12,e.max[2]-.2],F.tealLight)):(t.box([e.min[0],i-.12,u],[e.max[0],i,f],F.lilac),t.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,f],F.tealLight))}function lA(t,e,n){let i=Si(t,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,F.shadowTint);for(let[h,d]of[[0,a],[s-a,s]])for(let[u,f]of[[0,a],[r-a,r]])i.slab(h,d,u,f,.12,o,F.lilac);i.slab(0,s,0,r,o-.1,o,F.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,F.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,F.cream),i.cyl(s/2,c,l,.025,s+.1,F.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?F.ink:bn[n%bn.length],"u")}function cA(t,e,n){let i=Si(t,e),{len:s,dep:r}=i,o=e.max[1],a=1.1;i.slab(.06,s-.06,.04,r-.04,0,.08,F.shadowTint),i.slab(.04,s-.04,.02,r-.02,.08,a-.06,F.hotPink),i.slab(.15,s-.15,0,.05,.3,.7,F.cream),i.slab(.15,s-.15,r-.05,r,.3,.7,F.cream),i.slab(-.04,s+.04,-.04,r+.04,a-.06,a,F.cream),i.slab(0,s,r/2-.04,r/2+.04,a,o,F.lilac),i.slab(0,s,r/2-.07,r/2+.07,o-.1,o,F.shadowTint);let l=Math.max(2,Math.floor(s/.9));for(let c=0;c<l;c++)for(let h of[r*.2,r*.8]){let d=(c+.5)/l*s,u=bn[(c+n+(h>r/2?2:0))%bn.length],f=Math.min(o-.14,a+.55);i.cyl(d,h,a+.04,.13,.08,F.ink),i.cyl(d,h,(a+.08+f)/2,.11,f-a-.08,u),i.cyl(d,h,f+.03,.12,.06,F.cream)}}function hA(t,e,n){let i=Si(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.06,s-.06,.05,r-.05,0,.1,F.shadowTint),i.slab(.03,s-.03,.03,r-.03,.1,o-.1,F.teal),i.slab(.2,s-.2,0,.06,.25,.65,F.hotPink),i.slab(.2,s-.2,r-.06,r,.25,.65,F.hotPink),i.slab(-.04,s+.04,-.04,r+.04,o-.1,o-.04,F.cream);let a=Math.max(2,Math.floor(s/.6));for(let l=0;l<a;l++){let c=(l+.5)/a*s;i.cyl(c,r/2,o-.035,.2,.07,F.ink),i.cyl(c,r/2,o-.02,.17,.04,bn[(l+n)%bn.length])}}function uA(t,e,n){let i=Si(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.05,s-.05,.05,r-.05,0,.1,F.shadowTint),i.slab(.08,s-.08,.08,r-.08,.1,o-.08,F.cream),i.slab(.08,s-.08,.04,.09,.4,.55,bn[n%bn.length]),i.slab(.08,s-.08,r-.09,r-.04,.4,.55,bn[n%bn.length]),i.slab(-.04,s+.04,-.04,r+.04,o-.08,o,F.lilac)}function dA(t,e,n){t.box(...wi(e,0,e.min[1],e.max[1]),F.cream),t.box(...wi(e,.05,e.min[1],e.min[1]+.25),F.shadowTint),t.box(...wi(e,.04,e.min[1]+1.1,e.min[1]+2.9),F.ink),[1.4,1.75,2.1,2.45].forEach((i,s)=>t.box(...wi(e,.055,e.min[1]+i,e.min[1]+i+.1),bn[(s+n)%bn.length])),t.box(...wi(e,.05,e.max[1]-.25,e.max[1]),F.shadowTint)}function fA(t,e){let n=Si(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.05,.2,.05,s-.05,0,r-.12,F.lilac),n.slab(i-.2,i-.05,.05,s-.05,0,r-.12,F.lilac),n.slab(0,i,0,s,r-.12,r,F.teal);for(let o=.3;o<i-.2;o+=.3)n.slab(o,o+.03,0,s,r-.125,r-.1,F.shadowTint)}function pA(t,e,n){let i=Si(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.02,s-.02,.02,r-.02,0,o*.5,F.playerOrange),i.slab(0,s,0,r,o*.5-.06,o*.5,F.shadowTint);let a=Math.max(2,Math.floor(s/.5)),l=Math.min(r/2-.02,(o-o*.5)/2-.01);for(let c=0;c<a;c++)i.cyl((c+.5)/a*s,r/2,o*.5+l+.005,l,l*2,c%2?F.gel:F.teal)}function mA(t,e){let n=Si(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.04,i-.04,.04,s-.04,0,.12,F.shadowTint),n.slab(.02,i-.02,.02,s-.02,.12,r-.1,F.hotPink),n.slab(.1,i-.1,0,.05,.3,.5,F.cream),n.slab(.1,i-.1,s-.05,s,.3,.5,F.cream),n.slab(0,i,0,s,r-.1,r,F.playerOrange)}function gA(t,e){t.box(...wi(e,0,e.min[1],e.max[1]),F.cream),t.box(...wi(e,.05,e.min[1],e.min[1]+.25),F.shadowTint),t.box(...wi(e,.03,e.min[1]+1,e.min[1]+1.12),F.hotPink),t.box(...wi(e,.05,e.max[1]-.25,e.max[1]),F.shadowTint)}function vA(t){if(!t)return[];let[e,,n]=t.min,[i,,s]=t.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,n],max:[h+c/2,l,n+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=n+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function Kv(t,e=null){let n=eA();for(let s of vA(e))n.box(s.min,s.max,F.tealLight);let i=0;return t.forEach((s,r)=>{let o=Q2(s);o==="counter"?sA(n,s,i++):o==="planter"?(r%2?oA:rA)(n,s,r):o==="desk"?aA(n,s):o==="shelf"?lA(n,s,r):o==="pillar"?gA(n,s):o==="bar"?cA(n,s,r):o==="bowl"?hA(n,s,r):o==="booth"?uA(n,s,r):o==="menu"?dA(n,s,r):o==="seat"?fA(n,s):o==="plant"?pA(n,s,r):o==="velvet"?mA(n,s):n.box(s.min,s.max,F.lilac)}),Ot(n.list,!1)}var qs=2.7,Ou=.22,Uu=.16;function Il(t,e,n){let i=new mt(e[0]-t[0],e[1]-t[1],e[2]-t[2]);i.translate((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),i.deleteAttribute("uv");let s=new Ke(n),r=i.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return i.setAttribute("color",new bt(o,3)),i}function Jv(t){let e=t.w,n=e/2,i=new ft;i.name="exit-gate",i.position.set(t.pos[0],t.pos[1],t.pos[2]),i.rotation.y=t.yaw;let s=new ot(Ot([Il([-n-Ou,0,0],[-n,qs+.25,Uu],F.lilac),Il([n,0,0],[n+Ou,qs+.25,Uu],F.lilac),Il([-n-Ou,qs,0],[n+Ou,qs+.25,Uu],F.hotPink),Il([-n,0,.005],[n,qs,.04],F.gel)].map(u=>u.toNonIndexed()),!1),At({vertexColors:!0,rim:.1}));s.name="gate-frame",i.add(s);let r=u=>{let f=new ot(Il(u<0?[0,0,.04]:[-n,0,.04],u<0?[n,qs,.1]:[0,qs,.1],F.teal).toNonIndexed(),At({vertexColors:!0,rim:.1}));return f.position.x=u*n,f.name=u<0?"gate-door-west":"gate-door-east",i.add(f),f},o=r(-1),a=r(1),l=_s({text:"GO \u2192",w:2.2,h:.8,bg:F.glorpPurple,fg:F.gel,seed:5});l.position.set(0,qs+.85,Uu+.1),i.add(l);let c=0,h=0,d=()=>{let u=Math.max(.06,1-c);o.scale.x=u,a.scale.x=u,l.visible=c>.5};return d(),{group:i,setOpen(u,f=!1){h=u?1:0,f&&(c=h,d())},update(u){if(c===h||!(u>0))return;let f=1/Math.max(X.run.gateOpenTime,.001);c=c<h?Math.min(h,c+u*f):Math.max(h,c-u*f),d()},openness:()=>c}}var jv=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(jv)),t),$s=.3,xA=[at([-12,-1,-12],[12,0,12],"floor"),at([-12-$s,0,-12-$s],[12+$s,4,-12]),at([-12-$s,0,12],[12+$s,4,12+$s]),at([-12-$s,0,-12],[-12,4,12]),at([12,0,-12],[12+$s,4,12]),at([5,0,-9],[5.3,4,-3]),at([6.7,0,-9],[7,4,-3]),at([-11,0,-7.3],[-6,3,-7]),at([-6.3,0,-11],[-6,3,-7]),at([-4,0,-3],[-2,1,-2.4],"low"),at([3,0,3],[3.6,1,5],"low"),at([-5,0,3],[-3.8,2.2,3.6],"tall"),at([1,0,-6],[1.6,2.2,-4],"tall"),at([-9.4,0,.6],[-8.6,4,1.4],"pillar"),at([8.6,0,3.6],[9.4,4,4.4],"pillar"),at([-9,0,6.5],[-6,1,7.1],"low"),at([-4,0,6.5],[-1,1,7.1],"low"),at([6,0,6],[10,2.2,6.6],"tall"),at([-12,0,-1],[-10,1,-.4],"low")],Qv=[];for(let t=0;t<=12;t++)Qv.push({min:[-10+t-.05,0,10],max:[-10+t+.05,.02,11]});var Bu=jv({boxes:xA,marks:Qv,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function Np(t){let e=t.map(n=>{let i=new mt(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);return i.translate((n.min[0]+n.max[0])/2,(n.min[1]+n.max[1])/2,(n.min[2]+n.max[2])/2),i});return Ot(e,!1)}var Zs=.03,Ks=.3,Js=.12,Fu=2;function yA(t=Bu){let e=t.boxes.find(c=>c.kind==="floor");if(!e)return[];let[n,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([n,0,i],[s,Ks,i+Zs]),l([n,0,r-Zs],[s,Ks,r]),l([n,0,i],[n+Zs,Ks,r]),l([s-Zs,0,i],[s,Ks,r]);for(let c=n+Fu;c<s-.5;c+=Fu)l([c-Js/2,Ks,i],[c+Js/2,o,i+Zs]),l([c-Js/2,Ks,r-Zs],[c+Js/2,o,r]);for(let c=i+Fu;c<r-.5;c+=Fu)l([n,Ks,c-Js/2],[n+Zs,o,c+Js/2]),l([s-Zs,Ks,c-Js/2],[s,o,c+Js/2]);return a}function ex(t=Bu){let e=new ft,n=t.boxes.find(a=>a.kind==="floor");e.add(gu({w:n.max[0]-n.min[0],d:n.max[2]-n.min[2]}));let i=t.boxes.filter(a=>a.kind!=="floor");if(i.length){let a=new ot(Qn(Kv(i,n)),At({vertexColors:!0}));a.name="grey-props",Tn(a),e.add(a)}let s=yA(t);if(s.length){let a=new ot(Np(s),At({color:F.shadowTint}));a.name="grey-wall-trim",e.add(a)}if(t.marks.length){let a=new ot(Np(t.marks),At({color:F.hotPink}));a.name="grey-marks",e.add(a)}if(t.ammoCrates&&t.ammoCrates.length){let a=[];for(let c of t.ammoCrates)a.push({min:[c.pos[0]-.35,0,c.pos[2]-.25],max:[c.pos[0]+.35,.4,c.pos[2]+.25]}),a.push({min:[c.pos[0]-.39,.4,c.pos[2]-.29],max:[c.pos[0]+.39,.5,c.pos[2]+.29]});let l=new ot(Qn(Np(a)),At({color:F.playerOrange}));l.name="grey-crate",Tn(l),e.add(l)}if(t.landmark){let a=t.landmark,l=_s({text:a.text,w:a.w,h:a.h});l.position.set(a.pos[0],a.pos[1],a.pos[2]),l.rotation.y=Math.PI,e.add(l)}for(let a of t.signs||[]){let l=_s({text:a.text,w:a.w,h:a.h,bg:a.bg,seed:4});l.position.set(a.pos[0],a.pos[1],a.pos[2]),l.rotation.y=a.yaw,e.add(l)}let r=null;if(t.cancelSign){let a=t.cancelSign;r=_s({text:a.text,w:a.w,h:a.h,bg:a.bg,seed:6}),r.name="cancel-sign",r.position.set(a.pos[0],a.pos[1],a.pos[2]),r.rotation.y=a.yaw,r.visible=!1,e.add(r)}let o=t.exit?Jv(t.exit):null;return o&&e.add(o.group),{group:e,boxes:t.boxes,gate:o,setGateOpen(a,l=!1){o&&o.setOpen(a,l)},setCancelLit(a){r&&(r.visible=!!a)},update(a){o&&o.update(a)}}}var tx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(tx)),t),js=.3,qi=7,Ti=15,_A=[at([-qi,-1,-Ti],[qi,0,Ti],"floor"),at([-qi-js,0,-Ti-js],[qi+js,4,-Ti]),at([-qi-js,0,Ti],[qi+js,4,Ti+js]),at([-qi-js,0,-Ti],[-qi,4,Ti]),at([qi,0,-Ti],[qi+js,4,Ti]),at([-5,0,-9.5],[-3,1,-8.5],"low"),at([2,0,-9.5],[4,1,-8.5],"low"),at([-.4,0,-7.4],[.4,4,-6.6],"pillar"),at([-1,0,-3.5],[1,1,-2.5],"low"),at([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),at([3.5,0,-1.5],[5.5,1,-.5],"low"),at([-4.5,0,3.5],[-2.5,1,4.5],"low"),at([2.5,0,3.5],[4.5,1,4.5],"low"),at([-.4,0,6.6],[.4,4,7.4],"pillar"),at([-4.5,0,9],[-2.5,1,10],"low"),at([2.5,0,9],[4.5,1,10],"low"),at([-1.5,0,12],[1.5,2.2,12.6],"tall")],bA=[-12,-6,.5,7,11],MA=[-6,-2,2,6],zu=[];for(let t of bA)for(let e of MA)zu.push([e,t]);zu.push([0,-5],[0,0],[0,9.5]);zu.push([-3.5,13.5],[3.5,13.5]);var nx=tx({name:"kioskRow",boxes:_A,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:zu,ammoCrates:[{pos:[5.5,0,-12.5]}],exit:{pos:[-4.5,0,Ti],yaw:Math.PI,w:3},landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});function wA(t,e,n){let i=Math.max(t.min[0]-e,0,e-t.max[0]),s=Math.max(t.min[2]-n,0,n-t.max[2]);return Math.hypot(i,s)}function Hu(t,{cols:e,rows:n,clearance:i=.8}){let s=t.filter(o=>o.kind!=="floor"),r=[];for(let o of n)for(let a of e)s.every(l=>wA(l,a,o)>=i)&&r.push([a,o]);return r}var ix=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(ix)),t),Qs=.3,ei=20,ui=18,Kt=(t,e,n,i)=>at(t,e,n,i),sx=[at([-ei,-1,-ui],[ei,0,ui],"floor"),at([-ei-Qs,0,-ui-Qs],[ei+Qs,4,-ui]),at([-ei-Qs,0,ui],[ei+Qs,4,ui+Qs]),at([-ei-Qs,0,-ui],[-ei,4,ui]),at([ei,0,-ui],[ei+Qs,4,ui]),Kt([-7,0,-.35],[7,2.2,.35],"tall","bar"),Kt([-3,0,14.2],[3,2.2,14.9],"tall","bar"),Kt([-9,0,9.5],[-5,1,10.5],"low","bowl"),Kt([5,0,9.5],[9,1,10.5],"low","bowl"),Kt([-1,0,10.8],[1,1,11.8],"low","booth"),Kt([-14.6,0,-5],[-13,1,-4],"low","booth"),Kt([13,0,-5],[14.6,1,-4],"low","booth"),Kt([-14.6,0,4],[-13,1,5],"low","booth"),Kt([13,0,4],[14.6,1,5],"low","booth"),Kt([-3.6,0,-6.5],[-2,1,-5.5],"low","booth"),Kt([2,0,-6.5],[3.6,1,-5.5],"low","booth"),Kt([-3.6,0,4.5],[-2,1,5.5],"low","booth"),Kt([2,0,4.5],[3.6,1,5.5],"low","booth"),Kt([-9,0,-13],[-6,1,-12.4],"low","plant"),Kt([6,0,-13],[9,1,-12.4],"low","plant"),Kt([-17,0,10],[-14,1,10.6],"low","plant"),Kt([10.5,0,13.2],[13.5,1,13.8],"low","plant"),Kt([-18.5,0,-10],[-16.5,1,-9.4],"low","seat"),Kt([16.5,0,-10],[18.5,1,-9.4],"low","seat"),Kt([-12.4,0,-9.4],[-11.6,4,-8.6],"pillar","menu"),Kt([11.6,0,-9.4],[12.4,4,-8.6],"pillar","menu"),Kt([-12.4,0,8.6],[-11.6,4,9.4],"pillar","menu"),Kt([11.6,0,8.6],[12.4,4,9.4],"pillar","menu")],rx=Hu(sx,{cols:[-17.5,-12.5,-7.5,-2.5,2.5,7.5,12.5,17.5],rows:[-15.5,-10.5,-7.5,-2.5,2.5,7.5,12,16.5],clearance:.9});rx.push([0,-3.5],[0,3.5],[0,8],[-4,15.8],[0,15.8],[4,15.8],[14.5,12],[16,16.5],[-12,16],[-9.5,12],[9.5,12]);var ox=ix({name:"smoothieBar",boxes:sx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-16.5],yaw:0},trigger:{z:-14},features:{start:{pos:[0,0,-16.5],yaw:0},startCover:{pos:[-7.5,0,-13.4],yaw:0},mid:{pos:[0,0,-3.5],yaw:0},open:{pos:[0,0,-9],yaw:0},flankWest:{pos:[-16,0,0],yaw:0},flankEast:{pos:[16,0,0],yaw:0}},associates:[{id:"a1",pos:[-8.3,0,10.88]},{id:"a2",pos:[-5.7,0,10.88]},{id:"b1",pos:[5.7,0,10.88]},{id:"b2",pos:[8.3,0,10.88]},{id:"c1",pos:[0,0,12.18]},{id:"t1",kind:"trainer",pos:[-12,0,6]}],pads:[{id:"sauna1",pos:[14.5,0,16.4],spawns:"associate",openKey:"openAfterKillsSmoothie",shareKey:"trainerShareSmoothie"}],tobble:{pos:[1.6,0,-16.5],yaw:0},waypoints:rx,ammoCrates:[{pos:[6.5,0,-16.8]},{pos:[-16.5,0,14.5]}],exit:{pos:[-12,0,ui],yaw:Math.PI,w:3.4},landmark:{pos:[9,3.2,ui-.3],text:"SMOOTHIE BAR",w:7,h:1.4},signs:[{pos:[0,2.9,14.95],yaw:Math.PI,text:"FREE TRIAL COUNTER \u2014 No commitment!*",w:6.2,h:1,bg:"#ff4f9a"},{pos:[-ei+.14,2.2,-2],yaw:Math.PI/2,text:"BUILD-YOUR-BOWL",w:3.2,h:1.2,bg:"#2ec4b6"},{pos:[ei-.14,2.2,2],yaw:-Math.PI/2,text:"BLEND NOW, QUIT LATER",w:3.6,h:1.2,bg:"#ff8a1f"},{pos:[ei-.14,2.4,-12],yaw:-Math.PI/2,text:"SMOOTHIE BAR",w:3.6,h:1.2,bg:"#b9a7ff"}]});var ax=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(ax)),t),er=.3,di=12,Ei=10,lx=[at([-di,-1,-Ei],[di,0,Ei],"floor"),at([-di-er,0,-Ei-er],[di+er,4,-Ei]),at([-di-er,0,Ei],[di+er,4,Ei+er]),at([-di-er,0,-Ei],[-di,4,Ei]),at([di,0,-Ei],[di+er,4,Ei]),at([-4,0,7.2],[4,2.2,7.9],"tall","desk"),at([-8,0,-3.2],[-5.5,1,-2.6],"low","velvet"),at([5.5,0,-3.2],[8,1,-2.6],"low","velvet"),at([-4.5,0,1.8],[-2,1,2.4],"low","velvet"),at([2,0,1.8],[4.5,1,2.4],"low","velvet"),at([-6.4,0,-.4],[-5.6,4,.4],"pillar"),at([5.6,0,4.2],[6.4,4,5],"pillar")],cx=Hu(lx,{cols:[-10,-6,-2,2,6,10],rows:[-8,-5,-1.5,3.5,6,8.8],clearance:.9});cx.push([0,-3.5],[0,2],[-6,5.5],[6,5.5],[-5.5,9],[5.5,9],[0,9]);var hx=ax({name:"cancellationDesk",boss:!0,boxes:lx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-8.5],yaw:0},trigger:{z:-6.5},features:{start:{pos:[0,0,-8.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},desk:{pos:[0,0,5.8],yaw:0}},associates:[],overlord:{spots:[{hide:[-3.2,8.9],pop:[-5.4,8.5]},{hide:[3.2,8.9],pop:[5.4,8.5]}],deskHide:[0,8.9],desk:{x0:-4,x1:4,z:7.2}},cancelSign:{pos:[0,1.75,7.2-.12],yaw:Math.PI,text:"PRESS E / X TO CANCEL",w:3.8,h:.9,bg:"#2a9d2a"},pads:[{id:"sauna1",pos:[-9,0,8.4],spawns:"associate",manual:!0,shareKey:"trainerShareBoss"},{id:"sauna2",pos:[9,0,8.4],spawns:"associate",manual:!0,shareKey:"trainerShareBoss"}],tobble:{pos:[1.5,0,-8.7],yaw:0},waypoints:cx,ammoCrates:[{pos:[-10.5,0,-8.8]}],landmark:{pos:[0,3.2,Ei-.3],text:"CANCELLATION DESK",w:7,h:1.3},signs:[{pos:[-di+.14,2.2,-1],yaw:Math.PI/2,text:"PLEASE TAKE A NUMBER \u2014 NOW SERVING: 3",w:4.2,h:1.3,bg:"#ff4f9a"},{pos:[di-.14,2.2,-1],yaw:-Math.PI/2,text:"ALL SALES FINAL. ALL EXITS FINAL.",w:4.2,h:1.3,bg:"#7a3cff"}]});var ux=Object.freeze({turnstiles:nx,smoothie:ox,desk:hx});var kn=Object.freeze(["turnstiles","smoothie","desk"]),Vu=Object.freeze({turnstiles:"Check-in Turnstiles",smoothie:"Smoothie Bar",desk:"The Cancellation Desk"}),dx=Object.freeze(["Tues 2:00\u20132:10","Tues 2:00\u20132:05","By appointment"]),kp=t=>`Cancellation hours: ${dx[Math.max(0,Math.min(dx.length-1,t|0))]}`,fx="gyms-of-war.checkpoint",Gu=t=>Number.isInteger(t)&&t>=0&&t<kn.length?t:0,Op=t=>{let e=kn.indexOf(t);return e<0?0:e};function SA(t){try{let e=t&&t.getItem(fx);return e==null?0:Gu(Number(e))}catch{return 0}}function TA(t,e){try{t&&t.setItem(fx,String(Gu(e)))}catch{}}function px(t,e,n=X.run.gateReach){if(!t)return!1;let i=e[0]-t.pos[0],s=e[2]-t.pos[2],r=Math.sin(t.yaw),o=Math.cos(t.yaw),a=i*o-s*r,l=i*r+s*o;return Math.abs(a)<=t.w/2&&l>=-.25&&l<=n}function mx({storage:t=null,tuning:e=X}={}){let n=()=>e.run,i=0,s=0,r="play",o=0,a=!1,l=SA(t),c=d=>{s=Gu(d),TA(t,s)},h={get index(){return i},get checkpoint(){return s},get arena(){return kn[i]},get phase(){return r},get cleared(){return a},get fading(){return r!=="play"},get hasNext(){return i<kn.length-1},saved:l,get fade(){return r==="fadeOut"?Math.min(1,o/Math.max(n().fadeOut,1e-6)):r==="black"?1:r==="fadeIn"?Math.max(0,1-o/Math.max(n().fadeIn,1e-6)):0},get gateOpen(){return a&&h.hasNext},markClear(){return r==="play"&&(a=!0),h.gateOpen},touchGate(){return r!=="play"||!h.gateOpen?!1:(r="fadeOut",o=0,!0)},restart(){return a=!1,r="play",o=0,kn[i]},goTo(d){return i=Gu(d),c(i),a=!1,r="play",o=0,kn[i]},newRun(){return h.goTo(0)},step(d){let u=[];if(!(d>0)||r==="play")return u;if(o+=d,r==="fadeOut"&&o>=n().fadeOut){let f=kn[i];i=Math.min(kn.length-1,i+1),c(i),a=!1,r="black",o=0,u.push({type:"swap",from:f,to:kn[i]})}return r==="black"&&o>=n().blackHold&&(r="fadeIn",o=0),r==="fadeIn"&&o>=n().fadeIn&&(r="play",o=0,u.push({type:"faded"})),u}};return h}function Up(t){let e=new Set,n=new Set,i=new Set;t.traverse(s=>{s.geometry&&e.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];if(!(s.userData&&s.userData.isOutline))for(let o of r)n.add(o)});for(let s of n)for(let r of Object.keys(s)){let o=s[r];o&&o.isTexture&&i.add(o)}return e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),t.parent&&t.parent.remove(t),{geometries:e.size,materials:n.size,textures:i.size}}var tr=class t{constructor(e,n,i,s,r="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),t.nextNameID=t.nextNameID||0,this.$name.id=`lil-gui-name-${++t.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Fp=class extends tr{constructor(e,n,i){super(e,n,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Bp(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}var EA={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:Bp,toHexString:Bp},Dl={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},AA={isPrimitive:!1,match:t=>Array.isArray(t)||ArrayBuffer.isView(t),fromHexString(t,e,n=1){let i=Dl.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(i&255)/255*n},toHexString([t,e,n],i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return Dl.toHexString(s)}},RA={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){let i=Dl.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(i&255)/255*n},toHexString({r:t,g:e,b:n},i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return Dl.toHexString(s)}},CA=[EA,Dl,AA,RA];function PA(t){return CA.find(e=>e.match(t))}var zp=class extends tr{constructor(e,n,i,s){super(e,n,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=PA(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Bp(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Ll=class extends tr{constructor(e,n,i){super(e,n,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Hp=class extends tr{constructor(e,n,i,s,r,o){super(e,n,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let n=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},i=y=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),i(this._step*this._normalizeMouseWheel(y)))},o=!1,a,l,c,h,d,u=5,f=y=>{a=y.clientX,l=c=y.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=y=>{if(o){let M=y.clientX-a,b=y.clientY-l;Math.abs(b)>u?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>u&&g()}if(!o){let M=y.clientY-c;d-=M*this._step*this._arrowKeyMultiplier(y),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=y.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},v=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",v)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(v,y,M,b,w)=>(v-y)/(M-y)*(w-b)+b,n=v=>{let y=this.$slider.getBoundingClientRect(),M=e(v,y.left,y.right,this._min,this._max);this._snapClampSetValue(M)},i=v=>{this._setDraggingStyle(!0),n(v.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=v=>{n(v.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=v=>{v.preventDefault(),this._setDraggingStyle(!0),n(v.touches[0].clientX),o=!1},h=v=>{v.touches.length>1||(this._hasScrollBar?(a=v.touches[0].clientX,l=v.touches[0].clientY,o=!0):c(v),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=v=>{if(o){let y=v.touches[0].clientX-a,M=v.touches[0].clientY-l;Math.abs(y)>Math.abs(M)?c(v):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else v.preventDefault(),n(v.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),p=400,g,m=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();let M=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,p)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),e-=n,e=Math.round(e/this._step)*this._step,e+=n,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Gp=class extends tr{constructor(e,n,i,s){super(e,n,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(n=>{let i=document.createElement("option");i.textContent=n,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?e:this._names[n],this}},Vp=class extends tr{constructor(e,n,i){super(e,n,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},IA=`.lil-gui {
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
}`;function LA(t){let e=document.createElement("style");e.innerHTML=t;let n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}var gx=!1,Wu=class t{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!gx&&a&&(LA(IA),gx=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,n,i,s,r){if(Object(i)===i)return new Gp(this,e,n,i);let o=e[n];switch(typeof o){case"number":return new Hp(this,e,n,i,s,r);case"boolean":return new Fp(this,e,n);case"string":return new Vp(this,e,n);case"function":return new Ll(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,o)}addColor(e,n,i=1){return new zp(this,e,n,i)}addFolder(e){let n=new t({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Ll||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ll)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}};var A=(t,e,n,i)=>({path:t,min:e,max:n,step:i});function vx(t){let e=(n,i,s,r)=>A(`weapons.${t}.${n}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var Nl=Object.freeze([A("move.jog",1,10,.1),A("move.aimWalk",.5,6,.1),A("move.sprint",2,14,.1),A("move.accelTime",.01,.6,.01),A("move.stopTime",.01,.6,.01),A("move.turnRate",1,40,.5),A("move.aimTurnRate",1,40,.5),A("move.sprintTurnRate",.2,20,.1),A("move.rollDistance",1,12,.1),A("move.rollTime",.2,1.5,.01),A("move.rollEase",1,4,.05),A("move.rollBuffer",0,.5,.01),A("move.tapMax",.05,.5,.01),A("move.stickSprintMin",0,1,.05),A("move.faceMinSpeed",0,2,.05),A("move.sprintHeadingMinSpeed",0,3,.05),A("move.runClipMinSpeed",0,2,.05),A("move.runRateMin",.1,2,.05),A("move.runRateMax",.5,4,.05),A("move.sprintRateMin",.1,2,.05),A("move.sprintRateMax",.5,4,.05),A("move.stepEvery",.4,4,.05),A("move.stepEverySprint",.4,6,.05),A("move.crawlSpeed",.2,4,.05),A("move.crawlTurnRate",.5,20,.5),A("camera.fov",40,110,1),A("camera.right",-1.5,1.5,.01),A("camera.up",.5,3,.01),A("camera.back",.5,6,.05),A("camera.aim.fov",20,90,1),A("camera.aim.back",.3,5,.05),A("camera.sprint.fov",50,120,1),A("camera.sprint.up",.3,3,.01),A("camera.sprint.back",.5,6,.05),A("camera.sprint.shakeWeight",0,3,.05),A("camera.coverLow.fov",50,120,1),A("camera.coverLow.right",-1.5,1.5,.01),A("camera.coverLow.up",.3,3,.01),A("camera.coverLow.back",.5,6,.05),A("camera.coverTall.fov",50,120,1),A("camera.coverTall.right",-1.5,1.5,.01),A("camera.coverTall.up",.3,3,.01),A("camera.coverTall.back",.5,6,.05),A("camera.downed.fov",40,120,1),A("camera.downed.up",.2,3,.01),A("camera.downed.back",.5,6,.05),A("camera.bump.amount",0,.6,.01),A("camera.bump.halfLife",.01,.3,.005),A("camera.slamShake.amount",0,.3,.005),A("camera.slamShake.time",.02,1,.01),A("camera.slamShake.hz",2,60,.5),A("camera.blendHalfLife",0,.5,.005),A("camera.holdTime",0,2,.05),A("camera.holdRange",10,300,5),A("camera.followHalfLife",0,.5,.005),A("camera.sideHalfLife",0,.6,.005),A("camera.headHideDist",0,2,.05),A("camera.headHideMargin",0,1,.01),A("camera.shake.amp",0,.15,.001),A("camera.shake.hz",1,30,.5),A("camera.probeRadius",.05,.6,.01),A("camera.minBack",0,2,.01),A("camera.wallReturnHalfLife",0,1,.01),A("camera.pitchMin",-1.5,0,.01),A("camera.pitchMax",0,1.5,.01),A("look.mouse",5e-4,.008,1e-4),A("look.pad.yawRate",.5,10,.1),A("look.pad.pitchRate",.5,10,.1),A("look.pad.expo",1,3,.05),A("look.aimScale",.1,1.5,.01),{path:"look.invertY"},A("cover.grabRange",0,5,.05),A("cover.grabAngle",0,180,1),A("cover.grabViewAngle",0,180,1),A("cover.grabSlack",0,5,.05),A("cover.grabMinTilt",0,1,.05),A("cover.gap",0,5,.01),A("cover.endInset",0,5,.01),A("cover.minLength",0,5,.05),A("cover.slideSpeed",0,30,.5),A("cover.slideMinTime",0,2,.01),A("cover.slideMaxTime",0,2,.01),A("cover.slideTurnRate",1,60,.5),A("cover.moveSpeed",0,30,.1),A("cover.alongDeadzone",0,1,.05),A("cover.leaveTilt",0,1,.05),A("cover.leaveAngle",0,180,1),A("cover.endLeaveTime",0,2,.01),A("cover.cornerZone",0,5,.05),A("cover.popTime",0,2,.01),A("cover.blindTime",0,2,.01),A("cover.popShift",0,5,.05),A("cover.pushAngle",0,180,1),A("cover.lowDrawBack",0,1,.01),A("cover.blindDrawBack",0,1,.01),A("cover.vaultTime",0,2,.01),A("cover.vaultMaxDepth",0,5,.05),A("cover.vaultHop",0,5,.05),A("cover.vaultExitSpeed",0,30,.1),A("cover.swapRange",0,5,.05),A("cover.swapSpeed",0,30,.5),A("cover.swapAngle",0,180,1),A("cover.swapMaxOffset",0,5,.05),A("cover.slamSquash",0,1,.01),A("cover.slamSquashTime",0,2,.01),A("cover.thudVolume",0,1,.05),A("cover.autoSlam",0,1,1),A("cover.autoAngle",0,90,1),A("cover.autoDist",0,1,.01),A("cover.autoMinTilt",0,1,.05),A("cover.autoMinSpeed",0,12,.1),A("cover.autoTime",0,1,.01),...vx("regret"),...vx("pistol"),A("combat.fireBuffer",0,.5,.01),A("combat.autoReload",0,1,1),A("combat.minRate",.01,1,.01),A("combat.minReloadTime",.01,.5,.01),A("combat.muzzleUp",.5,2,.01),A("combat.muzzleRight",-1,1,.01),A("combat.muzzleForward",0,2,.01),A("combat.blindLift",0,1,.01),A("combat.blindReach",0,1,.01),A("combat.crateRadius",.3,3,.05),A("combat.hitPad",0,.3,.005),A("combat.crouchHead",0,3,.01),A("combat.crouchBodyTop",0,3,.01),A("combat.shoulderDrop",0,1,.01),A("combat.pickupRadius",.2,3,.05),A("health.max",1,500,1),A("health.regenDelay",0,15,.1),A("health.regenTime",0,15,.1),A("health.downedTime",0,60,.5),A("health.standInRevive",0,1,1),A("health.reviveTime",0,10,.1),A("health.reviveHealth",0,1,.05),A("health.godMode",0,1,1),A("health.giveUpHold",.3,5,.01),A("associate.radius",0,3,.01),A("associate.height",0,3,.01),A("associate.pointSpacing",.2,3,.01),A("associate.reserveRadius",0,3,.01),A("associate.popShift",0,3,.01),A("associate.linkMax",2,15,.5),A("associate.health",1,1e3,1),A("associate.runSpeed",0,12,.1),A("associate.turnRate",.5,40,.5),A("associate.arriveDist",.01,1,.01),A("associate.stuckTime",.1,5,.1),A("associate.popTime",0,1,.01),A("associate.telegraphTime",0,2,.01),A("associate.burstTime",0,5,.1),A("associate.rate",.5,20,.5),A("associate.damage",0,50,.5),A("associate.range",5,100,1),A("associate.spread",0,15,.1),A("associate.moveSpread",0,15,.1),A("associate.aimLag",0,1,.01),A("associate.suppressChance",0,1,.05),A("associate.suppressTime",0,5,.1),A("associate.suppressRate",.5,20,.5),A("associate.suppressMiss",0,5,.1),A("associate.suppressSpread",0,20,.5),A("associate.coverWaitMin",0,5,.1),A("associate.coverWaitMax",0,8,.1),A("associate.magBursts",1,10,1),A("associate.reloadTime",0,6,.1),A("associate.flinchTime",0,2,.01),A("associate.minRange",0,20,.5),A("associate.preferRange",0,40,.5),A("associate.maxRange",1,60,.5),A("associate.relocateCheck",.05,3,.05),A("associate.relocateAfter",1,60,.5),A("associate.ammoDrop",0,200,1),A("associate.muzzleUp",.5,2,.01),A("director.tokens",0,8,1),A("director.casualTokens",0,8,1),A("director.casual",0,1,1),A("director.tokenCooldown",0,5,.1),A("director.tokenMaxHold",.5,10,.1),A("director.requestWindow",0,2,.05),A("director.pushAfter",1,30,.5),A("director.flankAfter",1,60,.5),A("director.stayRadius",.5,10,.1),A("director.flankAngle",0,180,1),A("director.flankMaxAngle",60,180,1),A("director.maxEnemies",4,8,1),A("associate.downChance",0,1,.05),A("associate.downedCrawl",0,3,.05),A("associate.bleedTime",1,60,.5),A("associate.reviveTime",0,10,.1),A("associate.reviveHealth",.05,1,.05),A("associate.reviveRange",0,40,.5),A("associate.staggerTime",0,3,.05),A("associate.diveWarn",0,1.6,.05),A("associate.diveRadius",0,12,.1),A("associate.diveChance",0,1,.05),A("associate.diveReaction",0,2,.05),A("associate.diveDistance",0,10,.1),A("associate.diveTime",.05,3,.05),A("pad.radius",.1,4,.05),A("pad.openAfterKills",0,8,1),A("pad.openAfterKillsSmoothie",0,8,1),A("pad.openAfter",0,120,1),A("pad.interval",.5,30,.5),A("pad.maxAlive",1,8,1),A("pad.total",1,30,1),A("pad.riseTime",0,3,.05),A("pad.trainerShare",0,1,.05),A("pad.trainerShareSmoothie",0,1,.05),A("pad.trainerShareBoss",0,1,.05),A("trainer.health",1,1e3,1),A("trainer.scaleW",.5,2,.05),A("trainer.scaleH",.5,2,.05),A("trainer.runSpeed",0,12,.1),A("trainer.turnRate",.5,40,.5),A("trainer.maxAlive",0,8,1),A("trainer.swingRange",.5,4,.05),A("trainer.swingSlack",0,2,.05),A("trainer.swingArc",10,360,5),A("trainer.windup",.05,2,.05),A("trainer.lockTime",0,1,.05),A("trainer.swingTime",.05,1.5,.05),A("trainer.recover",0,3,.05),A("trainer.swingGap",0,3,.05),A("trainer.damage",0,100,1),A("trainer.tobbleDamage",0,100,1),A("trainer.knockback",0,6,.1),A("trainer.knockTime",.05,1.5,.05),A("trainer.staggerTime",0,3,.05),A("trainer.preferDoc",.1,2,.05),A("trainer.retargetTime",.05,3,.05),A("trainer.repathTime",.1,3,.05),A("trainer.avoidRadius",0,5,.1),A("trainer.avoidWeight",0,5,.1),A("trainer.stuckTime",.1,3,.1),A("trainer.diveChance",0,1,.05),A("trainer.barkChance",0,1,.05),A("run.fadeOut",.05,3,.05),A("run.blackHold",0,2,.05),A("run.fadeIn",.05,3,.05),A("run.gateReach",.5,4,.1),A("run.hoursTime",1,20,.5),A("run.gateOpenTime",.1,3,.05),A("boss.health",100,2e4,50),A("boss.scale",1,3,.05),A("boss.crouchY",.3,1,.01),A("boss.headMult",1,4,.1),A("boss.phase2At",.1,.95,.01),A("boss.phase3At",.05,.9,.01),A("boss.popTime",.05,2,.05),A("boss.telegraphTime",.1,3,.05),A("boss.burstTime",.2,6,.1),A("boss.rate",.5,20,.5),A("boss.damage",0,40,1),A("boss.spread",0,15,.1),A("boss.aimLag",0,1,.01),A("boss.muzzleUp",.5,2,.01),A("boss.coverWaitMin",0,6,.1),A("boss.coverWaitMax",0,8,.1),A("boss.shiftTime",.1,3,.05),A("boss.lobEvery",1,8,1),A("boss.lobWindup",.2,4,.05),A("boss.lobFlight",.5,4,.05),A("boss.lobRecover",0,3,.05),A("boss.lobRadius",.5,6,.1),A("boss.lobDamage",0,150,1),A("boss.lobTobbleDamage",0,150,1),A("boss.lobFalloff",0,1,.05),A("boss.retreatSpeed",.5,12,.1),A("boss.returnSpeed",.5,12,.1),A("boss.minHide",0,20,.5),A("boss.fastTelegraph",.1,3,.05),A("boss.fastBurstTime",.2,6,.1),A("boss.fastRate",.5,20,.5),A("boss.fastWaitMin",0,6,.1),A("boss.fastWaitMax",0,8,.1),A("boss.offerGap",0,3,.05),A("ending.deathDelay",0,10,.1),A("ending.deskReach",.5,6,.1),A("ending.holdTime",.1,5,.1),A("ending.card1Time",.5,15,.1),A("ending.card2Time",.5,20,.1),A("ending.card3Time",.5,15,.1),A("ending.skipLock",0,5,.1),A("ending.finalLock",0,5,.1),A("tobble.enabled",0,1,1),A("tobble.scale",.3,1.2,.01),A("tobble.radius",.1,.6,.01),A("tobble.height",.5,2,.01),A("tobble.health",1,1e3,1),A("tobble.regenDelay",0,20,.5),A("tobble.regenTime",0,20,.5),A("tobble.runSpeed",0,12,.1),A("tobble.turnRate",1,30,.5),A("tobble.followMin",0,20,.5),A("tobble.followMax",1,30,.5),A("tobble.personalSpace",0,5,.05),A("tobble.lofClear",0,4,.05),A("tobble.lofRange",1,60,1),A("tobble.sidestepReact",0,3,.05),A("tobble.sidestepDist",0,5,.1),A("tobble.popTime",.01,1,.01),A("tobble.popLift",0,.6,.01),A("tobble.muzzleUp",.3,2,.01),A("tobble.coverWaitMin",0,5,.1),A("tobble.coverWaitMax",0,8,.1),A("tobble.burstTime",0,6,.1),A("tobble.rate",.5,20,.5),A("tobble.damage",0,100,1),A("tobble.spread",0,20,.5),A("tobble.range",1,100,1),A("tobble.reviveMaxThreats",0,8,1),A("tobble.reviveWaitMax",0,20,.5),A("tobble.reviveRange",.3,4,.05),A("tobble.reviveTime",0,15,.1),A("tobble.reviveHealth",.05,1,.05),A("tobble.playerReviveTime",0,10,.1),A("tobble.playerReviveRange",.3,5,.05),A("tobble.crawlSpeed",0,3,.05),A("tobble.complainEvery",1,30,.5),A("dummy.health",1,1e3,1),A("dummy.respawnTime",0,30,.5),A("dummy.railSpeed",0,10,.1),A("camera.recoil.halfLife",.01,.5,.01),A("camera.recoil.max",0,20,.5),A("look.pad.assist",.1,1,.05),A("feedback.flashTime",.01,.3,.01),A("feedback.flashSize",.05,1.5,.05),A("feedback.tracerTime",.01,.3,.01),A("feedback.tracerWidth",.005,.2,.005),A("feedback.sparkTime",.05,1,.01),A("feedback.sparkCount",0,12,1),A("feedback.gelTime",.1,2,.05),A("feedback.gelCount",0,24,1),A("feedback.gelSpeed",0,10,.1),A("feedback.killGelCount",0,48,1),A("feedback.receiptCount",0,24,1),A("feedback.receiptTime",.2,4,.05),A("feedback.gravity",0,30,.1),A("feedback.hitMarkerTime",.02,1,.01),A("feedback.killMarkerTime",.05,1,.01),A("feedback.reloadResultTime",.1,2,.05),A("feedback.reticleMinGap",0,30,1),A("feedback.lowAmmoFrac",0,1,.05),A("feedback.coverReticleOpacity",0,1,.05),A("feedback.stepDip",0,.1,.001),A("feedback.stepVolume",0,1,.05),A("feedback.shotVolume",0,1,.05),A("feedback.hitVolume",0,1,.05),A("feedback.killVolume",0,1,.05),A("feedback.reloadVolume",0,1,.05),A("feedback.gunSquash",0,.6,.01),A("feedback.gunSquashTime",.01,.5,.01),A("feedback.gunKick",0,.3,.01),A("feedback.bodyKick",0,.3,.01),A("feedback.dummyBurstTime",.01,1,.01),A("feedback.dummyRespawnPop",0,1,.01),A("feedback.faceMaxOpacity",0,1,.05),A("feedback.edgeMaxOpacity",0,1,.05),A("feedback.hitFlashTime",.05,2,.01),A("feedback.hitKick",0,3,.05),A("feedback.hurtVolume",0,1,.05),A("feedback.enemyFlashSize",.05,1.5,.05),A("feedback.enemyTracerTime",.01,.3,.01),A("feedback.enemyTracerWidth",.005,.2,.005),A("feedback.glintSize",.02,.4,.01),A("feedback.blasterVolume",0,1,.05),A("feedback.chargeVolume",0,1,.05),A("feedback.pickupVolume",0,1,.05),A("feedback.barkTime",.2,6,.1),A("feedback.barkGap",0,12,.5),A("feedback.barkMinShow",0,4,.1),A("feedback.bashVolume",0,1,.05),A("feedback.revVolume",0,1,.05),A("feedback.cutVolume",0,1,.05),A("feedback.throwVolume",0,1,.05),A("feedback.clankVolume",0,1,.05),A("feedback.boomVolume",0,1,.05),A("feedback.saunaVolume",0,1,.05),A("feedback.reviveVolume",0,1,.05),A("feedback.tobbleShotVolume",0,1,.05),A("feedback.blastSize",.2,8,.1),A("feedback.blastTime",.05,2,.01),A("feedback.executeShake",0,.3,.005),A("feedback.cutGelEvery",.02,1,.01),A("feedback.arcDot",.01,.5,.01),A("melee.holdTime",0,5,.01),A("melee.bashTime",0,5,.01),A("melee.bashHitAt",0,5,.01),A("melee.bashRange",0,10,.05),A("melee.bashAngle",0,180,1),A("melee.bashDamage",0,500,1),A("melee.bashLunge",0,10,.05),A("melee.bashCooldown",0,5,.01),A("melee.revSpeed",0,30,.1),A("melee.revPulse",.05,5,.01),A("melee.cutterReach",0,10,.05),A("melee.cutterAngle",0,180,1),A("melee.cutTime",0,5,.01),A("melee.finishTime",0,5,.01),A("melee.executeRange",0,10,.05),A("melee.executeAngle",0,180,1),A("melee.promptRange",0,10,.05),A("melee.cutterSpin",0,100,1),A("grenade.carry",0,10,1),A("grenade.start",0,10,1),A("grenade.throwSpeed",0,30,.1),A("grenade.throwLift",0,180,1),A("grenade.gravity",.5,30,.1),A("grenade.ballRadius",.02,1,.01),A("grenade.restitution",0,1,.01),A("grenade.friction",0,1,.01),A("grenade.fuse",0,5,.01),A("grenade.radius",0,10,.05),A("grenade.damage",0,500,1),A("grenade.killRadius",0,10,.05),A("grenade.killDamage",0,500,1),A("grenade.selfDamage",0,2,.05),A("grenade.padReach",0,10,.05),A("grenade.arcTime",0,5,.01),A("grenade.throwTime",0,5,.01)]),DA=new Map(Nl.map(t=>[t.path,t])),kl=structuredClone(X);function Ur(t,e){let n=t;for(let i of e.split(".")){if(n===null||typeof n!="object")return;n=n[i]}return n}function Xp(t,e,n){let i=e.split("."),s=t;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=n,!0}function Yp(t=X,e=kl){let n={};for(let i of Nl){let s=Ur(t,i.path);s!==Ur(e,i.path)&&(n[i.path]=s)}return n}function xx(t,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let n=0;for(let i of Object.keys(e)){let s=DA.get(i);if(!s)continue;let r=e[i],o=Ur(kl,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||Xp(t,i,r)&&n++)}return n}function Wp(t,e){if(t===null||typeof t!="object")return JSON.stringify(t);if(Array.isArray(t))return`[${t.map(s=>Wp(s,e)).join(", ")}]`;let n="  ".repeat(e+1);return`{
${Object.keys(t).map(s=>`${n}${s}: ${Wp(t[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function yx(t=X){return["associate","boss","camera","combat","cover","director","dummy","ending","feedback","grenade","health","look","melee","move","pad","run","tobble","trainer","weapons"].map(e=>`  ${e}: ${Wp(t[e],1)},`).join(`
`)}var qp="cr-tuning",NA={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},kA=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function _x(t){let e=t.split("."),n=e.slice(0,-1);return n.length===1&&n[0]==="camera"&&kA.has(e[1])&&n.push("wall"),n[0]==="look"&&n[1]==="pad"&&(n[1]="lookPad"),n}function OA(){try{return window.localStorage}catch{return null}}function bx({storage:t=OA()}={}){let e=()=>{try{return t?t.getItem(qp):null}catch{return null}},n=g=>{try{t&&(g===null?t.removeItem(qp):t.setItem(qp,g))}catch{}};try{let g=e();g&&xx(X,JSON.parse(g))}catch{}let i=new Wu({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let g=document.activeElement;g&&g!==document.body&&s.contains(g)&&g.blur&&g.blur()}s.addEventListener("click",g=>{let m=g.target;m&&m.closest&&m.closest(".lil-title")&&m.blur!==void 0&&r()});let o=new Map;function a(g){let m=i,v="";for(let y of g){if(v+=`.${y}`,!o.has(v)){let M=m.addFolder(NA[y]||y);M.close(),o.set(v,M)}m=o.get(v)}return m}function l(){let g=Yp();n(Object.keys(g).length?JSON.stringify(g):null)}for(let g of Nl){let m=g.path.split("."),v=m[m.length-1],y=Ur(X,m.slice(0,-1).join(".")),M=typeof Ur(kl,g.path)=="boolean"?a(_x(g.path)).add(y,v):a(_x(g.path)).add(y,v,g.min,g.max,g.step);M.onChange(l),M.onFinishChange(r)}let c=null;function h(g){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let m=document.createElement("div");m.textContent="Press Cmd+C to copy",m.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=m,s.appendChild(m),s.appendChild(c)}c.value=g,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(g){c&&(c.hidden=!0,c.note.hidden=!0);let m=null;try{m=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(g):null}catch{m=null}if(!m){h(g);return}m.catch(()=>h(g))}let u={copyChanges(){r(),d(JSON.stringify(Yp(),null,2))},copyForFile(){r(),d(yx())},resetAll(){r();for(let g of Nl)Xp(X,g.path,Ur(kl,g.path));n(null),i.controllersRecursive().forEach(g=>g.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let f=!1;function p(g){f=g,s.style.display=g?"":"none"}return p(!1),{toggle(){p(!f)},isOpen:()=>f}}var Mx=Math.PI*2,ti=t=>t-Mx*Math.round(t/Mx),Ai=(t,e)=>Math.atan2(t,e);function Ol(t){return Math.min(1,Math.hypot(t.moveX,t.moveY))}function fi(t,e){let n=Math.sin(t.camYaw),i=Math.cos(t.camYaw),s=-t.moveY*n-t.moveX*i,r=-t.moveY*i+t.moveX*n,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function Bt(t,e,n){let i=ti(e-t);return t+Math.max(-n,Math.min(n,i))}function Yo(t,e,n,i,s,r){let o=t.vel,a=(Math.hypot(e,n)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=n-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=n):(o[0]+=l/h*a,o[2]+=c/h*a)}var $p=[0,0],nr=[0,0,0],qo=1e-9,UA=1.5;var Zp=(t=X)=>t.tobble?.playerReviveTime??UA;function wx(t,e,n){let i=e-t.pos[0],s=n-t.pos[2];Math.hypot(i,s)>1e-6&&(t.facing=t.facing+ti(Math.atan2(i,s)-t.facing)),t.heading=t.facing}function Ul(t){t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0}var Xu={knocked:{acceptsTap:!1,selfMoves:!0,enter(t){Ul(t),t.cover=null,t.coverTarget=null,t.scratch.prevOff=0},update(t,e,n){let i=t.scratch;t.aiming=!1,t.firing=!1;let s=i.time>0?i.time:0,r=t.stateTime>=s-qo,o=r||!(s>0)?1:t.stateTime/s,a=i.dist*(1-(1-o)*(1-o)),l=a-i.prevOff;return i.prevOff=a,nr[0]=i.dir[0]*l,nr[1]=0,nr[2]=i.dir[1]*l,t.moveBy(nr,n,!1),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},bash:{acceptsTap:!1,selfMoves:!0,enter(t){t.aiming=!1,t.firing=!1,t.scratch.dir=[Math.sin(t.facing),Math.cos(t.facing)],t.scratch.prevOff=0,t.scratch.hit=!1,t.heading=t.facing},update(t,e,n){let i=X.melee,s=t.scratch;t.aiming=!1,t.firing=!1;let r=t.stateTime>=i.bashTime-qo,o=r||!(i.bashTime>0)?1:t.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,nr[0]=s.dir[0]*l,nr[1]=0,nr[2]=s.dir[1]*l,t.moveBy(nr,n,!1),!s.hit&&(r||t.stateTime>=i.bashHitAt-qo)&&(s.hit=!0,t.onAction?.({type:"bashHit"})),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(t){t.aiming=!1,t.firing=!1,t.heading=t.facing},update(t,e,n){let i=t.tuning,s=X.melee.revSpeed;t.aiming=!1,t.firing=!1,fi(e,$p),Yo(t,$p[0]*s,$p[1]*s,s,n,i);let r=t.speed();return r>s&&(t.vel[0]*=s/r,t.vel[2]*=s/r),r>i.faceMinSpeed?t.facing=Bt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n):t.facing=Bt(t.facing,e.camYaw,i.aimTurnRate*n),t.heading=t.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(t){Ul(t)},update(t){return Ul(t),t.stateTime<t.scratch.time-qo?null:(t.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(t){Ul(t)},update(t,e){return Ul(t),e.interactHeld?t.stateTime<Zp()-qo?null:(t.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},$o={bash(t,e){return t.state!=="move"&&t.state!=="sprint"||t.bashReadyAt>t.clock+qo?!1:(t.bashReadyAt=t.clock+X.melee.bashCooldown,Number.isFinite(e)&&(t.facing=t.facing+ti(e-t.facing)),t.go("bash",{}),!0)},rev(t,e){return e?t.state!=="move"&&t.state!=="sprint"?!1:(t.go("rev",{}),!0):t.state!=="rev"?!1:(t.go("move",{}),!0)},execute(t,e,n){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("execute",{}),t.scratch.time=Number.isFinite(n)&&n>0?n:0,wx(t,e[0],e[1]),!0)},knock(t,e,n,i,s){if(t.state==="roll"||t.state==="execute"||t.state==="reviveTobble"||t.state==="knocked"||t.state==="downed")return!1;let r=Math.hypot(e,n);return r>1e-9?(t.go("knocked",{}),t.scratch.dir=[e/r,n/r],t.scratch.dist=i>0?i:0,t.scratch.time=s,!0):!1},reviveTobble(t,e){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("reviveTobble",{}),wx(t,e[0],e.length>2?e[2]:e[1]),!0)}};var $i=1e-9,Kp=Math.PI/180,Tx=.05,FA=1.8,BA={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function Ex(t=X.cover,e=X.move){return{radius:e.radius,gap:t.gap,endInset:t.endInset,minLength:t.minLength}}var zA=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],HA=t=>{for(let e of["a","b","tangent","normal"])Object.freeze(t[e]);return Object.freeze(t)};function Ax(t,{radius:e,gap:n,endInset:i,minLength:s,exclude:r=[]}){let o=e+n,a=[];return t.forEach((l,c)=>{let h=BA[l.kind];if(!h)return;let d=t.filter((u,f)=>f!==c&&u.kind!=="floor"&&u.max[1]>Tx&&u.min[1]<FA);for(let u of zA){let f=u.axis*2,p=2-f,g=(u.sign>0?l.max[f]:l.min[f])+u.sign*o,m=l.min[p],v=l.max[p],y=v-m,M=[];for(let _ of d){if(!(g>_.min[f]-o+$i&&g<_.max[f]+o-$i))continue;let L=_.min[p]-o-m,D=_.max[p]+o-m;D>$i&&L<y-$i&&M.push([Math.max(L,0),Math.min(D,y)])}M.sort((_,L)=>_[0]-L[0]);let b=[];for(let _ of M){let L=b[b.length-1];L&&_[0]<=L[1]+$i?L[1]=Math.max(L[1],_[1]):b.push([_[0],_[1]])}let w=[],S=0,x=!0;for(let[_,L]of b)_>S+$i&&w.push([S,_,x,!1]),S=L,x=!1;y>S+$i&&w.push([S,y,x,!0]),w.forEach(([_,L,D,I],E)=>{let N=`${c}${u.name}#${E}`;if(r.includes(N))return;let R=m+_+(D?i:0),C=m+L-(I?i:0),U=C-R;if(U<s-$i)return;let H=u.axis===0?[g,R]:[R,g],ee=u.axis===0?[g,C]:[C,g];a.push(HA({id:N,kind:h,boxIndex:c,a:H,b:ee,length:U,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[f]-l.min[f],openA:D,openB:I}))})}}),a}function Ri(t,e,n=[0,0]){return n[0]=t.a[0]+t.tangent[0]*e,n[1]=t.a[1]+t.tangent[1]*e,n}function ir(t,e,n=X.cover){let i=e<=n.cornerZone,s=t.length-e<=n.cornerZone;return i&&s?e<=t.length-e?-1:1:i?-1:s?1:0}function Fl(t,e){return e<0?t.openA:t.openB}var Sx=.9,Rx=(t,e,n,i)=>hi(t,[e[0],Sx,e[1]],[n[0],Sx,n[1]],.9*i)===1;function Bl(t,e,n,i,s,r,o){let a=Math.cos(r.grabAngle*Kp),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*Kp,d=null;for(let u of t){let f=(n[0]-u.a[0])*u.normal[0]+(n[2]-u.a[1])*u.normal[1],p=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(f<-(r.gap+.02)||p<a||p<=$i)continue;let g=Math.max(f,0)/p,m=(n[0]+i[0]*g-u.a[0])*u.tangent[0]+(n[2]+i[1]*g-u.a[1])*u.tangent[1];if(m<-r.grabSlack||m>u.length+r.grabSlack)continue;let v=Math.max(0,Math.min(u.length,m)),y=Ri(u,v),M=y[0]-n[0],b=y[1]-n[2],w=Math.hypot(M,b);if(!(w>r.grabRange||d&&w>=d.dist)){if(w>.3){let S=(M*l+b*c)/w;if(Math.acos(Math.max(-1,Math.min(1,S)))>h)continue}Rx(e,[n[0],n[2]],y,o)&&(d={edge:u,t:v,point:y,dist:w})}}return d}function Cx(t,e,n,i,s,r,o){if(ir(n,i,r)!==s||!Fl(n,s))return null;let a=Ri(n,i),l=Math.cos(r.swapAngle*Kp),c=null;for(let h of t){if(h===n||h.normal[0]*n.normal[0]+h.normal[1]*n.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),f=d<=u?0:h.length,p=Ri(h,f),g=p[0]-a[0],m=p[1]-a[1],v=Math.hypot(g,m);(g*n.tangent[0]+m*n.tangent[1])*s<=0||Math.abs(g*n.normal[0]+m*n.normal[1])>r.swapMaxOffset||v>r.swapRange||c&&v>=c.dist||Rx(e,a,p,o)&&(c={edge:h,t:f,point:p,dist:v})}return c}function GA(t,e,n,i){let s=e[1]+Tx,r=e[1]+i;for(let o of t){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<n-$i)return!1}return!0}function Px(t,e,n,i,s,r){if(t.kind!=="low"||t.depth>i.vaultMaxDepth)return null;let o=Ri(t,e),a=t.depth+2*(s+i.gap),l=[o[0]-t.normal[0]*a,0,o[1]-t.normal[1]*a];if(!GA(n,l,s,r))return null;let c=n.filter((h,d)=>d!==t.boxIndex);return hi(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var VA=["coverSlide","cover","vault","coverSwap"],Ix=Math.PI/180,fn=[0,0],qu=[0,0],sr=[0,0,0],Nx=.001,WA=2,Jp=(t,e,n)=>Math.max(e,Math.min(n,t));function jp(t,e,n){if(Ol(e)>=t.coverTuning.grabMinTilt){fi(e,fn);let i=Math.hypot(fn[0],fn[1]);n[0]=fn[0]/i,n[1]=fn[1]/i}else n[0]=Math.sin(t.facing),n[1]=Math.cos(t.facing);return n}var kx={name:"cover",state:"coverSlide",when(t,e){return t.coverTarget=Bl(t.coverEdges,t.boxes,t.pos,jp(t,e,qu),e.camYaw,t.coverTuning,t.tuning.radius),t.coverTarget!==null}},Yu={};function Ox(t,e){let n=t.coverTuning;if(!n.autoSlam||e.aim||Ol(e)<n.autoMinTilt)return null;Object.assign(Yu,n),Yu.grabAngle=n.autoAngle,Yu.grabRange=n.autoDist,fi(e,fn);let i=Math.hypot(fn[0],fn[1]);qu[0]=fn[0]/i,qu[1]=fn[1]/i;let s=Bl(t.coverEdges,t.boxes,t.pos,qu,e.camYaw,Yu,t.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(t.runVel[0]*r[0]+t.runVel[1]*r[1])>=n.autoMinSpeed?s:null}function XA(t,e,n){let i=ir(t,e,n);return t.kind==="low"||i!==0&&Fl(t,i)}function Ss(t){return t.cover?t.cover.edge:t.scratch.edge||null}function Qp(t){if(t.state==="downed")return"downed";if(t.state==="sprint")return"sprint";if(t.cover&&t.cover.pop>=.5)return"aim";if(t.state==="cover"||t.state==="coverSlide"||t.state==="coverSwap"){let e=Ss(t);if(e)return e.kind==="low"?"coverLow":"coverTall"}return t.aiming?"aim":"normal"}function Fr(t){let e=t.cover;if(!e)return 1;let n=e.edge,i=e.popEnd;if(i===0&&(i=ir(n,e.t,t.coverTuning)),i===0)return 1;let s=Ai(-n.normal[0],-n.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=n.tangent[0]*i*r+n.tangent[1]*i*o<0?-1:1;return Fl(n,i)?a:-a}function Lx(t,e,n,i){let s=t.coverTarget;t.coverTarget=null;let r=t.scratch;r.edge=s.edge,r.t=s.t,r.from=[t.pos[0],t.pos[1],t.pos[2]],r.to=[s.point[0],t.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(Nx,Jp(o/Math.max(e,1e-6),n,i)),t.aiming=!1}function Dx(t,e,n,i){let s=t.scratch,r=Math.min(1,t.stateTime/s.dur+1e-9);return sr[0]=s.from[0]+(s.to[0]-s.from[0])*r-t.pos[0],sr[1]=0,sr[2]=s.from[2]+(s.to[2]-s.from[2])*r-t.pos[2],t.moveBy(sr,e,!1),i!==null&&(t.facing=Bt(t.facing,i,n*e)),t.heading=t.facing,r<1?null:Math.hypot(t.pos[0]-s.to[0],t.pos[2]-s.to[2])>.1?"move":(t.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},t.vel[0]=t.vel[1]=t.vel[2]=0,t.slams++,"cover")}var YA={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;Lx(t,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(t,e,n){let i=t.scratch.edge;return Dx(t,n,t.coverTuning.slideTurnRate,Ai(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;t.cover=null,Lx(t,e.swapSpeed,0,WA);let n=t.scratch;t.heading=Ai(n.to[0]-n.from[0],n.to[2]-n.from[2]),t.facing=t.facing+ti(t.heading-t.facing)},update(t,e,n){return Dx(t,n,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTarget;t.coverTarget=null;let n=t.scratch,i=e.edge;t.cover=null,t.aiming=!1,n.edge=i,n.landing=e.landing,n.from=[t.pos[0],t.pos[2]],t.heading=Ai(-i.normal[0],-i.normal[1]),t.facing=t.facing+ti(t.heading-t.facing)},update(t,e,n){let i=t.scratch,s=t.coverTuning,r=Math.min(1,t.stateTime/Math.max(s.vaultTime,Nx)+1e-9);return t.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,t.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(t.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,t.vel[1]=0,t.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(t){t.cover=null,t.aiming=!1},update(t,e,n){let i=t.coverTuning,s=t.cover,r=s.edge,o=t.tuning,a=fi(e,fn),l=Math.hypot(fn[0],fn[1]),c=l>0?fn[0]/l:0,h=l>0?fn[1]/l:0,d=r.normal[0],u=r.normal[1],f=a>=i.leaveTilt,p=(_,L)=>(t.vel[0]=_*o.jog,t.vel[1]=0,t.vel[2]=L*o.jog,"move");if(f&&c*d+h*u>=Math.cos(i.leaveAngle*Ix))return p(fn[0],fn[1]);if(e.tap&&f){let _=Math.cos(i.pushAngle*Ix);if(-(c*d+h*u)>=_){let D=Px(r,s.t,t.boxes,i,o.radius,o.height);if(D)return t.coverTarget={landing:D,edge:r},"vault"}let L=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(L)>=_){let D=Cx(t.coverEdges,t.boxes,r,s.t,L>0?1:-1,i,o.radius);if(D)return t.coverTarget=D,"coverSwap"}}let g=ir(r,s.t,i),m=XA(r,s.t,i),v=e.aim&&m?1:0,y=e.fire&&!e.aim&&m?1:0,M=i.popTime>0?n/i.popTime:1;s.pop=s.pop<v?Math.min(v,s.pop+M):Math.max(v,s.pop-M);let b=i.blindTime>0?n/i.blindTime:1;s.blind=s.blind<y?Math.min(y,s.blind+b):Math.max(y,s.blind-b),s.popEnd=s.pop>0&&r.kind!=="low"?g:0,s.blindEnd=s.blind>0&&r.kind!=="low"?g:0,s.exposed=s.pop>=.5,t.aiming=s.exposed;let w=!1;if(s.pop===0&&s.blind===0){let _=fn[0]*r.tangent[0]+fn[1]*r.tangent[1];if(Math.abs(_)>=i.alongDeadzone){let L=s.t+_*i.moveSpeed*n;if(s.t=Jp(L,0,r.length),L!==s.t&&Fl(r,_>0?1:-1)&&(w=!0,s.endPush+=n,s.endPush>=i.endLeaveTime))return p(r.tangent[0]*Math.sign(_),r.tangent[1]*Math.sign(_))}}else s.blindEnd!==0&&y===1&&(s.t=Jp(s.t+s.blindEnd*i.moveSpeed*n,0,r.length));w||(s.endPush=0);let S=Ri(r,s.t),x=s.popEnd*i.popShift*s.pop;return sr[0]=S[0]+r.tangent[0]*x-t.pos[0],sr[1]=0,sr[2]=S[1]+r.tangent[1]*x-t.pos[2],t.moveBy(sr,n,!1),s.pop>0?t.facing=Bt(t.facing,e.camYaw,o.aimTurnRate*n):t.facing=Bt(t.facing,Ai(-d,-u),o.turnRate*n),t.heading=t.facing,null}}},Ux=Object.fromEntries(VA.map(t=>[t,YA[t]]));var Zu=t=>[Math.sin(t),0,Math.cos(t)],Ku=t=>[-Math.cos(t),0,Math.sin(t)],qA=(t,e,n)=>e*(1-(1-t)**n),An=[0,0],$u=[0,0,0];function e0(t,e,n){return e.sprint&&!e.aim&&!e.grenade&&Ol(e)>=n.stickSprintMin}var $A={move:{acceptsTap:!0,enter(){},update(t,e,n){let i=t.tuning;if(e0(t,e,i))return"sprint";t.aiming=e.aim,t.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return fi(e,An),Yo(t,An[0]*s,An[1]*s,s,n,i),e.aim||e.fire||e.grenade?t.facing=Bt(t.facing,e.camYaw,i.aimTurnRate*n):t.speed()>i.faceMinSpeed&&(t.facing=Bt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n)),t.heading=t.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(t,e){t.aiming=!1,t.speed()>t.tuning.sprintHeadingMinSpeed?t.heading=Math.atan2(t.vel[0],t.vel[2]):fi(e,An)>.01?t.heading=Math.atan2(An[0],An[1]):t.heading=t.facing},update(t,e,n){let i=t.tuning;return e0(t,e,i)?(fi(e,An),t.heading=Bt(t.heading,Math.atan2(An[0],An[1]),i.sprintTurnRate*n),Yo(t,Math.sin(t.heading)*i.sprint,Math.cos(t.heading)*i.sprint,i.sprint,n,i),t.facing=t.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(t,e){t.aiming=!1;let n=t.scratch;if(n.dir=[Math.sin(t.facing),Math.cos(t.facing)],fi(e,An)>.01){let i=Math.hypot(An[0],An[1]);n.dir[0]=An[0]/i,n.dir[1]=An[1]/i}n.prevOff=0,n.queued=!1,t.heading=Math.atan2(n.dir[0],n.dir[1]),t.facing=t.facing+ti(t.heading-t.facing)},update(t,e,n){let i=t.tuning,s=t.scratch;e.tap&&t.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=t.stateTime>=i.rollTime-1e-9,o=qA(r?1:t.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,$u[0]=s.dir[0]*a,$u[1]=0,$u[2]=s.dir[1]*a,t.moveBy($u,n,!1),r?s.queued?"roll":e0(t,e,i)?"sprint":(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(t){t.cover=null,t.coverTarget=null,t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0},update(t,e,n){let i=t.tuning;return t.aiming=!1,t.firing=!1,fi(e,An),Yo(t,An[0]*i.crawlSpeed,An[1]*i.crawlSpeed,i.crawlSpeed,n,i),t.speed()>i.faceMinSpeed&&(t.facing=Bt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.crawlTurnRate*n)),t.heading=t.facing,null},exit(){}},...Ux,...Xu},ZA=[kx,{name:"roll",when:()=>!0,state:"roll"}];function Fx({boxes:t,spawn:e,tuning:n=X.move,coverTuning:i=X.cover,coverEdges:s=[],states:r=$A,contextActions:o=ZA,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:n,boxes:t,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(d,u,f=!0){let p=h.pos,g=En(h.boxes,p,d,n.radius,n.height);if(h.hit=!!g.hit,!f)u>0&&(h.vel[0]=(g.pos[0]-p[0])/u,h.vel[2]=(g.pos[2]-p[2])/u);else if(g.hit)if(u>0)h.vel[0]=(g.pos[0]-p[0])/u,h.vel[2]=(g.pos[2]-p[2])/u;else{let m=g.normal,v=h.vel[0]*m[0]+h.vel[1]*m[1]+h.vel[2]*m[2];v<0&&(h.vel[0]-=m[0]*v,h.vel[1]-=m[1]*v,h.vel[2]-=m[2]*v)}p[0]=g.pos[0],p[1]=g.pos[1],p[2]=g.pos[2]},go(d,u){let f=h.state;r[f].exit?.(h),h.state=d,h.stateTime=0,h.entries++,h.scratch={},r[f].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[d].enter(h,u),h.onState?.(d,f,u)},down(){h.go("downed",{})},bash(d){return $o.bash(h,d)},rev(d){return $o.rev(h,d)},execute(d,u){return $o.execute(h,d,u)},reviveTobble(d){return $o.reviveTobble(h,d)},knock(d,u,f,p){return $o.knock(h,d,u,f,p)},revive(){h.state==="downed"&&h.go("move",{})},place(d,u){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=d[0],h.pos[1]=h.prevPos[1]=d[1],h.pos[2]=h.prevPos[2]=d[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,u!==void 0?h.facing=h.prevFacing=h.heading=u:h.prevFacing=h.facing},update(d,u){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,u>0&&(h.clock+=u),h.grenadeAim=!!d.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),d.tap&&r[h.state].acceptsTap){for(let g of o)if(g.when(h,d)){h.go(g.state,d);break}}h.stateTime+=u;let f=r[h.state].update(h,d,u),p=h.state;if(!r[p].selfMoves){let g=h.vel[0],m=h.vel[2],v=Math.hypot(g,m);h.moveBy([h.vel[0]*u,0,h.vel[2]*u],u,!0),h.hit?(h.hitTime+=u,(v>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=g,h.runVel[1]=m)):(h.runVel[0]=g,h.runVel[1]=m,h.hitTime=0)}if(p==="move"||p==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let m=Math.max(.1,p==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=m&&(h.stepDist%=m,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:p==="sprint",speed:h.speed()}))}if(p==="move"||p==="sprint"){let g=Ox(h,d);if(!g)h.autoTimer=0;else if((h.autoTimer+=u)>=h.coverTuning.autoTime){h.coverTarget=g,h.go("coverSlide",d);return}}f&&h.go(f,d)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function Bx({AudioContextCtor:t=globalThis.AudioContext}={}){let e=null,n=null,i=!1,s=null;function r(){if(e||i||!t)return e;try{e=new t;let p=Math.max(1,Math.floor(e.sampleRate*.4));n=e.createBuffer(1,p,e.sampleRate);let g=n.getChannelData(0);for(let m=0;m<p;m++)g[m]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(p){if(!(p>0||p<0)||!e.createStereoPanner)return e.destination;let g=e.createStereoPanner();return g.pan.value=Math.max(-1,Math.min(1,p)),g.connect(e.destination),g}let a=()=>{if(e.state==="suspended"){let p=e.resume();p&&p.catch&&p.catch(()=>{})}};function l(p,g,m){let v=e.createGain();return v.gain.setValueAtTime(m,p),v.gain.exponentialRampToValueAtTime(.001,p+g),v.connect(s),v}function c(p,g,m,v,y,M){let b=e.createOscillator();b.type=g,b.frequency.setValueAtTime(m,y),v!==m&&b.frequency.exponentialRampToValueAtTime&&b.frequency.exponentialRampToValueAtTime(v,y+M),b.connect(p),b.start(y),b.stop(y+M)}function h(p,g,m,v,y){let M=e.createBufferSource();M.buffer=n;let b=e.createBiquadFilter();b.type=g,b.frequency.setValueAtTime(m,v),M.connect(b),b.connect(p),M.start(v),M.stop(v+y)}function d(p,g,m,v,y,M){let b=e.createBufferSource();b.buffer=n;let w=e.createBiquadFilter();w.type=g,w.frequency.setValueAtTime(m,y),w.frequency.exponentialRampToValueAtTime&&w.frequency.exponentialRampToValueAtTime(v,y+M),b.connect(w),w.connect(p),b.start(y),b.stop(y+M)}let u=(p,g,m)=>{let v=l(p,.03,m);h(v,"bandpass",g,p,.03)},f={rifle:(p,g)=>{h(l(p,.05,g*.55),"bandpass",2200,p,.05),c(l(p,.16,g*.9),"sine",150,48,p,.16),c(l(p,.22,g*.8),"sine",62,34,p,.22),h(l(p,.26,g*.35),"lowpass",700,p,.26)},pistol:(p,g)=>{h(l(p,.06,g*.6),"bandpass",2e3,p,.06),c(l(p,.2,g*.9),"sine",130,42,p,.2),c(l(p,.26,g*.85),"sine",56,30,p,.26),h(l(p,.3,g*.4),"lowpass",600,p,.3)},dry:(p,g)=>c(l(p,.02,g),"square",1200,1200,p,.02),hit:(p,g)=>c(l(p,.04,g),"sine",1600,1600,p,.04),head:(p,g)=>{let m=l(p,.06,g);c(m,"sine",2400,2400,p,.06),c(m,"sine",3200,3200,p,.06)},kill:(p,g)=>{let m=l(p,.12,g);c(m,"sine",300,900,p,.12);let v=l(p,.2,g*.8);h(v,"lowpass",1400,p,.2)},magOut:(p,g)=>{u(p,3e3,g),u(p+.08,2200,g)},magIn:(p,g)=>{u(p,2e3,g),u(p+.08,3400,g)},perfect:(p,g)=>{let m=l(p,.35,g);c(m,"sine",1320,1320,p,.35),c(m,"sine",1980,1980,p,.35)},good:(p,g)=>c(l(p,.15,g),"sine",990,990,p,.15),jam:(p,g)=>c(l(p,.15,g),"square",90,90,p,.15),blaster:(p,g)=>{let m=l(p,.1,g);c(m,"square",900,300,p,.1),h(m,"bandpass",1500,p,.1)},charge:(p,g)=>{let m=e.createGain();m.gain.setValueAtTime(.001,p),m.gain.exponentialRampToValueAtTime(g,p+.3),m.gain.exponentialRampToValueAtTime(.001,p+.35),m.connect(s),c(m,"sine",300,900,p,.35)},hurt:(p,g)=>{let m=l(p,.15,g);h(m,"lowpass",600,p,.15),c(m,"sine",80,80,p,.15)},downed:(p,g)=>c(l(p,.6,g),"sine",400,80,p,.6),clear:(p,g)=>{[523,659,784].forEach((m,v)=>c(l(p+v*.12,.15,g),"sine",m,m,p+v*.12,.15))},pickup:(p,g)=>{c(l(p,.06,g),"sine",880,880,p,.06),c(l(p+.07,.08,g),"sine",1320,1320,p+.07,.08)},thud:(p,g)=>{c(l(p,.32,g),"sine",60,30,p,.32),h(l(p,.28,g*.6),"lowpass",260,p,.28),h(l(p,.07,g*.3),"bandpass",900,p,.07)},bash:(p,g)=>{c(l(p,.2,g),"sine",120,40,p,.2),h(l(p,.06,g*.6),"bandpass",1800,p,.06)},rev:(p,g)=>{c(l(p,.25,g*.5),"sawtooth",180,260,p,.25),h(l(p,.25,g*.25),"bandpass",2600,p,.25)},cut:(p,g)=>{c(l(p,.3,g*.5),"sawtooth",150,105,p,.3),h(l(p,.3,g*.5),"bandpass",900,p,.3),h(l(p,.2,g*.3),"lowpass",400,p,.2)},finish:(p,g)=>{c(l(p,.4,g),"sine",70,26,p,.4),h(l(p,.3,g*.5),"lowpass",220,p,.3)},throw:(p,g)=>{d(l(p,.3,g*.6),"bandpass",400,1600,p,.3),c(l(p,.18,g*.5),"sawtooth",140,85,p+.02,.18)},clank:(p,g)=>{let m=l(p,.14,g*.6);c(m,"square",1450,1450,p,.14),c(m,"square",2230,2230,p,.14),h(l(p,.04,g*.5),"bandpass",3500,p,.04)},boom:(p,g)=>{c(l(p,.5,g),"sine",50,50,p,.5),c(l(p,.3,g*.7),"sine",110,40,p,.3),h(l(p,.45,g*.6),"lowpass",500,p,.45)},saunaOpen:(p,g)=>{d(l(p,.5,g*.7),"bandpass",700,3200,p,.5)},saunaClose:(p,g)=>{d(l(p,.3,g*.6),"bandpass",2600,600,p,.3),c(l(p+.28,.2,g),"sine",95,45,p+.28,.2)},revive:(p,g)=>{c(l(p,.2,g*.8),"triangle",440,440,p,.2),c(l(p+.17,.3,g),"triangle",660,660,p+.17,.3)},tobbleShot:(p,g)=>{c(l(p,.07,g),"sine",700,280,p,.07),h(l(p,.04,g*.5),"bandpass",2800,p,.04)},step:(p,g)=>{c(l(p,.1,g),"sine",95,50,p,.1),h(l(p,.07,g*.5),"lowpass",280,p,.07)}};return{play(p,g,m=0){let v=f[p];if(!(!v||!(g>0)||!r()))try{a(),s=o(m),v(e.currentTime,g)}catch{}},unlock(){if(r())try{a()}catch{}}}}function zx(){let t=!1;return{update(e,n,i){return i?(n&&(t=!0),e||(t=!1),{fire:t&&!!e,firePressed:!!n}):(t=!1,{fire:!1,firePressed:!1})},reset(){t=!1}}}var Ju=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),Hx=Object.freeze(["regret",null,"pistol"]);function Gx(t,e){return t>=e.perfectStart&&t<=e.perfectEnd?"perfect":t>=e.goodStart&&t<=e.goodEnd?"good":"jam"}function t0(t,e,n,i){let s=Math.max(t.reloadTime,i.minReloadTime);return n==="perfect"?Math.min(e+t.perfectFinish,s):n==="good"?Math.min(e+t.goodFinish,s):n==="jam"?s+t.jamPenalty:s}var KA={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function Vx({weapons:t=X.weapons,combat:e=X.combat,loadout:n=Hx}={}){let i={},s=()=>{for(let g of n)g&&Object.assign(i[g]||(i[g]={}),{mag:Math.floor(t[g].mag),reserve:Math.floor(t[g].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,n.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>n[o.slot],l=(g,m)=>g[KA[m]||"spreadHip"],c=g=>g!=null&&o.reload===null&&o.switching<=0;function h(){let g=a(),m=t[g],v=i[g];return o.reload===null&&o.switching<=0&&v.mag<m.mag&&(m.infiniteReserve>0||v.reserve>0)}function d(){let g=a(),m=t[g];o.reload={id:g,t:0,press:null,end:t0(m,0,"normal",e)},i[g].boost=!1,r.push({type:"reloadStart",id:g})}function u(){let{id:g,press:m}=o.reload,v=t[g],y=i[g],M=Math.max(0,v.mag-y.mag);if(v.infiniteReserve>0)y.mag+=M;else{let b=Math.min(M,y.reserve);y.mag+=b,y.reserve-=b}y.boost=m==="perfect",o.reload=null,r.push({type:"reloadDone",id:g,result:m||"normal"})}function f(g){g===o.slot||!n[g]||(o.reload=null,o.slot=g,o.switching=t[n[g]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:n[g]}))}function p(g){let m=n.length;for(let v=1;v<m;v++){let y=(o.slot+g*v+m*m)%m;if(n[y])return f(y)}}return o.current=a,o.canFire=c,o.spreadOf=g=>l(t[a()],g)+i[a()].bloom,o.update=function(m,v,y){r.length=0,(!(y>0)||!Number.isFinite(y))&&(y=0);let M=m.weapon;M==="next"?p(1):M==="prev"?p(-1):(M===1||M===2||M===3)&&f(M-1),o.switching-=y;for(let D of n)D&&(i[D].bloom=Math.max(0,i[D].bloom-t[D].bloomRecover*y));let b=a(),w=t[b],S=i[b];if(m.reload){if(o.reload===null)h()&&d();else if(o.reload.press===null){let D=o.reload,I=Math.max(w.reloadTime,e.minReloadTime);D.press=Gx(D.t/I,w),D.end=t0(w,D.t,D.press,e),r.push({type:"reloadPress",id:b,result:D.press})}}o.reload!==null&&(o.reload.t+=y,o.reload.t>=o.reload.end&&u()),m.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=y,m.fire||(o.dryLatched=!1),c(v)||(o.buffer=0);let x=w.auto>0,_=x?!!m.fire:o.buffer>0,L=1/Math.max(w.rate,e.minRate);for(o.cooldown-=y,_||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-L);_&&c(v)&&o.cooldown<=0;){if(S.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:b})),o.buffer=0,e.autoReload>0&&h()&&d();break}if(S.mag--,r.push({type:"shot",id:b,mult:S.boost?w.perfectDamage:1,spread:o.spreadOf(v)}),S.bloom=Math.min(w.bloomMax,S.bloom+w.bloomPerShot),o.cooldown+=L,S.mag===0&&(S.boost=!1),!x){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,n.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(g,m)=>{let v=i[g];!v||t[g].infiniteReserve>0||!(m>0)||(v.reserve=Math.max(v.reserve,Math.min(Math.floor(t[g].reserveMax),v.reserve+Math.floor(m))))},o.refill=()=>{for(let g of n)g&&(i[g].reserve=Math.floor(t[g].reserveMax))},o.set=(g,{mag:m,reserve:v}={})=>{i[g]&&(m!==void 0&&(i[g].mag=m),v!==void 0&&(i[g].reserve=v))},o}function Wx(t){if(t.grenadeAim||Object.hasOwn(Xu,t.state))return null;if(t.state==="move")return t.aiming?"aim":t.firing?"hip":null;if(t.state==="cover"&&t.cover){if(t.cover.pop===1)return"aim";if(t.cover.blind===1)return"blind"}return null}var Zo=[0,0];function ju(t,e,n,i=X.combat,s=[0,0,0]){if(e==="blind"&&t.cover){let l=t.cover,c=l.edge,h=t.tuning.radius+t.coverTuning.gap,d=c.normal;if(c.kind==="low")Ri(c,l.t,Zo),s[0]=Zo[0]-d[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=Zo[1]-d[1]*(h+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;Ri(c,u<0?0:c.length,Zo);let f=t.coverTuning.endInset+i.blindReach;s[0]=Zo[0]+c.tangent[0]*u*f-d[0]*h,s[1]=i.muzzleUp,s[2]=Zo[1]+c.tangent[1]*u*f-d[1]*h}return s}let r=i.muzzleRight*Fr(t),o=Math.sin(n),a=Math.cos(n);s[1]=t.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=t.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=t.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!Xo(t.boxes,s,0)));l-=.25);return s}function JA(t,e,n,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(t[o]<n.min[o]||t[o]>n.max[o])return 1/0}else{let a=(n.min[o]-t[o])/e[o],l=(n.max[o]-t[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function n0(t,e,n,i,s=1/0){let r=t[0]-n[0],o=t[1]-n[1],a=t[2]-n[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let d=-l-Math.sqrt(h);return d>=0&&d<=s?d:1/0}function jA(t,e,n,i,s,r=1/0){let o=i[0]-n[0],a=i[1]-n[1],l=i[2]-n[2],c=t[0]-n[0],h=t[1]-n[1],d=t[2]-n[2],u=o*o+a*a+l*l,f=o*c+a*h+l*d,p=u>1e-12?Math.max(0,Math.min(1,f/u)):0,g=c-o*p,m=h-a*p,v=d-l*p;if(g*g+m*m+v*v<=s*s)return 0;let y=Math.min(n0(t,e,n,s,r),n0(t,e,i,s,r));if(u>1e-12){let M=o*e[0]+a*e[1]+l*e[2],b=e[0]*c+e[1]*h+e[2]*d,w=c*c+h*h+d*d,S=u-M*M;if(S>1e-12*u){let x=u*b-f*M,_=u*w-f*f-s*s*u,L=x*x-S*_;if(L>=0){let D=(-x-Math.sqrt(L))/S,I=f+D*M;D>=0&&D<=r&&I>0&&I<u&&D<y&&(y=D)}}}return y}function Rn(t,e,n,i,s,{ignoreBox:r=-1}={}){let o=n,a="none",l=null,c=-1,h=!1;for(let d=0;d<i.length;d++){if(d===r)continue;let u=JA(t,e,i[d],o);u<=o&&u!==1/0&&(o=u,a="world",c=d,l=null,h=!0)}for(let d of s){if(!d.alive)continue;let{head:u,body:f}=d.shapes,p=n0(t,e,u.c,u.r,o);p<=o&&p!==1/0&&(o=p,a="head",l=d,c=-1,h=!0);let g=jA(t,e,f.a,f.b,f.r,o);g<=o&&g!==1/0&&(o=g,a="body",l=d,c=-1,h=!0)}return h?{t:o,point:[t[0]+e[0]*o,t[1]+e[1]*o,t[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[t[0]+e[0]*n,t[1]+e[1]*n,t[2]+e[2]*n],kind:"none",target:null,boxIndex:-1}}function Ko(t,e,n,i=[0,0,0]){if(!(e>0))return i[0]=t[0],i[1]=t[1],i[2]=t[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*n(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*n(),l=Math.abs(t[1])<.9?0:1,c=l===0?1:0,h=t[1]*0-t[2]*c,d=t[2]*l-t[0]*0,u=t[0]*c-t[1]*l,f=Math.hypot(h,d,u);h/=f,d/=f,u/=f;let p=t[1]*u-t[2]*d,g=t[2]*h-t[0]*u,m=t[0]*d-t[1]*h,v=Math.cos(a)*o,y=Math.sin(a)*o;return i[0]=t[0]*r+h*v+p*y,i[1]=t[1]*r+d*v+g*y,i[2]=t[2]*r+u*v+m*y,i}function Xx({lens:t,view:e,muzzle:n,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let m=Ko(e,i,l),v=Rn(t,m,s,r,o,{ignoreBox:a}),y=[v.point[0]-n[0],v.point[1]-n[1],v.point[2]-n[2]],M=Math.hypot(y[0],y[1],y[2]),b=M>1e-9?[y[0]/M,y[1]/M,y[2]/M]:[m[0],m[1],m[2]];return{from:n,dir:b,hit:v}}let h=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),d=Rn(t,e,s+h,r,o,{ignoreBox:a}),u=d.kind==="none"?[t[0]+e[0]*s,t[1]+e[1]*s,t[2]+e[2]*s]:d.point,f=[u[0]-n[0],u[1]-n[1],u[2]-n[2]],p=Math.hypot(f[0],f[1],f[2]);p>1e-9?(f[0]/=p,f[1]/=p,f[2]/=p):(f[0]=e[0],f[1]=e[1],f[2]=e[2]);let g=Ko(f,i,l);return{from:n,dir:g,hit:Rn(n,g,s,r,o)}}var dt=Object.freeze({head:Object.freeze({cy:Ut.neckY+Ut.head.centerY,r:Ut.head.rx}),body:Object.freeze({ay:Ut.ankleHeight,by:Ut.neckY,r:Math.max(...Ut.torso.shirt.map(t=>t[0]))})});function Yx(t,e=X.combat.hitPad){let[n,i,s]=t.pos,r=t.shapes;r.head.c[0]=n,r.head.c[1]=i+dt.head.cy,r.head.c[2]=s,r.head.r=dt.head.r+e,r.body.r=dt.body.r+e,r.body.a[0]=n,r.body.a[1]=i+dt.body.ay,r.body.a[2]=s,r.body.b[0]=n,r.body.b[1]=i+dt.body.by,r.body.b[2]=s}function qx({id:t,pos:e,yaw:n=0,rail:i=null},s=X.dummy){let r={id:t,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:n,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:dt.head.r},body:{a:[0,0,0],b:[0,0,0],r:dt.body.r}}};return Yx(r),r}function QA(t,e){let n=t%(4*e);return n<e?n:n<3*e?2*e-n:n-4*e}function $x(t,e,n=X.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!t.alive)t.respawnT-=e,t.respawnT<=0&&(t.alive=!0,t.respawnT=0,t.health=n.health,t.railT=0,t.pos[0]=t.home[0],t.pos[1]=t.home[1],t.pos[2]=t.home[2]);else if(t.rail&&t.rail.half>0){t.railT+=e*Math.max(0,n.railSpeed);let i=QA(t.railT,t.rail.half),s=t.rail.axis==="x"?0:2;t.pos[0]=t.home[0],t.pos[2]=t.home[2],t.pos[s]=t.home[s]+i}Yx(t)}function Zx(t,e,n=X.dummy){return!t.alive||!(e>0)?null:(t.health-=e,t.health>0?"hit":(t.health=0,t.alive=!1,t.respawnT=n.respawnTime,"kill"))}function i0(t,e,n=1){return e!=="head"&&e!=="body"?0:t.damage*n*(e==="head"?t.headMult:1)}function Kx(t,e,n){for(let i of e)if(Math.hypot(t[0]-i.pos[0],t[2]-i.pos[2])<=n)return!0;return!1}function Jx(t){let e=new Float32Array(t),n=new Uint8Array(t),i=0;return{ages:e,alive:s=>n[s]===1,spawn(){let s=-1;for(let r=0;r<t;r++){let o=(i+r)%t;if(!n[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<t;r++)e[r]>e[s]&&(s=r)}return n[s]=1,e[s]=0,i=(s+1)%t,s},clear(){n.fill(0)},update(s,r){for(let o=0;o<t;o++)n[o]&&(e[o]+=s,e[o]>r(o)&&(n[o]=0))}}}var eR=new z(0,0,1);function jx(t,e=()=>X.feedback){let n=new en,i=(E=1)=>(Math.random()*2-1)*E;function s(E,N,R){let C=new Ui(E,At({color:N,rim:0}),R);C.frustumCulled=!1,C.count=R,n.position.set(0,-1e3,0),n.scale.setScalar(0),n.updateMatrix();for(let U=0;U<R;U++)C.setMatrixAt(U,n.matrix);return t.add(C),{mesh:C,pool:Jx(R),pos:new Float32Array(R*3),vel:new Float32Array(R*3),aux:new Float32Array(R*4)}}let r=s(new Io(.5,0),F.playerOrange,8),o=s(new mt(1,1,1),F.playerOrange,24),a=s(new Io(.5,0),F.gel,8),l=s(new mt(1,1,1),F.gel,24),c=s(new mt(.05,.05,.05),F.cream,48),h=s(new Er(.5,0),F.gel,96),d=s(new mt(.16,.2,.012),F.cream,48),u=s(new Er(.5,0),F.cream,40),f=s(new Er(.5,1),F.planet,4),p=s(new mt(1,1,1),F.playerOrange,16),g=new z;function m(E,N){n.updateMatrix(),E.mesh.setMatrixAt(N,n.matrix),E.mesh.instanceMatrix.needsUpdate=!0}let v=(E,N)=>{n.position.set(0,-1e3,0),n.scale.setScalar(0),n.quaternion.identity(),m(E,N)},y=(E,N,R,C,U)=>{E.pos[N*3]=R,E.pos[N*3+1]=C,E.pos[N*3+2]=U},M=(E,N,R,C,U)=>{E.vel[N*3]=R,E.vel[N*3+1]=C,E.vel[N*3+2]=U};function b(E,N,R,C,U){let H=R[0]+i(C),ee=R[1]+i(C),q=R[2]+i(C),te=Math.hypot(H,ee,q)||1;M(E,N,H/te*U*(.5+Math.random()*.5),ee/te*U*(.5+Math.random()*.5),q/te*U*(.5+Math.random()*.5))}let w=[];function S(E,N,R,C){w.push({k:E,life:N,shown:new Uint8Array(E.pool.ages.length),step(U){let H=e().gravity,ee=E;for(let q=0;q<ee.pool.ages.length;q++)if(ee.pool.alive(q)){ee.vel[q*3+1]-=H*U;for(let te=0;te<3;te++)ee.pos[q*3+te]+=ee.vel[q*3+te]*U}},draw(U){let H=1-E.pool.ages[U]/N();n.position.set(E.pos[U*3],E.pos[U*3+1],E.pos[U*3+2]),n.scale.setScalar(R(U)*Math.max(0,H)),C?n.rotation.set(E.aux[U*4]+E.pool.ages[U]*7,E.aux[U*4+1]+E.pool.ages[U]*5,E.aux[U*4+2]):n.quaternion.identity(),m(E,U)}})}S(c,()=>e().sparkTime,()=>1,!1),S(h,()=>e().gelTime,E=>.05+h.aux[E*4+3]*.07,!1),S(d,()=>e().receiptTime,()=>1,!0);function x(E,N){w.push({k:E,shown:new Uint8Array(E.pool.ages.length),life:()=>e().flashTime,step(){},draw(R){let C=1-E.pool.ages[R]/e().flashTime;n.position.set(E.pos[R*3],E.pos[R*3+1],E.pos[R*3+2]),n.scale.setScalar(e()[N]*(.5+.5*Math.max(0,C))),n.rotation.set(E.aux[R*4],E.aux[R*4+1],E.aux[R*4+2]),m(E,R)}})}function _(E,N,R,C=1){w.push({k:E,shown:new Uint8Array(E.pool.ages.length),life:()=>e()[N],step(){},draw(U){let H=Math.max(0,1-E.pool.ages[U]/e()[N]),ee=e()[R]*C*H,q=E.aux[U*4];n.position.set(E.pos[U*3],E.pos[U*3+1],E.pos[U*3+2]),n.quaternion.setFromUnitVectors(eR,g.set(E.vel[U*3],E.vel[U*3+1],E.vel[U*3+2])),n.scale.set(ee,ee,q),m(E,U)}})}let L=.9;w.push({k:u,shown:new Uint8Array(u.pool.ages.length),life:()=>L,step(E){for(let N=0;N<u.pool.ages.length;N++)if(u.pool.alive(N))for(let R=0;R<3;R++)u.pos[N*3+R]+=u.vel[N*3+R]*E},draw(E){let N=u.pool.ages[E]/L;n.position.set(u.pos[E*3],u.pos[E*3+1],u.pos[E*3+2]),n.scale.setScalar(u.aux[E*4+3]*(.5+N)*(1-N*N*N)),n.quaternion.identity(),m(u,E)}}),w.push({k:f,shown:new Uint8Array(f.pool.ages.length),life:()=>e().blastTime,step(){},draw(E){let N=Math.min(f.pool.ages[E]/Math.max(e().blastTime,.001),1),R=1-(1-Math.min(N/.6,1))**2,C=N>.6?1-(N-.6)/.4:1;n.position.set(f.pos[E*3],f.pos[E*3+1],f.pos[E*3+2]),n.scale.setScalar(Math.max(e().blastSize*R*C,.001)),n.rotation.set(0,f.aux[E*4],0),m(f,E)}}),_(p,"tracerTime","tracerWidth",.6),x(r,"flashSize"),x(a,"enemyFlashSize"),_(o,"tracerTime","tracerWidth"),_(l,"enemyTracerTime","enemyTracerWidth");let D=(E,N,R)=>{let C=E.pool.spawn();y(E,C,N[0]+R[0]*.1,N[1]+R[1]*.1,N[2]+R[2]*.1),E.aux[C*4]=i(3),E.aux[C*4+1]=i(3),E.aux[C*4+2]=i(3)},I=(E,N,R)=>{let C=R[0]-N[0],U=R[1]-N[1],H=R[2]-N[2],ee=Math.hypot(C,U,H);if(!(ee>1e-6))return;let q=E.pool.spawn();y(E,q,N[0]+C/2,N[1]+U/2,N[2]+H/2),M(E,q,C/ee,U/ee,H/ee),E.aux[q*4]=ee};return{flash(E,N){D(r,E,N)},tracer(E,N){I(o,E,N)},friendlyTracer(E,N){I(p,E,N)},steam(E){let N=u.pool.spawn();y(u,N,E[0],E[1],E[2]),M(u,N,i(.15),.7+Math.random()*.4,i(.15)),u.aux[N*4+3]=.16+Math.random()*.1},blast(E){let N=f.pool.spawn();y(f,N,E[0],E[1]+.3,E[2]),f.aux[N*4]=Math.random()*6;for(let R=0;R<6;R++){let C=u.pool.spawn(),U=R/6*Math.PI*2+Math.random();y(u,C,E[0],E[1]+.2,E[2]),M(u,C,Math.cos(U)*2.2,.8+Math.random()*.6,Math.sin(U)*2.2),u.aux[C*4+3]=.35+Math.random()*.2}this.gel([E[0],E[1]+.3,E[2]],[0,1,0],12)},enemyFlash(E,N){D(a,E,N)},enemyTracer(E,N){I(l,E,N)},spark(E,N){for(let R=0;R<e().sparkCount;R++){let C=c.pool.spawn();y(c,C,E[0],E[1],E[2]),b(c,C,N,.9,3)}},gel(E,N,R=e().gelCount){for(let C=0;C<R;C++){let U=h.pool.spawn();y(h,U,E[0],E[1],E[2]),b(h,U,N,1.2,e().gelSpeed),h.aux[U*4+3]=Math.random()}},receipts(E,N=e().receiptCount){for(let R=0;R<N;R++){let C=d.pool.spawn();y(d,C,E[0],E[1],E[2]),b(d,C,[0,1,0],1.5,e().gelSpeed),d.aux[C*4]=i(3),d.aux[C*4+1]=i(3),d.aux[C*4+2]=i(3)}},clear(){for(let E of w){E.k.pool.clear();for(let N=0;N<E.shown.length;N++)E.shown[N]&&(v(E.k,N),E.shown[N]=0)}},update(E){if(E>0)for(let N of w){N.step(E);let{pool:R}=N.k;R.update(E,N.life);for(let C=0;C<R.ages.length;C++)R.alive(C)?(N.draw(C),N.shown[C]=1):N.shown[C]&&(v(N.k,C),N.shown[C]=0)}}}}function tR(t,e,n){let i=Math.PI/180;return n/2*Math.tan(t*i/2)/Math.tan(e*i/2)}var nR=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),Qu=t=>t<0?0:t>1?1:t;function Qx({arsenal:t,stance:e,firing:n,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:d="",hours:u="",bark:f=null,banner:p=null,grenades:g=null,action:m=null,boss:v=null,ending:y=null,weapons:M=X.weapons,combat:b=X.combat,feedback:w=X.feedback}){let S=t.current(),x=M[S],_=t.ammo[S],L=t.reload,D=s==="pad"?"RB":"R",I={show:!1,marker:0,good:[x.goodStart,x.goodEnd],perfect:[x.perfectStart,x.perfectEnd],flash:c,prompt:""};if(L){let U=Math.max(x.reloadTime,b.minReloadTime);I={...I,show:!0,marker:Qu(L.t/U),prompt:L.press===null?`${D} again on the bright zone`:""}}else _.mag<=0&&(I.prompt=`${D} to reload`);let E=_.mag<=Math.max(0,w.lowAmmoFrac)*x.mag,N=x.infiniteReserve<=0&&_.reserve<=0,R={show:!1,text:"",kind:""};!L&&E&&!p&&(R.show=!0,N&&_.mag<=0?(R.text="NO AMMO",R.kind="none"):N?(R.text="LOW AMMO",R.kind="low"):_.mag<=0?(R.text=`EMPTY \u2014 RELOAD  ${D}`,R.kind="empty"):(R.text=`RELOAD  ${D}`,R.kind="low"));let C=e==="aim";return{weapon:Ju[S].name,mag:_.mag,reserve:x.infiniteReserve>0?"\u221E":_.reserve,reticle:{show:C||!!n||i,gap:w.reticleMinGap+tR(r,o,a),opacity:i&&!C?w.coverReticleOpacity:1},reload:I,alert:R,hit:{show:!!l,kind:l||null},faceShow:!!h&&!p&&!h.downed.show,face:h,objective:d,hours:u||"",bark:f,banner:p,grenades:Number.isFinite(g)?g:null,boss:v?{name:v.name,fraction:Qu(v.fraction),phase:v.phase,invuln:!!v.invuln,hint:v.hint||""}:null,ending:y?{card:y.card,lines:y.lines,tone:y.tone||"big",final:!!y.final}:null,action:m&&m.text?{text:m.text,hold:Number.isFinite(m.hold)?Qu(m.hold):null}:null}}function ey(t=document.body){let e=(re,ie,Te,Ie)=>{let _e=document.createElement(re);return ie&&(_e.className=ie),Ie!==void 0&&(_e.textContent=Ie),Te&&Te.appendChild(_e),_e},n=e("div","",t);n.id="cr-hud";let i={};for(let re of["top","right","bottom","left"])i[re]=e("div",`cr-edge cr-edge-${re}`,n);let s="http://www.w3.org/2000/svg",r=(re,ie,Te)=>{let Ie=document.createElementNS(s,re);for(let _e of Object.keys(ie))Ie.setAttribute(_e,ie[_e]);return Te&&Te.appendChild(Ie),Ie},o=e("div","cr-face",n),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),d=e("div","cr-banner",n),u=e("div","cr-banner-title",d),f=e("div","cr-banner-hint",d),p=e("i","cr-ring",d),g=e("div","cr-action",n),m=e("span","cr-action-text",g),v=e("i","cr-ring",g),y=e("div","cr-objective",n),M=e("div","cr-boss",n),b=e("div","cr-boss-name",M),w=e("div","cr-boss-bar",M),S=e("i","cr-boss-fill",w);e("i","cr-boss-tick cr-boss-tick-a",w),e("i","cr-boss-tick cr-boss-tick-b",w);let x=e("div","cr-boss-hint",M),_=e("div","cr-ending",n),L=e("div","cr-ending-text",_),D=e("div","cr-ending-hint",_),I=e("div","cr-hours",n),E=e("div","cr-bark",n),N=e("span","cr-bark-who",E),R=e("span","cr-bark-text",E),C=e("div","cr-weapon",n),U=e("div","cr-weapon-name",C),H=e("div","cr-ammo",C),ee=e("div","cr-kb",C),q=e("div","cr-prompt",C),te=e("div","cr-reload",C),Y=e("div","cr-zone cr-zone-good",te),K=e("div","cr-zone cr-zone-perfect",te),Se=e("div","cr-marker",te),Z=e("div","cr-result",C),ye=e("div","cr-alert",n),Ae=e("div","cr-reticle",n),He=["up","down","left","right"].map(re=>e("div",`cr-arm cr-arm-${re}`,Ae)),se=e("div","cr-hit",n);e("i","cr-hit-a",se),e("i","cr-hit-b",se),e("i","cr-hit-ring",se);let Ne={},fe=(re,ie,Te)=>{Ne[re]!==ie&&(Ne[re]=ie,Te(ie))},ge=re=>`${(re*100).toFixed(1)}%`,Ce=(re,[ie,Te])=>{re.style.left=ge(ie),re.style.width=ge(Math.max(0,Te-ie))};return{render(re){fe("weapon",re.weapon,oe=>{U.textContent=oe}),fe("ammo",`${re.mag}|${re.reserve}`,()=>{H.textContent=`${re.mag} / ${re.reserve}`}),fe("prompt",re.reload.prompt,oe=>{q.textContent=oe}),fe("reload.show",re.reload.show,oe=>{te.hidden=!oe}),fe("good",`${re.reload.good}`,()=>Ce(Y,re.reload.good)),fe("perfect",`${re.reload.perfect}`,()=>Ce(K,re.reload.perfect)),fe("marker",Math.round(re.reload.marker*500),()=>{Se.style.left=ge(re.reload.marker)}),fe("flash",re.reload.flash,oe=>{Z.textContent=oe&&nR[oe]||"",Z.dataset.kind=oe||""}),fe("alert",re.alert.show?`${re.alert.kind}|${re.alert.text}`:"",()=>{ye.hidden=!re.alert.show,ye.textContent=re.alert.text,ye.dataset.kind=re.alert.kind}),fe("ret.show",re.reticle.show,oe=>{Ae.hidden=!oe}),fe("ret.op",Math.round(re.reticle.opacity*100),()=>{Ae.style.opacity=re.reticle.opacity.toFixed(2)}),fe("ret.gap",Math.round(re.reticle.gap),oe=>{He.forEach(Oe=>Oe.style.setProperty("--gap",`${oe}px`))});let ie=re.face;if(fe("face.show",!!re.faceShow,oe=>{o.hidden=!oe}),ie){fe("face.op",Math.round(ie.face.opacity*100),()=>{o.style.opacity=ie.face.opacity.toFixed(2)}),fe("face.frown",Math.round(ie.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*ie.face.frown).toFixed(1)} 70 72`)}),fe("face.fill",Math.round(ie.face.fill*50),()=>{let oe=92*ie.face.fill;c.setAttribute("y",(96-oe).toFixed(1)),c.setAttribute("height",oe.toFixed(1))});for(let oe of Object.keys(i))fe(`edge.${oe}`,Math.round(ie.edges[oe]*50),()=>{i[oe].style.opacity=ie.edges[oe].toFixed(2)})}fe("kb",re.grenades===null?"":String(re.grenades),oe=>{ee.hidden=oe==="",ee.textContent=`KETTLEBELLS ${oe}`}),fe("action",re.action?re.action.text:"",oe=>{g.hidden=!re.action,m.textContent=oe}),fe("action.hold",re.action&&re.action.hold!==null?Math.round(re.action.hold*100):-1,oe=>{v.hidden=oe<0,v.style.setProperty("--hold",`${Math.max(oe,0)*3.6}deg`)});let Te=re.banner&&re.banner.hold!==void 0&&re.banner.hold!==null?Math.round(Qu(re.banner.hold)*100):-1;fe("banner.hold",Te,oe=>{p.hidden=oe<0,p.style.setProperty("--hold",`${Math.max(oe,0)*3.6}deg`)}),fe("banner",re.banner?`${re.banner.title}|${re.banner.hint}`:"",oe=>{d.hidden=!re.banner,re.banner&&(u.textContent=re.banner.title,f.textContent=re.banner.hint)}),fe("objective",re.objective||"",oe=>{y.textContent=oe,y.hidden=!oe});let Ie=re.boss;fe("boss",Ie?`${Ie.name}|${Ie.phase}|${Ie.invuln}|${Ie.hint}`:"",()=>{M.hidden=!Ie,Ie&&(b.textContent=Ie.name,M.dataset.invuln=Ie.invuln?"1":"0",x.textContent=Ie.hint)}),fe("boss.fill",Ie?Math.round(Ie.fraction*500):-1,()=>{Ie&&(S.style.width=ge(Ie.fraction))});let _e=re.ending;fe("ending",_e?`${_e.card}|${_e.final}`:"",()=>{_.hidden=!_e,_e&&(_.dataset.tone=_e.tone,L.replaceChildren(..._e.lines.map((oe,Oe)=>e("div",Oe===0?"cr-ending-line cr-ending-first":"cr-ending-line",null,oe))),D.textContent=_e.final?"Press any key":"")}),fe("hours",re.hours||"",oe=>{I.textContent=oe,I.hidden=!oe}),fe("bark",re.bark?`${re.bark.speaker}|${re.bark.text}`:"",()=>{E.hidden=!re.bark,re.bark&&(N.textContent=re.bark.speaker,N.style.color=re.bark.color||"",R.textContent=re.bark.text)}),fe("hit",re.hit.show?re.hit.kind:"",oe=>{se.hidden=!oe,se.dataset.kind=oe})}}}function ty(t){let e=Xi(Ut),n=Yi(e),i=new ft;i.name=`dummy-${t.id}`,i.add(e.root),i.add(e.shadow);let s=!!(t.rail&&t.rail.half>0),r=t.yaw,o=t.pos[0],a=t.pos[2],l="live",c=0;s&&n.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function d(u){i.position.set(t.pos[0],t.pos[1],t.pos[2]);let f=t.pos[0]-o,p=t.pos[2]-a;s&&f*f+p*p>1e-8&&(r=Math.atan2(f,p)),o=t.pos[0],a=t.pos[2],i.rotation.y=r;let g=X.feedback;if(l==="burst"){c+=u;let m=g.dummyBurstTime>0?Math.min(c/g.dummyBurstTime,1):1;h(1+.2*m),m>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=u;let m=g.dummyRespawnPop>0?Math.min(c/g.dummyRespawnPop,1):1;h(m),m>=1&&(l="live")}l!=="gone"&&(n.update(s?u*Math.min(Math.max(X.dummy.railSpeed/Wi,.3),3):u),e.update(u))}return{group:i,update:d,hit(){(l==="live"||l==="pop")&&n.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var ny="#f3efe6";function iy(t){for(let e of Object.values(t))e&&typeof e=="object"&&iy(e);return Object.freeze(t)}var sy=iy({...structuredClone(Ut),name:"doc-placeholder",colors:{...Ut.colors,hair:F.teal,shirt:ny,collar:ny},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Ut.face,brow:"uni",fixedSmile:0}});function td(t){return Ot(t.map(([e,n,i,s,r,o])=>new mt(e,n,i).translate(s,r,o)),!1)}function Br(t,e,n){let i=new ot(Qn(e),At({color:n}));return Tn(i),t.add(i),i}var Jo=.09;function iR(){let t=new ft;t.name="disc",t.position.set(0,-.05,.22),Br(t,new Wt(Jo,Jo,.022,20),F.playerOrange),Br(t,new Wt(Jo-.018,Jo-.018,.034,20),F.cream);let e=[];for(let n=0;n<6;n++){let i=n/6*Math.PI*2;e.push(new mt(.02,.026,.05).rotateY(i).translate(Math.sin(i)*(Jo-.03),0,Math.cos(i)*(Jo-.03)))}return Br(t,Ot(e,!1),F.ink),t}function sR(){let t=new ft;return t.name="rifle",Br(t,td([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),F.playerOrange),Br(t,td([[.05,.12,.06,0,-.07,0]]),F.ink),t.add(iR()),t}function rR(){let t=new ft;return t.name="pistol",Br(t,td([[.045,.06,.25,0,.04,.075]]),F.playerOrange),Br(t,td([[.04,.1,.05,0,-.04,0]]),F.ink),t}var oR={regret:[0,.06,.45],pistol:[0,.04,.2]},aR=new z(0,0,1),Rk=new z,ed=new z;function ry(){let t=new ft;t.name="gun";let e={regret:sR(),pistol:rR()};t.add(e.regret,e.pistol);let n="regret";e.pistol.visible=!1;let i=new z,s=new z(0,0,1),r=e.regret.getObjectByName("disc"),o=1/0;function a(h){if(!(!e[h]||h===n)){n=h;for(let d of Object.keys(e))e[d].visible=d===h}}function l(h,d){i.set(h[0],h[1],h[2]),s.set(d[0],d[1],d[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),t.quaternion.setFromUnitVectors(aR,s),c()}function c(){let h=X.feedback,d=Math.max(h.gunSquashTime,1e-6),u=o>=0&&o<d?Math.sin(Math.PI*o/d):0,f=h.gunSquash*u;t.scale.set(1+f/2,1+f/2,1-f),t.position.copy(i).addScaledVector(s,-h.gunKick*u)}return{group:t,setWeapon:a,place:l,shot(){o=0,c()},update(h,d=0){o+=h>0?h:0,h>0&&d&&(r.rotation.y+=d*h),c()},disc:r,tip(h=[0,0,0]){let d=oR[n];return t.updateMatrix(),ed.set(d[0],d[1],d[2]).applyMatrix4(t.matrix),h[0]=ed.x,h[1]=ed.y,h[2]=ed.z,h}}}var oy=8,ay=64,jo=.12,ly=4,cy=3;function zl(){let t=(s,r)=>{s.deleteAttribute("uv");let o=new Ke(r),a=s.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=o.r,l[c*3+1]=o.g,l[c*3+2]=o.b;return s.setAttribute("color",new bt(l,3)),s},e=t(new $t(jo,14,10).toNonIndexed(),F.ink),n=[new mt(.03,.1,.03).translate(-.055,jo+.04,0),new mt(.03,.1,.03).translate(.055,jo+.04,0),new mt(.14,.03,.03).translate(0,jo+.1,0)].map(s=>t(s.toNonIndexed(),F.playerOrange)),i=t(new mt(.07,.07,.012).translate(0,0,jo-.002).toNonIndexed(),F.cream);return Ot([e,...n,i],!1)}function lR(){let t=(n,i)=>{n=n.toNonIndexed(),n.deleteAttribute("uv");let s=new Ke(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new bt(o,3)),n},e=[t(new mt(.5,.03,.65),"#9be15d")];for(let n=0;n<6;n++)e.push(t(new mt(.38,.034,.025).translate(0,0,-.24+n*.09),F.ink));return Ot(e,!1)}function hy(t){let e=new Ui(zl(),At({vertexColors:!0,rim:.15}),oy);e.name="kettlebells",e.frustumCulled=!1,e.count=0,t.add(e);let n=new en,i=0,s=new Ui(lR(),At({vertexColors:!0,rim:.15}),ly);s.name="termsPages",s.frustumCulled=!1,s.count=0,t.add(s);let r=[];for(let u=0;u<cy;u++){let f=new ot(new Os(.9,1,48).rotateX(-Math.PI/2),new an({color:F.gel,side:yn,depthWrite:!1,toneMapped:!1})),p=new ot(new Ya(.9,36).rotateX(-Math.PI/2),new an({color:"#ff3b1f",transparent:!0,opacity:.28,side:yn,depthWrite:!1,toneMapped:!1}));f.name="lobMarkerRing",p.name="lobMarkerDisc",f.visible=p.visible=!1,t.add(f,p),r.push({ring:f,disc:p})}let o=new Float32Array(ay*3),a=new It;a.setAttribute("position",new bt(o,3)),a.setDrawRange(0,0);let l=new ol({color:F.playerOrange,dashSize:X.feedback.arcDot,gapSize:X.feedback.arcDot}),c=new za(a,l);c.name="kettlebellArc",c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new Ha(a,new Ao({color:F.playerOrange,size:5,sizeAttenuation:!1,toneMapped:!1}));h.name="kettlebellArcDots",h.frustumCulled=!1,h.visible=!1,t.add(h);let d=new ot(new Os(.88,1,40).rotateX(-Math.PI/2),new an({color:F.playerOrange,side:yn,depthWrite:!1,toneMapped:!1}));return d.name="kettlebellRing",d.visible=!1,t.add(d),{mesh:e,line:c,ring:d,dots:h,pages:s,markers:r,update(u,f,p=0,g=null){i+=p>0?p:0;let m=X.grenade.ballRadius/jo,v=0,y=0;for(let b=0;b<u.length;b++){let w=u[b];if(w.hostile){if(y>=ly)continue;n.position.set(w.prevPos[0]+(w.pos[0]-w.prevPos[0])*f,w.prevPos[1]+(w.pos[1]-w.prevPos[1])*f,w.prevPos[2]+(w.pos[2]-w.prevPos[2])*f),n.rotation.set(i*7+y,i*5,i*9),n.scale.setScalar(1),n.updateMatrix(),s.setMatrixAt(y++,n.matrix);continue}if(v>=oy)continue;let S=w.prevPos[0]+(w.pos[0]-w.prevPos[0])*f,x=w.prevPos[1]+(w.pos[1]-w.prevPos[1])*f,_=w.prevPos[2]+(w.pos[2]-w.prevPos[2])*f,L=w.fuse<X.associate.diveWarn?1+.18*(.5+.5*Math.sin(i*40)):1;n.position.set(S,x,_),n.rotation.set(_*2.5,0,-S*2.5),n.scale.setScalar(m*L),n.updateMatrix(),e.setMatrixAt(v++,n.matrix)}e.count=v,e.instanceMatrix.needsUpdate=!0,s.count=y,s.instanceMatrix.needsUpdate=!0;let M=g||[];for(let b=0;b<cy;b++){let w=r[b],S=M[b];if(w.ring.visible=w.disc.visible=!!S,!S)continue;let x=.5+.5*Math.sin(i*(S.windup?14:22));w.ring.position.set(S.pos[0],.04,S.pos[2]),w.disc.position.set(S.pos[0],.035,S.pos[2]),w.ring.scale.setScalar(S.radius),w.disc.scale.setScalar(S.radius*(.55+.45*x))}},arc(u,f,p,g){if(!g||!(f>1)){c.visible=!1,h.visible=!1,d.visible=!1;return}let m=Math.min(f,ay);for(let v=0;v<m;v++)o[v*3]=u[v][0],o[v*3+1]=u[v][1],o[v*3+2]=u[v][2];a.attributes.position.needsUpdate=!0,a.setDrawRange(0,m),l.dashSize=l.gapSize=Math.max(X.feedback.arcDot,.001),c.computeLineDistances(),c.visible=!0,h.visible=!0,p?(d.position.set(p[0],p[1]+.03,p[2]),d.scale.setScalar(X.grenade.killRadius),d.visible=!0):d.visible=!1},reset(){e.count=0,e.instanceMatrix.needsUpdate=!0,s.count=0,s.instanceMatrix.needsUpdate=!0,c.visible=!1,h.visible=!1,d.visible=!1;for(let u of r)u.ring.visible=u.disc.visible=!1}}}var id=Math.PI*2,Zi=(t,e,n)=>t<e?e:t>n?n:t,cR=t=>t-id*Math.round(t/id),fy=.001,s0=.5,r0=.3;function hR(t,e=t.tuning||X.move){let n=t.state,i=t.speed();if(n==="bash")return{name:"bash",rate:yt.bash.duration/Math.max(X.melee.bashTime,.001)};if(n==="rev")return{name:"aim",rate:1};if(n==="execute")return{name:"bash",rate:1,loop:!0};if(n==="reviveTobble")return{name:"revive",rate:1};if(n==="knocked")return{name:"flinch",rate:1};if(n==="downed")return{name:"crawl",rate:Zi(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(n==="roll")return{name:"roll",rate:yt.roll.duration/e.rollTime};if(n==="sprint")return{name:"sprint",rate:Zi(i/Wi,e.sprintRateMin,e.sprintRateMax)};if(n==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:Zi(i/Wi,e.runRateMin,e.runRateMax)};if(t.grenadeAim)return{name:"throw",rate:0,at:r0*yt.throw.duration};if(t.aiming||t.firing)return{name:"aim",rate:1}}if(n==="coverSlide")return{name:Ss(t).kind==="low"?"coverLow":"coverTall",rate:1};if(n==="coverSwap")return{name:"sprint",rate:Zi(i/Wi,e.sprintRateMin,e.sprintRateMax)};if(n==="cover"&&t.cover){let s=t.cover,r=t.coverTuning||X.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":Fr(t)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:Zi(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return n==="vault"?{name:"vault",rate:yt.vault.duration/Math.max((t.coverTuning||X.cover).vaultTime,fy)}:{name:"idle",rate:1}}function uR(t){let e=t.state==="cover"||t.state==="coverSlide"?Ss(t):null;return!e||e.kind!=="low"?0:t.state==="coverSlide"?Zi(t.stateTime/Math.max(t.scratch.dur,1e-6),0,1):t.cover?Zi(1-Math.max(t.cover.pop,t.cover.blind||0),0,1):0}var dR=(t,e)=>4*e*t*(1-t),fR=(t,e,n)=>t>=0&&t<n?e*Math.sin(Math.PI*t/n):0;function o0(t){if(t<=.08)return 0;if(t>=.9)return id;let e=(t-.08)/.82;return id*e*e*(3-2*e)}var uy=.95,dy=.6,Ts=new z,ni=[0,0,1],nd=[0,0,0];function py(t,e=sy){let n=Xi(e),i=Yi(n),s=new ft;s.name="player";let r=new ft;r.position.y=s0,n.root.position.y=-s0,r.add(n.root),s.add(r),s.add(n.shadow);let o=n.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=ry();s.add(l.group);let c=new ot(zl(),At({vertexColors:!0,rim:.15}));c.name="kettlebellInHand",c.position.set(0,.1,0),c.visible=!1,a.R.add(c);let h=0,d=1/0,u=n.root.getObjectByName("head"),f=new z,p=!0;function g(N,R,C){u.getWorldPosition(f),f.y+=n.spec.head.centerY;let U=Math.hypot(N[0]-f.x,N[1]-f.y,N[2]-f.z);return p=$v(U,p,R,C),u.visible=p,p}let m=0,v=0,y=0,M="",b=0,w=-1,S=t.slams||0,x=1/0;function _(N,R,C){let U=t.pos,H=t.prevPos,ee=t.coverTuning||X.cover,q=uR(t);m=ee.popTime>0?Math.max(q,m+Zi(q-m,-R/ee.popTime,R/ee.popTime)):q;let te=t.state==="cover"&&t.cover&&t.cover.edge.kind==="low"?Zi(t.cover.blind||0,0,1):0;if(q>0||te>0){let fe=Ss(t);v=fe.normal[0],y=fe.normal[1]}let Y=m*ee.lowDrawBack+te*ee.blindDrawBack;s.position.set(H[0]+(U[0]-H[0])*N+v*Y,H[1]+(U[1]-H[1])*N,H[2]+(U[2]-H[2])*N+y*Y),s.rotation.y=t.prevFacing+cR(t.facing-t.prevFacing)*N;let K=hR(t),Se=h>0;Se&&(K={name:"throw",rate:yt.throw.duration*(1-r0)/Math.max(X.grenade.throwTime,.001),at:r0*yt.throw.duration},h-=R);let Z=Se?"throw!":K.name;Z!==M||t.entries!==w?(i.play(K.name,K.name==="roll"?{fade:.05}:K.at!==void 0?{fade:.06,at:K.at}:void 0),M=Z,w=t.entries,b=0):K.loop&&(b+=R*K.rate,b>=yt[K.name].duration&&(b-=yt[K.name].duration,i.play(K.name,{fade:0}))),i.update(R*K.rate,K.rate===0?R:void 0),n.update(R);let ye=X.feedback,Ae=Math.max(ye.gunSquashTime,1e-6);d=C&&C.shot?R:d+R;let He=d<Ae?ye.bodyKick*Math.sin(Math.PI*d/Ae):0;r.rotation.x=(t.state==="roll"?o0(t.stateTime/t.tuning.rollTime):0)-He,(t.slams||0)!==S?(S=t.slams||0,x=0):x+=R;let se=t.state==="vault"?dR(Zi(t.stateTime/Math.max(ee.vaultTime,fy),0,1),ee.vaultHop):0,Ne=fR(x,ee.slamSquash,ee.slamSquashTime);r.scale.set(1+Ne/2,1-Ne,1+Ne/2),r.position.y=s0*(1-Ne)+se,c.visible=!!(C&&C.kettlebell)&&!Se,c.scale.setScalar(X.grenade.ballRadius/.12),L(K.name,R,C)}function L(N,R,C){if(s.updateMatrixWorld(!0),(N==="coverBlindTallL"?a.L:a.R).getWorldPosition(Ts),s.worldToLocal(Ts),C&&C.stance&&N==="coverBlindLow")ni[0]=0,ni[1]=Math.sin(uy),ni[2]=Math.cos(uy);else if(t.state==="bash"||t.state==="rev"||t.state==="execute")ni[0]=0,ni[1]=-.05,ni[2]=1;else if(C&&C.stance&&C.dir){let H=Math.cos(s.rotation.y),ee=Math.sin(s.rotation.y);ni[0]=C.dir[0]*H-C.dir[2]*ee,ni[1]=C.dir[1],ni[2]=C.dir[0]*ee+C.dir[2]*H}else ni[0]=0,ni[1]=-Math.sin(dy),ni[2]=Math.cos(dy);C&&C.weapon&&l.setWeapon(C.weapon),l.place([Ts.x,Ts.y,Ts.z],ni),C&&C.shot&&l.shot(),l.update(R,t.state==="rev"||t.state==="execute"?X.melee.cutterSpin:0),l.group.visible=t.state!=="roll"&&t.state!=="downed"&&t.state!=="reviveTobble"&&!c.visible&&h<=0}function D(N=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(nd),Ts.set(nd[0],nd[1],nd[2]).applyMatrix4(s.matrixWorld),N[0]=Ts.x,N[1]=Ts.y,N[2]=Ts.z,N}function I(){n.dispose(),n.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:_,dispose:I,rig:n,anim:i,fadeHeadFor:g,gun:l,gunTip:D,throwNow:()=>{h=Math.max(X.grenade.throwTime,.001)},kettlebell:c}}var sd=new Set(["telegraph","burst"]),rr=(t,e,n)=>t<e?e:t>n?n:t,pR=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),my=.5,mR=-.6,gR=t=>t.point&&t.point.kind==="tall"?"tall":"low";function vR(t){let e=gR(t)==="tall";switch(t.state){case"run":return"run";case"flinch":case"stagger":case"executed":return"flinch";case"downed":return"crawl";case"kneel":return"revive";case"dive":return"roll";case"spawn":return"idle";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let n=t.point,i=Ai(-n.normal[0],-n.normal[1]);return n.tangent[0]*n.end*Math.cos(i)-n.tangent[1]*n.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function xR(t){if(t.kind==="trainer"||t.kind==="boss")return t.yaw;if((t.state==="idle"||t.state==="cover"||t.state==="reload"||t.state==="flinch"||t.state==="suppress")&&t.point)return Ai(-t.point.normal[0],-t.point.normal[1]);if(sd.has(t.state))return Ai(t.aim[0]-t.pos[0],t.aim[2]-t.pos[2]);if(t.state==="run"&&t.path&&t.path[t.pathI]){let e=t.path[t.pathI];if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[2])>1e-6)return Ai(e[0]-t.pos[0],e[1]-t.pos[2])}return t.yaw}function yR(t){switch(t.state){case"run":return"run";case"windup":case"swing":return"throw";case"stagger":case"executed":return"flinch";case"dive":return"roll";default:return"idle"}}function _R(t){switch(t.state){case"retreat":case"return":return"run";case"telegraph":case"burst":return"aim";case"lobWindup":case"lobRecover":return"throw";default:return"idle"}}function bR(t){return t.state==="dead"||!t.alive?"dead":t.kind==="boss"?t.state==="telegraph"||t.state==="burst"||t.state==="lobWindup"||t.state==="lobRecover"?"angry":t.state==="retreat"||t.state==="hiding"?"scared":"smug":t.kind==="trainer"&&(t.state==="run"||t.state==="windup"||t.state==="swing")||sd.has(t.state)?"angry":t.state==="flinch"||t.state==="stagger"||t.state==="downed"||t.state==="executed"||t.state==="dive"?"scared":"smug"}var yy=.03,a0=[0,.06,.32];function MR(){let t=new ft;t.name="blaster";let n=Ot([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new mt(r,o,a).translate(l,c,h)),!1),i=new ot(Qn(n),At({color:F.glorpPurple}));Tn(i),t.add(i);let s=new ot(new $t(yy,10,8),new an({color:F.gel}));return s.name="emitter",s.position.set(a0[0],a0[1],a0[2]),t.add(s),{group:t,emitter:s}}var wR=new z(0,0,1),pi=new z,or=new z,gy=.6,zr=.4,vy=.95,SR=1.3;function TR(){let t=zl();t.translate(0,-.22,0).rotateX(Math.PI);let e=new ft;e.name="trainerKettlebell",e.scale.setScalar(SR),e.add(new ot(t,At({vertexColors:!0,rim:.15})));let n=new ot(new $t(.07,10,8),new an({color:"#ff4a1c",toneMapped:!1}));return n.name="glint",n.position.set(0,.22,0),n.visible=!1,e.add(n),{group:e,glint:n}}function Hl(t,e){t=t.toNonIndexed(),t.deleteAttribute("uv");let n=new Ke(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new bt(s,3)),t}function ER(){let t=[Hl(new Wt(.2,.22,.09,16,1,!0).translate(0,.045,0),ws)];for(let n=0;n<5;n++){let i=n/5*Math.PI*2;t.push(Hl(new qa(.045,.14,4).translate(Math.sin(i)*.2,.16,Math.cos(i)*.2),n%2?ws:F.hotPink))}let e=new ot(Ot(t,!1),At({vertexColors:!0,rim:.1}));return e.name="crown",e}function AR(){let e=[F.hotPink,F.teal,F.cream,F.gel,F.lilac].map((i,s)=>Hl(new mt(.075,.105,.012).translate(-.12+s*.06,.3-Math.abs(s-2)*.03-s%2*.03,.215),i)),n=new ot(Ot(e,!1),At({vertexColors:!0,rim:.1}));return n.name="keycards",n}function RR(){let t=[Hl(new mt(.3,.4,.014),"#9be15d")];for(let i=0;i<5;i++)t.push(Hl(new mt(.22,.014,.018).translate(0,.14-i*.07,0),F.ink));let e=new ft;e.name="termsPage",e.add(new ot(Ot(t,!1),At({vertexColors:!0,rim:.1})));let n=new ot(new $t(.08,10,8),new an({color:F.gel,toneMapped:!1}));return n.name="glint",n.position.set(0,.24,0),n.visible=!1,e.add(n),e.visible=!1,e.position.set(0,.1,.12),e.rotation.x=-.5,{group:e,glint:n}}function xy(t){let e=t==="trainer",n=t==="boss",i=Xi(e?zv:n?Du:Ut),s=Yi(i),r=new ft;r.name=t;let o=new ft;o.position.y=my,i.root.position.y=-my,o.add(i.root),r.add(o),r.add(i.shadow);let a=i.root.getObjectByName("body").children[2],l=e?TR():MR(),c=null;if(e?a.add(l.group):r.add(l.group),n){let h=ER();h.position.set(0,Du.head.centerY+Du.head.ry-.04,0),i.root.getObjectByName("head").add(h),i.root.getObjectByName("hips").add(AR()),c=RR(),a.add(c.group)}return{kind:t,rig:i,anim:s,root:r,tumble:o,handR:a,weapon:l,terms:c}}function _y(t){let e=new ft;e.name=`associate-${t.id}`;let n={associate:xy("associate"),trainer:null,boss:null},i=n.associate;e.add(i.root);let s=i.weapon,r="",o=0,a="",l=0,c=t.yaw,h="live",d=0,u=!1,f=0,p=0,g=0,m=0;function v(x){if(i.kind===x)return;n[x]||(n[x]=xy(x),e.add(n[x].root),x==="boss"&&e.add(n.boss.weapon.group)),i.root.visible=!1,i=n[x],i.root.visible=!0;let _=X.trainer.scaleW,L=X.trainer.scaleH;r="",a=""}function y(){h="live",d=0,l=0,c=t.yaw,u=!1,f=0,e.visible=!0,e.scale.setScalar(1),i.tumble.rotation.x=0,r="",a="",o=0,s.emitter.scale.setScalar(1),n.trainer&&(n.trainer.weapon.glint.visible=!1),n.boss&&(n.boss.terms.glint.visible=!1,n.boss.terms.group.visible=!1)}function M(x,_){let L=X.feedback,D=X.cover,I=X.associate;if(t.state==="unused"){e.visible=!1;return}if(t.state==="spawn"&&(h==="burst"||h==="gone")&&y(),t.state!=="dead"&&t.alive&&v(t.kind||"associate"),!t.alive&&t.state==="dead"&&h==="live"&&(h="burst",d=0),h==="live"&&(e.visible=!0),h==="burst"){d+=_;let ie=t.kind==="boss"?X.ending.deathDelay*.9:L.dummyBurstTime,Te=ie>0?Math.min(d/ie,1):1;e.scale.setScalar(1+.2*Te),Te>=1&&(h="gone",e.visible=!1)}if(h==="gone")return;let E=h==="burst",{rig:N,anim:R,tumble:C,handR:U}=i,H=i.kind==="trainer",ee=i.kind==="boss",q=X.trainer,te=X.boss;if(ee){let ie=te.scale*(te.crouchY+(1-te.crouchY)*rr(t.pop,0,1));i.root.scale.set(te.scale,ie,te.scale)}else i.root.scale.set(H?q.scaleW:1,H?q.scaleH:1,H?q.scaleW:1);ee&&E&&(i.root.scale.y*=1-.45*rr(d/Math.max(X.ending.deathDelay*.9,.001),0,1));let Y=t.pos,K=t.prevPos,Se=!E&&t.point&&t.point.kind==="low"&&t.state!=="run"&&t.state!=="dead",Z=Se?rr(1-Math.max(t.pop,t.blind),0,1):0;l=D.popTime>0?Math.max(Z,l+rr(Z-l,-_/D.popTime,_/D.popTime)):Z;let ye=Se?rr(t.blind,0,1):0;Se&&(p=t.point.normal[0],g=t.point.normal[1]);let Ae=l*D.lowDrawBack+ye*D.blindDrawBack,He=t.state==="spawn"?mR*(1-rr(t.stateT/Math.max(X.pad.riseTime,.001),0,1)):0;e.position.set(K[0]+(Y[0]-K[0])*x+p*Ae,K[1]+(Y[1]-K[1])*x+He,K[2]+(Y[2]-K[2])*x+g*Ae);let se=H||ee||t.state==="run"||sd.has(t.state)?t.prevYaw+pR(t.yaw-t.prevYaw)*x:xR(t);if(c=Bt(c,se,(H?q.turnRate:I.turnRate)*1.5*_),e.rotation.y=c,E)return;let Ne=H?yR(t):ee?_R(t):vR(t),fe=H||ee?Ne+":"+t.state:Ne,ge=yt.throw.duration;if(fe!==r){if((H||ee)&&Ne==="throw"){let ie=t.state==="swing"||t.state==="lobRecover",Te=ie?zr*ge:0;R.play(Ne,{fade:ie?.02:.08,at:Te}),m=Te}else R.play(Ne,Ne==="flinch"?void 0:{fade:.1});r=fe,o=0}else t.state==="executed"&&(o+=_,o>=yt.flinch.duration&&(o=0,R.play("flinch")));let Ce=Ne==="run"?rr((H?q.runSpeed:ee?te.retreatSpeed:I.runSpeed)/Wi,.5,3):1;Ne==="crawl"&&(Ce=Math.hypot(Y[0]-K[0],Y[2]-K[2])>1e-5?1:0),Ne==="roll"&&(Ce=yt.roll.duration/Math.max(I.diveReaction+I.diveTime,.001)),H&&t.state==="windup"&&(Ce=m<zr*ge-1e-6?zr*ge/Math.max(q.windup,.001):0),ee&&t.state==="lobWindup"&&(Ce=m<zr*ge-1e-6?zr*ge/Math.max(te.popTime+te.lobWindup,.001):0),ee&&t.state==="lobRecover"&&(Ce=(1-zr)*ge/Math.max(te.lobRecover,.001)),H&&t.state==="swing"&&(Ce=(1-zr)*ge/Math.max(q.swingTime,.001)),m+=_*Ce,C.rotation.x=Ne==="roll"?o0(rr(t.stateT/Math.max(I.diveReaction+I.diveTime,.001),0,1)):0,R.update(_*Ce,Ce===0?_:void 0),N.update(_);let re=bR(t);re!==a&&(N.face.setExpression(re),a=re),H?b(_):ee?(i.weapon.group.scale.setScalar(te.scale),w(_),S(Ne,_,U,i.weapon,t.state==="lobWindup"||t.state==="lobRecover")):S(Ne,_,U)}function b(x){let _=n.trainer.weapon.glint;_.visible=u&&t.state==="windup",_.visible&&(f+=x,_.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function w(x){let _=n.boss.terms;_.group.visible=t.state==="lobWindup",_.glint.visible=u&&t.state==="lobWindup",_.glint.visible&&(f+=x,_.glint.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function S(x,_,L,D=n.associate.weapon,I=!1){D.group.visible=t.state!=="downed"&&t.state!=="dive"&&!I,e.updateMatrixWorld(!0),L.getWorldPosition(pi);let E=pi.x,N=pi.y,R=pi.z;e.worldToLocal(pi);let C=pi.x,U=pi.y,H=pi.z;if(sd.has(t.state)){let ee=Math.cos(e.rotation.y),q=Math.sin(e.rotation.y),te=t.aim[0]-E,Y=t.aim[2]-R;or.set(te*ee-Y*q,t.aim[1]-N,te*q+Y*ee)}else x==="coverBlindLow"?or.set(0,Math.sin(vy),Math.cos(vy)):t.state==="suppress"?or.set(0,.05,1):or.set(0,-Math.sin(gy),Math.cos(gy));if(or.lengthSq()<1e-12&&or.set(0,0,1),or.normalize(),D.group.position.set(C,U,H),D.group.quaternion.setFromUnitVectors(wR,or),u){f+=_;let ee=.5+.5*Math.sin(f*2*Math.PI*8),q=X.feedback.glintSize/yy;D.emitter.scale.setScalar(1+(q-1)*ee)}else D.emitter.scale.setScalar(1)}return{group:e,update:M,reset:y,death(){h==="live"&&(h="burst",d=0)},glint(x){x&&!u&&(f=0),u=!!x},tip(x=[0,0,0]){return e.updateMatrixWorld(!0),(i.kind==="trainer"?i.weapon.glint:i.weapon.emitter).getWorldPosition(pi),x[0]=pi.x,x[1]=pi.y,x[2]=pi.z,x},get rig(){return i.rig},get anim(){return i.anim},blaster:s,get kind(){return i.kind}}}var Gl=new z;function mi(t,e,n,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Gl.copy(e),Gl[i]=0,Gl.normalize();let c=.5*o/(o+a),h=1-Gl.angleTo(t)/l;return Math.sign(Gl[n])===1?h*c:a/(o+a)+c+c*(1-h)}var rd=class t extends mt{constructor(e=1,n=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,n/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new z,c=new z,h=new z(e,n,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,g=new z,m=.5/o;for(let v=0,y=0;v<d.length;v+=3,y+=2)switch(l.fromArray(d,v),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[v+0]=h.x*Math.sign(l.x)+c.x*r,d[v+1]=h.y*Math.sign(l.y)+c.y*r,d[v+2]=h.z*Math.sign(l.z)+c.z*r,u[v+0]=c.x,u[v+1]=c.y,u[v+2]=c.z,Math.floor(v/p)){case 0:g.set(1,0,0),f[y+0]=mi(g,c,"z","y",r,i),f[y+1]=1-mi(g,c,"y","z",r,n);break;case 1:g.set(-1,0,0),f[y+0]=1-mi(g,c,"z","y",r,i),f[y+1]=1-mi(g,c,"y","z",r,n);break;case 2:g.set(0,1,0),f[y+0]=1-mi(g,c,"x","z",r,e),f[y+1]=mi(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),f[y+0]=1-mi(g,c,"x","z",r,e),f[y+1]=1-mi(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),f[y+0]=1-mi(g,c,"x","y",r,e),f[y+1]=1-mi(g,c,"y","x",r,n);break;case 5:g.set(0,0,-1),f[y+0]=mi(g,c,"x","y",r,e),f[y+1]=1-mi(g,c,"y","x",r,n);break}}static fromJSON(e){return new t(e.width,e.height,e.depth,e.segments,e.radius)}};function My(t){for(let e of Object.values(t))e&&typeof e=="object"&&My(e);return Object.freeze(t)}var by=(t,e,n)=>{let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8)r|=Math.round((i>>o&255)+((s>>o&255)-(i>>o&255))*n)<<o;return"#"+r.toString(16).padStart(6,"0")},Hr=My({...Ut,name:"tobble",hair:{...Ut.hair,quiff:!1},colors:{...Ut.colors,shirt:F.cream,collar:by(F.cream,F.ink,.2),skin:F.tobbleMint,hair:by(F.tobbleMint,F.ink,.45),backpack:F.teal,mat:F.lilac},outfit:{collar:!1,lanyard:!0,logo:!1,headset:!1},face:{...Ut.face,brow:"pair",fixedSmile:.4},thirdEye:{y:.13,r:.05},backpack:{w:.5,h:.6,d:.3}});var c0=(t,e,n)=>t<e?e:t>n?n:t,Ey=t=>c0(t,0,1),wy=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),CR=1/60,Sy=t=>t.point&&t.point.kind==="tall"?"tall":"low";function PR(t,e=t.speed||0){let n=e>.3;switch(t.state){case"cover":return Sy(t)==="tall"?"coverTall":"coverLow";case"shoot":return Sy(t)==="tall"?"aim":"coverPop";case"revive":return t.kneeling?"revive":n?"run":"idle";case"downed":return"crawl";default:return n?"run":"idle"}}function IR(t){return t.downed||!t.point||t.point.kind!=="low"||t.state!=="cover"&&t.state!=="shoot"?0:Ey(1-t.pop)}function LR(){let e=new Uint8Array(16384),n=new Ke(F.tobbleMint),i=new Ke(F.ink),s=(o,a,l)=>Math.abs(o-64/2+.5)<l&&Math.abs(a-64/2+.5)<64*.4||Math.abs(a-64/2+.5)<l&&Math.abs(o-64/2+.5)<64*.4;for(let o=0;o<64;o++)for(let a=0;a<64;a++){let l=(o*64+a)*4,c=s(a,o,8),h=s(a,o,13),d=c?n:i;e[l]=Math.round(d.r*255),e[l+1]=Math.round(d.g*255),e[l+2]=Math.round(d.b*255),e[l+3]=h?255:0}let r=new Mr(e,64,64,jn);return r.colorSpace=cn,r.magFilter=xn,r.minFilter=xn,r.needsUpdate=!0,r}function h0(t,e){let n=new ot(Qn(t),At({color:e}));return Tn(n),n}var l0=[0,.04,.2];function DR(){let t=new ft;t.name="tobblePistol";let e=[[.045,.06,.25,0,.04,.075],[.04,.1,.05,0,-.04,0]];return t.add(h0(Ot(e.map(([n,i,s,r,o,a])=>new mt(n,i,s).translate(r,o,a)),!1),F.tobbleMint)),t}var NR=new z(0,0,1),Ki=new z,Qo=new z,Ty=.6;function Ay(t){let e=Xi(Hr),n=Yi(e),i=new ft;i.name="tobble",i.add(e.root);let r=e.root.getObjectByName("body").children[2],o=e.root.getObjectByName("hips"),a=e.root.getObjectByName("head"),l=new ft;l.name="thirdEye";let c=Hr.thirdEye,h=new ot(new $t(c.r,12,10),new an({color:F.eyeWhite})),d=new ot(new $t(c.r*.5,10,8),new an({color:F.ink}));d.position.z=c.r*.8,l.add(h,d),l.position.set(0,Hr.head.centerY+c.y,.27),a.add(l);let u=Hr.backpack,f=new ft;f.name="backpack",f.add(h0(new rd(u.w,u.h,u.d,3,.06),Hr.colors.backpack));let p=h0(new Wt(.085,.085,u.w*.95,12).rotateZ(Math.PI/2),Hr.colors.mat);p.position.y=u.h/2+.05,f.add(p),f.position.set(0,.2,-.32),o.add(f);let g=DR();i.add(g);let m=new Fa(new So({map:LR(),depthTest:!1,depthWrite:!1,toneMapped:!1}));m.name="tobblePlus",m.renderOrder=20,m.visible=!1,i.add(m);let v="",y=0,M=t.yaw,b=0,w=0,S="",x=0;function _(){v="",y=0,M=t.yaw,S="",x=0,i.position.set(t.start[0],t.start[1],t.start[2]),i.rotation.y=t.startYaw,m.visible=!1}function L(I,E){let N=X.tobble,R=X.cover,C=N.scale;x+=E>0?E:0,i.scale.setScalar(C);let U=t.pos,H=t.prevPos,ee=Math.hypot(U[0]-H[0],U[2]-H[2])/CR,q=IR(t);y=R.popTime>0?Math.max(q,y+c0(q-y,-E/R.popTime,E/R.popTime)):q,q>0&&t.point&&(b=t.point.normal[0],w=t.point.normal[1]);let te=y*R.lowDrawBack*C,Y=t.point&&!t.downed?N.popLift*Ey(t.pop):0;i.position.set(H[0]+(U[0]-H[0])*I+b*te,H[1]+(U[1]-H[1])*I+Y,H[2]+(U[2]-H[2])*I+w*te);let K=t.prevYaw+wy(t.yaw-t.prevYaw)*I;M+=wy(K-M)*Math.min(1,E*25),i.rotation.y=M;let Se=PR(t,ee);Se!==v&&(n.play(Se,{fade:.1}),v=Se);let Z=1;Se==="run"?Z=c0(ee/(Wi*C),.5,3):Se==="crawl"&&(Z=ee>.001?1:0),n.update(E*Z,Z===0?E:void 0),e.update(E);let ye=t.downed?"scared":t.state==="shoot"?"angry":"smug";ye!==S&&(e.face.setExpression(ye),S=ye),m.visible=t.downed,t.downed&&(m.position.set(0,.95/C+.05*Math.sin(x*4),0),m.scale.setScalar(.5/C)),D()}function D(){g.visible=!t.downed&&t.state!=="revive",i.updateMatrixWorld(!0),r.getWorldPosition(Ki);let I=Ki.x,E=Ki.y,N=Ki.z;if(i.worldToLocal(Ki),g.position.copy(Ki),t.state==="shoot"&&t.target&&t.target.pos){let R=Math.cos(i.rotation.y),C=Math.sin(i.rotation.y),U=t.target.pos[0]-I,H=t.target.pos[2]-N;Qo.set(U*R-H*C,t.target.pos[1]+1.2-E,U*C+H*R)}else Qo.set(0,-Math.sin(Ty),Math.cos(Ty));Qo.lengthSq()<1e-12&&Qo.set(0,0,1),Qo.normalize(),g.quaternion.setFromUnitVectors(NR,Qo)}return _(),{group:i,update:L,reset:_,rig:e,anim:n,pistol:g,plus:m,eye:l,pack:f,tip(I=[0,0,0]){return i.updateMatrixWorld(!0),Ki.set(l0[0],l0[1],l0[2]).applyMatrix4(g.matrixWorld),I[0]=Ki.x,I[1]=Ki.y,I[2]=Ki.z,I}}}function kR(t){return t==="open"?{ring:F.gel,pulse:!0,steam:!0}:t==="closed"?{ring:F.ink,pulse:!1,steam:!1}:{ring:F.lilac,pulse:!1,steam:!1}}var OR="#e6c28c",UR="#b98a50",FR=.3;function BR(t){let e=(i,s)=>{i.deleteAttribute("uv");let r=new Ke(s),o=i.getAttribute("position").count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;return i.setAttribute("color",new bt(a,3)),i},n=[e(new Wt(t,t,.08,32).translate(0,.04,0).toNonIndexed(),OR)];for(let i=-3;i<=3;i++){let s=i*(t/3.6),r=2*Math.sqrt(Math.max(t*t-s*s,.01))-.04;n.push(e(new mt(r,.006,.035).translate(0,.081,s).toNonIndexed(),UR))}return Ot(n,!1)}function Ry(t,e,n=null){let i=e.map(r=>{let o=X.pad.radius,a=new ft;a.name=`sauna-${r.id}`,a.position.set(r.pos[0],r.pos[1],r.pos[2]),a.add(new ot(BR(o),At({vertexColors:!0,rim:.1})));let l=new an({color:F.lilac,side:yn,toneMapped:!1}),c=new ot(new Os(o*.9,o*1.06,40).rotateX(-Math.PI/2),l);c.position.y=.09,a.add(c),t.add(a);let h=_s({text:"SPAWN SAUNA",w:2.4,h:.7,bg:F.glorpPurple,seed:9});return h.position.set(r.pos[0],3.05,r.pos[2]+1.3),h.rotation.y=Math.PI,t.add(h),{pad:r,group:a,ring:c,ringMat:l,sign:h,color:"",steamT:0}}),s=0;return{items:i,update(r){s+=r>0?r:0;for(let o of i){let a=kR(o.pad.state);if(a.ring!==o.color&&(o.color=a.ring,o.ringMat.color.set(a.ring)),o.ring.scale.setScalar(a.pulse?1+.07*Math.sin(s*6):1),a.steam&&n&&r>0){if(o.steamT+=r,o.steamT>=FR){o.steamT=0;let l=Math.random()*Math.PI*2,c=Math.random()*X.pad.radius*.8;n.steam([o.pad.pos[0]+Math.cos(l)*c,.1,o.pad.pos[2]+Math.sin(l)*c])}}else a.steam||(o.steamT=0)}},reset(){for(let r of i)r.steamT=0,r.color=""}}}var ea=Math.PI/180,Cy=.3,u0=1e-6,zR=64,HR=4,GR=64,Py=(t,e,n)=>Math.max(e,Math.min(n,t));function f0(t,e,n=X.grenade,i=[0,0,0]){let s=Py(e+n.throwLift*ea,-30*ea,70*ea),r=Math.cos(s);return i[0]=n.throwSpeed*Math.sin(t)*r,i[1]=n.throwSpeed*Math.sin(s),i[2]=n.throwSpeed*Math.cos(t)*r,i}function od(t,e,n=X.combat,i=[0,0,0]){if(t.cover)return ju(t,"blind",e,n,i);let s=Ku(e),r=Zu(e);i[1]=t.pos[1]+1.6;for(let o=1;o>=0&&(i[0]=t.pos[0]+(s[0]*.2+r[0]*.3)*o,i[2]=t.pos[2]+(s[2]*.2+r[2]*.3)*o,!(o===0||!Xo(t.boxes,i,0)));o-=.25);return i}var Gr=[0,0,0];function VR(t,e){let n=null,i=1/0;for(let a of t){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),d=Math.hypot(l,c,h);d<i&&(i=d,n=a)}if(Gr[0]=Gr[1]=Gr[2]=0,!n)return Gr[1]=1,Gr;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=n.min[a]-e[a],c=e[a]-n.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return Gr[s]=o,Gr}var d0={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},Ji=[0,0,0];function Iy(t,e,n,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=t.pos,l=t.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=Py(Math.ceil(c/r),1,zR),d=e/h;for(let u=0;u<h;u++){let f=d;for(let p=0;p<=HR&&f>0;p++){Ji[0]=a[0]+l[0]*f,Ji[1]=a[1]+l[1]*f-.5*o*f*f,Ji[2]=a[2]+l[2]*f;let g=hi(n,a,Ji,r);if(g>=1){a[0]=Ji[0],a[1]=Ji[1],a[2]=Ji[2],l[1]-=o*f;break}a[0]+=(Ji[0]-a[0])*g,a[1]+=(Ji[1]-a[1])*g,a[2]+=(Ji[2]-a[2])*g,l[1]-=o*f*g;let m=VR(n,a),v=l[0]*m[0]+l[1]*m[1]+l[2]*m[2];if(v<0){let y=l[0]-m[0]*v,M=l[1]-m[1]*v,b=l[2]-m[2]*v;l[0]=y*i.friction-m[0]*v*i.restitution,l[1]=M*i.friction-m[1]*v*i.restitution,l[2]=b*i.friction-m[2]*v*i.restitution,-v>=Cy&&(s.clank=!0),m[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-m[0]*r,s.upPos[1]=a[1]-m[1]*r,s.upPos[2]=a[2]-m[2]*r)}if(a[0]+=m[0]*u0,a[1]+=m[1]*u0,a[2]+=m[2]*u0,m[1]>.7&&Math.hypot(l[0],l[1],l[2])<Cy){l[0]=l[1]=l[2]=0,t.resting=!0,s.rested=!0;return}f*=1-g}}}function WR(t,e,n,i=X.grenade){return Iy(t,e,n,i,d0),d0.clank?"clank":d0.rested?"rest":null}var XR={pos:[0,0,0],vel:[0,0,0],prevPos:[0,0,0],resting:!1,fuse:0},Vl={clank:!1,rested:!1,up:!1,upPos:[0,0,0]};function Ly(t,e,n,i=X.grenade,s){let r=XR;for(let h=0;h<3;h++)r.pos[h]=t[h],r.vel[h]=e[h],r.prevPos[h]=t[h];r.resting=!1;let o=Math.min(s.length,GR),a=Math.floor(Math.max(0,i.arcTime)*30+1e-9),l=0,c=null;for(let h=0;h<=a&&l<o;h++){let d=s[l++];if(d[0]=r.pos[0],d[1]=r.pos[1],d[2]=r.pos[2],h===a||r.resting)break;for(let u=0;u<2;u++)Iy(r,1/60,n,i,Vl),!c&&Vl.up&&(c=[Vl.upPos[0],Vl.upPos[1],Vl.upPos[2]])}return{count:l,land:c}}function Dy(t,e=X.grenade){return t>=0?t<=e.killRadius?e.killDamage:t>=e.radius?0:e.damage*(1-t/e.radius):0}function Ny(t,e,n,i=X.grenade){let s=e[0]-t[0],r=e[2]-t[2],o=e[1]-t[1],a=s*Math.sin(n)+r*Math.cos(n),l=Math.abs(s*Math.cos(n)-r*Math.sin(n));if(!(a>.01)||l>.3)return null;let c=i.throwSpeed,h=i.gravity,d=v=>{let y=Math.cos(v);return a*Math.tan(v)-h*a*a/(2*c*c*y*y)},u=-30*ea,f=Math.min(70*ea,Math.atan(c*c/(h*a)));if(!(f>u)||d(u)>o||d(f)<o)return null;let p=u,g=f;for(let v=0;v<50;v++){let y=(p+g)/2;d(y)<o?p=y:g=y}let m=(p+g)/2;return Math.abs(d(m)-o)<=.3?m-i.throwLift*ea:null}function ky(t=X.grenade){let e=[];return{live:e,throw(n,i,s=t.fuse,r=null){let o={pos:[n[0],n[1],n[2]],vel:[i[0],i[1],i[2]],prevPos:[n[0],n[1],n[2]],resting:!1,fuse:s,hostile:r};return e.push(o),o},step(n,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=n;let a=WR(o,n,i,t);a==="clank"&&!o.hostile&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.hostile&&(a!==null||o.pos[1]<=t.ballRadius+.02)&&(o.fuse=0),o.fuse<=1e-9&&(s.push(o.hostile?{type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]],hostile:o.hostile}:{type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}function Oy(t=X.grenade){let e={count:Math.min(t.start,t.carry),take(){return e.count<=0?!1:(e.count--,!0)},refill(){e.count=t.carry},reset(){e.count=Math.min(t.start,t.carry)}};return e}var Uy=1.49,Fy=.2;function By(t,{spacing:e,cornerZone:n}){e=Math.max(Fy,Number.isFinite(e)?e:Fy);let i={cornerZone:n},s=[],r=(o,a,l)=>{let c=Ri(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return t.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,ir(o,c,i))}r(o,o.length,ir(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function Vr(t,e,n=[0,0]){let i=t.kind==="low"?0:t.end*e;return n[0]=t.pos[0]+t.tangent[0]*i,n[1]=t.pos[1]+t.tangent[1]*i,n}function jt(t,e,n){let i=n[0]-e[0],s=n[1]-e[1],r=n[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:Rn(e,[i/o,s/o,r/o],o,t,[]).t>=o-1e-6}function ad(t,e,n,i=X){let s=[t.pos[0],t.kind==="low"?i.combat.crouchHead:Uy,t.pos[1]],r=Vr(t,i.associate.popShift),o=[r[0],Uy,r[1]];return{protected:!jt(n,s,e),canShoot:jt(n,o,e)}}var YR=Math.PI/180,qR=1.5,ld=[0,0,0],cd=[0,0,0],$R={bash:t=>[t.melee.bashRange,t.melee.bashAngle],cutter:t=>[t.melee.cutterReach,t.melee.cutterAngle],finish:t=>[t.melee.executeRange,t.melee.executeAngle]};function Wl(t,e,n,i,s,r=X){let[o,a]=$R[t](r),l=a*YR/2,c=null,h=1/0;for(let d of i){if(!d.alive||d.state==="unused"||d.state==="executed")continue;let u=d.state==="downed";if(t==="finish"&&!u)continue;let f=d.pos[0]-e[0],p=d.pos[2]-e[2],g=Math.hypot(f,p);g>o||g>=h||g>1e-6&&Math.abs(ti(Math.atan2(f,p)-n))>l+1e-9||(ld[0]=e[0],ld[1]=e[1]+1,ld[2]=e[2],cd[0]=d.pos[0],cd[1]=d.pos[1]+(u?.3:1),cd[2]=d.pos[2],jt(s,ld,cd)&&(c=d,h=g))}return c}function zy({downed:t,clear:e,tobble:n,pos:i,yaw:s,enemies:r,boxes:o,t:a=X}){if(t)return{kind:"giveUp",hold:!0,target:null};if(e)return{kind:"again",hold:!1,target:null};if(n&&n.downed){let c=a.tobble?.playerReviveRange??qR;if(Math.hypot(n.pos[0]-i[0],n.pos[2]-i[2])<=c)return{kind:"reviveTobble",hold:!0,target:n}}let l=Wl("finish",i,s,r,o,a);return l?{kind:"finish",hold:!1,target:l}:{kind:null,hold:!1,target:null}}var Hy=Object.freeze({kbm:Object.freeze({melee:"F",interact:"E",grenade:"G"}),pad:Object.freeze({melee:"B",interact:"X",grenade:"LB"})}),Gy={throw:t=>`Release ${t.grenade}  throw`,reviveTobble:t=>`Hold ${t.interact}  revive Tobble`,finish:t=>`${t.interact}  finish`,revving:()=>"Cheat Day: run into a Rep",bash:t=>`${t.melee}  bash`,rev:t=>`Hold ${t.melee}  rev Cheat Day`,giveUp:t=>`Hold ${t.interact}  renew your membership`,giveUpTobble:t=>`Tobble is coming! Hold ${t.interact} to renew your membership`,sauna:t=>`Close the Spawn Sauna (${t.grenade} kettlebell)`,cancel:t=>`Hold ${t.interact}  CANCEL`};function Wr(t,e="kbm"){let n=Object.hasOwn(Gy,t)?Gy[t]:null;return n?n(Hy[e]||Hy.kbm):""}var g0=t=>t<0?0:t>1?1:t,p0=new Set(["move","sprint"]),m0=new Set(["move","sprint","cover"]);function ZR({device:t="kbm",grenadeHeld:e=!1,interact:n=null,reviving:i=!1,revving:s=!1,bashTarget:r=!1,cutterNear:o=!1,regretInHand:a=!1,holdFrac:l=0}={}){let c=(h,d=null)=>({text:Wr(h,t),hold:d});return e?c("throw"):i||n&&n.kind==="reviveTobble"?c("reviveTobble",i?g0(l):0):n&&n.kind==="finish"?c("finish"):s?c("revving"):r?c("bash"):a&&o?c("rev"):null}function Vy({mover:t,fight:e,arsenal:n,bag:i,cam:s,sfx:r,effects:o,views:a=[],health:l,playerView:c=null,grenadeView:h=null,boxes:d,hooks:u={}}){let f=Nu(),p=Array.from({length:64},()=>[0,0,0]),g=[0,0,0],m=[0,0,0],v=[0,0,0],y=[0,1,0],M=0,b=0,w="kbm",S=!1,x=0,_=0,L=!1,D=0,I=!1,E=null,N={count:0,land:null,show:!1},R=null,C=0,U=()=>{u.restart&&u.restart()},H=fe=>{u.marker&&u.marker(fe)},ee=(fe,ge=1)=>(v[0]=fe.pos[0],v[1]=fe.pos[1]+ge,v[2]=fe.pos[2],v),q=fe=>{let ge=fe.pos[0]-t.pos[0],Ce=fe.pos[2]-t.pos[2],re=Math.hypot(ge,Ce)||1;return y[0]=ge/re,y[1]=.5,y[2]=Ce/re,y};function te(){E&&E.e.state==="executed"&&e.releaseExecution(E.e),E=null}function Y(fe,ge,Ce){return e.beginExecution(fe)?t.execute([fe.pos[0],fe.pos[2]],ge)?(E={e:fe,kind:Ce,gelT:0,sfxT:0},!0):(e.releaseExecution(fe),!1):!1}function K(fe){let ge=X.feedback;if(fe.type==="bashHit"){let Ce=Wl("bash",t.pos,M,e.enemies,d);if(s.bump(),r.play("bash",ge.bashVolume),!Ce)return;let re=e.bash(Ce);o.gel(ee(Ce),q(Ce),ge.gelCount),re==="hit"&&H("body")}else if(fe.type==="executeDone"){let Ce=E;if(E=null,!Ce)return;s.bump(1.5),e.finishExecution(Ce.e),Ce.kind==="stomp"&&r.play("finish",ge.bashVolume)}else fe.type==="reviveDone"&&e.reviveTobble()&&r.play("revive",ge.reviveVolume)}function Se(){if(!(D>0)){if(!i.take()){r.play("dry",X.feedback.reloadVolume);return}od(t,M,X.combat,g),f0(M,b,X.grenade,m),e.throwGrenade(g,m),c&&c.throwNow(),r.play("throw",X.feedback.throwVolume),s.kick(1.5,0),D=X.grenade.throwTime}}function Z(){h&&h.arc(p,N.count,N.land,N.show)}function ye(){let fe=X.melee.promptRange;for(let ge of e.enemies){if(!ge.alive||ge.state==="unused"||ge.state==="downed"||ge.state==="executed")continue;let Ce=ge.pos[0]-t.pos[0],re=ge.pos[2]-t.pos[2],ie=Math.hypot(Ce,re);if(!(ie>fe)&&(ie<.5||Math.cos(Math.atan2(Ce,re)-M)>=.5))return!0}return!1}function Ae(){f.reset(),S=!1,x=0,_=0,L=!1,D=0,I=!1,E=null,N={count:0,land:null,show:!1},R=null,C=0,Z()}function He(fe,ge){M=ge.camYaw,b=ge.camPitch||0,w=ge.device||"kbm";let Ce=t,re=X.melee,ie=X.grenade;if(D>0&&(D=Math.max(0,D-fe)),N.show=!1,R=null,C=0,l.downed){E&&te(),f.reset(),S=!1,I=!1,x=0,ge.interactHeld||(L=!0),_=ge.interactHeld&&L?_+fe:0,C=g0(_/Math.max(X.health.giveUpHold,.001)),Z(),_>=X.health.giveUpHold-1e-9&&(_=0,U());return}_=0,L=!1,E&&(Ce.state!=="execute"||E.e.state!=="executed")&&te();let Te=f.update(ge.meleeHeld,ge.meleePressed,fe,re.holdTime),Ie=f.holding();ge.meleeHeld||(S=!1);let _e=n.current()==="regret"&&n.reload===null&&!(n.switching>0);if(Te&&Ce.bash(M),Ce.state==="rev"&&(!Ie||S||!_e||ge.grenadeHeld)?Ce.rev(!1):Ie&&!S&&_e&&!ge.grenadeHeld&&D<=0&&p0.has(Ce.state)&&Ce.rev(!0),Ce.state==="rev"){x-=fe,x<=0&&(x=Math.max(re.revPulse,.05),r.play("rev",X.feedback.revVolume));let W=Wl("cutter",Ce.pos,Ce.facing,e.enemies,d);W&&Y(W,re.cutTime,"cut")&&r.play("cut",X.feedback.cutVolume)}else x=0;if(E&&Ce.state==="execute"){let W=X.feedback;if(E.gelT-=fe,E.sfxT-=fe,E.kind==="cut"){if(E.gelT<=0){E.gelT=Math.max(W.cutGelEvery,.02),o.gel(ee(E.e),q(E.e),5);let Le=X.camera.bump.amount;Le>0&&s.bump(W.executeShake/Le)}E.sfxT<=0&&(E.sfxT=.3,r.play("cut",W.cutVolume))}}let oe=e.tobble,Oe=zy({downed:!1,clear:e.clear&&!e.boss,tobble:oe,pos:Ce.pos,yaw:Ce.facing,enemies:e.enemies,boxes:d});if(Oe.kind==="again"&&ge.interactPressed){U();return}Oe.kind==="finish"&&ge.interactPressed&&m0.has(Ce.state)&&Y(Oe.target,re.finishTime,"stomp")&&s.bump(.6),Oe.kind==="reviveTobble"&&ge.interactHeld&&m0.has(Ce.state)&&Ce.reviveTobble(oe.pos);let ze=Ce.state==="reviveTobble";ze&&(C=g0(Ce.stateTime/Math.max(Zp(),.001)));let $e=I;if(I=!!ge.grenadeHeld&&Ce.grenadeAim,$e&&!ge.grenadeHeld&&Se(),I&&i.count>0){od(Ce,M,X.combat,g),f0(M,b,ie,m);let W=Ly(g,m,d,ie,p);N={count:W.count,land:W.land,show:!0}}Z();let et=m0.has(Ce.state),nt=p0.has(Ce.state)&&D<=0;R=ZR({device:w,grenadeHeld:I&&i.count>0,interact:et?Oe:null,reviving:ze,revving:Ce.state==="rev",bashTarget:p0.has(Ce.state)&&Ce.bashReadyAt<=Ce.clock&&!!Wl("bash",Ce.pos,M,e.enemies,d),cutterNear:nt&&ye(),regretInHand:_e,holdFrac:C})}function se(){t.state==="rev"&&(t.rev(!1),S=!0)}function Ne(fe,ge){let Ce=null;for(let re=0;re<3;re++){od(t,M,X.combat,g);let ie=Math.atan2(fe-g[0],ge-g[2]);if(M=ie,Ce=Ny(g,[fe,X.grenade.ballRadius,ge],ie),Ce===null)return!1}return s.yaw=M,s.pitch=Ce,!0}return{step:He,reset:Ae,onAction:K,onPlayerHit:se,aimThrow:Ne,prompt:()=>R,arc:()=>({count:N.count,land:N.land,show:N.show}),busy:()=>D>0,armed:()=>I&&i.count>0,giveUpFrac:()=>l.downed?C:null,execution:()=>E?{id:E.e.id,kind:E.kind}:null}}function Wy(t=X.health){let e=-1,n=0,i=0,s=!1,r={hp:t.max,downed:!1,downT:0,sinceHit:0,fraction(){return t.max>0?Math.max(0,Math.min(1,r.hp/t.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,n=0,t.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=t.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,t.reviveHealth*t.max),r.sinceHit=0,e=-1,n=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&t.standInRevive>0&&(i+=o,i>=t.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<t.max&&r.sinceHit>=t.regenDelay&&(e<0&&(e=r.hp,n=0),n+=Math.min(o,r.sinceHit-t.regenDelay),r.hp=t.regenTime>0&&n<t.regenTime?e+(t.max-e)*n/t.regenTime:t.max),r.hp>=t.max&&(r.hp=t.max,e=-1),null)},reset(){r.hp=t.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,n=0,i=0,s=!1}};return r}var KR=new Set(["cover","coverSlide","coverSwap"]),JR=[],jR=x0(),QR=x0(),hd=[null];function x0(){return{alive:!0,shapes:{head:{c:[0,0,0],r:dt.head.r},body:{a:[0,0,0],b:[0,0,0],r:dt.body.r}}}}function Xy(t){return KR.has(t.state)?Ss(t):null}function v0(t,e,n,i,s){let r=t.shapes;return r.head.r=dt.head.r,r.body.r=dt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+n,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],t}function ud(t,e=x0(),n=X.combat){let i=Xy(t),s=!!i&&i.kind==="low"&&!(t.cover&&t.cover.pop>=.5);return e.alive=!0,s?v0(e,t.pos,n.crouchHead,.1,n.crouchBodyTop):v0(e,t.pos,dt.head.cy,dt.body.ay,dt.body.by)}function Yy(t,e,n,i,s,r=X.combat){let o=Xy(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return Rn(t,e,n,i,JR);if(!a)return hd[0]=ud(s,jR,r),Rn(t,e,n,i,hd);let l=dt.body.by;return hd[0]=v0(QR,s.pos,dt.head.cy,l-r.shoulderDrop,l),Rn(t,e,n,i,hd)}var qy=.9;function Xr(t,e,n,i){return hi(t,[e[0],qy,e[1]],[n[0],qy,n[1]],i)===1}var Xl=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function $y(t,e,{radius:n,linkMax:i}){let s=t.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)Xl(s[o],s[a])<=i&&Xr(e,s[o],s[a],n)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function eC(t,e,n,i,s){let{nodes:r,links:o}=t,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let m of n)h[m]=!0;let d=[];for(let m of e)a[m]=Xl(i,r[m]),d.push(m);let u=m=>a[m]+Xl(r[m],s),f=-1,p=1/0;for(;d.length;){let m=0;for(let y=1;y<d.length;y++){let M=d[y],b=d[m],w=u(M),S=u(b);(w<S-1e-12||Math.abs(w-S)<=1e-12&&M<b)&&(m=y)}let v=d.splice(m,1)[0];if(!c[v]){if(u(v)>=p)break;if(c[v]=!0,h[v]){let y=a[v]+Xl(r[v],s);(y<p-1e-12||Math.abs(y-p)<=1e-12&&v<f)&&(f=v,p=y)}for(let y of o[v]){if(c[y])continue;let M=a[v]+Xl(r[v],r[y]);M<a[y]-1e-12&&(a[y]=M,l[y]=v,d.push(y))}}}if(f<0)return null;let g=[];for(let m=f;m>=0;m=l[m])g.push(m);return g.reverse()}function Yr(t,e,n,i,s){if(Xr(e,n,i,s))return[[i[0],i[1]]];let{nodes:r}=t,o=[],a=[];if(r.forEach((u,f)=>{Xr(e,n,u,s)&&o.push(f),Xr(e,u,i,s)&&a.push(f)}),!o.length||!a.length)return null;let l=eC(t,o,a,n,i);if(!l)return null;let c=[...l.map(u=>r[u]),i],h=[],d=n;for(let u=0;u<c.length;u++){let f=c[u+1];f&&Xr(e,d,f,s)||(h.push([c[u][0],c[u][1]]),d=c[u])}return h}var _0=new Set(["executed","unused","dead"]),Zy=1.3,ar=1e-9,Ky=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]),gd=(t=X)=>t.associate.radius*t.trainer.scaleW,Jy=(t=X)=>t.associate.height*t.trainer.scaleH;function Ci(t,e){t.state=e,t.stateT=0}function b0(t,e=X){return t.kind="trainer",t.health=e.trainer.health,t.strikeAt=-1,t.windupLen=0,t.struckAt=-1/0,t.retargetT=0,t.repathT=0,t.forcePathT=0,t.stuckCount=0,t.target="player",t.path=[],t.pathI=0,t.point=null,t.pop=0,t.blind=0,t.role="hold",t}function jy(t,e=X.combat,n=X){let[i,s,r]=t.pos,o=t.shapes,a=n.trainer.scaleW,l=n.trainer.scaleH;return o.head.r=dt.head.r*a+e.hitPad,o.body.r=dt.body.r*a+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+dt.head.cy*l,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+dt.body.ay*l,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+dt.body.by*l,o.body.b[2]=r,o}var M0=t=>t.tobble&&!t.tobble.downed?t.tobble:null,Qy=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,tC=(t,e)=>t.target==="tobble"?!M0(e):e.player.downed;function e1(t,e,n){let i=e.player,s=M0(e);return i.downed?s?"tobble":null:s&&Ky(t.pos,s.pos)<Ky(t.pos,i.pos)*n.preferDoc?"tobble":"player"}function t1(t,e,n){e.events.push({type:"bark",id:t.id,key:n})}function Yl(t,e,n,i){let s=e1(t,e,n);if(!s){Ci(t,"idle");return}t.target=s,t.retargetT=n.retargetTime,t.repathT=0,t.path=[],t.pathI=0,Ci(t,"run"),i&&e.rand()<n.barkChance&&t1(t,e,"trainerCharge")}function nC(t,e,n,i){i[0]=i[1]=0;let s=n.avoidRadius;if(!(s>0))return i;let r=(a,l,c)=>{let h=t.pos[0]-a,d=t.pos[2]-l,u=Math.hypot(h,d);if(u>=s||u<1e-6)return;let f=(s-u)/s*c/u;i[0]+=h*f,i[1]+=d*f};for(let a of e.others||[])a!==t&&a.alive&&a.state!=="unused"&&a.state!=="executed"&&a.state!=="dead"&&r(a.pos[0],a.pos[2],1);t.target!=="player"&&!e.player.downed&&r(e.player.pos[0],e.player.pos[2],1);let o=M0(e);return o&&t.target!=="tobble"&&r(o.pos[0],o.pos[2],1),i}var y0=[0,0],dd=[0,0],fd=[0,0],pd=[0,0,0],md=[0,0,0];function iC(t,e,n,i){return Math.hypot(i[0]-t.pos[0],i[2]-t.pos[2])>n.swingRange?!1:(pd[0]=t.pos[0],pd[1]=t.pos[1]+Zy,pd[2]=t.pos[2],md[0]=i[0],md[1]=t.pos[1]+Zy,md[2]=i[2],jt(e.boxes,pd,md))}function sC(t,e,n){let i=e.now+n.windup,s=(e.others||[]).filter(r=>r!==t&&r.kind==="trainer"&&r.alive);for(let r=0;r<=s.length;r++){let o=!1;for(let a of s)for(let l of[a.struckAt,a.state==="windup"?a.strikeAt:-1/0])Number.isFinite(l)&&Math.abs(i-l)<n.swingGap-ar&&(i=l+n.swingGap,o=!0);if(!o)break}t.strikeAt=i,t.windupLen=Math.max(n.windup,i-e.now),Ci(t,"windup"),e.events.push({type:"telegraph",id:t.id,kind:"trainer",time:t.windupLen}),t1(t,e,"trainerWindup")}function rC(t,e,n,i,s){if(t.retargetT-=i,t.repathT-=i,t.forcePathT-=i,t.retargetT<=0||tC(t,e)){let m=e1(t,e,n);if(!m){Ci(t,"idle");return}t.target=m,t.retargetT=n.retargetTime}let r=Qy(t,e);if(iC(t,e,n,r)){sC(t,e,n);return}let o=gd(s),a=Jy(s);dd[0]=t.pos[0],dd[1]=t.pos[2],fd[0]=r[0],fd[1]=r[2];let l=r[0],c=r[2];if(t.forcePathT>0||!Xr(e.boxes,dd,fd,o*.9)){for((t.repathT<=0||!t.path.length)&&(t.path=Yr(e.graph,e.boxes,dd,fd,o)||[[r[0],r[2]]],t.pathI=0,t.repathT=n.repathTime);t.pathI<t.path.length-1&&Math.hypot(t.path[t.pathI][0]-t.pos[0],t.path[t.pathI][1]-t.pos[2])<.35;)t.pathI++;l=t.path[t.pathI][0],c=t.path[t.pathI][1]}else t.path.length=0;let h=l-t.pos[0],d=c-t.pos[2],u=Math.hypot(h,d)||1;h/=u,d/=u,nC(t,e,n,y0),h+=y0[0]*n.avoidWeight,d+=y0[1]*n.avoidWeight;let f=Math.hypot(h,d)||1;h/=f,d/=f,t.yaw=Bt(t.yaw,Math.atan2(h,d),n.turnRate*i);let p=n.runSpeed*i,g=En(e.boxes,t.pos,[h*p,0,d*p],o,a);t.pos[0]=g.pos[0],t.pos[2]=g.pos[2],t.stuckT+=i,t.stuckT>=n.stuckTime&&(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<n.runSpeed*n.stuckTime*.25&&(t.forcePathT=1,t.repathT=0,t.stuckCount++),t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2])}function oC(t,e,n,i){let s=Qy(t,e);if(t.stateT<t.windupLen-n.lockTime){let r=s[0]-t.pos[0],o=s[2]-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Bt(t.yaw,Math.atan2(r,o),n.turnRate*i))}if(!(t.stateT<t.windupLen-ar)){for(let r of e.others||[])if(r!==t&&r.kind==="trainer"&&e.now-r.struckAt<n.swingGap-ar)return;t.struckAt=e.now,t.strikeAt=-1,Ci(t,"swing"),e.events.push({type:"trainerSwing",id:t.id,from:[t.pos[0],t.pos[1],t.pos[2]],yaw:t.yaw,reach:n.swingRange+n.swingSlack,arc:n.swingArc,target:t.target})}}function aC(t,e,n,i,s){let r=i.associate,o=Math.max(r.diveTime,.001),a=Math.max(t.stateT-s,r.diveReaction),l=Math.min(t.stateT,r.diveReaction+o);if(l>a){let c=r.diveDistance*(l-a)/o,h=En(e.boxes,t.pos,[t.diveDir[0]*c,0,t.diveDir[1]*c],gd(i),Jy(i));t.pos[0]=h.pos[0],t.pos[2]=h.pos[2]}t.stateT>=r.diveReaction+o-ar&&Yl(t,e,n,!1)}function n1(t,e,n){let i=e.tuning||X,s=i.trainer;switch(t.state){case"idle":e.started&&Yl(t,e,s,!0);break;case"spawn":t.stateT>=i.pad.riseTime-ar&&Yl(t,e,s,!0);break;case"run":rC(t,e,s,n,i);break;case"windup":oC(t,e,s,n);break;case"swing":t.stateT>=s.swingTime-ar&&Ci(t,"recover");break;case"recover":t.stateT>=s.recover-ar&&Yl(t,e,s,!1);break;case"stagger":t.stateT>=s.staggerTime-ar&&Yl(t,e,s,!1);break;case"dive":aC(t,e,s,i,n);break;default:break}}function i1(t){return!t.alive||_0.has(t.state)?!1:(t.strikeAt=-1,Ci(t,"stagger"),!0)}function s1(t,e){if(!t.alive||_0.has(t.state)||t.state==="dive")return!1;t.strikeAt=-1,t.path=[],t.pathI=0;let n=t.pos[0]-e[0],i=t.pos[2]-e[2],s=Math.hypot(n,i);return s<1e-6?(n=Math.sin(t.yaw),i=Math.cos(t.yaw)):(n/=s,i/=s),t.diveDir[0]=n,t.diveDir[1]=i,t.yaw=Math.atan2(n,i),Ci(t,"dive"),!0}function r1(t){return!t.alive||_0.has(t.state)||t.state==="dive"?!1:(t.strikeAt=-1,t.wasDowned=!1,Ci(t,"executed"),!0)}function o1(t){return!t.alive||t.state!=="executed"?!1:(Ci(t,"recover"),!0)}function a1(t,e,n){return t.alive=!1,t.strikeAt=-1,t.pop=0,t.blind=0,Ci(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),e.events.push({type:"bark",id:t.id,key:"trainerDeath"}),"kill"}function l1(t,e,n="execute"){return!t.alive||t.state!=="executed"?null:(t.health=0,a1(t,e,n))}function c1(t,e,n,i="body"){return!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:(t.health-=e,t.health<=0?(t.health=0,a1(t,n,i)):"hit")}var $r=1e-9,u1=8,lC=t=>Math.max(0,Math.min(1,t));var d1=(t=X)=>t.associate.radius*t.boss.scale;function ji(t,e){t.state=e,t.stateT=0}var qr=(t,e,n,i=!0)=>e.events.push(i?{type:"bark",id:t.id,key:n,force:!0}:{type:"bark",id:t.id,key:n}),f1=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function p1(t,e=X){return t.kind="boss",t.health=e.boss.health,t.phase=1,t.invuln=!1,t.spot=0,t.nextSpot=0,t.shiftPending=!1,t.shiftT=1,t.shiftFrom=[t.start[0],t.start[2]],t.sinceLob=0,t.offers=0,t.saunasOpen=!1,t.lobTo=[0,0,0],t.lobSent=!1,t.wait=0,t.pop=0,t.blind=0,t.role="hold",t.point=null,t.path=[],t.pathI=0,t.target="player",t.shots=0,t.bursts=0,t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t}function m1(t,e=X.combat,n=X){let[i,s,r]=t.pos,o=t.shapes,a=n.boss,l=a.scale,c=a.scale*(a.crouchY+(1-a.crouchY)*lC(t.pop));return o.head.r=dt.head.r*l+e.hitPad,o.body.r=dt.body.r*l+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+dt.head.cy*c,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+dt.body.ay*c,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+dt.body.by*c,o.body.b[2]=r,o}function g1(t,e,n){let i=e.bossLevel.spots[t.spot];t.pos[0]=i.hide[0]+(i.pop[0]-i.hide[0])*n,t.pos[2]=i.hide[1]+(i.pop[1]-i.hide[1])*n}function $l(t,e,n,i){let s=e-t.pos[0],r=n-t.pos[2];Math.hypot(s,r)>1e-6&&(t.yaw=Bt(t.yaw,Math.atan2(s,r),u1*i))}var w0=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,v1=(t,e)=>t.target==="tobble"?!f1(e):e.player.downed,ql=[0,0,0];function cC(t,e,n){let i=f1(e),s=e.player,r=e.bossLevel.spots[t.shiftPending?t.nextSpot:t.spot];return ql[0]=r.pop[0],ql[1]=1.49*n.scale,ql[2]=r.pop[1],!s.downed&&jt(e.boxes,ql,s.chest)?"player":i&&jt(e.boxes,ql,i.chest)?"tobble":s.downed?null:"player"}function S0(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var ta=t=>t.phase===3,x1=(t,e)=>e.popTime+(ta(t)?e.fastTelegraph:e.telegraphTime),h1=(t,e)=>ta(t)?e.fastBurstTime:e.burstTime,hC=(t,e)=>ta(t)?e.fastRate:e.rate,uC=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function T0(t,e,n){ji(t,"tucked");let i=ta(t)?n.fastWaitMin:n.coverWaitMin,s=ta(t)?n.fastWaitMax:n.coverWaitMax;t.wait=i+Math.max(0,s-i)*e.rand()}function dC(t,e,n,i){if(t.pop>0?(t.pop=Math.max(0,t.pop-i/Math.max(n.popTime,.001)),g1(t,e,t.pop)):t.shiftPending&&(t.shiftFrom[0]=t.pos[0],t.shiftFrom[1]=t.pos[2],t.spot=t.nextSpot,t.shiftPending=!1,t.shiftT=0),t.pop<=0&&t.shiftT<1){t.shiftT=Math.min(1,t.shiftT+i/Math.max(n.shiftTime,.001));let r=e.bossLevel.spots[t.spot].hide;t.pos[0]=t.shiftFrom[0]+(r[0]-t.shiftFrom[0])*t.shiftT,t.pos[2]=t.shiftFrom[1]+(r[1]-t.shiftFrom[1])*t.shiftT}if($l(t,e.player.pos[0],e.player.pos[2],i),t.stateT<t.wait||t.pop>0||t.shiftT<1)return;let s=cC(t,e,n);if(s)if(t.target=s,t.shots=0,t.phase===1&&t.sinceLob>=n.lobEvery){let r=w0(t,e);t.lobTo[0]=r[0],t.lobTo[1]=0,t.lobTo[2]=r[2],t.lobSent=!1,ji(t,"lobWindup"),e.events.push({type:"telegraph",id:t.id,kind:"lob",time:n.popTime+n.lobWindup})}else ji(t,"telegraph"),S0(t,e,n,i,!0),e.events.push({type:"telegraph",id:t.id,kind:"boss",time:x1(t,n)})}function vd(t,e,n,i){i&&(t.bursts++,t.sinceLob++,fC(t,e,n)),t.nextSpot=1-t.spot,t.shiftPending=!0,T0(t,e,n)}function fC(t,e,n){!ta(t)||t.offers>=3||(t.offers++,qr(t,e,"bossOffer"),t.offers===3&&(qr(t,e,"bossOfferTobble"),qr(t,e,"bossOfferDoc")))}function xd(t,e,n,i){t.pop=Math.min(1,t.pop+i/Math.max(n.popTime,.001)),g1(t,e,t.pop)}function pC(t,e,n,i){xd(t,e,n,i);let s=w0(t,e);if($l(t,s[0],s[2],i),S0(t,e,n,i,!1),v1(t,e)){vd(t,e,n,!1);return}t.stateT>=x1(t,n)-$r&&(ji(t,"burst"),t.shots=0)}function mC(t,e,n,i,s){xd(t,e,n,i);let r=w0(t,e);if($l(t,r[0],r[2],i),S0(t,e,n,i,!1),v1(t,e)){vd(t,e,n,!0);return}let o=t.muzzle,a=e.player;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp*n.scale,o[2]=t.pos[2];let l=uC(t.stateT,hC(t,n),h1(t,n)),c=t.target==="tobble"?0:Math.min(1,a.speed/s.move.sprint);for(;t.shots<l;){t.shots++;let h=t.aim[0]-o[0],d=t.aim[1]-o[1],u=t.aim[2]-o[2],f=Math.hypot(h,d,u)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[h/f,d/f,u/f],accurate:!0,target:t.target,spread:n.spread+s.associate.moveSpread*c,damage:n.damage})}t.stateT>=h1(t,n)-$r&&vd(t,e,n,!0)}function gC(t,e,n,i){if(xd(t,e,n,i),$l(t,t.lobTo[0],t.lobTo[2],i),t.stateT<n.popTime+n.lobWindup-$r)return;let s=t.muzzle;s[0]=t.pos[0],s[1]=t.pos[1]+n.muzzleUp*n.scale,s[2]=t.pos[2],t.lobSent=!0,e.events.push({type:"bossLob",id:t.id,from:[s[0],s[1],s[2]],to:[t.lobTo[0],0,t.lobTo[2]],flight:n.lobFlight,target:t.target}),t.sinceLob=0,ji(t,"lobRecover")}function vC(t,e,n,i){xd(t,e,n,i),t.stateT>=n.lobRecover-$r&&vd(t,e,n,!1)}function y1(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2],a=Math.hypot(r,o),l=i*s;return a<=l+$r?(t.pos[0]=e,t.pos[2]=n,!0):(t.pos[0]+=r/a*l,t.pos[2]+=o/a*l,t.yaw=Bt(t.yaw,Math.atan2(r,o),u1*s),!1)}function xC(t,e,n,i){t.pop=Math.max(0,t.pop-i/Math.max(n.popTime,.001));let s=e.bossLevel.deskHide;y1(t,s[0],s[1],n.retreatSpeed,i)&&t.pop<=0&&(ji(t,"hiding"),t.saunasOpen=!0,e.events.push({type:"bossSaunas",id:t.id}))}function yC(t,e,n,i){$l(t,e.player.pos[0],e.player.pos[2],i),!(t.stateT<n.minHide-$r||!(e.saunasDone&&e.saunasDone()))&&(t.phase=3,t.invuln=!1,t.spot=e.player.pos[0]<0?0:1,t.shiftFrom[0]=t.pos[0],t.shiftFrom[1]=t.pos[2],t.shiftT=0,t.shiftPending=!1,ji(t,"return"),e.events.push({type:"bossPhase",id:t.id,phase:3}),qr(t,e,"bossReturn"))}function _C(t,e,n,i){let s=e.bossLevel.spots[t.spot].hide;y1(t,s[0],s[1],n.returnSpeed,i)&&(t.shiftT=1,T0(t,e,n))}function _1(t,e,n){let i=e.tuning||X,s=i.boss;switch(t.state){case"idle":e.started&&(qr(t,e,"bossIntro"),T0(t,e,s));break;case"tucked":dC(t,e,s,n);break;case"telegraph":pC(t,e,s,n);break;case"burst":mC(t,e,s,n,i);break;case"lobWindup":gC(t,e,s,n);break;case"lobRecover":vC(t,e,s,n);break;case"retreat":xC(t,e,s,n);break;case"hiding":yC(t,e,s,n);break;case"return":_C(t,e,s,n);break;default:break}}function bC(t,e,n){return t.alive=!1,t.pop=0,t.invuln=!1,ji(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n,boss:!0}),qr(t,e,"bossDeath"),"kill"}function b1(t,e,n,i="body"){if(!t.alive||!(e>0)||t.state==="unused")return null;if(t.invuln)return"immune";let s=n.tuning||X,r=s.boss;if(t.health-=i==="head"?e*r.headMult:e,t.phase===1){let o=r.phase2At*r.health;return t.health<=o+$r&&(t.health=o,t.phase=2,t.invuln=!0,t.lobSent=!0,ji(t,"retreat"),n.events.push({type:"bossPhase",id:t.id,phase:2}),qr(t,n,"bossTeam")),"hit"}return t.health<=0?(t.health=0,bC(t,n,i)):"hit"}function E0(t){t.phase=3,t.invuln=!1,t.health=1,(t.state==="retreat"||t.state==="hiding")&&(ji(t,"tucked"),t.wait=0,t.pop=0)}var MC=.25,_d=new Set(["executed","unused","dead"]),wC=new Set(["cover","suppress","reload"]),lr={r:.25,y:.25,back:.2,front:.6},SC=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),TC=new Set(["telegraph","burst","suppress"]),P0=t=>Math.max(0,Math.min(1,t)),Qi=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),M1=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function I0(t,e=X.associate,n=X){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=Math.PI,t.state="idle",t.stateT=0,t.health=e.health,t.alive=!0,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.aim[0]=t.aim[1]=t.aim[2]=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckRef[0]=t.start[0],t.stuckRef[1]=t.start[2],t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.diveDir[0]=t.diveDir[1]=0,t.divePoint=null,t.claimed=!1,t.diedAt=-1/0,t.wasDowned=!1,t.kind=t.startKind,t.kind==="trainer"?b0(t,n):t.kind==="boss"&&p1(t,n),na(t,n.combat,n),t}function L0(t){return t.alive=!1,t.state="unused",t.stateT=0,t.health=0,t.pos[1]=t.prevPos[1]=-50,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.helping=null,t.claimed=!1,t.wasDowned=!1,t.kind="associate",na(t),t}function bd(t,e,n,i="associate"){let s=n.tuning||X,r=s.associate;for(let a=0;a<3;a++)t.pos[a]=e[a],t.prevPos[a]=e[a];let o=n.player;return t.yaw=t.prevYaw=o?Math.atan2(o.pos[0]-e[0],o.pos[2]-e[2]):Math.PI,t.state="spawn",t.stateT=0,t.health=r.health,t.alive=!0,t.claimed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.wasDowned=!1,t.diedAt=-1/0,t.divePoint=null,t.kind=i,i==="trainer"&&b0(t,s),na(t,s.combat,s),t}function D0({id:t,pos:e,kind:n="associate"},i=X.associate,s=X){let r={id:t,kind:n,startKind:n,strikeAt:-1,windupLen:0,struckAt:-1/0,retargetT:0,repathT:0,forcePathT:0,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:dt.head.r},body:{a:[0,0,0],b:[0,0,0],r:dt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return I0(r,i,s)}function na(t,e=X.combat,n=X){if(t.kind==="trainer")return jy(t,e,n);if(t.kind==="boss")return m1(t,e,n);let[i,s,r]=t.pos,o=t.shapes;if(t.state==="downed"){let l=Math.sin(t.yaw),c=Math.cos(t.yaw);return o.body.r=lr.r,o.head.r=dt.head.r,o.body.a[0]=i-l*lr.back,o.body.a[1]=s+lr.y,o.body.a[2]=r-c*lr.back,o.body.b[0]=i+l*lr.front,o.body.b[1]=s+lr.y,o.body.b[2]=r+c*lr.front,o.head.c[0]=o.body.b[0],o.head.c[1]=s+lr.y,o.head.c[2]=o.body.b[2],o}let a=SC.has(t.state)&&t.point&&t.point.kind==="low"&&t.pop<.5;return o.head.r=dt.head.r+e.hitPad,o.body.r=dt.body.r+e.hitPad,o.head.c[0]=i,o.head.c[2]=r,o.body.a[0]=i,o.body.a[2]=r,o.body.b[0]=i,o.body.b[2]=r,a?(o.head.c[1]=s+e.crouchHead-e.hitPad,o.body.a[1]=s+.1,o.body.b[1]=s+e.crouchBodyTop):(o.head.c[1]=s+dt.head.cy,o.body.a[1]=s+dt.body.ay,o.body.b[1]=s+dt.body.by),o}function pn(t,e){t.state=e,t.stateT=0}function es(t,e,n){e=P0(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var cr=(t,e)=>e>0?t/e:1;function Zl(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Bt(t.yaw,Math.atan2(r,o),i.turnRate*s))}function w1(t,e,n){let i=t.point.normal;t.yaw=Bt(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function ts(t,e){e.tokens.holds(t.id)&&e.tokens.release(t.id,e.now,e.director)}function N0(t,e){let n=e.player.pos;return t.chest[0]=n[0],t.chest[1]=n[1]+1.2,t.chest[2]=n[2],t.chest}function Md(t,e){let n=e.tuning||X,i=n.associate,s=e.director||n.director,r=e.player,o=[r.pos[0],r.pos[2]],a=N0(t,e),l=t.point,c=Qi(l?l.pos:[t.pos[0],t.pos[2]],o),h=t.role,d=!!l&&(t.mustMove||h!=="hold"),u=[t.pos[0],t.pos[2]],f=Math.cos(s.flankAngle*Math.PI/180),p=Math.cos(s.flankMaxAngle*Math.PI/180),g=0,m=0;if(r.coverNormal)g=-r.coverNormal[0],m=-r.coverNormal[1];else{let w=0;for(let S of e.others||[])S.alive&&(g+=S.pos[0],m+=S.pos[2],w++);w?(g=g/w-o[0],m=m/w-o[1]):(g=t.pos[0]-o[0],m=t.pos[2]-o[1])}let v=Math.hypot(g,m)||1;g/=v,m/=v;let y=[];for(let[w,S]of e.reserved)S!==t.id&&y.push(e.points[w].pos);let M=null,b=-1/0;for(let w of e.points){let S=e.reserved.get(w.index);if(S!==void 0&&S!==t.id||d&&w.index===l.index||t.mustMove&&l&&Qi(w.pos,l.pos)<2*i.reserveRadius)continue;let x=Qi(w.pos,o);if(x<i.reserveRadius||x<i.minRange||x>i.maxRange)continue;let _=!1;for(let N of y)if(Qi(N,w.pos)<i.reserveRadius){_=!0;break}if(_)continue;let L=((w.pos[0]-o[0])*g+(w.pos[1]-o[1])*m)/x;if(h==="flank"?L<p:L<0)continue;let D=0;if(h==="push"){let N=c-x;if(N<2)continue;D=2*N}else if(h==="flank"){if(!r.coverNormal||L>f)continue;D=10}let I=ad(w,a,e.boxes,n);if(!I.protected||!I.canShoot)continue;let E=-Qi(u,w.pos)-.5*Math.abs(x-i.preferRange)+D;E>b+1e-9&&(b=E,M=w)}return M?{point:M,score:b}:null}function EC(t,e){let n=Md(t,e);return n?n.point:null}function A0(t,e,n){let i=e.tuning||X,s=[t.pos[0],t.pos[2]],r=N0(t,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==t.id)continue;let h=Qi(s,l.pos);h>=a||n&&!ad(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function Es(t,e,n){pn(t,"cover"),t.blind=0,t.wantSuppress=null,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function ii(t,e,n){ts(t,e),es(t,0,n),t.blind=0;let i=t.stuckCount>=3?A0(t,e,!1):EC(t,e);if(!i){if(t.mustMove=!1,t.role!=="hold"&&(t.role="hold"),t.point&&Qi(t.point.pos,[t.pos[0],t.pos[2]])<=.5){Es(t,e,n);return}if(i=A0(t,e,!0)||A0(t,e,!1),!i){Es(t,e,n);return}}if(t.point&&t.point.index!==i.index&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),e.reserved.set(i.index,t.id),t.point=i,t.mustMove=!1,Math.hypot(i.pos[0]-t.pos[0],i.pos[1]-t.pos[2])<=n.arriveDist){S1(t,e,n);return}let s=t.stuckCount>=3?null:Yr(e.graph,e.boxes,[t.pos[0],t.pos[2]],i.pos,n.radius);t.path=s||[[i.pos[0],i.pos[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],pn(t,"run")}function S1(t,e,n){if(t.role==="revive"){pn(t,"kneel");return}let i=t.point;t.pos[0]=i.pos[0],t.pos[2]=i.pos[1],t.role="hold",t.stuckCount=0,t.pointT=0,t.relocT=0,t.mustMove=!1,e.events.push({type:"arrive",id:t.id,point:i}),Es(t,e,n)}function AC(t,e,n,i){if(t.role==="revive"){let r=C1(t,e);if(!r){As(t,e),ii(t,e,n);return}if(M1(t.pos,r.pos)<=R1){pn(t,"kneel");return}}let s=n.runSpeed*i;for(let r=0;r<t.path.length+2;r++){let o=t.path[t.pathI],a=t.pathI===t.path.length-1,l=o[0]-t.pos[0],c=o[1]-t.pos[2],h=Math.hypot(l,c);if(h<=n.arriveDist){if(a){S1(t,e,n);return}t.pathI++;continue}Zl(t,o[0],o[1],n,i);let d=Math.min(s,h);if(d<=1e-9)break;let u=En(e.boxes,t.pos,[l/h*d,0,c/h*d],n.radius,n.height),f=Math.hypot(u.pos[0]-t.pos[0],u.pos[2]-t.pos[2]);if(t.pos[0]=u.pos[0],t.pos[2]=u.pos[2],s-=f,f<d*.5)break;f>=h-1e-9}if(t.stuckT+=i,t.stuckT>=n.stuckTime){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05){t.role==="revive"&&As(t,e),t.stuckCount++,ii(t,e,n);return}t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}}function k0(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var T1=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1),O0=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function RC(t,e,n){if(t.point){let i=Vr(t.point,(e.tuning||X).associate.popShift);n[0]=i[0],n[2]=i[1]}else n[0]=t.pos[0],n[2]=t.pos[2];return n[1]=1.49,n}var R0=[0,0,0];function CC(t,e){let n=O0(e),i=e.player;return n?(RC(t,e,R0),!i.downed&&jt(e.boxes,R0,i.chest)?"player":jt(e.boxes,R0,n.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var E1=(t,e)=>t.target==="tobble"?!O0(e):e.player.downed,A1=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function PC(t,e,n,i,s){es(t,t.pop-cr(s,n.popTime),n),w1(t,n,s);let r=e.player;if(r.downed&&!O0(e))return;if(!r.downed){if(t.pointT+=s,t.role!=="hold"){ii(t,e,n);return}if(t.relocT+=s,t.relocT>=n.relocateCheck){t.relocT=0;let a=ad(t.point,N0(t,e),e.boxes,e.tuning||X);if(!a.protected||!a.canShoot||Qi(t.point.pos,[r.pos[0],r.pos[2]])<n.reserveRadius){t.mustMove=!0,ii(t,e,n);return}}if(t.pointT>=n.relocateAfter){t.mustMove=!0,t.pointT=0,ii(t,e,n);return}}if(t.stateT<t.wait)return;if(t.wantSuppress===null&&(t.wantSuppress=e.rand()<n.suppressChance),t.bursts>=n.magBursts){pn(t,"reload"),e.events.push({type:"bark",id:t.id,key:"reload"});return}let o=CC(t,e);if(o&&e.tokens.request(t.id,e.now,e.tokenCount,i)){t.target=o,pn(t,"telegraph"),t.shots=0,k0(t,e,n,s,!0),e.events.push({type:"telegraph",id:t.id});return}t.wantSuppress&&!r.downed&&(pn(t,"suppress"),t.shots=0)}function C0(t,e,n,i){ts(t,e),i&&t.bursts++,Es(t,e,n)}function IC(t,e,n,i){es(t,t.pop+cr(i,n.popTime),n);let s=A1(t,e);if(Zl(t,s[0],s[2],n,i),k0(t,e,n,i,!1),E1(t,e)||!e.tokens.holds(t.id)){C0(t,e,n,!1);return}t.stateT>=n.popTime+n.telegraphTime-1e-9&&(pn(t,"burst"),t.shots=0)}function LC(t,e,n,i){let s=e.player;es(t,t.pop+cr(i,n.popTime),n);let r=A1(t,e);if(Zl(t,r[0],r[2],n,i),k0(t,e,n,i,!1),E1(t,e)||!e.tokens.holds(t.id)){C0(t,e,n,!0);return}let o=t.muzzle;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp,o[2]=t.pos[2];let a=T1(t.stateT,n.rate,n.burstTime),l=t.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||X).move.sprint);for(;t.shots<a;){t.shots++;let c=t.aim[0]-o[0],h=t.aim[1]-o[1],d=t.aim[2]-o[2],u=Math.hypot(c,h,d)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[c/u,h/u,d/u],accurate:!0,target:t.target,spread:n.spread+n.moveSpread*l})}t.stateT>=n.burstTime-1e-9&&C0(t,e,n,!0)}function DC(t,e,n,i){let s=e.player;if(t.blind=P0(t.blind+cr(i,n.popTime)),Zl(t,s.pos[0],s.pos[2],n,i),s.downed){t.blind=0,Es(t,e,n);return}let r=t.stateT-n.popTime;if(r<0&&t.blind<1)return;let o=t.point,a=Math.max(0,r),l=t.muzzle;l[0]=t.pos[0],l[2]=t.pos[2],l[1]=t.pos[1]+(o.kind==="low"?o.height+(e.tuning||X).combat.blindLift:n.muzzleUp);let c=T1(a,n.suppressRate,n.suppressTime);for(;t.shots<c;){t.shots++;let h=s.head[0]-l[0],d=s.head[1]-l[1],u=s.head[2]-l[2],f=Math.hypot(h,d,u)||1;h/=f,d/=f,u/=f;let p=u,g=-h,m=Math.hypot(p,g);m<1e-6&&(p=1,g=0,m=1),p/=m,g/=m;let v=d*g,y=u*p-h*g,M=-d*p,b=2*Math.PI*e.rand(),w=n.suppressMiss*(1+.5*e.rand()),S=Math.cos(b)*w,x=Math.sin(b)*w,_=s.head[0]+p*S+v*x,L=s.head[1]+y*x,D=s.head[2]+g*S+M*x,I=_-l[0],E=L-l[1],N=D-l[2],R=Math.hypot(I,E,N)||1;e.events.push({type:"enemyShot",id:t.id,from:[l[0],l[1],l[2]],dir:[I/R,E/R,N/R],accurate:!1,spread:n.suppressSpread})}r>=n.suppressTime-1e-9&&(t.blind=0,Es(t,e,n))}var R1=.8;function C1(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);return n&&n.alive&&n.state==="downed"&&n.helper===t.id?n:null}function As(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);n&&n.helper===t.id&&(n.helper=null),t.helping=null,t.role="hold"}function P1(t,e,n){let i=(n.tuning||X).associate;ts(t,n),es(t,0,i),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.point=null,t.role="revive",t.helping=e.id,e.helper=t.id,t.mustMove=!1;let s=t.pos[0]-e.pos[0],r=t.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=R1){pn(t,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];t.path=Yr(n.graph,n.boxes,[t.pos[0],t.pos[2]],a,i.radius)||[a],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],pn(t,"run")}function NC(t,e,n,i){let s=C1(t,e);if(!s){As(t,e),ii(t,e,n);return}Zl(t,s.pos[0],s.pos[2],n,i),!(t.stateT<n.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,n.reviveHealth*n.health),s.role="hold",s.mustMove=!1,s.bursts=0,pn(s,"seek"),e.events.push({type:"cloneRevive",id:t.id,target:s.id}),t.helping=null,t.role="hold",ii(t,e,n))}function kC(t,e,n,i){if(t.stateT>=n.bleedTime-1e-9){t.health=0,yd(t,e,"bleed");return}if(t.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===t||!c.alive||!wC.has(c.state))continue;let h=M1(t.pos,c.pos);h<o&&(o=h,s=c.pos[0]-t.pos[0],r=c.pos[2]-t.pos[2])}if(o===1/0)s=t.pos[0]-e.player.pos[0],r=t.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),t.yaw=Bt(t.yaw,Math.atan2(s,r),n.turnRate*i);let a=n.downedCrawl*i,l=En(e.boxes,t.pos,[s/o*a,0,r/o*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}function OC(t,e,n){t.point&&e.reserved.get(t.point.index)===t.id&&t.pop<=1e-6&&Qi(t.point.pos,[t.pos[0],t.pos[2]])<=.3?Es(t,e,n):ii(t,e,n)}function I1(t,e){return t.kind==="trainer"?i1(t):t.kind==="boss"||!t.alive||_d.has(t.state)||t.state==="downed"?!1:(t.role==="revive"&&As(t,e),ts(t,e),t.blind=0,pn(t,"stagger"),!0)}function L1(t,e,n){if(t.kind==="trainer")return s1(t,e);if(t.kind==="boss"||!t.alive||_d.has(t.state)||t.state==="downed"||t.state==="dive")return!1;t.role==="revive"&&As(t,n),ts(t,n),es(t,0,(n.tuning||X).associate),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.divePoint=t.point,t.point=null,t.role="hold",t.path=[],t.pathI=0;let i=t.pos[0]-e[0],s=t.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(t.yaw),s=Math.cos(t.yaw)):(i/=r,s/=r),t.diveDir[0]=i,t.diveDir[1]=s,t.yaw=Math.atan2(i,s),pn(t,"dive"),!0}function UC(t,e,n,i){let s=Math.max(n.diveTime,.001),r=Math.max(t.stateT-i,n.diveReaction),o=Math.min(t.stateT,n.diveReaction+s);if(o>r){let a=n.diveDistance*(o-r)/s,l=En(e.boxes,t.pos,[t.diveDir[0]*a,0,t.diveDir[1]*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}t.stateT>=n.diveReaction+s-1e-9&&(t.point=t.divePoint,t.divePoint=null,t.mustMove=!0,ii(t,e,n))}function D1(t,e){return t.kind==="trainer"?r1(t):t.kind==="boss"||!t.alive||_d.has(t.state)||t.state==="dive"?!1:(t.role==="revive"&&As(t,e),ts(t,e),es(t,0,(e.tuning||X).associate),t.blind=0,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.wasDowned=t.state==="downed",t.point=null,t.role="hold",t.helper=null,t.mustMove=!1,pn(t,"executed"),!0)}function N1(t){return t.kind==="trainer"?o1(t):!t.alive||t.state!=="executed"?!1:(pn(t,t.wasDowned?"downed":"flinch"),t.wasDowned=!1,!0)}function k1(t,e,n="execute"){return t.kind==="trainer"?l1(t,e,n):t.kind==="boss"||!t.alive||t.state!=="executed"?null:(t.health=0,yd(t,e,n))}function yd(t,e,n){return t.alive=!1,ts(t,e),t.role==="revive"&&As(t,e),t.helper=null,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.pop=0,t.blind=0,pn(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),"kill"}function U0(t,e){return t.kind==="trainer"||t.kind==="boss"||!t.alive||_d.has(t.state)||t.state==="downed"?null:(ts(t,e),t.role==="revive"&&As(t,e),t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.point=null,t.health=1,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.mustMove=!1,pn(t,"downed"),e.events.push({type:"down",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]]}),e.events.push({type:"bark",id:t.id,key:"cloneDown"}),"down")}function O1(t,e,n){if(!t.alive)return;(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,MC);let i=(e.tuning||X).associate,s=e.director||X.director;if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.kind==="trainer"){n1(t,e,n);return}if(t.kind==="boss"){_1(t,e,n);return}switch(t.state){case"idle":e.started&&ii(t,e,i);break;case"seek":ii(t,e,i);break;case"run":AC(t,e,i,n);break;case"cover":PC(t,e,i,s,n);break;case"telegraph":IC(t,e,i,n);break;case"burst":LC(t,e,i,n);break;case"suppress":DC(t,e,i,n);break;case"reload":es(t,t.pop-cr(n,i.popTime),i),w1(t,i,n),t.stateT>=i.reloadTime&&(t.bursts=0,Es(t,e,i));break;case"flinch":es(t,t.pop-cr(n,i.popTime),i),t.blind=P0(t.blind-cr(n,i.popTime)),t.stateT>=i.flinchTime&&(t.point?Es(t,e,i):ii(t,e,i));break;case"stagger":es(t,t.pop-cr(n,i.popTime),i),t.stateT>=i.staggerTime-1e-9&&OC(t,e,i);break;case"dive":UC(t,e,i,n);break;case"kneel":NC(t,e,i,n);break;case"downed":kC(t,e,i,n);break;case"spawn":t.stateT>=(e.tuning||X).pad.riseTime-1e-9&&ii(t,e,i);break;default:break}}function U1(t,e,n,i="body"){return t.kind==="trainer"?c1(t,e,n,i):t.kind==="boss"?b1(t,e,n,i):!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:t.state==="downed"?(t.health=0,yd(t,n,i)):(t.health-=e,t.health<=0?(i==="body"||i==="tobble")&&n.rand()<(n.tuning||X).associate.downChance?U0(t,n):(t.health=0,yd(t,n,i)):t.role==="revive"?(As(t,n),ts(t,n),pn(t,"flinch"),"hit"):(TC.has(t.state)&&(ts(t,n),pn(t,"flinch"),t.blind=Math.min(t.blind,1)),"hit"))}function F1(){let t=new Map,e=new Map,n=new Map,i={request(s,r,o,a=X.director){if(t.has(s))return!0;if(r<(n.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[d,u]of e)r-u.last>a.requestWindow&&e.delete(d);if(t.size>=o)return!1;let c=null,h=1/0;for(let[d,u]of e)u.first<h&&(c=d,h=u.first);return c!==s?!1:(e.delete(s),t.set(s,r),!0)},release(s,r,o=X.director){e.delete(s),t.delete(s)&&n.set(s,r+o.tokenCooldown)},holds(s){return t.has(s)},held(){return[...t.keys()]},expire(s,r=X.director){let o=[];for(let[a,l]of t)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){t.clear(),e.clear(),n.clear()}};return i}function B1(t,e=X){let n=(t.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,openKey:r.openKey,shareKey:r.shareKey,manual:!!r.manual,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(n.map(r=>[r.id,new Set]));return{list:n,step(r,o){let a=e.pad,l=[];for(let c of n){if(c.state==="dormant"){if(c.manual||!o.started||!(o.kills>=(c.openKey&&Number.isFinite(a[c.openKey])?a[c.openKey]:a.openAfterKills)||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of n)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of n)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return n.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of n)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var FC=.25,BC=1.49,zC=.5,Kr="tobble",HC=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn","windup","swing","recover"]),wd=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),Rd=t=>Math.max(0,Math.min(1,t)),z1=(t,e)=>e&&e.tuning?e.tuning.tobble:t.cfg,GC=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function z0({pos:t,yaw:e=0},n=X.tobble){let i={id:Kr,cfg:n,start:[t[0],t[1],t[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:dt.head.r},body:{a:[0,0,0],b:[0,0,0],r:dt.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return H0(i)}function H0(t){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=t.startYaw,t.state="idle",t.stateT=0,t.hp=t.cfg.health,t.alive=!0,t.downed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.target=null,t.reviveT=0,t.threatT=0,t.lofT=0,t.wait=0,t.shots=0,t.sinceHit=0,t.relocT=0,t.complainT=0,t.stuckT=0,t.stuckCount=0,t.kneeling=!1,t.revGo=!1,t.sideLeft=0,t.speed=0,t.aim[0]=t.aim[1]=t.aim[2]=0,Kl(t),t}function Kl(t,e=X.combat){let n=t.cfg,i=n.scale,[s,r,o]=t.pos,a=t.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,t.downed){let c=Math.sin(t.yaw),h=Math.cos(t.yaw);a.body.r=.25*i,a.head.r=dt.head.r*i,a.body.a[0]=s-c*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-h*.2*i,a.body.b[0]=s+c*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+h*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],t.chest[0]=s,t.chest[1]=r+.25*i,t.chest[2]=o}else if(t.point&&t.point.kind==="low"&&t.pop<.5)a.head.r=(dt.head.r+l)*i,a.body.r=(dt.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,t.chest[0]=s,t.chest[1]=r+e.crouchBodyTop*i*.9,t.chest[2]=o;else{let c=t.point?n.popLift*Rd(t.pop):0;a.head.r=(dt.head.r+l)*i,a.body.r=(dt.body.r+l)*i,a.head.c[1]=r+dt.head.cy*i+c,a.body.a[1]=r+dt.body.ay*i+c,a.body.b[1]=r+dt.body.by*i+c,t.chest[0]=s,t.chest[1]=r+n.height*(1.2/1.8)+c,t.chest[2]=o}return t.head[0]=a.head.c[0],t.head[1]=a.head.c[1],t.head[2]=a.head.c[2],a}function Jr(t,e){t.state=e,t.stateT=0}var Cd=(t,e,n=!1)=>t.events.push(n?{type:"bark",id:Kr,key:e,force:n}:{type:"bark",id:Kr,key:e});function Jl(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Bt(t.yaw,Math.atan2(r,o),i.turnRate*s))}function VC(t,e,n){let i=t.point.normal;t.yaw=Bt(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function sa(t,e,n){e=Rd(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.tuning.associate.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var G0=(t,e)=>e>0?t/e:1;function jl(t,e){t.point&&e.reserved.get(t.point.index)===Kr&&e.reserved.delete(t.point.index),t.point=null}function H1(t,e,n,i){let s=t.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,c=o/a,h=n-s.lens[0],d=i-s.lens[2],u=Math.max(.5,Math.min(e.lofRange,h*l+d*c));return Math.hypot(h-l*u,d-c*u)}function WC(t,e,n){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=t.pos[0]-i.lens[0],l=t.pos[2]-i.lens[2],c=-o*a+r*l>=0?1:-1;t.side[0]=-o*c,t.side[1]=r*c,t.sideLeft=n.sidestepDist,jl(t,e),sa(t,0,e),t.target=null,t.lofT=0,Jr(t,"sidestep")}var Zr=t=>t.alive&&HC.has(t.state)&&t.state!=="executed",ia=t=>t.state==="downed";function XC(t,e,n,i){return t.point?(Vr(t.point,e.tuning.associate.popShift,Rs),i[0]=Rs[0],i[2]=Rs[1]):(i[0]=t.pos[0],i[2]=t.pos[2]),i[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0),i}function Ed(t,e){let n=t.shapes.body;return e[0]=(n.a[0]+n.b[0])/2,e[1]=(n.a[1]+n.b[1])/2,e[2]=(n.a[2]+n.b[2])/2,e}var Pi=[0,0,0],F0=[0,0,0],Rs=[0,0];function V0(t,e,n){return t.point?(Vr(t.point,e.tuning.associate.popShift,Rs),n[0]=Rs[0],n[2]=Rs[1]):(n[0]=t.pos[0],n[2]=t.pos[2]),n[1]=BC,n}function G1(t,e,n){XC(t,e,n,F0);let i=null,s=1/0;for(let r of e.enemies){if(!Zr(r)||ia(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);o>=s||o>n.range||jt(e.boxes,F0,Ed(r,Pi))&&(s=o,i=r)}return i}function V1(t,e,n){let i=null,s=1/0;for(let r of t.enemies){if(!Zr(r)||ia(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-n);o<s&&(s=o,i=r)}return i}var Ad=[0,0,0],hr=[0,0,0],Sd=[0,0,0];function W1(t,e,n){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[t.pos[0],t.pos[2]],l=V1(e,t.pos[0],t.pos[2]),c=[];for(let[f,p]of e.reserved)p!==Kr&&c.push(e.points[f].pos);let h=(n.followMin+n.followMax)/2,d=null,u=-1/0;for(let f of e.points){let p=e.reserved.get(f.index);if(p!==void 0&&p!==Kr)continue;let g=wd(f.pos,o);if(g<n.followMin||g>n.followMax||g<=n.personalSpace||H1(e,n,f.pos[0],f.pos[1])<n.lofClear)continue;let m=!1;for(let b of c)if(wd(b,f.pos)<s.reserveRadius){m=!0;break}if(m)continue;let v=!0;for(let b of e.enemies)if(Zr(b)&&wd([b.pos[0],b.pos[2]],f.pos)<s.radius+n.radius+.2){v=!1;break}if(!v)continue;let y=!1;if(l){if(V0(l,e,Ad),hr[0]=f.pos[0],hr[1]=f.kind==="low"?i.combat.crouchHead*n.scale:n.height,hr[2]=f.pos[1],jt(e.boxes,hr,Ad))continue;Vr(f,s.popShift,Rs),Sd[0]=Rs[0],Sd[1]=n.muzzleUp+n.popLift,Sd[2]=Rs[1],y=jt(e.boxes,Sd,Ed(l,Pi))}let M=-wd(a,f.pos)-.5*Math.abs(g-h)+(y?8:0);M>u+1e-9&&(u=M,d=f)}return d}function YC(t,e,n){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let d=Math.hypot(i.dir[0],i.dir[2]);d>1e-6&&(r=i.dir[0]/d,o=i.dir[2]/d)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,c=(-o+r)*a,h=En(e.boxes,[s[0],t.pos[1],s[2]],[l,0,c],n.radius,n.height);return[h.pos[0],h.pos[2]]}function X1(t,e,n,i){t.goal[0]=i[0],t.goal[1]=i[1],t.path=t.stuckCount>=3?[[i[0],i[1]]]:Yr(e.graph,e.boxes,[t.pos[0],t.pos[2]],i,n.radius)||[[i[0],i[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}function Y1(t,e,n,i,s){let r=s*i,o=.15;for(let a=0;a<t.path.length+2;a++){let l=t.path[t.pathI],c=t.pathI===t.path.length-1,h=l[0]-t.pos[0],d=l[1]-t.pos[2],u=Math.hypot(h,d);if(u<=o){if(c)return"arrived";t.pathI++;continue}Jl(t,l[0],l[1],n,i);let f=Math.min(r,u);if(f<=1e-9)break;let p=En(e.boxes,t.pos,[h/u*f,0,d/u*f],n.radius,n.height),g=Math.hypot(p.pos[0]-t.pos[0],p.pos[2]-t.pos[2]);if(t.pos[0]=p.pos[0],t.pos[2]=p.pos[2],r-=g,g<f*.5)break}if(t.stuckT+=i,t.stuckT>=1){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05)return"stuck";t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}return"moving"}function ur(t,e,n){let i=e.started?W1(t,e,n):null;t.point&&(!i||i.index!==t.point.index)&&jl(t,e),sa(t,0,e);let s;if(i?(t.point=i,e.reserved.set(i.index,Kr),s=i.pos):s=YC(t,e,n),t.shots=0,t.target=null,Math.hypot(s[0]-t.pos[0],s[1]-t.pos[2])<=.15){q1(t,e,n);return}X1(t,e,n,s),Jr(t,"follow")}function q1(t,e,n){if(t.stuckCount=0,t.point&&(t.pos[0]=t.point.pos[0],t.pos[2]=t.point.pos[1]),!e.started&&!t.point){Jr(t,"idle");return}B0(t,e,n)}function B0(t,e,n){Jr(t,"cover"),t.target=null,t.relocT=0,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function qC(t,e,n,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax){ur(t,e,n);return}Jl(t,s[0],s[2],n,i)}function $C(t,e,n,i){let s=Y1(t,e,n,i,n.runSpeed);s==="arrived"?q1(t,e,n):s==="stuck"&&(t.stuckCount++,jl(t,e),ur(t,e,n))}function ZC(t,e,n,i){sa(t,t.pop-G0(i,n.popTime),e);let s=e.player.pos;if(t.point?VC(t,n,i):Jl(t,s[0],s[2],n,i),t.relocT+=i,t.relocT>=zC){t.relocT=0;let o=Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax;if(t.point){let a=t.point.pos,l=Math.hypot(t.pos[0]-a[0],t.pos[2]-a[1])>.3,c=V1(e,t.pos[0],t.pos[2]),h=!1;if(c){V0(c,e,Ad);let d=t.point.kind==="low"?e.tuning.combat.crouchHead*n.scale:n.height;hr[0]=a[0],hr[1]=d,hr[2]=a[1],h=jt(e.boxes,hr,Ad)}if(o||l||h){ur(t,e,n);return}}else if(o||e.started&&W1(t,e,n)){ur(t,e,n);return}}if(!e.started||t.stateT<t.wait)return;let r=G1(t,e,n);r&&(t.target=r,t.shots=0,Jr(t,"shoot"))}function KC(t,e,n,i){sa(t,t.pop+G0(i,n.popTime),e);let s=t.target;if((!s||!Zr(s)||ia(s)||!jt(e.boxes,JC(t,n),Ed(s,Pi)))&&(s=t.target=G1(t,e,n)),!s){B0(t,e,n);return}if(Jl(t,s.pos[0],s.pos[2],n,i),t.stateT<n.popTime-1e-9)return;let r=t.muzzle;r[0]=t.pos[0],r[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0)*Rd(t.pop),r[2]=t.pos[2];let o=GC(t.stateT-n.popTime,n.rate,n.burstTime);for(;t.shots<o;){t.shots++,Ed(s,Pi);let a=Pi[0]-r[0],l=Pi[1]-r[1],c=Pi[2]-r[2],h=Math.hypot(a,l,c)||1,d=Ko([a/h,l/h,c/h],n.spread,e.rand,t.scratch),u=Rn(r,d,n.range,e.boxes,e.enemies),f=u.target&&(u.kind==="head"||u.kind==="body")?u.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:u.point,hit:f?f.id:null}),f&&e.hurtRep&&e.hurtRep(f,n.damage),!Zr(s)||ia(s))break}(!Zr(s)||ia(s))&&(t.target=null),t.stateT>=n.popTime+n.burstTime-1e-9&&B0(t,e,n)}var Td=[0,0,0];function JC(t,e){return Td[0]=t.pos[0],Td[1]=t.pos[1]+e.muzzleUp+(t.point?e.popLift:0)*Rd(t.pop),Td[2]=t.pos[2],Td}function jC(t,e,n,i){let s=Math.min(n.runSpeed*i,t.sideLeft);if(s>0){let r=En(e.boxes,t.pos,[t.side[0]*s,0,t.side[1]*s],n.radius,n.height),o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);t.pos[0]=r.pos[0],t.pos[2]=r.pos[2],t.sideLeft-=o<s*.5?t.sideLeft:o}t.sideLeft<=1e-6&&ur(t,e,n)}function QC(t){let e=t.player.pos,n=0;Pi[0]=e[0],Pi[1]=.4,Pi[2]=e[2];for(let i of t.enemies)!Zr(i)||ia(i)||i.state==="spawn"||jt(t.boxes,V0(i,t,F0),Pi)&&n++;return n}function e3(t,e){jl(t,e),sa(t,0,e),t.target=null,t.revGo=!1,t.threatT=0,t.kneeling=!1,t.reviveT=0,t.path=[],t.pathI=0,t.goal[0]=t.goal[1]=1/0,Jr(t,"revive")}function t3(t,e,n,i){let s=e.player.pos;if(!t.revGo)if(t.threatT+=i,sa(t,t.pop-G0(i,n.popTime),e),QC(e)<=n.reviveMaxThreats||t.threatT>=n.reviveWaitMax-1e-9)t.revGo=!0;else return;if(Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])<=n.reviveRange){t.kneeling||(t.kneeling=!0,t.reviveT=0,e.events.push({type:"tobbleKneel"})),Jl(t,s[0],s[2],n,i),t.reviveT+=i,t.reviveT>=n.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&Cd(e,"tobbleRevive",!0),ur(t,e,n));return}if(t.kneeling=!1,t.reviveT=0,Math.hypot(s[0]-t.goal[0],s[2]-t.goal[1])>n.reviveRange+.4||!t.path.length){let a=t.pos[0]-s[0],l=t.pos[2]-s[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.min(.8,n.reviveRange*.8);X1(t,e,n,[s[0]+a*h,s[2]+l*h]),t.goal[0]=s[0],t.goal[1]=s[2]}let o=Y1(t,e,n,i,n.runSpeed);o==="stuck"?(t.stuckCount++,t.path=[]):o==="arrived"&&(t.path=[])}function n3(t,e,n,i){let s=e.player.pos,r=s[0]-t.pos[0],o=s[2]-t.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(t.yaw=Bt(t.yaw,Math.atan2(r,o),n.turnRate*i)),a>n.reviveRange&&n.crawlSpeed>0){let l=Math.min(n.crawlSpeed*i,a-n.reviveRange),c=En(e.boxes,t.pos,[r/a*l,0,o/a*l],n.radius,n.height);t.pos[0]=c.pos[0],t.pos[2]=c.pos[2]}t.complainT+=i,t.complainT>=n.complainEvery-1e-9&&(t.complainT=0,Cd(e,"tobbleComplain"))}function $1(t,e,n){(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,FC);let i=z1(t,e);if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.sinceHit+=n,t.downed){n3(t,e,i,n);return}switch(t.hp<i.health&&t.sinceHit>=i.regenDelay&&(t.hp=Math.min(i.health,t.hp+(i.regenTime>0?i.health/i.regenTime*n:i.health))),e.playerDowned?t.state!=="revive"&&e3(t,e):t.state==="revive"&&ur(t,e,i),t.state!=="sidestep"&&t.state!=="revive"&&e.aim&&e.aim.active&&H1(e,i,t.pos[0],t.pos[2])<i.lofClear?(t.lofT+=n,t.lofT>=i.sidestepReact-1e-9&&WC(t,e,i)):t.state!=="sidestep"&&(t.lofT=0),t.state){case"idle":qC(t,e,i,n);break;case"follow":$C(t,e,i,n);break;case"cover":ZC(t,e,i,n);break;case"shoot":KC(t,e,i,n);break;case"sidestep":jC(t,e,i,n);break;case"revive":t3(t,e,i,n);break;default:break}}function Ql(t,e,n){return t.downed||!(e>0)?null:(t.hp-=e,t.sinceHit=0,t.hp>0?"hit":(t.hp=0,t.downed=!0,t.kneeling=!1,t.reviveT=0,t.complainT=0,t.target=null,t.pop=0,jl(t,n),Jr(t,"downed"),n.events.push({type:"tobbleDown"}),Cd(n,"tobbleDown",!0),"downed"))}function W0(t,e){if(!t.downed)return!1;let n=z1(t,e);return t.downed=!1,t.hp=Math.max(1,n.reviveHealth*n.health),t.sinceHit=0,t.lofT=0,t.complainT=0,e.events.push({type:"tobbleUp"}),Cd(e,"tobbleUp"),ur(t,e,n),!0}var Z1=new Set(["cover","coverSlide","coverSwap"]),K1=new Set(["cover","suppress","reload","flinch"]),i3=new Set(["cover","suppress","reload"]),J1=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),j1=8,s3=1,r3=.1,Q1=1.3,X0=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function e_({level:t,boxes:e,edges:n,rand:i,tuning:s=X}){let r=()=>s.associate,o=By(n,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=$y(t.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=F1(),c=ky(s.grenade),h=B1(t,s),d=new Map,u=()=>!!t.tobble&&s.tobble.enabled>0,f=[],p=[],g=t.overlord||null,m=g?[{id:"overlord",kind:"boss",pos:[g.spots[0].hide[0],0,g.spots[0].hide[1]]},...t.associates]:t.associates,v=m.length,y=m.map(O=>D0(O,s.associate,s));for(let O=v;O<j1;O++)y.push(L0(D0({id:`r${O+1}`,pos:[0,0,0]},s.associate,s)));let M=()=>Math.max(v,Math.min(j1,Math.round(s.director.maxEnemies))),b=M(),w=ud({state:"move",pos:[0,0,0],cover:null,scratch:{}}),S={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},x={boxes:e,points:o,graph:a,tokens:l,reserved:d,player:S,now:0,rand:i,tokenCount:0,events:f,tuning:s,director:s.director,others:y,started:!1,aim:void 0,tobble:null,enemies:y,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null,bossLevel:g,saunasDone:()=>h.allDone()},_={enemies:y,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list,tobble:null,boss:y.find(O=>O.kind==="boss")||null,lobMarkers:[]},L=!1,D=0,I=[0,0],E=!1,N=!1;function R(){d.clear();for(let O of y.slice(0,v)){if(O.kind!=="associate")continue;let ne=null,j=1/0;for(let ve of o){let P=Math.hypot(ve.pos[0]-O.pos[0],ve.pos[1]-O.pos[2]);P<j&&(j=P,ne=ve)}O.point=ne,ne&&d.set(ne.index,O.id)}}R(),_.tobble=x.tobble=u()?z0(t.tobble,s.tobble):null;let C=()=>_.tobble&&!_.tobble.downed,U=(O,ne,j=f,ve=!1)=>j.push(ve?{type:"bark",id:O,key:ne,force:ve}:{type:"bark",id:O,key:ne}),H=()=>y.find(O=>O.alive)||y[0];function ee(){for(let O of l.held())l.release(O,_.now,s.director)}function q(O){_.started=!0,_.startT=_.now,U(H().id,"lockdown",O)}function te(O){O.diedAt=_.now,_.kills++,h.noteDeath(O.id)}function Y(O,ne,j,ve){!_.started&&O.alive&&O.state!=="unused"&&ne>0&&q(ve),x.events=ve;let P=U1(O,ne,x,j);return x.events=f,P==="kill"&&te(O),P==="kill"&&j==="head"&&C()&&++D%3===0&&U("tobble","tobbleHeadshot",ve),P==="kill"&&O.kind==="boss"&&K(ve),P}function K(O){for(let ne of y)ne.alive&&ne.kind!=="boss"&&Y(ne,1e6,"blast",O);for(let ne of h.list)(ne.state==="dormant"||ne.state==="open")&&(ne.state="closed")}x.hurtRep=(O,ne)=>Y(O,ne,"tobble",f),x.reviveDoc=()=>!x.health||!x.health.downed?!1:(x.health.revive(),x.m.revive(),S.downed=!1,f.push({type:"revived"}),!0);function Se(O,ne){let j=S,ve=s.combat;j.pos[0]=O.pos[0],j.pos[1]=O.pos[1],j.pos[2]=O.pos[2];let P=Z1.has(O.state)?Ss(O):null;j.exposed=!!(O.cover&&O.cover.exposed);let T=!!P&&P.kind==="low"&&!j.exposed;j.chest[0]=O.pos[0],j.chest[1]=O.pos[1]+(T?.6:1.2),j.chest[2]=O.pos[2];let V=ud(O,w,ve).shapes.head.c;j.head[0]=V[0],j.head[1]=V[1],j.head[2]=V[2],j.speed=O.speed(),j.coverNormal=P?P.normal:null,j.downed=!!ne.downed}function Z(O,ne){let j=s.director;if(Z1.has(O.state)?S.exposed||(_.hideT+=ne):_.hideT=0,!N||Math.hypot(O.pos[0]-I[0],O.pos[2]-I[1])>j.stayRadius?(I[0]=O.pos[0],I[1]=O.pos[2],N=!0,_.stayT=0):_.stayT+=ne,_.hideT>=j.pushAfter&&!y.some(P=>P.alive&&P.role==="push")){let P=y.filter(V=>V.kind==="associate"&&V.alive&&V.role==="hold"&&K1.has(V.state)&&!l.holds(V.id)).sort((V,ce)=>X0(V.pos,S.pos)-X0(ce.pos,S.pos)),T=null;for(let V of P){if(V.role="push",Md(V,x)){T=V;break}V.role="hold"}T?(U(T.id,"push"),_.hideT=0):_.hideT=Math.max(0,j.pushAfter-1)}if(_.stayT>=j.flankAfter&&!y.some(P=>P.alive&&P.role==="flank")){let P=null,T=-1/0;for(let V of y){if(V.kind!=="associate"||!V.alive||V.role!=="hold"||!K1.has(V.state)||l.holds(V.id))continue;V.role="flank";let ce=Md(V,x);V.role="hold",ce&&ce.score>T&&(T=ce.score,P=V)}P&&(P.role="flank",C()&&U("tobble","tobbleFlank"),U(P.id,"flank")),_.stayT=0}}function ye(){let O=r().reviveRange;for(let ne of y){if(!ne.alive||ne.state!=="downed"||ne.helper)continue;let j=null,ve=1/0;for(let P of y){if(P.kind!=="associate"||!P.alive||!i3.has(P.state)||P.role!=="hold"||l.holds(P.id))continue;let T=X0(P.pos,ne.pos);T<=O&&T<ve&&(ve=T,j=P)}j&&(P1(j,ne,x),U(j.id,"cloneRevive"))}}function Ae(){for(let O=0;O<b;O++){let ne=y[O];if(!ne.claimed&&(ne.state==="unused"||ne.state==="dead"&&_.now-ne.diedAt>=s3-1e-9))return ne.claimed=!0,ne}return null}function He(){let O=h.step(0,{started:_.started,sinceStart:_.now-_.startT,kills:_.kills,freeSlot:Ae,now:_.now});for(let ne of O){if(f.push(ne),ne.type==="padOpen"){U(ne.id,"padOpen",f,!0),C()&&U("tobble","tobblePad",f,!0);continue}if(ne.type!=="padSpawn")continue;let j=h.list.find(P=>P.id===ne.id),ve=y.find(P=>P.id===ne.enemyId);bd(ve,j.pos,x,Ne(j))}}let se=()=>y.reduce((O,ne)=>O+(ne.kind==="trainer"&&ne.alive?1:0),0);function Ne(O){let ne=s.pad,j=O.shareKey&&Number.isFinite(ne[O.shareKey])?ne[O.shareKey]:ne.trainerShare;return j>0&&se()<s.trainer.maxAlive&&i()<j?"trainer":"associate"}let fe=[0,0,0],ge=[0,0,0];function Ce(O,ne){let j=ne[0]-O.from[0],ve=ne[2]-O.from[2],P=Math.hypot(j,ve);return P>O.reach||P>1e-6&&Math.abs(ti(Math.atan2(j,ve)-O.yaw))>O.arc*Math.PI/360+1e-9?!1:(fe[0]=O.from[0],fe[1]=O.from[1]+Q1,fe[2]=O.from[2],ge[0]=ne[0],ge[1]=O.from[1]+Q1,ge[2]=ne[2],jt(e,fe,ge))}function re(O,ne){let j=s.trainer;for(let ve=0;ve<f.length;ve++){let P=f[ve];if(P.type!=="trainerSwing")continue;if(!ne.downed&&Ce(P,O.pos)){let V=ne.damage(j.damage);if(V!==null){if(f.push({type:"playerHit",id:P.id,from:P.from,amount:j.damage,result:V,melee:!0}),V==="downed")O.state!=="downed"&&O.down(),ee();else if(O.knock){let ce=O.pos[0]-P.from[0],Q=O.pos[2]-P.from[2],me=Math.hypot(ce,Q)||1;O.knock(ce/me,Q/me,j.knockback,j.knockTime)}}}let T=_.tobble;if(T&&!T.downed&&Ce(P,T.pos)){let V=Ql(T,j.tobbleDamage,x);f.push({type:"tobbleHit",id:P.id,from:P.from,result:V})}}}let ie=[0,0,0],Te=[0,0,0];function Ie(O,ne,j){let ve=s.grenade,P=0;ie[0]=O[0],ie[1]=O[1]+.3,ie[2]=O[2];let T=(ce,Q)=>{let me=Math.hypot(ce[0]-O[0],ce[1]-O[1],ce[2]-O[2]),De=Dy(me,ve);return De>0&&jt(e,ie,ce)?Q(De):null};for(let ce of y){if(!ce.alive||ce.state==="executed")continue;let Q=ce.shapes.body;Te[0]=ce.pos[0],Te[1]=(Q.a[1]+Q.b[1])/2,Te[2]=ce.pos[2],T(Te,me=>Y(ce,me,"blast",f))==="kill"&&P++}Te[0]=ne.pos[0],Te[1]=ne.pos[1]+(S.chest[1]-ne.pos[1]<1?.45:.9),Te[2]=ne.pos[2],T(Te,ce=>{let Q=ce*ve.selfDamage,me=j.damage(Q);return me===null||(f.push({type:"playerHit",id:null,from:[O[0],O[1],O[2]],amount:Q,result:me}),me==="downed"&&(ne.state!=="downed"&&ne.down(),ee())),null});let V=h.blast(O);for(let ce of V)f.push({type:"padClosed",id:ce}),U(ce,"padClosed");f.push({type:"explode",pos:[O[0],O[1],O[2]],kills:P,closed:V})}function _e(O,ne,j){let ve=O.hostile,P=s.boss,T=O.pos,V=(De,ae)=>{let de=Math.hypot(De[0]-T[0],De[2]-T[2]);return de<=ve.radius?ae*(1-P.lobFalloff*de/Math.max(ve.radius,1e-6)):0},ce=V(ne.pos,ve.damage);if(!j.downed&&ce>0){let De=j.damage(ce);De!==null&&(f.push({type:"playerHit",id:ve.id,from:[T[0],T[1],T[2]],amount:ce,result:De,lob:!0}),De==="downed"&&(ne.state!=="downed"&&ne.down(),ee()))}let Q=_.tobble,me=Q&&!Q.downed?V(Q.pos,P.lobTobbleDamage):0;me>0&&f.push({type:"tobbleHit",id:ve.id,from:[T[0],T[1],T[2]],result:Ql(Q,me,x)}),f.push({type:"lobLand",id:ve.id,pos:[T[0],T[1],T[2]],radius:ve.radius})}function oe(O,ne,j){for(let ve of c.step(O,e))ve.type!=="explode"?f.push(ve):ve.hostile?_e(ve,ne,j):Ie(ve.pos,ne,j)}function Oe(O){let ne=s.grenade.gravity,j=Math.max(O.flight,.2),ve=s.grenade.ballRadius,P=[(O.to[0]-O.from[0])/j,(ve-O.from[1]+.5*ne*j*j)/j,(O.to[2]-O.from[2])/j];c.throw(O.from,P,j+.3,{id:O.id,to:[O.to[0],0,O.to[2]],radius:s.boss.lobRadius,damage:s.boss.lobDamage})}function ze(){for(let O of f)O.type==="bossLob"&&Oe(O)}function $e(){let O=_.lobMarkers;O.length=0;let ne=_.boss;ne&&ne.alive&&ne.state==="lobWindup"&&O.push({pos:ne.lobTo,radius:s.boss.lobRadius,t:ne.stateT,windup:!0});for(let j of c.live)j.hostile&&O.push({pos:j.hostile.to,radius:j.hostile.radius,t:0,windup:!1})}function et(){let O=r();for(let ne of c.live)if(!(ne.fuse>O.diveWarn||ne.hostile))for(let j of y)!j.alive||j.state==="downed"||j.state==="executed"||j.state==="dive"||ne.rolled&&ne.rolled.has(j.id)||Math.hypot(j.pos[0]-ne.pos[0],j.pos[2]-ne.pos[2])>O.diveRadius||((ne.rolled||(ne.rolled=new Set)).add(j.id),i()<(j.kind==="trainer"?s.trainer.diveChance:O.diveChance)&&L1(j,ne.pos,x)&&!ne.barked&&(ne.barked=!0,U(j.id,"dive")))}let nt=O=>{let ne=O.point,j=r();return ne.kind==="tall"&&O.pop>0?[ne.pos[0]+ne.tangent[0]*ne.end*j.popShift*O.pop,ne.pos[1]+ne.tangent[1]*ne.end*j.popShift*O.pop]:ne.pos};function W(O){let ne=s.associate.radius,j=s.associate.height,ve=Q=>Q.kind==="trainer"?gd(s):Q.kind==="boss"?d1(s):ne,P=Q=>Q.kind==="trainer"?j*s.trainer.scaleH:Q.kind==="boss"?j*s.boss.scale:j,T=(Q,me,De)=>{if(Q.state==="executed"||Q.kind==="boss")return;let ae=En(e,Q.pos,[me,0,De],ve(Q),P(Q));Q.pos[0]=ae.pos[0],Q.pos[2]=ae.pos[2]},V=Q=>Q.state==="executed";for(let Q=0;Q<y.length;Q++){let me=y[Q];if(!me.alive)continue;for(let G=Q+1;G<y.length;G++){let ue=y[G];if(!ue.alive)continue;let he=ue.pos[0]-me.pos[0],we=ue.pos[2]-me.pos[2],Ee=Math.hypot(he,we),Re=ve(me)+ve(ue);if(Ee>=Re)continue;Ee<1e-6&&(he=1,we=0,Ee=1);let be=(Re-Ee)/2,ke=V(ue)?2:V(me)?0:1,xe=V(me)?2:V(ue)?0:1;T(me,-he/Ee*be*ke,-we/Ee*be*ke),T(ue,he/Ee*be*xe,we/Ee*be*xe)}let De=me.pos[0]-O.pos[0],ae=me.pos[2]-O.pos[2],de=Math.hypot(De,ae),Pe=ve(me)+s.move.radius;de<Pe&&(de<1e-6&&(De=1,ae=0,de=1),T(me,De/de*(Pe-de),ae/de*(Pe-de)))}let ce=_.tobble;if(ce){let Q=s.tobble.radius,me=s.tobble.height,De=(ue,he)=>{let we=En(e,ce.pos,[ue,0,he],Q,me);ce.pos[0]=we.pos[0],ce.pos[2]=we.pos[2]};for(let ue of y){if(!ue.alive)continue;let he=ue.pos[0]-ce.pos[0],we=ue.pos[2]-ce.pos[2],Ee=Math.hypot(he,we),Re=Q+ve(ue);if(Ee>=Re)continue;Ee<1e-6&&(he=1,we=0,Ee=1);let be=Re-Ee,ke=V(ue)||ue.point&&J1.has(ue.state)?1:.5;De(-he/Ee*be*ke,-we/Ee*be*ke),T(ue,he/Ee*be*(1-ke),we/Ee*be*(1-ke))}let ae=ce.pos[0]-O.pos[0],de=ce.pos[2]-O.pos[2],Pe=Math.hypot(ae,de),G=Q+s.move.radius;Pe<G&&(Pe<1e-6&&(ae=1,de=0,Pe=1),De(ae/Pe*(G-Pe),de/Pe*(G-Pe)))}for(let Q of y){if(!Q.alive||!Q.point||!J1.has(Q.state))continue;let me=nt(Q);if(Math.hypot(Q.pos[0]-me[0],Q.pos[2]-me[1])<=.3)continue;let De=Math.hypot(me[0]-O.pos[0],me[1]-O.pos[2])>=ne+s.move.radius-.001;_.tobble&&Math.hypot(me[0]-_.tobble.pos[0],me[1]-_.tobble.pos[2])<ne+s.tobble.radius-.001&&(De=!1);for(let ae of y)ae===Q||!ae.alive||!De||Math.hypot(me[0]-ae.pos[0],me[1]-ae.pos[2])<2*ne-.001&&(De=!1);if(De){Q.pos[0]=me[0],Q.pos[2]=me[1];continue}l.holds(Q.id)&&l.release(Q.id,_.now,s.director),Q.mustMove=!0,Q.pop=0,Q.blind=0,Q.state="seek",Q.stateT=0}}let Le=[null];function Ue(O,ne){let j=r(),ve=[0,0,0];Le[0]=_.tobble;for(let P=0;P<f.length;P++){let T=f[P];if(T.type!=="enemyShot")continue;if(T.accurate&&ne.downed&&T.target!=="tobble"){f.splice(P--,1);continue}let V=Ko(T.dir,T.spread,i,ve);if(T.target==="tobble"){let ce=_.tobble,Q=Rn(T.from,V,j.range,e,Le);if(ce&&!ce.downed&&(Q.kind==="head"||Q.kind==="body")){let me=Ql(ce,T.damage!==void 0?T.damage:j.damage,x);f.push({type:"tobbleHit",id:T.id,from:T.from,result:me})}f.push({type:"shotFx",from:T.from,to:Q.point,accurate:!0})}else if(T.accurate){let ce=Yy(T.from,V,j.range,e,O,s.combat),Q=ce.point;if(ce.kind==="head"||ce.kind==="body"){let me=T.damage!==void 0?T.damage:j.damage,De=ne.damage(me);f.push({type:"playerHit",id:T.id,from:T.from,amount:me,result:De}),De==="downed"&&(O.state!=="downed"&&O.down(),ee())}f.push({type:"shotFx",from:T.from,to:Q.slice(),accurate:!0})}else{let ce=Rn(T.from,V,j.range,e,[]);f.push({type:"shotFx",from:T.from,to:ce.point,accurate:!1})}}}_.targets=()=>y,_.freeSlot=Ae,_.step=(O,ne)=>{(!(O>0)||!Number.isFinite(O))&&(O=0),O=Math.min(O,r3),f.length=0;for(let V of p)f.push(V);p.length=0;let{m:j,health:ve}=ne;if(_.now+=O,x.now=_.now,x.aim=ne.aim,x.m=j,x.health=ve,!_.started&&j.pos[2]>t.trigger.z&&q(f),x.started=_.started,Se(j,ve),x.playerDowned=S.downed,S.downed){C()||ee();for(let V of y)V.role!=="revive"&&(V.role="hold");!E&&_.started&&U(H().id,"downed")}else _.started&&!_.clear&&Z(j,O);E=S.downed,_.started&&(ye(),He()),l.expire(_.now,s.director),x.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,oe(O,j,ve),et(),_.tobble&&($1(_.tobble,x,O),Kl(_.tobble,s.combat));let P=f.length;for(let V of y)O1(V,x,O);for(let V=P;V<f.length;V++){let ce=f[V];if(ce.type==="death")te(y.find(Q=>Q.id===ce.id));else if(ce.type==="bossSaunas")for(let Q of h.list)Ze(Q.id,f)}ze(),Ue(j,ve),re(j,ve),W(j);for(let V of y)na(V,s.combat,s);_.tobble&&Kl(_.tobble,s.combat),$e();let T=!!_.tobble&&_.tobble.downed&&ve.downed;return T&&!L&&f.push({type:"checkpoint"}),L=T,_.started&&!_.clear&&y.every(V=>!V.alive)&&h.allDone()&&(_.clear=!0,f.push({type:"clear"}),g||U(y[0].id,"clear"),_.tobble&&(W0(_.tobble,x),g||U("tobble","tobbleClear"))),f},_.hurt=(O,ne,j="body")=>Y(O,ne,j,p),_.bash=O=>{if(!O.alive||O.state==="executed"||O.state==="unused")return null;let ne=Y(O,s.melee.bashDamage,"bash",p);return ne==="hit"?(I1(O,x),"hit"):ne==="kill"?"kill":null},_.beginExecution=O=>D1(O,x),_.finishExecution=O=>{x.events=p;let ne=k1(O,x,"execute");return x.events=f,ne==="kill"&&te(O),ne},_.releaseExecution=O=>N1(O);function Ze(O,ne){let j=h.list.find(ve=>ve.id===O);return!j||j.state!=="dormant"?!1:(j.state="open",j.nextT=_.now+s.pad.interval,ne.push({type:"padOpen",id:O}),U(O,"padOpen",ne,!0),C()&&U("tobble","tobblePad",ne,!0),!0)}return _.openPad=O=>Ze(O,p),_.forceClear=()=>{_.boss&&_.boss.alive&&(E0(_.boss),Y(_.boss,1e6,"blast",p));for(let O of y)O.alive&&Y(O,1e6,"blast",p);for(let O of h.list)(O.state==="dormant"||O.state==="open")&&(O.state="closed");return!0},_.spawnRep=()=>{let O=Ae();if(!O)return null;let ne=h.list[0];return bd(O,ne?ne.pos:[0,0,0],x)},_.spawnTrainer=O=>{if(se()>=s.trainer.maxAlive)return null;let ne=Ae();if(!ne)return null;let j=h.list[0];return bd(ne,O||(j?j.pos:[0,0,0]),x,"trainer")},_.downRep=O=>{x.events=p;let ne=U0(O,x);return x.events=f,ne==="down"},_.hurtTobble=O=>{if(!_.tobble)return null;x.events=p;let ne=Ql(_.tobble,O,x);return x.events=f,ne},_.closePads=()=>{for(let O of h.list)(O.state==="dormant"||O.state==="open")&&(O.state="closed");return!0},_.readyBoss=()=>{_.boss&&_.boss.alive&&E0(_.boss)},_.reserved=d,_.reviveTobble=()=>{if(!_.tobble)return!1;x.events=p;let O=W0(_.tobble,x);return x.events=f,O&&Kl(_.tobble,s.combat),O},_.throwGrenade=(O,ne)=>c.throw(O,ne),_.reset=()=>{l.reset(),c.reset(),h.reset(),b=M(),y.forEach((O,ne)=>{I0(O,s.associate,s),ne>=v&&L0(O)}),R(),_.tobble=x.tobble=u()?_.tobble?H0(_.tobble):z0(t.tobble,s.tobble):null,L=!1,D=0,x.playerDowned=!1,f.length=0,p.length=0,_.lobMarkers.length=0,_.started=_.clear=!1,_.now=0,_.startT=0,_.kills=0,_.hideT=_.stayT=0,x.now=0,x.started=!1,x.aim=void 0,E=!1,N=!1;for(let O of y)na(O,s.combat,s)},_}function Pd(t,e,n){let i=n[0]-e[0],s=n[2]-e[2],r=Zu(t),o=Ku(t),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var t_=t=>Math.max(0,Math.min(1,t));function n_({hp:t,max:e,downed:n,downT:i,hits:s=[],now:r,fb:o=X.feedback}){let a=n?1:e>0?t_(1-t/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let d=o.hitFlashTime>0?t_(1-(r-h.t)/o.hitFlashTime):0;if(d<=0)continue;let u=Math.cos(h.angle),f=Math.sin(h.angle);l.top=Math.max(l.top,d*Math.max(0,u)),l.right=Math.max(l.right,d*Math.max(0,f)),l.bottom=Math.max(l.bottom,d*Math.max(0,-u)),l.left=Math.max(l.left,d*Math.max(0,-f))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!n,seconds:n?Math.ceil(Math.max(0,i)):0}}}var o3=Object.freeze({Rep:F.glorpPurple,PA:F.cream,Tobble:F.tobbleMint,Trainer:F.planet,Overlord:"#ffcf3a",Doc:F.cream}),Cs=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Tobble",text:e}))),Y0=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Trainer",text:e}))),ec=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Overlord",text:e}))),q0=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),trainerCharge:Y0("ONE MORE REP!","You're not quitting, you're just TIRED!","PAIN IS WEAKNESS LEAVING YOUR WALLET!","NO EXCUSES!"),trainerWindup:Y0("HUP!"),trainerDeath:Y0("\u2026tell my\u2026 macros\u2026"),bossIntro:ec("Doc Vex! Do come in. Your commitment is so valuable to us."),bossTeam:ec("Have you met our team?"),bossReturn:ec("Let us talk about retention. Again."),bossOffer:ec("One month free.","THREE months!","SIX MONTHS AND A TOWEL!"),bossOfferTobble:Cs("Doc, that's actually a good\u2014"),bossOfferDoc:Object.freeze([Object.freeze({speaker:"Doc",text:"No."})]),bossDeath:ec("Cancellation\u2026 is\u2026 a process\u2026"),tobbleRevive:Cs("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:Cs("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:Cs("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:Cs("Two more reps! I'm good!"),tobbleFlank:Cs("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:Cs("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:Cs("Ooh, you closed your rings!"),tobbleHeadshot:Cs("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function i_(t=()=>X.feedback){let e=1/0,n=0,i=null,s={},r=[],o=l=>{let c=q0[l],h=c[(s[l]||0)%c.length];return typeof h=="string"?"Rep":h.speaker};function a(l){let c=q0[l],h=(s[l]||0)%c.length;s[l]=h+1,i=typeof c[h]=="string"?{speaker:"Rep",text:c[h]}:c[h],n=t().barkTime,e=0}return{say(l,c=!1){return!q0[l]||!c&&e<t().barkGap?!1:c&&i&&n>0&&e<1e-9&&o(l)!==i.speaker?(r.push(l),!0):(a(l),!0)},tick(l){l>0&&(e+=l,n-=l,r.length&&e>=t().barkMinShow&&a(r.shift()))},current:()=>n>0&&i?{speaker:i.speaker,text:i.text,color:o3[i.speaker]||null}:null,reset(){e=1/0,n=0,i=null,r.length=0;for(let l of Object.keys(s))s[l]=0}}}var s_=4,a3=1.2,Gn=[0,0,0];function l3(){let t=(e,n,i,s,r)=>{let o=new mt(e,n,i).translate(0,s,0);o.deleteAttribute("uv");let a=new Ke(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new bt(c,3)),o};return Ot([t(.3,.16,.22,.08,F.cream),t(.34,.07,.26,.195,F.playerOrange)],!1)}function c3(t,e,n){return t.accurate&&e?(e(n),n):(n[0]=t.from[0],n[1]=t.from[1],n[2]=t.from[2],n)}function r_({scene:t,effects:e,sfx:n,fight:i,views:s,cam:r=null,hooks:o={}}){let a=new Map(i.enemies.map((I,E)=>[I.id,s[E]])),l=new Map(i.enemies.map(I=>[I.id,I])),c=new Map,h=[],d=new Ui(l3(),At({vertexColors:!0,rim:0}),s_);d.name="pickups",d.frustumCulled=!1,d.count=0,t.add(d);let u=new en,f=0,p=i_(),g=[],m=(I,E)=>Math.sin(Pd(I.yaw,I.pos,E)),v=(I,E)=>Math.min(1,6/Math.max(Math.hypot(E[0]-I.pos[0],E[2]-I.pos[2]),.001)),y=[0,0,0],M=[0,1,0],b=(I,E=1)=>(y[0]=I[0],y[1]=I[1]+E,y[2]=I[2],y);function w(I,E){let N=X.feedback,R=I.kind;if(I.boss){g.push({t:X.ending.deathDelay*.9,pos:[I.pos[0],I.pos[1],I.pos[2]]}),e.gel(b(I.pos,1.5),M,N.gelCount),n.play("kill",N.killVolume,m(E,I.pos)),o.marker&&o.marker("kill");return}if(R==="body"||R==="head")return;let C=b(I.pos),U=R==="execute"?N.killGelCount*2:R==="bleed"?N.gelCount:N.killGelCount;if(e.gel(C,M,U),R!=="bleed"){if(e.receipts(b(I.pos,1.2),N.receiptCount),L(I.pos),R==="tobble"){n.play("kill",N.killVolume*.5,m(E,I.pos));return}o.marker&&o.marker("kill"),n.play(R==="execute"?"finish":"kill",R==="execute"?N.bashVolume:N.killVolume,m(E,I.pos))}}let S=I=>{let E=i.pads.find(N=>N.id===I);return E?E.pos:[0,0,0]};function x(I){let E=null,N=1/0;for(let R of i.enemies){let C=Math.hypot(R.pos[0]-I[0],R.pos[2]-I[2]);C<N&&(N=C,E=R)}return E}function _(I,E){let N=X.feedback,R=X.associate;for(let C of I)if(C.type==="bark")p.say(C.key,!!C.force);else if(C.type==="padOpen")n.play("saunaOpen",N.saunaVolume,m(E,S(C.id)));else if(C.type==="padClosed")n.play("saunaClose",N.saunaVolume,m(E,S(C.id)));else if(C.type==="padSpawn"){let U=S(C.id);for(let H=0;H<4;H++)e.steam([U[0]+(H-1.5)*.25,.1,U[2]])}else if(C.type==="explode"){e.blast(C.pos);let U=Math.hypot(C.pos[0]-E.pos[0],C.pos[2]-E.pos[2]),H=Math.min(1,8/Math.max(U,.001));n.play("boom",N.boomVolume*Math.max(.4,H),m(E,C.pos)),r&&(r.kick(4*H,(Math.random()*2-1)*2*H),r.bump(H))}else if(C.type==="clank")n.play("clank",N.clankVolume*v(E,C.pos),m(E,C.pos));else if(C.type==="tobbleShot"){let U=i.tobble,H=o.tobbleView;H&&U&&U.pop>=.5?H.tip(Gn):(Gn[0]=C.from[0],Gn[1]=C.from[1],Gn[2]=C.from[2]);let ee=C.to[0]-Gn[0],q=C.to[1]-Gn[1],te=C.to[2]-Gn[2],Y=Math.hypot(ee,q,te)||1;e.flash(Gn,[ee/Y,q/Y,te/Y]),e.friendlyTracer(Gn,C.to),n.play("tobbleShot",N.tobbleShotVolume*v(E,C.from),m(E,C.from))}else if(C.type==="tobbleHit"){let U=i.tobble;U&&e.gel(U.chest,[C.from[0]-U.chest[0],.3,C.from[2]-U.chest[2]],4)}else if(C.type==="revived")n.play("revive",N.reviveVolume);else if(C.type==="cloneRevive"){let U=l.get(C.id);U&&n.play("revive",N.reviveVolume*.6*v(E,U.pos),m(E,U.pos))}else if(C.type==="down")o.marker&&o.marker("kill"),e.gel(b(C.pos),M,6),n.play("hit",N.hitVolume,m(E,C.pos));else if(C.type==="death")w(C,E);else if(C.type==="bossLob"){let U=l.get(C.id);n.play("throw",N.throwVolume,U?m(E,U.pos):0)}else if(C.type==="lobLand"){e.blast(C.pos),e.receipts(b(C.pos,.6),N.receiptCount);let U=Math.hypot(C.pos[0]-E.pos[0],C.pos[2]-E.pos[2]),H=Math.min(1,8/Math.max(U,.001));n.play("boom",N.boomVolume*Math.max(.4,H),m(E,C.pos)),r&&(r.kick(3*H,(Math.random()*2-1)*2*H),r.bump(H))}else if(C.type==="bossPhase")n.play(C.phase===2?"saunaOpen":"charge",C.phase===2?N.saunaVolume:N.chargeVolume),r&&r.bump(1.5);else if(C.type==="checkpoint")o.restart&&o.restart();else if(C.type==="telegraph"){c.set(C.id,C.time!==void 0?C.time:R.popTime+R.telegraphTime);let U=a.get(C.id),H=l.get(C.id);U&&U.glint(!0),H&&n.play("charge",N.chargeVolume,m(E,H.pos))}else if(C.type==="trainerSwing")n.play("bash",N.bashVolume*v(E,C.from),m(E,C.from));else if(C.type==="shotFx"){let U=x(C.from),H=U&&a.get(U.id);c3(C,H?H.tip:null,Gn);let ee=C.to[0]-Gn[0],q=C.to[1]-Gn[1],te=C.to[2]-Gn[2],Y=Math.hypot(ee,q,te)||1;e.enemyFlash(Gn,[ee/Y,q/Y,te/Y]),e.enemyTracer(Gn,C.to);let K=Math.hypot(C.from[0]-E.pos[0],C.from[2]-E.pos[2]);n.play("blaster",N.blasterVolume*Math.min(1,8/Math.max(K,.001)),m(E,C.from))}}function L(I){h.length>=s_&&h.shift(),h.push({pos:[I[0],I[1],I[2]]}),D()}function D(){d.count=h.length;for(let I=0;I<h.length;I++)u.position.set(h[I].pos[0],h[I].pos[1],h[I].pos[2]),u.rotation.set(0,f*a3+I,0),u.updateMatrix(),d.setMatrixAt(I,u.matrix);d.instanceMatrix.needsUpdate=!0}return{handle:_,forceBark:I=>p.say(I,!0),bark:()=>p.current(),pan:m,near:v,tick:I=>p.tick(I),update(I){if(I>0){f+=I;for(let E=g.length-1;E>=0;E--){if(g[E].t-=I,g[E].t>0)continue;let N=g.splice(E,1)[0],R=X.feedback;e.gel(b(N.pos,1.5),M,R.killGelCount*3),e.receipts(b(N.pos,2),R.receiptCount*3),n.play("finish",R.bashVolume),r&&r.bump(2)}for(let[E,N]of c)if(N-I<=0){c.delete(E);let R=a.get(E);R&&R.glint(!1)}else c.set(E,N-I);h.length&&D()}},addPickup:L,collect(I,E){let N=0;for(let R=h.length-1;R>=0;R--)Math.hypot(I[0]-h[R].pos[0],I[2]-h[R].pos[2])<=E&&(h.splice(R,1),N++);return N&&D(),N},count:()=>h.length,pickups:()=>h.map(I=>I.pos.slice()),reset(){h.length=0,d.count=0,d.instanceMatrix.needsUpdate=!0,c.clear(),p.reset(),g.length=0}}}var ra=Object.freeze([Object.freeze({id:"cancelled",tone:"big",lines:Object.freeze(["MEMBERSHIP CANCELLED."])}),Object.freeze({id:"email",tone:"mail",lines:Object.freeze(["We're sorry to see you go!","Your cancellation is confirmed.","A $49.99 cancellation fee has been applied.","Come back anytime \u2014 50% off your first month!"])}),Object.freeze({id:"tobble",tone:"talk",lines:Object.freeze(['Tobble: "Ooh, fifty percent."',"Doc reloads."])}),Object.freeze({id:"thanks",tone:"big",lines:Object.freeze(["GYMS OF WAR \u2014 thanks for playing","We miss you! \u2014 GlorpFit"])})]);function $0(t,e,n){if(!e)return!1;let i=Math.max(e.x0-t[0],0,t[0]-e.x1),s=Math.max(e.z-t[2],0);return Math.hypot(i,s)<=n}function o_({tuning:t=X}={}){let e=()=>t.ending,n="off",i=0,s=0,r=0,o=l=>l===0?e().card1Time:l===1?e().card2Time:l===2?e().card3Time:1/0;return{get state(){return n},get card(){return r},get cardCount(){return ra.length},get hold(){return n==="desk"?Math.min(1,s/Math.max(e().holdTime,1e-6)):0},get locked(){return n==="cards"||n==="done"},get lit(){return n==="desk"||n==="cards"||n==="done"},start(){return n!=="off"?!1:(n="slump",i=0,s=0,r=0,!0)},reset(){n="off",i=0,s=0,r=0},step(l,c={}){let h=[];return!(l>0)||n==="off"||n==="done"||(i+=l,n==="slump"?i>=e().deathDelay&&(n="desk",i=0,s=0,h.push({type:"deskLit"})):n==="desk"?(s=c.atDesk&&c.hold?s+l:0,s>=e().holdTime-1e-9&&(n="cards",i=0,r=0,h.push({type:"cancelled"},{type:"card",index:0}))):n==="cards"&&(r===ra.length-1?c.press&&i>=e().finalLock&&(n="done",h.push({type:"toTitle"})):(i>=o(r)||c.press&&i>=e().skipLock)&&(r++,i=0,h.push({type:"card",index:r})))),h}}}var Z0=.05;function h3({locked:t,device:e,panelOpen:n}){return!!(t||e==="pad"||n)}function a_(t){return`${t.gap}|${t.endInset}|${t.minLength}`}function u3(t){if(t&&t.has("room"))return{name:"greyRoom",jumped:!1};let e=t&&t.get("arena");return e&&kn.includes(e)?{name:e,jumped:!0}:{name:kn[0],jumped:!1}}function d3(t,e,{downed:n=!1,busy:i=!1}={}){return n&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(n||i)&&(t.fire=!1),t}var f3=2e3,p3=500,m3=500,g3=new Set(["bossLob","lobLand","bossPhase","enemyShot","playerHit","telegraph","death","clear","bark","down","explode","padOpen","padClosed","padSpawn","tobbleShot","tobbleHit","revived","checkpoint"]);function v3(){try{return window.localStorage||null}catch{return null}}function l_({canvas:t,gl:e,params:n}){let i=fu(t,e),s=i.renderer,r=du(t),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=bx();l.panelOpen=c.isOpen;let h=new br,d=new Sn(X.camera.fov,1,.05,100),u=pu();h.add(u.mesh);let f=u3(n),p=mx({storage:f.name==="greyRoom"?null:v3()}),g=null,m="",v=null,y=null,M=[],b={pos:[0,0,0],yaw:0},w=[],S=[],x=null,_=[],L=new Map,D=null,I=null,E=null,N=null,R=null,C=null,U=[],H=()=>Ax(M,{...Ex(),exclude:v.coverExclude}),ee=a_(X.cover),q=[],te=0,Y=!1,K=Fx({boxes:M,spawn:[0,0,0],coverEdges:[],onAction(B){C&&C.onAction(B)},onState(B,Me){q.push({state:B,from:Me,t:te,tapped:Y,auto:B==="coverSlide"&&!Y&&(Me==="move"||Me==="sprint")}),q.length>f3&&q.shift()},onStep(B){Z.dip(X.feedback.stepDip),Ae.play("step",X.feedback.stepVolume*(B.sprint?1.25:1))}}),Se=py(K);h.add(Se.group);let Z=Zv(),ye=Nu(),Ae=Bx({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),He=zx(),se=o_(),Ne=!1,fe=Vx(),ge=jx(h),Ce=ey(document.body),re=Ho(1),ie=Wy(),Te=Oy(),Ie=!1,_e=null,oe=0,Oe={restart:()=>{Ie=!0},marker:B=>{_e=B,oe=X.feedback.killMarkerTime},tobbleView:null};function ze(){!x||R===x.tobble||(N&&(g.remove(N.group),Up(N.group)),N=x.tobble?Ay(x.tobble):null,N&&g.add(N.group),R=x.tobble,Oe.tobbleView=N)}function $e(){g&&(Up(g),g=null,N=null,R=null,Oe.tobbleView=null)}function et(B){$e(),m=B,v=B==="greyRoom"?Bu:ux[B],g=new ft,g.name=`arena-${B}`,h.add(g),y=ex(v),g.add(y.group),M=y.boxes,b=v.spawn,K.boxes=M,K.coverEdges=H(),w=(v.dummies||[]).map(Me=>{let Xe=qx(Me),_t=ty(Xe);return g.add(_t.group),{dummy:Xe,view:_t,wasAlive:!0}}),S=w.map(Me=>Me.dummy),x=B==="greyRoom"?null:e_({level:v,boxes:M,edges:H(),rand:Ho(4242)}),_=x?x.enemies.map(Me=>{let Xe=_y(Me);return g.add(Xe.group),Xe}):[],L=new Map(x?x.enemies.map((Me,Xe)=>[Me,_[Xe]]):[]),D=x?hy(g):null,I=x?Ry(g,x.pads,ge):null,E=x?r_({scene:g,effects:ge,sfx:Ae,fight:x,views:_,cam:Z,hooks:Oe}):null,ze(),C=x?Vy({mover:K,fight:x,arsenal:fe,bag:Te,cam:Z,sfx:Ae,effects:ge,views:_,health:ie,playerView:Se,grenadeView:D,boxes:M,hooks:Oe}):null,U=x?x.targets():S,y.setGateOpen(!1,!0),nt=!1,se.reset(),y.setCancelLit(!1)}let nt=!1,W=[],Le=[],Ue={pos:[0,0,0],yaw:0},Ze=[],O="-",ne="-",j=null,ve=null,P=0,T=1,V=[],ce={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},Q=[0,0,0],me=0,De=[0,0,0],ae=null,de=!1,Pe=null,G=!1,ue=!1,he=!1,we={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1,melee:!1},Ee={reload:!1,weapon:null,fire:!1,interact:!1,melee:!1},Re={melee:!1,interact:!1},be={melee:!1,grenade:!1,interact:!1},ke={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1,grenade:!1,interactHeld:!1},xe={weapon:null,reload:!1,fire:!1,firePressed:!1},Ge=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function Je(){let B=i.resize();d.aspect=B.aspect,d.updateProjectionMatrix()}Je(),window.addEventListener("resize",Je),t.addEventListener("click",()=>r.requestLock());let Fe=()=>{ye.reset(),He.reset()};window.addEventListener("blur",Fe),document.addEventListener("pointerlockchange",()=>{r.isLocked()||Fe()});let rt=()=>Ae.unlock();window.addEventListener("pointerdown",rt);let xt=()=>{Ne=!0};window.addEventListener("keydown",xt),window.addEventListener("pointerdown",xt),window.addEventListener("keydown",rt),window.addEventListener("keydown",B=>{B.repeat||hp(B.target)||(B.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):B.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function Dt(){ie.reset(),fe.reset(),Te.reset(),oa(b.pos,b.yaw),j=null,ye.reset(),He.reset(),Z.recenter(),ge.clear(),V.length=0,W.length=0,_e=null,ve=null,oe=0,P=0,Ie=!1}function Gt(){x&&x.reset(),Dt(),E&&E.reset();for(let B of _)B.reset();x&&(C.reset(),D.reset(),I.reset(),ze(),N&&N.reset()),p.restart(),y.setGateOpen(!1,!0),nt=!1,se.reset(),y.setCancelLit(!1)}function Nt(B){et(B),Dt(),Z.snap(b.pos,b.yaw,"normal",1),nn=B==="greyRoom"?0:X.run.hoursTime}let nn=0;function Mn(){if(x.boss){se.start();return}p.markClear()&&!nt&&(nt=!0,y.setGateOpen(!0),Ae.play("saunaOpen",X.feedback.saunaVolume))}function zt(){K.state!=="downed"&&K.down(),fe.cancelReload(),Ae.play("downed",X.feedback.hurtVolume),E&&E.forceBark("downed")}function Vn(B){let Me=Ne;if(Ne=!1,se.state==="off")return;let Xe=v.overlord;for(let _t of se.step(B,{atDesk:!ie.downed&&$0(K.pos,Xe&&Xe.desk,X.ending.deskReach),hold:be.interact,press:Me}))si(_t),_t.type==="deskLit"?(y.setCancelLit(!0),Ae.play("saunaOpen",X.feedback.saunaVolume)):_t.type==="cancelled"?Ae.play("clear",X.feedback.killVolume):_t.type==="toTitle"&&Ii()}function Ii(){if(typeof l.toTitle=="function"){l.toTitle();return}p.newRun(),Nt(kn[0])}function si(B){Le.push({t:te,type:B.type,id:B.id||null,accurate:!!B.accurate,hit:B.type==="playerHit",key:B.key||null,kind:B.kind||null}),Le.length>m3&&Le.shift()}function ns(B){let Me=X.feedback;Ue.pos[0]=K.pos[0],Ue.pos[1]=K.pos[1],Ue.pos[2]=K.pos[2],Ue.yaw=Z.yaw;let Xe=x.step(B,{m:K,health:ie,aim:{lens:sn.pos,dir:sn.dir,active:!!j&&j!=="blind"||K.grenadeAim}});E.handle(Xe,Ue);for(let st of Xe)if(g3.has(st.type)&&si(st),st.type==="playerHit"){let ct=Pd(Z.yaw,K.pos,st.from);W.push({t:te,angle:ct});let Qt=Math.random()*2*Math.PI;Z.kick(Me.hitKick*Math.cos(Qt),Me.hitKick*Math.sin(Qt)),Ae.play("hurt",Me.hurtVolume,Math.sin(ct)),C.onPlayerHit(),st.result==="downed"&&zt()}else st.type==="clear"&&(Ae.play("clear",Me.killVolume),Mn());for(;W.length&&te-W[0].t>Me.hitFlashTime;)W.shift();let _t=ie.update(B,{standIn:!x.tobble});if(_t==="revived"&&K.revive(),_t==="bleedOut"||Ie){Gt();return}let gt=ie.downed?0:E.collect(K.pos,X.combat.pickupRadius);gt&&(fe.addReserve("regret",gt*X.associate.ammoDrop),Ae.play("pickup",Me.pickupVolume))}function is(){let B=Vu[p.arena];if(v.boss){let Me=x.boss;return se.state==="slump"?"The Membership Overlord has fallen":se.state==="desk"?"Cancel your membership at the desk":se.locked?"":!Me||!x.started?B:Me.invuln?`Invulnerable! ${Wr("sauna",r.device())}`:`${B}: shoot the Overlord. Head shots count double`}return x.clear?p.gateOpen?`${B}: clear \u2014 head for the GO gate`:`${B}: set complete`:x.pads.some(Me=>Me.state==="open")?Wr("sauna",r.device()):x.started?p.arena==="turnstiles"?"Get past the front desk":`${B}: clear the room`:"Walk in"}let dr="THE MEMBERSHIP OVERLORD";function ss(){let B=x&&x.boss;return!B||!x.started||!B.alive?null:{name:dr,fraction:B.health/X.boss.health,phase:B.phase,invuln:B.invuln,hint:B.invuln?"INVULNERABLE \u2014 close the Spawn Saunas":""}}function fr(){if(se.state!=="cards"&&se.state!=="done")return null;let B=ra[Math.min(se.card,ra.length-1)];return{card:se.card,lines:B.lines,tone:B.tone,final:se.card===ra.length-1}}function oa(B,Me){K.place(B,Me),Z.snap(B,Me,Qp(K),Fr(K)),me=K.slams}let sn={pos:[0,0,0],dir:[0,0,1],fov:70},pr="normal",aa=1,la=0,ca=0,mr=0,k=0,$=0,pe=0,le=0,J=window.__cr;J.stats=()=>({fps:la,ms:ca,calls:$,tris:pe,scale:i.scale(),characters:1+_.length+(N?1:0)}),J.player=()=>{let B=K.cover;return{pos:K.pos.slice(),state:K.state,speed:K.speed(),facing:K.facing,entries:K.entries,cover:B?{id:B.edge.id,kind:B.edge.kind,t:B.t,length:B.edge.length,pop:B.pop,exposed:B.exposed}:null,slams:K.slams,steps:K.steps,blind:B?B.blind:0,firing:!!K.firing}},J.gun=()=>{let B=fe.current(),Me=fe.ammo[B],Xe=fe.reload,_t=X.weapons[B];return{id:B,slot:fe.slot,mag:Me.mag,reserve:Me.reserve,boost:Me.boost,reload:Xe?{u:Xe.t/Math.max(_t.reloadTime,X.combat.minReloadTime),press:Xe.press}:null,switching:fe.switching>0,spread:fe.spreadOf(j||"hip"),stance:j}},J.dummies=()=>S.map(B=>({id:B.id,health:B.health,alive:B.alive,pos:B.pos.slice()})),J.level=()=>v.name||m,J.run=()=>({arena:p.arena,index:p.index,checkpoint:p.checkpoint,phase:p.phase,cleared:p.cleared,gateOpen:p.gateOpen,fade:p.fade,saved:p.saved,hours:nn>0?kp(p.checkpoint):null}),J.gate=()=>v.exit?{pos:v.exit.pos.slice(),yaw:v.exit.yaw,w:v.exit.w,open:nt,openness:y.gate?y.gate.openness():0}:null,J.go=B=>kn.includes(B)?(p.goTo(Op(B)),Nt(B),!0):!1,J.clearArena=()=>x?x.forceClear():!1,J.gpu=()=>{let B=s.info;return{geometries:B.memory.geometries,textures:B.memory.textures,programs:(B.programs||[]).length,calls:$,tris:pe}},J.boss=()=>{let B=x&&x.boss;return B?{state:B.state,phase:B.phase,invuln:B.invuln,health:B.health,alive:B.alive,pos:B.pos.slice(),pop:B.pop,saunasOpen:B.saunasOpen,markers:x.lobMarkers.map(Me=>({pos:Me.pos.slice(),radius:Me.radius}))}:null},J.ending=()=>({state:se.state,card:se.card,hold:se.hold,lit:se.lit}),J.hurtBoss=(B,Me="body")=>{let Xe=x&&x.boss;return Xe?x.hurt(Xe,B,Me):null},J.closePads=()=>x?x.closePads():!1,J.bossReady=()=>x&&x.boss?(x.readyBoss(),!0):!1,J.fight=()=>x?{started:x.started,clear:x.clear,tokens:x.tokens.held(),pickups:E.count(),pickupPos:E.pickups(),enemies:x.enemies.filter(B=>B.state!=="unused").map(B=>({id:B.id,slot:x.enemies.indexOf(B),kind:B.kind||"associate",state:B.state,health:B.health,alive:B.alive,pos:B.pos.slice(),holds:x.tokens.holds(B.id),role:B.role,point:B.point?B.point.index:null,pop:B.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},J.tobble=()=>{let B=x&&x.tobble;return B?{state:B.state,hp:B.hp,downed:B.downed,pos:B.pos.slice(),point:B.point?B.point.index:null}:null},J.pads=()=>x?x.pads.map(B=>({id:B.id,state:B.state,spawned:B.spawned,alive:B.alive})):[],J.grenades=()=>({count:Te.count,live:x?x.grenades.live.map(B=>({pos:B.pos.slice(),fuse:B.fuse})):[]}),J.aimThrow=(B,Me)=>C?C.aimThrow(B,Me):!1,J.hurtTobble=B=>x?x.hurtTobble(B):null,J.spawnTrainer=B=>{let Me=x&&x.spawnTrainer(B);return Me?Me.id:null},J.downRep=B=>{let Me=x&&x.enemies.find(Xe=>Xe.id===B);return!!Me&&x.downRep(Me)},J.openPad=B=>x?x.openPad(B):!1,J.spawnRep=()=>{let B=x&&x.spawnRep();return B?B.id:null},J.health=()=>({hp:ie.hp,max:X.health.max,downed:ie.downed,downT:ie.downT}),J.hurt=B=>{ie.damage(B)==="downed"&&zt()},J.god=B=>{X.health.godMode=B?1:0},J.fightLog=()=>Le.map(B=>({...B})),J.clearFightLog=()=>{Le.length=0},J.restart=()=>Gt(),J.shots=()=>Ze.map(B=>({...B})),J.clearShots=()=>{Ze.length=0},J.setGun=(B,Me)=>fe.set(B,Me),J.look=(B,Me)=>{Z.yaw=B,Z.pitch=Me},J.camera=()=>{let B=sn;return{pos:B.pos.slice(),fov:B.fov,inside:Xo(M,B.pos,.1),mode:pr,side:aa,yaw:Z.yaw,pitch:Z.pitch}},J.transitions=()=>q.map(B=>({...B})),J.clearTransitions=()=>{q.length=0},J.coverTarget=()=>{let B=Pe||{moveX:ae?ae.moveX:0,moveY:ae?ae.moveY:0},Me=Bl(K.coverEdges,M,K.pos,jp(K,{moveX:B.moveX||0,moveY:B.moveY||0,camYaw:Z.yaw},[0,0]),Z.yaw,X.cover,X.move.radius);return Me?{id:Me.edge.id,kind:Me.edge.kind,dist:Me.dist}:null},J.place=B=>{let Me=B==="spawn"?b:v.features[B];Me&&oa(Me.pos,Me.yaw)},J.at=(B,Me,Xe=0)=>oa([B,0,Me],Xe),J.drive=B=>{if(!B){G?ue=!0:Pe=null;return}B.fire&&!(Pe&&Pe.fire)&&(Ee.fire=!0),B.melee&&!(Pe&&Pe.melee)&&(Ee.melee=!0),Pe=B,ue=!1,B.tap&&(G=!0),B.reload&&(Ee.reload=!0),B.interact&&(Ee.interact=!0),B.weapon&&(Ee.weapon=B.weapon)};function We(B){if(Pe){ke.moveX=Pe.moveX||0,ke.moveY=Pe.moveY||0,ke.sprint=!!Pe.sprint,ke.aim=!!Pe.aim,ke.tap=G;let Me=He.update(!!Pe.fire,Ee.fire,!0);Ee.fire=!1,ke.fire=Me.fire,xe.fire=Me.fire,xe.firePressed=Me.firePressed,xe.reload=Ee.reload,xe.weapon=Ee.weapon,Ee.reload=!1,Ee.weapon=null,be.melee=!!Pe.melee,be.grenade=!!Pe.grenade,be.interact=!!Pe.interactHeld,G&&(G=!1,ue&&(Pe=null,ue=!1))}else{let Me=ae.held;ke.moveX=ae.moveX,ke.moveY=ae.moveY,ke.tap=ye.update(Me.cover,we.cover,B,X.move.tapMax),ke.sprint=Me.sprint||ye.holding(),ke.aim=Me.aim;let Xe=He.update(Me.fire,we.fire,!0);ke.fire=Xe.fire,xe.fire=Xe.fire,xe.firePressed=Xe.firePressed,xe.reload=we.reload,xe.weapon=we.weapon,be.melee=Me.melee,be.grenade=Me.grenade,be.interact=Me.interact}return Re.interact=we.interact||Ee.interact,Re.melee=we.melee||Ee.melee,ke.grenade=be.grenade,ke.interactHeld=be.interact,we.cover=!1,we.fire=!1,we.reload=!1,we.weapon=null,we.interact=!1,we.melee=!1,Ee.interact=!1,Ee.melee=!1,ke.camYaw=Z.yaw,Y=ke.tap,ke}let je=B=>B.toFixed(1);function Ve(){let B=K.cover;if(B)return`cover: ${B.edge.kind} ${B.edge.id}  t ${B.t.toFixed(2)}/${B.edge.length.toFixed(2)}  pop ${B.pop.toFixed(2)}`;let Me=J.coverTarget();return Me?`tap grabs: ${Me.kind} ${Me.dist.toFixed(1)} m`:"tap grabs: nothing"}function Ye(){let B=J.gun(),Me=B.id;return`gun: ${Ju[Me].name} ${B.mag}/${X.weapons[Me].infiniteReserve>0?"\u221E":B.reserve}  ${B.stance||"-"}  spread ${B.spread.toFixed(1)}`}function it(){let B=r.padStatus(),Me=[x?`GYMS OF WAR \u2014 ${Vu[p.arena].toUpperCase()}`:"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];if(x&&Me.push("E / X: hold to renew your membership when downed, another set when clear","F / B: tap bash, hold rev Cheat Day (The Regret)   G / LB: hold to aim a kettlebell, release to throw   E / X: finish a downed Rep, hold to revive Tobble"),Me.push("Sound starts after a click or key","",`${K.state}   ${K.speed().toFixed(2)} m/s`,Ve(),Ye()),x){Me.push(`fight: ${x.enemies.filter(gt=>gt.alive).length}/${x.enemies.filter(gt=>gt.state!=="unused").length}  tokens ${x.tokens.held().join(",")||"-"}  hp ${ie.hp.toFixed(0)}`),Me.push(`health: ${ie.hp.toFixed(0)}/${X.health.max}  ${ie.downed?`downed ${ie.downT.toFixed(1)}`:"-"}`);let Xe=x.tobble,_t=x.pads[0];Me.push(`tobble: ${Xe?`${Xe.state} hp ${Xe.hp.toFixed(0)}`:"off"}`,`sauna: ${_t?`${_t.state} ${_t.spawned}/${X.pad.total}`:"-"}   kettlebells ${Te.count}`)}else Me.push(`dummies: ${S.filter(Xe=>Xe.alive).length}/${S.length}  last: ${O} ${ne}`);Me.push(`${Math.round(la)} fps   ${je(ca)} ms   scale ${i.scale()}`,`${$} draw calls   ${pe} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${B}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=Me.join(`
`)}let ht=B=>X.feedback[B];function Tt(B){B.type==="shot"?Jt(B):B.type==="reloadStart"?Ae.play("magOut",ht("reloadVolume")):B.type==="reloadPress"?(Ae.play(B.result,ht("reloadVolume")),ve=B.result,P=0):B.type==="reloadDone"?Ae.play("magIn",ht("reloadVolume")):B.type==="dry"&&Ae.play("dry",ht("reloadVolume"))}function tt(B,Me){$x(B.dummy,Me),B.dummy.alive&&!B.wasAlive&&B.view.respawn(),B.wasAlive=B.dummy.alive}let Et=[0,0,0];function Jt(B){let Me=X.weapons[B.id],Xe=K.cover?K.cover.edge:null;ju(K,j,Z.yaw,X.combat,Q);let _t=Xx({lens:sn.pos,view:sn.dir,muzzle:Q,spreadDeg:B.spread,range:Me.range,boxes:M,targets:U,ignoreBox:Xe?Xe.boxIndex:-1,rand:re,aimed:j==="aim"}),gt=_t.hit,st=gt.target,ct=null;st&&(ct=x?x.hurt(st,i0(Me,gt.kind,B.mult),gt.kind==="head"?"head":"body"):Zx(st,i0(Me,gt.kind,B.mult))),O=gt.kind,ne=st?st.id:"-",Ze.push({t:te,kind:gt.kind,target:st?st.id:null,point:gt.point.slice(),stance:j}),Ze.length>p3&&Ze.shift();let Qt=[_t.dir[0],_t.dir[1],_t.dir[2]];if(V.push({id:B.id,from:Q.slice(),dir:Qt,hit:gt,target:st,result:ct}),ct==="kill"&&!x){let Ht=w.find(Xt=>Xt.dummy===st);Ht.wasAlive=!1}}function Ft(B){let Me=X.weapons[B.id],Xe=X.feedback,_t=Se.gunTip(Et);Z.kick(Me.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*Me.kickYaw),ge.flash(_t,B.dir),ge.tracer(_t,B.hit.point),Ae.play(B.id==="regret"?"rifle":"pistol",Xe.shotVolume);let gt=[-B.dir[0],-B.dir[1],-B.dir[2]];if(B.hit.kind==="world")ge.spark(B.hit.point,gt);else if(B.target){let st=x?L.get(B.target):w.find(ct=>ct.dummy===B.target).view;B.result==="kill"?(x?(st.death(),E.addPickup(B.target.pos)):st.burst(),ge.gel(B.hit.point,gt,Xe.killGelCount),ge.receipts(B.target.pos.map((ct,Qt)=>Qt===1?ct+1.2:ct),Xe.receiptCount),_e="kill",oe=Xe.killMarkerTime,Ae.play("kill",Xe.killVolume)):B.result==="down"?(ge.gel(B.hit.point,gt,Xe.gelCount),_e="kill",oe=Xe.killMarkerTime,Ae.play("hit",Xe.hitVolume)):(x||st.hit(B.hit.kind),ge.gel(B.hit.point,gt),_e=B.hit.kind,oe=Xe.hitMarkerTime,Ae.play(B.hit.kind==="head"?"head":"hit",Xe.hitVolume))}}let kt=uu({before(B){if(ae=r.poll(),Object.values(ae.pressed).some(Boolean)&&(Ne=!0),de=!!Pe||G||h3({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=de,!de){ye.reset(),He.reset(),we.cover=!1,we.fire=!1,we.reload=!1,we.weapon=null,we.interact=!1,we.melee=!1;return}let Xe=Math.min(B,Z0);he=ae.held.aim||Pe&&Pe.aim,Z.look(ae.lookDX,ae.lookDY,ae.lookX,ae.lookY,Xe,he,T),ae.pressed.cover&&(we.cover=!0),ae.pressed.fire&&(we.fire=!0),ae.pressed.reload&&(we.reload=!0),ae.pressed.interact&&(we.interact=!0),ae.pressed.melee&&(we.melee=!0);for(let[_t,gt]of Ge)ae.pressed[_t]&&(we.weapon=gt)},step(B){if(!de)return;let Me=a_(X.cover);Me!==ee&&(ee=Me,K.coverEdges=H()),te+=B;let Xe=We(B);if(d3(Xe,xe,{downed:!!x&&ie.downed,busy:fe.reload!==null||fe.switching>0}),(p.fading||se.locked)&&(Xe.moveX=0,Xe.moveY=0,Xe.tap=!1,Xe.sprint=!1,Xe.fire=!1,Xe.grenade=!1,xe.fire=!1,xe.firePressed=!1),C){let gt=se.locked;C.step(B,{meleeHeld:be.melee&&!gt,meleePressed:Re.melee&&!gt,grenadeHeld:be.grenade&&!gt,interactHeld:be.interact&&!gt,interactPressed:Re.interact&&!gt,device:r.device(),camYaw:Z.yaw,camPitch:Z.pitch}),C.busy()&&(xe.fire=!1,xe.firePressed=!1,Xe.fire=!1)}K.update(Xe,B),j=Wx(K);let _t=fe.update(xe,j,B);for(let gt of _t)Tt(gt);x&&(E.tick(B),ns(B),Vn(B));for(let gt of w)tt(gt,B);Kx(K.pos,v.ammoCrates,X.combat.crateRadius)&&(fe.refill(),Te.refill()),Ie&&Gt(),x&&nt&&!p.fading&&px(v.exit,K.pos)&&p.touchGate()&&Ae.play("clear",X.feedback.killVolume)},render(B,Me){let Xe=de?Math.min(Me,Z0):0;for(let mn of p.step(Math.min(Me,Z0)))mn.type==="swap"&&Nt(mn.to);nn>0&&de&&(nn=Math.max(0,nn-Xe)),wn(p.fade),ce.shot=V.length>0,ce.dir=sn.dir,ce.stance=j,ce.weapon=fe.current(),ce.kettlebell=!!C&&C.armed(),Se.update(B,Xe,ce);for(let mn of w)mn.view.update(Xe);for(let mn of _)mn.update(B,Xe);E&&(E.update(Xe),D.update(x.grenades.live,B,Xe,x.lobMarkers),I.update(Xe),N&&(N.group.visible=!!x.tobble,x.tobble&&N.update(B,Xe)));let _t=K.pos,gt=K.prevPos;for(let mn=0;mn<3;mn++)De[mn]=gt[mn]+(_t[mn]-gt[mn])*B;K.slams>me&&(me=K.slams,Z.bump(),Ae.play("thud",X.cover.thudVolume));let st=Qp(K);if(st==="aim"&&pr!=="aim"){let mn=K.cover?K.cover.edge:null;Z.hold(Rn(sn.pos,sn.dir,X.camera.holdRange,M,U,{ignoreBox:mn?mn.boxIndex:-1}).point)}pr=st,aa=Fr(K);let ct=Z.update(Xe,{target:De,mode:pr,side:aa},M);sn.pos[0]=ct.pos[0],sn.pos[1]=ct.pos[1],sn.pos[2]=ct.pos[2],sn.fov=ct.fov,sn.dir[0]=ct.dir[0],sn.dir[1]=ct.dir[1],sn.dir[2]=ct.dir[2],d.fov!==ct.fov&&(d.fov=ct.fov,d.updateProjectionMatrix()),Se.fadeHeadFor(ct.pos,X.camera.headHideDist,X.camera.headHideMargin),d.position.set(ct.pos[0],ct.pos[1],ct.pos[2]),d.lookAt(ct.pos[0]+ct.dir[0],ct.pos[1]+ct.dir[1],ct.pos[2]+ct.dir[2]);for(let mn of V)Ft(mn);V.length=0,ge.update(Xe),oe-=Xe,oe<=0&&(_e=null),ve&&(P+=Xe,P>=X.feedback.reloadResultTime&&(ve=null));let Qt=K.cover?K.cover.edge:null,Ht=Rn(sn.pos,sn.dir,100,M,U,{ignoreBox:Qt?Qt.boxIndex:-1});T=r.device()==="pad"&&Ht.target?X.look.pad.assist:1;let Xt=!!K.cover&&K.cover.pop<.5,gi=j||(K.cover&&(K.cover.pop>0||Xt)?"aim":"hip"),ha=x?n_({hp:ie.hp,max:X.health.max,downed:ie.downed,downT:ie.downT,hits:W,now:te}):null;Ce.render(Qx({arsenal:fe,stance:j,firing:ke.fire,covered:Xt,device:r.device(),spreadDeg:fe.spreadOf(gi),fov:d.fov,viewportH:t.clientHeight||window.innerHeight,marker:_e,reloadFlash:ve,face:ha,bark:E?E.bark():null,objective:x?is():"",boss:ss(),ending:fr(),banner:x?ie.downed?{title:`You've hit a plateau ${ha.downed.seconds}`,hint:Wr(x.tobble&&!x.tobble.downed?"giveUpTobble":"giveUp",r.device()),hold:C.giveUpFrac()}:x.clear&&!x.boss?{title:"SET COMPLETE",hint:`${p.gateOpen?"Head for the GO gate!  ":"Rest 60 seconds!  "}${r.device()==="pad"?"X":"E"} for another set`}:null:null,grenades:x?Te.count:null,action:se.state==="desk"&&$0(K.pos,v.overlord&&v.overlord.desk,X.ending.deskReach)?{text:Wr("cancel",r.device()),hold:se.hold}:C?C.prompt():null,hours:nn>0?kp(p.checkpoint):""})),u.update(performance.now()/1e3),y.update(Xe),s.render(h,d),$=s.info.render.calls,pe=s.info.render.triangles,mr++,k+=Me,k>=1&&(la=mr/k,ca=k/mr*1e3,mr=0,k=0),le+=Me,le>=.1&&(le=0,it()),i.frameDone(Me*1e3)}});n&&n.has("tune")&&c.toggle();let rn=document.createElement("div");rn.id="cr-fade",document.body.appendChild(rn);let Qe=-1;function wn(B){let Me=Math.round(B*100);Me!==Qe&&(Qe=Me,rn.style.opacity=(Me/100).toFixed(2))}f.name!=="greyRoom"&&f.jumped?(p.goTo(Op(f.name)),Nt(f.name)):Nt(f.name==="greyRoom"?"greyRoom":kn[0]),f.name!=="greyRoom"&&!f.jumped&&p.saved>0&&Pt();function Pt(){let B=document.createElement("div");B.id="cr-continue",nn=0;let Me=(Xe,_t,gt)=>{let st=document.createElement("button");st.textContent=Xe,st.className=gt,st.addEventListener("click",ct=>{ct.stopPropagation(),B.remove(),_t()}),B.appendChild(st)};Me(`Continue \u2014 ${Vu[kn[p.saved]]}`,()=>{p.goTo(p.saved),Nt(p.arena)},"cr-continue-yes"),Me("New run",()=>{p.newRun(),nn=X.run.hoursTime},"cr-continue-no"),document.body.appendChild(B)}ae=r.poll(),Z.update(0,{target:b.pos,mode:"normal",side:1},M),it(),kt.start()}var x3={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function K0(t,e){window.__cr.error={kind:t,detail:e||""},document.documentElement.dataset.crError=t;let n=document.getElementById("cr-error");n&&(n.textContent="",n.appendChild(document.createTextNode(x3[t])),t==="boot"&&e&&(n.appendChild(document.createElement("br")),n.appendChild(document.createTextNode(e))),n.hidden=!1)}window.addEventListener("error",t=>{window.__cr.error||K0("boot",t.message)});function y3(){let t=document.getElementById("cr-canvas"),e=t.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){K0("webgl");return}let n=new URLSearchParams(location.search);n.has("look")?Wv({canvas:t,gl:e}):l_({canvas:t,gl:e,params:n}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{y3()}catch(t){K0("boot",t&&t.message)}})();

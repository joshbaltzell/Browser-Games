/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var J0=0,Dd=1,j0=2;var za=1,Q0=2,_o=3,Ns=0,nn=1,Tn=2,yr=0,bo=1,Nd=2,Od=3,Ud=4,em=5;var _r=100,tm=101,nm=102,im=103,sm=104,rm=200,om=201,am=202,lm=203,Fd=204,kd=205,cm=206,hm=207,um=208,dm=209,fm=210,pm=211,mm=212,gm=213,xm=214,oc=0,ac=1,lc=2,so=3,cc=4,hc=5,uc=6,dc=7,Bd=0,vm=1,ym=2,Fi=0,zd=1,Hd=2,Gd=3,Vd=4,Wd=5,Xd=6,Yd=7;var qd=300,br=301,Mo=302,Wc=303,Xc=304,fc=1e3,Di=1001,pc=1002,hn=1003,_m=1004;var Ha=1005;var un=1006,Yc=1007;var ds=1008;var $n=1009,$d=1010,Zd=1011,So=1012,qc=1013,Mi=1014,ii=1015,Si=1016,$c=1017,Zc=1018,Mr=1020,Kd=35902,Jd=35899,jd=1021,Qd=1022,Zn=1023,cs=1026,fs=1027,Kc=1028,Jc=1029,Os=1030,jc=1031;var Qc=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,eh=35840,th=35841,nh=35842,ih=35843,sh=36196,rh=37492,oh=37496,ah=37488,lh=37489,Ya=37490,ch=37491,hh=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,xh=37815,vh=37816,yh=37817,_h=37818,bh=37819,Mh=37820,Sh=37821,wh=36492,Th=36494,Eh=36495,Ah=36283,Rh=36284,qa=36285,Ch=36286;var oa=2300,mc=2301,sc=2302,Sd=2303,wd=2400,Td=2401,Ed=2402;var bm=3200;var ef=0,Mm=1,ps="",tn="srgb",aa="srgb-linear",la="linear",Dt="srgb";var rc=7680;var Sm=519,wm=512,Tm=513,Em=514,tf=515,Am=516,Rm=517,nf=518,sf=519,rf=35044,wo=35048;var of="300 es",ni=2e3,ca=2001;function $y(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cm(){let n=ha("canvas");return n.style.display="block",n}var p0={},ro=null;function ua(...n){let e="THREE."+n.shift();ro?ro("log",e,...n):console.log(e,...n)}function Pm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=Pm(n);let e="THREE."+n.shift();if(ro)ro("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ht(...n){n=Pm(n);let e="THREE."+n.shift();if(ro)ro("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ta(...n){let e=n.join(" ");e in p0||(p0[e]=!0,at(...n))}function Im(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Lm={[oc]:oc,[lc]:uc,[cc]:cc,[so]:hc,[ac]:ac,[uc]:lc,[dc]:dc,[hc]:so},Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],m0=1234567,na=Math.PI/180,oo=180/Math.PI;function ms(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function af(n,e){return(n%e+e)%e}function Ky(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Jy(n,e,t){return n!==e?(t-n)/(e-n):0}function ia(n,e,t){return(1-t)*n+t*e}function jy(n,e,t,i){return ia(n,e,1-Math.exp(-t*i))}function Qy(n,e=1){return e-Math.abs(af(n,e*2)-e)}function e_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function t_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function n_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function i_(n,e){return n+Math.random()*(e-n)}function s_(n){return n*(.5-Math.random())}function r_(n){n!==void 0&&(m0=n);let e=m0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function o_(n){return n*na}function a_(n){return n*oo}function l_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function c_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function h_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),p=r((i-e)/2),f=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*f,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*f,a*c);break;case"ZYZ":n.set(l*f,l*p,a*h,a*c);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ph(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function cf(n,e){if(e.constructor===Float32Array)return n;let t=Ph(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function hf(n,e){if(e.constructor===Float32Array)return n;let t=Ph(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ih={DEG2RAD:na,RAD2DEG:oo,generateUUID:ms,clamp:St,euclideanModulo:af,mapLinear:Ky,inverseLerp:Jy,lerp:ia,damp:jy,pingpong:Qy,smoothstep:e_,smootherstep:t_,randInt:n_,randFloat:i_,randFloatSpread:s_,seededRandom:r_,degToRad:o_,radToDeg:a_,isPowerOfTwo:l_,ceilPowerOfTwo:c_,floorPowerOfTwo:lf,setQuaternionFromProperEuler:h_,normalize:hf,denormalize:cf},gf=class gf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gf.prototype.isVector2=!0;var Ge=gf,In=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],f=r[o+2],g=r[o+3];if(d!==g||l!==u||c!==p||h!==f){let m=l*u+c*p+h*f+d*g;m<0&&(u=-u,p=-p,f=-f,g=-g,m=-m);let x=1-a;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);x=Math.sin(x*y)/S,a=Math.sin(a*y)/S,l=l*x+u*a,c=c*x+p*a,h=h*x+f*a,d=d*x+g*a}else{l=l*x+u*a,c=c*x+p*a,h=h*x+f*a,d=d*x+g*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-a*p,e[t+2]=c*f+h*p+a*u-l*d,e[t+3]=h*f-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xf=class xf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(g0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(g0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xf.prototype.isVector3=!0;var B=xf,Qu=new B,g0=new In,vf=class vf{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],f=i[8],g=s[0],m=s[3],x=s[6],y=s[1],S=s[4],_=s[7],M=s[2],b=s[5],v=s[8];return r[0]=o*g+a*y+l*M,r[3]=o*m+a*S+l*b,r[6]=o*x+a*_+l*v,r[1]=c*g+h*y+d*M,r[4]=c*m+h*S+d*b,r[7]=c*x+h*_+d*v,r[2]=u*g+p*y+f*M,r[5]=u*m+p*S+f*b,r[8]=u*x+p*_+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,f=t*d+i*u+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=d*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=u*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ta("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ed.makeScale(e,t)),this}rotate(e){return ta("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return ta("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vf.prototype.isMatrix3=!0;var dt=vf,ed=new dt,x0=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v0=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u_(){let n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Dt&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ps?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:e,whitePoint:i,transfer:la,toXYZ:x0,fromXYZ:v0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:x0,fromXYZ:v0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}var At=u_();function ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Br,gc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Br===void 0&&(Br=ha("canvas")),Br.width=e.width,Br.height=e.height;let s=Br.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ha("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ls(t[i]/255)*255):t[i]=ls(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},d_=0,ao=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(td(s[o].image)):r.push(td(s[o]))}else r=td(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function td(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var f_=0,nd=new B,Ln=class n extends Ni{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Di,s=Di,r=un,o=ds,a=Zn,l=$n,c=n.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=ms(),this.name="",this.source=new ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nd).x}get height(){return this.source.getSize(nd).y}get depth(){return this.source.getSize(nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=qd;Ln.DEFAULT_ANISOTROPY=1;var yf=class yf{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(p+1)/2,M=(x+1)/2,b=(h+u)/4,v=(d+g)/4,w=(f+m)/4;return S>_&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=b/i,r=v/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=w/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=v/r,s=w/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-f)*(m-f)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(d-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yf.prototype.isVector4=!0;var Wt=yf,xc=class extends Ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ln({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ao(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends xc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends Ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends Ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vc=class Vc{constructor(e,t,i,s,r,o,a,l,c,h,d,u,p,f,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,p,f,g,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,p,f,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=u,x[3]=p,x[7]=f,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,f=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-g*c,t[9]=-a*l,t[2]=g-u*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,g=c*d;t[0]=u+g*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-f,t[6]=g+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,g=c*d;t[0]=u-g*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*h,t[9]=g-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,f=a*h,g=a*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,f=a*l,g=a*c;t[0]=l*h,t[4]=g-u*d,t[8]=f*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-g*d}else if(e.order==="XZY"){let u=o*l,p=o*c,f=a*l,g=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=o*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,t,i){let s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ts.crossVectors(i,Wn),Ts.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ts.crossVectors(i,Wn)),Ts.normalize(),Rl.crossVectors(Wn,Ts),s[0]=Ts.x,s[4]=Rl.x,s[8]=Wn.x,s[1]=Ts.y,s[5]=Rl.y,s[9]=Wn.y,s[2]=Ts.z,s[6]=Rl.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],f=i[2],g=i[6],m=i[10],x=i[14],y=i[3],S=i[7],_=i[11],M=i[15],b=s[0],v=s[4],w=s[8],C=s[12],R=s[1],L=s[5],T=s[9],I=s[13],E=s[2],N=s[6],k=s[10],V=s[14],te=s[3],X=s[7],Q=s[11],$=s[15];return r[0]=o*b+a*R+l*E+c*te,r[4]=o*v+a*L+l*N+c*X,r[8]=o*w+a*T+l*k+c*Q,r[12]=o*C+a*I+l*V+c*$,r[1]=h*b+d*R+u*E+p*te,r[5]=h*v+d*L+u*N+p*X,r[9]=h*w+d*T+u*k+p*Q,r[13]=h*C+d*I+u*V+p*$,r[2]=f*b+g*R+m*E+x*te,r[6]=f*v+g*L+m*N+x*X,r[10]=f*w+g*T+m*k+x*Q,r[14]=f*C+g*I+m*V+x*$,r[3]=y*b+S*R+_*E+M*te,r[7]=y*v+S*L+_*N+M*X,r[11]=y*w+S*T+_*k+M*Q,r[15]=y*C+S*I+_*V+M*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],f=e[3],g=e[7],m=e[11],x=e[15],y=l*p-c*u,S=a*p-c*d,_=a*u-l*d,M=o*p-c*h,b=o*u-l*h,v=o*d-a*h;return t*(g*y-m*S+x*_)-i*(f*y-m*M+x*b)+s*(f*S-g*M+x*v)-r*(f*_-g*b+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],g=e[13],m=e[14],x=e[15],y=t*a-i*o,S=t*l-s*o,_=t*c-r*o,M=i*l-s*a,b=i*c-r*a,v=s*c-r*l,w=h*g-d*f,C=h*m-u*f,R=h*x-p*f,L=d*m-u*g,T=d*x-p*g,I=u*x-p*m,E=y*I-S*T+_*L+M*R-b*C+v*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/E;return e[0]=(a*I-l*T+c*L)*N,e[1]=(s*T-i*I-r*L)*N,e[2]=(g*v-m*b+x*M)*N,e[3]=(u*b-d*v-p*M)*N,e[4]=(l*R-o*I-c*C)*N,e[5]=(t*I-s*R+r*C)*N,e[6]=(m*_-f*v-x*S)*N,e[7]=(h*v-u*_+p*S)*N,e[8]=(o*T-a*R+c*w)*N,e[9]=(i*R-t*T-r*w)*N,e[10]=(f*b-g*_+x*y)*N,e[11]=(d*_-h*b-p*y)*N,e[12]=(a*C-o*L-l*w)*N,e[13]=(t*L-i*C+s*w)*N,e[14]=(g*S-f*M-m*y)*N,e[15]=(h*M-d*S+u*y)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,f=r*d,g=o*h,m=o*d,x=a*d,y=l*c,S=l*h,_=l*d,M=i.x,b=i.y,v=i.z;return s[0]=(1-(g+x))*M,s[1]=(p+_)*M,s[2]=(f-S)*M,s[3]=0,s[4]=(p-_)*b,s[5]=(1-(u+x))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(f+S)*v,s[9]=(m-y)*v,s[10]=(1-(u+g))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=zr.set(s[0],s[1],s[2]).length(),a=zr.set(s[4],s[5],s[6]).length(),l=zr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vi.copy(this);let c=1/o,h=1/a,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,t.setFromRotationMatrix(vi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),f,g;if(l)f=r/(o-r),g=o*r/(o-r);else if(a===ni)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ca)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s),f,g;if(l)f=1/(o-r),g=o/(o-r);else if(a===ni)f=-2/(o-r),g=-(o+r)/(o-r);else if(a===ca)f=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vc.prototype.isMatrix4=!0;var bt=Vc,zr=new B,vi=new bt,p_=new B(0,0,0),m_=new B(1,1,1),Ts=new B,Rl=new B,Wn=new B,y0=new bt,_0=new In,Bn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _0.setFromEuler(this),this.setFromQuaternion(_0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},g_=0,b0=new B,Hr=new In,ns=new bt,Cl=new B,Wo=new B,x_=new B,v_=new In,M0=new B(1,0,0),S0=new B(0,1,0),w0=new B(0,0,1),T0={type:"added"},y_={type:"removed"},Gr={type:"childadded",child:null},id={type:"childremoved",child:null},Zt=class n extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new Bn,i=new In,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new dt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(M0,e)}rotateY(e){return this.rotateOnAxis(S0,e)}rotateZ(e){return this.rotateOnAxis(w0,e)}translateOnAxis(e,t){return b0.copy(e).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(M0,e)}translateY(e){return this.translateOnAxis(S0,e)}translateZ(e){return this.translateOnAxis(w0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cl.copy(e):Cl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(Wo,Cl,this.up):ns.lookAt(Cl,Wo,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),Hr.setFromRotationMatrix(ns),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T0),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y_),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T0),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,x_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new B(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mt=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},__={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(__)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function sd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=At.workingColorSpace){if(e=af(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=sd(o,r,e+1/3),this.g=sd(o,r,e),this.b=sd(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function i(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let i=Dm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return At.workingToColorSpace(Mn.copy(this),e),Math.round(St(Mn.r*255,0,255))*65536+Math.round(St(Mn.g*255,0,255))*256+Math.round(St(Mn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=tn){At.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(Pl);let i=ia(Es.h,Pl.h,t),s=ia(Es.s,Pl.s,t),r=ia(Es.l,Pl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Qe;Qe.NAMES=Dm;var ur=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new B,is=new B,rd=new B,ss=new B,Vr=new B,Wr=new B,E0=new B,od=new B,ad=new B,ld=new B,cd=new Wt,hd=new Wt,ud=new Wt,as=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yi.subVectors(s,t),is.subVectors(i,t),rd.subVectors(e,t);let o=yi.dot(yi),a=yi.dot(is),l=yi.dot(rd),c=is.dot(is),h=is.dot(rd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,f=(o*h-a*l)*u;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ss.x),l.addScaledVector(o,ss.y),l.addScaledVector(a,ss.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return cd.setScalar(0),hd.setScalar(0),ud.setScalar(0),cd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,i),ud.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cd,r.x),o.addScaledVector(hd,r.y),o.addScaledVector(ud,r.z),o}static isFrontFacing(e,t,i,s){return yi.subVectors(i,t),is.subVectors(e,t),yi.cross(is).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),is.subVectors(this.a,this.b),yi.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Vr.subVectors(s,i),Wr.subVectors(r,i),od.subVectors(e,i);let l=Vr.dot(od),c=Wr.dot(od);if(l<=0&&c<=0)return t.copy(i);ad.subVectors(e,s);let h=Vr.dot(ad),d=Wr.dot(ad);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Vr,o);ld.subVectors(e,r);let p=Vr.dot(ld),f=Wr.dot(ld);if(f>=0&&p<=f)return t.copy(r);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(Wr,a);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return E0.subVectors(r,s),a=(d-h)/(d-h+(p-f)),t.copy(s).addScaledVector(E0,a);let x=1/(m+g+u);return o=g*x,a=u*x,t.copy(i).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Oi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Il.copy(i.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Ll.subVectors(this.max,Xo),Xr.subVectors(e.a,Xo),Yr.subVectors(e.b,Xo),qr.subVectors(e.c,Xo),As.subVectors(Yr,Xr),Rs.subVectors(qr,Yr),or.subVectors(Xr,qr);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-or.z,or.y,As.z,0,-As.x,Rs.z,0,-Rs.x,or.z,0,-or.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-or.y,or.x,0];return!dd(t,Xr,Yr,qr,Ll)||(t=[1,0,0,0,1,0,0,0,1],!dd(t,Xr,Yr,qr,Ll))?!1:(Dl.crossVectors(As,Rs),t=[Dl.x,Dl.y,Dl.z],dd(t,Xr,Yr,qr,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new B,new B,new B,new B,new B,new B,new B,new B],_i=new B,Il=new Oi,Xr=new B,Yr=new B,qr=new B,As=new B,Rs=new B,or=new B,Xo=new B,Ll=new B,Dl=new B,ar=new B;function dd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ar.fromArray(n,r);let a=s.x*Math.abs(ar.x)+s.y*Math.abs(ar.y)+s.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),h=i.dot(ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qt=new B,Nl=new Ge,b_=0,Tt=class extends Ni{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rf,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=e!==void 0?Ph(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):cf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hf(e,this.array)}};var pa=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ma=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var gt=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},M_=new Oi,Yo=new B,fd=new B,zn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):M_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);let t=Yo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Yo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(fd)),this.expandByPoint(Yo.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},S_=0,ti=new bt,pd=new Zt,$r=new B,Xn=new Oi,qo=new Oi,cn=new B,Lt=class n extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?ma:pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new dt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Xn.min,qo.min),Xn.expandByPoint(cn),cn.addVectors(Xn.max,qo.max),Xn.expandByPoint(cn)):(Xn.expandByPoint(qo.min),Xn.expandByPoint(qo.max))}Xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),cn.add($r)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Tt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new B,l[C]=new B;let h=new B,d=new B,u=new B,p=new Ge,f=new Ge,g=new Ge,m=new B,x=new B;function y(C,R,L){c[C]=c[R]=c[L]=1,h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,L),p.fromBufferAttribute(r,C),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,L),d.sub(h),u.sub(h),f.sub(p),g.sub(p);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),x.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(T),a[C].add(m),a[R].add(m),a[L].add(m),l[C].add(x),l[R].add(x),l[L].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,R=S.length;C<R;++C){let L=S[C],T=L.start,I=L.count;for(let E=T,N=T+I;E<N;E+=3)y(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let _=new B,M=new B,b=new B,v=new B;function w(C){b.fromBufferAttribute(s,C),v.copy(b);let R=a[C];_.copy(R),_.sub(b.multiplyScalar(b.dot(R))).normalize(),M.crossVectors(v,R);let T=M.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,T)}for(let C=0,R=i.count;C<R;++C)c[C]&&w(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let x=0;x<h;x++)u[f++]=c[p++]}return new Tt(u,h,d)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ga=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=A0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=A0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function A0(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ms()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Pn=new B,co=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Ph(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):cf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hf(e,this.data.array)}},md=new B,w_=new B,T_=new dt,bi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=md.subVectors(i,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(md),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||T_.getNormalMatrix(e),s=this.coplanarPoint(md).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},E_=0,Ui=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=bo,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=kd,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rc,this.stencilZFail=rc,this.stencilZPass=rc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new bi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ho=class extends Ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,$o=new B,Kr=new B,Jr=new B,jr=new Ge,Zo=new Ge,Nm=new bt,Ol=new B,Ko=new B,Ul=new B,R0=new Ge,gd=new Ge,C0=new Ge,xa=class extends Zt{constructor(e=new ho){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ga(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new co(i,3,0,!1)),Zr.setAttribute("uv",new co(i,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),Nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Jr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fl(Ol.set(-.5,-.5,0),Jr,o,Kr,s,r),Fl(Ko.set(.5,-.5,0),Jr,o,Kr,s,r),Fl(Ul.set(.5,.5,0),Jr,o,Kr,s,r),R0.set(0,0),gd.set(1,0),C0.set(1,1);let a=e.ray.intersectTriangle(Ol,Ko,Ul,!1,$o);if(a===null&&(Fl(Ko.set(-.5,.5,0),Jr,o,Kr,s,r),gd.set(0,1),a=e.ray.intersectTriangle(Ol,Ul,Ko,!1,$o),a===null))return;let l=e.ray.origin.distanceTo($o);l<e.near||l>e.far||t.push({distance:l,point:$o.clone(),uv:as.getInterpolation($o,Ol,Ko,Ul,R0,gd,C0,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Fl(n,e,t,i,s,r){jr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Zo.x=r*jr.x-s*jr.y,Zo.y=s*jr.x+r*jr.y):Zo.copy(jr),n.copy(e),n.x+=Zo.x,n.y+=Zo.y,n.applyMatrix4(Nm)}var os=new B,xd=new B,kl=new B,Bl=new B,uo=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=os.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,t),os.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xd.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),Bl.copy(this.origin).sub(xd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(kl),a=Bl.dot(this.direction),l=-Bl.dot(kl),c=Bl.lengthSq(),h=Math.abs(1-o*o),d,u,p,f;if(h>0)if(d=o*l-a,u=o*a-l,f=r*h,d>=0)if(u>=-f)if(u<=f){let g=1/h;d*=g,u*=g,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xd).addScaledVector(kl,u),p}intersectSphere(e,t){if(e.radius<0)return null;os.subVectors(e.center,this.origin);let i=os.dot(this.direction),s=os.dot(os)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,p=e.z-o.z,f=t.x-o.x,g=t.y-o.y,m=t.z-o.z,x=i.x-o.x,y=i.y-o.y,S=i.z-o.z,_=Math.abs(l),M=Math.abs(c),b=Math.abs(h),v,w,C,R,L,T,I,E,N,k,V,te;if(_>=M&&_>=b?(C=l,T=d,N=f,te=x,l>=0?(v=c,w=h,R=u,L=p,I=g,E=m,k=y,V=S):(v=h,w=c,R=p,L=u,I=m,E=g,k=S,V=y)):M>=b?(C=c,T=u,N=g,te=y,c>=0?(v=h,w=l,R=p,L=d,I=m,E=f,k=S,V=x):(v=l,w=h,R=d,L=p,I=f,E=m,k=x,V=S)):(C=h,T=p,N=m,te=S,h>=0?(v=l,w=c,R=d,L=u,I=f,E=g,k=x,V=y):(v=c,w=l,R=u,L=d,I=g,E=f,k=y,V=x)),C===0)return null;let X=v/C,Q=w/C,$=1/C,Y=R-X*T,_e=L-Q*T,J=I-X*N,Z=E-Q*N,fe=k-X*te,Be=V-Q*te,W=fe*Z-Be*J,Te=Y*Be-_e*fe,Le=J*_e-Z*Y;if(s){if(W<0||Te<0||Le<0)return null}else if((W<0||Te<0||Le<0)&&(W>0||Te>0||Le>0))return null;let Ae=W+Te+Le;if(Ae===0)return null;let be=$*(W*T+Te*N+Le*te);return(Ae>0?be<0:be>0)?null:this.at(be/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sn=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},P0=new bt,lr=new uo,zl=new zn,I0=new B,Hl=new B,Gl=new B,Vl=new B,vd=new B,Wl=new B,L0=new B,Xl=new B,lt=class extends Zt{constructor(e=new Lt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(vd.fromBufferAttribute(d,e),o?Wl.addScaledVector(vd,h):Wl.addScaledVector(vd.sub(t),h))}t.add(Wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),lr.copy(e.ray).recast(e.near),!(zl.containsPoint(lr.origin)===!1&&(lr.intersectSphere(zl,I0)===null||lr.origin.distanceToSquared(I0)>(e.far-e.near)**2))&&(P0.copy(r).invert(),lr.copy(e.ray).applyMatrix4(P0),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,g=u.length;f<g;f++){let m=u[f],x=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,M=S;_<M;_+=3){let b=a.getX(_),v=a.getX(_+1),w=a.getX(_+2);s=Yl(this,x,e,i,c,h,d,b,v,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=f,x=g;m<x;m+=3){let y=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);s=Yl(this,o,e,i,c,h,d,y,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,g=u.length;f<g;f++){let m=u[f],x=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,M=S;_<M;_+=3){let b=_,v=_+1,w=_+2;s=Yl(this,x,e,i,c,h,d,b,v,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=f,x=g;m<x;m+=3){let y=m,S=m+1,_=m+2;s=Yl(this,o,e,i,c,h,d,y,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function A_(n,e,t,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ns,a),l===null)return null;Xl.copy(a),Xl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Xl);return c<t.near||c>t.far?null:{distance:c,point:Xl.clone(),object:n}}function Yl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Hl),n.getVertexPosition(l,Gl),n.getVertexPosition(c,Vl);let h=A_(n,e,t,i,Hl,Gl,Vl,L0);if(h){let d=new B;as.getBarycoord(L0,Hl,Gl,Vl,d),s&&(h.uv=as.getInterpolatedAttribute(s,a,l,c,d,new Ge)),r&&(h.uv1=as.getInterpolatedAttribute(r,a,l,c,d,new Ge)),o&&(h.normal=as.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};as.getNormal(Hl,Gl,Vl,u.normal),h.face=u,h.barycoord=d}return h}var dr=class extends Ln{constructor(e=null,t=1,i=1,s,r,o,a,l,c=hn,h=hn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fo=class extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qr=new bt,D0=new bt,ql=[],N0=new Oi,R_=new bt,Jo=new lt,jo=new zn,hs=class extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,R_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),N0.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(N0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),jo.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(i),e.ray.intersectsSphere(jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qr),D0.multiplyMatrices(i,Qr),Jo.matrixWorld=D0,Jo.raycast(e,ql);for(let o=0,a=ql.length;o<a;o++){let l=ql[o];l.instanceId=r,l.object=this,t.push(l)}ql.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new dr(new Float32Array(s*this.count),s,this.count,Kc,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cr=new zn,C_=new Ge(.5,.5),$l=new B,fr=class{constructor(e=new bi,t=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],f=r[8],g=r[9],m=r[10],x=r[11],y=r[12],S=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,p-h,x-f,M-y).normalize(),s[1].setComponents(c+o,p+h,x+f,M+y).normalize(),s[2].setComponents(c+a,p+d,x+g,M+S).normalize(),s[3].setComponents(c-a,p-d,x-g,M-S).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,p-u,x-m,M-_).normalize();else if(s[4].setComponents(c-l,p-u,x-m,M-_).normalize(),t===ni)s[5].setComponents(c+l,p+u,x+m,M+_).normalize();else if(t===ca)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);let t=C_.distanceTo(e.center);return cr.radius=.7071067811865476+t,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if($l.x=s.normal.x>0?e.max.x:e.min.x,$l.y=s.normal.y>0?e.max.y:e.min.y,$l.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},O0=new bt,yc=class n{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];O0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new fr),i[s].setFromProjectionMatrix(O0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new fr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var va=class extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_c=new B,bc=new B,U0=new bt,Qo=new uo,Zl=new zn,yd=new B,F0=new B,ya=class extends Zt{constructor(e=new Lt,t=new va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_c.fromBufferAttribute(t,s-1),bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_c.distanceTo(bc);e.setAttribute("lineDistance",new gt(i,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Zl.radius+=r,e.ray.intersectsSphere(Zl)===!1)return;U0.copy(s).invert(),Qo.copy(e.ray).applyMatrix4(U0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=p,m=f-1;g<m;g+=c){let x=h.getX(g),y=h.getX(g+1),S=Kl(this,e,Qo,l,x,y,g);S&&t.push(S)}if(this.isLineLoop){let g=h.getX(f-1),m=h.getX(p),x=Kl(this,e,Qo,l,g,m,f-1);x&&t.push(x)}}else{let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=p,m=f-1;g<m;g+=c){let x=Kl(this,e,Qo,l,g,g+1,g);x&&t.push(x)}if(this.isLineLoop){let g=Kl(this,e,Qo,l,f-1,p,f-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(_c.fromBufferAttribute(a,s),bc.fromBufferAttribute(a,r),t.distanceSqToSegment(_c,bc,yd,F0)>i)return;yd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(yd);if(!(c<e.near||c>e.far))return{distance:c,point:F0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var po=class extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},k0=new bt,Ad=new uo,Jl=new zn,jl=new B,_a=class extends Zt{constructor(e=new Lt,t=new po){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),Jl.radius+=r,e.ray.intersectsSphere(Jl)===!1)return;k0.copy(s).invert(),Ad.copy(e.ray).applyMatrix4(k0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=u,g=p;f<g;f++){let m=c.getX(f);jl.fromBufferAttribute(d,m),B0(jl,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let f=u,g=p;f<g;f++)jl.fromBufferAttribute(d,f),B0(jl,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function B0(n,e,t,i,s,r,o){let a=Ad.distanceSqToPoint(n);if(a<t){let l=new B;Ad.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ba=class extends Ln{constructor(e=[],t=br,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ma=class extends Ln{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class extends Ln{constructor(e,t,i=Mi,s,r,o,a=hn,l=hn,c,h=cs,d=1){if(h!==cs&&h!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Sa=class extends us{constructor(e,t=Mi,i=br,s,r,o=hn,a=hn,l,c=cs){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wa=class extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xt=class n extends Lt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;f("z","y","x",-1,-1,i,t,e,o,r,0),f("z","y","x",1,-1,i,t,-e,o,r,1),f("x","z","y",1,1,e,i,t,s,o,2),f("x","z","y",1,-1,e,i,-t,s,o,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function f(g,m,x,y,S,_,M,b,v,w,C){let R=_/v,L=M/w,T=_/2,I=M/2,E=b/2,N=v+1,k=w+1,V=0,te=0,X=new B;for(let Q=0;Q<k;Q++){let $=Q*L-I;for(let Y=0;Y<N;Y++){let _e=Y*R-T;X[g]=_e*y,X[m]=$*S,X[x]=E,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[x]=b>0?1:-1,h.push(X.x,X.y,X.z),d.push(Y/v),d.push(1-Q/w),V+=1}}for(let Q=0;Q<w;Q++)for(let $=0;$<v;$++){let Y=u+$+N*Q,_e=u+$+N*(Q+1),J=u+($+1)+N*(Q+1),Z=u+($+1)+N*Q;l.push(Y,_e,Z),l.push(_e,J,Z),te+=6}a.addGroup(p,te,C),p+=te,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Kt=class n extends Lt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],f=0,g=[],m=i/2,x=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(p,2));function y(){let _=new B,M=new B,b=0,v=(t-e)/i;for(let w=0;w<=r;w++){let C=[],R=w/r,L=R*(t-e)+e;for(let T=0;T<=s;T++){let I=T/s,E=I*l+a,N=Math.sin(E),k=Math.cos(E);M.x=L*N,M.y=-R*i+m,M.z=L*k,d.push(M.x,M.y,M.z),_.set(N,v,k).normalize(),u.push(_.x,_.y,_.z),p.push(I,1-R),C.push(f++)}g.push(C)}for(let w=0;w<s;w++)for(let C=0;C<r;C++){let R=g[C][w],L=g[C+1][w],T=g[C+1][w+1],I=g[C][w+1];(e>0||C!==0)&&(h.push(R,L,I),b+=3),(t>0||C!==r-1)&&(h.push(L,T,I),b+=3)}c.addGroup(x,b,0),x+=b}function S(_){let M=f,b=new Ge,v=new B,w=0,C=_===!0?e:t,R=_===!0?1:-1;for(let T=1;T<=s;T++)d.push(0,m*R,0),u.push(0,R,0),p.push(.5,.5),f++;let L=f;for(let T=0;T<=s;T++){let E=T/s*l+a,N=Math.cos(E),k=Math.sin(E);v.x=C*k,v.y=m*R,v.z=C*N,d.push(v.x,v.y,v.z),u.push(0,R,0),b.x=N*.5+.5,b.y=k*.5*R+.5,p.push(b.x,b.y),f++}for(let T=0;T<s;T++){let I=M+T,E=L+T;_===!0?h.push(E,E+1,I):h.push(E+1,E,I),w+=3}c.addGroup(x,w,_===!0?1:2),x+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ta=class n extends Lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new B,_=new B,M=new B;for(let b=0;b<t.length;b+=3)p(t[b+0],S),p(t[b+1],_),p(t[b+2],M),l(S,_,M,y)}function l(y,S,_,M){let b=M+1,v=[];for(let w=0;w<=b;w++){v[w]=[];let C=y.clone().lerp(_,w/b),R=S.clone().lerp(_,w/b),L=b-w;for(let T=0;T<=L;T++)T===0&&w===b?v[w][T]=C:v[w][T]=C.clone().lerp(R,T/L)}for(let w=0;w<b;w++)for(let C=0;C<2*(b-w)-1;C++){let R=Math.floor(C/2);C%2===0?(u(v[w][R+1]),u(v[w+1][R]),u(v[w][R])):(u(v[w][R+1]),u(v[w+1][R+1]),u(v[w+1][R]))}}function c(y){let S=new B;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let y=new B;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let _=m(y)/2/Math.PI+.5,M=x(y)/Math.PI+.5;o.push(_,1-M)}f(),d()}function d(){for(let y=0;y<o.length;y+=6){let S=o[y+0],_=o[y+2],M=o[y+4],b=Math.max(S,_,M),v=Math.min(S,_,M);b>.9&&v<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,S){let _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function f(){let y=new B,S=new B,_=new B,M=new B,b=new Ge,v=new Ge,w=new Ge;for(let C=0,R=0;C<r.length;C+=9,R+=6){y.set(r[C+0],r[C+1],r[C+2]),S.set(r[C+3],r[C+4],r[C+5]),_.set(r[C+6],r[C+7],r[C+8]),b.set(o[R+0],o[R+1]),v.set(o[R+2],o[R+3]),w.set(o[R+4],o[R+5]),M.copy(y).add(S).add(_).divideScalar(3);let L=m(M);g(b,R+0,y,L),g(v,R+2,S,L),g(w,R+4,_,L)}}function g(y,S,_,M){M<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function x(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ge:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new B,s=[],r=[],o=[],a=new B,l=new bt;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(St(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(St(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},mo=class extends Dn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ge){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mc=class extends mo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function uf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var z0=new B,H0=new B,_d=new uf,bd=new uf,Md=new uf,Sc=class extends Dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new B){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(H0.subVectors(s[0],s[1]).add(s[0]),c=H0);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(z0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=z0),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),_d.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,f,g,m),bd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,f,g,m),Md.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,f,g,m)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),bd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Md.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(_d.calc(l),bd.calc(l),Md.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function G0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function P_(n,e){let t=1-n;return t*t*e}function I_(n,e){return 2*(1-n)*n*e}function L_(n,e){return n*n*e}function sa(n,e,t,i){return P_(n,e)+I_(n,t)+L_(n,i)}function D_(n,e){let t=1-n;return t*t*t*e}function N_(n,e){let t=1-n;return 3*t*t*n*e}function O_(n,e){return 3*(1-n)*n*n*e}function U_(n,e){return n*n*n*e}function ra(n,e,t,i,s){return D_(n,e)+N_(n,t)+O_(n,i)+U_(n,s)}var Ea=class extends Dn{constructor(e=new Ge,t=new Ge,i=new Ge,s=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ge){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,s.x,r.x,o.x,a.x),ra(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wc=class extends Dn{constructor(e=new B,t=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,s.x,r.x,o.x,a.x),ra(e,s.y,r.y,o.y,a.y),ra(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Dn{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends Dn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Dn{constructor(e=new Ge,t=new Ge,i=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ge){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(sa(e,s.x,r.x,o.x),sa(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Dn{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(sa(e,s.x,r.x,o.x),sa(e,s.y,r.y,o.y),sa(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(G0(a,l.x,c.x,h.x,d.x),G0(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ge().fromArray(s))}return this}},Ec=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Sc,CubicBezierCurve:Ea,CubicBezierCurve3:wc,EllipseCurve:mo,LineCurve:Aa,LineCurve3:Tc,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:Ca,SplineCurve:Pa}),Ac=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ec[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},pr=class extends Ac{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Aa(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ra(this.currentPoint.clone(),new Ge(e,t),new Ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ea(this.currentPoint.clone(),new Ge(e,t),new Ge(i,s),new Ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Pa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new mo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},go=class extends pr{constructor(e){super(e),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new pr().fromJSON(s))}return this}};function F_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Om(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=G_(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,d=l;for(let u=t;u<s;u+=t){let p=n[u],f=n[u+1];p<a&&(a=p),f<l&&(l=f),p>h&&(h=p),f>d&&(d=f)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ia(r,o,t,a,l,c,0),o}function Om(n,e,t,i,s){let r;if(s===Q_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=V0(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=V0(o/i|0,n[o],n[o+1],r);return r&&xo(r,r.next)&&(Da(r),r=r.next),r}function mr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xo(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Da(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ia(n,e,t,i,s,r,o){if(!n)return;!o&&r&&q_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?B_(n,i,s,r):k_(n)){e.push(l.i,n.i,c.i),Da(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=z_(mr(n),e),Ia(n,e,t,i,s,r,2)):o===2&&H_(n,e,t,i,s,r):Ia(mr(n),e,t,i,s,r,1);break}}}function k_(n){let e=n.prev,t=n,i=n.next;if(Vt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),p=Math.max(a,l,c),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&ea(s,a,r,l,o,c,f.x,f.y)&&Vt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function B_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,p=Math.min(a,l,c),f=Math.min(h,d,u),g=Math.max(a,l,c),m=Math.max(h,d,u),x=Rd(p,f,e,t,i),y=Rd(g,m,e,t,i),S=n.prevZ,_=n.nextZ;for(;S&&S.z>=x&&_&&_.z<=y;){if(S.x>=p&&S.x<=g&&S.y>=f&&S.y<=m&&S!==s&&S!==o&&ea(a,h,l,d,c,u,S.x,S.y)&&Vt(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=p&&_.x<=g&&_.y>=f&&_.y<=m&&_!==s&&_!==o&&ea(a,h,l,d,c,u,_.x,_.y)&&Vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=x;){if(S.x>=p&&S.x<=g&&S.y>=f&&S.y<=m&&S!==s&&S!==o&&ea(a,h,l,d,c,u,S.x,S.y)&&Vt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=g&&_.y>=f&&_.y<=m&&_!==s&&_!==o&&ea(a,h,l,d,c,u,_.x,_.y)&&Vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function z_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!xo(i,s)&&Fm(i,t,t.next,s)&&La(i,s)&&La(s,i)&&(e.push(i.i,t.i,s.i),Da(t),Da(t.next),t=n=s),t=t.next}while(t!==n);return mr(t)}function H_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K_(o,a)){let l=km(o,a);o=mr(o,o.next),l=mr(l,l.next),Ia(o,e,t,i,s,r,0),Ia(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function G_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Om(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Z_(c))}s.sort(V_);for(let r=0;r<s.length;r++)t=W_(s[r],t);return t}function V_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function W_(n,e){let t=X_(n,e);if(!t)return e;let i=km(t,n);return mr(i,i.next),mr(t,t.next)}function X_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(xo(n,t))return t;do{if(xo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Um(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);La(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Y_(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Y_(n,e){return Vt(n.prev,n,e.prev)<0&&Vt(e.next,n,n.next)<0}function q_(n,e,t,i){let s=n;do s.z===0&&(s.z=Rd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$_(s)}function $_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Rd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Z_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Um(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ea(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Um(n,e,t,i,s,r,o,a)}function K_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!J_(n,e)&&(La(n,e)&&La(e,n)&&j_(n,e)&&(Vt(n.prev,n,e.prev)||Vt(n,e.prev,e))||xo(n,e)&&Vt(n.prev,n,n.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xo(n,e){return n.x===e.x&&n.y===e.y}function Fm(n,e,t,i){let s=ec(Vt(n,e,t)),r=ec(Vt(n,e,i)),o=ec(Vt(t,i,n)),a=ec(Vt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ql(n,t,e)||r===0&&Ql(n,i,e)||o===0&&Ql(t,n,i)||a===0&&Ql(t,e,i))}function Ql(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ec(n){return n>0?1:n<0?-1:0}function J_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Fm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function La(n,e){return Vt(n.prev,n,n.next)<0?Vt(n,e,n.next)>=0&&Vt(n,n.prev,e)>=0:Vt(n,e,n.prev)<0||Vt(n,n.next,e)<0}function j_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function km(n,e){let t=Cd(n.i,n.x,n.y),i=Cd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function V0(n,e,t,i){let s=Cd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Da(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Cd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Q_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Pd=class{static triangulate(e,t,i=2){return F_(e,t,i)}},hr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];W0(e),X0(i,e);let o=e.length;t.forEach(W0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,X0(i,t[l]);let a=Pd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function W0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function X0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Na=class n extends Lt{constructor(e=new go([new Ge(.5,.5),new Ge(-.5,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:e1,S,_=!1,M,b,v,w;if(x){S=x.getSpacedPoints(h),_=!0,u=!1;let U=x.isCatmullRomCurve3?x.closed:!1;M=x.computeFrenetFrames(h,U),b=new B,v=new B,w=new B}u||(m=0,p=0,f=0,g=0);let C=a.extractPoints(c),R=C.shape,L=C.holes;if(!hr.isClockWise(R)){R=R.reverse();for(let U=0,K=L.length;U<K;U++){let ne=L[U];hr.isClockWise(ne)&&(L[U]=ne.reverse())}}function I(U){let ne=10000000000000001e-36,he=U[0];for(let ie=1;ie<=U.length;ie++){let ve=ie%U.length,se=U[ve],me=se.x-he.x,Ue=se.y-he.y,Ve=me*me+Ue*Ue,z=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(he.x),Math.abs(he.y)),ye=ne*z*z;if(Ve<=ye){U.splice(ve,1),ie--;continue}he=se}}I(R),L.forEach(I);let E=L.length,N=R;for(let U=0;U<E;U++){let K=L[U];R=R.concat(K)}function k(U,K,ne){return K||ht("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(K,ne)}let V=R.length;function te(U,K,ne){let he,ie,ve,se=U.x-K.x,me=U.y-K.y,Ue=ne.x-U.x,Ve=ne.y-U.y,z=se*se+me*me,ye=se*Ve-me*Ue;if(Math.abs(ye)>Number.EPSILON){let Ne=Math.sqrt(z),qe=Math.sqrt(Ue*Ue+Ve*Ve),de=K.x-me/Ne,nt=K.y+se/Ne,Ie=ne.x-Ve/qe,Xe=ne.y+Ue/qe,O=((Ie-de)*Ve-(Xe-nt)*Ue)/(se*Ve-me*Ue);he=de+se*O-U.x,ie=nt+me*O-U.y;let A=he*he+ie*ie;if(A<=2)return new Ge(he,ie);ve=Math.sqrt(A/2)}else{let Ne=!1;se>Number.EPSILON?Ue>Number.EPSILON&&(Ne=!0):se<-Number.EPSILON?Ue<-Number.EPSILON&&(Ne=!0):Math.sign(me)===Math.sign(Ve)&&(Ne=!0),Ne?(he=-me,ie=se,ve=Math.sqrt(z)):(he=se,ie=me,ve=Math.sqrt(z/2))}return new Ge(he/ve,ie/ve)}let X=[];for(let U=0,K=N.length,ne=K-1,he=U+1;U<K;U++,ne++,he++)ne===K&&(ne=0),he===K&&(he=0),X[U]=te(N[U],N[ne],N[he]);let Q=[],$,Y=X.concat();for(let U=0,K=E;U<K;U++){let ne=L[U];$=[];for(let he=0,ie=ne.length,ve=ie-1,se=he+1;he<ie;he++,ve++,se++)ve===ie&&(ve=0),se===ie&&(se=0),$[he]=te(ne[he],ne[ve],ne[se]);Q.push($),Y=Y.concat($)}let _e;if(m===0)_e=hr.triangulateShape(N,L);else{let U=[],K=[];for(let ne=0;ne<m;ne++){let he=ne/m,ie=p*Math.cos(he*Math.PI/2),ve=f*Math.sin(he*Math.PI/2)+g;for(let se=0,me=N.length;se<me;se++){let Ue=k(N[se],X[se],ve);Te(Ue.x,Ue.y,-ie),he===0&&U.push(Ue)}for(let se=0,me=E;se<me;se++){let Ue=L[se];$=Q[se];let Ve=[];for(let z=0,ye=Ue.length;z<ye;z++){let Ne=k(Ue[z],$[z],ve);Te(Ne.x,Ne.y,-ie),he===0&&Ve.push(Ne)}he===0&&K.push(Ve)}}_e=hr.triangulateShape(U,K)}let J=_e.length,Z=f+g;for(let U=0;U<V;U++){let K=u?k(R[U],Y[U],Z):R[U];_?(v.copy(M.normals[0]).multiplyScalar(K.x),b.copy(M.binormals[0]).multiplyScalar(K.y),w.copy(S[0]).add(v).add(b),Te(w.x,w.y,w.z)):Te(K.x,K.y,0)}for(let U=1;U<=h;U++)for(let K=0;K<V;K++){let ne=u?k(R[K],Y[K],Z):R[K];_?(v.copy(M.normals[U]).multiplyScalar(ne.x),b.copy(M.binormals[U]).multiplyScalar(ne.y),w.copy(S[U]).add(v).add(b),Te(w.x,w.y,w.z)):Te(ne.x,ne.y,d/h*U)}for(let U=m-1;U>=0;U--){let K=U/m,ne=p*Math.cos(K*Math.PI/2),he=f*Math.sin(K*Math.PI/2)+g;for(let ie=0,ve=N.length;ie<ve;ie++){let se=k(N[ie],X[ie],he);Te(se.x,se.y,d+ne)}for(let ie=0,ve=L.length;ie<ve;ie++){let se=L[ie];$=Q[ie];for(let me=0,Ue=se.length;me<Ue;me++){let Ve=k(se[me],$[me],he);_?Te(Ve.x,Ve.y+S[h-1].y,S[h-1].x+ne):Te(Ve.x,Ve.y,d+ne)}}}fe(),Be();function fe(){let U=s.length/3;if(u){let K=0,ne=V*K;for(let he=0;he<J;he++){let ie=_e[he];Le(ie[2]+ne,ie[1]+ne,ie[0]+ne)}K=h+m*2,ne=V*K;for(let he=0;he<J;he++){let ie=_e[he];Le(ie[0]+ne,ie[1]+ne,ie[2]+ne)}}else{for(let K=0;K<J;K++){let ne=_e[K];Le(ne[2],ne[1],ne[0])}for(let K=0;K<J;K++){let ne=_e[K];Le(ne[0]+V*h,ne[1]+V*h,ne[2]+V*h)}}i.addGroup(U,s.length/3-U,0)}function Be(){let U=s.length/3,K=0;W(N,K),K+=N.length;for(let ne=0,he=L.length;ne<he;ne++){let ie=L[ne];W(ie,K),K+=ie.length}i.addGroup(U,s.length/3-U,1)}function W(U,K){let ne=U.length;for(;--ne>=0;){let he=ne,ie=ne-1;ie<0&&(ie=U.length-1);for(let ve=0,se=h+m*2;ve<se;ve++){let me=V*ve,Ue=V*(ve+1),Ve=K+he+me,z=K+ie+me,ye=K+ie+Ue,Ne=K+he+Ue;Ae(Ve,z,ye,Ne)}}}function Te(U,K,ne){l.push(U),l.push(K),l.push(ne)}function Le(U,K,ne){be(U),be(K),be(ne);let he=s.length/3,ie=y.generateTopUV(i,s,he-3,he-2,he-1);Ce(ie[0]),Ce(ie[1]),Ce(ie[2])}function Ae(U,K,ne,he){be(U),be(K),be(he),be(K),be(ne),be(he);let ie=s.length/3,ve=y.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);Ce(ve[0]),Ce(ve[1]),Ce(ve[3]),Ce(ve[1]),Ce(ve[2]),Ce(ve[3])}function be(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function Ce(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return t1(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ec[s.type]().fromJSON(s)),new n(i,e.options)}},e1={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Ge(r,o),new Ge(a,l),new Ge(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],p=e[s*3+1],f=e[s*3+2],g=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ge(o,1-l),new Ge(c,1-d),new Ge(u,1-f),new Ge(g,1-x)]:[new Ge(a,1-l),new Ge(h,1-d),new Ge(p,1-f),new Ge(m,1-x)]}};function t1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var gr=class n extends Ta{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Oa=class n extends Lt{constructor(e=[new Ge(0,-.5),new Ge(.5,0),new Ge(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=St(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new B,u=new Ge,p=new B,f=new B,g=new B,m=0,x=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,p.x=x*1,p.y=-m,p.z=x*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,p.x=x*1,p.y=-m,p.z=x*0,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let y=0;y<=t;y++){let S=i+y*h*s,_=Math.sin(S),M=Math.cos(S);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*_,d.y=e[b].y,d.z=e[b].x*M,o.push(d.x,d.y,d.z),u.x=y/t,u.y=b/(e.length-1),a.push(u.x,u.y);let v=l[3*b+0]*_,w=l[3*b+1],C=l[3*b+0]*M;c.push(v,w,C)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let _=S+y*e.length,M=_,b=_+e.length,v=_+e.length+1,w=_+1;r.push(M,b,w),r.push(v,w,b)}this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("uv",new gt(a,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},vo=class n extends Ta{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ps=class n extends Lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],f=[],g=[],m=[];for(let x=0;x<h;x++){let y=x*u-o;for(let S=0;S<c;S++){let _=S*d-r;f.push(_,-y,0),g.push(0,0,1),m.push(S/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<a;y++){let S=y+c*x,_=y+c*(x+1),M=y+1+c*(x+1),b=y+1+c*x;p.push(S,_,b),p.push(_,M,b)}this.setIndex(p),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},xr=class n extends Lt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,p=new B,f=new Ge;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){let x=r+m/i*o;p.x=d*Math.cos(x),p.y=d*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let g=0;g<s;g++){let m=g*(i+1);for(let x=0;x<i;x++){let y=x+m,S=y,_=y+i+1,M=y+i+2,b=y+1;a.push(S,_,b),a.push(_,M,b)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Jt=class n extends Lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new B,u=new B,p=[],f=[],g=[],m=[];for(let x=0;x<=i;x++){let y=[],S=x/i,_=o+S*a,M=e*Math.cos(_),b=Math.sqrt(e*e-M*M),v=0;x===0&&o===0?v=.5/t:x===i&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){let C=w/t,R=s+C*r;d.x=-b*Math.cos(R),d.y=M,d.z=b*Math.sin(R),f.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(C+v,1-S),y.push(c++)}h.push(y)}for(let x=0;x<i;x++)for(let y=0;y<t;y++){let S=h[x][y+1],_=h[x][y],M=h[x+1][y],b=h[x+1][y+1];(x!==0||o>0)&&p.push(S,_,b),(x!==i-1||l<Math.PI)&&p.push(_,M,b)}this.setIndex(p),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vr=class n extends Lt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new B,p=new B,f=new B;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=s;x++){let y=x/s*r;p.x=(e+t*Math.cos(m))*Math.cos(y),p.y=(e+t*Math.cos(m))*Math.sin(y),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(p,u).normalize(),h.push(f.x,f.y,f.z),d.push(x/s),d.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,y=(s+1)*(g-1)+m-1,S=(s+1)*(g-1)+m,_=(s+1)*g+m;l.push(x,y,_),l.push(y,S,_)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ua=class n extends Lt{constructor(e=new Ca(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new Ge,h=new B,d=[],u=[],p=[],f=[];g(),this.setIndex(f),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(p,2));function g(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),y(),x()}function m(S){h=e.getPointAt(S/t,h);let _=o.normals[S],M=o.binormals[S];for(let b=0;b<=s;b++){let v=b/s*Math.PI*2,w=Math.sin(v),C=-Math.cos(v);l.x=C*_.x+w*M.x,l.y=C*_.y+w*M.y,l.z=C*_.z+w*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function x(){for(let S=1;S<=t;S++)for(let _=1;_<=s;_++){let M=(s+1)*(S-1)+(_-1),b=(s+1)*S+(_-1),v=(s+1)*S+_,w=(s+1)*(S-1)+_;f.push(M,b,w),f.push(b,v,w)}}function y(){for(let S=0;S<=t;S++)for(let _=0;_<=s;_++)c.x=S/t,c.y=_/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ec[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Sr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Y0(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Y0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function En(n){let e={};for(let t=0;t<n.length;t++){let i=Sr(n[t]);for(let s in i)e[s]=i[s]}return e}function Y0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function n1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function df(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var Bm={clone:Sr,merge:En},i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=s1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=n1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rc=class extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Cc=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Fa=class extends va{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function eo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Is=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ic=class extends Is{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wd,endingEnd:wd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Td:r=e,a=2*t-i;break;case Ed:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Td:o=e,l=2*i-t;break;case Ed:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),g=f*f,m=g*f,x=-u*m+2*u*g-u*f,y=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*f+1,S=(-1-p)*m+(1.5+p)*g+.5*f,_=p*m-p*g;for(let M=0;M!==a;++M)r[M]=x*o[h+M]+y*o[c+M]+S*o[l+M]+_*o[d+M];return r}},Lc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Dc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nc=class extends Is{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let f=(i-t)/(s-t),g=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*f;return r}let u=a*2,p=e-1;for(let f=0;f!==a;++f){let g=o[c+f],m=o[l+f],x=p*u+f*2,y=d[x],S=d[x+1],_=e*u+f*2,M=h[_],b=h[_+1],v=o1(i,t,y,M,s);r[f]=zm(v,g,S,b,m)}return r}};function zm(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function r1(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function o1(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=zm(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=r1(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),tc(e.settings)&&(i.settings={inTangents:eo(e.settings.inTangents,Array),outTangents:eo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case oa:t=this.InterpolantFactoryMethodDiscrete;break;case mc:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break;case Sd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return at("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return mc;case this.InterpolantFactoryMethodSmooth:return sc;case this.InterpolantFactoryMethodBezier:return Sd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;tc(this.settings)&&(q0(this.settings.inTangents,e),q0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;tc(this.settings)&&($0(this.settings.inTangents,e),$0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ht("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ht("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Zy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ht("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let f=0;f!==i;++f){let g=t[d+f];if(g!==t[u+f]||g!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function q0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function $0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=mc;var Ls=class extends qn{constructor(e,t,i){super(e,t,i)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=oa;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};Oc.prototype.ValueTypeName="color";var Uc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};Uc.prototype.ValueTypeName="number";var Fc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},ka=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends qn{constructor(e,t,i){super(e,t,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=oa;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};kc.prototype.ValueTypeName="vector";var Bc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hm=new Bc,zc=class{constructor(e){this.manager=e!==void 0?e:Hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var nc=new B,ic=new In,Li=new B,Ba=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nc,ic,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(nc,ic,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new B,Z0=new Ge,K0=new Ge,gn=class extends Ba{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,Z0,K0),t.subVectors(K0,Z0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Hc=class extends Ba{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var to=-90,no=1,yo=class extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(to,no,e,t);s.layers=this.layers,this.add(s);let r=new gn(to,no,e,t);r.layers=this.layers,this.add(r);let o=new gn(to,no,e,t);o.layers=this.layers,this.add(o);let a=new gn(to,no,e,t);a.layers=this.layers,this.add(a);let l=new gn(to,no,e,t);l.layers=this.layers,this.add(l);let c=new gn(to,no,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Gc=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ff="\\[\\]\\.:\\/",a1=new RegExp("["+ff+"]","g"),pf="[^"+ff+"]",l1="[^"+ff.replace("\\.","")+"]",c1=/((?:WC+[\/:])*)/.source.replace("WC",pf),h1=/(WCOD+)?/.source.replace("WCOD",l1),u1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pf),d1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pf),f1=new RegExp("^"+c1+h1+u1+d1+"$"),p1=["material","materials","bones","map"],Id=class{constructor(e,t,i){let s=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a1,"")}static parseTrackName(e){let t=f1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);p1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Id;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PR=new Float32Array(1);var _f=class _f{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};_f.prototype.isMatrix2=!0;var Ld=_f;function mf(n,e,t,i){let s=m1(i);switch(t){case jd:return n*e;case Kc:return n*e/s.components*s.byteLength;case Jc:return n*e/s.components*s.byteLength;case Os:return n*e*2/s.components*s.byteLength;case jc:return n*e*2/s.components*s.byteLength;case Qd:return n*e*3/s.components*s.byteLength;case Zn:return n*e*4/s.components*s.byteLength;case Qc:return n*e*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(n,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(n,8)*Math.max(e,8)/2;case sh:case rh:case ah:case lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oh:case Ya:case ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _h:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wh:case Th:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ah:case Rh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qa:case Ch:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m1(n){switch(n){case $n:case $d:return{byteLength:1,components:1};case So:case Zd:case Si:return{byteLength:2,components:1};case $c:case Zc:return{byteLength:2,components:4};case Mi:case qc:case ii:return{byteLength:4,components:1};case Kd:case Jd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cg(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _1(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,f)=>p.start-f.start);let u=0;for(let p=1;p<d.length;p++){let f=d[u],g=d[p];g.start<=f.start+f.count+1?f.count=Math.max(f.count,g.start+g.count-f.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,f=d.length;p<f;p++){let g=d[p];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
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
#endif`,S1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
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
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
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
#endif`,P1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N1=`#ifdef USE_IRIDESCENCE
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
#endif`,O1=`#ifdef USE_BUMPMAP
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
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,W1=`#define PI 3.141592653589793
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
} // validated`,X1=`vec3 transformedNormal = objectNormal;
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
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
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
#endif`,tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ub=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,db=`#ifdef USE_ENVMAP
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
#endif`,fb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
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
#endif`,vb=`uniform sampler2D dfgLUT;
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
}`,yb=`
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pb=`#if defined( USE_POINTS_UV )
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
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nb=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
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
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vb=`#ifdef USE_NORMALMAP
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
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rM=`float getShadowMask() {
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
}`,oM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aM=`#ifdef USE_SKINNING
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
#endif`,lM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
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
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#ifdef USE_TRANSMISSION
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`uniform float backgroundBlurriness;
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
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
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
}`,AM=`#if DEPTH_PACKING == 3200
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
}`,RM=`#define DISTANCE
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
}`,CM=`#define DISTANCE
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`uniform float scale;
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
}`,DM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,OM=`uniform vec3 diffuse;
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
}`,UM=`#define LAMBERT
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
}`,FM=`#define LAMBERT
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
}`,kM=`#define MATCAP
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
}`,BM=`#define MATCAP
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
}`,zM=`#define NORMAL
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
}`,HM=`#define NORMAL
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
}`,GM=`#define PHONG
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
}`,VM=`#define PHONG
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
}`,WM=`#define STANDARD
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
}`,XM=`#define STANDARD
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
}`,YM=`#define TOON
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
}`,qM=`#define TOON
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
}`,$M=`uniform float size;
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
}`,ZM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,JM=`uniform vec3 color;
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
}`,jM=`uniform float rotation;
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
}`,QM=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:b1,alphahash_pars_fragment:M1,alphamap_fragment:S1,alphamap_pars_fragment:w1,alphatest_fragment:T1,alphatest_pars_fragment:E1,aomap_fragment:A1,aomap_pars_fragment:R1,batching_pars_vertex:C1,batching_vertex:P1,begin_vertex:I1,beginnormal_vertex:L1,bsdfs:D1,iridescence_fragment:N1,bumpmap_pars_fragment:O1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:k1,clipping_planes_vertex:B1,color_fragment:z1,color_pars_fragment:H1,color_pars_vertex:G1,color_vertex:V1,common:W1,defaultnormal_vertex:X1,displacementmap_pars_vertex:Y1,displacementmap_vertex:q1,emissivemap_fragment:$1,emissivemap_pars_fragment:Z1,colorspace_fragment:K1,colorspace_pars_fragment:J1,envmap_fragment:j1,envmap_common_pars_fragment:Q1,envmap_pars_fragment:eb,envmap_pars_vertex:tb,envmap_physical_pars_fragment:db,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:sb,fog_fragment:rb,fog_pars_fragment:ob,gradientmap_pars_fragment:ab,lightmap_pars_fragment:lb,lights_lambert_fragment:cb,lights_lambert_pars_fragment:hb,lights_pars_begin:ub,lights_toon_fragment:fb,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:xb,lights_physical_pars_fragment:vb,lights_fragment_begin:yb,lights_fragment_maps:_b,lights_fragment_end:bb,lightprobes_pars_fragment:Mb,logdepthbuf_fragment:Sb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:Eb,map_fragment:Ab,map_pars_fragment:Rb,map_particle_fragment:Cb,map_particle_pars_fragment:Pb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Db,morphcolor_vertex:Nb,morphnormal_vertex:Ob,morphtarget_pars_vertex:Ub,morphtarget_vertex:Fb,normal_fragment_begin:kb,normal_fragment_maps:Bb,normal_pars_fragment:zb,normal_pars_vertex:Hb,normal_vertex:Gb,normalmap_pars_fragment:Vb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:Xb,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:qb,opaque_fragment:$b,packing:Zb,premultiplied_alpha_fragment:Kb,project_vertex:Jb,dithering_fragment:jb,dithering_pars_fragment:Qb,roughnessmap_fragment:eM,roughnessmap_pars_fragment:tM,shadowmap_pars_fragment:nM,shadowmap_pars_vertex:iM,shadowmap_vertex:sM,shadowmask_pars_fragment:rM,skinbase_vertex:oM,skinning_pars_vertex:aM,skinning_vertex:lM,skinnormal_vertex:cM,specularmap_fragment:hM,specularmap_pars_fragment:uM,tonemapping_fragment:dM,tonemapping_pars_fragment:fM,transmission_fragment:pM,transmission_pars_fragment:mM,uv_pars_fragment:gM,uv_pars_vertex:xM,uv_vertex:vM,worldpos_vertex:yM,background_vert:_M,background_frag:bM,backgroundCube_vert:MM,backgroundCube_frag:SM,cube_vert:wM,cube_frag:TM,depth_vert:EM,depth_frag:AM,distance_vert:RM,distance_frag:CM,equirect_vert:PM,equirect_frag:IM,linedashed_vert:LM,linedashed_frag:DM,meshbasic_vert:NM,meshbasic_frag:OM,meshlambert_vert:UM,meshlambert_frag:FM,meshmatcap_vert:kM,meshmatcap_frag:BM,meshnormal_vert:zM,meshnormal_frag:HM,meshphong_vert:GM,meshphong_frag:VM,meshphysical_vert:WM,meshphysical_frag:XM,meshtoon_vert:YM,meshtoon_frag:qM,points_vert:$M,points_frag:ZM,shadow_vert:KM,shadow_frag:JM,sprite_vert:jM,sprite_frag:QM},Je={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Bi={basic:{uniforms:En([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:En([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:En([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:En([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:En([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:En([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:En([Je.points,Je.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:En([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:En([Je.common,Je.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:En([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:En([Je.sprite,Je.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:En([Je.common,Je.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:En([Je.lights,Je.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Bi.physical={uniforms:En([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Lh={r:0,b:0,g:0},eS=new bt,hg=new dt;hg.set(-1,0,0,0,1,0,0,0,1);function tS(n,e,t,i,s,r){let o=new Qe(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function p(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=e.get(S,_)}return S}function f(y){let S=!1,_=p(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),S=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,S){let _=p(S);_&&_.isCubeTexture?(c===void 0&&(c=new lt(new xt(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Sr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eS.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hg),c.material.toneMapped=At.getTransfer(_.colorSpace)!==Dt,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new lt(new Ps(2,2),new wn({name:"BackgroundMaterial",uniforms:Sr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=At.getTransfer(_.colorSpace)!==Dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Lh,df(n)),t.buffers.color.setClear(Lh.r,Lh.g,Lh.b,S,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:f,addToRenderList:g,dispose:x}}function nS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(L,T,I,E,N){let k=!1,V=d(L,E,I,T);r!==V&&(r=V,c(r.object)),k=p(L,E,I,N),k&&f(L,E,I,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(L,T,I,E),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function d(L,T,I,E){let N=E.wireframe===!0,k=i[T.id];k===void 0&&(k={},i[T.id]=k);let V=L.isInstancedMesh===!0?L.id:0,te=k[V];te===void 0&&(te={},k[V]=te);let X=te[I.id];X===void 0&&(X={},te[I.id]=X);let Q=X[N];return Q===void 0&&(Q=u(l()),X[N]=Q),Q}function u(L){let T=[],I=[],E=[];for(let N=0;N<t;N++)T[N]=0,I[N]=0,E[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:E,object:L,attributes:{},index:null}}function p(L,T,I,E){let N=r.attributes,k=T.attributes,V=0,te=I.getAttributes();for(let X in te)if(te[X].location>=0){let $=N[X],Y=k[X];if(Y===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),$===void 0||$.attribute!==Y||Y&&$.data!==Y.data)return!0;V++}return r.attributesNum!==V||r.index!==E}function f(L,T,I,E){let N={},k=T.attributes,V=0,te=I.getAttributes();for(let X in te)if(te[X].location>=0){let $=k[X];$===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let Y={};Y.attribute=$,$&&$.data&&(Y.data=$.data),N[X]=Y,V++}r.attributes=N,r.attributesNum=V,r.index=E}function g(){let L=r.newAttributes;for(let T=0,I=L.length;T<I;T++)L[T]=0}function m(L){x(L,0)}function x(L,T){let I=r.newAttributes,E=r.enabledAttributes,N=r.attributeDivisors;I[L]=1,E[L]===0&&(n.enableVertexAttribArray(L),E[L]=1),N[L]!==T&&(n.vertexAttribDivisor(L,T),N[L]=T)}function y(){let L=r.newAttributes,T=r.enabledAttributes;for(let I=0,E=T.length;I<E;I++)T[I]!==L[I]&&(n.disableVertexAttribArray(I),T[I]=0)}function S(L,T,I,E,N,k,V){V===!0?n.vertexAttribIPointer(L,T,I,N,k):n.vertexAttribPointer(L,T,I,E,N,k)}function _(L,T,I,E){g();let N=E.attributes,k=I.getAttributes(),V=T.defaultAttributeValues;for(let te in k){let X=k[te];if(X.location>=0){let Q=N[te];if(Q===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let $=Q.normalized,Y=Q.itemSize,_e=e.get(Q);if(_e===void 0)continue;let J=_e.buffer,Z=_e.type,fe=_e.bytesPerElement,Be=Z===n.INT||Z===n.UNSIGNED_INT||Q.gpuType===qc;if(Q.isInterleavedBufferAttribute){let W=Q.data,Te=W.isInterleavedBuffer===!0?W.stride:W.itemSize,Le=Q.offset;if(W.isInstancedInterleavedBuffer||W.isInstancedBufferAttribute){for(let Ae=0;Ae<X.locationSize;Ae++)x(X.location+Ae,W.meshPerAttribute);L.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)m(X.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ae=0;Ae<X.locationSize;Ae++)S(X.location+Ae,Y/X.locationSize,Z,$,Te*fe,(Le+Y/X.locationSize*Ae)*fe,Be)}else{if(Q.isInstancedBufferAttribute){for(let W=0;W<X.locationSize;W++)x(X.location+W,Q.meshPerAttribute);L.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let W=0;W<X.locationSize;W++)m(X.location+W);n.bindBuffer(n.ARRAY_BUFFER,J);for(let W=0;W<X.locationSize;W++)S(X.location+W,Y/X.locationSize,Z,$,Y*fe,Y/X.locationSize*W*fe,Be)}}else if(V!==void 0){let $=V[te];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(X.location,$);break;case 3:n.vertexAttrib3fv(X.location,$);break;case 4:n.vertexAttrib4fv(X.location,$);break;default:n.vertexAttrib1fv(X.location,$)}}}}y()}function M(){C();for(let L in i){let T=i[L];for(let I in T){let E=T[I];for(let N in E){let k=E[N];for(let V in k)h(k[V].object),delete k[V];delete E[N]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;let T=i[L.id];for(let I in T){let E=T[I];for(let N in E){let k=E[N];for(let V in k)h(k[V].object),delete k[V];delete E[N]}}delete i[L.id]}function v(L){for(let T in i){let I=i[T];for(let E in I){let N=I[E];if(N[L.id]===void 0)continue;let k=N[L.id];for(let V in k)h(k[V].object),delete k[V];delete N[L.id]}}}function w(L){for(let T in i){let I=i[T],E=L.isInstancedMesh===!0?L.id:0,N=I[E];if(N!==void 0){for(let k in N){let V=N[k];for(let te in V)h(V[te].object),delete V[te];delete N[k]}delete I[E],Object.keys(I).length===0&&delete i[T]}}}function C(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:v,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function iS(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function sS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Zn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==$n&&v!==ii&&!w&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(at("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:M,samples:b}}function rS(n){let e=this,t=null,i=0,s=!1,r=!1,o=new bi,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let f=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,x=n.get(d);if(!s||f===null||f.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,_=x.clippingState||null;l.value=_,_=h(f,u,S,p);for(let M=0;M!==S;++M)_[M]=t[M];x.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,f){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,f!==!0||m===null){let x=p+g*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<x)&&(m=new Float32Array(x));for(let S=0,_=p;S!==g;++S,_+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var Ka=class extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ba(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xt(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:yr});r.uniforms.tEquirect.value=t;let o=new lt(s,r),a=t.minFilter;return t.minFilter===ds&&(t.minFilter=un),new yo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Gm=256,oS=3,aS=20,ug=256,dg=16,lS=3,cS=new B,hS=new Qe,Nh=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yo(1,10,null),this._boxMesh=new lt(new xt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=cS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(hS));let m=new yo(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=f,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Gm,lf(e))}_fromTexture(e,t){e.mapping===br||e.mapping===Mo?this._setSize(e.image.length===0?Gm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Vm(e,!1,!1),i=Math.log2(e)-oS;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Vm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===br||e.mapping===Mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=uS(),this._integrationMaterial=dS());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/dg);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-lS)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(ug*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fS());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Vm(n,e,t){return new Ka(n,{minFilter:ds,generateMipmaps:e,type:Si,colorSpace:aa,depthBuffer:t})}function Ja(n,e,t){return new wn({name:n,uniforms:e,vertexShader:Mt.cube_vert,fragmentShader:t,side:nn,blending:yr,depthTest:!1,depthWrite:!1})}function uS(){return Ja("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ug}u

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
	`)}function dS(){return Ja("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dg}},`

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
	`)}function fS(){return Ja("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${aS}
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
	`)}function Wm(){return Ja("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xm(){return Ja("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function pS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Wc||p===Xc)if(e.has(u)){let f=e.get(u).texture;return a(f,u.mapping)}else{let f=u.image;if(f&&f.height>0){let g=new Ka(f.height);return g.fromEquirectangularTexture(n,u),e.set(u,g),u.addEventListener("dispose",c),a(g.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,f=p===Wc||p===Xc,g=p===br||p===Mo;if(f||g){let m=t.get(u),x=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return i===null&&(i=new Nh(n)),m=f?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return f&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Nh(n)),m=f?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,p){return p===Wc?u.mapping=br:p===Xc&&(u.mapping=Mo),u}function l(u){let p=0,f=6;for(let g=0;g<f;g++)u[g]!==void 0&&p++;return p===f}function c(u){let p=u.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function mS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ta("WebGLRenderer: "+i+" extension not supported."),s}}}function gS(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(f=>delete s[f]);function a(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id],o.unregister(f);let g=r.get(f);g&&(e.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),t.memory.geometries++),g}function h(f){let g=f.attributes;for(let m in g)e.update(g[m],n.ARRAY_BUFFER)}function d(f){let g=f.index,m=f.attributes.position,x=0;if(m===void 0)return;let y=g!==null?g.array.length:m.array.length/3-1,S=m.count>=65535?ma:pa,_=new S(Math.ceil(y/3)*6,1),M=_.array;if(g!==null){let v=g.array;x=g.version;for(let w=0,C=0;w<y;w+=3){let R=v[w+0],L=v[w+1],T=v[w+2];M[C++]=R,M[C++]=L,M[C++]=L,M[C++]=T,M[C++]=T,M[C++]=R}}else{x=m.version;for(let v=0,w=0;v<y;v+=3){let C=v+0,R=v+1,L=v+2;M[w++]=C,M[w++]=R,M[w++]=R,M[w++]=L,M[w++]=L,M[w++]=C}}_.version=x;let b=r.get(f);b&&e.remove(b),r.set(f,_)}function u(f){let g=r.get(f);if(g){let m=f.index;m!==null&&g.version<m.version&&d(f)}else d(f);return r.get(f)}function p(){for(let f in s){let g=s[f].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function xS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*o,p),t.update(u,i,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=u[m];t.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yS(n,e,t){let i=new WeakMap,s=new Wt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let C=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;p===!0&&(S=1),f===!0&&(S=2),g===!0&&(S=3);let _=a.attributes.position.count*S,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*M*4*d),v=new da(b,_,M,d);v.type=ii,v.needsUpdate=!0;let w=S*4;for(let R=0;R<d;R++){let L=m[R],T=x[R],I=y[R],E=_*M*4*R;for(let N=0;N<L.count;N++){let k=N*w;p===!0&&(s.fromBufferAttribute(L,N),b[E+k+0]=s.x,b[E+k+1]=s.y,b[E+k+2]=s.z,b[E+k+3]=0),f===!0&&(s.fromBufferAttribute(T,N),b[E+k+4]=s.x,b[E+k+5]=s.y,b[E+k+6]=s.z,b[E+k+7]=0),g===!0&&(s.fromBufferAttribute(I,N),b[E+k+8]=s.x,b[E+k+9]=s.y,b[E+k+10]=s.z,b[E+k+11]=I.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new Ge(_,M)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function _S(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var bS={[zd]:"LINEAR_TONE_MAPPING",[Hd]:"REINHARD_TONE_MAPPING",[Gd]:"CINEON_TONE_MAPPING",[Vd]:"ACES_FILMIC_TONE_MAPPING",[Xd]:"AGX_TONE_MAPPING",[Yd]:"NEUTRAL_TONE_MAPPING",[Wd]:"CUSTOM_TONE_MAPPING"};function MS(n,e,t,i,s,r){let o=new Yn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Lt;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));let d=new Rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new lt(h,d),p=new Hc(-1,1,1,-1,0,1),f=null,g=null,m=!1,x,y=null,S=[],_=!1;this.setSize=function(M,b){o.setSize(M,b),a!==null&&a.setSize(M,b),l!==null&&l.setSize(M,b);for(let v=0;v<S.length;v++){let w=S[v];w.setSize&&w.setSize(M,b)}},this.setEffects=function(M){S=M,_=S.length>0&&S[0].isRenderPass===!0;let b=o.width,v=o.height;S.length>0&&a===null&&(a=new Yn(b,v,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new Yn(b,v,{type:Si,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&S.some(C=>C.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new us(b,v),r===!0&&(c.format=fs,c.type=Mr)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let C=0;C<S.length;C++){let R=S[C];R.setSize&&R.setSize(b,v),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(M,b){if(m||M.toneMapping===Fi&&S.length===0)return!1;if(y=b,b!==null){let v=b.width,w=b.height;(o.width!==v||o.height!==w)&&this.setSize(v,w)}return _===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Fi,!0},this.hasRenderPass=function(){return _},this.end=function(M,b){M.toneMapping=x,m=!0;let v=o,w=a;for(let C=0;C<S.length;C++){let R=S[C];R.enabled!==!1&&(R.render(M,w,v,b),R.needsSwap!==!1&&(v=w,w=w===a?l:a))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,d.defines={},At.getTransfer(f)===Dt&&(d.defines.SRGB_TRANSFER="");let C=bS[g];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(y),M.render(u,p),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var fg=new Ln,pg=new us(1,1),mg=new Sa(1),gg=new da,xg=new vc,vg=new ba,Ym=[],qm=[],$m=new Float32Array(16),Zm=new Float32Array(9),Km=new Float32Array(4);function Eo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ym[s];if(r===void 0&&(r=new Float32Array(s),Ym[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uh(n,e){let t=qm[e];t===void 0&&(t=new Int32Array(e),qm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function TS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function ES(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function AS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Km.set(i),n.uniformMatrix2fv(this.addr,!1,Km),rn(t,i)}}function RS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Zm.set(i),n.uniformMatrix3fv(this.addr,!1,Zm),rn(t,i)}}function CS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;$m.set(i),n.uniformMatrix4fv(this.addr,!1,$m),rn(t,i)}}function PS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function IS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function LS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function DS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function NS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function OS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function US(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function FS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function Fh(n){return n.version===0&&(n.compareFunction=sf,n.needsUpdate=!0),n}function kS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Fh(pg):r=fg,t.setTexture2D(e||r,s)}function BS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||xg,s)}function zS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Fh(mg):r=vg,t.setTextureCube(e||r,s)}function HS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gg,s)}function GS(n){switch(n){case 5126:return SS;case 35664:return wS;case 35665:return TS;case 35666:return ES;case 35674:return AS;case 35675:return RS;case 35676:return CS;case 5124:case 35670:return PS;case 35667:case 35671:return IS;case 35668:case 35672:return LS;case 35669:case 35673:return DS;case 5125:return NS;case 36294:return OS;case 36295:return US;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return zS;case 36289:case 36303:case 36311:case 36292:return HS}}function VS(n,e){n.uniform1fv(this.addr,e)}function WS(n,e){let t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function XS(n,e){let t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function YS(n,e){let t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function qS(n,e){let t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $S(n,e){let t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZS(n,e){let t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KS(n,e){n.uniform1iv(this.addr,e)}function JS(n,e){n.uniform2iv(this.addr,e)}function jS(n,e){n.uniform3iv(this.addr,e)}function QS(n,e){n.uniform4iv(this.addr,e)}function ew(n,e){n.uniform1uiv(this.addr,e)}function tw(n,e){n.uniform2uiv(this.addr,e)}function nw(n,e){n.uniform3uiv(this.addr,e)}function iw(n,e){n.uniform4uiv(this.addr,e)}function sw(n,e,t){let i=this.cache,s=e.length,r=Uh(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Fh(pg):o=fg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function rw(n,e,t){let i=this.cache,s=e.length,r=Uh(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xg,r[o])}function ow(n,e,t){let i=this.cache,s=e.length,r=Uh(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Fh(mg):o=vg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function aw(n,e,t){let i=this.cache,s=e.length,r=Uh(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gg,r[o])}function lw(n){switch(n){case 5126:return VS;case 35664:return WS;case 35665:return XS;case 35666:return YS;case 35674:return qS;case 35675:return $S;case 35676:return ZS;case 5124:case 35670:return KS;case 35667:case 35671:return JS;case 35668:case 35672:return jS;case 35669:case 35673:return QS;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return aw}}var Sf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GS(t.type)}},wf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lw(t.type)}},Tf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},bf=/(\w+)(\])?(\[|\.)?/g;function Jm(n,e){n.seq.push(e),n.map[e.id]=e}function cw(n,e,t){let i=n.name,s=i.length;for(bf.lastIndex=0;;){let r=bf.exec(i),o=bf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jm(t,c===void 0?new Sf(a,n,e):new wf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Tf(a),Jm(t,d)),t=d}}}var To=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);cw(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function jm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var hw=37297,uw=0;function dw(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Qm=new dt;function fw(n){At._getMatrix(Qm,At.workingColorSpace,n);let e=`mat3( ${Qm.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function eg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+dw(n.getShaderSource(e),a)}else return r}function pw(n,e){let t=fw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var mw={[zd]:"Linear",[Hd]:"Reinhard",[Gd]:"Cineon",[Vd]:"ACESFilmic",[Xd]:"AgX",[Yd]:"Neutral",[Wd]:"Custom"};function gw(n,e){let t=mw[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dh=new B;function xw(){At.getLuminanceCoefficients(Dh);let n=Dh.x.toFixed(4),e=Dh.y.toFixed(4),t=Dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function yw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _w(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Za(n){return n!==""}function tg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ng(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(n){return n.replace(bw,Mw)}function Mw(n,e){let t=Mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ef(t)}var Sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(n){return n.replace(Sw,ww)}function ww(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Tw={[za]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function Ew(n){return Tw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Aw={[Mo]:"ENVMAP_MODE_REFRACTION"};function Rw(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Aw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cw={[Bd]:"ENVMAP_BLENDING_MULTIPLY",[vm]:"ENVMAP_BLENDING_MIX",[ym]:"ENVMAP_BLENDING_ADD"};function Pw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[n.combine]||"ENVMAP_BLENDING_NONE"}function Iw(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ew(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Rw(t),d=Pw(t),u=vw(t),p=yw(r),f=s.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Za).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Za).join(`
`),m.length>0&&(m+=`
`)):(g=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),m=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,pw("linearToOutputTexel",t.outputColorSpace),xw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),o=Ef(o),o=tg(o,t),o=ng(o,t),a=Ef(a),a=tg(a,t),a=ng(a,t),o=ig(o),a=ig(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=x+g+o,S=x+m+a,_=jm(s,s.VERTEX_SHADER,y),M=jm(s,s.FRAGMENT_SHADER,S);s.attachShader(f,_),s.attachShader(f,M),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function b(R){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(f)||"",T=s.getShaderInfoLog(_)||"",I=s.getShaderInfoLog(M)||"",E=L.trim(),N=T.trim(),k=I.trim(),V=!0,te=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,_,M);else{let X=eg(s,_,"vertex"),Q=eg(s,M,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+E+`
`+X+`
`+Q)}else E!==""?at("WebGLProgram: Program Info Log:",E):(N===""||k==="")&&(te=!1);te&&(R.diagnostics={runnable:V,programLog:E,vertexShader:{log:N,prefix:g},fragmentShader:{log:k,prefix:m}})}s.deleteShader(_),s.deleteShader(M),v=new To(s,f),w=_w(s,f)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(f,hw)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uw++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=_,this.fragmentShader=M,this}var Lw=0,Af=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Rf(e),t.set(e,i)),i}},Rf=class{constructor(e){this.id=Lw++,this.code=e,this.usedTimes=0}};function Dw(n){return n===Os||n===Ya||n===qa}function Nw(n,e,t,i,s,r){let o=new fa,a=new Af,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,w,C,R,L,T){let I=R.fog,E=L.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||N,k),te=u[v.type],X=i.precision;v.precision!==null&&(X=i.getMaxPrecision(v.precision),X!==v.precision&&at("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));let Q=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,$=Q!==void 0?Q.length:0,Y=0;E.morphAttributes.position!==void 0&&(Y=1),E.morphAttributes.normal!==void 0&&(Y=2),E.morphAttributes.color!==void 0&&(Y=3);let _e,J,Z,fe;if(te){let ze=Bi[te];_e=ze.vertexShader,J=ze.fragmentShader}else{_e=v.vertexShader,J=v.fragmentShader;let ze=a.getVertexShaderStage(v),st=a.getFragmentShaderStage(v);a.update(v,ze,st),Z=ze.id,fe=st.id}let Be=n.getRenderTarget(),W=n.state.buffers.depth.getReversed(),Te=L.isInstancedMesh===!0,Le=L.isBatchedMesh===!0,Ae=!!v.map,be=!!v.matcap,Ce=!!V,U=Ce&&V.isPMREMTexture===!0,K=!!v.aoMap,ne=!!v.lightMap,he=!!v.bumpMap&&v.wireframe===!1,ie=!!v.normalMap,ve=!!v.displacementMap,se=!!v.emissiveMap,me=!!v.metalnessMap,Ue=!!v.roughnessMap,Ve=v.anisotropy>0,z=v.clearcoat>0,ye=v.diffuseRoughness>0,Ne=v.dispersion>0,qe=v.retroreflectivity>0,de=v.iridescence>0,nt=v.sheen>0,Ie=v.transmission>0,Xe=Ve&&!!v.anisotropyMap,O=z&&!!v.clearcoatMap,A=z&&!!v.clearcoatNormalMap,ee=z&&!!v.clearcoatRoughnessMap,Re=ye&&!!v.diffuseRoughnessMap,ge=de&&!!v.iridescenceMap,Ee=de&&!!v.iridescenceThicknessMap,De=nt&&!!v.sheenColorMap,ce=nt&&!!v.sheenRoughnessMap,pe=!!v.specularMap,ke=!!v.specularColorMap,G=!!v.specularIntensityMap,le=Ie&&!!v.transmissionMap,ae=Ie&&!!v.thicknessMap,Fe=!!v.gradientMap,Pe=!!v.alphaMap,xe=v.alphaTest>0,Me=!!v.alphaHash,Ze=!!v.extensions,Se=Fi;v.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(Se=n.toneMapping);let We=U?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,je={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:_e,fragmentShader:J,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:Le,batchingColor:Le&&L._colorsTexture!==null,instancing:Te,instancingColor:Te&&L.instanceColor!==null,instancingMorph:Te&&L.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ae,matcap:be,envMap:Ce,envMapMode:Ce&&V.mapping,envMapPMREM:U,envMapMaxLod:U?We.length-1:null,envMapSize:U?We[0].width:null,aoMap:K,lightMap:ne,bumpMap:he,normalMap:ie,displacementMap:ve,emissiveMap:se,normalMapObjectSpace:ie&&v.normalMapType===Mm,normalMapTangentSpace:ie&&v.normalMapType===ef,packedNormalMap:ie&&v.normalMapType===ef&&Dw(v.normalMap.format),metalnessMap:me,roughnessMap:Ue,anisotropy:Ve,anisotropyMap:Xe,clearcoat:z,clearcoatMap:O,clearcoatNormalMap:A,clearcoatRoughnessMap:ee,diffuseRoughness:ye,diffuseRoughnessMap:Re,dispersion:Ne,retroreflection:qe,iridescence:de,iridescenceMap:ge,iridescenceThicknessMap:Ee,sheen:nt,sheenColorMap:De,sheenRoughnessMap:ce,specularMap:pe,specularColorMap:ke,specularIntensityMap:G,transmission:Ie,transmissionMap:le,thicknessMap:ae,gradientMap:Fe,opaque:v.transparent===!1&&v.blending===bo&&v.alphaToCoverage===!1,alphaMap:Pe,alphaTest:xe,alphaHash:Me,combine:v.combine,mapUv:Ae&&p(v.map.channel),aoMapUv:K&&p(v.aoMap.channel),lightMapUv:ne&&p(v.lightMap.channel),bumpMapUv:he&&p(v.bumpMap.channel),normalMapUv:ie&&p(v.normalMap.channel),displacementMapUv:ve&&p(v.displacementMap.channel),emissiveMapUv:se&&p(v.emissiveMap.channel),metalnessMapUv:me&&p(v.metalnessMap.channel),roughnessMapUv:Ue&&p(v.roughnessMap.channel),anisotropyMapUv:Xe&&p(v.anisotropyMap.channel),clearcoatMapUv:O&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ce&&p(v.sheenRoughnessMap.channel),specularMapUv:pe&&p(v.specularMap.channel),specularColorMapUv:ke&&p(v.specularColorMap.channel),specularIntensityMapUv:G&&p(v.specularIntensityMap.channel),transmissionMapUv:le&&p(v.transmissionMap.channel),thicknessMapUv:ae&&p(v.thicknessMap.channel),alphaMapUv:Pe&&p(v.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(ie||Ve),vertexNormals:!!E.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!E.attributes.uv&&(Ae||Pe),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||E.attributes.normal===void 0&&ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Y,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:T.filter(ze=>ze.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&At.getTransfer(v.map.colorSpace)===Dt,decodeVideoTextureEmissive:se&&v.emissiveMap.isVideoTexture===!0&&At.getTransfer(v.emissiveMap.colorSpace)===Dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ze&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&v.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(w,v),x(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapPMREM),v.push(w.envMapMaxLod),v.push(w.envMapSize),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.diffuseRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.numLightProbeGrids),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let w=u[v.type],C;if(w){let R=Bi[w];C=Bm.clone(R.uniforms)}else C=v.uniforms;return C}function S(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Iw(n,w,v,s),c.push(C),h.set(w,C)),C}function _(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function b(){a.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:_,releaseShaderCache:M,programs:c,dispose:b}}function Ow(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Uw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function rg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function og(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,f,g,m,x){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:p,material:f,materialVariant:o(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},n[e]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=f,y.materialVariant=o(u),y.groupOrder=g,y.renderOrder=u.renderOrder,y.z=m,y.group=x),e++,y}function l(u,p,f,g,m,x,y){y.reversedDepth===!0&&(m=-m);let S=a(u,p,f,g,m,x);f.transmission>0?i.push(S):f.transparent===!0?s.push(S):t.push(S)}function c(u,p,f,g,m,x){let y=a(u,p,f,g,m,x);f.transmission>0?i.unshift(y):f.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,p){t.length>1&&t.sort(u||Uw),i.length>1&&i.sort(p||rg),s.length>1&&s.sort(p||rg)}function d(){for(let u=e,p=n.length;u<p;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Fw(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new og,n.set(i,[o])):s>=r.length?(o=new og,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Qe};break;case"SpotLight":t={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Bw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var zw=0;function Hw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gw(n){let e=new kw,t=Bw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new bt,o=new bt;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,f=0,g=0,m=0,x=0,y=0,S=0,_=0,M=0,b=0,v=0,w=0,C=0,R=0;c.sort(Hw);for(let T=0,I=c.length;T<I;T++){let E=c[T],N=E.color,k=E.intensity,V=E.distance,te=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Os?te=E.shadow.map.texture:te=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=N.r*k,d+=N.g*k,u+=N.b*k;else if(E.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(E.sh.coefficients[X],k);R++}else if(E.isSunLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Q=E.shadow,$=t.get(E);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[f]=$,i.sunShadowMap[f]=te;let Y=Q.getViewportCount();for(let _e=0;_e<Y;_e++)i.sunShadowMatrix[g+_e]=Q.getMatrix(_e),i.sunShadowCascade[g+_e]=Q._cascadeData[_e];g+=Y,f++}i.sun[p]=X,p++}else if(E.isDirectionalLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Q=E.shadow,$=t.get(E);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=E.shadow.matrix,M++}i.directional[m]=X,m++}else if(E.isSpotLight){let X=e.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(N).multiplyScalar(k),X.distance=V,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,i.spot[y]=X;let Q=E.shadow;if(E.map&&(i.spotLightMap[w]=E.map,w++,Q.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[y]=Q.matrix,E.castShadow){let $=t.get(E);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=te,v++}y++}else if(E.isRectAreaLight){let X=e.get(E);X.color.copy(N).multiplyScalar(k),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),i.rectArea[S]=X,S++}else if(E.isPointLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){let Q=E.shadow,$=t.get(E);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,i.pointShadow[x]=$,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=E.shadow.matrix,b++}i.point[x]=X,x++}else if(E.isHemisphereLight){let X=e.get(E);X.skyColor.copy(E.color).multiplyScalar(k),X.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[_]=X,_++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==x||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==_||L.numSunShadows!==f||L.numDirectionalShadows!==M||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==w||L.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=x,i.hemi.length=_,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=x,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=_,L.numSunShadows=f,L.numDirectionalShadows=M,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=w,L.numLightProbes=R,i.version=zw++)}function l(c,h){let d=0,u=0,p=0,f=0,g=0,m=0,x=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let _=c[y];if(_.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(x),d++}else if(_.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),u++}else if(_.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(_.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(_.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),p++}else if(_.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function ag(n){let e=new Gw(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Vw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ag(n),e.set(s,[a])):r>=o.length?(a=new ag(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
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
}`,Yw=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],qw=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],lg=new bt,$a=new B,Mf=new B;function $w(n,e,t){let i=new fr,s=new Ge,r=new Ge,o=new Wt,a=new Cc,l=new Pc,c={},h=t.maxTextureSize,d={[Ns]:nn,[nn]:Ns,[Tn]:Tn},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Ww,fragmentShader:Xw}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Lt;f.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new lt(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let x=this.type;this.render=function(b,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Q0&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=za);let C=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),T=n.state;T.setBlending(yr),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let I=x!==this.type;I&&v.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(N=>N.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,N=b.length;E<N;E++){let k=b[E],V=k.shadow;if(V===void 0){at("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let te=V.getFrameExtents();s.multiply(te),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,V.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||I===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===_o){if(k.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Yn(s.x,s.y,{format:Os,type:Si,minFilter:un,magFilter:un,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new us(s.x,s.y,ii),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=cs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=hn,V.map.depthTexture.magFilter=hn}else k.isPointLight?(V.map=new Ka(s.x),V.map.depthTexture=new Sa(s.x,Mi)):(V.map=new Yn(s.x,s.y),V.map.depthTexture=new us(s.x,s.y,Mi)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=cs,this.type===za?(V.map.depthTexture.compareFunction=X?nf:tf,V.map.depthTexture.minFilter=un,V.map.depthTexture.magFilter=un):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=hn,V.map.depthTexture.magFilter=hn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();k.isPointLight!==!0&&V.updateMatrices(k,w);let $=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:w.layers;for(let Y=0;Y<Q;Y++){let _e=V.getCamera(Y);if(k.isPointLight){let J=V.camera,Z=V.matrix,fe=k.distance||J.far;fe!==J.far&&(J.far=fe,J.updateProjectionMatrix()),$a.setFromMatrixPosition(k.matrixWorld),J.position.copy($a),Mf.copy(J.position),Mf.add(Yw[Y]),J.up.copy(qw[Y]),J.lookAt(Mf),J.updateMatrixWorld(),Z.makeTranslation(-$a.x,-$a.y,-$a.z),lg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(lg,J.coordinateSystem,J.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Y),n.clear();else{Y===0&&(n.setRenderTarget(V.map),n.clear());let J=V.getViewport(Y);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),T.viewport(o)}i=V.getFrustum(Y),_(v,w,_e,k,$,this.type)}V.isPointLightShadow!==!0&&this.type===_o&&y(V,w),V.needsUpdate=!1}x=this.type,m.needsUpdate=!1,n.setRenderTarget(C,R,L)};function y(b,v){let w=e.update(g);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Yn(s.x,s.y,{format:Os,type:Si}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(v,null,w,u,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(v,null,w,p,g,null)}function S(b,v,w,C){let R=null,L=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=w.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let T=R.uuid,I=v.uuid,E=c[T];E===void 0&&(E={},c[T]=E);let N=E[I];N===void 0&&(N=R.clone(),E[I]=N,v.addEventListener("dispose",M)),R=N}if(R.visible=v.visible,R.wireframe=v.wireframe,C===_o?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let T=n.properties.get(R);T.light=w}return R}function _(b,v,w,C,R,L){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===_o)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let E=e.update(b),N=b.material;if(Array.isArray(N)){let k=E.groups;for(let V=0,te=k.length;V<te;V++){let X=k[V],Q=N[X.materialIndex];if(Q&&Q.visible){let $=S(b,Q,C,L);b.onBeforeShadow(n,b,v,w,E,$,X),n.renderBufferDirect(w,null,E,$,b,X),b.onAfterShadow(n,b,v,w,E,$,X)}}}else if(N.visible){let k=S(b,N,C,L);b.onBeforeShadow(n,b,v,w,E,k,null),n.renderBufferDirect(w,null,E,k,b,null),b.onAfterShadow(n,b,v,w,E,k,null)}}let I=b.children;for(let E=0,N=I.length;E<N;E++)_(I[E],v,w,C,R,L)}function M(b){b.target.removeEventListener("dispose",M);for(let w in c){let C=c[w],R=b.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Zw(n,e){function t(){let G=!1,le=new Wt,ae=null,Fe=new Wt(0,0,0,0);return{setMask:function(Pe){ae!==Pe&&!G&&(n.colorMask(Pe,Pe,Pe,Pe),ae=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,xe,Me,Ze,Se){Se===!0&&(Pe*=Ze,xe*=Ze,Me*=Ze),le.set(Pe,xe,Me,Ze),Fe.equals(le)===!1&&(n.clearColor(Pe,xe,Me,Ze),Fe.copy(le))},reset:function(){G=!1,ae=null,Fe.set(-1,0,0,0)}}}function i(){let G=!1,le=!1,ae=null,Fe=null,Pe=null;return{setReversed:function(xe){if(le!==xe){let Me=e.get("EXT_clip_control");xe?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),le=xe;let Ze=Pe;Pe=null,this.setClear(Ze)}},getReversed:function(){return le},setTest:function(xe){xe?W(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(xe){ae!==xe&&!G&&(n.depthMask(xe),ae=xe)},setFunc:function(xe){if(le&&(xe=Lm[xe]),Fe!==xe){switch(xe){case oc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case so:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case hc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=xe}},setLocked:function(xe){G=xe},setClear:function(xe){Pe!==xe&&(Pe=xe,le&&(xe=1-xe),n.clearDepth(xe))},reset:function(){G=!1,ae=null,Fe=null,Pe=null,le=!1}}}function s(){let G=!1,le=null,ae=null,Fe=null,Pe=null,xe=null,Me=null,Ze=null,Se=null;return{setTest:function(We){G||(We?W(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(We){le!==We&&!G&&(n.stencilMask(We),le=We)},setFunc:function(We,je,ze){(ae!==We||Fe!==je||Pe!==ze)&&(n.stencilFunc(We,je,ze),ae=We,Fe=je,Pe=ze)},setOp:function(We,je,ze){(xe!==We||Me!==je||Ze!==ze)&&(n.stencilOp(We,je,ze),xe=We,Me=je,Ze=ze)},setLocked:function(We){G=We},setClear:function(We){Se!==We&&(n.clearStencil(We),Se=We)},reset:function(){G=!1,le=null,ae=null,Fe=null,Pe=null,xe=null,Me=null,Ze=null,Se=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},p=new WeakMap,f=[],g=null,m=!1,x=null,y=null,S=null,_=null,M=null,b=null,v=null,w=new Qe(0,0,0),C=0,R=!1,L=null,T=null,I=null,E=null,N=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=te>=2);let Q=null,$={},Y=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),J=new Wt().fromArray(Y),Z=new Wt().fromArray(_e);function fe(G,le,ae,Fe){let Pe=new Uint8Array(4),xe=n.createTexture();n.bindTexture(G,xe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<ae;Me++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(le+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return xe}let Be={};Be[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(n.DEPTH_TEST),o.setFunc(so),he(!1),ie(Dd),W(n.CULL_FACE),K(yr);function W(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function Te(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function Le(G,le){return u[G]!==le?(n.bindFramebuffer(G,le),u[G]=le,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Ae(G,le){let ae=f,Fe=!1;if(G){ae=p.get(le),ae===void 0&&(ae=[],p.set(le,ae));let Pe=G.textures;if(ae.length!==Pe.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Me=Pe.length;xe<Me;xe++)ae[xe]=n.COLOR_ATTACHMENT0+xe;ae.length=Pe.length,Fe=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(ae)}function be(G){return g!==G?(n.useProgram(G),g=G,!0):!1}let Ce={[_r]:n.FUNC_ADD,[tm]:n.FUNC_SUBTRACT,[nm]:n.FUNC_REVERSE_SUBTRACT};Ce[im]=n.MIN,Ce[sm]=n.MAX;let U={[rm]:n.ZERO,[om]:n.ONE,[am]:n.SRC_COLOR,[Fd]:n.SRC_ALPHA,[fm]:n.SRC_ALPHA_SATURATE,[um]:n.DST_COLOR,[cm]:n.DST_ALPHA,[lm]:n.ONE_MINUS_SRC_COLOR,[kd]:n.ONE_MINUS_SRC_ALPHA,[dm]:n.ONE_MINUS_DST_COLOR,[hm]:n.ONE_MINUS_DST_ALPHA,[pm]:n.CONSTANT_COLOR,[mm]:n.ONE_MINUS_CONSTANT_COLOR,[gm]:n.CONSTANT_ALPHA,[xm]:n.ONE_MINUS_CONSTANT_ALPHA};function K(G,le,ae,Fe,Pe,xe,Me,Ze,Se,We){if(G===yr){m===!0&&(Te(n.BLEND),m=!1);return}if(m===!1&&(W(n.BLEND),m=!0),G!==em){if(G!==x||We!==R){if((y!==_r||M!==_r)&&(n.blendEquation(n.FUNC_ADD),y=_r,M=_r),We)switch(G){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nd:n.blendFunc(n.ONE,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ud:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ht("WebGLState: Invalid blending: ",G);break}else switch(G){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Od:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ud:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",G);break}S=null,_=null,b=null,v=null,w.set(0,0,0),C=0,x=G,R=We}return}Pe=Pe||le,xe=xe||ae,Me=Me||Fe,(le!==y||Pe!==M)&&(n.blendEquationSeparate(Ce[le],Ce[Pe]),y=le,M=Pe),(ae!==S||Fe!==_||xe!==b||Me!==v)&&(n.blendFuncSeparate(U[ae],U[Fe],U[xe],U[Me]),S=ae,_=Fe,b=xe,v=Me),(Ze.equals(w)===!1||Se!==C)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Se),w.copy(Ze),C=Se),x=G,R=!1}function ne(G,le){G.side===Tn?Te(n.CULL_FACE):W(n.CULL_FACE);let ae=G.side===nn;le&&(ae=!ae),he(ae),G.blending===bo&&G.transparent===!1?K(yr):K(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Fe=G.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),se(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){L!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),L=G)}function ie(G){G!==J0?(W(n.CULL_FACE),G!==T&&(G===Dd?n.cullFace(n.BACK):G===j0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),T=G}function ve(G){G!==I&&(V&&n.lineWidth(G),I=G)}function se(G,le,ae){G?(W(n.POLYGON_OFFSET_FILL),(E!==le||N!==ae)&&(E=le,N=ae,o.getReversed()&&(le=-le,ae=-ae),n.polygonOffset(le,ae))):Te(n.POLYGON_OFFSET_FILL)}function me(G){G?W(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Ue(G){G===void 0&&(G=n.TEXTURE0+k-1),Q!==G&&(n.activeTexture(G),Q=G)}function Ve(G,le,ae){ae===void 0&&(Q===null?ae=n.TEXTURE0+k-1:ae=Q);let Fe=$[ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},$[ae]=Fe),(Fe.type!==G||Fe.texture!==le)&&(Q!==ae&&(n.activeTexture(ae),Q=ae),n.bindTexture(G,le||Be[G]),Fe.type=G,Fe.texture=le)}function z(){let G=$[Q];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ye(){try{n.compressedTexImage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function Ne(){try{n.compressedTexImage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function qe(){try{n.texSubImage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function de(){try{n.texSubImage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function nt(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function Xe(){try{n.texStorage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function O(){try{n.texStorage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function A(){try{n.texImage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function ee(){try{n.texImage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function Re(G){return d[G]!==void 0?d[G]:n.getParameter(G)}function ge(G,le){d[G]!==le&&(n.pixelStorei(G,le),d[G]=le)}function Ee(G){J.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),J.copy(G))}function De(G){Z.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function ce(G,le){let ae=c.get(le);ae===void 0&&(ae=new WeakMap,c.set(le,ae));let Fe=ae.get(G);Fe===void 0&&(Fe=n.getUniformBlockIndex(le,G.name),n.uniformBlockBinding(le,Fe,Fe),ae.set(G,Fe))}function pe(G,le,ae){let Pe=c.get(le).get(G);l[Pe]!==ae&&(n.bindBufferBase(n.UNIFORM_BUFFER,Pe,ae),l[Pe]=ae)}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,$={},u={},l={},p=new WeakMap,f=[],g=null,m=!1,x=null,y=null,S=null,_=null,M=null,b=null,v=null,w=new Qe(0,0,0),C=0,R=!1,L=null,T=null,I=null,E=null,N=null,J.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:Te,bindFramebuffer:Le,drawBuffers:Ae,useProgram:be,setBlending:K,setMaterial:ne,setFlipSided:he,setCullFace:ie,setLineWidth:ve,setPolygonOffset:se,setScissorTest:me,activeTexture:Ue,bindTexture:Ve,unbindTexture:z,compressedTexImage2D:ye,compressedTexImage3D:Ne,texImage2D:A,texImage3D:ee,pixelStorei:ge,getParameter:Re,updateUBOMapping:ce,uniformBlockBinding:pe,texStorage2D:Xe,texStorage3D:O,texSubImage2D:qe,texSubImage3D:de,compressedTexSubImage2D:nt,compressedTexSubImage3D:Ie,scissor:Ee,viewport:De,reset:ke}}function Kw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap,d=new Set,u,p=new WeakMap,f=new Set,g=new FinalizationRegistry(O=>f.delete(O)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,A){return m?new OffscreenCanvas(O,A):ha("canvas")}function y(O,A,ee){let Re=1,ge=Xe(O);if((ge.width>ee||ge.height>ee)&&(Re=ee/Math.max(ge.width,ge.height)),Re<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Ee=Math.floor(Re*ge.width),De=Math.floor(Re*ge.height);u===void 0&&(u=x(Ee,De));let ce=A?x(Ee,De):u;return ce.width=Ee,ce.height=De,ce.getContext("2d").drawImage(O,0,0,Ee,De),at("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ee+"x"+De+")."),ce}else return"data"in O&&at("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){n.generateMipmap(O)}function M(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(O,A,ee,Re,ge,Ee=!1){if(O!==null){if(n[O]!==void 0)return n[O];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let De;Re&&(De=e.get("EXT_texture_norm16"),De||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=A;if(A===n.RED&&(ee===n.FLOAT&&(ce=n.R32F),ee===n.HALF_FLOAT&&(ce=n.R16F),ee===n.UNSIGNED_BYTE&&(ce=n.R8),ee===n.UNSIGNED_SHORT&&De&&(ce=De.R16_EXT),ee===n.SHORT&&De&&(ce=De.R16_SNORM_EXT)),A===n.RED_INTEGER&&(ee===n.UNSIGNED_BYTE&&(ce=n.R8UI),ee===n.UNSIGNED_SHORT&&(ce=n.R16UI),ee===n.UNSIGNED_INT&&(ce=n.R32UI),ee===n.BYTE&&(ce=n.R8I),ee===n.SHORT&&(ce=n.R16I),ee===n.INT&&(ce=n.R32I)),A===n.RG&&(ee===n.FLOAT&&(ce=n.RG32F),ee===n.HALF_FLOAT&&(ce=n.RG16F),ee===n.UNSIGNED_BYTE&&(ce=n.RG8),ee===n.UNSIGNED_SHORT&&De&&(ce=De.RG16_EXT),ee===n.SHORT&&De&&(ce=De.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(ee===n.UNSIGNED_BYTE&&(ce=n.RG8UI),ee===n.UNSIGNED_SHORT&&(ce=n.RG16UI),ee===n.UNSIGNED_INT&&(ce=n.RG32UI),ee===n.BYTE&&(ce=n.RG8I),ee===n.SHORT&&(ce=n.RG16I),ee===n.INT&&(ce=n.RG32I)),A===n.RGB_INTEGER&&(ee===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),ee===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),ee===n.UNSIGNED_INT&&(ce=n.RGB32UI),ee===n.BYTE&&(ce=n.RGB8I),ee===n.SHORT&&(ce=n.RGB16I),ee===n.INT&&(ce=n.RGB32I)),A===n.RGBA_INTEGER&&(ee===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),ee===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),ee===n.UNSIGNED_INT&&(ce=n.RGBA32UI),ee===n.BYTE&&(ce=n.RGBA8I),ee===n.SHORT&&(ce=n.RGBA16I),ee===n.INT&&(ce=n.RGBA32I)),A===n.RGB&&(ee===n.UNSIGNED_SHORT&&De&&(ce=De.RGB16_EXT),ee===n.SHORT&&De&&(ce=De.RGB16_SNORM_EXT),ee===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),ee===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),A===n.RGBA){let pe=Ee?la:At.getTransfer(ge);ee===n.FLOAT&&(ce=n.RGBA32F),ee===n.HALF_FLOAT&&(ce=n.RGBA16F),ee===n.UNSIGNED_BYTE&&(ce=pe===Dt?n.SRGB8_ALPHA8:n.RGBA8),ee===n.UNSIGNED_SHORT&&De&&(ce=De.RGBA16_EXT),ee===n.SHORT&&De&&(ce=De.RGBA16_SNORM_EXT),ee===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),ee===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function v(O,A){let ee;return O?A===null||A===Mi||A===Mr?ee=n.DEPTH24_STENCIL8:A===ii?ee=n.DEPTH32F_STENCIL8:A===So&&(ee=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Mi||A===Mr?ee=n.DEPTH_COMPONENT24:A===ii?ee=n.DEPTH_COMPONENT32F:A===So&&(ee=n.DEPTH_COMPONENT16),ee}function w(O,A){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==hn&&O.minFilter!==un?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function C(O){let A=new WeakRef(O);i.get(O).__ref=A,f.add(A),g.register(O,A,A)}function R(O){let A=i.get(O).__ref;A!==void 0&&(f.delete(A),g.unregister(A))}function L(O){I(O.target)}function T(O){E(O.target)}function I(O){O.removeEventListener("dispose",L),R(O),k(O),O.isVideoTexture&&h.delete(O),O.isHTMLTexture&&d.delete(O)}function E(O){O.removeEventListener("dispose",T),R(O),te(O)}function N(){for(let O of f){let A=O.deref();A!==void 0&&(A.isRenderTarget===!0?E(A):I(A))}f.clear(),d.clear()}function k(O){let A=i.get(O);if(A.__webglInit===void 0)return;let ee=O.source,Re=p.get(ee);if(Re){let ge=Re[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&V(O),Object.keys(Re).length===0&&p.delete(ee)}i.remove(O)}function V(O){let A=i.get(O);n.deleteTexture(A.__webglTexture);let ee=O.source,Re=p.get(ee);delete Re[A.__cacheKey],o.memory.textures--}function te(O){let A=i.get(O);A.__depthDisposeCallback&&A.__depthDisposeCallback();let ee=O.depthTexture;if(ee&&ee.renderTarget===O&&I(ee),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let Ee=0;Ee<A.__webglFramebuffer[ge].length;Ee++)n.deleteFramebuffer(A.__webglFramebuffer[ge][Ee]);else n.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)n.deleteFramebuffer(A.__webglFramebuffer[ge]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Re=O.textures;for(let ge=0,Ee=Re.length;ge<Ee;ge++){let De=i.get(Re[ge]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(Re[ge])}i.remove(O)}let X=0;function Q(){X=0}function $(){return X}function Y(O){X=O}function _e(){let O=X;return O>=s.maxTextures&&at("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,O}function J(O){let A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.mipmapsAutoUpdate),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function Z(O,A){let ee=i.get(O);if(O.isVideoTexture&&nt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ee.__version!==O.version){let Re=O.image;if(Re===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ee,O,A);return}}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture,n.TEXTURE0+A)}function fe(O,A){let ee=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){ne(ee,O,A);return}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ee.__webglTexture,n.TEXTURE0+A)}function Be(O,A){let ee=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){ne(ee,O,A);return}t.bindTexture(n.TEXTURE_3D,ee.__webglTexture,n.TEXTURE0+A)}function W(O,A){let ee=i.get(O);if(O.version>0&&ee.__version!==O.version){he(ee,O,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture,n.TEXTURE0+A)}let Te={[fc]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},Le={[hn]:n.NEAREST,[_m]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Yc]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},Ae={[wm]:n.NEVER,[sf]:n.ALWAYS,[Tm]:n.LESS,[tf]:n.LEQUAL,[Em]:n.EQUAL,[nf]:n.GEQUAL,[Am]:n.GREATER,[Rm]:n.NOTEQUAL};function be(O,A){if(A.type===ii&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===un||A.magFilter===Yc||A.magFilter===Ha||A.magFilter===ds||A.minFilter===un||A.minFilter===Yc||A.minFilter===Ha||A.minFilter===ds)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,Te[A.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Te[A.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Te[A.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,Le[A.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,Le[A.minFilter]),A.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,Ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hn||A.minFilter!==Ha&&A.minFilter!==ds||A.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let ee=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ce(O,A){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",L),C(A));let Re=A.source,ge=p.get(Re);ge===void 0&&(ge={},p.set(Re,ge));let Ee=J(A);if(Ee!==O.__cacheKey){ge[Ee]===void 0&&(ge[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),ge[Ee].usedTimes++;let De=ge[O.__cacheKey];De!==void 0&&(ge[O.__cacheKey].usedTimes--,De.usedTimes===0&&V(A)),O.__cacheKey=Ee,O.__webglTexture=ge[Ee].texture}return ee}function U(O,A,ee){return Math.floor(Math.floor(O/ee)/A)}function K(O,A,ee,Re){let Ee=O.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,ee,Re,A.data);else{Ee.sort((G,le)=>G.start-le.start);let De=0;for(let G=1;G<Ee.length;G++){let le=Ee[De],ae=Ee[G],Fe=le.start+le.count,Pe=U(ae.start,A.width,4),xe=U(le.start,A.width,4);ae.start<=Fe+1&&Pe===xe&&U(ae.start+ae.count-1,A.width,4)===Pe?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++De,Ee[De]=ae)}Ee.length=De+1;let ce=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),ke=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let G=0,le=Ee.length;G<le;G++){let ae=Ee[G],Fe=Math.floor(ae.start/4),Pe=Math.ceil(ae.count/4),xe=Fe%A.width,Me=Math.floor(Fe/A.width),Ze=Pe,Se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me),t.texSubImage2D(n.TEXTURE_2D,0,xe,Me,Ze,Se,ee,Re,A.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function ne(O,A,ee){let Re=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Re=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Re=n.TEXTURE_3D);let ge=Ce(O,A),Ee=A.source;t.bindTexture(Re,O.__webglTexture,n.TEXTURE0+ee);let De=i.get(Ee);if(Ee.version!==De.__version||ge===!0){if(t.activeTexture(n.TEXTURE0+ee),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let Se=At.getPrimaries(At.workingColorSpace),We=A.colorSpace===ps?null:At.getPrimaries(A.colorSpace),je=A.colorSpace===ps||Se===We?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let pe=y(A.image,!1,s.maxTextureSize);pe=Ie(A,pe);let ke=r.convert(A.format,A.colorSpace),G=r.convert(A.type),le=b(A.internalFormat,ke,G,A.normalized,A.colorSpace,A.isVideoTexture);be(Re,A);let ae,Fe=A.mipmaps,Pe=A.isVideoTexture!==!0,xe=De.__version===void 0||ge===!0,Me=Ee.dataReady,Ze=w(A,pe);if(A.isDepthTexture)le=v(A.format===fs,A.type),xe&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,le,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,le,pe.width,pe.height,0,ke,G,null));else if(A.isDataTexture)if(Fe.length>0){Pe&&xe&&t.texStorage2D(n.TEXTURE_2D,Ze,le,Fe[0].width,Fe[0].height);for(let Se=0,We=Fe.length;Se<We;Se++)ae=Fe[Se],Pe?Me&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ae.width,ae.height,ke,G,ae.data):t.texImage2D(n.TEXTURE_2D,Se,le,ae.width,ae.height,0,ke,G,ae.data);A.generateMipmaps=!1}else Pe?(xe&&t.texStorage2D(n.TEXTURE_2D,Ze,le,pe.width,pe.height),Me&&K(A,pe,ke,G)):t.texImage2D(n.TEXTURE_2D,0,le,pe.width,pe.height,0,ke,G,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Pe&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,le,Fe[0].width,Fe[0].height,pe.depth);for(let Se=0,We=Fe.length;Se<We;Se++)if(ae=Fe[Se],A.format!==Zn)if(ke!==null)if(Pe){if(Me)if(A.layerUpdates.size>0){let je=mf(ae.width,ae.height,A.format,A.type);for(let ze of A.layerUpdates){let st=ae.data.subarray(ze*je/ae.data.BYTES_PER_ELEMENT,(ze+1)*je/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,ze,ae.width,ae.height,1,ke,st)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,ae.width,ae.height,pe.depth,ke,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,le,ae.width,ae.height,pe.depth,0,ae.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,ae.width,ae.height,pe.depth,ke,G,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,le,ae.width,ae.height,pe.depth,0,ke,G,ae.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Pe&&xe&&t.texStorage2D(n.TEXTURE_2D,Ze,le,Fe[0].width,Fe[0].height);for(let Se=0,We=Fe.length;Se<We;Se++)ae=Fe[Se],A.format!==Zn?ke!==null?Pe?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,ae.width,ae.height,ke,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,le,ae.width,ae.height,0,ae.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?Me&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ae.width,ae.height,ke,G,ae.data):t.texImage2D(n.TEXTURE_2D,Se,le,ae.width,ae.height,0,ke,G,ae.data)}else if(A.isDataArrayTexture)if(Pe){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,le,pe.width,pe.height,pe.depth),Me)if(A.layerUpdates.size>0){let Se=mf(pe.width,pe.height,A.format,A.type);for(let We of A.layerUpdates){let je=pe.data.subarray(We*Se/pe.data.BYTES_PER_ELEMENT,(We+1)*Se/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,We,pe.width,pe.height,1,ke,G,je)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ke,G,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,pe.width,pe.height,pe.depth,0,ke,G,pe.data);else if(A.isData3DTexture)Pe?(xe&&t.texStorage3D(n.TEXTURE_3D,Ze,le,pe.width,pe.height,pe.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ke,G,pe.data)):t.texImage3D(n.TEXTURE_3D,0,le,pe.width,pe.height,pe.depth,0,ke,G,pe.data);else if(A.isFramebufferTexture){if(xe)if(Pe)t.texStorage2D(n.TEXTURE_2D,Ze,le,pe.width,pe.height);else{let Se=pe.width,We=pe.height;for(let je=0;je<Ze;je++)t.texImage2D(n.TEXTURE_2D,je,le,Se,We,0,ke,G,null),Se>>=1,We>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let Se=n.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),pe.parentNode!==Se){Se.appendChild(pe),d.add(A),Se.onpaint=We=>{let je=We.changedElements;for(let ze of d)je.includes(ze.image)&&(ze.needsUpdate=!0)},Se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pe);else{let je=n.RGBA,ze=n.RGBA,st=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,ze,st,pe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Pe&&xe){let Se=Xe(Fe[0]);t.texStorage2D(n.TEXTURE_2D,Ze,le,Se.width,Se.height)}for(let Se=0,We=Fe.length;Se<We;Se++)ae=Fe[Se],Pe?Me&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ke,G,ae):t.texImage2D(n.TEXTURE_2D,Se,le,ke,G,ae);A.generateMipmaps=!1}else if(Pe){if(xe){let Se=Xe(pe);t.texStorage2D(n.TEXTURE_2D,Ze,le,Se.width,Se.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,G,pe)}else t.texImage2D(n.TEXTURE_2D,0,le,ke,G,pe);S(A)&&A.mipmapsAutoUpdate===!0&&_(Re),De.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function he(O,A,ee){if(A.image.length!==6)return;let Re=Ce(O,A),ge=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+ee);let Ee=i.get(ge);if(ge.version!==Ee.__version||Re===!0){t.activeTexture(n.TEXTURE0+ee);let De=At.getPrimaries(At.workingColorSpace),ce=A.colorSpace===ps?null:At.getPrimaries(A.colorSpace),pe=A.colorSpace===ps||De===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ke=A.isCompressedTexture||A.image[0].isCompressedTexture,G=A.image[0]&&A.image[0].isDataTexture,le=[];for(let ze=0;ze<6;ze++)!ke&&!G?le[ze]=y(A.image[ze],!0,s.maxCubemapSize):le[ze]=G?A.image[ze].image:A.image[ze],le[ze]=Ie(A,le[ze]);let ae=le[0],Fe=r.convert(A.format,A.colorSpace),Pe=r.convert(A.type),xe=b(A.internalFormat,Fe,Pe,A.normalized,A.colorSpace),Me=A.isVideoTexture!==!0,Ze=Ee.__version===void 0||Re===!0,Se=ge.dataReady,We=w(A,ae);be(n.TEXTURE_CUBE_MAP,A);let je;if(A.isDepthTexture){if(xe=v(A.format===fs,A.type),Ze)if(Me)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,xe,ae.width,ae.height);else for(let ze=0;ze<6;ze++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,xe,ae.width,ae.height,0,Fe,Pe,null)}else if(ke){Me&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,We,xe,ae.width,ae.height);for(let ze=0;ze<6;ze++){je=le[ze].mipmaps;for(let st=0;st<je.length;st++){let ft=je[st];A.format!==Zn?Fe!==null?Me?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st,0,0,ft.width,ft.height,Fe,ft.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st,xe,ft.width,ft.height,0,ft.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st,0,0,ft.width,ft.height,Fe,Pe,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st,xe,ft.width,ft.height,0,Fe,Pe,ft.data)}}}else{if(je=A.mipmaps,Me&&Ze){je.length>0&&We++;let ze=Xe(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,We,xe,ze.width,ze.height)}for(let ze=0;ze<6;ze++)if(G){Me?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,le[ze].width,le[ze].height,Fe,Pe,le[ze].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,xe,le[ze].width,le[ze].height,0,Fe,Pe,le[ze].data);for(let st=0;st<je.length;st++){let Rt=je[st].image[ze].image;Me?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st+1,0,0,Rt.width,Rt.height,Fe,Pe,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st+1,xe,Rt.width,Rt.height,0,Fe,Pe,Rt.data)}}else{Me?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,Fe,Pe,le[ze]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,xe,Fe,Pe,le[ze]);for(let st=0;st<je.length;st++){let ft=je[st];Me?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st+1,0,0,Fe,Pe,ft.image[ze]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st+1,xe,Fe,Pe,ft.image[ze])}}}S(A)&&A.mipmapsAutoUpdate===!0&&_(n.TEXTURE_CUBE_MAP),Ee.__version=ge.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ie(O,A,ee,Re,ge,Ee){let De=r.convert(ee.format,ee.colorSpace),ce=r.convert(ee.type),pe=b(ee.internalFormat,De,ce,ee.normalized,ee.colorSpace),ke=i.get(A),G=i.get(ee);if(G.__renderTarget=A,!ke.__hasExternalTextures){let le=Math.max(1,A.width>>Ee),ae=Math.max(1,A.height>>Ee);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ee,pe,le,ae,A.depth,0,De,ce,null):t.texImage2D(ge,Ee,pe,le,ae,0,De,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),de(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,ge,G.__webglTexture,0,qe(A)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Re,ge,G.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(O,A,ee){if(n.bindRenderbuffer(n.RENDERBUFFER,O),A.depthBuffer){let Re=A.depthTexture,ge=Re&&Re.isDepthTexture?Re.type:null,Ee=v(A.stencilBuffer,ge),De=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;de(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(A),Ee,A.width,A.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(A),Ee,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,O)}else{let Re=A.textures;for(let ge=0;ge<Re.length;ge++){let Ee=Re[ge],De=r.convert(Ee.format,Ee.colorSpace),ce=r.convert(Ee.type),pe=b(Ee.internalFormat,De,ce,Ee.normalized,Ee.colorSpace);de(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(A),pe,A.width,A.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(A),pe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,pe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(O,A,ee){let Re=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ge=i.get(A.depthTexture);ge.__renderTarget=A;let Ee=Re?A.depthTexture.image[0]:A.depthTexture.image;(!ge.__webglTexture||Ee.width!==A.width||Ee.height!==A.height)&&(Ee.width=A.width,Ee.height=A.height,A.depthTexture.needsUpdate=!0),Re?W(A.depthTexture,0):Z(A.depthTexture,0);let De=ge.__webglTexture,ce=qe(A),pe=Re?n.TEXTURE_CUBE_MAP_POSITIVE_X+ee:n.TEXTURE_2D,ke=A.depthTexture.format===fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===cs)de(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ke,pe,De,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,ke,pe,De,0);else if(A.depthTexture.format===fs)de(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ke,pe,De,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,ke,pe,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(O){let A=i.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){let Re=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Re){let ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Re.removeEventListener("dispose",ge)};Re.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=Re}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(ee)for(let Re=0;Re<6;Re++)se(A.__webglFramebuffer[Re],O,Re);else O.texture.mipmaps.length>0?se(A.__webglFramebuffer[0],O,0):se(A.__webglFramebuffer,O,0);else if(ee){A.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[Re]),A.__webglDepthbuffer[Re]===void 0)A.__webglDepthbuffer[Re]=n.createRenderbuffer(),ve(A.__webglDepthbuffer[Re],O,!1);else{let ge=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=A.__webglDepthbuffer[Re];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Ee)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),ve(A.__webglDepthbuffer,O,!1);else{let ge=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(O,A,ee){let Re=i.get(O);A!==void 0&&ie(Re.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ee!==void 0&&me(O)}function Ve(O){let A=O.texture,ee=i.get(O),Re=i.get(A);O.addEventListener("dispose",T),C(O);let ge=O.textures,Ee=O.isWebGLCubeRenderTarget===!0,De=ge.length>1;if(De||(Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture()),Re.__version=A.version,o.memory.textures++),Ee){ee.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps.length>0){ee.__webglFramebuffer[ce]=[];for(let pe=0;pe<A.mipmaps.length;pe++)ee.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else ee.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)ee.__webglFramebuffer[ce]=n.createFramebuffer()}else ee.__webglFramebuffer=n.createFramebuffer();if(De)for(let ce=0,pe=ge.length;ce<pe;ce++){let ke=i.get(ge[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&de(O)===!1){ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ce=0;ce<ge.length;ce++){let pe=ge[ce];ee.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ee.__webglColorRenderbuffer[ce]);let ke=r.convert(pe.format,pe.colorSpace),G=r.convert(pe.type),le=b(pe.internalFormat,ke,G,pe.normalized,pe.colorSpace,O.isXRRenderTarget===!0),ae=qe(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,le,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,ee.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(ee.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Re.__webglTexture),be(n.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)ie(ee.__webglFramebuffer[ce][pe],O,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else ie(ee.__webglFramebuffer[ce],O,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);S(A)?_(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(De){for(let ce=0,pe=ge.length;ce<pe;ce++){let ke=ge[ce],G=i.get(ke),le=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(le=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,G.__webglTexture),be(le,ke),ie(ee.__webglFramebuffer,O,ke,n.COLOR_ATTACHMENT0+ce,le,0),S(ke)&&_(le)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ce=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Re.__webglTexture),be(ce,A),A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)ie(ee.__webglFramebuffer[pe],O,A,n.COLOR_ATTACHMENT0,ce,pe);else ie(ee.__webglFramebuffer,O,A,n.COLOR_ATTACHMENT0,ce,0);S(A)?_(ce):A.mipmaps.length>0&&n.texParameteri(ce,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&me(O)}function z(O){let A=O.textures;for(let ee=0,Re=A.length;ee<Re;ee++){let ge=A[ee];if(S(ge)&&ge.mipmapsAutoUpdate===!0){let Ee=M(O),De=i.get(ge).__webglTexture;t.bindTexture(Ee,De),_(Ee),t.unbindTexture()}}}let ye=[];function Ne(O){if(O.samples>0){if(de(O)===!1){let A=O.textures,ee=O.width,Re=O.height,ge=n.COLOR_BUFFER_BIT,Ee=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(O),ce=A.length>1;if(ce)for(let ke=0;ke<A.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[ke]);let G=i.get(A[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,G,0)}n.blitFramebuffer(0,0,ee,Re,0,0,ee,Re,ge,n.NEAREST),l===!0&&(ye.length=0,ye.push(n.COLOR_ATTACHMENT0+ke),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&ye.push(Ee),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ke=0;ke<A.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,De.__webglColorRenderbuffer[ke]);let G=i.get(A[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,G,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let A=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function qe(O){return Math.min(s.maxSamples,O.samples)}function de(O){let A=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function nt(O){let A=o.render.frame;h.get(O)!==A&&(h.set(O,A),O.update())}function Ie(O,A){let ee=O.colorSpace,Re=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==aa&&ee!==ps&&(At.getTransfer(ee)===Dt?(Re!==Zn||ge!==$n)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",ee)),A}function Xe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=_e,this.resetTextureUnits=Q,this.getTextureUnits=$,this.setTextureUnits=Y,this.setTexture2D=Z,this.setTexture2DArray=fe,this.setTexture3D=Be,this.setTextureCube=W,this.rebindTextures=Ue,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=de,this.dispose=N}function Jw(n,e){function t(i,s=ps){let r,o=At.getTransfer(s);if(i===$n)return n.UNSIGNED_BYTE;if(i===$c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$d)return n.BYTE;if(i===Zd)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===qc)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===Si)return n.HALF_FLOAT;if(i===jd)return n.ALPHA;if(i===Qd)return n.RGB;if(i===Zn)return n.RGBA;if(i===cs)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===Kc)return n.RED;if(i===Jc)return n.RED_INTEGER;if(i===Os)return n.RG;if(i===jc)return n.RG_INTEGER;if(i===Qc)return n.RGBA_INTEGER;if(i===Ga||i===Va||i===Wa||i===Xa)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ih)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sh||i===rh||i===oh||i===ah||i===lh||i===Ya||i===ch)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sh||i===rh)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ah)return r.COMPRESSED_R11_EAC;if(i===lh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ya)return r.COMPRESSED_RG11_EAC;if(i===ch)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===xh||i===vh||i===yh||i===_h||i===bh||i===Mh||i===Sh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ph)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_h)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wh||i===Th||i===Eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===wh)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ah||i===Rh||i===qa||i===Ch)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ah)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ch)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
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

}`,Cf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wn({vertexShader:jw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pf=class extends Ni{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,g=typeof XRWebGLBinding<"u",m=new Cf,x={},y=t.getContextAttributes(),S=null,_=null,M=[],b=[],v=new Ge,w=null,C=null,R=new gn;R.viewport=new Wt;let L=new gn;L.viewport=new Wt;let T=[R,L],I=new Gc,E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Z=M[J];return Z===void 0&&(Z=new lo,M[J]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(J){let Z=M[J];return Z===void 0&&(Z=new lo,M[J]=Z),Z.getGripSpace()},this.getHand=function(J){let Z=M[J];return Z===void 0&&(Z=new lo,M[J]=Z),Z.getHandSpace()};function k(J){let Z=b.indexOf(J.inputSource);if(Z===-1)return;let fe=M[Z];fe!==void 0&&(fe.update(J.inputSource,J.frame,c||o),fe.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",te);for(let J=0;J<M.length;J++){let Z=b[J];Z!==null&&(b[J]=null,M[J].disconnect(Z))}E=null,N=null,m.reset();for(let J in x)delete x[J];if(e.setRenderTarget(S),p=null,u=null,d=null,s=null,_=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),C!==null){let J=C.camera;J.fov=C.fov,J.zoom=C.zoom,J.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Be=null,W=null;y.depth&&(W=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?fs:cs,Be=y.stencil?Mr:Mi);let Te={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Te),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Yn(u.textureWidth,u.textureHeight,{format:Zn,type:$n,depthTexture:new us(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(J){for(let Z=0;Z<J.removed.length;Z++){let fe=J.removed[Z],Be=b.indexOf(fe);Be>=0&&(b[Be]=null,M[Be].disconnect(fe))}for(let Z=0;Z<J.added.length;Z++){let fe=J.added[Z],Be=b.indexOf(fe);if(Be===-1){for(let Te=0;Te<M.length;Te++)if(Te>=b.length){b.push(fe),Be=Te;break}else if(b[Te]===null){b[Te]=fe,Be=Te;break}if(Be===-1)break}let W=M[Be];W&&W.connect(fe)}}function X(J,Z){Z===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Z.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Z=J.near,fe=J.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),I.near=L.near=R.near=Z,I.far=L.far=R.far=fe,(E!==I.near||N!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),E=I.near,N=I.far),I.layers.mask=J.layers.mask|6,R.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;let Be=J.parent,W=I.cameras;X(I,Be);for(let Te=0;Te<W.length;Te++)X(W[Te],Be);I.projectionMatrix.copy(R.projectionMatrix),I.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&J.isPerspectiveCamera&&(C={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,I,Be)};function Q(J,Z,fe){fe===null?J.matrix.copy(Z.matrixWorld):(J.matrix.copy(fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(Z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=oo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(J){return x[J]};let $=null;function Y(J,Z){if(h=Z.getViewerPose(c||o),f=Z,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Be=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,Be=!0);for(let Ae=0;Ae<fe.length;Ae++){let be=fe[Ae],Ce=null;if(p!==null)Ce=p.getViewport(be);else{let K=d.getViewSubImage(u,be);Ce=K.viewport,Ae===0&&(e.setRenderTargetTextures(_,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(_))}let U=T[Ae];U===void 0&&(U=new gn,U.layers.enable(Ae),U.viewport=new Wt,T[Ae]=U),U.matrix.fromArray(be.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(be.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Ae===0&&(I.matrix.copy(U.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Be===!0&&I.cameras.push(U)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Ae=d.getDepthInformation(fe[0]);Ae&&Ae.isValid&&Ae.texture&&m.init(Ae,s.renderState)}if(W&&W.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Ae=0;Ae<fe.length;Ae++){let be=fe[Ae].camera;if(be){let Ce=x[be];Ce||(Ce=new wa,x[be]=Ce);let U=d.getCameraImage(be);Ce.sourceTexture=U}}}}for(let fe=0;fe<M.length;fe++){let Be=b[fe],W=M[fe];Be!==null&&W!==void 0&&W.update(Be,Z,c||o)}$&&$(J,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),f=null}let _e=new cg;_e.setAnimationLoop(Y),this.setAnimationLoop=function(J){$=J},this.dispose=function(){}}},eT=new bt,yg=new dt;yg.set(-1,0,0,0,1,0,0,0,1);function tT(n,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,df(n)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,y,S,_){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),d(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),u(m,x),x.isMeshPhysicalMaterial&&p(m,x,_)):x.isMeshMatcapMaterial?(r(m,x),f(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,y,S):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===nn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===nn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let y=e.get(x),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yg),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,y,S){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*y,m.scale.value=S*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function d(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function u(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function p(m,x,y){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===nn&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let y=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nT(n,e,t,i){let s={},r={};function o(y,S){let _=S.program;i.uniformBlockBinding(y,_,s[y.id])}function a(y,S){let _=s[y.id];_===void 0&&(f(y),_=l(y),s[y.id]=_,y.addEventListener("dispose",m));let M=S.program;i.updateUBOMapping(y,M);let b=e.render.frame;r[y.id]!==b&&(c(y),r[y.id]=b)}function l(y){let S=n.createBuffer(),_=y.__size,M=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,_,M),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],_=y.uniforms,M=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,v=_.length;b<v;b++){let w=_[b];if(Array.isArray(w))for(let C=0,R=w.length;C<R;C++)h(w[C],b,C,M);else h(w,b,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,_,M){if(u(y,S,_,M)===!0){let b=y.__offset,v=y.value;if(Array.isArray(v)){let w=0;for(let C=0;C<v.length;C++){let R=v[C],L=g(R,!0);d(R,y.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,y.__data)}}function d(y,S,_){typeof y=="number"||typeof y=="boolean"?S[_]=y:y.isMatrix3?(S[_]=y.elements[0],S[_+1]=y.elements[1],S[_+2]=y.elements[2],S[_+3]=0,S[_+4]=y.elements[3],S[_+5]=y.elements[4],S[_+6]=y.elements[5],S[_+7]=0,S[_+8]=y.elements[6],S[_+9]=y.elements[7],S[_+10]=y.elements[8],S[_+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-_),_):y.toArray(S,_)}function u(y,S,_,M){let b=y.value,v=S+"_"+_;if(Array.isArray(b)){M[v]===void 0&&(M[v]=[]);let w=M[v],C=!1;for(let R=0;R<b.length;R++)p(b[R],w,R)===!0&&(C=!0);return C}return p(b,M,v)}function p(y,S,_){if(S[_]===void 0)return typeof y=="number"||typeof y=="boolean"?S[_]=y:ArrayBuffer.isView(y)?S[_]=y.slice():S[_]=y.clone(),!0;{let M=S[_];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return S[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function f(y){let S=y.uniforms,_=0,M=16;for(let v=0,w=S.length;v<w;v++){let C=Array.isArray(S[v])?S[v]:[S[v]];for(let R=0,L=C.length;R<L;R++){let T=C[R],I=Array.isArray(T.value)?T.value:[T.value],E=Array.isArray(S[v])||Array.isArray(T.value),N=_;for(let V=0,te=I.length;V<te;V++){let X=I[V],Q=g(X,E),$=_%M,Y=$%Q.boundary,_e=$+Y;_+=Y,_e!==0&&M-_e<Q.storage&&(_+=M-_e),V===0&&(N=_),_+=Q.storage}let k=T.type==="int"?Int32Array:T.type==="uint"?Uint32Array:Float32Array;T.__data=new k((_-N)/Float32Array.BYTES_PER_ELEMENT),T.__offset=N}}let b=_%M;return b>0&&(_+=M-b),y.__size=_,y.__cache={},this}function g(y,S){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):at("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(y){let S=y.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function x(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:x}}var iT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function sT(){return ki===null&&(ki=new dr(iT,16,16,Os,Si),ki.name="DFG_LUT",ki.minFilter=un,ki.magFilter=un,ki.wrapS=Di,ki.wrapT=Di,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var Oh=class{constructor(e={}){let{canvas:t=Cm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=$n}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=p,m=new Set([Qc,jc,Jc]),x=new Set([$n,Mi,So,Mr,$c,Zc]),y=new Uint32Array(4),S=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},M=null,b=null,v=[],w=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,T=null,I=null,E=null,N=null;this._outputColorSpace=tn;let k=0,V=0,te=null,X=-1,Q=null,$=new Wt,Y=new Wt,_e=null,J=new Qe(0),Z=0,fe=t.width,Be=t.height,W=1,Te=null,Le=null,Ae=new Wt(0,0,fe,Be),be=new Wt(0,0,fe,Be),Ce=!1,U=new fr,K=new yc,ne=!1,he=!1,ie=new bt,ve=new B,se=new Wt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function Ve(){return te===null?W:1}let z=i;function ye(P,q){return t.getContext(P,q)}let Ne,qe,de,nt,Ie,Xe,O,A,ee,Re,ge,Ee,De,ce,pe,ke,G,le,ae,Fe,Pe,xe,Me;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",ze,!1),z===null){let q="webgl2";if(z=ye(q,P),z===null)throw ye(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(P){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),ht("WebGLRenderer: "+P.message),P}function Ze(){Ne=new mS(z),Ne.init(),Pe=new Jw(z,Ne),qe=new sS(z,Ne,e,Pe),de=new Zw(z,Ne),qe.reversedDepthBuffer&&u&&de.buffers.depth.setReversed(!0),I=z.createFramebuffer(),E=z.createFramebuffer(),N=z.createFramebuffer(),nt=new vS(z),Ie=new Ow,Xe=new Kw(z,Ne,de,Ie,qe,Pe,nt),O=new pS(R),A=new _1(z),xe=new nS(z,A),ee=new gS(z,A,nt,xe),Re=new _S(z,ee,A,xe,nt),le=new yS(z,qe,Xe),pe=new rS(Ie),ge=new Nw(R,O,Ne,qe,xe,pe),Ee=new tT(R,Ie),De=new Fw,ce=new Vw(Ne),G=new tS(R,O,de,Re,f,l),ke=new $w(R,Re,qe),Me=new nT(z,nt,qe,de),ae=new iS(z,Ne,nt),Fe=new xS(z,Ne,nt),nt.programs=ge.programs,R.capabilities=qe,R.extensions=Ne,R.properties=Ie,R.renderLists=De,R.shadowMap=ke,R.state=de,R.info=nt}g!==$n&&(C=new MS(g,t.width,t.height,a,s,r));let Se=new Pf(R,z);this.xr=Se,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let P=Ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(fe,Be,!1))},this.getSize=function(P){return P.set(fe,Be)},this.setSize=function(P,q,ue=!0){if(Se.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=P,Be=q,t.width=Math.floor(P*W),t.height=Math.floor(q*W),ue===!0&&(t.style.width=P+"px",t.style.height=q+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(fe*W,Be*W).floor()},this.setDrawingBufferSize=function(P,q,ue){fe=P,Be=q,W=ue,t.width=Math.floor(P*ue),t.height=Math.floor(q*ue),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(g===$n){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy($)},this.getViewport=function(P){return P.copy(Ae)},this.setViewport=function(P,q,ue,re){P.isVector4?Ae.set(P.x,P.y,P.z,P.w):Ae.set(P,q,ue,re),de.viewport($.copy(Ae).multiplyScalar(Ve()).round())},this.getScissor=function(P){return P.copy(be)},this.setScissor=function(P,q,ue,re){P.isVector4?be.set(P.x,P.y,P.z,P.w):be.set(P,q,ue,re),de.scissor(Y.copy(be).multiplyScalar(Ve()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(P){de.setScissorTest(Ce=P)},this.setOpaqueSort=function(P){Te=P},this.setTransparentSort=function(P){Le=P},this.getClearColor=function(P){return P.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,ue=!0){let re=0;if(P){let oe=!1;if(te!==null){let $e=te.texture.format;oe=m.has($e)}if(oe){let $e=te.texture.type,et=x.has($e),Ye=G.getClearColor(),Ke=G.getClearAlpha(),it=Ye.r,pt=Ye.g,wt=Ye.b;et?(y[0]=it,y[1]=pt,y[2]=wt,y[3]=Ke,z.clearBufferuiv(z.COLOR,0,y)):(S[0]=it,S[1]=pt,S[2]=wt,S[3]=Ke,z.clearBufferiv(z.COLOR,0,S))}else re|=z.COLOR_BUFFER_BIT}q&&(re|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(re|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),T=P},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),G.dispose(),De.dispose(),ce.dispose(),Xe.dispose(),Ie.dispose(),O.dispose(),Re.dispose(),ee.dispose(),xe.dispose(),Me.dispose(),ge.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",pn),Se.removeEventListener("sessionend",Nt),_n.stop()};function We(P){P.preventDefault(),ua("WebGLRenderer: Context Lost."),L=!0}function je(){ua("WebGLRenderer: Context Restored."),L=!1;let P=nt.autoReset,q=ke.enabled,ue=ke.autoUpdate,re=ke.needsUpdate,oe=ke.type;Ze(),nt.autoReset=P,ke.enabled=q,ke.autoUpdate=ue,ke.needsUpdate=re,ke.type=oe}function ze(P){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function st(P){let q=P.target;q.removeEventListener("dispose",st),ft(q)}function ft(P){Rt(P),Ie.remove(P)}function Rt(P){let q=Ie.get(P).programs;q!==void 0&&(q.forEach(function(ue){ge.releaseProgram(ue)}),P.isShaderMaterial&&ge.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,ue,re,oe,$e){q===null&&(q=me);let et=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ye=_t(P,q,ue,re,oe);de.setMaterial(re,et);let Ke=ue.index,it=1;if(re.wireframe===!0){if(Ke=ee.getWireframeAttribute(ue),Ke===void 0)return;it=2}let pt=ue.drawRange,wt=ue.attributes.position,tt=pt.start*it,F=(pt.start+pt.count)*it;$e!==null&&(tt=Math.max(tt,$e.start*it),F=Math.min(F,($e.start+$e.count)*it)),Ke!==null?(tt=Math.max(tt,0),F=Math.min(F,Ke.count)):wt!=null&&(tt=Math.max(tt,0),F=Math.min(F,wt.count));let we=F-tt;if(we<0||we===1/0)return;xe.setup(oe,re,Ye,ue,Ke);let Oe,ot=ae;if(Ke!==null&&(Oe=A.get(Ke),ot=Fe,ot.setIndex(Oe)),oe.isMesh)re.wireframe===!0?(de.setLineWidth(re.wireframeLinewidth*Ve()),ot.setMode(z.LINES)):ot.setMode(z.TRIANGLES);else if(oe.isLine){let ut=re.linewidth;ut===void 0&&(ut=1),de.setLineWidth(ut*Ve()),oe.isLineSegments?ot.setMode(z.LINES):oe.isLineLoop?ot.setMode(z.LINE_LOOP):ot.setMode(z.LINE_STRIP)}else oe.isPoints?ot.setMode(z.POINTS):oe.isSprite&&ot.setMode(z.TRIANGLES);if(oe.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))ot.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let ut=oe._multiDrawStarts,He=oe._multiDrawCounts,ct=oe._multiDrawCount,vt=Ke?A.get(Ke).bytesPerElement:1,mi=Ie.get(re).currentProgram.getUniforms();for(let $t=0;$t<ct;$t++)mi.setValue(z,"_gl_DrawID",$t),ot.render(ut[$t]/vt,He[$t])}else if(oe.isInstancedMesh)ot.renderInstances(tt,we,oe.count);else if(ue.isInstancedBufferGeometry){let ut=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,He=Math.min(ue.instanceCount,ut);ot.renderInstances(tt,we,He)}else ot.render(tt,we)};function zt(P,q,ue,re){T!==null&&P.isNodeMaterial&&T.setObject(re,P),ne===!0&&pe.setState(P,ue,!1),P.transparent===!0&&P.side===Tn&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,pi(P,q,re),P.side=Ns,P.needsUpdate=!0,pi(P,q,re),P.side=Tn):pi(P,q,re)}this.compile=function(P,q,ue=null){ue===null&&(ue=P),T!==null&&T.renderStart(P,q,ue),b=ce.get(ue),b.init(q),w.push(b),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(b.pushLight(oe),oe.castShadow&&b.pushShadow(oe))}),P!==ue&&P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(b.pushLight(oe),oe.castShadow&&b.pushShadow(oe))}),b.setupLights(),T!==null&&T.updateLights(b.state.lightsArray),he=this.localClippingEnabled,ne=pe.init(this.clippingPlanes,he),ne===!0&&pe.setGlobalState(this.clippingPlanes,q),T!==null&&ke.render(b.state.shadowsArray,ue,q);let re=new Set;return P.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let $e=oe.material;if($e)if(Array.isArray($e))for(let et=0;et<$e.length;et++){let Ye=$e[et];zt(Ye,ue,q,oe),re.add(Ye)}else zt($e,ue,q,oe),re.add($e)}),b=w.pop(),T!==null&&T.renderEnd(),re},this.compileAsync=function(P,q,ue=null){let re=this.compile(P,q,ue);return new Promise(oe=>{function $e(){if(re.forEach(function(et){let Ke=Ie.get(et).currentProgram;(Ke===void 0||Ke.isReady())&&re.delete(et)}),re.size===0){oe(P);return}setTimeout($e,10)}Ne.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let Ft=null;function Vn(P){Ft&&Ft(P)}function pn(){_n.stop()}function Nt(){_n.start()}let _n=new cg;_n.setAnimationLoop(Vn),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(P){Ft=P,Se.setAnimationLoop(P),P===null?_n.stop():_n.start()},Se.addEventListener("sessionstart",pn),Se.addEventListener("sessionend",Nt),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;T!==null&&T.renderStart(P,q);let ue=Se.enabled===!0&&Se.isPresenting===!0,re=C!==null&&(te===null||ue)&&C.begin(R,te);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(q),q=Se.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,q,te),b=ce.get(P,w.length),b.init(q),b.state.textureUnits=Xe.getTextureUnits(),w.push(b),ie.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?K.setFromArrayCamera(q):U.setFromProjectionMatrix(ie,ni,q.reversedDepth),he=this.localClippingEnabled,ne=pe.init(this.clippingPlanes,he),M=De.get(P,v.length),M.init(),v.push(M),this.info.render.frame++,Se.enabled===!0&&Se.isPresenting===!0){let et=R.xr.getDepthSensingMesh();et!==null&&Ot(et,q,-1/0,R.sortObjects)}Ot(P,q,0,R.sortObjects),M.finish(),T!==null&&T.updateLights(b.state.lightsArray),R.sortObjects===!0&&M.sort(Te,Le),Ue=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ue&&G.addToRenderList(M,P),this.info.autoReset===!0&&this.info.reset(),ne===!0&&pe.beginShadows();let oe=b.state.shadowsArray;if(ke.render(oe,P,q),ne===!0&&pe.endShadows(),(re&&C.hasRenderPass())===!1){let et=M.opaque,Ye=M.transmissive;if(b.setupLights(),q.isArrayCamera){let Ke=q.cameras;if(Ye.length>0)for(let it=0,pt=Ke.length;it<pt;it++){let wt=Ke[it];di(et,Ye,P,wt)}Ue&&G.render(P);for(let it=0,pt=Ke.length;it<pt;it++){let wt=Ke[it];kn(M,P,wt,wt.viewport)}}else Ye.length>0&&di(et,Ye,P,q),Ue&&G.render(P),kn(M,P,q)}te!==null&&V===0&&(Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te)),re&&C.end(R),P.isScene===!0&&P.onAfterRender(R,P,q),xe.resetDefaultState(),X=-1,Q=null,w.pop(),w.length>0?(b=w[w.length-1],Xe.setTextureUnits(b.state.textureUnits),ne===!0&&pe.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,T!==null&&T.renderEnd()};function Ot(P,q,ue,re){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)ue=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)b.pushLight(P),P.castShadow&&b.pushShadow(P);else if(P.isSprite){let et=q.isArrayCamera?K:U;if(!P.frustumCulled||P.intersectsFrustum(et)){re&&se.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ie);let Ye=Re.update(P),Ke=P.material;Ke.visible&&M.push(P,Ye,Ke,ue,se.z,null,q)}}else if(P.isMesh||P.isLine||P.isPoints){let et=q.isArrayCamera?K:U;if(!P.frustumCulled||P.intersectsFrustum(et)){let Ye=Re.update(P),Ke=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),se.copy(P.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),se.copy(Ye.boundingSphere.center)),se.applyMatrix4(P.matrixWorld).applyMatrix4(ie)),Array.isArray(Ke)){let it=Ye.groups;for(let pt=0,wt=it.length;pt<wt;pt++){let tt=it[pt],F=Ke[tt.materialIndex];F&&F.visible&&M.push(P,Ye,F,ue,se.z,tt,q)}}else Ke.visible&&M.push(P,Ye,Ke,ue,se.z,null,q)}}}let $e=P.children;for(let et=0,Ye=$e.length;et<Ye;et++)Ot($e[et],q,ue,re)}function kn(P,q,ue,re){let{opaque:oe,transmissive:$e,transparent:et}=P;b.setupLightsView(ue),ne===!0&&pe.setGlobalState(R.clippingPlanes,ue),re&&de.viewport($.copy(re)),oe.length>0&&fi(oe,q,ue),$e.length>0&&fi($e,q,ue),et.length>0&&fi(et,q,ue),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function di(P,q,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[re.id]===void 0){let tt=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[re.id]=new Yn(1,1,{generateMipmaps:!0,type:tt?Si:$n,minFilter:ds,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let $e=b.state.transmissionRenderTarget[re.id],et=re.viewport||$;$e.setSize(et.z*R.transmissionResolutionScale,et.w*R.transmissionResolutionScale);let Ye=R.getRenderTarget(),Ke=R.getActiveCubeFace(),it=R.getActiveMipmapLevel();R.setRenderTarget($e),R.getClearColor(J),Z=R.getClearAlpha(),Z<1&&R.setClearColor(16777215,.5),R.clear(),Ue&&G.render(ue);let pt=R.toneMapping;R.toneMapping=Fi;let wt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),b.setupLightsView(re),ne===!0&&pe.setGlobalState(R.clippingPlanes,re),fi(P,ue,re),Xe.updateMultisampleRenderTarget($e),Xe.updateRenderTargetMipmap($e),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let F=0,we=q.length;F<we;F++){let Oe=q[F],{object:ot,geometry:ut,material:He,group:ct}=Oe;if(He.side===Tn&&ot.layers.test(re.layers)){let vt=He.side;He.side=nn,He.needsUpdate=!0,es(ot,ue,re,ut,He,ct),He.side=vt,He.needsUpdate=!0,tt=!0}}tt===!0&&(Xe.updateMultisampleRenderTarget($e),Xe.updateRenderTargetMipmap($e))}R.setRenderTarget(Ye,Ke,it),R.setClearColor(J,Z),wt!==void 0&&(re.viewport=wt),R.toneMapping=pt}function fi(P,q,ue){let re=q.isScene===!0?q.overrideMaterial:null;for(let oe=0,$e=P.length;oe<$e;oe++){let et=P[oe],{object:Ye,geometry:Ke,group:it}=et,pt=et.material;pt.allowOverride===!0&&re!==null&&(pt=re),Ye.layers.test(ue.layers)&&es(Ye,q,ue,Ke,pt,it)}}function es(P,q,ue,re,oe,$e){T!==null&&oe.isNodeMaterial&&T.setObject(P,oe),P.onBeforeRender(R,q,ue,re,oe,$e),P.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),oe.onBeforeRender(R,q,ue,re,P,$e),oe.transparent===!0&&oe.side===Tn&&oe.forceSinglePass===!1?(oe.side=nn,oe.needsUpdate=!0,R.renderBufferDirect(ue,q,re,oe,P,$e),oe.side=Ns,oe.needsUpdate=!0,R.renderBufferDirect(ue,q,re,oe,P,$e),oe.side=Tn):R.renderBufferDirect(ue,q,re,oe,P,$e),P.onAfterRender(R,q,ue,re,oe,$e)}function ei(P){let q=0;for(let ue of P)ue.texture!==null&&q++;return q}function pi(P,q,ue){q.isScene!==!0&&(q=me);let re=Ie.get(P),oe=b.state.lights,$e=b.state.shadowsArray,et=oe.state.version,Ye=ge.getParameters(P,oe.state,$e,q,ue,b.state.lightProbeGridArray),Ke=ge.getProgramCacheKey(Ye),it=re.programs;re.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?q.environment:null,re.fog=q.fog;let pt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;re.envMap=O.get(P.envMap||re.environment,pt),re.envMapRotation=re.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",st),it=new Map,re.programs=it,re.programVariants=new Map);let wt=it.get(Ke);if(wt!==void 0){if(re.currentProgram===wt&&re.lightsStateVersion===et)return Fr(P,Ye),wt}else Ye.uniforms=ge.getUniforms(P),T!==null&&P.isNodeMaterial&&T.build(P,ue,Ye),P.onBeforeCompile(Ye,R),wt=ge.acquireProgram(Ye,Ke),it.set(Ke,wt),re.uniforms=Ye.uniforms;let tt=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(tt.clippingPlanes=pe.uniform),Fr(P,Ye),re.needsLights=ju(P),re.lightsStateVersion=et,re.needsLights&&(tt.ambientLightColor.value=oe.state.ambient,tt.lightProbe.value=oe.state.probe,tt.sunLights.value=oe.state.sun,tt.sunLightShadows.value=oe.state.sunShadow,tt.directionalLights.value=oe.state.directional,tt.directionalLightShadows.value=oe.state.directionalShadow,tt.spotLights.value=oe.state.spot,tt.spotLightShadows.value=oe.state.spotShadow,tt.rectAreaLights.value=oe.state.rectArea,tt.ltc_1.value=oe.state.rectAreaLTC1,tt.ltc_2.value=oe.state.rectAreaLTC2,tt.pointLights.value=oe.state.point,tt.pointLightShadows.value=oe.state.pointShadow,tt.hemisphereLights.value=oe.state.hemi,tt.sunShadowMatrix.value=oe.state.sunShadowMatrix,tt.sunShadowCascade.value=oe.state.sunShadowCascade,tt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,tt.spotLightMatrix.value=oe.state.spotLightMatrix,tt.spotLightMap.value=oe.state.spotLightMap,tt.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.numLightProbeGrids=ei(b.state.lightProbeGridArray),re.currentProgram=wt,re.uniformsList=null,wt}function Ur(P,q,ue,re,oe){let $e=Ie.get(P),et=$e.currentProgram.id+","+re+","+oe,Ye=$e.programVariants.get(et);return Ye===void 0?(Ye=pi(P,q,ue),$e.programVariants.set(et,Ye)):($e.currentProgram=Ye,$e.uniformsList=null,$e.outputColorSpace=re,$e.toneMapping=oe),Ye}function rr(P){if(P.uniformsList===null){let q=P.currentProgram.getUniforms();P.uniformsList=To.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Fr(P,q){let ue=Ie.get(P);ue.outputColorSpace=q.outputColorSpace,ue.batching=q.batching,ue.batchingColor=q.batchingColor,ue.instancing=q.instancing,ue.instancingColor=q.instancingColor,ue.instancingMorph=q.instancingMorph,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function _t(P,q,ue,re,oe){q.isScene!==!0&&(q=me),Xe.resetTextureUnits();let $e=q.fog,et=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?q.environment:null,Ye=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:At.workingColorSpace,Ke=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,it=O.get(re.envMap||et,Ke),pt=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,wt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),tt=!!ue.morphAttributes.position,F=!!ue.morphAttributes.normal,we=!!ue.morphAttributes.color,Oe=Fi;re.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Oe=R.toneMapping);let ot=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ut=ot!==void 0?ot.length:0,He=Ie.get(re),ct=b.state.lights;if(ne===!0&&(he===!0||P!==Q)){let Gt=P===Q&&re.id===X;pe.setState(re,P,Gt)}let vt=!1,mi=!1;re.version===He.__version?He.needsLights&&He.lightsStateVersion!==ct.state.version||oe.isBatchedMesh&&He.batching===!1||!oe.isBatchedMesh&&He.batching===!0||oe.isBatchedMesh&&He.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&He.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&He.instancing===!1||!oe.isInstancedMesh&&He.instancing===!0||oe.isSkinnedMesh&&He.skinning===!1||!oe.isSkinnedMesh&&He.skinning===!0||oe.isInstancedMesh&&He.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&He.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&He.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&He.instancingMorph===!1&&oe.morphTexture!==null||He.envMap!==it||re.fog===!0&&He.fog!==$e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==pe.numPlanes||He.numIntersection!==pe.numIntersection)||He.vertexAlphas!==pt||He.vertexTangents!==wt||He.morphTargets!==tt||He.morphNormals!==F||He.morphColors!==we||He.morphTargetsCount!==ut||He.numLightProbeGrids!==ei(b.state.lightProbeGridArray)?vt=!0:(He.outputColorSpace!==Ye||He.toneMapping!==Oe)&&(mi=!0):(vt=!0,He.__version=re.version);let $t=He.currentProgram;(vt===!0||mi===!0)&&($t=mi===!0?Ur(re,q,oe,Ye,Oe):pi(re,q,oe),T&&re.isNodeMaterial&&T.onUpdateProgram(re,$t,He));let kr=!1,gi=!1,Ut=!1,Pt=$t.getUniforms(),mn=He.uniforms;if(de.useProgram($t.program)&&(kr=!0,gi=!0,Ut=!0),re.id!==X&&(X=re.id,gi=!0),kr||Q!==P){de.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Pt.setValue(z,"projectionMatrix",P.projectionMatrix),Pt.setValue(z,"viewMatrix",P.matrixWorldInverse);let ln=Pt.map.cameraPosition;ln!==void 0&&ln.setValue(z,ve.setFromMatrixPosition(P.matrixWorld)),qe.logarithmicDepthBuffer&&Pt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Pt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),Q!==P&&(Q=P,gi=!0,Ut=!0)}if(He.needsLights&&(ct.state.sunShadowMap.length>0&&Pt.setValue(z,"sunShadowMap",ct.state.sunShadowMap,Xe),ct.state.directionalShadowMap.length>0&&Pt.setValue(z,"directionalShadowMap",ct.state.directionalShadowMap,Xe),ct.state.spotShadowMap.length>0&&Pt.setValue(z,"spotShadowMap",ct.state.spotShadowMap,Xe),ct.state.pointShadowMap.length>0&&Pt.setValue(z,"pointShadowMap",ct.state.pointShadowMap,Xe)),oe.isSkinnedMesh){Pt.setOptional(z,oe,"bindMatrix"),Pt.setOptional(z,oe,"bindMatrixInverse");let Gt=oe.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Pt.setValue(z,"boneTexture",Gt.boneTexture,Xe))}oe.isBatchedMesh&&(Pt.setOptional(z,oe,"batchingTexture"),Pt.setValue(z,"batchingTexture",oe._matricesTexture,Xe),Pt.setOptional(z,oe,"batchingIdTexture"),Pt.setValue(z,"batchingIdTexture",oe._indirectTexture,Xe),Pt.setOptional(z,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Pt.setValue(z,"batchingColorTexture",oe._colorsTexture,Xe));let xi=ue.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&le.update(oe,ue,$t),(gi||He.receiveShadow!==oe.receiveShadow)&&(He.receiveShadow=oe.receiveShadow,Pt.setValue(z,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=sT()),gi){if(Pt.setValue(z,"toneMappingExposure",R.toneMappingExposure),He.needsLights&&Ju(mn,Ut),$e&&re.fog===!0&&Ee.refreshFogUniforms(mn,$e),Ee.refreshMaterialUniforms(mn,re,W,Be,b.state.transmissionRenderTarget[P.id]),He.needsLights&&He.numLightProbeGrids>0){let Gt=_,ln=0;for(let ts of b.state.lightProbeGridArray)ts.texture!==null&&(Gt.textures[ln]=ts.texture,Gt.min[ln]=ts.boundingBox.min,Gt.max[ln]=ts.boundingBox.max,Gt.resolution[ln]=ts.resolution,ln++);for(let ts in Gt)Gt[ts].length=ln;mn.probesSH.value=Gt.textures,mn.probesMin.value=Gt.min,mn.probesMax.value=Gt.max,mn.probesResolution.value=Gt.resolution}To.upload(z,rr(He),mn,Xe)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(To.upload(z,rr(He),mn,Xe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Pt.setValue(z,"center",oe.center),Pt.setValue(z,"modelViewMatrix",oe.modelViewMatrix),Pt.setValue(z,"normalMatrix",oe.normalMatrix),Pt.setValue(z,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){let Gt=re.uniformsGroups;for(let ln=0,ts=Gt.length;ln<ts;ln++){let f0=Gt[ln];Me.update(f0,$t),Me.bind(f0,$t)}}return $t}function Ju(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.sunLights.needsUpdate=q,P.sunLightShadows.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function ju(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(P,q,ue){let re=Ie.get(P);re.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ie.get(P.texture).__webglTexture=q,Ie.get(P.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){let ue=Ie.get(P);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,ue=0){te=P,k=q,V=ue;let re=null,oe=!1,$e=!1;if(P){let Ye=Ie.get(P);if(Ye.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(z.FRAMEBUFFER,Ye.__webglFramebuffer),$.copy(P.viewport),Y.copy(P.scissor),_e=P.scissorTest,de.viewport($),de.scissor(Y),de.setScissorTest(_e),X=-1;return}else if(Ye.__webglFramebuffer===void 0)Xe.setupRenderTarget(P);else if(Ye.__hasExternalTextures)Xe.rebindTextures(P,Ie.get(P.texture).__webglTexture,Ie.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let pt=P.depthTexture;if(Ye.__boundDepthTexture!==pt){if(pt!==null&&Ie.has(pt)&&(P.width!==pt.image.width||P.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(P)}}let Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&($e=!0);let it=Ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[q])?re=it[q][ue]:re=it[q],oe=!0):P.samples>0&&Xe.useMultisampledRTT(P)===!1?re=Ie.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?re=it[ue]:re=it,$.copy(P.viewport),Y.copy(P.scissor),_e=P.scissorTest}else $.copy(Ae).multiplyScalar(W).floor(),Y.copy(be).multiplyScalar(W).floor(),_e=Ce;if(ue!==0&&(re=I),de.bindFramebuffer(z.FRAMEBUFFER,re)&&de.drawBuffers(P,re),de.viewport($),de.scissor(Y),de.setScissorTest(_e),oe){let Ye=Ie.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ye.__webglTexture,ue)}else if($e){let Ye=q;for(let Ke=0;Ke<P.textures.length;Ke++){let it=Ie.get(P.textures[Ke]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ke,it.__webglTexture,ue,Ye)}}else if(P!==null&&ue!==0){let Ye=Ie.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ye.__webglTexture,ue)}X=-1};function Al(P){let q=Ie.get(P);return(q.__readFormat!==P.format||q.__readType!==P.type)&&(q.__readFormat=P.format,q.__readType=P.type,q.__formatReadable=qe.textureFormatReadable(P.format),q.__typeReadable=qe.textureTypeReadable(P.type)),q}this.readRenderTargetPixels=function(P,q,ue,re,oe,$e,et,Ye=0){if(!(P&&P.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&et!==void 0&&(Ke=Ke[et],Array.isArray(Ke)&&(Ke=Ke[0])),Ke){de.bindFramebuffer(z.FRAMEBUFFER,Ke);try{let it=P.textures[Ye],pt=it.format,wt=it.type;P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ye);let tt=Al(it);if(tt.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-re&&ue>=0&&ue<=P.height-oe&&z.readPixels(q,ue,re,oe,Pe.convert(pt),Pe.convert(wt),$e)}finally{let it=te!==null?Ie.get(te).__webglFramebuffer:null;de.bindFramebuffer(z.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(P,q,ue,re,oe,$e,et,Ye=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&et!==void 0&&(Ke=Ke[et],Array.isArray(Ke)&&(Ke=Ke[0])),Ke)if(q>=0&&q<=P.width-re&&ue>=0&&ue<=P.height-oe){de.bindFramebuffer(z.FRAMEBUFFER,Ke);let it=P.textures[Ye],pt=it.format,wt=it.type;P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ye);let tt=Al(it);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let F=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,F),z.bufferData(z.PIXEL_PACK_BUFFER,$e.byteLength,z.STREAM_READ),z.readPixels(q,ue,re,oe,Pe.convert(pt),Pe.convert(wt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let we=te!==null?Ie.get(te).__webglFramebuffer:null;de.bindFramebuffer(z.FRAMEBUFFER,we);let Oe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Im(z,Oe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,F),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,$e),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(F),z.deleteSync(Oe),$e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,ue=0){let re=Math.pow(2,-ue),oe=Math.floor(P.image.width*re),$e=Math.floor(P.image.height*re),et=q!==null?q.x:0,Ye=q!==null?q.y:0;Xe.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,ue,0,0,et,Ye,oe,$e),de.unbindTexture()},this.copyTextureToTexture=function(P,q,ue=null,re=null,oe=0,$e=0){let et,Ye,Ke,it,pt,wt,tt,F,we,Oe=P.isCompressedTexture?P.mipmaps[$e]:P.image;if(ue!==null)et=ue.max.x-ue.min.x,Ye=ue.max.y-ue.min.y,Ke=ue.isBox3?ue.max.z-ue.min.z:1,it=ue.min.x,pt=ue.min.y,wt=ue.isBox3?ue.min.z:0;else{let Pt=Math.pow(2,-oe);et=Math.floor(Oe.width*Pt),Ye=Math.floor(Oe.height*Pt),P.isDataArrayTexture?Ke=Oe.depth:P.isData3DTexture?Ke=Math.floor(Oe.depth*Pt):Ke=1,it=0,pt=0,wt=0}re!==null?(tt=re.x,F=re.y,we=re.z):(tt=0,F=0,we=0);let ot=Pe.convert(q.format),ut=Pe.convert(q.type),He;q.isData3DTexture?(Xe.setTexture3D(q,0),He=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Xe.setTexture2DArray(q,0),He=z.TEXTURE_2D_ARRAY):(Xe.setTexture2D(q,0),He=z.TEXTURE_2D),de.activeTexture(z.TEXTURE0),de.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),de.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),de.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);let ct=de.getParameter(z.UNPACK_ROW_LENGTH),vt=de.getParameter(z.UNPACK_IMAGE_HEIGHT),mi=de.getParameter(z.UNPACK_SKIP_PIXELS),$t=de.getParameter(z.UNPACK_SKIP_ROWS),kr=de.getParameter(z.UNPACK_SKIP_IMAGES);de.pixelStorei(z.UNPACK_ROW_LENGTH,Oe.width),de.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Oe.height),de.pixelStorei(z.UNPACK_SKIP_PIXELS,it),de.pixelStorei(z.UNPACK_SKIP_ROWS,pt),de.pixelStorei(z.UNPACK_SKIP_IMAGES,wt);let gi=P.isDataArrayTexture||P.isData3DTexture,Ut=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){let Pt=Ie.get(P),mn=Ie.get(q),xi=Ie.get(Pt.__renderTarget),Gt=Ie.get(mn.__renderTarget);de.bindFramebuffer(z.READ_FRAMEBUFFER,xi.__webglFramebuffer),de.bindFramebuffer(z.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let ln=0;ln<Ke;ln++)gi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(P).__webglTexture,oe,wt+ln),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(q).__webglTexture,$e,we+ln)),z.blitFramebuffer(it,pt,it+et,pt+Ye,tt,F,tt+et,F+Ye,z.DEPTH_BUFFER_BIT,z.NEAREST);de.bindFramebuffer(z.READ_FRAMEBUFFER,null),de.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(oe!==0||P.isRenderTargetTexture||Ie.has(P)){let Pt=Ie.get(P),mn=Ie.get(q);de.bindFramebuffer(z.READ_FRAMEBUFFER,E),de.bindFramebuffer(z.DRAW_FRAMEBUFFER,N);for(let xi=0;xi<Ke;xi++)gi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pt.__webglTexture,oe,wt+xi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pt.__webglTexture,oe),Ut?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,mn.__webglTexture,$e,we+xi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mn.__webglTexture,$e),oe!==0?z.blitFramebuffer(it,pt,it+et,pt+Ye,tt,F,tt+et,F+Ye,z.COLOR_BUFFER_BIT,z.NEAREST):Ut?z.copyTexSubImage3D(He,$e,tt,F,we+xi,it,pt,et,Ye):z.copyTexSubImage2D(He,$e,tt,F,it,pt,et,Ye);de.bindFramebuffer(z.READ_FRAMEBUFFER,null),de.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ut?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(He,$e,tt,F,we,et,Ye,Ke,ot,ut,Oe.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(He,$e,tt,F,we,et,Ye,Ke,ot,Oe.data):z.texSubImage3D(He,$e,tt,F,we,et,Ye,Ke,ot,ut,Oe):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$e,tt,F,et,Ye,ot,ut,Oe.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$e,tt,F,Oe.width,Oe.height,ot,Oe.data):z.texSubImage2D(z.TEXTURE_2D,$e,tt,F,et,Ye,ot,ut,Oe);de.pixelStorei(z.UNPACK_ROW_LENGTH,ct),de.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),de.pixelStorei(z.UNPACK_SKIP_PIXELS,mi),de.pixelStorei(z.UNPACK_SKIP_ROWS,$t),de.pixelStorei(z.UNPACK_SKIP_IMAGES,kr),$e===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&z.generateMipmap(He),de.unbindTexture()},this.initRenderTarget=function(P){Ie.get(P).__webglFramebuffer===void 0&&Xe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Xe.setTextureCube(P,0):P.isData3DTexture?Xe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Xe.setTexture2DArray(P,0):Xe.setTexture2D(P,0),de.unbindTexture()},this.resetState=function(){k=0,V=0,te=null,de.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var j={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfterKillsSmoothie:3,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4,barkMinShow:1.2,bashVolume:.6,revVolume:.35,cutVolume:.5,throwVolume:.45,clankVolume:.35,boomVolume:.7,saunaVolume:.4,reviveVolume:.4,tobbleShotVolume:.25,blastSize:2.5,blastTime:.35,executeShake:.05,cutGelEvery:.1,arcDot:.06},run:{fadeOut:.6,blackHold:.25,fadeIn:.6,gateReach:1.6,hoursTime:6,gateOpenTime:.8}};function kh({step:n,render:e,before:t,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(g){if(!(g>0)||!Number.isFinite(g))return;t&&t(g),o+=g;let m=0;for(;o>=r&&m<s;)n(r),o-=r,m++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),g)}function d(g){if(c){try{l!==null&&h((g-l)/1e3)}catch(m){throw f(),m}l=g,c&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function p(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function f(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:p,stop:f}}var If=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),rT={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},oT={0:"fire",2:"aim"},_g={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},bg={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},aT=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function Lf(n){if(!n||typeof n.tagName!="string")return!1;let e=n.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!aT.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function Mg(n){return rT[n]||null}function Sg(n){return oT[n]||null}function Ao(){let n={};for(let e of If)n[e]=!1;return n}function wg(n,e,t=.15){let i=Math.hypot(n,e);if(i<t)return[0,0];let s=Math.min(1,(i-t)/(1-t))/i;return[n*s,e*s]}function lT(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,t]=wg(n.axes[0],n.axes[1]),[i,s]=wg(n.axes[2],n.axes[3]),r=Ao();for(let o in _g){let a=n.buttons[o];r[_g[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:t,lookX:i,lookY:s,held:r}}function cT(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let e of If)n.held[e]=!1;for(let e in n.held)n.held[e]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function Bh(n){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:Ao(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:t,downButtons:i,latched:s}=e,r="kbm",o="none",a=Ao();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,c=()=>l()||document.activeElement===n;function h(){cT(e)}function d(M){if(Lf(M.target))return;let b=Mg(M.code);(b||M.code in bg)&&(c()&&(M.code==="Tab"||M.code==="Space")&&M.preventDefault(),r="kbm",!M.repeat&&!t.has(M.code)&&b&&s.add(b),t.add(M.code))}function u(M){t.delete(M.code)}function p(M){M.target===n&&n.focus();let b=Sg(M.button);b&&(r="kbm",i.has(M.button)||s.add(b),i.add(M.button))}function f(M){i.delete(M.button)}function g(M){l()&&(r="kbm",e.lookDX+=M.movementX||0,e.lookDY+=M.movementY||0)}function m(M){!c()||!M.deltaY||(r="kbm",s.add(M.deltaY>0?"weaponNext":"weaponPrev"),M.preventDefault())}function x(M){M.preventDefault()}function y(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",f),window.addEventListener("blur",h),document.addEventListener("mousemove",g),document.addEventListener("pointerlockchange",y),n.addEventListener("mousedown",p),n.addEventListener("wheel",m,{passive:!1}),n.addEventListener("contextmenu",x);function S(){let M=[];try{M=navigator.getGamepads&&navigator.getGamepads()||[]}catch{M=[]}let b=null;for(let w of M)if(w&&w.connected){b=w;break}let v=lT(b);return o=v.ok?b.id:v.reason==="none"?"none":"unrecognised controller",v}function _(){let M={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:Ao(),pressed:Ao()};e.lookDX=0,e.lookDY=0;for(let w of t){let C=Mg(w);C&&(M.held[C]=!0);let R=bg[w];R&&(M.moveX+=R[0],M.moveY+=R[1])}for(let w of i){let C=Sg(w);C&&(M.held[C]=!0)}let b=Math.hypot(M.moveX,M.moveY);b>1&&(M.moveX/=b,M.moveY/=b);for(let w of s)M.pressed[w]=!0;s.clear();let v=S();if(v.ok){M.lookX=v.lookX,M.lookY=v.lookY;let w=v.moveX!==0||v.moveY!==0||v.lookX!==0||v.lookY!==0;for(let R of If)v.held[R]&&(w=!0,M.held[R]=!0,a[R]||(M.pressed[R]=!0));a=v.held,M.moveX+=v.moveX,M.moveY+=v.moveY;let C=Math.hypot(M.moveX,M.moveY);C>1&&(M.moveX/=C,M.moveY/=C),w&&(r="pad")}else a=Ao();return M}return{poll:_,requestLock(){try{let M=n.requestPointerLock&&n.requestPointerLock();M&&typeof M.catch=="function"&&M.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Eg(n,e,t=14){let i=n;return e>20?i-=.1:e<t&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var hT=2e3,Tg=1e4,uT=8e4;function Ag({startMs:n=0,scale:e=1}={}){let t=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-n<hT||(i+=Math.min(h,100),s++,s<60||i<1e3))return t;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let p=Eg(t,u,Math.max(14,1.1*r));if(p>t){if(d<l)return t;o=d}else p<t&&(o!==null&&d-o<Tg&&(a=a===0?Tg:Math.min(a*2,uT),l=d+a),o=null);return t=p,t}return{sample:c,scale:()=>t}}var H=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Df={viewportHeight:{value:1080}};function Kn(n){n.getAttribute("normal")||n.computeVertexNormals();let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=t.getX(l),h[1]+=t.getY(l),h[2]+=t.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Tt(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],p=Math.hypot(h,d,u);p<1e-6&&(h=t.getX(l),d=t.getY(l),u=t.getZ(l),p=Math.hypot(h,d,u)||1),a.setXYZ(l,h/p,d/p,u/p)}return a.needsUpdate=!0,n}var dT=`
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
`,fT=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function pT({px:n=j.outlinePx,color:e=H.ink,outlineNormal:t=!1}={}){return new wn({name:"outline",uniforms:{px:{value:n},inkColor:{value:new Qe(e)},viewportHeight:Df.viewportHeight},defines:t?{USE_OUTLINE_NORMAL:""}:{},vertexShader:dT,fragmentShader:fT,side:nn})}function mT(){}var Rg=new Map;function gT(n,e,t){let i=n+"|"+new Qe(e).getHexString()+"|"+t,s=Rg.get(i);return s||(s=pT({px:n,color:e,outlineNormal:t}),Rg.set(i,s)),s}function xn(n,{px:e=j.outlinePx}={}){let t=!!n.geometry.getAttribute("outlineNormal"),i=gT(e,H.ink,t),s=new lt(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=mT,n.add(s),s}function Nf(n,e){n.traverse(t=>{t.userData.isOutline&&(t.visible=e)})}function xT(n,e,t,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(t>0?t:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function zh(n,e){let t=new Oh({canvas:n,context:e,antialias:!0,powerPreference:"high-performance"});t.outputColorSpace=tn;let i=Ag({startMs:performance.now()});function s(){let o=xT(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return t.setPixelRatio(o.pixelRatio),t.setSize(o.width,o.height,!1),Df.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:t,resize:s,frameDone:r,scale:i.scale}}var gs={lightDir:{value:new B(...j.lightDir).normalize()},shadowTint:{value:new Qe(H.shadowTint)},bandEdge:{value:.15},shadowLift:{value:j.shadowLift}},vT=`
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
`,yT=`
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
`;function It({color:n="#ffffff",vertexColors:e=!1,shadowMix:t=.55,rim:i=.25}={}){return new wn({name:"toon",uniforms:{baseColor:{value:new Qe(n)},shadowMix:{value:t},rim:{value:i},lightDir:gs.lightDir,shadowTint:gs.shadowTint,bandEdge:gs.bandEdge,shadowLift:gs.shadowLift},vertexShader:vT,fragmentShader:yT,vertexColors:e})}var _T=400,bT=[-.45,.22,-1],MT=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,ST=`
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
`;function Hh({planetDir:n=bT}={}){let e=r=>new Qe(r),t=new wn({name:"sky",uniforms:{deep:{value:e(H.nebulaDeep)},hot:{value:e(H.nebulaHot)},pink:{value:e(H.hotPink)},lilac:{value:e(H.lilac)},ink:{value:e(H.ink)},planetColor:{value:e(H.planet)},shadowTint:gs.shadowTint,shadowLift:gs.shadowLift,bandEdge:gs.bandEdge,lightDir:gs.lightDir,planetDir:{value:new B(...n).normalize()},time:{value:0}},vertexShader:MT,fragmentShader:ST,side:nn,depthWrite:!1}),i=new lt(new Jt(_T,48,24),t);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){t.uniforms.time.value=r}return{mesh:i,update:s}}function Bt(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Lt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<n.length;++u){let p=n[u].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Cg(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let g=0;g<o[h].length;++g)p.push(o[h][g][u]);let f=Cg(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}}return l}function Cg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Tt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,p=h.count;u<p;u++)for(let f=0;f<t;f++){let g=h.getComponent(u,f);a.setComponent(u+d,f,g)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Ig(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=e*.5,p=Math.log10(1/e),f=Math.pow(10,p),g=u*f;for(let x=0;x<r;x++){let y=i?i.getX(x):x,S="";for(let _=0,M=a.length;_<M;_++){let b=a[_],v=n.getAttribute(b),w=v.itemSize;for(let C=0;C<w;C++)S+=`${Math.trunc(v[d[C]](y)*f+g)},`}S in t?h.push(t[S]):(l.push(y),t[S]=o,h.push(o),o++)}let m=n.clone();for(let x in n.attributes)m.setAttribute(x,Pg(n.attributes[x],l,c));for(let x in n.morphAttributes)m.morphAttributes[x]=n.morphAttributes[x].map(y=>Pg(y,l,c));return m.setIndex(h),m}function Pg(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function Ro(n){let e=n>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Lg(n,e,t=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new B),l=o.getCenter(new B),c=a.length(),h=Ro(e*7919+13>>>0),d=[];for(let x=0;x<8;x++)d.push(h()*2-1);let u=Math.min(t*c,i)*.99/Math.sqrt(3),p=(x,y)=>y>1e-9?2*x/y:0,f=[a.x,a.y,a.z].map(x=>x>1e-9?2/x:0),g=new dt,m=new B;for(let x=0;x<s.count;x++){let y=p(s.getX(x)-l.x,a.x),S=p(s.getY(x)-l.y,a.y),_=p(s.getZ(x)-l.z,a.z),M=(S+1)/2,b=(d[0]*S+d[1]*y*S)/2,v=(d[2]*y+d[3]*_)/2*M,w=(d[4]*S+d[5]*_*S)/2;if(r){let C=[d[1]*S/2,(d[0]+d[1]*y)/2,0],R=[d[2]/2*M,(d[2]*y+d[3]*_)/2*.5,d[3]/2*M],L=[0,(d[4]+d[5]*_)/2,d[5]*S/2];g.set(1+u*C[0]*f[0],u*C[1]*f[1],u*C[2]*f[2],u*R[0]*f[0],1+u*R[1]*f[1],u*R[2]*f[2],u*L[0]*f[0],u*L[1]*f[1],1+u*L[2]*f[2]),g.invert().transpose(),m.set(r.getX(x),r.getY(x),r.getZ(x)).applyMatrix3(g).normalize(),r.setXYZ(x,m.x,m.y,m.z)}s.setXYZ(x,s.getX(x)+u*b,s.getY(x)+u*v,s.getZ(x)+u*w)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var Of=null;function wT(){return Of||(Of=It({vertexColors:!0})),Of}var Ff=(n,e,t)=>new Qe(n).lerp(new Qe(e),t),kf=(n,e=.3)=>Ff(n,"#ffffff",e),Gh=(n,e=.2)=>Ff(n,H.shadowTint,e),Dg=new bt,Ng=new In,Og=new Bn,TT=new B,ET=new B;function Us(n=1,e=.02,t="prop"){let i=[],s=0;function r(h,d,u={}){let p=h.index?h.toNonIndexed():h;p.deleteAttribute("uv");let f=u.wonk===void 0?e:u.wonk;f>0&&Lg(p,n*131+s,f),s++;let g=p.getAttribute("normal"),m=new Float32Array(g.count*3);for(let x=0;x<g.count;x++){let y=typeof d=="function"?d(g.getX(x),g.getY(x),g.getZ(x)):d;m[x*3]=y.r,m[x*3+1]=y.g,m[x*3+2]=y.b}return p.setAttribute("color",new Tt(m,3)),(u.sx||u.sy||u.sz)&&p.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&p.applyMatrix4(u.m),Og.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),Ng.setFromEuler(Og),Dg.compose(TT.set(u.x||0,u.y||0,u.z||0),Ng,ET.set(1,1,1)),p.applyMatrix4(Dg),i.push(p),p}function o(h,d={}){let u=d.top||kf(h),p=d.side||Gh(h,.22),f=Gh(h,.4),g=new Qe(h);return(m,x,y)=>x>.5?u:x<-.5?f:Math.abs(m)>.5?p:y>0?g:f}function a(h,d,u,p,f={}){return r(new xt(h,d,u),o(p,f),f)}function l(h,d,u,p,f,g,m,x={}){return a(d-h,p-u,g-f,m,{...x,x:(h+d)/2,y:(u+p)/2,z:(f+g)/2})}function c(h=0){let d=Bt(i,!1);if(!d)throw new Error(`${t}: parts have different attributes and cannot be merged`);return h>0&&Lg(d,n,h),Kn(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function Fs(n){let e=new mt,t=new lt(n,wT());return xn(t),e.add(t),e}var xs=n=>()=>new Qe(n);function Vh({w:n,d:e,tile:t=1,colors:i=[H.cream,H.tealLight]}){let s=Us(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-e/2,e/2,H.lilac,{top:new Qe(H.lilac)});let o=Math.round(n/t),a=Math.round(e/t);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new Ps(t,t);h.rotateX(-Math.PI/2),s.add(h,xs(i[(l+c)%2]),{wonk:0,x:-n/2+(l+.5)*t,y:0,z:-e/2+(c+.5)*t})}return Fs(s.finish())}function Bf({w:n,h:e,color:t=H.cream,stripe:i=H.hotPink,opening:s=null,seed:r=2}){let o=Us(r,0,"wall"),a=.2,l=a/2,c=-n/2,h=n/2,d=-.3,u=new go;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,e),u.lineTo(c,e),u.closePath(),s){let x=new pr,y=s.x-s.w/2,S=s.x+s.w/2;x.moveTo(y,s.y),x.lineTo(y,s.y+s.h),x.lineTo(S,s.y+s.h),x.lineTo(S,s.y),x.closePath(),u.holes.push(x)}let p=new Na(u,{depth:a,bevelEnabled:!1});p.translate(0,0,-l),o.add(p,o.facePaint(t),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,H.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,H.teal);let f=.5,g=.8;return s&&s.y<g&&s.y+s.h>f?(o.span(c,s.x-s.w/2,f,g,l-.01,l+.03,i),o.span(s.x+s.w/2,h,f,g,l-.01,l+.03,i)):o.span(c,h,f,g,l-.01,l+.03,i),Fs(o.finish(.006))}function AT(n,e,t,i){let s=m=>Math.min(2048,Math.max(64,Math.round(m))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=n.split(" "),d=[[n]];for(let m=1;m<h.length;m++)d.push([h.slice(0,m).join(" "),h.slice(m).join(" ")]);let u=null;for(let m of d){let x=Math.max(...m.map(S=>l.measureText(S).width)),y=Math.min(r*.88*100/x,o*.8/(m.length*1.08));(!u||y>u.size)&&(u={lines:m,size:y})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=t,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let p=u.size*1.08,f=o/2-(u.lines.length-1)*p/2;u.lines.forEach((m,x)=>{let y=f+x*p;l.fillStyle=H.ink,l.fillText(m,r/2+u.size*.05,y+u.size*.06),l.fillStyle=t,l.fillText(m,r/2,y)});let g=new Ma(a);return g.colorSpace=tn,g.anisotropy=8,g}function ks({text:n,w:e,h:t,bg:i=H.hotPink,fg:s=H.cream,tilt:r=.04,seed:o=3}){let c=Us(o,0,"sign");c.box(e,t,.14,s,{wonk:0});let h=Fs(c.finish()),d=e-.14*2,u=t-.14*2,p=new lt(new Ps(d,u),new Sn({map:AT(n,i,s,d/u),toneMapped:!1}));return p.name="signFace",p.position.z=.14/2+.008,h.add(p),h.rotation.z=r,h}function Ug({w:n,h:e,seed:t=4}){let i=Us(t,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,e,-r/2,r/2,H.teal),i.span(n/2-s,n/2,0,e,-r/2,r/2,H.teal),i.span(-n/2+s,n/2-s,e-s,e,-r/2,r/2,H.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,H.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,H.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,H.cream),i.span(-n/2+s,n/2-s,e/2-.04,e/2+.04,-.04,.04,H.cream),Fs(i.finish(.006))}function ja(n,e,t,i,s,r){let o=new vr(.16,.05,8,20);n.add(o,xs(H.planet),{wonk:.04,x:e,y:t,z:i,rx:-Math.PI/2+s,ry:r})}function Fg({w:n,h:e,name:t,signColor:i=H.hotPink,seed:s=5}){let r=Us(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=Ff(H.glorpPurple,H.ink,.7);r.span(-n/2+a,n/2-a,0,c,-o/2,-o/2+.1,h),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,H.lilac);for(let x of[-1,1]){let y=x*(n/2-a/2);r.span(y-a/2,y+a/2,0,c,-o/2,o/2,H.lilac),r.span(y-a/2-.04,y+a/2+.04,0,.3,-o/2,o/2+.04,H.teal)}r.span(-n/2,n/2,c,l,-o/2,o/2,H.teal);let d=n-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,H.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,H.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,H.cream),ja(r,-.9,1.01,.4,.1,.4),ja(r,-.2,1.01,.5,-.1,-.3),ja(r,.6,1.01,.38,.12,.9),ja(r,1.2,1.01,.52,0,.1);let u=10,p=(n-.1)/u,f=.42;for(let x=0;x<u;x++){let y=x%2?H.cream:i,S=-n/2+.05+(x+.5)*p;r.box(p,.08,.95,y,{x:S,y:c-.02,z:o/2+.35,rx:f,top:kf(y,.2)}),r.box(p,.22,.06,y,{x:S,y:c-.24,z:o/2+.8,rx:.1})}let g=Fs(r.finish(.006)),m=ks({text:t,w:n-.7,h:1.15,bg:i,fg:H.cream,seed:s+1});return m.position.set(0,c+.7,o/2+.01),g.add(m),g}function kg({w:n=2,d:e=1,h:t=.9,color:i=H.teal,seed:s=7}={}){let r=Us(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-e/2+.03,e/2-.03,H.lilac),r.span(-n/2,n/2,.16,t-.08,-e/2,e/2,i),r.span(-n/2-.07,n/2+.07,t-.08,t,-e/2-.07,e/2+.07,H.cream);let o=4,a=(n-.3)/o;for(let c=0;c<o;c++){let h=c%2?H.cream:H.hotPink;r.box(a-.04,t-.45,.05,h,{x:-n/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,H.glorpPurple,{x:-.55,y:t+.14,z:-.1}),r.box(.3,.14,.04,H.gel,{x:-.55,y:t+.28,z:.07,rx:-.5,wonk:0}),ja(r,.45,t+.06,.05,.1,.5);let l=Fs(r.finish(.006));return l.userData.footprint={w:n+.14,d:e+.14},l}function Bg({w:n=1.8,seed:e=11}={}){let t=Us(e,.02,"bench"),i=.5;t.box(n,.1,i,H.lilac,{y:.46}),t.box(n,.42,.08,H.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])t.box(.1,.46,i-.06,H.teal,{x:r*(n/2-.2),y:.23}),t.box(.08,.5,.08,H.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=Fs(t.finish(.006));return s.userData.footprint={w:n,d:i},s}function RT(n,e,t){let i=new xt(.035,n,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+t*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function zg({seed:n=21}={}){let e=Us(n,.02,"planter"),t=Ro(n);e.add(new Kt(.42,.32,.55,16),xs(H.teal),{y:.275}),e.add(new Kt(.47,.44,.12,16),xs(H.hotPink),{y:.6}),e.add(new Kt(.4,.4,.04,16),xs(Gh(H.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Gh(H.planet,.15);for(let l=0;l<6;l++)e.add(new Kt(.06-l*.004,.07-l*.004,.34,8),xs(l%2?kf(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+t()*.3,h=l%2?.95+t()*.25:1.45+t()*.25,d=new bt().makeTranslation(i,s,0).multiply(new bt().makeRotationY(c)).multiply(new bt().makeRotationZ(-h));e.add(RT(.95,.24,l%2?.22:.4),xs(l%2?H.gel:H.teal),{m:d,wonk:.03})}e.add(new Jt(.1,10,8),xs(H.planet),{x:i,y:s-.05,z:.08}),e.add(new Jt(.1,10,8),xs(H.planet),{x:i+.07,y:s-.1,z:-.07});let a=Fs(e.finish());return a.userData.footprint={w:.95,d:.95},a}var Uf=null;function Wh({rx:n,rz:e,opacity:t=.35}){let r=new Qe(H.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,t];for(let d=1;d<=8;d++){let u=d/8,p=t*(1-u*u*(3-2*u));for(let f=0;f<28;f++){let g=f/28*Math.PI*2;o.push(Math.cos(g)*n*u,0,Math.sin(g)*e*u),a.push(r.r,r.g,r.b,p)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,p=1+d*28;for(let f=0;f<28;f++){let g=(f+1)%28;l.push(u+f,u+g,p+f,u+g,p+g,p+f)}}let c=new Lt;c.setAttribute("position",new gt(o,3)),c.setAttribute("color",new gt(a,4)),c.setIndex(l),Uf||(Uf=new Sn({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new lt(c,Uf);return h.name="blobShadow",h.position.y=.012,h}var Qa=8,Xh=Qa/2,zf=.2;function Hg(){let n=new mt;n.add(Vh({w:Qa,d:Qa}));let e=Bf({w:Qa+zf*2,h:4});e.position.set(0,0,-Xh-zf/2),n.add(e);let t=1.3,i=Fg({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:H.hotPink});i.position.set(t,0,-Xh+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=Bf({w:Qa,h:4,color:"#f1e6ff",opening:s});r.position.set(-Xh-zf/2,0,0),r.rotation.y=Math.PI/2;let o=Ug({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=kg({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=Bg({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=zg({seed:21});c.position.set(-2.95,0,-2.9),n.add(a,l,c);let h=(d,u,p,f,g=0)=>{let m=Wh({rx:p,rz:f,opacity:.7});m.position.x=d,m.position.z=u,m.rotation.y=g,n.add(m)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(t,-Xh+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function Nn(n,e,t,i){if(!(t>0)||!(i>0))return t>0||(n.x=e,n.v=0),n;let s=4*Math.LN2/t/2,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i),n}function Hf(n,e,t,i,s,r){let o=t+i,a=e[0]-n[0],l=e[1]-n[1],c=e[2]-n[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=e[0],p=e[1],f=e[2];h>d&&(h=d,u=n[0]+a*h,p=n[1]+l*h,f=n[2]+c*h);let g=h>o?h/o:1;if(h>=o){let w=h*(o>0?t/o:.5);return Gg(r,n[0]+a*w,n[1]+l*w,n[2]+c*w,u,p,f,g)}let m=Math.max(h,1e-6),x=Math.min(Math.max((m*m+t*t-i*i)/(2*m),-t),t),y=Math.sqrt(Math.max(t*t-x*x,0)),S=s[0],_=s[1],M=s[2],b=S*a+_*l+M*c;S-=a*b,_-=l*b,M-=c*b;let v=Math.hypot(S,_,M);return v<1e-6&&(Math.abs(a)<.9?(S=0,_=c,M=-l):(S=-c,_=0,M=a),v=Math.hypot(S,_,M)||1),S/=v,_/=v,M/=v,Gg(r,n[0]+a*x+S*y,n[1]+l*x+_*y,n[2]+c*x+M*y,u,p,f,g)}function Gg(n,e,t,i,s,r,o,a){if(!n)return{mid:[e,t,i],end:[s,r,o],stretch:a};let l=n.mid,c=n.end;return l[0]=e,l[1]=t,l[2]=i,c[0]=s,c[1]=r,c[2]=o,n.stretch=a,n}var Vg=[.65,1.2];function Gf({radius:n=.06,rings:e=8,sides:t=8,color:i="#ffffff"}={}){let s=e+1,r=Vg.length,o=s*t,a=[o,o+r*t+1],l=o+2*(r*t+1),c=[],h=(he,ie,ve)=>{for(let se=0;se<t;se++){let me=(se+1)%t,Ue=he+se,Ve=he+me,z=ie+se,ye=ie+me;ve?c.push(Ue,z,Ve,Ve,z,ye):c.push(Ue,Ve,z,Ve,ye,z)}};for(let he=0;he<e;he++)h(he*t,(he+1)*t,!1);for(let he=0;he<2;he++){let ie=he===0,ve=he===0?0:e*t;for(let me=0;me<r;me++){let Ue=a[he]+me*t;h(ve,Ue,ie),ve=Ue}let se=a[he]+r*t;for(let me=0;me<t;me++){let Ue=ve+me,Ve=ve+(me+1)%t;ie?c.push(Ue,se,Ve):c.push(Ue,Ve,se)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),p=new Lt,f=new Tt(d,3),g=new Tt(u,3);f.setUsage(wo),g.setUsage(wo),p.setAttribute("position",f),p.setAttribute("normal",g),p.setIndex(c);let m=new lt(p,It({color:i}));m.name="limb";let x=new zn(new B,n*2);p.boundingSphere=x,xn(m);let y=new Float64Array(t),S=new Float64Array(t);for(let he=0;he<t;he++)y[he]=Math.cos(he/t*Math.PI*2),S[he]=Math.sin(he/t*Math.PI*2);let _=0,M=-1,b=0,v=1,w=0,C=0,R=0,L=0,T=1,I=0,E=0,N=0,k=0,V=0,te=0,X=0,Q=0,$=0,Y=0,_e=0,J=0,Z=0,fe=0,Be=0,W=0,Te=0,Le=0;function Ae(he,ie,ve,se,me,Ue,Ve,z,ye,Ne,qe,de,nt,Ie,Xe,O){for(let A=0;A<t;A++){let ee=y[A]*Ue+S[A]*ye,Re=y[A]*Ve+S[A]*Ne,ge=y[A]*z+S[A]*qe,Ee=(he+A)*3;d[Ee]=ie+ee*me,d[Ee+1]=ve+Re*me,d[Ee+2]=se+ge*me,u[Ee]=ee*Xe+de*O,u[Ee+1]=Re*Xe+nt*O,u[Ee+2]=ge*Xe+Ie*O}}let be=!1,Ce=1,U=0,K=0;function ne(he,ie,ve,se=1){let me=n/Math.sqrt(se>1?se:1),Ue=2*ie[0]-(he[0]+ve[0])/2,Ve=2*ie[1]-(he[1]+ve[1])/2,z=2*ie[2]-(he[2]+ve[2])/2,ye=he[0],Ne=he[1],qe=he[2],de=ve[0],nt=ve[1],Ie=ve[2],Xe=(ie[1]-Ne)*(Ie-ie[2])-(ie[2]-qe)*(nt-ie[1]),O=(ie[2]-qe)*(de-ie[0])-(ie[0]-ye)*(Ie-ie[2]),A=(ie[0]-ye)*(nt-ie[1])-(ie[1]-Ne)*(de-ie[0]),ee=Math.hypot(Xe,O,A),Re=ie[0]-ye,ge=ie[1]-Ne,Ee=ie[2]-qe,De=Math.hypot(Re,ge,Ee),ce=de-ie[0],pe=nt-ie[1],ke=Ie-ie[2],G=!1;ee>1e-4*De*Math.hypot(ce,pe,ke)&&ee>1e-12?(Xe/=ee,O/=ee,A/=ee,be&&Xe*Ce+O*U+A*K<0&&(Xe=-Xe,O=-O,A=-A),G=!0):De>1e-9&&Re*ce+ge*pe+Ee*ke<0&&(Ue=(ye+de)/2,Ve=(Ne+nt)/2,z=(qe+Ie)/2);let le=(ye+Ue+de)/3,ae=(Ne+Ve+nt)/3,Fe=(qe+z+Ie)/3,Pe=Math.max(Math.hypot(ye-le,Ne-ae,qe-Fe),Math.hypot(Ue-le,Ve-ae,z-Fe),Math.hypot(de-le,nt-ae,Ie-Fe));x.center.set(le,ae,Fe),x.radius=Pe+n*1.5+.02;for(let xe=0;xe<s;xe++){let Me=xe/e,Ze=1-Me,Se=Ze*Ze,We=2*Ze*Me,je=Me*Me,ze=Se*ye+We*Ue+je*de,st=Se*Ne+We*Ve+je*nt,ft=Se*qe+We*z+je*Ie,Rt=2*Ze*(Ue-ye)+2*Me*(de-Ue),zt=2*Ze*(Ve-Ne)+2*Me*(nt-Ve),Ft=2*Ze*(z-qe)+2*Me*(Ie-z),Vn=Math.hypot(Rt,zt,Ft);if(Vn>1e-9?(_=Rt/Vn,M=zt/Vn,b=Ft/Vn):xe===0&&(_=0,M=-1,b=0),xe===0){G?(v=Xe,w=O,C=A):be?(v=Ce,w=U,C=K):(v=1,w=0,C=0);let pn=v*_+w*M+C*b;v-=_*pn,w-=M*pn,C-=b*pn;let Nt=Math.hypot(v,w,C);Nt<1e-6&&(Math.abs(_)<.9?(v=0,w=b,C=-M):(v=-b,w=0,C=_),Nt=Math.hypot(v,w,C)||1),v/=Nt,w/=Nt,C/=Nt,Ce=v,U=w,K=C,be=!0}else{let pn=v*_+w*M+C*b;v-=_*pn,w-=M*pn,C-=b*pn;let Nt=Math.hypot(v,w,C);Nt<1e-6&&(Math.abs(_)<.9?(v=0,w=b,C=-M):(v=-b,w=0,C=_),Nt=Math.hypot(v,w,C)||1),v/=Nt,w/=Nt,C/=Nt}R=M*C-b*w,L=b*v-_*C,T=_*w-M*v,Ae(xe*t,ze,st,ft,me,v,w,C,R,L,T,0,0,0,1,0),xe===0&&(I=_,E=M,N=b,k=v,V=w,te=C,X=R,Q=L,$=T),xe===s-1&&(Y=_,_e=M,J=b,Z=v,fe=w,Be=C,W=R,Te=L,Le=T)}for(let xe=0;xe<2;xe++){let Me=xe===0?-1:1,Ze=xe===0?ye:de,Se=xe===0?Ne:nt,We=xe===0?qe:Ie,je=xe===0?I:Y,ze=xe===0?E:_e,st=xe===0?N:J,ft=xe===0?k:Z,Rt=xe===0?V:fe,zt=xe===0?te:Be,Ft=xe===0?X:W,Vn=xe===0?Q:Te,pn=xe===0?$:Le,Nt=je*Me,_n=ze*Me,Ot=st*Me;for(let di=0;di<r;di++){let fi=Vg[di],es=Math.cos(fi),ei=Math.sin(fi);Ae(a[xe]+di*t,Ze+Nt*me*ei,Se+_n*me*ei,We+Ot*me*ei,me*es,ft,Rt,zt,Ft,Vn,pn,Nt,_n,Ot,es,ei)}let kn=(a[xe]+r*t)*3;d[kn]=Ze+Nt*me,d[kn+1]=Se+_n*me,d[kn+2]=We+Ot*me,u[kn]=Nt,u[kn+1]=_n,u[kn+2]=Ot}f.needsUpdate=!0,g.needsUpdate=!0}return{mesh:m,set:ne}}var wr=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),CT=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),Yh=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Vf=.04,PT=9;function qh(n,e){let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*Math.PI*2}function IT(n,e,t=[0,0]){return t[0]=.05*Math.sin(1.3*n+qh(e,1))+.03*Math.sin(2.1*n+qh(e,2)),t[1]=.04*Math.sin(1.7*n+qh(e,3))+.02*Math.sin(2.6*n+qh(e,4)),t}var LT=(n,e)=>Math.min(n*2,1)*Math.max(e,0),el=16,Wg=el+1,zi=11,Bs=4,$h=13,DT=.07,NT=n=>{let e=n<0?0:n>1?1:n;return e*e*(3-2*e)};function Xg({eyeRadius:n=.1,eyeSpacing:e=.26,eyeY:t=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=H.ink,fixedSmile:h=0}={}){let d=n,u=e/2,p=[-u,u],f=.35,g=.035*d,m=d*.3,x=a==="uni",y=0,S=y+2*Wg,_=S+16,M=_+2*zi*Bs,b=M+2*zi*2,v=b+(x?6:8),w=v+$h*2,C=[],R=ye=>C.push(ye,ye+1,ye+2,ye,ye+2,ye+3),L=(ye,Ne)=>{for(let qe=0;qe<Ne-1;qe++){let de=ye+qe*2;C.push(de,de+1,de+2,de+1,de+3,de+2)}};for(let ye=0;ye<2;ye++){let Ne=y+ye*Wg;for(let qe=0;qe<el;qe++)C.push(Ne,Ne+1+qe,Ne+1+(qe+1)%el)}for(let ye=0;ye<4;ye++)R(S+ye*4);for(let ye=0;ye<2;ye++){let Ne=_+ye*zi*Bs;for(let qe=0;qe<zi-1;qe++)for(let de=0;de<Bs-1;de++){let nt=Ne+qe*Bs+de,Ie=nt+1,Xe=nt+Bs,O=Xe+1;C.push(nt,Ie,Xe,Ie,O,Xe)}L(M+ye*zi*2,zi)}x?C.push(b,b+1,b+2,b+1,b+3,b+2,b+2,b+3,b+4,b+3,b+5,b+4):(R(b),R(b+4)),L(v,$h);let T=[];for(let ye=0;ye<2;ye++){let Ne=new Jt(d,18,12);Ne.deleteAttribute("uv"),Ne.applyMatrix4(new bt().makeScale(1,1,f).setPosition(p[ye],t,i)),T.push(Ne)}let I=new lt(Bt(T,!1),It({color:H.eyeWhite,shadowMix:.35,rim:0}));I.name="eyes",xn(I,{px:2});let E=new Float32Array(w*3),N=new Float32Array(w*3),k=new Float32Array(w*3),V=new Qe(H.ink),te=new Qe(c);for(let ye=0;ye<w;ye++){N[ye*3+2]=1;let Ne=ye>=_&&ye<M?te:V;k[ye*3]=Ne.r,k[ye*3+1]=Ne.g,k[ye*3+2]=Ne.b}let X=new Lt,Q=new Tt(E,3);Q.setUsage(wo),X.setAttribute("position",Q),X.setAttribute("normal",new Tt(N,3)),X.setAttribute("color",new Tt(k,3)),X.setIndex(C);let $=t+d*3.5,Y=s-r*1.5-d,_e=Math.max(u+2.5*d,r);X.boundingSphere=new zn(new B(0,($+Y)/2,i),Math.hypot(_e,($-Y)/2,d*2));let J=It({color:"#ffffff",vertexColors:!0,rim:0});J.side=Tn;let Z=new lt(X,J);Z.name="features";let fe=new mt;fe.name="face",fe.add(I,Z);let Be=wr.neutral,W=ye=>{let Ne=h>0?CT[ye]:0;return Ne>0?h*Ne:-1/0},Te=W("neutral"),Le=ye=>ye==="mouthCurve"&&Be.mouthCurve<Te?Te:Be[ye],Ae={};for(let ye of Yh)Ae[ye]={x:Le(ye),v:0};let be={x:0,v:0},Ce={x:0,v:0},U=0,K=!1,ne=0,he=[0,0],ie=0;function ve(ye,Ne,qe){let de=ie*3;E[de]=ye,E[de+1]=Ne,E[de+2]=qe,ie++}function se(ye,Ne,qe){let de=1-(ye*ye+Ne*Ne)/(d*d);return i+d*f*Math.sqrt(de>0?de:0)+qe}function me(ye,Ne,qe,de,nt,Ie){let Xe=-(de-Ne),O=qe-ye,A=Math.hypot(Xe,O)||1;Xe=Xe/A*nt/2,O=O/A*nt/2,ve(ye+Xe,Ne+O,Ie),ve(qe+Xe,de+O,Ie),ve(qe-Xe,de-O,Ie),ve(ye-Xe,Ne-O,Ie)}let Ue=d*1.03;function Ve(){let ye=Ae,Ne=ye.pupilScale.x*(1-be.x),qe=be.x,de=Math.min(Math.max(ye.lid.x,0),.95),nt=ye.browAngle.x,Ie=de>.005,Xe=Ue-2*Ue*de,O=nt*.6*Math.min(de*4,1),A=d*DT*Math.min(de*10,1);ie=y;for(let Me=0;Me<2;Me++){let Ze=Me===0?-1:1;IT(ne,l+Me*7.31,he);let Se=d*.5*(Ne>0?Ne:0),We=he[0]*d,je=he[1]*d;if(Ie){let st=Xe+O*Ze*We-Math.abs(O)*Se-A-(je+Se);if(st>0){let ft=Math.min(Math.max((st-.1*d)/(.1*d),0),1);je+=st*(1-NT(ft))}}ve(p[Me]+We,t+je,se(We,je,g));for(let ze=0;ze<el;ze++){let st=ze/el*Math.PI*2,ft=We+Math.cos(st)*Se,Rt=je+Math.sin(st)*Se;ve(p[Me]+ft,t+Rt,se(ft,Rt,g))}}ie=S;for(let Me=0;Me<2;Me++){let Ze=d*.55*qe,Se=se(0,0,g),We=d*.26*qe;me(p[Me]-Ze,t-Ze,p[Me]+Ze,t+Ze,We,Se),me(p[Me]-Ze,t+Ze,p[Me]+Ze,t-Ze,We,Se)}for(let Me=0;Me<2;Me++){let Ze=Me===0?-1:1;for(let Se=0;Se<2;Se++){ie=Se===0?_+Me*zi*Bs:M+Me*zi*2;for(let We=0;We<zi;We++){let je=(We/(zi-1)*2-1)*(Math.PI/2),ze=Ue*Math.sin(je),st=Ue*Math.cos(je),ft=Ie?Xe+O*ze:st;ft>st&&(ft=st),ft<-st&&(ft=-st);let Rt=Ze*ze;if(Se===0)for(let zt=0;zt<Bs;zt++){let Ft=st+(ft-st)*(zt/(Bs-1));ve(p[Me]+Rt,t+Ft,se(Rt,Ft*.97,g*3))}else{let zt=ft+(Ie?d*.02:0);zt>st&&(zt=st);let Ft=ft-A;Ft<-st&&(Ft=-st),ve(p[Me]+Rt,t+zt,se(Rt,zt*.97,g*3.5)),ve(p[Me]+Rt,t+Ft,se(Rt,Ft*.97,g*3.5))}}}}ie=b;let ee=d*.9,Re=t+d*(1.4+ye.browY.x),ge=Math.cos(nt),Ee=Math.sin(nt),De=i+d*.15;if(x){let Me=u+ee*ge,Ze=Re+ee*Ee,Se=Re-Ee/(ge>.3?ge:.3)*u,We=-(Se-Ze),je=Me,ze=Math.hypot(We,je)||1;We/=ze,je/=ze;let st=-(Ze-Se),ft=Me,Rt=Math.hypot(st,ft)||1;st/=Rt,ft/=Rt;let zt=We+st,Ft=je+ft,Vn=Math.hypot(zt,Ft)||1;zt/=Vn,Ft/=Vn;let pn=zt*We+Ft*je,Nt=m/2/(pn>.4?pn:.4);ve(-Me+We*m/2,Ze+je*m/2,De),ve(-Me-We*m/2,Ze-je*m/2,De),ve(zt*Nt,Se+Ft*Nt,De),ve(-zt*Nt,Se-Ft*Nt,De),ve(Me+st*m/2,Ze+ft*m/2,De),ve(Me-st*m/2,Ze-ft*m/2,De)}else for(let Me=0;Me<2;Me++){let Ze=Me===0?-1:1;me(p[Me]-Ze*ee*ge,Re-ee*Ee,p[Me]+Ze*ee*ge,Re+ee*Ee,m,De)}ie=v;let ce=ye.mouthOpen.x+Ce.x*(.55+.45*Math.sin((ne+l*.37)*PT*Math.PI*2))*.8,pe=ce>0?ce<1.2?ce:1.2:0,ke=-ye.mouthCurve.x/.5,G=(ke>1?1:ke>0?ke:0)*(pe<.4?pe/.4:1),le=r/2*(1-.35*(pe<1?pe:1)*(1-.7*G)),ae=LT(ye.lid.x,ye.mouthCurve.x),Fe=ye.mouthCurve.x*le*.5*(1-.4*ae)*(1+.6*G),Pe=.55+.5*G,xe=pe*le*.9;for(let Me=0;Me<$h;Me++){let Ze=Me/($h-1)*2-1,Se=1-Ze*Ze,We=Ze*le*(1-.25*ae)+ae*le*.2,je=s-Fe*Se+ae*le*.45*Ze+be.x*m*.6*Math.sin(Ze*Math.PI*3);ve(We,je,o),ve(We,je-m-xe*Math.pow(Se,Pe)+Fe*Se*G,o)}Q.needsUpdate=!0}function z(ye){ne+=ye;for(let Ne=0;Ne<Yh.length;Ne++)Nn(Ae[Yh[Ne]],Le(Yh[Ne]),Vf,ye);Nn(be,U,Vf,ye),Nn(Ce,K?1:0,Vf,ye),Ve()}return Ve(),{group:fe,setExpression(ye){Be=Object.prototype.hasOwnProperty.call(wr,ye)?wr[ye]:wr.neutral,U=ye==="dead"?1:0,Te=W(Object.prototype.hasOwnProperty.call(wr,ye)?ye:"neutral")},setTalking(ye){K=!!ye},update:z}}var On=Math.PI*2,tl=["handL","handR","footL","footR"];function Gi(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function Yg(n,e){e.hipsY=n.hipsY,e.lean=n.lean,e.twist=n.twist,e.headYaw=n.headYaw,e.headPitch=n.headPitch,e.squash=n.squash,e.elbows=n.elbows;for(let t=0;t<4;t++){let i=n[tl[t]],s=e[tl[t]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function nl(n,e,t,i=[0,0,0]){let s=t[0],r=t[1]-n.hipHeight,o=t[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+e.hipsY,i[2]=-s*h+u*c,i}var OT=n=>n<0?0:n>1?1:n,Hi=(n,e,t)=>{let i=OT((t-n)/(e-n));return i*i*(3-2*i)},Tr=(n,e,t,i,s)=>Hi(e,t,n)*(1-Hi(i,s,n));function Ct(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}var Zh=[0,0,0];function si(n,e,t,i,s,r){return Zh[0]=t,Zh[1]=i,Zh[2]=s,nl(n,e,Zh,r)}var Kh={sx:0,sy:0,fx:0};function Rn(n){return Kh.sx=Math.abs(n.shoulderL[0]),Kh.sy=n.shoulderL[1],Kh.fx=Math.abs(n.hipL[0])+.035,Kh}var Po=(n,e)=>e>0?n.handL:n.handR;function Wf(n,e,t,i,s){return si(n,e,s*(t.sx+.16),n.hipHeight+0,.1,i)}var Xf=.55;function tu(n,e,t){let i=Rn(e),s=n/yt.idle.duration,r=On*s,o=e.hipHeight,a=Tr(s,.42,.52,.72,.86);return t.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),t.lean=.03+.015*Math.sin(r+.4),t.twist=.05*Math.sin(r+.6),t.headYaw=.03*Math.sin(r)+.3*a,t.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,t.squash=1+.008*Math.sin(r),t.elbows=Xf,Wf(e,t,i,t.handL,1),Wf(e,t,i,t.handR,-1),t.handL[1]+=.008*Math.sin(r-.5),t.handR[1]+=.008*Math.sin(r+.4),t.handL[2]+=.01*Math.sin(r+1.1),t.handR[2]+=.01*Math.sin(r-.7),Ct(t.footL,i.fx,0,.015),Ct(t.footR,-i.fx,0,-.015),t}var vs=.34,Yf=.25,Zg=-.33,UT=.4,FT=.37,kT=.035,eu=(Yf-Zg)/vs;function qg(n,e){if(n<vs)return e[0]=0,e[1]=Yf-eu*n,e;let t=(n-vs)/(1-vs),i=-eu*(1-vs),s=-.35*eu*(1-vs),r=t*t,o=r*t;return e[1]=(2*o-3*r+1)*Zg+(o-2*r+t)*i+(-2*o+3*r)*Yf+(o-r)*s,e[0]=UT*Math.sin(Math.PI*Math.pow(t,.8)),e}var dn=[0,0];function Kg(n,e,t){let i=Rn(e),s=n/yt.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*On*(r-(vs+.5)/2);t.hipsY=o-.06+kT*Math.cos(a),t.squash=1+.045*Math.cos(2*On*(r-vs-.03)),t.lean=FT+.03*Math.cos(2*On*(r-vs));let l=Math.cos(On*(r+.03));t.twist=.2*l,t.headYaw=-.15*l,t.headPitch=-.28+.04*Math.cos(a),t.elbows=0,qg(r,dn),Ct(t.footL,i.fx*.75,dn[0],dn[1]),qg(r<.5?r+.5:r-.5,dn),Ct(t.footR,-i.fx*.75,dn[0],dn[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;si(e,t,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,Po(t,c))}return t}function Jg(n,e,t){let i=Rn(e),s=On*n/yt.aim.duration,r=e.hipHeight;t.hipsY=r-.05+.005*Math.sin(s),t.lean=.12+.01*Math.sin(s),t.twist=-.1,t.headYaw=.08,t.headPitch=.04+.012*Math.sin(2*s),t.squash=1,t.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Ct(t.handL,i.sx*1.2+o,i.sy-.12+a,.56),Ct(t.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Ct(t.footL,i.fx+.02,0,.15),Ct(t.footR,-i.fx-.03,0,-.13),t}var qf=.35;function BT(n){return n<.06?Hi(0,.06,n):Math.exp(-9*(n-.06))*(1-Hi(.24,qf,n))}function zT(n){if(n<.07)return Hi(0,.07,n);let e=n-.07;return Math.exp(-11*e)*Math.cos(On*e/.22)*(1-Hi(.26,qf,n))}function HT(n,e,t){let i=Rn(e),s=e.hipHeight,r=BT(n);t.hipsY=s-.012-.05*r,t.lean=.03-.4*r,t.twist=.12*r,t.headYaw=-.12*r,t.headPitch=-.02-.32*r,t.squash=1-.15*zT(n),t.elbows=Xf+(1-Xf)*r;for(let o=-1;o<=1;o+=2){let a=Po(t,o);Wf(e,t,i,a,o);let l=a[0],c=a[1],h=a[2];si(e,t,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Ct(t.footL,i.fx,0,.015),Ct(t.footR,-i.fx,0,-.015),t}var zs=[0,0,0];function GT(n,e,t){tu(n,e,t);let i=Rn(e),s=n/yt.talk.duration,r=On*s,o=Tr(s,.04,.17,.4,.55),a=Tr(s,.5,.63,.8,.95),l=Math.sin(3*r);t.headPitch+=.05*Math.sin(4*r)-.04*(o+a),t.headYaw+=-.12*o+.12*a,t.elbows+=(.85-t.elbows)*Math.max(o,a),si(e,t,-(i.sx+.19),i.sy-.1+.03*l,.36,zs);for(let c=0;c<3;c++)t.handR[c]+=(zs[c]-t.handR[c])*o;si(e,t,i.sx+.19,i.sy-.12-.03*l,.34,zs);for(let c=0;c<3;c++)t.handL[c]+=(zs[c]-t.handL[c])*a;return t}var Hn=Gi();function VT(n,e,t){let i=n/yt.roll.duration,s=Tr(i,0,.15,.75,1),r=Rn(e);tu(0,e,Hn);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Hn.hipsY,.45),t.lean=o(Hn.lean,1.3),t.twist=0,t.headYaw=0,t.headPitch=o(Hn.headPitch,.35),t.squash=o(1,.9),t.elbows=1;for(let a=-1;a<=1;a+=2){let l=Po(t,a),c=Po(Hn,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?t.footL:t.footR,d=a>0?Hn.footL:Hn.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return t}function WT(n,e,t){return Kg(n,e,t),t.hipsY-=.12,t.lean+=.15,t}var XT=.25,YT=.85,qT=.82;function jg(n,e,t){let i=Rn(e),s=On*n/yt.coverLow.duration;return t.hipsY=XT+.006*Math.sin(s),t.lean=YT+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=-.55+.03*Math.sin(2*s+1),t.squash=qT,t.elbows=1,Ct(t.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Ct(t.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Ct(t.footL,i.fx+.08,0,.12),Ct(t.footR,-i.fx-.08,0,.12),t}function Qg(n,e,t,i){let s=Rn(n),r=i/yt[t].duration,o=Math.sin(On*r);return e.hipsY+=.012*Math.cos(2*On*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function $T(n,e,t){return jg(0,e,t),Qg(e,t,"coverLowMove",n),t}function $f(n,e,t){let i=Rn(e),s=On*n/yt.coverTall.duration;return t.hipsY=e.hipHeight-.012+.006*Math.sin(s),t.lean=.07+.01*Math.sin(s+.4),t.twist=.02*Math.sin(s+.6),t.headYaw=.05*Math.sin(s),t.headPitch=0+.02*Math.sin(2*s+1),t.squash=1+.006*Math.sin(s),t.elbows=1,si(e,t,i.sx+.14,i.sy+0,.31,t.handL),si(e,t,-i.sx-.14,i.sy+0,.31,t.handR),Ct(t.footL,i.fx,0,.015),Ct(t.footR,-i.fx,0,-.015),t}function ZT(n,e,t){return $f(0,e,t),Qg(e,t,"coverTallMove",n),t}function KT(n,e,t){return Jg(n*(yt.aim.duration/yt.coverPop.duration),e,t),t.hipsY-=.07,t.lean+=.06,t.footL[2]+=.04,t.footR[2]-=.04,t.footL[0]+=.04,t.footR[0]-=.04,t}function JT(n,e,t){let i=n/yt.vault.duration,s=Tr(i,0,.3,.7,1),r=Rn(e);tu(0,e,Hn);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Hn.hipsY,e.hipHeight-.02),t.lean=o(Hn.lean,.55),t.twist=0,t.headYaw=0,t.headPitch=o(Hn.headPitch,-.25),t.squash=1,t.elbows=1;for(let a=-1;a<=1;a+=2){let l=Po(t,a),c=Po(Hn,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?t.footL:t.footR,d=a>0?Hn.footL:Hn.footR;h[0]=o(d[0],a*(r.fx+.04)),h[1]=o(d[1],.55),h[2]=o(d[2],.3)}return t}var jT=.17,QT=.5,eE=-.9,tE=.82;function nE(n,e,t){let i=Rn(e),s=On*n/yt.coverBlindLow.duration;return t.hipsY=jT+.006*Math.sin(s),t.lean=QT+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=eE+.03*Math.sin(2*s+1),t.squash=tE,t.elbows=1,nl(e,t,e.shoulderR,zs),Ct(t.handR,zs[0]-.02,zs[1]+.44+.008*Math.sin(s+.4),zs[2]+.12),Ct(t.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Ct(t.footL,i.fx+.08,0,.12),Ct(t.footR,-i.fx-.08,0,.12),t}function $g(n,e,t,i){$f(n*(yt.coverTall.duration/yt.coverBlindTallL.duration),e,t);let s=Rn(e);return si(e,t,i*(s.sx+.4),s.sy,.2,i>0?t.handL:t.handR),t}var iE=.3,sE=1.2,Jh=[.4,.62],jh=[-.6,-.36];function Qh(n,e,t,i,s,r){if(n-=Math.floor(n),n<.5)return r[0]=s,r[1]=e+(t-e)*(n/.5),r;let o=(n-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=t+(e-t)*(o*o*(3-2*o)),r}function rE(n,e,t){let i=Rn(e),s=n/yt.crawl.duration,r=On*s;return t.hipsY=iE+.012*Math.cos(2*r),t.lean=sE+.03*Math.cos(2*r),t.twist=.1*Math.sin(r),t.headYaw=-.1*Math.sin(r),t.headPitch=-.75,t.squash=1,t.elbows=1,Qh(s,Jh[1],Jh[0],.16,.04,dn),Ct(t.handL,i.sx+.12,dn[0],dn[1]),Qh(s+.5,Jh[1],Jh[0],.16,.04,dn),Ct(t.handR,-i.sx-.12,dn[0],dn[1]),Qh(s,jh[1],jh[0],.16,0,dn),Ct(t.footR,-i.fx-.02,dn[0],dn[1]),Qh(s+.5,jh[1],jh[0],.16,0,dn),Ct(t.footL,i.fx+.02,dn[0],dn[1]),t}function Co(n,e,t){let i=e.length;if(n<=e[0][0])return Ct(t,e[0][1],e[0][2],e[0][3]);for(let r=0;r<i-1;r++){let o=e[r],a=e[r+1];if(n<a[0]){let l=Hi(o[0],a[0],n);return Ct(t,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l,o[3]+(a[3]-o[3])*l)}}let s=e[i-1];return Ct(t,s[1],s[2],s[3])}var oE=.4,aE=.9;function lE(n,e,t){let i=Rn(e),s=n/yt.revive.duration,r=On*s;return t.hipsY=oE+.012*Math.sin(2*r),t.lean=aE+.05*Math.sin(2*r),t.twist=.04*Math.sin(r),t.headYaw=.04*Math.sin(r),t.headPitch=-.55,t.squash=1,t.elbows=1,Ct(t.handL,i.sx-.06,.37-.06*Math.sin(r),.64),Ct(t.handR,-i.sx+.06,.37+.06*Math.sin(r),.64),Ct(t.footL,i.fx+.06,0,-.32),Ct(t.footR,-i.fx-.06,0,-.32),t}var cE=[[0,-.3,1,.3],[.17,-.29,1.08,.08],[.33,-.23,1.17,.5],[.55,-.23,1.17,.5],[1,-.3,1,.3]],hE=[[0,.1,0,0],[.17,-.05,0,0],[.33,.15,0,0],[.55,.15,0,0],[1,.1,0,0]],uE=[[0,0,0,0],[.17,-.3,0,0],[.33,.3,0,0],[.55,.25,0,0],[1,0,0,0]],An=[0,0,0];function dE(n,e,t){let i=Rn(e),s=n/yt.bash.duration;return Co(s,hE,An),t.lean=An[0],Co(s,uE,An),t.twist=An[0],t.hipsY=e.hipHeight-.09-.03*Tr(s,.2,.33,.55,.9),t.headYaw=-.5*t.twist,t.headPitch=-.1,t.squash=1,t.elbows=1,Co(s,cE,An),si(e,t,An[0],An[1],An[2],t.handR),si(e,t,i.sx+.14,i.sy-.1,.32,t.handL),Ct(t.footL,i.fx+.04,0,-.14),Ct(t.footR,-i.fx-.04,0,.2),t}var fE=[[0,-.3,1,.3],[.3,-.31,1.38,-.12],[.4,-.22,1.6,.04],[.6,-.2,1.22,.5],[.9,-.15,.98,.46],[1,-.3,1,.3]],pE=[[0,.1,0,0],[.3,-.2,0,0],[.4,-.28,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,.1,0,0]],mE=[[0,-.1,0,0],[.3,-.45,0,0],[.4,-.45,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,-.1,0,0]];function gE(n,e,t){let i=Rn(e),s=n/yt.throw.duration;return Co(s,pE,An),t.lean=An[0],Co(s,mE,An),t.twist=An[0],t.hipsY=e.hipHeight-.07-.03*Tr(s,.4,.6,.9,1),t.headYaw=-.4*t.twist,t.headPitch=-.05,t.squash=1,t.elbows=1,Co(s,fE,An),si(e,t,An[0],An[1],An[2],t.handR),si(e,t,i.sx+.2,i.sy-.12-.08*Hi(.5,.9,s),.34-.12*Hi(.5,.9,s),t.handL),Ct(t.footL,i.fx+.04,0,.1+.06*Hi(.4,.7,s)),Ct(t.footR,-i.fx-.04,0,-.16),t}var xE=.05;function en(n,e,t,i=xE){return Object.freeze({duration:n,loop:e,ease:i,sample:(s,r,o=Gi())=>t(s,r,o)})}var yt=Object.freeze({idle:en(2.4,!0,tu),run:en(.56,!0,Kg,.008),aim:en(1.6,!0,Jg),flinch:en(qf,!1,HT),talk:en(2.4,!0,GT),roll:en(.55,!1,VT,.02),sprint:en(.56,!0,WT,.008),coverLow:en(2.4,!0,jg),coverLowMove:en(.5,!0,$T),coverTall:en(2.4,!0,$f),coverTallMove:en(.5,!0,ZT),coverPop:en(1.6,!0,KT),vault:en(.5,!1,JT,.02),coverBlindLow:en(1.6,!0,nE),coverBlindTallL:en(1.6,!0,(n,e,t)=>$g(n,e,t,1)),coverBlindTallR:en(1.6,!0,(n,e,t)=>$g(n,e,t,-1)),crawl:en(1,!0,rE),revive:en(.5,!0,lE),bash:en(.45,!1,dE,.02),throw:en(.5,!1,gE,.02)}),Vi=eu/yt.run.duration;function il(n,e,t,i){let s=Object.prototype.hasOwnProperty.call(yt,n)?yt[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,t,i||Gi())}function nu(n,e,t,i=Gi()){if(!(t>0))return Yg(n,i);if(t>=1)return Yg(e,i);let s=1-t;i.hipsY=n.hipsY*s+e.hipsY*t,i.lean=n.lean*s+e.lean*t,i.twist=n.twist*s+e.twist*t,i.headYaw=n.headYaw*s+e.headYaw*t,i.headPitch=n.headPitch*s+e.headPitch*t,i.squash=n.squash*s+e.squash*t,i.elbows=n.elbows*s+e.elbows*t;for(let r=0;r<4;r++){let o=n[tl[r]],a=e[tl[r]],l=i[tl[r]];l[0]=o[0]*s+a[0]*t,l[1]=o[1]*s+a[1]*t,l[2]=o[2]*s+a[2]*t}return i}var vE=.05,ys=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],sl=["handL","handR","footL","footR"],Zf=ys.length+sl.length*3,Io=[.35,-.2,-.8],Kf=[.75,-.85,-.15];function jt(n,e){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let t=new Qe(e),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new Tt(s,3)),n}var yE=new bt,ri=(n,e,t,i,s=0,r=0,o=0,a=1,l=1,c=1)=>n.applyMatrix4(yE.compose(new B(e,t,i),new In().setFromEuler(new Bn(s,r,o)),new B(a,l,c)));function Er(n=20,e=14){let t=new Jt(1,n,e);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),Ig(t)}function Jf(n,e,t){let i=Er(e,t),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function su(n,e,t){let i=e[0]-n[0],s=e[1]-n[1],r=e[2]-n[2],o=Math.hypot(i,s,r),a=new Kt(t,t,o,6,1),l=new In().setFromUnitVectors(new B(0,1,0),new B(i/o,s/o,r/o));return a.applyMatrix4(new bt().compose(new B((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),l,new B(1,1,1))),a}function ru(n,e){let t=Bt(n,!1);if(!t)throw new Error(`rig: could not merge the ${e} parts`);Kn(t),t.computeBoundingSphere();let i=new lt(t,It({color:"#ffffff",vertexColors:!0}));return i.name=e,xn(i),i}function jf(n,e,t,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*n.rx,s[1]=o(t)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function _E(n){let e=n.torso,t=n.colors,i=n.outfit,s=(h,d)=>{let u=new Oa(h.map(([p,f])=>new Ge(p,f)),22);return u.scale(1,1,e.depth),jt(u,d)},r=[s(e.pants,t.pants),s(e.shirt,t.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let d=e.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let p=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*p}return 0},l=(h,d)=>{let u=a(d);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=n.shoulderL[1]-n.hipHeight;for(let h of[-1,1]){let d=Er(14,10);ri(d,h*Math.abs(n.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),d.computeVertexNormals(),r.push(jt(d,t.shirt))}if(i.collar){let h=new vr(.1,.03,8,20);ri(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(jt(h,t.collar))}if(i.logo){let u=new Kt(.03,.03,.01,12);ri(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(jt(u,t.logo))}if(i.lanyard){let d=l(0,.15)+.012;for(let f of[-1,1]){let g=[f*.075,o-.03,.085],m=[f*.05,.34,l(.05,.34)+.014],x=[f*.014,.15+.05,l(.014,.15+.05)+.01];r.push(jt(su(g,m,.008),t.lanyard),jt(su(m,x,.008),t.lanyard))}let u=new xt(.075,.1,.014);ri(u,0,.15,d,-.05,0,.04);let p=new xt(.077,.026,.016);ri(p,0,.15+.028,d,-.05,0,.04),r.push(jt(u,t.badge),jt(p,t.badgeStripe))}return ru(r,"torso")}function bE(n){let e=n.head,t=n.hair,i=n.colors,s=n.outfit,r=[],o=Jf((a,l,c,h)=>jf(e,a,l,c,h),40,28);r.push(jt(o,i.skin),jt(ME(e,t),i.hair));for(let a of[-1,1]){let l=Er(12,8);ri(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(jt(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,c=Er(12,8);ri(c,0,l,SE(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(jt(c,i.skin))}if(s.headset){let a=e.ry+t.thickness+.03,l=new Dn;l.getPoint=(g,m=new B)=>m.set(Math.cos(Math.PI*g)*(e.rx+t.thickness+.012),Math.sin(Math.PI*g)*a,0);let c=new Ua(l,24,.014,6,!1);ri(c,0,0,-.03,-.12,0,0),r.push(jt(c,i.headset));for(let g of[-1,1]){let m=new Kt(.055,.06,.05,14);ri(m,g*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(jt(m,i.headset))}let h=n.face,d=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],p=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(jt(su(d,u,.009),i.headset),jt(su(u,p,.009),i.headset));let f=Er(10,8);ri(f,p[0],p[1],p[2],0,0,0,.022,.02,.022),f.computeVertexNormals(),r.push(jt(f,i.mic))}return ru(r,"headMesh")}var Hs=48,iu=12;function ME(n,e){let t=(u,p)=>.04+.17*p+.025*Math.max(p,0)*u,i=[0,0,0],s=Ih.smoothstep,r=[],o=(u,p,f)=>{let g=Math.sin(u)*Math.sin(p),m=Math.cos(u),x=Math.sin(u)*Math.cos(p);jf(n,g,m,x,i);let y=i[0]/(n.rx*n.rx),S=i[1]/(n.ry*n.ry),_=i[2]/(n.rz*n.rz),M=Math.hypot(y,S,_)||1;y/=M,S/=M,_/=M;let b=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(x+.3,0),v=e.quiff?e.lift*Math.max(x,0)*s(i[1],.12,.26)*(1-.5*g):0,w=e.back*Math.max(-x,0)*s(i[1],-.15,.1),C=f?-.01:e.thickness*(1-.55*Math.min(b,1))+v+w;r.push(i[0]+y*C,i[1]+S*C,i[2]+_*C)},a=u=>{let p=0,f=Math.PI;for(let g=0;g<40;g++){let m=(p+f)/2,x=Math.sin(m)*Math.sin(u),y=Math.sin(m)*Math.cos(u);jf(n,x,Math.cos(m),y,i),i[1]>t(x,y)?p=m:f=m}return p};o(0,0,!1);let l=[];for(let u=0;u<Hs;u++)l.push(a(u/Hs*Math.PI*2));for(let u=1;u<=iu+1;u++)for(let p=0;p<Hs;p++){let f=p/Hs*Math.PI*2,g=u>iu;o(g?l[p]+.03:l[p]*(u/iu),f,g)}let c=(u,p)=>1+(u-1)*Hs+p%Hs,h=[];for(let u=0;u<Hs;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=iu;u++)for(let p=0;p<Hs;p++){let f=c(u,p),g=c(u,p+1),m=c(u+1,p),x=c(u+1,p+1);h.push(f,m,x,f,x,g)}let d=new Lt;return d.setAttribute("position",new gt(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function SE(n,e,t){let i=1-Math.pow(Math.abs(e/n.rx),n.power)-Math.pow(Math.abs(t/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function ex(n,e){let t=n.hand.radius,i=n.colors,s=Er(14,10);ri(s,0,t*.75,0,0,0,0,t*.78,t*1.1,t*.95),s.computeVertexNormals();let r=Er(10,8);return ri(r,t*.3,t*.45,e*t*.75,e*-.6,0,.3,t*.34,t*.55,t*.34),r.computeVertexNormals(),ru([jt(s,i.skin),jt(r,i.skin)],e>0?"handL":"handR")}function tx(n,e){let t=n.shoe,i=n.colors,s=t.width/2,r=t.length/2,o=t.length*.18,a=.03,l=Jf((h,d,u,p)=>{p[0]=h*s*(u>0?1:.9),p[1]=Math.max(a*.8,t.height*.55+d*t.height*.6-Math.max(u,0)*t.height*.25),p[2]=o+u*r*.96},20,12),c=Jf((h,d,u,p)=>{p[0]=h*(s+.008),p[1]=Math.min(Math.max(a*.5+d*a,0),a),p[2]=o+u*(r+.008)},20,6);return ru([jt(l,i.shoe),jt(c,i.sole)],e>0?"footL":"footR")}function Wi(n){let e=new mt;e.name=n.name||"character";let t=new mt;t.name="body",e.add(t);let i=new mt;i.name="hips",i.rotation.order="YXZ";let s=_E(n);i.add(s);let r=new mt;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=bE(n);o.position.y=n.head.centerY,r.add(o);let a=Xg({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),t.add(i);let l=[ex(n,1),ex(n,-1)],c=[tx(n,1),tx(n,-1)],h=[0,1].map(()=>Gf({radius:n.armRadius,color:n.colors.skin})),d=[0,1].map(()=>Gf({radius:n.legRadius,color:n.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",t.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=Wh({rx:.45,rz:.38,opacity:.55});e.add(u);let p=Gi(),f=Gi(),g=[];for(let $=0;$<Zf;$++)g.push({x:0,v:0});let m=!1,x=vE,y=($,Y)=>Y<ys.length?$[ys[Y]]:$[sl[(Y-ys.length)/3|0]][(Y-ys.length)%3];function S($,Y,_e){Y<ys.length?$[ys[Y]]=_e:$[sl[(Y-ys.length)/3|0]][(Y-ys.length)%3]=_e}function _($,Y){Y>=0&&(x=Y),p.hipsY=$.hipsY,p.lean=$.lean,p.twist=$.twist,p.headYaw=$.headYaw,p.headPitch=$.headPitch,p.squash=$.squash,p.elbows=$.elbows>=0?$.elbows:0;for(let _e=0;_e<4;_e++){let J=$[sl[_e]],Z=p[sl[_e]];Z[0]=J[0],Z[1]=J[1],Z[2]=J[2]}if(!m){m=!0;for(let _e=0;_e<Zf;_e++)g[_e].x=y(p,_e),g[_e].v=0}}let M=[0,0,0],b=[0,0,0],v=[0,0,0],w=[0,0,0],C={mid:[0,0,0],end:[0,0,0],stretch:1},R=new B,L=new B,T=new B,I=new bt,E=n.armLength/2,N=n.legLength/2,k=n.ankleHeight;function V($,Y,_e){let J=Math.cos(f.twist),Z=Math.sin(f.twist);w[0]=$*J+_e*Z,w[1]=Y,w[2]=-$*Z+_e*J}function te(){let $=f.squash>.2?f.squash:.2,Y=1/Math.sqrt($);t.scale.set(Y,$,Y),i.position.set(0,f.hipsY,0),i.rotation.set(f.lean,f.twist,0),r.rotation.set(f.headPitch,f.headYaw,0);for(let _e=0;_e<2;_e++){let J=_e===0?1:-1;nl(n,f,_e===0?n.shoulderL:n.shoulderR,M);let Z=f.elbows<0?0:f.elbows>1?1:f.elbows;V(J*(Io[0]+(Kf[0]-Io[0])*Z),Io[1]+(Kf[1]-Io[1])*Z,Io[2]+(Kf[2]-Io[2])*Z),Hf(M,_e===0?f.handL:f.handR,E,E,w,C),h[_e].set(M,C.mid,C.end,C.stretch);let fe=l[_e];fe.position.set(C.end[0],C.end[1],C.end[2]),R.set(C.end[0]-C.mid[0],C.end[1]-C.mid[1],C.end[2]-C.mid[2]),R.lengthSq()<1e-10&&R.set(0,-1,0),R.normalize(),L.set(-J*Math.cos(f.twist),0,J*Math.sin(f.twist)),L.addScaledVector(R,-L.dot(R)),L.lengthSq()<1e-4&&L.set(0,0,1).addScaledVector(R,-R.z),L.normalize(),T.crossVectors(L,R),I.makeBasis(L,R,T),fe.quaternion.setFromRotationMatrix(I),nl(n,f,_e===0?n.hipL:n.hipR,b);let Be=_e===0?f.footL:f.footR;v[0]=Be[0],v[1]=Be[1]+k,v[2]=Be[2],V(J*.15,0,1),Hf(b,v,N,N,w,C),d[_e].set(b,C.mid,C.end,C.stretch);let W=c[_e];W.position.set(C.end[0],C.end[1]-k,C.end[2]),W.rotation.set(Math.min(Math.max(C.end[1]-k,0),.3)*1.1,f.twist*.3,0)}}function X($){if(m)for(let Y=0;Y<Zf;Y++)Nn(g[Y],y(p,Y),x,$),S(f,Y,g[Y].x);te(),a.update($)}il("idle",0,n,f),te();function Q(){e.traverse($=>{!$.isMesh||$.userData.isOutline||($.geometry.dispose(),$!==u&&$.material.dispose())}),e.removeFromParent()}return{root:e,spec:n,face:a,setPose:_,update:X,dispose:Q,shadow:u}}var wE=.15,TE=.03,nx=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function Xi(n){let e=n.spec,t="idle",i=0,s="idle",r=0,o=0,a=yt[t].ease,l=Gi(),c=Gi(),h=il(t,0,e);nu(h,h,1,l);function d(f,{fade:g,at:m}={}){Object.prototype.hasOwnProperty.call(yt,f)&&(f===t&&yt[f].loop||(f==="flinch"&&t!=="flinch"&&(s=t),nu(h,h,1,l),a=u(),r=g===void 0?f==="flinch"?TE:wE:Math.max(g,0),o=0,t=f,i=Number.isFinite(m)&&m>0?m:0,n.face.setTalking(f==="talk")))}function u(){let f=r>0?nx(o/r):1;return a+(yt[t].ease-a)*f}function p(f,g=f){let m=yt[t];if(i+=f,o+=g,m.loop)i>=m.duration&&(i-=m.duration*Math.floor(i/m.duration));else if(i>=m.duration)return d(s),p(0);il(t,i,e,c),nu(l,c,r>0?nx(o/r):1,h),n.setPose(h,u())}return{play:d,update:p,current:()=>t}}function ou(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*t)<<o}return"#"+r.toString(16).padStart(6,"0")}function ix(n){for(let e of Object.values(n))e&&typeof e=="object"&&ix(e);return Object.freeze(n)}var Qf=H.glorpPurple,Ht=ix({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:Qf,collar:ou(Qf,H.ink,.25),logo:H.gel,pants:ou(H.planet,H.ink,.3),skin:H.daleSkin,hair:H.daleHair,shoe:ou(H.ink,Qf,.3),sole:H.cream,lanyard:H.hotPink,badge:H.cream,badgeStripe:H.teal,headset:ou(H.ink,H.lilac,.25),mic:H.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var EE=1.5,AE=8,RE=-.2,CE=1.3,sx=.6,PE=Math.atan2(1.3,-4),IE=new B(-.45,.22,-1).applyEuler(new Bn(-.2,.68,0)).toArray(),rx=10,LE=.8,DE=.05,NE=["idle","run","aim","flinch","talk"],rl=Object.keys(wr),ox=(n,e,t)=>Math.min(t,Math.max(e,n));function OE(n,e,t,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(e)*t,i[1]=Math.sin(e)*t,i[2]=Math.cos(n)*Math.cos(e)*t,i}function UE(n,e,t=j.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[n[0]+r*t.right-i*t.back,n[1]+t.up,n[2]+o*t.right-s*t.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function ax({canvas:n,gl:e}){let t=zh(n,e),i=t.renderer,s=Bh(n),r=document.getElementById("cr-readout"),o=new ur,a=new gn(j.camera.fov,1,.1,100),l=Hh({planetDir:IE});o.add(l.mesh);let c=Hg();o.add(c.group);let h=[];function d(W,Te,Le){let Ae=Wi(Le===void 0?Ht:{...Ht,face:{...Ht.face,seed:Le}});Ae.root.position.set(W,0,Te),Ae.root.rotation.y=sx,o.add(Ae.root);let be=Xi(Ae),Ce={rig:Ae,anim:be};return h.push(Ce),Ce}let u=d(c.spawn[0],c.spawn[2]),p=[],f=!1,g=0,m=!0,x=!1,y=.685,S=.1,_=4.6,M=!1,b=new B(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),v=[0,0,0];function w(W){if(!(!NE.includes(W)&&!Object.prototype.hasOwnProperty.call(yt,W))){u.anim.play(W);for(let Te of p)Te.anim.play(f?"run":W)}}function C(W){let Te=rl.indexOf(W);if(!(Te<0)){g=Te;for(let Le of h)Le.rig.face.setExpression(W)}}function R(W){m=!!W,Nf(o,m)}function L(W){x=!!W,u.rig.root.rotation.y=x?PE:sx}function T(W){if(W=!!W,W!==f)if(f=W,W){let Te=c.spawn[2]+2.4;for(let Le=0;Le<rx;Le++){let Ae=c.spawn[0]+(Le-(rx-1)/2)*LE,be=d(Ae,Te,10+Le);be.anim.play("run"),be.rig.face.setExpression(rl[g]),p.push(be)}Nf(o,m)}else{for(let Te of p)Te.rig.dispose(),h.splice(h.indexOf(Te),1);p=[]}}function I(){let W=t.resize();a.aspect=W.aspect,a.updateProjectionMatrix()}I(),window.addEventListener("resize",I),n.addEventListener("mousedown",W=>{W.button===0&&(M=!0)}),window.addEventListener("mouseup",()=>{M=!1}),window.addEventListener("mousemove",W=>{M&&!s.isLocked()&&E(W.movementX||0,W.movementY||0,.006)}),n.addEventListener("wheel",W=>{_=ox(_*Math.exp(W.deltaY*.001),EE,AE)},{passive:!0});function E(W,Te,Le){y-=W*Le,S=ox(S+Te*Le,RE,CE)}window.addEventListener("keydown",W=>{W.repeat||(W.code==="Digit4"?w("flinch"):W.code==="Digit5"?w("talk"):W.code==="KeyO"?R(!m):W.code==="KeyP"?T(!f):W.code==="KeyL"?s.requestLock():W.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let N=0,k=0,V=0,te=0,X=0,Q=0,$=null,Y=0;window.__cr.stats=()=>({fps:N,ms:k,calls:X,tris:Q,scale:t.scale(),characters:h.length}),window.__cr.anim=w,window.__cr.orbit=(W,Te,Le)=>{y=W,S=Te,Le&&(_=Le)},window.__cr.expression=C,window.__cr.perf=T,window.__cr.gameCam=L,window.__cr.outlines=R;function _e(W){W.pressed.weapon1&&w("idle"),W.pressed.weapon2&&w("run"),W.pressed.weapon3&&w("aim"),W.pressed.interact&&C(rl[(g+1)%rl.length]),W.pressed.grenade&&L(!x)}function J(){if(x){let W=UE([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(W.pos),a.lookAt(W.look[0],W.look[1],W.look[2])}else OE(y,S,_,v),a.position.set(b.x+v[0],b.y+v[1],b.z+v[2]),a.lookAt(b)}let Z=W=>W.toFixed(2);function fe(){let W=$?Object.keys($.held).filter(Ae=>$.held[Ae]).join(" "):"",Te=s.padStatus(),Le=$&&Te!=="none"&&Te!=="unrecognised controller"?`Gamepad: ${Te}
  move ${Z($.moveX)}, ${Z($.moveY)}  look ${Z($.lookX)}, ${Z($.lookY)}
  held: ${W||"nothing"}`:`Gamepad: ${Te}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${rl[g]}   camera: ${x?"game":"orbit"}   outlines: ${m?"on":"off"}`,`${Math.round(N)} fps   ${Z(k)} ms   scale ${t.scale()}`,`${X} draw calls   ${Q} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${$?Math.round($.lookDX):0}, ${$?Math.round($.lookDY):0}`,Le].join(`
`)}let Be=kh({step(){},render(W,Te){let Le=Math.min(Te,DE);$=s.poll(),_e($),s.isLocked()&&!x&&E($.lookDX,$.lookDY,.003),x||E($.lookX*600*Le,$.lookY*600*Le,.004),l.update(performance.now()/1e3),c.update(Le);for(let Ae of h)Ae.anim.update(Le),Ae.rig.update(Le);J(),i.render(o,a),X=i.info.render.calls,Q=i.info.render.triangles,V++,te+=Te,te>=1&&(N=V/te,k=te/V*1e3,V=0,te=0),Y+=Te,Y>=.1&&(Y=0,fe()),t.frameDone(Te*1e3)}});J(),i.render(o,a),X=i.info.render.calls,Q=i.info.render.triangles,fe(),Be.start()}function au(){let n=!1,e=0,t=.18;return{update(i,s,r,o){return t=o,n?(e+=r,i?!1:(n=!1,e<=o)):s?i?(n=!0,e=r,!1):!0:!1},holding(){return n&&e>t},reset(){n=!1,e=0}}}function rt(n,e,t="wall",i=void 0){let s={min:Object.freeze([...n]),max:Object.freeze([...e]),kind:t};return i&&(s.prop=i),Object.freeze(s)}var ep=1e-9;function Gn(n,e,t,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=n.filter(m=>m.max[1]>o&&m.min[1]<a),c=Math.hypot(t[0],t[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=t[0]/h,u=t[2]/h,p=!1,f=0,g=0;for(let m=0;m<h;m++){let x=r[0],y=r[2];r[0]+=d,r[2]+=u;let S=!1;for(let _=0;_<5;_++){let M=null,b=ep;for(let v of l){let w=Math.max(v.min[0],Math.min(r[0],v.max[0])),C=Math.max(v.min[2],Math.min(r[2],v.max[2])),R=r[0]-w,L=r[2]-C,T=Math.hypot(R,L),I,E,N;if(T>ep){if(T>=i)continue;I=i-T,E=R/T,N=L/T}else{let k=[[r[0]-v.min[0],-1,0],[v.max[0]-r[0],1,0],[r[2]-v.min[2],0,-1],[v.max[2]-r[2],0,1]],V=k[0];for(let te of k)te[0]<V[0]&&(V=te);I=V[0]+i,E=V[1],N=V[2]}I>b&&(b=I,M=[E,N])}if(!M){S=!0;break}if(_===4)break;r[0]+=M[0]*b,r[2]+=M[1]*b,p=!0,f=M[0],g=M[1]}S||(r[0]=x,r[2]=y,p=!0)}return p||(r[0]=e[0]+t[0],r[2]=e[2]+t[2]),{pos:r,hit:p,normal:[f,0,g]}}function oi(n,e,t,i){let s=1,r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];for(let o of n){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<ep)(e[h]<d||e[h]>u)&&(c=!1);else{let p=(d-e[h])/r[h],f=(u-e[h])/r[h];if(p>f){let g=p;p=f,f=g}p>a&&(a=p),f<l&&(l=f),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function Lo(n,e,t=0){for(let i of n)if(e[0]>=i.min[0]-t&&e[0]<=i.max[0]+t&&e[1]>=i.min[1]-t&&e[1]<=i.max[1]+t&&e[2]>=i.min[2]-t&&e[2]<=i.max[2]+t)return!0;return!1}var tp=["fov","right","up","back"],lu=Math.PI*2,FE=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),hx=n=>n!=="normal"&&FE.includes(n);function lx(n,e,t={}){let i=hx(e)&&n[e]&&typeof n[e]=="object"?n[e]:null;for(let s of tp)t[s]=i&&i[s]!==void 0?i[s]:n[s];return t}function cx(n,e){let t=hx(e)?n[e]:null;return t&&typeof t=="object"&&t.shakeWeight>0?t.shakeWeight:0}function ux(n,e,t,i=0){return e?n>=t:n>=t+i}function dx({tuning:n=j.camera,look:e=j.look}={}){let t={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],c={x:0,v:0},h=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],d={},u=[0,0,0],p=[0,0,0],f=[0,0,0],g=[0,0,0],m=[0,0,1],x={pos:g,dir:m,fov:70},y={on:!1,t:0,p:[0,0,0]},S=1,_=0,M=!1;return{yaw:0,pitch:0,look(v,w,C,R,L,T,I=1){(v||w||C||R)&&(y.on=!1);let E=T?e.aimScale:1,N=e.invertY?-1:1;this.yaw-=v*e.mouse*E,this.pitch-=w*e.mouse*E*N;let k=e.pad,V=E*I;C&&(this.yaw-=Math.sign(C)*Math.abs(C)**k.expo*k.yawRate*V*L),R&&(this.pitch-=Math.sign(R)*Math.abs(R)**k.expo*k.pitchRate*V*L*N),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(v=1){let w=n.bump;if(!w||!(w.amount>0)||!(v>0))return;s.x=Math.min(s.x+w.amount*v,2*w.amount);let C=n.slamShake;C&&C.amount>0&&C.time>0&&(o.t=C.time,o.amp=C.amount*v)},dip(v){Number.isFinite(v)&&v>0&&(r.x=Math.min(r.x+v,.1))},kick(v,w=0){let C=n.recoil?n.recoil.max:0;if(!(C>0))return;let R=(L,T)=>Math.max(-C,Math.min(C,L+(Number.isFinite(T)?T:0)));a.p.x=Math.max(0,R(a.p.x,v)),a.y.x=R(a.y.x,w)},hold(v){if(!(n.holdTime>0)){y.on=!1;return}y.on=!0,y.t=n.holdTime,y.p[0]=v[0],y.p[1]=v[1],y.p[2]=v[2]},holding(){return y.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(v,w,C="normal",R=1){w!==void 0&&(this.yaw=w),lx(n,C,d);for(let L of tp)t[L].x=d[L],t[L].v=0;i.x=R,i.v=0,c.x=cx(n,C),c.v=0;for(let L=0;L<3;L++)h[L].x=v[L],h[L].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,S=1,M=!0,y.on=!1},update(v,{target:w,mode:C="normal",side:R=1},L){M||this.snap(w,this.yaw,C,R),v>0||(v=0),_+=v,lx(n,C,d);for(let $ of tp)Nn(t[$],d[$],n.blendHalfLife,v);Nn(c,cx(n,C),n.blendHalfLife,v),Nn(i,R,n.sideHalfLife,v);for(let $=0;$<3;$++)Nn(h[$],w[$],n.followHalfLife,v);Nn(s,0,n.bump?n.bump.halfLife:0,v),Nn(r,0,n.bump?n.bump.halfLife:0,v);let T=n.recoil?n.recoil.halfLife:0;Nn(a.p,0,T,v),Nn(a.y,0,T,v);let I=Math.PI/180,E=n.probeRadius,N=t.back.x,k=1,V=0,te=$=>{let Y=this.yaw+a.y.x*I,_e=Math.max(n.pitchMin,Math.min(n.pitchMax,this.pitch+a.p.x*I));V=Math.sin(Y),k=Math.cos(Y);let J=Math.sin(_e),Z=Math.cos(_e);u[0]=h[0].x,u[1]=h[1].x+t.up.x,u[2]=h[2].x,l[0]=w[0],l[1]=w[1]+t.up.x,l[2]=w[2];let fe=oi(L,l,u,E);if(fe<1)for(let Ce=0;Ce<3;Ce++)u[Ce]=l[Ce]+(u[Ce]-l[Ce])*fe;let Be=t.right.x*i.x;p[0]=u[0]-k*Be,p[1]=u[1],p[2]=u[2]+V*Be;let W=oi(L,u,p,E);for(let Ce=0;Ce<3;Ce++)p[Ce]=u[Ce]+(p[Ce]-u[Ce])*W;m[0]=V*Z,m[1]=J,m[2]=k*Z;for(let Ce=0;Ce<3;Ce++)f[Ce]=p[Ce]-m[Ce]*N;let Te=oi(L,p,f,E),Le=N>1e-6?Math.max(n.minBack/N,Te):1;Le>1&&(Le=1),Le<S?S=Le:$&&(S+=(Le-S)*(n.wallReturnHalfLife>0?1-Math.pow(2,-v/n.wallReturnHalfLife):1));let Ae=N*S-s.x;for(let Ce=0;Ce<3;Ce++)g[Ce]=p[Ce]-m[Ce]*Ae;let be=oi(L,u,g,E);if(be<1)for(let Ce=0;Ce<3;Ce++)g[Ce]=u[Ce]+(g[Ce]-u[Ce])*be};if(te(!0),y.on)if(y.t-=v,y.t<=0||C!=="aim")y.on=!1;else for(let $=0;$<3;$++){let Y=y.p[0]-g[0],_e=y.p[1]-g[1],J=y.p[2]-g[2],Z=Math.hypot(Y,_e,J);if(Z<.5)break;this.yaw=Math.atan2(Y,J)-a.y.x*I,this.pitch=Math.max(n.pitchMin,Math.min(n.pitchMax,Math.asin(_e/Z)-a.p.x*I)),te(!1)}let X=n.shake;if(X&&X.amp&&c.x>0){let $=X.amp*(c.x>1?1:c.x),Y=Math.sin(lu*X.hz*_)*$,_e=Math.sin(lu*X.hz*1.3*_+1)*$,J=-k,Z=V;g[0]+=J*Y-Z*m[1]*_e,g[1]+=(Z*m[0]-J*m[2])*_e,g[2]+=Z*Y+J*m[1]*_e}g[1]-=r.x;let Q=n.slamShake;if(o.t>0&&Q&&Q.time>0){o.t=Math.max(0,o.t-v);let $=o.t/Q.time,Y=o.amp*$*$,_e=Math.sin(lu*Q.hz*o.t)*Y,J=Math.sin(lu*Q.hz*1.27*o.t+2)*Y,Z=-k,fe=V;g[0]+=Z*_e-fe*m[1]*J,g[1]+=(fe*m[0]-Z*m[2])*J,g[2]+=fe*_e+Z*m[1]*J}return x.fov=t.fov.x,x}}}var fn=[H.hotPink,H.playerOrange,H.glorpPurple,H.tealLight,H.lilac];function kE(n){if(n.prop)return n.prop;let e=n.max[0]-n.min[0],t=n.max[2]-n.min[2],i=n.max[1]-n.min[1],s=Math.max(e,t),r=Math.min(e,t);return n.kind==="pillar"?"pillar":n.kind==="low"?r<.7&&s>=1.8?"planter":"counter":n.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function BE(){let n=[],e=(t,i)=>{let s=new Qe(i),r=t.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return t.setAttribute("color",new Tt(o,3)),t};return{list:n,box(t,i,s){let r=new xt(i[0]-t[0],i[1]-t[1],i[2]-t[2]);r.translate((t[0]+i[0])/2,(t[1]+i[1])/2,(t[2]+i[2])/2),n.push(e(r,s))},cyl(t,i,s,r,o,a,l="y"){let c=new Kt(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(t,i,s),n.push(e(c,a))},ball(t,i,s,r,o){let a=new Jt(r,7,5);a.translate(t,i,s),n.push(e(a,o))}}}var wi=(n,e,t=n.min[1],i=n.max[1])=>[[n.min[0]-e,t,n.min[2]-e],[n.max[0]+e,i,n.max[2]+e]];function zE(n,e,t,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],d=.015,u=.06;o?(n.box([a+s,t,l+d],[c-s,i,l+u],r),n.box([a+s,t,h-u],[c-s,i,h-d],r)):(n.box([a+d,t,l+s],[a+u,i,h-s],r),n.box([c-u,t,l+s],[c-d,i,h-s],r))}function Ti(n,e){let t=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=t>=i,r=s?t:i,o=s?i:t,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,d,u,p,f,g){let m=a(c,d),x=a(h,u),y=l(c,d),S=l(h,u);n.box([Math.min(m,x),p,Math.min(y,S)],[Math.max(m,x),f,Math.max(y,S)],g)},cyl(c,h,d,u,p,f,g="y"){let m=g==="y"?"y":g==="u"?s?"x":"z":s?"z":"x";n.cyl(a(c,h),d,l(c,h),u,p,f,m)}}}function HE(n,e){let t=Ti(n,e),{len:i,dep:s}=t,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;t.slab(.03,i-.03,.04,s-.04,0,.5,H.shadowTint);for(let l=0;l<=o;l++){let c=l*a;t.slab(c,c+r,.06,s-.06,0,e.max[1],H.lilac),t.slab(c+.03,c+r-.03,0,.07,.8,.94,H.hotPink),t.slab(c+.03,c+r-.03,s-.07,s,.8,.94,H.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;t.slab(c,h,s/2-.03,s/2+.03,.5,.94,H.tealLight),t.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,H.cream)}}function GE(n,e,t){let i=Ti(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,H.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,H.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,H.cream),i.slab(.15,s-.15,0,.06,.25,.6,H.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,H.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let d=(h+.5+c%2*.25)/l*s,u=a===1?r/2:r*(.3+c*.4);i.cyl(d,u,(.82+o-.02)/2,.14,o-.84,fn[(h+c*2+t)%fn.length]),i.cyl(d,u,o-.01,.15,.02,H.cream)}}function VE(n,e,t){t%3===1?GE(n,e,t):HE(n,e)}function WE(n,e,t){let i=Ti(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,H.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,H.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,H.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,H.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?H.ink:fn[(l+t)%fn.length])}function XE(n,e,t){let i=Ti(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,H.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,H.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,H.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let d=0;d<a;d++)for(let u=0;u<l;u++){let p=(u+.5)/l*s,f=a===1?r/2:r*(.3+d*.4),g=fn[(u+d+t)%fn.length];i.cyl(p,f,h,.015,.14,H.cream,"u"),i.cyl(p-.07,f,h,c,.06,g,"u"),i.cyl(p+.07,f,h,c,.06,g,"u")}}function YE(n,e){let t=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=t?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];n.box(...wi({min:e.min,max:o},-.03,e.min[1],o[1]-.1),H.teal),n.box(...wi({min:e.min,max:o},0,o[1]-.1,o[1]),H.cream),zE(n,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,H.hotPink,t);let a=(f,g,m,x,y)=>n.box(t?[e.min[0]+f,m,e.min[2]+.12]:[e.min[0]+.12,m,e.min[2]+f],t?[e.min[0]+g,x,e.max[2]-.12]:[e.max[0]-.12,x,e.min[2]+g],y);a(.3,.7,o[1],o[1]+.06,H.cream),a(.32,.68,o[1]+.06,o[1]+.12,H.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,H.cream);let l=t?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=f=>t?e.min[0]+f:e.min[2]+f;t?n.cyl(c(r-.5),o[1]+.14,l,.06,.28,H.gel):n.cyl(l,o[1]+.14,c(r-.5),.06,.28,H.gel);let h=.14,d=t?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[f,g]of d)t?n.box([f,e.min[1],e.min[2]],[g,i,e.max[2]],H.lilac):n.box([e.min[0],e.min[1],f],[e.max[0],i,g],H.lilac);let u=d[0][1],p=d[1][0];t?(n.box([u,i-.12,e.min[2]],[p,i,e.max[2]],H.lilac),n.box([u,o[1],e.min[2]+.2],[p,i-.12,e.max[2]-.2],H.tealLight)):(n.box([e.min[0],i-.12,u],[e.max[0],i,p],H.lilac),n.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,p],H.tealLight))}function qE(n,e,t){let i=Ti(n,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,H.shadowTint);for(let[h,d]of[[0,a],[s-a,s]])for(let[u,p]of[[0,a],[r-a,r]])i.slab(h,d,u,p,.12,o,H.lilac);i.slab(0,s,0,r,o-.1,o,H.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,H.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,H.cream),i.cyl(s/2,c,l,.025,s+.1,H.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?H.ink:fn[t%fn.length],"u")}function $E(n,e,t){let i=Ti(n,e),{len:s,dep:r}=i,o=e.max[1],a=1.1;i.slab(.06,s-.06,.04,r-.04,0,.08,H.shadowTint),i.slab(.04,s-.04,.02,r-.02,.08,a-.06,H.hotPink),i.slab(.15,s-.15,0,.05,.3,.7,H.cream),i.slab(.15,s-.15,r-.05,r,.3,.7,H.cream),i.slab(-.04,s+.04,-.04,r+.04,a-.06,a,H.cream),i.slab(0,s,r/2-.04,r/2+.04,a,o,H.lilac),i.slab(0,s,r/2-.07,r/2+.07,o-.1,o,H.shadowTint);let l=Math.max(2,Math.floor(s/.9));for(let c=0;c<l;c++)for(let h of[r*.2,r*.8]){let d=(c+.5)/l*s,u=fn[(c+t+(h>r/2?2:0))%fn.length],p=Math.min(o-.14,a+.55);i.cyl(d,h,a+.04,.13,.08,H.ink),i.cyl(d,h,(a+.08+p)/2,.11,p-a-.08,u),i.cyl(d,h,p+.03,.12,.06,H.cream)}}function ZE(n,e,t){let i=Ti(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.06,s-.06,.05,r-.05,0,.1,H.shadowTint),i.slab(.03,s-.03,.03,r-.03,.1,o-.1,H.teal),i.slab(.2,s-.2,0,.06,.25,.65,H.hotPink),i.slab(.2,s-.2,r-.06,r,.25,.65,H.hotPink),i.slab(-.04,s+.04,-.04,r+.04,o-.1,o-.04,H.cream);let a=Math.max(2,Math.floor(s/.6));for(let l=0;l<a;l++){let c=(l+.5)/a*s;i.cyl(c,r/2,o-.035,.2,.07,H.ink),i.cyl(c,r/2,o-.02,.17,.04,fn[(l+t)%fn.length])}}function KE(n,e,t){let i=Ti(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.05,s-.05,.05,r-.05,0,.1,H.shadowTint),i.slab(.08,s-.08,.08,r-.08,.1,o-.08,H.cream),i.slab(.08,s-.08,.04,.09,.4,.55,fn[t%fn.length]),i.slab(.08,s-.08,r-.09,r-.04,.4,.55,fn[t%fn.length]),i.slab(-.04,s+.04,-.04,r+.04,o-.08,o,H.lilac)}function JE(n,e,t){n.box(...wi(e,0,e.min[1],e.max[1]),H.cream),n.box(...wi(e,.05,e.min[1],e.min[1]+.25),H.shadowTint),n.box(...wi(e,.04,e.min[1]+1.1,e.min[1]+2.9),H.ink),[1.4,1.75,2.1,2.45].forEach((i,s)=>n.box(...wi(e,.055,e.min[1]+i,e.min[1]+i+.1),fn[(s+t)%fn.length])),n.box(...wi(e,.05,e.max[1]-.25,e.max[1]),H.shadowTint)}function jE(n,e){let t=Ti(n,e),{len:i,dep:s}=t,r=e.max[1];t.slab(.05,.2,.05,s-.05,0,r-.12,H.lilac),t.slab(i-.2,i-.05,.05,s-.05,0,r-.12,H.lilac),t.slab(0,i,0,s,r-.12,r,H.teal);for(let o=.3;o<i-.2;o+=.3)t.slab(o,o+.03,0,s,r-.125,r-.1,H.shadowTint)}function QE(n,e,t){let i=Ti(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.02,s-.02,.02,r-.02,0,o*.5,H.playerOrange),i.slab(0,s,0,r,o*.5-.06,o*.5,H.shadowTint);let a=Math.max(2,Math.floor(s/.5)),l=Math.min(r/2-.02,(o-o*.5)/2-.01);for(let c=0;c<a;c++)i.cyl((c+.5)/a*s,r/2,o*.5+l+.005,l,l*2,c%2?H.gel:H.teal)}function eA(n,e){let t=Ti(n,e),{len:i,dep:s}=t,r=e.max[1];t.slab(.04,i-.04,.04,s-.04,0,.12,H.shadowTint),t.slab(.02,i-.02,.02,s-.02,.12,r-.1,H.hotPink),t.slab(.1,i-.1,0,.05,.3,.5,H.cream),t.slab(.1,i-.1,s-.05,s,.3,.5,H.cream),t.slab(0,i,0,s,r-.1,r,H.playerOrange)}function tA(n,e){n.box(...wi(e,0,e.min[1],e.max[1]),H.cream),n.box(...wi(e,.05,e.min[1],e.min[1]+.25),H.shadowTint),n.box(...wi(e,.03,e.min[1]+1,e.min[1]+1.12),H.hotPink),n.box(...wi(e,.05,e.max[1]-.25,e.max[1]),H.shadowTint)}function nA(n){if(!n)return[];let[e,,t]=n.min,[i,,s]=n.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,t],max:[h+c/2,l,t+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=t+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function fx(n,e=null){let t=BE();for(let s of nA(e))t.box(s.min,s.max,H.tealLight);let i=0;return n.forEach((s,r)=>{let o=kE(s);o==="counter"?VE(t,s,i++):o==="planter"?(r%2?XE:WE)(t,s,r):o==="desk"?YE(t,s):o==="shelf"?qE(t,s,r):o==="pillar"?tA(t,s):o==="bar"?$E(t,s,r):o==="bowl"?ZE(t,s,r):o==="booth"?KE(t,s,r):o==="menu"?JE(t,s,r):o==="seat"?jE(t,s):o==="plant"?QE(t,s,r):o==="velvet"?eA(t,s):t.box(s.min,s.max,H.lilac)}),Bt(t.list,!1)}var Gs=2.7,cu=.22,hu=.16;function ol(n,e,t){let i=new xt(e[0]-n[0],e[1]-n[1],e[2]-n[2]);i.translate((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),i.deleteAttribute("uv");let s=new Qe(t),r=i.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return i.setAttribute("color",new Tt(o,3)),i}function px(n){let e=n.w,t=e/2,i=new mt;i.name="exit-gate",i.position.set(n.pos[0],n.pos[1],n.pos[2]),i.rotation.y=n.yaw;let s=new lt(Bt([ol([-t-cu,0,0],[-t,Gs+.25,hu],H.lilac),ol([t,0,0],[t+cu,Gs+.25,hu],H.lilac),ol([-t-cu,Gs,0],[t+cu,Gs+.25,hu],H.hotPink),ol([-t,0,.005],[t,Gs,.04],H.gel)].map(u=>u.toNonIndexed()),!1),It({vertexColors:!0,rim:.1}));s.name="gate-frame",i.add(s);let r=u=>{let p=new lt(ol(u<0?[0,0,.04]:[-t,0,.04],u<0?[t,Gs,.1]:[0,Gs,.1],H.teal).toNonIndexed(),It({vertexColors:!0,rim:.1}));return p.position.x=u*t,p.name=u<0?"gate-door-west":"gate-door-east",i.add(p),p},o=r(-1),a=r(1),l=ks({text:"GO \u2192",w:2.2,h:.8,bg:H.glorpPurple,fg:H.gel,seed:5});l.position.set(0,Gs+.85,hu+.1),i.add(l);let c=0,h=0,d=()=>{let u=Math.max(.06,1-c);o.scale.x=u,a.scale.x=u,l.visible=c>.5};return d(),{group:i,setOpen(u,p=!1){h=u?1:0,p&&(c=h,d())},update(u){if(c===h||!(u>0))return;let p=1/Math.max(j.run.gateOpenTime,.001);c=c<h?Math.min(h,c+u*p):Math.max(h,c-u*p),d()},openness:()=>c}}var mx=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(mx)),n),Vs=.3,iA=[rt([-12,-1,-12],[12,0,12],"floor"),rt([-12-Vs,0,-12-Vs],[12+Vs,4,-12]),rt([-12-Vs,0,12],[12+Vs,4,12+Vs]),rt([-12-Vs,0,-12],[-12,4,12]),rt([12,0,-12],[12+Vs,4,12]),rt([5,0,-9],[5.3,4,-3]),rt([6.7,0,-9],[7,4,-3]),rt([-11,0,-7.3],[-6,3,-7]),rt([-6.3,0,-11],[-6,3,-7]),rt([-4,0,-3],[-2,1,-2.4],"low"),rt([3,0,3],[3.6,1,5],"low"),rt([-5,0,3],[-3.8,2.2,3.6],"tall"),rt([1,0,-6],[1.6,2.2,-4],"tall"),rt([-9.4,0,.6],[-8.6,4,1.4],"pillar"),rt([8.6,0,3.6],[9.4,4,4.4],"pillar"),rt([-9,0,6.5],[-6,1,7.1],"low"),rt([-4,0,6.5],[-1,1,7.1],"low"),rt([6,0,6],[10,2.2,6.6],"tall"),rt([-12,0,-1],[-10,1,-.4],"low")],gx=[];for(let n=0;n<=12;n++)gx.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var du=mx({boxes:iA,marks:gx,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function np(n){let e=n.map(t=>{let i=new xt(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);return i.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2),i});return Bt(e,!1)}var Ws=.03,Xs=.3,Ys=.12,uu=2;function sA(n=du){let e=n.boxes.find(c=>c.kind==="floor");if(!e)return[];let[t,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([t,0,i],[s,Xs,i+Ws]),l([t,0,r-Ws],[s,Xs,r]),l([t,0,i],[t+Ws,Xs,r]),l([s-Ws,0,i],[s,Xs,r]);for(let c=t+uu;c<s-.5;c+=uu)l([c-Ys/2,Xs,i],[c+Ys/2,o,i+Ws]),l([c-Ys/2,Xs,r-Ws],[c+Ys/2,o,r]);for(let c=i+uu;c<r-.5;c+=uu)l([t,Xs,c-Ys/2],[t+Ws,o,c+Ys/2]),l([s-Ws,Xs,c-Ys/2],[s,o,c+Ys/2]);return a}function xx(n=du){let e=new mt,t=n.boxes.find(o=>o.kind==="floor");e.add(Vh({w:t.max[0]-t.min[0],d:t.max[2]-t.min[2]}));let i=n.boxes.filter(o=>o.kind!=="floor");if(i.length){let o=new lt(Kn(fx(i,t)),It({vertexColors:!0}));o.name="grey-props",xn(o),e.add(o)}let s=sA(n);if(s.length){let o=new lt(np(s),It({color:H.shadowTint}));o.name="grey-wall-trim",e.add(o)}if(n.marks.length){let o=new lt(np(n.marks),It({color:H.hotPink}));o.name="grey-marks",e.add(o)}if(n.ammoCrates&&n.ammoCrates.length){let o=[];for(let l of n.ammoCrates)o.push({min:[l.pos[0]-.35,0,l.pos[2]-.25],max:[l.pos[0]+.35,.4,l.pos[2]+.25]}),o.push({min:[l.pos[0]-.39,.4,l.pos[2]-.29],max:[l.pos[0]+.39,.5,l.pos[2]+.29]});let a=new lt(Kn(np(o)),It({color:H.playerOrange}));a.name="grey-crate",xn(a),e.add(a)}if(n.landmark){let o=n.landmark,a=ks({text:o.text,w:o.w,h:o.h});a.position.set(o.pos[0],o.pos[1],o.pos[2]),a.rotation.y=Math.PI,e.add(a)}for(let o of n.signs||[]){let a=ks({text:o.text,w:o.w,h:o.h,bg:o.bg,seed:4});a.position.set(o.pos[0],o.pos[1],o.pos[2]),a.rotation.y=o.yaw,e.add(a)}let r=n.exit?px(n.exit):null;return r&&e.add(r.group),{group:e,boxes:n.boxes,gate:r,setGateOpen(o,a=!1){r&&r.setOpen(o,a)},update(o){r&&r.update(o)}}}var vx=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(vx)),n),qs=.3,Yi=7,Ei=15,rA=[rt([-Yi,-1,-Ei],[Yi,0,Ei],"floor"),rt([-Yi-qs,0,-Ei-qs],[Yi+qs,4,-Ei]),rt([-Yi-qs,0,Ei],[Yi+qs,4,Ei+qs]),rt([-Yi-qs,0,-Ei],[-Yi,4,Ei]),rt([Yi,0,-Ei],[Yi+qs,4,Ei]),rt([-5,0,-9.5],[-3,1,-8.5],"low"),rt([2,0,-9.5],[4,1,-8.5],"low"),rt([-.4,0,-7.4],[.4,4,-6.6],"pillar"),rt([-1,0,-3.5],[1,1,-2.5],"low"),rt([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),rt([3.5,0,-1.5],[5.5,1,-.5],"low"),rt([-4.5,0,3.5],[-2.5,1,4.5],"low"),rt([2.5,0,3.5],[4.5,1,4.5],"low"),rt([-.4,0,6.6],[.4,4,7.4],"pillar"),rt([-4.5,0,9],[-2.5,1,10],"low"),rt([2.5,0,9],[4.5,1,10],"low"),rt([-1.5,0,12],[1.5,2.2,12.6],"tall")],oA=[-12,-6,.5,7,11],aA=[-6,-2,2,6],fu=[];for(let n of oA)for(let e of aA)fu.push([e,n]);fu.push([0,-5],[0,0],[0,9.5]);fu.push([-3.5,13.5],[3.5,13.5]);var yx=vx({name:"kioskRow",boxes:rA,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:fu,ammoCrates:[{pos:[5.5,0,-12.5]}],exit:{pos:[-4.5,0,Ei],yaw:Math.PI,w:3},landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});function lA(n,e,t){let i=Math.max(n.min[0]-e,0,e-n.max[0]),s=Math.max(n.min[2]-t,0,t-n.max[2]);return Math.hypot(i,s)}function pu(n,{cols:e,rows:t,clearance:i=.8}){let s=n.filter(o=>o.kind!=="floor"),r=[];for(let o of t)for(let a of e)s.every(l=>lA(l,a,o)>=i)&&r.push([a,o]);return r}var _x=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(_x)),n),$s=.3,Jn=20,ai=18,Yt=(n,e,t,i)=>rt(n,e,t,i),bx=[rt([-Jn,-1,-ai],[Jn,0,ai],"floor"),rt([-Jn-$s,0,-ai-$s],[Jn+$s,4,-ai]),rt([-Jn-$s,0,ai],[Jn+$s,4,ai+$s]),rt([-Jn-$s,0,-ai],[-Jn,4,ai]),rt([Jn,0,-ai],[Jn+$s,4,ai]),Yt([-7,0,-.35],[7,2.2,.35],"tall","bar"),Yt([-3,0,14.2],[3,2.2,14.9],"tall","bar"),Yt([-9,0,9.5],[-5,1,10.5],"low","bowl"),Yt([5,0,9.5],[9,1,10.5],"low","bowl"),Yt([-1,0,10.8],[1,1,11.8],"low","booth"),Yt([-14.6,0,-5],[-13,1,-4],"low","booth"),Yt([13,0,-5],[14.6,1,-4],"low","booth"),Yt([-14.6,0,4],[-13,1,5],"low","booth"),Yt([13,0,4],[14.6,1,5],"low","booth"),Yt([-3.6,0,-6.5],[-2,1,-5.5],"low","booth"),Yt([2,0,-6.5],[3.6,1,-5.5],"low","booth"),Yt([-3.6,0,4.5],[-2,1,5.5],"low","booth"),Yt([2,0,4.5],[3.6,1,5.5],"low","booth"),Yt([-9,0,-13],[-6,1,-12.4],"low","plant"),Yt([6,0,-13],[9,1,-12.4],"low","plant"),Yt([-17,0,10],[-14,1,10.6],"low","plant"),Yt([10.5,0,13.2],[13.5,1,13.8],"low","plant"),Yt([-18.5,0,-10],[-16.5,1,-9.4],"low","seat"),Yt([16.5,0,-10],[18.5,1,-9.4],"low","seat"),Yt([-12.4,0,-9.4],[-11.6,4,-8.6],"pillar","menu"),Yt([11.6,0,-9.4],[12.4,4,-8.6],"pillar","menu"),Yt([-12.4,0,8.6],[-11.6,4,9.4],"pillar","menu"),Yt([11.6,0,8.6],[12.4,4,9.4],"pillar","menu")],Mx=pu(bx,{cols:[-17.5,-12.5,-7.5,-2.5,2.5,7.5,12.5,17.5],rows:[-15.5,-10.5,-7.5,-2.5,2.5,7.5,12,16.5],clearance:.9});Mx.push([0,-3.5],[0,3.5],[0,8],[-4,15.8],[0,15.8],[4,15.8],[14.5,12],[16,16.5],[-12,16],[-9.5,12],[9.5,12]);var Sx=_x({name:"smoothieBar",boxes:bx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-16.5],yaw:0},trigger:{z:-14},features:{start:{pos:[0,0,-16.5],yaw:0},startCover:{pos:[-7.5,0,-13.4],yaw:0},mid:{pos:[0,0,-3.5],yaw:0},open:{pos:[0,0,-9],yaw:0},flankWest:{pos:[-16,0,0],yaw:0},flankEast:{pos:[16,0,0],yaw:0}},associates:[{id:"a1",pos:[-8.3,0,10.88]},{id:"a2",pos:[-5.7,0,10.88]},{id:"b1",pos:[5.7,0,10.88]},{id:"b2",pos:[8.3,0,10.88]},{id:"c1",pos:[0,0,12.18]}],pads:[{id:"sauna1",pos:[14.5,0,16.4],spawns:"associate",openKey:"openAfterKillsSmoothie"}],tobble:{pos:[1.6,0,-16.5],yaw:0},waypoints:Mx,ammoCrates:[{pos:[6.5,0,-16.8]},{pos:[-16.5,0,14.5]}],exit:{pos:[-12,0,ai],yaw:Math.PI,w:3.4},landmark:{pos:[9,3.2,ai-.3],text:"SMOOTHIE BAR",w:7,h:1.4},signs:[{pos:[0,2.9,14.95],yaw:Math.PI,text:"FREE TRIAL COUNTER \u2014 No commitment!*",w:6.2,h:1,bg:"#ff4f9a"},{pos:[-Jn+.14,2.2,-2],yaw:Math.PI/2,text:"BUILD-YOUR-BOWL",w:3.2,h:1.2,bg:"#2ec4b6"},{pos:[Jn-.14,2.2,2],yaw:-Math.PI/2,text:"BLEND NOW, QUIT LATER",w:3.6,h:1.2,bg:"#ff8a1f"},{pos:[Jn-.14,2.4,-12],yaw:-Math.PI/2,text:"SMOOTHIE BAR",w:3.6,h:1.2,bg:"#b9a7ff"}]});var wx=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(wx)),n),Zs=.3,li=12,Ai=10,Tx=[rt([-li,-1,-Ai],[li,0,Ai],"floor"),rt([-li-Zs,0,-Ai-Zs],[li+Zs,4,-Ai]),rt([-li-Zs,0,Ai],[li+Zs,4,Ai+Zs]),rt([-li-Zs,0,-Ai],[-li,4,Ai]),rt([li,0,-Ai],[li+Zs,4,Ai]),rt([-4,0,7.2],[4,2.2,7.9],"tall","desk"),rt([-8,0,-3.2],[-5.5,1,-2.6],"low","velvet"),rt([5.5,0,-3.2],[8,1,-2.6],"low","velvet"),rt([-4.5,0,1.8],[-2,1,2.4],"low","velvet"),rt([2,0,1.8],[4.5,1,2.4],"low","velvet"),rt([-6.4,0,-.4],[-5.6,4,.4],"pillar"),rt([5.6,0,4.2],[6.4,4,5],"pillar")],Ex=pu(Tx,{cols:[-10,-6,-2,2,6,10],rows:[-8,-5,-1.5,3.5,6,8.8],clearance:.9});Ex.push([0,-3.5],[0,2],[-6,5.5],[6,5.5],[-5.5,9],[5.5,9],[0,9]);var Ax=wx({name:"cancellationDesk",boss:!0,boxes:Tx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-8.5],yaw:0},trigger:{z:1/0},features:{start:{pos:[0,0,-8.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},desk:{pos:[0,0,5.8],yaw:0}},associates:[],pads:[{id:"sauna1",pos:[-9,0,8.4],spawns:"associate"},{id:"sauna2",pos:[9,0,8.4],spawns:"associate"}],tobble:{pos:[1.5,0,-8.7],yaw:0},waypoints:Ex,ammoCrates:[{pos:[-10.5,0,-8.8]}],landmark:{pos:[0,3.2,Ai-.3],text:"CANCELLATION DESK",w:7,h:1.3},signs:[{pos:[-li+.14,2.2,-1],yaw:Math.PI/2,text:"PLEASE TAKE A NUMBER \u2014 NOW SERVING: 3",w:4.2,h:1.3,bg:"#ff4f9a"},{pos:[li-.14,2.2,-1],yaw:-Math.PI/2,text:"ALL SALES FINAL. ALL EXITS FINAL.",w:4.2,h:1.3,bg:"#7a3cff"}]});var Rx=Object.freeze({turnstiles:yx,smoothie:Sx,desk:Ax});var Un=Object.freeze(["turnstiles","smoothie","desk"]),gu=Object.freeze({turnstiles:"Check-in Turnstiles",smoothie:"Smoothie Bar",desk:"The Cancellation Desk"}),Cx=Object.freeze(["Tues 2:00\u20132:10","Tues 2:00\u20132:05","By appointment"]),ip=n=>`Cancellation hours: ${Cx[Math.max(0,Math.min(Cx.length-1,n|0))]}`,Px="gyms-of-war.checkpoint",mu=n=>Number.isInteger(n)&&n>=0&&n<Un.length?n:0,sp=n=>{let e=Un.indexOf(n);return e<0?0:e};function cA(n){try{let e=n&&n.getItem(Px);return e==null?0:mu(Number(e))}catch{return 0}}function hA(n,e){try{n&&n.setItem(Px,String(mu(e)))}catch{}}function Ix(n,e,t=j.run.gateReach){if(!n)return!1;let i=e[0]-n.pos[0],s=e[2]-n.pos[2],r=Math.sin(n.yaw),o=Math.cos(n.yaw),a=i*o-s*r,l=i*r+s*o;return Math.abs(a)<=n.w/2&&l>=-.25&&l<=t}function Lx({storage:n=null,tuning:e=j}={}){let t=()=>e.run,i=0,s=0,r="play",o=0,a=!1,l=cA(n),c=d=>{s=mu(d),hA(n,s)},h={get index(){return i},get checkpoint(){return s},get arena(){return Un[i]},get phase(){return r},get cleared(){return a},get fading(){return r!=="play"},get hasNext(){return i<Un.length-1},saved:l,get fade(){return r==="fadeOut"?Math.min(1,o/Math.max(t().fadeOut,1e-6)):r==="black"?1:r==="fadeIn"?Math.max(0,1-o/Math.max(t().fadeIn,1e-6)):0},get gateOpen(){return a&&h.hasNext},markClear(){return r==="play"&&(a=!0),h.gateOpen},touchGate(){return r!=="play"||!h.gateOpen?!1:(r="fadeOut",o=0,!0)},restart(){return a=!1,r="play",o=0,Un[i]},goTo(d){return i=mu(d),c(i),a=!1,r="play",o=0,Un[i]},newRun(){return h.goTo(0)},step(d){let u=[];if(!(d>0)||r==="play")return u;if(o+=d,r==="fadeOut"&&o>=t().fadeOut){let p=Un[i];i=Math.min(Un.length-1,i+1),c(i),a=!1,r="black",o=0,u.push({type:"swap",from:p,to:Un[i]})}return r==="black"&&o>=t().blackHold&&(r="fadeIn",o=0),r==="fadeIn"&&o>=t().fadeIn&&(r="play",o=0,u.push({type:"faded"})),u}};return h}function rp(n){let e=new Set,t=new Set,i=new Set;n.traverse(s=>{s.geometry&&e.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];if(!(s.userData&&s.userData.isOutline))for(let o of r)t.add(o)});for(let s of t)for(let r of Object.keys(s)){let o=s[r];o&&o.isTexture&&i.add(o)}return e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),n.parent&&n.parent.remove(n),{geometries:e.size,materials:t.size,textures:i.size}}var Ks=class n{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},op=class extends Ks{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function ap(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var uA={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:ap,toHexString:ap},ll={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},dA={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){let i=ll.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return ll.toHexString(s)}},fA={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){let i=ll.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return ll.toHexString(s)}},pA=[uA,ll,dA,fA];function mA(n){return pA.find(e=>e.match(n))}var lp=class extends Ks{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=mA(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=ap(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},al=class extends Ks{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},cp=class extends Ks{constructor(e,t,i,s,r,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},i=y=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),i(this._step*this._normalizeMouseWheel(y)))},o=!1,a,l,c,h,d,u=5,p=y=>{a=y.clientX,l=c=y.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",g)},f=y=>{if(o){let S=y.clientX-a,_=y.clientY-l;Math.abs(_)>u?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>u&&g()}if(!o){let S=y.clientY-c;d-=S*this._step*this._arrowKeyMultiplier(y),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=y.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(x,y,S,_,M)=>(x-y)/(S-y)*(M-_)+_,t=x=>{let y=this.$slider.getBoundingClientRect(),S=e(x,y.left,y.right,this._min,this._max);this._snapClampSetValue(S)},i=x=>{this._setDraggingStyle(!0),t(x.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=x=>{t(x.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=x=>{x.preventDefault(),this._setDraggingStyle(!0),t(x.touches[0].clientX),o=!1},h=x=>{x.touches.length>1||(this._hasScrollBar?(a=x.touches[0].clientX,l=x.touches[0].clientY,o=!0):c(x),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=x=>{if(o){let y=x.touches[0].clientX-a,S=x.touches[0].clientY-l;Math.abs(y)>Math.abs(S)?c(x):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else x.preventDefault(),t(x.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),f=400,g,m=x=>{if(Math.abs(x.deltaX)<Math.abs(x.deltaY)&&this._hasScrollBar)return;x.preventDefault();let S=this._normalizeMouseWheel(x)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,f)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},hp=class extends Ks{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},up=class extends Ks{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},gA=`.lil-gui {
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
}`;function xA(n){let e=document.createElement("style");e.innerHTML=n;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var Dx=!1,xu=class n{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Dx&&a&&(xA(gA),Dx=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new hp(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new cp(this,e,t,i,s,r);case"boolean":return new op(this,e,t);case"string":return new up(this,e,t);case"function":return new al(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new lp(this,e,t,i)}addFolder(e){let t=new n({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof al||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof al)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var D=(n,e,t,i)=>({path:n,min:e,max:t,step:i});function Nx(n){let e=(t,i,s,r)=>D(`weapons.${n}.${t}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var cl=Object.freeze([D("move.jog",1,10,.1),D("move.aimWalk",.5,6,.1),D("move.sprint",2,14,.1),D("move.accelTime",.01,.6,.01),D("move.stopTime",.01,.6,.01),D("move.turnRate",1,40,.5),D("move.aimTurnRate",1,40,.5),D("move.sprintTurnRate",.2,20,.1),D("move.rollDistance",1,12,.1),D("move.rollTime",.2,1.5,.01),D("move.rollEase",1,4,.05),D("move.rollBuffer",0,.5,.01),D("move.tapMax",.05,.5,.01),D("move.stickSprintMin",0,1,.05),D("move.faceMinSpeed",0,2,.05),D("move.sprintHeadingMinSpeed",0,3,.05),D("move.runClipMinSpeed",0,2,.05),D("move.runRateMin",.1,2,.05),D("move.runRateMax",.5,4,.05),D("move.sprintRateMin",.1,2,.05),D("move.sprintRateMax",.5,4,.05),D("move.stepEvery",.4,4,.05),D("move.stepEverySprint",.4,6,.05),D("move.crawlSpeed",.2,4,.05),D("move.crawlTurnRate",.5,20,.5),D("camera.fov",40,110,1),D("camera.right",-1.5,1.5,.01),D("camera.up",.5,3,.01),D("camera.back",.5,6,.05),D("camera.aim.fov",20,90,1),D("camera.aim.back",.3,5,.05),D("camera.sprint.fov",50,120,1),D("camera.sprint.up",.3,3,.01),D("camera.sprint.back",.5,6,.05),D("camera.sprint.shakeWeight",0,3,.05),D("camera.coverLow.fov",50,120,1),D("camera.coverLow.right",-1.5,1.5,.01),D("camera.coverLow.up",.3,3,.01),D("camera.coverLow.back",.5,6,.05),D("camera.coverTall.fov",50,120,1),D("camera.coverTall.right",-1.5,1.5,.01),D("camera.coverTall.up",.3,3,.01),D("camera.coverTall.back",.5,6,.05),D("camera.downed.fov",40,120,1),D("camera.downed.up",.2,3,.01),D("camera.downed.back",.5,6,.05),D("camera.bump.amount",0,.6,.01),D("camera.bump.halfLife",.01,.3,.005),D("camera.slamShake.amount",0,.3,.005),D("camera.slamShake.time",.02,1,.01),D("camera.slamShake.hz",2,60,.5),D("camera.blendHalfLife",0,.5,.005),D("camera.holdTime",0,2,.05),D("camera.holdRange",10,300,5),D("camera.followHalfLife",0,.5,.005),D("camera.sideHalfLife",0,.6,.005),D("camera.headHideDist",0,2,.05),D("camera.headHideMargin",0,1,.01),D("camera.shake.amp",0,.15,.001),D("camera.shake.hz",1,30,.5),D("camera.probeRadius",.05,.6,.01),D("camera.minBack",0,2,.01),D("camera.wallReturnHalfLife",0,1,.01),D("camera.pitchMin",-1.5,0,.01),D("camera.pitchMax",0,1.5,.01),D("look.mouse",5e-4,.008,1e-4),D("look.pad.yawRate",.5,10,.1),D("look.pad.pitchRate",.5,10,.1),D("look.pad.expo",1,3,.05),D("look.aimScale",.1,1.5,.01),{path:"look.invertY"},D("cover.grabRange",0,5,.05),D("cover.grabAngle",0,180,1),D("cover.grabViewAngle",0,180,1),D("cover.grabSlack",0,5,.05),D("cover.grabMinTilt",0,1,.05),D("cover.gap",0,5,.01),D("cover.endInset",0,5,.01),D("cover.minLength",0,5,.05),D("cover.slideSpeed",0,30,.5),D("cover.slideMinTime",0,2,.01),D("cover.slideMaxTime",0,2,.01),D("cover.slideTurnRate",1,60,.5),D("cover.moveSpeed",0,30,.1),D("cover.alongDeadzone",0,1,.05),D("cover.leaveTilt",0,1,.05),D("cover.leaveAngle",0,180,1),D("cover.endLeaveTime",0,2,.01),D("cover.cornerZone",0,5,.05),D("cover.popTime",0,2,.01),D("cover.blindTime",0,2,.01),D("cover.popShift",0,5,.05),D("cover.pushAngle",0,180,1),D("cover.lowDrawBack",0,1,.01),D("cover.blindDrawBack",0,1,.01),D("cover.vaultTime",0,2,.01),D("cover.vaultMaxDepth",0,5,.05),D("cover.vaultHop",0,5,.05),D("cover.vaultExitSpeed",0,30,.1),D("cover.swapRange",0,5,.05),D("cover.swapSpeed",0,30,.5),D("cover.swapAngle",0,180,1),D("cover.swapMaxOffset",0,5,.05),D("cover.slamSquash",0,1,.01),D("cover.slamSquashTime",0,2,.01),D("cover.thudVolume",0,1,.05),D("cover.autoSlam",0,1,1),D("cover.autoAngle",0,90,1),D("cover.autoDist",0,1,.01),D("cover.autoMinTilt",0,1,.05),D("cover.autoMinSpeed",0,12,.1),D("cover.autoTime",0,1,.01),...Nx("regret"),...Nx("pistol"),D("combat.fireBuffer",0,.5,.01),D("combat.autoReload",0,1,1),D("combat.minRate",.01,1,.01),D("combat.minReloadTime",.01,.5,.01),D("combat.muzzleUp",.5,2,.01),D("combat.muzzleRight",-1,1,.01),D("combat.muzzleForward",0,2,.01),D("combat.blindLift",0,1,.01),D("combat.blindReach",0,1,.01),D("combat.crateRadius",.3,3,.05),D("combat.hitPad",0,.3,.005),D("combat.crouchHead",0,3,.01),D("combat.crouchBodyTop",0,3,.01),D("combat.shoulderDrop",0,1,.01),D("combat.pickupRadius",.2,3,.05),D("health.max",1,500,1),D("health.regenDelay",0,15,.1),D("health.regenTime",0,15,.1),D("health.downedTime",0,60,.5),D("health.standInRevive",0,1,1),D("health.reviveTime",0,10,.1),D("health.reviveHealth",0,1,.05),D("health.godMode",0,1,1),D("health.giveUpHold",.3,5,.01),D("associate.radius",0,3,.01),D("associate.height",0,3,.01),D("associate.pointSpacing",.2,3,.01),D("associate.reserveRadius",0,3,.01),D("associate.popShift",0,3,.01),D("associate.linkMax",2,15,.5),D("associate.health",1,1e3,1),D("associate.runSpeed",0,12,.1),D("associate.turnRate",.5,40,.5),D("associate.arriveDist",.01,1,.01),D("associate.stuckTime",.1,5,.1),D("associate.popTime",0,1,.01),D("associate.telegraphTime",0,2,.01),D("associate.burstTime",0,5,.1),D("associate.rate",.5,20,.5),D("associate.damage",0,50,.5),D("associate.range",5,100,1),D("associate.spread",0,15,.1),D("associate.moveSpread",0,15,.1),D("associate.aimLag",0,1,.01),D("associate.suppressChance",0,1,.05),D("associate.suppressTime",0,5,.1),D("associate.suppressRate",.5,20,.5),D("associate.suppressMiss",0,5,.1),D("associate.suppressSpread",0,20,.5),D("associate.coverWaitMin",0,5,.1),D("associate.coverWaitMax",0,8,.1),D("associate.magBursts",1,10,1),D("associate.reloadTime",0,6,.1),D("associate.flinchTime",0,2,.01),D("associate.minRange",0,20,.5),D("associate.preferRange",0,40,.5),D("associate.maxRange",1,60,.5),D("associate.relocateCheck",.05,3,.05),D("associate.relocateAfter",1,60,.5),D("associate.ammoDrop",0,200,1),D("associate.muzzleUp",.5,2,.01),D("director.tokens",0,8,1),D("director.casualTokens",0,8,1),D("director.casual",0,1,1),D("director.tokenCooldown",0,5,.1),D("director.tokenMaxHold",.5,10,.1),D("director.requestWindow",0,2,.05),D("director.pushAfter",1,30,.5),D("director.flankAfter",1,60,.5),D("director.stayRadius",.5,10,.1),D("director.flankAngle",0,180,1),D("director.flankMaxAngle",60,180,1),D("director.maxEnemies",4,8,1),D("associate.downChance",0,1,.05),D("associate.downedCrawl",0,3,.05),D("associate.bleedTime",1,60,.5),D("associate.reviveTime",0,10,.1),D("associate.reviveHealth",.05,1,.05),D("associate.reviveRange",0,40,.5),D("associate.staggerTime",0,3,.05),D("associate.diveWarn",0,1.6,.05),D("associate.diveRadius",0,12,.1),D("associate.diveChance",0,1,.05),D("associate.diveReaction",0,2,.05),D("associate.diveDistance",0,10,.1),D("associate.diveTime",.05,3,.05),D("pad.radius",.1,4,.05),D("pad.openAfterKills",0,8,1),D("pad.openAfterKillsSmoothie",0,8,1),D("pad.openAfter",0,120,1),D("pad.interval",.5,30,.5),D("pad.maxAlive",1,8,1),D("pad.total",1,30,1),D("pad.riseTime",0,3,.05),D("run.fadeOut",.05,3,.05),D("run.blackHold",0,2,.05),D("run.fadeIn",.05,3,.05),D("run.gateReach",.5,4,.1),D("run.hoursTime",1,20,.5),D("run.gateOpenTime",.1,3,.05),D("tobble.enabled",0,1,1),D("tobble.scale",.3,1.2,.01),D("tobble.radius",.1,.6,.01),D("tobble.height",.5,2,.01),D("tobble.health",1,1e3,1),D("tobble.regenDelay",0,20,.5),D("tobble.regenTime",0,20,.5),D("tobble.runSpeed",0,12,.1),D("tobble.turnRate",1,30,.5),D("tobble.followMin",0,20,.5),D("tobble.followMax",1,30,.5),D("tobble.personalSpace",0,5,.05),D("tobble.lofClear",0,4,.05),D("tobble.lofRange",1,60,1),D("tobble.sidestepReact",0,3,.05),D("tobble.sidestepDist",0,5,.1),D("tobble.popTime",.01,1,.01),D("tobble.popLift",0,.6,.01),D("tobble.muzzleUp",.3,2,.01),D("tobble.coverWaitMin",0,5,.1),D("tobble.coverWaitMax",0,8,.1),D("tobble.burstTime",0,6,.1),D("tobble.rate",.5,20,.5),D("tobble.damage",0,100,1),D("tobble.spread",0,20,.5),D("tobble.range",1,100,1),D("tobble.reviveMaxThreats",0,8,1),D("tobble.reviveWaitMax",0,20,.5),D("tobble.reviveRange",.3,4,.05),D("tobble.reviveTime",0,15,.1),D("tobble.reviveHealth",.05,1,.05),D("tobble.playerReviveTime",0,10,.1),D("tobble.playerReviveRange",.3,5,.05),D("tobble.crawlSpeed",0,3,.05),D("tobble.complainEvery",1,30,.5),D("dummy.health",1,1e3,1),D("dummy.respawnTime",0,30,.5),D("dummy.railSpeed",0,10,.1),D("camera.recoil.halfLife",.01,.5,.01),D("camera.recoil.max",0,20,.5),D("look.pad.assist",.1,1,.05),D("feedback.flashTime",.01,.3,.01),D("feedback.flashSize",.05,1.5,.05),D("feedback.tracerTime",.01,.3,.01),D("feedback.tracerWidth",.005,.2,.005),D("feedback.sparkTime",.05,1,.01),D("feedback.sparkCount",0,12,1),D("feedback.gelTime",.1,2,.05),D("feedback.gelCount",0,24,1),D("feedback.gelSpeed",0,10,.1),D("feedback.killGelCount",0,48,1),D("feedback.receiptCount",0,24,1),D("feedback.receiptTime",.2,4,.05),D("feedback.gravity",0,30,.1),D("feedback.hitMarkerTime",.02,1,.01),D("feedback.killMarkerTime",.05,1,.01),D("feedback.reloadResultTime",.1,2,.05),D("feedback.reticleMinGap",0,30,1),D("feedback.lowAmmoFrac",0,1,.05),D("feedback.coverReticleOpacity",0,1,.05),D("feedback.stepDip",0,.1,.001),D("feedback.stepVolume",0,1,.05),D("feedback.shotVolume",0,1,.05),D("feedback.hitVolume",0,1,.05),D("feedback.killVolume",0,1,.05),D("feedback.reloadVolume",0,1,.05),D("feedback.gunSquash",0,.6,.01),D("feedback.gunSquashTime",.01,.5,.01),D("feedback.gunKick",0,.3,.01),D("feedback.bodyKick",0,.3,.01),D("feedback.dummyBurstTime",.01,1,.01),D("feedback.dummyRespawnPop",0,1,.01),D("feedback.faceMaxOpacity",0,1,.05),D("feedback.edgeMaxOpacity",0,1,.05),D("feedback.hitFlashTime",.05,2,.01),D("feedback.hitKick",0,3,.05),D("feedback.hurtVolume",0,1,.05),D("feedback.enemyFlashSize",.05,1.5,.05),D("feedback.enemyTracerTime",.01,.3,.01),D("feedback.enemyTracerWidth",.005,.2,.005),D("feedback.glintSize",.02,.4,.01),D("feedback.blasterVolume",0,1,.05),D("feedback.chargeVolume",0,1,.05),D("feedback.pickupVolume",0,1,.05),D("feedback.barkTime",.2,6,.1),D("feedback.barkGap",0,12,.5),D("feedback.barkMinShow",0,4,.1),D("feedback.bashVolume",0,1,.05),D("feedback.revVolume",0,1,.05),D("feedback.cutVolume",0,1,.05),D("feedback.throwVolume",0,1,.05),D("feedback.clankVolume",0,1,.05),D("feedback.boomVolume",0,1,.05),D("feedback.saunaVolume",0,1,.05),D("feedback.reviveVolume",0,1,.05),D("feedback.tobbleShotVolume",0,1,.05),D("feedback.blastSize",.2,8,.1),D("feedback.blastTime",.05,2,.01),D("feedback.executeShake",0,.3,.005),D("feedback.cutGelEvery",.02,1,.01),D("feedback.arcDot",.01,.5,.01),D("melee.holdTime",0,5,.01),D("melee.bashTime",0,5,.01),D("melee.bashHitAt",0,5,.01),D("melee.bashRange",0,10,.05),D("melee.bashAngle",0,180,1),D("melee.bashDamage",0,500,1),D("melee.bashLunge",0,10,.05),D("melee.bashCooldown",0,5,.01),D("melee.revSpeed",0,30,.1),D("melee.revPulse",.05,5,.01),D("melee.cutterReach",0,10,.05),D("melee.cutterAngle",0,180,1),D("melee.cutTime",0,5,.01),D("melee.finishTime",0,5,.01),D("melee.executeRange",0,10,.05),D("melee.executeAngle",0,180,1),D("melee.promptRange",0,10,.05),D("melee.cutterSpin",0,100,1),D("grenade.carry",0,10,1),D("grenade.start",0,10,1),D("grenade.throwSpeed",0,30,.1),D("grenade.throwLift",0,180,1),D("grenade.gravity",.5,30,.1),D("grenade.ballRadius",.02,1,.01),D("grenade.restitution",0,1,.01),D("grenade.friction",0,1,.01),D("grenade.fuse",0,5,.01),D("grenade.radius",0,10,.05),D("grenade.damage",0,500,1),D("grenade.killRadius",0,10,.05),D("grenade.killDamage",0,500,1),D("grenade.selfDamage",0,2,.05),D("grenade.padReach",0,10,.05),D("grenade.arcTime",0,5,.01),D("grenade.throwTime",0,5,.01)]),vA=new Map(cl.map(n=>[n.path,n])),hl=structuredClone(j);function Ar(n,e){let t=n;for(let i of e.split(".")){if(t===null||typeof t!="object")return;t=t[i]}return t}function fp(n,e,t){let i=e.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=t,!0}function pp(n=j,e=hl){let t={};for(let i of cl){let s=Ar(n,i.path);s!==Ar(e,i.path)&&(t[i.path]=s)}return t}function Ox(n,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let t=0;for(let i of Object.keys(e)){let s=vA.get(i);if(!s)continue;let r=e[i],o=Ar(hl,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||fp(n,i,r)&&t++)}return t}function dp(n,e){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>dp(s,e)).join(", ")}]`;let t="  ".repeat(e+1);return`{
${Object.keys(n).map(s=>`${t}${s}: ${dp(n[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function Ux(n=j){return["associate","camera","combat","cover","director","dummy","feedback","grenade","health","look","melee","move","pad","run","tobble","weapons"].map(e=>`  ${e}: ${dp(n[e],1)},`).join(`
`)}var mp="cr-tuning",yA={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},_A=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function Fx(n){let e=n.split("."),t=e.slice(0,-1);return t.length===1&&t[0]==="camera"&&_A.has(e[1])&&t.push("wall"),t[0]==="look"&&t[1]==="pad"&&(t[1]="lookPad"),t}function bA(){try{return window.localStorage}catch{return null}}function kx({storage:n=bA()}={}){let e=()=>{try{return n?n.getItem(mp):null}catch{return null}},t=g=>{try{n&&(g===null?n.removeItem(mp):n.setItem(mp,g))}catch{}};try{let g=e();g&&Ox(j,JSON.parse(g))}catch{}let i=new xu({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let g=document.activeElement;g&&g!==document.body&&s.contains(g)&&g.blur&&g.blur()}s.addEventListener("click",g=>{let m=g.target;m&&m.closest&&m.closest(".lil-title")&&m.blur!==void 0&&r()});let o=new Map;function a(g){let m=i,x="";for(let y of g){if(x+=`.${y}`,!o.has(x)){let S=m.addFolder(yA[y]||y);S.close(),o.set(x,S)}m=o.get(x)}return m}function l(){let g=pp();t(Object.keys(g).length?JSON.stringify(g):null)}for(let g of cl){let m=g.path.split("."),x=m[m.length-1],y=Ar(j,m.slice(0,-1).join(".")),S=typeof Ar(hl,g.path)=="boolean"?a(Fx(g.path)).add(y,x):a(Fx(g.path)).add(y,x,g.min,g.max,g.step);S.onChange(l),S.onFinishChange(r)}let c=null;function h(g){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let m=document.createElement("div");m.textContent="Press Cmd+C to copy",m.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=m,s.appendChild(m),s.appendChild(c)}c.value=g,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(g){c&&(c.hidden=!0,c.note.hidden=!0);let m=null;try{m=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(g):null}catch{m=null}if(!m){h(g);return}m.catch(()=>h(g))}let u={copyChanges(){r(),d(JSON.stringify(pp(),null,2))},copyForFile(){r(),d(Ux())},resetAll(){r();for(let g of cl)fp(j,g.path,Ar(hl,g.path));t(null),i.controllersRecursive().forEach(g=>g.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let p=!1;function f(g){p=g,s.style.display=g?"":"none"}return f(!1),{toggle(){f(!p)},isOpen:()=>p}}var Bx=Math.PI*2,Ri=n=>n-Bx*Math.round(n/Bx),Ci=(n,e)=>Math.atan2(n,e);function ul(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function ci(n,e){let t=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*t-n.moveX*i,r=-n.moveY*i+n.moveX*t,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function qt(n,e,t){let i=Ri(e-n);return n+Math.max(-t,Math.min(t,i))}function Do(n,e,t,i,s,r){let o=n.vel,a=(Math.hypot(e,t)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=t-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=t):(o[0]+=l/h*a,o[2]+=c/h*a)}var gp=[0,0],vu=[0,0,0],dl=1e-9,MA=1.5;var xp=(n=j)=>n.tobble?.playerReviveTime??MA;function zx(n,e,t){let i=e-n.pos[0],s=t-n.pos[2];Math.hypot(i,s)>1e-6&&(n.facing=n.facing+Ri(Math.atan2(i,s)-n.facing)),n.heading=n.facing}function yu(n){n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0}var _u={bash:{acceptsTap:!1,selfMoves:!0,enter(n){n.aiming=!1,n.firing=!1,n.scratch.dir=[Math.sin(n.facing),Math.cos(n.facing)],n.scratch.prevOff=0,n.scratch.hit=!1,n.heading=n.facing},update(n,e,t){let i=j.melee,s=n.scratch;n.aiming=!1,n.firing=!1;let r=n.stateTime>=i.bashTime-dl,o=r||!(i.bashTime>0)?1:n.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,vu[0]=s.dir[0]*l,vu[1]=0,vu[2]=s.dir[1]*l,n.moveBy(vu,t,!1),!s.hit&&(r||n.stateTime>=i.bashHitAt-dl)&&(s.hit=!0,n.onAction?.({type:"bashHit"})),r?(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(n){n.aiming=!1,n.firing=!1,n.heading=n.facing},update(n,e,t){let i=n.tuning,s=j.melee.revSpeed;n.aiming=!1,n.firing=!1,ci(e,gp),Do(n,gp[0]*s,gp[1]*s,s,t,i);let r=n.speed();return r>s&&(n.vel[0]*=s/r,n.vel[2]*=s/r),r>i.faceMinSpeed?n.facing=qt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t):n.facing=qt(n.facing,e.camYaw,i.aimTurnRate*t),n.heading=n.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(n){yu(n)},update(n){return yu(n),n.stateTime<n.scratch.time-dl?null:(n.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(n){yu(n)},update(n,e){return yu(n),e.interactHeld?n.stateTime<xp()-dl?null:(n.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},fl={bash(n,e){return n.state!=="move"&&n.state!=="sprint"||n.bashReadyAt>n.clock+dl?!1:(n.bashReadyAt=n.clock+j.melee.bashCooldown,Number.isFinite(e)&&(n.facing=n.facing+Ri(e-n.facing)),n.go("bash",{}),!0)},rev(n,e){return e?n.state!=="move"&&n.state!=="sprint"?!1:(n.go("rev",{}),!0):n.state!=="rev"?!1:(n.go("move",{}),!0)},execute(n,e,t){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"&&n.state!=="cover"?!1:(n.go("execute",{}),n.scratch.time=Number.isFinite(t)&&t>0?t:0,zx(n,e[0],e[1]),!0)},reviveTobble(n,e){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"&&n.state!=="cover"?!1:(n.go("reviveTobble",{}),zx(n,e[0],e.length>2?e[2]:e[1]),!0)}};var qi=1e-9,vp=Math.PI/180,Gx=.05,SA=1.8,wA={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function Vx(n=j.cover,e=j.move){return{radius:e.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var TA=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],EA=n=>{for(let e of["a","b","tangent","normal"])Object.freeze(n[e]);return Object.freeze(n)};function Wx(n,{radius:e,gap:t,endInset:i,minLength:s,exclude:r=[]}){let o=e+t,a=[];return n.forEach((l,c)=>{let h=wA[l.kind];if(!h)return;let d=n.filter((u,p)=>p!==c&&u.kind!=="floor"&&u.max[1]>Gx&&u.min[1]<SA);for(let u of TA){let p=u.axis*2,f=2-p,g=(u.sign>0?l.max[p]:l.min[p])+u.sign*o,m=l.min[f],x=l.max[f],y=x-m,S=[];for(let w of d){if(!(g>w.min[p]-o+qi&&g<w.max[p]+o-qi))continue;let C=w.min[f]-o-m,R=w.max[f]+o-m;R>qi&&C<y-qi&&S.push([Math.max(C,0),Math.min(R,y)])}S.sort((w,C)=>w[0]-C[0]);let _=[];for(let w of S){let C=_[_.length-1];C&&w[0]<=C[1]+qi?C[1]=Math.max(C[1],w[1]):_.push([w[0],w[1]])}let M=[],b=0,v=!0;for(let[w,C]of _)w>b+qi&&M.push([b,w,v,!1]),b=C,v=!1;y>b+qi&&M.push([b,y,v,!0]),M.forEach(([w,C,R,L],T)=>{let I=`${c}${u.name}#${T}`;if(r.includes(I))return;let E=m+w+(R?i:0),N=m+C-(L?i:0),k=N-E;if(k<s-qi)return;let V=u.axis===0?[g,E]:[E,g],te=u.axis===0?[g,N]:[N,g];a.push(EA({id:I,kind:h,boxIndex:c,a:V,b:te,length:k,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[p]-l.min[p],openA:R,openB:L}))})}}),a}function Pi(n,e,t=[0,0]){return t[0]=n.a[0]+n.tangent[0]*e,t[1]=n.a[1]+n.tangent[1]*e,t}function Js(n,e,t=j.cover){let i=e<=t.cornerZone,s=n.length-e<=t.cornerZone;return i&&s?e<=n.length-e?-1:1:i?-1:s?1:0}function pl(n,e){return e<0?n.openA:n.openB}var Hx=.9,Xx=(n,e,t,i)=>oi(n,[e[0],Hx,e[1]],[t[0],Hx,t[1]],.9*i)===1;function ml(n,e,t,i,s,r,o){let a=Math.cos(r.grabAngle*vp),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*vp,d=null;for(let u of n){let p=(t[0]-u.a[0])*u.normal[0]+(t[2]-u.a[1])*u.normal[1],f=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(p<-(r.gap+.02)||f<a||f<=qi)continue;let g=Math.max(p,0)/f,m=(t[0]+i[0]*g-u.a[0])*u.tangent[0]+(t[2]+i[1]*g-u.a[1])*u.tangent[1];if(m<-r.grabSlack||m>u.length+r.grabSlack)continue;let x=Math.max(0,Math.min(u.length,m)),y=Pi(u,x),S=y[0]-t[0],_=y[1]-t[2],M=Math.hypot(S,_);if(!(M>r.grabRange||d&&M>=d.dist)){if(M>.3){let b=(S*l+_*c)/M;if(Math.acos(Math.max(-1,Math.min(1,b)))>h)continue}Xx(e,[t[0],t[2]],y,o)&&(d={edge:u,t:x,point:y,dist:M})}}return d}function Yx(n,e,t,i,s,r,o){if(Js(t,i,r)!==s||!pl(t,s))return null;let a=Pi(t,i),l=Math.cos(r.swapAngle*vp),c=null;for(let h of n){if(h===t||h.normal[0]*t.normal[0]+h.normal[1]*t.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),p=d<=u?0:h.length,f=Pi(h,p),g=f[0]-a[0],m=f[1]-a[1],x=Math.hypot(g,m);(g*t.tangent[0]+m*t.tangent[1])*s<=0||Math.abs(g*t.normal[0]+m*t.normal[1])>r.swapMaxOffset||x>r.swapRange||c&&x>=c.dist||Xx(e,a,f,o)&&(c={edge:h,t:p,point:f,dist:x})}return c}function AA(n,e,t,i){let s=e[1]+Gx,r=e[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<t-qi)return!1}return!0}function qx(n,e,t,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=Pi(n,e),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!AA(t,l,s,r))return null;let c=t.filter((h,d)=>d!==n.boxIndex);return oi(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var RA=["coverSlide","cover","vault","coverSwap"],$x=Math.PI/180,on=[0,0],Mu=[0,0],js=[0,0,0],Jx=.001,CA=2,yp=(n,e,t)=>Math.max(e,Math.min(t,n));function _p(n,e,t){if(ul(e)>=n.coverTuning.grabMinTilt){ci(e,on);let i=Math.hypot(on[0],on[1]);t[0]=on[0]/i,t[1]=on[1]/i}else t[0]=Math.sin(n.facing),t[1]=Math.cos(n.facing);return t}var jx={name:"cover",state:"coverSlide",when(n,e){return n.coverTarget=ml(n.coverEdges,n.boxes,n.pos,_p(n,e,Mu),e.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},bu={};function Qx(n,e){let t=n.coverTuning;if(!t.autoSlam||e.aim||ul(e)<t.autoMinTilt)return null;Object.assign(bu,t),bu.grabAngle=t.autoAngle,bu.grabRange=t.autoDist,ci(e,on);let i=Math.hypot(on[0],on[1]);Mu[0]=on[0]/i,Mu[1]=on[1]/i;let s=ml(n.coverEdges,n.boxes,n.pos,Mu,e.camYaw,bu,n.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(n.runVel[0]*r[0]+n.runVel[1]*r[1])>=t.autoMinSpeed?s:null}function PA(n,e,t){let i=Js(n,e,t);return n.kind==="low"||i!==0&&pl(n,i)}function _s(n){return n.cover?n.cover.edge:n.scratch.edge||null}function bp(n){if(n.state==="downed")return"downed";if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let e=_s(n);if(e)return e.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function Rr(n){let e=n.cover;if(!e)return 1;let t=e.edge,i=e.popEnd;if(i===0&&(i=Js(t,e.t,n.coverTuning)),i===0)return 1;let s=Ci(-t.normal[0],-t.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=t.tangent[0]*i*r+t.tangent[1]*i*o<0?-1:1;return pl(t,i)?a:-a}function Zx(n,e,t,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(Jx,yp(o/Math.max(e,1e-6),t,i)),n.aiming=!1}function Kx(n,e,t,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return js[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],js[1]=0,js[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(js,e,!1),i!==null&&(n.facing=qt(n.facing,i,t*e)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var IA={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;Zx(n,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(n,e,t){let i=n.scratch.edge;return Kx(n,t,n.coverTuning.slideTurnRate,Ci(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;n.cover=null,Zx(n,e.swapSpeed,0,CA);let t=n.scratch;n.heading=Ci(t.to[0]-t.from[0],t.to[2]-t.from[2]),n.facing=n.facing+Ri(n.heading-n.facing)},update(n,e,t){return Kx(n,t,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTarget;n.coverTarget=null;let t=n.scratch,i=e.edge;n.cover=null,n.aiming=!1,t.edge=i,t.landing=e.landing,t.from=[n.pos[0],n.pos[2]],n.heading=Ci(-i.normal[0],-i.normal[1]),n.facing=n.facing+Ri(n.heading-n.facing)},update(n,e,t){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,Jx)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,e,t){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=ci(e,on),l=Math.hypot(on[0],on[1]),c=l>0?on[0]/l:0,h=l>0?on[1]/l:0,d=r.normal[0],u=r.normal[1],p=a>=i.leaveTilt,f=(w,C)=>(n.vel[0]=w*o.jog,n.vel[1]=0,n.vel[2]=C*o.jog,"move");if(p&&c*d+h*u>=Math.cos(i.leaveAngle*$x))return f(on[0],on[1]);if(e.tap&&p){let w=Math.cos(i.pushAngle*$x);if(-(c*d+h*u)>=w){let R=qx(r,s.t,n.boxes,i,o.radius,o.height);if(R)return n.coverTarget={landing:R,edge:r},"vault"}let C=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(C)>=w){let R=Yx(n.coverEdges,n.boxes,r,s.t,C>0?1:-1,i,o.radius);if(R)return n.coverTarget=R,"coverSwap"}}let g=Js(r,s.t,i),m=PA(r,s.t,i),x=e.aim&&m?1:0,y=e.fire&&!e.aim&&m?1:0,S=i.popTime>0?t/i.popTime:1;s.pop=s.pop<x?Math.min(x,s.pop+S):Math.max(x,s.pop-S);let _=i.blindTime>0?t/i.blindTime:1;s.blind=s.blind<y?Math.min(y,s.blind+_):Math.max(y,s.blind-_),s.popEnd=s.pop>0&&r.kind!=="low"?g:0,s.blindEnd=s.blind>0&&r.kind!=="low"?g:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let M=!1;if(s.pop===0&&s.blind===0){let w=on[0]*r.tangent[0]+on[1]*r.tangent[1];if(Math.abs(w)>=i.alongDeadzone){let C=s.t+w*i.moveSpeed*t;if(s.t=yp(C,0,r.length),C!==s.t&&pl(r,w>0?1:-1)&&(M=!0,s.endPush+=t,s.endPush>=i.endLeaveTime))return f(r.tangent[0]*Math.sign(w),r.tangent[1]*Math.sign(w))}}else s.blindEnd!==0&&y===1&&(s.t=yp(s.t+s.blindEnd*i.moveSpeed*t,0,r.length));M||(s.endPush=0);let b=Pi(r,s.t),v=s.popEnd*i.popShift*s.pop;return js[0]=b[0]+r.tangent[0]*v-n.pos[0],js[1]=0,js[2]=b[1]+r.tangent[1]*v-n.pos[2],n.moveBy(js,t,!1),s.pop>0?n.facing=qt(n.facing,e.camYaw,o.aimTurnRate*t):n.facing=qt(n.facing,Ci(-d,-u),o.turnRate*t),n.heading=n.facing,null}}},ev=Object.fromEntries(RA.map(n=>[n,IA[n]]));var wu=n=>[Math.sin(n),0,Math.cos(n)],Tu=n=>[-Math.cos(n),0,Math.sin(n)],LA=(n,e,t)=>e*(1-(1-n)**t),vn=[0,0],Su=[0,0,0];function Mp(n,e,t){return e.sprint&&!e.aim&&!e.grenade&&ul(e)>=t.stickSprintMin}var DA={move:{acceptsTap:!0,enter(){},update(n,e,t){let i=n.tuning;if(Mp(n,e,i))return"sprint";n.aiming=e.aim,n.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return ci(e,vn),Do(n,vn[0]*s,vn[1]*s,s,t,i),e.aim||e.fire||e.grenade?n.facing=qt(n.facing,e.camYaw,i.aimTurnRate*t):n.speed()>i.faceMinSpeed&&(n.facing=qt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,e){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):ci(e,vn)>.01?n.heading=Math.atan2(vn[0],vn[1]):n.heading=n.facing},update(n,e,t){let i=n.tuning;return Mp(n,e,i)?(ci(e,vn),n.heading=qt(n.heading,Math.atan2(vn[0],vn[1]),i.sprintTurnRate*t),Do(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,t,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,e){n.aiming=!1;let t=n.scratch;if(t.dir=[Math.sin(n.facing),Math.cos(n.facing)],ci(e,vn)>.01){let i=Math.hypot(vn[0],vn[1]);t.dir[0]=vn[0]/i,t.dir[1]=vn[1]/i}t.prevOff=0,t.queued=!1,n.heading=Math.atan2(t.dir[0],t.dir[1]),n.facing=n.facing+Ri(n.heading-n.facing)},update(n,e,t){let i=n.tuning,s=n.scratch;e.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=LA(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,Su[0]=s.dir[0]*a,Su[1]=0,Su[2]=s.dir[1]*a,n.moveBy(Su,t,!1),r?s.queued?"roll":Mp(n,e,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(n){n.cover=null,n.coverTarget=null,n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0},update(n,e,t){let i=n.tuning;return n.aiming=!1,n.firing=!1,ci(e,vn),Do(n,vn[0]*i.crawlSpeed,vn[1]*i.crawlSpeed,i.crawlSpeed,t,i),n.speed()>i.faceMinSpeed&&(n.facing=qt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.crawlTurnRate*t)),n.heading=n.facing,null},exit(){}},...ev,..._u},NA=[jx,{name:"roll",when:()=>!0,state:"roll"}];function tv({boxes:n,spawn:e,tuning:t=j.move,coverTuning:i=j.cover,coverEdges:s=[],states:r=DA,contextActions:o=NA,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:t,boxes:n,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(d,u,p=!0){let f=h.pos,g=Gn(h.boxes,f,d,t.radius,t.height);if(h.hit=!!g.hit,!p)u>0&&(h.vel[0]=(g.pos[0]-f[0])/u,h.vel[2]=(g.pos[2]-f[2])/u);else if(g.hit)if(u>0)h.vel[0]=(g.pos[0]-f[0])/u,h.vel[2]=(g.pos[2]-f[2])/u;else{let m=g.normal,x=h.vel[0]*m[0]+h.vel[1]*m[1]+h.vel[2]*m[2];x<0&&(h.vel[0]-=m[0]*x,h.vel[1]-=m[1]*x,h.vel[2]-=m[2]*x)}f[0]=g.pos[0],f[1]=g.pos[1],f[2]=g.pos[2]},go(d,u){let p=h.state;r[p].exit?.(h),h.state=d,h.stateTime=0,h.entries++,h.scratch={},r[p].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[d].enter(h,u),h.onState?.(d,p,u)},down(){h.go("downed",{})},bash(d){return fl.bash(h,d)},rev(d){return fl.rev(h,d)},execute(d,u){return fl.execute(h,d,u)},reviveTobble(d){return fl.reviveTobble(h,d)},revive(){h.state==="downed"&&h.go("move",{})},place(d,u){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=d[0],h.pos[1]=h.prevPos[1]=d[1],h.pos[2]=h.prevPos[2]=d[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,u!==void 0?h.facing=h.prevFacing=h.heading=u:h.prevFacing=h.facing},update(d,u){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,u>0&&(h.clock+=u),h.grenadeAim=!!d.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),d.tap&&r[h.state].acceptsTap){for(let g of o)if(g.when(h,d)){h.go(g.state,d);break}}h.stateTime+=u;let p=r[h.state].update(h,d,u),f=h.state;if(!r[f].selfMoves){let g=h.vel[0],m=h.vel[2],x=Math.hypot(g,m);h.moveBy([h.vel[0]*u,0,h.vel[2]*u],u,!0),h.hit?(h.hitTime+=u,(x>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=g,h.runVel[1]=m)):(h.runVel[0]=g,h.runVel[1]=m,h.hitTime=0)}if(f==="move"||f==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let m=Math.max(.1,f==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=m&&(h.stepDist%=m,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:f==="sprint",speed:h.speed()}))}if(f==="move"||f==="sprint"){let g=Qx(h,d);if(!g)h.autoTimer=0;else if((h.autoTimer+=u)>=h.coverTuning.autoTime){h.coverTarget=g,h.go("coverSlide",d);return}}p&&h.go(p,d)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function nv({AudioContextCtor:n=globalThis.AudioContext}={}){let e=null,t=null,i=!1,s=null;function r(){if(e||i||!n)return e;try{e=new n;let f=Math.max(1,Math.floor(e.sampleRate*.4));t=e.createBuffer(1,f,e.sampleRate);let g=t.getChannelData(0);for(let m=0;m<f;m++)g[m]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(f){if(!(f>0||f<0)||!e.createStereoPanner)return e.destination;let g=e.createStereoPanner();return g.pan.value=Math.max(-1,Math.min(1,f)),g.connect(e.destination),g}let a=()=>{if(e.state==="suspended"){let f=e.resume();f&&f.catch&&f.catch(()=>{})}};function l(f,g,m){let x=e.createGain();return x.gain.setValueAtTime(m,f),x.gain.exponentialRampToValueAtTime(.001,f+g),x.connect(s),x}function c(f,g,m,x,y,S){let _=e.createOscillator();_.type=g,_.frequency.setValueAtTime(m,y),x!==m&&_.frequency.exponentialRampToValueAtTime&&_.frequency.exponentialRampToValueAtTime(x,y+S),_.connect(f),_.start(y),_.stop(y+S)}function h(f,g,m,x,y){let S=e.createBufferSource();S.buffer=t;let _=e.createBiquadFilter();_.type=g,_.frequency.setValueAtTime(m,x),S.connect(_),_.connect(f),S.start(x),S.stop(x+y)}function d(f,g,m,x,y,S){let _=e.createBufferSource();_.buffer=t;let M=e.createBiquadFilter();M.type=g,M.frequency.setValueAtTime(m,y),M.frequency.exponentialRampToValueAtTime&&M.frequency.exponentialRampToValueAtTime(x,y+S),_.connect(M),M.connect(f),_.start(y),_.stop(y+S)}let u=(f,g,m)=>{let x=l(f,.03,m);h(x,"bandpass",g,f,.03)},p={rifle:(f,g)=>{h(l(f,.05,g*.55),"bandpass",2200,f,.05),c(l(f,.16,g*.9),"sine",150,48,f,.16),c(l(f,.22,g*.8),"sine",62,34,f,.22),h(l(f,.26,g*.35),"lowpass",700,f,.26)},pistol:(f,g)=>{h(l(f,.06,g*.6),"bandpass",2e3,f,.06),c(l(f,.2,g*.9),"sine",130,42,f,.2),c(l(f,.26,g*.85),"sine",56,30,f,.26),h(l(f,.3,g*.4),"lowpass",600,f,.3)},dry:(f,g)=>c(l(f,.02,g),"square",1200,1200,f,.02),hit:(f,g)=>c(l(f,.04,g),"sine",1600,1600,f,.04),head:(f,g)=>{let m=l(f,.06,g);c(m,"sine",2400,2400,f,.06),c(m,"sine",3200,3200,f,.06)},kill:(f,g)=>{let m=l(f,.12,g);c(m,"sine",300,900,f,.12);let x=l(f,.2,g*.8);h(x,"lowpass",1400,f,.2)},magOut:(f,g)=>{u(f,3e3,g),u(f+.08,2200,g)},magIn:(f,g)=>{u(f,2e3,g),u(f+.08,3400,g)},perfect:(f,g)=>{let m=l(f,.35,g);c(m,"sine",1320,1320,f,.35),c(m,"sine",1980,1980,f,.35)},good:(f,g)=>c(l(f,.15,g),"sine",990,990,f,.15),jam:(f,g)=>c(l(f,.15,g),"square",90,90,f,.15),blaster:(f,g)=>{let m=l(f,.1,g);c(m,"square",900,300,f,.1),h(m,"bandpass",1500,f,.1)},charge:(f,g)=>{let m=e.createGain();m.gain.setValueAtTime(.001,f),m.gain.exponentialRampToValueAtTime(g,f+.3),m.gain.exponentialRampToValueAtTime(.001,f+.35),m.connect(s),c(m,"sine",300,900,f,.35)},hurt:(f,g)=>{let m=l(f,.15,g);h(m,"lowpass",600,f,.15),c(m,"sine",80,80,f,.15)},downed:(f,g)=>c(l(f,.6,g),"sine",400,80,f,.6),clear:(f,g)=>{[523,659,784].forEach((m,x)=>c(l(f+x*.12,.15,g),"sine",m,m,f+x*.12,.15))},pickup:(f,g)=>{c(l(f,.06,g),"sine",880,880,f,.06),c(l(f+.07,.08,g),"sine",1320,1320,f+.07,.08)},thud:(f,g)=>{c(l(f,.32,g),"sine",60,30,f,.32),h(l(f,.28,g*.6),"lowpass",260,f,.28),h(l(f,.07,g*.3),"bandpass",900,f,.07)},bash:(f,g)=>{c(l(f,.2,g),"sine",120,40,f,.2),h(l(f,.06,g*.6),"bandpass",1800,f,.06)},rev:(f,g)=>{c(l(f,.25,g*.5),"sawtooth",180,260,f,.25),h(l(f,.25,g*.25),"bandpass",2600,f,.25)},cut:(f,g)=>{c(l(f,.3,g*.5),"sawtooth",150,105,f,.3),h(l(f,.3,g*.5),"bandpass",900,f,.3),h(l(f,.2,g*.3),"lowpass",400,f,.2)},finish:(f,g)=>{c(l(f,.4,g),"sine",70,26,f,.4),h(l(f,.3,g*.5),"lowpass",220,f,.3)},throw:(f,g)=>{d(l(f,.3,g*.6),"bandpass",400,1600,f,.3),c(l(f,.18,g*.5),"sawtooth",140,85,f+.02,.18)},clank:(f,g)=>{let m=l(f,.14,g*.6);c(m,"square",1450,1450,f,.14),c(m,"square",2230,2230,f,.14),h(l(f,.04,g*.5),"bandpass",3500,f,.04)},boom:(f,g)=>{c(l(f,.5,g),"sine",50,50,f,.5),c(l(f,.3,g*.7),"sine",110,40,f,.3),h(l(f,.45,g*.6),"lowpass",500,f,.45)},saunaOpen:(f,g)=>{d(l(f,.5,g*.7),"bandpass",700,3200,f,.5)},saunaClose:(f,g)=>{d(l(f,.3,g*.6),"bandpass",2600,600,f,.3),c(l(f+.28,.2,g),"sine",95,45,f+.28,.2)},revive:(f,g)=>{c(l(f,.2,g*.8),"triangle",440,440,f,.2),c(l(f+.17,.3,g),"triangle",660,660,f+.17,.3)},tobbleShot:(f,g)=>{c(l(f,.07,g),"sine",700,280,f,.07),h(l(f,.04,g*.5),"bandpass",2800,f,.04)},step:(f,g)=>{c(l(f,.1,g),"sine",95,50,f,.1),h(l(f,.07,g*.5),"lowpass",280,f,.07)}};return{play(f,g,m=0){let x=p[f];if(!(!x||!(g>0)||!r()))try{a(),s=o(m),x(e.currentTime,g)}catch{}},unlock(){if(r())try{a()}catch{}}}}function iv(){let n=!1;return{update(e,t,i){return i?(t&&(n=!0),e||(n=!1),{fire:n&&!!e,firePressed:!!t}):(n=!1,{fire:!1,firePressed:!1})},reset(){n=!1}}}var Eu=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),sv=Object.freeze(["regret",null,"pistol"]);function rv(n,e){return n>=e.perfectStart&&n<=e.perfectEnd?"perfect":n>=e.goodStart&&n<=e.goodEnd?"good":"jam"}function Sp(n,e,t,i){let s=Math.max(n.reloadTime,i.minReloadTime);return t==="perfect"?Math.min(e+n.perfectFinish,s):t==="good"?Math.min(e+n.goodFinish,s):t==="jam"?s+n.jamPenalty:s}var OA={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function ov({weapons:n=j.weapons,combat:e=j.combat,loadout:t=sv}={}){let i={},s=()=>{for(let g of t)g&&Object.assign(i[g]||(i[g]={}),{mag:Math.floor(n[g].mag),reserve:Math.floor(n[g].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,t.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>t[o.slot],l=(g,m)=>g[OA[m]||"spreadHip"],c=g=>g!=null&&o.reload===null&&o.switching<=0;function h(){let g=a(),m=n[g],x=i[g];return o.reload===null&&o.switching<=0&&x.mag<m.mag&&(m.infiniteReserve>0||x.reserve>0)}function d(){let g=a(),m=n[g];o.reload={id:g,t:0,press:null,end:Sp(m,0,"normal",e)},i[g].boost=!1,r.push({type:"reloadStart",id:g})}function u(){let{id:g,press:m}=o.reload,x=n[g],y=i[g],S=Math.max(0,x.mag-y.mag);if(x.infiniteReserve>0)y.mag+=S;else{let _=Math.min(S,y.reserve);y.mag+=_,y.reserve-=_}y.boost=m==="perfect",o.reload=null,r.push({type:"reloadDone",id:g,result:m||"normal"})}function p(g){g===o.slot||!t[g]||(o.reload=null,o.slot=g,o.switching=n[t[g]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:t[g]}))}function f(g){let m=t.length;for(let x=1;x<m;x++){let y=(o.slot+g*x+m*m)%m;if(t[y])return p(y)}}return o.current=a,o.canFire=c,o.spreadOf=g=>l(n[a()],g)+i[a()].bloom,o.update=function(m,x,y){r.length=0,(!(y>0)||!Number.isFinite(y))&&(y=0);let S=m.weapon;S==="next"?f(1):S==="prev"?f(-1):(S===1||S===2||S===3)&&p(S-1),o.switching-=y;for(let R of t)R&&(i[R].bloom=Math.max(0,i[R].bloom-n[R].bloomRecover*y));let _=a(),M=n[_],b=i[_];if(m.reload){if(o.reload===null)h()&&d();else if(o.reload.press===null){let R=o.reload,L=Math.max(M.reloadTime,e.minReloadTime);R.press=rv(R.t/L,M),R.end=Sp(M,R.t,R.press,e),r.push({type:"reloadPress",id:_,result:R.press})}}o.reload!==null&&(o.reload.t+=y,o.reload.t>=o.reload.end&&u()),m.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=y,m.fire||(o.dryLatched=!1),c(x)||(o.buffer=0);let v=M.auto>0,w=v?!!m.fire:o.buffer>0,C=1/Math.max(M.rate,e.minRate);for(o.cooldown-=y,w||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-C);w&&c(x)&&o.cooldown<=0;){if(b.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:_})),o.buffer=0,e.autoReload>0&&h()&&d();break}if(b.mag--,r.push({type:"shot",id:_,mult:b.boost?M.perfectDamage:1,spread:o.spreadOf(x)}),b.bloom=Math.min(M.bloomMax,b.bloom+M.bloomPerShot),o.cooldown+=C,b.mag===0&&(b.boost=!1),!v){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,t.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(g,m)=>{let x=i[g];!x||n[g].infiniteReserve>0||!(m>0)||(x.reserve=Math.max(x.reserve,Math.min(Math.floor(n[g].reserveMax),x.reserve+Math.floor(m))))},o.refill=()=>{for(let g of t)g&&(i[g].reserve=Math.floor(n[g].reserveMax))},o.set=(g,{mag:m,reserve:x}={})=>{i[g]&&(m!==void 0&&(i[g].mag=m),x!==void 0&&(i[g].reserve=x))},o}function av(n){if(n.grenadeAim||Object.hasOwn(_u,n.state))return null;if(n.state==="move")return n.aiming?"aim":n.firing?"hip":null;if(n.state==="cover"&&n.cover){if(n.cover.pop===1)return"aim";if(n.cover.blind===1)return"blind"}return null}var No=[0,0];function Au(n,e,t,i=j.combat,s=[0,0,0]){if(e==="blind"&&n.cover){let l=n.cover,c=l.edge,h=n.tuning.radius+n.coverTuning.gap,d=c.normal;if(c.kind==="low")Pi(c,l.t,No),s[0]=No[0]-d[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=No[1]-d[1]*(h+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;Pi(c,u<0?0:c.length,No);let p=n.coverTuning.endInset+i.blindReach;s[0]=No[0]+c.tangent[0]*u*p-d[0]*h,s[1]=i.muzzleUp,s[2]=No[1]+c.tangent[1]*u*p-d[1]*h}return s}let r=i.muzzleRight*Rr(n),o=Math.sin(t),a=Math.cos(t);s[1]=n.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=n.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=n.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!Lo(n.boxes,s,0)));l-=.25);return s}function UA(n,e,t,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(n[o]<t.min[o]||n[o]>t.max[o])return 1/0}else{let a=(t.min[o]-n[o])/e[o],l=(t.max[o]-n[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function wp(n,e,t,i,s=1/0){let r=n[0]-t[0],o=n[1]-t[1],a=n[2]-t[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let d=-l-Math.sqrt(h);return d>=0&&d<=s?d:1/0}function FA(n,e,t,i,s,r=1/0){let o=i[0]-t[0],a=i[1]-t[1],l=i[2]-t[2],c=n[0]-t[0],h=n[1]-t[1],d=n[2]-t[2],u=o*o+a*a+l*l,p=o*c+a*h+l*d,f=u>1e-12?Math.max(0,Math.min(1,p/u)):0,g=c-o*f,m=h-a*f,x=d-l*f;if(g*g+m*m+x*x<=s*s)return 0;let y=Math.min(wp(n,e,t,s,r),wp(n,e,i,s,r));if(u>1e-12){let S=o*e[0]+a*e[1]+l*e[2],_=e[0]*c+e[1]*h+e[2]*d,M=c*c+h*h+d*d,b=u-S*S;if(b>1e-12*u){let v=u*_-p*S,w=u*M-p*p-s*s*u,C=v*v-b*w;if(C>=0){let R=(-v-Math.sqrt(C))/b,L=p+R*S;R>=0&&R<=r&&L>0&&L<u&&R<y&&(y=R)}}}return y}function yn(n,e,t,i,s,{ignoreBox:r=-1}={}){let o=t,a="none",l=null,c=-1,h=!1;for(let d=0;d<i.length;d++){if(d===r)continue;let u=UA(n,e,i[d],o);u<=o&&u!==1/0&&(o=u,a="world",c=d,l=null,h=!0)}for(let d of s){if(!d.alive)continue;let{head:u,body:p}=d.shapes,f=wp(n,e,u.c,u.r,o);f<=o&&f!==1/0&&(o=f,a="head",l=d,c=-1,h=!0);let g=FA(n,e,p.a,p.b,p.r,o);g<=o&&g!==1/0&&(o=g,a="body",l=d,c=-1,h=!0)}return h?{t:o,point:[n[0]+e[0]*o,n[1]+e[1]*o,n[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],kind:"none",target:null,boxIndex:-1}}function Oo(n,e,t,i=[0,0,0]){if(!(e>0))return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*t(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*t(),l=Math.abs(n[1])<.9?0:1,c=l===0?1:0,h=n[1]*0-n[2]*c,d=n[2]*l-n[0]*0,u=n[0]*c-n[1]*l,p=Math.hypot(h,d,u);h/=p,d/=p,u/=p;let f=n[1]*u-n[2]*d,g=n[2]*h-n[0]*u,m=n[0]*d-n[1]*h,x=Math.cos(a)*o,y=Math.sin(a)*o;return i[0]=n[0]*r+h*x+f*y,i[1]=n[1]*r+d*x+g*y,i[2]=n[2]*r+u*x+m*y,i}function lv({lens:n,view:e,muzzle:t,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let m=Oo(e,i,l),x=yn(n,m,s,r,o,{ignoreBox:a}),y=[x.point[0]-t[0],x.point[1]-t[1],x.point[2]-t[2]],S=Math.hypot(y[0],y[1],y[2]),_=S>1e-9?[y[0]/S,y[1]/S,y[2]/S]:[m[0],m[1],m[2]];return{from:t,dir:_,hit:x}}let h=Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),d=yn(n,e,s+h,r,o,{ignoreBox:a}),u=d.kind==="none"?[n[0]+e[0]*s,n[1]+e[1]*s,n[2]+e[2]*s]:d.point,p=[u[0]-t[0],u[1]-t[1],u[2]-t[2]],f=Math.hypot(p[0],p[1],p[2]);f>1e-9?(p[0]/=f,p[1]/=f,p[2]/=f):(p[0]=e[0],p[1]=e[1],p[2]=e[2]);let g=Oo(p,i,l);return{from:t,dir:g,hit:yn(t,g,s,r,o)}}var Et=Object.freeze({head:Object.freeze({cy:Ht.neckY+Ht.head.centerY,r:Ht.head.rx}),body:Object.freeze({ay:Ht.ankleHeight,by:Ht.neckY,r:Math.max(...Ht.torso.shirt.map(n=>n[0]))})});function cv(n,e=j.combat.hitPad){let[t,i,s]=n.pos,r=n.shapes;r.head.c[0]=t,r.head.c[1]=i+Et.head.cy,r.head.c[2]=s,r.head.r=Et.head.r+e,r.body.r=Et.body.r+e,r.body.a[0]=t,r.body.a[1]=i+Et.body.ay,r.body.a[2]=s,r.body.b[0]=t,r.body.b[1]=i+Et.body.by,r.body.b[2]=s}function hv({id:n,pos:e,yaw:t=0,rail:i=null},s=j.dummy){let r={id:n,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:t,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:Et.head.r},body:{a:[0,0,0],b:[0,0,0],r:Et.body.r}}};return cv(r),r}function kA(n,e){let t=n%(4*e);return t<e?t:t<3*e?2*e-t:t-4*e}function uv(n,e,t=j.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!n.alive)n.respawnT-=e,n.respawnT<=0&&(n.alive=!0,n.respawnT=0,n.health=t.health,n.railT=0,n.pos[0]=n.home[0],n.pos[1]=n.home[1],n.pos[2]=n.home[2]);else if(n.rail&&n.rail.half>0){n.railT+=e*Math.max(0,t.railSpeed);let i=kA(n.railT,n.rail.half),s=n.rail.axis==="x"?0:2;n.pos[0]=n.home[0],n.pos[2]=n.home[2],n.pos[s]=n.home[s]+i}cv(n)}function dv(n,e,t=j.dummy){return!n.alive||!(e>0)?null:(n.health-=e,n.health>0?"hit":(n.health=0,n.alive=!1,n.respawnT=t.respawnTime,"kill"))}function Tp(n,e,t=1){return e!=="head"&&e!=="body"?0:n.damage*t*(e==="head"?n.headMult:1)}function fv(n,e,t){for(let i of e)if(Math.hypot(n[0]-i.pos[0],n[2]-i.pos[2])<=t)return!0;return!1}function pv(n){let e=new Float32Array(n),t=new Uint8Array(n),i=0;return{ages:e,alive:s=>t[s]===1,spawn(){let s=-1;for(let r=0;r<n;r++){let o=(i+r)%n;if(!t[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<n;r++)e[r]>e[s]&&(s=r)}return t[s]=1,e[s]=0,i=(s+1)%n,s},clear(){t.fill(0)},update(s,r){for(let o=0;o<n;o++)t[o]&&(e[o]+=s,e[o]>r(o)&&(t[o]=0))}}}var BA=new B(0,0,1);function mv(n,e=()=>j.feedback){let t=new Zt,i=(T=1)=>(Math.random()*2-1)*T;function s(T,I,E){let N=new hs(T,It({color:I,rim:0}),E);N.frustumCulled=!1,N.count=E,t.position.set(0,-1e3,0),t.scale.setScalar(0),t.updateMatrix();for(let k=0;k<E;k++)N.setMatrixAt(k,t.matrix);return n.add(N),{mesh:N,pool:pv(E),pos:new Float32Array(E*3),vel:new Float32Array(E*3),aux:new Float32Array(E*4)}}let r=s(new vo(.5,0),H.playerOrange,8),o=s(new xt(1,1,1),H.playerOrange,24),a=s(new vo(.5,0),H.gel,8),l=s(new xt(1,1,1),H.gel,24),c=s(new xt(.05,.05,.05),H.cream,48),h=s(new gr(.5,0),H.gel,96),d=s(new xt(.16,.2,.012),H.cream,48),u=s(new gr(.5,0),H.cream,40),p=s(new gr(.5,1),H.planet,4),f=s(new xt(1,1,1),H.playerOrange,16),g=new B;function m(T,I){t.updateMatrix(),T.mesh.setMatrixAt(I,t.matrix),T.mesh.instanceMatrix.needsUpdate=!0}let x=(T,I)=>{t.position.set(0,-1e3,0),t.scale.setScalar(0),t.quaternion.identity(),m(T,I)},y=(T,I,E,N,k)=>{T.pos[I*3]=E,T.pos[I*3+1]=N,T.pos[I*3+2]=k},S=(T,I,E,N,k)=>{T.vel[I*3]=E,T.vel[I*3+1]=N,T.vel[I*3+2]=k};function _(T,I,E,N,k){let V=E[0]+i(N),te=E[1]+i(N),X=E[2]+i(N),Q=Math.hypot(V,te,X)||1;S(T,I,V/Q*k*(.5+Math.random()*.5),te/Q*k*(.5+Math.random()*.5),X/Q*k*(.5+Math.random()*.5))}let M=[];function b(T,I,E,N){M.push({k:T,life:I,shown:new Uint8Array(T.pool.ages.length),step(k){let V=e().gravity,te=T;for(let X=0;X<te.pool.ages.length;X++)if(te.pool.alive(X)){te.vel[X*3+1]-=V*k;for(let Q=0;Q<3;Q++)te.pos[X*3+Q]+=te.vel[X*3+Q]*k}},draw(k){let V=1-T.pool.ages[k]/I();t.position.set(T.pos[k*3],T.pos[k*3+1],T.pos[k*3+2]),t.scale.setScalar(E(k)*Math.max(0,V)),N?t.rotation.set(T.aux[k*4]+T.pool.ages[k]*7,T.aux[k*4+1]+T.pool.ages[k]*5,T.aux[k*4+2]):t.quaternion.identity(),m(T,k)}})}b(c,()=>e().sparkTime,()=>1,!1),b(h,()=>e().gelTime,T=>.05+h.aux[T*4+3]*.07,!1),b(d,()=>e().receiptTime,()=>1,!0);function v(T,I){M.push({k:T,shown:new Uint8Array(T.pool.ages.length),life:()=>e().flashTime,step(){},draw(E){let N=1-T.pool.ages[E]/e().flashTime;t.position.set(T.pos[E*3],T.pos[E*3+1],T.pos[E*3+2]),t.scale.setScalar(e()[I]*(.5+.5*Math.max(0,N))),t.rotation.set(T.aux[E*4],T.aux[E*4+1],T.aux[E*4+2]),m(T,E)}})}function w(T,I,E,N=1){M.push({k:T,shown:new Uint8Array(T.pool.ages.length),life:()=>e()[I],step(){},draw(k){let V=Math.max(0,1-T.pool.ages[k]/e()[I]),te=e()[E]*N*V,X=T.aux[k*4];t.position.set(T.pos[k*3],T.pos[k*3+1],T.pos[k*3+2]),t.quaternion.setFromUnitVectors(BA,g.set(T.vel[k*3],T.vel[k*3+1],T.vel[k*3+2])),t.scale.set(te,te,X),m(T,k)}})}let C=.9;M.push({k:u,shown:new Uint8Array(u.pool.ages.length),life:()=>C,step(T){for(let I=0;I<u.pool.ages.length;I++)if(u.pool.alive(I))for(let E=0;E<3;E++)u.pos[I*3+E]+=u.vel[I*3+E]*T},draw(T){let I=u.pool.ages[T]/C;t.position.set(u.pos[T*3],u.pos[T*3+1],u.pos[T*3+2]),t.scale.setScalar(u.aux[T*4+3]*(.5+I)*(1-I*I*I)),t.quaternion.identity(),m(u,T)}}),M.push({k:p,shown:new Uint8Array(p.pool.ages.length),life:()=>e().blastTime,step(){},draw(T){let I=Math.min(p.pool.ages[T]/Math.max(e().blastTime,.001),1),E=1-(1-Math.min(I/.6,1))**2,N=I>.6?1-(I-.6)/.4:1;t.position.set(p.pos[T*3],p.pos[T*3+1],p.pos[T*3+2]),t.scale.setScalar(Math.max(e().blastSize*E*N,.001)),t.rotation.set(0,p.aux[T*4],0),m(p,T)}}),w(f,"tracerTime","tracerWidth",.6),v(r,"flashSize"),v(a,"enemyFlashSize"),w(o,"tracerTime","tracerWidth"),w(l,"enemyTracerTime","enemyTracerWidth");let R=(T,I,E)=>{let N=T.pool.spawn();y(T,N,I[0]+E[0]*.1,I[1]+E[1]*.1,I[2]+E[2]*.1),T.aux[N*4]=i(3),T.aux[N*4+1]=i(3),T.aux[N*4+2]=i(3)},L=(T,I,E)=>{let N=E[0]-I[0],k=E[1]-I[1],V=E[2]-I[2],te=Math.hypot(N,k,V);if(!(te>1e-6))return;let X=T.pool.spawn();y(T,X,I[0]+N/2,I[1]+k/2,I[2]+V/2),S(T,X,N/te,k/te,V/te),T.aux[X*4]=te};return{flash(T,I){R(r,T,I)},tracer(T,I){L(o,T,I)},friendlyTracer(T,I){L(f,T,I)},steam(T){let I=u.pool.spawn();y(u,I,T[0],T[1],T[2]),S(u,I,i(.15),.7+Math.random()*.4,i(.15)),u.aux[I*4+3]=.16+Math.random()*.1},blast(T){let I=p.pool.spawn();y(p,I,T[0],T[1]+.3,T[2]),p.aux[I*4]=Math.random()*6;for(let E=0;E<6;E++){let N=u.pool.spawn(),k=E/6*Math.PI*2+Math.random();y(u,N,T[0],T[1]+.2,T[2]),S(u,N,Math.cos(k)*2.2,.8+Math.random()*.6,Math.sin(k)*2.2),u.aux[N*4+3]=.35+Math.random()*.2}this.gel([T[0],T[1]+.3,T[2]],[0,1,0],12)},enemyFlash(T,I){R(a,T,I)},enemyTracer(T,I){L(l,T,I)},spark(T,I){for(let E=0;E<e().sparkCount;E++){let N=c.pool.spawn();y(c,N,T[0],T[1],T[2]),_(c,N,I,.9,3)}},gel(T,I,E=e().gelCount){for(let N=0;N<E;N++){let k=h.pool.spawn();y(h,k,T[0],T[1],T[2]),_(h,k,I,1.2,e().gelSpeed),h.aux[k*4+3]=Math.random()}},receipts(T,I=e().receiptCount){for(let E=0;E<I;E++){let N=d.pool.spawn();y(d,N,T[0],T[1],T[2]),_(d,N,[0,1,0],1.5,e().gelSpeed),d.aux[N*4]=i(3),d.aux[N*4+1]=i(3),d.aux[N*4+2]=i(3)}},clear(){for(let T of M){T.k.pool.clear();for(let I=0;I<T.shown.length;I++)T.shown[I]&&(x(T.k,I),T.shown[I]=0)}},update(T){if(T>0)for(let I of M){I.step(T);let{pool:E}=I.k;E.update(T,I.life);for(let N=0;N<E.ages.length;N++)E.alive(N)?(I.draw(N),I.shown[N]=1):I.shown[N]&&(x(I.k,N),I.shown[N]=0)}}}}function zA(n,e,t){let i=Math.PI/180;return t/2*Math.tan(n*i/2)/Math.tan(e*i/2)}var HA=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),Ep=n=>n<0?0:n>1?1:n;function gv({arsenal:n,stance:e,firing:t,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:d="",hours:u="",bark:p=null,banner:f=null,grenades:g=null,action:m=null,weapons:x=j.weapons,combat:y=j.combat,feedback:S=j.feedback}){let _=n.current(),M=x[_],b=n.ammo[_],v=n.reload,w=s==="pad"?"RB":"R",C={show:!1,marker:0,good:[M.goodStart,M.goodEnd],perfect:[M.perfectStart,M.perfectEnd],flash:c,prompt:""};if(v){let E=Math.max(M.reloadTime,y.minReloadTime);C={...C,show:!0,marker:Ep(v.t/E),prompt:v.press===null?`${w} again on the bright zone`:""}}else b.mag<=0&&(C.prompt=`${w} to reload`);let R=b.mag<=Math.max(0,S.lowAmmoFrac)*M.mag,L=M.infiniteReserve<=0&&b.reserve<=0,T={show:!1,text:"",kind:""};!v&&R&&!f&&(T.show=!0,L&&b.mag<=0?(T.text="NO AMMO",T.kind="none"):L?(T.text="LOW AMMO",T.kind="low"):b.mag<=0?(T.text=`EMPTY \u2014 RELOAD  ${w}`,T.kind="empty"):(T.text=`RELOAD  ${w}`,T.kind="low"));let I=e==="aim";return{weapon:Eu[_].name,mag:b.mag,reserve:M.infiniteReserve>0?"\u221E":b.reserve,reticle:{show:I||!!t||i,gap:S.reticleMinGap+zA(r,o,a),opacity:i&&!I?S.coverReticleOpacity:1},reload:C,alert:T,hit:{show:!!l,kind:l||null},faceShow:!!h&&!f&&!h.downed.show,face:h,objective:d,hours:u||"",bark:p,banner:f,grenades:Number.isFinite(g)?g:null,action:m&&m.text?{text:m.text,hold:Number.isFinite(m.hold)?Ep(m.hold):null}:null}}function xv(n=document.body){let e=(Z,fe,Be,W)=>{let Te=document.createElement(Z);return fe&&(Te.className=fe),W!==void 0&&(Te.textContent=W),Be&&Be.appendChild(Te),Te},t=e("div","",n);t.id="cr-hud";let i={};for(let Z of["top","right","bottom","left"])i[Z]=e("div",`cr-edge cr-edge-${Z}`,t);let s="http://www.w3.org/2000/svg",r=(Z,fe,Be)=>{let W=document.createElementNS(s,Z);for(let Te of Object.keys(fe))W.setAttribute(Te,fe[Te]);return Be&&Be.appendChild(W),W},o=e("div","cr-face",t),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),d=e("div","cr-banner",t),u=e("div","cr-banner-title",d),p=e("div","cr-banner-hint",d),f=e("i","cr-ring",d),g=e("div","cr-action",t),m=e("span","cr-action-text",g),x=e("i","cr-ring",g),y=e("div","cr-objective",t),S=e("div","cr-hours",t),_=e("div","cr-bark",t),M=e("span","cr-bark-who",_),b=e("span","cr-bark-text",_),v=e("div","cr-weapon",t),w=e("div","cr-weapon-name",v),C=e("div","cr-ammo",v),R=e("div","cr-kb",v),L=e("div","cr-prompt",v),T=e("div","cr-reload",v),I=e("div","cr-zone cr-zone-good",T),E=e("div","cr-zone cr-zone-perfect",T),N=e("div","cr-marker",T),k=e("div","cr-result",v),V=e("div","cr-alert",t),te=e("div","cr-reticle",t),X=["up","down","left","right"].map(Z=>e("div",`cr-arm cr-arm-${Z}`,te)),Q=e("div","cr-hit",t);e("i","cr-hit-a",Q),e("i","cr-hit-b",Q),e("i","cr-hit-ring",Q);let $={},Y=(Z,fe,Be)=>{$[Z]!==fe&&($[Z]=fe,Be(fe))},_e=Z=>`${(Z*100).toFixed(1)}%`,J=(Z,[fe,Be])=>{Z.style.left=_e(fe),Z.style.width=_e(Math.max(0,Be-fe))};return{render(Z){Y("weapon",Z.weapon,W=>{w.textContent=W}),Y("ammo",`${Z.mag}|${Z.reserve}`,()=>{C.textContent=`${Z.mag} / ${Z.reserve}`}),Y("prompt",Z.reload.prompt,W=>{L.textContent=W}),Y("reload.show",Z.reload.show,W=>{T.hidden=!W}),Y("good",`${Z.reload.good}`,()=>J(I,Z.reload.good)),Y("perfect",`${Z.reload.perfect}`,()=>J(E,Z.reload.perfect)),Y("marker",Math.round(Z.reload.marker*500),()=>{N.style.left=_e(Z.reload.marker)}),Y("flash",Z.reload.flash,W=>{k.textContent=W&&HA[W]||"",k.dataset.kind=W||""}),Y("alert",Z.alert.show?`${Z.alert.kind}|${Z.alert.text}`:"",()=>{V.hidden=!Z.alert.show,V.textContent=Z.alert.text,V.dataset.kind=Z.alert.kind}),Y("ret.show",Z.reticle.show,W=>{te.hidden=!W}),Y("ret.op",Math.round(Z.reticle.opacity*100),()=>{te.style.opacity=Z.reticle.opacity.toFixed(2)}),Y("ret.gap",Math.round(Z.reticle.gap),W=>{X.forEach(Te=>Te.style.setProperty("--gap",`${W}px`))});let fe=Z.face;if(Y("face.show",!!Z.faceShow,W=>{o.hidden=!W}),fe){Y("face.op",Math.round(fe.face.opacity*100),()=>{o.style.opacity=fe.face.opacity.toFixed(2)}),Y("face.frown",Math.round(fe.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*fe.face.frown).toFixed(1)} 70 72`)}),Y("face.fill",Math.round(fe.face.fill*50),()=>{let W=92*fe.face.fill;c.setAttribute("y",(96-W).toFixed(1)),c.setAttribute("height",W.toFixed(1))});for(let W of Object.keys(i))Y(`edge.${W}`,Math.round(fe.edges[W]*50),()=>{i[W].style.opacity=fe.edges[W].toFixed(2)})}Y("kb",Z.grenades===null?"":String(Z.grenades),W=>{R.hidden=W==="",R.textContent=`KETTLEBELLS ${W}`}),Y("action",Z.action?Z.action.text:"",W=>{g.hidden=!Z.action,m.textContent=W}),Y("action.hold",Z.action&&Z.action.hold!==null?Math.round(Z.action.hold*100):-1,W=>{x.hidden=W<0,x.style.setProperty("--hold",`${Math.max(W,0)*3.6}deg`)});let Be=Z.banner&&Z.banner.hold!==void 0&&Z.banner.hold!==null?Math.round(Ep(Z.banner.hold)*100):-1;Y("banner.hold",Be,W=>{f.hidden=W<0,f.style.setProperty("--hold",`${Math.max(W,0)*3.6}deg`)}),Y("banner",Z.banner?`${Z.banner.title}|${Z.banner.hint}`:"",W=>{d.hidden=!Z.banner,Z.banner&&(u.textContent=Z.banner.title,p.textContent=Z.banner.hint)}),Y("objective",Z.objective||"",W=>{y.textContent=W,y.hidden=!W}),Y("hours",Z.hours||"",W=>{S.textContent=W,S.hidden=!W}),Y("bark",Z.bark?`${Z.bark.speaker}|${Z.bark.text}`:"",()=>{_.hidden=!Z.bark,Z.bark&&(M.textContent=Z.bark.speaker,M.style.color=Z.bark.color||"",b.textContent=Z.bark.text)}),Y("hit",Z.hit.show?Z.hit.kind:"",W=>{Q.hidden=!W,Q.dataset.kind=W})}}}function vv(n){let e=Wi(Ht),t=Xi(e),i=new mt;i.name=`dummy-${n.id}`,i.add(e.root),i.add(e.shadow);let s=!!(n.rail&&n.rail.half>0),r=n.yaw,o=n.pos[0],a=n.pos[2],l="live",c=0;s&&t.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function d(u){i.position.set(n.pos[0],n.pos[1],n.pos[2]);let p=n.pos[0]-o,f=n.pos[2]-a;s&&p*p+f*f>1e-8&&(r=Math.atan2(p,f)),o=n.pos[0],a=n.pos[2],i.rotation.y=r;let g=j.feedback;if(l==="burst"){c+=u;let m=g.dummyBurstTime>0?Math.min(c/g.dummyBurstTime,1):1;h(1+.2*m),m>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=u;let m=g.dummyRespawnPop>0?Math.min(c/g.dummyRespawnPop,1):1;h(m),m>=1&&(l="live")}l!=="gone"&&(t.update(s?u*Math.min(Math.max(j.dummy.railSpeed/Vi,.3),3):u),e.update(u))}return{group:i,update:d,hit(){(l==="live"||l==="pop")&&t.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var yv="#f3efe6";function _v(n){for(let e of Object.values(n))e&&typeof e=="object"&&_v(e);return Object.freeze(n)}var bv=_v({...structuredClone(Ht),name:"doc-placeholder",colors:{...Ht.colors,hair:H.teal,shirt:yv,collar:yv},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Ht.face,brow:"uni",fixedSmile:0}});function Cu(n){return Bt(n.map(([e,t,i,s,r,o])=>new xt(e,t,i).translate(s,r,o)),!1)}function Cr(n,e,t){let i=new lt(Kn(e),It({color:t}));return xn(i),n.add(i),i}var Uo=.09;function GA(){let n=new mt;n.name="disc",n.position.set(0,-.05,.22),Cr(n,new Kt(Uo,Uo,.022,20),H.playerOrange),Cr(n,new Kt(Uo-.018,Uo-.018,.034,20),H.cream);let e=[];for(let t=0;t<6;t++){let i=t/6*Math.PI*2;e.push(new xt(.02,.026,.05).rotateY(i).translate(Math.sin(i)*(Uo-.03),0,Math.cos(i)*(Uo-.03)))}return Cr(n,Bt(e,!1),H.ink),n}function VA(){let n=new mt;return n.name="rifle",Cr(n,Cu([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),H.playerOrange),Cr(n,Cu([[.05,.12,.06,0,-.07,0]]),H.ink),n.add(GA()),n}function WA(){let n=new mt;return n.name="pistol",Cr(n,Cu([[.045,.06,.25,0,.04,.075]]),H.playerOrange),Cr(n,Cu([[.04,.1,.05,0,-.04,0]]),H.ink),n}var XA={regret:[0,.06,.45],pistol:[0,.04,.2]},YA=new B(0,0,1),zD=new B,Ru=new B;function Mv(){let n=new mt;n.name="gun";let e={regret:VA(),pistol:WA()};n.add(e.regret,e.pistol);let t="regret";e.pistol.visible=!1;let i=new B,s=new B(0,0,1),r=e.regret.getObjectByName("disc"),o=1/0;function a(h){if(!(!e[h]||h===t)){t=h;for(let d of Object.keys(e))e[d].visible=d===h}}function l(h,d){i.set(h[0],h[1],h[2]),s.set(d[0],d[1],d[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),n.quaternion.setFromUnitVectors(YA,s),c()}function c(){let h=j.feedback,d=Math.max(h.gunSquashTime,1e-6),u=o>=0&&o<d?Math.sin(Math.PI*o/d):0,p=h.gunSquash*u;n.scale.set(1+p/2,1+p/2,1-p),n.position.copy(i).addScaledVector(s,-h.gunKick*u)}return{group:n,setWeapon:a,place:l,shot(){o=0,c()},update(h,d=0){o+=h>0?h:0,h>0&&d&&(r.rotation.y+=d*h),c()},disc:r,tip(h=[0,0,0]){let d=XA[t];return n.updateMatrix(),Ru.set(d[0],d[1],d[2]).applyMatrix4(n.matrix),h[0]=Ru.x,h[1]=Ru.y,h[2]=Ru.z,h}}}var Sv=8,wv=64,Fo=.12;function Ap(){let n=(s,r)=>{s.deleteAttribute("uv");let o=new Qe(r),a=s.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=o.r,l[c*3+1]=o.g,l[c*3+2]=o.b;return s.setAttribute("color",new Tt(l,3)),s},e=n(new Jt(Fo,14,10).toNonIndexed(),H.ink),t=[new xt(.03,.1,.03).translate(-.055,Fo+.04,0),new xt(.03,.1,.03).translate(.055,Fo+.04,0),new xt(.14,.03,.03).translate(0,Fo+.1,0)].map(s=>n(s.toNonIndexed(),H.playerOrange)),i=n(new xt(.07,.07,.012).translate(0,0,Fo-.002).toNonIndexed(),H.cream);return Bt([e,...t,i],!1)}function Tv(n){let e=new hs(Ap(),It({vertexColors:!0,rim:.15}),Sv);e.name="kettlebells",e.frustumCulled=!1,e.count=0,n.add(e);let t=new Zt,i=0,s=new Float32Array(wv*3),r=new Lt;r.setAttribute("position",new Tt(s,3)),r.setDrawRange(0,0);let o=new Fa({color:H.playerOrange,dashSize:j.feedback.arcDot,gapSize:j.feedback.arcDot}),a=new ya(r,o);a.name="kettlebellArc",a.frustumCulled=!1,a.visible=!1,n.add(a);let l=new _a(r,new po({color:H.playerOrange,size:5,sizeAttenuation:!1,toneMapped:!1}));l.name="kettlebellArcDots",l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new lt(new xr(.88,1,40).rotateX(-Math.PI/2),new Sn({color:H.playerOrange,side:Tn,depthWrite:!1,toneMapped:!1}));return c.name="kettlebellRing",c.visible=!1,n.add(c),{mesh:e,line:a,ring:c,dots:l,update(h,d,u=0){i+=u>0?u:0;let p=Math.min(h.length,Sv),f=j.grenade.ballRadius/Fo;e.count=p;for(let g=0;g<p;g++){let m=h[g],x=m.prevPos[0]+(m.pos[0]-m.prevPos[0])*d,y=m.prevPos[1]+(m.pos[1]-m.prevPos[1])*d,S=m.prevPos[2]+(m.pos[2]-m.prevPos[2])*d,_=m.fuse<j.associate.diveWarn?1+.18*(.5+.5*Math.sin(i*40)):1;t.position.set(x,y,S),t.rotation.set(S*2.5,0,-x*2.5),t.scale.setScalar(f*_),t.updateMatrix(),e.setMatrixAt(g,t.matrix)}e.instanceMatrix.needsUpdate=!0},arc(h,d,u,p){if(!p||!(d>1)){a.visible=!1,l.visible=!1,c.visible=!1;return}let f=Math.min(d,wv);for(let g=0;g<f;g++)s[g*3]=h[g][0],s[g*3+1]=h[g][1],s[g*3+2]=h[g][2];r.attributes.position.needsUpdate=!0,r.setDrawRange(0,f),o.dashSize=o.gapSize=Math.max(j.feedback.arcDot,.001),a.computeLineDistances(),a.visible=!0,l.visible=!0,u?(c.position.set(u[0],u[1]+.03,u[2]),c.scale.setScalar(j.grenade.killRadius),c.visible=!0):c.visible=!1},reset(){e.count=0,e.instanceMatrix.needsUpdate=!0,a.visible=!1,l.visible=!1,c.visible=!1}}}var Iu=Math.PI*2,$i=(n,e,t)=>n<e?e:n>t?t:n,qA=n=>n-Iu*Math.round(n/Iu),Rv=.001,Rp=.5,Cp=.3;function $A(n,e=n.tuning||j.move){let t=n.state,i=n.speed();if(t==="bash")return{name:"bash",rate:yt.bash.duration/Math.max(j.melee.bashTime,.001)};if(t==="rev")return{name:"aim",rate:1};if(t==="execute")return{name:"bash",rate:1,loop:!0};if(t==="reviveTobble")return{name:"revive",rate:1};if(t==="downed")return{name:"crawl",rate:$i(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(t==="roll")return{name:"roll",rate:yt.roll.duration/e.rollTime};if(t==="sprint")return{name:"sprint",rate:$i(i/Vi,e.sprintRateMin,e.sprintRateMax)};if(t==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:$i(i/Vi,e.runRateMin,e.runRateMax)};if(n.grenadeAim)return{name:"throw",rate:0,at:Cp*yt.throw.duration};if(n.aiming||n.firing)return{name:"aim",rate:1}}if(t==="coverSlide")return{name:_s(n).kind==="low"?"coverLow":"coverTall",rate:1};if(t==="coverSwap")return{name:"sprint",rate:$i(i/Vi,e.sprintRateMin,e.sprintRateMax)};if(t==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||j.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":Rr(n)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:$i(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return t==="vault"?{name:"vault",rate:yt.vault.duration/Math.max((n.coverTuning||j.cover).vaultTime,Rv)}:{name:"idle",rate:1}}function ZA(n){let e=n.state==="cover"||n.state==="coverSlide"?_s(n):null;return!e||e.kind!=="low"?0:n.state==="coverSlide"?$i(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?$i(1-Math.max(n.cover.pop,n.cover.blind||0),0,1):0}var KA=(n,e)=>4*e*n*(1-n),JA=(n,e,t)=>n>=0&&n<t?e*Math.sin(Math.PI*n/t):0;function Pp(n){if(n<=.08)return 0;if(n>=.9)return Iu;let e=(n-.08)/.82;return Iu*e*e*(3-2*e)}var Ev=.95,Av=.6,bs=new B,jn=[0,0,1],Pu=[0,0,0];function Cv(n,e=bv){let t=Wi(e),i=Xi(t),s=new mt;s.name="player";let r=new mt;r.position.y=Rp,t.root.position.y=-Rp,r.add(t.root),s.add(r),s.add(t.shadow);let o=t.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=Mv();s.add(l.group);let c=new lt(Ap(),It({vertexColors:!0,rim:.15}));c.name="kettlebellInHand",c.position.set(0,.1,0),c.visible=!1,a.R.add(c);let h=0,d=1/0,u=t.root.getObjectByName("head"),p=new B,f=!0;function g(I,E,N){u.getWorldPosition(p),p.y+=t.spec.head.centerY;let k=Math.hypot(I[0]-p.x,I[1]-p.y,I[2]-p.z);return f=ux(k,f,E,N),u.visible=f,f}let m=0,x=0,y=0,S="",_=0,M=-1,b=n.slams||0,v=1/0;function w(I,E,N){let k=n.pos,V=n.prevPos,te=n.coverTuning||j.cover,X=ZA(n);m=te.popTime>0?Math.max(X,m+$i(X-m,-E/te.popTime,E/te.popTime)):X;let Q=n.state==="cover"&&n.cover&&n.cover.edge.kind==="low"?$i(n.cover.blind||0,0,1):0;if(X>0||Q>0){let Le=_s(n);x=Le.normal[0],y=Le.normal[1]}let $=m*te.lowDrawBack+Q*te.blindDrawBack;s.position.set(V[0]+(k[0]-V[0])*I+x*$,V[1]+(k[1]-V[1])*I,V[2]+(k[2]-V[2])*I+y*$),s.rotation.y=n.prevFacing+qA(n.facing-n.prevFacing)*I;let Y=$A(n),_e=h>0;_e&&(Y={name:"throw",rate:yt.throw.duration*(1-Cp)/Math.max(j.grenade.throwTime,.001),at:Cp*yt.throw.duration},h-=E);let J=_e?"throw!":Y.name;J!==S||n.entries!==M?(i.play(Y.name,Y.name==="roll"?{fade:.05}:Y.at!==void 0?{fade:.06,at:Y.at}:void 0),S=J,M=n.entries,_=0):Y.loop&&(_+=E*Y.rate,_>=yt[Y.name].duration&&(_-=yt[Y.name].duration,i.play(Y.name,{fade:0}))),i.update(E*Y.rate,Y.rate===0?E:void 0),t.update(E);let Z=j.feedback,fe=Math.max(Z.gunSquashTime,1e-6);d=N&&N.shot?E:d+E;let Be=d<fe?Z.bodyKick*Math.sin(Math.PI*d/fe):0;r.rotation.x=(n.state==="roll"?Pp(n.stateTime/n.tuning.rollTime):0)-Be,(n.slams||0)!==b?(b=n.slams||0,v=0):v+=E;let W=n.state==="vault"?KA($i(n.stateTime/Math.max(te.vaultTime,Rv),0,1),te.vaultHop):0,Te=JA(v,te.slamSquash,te.slamSquashTime);r.scale.set(1+Te/2,1-Te,1+Te/2),r.position.y=Rp*(1-Te)+W,c.visible=!!(N&&N.kettlebell)&&!_e,c.scale.setScalar(j.grenade.ballRadius/.12),C(Y.name,E,N)}function C(I,E,N){if(s.updateMatrixWorld(!0),(I==="coverBlindTallL"?a.L:a.R).getWorldPosition(bs),s.worldToLocal(bs),N&&N.stance&&I==="coverBlindLow")jn[0]=0,jn[1]=Math.sin(Ev),jn[2]=Math.cos(Ev);else if(n.state==="bash"||n.state==="rev"||n.state==="execute")jn[0]=0,jn[1]=-.05,jn[2]=1;else if(N&&N.stance&&N.dir){let V=Math.cos(s.rotation.y),te=Math.sin(s.rotation.y);jn[0]=N.dir[0]*V-N.dir[2]*te,jn[1]=N.dir[1],jn[2]=N.dir[0]*te+N.dir[2]*V}else jn[0]=0,jn[1]=-Math.sin(Av),jn[2]=Math.cos(Av);N&&N.weapon&&l.setWeapon(N.weapon),l.place([bs.x,bs.y,bs.z],jn),N&&N.shot&&l.shot(),l.update(E,n.state==="rev"||n.state==="execute"?j.melee.cutterSpin:0),l.group.visible=n.state!=="roll"&&n.state!=="downed"&&n.state!=="reviveTobble"&&!c.visible&&h<=0}function R(I=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(Pu),bs.set(Pu[0],Pu[1],Pu[2]).applyMatrix4(s.matrixWorld),I[0]=bs.x,I[1]=bs.y,I[2]=bs.z,I}function L(){t.dispose(),t.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:w,dispose:L,rig:t,anim:i,fadeHeadFor:g,gun:l,gunTip:R,throwNow:()=>{h=Math.max(j.grenade.throwTime,.001)},kettlebell:c}}var Lu=new Set(["telegraph","burst"]),ko=(n,e,t)=>n<e?e:n>t?t:n,jA=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),Pv=.5,QA=-.6,e2=n=>n.point&&n.point.kind==="tall"?"tall":"low";function t2(n){let e=e2(n)==="tall";switch(n.state){case"run":return"run";case"flinch":case"stagger":case"executed":return"flinch";case"downed":return"crawl";case"kneel":return"revive";case"dive":return"roll";case"spawn":return"idle";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let t=n.point,i=Ci(-t.normal[0],-t.normal[1]);return t.tangent[0]*t.end*Math.cos(i)-t.tangent[1]*t.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function n2(n){if((n.state==="idle"||n.state==="cover"||n.state==="reload"||n.state==="flinch"||n.state==="suppress")&&n.point)return Ci(-n.point.normal[0],-n.point.normal[1]);if(Lu.has(n.state))return Ci(n.aim[0]-n.pos[0],n.aim[2]-n.pos[2]);if(n.state==="run"&&n.path&&n.path[n.pathI]){let e=n.path[n.pathI];if(Math.hypot(e[0]-n.pos[0],e[1]-n.pos[2])>1e-6)return Ci(e[0]-n.pos[0],e[1]-n.pos[2])}return n.yaw}function i2(n){return n.state==="dead"||!n.alive?"dead":Lu.has(n.state)?"angry":n.state==="flinch"||n.state==="stagger"||n.state==="downed"||n.state==="executed"||n.state==="dive"?"scared":"smug"}var Dv=.03,Ip=[0,.06,.32];function s2(){let n=new mt;n.name="blaster";let t=Bt([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new xt(r,o,a).translate(l,c,h)),!1),i=new lt(Kn(t),It({color:H.glorpPurple}));xn(i),n.add(i);let s=new lt(new Jt(Dv,10,8),new Sn({color:H.gel}));return s.name="emitter",s.position.set(Ip[0],Ip[1],Ip[2]),n.add(s),{group:n,emitter:s}}var r2=new B(0,0,1),hi=new B,Qs=new B,Iv=.6,Lv=.95;function Nv(n){let e=Wi(Ht),t=Xi(e),i=new mt;i.name=`associate-${n.id}`;let s=new mt;s.position.y=Pv,e.root.position.y=-Pv,s.add(e.root),i.add(s),i.add(e.shadow);let r=e.root.getObjectByName("body").children[2],o=s2();i.add(o.group);let a="",l=0,c="",h=0,d=n.yaw,u="live",p=0,f=!1,g=0,m=0,x=0;function y(){u="live",p=0,h=0,d=n.yaw,f=!1,g=0,i.visible=!0,i.scale.setScalar(1),s.rotation.x=0,a="",c="",l=0,o.emitter.scale.setScalar(1)}function S(M,b){let v=j.feedback,w=j.cover,C=j.associate;if(n.state==="unused"){i.visible=!1;return}if(n.state==="spawn"&&(u==="burst"||u==="gone")&&y(),!n.alive&&n.state==="dead"&&u==="live"&&(u="burst",p=0),u==="live"&&(i.visible=!0),u==="burst"){p+=b;let Y=v.dummyBurstTime>0?Math.min(p/v.dummyBurstTime,1):1;i.scale.setScalar(1+.2*Y),Y>=1&&(u="gone",i.visible=!1)}if(u==="gone")return;let R=u==="burst",L=n.pos,T=n.prevPos,I=!R&&n.point&&n.point.kind==="low"&&n.state!=="run"&&n.state!=="dead",E=I?ko(1-Math.max(n.pop,n.blind),0,1):0;h=w.popTime>0?Math.max(E,h+ko(E-h,-b/w.popTime,b/w.popTime)):E;let N=I?ko(n.blind,0,1):0;I&&(m=n.point.normal[0],x=n.point.normal[1]);let k=h*w.lowDrawBack+N*w.blindDrawBack,V=n.state==="spawn"?QA*(1-ko(n.stateT/Math.max(j.pad.riseTime,.001),0,1)):0;i.position.set(T[0]+(L[0]-T[0])*M+m*k,T[1]+(L[1]-T[1])*M+V,T[2]+(L[2]-T[2])*M+x*k);let te=n.state==="run"||Lu.has(n.state)?n.prevYaw+jA(n.yaw-n.prevYaw)*M:n2(n);if(d=qt(d,te,C.turnRate*1.5*b),i.rotation.y=d,R)return;let X=t2(n);X!==a?(t.play(X,X==="flinch"?void 0:{fade:.1}),a=X,l=0):n.state==="executed"&&(l+=b,l>=yt.flinch.duration&&(l=0,t.play("flinch")));let Q=X==="run"?ko(C.runSpeed/Vi,.5,3):1;X==="crawl"&&(Q=Math.hypot(L[0]-T[0],L[2]-T[2])>1e-5?1:0),X==="roll"&&(Q=yt.roll.duration/Math.max(C.diveReaction+C.diveTime,.001)),s.rotation.x=X==="roll"?Pp(ko(n.stateT/Math.max(C.diveReaction+C.diveTime,.001),0,1)):0,t.update(b*Q,Q===0?b:void 0),e.update(b);let $=i2(n);$!==c&&(e.face.setExpression($),c=$),_(X,b)}function _(M,b){o.group.visible=n.state!=="downed"&&n.state!=="dive",i.updateMatrixWorld(!0),r.getWorldPosition(hi);let v=hi.x,w=hi.y,C=hi.z;i.worldToLocal(hi);let R=hi.x,L=hi.y,T=hi.z;if(Lu.has(n.state)){let I=Math.cos(i.rotation.y),E=Math.sin(i.rotation.y),N=n.aim[0]-v,k=n.aim[2]-C;Qs.set(N*I-k*E,n.aim[1]-w,N*E+k*I)}else M==="coverBlindLow"?Qs.set(0,Math.sin(Lv),Math.cos(Lv)):n.state==="suppress"?Qs.set(0,.05,1):Qs.set(0,-Math.sin(Iv),Math.cos(Iv));if(Qs.lengthSq()<1e-12&&Qs.set(0,0,1),Qs.normalize(),o.group.position.set(R,L,T),o.group.quaternion.setFromUnitVectors(r2,Qs),f){g+=b;let I=.5+.5*Math.sin(g*2*Math.PI*8),E=j.feedback.glintSize/Dv;o.emitter.scale.setScalar(1+(E-1)*I)}else o.emitter.scale.setScalar(1)}return{group:i,update:S,reset:y,death(){u==="live"&&(u="burst",p=0)},glint(M){M&&!f&&(g=0),f=!!M},tip(M=[0,0,0]){return i.updateMatrixWorld(!0),o.emitter.getWorldPosition(hi),M[0]=hi.x,M[1]=hi.y,M[2]=hi.z,M},rig:e,anim:t,blaster:o}}var gl=new B;function ui(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;gl.copy(e),gl[i]=0,gl.normalize();let c=.5*o/(o+a),h=1-gl.angleTo(n)/l;return Math.sign(gl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Du=class n extends xt{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new B,c=new B,h=new B(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,f=d.length/6,g=new B,m=.5/o;for(let x=0,y=0;x<d.length;x+=3,y+=2)switch(l.fromArray(d,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[x+0]=h.x*Math.sign(l.x)+c.x*r,d[x+1]=h.y*Math.sign(l.y)+c.y*r,d[x+2]=h.z*Math.sign(l.z)+c.z*r,u[x+0]=c.x,u[x+1]=c.y,u[x+2]=c.z,Math.floor(x/f)){case 0:g.set(1,0,0),p[y+0]=ui(g,c,"z","y",r,i),p[y+1]=1-ui(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),p[y+0]=1-ui(g,c,"z","y",r,i),p[y+1]=1-ui(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),p[y+0]=1-ui(g,c,"x","z",r,e),p[y+1]=ui(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),p[y+0]=1-ui(g,c,"x","z",r,e),p[y+1]=1-ui(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),p[y+0]=1-ui(g,c,"x","y",r,e),p[y+1]=1-ui(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),p[y+0]=ui(g,c,"x","y",r,e),p[y+1]=1-ui(g,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Uv(n){for(let e of Object.values(n))e&&typeof e=="object"&&Uv(e);return Object.freeze(n)}var Ov=(n,e,t)=>{let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8)r|=Math.round((i>>o&255)+((s>>o&255)-(i>>o&255))*t)<<o;return"#"+r.toString(16).padStart(6,"0")},Pr=Uv({...Ht,name:"tobble",hair:{...Ht.hair,quiff:!1},colors:{...Ht.colors,shirt:H.cream,collar:Ov(H.cream,H.ink,.2),skin:H.tobbleMint,hair:Ov(H.tobbleMint,H.ink,.45),backpack:H.teal,mat:H.lilac},outfit:{collar:!1,lanyard:!0,logo:!1,headset:!1},face:{...Ht.face,brow:"pair",fixedSmile:.4},thirdEye:{y:.13,r:.05},backpack:{w:.5,h:.6,d:.3}});var Dp=(n,e,t)=>n<e?e:n>t?t:n,zv=n=>Dp(n,0,1),Fv=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),o2=1/60,kv=n=>n.point&&n.point.kind==="tall"?"tall":"low";function a2(n,e=n.speed||0){let t=e>.3;switch(n.state){case"cover":return kv(n)==="tall"?"coverTall":"coverLow";case"shoot":return kv(n)==="tall"?"aim":"coverPop";case"revive":return n.kneeling?"revive":t?"run":"idle";case"downed":return"crawl";default:return t?"run":"idle"}}function l2(n){return n.downed||!n.point||n.point.kind!=="low"||n.state!=="cover"&&n.state!=="shoot"?0:zv(1-n.pop)}function c2(){let e=new Uint8Array(16384),t=new Qe(H.tobbleMint),i=new Qe(H.ink),s=(o,a,l)=>Math.abs(o-64/2+.5)<l&&Math.abs(a-64/2+.5)<64*.4||Math.abs(a-64/2+.5)<l&&Math.abs(o-64/2+.5)<64*.4;for(let o=0;o<64;o++)for(let a=0;a<64;a++){let l=(o*64+a)*4,c=s(a,o,8),h=s(a,o,13),d=c?t:i;e[l]=Math.round(d.r*255),e[l+1]=Math.round(d.g*255),e[l+2]=Math.round(d.b*255),e[l+3]=h?255:0}let r=new dr(e,64,64,Zn);return r.colorSpace=tn,r.magFilter=un,r.minFilter=un,r.needsUpdate=!0,r}function Np(n,e){let t=new lt(Kn(n),It({color:e}));return xn(t),t}var Lp=[0,.04,.2];function h2(){let n=new mt;n.name="tobblePistol";let e=[[.045,.06,.25,0,.04,.075],[.04,.1,.05,0,-.04,0]];return n.add(Np(Bt(e.map(([t,i,s,r,o,a])=>new xt(t,i,s).translate(r,o,a)),!1),H.tobbleMint)),n}var u2=new B(0,0,1),Zi=new B,Bo=new B,Bv=.6;function Hv(n){let e=Wi(Pr),t=Xi(e),i=new mt;i.name="tobble",i.add(e.root);let r=e.root.getObjectByName("body").children[2],o=e.root.getObjectByName("hips"),a=e.root.getObjectByName("head"),l=new mt;l.name="thirdEye";let c=Pr.thirdEye,h=new lt(new Jt(c.r,12,10),new Sn({color:H.eyeWhite})),d=new lt(new Jt(c.r*.5,10,8),new Sn({color:H.ink}));d.position.z=c.r*.8,l.add(h,d),l.position.set(0,Pr.head.centerY+c.y,.27),a.add(l);let u=Pr.backpack,p=new mt;p.name="backpack",p.add(Np(new Du(u.w,u.h,u.d,3,.06),Pr.colors.backpack));let f=Np(new Kt(.085,.085,u.w*.95,12).rotateZ(Math.PI/2),Pr.colors.mat);f.position.y=u.h/2+.05,p.add(f),p.position.set(0,.2,-.32),o.add(p);let g=h2();i.add(g);let m=new xa(new ho({map:c2(),depthTest:!1,depthWrite:!1,toneMapped:!1}));m.name="tobblePlus",m.renderOrder=20,m.visible=!1,i.add(m);let x="",y=0,S=n.yaw,_=0,M=0,b="",v=0;function w(){x="",y=0,S=n.yaw,b="",v=0,i.position.set(n.start[0],n.start[1],n.start[2]),i.rotation.y=n.startYaw,m.visible=!1}function C(L,T){let I=j.tobble,E=j.cover,N=I.scale;v+=T>0?T:0,i.scale.setScalar(N);let k=n.pos,V=n.prevPos,te=Math.hypot(k[0]-V[0],k[2]-V[2])/o2,X=l2(n);y=E.popTime>0?Math.max(X,y+Dp(X-y,-T/E.popTime,T/E.popTime)):X,X>0&&n.point&&(_=n.point.normal[0],M=n.point.normal[1]);let Q=y*E.lowDrawBack*N,$=n.point&&!n.downed?I.popLift*zv(n.pop):0;i.position.set(V[0]+(k[0]-V[0])*L+_*Q,V[1]+(k[1]-V[1])*L+$,V[2]+(k[2]-V[2])*L+M*Q);let Y=n.prevYaw+Fv(n.yaw-n.prevYaw)*L;S+=Fv(Y-S)*Math.min(1,T*25),i.rotation.y=S;let _e=a2(n,te);_e!==x&&(t.play(_e,{fade:.1}),x=_e);let J=1;_e==="run"?J=Dp(te/(Vi*N),.5,3):_e==="crawl"&&(J=te>.001?1:0),t.update(T*J,J===0?T:void 0),e.update(T);let Z=n.downed?"scared":n.state==="shoot"?"angry":"smug";Z!==b&&(e.face.setExpression(Z),b=Z),m.visible=n.downed,n.downed&&(m.position.set(0,.95/N+.05*Math.sin(v*4),0),m.scale.setScalar(.5/N)),R()}function R(){g.visible=!n.downed&&n.state!=="revive",i.updateMatrixWorld(!0),r.getWorldPosition(Zi);let L=Zi.x,T=Zi.y,I=Zi.z;if(i.worldToLocal(Zi),g.position.copy(Zi),n.state==="shoot"&&n.target&&n.target.pos){let E=Math.cos(i.rotation.y),N=Math.sin(i.rotation.y),k=n.target.pos[0]-L,V=n.target.pos[2]-I;Bo.set(k*E-V*N,n.target.pos[1]+1.2-T,k*N+V*E)}else Bo.set(0,-Math.sin(Bv),Math.cos(Bv));Bo.lengthSq()<1e-12&&Bo.set(0,0,1),Bo.normalize(),g.quaternion.setFromUnitVectors(u2,Bo)}return w(),{group:i,update:C,reset:w,rig:e,anim:t,pistol:g,plus:m,eye:l,pack:p,tip(L=[0,0,0]){return i.updateMatrixWorld(!0),Zi.set(Lp[0],Lp[1],Lp[2]).applyMatrix4(g.matrixWorld),L[0]=Zi.x,L[1]=Zi.y,L[2]=Zi.z,L}}}function d2(n){return n==="open"?{ring:H.gel,pulse:!0,steam:!0}:n==="closed"?{ring:H.ink,pulse:!1,steam:!1}:{ring:H.lilac,pulse:!1,steam:!1}}var f2="#e6c28c",p2="#b98a50",m2=.3;function g2(n){let e=(i,s)=>{i.deleteAttribute("uv");let r=new Qe(s),o=i.getAttribute("position").count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;return i.setAttribute("color",new Tt(a,3)),i},t=[e(new Kt(n,n,.08,32).translate(0,.04,0).toNonIndexed(),f2)];for(let i=-3;i<=3;i++){let s=i*(n/3.6),r=2*Math.sqrt(Math.max(n*n-s*s,.01))-.04;t.push(e(new xt(r,.006,.035).translate(0,.081,s).toNonIndexed(),p2))}return Bt(t,!1)}function Gv(n,e,t=null){let i=e.map(r=>{let o=j.pad.radius,a=new mt;a.name=`sauna-${r.id}`,a.position.set(r.pos[0],r.pos[1],r.pos[2]),a.add(new lt(g2(o),It({vertexColors:!0,rim:.1})));let l=new Sn({color:H.lilac,side:Tn,toneMapped:!1}),c=new lt(new xr(o*.9,o*1.06,40).rotateX(-Math.PI/2),l);c.position.y=.09,a.add(c),n.add(a);let h=ks({text:"SPAWN SAUNA",w:2.4,h:.7,bg:H.glorpPurple,seed:9});return h.position.set(r.pos[0],3.05,r.pos[2]+1.3),h.rotation.y=Math.PI,n.add(h),{pad:r,group:a,ring:c,ringMat:l,sign:h,color:"",steamT:0}}),s=0;return{items:i,update(r){s+=r>0?r:0;for(let o of i){let a=d2(o.pad.state);if(a.ring!==o.color&&(o.color=a.ring,o.ringMat.color.set(a.ring)),o.ring.scale.setScalar(a.pulse?1+.07*Math.sin(s*6):1),a.steam&&t&&r>0){if(o.steamT+=r,o.steamT>=m2){o.steamT=0;let l=Math.random()*Math.PI*2,c=Math.random()*j.pad.radius*.8;t.steam([o.pad.pos[0]+Math.cos(l)*c,.1,o.pad.pos[2]+Math.sin(l)*c])}}else a.steam||(o.steamT=0)}},reset(){for(let r of i)r.steamT=0,r.color=""}}}var zo=Math.PI/180,Vv=.3,Op=1e-6,x2=64,v2=4,y2=64,Wv=(n,e,t)=>Math.max(e,Math.min(t,n));function Fp(n,e,t=j.grenade,i=[0,0,0]){let s=Wv(e+t.throwLift*zo,-30*zo,70*zo),r=Math.cos(s);return i[0]=t.throwSpeed*Math.sin(n)*r,i[1]=t.throwSpeed*Math.sin(s),i[2]=t.throwSpeed*Math.cos(n)*r,i}function Nu(n,e,t=j.combat,i=[0,0,0]){if(n.cover)return Au(n,"blind",e,t,i);let s=Tu(e),r=wu(e);i[1]=n.pos[1]+1.6;for(let o=1;o>=0&&(i[0]=n.pos[0]+(s[0]*.2+r[0]*.3)*o,i[2]=n.pos[2]+(s[2]*.2+r[2]*.3)*o,!(o===0||!Lo(n.boxes,i,0)));o-=.25);return i}var Ir=[0,0,0];function _2(n,e){let t=null,i=1/0;for(let a of n){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),d=Math.hypot(l,c,h);d<i&&(i=d,t=a)}if(Ir[0]=Ir[1]=Ir[2]=0,!t)return Ir[1]=1,Ir;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=t.min[a]-e[a],c=e[a]-t.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return Ir[s]=o,Ir}var Up={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},Ki=[0,0,0];function Xv(n,e,t,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=n.pos,l=n.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=Wv(Math.ceil(c/r),1,x2),d=e/h;for(let u=0;u<h;u++){let p=d;for(let f=0;f<=v2&&p>0;f++){Ki[0]=a[0]+l[0]*p,Ki[1]=a[1]+l[1]*p-.5*o*p*p,Ki[2]=a[2]+l[2]*p;let g=oi(t,a,Ki,r);if(g>=1){a[0]=Ki[0],a[1]=Ki[1],a[2]=Ki[2],l[1]-=o*p;break}a[0]+=(Ki[0]-a[0])*g,a[1]+=(Ki[1]-a[1])*g,a[2]+=(Ki[2]-a[2])*g,l[1]-=o*p*g;let m=_2(t,a),x=l[0]*m[0]+l[1]*m[1]+l[2]*m[2];if(x<0){let y=l[0]-m[0]*x,S=l[1]-m[1]*x,_=l[2]-m[2]*x;l[0]=y*i.friction-m[0]*x*i.restitution,l[1]=S*i.friction-m[1]*x*i.restitution,l[2]=_*i.friction-m[2]*x*i.restitution,-x>=Vv&&(s.clank=!0),m[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-m[0]*r,s.upPos[1]=a[1]-m[1]*r,s.upPos[2]=a[2]-m[2]*r)}if(a[0]+=m[0]*Op,a[1]+=m[1]*Op,a[2]+=m[2]*Op,m[1]>.7&&Math.hypot(l[0],l[1],l[2])<Vv){l[0]=l[1]=l[2]=0,n.resting=!0,s.rested=!0;return}p*=1-g}}}function b2(n,e,t,i=j.grenade){return Xv(n,e,t,i,Up),Up.clank?"clank":Up.rested?"rest":null}var M2={pos:[0,0,0],vel:[0,0,0],prevPos:[0,0,0],resting:!1,fuse:0},xl={clank:!1,rested:!1,up:!1,upPos:[0,0,0]};function Yv(n,e,t,i=j.grenade,s){let r=M2;for(let h=0;h<3;h++)r.pos[h]=n[h],r.vel[h]=e[h],r.prevPos[h]=n[h];r.resting=!1;let o=Math.min(s.length,y2),a=Math.floor(Math.max(0,i.arcTime)*30+1e-9),l=0,c=null;for(let h=0;h<=a&&l<o;h++){let d=s[l++];if(d[0]=r.pos[0],d[1]=r.pos[1],d[2]=r.pos[2],h===a||r.resting)break;for(let u=0;u<2;u++)Xv(r,1/60,t,i,xl),!c&&xl.up&&(c=[xl.upPos[0],xl.upPos[1],xl.upPos[2]])}return{count:l,land:c}}function qv(n,e=j.grenade){return n>=0?n<=e.killRadius?e.killDamage:n>=e.radius?0:e.damage*(1-n/e.radius):0}function $v(n,e,t,i=j.grenade){let s=e[0]-n[0],r=e[2]-n[2],o=e[1]-n[1],a=s*Math.sin(t)+r*Math.cos(t),l=Math.abs(s*Math.cos(t)-r*Math.sin(t));if(!(a>.01)||l>.3)return null;let c=i.throwSpeed,h=i.gravity,d=x=>{let y=Math.cos(x);return a*Math.tan(x)-h*a*a/(2*c*c*y*y)},u=-30*zo,p=Math.min(70*zo,Math.atan(c*c/(h*a)));if(!(p>u)||d(u)>o||d(p)<o)return null;let f=u,g=p;for(let x=0;x<50;x++){let y=(f+g)/2;d(y)<o?f=y:g=y}let m=(f+g)/2;return Math.abs(d(m)-o)<=.3?m-i.throwLift*zo:null}function Zv(n=j.grenade){let e=[];return{live:e,throw(t,i){let s={pos:[t[0],t[1],t[2]],vel:[i[0],i[1],i[2]],prevPos:[t[0],t[1],t[2]],resting:!1,fuse:n.fuse};return e.push(s),s},step(t,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=t,b2(o,t,i,n)==="clank"&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.fuse<=1e-9&&(s.push({type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}function Kv(n=j.grenade){let e={count:Math.min(n.start,n.carry),take(){return e.count<=0?!1:(e.count--,!0)},refill(){e.count=n.carry},reset(){e.count=Math.min(n.start,n.carry)}};return e}var Jv=1.49,jv=.2;function Qv(n,{spacing:e,cornerZone:t}){e=Math.max(jv,Number.isFinite(e)?e:jv);let i={cornerZone:t},s=[],r=(o,a,l)=>{let c=Pi(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return n.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,Js(o,c,i))}r(o,o.length,Js(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function Lr(n,e,t=[0,0]){let i=n.kind==="low"?0:n.end*e;return t[0]=n.pos[0]+n.tangent[0]*i,t[1]=n.pos[1]+n.tangent[1]*i,t}function Cn(n,e,t){let i=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:yn(e,[i/o,s/o,r/o],o,n,[]).t>=o-1e-6}function Ou(n,e,t,i=j){let s=[n.pos[0],n.kind==="low"?i.combat.crouchHead:Jv,n.pos[1]],r=Lr(n,i.associate.popShift),o=[r[0],Jv,r[1]];return{protected:!Cn(t,s,e),canShoot:Cn(t,o,e)}}var S2=Math.PI/180,w2=1.5,Uu=[0,0,0],Fu=[0,0,0],T2={bash:n=>[n.melee.bashRange,n.melee.bashAngle],cutter:n=>[n.melee.cutterReach,n.melee.cutterAngle],finish:n=>[n.melee.executeRange,n.melee.executeAngle]};function vl(n,e,t,i,s,r=j){let[o,a]=T2[n](r),l=a*S2/2,c=null,h=1/0;for(let d of i){if(!d.alive||d.state==="unused"||d.state==="executed")continue;let u=d.state==="downed";if(n==="finish"&&!u)continue;let p=d.pos[0]-e[0],f=d.pos[2]-e[2],g=Math.hypot(p,f);g>o||g>=h||g>1e-6&&Math.abs(Ri(Math.atan2(p,f)-t))>l+1e-9||(Uu[0]=e[0],Uu[1]=e[1]+1,Uu[2]=e[2],Fu[0]=d.pos[0],Fu[1]=d.pos[1]+(u?.3:1),Fu[2]=d.pos[2],Cn(s,Uu,Fu)&&(c=d,h=g))}return c}function ey({downed:n,clear:e,tobble:t,pos:i,yaw:s,enemies:r,boxes:o,t:a=j}){if(n)return{kind:"giveUp",hold:!0,target:null};if(e)return{kind:"again",hold:!1,target:null};if(t&&t.downed){let c=a.tobble?.playerReviveRange??w2;if(Math.hypot(t.pos[0]-i[0],t.pos[2]-i[2])<=c)return{kind:"reviveTobble",hold:!0,target:t}}let l=vl("finish",i,s,r,o,a);return l?{kind:"finish",hold:!1,target:l}:{kind:null,hold:!1,target:null}}var ty=Object.freeze({kbm:Object.freeze({melee:"F",interact:"E",grenade:"G"}),pad:Object.freeze({melee:"B",interact:"X",grenade:"LB"})}),ny={throw:n=>`Release ${n.grenade}  throw`,reviveTobble:n=>`Hold ${n.interact}  revive Tobble`,finish:n=>`${n.interact}  finish`,revving:()=>"Cheat Day: run into a Rep",bash:n=>`${n.melee}  bash`,rev:n=>`Hold ${n.melee}  rev Cheat Day`,giveUp:n=>`Hold ${n.interact}  renew your membership`,giveUpTobble:n=>`Tobble is coming! Hold ${n.interact} to renew your membership`,sauna:n=>`Close the Spawn Sauna (${n.grenade} kettlebell)`};function yl(n,e="kbm"){let t=Object.hasOwn(ny,n)?ny[n]:null;return t?t(ty[e]||ty.kbm):""}var zp=n=>n<0?0:n>1?1:n,kp=new Set(["move","sprint"]),Bp=new Set(["move","sprint","cover"]);function E2({device:n="kbm",grenadeHeld:e=!1,interact:t=null,reviving:i=!1,revving:s=!1,bashTarget:r=!1,cutterNear:o=!1,regretInHand:a=!1,holdFrac:l=0}={}){let c=(h,d=null)=>({text:yl(h,n),hold:d});return e?c("throw"):i||t&&t.kind==="reviveTobble"?c("reviveTobble",i?zp(l):0):t&&t.kind==="finish"?c("finish"):s?c("revving"):r?c("bash"):a&&o?c("rev"):null}function iy({mover:n,fight:e,arsenal:t,bag:i,cam:s,sfx:r,effects:o,views:a=[],health:l,playerView:c=null,grenadeView:h=null,boxes:d,hooks:u={}}){let p=au(),f=Array.from({length:64},()=>[0,0,0]),g=[0,0,0],m=[0,0,0],x=[0,0,0],y=[0,1,0],S=0,_=0,M="kbm",b=!1,v=0,w=0,C=!1,R=0,L=!1,T=null,I={count:0,land:null,show:!1},E=null,N=0,k=()=>{u.restart&&u.restart()},V=Le=>{u.marker&&u.marker(Le)},te=(Le,Ae=1)=>(x[0]=Le.pos[0],x[1]=Le.pos[1]+Ae,x[2]=Le.pos[2],x),X=Le=>{let Ae=Le.pos[0]-n.pos[0],be=Le.pos[2]-n.pos[2],Ce=Math.hypot(Ae,be)||1;return y[0]=Ae/Ce,y[1]=.5,y[2]=be/Ce,y};function Q(){T&&T.e.state==="executed"&&e.releaseExecution(T.e),T=null}function $(Le,Ae,be){return e.beginExecution(Le)?n.execute([Le.pos[0],Le.pos[2]],Ae)?(T={e:Le,kind:be,gelT:0,sfxT:0},!0):(e.releaseExecution(Le),!1):!1}function Y(Le){let Ae=j.feedback;if(Le.type==="bashHit"){let be=vl("bash",n.pos,S,e.enemies,d);if(s.bump(),r.play("bash",Ae.bashVolume),!be)return;let Ce=e.bash(be);o.gel(te(be),X(be),Ae.gelCount),Ce==="hit"&&V("body")}else if(Le.type==="executeDone"){let be=T;if(T=null,!be)return;s.bump(1.5),e.finishExecution(be.e),be.kind==="stomp"&&r.play("finish",Ae.bashVolume)}else Le.type==="reviveDone"&&e.reviveTobble()&&r.play("revive",Ae.reviveVolume)}function _e(){if(!(R>0)){if(!i.take()){r.play("dry",j.feedback.reloadVolume);return}Nu(n,S,j.combat,g),Fp(S,_,j.grenade,m),e.throwGrenade(g,m),c&&c.throwNow(),r.play("throw",j.feedback.throwVolume),s.kick(1.5,0),R=j.grenade.throwTime}}function J(){h&&h.arc(f,I.count,I.land,I.show)}function Z(){let Le=j.melee.promptRange;for(let Ae of e.enemies){if(!Ae.alive||Ae.state==="unused"||Ae.state==="downed"||Ae.state==="executed")continue;let be=Ae.pos[0]-n.pos[0],Ce=Ae.pos[2]-n.pos[2],U=Math.hypot(be,Ce);if(!(U>Le)&&(U<.5||Math.cos(Math.atan2(be,Ce)-S)>=.5))return!0}return!1}function fe(){p.reset(),b=!1,v=0,w=0,C=!1,R=0,L=!1,T=null,I={count:0,land:null,show:!1},E=null,N=0,J()}function Be(Le,Ae){S=Ae.camYaw,_=Ae.camPitch||0,M=Ae.device||"kbm";let be=n,Ce=j.melee,U=j.grenade;if(R>0&&(R=Math.max(0,R-Le)),I.show=!1,E=null,N=0,l.downed){T&&Q(),p.reset(),b=!1,L=!1,v=0,Ae.interactHeld||(C=!0),w=Ae.interactHeld&&C?w+Le:0,N=zp(w/Math.max(j.health.giveUpHold,.001)),J(),w>=j.health.giveUpHold-1e-9&&(w=0,k());return}w=0,C=!1,T&&(be.state!=="execute"||T.e.state!=="executed")&&Q();let K=p.update(Ae.meleeHeld,Ae.meleePressed,Le,Ce.holdTime),ne=p.holding();Ae.meleeHeld||(b=!1);let he=t.current()==="regret"&&t.reload===null&&!(t.switching>0);if(K&&be.bash(S),be.state==="rev"&&(!ne||b||!he||Ae.grenadeHeld)?be.rev(!1):ne&&!b&&he&&!Ae.grenadeHeld&&R<=0&&kp.has(be.state)&&be.rev(!0),be.state==="rev"){v-=Le,v<=0&&(v=Math.max(Ce.revPulse,.05),r.play("rev",j.feedback.revVolume));let z=vl("cutter",be.pos,be.facing,e.enemies,d);z&&$(z,Ce.cutTime,"cut")&&r.play("cut",j.feedback.cutVolume)}else v=0;if(T&&be.state==="execute"){let z=j.feedback;if(T.gelT-=Le,T.sfxT-=Le,T.kind==="cut"){if(T.gelT<=0){T.gelT=Math.max(z.cutGelEvery,.02),o.gel(te(T.e),X(T.e),5);let ye=j.camera.bump.amount;ye>0&&s.bump(z.executeShake/ye)}T.sfxT<=0&&(T.sfxT=.3,r.play("cut",z.cutVolume))}}let ie=e.tobble,ve=ey({downed:!1,clear:e.clear,tobble:ie,pos:be.pos,yaw:be.facing,enemies:e.enemies,boxes:d});if(ve.kind==="again"&&Ae.interactPressed){k();return}ve.kind==="finish"&&Ae.interactPressed&&Bp.has(be.state)&&$(ve.target,Ce.finishTime,"stomp")&&s.bump(.6),ve.kind==="reviveTobble"&&Ae.interactHeld&&Bp.has(be.state)&&be.reviveTobble(ie.pos);let se=be.state==="reviveTobble";se&&(N=zp(be.stateTime/Math.max(xp(),.001)));let me=L;if(L=!!Ae.grenadeHeld&&be.grenadeAim,me&&!Ae.grenadeHeld&&_e(),L&&i.count>0){Nu(be,S,j.combat,g),Fp(S,_,U,m);let z=Yv(g,m,d,U,f);I={count:z.count,land:z.land,show:!0}}J();let Ue=Bp.has(be.state),Ve=kp.has(be.state)&&R<=0;E=E2({device:M,grenadeHeld:L&&i.count>0,interact:Ue?ve:null,reviving:se,revving:be.state==="rev",bashTarget:kp.has(be.state)&&be.bashReadyAt<=be.clock&&!!vl("bash",be.pos,S,e.enemies,d),cutterNear:Ve&&Z(),regretInHand:he,holdFrac:N})}function W(){n.state==="rev"&&(n.rev(!1),b=!0)}function Te(Le,Ae){let be=null;for(let Ce=0;Ce<3;Ce++){Nu(n,S,j.combat,g);let U=Math.atan2(Le-g[0],Ae-g[2]);if(S=U,be=$v(g,[Le,j.grenade.ballRadius,Ae],U),be===null)return!1}return s.yaw=S,s.pitch=be,!0}return{step:Be,reset:fe,onAction:Y,onPlayerHit:W,aimThrow:Te,prompt:()=>E,arc:()=>({count:I.count,land:I.land,show:I.show}),busy:()=>R>0,armed:()=>L&&i.count>0,giveUpFrac:()=>l.downed?N:null,execution:()=>T?{id:T.e.id,kind:T.kind}:null}}function sy(n=j.health){let e=-1,t=0,i=0,s=!1,r={hp:n.max,downed:!1,downT:0,sinceHit:0,fraction(){return n.max>0?Math.max(0,Math.min(1,r.hp/n.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,t=0,n.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=n.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,n.reviveHealth*n.max),r.sinceHit=0,e=-1,t=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&n.standInRevive>0&&(i+=o,i>=n.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<n.max&&r.sinceHit>=n.regenDelay&&(e<0&&(e=r.hp,t=0),t+=Math.min(o,r.sinceHit-n.regenDelay),r.hp=n.regenTime>0&&t<n.regenTime?e+(n.max-e)*t/n.regenTime:n.max),r.hp>=n.max&&(r.hp=n.max,e=-1),null)},reset(){r.hp=n.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,t=0,i=0,s=!1}};return r}var A2=new Set(["cover","coverSlide","coverSwap"]),R2=[],C2=Gp(),P2=Gp(),ku=[null];function Gp(){return{alive:!0,shapes:{head:{c:[0,0,0],r:Et.head.r},body:{a:[0,0,0],b:[0,0,0],r:Et.body.r}}}}function ry(n){return A2.has(n.state)?_s(n):null}function Hp(n,e,t,i,s){let r=n.shapes;return r.head.r=Et.head.r,r.body.r=Et.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+t,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],n}function Bu(n,e=Gp(),t=j.combat){let i=ry(n),s=!!i&&i.kind==="low"&&!(n.cover&&n.cover.pop>=.5);return e.alive=!0,s?Hp(e,n.pos,t.crouchHead,.1,t.crouchBodyTop):Hp(e,n.pos,Et.head.cy,Et.body.ay,Et.body.by)}function oy(n,e,t,i,s,r=j.combat){let o=ry(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return yn(n,e,t,i,R2);if(!a)return ku[0]=Bu(s,C2,r),yn(n,e,t,i,ku);let l=Et.body.by;return ku[0]=Hp(P2,s.pos,Et.head.cy,l-r.shoulderDrop,l),yn(n,e,t,i,ku)}var ay=.9;function _l(n,e,t,i){return oi(n,[e[0],ay,e[1]],[t[0],ay,t[1]],i)===1}var bl=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function ly(n,e,{radius:t,linkMax:i}){let s=n.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)bl(s[o],s[a])<=i&&_l(e,s[o],s[a],t)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function I2(n,e,t,i,s){let{nodes:r,links:o}=n,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let m of t)h[m]=!0;let d=[];for(let m of e)a[m]=bl(i,r[m]),d.push(m);let u=m=>a[m]+bl(r[m],s),p=-1,f=1/0;for(;d.length;){let m=0;for(let y=1;y<d.length;y++){let S=d[y],_=d[m],M=u(S),b=u(_);(M<b-1e-12||Math.abs(M-b)<=1e-12&&S<_)&&(m=y)}let x=d.splice(m,1)[0];if(!c[x]){if(u(x)>=f)break;if(c[x]=!0,h[x]){let y=a[x]+bl(r[x],s);(y<f-1e-12||Math.abs(y-f)<=1e-12&&x<p)&&(p=x,f=y)}for(let y of o[x]){if(c[y])continue;let S=a[x]+bl(r[x],r[y]);S<a[y]-1e-12&&(a[y]=S,l[y]=x,d.push(y))}}}if(p<0)return null;let g=[];for(let m=p;m>=0;m=l[m])g.push(m);return g.reverse()}function Ml(n,e,t,i,s){if(_l(e,t,i,s))return[[i[0],i[1]]];let{nodes:r}=n,o=[],a=[];if(r.forEach((u,p)=>{_l(e,t,u,s)&&o.push(p),_l(e,u,i,s)&&a.push(p)}),!o.length||!a.length)return null;let l=I2(n,o,a,t,i);if(!l)return null;let c=[...l.map(u=>r[u]),i],h=[],d=t;for(let u=0;u<c.length;u++){let p=c[u+1];p&&_l(e,d,p,s)||(h.push([c[u][0],c[u][1]]),d=c[u])}return h}var L2=.25,Hu=new Set(["executed","unused","dead"]),D2=new Set(["cover","suppress","reload"]),er={r:.25,y:.25,back:.2,front:.6},N2=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),O2=new Set(["telegraph","burst","suppress"]),Yp=n=>Math.max(0,Math.min(1,n)),Ji=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),cy=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function qp(n,e=j.associate){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=Math.PI,n.state="idle",n.stateT=0,n.health=e.health,n.alive=!0,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.aim[0]=n.aim[1]=n.aim[2]=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckRef[0]=n.start[0],n.stuckRef[1]=n.start[2],n.stuckCount=0,n.helper=null,n.helping=null,n.target="player",n.diveDir[0]=n.diveDir[1]=0,n.divePoint=null,n.claimed=!1,n.diedAt=-1/0,n.wasDowned=!1,Ho(n),n}function $p(n){return n.alive=!1,n.state="unused",n.stateT=0,n.health=0,n.pos[1]=n.prevPos[1]=-50,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.helping=null,n.claimed=!1,n.wasDowned=!1,Ho(n),n}function Zp(n,e,t){let i=(t.tuning||j).associate;for(let r=0;r<3;r++)n.pos[r]=e[r],n.prevPos[r]=e[r];let s=t.player;return n.yaw=n.prevYaw=s?Math.atan2(s.pos[0]-e[0],s.pos[2]-e[2]):Math.PI,n.state="spawn",n.stateT=0,n.health=i.health,n.alive=!0,n.claimed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckCount=0,n.helper=null,n.helping=null,n.target="player",n.wasDowned=!1,n.diedAt=-1/0,n.divePoint=null,Ho(n),n}function Kp({id:n,pos:e},t=j.associate){let i={id:n,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:Et.head.r},body:{a:[0,0,0],b:[0,0,0],r:Et.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return qp(i,t)}function Ho(n,e=j.combat){let[t,i,s]=n.pos,r=n.shapes;if(n.state==="downed"){let a=Math.sin(n.yaw),l=Math.cos(n.yaw);return r.body.r=er.r,r.head.r=Et.head.r,r.body.a[0]=t-a*er.back,r.body.a[1]=i+er.y,r.body.a[2]=s-l*er.back,r.body.b[0]=t+a*er.front,r.body.b[1]=i+er.y,r.body.b[2]=s+l*er.front,r.head.c[0]=r.body.b[0],r.head.c[1]=i+er.y,r.head.c[2]=r.body.b[2],r}let o=N2.has(n.state)&&n.point&&n.point.kind==="low"&&n.pop<.5;return r.head.r=Et.head.r+e.hitPad,r.body.r=Et.body.r+e.hitPad,r.head.c[0]=t,r.head.c[2]=s,r.body.a[0]=t,r.body.a[2]=s,r.body.b[0]=t,r.body.b[2]=s,o?(r.head.c[1]=i+e.crouchHead-e.hitPad,r.body.a[1]=i+.1,r.body.b[1]=i+e.crouchBodyTop):(r.head.c[1]=i+Et.head.cy,r.body.a[1]=i+Et.body.ay,r.body.b[1]=i+Et.body.by),r}function an(n,e){n.state=e,n.stateT=0}function ji(n,e,t){e=Yp(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var tr=(n,e)=>e>0?n/e:1;function Sl(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=qt(n.yaw,Math.atan2(r,o),i.turnRate*s))}function hy(n,e,t){let i=n.point.normal;n.yaw=qt(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function Qi(n,e){e.tokens.holds(n.id)&&e.tokens.release(n.id,e.now,e.director)}function Jp(n,e){let t=e.player.pos;return n.chest[0]=t[0],n.chest[1]=t[1]+1.2,n.chest[2]=t[2],n.chest}function Gu(n,e){let t=e.tuning||j,i=t.associate,s=e.director||t.director,r=e.player,o=[r.pos[0],r.pos[2]],a=Jp(n,e),l=n.point,c=Ji(l?l.pos:[n.pos[0],n.pos[2]],o),h=n.role,d=!!l&&(n.mustMove||h!=="hold"),u=[n.pos[0],n.pos[2]],p=Math.cos(s.flankAngle*Math.PI/180),f=Math.cos(s.flankMaxAngle*Math.PI/180),g=0,m=0;if(r.coverNormal)g=-r.coverNormal[0],m=-r.coverNormal[1];else{let M=0;for(let b of e.others||[])b.alive&&(g+=b.pos[0],m+=b.pos[2],M++);M?(g=g/M-o[0],m=m/M-o[1]):(g=n.pos[0]-o[0],m=n.pos[2]-o[1])}let x=Math.hypot(g,m)||1;g/=x,m/=x;let y=[];for(let[M,b]of e.reserved)b!==n.id&&y.push(e.points[M].pos);let S=null,_=-1/0;for(let M of e.points){let b=e.reserved.get(M.index);if(b!==void 0&&b!==n.id||d&&M.index===l.index||n.mustMove&&l&&Ji(M.pos,l.pos)<2*i.reserveRadius)continue;let v=Ji(M.pos,o);if(v<i.reserveRadius||v<i.minRange||v>i.maxRange)continue;let w=!1;for(let I of y)if(Ji(I,M.pos)<i.reserveRadius){w=!0;break}if(w)continue;let C=((M.pos[0]-o[0])*g+(M.pos[1]-o[1])*m)/v;if(h==="flank"?C<f:C<0)continue;let R=0;if(h==="push"){let I=c-v;if(I<2)continue;R=2*I}else if(h==="flank"){if(!r.coverNormal||C>p)continue;R=10}let L=Ou(M,a,e.boxes,t);if(!L.protected||!L.canShoot)continue;let T=-Ji(u,M.pos)-.5*Math.abs(v-i.preferRange)+R;T>_+1e-9&&(_=T,S=M)}return S?{point:S,score:_}:null}function U2(n,e){let t=Gu(n,e);return t?t.point:null}function Vp(n,e,t){let i=e.tuning||j,s=[n.pos[0],n.pos[2]],r=Jp(n,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==n.id)continue;let h=Ji(s,l.pos);h>=a||t&&!Ou(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function Ms(n,e,t){an(n,"cover"),n.blind=0,n.wantSuppress=null,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function Qn(n,e,t){Qi(n,e),ji(n,0,t),n.blind=0;let i=n.stuckCount>=3?Vp(n,e,!1):U2(n,e);if(!i){if(n.mustMove=!1,n.role!=="hold"&&(n.role="hold"),n.point&&Ji(n.point.pos,[n.pos[0],n.pos[2]])<=.5){Ms(n,e,t);return}if(i=Vp(n,e,!0)||Vp(n,e,!1),!i){Ms(n,e,t);return}}if(n.point&&n.point.index!==i.index&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),e.reserved.set(i.index,n.id),n.point=i,n.mustMove=!1,Math.hypot(i.pos[0]-n.pos[0],i.pos[1]-n.pos[2])<=t.arriveDist){uy(n,e,t);return}let s=n.stuckCount>=3?null:Ml(e.graph,e.boxes,[n.pos[0],n.pos[2]],i.pos,t.radius);n.path=s||[[i.pos[0],i.pos[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],an(n,"run")}function uy(n,e,t){if(n.role==="revive"){an(n,"kneel");return}let i=n.point;n.pos[0]=i.pos[0],n.pos[2]=i.pos[1],n.role="hold",n.stuckCount=0,n.pointT=0,n.relocT=0,n.mustMove=!1,e.events.push({type:"arrive",id:n.id,point:i}),Ms(n,e,t)}function F2(n,e,t,i){if(n.role==="revive"){let r=gy(n,e);if(!r){Ss(n,e),Qn(n,e,t);return}if(cy(n.pos,r.pos)<=my){an(n,"kneel");return}}let s=t.runSpeed*i;for(let r=0;r<n.path.length+2;r++){let o=n.path[n.pathI],a=n.pathI===n.path.length-1,l=o[0]-n.pos[0],c=o[1]-n.pos[2],h=Math.hypot(l,c);if(h<=t.arriveDist){if(a){uy(n,e,t);return}n.pathI++;continue}Sl(n,o[0],o[1],t,i);let d=Math.min(s,h);if(d<=1e-9)break;let u=Gn(e.boxes,n.pos,[l/h*d,0,c/h*d],t.radius,t.height),p=Math.hypot(u.pos[0]-n.pos[0],u.pos[2]-n.pos[2]);if(n.pos[0]=u.pos[0],n.pos[2]=u.pos[2],s-=p,p<d*.5)break;p>=h-1e-9}if(n.stuckT+=i,n.stuckT>=t.stuckTime){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05){n.role==="revive"&&Ss(n,e),n.stuckCount++,Qn(n,e,t);return}n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}}function jp(n,e,t,i,s){let r=e.player,o=n.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(t.aimLag>0)?1:1-Math.pow(.5,i/t.aimLag);for(let l=0;l<3;l++)n.aim[l]+=(o[l]-n.aim[l])*a}var dy=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1),Qp=n=>n.tobble&&!n.tobble.downed?n.tobble:null;function k2(n,e,t){if(n.point){let i=Lr(n.point,(e.tuning||j).associate.popShift);t[0]=i[0],t[2]=i[1]}else t[0]=n.pos[0],t[2]=n.pos[2];return t[1]=1.49,t}var Wp=[0,0,0];function B2(n,e){let t=Qp(e),i=e.player;return t?(k2(n,e,Wp),!i.downed&&Cn(e.boxes,Wp,i.chest)?"player":Cn(e.boxes,Wp,t.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var fy=(n,e)=>n.target==="tobble"?!Qp(e):e.player.downed,py=(n,e)=>n.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function z2(n,e,t,i,s){ji(n,n.pop-tr(s,t.popTime),t),hy(n,t,s);let r=e.player;if(r.downed&&!Qp(e))return;if(!r.downed){if(n.pointT+=s,n.role!=="hold"){Qn(n,e,t);return}if(n.relocT+=s,n.relocT>=t.relocateCheck){n.relocT=0;let a=Ou(n.point,Jp(n,e),e.boxes,e.tuning||j);if(!a.protected||!a.canShoot||Ji(n.point.pos,[r.pos[0],r.pos[2]])<t.reserveRadius){n.mustMove=!0,Qn(n,e,t);return}}if(n.pointT>=t.relocateAfter){n.mustMove=!0,n.pointT=0,Qn(n,e,t);return}}if(n.stateT<n.wait)return;if(n.wantSuppress===null&&(n.wantSuppress=e.rand()<t.suppressChance),n.bursts>=t.magBursts){an(n,"reload"),e.events.push({type:"bark",id:n.id,key:"reload"});return}let o=B2(n,e);if(o&&e.tokens.request(n.id,e.now,e.tokenCount,i)){n.target=o,an(n,"telegraph"),n.shots=0,jp(n,e,t,s,!0),e.events.push({type:"telegraph",id:n.id});return}n.wantSuppress&&!r.downed&&(an(n,"suppress"),n.shots=0)}function Xp(n,e,t,i){Qi(n,e),i&&n.bursts++,Ms(n,e,t)}function H2(n,e,t,i){ji(n,n.pop+tr(i,t.popTime),t);let s=py(n,e);if(Sl(n,s[0],s[2],t,i),jp(n,e,t,i,!1),fy(n,e)||!e.tokens.holds(n.id)){Xp(n,e,t,!1);return}n.stateT>=t.popTime+t.telegraphTime-1e-9&&(an(n,"burst"),n.shots=0)}function G2(n,e,t,i){let s=e.player;ji(n,n.pop+tr(i,t.popTime),t);let r=py(n,e);if(Sl(n,r[0],r[2],t,i),jp(n,e,t,i,!1),fy(n,e)||!e.tokens.holds(n.id)){Xp(n,e,t,!0);return}let o=n.muzzle;o[0]=n.pos[0],o[1]=n.pos[1]+t.muzzleUp,o[2]=n.pos[2];let a=dy(n.stateT,t.rate,t.burstTime),l=n.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||j).move.sprint);for(;n.shots<a;){n.shots++;let c=n.aim[0]-o[0],h=n.aim[1]-o[1],d=n.aim[2]-o[2],u=Math.hypot(c,h,d)||1;e.events.push({type:"enemyShot",id:n.id,from:[o[0],o[1],o[2]],dir:[c/u,h/u,d/u],accurate:!0,target:n.target,spread:t.spread+t.moveSpread*l})}n.stateT>=t.burstTime-1e-9&&Xp(n,e,t,!0)}function V2(n,e,t,i){let s=e.player;if(n.blind=Yp(n.blind+tr(i,t.popTime)),Sl(n,s.pos[0],s.pos[2],t,i),s.downed){n.blind=0,Ms(n,e,t);return}let r=n.stateT-t.popTime;if(r<0&&n.blind<1)return;let o=n.point,a=Math.max(0,r),l=n.muzzle;l[0]=n.pos[0],l[2]=n.pos[2],l[1]=n.pos[1]+(o.kind==="low"?o.height+(e.tuning||j).combat.blindLift:t.muzzleUp);let c=dy(a,t.suppressRate,t.suppressTime);for(;n.shots<c;){n.shots++;let h=s.head[0]-l[0],d=s.head[1]-l[1],u=s.head[2]-l[2],p=Math.hypot(h,d,u)||1;h/=p,d/=p,u/=p;let f=u,g=-h,m=Math.hypot(f,g);m<1e-6&&(f=1,g=0,m=1),f/=m,g/=m;let x=d*g,y=u*f-h*g,S=-d*f,_=2*Math.PI*e.rand(),M=t.suppressMiss*(1+.5*e.rand()),b=Math.cos(_)*M,v=Math.sin(_)*M,w=s.head[0]+f*b+x*v,C=s.head[1]+y*v,R=s.head[2]+g*b+S*v,L=w-l[0],T=C-l[1],I=R-l[2],E=Math.hypot(L,T,I)||1;e.events.push({type:"enemyShot",id:n.id,from:[l[0],l[1],l[2]],dir:[L/E,T/E,I/E],accurate:!1,spread:t.suppressSpread})}r>=t.suppressTime-1e-9&&(n.blind=0,Ms(n,e,t))}var my=.8;function gy(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);return t&&t.alive&&t.state==="downed"&&t.helper===n.id?t:null}function Ss(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);t&&t.helper===n.id&&(t.helper=null),n.helping=null,n.role="hold"}function xy(n,e,t){let i=(t.tuning||j).associate;Qi(n,t),ji(n,0,i),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.point=null,n.role="revive",n.helping=e.id,e.helper=n.id,n.mustMove=!1;let s=n.pos[0]-e.pos[0],r=n.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=my){an(n,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];n.path=Ml(t.graph,t.boxes,[n.pos[0],n.pos[2]],a,i.radius)||[a],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],an(n,"run")}function W2(n,e,t,i){let s=gy(n,e);if(!s){Ss(n,e),Qn(n,e,t);return}Sl(n,s.pos[0],s.pos[2],t,i),!(n.stateT<t.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,t.reviveHealth*t.health),s.role="hold",s.mustMove=!1,s.bursts=0,an(s,"seek"),e.events.push({type:"cloneRevive",id:n.id,target:s.id}),n.helping=null,n.role="hold",Qn(n,e,t))}function X2(n,e,t,i){if(n.stateT>=t.bleedTime-1e-9){n.health=0,zu(n,e,"bleed");return}if(n.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===n||!c.alive||!D2.has(c.state))continue;let h=cy(n.pos,c.pos);h<o&&(o=h,s=c.pos[0]-n.pos[0],r=c.pos[2]-n.pos[2])}if(o===1/0)s=n.pos[0]-e.player.pos[0],r=n.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),n.yaw=qt(n.yaw,Math.atan2(s,r),t.turnRate*i);let a=t.downedCrawl*i,l=Gn(e.boxes,n.pos,[s/o*a,0,r/o*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}function Y2(n,e,t){n.point&&e.reserved.get(n.point.index)===n.id&&n.pop<=1e-6&&Ji(n.point.pos,[n.pos[0],n.pos[2]])<=.3?Ms(n,e,t):Qn(n,e,t)}function vy(n,e){return!n.alive||Hu.has(n.state)||n.state==="downed"?!1:(n.role==="revive"&&Ss(n,e),Qi(n,e),n.blind=0,an(n,"stagger"),!0)}function yy(n,e,t){if(!n.alive||Hu.has(n.state)||n.state==="downed"||n.state==="dive")return!1;n.role==="revive"&&Ss(n,t),Qi(n,t),ji(n,0,(t.tuning||j).associate),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.divePoint=n.point,n.point=null,n.role="hold",n.path=[],n.pathI=0;let i=n.pos[0]-e[0],s=n.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(n.yaw),s=Math.cos(n.yaw)):(i/=r,s/=r),n.diveDir[0]=i,n.diveDir[1]=s,n.yaw=Math.atan2(i,s),an(n,"dive"),!0}function q2(n,e,t,i){let s=Math.max(t.diveTime,.001),r=Math.max(n.stateT-i,t.diveReaction),o=Math.min(n.stateT,t.diveReaction+s);if(o>r){let a=t.diveDistance*(o-r)/s,l=Gn(e.boxes,n.pos,[n.diveDir[0]*a,0,n.diveDir[1]*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}n.stateT>=t.diveReaction+s-1e-9&&(n.point=n.divePoint,n.divePoint=null,n.mustMove=!0,Qn(n,e,t))}function _y(n,e){return!n.alive||Hu.has(n.state)||n.state==="dive"?!1:(n.role==="revive"&&Ss(n,e),Qi(n,e),ji(n,0,(e.tuning||j).associate),n.blind=0,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.wasDowned=n.state==="downed",n.point=null,n.role="hold",n.helper=null,n.mustMove=!1,an(n,"executed"),!0)}function by(n){return!n.alive||n.state!=="executed"?!1:(an(n,n.wasDowned?"downed":"flinch"),n.wasDowned=!1,!0)}function My(n,e,t="execute"){return!n.alive||n.state!=="executed"?null:(n.health=0,zu(n,e,t))}function zu(n,e,t){return n.alive=!1,Qi(n,e),n.role==="revive"&&Ss(n,e),n.helper=null,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.pop=0,n.blind=0,an(n,"dead"),e.events.push({type:"death",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]],kind:t}),"kill"}function e0(n,e){return!n.alive||Hu.has(n.state)||n.state==="downed"?null:(Qi(n,e),n.role==="revive"&&Ss(n,e),n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.point=null,n.health=1,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.mustMove=!1,an(n,"downed"),e.events.push({type:"down",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]]}),e.events.push({type:"bark",id:n.id,key:"cloneDown"}),"down")}function Sy(n,e,t){if(!n.alive)return;(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,L2);let i=(e.tuning||j).associate,s=e.director||j.director;switch(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.state){case"idle":e.started&&Qn(n,e,i);break;case"seek":Qn(n,e,i);break;case"run":F2(n,e,i,t);break;case"cover":z2(n,e,i,s,t);break;case"telegraph":H2(n,e,i,t);break;case"burst":G2(n,e,i,t);break;case"suppress":V2(n,e,i,t);break;case"reload":ji(n,n.pop-tr(t,i.popTime),i),hy(n,i,t),n.stateT>=i.reloadTime&&(n.bursts=0,Ms(n,e,i));break;case"flinch":ji(n,n.pop-tr(t,i.popTime),i),n.blind=Yp(n.blind-tr(t,i.popTime)),n.stateT>=i.flinchTime&&(n.point?Ms(n,e,i):Qn(n,e,i));break;case"stagger":ji(n,n.pop-tr(t,i.popTime),i),n.stateT>=i.staggerTime-1e-9&&Y2(n,e,i);break;case"dive":q2(n,e,i,t);break;case"kneel":W2(n,e,i,t);break;case"downed":X2(n,e,i,t);break;case"spawn":n.stateT>=(e.tuning||j).pad.riseTime-1e-9&&Qn(n,e,i);break;default:break}}function wy(n,e,t,i="body"){return!n.alive||!(e>0)||n.state==="executed"||n.state==="unused"?null:n.state==="downed"?(n.health=0,zu(n,t,i)):(n.health-=e,n.health<=0?(i==="body"||i==="tobble")&&t.rand()<(t.tuning||j).associate.downChance?e0(n,t):(n.health=0,zu(n,t,i)):n.role==="revive"?(Ss(n,t),Qi(n,t),an(n,"flinch"),"hit"):(O2.has(n.state)&&(Qi(n,t),an(n,"flinch"),n.blind=Math.min(n.blind,1)),"hit"))}function Ty(){let n=new Map,e=new Map,t=new Map,i={request(s,r,o,a=j.director){if(n.has(s))return!0;if(r<(t.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[d,u]of e)r-u.last>a.requestWindow&&e.delete(d);if(n.size>=o)return!1;let c=null,h=1/0;for(let[d,u]of e)u.first<h&&(c=d,h=u.first);return c!==s?!1:(e.delete(s),n.set(s,r),!0)},release(s,r,o=j.director){e.delete(s),n.delete(s)&&t.set(s,r+o.tokenCooldown)},holds(s){return n.has(s)},held(){return[...n.keys()]},expire(s,r=j.director){let o=[];for(let[a,l]of n)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){n.clear(),e.clear(),t.clear()}};return i}function Ey(n,e=j){let t=(n.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,openKey:r.openKey,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(t.map(r=>[r.id,new Set]));return{list:t,step(r,o){let a=e.pad,l=[];for(let c of t){if(c.state==="dormant"){if(!o.started||!(o.kills>=(c.openKey&&Number.isFinite(a[c.openKey])?a[c.openKey]:a.openAfterKills)||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of t)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of t)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return t.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of t)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var $2=.25,Z2=1.49,K2=.5,Nr="tobble",J2=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn"]),Vu=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),$u=n=>Math.max(0,Math.min(1,n)),Ay=(n,e)=>e&&e.tuning?e.tuning.tobble:n.cfg,j2=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1);function i0({pos:n,yaw:e=0},t=j.tobble){let i={id:Nr,cfg:t,start:[n[0],n[1],n[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:Et.head.r},body:{a:[0,0,0],b:[0,0,0],r:Et.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return s0(i)}function s0(n){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=n.startYaw,n.state="idle",n.stateT=0,n.hp=n.cfg.health,n.alive=!0,n.downed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.target=null,n.reviveT=0,n.threatT=0,n.lofT=0,n.wait=0,n.shots=0,n.sinceHit=0,n.relocT=0,n.complainT=0,n.stuckT=0,n.stuckCount=0,n.kneeling=!1,n.revGo=!1,n.sideLeft=0,n.speed=0,n.aim[0]=n.aim[1]=n.aim[2]=0,wl(n),n}function wl(n,e=j.combat){let t=n.cfg,i=t.scale,[s,r,o]=n.pos,a=n.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,n.downed){let c=Math.sin(n.yaw),h=Math.cos(n.yaw);a.body.r=.25*i,a.head.r=Et.head.r*i,a.body.a[0]=s-c*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-h*.2*i,a.body.b[0]=s+c*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+h*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],n.chest[0]=s,n.chest[1]=r+.25*i,n.chest[2]=o}else if(n.point&&n.point.kind==="low"&&n.pop<.5)a.head.r=(Et.head.r+l)*i,a.body.r=(Et.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,n.chest[0]=s,n.chest[1]=r+e.crouchBodyTop*i*.9,n.chest[2]=o;else{let c=n.point?t.popLift*$u(n.pop):0;a.head.r=(Et.head.r+l)*i,a.body.r=(Et.body.r+l)*i,a.head.c[1]=r+Et.head.cy*i+c,a.body.a[1]=r+Et.body.ay*i+c,a.body.b[1]=r+Et.body.by*i+c,n.chest[0]=s,n.chest[1]=r+t.height*(1.2/1.8)+c,n.chest[2]=o}return n.head[0]=a.head.c[0],n.head[1]=a.head.c[1],n.head[2]=a.head.c[2],a}function Or(n,e){n.state=e,n.stateT=0}var Zu=(n,e,t=!1)=>n.events.push(t?{type:"bark",id:Nr,key:e,force:t}:{type:"bark",id:Nr,key:e});function Tl(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=qt(n.yaw,Math.atan2(r,o),i.turnRate*s))}function Q2(n,e,t){let i=n.point.normal;n.yaw=qt(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function Vo(n,e,t){e=$u(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.tuning.associate.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var r0=(n,e)=>e>0?n/e:1;function El(n,e){n.point&&e.reserved.get(n.point.index)===Nr&&e.reserved.delete(n.point.index),n.point=null}function Ry(n,e,t,i){let s=n.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,c=o/a,h=t-s.lens[0],d=i-s.lens[2],u=Math.max(.5,Math.min(e.lofRange,h*l+d*c));return Math.hypot(h-l*u,d-c*u)}function eR(n,e,t){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=n.pos[0]-i.lens[0],l=n.pos[2]-i.lens[2],c=-o*a+r*l>=0?1:-1;n.side[0]=-o*c,n.side[1]=r*c,n.sideLeft=t.sidestepDist,El(n,e),Vo(n,0,e),n.target=null,n.lofT=0,Or(n,"sidestep")}var Dr=n=>n.alive&&J2.has(n.state)&&n.state!=="executed",Go=n=>n.state==="downed";function tR(n,e,t,i){return n.point?(Lr(n.point,e.tuning.associate.popShift,ws),i[0]=ws[0],i[2]=ws[1]):(i[0]=n.pos[0],i[2]=n.pos[2]),i[1]=n.pos[1]+t.muzzleUp+(n.point?t.popLift:0),i}function Yu(n,e){let t=n.shapes.body;return e[0]=(t.a[0]+t.b[0])/2,e[1]=(t.a[1]+t.b[1])/2,e[2]=(t.a[2]+t.b[2])/2,e}var Ii=[0,0,0],t0=[0,0,0],ws=[0,0];function o0(n,e,t){return n.point?(Lr(n.point,e.tuning.associate.popShift,ws),t[0]=ws[0],t[2]=ws[1]):(t[0]=n.pos[0],t[2]=n.pos[2]),t[1]=Z2,t}function Cy(n,e,t){tR(n,e,t,t0);let i=null,s=1/0;for(let r of e.enemies){if(!Dr(r)||Go(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-n.pos[0],r.pos[2]-n.pos[2]);o>=s||o>t.range||Cn(e.boxes,t0,Yu(r,Ii))&&(s=o,i=r)}return i}function Py(n,e,t){let i=null,s=1/0;for(let r of n.enemies){if(!Dr(r)||Go(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-t);o<s&&(s=o,i=r)}return i}var qu=[0,0,0],nr=[0,0,0],Wu=[0,0,0];function Iy(n,e,t){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[n.pos[0],n.pos[2]],l=Py(e,n.pos[0],n.pos[2]),c=[];for(let[p,f]of e.reserved)f!==Nr&&c.push(e.points[p].pos);let h=(t.followMin+t.followMax)/2,d=null,u=-1/0;for(let p of e.points){let f=e.reserved.get(p.index);if(f!==void 0&&f!==Nr)continue;let g=Vu(p.pos,o);if(g<t.followMin||g>t.followMax||g<=t.personalSpace||Ry(e,t,p.pos[0],p.pos[1])<t.lofClear)continue;let m=!1;for(let _ of c)if(Vu(_,p.pos)<s.reserveRadius){m=!0;break}if(m)continue;let x=!0;for(let _ of e.enemies)if(Dr(_)&&Vu([_.pos[0],_.pos[2]],p.pos)<s.radius+t.radius+.2){x=!1;break}if(!x)continue;let y=!1;if(l){if(o0(l,e,qu),nr[0]=p.pos[0],nr[1]=p.kind==="low"?i.combat.crouchHead*t.scale:t.height,nr[2]=p.pos[1],Cn(e.boxes,nr,qu))continue;Lr(p,s.popShift,ws),Wu[0]=ws[0],Wu[1]=t.muzzleUp+t.popLift,Wu[2]=ws[1],y=Cn(e.boxes,Wu,Yu(l,Ii))}let S=-Vu(a,p.pos)-.5*Math.abs(g-h)+(y?8:0);S>u+1e-9&&(u=S,d=p)}return d}function nR(n,e,t){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let d=Math.hypot(i.dir[0],i.dir[2]);d>1e-6&&(r=i.dir[0]/d,o=i.dir[2]/d)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,c=(-o+r)*a,h=Gn(e.boxes,[s[0],n.pos[1],s[2]],[l,0,c],t.radius,t.height);return[h.pos[0],h.pos[2]]}function Ly(n,e,t,i){n.goal[0]=i[0],n.goal[1]=i[1],n.path=n.stuckCount>=3?[[i[0],i[1]]]:Ml(e.graph,e.boxes,[n.pos[0],n.pos[2]],i,t.radius)||[[i[0],i[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}function Dy(n,e,t,i,s){let r=s*i,o=.15;for(let a=0;a<n.path.length+2;a++){let l=n.path[n.pathI],c=n.pathI===n.path.length-1,h=l[0]-n.pos[0],d=l[1]-n.pos[2],u=Math.hypot(h,d);if(u<=o){if(c)return"arrived";n.pathI++;continue}Tl(n,l[0],l[1],t,i);let p=Math.min(r,u);if(p<=1e-9)break;let f=Gn(e.boxes,n.pos,[h/u*p,0,d/u*p],t.radius,t.height),g=Math.hypot(f.pos[0]-n.pos[0],f.pos[2]-n.pos[2]);if(n.pos[0]=f.pos[0],n.pos[2]=f.pos[2],r-=g,g<p*.5)break}if(n.stuckT+=i,n.stuckT>=1){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05)return"stuck";n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}return"moving"}function ir(n,e,t){let i=e.started?Iy(n,e,t):null;n.point&&(!i||i.index!==n.point.index)&&El(n,e),Vo(n,0,e);let s;if(i?(n.point=i,e.reserved.set(i.index,Nr),s=i.pos):s=nR(n,e,t),n.shots=0,n.target=null,Math.hypot(s[0]-n.pos[0],s[1]-n.pos[2])<=.15){Ny(n,e,t);return}Ly(n,e,t,s),Or(n,"follow")}function Ny(n,e,t){if(n.stuckCount=0,n.point&&(n.pos[0]=n.point.pos[0],n.pos[2]=n.point.pos[1]),!e.started&&!n.point){Or(n,"idle");return}n0(n,e,t)}function n0(n,e,t){Or(n,"cover"),n.target=null,n.relocT=0,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function iR(n,e,t,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t.followMax){ir(n,e,t);return}Tl(n,s[0],s[2],t,i)}function sR(n,e,t,i){let s=Dy(n,e,t,i,t.runSpeed);s==="arrived"?Ny(n,e,t):s==="stuck"&&(n.stuckCount++,El(n,e),ir(n,e,t))}function rR(n,e,t,i){Vo(n,n.pop-r0(i,t.popTime),e);let s=e.player.pos;if(n.point?Q2(n,t,i):Tl(n,s[0],s[2],t,i),n.relocT+=i,n.relocT>=K2){n.relocT=0;let o=Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t.followMax;if(n.point){let a=n.point.pos,l=Math.hypot(n.pos[0]-a[0],n.pos[2]-a[1])>.3,c=Py(e,n.pos[0],n.pos[2]),h=!1;if(c){o0(c,e,qu);let d=n.point.kind==="low"?e.tuning.combat.crouchHead*t.scale:t.height;nr[0]=a[0],nr[1]=d,nr[2]=a[1],h=Cn(e.boxes,nr,qu)}if(o||l||h){ir(n,e,t);return}}else if(o||e.started&&Iy(n,e,t)){ir(n,e,t);return}}if(!e.started||n.stateT<n.wait)return;let r=Cy(n,e,t);r&&(n.target=r,n.shots=0,Or(n,"shoot"))}function oR(n,e,t,i){Vo(n,n.pop+r0(i,t.popTime),e);let s=n.target;if((!s||!Dr(s)||Go(s)||!Cn(e.boxes,aR(n,t),Yu(s,Ii)))&&(s=n.target=Cy(n,e,t)),!s){n0(n,e,t);return}if(Tl(n,s.pos[0],s.pos[2],t,i),n.stateT<t.popTime-1e-9)return;let r=n.muzzle;r[0]=n.pos[0],r[1]=n.pos[1]+t.muzzleUp+(n.point?t.popLift:0)*$u(n.pop),r[2]=n.pos[2];let o=j2(n.stateT-t.popTime,t.rate,t.burstTime);for(;n.shots<o;){n.shots++,Yu(s,Ii);let a=Ii[0]-r[0],l=Ii[1]-r[1],c=Ii[2]-r[2],h=Math.hypot(a,l,c)||1,d=Oo([a/h,l/h,c/h],t.spread,e.rand,n.scratch),u=yn(r,d,t.range,e.boxes,e.enemies),p=u.target&&(u.kind==="head"||u.kind==="body")?u.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:u.point,hit:p?p.id:null}),p&&e.hurtRep&&e.hurtRep(p,t.damage),!Dr(s)||Go(s))break}(!Dr(s)||Go(s))&&(n.target=null),n.stateT>=t.popTime+t.burstTime-1e-9&&n0(n,e,t)}var Xu=[0,0,0];function aR(n,e){return Xu[0]=n.pos[0],Xu[1]=n.pos[1]+e.muzzleUp+(n.point?e.popLift:0)*$u(n.pop),Xu[2]=n.pos[2],Xu}function lR(n,e,t,i){let s=Math.min(t.runSpeed*i,n.sideLeft);if(s>0){let r=Gn(e.boxes,n.pos,[n.side[0]*s,0,n.side[1]*s],t.radius,t.height),o=Math.hypot(r.pos[0]-n.pos[0],r.pos[2]-n.pos[2]);n.pos[0]=r.pos[0],n.pos[2]=r.pos[2],n.sideLeft-=o<s*.5?n.sideLeft:o}n.sideLeft<=1e-6&&ir(n,e,t)}function cR(n){let e=n.player.pos,t=0;Ii[0]=e[0],Ii[1]=.4,Ii[2]=e[2];for(let i of n.enemies)!Dr(i)||Go(i)||i.state==="spawn"||Cn(n.boxes,o0(i,n,t0),Ii)&&t++;return t}function hR(n,e){El(n,e),Vo(n,0,e),n.target=null,n.revGo=!1,n.threatT=0,n.kneeling=!1,n.reviveT=0,n.path=[],n.pathI=0,n.goal[0]=n.goal[1]=1/0,Or(n,"revive")}function uR(n,e,t,i){let s=e.player.pos;if(!n.revGo)if(n.threatT+=i,Vo(n,n.pop-r0(i,t.popTime),e),cR(e)<=t.reviveMaxThreats||n.threatT>=t.reviveWaitMax-1e-9)n.revGo=!0;else return;if(Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])<=t.reviveRange){n.kneeling||(n.kneeling=!0,n.reviveT=0,e.events.push({type:"tobbleKneel"})),Tl(n,s[0],s[2],t,i),n.reviveT+=i,n.reviveT>=t.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&Zu(e,"tobbleRevive",!0),ir(n,e,t));return}if(n.kneeling=!1,n.reviveT=0,Math.hypot(s[0]-n.goal[0],s[2]-n.goal[1])>t.reviveRange+.4||!n.path.length){let a=n.pos[0]-s[0],l=n.pos[2]-s[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.min(.8,t.reviveRange*.8);Ly(n,e,t,[s[0]+a*h,s[2]+l*h]),n.goal[0]=s[0],n.goal[1]=s[2]}let o=Dy(n,e,t,i,t.runSpeed);o==="stuck"?(n.stuckCount++,n.path=[]):o==="arrived"&&(n.path=[])}function dR(n,e,t,i){let s=e.player.pos,r=s[0]-n.pos[0],o=s[2]-n.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(n.yaw=qt(n.yaw,Math.atan2(r,o),t.turnRate*i)),a>t.reviveRange&&t.crawlSpeed>0){let l=Math.min(t.crawlSpeed*i,a-t.reviveRange),c=Gn(e.boxes,n.pos,[r/a*l,0,o/a*l],t.radius,t.height);n.pos[0]=c.pos[0],n.pos[2]=c.pos[2]}n.complainT+=i,n.complainT>=t.complainEvery-1e-9&&(n.complainT=0,Zu(e,"tobbleComplain"))}function Oy(n,e,t){(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,$2);let i=Ay(n,e);if(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.sinceHit+=t,n.downed){dR(n,e,i,t);return}switch(n.hp<i.health&&n.sinceHit>=i.regenDelay&&(n.hp=Math.min(i.health,n.hp+(i.regenTime>0?i.health/i.regenTime*t:i.health))),e.playerDowned?n.state!=="revive"&&hR(n,e):n.state==="revive"&&ir(n,e,i),n.state!=="sidestep"&&n.state!=="revive"&&e.aim&&e.aim.active&&Ry(e,i,n.pos[0],n.pos[2])<i.lofClear?(n.lofT+=t,n.lofT>=i.sidestepReact-1e-9&&eR(n,e,i)):n.state!=="sidestep"&&(n.lofT=0),n.state){case"idle":iR(n,e,i,t);break;case"follow":sR(n,e,i,t);break;case"cover":rR(n,e,i,t);break;case"shoot":oR(n,e,i,t);break;case"sidestep":lR(n,e,i,t);break;case"revive":uR(n,e,i,t);break;default:break}}function a0(n,e,t){return n.downed||!(e>0)?null:(n.hp-=e,n.sinceHit=0,n.hp>0?"hit":(n.hp=0,n.downed=!0,n.kneeling=!1,n.reviveT=0,n.complainT=0,n.target=null,n.pop=0,El(n,t),Or(n,"downed"),t.events.push({type:"tobbleDown"}),Zu(t,"tobbleDown",!0),"downed"))}function l0(n,e){if(!n.downed)return!1;let t=Ay(n,e);return n.downed=!1,n.hp=Math.max(1,t.reviveHealth*t.health),n.sinceHit=0,n.lofT=0,n.complainT=0,e.events.push({type:"tobbleUp"}),Zu(e,"tobbleUp"),ir(n,e,t),!0}var Uy=new Set(["cover","coverSlide","coverSwap"]),Fy=new Set(["cover","suppress","reload","flinch"]),fR=new Set(["cover","suppress","reload"]),ky=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),By=8,pR=1,mR=.1,c0=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function zy({level:n,boxes:e,edges:t,rand:i,tuning:s=j}){let r=()=>s.associate,o=Qv(t,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=ly(n.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=Ty(),c=Zv(s.grenade),h=Ey(n,s),d=new Map,u=()=>!!n.tobble&&s.tobble.enabled>0,p=[],f=[],g=n.associates.length,m=n.associates.map(U=>Kp(U,s.associate));for(let U=g;U<By;U++)m.push($p(Kp({id:`r${U+1}`,pos:[0,0,0]},s.associate)));let x=()=>Math.max(g,Math.min(By,Math.round(s.director.maxEnemies))),y=x(),S=Bu({state:"move",pos:[0,0,0],cover:null,scratch:{}}),_={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},M={boxes:e,points:o,graph:a,tokens:l,reserved:d,player:_,now:0,rand:i,tokenCount:0,events:p,tuning:s,director:s.director,others:m,started:!1,aim:void 0,tobble:null,enemies:m,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null},b={enemies:m,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list,tobble:null},v=!1,w=0,C=[0,0],R=!1,L=!1;function T(){d.clear();for(let U of m.slice(0,g)){let K=null,ne=1/0;for(let he of o){let ie=Math.hypot(he.pos[0]-U.pos[0],he.pos[1]-U.pos[2]);ie<ne&&(ne=ie,K=he)}U.point=K,K&&d.set(K.index,U.id)}}T(),b.tobble=M.tobble=u()?i0(n.tobble,s.tobble):null;let I=()=>b.tobble&&!b.tobble.downed,E=(U,K,ne=p,he=!1)=>ne.push(he?{type:"bark",id:U,key:K,force:he}:{type:"bark",id:U,key:K}),N=()=>m.find(U=>U.alive)||m[0];function k(){for(let U of l.held())l.release(U,b.now,s.director)}function V(U){b.started=!0,b.startT=b.now,E(N().id,"lockdown",U)}function te(U){U.diedAt=b.now,b.kills++,h.noteDeath(U.id)}function X(U,K,ne,he){!b.started&&U.alive&&U.state!=="unused"&&K>0&&V(he),M.events=he;let ie=wy(U,K,M,ne);return M.events=p,ie==="kill"&&te(U),ie==="kill"&&ne==="head"&&I()&&++w%3===0&&E("tobble","tobbleHeadshot",he),ie}M.hurtRep=(U,K)=>X(U,K,"tobble",p),M.reviveDoc=()=>!M.health||!M.health.downed?!1:(M.health.revive(),M.m.revive(),_.downed=!1,p.push({type:"revived"}),!0);function Q(U,K){let ne=_,he=s.combat;ne.pos[0]=U.pos[0],ne.pos[1]=U.pos[1],ne.pos[2]=U.pos[2];let ie=Uy.has(U.state)?_s(U):null;ne.exposed=!!(U.cover&&U.cover.exposed);let ve=!!ie&&ie.kind==="low"&&!ne.exposed;ne.chest[0]=U.pos[0],ne.chest[1]=U.pos[1]+(ve?.6:1.2),ne.chest[2]=U.pos[2];let se=Bu(U,S,he).shapes.head.c;ne.head[0]=se[0],ne.head[1]=se[1],ne.head[2]=se[2],ne.speed=U.speed(),ne.coverNormal=ie?ie.normal:null,ne.downed=!!K.downed}function $(U,K){let ne=s.director;if(Uy.has(U.state)?_.exposed||(b.hideT+=K):b.hideT=0,!L||Math.hypot(U.pos[0]-C[0],U.pos[2]-C[1])>ne.stayRadius?(C[0]=U.pos[0],C[1]=U.pos[2],L=!0,b.stayT=0):b.stayT+=K,b.hideT>=ne.pushAfter&&!m.some(ie=>ie.alive&&ie.role==="push")){let ie=m.filter(se=>se.alive&&se.role==="hold"&&Fy.has(se.state)&&!l.holds(se.id)).sort((se,me)=>c0(se.pos,_.pos)-c0(me.pos,_.pos)),ve=null;for(let se of ie){if(se.role="push",Gu(se,M)){ve=se;break}se.role="hold"}ve?(E(ve.id,"push"),b.hideT=0):b.hideT=Math.max(0,ne.pushAfter-1)}if(b.stayT>=ne.flankAfter&&!m.some(ie=>ie.alive&&ie.role==="flank")){let ie=null,ve=-1/0;for(let se of m){if(!se.alive||se.role!=="hold"||!Fy.has(se.state)||l.holds(se.id))continue;se.role="flank";let me=Gu(se,M);se.role="hold",me&&me.score>ve&&(ve=me.score,ie=se)}ie&&(ie.role="flank",I()&&E("tobble","tobbleFlank"),E(ie.id,"flank")),b.stayT=0}}function Y(){let U=r().reviveRange;for(let K of m){if(!K.alive||K.state!=="downed"||K.helper)continue;let ne=null,he=1/0;for(let ie of m){if(!ie.alive||!fR.has(ie.state)||ie.role!=="hold"||l.holds(ie.id))continue;let ve=c0(ie.pos,K.pos);ve<=U&&ve<he&&(he=ve,ne=ie)}ne&&(xy(ne,K,M),E(ne.id,"cloneRevive"))}}function _e(){for(let U=0;U<y;U++){let K=m[U];if(!K.claimed&&(K.state==="unused"||K.state==="dead"&&b.now-K.diedAt>=pR-1e-9))return K.claimed=!0,K}return null}function J(){let U=h.step(0,{started:b.started,sinceStart:b.now-b.startT,kills:b.kills,freeSlot:_e,now:b.now});for(let K of U){if(p.push(K),K.type==="padOpen"){E(K.id,"padOpen",p,!0),I()&&E("tobble","tobblePad",p,!0);continue}if(K.type!=="padSpawn")continue;let ne=h.list.find(ie=>ie.id===K.id),he=m.find(ie=>ie.id===K.enemyId);Zp(he,ne.pos,M)}}let Z=[0,0,0],fe=[0,0,0];function Be(U,K,ne){let he=s.grenade,ie=0;Z[0]=U[0],Z[1]=U[1]+.3,Z[2]=U[2];let ve=(me,Ue)=>{let Ve=Math.hypot(me[0]-U[0],me[1]-U[1],me[2]-U[2]),z=qv(Ve,he);return z>0&&Cn(e,Z,me)?Ue(z):null};for(let me of m){if(!me.alive||me.state==="executed")continue;let Ue=me.shapes.body;fe[0]=me.pos[0],fe[1]=(Ue.a[1]+Ue.b[1])/2,fe[2]=me.pos[2],ve(fe,Ve=>X(me,Ve,"blast",p))==="kill"&&ie++}fe[0]=K.pos[0],fe[1]=K.pos[1]+(_.chest[1]-K.pos[1]<1?.45:.9),fe[2]=K.pos[2],ve(fe,me=>{let Ue=me*he.selfDamage,Ve=ne.damage(Ue);return Ve===null||(p.push({type:"playerHit",id:null,from:[U[0],U[1],U[2]],amount:Ue,result:Ve}),Ve==="downed"&&(K.state!=="downed"&&K.down(),k())),null});let se=h.blast(U);for(let me of se)p.push({type:"padClosed",id:me}),E(me,"padClosed");p.push({type:"explode",pos:[U[0],U[1],U[2]],kills:ie,closed:se})}function W(U,K,ne){for(let he of c.step(U,e))he.type==="explode"?Be(he.pos,K,ne):p.push(he)}function Te(){let U=r();for(let K of c.live)if(!(K.fuse>U.diveWarn))for(let ne of m)!ne.alive||ne.state==="downed"||ne.state==="executed"||ne.state==="dive"||K.rolled&&K.rolled.has(ne.id)||Math.hypot(ne.pos[0]-K.pos[0],ne.pos[2]-K.pos[2])>U.diveRadius||((K.rolled||(K.rolled=new Set)).add(ne.id),i()<U.diveChance&&yy(ne,K.pos,M)&&!K.barked&&(K.barked=!0,E(ne.id,"dive")))}let Le=U=>{let K=U.point,ne=r();return K.kind==="tall"&&U.pop>0?[K.pos[0]+K.tangent[0]*K.end*ne.popShift*U.pop,K.pos[1]+K.tangent[1]*K.end*ne.popShift*U.pop]:K.pos};function Ae(U){let K=s.associate.radius,ne=s.associate.height,he=(se,me,Ue)=>{if(se.state==="executed")return;let Ve=Gn(e,se.pos,[me,0,Ue],K,ne);se.pos[0]=Ve.pos[0],se.pos[2]=Ve.pos[2]},ie=se=>se.state==="executed";for(let se=0;se<m.length;se++){let me=m[se];if(!me.alive)continue;for(let Ne=se+1;Ne<m.length;Ne++){let qe=m[Ne];if(!qe.alive)continue;let de=qe.pos[0]-me.pos[0],nt=qe.pos[2]-me.pos[2],Ie=Math.hypot(de,nt);if(Ie>=2*K)continue;Ie<1e-6&&(de=1,nt=0,Ie=1);let Xe=(2*K-Ie)/2,O=ie(qe)?2:ie(me)?0:1,A=ie(me)?2:ie(qe)?0:1;he(me,-de/Ie*Xe*O,-nt/Ie*Xe*O),he(qe,de/Ie*Xe*A,nt/Ie*Xe*A)}let Ue=me.pos[0]-U.pos[0],Ve=me.pos[2]-U.pos[2],z=Math.hypot(Ue,Ve),ye=K+s.move.radius;z<ye&&(z<1e-6&&(Ue=1,Ve=0,z=1),he(me,Ue/z*(ye-z),Ve/z*(ye-z)))}let ve=b.tobble;if(ve){let se=s.tobble.radius,me=s.tobble.height,Ue=(qe,de)=>{let nt=Gn(e,ve.pos,[qe,0,de],se,me);ve.pos[0]=nt.pos[0],ve.pos[2]=nt.pos[2]};for(let qe of m){if(!qe.alive)continue;let de=qe.pos[0]-ve.pos[0],nt=qe.pos[2]-ve.pos[2],Ie=Math.hypot(de,nt),Xe=se+K;if(Ie>=Xe)continue;Ie<1e-6&&(de=1,nt=0,Ie=1);let O=Xe-Ie,A=ie(qe)||qe.point&&ky.has(qe.state)?1:.5;Ue(-de/Ie*O*A,-nt/Ie*O*A),he(qe,de/Ie*O*(1-A),nt/Ie*O*(1-A))}let Ve=ve.pos[0]-U.pos[0],z=ve.pos[2]-U.pos[2],ye=Math.hypot(Ve,z),Ne=se+s.move.radius;ye<Ne&&(ye<1e-6&&(Ve=1,z=0,ye=1),Ue(Ve/ye*(Ne-ye),z/ye*(Ne-ye)))}for(let se of m){if(!se.alive||!se.point||!ky.has(se.state))continue;let me=Le(se);if(Math.hypot(se.pos[0]-me[0],se.pos[2]-me[1])<=.3)continue;let Ue=Math.hypot(me[0]-U.pos[0],me[1]-U.pos[2])>=K+s.move.radius-.001;b.tobble&&Math.hypot(me[0]-b.tobble.pos[0],me[1]-b.tobble.pos[2])<K+s.tobble.radius-.001&&(Ue=!1);for(let Ve of m)Ve===se||!Ve.alive||!Ue||Math.hypot(me[0]-Ve.pos[0],me[1]-Ve.pos[2])<2*K-.001&&(Ue=!1);if(Ue){se.pos[0]=me[0],se.pos[2]=me[1];continue}l.holds(se.id)&&l.release(se.id,b.now,s.director),se.mustMove=!0,se.pop=0,se.blind=0,se.state="seek",se.stateT=0}}let be=[null];function Ce(U,K){let ne=r(),he=[0,0,0];be[0]=b.tobble;for(let ie=0;ie<p.length;ie++){let ve=p[ie];if(ve.type!=="enemyShot")continue;if(ve.accurate&&K.downed&&ve.target!=="tobble"){p.splice(ie--,1);continue}let se=Oo(ve.dir,ve.spread,i,he);if(ve.target==="tobble"){let me=b.tobble,Ue=yn(ve.from,se,ne.range,e,be);if(me&&!me.downed&&(Ue.kind==="head"||Ue.kind==="body")){let Ve=a0(me,ne.damage,M);p.push({type:"tobbleHit",id:ve.id,from:ve.from,result:Ve})}p.push({type:"shotFx",from:ve.from,to:Ue.point,accurate:!0})}else if(ve.accurate){let me=oy(ve.from,se,ne.range,e,U,s.combat),Ue=me.point;if(me.kind==="head"||me.kind==="body"){let Ve=K.damage(ne.damage);p.push({type:"playerHit",id:ve.id,from:ve.from,amount:ne.damage,result:Ve}),Ve==="downed"&&(U.state!=="downed"&&U.down(),k())}p.push({type:"shotFx",from:ve.from,to:Ue.slice(),accurate:!0})}else{let me=yn(ve.from,se,ne.range,e,[]);p.push({type:"shotFx",from:ve.from,to:me.point,accurate:!1})}}}return b.targets=()=>m,b.freeSlot=_e,b.step=(U,K)=>{(!(U>0)||!Number.isFinite(U))&&(U=0),U=Math.min(U,mR),p.length=0;for(let se of f)p.push(se);f.length=0;let{m:ne,health:he}=K;if(b.now+=U,M.now=b.now,M.aim=K.aim,M.m=ne,M.health=he,!b.started&&ne.pos[2]>n.trigger.z&&V(p),M.started=b.started,Q(ne,he),M.playerDowned=_.downed,_.downed){I()||k();for(let se of m)se.role!=="revive"&&(se.role="hold");!R&&b.started&&E(N().id,"downed")}else b.started&&!b.clear&&$(ne,U);R=_.downed,b.started&&(Y(),J()),l.expire(b.now,s.director),M.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,W(U,ne,he),Te(),b.tobble&&(Oy(b.tobble,M,U),wl(b.tobble,s.combat));let ie=p.length;for(let se of m)Sy(se,M,U);for(let se=ie;se<p.length;se++)p[se].type==="death"&&te(m.find(me=>me.id===p[se].id));Ce(ne,he),Ae(ne);for(let se of m)Ho(se,s.combat);b.tobble&&wl(b.tobble,s.combat);let ve=!!b.tobble&&b.tobble.downed&&he.downed;return ve&&!v&&p.push({type:"checkpoint"}),v=ve,b.started&&!b.clear&&m.every(se=>!se.alive)&&h.allDone()&&(b.clear=!0,p.push({type:"clear"}),E(m[0].id,"clear"),b.tobble&&(l0(b.tobble,M),E("tobble","tobbleClear"))),p},b.hurt=(U,K,ne="body")=>X(U,K,ne,f),b.bash=U=>{if(!U.alive||U.state==="executed"||U.state==="unused")return null;let K=X(U,s.melee.bashDamage,"bash",f);return K==="hit"?(vy(U,M),"hit"):K==="kill"?"kill":null},b.beginExecution=U=>_y(U,M),b.finishExecution=U=>{M.events=f;let K=My(U,M,"execute");return M.events=p,K==="kill"&&te(U),K},b.releaseExecution=U=>by(U),b.openPad=U=>{let K=h.list.find(ne=>ne.id===U);return!K||K.state!=="dormant"?!1:(K.state="open",K.nextT=b.now+s.pad.interval,f.push({type:"padOpen",id:U}),E(U,"padOpen",f,!0),I()&&E("tobble","tobblePad",f,!0),!0)},b.forceClear=()=>{for(let U of m)U.alive&&X(U,1e6,"blast",f);for(let U of h.list)(U.state==="dormant"||U.state==="open")&&(U.state="closed");return!0},b.spawnRep=()=>{let U=_e();if(!U)return null;let K=h.list[0];return Zp(U,K?K.pos:[0,0,0],M)},b.downRep=U=>{M.events=f;let K=e0(U,M);return M.events=p,K==="down"},b.hurtTobble=U=>{if(!b.tobble)return null;M.events=f;let K=a0(b.tobble,U,M);return M.events=p,K},b.reserved=d,b.reviveTobble=()=>{if(!b.tobble)return!1;M.events=f;let U=l0(b.tobble,M);return M.events=p,U&&wl(b.tobble,s.combat),U},b.throwGrenade=(U,K)=>c.throw(U,K),b.reset=()=>{l.reset(),c.reset(),h.reset(),y=x(),m.forEach((U,K)=>{qp(U,s.associate),K>=g&&$p(U)}),T(),b.tobble=M.tobble=u()?b.tobble?s0(b.tobble):i0(n.tobble,s.tobble):null,v=!1,w=0,M.playerDowned=!1,p.length=0,f.length=0,b.started=b.clear=!1,b.now=0,b.startT=0,b.kills=0,b.hideT=b.stayT=0,M.now=0,M.started=!1,M.aim=void 0,R=!1,L=!1;for(let U of m)Ho(U,s.combat)},b}function Ku(n,e,t){let i=t[0]-e[0],s=t[2]-e[2],r=wu(n),o=Tu(n),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var Hy=n=>Math.max(0,Math.min(1,n));function Gy({hp:n,max:e,downed:t,downT:i,hits:s=[],now:r,fb:o=j.feedback}){let a=t?1:e>0?Hy(1-n/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let d=o.hitFlashTime>0?Hy(1-(r-h.t)/o.hitFlashTime):0;if(d<=0)continue;let u=Math.cos(h.angle),p=Math.sin(h.angle);l.top=Math.max(l.top,d*Math.max(0,u)),l.right=Math.max(l.right,d*Math.max(0,p)),l.bottom=Math.max(l.bottom,d*Math.max(0,-u)),l.left=Math.max(l.left,d*Math.max(0,-p))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!t,seconds:t?Math.ceil(Math.max(0,i)):0}}}var gR=Object.freeze({Rep:H.glorpPurple,PA:H.cream,Tobble:H.tobbleMint}),sr=(...n)=>Object.freeze(n.map(e=>Object.freeze({speaker:"Tobble",text:e}))),h0=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),tobbleRevive:sr("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:sr("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:sr("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:sr("Two more reps! I'm good!"),tobbleFlank:sr("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:sr("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:sr("Ooh, you closed your rings!"),tobbleHeadshot:sr("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function Vy(n=()=>j.feedback){let e=1/0,t=0,i=null,s={},r=[],o=l=>{let c=h0[l],h=c[(s[l]||0)%c.length];return typeof h=="string"?"Rep":h.speaker};function a(l){let c=h0[l],h=(s[l]||0)%c.length;s[l]=h+1,i=typeof c[h]=="string"?{speaker:"Rep",text:c[h]}:c[h],t=n().barkTime,e=0}return{say(l,c=!1){return!h0[l]||!c&&e<n().barkGap?!1:c&&i&&t>0&&e<1e-9&&o(l)!==i.speaker?(r.push(l),!0):(a(l),!0)},tick(l){l>0&&(e+=l,t-=l,r.length&&e>=n().barkMinShow&&a(r.shift()))},current:()=>t>0&&i?{speaker:i.speaker,text:i.text,color:gR[i.speaker]||null}:null,reset(){e=1/0,t=0,i=null,r.length=0;for(let l of Object.keys(s))s[l]=0}}}var Wy=4,xR=1.2,Fn=[0,0,0];function vR(){let n=(e,t,i,s,r)=>{let o=new xt(e,t,i).translate(0,s,0);o.deleteAttribute("uv");let a=new Qe(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new Tt(c,3)),o};return Bt([n(.3,.16,.22,.08,H.cream),n(.34,.07,.26,.195,H.playerOrange)],!1)}function yR(n,e,t){return n.accurate&&e?(e(t),t):(t[0]=n.from[0],t[1]=n.from[1],t[2]=n.from[2],t)}function Xy({scene:n,effects:e,sfx:t,fight:i,views:s,cam:r=null,hooks:o={}}){let a=new Map(i.enemies.map((R,L)=>[R.id,s[L]])),l=new Map(i.enemies.map(R=>[R.id,R])),c=new Map,h=[],d=new hs(vR(),It({vertexColors:!0,rim:0}),Wy);d.name="pickups",d.frustumCulled=!1,d.count=0,n.add(d);let u=new Zt,p=0,f=Vy(),g=(R,L)=>Math.sin(Ku(R.yaw,R.pos,L)),m=(R,L)=>Math.min(1,6/Math.max(Math.hypot(L[0]-R.pos[0],L[2]-R.pos[2]),.001)),x=[0,0,0],y=[0,1,0],S=(R,L=1)=>(x[0]=R[0],x[1]=R[1]+L,x[2]=R[2],x);function _(R,L){let T=j.feedback,I=R.kind;if(I==="body"||I==="head")return;let E=S(R.pos),N=I==="execute"?T.killGelCount*2:I==="bleed"?T.gelCount:T.killGelCount;if(e.gel(E,y,N),I!=="bleed"){if(e.receipts(S(R.pos,1.2),T.receiptCount),w(R.pos),I==="tobble"){t.play("kill",T.killVolume*.5,g(L,R.pos));return}o.marker&&o.marker("kill"),t.play(I==="execute"?"finish":"kill",I==="execute"?T.bashVolume:T.killVolume,g(L,R.pos))}}let M=R=>{let L=i.pads.find(T=>T.id===R);return L?L.pos:[0,0,0]};function b(R){let L=null,T=1/0;for(let I of i.enemies){let E=Math.hypot(I.pos[0]-R[0],I.pos[2]-R[2]);E<T&&(T=E,L=I)}return L}function v(R,L){let T=j.feedback,I=j.associate;for(let E of R)if(E.type==="bark")f.say(E.key,!!E.force);else if(E.type==="padOpen")t.play("saunaOpen",T.saunaVolume,g(L,M(E.id)));else if(E.type==="padClosed")t.play("saunaClose",T.saunaVolume,g(L,M(E.id)));else if(E.type==="padSpawn"){let N=M(E.id);for(let k=0;k<4;k++)e.steam([N[0]+(k-1.5)*.25,.1,N[2]])}else if(E.type==="explode"){e.blast(E.pos);let N=Math.hypot(E.pos[0]-L.pos[0],E.pos[2]-L.pos[2]),k=Math.min(1,8/Math.max(N,.001));t.play("boom",T.boomVolume*Math.max(.4,k),g(L,E.pos)),r&&(r.kick(4*k,(Math.random()*2-1)*2*k),r.bump(k))}else if(E.type==="clank")t.play("clank",T.clankVolume*m(L,E.pos),g(L,E.pos));else if(E.type==="tobbleShot"){let N=i.tobble,k=o.tobbleView;k&&N&&N.pop>=.5?k.tip(Fn):(Fn[0]=E.from[0],Fn[1]=E.from[1],Fn[2]=E.from[2]);let V=E.to[0]-Fn[0],te=E.to[1]-Fn[1],X=E.to[2]-Fn[2],Q=Math.hypot(V,te,X)||1;e.flash(Fn,[V/Q,te/Q,X/Q]),e.friendlyTracer(Fn,E.to),t.play("tobbleShot",T.tobbleShotVolume*m(L,E.from),g(L,E.from))}else if(E.type==="tobbleHit"){let N=i.tobble;N&&e.gel(N.chest,[E.from[0]-N.chest[0],.3,E.from[2]-N.chest[2]],4)}else if(E.type==="revived")t.play("revive",T.reviveVolume);else if(E.type==="cloneRevive"){let N=l.get(E.id);N&&t.play("revive",T.reviveVolume*.6*m(L,N.pos),g(L,N.pos))}else if(E.type==="down")o.marker&&o.marker("kill"),e.gel(S(E.pos),y,6),t.play("hit",T.hitVolume,g(L,E.pos));else if(E.type==="death")_(E,L);else if(E.type==="checkpoint")o.restart&&o.restart();else if(E.type==="telegraph"){c.set(E.id,I.popTime+I.telegraphTime);let N=a.get(E.id),k=l.get(E.id);N&&N.glint(!0),k&&t.play("charge",T.chargeVolume,g(L,k.pos))}else if(E.type==="shotFx"){let N=b(E.from),k=N&&a.get(N.id);yR(E,k?k.tip:null,Fn);let V=E.to[0]-Fn[0],te=E.to[1]-Fn[1],X=E.to[2]-Fn[2],Q=Math.hypot(V,te,X)||1;e.enemyFlash(Fn,[V/Q,te/Q,X/Q]),e.enemyTracer(Fn,E.to);let $=Math.hypot(E.from[0]-L.pos[0],E.from[2]-L.pos[2]);t.play("blaster",T.blasterVolume*Math.min(1,8/Math.max($,.001)),g(L,E.from))}}function w(R){h.length>=Wy&&h.shift(),h.push({pos:[R[0],R[1],R[2]]}),C()}function C(){d.count=h.length;for(let R=0;R<h.length;R++)u.position.set(h[R].pos[0],h[R].pos[1],h[R].pos[2]),u.rotation.set(0,p*xR+R,0),u.updateMatrix(),d.setMatrixAt(R,u.matrix);d.instanceMatrix.needsUpdate=!0}return{handle:v,forceBark:R=>f.say(R,!0),bark:()=>f.current(),pan:g,near:m,tick:R=>f.tick(R),update(R){if(R>0){p+=R;for(let[L,T]of c)if(T-R<=0){c.delete(L);let I=a.get(L);I&&I.glint(!1)}else c.set(L,T-R);h.length&&C()}},addPickup:w,collect(R,L){let T=0;for(let I=h.length-1;I>=0;I--)Math.hypot(R[0]-h[I].pos[0],R[2]-h[I].pos[2])<=L&&(h.splice(I,1),T++);return T&&C(),T},count:()=>h.length,pickups:()=>h.map(R=>R.pos.slice()),reset(){h.length=0,d.count=0,d.instanceMatrix.needsUpdate=!0,c.clear(),f.reset()}}}var u0=.05;function _R({locked:n,device:e,panelOpen:t}){return!!(n||e==="pad"||t)}function Yy(n){return`${n.gap}|${n.endInset}|${n.minLength}`}function bR(n){if(n&&n.has("room"))return{name:"greyRoom",jumped:!1};let e=n&&n.get("arena");return e&&Un.includes(e)?{name:e,jumped:!0}:{name:Un[0],jumped:!1}}function MR(n,e,{downed:t=!1,busy:i=!1}={}){return t&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(t||i)&&(n.fire=!1),n}var SR=2e3,wR=500,TR=500,ER=new Set(["enemyShot","playerHit","telegraph","death","clear","bark","down","explode","padOpen","padClosed","padSpawn","tobbleShot","tobbleHit","revived","checkpoint"]);function AR(){try{return window.localStorage||null}catch{return null}}function qy({canvas:n,gl:e,params:t}){let i=zh(n,e),s=i.renderer,r=Bh(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=kx();l.panelOpen=c.isOpen;let h=new ur,d=new gn(j.camera.fov,1,.05,100),u=Hh();h.add(u.mesh);let p=bR(t),f=Lx({storage:p.name==="greyRoom"?null:AR()}),g=null,m="",x=null,y=null,S=[],_={pos:[0,0,0],yaw:0},M=[],b=[],v=null,w=[],C=new Map,R=null,L=null,T=null,I=null,E=null,N=null,k=[],V=()=>Wx(S,{...Vx(),exclude:x.coverExclude}),te=Yy(j.cover),X=[],Q=0,$=!1,Y=tv({boxes:S,spawn:[0,0,0],coverEdges:[],onAction(F){N&&N.onAction(F)},onState(F,we){X.push({state:F,from:we,t:Q,tapped:$,auto:F==="coverSlide"&&!$&&(we==="move"||we==="sprint")}),X.length>SR&&X.shift()},onStep(F){J.dip(j.feedback.stepDip),fe.play("step",j.feedback.stepVolume*(F.sprint?1.25:1))}}),_e=Cv(Y);h.add(_e.group);let J=dx(),Z=au(),fe=nv({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),Be=iv(),W=ov(),Te=mv(h),Le=xv(document.body),Ae=Ro(1),be=sy(),Ce=Kv(),U=!1,K=null,ne=0,he={restart:()=>{U=!0},marker:F=>{K=F,ne=j.feedback.killMarkerTime},tobbleView:null};function ie(){!v||E===v.tobble||(I&&(g.remove(I.group),rp(I.group)),I=v.tobble?Hv(v.tobble):null,I&&g.add(I.group),E=v.tobble,he.tobbleView=I)}function ve(){g&&(rp(g),g=null,I=null,E=null,he.tobbleView=null)}function se(F){ve(),m=F,x=F==="greyRoom"?du:Rx[F],g=new mt,g.name=`arena-${F}`,h.add(g),y=xx(x),g.add(y.group),S=y.boxes,_=x.spawn,Y.boxes=S,Y.coverEdges=V(),M=(x.dummies||[]).map(we=>{let Oe=hv(we),ot=vv(Oe);return g.add(ot.group),{dummy:Oe,view:ot,wasAlive:!0}}),b=M.map(we=>we.dummy),v=F==="greyRoom"?null:zy({level:x,boxes:S,edges:V(),rand:Ro(4242)}),w=v?v.enemies.map(we=>{let Oe=Nv(we);return g.add(Oe.group),Oe}):[],C=new Map(v?v.enemies.map((we,Oe)=>[we,w[Oe]]):[]),R=v?Tv(g):null,L=v?Gv(g,v.pads,Te):null,T=v?Xy({scene:g,effects:Te,sfx:fe,fight:v,views:w,cam:J,hooks:he}):null,ie(),N=v?iy({mover:Y,fight:v,arsenal:W,bag:Ce,cam:J,sfx:fe,effects:Te,views:w,health:be,playerView:_e,grenadeView:R,boxes:S,hooks:he}):null,k=v?v.targets():b,y.setGateOpen(!1,!0),me=!1}let me=!1,Ue=[],Ve=[],z={pos:[0,0,0],yaw:0},ye=[],Ne="-",qe="-",de=null,nt=null,Ie=0,Xe=1,O=[],A={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},ee=[0,0,0],Re=0,ge=[0,0,0],Ee=null,De=!1,ce=null,pe=!1,ke=!1,G=!1,le={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1,melee:!1},ae={reload:!1,weapon:null,fire:!1,interact:!1,melee:!1},Fe={melee:!1,interact:!1},Pe={melee:!1,grenade:!1,interact:!1},xe={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1,grenade:!1,interactHeld:!1},Me={weapon:null,reload:!1,fire:!1,firePressed:!1},Ze=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function Se(){let F=i.resize();d.aspect=F.aspect,d.updateProjectionMatrix()}Se(),window.addEventListener("resize",Se),n.addEventListener("click",()=>r.requestLock());let We=()=>{Z.reset(),Be.reset()};window.addEventListener("blur",We),document.addEventListener("pointerlockchange",()=>{r.isLocked()||We()});let je=()=>fe.unlock();window.addEventListener("pointerdown",je),window.addEventListener("keydown",je),window.addEventListener("keydown",F=>{F.repeat||Lf(F.target)||(F.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):F.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function ze(){be.reset(),W.reset(),Ce.reset(),_n(_.pos,_.yaw),de=null,Z.reset(),Be.reset(),J.recenter(),Te.clear(),O.length=0,Ue.length=0,K=null,nt=null,ne=0,Ie=0,U=!1}function st(){v&&v.reset(),ze(),T&&T.reset();for(let F of w)F.reset();v&&(N.reset(),R.reset(),L.reset(),ie(),I&&I.reset()),f.restart(),y.setGateOpen(!1,!0),me=!1}function ft(F){se(F),ze(),J.snap(_.pos,_.yaw,"normal",1),Rt=F==="greyRoom"?0:j.run.hoursTime}let Rt=0;function zt(){f.markClear()&&!me&&(me=!0,y.setGateOpen(!0),fe.play("saunaOpen",j.feedback.saunaVolume))}function Ft(){Y.state!=="downed"&&Y.down(),W.cancelReload(),fe.play("downed",j.feedback.hurtVolume),T&&T.forceBark("downed")}function Vn(F){Ve.push({t:Q,type:F.type,id:F.id||null,accurate:!!F.accurate,hit:F.type==="playerHit",key:F.key||null,kind:F.kind||null}),Ve.length>TR&&Ve.shift()}function pn(F){let we=j.feedback;z.pos[0]=Y.pos[0],z.pos[1]=Y.pos[1],z.pos[2]=Y.pos[2],z.yaw=J.yaw;let Oe=v.step(F,{m:Y,health:be,aim:{lens:Ot.pos,dir:Ot.dir,active:!!de&&de!=="blind"||Y.grenadeAim}});T.handle(Oe,z);for(let He of Oe)if(ER.has(He.type)&&Vn(He),He.type==="playerHit"){let ct=Ku(J.yaw,Y.pos,He.from);Ue.push({t:Q,angle:ct});let vt=Math.random()*2*Math.PI;J.kick(we.hitKick*Math.cos(vt),we.hitKick*Math.sin(vt)),fe.play("hurt",we.hurtVolume,Math.sin(ct)),N.onPlayerHit(),He.result==="downed"&&Ft()}else He.type==="clear"&&(fe.play("clear",we.killVolume),zt());for(;Ue.length&&Q-Ue[0].t>we.hitFlashTime;)Ue.shift();let ot=be.update(F,{standIn:!v.tobble});if(ot==="revived"&&Y.revive(),ot==="bleedOut"||U){st();return}let ut=be.downed?0:T.collect(Y.pos,j.combat.pickupRadius);ut&&(W.addReserve("regret",ut*j.associate.ammoDrop),fe.play("pickup",we.pickupVolume))}function Nt(){let F=gu[f.arena];return x.boss?F:v.clear?f.gateOpen?`${F}: clear \u2014 head for the GO gate`:`${F}: set complete`:v.pads.some(we=>we.state==="open")?yl("sauna",r.device()):v.started?f.arena==="turnstiles"?"Get past the front desk":`${F}: clear the room`:"Walk in"}function _n(F,we){Y.place(F,we),J.snap(F,we,bp(Y),Rr(Y)),Re=Y.slams}let Ot={pos:[0,0,0],dir:[0,0,1],fov:70},kn="normal",di=1,fi=0,es=0,ei=0,pi=0,Ur=0,rr=0,Fr=0,_t=window.__cr;_t.stats=()=>({fps:fi,ms:es,calls:Ur,tris:rr,scale:i.scale(),characters:1+w.length+(I?1:0)}),_t.player=()=>{let F=Y.cover;return{pos:Y.pos.slice(),state:Y.state,speed:Y.speed(),facing:Y.facing,entries:Y.entries,cover:F?{id:F.edge.id,kind:F.edge.kind,t:F.t,length:F.edge.length,pop:F.pop,exposed:F.exposed}:null,slams:Y.slams,steps:Y.steps,blind:F?F.blind:0,firing:!!Y.firing}},_t.gun=()=>{let F=W.current(),we=W.ammo[F],Oe=W.reload,ot=j.weapons[F];return{id:F,slot:W.slot,mag:we.mag,reserve:we.reserve,boost:we.boost,reload:Oe?{u:Oe.t/Math.max(ot.reloadTime,j.combat.minReloadTime),press:Oe.press}:null,switching:W.switching>0,spread:W.spreadOf(de||"hip"),stance:de}},_t.dummies=()=>b.map(F=>({id:F.id,health:F.health,alive:F.alive,pos:F.pos.slice()})),_t.level=()=>x.name||m,_t.run=()=>({arena:f.arena,index:f.index,checkpoint:f.checkpoint,phase:f.phase,cleared:f.cleared,gateOpen:f.gateOpen,fade:f.fade,saved:f.saved,hours:Rt>0?ip(f.checkpoint):null}),_t.gate=()=>x.exit?{pos:x.exit.pos.slice(),yaw:x.exit.yaw,w:x.exit.w,open:me,openness:y.gate?y.gate.openness():0}:null,_t.go=F=>Un.includes(F)?(f.goTo(sp(F)),ft(F),!0):!1,_t.clearArena=()=>v?v.forceClear():!1,_t.gpu=()=>{let F=s.info;return{geometries:F.memory.geometries,textures:F.memory.textures,programs:(F.programs||[]).length,calls:Ur,tris:rr}},_t.fight=()=>v?{started:v.started,clear:v.clear,tokens:v.tokens.held(),pickups:T.count(),pickupPos:T.pickups(),enemies:v.enemies.filter(F=>F.state!=="unused").map(F=>({id:F.id,slot:v.enemies.indexOf(F),kind:"associate",state:F.state,health:F.health,alive:F.alive,pos:F.pos.slice(),holds:v.tokens.holds(F.id),role:F.role,point:F.point?F.point.index:null,pop:F.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},_t.tobble=()=>{let F=v&&v.tobble;return F?{state:F.state,hp:F.hp,downed:F.downed,pos:F.pos.slice(),point:F.point?F.point.index:null}:null},_t.pads=()=>v?v.pads.map(F=>({id:F.id,state:F.state,spawned:F.spawned,alive:F.alive})):[],_t.grenades=()=>({count:Ce.count,live:v?v.grenades.live.map(F=>({pos:F.pos.slice(),fuse:F.fuse})):[]}),_t.aimThrow=(F,we)=>N?N.aimThrow(F,we):!1,_t.hurtTobble=F=>v?v.hurtTobble(F):null,_t.downRep=F=>{let we=v&&v.enemies.find(Oe=>Oe.id===F);return!!we&&v.downRep(we)},_t.openPad=F=>v?v.openPad(F):!1,_t.spawnRep=()=>{let F=v&&v.spawnRep();return F?F.id:null},_t.health=()=>({hp:be.hp,max:j.health.max,downed:be.downed,downT:be.downT}),_t.hurt=F=>{be.damage(F)==="downed"&&Ft()},_t.god=F=>{j.health.godMode=F?1:0},_t.fightLog=()=>Ve.map(F=>({...F})),_t.clearFightLog=()=>{Ve.length=0},_t.restart=()=>st(),_t.shots=()=>ye.map(F=>({...F})),_t.clearShots=()=>{ye.length=0},_t.setGun=(F,we)=>W.set(F,we),_t.look=(F,we)=>{J.yaw=F,J.pitch=we},_t.camera=()=>{let F=Ot;return{pos:F.pos.slice(),fov:F.fov,inside:Lo(S,F.pos,.1),mode:kn,side:di,yaw:J.yaw,pitch:J.pitch}},_t.transitions=()=>X.map(F=>({...F})),_t.clearTransitions=()=>{X.length=0},_t.coverTarget=()=>{let F=ce||{moveX:Ee?Ee.moveX:0,moveY:Ee?Ee.moveY:0},we=ml(Y.coverEdges,S,Y.pos,_p(Y,{moveX:F.moveX||0,moveY:F.moveY||0,camYaw:J.yaw},[0,0]),J.yaw,j.cover,j.move.radius);return we?{id:we.edge.id,kind:we.edge.kind,dist:we.dist}:null},_t.place=F=>{let we=F==="spawn"?_:x.features[F];we&&_n(we.pos,we.yaw)},_t.at=(F,we,Oe=0)=>_n([F,0,we],Oe),_t.drive=F=>{if(!F){pe?ke=!0:ce=null;return}F.fire&&!(ce&&ce.fire)&&(ae.fire=!0),F.melee&&!(ce&&ce.melee)&&(ae.melee=!0),ce=F,ke=!1,F.tap&&(pe=!0),F.reload&&(ae.reload=!0),F.interact&&(ae.interact=!0),F.weapon&&(ae.weapon=F.weapon)};function Ju(F){if(ce){xe.moveX=ce.moveX||0,xe.moveY=ce.moveY||0,xe.sprint=!!ce.sprint,xe.aim=!!ce.aim,xe.tap=pe;let we=Be.update(!!ce.fire,ae.fire,!0);ae.fire=!1,xe.fire=we.fire,Me.fire=we.fire,Me.firePressed=we.firePressed,Me.reload=ae.reload,Me.weapon=ae.weapon,ae.reload=!1,ae.weapon=null,Pe.melee=!!ce.melee,Pe.grenade=!!ce.grenade,Pe.interact=!!ce.interactHeld,pe&&(pe=!1,ke&&(ce=null,ke=!1))}else{let we=Ee.held;xe.moveX=Ee.moveX,xe.moveY=Ee.moveY,xe.tap=Z.update(we.cover,le.cover,F,j.move.tapMax),xe.sprint=we.sprint||Z.holding(),xe.aim=we.aim;let Oe=Be.update(we.fire,le.fire,!0);xe.fire=Oe.fire,Me.fire=Oe.fire,Me.firePressed=Oe.firePressed,Me.reload=le.reload,Me.weapon=le.weapon,Pe.melee=we.melee,Pe.grenade=we.grenade,Pe.interact=we.interact}return Fe.interact=le.interact||ae.interact,Fe.melee=le.melee||ae.melee,xe.grenade=Pe.grenade,xe.interactHeld=Pe.interact,le.cover=!1,le.fire=!1,le.reload=!1,le.weapon=null,le.interact=!1,le.melee=!1,ae.interact=!1,ae.melee=!1,xe.camYaw=J.yaw,$=xe.tap,xe}let ju=F=>F.toFixed(1);function Al(){let F=Y.cover;if(F)return`cover: ${F.edge.kind} ${F.edge.id}  t ${F.t.toFixed(2)}/${F.edge.length.toFixed(2)}  pop ${F.pop.toFixed(2)}`;let we=_t.coverTarget();return we?`tap grabs: ${we.kind} ${we.dist.toFixed(1)} m`:"tap grabs: nothing"}function P(){let F=_t.gun(),we=F.id;return`gun: ${Eu[we].name} ${F.mag}/${j.weapons[we].infiniteReserve>0?"\u221E":F.reserve}  ${F.stance||"-"}  spread ${F.spread.toFixed(1)}`}function q(){let F=r.padStatus(),we=[v?`GYMS OF WAR \u2014 ${gu[f.arena].toUpperCase()}`:"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];if(v&&we.push("E / X: hold to renew your membership when downed, another set when clear","F / B: tap bash, hold rev Cheat Day (The Regret)   G / LB: hold to aim a kettlebell, release to throw   E / X: finish a downed Rep, hold to revive Tobble"),we.push("Sound starts after a click or key","",`${Y.state}   ${Y.speed().toFixed(2)} m/s`,Al(),P()),v){we.push(`fight: ${v.enemies.filter(ut=>ut.alive).length}/${v.enemies.filter(ut=>ut.state!=="unused").length}  tokens ${v.tokens.held().join(",")||"-"}  hp ${be.hp.toFixed(0)}`),we.push(`health: ${be.hp.toFixed(0)}/${j.health.max}  ${be.downed?`downed ${be.downT.toFixed(1)}`:"-"}`);let Oe=v.tobble,ot=v.pads[0];we.push(`tobble: ${Oe?`${Oe.state} hp ${Oe.hp.toFixed(0)}`:"off"}`,`sauna: ${ot?`${ot.state} ${ot.spawned}/${j.pad.total}`:"-"}   kettlebells ${Ce.count}`)}else we.push(`dummies: ${b.filter(Oe=>Oe.alive).length}/${b.length}  last: ${Ne} ${qe}`);we.push(`${Math.round(fi)} fps   ${ju(es)} ms   scale ${i.scale()}`,`${Ur} draw calls   ${rr} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${F}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=we.join(`
`)}let ue=F=>j.feedback[F];function re(F){F.type==="shot"?et(F):F.type==="reloadStart"?fe.play("magOut",ue("reloadVolume")):F.type==="reloadPress"?(fe.play(F.result,ue("reloadVolume")),nt=F.result,Ie=0):F.type==="reloadDone"?fe.play("magIn",ue("reloadVolume")):F.type==="dry"&&fe.play("dry",ue("reloadVolume"))}function oe(F,we){uv(F.dummy,we),F.dummy.alive&&!F.wasAlive&&F.view.respawn(),F.wasAlive=F.dummy.alive}let $e=[0,0,0];function et(F){let we=j.weapons[F.id],Oe=Y.cover?Y.cover.edge:null;Au(Y,de,J.yaw,j.combat,ee);let ot=lv({lens:Ot.pos,view:Ot.dir,muzzle:ee,spreadDeg:F.spread,range:we.range,boxes:S,targets:k,ignoreBox:Oe?Oe.boxIndex:-1,rand:Ae,aimed:de==="aim"}),ut=ot.hit,He=ut.target,ct=null;He&&(ct=v?v.hurt(He,Tp(we,ut.kind,F.mult),ut.kind==="head"?"head":"body"):dv(He,Tp(we,ut.kind,F.mult))),Ne=ut.kind,qe=He?He.id:"-",ye.push({t:Q,kind:ut.kind,target:He?He.id:null,point:ut.point.slice(),stance:de}),ye.length>wR&&ye.shift();let vt=[ot.dir[0],ot.dir[1],ot.dir[2]];if(O.push({id:F.id,from:ee.slice(),dir:vt,hit:ut,target:He,result:ct}),ct==="kill"&&!v){let mi=M.find($t=>$t.dummy===He);mi.wasAlive=!1}}function Ye(F){let we=j.weapons[F.id],Oe=j.feedback,ot=_e.gunTip($e);J.kick(we.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*we.kickYaw),Te.flash(ot,F.dir),Te.tracer(ot,F.hit.point),fe.play(F.id==="regret"?"rifle":"pistol",Oe.shotVolume);let ut=[-F.dir[0],-F.dir[1],-F.dir[2]];if(F.hit.kind==="world")Te.spark(F.hit.point,ut);else if(F.target){let He=v?C.get(F.target):M.find(ct=>ct.dummy===F.target).view;F.result==="kill"?(v?(He.death(),T.addPickup(F.target.pos)):He.burst(),Te.gel(F.hit.point,ut,Oe.killGelCount),Te.receipts(F.target.pos.map((ct,vt)=>vt===1?ct+1.2:ct),Oe.receiptCount),K="kill",ne=Oe.killMarkerTime,fe.play("kill",Oe.killVolume)):F.result==="down"?(Te.gel(F.hit.point,ut,Oe.gelCount),K="kill",ne=Oe.killMarkerTime,fe.play("hit",Oe.hitVolume)):(v||He.hit(F.hit.kind),Te.gel(F.hit.point,ut),K=F.hit.kind,ne=Oe.hitMarkerTime,fe.play(F.hit.kind==="head"?"head":"hit",Oe.hitVolume))}}let Ke=kh({before(F){if(Ee=r.poll(),De=!!ce||pe||_R({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=De,!De){Z.reset(),Be.reset(),le.cover=!1,le.fire=!1,le.reload=!1,le.weapon=null,le.interact=!1,le.melee=!1;return}let Oe=Math.min(F,u0);G=Ee.held.aim||ce&&ce.aim,J.look(Ee.lookDX,Ee.lookDY,Ee.lookX,Ee.lookY,Oe,G,Xe),Ee.pressed.cover&&(le.cover=!0),Ee.pressed.fire&&(le.fire=!0),Ee.pressed.reload&&(le.reload=!0),Ee.pressed.interact&&(le.interact=!0),Ee.pressed.melee&&(le.melee=!0);for(let[ot,ut]of Ze)Ee.pressed[ot]&&(le.weapon=ut)},step(F){if(!De)return;let we=Yy(j.cover);we!==te&&(te=we,Y.coverEdges=V()),Q+=F;let Oe=Ju(F);MR(Oe,Me,{downed:!!v&&be.downed,busy:W.reload!==null||W.switching>0}),f.fading&&(Oe.moveX=0,Oe.moveY=0,Oe.tap=!1,Oe.sprint=!1,Oe.fire=!1,Oe.grenade=!1,Me.fire=!1,Me.firePressed=!1),N&&(N.step(F,{meleeHeld:Pe.melee,meleePressed:Fe.melee,grenadeHeld:Pe.grenade,interactHeld:Pe.interact,interactPressed:Fe.interact,device:r.device(),camYaw:J.yaw,camPitch:J.pitch}),N.busy()&&(Me.fire=!1,Me.firePressed=!1,Oe.fire=!1)),Y.update(Oe,F),de=av(Y);let ot=W.update(Me,de,F);for(let ut of ot)re(ut);v&&(T.tick(F),pn(F));for(let ut of M)oe(ut,F);fv(Y.pos,x.ammoCrates,j.combat.crateRadius)&&(W.refill(),Ce.refill()),U&&st(),v&&me&&!f.fading&&Ix(x.exit,Y.pos)&&f.touchGate()&&fe.play("clear",j.feedback.killVolume)},render(F,we){let Oe=De?Math.min(we,u0):0;for(let Ut of f.step(Math.min(we,u0)))Ut.type==="swap"&&ft(Ut.to);Rt>0&&De&&(Rt=Math.max(0,Rt-Oe)),wt(f.fade),A.shot=O.length>0,A.dir=Ot.dir,A.stance=de,A.weapon=W.current(),A.kettlebell=!!N&&N.armed(),_e.update(F,Oe,A);for(let Ut of M)Ut.view.update(Oe);for(let Ut of w)Ut.update(F,Oe);T&&(T.update(Oe),R.update(v.grenades.live,F,Oe),L.update(Oe),I&&(I.group.visible=!!v.tobble,v.tobble&&I.update(F,Oe)));let ot=Y.pos,ut=Y.prevPos;for(let Ut=0;Ut<3;Ut++)ge[Ut]=ut[Ut]+(ot[Ut]-ut[Ut])*F;Y.slams>Re&&(Re=Y.slams,J.bump(),fe.play("thud",j.cover.thudVolume));let He=bp(Y);if(He==="aim"&&kn!=="aim"){let Ut=Y.cover?Y.cover.edge:null;J.hold(yn(Ot.pos,Ot.dir,j.camera.holdRange,S,k,{ignoreBox:Ut?Ut.boxIndex:-1}).point)}kn=He,di=Rr(Y);let ct=J.update(Oe,{target:ge,mode:kn,side:di},S);Ot.pos[0]=ct.pos[0],Ot.pos[1]=ct.pos[1],Ot.pos[2]=ct.pos[2],Ot.fov=ct.fov,Ot.dir[0]=ct.dir[0],Ot.dir[1]=ct.dir[1],Ot.dir[2]=ct.dir[2],d.fov!==ct.fov&&(d.fov=ct.fov,d.updateProjectionMatrix()),_e.fadeHeadFor(ct.pos,j.camera.headHideDist,j.camera.headHideMargin),d.position.set(ct.pos[0],ct.pos[1],ct.pos[2]),d.lookAt(ct.pos[0]+ct.dir[0],ct.pos[1]+ct.dir[1],ct.pos[2]+ct.dir[2]);for(let Ut of O)Ye(Ut);O.length=0,Te.update(Oe),ne-=Oe,ne<=0&&(K=null),nt&&(Ie+=Oe,Ie>=j.feedback.reloadResultTime&&(nt=null));let vt=Y.cover?Y.cover.edge:null,mi=yn(Ot.pos,Ot.dir,100,S,k,{ignoreBox:vt?vt.boxIndex:-1});Xe=r.device()==="pad"&&mi.target?j.look.pad.assist:1;let $t=!!Y.cover&&Y.cover.pop<.5,kr=de||(Y.cover&&(Y.cover.pop>0||$t)?"aim":"hip"),gi=v?Gy({hp:be.hp,max:j.health.max,downed:be.downed,downT:be.downT,hits:Ue,now:Q}):null;Le.render(gv({arsenal:W,stance:de,firing:xe.fire,covered:$t,device:r.device(),spreadDeg:W.spreadOf(kr),fov:d.fov,viewportH:n.clientHeight||window.innerHeight,marker:K,reloadFlash:nt,face:gi,bark:T?T.bark():null,objective:v?Nt():"",banner:v?be.downed?{title:`You've hit a plateau ${gi.downed.seconds}`,hint:yl(v.tobble&&!v.tobble.downed?"giveUpTobble":"giveUp",r.device()),hold:N.giveUpFrac()}:v.clear?{title:"SET COMPLETE",hint:`${f.gateOpen?"Head for the GO gate!  ":"Rest 60 seconds!  "}${r.device()==="pad"?"X":"E"} for another set`}:null:null,grenades:v?Ce.count:null,action:N?N.prompt():null,hours:Rt>0?ip(f.checkpoint):""})),u.update(performance.now()/1e3),y.update(Oe),s.render(h,d),Ur=s.info.render.calls,rr=s.info.render.triangles,ei++,pi+=we,pi>=1&&(fi=ei/pi,es=pi/ei*1e3,ei=0,pi=0),Fr+=we,Fr>=.1&&(Fr=0,q()),i.frameDone(we*1e3)}});t&&t.has("tune")&&c.toggle();let it=document.createElement("div");it.id="cr-fade",document.body.appendChild(it);let pt=-1;function wt(F){let we=Math.round(F*100);we!==pt&&(pt=we,it.style.opacity=(we/100).toFixed(2))}p.name!=="greyRoom"&&p.jumped?(f.goTo(sp(p.name)),ft(p.name)):ft(p.name==="greyRoom"?"greyRoom":Un[0]),p.name!=="greyRoom"&&!p.jumped&&f.saved>0&&tt();function tt(){let F=document.createElement("div");F.id="cr-continue",Rt=0;let we=(Oe,ot,ut)=>{let He=document.createElement("button");He.textContent=Oe,He.className=ut,He.addEventListener("click",ct=>{ct.stopPropagation(),F.remove(),ot()}),F.appendChild(He)};we(`Continue \u2014 ${gu[Un[f.saved]]}`,()=>{f.goTo(f.saved),ft(f.arena)},"cr-continue-yes"),we("New run",()=>{f.newRun(),Rt=j.run.hoursTime},"cr-continue-no"),document.body.appendChild(F)}Ee=r.poll(),J.update(0,{target:_.pos,mode:"normal",side:1},S),q(),Ke.start()}var RR={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function d0(n,e){window.__cr.error={kind:n,detail:e||""},document.documentElement.dataset.crError=n;let t=document.getElementById("cr-error");t&&(t.textContent="",t.appendChild(document.createTextNode(RR[n])),n==="boot"&&e&&(t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode(e))),t.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||d0("boot",n.message)});function CR(){let n=document.getElementById("cr-canvas"),e=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){d0("webgl");return}let t=new URLSearchParams(location.search);t.has("look")?ax({canvas:n,gl:e}):qy({canvas:n,gl:e,params:t}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{CR()}catch(n){d0("boot",n&&n.message)}})();

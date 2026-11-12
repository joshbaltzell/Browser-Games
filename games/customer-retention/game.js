/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var bp=0,bu=1,Sp=2;var na=1,wp=2,Yr=3,xs=0,Kt=1,Wn=2,nr=0,qr=1,Su=2,wu=3,Tu=4,Tp=5;var ir=100,Ep=101,Ap=102,Rp=103,Cp=104,Pp=200,Ip=201,Lp=202,Dp=203,Eu=204,Au=205,Np=206,Op=207,Up=208,Fp=209,kp=210,Bp=211,zp=212,Hp=213,Gp=214,fl=0,pl=1,ml=2,Or=3,gl=4,xl=5,vl=6,_l=7,Ru=0,Vp=1,Wp=2,Si=0,Cu=1,Pu=2,Iu=3,Lu=4,Du=5,Nu=6,Ou=7;var Uu=300,sr=301,$r=302,Kl=303,Jl=304,yl=1e3,_i=1001,Ml=1002,on=1003,Xp=1004;var ia=1005;var En=1006,jl=1007;var Yi=1008;var Xn=1009,Fu=1010,ku=1011,Zr=1012,Ql=1013,hi=1014,jn=1015,ui=1016,ec=1017,tc=1018,rr=1020,Bu=35902,zu=35899,Hu=1021,Gu=1022,di=1023,Wi=1026,qi=1027,nc=1028,ic=1029,vs=1030,sc=1031;var rc=1033,sa=33776,ra=33777,oa=33778,aa=33779,oc=35840,ac=35841,lc=35842,cc=35843,hc=36196,uc=37492,dc=37496,fc=37488,pc=37489,la=37490,mc=37491,gc=37808,xc=37809,vc=37810,_c=37811,yc=37812,Mc=37813,bc=37814,Sc=37815,wc=37816,Tc=37817,Ec=37818,Ac=37819,Rc=37820,Cc=37821,Pc=36492,Ic=36494,Lc=36495,Dc=36283,Nc=36284,ca=36285,Oc=36286;var Ro=2300,bl=2301,ul=2302,fu=2303,pu=2400,mu=2401,gu=2402;var Yp=3200;var Vu=0,qp=1,$i="",un="srgb",Co="srgb-linear",Po="linear",Rt="srgb";var dl=7680;var $p=519,Zp=512,Kp=513,Jp=514,Wu=515,jp=516,Qp=517,Xu=518,Yu=519,e0=35044,Kr=35048;var qu="300 es",Kn=2e3,Io=2001;function Wx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function t0(){let n=Lo("canvas");return n.style.display="block",n}var Yf={},Ur=null;function $u(...n){let e="THREE."+n.shift();Ur?Ur("log",e,...n):console.log(e,...n)}function n0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=n0(n);let e="THREE."+n.shift();if(Ur)Ur("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=n0(n);let e="THREE."+n.shift();if(Ur)Ur("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function So(...n){let e=n.join(" ");e in Yf||(Yf[e]=!0,rt(...n))}function i0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var s0={[fl]:fl,[ml]:vl,[gl]:gl,[Or]:xl,[pl]:pl,[vl]:ml,[_l]:_l,[xl]:Or},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=1234567,wo=Math.PI/180,Fr=180/Math.PI;function or(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function Zu(n,e){return(n%e+e)%e}function Yx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function qx(n,e,t){return n!==e?(t-n)/(e-n):0}function To(n,e,t){return(1-t)*n+t*e}function $x(n,e,t,i){return To(n,e,1-Math.exp(-t*i))}function Zx(n,e=1){return e-Math.abs(Zu(n,e*2)-e)}function Kx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Jx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qx(n,e){return n+Math.random()*(e-n)}function ev(n){return n*(.5-Math.random())}function tv(n){n!==void 0&&(qf=n);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nv(n){return n*wo}function iv(n){return n*Fr}function sv(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function rv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ku(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ov(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+i)/2),c=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),p=r((i-e)/2),f=o((i-e)/2);switch(s){case"XYX":n.set(a*c,l*d,l*u,a*h);break;case"YZY":n.set(l*u,a*c,l*d,a*h);break;case"ZXZ":n.set(l*d,l*u,a*c,a*h);break;case"XZX":n.set(a*c,l*f,l*p,a*h);break;case"YXY":n.set(l*p,a*c,l*f,a*h);break;case"ZYZ":n.set(l*f,l*p,a*c,a*h);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ju(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function r0(n,e){if(e.constructor===Float32Array)return n;let t=Ju(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function o0(n,e){if(e.constructor===Float32Array)return n;let t=Ju(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Uc={DEG2RAD:wo,RAD2DEG:Fr,generateUUID:or,clamp:ft,euclideanModulo:Zu,mapLinear:Yx,inverseLerp:qx,lerp:To,damp:$x,pingpong:Zx,smoothstep:Kx,smootherstep:Jx,randInt:jx,randFloat:Qx,randFloatSpread:ev,seededRandom:tv,degToRad:nv,radToDeg:iv,isPowerOfTwo:sv,ceilPowerOfTwo:rv,floorPowerOfTwo:Ku,setQuaternionFromProperEuler:ov,normalize:o0,denormalize:r0},id=class id{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};id.prototype.isVector2=!0;var Ge=id,An=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],h=i[s+1],c=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],f=r[o+2],g=r[o+3];if(d!==g||l!==u||h!==p||c!==f){let m=l*u+h*p+c*f+d*g;m<0&&(u=-u,p=-p,f=-f,g=-g,m=-m);let x=1-a;if(m<.9995){let _=Math.acos(m),w=Math.sin(_);x=Math.sin(x*_)/w,a=Math.sin(a*_)/w,l=l*x+u*a,h=h*x+p*a,c=c*x+f*a,d=d*x+g*a}else{l=l*x+u*a,h=h*x+p*a,c=c*x+f*a,d=d*x+g*a;let _=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=_,h*=_,c*=_,d*=_}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],d=r[o],u=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+c*d+l*p-h*u,e[t+1]=l*f+c*u+h*d-a*p,e[t+2]=h*f+c*p+a*u-l*d,e[t+3]=c*f-a*d-l*u-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"YXZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"ZXY":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"ZYX":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"YZX":this._x=u*c*d+h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d-u*p*f;break;case"XZY":this._x=u*c*d-h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d+u*p*f;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-s*a,this._w=o*c-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let h=Math.acos(a),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sd=class sd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($f.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*i),c=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*h+o*d-a*c,this.y=i+l*c+a*h-r*d,this.z=s+l*d+r*c-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xh.copy(this).projectOnVector(e),this.sub(Xh)}reflect(e){return this.sub(Xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sd.prototype.isVector3=!0;var H=sd,Xh=new H,$f=new An,rd=class rd{constructor(e,t,i,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,h)}set(e,t,i,s,r,o,a,l,h){let c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],p=i[5],f=i[8],g=s[0],m=s[3],x=s[6],_=s[1],w=s[4],y=s[7],M=s[2],b=s[5],v=s[8];return r[0]=o*g+a*_+l*M,r[3]=o*m+a*w+l*b,r[6]=o*x+a*y+l*v,r[1]=h*g+c*_+d*M,r[4]=h*m+c*w+d*b,r[7]=h*x+c*y+d*v,r[2]=u*g+p*_+f*M,r[5]=u*m+p*w+f*b,r[8]=u*x+p*y+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8];return t*o*c-t*a*h-i*r*c+i*a*l+s*r*h-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],d=c*o-a*h,u=a*l-c*r,p=h*r-o*l,f=t*d+i*u+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=d*g,e[1]=(s*h-c*i)*g,e[2]=(a*i-s*o)*g,e[3]=u*g,e[4]=(c*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=p*g,e[7]=(i*l-h*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return So("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yh.makeScale(e,t)),this}rotate(e){return So("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yh.makeRotation(-e)),this}translate(e,t){return So("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rd.prototype.isMatrix3=!0;var at=rd,Yh=new at,Zf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function av(){let n={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(s.r=Nr(s.r),s.g=Nr(s.g),s.b=Nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?Po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Co]:{primaries:e,whitePoint:i,transfer:Po,toXYZ:Zf,fromXYZ:Kf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:Zf,fromXYZ:Kf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}var yt=av();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var yr,Sl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yr===void 0&&(yr=Lo("canvas")),yr.width=e.width,yr.height=e.height;let s=yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=yr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lv=0,kr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qh(s[o].image)):r.push(qh(s[o]))}else r=qh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function qh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var cv=0,$h=new H,Rn=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=_i,s=_i,r=En,o=Yi,a=di,l=Xn,h=n.DEFAULT_ANISOTROPY,c=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=or(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($h).x}get height(){return this.source.getSize($h).y}get depth(){return this.source.getSize($h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yl:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yl:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Uu;Rn.DEFAULT_ANISOTROPY=1;var od=class od{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],p=l[5],f=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+g)<.1&&Math.abs(f+m)<.1&&Math.abs(h+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(h+1)/2,y=(p+1)/2,M=(x+1)/2,b=(c+u)/4,v=(d+g)/4,S=(f+m)/4;return w>y&&w>M?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=v/i):y>M?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=S/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=v/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-g)*(d-g)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-g)/_,this.z=(u-c)/_,this.w=Math.acos((h+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};od.prototype.isVector4=!0;var Vt=od,wl=class extends yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new kr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends wl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Do=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tl=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zl=class Zl{constructor(e,t,i,s,r,o,a,l,h,c,d,u,p,f,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,h,c,d,u,p,f,g,m)}set(e,t,i,s,r,o,a,l,h,c,d,u,p,f,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=h,x[6]=c,x[10]=d,x[14]=u,x[3]=p,x[7]=f,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Mr.setFromMatrixColumn(e,0).length(),r=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*c,p=o*d,f=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=p+f*h,t[5]=u-g*h,t[9]=-a*l,t[2]=g-u*h,t[6]=f+p*h,t[10]=o*l}else if(e.order==="YXZ"){let u=l*c,p=l*d,f=h*c,g=h*d;t[0]=u+g*a,t[4]=f*a-p,t[8]=o*h,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-f,t[6]=g+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*c,p=l*d,f=h*c,g=h*d;t[0]=u-g*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*c,t[9]=g-u*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*c,p=o*d,f=a*c,g=a*d;t[0]=l*c,t[4]=f*h-p,t[8]=u*h+g,t[1]=l*d,t[5]=g*h+u,t[9]=p*h-f,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*h,f=a*l,g=a*h;t[0]=l*c,t[4]=g-u*d,t[8]=f*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-h*c,t[6]=p*d+f,t[10]=u-g*d}else if(e.order==="XZY"){let u=o*l,p=o*h,f=a*l,g=a*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+g,t[5]=o*c,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*c,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,uv)}lookAt(e,t,i){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),os.crossVectors(i,zn),os.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),os.crossVectors(i,zn)),os.normalize(),Ga.crossVectors(zn,os),s[0]=os.x,s[4]=Ga.x,s[8]=zn.x,s[1]=os.y,s[5]=Ga.y,s[9]=zn.y,s[2]=os.z,s[6]=Ga.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],p=i[13],f=i[2],g=i[6],m=i[10],x=i[14],_=i[3],w=i[7],y=i[11],M=i[15],b=s[0],v=s[4],S=s[8],C=s[12],A=s[1],I=s[5],R=s[9],D=s[13],T=s[2],O=s[6],F=s[10],W=s[14],j=s[3],V=s[7],Y=s[11],G=s[15];return r[0]=o*b+a*A+l*T+h*j,r[4]=o*v+a*I+l*O+h*V,r[8]=o*S+a*R+l*F+h*Y,r[12]=o*C+a*D+l*W+h*G,r[1]=c*b+d*A+u*T+p*j,r[5]=c*v+d*I+u*O+p*V,r[9]=c*S+d*R+u*F+p*Y,r[13]=c*C+d*D+u*W+p*G,r[2]=f*b+g*A+m*T+x*j,r[6]=f*v+g*I+m*O+x*V,r[10]=f*S+g*R+m*F+x*Y,r[14]=f*C+g*D+m*W+x*G,r[3]=_*b+w*A+y*T+M*j,r[7]=_*v+w*I+y*O+M*V,r[11]=_*S+w*R+y*F+M*Y,r[15]=_*C+w*D+y*W+M*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],p=e[14],f=e[3],g=e[7],m=e[11],x=e[15],_=l*p-h*u,w=a*p-h*d,y=a*u-l*d,M=o*p-h*c,b=o*u-l*c,v=o*d-a*c;return t*(g*_-m*w+x*y)-i*(f*_-m*M+x*b)+s*(f*w-g*M+x*v)-r*(f*y-g*b+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],h=e[6],c=e[10];return t*(o*c-a*h)-i*(r*c-a*l)+s*(r*h-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],p=e[11],f=e[12],g=e[13],m=e[14],x=e[15],_=t*a-i*o,w=t*l-s*o,y=t*h-r*o,M=i*l-s*a,b=i*h-r*a,v=s*h-r*l,S=c*g-d*f,C=c*m-u*f,A=c*x-p*f,I=d*m-u*g,R=d*x-p*g,D=u*x-p*m,T=_*D-w*R+y*I+M*A-b*C+v*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/T;return e[0]=(a*D-l*R+h*I)*O,e[1]=(s*R-i*D-r*I)*O,e[2]=(g*v-m*b+x*M)*O,e[3]=(u*b-d*v-p*M)*O,e[4]=(l*A-o*D-h*C)*O,e[5]=(t*D-s*A+r*C)*O,e[6]=(m*y-f*v-x*w)*O,e[7]=(c*v-u*y+p*w)*O,e[8]=(o*R-a*A+h*S)*O,e[9]=(i*A-t*R-r*S)*O,e[10]=(f*b-g*y+x*_)*O,e[11]=(d*y-c*b-p*_)*O,e[12]=(a*C-o*I-l*S)*O,e[13]=(t*I-i*C+s*S)*O,e[14]=(g*w-f*M-m*_)*O,e[15]=(c*M-d*w+u*_)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,c=o+o,d=a+a,u=r*h,p=r*c,f=r*d,g=o*c,m=o*d,x=a*d,_=l*h,w=l*c,y=l*d,M=i.x,b=i.y,v=i.z;return s[0]=(1-(g+x))*M,s[1]=(p+y)*M,s[2]=(f-w)*M,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(u+x))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(f+w)*v,s[9]=(m-_)*v,s[10]=(1-(u+g))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Mr.set(s[0],s[1],s[2]).length(),a=Mr.set(s[4],s[5],s[6]).length(),l=Mr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let h=1/o,c=1/a,d=1/l;return oi.elements[0]*=h,oi.elements[1]*=h,oi.elements[2]*=h,oi.elements[4]*=c,oi.elements[5]*=c,oi.elements[6]*=c,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,t.setFromRotationMatrix(oi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Kn,l=!1){let h=this.elements,c=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),f,g;if(l)f=r/(o-r),g=o*r/(o-r);else if(a===Kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Io)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,l=!1){let h=this.elements,c=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s),f,g;if(l)f=1/(o-r),g=o/(o-r);else if(a===Kn)f=-2/(o-r),g=-(o+r)/(o-r);else if(a===Io)f=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=f,h[14]=g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Zl.prototype.isMatrix4=!0;var gt=Zl,Mr=new H,oi=new gt,hv=new H(0,0,0),uv=new H(1,1,1),os=new H,Ga=new H,zn=new H,Jf=new gt,jf=new An,On=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var No=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dv=0,Qf=new H,br=new An,ki=new gt,Va=new H,go=new H,fv=new H,pv=new An,ep=new H(1,0,0),tp=new H(0,1,0),np=new H(0,0,1),ip={type:"added"},mv={type:"removed"},Sr={type:"childadded",child:null},Zh={type:"childremoved",child:null},fn=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new On,i=new An,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new at}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(ep,e)}rotateY(e){return this.rotateOnAxis(tp,e)}rotateZ(e){return this.rotateOnAxis(np,e)}translateOnAxis(e,t){return Qf.copy(e).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ep,e)}translateY(e){return this.translateOnAxis(tp,e)}translateZ(e){return this.translateOnAxis(np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Va.copy(e):Va.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(go,Va,this.up):ki.lookAt(Va,go,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),br.setFromRotationMatrix(ki),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ip),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mv),Zh.child=e,this.dispatchEvent(Zh),Zh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ip),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),h=o(e.textures),c=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new H(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},gv={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),x=this._getHandJoint(h,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),p=.02,f=.005;h.inputState.pinching&&u>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new St;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=Zu(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Kh(o,r,e+1/3),this.g=Kh(o,r,e),this.b=Kh(o,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=a0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return yt.workingToColorSpace(yn.copy(this),e),Math.round(ft(yn.r*255,0,255))*65536+Math.round(ft(yn.g*255,0,255))*256+Math.round(ft(yn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(yn.copy(this),t);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=un){yt.workingToColorSpace(yn.copy(this),e);let t=yn.r,i=yn.g,s=yn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Wa);let i=To(as.h,Wa.h,t),s=To(as.s,Wa.s,t),r=To(as.l,Wa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new it;it.NAMES=a0;var Zs=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ai=new H,Bi=new H,Jh=new H,zi=new H,wr=new H,Tr=new H,sp=new H,jh=new H,Qh=new H,eu=new H,tu=new Vt,nu=new Vt,iu=new Vt,us=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ai.subVectors(e,t),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ai.subVectors(s,t),Bi.subVectors(i,t),Jh.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(Bi),l=ai.dot(Jh),h=Bi.dot(Bi),c=Bi.dot(Jh),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(h*l-a*c)*u,f=(o*c-a*l)*u;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return tu.setScalar(0),nu.setScalar(0),iu.setScalar(0),tu.fromBufferAttribute(e,t),nu.fromBufferAttribute(e,i),iu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(tu,r.x),o.addScaledVector(nu,r.y),o.addScaledVector(iu,r.z),o}static isFrontFacing(e,t,i,s){return ai.subVectors(i,t),Bi.subVectors(e,t),ai.cross(Bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ai.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;wr.subVectors(s,i),Tr.subVectors(r,i),jh.subVectors(e,i);let l=wr.dot(jh),h=Tr.dot(jh);if(l<=0&&h<=0)return t.copy(i);Qh.subVectors(e,s);let c=wr.dot(Qh),d=Tr.dot(Qh);if(c>=0&&d<=c)return t.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return o=l/(l-c),t.copy(i).addScaledVector(wr,o);eu.subVectors(e,r);let p=wr.dot(eu),f=Tr.dot(eu);if(f>=0&&p<=f)return t.copy(r);let g=p*h-l*f;if(g<=0&&h>=0&&f<=0)return a=h/(h-f),t.copy(i).addScaledVector(Tr,a);let m=c*f-p*d;if(m<=0&&d-c>=0&&p-f>=0)return sp.subVectors(r,s),a=(d-c)/(d-c+(p-f)),t.copy(s).addScaledVector(sp,a);let x=1/(m+g+u);return o=g*x,a=u*x,t.copy(i).addScaledVector(wr,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mi=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Ya.subVectors(this.max,xo),Er.subVectors(e.a,xo),Ar.subVectors(e.b,xo),Rr.subVectors(e.c,xo),ls.subVectors(Ar,Er),cs.subVectors(Rr,Ar),Ws.subVectors(Er,Rr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Ws.z,Ws.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Ws.z,0,-Ws.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Ws.y,Ws.x,0];return!su(t,Er,Ar,Rr,Ya)||(t=[1,0,0,0,1,0,0,0,1],!su(t,Er,Ar,Rr,Ya))?!1:(qa.crossVectors(ls,cs),t=[qa.x,qa.y,qa.z],su(t,Er,Ar,Rr,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new H,new H,new H,new H,new H,new H,new H,new H],li=new H,Xa=new Mi,Er=new H,Ar=new H,Rr=new H,ls=new H,cs=new H,Ws=new H,xo=new H,Ya=new H,qa=new H,Xs=new H;function su(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Xs.fromArray(n,r);let a=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),l=e.dot(Xs),h=t.dot(Xs),c=i.dot(Xs);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var qt=new H,$a=new Ge,xv=0,Et=class extends yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=e0,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?Ju(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):r0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):o0(e,this.array)}};var Oo=class extends Et{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Uo=class extends Et{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends Et{constructor(e,t,i){super(new Float32Array(e),t,i)}},vv=new Mi,vo=new H,ru=new H,Jn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):vv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);let t=vo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(vo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(ru)),this.expandByPoint(vo.copy(e.center).sub(ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_v=0,Zn=new gt,ou=new fn,Cr=new H,Hn=new Mi,_o=new Mi,rn=new H,Ut=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wx(e)?Uo:Oo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Hn.min,_o.min),Hn.expandByPoint(rn),rn.addVectors(Hn.max,_o.max),Hn.expandByPoint(rn)):(Hn.expandByPoint(_o.min),Hn.expandByPoint(_o.max))}Hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)rn.fromBufferAttribute(a,h),l&&(Cr.fromBufferAttribute(e,h),rn.add(Cr)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Et(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],h=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new H,l[C]=new H;let c=new H,d=new H,u=new H,p=new Ge,f=new Ge,g=new Ge,m=new H,x=new H;function _(C,A,I){h[C]=h[A]=h[I]=1,c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,I),p.fromBufferAttribute(r,C),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,I),d.sub(c),u.sub(c),f.sub(p),g.sub(p);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),x.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(R),a[C].add(m),a[A].add(m),a[I].add(m),l[C].add(x),l[A].add(x),l[I].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,A=w.length;C<A;++C){let I=w[C],R=I.start,D=I.count;for(let T=R,O=R+D;T<O;T+=3)_(e.getX(T+0),e.getX(T+1),e.getX(T+2))}let y=new H,M=new H,b=new H,v=new H;function S(C){b.fromBufferAttribute(s,C),v.copy(b);let A=a[C];y.copy(A),y.sub(b.multiplyScalar(b.dot(A))).normalize(),M.crossVectors(v,A);let R=M.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,A=i.count;C<A;++C)h[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,h=new H,c=new H,d=new H;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,m),a.add(c),l.add(c),h.add(c),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){let h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c),p=0,f=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let x=0;x<c;x++)u[f++]=h[p++]}return new Et(u,c,d)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=e(l,i);t.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let h=0,c=o.length;h<c;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var au=new H,yv=new H,Mv=new at,ci=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=au.subVectors(i,t).cross(yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(au),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Mv.getNormalMatrix(e),s=this.coplanarPoint(au).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bv=0,Ks=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=or(),this.name="",this.type="Material",this.blending=qr,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=Au,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dl,this.stencilZFail=dl,this.stencilZPass=dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gi=new H,lu=new H,Za=new H,Ka=new H,El=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lu.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Ka.copy(this.origin).sub(lu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=Ka.dot(this.direction),l=-Ka.dot(Za),h=Ka.lengthSq(),c=Math.abs(1-o*o),d,u,p,f;if(c>0)if(d=o*l-a,u=o*a-l,f=r*c,d>=0)if(u>=-f)if(u<=f){let g=1/c;d*=g,u*=g,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+h;else u<=-f?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+h):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lu).addScaledVector(Za,u),p}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,s=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,s=(e.min.x-u.x)*h),c>=0?(r=(e.min.y-u.y)*c,o=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,o=(e.min.y-u.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,h=a.y,c=a.z,d=e.x-o.x,u=e.y-o.y,p=e.z-o.z,f=t.x-o.x,g=t.y-o.y,m=t.z-o.z,x=i.x-o.x,_=i.y-o.y,w=i.z-o.z,y=Math.abs(l),M=Math.abs(h),b=Math.abs(c),v,S,C,A,I,R,D,T,O,F,W,j;if(y>=M&&y>=b?(C=l,R=d,O=f,j=x,l>=0?(v=h,S=c,A=u,I=p,D=g,T=m,F=_,W=w):(v=c,S=h,A=p,I=u,D=m,T=g,F=w,W=_)):M>=b?(C=h,R=u,O=g,j=_,h>=0?(v=c,S=l,A=p,I=d,D=m,T=f,F=w,W=x):(v=l,S=c,A=d,I=p,D=f,T=m,F=x,W=w)):(C=c,R=p,O=m,j=w,c>=0?(v=l,S=h,A=d,I=u,D=f,T=g,F=x,W=_):(v=h,S=l,A=u,I=d,D=g,T=f,F=_,W=x)),C===0)return null;let V=v/C,Y=S/C,G=1/C,he=A-V*R,ve=I-Y*R,z=D-V*O,re=T-Y*O,be=F-V*j,xe=W-Y*j,ee=be*re-xe*z,Ce=he*xe-ve*be,Ke=z*ve-re*he;if(s){if(ee<0||Ce<0||Ke<0)return null}else if((ee<0||Ce<0||Ke<0)&&(ee>0||Ce>0||Ke>0))return null;let Be=ee+Ce+Ke;if(Be===0)return null;let Je=G*(ee*R+Ce*O+Ke*j);return(Be>0?Je<0:Je>0)?null:this.at(Je/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bi=class extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rp=new gt,Ys=new El,Ja=new Jn,op=new H,ja=new H,Qa=new H,el=new H,cu=new H,tl=new H,ap=new H,nl=new H,ut=class extends fn{constructor(e=new Ut,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){tl.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],d=r[l];c!==0&&(cu.fromBufferAttribute(d,e),o?tl.addScaledVector(cu,c):tl.addScaledVector(cu.sub(t),c))}t.add(tl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(Ja.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Ja,op)===null||Ys.origin.distanceToSquared(op)>(e.far-e.near)**2))&&(rp.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(rp),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,g=u.length;f<g;f++){let m=u[f],x=o[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=w;y<M;y+=3){let b=a.getX(y),v=a.getX(y+1),S=a.getX(y+2);s=il(this,x,e,i,h,c,d,b,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=f,x=g;m<x;m+=3){let _=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=il(this,o,e,i,h,c,d,_,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,g=u.length;f<g;f++){let m=u[f],x=o[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=w;y<M;y+=3){let b=y,v=y+1,S=y+2;s=il(this,x,e,i,h,c,d,b,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=f,x=g;m<x;m+=3){let _=m,w=m+1,y=m+2;s=il(this,o,e,i,h,c,d,_,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Sv(n,e,t,i,s,r,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===xs,a),l===null)return null;nl.copy(a),nl.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(nl);return h<t.near||h>t.far?null:{distance:h,point:nl.clone(),object:n}}function il(n,e,t,i,s,r,o,a,l,h){n.getVertexPosition(a,ja),n.getVertexPosition(l,Qa),n.getVertexPosition(h,el);let c=Sv(n,e,t,i,ja,Qa,el,ap);if(c){let d=new H;us.getBarycoord(ap,ja,Qa,el,d),s&&(c.uv=us.getInterpolatedAttribute(s,a,l,h,d,new Ge)),r&&(c.uv1=us.getInterpolatedAttribute(r,a,l,h,d,new Ge)),o&&(c.normal=us.getInterpolatedAttribute(o,a,l,h,d,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new H,materialIndex:0};us.getNormal(ja,Qa,el,u.normal),c.face=u,c.barycoord=d}return c}var Fo=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,l,h=on,c=on,d,u){super(null,o,a,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zr=class extends Et{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pr=new gt,lp=new gt,sl=[],cp=new Mi,wv=new gt,yo=new ut,Mo=new Jn,ds=class extends ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pr),cp.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pr),Mo.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(i),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pr),lp.multiplyMatrices(i,Pr),yo.matrixWorld=lp,yo.raycast(e,sl);for(let o=0,a=sl.length;o<a;o++){let l=sl[o];l.instanceId=r,l.object=this,t.push(l)}sl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fo(new Float32Array(s*this.count),s,this.count,nc,jn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qs=new Jn,Tv=new Ge(.5,.5),rl=new H,Js=class{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],p=r[7],f=r[8],g=r[9],m=r[10],x=r[11],_=r[12],w=r[13],y=r[14],M=r[15];if(s[0].setComponents(h-o,p-c,x-f,M-_).normalize(),s[1].setComponents(h+o,p+c,x+f,M+_).normalize(),s[2].setComponents(h+a,p+d,x+g,M+w).normalize(),s[3].setComponents(h-a,p-d,x-g,M-w).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(h-l,p-u,x-m,M-y).normalize();else if(s[4].setComponents(h-l,p-u,x-m,M-y).normalize(),t===Kn)s[5].setComponents(h+l,p+u,x+m,M+y).normalize();else if(t===Io)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=Tv.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(rl.x=s.normal.x>0?e.max.x:e.min.x,rl.y=s.normal.y>0?e.max.y:e.min.y,rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hp=new gt,Al=class n{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];hp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Js),i[s].setFromProjectionMatrix(hp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Js),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var ko=class extends Rn{constructor(e=[],t=sr,i,s,r,o,a,l,h,c){super(e,t,i,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bo=class extends Rn{constructor(e,t,i,s,r,o,a,l,h){super(e,t,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends Rn{constructor(e,t,i=hi,s,r,o,a=on,l=on,h,c=Wi,d=1){if(c!==Wi&&c!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},zo=class extends Xi{constructor(e,t=hi,i=sr,s,r,o=on,a=on,l,h=Wi){let c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,s,r,o,a,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ho=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wt=class n extends Ut{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],d=[],u=0,p=0;f("z","y","x",-1,-1,i,t,e,o,r,0),f("z","y","x",1,-1,i,t,-e,o,r,1),f("x","z","y",1,1,e,i,t,s,o,2),f("x","z","y",1,-1,e,i,-t,s,o,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(d,2));function f(g,m,x,_,w,y,M,b,v,S,C){let A=y/v,I=M/S,R=y/2,D=M/2,T=b/2,O=v+1,F=S+1,W=0,j=0,V=new H;for(let Y=0;Y<F;Y++){let G=Y*I-D;for(let he=0;he<O;he++){let ve=he*A-R;V[g]=ve*_,V[m]=G*w,V[x]=T,h.push(V.x,V.y,V.z),V[g]=0,V[m]=0,V[x]=b>0?1:-1,c.push(V.x,V.y,V.z),d.push(he/v),d.push(1-Y/S),W+=1}}for(let Y=0;Y<S;Y++)for(let G=0;G<v;G++){let he=u+G+O*Y,ve=u+G+O*(Y+1),z=u+(G+1)+O*(Y+1),re=u+(G+1)+O*Y;l.push(he,ve,re),l.push(ve,z,re),j+=6}a.addGroup(p,j,C),p+=j,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var pn=class n extends Ut{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],p=[],f=0,g=[],m=i/2,x=0;_(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function _(){let y=new H,M=new H,b=0,v=(t-e)/i;for(let S=0;S<=r;S++){let C=[],A=S/r,I=A*(t-e)+e;for(let R=0;R<=s;R++){let D=R/s,T=D*l+a,O=Math.sin(T),F=Math.cos(T);M.x=I*O,M.y=-A*i+m,M.z=I*F,d.push(M.x,M.y,M.z),y.set(O,v,F).normalize(),u.push(y.x,y.y,y.z),p.push(D,1-A),C.push(f++)}g.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let A=g[C][S],I=g[C+1][S],R=g[C+1][S+1],D=g[C][S+1];(e>0||C!==0)&&(c.push(A,I,D),b+=3),(t>0||C!==r-1)&&(c.push(I,R,D),b+=3)}h.addGroup(x,b,0),x+=b}function w(y){let M=f,b=new Ge,v=new H,S=0,C=y===!0?e:t,A=y===!0?1:-1;for(let R=1;R<=s;R++)d.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),f++;let I=f;for(let R=0;R<=s;R++){let T=R/s*l+a,O=Math.cos(T),F=Math.sin(T);v.x=C*F,v.y=m*A,v.z=C*O,d.push(v.x,v.y,v.z),u.push(0,A,0),b.x=O*.5+.5,b.y=F*.5*A+.5,p.push(b.x,b.y),f++}for(let R=0;R<s;R++){let D=M+R,T=I+R;y===!0?c.push(T,T+1,D):c.push(T+1,T,D),S+=3}h.addGroup(x,S,y===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Go=class n extends Ut{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),h(i),c(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new H,y=new H,M=new H;for(let b=0;b<t.length;b+=3)p(t[b+0],w),p(t[b+1],y),p(t[b+2],M),l(w,y,M,_)}function l(_,w,y,M){let b=M+1,v=[];for(let S=0;S<=b;S++){v[S]=[];let C=_.clone().lerp(y,S/b),A=w.clone().lerp(y,S/b),I=b-S;for(let R=0;R<=I;R++)R===0&&S===b?v[S][R]=C:v[S][R]=C.clone().lerp(A,R/I)}for(let S=0;S<b;S++)for(let C=0;C<2*(b-S)-1;C++){let A=Math.floor(C/2);C%2===0?(u(v[S][A+1]),u(v[S+1][A]),u(v[S][A])):(u(v[S][A+1]),u(v[S+1][A+1]),u(v[S+1][A]))}}function h(_){let w=new H;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(_),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function c(){let _=new H;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let y=m(_)/2/Math.PI+.5,M=x(_)/Math.PI+.5;o.push(y,1-M)}f(),d()}function d(){for(let _=0;_<o.length;_+=6){let w=o[_+0],y=o[_+2],M=o[_+4],b=Math.max(w,y,M),v=Math.min(w,y,M);b>.9&&v<.1&&(w<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),M<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function p(_,w){let y=_*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function f(){let _=new H,w=new H,y=new H,M=new H,b=new Ge,v=new Ge,S=new Ge;for(let C=0,A=0;C<r.length;C+=9,A+=6){_.set(r[C+0],r[C+1],r[C+2]),w.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),b.set(o[A+0],o[A+1]),v.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),M.copy(_).add(w).add(y).divideScalar(3);let I=m(M);g(b,A+0,_,I),g(v,A+2,w,I),g(S,A+4,y,I)}}function g(_,w,y,M){M<0&&_.x===1&&(o[w]=_.x-1),y.x===0&&y.z===0&&(o[w]=M/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function x(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let c=i[s],u=i[s+1]-c,p=(o-c)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ge:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new H,s=[],r=[],o=[],a=new H,l=new gt;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new H)}r[0]=new H,o[0]=new H;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(ft(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ft(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Hr=class extends Cn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ge){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=h-this.aY;l=u*c-p*d+this.aX,h=u*d+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rl=class extends Hr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ju(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,d){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,p*=c,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var up=new H,dp=new H,hu=new ju,uu=new ju,du=new ju,Cl=class extends Cn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(dp.subVectors(s[0],s[1]).add(s[0]),h=dp);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(up.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=up),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(h.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(c),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),hu.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,f,g,m),uu.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,f,g,m),du.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,f,g,m)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),uu.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),du.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(hu.calc(l),uu.calc(l),du.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ev(n,e){let t=1-n;return t*t*e}function Av(n,e){return 2*(1-n)*n*e}function Rv(n,e){return n*n*e}function Eo(n,e,t,i){return Ev(n,e)+Av(n,t)+Rv(n,i)}function Cv(n,e){let t=1-n;return t*t*t*e}function Pv(n,e){let t=1-n;return 3*t*t*n*e}function Iv(n,e){return 3*(1-n)*n*n*e}function Lv(n,e){return n*n*n*e}function Ao(n,e,t,i,s){return Cv(n,e)+Pv(n,t)+Iv(n,i)+Lv(n,s)}var Vo=class extends Cn{constructor(e=new Ge,t=new Ge,i=new Ge,s=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ge){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ao(e,s.x,r.x,o.x,a.x),Ao(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pl=class extends Cn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ao(e,s.x,r.x,o.x,a.x),Ao(e,s.y,r.y,o.y,a.y),Ao(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends Cn{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Il=class extends Cn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Cn{constructor(e=new Ge,t=new Ge,i=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ge){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Eo(e,s.x,r.x,o.x),Eo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends Cn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Eo(e,s.x,r.x,o.x),Eo(e,s.y,r.y,o.y),Eo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(fp(a,l.x,h.x,c.x,d.x),fp(a,l.y,h.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ge().fromArray(s))}return this}},Ll=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:Cl,CubicBezierCurve:Vo,CubicBezierCurve3:Pl,EllipseCurve:Hr,LineCurve:Wo,LineCurve3:Il,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:Yo,SplineCurve:qo}),Dl=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ll[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},js=class extends Dl{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Wo(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Xo(this.currentPoint.clone(),new Ge(e,t),new Ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Vo(this.currentPoint.clone(),new Ge(e,t),new Ge(i,s),new Ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new qo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let h=new Hr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gr=class extends js{constructor(e){super(e),this.uuid=or(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new js().fromJSON(s))}return this}};function Dv(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=l0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(i&&(r=kv(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let c=a,d=l;for(let u=t;u<s;u+=t){let p=n[u],f=n[u+1];p<a&&(a=p),f<l&&(l=f),p>c&&(c=p),f>d&&(d=f)}h=Math.max(c-a,d-l),h=h!==0?32767/h:0}return $o(r,o,t,a,l,h,0),o}function l0(n,e,t,i,s){let r;if(s===Zv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=pp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=pp(o/i|0,n[o],n[o+1],r);return r&&Vr(r,r.next)&&(Ko(r),r=r.next),r}function Qs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Vr(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Ko(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $o(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Vv(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,h=n.next;if(r?Ov(n,i,s,r):Nv(n)){e.push(l.i,n.i,h.i),Ko(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Uv(Qs(n),e),$o(n,e,t,i,s,r,2)):o===2&&Fv(n,e,t,i,s,r):$o(Qs(n),e,t,i,s,r,1);break}}}function Nv(n){let e=n.prev,t=n,i=n.next;if(Gt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,h=i.y,c=Math.min(s,r,o),d=Math.min(a,l,h),u=Math.max(s,r,o),p=Math.max(a,l,h),f=i.next;for(;f!==e;){if(f.x>=c&&f.x<=u&&f.y>=d&&f.y<=p&&bo(s,a,r,l,o,h,f.x,f.y)&&Gt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Ov(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Gt(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,c=s.y,d=r.y,u=o.y,p=Math.min(a,l,h),f=Math.min(c,d,u),g=Math.max(a,l,h),m=Math.max(c,d,u),x=xu(p,f,e,t,i),_=xu(g,m,e,t,i),w=n.prevZ,y=n.nextZ;for(;w&&w.z>=x&&y&&y.z<=_;){if(w.x>=p&&w.x<=g&&w.y>=f&&w.y<=m&&w!==s&&w!==o&&bo(a,c,l,d,h,u,w.x,w.y)&&Gt(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==s&&y!==o&&bo(a,c,l,d,h,u,y.x,y.y)&&Gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=x;){if(w.x>=p&&w.x<=g&&w.y>=f&&w.y<=m&&w!==s&&w!==o&&bo(a,c,l,d,h,u,w.x,w.y)&&Gt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==s&&y!==o&&bo(a,c,l,d,h,u,y.x,y.y)&&Gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Uv(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Vr(i,s)&&h0(i,t,t.next,s)&&Zo(i,s)&&Zo(s,i)&&(e.push(i.i,t.i,s.i),Ko(t),Ko(t.next),t=n=s),t=t.next}while(t!==n);return Qs(t)}function Fv(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yv(o,a)){let l=u0(o,a);o=Qs(o,o.next),l=Qs(l,l.next),$o(o,e,t,i,s,r,0),$o(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function kv(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,h=l0(n,a,l,i,!1);h===h.next&&(h.steiner=!0),s.push(Xv(h))}s.sort(Bv);for(let r=0;r<s.length;r++)t=zv(s[r],t);return t}function Bv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function zv(n,e){let t=Hv(n,e);if(!t)return e;let i=u0(t,n);return Qs(i,i.next),Qs(t,t.next)}function Hv(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Vr(n,t))return t;do{if(Vr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,h=o.y,c=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&c0(s<h?i:r,s,l,h,s<h?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Zo(t,n)&&(d<c||d===c&&(t.x>o.x||t.x===o.x&&Gv(o,t)))&&(o=t,c=d)}t=t.next}while(t!==a);return o}function Gv(n,e){return Gt(n.prev,n,e.prev)<0&&Gt(e.next,n,n.next)<0}function Vv(n,e,t,i){let s=n;do s.z===0&&(s.z=xu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wv(s)}function Wv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let h=0;h<t&&(a++,o=o.nextZ,!!o);h++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function xu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Xv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function c0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function bo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&c0(n,e,t,i,s,r,o,a)}function Yv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qv(n,e)&&(Zo(n,e)&&Zo(e,n)&&$v(n,e)&&(Gt(n.prev,n,e.prev)||Gt(n,e.prev,e))||Vr(n,e)&&Gt(n.prev,n,n.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vr(n,e){return n.x===e.x&&n.y===e.y}function h0(n,e,t,i){let s=al(Gt(n,e,t)),r=al(Gt(n,e,i)),o=al(Gt(t,i,n)),a=al(Gt(t,i,e));return!!(s!==r&&o!==a||s===0&&ol(n,t,e)||r===0&&ol(n,i,e)||o===0&&ol(t,n,i)||a===0&&ol(t,e,i))}function ol(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function al(n){return n>0?1:n<0?-1:0}function qv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&h0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zo(n,e){return Gt(n.prev,n,n.next)<0?Gt(n,e,n.next)>=0&&Gt(n,n.prev,e)>=0:Gt(n,e,n.prev)<0||Gt(n,n.next,e)<0}function $v(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function u0(n,e){let t=vu(n.i,n.x,n.y),i=vu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function pp(n,e,t,i){let s=vu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ko(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var _u=class{static triangulate(e,t,i=2){return Dv(e,t,i)}},$s=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];mp(e),gp(i,e);let o=e.length;t.forEach(mp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,gp(i,t[l]);let a=_u.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function mp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Jo=class n extends Ut{constructor(e=new Gr([new Ge(.5,.5),new Ge(-.5,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let h=e[a];o(h)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Kv,w,y=!1,M,b,v,S;if(x){w=x.getSpacedPoints(c),y=!0,u=!1;let U=x.isCatmullRomCurve3?x.closed:!1;M=x.computeFrenetFrames(c,U),b=new H,v=new H,S=new H}u||(m=0,p=0,f=0,g=0);let C=a.extractPoints(h),A=C.shape,I=C.holes;if(!$s.isClockWise(A)){A=A.reverse();for(let U=0,q=I.length;U<q;U++){let Q=I[U];$s.isClockWise(Q)&&(I[U]=Q.reverse())}}function D(U){let Q=10000000000000001e-36,ae=U[0];for(let J=1;J<=U.length;J++){let _e=J%U.length,te=U[_e],me=te.x-ae.x,Te=te.y-ae.y,ze=me*me+Te*Te,B=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(ae.x),Math.abs(ae.y)),ge=Q*B*B;if(ze<=ge){U.splice(_e,1),J--;continue}ae=te}}D(A),I.forEach(D);let T=I.length,O=A;for(let U=0;U<T;U++){let q=I[U];A=A.concat(q)}function F(U,q,Q){return q||ot("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(q,Q)}let W=A.length;function j(U,q,Q){let ae,J,_e,te=U.x-q.x,me=U.y-q.y,Te=Q.x-U.x,ze=Q.y-U.y,B=te*te+me*me,ge=te*ze-me*Te;if(Math.abs(ge)>Number.EPSILON){let Ae=Math.sqrt(B),Ve=Math.sqrt(Te*Te+ze*ze),se=q.x-me/Ae,Ze=q.y+te/Ae,Re=Q.x-ze/Ve,Pe=Q.y+Te/Ve,N=((Re-se)*ze-(Pe-Ze)*Te)/(te*ze-me*Te);ae=se+te*N-U.x,J=Ze+me*N-U.y;let E=ae*ae+J*J;if(E<=2)return new Ge(ae,J);_e=Math.sqrt(E/2)}else{let Ae=!1;te>Number.EPSILON?Te>Number.EPSILON&&(Ae=!0):te<-Number.EPSILON?Te<-Number.EPSILON&&(Ae=!0):Math.sign(me)===Math.sign(ze)&&(Ae=!0),Ae?(ae=-me,J=te,_e=Math.sqrt(B)):(ae=te,J=me,_e=Math.sqrt(B/2))}return new Ge(ae/_e,J/_e)}let V=[];for(let U=0,q=O.length,Q=q-1,ae=U+1;U<q;U++,Q++,ae++)Q===q&&(Q=0),ae===q&&(ae=0),V[U]=j(O[U],O[Q],O[ae]);let Y=[],G,he=V.concat();for(let U=0,q=T;U<q;U++){let Q=I[U];G=[];for(let ae=0,J=Q.length,_e=J-1,te=ae+1;ae<J;ae++,_e++,te++)_e===J&&(_e=0),te===J&&(te=0),G[ae]=j(Q[ae],Q[_e],Q[te]);Y.push(G),he=he.concat(G)}let ve;if(m===0)ve=$s.triangulateShape(O,I);else{let U=[],q=[];for(let Q=0;Q<m;Q++){let ae=Q/m,J=p*Math.cos(ae*Math.PI/2),_e=f*Math.sin(ae*Math.PI/2)+g;for(let te=0,me=O.length;te<me;te++){let Te=F(O[te],V[te],_e);Ce(Te.x,Te.y,-J),ae===0&&U.push(Te)}for(let te=0,me=T;te<me;te++){let Te=I[te];G=Y[te];let ze=[];for(let B=0,ge=Te.length;B<ge;B++){let Ae=F(Te[B],G[B],_e);Ce(Ae.x,Ae.y,-J),ae===0&&ze.push(Ae)}ae===0&&q.push(ze)}}ve=$s.triangulateShape(U,q)}let z=ve.length,re=f+g;for(let U=0;U<W;U++){let q=u?F(A[U],he[U],re):A[U];y?(v.copy(M.normals[0]).multiplyScalar(q.x),b.copy(M.binormals[0]).multiplyScalar(q.y),S.copy(w[0]).add(v).add(b),Ce(S.x,S.y,S.z)):Ce(q.x,q.y,0)}for(let U=1;U<=c;U++)for(let q=0;q<W;q++){let Q=u?F(A[q],he[q],re):A[q];y?(v.copy(M.normals[U]).multiplyScalar(Q.x),b.copy(M.binormals[U]).multiplyScalar(Q.y),S.copy(w[U]).add(v).add(b),Ce(S.x,S.y,S.z)):Ce(Q.x,Q.y,d/c*U)}for(let U=m-1;U>=0;U--){let q=U/m,Q=p*Math.cos(q*Math.PI/2),ae=f*Math.sin(q*Math.PI/2)+g;for(let J=0,_e=O.length;J<_e;J++){let te=F(O[J],V[J],ae);Ce(te.x,te.y,d+Q)}for(let J=0,_e=I.length;J<_e;J++){let te=I[J];G=Y[J];for(let me=0,Te=te.length;me<Te;me++){let ze=F(te[me],G[me],ae);y?Ce(ze.x,ze.y+w[c-1].y,w[c-1].x+Q):Ce(ze.x,ze.y,d+Q)}}}be(),xe();function be(){let U=s.length/3;if(u){let q=0,Q=W*q;for(let ae=0;ae<z;ae++){let J=ve[ae];Ke(J[2]+Q,J[1]+Q,J[0]+Q)}q=c+m*2,Q=W*q;for(let ae=0;ae<z;ae++){let J=ve[ae];Ke(J[0]+Q,J[1]+Q,J[2]+Q)}}else{for(let q=0;q<z;q++){let Q=ve[q];Ke(Q[2],Q[1],Q[0])}for(let q=0;q<z;q++){let Q=ve[q];Ke(Q[0]+W*c,Q[1]+W*c,Q[2]+W*c)}}i.addGroup(U,s.length/3-U,0)}function xe(){let U=s.length/3,q=0;ee(O,q),q+=O.length;for(let Q=0,ae=I.length;Q<ae;Q++){let J=I[Q];ee(J,q),q+=J.length}i.addGroup(U,s.length/3-U,1)}function ee(U,q){let Q=U.length;for(;--Q>=0;){let ae=Q,J=Q-1;J<0&&(J=U.length-1);for(let _e=0,te=c+m*2;_e<te;_e++){let me=W*_e,Te=W*(_e+1),ze=q+ae+me,B=q+J+me,ge=q+J+Te,Ae=q+ae+Te;Be(ze,B,ge,Ae)}}}function Ce(U,q,Q){l.push(U),l.push(q),l.push(Q)}function Ke(U,q,Q){Je(U),Je(q),Je(Q);let ae=s.length/3,J=_.generateTopUV(i,s,ae-3,ae-2,ae-1);ke(J[0]),ke(J[1]),ke(J[2])}function Be(U,q,Q,ae){Je(U),Je(q),Je(ae),Je(q),Je(Q),Je(ae);let J=s.length/3,_e=_.generateSideWallUV(i,s,J-6,J-3,J-2,J-1);ke(_e[0]),ke(_e[1]),ke(_e[3]),ke(_e[1]),ke(_e[2]),ke(_e[3])}function Je(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function ke(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Jv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ll[s.type]().fromJSON(s)),new n(i,e.options)}},Kv={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],h=e[s*3],c=e[s*3+1];return[new Ge(r,o),new Ge(a,l),new Ge(h,c)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],h=e[i*3],c=e[i*3+1],d=e[i*3+2],u=e[s*3],p=e[s*3+1],f=e[s*3+2],g=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new Ge(o,1-l),new Ge(h,1-d),new Ge(u,1-f),new Ge(g,1-x)]:[new Ge(a,1-l),new Ge(c,1-d),new Ge(p,1-f),new Ge(m,1-x)]}};function Jv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var er=class n extends Go{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},jo=class n extends Ut{constructor(e=[new Ge(0,-.5),new Ge(.5,0),new Ge(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],c=1/t,d=new H,u=new Ge,p=new H,f=new H,g=new H,m=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,p.x=x*1,p.y=-m,p.z=x*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,p.x=x*1,p.y=-m,p.z=x*0,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let _=0;_<=t;_++){let w=i+_*c*s,y=Math.sin(w),M=Math.cos(w);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*y,d.y=e[b].y,d.z=e[b].x*M,o.push(d.x,d.y,d.z),u.x=_/t,u.y=b/(e.length-1),a.push(u.x,u.y);let v=l[3*b+0]*y,S=l[3*b+1],C=l[3*b+0]*M;h.push(v,S,C)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let y=w+_*e.length,M=y,b=y+e.length,v=y+e.length+1,S=y+1;r.push(M,b,S),r.push(v,S,b)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Wr=class n extends Go{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fs=class n extends Ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,d=e/a,u=t/l,p=[],f=[],g=[],m=[];for(let x=0;x<c;x++){let _=x*u-o;for(let w=0;w<h;w++){let y=w*d-r;f.push(y,-_,0),g.push(0,0,1),m.push(w/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<a;_++){let w=_+h*x,y=_+h*(x+1),M=_+1+h*(x+1),b=_+1+h*x;p.push(w,y,b),p.push(y,M,b)}this.setIndex(p),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(g,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var an=class n extends Ut{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,c=[],d=new H,u=new H,p=[],f=[],g=[],m=[];for(let x=0;x<=i;x++){let _=[],w=x/i,y=o+w*a,M=e*Math.cos(y),b=Math.sqrt(e*e-M*M),v=0;x===0&&o===0?v=.5/t:x===i&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let C=S/t,A=s+C*r;d.x=-b*Math.cos(A),d.y=M,d.z=b*Math.sin(A),f.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(C+v,1-w),_.push(h++)}c.push(_)}for(let x=0;x<i;x++)for(let _=0;_<t;_++){let w=c[x][_+1],y=c[x][_],M=c[x+1][_],b=c[x+1][_+1];(x!==0||o>0)&&p.push(w,y,b),(x!==i-1||l<Math.PI)&&p.push(y,M,b)}this.setIndex(p),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(g,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var tr=class n extends Ut{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=new H,p=new H,f=new H;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=s;x++){let _=x/s*r;p.x=(e+t*Math.cos(m))*Math.cos(_),p.y=(e+t*Math.cos(m))*Math.sin(_),p.z=t*Math.sin(m),h.push(p.x,p.y,p.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(p,u).normalize(),c.push(f.x,f.y,f.z),d.push(x/s),d.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,_=(s+1)*(g-1)+m-1,w=(s+1)*(g-1)+m,y=(s+1)*g+m;l.push(x,_,y),l.push(_,w,y)}this.setIndex(l),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Qo=class n extends Ut{constructor(e=new Yo(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,h=new Ge,c=new H,d=[],u=[],p=[],f=[];g(),this.setIndex(f),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function g(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),_(),x()}function m(w){c=e.getPointAt(w/t,c);let y=o.normals[w],M=o.binormals[w];for(let b=0;b<=s;b++){let v=b/s*Math.PI*2,S=Math.sin(v),C=-Math.cos(v);l.x=C*y.x+S*M.x,l.y=C*y.y+S*M.y,l.z=C*y.z+S*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,d.push(a.x,a.y,a.z)}}function x(){for(let w=1;w<=t;w++)for(let y=1;y<=s;y++){let M=(s+1)*(w-1)+(y-1),b=(s+1)*w+(y-1),v=(s+1)*w+y,S=(s+1)*(w-1)+y;f.push(M,b,S),f.push(b,v,S)}}function _(){for(let w=0;w<=t;w++)for(let y=0;y<=s;y++)h.x=w/t,h.y=y/s,p.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ll[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ar(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(xp(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(xp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function bn(n){let e={};for(let t=0;t<n.length;t++){let i=ar(n[t]);for(let s in i)e[s]=i[s]}return e}function xp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var d0={clone:ar,merge:bn},Qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qv,this.fragmentShader=e_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Vt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new at().fromArray(s.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nl=class extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ol=class extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ul=class extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ir(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ll(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ps=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends ps{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mu:r=e,a=2*t-i;break;case gu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mu:o=e,l=2*i-t;break;case gu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let h=(i-t)*.5,c=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),g=f*f,m=g*f,x=-u*m+2*u*g-u*f,_=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*f+1,w=(-1-p)*m+(1.5+p)*g+.5*f,y=p*m-p*g;for(let M=0;M!==a;++M)r[M]=x*o[c+M]+_*o[h+M]+w*o[l+M]+y*o[d+M];return r}},kl=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=(i-t)/(s-t),d=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*d+o[l+u]*c;return r}},Bl=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zl=class extends ps{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let f=(i-t)/(s-t),g=1-f;for(let m=0;m!==a;++m)r[m]=o[h+m]*g+o[l+m]*f;return r}let u=a*2,p=e-1;for(let f=0;f!==a;++f){let g=o[h+f],m=o[l+f],x=p*u+f*2,_=d[x],w=d[x+1],y=e*u+f*2,M=c[y],b=c[y+1],v=n_(i,t,_,M,s);r[f]=f0(v,g,w,b,m)}return r}};function f0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function t_(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function n_(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=f0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=t_(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ir(t,this.TimeBufferType),this.values=Ir(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ir(e.times,Array),values:Ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ll(e.settings)&&(i.settings={inTangents:Ir(e.settings.inTangents,Array),outTangents:Ir(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case bl:t=this.InterpolantFactoryMethodLinear;break;case ul:t=this.InterpolantFactoryMethodSmooth;break;case fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return rt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return bl;case this.InterpolantFactoryMethodSmooth:return ul;case this.InterpolantFactoryMethodBezier:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ll(this.settings)&&(vp(this.settings.inTangents,e),vp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ll(this.settings)&&(_p(this.settings.inTangents,e),_p(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ot("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Xx(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){ot("KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ul,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=e[a],c=e[a+1];if(h!==c&&(a!==1||h!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let f=0;f!==i;++f){let g=t[d+f];if(g!==t[u+f]||g!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ll(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function _p(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=bl;var ms=class extends Vn{constructor(e,t,i){super(e,t,i)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ro;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};Hl.prototype.ValueTypeName="color";var Gl=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};Gl.prototype.ValueTypeName="number";var Vl=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),h=e*a;for(let c=h+a;h!==c;h+=4)An.slerpFlat(r,0,o,h-a,o,h,l);return r}},ea=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Vn{constructor(e,t,i){super(e,t,i)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ro;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};Wl.prototype.ValueTypeName="vector";var Xl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let p=h[d],f=h[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},p0=new Xl,Yl=class{constructor(e){this.manager=e!==void 0?e:p0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var cl=new H,hl=new An,vi=new H,ta=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cl,hl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,hl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(cl,hl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,hl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new H,yp=new Ge,Mp=new Ge,dn=class extends ta{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,yp,Mp),t.subVectors(Mp,yp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ql=class extends ta{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Lr=-90,Dr=1,Xr=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Lr,Dr,e,t);s.layers=this.layers,this.add(s);let r=new dn(Lr,Dr,e,t);r.layers=this.layers,this.add(r);let o=new dn(Lr,Dr,e,t);o.layers=this.layers,this.add(o);let a=new dn(Lr,Dr,e,t);a.layers=this.layers,this.add(a);let l=new dn(Lr,Dr,e,t);l.layers=this.layers,this.add(l);let h=new dn(Lr,Dr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let h of t)this.remove(h);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},$l=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ed="\\[\\]\\.:\\/",i_=new RegExp("["+ed+"]","g"),td="[^"+ed+"]",s_="[^"+ed.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",td),o_=/(WCOD+)?/.source.replace("WCOD",s_),a_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),c_=new RegExp("^"+r_+o_+a_+l_+"$"),h_=["material","materials","bones","map"],yu=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(e){let t=c_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);h_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[s];if(o===void 0){let h=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=yu;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oA=new Float32Array(1);var ad=class ad{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};ad.prototype.isMatrix2=!0;var Mu=ad;function nd(n,e,t,i){let s=u_(i);switch(t){case Hu:return n*e;case nc:return n*e/s.components*s.byteLength;case ic:return n*e/s.components*s.byteLength;case vs:return n*e*2/s.components*s.byteLength;case sc:return n*e*2/s.components*s.byteLength;case Gu:return n*e*3/s.components*s.byteLength;case di:return n*e*4/s.components*s.byteLength;case rc:return n*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:case cc:return Math.max(n,16)*Math.max(e,8)/4;case oc:case lc:return Math.max(n,8)*Math.max(e,8)/2;case hc:case uc:case fc:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dc:case la:case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Ic:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dc:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ca:case Oc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u_(n){switch(n){case Xn:case Fu:return{byteLength:1,components:1};case Zr:case ku:case ui:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case hi:case Ql:case jn:return{byteLength:4,components:1};case Bu:case zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function U0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function M_(n){let e=new WeakMap;function t(a,l){let h=a.array,c=a.usage,d=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),a.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,h){let c=l.array,d=l.updateRanges;if(n.bindBuffer(h,a),d.length===0)n.bufferSubData(h,0,c);else{d.sort((p,f)=>p.start-f.start);let u=0;for(let p=1;p<d.length;p++){let f=d[u],g=d[p];g.start<=f.start+f.count+1?f.count=Math.max(f.count,g.start+g.count-f.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,f=d.length;p<f;p++){let g=d[p];n.bufferSubData(h,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
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
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,I_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O_=`#ifdef USE_IRIDESCENCE
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
#endif`,U_=`#ifdef USE_BUMPMAP
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,Y_=`vec3 transformedNormal = objectNormal;
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
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fy=`#ifdef USE_ENVMAP
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
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
#endif`,_y=`uniform sampler2D dfgLUT;
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
}`,yy=`
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
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
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iy=`#if defined( USE_POINTS_UV )
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
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
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
#endif`,Uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
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
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform float backgroundBlurriness;
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
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
}`,R1=`#if DEPTH_PACKING == 3200
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
}`,C1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
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
}`,N1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,U1=`uniform vec3 diffuse;
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
}`,F1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
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
}`,B1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,H1=`#define NORMAL
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
}`,G1=`#define NORMAL
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
}`,V1=`#define PHONG
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
}`,W1=`#define PHONG
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
}`,X1=`#define STANDARD
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
}`,Y1=`#define STANDARD
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
}`,q1=`#define TOON
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
}`,$1=`#define TOON
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
}`,Z1=`uniform float size;
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
}`,K1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,j1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,eM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:b_,alphahash_pars_fragment:S_,alphamap_fragment:w_,alphamap_pars_fragment:T_,alphatest_fragment:E_,alphatest_pars_fragment:A_,aomap_fragment:R_,aomap_pars_fragment:C_,batching_pars_vertex:P_,batching_vertex:I_,begin_vertex:L_,beginnormal_vertex:D_,bsdfs:N_,iridescence_fragment:O_,bumpmap_pars_fragment:U_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:k_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:z_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:V_,color_vertex:W_,common:X_,defaultnormal_vertex:Y_,displacementmap_pars_vertex:q_,displacementmap_vertex:$_,emissivemap_fragment:Z_,emissivemap_pars_fragment:K_,colorspace_fragment:J_,colorspace_pars_fragment:j_,envmap_fragment:Q_,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:ny,envmap_physical_pars_fragment:fy,envmap_vertex:iy,fog_vertex:sy,fog_pars_vertex:ry,fog_fragment:oy,fog_pars_fragment:ay,gradientmap_pars_fragment:ly,lightmap_pars_fragment:cy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:uy,lights_pars_begin:dy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:xy,lights_physical_fragment:vy,lights_physical_pars_fragment:_y,lights_fragment_begin:yy,lights_fragment_maps:My,lights_fragment_end:by,lightprobes_pars_fragment:Sy,logdepthbuf_fragment:wy,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:Ay,map_fragment:Ry,map_pars_fragment:Cy,map_particle_fragment:Py,map_particle_pars_fragment:Iy,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Dy,morphinstance_vertex:Ny,morphcolor_vertex:Oy,morphnormal_vertex:Uy,morphtarget_pars_vertex:Fy,morphtarget_vertex:ky,normal_fragment_begin:By,normal_fragment_maps:zy,normal_pars_fragment:Hy,normal_pars_vertex:Gy,normal_vertex:Vy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:$y,opaque_fragment:Zy,packing:Ky,premultiplied_alpha_fragment:Jy,project_vertex:jy,dithering_fragment:Qy,dithering_pars_fragment:e1,roughnessmap_fragment:t1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:i1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:o1,skinbase_vertex:a1,skinning_pars_vertex:l1,skinning_vertex:c1,skinnormal_vertex:h1,specularmap_fragment:u1,specularmap_pars_fragment:d1,tonemapping_fragment:f1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:x1,uv_pars_vertex:v1,uv_vertex:_1,worldpos_vertex:y1,background_vert:M1,background_frag:b1,backgroundCube_vert:S1,backgroundCube_frag:w1,cube_vert:T1,cube_frag:E1,depth_vert:A1,depth_frag:R1,distance_vert:C1,distance_frag:P1,equirect_vert:I1,equirect_frag:L1,linedashed_vert:D1,linedashed_frag:N1,meshbasic_vert:O1,meshbasic_frag:U1,meshlambert_vert:F1,meshlambert_frag:k1,meshmatcap_vert:B1,meshmatcap_frag:z1,meshnormal_vert:H1,meshnormal_frag:G1,meshphong_vert:V1,meshphong_frag:W1,meshphysical_vert:X1,meshphysical_frag:Y1,meshtoon_vert:q1,meshtoon_frag:$1,points_vert:Z1,points_frag:K1,shadow_vert:J1,shadow_frag:j1,sprite_vert:Q1,sprite_frag:eM},qe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ti={basic:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:bn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:bn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:bn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new it(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:bn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:bn([qe.points,qe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:bn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:bn([qe.common,qe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:bn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:bn([qe.sprite,qe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:bn([qe.common,qe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:bn([qe.lights,qe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ti.physical={uniforms:bn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Fc={r:0,b:0,g:0},tM=new gt,F0=new at;F0.set(-1,0,0,0,1,0,0,0,1);function nM(n,e,t,i,s,r){let o=new it(0),a=s===!0?0:1,l,h,c=null,d=0,u=null;function p(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let y=_.backgroundBlurriness>0;w=e.get(w,y)}return w}function f(_){let w=!1,y=p(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,w){let y=p(w);y&&y.isCubeTexture?(h===void 0&&(h=new ut(new wt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ar(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(F0),h.material.toneMapped=yt.getTransfer(y.colorSpace)!==Rt,(c!==y||d!==y.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,u=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ut(new fs(2,2),new Mn({name:"BackgroundMaterial",uniforms:ar(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=yt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,c=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,w){_.getRGB(Fc,Qu(n)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,w,r)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:f,addToRenderList:g,dispose:x}}function iM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(I,R,D,T,O){let F=!1,W=d(I,T,D,R);r!==W&&(r=W,h(r.object)),F=p(I,T,D,O),F&&f(I,T,D,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(I,R,D,T),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function h(I){return n.bindVertexArray(I)}function c(I){return n.deleteVertexArray(I)}function d(I,R,D,T){let O=T.wireframe===!0,F=i[R.id];F===void 0&&(F={},i[R.id]=F);let W=I.isInstancedMesh===!0?I.id:0,j=F[W];j===void 0&&(j={},F[W]=j);let V=j[D.id];V===void 0&&(V={},j[D.id]=V);let Y=V[O];return Y===void 0&&(Y=u(l()),V[O]=Y),Y}function u(I){let R=[],D=[],T=[];for(let O=0;O<t;O++)R[O]=0,D[O]=0,T[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:T,object:I,attributes:{},index:null}}function p(I,R,D,T){let O=r.attributes,F=R.attributes,W=0,j=D.getAttributes();for(let V in j)if(j[V].location>=0){let G=O[V],he=F[V];if(he===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),G===void 0||G.attribute!==he||he&&G.data!==he.data)return!0;W++}return r.attributesNum!==W||r.index!==T}function f(I,R,D,T){let O={},F=R.attributes,W=0,j=D.getAttributes();for(let V in j)if(j[V].location>=0){let G=F[V];G===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(G=I.instanceColor));let he={};he.attribute=G,G&&G.data&&(he.data=G.data),O[V]=he,W++}r.attributes=O,r.attributesNum=W,r.index=T}function g(){let I=r.newAttributes;for(let R=0,D=I.length;R<D;R++)I[R]=0}function m(I){x(I,0)}function x(I,R){let D=r.newAttributes,T=r.enabledAttributes,O=r.attributeDivisors;D[I]=1,T[I]===0&&(n.enableVertexAttribArray(I),T[I]=1),O[I]!==R&&(n.vertexAttribDivisor(I,R),O[I]=R)}function _(){let I=r.newAttributes,R=r.enabledAttributes;for(let D=0,T=R.length;D<T;D++)R[D]!==I[D]&&(n.disableVertexAttribArray(D),R[D]=0)}function w(I,R,D,T,O,F,W){W===!0?n.vertexAttribIPointer(I,R,D,O,F):n.vertexAttribPointer(I,R,D,T,O,F)}function y(I,R,D,T){g();let O=T.attributes,F=D.getAttributes(),W=R.defaultAttributeValues;for(let j in F){let V=F[j];if(V.location>=0){let Y=O[j];if(Y===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let G=Y.normalized,he=Y.itemSize,ve=e.get(Y);if(ve===void 0)continue;let z=ve.buffer,re=ve.type,be=ve.bytesPerElement,xe=re===n.INT||re===n.UNSIGNED_INT||Y.gpuType===Ql;if(Y.isInterleavedBufferAttribute){let ee=Y.data,Ce=ee.isInterleavedBuffer===!0?ee.stride:ee.itemSize,Ke=Y.offset;if(ee.isInstancedInterleavedBuffer||ee.isInstancedBufferAttribute){for(let Be=0;Be<V.locationSize;Be++)x(V.location+Be,ee.meshPerAttribute);I.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Be=0;Be<V.locationSize;Be++)m(V.location+Be);n.bindBuffer(n.ARRAY_BUFFER,z);for(let Be=0;Be<V.locationSize;Be++)w(V.location+Be,he/V.locationSize,re,G,Ce*be,(Ke+he/V.locationSize*Be)*be,xe)}else{if(Y.isInstancedBufferAttribute){for(let ee=0;ee<V.locationSize;ee++)x(V.location+ee,Y.meshPerAttribute);I.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ee=0;ee<V.locationSize;ee++)m(V.location+ee);n.bindBuffer(n.ARRAY_BUFFER,z);for(let ee=0;ee<V.locationSize;ee++)w(V.location+ee,he/V.locationSize,re,G,he*be,he/V.locationSize*ee*be,xe)}}else if(W!==void 0){let G=W[j];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(V.location,G);break;case 3:n.vertexAttrib3fv(V.location,G);break;case 4:n.vertexAttrib4fv(V.location,G);break;default:n.vertexAttrib1fv(V.location,G)}}}}_()}function M(){C();for(let I in i){let R=i[I];for(let D in R){let T=R[D];for(let O in T){let F=T[O];for(let W in F)c(F[W].object),delete F[W];delete T[O]}}delete i[I]}}function b(I){if(i[I.id]===void 0)return;let R=i[I.id];for(let D in R){let T=R[D];for(let O in T){let F=T[O];for(let W in F)c(F[W].object),delete F[W];delete T[O]}}delete i[I.id]}function v(I){for(let R in i){let D=i[R];for(let T in D){let O=D[T];if(O[I.id]===void 0)continue;let F=O[I.id];for(let W in F)c(F[W].object),delete F[W];delete O[I.id]}}}function S(I){for(let R in i){let D=i[R],T=I.isInstancedMesh===!0?I.id:0,O=D[T];if(O!==void 0){for(let F in O){let W=O[F];for(let j in W)c(W[j].object),delete W[j];delete O[F]}delete D[T],Object.keys(D).length===0&&delete i[R]}}}function C(){A(),o=!0,r!==s&&(r=s,h(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function sM(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),t.update(h,i,c))}function a(l,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=h[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==di&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Xn&&v!==jn&&!S&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",c=l(h);c!==h&&(rt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:y,maxSamples:M,samples:b}}function oM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ci,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,p){let f=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,x=n.get(d);if(!s||f===null||f.length===0||r&&!m)r?c(null):h();else{let _=r?0:i,w=_*4,y=x.clippingState||null;l.value=y,y=c(f,u,w,p);for(let M=0;M!==w;++M)y[M]=t[M];x.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,u,p,f){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,f!==!0||m===null){let x=p+g*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,y=p;w!==g;++w,y+=4)o.copy(d[w]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var da=class extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ko(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:nr});r.uniforms.tEquirect.value=t;let o=new ut(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=En),new Xr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},m0=256,aM=3,lM=20,k0=256,B0=16,cM=3,hM=new H,uM=new it,Bc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xr(1,10,null),this._boxMesh=new ut(new wt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=hM}=r,l=this._renderer;this._setSize(o);let h=this._allocateTarget(),c=this._getSourceTarget(!0);t>0&&(c.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(uM));let m=new Xr(i,s,c);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=f,e.background=g,t>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(m0,Ku(e))}_fromTexture(e,t){e.mapping===sr||e.mapping===$r?this._setSize(e.image.length===0?m0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=g0(e,!1,!1),i=Math.log2(e)-aM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=g0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===sr||e.mapping===$r?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=x0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=dM(),this._integrationMaterial=fM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/B0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-cM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(k0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function g0(n,e,t){return new da(n,{minFilter:Yi,generateMipmaps:e,type:ui,colorSpace:Co,depthBuffer:t})}function fa(n,e,t){return new Mn({name:n,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:Kt,blending:nr,depthTest:!1,depthWrite:!1})}function dM(){return fa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${k0}u

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
	`)}function fM(){return fa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:B0}},`

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
	`)}function pM(){return fa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lM}
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
	`)}function x0(){return fa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function v0(){return fa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Kl||p===Jl)if(e.has(u)){let f=e.get(u).texture;return a(f,u.mapping)}else{let f=u.image;if(f&&f.height>0){let g=new da(f.height);return g.fromEquirectangularTexture(n,u),e.set(u,g),u.addEventListener("dispose",h),a(g.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,f=p===Kl||p===Jl,g=p===sr||p===$r;if(f||g){let m=t.get(u),x=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return i===null&&(i=new Bc(n)),m=f?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return f&&_&&_.height>0||g&&_&&l(_)?(i===null&&(i=new Bc(n)),m=f?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function a(u,p){return p===Kl?u.mapping=sr:p===Jl&&(u.mapping=$r),u}function l(u){let p=0,f=6;for(let g=0;g<f;g++)u[g]!==void 0&&p++;return p===f}function h(u){let p=u.target;p.removeEventListener("dispose",h);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function gM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&So("WebGLRenderer: "+i+" extension not supported."),s}}}function xM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(f=>delete s[f]);function a(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id],o.unregister(f);let g=r.get(f);g&&(e.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function h(f,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),t.memory.geometries++),g}function c(f){let g=f.attributes;for(let m in g)e.update(g[m],n.ARRAY_BUFFER)}function d(f){let g=f.index,m=f.attributes.position,x=0;if(m===void 0)return;let _=g!==null?g.array.length:m.array.length/3-1,w=m.count>=65535?Uo:Oo,y=new w(Math.ceil(_/3)*6,1),M=y.array;if(g!==null){let v=g.array;x=g.version;for(let S=0,C=0;S<_;S+=3){let A=v[S+0],I=v[S+1],R=v[S+2];M[C++]=A,M[C++]=I,M[C++]=I,M[C++]=R,M[C++]=R,M[C++]=A}}else{x=m.version;for(let v=0,S=0;v<_;v+=3){let C=v+0,A=v+1,I=v+2;M[S++]=C,M[S++]=A,M[S++]=A,M[S++]=I,M[S++]=I,M[S++]=C}}y.version=x;let b=r.get(f);b&&e.remove(b),r.set(f,y)}function u(f){let g=r.get(f);if(g){let m=f.index;m!==null&&g.version<m.version&&d(f)}else d(f);return r.get(f)}function p(){for(let f in s){let g=s[f].deref();g!==void 0&&l(g)}}return{get:h,update:c,getWireframeAttribute:u,dispose:p}}function vM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function h(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*o,p),t.update(u,i,p))}function c(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=u[m];t.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function _M(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yM(n,e,t){let i=new WeakMap,s=new Vt;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==d){let C=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;p===!0&&(w=1),f===!0&&(w=2),g===!0&&(w=3);let y=a.attributes.position.count*w,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*M*4*d),v=new Do(b,y,M,d);v.type=jn,v.needsUpdate=!0;let S=w*4;for(let A=0;A<d;A++){let I=m[A],R=x[A],D=_[A],T=y*M*4*A;for(let O=0;O<I.count;O++){let F=O*S;p===!0&&(s.fromBufferAttribute(I,O),b[T+F+0]=s.x,b[T+F+1]=s.y,b[T+F+2]=s.z,b[T+F+3]=0),f===!0&&(s.fromBufferAttribute(R,O),b[T+F+4]=s.x,b[T+F+5]=s.y,b[T+F+6]=s.z,b[T+F+7]=0),g===!0&&(s.fromBufferAttribute(D,O),b[T+F+8]=s.x,b[T+F+9]=s.y,b[T+F+10]=s.z,b[T+F+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new Ge(y,M)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function MM(n,e,t,i,s){let r=new WeakMap;function o(h){let c=s.render.frame,d=h.geometry,u=e.get(h,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return u}function a(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}var bM={[Cu]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Iu]:"CINEON_TONE_MAPPING",[Lu]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Du]:"CUSTOM_TONE_MAPPING"};function SM(n,e,t,i,s,r){let o=new Gn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,h=null,c=new Ut;c.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pt([0,2,0,0,2,0],2));let d=new Nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ut(c,d),p=new ql(-1,1,1,-1,0,1),f=null,g=null,m=!1,x,_=null,w=[],y=!1;this.setSize=function(M,b){o.setSize(M,b),a!==null&&a.setSize(M,b),l!==null&&l.setSize(M,b);for(let v=0;v<w.length;v++){let S=w[v];S.setSize&&S.setSize(M,b)}},this.setEffects=function(M){w=M,y=w.length>0&&w[0].isRenderPass===!0;let b=o.width,v=o.height;w.length>0&&a===null&&(a=new Gn(b,v,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(b,v,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&h===null&&(h=new Xi(b,v),r===!0&&(h.format=qi,h.type=rr)),o.dispose(),o.depthTexture=S?h:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<w.length;C++){let A=w[C];A.setSize&&A.setSize(b,v),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(h)}},this.begin=function(M,b){if(m||M.toneMapping===Si&&w.length===0)return!1;if(_=b,b!==null){let v=b.width,S=b.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return y===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Si,!0},this.hasRenderPass=function(){return y},this.end=function(M,b){M.toneMapping=x,m=!0;let v=o,S=a;for(let C=0;C<w.length;C++){let A=w[C];A.enabled!==!1&&(A.render(M,S,v,b),A.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,d.defines={},yt.getTransfer(f)===Rt&&(d.defines.SRGB_TRANSFER="");let C=bM[g];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(_),M.render(u,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var z0=new Rn,H0=new Xi(1,1),G0=new zo(1),V0=new Do,W0=new Tl,X0=new ko,_0=[],y0=[],M0=new Float32Array(16),b0=new Float32Array(9),S0=new Float32Array(4);function jr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=_0[s];if(r===void 0&&(r=new Float32Array(s),_0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hc(n,e){let t=y0[e];t===void 0&&(t=new Int32Array(e),y0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function EM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function AM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function RM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;S0.set(i),n.uniformMatrix2fv(this.addr,!1,S0),jt(t,i)}}function CM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;b0.set(i),n.uniformMatrix3fv(this.addr,!1,b0),jt(t,i)}}function PM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;M0.set(i),n.uniformMatrix4fv(this.addr,!1,M0),jt(t,i)}}function IM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function LM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function DM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function NM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function OM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function FM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function kM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function Gc(n){return n.version===0&&(n.compareFunction=Yu,n.needsUpdate=!0),n}function BM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Gc(H0):r=z0,t.setTexture2D(e||r,s)}function zM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||W0,s)}function HM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Gc(G0):r=X0,t.setTextureCube(e||r,s)}function GM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||V0,s)}function VM(n){switch(n){case 5126:return wM;case 35664:return TM;case 35665:return EM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return IM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return NM;case 5125:return OM;case 36294:return UM;case 36295:return FM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(n,e){n.uniform1fv(this.addr,e)}function XM(n,e){let t=jr(e,this.size,2);n.uniform2fv(this.addr,t)}function YM(n,e){let t=jr(e,this.size,3);n.uniform3fv(this.addr,t)}function qM(n,e){let t=jr(e,this.size,4);n.uniform4fv(this.addr,t)}function $M(n,e){let t=jr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ZM(n,e){let t=jr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function KM(n,e){let t=jr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function JM(n,e){n.uniform1iv(this.addr,e)}function jM(n,e){n.uniform2iv(this.addr,e)}function QM(n,e){n.uniform3iv(this.addr,e)}function eb(n,e){n.uniform4iv(this.addr,e)}function tb(n,e){n.uniform1uiv(this.addr,e)}function nb(n,e){n.uniform2uiv(this.addr,e)}function ib(n,e){n.uniform3uiv(this.addr,e)}function sb(n,e){n.uniform4uiv(this.addr,e)}function rb(n,e,t){let i=this.cache,s=e.length,r=Hc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gc(H0):o=z0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ob(n,e,t){let i=this.cache,s=e.length,r=Hc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||W0,r[o])}function ab(n,e,t){let i=this.cache,s=e.length,r=Hc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Gc(G0):o=X0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function lb(n,e,t){let i=this.cache,s=e.length,r=Hc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||V0,r[o])}function cb(n){switch(n){case 5126:return WM;case 35664:return XM;case 35665:return YM;case 35666:return qM;case 35674:return $M;case 35675:return ZM;case 35676:return KM;case 5124:case 35670:return JM;case 35667:case 35671:return jM;case 35668:case 35672:return QM;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}var hd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=VM(t.type)}},ud=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cb(t.type)}},dd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ld=/(\w+)(\])?(\[|\.)?/g;function w0(n,e){n.seq.push(e),n.map[e.id]=e}function hb(n,e,t){let i=n.name,s=i.length;for(ld.lastIndex=0;;){let r=ld.exec(i),o=ld.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){w0(t,h===void 0?new hd(a,n,e):new ud(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new dd(a),w0(t,d)),t=d}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);hb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function T0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ub=37297,db=0;function fb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var E0=new at;function pb(n){yt._getMatrix(E0,yt.workingColorSpace,n);let e=`mat3( ${E0.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case Po:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function A0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fb(n.getShaderSource(e),a)}else return r}function mb(n,e){let t=pb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gb={[Cu]:"Linear",[Pu]:"Reinhard",[Iu]:"Cineon",[Lu]:"ACESFilmic",[Nu]:"AgX",[Ou]:"Neutral",[Du]:"Custom"};function xb(n,e){let t=gb[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new H;function vb(){yt.getLuminanceCoefficients(kc);let n=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function yb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ua(n){return n!==""}function R0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function C0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(n){return n.replace(bb,Sb)}function Sb(n,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fd(t)}var wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(n){return n.replace(wb,Tb)}function Tb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function I0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Eb={[na]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function Ab(n){return Eb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rb={[$r]:"ENVMAP_MODE_REFRACTION"};function Cb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Rb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pb={[Ru]:"ENVMAP_BLENDING_MULTIPLY",[Vp]:"ENVMAP_BLENDING_MIX",[Wp]:"ENVMAP_BLENDING_ADD"};function Ib(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[n.combine]||"ENVMAP_BLENDING_NONE"}function Lb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ab(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=Cb(t),d=Ib(t),u=_b(t),p=yb(r),f=s.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ua).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ua).join(`
`),m.length>0&&(m+=`
`)):(g=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),m=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?dt.tonemapping_pars_fragment:"",t.toneMapping!==Si?xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,mb("linearToOutputTexel",t.outputColorSpace),vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),o=fd(o),o=R0(o,t),o=C0(o,t),a=fd(a),a=R0(a,t),a=C0(a,t),o=P0(o),a=P0(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,w=x+m+a,y=T0(s,s.VERTEX_SHADER,_),M=T0(s,s.FRAGMENT_SHADER,w);s.attachShader(f,y),s.attachShader(f,M),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function b(A){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(f)||"",R=s.getShaderInfoLog(y)||"",D=s.getShaderInfoLog(M)||"",T=I.trim(),O=R.trim(),F=D.trim(),W=!0,j=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,y,M);else{let V=A0(s,y,"vertex"),Y=A0(s,M,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+T+`
`+V+`
`+Y)}else T!==""?rt("WebGLProgram: Program Info Log:",T):(O===""||F==="")&&(j=!1);j&&(A.diagnostics={runnable:W,programLog:T,vertexShader:{log:O,prefix:g},fragmentShader:{log:F,prefix:m}})}s.deleteShader(y),s.deleteShader(M),v=new Jr(s,f),S=Mb(s,f)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(f,ub)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=db++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=M,this}var Db=0,pd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new md(e),t.set(e,i)),i}},md=class{constructor(e){this.id=Db++,this.code=e,this.usedTimes=0}};function Nb(n){return n===vs||n===la||n===ca}function Ob(n,e,t,i,s,r){let o=new No,a=new pd,l=new Set,h=[],c=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,C,A,I,R){let D=A.fog,T=I.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,W=e.get(v.envMap||O,F),j=u[v.type],V=i.precision;v.precision!==null&&(V=i.getMaxPrecision(v.precision),V!==v.precision&&rt("WebGLProgram.getParameters:",v.precision,"not supported, using",V,"instead."));let Y=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,G=Y!==void 0?Y.length:0,he=0;T.morphAttributes.position!==void 0&&(he=1),T.morphAttributes.normal!==void 0&&(he=2),T.morphAttributes.color!==void 0&&(he=3);let ve,z,re,be;if(j){let Ue=Ti[j];ve=Ue.vertexShader,z=Ue.fragmentShader}else{ve=v.vertexShader,z=v.fragmentShader;let Ue=a.getVertexShaderStage(v),tt=a.getFragmentShaderStage(v);a.update(v,Ue,tt),re=Ue.id,be=tt.id}let xe=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),Ce=I.isInstancedMesh===!0,Ke=I.isBatchedMesh===!0,Be=!!v.map,Je=!!v.matcap,ke=!!W,U=ke&&W.isPMREMTexture===!0,q=!!v.aoMap,Q=!!v.lightMap,ae=!!v.bumpMap&&v.wireframe===!1,J=!!v.normalMap,_e=!!v.displacementMap,te=!!v.emissiveMap,me=!!v.metalnessMap,Te=!!v.roughnessMap,ze=v.anisotropy>0,B=v.clearcoat>0,ge=v.diffuseRoughness>0,Ae=v.dispersion>0,Ve=v.retroreflectivity>0,se=v.iridescence>0,Ze=v.sheen>0,Re=v.transmission>0,Pe=ze&&!!v.anisotropyMap,N=B&&!!v.clearcoatMap,E=B&&!!v.clearcoatNormalMap,Z=B&&!!v.clearcoatRoughnessMap,we=ge&&!!v.diffuseRoughnessMap,pe=se&&!!v.iridescenceMap,Ee=se&&!!v.iridescenceThicknessMap,Le=Ze&&!!v.sheenColorMap,de=Ze&&!!v.sheenRoughnessMap,fe=!!v.specularMap,Ne=!!v.specularColorMap,k=!!v.specularIntensityMap,ue=Re&&!!v.transmissionMap,le=Re&&!!v.thicknessMap,De=!!v.gradientMap,Ie=!!v.alphaMap,Me=v.alphaTest>0,Se=!!v.alphaHash,We=!!v.extensions,ye=Si;v.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(ye=n.toneMapping);let He=U?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Oe={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:ve,fragmentShader:z,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:V,batching:Ke,batchingColor:Ke&&I._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&I.instanceColor!==null,instancingMorph:Ce&&I.morphTexture!==null,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:Je,envMap:ke,envMapMode:ke&&W.mapping,envMapPMREM:U,envMapMaxLod:U?He.length-1:null,envMapSize:U?He[0].width:null,aoMap:q,lightMap:Q,bumpMap:ae,normalMap:J,displacementMap:_e,emissiveMap:te,normalMapObjectSpace:J&&v.normalMapType===qp,normalMapTangentSpace:J&&v.normalMapType===Vu,packedNormalMap:J&&v.normalMapType===Vu&&Nb(v.normalMap.format),metalnessMap:me,roughnessMap:Te,anisotropy:ze,anisotropyMap:Pe,clearcoat:B,clearcoatMap:N,clearcoatNormalMap:E,clearcoatRoughnessMap:Z,diffuseRoughness:ge,diffuseRoughnessMap:we,dispersion:Ae,retroreflection:Ve,iridescence:se,iridescenceMap:pe,iridescenceThicknessMap:Ee,sheen:Ze,sheenColorMap:Le,sheenRoughnessMap:de,specularMap:fe,specularColorMap:Ne,specularIntensityMap:k,transmission:Re,transmissionMap:ue,thicknessMap:le,gradientMap:De,opaque:v.transparent===!1&&v.blending===qr&&v.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:Se,combine:v.combine,mapUv:Be&&p(v.map.channel),aoMapUv:q&&p(v.aoMap.channel),lightMapUv:Q&&p(v.lightMap.channel),bumpMapUv:ae&&p(v.bumpMap.channel),normalMapUv:J&&p(v.normalMap.channel),displacementMapUv:_e&&p(v.displacementMap.channel),emissiveMapUv:te&&p(v.emissiveMap.channel),metalnessMapUv:me&&p(v.metalnessMap.channel),roughnessMapUv:Te&&p(v.roughnessMap.channel),anisotropyMapUv:Pe&&p(v.anisotropyMap.channel),clearcoatMapUv:N&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(v.sheenRoughnessMap.channel),specularMapUv:fe&&p(v.specularMap.channel),specularColorMapUv:Ne&&p(v.specularColorMap.channel),specularIntensityMapUv:k&&p(v.specularIntensityMap.channel),transmissionMapUv:ue&&p(v.transmissionMap.channel),thicknessMapUv:le&&p(v.thicknessMap.channel),alphaMapUv:Ie&&p(v.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(J||ze),vertexNormals:!!T.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!T.attributes.uv&&(Be||Ie),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||T.attributes.normal===void 0&&J===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:he,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.filter(Ue=>Ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&yt.getTransfer(v.map.colorSpace)===Rt,decodeVideoTextureEmissive:te&&v.emissiveMap.isVideoTexture===!0&&yt.getTransfer(v.emissiveMap.colorSpace)===Rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wn,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:We&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&v.extensions.multiDraw===!0||Ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function g(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(S,v),x(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=u[v.type],C;if(S){let A=Ti[S];C=d0.clone(A.uniforms)}else C=v.uniforms;return C}function w(v,S){let C=c.get(S);return C!==void 0?++C.usedTimes:(C=new Lb(n,S,v,s),h.push(C),c.set(S,C)),C}function y(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function b(){a.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:_,acquireProgram:w,releaseProgram:y,releaseShaderCache:M,programs:h,dispose:b}}function Ub(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Fb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function L0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function D0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,f,g,m,x){let _=n[e];return _===void 0?(_={id:u.id,object:u,geometry:p,material:f,materialVariant:o(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},n[e]=_):(_.id=u.id,_.object=u,_.geometry=p,_.material=f,_.materialVariant=o(u),_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=m,_.group=x),e++,_}function l(u,p,f,g,m,x,_){_.reversedDepth===!0&&(m=-m);let w=a(u,p,f,g,m,x);f.transmission>0?i.push(w):f.transparent===!0?s.push(w):t.push(w)}function h(u,p,f,g,m,x){let _=a(u,p,f,g,m,x);f.transmission>0?i.unshift(_):f.transparent===!0?s.unshift(_):t.unshift(_)}function c(u,p){t.length>1&&t.sort(u||Fb),i.length>1&&i.sort(p||L0),s.length>1&&s.sort(p||L0)}function d(){for(let u=e,p=n.length;u<p;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:d,sort:c}}function kb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new D0,n.set(i,[o])):s>=r.length?(o=new D0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new it};break;case"SpotLight":t={position:new H,direction:new H,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function zb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Hb=0;function Gb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vb(n){let e=new Bb,t=zb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);let s=new H,r=new gt,o=new gt;function a(h){let c=0,d=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,f=0,g=0,m=0,x=0,_=0,w=0,y=0,M=0,b=0,v=0,S=0,C=0,A=0;h.sort(Gb);for(let R=0,D=h.length;R<D;R++){let T=h[R],O=T.color,F=T.intensity,W=T.distance,j=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===vs?j=T.shadow.map.texture:j=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)c+=O.r*F,d+=O.g*F,u+=O.b*F;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],F);A++}else if(T.isSunLight){let V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Y=T.shadow,G=t.get(T);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[f]=G,i.sunShadowMap[f]=j;let he=Y.getViewportCount();for(let ve=0;ve<he;ve++)i.sunShadowMatrix[g+ve]=Y.getMatrix(ve),i.sunShadowCascade[g+ve]=Y._cascadeData[ve];g+=he,f++}i.sun[p]=V,p++}else if(T.isDirectionalLight){let V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Y=T.shadow,G=t.get(T);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=T.shadow.matrix,M++}i.directional[m]=V,m++}else if(T.isSpotLight){let V=e.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(O).multiplyScalar(F),V.distance=W,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[_]=V;let Y=T.shadow;if(T.map&&(i.spotLightMap[S]=T.map,S++,Y.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[_]=Y.matrix,T.castShadow){let G=t.get(T);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=j,v++}_++}else if(T.isRectAreaLight){let V=e.get(T);V.color.copy(O).multiplyScalar(F),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[w]=V,w++}else if(T.isPointLight){let V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){let Y=T.shadow,G=t.get(T);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[x]=G,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=T.shadow.matrix,b++}i.point[x]=V,x++}else if(T.isHemisphereLight){let V=e.get(T);V.skyColor.copy(T.color).multiplyScalar(F),V.groundColor.copy(T.groundColor).multiplyScalar(F),i.hemi[y]=V,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_FLOAT_1,i.rectAreaLTC2=qe.LTC_FLOAT_2):(i.rectAreaLTC1=qe.LTC_HALF_1,i.rectAreaLTC2=qe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==x||I.spotLength!==_||I.rectAreaLength!==w||I.hemiLength!==y||I.numSunShadows!==f||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==S||I.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=w,i.point.length=x,i.hemi.length=y,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,I.sunLength=p,I.directionalLength=m,I.pointLength=x,I.spotLength=_,I.rectAreaLength=w,I.hemiLength=y,I.numSunShadows=f,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=S,I.numLightProbes=A,i.version=Hb++)}function l(h,c){let d=0,u=0,p=0,f=0,g=0,m=0,x=c.matrixWorldInverse;for(let _=0,w=h.length;_<w;_++){let y=h[_];if(y.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),d++}else if(y.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),u++}else if(y.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(y.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),p++}else if(y.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function N0(n){let e=new Vb(n),t=[],i=[],s=[];function r(d){c.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function h(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function Wb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new N0(n),e.set(s,[a])):r>=o.length?(a=new N0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yb=`uniform sampler2D shadow_pass;
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
}`,qb=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],$b=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],O0=new gt,ha=new H,cd=new H;function Zb(n,e,t){let i=new Js,s=new Ge,r=new Ge,o=new Vt,a=new Ol,l=new Ul,h={},c=t.maxTextureSize,d={[xs]:Kt,[Kt]:xs,[Wn]:Wn},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Xb,fragmentShader:Yb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Ut;f.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ut(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let x=this.type;this.render=function(b,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===wp&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=na);let C=n.getRenderTarget(),A=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),R=n.state;R.setBlending(nr),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let D=x!==this.type;D&&v.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(O=>O.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,O=b.length;T<O;T++){let F=b[T],W=F.shadow;if(W===void 0){rt("WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let j=W.getFrameExtents();s.multiply(j),r.copy(W.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/j.y),s.y=r.y*j.y,W.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=V,W.map===null||D===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Yr){if(F.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gn(s.x,s.y,{format:vs,type:ui,minFilter:En,magFilter:En,generateMipmaps:!1}),W.map.texture.name=F.name+".shadowMap",W.map.depthTexture=new Xi(s.x,s.y,jn),W.map.depthTexture.name=F.name+".shadowMapDepth",W.map.depthTexture.format=Wi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=on,W.map.depthTexture.magFilter=on}else F.isPointLight?(W.map=new da(s.x),W.map.depthTexture=new zo(s.x,hi)):(W.map=new Gn(s.x,s.y),W.map.depthTexture=new Xi(s.x,s.y,hi)),W.map.depthTexture.name=F.name+".shadowMap",W.map.depthTexture.format=Wi,this.type===na?(W.map.depthTexture.compareFunction=V?Xu:Wu,W.map.depthTexture.minFilter=En,W.map.depthTexture.magFilter=En):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=on,W.map.depthTexture.magFilter=on);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Y=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();F.isPointLight!==!0&&W.updateMatrices(F,S);let G=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let he=0;he<Y;he++){let ve=W.getCamera(he);if(F.isPointLight){let z=W.camera,re=W.matrix,be=F.distance||z.far;be!==z.far&&(z.far=be,z.updateProjectionMatrix()),ha.setFromMatrixPosition(F.matrixWorld),z.position.copy(ha),cd.copy(z.position),cd.add(qb[he]),z.up.copy($b[he]),z.lookAt(cd),z.updateMatrixWorld(),re.makeTranslation(-ha.x,-ha.y,-ha.z),O0.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(O0,z.coordinateSystem,z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,he),n.clear();else{he===0&&(n.setRenderTarget(W.map),n.clear());let z=W.getViewport(he);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),R.viewport(o)}i=W.getFrustum(he),y(v,S,ve,F,G,this.type)}W.isPointLightShadow!==!0&&this.type===Yr&&_(W,S),W.needsUpdate=!1}x=this.type,m.needsUpdate=!1,n.setRenderTarget(C,A,I)};function _(b,v){let S=e.update(g);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Gn(s.x,s.y,{format:vs,type:ui}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(v,null,S,u,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(v,null,S,p,g,null)}function w(b,v,S,C){let A=null,I=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)A=I;else if(A=S.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let R=A.uuid,D=v.uuid,T=h[R];T===void 0&&(T={},h[R]=T);let O=T[D];O===void 0&&(O=A.clone(),T[D]=O,v.addEventListener("dispose",M)),A=O}if(A.visible=v.visible,A.wireframe=v.wireframe,C===Yr?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:d[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let R=n.properties.get(A);R.light=S}return A}function y(b,v,S,C,A,I){if(b.visible===!1)return;if(b.layers.test(A)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Yr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let T=e.update(b),O=b.material;if(Array.isArray(O)){let F=T.groups;for(let W=0,j=F.length;W<j;W++){let V=F[W],Y=O[V.materialIndex];if(Y&&Y.visible){let G=w(b,Y,C,I);b.onBeforeShadow(n,b,v,S,T,G,V),n.renderBufferDirect(S,null,T,G,b,V),b.onAfterShadow(n,b,v,S,T,G,V)}}}else if(O.visible){let F=w(b,O,C,I);b.onBeforeShadow(n,b,v,S,T,F,null),n.renderBufferDirect(S,null,T,F,b,null),b.onAfterShadow(n,b,v,S,T,F,null)}}let D=b.children;for(let T=0,O=D.length;T<O;T++)y(D[T],v,S,C,A,I)}function M(b){b.target.removeEventListener("dispose",M);for(let S in h){let C=h[S],A=b.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function Kb(n,e){function t(){let k=!1,ue=new Vt,le=null,De=new Vt(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!k&&(n.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,Me,Se,We,ye){ye===!0&&(Ie*=We,Me*=We,Se*=We),ue.set(Ie,Me,Se,We),De.equals(ue)===!1&&(n.clearColor(Ie,Me,Se,We),De.copy(ue))},reset:function(){k=!1,le=null,De.set(-1,0,0,0)}}}function i(){let k=!1,ue=!1,le=null,De=null,Ie=null;return{setReversed:function(Me){if(ue!==Me){let Se=e.get("EXT_clip_control");Me?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ue=Me;let We=Ie;Ie=null,this.setClear(We)}},getReversed:function(){return ue},setTest:function(Me){Me?ee(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Me){le!==Me&&!k&&(n.depthMask(Me),le=Me)},setFunc:function(Me){if(ue&&(Me=s0[Me]),De!==Me){switch(Me){case fl:n.depthFunc(n.NEVER);break;case pl:n.depthFunc(n.ALWAYS);break;case ml:n.depthFunc(n.LESS);break;case Or:n.depthFunc(n.LEQUAL);break;case gl:n.depthFunc(n.EQUAL);break;case xl:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Ie!==Me&&(Ie=Me,ue&&(Me=1-Me),n.clearDepth(Me))},reset:function(){k=!1,le=null,De=null,Ie=null,ue=!1}}}function s(){let k=!1,ue=null,le=null,De=null,Ie=null,Me=null,Se=null,We=null,ye=null;return{setTest:function(He){k||(He?ee(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(He){ue!==He&&!k&&(n.stencilMask(He),ue=He)},setFunc:function(He,Oe,Ue){(le!==He||De!==Oe||Ie!==Ue)&&(n.stencilFunc(He,Oe,Ue),le=He,De=Oe,Ie=Ue)},setOp:function(He,Oe,Ue){(Me!==He||Se!==Oe||We!==Ue)&&(n.stencilOp(He,Oe,Ue),Me=He,Se=Oe,We=Ue)},setLocked:function(He){k=He},setClear:function(He){ye!==He&&(n.clearStencil(He),ye=He)},reset:function(){k=!1,ue=null,le=null,De=null,Ie=null,Me=null,Se=null,We=null,ye=null}}}let r=new t,o=new i,a=new s,l={},h=new WeakMap,c={},d={},u={},p=new WeakMap,f=[],g=null,m=!1,x=null,_=null,w=null,y=null,M=null,b=null,v=null,S=new it(0,0,0),C=0,A=!1,I=null,R=null,D=null,T=null,O=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=j>=2);let Y=null,G={},he=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),z=new Vt().fromArray(he),re=new Vt().fromArray(ve);function be(k,ue,le,De){let Ie=new Uint8Array(4),Me=n.createTexture();n.bindTexture(k,Me),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<le;Se++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(ue+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Me}let xe={};xe[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Or),ae(!1),J(bu),ee(n.CULL_FACE),q(nr);function ee(k){c[k]!==!0&&(n.enable(k),c[k]=!0)}function Ce(k){c[k]!==!1&&(n.disable(k),c[k]=!1)}function Ke(k,ue){return u[k]!==ue?(n.bindFramebuffer(k,ue),u[k]=ue,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Be(k,ue){let le=f,De=!1;if(k){le=p.get(ue),le===void 0&&(le=[],p.set(ue,le));let Ie=k.textures;if(le.length!==Ie.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Se=Ie.length;Me<Se;Me++)le[Me]=n.COLOR_ATTACHMENT0+Me;le.length=Ie.length,De=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,De=!0);De&&n.drawBuffers(le)}function Je(k){return g!==k?(n.useProgram(k),g=k,!0):!1}let ke={[ir]:n.FUNC_ADD,[Ep]:n.FUNC_SUBTRACT,[Ap]:n.FUNC_REVERSE_SUBTRACT};ke[Rp]=n.MIN,ke[Cp]=n.MAX;let U={[Pp]:n.ZERO,[Ip]:n.ONE,[Lp]:n.SRC_COLOR,[Eu]:n.SRC_ALPHA,[kp]:n.SRC_ALPHA_SATURATE,[Up]:n.DST_COLOR,[Np]:n.DST_ALPHA,[Dp]:n.ONE_MINUS_SRC_COLOR,[Au]:n.ONE_MINUS_SRC_ALPHA,[Fp]:n.ONE_MINUS_DST_COLOR,[Op]:n.ONE_MINUS_DST_ALPHA,[Bp]:n.CONSTANT_COLOR,[zp]:n.ONE_MINUS_CONSTANT_COLOR,[Hp]:n.CONSTANT_ALPHA,[Gp]:n.ONE_MINUS_CONSTANT_ALPHA};function q(k,ue,le,De,Ie,Me,Se,We,ye,He){if(k===nr){m===!0&&(Ce(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),k!==Tp){if(k!==x||He!==A){if((_!==ir||M!==ir)&&(n.blendEquation(n.FUNC_ADD),_=ir,M=ir),He)switch(k){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Su:n.blendFunc(n.ONE,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",k);break}else switch(k){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Su:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wu:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",k);break}w=null,y=null,b=null,v=null,S.set(0,0,0),C=0,x=k,A=He}return}Ie=Ie||ue,Me=Me||le,Se=Se||De,(ue!==_||Ie!==M)&&(n.blendEquationSeparate(ke[ue],ke[Ie]),_=ue,M=Ie),(le!==w||De!==y||Me!==b||Se!==v)&&(n.blendFuncSeparate(U[le],U[De],U[Me],U[Se]),w=le,y=De,b=Me,v=Se),(We.equals(S)===!1||ye!==C)&&(n.blendColor(We.r,We.g,We.b,ye),S.copy(We),C=ye),x=k,A=!1}function Q(k,ue){k.side===Wn?Ce(n.CULL_FACE):ee(n.CULL_FACE);let le=k.side===Kt;ue&&(le=!le),ae(le),k.blending===qr&&k.transparent===!1?q(nr):q(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let De=k.stencilWrite;a.setTest(De),De&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(k){I!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),I=k)}function J(k){k!==bp?(ee(n.CULL_FACE),k!==R&&(k===bu?n.cullFace(n.BACK):k===Sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),R=k}function _e(k){k!==D&&(W&&n.lineWidth(k),D=k)}function te(k,ue,le){k?(ee(n.POLYGON_OFFSET_FILL),(T!==ue||O!==le)&&(T=ue,O=le,o.getReversed()&&(ue=-ue,le=-le),n.polygonOffset(ue,le))):Ce(n.POLYGON_OFFSET_FILL)}function me(k){k?ee(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Te(k){k===void 0&&(k=n.TEXTURE0+F-1),Y!==k&&(n.activeTexture(k),Y=k)}function ze(k,ue,le){le===void 0&&(Y===null?le=n.TEXTURE0+F-1:le=Y);let De=G[le];De===void 0&&(De={type:void 0,texture:void 0},G[le]=De),(De.type!==k||De.texture!==ue)&&(Y!==le&&(n.activeTexture(le),Y=le),n.bindTexture(k,ue||xe[k]),De.type=k,De.texture=ue)}function B(){let k=G[Y];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Ae(){try{n.compressedTexImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function Ve(){try{n.texSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function se(){try{n.texSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function Ze(){try{n.compressedTexSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function Pe(){try{n.texStorage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function N(){try{n.texStorage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function E(){try{n.texImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Z(){try{n.texImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function we(k){return d[k]!==void 0?d[k]:n.getParameter(k)}function pe(k,ue){d[k]!==ue&&(n.pixelStorei(k,ue),d[k]=ue)}function Ee(k){z.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),z.copy(k))}function Le(k){re.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),re.copy(k))}function de(k,ue){let le=h.get(ue);le===void 0&&(le=new WeakMap,h.set(ue,le));let De=le.get(k);De===void 0&&(De=n.getUniformBlockIndex(ue,k.name),n.uniformBlockBinding(ue,De,De),le.set(k,De))}function fe(k,ue,le){let Ie=h.get(ue).get(k);l[Ie]!==le&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ie,le),l[Ie]=le)}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},Y=null,G={},u={},l={},p=new WeakMap,f=[],g=null,m=!1,x=null,_=null,w=null,y=null,M=null,b=null,v=null,S=new it(0,0,0),C=0,A=!1,I=null,R=null,D=null,T=null,O=null,z.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:Ce,bindFramebuffer:Ke,drawBuffers:Be,useProgram:Je,setBlending:q,setMaterial:Q,setFlipSided:ae,setCullFace:J,setLineWidth:_e,setPolygonOffset:te,setScissorTest:me,activeTexture:Te,bindTexture:ze,unbindTexture:B,compressedTexImage2D:ge,compressedTexImage3D:Ae,texImage2D:E,texImage3D:Z,pixelStorei:pe,getParameter:we,updateUBOMapping:de,uniformBlockBinding:fe,texStorage2D:Pe,texStorage3D:N,texSubImage2D:Ve,texSubImage3D:se,compressedTexSubImage2D:Ze,compressedTexSubImage3D:Re,scissor:Ee,viewport:Le,reset:Ne}}function Jb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,c=new WeakMap,d=new Set,u,p=new WeakMap,f=new Set,g=new FinalizationRegistry(N=>f.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,E){return m?new OffscreenCanvas(N,E):Lo("canvas")}function _(N,E,Z){let we=1,pe=Pe(N);if((pe.width>Z||pe.height>Z)&&(we=Z/Math.max(pe.width,pe.height)),we<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Ee=Math.floor(we*pe.width),Le=Math.floor(we*pe.height);u===void 0&&(u=x(Ee,Le));let de=E?x(Ee,Le):u;return de.width=Ee,de.height=Le,de.getContext("2d").drawImage(N,0,0,Ee,Le),rt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ee+"x"+Le+")."),de}else return"data"in N&&rt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function w(N){return N.generateMipmaps}function y(N){n.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(N,E,Z,we,pe,Ee=!1){if(N!==null){if(n[N]!==void 0)return n[N];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Le;we&&(Le=e.get("EXT_texture_norm16"),Le||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===n.RED&&(Z===n.FLOAT&&(de=n.R32F),Z===n.HALF_FLOAT&&(de=n.R16F),Z===n.UNSIGNED_BYTE&&(de=n.R8),Z===n.UNSIGNED_SHORT&&Le&&(de=Le.R16_EXT),Z===n.SHORT&&Le&&(de=Le.R16_SNORM_EXT)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.R8UI),Z===n.UNSIGNED_SHORT&&(de=n.R16UI),Z===n.UNSIGNED_INT&&(de=n.R32UI),Z===n.BYTE&&(de=n.R8I),Z===n.SHORT&&(de=n.R16I),Z===n.INT&&(de=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(de=n.RG32F),Z===n.HALF_FLOAT&&(de=n.RG16F),Z===n.UNSIGNED_BYTE&&(de=n.RG8),Z===n.UNSIGNED_SHORT&&Le&&(de=Le.RG16_EXT),Z===n.SHORT&&Le&&(de=Le.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RG8UI),Z===n.UNSIGNED_SHORT&&(de=n.RG16UI),Z===n.UNSIGNED_INT&&(de=n.RG32UI),Z===n.BYTE&&(de=n.RG8I),Z===n.SHORT&&(de=n.RG16I),Z===n.INT&&(de=n.RG32I)),E===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(de=n.RGB16UI),Z===n.UNSIGNED_INT&&(de=n.RGB32UI),Z===n.BYTE&&(de=n.RGB8I),Z===n.SHORT&&(de=n.RGB16I),Z===n.INT&&(de=n.RGB32I)),E===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),Z===n.UNSIGNED_INT&&(de=n.RGBA32UI),Z===n.BYTE&&(de=n.RGBA8I),Z===n.SHORT&&(de=n.RGBA16I),Z===n.INT&&(de=n.RGBA32I)),E===n.RGB&&(Z===n.UNSIGNED_SHORT&&Le&&(de=Le.RGB16_EXT),Z===n.SHORT&&Le&&(de=Le.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),E===n.RGBA){let fe=Ee?Po:yt.getTransfer(pe);Z===n.FLOAT&&(de=n.RGBA32F),Z===n.HALF_FLOAT&&(de=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(de=fe===Rt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Le&&(de=Le.RGBA16_EXT),Z===n.SHORT&&Le&&(de=Le.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function v(N,E){let Z;return N?E===null||E===hi||E===rr?Z=n.DEPTH24_STENCIL8:E===jn?Z=n.DEPTH32F_STENCIL8:E===Zr&&(Z=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hi||E===rr?Z=n.DEPTH_COMPONENT24:E===jn?Z=n.DEPTH_COMPONENT32F:E===Zr&&(Z=n.DEPTH_COMPONENT16),Z}function S(N,E){return w(N)===!0||N.isFramebufferTexture&&N.minFilter!==on&&N.minFilter!==En?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function C(N){let E=new WeakRef(N);i.get(N).__ref=E,f.add(E),g.register(N,E,E)}function A(N){let E=i.get(N).__ref;E!==void 0&&(f.delete(E),g.unregister(E))}function I(N){D(N.target)}function R(N){T(N.target)}function D(N){N.removeEventListener("dispose",I),A(N),F(N),N.isVideoTexture&&c.delete(N),N.isHTMLTexture&&d.delete(N)}function T(N){N.removeEventListener("dispose",R),A(N),j(N)}function O(){for(let N of f){let E=N.deref();E!==void 0&&(E.isRenderTarget===!0?T(E):D(E))}f.clear(),d.clear()}function F(N){let E=i.get(N);if(E.__webglInit===void 0)return;let Z=N.source,we=p.get(Z);if(we){let pe=we[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&W(N),Object.keys(we).length===0&&p.delete(Z)}i.remove(N)}function W(N){let E=i.get(N);n.deleteTexture(E.__webglTexture);let Z=N.source,we=p.get(Z);delete we[E.__cacheKey],o.memory.textures--}function j(N){let E=i.get(N);E.__depthDisposeCallback&&E.__depthDisposeCallback();let Z=N.depthTexture;if(Z&&Z.renderTarget===N&&D(Z),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let Ee=0;Ee<E.__webglFramebuffer[pe].length;Ee++)n.deleteFramebuffer(E.__webglFramebuffer[pe][Ee]);else n.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)n.deleteFramebuffer(E.__webglFramebuffer[pe]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let we=N.textures;for(let pe=0,Ee=we.length;pe<Ee;pe++){let Le=i.get(we[pe]);Le.__webglTexture&&(n.deleteTexture(Le.__webglTexture),o.memory.textures--),i.remove(we[pe])}i.remove(N)}let V=0;function Y(){V=0}function G(){return V}function he(N){V=N}function ve(){let N=V;return N>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,N}function z(N){let E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.mipmapsAutoUpdate),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function re(N,E){let Z=i.get(N);if(N.isVideoTexture&&Ze(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){let we=N.image;if(we===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,N,E);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function be(N,E){let Z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Q(Z,N,E);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function xe(N,E){let Z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Q(Z,N,E);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function ee(N,E){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){ae(Z,N,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}let Ce={[yl]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},Ke={[on]:n.NEAREST,[Xp]:n.NEAREST_MIPMAP_NEAREST,[ia]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[jl]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Be={[Zp]:n.NEVER,[Yu]:n.ALWAYS,[Kp]:n.LESS,[Wu]:n.LEQUAL,[Jp]:n.EQUAL,[Xu]:n.GEQUAL,[jp]:n.GREATER,[Qp]:n.NOTEQUAL};function Je(N,E){if(E.type===jn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===En||E.magFilter===jl||E.magFilter===ia||E.magFilter===Yi||E.minFilter===En||E.minFilter===jl||E.minFilter===ia||E.minFilter===Yi)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Ce[E.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Ce[E.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Ce[E.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Ke[E.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Ke[E.minFilter]),E.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===on||E.minFilter!==ia&&E.minFilter!==Yi||E.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ke(N,E){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I),C(E));let we=E.source,pe=p.get(we);pe===void 0&&(pe={},p.set(we,pe));let Ee=z(E);if(Ee!==N.__cacheKey){pe[Ee]===void 0&&(pe[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),pe[Ee].usedTimes++;let Le=pe[N.__cacheKey];Le!==void 0&&(pe[N.__cacheKey].usedTimes--,Le.usedTimes===0&&W(E)),N.__cacheKey=Ee,N.__webglTexture=pe[Ee].texture}return Z}function U(N,E,Z){return Math.floor(Math.floor(N/Z)/E)}function q(N,E,Z,we){let Ee=N.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Z,we,E.data);else{Ee.sort((k,ue)=>k.start-ue.start);let Le=0;for(let k=1;k<Ee.length;k++){let ue=Ee[Le],le=Ee[k],De=ue.start+ue.count,Ie=U(le.start,E.width,4),Me=U(ue.start,E.width,4);le.start<=De+1&&Ie===Me&&U(le.start+le.count-1,E.width,4)===Ie?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++Le,Ee[Le]=le)}Ee.length=Le+1;let de=t.getParameter(n.UNPACK_ROW_LENGTH),fe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ne=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let k=0,ue=Ee.length;k<ue;k++){let le=Ee[k],De=Math.floor(le.start/4),Ie=Math.ceil(le.count/4),Me=De%E.width,Se=Math.floor(De/E.width),We=Ie,ye=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se),t.texSubImage2D(n.TEXTURE_2D,0,Me,Se,We,ye,Z,we,E.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function Q(N,E,Z){let we=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(we=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(we=n.TEXTURE_3D);let pe=ke(N,E),Ee=E.source;t.bindTexture(we,N.__webglTexture,n.TEXTURE0+Z);let Le=i.get(Ee);if(Ee.version!==Le.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ye=yt.getPrimaries(yt.workingColorSpace),He=E.colorSpace===$i?null:yt.getPrimaries(E.colorSpace),Oe=E.colorSpace===$i||ye===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let fe=_(E.image,!1,s.maxTextureSize);fe=Re(E,fe);let Ne=r.convert(E.format,E.colorSpace),k=r.convert(E.type),ue=b(E.internalFormat,Ne,k,E.normalized,E.colorSpace,E.isVideoTexture);Je(we,E);let le,De=E.mipmaps,Ie=E.isVideoTexture!==!0,Me=Le.__version===void 0||pe===!0,Se=Ee.dataReady,We=S(E,fe);if(E.isDepthTexture)ue=v(E.format===qi,E.type),Me&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,ue,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,ue,fe.width,fe.height,0,Ne,k,null));else if(E.isDataTexture)if(De.length>0){Ie&&Me&&t.texStorage2D(n.TEXTURE_2D,We,ue,De[0].width,De[0].height);for(let ye=0,He=De.length;ye<He;ye++)le=De[ye],Ie?Se&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,le.width,le.height,Ne,k,le.data):t.texImage2D(n.TEXTURE_2D,ye,ue,le.width,le.height,0,Ne,k,le.data);E.generateMipmaps=!1}else Ie?(Me&&t.texStorage2D(n.TEXTURE_2D,We,ue,fe.width,fe.height),Se&&q(E,fe,Ne,k)):t.texImage2D(n.TEXTURE_2D,0,ue,fe.width,fe.height,0,Ne,k,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,ue,De[0].width,De[0].height,fe.depth);for(let ye=0,He=De.length;ye<He;ye++)if(le=De[ye],E.format!==di)if(Ne!==null)if(Ie){if(Se)if(E.layerUpdates.size>0){let Oe=nd(le.width,le.height,E.format,E.type);for(let Ue of E.layerUpdates){let tt=le.data.subarray(Ue*Oe/le.data.BYTES_PER_ELEMENT,(Ue+1)*Oe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,Ue,le.width,le.height,1,Ne,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,le.width,le.height,fe.depth,Ne,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,ue,le.width,le.height,fe.depth,0,le.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,le.width,le.height,fe.depth,Ne,k,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,ue,le.width,le.height,fe.depth,0,Ne,k,le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ie&&Me&&t.texStorage2D(n.TEXTURE_2D,We,ue,De[0].width,De[0].height);for(let ye=0,He=De.length;ye<He;ye++)le=De[ye],E.format!==di?Ne!==null?Ie?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,le.width,le.height,Ne,le.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,ue,le.width,le.height,0,le.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?Se&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,le.width,le.height,Ne,k,le.data):t.texImage2D(n.TEXTURE_2D,ye,ue,le.width,le.height,0,Ne,k,le.data)}else if(E.isDataArrayTexture)if(Ie){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,ue,fe.width,fe.height,fe.depth),Se)if(E.layerUpdates.size>0){let ye=nd(fe.width,fe.height,E.format,E.type);for(let He of E.layerUpdates){let Oe=fe.data.subarray(He*ye/fe.data.BYTES_PER_ELEMENT,(He+1)*ye/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,He,fe.width,fe.height,1,Ne,k,Oe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ne,k,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,fe.width,fe.height,fe.depth,0,Ne,k,fe.data);else if(E.isData3DTexture)Ie?(Me&&t.texStorage3D(n.TEXTURE_3D,We,ue,fe.width,fe.height,fe.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ne,k,fe.data)):t.texImage3D(n.TEXTURE_3D,0,ue,fe.width,fe.height,fe.depth,0,Ne,k,fe.data);else if(E.isFramebufferTexture){if(Me)if(Ie)t.texStorage2D(n.TEXTURE_2D,We,ue,fe.width,fe.height);else{let ye=fe.width,He=fe.height;for(let Oe=0;Oe<We;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,ue,ye,He,0,Ne,k,null),ye>>=1,He>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let ye=n.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),fe.parentNode!==ye){ye.appendChild(fe),d.add(E),ye.onpaint=He=>{let Oe=He.changedElements;for(let Ue of d)Oe.includes(Ue.image)&&(Ue.needsUpdate=!0)},ye.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,fe);else{let Oe=n.RGBA,Ue=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Oe,Ue,tt,fe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ie&&Me){let ye=Pe(De[0]);t.texStorage2D(n.TEXTURE_2D,We,ue,ye.width,ye.height)}for(let ye=0,He=De.length;ye<He;ye++)le=De[ye],Ie?Se&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ne,k,le):t.texImage2D(n.TEXTURE_2D,ye,ue,Ne,k,le);E.generateMipmaps=!1}else if(Ie){if(Me){let ye=Pe(fe);t.texStorage2D(n.TEXTURE_2D,We,ue,ye.width,ye.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,k,fe)}else t.texImage2D(n.TEXTURE_2D,0,ue,Ne,k,fe);w(E)&&E.mipmapsAutoUpdate===!0&&y(we),Le.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ae(N,E,Z){if(E.image.length!==6)return;let we=ke(N,E),pe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Z);let Ee=i.get(pe);if(pe.version!==Ee.__version||we===!0){t.activeTexture(n.TEXTURE0+Z);let Le=yt.getPrimaries(yt.workingColorSpace),de=E.colorSpace===$i?null:yt.getPrimaries(E.colorSpace),fe=E.colorSpace===$i||Le===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let Ue=0;Ue<6;Ue++)!Ne&&!k?ue[Ue]=_(E.image[Ue],!0,s.maxCubemapSize):ue[Ue]=k?E.image[Ue].image:E.image[Ue],ue[Ue]=Re(E,ue[Ue]);let le=ue[0],De=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),Me=b(E.internalFormat,De,Ie,E.normalized,E.colorSpace),Se=E.isVideoTexture!==!0,We=Ee.__version===void 0||we===!0,ye=pe.dataReady,He=S(E,le);Je(n.TEXTURE_CUBE_MAP,E);let Oe;if(E.isDepthTexture){if(Me=v(E.format===qi,E.type),We)if(Se)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Me,le.width,le.height);else for(let Ue=0;Ue<6;Ue++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Me,le.width,le.height,0,De,Ie,null)}else if(Ne){Se&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,He,Me,le.width,le.height);for(let Ue=0;Ue<6;Ue++){Oe=ue[Ue].mipmaps;for(let tt=0;tt<Oe.length;tt++){let ct=Oe[tt];E.format!==di?De!==null?Se?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt,0,0,ct.width,ct.height,De,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt,Me,ct.width,ct.height,0,ct.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt,0,0,ct.width,ct.height,De,Ie,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt,Me,ct.width,ct.height,0,De,Ie,ct.data)}}}else{if(Oe=E.mipmaps,Se&&We){Oe.length>0&&He++;let Ue=Pe(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,He,Me,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(k){Se?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,ue[Ue].width,ue[Ue].height,De,Ie,ue[Ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Me,ue[Ue].width,ue[Ue].height,0,De,Ie,ue[Ue].data);for(let tt=0;tt<Oe.length;tt++){let Pt=Oe[tt].image[Ue].image;Se?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt+1,0,0,Pt.width,Pt.height,De,Ie,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt+1,Me,Pt.width,Pt.height,0,De,Ie,Pt.data)}}else{Se?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,De,Ie,ue[Ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Me,De,Ie,ue[Ue]);for(let tt=0;tt<Oe.length;tt++){let ct=Oe[tt];Se?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt+1,0,0,De,Ie,ct.image[Ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt+1,Me,De,Ie,ct.image[Ue])}}}w(E)&&E.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),Ee.__version=pe.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function J(N,E,Z,we,pe,Ee){let Le=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),fe=b(Z.internalFormat,Le,de,Z.normalized,Z.colorSpace),Ne=i.get(E),k=i.get(Z);if(k.__renderTarget=E,!Ne.__hasExternalTextures){let ue=Math.max(1,E.width>>Ee),le=Math.max(1,E.height>>Ee);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ee,fe,ue,le,E.depth,0,Le,de,null):t.texImage2D(pe,Ee,fe,ue,le,0,Le,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),se(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,pe,k.__webglTexture,0,Ve(E)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,we,pe,k.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(N,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,N),E.depthBuffer){let we=E.depthTexture,pe=we&&we.isDepthTexture?we.type:null,Ee=v(E.stencilBuffer,pe),Le=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;se(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(E),Ee,E.width,E.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(E),Ee,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,N)}else{let we=E.textures;for(let pe=0;pe<we.length;pe++){let Ee=we[pe],Le=r.convert(Ee.format,Ee.colorSpace),de=r.convert(Ee.type),fe=b(Ee.internalFormat,Le,de,Ee.normalized,Ee.colorSpace);se(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(E),fe,E.width,E.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(E),fe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function te(N,E,Z){let we=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=i.get(E.depthTexture);pe.__renderTarget=E;let Ee=we?E.depthTexture.image[0]:E.depthTexture.image;(!pe.__webglTexture||Ee.width!==E.width||Ee.height!==E.height)&&(Ee.width=E.width,Ee.height=E.height,E.depthTexture.needsUpdate=!0),we?ee(E.depthTexture,0):re(E.depthTexture,0);let Le=pe.__webglTexture,de=Ve(E),fe=we?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,Ne=E.depthTexture.format===qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Wi)se(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ne,fe,Le,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,Ne,fe,Le,0);else if(E.depthTexture.format===qi)se(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ne,fe,Le,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,Ne,fe,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(N){let E=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){let we=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),we){let pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,we.removeEventListener("dispose",pe)};we.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=we}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let we=0;we<6;we++)te(E.__webglFramebuffer[we],N,we);else N.texture.mipmaps.length>0?te(E.__webglFramebuffer[0],N,0):te(E.__webglFramebuffer,N,0);else if(Z){E.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[we]),E.__webglDepthbuffer[we]===void 0)E.__webglDepthbuffer[we]=n.createRenderbuffer(),_e(E.__webglDepthbuffer[we],N,!1);else{let pe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[we];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),_e(E.__webglDepthbuffer,N,!1);else{let pe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(N,E,Z){let we=i.get(N);E!==void 0&&J(we.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&me(N)}function ze(N){let E=N.texture,Z=i.get(N),we=i.get(E);N.addEventListener("dispose",R),C(N);let pe=N.textures,Ee=N.isWebGLCubeRenderTarget===!0,Le=pe.length>1;if(Le||(we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture()),we.__version=E.version,o.memory.textures++),Ee){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps.length>0){Z.__webglFramebuffer[de]=[];for(let fe=0;fe<E.mipmaps.length;fe++)Z.__webglFramebuffer[de][fe]=n.createFramebuffer()}else Z.__webglFramebuffer[de]=n.createFramebuffer()}else{if(E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)Z.__webglFramebuffer[de]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Le)for(let de=0,fe=pe.length;de<fe;de++){let Ne=i.get(pe[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&se(N)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let de=0;de<pe.length;de++){let fe=pe[de];Z.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);let Ne=r.convert(fe.format,fe.colorSpace),k=r.convert(fe.type),ue=b(fe.internalFormat,Ne,k,fe.normalized,fe.colorSpace,N.isXRRenderTarget===!0),le=Ve(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Z.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,we.__webglTexture),Je(n.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)J(Z.__webglFramebuffer[de][fe],N,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,fe);else J(Z.__webglFramebuffer[de],N,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);w(E)?y(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Le){for(let de=0,fe=pe.length;de<fe;de++){let Ne=pe[de],k=i.get(Ne),ue=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ue=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,k.__webglTexture),Je(ue,Ne),J(Z.__webglFramebuffer,N,Ne,n.COLOR_ATTACHMENT0+de,ue,0),w(Ne)&&y(ue)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,we.__webglTexture),Je(de,E),E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)J(Z.__webglFramebuffer[fe],N,E,n.COLOR_ATTACHMENT0,de,fe);else J(Z.__webglFramebuffer,N,E,n.COLOR_ATTACHMENT0,de,0);w(E)?y(de):E.mipmaps.length>0&&n.texParameteri(de,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&me(N)}function B(N){let E=N.textures;for(let Z=0,we=E.length;Z<we;Z++){let pe=E[Z];if(w(pe)&&pe.mipmapsAutoUpdate===!0){let Ee=M(N),Le=i.get(pe).__webglTexture;t.bindTexture(Ee,Le),y(Ee),t.unbindTexture()}}}let ge=[];function Ae(N){if(N.samples>0){if(se(N)===!1){let E=N.textures,Z=N.width,we=N.height,pe=n.COLOR_BUFFER_BIT,Ee=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(N),de=E.length>1;if(de)for(let Ne=0;Ne<E.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);let k=i.get(E[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,k,0)}n.blitFramebuffer(0,0,Z,we,0,0,Z,we,pe,n.NEAREST),l===!0&&(ge.length=0,ge.push(n.COLOR_ATTACHMENT0+Ne),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&ge.push(Ee),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ne=0;Ne<E.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);let k=i.get(E[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,k,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let E=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ve(N){return Math.min(s.maxSamples,N.samples)}function se(N){let E=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(N){let E=o.render.frame;c.get(N)!==E&&(c.set(N,E),N.update())}function Re(N,E){let Z=N.colorSpace,we=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Co&&Z!==$i&&(yt.getTransfer(Z)===Rt?(we!==di||pe!==Xn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",Z)),E}function Pe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ve,this.resetTextureUnits=Y,this.getTextureUnits=G,this.setTextureUnits=he,this.setTexture2D=re,this.setTexture2DArray=be,this.setTexture3D=xe,this.setTextureCube=ee,this.rebindTextures=Te,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=J,this.useMultisampledRTT=se,this.dispose=O}function jb(n,e){function t(i,s=$i){let r,o=yt.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fu)return n.BYTE;if(i===ku)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===Ql)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===ui)return n.HALF_FLOAT;if(i===Hu)return n.ALPHA;if(i===Gu)return n.RGB;if(i===di)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===nc)return n.RED;if(i===ic)return n.RED_INTEGER;if(i===vs)return n.RG;if(i===sc)return n.RG_INTEGER;if(i===rc)return n.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===uc||i===dc||i===fc||i===pc||i===la||i===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hc||i===uc)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fc)return r.COMPRESSED_R11_EAC;if(i===pc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===la)return r.COMPRESSED_RG11_EAC;if(i===mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gc||i===xc||i===vc||i===_c||i===yc||i===Mc||i===bc||i===Sc||i===wc||i===Tc||i===Ec||i===Ac||i===Rc||i===Cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_c)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===Ic||i===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pc)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dc||i===Nc||i===ca||i===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eS=`
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

}`,gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mn({vertexShader:Qb,fragmentShader:eS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xd=class extends yi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,p=null,f=null,g=typeof XRWebGLBinding<"u",m=new gd,x={},_=t.getContextAttributes(),w=null,y=null,M=[],b=[],v=new Ge,S=null,C=null,A=new dn;A.viewport=new Vt;let I=new dn;I.viewport=new Vt;let R=[A,I],D=new $l,T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let re=M[z];return re===void 0&&(re=new Br,M[z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(z){let re=M[z];return re===void 0&&(re=new Br,M[z]=re),re.getGripSpace()},this.getHand=function(z){let re=M[z];return re===void 0&&(re=new Br,M[z]=re),re.getHandSpace()};function F(z){let re=b.indexOf(z.inputSource);if(re===-1)return;let be=M[re];be!==void 0&&(be.update(z.inputSource,z.frame,h||o),be.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let z=0;z<M.length;z++){let re=b[z];re!==null&&(b[z]=null,M[z].disconnect(re))}T=null,O=null,m.reset();for(let z in x)delete x[z];if(e.setRenderTarget(w),p=null,u=null,d=null,s=null,y=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),C!==null){let z=C.camera;z.fov=C.fov,z.zoom=C.zoom,z.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(z){h=z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,xe=null,ee=null;_.depth&&(ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=_.stencil?qi:Wi,xe=_.stencil?rr:hi);let Ce={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Gn(u.textureWidth,u.textureHeight,{format:di,type:Xn,depthTexture:new Xi(u.textureWidth,u.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Gn(p.framebufferWidth,p.framebufferHeight,{format:di,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(z){for(let re=0;re<z.removed.length;re++){let be=z.removed[re],xe=b.indexOf(be);xe>=0&&(b[xe]=null,M[xe].disconnect(be))}for(let re=0;re<z.added.length;re++){let be=z.added[re],xe=b.indexOf(be);if(xe===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=b.length){b.push(be),xe=Ce;break}else if(b[Ce]===null){b[Ce]=be,xe=Ce;break}if(xe===-1)break}let ee=M[xe];ee&&ee.connect(be)}}function V(z,re){re===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(re.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let re=z.near,be=z.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(be=m.depthFar)),D.near=I.near=A.near=re,D.far=I.far=A.far=be,(T!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),T=D.near,O=D.far),D.layers.mask=z.layers.mask|6,A.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let xe=z.parent,ee=D.cameras;V(D,xe);for(let Ce=0;Ce<ee.length;Ce++)V(ee[Ce],xe);D.projectionMatrix.copy(A.projectionMatrix),D.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&z.isPerspectiveCamera&&(C={camera:z,fov:z.fov,zoom:z.zoom}),Y(z,D,xe)};function Y(z,re,be){be===null?z.matrix.copy(re.matrixWorld):(z.matrix.copy(be.matrixWorld),z.matrix.invert(),z.matrix.multiply(re.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(re.projectionMatrix),z.projectionMatrixInverse.copy(re.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Fr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(z){return x[z]};let G=null;function he(z,re){if(c=re.getViewerPose(h||o),f=re,c!==null){let be=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let xe=!1;be.length!==D.cameras.length&&(D.cameras.length=0,xe=!0);for(let Be=0;Be<be.length;Be++){let Je=be[Be],ke=null;if(p!==null)ke=p.getViewport(Je);else{let q=d.getViewSubImage(u,Je);ke=q.viewport,Be===0&&(e.setRenderTargetTextures(y,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(y))}let U=R[Be];U===void 0&&(U=new dn,U.layers.enable(Be),U.viewport=new Vt,R[Be]=U),U.matrix.fromArray(Je.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Je.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ke.x,ke.y,ke.width,ke.height),Be===0&&(D.matrix.copy(U.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),xe===!0&&D.cameras.push(U)}let ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Be=d.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,s.renderState)}if(ee&&ee.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<be.length;Be++){let Je=be[Be].camera;if(Je){let ke=x[Je];ke||(ke=new Ho,x[Je]=ke);let U=d.getCameraImage(Je);ke.sourceTexture=U}}}}for(let be=0;be<M.length;be++){let xe=b[be],ee=M[be];xe!==null&&ee!==void 0&&ee.update(xe,re,h||o)}G&&G(z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),f=null}let ve=new U0;ve.setAnimationLoop(he),this.setAnimationLoop=function(z){G=z},this.dispose=function(){}}},tS=new gt,Y0=new at;Y0.set(-1,0,0,0,1,0,0,0,1);function nS(n,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,Qu(n)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,_,w,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),d(m,x)):x.isMeshPhongMaterial?(r(m,x),c(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),u(m,x),x.isMeshPhysicalMaterial&&p(m,x,y)):x.isMeshMatcapMaterial?(r(m,x),f(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,_,w):x.isSpriteMaterial?h(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===Kt&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===Kt&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let _=e.get(x),w=_.envMap,y=_.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(tS.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Y0),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,_,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*_,m.scale.value=w*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function d(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function u(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function p(m,x,_){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kt&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let _=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iS(n,e,t,i){let s={},r={};function o(_,w){let y=w.program;i.uniformBlockBinding(_,y,s[_.id])}function a(_,w){let y=s[_.id];y===void 0&&(f(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",m));let M=w.program;i.updateUBOMapping(_,M);let b=e.render.frame;r[_.id]!==b&&(h(_),r[_.id]=b)}function l(_){let w=n.createBuffer(),y=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,y,M),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function h(_){let w=s[_.id],y=_.uniforms,M=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let b=0,v=y.length;b<v;b++){let S=y[b];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)c(S[C],b,C,M);else c(S,b,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(_,w,y,M){if(u(_,w,y,M)===!0){let b=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let C=0;C<v.length;C++){let A=v[C],I=g(A,!0);d(A,_.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,_.__data)}}function d(_,w,y){typeof _=="number"||typeof _=="boolean"?w[y]=_:_.isMatrix3?(w[y]=_.elements[0],w[y+1]=_.elements[1],w[y+2]=_.elements[2],w[y+3]=0,w[y+4]=_.elements[3],w[y+5]=_.elements[4],w[y+6]=_.elements[5],w[y+7]=0,w[y+8]=_.elements[6],w[y+9]=_.elements[7],w[y+10]=_.elements[8],w[y+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-y),y):_.toArray(w,y)}function u(_,w,y,M){let b=_.value,v=w+"_"+y;if(Array.isArray(b)){M[v]===void 0&&(M[v]=[]);let S=M[v],C=!1;for(let A=0;A<b.length;A++)p(b[A],S,A)===!0&&(C=!0);return C}return p(b,M,v)}function p(_,w,y){if(w[y]===void 0)return typeof _=="number"||typeof _=="boolean"?w[y]=_:ArrayBuffer.isView(_)?w[y]=_.slice():w[y]=_.clone(),!0;{let M=w[y];if(typeof _=="number"||typeof _=="boolean"){if(M!==_)return w[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(M.equals(_)===!1)return M.copy(_),!0}}return!1}function f(_){let w=_.uniforms,y=0,M=16;for(let v=0,S=w.length;v<S;v++){let C=Array.isArray(w[v])?w[v]:[w[v]];for(let A=0,I=C.length;A<I;A++){let R=C[A],D=Array.isArray(R.value)?R.value:[R.value],T=Array.isArray(w[v])||Array.isArray(R.value),O=y;for(let W=0,j=D.length;W<j;W++){let V=D[W],Y=g(V,T),G=y%M,he=G%Y.boundary,ve=G+he;y+=he,ve!==0&&M-ve<Y.storage&&(y+=M-ve),W===0&&(O=y),y+=Y.storage}let F=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new F((y-O)/Float32Array.BYTES_PER_ELEMENT),R.__offset=O}}let b=y%M;return b>0&&(y+=M-b),_.__size=y,_.__cache={},this}function g(_,w){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){let w=_.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function x(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:x}}var sS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function rS(){return wi===null&&(wi=new Fo(sS,16,16,vs,ui),wi.name="DFG_LUT",wi.minFilter=En,wi.magFilter=En,wi.wrapS=_i,wi.wrapT=_i,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var zc=class{constructor(e={}){let{canvas:t=t0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Xn}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=p,m=new Set([rc,sc,ic]),x=new Set([Xn,hi,Zr,rr,ec,tc]),_=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,b=null,v=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,R=null,D=null,T=null,O=null;this._outputColorSpace=un;let F=0,W=0,j=null,V=-1,Y=null,G=new Vt,he=new Vt,ve=null,z=new it(0),re=0,be=t.width,xe=t.height,ee=1,Ce=null,Ke=null,Be=new Vt(0,0,be,xe),Je=new Vt(0,0,be,xe),ke=!1,U=new Js,q=new Al,Q=!1,ae=!1,J=new gt,_e=new H,te=new Vt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function ze(){return j===null?ee:1}let B=i;function ge(P,X){return t.getContext(P,X)}let Ae,Ve,se,Ze,Re,Pe,N,E,Z,we,pe,Ee,Le,de,fe,Ne,k,ue,le,De,Ie,Me,Se;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),B===null){let X="webgl2";if(B=ge(X,P),B===null)throw ge(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(P){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ot("WebGLRenderer: "+P.message),P}function We(){Ae=new gM(B),Ae.init(),Ie=new jb(B,Ae),Ve=new rM(B,Ae,e,Ie),se=new Kb(B,Ae),Ve.reversedDepthBuffer&&u&&se.buffers.depth.setReversed(!0),D=B.createFramebuffer(),T=B.createFramebuffer(),O=B.createFramebuffer(),Ze=new _M(B),Re=new Ub,Pe=new Jb(B,Ae,se,Re,Ve,Ie,Ze),N=new mM(A),E=new M_(B),Me=new iM(B,E),Z=new xM(B,E,Ze,Me),we=new MM(B,Z,E,Me,Ze),ue=new yM(B,Ve,Pe),fe=new oM(Re),pe=new Ob(A,N,Ae,Ve,Me,fe),Ee=new nS(A,Re),Le=new kb,de=new Wb(Ae),k=new nM(A,N,se,we,f,l),Ne=new Zb(A,we,Ve),Se=new iS(B,Ze,Ve,se),le=new sM(B,Ae,Ze),De=new vM(B,Ae,Ze),Ze.programs=pe.programs,A.capabilities=Ve,A.extensions=Ae,A.properties=Re,A.renderLists=Le,A.shadowMap=Ne,A.state=se,A.info=Ze}g!==Xn&&(C=new SM(g,t.width,t.height,a,s,r));let ye=new xd(A,B);this.xr=ye,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let P=Ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(P){P!==void 0&&(ee=P,this.setSize(be,xe,!1))},this.getSize=function(P){return P.set(be,xe)},this.setSize=function(P,X,ce=!0){if(ye.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}be=P,xe=X,t.width=Math.floor(P*ee),t.height=Math.floor(X*ee),ce===!0&&(t.style.width=P+"px",t.style.height=X+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(be*ee,xe*ee).floor()},this.setDrawingBufferSize=function(P,X,ce){be=P,xe=X,ee=ce,t.width=Math.floor(P*ce),t.height=Math.floor(X*ce),this.setViewport(0,0,P,X)},this.setEffects=function(P){if(g===Xn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let X=0;X<P.length;X++)if(P[X].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(G)},this.getViewport=function(P){return P.copy(Be)},this.setViewport=function(P,X,ce,ne){P.isVector4?Be.set(P.x,P.y,P.z,P.w):Be.set(P,X,ce,ne),se.viewport(G.copy(Be).multiplyScalar(ze()).round())},this.getScissor=function(P){return P.copy(Je)},this.setScissor=function(P,X,ce,ne){P.isVector4?Je.set(P.x,P.y,P.z,P.w):Je.set(P,X,ce,ne),se.scissor(he.copy(Je).multiplyScalar(ze()).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(P){se.setScissorTest(ke=P)},this.setOpaqueSort=function(P){Ce=P},this.setTransparentSort=function(P){Ke=P},this.getClearColor=function(P){return P.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(P=!0,X=!0,ce=!0){let ne=0;if(P){let ie=!1;if(j!==null){let Ye=j.texture.format;ie=m.has(Ye)}if(ie){let Ye=j.texture.type,je=x.has(Ye),Xe=k.getClearColor(),$e=k.getClearAlpha(),nt=Xe.r,lt=Xe.g,vt=Xe.b;je?(_[0]=nt,_[1]=lt,_[2]=vt,_[3]=$e,B.clearBufferuiv(B.COLOR,0,_)):(w[0]=nt,w[1]=lt,w[2]=vt,w[3]=$e,B.clearBufferiv(B.COLOR,0,w))}else ne|=B.COLOR_BUFFER_BIT}X&&(ne|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),R=P},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),k.dispose(),Le.dispose(),de.dispose(),Pe.dispose(),Re.dispose(),N.dispose(),we.dispose(),Z.dispose(),Me.dispose(),Se.dispose(),pe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",cn),ye.removeEventListener("sessionend",Dt),Nn.stop()};function He(P){P.preventDefault(),$u("WebGLRenderer: Context Lost."),I=!0}function Oe(){$u("WebGLRenderer: Context Restored."),I=!1;let P=Ze.autoReset,X=Ne.enabled,ce=Ne.autoUpdate,ne=Ne.needsUpdate,ie=Ne.type;We(),Ze.autoReset=P,Ne.enabled=X,Ne.autoUpdate=ce,Ne.needsUpdate=ne,Ne.type=ie}function Ue(P){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function tt(P){let X=P.target;X.removeEventListener("dispose",tt),ct(X)}function ct(P){Pt(P),Re.remove(P)}function Pt(P){let X=Re.get(P).programs;X!==void 0&&(X.forEach(function(ce){pe.releaseProgram(ce)}),P.isShaderMaterial&&pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,ce,ne,ie,Ye){X===null&&(X=me);let je=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Xe=po(P,X,ce,ne,ie);se.setMaterial(ne,je);let $e=ce.index,nt=1;if(ne.wireframe===!0){if($e=Z.getWireframeAttribute(ce),$e===void 0)return;nt=2}let lt=ce.drawRange,vt=ce.attributes.position,Qe=lt.start*nt,_t=(lt.start+lt.count)*nt;Ye!==null&&(Qe=Math.max(Qe,Ye.start*nt),_t=Math.min(_t,(Ye.start+Ye.count)*nt)),$e!==null?(Qe=Math.max(Qe,0),_t=Math.min(_t,$e.count)):vt!=null&&(Qe=Math.max(Qe,0),_t=Math.min(_t,vt.count));let Yt=_t-Qe;if(Yt<0||Yt===1/0)return;Me.setup(ie,ne,Xe,ce,$e);let Ot,Lt=le;if($e!==null&&(Ot=E.get($e),Lt=De,Lt.setIndex(Ot)),ie.isMesh)ne.wireframe===!0?(se.setLineWidth(ne.wireframeLinewidth*ze()),Lt.setMode(B.LINES)):Lt.setMode(B.TRIANGLES);else if(ie.isLine){let xn=ne.linewidth;xn===void 0&&(xn=1),se.setLineWidth(xn*ze()),ie.isLineSegments?Lt.setMode(B.LINES):ie.isLineLoop?Lt.setMode(B.LINE_LOOP):Lt.setMode(B.LINE_STRIP)}else ie.isPoints?Lt.setMode(B.POINTS):ie.isSprite&&Lt.setMode(B.TRIANGLES);if(ie.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let xn=ie._multiDrawStarts,et=ie._multiDrawCounts,Tn=ie._multiDrawCount,At=$e?E.get($e).bytesPerElement:1,Gs=Re.get(ne).currentProgram.getUniforms();for(let vn=0;vn<Tn;vn++)Gs.setValue(B,"_gl_DrawID",vn),Lt.render(xn[vn]/At,et[vn])}else if(ie.isInstancedMesh)Lt.renderInstances(Qe,Yt,ie.count);else if(ce.isInstancedBufferGeometry){let xn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,et=Math.min(ce.instanceCount,xn);Lt.renderInstances(Qe,Yt,et)}else Lt.render(Qe,Yt)};function Ft(P,X,ce,ne){R!==null&&P.isNodeMaterial&&R.setObject(ne,P),Q===!0&&fe.setState(P,ce,!1),P.transparent===!0&&P.side===Wn&&P.forceSinglePass===!1?(P.side=Kt,P.needsUpdate=!0,Ct(P,X,ne),P.side=xs,P.needsUpdate=!0,Ct(P,X,ne),P.side=Wn):Ct(P,X,ne)}this.compile=function(P,X,ce=null){ce===null&&(ce=P),R!==null&&R.renderStart(P,X,ce),b=de.get(ce),b.init(X),S.push(b),ce.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(b.pushLight(ie),ie.castShadow&&b.pushShadow(ie))}),P!==ce&&P.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(b.pushLight(ie),ie.castShadow&&b.pushShadow(ie))}),b.setupLights(),R!==null&&R.updateLights(b.state.lightsArray),ae=this.localClippingEnabled,Q=fe.init(this.clippingPlanes,ae),Q===!0&&fe.setGlobalState(this.clippingPlanes,X),R!==null&&Ne.render(b.state.shadowsArray,ce,X);let ne=new Set;return P.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Ye=ie.material;if(Ye)if(Array.isArray(Ye))for(let je=0;je<Ye.length;je++){let Xe=Ye[je];Ft(Xe,ce,X,ie),ne.add(Xe)}else Ft(Ye,ce,X,ie),ne.add(Ye)}),b=S.pop(),R!==null&&R.renderEnd(),ne},this.compileAsync=function(P,X,ce=null){let ne=this.compile(P,X,ce);return new Promise(ie=>{function Ye(){if(ne.forEach(function(je){let $e=Re.get(je).currentProgram;($e===void 0||$e.isReady())&&ne.delete(je)}),ne.size===0){ie(P);return}setTimeout(Ye,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let It=null;function Bn(P){It&&It(P)}function cn(){Nn.stop()}function Dt(){Nn.start()}let Nn=new U0;Nn.setAnimationLoop(Bn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(P){It=P,ye.setAnimationLoop(P),P===null?Nn.stop():Nn.start()},ye.addEventListener("sessionstart",cn),ye.addEventListener("sessionend",Dt),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;R!==null&&R.renderStart(P,X);let ce=ye.enabled===!0&&ye.isPresenting===!0,ne=C!==null&&(j===null||ce)&&C.begin(A,j);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(X),X=ye.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,X,j),b=de.get(P,S.length),b.init(X),b.state.textureUnits=Pe.getTextureUnits(),S.push(b),J.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?q.setFromArrayCamera(X):U.setFromProjectionMatrix(J,Kn,X.reversedDepth),ae=this.localClippingEnabled,Q=fe.init(this.clippingPlanes,ae),M=Le.get(P,v.length),M.init(),v.push(M),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let je=A.xr.getDepthSensingMesh();je!==null&&xi(je,X,-1/0,A.sortObjects)}xi(P,X,0,A.sortObjects),M.finish(),R!==null&&R.updateLights(b.state.lightsArray),A.sortObjects===!0&&M.sort(Ce,Ke),Te=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Te&&k.addToRenderList(M,P),this.info.autoReset===!0&&this.info.reset(),Q===!0&&fe.beginShadows();let ie=b.state.shadowsArray;if(Ne.render(ie,P,X),Q===!0&&fe.endShadows(),(ne&&C.hasRenderPass())===!1){let je=M.opaque,Xe=M.transmissive;if(b.setupLights(),X.isArrayCamera){let $e=X.cameras;if(Xe.length>0)for(let nt=0,lt=$e.length;nt<lt;nt++){let vt=$e[nt];$(je,Xe,P,vt)}Te&&k.render(P);for(let nt=0,lt=$e.length;nt<lt;nt++){let vt=$e[nt];si(M,P,vt,vt.viewport)}}else Xe.length>0&&$(je,Xe,P,X),Te&&k.render(P),si(M,P,X)}j!==null&&W===0&&(Pe.updateMultisampleRenderTarget(j),Pe.updateRenderTargetMipmap(j)),ne&&C.end(A),P.isScene===!0&&P.onAfterRender(A,P,X),Me.resetDefaultState(),V=-1,Y=null,S.pop(),S.length>0?(b=S[S.length-1],Pe.setTextureUnits(b.state.textureUnits),Q===!0&&fe.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,R!==null&&R.renderEnd()};function xi(P,X,ce,ne){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)b.pushLight(P),P.castShadow&&b.pushShadow(P);else if(P.isSprite){let je=X.isArrayCamera?q:U;if(!P.frustumCulled||P.intersectsFrustum(je)){ne&&te.setFromMatrixPosition(P.matrixWorld).applyMatrix4(J);let Xe=we.update(P),$e=P.material;$e.visible&&M.push(P,Xe,$e,ce,te.z,null,X)}}else if(P.isMesh||P.isLine||P.isPoints){let je=X.isArrayCamera?q:U;if(!P.frustumCulled||P.intersectsFrustum(je)){let Xe=we.update(P),$e=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),te.copy(P.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),te.copy(Xe.boundingSphere.center)),te.applyMatrix4(P.matrixWorld).applyMatrix4(J)),Array.isArray($e)){let nt=Xe.groups;for(let lt=0,vt=nt.length;lt<vt;lt++){let Qe=nt[lt],_t=$e[Qe.materialIndex];_t&&_t.visible&&M.push(P,Xe,_t,ce,te.z,Qe,X)}}else $e.visible&&M.push(P,Xe,$e,ce,te.z,null,X)}}}let Ye=P.children;for(let je=0,Xe=Ye.length;je<Xe;je++)xi(Ye[je],X,ce,ne)}function si(P,X,ce,ne){let{opaque:ie,transmissive:Ye,transparent:je}=P;b.setupLightsView(ce),Q===!0&&fe.setGlobalState(A.clippingPlanes,ce),ne&&se.viewport(G.copy(ne)),ie.length>0&&Fe(ie,X,ce),Ye.length>0&&Fe(Ye,X,ce),je.length>0&&Fe(je,X,ce),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function $(P,X,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ne.id]===void 0){let Qe=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ne.id]=new Gn(1,1,{generateMipmaps:!0,type:Qe?ui:Xn,minFilter:Yi,samples:Math.max(4,Ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Ye=b.state.transmissionRenderTarget[ne.id],je=ne.viewport||G;Ye.setSize(je.z*A.transmissionResolutionScale,je.w*A.transmissionResolutionScale);let Xe=A.getRenderTarget(),$e=A.getActiveCubeFace(),nt=A.getActiveMipmapLevel();A.setRenderTarget(Ye),A.getClearColor(z),re=A.getClearAlpha(),re<1&&A.setClearColor(16777215,.5),A.clear(),Te&&k.render(ce);let lt=A.toneMapping;A.toneMapping=Si;let vt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),b.setupLightsView(ne),Q===!0&&fe.setGlobalState(A.clippingPlanes,ne),Fe(P,ce,ne),Pe.updateMultisampleRenderTarget(Ye),Pe.updateRenderTargetMipmap(Ye),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let _t=0,Yt=X.length;_t<Yt;_t++){let Ot=X[_t],{object:Lt,geometry:xn,material:et,group:Tn}=Ot;if(et.side===Wn&&Lt.layers.test(ne.layers)){let At=et.side;et.side=Kt,et.needsUpdate=!0,st(Lt,ce,ne,xn,et,Tn),et.side=At,et.needsUpdate=!0,Qe=!0}}Qe===!0&&(Pe.updateMultisampleRenderTarget(Ye),Pe.updateRenderTargetMipmap(Ye))}A.setRenderTarget(Xe,$e,nt),A.setClearColor(z,re),vt!==void 0&&(ne.viewport=vt),A.toneMapping=lt}function Fe(P,X,ce){let ne=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Ye=P.length;ie<Ye;ie++){let je=P[ie],{object:Xe,geometry:$e,group:nt}=je,lt=je.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),Xe.layers.test(ce.layers)&&st(Xe,X,ce,$e,lt,nt)}}function st(P,X,ce,ne,ie,Ye){R!==null&&ie.isNodeMaterial&&R.setObject(P,ie),P.onBeforeRender(A,X,ce,ne,ie,Ye),P.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ie.onBeforeRender(A,X,ce,ne,P,Ye),ie.transparent===!0&&ie.side===Wn&&ie.forceSinglePass===!1?(ie.side=Kt,ie.needsUpdate=!0,A.renderBufferDirect(ce,X,ne,ie,P,Ye),ie.side=xs,ie.needsUpdate=!0,A.renderBufferDirect(ce,X,ne,ie,P,Ye),ie.side=Wn):A.renderBufferDirect(ce,X,ne,ie,P,Ye),P.onAfterRender(A,X,ce,ne,ie,Ye)}function Nt(P){let X=0;for(let ce of P)ce.texture!==null&&X++;return X}function Ct(P,X,ce){X.isScene!==!0&&(X=me);let ne=Re.get(P),ie=b.state.lights,Ye=b.state.shadowsArray,je=ie.state.version,Xe=pe.getParameters(P,ie.state,Ye,X,ce,b.state.lightProbeGridArray),$e=pe.getProgramCacheKey(Xe),nt=ne.programs;ne.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;let lt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ne.envMap=N.get(P.envMap||ne.environment,lt),ne.envMapRotation=ne.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,nt===void 0&&(P.addEventListener("dispose",tt),nt=new Map,ne.programs=nt,ne.programVariants=new Map);let vt=nt.get($e);if(vt!==void 0){if(ne.currentProgram===vt&&ne.lightsStateVersion===je)return $n(P,Xe),vt}else Xe.uniforms=pe.getUniforms(P),R!==null&&P.isNodeMaterial&&R.build(P,ce,Xe),P.onBeforeCompile(Xe,A),vt=pe.acquireProgram(Xe,$e),nt.set($e,vt),ne.uniforms=Xe.uniforms;let Qe=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=fe.uniform),$n(P,Xe),ne.needsLights=Wh(P),ne.lightsStateVersion=je,ne.needsLights&&(Qe.ambientLightColor.value=ie.state.ambient,Qe.lightProbe.value=ie.state.probe,Qe.sunLights.value=ie.state.sun,Qe.sunLightShadows.value=ie.state.sunShadow,Qe.directionalLights.value=ie.state.directional,Qe.directionalLightShadows.value=ie.state.directionalShadow,Qe.spotLights.value=ie.state.spot,Qe.spotLightShadows.value=ie.state.spotShadow,Qe.rectAreaLights.value=ie.state.rectArea,Qe.ltc_1.value=ie.state.rectAreaLTC1,Qe.ltc_2.value=ie.state.rectAreaLTC2,Qe.pointLights.value=ie.state.point,Qe.pointLightShadows.value=ie.state.pointShadow,Qe.hemisphereLights.value=ie.state.hemi,Qe.sunShadowMatrix.value=ie.state.sunShadowMatrix,Qe.sunShadowCascade.value=ie.state.sunShadowCascade,Qe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ie.state.spotLightMatrix,Qe.spotLightMap.value=ie.state.spotLightMap,Qe.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.numLightProbeGrids=Nt(b.state.lightProbeGridArray),ne.currentProgram=vt,ne.uniformsList=null,vt}function kt(P,X,ce,ne,ie){let Ye=Re.get(P),je=Ye.currentProgram.id+","+ne+","+ie,Xe=Ye.programVariants.get(je);return Xe===void 0?(Xe=Ct(P,X,ce),Ye.programVariants.set(je,Xe)):(Ye.currentProgram=Xe,Ye.uniformsList=null,Ye.outputColorSpace=ne,Ye.toneMapping=ie),Xe}function bt(P){if(P.uniformsList===null){let X=P.currentProgram.getUniforms();P.uniformsList=Jr.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function $n(P,X){let ce=Re.get(P);ce.outputColorSpace=X.outputColorSpace,ce.batching=X.batching,ce.batchingColor=X.batchingColor,ce.instancing=X.instancing,ce.instancingColor=X.instancingColor,ce.instancingMorph=X.instancingMorph,ce.skinning=X.skinning,ce.morphTargets=X.morphTargets,ce.morphNormals=X.morphNormals,ce.morphColors=X.morphColors,ce.morphTargetsCount=X.morphTargetsCount,ce.numClippingPlanes=X.numClippingPlanes,ce.numIntersection=X.numClipIntersection,ce.vertexAlphas=X.vertexAlphas,ce.vertexTangents=X.vertexTangents,ce.toneMapping=X.toneMapping}function po(P,X,ce,ne,ie){X.isScene!==!0&&(X=me),Pe.resetTextureUnits();let Ye=X.fog,je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Xe=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:yt.workingColorSpace,$e=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,nt=N.get(ne.envMap||je,$e),lt=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,vt=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,Yt=!!ce.morphAttributes.color,Ot=Si;ne.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ot=A.toneMapping);let Lt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,xn=Lt!==void 0?Lt.length:0,et=Re.get(ne),Tn=b.state.lights;if(Q===!0&&(ae===!0||P!==Y)){let Ht=P===Y&&ne.id===V;fe.setState(ne,P,Ht)}let At=!1,Gs=!1;ne.version===et.__version?et.needsLights&&et.lightsStateVersion!==Tn.state.version||ie.isBatchedMesh&&et.batching===!1||!ie.isBatchedMesh&&et.batching===!0||ie.isBatchedMesh&&et.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&et.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&et.instancing===!1||!ie.isInstancedMesh&&et.instancing===!0||ie.isSkinnedMesh&&et.skinning===!1||!ie.isSkinnedMesh&&et.skinning===!0||ie.isInstancedMesh&&et.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&et.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&et.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&et.instancingMorph===!1&&ie.morphTexture!==null||et.envMap!==nt||ne.fog===!0&&et.fog!==Ye||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==fe.numPlanes||et.numIntersection!==fe.numIntersection)||et.vertexAlphas!==lt||et.vertexTangents!==vt||et.morphTargets!==Qe||et.morphNormals!==_t||et.morphColors!==Yt||et.morphTargetsCount!==xn||et.numLightProbeGrids!==Nt(b.state.lightProbeGridArray)?At=!0:(et.outputColorSpace!==Xe||et.toneMapping!==Ot)&&(Gs=!0):(At=!0,et.__version=ne.version);let vn=et.currentProgram;(At===!0||Gs===!0)&&(vn=Gs===!0?kt(ne,X,ie,Xe,Ot):Ct(ne,X,ie),R&&ne.isNodeMaterial&&R.onUpdateProgram(ne,vn,et));let Ha=!1,rs=!1,Vs=!1,Tt=vn.getUniforms(),hn=et.uniforms;if(se.useProgram(vn.program)&&(Ha=!0,rs=!0,Vs=!0),ne.id!==V&&(V=ne.id,rs=!0),Ha||Y!==P){se.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Tt.setValue(B,"projectionMatrix",P.projectionMatrix),Tt.setValue(B,"viewMatrix",P.matrixWorldInverse);let sn=Tt.map.cameraPosition;sn!==void 0&&sn.setValue(B,_e.setFromMatrixPosition(P.matrixWorld)),Ve.logarithmicDepthBuffer&&Tt.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Tt.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),Y!==P&&(Y=P,rs=!0,Vs=!0)}if(et.needsLights&&(Tn.state.sunShadowMap.length>0&&Tt.setValue(B,"sunShadowMap",Tn.state.sunShadowMap,Pe),Tn.state.directionalShadowMap.length>0&&Tt.setValue(B,"directionalShadowMap",Tn.state.directionalShadowMap,Pe),Tn.state.spotShadowMap.length>0&&Tt.setValue(B,"spotShadowMap",Tn.state.spotShadowMap,Pe),Tn.state.pointShadowMap.length>0&&Tt.setValue(B,"pointShadowMap",Tn.state.pointShadowMap,Pe)),ie.isSkinnedMesh){Tt.setOptional(B,ie,"bindMatrix"),Tt.setOptional(B,ie,"bindMatrixInverse");let Ht=ie.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Tt.setValue(B,"boneTexture",Ht.boneTexture,Pe))}ie.isBatchedMesh&&(Tt.setOptional(B,ie,"batchingTexture"),Tt.setValue(B,"batchingTexture",ie._matricesTexture,Pe),Tt.setOptional(B,ie,"batchingIdTexture"),Tt.setValue(B,"batchingIdTexture",ie._indirectTexture,Pe),Tt.setOptional(B,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Tt.setValue(B,"batchingColorTexture",ie._colorsTexture,Pe));let ri=ce.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&ue.update(ie,ce,vn),(rs||et.receiveShadow!==ie.receiveShadow)&&(et.receiveShadow=ie.receiveShadow,Tt.setValue(B,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=rS()),rs){if(Tt.setValue(B,"toneMappingExposure",A.toneMappingExposure),et.needsLights&&_r(hn,Vs),Ye&&ne.fog===!0&&Ee.refreshFogUniforms(hn,Ye),Ee.refreshMaterialUniforms(hn,ne,ee,xe,b.state.transmissionRenderTarget[P.id]),et.needsLights&&et.numLightProbeGrids>0){let Ht=y,sn=0;for(let Fi of b.state.lightProbeGridArray)Fi.texture!==null&&(Ht.textures[sn]=Fi.texture,Ht.min[sn]=Fi.boundingBox.min,Ht.max[sn]=Fi.boundingBox.max,Ht.resolution[sn]=Fi.resolution,sn++);for(let Fi in Ht)Ht[Fi].length=sn;hn.probesSH.value=Ht.textures,hn.probesMin.value=Ht.min,hn.probesMax.value=Ht.max,hn.probesResolution.value=Ht.resolution}Jr.upload(B,bt(et),hn,Pe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Jr.upload(B,bt(et),hn,Pe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Tt.setValue(B,"center",ie.center),Tt.setValue(B,"modelViewMatrix",ie.modelViewMatrix),Tt.setValue(B,"normalMatrix",ie.normalMatrix),Tt.setValue(B,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let Ht=ne.uniformsGroups;for(let sn=0,Fi=Ht.length;sn<Fi;sn++){let Xf=Ht[sn];Se.update(Xf,vn),Se.bind(Xf,vn)}}return vn}function _r(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.sunLights.needsUpdate=X,P.sunLightShadows.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Wh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(P,X,ce){let ne=Re.get(P);ne.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Re.get(P.texture).__webglTexture=X,Re.get(P.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,X){let ce=Re.get(P);ce.__webglFramebuffer=X,ce.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,ce=0){j=P,F=X,W=ce;let ne=null,ie=!1,Ye=!1;if(P){let Xe=Re.get(P);if(Xe.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(B.FRAMEBUFFER,Xe.__webglFramebuffer),G.copy(P.viewport),he.copy(P.scissor),ve=P.scissorTest,se.viewport(G),se.scissor(he),se.setScissorTest(ve),V=-1;return}else if(Xe.__webglFramebuffer===void 0)Pe.setupRenderTarget(P);else if(Xe.__hasExternalTextures)Pe.rebindTextures(P,Re.get(P.texture).__webglTexture,Re.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let lt=P.depthTexture;if(Xe.__boundDepthTexture!==lt){if(lt!==null&&Re.has(lt)&&(P.width!==lt.image.width||P.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(P)}}let $e=P.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ye=!0);let nt=Re.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?ne=nt[X][ce]:ne=nt[X],ie=!0):P.samples>0&&Pe.useMultisampledRTT(P)===!1?ne=Re.get(P).__webglMultisampledFramebuffer:Array.isArray(nt)?ne=nt[ce]:ne=nt,G.copy(P.viewport),he.copy(P.scissor),ve=P.scissorTest}else G.copy(Be).multiplyScalar(ee).floor(),he.copy(Je).multiplyScalar(ee).floor(),ve=ke;if(ce!==0&&(ne=D),se.bindFramebuffer(B.FRAMEBUFFER,ne)&&se.drawBuffers(P,ne),se.viewport(G),se.scissor(he),se.setScissorTest(ve),ie){let Xe=Re.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Xe.__webglTexture,ce)}else if(Ye){let Xe=X;for(let $e=0;$e<P.textures.length;$e++){let nt=Re.get(P.textures[$e]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+$e,nt.__webglTexture,ce,Xe)}}else if(P!==null&&ce!==0){let Xe=Re.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xe.__webglTexture,ce)}V=-1};function mo(P){let X=Re.get(P);return(X.__readFormat!==P.format||X.__readType!==P.type)&&(X.__readFormat=P.format,X.__readType=P.type,X.__formatReadable=Ve.textureFormatReadable(P.format),X.__typeReadable=Ve.textureTypeReadable(P.type)),X}this.readRenderTargetPixels=function(P,X,ce,ne,ie,Ye,je,Xe=0){if(!(P&&P.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Re.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je],Array.isArray($e)&&($e=$e[0])),$e){se.bindFramebuffer(B.FRAMEBUFFER,$e);try{let nt=P.textures[Xe],lt=nt.format,vt=nt.type;P.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Xe);let Qe=mo(nt);if(Qe.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-ne&&ce>=0&&ce<=P.height-ie&&B.readPixels(X,ce,ne,ie,Ie.convert(lt),Ie.convert(vt),Ye)}finally{let nt=j!==null?Re.get(j).__webglFramebuffer:null;se.bindFramebuffer(B.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(P,X,ce,ne,ie,Ye,je,Xe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Re.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je],Array.isArray($e)&&($e=$e[0])),$e)if(X>=0&&X<=P.width-ne&&ce>=0&&ce<=P.height-ie){se.bindFramebuffer(B.FRAMEBUFFER,$e);let nt=P.textures[Xe],lt=nt.format,vt=nt.type;P.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Xe);let Qe=mo(nt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.bufferData(B.PIXEL_PACK_BUFFER,Ye.byteLength,B.STREAM_READ),B.readPixels(X,ce,ne,ie,Ie.convert(lt),Ie.convert(vt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Yt=j!==null?Re.get(j).__webglFramebuffer:null;se.bindFramebuffer(B.FRAMEBUFFER,Yt);let Ot=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await i0(B,Ot,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ye),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(_t),B.deleteSync(Ot),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,X=null,ce=0){let ne=Math.pow(2,-ce),ie=Math.floor(P.image.width*ne),Ye=Math.floor(P.image.height*ne),je=X!==null?X.x:0,Xe=X!==null?X.y:0;Pe.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,ce,0,0,je,Xe,ie,Ye),se.unbindTexture()},this.copyTextureToTexture=function(P,X,ce=null,ne=null,ie=0,Ye=0){let je,Xe,$e,nt,lt,vt,Qe,_t,Yt,Ot=P.isCompressedTexture?P.mipmaps[Ye]:P.image;if(ce!==null)je=ce.max.x-ce.min.x,Xe=ce.max.y-ce.min.y,$e=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,lt=ce.min.y,vt=ce.isBox3?ce.min.z:0;else{let Tt=Math.pow(2,-ie);je=Math.floor(Ot.width*Tt),Xe=Math.floor(Ot.height*Tt),P.isDataArrayTexture?$e=Ot.depth:P.isData3DTexture?$e=Math.floor(Ot.depth*Tt):$e=1,nt=0,lt=0,vt=0}ne!==null?(Qe=ne.x,_t=ne.y,Yt=ne.z):(Qe=0,_t=0,Yt=0);let Lt=Ie.convert(X.format),xn=Ie.convert(X.type),et;X.isData3DTexture?(Pe.setTexture3D(X,0),et=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Pe.setTexture2DArray(X,0),et=B.TEXTURE_2D_ARRAY):(Pe.setTexture2D(X,0),et=B.TEXTURE_2D),se.activeTexture(B.TEXTURE0),se.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),se.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),se.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);let Tn=se.getParameter(B.UNPACK_ROW_LENGTH),At=se.getParameter(B.UNPACK_IMAGE_HEIGHT),Gs=se.getParameter(B.UNPACK_SKIP_PIXELS),vn=se.getParameter(B.UNPACK_SKIP_ROWS),Ha=se.getParameter(B.UNPACK_SKIP_IMAGES);se.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),se.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),se.pixelStorei(B.UNPACK_SKIP_PIXELS,nt),se.pixelStorei(B.UNPACK_SKIP_ROWS,lt),se.pixelStorei(B.UNPACK_SKIP_IMAGES,vt);let rs=P.isDataArrayTexture||P.isData3DTexture,Vs=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){let Tt=Re.get(P),hn=Re.get(X),ri=Re.get(Tt.__renderTarget),Ht=Re.get(hn.__renderTarget);se.bindFramebuffer(B.READ_FRAMEBUFFER,ri.__webglFramebuffer),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let sn=0;sn<$e;sn++)rs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.get(P).__webglTexture,ie,vt+sn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.get(X).__webglTexture,Ye,Yt+sn)),B.blitFramebuffer(nt,lt,nt+je,lt+Xe,Qe,_t,Qe+je,_t+Xe,B.DEPTH_BUFFER_BIT,B.NEAREST);se.bindFramebuffer(B.READ_FRAMEBUFFER,null),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ie!==0||P.isRenderTargetTexture||Re.has(P)){let Tt=Re.get(P),hn=Re.get(X);se.bindFramebuffer(B.READ_FRAMEBUFFER,T),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,O);for(let ri=0;ri<$e;ri++)rs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.__webglTexture,ie,vt+ri):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,ie),Vs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,Ye,Yt+ri):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,Ye),ie!==0?B.blitFramebuffer(nt,lt,nt+je,lt+Xe,Qe,_t,Qe+je,_t+Xe,B.COLOR_BUFFER_BIT,B.NEAREST):Vs?B.copyTexSubImage3D(et,Ye,Qe,_t,Yt+ri,nt,lt,je,Xe):B.copyTexSubImage2D(et,Ye,Qe,_t,nt,lt,je,Xe);se.bindFramebuffer(B.READ_FRAMEBUFFER,null),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Vs?P.isDataTexture||P.isData3DTexture?B.texSubImage3D(et,Ye,Qe,_t,Yt,je,Xe,$e,Lt,xn,Ot.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(et,Ye,Qe,_t,Yt,je,Xe,$e,Lt,Ot.data):B.texSubImage3D(et,Ye,Qe,_t,Yt,je,Xe,$e,Lt,xn,Ot):P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ye,Qe,_t,je,Xe,Lt,xn,Ot.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ye,Qe,_t,Ot.width,Ot.height,Lt,Ot.data):B.texSubImage2D(B.TEXTURE_2D,Ye,Qe,_t,je,Xe,Lt,xn,Ot);se.pixelStorei(B.UNPACK_ROW_LENGTH,Tn),se.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At),se.pixelStorei(B.UNPACK_SKIP_PIXELS,Gs),se.pixelStorei(B.UNPACK_SKIP_ROWS,vn),se.pixelStorei(B.UNPACK_SKIP_IMAGES,Ha),Ye===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&B.generateMipmap(et),se.unbindTexture()},this.initRenderTarget=function(P){Re.get(P).__webglFramebuffer===void 0&&Pe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Pe.setTextureCube(P,0):P.isData3DTexture?Pe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Pe.setTexture2DArray(P,0):Pe.setTexture2D(P,0),se.unbindTexture()},this.resetState=function(){F=0,W=0,j=null,se.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var oe={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4,barkMinShow:1.2,bashVolume:.6,revVolume:.35,cutVolume:.5,throwVolume:.45,clankVolume:.35,boomVolume:.7,saunaVolume:.4,reviveVolume:.4,tobbleShotVolume:.25,blastSize:2.5,blastTime:.35,executeShake:.05,cutGelEvery:.1,arcDot:.06}};function Vc({step:n,render:e,before:t,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,h=!1;function c(g){if(!(g>0)||!Number.isFinite(g))return;t&&t(g),o+=g;let m=0;for(;o>=r&&m<s;)n(r),o-=r,m++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),g)}function d(g){if(h){try{l!==null&&c((g-l)/1e3)}catch(m){throw f(),m}l=g,h&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function p(){h||(h=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function f(){h=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:c,start:p,stop:f}}var vd=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),oS={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},aS={0:"fire",2:"aim"},q0={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},$0={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},lS=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function _d(n){if(!n||typeof n.tagName!="string")return!1;let e=n.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!lS.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function Z0(n){return oS[n]||null}function K0(n){return aS[n]||null}function Qr(){let n={};for(let e of vd)n[e]=!1;return n}function J0(n,e,t=.15){let i=Math.hypot(n,e);if(i<t)return[0,0];let s=Math.min(1,(i-t)/(1-t))/i;return[n*s,e*s]}function cS(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,t]=J0(n.axes[0],n.axes[1]),[i,s]=J0(n.axes[2],n.axes[3]),r=Qr();for(let o in q0){let a=n.buttons[o];r[q0[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:t,lookX:i,lookY:s,held:r}}function hS(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let e of vd)n.held[e]=!1;for(let e in n.held)n.held[e]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function Wc(n){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:Qr(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:t,downButtons:i,latched:s}=e,r="kbm",o="none",a=Qr();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,h=()=>l()||document.activeElement===n;function c(){hS(e)}function d(M){if(_d(M.target))return;let b=Z0(M.code);(b||M.code in $0)&&(h()&&(M.code==="Tab"||M.code==="Space")&&M.preventDefault(),r="kbm",!M.repeat&&!t.has(M.code)&&b&&s.add(b),t.add(M.code))}function u(M){t.delete(M.code)}function p(M){M.target===n&&n.focus();let b=K0(M.button);b&&(r="kbm",i.has(M.button)||s.add(b),i.add(M.button))}function f(M){i.delete(M.button)}function g(M){l()&&(r="kbm",e.lookDX+=M.movementX||0,e.lookDY+=M.movementY||0)}function m(M){!h()||!M.deltaY||(r="kbm",s.add(M.deltaY>0?"weaponNext":"weaponPrev"),M.preventDefault())}function x(M){M.preventDefault()}function _(){l()||c()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",f),window.addEventListener("blur",c),document.addEventListener("mousemove",g),document.addEventListener("pointerlockchange",_),n.addEventListener("mousedown",p),n.addEventListener("wheel",m,{passive:!1}),n.addEventListener("contextmenu",x);function w(){let M=[];try{M=navigator.getGamepads&&navigator.getGamepads()||[]}catch{M=[]}let b=null;for(let S of M)if(S&&S.connected){b=S;break}let v=cS(b);return o=v.ok?b.id:v.reason==="none"?"none":"unrecognised controller",v}function y(){let M={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:Qr(),pressed:Qr()};e.lookDX=0,e.lookDY=0;for(let S of t){let C=Z0(S);C&&(M.held[C]=!0);let A=$0[S];A&&(M.moveX+=A[0],M.moveY+=A[1])}for(let S of i){let C=K0(S);C&&(M.held[C]=!0)}let b=Math.hypot(M.moveX,M.moveY);b>1&&(M.moveX/=b,M.moveY/=b);for(let S of s)M.pressed[S]=!0;s.clear();let v=w();if(v.ok){M.lookX=v.lookX,M.lookY=v.lookY;let S=v.moveX!==0||v.moveY!==0||v.lookX!==0||v.lookY!==0;for(let A of vd)v.held[A]&&(S=!0,M.held[A]=!0,a[A]||(M.pressed[A]=!0));a=v.held,M.moveX+=v.moveX,M.moveY+=v.moveY;let C=Math.hypot(M.moveX,M.moveY);C>1&&(M.moveX/=C,M.moveY/=C),S&&(r="pad")}else a=Qr();return M}return{poll:y,requestLock(){try{let M=n.requestPointerLock&&n.requestPointerLock();M&&typeof M.catch=="function"&&M.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Q0(n,e,t=14){let i=n;return e>20?i-=.1:e<t&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var uS=2e3,j0=1e4,dS=8e4;function em({startMs:n=0,scale:e=1}={}){let t=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function h(c,d){if(d-n<uS||(i+=Math.min(c,100),s++,s<60||i<1e3))return t;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let p=Q0(t,u,Math.max(14,1.1*r));if(p>t){if(d<l)return t;o=d}else p<t&&(o!==null&&d-o<j0&&(a=a===0?j0:Math.min(a*2,dS),l=d+a),o=null);return t=p,t}return{sample:h,scale:()=>t}}var K=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var yd={viewportHeight:{value:1080}};function fi(n){n.getAttribute("normal")||n.computeVertexNormals();let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let h=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=h;let c=s.get(h);c||(c=[0,0,0],s.set(h,c)),c[0]+=t.getX(l),c[1]+=t.getY(l),c[2]+=t.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Et(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let h=s.get(r[l]),c=h[0],d=h[1],u=h[2],p=Math.hypot(c,d,u);p<1e-6&&(c=t.getX(l),d=t.getY(l),u=t.getZ(l),p=Math.hypot(c,d,u)||1),a.setXYZ(l,c/p,d/p,u/p)}return a.needsUpdate=!0,n}var fS=`
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
`,pS=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function mS({px:n=oe.outlinePx,color:e=K.ink,outlineNormal:t=!1}={}){return new Mn({name:"outline",uniforms:{px:{value:n},inkColor:{value:new it(e)},viewportHeight:yd.viewportHeight},defines:t?{USE_OUTLINE_NORMAL:""}:{},vertexShader:fS,fragmentShader:pS,side:Kt})}function gS(){}var tm=new Map;function xS(n,e,t){let i=n+"|"+new it(e).getHexString()+"|"+t,s=tm.get(i);return s||(s=mS({px:n,color:e,outlineNormal:t}),tm.set(i,s)),s}function Pn(n,{px:e=oe.outlinePx}={}){let t=!!n.geometry.getAttribute("outlineNormal"),i=xS(e,K.ink,t),s=new ut(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=gS,n.add(s),s}function Md(n,e){n.traverse(t=>{t.userData.isOutline&&(t.visible=e)})}function vS(n,e,t,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(t>0?t:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function Xc(n,e){let t=new zc({canvas:n,context:e,antialias:!0,powerPreference:"high-performance"});t.outputColorSpace=un;let i=em({startMs:performance.now()});function s(){let o=vS(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return t.setPixelRatio(o.pixelRatio),t.setSize(o.width,o.height,!1),yd.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:t,resize:s,frameDone:r,scale:i.scale}}var Zi={lightDir:{value:new H(...oe.lightDir).normalize()},shadowTint:{value:new it(K.shadowTint)},bandEdge:{value:.15},shadowLift:{value:oe.shadowLift}},_S=`
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
`,yS=`
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
`;function zt({color:n="#ffffff",vertexColors:e=!1,shadowMix:t=.55,rim:i=.25}={}){return new Mn({name:"toon",uniforms:{baseColor:{value:new it(n)},shadowMix:{value:t},rim:{value:i},lightDir:Zi.lightDir,shadowTint:Zi.shadowTint,bandEdge:Zi.bandEdge,shadowLift:Zi.shadowLift},vertexShader:_S,fragmentShader:yS,vertexColors:e})}var MS=400,bS=[-.45,.22,-1],SS=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,wS=`
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
`;function Yc({planetDir:n=bS}={}){let e=r=>new it(r),t=new Mn({name:"sky",uniforms:{deep:{value:e(K.nebulaDeep)},hot:{value:e(K.nebulaHot)},pink:{value:e(K.hotPink)},lilac:{value:e(K.lilac)},ink:{value:e(K.ink)},planetColor:{value:e(K.planet)},shadowTint:Zi.shadowTint,shadowLift:Zi.shadowLift,bandEdge:Zi.bandEdge,lightDir:Zi.lightDir,planetDir:{value:new H(...n).normalize()},time:{value:0}},vertexShader:SS,fragmentShader:wS,side:Kt,depthWrite:!1}),i=new ut(new an(MS,48,24),t);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){t.uniforms.time.value=r}return{mesh:i,update:s}}function Qt(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ut;l.morphTargetsRelative=a;let h=0;for(let c=0;c<n.length;++c){let d=n[c],u=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(t){let c=0,d=[];for(let u=0;u<n.length;++u){let p=n[u].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+c);c+=n[u].attributes.position.count}l.setIndex(d)}for(let c in r){let d=nm(r[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in o){let d=o[c][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let p=[];for(let g=0;g<o[c].length;++g)p.push(o[c][g][u]);let f=nm(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(f)}}}return l}function nm(n){let e,t,i,s=-1,r=0;for(let h=0;h<n.length;++h){let c=n[h];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}let o=new e(r),a=new Et(o,t,i),l=0;for(let h=0;h<n.length;++h){let c=n[h];if(c.isInterleavedBufferAttribute){let d=l/t;for(let u=0,p=c.count;u<p;u++)for(let f=0;f<t;f++){let g=c.getComponent(u,f);a.setComponent(u+d,f,g)}}else o.set(c.array,l);l+=c.count*t}return s!==void 0&&(a.gpuType=s),a}function sm(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],h=new Map,c=[],d=["getX","getY","getZ","getW"],u=e*.5,p=Math.log10(1/e),f=Math.pow(10,p),g=u*f;for(let x=0;x<r;x++){let _=i?i.getX(x):x,w="";for(let y=0,M=a.length;y<M;y++){let b=a[y],v=n.getAttribute(b),S=v.itemSize;for(let C=0;C<S;C++)w+=`${Math.trunc(v[d[C]](_)*f+g)},`}w in t?c.push(t[w]):(l.push(_),t[w]=o,c.push(o),o++)}let m=n.clone();for(let x in n.attributes)m.setAttribute(x,im(n.attributes[x],l,h));for(let x in n.morphAttributes)m.morphAttributes[x]=n.morphAttributes[x].map(_=>im(_,l,h));return m.setIndex(c),m}function im(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let h=0;h<e.length;h++)for(let c=0;c<r;c++)l[h*r+c]=s.array[e[h]*r+c];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function eo(n){let e=n>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function rm(n,e,t=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new H),l=o.getCenter(new H),h=a.length(),c=eo(e*7919+13>>>0),d=[];for(let x=0;x<8;x++)d.push(c()*2-1);let u=Math.min(t*h,i)*.99/Math.sqrt(3),p=(x,_)=>_>1e-9?2*x/_:0,f=[a.x,a.y,a.z].map(x=>x>1e-9?2/x:0),g=new at,m=new H;for(let x=0;x<s.count;x++){let _=p(s.getX(x)-l.x,a.x),w=p(s.getY(x)-l.y,a.y),y=p(s.getZ(x)-l.z,a.z),M=(w+1)/2,b=(d[0]*w+d[1]*_*w)/2,v=(d[2]*_+d[3]*y)/2*M,S=(d[4]*w+d[5]*y*w)/2;if(r){let C=[d[1]*w/2,(d[0]+d[1]*_)/2,0],A=[d[2]/2*M,(d[2]*_+d[3]*y)/2*.5,d[3]/2*M],I=[0,(d[4]+d[5]*y)/2,d[5]*w/2];g.set(1+u*C[0]*f[0],u*C[1]*f[1],u*C[2]*f[2],u*A[0]*f[0],1+u*A[1]*f[1],u*A[2]*f[2],u*I[0]*f[0],u*I[1]*f[1],1+u*I[2]*f[2]),g.invert().transpose(),m.set(r.getX(x),r.getY(x),r.getZ(x)).applyMatrix3(g).normalize(),r.setXYZ(x,m.x,m.y,m.z)}s.setXYZ(x,s.getX(x)+u*b,s.getY(x)+u*v,s.getZ(x)+u*S)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var bd=null;function TS(){return bd||(bd=zt({vertexColors:!0})),bd}var wd=(n,e,t)=>new it(n).lerp(new it(e),t),Td=(n,e=.3)=>wd(n,"#ffffff",e),qc=(n,e=.2)=>wd(n,K.shadowTint,e),om=new gt,am=new An,lm=new On,ES=new H,AS=new H;function _s(n=1,e=.02,t="prop"){let i=[],s=0;function r(c,d,u={}){let p=c.index?c.toNonIndexed():c;p.deleteAttribute("uv");let f=u.wonk===void 0?e:u.wonk;f>0&&rm(p,n*131+s,f),s++;let g=p.getAttribute("normal"),m=new Float32Array(g.count*3);for(let x=0;x<g.count;x++){let _=typeof d=="function"?d(g.getX(x),g.getY(x),g.getZ(x)):d;m[x*3]=_.r,m[x*3+1]=_.g,m[x*3+2]=_.b}return p.setAttribute("color",new Et(m,3)),(u.sx||u.sy||u.sz)&&p.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&p.applyMatrix4(u.m),lm.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),am.setFromEuler(lm),om.compose(ES.set(u.x||0,u.y||0,u.z||0),am,AS.set(1,1,1)),p.applyMatrix4(om),i.push(p),p}function o(c,d={}){let u=d.top||Td(c),p=d.side||qc(c,.22),f=qc(c,.4),g=new it(c);return(m,x,_)=>x>.5?u:x<-.5?f:Math.abs(m)>.5?p:_>0?g:f}function a(c,d,u,p,f={}){return r(new wt(c,d,u),o(p,f),f)}function l(c,d,u,p,f,g,m,x={}){return a(d-c,p-u,g-f,m,{...x,x:(c+d)/2,y:(u+p)/2,z:(f+g)/2})}function h(c=0){let d=Qt(i,!1);if(!d)throw new Error(`${t}: parts have different attributes and cannot be merged`);return c>0&&rm(d,n,c),fi(d)}return{add:r,box:a,span:l,facePaint:o,finish:h}}function ys(n){let e=new St,t=new ut(n,TS());return Pn(t),e.add(t),e}var Ki=n=>()=>new it(n);function $c({w:n,d:e,tile:t=1,colors:i=[K.cream,K.tealLight]}){let s=_s(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-e/2,e/2,K.lilac,{top:new it(K.lilac)});let o=Math.round(n/t),a=Math.round(e/t);for(let l=0;l<o;l++)for(let h=0;h<a;h++){let c=new fs(t,t);c.rotateX(-Math.PI/2),s.add(c,Ki(i[(l+h)%2]),{wonk:0,x:-n/2+(l+.5)*t,y:0,z:-e/2+(h+.5)*t})}return ys(s.finish())}function Ed({w:n,h:e,color:t=K.cream,stripe:i=K.hotPink,opening:s=null,seed:r=2}){let o=_s(r,0,"wall"),a=.2,l=a/2,h=-n/2,c=n/2,d=-.3,u=new Gr;if(u.moveTo(h,d),u.lineTo(c,d),u.lineTo(c,e),u.lineTo(h,e),u.closePath(),s){let x=new js,_=s.x-s.w/2,w=s.x+s.w/2;x.moveTo(_,s.y),x.lineTo(_,s.y+s.h),x.lineTo(w,s.y+s.h),x.lineTo(w,s.y),x.closePath(),u.holes.push(x)}let p=new Jo(u,{depth:a,bevelEnabled:!1});p.translate(0,0,-l),o.add(p,o.facePaint(t),{wonk:0}),o.span(h,c,d,.28,-l,l+.04,K.lilac),o.span(h-.05,c+.05,e-.1,e+.12,-l-.06,l+.08,K.teal);let f=.5,g=.8;return s&&s.y<g&&s.y+s.h>f?(o.span(h,s.x-s.w/2,f,g,l-.01,l+.03,i),o.span(s.x+s.w/2,c,f,g,l-.01,l+.03,i)):o.span(h,c,f,g,l-.01,l+.03,i),ys(o.finish(.006))}function RS(n,e,t,i){let s=m=>Math.min(2048,Math.max(64,Math.round(m))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),h='"Arial Black", Impact, sans-serif';l.font=`100px ${h}`;let c=n.split(" "),d=[[n]];for(let m=1;m<c.length;m++)d.push([c.slice(0,m).join(" "),c.slice(m).join(" ")]);let u=null;for(let m of d){let x=Math.max(...m.map(w=>l.measureText(w).width)),_=Math.min(r*.88*100/x,o*.8/(m.length*1.08));(!u||_>u.size)&&(u={lines:m,size:_})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=t,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${h}`,l.textAlign="center",l.textBaseline="middle";let p=u.size*1.08,f=o/2-(u.lines.length-1)*p/2;u.lines.forEach((m,x)=>{let _=f+x*p;l.fillStyle=K.ink,l.fillText(m,r/2+u.size*.05,_+u.size*.06),l.fillStyle=t,l.fillText(m,r/2,_)});let g=new Bo(a);return g.colorSpace=un,g.anisotropy=8,g}function Zc({text:n,w:e,h:t,bg:i=K.hotPink,fg:s=K.cream,tilt:r=.04,seed:o=3}){let h=_s(o,0,"sign");h.box(e,t,.14,s,{wonk:0});let c=ys(h.finish()),d=e-.14*2,u=t-.14*2,p=new ut(new fs(d,u),new bi({map:RS(n,i,s,d/u),toneMapped:!1}));return p.name="signFace",p.position.z=.14/2+.008,c.add(p),c.rotation.z=r,c}function cm({w:n,h:e,seed:t=4}){let i=_s(t,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,e,-r/2,r/2,K.teal),i.span(n/2-s,n/2,0,e,-r/2,r/2,K.teal),i.span(-n/2+s,n/2-s,e-s,e,-r/2,r/2,K.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,K.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,K.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,K.cream),i.span(-n/2+s,n/2-s,e/2-.04,e/2+.04,-.04,.04,K.cream),ys(i.finish(.006))}function pa(n,e,t,i,s,r){let o=new tr(.16,.05,8,20);n.add(o,Ki(K.planet),{wonk:.04,x:e,y:t,z:i,rx:-Math.PI/2+s,ry:r})}function hm({w:n,h:e,name:t,signColor:i=K.hotPink,seed:s=5}){let r=_s(s,.012,"shopFront"),o=.5,a=.5,l=e,h=e-1.4,c=wd(K.glorpPurple,K.ink,.7);r.span(-n/2+a,n/2-a,0,h,-o/2,-o/2+.1,c),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,K.lilac);for(let x of[-1,1]){let _=x*(n/2-a/2);r.span(_-a/2,_+a/2,0,h,-o/2,o/2,K.lilac),r.span(_-a/2-.04,_+a/2+.04,0,.3,-o/2,o/2+.04,K.teal)}r.span(-n/2,n/2,h,l,-o/2,o/2,K.teal);let d=n-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,K.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,K.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,K.cream),pa(r,-.9,1.01,.4,.1,.4),pa(r,-.2,1.01,.5,-.1,-.3),pa(r,.6,1.01,.38,.12,.9),pa(r,1.2,1.01,.52,0,.1);let u=10,p=(n-.1)/u,f=.42;for(let x=0;x<u;x++){let _=x%2?K.cream:i,w=-n/2+.05+(x+.5)*p;r.box(p,.08,.95,_,{x:w,y:h-.02,z:o/2+.35,rx:f,top:Td(_,.2)}),r.box(p,.22,.06,_,{x:w,y:h-.24,z:o/2+.8,rx:.1})}let g=ys(r.finish(.006)),m=Zc({text:t,w:n-.7,h:1.15,bg:i,fg:K.cream,seed:s+1});return m.position.set(0,h+.7,o/2+.01),g.add(m),g}function um({w:n=2,d:e=1,h:t=.9,color:i=K.teal,seed:s=7}={}){let r=_s(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-e/2+.03,e/2-.03,K.lilac),r.span(-n/2,n/2,.16,t-.08,-e/2,e/2,i),r.span(-n/2-.07,n/2+.07,t-.08,t,-e/2-.07,e/2+.07,K.cream);let o=4,a=(n-.3)/o;for(let h=0;h<o;h++){let c=h%2?K.cream:K.hotPink;r.box(a-.04,t-.45,.05,c,{x:-n/2+.15+(h+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,K.glorpPurple,{x:-.55,y:t+.14,z:-.1}),r.box(.3,.14,.04,K.gel,{x:-.55,y:t+.28,z:.07,rx:-.5,wonk:0}),pa(r,.45,t+.06,.05,.1,.5);let l=ys(r.finish(.006));return l.userData.footprint={w:n+.14,d:e+.14},l}function dm({w:n=1.8,seed:e=11}={}){let t=_s(e,.02,"bench"),i=.5;t.box(n,.1,i,K.lilac,{y:.46}),t.box(n,.42,.08,K.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])t.box(.1,.46,i-.06,K.teal,{x:r*(n/2-.2),y:.23}),t.box(.08,.5,.08,K.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=ys(t.finish(.006));return s.userData.footprint={w:n,d:i},s}function CS(n,e,t){let i=new wt(.035,n,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+t*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function fm({seed:n=21}={}){let e=_s(n,.02,"planter"),t=eo(n);e.add(new pn(.42,.32,.55,16),Ki(K.teal),{y:.275}),e.add(new pn(.47,.44,.12,16),Ki(K.hotPink),{y:.6}),e.add(new pn(.4,.4,.04,16),Ki(qc(K.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=qc(K.planet,.15);for(let l=0;l<6;l++)e.add(new pn(.06-l*.004,.07-l*.004,.34,8),Ki(l%2?Td(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let h=l/o*Math.PI*2+t()*.3,c=l%2?.95+t()*.25:1.45+t()*.25,d=new gt().makeTranslation(i,s,0).multiply(new gt().makeRotationY(h)).multiply(new gt().makeRotationZ(-c));e.add(CS(.95,.24,l%2?.22:.4),Ki(l%2?K.gel:K.teal),{m:d,wonk:.03})}e.add(new an(.1,10,8),Ki(K.planet),{x:i,y:s-.05,z:.08}),e.add(new an(.1,10,8),Ki(K.planet),{x:i+.07,y:s-.1,z:-.07});let a=ys(e.finish());return a.userData.footprint={w:.95,d:.95},a}var Sd=null;function Kc({rx:n,rz:e,opacity:t=.35}){let r=new it(K.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,t];for(let d=1;d<=8;d++){let u=d/8,p=t*(1-u*u*(3-2*u));for(let f=0;f<28;f++){let g=f/28*Math.PI*2;o.push(Math.cos(g)*n*u,0,Math.sin(g)*e*u),a.push(r.r,r.g,r.b,p)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,p=1+d*28;for(let f=0;f<28;f++){let g=(f+1)%28;l.push(u+f,u+g,p+f,u+g,p+g,p+f)}}let h=new Ut;h.setAttribute("position",new pt(o,3)),h.setAttribute("color",new pt(a,4)),h.setIndex(l),Sd||(Sd=new bi({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let c=new ut(h,Sd);return c.name="blobShadow",c.position.y=.012,c}var ma=8,Jc=ma/2,Ad=.2;function pm(){let n=new St;n.add($c({w:ma,d:ma}));let e=Ed({w:ma+Ad*2,h:4});e.position.set(0,0,-Jc-Ad/2),n.add(e);let t=1.3,i=hm({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:K.hotPink});i.position.set(t,0,-Jc+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=Ed({w:ma,h:4,color:"#f1e6ff",opening:s});r.position.set(-Jc-Ad/2,0,0),r.rotation.y=Math.PI/2;let o=cm({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=um({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=dm({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let h=fm({seed:21});h.position.set(-2.95,0,-2.9),n.add(a,l,h);let c=(d,u,p,f,g=0)=>{let m=Kc({rx:p,rz:f,opacity:.7});m.position.x=d,m.position.z=u,m.rotation.y=g,n.add(m)};return c(a.position.x,a.position.z,1.3,.95,a.rotation.y),c(l.position.x+.2,l.position.z,.6,1.2),c(h.position.x,h.position.z,.95,.95),c(t,-Jc+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function In(n,e,t,i){if(!(t>0)||!(i>0))return t>0||(n.x=e,n.v=0),n;let s=4*Math.LN2/t/2,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i),n}function Rd(n,e,t,i,s,r){let o=t+i,a=e[0]-n[0],l=e[1]-n[1],h=e[2]-n[2],c=Math.hypot(a,l,h);c<1e-9?(a=0,l=-1,h=0,c=0):(a/=c,l/=c,h/=c);let d=1.15*o,u=e[0],p=e[1],f=e[2];c>d&&(c=d,u=n[0]+a*c,p=n[1]+l*c,f=n[2]+h*c);let g=c>o?c/o:1;if(c>=o){let S=c*(o>0?t/o:.5);return mm(r,n[0]+a*S,n[1]+l*S,n[2]+h*S,u,p,f,g)}let m=Math.max(c,1e-6),x=Math.min(Math.max((m*m+t*t-i*i)/(2*m),-t),t),_=Math.sqrt(Math.max(t*t-x*x,0)),w=s[0],y=s[1],M=s[2],b=w*a+y*l+M*h;w-=a*b,y-=l*b,M-=h*b;let v=Math.hypot(w,y,M);return v<1e-6&&(Math.abs(a)<.9?(w=0,y=h,M=-l):(w=-h,y=0,M=a),v=Math.hypot(w,y,M)||1),w/=v,y/=v,M/=v,mm(r,n[0]+a*x+w*_,n[1]+l*x+y*_,n[2]+h*x+M*_,u,p,f,g)}function mm(n,e,t,i,s,r,o,a){if(!n)return{mid:[e,t,i],end:[s,r,o],stretch:a};let l=n.mid,h=n.end;return l[0]=e,l[1]=t,l[2]=i,h[0]=s,h[1]=r,h[2]=o,n.stretch=a,n}var gm=[.65,1.2];function Cd({radius:n=.06,rings:e=8,sides:t=8,color:i="#ffffff"}={}){let s=e+1,r=gm.length,o=s*t,a=[o,o+r*t+1],l=o+2*(r*t+1),h=[],c=(ae,J,_e)=>{for(let te=0;te<t;te++){let me=(te+1)%t,Te=ae+te,ze=ae+me,B=J+te,ge=J+me;_e?h.push(Te,B,ze,ze,B,ge):h.push(Te,ze,B,ze,ge,B)}};for(let ae=0;ae<e;ae++)c(ae*t,(ae+1)*t,!1);for(let ae=0;ae<2;ae++){let J=ae===0,_e=ae===0?0:e*t;for(let me=0;me<r;me++){let Te=a[ae]+me*t;c(_e,Te,J),_e=Te}let te=a[ae]+r*t;for(let me=0;me<t;me++){let Te=_e+me,ze=_e+(me+1)%t;J?h.push(Te,te,ze):h.push(Te,ze,te)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),p=new Ut,f=new Et(d,3),g=new Et(u,3);f.setUsage(Kr),g.setUsage(Kr),p.setAttribute("position",f),p.setAttribute("normal",g),p.setIndex(h);let m=new ut(p,zt({color:i}));m.name="limb";let x=new Jn(new H,n*2);p.boundingSphere=x,Pn(m);let _=new Float64Array(t),w=new Float64Array(t);for(let ae=0;ae<t;ae++)_[ae]=Math.cos(ae/t*Math.PI*2),w[ae]=Math.sin(ae/t*Math.PI*2);let y=0,M=-1,b=0,v=1,S=0,C=0,A=0,I=0,R=1,D=0,T=0,O=0,F=0,W=0,j=0,V=0,Y=0,G=0,he=0,ve=0,z=0,re=0,be=0,xe=0,ee=0,Ce=0,Ke=0;function Be(ae,J,_e,te,me,Te,ze,B,ge,Ae,Ve,se,Ze,Re,Pe,N){for(let E=0;E<t;E++){let Z=_[E]*Te+w[E]*ge,we=_[E]*ze+w[E]*Ae,pe=_[E]*B+w[E]*Ve,Ee=(ae+E)*3;d[Ee]=J+Z*me,d[Ee+1]=_e+we*me,d[Ee+2]=te+pe*me,u[Ee]=Z*Pe+se*N,u[Ee+1]=we*Pe+Ze*N,u[Ee+2]=pe*Pe+Re*N}}let Je=!1,ke=1,U=0,q=0;function Q(ae,J,_e,te=1){let me=n/Math.sqrt(te>1?te:1),Te=2*J[0]-(ae[0]+_e[0])/2,ze=2*J[1]-(ae[1]+_e[1])/2,B=2*J[2]-(ae[2]+_e[2])/2,ge=ae[0],Ae=ae[1],Ve=ae[2],se=_e[0],Ze=_e[1],Re=_e[2],Pe=(J[1]-Ae)*(Re-J[2])-(J[2]-Ve)*(Ze-J[1]),N=(J[2]-Ve)*(se-J[0])-(J[0]-ge)*(Re-J[2]),E=(J[0]-ge)*(Ze-J[1])-(J[1]-Ae)*(se-J[0]),Z=Math.hypot(Pe,N,E),we=J[0]-ge,pe=J[1]-Ae,Ee=J[2]-Ve,Le=Math.hypot(we,pe,Ee),de=se-J[0],fe=Ze-J[1],Ne=Re-J[2],k=!1;Z>1e-4*Le*Math.hypot(de,fe,Ne)&&Z>1e-12?(Pe/=Z,N/=Z,E/=Z,Je&&Pe*ke+N*U+E*q<0&&(Pe=-Pe,N=-N,E=-E),k=!0):Le>1e-9&&we*de+pe*fe+Ee*Ne<0&&(Te=(ge+se)/2,ze=(Ae+Ze)/2,B=(Ve+Re)/2);let ue=(ge+Te+se)/3,le=(Ae+ze+Ze)/3,De=(Ve+B+Re)/3,Ie=Math.max(Math.hypot(ge-ue,Ae-le,Ve-De),Math.hypot(Te-ue,ze-le,B-De),Math.hypot(se-ue,Ze-le,Re-De));x.center.set(ue,le,De),x.radius=Ie+n*1.5+.02;for(let Me=0;Me<s;Me++){let Se=Me/e,We=1-Se,ye=We*We,He=2*We*Se,Oe=Se*Se,Ue=ye*ge+He*Te+Oe*se,tt=ye*Ae+He*ze+Oe*Ze,ct=ye*Ve+He*B+Oe*Re,Pt=2*We*(Te-ge)+2*Se*(se-Te),Ft=2*We*(ze-Ae)+2*Se*(Ze-ze),It=2*We*(B-Ve)+2*Se*(Re-B),Bn=Math.hypot(Pt,Ft,It);if(Bn>1e-9?(y=Pt/Bn,M=Ft/Bn,b=It/Bn):Me===0&&(y=0,M=-1,b=0),Me===0){k?(v=Pe,S=N,C=E):Je?(v=ke,S=U,C=q):(v=1,S=0,C=0);let cn=v*y+S*M+C*b;v-=y*cn,S-=M*cn,C-=b*cn;let Dt=Math.hypot(v,S,C);Dt<1e-6&&(Math.abs(y)<.9?(v=0,S=b,C=-M):(v=-b,S=0,C=y),Dt=Math.hypot(v,S,C)||1),v/=Dt,S/=Dt,C/=Dt,ke=v,U=S,q=C,Je=!0}else{let cn=v*y+S*M+C*b;v-=y*cn,S-=M*cn,C-=b*cn;let Dt=Math.hypot(v,S,C);Dt<1e-6&&(Math.abs(y)<.9?(v=0,S=b,C=-M):(v=-b,S=0,C=y),Dt=Math.hypot(v,S,C)||1),v/=Dt,S/=Dt,C/=Dt}A=M*C-b*S,I=b*v-y*C,R=y*S-M*v,Be(Me*t,Ue,tt,ct,me,v,S,C,A,I,R,0,0,0,1,0),Me===0&&(D=y,T=M,O=b,F=v,W=S,j=C,V=A,Y=I,G=R),Me===s-1&&(he=y,ve=M,z=b,re=v,be=S,xe=C,ee=A,Ce=I,Ke=R)}for(let Me=0;Me<2;Me++){let Se=Me===0?-1:1,We=Me===0?ge:se,ye=Me===0?Ae:Ze,He=Me===0?Ve:Re,Oe=Me===0?D:he,Ue=Me===0?T:ve,tt=Me===0?O:z,ct=Me===0?F:re,Pt=Me===0?W:be,Ft=Me===0?j:xe,It=Me===0?V:ee,Bn=Me===0?Y:Ce,cn=Me===0?G:Ke,Dt=Oe*Se,Nn=Ue*Se,xi=tt*Se;for(let $=0;$<r;$++){let Fe=gm[$],st=Math.cos(Fe),Nt=Math.sin(Fe);Be(a[Me]+$*t,We+Dt*me*Nt,ye+Nn*me*Nt,He+xi*me*Nt,me*st,ct,Pt,Ft,It,Bn,cn,Dt,Nn,xi,st,Nt)}let si=(a[Me]+r*t)*3;d[si]=We+Dt*me,d[si+1]=ye+Nn*me,d[si+2]=He+xi*me,u[si]=Dt,u[si+1]=Nn,u[si+2]=xi}f.needsUpdate=!0,g.needsUpdate=!0}return{mesh:m,set:Q}}var lr=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),PS=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),jc=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Pd=.04,IS=9;function Qc(n,e){let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*Math.PI*2}function LS(n,e,t=[0,0]){return t[0]=.05*Math.sin(1.3*n+Qc(e,1))+.03*Math.sin(2.1*n+Qc(e,2)),t[1]=.04*Math.sin(1.7*n+Qc(e,3))+.02*Math.sin(2.6*n+Qc(e,4)),t}var DS=(n,e)=>Math.min(n*2,1)*Math.max(e,0),ga=16,xm=ga+1,Ei=11,Ms=4,eh=13,NS=.07,OS=n=>{let e=n<0?0:n>1?1:n;return e*e*(3-2*e)};function vm({eyeRadius:n=.1,eyeSpacing:e=.26,eyeY:t=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:h=K.ink,fixedSmile:c=0}={}){let d=n,u=e/2,p=[-u,u],f=.35,g=.035*d,m=d*.3,x=a==="uni",_=0,w=_+2*xm,y=w+16,M=y+2*Ei*Ms,b=M+2*Ei*2,v=b+(x?6:8),S=v+eh*2,C=[],A=ge=>C.push(ge,ge+1,ge+2,ge,ge+2,ge+3),I=(ge,Ae)=>{for(let Ve=0;Ve<Ae-1;Ve++){let se=ge+Ve*2;C.push(se,se+1,se+2,se+1,se+3,se+2)}};for(let ge=0;ge<2;ge++){let Ae=_+ge*xm;for(let Ve=0;Ve<ga;Ve++)C.push(Ae,Ae+1+Ve,Ae+1+(Ve+1)%ga)}for(let ge=0;ge<4;ge++)A(w+ge*4);for(let ge=0;ge<2;ge++){let Ae=y+ge*Ei*Ms;for(let Ve=0;Ve<Ei-1;Ve++)for(let se=0;se<Ms-1;se++){let Ze=Ae+Ve*Ms+se,Re=Ze+1,Pe=Ze+Ms,N=Pe+1;C.push(Ze,Re,Pe,Re,N,Pe)}I(M+ge*Ei*2,Ei)}x?C.push(b,b+1,b+2,b+1,b+3,b+2,b+2,b+3,b+4,b+3,b+5,b+4):(A(b),A(b+4)),I(v,eh);let R=[];for(let ge=0;ge<2;ge++){let Ae=new an(d,18,12);Ae.deleteAttribute("uv"),Ae.applyMatrix4(new gt().makeScale(1,1,f).setPosition(p[ge],t,i)),R.push(Ae)}let D=new ut(Qt(R,!1),zt({color:K.eyeWhite,shadowMix:.35,rim:0}));D.name="eyes",Pn(D,{px:2});let T=new Float32Array(S*3),O=new Float32Array(S*3),F=new Float32Array(S*3),W=new it(K.ink),j=new it(h);for(let ge=0;ge<S;ge++){O[ge*3+2]=1;let Ae=ge>=y&&ge<M?j:W;F[ge*3]=Ae.r,F[ge*3+1]=Ae.g,F[ge*3+2]=Ae.b}let V=new Ut,Y=new Et(T,3);Y.setUsage(Kr),V.setAttribute("position",Y),V.setAttribute("normal",new Et(O,3)),V.setAttribute("color",new Et(F,3)),V.setIndex(C);let G=t+d*3.5,he=s-r*1.5-d,ve=Math.max(u+2.5*d,r);V.boundingSphere=new Jn(new H(0,(G+he)/2,i),Math.hypot(ve,(G-he)/2,d*2));let z=zt({color:"#ffffff",vertexColors:!0,rim:0});z.side=Wn;let re=new ut(V,z);re.name="features";let be=new St;be.name="face",be.add(D,re);let xe=lr.neutral,ee=ge=>{let Ae=c>0?PS[ge]:0;return Ae>0?c*Ae:-1/0},Ce=ee("neutral"),Ke=ge=>ge==="mouthCurve"&&xe.mouthCurve<Ce?Ce:xe[ge],Be={};for(let ge of jc)Be[ge]={x:Ke(ge),v:0};let Je={x:0,v:0},ke={x:0,v:0},U=0,q=!1,Q=0,ae=[0,0],J=0;function _e(ge,Ae,Ve){let se=J*3;T[se]=ge,T[se+1]=Ae,T[se+2]=Ve,J++}function te(ge,Ae,Ve){let se=1-(ge*ge+Ae*Ae)/(d*d);return i+d*f*Math.sqrt(se>0?se:0)+Ve}function me(ge,Ae,Ve,se,Ze,Re){let Pe=-(se-Ae),N=Ve-ge,E=Math.hypot(Pe,N)||1;Pe=Pe/E*Ze/2,N=N/E*Ze/2,_e(ge+Pe,Ae+N,Re),_e(Ve+Pe,se+N,Re),_e(Ve-Pe,se-N,Re),_e(ge-Pe,Ae-N,Re)}let Te=d*1.03;function ze(){let ge=Be,Ae=ge.pupilScale.x*(1-Je.x),Ve=Je.x,se=Math.min(Math.max(ge.lid.x,0),.95),Ze=ge.browAngle.x,Re=se>.005,Pe=Te-2*Te*se,N=Ze*.6*Math.min(se*4,1),E=d*NS*Math.min(se*10,1);J=_;for(let Se=0;Se<2;Se++){let We=Se===0?-1:1;LS(Q,l+Se*7.31,ae);let ye=d*.5*(Ae>0?Ae:0),He=ae[0]*d,Oe=ae[1]*d;if(Re){let tt=Pe+N*We*He-Math.abs(N)*ye-E-(Oe+ye);if(tt>0){let ct=Math.min(Math.max((tt-.1*d)/(.1*d),0),1);Oe+=tt*(1-OS(ct))}}_e(p[Se]+He,t+Oe,te(He,Oe,g));for(let Ue=0;Ue<ga;Ue++){let tt=Ue/ga*Math.PI*2,ct=He+Math.cos(tt)*ye,Pt=Oe+Math.sin(tt)*ye;_e(p[Se]+ct,t+Pt,te(ct,Pt,g))}}J=w;for(let Se=0;Se<2;Se++){let We=d*.55*Ve,ye=te(0,0,g),He=d*.26*Ve;me(p[Se]-We,t-We,p[Se]+We,t+We,He,ye),me(p[Se]-We,t+We,p[Se]+We,t-We,He,ye)}for(let Se=0;Se<2;Se++){let We=Se===0?-1:1;for(let ye=0;ye<2;ye++){J=ye===0?y+Se*Ei*Ms:M+Se*Ei*2;for(let He=0;He<Ei;He++){let Oe=(He/(Ei-1)*2-1)*(Math.PI/2),Ue=Te*Math.sin(Oe),tt=Te*Math.cos(Oe),ct=Re?Pe+N*Ue:tt;ct>tt&&(ct=tt),ct<-tt&&(ct=-tt);let Pt=We*Ue;if(ye===0)for(let Ft=0;Ft<Ms;Ft++){let It=tt+(ct-tt)*(Ft/(Ms-1));_e(p[Se]+Pt,t+It,te(Pt,It*.97,g*3))}else{let Ft=ct+(Re?d*.02:0);Ft>tt&&(Ft=tt);let It=ct-E;It<-tt&&(It=-tt),_e(p[Se]+Pt,t+Ft,te(Pt,Ft*.97,g*3.5)),_e(p[Se]+Pt,t+It,te(Pt,It*.97,g*3.5))}}}}J=b;let Z=d*.9,we=t+d*(1.4+ge.browY.x),pe=Math.cos(Ze),Ee=Math.sin(Ze),Le=i+d*.15;if(x){let Se=u+Z*pe,We=we+Z*Ee,ye=we-Ee/(pe>.3?pe:.3)*u,He=-(ye-We),Oe=Se,Ue=Math.hypot(He,Oe)||1;He/=Ue,Oe/=Ue;let tt=-(We-ye),ct=Se,Pt=Math.hypot(tt,ct)||1;tt/=Pt,ct/=Pt;let Ft=He+tt,It=Oe+ct,Bn=Math.hypot(Ft,It)||1;Ft/=Bn,It/=Bn;let cn=Ft*He+It*Oe,Dt=m/2/(cn>.4?cn:.4);_e(-Se+He*m/2,We+Oe*m/2,Le),_e(-Se-He*m/2,We-Oe*m/2,Le),_e(Ft*Dt,ye+It*Dt,Le),_e(-Ft*Dt,ye-It*Dt,Le),_e(Se+tt*m/2,We+ct*m/2,Le),_e(Se-tt*m/2,We-ct*m/2,Le)}else for(let Se=0;Se<2;Se++){let We=Se===0?-1:1;me(p[Se]-We*Z*pe,we-Z*Ee,p[Se]+We*Z*pe,we+Z*Ee,m,Le)}J=v;let de=ge.mouthOpen.x+ke.x*(.55+.45*Math.sin((Q+l*.37)*IS*Math.PI*2))*.8,fe=de>0?de<1.2?de:1.2:0,Ne=-ge.mouthCurve.x/.5,k=(Ne>1?1:Ne>0?Ne:0)*(fe<.4?fe/.4:1),ue=r/2*(1-.35*(fe<1?fe:1)*(1-.7*k)),le=DS(ge.lid.x,ge.mouthCurve.x),De=ge.mouthCurve.x*ue*.5*(1-.4*le)*(1+.6*k),Ie=.55+.5*k,Me=fe*ue*.9;for(let Se=0;Se<eh;Se++){let We=Se/(eh-1)*2-1,ye=1-We*We,He=We*ue*(1-.25*le)+le*ue*.2,Oe=s-De*ye+le*ue*.45*We+Je.x*m*.6*Math.sin(We*Math.PI*3);_e(He,Oe,o),_e(He,Oe-m-Me*Math.pow(ye,Ie)+De*ye*k,o)}Y.needsUpdate=!0}function B(ge){Q+=ge;for(let Ae=0;Ae<jc.length;Ae++)In(Be[jc[Ae]],Ke(jc[Ae]),Pd,ge);In(Je,U,Pd,ge),In(ke,q?1:0,Pd,ge),ze()}return ze(),{group:be,setExpression(ge){xe=Object.prototype.hasOwnProperty.call(lr,ge)?lr[ge]:lr.neutral,U=ge==="dead"?1:0,Ce=ee(Object.prototype.hasOwnProperty.call(lr,ge)?ge:"neutral")},setTalking(ge){q=!!ge},update:B}}var Ln=Math.PI*2,xa=["handL","handR","footL","footR"];function Ri(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function _m(n,e){e.hipsY=n.hipsY,e.lean=n.lean,e.twist=n.twist,e.headYaw=n.headYaw,e.headPitch=n.headPitch,e.squash=n.squash,e.elbows=n.elbows;for(let t=0;t<4;t++){let i=n[xa[t]],s=e[xa[t]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function va(n,e,t,i=[0,0,0]){let s=t[0],r=t[1]-n.hipHeight,o=t[2],a=Math.cos(e.lean),l=Math.sin(e.lean),h=Math.cos(e.twist),c=Math.sin(e.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*h+u*c,i[1]=d+e.hipsY,i[2]=-s*c+u*h,i}var US=n=>n<0?0:n>1?1:n,Ai=(n,e,t)=>{let i=US((t-n)/(e-n));return i*i*(3-2*i)},cr=(n,e,t,i,s)=>Ai(e,t,n)*(1-Ai(i,s,n));function Mt(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}var th=[0,0,0];function Qn(n,e,t,i,s,r){return th[0]=t,th[1]=i,th[2]=s,va(n,e,th,r)}var nh={sx:0,sy:0,fx:0};function wn(n){return nh.sx=Math.abs(n.shoulderL[0]),nh.sy=n.shoulderL[1],nh.fx=Math.abs(n.hipL[0])+.035,nh}var no=(n,e)=>e>0?n.handL:n.handR;function Id(n,e,t,i,s){return Qn(n,e,s*(t.sx+.16),n.hipHeight+0,.1,i)}var Ld=.55;function ah(n,e,t){let i=wn(e),s=n/ht.idle.duration,r=Ln*s,o=e.hipHeight,a=cr(s,.42,.52,.72,.86);return t.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),t.lean=.03+.015*Math.sin(r+.4),t.twist=.05*Math.sin(r+.6),t.headYaw=.03*Math.sin(r)+.3*a,t.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,t.squash=1+.008*Math.sin(r),t.elbows=Ld,Id(e,t,i,t.handL,1),Id(e,t,i,t.handR,-1),t.handL[1]+=.008*Math.sin(r-.5),t.handR[1]+=.008*Math.sin(r+.4),t.handL[2]+=.01*Math.sin(r+1.1),t.handR[2]+=.01*Math.sin(r-.7),Mt(t.footL,i.fx,0,.015),Mt(t.footR,-i.fx,0,-.015),t}var Ji=.34,Dd=.25,bm=-.33,FS=.4,kS=.37,BS=.035,oh=(Dd-bm)/Ji;function ym(n,e){if(n<Ji)return e[0]=0,e[1]=Dd-oh*n,e;let t=(n-Ji)/(1-Ji),i=-oh*(1-Ji),s=-.35*oh*(1-Ji),r=t*t,o=r*t;return e[1]=(2*o-3*r+1)*bm+(o-2*r+t)*i+(-2*o+3*r)*Dd+(o-r)*s,e[0]=FS*Math.sin(Math.PI*Math.pow(t,.8)),e}var ln=[0,0];function Sm(n,e,t){let i=wn(e),s=n/ht.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*Ln*(r-(Ji+.5)/2);t.hipsY=o-.06+BS*Math.cos(a),t.squash=1+.045*Math.cos(2*Ln*(r-Ji-.03)),t.lean=kS+.03*Math.cos(2*Ln*(r-Ji));let l=Math.cos(Ln*(r+.03));t.twist=.2*l,t.headYaw=-.15*l,t.headPitch=-.28+.04*Math.cos(a),t.elbows=0,ym(r,ln),Mt(t.footL,i.fx*.75,ln[0],ln[1]),ym(r<.5?r+.5:r-.5,ln),Mt(t.footR,-i.fx*.75,ln[0],ln[1]);for(let h=-1;h<=1;h+=2){let c=(1-h*l)/2;Qn(e,t,h*(i.sx+.13-.1*c+.12*Math.sin(Math.PI*c)),i.sy-.34+.28*c+.05*Math.sin(Math.PI*c),-.14+.46*c,no(t,h))}return t}function wm(n,e,t){let i=wn(e),s=Ln*n/ht.aim.duration,r=e.hipHeight;t.hipsY=r-.05+.005*Math.sin(s),t.lean=.12+.01*Math.sin(s),t.twist=-.1,t.headYaw=.08,t.headPitch=.04+.012*Math.sin(2*s),t.squash=1,t.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Mt(t.handL,i.sx*1.2+o,i.sy-.12+a,.56),Mt(t.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Mt(t.footL,i.fx+.02,0,.15),Mt(t.footR,-i.fx-.03,0,-.13),t}var Nd=.35;function zS(n){return n<.06?Ai(0,.06,n):Math.exp(-9*(n-.06))*(1-Ai(.24,Nd,n))}function HS(n){if(n<.07)return Ai(0,.07,n);let e=n-.07;return Math.exp(-11*e)*Math.cos(Ln*e/.22)*(1-Ai(.26,Nd,n))}function GS(n,e,t){let i=wn(e),s=e.hipHeight,r=zS(n);t.hipsY=s-.012-.05*r,t.lean=.03-.4*r,t.twist=.12*r,t.headYaw=-.12*r,t.headPitch=-.02-.32*r,t.squash=1-.15*HS(n),t.elbows=Ld+(1-Ld)*r;for(let o=-1;o<=1;o+=2){let a=no(t,o);Id(e,t,i,a,o);let l=a[0],h=a[1],c=a[2];Qn(e,t,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=h+(a[1]-h)*r,a[2]=c+(a[2]-c)*r}return Mt(t.footL,i.fx,0,.015),Mt(t.footR,-i.fx,0,-.015),t}var bs=[0,0,0];function VS(n,e,t){ah(n,e,t);let i=wn(e),s=n/ht.talk.duration,r=Ln*s,o=cr(s,.04,.17,.4,.55),a=cr(s,.5,.63,.8,.95),l=Math.sin(3*r);t.headPitch+=.05*Math.sin(4*r)-.04*(o+a),t.headYaw+=-.12*o+.12*a,t.elbows+=(.85-t.elbows)*Math.max(o,a),Qn(e,t,-(i.sx+.19),i.sy-.1+.03*l,.36,bs);for(let h=0;h<3;h++)t.handR[h]+=(bs[h]-t.handR[h])*o;Qn(e,t,i.sx+.19,i.sy-.12-.03*l,.34,bs);for(let h=0;h<3;h++)t.handL[h]+=(bs[h]-t.handL[h])*a;return t}var Un=Ri();function WS(n,e,t){let i=n/ht.roll.duration,s=cr(i,0,.15,.75,1),r=wn(e);ah(0,e,Un);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Un.hipsY,.45),t.lean=o(Un.lean,1.3),t.twist=0,t.headYaw=0,t.headPitch=o(Un.headPitch,.35),t.squash=o(1,.9),t.elbows=1;for(let a=-1;a<=1;a+=2){let l=no(t,a),h=no(Un,a);l[0]=o(h[0],a*(r.sx+.2)),l[1]=o(h[1],.2),l[2]=o(h[2],.3);let c=a>0?t.footL:t.footR,d=a>0?Un.footL:Un.footR;c[0]=o(d[0],a*r.fx),c[1]=o(d[1],.18),c[2]=o(d[2],-.05)}return t}function XS(n,e,t){return Sm(n,e,t),t.hipsY-=.12,t.lean+=.15,t}var YS=.25,qS=.85,$S=.82;function Tm(n,e,t){let i=wn(e),s=Ln*n/ht.coverLow.duration;return t.hipsY=YS+.006*Math.sin(s),t.lean=qS+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=-.55+.03*Math.sin(2*s+1),t.squash=$S,t.elbows=1,Mt(t.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Mt(t.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Mt(t.footL,i.fx+.08,0,.12),Mt(t.footR,-i.fx-.08,0,.12),t}function Em(n,e,t,i){let s=wn(n),r=i/ht[t].duration,o=Math.sin(Ln*r);return e.hipsY+=.012*Math.cos(2*Ln*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function ZS(n,e,t){return Tm(0,e,t),Em(e,t,"coverLowMove",n),t}function Od(n,e,t){let i=wn(e),s=Ln*n/ht.coverTall.duration;return t.hipsY=e.hipHeight-.012+.006*Math.sin(s),t.lean=.07+.01*Math.sin(s+.4),t.twist=.02*Math.sin(s+.6),t.headYaw=.05*Math.sin(s),t.headPitch=0+.02*Math.sin(2*s+1),t.squash=1+.006*Math.sin(s),t.elbows=1,Qn(e,t,i.sx+.14,i.sy+0,.31,t.handL),Qn(e,t,-i.sx-.14,i.sy+0,.31,t.handR),Mt(t.footL,i.fx,0,.015),Mt(t.footR,-i.fx,0,-.015),t}function KS(n,e,t){return Od(0,e,t),Em(e,t,"coverTallMove",n),t}function JS(n,e,t){return wm(n*(ht.aim.duration/ht.coverPop.duration),e,t),t.hipsY-=.07,t.lean+=.06,t.footL[2]+=.04,t.footR[2]-=.04,t.footL[0]+=.04,t.footR[0]-=.04,t}function jS(n,e,t){let i=n/ht.vault.duration,s=cr(i,0,.3,.7,1),r=wn(e);ah(0,e,Un);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Un.hipsY,e.hipHeight-.02),t.lean=o(Un.lean,.55),t.twist=0,t.headYaw=0,t.headPitch=o(Un.headPitch,-.25),t.squash=1,t.elbows=1;for(let a=-1;a<=1;a+=2){let l=no(t,a),h=no(Un,a);l[0]=o(h[0],a*(r.sx+.14)),l[1]=o(h[1],.7),l[2]=o(h[2],.62);let c=a>0?t.footL:t.footR,d=a>0?Un.footL:Un.footR;c[0]=o(d[0],a*(r.fx+.04)),c[1]=o(d[1],.55),c[2]=o(d[2],.3)}return t}var QS=.17,ew=.5,tw=-.9,nw=.82;function iw(n,e,t){let i=wn(e),s=Ln*n/ht.coverBlindLow.duration;return t.hipsY=QS+.006*Math.sin(s),t.lean=ew+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=tw+.03*Math.sin(2*s+1),t.squash=nw,t.elbows=1,va(e,t,e.shoulderR,bs),Mt(t.handR,bs[0]-.02,bs[1]+.44+.008*Math.sin(s+.4),bs[2]+.12),Mt(t.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Mt(t.footL,i.fx+.08,0,.12),Mt(t.footR,-i.fx-.08,0,.12),t}function Mm(n,e,t,i){Od(n*(ht.coverTall.duration/ht.coverBlindTallL.duration),e,t);let s=wn(e);return Qn(e,t,i*(s.sx+.4),s.sy,.2,i>0?t.handL:t.handR),t}var sw=.3,rw=1.2,ih=[.4,.62],sh=[-.6,-.36];function rh(n,e,t,i,s,r){if(n-=Math.floor(n),n<.5)return r[0]=s,r[1]=e+(t-e)*(n/.5),r;let o=(n-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=t+(e-t)*(o*o*(3-2*o)),r}function ow(n,e,t){let i=wn(e),s=n/ht.crawl.duration,r=Ln*s;return t.hipsY=sw+.012*Math.cos(2*r),t.lean=rw+.03*Math.cos(2*r),t.twist=.1*Math.sin(r),t.headYaw=-.1*Math.sin(r),t.headPitch=-.75,t.squash=1,t.elbows=1,rh(s,ih[1],ih[0],.16,.04,ln),Mt(t.handL,i.sx+.12,ln[0],ln[1]),rh(s+.5,ih[1],ih[0],.16,.04,ln),Mt(t.handR,-i.sx-.12,ln[0],ln[1]),rh(s,sh[1],sh[0],.16,0,ln),Mt(t.footR,-i.fx-.02,ln[0],ln[1]),rh(s+.5,sh[1],sh[0],.16,0,ln),Mt(t.footL,i.fx+.02,ln[0],ln[1]),t}function to(n,e,t){let i=e.length;if(n<=e[0][0])return Mt(t,e[0][1],e[0][2],e[0][3]);for(let r=0;r<i-1;r++){let o=e[r],a=e[r+1];if(n<a[0]){let l=Ai(o[0],a[0],n);return Mt(t,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l,o[3]+(a[3]-o[3])*l)}}let s=e[i-1];return Mt(t,s[1],s[2],s[3])}var aw=.4,lw=.9;function cw(n,e,t){let i=wn(e),s=n/ht.revive.duration,r=Ln*s;return t.hipsY=aw+.012*Math.sin(2*r),t.lean=lw+.05*Math.sin(2*r),t.twist=.04*Math.sin(r),t.headYaw=.04*Math.sin(r),t.headPitch=-.55,t.squash=1,t.elbows=1,Mt(t.handL,i.sx-.06,.37-.06*Math.sin(r),.64),Mt(t.handR,-i.sx+.06,.37+.06*Math.sin(r),.64),Mt(t.footL,i.fx+.06,0,-.32),Mt(t.footR,-i.fx-.06,0,-.32),t}var hw=[[0,-.3,1,.3],[.17,-.29,1.08,.08],[.33,-.23,1.17,.5],[.55,-.23,1.17,.5],[1,-.3,1,.3]],uw=[[0,.1,0,0],[.17,-.05,0,0],[.33,.15,0,0],[.55,.15,0,0],[1,.1,0,0]],dw=[[0,0,0,0],[.17,-.3,0,0],[.33,.3,0,0],[.55,.25,0,0],[1,0,0,0]],Sn=[0,0,0];function fw(n,e,t){let i=wn(e),s=n/ht.bash.duration;return to(s,uw,Sn),t.lean=Sn[0],to(s,dw,Sn),t.twist=Sn[0],t.hipsY=e.hipHeight-.09-.03*cr(s,.2,.33,.55,.9),t.headYaw=-.5*t.twist,t.headPitch=-.1,t.squash=1,t.elbows=1,to(s,hw,Sn),Qn(e,t,Sn[0],Sn[1],Sn[2],t.handR),Qn(e,t,i.sx+.14,i.sy-.1,.32,t.handL),Mt(t.footL,i.fx+.04,0,-.14),Mt(t.footR,-i.fx-.04,0,.2),t}var pw=[[0,-.3,1,.3],[.3,-.31,1.38,-.12],[.4,-.22,1.6,.04],[.6,-.2,1.22,.5],[.9,-.15,.98,.46],[1,-.3,1,.3]],mw=[[0,.1,0,0],[.3,-.2,0,0],[.4,-.28,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,.1,0,0]],gw=[[0,-.1,0,0],[.3,-.45,0,0],[.4,-.45,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,-.1,0,0]];function xw(n,e,t){let i=wn(e),s=n/ht.throw.duration;return to(s,mw,Sn),t.lean=Sn[0],to(s,gw,Sn),t.twist=Sn[0],t.hipsY=e.hipHeight-.07-.03*cr(s,.4,.6,.9,1),t.headYaw=-.4*t.twist,t.headPitch=-.05,t.squash=1,t.elbows=1,to(s,pw,Sn),Qn(e,t,Sn[0],Sn[1],Sn[2],t.handR),Qn(e,t,i.sx+.2,i.sy-.12-.08*Ai(.5,.9,s),.34-.12*Ai(.5,.9,s),t.handL),Mt(t.footL,i.fx+.04,0,.1+.06*Ai(.4,.7,s)),Mt(t.footR,-i.fx-.04,0,-.16),t}var vw=.05;function Zt(n,e,t,i=vw){return Object.freeze({duration:n,loop:e,ease:i,sample:(s,r,o=Ri())=>t(s,r,o)})}var ht=Object.freeze({idle:Zt(2.4,!0,ah),run:Zt(.56,!0,Sm,.008),aim:Zt(1.6,!0,wm),flinch:Zt(Nd,!1,GS),talk:Zt(2.4,!0,VS),roll:Zt(.55,!1,WS,.02),sprint:Zt(.56,!0,XS,.008),coverLow:Zt(2.4,!0,Tm),coverLowMove:Zt(.5,!0,ZS),coverTall:Zt(2.4,!0,Od),coverTallMove:Zt(.5,!0,KS),coverPop:Zt(1.6,!0,JS),vault:Zt(.5,!1,jS,.02),coverBlindLow:Zt(1.6,!0,iw),coverBlindTallL:Zt(1.6,!0,(n,e,t)=>Mm(n,e,t,1)),coverBlindTallR:Zt(1.6,!0,(n,e,t)=>Mm(n,e,t,-1)),crawl:Zt(1,!0,ow),revive:Zt(.5,!0,cw),bash:Zt(.45,!1,fw,.02),throw:Zt(.5,!1,xw,.02)}),Ss=oh/ht.run.duration;function _a(n,e,t,i){let s=Object.prototype.hasOwnProperty.call(ht,n)?ht[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,t,i||Ri())}function lh(n,e,t,i=Ri()){if(!(t>0))return _m(n,i);if(t>=1)return _m(e,i);let s=1-t;i.hipsY=n.hipsY*s+e.hipsY*t,i.lean=n.lean*s+e.lean*t,i.twist=n.twist*s+e.twist*t,i.headYaw=n.headYaw*s+e.headYaw*t,i.headPitch=n.headPitch*s+e.headPitch*t,i.squash=n.squash*s+e.squash*t,i.elbows=n.elbows*s+e.elbows*t;for(let r=0;r<4;r++){let o=n[xa[r]],a=e[xa[r]],l=i[xa[r]];l[0]=o[0]*s+a[0]*t,l[1]=o[1]*s+a[1]*t,l[2]=o[2]*s+a[2]*t}return i}var _w=.05,ji=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],ya=["handL","handR","footL","footR"],Ud=ji.length+ya.length*3,io=[.35,-.2,-.8],Fd=[.75,-.85,-.15];function Xt(n,e){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let t=new it(e),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new Et(s,3)),n}var yw=new gt,ei=(n,e,t,i,s=0,r=0,o=0,a=1,l=1,h=1)=>n.applyMatrix4(yw.compose(new H(e,t,i),new An().setFromEuler(new On(s,r,o)),new H(a,l,h)));function hr(n=20,e=14){let t=new an(1,n,e);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),sm(t)}function kd(n,e,t){let i=hr(e,t),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function hh(n,e,t){let i=e[0]-n[0],s=e[1]-n[1],r=e[2]-n[2],o=Math.hypot(i,s,r),a=new pn(t,t,o,6,1),l=new An().setFromUnitVectors(new H(0,1,0),new H(i/o,s/o,r/o));return a.applyMatrix4(new gt().compose(new H((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),l,new H(1,1,1))),a}function uh(n,e){let t=Qt(n,!1);if(!t)throw new Error(`rig: could not merge the ${e} parts`);fi(t),t.computeBoundingSphere();let i=new ut(t,zt({color:"#ffffff",vertexColors:!0}));return i.name=e,Pn(i),i}function Bd(n,e,t,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*n.rx,s[1]=o(t)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function Mw(n){let e=n.torso,t=n.colors,i=n.outfit,s=(c,d)=>{let u=new jo(c.map(([p,f])=>new Ge(p,f)),22);return u.scale(1,1,e.depth),Xt(u,d)},r=[s(e.pants,t.pants),s(e.shirt,t.shirt)],o=e.shirt[e.shirt.length-2][1],a=c=>{let d=e.shirt;for(let u=1;u<d.length;u++)if(c<=d[u][1]){let p=(c-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*p}return 0},l=(c,d)=>{let u=a(d);return e.depth*u*Math.sqrt(Math.max(1-c*c/(u*u),0))},h=n.shoulderL[1]-n.hipHeight;for(let c of[-1,1]){let d=hr(14,10);ei(d,c*Math.abs(n.shoulderL[0])*.97,h-.01,0,0,0,c*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),d.computeVertexNormals(),r.push(Xt(d,t.shirt))}if(i.collar){let c=new tr(.1,.03,8,20);ei(c,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Xt(c,t.collar))}if(i.logo){let u=new pn(.03,.03,.01,12);ei(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Xt(u,t.logo))}if(i.lanyard){let d=l(0,.15)+.012;for(let f of[-1,1]){let g=[f*.075,o-.03,.085],m=[f*.05,.34,l(.05,.34)+.014],x=[f*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Xt(hh(g,m,.008),t.lanyard),Xt(hh(m,x,.008),t.lanyard))}let u=new wt(.075,.1,.014);ei(u,0,.15,d,-.05,0,.04);let p=new wt(.077,.026,.016);ei(p,0,.15+.028,d,-.05,0,.04),r.push(Xt(u,t.badge),Xt(p,t.badgeStripe))}return uh(r,"torso")}function bw(n){let e=n.head,t=n.hair,i=n.colors,s=n.outfit,r=[],o=kd((a,l,h,c)=>Bd(e,a,l,h,c),40,28);r.push(Xt(o,i.skin),Xt(Sw(e,t),i.hair));for(let a of[-1,1]){let l=hr(12,8);ei(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(Xt(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,h=hr(12,8);ei(h,0,l,ww(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),h.computeVertexNormals(),r.push(Xt(h,i.skin))}if(s.headset){let a=e.ry+t.thickness+.03,l=new Cn;l.getPoint=(g,m=new H)=>m.set(Math.cos(Math.PI*g)*(e.rx+t.thickness+.012),Math.sin(Math.PI*g)*a,0);let h=new Qo(l,24,.014,6,!1);ei(h,0,0,-.03,-.12,0,0),r.push(Xt(h,i.headset));for(let g of[-1,1]){let m=new pn(.055,.06,.05,14);ei(m,g*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Xt(m,i.headset))}let c=n.face,d=[e.rx+.035,-.04,0],u=[e.rx+.005,c.mouthY+.01,.13],p=[c.mouthWidth/2+.06,c.mouthY-.02,c.mouthZ+.025];r.push(Xt(hh(d,u,.009),i.headset),Xt(hh(u,p,.009),i.headset));let f=hr(10,8);ei(f,p[0],p[1],p[2],0,0,0,.022,.02,.022),f.computeVertexNormals(),r.push(Xt(f,i.mic))}return uh(r,"headMesh")}var ws=48,ch=12;function Sw(n,e){let t=(u,p)=>.04+.17*p+.025*Math.max(p,0)*u,i=[0,0,0],s=Uc.smoothstep,r=[],o=(u,p,f)=>{let g=Math.sin(u)*Math.sin(p),m=Math.cos(u),x=Math.sin(u)*Math.cos(p);Bd(n,g,m,x,i);let _=i[0]/(n.rx*n.rx),w=i[1]/(n.ry*n.ry),y=i[2]/(n.rz*n.rz),M=Math.hypot(_,w,y)||1;_/=M,w/=M,y/=M;let b=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(x+.3,0),v=e.quiff?e.lift*Math.max(x,0)*s(i[1],.12,.26)*(1-.5*g):0,S=e.back*Math.max(-x,0)*s(i[1],-.15,.1),C=f?-.01:e.thickness*(1-.55*Math.min(b,1))+v+S;r.push(i[0]+_*C,i[1]+w*C,i[2]+y*C)},a=u=>{let p=0,f=Math.PI;for(let g=0;g<40;g++){let m=(p+f)/2,x=Math.sin(m)*Math.sin(u),_=Math.sin(m)*Math.cos(u);Bd(n,x,Math.cos(m),_,i),i[1]>t(x,_)?p=m:f=m}return p};o(0,0,!1);let l=[];for(let u=0;u<ws;u++)l.push(a(u/ws*Math.PI*2));for(let u=1;u<=ch+1;u++)for(let p=0;p<ws;p++){let f=p/ws*Math.PI*2,g=u>ch;o(g?l[p]+.03:l[p]*(u/ch),f,g)}let h=(u,p)=>1+(u-1)*ws+p%ws,c=[];for(let u=0;u<ws;u++)c.push(0,h(1,u),h(1,u+1));for(let u=1;u<=ch;u++)for(let p=0;p<ws;p++){let f=h(u,p),g=h(u,p+1),m=h(u+1,p),x=h(u+1,p+1);c.push(f,m,x,f,x,g)}let d=new Ut;return d.setAttribute("position",new pt(r,3)),d.setIndex(c),d.computeVertexNormals(),d}function ww(n,e,t){let i=1-Math.pow(Math.abs(e/n.rx),n.power)-Math.pow(Math.abs(t/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function Am(n,e){let t=n.hand.radius,i=n.colors,s=hr(14,10);ei(s,0,t*.75,0,0,0,0,t*.78,t*1.1,t*.95),s.computeVertexNormals();let r=hr(10,8);return ei(r,t*.3,t*.45,e*t*.75,e*-.6,0,.3,t*.34,t*.55,t*.34),r.computeVertexNormals(),uh([Xt(s,i.skin),Xt(r,i.skin)],e>0?"handL":"handR")}function Rm(n,e){let t=n.shoe,i=n.colors,s=t.width/2,r=t.length/2,o=t.length*.18,a=.03,l=kd((c,d,u,p)=>{p[0]=c*s*(u>0?1:.9),p[1]=Math.max(a*.8,t.height*.55+d*t.height*.6-Math.max(u,0)*t.height*.25),p[2]=o+u*r*.96},20,12),h=kd((c,d,u,p)=>{p[0]=c*(s+.008),p[1]=Math.min(Math.max(a*.5+d*a,0),a),p[2]=o+u*(r+.008)},20,6);return uh([Xt(l,i.shoe),Xt(h,i.sole)],e>0?"footL":"footR")}function Ts(n){let e=new St;e.name=n.name||"character";let t=new St;t.name="body",e.add(t);let i=new St;i.name="hips",i.rotation.order="YXZ";let s=Mw(n);i.add(s);let r=new St;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=bw(n);o.position.y=n.head.centerY,r.add(o);let a=vm({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),t.add(i);let l=[Am(n,1),Am(n,-1)],h=[Rm(n,1),Rm(n,-1)],c=[0,1].map(()=>Cd({radius:n.armRadius,color:n.colors.skin})),d=[0,1].map(()=>Cd({radius:n.legRadius,color:n.colors.pants}));c[0].mesh.name="armL",c[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",t.add(...l,...h,c[0].mesh,c[1].mesh,d[0].mesh,d[1].mesh);let u=Kc({rx:.45,rz:.38,opacity:.55});e.add(u);let p=Ri(),f=Ri(),g=[];for(let G=0;G<Ud;G++)g.push({x:0,v:0});let m=!1,x=_w,_=(G,he)=>he<ji.length?G[ji[he]]:G[ya[(he-ji.length)/3|0]][(he-ji.length)%3];function w(G,he,ve){he<ji.length?G[ji[he]]=ve:G[ya[(he-ji.length)/3|0]][(he-ji.length)%3]=ve}function y(G,he){he>=0&&(x=he),p.hipsY=G.hipsY,p.lean=G.lean,p.twist=G.twist,p.headYaw=G.headYaw,p.headPitch=G.headPitch,p.squash=G.squash,p.elbows=G.elbows>=0?G.elbows:0;for(let ve=0;ve<4;ve++){let z=G[ya[ve]],re=p[ya[ve]];re[0]=z[0],re[1]=z[1],re[2]=z[2]}if(!m){m=!0;for(let ve=0;ve<Ud;ve++)g[ve].x=_(p,ve),g[ve].v=0}}let M=[0,0,0],b=[0,0,0],v=[0,0,0],S=[0,0,0],C={mid:[0,0,0],end:[0,0,0],stretch:1},A=new H,I=new H,R=new H,D=new gt,T=n.armLength/2,O=n.legLength/2,F=n.ankleHeight;function W(G,he,ve){let z=Math.cos(f.twist),re=Math.sin(f.twist);S[0]=G*z+ve*re,S[1]=he,S[2]=-G*re+ve*z}function j(){let G=f.squash>.2?f.squash:.2,he=1/Math.sqrt(G);t.scale.set(he,G,he),i.position.set(0,f.hipsY,0),i.rotation.set(f.lean,f.twist,0),r.rotation.set(f.headPitch,f.headYaw,0);for(let ve=0;ve<2;ve++){let z=ve===0?1:-1;va(n,f,ve===0?n.shoulderL:n.shoulderR,M);let re=f.elbows<0?0:f.elbows>1?1:f.elbows;W(z*(io[0]+(Fd[0]-io[0])*re),io[1]+(Fd[1]-io[1])*re,io[2]+(Fd[2]-io[2])*re),Rd(M,ve===0?f.handL:f.handR,T,T,S,C),c[ve].set(M,C.mid,C.end,C.stretch);let be=l[ve];be.position.set(C.end[0],C.end[1],C.end[2]),A.set(C.end[0]-C.mid[0],C.end[1]-C.mid[1],C.end[2]-C.mid[2]),A.lengthSq()<1e-10&&A.set(0,-1,0),A.normalize(),I.set(-z*Math.cos(f.twist),0,z*Math.sin(f.twist)),I.addScaledVector(A,-I.dot(A)),I.lengthSq()<1e-4&&I.set(0,0,1).addScaledVector(A,-A.z),I.normalize(),R.crossVectors(I,A),D.makeBasis(I,A,R),be.quaternion.setFromRotationMatrix(D),va(n,f,ve===0?n.hipL:n.hipR,b);let xe=ve===0?f.footL:f.footR;v[0]=xe[0],v[1]=xe[1]+F,v[2]=xe[2],W(z*.15,0,1),Rd(b,v,O,O,S,C),d[ve].set(b,C.mid,C.end,C.stretch);let ee=h[ve];ee.position.set(C.end[0],C.end[1]-F,C.end[2]),ee.rotation.set(Math.min(Math.max(C.end[1]-F,0),.3)*1.1,f.twist*.3,0)}}function V(G){if(m)for(let he=0;he<Ud;he++)In(g[he],_(p,he),x,G),w(f,he,g[he].x);j(),a.update(G)}_a("idle",0,n,f),j();function Y(){e.traverse(G=>{!G.isMesh||G.userData.isOutline||(G.geometry.dispose(),G!==u&&G.material.dispose())}),e.removeFromParent()}return{root:e,spec:n,face:a,setPose:y,update:V,dispose:Y,shadow:u}}var Tw=.15,Ew=.03,Cm=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function Es(n){let e=n.spec,t="idle",i=0,s="idle",r=0,o=0,a=ht[t].ease,l=Ri(),h=Ri(),c=_a(t,0,e);lh(c,c,1,l);function d(f,{fade:g,at:m}={}){Object.prototype.hasOwnProperty.call(ht,f)&&(f===t&&ht[f].loop||(f==="flinch"&&t!=="flinch"&&(s=t),lh(c,c,1,l),a=u(),r=g===void 0?f==="flinch"?Ew:Tw:Math.max(g,0),o=0,t=f,i=Number.isFinite(m)&&m>0?m:0,n.face.setTalking(f==="talk")))}function u(){let f=r>0?Cm(o/r):1;return a+(ht[t].ease-a)*f}function p(f,g=f){let m=ht[t];if(i+=f,o+=g,m.loop)i>=m.duration&&(i-=m.duration*Math.floor(i/m.duration));else if(i>=m.duration)return d(s),p(0);_a(t,i,e,h),lh(l,h,r>0?Cm(o/r):1,c),n.setPose(c,u())}return{play:d,update:p,current:()=>t}}function dh(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*t)<<o}return"#"+r.toString(16).padStart(6,"0")}function Pm(n){for(let e of Object.values(n))e&&typeof e=="object"&&Pm(e);return Object.freeze(n)}var zd=K.glorpPurple,en=Pm({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:zd,collar:dh(zd,K.ink,.25),logo:K.gel,pants:dh(K.planet,K.ink,.3),skin:K.daleSkin,hair:K.daleHair,shoe:dh(K.ink,zd,.3),sole:K.cream,lanyard:K.hotPink,badge:K.cream,badgeStripe:K.teal,headset:dh(K.ink,K.lilac,.25),mic:K.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var Aw=1.5,Rw=8,Cw=-.2,Pw=1.3,Im=.6,Iw=Math.atan2(1.3,-4),Lw=new H(-.45,.22,-1).applyEuler(new On(-.2,.68,0)).toArray(),Lm=10,Dw=.8,Nw=.05,Ow=["idle","run","aim","flinch","talk"],Ma=Object.keys(lr),Dm=(n,e,t)=>Math.min(t,Math.max(e,n));function Uw(n,e,t,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(e)*t,i[1]=Math.sin(e)*t,i[2]=Math.cos(n)*Math.cos(e)*t,i}function Fw(n,e,t=oe.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[n[0]+r*t.right-i*t.back,n[1]+t.up,n[2]+o*t.right-s*t.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Nm({canvas:n,gl:e}){let t=Xc(n,e),i=t.renderer,s=Wc(n),r=document.getElementById("cr-readout"),o=new Zs,a=new dn(oe.camera.fov,1,.1,100),l=Yc({planetDir:Lw});o.add(l.mesh);let h=pm();o.add(h.group);let c=[];function d(ee,Ce,Ke){let Be=Ts(Ke===void 0?en:{...en,face:{...en.face,seed:Ke}});Be.root.position.set(ee,0,Ce),Be.root.rotation.y=Im,o.add(Be.root);let Je=Es(Be),ke={rig:Be,anim:Je};return c.push(ke),ke}let u=d(h.spawn[0],h.spawn[2]),p=[],f=!1,g=0,m=!0,x=!1,_=.685,w=.1,y=4.6,M=!1,b=new H(h.spawn[0],h.spawn[1]+1.1,h.spawn[2]),v=[0,0,0];function S(ee){if(!(!Ow.includes(ee)&&!Object.prototype.hasOwnProperty.call(ht,ee))){u.anim.play(ee);for(let Ce of p)Ce.anim.play(f?"run":ee)}}function C(ee){let Ce=Ma.indexOf(ee);if(!(Ce<0)){g=Ce;for(let Ke of c)Ke.rig.face.setExpression(ee)}}function A(ee){m=!!ee,Md(o,m)}function I(ee){x=!!ee,u.rig.root.rotation.y=x?Iw:Im}function R(ee){if(ee=!!ee,ee!==f)if(f=ee,ee){let Ce=h.spawn[2]+2.4;for(let Ke=0;Ke<Lm;Ke++){let Be=h.spawn[0]+(Ke-(Lm-1)/2)*Dw,Je=d(Be,Ce,10+Ke);Je.anim.play("run"),Je.rig.face.setExpression(Ma[g]),p.push(Je)}Md(o,m)}else{for(let Ce of p)Ce.rig.dispose(),c.splice(c.indexOf(Ce),1);p=[]}}function D(){let ee=t.resize();a.aspect=ee.aspect,a.updateProjectionMatrix()}D(),window.addEventListener("resize",D),n.addEventListener("mousedown",ee=>{ee.button===0&&(M=!0)}),window.addEventListener("mouseup",()=>{M=!1}),window.addEventListener("mousemove",ee=>{M&&!s.isLocked()&&T(ee.movementX||0,ee.movementY||0,.006)}),n.addEventListener("wheel",ee=>{y=Dm(y*Math.exp(ee.deltaY*.001),Aw,Rw)},{passive:!0});function T(ee,Ce,Ke){_-=ee*Ke,w=Dm(w+Ce*Ke,Cw,Pw)}window.addEventListener("keydown",ee=>{ee.repeat||(ee.code==="Digit4"?S("flinch"):ee.code==="Digit5"?S("talk"):ee.code==="KeyO"?A(!m):ee.code==="KeyP"?R(!f):ee.code==="KeyL"?s.requestLock():ee.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let O=0,F=0,W=0,j=0,V=0,Y=0,G=null,he=0;window.__cr.stats=()=>({fps:O,ms:F,calls:V,tris:Y,scale:t.scale(),characters:c.length}),window.__cr.anim=S,window.__cr.orbit=(ee,Ce,Ke)=>{_=ee,w=Ce,Ke&&(y=Ke)},window.__cr.expression=C,window.__cr.perf=R,window.__cr.gameCam=I,window.__cr.outlines=A;function ve(ee){ee.pressed.weapon1&&S("idle"),ee.pressed.weapon2&&S("run"),ee.pressed.weapon3&&S("aim"),ee.pressed.interact&&C(Ma[(g+1)%Ma.length]),ee.pressed.grenade&&I(!x)}function z(){if(x){let ee=Fw([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(ee.pos),a.lookAt(ee.look[0],ee.look[1],ee.look[2])}else Uw(_,w,y,v),a.position.set(b.x+v[0],b.y+v[1],b.z+v[2]),a.lookAt(b)}let re=ee=>ee.toFixed(2);function be(){let ee=G?Object.keys(G.held).filter(Be=>G.held[Be]).join(" "):"",Ce=s.padStatus(),Ke=G&&Ce!=="none"&&Ce!=="unrecognised controller"?`Gamepad: ${Ce}
  move ${re(G.moveX)}, ${re(G.moveY)}  look ${re(G.lookX)}, ${re(G.lookY)}
  held: ${ee||"nothing"}`:`Gamepad: ${Ce}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${Ma[g]}   camera: ${x?"game":"orbit"}   outlines: ${m?"on":"off"}`,`${Math.round(O)} fps   ${re(F)} ms   scale ${t.scale()}`,`${V} draw calls   ${Y} triangles   ${c.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${G?Math.round(G.lookDX):0}, ${G?Math.round(G.lookDY):0}`,Ke].join(`
`)}let xe=Vc({step(){},render(ee,Ce){let Ke=Math.min(Ce,Nw);G=s.poll(),ve(G),s.isLocked()&&!x&&T(G.lookDX,G.lookDY,.003),x||T(G.lookX*600*Ke,G.lookY*600*Ke,.004),l.update(performance.now()/1e3),h.update(Ke);for(let Be of c)Be.anim.update(Ke),Be.rig.update(Ke);z(),i.render(o,a),V=i.info.render.calls,Y=i.info.render.triangles,W++,j+=Ce,j>=1&&(O=W/j,F=j/W*1e3,W=0,j=0),he+=Ce,he>=.1&&(he=0,be()),t.frameDone(Ce*1e3)}});z(),i.render(o,a),V=i.info.render.calls,Y=i.info.render.triangles,be(),xe.start()}function Om(){let n=!1,e=0,t=.18;return{update(i,s,r,o){return t=o,n?(e+=r,i?!1:(n=!1,e<=o)):s?i?(n=!0,e=r,!1):!0:!1},holding(){return n&&e>t},reset(){n=!1,e=0}}}function mt(n,e,t="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...e]),kind:t})}var Hd=1e-9;function Fn(n,e,t,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=n.filter(m=>m.max[1]>o&&m.min[1]<a),h=Math.hypot(t[0],t[2]),c=Math.max(1,Math.ceil(h/(i/2))),d=t[0]/c,u=t[2]/c,p=!1,f=0,g=0;for(let m=0;m<c;m++){let x=r[0],_=r[2];r[0]+=d,r[2]+=u;let w=!1;for(let y=0;y<5;y++){let M=null,b=Hd;for(let v of l){let S=Math.max(v.min[0],Math.min(r[0],v.max[0])),C=Math.max(v.min[2],Math.min(r[2],v.max[2])),A=r[0]-S,I=r[2]-C,R=Math.hypot(A,I),D,T,O;if(R>Hd){if(R>=i)continue;D=i-R,T=A/R,O=I/R}else{let F=[[r[0]-v.min[0],-1,0],[v.max[0]-r[0],1,0],[r[2]-v.min[2],0,-1],[v.max[2]-r[2],0,1]],W=F[0];for(let j of F)j[0]<W[0]&&(W=j);D=W[0]+i,T=W[1],O=W[2]}D>b&&(b=D,M=[T,O])}if(!M){w=!0;break}if(y===4)break;r[0]+=M[0]*b,r[2]+=M[1]*b,p=!0,f=M[0],g=M[1]}w||(r[0]=x,r[2]=_,p=!0)}return p||(r[0]=e[0]+t[0],r[2]=e[2]+t[2]),{pos:r,hit:p,normal:[f,0,g]}}function ti(n,e,t,i){let s=1,r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];for(let o of n){let a=0,l=1,h=!0;for(let c=0;c<3&&h;c++){let d=o.min[c]-i,u=o.max[c]+i;if(Math.abs(r[c])<Hd)(e[c]<d||e[c]>u)&&(h=!1);else{let p=(d-e[c])/r[c],f=(u-e[c])/r[c];if(p>f){let g=p;p=f,f=g}p>a&&(a=p),f<l&&(l=f),a>l&&(h=!1)}}h&&a<s&&(s=a)}return s}function ba(n,e,t=0){for(let i of n)if(e[0]>=i.min[0]-t&&e[0]<=i.max[0]+t&&e[1]>=i.min[1]-t&&e[1]<=i.max[1]+t&&e[2]>=i.min[2]-t&&e[2]<=i.max[2]+t)return!0;return!1}var Gd=["fov","right","up","back"],fh=Math.PI*2,kw=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),km=n=>n!=="normal"&&kw.includes(n);function Um(n,e,t={}){let i=km(e)&&n[e]&&typeof n[e]=="object"?n[e]:null;for(let s of Gd)t[s]=i&&i[s]!==void 0?i[s]:n[s];return t}function Fm(n,e){let t=km(e)?n[e]:null;return t&&typeof t=="object"&&t.shakeWeight>0?t.shakeWeight:0}function Bm(n,e,t,i=0){return e?n>=t:n>=t+i}function zm({tuning:n=oe.camera,look:e=oe.look}={}){let t={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],h={x:0,v:0},c=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],d={},u=[0,0,0],p=[0,0,0],f=[0,0,0],g=[0,0,0],m=[0,0,1],x={pos:g,dir:m,fov:70},_={on:!1,t:0,p:[0,0,0]},w=1,y=0,M=!1;return{yaw:0,pitch:0,look(v,S,C,A,I,R,D=1){(v||S||C||A)&&(_.on=!1);let T=R?e.aimScale:1,O=e.invertY?-1:1;this.yaw-=v*e.mouse*T,this.pitch-=S*e.mouse*T*O;let F=e.pad,W=T*D;C&&(this.yaw-=Math.sign(C)*Math.abs(C)**F.expo*F.yawRate*W*I),A&&(this.pitch-=Math.sign(A)*Math.abs(A)**F.expo*F.pitchRate*W*I*O),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(v=1){let S=n.bump;if(!S||!(S.amount>0)||!(v>0))return;s.x=Math.min(s.x+S.amount*v,2*S.amount);let C=n.slamShake;C&&C.amount>0&&C.time>0&&(o.t=C.time,o.amp=C.amount*v)},dip(v){Number.isFinite(v)&&v>0&&(r.x=Math.min(r.x+v,.1))},kick(v,S=0){let C=n.recoil?n.recoil.max:0;if(!(C>0))return;let A=(I,R)=>Math.max(-C,Math.min(C,I+(Number.isFinite(R)?R:0)));a.p.x=Math.max(0,A(a.p.x,v)),a.y.x=A(a.y.x,S)},hold(v){if(!(n.holdTime>0)){_.on=!1;return}_.on=!0,_.t=n.holdTime,_.p[0]=v[0],_.p[1]=v[1],_.p[2]=v[2]},holding(){return _.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(v,S,C="normal",A=1){S!==void 0&&(this.yaw=S),Um(n,C,d);for(let I of Gd)t[I].x=d[I],t[I].v=0;i.x=A,i.v=0,h.x=Fm(n,C),h.v=0;for(let I=0;I<3;I++)c[I].x=v[I],c[I].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,w=1,M=!0,_.on=!1},update(v,{target:S,mode:C="normal",side:A=1},I){M||this.snap(S,this.yaw,C,A),v>0||(v=0),y+=v,Um(n,C,d);for(let G of Gd)In(t[G],d[G],n.blendHalfLife,v);In(h,Fm(n,C),n.blendHalfLife,v),In(i,A,n.sideHalfLife,v);for(let G=0;G<3;G++)In(c[G],S[G],n.followHalfLife,v);In(s,0,n.bump?n.bump.halfLife:0,v),In(r,0,n.bump?n.bump.halfLife:0,v);let R=n.recoil?n.recoil.halfLife:0;In(a.p,0,R,v),In(a.y,0,R,v);let D=Math.PI/180,T=n.probeRadius,O=t.back.x,F=1,W=0,j=G=>{let he=this.yaw+a.y.x*D,ve=Math.max(n.pitchMin,Math.min(n.pitchMax,this.pitch+a.p.x*D));W=Math.sin(he),F=Math.cos(he);let z=Math.sin(ve),re=Math.cos(ve);u[0]=c[0].x,u[1]=c[1].x+t.up.x,u[2]=c[2].x,l[0]=S[0],l[1]=S[1]+t.up.x,l[2]=S[2];let be=ti(I,l,u,T);if(be<1)for(let ke=0;ke<3;ke++)u[ke]=l[ke]+(u[ke]-l[ke])*be;let xe=t.right.x*i.x;p[0]=u[0]-F*xe,p[1]=u[1],p[2]=u[2]+W*xe;let ee=ti(I,u,p,T);for(let ke=0;ke<3;ke++)p[ke]=u[ke]+(p[ke]-u[ke])*ee;m[0]=W*re,m[1]=z,m[2]=F*re;for(let ke=0;ke<3;ke++)f[ke]=p[ke]-m[ke]*O;let Ce=ti(I,p,f,T),Ke=O>1e-6?Math.max(n.minBack/O,Ce):1;Ke>1&&(Ke=1),Ke<w?w=Ke:G&&(w+=(Ke-w)*(n.wallReturnHalfLife>0?1-Math.pow(2,-v/n.wallReturnHalfLife):1));let Be=O*w-s.x;for(let ke=0;ke<3;ke++)g[ke]=p[ke]-m[ke]*Be;let Je=ti(I,u,g,T);if(Je<1)for(let ke=0;ke<3;ke++)g[ke]=u[ke]+(g[ke]-u[ke])*Je};if(j(!0),_.on)if(_.t-=v,_.t<=0||C!=="aim")_.on=!1;else for(let G=0;G<3;G++){let he=_.p[0]-g[0],ve=_.p[1]-g[1],z=_.p[2]-g[2],re=Math.hypot(he,ve,z);if(re<.5)break;this.yaw=Math.atan2(he,z)-a.y.x*D,this.pitch=Math.max(n.pitchMin,Math.min(n.pitchMax,Math.asin(ve/re)-a.p.x*D)),j(!1)}let V=n.shake;if(V&&V.amp&&h.x>0){let G=V.amp*(h.x>1?1:h.x),he=Math.sin(fh*V.hz*y)*G,ve=Math.sin(fh*V.hz*1.3*y+1)*G,z=-F,re=W;g[0]+=z*he-re*m[1]*ve,g[1]+=(re*m[0]-z*m[2])*ve,g[2]+=re*he+z*m[1]*ve}g[1]-=r.x;let Y=n.slamShake;if(o.t>0&&Y&&Y.time>0){o.t=Math.max(0,o.t-v);let G=o.t/Y.time,he=o.amp*G*G,ve=Math.sin(fh*Y.hz*o.t)*he,z=Math.sin(fh*Y.hz*1.27*o.t+2)*he,re=-F,be=W;g[0]+=re*ve-be*m[1]*z,g[1]+=(be*m[0]-re*m[2])*z,g[2]+=be*ve+re*m[1]*z}return x.fov=t.fov.x,x}}}var As=[K.hotPink,K.playerOrange,K.glorpPurple,K.tealLight,K.lilac];function Bw(n){let e=n.max[0]-n.min[0],t=n.max[2]-n.min[2],i=n.max[1]-n.min[1],s=Math.max(e,t),r=Math.min(e,t);return n.kind==="pillar"?"pillar":n.kind==="low"?r<.7&&s>=1.8?"planter":"counter":n.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function zw(){let n=[],e=(t,i)=>{let s=new it(i),r=t.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return t.setAttribute("color",new Et(o,3)),t};return{list:n,box(t,i,s){let r=new wt(i[0]-t[0],i[1]-t[1],i[2]-t[2]);r.translate((t[0]+i[0])/2,(t[1]+i[1])/2,(t[2]+i[2])/2),n.push(e(r,s))},cyl(t,i,s,r,o,a,l="y"){let h=new pn(r,r,o,8,1);l==="x"?h.rotateZ(Math.PI/2):l==="z"&&h.rotateX(Math.PI/2),h.translate(t,i,s),n.push(e(h,a))},ball(t,i,s,r,o){let a=new an(r,7,5);a.translate(t,i,s),n.push(e(a,o))}}}var so=(n,e,t=n.min[1],i=n.max[1])=>[[n.min[0]-e,t,n.min[2]-e],[n.max[0]+e,i,n.max[2]+e]];function Hw(n,e,t,i,s,r,o){let[a,l,h,c]=[e.min[0],e.min[2],e.max[0],e.max[2]],d=.015,u=.06;o?(n.box([a+s,t,l+d],[h-s,i,l+u],r),n.box([a+s,t,c-u],[h-s,i,c-d],r)):(n.box([a+d,t,l+s],[a+u,i,c-s],r),n.box([h-u,t,l+s],[h-d,i,c-s],r))}function Sa(n,e){let t=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=t>=i,r=s?t:i,o=s?i:t,a=(h,c)=>s?e.min[0]+h:e.min[0]+c,l=(h,c)=>s?e.min[2]+c:e.min[2]+h;return{len:r,dep:o,top:e.max[1],alongX:s,slab(h,c,d,u,p,f,g){let m=a(h,d),x=a(c,u),_=l(h,d),w=l(c,u);n.box([Math.min(m,x),p,Math.min(_,w)],[Math.max(m,x),f,Math.max(_,w)],g)},cyl(h,c,d,u,p,f,g="y"){let m=g==="y"?"y":g==="u"?s?"x":"z":s?"z":"x";n.cyl(a(h,c),d,l(h,c),u,p,f,m)}}}function Gw(n,e){let t=Sa(n,e),{len:i,dep:s}=t,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;t.slab(.03,i-.03,.04,s-.04,0,.5,K.shadowTint);for(let l=0;l<=o;l++){let h=l*a;t.slab(h,h+r,.06,s-.06,0,e.max[1],K.lilac),t.slab(h+.03,h+r-.03,0,.07,.8,.94,K.hotPink),t.slab(h+.03,h+r-.03,s-.07,s,.8,.94,K.hotPink)}for(let l=0;l<o;l++){let h=l*a+r,c=(l+1)*a;t.slab(h,c,s/2-.03,s/2+.03,.5,.94,K.tealLight),t.slab(h,h+(c-h)*.6,s/2-.05,s/2+.05,.7,.76,K.cream)}}function Vw(n,e,t){let i=Sa(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,K.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,K.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,K.cream),i.slab(.15,s-.15,0,.06,.25,.6,K.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,K.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let h=0;h<a;h++)for(let c=0;c<l;c++){let d=(c+.5+h%2*.25)/l*s,u=a===1?r/2:r*(.3+h*.4);i.cyl(d,u,(.82+o-.02)/2,.14,o-.84,As[(c+h*2+t)%As.length]),i.cyl(d,u,o-.01,.15,.02,K.cream)}}function Ww(n,e,t){t%3===1?Vw(n,e,t):Gw(n,e)}function Xw(n,e,t){let i=Sa(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,K.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,K.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,K.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,K.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?K.ink:As[(l+t)%As.length])}function Yw(n,e,t){let i=Sa(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,K.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,K.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,K.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),h=(o-.8)/2-.005,c=.8+h+.005;for(let d=0;d<a;d++)for(let u=0;u<l;u++){let p=(u+.5)/l*s,f=a===1?r/2:r*(.3+d*.4),g=As[(u+d+t)%As.length];i.cyl(p,f,c,.015,.14,K.cream,"u"),i.cyl(p-.07,f,c,h,.06,g,"u"),i.cyl(p+.07,f,c,h,.06,g,"u")}}function qw(n,e){let t=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=t?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];n.box(...so({min:e.min,max:o},-.03,e.min[1],o[1]-.1),K.teal),n.box(...so({min:e.min,max:o},0,o[1]-.1,o[1]),K.cream),Hw(n,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,K.hotPink,t);let a=(f,g,m,x,_)=>n.box(t?[e.min[0]+f,m,e.min[2]+.12]:[e.min[0]+.12,m,e.min[2]+f],t?[e.min[0]+g,x,e.max[2]-.12]:[e.max[0]-.12,x,e.min[2]+g],_);a(.3,.7,o[1],o[1]+.06,K.cream),a(.32,.68,o[1]+.06,o[1]+.12,K.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,K.cream);let l=t?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,h=f=>t?e.min[0]+f:e.min[2]+f;t?n.cyl(h(r-.5),o[1]+.14,l,.06,.28,K.gel):n.cyl(l,o[1]+.14,h(r-.5),.06,.28,K.gel);let c=.14,d=t?[[e.min[0],e.min[0]+c],[e.max[0]-c,e.max[0]]]:[[e.min[2],e.min[2]+c],[e.max[2]-c,e.max[2]]];for(let[f,g]of d)t?n.box([f,e.min[1],e.min[2]],[g,i,e.max[2]],K.lilac):n.box([e.min[0],e.min[1],f],[e.max[0],i,g],K.lilac);let u=d[0][1],p=d[1][0];t?(n.box([u,i-.12,e.min[2]],[p,i,e.max[2]],K.lilac),n.box([u,o[1],e.min[2]+.2],[p,i-.12,e.max[2]-.2],K.tealLight)):(n.box([e.min[0],i-.12,u],[e.max[0],i,p],K.lilac),n.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,p],K.tealLight))}function $w(n,e,t){let i=Sa(n,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,K.shadowTint);for(let[c,d]of[[0,a],[s-a,s]])for(let[u,p]of[[0,a],[r-a,r]])i.slab(c,d,u,p,.12,o,K.lilac);i.slab(0,s,0,r,o-.1,o,K.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,K.tealLight);let l=1.35,h=r*.32;i.slab(a,s-a,h-.03,h+.03,.7,.76,K.cream),i.cyl(s/2,h,l,.025,s+.1,K.cream,"u");for(let c of[.2,.27,s-.2,s-.27])i.cyl(c,h,l,c===.2||c===s-.2?.2:.17,.06,c===.2||c===s-.2?K.ink:As[t%As.length],"u")}function Zw(n,e){n.box(...so(e,0,e.min[1],e.max[1]),K.cream),n.box(...so(e,.05,e.min[1],e.min[1]+.25),K.shadowTint),n.box(...so(e,.03,e.min[1]+1,e.min[1]+1.12),K.hotPink),n.box(...so(e,.05,e.max[1]-.25,e.max[1]),K.shadowTint)}function Kw(n){if(!n)return[];let[e,,t]=n.min,[i,,s]=n.max,r=[],o=.05,a=1,l=2.8,h=1.3;for(let c=e+1;c+h/2<i-.3;c+=2)r.push({min:[c-h/2,a,t],max:[c+h/2,l,t+o]},{min:[c-h/2,a,s-o],max:[c+h/2,l,s]});for(let c=t+1;c+h/2<s-.3;c+=2)r.push({min:[e,a,c-h/2],max:[e+o,l,c+h/2]},{min:[i-o,a,c-h/2],max:[i,l,c+h/2]});return r}function Hm(n,e=null){let t=zw();for(let s of Kw(e))t.box(s.min,s.max,K.tealLight);let i=0;return n.forEach((s,r)=>{let o=Bw(s);o==="counter"?Ww(t,s,i++):o==="planter"?(r%2?Yw:Xw)(t,s,r):o==="desk"?qw(t,s):o==="shelf"?$w(t,s,r):o==="pillar"?Zw(t,s):t.box(s.min,s.max,K.lilac)}),Qt(t.list,!1)}var Gm=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Gm)),n),Rs=.3,Jw=[mt([-12,-1,-12],[12,0,12],"floor"),mt([-12-Rs,0,-12-Rs],[12+Rs,4,-12]),mt([-12-Rs,0,12],[12+Rs,4,12+Rs]),mt([-12-Rs,0,-12],[-12,4,12]),mt([12,0,-12],[12+Rs,4,12]),mt([5,0,-9],[5.3,4,-3]),mt([6.7,0,-9],[7,4,-3]),mt([-11,0,-7.3],[-6,3,-7]),mt([-6.3,0,-11],[-6,3,-7]),mt([-4,0,-3],[-2,1,-2.4],"low"),mt([3,0,3],[3.6,1,5],"low"),mt([-5,0,3],[-3.8,2.2,3.6],"tall"),mt([1,0,-6],[1.6,2.2,-4],"tall"),mt([-9.4,0,.6],[-8.6,4,1.4],"pillar"),mt([8.6,0,3.6],[9.4,4,4.4],"pillar"),mt([-9,0,6.5],[-6,1,7.1],"low"),mt([-4,0,6.5],[-1,1,7.1],"low"),mt([6,0,6],[10,2.2,6.6],"tall"),mt([-12,0,-1],[-10,1,-.4],"low")],Vm=[];for(let n=0;n<=12;n++)Vm.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var mh=Gm({boxes:Jw,marks:Vm,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function Vd(n){let e=n.map(t=>{let i=new wt(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);return i.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2),i});return Qt(e,!1)}var Cs=.03,Ps=.3,Is=.12,ph=2;function jw(n=mh){let e=n.boxes.find(h=>h.kind==="floor");if(!e)return[];let[t,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(h,c)=>a.push({min:h,max:c});l([t,0,i],[s,Ps,i+Cs]),l([t,0,r-Cs],[s,Ps,r]),l([t,0,i],[t+Cs,Ps,r]),l([s-Cs,0,i],[s,Ps,r]);for(let h=t+ph;h<s-.5;h+=ph)l([h-Is/2,Ps,i],[h+Is/2,o,i+Cs]),l([h-Is/2,Ps,r-Cs],[h+Is/2,o,r]);for(let h=i+ph;h<r-.5;h+=ph)l([t,Ps,h-Is/2],[t+Cs,o,h+Is/2]),l([s-Cs,Ps,h-Is/2],[s,o,h+Is/2]);return a}function Wm(n=mh){let e=new St,t=n.boxes.find(r=>r.kind==="floor");e.add($c({w:t.max[0]-t.min[0],d:t.max[2]-t.min[2]}));let i=n.boxes.filter(r=>r.kind!=="floor");if(i.length){let r=new ut(fi(Hm(i,t)),zt({vertexColors:!0}));r.name="grey-props",Pn(r),e.add(r)}let s=jw(n);if(s.length){let r=new ut(Vd(s),zt({color:K.shadowTint}));r.name="grey-wall-trim",e.add(r)}if(n.marks.length){let r=new ut(Vd(n.marks),zt({color:K.hotPink}));r.name="grey-marks",e.add(r)}if(n.ammoCrates&&n.ammoCrates.length){let r=[];for(let a of n.ammoCrates)r.push({min:[a.pos[0]-.35,0,a.pos[2]-.25],max:[a.pos[0]+.35,.4,a.pos[2]+.25]}),r.push({min:[a.pos[0]-.39,.4,a.pos[2]-.29],max:[a.pos[0]+.39,.5,a.pos[2]+.29]});let o=new ut(fi(Vd(r)),zt({color:K.playerOrange}));o.name="grey-crate",Pn(o),e.add(o)}if(n.landmark){let r=n.landmark,o=Zc({text:r.text,w:r.w,h:r.h});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=Math.PI,e.add(o)}for(let r of n.signs||[]){let o=Zc({text:r.text,w:r.w,h:r.h,bg:r.bg,seed:4});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=r.yaw,e.add(o)}return{group:e,boxes:n.boxes,update(r){}}}var Xm=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Xm)),n),Ls=.3,Ci=7,Pi=15,Qw=[mt([-Ci,-1,-Pi],[Ci,0,Pi],"floor"),mt([-Ci-Ls,0,-Pi-Ls],[Ci+Ls,4,-Pi]),mt([-Ci-Ls,0,Pi],[Ci+Ls,4,Pi+Ls]),mt([-Ci-Ls,0,-Pi],[-Ci,4,Pi]),mt([Ci,0,-Pi],[Ci+Ls,4,Pi]),mt([-5,0,-9.5],[-3,1,-8.5],"low"),mt([2,0,-9.5],[4,1,-8.5],"low"),mt([-.4,0,-7.4],[.4,4,-6.6],"pillar"),mt([-1,0,-3.5],[1,1,-2.5],"low"),mt([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),mt([3.5,0,-1.5],[5.5,1,-.5],"low"),mt([-4.5,0,3.5],[-2.5,1,4.5],"low"),mt([2.5,0,3.5],[4.5,1,4.5],"low"),mt([-.4,0,6.6],[.4,4,7.4],"pillar"),mt([-4.5,0,9],[-2.5,1,10],"low"),mt([2.5,0,9],[4.5,1,10],"low"),mt([-1.5,0,12],[1.5,2.2,12.6],"tall")],eT=[-12,-6,.5,7,11],tT=[-6,-2,2,6],gh=[];for(let n of eT)for(let e of tT)gh.push([e,n]);gh.push([0,-5],[0,0],[0,9.5]);gh.push([-3.5,13.5],[3.5,13.5]);var Ym=Xm({name:"kioskRow",boxes:Qw,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:gh,ammoCrates:[{pos:[5.5,0,-12.5]}],landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});var Ds=class n{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Wd=class extends Ds{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Xd(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var nT={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Xd,toHexString:Xd},Ta={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},iT={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){let i=Ta.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return Ta.toHexString(s)}},sT={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){let i=Ta.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return Ta.toHexString(s)}},rT=[nT,Ta,iT,sT];function oT(n){return rT.find(e=>e.match(n))}var Yd=class extends Ds{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=oT(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Xd(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},wa=class extends Ds{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},qd=class extends Ds{constructor(e,t,i,s,r,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},i=_=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+_),this.$input.value=this.getValue())},s=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),i(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),i(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),i(this._step*this._normalizeMouseWheel(_)))},o=!1,a,l,h,c,d,u=5,p=_=>{a=_.clientX,l=h=_.clientY,o=!0,c=this.getValue(),d=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",g)},f=_=>{if(o){let w=_.clientX-a,y=_.clientY-l;Math.abs(y)>u?(_.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&g()}if(!o){let w=_.clientY-h;d-=w*this._step*this._arrowKeyMultiplier(_),c+d>this._max?d=this._max-c:c+d<this._min&&(d=this._min-c),this._snapClampSetValue(c+d)}h=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(x,_,w,y,M)=>(x-_)/(w-_)*(M-y)+y,t=x=>{let _=this.$slider.getBoundingClientRect(),w=e(x,_.left,_.right,this._min,this._max);this._snapClampSetValue(w)},i=x=>{this._setDraggingStyle(!0),t(x.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=x=>{t(x.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,h=x=>{x.preventDefault(),this._setDraggingStyle(!0),t(x.touches[0].clientX),o=!1},c=x=>{x.touches.length>1||(this._hasScrollBar?(a=x.touches[0].clientX,l=x.touches[0].clientY,o=!0):h(x),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=x=>{if(o){let _=x.touches[0].clientX-a,w=x.touches[0].clientY-l;Math.abs(_)>Math.abs(w)?h(x):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else x.preventDefault(),t(x.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),f=400,g,m=x=>{if(Math.abs(x.deltaX)<Math.abs(x.deltaY)&&this._hasScrollBar)return;x.preventDefault();let w=this._normalizeMouseWheel(x)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,f)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},$d=class extends Ds{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},Zd=class extends Ds{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},aT=`.lil-gui {
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
}`;function lT(n){let e=document.createElement("style");e.innerHTML=n;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var qm=!1,xh=class n{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!qm&&a&&(lT(aT),qm=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new $d(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new qd(this,e,t,i,s,r);case"boolean":return new Wd(this,e,t);case"string":return new Zd(this,e,t);case"function":return new wa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new Yd(this,e,t,i)}addFolder(e){let t=new n({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof wa||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof wa)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var L=(n,e,t,i)=>({path:n,min:e,max:t,step:i});function $m(n){let e=(t,i,s,r)=>L(`weapons.${n}.${t}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var Ea=Object.freeze([L("move.jog",1,10,.1),L("move.aimWalk",.5,6,.1),L("move.sprint",2,14,.1),L("move.accelTime",.01,.6,.01),L("move.stopTime",.01,.6,.01),L("move.turnRate",1,40,.5),L("move.aimTurnRate",1,40,.5),L("move.sprintTurnRate",.2,20,.1),L("move.rollDistance",1,12,.1),L("move.rollTime",.2,1.5,.01),L("move.rollEase",1,4,.05),L("move.rollBuffer",0,.5,.01),L("move.tapMax",.05,.5,.01),L("move.stickSprintMin",0,1,.05),L("move.faceMinSpeed",0,2,.05),L("move.sprintHeadingMinSpeed",0,3,.05),L("move.runClipMinSpeed",0,2,.05),L("move.runRateMin",.1,2,.05),L("move.runRateMax",.5,4,.05),L("move.sprintRateMin",.1,2,.05),L("move.sprintRateMax",.5,4,.05),L("move.stepEvery",.4,4,.05),L("move.stepEverySprint",.4,6,.05),L("move.crawlSpeed",.2,4,.05),L("move.crawlTurnRate",.5,20,.5),L("camera.fov",40,110,1),L("camera.right",-1.5,1.5,.01),L("camera.up",.5,3,.01),L("camera.back",.5,6,.05),L("camera.aim.fov",20,90,1),L("camera.aim.back",.3,5,.05),L("camera.sprint.fov",50,120,1),L("camera.sprint.up",.3,3,.01),L("camera.sprint.back",.5,6,.05),L("camera.sprint.shakeWeight",0,3,.05),L("camera.coverLow.fov",50,120,1),L("camera.coverLow.right",-1.5,1.5,.01),L("camera.coverLow.up",.3,3,.01),L("camera.coverLow.back",.5,6,.05),L("camera.coverTall.fov",50,120,1),L("camera.coverTall.right",-1.5,1.5,.01),L("camera.coverTall.up",.3,3,.01),L("camera.coverTall.back",.5,6,.05),L("camera.downed.fov",40,120,1),L("camera.downed.up",.2,3,.01),L("camera.downed.back",.5,6,.05),L("camera.bump.amount",0,.6,.01),L("camera.bump.halfLife",.01,.3,.005),L("camera.slamShake.amount",0,.3,.005),L("camera.slamShake.time",.02,1,.01),L("camera.slamShake.hz",2,60,.5),L("camera.blendHalfLife",0,.5,.005),L("camera.holdTime",0,2,.05),L("camera.holdRange",10,300,5),L("camera.followHalfLife",0,.5,.005),L("camera.sideHalfLife",0,.6,.005),L("camera.headHideDist",0,2,.05),L("camera.headHideMargin",0,1,.01),L("camera.shake.amp",0,.15,.001),L("camera.shake.hz",1,30,.5),L("camera.probeRadius",.05,.6,.01),L("camera.minBack",0,2,.01),L("camera.wallReturnHalfLife",0,1,.01),L("camera.pitchMin",-1.5,0,.01),L("camera.pitchMax",0,1.5,.01),L("look.mouse",5e-4,.008,1e-4),L("look.pad.yawRate",.5,10,.1),L("look.pad.pitchRate",.5,10,.1),L("look.pad.expo",1,3,.05),L("look.aimScale",.1,1.5,.01),{path:"look.invertY"},L("cover.grabRange",0,5,.05),L("cover.grabAngle",0,180,1),L("cover.grabViewAngle",0,180,1),L("cover.grabSlack",0,5,.05),L("cover.grabMinTilt",0,1,.05),L("cover.gap",0,5,.01),L("cover.endInset",0,5,.01),L("cover.minLength",0,5,.05),L("cover.slideSpeed",0,30,.5),L("cover.slideMinTime",0,2,.01),L("cover.slideMaxTime",0,2,.01),L("cover.slideTurnRate",1,60,.5),L("cover.moveSpeed",0,30,.1),L("cover.alongDeadzone",0,1,.05),L("cover.leaveTilt",0,1,.05),L("cover.leaveAngle",0,180,1),L("cover.endLeaveTime",0,2,.01),L("cover.cornerZone",0,5,.05),L("cover.popTime",0,2,.01),L("cover.blindTime",0,2,.01),L("cover.popShift",0,5,.05),L("cover.pushAngle",0,180,1),L("cover.lowDrawBack",0,1,.01),L("cover.blindDrawBack",0,1,.01),L("cover.vaultTime",0,2,.01),L("cover.vaultMaxDepth",0,5,.05),L("cover.vaultHop",0,5,.05),L("cover.vaultExitSpeed",0,30,.1),L("cover.swapRange",0,5,.05),L("cover.swapSpeed",0,30,.5),L("cover.swapAngle",0,180,1),L("cover.swapMaxOffset",0,5,.05),L("cover.slamSquash",0,1,.01),L("cover.slamSquashTime",0,2,.01),L("cover.thudVolume",0,1,.05),L("cover.autoSlam",0,1,1),L("cover.autoAngle",0,90,1),L("cover.autoDist",0,1,.01),L("cover.autoMinTilt",0,1,.05),L("cover.autoMinSpeed",0,12,.1),L("cover.autoTime",0,1,.01),...$m("regret"),...$m("pistol"),L("combat.fireBuffer",0,.5,.01),L("combat.autoReload",0,1,1),L("combat.minRate",.01,1,.01),L("combat.minReloadTime",.01,.5,.01),L("combat.muzzleUp",.5,2,.01),L("combat.muzzleRight",-1,1,.01),L("combat.muzzleForward",0,2,.01),L("combat.blindLift",0,1,.01),L("combat.blindReach",0,1,.01),L("combat.crateRadius",.3,3,.05),L("combat.hitPad",0,.3,.005),L("combat.crouchHead",0,3,.01),L("combat.crouchBodyTop",0,3,.01),L("combat.shoulderDrop",0,1,.01),L("combat.pickupRadius",.2,3,.05),L("health.max",1,500,1),L("health.regenDelay",0,15,.1),L("health.regenTime",0,15,.1),L("health.downedTime",0,60,.5),L("health.standInRevive",0,1,1),L("health.reviveTime",0,10,.1),L("health.reviveHealth",0,1,.05),L("health.godMode",0,1,1),L("health.giveUpHold",0,5,.01),L("associate.radius",0,3,.01),L("associate.height",0,3,.01),L("associate.pointSpacing",.2,3,.01),L("associate.reserveRadius",0,3,.01),L("associate.popShift",0,3,.01),L("associate.linkMax",2,15,.5),L("associate.health",1,1e3,1),L("associate.runSpeed",0,12,.1),L("associate.turnRate",.5,40,.5),L("associate.arriveDist",.01,1,.01),L("associate.stuckTime",.1,5,.1),L("associate.popTime",0,1,.01),L("associate.telegraphTime",0,2,.01),L("associate.burstTime",0,5,.1),L("associate.rate",.5,20,.5),L("associate.damage",0,50,.5),L("associate.range",5,100,1),L("associate.spread",0,15,.1),L("associate.moveSpread",0,15,.1),L("associate.aimLag",0,1,.01),L("associate.suppressChance",0,1,.05),L("associate.suppressTime",0,5,.1),L("associate.suppressRate",.5,20,.5),L("associate.suppressMiss",0,5,.1),L("associate.suppressSpread",0,20,.5),L("associate.coverWaitMin",0,5,.1),L("associate.coverWaitMax",0,8,.1),L("associate.magBursts",1,10,1),L("associate.reloadTime",0,6,.1),L("associate.flinchTime",0,2,.01),L("associate.minRange",0,20,.5),L("associate.preferRange",0,40,.5),L("associate.maxRange",1,60,.5),L("associate.relocateCheck",.05,3,.05),L("associate.relocateAfter",1,60,.5),L("associate.ammoDrop",0,200,1),L("associate.muzzleUp",.5,2,.01),L("director.tokens",0,8,1),L("director.casualTokens",0,8,1),L("director.casual",0,1,1),L("director.tokenCooldown",0,5,.1),L("director.tokenMaxHold",.5,10,.1),L("director.requestWindow",0,2,.05),L("director.pushAfter",1,30,.5),L("director.flankAfter",1,60,.5),L("director.stayRadius",.5,10,.1),L("director.flankAngle",0,180,1),L("director.flankMaxAngle",60,180,1),L("director.maxEnemies",4,8,1),L("associate.downChance",0,1,.05),L("associate.downedCrawl",0,3,.05),L("associate.bleedTime",1,60,.5),L("associate.reviveTime",0,10,.1),L("associate.reviveHealth",.05,1,.05),L("associate.reviveRange",0,40,.5),L("associate.staggerTime",0,3,.05),L("associate.diveWarn",0,1.6,.05),L("associate.diveRadius",0,12,.1),L("associate.diveChance",0,1,.05),L("associate.diveReaction",0,2,.05),L("associate.diveDistance",0,10,.1),L("associate.diveTime",.05,3,.05),L("pad.radius",.1,4,.05),L("pad.openAfterKills",0,8,1),L("pad.openAfter",0,120,1),L("pad.interval",.5,30,.5),L("pad.maxAlive",1,8,1),L("pad.total",1,30,1),L("pad.riseTime",0,3,.05),L("tobble.enabled",0,1,1),L("tobble.scale",.3,1.2,.01),L("tobble.radius",.1,.6,.01),L("tobble.height",.5,2,.01),L("tobble.health",1,1e3,1),L("tobble.regenDelay",0,20,.5),L("tobble.regenTime",0,20,.5),L("tobble.runSpeed",0,12,.1),L("tobble.turnRate",1,30,.5),L("tobble.followMin",0,20,.5),L("tobble.followMax",1,30,.5),L("tobble.personalSpace",0,5,.05),L("tobble.lofClear",0,4,.05),L("tobble.lofRange",1,60,1),L("tobble.sidestepReact",0,3,.05),L("tobble.sidestepDist",0,5,.1),L("tobble.popTime",.01,1,.01),L("tobble.popLift",0,.6,.01),L("tobble.muzzleUp",.3,2,.01),L("tobble.coverWaitMin",0,5,.1),L("tobble.coverWaitMax",0,8,.1),L("tobble.burstTime",0,6,.1),L("tobble.rate",.5,20,.5),L("tobble.damage",0,100,1),L("tobble.spread",0,20,.5),L("tobble.range",1,100,1),L("tobble.reviveMaxThreats",0,8,1),L("tobble.reviveWaitMax",0,20,.5),L("tobble.reviveRange",.3,4,.05),L("tobble.reviveTime",0,15,.1),L("tobble.reviveHealth",.05,1,.05),L("tobble.playerReviveTime",0,10,.1),L("tobble.playerReviveRange",.3,5,.05),L("tobble.crawlSpeed",0,3,.05),L("tobble.complainEvery",1,30,.5),L("dummy.health",1,1e3,1),L("dummy.respawnTime",0,30,.5),L("dummy.railSpeed",0,10,.1),L("camera.recoil.halfLife",.01,.5,.01),L("camera.recoil.max",0,20,.5),L("look.pad.assist",.1,1,.05),L("feedback.flashTime",.01,.3,.01),L("feedback.flashSize",.05,1.5,.05),L("feedback.tracerTime",.01,.3,.01),L("feedback.tracerWidth",.005,.2,.005),L("feedback.sparkTime",.05,1,.01),L("feedback.sparkCount",0,12,1),L("feedback.gelTime",.1,2,.05),L("feedback.gelCount",0,24,1),L("feedback.gelSpeed",0,10,.1),L("feedback.killGelCount",0,48,1),L("feedback.receiptCount",0,24,1),L("feedback.receiptTime",.2,4,.05),L("feedback.gravity",0,30,.1),L("feedback.hitMarkerTime",.02,1,.01),L("feedback.killMarkerTime",.05,1,.01),L("feedback.reloadResultTime",.1,2,.05),L("feedback.reticleMinGap",0,30,1),L("feedback.lowAmmoFrac",0,1,.05),L("feedback.coverReticleOpacity",0,1,.05),L("feedback.stepDip",0,.1,.001),L("feedback.stepVolume",0,1,.05),L("feedback.shotVolume",0,1,.05),L("feedback.hitVolume",0,1,.05),L("feedback.killVolume",0,1,.05),L("feedback.reloadVolume",0,1,.05),L("feedback.gunSquash",0,.6,.01),L("feedback.gunSquashTime",.01,.5,.01),L("feedback.gunKick",0,.3,.01),L("feedback.bodyKick",0,.3,.01),L("feedback.dummyBurstTime",.01,1,.01),L("feedback.dummyRespawnPop",0,1,.01),L("feedback.faceMaxOpacity",0,1,.05),L("feedback.edgeMaxOpacity",0,1,.05),L("feedback.hitFlashTime",.05,2,.01),L("feedback.hitKick",0,3,.05),L("feedback.hurtVolume",0,1,.05),L("feedback.enemyFlashSize",.05,1.5,.05),L("feedback.enemyTracerTime",.01,.3,.01),L("feedback.enemyTracerWidth",.005,.2,.005),L("feedback.glintSize",.02,.4,.01),L("feedback.blasterVolume",0,1,.05),L("feedback.chargeVolume",0,1,.05),L("feedback.pickupVolume",0,1,.05),L("feedback.barkTime",.2,6,.1),L("feedback.barkGap",0,12,.5),L("feedback.barkMinShow",0,4,.1),L("feedback.bashVolume",0,1,.05),L("feedback.revVolume",0,1,.05),L("feedback.cutVolume",0,1,.05),L("feedback.throwVolume",0,1,.05),L("feedback.clankVolume",0,1,.05),L("feedback.boomVolume",0,1,.05),L("feedback.saunaVolume",0,1,.05),L("feedback.reviveVolume",0,1,.05),L("feedback.tobbleShotVolume",0,1,.05),L("feedback.blastSize",.2,8,.1),L("feedback.blastTime",.05,2,.01),L("feedback.executeShake",0,.3,.005),L("feedback.cutGelEvery",.02,1,.01),L("feedback.arcDot",.01,.5,.01),L("melee.holdTime",0,5,.01),L("melee.bashTime",0,5,.01),L("melee.bashHitAt",0,5,.01),L("melee.bashRange",0,10,.05),L("melee.bashAngle",0,180,1),L("melee.bashDamage",0,500,1),L("melee.bashLunge",0,10,.05),L("melee.bashCooldown",0,5,.01),L("melee.revSpeed",0,30,.1),L("melee.revPulse",.05,5,.01),L("melee.cutterReach",0,10,.05),L("melee.cutterAngle",0,180,1),L("melee.cutTime",0,5,.01),L("melee.finishTime",0,5,.01),L("melee.executeRange",0,10,.05),L("melee.executeAngle",0,180,1),L("melee.promptRange",0,10,.05),L("melee.cutterSpin",0,100,1),L("grenade.carry",0,10,1),L("grenade.start",0,10,1),L("grenade.throwSpeed",0,30,.1),L("grenade.throwLift",0,180,1),L("grenade.gravity",.5,30,.1),L("grenade.ballRadius",.02,1,.01),L("grenade.restitution",0,1,.01),L("grenade.friction",0,1,.01),L("grenade.fuse",0,5,.01),L("grenade.radius",0,10,.05),L("grenade.damage",0,500,1),L("grenade.killRadius",0,10,.05),L("grenade.killDamage",0,500,1),L("grenade.selfDamage",0,2,.05),L("grenade.padReach",0,10,.05),L("grenade.arcTime",0,5,.01),L("grenade.throwTime",0,5,.01)]),cT=new Map(Ea.map(n=>[n.path,n])),Aa=structuredClone(oe);function ur(n,e){let t=n;for(let i of e.split(".")){if(t===null||typeof t!="object")return;t=t[i]}return t}function Jd(n,e,t){let i=e.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=t,!0}function jd(n=oe,e=Aa){let t={};for(let i of Ea){let s=ur(n,i.path);s!==ur(e,i.path)&&(t[i.path]=s)}return t}function Zm(n,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let t=0;for(let i of Object.keys(e)){let s=cT.get(i);if(!s)continue;let r=e[i],o=ur(Aa,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||Jd(n,i,r)&&t++)}return t}function Kd(n,e){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>Kd(s,e)).join(", ")}]`;let t="  ".repeat(e+1);return`{
${Object.keys(n).map(s=>`${t}${s}: ${Kd(n[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function Km(n=oe){return["associate","camera","combat","cover","director","dummy","feedback","grenade","health","look","melee","move","pad","tobble","weapons"].map(e=>`  ${e}: ${Kd(n[e],1)},`).join(`
`)}var Qd="cr-tuning",hT={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},uT=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function Jm(n){let e=n.split("."),t=e.slice(0,-1);return t.length===1&&t[0]==="camera"&&uT.has(e[1])&&t.push("wall"),t[0]==="look"&&t[1]==="pad"&&(t[1]="lookPad"),t}function dT(){try{return window.localStorage}catch{return null}}function jm({storage:n=dT()}={}){let e=()=>{try{return n?n.getItem(Qd):null}catch{return null}},t=g=>{try{n&&(g===null?n.removeItem(Qd):n.setItem(Qd,g))}catch{}};try{let g=e();g&&Zm(oe,JSON.parse(g))}catch{}let i=new xh({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let g=document.activeElement;g&&g!==document.body&&s.contains(g)&&g.blur&&g.blur()}s.addEventListener("click",g=>{let m=g.target;m&&m.closest&&m.closest(".lil-title")&&m.blur!==void 0&&r()});let o=new Map;function a(g){let m=i,x="";for(let _ of g){if(x+=`.${_}`,!o.has(x)){let w=m.addFolder(hT[_]||_);w.close(),o.set(x,w)}m=o.get(x)}return m}function l(){let g=jd();t(Object.keys(g).length?JSON.stringify(g):null)}for(let g of Ea){let m=g.path.split("."),x=m[m.length-1],_=ur(oe,m.slice(0,-1).join(".")),w=typeof ur(Aa,g.path)=="boolean"?a(Jm(g.path)).add(_,x):a(Jm(g.path)).add(_,x,g.min,g.max,g.step);w.onChange(l),w.onFinishChange(r)}let h=null;function c(g){if(!h){h=document.createElement("textarea"),h.readOnly=!0,h.rows=8,Object.assign(h.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let m=document.createElement("div");m.textContent="Press Cmd+C to copy",m.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",h.note=m,s.appendChild(m),s.appendChild(h)}h.value=g,h.note.hidden=!1,h.hidden=!1,h.focus(),h.select()}function d(g){h&&(h.hidden=!0,h.note.hidden=!0);let m=null;try{m=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(g):null}catch{m=null}if(!m){c(g);return}m.catch(()=>c(g))}let u={copyChanges(){r(),d(JSON.stringify(jd(),null,2))},copyForFile(){r(),d(Km())},resetAll(){r();for(let g of Ea)Jd(oe,g.path,ur(Aa,g.path));t(null),i.controllersRecursive().forEach(g=>g.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let p=!1;function f(g){p=g,s.style.display=g?"":"none"}return f(!1),{toggle(){f(!p)},isOpen:()=>p}}var Qm=Math.PI*2,Qi=n=>n-Qm*Math.round(n/Qm),pi=(n,e)=>Math.atan2(n,e);function Ra(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function ni(n,e){let t=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*t-n.moveX*i,r=-n.moveY*i+n.moveX*t,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function Wt(n,e,t){let i=Qi(e-n);return n+Math.max(-t,Math.min(t,i))}function ro(n,e,t,i,s,r){let o=n.vel,a=(Math.hypot(e,t)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],h=t-o[2],c=Math.hypot(l,h);c<=a?(o[0]=e,o[2]=t):(o[0]+=l/c*a,o[2]+=h/c*a)}var ef=[0,0],vh=[0,0,0],Ca=1e-9,fT=1.5;var pT=(n=oe)=>n.tobble?.playerReviveTime??fT;function eg(n,e,t){let i=e-n.pos[0],s=t-n.pos[2];Math.hypot(i,s)>1e-6&&(n.facing=n.facing+Qi(Math.atan2(i,s)-n.facing)),n.heading=n.facing}function _h(n){n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0}var yh={bash:{acceptsTap:!1,selfMoves:!0,enter(n){n.aiming=!1,n.firing=!1,n.scratch.dir=[Math.sin(n.facing),Math.cos(n.facing)],n.scratch.prevOff=0,n.scratch.hit=!1,n.heading=n.facing},update(n,e,t){let i=oe.melee,s=n.scratch;n.aiming=!1,n.firing=!1;let r=n.stateTime>=i.bashTime-Ca,o=r||!(i.bashTime>0)?1:n.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,vh[0]=s.dir[0]*l,vh[1]=0,vh[2]=s.dir[1]*l,n.moveBy(vh,t,!1),!s.hit&&(r||n.stateTime>=i.bashHitAt-Ca)&&(s.hit=!0,n.onAction?.({type:"bashHit"})),r?(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(n){n.aiming=!1,n.firing=!1,n.heading=n.facing},update(n,e,t){let i=n.tuning,s=oe.melee.revSpeed;n.aiming=!1,n.firing=!1,ni(e,ef),ro(n,ef[0]*s,ef[1]*s,s,t,i);let r=n.speed();return r>s&&(n.vel[0]*=s/r,n.vel[2]*=s/r),r>i.faceMinSpeed?n.facing=Wt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t):n.facing=Wt(n.facing,e.camYaw,i.aimTurnRate*t),n.heading=n.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(n){_h(n)},update(n){return _h(n),n.stateTime<n.scratch.time-Ca?null:(n.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(n){_h(n)},update(n,e){return _h(n),e.interactHeld?n.stateTime<pT()-Ca?null:(n.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},Pa={bash(n,e){return n.state!=="move"&&n.state!=="sprint"||n.bashReadyAt>n.clock+Ca?!1:(n.bashReadyAt=n.clock+oe.melee.bashCooldown,Number.isFinite(e)&&(n.facing=n.facing+Qi(e-n.facing)),n.go("bash",{}),!0)},rev(n,e){return e?n.state!=="move"&&n.state!=="sprint"?!1:(n.go("rev",{}),!0):n.state!=="rev"?!1:(n.go("move",{}),!0)},execute(n,e,t){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"?!1:(n.go("execute",{}),n.scratch.time=Number.isFinite(t)&&t>0?t:0,eg(n,e[0],e[1]),!0)},reviveTobble(n,e){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"?!1:(n.go("reviveTobble",{}),eg(n,e[0],e.length>2?e[2]:e[1]),!0)}};var Ii=1e-9,tf=Math.PI/180,ng=.05,mT=1.8,gT={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function ig(n=oe.cover,e=oe.move){return{radius:e.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var xT=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],vT=n=>{for(let e of["a","b","tangent","normal"])Object.freeze(n[e]);return Object.freeze(n)};function sg(n,{radius:e,gap:t,endInset:i,minLength:s,exclude:r=[]}){let o=e+t,a=[];return n.forEach((l,h)=>{let c=gT[l.kind];if(!c)return;let d=n.filter((u,p)=>p!==h&&u.kind!=="floor"&&u.max[1]>ng&&u.min[1]<mT);for(let u of xT){let p=u.axis*2,f=2-p,g=(u.sign>0?l.max[p]:l.min[p])+u.sign*o,m=l.min[f],x=l.max[f],_=x-m,w=[];for(let S of d){if(!(g>S.min[p]-o+Ii&&g<S.max[p]+o-Ii))continue;let C=S.min[f]-o-m,A=S.max[f]+o-m;A>Ii&&C<_-Ii&&w.push([Math.max(C,0),Math.min(A,_)])}w.sort((S,C)=>S[0]-C[0]);let y=[];for(let S of w){let C=y[y.length-1];C&&S[0]<=C[1]+Ii?C[1]=Math.max(C[1],S[1]):y.push([S[0],S[1]])}let M=[],b=0,v=!0;for(let[S,C]of y)S>b+Ii&&M.push([b,S,v,!1]),b=C,v=!1;_>b+Ii&&M.push([b,_,v,!0]),M.forEach(([S,C,A,I],R)=>{let D=`${h}${u.name}#${R}`;if(r.includes(D))return;let T=m+S+(A?i:0),O=m+C-(I?i:0),F=O-T;if(F<s-Ii)return;let W=u.axis===0?[g,T]:[T,g],j=u.axis===0?[g,O]:[O,g];a.push(vT({id:D,kind:c,boxIndex:h,a:W,b:j,length:F,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[p]-l.min[p],openA:A,openB:I}))})}}),a}function mi(n,e,t=[0,0]){return t[0]=n.a[0]+n.tangent[0]*e,t[1]=n.a[1]+n.tangent[1]*e,t}function Ns(n,e,t=oe.cover){let i=e<=t.cornerZone,s=n.length-e<=t.cornerZone;return i&&s?e<=n.length-e?-1:1:i?-1:s?1:0}function Ia(n,e){return e<0?n.openA:n.openB}var tg=.9,rg=(n,e,t,i)=>ti(n,[e[0],tg,e[1]],[t[0],tg,t[1]],.9*i)===1;function La(n,e,t,i,s,r,o){let a=Math.cos(r.grabAngle*tf),l=Math.sin(s),h=Math.cos(s),c=r.grabViewAngle*tf,d=null;for(let u of n){let p=(t[0]-u.a[0])*u.normal[0]+(t[2]-u.a[1])*u.normal[1],f=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(p<-(r.gap+.02)||f<a||f<=Ii)continue;let g=Math.max(p,0)/f,m=(t[0]+i[0]*g-u.a[0])*u.tangent[0]+(t[2]+i[1]*g-u.a[1])*u.tangent[1];if(m<-r.grabSlack||m>u.length+r.grabSlack)continue;let x=Math.max(0,Math.min(u.length,m)),_=mi(u,x),w=_[0]-t[0],y=_[1]-t[2],M=Math.hypot(w,y);if(!(M>r.grabRange||d&&M>=d.dist)){if(M>.3){let b=(w*l+y*h)/M;if(Math.acos(Math.max(-1,Math.min(1,b)))>c)continue}rg(e,[t[0],t[2]],_,o)&&(d={edge:u,t:x,point:_,dist:M})}}return d}function og(n,e,t,i,s,r,o){if(Ns(t,i,r)!==s||!Ia(t,s))return null;let a=mi(t,i),l=Math.cos(r.swapAngle*tf),h=null;for(let c of n){if(c===t||c.normal[0]*t.normal[0]+c.normal[1]*t.normal[1]<l)continue;let d=Math.hypot(c.a[0]-a[0],c.a[1]-a[1]),u=Math.hypot(c.b[0]-a[0],c.b[1]-a[1]),p=d<=u?0:c.length,f=mi(c,p),g=f[0]-a[0],m=f[1]-a[1],x=Math.hypot(g,m);(g*t.tangent[0]+m*t.tangent[1])*s<=0||Math.abs(g*t.normal[0]+m*t.normal[1])>r.swapMaxOffset||x>r.swapRange||h&&x>=h.dist||rg(e,a,f,o)&&(h={edge:c,t:p,point:f,dist:x})}return h}function _T(n,e,t,i){let s=e[1]+ng,r=e[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<t-Ii)return!1}return!0}function ag(n,e,t,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=mi(n,e),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!_T(t,l,s,r))return null;let h=t.filter((c,d)=>d!==n.boxIndex);return ti(h,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var yT=["coverSlide","cover","vault","coverSwap"],lg=Math.PI/180,tn=[0,0],bh=[0,0],Os=[0,0,0],ug=.001,MT=2,nf=(n,e,t)=>Math.max(e,Math.min(t,n));function sf(n,e,t){if(Ra(e)>=n.coverTuning.grabMinTilt){ni(e,tn);let i=Math.hypot(tn[0],tn[1]);t[0]=tn[0]/i,t[1]=tn[1]/i}else t[0]=Math.sin(n.facing),t[1]=Math.cos(n.facing);return t}var dg={name:"cover",state:"coverSlide",when(n,e){return n.coverTarget=La(n.coverEdges,n.boxes,n.pos,sf(n,e,bh),e.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},Mh={};function fg(n,e){let t=n.coverTuning;if(!t.autoSlam||e.aim||Ra(e)<t.autoMinTilt)return null;Object.assign(Mh,t),Mh.grabAngle=t.autoAngle,Mh.grabRange=t.autoDist,ni(e,tn);let i=Math.hypot(tn[0],tn[1]);bh[0]=tn[0]/i,bh[1]=tn[1]/i;let s=La(n.coverEdges,n.boxes,n.pos,bh,e.camYaw,Mh,n.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(n.runVel[0]*r[0]+n.runVel[1]*r[1])>=t.autoMinSpeed?s:null}function bT(n,e,t){let i=Ns(n,e,t);return n.kind==="low"||i!==0&&Ia(n,i)}function es(n){return n.cover?n.cover.edge:n.scratch.edge||null}function rf(n){if(n.state==="downed")return"downed";if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let e=es(n);if(e)return e.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function dr(n){let e=n.cover;if(!e)return 1;let t=e.edge,i=e.popEnd;if(i===0&&(i=Ns(t,e.t,n.coverTuning)),i===0)return 1;let s=pi(-t.normal[0],-t.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=t.tangent[0]*i*r+t.tangent[1]*i*o<0?-1:1;return Ia(t,i)?a:-a}function cg(n,e,t,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(ug,nf(o/Math.max(e,1e-6),t,i)),n.aiming=!1}function hg(n,e,t,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return Os[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],Os[1]=0,Os[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(Os,e,!1),i!==null&&(n.facing=Wt(n.facing,i,t*e)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var ST={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;cg(n,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(n,e,t){let i=n.scratch.edge;return hg(n,t,n.coverTuning.slideTurnRate,pi(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;n.cover=null,cg(n,e.swapSpeed,0,MT);let t=n.scratch;n.heading=pi(t.to[0]-t.from[0],t.to[2]-t.from[2]),n.facing=n.facing+Qi(n.heading-n.facing)},update(n,e,t){return hg(n,t,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTarget;n.coverTarget=null;let t=n.scratch,i=e.edge;n.cover=null,n.aiming=!1,t.edge=i,t.landing=e.landing,t.from=[n.pos[0],n.pos[2]],n.heading=pi(-i.normal[0],-i.normal[1]),n.facing=n.facing+Qi(n.heading-n.facing)},update(n,e,t){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,ug)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,e,t){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=ni(e,tn),l=Math.hypot(tn[0],tn[1]),h=l>0?tn[0]/l:0,c=l>0?tn[1]/l:0,d=r.normal[0],u=r.normal[1],p=a>=i.leaveTilt,f=(S,C)=>(n.vel[0]=S*o.jog,n.vel[1]=0,n.vel[2]=C*o.jog,"move");if(p&&h*d+c*u>=Math.cos(i.leaveAngle*lg))return f(tn[0],tn[1]);if(e.tap&&p){let S=Math.cos(i.pushAngle*lg);if(-(h*d+c*u)>=S){let A=ag(r,s.t,n.boxes,i,o.radius,o.height);if(A)return n.coverTarget={landing:A,edge:r},"vault"}let C=h*r.tangent[0]+c*r.tangent[1];if(Math.abs(C)>=S){let A=og(n.coverEdges,n.boxes,r,s.t,C>0?1:-1,i,o.radius);if(A)return n.coverTarget=A,"coverSwap"}}let g=Ns(r,s.t,i),m=bT(r,s.t,i),x=e.aim&&m?1:0,_=e.fire&&!e.aim&&m?1:0,w=i.popTime>0?t/i.popTime:1;s.pop=s.pop<x?Math.min(x,s.pop+w):Math.max(x,s.pop-w);let y=i.blindTime>0?t/i.blindTime:1;s.blind=s.blind<_?Math.min(_,s.blind+y):Math.max(_,s.blind-y),s.popEnd=s.pop>0&&r.kind!=="low"?g:0,s.blindEnd=s.blind>0&&r.kind!=="low"?g:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let M=!1;if(s.pop===0&&s.blind===0){let S=tn[0]*r.tangent[0]+tn[1]*r.tangent[1];if(Math.abs(S)>=i.alongDeadzone){let C=s.t+S*i.moveSpeed*t;if(s.t=nf(C,0,r.length),C!==s.t&&Ia(r,S>0?1:-1)&&(M=!0,s.endPush+=t,s.endPush>=i.endLeaveTime))return f(r.tangent[0]*Math.sign(S),r.tangent[1]*Math.sign(S))}}else s.blindEnd!==0&&_===1&&(s.t=nf(s.t+s.blindEnd*i.moveSpeed*t,0,r.length));M||(s.endPush=0);let b=mi(r,s.t),v=s.popEnd*i.popShift*s.pop;return Os[0]=b[0]+r.tangent[0]*v-n.pos[0],Os[1]=0,Os[2]=b[1]+r.tangent[1]*v-n.pos[2],n.moveBy(Os,t,!1),s.pop>0?n.facing=Wt(n.facing,e.camYaw,o.aimTurnRate*t):n.facing=Wt(n.facing,pi(-d,-u),o.turnRate*t),n.heading=n.facing,null}}},pg=Object.fromEntries(yT.map(n=>[n,ST[n]]));var af=n=>[Math.sin(n),0,Math.cos(n)],lf=n=>[-Math.cos(n),0,Math.sin(n)],wT=(n,e,t)=>e*(1-(1-n)**t),mn=[0,0],Sh=[0,0,0];function of(n,e,t){return e.sprint&&!e.aim&&!e.grenade&&Ra(e)>=t.stickSprintMin}var TT={move:{acceptsTap:!0,enter(){},update(n,e,t){let i=n.tuning;if(of(n,e,i))return"sprint";n.aiming=e.aim,n.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return ni(e,mn),ro(n,mn[0]*s,mn[1]*s,s,t,i),e.aim||e.fire||e.grenade?n.facing=Wt(n.facing,e.camYaw,i.aimTurnRate*t):n.speed()>i.faceMinSpeed&&(n.facing=Wt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,e){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):ni(e,mn)>.01?n.heading=Math.atan2(mn[0],mn[1]):n.heading=n.facing},update(n,e,t){let i=n.tuning;return of(n,e,i)?(ni(e,mn),n.heading=Wt(n.heading,Math.atan2(mn[0],mn[1]),i.sprintTurnRate*t),ro(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,t,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,e){n.aiming=!1;let t=n.scratch;if(t.dir=[Math.sin(n.facing),Math.cos(n.facing)],ni(e,mn)>.01){let i=Math.hypot(mn[0],mn[1]);t.dir[0]=mn[0]/i,t.dir[1]=mn[1]/i}t.prevOff=0,t.queued=!1,n.heading=Math.atan2(t.dir[0],t.dir[1]),n.facing=n.facing+Qi(n.heading-n.facing)},update(n,e,t){let i=n.tuning,s=n.scratch;e.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=wT(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,Sh[0]=s.dir[0]*a,Sh[1]=0,Sh[2]=s.dir[1]*a,n.moveBy(Sh,t,!1),r?s.queued?"roll":of(n,e,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(n){n.cover=null,n.coverTarget=null,n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0},update(n,e,t){let i=n.tuning;return n.aiming=!1,n.firing=!1,ni(e,mn),ro(n,mn[0]*i.crawlSpeed,mn[1]*i.crawlSpeed,i.crawlSpeed,t,i),n.speed()>i.faceMinSpeed&&(n.facing=Wt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.crawlTurnRate*t)),n.heading=n.facing,null},exit(){}},...pg,...yh},ET=[dg,{name:"roll",when:()=>!0,state:"roll"}];function mg({boxes:n,spawn:e,tuning:t=oe.move,coverTuning:i=oe.cover,coverEdges:s=[],states:r=TT,contextActions:o=ET,onState:a,onStep:l,onAction:h}){let c={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:t,boxes:n,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:h,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(c.vel[0],c.vel[2])},moveBy(d,u,p=!0){let f=c.pos,g=Fn(n,f,d,t.radius,t.height);if(c.hit=!!g.hit,!p)u>0&&(c.vel[0]=(g.pos[0]-f[0])/u,c.vel[2]=(g.pos[2]-f[2])/u);else if(g.hit)if(u>0)c.vel[0]=(g.pos[0]-f[0])/u,c.vel[2]=(g.pos[2]-f[2])/u;else{let m=g.normal,x=c.vel[0]*m[0]+c.vel[1]*m[1]+c.vel[2]*m[2];x<0&&(c.vel[0]-=m[0]*x,c.vel[1]-=m[1]*x,c.vel[2]-=m[2]*x)}f[0]=g.pos[0],f[1]=g.pos[1],f[2]=g.pos[2]},go(d,u){let p=c.state;r[p].exit?.(c),c.state=d,c.stateTime=0,c.entries++,c.scratch={},r[p].selfMoves&&(c.runVel[0]=c.runVel[1]=0,c.hitTime=0),c.autoTimer=0,r[d].enter(c,u),c.onState?.(d,p,u)},down(){c.go("downed",{})},bash(d){return Pa.bash(c,d)},rev(d){return Pa.rev(c,d)},execute(d,u){return Pa.execute(c,d,u)},reviveTobble(d){return Pa.reviveTobble(c,d)},revive(){c.state==="downed"&&c.go("move",{})},place(d,u){r[c.state].exit?.(c),c.state="move",c.stateTime=0,c.firing=!1,c.cover=null,c.coverTarget=null,c.scratch={},c.pos[0]=c.prevPos[0]=d[0],c.pos[1]=c.prevPos[1]=d[1],c.pos[2]=c.prevPos[2]=d[2],c.vel[0]=c.vel[1]=c.vel[2]=0,c.runVel[0]=c.runVel[1]=0,c.hitTime=c.autoTimer=0,c.grenadeAim=!1,c.bashReadyAt=0,u!==void 0?c.facing=c.prevFacing=c.heading=u:c.prevFacing=c.facing},update(d,u){if(c.prevPos[0]=c.pos[0],c.prevPos[1]=c.pos[1],c.prevPos[2]=c.pos[2],c.prevFacing=c.facing,c.firing=!1,u>0&&(c.clock+=u),c.grenadeAim=!!d.grenade&&(c.state==="move"||c.state==="sprint"||c.state==="cover"),d.tap&&r[c.state].acceptsTap){for(let g of o)if(g.when(c,d)){c.go(g.state,d);break}}c.stateTime+=u;let p=r[c.state].update(c,d,u),f=c.state;if(!r[f].selfMoves){let g=c.vel[0],m=c.vel[2],x=Math.hypot(g,m);c.moveBy([c.vel[0]*u,0,c.vel[2]*u],u,!0),c.hit?(c.hitTime+=u,(x>=Math.hypot(c.runVel[0],c.runVel[1])||c.hitTime>2*c.coverTuning.autoTime)&&(c.runVel[0]=g,c.runVel[1]=m)):(c.runVel[0]=g,c.runVel[1]=m,c.hitTime=0)}if(f==="move"||f==="sprint")if(!(c.speed()>c.tuning.runClipMinSpeed))c.stepDist=.5*c.tuning.stepEvery;else{c.stepDist+=Math.hypot(c.pos[0]-c.prevPos[0],c.pos[2]-c.prevPos[2]);let m=Math.max(.1,f==="sprint"?c.tuning.stepEverySprint:c.tuning.stepEvery);c.stepDist>=m&&(c.stepDist%=m,c.steps++,c.foot^=1,c.onStep?.({foot:c.foot,sprint:f==="sprint",speed:c.speed()}))}if(f==="move"||f==="sprint"){let g=fg(c,d);if(!g)c.autoTimer=0;else if((c.autoTimer+=u)>=c.coverTuning.autoTime){c.coverTarget=g,c.go("coverSlide",d);return}}p&&c.go(p,d)}};return r[c.state].enter(c,{moveX:0,moveY:0,camYaw:0}),c}function gg({AudioContextCtor:n=globalThis.AudioContext}={}){let e=null,t=null,i=!1,s=null;function r(){if(e||i||!n)return e;try{e=new n;let f=Math.max(1,Math.floor(e.sampleRate*.4));t=e.createBuffer(1,f,e.sampleRate);let g=t.getChannelData(0);for(let m=0;m<f;m++)g[m]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(f){if(!(f>0||f<0)||!e.createStereoPanner)return e.destination;let g=e.createStereoPanner();return g.pan.value=Math.max(-1,Math.min(1,f)),g.connect(e.destination),g}let a=()=>{if(e.state==="suspended"){let f=e.resume();f&&f.catch&&f.catch(()=>{})}};function l(f,g,m){let x=e.createGain();return x.gain.setValueAtTime(m,f),x.gain.exponentialRampToValueAtTime(.001,f+g),x.connect(s),x}function h(f,g,m,x,_,w){let y=e.createOscillator();y.type=g,y.frequency.setValueAtTime(m,_),x!==m&&y.frequency.exponentialRampToValueAtTime&&y.frequency.exponentialRampToValueAtTime(x,_+w),y.connect(f),y.start(_),y.stop(_+w)}function c(f,g,m,x,_){let w=e.createBufferSource();w.buffer=t;let y=e.createBiquadFilter();y.type=g,y.frequency.setValueAtTime(m,x),w.connect(y),y.connect(f),w.start(x),w.stop(x+_)}function d(f,g,m,x,_,w){let y=e.createBufferSource();y.buffer=t;let M=e.createBiquadFilter();M.type=g,M.frequency.setValueAtTime(m,_),M.frequency.exponentialRampToValueAtTime&&M.frequency.exponentialRampToValueAtTime(x,_+w),y.connect(M),M.connect(f),y.start(_),y.stop(_+w)}let u=(f,g,m)=>{let x=l(f,.03,m);c(x,"bandpass",g,f,.03)},p={rifle:(f,g)=>{c(l(f,.05,g*.55),"bandpass",2200,f,.05),h(l(f,.16,g*.9),"sine",150,48,f,.16),h(l(f,.22,g*.8),"sine",62,34,f,.22),c(l(f,.26,g*.35),"lowpass",700,f,.26)},pistol:(f,g)=>{c(l(f,.06,g*.6),"bandpass",2e3,f,.06),h(l(f,.2,g*.9),"sine",130,42,f,.2),h(l(f,.26,g*.85),"sine",56,30,f,.26),c(l(f,.3,g*.4),"lowpass",600,f,.3)},dry:(f,g)=>h(l(f,.02,g),"square",1200,1200,f,.02),hit:(f,g)=>h(l(f,.04,g),"sine",1600,1600,f,.04),head:(f,g)=>{let m=l(f,.06,g);h(m,"sine",2400,2400,f,.06),h(m,"sine",3200,3200,f,.06)},kill:(f,g)=>{let m=l(f,.12,g);h(m,"sine",300,900,f,.12);let x=l(f,.2,g*.8);c(x,"lowpass",1400,f,.2)},magOut:(f,g)=>{u(f,3e3,g),u(f+.08,2200,g)},magIn:(f,g)=>{u(f,2e3,g),u(f+.08,3400,g)},perfect:(f,g)=>{let m=l(f,.35,g);h(m,"sine",1320,1320,f,.35),h(m,"sine",1980,1980,f,.35)},good:(f,g)=>h(l(f,.15,g),"sine",990,990,f,.15),jam:(f,g)=>h(l(f,.15,g),"square",90,90,f,.15),blaster:(f,g)=>{let m=l(f,.1,g);h(m,"square",900,300,f,.1),c(m,"bandpass",1500,f,.1)},charge:(f,g)=>{let m=e.createGain();m.gain.setValueAtTime(.001,f),m.gain.exponentialRampToValueAtTime(g,f+.3),m.gain.exponentialRampToValueAtTime(.001,f+.35),m.connect(s),h(m,"sine",300,900,f,.35)},hurt:(f,g)=>{let m=l(f,.15,g);c(m,"lowpass",600,f,.15),h(m,"sine",80,80,f,.15)},downed:(f,g)=>h(l(f,.6,g),"sine",400,80,f,.6),clear:(f,g)=>{[523,659,784].forEach((m,x)=>h(l(f+x*.12,.15,g),"sine",m,m,f+x*.12,.15))},pickup:(f,g)=>{h(l(f,.06,g),"sine",880,880,f,.06),h(l(f+.07,.08,g),"sine",1320,1320,f+.07,.08)},thud:(f,g)=>{h(l(f,.32,g),"sine",60,30,f,.32),c(l(f,.28,g*.6),"lowpass",260,f,.28),c(l(f,.07,g*.3),"bandpass",900,f,.07)},bash:(f,g)=>{h(l(f,.2,g),"sine",120,40,f,.2),c(l(f,.06,g*.6),"bandpass",1800,f,.06)},rev:(f,g)=>{h(l(f,.25,g*.5),"sawtooth",180,260,f,.25),c(l(f,.25,g*.25),"bandpass",2600,f,.25)},cut:(f,g)=>{h(l(f,.3,g*.5),"sawtooth",150,105,f,.3),c(l(f,.3,g*.5),"bandpass",900,f,.3),c(l(f,.2,g*.3),"lowpass",400,f,.2)},finish:(f,g)=>{h(l(f,.4,g),"sine",70,26,f,.4),c(l(f,.3,g*.5),"lowpass",220,f,.3)},throw:(f,g)=>{d(l(f,.3,g*.6),"bandpass",400,1600,f,.3),h(l(f,.18,g*.5),"sawtooth",140,85,f+.02,.18)},clank:(f,g)=>{let m=l(f,.14,g*.6);h(m,"square",1450,1450,f,.14),h(m,"square",2230,2230,f,.14),c(l(f,.04,g*.5),"bandpass",3500,f,.04)},boom:(f,g)=>{h(l(f,.5,g),"sine",50,50,f,.5),h(l(f,.3,g*.7),"sine",110,40,f,.3),c(l(f,.45,g*.6),"lowpass",500,f,.45)},saunaOpen:(f,g)=>{d(l(f,.5,g*.7),"bandpass",700,3200,f,.5)},saunaClose:(f,g)=>{d(l(f,.3,g*.6),"bandpass",2600,600,f,.3),h(l(f+.28,.2,g),"sine",95,45,f+.28,.2)},revive:(f,g)=>{h(l(f,.2,g*.8),"triangle",440,440,f,.2),h(l(f+.17,.3,g),"triangle",660,660,f+.17,.3)},tobbleShot:(f,g)=>{h(l(f,.07,g),"sine",700,280,f,.07),c(l(f,.04,g*.5),"bandpass",2800,f,.04)},step:(f,g)=>{h(l(f,.1,g),"sine",95,50,f,.1),c(l(f,.07,g*.5),"lowpass",280,f,.07)}};return{play(f,g,m=0){let x=p[f];if(!(!x||!(g>0)||!r()))try{a(),s=o(m),x(e.currentTime,g)}catch{}},unlock(){if(r())try{a()}catch{}}}}function xg(){let n=!1;return{update(e,t,i){return i?(t&&(n=!0),e||(n=!1),{fire:n&&!!e,firePressed:!!t}):(n=!1,{fire:!1,firePressed:!1})},reset(){n=!1}}}var wh=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),vg=Object.freeze(["regret",null,"pistol"]);function _g(n,e){return n>=e.perfectStart&&n<=e.perfectEnd?"perfect":n>=e.goodStart&&n<=e.goodEnd?"good":"jam"}function cf(n,e,t,i){let s=Math.max(n.reloadTime,i.minReloadTime);return t==="perfect"?Math.min(e+n.perfectFinish,s):t==="good"?Math.min(e+n.goodFinish,s):t==="jam"?s+n.jamPenalty:s}var AT={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function yg({weapons:n=oe.weapons,combat:e=oe.combat,loadout:t=vg}={}){let i={},s=()=>{for(let g of t)g&&Object.assign(i[g]||(i[g]={}),{mag:Math.floor(n[g].mag),reserve:Math.floor(n[g].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,t.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>t[o.slot],l=(g,m)=>g[AT[m]||"spreadHip"],h=g=>g!=null&&o.reload===null&&o.switching<=0;function c(){let g=a(),m=n[g],x=i[g];return o.reload===null&&o.switching<=0&&x.mag<m.mag&&(m.infiniteReserve>0||x.reserve>0)}function d(){let g=a(),m=n[g];o.reload={id:g,t:0,press:null,end:cf(m,0,"normal",e)},i[g].boost=!1,r.push({type:"reloadStart",id:g})}function u(){let{id:g,press:m}=o.reload,x=n[g],_=i[g],w=Math.max(0,x.mag-_.mag);if(x.infiniteReserve>0)_.mag+=w;else{let y=Math.min(w,_.reserve);_.mag+=y,_.reserve-=y}_.boost=m==="perfect",o.reload=null,r.push({type:"reloadDone",id:g,result:m||"normal"})}function p(g){g===o.slot||!t[g]||(o.reload=null,o.slot=g,o.switching=n[t[g]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:t[g]}))}function f(g){let m=t.length;for(let x=1;x<m;x++){let _=(o.slot+g*x+m*m)%m;if(t[_])return p(_)}}return o.current=a,o.canFire=h,o.spreadOf=g=>l(n[a()],g)+i[a()].bloom,o.update=function(m,x,_){r.length=0,(!(_>0)||!Number.isFinite(_))&&(_=0);let w=m.weapon;w==="next"?f(1):w==="prev"?f(-1):(w===1||w===2||w===3)&&p(w-1),o.switching-=_;for(let A of t)A&&(i[A].bloom=Math.max(0,i[A].bloom-n[A].bloomRecover*_));let y=a(),M=n[y],b=i[y];if(m.reload){if(o.reload===null)c()&&d();else if(o.reload.press===null){let A=o.reload,I=Math.max(M.reloadTime,e.minReloadTime);A.press=_g(A.t/I,M),A.end=cf(M,A.t,A.press,e),r.push({type:"reloadPress",id:y,result:A.press})}}o.reload!==null&&(o.reload.t+=_,o.reload.t>=o.reload.end&&u()),m.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=_,m.fire||(o.dryLatched=!1),h(x)||(o.buffer=0);let v=M.auto>0,S=v?!!m.fire:o.buffer>0,C=1/Math.max(M.rate,e.minRate);for(o.cooldown-=_,S||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-C);S&&h(x)&&o.cooldown<=0;){if(b.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:y})),o.buffer=0,e.autoReload>0&&c()&&d();break}if(b.mag--,r.push({type:"shot",id:y,mult:b.boost?M.perfectDamage:1,spread:o.spreadOf(x)}),b.bloom=Math.min(M.bloomMax,b.bloom+M.bloomPerShot),o.cooldown+=C,b.mag===0&&(b.boost=!1),!v){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,t.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(g,m)=>{let x=i[g];!x||n[g].infiniteReserve>0||!(m>0)||(x.reserve=Math.max(x.reserve,Math.min(Math.floor(n[g].reserveMax),x.reserve+Math.floor(m))))},o.refill=()=>{for(let g of t)g&&(i[g].reserve=Math.floor(n[g].reserveMax))},o.set=(g,{mag:m,reserve:x}={})=>{i[g]&&(m!==void 0&&(i[g].mag=m),x!==void 0&&(i[g].reserve=x))},o}function Mg(n){if(n.grenadeAim||Object.hasOwn(yh,n.state))return null;if(n.state==="move")return n.aiming?"aim":n.firing?"hip":null;if(n.state==="cover"&&n.cover){if(n.cover.pop===1)return"aim";if(n.cover.blind===1)return"blind"}return null}var oo=[0,0];function hf(n,e,t,i=oe.combat,s=[0,0,0]){if(e==="blind"&&n.cover){let l=n.cover,h=l.edge,c=n.tuning.radius+n.coverTuning.gap,d=h.normal;if(h.kind==="low")mi(h,l.t,oo),s[0]=oo[0]-d[0]*(c+i.blindReach),s[1]=h.height+i.blindLift,s[2]=oo[1]-d[1]*(c+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<h.length-l.t?-1:1;mi(h,u<0?0:h.length,oo);let p=n.coverTuning.endInset+i.blindReach;s[0]=oo[0]+h.tangent[0]*u*p-d[0]*c,s[1]=i.muzzleUp,s[2]=oo[1]+h.tangent[1]*u*p-d[1]*c}return s}let r=i.muzzleRight*dr(n),o=Math.sin(t),a=Math.cos(t);s[1]=n.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=n.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=n.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!ba(n.boxes,s,0)));l-=.25);return s}function RT(n,e,t,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(n[o]<t.min[o]||n[o]>t.max[o])return 1/0}else{let a=(t.min[o]-n[o])/e[o],l=(t.max[o]-n[o])/e[o];if(a>l){let h=a;a=l,l=h}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function uf(n,e,t,i,s=1/0){let r=n[0]-t[0],o=n[1]-t[1],a=n[2]-t[2],l=r*e[0]+o*e[1]+a*e[2],h=r*r+o*o+a*a-i*i;if(h<=0)return 0;let c=l*l-h;if(c<0)return 1/0;let d=-l-Math.sqrt(c);return d>=0&&d<=s?d:1/0}function CT(n,e,t,i,s,r=1/0){let o=i[0]-t[0],a=i[1]-t[1],l=i[2]-t[2],h=n[0]-t[0],c=n[1]-t[1],d=n[2]-t[2],u=o*o+a*a+l*l,p=o*h+a*c+l*d,f=u>1e-12?Math.max(0,Math.min(1,p/u)):0,g=h-o*f,m=c-a*f,x=d-l*f;if(g*g+m*m+x*x<=s*s)return 0;let _=Math.min(uf(n,e,t,s,r),uf(n,e,i,s,r));if(u>1e-12){let w=o*e[0]+a*e[1]+l*e[2],y=e[0]*h+e[1]*c+e[2]*d,M=h*h+c*c+d*d,b=u-w*w;if(b>1e-12*u){let v=u*y-p*w,S=u*M-p*p-s*s*u,C=v*v-b*S;if(C>=0){let A=(-v-Math.sqrt(C))/b,I=p+A*w;A>=0&&A<=r&&I>0&&I<u&&A<_&&(_=A)}}}return _}function gn(n,e,t,i,s,{ignoreBox:r=-1}={}){let o=t,a="none",l=null,h=-1,c=!1;for(let d=0;d<i.length;d++){if(d===r)continue;let u=RT(n,e,i[d],o);u<=o&&u!==1/0&&(o=u,a="world",h=d,l=null,c=!0)}for(let d of s){if(!d.alive)continue;let{head:u,body:p}=d.shapes,f=uf(n,e,u.c,u.r,o);f<=o&&f!==1/0&&(o=f,a="head",l=d,h=-1,c=!0);let g=CT(n,e,p.a,p.b,p.r,o);g<=o&&g!==1/0&&(o=g,a="body",l=d,h=-1,c=!0)}return c?{t:o,point:[n[0]+e[0]*o,n[1]+e[1]*o,n[2]+e[2]*o],kind:a,target:l,boxIndex:h}:{t:1/0,point:[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],kind:"none",target:null,boxIndex:-1}}function ao(n,e,t,i=[0,0,0]){if(!(e>0))return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*t(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*t(),l=Math.abs(n[1])<.9?0:1,h=l===0?1:0,c=n[1]*0-n[2]*h,d=n[2]*l-n[0]*0,u=n[0]*h-n[1]*l,p=Math.hypot(c,d,u);c/=p,d/=p,u/=p;let f=n[1]*u-n[2]*d,g=n[2]*c-n[0]*u,m=n[0]*d-n[1]*c,x=Math.cos(a)*o,_=Math.sin(a)*o;return i[0]=n[0]*r+c*x+f*_,i[1]=n[1]*r+d*x+g*_,i[2]=n[2]*r+u*x+m*_,i}function bg({lens:n,view:e,muzzle:t,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:h=!1}){if(h){let m=ao(e,i,l),x=gn(n,m,s,r,o,{ignoreBox:a}),_=[x.point[0]-t[0],x.point[1]-t[1],x.point[2]-t[2]],w=Math.hypot(_[0],_[1],_[2]),y=w>1e-9?[_[0]/w,_[1]/w,_[2]/w]:[m[0],m[1],m[2]];return{from:t,dir:y,hit:x}}let c=Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),d=gn(n,e,s+c,r,o,{ignoreBox:a}),u=d.kind==="none"?[n[0]+e[0]*s,n[1]+e[1]*s,n[2]+e[2]*s]:d.point,p=[u[0]-t[0],u[1]-t[1],u[2]-t[2]],f=Math.hypot(p[0],p[1],p[2]);f>1e-9?(p[0]/=f,p[1]/=f,p[2]/=f):(p[0]=e[0],p[1]=e[1],p[2]=e[2]);let g=ao(p,i,l);return{from:t,dir:g,hit:gn(t,g,s,r,o)}}var xt=Object.freeze({head:Object.freeze({cy:en.neckY+en.head.centerY,r:en.head.rx}),body:Object.freeze({ay:en.ankleHeight,by:en.neckY,r:Math.max(...en.torso.shirt.map(n=>n[0]))})});function Sg(n,e=oe.combat.hitPad){let[t,i,s]=n.pos,r=n.shapes;r.head.c[0]=t,r.head.c[1]=i+xt.head.cy,r.head.c[2]=s,r.head.r=xt.head.r+e,r.body.r=xt.body.r+e,r.body.a[0]=t,r.body.a[1]=i+xt.body.ay,r.body.a[2]=s,r.body.b[0]=t,r.body.b[1]=i+xt.body.by,r.body.b[2]=s}function wg({id:n,pos:e,yaw:t=0,rail:i=null},s=oe.dummy){let r={id:n,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:t,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:xt.head.r},body:{a:[0,0,0],b:[0,0,0],r:xt.body.r}}};return Sg(r),r}function PT(n,e){let t=n%(4*e);return t<e?t:t<3*e?2*e-t:t-4*e}function Tg(n,e,t=oe.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!n.alive)n.respawnT-=e,n.respawnT<=0&&(n.alive=!0,n.respawnT=0,n.health=t.health,n.railT=0,n.pos[0]=n.home[0],n.pos[1]=n.home[1],n.pos[2]=n.home[2]);else if(n.rail&&n.rail.half>0){n.railT+=e*Math.max(0,t.railSpeed);let i=PT(n.railT,n.rail.half),s=n.rail.axis==="x"?0:2;n.pos[0]=n.home[0],n.pos[2]=n.home[2],n.pos[s]=n.home[s]+i}Sg(n)}function Eg(n,e,t=oe.dummy){return!n.alive||!(e>0)?null:(n.health-=e,n.health>0?"hit":(n.health=0,n.alive=!1,n.respawnT=t.respawnTime,"kill"))}function df(n,e,t=1){return e!=="head"&&e!=="body"?0:n.damage*t*(e==="head"?n.headMult:1)}function Ag(n,e,t){for(let i of e)if(Math.hypot(n[0]-i.pos[0],n[2]-i.pos[2])<=t)return!0;return!1}function Rg(n){let e=new Float32Array(n),t=new Uint8Array(n),i=0;return{ages:e,alive:s=>t[s]===1,spawn(){let s=-1;for(let r=0;r<n;r++){let o=(i+r)%n;if(!t[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<n;r++)e[r]>e[s]&&(s=r)}return t[s]=1,e[s]=0,i=(s+1)%n,s},clear(){t.fill(0)},update(s,r){for(let o=0;o<n;o++)t[o]&&(e[o]+=s,e[o]>r(o)&&(t[o]=0))}}}var IT=new H(0,0,1);function Cg(n,e=()=>oe.feedback){let t=new fn,i=(R=1)=>(Math.random()*2-1)*R;function s(R,D,T){let O=new ds(R,zt({color:D,rim:0}),T);O.frustumCulled=!1,O.count=T,t.position.set(0,-1e3,0),t.scale.setScalar(0),t.updateMatrix();for(let F=0;F<T;F++)O.setMatrixAt(F,t.matrix);return n.add(O),{mesh:O,pool:Rg(T),pos:new Float32Array(T*3),vel:new Float32Array(T*3),aux:new Float32Array(T*4)}}let r=s(new Wr(.5,0),K.playerOrange,8),o=s(new wt(1,1,1),K.playerOrange,24),a=s(new Wr(.5,0),K.gel,8),l=s(new wt(1,1,1),K.gel,24),h=s(new wt(.05,.05,.05),K.cream,48),c=s(new er(.5,0),K.gel,96),d=s(new wt(.16,.2,.012),K.cream,48),u=s(new er(.5,0),K.cream,40),p=s(new er(.5,1),K.planet,4),f=s(new wt(1,1,1),K.playerOrange,16),g=new H;function m(R,D){t.updateMatrix(),R.mesh.setMatrixAt(D,t.matrix),R.mesh.instanceMatrix.needsUpdate=!0}let x=(R,D)=>{t.position.set(0,-1e3,0),t.scale.setScalar(0),t.quaternion.identity(),m(R,D)},_=(R,D,T,O,F)=>{R.pos[D*3]=T,R.pos[D*3+1]=O,R.pos[D*3+2]=F},w=(R,D,T,O,F)=>{R.vel[D*3]=T,R.vel[D*3+1]=O,R.vel[D*3+2]=F};function y(R,D,T,O,F){let W=T[0]+i(O),j=T[1]+i(O),V=T[2]+i(O),Y=Math.hypot(W,j,V)||1;w(R,D,W/Y*F*(.5+Math.random()*.5),j/Y*F*(.5+Math.random()*.5),V/Y*F*(.5+Math.random()*.5))}let M=[];function b(R,D,T,O){M.push({k:R,life:D,shown:new Uint8Array(R.pool.ages.length),step(F){let W=e().gravity,j=R;for(let V=0;V<j.pool.ages.length;V++)if(j.pool.alive(V)){j.vel[V*3+1]-=W*F;for(let Y=0;Y<3;Y++)j.pos[V*3+Y]+=j.vel[V*3+Y]*F}},draw(F){let W=1-R.pool.ages[F]/D();t.position.set(R.pos[F*3],R.pos[F*3+1],R.pos[F*3+2]),t.scale.setScalar(T(F)*Math.max(0,W)),O?t.rotation.set(R.aux[F*4]+R.pool.ages[F]*7,R.aux[F*4+1]+R.pool.ages[F]*5,R.aux[F*4+2]):t.quaternion.identity(),m(R,F)}})}b(h,()=>e().sparkTime,()=>1,!1),b(c,()=>e().gelTime,R=>.05+c.aux[R*4+3]*.07,!1),b(d,()=>e().receiptTime,()=>1,!0);function v(R,D){M.push({k:R,shown:new Uint8Array(R.pool.ages.length),life:()=>e().flashTime,step(){},draw(T){let O=1-R.pool.ages[T]/e().flashTime;t.position.set(R.pos[T*3],R.pos[T*3+1],R.pos[T*3+2]),t.scale.setScalar(e()[D]*(.5+.5*Math.max(0,O))),t.rotation.set(R.aux[T*4],R.aux[T*4+1],R.aux[T*4+2]),m(R,T)}})}function S(R,D,T,O=1){M.push({k:R,shown:new Uint8Array(R.pool.ages.length),life:()=>e()[D],step(){},draw(F){let W=Math.max(0,1-R.pool.ages[F]/e()[D]),j=e()[T]*O*W,V=R.aux[F*4];t.position.set(R.pos[F*3],R.pos[F*3+1],R.pos[F*3+2]),t.quaternion.setFromUnitVectors(IT,g.set(R.vel[F*3],R.vel[F*3+1],R.vel[F*3+2])),t.scale.set(j,j,V),m(R,F)}})}let C=.9;M.push({k:u,shown:new Uint8Array(u.pool.ages.length),life:()=>C,step(R){for(let D=0;D<u.pool.ages.length;D++)if(u.pool.alive(D))for(let T=0;T<3;T++)u.pos[D*3+T]+=u.vel[D*3+T]*R},draw(R){let D=u.pool.ages[R]/C;t.position.set(u.pos[R*3],u.pos[R*3+1],u.pos[R*3+2]),t.scale.setScalar(u.aux[R*4+3]*(.5+D)*(1-D*D*D)),t.quaternion.identity(),m(u,R)}}),M.push({k:p,shown:new Uint8Array(p.pool.ages.length),life:()=>e().blastTime,step(){},draw(R){let D=Math.min(p.pool.ages[R]/Math.max(e().blastTime,.001),1),T=1-(1-Math.min(D/.6,1))**2,O=D>.6?1-(D-.6)/.4:1;t.position.set(p.pos[R*3],p.pos[R*3+1],p.pos[R*3+2]),t.scale.setScalar(Math.max(e().blastSize*T*O,.001)),t.rotation.set(0,p.aux[R*4],0),m(p,R)}}),S(f,"tracerTime","tracerWidth",.6),v(r,"flashSize"),v(a,"enemyFlashSize"),S(o,"tracerTime","tracerWidth"),S(l,"enemyTracerTime","enemyTracerWidth");let A=(R,D,T)=>{let O=R.pool.spawn();_(R,O,D[0]+T[0]*.1,D[1]+T[1]*.1,D[2]+T[2]*.1),R.aux[O*4]=i(3),R.aux[O*4+1]=i(3),R.aux[O*4+2]=i(3)},I=(R,D,T)=>{let O=T[0]-D[0],F=T[1]-D[1],W=T[2]-D[2],j=Math.hypot(O,F,W);if(!(j>1e-6))return;let V=R.pool.spawn();_(R,V,D[0]+O/2,D[1]+F/2,D[2]+W/2),w(R,V,O/j,F/j,W/j),R.aux[V*4]=j};return{flash(R,D){A(r,R,D)},tracer(R,D){I(o,R,D)},friendlyTracer(R,D){I(f,R,D)},steam(R){let D=u.pool.spawn();_(u,D,R[0],R[1],R[2]),w(u,D,i(.15),.7+Math.random()*.4,i(.15)),u.aux[D*4+3]=.16+Math.random()*.1},blast(R){let D=p.pool.spawn();_(p,D,R[0],R[1]+.3,R[2]),p.aux[D*4]=Math.random()*6;for(let T=0;T<6;T++){let O=u.pool.spawn(),F=T/6*Math.PI*2+Math.random();_(u,O,R[0],R[1]+.2,R[2]),w(u,O,Math.cos(F)*2.2,.8+Math.random()*.6,Math.sin(F)*2.2),u.aux[O*4+3]=.35+Math.random()*.2}this.gel([R[0],R[1]+.3,R[2]],[0,1,0],12)},enemyFlash(R,D){A(a,R,D)},enemyTracer(R,D){I(l,R,D)},spark(R,D){for(let T=0;T<e().sparkCount;T++){let O=h.pool.spawn();_(h,O,R[0],R[1],R[2]),y(h,O,D,.9,3)}},gel(R,D,T=e().gelCount){for(let O=0;O<T;O++){let F=c.pool.spawn();_(c,F,R[0],R[1],R[2]),y(c,F,D,1.2,e().gelSpeed),c.aux[F*4+3]=Math.random()}},receipts(R,D=e().receiptCount){for(let T=0;T<D;T++){let O=d.pool.spawn();_(d,O,R[0],R[1],R[2]),y(d,O,[0,1,0],1.5,e().gelSpeed),d.aux[O*4]=i(3),d.aux[O*4+1]=i(3),d.aux[O*4+2]=i(3)}},clear(){for(let R of M){R.k.pool.clear();for(let D=0;D<R.shown.length;D++)R.shown[D]&&(x(R.k,D),R.shown[D]=0)}},update(R){if(R>0)for(let D of M){D.step(R);let{pool:T}=D.k;T.update(R,D.life);for(let O=0;O<T.ages.length;O++)T.alive(O)?(D.draw(O),D.shown[O]=1):D.shown[O]&&(x(D.k,O),D.shown[O]=0)}}}}function LT(n,e,t){let i=Math.PI/180;return t/2*Math.tan(n*i/2)/Math.tan(e*i/2)}var DT=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),ff=n=>n<0?0:n>1?1:n;function Pg({arsenal:n,stance:e,firing:t,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:h=null,face:c=null,objective:d="",bark:u=null,banner:p=null,grenades:f=null,action:g=null,weapons:m=oe.weapons,combat:x=oe.combat,feedback:_=oe.feedback}){let w=n.current(),y=m[w],M=n.ammo[w],b=n.reload,v=s==="pad"?"RB":"R",S={show:!1,marker:0,good:[y.goodStart,y.goodEnd],perfect:[y.perfectStart,y.perfectEnd],flash:h,prompt:""};if(b){let D=Math.max(y.reloadTime,x.minReloadTime);S={...S,show:!0,marker:ff(b.t/D),prompt:b.press===null?`${v} again on the bright zone`:""}}else M.mag<=0&&(S.prompt=`${v} to reload`);let C=M.mag<=Math.max(0,_.lowAmmoFrac)*y.mag,A=y.infiniteReserve<=0&&M.reserve<=0,I={show:!1,text:"",kind:""};!b&&C&&!p&&(I.show=!0,A&&M.mag<=0?(I.text="NO AMMO",I.kind="none"):A?(I.text="LOW AMMO",I.kind="low"):M.mag<=0?(I.text=`EMPTY \u2014 RELOAD  ${v}`,I.kind="empty"):(I.text=`RELOAD  ${v}`,I.kind="low"));let R=e==="aim";return{weapon:wh[w].name,mag:M.mag,reserve:y.infiniteReserve>0?"\u221E":M.reserve,reticle:{show:R||!!t||i,gap:_.reticleMinGap+LT(r,o,a),opacity:i&&!R?_.coverReticleOpacity:1},reload:S,alert:I,hit:{show:!!l,kind:l||null},faceShow:!!c&&!p&&!c.downed.show,face:c,objective:d,bark:u,banner:p,grenades:Number.isFinite(f)?f:null,action:g&&g.text?{text:g.text,hold:Number.isFinite(g.hold)?ff(g.hold):null}:null}}function Ig(n=document.body){let e=(z,re,be,xe)=>{let ee=document.createElement(z);return re&&(ee.className=re),xe!==void 0&&(ee.textContent=xe),be&&be.appendChild(ee),ee},t=e("div","",n);t.id="cr-hud";let i={};for(let z of["top","right","bottom","left"])i[z]=e("div",`cr-edge cr-edge-${z}`,t);let s="http://www.w3.org/2000/svg",r=(z,re,be)=>{let xe=document.createElementNS(s,z);for(let ee of Object.keys(re))xe.setAttribute(ee,re[ee]);return be&&be.appendChild(xe),xe},o=e("div","cr-face",t),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let h=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let c=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),d=e("div","cr-banner",t),u=e("div","cr-banner-title",d),p=e("div","cr-banner-hint",d),f=e("i","cr-ring",d),g=e("div","cr-action",t),m=e("span","cr-action-text",g),x=e("i","cr-ring",g),_=e("div","cr-objective",t),w=e("div","cr-bark",t),y=e("span","cr-bark-who",w),M=e("span","cr-bark-text",w),b=e("div","cr-weapon",t),v=e("div","cr-weapon-name",b),S=e("div","cr-ammo",b),C=e("div","cr-kb",b),A=e("div","cr-prompt",b),I=e("div","cr-reload",b),R=e("div","cr-zone cr-zone-good",I),D=e("div","cr-zone cr-zone-perfect",I),T=e("div","cr-marker",I),O=e("div","cr-result",b),F=e("div","cr-alert",t),W=e("div","cr-reticle",t),j=["up","down","left","right"].map(z=>e("div",`cr-arm cr-arm-${z}`,W)),V=e("div","cr-hit",t);e("i","cr-hit-a",V),e("i","cr-hit-b",V),e("i","cr-hit-ring",V);let Y={},G=(z,re,be)=>{Y[z]!==re&&(Y[z]=re,be(re))},he=z=>`${(z*100).toFixed(1)}%`,ve=(z,[re,be])=>{z.style.left=he(re),z.style.width=he(Math.max(0,be-re))};return{render(z){G("weapon",z.weapon,xe=>{v.textContent=xe}),G("ammo",`${z.mag}|${z.reserve}`,()=>{S.textContent=`${z.mag} / ${z.reserve}`}),G("prompt",z.reload.prompt,xe=>{A.textContent=xe}),G("reload.show",z.reload.show,xe=>{I.hidden=!xe}),G("good",`${z.reload.good}`,()=>ve(R,z.reload.good)),G("perfect",`${z.reload.perfect}`,()=>ve(D,z.reload.perfect)),G("marker",Math.round(z.reload.marker*500),()=>{T.style.left=he(z.reload.marker)}),G("flash",z.reload.flash,xe=>{O.textContent=xe&&DT[xe]||"",O.dataset.kind=xe||""}),G("alert",z.alert.show?`${z.alert.kind}|${z.alert.text}`:"",()=>{F.hidden=!z.alert.show,F.textContent=z.alert.text,F.dataset.kind=z.alert.kind}),G("ret.show",z.reticle.show,xe=>{W.hidden=!xe}),G("ret.op",Math.round(z.reticle.opacity*100),()=>{W.style.opacity=z.reticle.opacity.toFixed(2)}),G("ret.gap",Math.round(z.reticle.gap),xe=>{j.forEach(ee=>ee.style.setProperty("--gap",`${xe}px`))});let re=z.face;if(G("face.show",!!z.faceShow,xe=>{o.hidden=!xe}),re){G("face.op",Math.round(re.face.opacity*100),()=>{o.style.opacity=re.face.opacity.toFixed(2)}),G("face.frown",Math.round(re.face.frown*50),()=>{c.setAttribute("d",`M 30 72 Q 50 ${(72-24*re.face.frown).toFixed(1)} 70 72`)}),G("face.fill",Math.round(re.face.fill*50),()=>{let xe=92*re.face.fill;h.setAttribute("y",(96-xe).toFixed(1)),h.setAttribute("height",xe.toFixed(1))});for(let xe of Object.keys(i))G(`edge.${xe}`,Math.round(re.edges[xe]*50),()=>{i[xe].style.opacity=re.edges[xe].toFixed(2)})}G("kb",z.grenades===null?"":String(z.grenades),xe=>{C.hidden=xe==="",C.textContent=`KETTLEBELLS ${xe}`}),G("action",z.action?z.action.text:"",xe=>{g.hidden=!z.action,m.textContent=xe}),G("action.hold",z.action&&z.action.hold!==null?Math.round(z.action.hold*100):-1,xe=>{x.hidden=xe<0,x.style.setProperty("--hold",`${Math.max(xe,0)*3.6}deg`)});let be=z.banner&&z.banner.hold!==void 0&&z.banner.hold!==null?Math.round(ff(z.banner.hold)*100):-1;G("banner.hold",be,xe=>{f.hidden=xe<0,f.style.setProperty("--hold",`${Math.max(xe,0)*3.6}deg`)}),G("banner",z.banner?`${z.banner.title}|${z.banner.hint}`:"",xe=>{d.hidden=!z.banner,z.banner&&(u.textContent=z.banner.title,p.textContent=z.banner.hint)}),G("objective",z.objective||"",xe=>{_.textContent=xe,_.hidden=!xe}),G("bark",z.bark?`${z.bark.speaker}|${z.bark.text}`:"",()=>{w.hidden=!z.bark,z.bark&&(y.textContent=z.bark.speaker,y.style.color=z.bark.color||"",M.textContent=z.bark.text)}),G("hit",z.hit.show?z.hit.kind:"",xe=>{V.hidden=!xe,V.dataset.kind=xe})}}}function Lg(n){let e=Ts(en),t=Es(e),i=new St;i.name=`dummy-${n.id}`,i.add(e.root),i.add(e.shadow);let s=!!(n.rail&&n.rail.half>0),r=n.yaw,o=n.pos[0],a=n.pos[2],l="live",h=0;s&&t.play("run",{fade:0});function c(u){i.scale.setScalar(Math.max(u,1e-4))}function d(u){i.position.set(n.pos[0],n.pos[1],n.pos[2]);let p=n.pos[0]-o,f=n.pos[2]-a;s&&p*p+f*f>1e-8&&(r=Math.atan2(p,f)),o=n.pos[0],a=n.pos[2],i.rotation.y=r;let g=oe.feedback;if(l==="burst"){h+=u;let m=g.dummyBurstTime>0?Math.min(h/g.dummyBurstTime,1):1;c(1+.2*m),m>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){h+=u;let m=g.dummyRespawnPop>0?Math.min(h/g.dummyRespawnPop,1):1;c(m),m>=1&&(l="live")}l!=="gone"&&(t.update(s?u*Math.min(Math.max(oe.dummy.railSpeed/Ss,.3),3):u),e.update(u))}return{group:i,update:d,hit(){(l==="live"||l==="pop")&&t.play("flinch")},burst(){l="burst",h=0},respawn(){l="pop",h=0,i.visible=!0,c(0)}}}var Dg="#f3efe6";function Ng(n){for(let e of Object.values(n))e&&typeof e=="object"&&Ng(e);return Object.freeze(n)}var Og=Ng({...structuredClone(en),name:"doc-placeholder",colors:{...en.colors,hair:K.teal,shirt:Dg,collar:Dg},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...en.face,brow:"uni",fixedSmile:0}});function Eh(n){return Qt(n.map(([e,t,i,s,r,o])=>new wt(e,t,i).translate(s,r,o)),!1)}function fr(n,e,t){let i=new ut(fi(e),zt({color:t}));return Pn(i),n.add(i),i}var lo=.09;function NT(){let n=new St;n.name="disc",n.position.set(0,-.05,.22),fr(n,new pn(lo,lo,.022,20),K.playerOrange),fr(n,new pn(lo-.018,lo-.018,.034,20),K.cream);let e=[];for(let t=0;t<6;t++){let i=t/6*Math.PI*2;e.push(new wt(.02,.026,.05).rotateY(i).translate(Math.sin(i)*(lo-.03),0,Math.cos(i)*(lo-.03)))}return fr(n,Qt(e,!1),K.ink),n}function OT(){let n=new St;return n.name="rifle",fr(n,Eh([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),K.playerOrange),fr(n,Eh([[.05,.12,.06,0,-.07,0]]),K.ink),n.add(NT()),n}function UT(){let n=new St;return n.name="pistol",fr(n,Eh([[.045,.06,.25,0,.04,.075]]),K.playerOrange),fr(n,Eh([[.04,.1,.05,0,-.04,0]]),K.ink),n}var FT={regret:[0,.06,.45],pistol:[0,.04,.2]},kT=new H(0,0,1),eI=new H,Th=new H;function Ug(){let n=new St;n.name="gun";let e={regret:OT(),pistol:UT()};n.add(e.regret,e.pistol);let t="regret";e.pistol.visible=!1;let i=new H,s=new H(0,0,1),r=e.regret.getObjectByName("disc"),o=1/0;function a(c){if(!(!e[c]||c===t)){t=c;for(let d of Object.keys(e))e[d].visible=d===c}}function l(c,d){i.set(c[0],c[1],c[2]),s.set(d[0],d[1],d[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),n.quaternion.setFromUnitVectors(kT,s),h()}function h(){let c=oe.feedback,d=Math.max(c.gunSquashTime,1e-6),u=o>=0&&o<d?Math.sin(Math.PI*o/d):0,p=c.gunSquash*u;n.scale.set(1+p/2,1+p/2,1-p),n.position.copy(i).addScaledVector(s,-c.gunKick*u)}return{group:n,setWeapon:a,place:l,shot(){o=0,h()},update(c,d=0){o+=c>0?c:0,c>0&&d&&(r.rotation.y+=d*c),h()},disc:r,tip(c=[0,0,0]){let d=FT[t];return n.updateMatrix(),Th.set(d[0],d[1],d[2]).applyMatrix4(n.matrix),c[0]=Th.x,c[1]=Th.y,c[2]=Th.z,c}}}var Da=.12;function Fg(){let n=(s,r)=>{s.deleteAttribute("uv");let o=new it(r),a=s.getAttribute("position").count,l=new Float32Array(a*3);for(let h=0;h<a;h++)l[h*3]=o.r,l[h*3+1]=o.g,l[h*3+2]=o.b;return s.setAttribute("color",new Et(l,3)),s},e=n(new an(Da,14,10).toNonIndexed(),K.ink),t=[new wt(.03,.1,.03).translate(-.055,Da+.04,0),new wt(.03,.1,.03).translate(.055,Da+.04,0),new wt(.14,.03,.03).translate(0,Da+.1,0)].map(s=>n(s.toNonIndexed(),K.playerOrange)),i=n(new wt(.07,.07,.012).translate(0,0,Da-.002).toNonIndexed(),K.cream);return Qt([e,...t,i],!1)}var Rh=Math.PI*2,Li=(n,e,t)=>n<e?e:n>t?t:n,BT=n=>n-Rh*Math.round(n/Rh),zg=.001,pf=.5,mf=.3;function zT(n,e=n.tuning||oe.move){let t=n.state,i=n.speed();if(t==="bash")return{name:"bash",rate:ht.bash.duration/Math.max(oe.melee.bashTime,.001)};if(t==="rev")return{name:"aim",rate:1};if(t==="execute")return{name:"bash",rate:1,loop:!0};if(t==="reviveTobble")return{name:"revive",rate:1};if(t==="downed")return{name:"crawl",rate:Li(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(t==="roll")return{name:"roll",rate:ht.roll.duration/e.rollTime};if(t==="sprint")return{name:"sprint",rate:Li(i/Ss,e.sprintRateMin,e.sprintRateMax)};if(t==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:Li(i/Ss,e.runRateMin,e.runRateMax)};if(n.grenadeAim)return{name:"throw",rate:0,at:mf*ht.throw.duration};if(n.aiming||n.firing)return{name:"aim",rate:1}}if(t==="coverSlide")return{name:es(n).kind==="low"?"coverLow":"coverTall",rate:1};if(t==="coverSwap")return{name:"sprint",rate:Li(i/Ss,e.sprintRateMin,e.sprintRateMax)};if(t==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||oe.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":dr(n)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:Li(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return t==="vault"?{name:"vault",rate:ht.vault.duration/Math.max((n.coverTuning||oe.cover).vaultTime,zg)}:{name:"idle",rate:1}}function HT(n){let e=n.state==="cover"||n.state==="coverSlide"?es(n):null;return!e||e.kind!=="low"?0:n.state==="coverSlide"?Li(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?Li(1-Math.max(n.cover.pop,n.cover.blind||0),0,1):0}var GT=(n,e)=>4*e*n*(1-n),VT=(n,e,t)=>n>=0&&n<t?e*Math.sin(Math.PI*n/t):0;function gf(n){if(n<=.08)return 0;if(n>=.9)return Rh;let e=(n-.08)/.82;return Rh*e*e*(3-2*e)}var kg=.95,Bg=.6,ts=new H,Yn=[0,0,1],Ah=[0,0,0];function Hg(n,e=Og){let t=Ts(e),i=Es(t),s=new St;s.name="player";let r=new St;r.position.y=pf,t.root.position.y=-pf,r.add(t.root),s.add(r),s.add(t.shadow);let o=t.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=Ug();s.add(l.group);let h=new ut(Fg(),zt({vertexColors:!0,rim:.15}));h.name="kettlebellInHand",h.position.set(0,.1,0),h.visible=!1,a.R.add(h);let c=0,d=1/0,u=t.root.getObjectByName("head"),p=new H,f=!0;function g(D,T,O){u.getWorldPosition(p),p.y+=t.spec.head.centerY;let F=Math.hypot(D[0]-p.x,D[1]-p.y,D[2]-p.z);return f=Bm(F,f,T,O),u.visible=f,f}let m=0,x=0,_=0,w="",y=0,M=-1,b=n.slams||0,v=1/0;function S(D,T,O){let F=n.pos,W=n.prevPos,j=n.coverTuning||oe.cover,V=HT(n);m=j.popTime>0?Math.max(V,m+Li(V-m,-T/j.popTime,T/j.popTime)):V;let Y=n.state==="cover"&&n.cover&&n.cover.edge.kind==="low"?Li(n.cover.blind||0,0,1):0;if(V>0||Y>0){let Ke=es(n);x=Ke.normal[0],_=Ke.normal[1]}let G=m*j.lowDrawBack+Y*j.blindDrawBack;s.position.set(W[0]+(F[0]-W[0])*D+x*G,W[1]+(F[1]-W[1])*D,W[2]+(F[2]-W[2])*D+_*G),s.rotation.y=n.prevFacing+BT(n.facing-n.prevFacing)*D;let he=zT(n),ve=c>0;ve&&(he={name:"throw",rate:ht.throw.duration*(1-mf)/Math.max(oe.grenade.throwTime,.001),at:mf*ht.throw.duration},c-=T);let z=ve?"throw!":he.name;z!==w||n.entries!==M?(i.play(he.name,he.name==="roll"?{fade:.05}:he.at!==void 0?{fade:.06,at:he.at}:void 0),w=z,M=n.entries,y=0):he.loop&&(y+=T*he.rate,y>=ht[he.name].duration&&(y-=ht[he.name].duration,i.play(he.name,{fade:0}))),i.update(T*he.rate,he.rate===0?T:void 0),t.update(T);let re=oe.feedback,be=Math.max(re.gunSquashTime,1e-6);d=O&&O.shot?T:d+T;let xe=d<be?re.bodyKick*Math.sin(Math.PI*d/be):0;r.rotation.x=(n.state==="roll"?gf(n.stateTime/n.tuning.rollTime):0)-xe,(n.slams||0)!==b?(b=n.slams||0,v=0):v+=T;let ee=n.state==="vault"?GT(Li(n.stateTime/Math.max(j.vaultTime,zg),0,1),j.vaultHop):0,Ce=VT(v,j.slamSquash,j.slamSquashTime);r.scale.set(1+Ce/2,1-Ce,1+Ce/2),r.position.y=pf*(1-Ce)+ee,h.visible=!!(O&&O.kettlebell)&&!ve,h.scale.setScalar(oe.grenade.ballRadius/.12),C(he.name,T,O)}function C(D,T,O){if(s.updateMatrixWorld(!0),(D==="coverBlindTallL"?a.L:a.R).getWorldPosition(ts),s.worldToLocal(ts),O&&O.stance&&D==="coverBlindLow")Yn[0]=0,Yn[1]=Math.sin(kg),Yn[2]=Math.cos(kg);else if(n.state==="bash"||n.state==="rev"||n.state==="execute")Yn[0]=0,Yn[1]=-.05,Yn[2]=1;else if(O&&O.stance&&O.dir){let W=Math.cos(s.rotation.y),j=Math.sin(s.rotation.y);Yn[0]=O.dir[0]*W-O.dir[2]*j,Yn[1]=O.dir[1],Yn[2]=O.dir[0]*j+O.dir[2]*W}else Yn[0]=0,Yn[1]=-Math.sin(Bg),Yn[2]=Math.cos(Bg);O&&O.weapon&&l.setWeapon(O.weapon),l.place([ts.x,ts.y,ts.z],Yn),O&&O.shot&&l.shot(),l.update(T,n.state==="rev"||n.state==="execute"?oe.melee.cutterSpin:0),l.group.visible=n.state!=="roll"&&n.state!=="downed"&&n.state!=="reviveTobble"&&!h.visible&&c<=0}function A(D=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(Ah),ts.set(Ah[0],Ah[1],Ah[2]).applyMatrix4(s.matrixWorld),D[0]=ts.x,D[1]=ts.y,D[2]=ts.z,D}function I(){t.dispose(),t.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:S,dispose:I,rig:t,anim:i,fadeHeadFor:g,gun:l,gunTip:A,throwNow:()=>{c=Math.max(oe.grenade.throwTime,.001)},kettlebell:h}}var Ch=new Set(["telegraph","burst"]),co=(n,e,t)=>n<e?e:n>t?t:n,WT=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),Gg=.5,XT=-.6,YT=n=>n.point&&n.point.kind==="tall"?"tall":"low";function qT(n){let e=YT(n)==="tall";switch(n.state){case"run":return"run";case"flinch":case"stagger":case"executed":return"flinch";case"downed":return"crawl";case"kneel":return"revive";case"dive":return"roll";case"spawn":return"idle";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let t=n.point,i=pi(-t.normal[0],-t.normal[1]);return t.tangent[0]*t.end*Math.cos(i)-t.tangent[1]*t.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function $T(n){if((n.state==="idle"||n.state==="cover"||n.state==="reload"||n.state==="flinch"||n.state==="suppress")&&n.point)return pi(-n.point.normal[0],-n.point.normal[1]);if(Ch.has(n.state))return pi(n.aim[0]-n.pos[0],n.aim[2]-n.pos[2]);if(n.state==="run"&&n.path&&n.path[n.pathI]){let e=n.path[n.pathI];if(Math.hypot(e[0]-n.pos[0],e[1]-n.pos[2])>1e-6)return pi(e[0]-n.pos[0],e[1]-n.pos[2])}return n.yaw}function ZT(n){return n.state==="dead"||!n.alive?"dead":Ch.has(n.state)?"angry":n.state==="flinch"||n.state==="stagger"||n.state==="downed"||n.state==="executed"||n.state==="dive"?"scared":"smug"}var Xg=.03,xf=[0,.06,.32];function KT(){let n=new St;n.name="blaster";let t=Qt([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,h,c])=>new wt(r,o,a).translate(l,h,c)),!1),i=new ut(fi(t),zt({color:K.glorpPurple}));Pn(i),n.add(i);let s=new ut(new an(Xg,10,8),new bi({color:K.gel}));return s.name="emitter",s.position.set(xf[0],xf[1],xf[2]),n.add(s),{group:n,emitter:s}}var JT=new H(0,0,1),ii=new H,Us=new H,Vg=.6,Wg=.95;function Yg(n){let e=Ts(en),t=Es(e),i=new St;i.name=`associate-${n.id}`;let s=new St;s.position.y=Gg,e.root.position.y=-Gg,s.add(e.root),i.add(s),i.add(e.shadow);let r=e.root.getObjectByName("body").children[2],o=KT();i.add(o.group);let a="",l=0,h="",c=0,d=n.yaw,u="live",p=0,f=!1,g=0,m=0,x=0;function _(){u="live",p=0,c=0,d=n.yaw,f=!1,g=0,i.visible=!0,i.scale.setScalar(1),s.rotation.x=0,a="",h="",l=0,o.emitter.scale.setScalar(1)}function w(M,b){let v=oe.feedback,S=oe.cover,C=oe.associate;if(n.state==="unused"){i.visible=!1;return}if(n.state==="spawn"&&(u==="burst"||u==="gone")&&_(),!n.alive&&n.state==="dead"&&u==="live"&&(u="burst",p=0),u==="live"&&(i.visible=!0),u==="burst"){p+=b;let he=v.dummyBurstTime>0?Math.min(p/v.dummyBurstTime,1):1;i.scale.setScalar(1+.2*he),he>=1&&(u="gone",i.visible=!1)}if(u==="gone")return;let A=u==="burst",I=n.pos,R=n.prevPos,D=!A&&n.point&&n.point.kind==="low"&&n.state!=="run"&&n.state!=="dead",T=D?co(1-Math.max(n.pop,n.blind),0,1):0;c=S.popTime>0?Math.max(T,c+co(T-c,-b/S.popTime,b/S.popTime)):T;let O=D?co(n.blind,0,1):0;D&&(m=n.point.normal[0],x=n.point.normal[1]);let F=c*S.lowDrawBack+O*S.blindDrawBack,W=n.state==="spawn"?XT*(1-co(n.stateT/Math.max(oe.pad.riseTime,.001),0,1)):0;i.position.set(R[0]+(I[0]-R[0])*M+m*F,R[1]+(I[1]-R[1])*M+W,R[2]+(I[2]-R[2])*M+x*F);let j=n.state==="run"||Ch.has(n.state)?n.prevYaw+WT(n.yaw-n.prevYaw)*M:$T(n);if(d=Wt(d,j,C.turnRate*1.5*b),i.rotation.y=d,A)return;let V=qT(n);V!==a?(t.play(V,V==="flinch"?void 0:{fade:.1}),a=V,l=0):n.state==="executed"&&(l+=b,l>=ht.flinch.duration&&(l=0,t.play("flinch")));let Y=V==="run"?co(C.runSpeed/Ss,.5,3):1;V==="crawl"&&(Y=Math.hypot(I[0]-R[0],I[2]-R[2])>1e-5?1:0),V==="roll"&&(Y=ht.roll.duration/Math.max(C.diveReaction+C.diveTime,.001)),s.rotation.x=V==="roll"?gf(co(n.stateT/Math.max(C.diveReaction+C.diveTime,.001),0,1)):0,t.update(b*Y,Y===0?b:void 0),e.update(b);let G=ZT(n);G!==h&&(e.face.setExpression(G),h=G),y(V,b)}function y(M,b){o.group.visible=n.state!=="downed"&&n.state!=="dive",i.updateMatrixWorld(!0),r.getWorldPosition(ii);let v=ii.x,S=ii.y,C=ii.z;i.worldToLocal(ii);let A=ii.x,I=ii.y,R=ii.z;if(Ch.has(n.state)){let D=Math.cos(i.rotation.y),T=Math.sin(i.rotation.y),O=n.aim[0]-v,F=n.aim[2]-C;Us.set(O*D-F*T,n.aim[1]-S,O*T+F*D)}else M==="coverBlindLow"?Us.set(0,Math.sin(Wg),Math.cos(Wg)):n.state==="suppress"?Us.set(0,.05,1):Us.set(0,-Math.sin(Vg),Math.cos(Vg));if(Us.lengthSq()<1e-12&&Us.set(0,0,1),Us.normalize(),o.group.position.set(A,I,R),o.group.quaternion.setFromUnitVectors(JT,Us),f){g+=b;let D=.5+.5*Math.sin(g*2*Math.PI*8),T=oe.feedback.glintSize/Xg;o.emitter.scale.setScalar(1+(T-1)*D)}else o.emitter.scale.setScalar(1)}return{group:i,update:w,reset:_,death(){u==="live"&&(u="burst",p=0)},glint(M){M&&!f&&(g=0),f=!!M},tip(M=[0,0,0]){return i.updateMatrixWorld(!0),o.emitter.getWorldPosition(ii),M[0]=ii.x,M[1]=ii.y,M[2]=ii.z,M},rig:e,anim:t,blaster:o}}function qg(n=oe.health){let e=-1,t=0,i=0,s=!1,r={hp:n.max,downed:!1,downT:0,sinceHit:0,fraction(){return n.max>0?Math.max(0,Math.min(1,r.hp/n.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,t=0,n.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=n.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,n.reviveHealth*n.max),r.sinceHit=0,e=-1,t=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&n.standInRevive>0&&(i+=o,i>=n.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<n.max&&r.sinceHit>=n.regenDelay&&(e<0&&(e=r.hp,t=0),t+=Math.min(o,r.sinceHit-n.regenDelay),r.hp=n.regenTime>0&&t<n.regenTime?e+(n.max-e)*t/n.regenTime:n.max),r.hp>=n.max&&(r.hp=n.max,e=-1),null)},reset(){r.hp=n.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,t=0,i=0,s=!1}};return r}var jT=new Set(["cover","coverSlide","coverSwap"]),QT=[],eE=_f(),tE=_f(),Ph=[null];function _f(){return{alive:!0,shapes:{head:{c:[0,0,0],r:xt.head.r},body:{a:[0,0,0],b:[0,0,0],r:xt.body.r}}}}function $g(n){return jT.has(n.state)?es(n):null}function vf(n,e,t,i,s){let r=n.shapes;return r.head.r=xt.head.r,r.body.r=xt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+t,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],n}function Ih(n,e=_f(),t=oe.combat){let i=$g(n),s=!!i&&i.kind==="low"&&!(n.cover&&n.cover.pop>=.5);return e.alive=!0,s?vf(e,n.pos,t.crouchHead,.1,t.crouchBodyTop):vf(e,n.pos,xt.head.cy,xt.body.ay,xt.body.by)}function Zg(n,e,t,i,s,r=oe.combat){let o=$g(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return gn(n,e,t,i,QT);if(!a)return Ph[0]=Ih(s,eE,r),gn(n,e,t,i,Ph);let l=xt.body.by;return Ph[0]=vf(tE,s.pos,xt.head.cy,l-r.shoulderDrop,l),gn(n,e,t,i,Ph)}var Kg=1.49,Jg=.2;function jg(n,{spacing:e,cornerZone:t}){e=Math.max(Jg,Number.isFinite(e)?e:Jg);let i={cornerZone:t},s=[],r=(o,a,l)=>{let h=mi(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[h[0],h[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return n.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let h=l*e;r(o,h,Ns(o,h,i))}r(o,o.length,Ns(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function pr(n,e,t=[0,0]){let i=n.kind==="low"?0:n.end*e;return t[0]=n.pos[0]+n.tangent[0]*i,t[1]=n.pos[1]+n.tangent[1]*i,t}function kn(n,e,t){let i=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:gn(e,[i/o,s/o,r/o],o,n,[]).t>=o-1e-6}function Lh(n,e,t,i=oe){let s=[n.pos[0],n.kind==="low"?i.combat.crouchHead:Kg,n.pos[1]],r=pr(n,i.associate.popShift),o=[r[0],Kg,r[1]];return{protected:!kn(t,s,e),canShoot:kn(t,o,e)}}var Qg=.9;function Na(n,e,t,i){return ti(n,[e[0],Qg,e[1]],[t[0],Qg,t[1]],i)===1}var Oa=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function ex(n,e,{radius:t,linkMax:i}){let s=n.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)Oa(s[o],s[a])<=i&&Na(e,s[o],s[a],t)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function nE(n,e,t,i,s){let{nodes:r,links:o}=n,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),h=new Array(r.length).fill(!1),c=new Array(r.length).fill(!1);for(let m of t)c[m]=!0;let d=[];for(let m of e)a[m]=Oa(i,r[m]),d.push(m);let u=m=>a[m]+Oa(r[m],s),p=-1,f=1/0;for(;d.length;){let m=0;for(let _=1;_<d.length;_++){let w=d[_],y=d[m],M=u(w),b=u(y);(M<b-1e-12||Math.abs(M-b)<=1e-12&&w<y)&&(m=_)}let x=d.splice(m,1)[0];if(!h[x]){if(u(x)>=f)break;if(h[x]=!0,c[x]){let _=a[x]+Oa(r[x],s);(_<f-1e-12||Math.abs(_-f)<=1e-12&&x<p)&&(p=x,f=_)}for(let _ of o[x]){if(h[_])continue;let w=a[x]+Oa(r[x],r[_]);w<a[_]-1e-12&&(a[_]=w,l[_]=x,d.push(_))}}}if(p<0)return null;let g=[];for(let m=p;m>=0;m=l[m])g.push(m);return g.reverse()}function Ua(n,e,t,i,s){if(Na(e,t,i,s))return[[i[0],i[1]]];let{nodes:r}=n,o=[],a=[];if(r.forEach((u,p)=>{Na(e,t,u,s)&&o.push(p),Na(e,u,i,s)&&a.push(p)}),!o.length||!a.length)return null;let l=nE(n,o,a,t,i);if(!l)return null;let h=[...l.map(u=>r[u]),i],c=[],d=t;for(let u=0;u<h.length;u++){let p=h[u+1];p&&Na(e,d,p,s)||(c.push([h[u][0],h[u][1]]),d=h[u])}return c}var qI=Math.PI/180,tx=.3,yf=1e-6,iE=64,sE=4;var rE=(n,e,t)=>Math.max(e,Math.min(t,n));var mr=[0,0,0];function oE(n,e){let t=null,i=1/0;for(let a of n){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),h=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),c=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),d=Math.hypot(l,h,c);d<i&&(i=d,t=a)}if(mr[0]=mr[1]=mr[2]=0,!t)return mr[1]=1,mr;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=t.min[a]-e[a],h=e[a]-t.max[a],c=Math.max(l,h);c>r&&(r=c,s=a,o=l>h?-1:1)}return mr[s]=o,mr}var Mf={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},Di=[0,0,0];function aE(n,e,t,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=n.pos,l=n.vel,h=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,c=rE(Math.ceil(h/r),1,iE),d=e/c;for(let u=0;u<c;u++){let p=d;for(let f=0;f<=sE&&p>0;f++){Di[0]=a[0]+l[0]*p,Di[1]=a[1]+l[1]*p-.5*o*p*p,Di[2]=a[2]+l[2]*p;let g=ti(t,a,Di,r);if(g>=1){a[0]=Di[0],a[1]=Di[1],a[2]=Di[2],l[1]-=o*p;break}a[0]+=(Di[0]-a[0])*g,a[1]+=(Di[1]-a[1])*g,a[2]+=(Di[2]-a[2])*g,l[1]-=o*p*g;let m=oE(t,a),x=l[0]*m[0]+l[1]*m[1]+l[2]*m[2];if(x<0){let _=l[0]-m[0]*x,w=l[1]-m[1]*x,y=l[2]-m[2]*x;l[0]=_*i.friction-m[0]*x*i.restitution,l[1]=w*i.friction-m[1]*x*i.restitution,l[2]=y*i.friction-m[2]*x*i.restitution,-x>=tx&&(s.clank=!0),m[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-m[0]*r,s.upPos[1]=a[1]-m[1]*r,s.upPos[2]=a[2]-m[2]*r)}if(a[0]+=m[0]*yf,a[1]+=m[1]*yf,a[2]+=m[2]*yf,m[1]>.7&&Math.hypot(l[0],l[1],l[2])<tx){l[0]=l[1]=l[2]=0,n.resting=!0,s.rested=!0;return}p*=1-g}}}function lE(n,e,t,i=oe.grenade){return aE(n,e,t,i,Mf),Mf.clank?"clank":Mf.rested?"rest":null}function nx(n,e=oe.grenade){return n>=0?n<=e.killRadius?e.killDamage:n>=e.radius?0:e.damage*(1-n/e.radius):0}function ix(n=oe.grenade){let e=[];return{live:e,throw(t,i){let s={pos:[t[0],t[1],t[2]],vel:[i[0],i[1],i[2]],prevPos:[t[0],t[1],t[2]],resting:!1,fuse:n.fuse};return e.push(s),s},step(t,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=t,lE(o,t,i,n)==="clank"&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.fuse<=1e-9&&(s.push({type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}var cE=.25,Nh=new Set(["executed","unused","dead"]),hE=new Set(["cover","suppress","reload"]),Fs={r:.25,y:.25,back:.2,front:.6},uE=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),dE=new Set(["telegraph","burst","suppress"]),Tf=n=>Math.max(0,Math.min(1,n)),Ni=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),sx=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function Ef(n,e=oe.associate){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=Math.PI,n.state="idle",n.stateT=0,n.health=e.health,n.alive=!0,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.aim[0]=n.aim[1]=n.aim[2]=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckRef[0]=n.start[0],n.stuckRef[1]=n.start[2],n.stuckCount=0,n.helper=null,n.helping=null,n.target="player",n.diveDir[0]=n.diveDir[1]=0,n.divePoint=null,n.claimed=!1,n.diedAt=-1/0,n.wasDowned=!1,ho(n),n}function Af(n){return n.alive=!1,n.state="unused",n.stateT=0,n.health=0,n.pos[1]=n.prevPos[1]=-50,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.helping=null,n.claimed=!1,n.wasDowned=!1,ho(n),n}function Rf(n,e,t){let i=(t.tuning||oe).associate;for(let r=0;r<3;r++)n.pos[r]=e[r],n.prevPos[r]=e[r];let s=t.player;return n.yaw=n.prevYaw=s?Math.atan2(s.pos[0]-e[0],s.pos[2]-e[2]):Math.PI,n.state="spawn",n.stateT=0,n.health=i.health,n.alive=!0,n.claimed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckCount=0,n.helper=null,n.helping=null,n.target="player",n.wasDowned=!1,n.diedAt=-1/0,n.divePoint=null,ho(n),n}function Cf({id:n,pos:e},t=oe.associate){let i={id:n,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:xt.head.r},body:{a:[0,0,0],b:[0,0,0],r:xt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return Ef(i,t)}function ho(n,e=oe.combat){let[t,i,s]=n.pos,r=n.shapes;if(n.state==="downed"){let a=Math.sin(n.yaw),l=Math.cos(n.yaw);return r.body.r=Fs.r,r.head.r=xt.head.r,r.body.a[0]=t-a*Fs.back,r.body.a[1]=i+Fs.y,r.body.a[2]=s-l*Fs.back,r.body.b[0]=t+a*Fs.front,r.body.b[1]=i+Fs.y,r.body.b[2]=s+l*Fs.front,r.head.c[0]=r.body.b[0],r.head.c[1]=i+Fs.y,r.head.c[2]=r.body.b[2],r}let o=uE.has(n.state)&&n.point&&n.point.kind==="low"&&n.pop<.5;return r.head.r=xt.head.r+e.hitPad,r.body.r=xt.body.r+e.hitPad,r.head.c[0]=t,r.head.c[2]=s,r.body.a[0]=t,r.body.a[2]=s,r.body.b[0]=t,r.body.b[2]=s,o?(r.head.c[1]=i+e.crouchHead-e.hitPad,r.body.a[1]=i+.1,r.body.b[1]=i+e.crouchBodyTop):(r.head.c[1]=i+xt.head.cy,r.body.a[1]=i+xt.body.ay,r.body.b[1]=i+xt.body.by),r}function nn(n,e){n.state=e,n.stateT=0}function Oi(n,e,t){e=Tf(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var ks=(n,e)=>e>0?n/e:1;function Fa(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=Wt(n.yaw,Math.atan2(r,o),i.turnRate*s))}function rx(n,e,t){let i=n.point.normal;n.yaw=Wt(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function Ui(n,e){e.tokens.holds(n.id)&&e.tokens.release(n.id,e.now,e.director)}function Pf(n,e){let t=e.player.pos;return n.chest[0]=t[0],n.chest[1]=t[1]+1.2,n.chest[2]=t[2],n.chest}function Oh(n,e){let t=e.tuning||oe,i=t.associate,s=e.director||t.director,r=e.player,o=[r.pos[0],r.pos[2]],a=Pf(n,e),l=n.point,h=Ni(l?l.pos:[n.pos[0],n.pos[2]],o),c=n.role,d=!!l&&(n.mustMove||c!=="hold"),u=[n.pos[0],n.pos[2]],p=Math.cos(s.flankAngle*Math.PI/180),f=Math.cos(s.flankMaxAngle*Math.PI/180),g=0,m=0;if(r.coverNormal)g=-r.coverNormal[0],m=-r.coverNormal[1];else{let M=0;for(let b of e.others||[])b.alive&&(g+=b.pos[0],m+=b.pos[2],M++);M?(g=g/M-o[0],m=m/M-o[1]):(g=n.pos[0]-o[0],m=n.pos[2]-o[1])}let x=Math.hypot(g,m)||1;g/=x,m/=x;let _=[];for(let[M,b]of e.reserved)b!==n.id&&_.push(e.points[M].pos);let w=null,y=-1/0;for(let M of e.points){let b=e.reserved.get(M.index);if(b!==void 0&&b!==n.id||d&&M.index===l.index||n.mustMove&&l&&Ni(M.pos,l.pos)<2*i.reserveRadius)continue;let v=Ni(M.pos,o);if(v<i.reserveRadius||v<i.minRange||v>i.maxRange)continue;let S=!1;for(let D of _)if(Ni(D,M.pos)<i.reserveRadius){S=!0;break}if(S)continue;let C=((M.pos[0]-o[0])*g+(M.pos[1]-o[1])*m)/v;if(c==="flank"?C<f:C<0)continue;let A=0;if(c==="push"){let D=h-v;if(D<2)continue;A=2*D}else if(c==="flank"){if(!r.coverNormal||C>p)continue;A=10}let I=Lh(M,a,e.boxes,t);if(!I.protected||!I.canShoot)continue;let R=-Ni(u,M.pos)-.5*Math.abs(v-i.preferRange)+A;R>y+1e-9&&(y=R,w=M)}return w?{point:w,score:y}:null}function fE(n,e){let t=Oh(n,e);return t?t.point:null}function bf(n,e,t){let i=e.tuning||oe,s=[n.pos[0],n.pos[2]],r=Pf(n,e),o=null,a=1/0;for(let l of e.points){let h=e.reserved.get(l.index);if(h!==void 0&&h!==n.id)continue;let c=Ni(s,l.pos);c>=a||t&&!Lh(l,r,e.boxes,i).protected||(a=c,o=l)}return o}function ns(n,e,t){nn(n,"cover"),n.blind=0,n.wantSuppress=null,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function qn(n,e,t){Ui(n,e),Oi(n,0,t),n.blind=0;let i=n.stuckCount>=3?bf(n,e,!1):fE(n,e);if(!i){if(n.mustMove=!1,n.role!=="hold"&&(n.role="hold"),n.point&&Ni(n.point.pos,[n.pos[0],n.pos[2]])<=.5){ns(n,e,t);return}if(i=bf(n,e,!0)||bf(n,e,!1),!i){ns(n,e,t);return}}if(n.point&&n.point.index!==i.index&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),e.reserved.set(i.index,n.id),n.point=i,n.mustMove=!1,Math.hypot(i.pos[0]-n.pos[0],i.pos[1]-n.pos[2])<=t.arriveDist){ox(n,e,t);return}let s=n.stuckCount>=3?null:Ua(e.graph,e.boxes,[n.pos[0],n.pos[2]],i.pos,t.radius);n.path=s||[[i.pos[0],i.pos[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],nn(n,"run")}function ox(n,e,t){if(n.role==="revive"){nn(n,"kneel");return}let i=n.point;n.pos[0]=i.pos[0],n.pos[2]=i.pos[1],n.role="hold",n.stuckCount=0,n.pointT=0,n.relocT=0,n.mustMove=!1,e.events.push({type:"arrive",id:n.id,point:i}),ns(n,e,t)}function pE(n,e,t,i){if(n.role==="revive"){let r=ux(n,e);if(!r){is(n,e),qn(n,e,t);return}if(sx(n.pos,r.pos)<=hx){nn(n,"kneel");return}}let s=t.runSpeed*i;for(let r=0;r<n.path.length+2;r++){let o=n.path[n.pathI],a=n.pathI===n.path.length-1,l=o[0]-n.pos[0],h=o[1]-n.pos[2],c=Math.hypot(l,h);if(c<=t.arriveDist){if(a){ox(n,e,t);return}n.pathI++;continue}Fa(n,o[0],o[1],t,i);let d=Math.min(s,c);if(d<=1e-9)break;let u=Fn(e.boxes,n.pos,[l/c*d,0,h/c*d],t.radius,t.height),p=Math.hypot(u.pos[0]-n.pos[0],u.pos[2]-n.pos[2]);if(n.pos[0]=u.pos[0],n.pos[2]=u.pos[2],s-=p,p<d*.5)break;p>=c-1e-9}if(n.stuckT+=i,n.stuckT>=t.stuckTime){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05){n.role==="revive"&&is(n,e),n.stuckCount++,qn(n,e,t);return}n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}}function If(n,e,t,i,s){let r=e.player,o=n.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(t.aimLag>0)?1:1-Math.pow(.5,i/t.aimLag);for(let l=0;l<3;l++)n.aim[l]+=(o[l]-n.aim[l])*a}var ax=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1),Lf=n=>n.tobble&&!n.tobble.downed?n.tobble:null;function mE(n,e,t){if(n.point){let i=pr(n.point,(e.tuning||oe).associate.popShift);t[0]=i[0],t[2]=i[1]}else t[0]=n.pos[0],t[2]=n.pos[2];return t[1]=1.49,t}var Sf=[0,0,0];function gE(n,e){let t=Lf(e),i=e.player;return t?(mE(n,e,Sf),!i.downed&&kn(e.boxes,Sf,i.chest)?"player":kn(e.boxes,Sf,t.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var lx=(n,e)=>n.target==="tobble"?!Lf(e):e.player.downed,cx=(n,e)=>n.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function xE(n,e,t,i,s){Oi(n,n.pop-ks(s,t.popTime),t),rx(n,t,s);let r=e.player;if(r.downed&&!Lf(e))return;if(!r.downed){if(n.pointT+=s,n.role!=="hold"){qn(n,e,t);return}if(n.relocT+=s,n.relocT>=t.relocateCheck){n.relocT=0;let a=Lh(n.point,Pf(n,e),e.boxes,e.tuning||oe);if(!a.protected||!a.canShoot||Ni(n.point.pos,[r.pos[0],r.pos[2]])<t.reserveRadius){n.mustMove=!0,qn(n,e,t);return}}if(n.pointT>=t.relocateAfter){n.mustMove=!0,n.pointT=0,qn(n,e,t);return}}if(n.stateT<n.wait)return;if(n.wantSuppress===null&&(n.wantSuppress=e.rand()<t.suppressChance),n.bursts>=t.magBursts){nn(n,"reload"),e.events.push({type:"bark",id:n.id,key:"reload"});return}let o=gE(n,e);if(o&&e.tokens.request(n.id,e.now,e.tokenCount,i)){n.target=o,nn(n,"telegraph"),n.shots=0,If(n,e,t,s,!0),e.events.push({type:"telegraph",id:n.id});return}n.wantSuppress&&!r.downed&&(nn(n,"suppress"),n.shots=0)}function wf(n,e,t,i){Ui(n,e),i&&n.bursts++,ns(n,e,t)}function vE(n,e,t,i){Oi(n,n.pop+ks(i,t.popTime),t);let s=cx(n,e);if(Fa(n,s[0],s[2],t,i),If(n,e,t,i,!1),lx(n,e)||!e.tokens.holds(n.id)){wf(n,e,t,!1);return}n.stateT>=t.popTime+t.telegraphTime-1e-9&&(nn(n,"burst"),n.shots=0)}function _E(n,e,t,i){let s=e.player;Oi(n,n.pop+ks(i,t.popTime),t);let r=cx(n,e);if(Fa(n,r[0],r[2],t,i),If(n,e,t,i,!1),lx(n,e)||!e.tokens.holds(n.id)){wf(n,e,t,!0);return}let o=n.muzzle;o[0]=n.pos[0],o[1]=n.pos[1]+t.muzzleUp,o[2]=n.pos[2];let a=ax(n.stateT,t.rate,t.burstTime),l=n.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||oe).move.sprint);for(;n.shots<a;){n.shots++;let h=n.aim[0]-o[0],c=n.aim[1]-o[1],d=n.aim[2]-o[2],u=Math.hypot(h,c,d)||1;e.events.push({type:"enemyShot",id:n.id,from:[o[0],o[1],o[2]],dir:[h/u,c/u,d/u],accurate:!0,target:n.target,spread:t.spread+t.moveSpread*l})}n.stateT>=t.burstTime-1e-9&&wf(n,e,t,!0)}function yE(n,e,t,i){let s=e.player;if(n.blind=Tf(n.blind+ks(i,t.popTime)),Fa(n,s.pos[0],s.pos[2],t,i),s.downed){n.blind=0,ns(n,e,t);return}let r=n.stateT-t.popTime;if(r<0&&n.blind<1)return;let o=n.point,a=Math.max(0,r),l=n.muzzle;l[0]=n.pos[0],l[2]=n.pos[2],l[1]=n.pos[1]+(o.kind==="low"?o.height+(e.tuning||oe).combat.blindLift:t.muzzleUp);let h=ax(a,t.suppressRate,t.suppressTime);for(;n.shots<h;){n.shots++;let c=s.head[0]-l[0],d=s.head[1]-l[1],u=s.head[2]-l[2],p=Math.hypot(c,d,u)||1;c/=p,d/=p,u/=p;let f=u,g=-c,m=Math.hypot(f,g);m<1e-6&&(f=1,g=0,m=1),f/=m,g/=m;let x=d*g,_=u*f-c*g,w=-d*f,y=2*Math.PI*e.rand(),M=t.suppressMiss*(1+.5*e.rand()),b=Math.cos(y)*M,v=Math.sin(y)*M,S=s.head[0]+f*b+x*v,C=s.head[1]+_*v,A=s.head[2]+g*b+w*v,I=S-l[0],R=C-l[1],D=A-l[2],T=Math.hypot(I,R,D)||1;e.events.push({type:"enemyShot",id:n.id,from:[l[0],l[1],l[2]],dir:[I/T,R/T,D/T],accurate:!1,spread:t.suppressSpread})}r>=t.suppressTime-1e-9&&(n.blind=0,ns(n,e,t))}var hx=.8;function ux(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);return t&&t.alive&&t.state==="downed"&&t.helper===n.id?t:null}function is(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);t&&t.helper===n.id&&(t.helper=null),n.helping=null,n.role="hold"}function dx(n,e,t){let i=(t.tuning||oe).associate;Ui(n,t),Oi(n,0,i),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.point=null,n.role="revive",n.helping=e.id,e.helper=n.id,n.mustMove=!1;let s=n.pos[0]-e.pos[0],r=n.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=hx){nn(n,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];n.path=Ua(t.graph,t.boxes,[n.pos[0],n.pos[2]],a,i.radius)||[a],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],nn(n,"run")}function ME(n,e,t,i){let s=ux(n,e);if(!s){is(n,e),qn(n,e,t);return}Fa(n,s.pos[0],s.pos[2],t,i),!(n.stateT<t.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,t.reviveHealth*t.health),s.role="hold",s.mustMove=!1,s.bursts=0,nn(s,"seek"),e.events.push({type:"cloneRevive",id:n.id,target:s.id}),n.helping=null,n.role="hold",qn(n,e,t))}function bE(n,e,t,i){if(n.stateT>=t.bleedTime-1e-9){n.health=0,Dh(n,e,"bleed");return}if(n.helper)return;let s=0,r=0,o=1/0;for(let h of e.others||[]){if(h===n||!h.alive||!hE.has(h.state))continue;let c=sx(n.pos,h.pos);c<o&&(o=c,s=h.pos[0]-n.pos[0],r=h.pos[2]-n.pos[2])}if(o===1/0)s=n.pos[0]-e.player.pos[0],r=n.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),n.yaw=Wt(n.yaw,Math.atan2(s,r),t.turnRate*i);let a=t.downedCrawl*i,l=Fn(e.boxes,n.pos,[s/o*a,0,r/o*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}function SE(n,e,t){n.point&&e.reserved.get(n.point.index)===n.id&&n.pop<=1e-6&&Ni(n.point.pos,[n.pos[0],n.pos[2]])<=.3?ns(n,e,t):qn(n,e,t)}function fx(n,e){return!n.alive||Nh.has(n.state)||n.state==="downed"?!1:(n.role==="revive"&&is(n,e),Ui(n,e),n.blind=0,nn(n,"stagger"),!0)}function px(n,e,t){if(!n.alive||Nh.has(n.state)||n.state==="downed"||n.state==="dive")return!1;n.role==="revive"&&is(n,t),Ui(n,t),Oi(n,0,(t.tuning||oe).associate),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.divePoint=n.point,n.point=null,n.role="hold",n.path=[],n.pathI=0;let i=n.pos[0]-e[0],s=n.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(n.yaw),s=Math.cos(n.yaw)):(i/=r,s/=r),n.diveDir[0]=i,n.diveDir[1]=s,n.yaw=Math.atan2(i,s),nn(n,"dive"),!0}function wE(n,e,t,i){let s=Math.max(t.diveTime,.001),r=Math.max(n.stateT-i,t.diveReaction),o=Math.min(n.stateT,t.diveReaction+s);if(o>r){let a=t.diveDistance*(o-r)/s,l=Fn(e.boxes,n.pos,[n.diveDir[0]*a,0,n.diveDir[1]*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}n.stateT>=t.diveReaction+s-1e-9&&(n.point=n.divePoint,n.divePoint=null,n.mustMove=!0,qn(n,e,t))}function mx(n,e){return!n.alive||Nh.has(n.state)||n.state==="dive"?!1:(n.role==="revive"&&is(n,e),Ui(n,e),Oi(n,0,(e.tuning||oe).associate),n.blind=0,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.wasDowned=n.state==="downed",n.point=null,n.role="hold",n.helper=null,n.mustMove=!1,nn(n,"executed"),!0)}function gx(n){return!n.alive||n.state!=="executed"?!1:(nn(n,n.wasDowned?"downed":"flinch"),n.wasDowned=!1,!0)}function xx(n,e,t="execute"){return!n.alive||n.state!=="executed"?null:(n.health=0,Dh(n,e,t))}function Dh(n,e,t){return n.alive=!1,Ui(n,e),n.role==="revive"&&is(n,e),n.helper=null,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.pop=0,n.blind=0,nn(n,"dead"),e.events.push({type:"death",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]],kind:t}),"kill"}function Df(n,e){return!n.alive||Nh.has(n.state)||n.state==="downed"?null:(Ui(n,e),n.role==="revive"&&is(n,e),n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.point=null,n.health=1,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.mustMove=!1,nn(n,"downed"),e.events.push({type:"down",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]]}),e.events.push({type:"bark",id:n.id,key:"cloneDown"}),"down")}function vx(n,e,t){if(!n.alive)return;(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,cE);let i=(e.tuning||oe).associate,s=e.director||oe.director;switch(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.state){case"idle":e.started&&qn(n,e,i);break;case"seek":qn(n,e,i);break;case"run":pE(n,e,i,t);break;case"cover":xE(n,e,i,s,t);break;case"telegraph":vE(n,e,i,t);break;case"burst":_E(n,e,i,t);break;case"suppress":yE(n,e,i,t);break;case"reload":Oi(n,n.pop-ks(t,i.popTime),i),rx(n,i,t),n.stateT>=i.reloadTime&&(n.bursts=0,ns(n,e,i));break;case"flinch":Oi(n,n.pop-ks(t,i.popTime),i),n.blind=Tf(n.blind-ks(t,i.popTime)),n.stateT>=i.flinchTime&&(n.point?ns(n,e,i):qn(n,e,i));break;case"stagger":Oi(n,n.pop-ks(t,i.popTime),i),n.stateT>=i.staggerTime-1e-9&&SE(n,e,i);break;case"dive":wE(n,e,i,t);break;case"kneel":ME(n,e,i,t);break;case"downed":bE(n,e,i,t);break;case"spawn":n.stateT>=(e.tuning||oe).pad.riseTime-1e-9&&qn(n,e,i);break;default:break}}function _x(n,e,t,i="body"){return!n.alive||!(e>0)||n.state==="executed"||n.state==="unused"?null:n.state==="downed"?(n.health=0,Dh(n,t,i)):(n.health-=e,n.health<=0?(i==="body"||i==="tobble")&&t.rand()<(t.tuning||oe).associate.downChance?Df(n,t):(n.health=0,Dh(n,t,i)):n.role==="revive"?(is(n,t),Ui(n,t),nn(n,"flinch"),"hit"):(dE.has(n.state)&&(Ui(n,t),nn(n,"flinch"),n.blind=Math.min(n.blind,1)),"hit"))}function yx(){let n=new Map,e=new Map,t=new Map,i={request(s,r,o,a=oe.director){if(n.has(s))return!0;if(r<(t.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[d,u]of e)r-u.last>a.requestWindow&&e.delete(d);if(n.size>=o)return!1;let h=null,c=1/0;for(let[d,u]of e)u.first<c&&(h=d,c=u.first);return h!==s?!1:(e.delete(s),n.set(s,r),!0)},release(s,r,o=oe.director){e.delete(s),n.delete(s)&&t.set(s,r+o.tokenCooldown)},holds(s){return n.has(s)},held(){return[...n.keys()]},expire(s,r=oe.director){let o=[];for(let[a,l]of n)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){n.clear(),e.clear(),t.clear()}};return i}function Mx(n,e=oe){let t=(n.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(t.map(r=>[r.id,new Set]));return{list:t,step(r,o){let a=e.pad,l=[];for(let h of t){if(h.state==="dormant"){if(!o.started||!(o.kills>=a.openAfterKills||o.sinceStart>=a.openAfter))continue;h.state="open",h.nextT=o.now+a.interval,l.push({type:"padOpen",id:h.id})}if(h.state!=="open"||o.now<h.nextT-1e-9||h.alive>=a.maxAlive)continue;let c=o.freeSlot();c&&(h.spawned++,h.nextT=o.now+a.interval,i.get(h.id).add(c.id),h.alive=i.get(h.id).size,l.push({type:"padSpawn",id:h.id,enemyId:c.id}),h.spawned>=a.total&&(h.state="spent",l.push({type:"padSpent",id:h.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of t)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of t)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return t.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of t)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var TE=.25,EE=1.49,AE=.5,xr="tobble",RE=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn"]),Uh=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),Hh=n=>Math.max(0,Math.min(1,n)),bx=(n,e)=>e&&e.tuning?e.tuning.tobble:n.cfg,CE=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1);function Uf({pos:n,yaw:e=0},t=oe.tobble){let i={id:xr,cfg:t,start:[n[0],n[1],n[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:xt.head.r},body:{a:[0,0,0],b:[0,0,0],r:xt.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return Ff(i)}function Ff(n){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=n.startYaw,n.state="idle",n.stateT=0,n.hp=n.cfg.health,n.alive=!0,n.downed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.target=null,n.reviveT=0,n.threatT=0,n.lofT=0,n.wait=0,n.shots=0,n.sinceHit=0,n.relocT=0,n.complainT=0,n.stuckT=0,n.stuckCount=0,n.kneeling=!1,n.revGo=!1,n.sideLeft=0,n.speed=0,n.aim[0]=n.aim[1]=n.aim[2]=0,ka(n),n}function ka(n,e=oe.combat){let t=n.cfg,i=t.scale,[s,r,o]=n.pos,a=n.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,n.downed){let h=Math.sin(n.yaw),c=Math.cos(n.yaw);a.body.r=.25*i,a.head.r=xt.head.r*i,a.body.a[0]=s-h*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-c*.2*i,a.body.b[0]=s+h*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+c*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],n.chest[0]=s,n.chest[1]=r+.25*i,n.chest[2]=o}else if(n.point&&n.point.kind==="low"&&n.pop<.5)a.head.r=(xt.head.r+l)*i,a.body.r=(xt.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,n.chest[0]=s,n.chest[1]=r+e.crouchBodyTop*i*.9,n.chest[2]=o;else{let h=n.point?t.popLift*Hh(n.pop):0;a.head.r=(xt.head.r+l)*i,a.body.r=(xt.body.r+l)*i,a.head.c[1]=r+xt.head.cy*i+h,a.body.a[1]=r+xt.body.ay*i+h,a.body.b[1]=r+xt.body.by*i+h,n.chest[0]=s,n.chest[1]=r+t.height*(1.2/1.8)+h,n.chest[2]=o}return n.head[0]=a.head.c[0],n.head[1]=a.head.c[1],n.head[2]=a.head.c[2],a}function vr(n,e){n.state=e,n.stateT=0}var Gh=(n,e,t=!1)=>n.events.push(t?{type:"bark",id:xr,key:e,force:t}:{type:"bark",id:xr,key:e});function Ba(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=Wt(n.yaw,Math.atan2(r,o),i.turnRate*s))}function PE(n,e,t){let i=n.point.normal;n.yaw=Wt(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function fo(n,e,t){e=Hh(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.tuning.associate.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var kf=(n,e)=>e>0?n/e:1;function za(n,e){n.point&&e.reserved.get(n.point.index)===xr&&e.reserved.delete(n.point.index),n.point=null}function Sx(n,e,t,i){let s=n.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,h=o/a,c=t-s.lens[0],d=i-s.lens[2],u=Math.max(.5,Math.min(e.lofRange,c*l+d*h));return Math.hypot(c-l*u,d-h*u)}function IE(n,e,t){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=n.pos[0]-i.lens[0],l=n.pos[2]-i.lens[2],h=-o*a+r*l>=0?1:-1;n.side[0]=-o*h,n.side[1]=r*h,n.sideLeft=t.sidestepDist,za(n,e),fo(n,0,e),n.target=null,n.lofT=0,vr(n,"sidestep")}var gr=n=>n.alive&&RE.has(n.state)&&n.state!=="executed",uo=n=>n.state==="downed";function LE(n,e,t,i){return n.point?(pr(n.point,e.tuning.associate.popShift,ss),i[0]=ss[0],i[2]=ss[1]):(i[0]=n.pos[0],i[2]=n.pos[2]),i[1]=n.pos[1]+t.muzzleUp+(n.point?t.popLift:0),i}function Bh(n,e){let t=n.shapes.body;return e[0]=(t.a[0]+t.b[0])/2,e[1]=(t.a[1]+t.b[1])/2,e[2]=(t.a[2]+t.b[2])/2,e}var gi=[0,0,0],Nf=[0,0,0],ss=[0,0];function Bf(n,e,t){return n.point?(pr(n.point,e.tuning.associate.popShift,ss),t[0]=ss[0],t[2]=ss[1]):(t[0]=n.pos[0],t[2]=n.pos[2]),t[1]=EE,t}function wx(n,e,t){LE(n,e,t,Nf);let i=null,s=1/0;for(let r of e.enemies){if(!gr(r)||uo(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-n.pos[0],r.pos[2]-n.pos[2]);o>=s||o>t.range||kn(e.boxes,Nf,Bh(r,gi))&&(s=o,i=r)}return i}function Tx(n,e,t){let i=null,s=1/0;for(let r of n.enemies){if(!gr(r)||uo(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-t);o<s&&(s=o,i=r)}return i}var zh=[0,0,0],Bs=[0,0,0],Fh=[0,0,0];function Ex(n,e,t){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[n.pos[0],n.pos[2]],l=Tx(e,n.pos[0],n.pos[2]),h=[];for(let[p,f]of e.reserved)f!==xr&&h.push(e.points[p].pos);let c=(t.followMin+t.followMax)/2,d=null,u=-1/0;for(let p of e.points){let f=e.reserved.get(p.index);if(f!==void 0&&f!==xr)continue;let g=Uh(p.pos,o);if(g<t.followMin||g>t.followMax||g<=t.personalSpace||Sx(e,t,p.pos[0],p.pos[1])<t.lofClear)continue;let m=!1;for(let y of h)if(Uh(y,p.pos)<s.reserveRadius){m=!0;break}if(m)continue;let x=!0;for(let y of e.enemies)if(gr(y)&&Uh([y.pos[0],y.pos[2]],p.pos)<s.radius+t.radius+.2){x=!1;break}if(!x)continue;let _=!1;if(l){if(Bf(l,e,zh),Bs[0]=p.pos[0],Bs[1]=p.kind==="low"?i.combat.crouchHead*t.scale:t.height,Bs[2]=p.pos[1],kn(e.boxes,Bs,zh))continue;pr(p,s.popShift,ss),Fh[0]=ss[0],Fh[1]=t.muzzleUp+t.popLift,Fh[2]=ss[1],_=kn(e.boxes,Fh,Bh(l,gi))}let w=-Uh(a,p.pos)-.5*Math.abs(g-c)+(_?8:0);w>u+1e-9&&(u=w,d=p)}return d}function DE(n,e,t){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let d=Math.hypot(i.dir[0],i.dir[2]);d>1e-6&&(r=i.dir[0]/d,o=i.dir[2]/d)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,h=(-o+r)*a,c=Fn(e.boxes,[s[0],n.pos[1],s[2]],[l,0,h],t.radius,t.height);return[c.pos[0],c.pos[2]]}function Ax(n,e,t,i){n.goal[0]=i[0],n.goal[1]=i[1],n.path=n.stuckCount>=3?[[i[0],i[1]]]:Ua(e.graph,e.boxes,[n.pos[0],n.pos[2]],i,t.radius)||[[i[0],i[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}function Rx(n,e,t,i,s){let r=s*i,o=.15;for(let a=0;a<n.path.length+2;a++){let l=n.path[n.pathI],h=n.pathI===n.path.length-1,c=l[0]-n.pos[0],d=l[1]-n.pos[2],u=Math.hypot(c,d);if(u<=o){if(h)return"arrived";n.pathI++;continue}Ba(n,l[0],l[1],t,i);let p=Math.min(r,u);if(p<=1e-9)break;let f=Fn(e.boxes,n.pos,[c/u*p,0,d/u*p],t.radius,t.height),g=Math.hypot(f.pos[0]-n.pos[0],f.pos[2]-n.pos[2]);if(n.pos[0]=f.pos[0],n.pos[2]=f.pos[2],r-=g,g<p*.5)break}if(n.stuckT+=i,n.stuckT>=1){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05)return"stuck";n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}return"moving"}function zs(n,e,t){let i=e.started?Ex(n,e,t):null;n.point&&(!i||i.index!==n.point.index)&&za(n,e),fo(n,0,e);let s;if(i?(n.point=i,e.reserved.set(i.index,xr),s=i.pos):s=DE(n,e,t),n.shots=0,n.target=null,Math.hypot(s[0]-n.pos[0],s[1]-n.pos[2])<=.15){Cx(n,e,t);return}Ax(n,e,t,s),vr(n,"follow")}function Cx(n,e,t){if(n.stuckCount=0,n.point&&(n.pos[0]=n.point.pos[0],n.pos[2]=n.point.pos[1]),!e.started&&!n.point){vr(n,"idle");return}Of(n,e,t)}function Of(n,e,t){vr(n,"cover"),n.target=null,n.relocT=0,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function NE(n,e,t,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t.followMax){zs(n,e,t);return}Ba(n,s[0],s[2],t,i)}function OE(n,e,t,i){let s=Rx(n,e,t,i,t.runSpeed);s==="arrived"?Cx(n,e,t):s==="stuck"&&(n.stuckCount++,za(n,e),zs(n,e,t))}function UE(n,e,t,i){fo(n,n.pop-kf(i,t.popTime),e);let s=e.player.pos;if(n.point?PE(n,t,i):Ba(n,s[0],s[2],t,i),n.relocT+=i,n.relocT>=AE){n.relocT=0;let o=Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t.followMax;if(n.point){let a=n.point.pos,l=Math.hypot(n.pos[0]-a[0],n.pos[2]-a[1])>.3,h=Tx(e,n.pos[0],n.pos[2]),c=!1;if(h){Bf(h,e,zh);let d=n.point.kind==="low"?e.tuning.combat.crouchHead*t.scale:t.height;Bs[0]=a[0],Bs[1]=d,Bs[2]=a[1],c=kn(e.boxes,Bs,zh)}if(o||l||c){zs(n,e,t);return}}else if(o||e.started&&Ex(n,e,t)){zs(n,e,t);return}}if(!e.started||n.stateT<n.wait)return;let r=wx(n,e,t);r&&(n.target=r,n.shots=0,vr(n,"shoot"))}function FE(n,e,t,i){fo(n,n.pop+kf(i,t.popTime),e);let s=n.target;if((!s||!gr(s)||uo(s)||!kn(e.boxes,kE(n,t),Bh(s,gi)))&&(s=n.target=wx(n,e,t)),!s){Of(n,e,t);return}if(Ba(n,s.pos[0],s.pos[2],t,i),n.stateT<t.popTime-1e-9)return;let r=n.muzzle;r[0]=n.pos[0],r[1]=n.pos[1]+t.muzzleUp+(n.point?t.popLift:0)*Hh(n.pop),r[2]=n.pos[2];let o=CE(n.stateT-t.popTime,t.rate,t.burstTime);for(;n.shots<o;){n.shots++,Bh(s,gi);let a=gi[0]-r[0],l=gi[1]-r[1],h=gi[2]-r[2],c=Math.hypot(a,l,h)||1,d=ao([a/c,l/c,h/c],t.spread,e.rand,n.scratch),u=gn(r,d,t.range,e.boxes,e.enemies),p=u.target&&(u.kind==="head"||u.kind==="body")?u.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:u.point,hit:p?p.id:null}),p&&e.hurtRep&&e.hurtRep(p,t.damage),!gr(s)||uo(s))break}(!gr(s)||uo(s))&&(n.target=null),n.stateT>=t.popTime+t.burstTime-1e-9&&Of(n,e,t)}var kh=[0,0,0];function kE(n,e){return kh[0]=n.pos[0],kh[1]=n.pos[1]+e.muzzleUp+(n.point?e.popLift:0)*Hh(n.pop),kh[2]=n.pos[2],kh}function BE(n,e,t,i){let s=Math.min(t.runSpeed*i,n.sideLeft);if(s>0){let r=Fn(e.boxes,n.pos,[n.side[0]*s,0,n.side[1]*s],t.radius,t.height),o=Math.hypot(r.pos[0]-n.pos[0],r.pos[2]-n.pos[2]);n.pos[0]=r.pos[0],n.pos[2]=r.pos[2],n.sideLeft-=o<s*.5?n.sideLeft:o}n.sideLeft<=1e-6&&zs(n,e,t)}function zE(n){let e=n.player.pos,t=0;gi[0]=e[0],gi[1]=.4,gi[2]=e[2];for(let i of n.enemies)!gr(i)||uo(i)||i.state==="spawn"||kn(n.boxes,Bf(i,n,Nf),gi)&&t++;return t}function HE(n,e){za(n,e),fo(n,0,e),n.target=null,n.revGo=!1,n.threatT=0,n.kneeling=!1,n.reviveT=0,n.path=[],n.pathI=0,n.goal[0]=n.goal[1]=1/0,vr(n,"revive")}function GE(n,e,t,i){let s=e.player.pos;if(!n.revGo)if(n.threatT+=i,fo(n,n.pop-kf(i,t.popTime),e),zE(e)<=t.reviveMaxThreats||n.threatT>=t.reviveWaitMax-1e-9)n.revGo=!0;else return;if(Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])<=t.reviveRange){n.kneeling||(n.kneeling=!0,n.reviveT=0,e.events.push({type:"tobbleKneel"})),Ba(n,s[0],s[2],t,i),n.reviveT+=i,n.reviveT>=t.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&Gh(e,"tobbleRevive",!0),zs(n,e,t));return}if(n.kneeling=!1,n.reviveT=0,Math.hypot(s[0]-n.goal[0],s[2]-n.goal[1])>t.reviveRange+.4||!n.path.length){let a=n.pos[0]-s[0],l=n.pos[2]-s[2],h=Math.hypot(a,l)||1;a/=h,l/=h;let c=Math.min(.8,t.reviveRange*.8);Ax(n,e,t,[s[0]+a*c,s[2]+l*c]),n.goal[0]=s[0],n.goal[1]=s[2]}let o=Rx(n,e,t,i,t.runSpeed);o==="stuck"?(n.stuckCount++,n.path=[]):o==="arrived"&&(n.path=[])}function VE(n,e,t,i){let s=e.player.pos,r=s[0]-n.pos[0],o=s[2]-n.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(n.yaw=Wt(n.yaw,Math.atan2(r,o),t.turnRate*i)),a>t.reviveRange&&t.crawlSpeed>0){let l=Math.min(t.crawlSpeed*i,a-t.reviveRange),h=Fn(e.boxes,n.pos,[r/a*l,0,o/a*l],t.radius,t.height);n.pos[0]=h.pos[0],n.pos[2]=h.pos[2]}n.complainT+=i,n.complainT>=t.complainEvery-1e-9&&(n.complainT=0,Gh(e,"tobbleComplain"))}function Px(n,e,t){(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,TE);let i=bx(n,e);if(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.sinceHit+=t,n.downed){VE(n,e,i,t);return}switch(n.hp<i.health&&n.sinceHit>=i.regenDelay&&(n.hp=Math.min(i.health,n.hp+(i.regenTime>0?i.health/i.regenTime*t:i.health))),e.playerDowned?n.state!=="revive"&&HE(n,e):n.state==="revive"&&zs(n,e,i),n.state!=="sidestep"&&n.state!=="revive"&&e.aim&&e.aim.active&&Sx(e,i,n.pos[0],n.pos[2])<i.lofClear?(n.lofT+=t,n.lofT>=i.sidestepReact-1e-9&&IE(n,e,i)):n.state!=="sidestep"&&(n.lofT=0),n.state){case"idle":NE(n,e,i,t);break;case"follow":OE(n,e,i,t);break;case"cover":UE(n,e,i,t);break;case"shoot":FE(n,e,i,t);break;case"sidestep":BE(n,e,i,t);break;case"revive":GE(n,e,i,t);break;default:break}}function zf(n,e,t){return n.downed||!(e>0)?null:(n.hp-=e,n.sinceHit=0,n.hp>0?"hit":(n.hp=0,n.downed=!0,n.kneeling=!1,n.reviveT=0,n.complainT=0,n.target=null,n.pop=0,za(n,t),vr(n,"downed"),t.events.push({type:"tobbleDown"}),Gh(t,"tobbleDown",!0),"downed"))}function Hf(n,e){if(!n.downed)return!1;let t=bx(n,e);return n.downed=!1,n.hp=Math.max(1,t.reviveHealth*t.health),n.sinceHit=0,n.lofT=0,n.complainT=0,e.events.push({type:"tobbleUp"}),Gh(e,"tobbleUp"),zs(n,e,t),!0}var Ix=new Set(["cover","coverSlide","coverSwap"]),Lx=new Set(["cover","suppress","reload","flinch"]),WE=new Set(["cover","suppress","reload"]),Dx=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),Nx=8,XE=1,YE=.1,Gf=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function Ox({level:n,boxes:e,edges:t,rand:i,tuning:s=oe}){let r=()=>s.associate,o=jg(t,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=ex(n.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=yx(),h=ix(s.grenade),c=Mx(n,s),d=new Map,u=()=>!!n.tobble&&s.tobble.enabled>0,p=[],f=[],g=n.associates.length,m=n.associates.map(U=>Cf(U,s.associate));for(let U=g;U<Nx;U++)m.push(Af(Cf({id:`r${U+1}`,pos:[0,0,0]},s.associate)));let x=()=>Math.max(g,Math.min(Nx,Math.round(s.director.maxEnemies))),_=x(),w=Ih({state:"move",pos:[0,0,0],cover:null,scratch:{}}),y={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},M={boxes:e,points:o,graph:a,tokens:l,reserved:d,player:y,now:0,rand:i,tokenCount:0,events:p,tuning:s,director:s.director,others:m,started:!1,aim:void 0,tobble:null,enemies:m,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null},b={enemies:m,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:h,pads:c.list,tobble:null},v=!1,S=0,C=[0,0],A=!1,I=!1;function R(){d.clear();for(let U of m.slice(0,g)){let q=null,Q=1/0;for(let ae of o){let J=Math.hypot(ae.pos[0]-U.pos[0],ae.pos[1]-U.pos[2]);J<Q&&(Q=J,q=ae)}U.point=q,q&&d.set(q.index,U.id)}}R(),b.tobble=M.tobble=u()?Uf(n.tobble,s.tobble):null;let D=()=>b.tobble&&!b.tobble.downed,T=(U,q,Q=p,ae=!1)=>Q.push(ae?{type:"bark",id:U,key:q,force:ae}:{type:"bark",id:U,key:q}),O=()=>m.find(U=>U.alive)||m[0];function F(){for(let U of l.held())l.release(U,b.now,s.director)}function W(U){b.started=!0,b.startT=b.now,T(O().id,"lockdown",U)}function j(U){U.diedAt=b.now,b.kills++,c.noteDeath(U.id)}function V(U,q,Q,ae){!b.started&&U.alive&&U.state!=="unused"&&q>0&&W(ae),M.events=ae;let J=_x(U,q,M,Q);return M.events=p,J==="kill"&&j(U),J==="kill"&&Q==="head"&&D()&&++S%3===0&&T("tobble","tobbleHeadshot",ae),J}M.hurtRep=(U,q)=>V(U,q,"tobble",p),M.reviveDoc=()=>!M.health||!M.health.downed?!1:(M.health.revive(),M.m.revive(),y.downed=!1,p.push({type:"revived"}),!0);function Y(U,q){let Q=y,ae=s.combat;Q.pos[0]=U.pos[0],Q.pos[1]=U.pos[1],Q.pos[2]=U.pos[2];let J=Ix.has(U.state)?es(U):null;Q.exposed=!!(U.cover&&U.cover.exposed);let _e=!!J&&J.kind==="low"&&!Q.exposed;Q.chest[0]=U.pos[0],Q.chest[1]=U.pos[1]+(_e?.6:1.2),Q.chest[2]=U.pos[2];let te=Ih(U,w,ae).shapes.head.c;Q.head[0]=te[0],Q.head[1]=te[1],Q.head[2]=te[2],Q.speed=U.speed(),Q.coverNormal=J?J.normal:null,Q.downed=!!q.downed}function G(U,q){let Q=s.director;if(Ix.has(U.state)?y.exposed||(b.hideT+=q):b.hideT=0,!I||Math.hypot(U.pos[0]-C[0],U.pos[2]-C[1])>Q.stayRadius?(C[0]=U.pos[0],C[1]=U.pos[2],I=!0,b.stayT=0):b.stayT+=q,b.hideT>=Q.pushAfter&&!m.some(J=>J.alive&&J.role==="push")){let J=m.filter(te=>te.alive&&te.role==="hold"&&Lx.has(te.state)&&!l.holds(te.id)).sort((te,me)=>Gf(te.pos,y.pos)-Gf(me.pos,y.pos)),_e=null;for(let te of J){if(te.role="push",Oh(te,M)){_e=te;break}te.role="hold"}_e?(T(_e.id,"push"),b.hideT=0):b.hideT=Math.max(0,Q.pushAfter-1)}if(b.stayT>=Q.flankAfter&&!m.some(J=>J.alive&&J.role==="flank")){let J=null,_e=-1/0;for(let te of m){if(!te.alive||te.role!=="hold"||!Lx.has(te.state)||l.holds(te.id))continue;te.role="flank";let me=Oh(te,M);te.role="hold",me&&me.score>_e&&(_e=me.score,J=te)}J&&(J.role="flank",D()&&T("tobble","tobbleFlank"),T(J.id,"flank")),b.stayT=0}}function he(){let U=r().reviveRange;for(let q of m){if(!q.alive||q.state!=="downed"||q.helper)continue;let Q=null,ae=1/0;for(let J of m){if(!J.alive||!WE.has(J.state)||J.role!=="hold"||l.holds(J.id))continue;let _e=Gf(J.pos,q.pos);_e<=U&&_e<ae&&(ae=_e,Q=J)}Q&&(dx(Q,q,M),T(Q.id,"cloneRevive"))}}function ve(){for(let U=0;U<_;U++){let q=m[U];if(!q.claimed&&(q.state==="unused"||q.state==="dead"&&b.now-q.diedAt>=XE-1e-9))return q.claimed=!0,q}return null}function z(){let U=c.step(0,{started:b.started,sinceStart:b.now-b.startT,kills:b.kills,freeSlot:ve,now:b.now});for(let q of U){if(p.push(q),q.type==="padOpen"){T(q.id,"padOpen",p,!0),D()&&T("tobble","tobblePad",p,!0);continue}if(q.type!=="padSpawn")continue;let Q=c.list.find(J=>J.id===q.id),ae=m.find(J=>J.id===q.enemyId);Rf(ae,Q.pos,M)}}let re=[0,0,0],be=[0,0,0];function xe(U,q,Q){let ae=s.grenade,J=0;re[0]=U[0],re[1]=U[1]+.3,re[2]=U[2];let _e=(me,Te)=>{let ze=Math.hypot(me[0]-U[0],me[1]-U[1],me[2]-U[2]),B=nx(ze,ae);return B>0&&kn(e,re,me)?Te(B):null};for(let me of m){if(!me.alive||me.state==="executed")continue;let Te=me.shapes.body;be[0]=me.pos[0],be[1]=(Te.a[1]+Te.b[1])/2,be[2]=me.pos[2],_e(be,ze=>V(me,ze,"blast",p))==="kill"&&J++}be[0]=q.pos[0],be[1]=q.pos[1]+(y.chest[1]-q.pos[1]<1?.45:.9),be[2]=q.pos[2],_e(be,me=>{let Te=me*ae.selfDamage,ze=Q.damage(Te);return ze===null||(p.push({type:"playerHit",id:null,from:[U[0],U[1],U[2]],amount:Te,result:ze}),ze==="downed"&&(q.state!=="downed"&&q.down(),F())),null});let te=c.blast(U);for(let me of te)p.push({type:"padClosed",id:me}),T(me,"padClosed");p.push({type:"explode",pos:[U[0],U[1],U[2]],kills:J,closed:te})}function ee(U,q,Q){for(let ae of h.step(U,e))ae.type==="explode"?xe(ae.pos,q,Q):p.push(ae)}function Ce(){let U=r();for(let q of h.live)if(!(q.fuse>U.diveWarn))for(let Q of m)!Q.alive||Q.state==="downed"||Q.state==="executed"||Q.state==="dive"||q.rolled&&q.rolled.has(Q.id)||Math.hypot(Q.pos[0]-q.pos[0],Q.pos[2]-q.pos[2])>U.diveRadius||((q.rolled||(q.rolled=new Set)).add(Q.id),i()<U.diveChance&&px(Q,q.pos,M)&&!q.barked&&(q.barked=!0,T(Q.id,"dive")))}let Ke=U=>{let q=U.point,Q=r();return q.kind==="tall"&&U.pop>0?[q.pos[0]+q.tangent[0]*q.end*Q.popShift*U.pop,q.pos[1]+q.tangent[1]*q.end*Q.popShift*U.pop]:q.pos};function Be(U){let q=s.associate.radius,Q=s.associate.height,ae=(te,me,Te)=>{if(te.state==="executed")return;let ze=Fn(e,te.pos,[me,0,Te],q,Q);te.pos[0]=ze.pos[0],te.pos[2]=ze.pos[2]},J=te=>te.state==="executed";for(let te=0;te<m.length;te++){let me=m[te];if(!me.alive)continue;for(let Ae=te+1;Ae<m.length;Ae++){let Ve=m[Ae];if(!Ve.alive)continue;let se=Ve.pos[0]-me.pos[0],Ze=Ve.pos[2]-me.pos[2],Re=Math.hypot(se,Ze);if(Re>=2*q)continue;Re<1e-6&&(se=1,Ze=0,Re=1);let Pe=(2*q-Re)/2,N=J(Ve)?2:J(me)?0:1,E=J(me)?2:J(Ve)?0:1;ae(me,-se/Re*Pe*N,-Ze/Re*Pe*N),ae(Ve,se/Re*Pe*E,Ze/Re*Pe*E)}let Te=me.pos[0]-U.pos[0],ze=me.pos[2]-U.pos[2],B=Math.hypot(Te,ze),ge=q+s.move.radius;B<ge&&(B<1e-6&&(Te=1,ze=0,B=1),ae(me,Te/B*(ge-B),ze/B*(ge-B)))}let _e=b.tobble;if(_e){let te=s.tobble.radius,me=s.tobble.height,Te=(Ve,se)=>{let Ze=Fn(e,_e.pos,[Ve,0,se],te,me);_e.pos[0]=Ze.pos[0],_e.pos[2]=Ze.pos[2]};for(let Ve of m){if(!Ve.alive)continue;let se=Ve.pos[0]-_e.pos[0],Ze=Ve.pos[2]-_e.pos[2],Re=Math.hypot(se,Ze),Pe=te+q;if(Re>=Pe)continue;Re<1e-6&&(se=1,Ze=0,Re=1);let N=Pe-Re,E=J(Ve)||Ve.point&&Dx.has(Ve.state)?1:.5;Te(-se/Re*N*E,-Ze/Re*N*E),ae(Ve,se/Re*N*(1-E),Ze/Re*N*(1-E))}let ze=_e.pos[0]-U.pos[0],B=_e.pos[2]-U.pos[2],ge=Math.hypot(ze,B),Ae=te+s.move.radius;ge<Ae&&(ge<1e-6&&(ze=1,B=0,ge=1),Te(ze/ge*(Ae-ge),B/ge*(Ae-ge)))}for(let te of m){if(!te.alive||!te.point||!Dx.has(te.state))continue;let me=Ke(te);if(Math.hypot(te.pos[0]-me[0],te.pos[2]-me[1])<=.3)continue;let Te=Math.hypot(me[0]-U.pos[0],me[1]-U.pos[2])>=q+s.move.radius-.001;b.tobble&&Math.hypot(me[0]-b.tobble.pos[0],me[1]-b.tobble.pos[2])<q+s.tobble.radius-.001&&(Te=!1);for(let ze of m)ze===te||!ze.alive||!Te||Math.hypot(me[0]-ze.pos[0],me[1]-ze.pos[2])<2*q-.001&&(Te=!1);if(Te){te.pos[0]=me[0],te.pos[2]=me[1];continue}l.holds(te.id)&&l.release(te.id,b.now,s.director),te.mustMove=!0,te.pop=0,te.blind=0,te.state="seek",te.stateT=0}}let Je=[null];function ke(U,q){let Q=r(),ae=[0,0,0];Je[0]=b.tobble;for(let J=0;J<p.length;J++){let _e=p[J];if(_e.type!=="enemyShot")continue;if(_e.accurate&&q.downed&&_e.target!=="tobble"){p.splice(J--,1);continue}let te=ao(_e.dir,_e.spread,i,ae);if(_e.target==="tobble"){let me=b.tobble,Te=gn(_e.from,te,Q.range,e,Je);if(me&&!me.downed&&(Te.kind==="head"||Te.kind==="body")){let ze=zf(me,Q.damage,M);p.push({type:"tobbleHit",id:_e.id,from:_e.from,result:ze})}p.push({type:"shotFx",from:_e.from,to:Te.point,accurate:!0})}else if(_e.accurate){let me=Zg(_e.from,te,Q.range,e,U,s.combat),Te=me.point;if(me.kind==="head"||me.kind==="body"){let ze=q.damage(Q.damage);p.push({type:"playerHit",id:_e.id,from:_e.from,amount:Q.damage,result:ze}),ze==="downed"&&(U.state!=="downed"&&U.down(),F())}p.push({type:"shotFx",from:_e.from,to:Te.slice(),accurate:!0})}else{let me=gn(_e.from,te,Q.range,e,[]);p.push({type:"shotFx",from:_e.from,to:me.point,accurate:!1})}}}return b.targets=()=>m,b.freeSlot=ve,b.step=(U,q)=>{(!(U>0)||!Number.isFinite(U))&&(U=0),U=Math.min(U,YE),p.length=0;for(let te of f)p.push(te);f.length=0;let{m:Q,health:ae}=q;if(b.now+=U,M.now=b.now,M.aim=q.aim,M.m=Q,M.health=ae,!b.started&&Q.pos[2]>n.trigger.z&&W(p),M.started=b.started,Y(Q,ae),M.playerDowned=y.downed,y.downed){D()||F();for(let te of m)te.role!=="revive"&&(te.role="hold");!A&&b.started&&T(O().id,"downed")}else b.started&&!b.clear&&G(Q,U);A=y.downed,b.started&&(he(),z()),l.expire(b.now,s.director),M.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,ee(U,Q,ae),Ce(),b.tobble&&(Px(b.tobble,M,U),ka(b.tobble,s.combat));let J=p.length;for(let te of m)vx(te,M,U);for(let te=J;te<p.length;te++)p[te].type==="death"&&j(m.find(me=>me.id===p[te].id));ke(Q,ae),Be(Q);for(let te of m)ho(te,s.combat);b.tobble&&ka(b.tobble,s.combat);let _e=!!b.tobble&&b.tobble.downed&&ae.downed;return _e&&!v&&p.push({type:"checkpoint"}),v=_e,b.started&&!b.clear&&m.every(te=>!te.alive)&&c.allDone()&&(b.clear=!0,p.push({type:"clear"}),T(m[0].id,"clear"),b.tobble&&(Hf(b.tobble,M),T("tobble","tobbleClear"))),p},b.hurt=(U,q,Q="body")=>V(U,q,Q,f),b.bash=U=>{if(!U.alive||U.state==="executed"||U.state==="unused")return null;let q=V(U,s.melee.bashDamage,"bash",f);return q==="hit"?(fx(U,M),"hit"):q==="kill"?"kill":null},b.beginExecution=U=>mx(U,M),b.finishExecution=U=>{M.events=f;let q=xx(U,M,"execute");return M.events=p,q==="kill"&&j(U),q},b.releaseExecution=U=>gx(U),b.spawnRep=()=>{let U=ve();if(!U)return null;let q=c.list[0];return Rf(U,q?q.pos:[0,0,0],M)},b.downRep=U=>{M.events=f;let q=Df(U,M);return M.events=p,q==="down"},b.hurtTobble=U=>{if(!b.tobble)return null;M.events=f;let q=zf(b.tobble,U,M);return M.events=p,q},b.reserved=d,b.reviveTobble=()=>{if(!b.tobble)return!1;M.events=f;let U=Hf(b.tobble,M);return M.events=p,U&&ka(b.tobble,s.combat),U},b.throwGrenade=(U,q)=>h.throw(U,q),b.reset=()=>{l.reset(),h.reset(),c.reset(),_=x(),m.forEach((U,q)=>{Ef(U,s.associate),q>=g&&Af(U)}),R(),b.tobble=M.tobble=u()?b.tobble?Ff(b.tobble):Uf(n.tobble,s.tobble):null,v=!1,S=0,M.playerDowned=!1,p.length=0,f.length=0,b.started=b.clear=!1,b.now=0,b.startT=0,b.kills=0,b.hideT=b.stayT=0,M.now=0,M.started=!1,M.aim=void 0,A=!1,I=!1;for(let U of m)ho(U,s.combat)},b}function Vh(n,e,t){let i=t[0]-e[0],s=t[2]-e[2],r=af(n),o=lf(n),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var Ux=n=>Math.max(0,Math.min(1,n));function Fx({hp:n,max:e,downed:t,downT:i,hits:s=[],now:r,fb:o=oe.feedback}){let a=t?1:e>0?Ux(1-n/e):1,l={top:0,right:0,bottom:0,left:0};for(let c of s){let d=o.hitFlashTime>0?Ux(1-(r-c.t)/o.hitFlashTime):0;if(d<=0)continue;let u=Math.cos(c.angle),p=Math.sin(c.angle);l.top=Math.max(l.top,d*Math.max(0,u)),l.right=Math.max(l.right,d*Math.max(0,p)),l.bottom=Math.max(l.bottom,d*Math.max(0,-u)),l.left=Math.max(l.left,d*Math.max(0,-p))}let h=o.edgeMaxOpacity*a;for(let c of Object.keys(l))l[c]=Math.min(1,h+l[c]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!t,seconds:t?Math.ceil(Math.max(0,i)):0}}}var qE=Object.freeze({Rep:K.glorpPurple,PA:K.cream,Tobble:K.tobbleMint}),Hs=(...n)=>Object.freeze(n.map(e=>Object.freeze({speaker:"Tobble",text:e}))),Vf=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),tobbleRevive:Hs("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:Hs("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:Hs("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:Hs("Two more reps! I'm good!"),tobbleFlank:Hs("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:Hs("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:Hs("Ooh, you closed your rings!"),tobbleHeadshot:Hs("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function kx(n=()=>oe.feedback){let e=1/0,t=0,i=null,s={},r=[],o=l=>{let h=Vf[l],c=h[(s[l]||0)%h.length];return typeof c=="string"?"Rep":c.speaker};function a(l){let h=Vf[l],c=(s[l]||0)%h.length;s[l]=c+1,i=typeof h[c]=="string"?{speaker:"Rep",text:h[c]}:h[c],t=n().barkTime,e=0}return{say(l,h=!1){return!Vf[l]||!h&&e<n().barkGap?!1:h&&i&&t>0&&e<1e-9&&o(l)!==i.speaker?(r.push(l),!0):(a(l),!0)},tick(l){l>0&&(e+=l,t-=l,r.length&&e>=n().barkMinShow&&a(r.shift()))},current:()=>t>0&&i?{speaker:i.speaker,text:i.text,color:qE[i.speaker]||null}:null,reset(){e=1/0,t=0,i=null,r.length=0;for(let l of Object.keys(s))s[l]=0}}}var Bx=4,$E=1.2,Dn=[0,0,0];function ZE(){let n=(e,t,i,s,r)=>{let o=new wt(e,t,i).translate(0,s,0);o.deleteAttribute("uv");let a=new it(r),l=o.getAttribute("position").count,h=new Float32Array(l*3);for(let c=0;c<l;c++)h[c*3]=a.r,h[c*3+1]=a.g,h[c*3+2]=a.b;return o.setAttribute("color",new Et(h,3)),o};return Qt([n(.3,.16,.22,.08,K.cream),n(.34,.07,.26,.195,K.playerOrange)],!1)}function KE(n,e,t){return n.accurate&&e?(e(t),t):(t[0]=n.from[0],t[1]=n.from[1],t[2]=n.from[2],t)}function zx({scene:n,effects:e,sfx:t,fight:i,views:s,cam:r=null,hooks:o={}}){let a=new Map(i.enemies.map((A,I)=>[A.id,s[I]])),l=new Map(i.enemies.map(A=>[A.id,A])),h=new Map,c=[],d=new ds(ZE(),zt({vertexColors:!0,rim:0}),Bx);d.name="pickups",d.frustumCulled=!1,d.count=0,n.add(d);let u=new fn,p=0,f=kx(),g=(A,I)=>Math.sin(Vh(A.yaw,A.pos,I)),m=(A,I)=>Math.min(1,6/Math.max(Math.hypot(I[0]-A.pos[0],I[2]-A.pos[2]),.001)),x=[0,0,0],_=[0,1,0],w=(A,I=1)=>(x[0]=A[0],x[1]=A[1]+I,x[2]=A[2],x);function y(A,I){let R=oe.feedback,D=A.kind;if(D==="body"||D==="head")return;let T=w(A.pos),O=D==="execute"?R.killGelCount*2:D==="bleed"?R.gelCount:R.killGelCount;if(e.gel(T,_,O),D!=="bleed"){if(e.receipts(w(A.pos,1.2),R.receiptCount),S(A.pos),D==="tobble"){t.play("kill",R.killVolume*.5,g(I,A.pos));return}o.marker&&o.marker("kill"),t.play(D==="execute"?"finish":"kill",D==="execute"?R.bashVolume:R.killVolume,g(I,A.pos))}}let M=A=>{let I=i.pads.find(R=>R.id===A);return I?I.pos:[0,0,0]};function b(A){let I=null,R=1/0;for(let D of i.enemies){let T=Math.hypot(D.pos[0]-A[0],D.pos[2]-A[2]);T<R&&(R=T,I=D)}return I}function v(A,I){let R=oe.feedback,D=oe.associate;for(let T of A)if(T.type==="bark")f.say(T.key,!!T.force);else if(T.type==="padOpen")t.play("saunaOpen",R.saunaVolume,g(I,M(T.id)));else if(T.type==="padClosed")t.play("saunaClose",R.saunaVolume,g(I,M(T.id)));else if(T.type==="padSpawn"){let O=M(T.id);for(let F=0;F<4;F++)e.steam([O[0]+(F-1.5)*.25,.1,O[2]])}else if(T.type==="explode"){e.blast(T.pos);let O=Math.hypot(T.pos[0]-I.pos[0],T.pos[2]-I.pos[2]),F=Math.min(1,8/Math.max(O,.001));t.play("boom",R.boomVolume*Math.max(.4,F),g(I,T.pos)),r&&(r.kick(4*F,(Math.random()*2-1)*2*F),r.bump(F))}else if(T.type==="clank")t.play("clank",R.clankVolume*m(I,T.pos),g(I,T.pos));else if(T.type==="tobbleShot"){let O=i.tobble,F=o.tobbleView;F&&O&&O.pop>=.5?F.tip(Dn):(Dn[0]=T.from[0],Dn[1]=T.from[1],Dn[2]=T.from[2]);let W=T.to[0]-Dn[0],j=T.to[1]-Dn[1],V=T.to[2]-Dn[2],Y=Math.hypot(W,j,V)||1;e.flash(Dn,[W/Y,j/Y,V/Y]),e.friendlyTracer(Dn,T.to),t.play("tobbleShot",R.tobbleShotVolume*m(I,T.from),g(I,T.from))}else if(T.type==="tobbleHit"){let O=i.tobble;O&&e.gel(O.chest,[T.from[0]-O.chest[0],.3,T.from[2]-O.chest[2]],4)}else if(T.type==="revived")t.play("revive",R.reviveVolume);else if(T.type==="cloneRevive"){let O=l.get(T.id);O&&t.play("revive",R.reviveVolume*.6*m(I,O.pos),g(I,O.pos))}else if(T.type==="down")o.marker&&o.marker("kill"),e.gel(w(T.pos),_,6),t.play("hit",R.hitVolume,g(I,T.pos));else if(T.type==="death")y(T,I);else if(T.type==="checkpoint")o.restart&&o.restart();else if(T.type==="telegraph"){h.set(T.id,D.popTime+D.telegraphTime);let O=a.get(T.id),F=l.get(T.id);O&&O.glint(!0),F&&t.play("charge",R.chargeVolume,g(I,F.pos))}else if(T.type==="shotFx"){let O=b(T.from),F=O&&a.get(O.id);KE(T,F?F.tip:null,Dn);let W=T.to[0]-Dn[0],j=T.to[1]-Dn[1],V=T.to[2]-Dn[2],Y=Math.hypot(W,j,V)||1;e.enemyFlash(Dn,[W/Y,j/Y,V/Y]),e.enemyTracer(Dn,T.to);let G=Math.hypot(T.from[0]-I.pos[0],T.from[2]-I.pos[2]);t.play("blaster",R.blasterVolume*Math.min(1,8/Math.max(G,.001)),g(I,T.from))}}function S(A){c.length>=Bx&&c.shift(),c.push({pos:[A[0],A[1],A[2]]}),C()}function C(){d.count=c.length;for(let A=0;A<c.length;A++)u.position.set(c[A].pos[0],c[A].pos[1],c[A].pos[2]),u.rotation.set(0,p*$E+A,0),u.updateMatrix(),d.setMatrixAt(A,u.matrix);d.instanceMatrix.needsUpdate=!0}return{handle:v,forceBark:A=>f.say(A,!0),bark:()=>f.current(),pan:g,near:m,tick:A=>f.tick(A),update(A){if(A>0){p+=A;for(let[I,R]of h)if(R-A<=0){h.delete(I);let D=a.get(I);D&&D.glint(!1)}else h.set(I,R-A);c.length&&C()}},addPickup:S,collect(A,I){let R=0;for(let D=c.length-1;D>=0;D--)Math.hypot(A[0]-c[D].pos[0],A[2]-c[D].pos[2])<=I&&(c.splice(D,1),R++);return R&&C(),R},count:()=>c.length,pickups:()=>c.map(A=>A.pos.slice()),reset(){c.length=0,d.count=0,d.instanceMatrix.needsUpdate=!0,h.clear(),f.reset()}}}var Hx=.05;function JE({locked:n,device:e,panelOpen:t}){return!!(n||e==="pad"||t)}function Gx(n){return`${n.gap}|${n.endInset}|${n.minLength}`}function jE(n){return n&&n.has("room")?"greyRoom":"kioskRow"}function QE(n,e,{downed:t=!1,busy:i=!1}={}){return t&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(t||i)&&(n.fire=!1),n}var eA=2e3,tA=500,nA=500,iA=new Set(["enemyShot","playerHit","telegraph","death","clear","bark"]);function Vx({canvas:n,gl:e,params:t}){let i=Xc(n,e),s=i.renderer,r=Wc(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let h=jm();l.panelOpen=h.isOpen;let c=new Zs,d=new dn(oe.camera.fov,1,.05,100),u=Yc();c.add(u.mesh);let p=jE(t),f=p==="greyRoom"?mh:Ym,g=Wm(f);c.add(g.group);let m=g.boxes,x=f.spawn,_=()=>sg(m,{...ig(),exclude:f.coverExclude}),w=Gx(oe.cover),y=[],M=0,b=!1,v=mg({boxes:m,spawn:x.pos,coverEdges:_(),onState($,Fe){y.push({state:$,from:Fe,t:M,tapped:b,auto:$==="coverSlide"&&!b&&(Fe==="move"||Fe==="sprint")}),y.length>eA&&y.shift()},onStep($){C.dip(oe.feedback.stepDip),I.play("step",oe.feedback.stepVolume*($.sprint?1.25:1))}});v.place(x.pos,x.yaw);let S=Hg(v);c.add(S.group);let C=zm(),A=Om(),I=gg({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),R=xg(),D=yg(),T=Cg(c),O=Ig(document.body),F=eo(1),W=(f.dummies||[]).map($=>{let Fe=wg($),st=Lg(Fe);return c.add(st.group),{dummy:Fe,view:st,wasAlive:!0}}),j=W.map($=>$.dummy),V=qg(),Y=p==="kioskRow"?Ox({level:f,boxes:m,edges:_(),rand:eo(4242)}):null,G=Y?Y.enemies.map($=>{let Fe=Yg($);return c.add(Fe.group),Fe}):[],he=new Map(Y?Y.enemies.map(($,Fe)=>[$,G[Fe]]):[]),ve=Y?zx({scene:c,effects:T,sfx:I,fight:Y,views:G}):null,z=Y?Y.targets():j,re=[],be=[],xe={pos:[0,0,0],yaw:0},ee=[],Ce="-",Ke="-",Be=null,Je=null,ke=0,U=null,q=0,Q=1,ae=[],J={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},_e=[0,0,0],te=0,me=[0,0,0];C.snap(x.pos,x.yaw,"normal",1);let Te=null,ze=!1,B=null,ge=!1,Ae=!1,Ve=!1,se={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1},Ze={reload:!1,weapon:null,fire:!1,interact:!1},Re=!1,Pe={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1},N={weapon:null,reload:!1,fire:!1,firePressed:!1},E=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function Z(){let $=i.resize();d.aspect=$.aspect,d.updateProjectionMatrix()}Z(),window.addEventListener("resize",Z),n.addEventListener("click",()=>r.requestLock());let we=()=>{A.reset(),R.reset()};window.addEventListener("blur",we),document.addEventListener("pointerlockchange",()=>{r.isLocked()||we()});let pe=()=>I.unlock();window.addEventListener("pointerdown",pe),window.addEventListener("keydown",pe),window.addEventListener("keydown",$=>{$.repeat||_d($.target)||($.code==="Backquote"?(h.toggle(),h.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):$.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function Ee(){Y&&Y.reset(),V.reset(),D.reset(),Ne(x.pos,x.yaw),Be=null,A.reset(),R.reset(),C.recenter(),T.clear(),ae.length=0,re.length=0,Je=null,U=null,ke=0,q=0,ve&&ve.reset();for(let $ of G)$.reset()}function Le(){v.state!=="downed"&&v.down(),D.cancelReload(),I.play("downed",oe.feedback.hurtVolume),ve&&ve.forceBark("downed")}function de($){be.push({t:M,type:$.type,id:$.id||null,accurate:!!$.accurate,hit:$.type==="playerHit",key:$.key||null}),be.length>nA&&be.shift()}function fe($){let Fe=oe.feedback;xe.pos[0]=v.pos[0],xe.pos[1]=v.pos[1],xe.pos[2]=v.pos[2],xe.yaw=C.yaw;let st=Y.step($,{m:v,health:V});ve.handle(st,xe);for(let kt of st)if(iA.has(kt.type)&&de(kt),kt.type==="playerHit"){let bt=Vh(C.yaw,v.pos,kt.from);re.push({t:M,angle:bt});let $n=Math.random()*2*Math.PI;C.kick(Fe.hitKick*Math.cos($n),Fe.hitKick*Math.sin($n)),I.play("hurt",Fe.hurtVolume,Math.sin(bt)),kt.result==="downed"&&Le()}else kt.type==="clear"&&I.play("clear",Fe.killVolume);for(;re.length&&M-re[0].t>Fe.hitFlashTime;)re.shift();let Nt=V.update($);Nt==="revived"&&v.revive();let Ct=Re;if(Re=!1,Nt==="bleedOut"||Ct&&(V.downed||Y.clear)){Ee();return}!V.downed&&ve.collect(v.pos,oe.combat.pickupRadius)&&(D.addReserve("regret",oe.associate.ammoDrop),I.play("pickup",Fe.pickupVolume))}function Ne($,Fe){v.place($,Fe),C.snap($,Fe,rf(v),dr(v)),te=v.slams}let k={pos:[0,0,0],dir:[0,0,1],fov:70},ue="normal",le=1,De=0,Ie=0,Me=0,Se=0,We=0,ye=0,He=0,Oe=window.__cr;Oe.stats=()=>({fps:De,ms:Ie,calls:We,tris:ye,scale:i.scale(),characters:1+G.length}),Oe.player=()=>{let $=v.cover;return{pos:v.pos.slice(),state:v.state,speed:v.speed(),facing:v.facing,entries:v.entries,cover:$?{id:$.edge.id,kind:$.edge.kind,t:$.t,length:$.edge.length,pop:$.pop,exposed:$.exposed}:null,slams:v.slams,steps:v.steps,blind:$?$.blind:0,firing:!!v.firing}},Oe.gun=()=>{let $=D.current(),Fe=D.ammo[$],st=D.reload,Nt=oe.weapons[$];return{id:$,slot:D.slot,mag:Fe.mag,reserve:Fe.reserve,boost:Fe.boost,reload:st?{u:st.t/Math.max(Nt.reloadTime,oe.combat.minReloadTime),press:st.press}:null,switching:D.switching>0,spread:D.spreadOf(Be||"hip"),stance:Be}},Oe.dummies=()=>j.map($=>({id:$.id,health:$.health,alive:$.alive,pos:$.pos.slice()})),Oe.level=()=>p,Oe.fight=()=>Y?{started:Y.started,clear:Y.clear,tokens:Y.tokens.held(),pickups:ve.count(),pickupPos:ve.pickups(),enemies:Y.enemies.map($=>({id:$.id,state:$.state,health:$.health,alive:$.alive,pos:$.pos.slice(),holds:Y.tokens.holds($.id),role:$.role,point:$.point?$.point.index:null,pop:$.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},Oe.health=()=>({hp:V.hp,max:oe.health.max,downed:V.downed,downT:V.downT}),Oe.hurt=$=>{V.damage($)==="downed"&&Le()},Oe.god=$=>{oe.health.godMode=$?1:0},Oe.fightLog=()=>be.map($=>({...$})),Oe.clearFightLog=()=>{be.length=0},Oe.restart=()=>Ee(),Oe.shots=()=>ee.map($=>({...$})),Oe.clearShots=()=>{ee.length=0},Oe.setGun=($,Fe)=>D.set($,Fe),Oe.look=($,Fe)=>{C.yaw=$,C.pitch=Fe},Oe.camera=()=>{let $=k;return{pos:$.pos.slice(),fov:$.fov,inside:ba(m,$.pos,.1),mode:ue,side:le,yaw:C.yaw,pitch:C.pitch}},Oe.transitions=()=>y.map($=>({...$})),Oe.clearTransitions=()=>{y.length=0},Oe.coverTarget=()=>{let $=B||{moveX:Te?Te.moveX:0,moveY:Te?Te.moveY:0},Fe=La(v.coverEdges,m,v.pos,sf(v,{moveX:$.moveX||0,moveY:$.moveY||0,camYaw:C.yaw},[0,0]),C.yaw,oe.cover,oe.move.radius);return Fe?{id:Fe.edge.id,kind:Fe.edge.kind,dist:Fe.dist}:null},Oe.place=$=>{let Fe=$==="spawn"?x:f.features[$];Fe&&Ne(Fe.pos,Fe.yaw)},Oe.at=($,Fe,st=0)=>Ne([$,0,Fe],st),Oe.drive=$=>{if(!$){ge?Ae=!0:B=null;return}$.fire&&!(B&&B.fire)&&(Ze.fire=!0),B=$,Ae=!1,$.tap&&(ge=!0),$.reload&&(Ze.reload=!0),$.interact&&(Ze.interact=!0),$.weapon&&(Ze.weapon=$.weapon)};function Ue($){if(B){Pe.moveX=B.moveX||0,Pe.moveY=B.moveY||0,Pe.sprint=!!B.sprint,Pe.aim=!!B.aim,Pe.tap=ge;let Fe=R.update(!!B.fire,Ze.fire,!0);Ze.fire=!1,Pe.fire=Fe.fire,N.fire=Fe.fire,N.firePressed=Fe.firePressed,N.reload=Ze.reload,N.weapon=Ze.weapon,Ze.reload=!1,Ze.weapon=null,ge&&(ge=!1,Ae&&(B=null,Ae=!1))}else{let Fe=Te.held;Pe.moveX=Te.moveX,Pe.moveY=Te.moveY,Pe.tap=A.update(Fe.cover,se.cover,$,oe.move.tapMax),Pe.sprint=Fe.sprint||A.holding(),Pe.aim=Fe.aim;let st=R.update(Fe.fire,se.fire,!0);Pe.fire=st.fire,N.fire=st.fire,N.firePressed=st.firePressed,N.reload=se.reload,N.weapon=se.weapon}return Re=se.interact||Ze.interact,se.cover=!1,se.fire=!1,se.reload=!1,se.weapon=null,se.interact=!1,Ze.interact=!1,Pe.camYaw=C.yaw,b=Pe.tap,Pe}let tt=$=>$.toFixed(1);function ct(){let $=v.cover;if($)return`cover: ${$.edge.kind} ${$.edge.id}  t ${$.t.toFixed(2)}/${$.edge.length.toFixed(2)}  pop ${$.pop.toFixed(2)}`;let Fe=Oe.coverTarget();return Fe?`tap grabs: ${Fe.kind} ${Fe.dist.toFixed(1)} m`:"tap grabs: nothing"}function Pt(){let $=Oe.gun(),Fe=$.id;return`gun: ${wh[Fe].name} ${$.mag}/${oe.weapons[Fe].infiniteReserve>0?"\u221E":$.reserve}  ${$.stance||"-"}  spread ${$.spread.toFixed(1)}`}function Ft(){let $=r.padStatus(),Fe=[Y?"GYMS OF WAR \u2014 CHECK-IN TURNSTILES":"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];Y&&Fe.push("E / X: renew your membership when downed, another set when clear"),Fe.push("Sound starts after a click or key","",`${v.state}   ${v.speed().toFixed(2)} m/s`,ct(),Pt()),Y?(Fe.push(`fight: ${Y.enemies.filter(st=>st.alive).length}/${Y.enemies.length}  tokens ${Y.tokens.held().join(",")||"-"}  hp ${V.hp.toFixed(0)}`),Fe.push(`health: ${V.hp.toFixed(0)}/${oe.health.max}  ${V.downed?`downed ${V.downT.toFixed(1)}`:"-"}`)):Fe.push(`dummies: ${j.filter(st=>st.alive).length}/${j.length}  last: ${Ce} ${Ke}`),Fe.push(`${Math.round(De)} fps   ${tt(Ie)} ms   scale ${i.scale()}`,`${We} draw calls   ${ye} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${$}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=Fe.join(`
`)}let It=$=>oe.feedback[$];function Bn($){$.type==="shot"?Nn($):$.type==="reloadStart"?I.play("magOut",It("reloadVolume")):$.type==="reloadPress"?(I.play($.result,It("reloadVolume")),U=$.result,q=0):$.type==="reloadDone"?I.play("magIn",It("reloadVolume")):$.type==="dry"&&I.play("dry",It("reloadVolume"))}function cn($,Fe){Tg($.dummy,Fe),$.dummy.alive&&!$.wasAlive&&$.view.respawn(),$.wasAlive=$.dummy.alive}let Dt=[0,0,0];function Nn($){let Fe=oe.weapons[$.id],st=v.cover?v.cover.edge:null;hf(v,Be,C.yaw,oe.combat,_e);let Nt=bg({lens:k.pos,view:k.dir,muzzle:_e,spreadDeg:$.spread,range:Fe.range,boxes:m,targets:z,ignoreBox:st?st.boxIndex:-1,rand:F,aimed:Be==="aim"}),Ct=Nt.hit,kt=Ct.target,bt=null;kt&&(bt=Y?Y.hurt(kt,df(Fe,Ct.kind,$.mult),Ct.kind==="head"?"head":"body"):Eg(kt,df(Fe,Ct.kind,$.mult))),Ce=Ct.kind,Ke=kt?kt.id:"-",ee.push({t:M,kind:Ct.kind,target:kt?kt.id:null,point:Ct.point.slice(),stance:Be}),ee.length>tA&&ee.shift();let $n=[Nt.dir[0],Nt.dir[1],Nt.dir[2]];if(ae.push({id:$.id,from:_e.slice(),dir:$n,hit:Ct,target:kt,result:bt}),bt==="kill"&&!Y){let po=W.find(_r=>_r.dummy===kt);po.wasAlive=!1}}function xi($){let Fe=oe.weapons[$.id],st=oe.feedback,Nt=S.gunTip(Dt);C.kick(Fe.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*Fe.kickYaw),T.flash(Nt,$.dir),T.tracer(Nt,$.hit.point),I.play($.id==="regret"?"rifle":"pistol",st.shotVolume);let Ct=[-$.dir[0],-$.dir[1],-$.dir[2]];if($.hit.kind==="world")T.spark($.hit.point,Ct);else if($.target){let kt=Y?he.get($.target):W.find(bt=>bt.dummy===$.target).view;$.result==="kill"?(Y?(kt.death(),ve.addPickup($.target.pos)):kt.burst(),T.gel($.hit.point,Ct,st.killGelCount),T.receipts($.target.pos.map((bt,$n)=>$n===1?bt+1.2:bt),st.receiptCount),Je="kill",ke=st.killMarkerTime,I.play("kill",st.killVolume)):(Y||kt.hit($.hit.kind),T.gel($.hit.point,Ct),Je=$.hit.kind,ke=st.hitMarkerTime,I.play($.hit.kind==="head"?"head":"hit",st.hitVolume))}}let si=Vc({before($){if(Te=r.poll(),ze=!!B||ge||JE({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=ze,!ze){A.reset(),R.reset(),se.cover=!1,se.fire=!1,se.reload=!1,se.weapon=null,se.interact=!1;return}let st=Math.min($,Hx);Ve=Te.held.aim||B&&B.aim,C.look(Te.lookDX,Te.lookDY,Te.lookX,Te.lookY,st,Ve,Q),Te.pressed.cover&&(se.cover=!0),Te.pressed.fire&&(se.fire=!0),Te.pressed.reload&&(se.reload=!0),Te.pressed.interact&&(se.interact=!0);for(let[Nt,Ct]of E)Te.pressed[Nt]&&(se.weapon=Ct)},step($){if(!ze)return;let Fe=Gx(oe.cover);Fe!==w&&(w=Fe,v.coverEdges=_()),M+=$;let st=Ue($);QE(st,N,{downed:!!Y&&V.downed,busy:D.reload!==null||D.switching>0}),v.update(st,$),Be=Mg(v);let Nt=D.update(N,Be,$);for(let Ct of Nt)Bn(Ct);Y&&(ve.tick($),fe($));for(let Ct of W)cn(Ct,$);Ag(v.pos,f.ammoCrates,oe.combat.crateRadius)&&D.refill()},render($,Fe){let st=ze?Math.min(Fe,Hx):0;J.shot=ae.length>0,J.dir=k.dir,J.stance=Be,J.weapon=D.current(),S.update($,st,J);for(let P of W)P.view.update(st);for(let P of G)P.update($,st);ve&&ve.update(st);let Nt=v.pos,Ct=v.prevPos;for(let P=0;P<3;P++)me[P]=Ct[P]+(Nt[P]-Ct[P])*$;v.slams>te&&(te=v.slams,C.bump(),I.play("thud",oe.cover.thudVolume));let kt=rf(v);if(kt==="aim"&&ue!=="aim"){let P=v.cover?v.cover.edge:null;C.hold(gn(k.pos,k.dir,oe.camera.holdRange,m,z,{ignoreBox:P?P.boxIndex:-1}).point)}ue=kt,le=dr(v);let bt=C.update(st,{target:me,mode:ue,side:le},m);k.pos[0]=bt.pos[0],k.pos[1]=bt.pos[1],k.pos[2]=bt.pos[2],k.fov=bt.fov,k.dir[0]=bt.dir[0],k.dir[1]=bt.dir[1],k.dir[2]=bt.dir[2],d.fov!==bt.fov&&(d.fov=bt.fov,d.updateProjectionMatrix()),S.fadeHeadFor(bt.pos,oe.camera.headHideDist,oe.camera.headHideMargin),d.position.set(bt.pos[0],bt.pos[1],bt.pos[2]),d.lookAt(bt.pos[0]+bt.dir[0],bt.pos[1]+bt.dir[1],bt.pos[2]+bt.dir[2]);for(let P of ae)xi(P);ae.length=0,T.update(st),ke-=st,ke<=0&&(Je=null),U&&(q+=st,q>=oe.feedback.reloadResultTime&&(U=null));let $n=v.cover?v.cover.edge:null,po=gn(k.pos,k.dir,100,m,z,{ignoreBox:$n?$n.boxIndex:-1});Q=r.device()==="pad"&&po.target?oe.look.pad.assist:1;let _r=!!v.cover&&v.cover.pop<.5,Wh=Be||(v.cover&&(v.cover.pop>0||_r)?"aim":"hip"),mo=Y?Fx({hp:V.hp,max:oe.health.max,downed:V.downed,downT:V.downT,hits:re,now:M}):null;O.render(Pg({arsenal:D,stance:Be,firing:Pe.fire,covered:_r,device:r.device(),spreadDeg:D.spreadOf(Wh),fov:d.fov,viewportH:n.clientHeight||window.innerHeight,marker:Je,reloadFlash:U,face:mo,bark:ve?ve.bark():null,objective:Y?Y.clear?"Check-in Turnstiles: set complete":Y.started?"Get past the front desk":"Walk in":"",banner:Y?V.downed?{title:`You've hit a plateau ${mo.downed.seconds}`,hint:"E / X renew your membership"}:Y.clear?{title:"SET COMPLETE",hint:"Rest 60 seconds! E / X for another set"}:null:null})),u.update(performance.now()/1e3),g.update(st),s.render(c,d),We=s.info.render.calls,ye=s.info.render.triangles,Me++,Se+=Fe,Se>=1&&(De=Me/Se,Ie=Se/Me*1e3,Me=0,Se=0),He+=Fe,He>=.1&&(He=0,Ft()),i.frameDone(Fe*1e3)}});t&&t.has("tune")&&h.toggle(),Te=r.poll(),C.update(0,{target:x.pos,mode:"normal",side:1},m),Ft(),si.start()}var sA={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function Wf(n,e){window.__cr.error={kind:n,detail:e||""},document.documentElement.dataset.crError=n;let t=document.getElementById("cr-error");t&&(t.textContent="",t.appendChild(document.createTextNode(sA[n])),n==="boot"&&e&&(t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode(e))),t.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||Wf("boot",n.message)});function rA(){let n=document.getElementById("cr-canvas"),e=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){Wf("webgl");return}let t=new URLSearchParams(location.search);t.has("look")?Nm({canvas:n,gl:e}):Vx({canvas:n,gl:e,params:t}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{rA()}catch(n){Wf("boot",n&&n.message)}})();

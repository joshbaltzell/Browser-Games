/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var L0=0,vd=1,D0=2;var Ea=1,N0=2,io=3,Ms=0,jt=1,Mn=2,or=0,so=1,_d=2,yd=3,bd=4,O0=5;var ar=100,U0=101,F0=102,k0=103,B0=104,z0=200,H0=201,G0=202,V0=203,Md=204,Sd=205,W0=206,X0=207,Y0=208,q0=209,$0=210,Z0=211,K0=212,J0=213,j0=214,$l=0,Zl=1,Kl=2,Gr=3,Jl=4,jl=5,Ql=6,ec=7,wd=0,Q0=1,em=2,Mi=0,Td=1,Ed=2,Ad=3,Rd=4,Cd=5,Pd=6,Id=7;var Ld=300,lr=301,ro=302,Lc=303,Dc=304,tc=1e3,vi=1001,nc=1002,on=1003,tm=1004;var Aa=1005;var an=1006,Nc=1007;var Qi=1008;var Vn=1009,Dd=1010,Nd=1011,oo=1012,Oc=1013,ci=1014,Kn=1015,hi=1016,Uc=1017,Fc=1018,cr=1020,Od=35902,Ud=35899,Fd=1021,kd=1022,Wn=1023,Ki=1026,es=1027,kc=1028,Bc=1029,Ss=1030,zc=1031;var Hc=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,Gc=35840,Vc=35841,Wc=35842,Xc=35843,Yc=36196,qc=37492,$c=37496,Zc=37488,Kc=37489,La=37490,Jc=37491,jc=37808,Qc=37809,eh=37810,th=37811,nh=37812,ih=37813,sh=37814,rh=37815,oh=37816,ah=37817,lh=37818,ch=37819,hh=37820,uh=37821,dh=36492,fh=36494,ph=36495,mh=36283,gh=36284,Da=36285,xh=36286;var Yo=2300,ic=2301,Yl=2302,ld=2303,cd=2400,hd=2401,ud=2402;var nm=3200;var Bd=0,im=1,ts="",Jt="srgb",qo="srgb-linear",$o="linear",Rt="srgb";var ql=7680;var sm=519,rm=512,om=513,am=514,zd=515,lm=516,cm=517,Hd=518,Gd=519,Vd=35044,ao=35048;var Wd="300 es",Zn=2e3,Zo=2001;function g_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function x_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hm(){let n=Ko("canvas");return n.style.display="block",n}var Zp={},Vr=null;function Jo(...n){let e="THREE."+n.shift();Vr?Vr("log",e,...n):console.log(e,...n)}function um(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=um(n);let e="THREE."+n.shift();if(Vr)Vr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=um(n);let e="THREE."+n.shift();if(Vr)Vr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ho(...n){let e=n.join(" ");e in Zp||(Zp[e]=!0,st(...n))}function dm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var fm={[$l]:$l,[Kl]:Ql,[Jl]:Jl,[Gr]:jl,[Zl]:Zl,[Ql]:Kl,[ec]:ec,[jl]:Gr},_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kp=1234567,Go=Math.PI/180,Wr=180/Math.PI;function ns(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function Xd(n,e){return(n%e+e)%e}function v_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function __(n,e,t){return n!==e?(t-n)/(e-n):0}function Vo(n,e,t){return(1-t)*n+t*e}function y_(n,e,t,i){return Vo(n,e,1-Math.exp(-t*i))}function b_(n,e=1){return e-Math.abs(Xd(n,e*2)-e)}function M_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function S_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function w_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function T_(n,e){return n+Math.random()*(e-n)}function E_(n){return n*(.5-Math.random())}function A_(n){n!==void 0&&(Kp=n);let e=Kp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R_(n){return n*Go}function C_(n){return n*Wr}function P_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function I_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function L_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qd(n,e){if(e.constructor===Float32Array)return n;let t=vh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function $d(n,e){if(e.constructor===Float32Array)return n;let t=vh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var _h={DEG2RAD:Go,RAD2DEG:Wr,generateUUID:ns,clamp:xt,euclideanModulo:Xd,mapLinear:v_,inverseLerp:__,lerp:Vo,damp:y_,pingpong:b_,smoothstep:M_,smootherstep:S_,randInt:w_,randFloat:T_,randFloatSpread:E_,seededRandom:A_,degToRad:R_,radToDeg:C_,isPowerOfTwo:P_,ceilPowerOfTwo:I_,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:L_,normalize:$d,denormalize:qd},ef=class ef{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ef.prototype.isVector2=!0;var He=ef,Cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(d!==g||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*g;m<0&&(u=-u,f=-f,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);x=Math.sin(x*v)/w,a=Math.sin(a*v)/w,l=l*x+u*a,c=c*x+f*a,h=h*x+p*a,d=d*x+g*a}else{l=l*x+u*a,c=c*x+f*a,h=h*x+p*a,d=d*x+g*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tf=class tf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tf.prototype.isVector3=!0;var z=tf,ku=new z,Jp=new Cn,nf=class nf{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],g=s[0],m=s[3],x=s[6],v=s[1],w=s[4],b=s[7],S=s[2],M=s[5],_=s[8];return r[0]=o*g+a*v+l*S,r[3]=o*m+a*w+l*M,r[6]=o*x+a*b+l*_,r[1]=c*g+h*v+d*S,r[4]=c*m+h*w+d*M,r[7]=c*x+h*b+d*_,r[2]=u*g+f*v+p*S,r[5]=u*m+f*w+p*M,r[8]=u*x+f*b+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=d*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=u*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,t)),this}rotate(e){return Ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,t){return Ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nf.prototype.isMatrix3=!0;var ot=nf,Bu=new ot,jp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){let n={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?$o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qo]:{primaries:e,whitePoint:i,transfer:$o,toXYZ:jp,fromXYZ:Qp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:jp,fromXYZ:Qp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}var bt=D_();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sr,sc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=Ko("canvas")),Sr.width=e.width,Sr.height=e.height;let s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ko("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},N_=0,Xr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zu(s[o].image)):r.push(zu(s[o]))}else r=zu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function zu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var O_=0,Hu=new z,Pn=class n extends _i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=vi,s=vi,r=an,o=Qi,a=Wn,l=Vn,c=n.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=ns(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tc:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tc:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Ld;Pn.DEFAULT_ANISOTROPY=1;var sf=class sf{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(f+1)/2,S=(x+1)/2,M=(h+u)/4,_=(d+g)/4,y=(p+m)/4;return w>b&&w>S?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=M/i,r=_/i):b>S?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=y/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=_/r,s=y/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sf.prototype.isVector4=!0;var Bt=sf,rc=class extends _i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Pn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends rc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},jo=class extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oc=class extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ic=class Ic{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,p,g,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,p,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=u,x[3]=f,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ic().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-g*c,t[9]=-a*l,t[2]=g-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,g=c*d;t[0]=u+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=g+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,g=c*d;t[0]=u-g*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=g-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,g=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-g*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U_,e,F_)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),fs.crossVectors(i,Bn),fs.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),fs.crossVectors(i,Bn)),fs.normalize(),gl.crossVectors(Bn,fs),s[0]=fs.x,s[4]=gl.x,s[8]=Bn.x,s[1]=fs.y,s[5]=gl.y,s[9]=Bn.y,s[2]=fs.z,s[6]=gl.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],g=i[6],m=i[10],x=i[14],v=i[3],w=i[7],b=i[11],S=i[15],M=s[0],_=s[4],y=s[8],P=s[12],R=s[1],I=s[5],A=s[9],L=s[13],E=s[2],N=s[6],k=s[10],W=s[14],te=s[3],Y=s[7],J=s[11],U=s[15];return r[0]=o*M+a*R+l*E+c*te,r[4]=o*_+a*I+l*N+c*Y,r[8]=o*y+a*A+l*k+c*J,r[12]=o*P+a*L+l*W+c*U,r[1]=h*M+d*R+u*E+f*te,r[5]=h*_+d*I+u*N+f*Y,r[9]=h*y+d*A+u*k+f*J,r[13]=h*P+d*L+u*W+f*U,r[2]=p*M+g*R+m*E+x*te,r[6]=p*_+g*I+m*N+x*Y,r[10]=p*y+g*A+m*k+x*J,r[14]=p*P+g*L+m*W+x*U,r[3]=v*M+w*R+b*E+S*te,r[7]=v*_+w*I+b*N+S*Y,r[11]=v*y+w*A+b*k+S*J,r[15]=v*P+w*L+b*W+S*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],g=e[7],m=e[11],x=e[15],v=l*f-c*u,w=a*f-c*d,b=a*u-l*d,S=o*f-c*h,M=o*u-l*h,_=o*d-a*h;return t*(g*v-m*w+x*b)-i*(p*v-m*S+x*M)+s*(p*w-g*S+x*_)-r*(p*b-g*M+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],g=e[13],m=e[14],x=e[15],v=t*a-i*o,w=t*l-s*o,b=t*c-r*o,S=i*l-s*a,M=i*c-r*a,_=s*c-r*l,y=h*g-d*p,P=h*m-u*p,R=h*x-f*p,I=d*m-u*g,A=d*x-f*g,L=u*x-f*m,E=v*L-w*A+b*I+S*R-M*P+_*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/E;return e[0]=(a*L-l*A+c*I)*N,e[1]=(s*A-i*L-r*I)*N,e[2]=(g*_-m*M+x*S)*N,e[3]=(u*M-d*_-f*S)*N,e[4]=(l*R-o*L-c*P)*N,e[5]=(t*L-s*R+r*P)*N,e[6]=(m*b-p*_-x*w)*N,e[7]=(h*_-u*b+f*w)*N,e[8]=(o*A-a*R+c*y)*N,e[9]=(i*R-t*A-r*y)*N,e[10]=(p*M-g*b+x*v)*N,e[11]=(d*b-h*M-f*v)*N,e[12]=(a*P-o*I-l*y)*N,e[13]=(t*I-i*P+s*y)*N,e[14]=(g*w-p*S-m*v)*N,e[15]=(h*S-d*w+u*v)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,g=o*h,m=o*d,x=a*d,v=l*c,w=l*h,b=l*d,S=i.x,M=i.y,_=i.z;return s[0]=(1-(g+x))*S,s[1]=(f+b)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(f-b)*M,s[5]=(1-(u+x))*M,s[6]=(m+v)*M,s[7]=0,s[8]=(p+w)*_,s[9]=(m-v)*_,s[10]=(1-(u+g))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=wr.set(s[0],s[1],s[2]).length(),a=wr.set(s[4],s[5],s[6]).length(),l=wr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ri.copy(this);let c=1/o,h=1/a,d=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Zn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Zn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Zn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Zn)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Zo)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ic.prototype.isMatrix4=!0;var pt=Ic,wr=new z,ri=new pt,U_=new z(0,0,0),F_=new z(1,1,1),fs=new z,gl=new z,Bn=new z,e0=new pt,t0=new Cn,On=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return e0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return t0.setFromEuler(this),this.setFromQuaternion(t0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},k_=0,n0=new z,Tr=new Cn,Vi=new pt,xl=new z,Po=new z,B_=new z,z_=new Cn,i0=new z(1,0,0),s0=new z(0,1,0),r0=new z(0,0,1),o0={type:"added"},H_={type:"removed"},Er={type:"childadded",child:null},Gu={type:"childremoved",child:null},Vt=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new On,i=new Cn,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ot}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(i0,e)}rotateY(e){return this.rotateOnAxis(s0,e)}rotateZ(e){return this.rotateOnAxis(r0,e)}translateOnAxis(e,t){return n0.copy(e).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(i0,e)}translateY(e){return this.translateOnAxis(s0,e)}translateZ(e){return this.translateOnAxis(r0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xl.copy(e):xl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Po,xl,this.up):Vi.lookAt(xl,Po,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(Vi),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(o0),Er.child=e,this.dispatchEvent(Er),Er.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H_),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(o0),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,B_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new z(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},G_={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=bt.workingColorSpace){if(e=Xd(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vu(o,r,e+1/3),this.g=Vu(o,r,e),this.b=Vu(o,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return bt.workingToColorSpace(_n.copy(this),e),Math.round(xt(_n.r*255,0,255))*65536+Math.round(xt(_n.g*255,0,255))*256+Math.round(xt(_n.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(_n.copy(this),t);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Jt){bt.workingToColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,s=_n.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(vl);let i=Vo(ps.h,vl.h,t),s=Vo(ps.s,vl.s,t),r=Vo(ps.l,vl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Je;Je.NAMES=pm;var js=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=new z,Wi=new z,Wu=new z,Xi=new z,Ar=new z,Rr=new z,a0=new z,Xu=new z,Yu=new z,qu=new z,$u=new Bt,Zu=new Bt,Ku=new Bt,$i=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Wi.subVectors(i,t),Wu.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Wi),l=oi.dot(Wu),c=Wi.dot(Wi),h=Wi.dot(Wu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return $u.setScalar(0),Zu.setScalar(0),Ku.setScalar(0),$u.fromBufferAttribute(e,t),Zu.fromBufferAttribute(e,i),Ku.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($u,r.x),o.addScaledVector(Zu,r.y),o.addScaledVector(Ku,r.z),o}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Wi.subVectors(e,t),oi.cross(Wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),oi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ar.subVectors(s,i),Rr.subVectors(r,i),Xu.subVectors(e,i);let l=Ar.dot(Xu),c=Rr.dot(Xu);if(l<=0&&c<=0)return t.copy(i);Yu.subVectors(e,s);let h=Ar.dot(Yu),d=Rr.dot(Yu);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Ar,o);qu.subVectors(e,r);let f=Ar.dot(qu),p=Rr.dot(qu);if(p>=0&&f<=p)return t.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Rr,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return a0.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(a0,a);let x=1/(m+g+u);return o=g*x,a=u*x,t.copy(i).addScaledVector(Ar,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),yl.subVectors(this.max,Io),Cr.subVectors(e.a,Io),Pr.subVectors(e.b,Io),Ir.subVectors(e.c,Io),ms.subVectors(Pr,Cr),gs.subVectors(Ir,Pr),qs.subVectors(Cr,Ir);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-qs.z,qs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,qs.z,0,-qs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-qs.y,qs.x,0];return!Ju(t,Cr,Pr,Ir,yl)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,Cr,Pr,Ir,yl))?!1:(bl.crossVectors(ms,gs),t=[bl.x,bl.y,bl.z],Ju(t,Cr,Pr,Ir,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new z,new z,new z,new z,new z,new z,new z,new z],ai=new z,_l=new yi,Cr=new z,Pr=new z,Ir=new z,ms=new z,gs=new z,qs=new z,Io=new z,yl=new z,bl=new z,$s=new z;function Ju(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){$s.fromArray(n,r);let a=s.x*Math.abs($s.x)+s.y*Math.abs($s.y)+s.z*Math.abs($s.z),l=e.dot($s),c=t.dot($s),h=i.dot($s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $t=new z,Ml=new He,V_=0,Mt=class extends _i{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vd,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=e!==void 0?vh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):qd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$d(e,this.array)}};var ea=class extends Mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ta=class extends Mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ut=class extends Mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},W_=new yi,Lo=new z,ju=new z,Un=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):W_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);let t=Lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(ju)),this.expandByPoint(Lo.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},X_=0,$n=new pt,Qu=new Vt,Lr=new z,zn=new yi,Do=new yi,rn=new z,Et=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(zn.min,Do.min),zn.expandByPoint(rn),rn.addVectors(zn.max,Do.max),zn.expandByPoint(rn)):(zn.expandByPoint(Do.min),zn.expandByPoint(Do.max))}zn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),rn.add(Lr)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Mt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new z,l[P]=new z;let h=new z,d=new z,u=new z,f=new He,p=new He,g=new He,m=new z,x=new z;function v(P,R,I){c[P]=c[R]=c[I]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,I),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,I),d.sub(h),u.sub(h),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),x.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(A),a[P].add(m),a[R].add(m),a[I].add(m),l[P].add(x),l[R].add(x),l[I].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,R=w.length;P<R;++P){let I=w[P],A=I.start,L=I.count;for(let E=A,N=A+L;E<N;E+=3)v(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let b=new z,S=new z,M=new z,_=new z;function y(P){M.fromBufferAttribute(s,P),_.copy(M);let R=a[P];b.copy(R),b.sub(M.multiplyScalar(M.dot(R))).normalize(),S.crossVectors(_,R);let A=S.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,A)}for(let P=0,R=i.count;P<R;++P)c[P]&&y(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let x=0;x<h;x++)u[p++]=c[f++]}return new Mt(u,h,d)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},na=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vd,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=l0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=l0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function l0(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ns()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Rn=new z,qr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?vh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Jo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):qd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$d(e,this.data.array)}},ed=new z,Y_=new z,q_=new ot,li=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ed.subVectors(i,t).cross(Y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ed),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||q_.getNormalMatrix(e),s=this.coplanarPoint(ed).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$_=0,bi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=so,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Sd,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ql,this.stencilZFail=ql,this.stencilZPass=ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$r=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dr,No=new z,Nr=new z,Or=new z,Ur=new He,Oo=new He,mm=new pt,Sl=new z,Uo=new z,wl=new z,c0=new He,td=new He,h0=new He,ia=class extends Vt{constructor(e=new $r){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new Et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new na(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new qr(i,3,0,!1)),Dr.setAttribute("uv",new qr(i,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Tl(Sl.set(-.5,-.5,0),Or,o,Nr,s,r),Tl(Uo.set(.5,-.5,0),Or,o,Nr,s,r),Tl(wl.set(.5,.5,0),Or,o,Nr,s,r),c0.set(0,0),td.set(1,0),h0.set(1,1);let a=e.ray.intersectTriangle(Sl,Uo,wl,!1,No);if(a===null&&(Tl(Uo.set(-.5,.5,0),Or,o,Nr,s,r),td.set(0,1),a=e.ray.intersectTriangle(Sl,wl,Uo,!1,No),a===null))return;let l=e.ray.origin.distanceTo(No);l<e.near||l>e.far||t.push({distance:l,point:No.clone(),uv:$i.getInterpolation(No,Sl,Uo,wl,c0,td,h0,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Tl(n,e,t,i,s,r){Ur.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Oo.x=r*Ur.x-s*Ur.y,Oo.y=s*Ur.x+r*Ur.y):Oo.copy(Ur),n.copy(e),n.x+=Oo.x,n.y+=Oo.y,n.applyMatrix4(mm)}var qi=new z,nd=new z,El=new z,Al=new z,Zr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nd.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),Al.copy(this.origin).sub(nd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(El),a=Al.dot(this.direction),l=-Al.dot(El),c=Al.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(nd).addScaledVector(El,u),f}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);let i=qi.dot(this.direction),s=qi.dot(qi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,g=t.y-o.y,m=t.z-o.z,x=i.x-o.x,v=i.y-o.y,w=i.z-o.z,b=Math.abs(l),S=Math.abs(c),M=Math.abs(h),_,y,P,R,I,A,L,E,N,k,W,te;if(b>=S&&b>=M?(P=l,A=d,N=p,te=x,l>=0?(_=c,y=h,R=u,I=f,L=g,E=m,k=v,W=w):(_=h,y=c,R=f,I=u,L=m,E=g,k=w,W=v)):S>=M?(P=c,A=u,N=g,te=v,c>=0?(_=h,y=l,R=f,I=d,L=m,E=p,k=w,W=x):(_=l,y=h,R=d,I=f,L=p,E=m,k=x,W=w)):(P=h,A=f,N=m,te=w,h>=0?(_=l,y=c,R=d,I=u,L=p,E=g,k=x,W=v):(_=c,y=l,R=u,I=d,L=g,E=p,k=v,W=x)),P===0)return null;let Y=_/P,J=y/P,U=1/P,le=R-Y*A,be=I-J*A,H=L-Y*N,oe=E-J*N,we=k-Y*te,de=W-J*te,re=we*oe-de*H,Oe=le*de-be*we,De=H*be-oe*le;if(s){if(re<0||Oe<0||De<0)return null}else if((re<0||Oe<0||De<0)&&(re>0||Oe>0||De>0))return null;let Me=re+Oe+De;if(Me===0)return null;let Ae=U*(re*A+Oe*N+De*te);return(Me>0?Ae<0:Ae>0)?null:this.at(Ae/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},u0=new pt,Zs=new Zr,Rl=new Un,d0=new z,Cl=new z,Pl=new z,Il=new z,id=new z,Ll=new z,f0=new z,Dl=new z,at=class extends Vt{constructor(e=new Et,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ll.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(id.fromBufferAttribute(d,e),o?Ll.addScaledVector(id,h):Ll.addScaledVector(id.sub(t),h))}t.add(Ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Zs.copy(e.ray).recast(e.near),!(Rl.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Rl,d0)===null||Zs.origin.distanceToSquared(d0)>(e.far-e.near)**2))&&(u0.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(u0),!(i.boundingBox!==null&&Zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let m=u[p],x=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,S=w;b<S;b+=3){let M=a.getX(b),_=a.getX(b+1),y=a.getX(b+2);s=Nl(this,x,e,i,c,h,d,M,_,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let v=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=Nl(this,o,e,i,c,h,d,v,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let m=u[p],x=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,S=w;b<S;b+=3){let M=b,_=b+1,y=b+2;s=Nl(this,x,e,i,c,h,d,M,_,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let v=m,w=m+1,b=m+2;s=Nl(this,o,e,i,c,h,d,v,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Z_(n,e,t,i,s,r,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ms,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Dl);return c<t.near||c>t.far?null:{distance:c,point:Dl.clone(),object:n}}function Nl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Cl),n.getVertexPosition(l,Pl),n.getVertexPosition(c,Il);let h=Z_(n,e,t,i,Cl,Pl,Il,f0);if(h){let d=new z;$i.getBarycoord(f0,Cl,Pl,Il,d),s&&(h.uv=$i.getInterpolatedAttribute(s,a,l,c,d,new He)),r&&(h.uv1=$i.getInterpolatedAttribute(r,a,l,c,d,new He)),o&&(h.normal=$i.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};$i.getNormal(Cl,Pl,Il,u.normal),h.face=u,h.barycoord=d}return h}var Qs=class extends Pn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=on,h=on,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kr=class extends Mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new pt,p0=new pt,Ol=[],m0=new yi,K_=new pt,Fo=new at,ko=new Un,Ji=class extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,K_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fr),m0.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(m0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fr),ko.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fr),p0.multiplyMatrices(i,Fr),Fo.matrixWorld=p0,Fo.raycast(e,Ol);for(let o=0,a=Ol.length;o<a;o++){let l=Ol[o];l.instanceId=r,l.object=this,t.push(l)}Ol.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qs(new Float32Array(s*this.count),s,this.count,kc,Kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ks=new Un,J_=new He(.5,.5),Ul=new z,er=class{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],g=r[9],m=r[10],x=r[11],v=r[12],w=r[13],b=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,x-p,S-v).normalize(),s[1].setComponents(c+o,f+h,x+p,S+v).normalize(),s[2].setComponents(c+a,f+d,x+g,S+w).normalize(),s[3].setComponents(c-a,f-d,x-g,S-w).normalize(),i)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,f-u,x-m,S-b).normalize();else if(s[4].setComponents(c-l,f-u,x-m,S-b).normalize(),t===Zn)s[5].setComponents(c+l,f+u,x+m,S+b).normalize();else if(t===Zo)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);let t=J_.distanceTo(e.center);return Ks.radius=.7071067811865476+t,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ul.x=s.normal.x>0?e.max.x:e.min.x,Ul.y=s.normal.y>0?e.max.y:e.min.y,Ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},g0=new pt,ac=class n{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];g0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new er),i[s].setFromProjectionMatrix(g0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new er),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var sa=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lc=new z,cc=new z,x0=new pt,Bo=new Zr,Fl=new Un,sd=new z,v0=new z,ra=class extends Vt{constructor(e=new Et,t=new sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)lc.fromBufferAttribute(t,s-1),cc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=lc.distanceTo(cc);e.setAttribute("lineDistance",new ut(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),Fl.radius+=r,e.ray.intersectsSphere(Fl)===!1)return;x0.copy(s).invert(),Bo.copy(e.ray).applyMatrix4(x0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let x=h.getX(g),v=h.getX(g+1),w=kl(this,e,Bo,l,x,v,g);w&&t.push(w)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(f),x=kl(this,e,Bo,l,g,m,p-1);x&&t.push(x)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let x=kl(this,e,Bo,l,g,g+1,g);x&&t.push(x)}if(this.isLineLoop){let g=kl(this,e,Bo,l,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(lc.fromBufferAttribute(a,s),cc.fromBufferAttribute(a,r),t.distanceSqToSegment(lc,cc,sd,v0)>i)return;sd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(sd);if(!(c<e.near||c>e.far))return{distance:c,point:v0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Jr=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_0=new pt,dd=new Zr,Bl=new Un,zl=new z,oa=class extends Vt{constructor(e=new Et,t=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;_0.copy(s).invert(),dd.copy(e.ray).applyMatrix4(_0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,g=f;p<g;p++){let m=c.getX(p);zl.fromBufferAttribute(d,m),y0(zl,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,g=f;p<g;p++)zl.fromBufferAttribute(d,p),y0(zl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function y0(n,e,t,i,s,r,o){let a=dd.distanceSqToPoint(n);if(a<t){let l=new z;dd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var aa=class extends Pn{constructor(e=[],t=lr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},la=class extends Pn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ji=class extends Pn{constructor(e,t,i=ci,s,r,o,a=on,l=on,c,h=Ki,d=1){if(h!==Ki&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ca=class extends ji{constructor(e,t=ci,i=lr,s,r,o=on,a=on,l,c=Ki){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mt=class n extends Et{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function p(g,m,x,v,w,b,S,M,_,y,P){let R=b/_,I=S/y,A=b/2,L=S/2,E=M/2,N=_+1,k=y+1,W=0,te=0,Y=new z;for(let J=0;J<k;J++){let U=J*I-L;for(let le=0;le<N;le++){let be=le*R-A;Y[g]=be*v,Y[m]=U*w,Y[x]=E,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[x]=M>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(le/_),d.push(1-J/y),W+=1}}for(let J=0;J<y;J++)for(let U=0;U<_;U++){let le=u+U+N*J,be=u+U+N*(J+1),H=u+(U+1)+N*(J+1),oe=u+(U+1)+N*J;l.push(le,be,oe),l.push(be,H,oe),te+=6}a.addGroup(f,te,P),f+=te,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wt=class n extends Et{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,g=[],m=i/2,x=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function v(){let b=new z,S=new z,M=0,_=(t-e)/i;for(let y=0;y<=r;y++){let P=[],R=y/r,I=R*(t-e)+e;for(let A=0;A<=s;A++){let L=A/s,E=L*l+a,N=Math.sin(E),k=Math.cos(E);S.x=I*N,S.y=-R*i+m,S.z=I*k,d.push(S.x,S.y,S.z),b.set(N,_,k).normalize(),u.push(b.x,b.y,b.z),f.push(L,1-R),P.push(p++)}g.push(P)}for(let y=0;y<s;y++)for(let P=0;P<r;P++){let R=g[P][y],I=g[P+1][y],A=g[P+1][y+1],L=g[P][y+1];(e>0||P!==0)&&(h.push(R,I,L),M+=3),(t>0||P!==r-1)&&(h.push(I,A,L),M+=3)}c.addGroup(x,M,0),x+=M}function w(b){let S=p,M=new He,_=new z,y=0,P=b===!0?e:t,R=b===!0?1:-1;for(let A=1;A<=s;A++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;let I=p;for(let A=0;A<=s;A++){let E=A/s*l+a,N=Math.cos(E),k=Math.sin(E);_.x=P*k,_.y=m*R,_.z=P*N,d.push(_.x,_.y,_.z),u.push(0,R,0),M.x=N*.5+.5,M.y=k*.5*R+.5,f.push(M.x,M.y),p++}for(let A=0;A<s;A++){let L=S+A,E=I+A;b===!0?h.push(E,E+1,L):h.push(E+1,E,L),y+=3}c.addGroup(x,y,b===!0?1:2),x+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ua=class n extends Et{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let w=new z,b=new z,S=new z;for(let M=0;M<t.length;M+=3)f(t[M+0],w),f(t[M+1],b),f(t[M+2],S),l(w,b,S,v)}function l(v,w,b,S){let M=S+1,_=[];for(let y=0;y<=M;y++){_[y]=[];let P=v.clone().lerp(b,y/M),R=w.clone().lerp(b,y/M),I=M-y;for(let A=0;A<=I;A++)A===0&&y===M?_[y][A]=P:_[y][A]=P.clone().lerp(R,A/I)}for(let y=0;y<M;y++)for(let P=0;P<2*(M-y)-1;P++){let R=Math.floor(P/2);P%2===0?(u(_[y][R+1]),u(_[y+1][R]),u(_[y][R])):(u(_[y][R+1]),u(_[y+1][R+1]),u(_[y+1][R]))}}function c(v){let w=new z;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(v),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){let v=new z;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let b=m(v)/2/Math.PI+.5,S=x(v)/Math.PI+.5;o.push(b,1-S)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){let w=o[v+0],b=o[v+2],S=o[v+4],M=Math.max(w,b,S),_=Math.min(w,b,S);M>.9&&_<.1&&(w<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,w){let b=v*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function p(){let v=new z,w=new z,b=new z,S=new z,M=new He,_=new He,y=new He;for(let P=0,R=0;P<r.length;P+=9,R+=6){v.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),b.set(r[P+6],r[P+7],r[P+8]),M.set(o[R+0],o[R+1]),_.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),S.copy(v).add(w).add(b).divideScalar(3);let I=m(S);g(M,R+0,v,I),g(_,R+2,w,I),g(y,R+4,b,I)}}function g(v,w,b,S){S<0&&v.x===1&&(o[w]=v.x-1),b.x===0&&b.z===0&&(o[w]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new He:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new z,s=[],r=[],o=[],a=new z,l=new pt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(xt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},jr=class extends In{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new He){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hc=class extends jr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var b0=new z,M0=new z,rd=new Zd,od=new Zd,ad=new Zd,uc=class extends In{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new z){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(M0.subVectors(s[0],s[1]).add(s[0]),c=M0);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(b0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=b0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),rd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,g,m),od.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,g,m),ad.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(rd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),od.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ad.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(rd.calc(l),od.calc(l),ad.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function S0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function j_(n,e){let t=1-n;return t*t*e}function Q_(n,e){return 2*(1-n)*n*e}function ey(n,e){return n*n*e}function Wo(n,e,t,i){return j_(n,e)+Q_(n,t)+ey(n,i)}function ty(n,e){let t=1-n;return t*t*t*e}function ny(n,e){let t=1-n;return 3*t*t*n*e}function iy(n,e){return 3*(1-n)*n*n*e}function sy(n,e){return n*n*n*e}function Xo(n,e,t,i,s){return ty(n,e)+ny(n,t)+iy(n,i)+sy(n,s)}var da=class extends In{constructor(e=new He,t=new He,i=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new He){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xo(e,s.x,r.x,o.x,a.x),Xo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dc=class extends In{constructor(e=new z,t=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new z){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xo(e,s.x,r.x,o.x,a.x),Xo(e,s.y,r.y,o.y,a.y),Xo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fa=class extends In{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fc=class extends In{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends In{constructor(e=new He,t=new He,i=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new He){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wo(e,s.x,r.x,o.x),Wo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends In{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wo(e,s.x,r.x,o.x),Wo(e,s.y,r.y,o.y),Wo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(S0(a,l.x,c.x,h.x,d.x),S0(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},pc=Object.freeze({__proto__:null,ArcCurve:hc,CatmullRomCurve3:uc,CubicBezierCurve:da,CubicBezierCurve3:dc,EllipseCurve:jr,LineCurve:fa,LineCurve3:fc,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ga}),mc=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new pc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},tr=class extends mc{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new fa(this.currentPoint.clone(),new He(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new pa(this.currentPoint.clone(),new He(e,t),new He(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new da(this.currentPoint.clone(),new He(e,t),new He(i,s),new He(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ga(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new jr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qr=class extends tr{constructor(e){super(e),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new tr().fromJSON(s))}return this}};function ry(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=gm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=hy(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=n[u],p=n[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return xa(r,o,t,a,l,c,0),o}function gm(n,e,t,i,s){let r;if(s===by(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=w0(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=w0(o/i|0,n[o],n[o+1],r);return r&&eo(r,r.next)&&(_a(r),r=r.next),r}function nr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(eo(t,t.next)||kt(t.prev,t,t.next)===0)){if(_a(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function xa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&my(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?ay(n,i,s,r):oy(n)){e.push(l.i,n.i,c.i),_a(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ly(nr(n),e),xa(n,e,t,i,s,r,2)):o===2&&cy(n,e,t,i,s,r):xa(nr(n),e,t,i,s,r,1);break}}}function oy(n){let e=n.prev,t=n,i=n.next;if(kt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&zo(s,a,r,l,o,c,p.x,p.y)&&kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ay(n,e,t,i){let s=n.prev,r=n,o=n.next;if(kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),g=Math.max(a,l,c),m=Math.max(h,d,u),x=fd(f,p,e,t,i),v=fd(g,m,e,t,i),w=n.prevZ,b=n.nextZ;for(;w&&w.z>=x&&b&&b.z<=v;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&zo(a,h,l,d,c,u,w.x,w.y)&&kt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&zo(a,h,l,d,c,u,b.x,b.y)&&kt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=x;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&zo(a,h,l,d,c,u,w.x,w.y)&&kt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&zo(a,h,l,d,c,u,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ly(n,e){let t=n;do{let i=t.prev,s=t.next.next;!eo(i,s)&&vm(i,t,t.next,s)&&va(i,s)&&va(s,i)&&(e.push(i.i,t.i,s.i),_a(t),_a(t.next),t=n=s),t=t.next}while(t!==n);return nr(t)}function cy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vy(o,a)){let l=_m(o,a);o=nr(o,o.next),l=nr(l,l.next),xa(o,e,t,i,s,r,0),xa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function hy(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=gm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(xy(c))}s.sort(uy);for(let r=0;r<s.length;r++)t=dy(s[r],t);return t}function uy(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function dy(n,e){let t=fy(n,e);if(!t)return e;let i=_m(t,n);return nr(i,i.next),nr(t,t.next)}function fy(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(eo(n,t))return t;do{if(eo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&xm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);va(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&py(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function py(n,e){return kt(n.prev,n,e.prev)<0&&kt(e.next,n,n.next)<0}function my(n,e,t,i){let s=n;do s.z===0&&(s.z=fd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gy(s)}function gy(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function fd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function xy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function xm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function zo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&xm(n,e,t,i,s,r,o,a)}function vy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!_y(n,e)&&(va(n,e)&&va(e,n)&&yy(n,e)&&(kt(n.prev,n,e.prev)||kt(n,e.prev,e))||eo(n,e)&&kt(n.prev,n,n.next)>0&&kt(e.prev,e,e.next)>0)}function kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function eo(n,e){return n.x===e.x&&n.y===e.y}function vm(n,e,t,i){let s=Gl(kt(n,e,t)),r=Gl(kt(n,e,i)),o=Gl(kt(t,i,n)),a=Gl(kt(t,i,e));return!!(s!==r&&o!==a||s===0&&Hl(n,t,e)||r===0&&Hl(n,i,e)||o===0&&Hl(t,n,i)||a===0&&Hl(t,e,i))}function Hl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Gl(n){return n>0?1:n<0?-1:0}function _y(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function va(n,e){return kt(n.prev,n,n.next)<0?kt(n,e,n.next)>=0&&kt(n,n.prev,e)>=0:kt(n,e,n.prev)<0||kt(n,n.next,e)<0}function yy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _m(n,e){let t=pd(n.i,n.x,n.y),i=pd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function w0(n,e,t,i){let s=pd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _a(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function by(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var md=class{static triangulate(e,t,i=2){return ry(e,t,i)}},Js=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];T0(e),E0(i,e);let o=e.length;t.forEach(T0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,E0(i,t[l]);let a=md.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function T0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function E0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ya=class n extends Et{constructor(e=new Qr([new He(.5,.5),new He(-.5,.5),new He(-.5,-.5),new He(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:My,w,b=!1,S,M,_,y;if(x){w=x.getSpacedPoints(h),b=!0,u=!1;let F=x.isCatmullRomCurve3?x.closed:!1;S=x.computeFrenetFrames(h,F),M=new z,_=new z,y=new z}u||(m=0,f=0,p=0,g=0);let P=a.extractPoints(c),R=P.shape,I=P.holes;if(!Js.isClockWise(R)){R=R.reverse();for(let F=0,$=I.length;F<$;F++){let ne=I[F];Js.isClockWise(ne)&&(I[F]=ne.reverse())}}function L(F){let ne=10000000000000001e-36,ae=F[0];for(let ee=1;ee<=F.length;ee++){let pe=ee%F.length,se=F[pe],xe=se.x-ae.x,Ne=se.y-ae.y,Ge=xe*xe+Ne*Ne,G=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(ae.x),Math.abs(ae.y)),ve=ne*G*G;if(Ge<=ve){F.splice(pe,1),ee--;continue}ae=se}}L(R),I.forEach(L);let E=I.length,N=R;for(let F=0;F<E;F++){let $=I[F];R=R.concat($)}function k(F,$,ne){return $||rt("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector($,ne)}let W=R.length;function te(F,$,ne){let ae,ee,pe,se=F.x-$.x,xe=F.y-$.y,Ne=ne.x-F.x,Ge=ne.y-F.y,G=se*se+xe*xe,ve=se*Ge-xe*Ne;if(Math.abs(ve)>Number.EPSILON){let Fe=Math.sqrt(G),Ve=Math.sqrt(Ne*Ne+Ge*Ge),fe=$.x-xe/Fe,tt=$.y+se/Fe,ke=ne.x-Ge/Ve,Ue=ne.y+Ne/Ve,O=((ke-fe)*Ge-(Ue-tt)*Ne)/(se*Ge-xe*Ne);ae=fe+se*O-F.x,ee=tt+xe*O-F.y;let C=ae*ae+ee*ee;if(C<=2)return new He(ae,ee);pe=Math.sqrt(C/2)}else{let Fe=!1;se>Number.EPSILON?Ne>Number.EPSILON&&(Fe=!0):se<-Number.EPSILON?Ne<-Number.EPSILON&&(Fe=!0):Math.sign(xe)===Math.sign(Ge)&&(Fe=!0),Fe?(ae=-xe,ee=se,pe=Math.sqrt(G)):(ae=se,ee=xe,pe=Math.sqrt(G/2))}return new He(ae/pe,ee/pe)}let Y=[];for(let F=0,$=N.length,ne=$-1,ae=F+1;F<$;F++,ne++,ae++)ne===$&&(ne=0),ae===$&&(ae=0),Y[F]=te(N[F],N[ne],N[ae]);let J=[],U,le=Y.concat();for(let F=0,$=E;F<$;F++){let ne=I[F];U=[];for(let ae=0,ee=ne.length,pe=ee-1,se=ae+1;ae<ee;ae++,pe++,se++)pe===ee&&(pe=0),se===ee&&(se=0),U[ae]=te(ne[ae],ne[pe],ne[se]);J.push(U),le=le.concat(U)}let be;if(m===0)be=Js.triangulateShape(N,I);else{let F=[],$=[];for(let ne=0;ne<m;ne++){let ae=ne/m,ee=f*Math.cos(ae*Math.PI/2),pe=p*Math.sin(ae*Math.PI/2)+g;for(let se=0,xe=N.length;se<xe;se++){let Ne=k(N[se],Y[se],pe);Oe(Ne.x,Ne.y,-ee),ae===0&&F.push(Ne)}for(let se=0,xe=E;se<xe;se++){let Ne=I[se];U=J[se];let Ge=[];for(let G=0,ve=Ne.length;G<ve;G++){let Fe=k(Ne[G],U[G],pe);Oe(Fe.x,Fe.y,-ee),ae===0&&Ge.push(Fe)}ae===0&&$.push(Ge)}}be=Js.triangulateShape(F,$)}let H=be.length,oe=p+g;for(let F=0;F<W;F++){let $=u?k(R[F],le[F],oe):R[F];b?(_.copy(S.normals[0]).multiplyScalar($.x),M.copy(S.binormals[0]).multiplyScalar($.y),y.copy(w[0]).add(_).add(M),Oe(y.x,y.y,y.z)):Oe($.x,$.y,0)}for(let F=1;F<=h;F++)for(let $=0;$<W;$++){let ne=u?k(R[$],le[$],oe):R[$];b?(_.copy(S.normals[F]).multiplyScalar(ne.x),M.copy(S.binormals[F]).multiplyScalar(ne.y),y.copy(w[F]).add(_).add(M),Oe(y.x,y.y,y.z)):Oe(ne.x,ne.y,d/h*F)}for(let F=m-1;F>=0;F--){let $=F/m,ne=f*Math.cos($*Math.PI/2),ae=p*Math.sin($*Math.PI/2)+g;for(let ee=0,pe=N.length;ee<pe;ee++){let se=k(N[ee],Y[ee],ae);Oe(se.x,se.y,d+ne)}for(let ee=0,pe=I.length;ee<pe;ee++){let se=I[ee];U=J[ee];for(let xe=0,Ne=se.length;xe<Ne;xe++){let Ge=k(se[xe],U[xe],ae);b?Oe(Ge.x,Ge.y+w[h-1].y,w[h-1].x+ne):Oe(Ge.x,Ge.y,d+ne)}}}we(),de();function we(){let F=s.length/3;if(u){let $=0,ne=W*$;for(let ae=0;ae<H;ae++){let ee=be[ae];De(ee[2]+ne,ee[1]+ne,ee[0]+ne)}$=h+m*2,ne=W*$;for(let ae=0;ae<H;ae++){let ee=be[ae];De(ee[0]+ne,ee[1]+ne,ee[2]+ne)}}else{for(let $=0;$<H;$++){let ne=be[$];De(ne[2],ne[1],ne[0])}for(let $=0;$<H;$++){let ne=be[$];De(ne[0]+W*h,ne[1]+W*h,ne[2]+W*h)}}i.addGroup(F,s.length/3-F,0)}function de(){let F=s.length/3,$=0;re(N,$),$+=N.length;for(let ne=0,ae=I.length;ne<ae;ne++){let ee=I[ne];re(ee,$),$+=ee.length}i.addGroup(F,s.length/3-F,1)}function re(F,$){let ne=F.length;for(;--ne>=0;){let ae=ne,ee=ne-1;ee<0&&(ee=F.length-1);for(let pe=0,se=h+m*2;pe<se;pe++){let xe=W*pe,Ne=W*(pe+1),Ge=$+ae+xe,G=$+ee+xe,ve=$+ee+Ne,Fe=$+ae+Ne;Me(Ge,G,ve,Fe)}}}function Oe(F,$,ne){l.push(F),l.push($),l.push(ne)}function De(F,$,ne){Ae(F),Ae($),Ae(ne);let ae=s.length/3,ee=v.generateTopUV(i,s,ae-3,ae-2,ae-1);Te(ee[0]),Te(ee[1]),Te(ee[2])}function Me(F,$,ne,ae){Ae(F),Ae($),Ae(ae),Ae($),Ae(ne),Ae(ae);let ee=s.length/3,pe=v.generateSideWallUV(i,s,ee-6,ee-3,ee-2,ee-1);Te(pe[0]),Te(pe[1]),Te(pe[3]),Te(pe[1]),Te(pe[2]),Te(pe[3])}function Ae(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Te(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Sy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new pc[s.type]().fromJSON(s)),new n(i,e.options)}},My={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new He(r,o),new He(a,l),new He(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],g=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new He(o,1-l),new He(c,1-d),new He(u,1-p),new He(g,1-x)]:[new He(a,1-l),new He(h,1-d),new He(f,1-p),new He(m,1-x)]}};function Sy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ir=class n extends ua{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ba=class n extends Et{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=xt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new z,u=new He,f=new z,p=new z,g=new z,m=0,x=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let v=0;v<=t;v++){let w=i+v*h*s,b=Math.sin(w),S=Math.cos(w);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*b,d.y=e[M].y,d.z=e[M].x*S,o.push(d.x,d.y,d.z),u.x=v/t,u.y=M/(e.length-1),a.push(u.x,u.y);let _=l[3*M+0]*b,y=l[3*M+1],P=l[3*M+0]*S;c.push(_,y,P)}}for(let v=0;v<t;v++)for(let w=0;w<e.length-1;w++){let b=w+v*e.length,S=b,M=b+e.length,_=b+e.length+1,y=b+1;r.push(S,M,y),r.push(_,y,M)}this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},to=class n extends ua{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},vs=class n extends Et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let v=x*u-o;for(let w=0;w<c;w++){let b=w*d-r;p.push(b,-v,0),g.push(0,0,1),m.push(w/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){let w=v+c*x,b=v+c*(x+1),S=v+1+c*(x+1),M=v+1+c*x;f.push(w,b,M),f.push(b,S,M)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},sr=class n extends Et{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new z,p=new He;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){let x=r+m/i*o;f.x=d*Math.cos(x),f.y=d*Math.sin(x),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let g=0;g<s;g++){let m=g*(i+1);for(let x=0;x<i;x++){let v=x+m,w=v,b=v+i+1,S=v+i+2,M=v+1;a.push(w,b,M),a.push(b,S,M)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Xt=class n extends Et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new z,u=new z,f=[],p=[],g=[],m=[];for(let x=0;x<=i;x++){let v=[],w=x/i,b=o+w*a,S=e*Math.cos(b),M=Math.sqrt(e*e-S*S),_=0;x===0&&o===0?_=.5/t:x===i&&l===Math.PI&&(_=-.5/t);for(let y=0;y<=t;y++){let P=y/t,R=s+P*r;d.x=-M*Math.cos(R),d.y=S,d.z=M*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(P+_,1-w),v.push(c++)}h.push(v)}for(let x=0;x<i;x++)for(let v=0;v<t;v++){let w=h[x][v+1],b=h[x][v],S=h[x+1][v],M=h[x+1][v+1];(x!==0||o>0)&&f.push(w,b,M),(x!==i-1||l<Math.PI)&&f.push(b,S,M)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rr=class n extends Et{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new z,f=new z,p=new z;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=s;x++){let v=x/s*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(x/s),d.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,v=(s+1)*(g-1)+m-1,w=(s+1)*(g-1)+m,b=(s+1)*g+m;l.push(x,v,b),l.push(v,w,b)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ma=class n extends Et{constructor(e=new ma(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,l=new z,c=new He,h=new z,d=[],u=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function g(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),v(),x()}function m(w){h=e.getPointAt(w/t,h);let b=o.normals[w],S=o.binormals[w];for(let M=0;M<=s;M++){let _=M/s*Math.PI*2,y=Math.sin(_),P=-Math.cos(_);l.x=P*b.x+y*S.x,l.y=P*b.y+y*S.y,l.z=P*b.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function x(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let S=(s+1)*(w-1)+(b-1),M=(s+1)*w+(b-1),_=(s+1)*w+b,y=(s+1)*(w-1)+b;p.push(S,M,y),p.push(M,_,y)}}function v(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)c.x=w/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new pc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function hr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(A0(s))s.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(A0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=hr(n[t]);for(let s in i)e[s]=i[s]}return e}function A0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var ym={clone:hr,merge:Sn},Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},gc=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var xc=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vc=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Sa=class extends sa{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function kr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_c=class extends _s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cd,endingEnd:cd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hd:r=e,a=2*t-i;break;case ud:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hd:o=e,l=2*i-t;break;case ud:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),g=p*p,m=g*p,x=-u*m+2*u*g-u*p,v=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*g+.5*p,b=f*m-f*g;for(let S=0;S!==a;++S)r[S]=x*o[h+S]+v*o[c+S]+w*o[l+S]+b*o[d+S];return r}},yc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},bc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mc=class extends _s{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-t)/(s-t),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=f*u+p*2,v=d[x],w=d[x+1],b=e*u+p*2,S=h[b],M=h[b+1],_=Ry(i,t,v,S,s);r[p]=bm(_,g,w,M,m)}return r}};function bm(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Ay(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Ry(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=bm(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Ay(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Vl(e.settings)&&(i.settings={inTangents:kr(e.settings.inTangents,Array),outTangents:kr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yo:t=this.InterpolantFactoryMethodDiscrete;break;case ic:t=this.InterpolantFactoryMethodLinear;break;case Yl:t=this.InterpolantFactoryMethodSmooth;break;case ld:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return st("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return Yl;case this.InterpolantFactoryMethodBezier:return ld}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Vl(this.settings)&&(R0(this.settings.inTangents,e),R0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Vl(this.settings)&&(C0(this.settings.inTangents,e),C0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){rt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&x_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let g=t[d+p];if(g!==t[u+p]||g!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function R0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function C0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ic;var ys=class extends Gn{constructor(e,t,i){super(e,t,i)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Yo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};Sc.prototype.ValueTypeName="color";var wc=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};wc.prototype.ValueTypeName="number";var Tc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wa=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Gn{constructor(e,t,i){super(e,t,i)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Yo;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};Ec.prototype.ValueTypeName="vector";var Ac=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mm=new Ac,Rc=class{constructor(e){this.manager=e!==void 0?e:Mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Rc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wl=new z,Xl=new Cn,xi=new z,Ta=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wl,Xl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new z,P0=new He,I0=new He,un=class extends Ta{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,P0,I0),t.subVectors(I0,P0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Cc=class extends Ta{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Br=-90,zr=1,no=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Br,zr,e,t);s.layers=this.layers,this.add(s);let r=new un(Br,zr,e,t);r.layers=this.layers,this.add(r);let o=new un(Br,zr,e,t);o.layers=this.layers,this.add(o);let a=new un(Br,zr,e,t);a.layers=this.layers,this.add(a);let l=new un(Br,zr,e,t);l.layers=this.layers,this.add(l);let c=new un(Br,zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Pc=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Jd="\\[\\]\\.:\\/",Cy=new RegExp("["+Jd+"]","g"),jd="[^"+Jd+"]",Py="[^"+Jd.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",jd),Ly=/(WCOD+)?/.source.replace("WCOD",Py),Dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jd),Ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jd),Oy=new RegExp("^"+Iy+Ly+Dy+Ny+"$"),Uy=["material","materials","bones","map"],gd=class{constructor(e,t,i){let s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(e){let t=Oy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Uy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=gd;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H2=new Float32Array(1);var rf=class rf{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};rf.prototype.isMatrix2=!0;var xd=rf;function Qd(n,e,t,i){let s=Fy(i);switch(t){case Fd:return n*e;case kc:return n*e/s.components*s.byteLength;case Bc:return n*e/s.components*s.byteLength;case Ss:return n*e*2/s.components*s.byteLength;case zc:return n*e*2/s.components*s.byteLength;case kd:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case Hc:return n*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Xc:return Math.max(n,16)*Math.max(e,8)/4;case Gc:case Wc:return Math.max(n,8)*Math.max(e,8)/2;case Yc:case qc:case Zc:case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $c:case La:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dh:case fh:case ph:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Da:case xh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fy(n){switch(n){case Vn:case Dd:return{byteLength:1,components:1};case oo:case Nd:case hi:return{byteLength:2,components:1};case Uc:case Fc:return{byteLength:2,components:4};case ci:case Oc:case Kn:return{byteLength:4,components:1};case Od:case Ud:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wm(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Gy(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let g=d[f];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
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
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jy=`#ifdef USE_BATCHING
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
#endif`,jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n1=`#ifdef USE_IRIDESCENCE
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
#endif`,i1=`#ifdef USE_BUMPMAP
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,d1=`#define PI 3.141592653589793
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
} // validated`,f1=`vec3 transformedNormal = objectNormal;
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
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",_1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
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
}`,P1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N1=`#ifdef USE_ENVMAP
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
#endif`,O1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
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
#endif`,z1=`uniform sampler2D dfgLUT;
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
}`,H1=`
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
#endif`,G1=`#if defined( RE_IndirectDiffuse )
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
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j1=`#if defined( USE_POINTS_UV )
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
#endif`,Q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
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
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
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
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ub=`#ifdef USE_NORMALMAP
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
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ab=`float getShadowMask() {
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
}`,Rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cb=`#ifdef USE_SKINNING
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
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ub=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`uniform float backgroundBlurriness;
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`#include <common>
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
}`,Zb=`#if DEPTH_PACKING == 3200
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
}`,Kb=`#define DISTANCE
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
}`,Jb=`#define DISTANCE
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,sM=`#define LAMBERT
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
}`,rM=`#define LAMBERT
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
}`,oM=`#define MATCAP
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
}`,aM=`#define MATCAP
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
}`,lM=`#define NORMAL
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
}`,cM=`#define NORMAL
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
}`,hM=`#define PHONG
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
}`,uM=`#define PHONG
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
}`,dM=`#define STANDARD
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
}`,fM=`#define STANDARD
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
}`,pM=`#define TOON
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
}`,mM=`#define TOON
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
}`,gM=`uniform float size;
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
}`,xM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,_M=`uniform vec3 color;
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
}`,yM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Vy,alphahash_pars_fragment:Wy,alphamap_fragment:Xy,alphamap_pars_fragment:Yy,alphatest_fragment:qy,alphatest_pars_fragment:$y,aomap_fragment:Zy,aomap_pars_fragment:Ky,batching_pars_vertex:Jy,batching_vertex:jy,begin_vertex:Qy,beginnormal_vertex:e1,bsdfs:t1,iridescence_fragment:n1,bumpmap_pars_fragment:i1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:r1,clipping_planes_pars_vertex:o1,clipping_planes_vertex:a1,color_fragment:l1,color_pars_fragment:c1,color_pars_vertex:h1,color_vertex:u1,common:d1,defaultnormal_vertex:f1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:x1,colorspace_fragment:v1,colorspace_pars_fragment:_1,envmap_fragment:y1,envmap_common_pars_fragment:b1,envmap_pars_fragment:M1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:N1,envmap_vertex:w1,fog_vertex:T1,fog_pars_vertex:E1,fog_fragment:A1,fog_pars_fragment:R1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:P1,lights_lambert_fragment:I1,lights_lambert_pars_fragment:L1,lights_pars_begin:D1,lights_toon_fragment:O1,lights_toon_pars_fragment:U1,lights_phong_fragment:F1,lights_phong_pars_fragment:k1,lights_physical_fragment:B1,lights_physical_pars_fragment:z1,lights_fragment_begin:H1,lights_fragment_maps:G1,lights_fragment_end:V1,lightprobes_pars_fragment:W1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:q1,logdepthbuf_vertex:$1,map_fragment:Z1,map_pars_fragment:K1,map_particle_fragment:J1,map_particle_pars_fragment:j1,metalnessmap_fragment:Q1,metalnessmap_pars_fragment:eb,morphinstance_vertex:tb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:sb,morphtarget_vertex:rb,normal_fragment_begin:ob,normal_fragment_maps:ab,normal_pars_fragment:lb,normal_pars_vertex:cb,normal_vertex:hb,normalmap_pars_fragment:ub,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:fb,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:xb,premultiplied_alpha_fragment:vb,project_vertex:_b,dithering_fragment:yb,dithering_pars_fragment:bb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Sb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Tb,shadowmap_vertex:Eb,shadowmask_pars_fragment:Ab,skinbase_vertex:Rb,skinning_pars_vertex:Cb,skinning_vertex:Pb,skinnormal_vertex:Ib,specularmap_fragment:Lb,specularmap_pars_fragment:Db,tonemapping_fragment:Nb,tonemapping_pars_fragment:Ob,transmission_fragment:Ub,transmission_pars_fragment:Fb,uv_pars_fragment:kb,uv_pars_vertex:Bb,uv_vertex:zb,worldpos_vertex:Hb,background_vert:Gb,background_frag:Vb,backgroundCube_vert:Wb,backgroundCube_frag:Xb,cube_vert:Yb,cube_frag:qb,depth_vert:$b,depth_frag:Zb,distance_vert:Kb,distance_frag:Jb,equirect_vert:jb,equirect_frag:Qb,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:sM,meshlambert_frag:rM,meshmatcap_vert:oM,meshmatcap_frag:aM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:hM,meshphong_frag:uM,meshphysical_vert:dM,meshphysical_frag:fM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:xM,shadow_vert:vM,shadow_frag:_M,sprite_vert:yM,sprite_frag:bM},$e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},wi={basic:{uniforms:Sn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Sn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Sn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Sn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Sn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Je(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Sn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Sn([$e.points,$e.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Sn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Sn([$e.common,$e.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Sn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Sn([$e.sprite,$e.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Sn([$e.common,$e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Sn([$e.lights,$e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};wi.physical={uniforms:Sn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var yh={r:0,b:0,g:0},MM=new pt,Xm=new ot;Xm.set(-1,0,0,0,1,0,0,0,1);function SM(n,e,t,i,s,r){let o=new Je(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let b=v.backgroundBlurriness>0;w=e.get(w,b)}return w}function p(v){let w=!1,b=f(v);b===null?m(o,a):b&&b.isColor&&(m(b,1),w=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,w){let b=f(w);b&&b.isCubeTexture?(c===void 0&&(c=new at(new mt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:hr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(MM.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xm),c.material.toneMapped=bt.getTransfer(b.colorSpace)!==Rt,(h!==b||d!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new at(new vs(2,2),new bn({name:"BackgroundMaterial",uniforms:hr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=bt.getTransfer(b.colorSpace)!==Rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(yh,Kd(n)),t.buffers.color.setClear(yh.r,yh.g,yh.b,w,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:g,dispose:x}}function wM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(I,A,L,E,N){let k=!1,W=d(I,E,L,A);r!==W&&(r=W,c(r.object)),k=f(I,E,L,N),k&&p(I,E,L,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(I,A,L,E),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function d(I,A,L,E){let N=E.wireframe===!0,k=i[A.id];k===void 0&&(k={},i[A.id]=k);let W=I.isInstancedMesh===!0?I.id:0,te=k[W];te===void 0&&(te={},k[W]=te);let Y=te[L.id];Y===void 0&&(Y={},te[L.id]=Y);let J=Y[N];return J===void 0&&(J=u(l()),Y[N]=J),J}function u(I){let A=[],L=[],E=[];for(let N=0;N<t;N++)A[N]=0,L[N]=0,E[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:E,object:I,attributes:{},index:null}}function f(I,A,L,E){let N=r.attributes,k=A.attributes,W=0,te=L.getAttributes();for(let Y in te)if(te[Y].location>=0){let U=N[Y],le=k[Y];if(le===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),U===void 0||U.attribute!==le||le&&U.data!==le.data)return!0;W++}return r.attributesNum!==W||r.index!==E}function p(I,A,L,E){let N={},k=A.attributes,W=0,te=L.getAttributes();for(let Y in te)if(te[Y].location>=0){let U=k[Y];U===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(U=I.instanceColor));let le={};le.attribute=U,U&&U.data&&(le.data=U.data),N[Y]=le,W++}r.attributes=N,r.attributesNum=W,r.index=E}function g(){let I=r.newAttributes;for(let A=0,L=I.length;A<L;A++)I[A]=0}function m(I){x(I,0)}function x(I,A){let L=r.newAttributes,E=r.enabledAttributes,N=r.attributeDivisors;L[I]=1,E[I]===0&&(n.enableVertexAttribArray(I),E[I]=1),N[I]!==A&&(n.vertexAttribDivisor(I,A),N[I]=A)}function v(){let I=r.newAttributes,A=r.enabledAttributes;for(let L=0,E=A.length;L<E;L++)A[L]!==I[L]&&(n.disableVertexAttribArray(L),A[L]=0)}function w(I,A,L,E,N,k,W){W===!0?n.vertexAttribIPointer(I,A,L,N,k):n.vertexAttribPointer(I,A,L,E,N,k)}function b(I,A,L,E){g();let N=E.attributes,k=L.getAttributes(),W=A.defaultAttributeValues;for(let te in k){let Y=k[te];if(Y.location>=0){let J=N[te];if(J===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let U=J.normalized,le=J.itemSize,be=e.get(J);if(be===void 0)continue;let H=be.buffer,oe=be.type,we=be.bytesPerElement,de=oe===n.INT||oe===n.UNSIGNED_INT||J.gpuType===Oc;if(J.isInterleavedBufferAttribute){let re=J.data,Oe=re.isInterleavedBuffer===!0?re.stride:re.itemSize,De=J.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)x(Y.location+Me,re.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Me=0;Me<Y.locationSize;Me++)w(Y.location+Me,le/Y.locationSize,oe,U,Oe*we,(De+le/Y.locationSize*Me)*we,de)}else{if(J.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)x(Y.location+re,J.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<Y.locationSize;re++)m(Y.location+re);n.bindBuffer(n.ARRAY_BUFFER,H);for(let re=0;re<Y.locationSize;re++)w(Y.location+re,le/Y.locationSize,oe,U,le*we,le/Y.locationSize*re*we,de)}}else if(W!==void 0){let U=W[te];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(Y.location,U);break;case 3:n.vertexAttrib3fv(Y.location,U);break;case 4:n.vertexAttrib4fv(Y.location,U);break;default:n.vertexAttrib1fv(Y.location,U)}}}}v()}function S(){P();for(let I in i){let A=i[I];for(let L in A){let E=A[L];for(let N in E){let k=E[N];for(let W in k)h(k[W].object),delete k[W];delete E[N]}}delete i[I]}}function M(I){if(i[I.id]===void 0)return;let A=i[I.id];for(let L in A){let E=A[L];for(let N in E){let k=E[N];for(let W in k)h(k[W].object),delete k[W];delete E[N]}}delete i[I.id]}function _(I){for(let A in i){let L=i[A];for(let E in L){let N=L[E];if(N[I.id]===void 0)continue;let k=N[I.id];for(let W in k)h(k[W].object),delete k[W];delete N[I.id]}}}function y(I){for(let A in i){let L=i[A],E=I.isInstancedMesh===!0?I.id:0,N=L[E];if(N!==void 0){for(let k in N){let W=N[k];for(let te in W)h(W[te].object),delete W[te];delete N[k]}delete L[E],Object.keys(L).length===0&&delete i[A]}}}function P(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function TM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function EM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Wn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let y=_===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Vn&&_!==Kn&&!y&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(st("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&st("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:b,maxSamples:S,samples:M}}function AM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new li,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,x=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,w=v*4,b=x.clippingState||null;l.value=b,b=h(p,u,w,f);for(let S=0;S!==w;++S)b[S]=t[S];x.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=f+g*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,b=f;w!==g;++w,b+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var Ua=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new aa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:or});r.uniforms.tEquirect.value=t;let o=new at(s,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=an),new no(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Sm=256,RM=3,CM=20,Ym=256,qm=16,PM=3,IM=new z,LM=new Je,Mh=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new no(1,10,null),this._boxMesh=new at(new mt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=IM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(LM));let m=new no(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sm,Yd(e))}_fromTexture(e,t){e.mapping===lr||e.mapping===ro?this._setSize(e.image.length===0?Sm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=wm(e,!1,!1),i=Math.log2(e)-RM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=wm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===lr||e.mapping===ro?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=DM(),this._integrationMaterial=NM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/qm);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-PM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Ym*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=OM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function wm(n,e,t){return new Ua(n,{minFilter:Qi,generateMipmaps:e,type:hi,colorSpace:qo,depthBuffer:t})}function Fa(n,e,t){return new bn({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:jt,blending:or,depthTest:!1,depthWrite:!1})}function DM(){return Fa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ym}u

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
	`)}function NM(){return Fa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qm}},`

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
	`)}function OM(){return Fa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${CM}
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
	`)}function Tm(){return Fa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Em(){return Fa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function UM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Lc||f===Dc)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let g=new Ua(p.height);return g.fromEquirectangularTexture(n,u),e.set(u,g),u.addEventListener("dispose",c),a(g.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Lc||f===Dc,g=f===lr||f===ro;if(p||g){let m=t.get(u),x=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return i===null&&(i=new Mh(n)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new Mh(n)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Lc?u.mapping=lr:f===Dc&&(u.mapping=ro),u}function l(u){let f=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function FM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ho("WebGLRenderer: "+i+" extension not supported."),s}}}function kM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),t.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)e.update(g[m],n.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let v=g!==null?g.array.length:m.array.length/3-1,w=m.count>=65535?ta:ea,b=new w(Math.ceil(v/3)*6,1),S=b.array;if(g!==null){let _=g.array;x=g.version;for(let y=0,P=0;y<v;y+=3){let R=_[y+0],I=_[y+1],A=_[y+2];S[P++]=R,S[P++]=I,S[P++]=I,S[P++]=A,S[P++]=A,S[P++]=R}}else{x=m.version;for(let _=0,y=0;_<v;_+=3){let P=_+0,R=_+1,I=_+2;S[y++]=P,S[y++]=R,S[y++]=R,S[y++]=I,S[y++]=I,S[y++]=P}}b.version=x;let M=r.get(p);M&&e.remove(M),r.set(p,b)}function u(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function BM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m];t.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function HM(n,e,t){let i=new WeakMap,s=new Bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),g===!0&&(w=3);let b=a.attributes.position.count*w,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*S*4*d),_=new jo(M,b,S,d);_.type=Kn,_.needsUpdate=!0;let y=w*4;for(let R=0;R<d;R++){let I=m[R],A=x[R],L=v[R],E=b*S*4*R;for(let N=0;N<I.count;N++){let k=N*y;f===!0&&(s.fromBufferAttribute(I,N),M[E+k+0]=s.x,M[E+k+1]=s.y,M[E+k+2]=s.z,M[E+k+3]=0),p===!0&&(s.fromBufferAttribute(A,N),M[E+k+4]=s.x,M[E+k+5]=s.y,M[E+k+6]=s.z,M[E+k+7]=0),g===!0&&(s.fromBufferAttribute(L,N),M[E+k+8]=s.x,M[E+k+9]=s.y,M[E+k+10]=s.z,M[E+k+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new He(b,S)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function GM(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var VM={[Td]:"LINEAR_TONE_MAPPING",[Ed]:"REINHARD_TONE_MAPPING",[Ad]:"CINEON_TONE_MAPPING",[Rd]:"ACES_FILMIC_TONE_MAPPING",[Pd]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Cd]:"CUSTOM_TONE_MAPPING"};function WM(n,e,t,i,s,r){let o=new Hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Et;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));let d=new gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new at(h,d),f=new Cc(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,v=null,w=[],b=!1;this.setSize=function(S,M){o.setSize(S,M),a!==null&&a.setSize(S,M),l!==null&&l.setSize(S,M);for(let _=0;_<w.length;_++){let y=w[_];y.setSize&&y.setSize(S,M)}},this.setEffects=function(S){w=S,b=w.length>0&&w[0].isRenderPass===!0;let M=o.width,_=o.height;w.length>0&&a===null&&(a=new Hn(M,_,{type:hi,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(M,_,{type:hi,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&w.some(P=>P.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new ji(M,_),r===!0&&(c.format=es,c.type=cr)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let P=0;P<w.length;P++){let R=w[P];R.setSize&&R.setSize(M,_),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(S,M){if(m||S.toneMapping===Mi&&w.length===0)return!1;if(v=M,M!==null){let _=M.width,y=M.height;(o.width!==_||o.height!==y)&&this.setSize(_,y)}return b===!1&&S.setRenderTarget(o),x=S.toneMapping,S.toneMapping=Mi,!0},this.hasRenderPass=function(){return b},this.end=function(S,M){S.toneMapping=x,m=!0;let _=o,y=a;for(let P=0;P<w.length;P++){let R=w[P];R.enabled!==!1&&(R.render(S,y,_,M),R.needsSwap!==!1&&(_=y,y=y===a?l:a))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,d.defines={},bt.getTransfer(p)===Rt&&(d.defines.SRGB_TRANSFER="");let P=VM[g];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,S.setRenderTarget(v),S.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var $m=new Pn,Zm=new ji(1,1),Km=new ca(1),Jm=new jo,jm=new oc,Qm=new aa,Am=[],Rm=[],Cm=new Float32Array(16),Pm=new Float32Array(9),Im=new Float32Array(4);function co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Am[s];if(r===void 0&&(r=new Float32Array(s),Am[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wh(n,e){let t=Rm[e];t===void 0&&(t=new Int32Array(e),Rm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function XM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function qM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function $M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function ZM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Im.set(i),n.uniformMatrix2fv(this.addr,!1,Im),en(t,i)}}function KM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Pm.set(i),n.uniformMatrix3fv(this.addr,!1,Pm),en(t,i)}}function JM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Cm.set(i),n.uniformMatrix4fv(this.addr,!1,Cm),en(t,i)}}function jM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function QM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function eS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function tS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function nS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function sS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function rS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function Th(n){return n.version===0&&(n.compareFunction=Gd,n.needsUpdate=!0),n}function oS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Th(Zm):r=$m,t.setTexture2D(e||r,s)}function aS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jm,s)}function lS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Th(Km):r=Qm,t.setTextureCube(e||r,s)}function cS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jm,s)}function hS(n){switch(n){case 5126:return XM;case 35664:return YM;case 35665:return qM;case 35666:return $M;case 35674:return ZM;case 35675:return KM;case 35676:return JM;case 5124:case 35670:return jM;case 35667:case 35671:return QM;case 35668:case 35672:return eS;case 35669:case 35673:return tS;case 5125:return nS;case 36294:return iS;case 36295:return sS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return cS}}function uS(n,e){n.uniform1fv(this.addr,e)}function dS(n,e){let t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function fS(n,e){let t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function pS(n,e){let t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function mS(n,e){let t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gS(n,e){let t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xS(n,e){let t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vS(n,e){n.uniform1iv(this.addr,e)}function _S(n,e){n.uniform2iv(this.addr,e)}function yS(n,e){n.uniform3iv(this.addr,e)}function bS(n,e){n.uniform4iv(this.addr,e)}function MS(n,e){n.uniform1uiv(this.addr,e)}function SS(n,e){n.uniform2uiv(this.addr,e)}function wS(n,e){n.uniform3uiv(this.addr,e)}function TS(n,e){n.uniform4uiv(this.addr,e)}function ES(n,e,t){let i=this.cache,s=e.length,r=wh(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Th(Zm):o=$m;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function AS(n,e,t){let i=this.cache,s=e.length,r=wh(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jm,r[o])}function RS(n,e,t){let i=this.cache,s=e.length,r=wh(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Th(Km):o=Qm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function CS(n,e,t){let i=this.cache,s=e.length,r=wh(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jm,r[o])}function PS(n){switch(n){case 5126:return uS;case 35664:return dS;case 35665:return fS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return xS;case 5124:case 35670:return vS;case 35667:case 35671:return _S;case 35668:case 35672:return yS;case 35669:case 35673:return bS;case 5125:return MS;case 36294:return SS;case 36295:return wS;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return AS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}var lf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hS(t.type)}},cf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PS(t.type)}},hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},of=/(\w+)(\])?(\[|\.)?/g;function Lm(n,e){n.seq.push(e),n.map[e.id]=e}function IS(n,e,t){let i=n.name,s=i.length;for(of.lastIndex=0;;){let r=of.exec(i),o=of.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lm(t,c===void 0?new lf(a,n,e):new cf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new hf(a),Lm(t,d)),t=d}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);IS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Dm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var LS=37297,DS=0;function NS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Nm=new ot;function OS(n){bt._getMatrix(Nm,bt.workingColorSpace,n);let e=`mat3( ${Nm.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case $o:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Om(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+NS(n.getShaderSource(e),a)}else return r}function US(n,e){let t=OS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var FS={[Td]:"Linear",[Ed]:"Reinhard",[Ad]:"Cineon",[Rd]:"ACESFilmic",[Pd]:"AgX",[Id]:"Neutral",[Cd]:"Custom"};function kS(n,e){let t=FS[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bh=new z;function BS(){bt.getLuminanceCoefficients(bh);let n=bh.x.toFixed(4),e=bh.y.toFixed(4),t=bh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function HS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Oa(n){return n!==""}function Um(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Fm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var VS=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(n){return n.replace(VS,WS)}function WS(n,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return uf(t)}var XS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(n){return n.replace(XS,YS)}function YS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var qS={[Ea]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function $S(n){return qS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ZS={[ro]:"ENVMAP_MODE_REFRACTION"};function KS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ZS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var JS={[wd]:"ENVMAP_BLENDING_MULTIPLY",[Q0]:"ENVMAP_BLENDING_MIX",[em]:"ENVMAP_BLENDING_ADD"};function jS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":JS[n.combine]||"ENVMAP_BLENDING_NONE"}function QS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$S(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=KS(t),d=jS(t),u=zS(t),f=HS(r),p=s.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Oa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Oa).join(`
`),m.length>0&&(m+=`
`)):(g=[Bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),m=[Bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Mi?kS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,US("linearToOutputTexel",t.outputColorSpace),BS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),o=uf(o),o=Um(o,t),o=Fm(o,t),a=uf(a),a=Um(a,t),a=Fm(a,t),o=km(o),a=km(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+g+o,w=x+m+a,b=Dm(s,s.VERTEX_SHADER,v),S=Dm(s,s.FRAGMENT_SHADER,w);s.attachShader(p,b),s.attachShader(p,S),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function M(R){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",A=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(S)||"",E=I.trim(),N=A.trim(),k=L.trim(),W=!0,te=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,b,S);else{let Y=Om(s,b,"vertex"),J=Om(s,S,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+E+`
`+Y+`
`+J)}else E!==""?st("WebGLProgram: Program Info Log:",E):(N===""||k==="")&&(te=!1);te&&(R.diagnostics={runnable:W,programLog:E,vertexShader:{log:N,prefix:g},fragmentShader:{log:k,prefix:m}})}s.deleteShader(b),s.deleteShader(S),_=new lo(s,p),y=GS(s,p)}let _;this.getUniforms=function(){return _===void 0&&M(this),_};let y;this.getAttributes=function(){return y===void 0&&M(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,LS)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=S,this}var ew=0,df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ff(e),t.set(e,i)),i}},ff=class{constructor(e){this.id=ew++,this.code=e,this.usedTimes=0}};function tw(n){return n===Ss||n===La||n===Da}function nw(n,e,t,i,s,r){let o=new Qo,a=new df,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,y,P,R,I,A){let L=R.fog,E=I.geometry,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||N,k),te=u[_.type],Y=i.precision;_.precision!==null&&(Y=i.getMaxPrecision(_.precision),Y!==_.precision&&st("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let J=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,U=J!==void 0?J.length:0,le=0;E.morphAttributes.position!==void 0&&(le=1),E.morphAttributes.normal!==void 0&&(le=2),E.morphAttributes.color!==void 0&&(le=3);let be,H,oe,we;if(te){let Le=wi[te];be=Le.vertexShader,H=Le.fragmentShader}else{be=_.vertexShader,H=_.fragmentShader;let Le=a.getVertexShaderStage(_),je=a.getFragmentShaderStage(_);a.update(_,Le,je),oe=Le.id,we=je.id}let de=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),Oe=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,Me=!!_.map,Ae=!!_.matcap,Te=!!W,F=Te&&W.isPMREMTexture===!0,$=!!_.aoMap,ne=!!_.lightMap,ae=!!_.bumpMap&&_.wireframe===!1,ee=!!_.normalMap,pe=!!_.displacementMap,se=!!_.emissiveMap,xe=!!_.metalnessMap,Ne=!!_.roughnessMap,Ge=_.anisotropy>0,G=_.clearcoat>0,ve=_.diffuseRoughness>0,Fe=_.dispersion>0,Ve=_.retroreflectivity>0,fe=_.iridescence>0,tt=_.sheen>0,ke=_.transmission>0,Ue=Ge&&!!_.anisotropyMap,O=G&&!!_.clearcoatMap,C=G&&!!_.clearcoatNormalMap,j=G&&!!_.clearcoatRoughnessMap,Ce=ve&&!!_.diffuseRoughnessMap,ge=fe&&!!_.iridescenceMap,_e=fe&&!!_.iridescenceThicknessMap,Ie=tt&&!!_.sheenColorMap,ue=tt&&!!_.sheenRoughnessMap,he=!!_.specularMap,Pe=!!_.specularColorMap,V=!!_.specularIntensityMap,me=ke&&!!_.transmissionMap,ce=ke&&!!_.thicknessMap,ze=!!_.gradientMap,Be=!!_.alphaMap,Se=_.alphaTest>0,Re=!!_.alphaHash,Ye=!!_.extensions,ye=Mi;_.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ye=n.toneMapping);let Xe=F?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Ke={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:be,fragmentShader:H,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:we,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:De,batchingColor:De&&I._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&I.instanceColor!==null,instancingMorph:Oe&&I.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Me,matcap:Ae,envMap:Te,envMapMode:Te&&W.mapping,envMapPMREM:F,envMapMaxLod:F?Xe.length-1:null,envMapSize:F?Xe[0].width:null,aoMap:$,lightMap:ne,bumpMap:ae,normalMap:ee,displacementMap:pe,emissiveMap:se,normalMapObjectSpace:ee&&_.normalMapType===im,normalMapTangentSpace:ee&&_.normalMapType===Bd,packedNormalMap:ee&&_.normalMapType===Bd&&tw(_.normalMap.format),metalnessMap:xe,roughnessMap:Ne,anisotropy:Ge,anisotropyMap:Ue,clearcoat:G,clearcoatMap:O,clearcoatNormalMap:C,clearcoatRoughnessMap:j,diffuseRoughness:ve,diffuseRoughnessMap:Ce,dispersion:Fe,retroreflection:Ve,iridescence:fe,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:tt,sheenColorMap:Ie,sheenRoughnessMap:ue,specularMap:he,specularColorMap:Pe,specularIntensityMap:V,transmission:ke,transmissionMap:me,thicknessMap:ce,gradientMap:ze,opaque:_.transparent===!1&&_.blending===so&&_.alphaToCoverage===!1,alphaMap:Be,alphaTest:Se,alphaHash:Re,combine:_.combine,mapUv:Me&&f(_.map.channel),aoMapUv:$&&f(_.aoMap.channel),lightMapUv:ne&&f(_.lightMap.channel),bumpMapUv:ae&&f(_.bumpMap.channel),normalMapUv:ee&&f(_.normalMap.channel),displacementMapUv:pe&&f(_.displacementMap.channel),emissiveMapUv:se&&f(_.emissiveMap.channel),metalnessMapUv:xe&&f(_.metalnessMap.channel),roughnessMapUv:Ne&&f(_.roughnessMap.channel),anisotropyMapUv:Ue&&f(_.anisotropyMap.channel),clearcoatMapUv:O&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:C&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&f(_.sheenRoughnessMap.channel),specularMapUv:he&&f(_.specularMap.channel),specularColorMapUv:Pe&&f(_.specularColorMap.channel),specularIntensityMapUv:V&&f(_.specularIntensityMap.channel),transmissionMapUv:me&&f(_.transmissionMap.channel),thicknessMapUv:ce&&f(_.thicknessMap.channel),alphaMapUv:Be&&f(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(ee||Ge),vertexNormals:!!E.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!E.attributes.uv&&(Me||Be),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||E.attributes.normal===void 0&&ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:le,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:A.filter(Le=>Le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:Me&&_.map.isVideoTexture===!0&&bt.getTransfer(_.map.colorSpace)===Rt,decodeVideoTextureEmissive:se&&_.emissiveMap.isVideoTexture===!0&&bt.getTransfer(_.emissiveMap.colorSpace)===Rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mn,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&_.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function g(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)y.push(P),y.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(y,_),x(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function m(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function x(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let y=u[_.type],P;if(y){let R=wi[y];P=ym.clone(R.uniforms)}else P=_.uniforms;return P}function w(_,y){let P=h.get(y);return P!==void 0?++P.usedTimes:(P=new QS(n,y,_,s),c.push(P),h.set(y,P)),P}function b(_){if(--_.usedTimes===0){let y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function M(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:M}}function iw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function sw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,g,m,x){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},n[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=m,v.group=x),e++,v}function l(u,f,p,g,m,x,v){v.reversedDepth===!0&&(m=-m);let w=a(u,f,p,g,m,x);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(u,f,p,g,m,x){let v=a(u,f,p,g,m,x);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||sw),i.length>1&&i.sort(f||zm),s.length>1&&s.sort(f||zm)}function d(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function rw(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Hm,n.set(i,[o])):s>=r.length?(o=new Hm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ow(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function aw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var lw=0;function cw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hw(n){let e=new ow,t=aw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new pt,o=new pt;function a(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,p=0,g=0,m=0,x=0,v=0,w=0,b=0,S=0,M=0,_=0,y=0,P=0,R=0;c.sort(cw);for(let A=0,L=c.length;A<L;A++){let E=c[A],N=E.color,k=E.intensity,W=E.distance,te=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ss?te=E.shadow.map.texture:te=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=N.r*k,d+=N.g*k,u+=N.b*k;else if(E.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(E.sh.coefficients[Y],k);R++}else if(E.isSunLight){let Y=e.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let J=E.shadow,U=t.get(E);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=U,i.sunShadowMap[p]=te;let le=J.getViewportCount();for(let be=0;be<le;be++)i.sunShadowMatrix[g+be]=J.getMatrix(be),i.sunShadowCascade[g+be]=J._cascadeData[be];g+=le,p++}i.sun[f]=Y,f++}else if(E.isDirectionalLight){let Y=e.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let J=E.shadow,U=t.get(E);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=E.shadow.matrix,S++}i.directional[m]=Y,m++}else if(E.isSpotLight){let Y=e.get(E);Y.position.setFromMatrixPosition(E.matrixWorld),Y.color.copy(N).multiplyScalar(k),Y.distance=W,Y.coneCos=Math.cos(E.angle),Y.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),Y.decay=E.decay,i.spot[v]=Y;let J=E.shadow;if(E.map&&(i.spotLightMap[y]=E.map,y++,J.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[v]=J.matrix,E.castShadow){let U=t.get(E);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=te,_++}v++}else if(E.isRectAreaLight){let Y=e.get(E);Y.color.copy(N).multiplyScalar(k),Y.halfWidth.set(E.width*.5,0,0),Y.halfHeight.set(0,E.height*.5,0),i.rectArea[w]=Y,w++}else if(E.isPointLight){let Y=e.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),Y.distance=E.distance,Y.decay=E.decay,E.castShadow){let J=E.shadow,U=t.get(E);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=E.shadow.matrix,M++}i.point[x]=Y,x++}else if(E.isHemisphereLight){let Y=e.get(E);Y.skyColor.copy(E.color).multiplyScalar(k),Y.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[b]=Y,b++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$e.LTC_FLOAT_1,i.rectAreaLTC2=$e.LTC_FLOAT_2):(i.rectAreaLTC1=$e.LTC_HALF_1,i.rectAreaLTC2=$e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==x||I.spotLength!==v||I.rectAreaLength!==w||I.hemiLength!==b||I.numSunShadows!==p||I.numDirectionalShadows!==S||I.numPointShadows!==M||I.numSpotShadows!==_||I.numSpotMaps!==y||I.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=x,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+y-P,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=x,I.spotLength=v,I.rectAreaLength=w,I.hemiLength=b,I.numSunShadows=p,I.numDirectionalShadows=S,I.numPointShadows=M,I.numSpotShadows=_,I.numSpotMaps=y,I.numLightProbes=R,i.version=lw++)}function l(c,h){let d=0,u=0,f=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let b=c[v];if(b.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(x),d++}else if(b.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),u++}else if(b.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),p++}else if(b.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),f++}else if(b.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function Gm(n){let e=new hw(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function uw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Gm(n),e.set(s,[a])):r>=o.length?(a=new Gm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
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
}`,pw=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],mw=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Vm=new pt,Na=new z,af=new z;function gw(n,e,t){let i=new er,s=new He,r=new He,o=new Bt,a=new xc,l=new vc,c={},h=t.maxTextureSize,d={[Ms]:jt,[jt]:Ms,[Mn]:Mn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:dw,fragmentShader:fw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Et;p.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new at(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let x=this.type;this.render=function(M,_,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===N0&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ea);let P=n.getRenderTarget(),R=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),A=n.state;A.setBlending(or),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let L=x!==this.type;L&&_.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(N=>N.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,N=M.length;E<N;E++){let k=M[E],W=k.shadow;if(W===void 0){st("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let te=W.getFrameExtents();s.multiply(te),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,W.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||L===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===io){if(k.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Hn(s.x,s.y,{format:Ss,type:hi,minFilter:an,magFilter:an,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new ji(s.x,s.y,Kn),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Ki,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=on,W.map.depthTexture.magFilter=on}else k.isPointLight?(W.map=new Ua(s.x),W.map.depthTexture=new ca(s.x,ci)):(W.map=new Hn(s.x,s.y),W.map.depthTexture=new ji(s.x,s.y,ci)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Ki,this.type===Ea?(W.map.depthTexture.compareFunction=Y?Hd:zd,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=on,W.map.depthTexture.magFilter=on);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,y);let U=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:y.layers;for(let le=0;le<J;le++){let be=W.getCamera(le);if(k.isPointLight){let H=W.camera,oe=W.matrix,we=k.distance||H.far;we!==H.far&&(H.far=we,H.updateProjectionMatrix()),Na.setFromMatrixPosition(k.matrixWorld),H.position.copy(Na),af.copy(H.position),af.add(pw[le]),H.up.copy(mw[le]),H.lookAt(af),H.updateMatrixWorld(),oe.makeTranslation(-Na.x,-Na.y,-Na.z),Vm.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Vm,H.coordinateSystem,H.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,le),n.clear();else{le===0&&(n.setRenderTarget(W.map),n.clear());let H=W.getViewport(le);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),A.viewport(o)}i=W.getFrustum(le),b(_,y,be,k,U,this.type)}W.isPointLightShadow!==!0&&this.type===io&&v(W,y),W.needsUpdate=!1}x=this.type,m.needsUpdate=!1,n.setRenderTarget(P,R,I)};function v(M,_){let y=e.update(g);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Hn(s.x,s.y,{format:Ss,type:hi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(_,null,y,u,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(_,null,y,f,g,null)}function w(M,_,y,P){let R=null,I=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let A=R.uuid,L=_.uuid,E=c[A];E===void 0&&(E={},c[A]=E);let N=E[L];N===void 0&&(N=R.clone(),E[L]=N,_.addEventListener("dispose",S)),R=N}if(R.visible=_.visible,R.wireframe=_.wireframe,P===io?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let A=n.properties.get(R);A.light=y}return R}function b(M,_,y,P,R,I){if(M.visible===!1)return;if(M.layers.test(R)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===io)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let E=e.update(M),N=M.material;if(Array.isArray(N)){let k=E.groups;for(let W=0,te=k.length;W<te;W++){let Y=k[W],J=N[Y.materialIndex];if(J&&J.visible){let U=w(M,J,P,I);M.onBeforeShadow(n,M,_,y,E,U,Y),n.renderBufferDirect(y,null,E,U,M,Y),M.onAfterShadow(n,M,_,y,E,U,Y)}}}else if(N.visible){let k=w(M,N,P,I);M.onBeforeShadow(n,M,_,y,E,k,null),n.renderBufferDirect(y,null,E,k,M,null),M.onAfterShadow(n,M,_,y,E,k,null)}}let L=M.children;for(let E=0,N=L.length;E<N;E++)b(L[E],_,y,P,R,I)}function S(M){M.target.removeEventListener("dispose",S);for(let y in c){let P=c[y],R=M.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function xw(n,e){function t(){let V=!1,me=new Bt,ce=null,ze=new Bt(0,0,0,0);return{setMask:function(Be){ce!==Be&&!V&&(n.colorMask(Be,Be,Be,Be),ce=Be)},setLocked:function(Be){V=Be},setClear:function(Be,Se,Re,Ye,ye){ye===!0&&(Be*=Ye,Se*=Ye,Re*=Ye),me.set(Be,Se,Re,Ye),ze.equals(me)===!1&&(n.clearColor(Be,Se,Re,Ye),ze.copy(me))},reset:function(){V=!1,ce=null,ze.set(-1,0,0,0)}}}function i(){let V=!1,me=!1,ce=null,ze=null,Be=null;return{setReversed:function(Se){if(me!==Se){let Re=e.get("EXT_clip_control");Se?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),me=Se;let Ye=Be;Be=null,this.setClear(Ye)}},getReversed:function(){return me},setTest:function(Se){Se?re(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Se){ce!==Se&&!V&&(n.depthMask(Se),ce=Se)},setFunc:function(Se){if(me&&(Se=fm[Se]),ze!==Se){switch(Se){case $l:n.depthFunc(n.NEVER);break;case Zl:n.depthFunc(n.ALWAYS);break;case Kl:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case jl:n.depthFunc(n.GEQUAL);break;case Ql:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ze=Se}},setLocked:function(Se){V=Se},setClear:function(Se){Be!==Se&&(Be=Se,me&&(Se=1-Se),n.clearDepth(Se))},reset:function(){V=!1,ce=null,ze=null,Be=null,me=!1}}}function s(){let V=!1,me=null,ce=null,ze=null,Be=null,Se=null,Re=null,Ye=null,ye=null;return{setTest:function(Xe){V||(Xe?re(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Xe){me!==Xe&&!V&&(n.stencilMask(Xe),me=Xe)},setFunc:function(Xe,Ke,Le){(ce!==Xe||ze!==Ke||Be!==Le)&&(n.stencilFunc(Xe,Ke,Le),ce=Xe,ze=Ke,Be=Le)},setOp:function(Xe,Ke,Le){(Se!==Xe||Re!==Ke||Ye!==Le)&&(n.stencilOp(Xe,Ke,Le),Se=Xe,Re=Ke,Ye=Le)},setLocked:function(Xe){V=Xe},setClear:function(Xe){ye!==Xe&&(n.clearStencil(Xe),ye=Xe)},reset:function(){V=!1,me=null,ce=null,ze=null,Be=null,Se=null,Re=null,Ye=null,ye=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],g=null,m=!1,x=null,v=null,w=null,b=null,S=null,M=null,_=null,y=new Je(0,0,0),P=0,R=!1,I=null,A=null,L=null,E=null,N=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,te=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=te>=2);let J=null,U={},le=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),H=new Bt().fromArray(le),oe=new Bt().fromArray(be);function we(V,me,ce,ze){let Be=new Uint8Array(4),Se=n.createTexture();n.bindTexture(V,Se),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<ce;Re++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(me+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return Se}let de={};de[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(Gr),ae(!1),ee(vd),re(n.CULL_FACE),$(or);function re(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function Oe(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function De(V,me){return u[V]!==me?(n.bindFramebuffer(V,me),u[V]=me,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=me),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Me(V,me){let ce=p,ze=!1;if(V){ce=f.get(me),ce===void 0&&(ce=[],f.set(me,ce));let Be=V.textures;if(ce.length!==Be.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Re=Be.length;Se<Re;Se++)ce[Se]=n.COLOR_ATTACHMENT0+Se;ce.length=Be.length,ze=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,ze=!0);ze&&n.drawBuffers(ce)}function Ae(V){return g!==V?(n.useProgram(V),g=V,!0):!1}let Te={[ar]:n.FUNC_ADD,[U0]:n.FUNC_SUBTRACT,[F0]:n.FUNC_REVERSE_SUBTRACT};Te[k0]=n.MIN,Te[B0]=n.MAX;let F={[z0]:n.ZERO,[H0]:n.ONE,[G0]:n.SRC_COLOR,[Md]:n.SRC_ALPHA,[$0]:n.SRC_ALPHA_SATURATE,[Y0]:n.DST_COLOR,[W0]:n.DST_ALPHA,[V0]:n.ONE_MINUS_SRC_COLOR,[Sd]:n.ONE_MINUS_SRC_ALPHA,[q0]:n.ONE_MINUS_DST_COLOR,[X0]:n.ONE_MINUS_DST_ALPHA,[Z0]:n.CONSTANT_COLOR,[K0]:n.ONE_MINUS_CONSTANT_COLOR,[J0]:n.CONSTANT_ALPHA,[j0]:n.ONE_MINUS_CONSTANT_ALPHA};function $(V,me,ce,ze,Be,Se,Re,Ye,ye,Xe){if(V===or){m===!0&&(Oe(n.BLEND),m=!1);return}if(m===!1&&(re(n.BLEND),m=!0),V!==O0){if(V!==x||Xe!==R){if((v!==ar||S!==ar)&&(n.blendEquation(n.FUNC_ADD),v=ar,S=ar),Xe)switch(V){case so:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _d:n.blendFunc(n.ONE,n.ONE);break;case yd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",V);break}else switch(V){case so:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _d:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yd:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bd:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",V);break}w=null,b=null,M=null,_=null,y.set(0,0,0),P=0,x=V,R=Xe}return}Be=Be||me,Se=Se||ce,Re=Re||ze,(me!==v||Be!==S)&&(n.blendEquationSeparate(Te[me],Te[Be]),v=me,S=Be),(ce!==w||ze!==b||Se!==M||Re!==_)&&(n.blendFuncSeparate(F[ce],F[ze],F[Se],F[Re]),w=ce,b=ze,M=Se,_=Re),(Ye.equals(y)===!1||ye!==P)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ye),y.copy(Ye),P=ye),x=V,R=!1}function ne(V,me){V.side===Mn?Oe(n.CULL_FACE):re(n.CULL_FACE);let ce=V.side===jt;me&&(ce=!ce),ae(ce),V.blending===so&&V.transparent===!1?$(or):$(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let ze=V.stencilWrite;a.setTest(ze),ze&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),se(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(V){I!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),I=V)}function ee(V){V!==L0?(re(n.CULL_FACE),V!==A&&(V===vd?n.cullFace(n.BACK):V===D0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),A=V}function pe(V){V!==L&&(W&&n.lineWidth(V),L=V)}function se(V,me,ce){V?(re(n.POLYGON_OFFSET_FILL),(E!==me||N!==ce)&&(E=me,N=ce,o.getReversed()&&(me=-me,ce=-ce),n.polygonOffset(me,ce))):Oe(n.POLYGON_OFFSET_FILL)}function xe(V){V?re(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function Ne(V){V===void 0&&(V=n.TEXTURE0+k-1),J!==V&&(n.activeTexture(V),J=V)}function Ge(V,me,ce){ce===void 0&&(J===null?ce=n.TEXTURE0+k-1:ce=J);let ze=U[ce];ze===void 0&&(ze={type:void 0,texture:void 0},U[ce]=ze),(ze.type!==V||ze.texture!==me)&&(J!==ce&&(n.activeTexture(ce),J=ce),n.bindTexture(V,me||de[V]),ze.type=V,ze.texture=me)}function G(){let V=U[J];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ve(){try{n.compressedTexImage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function Fe(){try{n.compressedTexImage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function Ve(){try{n.texSubImage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function fe(){try{n.texSubImage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function Ue(){try{n.texStorage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function O(){try{n.texStorage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function C(){try{n.texImage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function j(){try{n.texImage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function Ce(V){return d[V]!==void 0?d[V]:n.getParameter(V)}function ge(V,me){d[V]!==me&&(n.pixelStorei(V,me),d[V]=me)}function _e(V){H.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),H.copy(V))}function Ie(V){oe.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function ue(V,me){let ce=c.get(me);ce===void 0&&(ce=new WeakMap,c.set(me,ce));let ze=ce.get(V);ze===void 0&&(ze=n.getUniformBlockIndex(me,V.name),n.uniformBlockBinding(me,ze,ze),ce.set(V,ze))}function he(V,me,ce){let Be=c.get(me).get(V);l[Be]!==ce&&(n.bindBufferBase(n.UNIFORM_BUFFER,Be,ce),l[Be]=ce)}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,U={},u={},l={},f=new WeakMap,p=[],g=null,m=!1,x=null,v=null,w=null,b=null,S=null,M=null,_=null,y=new Je(0,0,0),P=0,R=!1,I=null,A=null,L=null,E=null,N=null,H.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Oe,bindFramebuffer:De,drawBuffers:Me,useProgram:Ae,setBlending:$,setMaterial:ne,setFlipSided:ae,setCullFace:ee,setLineWidth:pe,setPolygonOffset:se,setScissorTest:xe,activeTexture:Ne,bindTexture:Ge,unbindTexture:G,compressedTexImage2D:ve,compressedTexImage3D:Fe,texImage2D:C,texImage3D:j,pixelStorei:ge,getParameter:Ce,updateUBOMapping:ue,uniformBlockBinding:he,texStorage2D:Ue,texStorage3D:O,texSubImage2D:Ve,texSubImage3D:fe,compressedTexSubImage2D:tt,compressedTexSubImage3D:ke,scissor:_e,viewport:Ie,reset:Pe}}function vw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,g=new FinalizationRegistry(O=>p.delete(O)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,C){return m?new OffscreenCanvas(O,C):Ko("canvas")}function v(O,C,j){let Ce=1,ge=Ue(O);if((ge.width>j||ge.height>j)&&(Ce=j/Math.max(ge.width,ge.height)),Ce<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let _e=Math.floor(Ce*ge.width),Ie=Math.floor(Ce*ge.height);u===void 0&&(u=x(_e,Ie));let ue=C?x(_e,Ie):u;return ue.width=_e,ue.height=Ie,ue.getContext("2d").drawImage(O,0,0,_e,Ie),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+_e+"x"+Ie+")."),ue}else return"data"in O&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function w(O){return O.generateMipmaps}function b(O){n.generateMipmap(O)}function S(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(O,C,j,Ce,ge,_e=!1){if(O!==null){if(n[O]!==void 0)return n[O];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ie;Ce&&(Ie=e.get("EXT_texture_norm16"),Ie||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=C;if(C===n.RED&&(j===n.FLOAT&&(ue=n.R32F),j===n.HALF_FLOAT&&(ue=n.R16F),j===n.UNSIGNED_BYTE&&(ue=n.R8),j===n.UNSIGNED_SHORT&&Ie&&(ue=Ie.R16_EXT),j===n.SHORT&&Ie&&(ue=Ie.R16_SNORM_EXT)),C===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.R8UI),j===n.UNSIGNED_SHORT&&(ue=n.R16UI),j===n.UNSIGNED_INT&&(ue=n.R32UI),j===n.BYTE&&(ue=n.R8I),j===n.SHORT&&(ue=n.R16I),j===n.INT&&(ue=n.R32I)),C===n.RG&&(j===n.FLOAT&&(ue=n.RG32F),j===n.HALF_FLOAT&&(ue=n.RG16F),j===n.UNSIGNED_BYTE&&(ue=n.RG8),j===n.UNSIGNED_SHORT&&Ie&&(ue=Ie.RG16_EXT),j===n.SHORT&&Ie&&(ue=Ie.RG16_SNORM_EXT)),C===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.RG8UI),j===n.UNSIGNED_SHORT&&(ue=n.RG16UI),j===n.UNSIGNED_INT&&(ue=n.RG32UI),j===n.BYTE&&(ue=n.RG8I),j===n.SHORT&&(ue=n.RG16I),j===n.INT&&(ue=n.RG32I)),C===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),j===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),j===n.UNSIGNED_INT&&(ue=n.RGB32UI),j===n.BYTE&&(ue=n.RGB8I),j===n.SHORT&&(ue=n.RGB16I),j===n.INT&&(ue=n.RGB32I)),C===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),j===n.UNSIGNED_INT&&(ue=n.RGBA32UI),j===n.BYTE&&(ue=n.RGBA8I),j===n.SHORT&&(ue=n.RGBA16I),j===n.INT&&(ue=n.RGBA32I)),C===n.RGB&&(j===n.UNSIGNED_SHORT&&Ie&&(ue=Ie.RGB16_EXT),j===n.SHORT&&Ie&&(ue=Ie.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(ue=n.R11F_G11F_B10F)),C===n.RGBA){let he=_e?$o:bt.getTransfer(ge);j===n.FLOAT&&(ue=n.RGBA32F),j===n.HALF_FLOAT&&(ue=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ue=he===Rt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&Ie&&(ue=Ie.RGBA16_EXT),j===n.SHORT&&Ie&&(ue=Ie.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function _(O,C){let j;return O?C===null||C===ci||C===cr?j=n.DEPTH24_STENCIL8:C===Kn?j=n.DEPTH32F_STENCIL8:C===oo&&(j=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ci||C===cr?j=n.DEPTH_COMPONENT24:C===Kn?j=n.DEPTH_COMPONENT32F:C===oo&&(j=n.DEPTH_COMPONENT16),j}function y(O,C){return w(O)===!0||O.isFramebufferTexture&&O.minFilter!==on&&O.minFilter!==an?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function P(O){let C=new WeakRef(O);i.get(O).__ref=C,p.add(C),g.register(O,C,C)}function R(O){let C=i.get(O).__ref;C!==void 0&&(p.delete(C),g.unregister(C))}function I(O){L(O.target)}function A(O){E(O.target)}function L(O){O.removeEventListener("dispose",I),R(O),k(O),O.isVideoTexture&&h.delete(O),O.isHTMLTexture&&d.delete(O)}function E(O){O.removeEventListener("dispose",A),R(O),te(O)}function N(){for(let O of p){let C=O.deref();C!==void 0&&(C.isRenderTarget===!0?E(C):L(C))}p.clear(),d.clear()}function k(O){let C=i.get(O);if(C.__webglInit===void 0)return;let j=O.source,Ce=f.get(j);if(Ce){let ge=Ce[C.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&W(O),Object.keys(Ce).length===0&&f.delete(j)}i.remove(O)}function W(O){let C=i.get(O);n.deleteTexture(C.__webglTexture);let j=O.source,Ce=f.get(j);delete Ce[C.__cacheKey],o.memory.textures--}function te(O){let C=i.get(O);C.__depthDisposeCallback&&C.__depthDisposeCallback();let j=O.depthTexture;if(j&&j.renderTarget===O&&L(j),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(C.__webglFramebuffer[ge]))for(let _e=0;_e<C.__webglFramebuffer[ge].length;_e++)n.deleteFramebuffer(C.__webglFramebuffer[ge][_e]);else n.deleteFramebuffer(C.__webglFramebuffer[ge]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[ge])}else{if(Array.isArray(C.__webglFramebuffer))for(let ge=0;ge<C.__webglFramebuffer.length;ge++)n.deleteFramebuffer(C.__webglFramebuffer[ge]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ge=0;ge<C.__webglColorRenderbuffer.length;ge++)C.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[ge]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let Ce=O.textures;for(let ge=0,_e=Ce.length;ge<_e;ge++){let Ie=i.get(Ce[ge]);Ie.__webglTexture&&(n.deleteTexture(Ie.__webglTexture),o.memory.textures--),i.remove(Ce[ge])}i.remove(O)}let Y=0;function J(){Y=0}function U(){return Y}function le(O){Y=O}function be(){let O=Y;return O>=s.maxTextures&&st("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,O}function H(O){let C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.mipmapsAutoUpdate),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function oe(O,C){let j=i.get(O);if(O.isVideoTexture&&tt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){let Ce=O.image;if(Ce===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(Ce.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(j,O,C);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+C)}function we(O,C){let j=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){ne(j,O,C);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+C)}function de(O,C){let j=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){ne(j,O,C);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+C)}function re(O,C){let j=i.get(O);if(O.version>0&&j.__version!==O.version){ae(j,O,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+C)}let Oe={[tc]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},De={[on]:n.NEAREST,[tm]:n.NEAREST_MIPMAP_NEAREST,[Aa]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Nc]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},Me={[rm]:n.NEVER,[Gd]:n.ALWAYS,[om]:n.LESS,[zd]:n.LEQUAL,[am]:n.EQUAL,[Hd]:n.GEQUAL,[lm]:n.GREATER,[cm]:n.NOTEQUAL};function Ae(O,C){if(C.type===Kn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===an||C.magFilter===Nc||C.magFilter===Aa||C.magFilter===Qi||C.minFilter===an||C.minFilter===Nc||C.minFilter===Aa||C.minFilter===Qi)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,Oe[C.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Oe[C.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Oe[C.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,De[C.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,De[C.minFilter]),C.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,Me[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===on||C.minFilter!==Aa&&C.minFilter!==Qi||C.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Te(O,C){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",I),P(C));let Ce=C.source,ge=f.get(Ce);ge===void 0&&(ge={},f.set(Ce,ge));let _e=H(C);if(_e!==O.__cacheKey){ge[_e]===void 0&&(ge[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ge[_e].usedTimes++;let Ie=ge[O.__cacheKey];Ie!==void 0&&(ge[O.__cacheKey].usedTimes--,Ie.usedTimes===0&&W(C)),O.__cacheKey=_e,O.__webglTexture=ge[_e].texture}return j}function F(O,C,j){return Math.floor(Math.floor(O/j)/C)}function $(O,C,j,Ce){let _e=O.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,C.width,C.height,j,Ce,C.data);else{_e.sort((V,me)=>V.start-me.start);let Ie=0;for(let V=1;V<_e.length;V++){let me=_e[Ie],ce=_e[V],ze=me.start+me.count,Be=F(ce.start,C.width,4),Se=F(me.start,C.width,4);ce.start<=ze+1&&Be===Se&&F(ce.start+ce.count-1,C.width,4)===Be?me.count=Math.max(me.count,ce.start+ce.count-me.start):(++Ie,_e[Ie]=ce)}_e.length=Ie+1;let ue=t.getParameter(n.UNPACK_ROW_LENGTH),he=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,C.width);for(let V=0,me=_e.length;V<me;V++){let ce=_e[V],ze=Math.floor(ce.start/4),Be=Math.ceil(ce.count/4),Se=ze%C.width,Re=Math.floor(ze/C.width),Ye=Be,ye=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(n.TEXTURE_2D,0,Se,Re,Ye,ye,j,Ce,C.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ue),t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function ne(O,C,j){let Ce=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Ce=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Ce=n.TEXTURE_3D);let ge=Te(O,C),_e=C.source;t.bindTexture(Ce,O.__webglTexture,n.TEXTURE0+j);let Ie=i.get(_e);if(_e.version!==Ie.__version||ge===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let ye=bt.getPrimaries(bt.workingColorSpace),Xe=C.colorSpace===ts?null:bt.getPrimaries(C.colorSpace),Ke=C.colorSpace===ts||ye===Xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment);let he=v(C.image,!1,s.maxTextureSize);he=ke(C,he);let Pe=r.convert(C.format,C.colorSpace),V=r.convert(C.type),me=M(C.internalFormat,Pe,V,C.normalized,C.colorSpace,C.isVideoTexture);Ae(Ce,C);let ce,ze=C.mipmaps,Be=C.isVideoTexture!==!0,Se=Ie.__version===void 0||ge===!0,Re=_e.dataReady,Ye=y(C,he);if(C.isDepthTexture)me=_(C.format===es,C.type),Se&&(Be?t.texStorage2D(n.TEXTURE_2D,1,me,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,me,he.width,he.height,0,Pe,V,null));else if(C.isDataTexture)if(ze.length>0){Be&&Se&&t.texStorage2D(n.TEXTURE_2D,Ye,me,ze[0].width,ze[0].height);for(let ye=0,Xe=ze.length;ye<Xe;ye++)ce=ze[ye],Be?Re&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,ce.width,ce.height,Pe,V,ce.data):t.texImage2D(n.TEXTURE_2D,ye,me,ce.width,ce.height,0,Pe,V,ce.data);C.generateMipmaps=!1}else Be?(Se&&t.texStorage2D(n.TEXTURE_2D,Ye,me,he.width,he.height),Re&&$(C,he,Pe,V)):t.texImage2D(n.TEXTURE_2D,0,me,he.width,he.height,0,Pe,V,he.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Be&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,me,ze[0].width,ze[0].height,he.depth);for(let ye=0,Xe=ze.length;ye<Xe;ye++)if(ce=ze[ye],C.format!==Wn)if(Pe!==null)if(Be){if(Re)if(C.layerUpdates.size>0){let Ke=Qd(ce.width,ce.height,C.format,C.type);for(let Le of C.layerUpdates){let je=ce.data.subarray(Le*Ke/ce.data.BYTES_PER_ELEMENT,(Le+1)*Ke/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,Le,ce.width,ce.height,1,Pe,je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,ce.width,ce.height,he.depth,Pe,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,me,ce.width,ce.height,he.depth,0,ce.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,ce.width,ce.height,he.depth,Pe,V,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,me,ce.width,ce.height,he.depth,0,Pe,V,ce.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{Be&&Se&&t.texStorage2D(n.TEXTURE_2D,Ye,me,ze[0].width,ze[0].height);for(let ye=0,Xe=ze.length;ye<Xe;ye++)ce=ze[ye],C.format!==Wn?Pe!==null?Be?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,ce.width,ce.height,Pe,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,me,ce.width,ce.height,0,ce.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Re&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,ce.width,ce.height,Pe,V,ce.data):t.texImage2D(n.TEXTURE_2D,ye,me,ce.width,ce.height,0,Pe,V,ce.data)}else if(C.isDataArrayTexture)if(Be){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,me,he.width,he.height,he.depth),Re)if(C.layerUpdates.size>0){let ye=Qd(he.width,he.height,C.format,C.type);for(let Xe of C.layerUpdates){let Ke=he.data.subarray(Xe*ye/he.data.BYTES_PER_ELEMENT,(Xe+1)*ye/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Xe,he.width,he.height,1,Pe,V,Ke)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Pe,V,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,he.width,he.height,he.depth,0,Pe,V,he.data);else if(C.isData3DTexture)Be?(Se&&t.texStorage3D(n.TEXTURE_3D,Ye,me,he.width,he.height,he.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Pe,V,he.data)):t.texImage3D(n.TEXTURE_3D,0,me,he.width,he.height,he.depth,0,Pe,V,he.data);else if(C.isFramebufferTexture){if(Se)if(Be)t.texStorage2D(n.TEXTURE_2D,Ye,me,he.width,he.height);else{let ye=he.width,Xe=he.height;for(let Ke=0;Ke<Ye;Ke++)t.texImage2D(n.TEXTURE_2D,Ke,me,ye,Xe,0,Pe,V,null),ye>>=1,Xe>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in n){let ye=n.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),he.parentNode!==ye){ye.appendChild(he),d.add(C),ye.onpaint=Xe=>{let Ke=Xe.changedElements;for(let Le of d)Ke.includes(Le.image)&&(Le.needsUpdate=!0)},ye.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,he);else{let Ke=n.RGBA,Le=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ke,Le,je,he)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Be&&Se){let ye=Ue(ze[0]);t.texStorage2D(n.TEXTURE_2D,Ye,me,ye.width,ye.height)}for(let ye=0,Xe=ze.length;ye<Xe;ye++)ce=ze[ye],Be?Re&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Pe,V,ce):t.texImage2D(n.TEXTURE_2D,ye,me,Pe,V,ce);C.generateMipmaps=!1}else if(Be){if(Se){let ye=Ue(he);t.texStorage2D(n.TEXTURE_2D,Ye,me,ye.width,ye.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,V,he)}else t.texImage2D(n.TEXTURE_2D,0,me,Pe,V,he);w(C)&&C.mipmapsAutoUpdate===!0&&b(Ce),Ie.__version=_e.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ae(O,C,j){if(C.image.length!==6)return;let Ce=Te(O,C),ge=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+j);let _e=i.get(ge);if(ge.version!==_e.__version||Ce===!0){t.activeTexture(n.TEXTURE0+j);let Ie=bt.getPrimaries(bt.workingColorSpace),ue=C.colorSpace===ts?null:bt.getPrimaries(C.colorSpace),he=C.colorSpace===ts||Ie===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Pe=C.isCompressedTexture||C.image[0].isCompressedTexture,V=C.image[0]&&C.image[0].isDataTexture,me=[];for(let Le=0;Le<6;Le++)!Pe&&!V?me[Le]=v(C.image[Le],!0,s.maxCubemapSize):me[Le]=V?C.image[Le].image:C.image[Le],me[Le]=ke(C,me[Le]);let ce=me[0],ze=r.convert(C.format,C.colorSpace),Be=r.convert(C.type),Se=M(C.internalFormat,ze,Be,C.normalized,C.colorSpace),Re=C.isVideoTexture!==!0,Ye=_e.__version===void 0||Ce===!0,ye=ge.dataReady,Xe=y(C,ce);Ae(n.TEXTURE_CUBE_MAP,C);let Ke;if(C.isDepthTexture){if(Se=_(C.format===es,C.type),Ye)if(Re)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Se,ce.width,ce.height);else for(let Le=0;Le<6;Le++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,ce.width,ce.height,0,ze,Be,null)}else if(Pe){Re&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,Se,ce.width,ce.height);for(let Le=0;Le<6;Le++){Ke=me[Le].mipmaps;for(let je=0;je<Ke.length;je++){let ct=Ke[je];C.format!==Wn?ze!==null?Re?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je,0,0,ct.width,ct.height,ze,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je,Se,ct.width,ct.height,0,ct.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je,0,0,ct.width,ct.height,ze,Be,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je,Se,ct.width,ct.height,0,ze,Be,ct.data)}}}else{if(Ke=C.mipmaps,Re&&Ye){Ke.length>0&&Xe++;let Le=Ue(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,Se,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(V){Re?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,me[Le].width,me[Le].height,ze,Be,me[Le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,me[Le].width,me[Le].height,0,ze,Be,me[Le].data);for(let je=0;je<Ke.length;je++){let At=Ke[je].image[Le].image;Re?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je+1,0,0,At.width,At.height,ze,Be,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je+1,Se,At.width,At.height,0,ze,Be,At.data)}}else{Re?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ze,Be,me[Le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,ze,Be,me[Le]);for(let je=0;je<Ke.length;je++){let ct=Ke[je];Re?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je+1,0,0,ze,Be,ct.image[Le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je+1,Se,ze,Be,ct.image[Le])}}}w(C)&&C.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),_e.__version=ge.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ee(O,C,j,Ce,ge,_e){let Ie=r.convert(j.format,j.colorSpace),ue=r.convert(j.type),he=M(j.internalFormat,Ie,ue,j.normalized,j.colorSpace),Pe=i.get(C),V=i.get(j);if(V.__renderTarget=C,!Pe.__hasExternalTextures){let me=Math.max(1,C.width>>_e),ce=Math.max(1,C.height>>_e);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,_e,he,me,ce,C.depth,0,Ie,ue,null):t.texImage2D(ge,_e,he,me,ce,0,Ie,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),fe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,ge,V.__webglTexture,0,Ve(C)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ce,ge,V.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(O,C,j){if(n.bindRenderbuffer(n.RENDERBUFFER,O),C.depthBuffer){let Ce=C.depthTexture,ge=Ce&&Ce.isDepthTexture?Ce.type:null,_e=_(C.stencilBuffer,ge),Ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(C),_e,C.width,C.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(C),_e,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,_e,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,O)}else{let Ce=C.textures;for(let ge=0;ge<Ce.length;ge++){let _e=Ce[ge],Ie=r.convert(_e.format,_e.colorSpace),ue=r.convert(_e.type),he=M(_e.internalFormat,Ie,ue,_e.normalized,_e.colorSpace);fe(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(C),he,C.width,C.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(C),he,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,he,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(O,C,j){let Ce=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ge=i.get(C.depthTexture);ge.__renderTarget=C;let _e=Ce?C.depthTexture.image[0]:C.depthTexture.image;(!ge.__webglTexture||_e.width!==C.width||_e.height!==C.height)&&(_e.width=C.width,_e.height=C.height,C.depthTexture.needsUpdate=!0),Ce?re(C.depthTexture,0):oe(C.depthTexture,0);let Ie=ge.__webglTexture,ue=Ve(C),he=Ce?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,Pe=C.depthTexture.format===es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(C.depthTexture.format===Ki)fe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,he,Ie,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,he,Ie,0);else if(C.depthTexture.format===es)fe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,he,Ie,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,he,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xe(O){let C=i.get(O),j=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){let Ce=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Ce){let ge=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Ce.removeEventListener("dispose",ge)};Ce.addEventListener("dispose",ge),C.__depthDisposeCallback=ge}C.__boundDepthTexture=Ce}if(O.depthTexture&&!C.__autoAllocateDepthBuffer)if(j)for(let Ce=0;Ce<6;Ce++)se(C.__webglFramebuffer[Ce],O,Ce);else O.texture.mipmaps.length>0?se(C.__webglFramebuffer[0],O,0):se(C.__webglFramebuffer,O,0);else if(j){C.__webglDepthbuffer=[];for(let Ce=0;Ce<6;Ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[Ce]),C.__webglDepthbuffer[Ce]===void 0)C.__webglDepthbuffer[Ce]=n.createRenderbuffer(),pe(C.__webglDepthbuffer[Ce],O,!1);else{let ge=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=C.__webglDepthbuffer[Ce];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,_e)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),pe(C.__webglDepthbuffer,O,!1);else{let ge=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(O,C,j){let Ce=i.get(O);C!==void 0&&ee(Ce.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&xe(O)}function Ge(O){let C=O.texture,j=i.get(O),Ce=i.get(C);O.addEventListener("dispose",A),P(O);let ge=O.textures,_e=O.isWebGLCubeRenderTarget===!0,Ie=ge.length>1;if(Ie||(Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture()),Ce.__version=C.version,o.memory.textures++),_e){j.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(C.mipmaps.length>0){j.__webglFramebuffer[ue]=[];for(let he=0;he<C.mipmaps.length;he++)j.__webglFramebuffer[ue][he]=n.createFramebuffer()}else j.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(C.mipmaps.length>0){j.__webglFramebuffer=[];for(let ue=0;ue<C.mipmaps.length;ue++)j.__webglFramebuffer[ue]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let ue=0,he=ge.length;ue<he;ue++){let Pe=i.get(ge[ue]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&fe(O)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ue=0;ue<ge.length;ue++){let he=ge[ue];j.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[ue]);let Pe=r.convert(he.format,he.colorSpace),V=r.convert(he.type),me=M(he.internalFormat,Pe,V,he.normalized,he.colorSpace,O.isXRRenderTarget===!0),ce=Ve(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,me,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,j.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(j.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,Ce.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,C);for(let ue=0;ue<6;ue++)if(C.mipmaps.length>0)for(let he=0;he<C.mipmaps.length;he++)ee(j.__webglFramebuffer[ue][he],O,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else ee(j.__webglFramebuffer[ue],O,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);w(C)?b(n.TEXTURE_CUBE_MAP):C.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),t.unbindTexture()}else if(Ie){for(let ue=0,he=ge.length;ue<he;ue++){let Pe=ge[ue],V=i.get(Pe),me=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(me=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,V.__webglTexture),Ae(me,Pe),ee(j.__webglFramebuffer,O,Pe,n.COLOR_ATTACHMENT0+ue,me,0),w(Pe)&&b(me)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ue=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ce.__webglTexture),Ae(ue,C),C.mipmaps.length>0)for(let he=0;he<C.mipmaps.length;he++)ee(j.__webglFramebuffer[he],O,C,n.COLOR_ATTACHMENT0,ue,he);else ee(j.__webglFramebuffer,O,C,n.COLOR_ATTACHMENT0,ue,0);w(C)?b(ue):C.mipmaps.length>0&&n.texParameteri(ue,n.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&xe(O)}function G(O){let C=O.textures;for(let j=0,Ce=C.length;j<Ce;j++){let ge=C[j];if(w(ge)&&ge.mipmapsAutoUpdate===!0){let _e=S(O),Ie=i.get(ge).__webglTexture;t.bindTexture(_e,Ie),b(_e),t.unbindTexture()}}}let ve=[];function Fe(O){if(O.samples>0){if(fe(O)===!1){let C=O.textures,j=O.width,Ce=O.height,ge=n.COLOR_BUFFER_BIT,_e=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(O),ue=C.length>1;if(ue)for(let Pe=0;Pe<C.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Pe=0;Pe<C.length;Pe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Pe]);let V=i.get(C[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,V,0)}n.blitFramebuffer(0,0,j,Ce,0,0,j,Ce,ge,n.NEAREST),l===!0&&(ve.length=0,ve.push(n.COLOR_ATTACHMENT0+Pe),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&ve.push(_e),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Pe=0;Pe<C.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Pe]);let V=i.get(C[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,V,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let C=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function Ve(O){return Math.min(s.maxSamples,O.samples)}function fe(O){let C=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function tt(O){let C=o.render.frame;h.get(O)!==C&&(h.set(O,C),O.update())}function ke(O,C){let j=O.colorSpace,Ce=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==qo&&j!==ts&&(bt.getTransfer(j)===Rt?(Ce!==Wn||ge!==Vn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",j)),C}function Ue(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=be,this.resetTextureUnits=J,this.getTextureUnits=U,this.setTextureUnits=le,this.setTexture2D=oe,this.setTexture2DArray=we,this.setTexture3D=de,this.setTextureCube=re,this.rebindTextures=Ne,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=fe,this.dispose=N}function _w(n,e){function t(i,s=ts){let r,o=bt.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dd)return n.BYTE;if(i===Nd)return n.SHORT;if(i===oo)return n.UNSIGNED_SHORT;if(i===Oc)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===hi)return n.HALF_FLOAT;if(i===Fd)return n.ALPHA;if(i===kd)return n.RGB;if(i===Wn)return n.RGBA;if(i===Ki)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===kc)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Ss)return n.RG;if(i===zc)return n.RG_INTEGER;if(i===Hc)return n.RGBA_INTEGER;if(i===Ra||i===Ca||i===Pa||i===Ia)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gc||i===Vc||i===Wc||i===Xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===qc||i===$c||i===Zc||i===Kc||i===La||i===Jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yc||i===qc)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$c)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zc)return r.COMPRESSED_R11_EAC;if(i===Kc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===La)return r.COMPRESSED_RG11_EAC;if(i===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jc||i===Qc||i===eh||i===th||i===nh||i===ih||i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===hh||i===uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===th)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ah)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ch)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dh||i===fh||i===ph)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dh)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===gh||i===Da||i===xh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===mh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bw=`
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

}`,pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bn({vertexShader:yw,fragmentShader:bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mf=class extends _i{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new pf,x={},v=t.getContextAttributes(),w=null,b=null,S=[],M=[],_=new He,y=null,P=null,R=new un;R.viewport=new Bt;let I=new un;I.viewport=new Bt;let A=[R,I],L=new Pc,E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let oe=S[H];return oe===void 0&&(oe=new Yr,S[H]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(H){let oe=S[H];return oe===void 0&&(oe=new Yr,S[H]=oe),oe.getGripSpace()},this.getHand=function(H){let oe=S[H];return oe===void 0&&(oe=new Yr,S[H]=oe),oe.getHandSpace()};function k(H){let oe=M.indexOf(H.inputSource);if(oe===-1)return;let we=S[oe];we!==void 0&&(we.update(H.inputSource,H.frame,c||o),we.dispatchEvent({type:H.type,data:H.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",te);for(let H=0;H<S.length;H++){let oe=M[H];oe!==null&&(M[H]=null,S[H].disconnect(oe))}E=null,N=null,m.reset();for(let H in x)delete x[H];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,b=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(_.width,_.height,!1),P!==null){let H=P.camera;H.fov=P.fov,H.zoom=P.zoom,H.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(_),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,de=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=v.stencil?es:Ki,de=v.stencil?cr:ci);let Oe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Hn(u.textureWidth,u.textureHeight,{format:Wn,type:Vn,depthTexture:new ji(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Hn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(H){for(let oe=0;oe<H.removed.length;oe++){let we=H.removed[oe],de=M.indexOf(we);de>=0&&(M[de]=null,S[de].disconnect(we))}for(let oe=0;oe<H.added.length;oe++){let we=H.added[oe],de=M.indexOf(we);if(de===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=M.length){M.push(we),de=Oe;break}else if(M[Oe]===null){M[Oe]=we,de=Oe;break}if(de===-1)break}let re=S[de];re&&re.connect(we)}}function Y(H,oe){oe===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(oe.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let oe=H.near,we=H.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(we=m.depthFar)),L.near=I.near=R.near=oe,L.far=I.far=R.far=we,(E!==L.near||N!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),E=L.near,N=L.far),L.layers.mask=H.layers.mask|6,R.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;let de=H.parent,re=L.cameras;Y(L,de);for(let Oe=0;Oe<re.length;Oe++)Y(re[Oe],de);L.projectionMatrix.copy(R.projectionMatrix),L.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&H.isPerspectiveCamera&&(P={camera:H,fov:H.fov,zoom:H.zoom}),J(H,L,de)};function J(H,oe,we){we===null?H.matrix.copy(oe.matrixWorld):(H.matrix.copy(we.matrixWorld),H.matrix.invert(),H.matrix.multiply(oe.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(oe.projectionMatrix),H.projectionMatrixInverse.copy(oe.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Wr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(H){return x[H]};let U=null;function le(H,oe){if(h=oe.getViewerPose(c||o),p=oe,h!==null){let we=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let de=!1;we.length!==L.cameras.length&&(L.cameras.length=0,de=!0);for(let Me=0;Me<we.length;Me++){let Ae=we[Me],Te=null;if(f!==null)Te=f.getViewport(Ae);else{let $=d.getViewSubImage(u,Ae);Te=$.viewport,Me===0&&(e.setRenderTargetTextures(b,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(b))}let F=A[Me];F===void 0&&(F=new un,F.layers.enable(Me),F.viewport=new Bt,A[Me]=F),F.matrix.fromArray(Ae.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Ae.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Te.x,Te.y,Te.width,Te.height),Me===0&&(L.matrix.copy(F.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),de===!0&&L.cameras.push(F)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Me=d.getDepthInformation(we[0]);Me&&Me.isValid&&Me.texture&&m.init(Me,s.renderState)}if(re&&re.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Me=0;Me<we.length;Me++){let Ae=we[Me].camera;if(Ae){let Te=x[Ae];Te||(Te=new ha,x[Ae]=Te);let F=d.getCameraImage(Ae);Te.sourceTexture=F}}}}for(let we=0;we<S.length;we++){let de=M[we],re=S[we];de!==null&&re!==void 0&&re.update(de,oe,c||o)}U&&U(H,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),p=null}let be=new Wm;be.setAnimationLoop(le),this.setAnimationLoop=function(H){U=H},this.dispose=function(){}}},Mw=new pt,eg=new ot;eg.set(-1,0,0,0,1,0,0,0,1);function Sw(n,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,Kd(n)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,v,w,b){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),d(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),u(m,x),x.isMeshPhysicalMaterial&&f(m,x,b)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,v,w):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===jt&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===jt&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let v=e.get(x),w=v.envMap,b=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Mw.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eg),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,v,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*v,m.scale.value=w*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function d(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function u(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,v){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jt&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let v=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ww(n,e,t,i){let s={},r={};function o(v,w){let b=w.program;i.uniformBlockBinding(v,b,s[v.id])}function a(v,w){let b=s[v.id];b===void 0&&(p(v),b=l(v),s[v.id]=b,v.addEventListener("dispose",m));let S=w.program;i.updateUBOMapping(v,S);let M=e.render.frame;r[v.id]!==M&&(c(v),r[v.id]=M)}function l(v){let w=n.createBuffer(),b=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,b,S),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],b=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let M=0,_=b.length;M<_;M++){let y=b[M];if(Array.isArray(y))for(let P=0,R=y.length;P<R;P++)h(y[P],M,P,S);else h(y,M,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,w,b,S){if(u(v,w,b,S)===!0){let M=v.__offset,_=v.value;if(Array.isArray(_)){let y=0;for(let P=0;P<_.length;P++){let R=_[P],I=g(R,!0);d(R,v.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,v.__data)}}function d(v,w,b){typeof v=="number"||typeof v=="boolean"?w[b]=v:v.isMatrix3?(w[b]=v.elements[0],w[b+1]=v.elements[1],w[b+2]=v.elements[2],w[b+3]=0,w[b+4]=v.elements[3],w[b+5]=v.elements[4],w[b+6]=v.elements[5],w[b+7]=0,w[b+8]=v.elements[6],w[b+9]=v.elements[7],w[b+10]=v.elements[8],w[b+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-b),b):v.toArray(w,b)}function u(v,w,b,S){let M=v.value,_=w+"_"+b;if(Array.isArray(M)){S[_]===void 0&&(S[_]=[]);let y=S[_],P=!1;for(let R=0;R<M.length;R++)f(M[R],y,R)===!0&&(P=!0);return P}return f(M,S,_)}function f(v,w,b){if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{let S=w[b];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function p(v){let w=v.uniforms,b=0,S=16;for(let _=0,y=w.length;_<y;_++){let P=Array.isArray(w[_])?w[_]:[w[_]];for(let R=0,I=P.length;R<I;R++){let A=P[R],L=Array.isArray(A.value)?A.value:[A.value],E=Array.isArray(w[_])||Array.isArray(A.value),N=b;for(let W=0,te=L.length;W<te;W++){let Y=L[W],J=g(Y,E),U=b%S,le=U%J.boundary,be=U+le;b+=le,be!==0&&S-be<J.storage&&(b+=S-be),W===0&&(N=b),b+=J.storage}let k=A.type==="int"?Int32Array:A.type==="uint"?Uint32Array:Float32Array;A.__data=new k((b-N)/Float32Array.BYTES_PER_ELEMENT),A.__offset=N}}let M=b%S;return M>0&&(b+=S-M),v.__size=b,v.__cache={},this}function g(v,w){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):st("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(v){let w=v.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function x(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:x}}var Tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Ew(){return Si===null&&(Si=new Qs(Tw,16,16,Ss,hi),Si.name="DFG_LUT",Si.minFilter=an,Si.magFilter=an,Si.wrapS=vi,Si.wrapT=vi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var Sh=class{constructor(e={}){let{canvas:t=hm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Vn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=f,m=new Set([Hc,zc,Bc]),x=new Set([Vn,ci,oo,cr,Uc,Fc]),v=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},S=null,M=null,_=[],y=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,A=null,L=null,E=null,N=null;this._outputColorSpace=Jt;let k=0,W=0,te=null,Y=-1,J=null,U=new Bt,le=new Bt,be=null,H=new Je(0),oe=0,we=t.width,de=t.height,re=1,Oe=null,De=null,Me=new Bt(0,0,we,de),Ae=new Bt(0,0,we,de),Te=!1,F=new er,$=new ac,ne=!1,ae=!1,ee=new pt,pe=new z,se=new Bt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Ge(){return te===null?re:1}let G=i;function ve(T,B){return t.getContext(T,B)}let Fe,Ve,fe,tt,ke,Ue,O,C,j,Ce,ge,_e,Ie,ue,he,Pe,V,me,ce,ze,Be,Se,Re;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Le,!1),G===null){let B="webgl2";if(G=ve(B,T),G===null)throw ve(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(T){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),rt("WebGLRenderer: "+T.message),T}function Ye(){Fe=new FM(G),Fe.init(),Be=new _w(G,Fe),Ve=new EM(G,Fe,e,Be),fe=new xw(G,Fe),Ve.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),L=G.createFramebuffer(),E=G.createFramebuffer(),N=G.createFramebuffer(),tt=new zM(G),ke=new iw,Ue=new vw(G,Fe,fe,ke,Ve,Be,tt),O=new UM(R),C=new Gy(G),Se=new wM(G,C),j=new kM(G,C,tt,Se),Ce=new GM(G,j,C,Se,tt),me=new HM(G,Ve,Ue),he=new AM(ke),ge=new nw(R,O,Fe,Ve,Se,he),_e=new Sw(R,ke),Ie=new rw,ue=new uw(Fe),V=new SM(R,O,fe,Ce,p,l),Pe=new gw(R,Ce,Ve),Re=new ww(G,tt,Ve,fe),ce=new TM(G,Fe,tt),ze=new BM(G,Fe,tt),tt.programs=ge.programs,R.capabilities=Ve,R.extensions=Fe,R.properties=ke,R.renderLists=Ie,R.shadowMap=Pe,R.state=fe,R.info=tt}g!==Vn&&(P=new WM(g,t.width,t.height,a,s,r));let ye=new mf(R,G);this.xr=ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(we,de,!1))},this.getSize=function(T){return T.set(we,de)},this.setSize=function(T,B,ie=!0){if(ye.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}we=T,de=B,t.width=Math.floor(T*re),t.height=Math.floor(B*re),ie===!0&&(t.style.width=T+"px",t.style.height=B+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(we*re,de*re).floor()},this.setDrawingBufferSize=function(T,B,ie){we=T,de=B,re=ie,t.width=Math.floor(T*ie),t.height=Math.floor(B*ie),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(g===Vn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,B,ie,Z){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,B,ie,Z),fe.viewport(U.copy(Me).multiplyScalar(Ge()).round())},this.getScissor=function(T){return T.copy(Ae)},this.setScissor=function(T,B,ie,Z){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,B,ie,Z),fe.scissor(le.copy(Ae).multiplyScalar(Ge()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(T){fe.setScissorTest(Te=T)},this.setOpaqueSort=function(T){Oe=T},this.setTransparentSort=function(T){De=T},this.getClearColor=function(T){return T.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,ie=!0){let Z=0;if(T){let Q=!1;if(te!==null){let Ee=te.texture.format;Q=m.has(Ee)}if(Q){let Ee=te.texture.type,Ze=x.has(Ee),We=V.getClearColor(),qe=V.getClearAlpha(),nt=We.r,lt=We.g,it=We.b;Ze?(v[0]=nt,v[1]=lt,v[2]=it,v[3]=qe,G.clearBufferuiv(G.COLOR,0,v)):(w[0]=nt,w[1]=lt,w[2]=it,w[3]=qe,G.clearBufferiv(G.COLOR,0,w))}else Z|=G.COLOR_BUFFER_BIT}B&&(Z|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),A=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),V.dispose(),Ie.dispose(),ue.dispose(),Ue.dispose(),ke.dispose(),O.dispose(),Ce.dispose(),j.dispose(),Se.dispose(),Re.dispose(),ge.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Kt),ye.removeEventListener("sessionend",Pt),mn.stop()};function Xe(T){T.preventDefault(),Jo("WebGLRenderer: Context Lost."),I=!0}function Ke(){Jo("WebGLRenderer: Context Restored."),I=!1;let T=tt.autoReset,B=Pe.enabled,ie=Pe.autoUpdate,Z=Pe.needsUpdate,Q=Pe.type;Ye(),tt.autoReset=T,Pe.enabled=B,Pe.autoUpdate=ie,Pe.needsUpdate=Z,Pe.type=Q}function Le(T){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function je(T){let B=T.target;B.removeEventListener("dispose",je),ct(B)}function ct(T){At(T),ke.remove(T)}function At(T){let B=ke.get(T).programs;B!==void 0&&(B.forEach(function(ie){ge.releaseProgram(ie)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,ie,Z,Q,Ee){B===null&&(B=xe);let Ze=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,We=Ou(T,B,ie,Z,Q);fe.setMaterial(Z,Ze);let qe=ie.index,nt=1;if(Z.wireframe===!0){if(qe=j.getWireframeAttribute(ie),qe===void 0)return;nt=2}let lt=ie.drawRange,it=ie.attributes.position,Qe=lt.start*nt,yt=(lt.start+lt.count)*nt;Ee!==null&&(Qe=Math.max(Qe,Ee.start*nt),yt=Math.min(yt,(Ee.start+Ee.count)*nt)),qe!==null?(Qe=Math.max(Qe,0),yt=Math.min(yt,qe.count)):it!=null&&(Qe=Math.max(Qe,0),yt=Math.min(yt,it.count));let qt=yt-Qe;if(qt<0||qt===1/0)return;Se.setup(Q,Z,We,ie,qe);let Nt,Lt=ce;if(qe!==null&&(Nt=C.get(qe),Lt=ze,Lt.setIndex(Nt)),Q.isMesh)Z.wireframe===!0?(fe.setLineWidth(Z.wireframeLinewidth*Ge()),Lt.setMode(G.LINES)):Lt.setMode(G.TRIANGLES);else if(Q.isLine){let gn=Z.linewidth;gn===void 0&&(gn=1),fe.setLineWidth(gn*Ge()),Q.isLineSegments?Lt.setMode(G.LINES):Q.isLineLoop?Lt.setMode(G.LINE_LOOP):Lt.setMode(G.LINE_STRIP)}else Q.isPoints?Lt.setMode(G.POINTS):Q.isSprite&&Lt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let gn=Q._multiDrawStarts,et=Q._multiDrawCounts,An=Q._multiDrawCount,Tt=qe?C.get(qe).bytesPerElement:1,Xs=ke.get(Z).currentProgram.getUniforms();for(let xn=0;xn<An;xn++)Xs.setValue(G,"_gl_DrawID",xn),Lt.render(gn[xn]/Tt,et[xn])}else if(Q.isInstancedMesh)Lt.renderInstances(Qe,qt,Q.count);else if(ie.isInstancedBufferGeometry){let gn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,et=Math.min(ie.instanceCount,gn);Lt.renderInstances(Qe,qt,et)}else Lt.render(Qe,qt)};function Dt(T,B,ie,Z){A!==null&&T.isNodeMaterial&&A.setObject(Z,T),ne===!0&&he.setState(T,ie,!1),T.transparent===!0&&T.side===Mn&&T.forceSinglePass===!1?(T.side=jt,T.needsUpdate=!0,gi(T,B,Z),T.side=Ms,T.needsUpdate=!0,gi(T,B,Z),T.side=Mn):gi(T,B,Z)}this.compile=function(T,B,ie=null){ie===null&&(ie=T),A!==null&&A.renderStart(T,B,ie),M=ue.get(ie),M.init(B),y.push(M),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(B.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),T!==ie&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(B.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),M.setupLights(),A!==null&&A.updateLights(M.state.lightsArray),ae=this.localClippingEnabled,ne=he.init(this.clippingPlanes,ae),ne===!0&&he.setGlobalState(this.clippingPlanes,B),A!==null&&Pe.render(M.state.shadowsArray,ie,B);let Z=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ee=Q.material;if(Ee)if(Array.isArray(Ee))for(let Ze=0;Ze<Ee.length;Ze++){let We=Ee[Ze];Dt(We,ie,B,Q),Z.add(We)}else Dt(Ee,ie,B,Q),Z.add(Ee)}),M=y.pop(),A!==null&&A.renderEnd(),Z},this.compileAsync=function(T,B,ie=null){let Z=this.compile(T,B,ie);return new Promise(Q=>{function Ee(){if(Z.forEach(function(Ze){let qe=ke.get(Ze).currentProgram;(qe===void 0||qe.isReady())&&Z.delete(Ze)}),Z.size===0){Q(T);return}setTimeout(Ee,10)}Fe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let It=null;function cn(T){It&&It(T)}function Kt(){mn.stop()}function Pt(){mn.start()}let mn=new Wm;mn.setAnimationLoop(cn),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(T){It=T,ye.setAnimationLoop(T),T===null?mn.stop():mn.start()},ye.addEventListener("sessionstart",Kt),ye.addEventListener("sessionend",Pt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;A!==null&&A.renderStart(T,B);let ie=ye.enabled===!0&&ye.isPresenting===!0,Z=P!==null&&(te===null||ie)&&P.begin(R,te);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(B),B=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,B,te),M=ue.get(T,y.length),M.init(B),M.state.textureUnits=Ue.getTextureUnits(),y.push(M),ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?$.setFromArrayCamera(B):F.setFromProjectionMatrix(ee,Zn,B.reversedDepth),ae=this.localClippingEnabled,ne=he.init(this.clippingPlanes,ae),S=Ie.get(T,_.length),S.init(),_.push(S),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let Ze=R.xr.getDepthSensingMesh();Ze!==null&&ht(Ze,B,-1/0,R.sortObjects)}ht(T,B,0,R.sortObjects),S.finish(),A!==null&&A.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(Oe,De),Ne=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ne&&V.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),ne===!0&&he.beginShadows();let Q=M.state.shadowsArray;if(Pe.render(Q,T,B),ne===!0&&he.endShadows(),(Z&&P.hasRenderPass())===!1){let Ze=S.opaque,We=S.transmissive;if(M.setupLights(),B.isArrayCamera){let qe=B.cameras;if(We.length>0)for(let nt=0,lt=qe.length;nt<lt;nt++){let it=qe[nt];zi(Ze,We,T,it)}Ne&&V.render(T);for(let nt=0,lt=qe.length;nt<lt;nt++){let it=qe[nt];ii(S,T,it,it.viewport)}}else We.length>0&&zi(Ze,We,T,B),Ne&&V.render(T),ii(S,T,B)}te!==null&&W===0&&(Ue.updateMultisampleRenderTarget(te),Ue.updateRenderTargetMipmap(te)),Z&&P.end(R),T.isScene===!0&&T.onAfterRender(R,T,B),Se.resetDefaultState(),Y=-1,J=null,y.pop(),y.length>0?(M=y[y.length-1],Ue.setTextureUnits(M.state.textureUnits),ne===!0&&he.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,A!==null&&A.renderEnd()};function ht(T,B,ie,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)ie=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){let Ze=B.isArrayCamera?$:F;if(!T.frustumCulled||T.intersectsFrustum(Ze)){Z&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);let We=Ce.update(T),qe=T.material;qe.visible&&S.push(T,We,qe,ie,se.z,null,B)}}else if(T.isMesh||T.isLine||T.isPoints){let Ze=B.isArrayCamera?$:F;if(!T.frustumCulled||T.intersectsFrustum(Ze)){let We=Ce.update(T),qe=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),se.copy(T.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),se.copy(We.boundingSphere.center)),se.applyMatrix4(T.matrixWorld).applyMatrix4(ee)),Array.isArray(qe)){let nt=We.groups;for(let lt=0,it=nt.length;lt<it;lt++){let Qe=nt[lt],yt=qe[Qe.materialIndex];yt&&yt.visible&&S.push(T,We,yt,ie,se.z,Qe,B)}}else qe.visible&&S.push(T,We,qe,ie,se.z,null,B)}}}let Ee=T.children;for(let Ze=0,We=Ee.length;Ze<We;Ze++)ht(Ee[Ze],B,ie,Z)}function ii(T,B,ie,Z){let{opaque:Q,transmissive:Ee,transparent:Ze}=T;M.setupLightsView(ie),ne===!0&&he.setGlobalState(R.clippingPlanes,ie),Z&&fe.viewport(U.copy(Z)),Q.length>0&&Hi(Q,B,ie),Ee.length>0&&Hi(Ee,B,ie),Ze.length>0&&Hi(Ze,B,ie),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function zi(T,B,ie,Z){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Z.id]===void 0){let Qe=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Z.id]=new Hn(1,1,{generateMipmaps:!0,type:Qe?hi:Vn,minFilter:Qi,samples:Math.max(4,Ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let Ee=M.state.transmissionRenderTarget[Z.id],Ze=Z.viewport||U;Ee.setSize(Ze.z*R.transmissionResolutionScale,Ze.w*R.transmissionResolutionScale);let We=R.getRenderTarget(),qe=R.getActiveCubeFace(),nt=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(H),oe=R.getClearAlpha(),oe<1&&R.setClearColor(16777215,.5),R.clear(),Ne&&V.render(ie);let lt=R.toneMapping;R.toneMapping=Mi;let it=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),M.setupLightsView(Z),ne===!0&&he.setGlobalState(R.clippingPlanes,Z),Hi(T,ie,Z),Ue.updateMultisampleRenderTarget(Ee),Ue.updateRenderTargetMipmap(Ee),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let yt=0,qt=B.length;yt<qt;yt++){let Nt=B[yt],{object:Lt,geometry:gn,material:et,group:An}=Nt;if(et.side===Mn&&Lt.layers.test(Z.layers)){let Tt=et.side;et.side=jt,et.needsUpdate=!0,Ws(Lt,ie,Z,gn,et,An),et.side=Tt,et.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ue.updateMultisampleRenderTarget(Ee),Ue.updateRenderTargetMipmap(Ee))}R.setRenderTarget(We,qe,nt),R.setClearColor(H,oe),it!==void 0&&(Z.viewport=it),R.toneMapping=lt}function Hi(T,B,ie){let Z=B.isScene===!0?B.overrideMaterial:null;for(let Q=0,Ee=T.length;Q<Ee;Q++){let Ze=T[Q],{object:We,geometry:qe,group:nt}=Ze,lt=Ze.material;lt.allowOverride===!0&&Z!==null&&(lt=Z),We.layers.test(ie.layers)&&Ws(We,B,ie,qe,lt,nt)}}function Ws(T,B,ie,Z,Q,Ee){A!==null&&Q.isNodeMaterial&&A.setObject(T,Q),T.onBeforeRender(R,B,ie,Z,Q,Ee),T.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(R,B,ie,Z,T,Ee),Q.transparent===!0&&Q.side===Mn&&Q.forceSinglePass===!1?(Q.side=jt,Q.needsUpdate=!0,R.renderBufferDirect(ie,B,Z,Q,T,Ee),Q.side=Ms,Q.needsUpdate=!0,R.renderBufferDirect(ie,B,Z,Q,T,Ee),Q.side=Mn):R.renderBufferDirect(ie,B,Z,Q,T,Ee),T.onAfterRender(R,B,ie,Z,Q,Ee)}function mi(T){let B=0;for(let ie of T)ie.texture!==null&&B++;return B}function gi(T,B,ie){B.isScene!==!0&&(B=xe);let Z=ke.get(T),Q=M.state.lights,Ee=M.state.shadowsArray,Ze=Q.state.version,We=ge.getParameters(T,Q.state,Ee,B,ie,M.state.lightProbeGridArray),qe=ge.getProgramCacheKey(We),nt=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,Z.fog=B.fog;let lt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=O.get(T.envMap||Z.environment,lt),Z.envMapRotation=Z.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,nt===void 0&&(T.addEventListener("dispose",je),nt=new Map,Z.programs=nt,Z.programVariants=new Map);let it=nt.get(qe);if(it!==void 0){if(Z.currentProgram===it&&Z.lightsStateVersion===Ze)return pl(T,We),it}else We.uniforms=ge.getUniforms(T),A!==null&&T.isNodeMaterial&&A.build(T,ie,We),T.onBeforeCompile(We,R),it=ge.acquireProgram(We,qe),nt.set(qe,it),Z.uniforms=We.uniforms;let Qe=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Qe.clippingPlanes=he.uniform),pl(T,We),Z.needsLights=Fu(T),Z.lightsStateVersion=Ze,Z.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.sunLights.value=Q.state.sun,Qe.sunLightShadows.value=Q.state.sunShadow,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.sunShadowMatrix.value=Q.state.sunShadowMatrix,Qe.sunShadowCascade.value=Q.state.sunShadowCascade,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.numLightProbeGrids=mi(M.state.lightProbeGridArray),Z.currentProgram=it,Z.uniformsList=null,it}function Nu(T,B,ie,Z,Q){let Ee=ke.get(T),Ze=Ee.currentProgram.id+","+Z+","+Q,We=Ee.programVariants.get(Ze);return We===void 0?(We=gi(T,B,ie),Ee.programVariants.set(Ze,We)):(Ee.currentProgram=We,Ee.uniformsList=null,Ee.outputColorSpace=Z,Ee.toneMapping=Q),We}function fl(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=lo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function pl(T,B){let ie=ke.get(T);ie.outputColorSpace=B.outputColorSpace,ie.batching=B.batching,ie.batchingColor=B.batchingColor,ie.instancing=B.instancing,ie.instancingColor=B.instancingColor,ie.instancingMorph=B.instancingMorph,ie.skinning=B.skinning,ie.morphTargets=B.morphTargets,ie.morphNormals=B.morphNormals,ie.morphColors=B.morphColors,ie.morphTargetsCount=B.morphTargetsCount,ie.numClippingPlanes=B.numClippingPlanes,ie.numIntersection=B.numClipIntersection,ie.vertexAlphas=B.vertexAlphas,ie.vertexTangents=B.vertexTangents,ie.toneMapping=B.toneMapping}function Ou(T,B,ie,Z,Q){B.isScene!==!0&&(B=xe),Ue.resetTextureUnits();let Ee=B.fog,Ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?B.environment:null,We=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:bt.workingColorSpace,qe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,nt=O.get(Z.envMap||Ze,qe),lt=Z.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,it=!!ie.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Qe=!!ie.morphAttributes.position,yt=!!ie.morphAttributes.normal,qt=!!ie.morphAttributes.color,Nt=Mi;Z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let Lt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,gn=Lt!==void 0?Lt.length:0,et=ke.get(Z),An=M.state.lights;if(ne===!0&&(ae===!0||T!==J)){let Ft=T===J&&Z.id===Y;he.setState(Z,T,Ft)}let Tt=!1,Xs=!1;Z.version===et.__version?et.needsLights&&et.lightsStateVersion!==An.state.version||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isBatchedMesh&&et.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&et.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==nt||Z.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==he.numPlanes||et.numIntersection!==he.numIntersection)||et.vertexAlphas!==lt||et.vertexTangents!==it||et.morphTargets!==Qe||et.morphNormals!==yt||et.morphColors!==qt||et.morphTargetsCount!==gn||et.numLightProbeGrids!==mi(M.state.lightProbeGridArray)?Tt=!0:(et.outputColorSpace!==We||et.toneMapping!==Nt)&&(Xs=!0):(Tt=!0,et.__version=Z.version);let xn=et.currentProgram;(Tt===!0||Xs===!0)&&(xn=Xs===!0?Nu(Z,B,Q,We,Nt):gi(Z,B,Q),A&&Z.isNodeMaterial&&A.onUpdateProgram(Z,xn,et));let ml=!1,ds=!1,Ys=!1,wt=xn.getUniforms(),hn=et.uniforms;if(fe.useProgram(xn.program)&&(ml=!0,ds=!0,Ys=!0),Z.id!==Y&&(Y=Z.id,ds=!0),ml||J!==T){fe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),wt.setValue(G,"projectionMatrix",T.projectionMatrix),wt.setValue(G,"viewMatrix",T.matrixWorldInverse);let sn=wt.map.cameraPosition;sn!==void 0&&sn.setValue(G,pe.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&wt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&wt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,ds=!0,Ys=!0)}if(et.needsLights&&(An.state.sunShadowMap.length>0&&wt.setValue(G,"sunShadowMap",An.state.sunShadowMap,Ue),An.state.directionalShadowMap.length>0&&wt.setValue(G,"directionalShadowMap",An.state.directionalShadowMap,Ue),An.state.spotShadowMap.length>0&&wt.setValue(G,"spotShadowMap",An.state.spotShadowMap,Ue),An.state.pointShadowMap.length>0&&wt.setValue(G,"pointShadowMap",An.state.pointShadowMap,Ue)),Q.isSkinnedMesh){wt.setOptional(G,Q,"bindMatrix"),wt.setOptional(G,Q,"bindMatrixInverse");let Ft=Q.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),wt.setValue(G,"boneTexture",Ft.boneTexture,Ue))}Q.isBatchedMesh&&(wt.setOptional(G,Q,"batchingTexture"),wt.setValue(G,"batchingTexture",Q._matricesTexture,Ue),wt.setOptional(G,Q,"batchingIdTexture"),wt.setValue(G,"batchingIdTexture",Q._indirectTexture,Ue),wt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&wt.setValue(G,"batchingColorTexture",Q._colorsTexture,Ue));let si=ie.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&me.update(Q,ie,xn),(ds||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,wt.setValue(G,"receiveShadow",Q.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&B.environment!==null&&(hn.envMapIntensity.value=B.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=Ew()),ds){if(wt.setValue(G,"toneMappingExposure",R.toneMappingExposure),et.needsLights&&Uu(hn,Ys),Ee&&Z.fog===!0&&_e.refreshFogUniforms(hn,Ee),_e.refreshMaterialUniforms(hn,Z,re,de,M.state.transmissionRenderTarget[T.id]),et.needsLights&&et.numLightProbeGrids>0){let Ft=b,sn=0;for(let Gi of M.state.lightProbeGridArray)Gi.texture!==null&&(Ft.textures[sn]=Gi.texture,Ft.min[sn]=Gi.boundingBox.min,Ft.max[sn]=Gi.boundingBox.max,Ft.resolution[sn]=Gi.resolution,sn++);for(let Gi in Ft)Ft[Gi].length=sn;hn.probesSH.value=Ft.textures,hn.probesMin.value=Ft.min,hn.probesMax.value=Ft.max,hn.probesResolution.value=Ft.resolution}lo.upload(G,fl(et),hn,Ue)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(lo.upload(G,fl(et),hn,Ue),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&wt.setValue(G,"center",Q.center),wt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),wt.setValue(G,"normalMatrix",Q.normalMatrix),wt.setValue(G,"modelMatrix",Q.matrixWorld),Z.uniformsGroups!==void 0){let Ft=Z.uniformsGroups;for(let sn=0,Gi=Ft.length;sn<Gi;sn++){let $p=Ft[sn];Re.update($p,xn),Re.bind($p,xn)}}return xn}function Uu(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Fu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(T,B,ie){let Z=ke.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ke.get(T.texture).__webglTexture=B,ke.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ie,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let ie=ke.get(T);ie.__webglFramebuffer=B,ie.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,ie=0){te=T,k=B,W=ie;let Z=null,Q=!1,Ee=!1;if(T){let We=ke.get(T);if(We.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(G.FRAMEBUFFER,We.__webglFramebuffer),U.copy(T.viewport),le.copy(T.scissor),be=T.scissorTest,fe.viewport(U),fe.scissor(le),fe.setScissorTest(be),Y=-1;return}else if(We.__webglFramebuffer===void 0)Ue.setupRenderTarget(T);else if(We.__hasExternalTextures)Ue.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let lt=T.depthTexture;if(We.__boundDepthTexture!==lt){if(lt!==null&&ke.has(lt)&&(T.width!==lt.image.width||T.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);let nt=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(nt[B])?Z=nt[B][ie]:Z=nt[B],Q=!0):T.samples>0&&Ue.useMultisampledRTT(T)===!1?Z=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(nt)?Z=nt[ie]:Z=nt,U.copy(T.viewport),le.copy(T.scissor),be=T.scissorTest}else U.copy(Me).multiplyScalar(re).floor(),le.copy(Ae).multiplyScalar(re).floor(),be=Te;if(ie!==0&&(Z=L),fe.bindFramebuffer(G.FRAMEBUFFER,Z)&&fe.drawBuffers(T,Z),fe.viewport(U),fe.scissor(le),fe.setScissorTest(be),Q){let We=ke.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,We.__webglTexture,ie)}else if(Ee){let We=B;for(let qe=0;qe<T.textures.length;qe++){let nt=ke.get(T.textures[qe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qe,nt.__webglTexture,ie,We)}}else if(T!==null&&ie!==0){let We=ke.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,We.__webglTexture,ie)}Y=-1};function X(T){let B=ke.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=Ve.textureFormatReadable(T.format),B.__typeReadable=Ve.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,ie,Z,Q,Ee,Ze,We=0){if(!(T&&T.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ze!==void 0&&(qe=qe[Ze],Array.isArray(qe)&&(qe=qe[0])),qe){fe.bindFramebuffer(G.FRAMEBUFFER,qe);try{let nt=T.textures[We],lt=nt.format,it=nt.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+We);let Qe=X(nt);if(Qe.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&ie>=0&&ie<=T.height-Q&&G.readPixels(B,ie,Z,Q,Be.convert(lt),Be.convert(it),Ee)}finally{let nt=te!==null?ke.get(te).__webglFramebuffer:null;fe.bindFramebuffer(G.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(T,B,ie,Z,Q,Ee,Ze,We=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ze!==void 0&&(qe=qe[Ze],Array.isArray(qe)&&(qe=qe[0])),qe)if(B>=0&&B<=T.width-Z&&ie>=0&&ie<=T.height-Q){fe.bindFramebuffer(G.FRAMEBUFFER,qe);let nt=T.textures[We],lt=nt.format,it=nt.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+We);let Qe=X(nt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,yt),G.bufferData(G.PIXEL_PACK_BUFFER,Ee.byteLength,G.STREAM_READ),G.readPixels(B,ie,Z,Q,Be.convert(lt),Be.convert(it),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let qt=te!==null?ke.get(te).__webglFramebuffer:null;fe.bindFramebuffer(G.FRAMEBUFFER,qt);let Nt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await dm(G,Nt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,yt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ee),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(yt),G.deleteSync(Nt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,ie=0){let Z=Math.pow(2,-ie),Q=Math.floor(T.image.width*Z),Ee=Math.floor(T.image.height*Z),Ze=B!==null?B.x:0,We=B!==null?B.y:0;Ue.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,ie,0,0,Ze,We,Q,Ee),fe.unbindTexture()},this.copyTextureToTexture=function(T,B,ie=null,Z=null,Q=0,Ee=0){let Ze,We,qe,nt,lt,it,Qe,yt,qt,Nt=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(ie!==null)Ze=ie.max.x-ie.min.x,We=ie.max.y-ie.min.y,qe=ie.isBox3?ie.max.z-ie.min.z:1,nt=ie.min.x,lt=ie.min.y,it=ie.isBox3?ie.min.z:0;else{let wt=Math.pow(2,-Q);Ze=Math.floor(Nt.width*wt),We=Math.floor(Nt.height*wt),T.isDataArrayTexture?qe=Nt.depth:T.isData3DTexture?qe=Math.floor(Nt.depth*wt):qe=1,nt=0,lt=0,it=0}Z!==null?(Qe=Z.x,yt=Z.y,qt=Z.z):(Qe=0,yt=0,qt=0);let Lt=Be.convert(B.format),gn=Be.convert(B.type),et;B.isData3DTexture?(Ue.setTexture3D(B,0),et=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ue.setTexture2DArray(B,0),et=G.TEXTURE_2D_ARRAY):(Ue.setTexture2D(B,0),et=G.TEXTURE_2D),fe.activeTexture(G.TEXTURE0),fe.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),fe.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),fe.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);let An=fe.getParameter(G.UNPACK_ROW_LENGTH),Tt=fe.getParameter(G.UNPACK_IMAGE_HEIGHT),Xs=fe.getParameter(G.UNPACK_SKIP_PIXELS),xn=fe.getParameter(G.UNPACK_SKIP_ROWS),ml=fe.getParameter(G.UNPACK_SKIP_IMAGES);fe.pixelStorei(G.UNPACK_ROW_LENGTH,Nt.width),fe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Nt.height),fe.pixelStorei(G.UNPACK_SKIP_PIXELS,nt),fe.pixelStorei(G.UNPACK_SKIP_ROWS,lt),fe.pixelStorei(G.UNPACK_SKIP_IMAGES,it);let ds=T.isDataArrayTexture||T.isData3DTexture,Ys=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let wt=ke.get(T),hn=ke.get(B),si=ke.get(wt.__renderTarget),Ft=ke.get(hn.__renderTarget);fe.bindFramebuffer(G.READ_FRAMEBUFFER,si.__webglFramebuffer),fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let sn=0;sn<qe;sn++)ds&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.get(T).__webglTexture,Q,it+sn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.get(B).__webglTexture,Ee,qt+sn)),G.blitFramebuffer(nt,lt,nt+Ze,lt+We,Qe,yt,Qe+Ze,yt+We,G.DEPTH_BUFFER_BIT,G.NEAREST);fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||ke.has(T)){let wt=ke.get(T),hn=ke.get(B);fe.bindFramebuffer(G.READ_FRAMEBUFFER,E),fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,N);for(let si=0;si<qe;si++)ds?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wt.__webglTexture,Q,it+si):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wt.__webglTexture,Q),Ys?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,Ee,qt+si):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,Ee),Q!==0?G.blitFramebuffer(nt,lt,nt+Ze,lt+We,Qe,yt,Qe+Ze,yt+We,G.COLOR_BUFFER_BIT,G.NEAREST):Ys?G.copyTexSubImage3D(et,Ee,Qe,yt,qt+si,nt,lt,Ze,We):G.copyTexSubImage2D(et,Ee,Qe,yt,nt,lt,Ze,We);fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ys?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(et,Ee,Qe,yt,qt,Ze,We,qe,Lt,gn,Nt.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(et,Ee,Qe,yt,qt,Ze,We,qe,Lt,Nt.data):G.texSubImage3D(et,Ee,Qe,yt,qt,Ze,We,qe,Lt,gn,Nt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ee,Qe,yt,Ze,We,Lt,gn,Nt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ee,Qe,yt,Nt.width,Nt.height,Lt,Nt.data):G.texSubImage2D(G.TEXTURE_2D,Ee,Qe,yt,Ze,We,Lt,gn,Nt);fe.pixelStorei(G.UNPACK_ROW_LENGTH,An),fe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tt),fe.pixelStorei(G.UNPACK_SKIP_PIXELS,Xs),fe.pixelStorei(G.UNPACK_SKIP_ROWS,xn),fe.pixelStorei(G.UNPACK_SKIP_IMAGES,ml),Ee===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&G.generateMipmap(et),fe.unbindTexture()},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&Ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ue.setTextureCube(T,0):T.isData3DTexture?Ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ue.setTexture2DArray(T,0):Ue.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){k=0,W=0,te=null,fe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var K={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4,barkMinShow:1.2,bashVolume:.6,revVolume:.35,cutVolume:.5,throwVolume:.45,clankVolume:.35,boomVolume:.7,saunaVolume:.4,reviveVolume:.4,tobbleShotVolume:.25,blastSize:2.5,blastTime:.35,executeShake:.05,cutGelEvery:.1,arcDot:.06}};function Eh({step:n,render:e,before:t,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(g){if(!(g>0)||!Number.isFinite(g))return;t&&t(g),o+=g;let m=0;for(;o>=r&&m<s;)n(r),o-=r,m++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),g)}function d(g){if(c){try{l!==null&&h((g-l)/1e3)}catch(m){throw p(),m}l=g,c&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function f(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function p(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:f,stop:p}}var gf=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),Aw={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},Rw={0:"fire",2:"aim"},tg={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},ng={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},Cw=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function xf(n){if(!n||typeof n.tagName!="string")return!1;let e=n.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!Cw.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function ig(n){return Aw[n]||null}function sg(n){return Rw[n]||null}function ho(){let n={};for(let e of gf)n[e]=!1;return n}function rg(n,e,t=.15){let i=Math.hypot(n,e);if(i<t)return[0,0];let s=Math.min(1,(i-t)/(1-t))/i;return[n*s,e*s]}function Pw(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,t]=rg(n.axes[0],n.axes[1]),[i,s]=rg(n.axes[2],n.axes[3]),r=ho();for(let o in tg){let a=n.buttons[o];r[tg[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:t,lookX:i,lookY:s,held:r}}function Iw(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let e of gf)n.held[e]=!1;for(let e in n.held)n.held[e]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function Ah(n){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:ho(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:t,downButtons:i,latched:s}=e,r="kbm",o="none",a=ho();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,c=()=>l()||document.activeElement===n;function h(){Iw(e)}function d(S){if(xf(S.target))return;let M=ig(S.code);(M||S.code in ng)&&(c()&&(S.code==="Tab"||S.code==="Space")&&S.preventDefault(),r="kbm",!S.repeat&&!t.has(S.code)&&M&&s.add(M),t.add(S.code))}function u(S){t.delete(S.code)}function f(S){S.target===n&&n.focus();let M=sg(S.button);M&&(r="kbm",i.has(S.button)||s.add(M),i.add(S.button))}function p(S){i.delete(S.button)}function g(S){l()&&(r="kbm",e.lookDX+=S.movementX||0,e.lookDY+=S.movementY||0)}function m(S){!c()||!S.deltaY||(r="kbm",s.add(S.deltaY>0?"weaponNext":"weaponPrev"),S.preventDefault())}function x(S){S.preventDefault()}function v(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",p),window.addEventListener("blur",h),document.addEventListener("mousemove",g),document.addEventListener("pointerlockchange",v),n.addEventListener("mousedown",f),n.addEventListener("wheel",m,{passive:!1}),n.addEventListener("contextmenu",x);function w(){let S=[];try{S=navigator.getGamepads&&navigator.getGamepads()||[]}catch{S=[]}let M=null;for(let y of S)if(y&&y.connected){M=y;break}let _=Pw(M);return o=_.ok?M.id:_.reason==="none"?"none":"unrecognised controller",_}function b(){let S={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:ho(),pressed:ho()};e.lookDX=0,e.lookDY=0;for(let y of t){let P=ig(y);P&&(S.held[P]=!0);let R=ng[y];R&&(S.moveX+=R[0],S.moveY+=R[1])}for(let y of i){let P=sg(y);P&&(S.held[P]=!0)}let M=Math.hypot(S.moveX,S.moveY);M>1&&(S.moveX/=M,S.moveY/=M);for(let y of s)S.pressed[y]=!0;s.clear();let _=w();if(_.ok){S.lookX=_.lookX,S.lookY=_.lookY;let y=_.moveX!==0||_.moveY!==0||_.lookX!==0||_.lookY!==0;for(let R of gf)_.held[R]&&(y=!0,S.held[R]=!0,a[R]||(S.pressed[R]=!0));a=_.held,S.moveX+=_.moveX,S.moveY+=_.moveY;let P=Math.hypot(S.moveX,S.moveY);P>1&&(S.moveX/=P,S.moveY/=P),y&&(r="pad")}else a=ho();return S}return{poll:b,requestLock(){try{let S=n.requestPointerLock&&n.requestPointerLock();S&&typeof S.catch=="function"&&S.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function ag(n,e,t=14){let i=n;return e>20?i-=.1:e<t&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var Lw=2e3,og=1e4,Dw=8e4;function lg({startMs:n=0,scale:e=1}={}){let t=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-n<Lw||(i+=Math.min(h,100),s++,s<60||i<1e3))return t;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=ag(t,u,Math.max(14,1.1*r));if(f>t){if(d<l)return t;o=d}else f<t&&(o!==null&&d-o<og&&(a=a===0?og:Math.min(a*2,Dw),l=d+a),o=null);return t=f,t}return{sample:c,scale:()=>t}}var q=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var vf={viewportHeight:{value:1080}};function Xn(n){n.getAttribute("normal")||n.computeVertexNormals();let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=t.getX(l),h[1]+=t.getY(l),h[2]+=t.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Mt(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=t.getX(l),d=t.getY(l),u=t.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,n}var Nw=`
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
`,Ow=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function Uw({px:n=K.outlinePx,color:e=q.ink,outlineNormal:t=!1}={}){return new bn({name:"outline",uniforms:{px:{value:n},inkColor:{value:new Je(e)},viewportHeight:vf.viewportHeight},defines:t?{USE_OUTLINE_NORMAL:""}:{},vertexShader:Nw,fragmentShader:Ow,side:jt})}function Fw(){}var cg=new Map;function kw(n,e,t){let i=n+"|"+new Je(e).getHexString()+"|"+t,s=cg.get(i);return s||(s=Uw({px:n,color:e,outlineNormal:t}),cg.set(i,s)),s}function dn(n,{px:e=K.outlinePx}={}){let t=!!n.geometry.getAttribute("outlineNormal"),i=kw(e,q.ink,t),s=new at(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=Fw,n.add(s),s}function _f(n,e){n.traverse(t=>{t.userData.isOutline&&(t.visible=e)})}function Bw(n,e,t,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(t>0?t:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function Rh(n,e){let t=new Sh({canvas:n,context:e,antialias:!0,powerPreference:"high-performance"});t.outputColorSpace=Jt;let i=lg({startMs:performance.now()});function s(){let o=Bw(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return t.setPixelRatio(o.pixelRatio),t.setSize(o.width,o.height,!1),vf.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:t,resize:s,frameDone:r,scale:i.scale}}var is={lightDir:{value:new z(...K.lightDir).normalize()},shadowTint:{value:new Je(q.shadowTint)},bandEdge:{value:.15},shadowLift:{value:K.shadowLift}},zw=`
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
`,Hw=`
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
`;function Ct({color:n="#ffffff",vertexColors:e=!1,shadowMix:t=.55,rim:i=.25}={}){return new bn({name:"toon",uniforms:{baseColor:{value:new Je(n)},shadowMix:{value:t},rim:{value:i},lightDir:is.lightDir,shadowTint:is.shadowTint,bandEdge:is.bandEdge,shadowLift:is.shadowLift},vertexShader:zw,fragmentShader:Hw,vertexColors:e})}var Gw=400,Vw=[-.45,.22,-1],Ww=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,Xw=`
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
`;function Ch({planetDir:n=Vw}={}){let e=r=>new Je(r),t=new bn({name:"sky",uniforms:{deep:{value:e(q.nebulaDeep)},hot:{value:e(q.nebulaHot)},pink:{value:e(q.hotPink)},lilac:{value:e(q.lilac)},ink:{value:e(q.ink)},planetColor:{value:e(q.planet)},shadowTint:is.shadowTint,shadowLift:is.shadowLift,bandEdge:is.bandEdge,lightDir:is.lightDir,planetDir:{value:new z(...n).normalize()},time:{value:0}},vertexShader:Ww,fragmentShader:Xw,side:jt,depthWrite:!1}),i=new at(new Xt(Gw,48,24),t);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){t.uniforms.time.value=r}return{mesh:i,update:s}}function zt(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Et;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=hg(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][u]);let p=hg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function hg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Mt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let g=h.getComponent(u,p);a.setComponent(u+d,p,g)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function dg(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=e*.5,f=Math.log10(1/e),p=Math.pow(10,f),g=u*p;for(let x=0;x<r;x++){let v=i?i.getX(x):x,w="";for(let b=0,S=a.length;b<S;b++){let M=a[b],_=n.getAttribute(M),y=_.itemSize;for(let P=0;P<y;P++)w+=`${Math.trunc(_[d[P]](v)*p+g)},`}w in t?h.push(t[w]):(l.push(v),t[w]=o,h.push(o),o++)}let m=n.clone();for(let x in n.attributes)m.setAttribute(x,ug(n.attributes[x],l,c));for(let x in n.morphAttributes)m.morphAttributes[x]=n.morphAttributes[x].map(v=>ug(v,l,c));return m.setIndex(h),m}function ug(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function uo(n){let e=n>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function fg(n,e,t=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new z),l=o.getCenter(new z),c=a.length(),h=uo(e*7919+13>>>0),d=[];for(let x=0;x<8;x++)d.push(h()*2-1);let u=Math.min(t*c,i)*.99/Math.sqrt(3),f=(x,v)=>v>1e-9?2*x/v:0,p=[a.x,a.y,a.z].map(x=>x>1e-9?2/x:0),g=new ot,m=new z;for(let x=0;x<s.count;x++){let v=f(s.getX(x)-l.x,a.x),w=f(s.getY(x)-l.y,a.y),b=f(s.getZ(x)-l.z,a.z),S=(w+1)/2,M=(d[0]*w+d[1]*v*w)/2,_=(d[2]*v+d[3]*b)/2*S,y=(d[4]*w+d[5]*b*w)/2;if(r){let P=[d[1]*w/2,(d[0]+d[1]*v)/2,0],R=[d[2]/2*S,(d[2]*v+d[3]*b)/2*.5,d[3]/2*S],I=[0,(d[4]+d[5]*b)/2,d[5]*w/2];g.set(1+u*P[0]*p[0],u*P[1]*p[1],u*P[2]*p[2],u*R[0]*p[0],1+u*R[1]*p[1],u*R[2]*p[2],u*I[0]*p[0],u*I[1]*p[1],1+u*I[2]*p[2]),g.invert().transpose(),m.set(r.getX(x),r.getY(x),r.getZ(x)).applyMatrix3(g).normalize(),r.setXYZ(x,m.x,m.y,m.z)}s.setXYZ(x,s.getX(x)+u*M,s.getY(x)+u*_,s.getZ(x)+u*y)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var yf=null;function Yw(){return yf||(yf=Ct({vertexColors:!0})),yf}var Mf=(n,e,t)=>new Je(n).lerp(new Je(e),t),Sf=(n,e=.3)=>Mf(n,"#ffffff",e),Ph=(n,e=.2)=>Mf(n,q.shadowTint,e),pg=new pt,mg=new Cn,gg=new On,qw=new z,$w=new z;function ws(n=1,e=.02,t="prop"){let i=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let p=u.wonk===void 0?e:u.wonk;p>0&&fg(f,n*131+s,p),s++;let g=f.getAttribute("normal"),m=new Float32Array(g.count*3);for(let x=0;x<g.count;x++){let v=typeof d=="function"?d(g.getX(x),g.getY(x),g.getZ(x)):d;m[x*3]=v.r,m[x*3+1]=v.g,m[x*3+2]=v.b}return f.setAttribute("color",new Mt(m,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),gg.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),mg.setFromEuler(gg),pg.compose(qw.set(u.x||0,u.y||0,u.z||0),mg,$w.set(1,1,1)),f.applyMatrix4(pg),i.push(f),f}function o(h,d={}){let u=d.top||Sf(h),f=d.side||Ph(h,.22),p=Ph(h,.4),g=new Je(h);return(m,x,v)=>x>.5?u:x<-.5?p:Math.abs(m)>.5?f:v>0?g:p}function a(h,d,u,f,p={}){return r(new mt(h,d,u),o(f,p),p)}function l(h,d,u,f,p,g,m,x={}){return a(d-h,f-u,g-p,m,{...x,x:(h+d)/2,y:(u+f)/2,z:(p+g)/2})}function c(h=0){let d=zt(i,!1);if(!d)throw new Error(`${t}: parts have different attributes and cannot be merged`);return h>0&&fg(d,n,h),Xn(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function Ts(n){let e=new dt,t=new at(n,Yw());return dn(t),e.add(t),e}var ss=n=>()=>new Je(n);function Ih({w:n,d:e,tile:t=1,colors:i=[q.cream,q.tealLight]}){let s=ws(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-e/2,e/2,q.lilac,{top:new Je(q.lilac)});let o=Math.round(n/t),a=Math.round(e/t);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new vs(t,t);h.rotateX(-Math.PI/2),s.add(h,ss(i[(l+c)%2]),{wonk:0,x:-n/2+(l+.5)*t,y:0,z:-e/2+(c+.5)*t})}return Ts(s.finish())}function wf({w:n,h:e,color:t=q.cream,stripe:i=q.hotPink,opening:s=null,seed:r=2}){let o=ws(r,0,"wall"),a=.2,l=a/2,c=-n/2,h=n/2,d=-.3,u=new Qr;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,e),u.lineTo(c,e),u.closePath(),s){let x=new tr,v=s.x-s.w/2,w=s.x+s.w/2;x.moveTo(v,s.y),x.lineTo(v,s.y+s.h),x.lineTo(w,s.y+s.h),x.lineTo(w,s.y),x.closePath(),u.holes.push(x)}let f=new ya(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(t),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,q.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,q.teal);let p=.5,g=.8;return s&&s.y<g&&s.y+s.h>p?(o.span(c,s.x-s.w/2,p,g,l-.01,l+.03,i),o.span(s.x+s.w/2,h,p,g,l-.01,l+.03,i)):o.span(c,h,p,g,l-.01,l+.03,i),Ts(o.finish(.006))}function Zw(n,e,t,i){let s=m=>Math.min(2048,Math.max(64,Math.round(m))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=n.split(" "),d=[[n]];for(let m=1;m<h.length;m++)d.push([h.slice(0,m).join(" "),h.slice(m).join(" ")]);let u=null;for(let m of d){let x=Math.max(...m.map(w=>l.measureText(w).width)),v=Math.min(r*.88*100/x,o*.8/(m.length*1.08));(!u||v>u.size)&&(u={lines:m,size:v})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=t,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,p=o/2-(u.lines.length-1)*f/2;u.lines.forEach((m,x)=>{let v=p+x*f;l.fillStyle=q.ink,l.fillText(m,r/2+u.size*.05,v+u.size*.06),l.fillStyle=t,l.fillText(m,r/2,v)});let g=new la(a);return g.colorSpace=Jt,g.anisotropy=8,g}function fo({text:n,w:e,h:t,bg:i=q.hotPink,fg:s=q.cream,tilt:r=.04,seed:o=3}){let c=ws(o,0,"sign");c.box(e,t,.14,s,{wonk:0});let h=Ts(c.finish()),d=e-.14*2,u=t-.14*2,f=new at(new vs(d,u),new yn({map:Zw(n,i,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function xg({w:n,h:e,seed:t=4}){let i=ws(t,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,e,-r/2,r/2,q.teal),i.span(n/2-s,n/2,0,e,-r/2,r/2,q.teal),i.span(-n/2+s,n/2-s,e-s,e,-r/2,r/2,q.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,q.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,q.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,q.cream),i.span(-n/2+s,n/2-s,e/2-.04,e/2+.04,-.04,.04,q.cream),Ts(i.finish(.006))}function ka(n,e,t,i,s,r){let o=new rr(.16,.05,8,20);n.add(o,ss(q.planet),{wonk:.04,x:e,y:t,z:i,rx:-Math.PI/2+s,ry:r})}function vg({w:n,h:e,name:t,signColor:i=q.hotPink,seed:s=5}){let r=ws(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=Mf(q.glorpPurple,q.ink,.7);r.span(-n/2+a,n/2-a,0,c,-o/2,-o/2+.1,h),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,q.lilac);for(let x of[-1,1]){let v=x*(n/2-a/2);r.span(v-a/2,v+a/2,0,c,-o/2,o/2,q.lilac),r.span(v-a/2-.04,v+a/2+.04,0,.3,-o/2,o/2+.04,q.teal)}r.span(-n/2,n/2,c,l,-o/2,o/2,q.teal);let d=n-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,q.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,q.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,q.cream),ka(r,-.9,1.01,.4,.1,.4),ka(r,-.2,1.01,.5,-.1,-.3),ka(r,.6,1.01,.38,.12,.9),ka(r,1.2,1.01,.52,0,.1);let u=10,f=(n-.1)/u,p=.42;for(let x=0;x<u;x++){let v=x%2?q.cream:i,w=-n/2+.05+(x+.5)*f;r.box(f,.08,.95,v,{x:w,y:c-.02,z:o/2+.35,rx:p,top:Sf(v,.2)}),r.box(f,.22,.06,v,{x:w,y:c-.24,z:o/2+.8,rx:.1})}let g=Ts(r.finish(.006)),m=fo({text:t,w:n-.7,h:1.15,bg:i,fg:q.cream,seed:s+1});return m.position.set(0,c+.7,o/2+.01),g.add(m),g}function _g({w:n=2,d:e=1,h:t=.9,color:i=q.teal,seed:s=7}={}){let r=ws(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-e/2+.03,e/2-.03,q.lilac),r.span(-n/2,n/2,.16,t-.08,-e/2,e/2,i),r.span(-n/2-.07,n/2+.07,t-.08,t,-e/2-.07,e/2+.07,q.cream);let o=4,a=(n-.3)/o;for(let c=0;c<o;c++){let h=c%2?q.cream:q.hotPink;r.box(a-.04,t-.45,.05,h,{x:-n/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,q.glorpPurple,{x:-.55,y:t+.14,z:-.1}),r.box(.3,.14,.04,q.gel,{x:-.55,y:t+.28,z:.07,rx:-.5,wonk:0}),ka(r,.45,t+.06,.05,.1,.5);let l=Ts(r.finish(.006));return l.userData.footprint={w:n+.14,d:e+.14},l}function yg({w:n=1.8,seed:e=11}={}){let t=ws(e,.02,"bench"),i=.5;t.box(n,.1,i,q.lilac,{y:.46}),t.box(n,.42,.08,q.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])t.box(.1,.46,i-.06,q.teal,{x:r*(n/2-.2),y:.23}),t.box(.08,.5,.08,q.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=Ts(t.finish(.006));return s.userData.footprint={w:n,d:i},s}function Kw(n,e,t){let i=new mt(.035,n,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+t*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function bg({seed:n=21}={}){let e=ws(n,.02,"planter"),t=uo(n);e.add(new Wt(.42,.32,.55,16),ss(q.teal),{y:.275}),e.add(new Wt(.47,.44,.12,16),ss(q.hotPink),{y:.6}),e.add(new Wt(.4,.4,.04,16),ss(Ph(q.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Ph(q.planet,.15);for(let l=0;l<6;l++)e.add(new Wt(.06-l*.004,.07-l*.004,.34,8),ss(l%2?Sf(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+t()*.3,h=l%2?.95+t()*.25:1.45+t()*.25,d=new pt().makeTranslation(i,s,0).multiply(new pt().makeRotationY(c)).multiply(new pt().makeRotationZ(-h));e.add(Kw(.95,.24,l%2?.22:.4),ss(l%2?q.gel:q.teal),{m:d,wonk:.03})}e.add(new Xt(.1,10,8),ss(q.planet),{x:i,y:s-.05,z:.08}),e.add(new Xt(.1,10,8),ss(q.planet),{x:i+.07,y:s-.1,z:-.07});let a=Ts(e.finish());return a.userData.footprint={w:.95,d:.95},a}var bf=null;function Lh({rx:n,rz:e,opacity:t=.35}){let r=new Je(q.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,t];for(let d=1;d<=8;d++){let u=d/8,f=t*(1-u*u*(3-2*u));for(let p=0;p<28;p++){let g=p/28*Math.PI*2;o.push(Math.cos(g)*n*u,0,Math.sin(g)*e*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let p=0;p<28;p++){let g=(p+1)%28;l.push(u+p,u+g,f+p,u+g,f+g,f+p)}}let c=new Et;c.setAttribute("position",new ut(o,3)),c.setAttribute("color",new ut(a,4)),c.setIndex(l),bf||(bf=new yn({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new at(c,bf);return h.name="blobShadow",h.position.y=.012,h}var Ba=8,Dh=Ba/2,Tf=.2;function Mg(){let n=new dt;n.add(Ih({w:Ba,d:Ba}));let e=wf({w:Ba+Tf*2,h:4});e.position.set(0,0,-Dh-Tf/2),n.add(e);let t=1.3,i=vg({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:q.hotPink});i.position.set(t,0,-Dh+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=wf({w:Ba,h:4,color:"#f1e6ff",opening:s});r.position.set(-Dh-Tf/2,0,0),r.rotation.y=Math.PI/2;let o=xg({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=_g({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=yg({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=bg({seed:21});c.position.set(-2.95,0,-2.9),n.add(a,l,c);let h=(d,u,f,p,g=0)=>{let m=Lh({rx:f,rz:p,opacity:.7});m.position.x=d,m.position.z=u,m.rotation.y=g,n.add(m)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(t,-Dh+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function Ln(n,e,t,i){if(!(t>0)||!(i>0))return t>0||(n.x=e,n.v=0),n;let s=4*Math.LN2/t/2,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i),n}function Ef(n,e,t,i,s,r){let o=t+i,a=e[0]-n[0],l=e[1]-n[1],c=e[2]-n[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=e[0],f=e[1],p=e[2];h>d&&(h=d,u=n[0]+a*h,f=n[1]+l*h,p=n[2]+c*h);let g=h>o?h/o:1;if(h>=o){let y=h*(o>0?t/o:.5);return Sg(r,n[0]+a*y,n[1]+l*y,n[2]+c*y,u,f,p,g)}let m=Math.max(h,1e-6),x=Math.min(Math.max((m*m+t*t-i*i)/(2*m),-t),t),v=Math.sqrt(Math.max(t*t-x*x,0)),w=s[0],b=s[1],S=s[2],M=w*a+b*l+S*c;w-=a*M,b-=l*M,S-=c*M;let _=Math.hypot(w,b,S);return _<1e-6&&(Math.abs(a)<.9?(w=0,b=c,S=-l):(w=-c,b=0,S=a),_=Math.hypot(w,b,S)||1),w/=_,b/=_,S/=_,Sg(r,n[0]+a*x+w*v,n[1]+l*x+b*v,n[2]+c*x+S*v,u,f,p,g)}function Sg(n,e,t,i,s,r,o,a){if(!n)return{mid:[e,t,i],end:[s,r,o],stretch:a};let l=n.mid,c=n.end;return l[0]=e,l[1]=t,l[2]=i,c[0]=s,c[1]=r,c[2]=o,n.stretch=a,n}var wg=[.65,1.2];function Af({radius:n=.06,rings:e=8,sides:t=8,color:i="#ffffff"}={}){let s=e+1,r=wg.length,o=s*t,a=[o,o+r*t+1],l=o+2*(r*t+1),c=[],h=(ae,ee,pe)=>{for(let se=0;se<t;se++){let xe=(se+1)%t,Ne=ae+se,Ge=ae+xe,G=ee+se,ve=ee+xe;pe?c.push(Ne,G,Ge,Ge,G,ve):c.push(Ne,Ge,G,Ge,ve,G)}};for(let ae=0;ae<e;ae++)h(ae*t,(ae+1)*t,!1);for(let ae=0;ae<2;ae++){let ee=ae===0,pe=ae===0?0:e*t;for(let xe=0;xe<r;xe++){let Ne=a[ae]+xe*t;h(pe,Ne,ee),pe=Ne}let se=a[ae]+r*t;for(let xe=0;xe<t;xe++){let Ne=pe+xe,Ge=pe+(xe+1)%t;ee?c.push(Ne,se,Ge):c.push(Ne,Ge,se)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new Et,p=new Mt(d,3),g=new Mt(u,3);p.setUsage(ao),g.setUsage(ao),f.setAttribute("position",p),f.setAttribute("normal",g),f.setIndex(c);let m=new at(f,Ct({color:i}));m.name="limb";let x=new Un(new z,n*2);f.boundingSphere=x,dn(m);let v=new Float64Array(t),w=new Float64Array(t);for(let ae=0;ae<t;ae++)v[ae]=Math.cos(ae/t*Math.PI*2),w[ae]=Math.sin(ae/t*Math.PI*2);let b=0,S=-1,M=0,_=1,y=0,P=0,R=0,I=0,A=1,L=0,E=0,N=0,k=0,W=0,te=0,Y=0,J=0,U=0,le=0,be=0,H=0,oe=0,we=0,de=0,re=0,Oe=0,De=0;function Me(ae,ee,pe,se,xe,Ne,Ge,G,ve,Fe,Ve,fe,tt,ke,Ue,O){for(let C=0;C<t;C++){let j=v[C]*Ne+w[C]*ve,Ce=v[C]*Ge+w[C]*Fe,ge=v[C]*G+w[C]*Ve,_e=(ae+C)*3;d[_e]=ee+j*xe,d[_e+1]=pe+Ce*xe,d[_e+2]=se+ge*xe,u[_e]=j*Ue+fe*O,u[_e+1]=Ce*Ue+tt*O,u[_e+2]=ge*Ue+ke*O}}let Ae=!1,Te=1,F=0,$=0;function ne(ae,ee,pe,se=1){let xe=n/Math.sqrt(se>1?se:1),Ne=2*ee[0]-(ae[0]+pe[0])/2,Ge=2*ee[1]-(ae[1]+pe[1])/2,G=2*ee[2]-(ae[2]+pe[2])/2,ve=ae[0],Fe=ae[1],Ve=ae[2],fe=pe[0],tt=pe[1],ke=pe[2],Ue=(ee[1]-Fe)*(ke-ee[2])-(ee[2]-Ve)*(tt-ee[1]),O=(ee[2]-Ve)*(fe-ee[0])-(ee[0]-ve)*(ke-ee[2]),C=(ee[0]-ve)*(tt-ee[1])-(ee[1]-Fe)*(fe-ee[0]),j=Math.hypot(Ue,O,C),Ce=ee[0]-ve,ge=ee[1]-Fe,_e=ee[2]-Ve,Ie=Math.hypot(Ce,ge,_e),ue=fe-ee[0],he=tt-ee[1],Pe=ke-ee[2],V=!1;j>1e-4*Ie*Math.hypot(ue,he,Pe)&&j>1e-12?(Ue/=j,O/=j,C/=j,Ae&&Ue*Te+O*F+C*$<0&&(Ue=-Ue,O=-O,C=-C),V=!0):Ie>1e-9&&Ce*ue+ge*he+_e*Pe<0&&(Ne=(ve+fe)/2,Ge=(Fe+tt)/2,G=(Ve+ke)/2);let me=(ve+Ne+fe)/3,ce=(Fe+Ge+tt)/3,ze=(Ve+G+ke)/3,Be=Math.max(Math.hypot(ve-me,Fe-ce,Ve-ze),Math.hypot(Ne-me,Ge-ce,G-ze),Math.hypot(fe-me,tt-ce,ke-ze));x.center.set(me,ce,ze),x.radius=Be+n*1.5+.02;for(let Se=0;Se<s;Se++){let Re=Se/e,Ye=1-Re,ye=Ye*Ye,Xe=2*Ye*Re,Ke=Re*Re,Le=ye*ve+Xe*Ne+Ke*fe,je=ye*Fe+Xe*Ge+Ke*tt,ct=ye*Ve+Xe*G+Ke*ke,At=2*Ye*(Ne-ve)+2*Re*(fe-Ne),Dt=2*Ye*(Ge-Fe)+2*Re*(tt-Ge),It=2*Ye*(G-Ve)+2*Re*(ke-G),cn=Math.hypot(At,Dt,It);if(cn>1e-9?(b=At/cn,S=Dt/cn,M=It/cn):Se===0&&(b=0,S=-1,M=0),Se===0){V?(_=Ue,y=O,P=C):Ae?(_=Te,y=F,P=$):(_=1,y=0,P=0);let Kt=_*b+y*S+P*M;_-=b*Kt,y-=S*Kt,P-=M*Kt;let Pt=Math.hypot(_,y,P);Pt<1e-6&&(Math.abs(b)<.9?(_=0,y=M,P=-S):(_=-M,y=0,P=b),Pt=Math.hypot(_,y,P)||1),_/=Pt,y/=Pt,P/=Pt,Te=_,F=y,$=P,Ae=!0}else{let Kt=_*b+y*S+P*M;_-=b*Kt,y-=S*Kt,P-=M*Kt;let Pt=Math.hypot(_,y,P);Pt<1e-6&&(Math.abs(b)<.9?(_=0,y=M,P=-S):(_=-M,y=0,P=b),Pt=Math.hypot(_,y,P)||1),_/=Pt,y/=Pt,P/=Pt}R=S*P-M*y,I=M*_-b*P,A=b*y-S*_,Me(Se*t,Le,je,ct,xe,_,y,P,R,I,A,0,0,0,1,0),Se===0&&(L=b,E=S,N=M,k=_,W=y,te=P,Y=R,J=I,U=A),Se===s-1&&(le=b,be=S,H=M,oe=_,we=y,de=P,re=R,Oe=I,De=A)}for(let Se=0;Se<2;Se++){let Re=Se===0?-1:1,Ye=Se===0?ve:fe,ye=Se===0?Fe:tt,Xe=Se===0?Ve:ke,Ke=Se===0?L:le,Le=Se===0?E:be,je=Se===0?N:H,ct=Se===0?k:oe,At=Se===0?W:we,Dt=Se===0?te:de,It=Se===0?Y:re,cn=Se===0?J:Oe,Kt=Se===0?U:De,Pt=Ke*Re,mn=Le*Re,ht=je*Re;for(let zi=0;zi<r;zi++){let Hi=wg[zi],Ws=Math.cos(Hi),mi=Math.sin(Hi);Me(a[Se]+zi*t,Ye+Pt*xe*mi,ye+mn*xe*mi,Xe+ht*xe*mi,xe*Ws,ct,At,Dt,It,cn,Kt,Pt,mn,ht,Ws,mi)}let ii=(a[Se]+r*t)*3;d[ii]=Ye+Pt*xe,d[ii+1]=ye+mn*xe,d[ii+2]=Xe+ht*xe,u[ii]=Pt,u[ii+1]=mn,u[ii+2]=ht}p.needsUpdate=!0,g.needsUpdate=!0}return{mesh:m,set:ne}}var ur=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),Jw=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),Nh=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Rf=.04,jw=9;function Oh(n,e){let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*Math.PI*2}function Qw(n,e,t=[0,0]){return t[0]=.05*Math.sin(1.3*n+Oh(e,1))+.03*Math.sin(2.1*n+Oh(e,2)),t[1]=.04*Math.sin(1.7*n+Oh(e,3))+.02*Math.sin(2.6*n+Oh(e,4)),t}var eT=(n,e)=>Math.min(n*2,1)*Math.max(e,0),za=16,Tg=za+1,Ti=11,Es=4,Uh=13,tT=.07,nT=n=>{let e=n<0?0:n>1?1:n;return e*e*(3-2*e)};function Eg({eyeRadius:n=.1,eyeSpacing:e=.26,eyeY:t=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=q.ink,fixedSmile:h=0}={}){let d=n,u=e/2,f=[-u,u],p=.35,g=.035*d,m=d*.3,x=a==="uni",v=0,w=v+2*Tg,b=w+16,S=b+2*Ti*Es,M=S+2*Ti*2,_=M+(x?6:8),y=_+Uh*2,P=[],R=ve=>P.push(ve,ve+1,ve+2,ve,ve+2,ve+3),I=(ve,Fe)=>{for(let Ve=0;Ve<Fe-1;Ve++){let fe=ve+Ve*2;P.push(fe,fe+1,fe+2,fe+1,fe+3,fe+2)}};for(let ve=0;ve<2;ve++){let Fe=v+ve*Tg;for(let Ve=0;Ve<za;Ve++)P.push(Fe,Fe+1+Ve,Fe+1+(Ve+1)%za)}for(let ve=0;ve<4;ve++)R(w+ve*4);for(let ve=0;ve<2;ve++){let Fe=b+ve*Ti*Es;for(let Ve=0;Ve<Ti-1;Ve++)for(let fe=0;fe<Es-1;fe++){let tt=Fe+Ve*Es+fe,ke=tt+1,Ue=tt+Es,O=Ue+1;P.push(tt,ke,Ue,ke,O,Ue)}I(S+ve*Ti*2,Ti)}x?P.push(M,M+1,M+2,M+1,M+3,M+2,M+2,M+3,M+4,M+3,M+5,M+4):(R(M),R(M+4)),I(_,Uh);let A=[];for(let ve=0;ve<2;ve++){let Fe=new Xt(d,18,12);Fe.deleteAttribute("uv"),Fe.applyMatrix4(new pt().makeScale(1,1,p).setPosition(f[ve],t,i)),A.push(Fe)}let L=new at(zt(A,!1),Ct({color:q.eyeWhite,shadowMix:.35,rim:0}));L.name="eyes",dn(L,{px:2});let E=new Float32Array(y*3),N=new Float32Array(y*3),k=new Float32Array(y*3),W=new Je(q.ink),te=new Je(c);for(let ve=0;ve<y;ve++){N[ve*3+2]=1;let Fe=ve>=b&&ve<S?te:W;k[ve*3]=Fe.r,k[ve*3+1]=Fe.g,k[ve*3+2]=Fe.b}let Y=new Et,J=new Mt(E,3);J.setUsage(ao),Y.setAttribute("position",J),Y.setAttribute("normal",new Mt(N,3)),Y.setAttribute("color",new Mt(k,3)),Y.setIndex(P);let U=t+d*3.5,le=s-r*1.5-d,be=Math.max(u+2.5*d,r);Y.boundingSphere=new Un(new z(0,(U+le)/2,i),Math.hypot(be,(U-le)/2,d*2));let H=Ct({color:"#ffffff",vertexColors:!0,rim:0});H.side=Mn;let oe=new at(Y,H);oe.name="features";let we=new dt;we.name="face",we.add(L,oe);let de=ur.neutral,re=ve=>{let Fe=h>0?Jw[ve]:0;return Fe>0?h*Fe:-1/0},Oe=re("neutral"),De=ve=>ve==="mouthCurve"&&de.mouthCurve<Oe?Oe:de[ve],Me={};for(let ve of Nh)Me[ve]={x:De(ve),v:0};let Ae={x:0,v:0},Te={x:0,v:0},F=0,$=!1,ne=0,ae=[0,0],ee=0;function pe(ve,Fe,Ve){let fe=ee*3;E[fe]=ve,E[fe+1]=Fe,E[fe+2]=Ve,ee++}function se(ve,Fe,Ve){let fe=1-(ve*ve+Fe*Fe)/(d*d);return i+d*p*Math.sqrt(fe>0?fe:0)+Ve}function xe(ve,Fe,Ve,fe,tt,ke){let Ue=-(fe-Fe),O=Ve-ve,C=Math.hypot(Ue,O)||1;Ue=Ue/C*tt/2,O=O/C*tt/2,pe(ve+Ue,Fe+O,ke),pe(Ve+Ue,fe+O,ke),pe(Ve-Ue,fe-O,ke),pe(ve-Ue,Fe-O,ke)}let Ne=d*1.03;function Ge(){let ve=Me,Fe=ve.pupilScale.x*(1-Ae.x),Ve=Ae.x,fe=Math.min(Math.max(ve.lid.x,0),.95),tt=ve.browAngle.x,ke=fe>.005,Ue=Ne-2*Ne*fe,O=tt*.6*Math.min(fe*4,1),C=d*tT*Math.min(fe*10,1);ee=v;for(let Re=0;Re<2;Re++){let Ye=Re===0?-1:1;Qw(ne,l+Re*7.31,ae);let ye=d*.5*(Fe>0?Fe:0),Xe=ae[0]*d,Ke=ae[1]*d;if(ke){let je=Ue+O*Ye*Xe-Math.abs(O)*ye-C-(Ke+ye);if(je>0){let ct=Math.min(Math.max((je-.1*d)/(.1*d),0),1);Ke+=je*(1-nT(ct))}}pe(f[Re]+Xe,t+Ke,se(Xe,Ke,g));for(let Le=0;Le<za;Le++){let je=Le/za*Math.PI*2,ct=Xe+Math.cos(je)*ye,At=Ke+Math.sin(je)*ye;pe(f[Re]+ct,t+At,se(ct,At,g))}}ee=w;for(let Re=0;Re<2;Re++){let Ye=d*.55*Ve,ye=se(0,0,g),Xe=d*.26*Ve;xe(f[Re]-Ye,t-Ye,f[Re]+Ye,t+Ye,Xe,ye),xe(f[Re]-Ye,t+Ye,f[Re]+Ye,t-Ye,Xe,ye)}for(let Re=0;Re<2;Re++){let Ye=Re===0?-1:1;for(let ye=0;ye<2;ye++){ee=ye===0?b+Re*Ti*Es:S+Re*Ti*2;for(let Xe=0;Xe<Ti;Xe++){let Ke=(Xe/(Ti-1)*2-1)*(Math.PI/2),Le=Ne*Math.sin(Ke),je=Ne*Math.cos(Ke),ct=ke?Ue+O*Le:je;ct>je&&(ct=je),ct<-je&&(ct=-je);let At=Ye*Le;if(ye===0)for(let Dt=0;Dt<Es;Dt++){let It=je+(ct-je)*(Dt/(Es-1));pe(f[Re]+At,t+It,se(At,It*.97,g*3))}else{let Dt=ct+(ke?d*.02:0);Dt>je&&(Dt=je);let It=ct-C;It<-je&&(It=-je),pe(f[Re]+At,t+Dt,se(At,Dt*.97,g*3.5)),pe(f[Re]+At,t+It,se(At,It*.97,g*3.5))}}}}ee=M;let j=d*.9,Ce=t+d*(1.4+ve.browY.x),ge=Math.cos(tt),_e=Math.sin(tt),Ie=i+d*.15;if(x){let Re=u+j*ge,Ye=Ce+j*_e,ye=Ce-_e/(ge>.3?ge:.3)*u,Xe=-(ye-Ye),Ke=Re,Le=Math.hypot(Xe,Ke)||1;Xe/=Le,Ke/=Le;let je=-(Ye-ye),ct=Re,At=Math.hypot(je,ct)||1;je/=At,ct/=At;let Dt=Xe+je,It=Ke+ct,cn=Math.hypot(Dt,It)||1;Dt/=cn,It/=cn;let Kt=Dt*Xe+It*Ke,Pt=m/2/(Kt>.4?Kt:.4);pe(-Re+Xe*m/2,Ye+Ke*m/2,Ie),pe(-Re-Xe*m/2,Ye-Ke*m/2,Ie),pe(Dt*Pt,ye+It*Pt,Ie),pe(-Dt*Pt,ye-It*Pt,Ie),pe(Re+je*m/2,Ye+ct*m/2,Ie),pe(Re-je*m/2,Ye-ct*m/2,Ie)}else for(let Re=0;Re<2;Re++){let Ye=Re===0?-1:1;xe(f[Re]-Ye*j*ge,Ce-j*_e,f[Re]+Ye*j*ge,Ce+j*_e,m,Ie)}ee=_;let ue=ve.mouthOpen.x+Te.x*(.55+.45*Math.sin((ne+l*.37)*jw*Math.PI*2))*.8,he=ue>0?ue<1.2?ue:1.2:0,Pe=-ve.mouthCurve.x/.5,V=(Pe>1?1:Pe>0?Pe:0)*(he<.4?he/.4:1),me=r/2*(1-.35*(he<1?he:1)*(1-.7*V)),ce=eT(ve.lid.x,ve.mouthCurve.x),ze=ve.mouthCurve.x*me*.5*(1-.4*ce)*(1+.6*V),Be=.55+.5*V,Se=he*me*.9;for(let Re=0;Re<Uh;Re++){let Ye=Re/(Uh-1)*2-1,ye=1-Ye*Ye,Xe=Ye*me*(1-.25*ce)+ce*me*.2,Ke=s-ze*ye+ce*me*.45*Ye+Ae.x*m*.6*Math.sin(Ye*Math.PI*3);pe(Xe,Ke,o),pe(Xe,Ke-m-Se*Math.pow(ye,Be)+ze*ye*V,o)}J.needsUpdate=!0}function G(ve){ne+=ve;for(let Fe=0;Fe<Nh.length;Fe++)Ln(Me[Nh[Fe]],De(Nh[Fe]),Rf,ve);Ln(Ae,F,Rf,ve),Ln(Te,$?1:0,Rf,ve),Ge()}return Ge(),{group:we,setExpression(ve){de=Object.prototype.hasOwnProperty.call(ur,ve)?ur[ve]:ur.neutral,F=ve==="dead"?1:0,Oe=re(Object.prototype.hasOwnProperty.call(ur,ve)?ve:"neutral")},setTalking(ve){$=!!ve},update:G}}var Dn=Math.PI*2,Ha=["handL","handR","footL","footR"];function Ai(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function Ag(n,e){e.hipsY=n.hipsY,e.lean=n.lean,e.twist=n.twist,e.headYaw=n.headYaw,e.headPitch=n.headPitch,e.squash=n.squash,e.elbows=n.elbows;for(let t=0;t<4;t++){let i=n[Ha[t]],s=e[Ha[t]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function Ga(n,e,t,i=[0,0,0]){let s=t[0],r=t[1]-n.hipHeight,o=t[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+e.hipsY,i[2]=-s*h+u*c,i}var iT=n=>n<0?0:n>1?1:n,Ei=(n,e,t)=>{let i=iT((t-n)/(e-n));return i*i*(3-2*i)},dr=(n,e,t,i,s)=>Ei(e,t,n)*(1-Ei(i,s,n));function St(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}var Fh=[0,0,0];function Jn(n,e,t,i,s,r){return Fh[0]=t,Fh[1]=i,Fh[2]=s,Ga(n,e,Fh,r)}var kh={sx:0,sy:0,fx:0};function Tn(n){return kh.sx=Math.abs(n.shoulderL[0]),kh.sy=n.shoulderL[1],kh.fx=Math.abs(n.hipL[0])+.035,kh}var mo=(n,e)=>e>0?n.handL:n.handR;function Cf(n,e,t,i,s){return Jn(n,e,s*(t.sx+.16),n.hipHeight+0,.1,i)}var Pf=.55;function Vh(n,e,t){let i=Tn(e),s=n/ft.idle.duration,r=Dn*s,o=e.hipHeight,a=dr(s,.42,.52,.72,.86);return t.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),t.lean=.03+.015*Math.sin(r+.4),t.twist=.05*Math.sin(r+.6),t.headYaw=.03*Math.sin(r)+.3*a,t.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,t.squash=1+.008*Math.sin(r),t.elbows=Pf,Cf(e,t,i,t.handL,1),Cf(e,t,i,t.handR,-1),t.handL[1]+=.008*Math.sin(r-.5),t.handR[1]+=.008*Math.sin(r+.4),t.handL[2]+=.01*Math.sin(r+1.1),t.handR[2]+=.01*Math.sin(r-.7),St(t.footL,i.fx,0,.015),St(t.footR,-i.fx,0,-.015),t}var rs=.34,If=.25,Pg=-.33,sT=.4,rT=.37,oT=.035,Gh=(If-Pg)/rs;function Rg(n,e){if(n<rs)return e[0]=0,e[1]=If-Gh*n,e;let t=(n-rs)/(1-rs),i=-Gh*(1-rs),s=-.35*Gh*(1-rs),r=t*t,o=r*t;return e[1]=(2*o-3*r+1)*Pg+(o-2*r+t)*i+(-2*o+3*r)*If+(o-r)*s,e[0]=sT*Math.sin(Math.PI*Math.pow(t,.8)),e}var ln=[0,0];function Ig(n,e,t){let i=Tn(e),s=n/ft.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*Dn*(r-(rs+.5)/2);t.hipsY=o-.06+oT*Math.cos(a),t.squash=1+.045*Math.cos(2*Dn*(r-rs-.03)),t.lean=rT+.03*Math.cos(2*Dn*(r-rs));let l=Math.cos(Dn*(r+.03));t.twist=.2*l,t.headYaw=-.15*l,t.headPitch=-.28+.04*Math.cos(a),t.elbows=0,Rg(r,ln),St(t.footL,i.fx*.75,ln[0],ln[1]),Rg(r<.5?r+.5:r-.5,ln),St(t.footR,-i.fx*.75,ln[0],ln[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;Jn(e,t,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,mo(t,c))}return t}function Lg(n,e,t){let i=Tn(e),s=Dn*n/ft.aim.duration,r=e.hipHeight;t.hipsY=r-.05+.005*Math.sin(s),t.lean=.12+.01*Math.sin(s),t.twist=-.1,t.headYaw=.08,t.headPitch=.04+.012*Math.sin(2*s),t.squash=1,t.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return St(t.handL,i.sx*1.2+o,i.sy-.12+a,.56),St(t.handR,-i.sx*1.25+o,i.sy-.06+a,.52),St(t.footL,i.fx+.02,0,.15),St(t.footR,-i.fx-.03,0,-.13),t}var Lf=.35;function aT(n){return n<.06?Ei(0,.06,n):Math.exp(-9*(n-.06))*(1-Ei(.24,Lf,n))}function lT(n){if(n<.07)return Ei(0,.07,n);let e=n-.07;return Math.exp(-11*e)*Math.cos(Dn*e/.22)*(1-Ei(.26,Lf,n))}function cT(n,e,t){let i=Tn(e),s=e.hipHeight,r=aT(n);t.hipsY=s-.012-.05*r,t.lean=.03-.4*r,t.twist=.12*r,t.headYaw=-.12*r,t.headPitch=-.02-.32*r,t.squash=1-.15*lT(n),t.elbows=Pf+(1-Pf)*r;for(let o=-1;o<=1;o+=2){let a=mo(t,o);Cf(e,t,i,a,o);let l=a[0],c=a[1],h=a[2];Jn(e,t,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return St(t.footL,i.fx,0,.015),St(t.footR,-i.fx,0,-.015),t}var As=[0,0,0];function hT(n,e,t){Vh(n,e,t);let i=Tn(e),s=n/ft.talk.duration,r=Dn*s,o=dr(s,.04,.17,.4,.55),a=dr(s,.5,.63,.8,.95),l=Math.sin(3*r);t.headPitch+=.05*Math.sin(4*r)-.04*(o+a),t.headYaw+=-.12*o+.12*a,t.elbows+=(.85-t.elbows)*Math.max(o,a),Jn(e,t,-(i.sx+.19),i.sy-.1+.03*l,.36,As);for(let c=0;c<3;c++)t.handR[c]+=(As[c]-t.handR[c])*o;Jn(e,t,i.sx+.19,i.sy-.12-.03*l,.34,As);for(let c=0;c<3;c++)t.handL[c]+=(As[c]-t.handL[c])*a;return t}var Fn=Ai();function uT(n,e,t){let i=n/ft.roll.duration,s=dr(i,0,.15,.75,1),r=Tn(e);Vh(0,e,Fn);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Fn.hipsY,.45),t.lean=o(Fn.lean,1.3),t.twist=0,t.headYaw=0,t.headPitch=o(Fn.headPitch,.35),t.squash=o(1,.9),t.elbows=1;for(let a=-1;a<=1;a+=2){let l=mo(t,a),c=mo(Fn,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?t.footL:t.footR,d=a>0?Fn.footL:Fn.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return t}function dT(n,e,t){return Ig(n,e,t),t.hipsY-=.12,t.lean+=.15,t}var fT=.25,pT=.85,mT=.82;function Dg(n,e,t){let i=Tn(e),s=Dn*n/ft.coverLow.duration;return t.hipsY=fT+.006*Math.sin(s),t.lean=pT+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=-.55+.03*Math.sin(2*s+1),t.squash=mT,t.elbows=1,St(t.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),St(t.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),St(t.footL,i.fx+.08,0,.12),St(t.footR,-i.fx-.08,0,.12),t}function Ng(n,e,t,i){let s=Tn(n),r=i/ft[t].duration,o=Math.sin(Dn*r);return e.hipsY+=.012*Math.cos(2*Dn*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function gT(n,e,t){return Dg(0,e,t),Ng(e,t,"coverLowMove",n),t}function Df(n,e,t){let i=Tn(e),s=Dn*n/ft.coverTall.duration;return t.hipsY=e.hipHeight-.012+.006*Math.sin(s),t.lean=.07+.01*Math.sin(s+.4),t.twist=.02*Math.sin(s+.6),t.headYaw=.05*Math.sin(s),t.headPitch=0+.02*Math.sin(2*s+1),t.squash=1+.006*Math.sin(s),t.elbows=1,Jn(e,t,i.sx+.14,i.sy+0,.31,t.handL),Jn(e,t,-i.sx-.14,i.sy+0,.31,t.handR),St(t.footL,i.fx,0,.015),St(t.footR,-i.fx,0,-.015),t}function xT(n,e,t){return Df(0,e,t),Ng(e,t,"coverTallMove",n),t}function vT(n,e,t){return Lg(n*(ft.aim.duration/ft.coverPop.duration),e,t),t.hipsY-=.07,t.lean+=.06,t.footL[2]+=.04,t.footR[2]-=.04,t.footL[0]+=.04,t.footR[0]-=.04,t}function _T(n,e,t){let i=n/ft.vault.duration,s=dr(i,0,.3,.7,1),r=Tn(e);Vh(0,e,Fn);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Fn.hipsY,e.hipHeight-.02),t.lean=o(Fn.lean,.55),t.twist=0,t.headYaw=0,t.headPitch=o(Fn.headPitch,-.25),t.squash=1,t.elbows=1;for(let a=-1;a<=1;a+=2){let l=mo(t,a),c=mo(Fn,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?t.footL:t.footR,d=a>0?Fn.footL:Fn.footR;h[0]=o(d[0],a*(r.fx+.04)),h[1]=o(d[1],.55),h[2]=o(d[2],.3)}return t}var yT=.17,bT=.5,MT=-.9,ST=.82;function wT(n,e,t){let i=Tn(e),s=Dn*n/ft.coverBlindLow.duration;return t.hipsY=yT+.006*Math.sin(s),t.lean=bT+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=MT+.03*Math.sin(2*s+1),t.squash=ST,t.elbows=1,Ga(e,t,e.shoulderR,As),St(t.handR,As[0]-.02,As[1]+.44+.008*Math.sin(s+.4),As[2]+.12),St(t.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),St(t.footL,i.fx+.08,0,.12),St(t.footR,-i.fx-.08,0,.12),t}function Cg(n,e,t,i){Df(n*(ft.coverTall.duration/ft.coverBlindTallL.duration),e,t);let s=Tn(e);return Jn(e,t,i*(s.sx+.4),s.sy,.2,i>0?t.handL:t.handR),t}var TT=.3,ET=1.2,Bh=[.4,.62],zh=[-.6,-.36];function Hh(n,e,t,i,s,r){if(n-=Math.floor(n),n<.5)return r[0]=s,r[1]=e+(t-e)*(n/.5),r;let o=(n-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=t+(e-t)*(o*o*(3-2*o)),r}function AT(n,e,t){let i=Tn(e),s=n/ft.crawl.duration,r=Dn*s;return t.hipsY=TT+.012*Math.cos(2*r),t.lean=ET+.03*Math.cos(2*r),t.twist=.1*Math.sin(r),t.headYaw=-.1*Math.sin(r),t.headPitch=-.75,t.squash=1,t.elbows=1,Hh(s,Bh[1],Bh[0],.16,.04,ln),St(t.handL,i.sx+.12,ln[0],ln[1]),Hh(s+.5,Bh[1],Bh[0],.16,.04,ln),St(t.handR,-i.sx-.12,ln[0],ln[1]),Hh(s,zh[1],zh[0],.16,0,ln),St(t.footR,-i.fx-.02,ln[0],ln[1]),Hh(s+.5,zh[1],zh[0],.16,0,ln),St(t.footL,i.fx+.02,ln[0],ln[1]),t}function po(n,e,t){let i=e.length;if(n<=e[0][0])return St(t,e[0][1],e[0][2],e[0][3]);for(let r=0;r<i-1;r++){let o=e[r],a=e[r+1];if(n<a[0]){let l=Ei(o[0],a[0],n);return St(t,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l,o[3]+(a[3]-o[3])*l)}}let s=e[i-1];return St(t,s[1],s[2],s[3])}var RT=.4,CT=.9;function PT(n,e,t){let i=Tn(e),s=n/ft.revive.duration,r=Dn*s;return t.hipsY=RT+.012*Math.sin(2*r),t.lean=CT+.05*Math.sin(2*r),t.twist=.04*Math.sin(r),t.headYaw=.04*Math.sin(r),t.headPitch=-.55,t.squash=1,t.elbows=1,St(t.handL,i.sx-.06,.37-.06*Math.sin(r),.64),St(t.handR,-i.sx+.06,.37+.06*Math.sin(r),.64),St(t.footL,i.fx+.06,0,-.32),St(t.footR,-i.fx-.06,0,-.32),t}var IT=[[0,-.3,1,.3],[.17,-.29,1.08,.08],[.33,-.23,1.17,.5],[.55,-.23,1.17,.5],[1,-.3,1,.3]],LT=[[0,.1,0,0],[.17,-.05,0,0],[.33,.15,0,0],[.55,.15,0,0],[1,.1,0,0]],DT=[[0,0,0,0],[.17,-.3,0,0],[.33,.3,0,0],[.55,.25,0,0],[1,0,0,0]],wn=[0,0,0];function NT(n,e,t){let i=Tn(e),s=n/ft.bash.duration;return po(s,LT,wn),t.lean=wn[0],po(s,DT,wn),t.twist=wn[0],t.hipsY=e.hipHeight-.09-.03*dr(s,.2,.33,.55,.9),t.headYaw=-.5*t.twist,t.headPitch=-.1,t.squash=1,t.elbows=1,po(s,IT,wn),Jn(e,t,wn[0],wn[1],wn[2],t.handR),Jn(e,t,i.sx+.14,i.sy-.1,.32,t.handL),St(t.footL,i.fx+.04,0,-.14),St(t.footR,-i.fx-.04,0,.2),t}var OT=[[0,-.3,1,.3],[.3,-.31,1.38,-.12],[.4,-.22,1.6,.04],[.6,-.2,1.22,.5],[.9,-.15,.98,.46],[1,-.3,1,.3]],UT=[[0,.1,0,0],[.3,-.2,0,0],[.4,-.28,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,.1,0,0]],FT=[[0,-.1,0,0],[.3,-.45,0,0],[.4,-.45,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,-.1,0,0]];function kT(n,e,t){let i=Tn(e),s=n/ft.throw.duration;return po(s,UT,wn),t.lean=wn[0],po(s,FT,wn),t.twist=wn[0],t.hipsY=e.hipHeight-.07-.03*dr(s,.4,.6,.9,1),t.headYaw=-.4*t.twist,t.headPitch=-.05,t.squash=1,t.elbows=1,po(s,OT,wn),Jn(e,t,wn[0],wn[1],wn[2],t.handR),Jn(e,t,i.sx+.2,i.sy-.12-.08*Ei(.5,.9,s),.34-.12*Ei(.5,.9,s),t.handL),St(t.footL,i.fx+.04,0,.1+.06*Ei(.4,.7,s)),St(t.footR,-i.fx-.04,0,-.16),t}var BT=.05;function Zt(n,e,t,i=BT){return Object.freeze({duration:n,loop:e,ease:i,sample:(s,r,o=Ai())=>t(s,r,o)})}var ft=Object.freeze({idle:Zt(2.4,!0,Vh),run:Zt(.56,!0,Ig,.008),aim:Zt(1.6,!0,Lg),flinch:Zt(Lf,!1,cT),talk:Zt(2.4,!0,hT),roll:Zt(.55,!1,uT,.02),sprint:Zt(.56,!0,dT,.008),coverLow:Zt(2.4,!0,Dg),coverLowMove:Zt(.5,!0,gT),coverTall:Zt(2.4,!0,Df),coverTallMove:Zt(.5,!0,xT),coverPop:Zt(1.6,!0,vT),vault:Zt(.5,!1,_T,.02),coverBlindLow:Zt(1.6,!0,wT),coverBlindTallL:Zt(1.6,!0,(n,e,t)=>Cg(n,e,t,1)),coverBlindTallR:Zt(1.6,!0,(n,e,t)=>Cg(n,e,t,-1)),crawl:Zt(1,!0,AT),revive:Zt(.5,!0,PT),bash:Zt(.45,!1,NT,.02),throw:Zt(.5,!1,kT,.02)}),Ri=Gh/ft.run.duration;function Va(n,e,t,i){let s=Object.prototype.hasOwnProperty.call(ft,n)?ft[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,t,i||Ai())}function Wh(n,e,t,i=Ai()){if(!(t>0))return Ag(n,i);if(t>=1)return Ag(e,i);let s=1-t;i.hipsY=n.hipsY*s+e.hipsY*t,i.lean=n.lean*s+e.lean*t,i.twist=n.twist*s+e.twist*t,i.headYaw=n.headYaw*s+e.headYaw*t,i.headPitch=n.headPitch*s+e.headPitch*t,i.squash=n.squash*s+e.squash*t,i.elbows=n.elbows*s+e.elbows*t;for(let r=0;r<4;r++){let o=n[Ha[r]],a=e[Ha[r]],l=i[Ha[r]];l[0]=o[0]*s+a[0]*t,l[1]=o[1]*s+a[1]*t,l[2]=o[2]*s+a[2]*t}return i}var zT=.05,os=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Wa=["handL","handR","footL","footR"],Nf=os.length+Wa.length*3,go=[.35,-.2,-.8],Of=[.75,-.85,-.15];function Yt(n,e){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let t=new Je(e),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new Mt(s,3)),n}var HT=new pt,jn=(n,e,t,i,s=0,r=0,o=0,a=1,l=1,c=1)=>n.applyMatrix4(HT.compose(new z(e,t,i),new Cn().setFromEuler(new On(s,r,o)),new z(a,l,c)));function fr(n=20,e=14){let t=new Xt(1,n,e);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),dg(t)}function Uf(n,e,t){let i=fr(e,t),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function Yh(n,e,t){let i=e[0]-n[0],s=e[1]-n[1],r=e[2]-n[2],o=Math.hypot(i,s,r),a=new Wt(t,t,o,6,1),l=new Cn().setFromUnitVectors(new z(0,1,0),new z(i/o,s/o,r/o));return a.applyMatrix4(new pt().compose(new z((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),l,new z(1,1,1))),a}function qh(n,e){let t=zt(n,!1);if(!t)throw new Error(`rig: could not merge the ${e} parts`);Xn(t),t.computeBoundingSphere();let i=new at(t,Ct({color:"#ffffff",vertexColors:!0}));return i.name=e,dn(i),i}function Ff(n,e,t,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*n.rx,s[1]=o(t)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function GT(n){let e=n.torso,t=n.colors,i=n.outfit,s=(h,d)=>{let u=new ba(h.map(([f,p])=>new He(f,p)),22);return u.scale(1,1,e.depth),Yt(u,d)},r=[s(e.pants,t.pants),s(e.shirt,t.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let d=e.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=n.shoulderL[1]-n.hipHeight;for(let h of[-1,1]){let d=fr(14,10);jn(d,h*Math.abs(n.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),d.computeVertexNormals(),r.push(Yt(d,t.shirt))}if(i.collar){let h=new rr(.1,.03,8,20);jn(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Yt(h,t.collar))}if(i.logo){let u=new Wt(.03,.03,.01,12);jn(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Yt(u,t.logo))}if(i.lanyard){let d=l(0,.15)+.012;for(let p of[-1,1]){let g=[p*.075,o-.03,.085],m=[p*.05,.34,l(.05,.34)+.014],x=[p*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Yt(Yh(g,m,.008),t.lanyard),Yt(Yh(m,x,.008),t.lanyard))}let u=new mt(.075,.1,.014);jn(u,0,.15,d,-.05,0,.04);let f=new mt(.077,.026,.016);jn(f,0,.15+.028,d,-.05,0,.04),r.push(Yt(u,t.badge),Yt(f,t.badgeStripe))}return qh(r,"torso")}function VT(n){let e=n.head,t=n.hair,i=n.colors,s=n.outfit,r=[],o=Uf((a,l,c,h)=>Ff(e,a,l,c,h),40,28);r.push(Yt(o,i.skin),Yt(WT(e,t),i.hair));for(let a of[-1,1]){let l=fr(12,8);jn(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(Yt(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,c=fr(12,8);jn(c,0,l,XT(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(Yt(c,i.skin))}if(s.headset){let a=e.ry+t.thickness+.03,l=new In;l.getPoint=(g,m=new z)=>m.set(Math.cos(Math.PI*g)*(e.rx+t.thickness+.012),Math.sin(Math.PI*g)*a,0);let c=new Ma(l,24,.014,6,!1);jn(c,0,0,-.03,-.12,0,0),r.push(Yt(c,i.headset));for(let g of[-1,1]){let m=new Wt(.055,.06,.05,14);jn(m,g*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Yt(m,i.headset))}let h=n.face,d=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(Yt(Yh(d,u,.009),i.headset),Yt(Yh(u,f,.009),i.headset));let p=fr(10,8);jn(p,f[0],f[1],f[2],0,0,0,.022,.02,.022),p.computeVertexNormals(),r.push(Yt(p,i.mic))}return qh(r,"headMesh")}var Rs=48,Xh=12;function WT(n,e){let t=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,i=[0,0,0],s=_h.smoothstep,r=[],o=(u,f,p)=>{let g=Math.sin(u)*Math.sin(f),m=Math.cos(u),x=Math.sin(u)*Math.cos(f);Ff(n,g,m,x,i);let v=i[0]/(n.rx*n.rx),w=i[1]/(n.ry*n.ry),b=i[2]/(n.rz*n.rz),S=Math.hypot(v,w,b)||1;v/=S,w/=S,b/=S;let M=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(x+.3,0),_=e.quiff?e.lift*Math.max(x,0)*s(i[1],.12,.26)*(1-.5*g):0,y=e.back*Math.max(-x,0)*s(i[1],-.15,.1),P=p?-.01:e.thickness*(1-.55*Math.min(M,1))+_+y;r.push(i[0]+v*P,i[1]+w*P,i[2]+b*P)},a=u=>{let f=0,p=Math.PI;for(let g=0;g<40;g++){let m=(f+p)/2,x=Math.sin(m)*Math.sin(u),v=Math.sin(m)*Math.cos(u);Ff(n,x,Math.cos(m),v,i),i[1]>t(x,v)?f=m:p=m}return f};o(0,0,!1);let l=[];for(let u=0;u<Rs;u++)l.push(a(u/Rs*Math.PI*2));for(let u=1;u<=Xh+1;u++)for(let f=0;f<Rs;f++){let p=f/Rs*Math.PI*2,g=u>Xh;o(g?l[f]+.03:l[f]*(u/Xh),p,g)}let c=(u,f)=>1+(u-1)*Rs+f%Rs,h=[];for(let u=0;u<Rs;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=Xh;u++)for(let f=0;f<Rs;f++){let p=c(u,f),g=c(u,f+1),m=c(u+1,f),x=c(u+1,f+1);h.push(p,m,x,p,x,g)}let d=new Et;return d.setAttribute("position",new ut(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function XT(n,e,t){let i=1-Math.pow(Math.abs(e/n.rx),n.power)-Math.pow(Math.abs(t/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function Og(n,e){let t=n.hand.radius,i=n.colors,s=fr(14,10);jn(s,0,t*.75,0,0,0,0,t*.78,t*1.1,t*.95),s.computeVertexNormals();let r=fr(10,8);return jn(r,t*.3,t*.45,e*t*.75,e*-.6,0,.3,t*.34,t*.55,t*.34),r.computeVertexNormals(),qh([Yt(s,i.skin),Yt(r,i.skin)],e>0?"handL":"handR")}function Ug(n,e){let t=n.shoe,i=n.colors,s=t.width/2,r=t.length/2,o=t.length*.18,a=.03,l=Uf((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,t.height*.55+d*t.height*.6-Math.max(u,0)*t.height*.25),f[2]=o+u*r*.96},20,12),c=Uf((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return qh([Yt(l,i.shoe),Yt(c,i.sole)],e>0?"footL":"footR")}function Ci(n){let e=new dt;e.name=n.name||"character";let t=new dt;t.name="body",e.add(t);let i=new dt;i.name="hips",i.rotation.order="YXZ";let s=GT(n);i.add(s);let r=new dt;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=VT(n);o.position.y=n.head.centerY,r.add(o);let a=Eg({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),t.add(i);let l=[Og(n,1),Og(n,-1)],c=[Ug(n,1),Ug(n,-1)],h=[0,1].map(()=>Af({radius:n.armRadius,color:n.colors.skin})),d=[0,1].map(()=>Af({radius:n.legRadius,color:n.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",t.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=Lh({rx:.45,rz:.38,opacity:.55});e.add(u);let f=Ai(),p=Ai(),g=[];for(let U=0;U<Nf;U++)g.push({x:0,v:0});let m=!1,x=zT,v=(U,le)=>le<os.length?U[os[le]]:U[Wa[(le-os.length)/3|0]][(le-os.length)%3];function w(U,le,be){le<os.length?U[os[le]]=be:U[Wa[(le-os.length)/3|0]][(le-os.length)%3]=be}function b(U,le){le>=0&&(x=le),f.hipsY=U.hipsY,f.lean=U.lean,f.twist=U.twist,f.headYaw=U.headYaw,f.headPitch=U.headPitch,f.squash=U.squash,f.elbows=U.elbows>=0?U.elbows:0;for(let be=0;be<4;be++){let H=U[Wa[be]],oe=f[Wa[be]];oe[0]=H[0],oe[1]=H[1],oe[2]=H[2]}if(!m){m=!0;for(let be=0;be<Nf;be++)g[be].x=v(f,be),g[be].v=0}}let S=[0,0,0],M=[0,0,0],_=[0,0,0],y=[0,0,0],P={mid:[0,0,0],end:[0,0,0],stretch:1},R=new z,I=new z,A=new z,L=new pt,E=n.armLength/2,N=n.legLength/2,k=n.ankleHeight;function W(U,le,be){let H=Math.cos(p.twist),oe=Math.sin(p.twist);y[0]=U*H+be*oe,y[1]=le,y[2]=-U*oe+be*H}function te(){let U=p.squash>.2?p.squash:.2,le=1/Math.sqrt(U);t.scale.set(le,U,le),i.position.set(0,p.hipsY,0),i.rotation.set(p.lean,p.twist,0),r.rotation.set(p.headPitch,p.headYaw,0);for(let be=0;be<2;be++){let H=be===0?1:-1;Ga(n,p,be===0?n.shoulderL:n.shoulderR,S);let oe=p.elbows<0?0:p.elbows>1?1:p.elbows;W(H*(go[0]+(Of[0]-go[0])*oe),go[1]+(Of[1]-go[1])*oe,go[2]+(Of[2]-go[2])*oe),Ef(S,be===0?p.handL:p.handR,E,E,y,P),h[be].set(S,P.mid,P.end,P.stretch);let we=l[be];we.position.set(P.end[0],P.end[1],P.end[2]),R.set(P.end[0]-P.mid[0],P.end[1]-P.mid[1],P.end[2]-P.mid[2]),R.lengthSq()<1e-10&&R.set(0,-1,0),R.normalize(),I.set(-H*Math.cos(p.twist),0,H*Math.sin(p.twist)),I.addScaledVector(R,-I.dot(R)),I.lengthSq()<1e-4&&I.set(0,0,1).addScaledVector(R,-R.z),I.normalize(),A.crossVectors(I,R),L.makeBasis(I,R,A),we.quaternion.setFromRotationMatrix(L),Ga(n,p,be===0?n.hipL:n.hipR,M);let de=be===0?p.footL:p.footR;_[0]=de[0],_[1]=de[1]+k,_[2]=de[2],W(H*.15,0,1),Ef(M,_,N,N,y,P),d[be].set(M,P.mid,P.end,P.stretch);let re=c[be];re.position.set(P.end[0],P.end[1]-k,P.end[2]),re.rotation.set(Math.min(Math.max(P.end[1]-k,0),.3)*1.1,p.twist*.3,0)}}function Y(U){if(m)for(let le=0;le<Nf;le++)Ln(g[le],v(f,le),x,U),w(p,le,g[le].x);te(),a.update(U)}Va("idle",0,n,p),te();function J(){e.traverse(U=>{!U.isMesh||U.userData.isOutline||(U.geometry.dispose(),U!==u&&U.material.dispose())}),e.removeFromParent()}return{root:e,spec:n,face:a,setPose:b,update:Y,dispose:J,shadow:u}}var YT=.15,qT=.03,Fg=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function Pi(n){let e=n.spec,t="idle",i=0,s="idle",r=0,o=0,a=ft[t].ease,l=Ai(),c=Ai(),h=Va(t,0,e);Wh(h,h,1,l);function d(p,{fade:g,at:m}={}){Object.prototype.hasOwnProperty.call(ft,p)&&(p===t&&ft[p].loop||(p==="flinch"&&t!=="flinch"&&(s=t),Wh(h,h,1,l),a=u(),r=g===void 0?p==="flinch"?qT:YT:Math.max(g,0),o=0,t=p,i=Number.isFinite(m)&&m>0?m:0,n.face.setTalking(p==="talk")))}function u(){let p=r>0?Fg(o/r):1;return a+(ft[t].ease-a)*p}function f(p,g=p){let m=ft[t];if(i+=p,o+=g,m.loop)i>=m.duration&&(i-=m.duration*Math.floor(i/m.duration));else if(i>=m.duration)return d(s),f(0);Va(t,i,e,c),Wh(l,c,r>0?Fg(o/r):1,h),n.setPose(h,u())}return{play:d,update:f,current:()=>t}}function $h(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*t)<<o}return"#"+r.toString(16).padStart(6,"0")}function kg(n){for(let e of Object.values(n))e&&typeof e=="object"&&kg(e);return Object.freeze(n)}var kf=q.glorpPurple,Ut=kg({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:kf,collar:$h(kf,q.ink,.25),logo:q.gel,pants:$h(q.planet,q.ink,.3),skin:q.daleSkin,hair:q.daleHair,shoe:$h(q.ink,kf,.3),sole:q.cream,lanyard:q.hotPink,badge:q.cream,badgeStripe:q.teal,headset:$h(q.ink,q.lilac,.25),mic:q.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var $T=1.5,ZT=8,KT=-.2,JT=1.3,Bg=.6,jT=Math.atan2(1.3,-4),QT=new z(-.45,.22,-1).applyEuler(new On(-.2,.68,0)).toArray(),zg=10,eE=.8,tE=.05,nE=["idle","run","aim","flinch","talk"],Xa=Object.keys(ur),Hg=(n,e,t)=>Math.min(t,Math.max(e,n));function iE(n,e,t,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(e)*t,i[1]=Math.sin(e)*t,i[2]=Math.cos(n)*Math.cos(e)*t,i}function sE(n,e,t=K.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[n[0]+r*t.right-i*t.back,n[1]+t.up,n[2]+o*t.right-s*t.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Gg({canvas:n,gl:e}){let t=Rh(n,e),i=t.renderer,s=Ah(n),r=document.getElementById("cr-readout"),o=new js,a=new un(K.camera.fov,1,.1,100),l=Ch({planetDir:QT});o.add(l.mesh);let c=Mg();o.add(c.group);let h=[];function d(re,Oe,De){let Me=Ci(De===void 0?Ut:{...Ut,face:{...Ut.face,seed:De}});Me.root.position.set(re,0,Oe),Me.root.rotation.y=Bg,o.add(Me.root);let Ae=Pi(Me),Te={rig:Me,anim:Ae};return h.push(Te),Te}let u=d(c.spawn[0],c.spawn[2]),f=[],p=!1,g=0,m=!0,x=!1,v=.685,w=.1,b=4.6,S=!1,M=new z(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),_=[0,0,0];function y(re){if(!(!nE.includes(re)&&!Object.prototype.hasOwnProperty.call(ft,re))){u.anim.play(re);for(let Oe of f)Oe.anim.play(p?"run":re)}}function P(re){let Oe=Xa.indexOf(re);if(!(Oe<0)){g=Oe;for(let De of h)De.rig.face.setExpression(re)}}function R(re){m=!!re,_f(o,m)}function I(re){x=!!re,u.rig.root.rotation.y=x?jT:Bg}function A(re){if(re=!!re,re!==p)if(p=re,re){let Oe=c.spawn[2]+2.4;for(let De=0;De<zg;De++){let Me=c.spawn[0]+(De-(zg-1)/2)*eE,Ae=d(Me,Oe,10+De);Ae.anim.play("run"),Ae.rig.face.setExpression(Xa[g]),f.push(Ae)}_f(o,m)}else{for(let Oe of f)Oe.rig.dispose(),h.splice(h.indexOf(Oe),1);f=[]}}function L(){let re=t.resize();a.aspect=re.aspect,a.updateProjectionMatrix()}L(),window.addEventListener("resize",L),n.addEventListener("mousedown",re=>{re.button===0&&(S=!0)}),window.addEventListener("mouseup",()=>{S=!1}),window.addEventListener("mousemove",re=>{S&&!s.isLocked()&&E(re.movementX||0,re.movementY||0,.006)}),n.addEventListener("wheel",re=>{b=Hg(b*Math.exp(re.deltaY*.001),$T,ZT)},{passive:!0});function E(re,Oe,De){v-=re*De,w=Hg(w+Oe*De,KT,JT)}window.addEventListener("keydown",re=>{re.repeat||(re.code==="Digit4"?y("flinch"):re.code==="Digit5"?y("talk"):re.code==="KeyO"?R(!m):re.code==="KeyP"?A(!p):re.code==="KeyL"?s.requestLock():re.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let N=0,k=0,W=0,te=0,Y=0,J=0,U=null,le=0;window.__cr.stats=()=>({fps:N,ms:k,calls:Y,tris:J,scale:t.scale(),characters:h.length}),window.__cr.anim=y,window.__cr.orbit=(re,Oe,De)=>{v=re,w=Oe,De&&(b=De)},window.__cr.expression=P,window.__cr.perf=A,window.__cr.gameCam=I,window.__cr.outlines=R;function be(re){re.pressed.weapon1&&y("idle"),re.pressed.weapon2&&y("run"),re.pressed.weapon3&&y("aim"),re.pressed.interact&&P(Xa[(g+1)%Xa.length]),re.pressed.grenade&&I(!x)}function H(){if(x){let re=sE([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(re.pos),a.lookAt(re.look[0],re.look[1],re.look[2])}else iE(v,w,b,_),a.position.set(M.x+_[0],M.y+_[1],M.z+_[2]),a.lookAt(M)}let oe=re=>re.toFixed(2);function we(){let re=U?Object.keys(U.held).filter(Me=>U.held[Me]).join(" "):"",Oe=s.padStatus(),De=U&&Oe!=="none"&&Oe!=="unrecognised controller"?`Gamepad: ${Oe}
  move ${oe(U.moveX)}, ${oe(U.moveY)}  look ${oe(U.lookX)}, ${oe(U.lookY)}
  held: ${re||"nothing"}`:`Gamepad: ${Oe}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${Xa[g]}   camera: ${x?"game":"orbit"}   outlines: ${m?"on":"off"}`,`${Math.round(N)} fps   ${oe(k)} ms   scale ${t.scale()}`,`${Y} draw calls   ${J} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${U?Math.round(U.lookDX):0}, ${U?Math.round(U.lookDY):0}`,De].join(`
`)}let de=Eh({step(){},render(re,Oe){let De=Math.min(Oe,tE);U=s.poll(),be(U),s.isLocked()&&!x&&E(U.lookDX,U.lookDY,.003),x||E(U.lookX*600*De,U.lookY*600*De,.004),l.update(performance.now()/1e3),c.update(De);for(let Me of h)Me.anim.update(De),Me.rig.update(De);H(),i.render(o,a),Y=i.info.render.calls,J=i.info.render.triangles,W++,te+=Oe,te>=1&&(N=W/te,k=te/W*1e3,W=0,te=0),le+=Oe,le>=.1&&(le=0,we()),t.frameDone(Oe*1e3)}});H(),i.render(o,a),Y=i.info.render.calls,J=i.info.render.triangles,we(),de.start()}function Zh(){let n=!1,e=0,t=.18;return{update(i,s,r,o){return t=o,n?(e+=r,i?!1:(n=!1,e<=o)):s?i?(n=!0,e=r,!1):!0:!1},holding(){return n&&e>t},reset(){n=!1,e=0}}}function vt(n,e,t="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...e]),kind:t})}var Bf=1e-9;function kn(n,e,t,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=n.filter(m=>m.max[1]>o&&m.min[1]<a),c=Math.hypot(t[0],t[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=t[0]/h,u=t[2]/h,f=!1,p=0,g=0;for(let m=0;m<h;m++){let x=r[0],v=r[2];r[0]+=d,r[2]+=u;let w=!1;for(let b=0;b<5;b++){let S=null,M=Bf;for(let _ of l){let y=Math.max(_.min[0],Math.min(r[0],_.max[0])),P=Math.max(_.min[2],Math.min(r[2],_.max[2])),R=r[0]-y,I=r[2]-P,A=Math.hypot(R,I),L,E,N;if(A>Bf){if(A>=i)continue;L=i-A,E=R/A,N=I/A}else{let k=[[r[0]-_.min[0],-1,0],[_.max[0]-r[0],1,0],[r[2]-_.min[2],0,-1],[_.max[2]-r[2],0,1]],W=k[0];for(let te of k)te[0]<W[0]&&(W=te);L=W[0]+i,E=W[1],N=W[2]}L>M&&(M=L,S=[E,N])}if(!S){w=!0;break}if(b===4)break;r[0]+=S[0]*M,r[2]+=S[1]*M,f=!0,p=S[0],g=S[1]}w||(r[0]=x,r[2]=v,f=!0)}return f||(r[0]=e[0]+t[0],r[2]=e[2]+t[2]),{pos:r,hit:f,normal:[p,0,g]}}function Qn(n,e,t,i){let s=1,r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];for(let o of n){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<Bf)(e[h]<d||e[h]>u)&&(c=!1);else{let f=(d-e[h])/r[h],p=(u-e[h])/r[h];if(f>p){let g=f;f=p,p=g}f>a&&(a=f),p<l&&(l=p),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function xo(n,e,t=0){for(let i of n)if(e[0]>=i.min[0]-t&&e[0]<=i.max[0]+t&&e[1]>=i.min[1]-t&&e[1]<=i.max[1]+t&&e[2]>=i.min[2]-t&&e[2]<=i.max[2]+t)return!0;return!1}var zf=["fov","right","up","back"],Kh=Math.PI*2,rE=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),Xg=n=>n!=="normal"&&rE.includes(n);function Vg(n,e,t={}){let i=Xg(e)&&n[e]&&typeof n[e]=="object"?n[e]:null;for(let s of zf)t[s]=i&&i[s]!==void 0?i[s]:n[s];return t}function Wg(n,e){let t=Xg(e)?n[e]:null;return t&&typeof t=="object"&&t.shakeWeight>0?t.shakeWeight:0}function Yg(n,e,t,i=0){return e?n>=t:n>=t+i}function qg({tuning:n=K.camera,look:e=K.look}={}){let t={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],c={x:0,v:0},h=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],d={},u=[0,0,0],f=[0,0,0],p=[0,0,0],g=[0,0,0],m=[0,0,1],x={pos:g,dir:m,fov:70},v={on:!1,t:0,p:[0,0,0]},w=1,b=0,S=!1;return{yaw:0,pitch:0,look(_,y,P,R,I,A,L=1){(_||y||P||R)&&(v.on=!1);let E=A?e.aimScale:1,N=e.invertY?-1:1;this.yaw-=_*e.mouse*E,this.pitch-=y*e.mouse*E*N;let k=e.pad,W=E*L;P&&(this.yaw-=Math.sign(P)*Math.abs(P)**k.expo*k.yawRate*W*I),R&&(this.pitch-=Math.sign(R)*Math.abs(R)**k.expo*k.pitchRate*W*I*N),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(_=1){let y=n.bump;if(!y||!(y.amount>0)||!(_>0))return;s.x=Math.min(s.x+y.amount*_,2*y.amount);let P=n.slamShake;P&&P.amount>0&&P.time>0&&(o.t=P.time,o.amp=P.amount*_)},dip(_){Number.isFinite(_)&&_>0&&(r.x=Math.min(r.x+_,.1))},kick(_,y=0){let P=n.recoil?n.recoil.max:0;if(!(P>0))return;let R=(I,A)=>Math.max(-P,Math.min(P,I+(Number.isFinite(A)?A:0)));a.p.x=Math.max(0,R(a.p.x,_)),a.y.x=R(a.y.x,y)},hold(_){if(!(n.holdTime>0)){v.on=!1;return}v.on=!0,v.t=n.holdTime,v.p[0]=_[0],v.p[1]=_[1],v.p[2]=_[2]},holding(){return v.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(_,y,P="normal",R=1){y!==void 0&&(this.yaw=y),Vg(n,P,d);for(let I of zf)t[I].x=d[I],t[I].v=0;i.x=R,i.v=0,c.x=Wg(n,P),c.v=0;for(let I=0;I<3;I++)h[I].x=_[I],h[I].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,w=1,S=!0,v.on=!1},update(_,{target:y,mode:P="normal",side:R=1},I){S||this.snap(y,this.yaw,P,R),_>0||(_=0),b+=_,Vg(n,P,d);for(let U of zf)Ln(t[U],d[U],n.blendHalfLife,_);Ln(c,Wg(n,P),n.blendHalfLife,_),Ln(i,R,n.sideHalfLife,_);for(let U=0;U<3;U++)Ln(h[U],y[U],n.followHalfLife,_);Ln(s,0,n.bump?n.bump.halfLife:0,_),Ln(r,0,n.bump?n.bump.halfLife:0,_);let A=n.recoil?n.recoil.halfLife:0;Ln(a.p,0,A,_),Ln(a.y,0,A,_);let L=Math.PI/180,E=n.probeRadius,N=t.back.x,k=1,W=0,te=U=>{let le=this.yaw+a.y.x*L,be=Math.max(n.pitchMin,Math.min(n.pitchMax,this.pitch+a.p.x*L));W=Math.sin(le),k=Math.cos(le);let H=Math.sin(be),oe=Math.cos(be);u[0]=h[0].x,u[1]=h[1].x+t.up.x,u[2]=h[2].x,l[0]=y[0],l[1]=y[1]+t.up.x,l[2]=y[2];let we=Qn(I,l,u,E);if(we<1)for(let Te=0;Te<3;Te++)u[Te]=l[Te]+(u[Te]-l[Te])*we;let de=t.right.x*i.x;f[0]=u[0]-k*de,f[1]=u[1],f[2]=u[2]+W*de;let re=Qn(I,u,f,E);for(let Te=0;Te<3;Te++)f[Te]=u[Te]+(f[Te]-u[Te])*re;m[0]=W*oe,m[1]=H,m[2]=k*oe;for(let Te=0;Te<3;Te++)p[Te]=f[Te]-m[Te]*N;let Oe=Qn(I,f,p,E),De=N>1e-6?Math.max(n.minBack/N,Oe):1;De>1&&(De=1),De<w?w=De:U&&(w+=(De-w)*(n.wallReturnHalfLife>0?1-Math.pow(2,-_/n.wallReturnHalfLife):1));let Me=N*w-s.x;for(let Te=0;Te<3;Te++)g[Te]=f[Te]-m[Te]*Me;let Ae=Qn(I,u,g,E);if(Ae<1)for(let Te=0;Te<3;Te++)g[Te]=u[Te]+(g[Te]-u[Te])*Ae};if(te(!0),v.on)if(v.t-=_,v.t<=0||P!=="aim")v.on=!1;else for(let U=0;U<3;U++){let le=v.p[0]-g[0],be=v.p[1]-g[1],H=v.p[2]-g[2],oe=Math.hypot(le,be,H);if(oe<.5)break;this.yaw=Math.atan2(le,H)-a.y.x*L,this.pitch=Math.max(n.pitchMin,Math.min(n.pitchMax,Math.asin(be/oe)-a.p.x*L)),te(!1)}let Y=n.shake;if(Y&&Y.amp&&c.x>0){let U=Y.amp*(c.x>1?1:c.x),le=Math.sin(Kh*Y.hz*b)*U,be=Math.sin(Kh*Y.hz*1.3*b+1)*U,H=-k,oe=W;g[0]+=H*le-oe*m[1]*be,g[1]+=(oe*m[0]-H*m[2])*be,g[2]+=oe*le+H*m[1]*be}g[1]-=r.x;let J=n.slamShake;if(o.t>0&&J&&J.time>0){o.t=Math.max(0,o.t-_);let U=o.t/J.time,le=o.amp*U*U,be=Math.sin(Kh*J.hz*o.t)*le,H=Math.sin(Kh*J.hz*1.27*o.t+2)*le,oe=-k,we=W;g[0]+=oe*be-we*m[1]*H,g[1]+=(we*m[0]-oe*m[2])*H,g[2]+=we*be+oe*m[1]*H}return x.fov=t.fov.x,x}}}var Cs=[q.hotPink,q.playerOrange,q.glorpPurple,q.tealLight,q.lilac];function oE(n){let e=n.max[0]-n.min[0],t=n.max[2]-n.min[2],i=n.max[1]-n.min[1],s=Math.max(e,t),r=Math.min(e,t);return n.kind==="pillar"?"pillar":n.kind==="low"?r<.7&&s>=1.8?"planter":"counter":n.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function aE(){let n=[],e=(t,i)=>{let s=new Je(i),r=t.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return t.setAttribute("color",new Mt(o,3)),t};return{list:n,box(t,i,s){let r=new mt(i[0]-t[0],i[1]-t[1],i[2]-t[2]);r.translate((t[0]+i[0])/2,(t[1]+i[1])/2,(t[2]+i[2])/2),n.push(e(r,s))},cyl(t,i,s,r,o,a,l="y"){let c=new Wt(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(t,i,s),n.push(e(c,a))},ball(t,i,s,r,o){let a=new Xt(r,7,5);a.translate(t,i,s),n.push(e(a,o))}}}var vo=(n,e,t=n.min[1],i=n.max[1])=>[[n.min[0]-e,t,n.min[2]-e],[n.max[0]+e,i,n.max[2]+e]];function lE(n,e,t,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],d=.015,u=.06;o?(n.box([a+s,t,l+d],[c-s,i,l+u],r),n.box([a+s,t,h-u],[c-s,i,h-d],r)):(n.box([a+d,t,l+s],[a+u,i,h-s],r),n.box([c-u,t,l+s],[c-d,i,h-s],r))}function Ya(n,e){let t=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=t>=i,r=s?t:i,o=s?i:t,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,d,u,f,p,g){let m=a(c,d),x=a(h,u),v=l(c,d),w=l(h,u);n.box([Math.min(m,x),f,Math.min(v,w)],[Math.max(m,x),p,Math.max(v,w)],g)},cyl(c,h,d,u,f,p,g="y"){let m=g==="y"?"y":g==="u"?s?"x":"z":s?"z":"x";n.cyl(a(c,h),d,l(c,h),u,f,p,m)}}}function cE(n,e){let t=Ya(n,e),{len:i,dep:s}=t,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;t.slab(.03,i-.03,.04,s-.04,0,.5,q.shadowTint);for(let l=0;l<=o;l++){let c=l*a;t.slab(c,c+r,.06,s-.06,0,e.max[1],q.lilac),t.slab(c+.03,c+r-.03,0,.07,.8,.94,q.hotPink),t.slab(c+.03,c+r-.03,s-.07,s,.8,.94,q.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;t.slab(c,h,s/2-.03,s/2+.03,.5,.94,q.tealLight),t.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,q.cream)}}function hE(n,e,t){let i=Ya(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,q.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,q.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,q.cream),i.slab(.15,s-.15,0,.06,.25,.6,q.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,q.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let d=(h+.5+c%2*.25)/l*s,u=a===1?r/2:r*(.3+c*.4);i.cyl(d,u,(.82+o-.02)/2,.14,o-.84,Cs[(h+c*2+t)%Cs.length]),i.cyl(d,u,o-.01,.15,.02,q.cream)}}function uE(n,e,t){t%3===1?hE(n,e,t):cE(n,e)}function dE(n,e,t){let i=Ya(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,q.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,q.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,q.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,q.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?q.ink:Cs[(l+t)%Cs.length])}function fE(n,e,t){let i=Ya(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,q.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,q.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,q.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let d=0;d<a;d++)for(let u=0;u<l;u++){let f=(u+.5)/l*s,p=a===1?r/2:r*(.3+d*.4),g=Cs[(u+d+t)%Cs.length];i.cyl(f,p,h,.015,.14,q.cream,"u"),i.cyl(f-.07,p,h,c,.06,g,"u"),i.cyl(f+.07,p,h,c,.06,g,"u")}}function pE(n,e){let t=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=t?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];n.box(...vo({min:e.min,max:o},-.03,e.min[1],o[1]-.1),q.teal),n.box(...vo({min:e.min,max:o},0,o[1]-.1,o[1]),q.cream),lE(n,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,q.hotPink,t);let a=(p,g,m,x,v)=>n.box(t?[e.min[0]+p,m,e.min[2]+.12]:[e.min[0]+.12,m,e.min[2]+p],t?[e.min[0]+g,x,e.max[2]-.12]:[e.max[0]-.12,x,e.min[2]+g],v);a(.3,.7,o[1],o[1]+.06,q.cream),a(.32,.68,o[1]+.06,o[1]+.12,q.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,q.cream);let l=t?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=p=>t?e.min[0]+p:e.min[2]+p;t?n.cyl(c(r-.5),o[1]+.14,l,.06,.28,q.gel):n.cyl(l,o[1]+.14,c(r-.5),.06,.28,q.gel);let h=.14,d=t?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[p,g]of d)t?n.box([p,e.min[1],e.min[2]],[g,i,e.max[2]],q.lilac):n.box([e.min[0],e.min[1],p],[e.max[0],i,g],q.lilac);let u=d[0][1],f=d[1][0];t?(n.box([u,i-.12,e.min[2]],[f,i,e.max[2]],q.lilac),n.box([u,o[1],e.min[2]+.2],[f,i-.12,e.max[2]-.2],q.tealLight)):(n.box([e.min[0],i-.12,u],[e.max[0],i,f],q.lilac),n.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,f],q.tealLight))}function mE(n,e,t){let i=Ya(n,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,q.shadowTint);for(let[h,d]of[[0,a],[s-a,s]])for(let[u,f]of[[0,a],[r-a,r]])i.slab(h,d,u,f,.12,o,q.lilac);i.slab(0,s,0,r,o-.1,o,q.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,q.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,q.cream),i.cyl(s/2,c,l,.025,s+.1,q.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?q.ink:Cs[t%Cs.length],"u")}function gE(n,e){n.box(...vo(e,0,e.min[1],e.max[1]),q.cream),n.box(...vo(e,.05,e.min[1],e.min[1]+.25),q.shadowTint),n.box(...vo(e,.03,e.min[1]+1,e.min[1]+1.12),q.hotPink),n.box(...vo(e,.05,e.max[1]-.25,e.max[1]),q.shadowTint)}function xE(n){if(!n)return[];let[e,,t]=n.min,[i,,s]=n.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,t],max:[h+c/2,l,t+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=t+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function $g(n,e=null){let t=aE();for(let s of xE(e))t.box(s.min,s.max,q.tealLight);let i=0;return n.forEach((s,r)=>{let o=oE(s);o==="counter"?uE(t,s,i++):o==="planter"?(r%2?fE:dE)(t,s,r):o==="desk"?pE(t,s):o==="shelf"?mE(t,s,r):o==="pillar"?gE(t,s):t.box(s.min,s.max,q.lilac)}),zt(t.list,!1)}var Zg=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Zg)),n),Ps=.3,vE=[vt([-12,-1,-12],[12,0,12],"floor"),vt([-12-Ps,0,-12-Ps],[12+Ps,4,-12]),vt([-12-Ps,0,12],[12+Ps,4,12+Ps]),vt([-12-Ps,0,-12],[-12,4,12]),vt([12,0,-12],[12+Ps,4,12]),vt([5,0,-9],[5.3,4,-3]),vt([6.7,0,-9],[7,4,-3]),vt([-11,0,-7.3],[-6,3,-7]),vt([-6.3,0,-11],[-6,3,-7]),vt([-4,0,-3],[-2,1,-2.4],"low"),vt([3,0,3],[3.6,1,5],"low"),vt([-5,0,3],[-3.8,2.2,3.6],"tall"),vt([1,0,-6],[1.6,2.2,-4],"tall"),vt([-9.4,0,.6],[-8.6,4,1.4],"pillar"),vt([8.6,0,3.6],[9.4,4,4.4],"pillar"),vt([-9,0,6.5],[-6,1,7.1],"low"),vt([-4,0,6.5],[-1,1,7.1],"low"),vt([6,0,6],[10,2.2,6.6],"tall"),vt([-12,0,-1],[-10,1,-.4],"low")],Kg=[];for(let n=0;n<=12;n++)Kg.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var jh=Zg({boxes:vE,marks:Kg,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function Hf(n){let e=n.map(t=>{let i=new mt(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);return i.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2),i});return zt(e,!1)}var Is=.03,Ls=.3,Ds=.12,Jh=2;function _E(n=jh){let e=n.boxes.find(c=>c.kind==="floor");if(!e)return[];let[t,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([t,0,i],[s,Ls,i+Is]),l([t,0,r-Is],[s,Ls,r]),l([t,0,i],[t+Is,Ls,r]),l([s-Is,0,i],[s,Ls,r]);for(let c=t+Jh;c<s-.5;c+=Jh)l([c-Ds/2,Ls,i],[c+Ds/2,o,i+Is]),l([c-Ds/2,Ls,r-Is],[c+Ds/2,o,r]);for(let c=i+Jh;c<r-.5;c+=Jh)l([t,Ls,c-Ds/2],[t+Is,o,c+Ds/2]),l([s-Is,Ls,c-Ds/2],[s,o,c+Ds/2]);return a}function Jg(n=jh){let e=new dt,t=n.boxes.find(r=>r.kind==="floor");e.add(Ih({w:t.max[0]-t.min[0],d:t.max[2]-t.min[2]}));let i=n.boxes.filter(r=>r.kind!=="floor");if(i.length){let r=new at(Xn($g(i,t)),Ct({vertexColors:!0}));r.name="grey-props",dn(r),e.add(r)}let s=_E(n);if(s.length){let r=new at(Hf(s),Ct({color:q.shadowTint}));r.name="grey-wall-trim",e.add(r)}if(n.marks.length){let r=new at(Hf(n.marks),Ct({color:q.hotPink}));r.name="grey-marks",e.add(r)}if(n.ammoCrates&&n.ammoCrates.length){let r=[];for(let a of n.ammoCrates)r.push({min:[a.pos[0]-.35,0,a.pos[2]-.25],max:[a.pos[0]+.35,.4,a.pos[2]+.25]}),r.push({min:[a.pos[0]-.39,.4,a.pos[2]-.29],max:[a.pos[0]+.39,.5,a.pos[2]+.29]});let o=new at(Xn(Hf(r)),Ct({color:q.playerOrange}));o.name="grey-crate",dn(o),e.add(o)}if(n.landmark){let r=n.landmark,o=fo({text:r.text,w:r.w,h:r.h});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=Math.PI,e.add(o)}for(let r of n.signs||[]){let o=fo({text:r.text,w:r.w,h:r.h,bg:r.bg,seed:4});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=r.yaw,e.add(o)}return{group:e,boxes:n.boxes,update(r){}}}var jg=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(jg)),n),Ns=.3,Ii=7,Li=15,yE=[vt([-Ii,-1,-Li],[Ii,0,Li],"floor"),vt([-Ii-Ns,0,-Li-Ns],[Ii+Ns,4,-Li]),vt([-Ii-Ns,0,Li],[Ii+Ns,4,Li+Ns]),vt([-Ii-Ns,0,-Li],[-Ii,4,Li]),vt([Ii,0,-Li],[Ii+Ns,4,Li]),vt([-5,0,-9.5],[-3,1,-8.5],"low"),vt([2,0,-9.5],[4,1,-8.5],"low"),vt([-.4,0,-7.4],[.4,4,-6.6],"pillar"),vt([-1,0,-3.5],[1,1,-2.5],"low"),vt([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),vt([3.5,0,-1.5],[5.5,1,-.5],"low"),vt([-4.5,0,3.5],[-2.5,1,4.5],"low"),vt([2.5,0,3.5],[4.5,1,4.5],"low"),vt([-.4,0,6.6],[.4,4,7.4],"pillar"),vt([-4.5,0,9],[-2.5,1,10],"low"),vt([2.5,0,9],[4.5,1,10],"low"),vt([-1.5,0,12],[1.5,2.2,12.6],"tall")],bE=[-12,-6,.5,7,11],ME=[-6,-2,2,6],Qh=[];for(let n of bE)for(let e of ME)Qh.push([e,n]);Qh.push([0,-5],[0,0],[0,9.5]);Qh.push([-3.5,13.5],[3.5,13.5]);var Qg=jg({name:"kioskRow",boxes:yE,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:Qh,ammoCrates:[{pos:[5.5,0,-12.5]}],landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});var Os=class n{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Gf=class extends Os{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Vf(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var SE={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Vf,toHexString:Vf},$a={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},wE={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){let i=$a.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return $a.toHexString(s)}},TE={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){let i=$a.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return $a.toHexString(s)}},EE=[SE,$a,wE,TE];function AE(n){return EE.find(e=>e.match(n))}var Wf=class extends Os{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=AE(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Vf(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},qa=class extends Os{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Xf=class extends Os{constructor(e,t,i,s,r,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))},o=!1,a,l,c,h,d,u=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=v=>{if(o){let w=v.clientX-a,b=v.clientY-l;Math.abs(b)>u?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&g()}if(!o){let w=v.clientY-c;d-=w*this._step*this._arrowKeyMultiplier(v),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(x,v,w,b,S)=>(x-v)/(w-v)*(S-b)+b,t=x=>{let v=this.$slider.getBoundingClientRect(),w=e(x,v.left,v.right,this._min,this._max);this._snapClampSetValue(w)},i=x=>{this._setDraggingStyle(!0),t(x.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=x=>{t(x.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=x=>{x.preventDefault(),this._setDraggingStyle(!0),t(x.touches[0].clientX),o=!1},h=x=>{x.touches.length>1||(this._hasScrollBar?(a=x.touches[0].clientX,l=x.touches[0].clientY,o=!0):c(x),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=x=>{if(o){let v=x.touches[0].clientX-a,w=x.touches[0].clientY-l;Math.abs(v)>Math.abs(w)?c(x):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else x.preventDefault(),t(x.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),p=400,g,m=x=>{if(Math.abs(x.deltaX)<Math.abs(x.deltaY)&&this._hasScrollBar)return;x.preventDefault();let w=this._normalizeMouseWheel(x)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,p)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Yf=class extends Os{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},qf=class extends Os{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},RE=`.lil-gui {
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
}`;function CE(n){let e=document.createElement("style");e.innerHTML=n;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var ex=!1,eu=class n{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!ex&&a&&(CE(RE),ex=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new Yf(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new Xf(this,e,t,i,s,r);case"boolean":return new Gf(this,e,t);case"string":return new qf(this,e,t);case"function":return new qa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new Wf(this,e,t,i)}addFolder(e){let t=new n({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof qa||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof qa)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var D=(n,e,t,i)=>({path:n,min:e,max:t,step:i});function tx(n){let e=(t,i,s,r)=>D(`weapons.${n}.${t}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var Za=Object.freeze([D("move.jog",1,10,.1),D("move.aimWalk",.5,6,.1),D("move.sprint",2,14,.1),D("move.accelTime",.01,.6,.01),D("move.stopTime",.01,.6,.01),D("move.turnRate",1,40,.5),D("move.aimTurnRate",1,40,.5),D("move.sprintTurnRate",.2,20,.1),D("move.rollDistance",1,12,.1),D("move.rollTime",.2,1.5,.01),D("move.rollEase",1,4,.05),D("move.rollBuffer",0,.5,.01),D("move.tapMax",.05,.5,.01),D("move.stickSprintMin",0,1,.05),D("move.faceMinSpeed",0,2,.05),D("move.sprintHeadingMinSpeed",0,3,.05),D("move.runClipMinSpeed",0,2,.05),D("move.runRateMin",.1,2,.05),D("move.runRateMax",.5,4,.05),D("move.sprintRateMin",.1,2,.05),D("move.sprintRateMax",.5,4,.05),D("move.stepEvery",.4,4,.05),D("move.stepEverySprint",.4,6,.05),D("move.crawlSpeed",.2,4,.05),D("move.crawlTurnRate",.5,20,.5),D("camera.fov",40,110,1),D("camera.right",-1.5,1.5,.01),D("camera.up",.5,3,.01),D("camera.back",.5,6,.05),D("camera.aim.fov",20,90,1),D("camera.aim.back",.3,5,.05),D("camera.sprint.fov",50,120,1),D("camera.sprint.up",.3,3,.01),D("camera.sprint.back",.5,6,.05),D("camera.sprint.shakeWeight",0,3,.05),D("camera.coverLow.fov",50,120,1),D("camera.coverLow.right",-1.5,1.5,.01),D("camera.coverLow.up",.3,3,.01),D("camera.coverLow.back",.5,6,.05),D("camera.coverTall.fov",50,120,1),D("camera.coverTall.right",-1.5,1.5,.01),D("camera.coverTall.up",.3,3,.01),D("camera.coverTall.back",.5,6,.05),D("camera.downed.fov",40,120,1),D("camera.downed.up",.2,3,.01),D("camera.downed.back",.5,6,.05),D("camera.bump.amount",0,.6,.01),D("camera.bump.halfLife",.01,.3,.005),D("camera.slamShake.amount",0,.3,.005),D("camera.slamShake.time",.02,1,.01),D("camera.slamShake.hz",2,60,.5),D("camera.blendHalfLife",0,.5,.005),D("camera.holdTime",0,2,.05),D("camera.holdRange",10,300,5),D("camera.followHalfLife",0,.5,.005),D("camera.sideHalfLife",0,.6,.005),D("camera.headHideDist",0,2,.05),D("camera.headHideMargin",0,1,.01),D("camera.shake.amp",0,.15,.001),D("camera.shake.hz",1,30,.5),D("camera.probeRadius",.05,.6,.01),D("camera.minBack",0,2,.01),D("camera.wallReturnHalfLife",0,1,.01),D("camera.pitchMin",-1.5,0,.01),D("camera.pitchMax",0,1.5,.01),D("look.mouse",5e-4,.008,1e-4),D("look.pad.yawRate",.5,10,.1),D("look.pad.pitchRate",.5,10,.1),D("look.pad.expo",1,3,.05),D("look.aimScale",.1,1.5,.01),{path:"look.invertY"},D("cover.grabRange",0,5,.05),D("cover.grabAngle",0,180,1),D("cover.grabViewAngle",0,180,1),D("cover.grabSlack",0,5,.05),D("cover.grabMinTilt",0,1,.05),D("cover.gap",0,5,.01),D("cover.endInset",0,5,.01),D("cover.minLength",0,5,.05),D("cover.slideSpeed",0,30,.5),D("cover.slideMinTime",0,2,.01),D("cover.slideMaxTime",0,2,.01),D("cover.slideTurnRate",1,60,.5),D("cover.moveSpeed",0,30,.1),D("cover.alongDeadzone",0,1,.05),D("cover.leaveTilt",0,1,.05),D("cover.leaveAngle",0,180,1),D("cover.endLeaveTime",0,2,.01),D("cover.cornerZone",0,5,.05),D("cover.popTime",0,2,.01),D("cover.blindTime",0,2,.01),D("cover.popShift",0,5,.05),D("cover.pushAngle",0,180,1),D("cover.lowDrawBack",0,1,.01),D("cover.blindDrawBack",0,1,.01),D("cover.vaultTime",0,2,.01),D("cover.vaultMaxDepth",0,5,.05),D("cover.vaultHop",0,5,.05),D("cover.vaultExitSpeed",0,30,.1),D("cover.swapRange",0,5,.05),D("cover.swapSpeed",0,30,.5),D("cover.swapAngle",0,180,1),D("cover.swapMaxOffset",0,5,.05),D("cover.slamSquash",0,1,.01),D("cover.slamSquashTime",0,2,.01),D("cover.thudVolume",0,1,.05),D("cover.autoSlam",0,1,1),D("cover.autoAngle",0,90,1),D("cover.autoDist",0,1,.01),D("cover.autoMinTilt",0,1,.05),D("cover.autoMinSpeed",0,12,.1),D("cover.autoTime",0,1,.01),...tx("regret"),...tx("pistol"),D("combat.fireBuffer",0,.5,.01),D("combat.autoReload",0,1,1),D("combat.minRate",.01,1,.01),D("combat.minReloadTime",.01,.5,.01),D("combat.muzzleUp",.5,2,.01),D("combat.muzzleRight",-1,1,.01),D("combat.muzzleForward",0,2,.01),D("combat.blindLift",0,1,.01),D("combat.blindReach",0,1,.01),D("combat.crateRadius",.3,3,.05),D("combat.hitPad",0,.3,.005),D("combat.crouchHead",0,3,.01),D("combat.crouchBodyTop",0,3,.01),D("combat.shoulderDrop",0,1,.01),D("combat.pickupRadius",.2,3,.05),D("health.max",1,500,1),D("health.regenDelay",0,15,.1),D("health.regenTime",0,15,.1),D("health.downedTime",0,60,.5),D("health.standInRevive",0,1,1),D("health.reviveTime",0,10,.1),D("health.reviveHealth",0,1,.05),D("health.godMode",0,1,1),D("health.giveUpHold",.3,5,.01),D("associate.radius",0,3,.01),D("associate.height",0,3,.01),D("associate.pointSpacing",.2,3,.01),D("associate.reserveRadius",0,3,.01),D("associate.popShift",0,3,.01),D("associate.linkMax",2,15,.5),D("associate.health",1,1e3,1),D("associate.runSpeed",0,12,.1),D("associate.turnRate",.5,40,.5),D("associate.arriveDist",.01,1,.01),D("associate.stuckTime",.1,5,.1),D("associate.popTime",0,1,.01),D("associate.telegraphTime",0,2,.01),D("associate.burstTime",0,5,.1),D("associate.rate",.5,20,.5),D("associate.damage",0,50,.5),D("associate.range",5,100,1),D("associate.spread",0,15,.1),D("associate.moveSpread",0,15,.1),D("associate.aimLag",0,1,.01),D("associate.suppressChance",0,1,.05),D("associate.suppressTime",0,5,.1),D("associate.suppressRate",.5,20,.5),D("associate.suppressMiss",0,5,.1),D("associate.suppressSpread",0,20,.5),D("associate.coverWaitMin",0,5,.1),D("associate.coverWaitMax",0,8,.1),D("associate.magBursts",1,10,1),D("associate.reloadTime",0,6,.1),D("associate.flinchTime",0,2,.01),D("associate.minRange",0,20,.5),D("associate.preferRange",0,40,.5),D("associate.maxRange",1,60,.5),D("associate.relocateCheck",.05,3,.05),D("associate.relocateAfter",1,60,.5),D("associate.ammoDrop",0,200,1),D("associate.muzzleUp",.5,2,.01),D("director.tokens",0,8,1),D("director.casualTokens",0,8,1),D("director.casual",0,1,1),D("director.tokenCooldown",0,5,.1),D("director.tokenMaxHold",.5,10,.1),D("director.requestWindow",0,2,.05),D("director.pushAfter",1,30,.5),D("director.flankAfter",1,60,.5),D("director.stayRadius",.5,10,.1),D("director.flankAngle",0,180,1),D("director.flankMaxAngle",60,180,1),D("director.maxEnemies",4,8,1),D("associate.downChance",0,1,.05),D("associate.downedCrawl",0,3,.05),D("associate.bleedTime",1,60,.5),D("associate.reviveTime",0,10,.1),D("associate.reviveHealth",.05,1,.05),D("associate.reviveRange",0,40,.5),D("associate.staggerTime",0,3,.05),D("associate.diveWarn",0,1.6,.05),D("associate.diveRadius",0,12,.1),D("associate.diveChance",0,1,.05),D("associate.diveReaction",0,2,.05),D("associate.diveDistance",0,10,.1),D("associate.diveTime",.05,3,.05),D("pad.radius",.1,4,.05),D("pad.openAfterKills",0,8,1),D("pad.openAfter",0,120,1),D("pad.interval",.5,30,.5),D("pad.maxAlive",1,8,1),D("pad.total",1,30,1),D("pad.riseTime",0,3,.05),D("tobble.enabled",0,1,1),D("tobble.scale",.3,1.2,.01),D("tobble.radius",.1,.6,.01),D("tobble.height",.5,2,.01),D("tobble.health",1,1e3,1),D("tobble.regenDelay",0,20,.5),D("tobble.regenTime",0,20,.5),D("tobble.runSpeed",0,12,.1),D("tobble.turnRate",1,30,.5),D("tobble.followMin",0,20,.5),D("tobble.followMax",1,30,.5),D("tobble.personalSpace",0,5,.05),D("tobble.lofClear",0,4,.05),D("tobble.lofRange",1,60,1),D("tobble.sidestepReact",0,3,.05),D("tobble.sidestepDist",0,5,.1),D("tobble.popTime",.01,1,.01),D("tobble.popLift",0,.6,.01),D("tobble.muzzleUp",.3,2,.01),D("tobble.coverWaitMin",0,5,.1),D("tobble.coverWaitMax",0,8,.1),D("tobble.burstTime",0,6,.1),D("tobble.rate",.5,20,.5),D("tobble.damage",0,100,1),D("tobble.spread",0,20,.5),D("tobble.range",1,100,1),D("tobble.reviveMaxThreats",0,8,1),D("tobble.reviveWaitMax",0,20,.5),D("tobble.reviveRange",.3,4,.05),D("tobble.reviveTime",0,15,.1),D("tobble.reviveHealth",.05,1,.05),D("tobble.playerReviveTime",0,10,.1),D("tobble.playerReviveRange",.3,5,.05),D("tobble.crawlSpeed",0,3,.05),D("tobble.complainEvery",1,30,.5),D("dummy.health",1,1e3,1),D("dummy.respawnTime",0,30,.5),D("dummy.railSpeed",0,10,.1),D("camera.recoil.halfLife",.01,.5,.01),D("camera.recoil.max",0,20,.5),D("look.pad.assist",.1,1,.05),D("feedback.flashTime",.01,.3,.01),D("feedback.flashSize",.05,1.5,.05),D("feedback.tracerTime",.01,.3,.01),D("feedback.tracerWidth",.005,.2,.005),D("feedback.sparkTime",.05,1,.01),D("feedback.sparkCount",0,12,1),D("feedback.gelTime",.1,2,.05),D("feedback.gelCount",0,24,1),D("feedback.gelSpeed",0,10,.1),D("feedback.killGelCount",0,48,1),D("feedback.receiptCount",0,24,1),D("feedback.receiptTime",.2,4,.05),D("feedback.gravity",0,30,.1),D("feedback.hitMarkerTime",.02,1,.01),D("feedback.killMarkerTime",.05,1,.01),D("feedback.reloadResultTime",.1,2,.05),D("feedback.reticleMinGap",0,30,1),D("feedback.lowAmmoFrac",0,1,.05),D("feedback.coverReticleOpacity",0,1,.05),D("feedback.stepDip",0,.1,.001),D("feedback.stepVolume",0,1,.05),D("feedback.shotVolume",0,1,.05),D("feedback.hitVolume",0,1,.05),D("feedback.killVolume",0,1,.05),D("feedback.reloadVolume",0,1,.05),D("feedback.gunSquash",0,.6,.01),D("feedback.gunSquashTime",.01,.5,.01),D("feedback.gunKick",0,.3,.01),D("feedback.bodyKick",0,.3,.01),D("feedback.dummyBurstTime",.01,1,.01),D("feedback.dummyRespawnPop",0,1,.01),D("feedback.faceMaxOpacity",0,1,.05),D("feedback.edgeMaxOpacity",0,1,.05),D("feedback.hitFlashTime",.05,2,.01),D("feedback.hitKick",0,3,.05),D("feedback.hurtVolume",0,1,.05),D("feedback.enemyFlashSize",.05,1.5,.05),D("feedback.enemyTracerTime",.01,.3,.01),D("feedback.enemyTracerWidth",.005,.2,.005),D("feedback.glintSize",.02,.4,.01),D("feedback.blasterVolume",0,1,.05),D("feedback.chargeVolume",0,1,.05),D("feedback.pickupVolume",0,1,.05),D("feedback.barkTime",.2,6,.1),D("feedback.barkGap",0,12,.5),D("feedback.barkMinShow",0,4,.1),D("feedback.bashVolume",0,1,.05),D("feedback.revVolume",0,1,.05),D("feedback.cutVolume",0,1,.05),D("feedback.throwVolume",0,1,.05),D("feedback.clankVolume",0,1,.05),D("feedback.boomVolume",0,1,.05),D("feedback.saunaVolume",0,1,.05),D("feedback.reviveVolume",0,1,.05),D("feedback.tobbleShotVolume",0,1,.05),D("feedback.blastSize",.2,8,.1),D("feedback.blastTime",.05,2,.01),D("feedback.executeShake",0,.3,.005),D("feedback.cutGelEvery",.02,1,.01),D("feedback.arcDot",.01,.5,.01),D("melee.holdTime",0,5,.01),D("melee.bashTime",0,5,.01),D("melee.bashHitAt",0,5,.01),D("melee.bashRange",0,10,.05),D("melee.bashAngle",0,180,1),D("melee.bashDamage",0,500,1),D("melee.bashLunge",0,10,.05),D("melee.bashCooldown",0,5,.01),D("melee.revSpeed",0,30,.1),D("melee.revPulse",.05,5,.01),D("melee.cutterReach",0,10,.05),D("melee.cutterAngle",0,180,1),D("melee.cutTime",0,5,.01),D("melee.finishTime",0,5,.01),D("melee.executeRange",0,10,.05),D("melee.executeAngle",0,180,1),D("melee.promptRange",0,10,.05),D("melee.cutterSpin",0,100,1),D("grenade.carry",0,10,1),D("grenade.start",0,10,1),D("grenade.throwSpeed",0,30,.1),D("grenade.throwLift",0,180,1),D("grenade.gravity",.5,30,.1),D("grenade.ballRadius",.02,1,.01),D("grenade.restitution",0,1,.01),D("grenade.friction",0,1,.01),D("grenade.fuse",0,5,.01),D("grenade.radius",0,10,.05),D("grenade.damage",0,500,1),D("grenade.killRadius",0,10,.05),D("grenade.killDamage",0,500,1),D("grenade.selfDamage",0,2,.05),D("grenade.padReach",0,10,.05),D("grenade.arcTime",0,5,.01),D("grenade.throwTime",0,5,.01)]),PE=new Map(Za.map(n=>[n.path,n])),Ka=structuredClone(K);function pr(n,e){let t=n;for(let i of e.split(".")){if(t===null||typeof t!="object")return;t=t[i]}return t}function Zf(n,e,t){let i=e.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=t,!0}function Kf(n=K,e=Ka){let t={};for(let i of Za){let s=pr(n,i.path);s!==pr(e,i.path)&&(t[i.path]=s)}return t}function nx(n,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let t=0;for(let i of Object.keys(e)){let s=PE.get(i);if(!s)continue;let r=e[i],o=pr(Ka,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||Zf(n,i,r)&&t++)}return t}function $f(n,e){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>$f(s,e)).join(", ")}]`;let t="  ".repeat(e+1);return`{
${Object.keys(n).map(s=>`${t}${s}: ${$f(n[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function ix(n=K){return["associate","camera","combat","cover","director","dummy","feedback","grenade","health","look","melee","move","pad","tobble","weapons"].map(e=>`  ${e}: ${$f(n[e],1)},`).join(`
`)}var Jf="cr-tuning",IE={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},LE=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function sx(n){let e=n.split("."),t=e.slice(0,-1);return t.length===1&&t[0]==="camera"&&LE.has(e[1])&&t.push("wall"),t[0]==="look"&&t[1]==="pad"&&(t[1]="lookPad"),t}function DE(){try{return window.localStorage}catch{return null}}function rx({storage:n=DE()}={}){let e=()=>{try{return n?n.getItem(Jf):null}catch{return null}},t=g=>{try{n&&(g===null?n.removeItem(Jf):n.setItem(Jf,g))}catch{}};try{let g=e();g&&nx(K,JSON.parse(g))}catch{}let i=new eu({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let g=document.activeElement;g&&g!==document.body&&s.contains(g)&&g.blur&&g.blur()}s.addEventListener("click",g=>{let m=g.target;m&&m.closest&&m.closest(".lil-title")&&m.blur!==void 0&&r()});let o=new Map;function a(g){let m=i,x="";for(let v of g){if(x+=`.${v}`,!o.has(x)){let w=m.addFolder(IE[v]||v);w.close(),o.set(x,w)}m=o.get(x)}return m}function l(){let g=Kf();t(Object.keys(g).length?JSON.stringify(g):null)}for(let g of Za){let m=g.path.split("."),x=m[m.length-1],v=pr(K,m.slice(0,-1).join(".")),w=typeof pr(Ka,g.path)=="boolean"?a(sx(g.path)).add(v,x):a(sx(g.path)).add(v,x,g.min,g.max,g.step);w.onChange(l),w.onFinishChange(r)}let c=null;function h(g){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let m=document.createElement("div");m.textContent="Press Cmd+C to copy",m.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=m,s.appendChild(m),s.appendChild(c)}c.value=g,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(g){c&&(c.hidden=!0,c.note.hidden=!0);let m=null;try{m=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(g):null}catch{m=null}if(!m){h(g);return}m.catch(()=>h(g))}let u={copyChanges(){r(),d(JSON.stringify(Kf(),null,2))},copyForFile(){r(),d(ix())},resetAll(){r();for(let g of Za)Zf(K,g.path,pr(Ka,g.path));t(null),i.controllersRecursive().forEach(g=>g.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let f=!1;function p(g){f=g,s.style.display=g?"":"none"}return p(!1),{toggle(){p(!f)},isOpen:()=>f}}var ox=Math.PI*2,ui=n=>n-ox*Math.round(n/ox),di=(n,e)=>Math.atan2(n,e);function Ja(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function ei(n,e){let t=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*t-n.moveX*i,r=-n.moveY*i+n.moveX*t,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function Gt(n,e,t){let i=ui(e-n);return n+Math.max(-t,Math.min(t,i))}function _o(n,e,t,i,s,r){let o=n.vel,a=(Math.hypot(e,t)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=t-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=t):(o[0]+=l/h*a,o[2]+=c/h*a)}var jf=[0,0],tu=[0,0,0],ja=1e-9,NE=1.5;var Qf=(n=K)=>n.tobble?.playerReviveTime??NE;function ax(n,e,t){let i=e-n.pos[0],s=t-n.pos[2];Math.hypot(i,s)>1e-6&&(n.facing=n.facing+ui(Math.atan2(i,s)-n.facing)),n.heading=n.facing}function nu(n){n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0}var iu={bash:{acceptsTap:!1,selfMoves:!0,enter(n){n.aiming=!1,n.firing=!1,n.scratch.dir=[Math.sin(n.facing),Math.cos(n.facing)],n.scratch.prevOff=0,n.scratch.hit=!1,n.heading=n.facing},update(n,e,t){let i=K.melee,s=n.scratch;n.aiming=!1,n.firing=!1;let r=n.stateTime>=i.bashTime-ja,o=r||!(i.bashTime>0)?1:n.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,tu[0]=s.dir[0]*l,tu[1]=0,tu[2]=s.dir[1]*l,n.moveBy(tu,t,!1),!s.hit&&(r||n.stateTime>=i.bashHitAt-ja)&&(s.hit=!0,n.onAction?.({type:"bashHit"})),r?(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(n){n.aiming=!1,n.firing=!1,n.heading=n.facing},update(n,e,t){let i=n.tuning,s=K.melee.revSpeed;n.aiming=!1,n.firing=!1,ei(e,jf),_o(n,jf[0]*s,jf[1]*s,s,t,i);let r=n.speed();return r>s&&(n.vel[0]*=s/r,n.vel[2]*=s/r),r>i.faceMinSpeed?n.facing=Gt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t):n.facing=Gt(n.facing,e.camYaw,i.aimTurnRate*t),n.heading=n.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(n){nu(n)},update(n){return nu(n),n.stateTime<n.scratch.time-ja?null:(n.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(n){nu(n)},update(n,e){return nu(n),e.interactHeld?n.stateTime<Qf()-ja?null:(n.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},Qa={bash(n,e){return n.state!=="move"&&n.state!=="sprint"||n.bashReadyAt>n.clock+ja?!1:(n.bashReadyAt=n.clock+K.melee.bashCooldown,Number.isFinite(e)&&(n.facing=n.facing+ui(e-n.facing)),n.go("bash",{}),!0)},rev(n,e){return e?n.state!=="move"&&n.state!=="sprint"?!1:(n.go("rev",{}),!0):n.state!=="rev"?!1:(n.go("move",{}),!0)},execute(n,e,t){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"&&n.state!=="cover"?!1:(n.go("execute",{}),n.scratch.time=Number.isFinite(t)&&t>0?t:0,ax(n,e[0],e[1]),!0)},reviveTobble(n,e){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"&&n.state!=="cover"?!1:(n.go("reviveTobble",{}),ax(n,e[0],e.length>2?e[2]:e[1]),!0)}};var Di=1e-9,ep=Math.PI/180,cx=.05,OE=1.8,UE={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function hx(n=K.cover,e=K.move){return{radius:e.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var FE=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],kE=n=>{for(let e of["a","b","tangent","normal"])Object.freeze(n[e]);return Object.freeze(n)};function ux(n,{radius:e,gap:t,endInset:i,minLength:s,exclude:r=[]}){let o=e+t,a=[];return n.forEach((l,c)=>{let h=UE[l.kind];if(!h)return;let d=n.filter((u,f)=>f!==c&&u.kind!=="floor"&&u.max[1]>cx&&u.min[1]<OE);for(let u of FE){let f=u.axis*2,p=2-f,g=(u.sign>0?l.max[f]:l.min[f])+u.sign*o,m=l.min[p],x=l.max[p],v=x-m,w=[];for(let y of d){if(!(g>y.min[f]-o+Di&&g<y.max[f]+o-Di))continue;let P=y.min[p]-o-m,R=y.max[p]+o-m;R>Di&&P<v-Di&&w.push([Math.max(P,0),Math.min(R,v)])}w.sort((y,P)=>y[0]-P[0]);let b=[];for(let y of w){let P=b[b.length-1];P&&y[0]<=P[1]+Di?P[1]=Math.max(P[1],y[1]):b.push([y[0],y[1]])}let S=[],M=0,_=!0;for(let[y,P]of b)y>M+Di&&S.push([M,y,_,!1]),M=P,_=!1;v>M+Di&&S.push([M,v,_,!0]),S.forEach(([y,P,R,I],A)=>{let L=`${c}${u.name}#${A}`;if(r.includes(L))return;let E=m+y+(R?i:0),N=m+P-(I?i:0),k=N-E;if(k<s-Di)return;let W=u.axis===0?[g,E]:[E,g],te=u.axis===0?[g,N]:[N,g];a.push(kE({id:L,kind:h,boxIndex:c,a:W,b:te,length:k,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[f]-l.min[f],openA:R,openB:I}))})}}),a}function fi(n,e,t=[0,0]){return t[0]=n.a[0]+n.tangent[0]*e,t[1]=n.a[1]+n.tangent[1]*e,t}function Us(n,e,t=K.cover){let i=e<=t.cornerZone,s=n.length-e<=t.cornerZone;return i&&s?e<=n.length-e?-1:1:i?-1:s?1:0}function el(n,e){return e<0?n.openA:n.openB}var lx=.9,dx=(n,e,t,i)=>Qn(n,[e[0],lx,e[1]],[t[0],lx,t[1]],.9*i)===1;function tl(n,e,t,i,s,r,o){let a=Math.cos(r.grabAngle*ep),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*ep,d=null;for(let u of n){let f=(t[0]-u.a[0])*u.normal[0]+(t[2]-u.a[1])*u.normal[1],p=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(f<-(r.gap+.02)||p<a||p<=Di)continue;let g=Math.max(f,0)/p,m=(t[0]+i[0]*g-u.a[0])*u.tangent[0]+(t[2]+i[1]*g-u.a[1])*u.tangent[1];if(m<-r.grabSlack||m>u.length+r.grabSlack)continue;let x=Math.max(0,Math.min(u.length,m)),v=fi(u,x),w=v[0]-t[0],b=v[1]-t[2],S=Math.hypot(w,b);if(!(S>r.grabRange||d&&S>=d.dist)){if(S>.3){let M=(w*l+b*c)/S;if(Math.acos(Math.max(-1,Math.min(1,M)))>h)continue}dx(e,[t[0],t[2]],v,o)&&(d={edge:u,t:x,point:v,dist:S})}}return d}function fx(n,e,t,i,s,r,o){if(Us(t,i,r)!==s||!el(t,s))return null;let a=fi(t,i),l=Math.cos(r.swapAngle*ep),c=null;for(let h of n){if(h===t||h.normal[0]*t.normal[0]+h.normal[1]*t.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),f=d<=u?0:h.length,p=fi(h,f),g=p[0]-a[0],m=p[1]-a[1],x=Math.hypot(g,m);(g*t.tangent[0]+m*t.tangent[1])*s<=0||Math.abs(g*t.normal[0]+m*t.normal[1])>r.swapMaxOffset||x>r.swapRange||c&&x>=c.dist||dx(e,a,p,o)&&(c={edge:h,t:f,point:p,dist:x})}return c}function BE(n,e,t,i){let s=e[1]+cx,r=e[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<t-Di)return!1}return!0}function px(n,e,t,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=fi(n,e),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!BE(t,l,s,r))return null;let c=t.filter((h,d)=>d!==n.boxIndex);return Qn(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var zE=["coverSlide","cover","vault","coverSwap"],mx=Math.PI/180,tn=[0,0],ru=[0,0],Fs=[0,0,0],vx=.001,HE=2,tp=(n,e,t)=>Math.max(e,Math.min(t,n));function np(n,e,t){if(Ja(e)>=n.coverTuning.grabMinTilt){ei(e,tn);let i=Math.hypot(tn[0],tn[1]);t[0]=tn[0]/i,t[1]=tn[1]/i}else t[0]=Math.sin(n.facing),t[1]=Math.cos(n.facing);return t}var _x={name:"cover",state:"coverSlide",when(n,e){return n.coverTarget=tl(n.coverEdges,n.boxes,n.pos,np(n,e,ru),e.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},su={};function yx(n,e){let t=n.coverTuning;if(!t.autoSlam||e.aim||Ja(e)<t.autoMinTilt)return null;Object.assign(su,t),su.grabAngle=t.autoAngle,su.grabRange=t.autoDist,ei(e,tn);let i=Math.hypot(tn[0],tn[1]);ru[0]=tn[0]/i,ru[1]=tn[1]/i;let s=tl(n.coverEdges,n.boxes,n.pos,ru,e.camYaw,su,n.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(n.runVel[0]*r[0]+n.runVel[1]*r[1])>=t.autoMinSpeed?s:null}function GE(n,e,t){let i=Us(n,e,t);return n.kind==="low"||i!==0&&el(n,i)}function as(n){return n.cover?n.cover.edge:n.scratch.edge||null}function ip(n){if(n.state==="downed")return"downed";if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let e=as(n);if(e)return e.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function mr(n){let e=n.cover;if(!e)return 1;let t=e.edge,i=e.popEnd;if(i===0&&(i=Us(t,e.t,n.coverTuning)),i===0)return 1;let s=di(-t.normal[0],-t.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=t.tangent[0]*i*r+t.tangent[1]*i*o<0?-1:1;return el(t,i)?a:-a}function gx(n,e,t,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(vx,tp(o/Math.max(e,1e-6),t,i)),n.aiming=!1}function xx(n,e,t,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return Fs[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],Fs[1]=0,Fs[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(Fs,e,!1),i!==null&&(n.facing=Gt(n.facing,i,t*e)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var VE={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;gx(n,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(n,e,t){let i=n.scratch.edge;return xx(n,t,n.coverTuning.slideTurnRate,di(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;n.cover=null,gx(n,e.swapSpeed,0,HE);let t=n.scratch;n.heading=di(t.to[0]-t.from[0],t.to[2]-t.from[2]),n.facing=n.facing+ui(n.heading-n.facing)},update(n,e,t){return xx(n,t,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTarget;n.coverTarget=null;let t=n.scratch,i=e.edge;n.cover=null,n.aiming=!1,t.edge=i,t.landing=e.landing,t.from=[n.pos[0],n.pos[2]],n.heading=di(-i.normal[0],-i.normal[1]),n.facing=n.facing+ui(n.heading-n.facing)},update(n,e,t){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,vx)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,e,t){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=ei(e,tn),l=Math.hypot(tn[0],tn[1]),c=l>0?tn[0]/l:0,h=l>0?tn[1]/l:0,d=r.normal[0],u=r.normal[1],f=a>=i.leaveTilt,p=(y,P)=>(n.vel[0]=y*o.jog,n.vel[1]=0,n.vel[2]=P*o.jog,"move");if(f&&c*d+h*u>=Math.cos(i.leaveAngle*mx))return p(tn[0],tn[1]);if(e.tap&&f){let y=Math.cos(i.pushAngle*mx);if(-(c*d+h*u)>=y){let R=px(r,s.t,n.boxes,i,o.radius,o.height);if(R)return n.coverTarget={landing:R,edge:r},"vault"}let P=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(P)>=y){let R=fx(n.coverEdges,n.boxes,r,s.t,P>0?1:-1,i,o.radius);if(R)return n.coverTarget=R,"coverSwap"}}let g=Us(r,s.t,i),m=GE(r,s.t,i),x=e.aim&&m?1:0,v=e.fire&&!e.aim&&m?1:0,w=i.popTime>0?t/i.popTime:1;s.pop=s.pop<x?Math.min(x,s.pop+w):Math.max(x,s.pop-w);let b=i.blindTime>0?t/i.blindTime:1;s.blind=s.blind<v?Math.min(v,s.blind+b):Math.max(v,s.blind-b),s.popEnd=s.pop>0&&r.kind!=="low"?g:0,s.blindEnd=s.blind>0&&r.kind!=="low"?g:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let S=!1;if(s.pop===0&&s.blind===0){let y=tn[0]*r.tangent[0]+tn[1]*r.tangent[1];if(Math.abs(y)>=i.alongDeadzone){let P=s.t+y*i.moveSpeed*t;if(s.t=tp(P,0,r.length),P!==s.t&&el(r,y>0?1:-1)&&(S=!0,s.endPush+=t,s.endPush>=i.endLeaveTime))return p(r.tangent[0]*Math.sign(y),r.tangent[1]*Math.sign(y))}}else s.blindEnd!==0&&v===1&&(s.t=tp(s.t+s.blindEnd*i.moveSpeed*t,0,r.length));S||(s.endPush=0);let M=fi(r,s.t),_=s.popEnd*i.popShift*s.pop;return Fs[0]=M[0]+r.tangent[0]*_-n.pos[0],Fs[1]=0,Fs[2]=M[1]+r.tangent[1]*_-n.pos[2],n.moveBy(Fs,t,!1),s.pop>0?n.facing=Gt(n.facing,e.camYaw,o.aimTurnRate*t):n.facing=Gt(n.facing,di(-d,-u),o.turnRate*t),n.heading=n.facing,null}}},bx=Object.fromEntries(zE.map(n=>[n,VE[n]]));var au=n=>[Math.sin(n),0,Math.cos(n)],lu=n=>[-Math.cos(n),0,Math.sin(n)],WE=(n,e,t)=>e*(1-(1-n)**t),fn=[0,0],ou=[0,0,0];function sp(n,e,t){return e.sprint&&!e.aim&&!e.grenade&&Ja(e)>=t.stickSprintMin}var XE={move:{acceptsTap:!0,enter(){},update(n,e,t){let i=n.tuning;if(sp(n,e,i))return"sprint";n.aiming=e.aim,n.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return ei(e,fn),_o(n,fn[0]*s,fn[1]*s,s,t,i),e.aim||e.fire||e.grenade?n.facing=Gt(n.facing,e.camYaw,i.aimTurnRate*t):n.speed()>i.faceMinSpeed&&(n.facing=Gt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,e){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):ei(e,fn)>.01?n.heading=Math.atan2(fn[0],fn[1]):n.heading=n.facing},update(n,e,t){let i=n.tuning;return sp(n,e,i)?(ei(e,fn),n.heading=Gt(n.heading,Math.atan2(fn[0],fn[1]),i.sprintTurnRate*t),_o(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,t,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,e){n.aiming=!1;let t=n.scratch;if(t.dir=[Math.sin(n.facing),Math.cos(n.facing)],ei(e,fn)>.01){let i=Math.hypot(fn[0],fn[1]);t.dir[0]=fn[0]/i,t.dir[1]=fn[1]/i}t.prevOff=0,t.queued=!1,n.heading=Math.atan2(t.dir[0],t.dir[1]),n.facing=n.facing+ui(n.heading-n.facing)},update(n,e,t){let i=n.tuning,s=n.scratch;e.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=WE(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,ou[0]=s.dir[0]*a,ou[1]=0,ou[2]=s.dir[1]*a,n.moveBy(ou,t,!1),r?s.queued?"roll":sp(n,e,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(n){n.cover=null,n.coverTarget=null,n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0},update(n,e,t){let i=n.tuning;return n.aiming=!1,n.firing=!1,ei(e,fn),_o(n,fn[0]*i.crawlSpeed,fn[1]*i.crawlSpeed,i.crawlSpeed,t,i),n.speed()>i.faceMinSpeed&&(n.facing=Gt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.crawlTurnRate*t)),n.heading=n.facing,null},exit(){}},...bx,...iu},YE=[_x,{name:"roll",when:()=>!0,state:"roll"}];function Mx({boxes:n,spawn:e,tuning:t=K.move,coverTuning:i=K.cover,coverEdges:s=[],states:r=XE,contextActions:o=YE,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:t,boxes:n,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(d,u,f=!0){let p=h.pos,g=kn(n,p,d,t.radius,t.height);if(h.hit=!!g.hit,!f)u>0&&(h.vel[0]=(g.pos[0]-p[0])/u,h.vel[2]=(g.pos[2]-p[2])/u);else if(g.hit)if(u>0)h.vel[0]=(g.pos[0]-p[0])/u,h.vel[2]=(g.pos[2]-p[2])/u;else{let m=g.normal,x=h.vel[0]*m[0]+h.vel[1]*m[1]+h.vel[2]*m[2];x<0&&(h.vel[0]-=m[0]*x,h.vel[1]-=m[1]*x,h.vel[2]-=m[2]*x)}p[0]=g.pos[0],p[1]=g.pos[1],p[2]=g.pos[2]},go(d,u){let f=h.state;r[f].exit?.(h),h.state=d,h.stateTime=0,h.entries++,h.scratch={},r[f].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[d].enter(h,u),h.onState?.(d,f,u)},down(){h.go("downed",{})},bash(d){return Qa.bash(h,d)},rev(d){return Qa.rev(h,d)},execute(d,u){return Qa.execute(h,d,u)},reviveTobble(d){return Qa.reviveTobble(h,d)},revive(){h.state==="downed"&&h.go("move",{})},place(d,u){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=d[0],h.pos[1]=h.prevPos[1]=d[1],h.pos[2]=h.prevPos[2]=d[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,u!==void 0?h.facing=h.prevFacing=h.heading=u:h.prevFacing=h.facing},update(d,u){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,u>0&&(h.clock+=u),h.grenadeAim=!!d.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),d.tap&&r[h.state].acceptsTap){for(let g of o)if(g.when(h,d)){h.go(g.state,d);break}}h.stateTime+=u;let f=r[h.state].update(h,d,u),p=h.state;if(!r[p].selfMoves){let g=h.vel[0],m=h.vel[2],x=Math.hypot(g,m);h.moveBy([h.vel[0]*u,0,h.vel[2]*u],u,!0),h.hit?(h.hitTime+=u,(x>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=g,h.runVel[1]=m)):(h.runVel[0]=g,h.runVel[1]=m,h.hitTime=0)}if(p==="move"||p==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let m=Math.max(.1,p==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=m&&(h.stepDist%=m,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:p==="sprint",speed:h.speed()}))}if(p==="move"||p==="sprint"){let g=yx(h,d);if(!g)h.autoTimer=0;else if((h.autoTimer+=u)>=h.coverTuning.autoTime){h.coverTarget=g,h.go("coverSlide",d);return}}f&&h.go(f,d)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function Sx({AudioContextCtor:n=globalThis.AudioContext}={}){let e=null,t=null,i=!1,s=null;function r(){if(e||i||!n)return e;try{e=new n;let p=Math.max(1,Math.floor(e.sampleRate*.4));t=e.createBuffer(1,p,e.sampleRate);let g=t.getChannelData(0);for(let m=0;m<p;m++)g[m]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(p){if(!(p>0||p<0)||!e.createStereoPanner)return e.destination;let g=e.createStereoPanner();return g.pan.value=Math.max(-1,Math.min(1,p)),g.connect(e.destination),g}let a=()=>{if(e.state==="suspended"){let p=e.resume();p&&p.catch&&p.catch(()=>{})}};function l(p,g,m){let x=e.createGain();return x.gain.setValueAtTime(m,p),x.gain.exponentialRampToValueAtTime(.001,p+g),x.connect(s),x}function c(p,g,m,x,v,w){let b=e.createOscillator();b.type=g,b.frequency.setValueAtTime(m,v),x!==m&&b.frequency.exponentialRampToValueAtTime&&b.frequency.exponentialRampToValueAtTime(x,v+w),b.connect(p),b.start(v),b.stop(v+w)}function h(p,g,m,x,v){let w=e.createBufferSource();w.buffer=t;let b=e.createBiquadFilter();b.type=g,b.frequency.setValueAtTime(m,x),w.connect(b),b.connect(p),w.start(x),w.stop(x+v)}function d(p,g,m,x,v,w){let b=e.createBufferSource();b.buffer=t;let S=e.createBiquadFilter();S.type=g,S.frequency.setValueAtTime(m,v),S.frequency.exponentialRampToValueAtTime&&S.frequency.exponentialRampToValueAtTime(x,v+w),b.connect(S),S.connect(p),b.start(v),b.stop(v+w)}let u=(p,g,m)=>{let x=l(p,.03,m);h(x,"bandpass",g,p,.03)},f={rifle:(p,g)=>{h(l(p,.05,g*.55),"bandpass",2200,p,.05),c(l(p,.16,g*.9),"sine",150,48,p,.16),c(l(p,.22,g*.8),"sine",62,34,p,.22),h(l(p,.26,g*.35),"lowpass",700,p,.26)},pistol:(p,g)=>{h(l(p,.06,g*.6),"bandpass",2e3,p,.06),c(l(p,.2,g*.9),"sine",130,42,p,.2),c(l(p,.26,g*.85),"sine",56,30,p,.26),h(l(p,.3,g*.4),"lowpass",600,p,.3)},dry:(p,g)=>c(l(p,.02,g),"square",1200,1200,p,.02),hit:(p,g)=>c(l(p,.04,g),"sine",1600,1600,p,.04),head:(p,g)=>{let m=l(p,.06,g);c(m,"sine",2400,2400,p,.06),c(m,"sine",3200,3200,p,.06)},kill:(p,g)=>{let m=l(p,.12,g);c(m,"sine",300,900,p,.12);let x=l(p,.2,g*.8);h(x,"lowpass",1400,p,.2)},magOut:(p,g)=>{u(p,3e3,g),u(p+.08,2200,g)},magIn:(p,g)=>{u(p,2e3,g),u(p+.08,3400,g)},perfect:(p,g)=>{let m=l(p,.35,g);c(m,"sine",1320,1320,p,.35),c(m,"sine",1980,1980,p,.35)},good:(p,g)=>c(l(p,.15,g),"sine",990,990,p,.15),jam:(p,g)=>c(l(p,.15,g),"square",90,90,p,.15),blaster:(p,g)=>{let m=l(p,.1,g);c(m,"square",900,300,p,.1),h(m,"bandpass",1500,p,.1)},charge:(p,g)=>{let m=e.createGain();m.gain.setValueAtTime(.001,p),m.gain.exponentialRampToValueAtTime(g,p+.3),m.gain.exponentialRampToValueAtTime(.001,p+.35),m.connect(s),c(m,"sine",300,900,p,.35)},hurt:(p,g)=>{let m=l(p,.15,g);h(m,"lowpass",600,p,.15),c(m,"sine",80,80,p,.15)},downed:(p,g)=>c(l(p,.6,g),"sine",400,80,p,.6),clear:(p,g)=>{[523,659,784].forEach((m,x)=>c(l(p+x*.12,.15,g),"sine",m,m,p+x*.12,.15))},pickup:(p,g)=>{c(l(p,.06,g),"sine",880,880,p,.06),c(l(p+.07,.08,g),"sine",1320,1320,p+.07,.08)},thud:(p,g)=>{c(l(p,.32,g),"sine",60,30,p,.32),h(l(p,.28,g*.6),"lowpass",260,p,.28),h(l(p,.07,g*.3),"bandpass",900,p,.07)},bash:(p,g)=>{c(l(p,.2,g),"sine",120,40,p,.2),h(l(p,.06,g*.6),"bandpass",1800,p,.06)},rev:(p,g)=>{c(l(p,.25,g*.5),"sawtooth",180,260,p,.25),h(l(p,.25,g*.25),"bandpass",2600,p,.25)},cut:(p,g)=>{c(l(p,.3,g*.5),"sawtooth",150,105,p,.3),h(l(p,.3,g*.5),"bandpass",900,p,.3),h(l(p,.2,g*.3),"lowpass",400,p,.2)},finish:(p,g)=>{c(l(p,.4,g),"sine",70,26,p,.4),h(l(p,.3,g*.5),"lowpass",220,p,.3)},throw:(p,g)=>{d(l(p,.3,g*.6),"bandpass",400,1600,p,.3),c(l(p,.18,g*.5),"sawtooth",140,85,p+.02,.18)},clank:(p,g)=>{let m=l(p,.14,g*.6);c(m,"square",1450,1450,p,.14),c(m,"square",2230,2230,p,.14),h(l(p,.04,g*.5),"bandpass",3500,p,.04)},boom:(p,g)=>{c(l(p,.5,g),"sine",50,50,p,.5),c(l(p,.3,g*.7),"sine",110,40,p,.3),h(l(p,.45,g*.6),"lowpass",500,p,.45)},saunaOpen:(p,g)=>{d(l(p,.5,g*.7),"bandpass",700,3200,p,.5)},saunaClose:(p,g)=>{d(l(p,.3,g*.6),"bandpass",2600,600,p,.3),c(l(p+.28,.2,g),"sine",95,45,p+.28,.2)},revive:(p,g)=>{c(l(p,.2,g*.8),"triangle",440,440,p,.2),c(l(p+.17,.3,g),"triangle",660,660,p+.17,.3)},tobbleShot:(p,g)=>{c(l(p,.07,g),"sine",700,280,p,.07),h(l(p,.04,g*.5),"bandpass",2800,p,.04)},step:(p,g)=>{c(l(p,.1,g),"sine",95,50,p,.1),h(l(p,.07,g*.5),"lowpass",280,p,.07)}};return{play(p,g,m=0){let x=f[p];if(!(!x||!(g>0)||!r()))try{a(),s=o(m),x(e.currentTime,g)}catch{}},unlock(){if(r())try{a()}catch{}}}}function wx(){let n=!1;return{update(e,t,i){return i?(t&&(n=!0),e||(n=!1),{fire:n&&!!e,firePressed:!!t}):(n=!1,{fire:!1,firePressed:!1})},reset(){n=!1}}}var cu=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),Tx=Object.freeze(["regret",null,"pistol"]);function Ex(n,e){return n>=e.perfectStart&&n<=e.perfectEnd?"perfect":n>=e.goodStart&&n<=e.goodEnd?"good":"jam"}function rp(n,e,t,i){let s=Math.max(n.reloadTime,i.minReloadTime);return t==="perfect"?Math.min(e+n.perfectFinish,s):t==="good"?Math.min(e+n.goodFinish,s):t==="jam"?s+n.jamPenalty:s}var qE={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function Ax({weapons:n=K.weapons,combat:e=K.combat,loadout:t=Tx}={}){let i={},s=()=>{for(let g of t)g&&Object.assign(i[g]||(i[g]={}),{mag:Math.floor(n[g].mag),reserve:Math.floor(n[g].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,t.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>t[o.slot],l=(g,m)=>g[qE[m]||"spreadHip"],c=g=>g!=null&&o.reload===null&&o.switching<=0;function h(){let g=a(),m=n[g],x=i[g];return o.reload===null&&o.switching<=0&&x.mag<m.mag&&(m.infiniteReserve>0||x.reserve>0)}function d(){let g=a(),m=n[g];o.reload={id:g,t:0,press:null,end:rp(m,0,"normal",e)},i[g].boost=!1,r.push({type:"reloadStart",id:g})}function u(){let{id:g,press:m}=o.reload,x=n[g],v=i[g],w=Math.max(0,x.mag-v.mag);if(x.infiniteReserve>0)v.mag+=w;else{let b=Math.min(w,v.reserve);v.mag+=b,v.reserve-=b}v.boost=m==="perfect",o.reload=null,r.push({type:"reloadDone",id:g,result:m||"normal"})}function f(g){g===o.slot||!t[g]||(o.reload=null,o.slot=g,o.switching=n[t[g]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:t[g]}))}function p(g){let m=t.length;for(let x=1;x<m;x++){let v=(o.slot+g*x+m*m)%m;if(t[v])return f(v)}}return o.current=a,o.canFire=c,o.spreadOf=g=>l(n[a()],g)+i[a()].bloom,o.update=function(m,x,v){r.length=0,(!(v>0)||!Number.isFinite(v))&&(v=0);let w=m.weapon;w==="next"?p(1):w==="prev"?p(-1):(w===1||w===2||w===3)&&f(w-1),o.switching-=v;for(let R of t)R&&(i[R].bloom=Math.max(0,i[R].bloom-n[R].bloomRecover*v));let b=a(),S=n[b],M=i[b];if(m.reload){if(o.reload===null)h()&&d();else if(o.reload.press===null){let R=o.reload,I=Math.max(S.reloadTime,e.minReloadTime);R.press=Ex(R.t/I,S),R.end=rp(S,R.t,R.press,e),r.push({type:"reloadPress",id:b,result:R.press})}}o.reload!==null&&(o.reload.t+=v,o.reload.t>=o.reload.end&&u()),m.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=v,m.fire||(o.dryLatched=!1),c(x)||(o.buffer=0);let _=S.auto>0,y=_?!!m.fire:o.buffer>0,P=1/Math.max(S.rate,e.minRate);for(o.cooldown-=v,y||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-P);y&&c(x)&&o.cooldown<=0;){if(M.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:b})),o.buffer=0,e.autoReload>0&&h()&&d();break}if(M.mag--,r.push({type:"shot",id:b,mult:M.boost?S.perfectDamage:1,spread:o.spreadOf(x)}),M.bloom=Math.min(S.bloomMax,M.bloom+S.bloomPerShot),o.cooldown+=P,M.mag===0&&(M.boost=!1),!_){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,t.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(g,m)=>{let x=i[g];!x||n[g].infiniteReserve>0||!(m>0)||(x.reserve=Math.max(x.reserve,Math.min(Math.floor(n[g].reserveMax),x.reserve+Math.floor(m))))},o.refill=()=>{for(let g of t)g&&(i[g].reserve=Math.floor(n[g].reserveMax))},o.set=(g,{mag:m,reserve:x}={})=>{i[g]&&(m!==void 0&&(i[g].mag=m),x!==void 0&&(i[g].reserve=x))},o}function Rx(n){if(n.grenadeAim||Object.hasOwn(iu,n.state))return null;if(n.state==="move")return n.aiming?"aim":n.firing?"hip":null;if(n.state==="cover"&&n.cover){if(n.cover.pop===1)return"aim";if(n.cover.blind===1)return"blind"}return null}var yo=[0,0];function hu(n,e,t,i=K.combat,s=[0,0,0]){if(e==="blind"&&n.cover){let l=n.cover,c=l.edge,h=n.tuning.radius+n.coverTuning.gap,d=c.normal;if(c.kind==="low")fi(c,l.t,yo),s[0]=yo[0]-d[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=yo[1]-d[1]*(h+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;fi(c,u<0?0:c.length,yo);let f=n.coverTuning.endInset+i.blindReach;s[0]=yo[0]+c.tangent[0]*u*f-d[0]*h,s[1]=i.muzzleUp,s[2]=yo[1]+c.tangent[1]*u*f-d[1]*h}return s}let r=i.muzzleRight*mr(n),o=Math.sin(t),a=Math.cos(t);s[1]=n.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=n.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=n.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!xo(n.boxes,s,0)));l-=.25);return s}function $E(n,e,t,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(n[o]<t.min[o]||n[o]>t.max[o])return 1/0}else{let a=(t.min[o]-n[o])/e[o],l=(t.max[o]-n[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function op(n,e,t,i,s=1/0){let r=n[0]-t[0],o=n[1]-t[1],a=n[2]-t[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let d=-l-Math.sqrt(h);return d>=0&&d<=s?d:1/0}function ZE(n,e,t,i,s,r=1/0){let o=i[0]-t[0],a=i[1]-t[1],l=i[2]-t[2],c=n[0]-t[0],h=n[1]-t[1],d=n[2]-t[2],u=o*o+a*a+l*l,f=o*c+a*h+l*d,p=u>1e-12?Math.max(0,Math.min(1,f/u)):0,g=c-o*p,m=h-a*p,x=d-l*p;if(g*g+m*m+x*x<=s*s)return 0;let v=Math.min(op(n,e,t,s,r),op(n,e,i,s,r));if(u>1e-12){let w=o*e[0]+a*e[1]+l*e[2],b=e[0]*c+e[1]*h+e[2]*d,S=c*c+h*h+d*d,M=u-w*w;if(M>1e-12*u){let _=u*b-f*w,y=u*S-f*f-s*s*u,P=_*_-M*y;if(P>=0){let R=(-_-Math.sqrt(P))/M,I=f+R*w;R>=0&&R<=r&&I>0&&I<u&&R<v&&(v=R)}}}return v}function pn(n,e,t,i,s,{ignoreBox:r=-1}={}){let o=t,a="none",l=null,c=-1,h=!1;for(let d=0;d<i.length;d++){if(d===r)continue;let u=$E(n,e,i[d],o);u<=o&&u!==1/0&&(o=u,a="world",c=d,l=null,h=!0)}for(let d of s){if(!d.alive)continue;let{head:u,body:f}=d.shapes,p=op(n,e,u.c,u.r,o);p<=o&&p!==1/0&&(o=p,a="head",l=d,c=-1,h=!0);let g=ZE(n,e,f.a,f.b,f.r,o);g<=o&&g!==1/0&&(o=g,a="body",l=d,c=-1,h=!0)}return h?{t:o,point:[n[0]+e[0]*o,n[1]+e[1]*o,n[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],kind:"none",target:null,boxIndex:-1}}function bo(n,e,t,i=[0,0,0]){if(!(e>0))return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*t(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*t(),l=Math.abs(n[1])<.9?0:1,c=l===0?1:0,h=n[1]*0-n[2]*c,d=n[2]*l-n[0]*0,u=n[0]*c-n[1]*l,f=Math.hypot(h,d,u);h/=f,d/=f,u/=f;let p=n[1]*u-n[2]*d,g=n[2]*h-n[0]*u,m=n[0]*d-n[1]*h,x=Math.cos(a)*o,v=Math.sin(a)*o;return i[0]=n[0]*r+h*x+p*v,i[1]=n[1]*r+d*x+g*v,i[2]=n[2]*r+u*x+m*v,i}function Cx({lens:n,view:e,muzzle:t,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let m=bo(e,i,l),x=pn(n,m,s,r,o,{ignoreBox:a}),v=[x.point[0]-t[0],x.point[1]-t[1],x.point[2]-t[2]],w=Math.hypot(v[0],v[1],v[2]),b=w>1e-9?[v[0]/w,v[1]/w,v[2]/w]:[m[0],m[1],m[2]];return{from:t,dir:b,hit:x}}let h=Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),d=pn(n,e,s+h,r,o,{ignoreBox:a}),u=d.kind==="none"?[n[0]+e[0]*s,n[1]+e[1]*s,n[2]+e[2]*s]:d.point,f=[u[0]-t[0],u[1]-t[1],u[2]-t[2]],p=Math.hypot(f[0],f[1],f[2]);p>1e-9?(f[0]/=p,f[1]/=p,f[2]/=p):(f[0]=e[0],f[1]=e[1],f[2]=e[2]);let g=bo(f,i,l);return{from:t,dir:g,hit:pn(t,g,s,r,o)}}var _t=Object.freeze({head:Object.freeze({cy:Ut.neckY+Ut.head.centerY,r:Ut.head.rx}),body:Object.freeze({ay:Ut.ankleHeight,by:Ut.neckY,r:Math.max(...Ut.torso.shirt.map(n=>n[0]))})});function Px(n,e=K.combat.hitPad){let[t,i,s]=n.pos,r=n.shapes;r.head.c[0]=t,r.head.c[1]=i+_t.head.cy,r.head.c[2]=s,r.head.r=_t.head.r+e,r.body.r=_t.body.r+e,r.body.a[0]=t,r.body.a[1]=i+_t.body.ay,r.body.a[2]=s,r.body.b[0]=t,r.body.b[1]=i+_t.body.by,r.body.b[2]=s}function Ix({id:n,pos:e,yaw:t=0,rail:i=null},s=K.dummy){let r={id:n,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:t,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:_t.head.r},body:{a:[0,0,0],b:[0,0,0],r:_t.body.r}}};return Px(r),r}function KE(n,e){let t=n%(4*e);return t<e?t:t<3*e?2*e-t:t-4*e}function Lx(n,e,t=K.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!n.alive)n.respawnT-=e,n.respawnT<=0&&(n.alive=!0,n.respawnT=0,n.health=t.health,n.railT=0,n.pos[0]=n.home[0],n.pos[1]=n.home[1],n.pos[2]=n.home[2]);else if(n.rail&&n.rail.half>0){n.railT+=e*Math.max(0,t.railSpeed);let i=KE(n.railT,n.rail.half),s=n.rail.axis==="x"?0:2;n.pos[0]=n.home[0],n.pos[2]=n.home[2],n.pos[s]=n.home[s]+i}Px(n)}function Dx(n,e,t=K.dummy){return!n.alive||!(e>0)?null:(n.health-=e,n.health>0?"hit":(n.health=0,n.alive=!1,n.respawnT=t.respawnTime,"kill"))}function ap(n,e,t=1){return e!=="head"&&e!=="body"?0:n.damage*t*(e==="head"?n.headMult:1)}function Nx(n,e,t){for(let i of e)if(Math.hypot(n[0]-i.pos[0],n[2]-i.pos[2])<=t)return!0;return!1}function Ox(n){let e=new Float32Array(n),t=new Uint8Array(n),i=0;return{ages:e,alive:s=>t[s]===1,spawn(){let s=-1;for(let r=0;r<n;r++){let o=(i+r)%n;if(!t[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<n;r++)e[r]>e[s]&&(s=r)}return t[s]=1,e[s]=0,i=(s+1)%n,s},clear(){t.fill(0)},update(s,r){for(let o=0;o<n;o++)t[o]&&(e[o]+=s,e[o]>r(o)&&(t[o]=0))}}}var JE=new z(0,0,1);function Ux(n,e=()=>K.feedback){let t=new Vt,i=(A=1)=>(Math.random()*2-1)*A;function s(A,L,E){let N=new Ji(A,Ct({color:L,rim:0}),E);N.frustumCulled=!1,N.count=E,t.position.set(0,-1e3,0),t.scale.setScalar(0),t.updateMatrix();for(let k=0;k<E;k++)N.setMatrixAt(k,t.matrix);return n.add(N),{mesh:N,pool:Ox(E),pos:new Float32Array(E*3),vel:new Float32Array(E*3),aux:new Float32Array(E*4)}}let r=s(new to(.5,0),q.playerOrange,8),o=s(new mt(1,1,1),q.playerOrange,24),a=s(new to(.5,0),q.gel,8),l=s(new mt(1,1,1),q.gel,24),c=s(new mt(.05,.05,.05),q.cream,48),h=s(new ir(.5,0),q.gel,96),d=s(new mt(.16,.2,.012),q.cream,48),u=s(new ir(.5,0),q.cream,40),f=s(new ir(.5,1),q.planet,4),p=s(new mt(1,1,1),q.playerOrange,16),g=new z;function m(A,L){t.updateMatrix(),A.mesh.setMatrixAt(L,t.matrix),A.mesh.instanceMatrix.needsUpdate=!0}let x=(A,L)=>{t.position.set(0,-1e3,0),t.scale.setScalar(0),t.quaternion.identity(),m(A,L)},v=(A,L,E,N,k)=>{A.pos[L*3]=E,A.pos[L*3+1]=N,A.pos[L*3+2]=k},w=(A,L,E,N,k)=>{A.vel[L*3]=E,A.vel[L*3+1]=N,A.vel[L*3+2]=k};function b(A,L,E,N,k){let W=E[0]+i(N),te=E[1]+i(N),Y=E[2]+i(N),J=Math.hypot(W,te,Y)||1;w(A,L,W/J*k*(.5+Math.random()*.5),te/J*k*(.5+Math.random()*.5),Y/J*k*(.5+Math.random()*.5))}let S=[];function M(A,L,E,N){S.push({k:A,life:L,shown:new Uint8Array(A.pool.ages.length),step(k){let W=e().gravity,te=A;for(let Y=0;Y<te.pool.ages.length;Y++)if(te.pool.alive(Y)){te.vel[Y*3+1]-=W*k;for(let J=0;J<3;J++)te.pos[Y*3+J]+=te.vel[Y*3+J]*k}},draw(k){let W=1-A.pool.ages[k]/L();t.position.set(A.pos[k*3],A.pos[k*3+1],A.pos[k*3+2]),t.scale.setScalar(E(k)*Math.max(0,W)),N?t.rotation.set(A.aux[k*4]+A.pool.ages[k]*7,A.aux[k*4+1]+A.pool.ages[k]*5,A.aux[k*4+2]):t.quaternion.identity(),m(A,k)}})}M(c,()=>e().sparkTime,()=>1,!1),M(h,()=>e().gelTime,A=>.05+h.aux[A*4+3]*.07,!1),M(d,()=>e().receiptTime,()=>1,!0);function _(A,L){S.push({k:A,shown:new Uint8Array(A.pool.ages.length),life:()=>e().flashTime,step(){},draw(E){let N=1-A.pool.ages[E]/e().flashTime;t.position.set(A.pos[E*3],A.pos[E*3+1],A.pos[E*3+2]),t.scale.setScalar(e()[L]*(.5+.5*Math.max(0,N))),t.rotation.set(A.aux[E*4],A.aux[E*4+1],A.aux[E*4+2]),m(A,E)}})}function y(A,L,E,N=1){S.push({k:A,shown:new Uint8Array(A.pool.ages.length),life:()=>e()[L],step(){},draw(k){let W=Math.max(0,1-A.pool.ages[k]/e()[L]),te=e()[E]*N*W,Y=A.aux[k*4];t.position.set(A.pos[k*3],A.pos[k*3+1],A.pos[k*3+2]),t.quaternion.setFromUnitVectors(JE,g.set(A.vel[k*3],A.vel[k*3+1],A.vel[k*3+2])),t.scale.set(te,te,Y),m(A,k)}})}let P=.9;S.push({k:u,shown:new Uint8Array(u.pool.ages.length),life:()=>P,step(A){for(let L=0;L<u.pool.ages.length;L++)if(u.pool.alive(L))for(let E=0;E<3;E++)u.pos[L*3+E]+=u.vel[L*3+E]*A},draw(A){let L=u.pool.ages[A]/P;t.position.set(u.pos[A*3],u.pos[A*3+1],u.pos[A*3+2]),t.scale.setScalar(u.aux[A*4+3]*(.5+L)*(1-L*L*L)),t.quaternion.identity(),m(u,A)}}),S.push({k:f,shown:new Uint8Array(f.pool.ages.length),life:()=>e().blastTime,step(){},draw(A){let L=Math.min(f.pool.ages[A]/Math.max(e().blastTime,.001),1),E=1-(1-Math.min(L/.6,1))**2,N=L>.6?1-(L-.6)/.4:1;t.position.set(f.pos[A*3],f.pos[A*3+1],f.pos[A*3+2]),t.scale.setScalar(Math.max(e().blastSize*E*N,.001)),t.rotation.set(0,f.aux[A*4],0),m(f,A)}}),y(p,"tracerTime","tracerWidth",.6),_(r,"flashSize"),_(a,"enemyFlashSize"),y(o,"tracerTime","tracerWidth"),y(l,"enemyTracerTime","enemyTracerWidth");let R=(A,L,E)=>{let N=A.pool.spawn();v(A,N,L[0]+E[0]*.1,L[1]+E[1]*.1,L[2]+E[2]*.1),A.aux[N*4]=i(3),A.aux[N*4+1]=i(3),A.aux[N*4+2]=i(3)},I=(A,L,E)=>{let N=E[0]-L[0],k=E[1]-L[1],W=E[2]-L[2],te=Math.hypot(N,k,W);if(!(te>1e-6))return;let Y=A.pool.spawn();v(A,Y,L[0]+N/2,L[1]+k/2,L[2]+W/2),w(A,Y,N/te,k/te,W/te),A.aux[Y*4]=te};return{flash(A,L){R(r,A,L)},tracer(A,L){I(o,A,L)},friendlyTracer(A,L){I(p,A,L)},steam(A){let L=u.pool.spawn();v(u,L,A[0],A[1],A[2]),w(u,L,i(.15),.7+Math.random()*.4,i(.15)),u.aux[L*4+3]=.16+Math.random()*.1},blast(A){let L=f.pool.spawn();v(f,L,A[0],A[1]+.3,A[2]),f.aux[L*4]=Math.random()*6;for(let E=0;E<6;E++){let N=u.pool.spawn(),k=E/6*Math.PI*2+Math.random();v(u,N,A[0],A[1]+.2,A[2]),w(u,N,Math.cos(k)*2.2,.8+Math.random()*.6,Math.sin(k)*2.2),u.aux[N*4+3]=.35+Math.random()*.2}this.gel([A[0],A[1]+.3,A[2]],[0,1,0],12)},enemyFlash(A,L){R(a,A,L)},enemyTracer(A,L){I(l,A,L)},spark(A,L){for(let E=0;E<e().sparkCount;E++){let N=c.pool.spawn();v(c,N,A[0],A[1],A[2]),b(c,N,L,.9,3)}},gel(A,L,E=e().gelCount){for(let N=0;N<E;N++){let k=h.pool.spawn();v(h,k,A[0],A[1],A[2]),b(h,k,L,1.2,e().gelSpeed),h.aux[k*4+3]=Math.random()}},receipts(A,L=e().receiptCount){for(let E=0;E<L;E++){let N=d.pool.spawn();v(d,N,A[0],A[1],A[2]),b(d,N,[0,1,0],1.5,e().gelSpeed),d.aux[N*4]=i(3),d.aux[N*4+1]=i(3),d.aux[N*4+2]=i(3)}},clear(){for(let A of S){A.k.pool.clear();for(let L=0;L<A.shown.length;L++)A.shown[L]&&(x(A.k,L),A.shown[L]=0)}},update(A){if(A>0)for(let L of S){L.step(A);let{pool:E}=L.k;E.update(A,L.life);for(let N=0;N<E.ages.length;N++)E.alive(N)?(L.draw(N),L.shown[N]=1):L.shown[N]&&(x(L.k,N),L.shown[N]=0)}}}}function jE(n,e,t){let i=Math.PI/180;return t/2*Math.tan(n*i/2)/Math.tan(e*i/2)}var QE=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),lp=n=>n<0?0:n>1?1:n;function Fx({arsenal:n,stance:e,firing:t,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:d="",bark:u=null,banner:f=null,grenades:p=null,action:g=null,weapons:m=K.weapons,combat:x=K.combat,feedback:v=K.feedback}){let w=n.current(),b=m[w],S=n.ammo[w],M=n.reload,_=s==="pad"?"RB":"R",y={show:!1,marker:0,good:[b.goodStart,b.goodEnd],perfect:[b.perfectStart,b.perfectEnd],flash:c,prompt:""};if(M){let L=Math.max(b.reloadTime,x.minReloadTime);y={...y,show:!0,marker:lp(M.t/L),prompt:M.press===null?`${_} again on the bright zone`:""}}else S.mag<=0&&(y.prompt=`${_} to reload`);let P=S.mag<=Math.max(0,v.lowAmmoFrac)*b.mag,R=b.infiniteReserve<=0&&S.reserve<=0,I={show:!1,text:"",kind:""};!M&&P&&!f&&(I.show=!0,R&&S.mag<=0?(I.text="NO AMMO",I.kind="none"):R?(I.text="LOW AMMO",I.kind="low"):S.mag<=0?(I.text=`EMPTY \u2014 RELOAD  ${_}`,I.kind="empty"):(I.text=`RELOAD  ${_}`,I.kind="low"));let A=e==="aim";return{weapon:cu[w].name,mag:S.mag,reserve:b.infiniteReserve>0?"\u221E":S.reserve,reticle:{show:A||!!t||i,gap:v.reticleMinGap+jE(r,o,a),opacity:i&&!A?v.coverReticleOpacity:1},reload:y,alert:I,hit:{show:!!l,kind:l||null},faceShow:!!h&&!f&&!h.downed.show,face:h,objective:d,bark:u,banner:f,grenades:Number.isFinite(p)?p:null,action:g&&g.text?{text:g.text,hold:Number.isFinite(g.hold)?lp(g.hold):null}:null}}function kx(n=document.body){let e=(H,oe,we,de)=>{let re=document.createElement(H);return oe&&(re.className=oe),de!==void 0&&(re.textContent=de),we&&we.appendChild(re),re},t=e("div","",n);t.id="cr-hud";let i={};for(let H of["top","right","bottom","left"])i[H]=e("div",`cr-edge cr-edge-${H}`,t);let s="http://www.w3.org/2000/svg",r=(H,oe,we)=>{let de=document.createElementNS(s,H);for(let re of Object.keys(oe))de.setAttribute(re,oe[re]);return we&&we.appendChild(de),de},o=e("div","cr-face",t),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),d=e("div","cr-banner",t),u=e("div","cr-banner-title",d),f=e("div","cr-banner-hint",d),p=e("i","cr-ring",d),g=e("div","cr-action",t),m=e("span","cr-action-text",g),x=e("i","cr-ring",g),v=e("div","cr-objective",t),w=e("div","cr-bark",t),b=e("span","cr-bark-who",w),S=e("span","cr-bark-text",w),M=e("div","cr-weapon",t),_=e("div","cr-weapon-name",M),y=e("div","cr-ammo",M),P=e("div","cr-kb",M),R=e("div","cr-prompt",M),I=e("div","cr-reload",M),A=e("div","cr-zone cr-zone-good",I),L=e("div","cr-zone cr-zone-perfect",I),E=e("div","cr-marker",I),N=e("div","cr-result",M),k=e("div","cr-alert",t),W=e("div","cr-reticle",t),te=["up","down","left","right"].map(H=>e("div",`cr-arm cr-arm-${H}`,W)),Y=e("div","cr-hit",t);e("i","cr-hit-a",Y),e("i","cr-hit-b",Y),e("i","cr-hit-ring",Y);let J={},U=(H,oe,we)=>{J[H]!==oe&&(J[H]=oe,we(oe))},le=H=>`${(H*100).toFixed(1)}%`,be=(H,[oe,we])=>{H.style.left=le(oe),H.style.width=le(Math.max(0,we-oe))};return{render(H){U("weapon",H.weapon,de=>{_.textContent=de}),U("ammo",`${H.mag}|${H.reserve}`,()=>{y.textContent=`${H.mag} / ${H.reserve}`}),U("prompt",H.reload.prompt,de=>{R.textContent=de}),U("reload.show",H.reload.show,de=>{I.hidden=!de}),U("good",`${H.reload.good}`,()=>be(A,H.reload.good)),U("perfect",`${H.reload.perfect}`,()=>be(L,H.reload.perfect)),U("marker",Math.round(H.reload.marker*500),()=>{E.style.left=le(H.reload.marker)}),U("flash",H.reload.flash,de=>{N.textContent=de&&QE[de]||"",N.dataset.kind=de||""}),U("alert",H.alert.show?`${H.alert.kind}|${H.alert.text}`:"",()=>{k.hidden=!H.alert.show,k.textContent=H.alert.text,k.dataset.kind=H.alert.kind}),U("ret.show",H.reticle.show,de=>{W.hidden=!de}),U("ret.op",Math.round(H.reticle.opacity*100),()=>{W.style.opacity=H.reticle.opacity.toFixed(2)}),U("ret.gap",Math.round(H.reticle.gap),de=>{te.forEach(re=>re.style.setProperty("--gap",`${de}px`))});let oe=H.face;if(U("face.show",!!H.faceShow,de=>{o.hidden=!de}),oe){U("face.op",Math.round(oe.face.opacity*100),()=>{o.style.opacity=oe.face.opacity.toFixed(2)}),U("face.frown",Math.round(oe.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*oe.face.frown).toFixed(1)} 70 72`)}),U("face.fill",Math.round(oe.face.fill*50),()=>{let de=92*oe.face.fill;c.setAttribute("y",(96-de).toFixed(1)),c.setAttribute("height",de.toFixed(1))});for(let de of Object.keys(i))U(`edge.${de}`,Math.round(oe.edges[de]*50),()=>{i[de].style.opacity=oe.edges[de].toFixed(2)})}U("kb",H.grenades===null?"":String(H.grenades),de=>{P.hidden=de==="",P.textContent=`KETTLEBELLS ${de}`}),U("action",H.action?H.action.text:"",de=>{g.hidden=!H.action,m.textContent=de}),U("action.hold",H.action&&H.action.hold!==null?Math.round(H.action.hold*100):-1,de=>{x.hidden=de<0,x.style.setProperty("--hold",`${Math.max(de,0)*3.6}deg`)});let we=H.banner&&H.banner.hold!==void 0&&H.banner.hold!==null?Math.round(lp(H.banner.hold)*100):-1;U("banner.hold",we,de=>{p.hidden=de<0,p.style.setProperty("--hold",`${Math.max(de,0)*3.6}deg`)}),U("banner",H.banner?`${H.banner.title}|${H.banner.hint}`:"",de=>{d.hidden=!H.banner,H.banner&&(u.textContent=H.banner.title,f.textContent=H.banner.hint)}),U("objective",H.objective||"",de=>{v.textContent=de,v.hidden=!de}),U("bark",H.bark?`${H.bark.speaker}|${H.bark.text}`:"",()=>{w.hidden=!H.bark,H.bark&&(b.textContent=H.bark.speaker,b.style.color=H.bark.color||"",S.textContent=H.bark.text)}),U("hit",H.hit.show?H.hit.kind:"",de=>{Y.hidden=!de,Y.dataset.kind=de})}}}function Bx(n){let e=Ci(Ut),t=Pi(e),i=new dt;i.name=`dummy-${n.id}`,i.add(e.root),i.add(e.shadow);let s=!!(n.rail&&n.rail.half>0),r=n.yaw,o=n.pos[0],a=n.pos[2],l="live",c=0;s&&t.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function d(u){i.position.set(n.pos[0],n.pos[1],n.pos[2]);let f=n.pos[0]-o,p=n.pos[2]-a;s&&f*f+p*p>1e-8&&(r=Math.atan2(f,p)),o=n.pos[0],a=n.pos[2],i.rotation.y=r;let g=K.feedback;if(l==="burst"){c+=u;let m=g.dummyBurstTime>0?Math.min(c/g.dummyBurstTime,1):1;h(1+.2*m),m>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=u;let m=g.dummyRespawnPop>0?Math.min(c/g.dummyRespawnPop,1):1;h(m),m>=1&&(l="live")}l!=="gone"&&(t.update(s?u*Math.min(Math.max(K.dummy.railSpeed/Ri,.3),3):u),e.update(u))}return{group:i,update:d,hit(){(l==="live"||l==="pop")&&t.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var zx="#f3efe6";function Hx(n){for(let e of Object.values(n))e&&typeof e=="object"&&Hx(e);return Object.freeze(n)}var Gx=Hx({...structuredClone(Ut),name:"doc-placeholder",colors:{...Ut.colors,hair:q.teal,shirt:zx,collar:zx},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Ut.face,brow:"uni",fixedSmile:0}});function du(n){return zt(n.map(([e,t,i,s,r,o])=>new mt(e,t,i).translate(s,r,o)),!1)}function gr(n,e,t){let i=new at(Xn(e),Ct({color:t}));return dn(i),n.add(i),i}var Mo=.09;function eA(){let n=new dt;n.name="disc",n.position.set(0,-.05,.22),gr(n,new Wt(Mo,Mo,.022,20),q.playerOrange),gr(n,new Wt(Mo-.018,Mo-.018,.034,20),q.cream);let e=[];for(let t=0;t<6;t++){let i=t/6*Math.PI*2;e.push(new mt(.02,.026,.05).rotateY(i).translate(Math.sin(i)*(Mo-.03),0,Math.cos(i)*(Mo-.03)))}return gr(n,zt(e,!1),q.ink),n}function tA(){let n=new dt;return n.name="rifle",gr(n,du([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),q.playerOrange),gr(n,du([[.05,.12,.06,0,-.07,0]]),q.ink),n.add(eA()),n}function nA(){let n=new dt;return n.name="pistol",gr(n,du([[.045,.06,.25,0,.04,.075]]),q.playerOrange),gr(n,du([[.04,.1,.05,0,-.04,0]]),q.ink),n}var iA={regret:[0,.06,.45],pistol:[0,.04,.2]},sA=new z(0,0,1),PL=new z,uu=new z;function Vx(){let n=new dt;n.name="gun";let e={regret:tA(),pistol:nA()};n.add(e.regret,e.pistol);let t="regret";e.pistol.visible=!1;let i=new z,s=new z(0,0,1),r=e.regret.getObjectByName("disc"),o=1/0;function a(h){if(!(!e[h]||h===t)){t=h;for(let d of Object.keys(e))e[d].visible=d===h}}function l(h,d){i.set(h[0],h[1],h[2]),s.set(d[0],d[1],d[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),n.quaternion.setFromUnitVectors(sA,s),c()}function c(){let h=K.feedback,d=Math.max(h.gunSquashTime,1e-6),u=o>=0&&o<d?Math.sin(Math.PI*o/d):0,f=h.gunSquash*u;n.scale.set(1+f/2,1+f/2,1-f),n.position.copy(i).addScaledVector(s,-h.gunKick*u)}return{group:n,setWeapon:a,place:l,shot(){o=0,c()},update(h,d=0){o+=h>0?h:0,h>0&&d&&(r.rotation.y+=d*h),c()},disc:r,tip(h=[0,0,0]){let d=iA[t];return n.updateMatrix(),uu.set(d[0],d[1],d[2]).applyMatrix4(n.matrix),h[0]=uu.x,h[1]=uu.y,h[2]=uu.z,h}}}var Wx=8,Xx=64,So=.12;function cp(){let n=(s,r)=>{s.deleteAttribute("uv");let o=new Je(r),a=s.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=o.r,l[c*3+1]=o.g,l[c*3+2]=o.b;return s.setAttribute("color",new Mt(l,3)),s},e=n(new Xt(So,14,10).toNonIndexed(),q.ink),t=[new mt(.03,.1,.03).translate(-.055,So+.04,0),new mt(.03,.1,.03).translate(.055,So+.04,0),new mt(.14,.03,.03).translate(0,So+.1,0)].map(s=>n(s.toNonIndexed(),q.playerOrange)),i=n(new mt(.07,.07,.012).translate(0,0,So-.002).toNonIndexed(),q.cream);return zt([e,...t,i],!1)}function Yx(n){let e=new Ji(cp(),Ct({vertexColors:!0,rim:.15}),Wx);e.name="kettlebells",e.frustumCulled=!1,e.count=0,n.add(e);let t=new Vt,i=0,s=new Float32Array(Xx*3),r=new Et;r.setAttribute("position",new Mt(s,3)),r.setDrawRange(0,0);let o=new Sa({color:q.playerOrange,dashSize:K.feedback.arcDot,gapSize:K.feedback.arcDot}),a=new ra(r,o);a.name="kettlebellArc",a.frustumCulled=!1,a.visible=!1,n.add(a);let l=new oa(r,new Jr({color:q.playerOrange,size:5,sizeAttenuation:!1,toneMapped:!1}));l.name="kettlebellArcDots",l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new at(new sr(.88,1,40).rotateX(-Math.PI/2),new yn({color:q.playerOrange,side:Mn,depthWrite:!1,toneMapped:!1}));return c.name="kettlebellRing",c.visible=!1,n.add(c),{mesh:e,line:a,ring:c,dots:l,update(h,d,u=0){i+=u>0?u:0;let f=Math.min(h.length,Wx),p=K.grenade.ballRadius/So;e.count=f;for(let g=0;g<f;g++){let m=h[g],x=m.prevPos[0]+(m.pos[0]-m.prevPos[0])*d,v=m.prevPos[1]+(m.pos[1]-m.prevPos[1])*d,w=m.prevPos[2]+(m.pos[2]-m.prevPos[2])*d,b=m.fuse<K.associate.diveWarn?1+.18*(.5+.5*Math.sin(i*40)):1;t.position.set(x,v,w),t.rotation.set(w*2.5,0,-x*2.5),t.scale.setScalar(p*b),t.updateMatrix(),e.setMatrixAt(g,t.matrix)}e.instanceMatrix.needsUpdate=!0},arc(h,d,u,f){if(!f||!(d>1)){a.visible=!1,l.visible=!1,c.visible=!1;return}let p=Math.min(d,Xx);for(let g=0;g<p;g++)s[g*3]=h[g][0],s[g*3+1]=h[g][1],s[g*3+2]=h[g][2];r.attributes.position.needsUpdate=!0,r.setDrawRange(0,p),o.dashSize=o.gapSize=Math.max(K.feedback.arcDot,.001),a.computeLineDistances(),a.visible=!0,l.visible=!0,u?(c.position.set(u[0],u[1]+.03,u[2]),c.scale.setScalar(K.grenade.killRadius),c.visible=!0):c.visible=!1},reset(){e.count=0,e.instanceMatrix.needsUpdate=!0,a.visible=!1,l.visible=!1,c.visible=!1}}}var pu=Math.PI*2,Ni=(n,e,t)=>n<e?e:n>t?t:n,rA=n=>n-pu*Math.round(n/pu),Zx=.001,hp=.5,up=.3;function oA(n,e=n.tuning||K.move){let t=n.state,i=n.speed();if(t==="bash")return{name:"bash",rate:ft.bash.duration/Math.max(K.melee.bashTime,.001)};if(t==="rev")return{name:"aim",rate:1};if(t==="execute")return{name:"bash",rate:1,loop:!0};if(t==="reviveTobble")return{name:"revive",rate:1};if(t==="downed")return{name:"crawl",rate:Ni(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(t==="roll")return{name:"roll",rate:ft.roll.duration/e.rollTime};if(t==="sprint")return{name:"sprint",rate:Ni(i/Ri,e.sprintRateMin,e.sprintRateMax)};if(t==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:Ni(i/Ri,e.runRateMin,e.runRateMax)};if(n.grenadeAim)return{name:"throw",rate:0,at:up*ft.throw.duration};if(n.aiming||n.firing)return{name:"aim",rate:1}}if(t==="coverSlide")return{name:as(n).kind==="low"?"coverLow":"coverTall",rate:1};if(t==="coverSwap")return{name:"sprint",rate:Ni(i/Ri,e.sprintRateMin,e.sprintRateMax)};if(t==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||K.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":mr(n)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:Ni(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return t==="vault"?{name:"vault",rate:ft.vault.duration/Math.max((n.coverTuning||K.cover).vaultTime,Zx)}:{name:"idle",rate:1}}function aA(n){let e=n.state==="cover"||n.state==="coverSlide"?as(n):null;return!e||e.kind!=="low"?0:n.state==="coverSlide"?Ni(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?Ni(1-Math.max(n.cover.pop,n.cover.blind||0),0,1):0}var lA=(n,e)=>4*e*n*(1-n),cA=(n,e,t)=>n>=0&&n<t?e*Math.sin(Math.PI*n/t):0;function dp(n){if(n<=.08)return 0;if(n>=.9)return pu;let e=(n-.08)/.82;return pu*e*e*(3-2*e)}var qx=.95,$x=.6,ls=new z,Yn=[0,0,1],fu=[0,0,0];function Kx(n,e=Gx){let t=Ci(e),i=Pi(t),s=new dt;s.name="player";let r=new dt;r.position.y=hp,t.root.position.y=-hp,r.add(t.root),s.add(r),s.add(t.shadow);let o=t.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=Vx();s.add(l.group);let c=new at(cp(),Ct({vertexColors:!0,rim:.15}));c.name="kettlebellInHand",c.position.set(0,.1,0),c.visible=!1,a.R.add(c);let h=0,d=1/0,u=t.root.getObjectByName("head"),f=new z,p=!0;function g(L,E,N){u.getWorldPosition(f),f.y+=t.spec.head.centerY;let k=Math.hypot(L[0]-f.x,L[1]-f.y,L[2]-f.z);return p=Yg(k,p,E,N),u.visible=p,p}let m=0,x=0,v=0,w="",b=0,S=-1,M=n.slams||0,_=1/0;function y(L,E,N){let k=n.pos,W=n.prevPos,te=n.coverTuning||K.cover,Y=aA(n);m=te.popTime>0?Math.max(Y,m+Ni(Y-m,-E/te.popTime,E/te.popTime)):Y;let J=n.state==="cover"&&n.cover&&n.cover.edge.kind==="low"?Ni(n.cover.blind||0,0,1):0;if(Y>0||J>0){let De=as(n);x=De.normal[0],v=De.normal[1]}let U=m*te.lowDrawBack+J*te.blindDrawBack;s.position.set(W[0]+(k[0]-W[0])*L+x*U,W[1]+(k[1]-W[1])*L,W[2]+(k[2]-W[2])*L+v*U),s.rotation.y=n.prevFacing+rA(n.facing-n.prevFacing)*L;let le=oA(n),be=h>0;be&&(le={name:"throw",rate:ft.throw.duration*(1-up)/Math.max(K.grenade.throwTime,.001),at:up*ft.throw.duration},h-=E);let H=be?"throw!":le.name;H!==w||n.entries!==S?(i.play(le.name,le.name==="roll"?{fade:.05}:le.at!==void 0?{fade:.06,at:le.at}:void 0),w=H,S=n.entries,b=0):le.loop&&(b+=E*le.rate,b>=ft[le.name].duration&&(b-=ft[le.name].duration,i.play(le.name,{fade:0}))),i.update(E*le.rate,le.rate===0?E:void 0),t.update(E);let oe=K.feedback,we=Math.max(oe.gunSquashTime,1e-6);d=N&&N.shot?E:d+E;let de=d<we?oe.bodyKick*Math.sin(Math.PI*d/we):0;r.rotation.x=(n.state==="roll"?dp(n.stateTime/n.tuning.rollTime):0)-de,(n.slams||0)!==M?(M=n.slams||0,_=0):_+=E;let re=n.state==="vault"?lA(Ni(n.stateTime/Math.max(te.vaultTime,Zx),0,1),te.vaultHop):0,Oe=cA(_,te.slamSquash,te.slamSquashTime);r.scale.set(1+Oe/2,1-Oe,1+Oe/2),r.position.y=hp*(1-Oe)+re,c.visible=!!(N&&N.kettlebell)&&!be,c.scale.setScalar(K.grenade.ballRadius/.12),P(le.name,E,N)}function P(L,E,N){if(s.updateMatrixWorld(!0),(L==="coverBlindTallL"?a.L:a.R).getWorldPosition(ls),s.worldToLocal(ls),N&&N.stance&&L==="coverBlindLow")Yn[0]=0,Yn[1]=Math.sin(qx),Yn[2]=Math.cos(qx);else if(n.state==="bash"||n.state==="rev"||n.state==="execute")Yn[0]=0,Yn[1]=-.05,Yn[2]=1;else if(N&&N.stance&&N.dir){let W=Math.cos(s.rotation.y),te=Math.sin(s.rotation.y);Yn[0]=N.dir[0]*W-N.dir[2]*te,Yn[1]=N.dir[1],Yn[2]=N.dir[0]*te+N.dir[2]*W}else Yn[0]=0,Yn[1]=-Math.sin($x),Yn[2]=Math.cos($x);N&&N.weapon&&l.setWeapon(N.weapon),l.place([ls.x,ls.y,ls.z],Yn),N&&N.shot&&l.shot(),l.update(E,n.state==="rev"||n.state==="execute"?K.melee.cutterSpin:0),l.group.visible=n.state!=="roll"&&n.state!=="downed"&&n.state!=="reviveTobble"&&!c.visible&&h<=0}function R(L=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(fu),ls.set(fu[0],fu[1],fu[2]).applyMatrix4(s.matrixWorld),L[0]=ls.x,L[1]=ls.y,L[2]=ls.z,L}function I(){t.dispose(),t.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:y,dispose:I,rig:t,anim:i,fadeHeadFor:g,gun:l,gunTip:R,throwNow:()=>{h=Math.max(K.grenade.throwTime,.001)},kettlebell:c}}var mu=new Set(["telegraph","burst"]),wo=(n,e,t)=>n<e?e:n>t?t:n,hA=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),Jx=.5,uA=-.6,dA=n=>n.point&&n.point.kind==="tall"?"tall":"low";function fA(n){let e=dA(n)==="tall";switch(n.state){case"run":return"run";case"flinch":case"stagger":case"executed":return"flinch";case"downed":return"crawl";case"kneel":return"revive";case"dive":return"roll";case"spawn":return"idle";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let t=n.point,i=di(-t.normal[0],-t.normal[1]);return t.tangent[0]*t.end*Math.cos(i)-t.tangent[1]*t.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function pA(n){if((n.state==="idle"||n.state==="cover"||n.state==="reload"||n.state==="flinch"||n.state==="suppress")&&n.point)return di(-n.point.normal[0],-n.point.normal[1]);if(mu.has(n.state))return di(n.aim[0]-n.pos[0],n.aim[2]-n.pos[2]);if(n.state==="run"&&n.path&&n.path[n.pathI]){let e=n.path[n.pathI];if(Math.hypot(e[0]-n.pos[0],e[1]-n.pos[2])>1e-6)return di(e[0]-n.pos[0],e[1]-n.pos[2])}return n.yaw}function mA(n){return n.state==="dead"||!n.alive?"dead":mu.has(n.state)?"angry":n.state==="flinch"||n.state==="stagger"||n.state==="downed"||n.state==="executed"||n.state==="dive"?"scared":"smug"}var ev=.03,fp=[0,.06,.32];function gA(){let n=new dt;n.name="blaster";let t=zt([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new mt(r,o,a).translate(l,c,h)),!1),i=new at(Xn(t),Ct({color:q.glorpPurple}));dn(i),n.add(i);let s=new at(new Xt(ev,10,8),new yn({color:q.gel}));return s.name="emitter",s.position.set(fp[0],fp[1],fp[2]),n.add(s),{group:n,emitter:s}}var xA=new z(0,0,1),ti=new z,ks=new z,jx=.6,Qx=.95;function tv(n){let e=Ci(Ut),t=Pi(e),i=new dt;i.name=`associate-${n.id}`;let s=new dt;s.position.y=Jx,e.root.position.y=-Jx,s.add(e.root),i.add(s),i.add(e.shadow);let r=e.root.getObjectByName("body").children[2],o=gA();i.add(o.group);let a="",l=0,c="",h=0,d=n.yaw,u="live",f=0,p=!1,g=0,m=0,x=0;function v(){u="live",f=0,h=0,d=n.yaw,p=!1,g=0,i.visible=!0,i.scale.setScalar(1),s.rotation.x=0,a="",c="",l=0,o.emitter.scale.setScalar(1)}function w(S,M){let _=K.feedback,y=K.cover,P=K.associate;if(n.state==="unused"){i.visible=!1;return}if(n.state==="spawn"&&(u==="burst"||u==="gone")&&v(),!n.alive&&n.state==="dead"&&u==="live"&&(u="burst",f=0),u==="live"&&(i.visible=!0),u==="burst"){f+=M;let le=_.dummyBurstTime>0?Math.min(f/_.dummyBurstTime,1):1;i.scale.setScalar(1+.2*le),le>=1&&(u="gone",i.visible=!1)}if(u==="gone")return;let R=u==="burst",I=n.pos,A=n.prevPos,L=!R&&n.point&&n.point.kind==="low"&&n.state!=="run"&&n.state!=="dead",E=L?wo(1-Math.max(n.pop,n.blind),0,1):0;h=y.popTime>0?Math.max(E,h+wo(E-h,-M/y.popTime,M/y.popTime)):E;let N=L?wo(n.blind,0,1):0;L&&(m=n.point.normal[0],x=n.point.normal[1]);let k=h*y.lowDrawBack+N*y.blindDrawBack,W=n.state==="spawn"?uA*(1-wo(n.stateT/Math.max(K.pad.riseTime,.001),0,1)):0;i.position.set(A[0]+(I[0]-A[0])*S+m*k,A[1]+(I[1]-A[1])*S+W,A[2]+(I[2]-A[2])*S+x*k);let te=n.state==="run"||mu.has(n.state)?n.prevYaw+hA(n.yaw-n.prevYaw)*S:pA(n);if(d=Gt(d,te,P.turnRate*1.5*M),i.rotation.y=d,R)return;let Y=fA(n);Y!==a?(t.play(Y,Y==="flinch"?void 0:{fade:.1}),a=Y,l=0):n.state==="executed"&&(l+=M,l>=ft.flinch.duration&&(l=0,t.play("flinch")));let J=Y==="run"?wo(P.runSpeed/Ri,.5,3):1;Y==="crawl"&&(J=Math.hypot(I[0]-A[0],I[2]-A[2])>1e-5?1:0),Y==="roll"&&(J=ft.roll.duration/Math.max(P.diveReaction+P.diveTime,.001)),s.rotation.x=Y==="roll"?dp(wo(n.stateT/Math.max(P.diveReaction+P.diveTime,.001),0,1)):0,t.update(M*J,J===0?M:void 0),e.update(M);let U=mA(n);U!==c&&(e.face.setExpression(U),c=U),b(Y,M)}function b(S,M){o.group.visible=n.state!=="downed"&&n.state!=="dive",i.updateMatrixWorld(!0),r.getWorldPosition(ti);let _=ti.x,y=ti.y,P=ti.z;i.worldToLocal(ti);let R=ti.x,I=ti.y,A=ti.z;if(mu.has(n.state)){let L=Math.cos(i.rotation.y),E=Math.sin(i.rotation.y),N=n.aim[0]-_,k=n.aim[2]-P;ks.set(N*L-k*E,n.aim[1]-y,N*E+k*L)}else S==="coverBlindLow"?ks.set(0,Math.sin(Qx),Math.cos(Qx)):n.state==="suppress"?ks.set(0,.05,1):ks.set(0,-Math.sin(jx),Math.cos(jx));if(ks.lengthSq()<1e-12&&ks.set(0,0,1),ks.normalize(),o.group.position.set(R,I,A),o.group.quaternion.setFromUnitVectors(xA,ks),p){g+=M;let L=.5+.5*Math.sin(g*2*Math.PI*8),E=K.feedback.glintSize/ev;o.emitter.scale.setScalar(1+(E-1)*L)}else o.emitter.scale.setScalar(1)}return{group:i,update:w,reset:v,death(){u==="live"&&(u="burst",f=0)},glint(S){S&&!p&&(g=0),p=!!S},tip(S=[0,0,0]){return i.updateMatrixWorld(!0),o.emitter.getWorldPosition(ti),S[0]=ti.x,S[1]=ti.y,S[2]=ti.z,S},rig:e,anim:t,blaster:o}}var nl=new z;function ni(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;nl.copy(e),nl[i]=0,nl.normalize();let c=.5*o/(o+a),h=1-nl.angleTo(n)/l;return Math.sign(nl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var gu=class n extends mt{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new z,c=new z,h=new z(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,g=new z,m=.5/o;for(let x=0,v=0;x<d.length;x+=3,v+=2)switch(l.fromArray(d,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[x+0]=h.x*Math.sign(l.x)+c.x*r,d[x+1]=h.y*Math.sign(l.y)+c.y*r,d[x+2]=h.z*Math.sign(l.z)+c.z*r,u[x+0]=c.x,u[x+1]=c.y,u[x+2]=c.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[v+0]=ni(g,c,"z","y",r,i),f[v+1]=1-ni(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[v+0]=1-ni(g,c,"z","y",r,i),f[v+1]=1-ni(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[v+0]=1-ni(g,c,"x","z",r,e),f[v+1]=ni(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),f[v+0]=1-ni(g,c,"x","z",r,e),f[v+1]=1-ni(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),f[v+0]=1-ni(g,c,"x","y",r,e),f[v+1]=1-ni(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[v+0]=ni(g,c,"x","y",r,e),f[v+1]=1-ni(g,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function iv(n){for(let e of Object.values(n))e&&typeof e=="object"&&iv(e);return Object.freeze(n)}var nv=(n,e,t)=>{let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8)r|=Math.round((i>>o&255)+((s>>o&255)-(i>>o&255))*t)<<o;return"#"+r.toString(16).padStart(6,"0")},xr=iv({...Ut,name:"tobble",hair:{...Ut.hair,quiff:!1},colors:{...Ut.colors,shirt:q.cream,collar:nv(q.cream,q.ink,.2),skin:q.tobbleMint,hair:nv(q.tobbleMint,q.ink,.45),backpack:q.teal,mat:q.lilac},outfit:{collar:!1,lanyard:!0,logo:!1,headset:!1},face:{...Ut.face,brow:"pair",fixedSmile:.4},thirdEye:{y:.13,r:.05},backpack:{w:.5,h:.6,d:.3}});var mp=(n,e,t)=>n<e?e:n>t?t:n,av=n=>mp(n,0,1),sv=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),vA=1/60,rv=n=>n.point&&n.point.kind==="tall"?"tall":"low";function _A(n,e=n.speed||0){let t=e>.3;switch(n.state){case"cover":return rv(n)==="tall"?"coverTall":"coverLow";case"shoot":return rv(n)==="tall"?"aim":"coverPop";case"revive":return n.kneeling?"revive":t?"run":"idle";case"downed":return"crawl";default:return t?"run":"idle"}}function yA(n){return n.downed||!n.point||n.point.kind!=="low"||n.state!=="cover"&&n.state!=="shoot"?0:av(1-n.pop)}function bA(){let e=new Uint8Array(16384),t=new Je(q.tobbleMint),i=new Je(q.ink),s=(o,a,l)=>Math.abs(o-64/2+.5)<l&&Math.abs(a-64/2+.5)<64*.4||Math.abs(a-64/2+.5)<l&&Math.abs(o-64/2+.5)<64*.4;for(let o=0;o<64;o++)for(let a=0;a<64;a++){let l=(o*64+a)*4,c=s(a,o,8),h=s(a,o,13),d=c?t:i;e[l]=Math.round(d.r*255),e[l+1]=Math.round(d.g*255),e[l+2]=Math.round(d.b*255),e[l+3]=h?255:0}let r=new Qs(e,64,64,Wn);return r.colorSpace=Jt,r.magFilter=an,r.minFilter=an,r.needsUpdate=!0,r}function gp(n,e){let t=new at(Xn(n),Ct({color:e}));return dn(t),t}var pp=[0,.04,.2];function MA(){let n=new dt;n.name="tobblePistol";let e=[[.045,.06,.25,0,.04,.075],[.04,.1,.05,0,-.04,0]];return n.add(gp(zt(e.map(([t,i,s,r,o,a])=>new mt(t,i,s).translate(r,o,a)),!1),q.tobbleMint)),n}var SA=new z(0,0,1),Oi=new z,To=new z,ov=.6;function lv(n){let e=Ci(xr),t=Pi(e),i=new dt;i.name="tobble",i.add(e.root);let r=e.root.getObjectByName("body").children[2],o=e.root.getObjectByName("hips"),a=e.root.getObjectByName("head"),l=new dt;l.name="thirdEye";let c=xr.thirdEye,h=new at(new Xt(c.r,12,10),new yn({color:q.eyeWhite})),d=new at(new Xt(c.r*.5,10,8),new yn({color:q.ink}));d.position.z=c.r*.8,l.add(h,d),l.position.set(0,xr.head.centerY+c.y,.27),a.add(l);let u=xr.backpack,f=new dt;f.name="backpack",f.add(gp(new gu(u.w,u.h,u.d,3,.06),xr.colors.backpack));let p=gp(new Wt(.085,.085,u.w*.95,12).rotateZ(Math.PI/2),xr.colors.mat);p.position.y=u.h/2+.05,f.add(p),f.position.set(0,.2,-.32),o.add(f);let g=MA();i.add(g);let m=new ia(new $r({map:bA(),depthTest:!1,depthWrite:!1,toneMapped:!1}));m.name="tobblePlus",m.renderOrder=20,m.visible=!1,i.add(m);let x="",v=0,w=n.yaw,b=0,S=0,M="",_=0;function y(){x="",v=0,w=n.yaw,M="",_=0,i.position.set(n.start[0],n.start[1],n.start[2]),i.rotation.y=n.startYaw,m.visible=!1}function P(I,A){let L=K.tobble,E=K.cover,N=L.scale;_+=A>0?A:0,i.scale.setScalar(N);let k=n.pos,W=n.prevPos,te=Math.hypot(k[0]-W[0],k[2]-W[2])/vA,Y=yA(n);v=E.popTime>0?Math.max(Y,v+mp(Y-v,-A/E.popTime,A/E.popTime)):Y,Y>0&&n.point&&(b=n.point.normal[0],S=n.point.normal[1]);let J=v*E.lowDrawBack*N,U=n.point&&!n.downed?L.popLift*av(n.pop):0;i.position.set(W[0]+(k[0]-W[0])*I+b*J,W[1]+(k[1]-W[1])*I+U,W[2]+(k[2]-W[2])*I+S*J);let le=n.prevYaw+sv(n.yaw-n.prevYaw)*I;w+=sv(le-w)*Math.min(1,A*25),i.rotation.y=w;let be=_A(n,te);be!==x&&(t.play(be,{fade:.1}),x=be);let H=1;be==="run"?H=mp(te/(Ri*N),.5,3):be==="crawl"&&(H=te>.001?1:0),t.update(A*H,H===0?A:void 0),e.update(A);let oe=n.downed?"scared":n.state==="shoot"?"angry":"smug";oe!==M&&(e.face.setExpression(oe),M=oe),m.visible=n.downed,n.downed&&(m.position.set(0,.95/N+.05*Math.sin(_*4),0),m.scale.setScalar(.5/N)),R()}function R(){g.visible=!n.downed&&n.state!=="revive",i.updateMatrixWorld(!0),r.getWorldPosition(Oi);let I=Oi.x,A=Oi.y,L=Oi.z;if(i.worldToLocal(Oi),g.position.copy(Oi),n.state==="shoot"&&n.target&&n.target.pos){let E=Math.cos(i.rotation.y),N=Math.sin(i.rotation.y),k=n.target.pos[0]-I,W=n.target.pos[2]-L;To.set(k*E-W*N,n.target.pos[1]+1.2-A,k*N+W*E)}else To.set(0,-Math.sin(ov),Math.cos(ov));To.lengthSq()<1e-12&&To.set(0,0,1),To.normalize(),g.quaternion.setFromUnitVectors(SA,To)}return y(),{group:i,update:P,reset:y,rig:e,anim:t,pistol:g,plus:m,eye:l,pack:f,tip(I=[0,0,0]){return i.updateMatrixWorld(!0),Oi.set(pp[0],pp[1],pp[2]).applyMatrix4(g.matrixWorld),I[0]=Oi.x,I[1]=Oi.y,I[2]=Oi.z,I}}}function wA(n){return n==="open"?{ring:q.gel,pulse:!0,steam:!0}:n==="closed"?{ring:q.ink,pulse:!1,steam:!1}:{ring:q.lilac,pulse:!1,steam:!1}}var TA="#e6c28c",EA="#b98a50",AA=.3;function RA(n){let e=(i,s)=>{i.deleteAttribute("uv");let r=new Je(s),o=i.getAttribute("position").count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;return i.setAttribute("color",new Mt(a,3)),i},t=[e(new Wt(n,n,.08,32).translate(0,.04,0).toNonIndexed(),TA)];for(let i=-3;i<=3;i++){let s=i*(n/3.6),r=2*Math.sqrt(Math.max(n*n-s*s,.01))-.04;t.push(e(new mt(r,.006,.035).translate(0,.081,s).toNonIndexed(),EA))}return zt(t,!1)}function cv(n,e,t=null){let i=e.map(r=>{let o=K.pad.radius,a=new dt;a.name=`sauna-${r.id}`,a.position.set(r.pos[0],r.pos[1],r.pos[2]),a.add(new at(RA(o),Ct({vertexColors:!0,rim:.1})));let l=new yn({color:q.lilac,side:Mn,toneMapped:!1}),c=new at(new sr(o*.9,o*1.06,40).rotateX(-Math.PI/2),l);c.position.y=.09,a.add(c),n.add(a);let h=fo({text:"SPAWN SAUNA",w:2.4,h:.7,bg:q.glorpPurple,seed:9});return h.position.set(r.pos[0],3.05,r.pos[2]+1.3),h.rotation.y=Math.PI,n.add(h),{pad:r,group:a,ring:c,ringMat:l,sign:h,color:"",steamT:0}}),s=0;return{items:i,update(r){s+=r>0?r:0;for(let o of i){let a=wA(o.pad.state);if(a.ring!==o.color&&(o.color=a.ring,o.ringMat.color.set(a.ring)),o.ring.scale.setScalar(a.pulse?1+.07*Math.sin(s*6):1),a.steam&&t&&r>0){if(o.steamT+=r,o.steamT>=AA){o.steamT=0;let l=Math.random()*Math.PI*2,c=Math.random()*K.pad.radius*.8;t.steam([o.pad.pos[0]+Math.cos(l)*c,.1,o.pad.pos[2]+Math.sin(l)*c])}}else a.steam||(o.steamT=0)}},reset(){for(let r of i)r.steamT=0,r.color=""}}}var Eo=Math.PI/180,hv=.3,xp=1e-6,CA=64,PA=4,IA=64,uv=(n,e,t)=>Math.max(e,Math.min(t,n));function _p(n,e,t=K.grenade,i=[0,0,0]){let s=uv(e+t.throwLift*Eo,-30*Eo,70*Eo),r=Math.cos(s);return i[0]=t.throwSpeed*Math.sin(n)*r,i[1]=t.throwSpeed*Math.sin(s),i[2]=t.throwSpeed*Math.cos(n)*r,i}function xu(n,e,t=K.combat,i=[0,0,0]){if(n.cover)return hu(n,"blind",e,t,i);let s=lu(e),r=au(e);i[1]=n.pos[1]+1.6;for(let o=1;o>=0&&(i[0]=n.pos[0]+(s[0]*.2+r[0]*.3)*o,i[2]=n.pos[2]+(s[2]*.2+r[2]*.3)*o,!(o===0||!xo(n.boxes,i,0)));o-=.25);return i}var vr=[0,0,0];function LA(n,e){let t=null,i=1/0;for(let a of n){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),d=Math.hypot(l,c,h);d<i&&(i=d,t=a)}if(vr[0]=vr[1]=vr[2]=0,!t)return vr[1]=1,vr;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=t.min[a]-e[a],c=e[a]-t.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return vr[s]=o,vr}var vp={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},Ui=[0,0,0];function dv(n,e,t,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=n.pos,l=n.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=uv(Math.ceil(c/r),1,CA),d=e/h;for(let u=0;u<h;u++){let f=d;for(let p=0;p<=PA&&f>0;p++){Ui[0]=a[0]+l[0]*f,Ui[1]=a[1]+l[1]*f-.5*o*f*f,Ui[2]=a[2]+l[2]*f;let g=Qn(t,a,Ui,r);if(g>=1){a[0]=Ui[0],a[1]=Ui[1],a[2]=Ui[2],l[1]-=o*f;break}a[0]+=(Ui[0]-a[0])*g,a[1]+=(Ui[1]-a[1])*g,a[2]+=(Ui[2]-a[2])*g,l[1]-=o*f*g;let m=LA(t,a),x=l[0]*m[0]+l[1]*m[1]+l[2]*m[2];if(x<0){let v=l[0]-m[0]*x,w=l[1]-m[1]*x,b=l[2]-m[2]*x;l[0]=v*i.friction-m[0]*x*i.restitution,l[1]=w*i.friction-m[1]*x*i.restitution,l[2]=b*i.friction-m[2]*x*i.restitution,-x>=hv&&(s.clank=!0),m[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-m[0]*r,s.upPos[1]=a[1]-m[1]*r,s.upPos[2]=a[2]-m[2]*r)}if(a[0]+=m[0]*xp,a[1]+=m[1]*xp,a[2]+=m[2]*xp,m[1]>.7&&Math.hypot(l[0],l[1],l[2])<hv){l[0]=l[1]=l[2]=0,n.resting=!0,s.rested=!0;return}f*=1-g}}}function DA(n,e,t,i=K.grenade){return dv(n,e,t,i,vp),vp.clank?"clank":vp.rested?"rest":null}var NA={pos:[0,0,0],vel:[0,0,0],prevPos:[0,0,0],resting:!1,fuse:0},il={clank:!1,rested:!1,up:!1,upPos:[0,0,0]};function fv(n,e,t,i=K.grenade,s){let r=NA;for(let h=0;h<3;h++)r.pos[h]=n[h],r.vel[h]=e[h],r.prevPos[h]=n[h];r.resting=!1;let o=Math.min(s.length,IA),a=Math.floor(Math.max(0,i.arcTime)*30+1e-9),l=0,c=null;for(let h=0;h<=a&&l<o;h++){let d=s[l++];if(d[0]=r.pos[0],d[1]=r.pos[1],d[2]=r.pos[2],h===a||r.resting)break;for(let u=0;u<2;u++)dv(r,1/60,t,i,il),!c&&il.up&&(c=[il.upPos[0],il.upPos[1],il.upPos[2]])}return{count:l,land:c}}function pv(n,e=K.grenade){return n>=0?n<=e.killRadius?e.killDamage:n>=e.radius?0:e.damage*(1-n/e.radius):0}function mv(n,e,t,i=K.grenade){let s=e[0]-n[0],r=e[2]-n[2],o=e[1]-n[1],a=s*Math.sin(t)+r*Math.cos(t),l=Math.abs(s*Math.cos(t)-r*Math.sin(t));if(!(a>.01)||l>.3)return null;let c=i.throwSpeed,h=i.gravity,d=x=>{let v=Math.cos(x);return a*Math.tan(x)-h*a*a/(2*c*c*v*v)},u=-30*Eo,f=Math.min(70*Eo,Math.atan(c*c/(h*a)));if(!(f>u)||d(u)>o||d(f)<o)return null;let p=u,g=f;for(let x=0;x<50;x++){let v=(p+g)/2;d(v)<o?p=v:g=v}let m=(p+g)/2;return Math.abs(d(m)-o)<=.3?m-i.throwLift*Eo:null}function gv(n=K.grenade){let e=[];return{live:e,throw(t,i){let s={pos:[t[0],t[1],t[2]],vel:[i[0],i[1],i[2]],prevPos:[t[0],t[1],t[2]],resting:!1,fuse:n.fuse};return e.push(s),s},step(t,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=t,DA(o,t,i,n)==="clank"&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.fuse<=1e-9&&(s.push({type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}function xv(n=K.grenade){let e={count:Math.min(n.start,n.carry),take(){return e.count<=0?!1:(e.count--,!0)},refill(){e.count=n.carry},reset(){e.count=Math.min(n.start,n.carry)}};return e}var vv=1.49,_v=.2;function yv(n,{spacing:e,cornerZone:t}){e=Math.max(_v,Number.isFinite(e)?e:_v);let i={cornerZone:t},s=[],r=(o,a,l)=>{let c=fi(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return n.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,Us(o,c,i))}r(o,o.length,Us(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function _r(n,e,t=[0,0]){let i=n.kind==="low"?0:n.end*e;return t[0]=n.pos[0]+n.tangent[0]*i,t[1]=n.pos[1]+n.tangent[1]*i,t}function En(n,e,t){let i=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:pn(e,[i/o,s/o,r/o],o,n,[]).t>=o-1e-6}function vu(n,e,t,i=K){let s=[n.pos[0],n.kind==="low"?i.combat.crouchHead:vv,n.pos[1]],r=_r(n,i.associate.popShift),o=[r[0],vv,r[1]];return{protected:!En(t,s,e),canShoot:En(t,o,e)}}var OA=Math.PI/180,UA=1.5,_u=[0,0,0],yu=[0,0,0],FA={bash:n=>[n.melee.bashRange,n.melee.bashAngle],cutter:n=>[n.melee.cutterReach,n.melee.cutterAngle],finish:n=>[n.melee.executeRange,n.melee.executeAngle]};function sl(n,e,t,i,s,r=K){let[o,a]=FA[n](r),l=a*OA/2,c=null,h=1/0;for(let d of i){if(!d.alive||d.state==="unused"||d.state==="executed")continue;let u=d.state==="downed";if(n==="finish"&&!u)continue;let f=d.pos[0]-e[0],p=d.pos[2]-e[2],g=Math.hypot(f,p);g>o||g>=h||g>1e-6&&Math.abs(ui(Math.atan2(f,p)-t))>l+1e-9||(_u[0]=e[0],_u[1]=e[1]+1,_u[2]=e[2],yu[0]=d.pos[0],yu[1]=d.pos[1]+(u?.3:1),yu[2]=d.pos[2],En(s,_u,yu)&&(c=d,h=g))}return c}function bv({downed:n,clear:e,tobble:t,pos:i,yaw:s,enemies:r,boxes:o,t:a=K}){if(n)return{kind:"giveUp",hold:!0,target:null};if(e)return{kind:"again",hold:!1,target:null};if(t&&t.downed){let c=a.tobble?.playerReviveRange??UA;if(Math.hypot(t.pos[0]-i[0],t.pos[2]-i[2])<=c)return{kind:"reviveTobble",hold:!0,target:t}}let l=sl("finish",i,s,r,o,a);return l?{kind:"finish",hold:!1,target:l}:{kind:null,hold:!1,target:null}}var Mv=Object.freeze({kbm:Object.freeze({melee:"F",interact:"E",grenade:"G"}),pad:Object.freeze({melee:"B",interact:"X",grenade:"LB"})}),Sv={throw:n=>`Release ${n.grenade}  throw`,reviveTobble:n=>`Hold ${n.interact}  revive Tobble`,finish:n=>`${n.interact}  finish`,revving:()=>"Cheat Day: run into a Rep",bash:n=>`${n.melee}  bash`,rev:n=>`Hold ${n.melee}  rev Cheat Day`,giveUp:n=>`Hold ${n.interact}  renew your membership`,giveUpTobble:n=>`Tobble is coming! Hold ${n.interact} to renew your membership`,sauna:n=>`Close the Spawn Sauna (${n.grenade} kettlebell)`};function rl(n,e="kbm"){let t=Object.hasOwn(Sv,n)?Sv[n]:null;return t?t(Mv[e]||Mv.kbm):""}var Mp=n=>n<0?0:n>1?1:n,yp=new Set(["move","sprint"]),bp=new Set(["move","sprint","cover"]);function kA({device:n="kbm",grenadeHeld:e=!1,interact:t=null,reviving:i=!1,revving:s=!1,bashTarget:r=!1,cutterNear:o=!1,regretInHand:a=!1,holdFrac:l=0}={}){let c=(h,d=null)=>({text:rl(h,n),hold:d});return e?c("throw"):i||t&&t.kind==="reviveTobble"?c("reviveTobble",i?Mp(l):0):t&&t.kind==="finish"?c("finish"):s?c("revving"):r?c("bash"):a&&o?c("rev"):null}function wv({mover:n,fight:e,arsenal:t,bag:i,cam:s,sfx:r,effects:o,views:a=[],health:l,playerView:c=null,grenadeView:h=null,boxes:d,hooks:u={}}){let f=Zh(),p=Array.from({length:64},()=>[0,0,0]),g=[0,0,0],m=[0,0,0],x=[0,0,0],v=[0,1,0],w=0,b=0,S="kbm",M=!1,_=0,y=0,P=!1,R=0,I=!1,A=null,L={count:0,land:null,show:!1},E=null,N=0,k=()=>{u.restart&&u.restart()},W=De=>{u.marker&&u.marker(De)},te=(De,Me=1)=>(x[0]=De.pos[0],x[1]=De.pos[1]+Me,x[2]=De.pos[2],x),Y=De=>{let Me=De.pos[0]-n.pos[0],Ae=De.pos[2]-n.pos[2],Te=Math.hypot(Me,Ae)||1;return v[0]=Me/Te,v[1]=.5,v[2]=Ae/Te,v};function J(){A&&A.e.state==="executed"&&e.releaseExecution(A.e),A=null}function U(De,Me,Ae){return e.beginExecution(De)?n.execute([De.pos[0],De.pos[2]],Me)?(A={e:De,kind:Ae,gelT:0,sfxT:0},!0):(e.releaseExecution(De),!1):!1}function le(De){let Me=K.feedback;if(De.type==="bashHit"){let Ae=sl("bash",n.pos,w,e.enemies,d);if(s.bump(),r.play("bash",Me.bashVolume),!Ae)return;let Te=e.bash(Ae);o.gel(te(Ae),Y(Ae),Me.gelCount),Te==="hit"&&W("body")}else if(De.type==="executeDone"){let Ae=A;if(A=null,!Ae)return;s.bump(1.5),e.finishExecution(Ae.e),Ae.kind==="stomp"&&r.play("finish",Me.bashVolume)}else De.type==="reviveDone"&&e.reviveTobble()&&r.play("revive",Me.reviveVolume)}function be(){if(!(R>0)){if(!i.take()){r.play("dry",K.feedback.reloadVolume);return}xu(n,w,K.combat,g),_p(w,b,K.grenade,m),e.throwGrenade(g,m),c&&c.throwNow(),r.play("throw",K.feedback.throwVolume),s.kick(1.5,0),R=K.grenade.throwTime}}function H(){h&&h.arc(p,L.count,L.land,L.show)}function oe(){let De=K.melee.promptRange;for(let Me of e.enemies){if(!Me.alive||Me.state==="unused"||Me.state==="downed"||Me.state==="executed")continue;let Ae=Me.pos[0]-n.pos[0],Te=Me.pos[2]-n.pos[2],F=Math.hypot(Ae,Te);if(!(F>De)&&(F<.5||Math.cos(Math.atan2(Ae,Te)-w)>=.5))return!0}return!1}function we(){f.reset(),M=!1,_=0,y=0,P=!1,R=0,I=!1,A=null,L={count:0,land:null,show:!1},E=null,N=0,H()}function de(De,Me){w=Me.camYaw,b=Me.camPitch||0,S=Me.device||"kbm";let Ae=n,Te=K.melee,F=K.grenade;if(R>0&&(R=Math.max(0,R-De)),L.show=!1,E=null,N=0,l.downed){A&&J(),f.reset(),M=!1,I=!1,_=0,Me.interactHeld||(P=!0),y=Me.interactHeld&&P?y+De:0,N=Mp(y/Math.max(K.health.giveUpHold,.001)),H(),y>=K.health.giveUpHold-1e-9&&(y=0,k());return}y=0,P=!1,A&&(Ae.state!=="execute"||A.e.state!=="executed")&&J();let $=f.update(Me.meleeHeld,Me.meleePressed,De,Te.holdTime),ne=f.holding();Me.meleeHeld||(M=!1);let ae=t.current()==="regret"&&t.reload===null&&!(t.switching>0);if($&&Ae.bash(w),Ae.state==="rev"&&(!ne||M||!ae||Me.grenadeHeld)?Ae.rev(!1):ne&&!M&&ae&&!Me.grenadeHeld&&R<=0&&yp.has(Ae.state)&&Ae.rev(!0),Ae.state==="rev"){_-=De,_<=0&&(_=Math.max(Te.revPulse,.05),r.play("rev",K.feedback.revVolume));let G=sl("cutter",Ae.pos,Ae.facing,e.enemies,d);G&&U(G,Te.cutTime,"cut")&&r.play("cut",K.feedback.cutVolume)}else _=0;if(A&&Ae.state==="execute"){let G=K.feedback;if(A.gelT-=De,A.sfxT-=De,A.kind==="cut"){if(A.gelT<=0){A.gelT=Math.max(G.cutGelEvery,.02),o.gel(te(A.e),Y(A.e),5);let ve=K.camera.bump.amount;ve>0&&s.bump(G.executeShake/ve)}A.sfxT<=0&&(A.sfxT=.3,r.play("cut",G.cutVolume))}}let ee=e.tobble,pe=bv({downed:!1,clear:e.clear,tobble:ee,pos:Ae.pos,yaw:Ae.facing,enemies:e.enemies,boxes:d});if(pe.kind==="again"&&Me.interactPressed){k();return}pe.kind==="finish"&&Me.interactPressed&&bp.has(Ae.state)&&U(pe.target,Te.finishTime,"stomp")&&s.bump(.6),pe.kind==="reviveTobble"&&Me.interactHeld&&bp.has(Ae.state)&&Ae.reviveTobble(ee.pos);let se=Ae.state==="reviveTobble";se&&(N=Mp(Ae.stateTime/Math.max(Qf(),.001)));let xe=I;if(I=!!Me.grenadeHeld&&Ae.grenadeAim,xe&&!Me.grenadeHeld&&be(),I&&i.count>0){xu(Ae,w,K.combat,g),_p(w,b,F,m);let G=fv(g,m,d,F,p);L={count:G.count,land:G.land,show:!0}}H();let Ne=bp.has(Ae.state),Ge=yp.has(Ae.state)&&R<=0;E=kA({device:S,grenadeHeld:I&&i.count>0,interact:Ne?pe:null,reviving:se,revving:Ae.state==="rev",bashTarget:yp.has(Ae.state)&&Ae.bashReadyAt<=Ae.clock&&!!sl("bash",Ae.pos,w,e.enemies,d),cutterNear:Ge&&oe(),regretInHand:ae,holdFrac:N})}function re(){n.state==="rev"&&(n.rev(!1),M=!0)}function Oe(De,Me){let Ae=null;for(let Te=0;Te<3;Te++){xu(n,w,K.combat,g);let F=Math.atan2(De-g[0],Me-g[2]);if(w=F,Ae=mv(g,[De,K.grenade.ballRadius,Me],F),Ae===null)return!1}return s.yaw=w,s.pitch=Ae,!0}return{step:de,reset:we,onAction:le,onPlayerHit:re,aimThrow:Oe,prompt:()=>E,arc:()=>({count:L.count,land:L.land,show:L.show}),busy:()=>R>0,armed:()=>I&&i.count>0,giveUpFrac:()=>l.downed?N:null,execution:()=>A?{id:A.e.id,kind:A.kind}:null}}function Tv(n=K.health){let e=-1,t=0,i=0,s=!1,r={hp:n.max,downed:!1,downT:0,sinceHit:0,fraction(){return n.max>0?Math.max(0,Math.min(1,r.hp/n.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,t=0,n.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=n.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,n.reviveHealth*n.max),r.sinceHit=0,e=-1,t=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&n.standInRevive>0&&(i+=o,i>=n.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<n.max&&r.sinceHit>=n.regenDelay&&(e<0&&(e=r.hp,t=0),t+=Math.min(o,r.sinceHit-n.regenDelay),r.hp=n.regenTime>0&&t<n.regenTime?e+(n.max-e)*t/n.regenTime:n.max),r.hp>=n.max&&(r.hp=n.max,e=-1),null)},reset(){r.hp=n.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,t=0,i=0,s=!1}};return r}var BA=new Set(["cover","coverSlide","coverSwap"]),zA=[],HA=wp(),GA=wp(),bu=[null];function wp(){return{alive:!0,shapes:{head:{c:[0,0,0],r:_t.head.r},body:{a:[0,0,0],b:[0,0,0],r:_t.body.r}}}}function Ev(n){return BA.has(n.state)?as(n):null}function Sp(n,e,t,i,s){let r=n.shapes;return r.head.r=_t.head.r,r.body.r=_t.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+t,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],n}function Mu(n,e=wp(),t=K.combat){let i=Ev(n),s=!!i&&i.kind==="low"&&!(n.cover&&n.cover.pop>=.5);return e.alive=!0,s?Sp(e,n.pos,t.crouchHead,.1,t.crouchBodyTop):Sp(e,n.pos,_t.head.cy,_t.body.ay,_t.body.by)}function Av(n,e,t,i,s,r=K.combat){let o=Ev(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return pn(n,e,t,i,zA);if(!a)return bu[0]=Mu(s,HA,r),pn(n,e,t,i,bu);let l=_t.body.by;return bu[0]=Sp(GA,s.pos,_t.head.cy,l-r.shoulderDrop,l),pn(n,e,t,i,bu)}var Rv=.9;function ol(n,e,t,i){return Qn(n,[e[0],Rv,e[1]],[t[0],Rv,t[1]],i)===1}var al=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function Cv(n,e,{radius:t,linkMax:i}){let s=n.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)al(s[o],s[a])<=i&&ol(e,s[o],s[a],t)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function VA(n,e,t,i,s){let{nodes:r,links:o}=n,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let m of t)h[m]=!0;let d=[];for(let m of e)a[m]=al(i,r[m]),d.push(m);let u=m=>a[m]+al(r[m],s),f=-1,p=1/0;for(;d.length;){let m=0;for(let v=1;v<d.length;v++){let w=d[v],b=d[m],S=u(w),M=u(b);(S<M-1e-12||Math.abs(S-M)<=1e-12&&w<b)&&(m=v)}let x=d.splice(m,1)[0];if(!c[x]){if(u(x)>=p)break;if(c[x]=!0,h[x]){let v=a[x]+al(r[x],s);(v<p-1e-12||Math.abs(v-p)<=1e-12&&x<f)&&(f=x,p=v)}for(let v of o[x]){if(c[v])continue;let w=a[x]+al(r[x],r[v]);w<a[v]-1e-12&&(a[v]=w,l[v]=x,d.push(v))}}}if(f<0)return null;let g=[];for(let m=f;m>=0;m=l[m])g.push(m);return g.reverse()}function ll(n,e,t,i,s){if(ol(e,t,i,s))return[[i[0],i[1]]];let{nodes:r}=n,o=[],a=[];if(r.forEach((u,f)=>{ol(e,t,u,s)&&o.push(f),ol(e,u,i,s)&&a.push(f)}),!o.length||!a.length)return null;let l=VA(n,o,a,t,i);if(!l)return null;let c=[...l.map(u=>r[u]),i],h=[],d=t;for(let u=0;u<c.length;u++){let f=c[u+1];f&&ol(e,d,f,s)||(h.push([c[u][0],c[u][1]]),d=c[u])}return h}var WA=.25,wu=new Set(["executed","unused","dead"]),XA=new Set(["cover","suppress","reload"]),Bs={r:.25,y:.25,back:.2,front:.6},YA=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),qA=new Set(["telegraph","burst","suppress"]),Rp=n=>Math.max(0,Math.min(1,n)),Fi=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),Pv=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function Cp(n,e=K.associate){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=Math.PI,n.state="idle",n.stateT=0,n.health=e.health,n.alive=!0,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.aim[0]=n.aim[1]=n.aim[2]=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckRef[0]=n.start[0],n.stuckRef[1]=n.start[2],n.stuckCount=0,n.helper=null,n.helping=null,n.target="player",n.diveDir[0]=n.diveDir[1]=0,n.divePoint=null,n.claimed=!1,n.diedAt=-1/0,n.wasDowned=!1,Ao(n),n}function Pp(n){return n.alive=!1,n.state="unused",n.stateT=0,n.health=0,n.pos[1]=n.prevPos[1]=-50,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.helping=null,n.claimed=!1,n.wasDowned=!1,Ao(n),n}function Ip(n,e,t){let i=(t.tuning||K).associate;for(let r=0;r<3;r++)n.pos[r]=e[r],n.prevPos[r]=e[r];let s=t.player;return n.yaw=n.prevYaw=s?Math.atan2(s.pos[0]-e[0],s.pos[2]-e[2]):Math.PI,n.state="spawn",n.stateT=0,n.health=i.health,n.alive=!0,n.claimed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckCount=0,n.helper=null,n.helping=null,n.target="player",n.wasDowned=!1,n.diedAt=-1/0,n.divePoint=null,Ao(n),n}function Lp({id:n,pos:e},t=K.associate){let i={id:n,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:_t.head.r},body:{a:[0,0,0],b:[0,0,0],r:_t.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return Cp(i,t)}function Ao(n,e=K.combat){let[t,i,s]=n.pos,r=n.shapes;if(n.state==="downed"){let a=Math.sin(n.yaw),l=Math.cos(n.yaw);return r.body.r=Bs.r,r.head.r=_t.head.r,r.body.a[0]=t-a*Bs.back,r.body.a[1]=i+Bs.y,r.body.a[2]=s-l*Bs.back,r.body.b[0]=t+a*Bs.front,r.body.b[1]=i+Bs.y,r.body.b[2]=s+l*Bs.front,r.head.c[0]=r.body.b[0],r.head.c[1]=i+Bs.y,r.head.c[2]=r.body.b[2],r}let o=YA.has(n.state)&&n.point&&n.point.kind==="low"&&n.pop<.5;return r.head.r=_t.head.r+e.hitPad,r.body.r=_t.body.r+e.hitPad,r.head.c[0]=t,r.head.c[2]=s,r.body.a[0]=t,r.body.a[2]=s,r.body.b[0]=t,r.body.b[2]=s,o?(r.head.c[1]=i+e.crouchHead-e.hitPad,r.body.a[1]=i+.1,r.body.b[1]=i+e.crouchBodyTop):(r.head.c[1]=i+_t.head.cy,r.body.a[1]=i+_t.body.ay,r.body.b[1]=i+_t.body.by),r}function nn(n,e){n.state=e,n.stateT=0}function ki(n,e,t){e=Rp(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var zs=(n,e)=>e>0?n/e:1;function cl(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=Gt(n.yaw,Math.atan2(r,o),i.turnRate*s))}function Iv(n,e,t){let i=n.point.normal;n.yaw=Gt(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function Bi(n,e){e.tokens.holds(n.id)&&e.tokens.release(n.id,e.now,e.director)}function Dp(n,e){let t=e.player.pos;return n.chest[0]=t[0],n.chest[1]=t[1]+1.2,n.chest[2]=t[2],n.chest}function Tu(n,e){let t=e.tuning||K,i=t.associate,s=e.director||t.director,r=e.player,o=[r.pos[0],r.pos[2]],a=Dp(n,e),l=n.point,c=Fi(l?l.pos:[n.pos[0],n.pos[2]],o),h=n.role,d=!!l&&(n.mustMove||h!=="hold"),u=[n.pos[0],n.pos[2]],f=Math.cos(s.flankAngle*Math.PI/180),p=Math.cos(s.flankMaxAngle*Math.PI/180),g=0,m=0;if(r.coverNormal)g=-r.coverNormal[0],m=-r.coverNormal[1];else{let S=0;for(let M of e.others||[])M.alive&&(g+=M.pos[0],m+=M.pos[2],S++);S?(g=g/S-o[0],m=m/S-o[1]):(g=n.pos[0]-o[0],m=n.pos[2]-o[1])}let x=Math.hypot(g,m)||1;g/=x,m/=x;let v=[];for(let[S,M]of e.reserved)M!==n.id&&v.push(e.points[S].pos);let w=null,b=-1/0;for(let S of e.points){let M=e.reserved.get(S.index);if(M!==void 0&&M!==n.id||d&&S.index===l.index||n.mustMove&&l&&Fi(S.pos,l.pos)<2*i.reserveRadius)continue;let _=Fi(S.pos,o);if(_<i.reserveRadius||_<i.minRange||_>i.maxRange)continue;let y=!1;for(let L of v)if(Fi(L,S.pos)<i.reserveRadius){y=!0;break}if(y)continue;let P=((S.pos[0]-o[0])*g+(S.pos[1]-o[1])*m)/_;if(h==="flank"?P<p:P<0)continue;let R=0;if(h==="push"){let L=c-_;if(L<2)continue;R=2*L}else if(h==="flank"){if(!r.coverNormal||P>f)continue;R=10}let I=vu(S,a,e.boxes,t);if(!I.protected||!I.canShoot)continue;let A=-Fi(u,S.pos)-.5*Math.abs(_-i.preferRange)+R;A>b+1e-9&&(b=A,w=S)}return w?{point:w,score:b}:null}function $A(n,e){let t=Tu(n,e);return t?t.point:null}function Tp(n,e,t){let i=e.tuning||K,s=[n.pos[0],n.pos[2]],r=Dp(n,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==n.id)continue;let h=Fi(s,l.pos);h>=a||t&&!vu(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function cs(n,e,t){nn(n,"cover"),n.blind=0,n.wantSuppress=null,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function qn(n,e,t){Bi(n,e),ki(n,0,t),n.blind=0;let i=n.stuckCount>=3?Tp(n,e,!1):$A(n,e);if(!i){if(n.mustMove=!1,n.role!=="hold"&&(n.role="hold"),n.point&&Fi(n.point.pos,[n.pos[0],n.pos[2]])<=.5){cs(n,e,t);return}if(i=Tp(n,e,!0)||Tp(n,e,!1),!i){cs(n,e,t);return}}if(n.point&&n.point.index!==i.index&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),e.reserved.set(i.index,n.id),n.point=i,n.mustMove=!1,Math.hypot(i.pos[0]-n.pos[0],i.pos[1]-n.pos[2])<=t.arriveDist){Lv(n,e,t);return}let s=n.stuckCount>=3?null:ll(e.graph,e.boxes,[n.pos[0],n.pos[2]],i.pos,t.radius);n.path=s||[[i.pos[0],i.pos[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],nn(n,"run")}function Lv(n,e,t){if(n.role==="revive"){nn(n,"kneel");return}let i=n.point;n.pos[0]=i.pos[0],n.pos[2]=i.pos[1],n.role="hold",n.stuckCount=0,n.pointT=0,n.relocT=0,n.mustMove=!1,e.events.push({type:"arrive",id:n.id,point:i}),cs(n,e,t)}function ZA(n,e,t,i){if(n.role==="revive"){let r=Fv(n,e);if(!r){hs(n,e),qn(n,e,t);return}if(Pv(n.pos,r.pos)<=Uv){nn(n,"kneel");return}}let s=t.runSpeed*i;for(let r=0;r<n.path.length+2;r++){let o=n.path[n.pathI],a=n.pathI===n.path.length-1,l=o[0]-n.pos[0],c=o[1]-n.pos[2],h=Math.hypot(l,c);if(h<=t.arriveDist){if(a){Lv(n,e,t);return}n.pathI++;continue}cl(n,o[0],o[1],t,i);let d=Math.min(s,h);if(d<=1e-9)break;let u=kn(e.boxes,n.pos,[l/h*d,0,c/h*d],t.radius,t.height),f=Math.hypot(u.pos[0]-n.pos[0],u.pos[2]-n.pos[2]);if(n.pos[0]=u.pos[0],n.pos[2]=u.pos[2],s-=f,f<d*.5)break;f>=h-1e-9}if(n.stuckT+=i,n.stuckT>=t.stuckTime){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05){n.role==="revive"&&hs(n,e),n.stuckCount++,qn(n,e,t);return}n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}}function Np(n,e,t,i,s){let r=e.player,o=n.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(t.aimLag>0)?1:1-Math.pow(.5,i/t.aimLag);for(let l=0;l<3;l++)n.aim[l]+=(o[l]-n.aim[l])*a}var Dv=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1),Op=n=>n.tobble&&!n.tobble.downed?n.tobble:null;function KA(n,e,t){if(n.point){let i=_r(n.point,(e.tuning||K).associate.popShift);t[0]=i[0],t[2]=i[1]}else t[0]=n.pos[0],t[2]=n.pos[2];return t[1]=1.49,t}var Ep=[0,0,0];function JA(n,e){let t=Op(e),i=e.player;return t?(KA(n,e,Ep),!i.downed&&En(e.boxes,Ep,i.chest)?"player":En(e.boxes,Ep,t.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var Nv=(n,e)=>n.target==="tobble"?!Op(e):e.player.downed,Ov=(n,e)=>n.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function jA(n,e,t,i,s){ki(n,n.pop-zs(s,t.popTime),t),Iv(n,t,s);let r=e.player;if(r.downed&&!Op(e))return;if(!r.downed){if(n.pointT+=s,n.role!=="hold"){qn(n,e,t);return}if(n.relocT+=s,n.relocT>=t.relocateCheck){n.relocT=0;let a=vu(n.point,Dp(n,e),e.boxes,e.tuning||K);if(!a.protected||!a.canShoot||Fi(n.point.pos,[r.pos[0],r.pos[2]])<t.reserveRadius){n.mustMove=!0,qn(n,e,t);return}}if(n.pointT>=t.relocateAfter){n.mustMove=!0,n.pointT=0,qn(n,e,t);return}}if(n.stateT<n.wait)return;if(n.wantSuppress===null&&(n.wantSuppress=e.rand()<t.suppressChance),n.bursts>=t.magBursts){nn(n,"reload"),e.events.push({type:"bark",id:n.id,key:"reload"});return}let o=JA(n,e);if(o&&e.tokens.request(n.id,e.now,e.tokenCount,i)){n.target=o,nn(n,"telegraph"),n.shots=0,Np(n,e,t,s,!0),e.events.push({type:"telegraph",id:n.id});return}n.wantSuppress&&!r.downed&&(nn(n,"suppress"),n.shots=0)}function Ap(n,e,t,i){Bi(n,e),i&&n.bursts++,cs(n,e,t)}function QA(n,e,t,i){ki(n,n.pop+zs(i,t.popTime),t);let s=Ov(n,e);if(cl(n,s[0],s[2],t,i),Np(n,e,t,i,!1),Nv(n,e)||!e.tokens.holds(n.id)){Ap(n,e,t,!1);return}n.stateT>=t.popTime+t.telegraphTime-1e-9&&(nn(n,"burst"),n.shots=0)}function e2(n,e,t,i){let s=e.player;ki(n,n.pop+zs(i,t.popTime),t);let r=Ov(n,e);if(cl(n,r[0],r[2],t,i),Np(n,e,t,i,!1),Nv(n,e)||!e.tokens.holds(n.id)){Ap(n,e,t,!0);return}let o=n.muzzle;o[0]=n.pos[0],o[1]=n.pos[1]+t.muzzleUp,o[2]=n.pos[2];let a=Dv(n.stateT,t.rate,t.burstTime),l=n.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||K).move.sprint);for(;n.shots<a;){n.shots++;let c=n.aim[0]-o[0],h=n.aim[1]-o[1],d=n.aim[2]-o[2],u=Math.hypot(c,h,d)||1;e.events.push({type:"enemyShot",id:n.id,from:[o[0],o[1],o[2]],dir:[c/u,h/u,d/u],accurate:!0,target:n.target,spread:t.spread+t.moveSpread*l})}n.stateT>=t.burstTime-1e-9&&Ap(n,e,t,!0)}function t2(n,e,t,i){let s=e.player;if(n.blind=Rp(n.blind+zs(i,t.popTime)),cl(n,s.pos[0],s.pos[2],t,i),s.downed){n.blind=0,cs(n,e,t);return}let r=n.stateT-t.popTime;if(r<0&&n.blind<1)return;let o=n.point,a=Math.max(0,r),l=n.muzzle;l[0]=n.pos[0],l[2]=n.pos[2],l[1]=n.pos[1]+(o.kind==="low"?o.height+(e.tuning||K).combat.blindLift:t.muzzleUp);let c=Dv(a,t.suppressRate,t.suppressTime);for(;n.shots<c;){n.shots++;let h=s.head[0]-l[0],d=s.head[1]-l[1],u=s.head[2]-l[2],f=Math.hypot(h,d,u)||1;h/=f,d/=f,u/=f;let p=u,g=-h,m=Math.hypot(p,g);m<1e-6&&(p=1,g=0,m=1),p/=m,g/=m;let x=d*g,v=u*p-h*g,w=-d*p,b=2*Math.PI*e.rand(),S=t.suppressMiss*(1+.5*e.rand()),M=Math.cos(b)*S,_=Math.sin(b)*S,y=s.head[0]+p*M+x*_,P=s.head[1]+v*_,R=s.head[2]+g*M+w*_,I=y-l[0],A=P-l[1],L=R-l[2],E=Math.hypot(I,A,L)||1;e.events.push({type:"enemyShot",id:n.id,from:[l[0],l[1],l[2]],dir:[I/E,A/E,L/E],accurate:!1,spread:t.suppressSpread})}r>=t.suppressTime-1e-9&&(n.blind=0,cs(n,e,t))}var Uv=.8;function Fv(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);return t&&t.alive&&t.state==="downed"&&t.helper===n.id?t:null}function hs(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);t&&t.helper===n.id&&(t.helper=null),n.helping=null,n.role="hold"}function kv(n,e,t){let i=(t.tuning||K).associate;Bi(n,t),ki(n,0,i),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.point=null,n.role="revive",n.helping=e.id,e.helper=n.id,n.mustMove=!1;let s=n.pos[0]-e.pos[0],r=n.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=Uv){nn(n,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];n.path=ll(t.graph,t.boxes,[n.pos[0],n.pos[2]],a,i.radius)||[a],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],nn(n,"run")}function n2(n,e,t,i){let s=Fv(n,e);if(!s){hs(n,e),qn(n,e,t);return}cl(n,s.pos[0],s.pos[2],t,i),!(n.stateT<t.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,t.reviveHealth*t.health),s.role="hold",s.mustMove=!1,s.bursts=0,nn(s,"seek"),e.events.push({type:"cloneRevive",id:n.id,target:s.id}),n.helping=null,n.role="hold",qn(n,e,t))}function i2(n,e,t,i){if(n.stateT>=t.bleedTime-1e-9){n.health=0,Su(n,e,"bleed");return}if(n.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===n||!c.alive||!XA.has(c.state))continue;let h=Pv(n.pos,c.pos);h<o&&(o=h,s=c.pos[0]-n.pos[0],r=c.pos[2]-n.pos[2])}if(o===1/0)s=n.pos[0]-e.player.pos[0],r=n.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),n.yaw=Gt(n.yaw,Math.atan2(s,r),t.turnRate*i);let a=t.downedCrawl*i,l=kn(e.boxes,n.pos,[s/o*a,0,r/o*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}function s2(n,e,t){n.point&&e.reserved.get(n.point.index)===n.id&&n.pop<=1e-6&&Fi(n.point.pos,[n.pos[0],n.pos[2]])<=.3?cs(n,e,t):qn(n,e,t)}function Bv(n,e){return!n.alive||wu.has(n.state)||n.state==="downed"?!1:(n.role==="revive"&&hs(n,e),Bi(n,e),n.blind=0,nn(n,"stagger"),!0)}function zv(n,e,t){if(!n.alive||wu.has(n.state)||n.state==="downed"||n.state==="dive")return!1;n.role==="revive"&&hs(n,t),Bi(n,t),ki(n,0,(t.tuning||K).associate),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.divePoint=n.point,n.point=null,n.role="hold",n.path=[],n.pathI=0;let i=n.pos[0]-e[0],s=n.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(n.yaw),s=Math.cos(n.yaw)):(i/=r,s/=r),n.diveDir[0]=i,n.diveDir[1]=s,n.yaw=Math.atan2(i,s),nn(n,"dive"),!0}function r2(n,e,t,i){let s=Math.max(t.diveTime,.001),r=Math.max(n.stateT-i,t.diveReaction),o=Math.min(n.stateT,t.diveReaction+s);if(o>r){let a=t.diveDistance*(o-r)/s,l=kn(e.boxes,n.pos,[n.diveDir[0]*a,0,n.diveDir[1]*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}n.stateT>=t.diveReaction+s-1e-9&&(n.point=n.divePoint,n.divePoint=null,n.mustMove=!0,qn(n,e,t))}function Hv(n,e){return!n.alive||wu.has(n.state)||n.state==="dive"?!1:(n.role==="revive"&&hs(n,e),Bi(n,e),ki(n,0,(e.tuning||K).associate),n.blind=0,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.wasDowned=n.state==="downed",n.point=null,n.role="hold",n.helper=null,n.mustMove=!1,nn(n,"executed"),!0)}function Gv(n){return!n.alive||n.state!=="executed"?!1:(nn(n,n.wasDowned?"downed":"flinch"),n.wasDowned=!1,!0)}function Vv(n,e,t="execute"){return!n.alive||n.state!=="executed"?null:(n.health=0,Su(n,e,t))}function Su(n,e,t){return n.alive=!1,Bi(n,e),n.role==="revive"&&hs(n,e),n.helper=null,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.pop=0,n.blind=0,nn(n,"dead"),e.events.push({type:"death",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]],kind:t}),"kill"}function Up(n,e){return!n.alive||wu.has(n.state)||n.state==="downed"?null:(Bi(n,e),n.role==="revive"&&hs(n,e),n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.point=null,n.health=1,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.mustMove=!1,nn(n,"downed"),e.events.push({type:"down",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]]}),e.events.push({type:"bark",id:n.id,key:"cloneDown"}),"down")}function Wv(n,e,t){if(!n.alive)return;(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,WA);let i=(e.tuning||K).associate,s=e.director||K.director;switch(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.state){case"idle":e.started&&qn(n,e,i);break;case"seek":qn(n,e,i);break;case"run":ZA(n,e,i,t);break;case"cover":jA(n,e,i,s,t);break;case"telegraph":QA(n,e,i,t);break;case"burst":e2(n,e,i,t);break;case"suppress":t2(n,e,i,t);break;case"reload":ki(n,n.pop-zs(t,i.popTime),i),Iv(n,i,t),n.stateT>=i.reloadTime&&(n.bursts=0,cs(n,e,i));break;case"flinch":ki(n,n.pop-zs(t,i.popTime),i),n.blind=Rp(n.blind-zs(t,i.popTime)),n.stateT>=i.flinchTime&&(n.point?cs(n,e,i):qn(n,e,i));break;case"stagger":ki(n,n.pop-zs(t,i.popTime),i),n.stateT>=i.staggerTime-1e-9&&s2(n,e,i);break;case"dive":r2(n,e,i,t);break;case"kneel":n2(n,e,i,t);break;case"downed":i2(n,e,i,t);break;case"spawn":n.stateT>=(e.tuning||K).pad.riseTime-1e-9&&qn(n,e,i);break;default:break}}function Xv(n,e,t,i="body"){return!n.alive||!(e>0)||n.state==="executed"||n.state==="unused"?null:n.state==="downed"?(n.health=0,Su(n,t,i)):(n.health-=e,n.health<=0?(i==="body"||i==="tobble")&&t.rand()<(t.tuning||K).associate.downChance?Up(n,t):(n.health=0,Su(n,t,i)):n.role==="revive"?(hs(n,t),Bi(n,t),nn(n,"flinch"),"hit"):(qA.has(n.state)&&(Bi(n,t),nn(n,"flinch"),n.blind=Math.min(n.blind,1)),"hit"))}function Yv(){let n=new Map,e=new Map,t=new Map,i={request(s,r,o,a=K.director){if(n.has(s))return!0;if(r<(t.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[d,u]of e)r-u.last>a.requestWindow&&e.delete(d);if(n.size>=o)return!1;let c=null,h=1/0;for(let[d,u]of e)u.first<h&&(c=d,h=u.first);return c!==s?!1:(e.delete(s),n.set(s,r),!0)},release(s,r,o=K.director){e.delete(s),n.delete(s)&&t.set(s,r+o.tokenCooldown)},holds(s){return n.has(s)},held(){return[...n.keys()]},expire(s,r=K.director){let o=[];for(let[a,l]of n)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){n.clear(),e.clear(),t.clear()}};return i}function qv(n,e=K){let t=(n.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(t.map(r=>[r.id,new Set]));return{list:t,step(r,o){let a=e.pad,l=[];for(let c of t){if(c.state==="dormant"){if(!o.started||!(o.kills>=a.openAfterKills||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of t)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of t)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return t.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of t)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var o2=.25,a2=1.49,l2=.5,br="tobble",c2=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn"]),Eu=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),Iu=n=>Math.max(0,Math.min(1,n)),$v=(n,e)=>e&&e.tuning?e.tuning.tobble:n.cfg,h2=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1);function Bp({pos:n,yaw:e=0},t=K.tobble){let i={id:br,cfg:t,start:[n[0],n[1],n[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:_t.head.r},body:{a:[0,0,0],b:[0,0,0],r:_t.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return zp(i)}function zp(n){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=n.startYaw,n.state="idle",n.stateT=0,n.hp=n.cfg.health,n.alive=!0,n.downed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.target=null,n.reviveT=0,n.threatT=0,n.lofT=0,n.wait=0,n.shots=0,n.sinceHit=0,n.relocT=0,n.complainT=0,n.stuckT=0,n.stuckCount=0,n.kneeling=!1,n.revGo=!1,n.sideLeft=0,n.speed=0,n.aim[0]=n.aim[1]=n.aim[2]=0,hl(n),n}function hl(n,e=K.combat){let t=n.cfg,i=t.scale,[s,r,o]=n.pos,a=n.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,n.downed){let c=Math.sin(n.yaw),h=Math.cos(n.yaw);a.body.r=.25*i,a.head.r=_t.head.r*i,a.body.a[0]=s-c*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-h*.2*i,a.body.b[0]=s+c*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+h*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],n.chest[0]=s,n.chest[1]=r+.25*i,n.chest[2]=o}else if(n.point&&n.point.kind==="low"&&n.pop<.5)a.head.r=(_t.head.r+l)*i,a.body.r=(_t.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,n.chest[0]=s,n.chest[1]=r+e.crouchBodyTop*i*.9,n.chest[2]=o;else{let c=n.point?t.popLift*Iu(n.pop):0;a.head.r=(_t.head.r+l)*i,a.body.r=(_t.body.r+l)*i,a.head.c[1]=r+_t.head.cy*i+c,a.body.a[1]=r+_t.body.ay*i+c,a.body.b[1]=r+_t.body.by*i+c,n.chest[0]=s,n.chest[1]=r+t.height*(1.2/1.8)+c,n.chest[2]=o}return n.head[0]=a.head.c[0],n.head[1]=a.head.c[1],n.head[2]=a.head.c[2],a}function Mr(n,e){n.state=e,n.stateT=0}var Lu=(n,e,t=!1)=>n.events.push(t?{type:"bark",id:br,key:e,force:t}:{type:"bark",id:br,key:e});function ul(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=Gt(n.yaw,Math.atan2(r,o),i.turnRate*s))}function u2(n,e,t){let i=n.point.normal;n.yaw=Gt(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function Co(n,e,t){e=Iu(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.tuning.associate.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var Hp=(n,e)=>e>0?n/e:1;function dl(n,e){n.point&&e.reserved.get(n.point.index)===br&&e.reserved.delete(n.point.index),n.point=null}function Zv(n,e,t,i){let s=n.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,c=o/a,h=t-s.lens[0],d=i-s.lens[2],u=Math.max(.5,Math.min(e.lofRange,h*l+d*c));return Math.hypot(h-l*u,d-c*u)}function d2(n,e,t){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=n.pos[0]-i.lens[0],l=n.pos[2]-i.lens[2],c=-o*a+r*l>=0?1:-1;n.side[0]=-o*c,n.side[1]=r*c,n.sideLeft=t.sidestepDist,dl(n,e),Co(n,0,e),n.target=null,n.lofT=0,Mr(n,"sidestep")}var yr=n=>n.alive&&c2.has(n.state)&&n.state!=="executed",Ro=n=>n.state==="downed";function f2(n,e,t,i){return n.point?(_r(n.point,e.tuning.associate.popShift,us),i[0]=us[0],i[2]=us[1]):(i[0]=n.pos[0],i[2]=n.pos[2]),i[1]=n.pos[1]+t.muzzleUp+(n.point?t.popLift:0),i}function Cu(n,e){let t=n.shapes.body;return e[0]=(t.a[0]+t.b[0])/2,e[1]=(t.a[1]+t.b[1])/2,e[2]=(t.a[2]+t.b[2])/2,e}var pi=[0,0,0],Fp=[0,0,0],us=[0,0];function Gp(n,e,t){return n.point?(_r(n.point,e.tuning.associate.popShift,us),t[0]=us[0],t[2]=us[1]):(t[0]=n.pos[0],t[2]=n.pos[2]),t[1]=a2,t}function Kv(n,e,t){f2(n,e,t,Fp);let i=null,s=1/0;for(let r of e.enemies){if(!yr(r)||Ro(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-n.pos[0],r.pos[2]-n.pos[2]);o>=s||o>t.range||En(e.boxes,Fp,Cu(r,pi))&&(s=o,i=r)}return i}function Jv(n,e,t){let i=null,s=1/0;for(let r of n.enemies){if(!yr(r)||Ro(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-t);o<s&&(s=o,i=r)}return i}var Pu=[0,0,0],Hs=[0,0,0],Au=[0,0,0];function jv(n,e,t){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[n.pos[0],n.pos[2]],l=Jv(e,n.pos[0],n.pos[2]),c=[];for(let[f,p]of e.reserved)p!==br&&c.push(e.points[f].pos);let h=(t.followMin+t.followMax)/2,d=null,u=-1/0;for(let f of e.points){let p=e.reserved.get(f.index);if(p!==void 0&&p!==br)continue;let g=Eu(f.pos,o);if(g<t.followMin||g>t.followMax||g<=t.personalSpace||Zv(e,t,f.pos[0],f.pos[1])<t.lofClear)continue;let m=!1;for(let b of c)if(Eu(b,f.pos)<s.reserveRadius){m=!0;break}if(m)continue;let x=!0;for(let b of e.enemies)if(yr(b)&&Eu([b.pos[0],b.pos[2]],f.pos)<s.radius+t.radius+.2){x=!1;break}if(!x)continue;let v=!1;if(l){if(Gp(l,e,Pu),Hs[0]=f.pos[0],Hs[1]=f.kind==="low"?i.combat.crouchHead*t.scale:t.height,Hs[2]=f.pos[1],En(e.boxes,Hs,Pu))continue;_r(f,s.popShift,us),Au[0]=us[0],Au[1]=t.muzzleUp+t.popLift,Au[2]=us[1],v=En(e.boxes,Au,Cu(l,pi))}let w=-Eu(a,f.pos)-.5*Math.abs(g-h)+(v?8:0);w>u+1e-9&&(u=w,d=f)}return d}function p2(n,e,t){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let d=Math.hypot(i.dir[0],i.dir[2]);d>1e-6&&(r=i.dir[0]/d,o=i.dir[2]/d)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,c=(-o+r)*a,h=kn(e.boxes,[s[0],n.pos[1],s[2]],[l,0,c],t.radius,t.height);return[h.pos[0],h.pos[2]]}function Qv(n,e,t,i){n.goal[0]=i[0],n.goal[1]=i[1],n.path=n.stuckCount>=3?[[i[0],i[1]]]:ll(e.graph,e.boxes,[n.pos[0],n.pos[2]],i,t.radius)||[[i[0],i[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}function e_(n,e,t,i,s){let r=s*i,o=.15;for(let a=0;a<n.path.length+2;a++){let l=n.path[n.pathI],c=n.pathI===n.path.length-1,h=l[0]-n.pos[0],d=l[1]-n.pos[2],u=Math.hypot(h,d);if(u<=o){if(c)return"arrived";n.pathI++;continue}ul(n,l[0],l[1],t,i);let f=Math.min(r,u);if(f<=1e-9)break;let p=kn(e.boxes,n.pos,[h/u*f,0,d/u*f],t.radius,t.height),g=Math.hypot(p.pos[0]-n.pos[0],p.pos[2]-n.pos[2]);if(n.pos[0]=p.pos[0],n.pos[2]=p.pos[2],r-=g,g<f*.5)break}if(n.stuckT+=i,n.stuckT>=1){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05)return"stuck";n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}return"moving"}function Gs(n,e,t){let i=e.started?jv(n,e,t):null;n.point&&(!i||i.index!==n.point.index)&&dl(n,e),Co(n,0,e);let s;if(i?(n.point=i,e.reserved.set(i.index,br),s=i.pos):s=p2(n,e,t),n.shots=0,n.target=null,Math.hypot(s[0]-n.pos[0],s[1]-n.pos[2])<=.15){t_(n,e,t);return}Qv(n,e,t,s),Mr(n,"follow")}function t_(n,e,t){if(n.stuckCount=0,n.point&&(n.pos[0]=n.point.pos[0],n.pos[2]=n.point.pos[1]),!e.started&&!n.point){Mr(n,"idle");return}kp(n,e,t)}function kp(n,e,t){Mr(n,"cover"),n.target=null,n.relocT=0,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function m2(n,e,t,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t.followMax){Gs(n,e,t);return}ul(n,s[0],s[2],t,i)}function g2(n,e,t,i){let s=e_(n,e,t,i,t.runSpeed);s==="arrived"?t_(n,e,t):s==="stuck"&&(n.stuckCount++,dl(n,e),Gs(n,e,t))}function x2(n,e,t,i){Co(n,n.pop-Hp(i,t.popTime),e);let s=e.player.pos;if(n.point?u2(n,t,i):ul(n,s[0],s[2],t,i),n.relocT+=i,n.relocT>=l2){n.relocT=0;let o=Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t.followMax;if(n.point){let a=n.point.pos,l=Math.hypot(n.pos[0]-a[0],n.pos[2]-a[1])>.3,c=Jv(e,n.pos[0],n.pos[2]),h=!1;if(c){Gp(c,e,Pu);let d=n.point.kind==="low"?e.tuning.combat.crouchHead*t.scale:t.height;Hs[0]=a[0],Hs[1]=d,Hs[2]=a[1],h=En(e.boxes,Hs,Pu)}if(o||l||h){Gs(n,e,t);return}}else if(o||e.started&&jv(n,e,t)){Gs(n,e,t);return}}if(!e.started||n.stateT<n.wait)return;let r=Kv(n,e,t);r&&(n.target=r,n.shots=0,Mr(n,"shoot"))}function v2(n,e,t,i){Co(n,n.pop+Hp(i,t.popTime),e);let s=n.target;if((!s||!yr(s)||Ro(s)||!En(e.boxes,_2(n,t),Cu(s,pi)))&&(s=n.target=Kv(n,e,t)),!s){kp(n,e,t);return}if(ul(n,s.pos[0],s.pos[2],t,i),n.stateT<t.popTime-1e-9)return;let r=n.muzzle;r[0]=n.pos[0],r[1]=n.pos[1]+t.muzzleUp+(n.point?t.popLift:0)*Iu(n.pop),r[2]=n.pos[2];let o=h2(n.stateT-t.popTime,t.rate,t.burstTime);for(;n.shots<o;){n.shots++,Cu(s,pi);let a=pi[0]-r[0],l=pi[1]-r[1],c=pi[2]-r[2],h=Math.hypot(a,l,c)||1,d=bo([a/h,l/h,c/h],t.spread,e.rand,n.scratch),u=pn(r,d,t.range,e.boxes,e.enemies),f=u.target&&(u.kind==="head"||u.kind==="body")?u.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:u.point,hit:f?f.id:null}),f&&e.hurtRep&&e.hurtRep(f,t.damage),!yr(s)||Ro(s))break}(!yr(s)||Ro(s))&&(n.target=null),n.stateT>=t.popTime+t.burstTime-1e-9&&kp(n,e,t)}var Ru=[0,0,0];function _2(n,e){return Ru[0]=n.pos[0],Ru[1]=n.pos[1]+e.muzzleUp+(n.point?e.popLift:0)*Iu(n.pop),Ru[2]=n.pos[2],Ru}function y2(n,e,t,i){let s=Math.min(t.runSpeed*i,n.sideLeft);if(s>0){let r=kn(e.boxes,n.pos,[n.side[0]*s,0,n.side[1]*s],t.radius,t.height),o=Math.hypot(r.pos[0]-n.pos[0],r.pos[2]-n.pos[2]);n.pos[0]=r.pos[0],n.pos[2]=r.pos[2],n.sideLeft-=o<s*.5?n.sideLeft:o}n.sideLeft<=1e-6&&Gs(n,e,t)}function b2(n){let e=n.player.pos,t=0;pi[0]=e[0],pi[1]=.4,pi[2]=e[2];for(let i of n.enemies)!yr(i)||Ro(i)||i.state==="spawn"||En(n.boxes,Gp(i,n,Fp),pi)&&t++;return t}function M2(n,e){dl(n,e),Co(n,0,e),n.target=null,n.revGo=!1,n.threatT=0,n.kneeling=!1,n.reviveT=0,n.path=[],n.pathI=0,n.goal[0]=n.goal[1]=1/0,Mr(n,"revive")}function S2(n,e,t,i){let s=e.player.pos;if(!n.revGo)if(n.threatT+=i,Co(n,n.pop-Hp(i,t.popTime),e),b2(e)<=t.reviveMaxThreats||n.threatT>=t.reviveWaitMax-1e-9)n.revGo=!0;else return;if(Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])<=t.reviveRange){n.kneeling||(n.kneeling=!0,n.reviveT=0,e.events.push({type:"tobbleKneel"})),ul(n,s[0],s[2],t,i),n.reviveT+=i,n.reviveT>=t.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&Lu(e,"tobbleRevive",!0),Gs(n,e,t));return}if(n.kneeling=!1,n.reviveT=0,Math.hypot(s[0]-n.goal[0],s[2]-n.goal[1])>t.reviveRange+.4||!n.path.length){let a=n.pos[0]-s[0],l=n.pos[2]-s[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.min(.8,t.reviveRange*.8);Qv(n,e,t,[s[0]+a*h,s[2]+l*h]),n.goal[0]=s[0],n.goal[1]=s[2]}let o=e_(n,e,t,i,t.runSpeed);o==="stuck"?(n.stuckCount++,n.path=[]):o==="arrived"&&(n.path=[])}function w2(n,e,t,i){let s=e.player.pos,r=s[0]-n.pos[0],o=s[2]-n.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(n.yaw=Gt(n.yaw,Math.atan2(r,o),t.turnRate*i)),a>t.reviveRange&&t.crawlSpeed>0){let l=Math.min(t.crawlSpeed*i,a-t.reviveRange),c=kn(e.boxes,n.pos,[r/a*l,0,o/a*l],t.radius,t.height);n.pos[0]=c.pos[0],n.pos[2]=c.pos[2]}n.complainT+=i,n.complainT>=t.complainEvery-1e-9&&(n.complainT=0,Lu(e,"tobbleComplain"))}function n_(n,e,t){(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,o2);let i=$v(n,e);if(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.sinceHit+=t,n.downed){w2(n,e,i,t);return}switch(n.hp<i.health&&n.sinceHit>=i.regenDelay&&(n.hp=Math.min(i.health,n.hp+(i.regenTime>0?i.health/i.regenTime*t:i.health))),e.playerDowned?n.state!=="revive"&&M2(n,e):n.state==="revive"&&Gs(n,e,i),n.state!=="sidestep"&&n.state!=="revive"&&e.aim&&e.aim.active&&Zv(e,i,n.pos[0],n.pos[2])<i.lofClear?(n.lofT+=t,n.lofT>=i.sidestepReact-1e-9&&d2(n,e,i)):n.state!=="sidestep"&&(n.lofT=0),n.state){case"idle":m2(n,e,i,t);break;case"follow":g2(n,e,i,t);break;case"cover":x2(n,e,i,t);break;case"shoot":v2(n,e,i,t);break;case"sidestep":y2(n,e,i,t);break;case"revive":S2(n,e,i,t);break;default:break}}function Vp(n,e,t){return n.downed||!(e>0)?null:(n.hp-=e,n.sinceHit=0,n.hp>0?"hit":(n.hp=0,n.downed=!0,n.kneeling=!1,n.reviveT=0,n.complainT=0,n.target=null,n.pop=0,dl(n,t),Mr(n,"downed"),t.events.push({type:"tobbleDown"}),Lu(t,"tobbleDown",!0),"downed"))}function Wp(n,e){if(!n.downed)return!1;let t=$v(n,e);return n.downed=!1,n.hp=Math.max(1,t.reviveHealth*t.health),n.sinceHit=0,n.lofT=0,n.complainT=0,e.events.push({type:"tobbleUp"}),Lu(e,"tobbleUp"),Gs(n,e,t),!0}var i_=new Set(["cover","coverSlide","coverSwap"]),s_=new Set(["cover","suppress","reload","flinch"]),T2=new Set(["cover","suppress","reload"]),r_=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),o_=8,E2=1,A2=.1,Xp=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function a_({level:n,boxes:e,edges:t,rand:i,tuning:s=K}){let r=()=>s.associate,o=yv(t,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=Cv(n.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=Yv(),c=gv(s.grenade),h=qv(n,s),d=new Map,u=()=>!!n.tobble&&s.tobble.enabled>0,f=[],p=[],g=n.associates.length,m=n.associates.map(F=>Lp(F,s.associate));for(let F=g;F<o_;F++)m.push(Pp(Lp({id:`r${F+1}`,pos:[0,0,0]},s.associate)));let x=()=>Math.max(g,Math.min(o_,Math.round(s.director.maxEnemies))),v=x(),w=Mu({state:"move",pos:[0,0,0],cover:null,scratch:{}}),b={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},S={boxes:e,points:o,graph:a,tokens:l,reserved:d,player:b,now:0,rand:i,tokenCount:0,events:f,tuning:s,director:s.director,others:m,started:!1,aim:void 0,tobble:null,enemies:m,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null},M={enemies:m,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list,tobble:null},_=!1,y=0,P=[0,0],R=!1,I=!1;function A(){d.clear();for(let F of m.slice(0,g)){let $=null,ne=1/0;for(let ae of o){let ee=Math.hypot(ae.pos[0]-F.pos[0],ae.pos[1]-F.pos[2]);ee<ne&&(ne=ee,$=ae)}F.point=$,$&&d.set($.index,F.id)}}A(),M.tobble=S.tobble=u()?Bp(n.tobble,s.tobble):null;let L=()=>M.tobble&&!M.tobble.downed,E=(F,$,ne=f,ae=!1)=>ne.push(ae?{type:"bark",id:F,key:$,force:ae}:{type:"bark",id:F,key:$}),N=()=>m.find(F=>F.alive)||m[0];function k(){for(let F of l.held())l.release(F,M.now,s.director)}function W(F){M.started=!0,M.startT=M.now,E(N().id,"lockdown",F)}function te(F){F.diedAt=M.now,M.kills++,h.noteDeath(F.id)}function Y(F,$,ne,ae){!M.started&&F.alive&&F.state!=="unused"&&$>0&&W(ae),S.events=ae;let ee=Xv(F,$,S,ne);return S.events=f,ee==="kill"&&te(F),ee==="kill"&&ne==="head"&&L()&&++y%3===0&&E("tobble","tobbleHeadshot",ae),ee}S.hurtRep=(F,$)=>Y(F,$,"tobble",f),S.reviveDoc=()=>!S.health||!S.health.downed?!1:(S.health.revive(),S.m.revive(),b.downed=!1,f.push({type:"revived"}),!0);function J(F,$){let ne=b,ae=s.combat;ne.pos[0]=F.pos[0],ne.pos[1]=F.pos[1],ne.pos[2]=F.pos[2];let ee=i_.has(F.state)?as(F):null;ne.exposed=!!(F.cover&&F.cover.exposed);let pe=!!ee&&ee.kind==="low"&&!ne.exposed;ne.chest[0]=F.pos[0],ne.chest[1]=F.pos[1]+(pe?.6:1.2),ne.chest[2]=F.pos[2];let se=Mu(F,w,ae).shapes.head.c;ne.head[0]=se[0],ne.head[1]=se[1],ne.head[2]=se[2],ne.speed=F.speed(),ne.coverNormal=ee?ee.normal:null,ne.downed=!!$.downed}function U(F,$){let ne=s.director;if(i_.has(F.state)?b.exposed||(M.hideT+=$):M.hideT=0,!I||Math.hypot(F.pos[0]-P[0],F.pos[2]-P[1])>ne.stayRadius?(P[0]=F.pos[0],P[1]=F.pos[2],I=!0,M.stayT=0):M.stayT+=$,M.hideT>=ne.pushAfter&&!m.some(ee=>ee.alive&&ee.role==="push")){let ee=m.filter(se=>se.alive&&se.role==="hold"&&s_.has(se.state)&&!l.holds(se.id)).sort((se,xe)=>Xp(se.pos,b.pos)-Xp(xe.pos,b.pos)),pe=null;for(let se of ee){if(se.role="push",Tu(se,S)){pe=se;break}se.role="hold"}pe?(E(pe.id,"push"),M.hideT=0):M.hideT=Math.max(0,ne.pushAfter-1)}if(M.stayT>=ne.flankAfter&&!m.some(ee=>ee.alive&&ee.role==="flank")){let ee=null,pe=-1/0;for(let se of m){if(!se.alive||se.role!=="hold"||!s_.has(se.state)||l.holds(se.id))continue;se.role="flank";let xe=Tu(se,S);se.role="hold",xe&&xe.score>pe&&(pe=xe.score,ee=se)}ee&&(ee.role="flank",L()&&E("tobble","tobbleFlank"),E(ee.id,"flank")),M.stayT=0}}function le(){let F=r().reviveRange;for(let $ of m){if(!$.alive||$.state!=="downed"||$.helper)continue;let ne=null,ae=1/0;for(let ee of m){if(!ee.alive||!T2.has(ee.state)||ee.role!=="hold"||l.holds(ee.id))continue;let pe=Xp(ee.pos,$.pos);pe<=F&&pe<ae&&(ae=pe,ne=ee)}ne&&(kv(ne,$,S),E(ne.id,"cloneRevive"))}}function be(){for(let F=0;F<v;F++){let $=m[F];if(!$.claimed&&($.state==="unused"||$.state==="dead"&&M.now-$.diedAt>=E2-1e-9))return $.claimed=!0,$}return null}function H(){let F=h.step(0,{started:M.started,sinceStart:M.now-M.startT,kills:M.kills,freeSlot:be,now:M.now});for(let $ of F){if(f.push($),$.type==="padOpen"){E($.id,"padOpen",f,!0),L()&&E("tobble","tobblePad",f,!0);continue}if($.type!=="padSpawn")continue;let ne=h.list.find(ee=>ee.id===$.id),ae=m.find(ee=>ee.id===$.enemyId);Ip(ae,ne.pos,S)}}let oe=[0,0,0],we=[0,0,0];function de(F,$,ne){let ae=s.grenade,ee=0;oe[0]=F[0],oe[1]=F[1]+.3,oe[2]=F[2];let pe=(xe,Ne)=>{let Ge=Math.hypot(xe[0]-F[0],xe[1]-F[1],xe[2]-F[2]),G=pv(Ge,ae);return G>0&&En(e,oe,xe)?Ne(G):null};for(let xe of m){if(!xe.alive||xe.state==="executed")continue;let Ne=xe.shapes.body;we[0]=xe.pos[0],we[1]=(Ne.a[1]+Ne.b[1])/2,we[2]=xe.pos[2],pe(we,Ge=>Y(xe,Ge,"blast",f))==="kill"&&ee++}we[0]=$.pos[0],we[1]=$.pos[1]+(b.chest[1]-$.pos[1]<1?.45:.9),we[2]=$.pos[2],pe(we,xe=>{let Ne=xe*ae.selfDamage,Ge=ne.damage(Ne);return Ge===null||(f.push({type:"playerHit",id:null,from:[F[0],F[1],F[2]],amount:Ne,result:Ge}),Ge==="downed"&&($.state!=="downed"&&$.down(),k())),null});let se=h.blast(F);for(let xe of se)f.push({type:"padClosed",id:xe}),E(xe,"padClosed");f.push({type:"explode",pos:[F[0],F[1],F[2]],kills:ee,closed:se})}function re(F,$,ne){for(let ae of c.step(F,e))ae.type==="explode"?de(ae.pos,$,ne):f.push(ae)}function Oe(){let F=r();for(let $ of c.live)if(!($.fuse>F.diveWarn))for(let ne of m)!ne.alive||ne.state==="downed"||ne.state==="executed"||ne.state==="dive"||$.rolled&&$.rolled.has(ne.id)||Math.hypot(ne.pos[0]-$.pos[0],ne.pos[2]-$.pos[2])>F.diveRadius||(($.rolled||($.rolled=new Set)).add(ne.id),i()<F.diveChance&&zv(ne,$.pos,S)&&!$.barked&&($.barked=!0,E(ne.id,"dive")))}let De=F=>{let $=F.point,ne=r();return $.kind==="tall"&&F.pop>0?[$.pos[0]+$.tangent[0]*$.end*ne.popShift*F.pop,$.pos[1]+$.tangent[1]*$.end*ne.popShift*F.pop]:$.pos};function Me(F){let $=s.associate.radius,ne=s.associate.height,ae=(se,xe,Ne)=>{if(se.state==="executed")return;let Ge=kn(e,se.pos,[xe,0,Ne],$,ne);se.pos[0]=Ge.pos[0],se.pos[2]=Ge.pos[2]},ee=se=>se.state==="executed";for(let se=0;se<m.length;se++){let xe=m[se];if(!xe.alive)continue;for(let Fe=se+1;Fe<m.length;Fe++){let Ve=m[Fe];if(!Ve.alive)continue;let fe=Ve.pos[0]-xe.pos[0],tt=Ve.pos[2]-xe.pos[2],ke=Math.hypot(fe,tt);if(ke>=2*$)continue;ke<1e-6&&(fe=1,tt=0,ke=1);let Ue=(2*$-ke)/2,O=ee(Ve)?2:ee(xe)?0:1,C=ee(xe)?2:ee(Ve)?0:1;ae(xe,-fe/ke*Ue*O,-tt/ke*Ue*O),ae(Ve,fe/ke*Ue*C,tt/ke*Ue*C)}let Ne=xe.pos[0]-F.pos[0],Ge=xe.pos[2]-F.pos[2],G=Math.hypot(Ne,Ge),ve=$+s.move.radius;G<ve&&(G<1e-6&&(Ne=1,Ge=0,G=1),ae(xe,Ne/G*(ve-G),Ge/G*(ve-G)))}let pe=M.tobble;if(pe){let se=s.tobble.radius,xe=s.tobble.height,Ne=(Ve,fe)=>{let tt=kn(e,pe.pos,[Ve,0,fe],se,xe);pe.pos[0]=tt.pos[0],pe.pos[2]=tt.pos[2]};for(let Ve of m){if(!Ve.alive)continue;let fe=Ve.pos[0]-pe.pos[0],tt=Ve.pos[2]-pe.pos[2],ke=Math.hypot(fe,tt),Ue=se+$;if(ke>=Ue)continue;ke<1e-6&&(fe=1,tt=0,ke=1);let O=Ue-ke,C=ee(Ve)||Ve.point&&r_.has(Ve.state)?1:.5;Ne(-fe/ke*O*C,-tt/ke*O*C),ae(Ve,fe/ke*O*(1-C),tt/ke*O*(1-C))}let Ge=pe.pos[0]-F.pos[0],G=pe.pos[2]-F.pos[2],ve=Math.hypot(Ge,G),Fe=se+s.move.radius;ve<Fe&&(ve<1e-6&&(Ge=1,G=0,ve=1),Ne(Ge/ve*(Fe-ve),G/ve*(Fe-ve)))}for(let se of m){if(!se.alive||!se.point||!r_.has(se.state))continue;let xe=De(se);if(Math.hypot(se.pos[0]-xe[0],se.pos[2]-xe[1])<=.3)continue;let Ne=Math.hypot(xe[0]-F.pos[0],xe[1]-F.pos[2])>=$+s.move.radius-.001;M.tobble&&Math.hypot(xe[0]-M.tobble.pos[0],xe[1]-M.tobble.pos[2])<$+s.tobble.radius-.001&&(Ne=!1);for(let Ge of m)Ge===se||!Ge.alive||!Ne||Math.hypot(xe[0]-Ge.pos[0],xe[1]-Ge.pos[2])<2*$-.001&&(Ne=!1);if(Ne){se.pos[0]=xe[0],se.pos[2]=xe[1];continue}l.holds(se.id)&&l.release(se.id,M.now,s.director),se.mustMove=!0,se.pop=0,se.blind=0,se.state="seek",se.stateT=0}}let Ae=[null];function Te(F,$){let ne=r(),ae=[0,0,0];Ae[0]=M.tobble;for(let ee=0;ee<f.length;ee++){let pe=f[ee];if(pe.type!=="enemyShot")continue;if(pe.accurate&&$.downed&&pe.target!=="tobble"){f.splice(ee--,1);continue}let se=bo(pe.dir,pe.spread,i,ae);if(pe.target==="tobble"){let xe=M.tobble,Ne=pn(pe.from,se,ne.range,e,Ae);if(xe&&!xe.downed&&(Ne.kind==="head"||Ne.kind==="body")){let Ge=Vp(xe,ne.damage,S);f.push({type:"tobbleHit",id:pe.id,from:pe.from,result:Ge})}f.push({type:"shotFx",from:pe.from,to:Ne.point,accurate:!0})}else if(pe.accurate){let xe=Av(pe.from,se,ne.range,e,F,s.combat),Ne=xe.point;if(xe.kind==="head"||xe.kind==="body"){let Ge=$.damage(ne.damage);f.push({type:"playerHit",id:pe.id,from:pe.from,amount:ne.damage,result:Ge}),Ge==="downed"&&(F.state!=="downed"&&F.down(),k())}f.push({type:"shotFx",from:pe.from,to:Ne.slice(),accurate:!0})}else{let xe=pn(pe.from,se,ne.range,e,[]);f.push({type:"shotFx",from:pe.from,to:xe.point,accurate:!1})}}}return M.targets=()=>m,M.freeSlot=be,M.step=(F,$)=>{(!(F>0)||!Number.isFinite(F))&&(F=0),F=Math.min(F,A2),f.length=0;for(let se of p)f.push(se);p.length=0;let{m:ne,health:ae}=$;if(M.now+=F,S.now=M.now,S.aim=$.aim,S.m=ne,S.health=ae,!M.started&&ne.pos[2]>n.trigger.z&&W(f),S.started=M.started,J(ne,ae),S.playerDowned=b.downed,b.downed){L()||k();for(let se of m)se.role!=="revive"&&(se.role="hold");!R&&M.started&&E(N().id,"downed")}else M.started&&!M.clear&&U(ne,F);R=b.downed,M.started&&(le(),H()),l.expire(M.now,s.director),S.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,re(F,ne,ae),Oe(),M.tobble&&(n_(M.tobble,S,F),hl(M.tobble,s.combat));let ee=f.length;for(let se of m)Wv(se,S,F);for(let se=ee;se<f.length;se++)f[se].type==="death"&&te(m.find(xe=>xe.id===f[se].id));Te(ne,ae),Me(ne);for(let se of m)Ao(se,s.combat);M.tobble&&hl(M.tobble,s.combat);let pe=!!M.tobble&&M.tobble.downed&&ae.downed;return pe&&!_&&f.push({type:"checkpoint"}),_=pe,M.started&&!M.clear&&m.every(se=>!se.alive)&&h.allDone()&&(M.clear=!0,f.push({type:"clear"}),E(m[0].id,"clear"),M.tobble&&(Wp(M.tobble,S),E("tobble","tobbleClear"))),f},M.hurt=(F,$,ne="body")=>Y(F,$,ne,p),M.bash=F=>{if(!F.alive||F.state==="executed"||F.state==="unused")return null;let $=Y(F,s.melee.bashDamage,"bash",p);return $==="hit"?(Bv(F,S),"hit"):$==="kill"?"kill":null},M.beginExecution=F=>Hv(F,S),M.finishExecution=F=>{S.events=p;let $=Vv(F,S,"execute");return S.events=f,$==="kill"&&te(F),$},M.releaseExecution=F=>Gv(F),M.openPad=F=>{let $=h.list.find(ne=>ne.id===F);return!$||$.state!=="dormant"?!1:($.state="open",$.nextT=M.now+s.pad.interval,p.push({type:"padOpen",id:F}),E(F,"padOpen",p,!0),L()&&E("tobble","tobblePad",p,!0),!0)},M.spawnRep=()=>{let F=be();if(!F)return null;let $=h.list[0];return Ip(F,$?$.pos:[0,0,0],S)},M.downRep=F=>{S.events=p;let $=Up(F,S);return S.events=f,$==="down"},M.hurtTobble=F=>{if(!M.tobble)return null;S.events=p;let $=Vp(M.tobble,F,S);return S.events=f,$},M.reserved=d,M.reviveTobble=()=>{if(!M.tobble)return!1;S.events=p;let F=Wp(M.tobble,S);return S.events=f,F&&hl(M.tobble,s.combat),F},M.throwGrenade=(F,$)=>c.throw(F,$),M.reset=()=>{l.reset(),c.reset(),h.reset(),v=x(),m.forEach((F,$)=>{Cp(F,s.associate),$>=g&&Pp(F)}),A(),M.tobble=S.tobble=u()?M.tobble?zp(M.tobble):Bp(n.tobble,s.tobble):null,_=!1,y=0,S.playerDowned=!1,f.length=0,p.length=0,M.started=M.clear=!1,M.now=0,M.startT=0,M.kills=0,M.hideT=M.stayT=0,S.now=0,S.started=!1,S.aim=void 0,R=!1,I=!1;for(let F of m)Ao(F,s.combat)},M}function Du(n,e,t){let i=t[0]-e[0],s=t[2]-e[2],r=au(n),o=lu(n),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var l_=n=>Math.max(0,Math.min(1,n));function c_({hp:n,max:e,downed:t,downT:i,hits:s=[],now:r,fb:o=K.feedback}){let a=t?1:e>0?l_(1-n/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let d=o.hitFlashTime>0?l_(1-(r-h.t)/o.hitFlashTime):0;if(d<=0)continue;let u=Math.cos(h.angle),f=Math.sin(h.angle);l.top=Math.max(l.top,d*Math.max(0,u)),l.right=Math.max(l.right,d*Math.max(0,f)),l.bottom=Math.max(l.bottom,d*Math.max(0,-u)),l.left=Math.max(l.left,d*Math.max(0,-f))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!t,seconds:t?Math.ceil(Math.max(0,i)):0}}}var R2=Object.freeze({Rep:q.glorpPurple,PA:q.cream,Tobble:q.tobbleMint}),Vs=(...n)=>Object.freeze(n.map(e=>Object.freeze({speaker:"Tobble",text:e}))),Yp=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),tobbleRevive:Vs("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:Vs("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:Vs("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:Vs("Two more reps! I'm good!"),tobbleFlank:Vs("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:Vs("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:Vs("Ooh, you closed your rings!"),tobbleHeadshot:Vs("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function h_(n=()=>K.feedback){let e=1/0,t=0,i=null,s={},r=[],o=l=>{let c=Yp[l],h=c[(s[l]||0)%c.length];return typeof h=="string"?"Rep":h.speaker};function a(l){let c=Yp[l],h=(s[l]||0)%c.length;s[l]=h+1,i=typeof c[h]=="string"?{speaker:"Rep",text:c[h]}:c[h],t=n().barkTime,e=0}return{say(l,c=!1){return!Yp[l]||!c&&e<n().barkGap?!1:c&&i&&t>0&&e<1e-9&&o(l)!==i.speaker?(r.push(l),!0):(a(l),!0)},tick(l){l>0&&(e+=l,t-=l,r.length&&e>=n().barkMinShow&&a(r.shift()))},current:()=>t>0&&i?{speaker:i.speaker,text:i.text,color:R2[i.speaker]||null}:null,reset(){e=1/0,t=0,i=null,r.length=0;for(let l of Object.keys(s))s[l]=0}}}var u_=4,C2=1.2,Nn=[0,0,0];function P2(){let n=(e,t,i,s,r)=>{let o=new mt(e,t,i).translate(0,s,0);o.deleteAttribute("uv");let a=new Je(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new Mt(c,3)),o};return zt([n(.3,.16,.22,.08,q.cream),n(.34,.07,.26,.195,q.playerOrange)],!1)}function I2(n,e,t){return n.accurate&&e?(e(t),t):(t[0]=n.from[0],t[1]=n.from[1],t[2]=n.from[2],t)}function d_({scene:n,effects:e,sfx:t,fight:i,views:s,cam:r=null,hooks:o={}}){let a=new Map(i.enemies.map((R,I)=>[R.id,s[I]])),l=new Map(i.enemies.map(R=>[R.id,R])),c=new Map,h=[],d=new Ji(P2(),Ct({vertexColors:!0,rim:0}),u_);d.name="pickups",d.frustumCulled=!1,d.count=0,n.add(d);let u=new Vt,f=0,p=h_(),g=(R,I)=>Math.sin(Du(R.yaw,R.pos,I)),m=(R,I)=>Math.min(1,6/Math.max(Math.hypot(I[0]-R.pos[0],I[2]-R.pos[2]),.001)),x=[0,0,0],v=[0,1,0],w=(R,I=1)=>(x[0]=R[0],x[1]=R[1]+I,x[2]=R[2],x);function b(R,I){let A=K.feedback,L=R.kind;if(L==="body"||L==="head")return;let E=w(R.pos),N=L==="execute"?A.killGelCount*2:L==="bleed"?A.gelCount:A.killGelCount;if(e.gel(E,v,N),L!=="bleed"){if(e.receipts(w(R.pos,1.2),A.receiptCount),y(R.pos),L==="tobble"){t.play("kill",A.killVolume*.5,g(I,R.pos));return}o.marker&&o.marker("kill"),t.play(L==="execute"?"finish":"kill",L==="execute"?A.bashVolume:A.killVolume,g(I,R.pos))}}let S=R=>{let I=i.pads.find(A=>A.id===R);return I?I.pos:[0,0,0]};function M(R){let I=null,A=1/0;for(let L of i.enemies){let E=Math.hypot(L.pos[0]-R[0],L.pos[2]-R[2]);E<A&&(A=E,I=L)}return I}function _(R,I){let A=K.feedback,L=K.associate;for(let E of R)if(E.type==="bark")p.say(E.key,!!E.force);else if(E.type==="padOpen")t.play("saunaOpen",A.saunaVolume,g(I,S(E.id)));else if(E.type==="padClosed")t.play("saunaClose",A.saunaVolume,g(I,S(E.id)));else if(E.type==="padSpawn"){let N=S(E.id);for(let k=0;k<4;k++)e.steam([N[0]+(k-1.5)*.25,.1,N[2]])}else if(E.type==="explode"){e.blast(E.pos);let N=Math.hypot(E.pos[0]-I.pos[0],E.pos[2]-I.pos[2]),k=Math.min(1,8/Math.max(N,.001));t.play("boom",A.boomVolume*Math.max(.4,k),g(I,E.pos)),r&&(r.kick(4*k,(Math.random()*2-1)*2*k),r.bump(k))}else if(E.type==="clank")t.play("clank",A.clankVolume*m(I,E.pos),g(I,E.pos));else if(E.type==="tobbleShot"){let N=i.tobble,k=o.tobbleView;k&&N&&N.pop>=.5?k.tip(Nn):(Nn[0]=E.from[0],Nn[1]=E.from[1],Nn[2]=E.from[2]);let W=E.to[0]-Nn[0],te=E.to[1]-Nn[1],Y=E.to[2]-Nn[2],J=Math.hypot(W,te,Y)||1;e.flash(Nn,[W/J,te/J,Y/J]),e.friendlyTracer(Nn,E.to),t.play("tobbleShot",A.tobbleShotVolume*m(I,E.from),g(I,E.from))}else if(E.type==="tobbleHit"){let N=i.tobble;N&&e.gel(N.chest,[E.from[0]-N.chest[0],.3,E.from[2]-N.chest[2]],4)}else if(E.type==="revived")t.play("revive",A.reviveVolume);else if(E.type==="cloneRevive"){let N=l.get(E.id);N&&t.play("revive",A.reviveVolume*.6*m(I,N.pos),g(I,N.pos))}else if(E.type==="down")o.marker&&o.marker("kill"),e.gel(w(E.pos),v,6),t.play("hit",A.hitVolume,g(I,E.pos));else if(E.type==="death")b(E,I);else if(E.type==="checkpoint")o.restart&&o.restart();else if(E.type==="telegraph"){c.set(E.id,L.popTime+L.telegraphTime);let N=a.get(E.id),k=l.get(E.id);N&&N.glint(!0),k&&t.play("charge",A.chargeVolume,g(I,k.pos))}else if(E.type==="shotFx"){let N=M(E.from),k=N&&a.get(N.id);I2(E,k?k.tip:null,Nn);let W=E.to[0]-Nn[0],te=E.to[1]-Nn[1],Y=E.to[2]-Nn[2],J=Math.hypot(W,te,Y)||1;e.enemyFlash(Nn,[W/J,te/J,Y/J]),e.enemyTracer(Nn,E.to);let U=Math.hypot(E.from[0]-I.pos[0],E.from[2]-I.pos[2]);t.play("blaster",A.blasterVolume*Math.min(1,8/Math.max(U,.001)),g(I,E.from))}}function y(R){h.length>=u_&&h.shift(),h.push({pos:[R[0],R[1],R[2]]}),P()}function P(){d.count=h.length;for(let R=0;R<h.length;R++)u.position.set(h[R].pos[0],h[R].pos[1],h[R].pos[2]),u.rotation.set(0,f*C2+R,0),u.updateMatrix(),d.setMatrixAt(R,u.matrix);d.instanceMatrix.needsUpdate=!0}return{handle:_,forceBark:R=>p.say(R,!0),bark:()=>p.current(),pan:g,near:m,tick:R=>p.tick(R),update(R){if(R>0){f+=R;for(let[I,A]of c)if(A-R<=0){c.delete(I);let L=a.get(I);L&&L.glint(!1)}else c.set(I,A-R);h.length&&P()}},addPickup:y,collect(R,I){let A=0;for(let L=h.length-1;L>=0;L--)Math.hypot(R[0]-h[L].pos[0],R[2]-h[L].pos[2])<=I&&(h.splice(L,1),A++);return A&&P(),A},count:()=>h.length,pickups:()=>h.map(R=>R.pos.slice()),reset(){h.length=0,d.count=0,d.instanceMatrix.needsUpdate=!0,c.clear(),p.reset()}}}var f_=.05;function L2({locked:n,device:e,panelOpen:t}){return!!(n||e==="pad"||t)}function p_(n){return`${n.gap}|${n.endInset}|${n.minLength}`}function D2(n){return n&&n.has("room")?"greyRoom":"kioskRow"}function N2(n,e,{downed:t=!1,busy:i=!1}={}){return t&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(t||i)&&(n.fire=!1),n}var O2=2e3,U2=500,F2=500,k2=new Set(["enemyShot","playerHit","telegraph","death","clear","bark","down","explode","padOpen","padClosed","padSpawn","tobbleShot","tobbleHit","revived","checkpoint"]);function m_({canvas:n,gl:e,params:t}){let i=Rh(n,e),s=i.renderer,r=Ah(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=rx();l.panelOpen=c.isOpen;let h=new js,d=new un(K.camera.fov,1,.05,100),u=Ch();h.add(u.mesh);let f=D2(t),p=f==="greyRoom"?jh:Qg,g=Jg(p);h.add(g.group);let m=g.boxes,x=p.spawn,v=()=>ux(m,{...hx(),exclude:p.coverExclude}),w=p_(K.cover),b=[],S=0,M=!1,_=null,y=Mx({boxes:m,spawn:x.pos,coverEdges:v(),onAction(X){_&&_.onAction(X)},onState(X,T){b.push({state:X,from:T,t:S,tapped:M,auto:X==="coverSlide"&&!M&&(T==="move"||T==="sprint")}),b.length>O2&&b.shift()},onStep(X){R.dip(K.feedback.stepDip),A.play("step",K.feedback.stepVolume*(X.sprint?1.25:1))}});y.place(x.pos,x.yaw);let P=Kx(y);h.add(P.group);let R=qg(),I=Zh(),A=Sx({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),L=wx(),E=Ax(),N=Ux(h),k=kx(document.body),W=uo(1),te=(p.dummies||[]).map(X=>{let T=Ix(X),B=Bx(T);return h.add(B.group),{dummy:T,view:B,wasAlive:!0}}),Y=te.map(X=>X.dummy),J=Tv(),U=f==="kioskRow"?a_({level:p,boxes:m,edges:v(),rand:uo(4242)}):null,le=U?U.enemies.map(X=>{let T=tv(X);return h.add(T.group),T}):[],be=new Map(U?U.enemies.map((X,T)=>[X,le[T]]):[]),H=xv(),oe=U?Yx(h):null,we=U?cv(h,U.pads,N):null,de=null,re=null,Oe=!1,De=null,Me=0,Ae={restart:()=>{Oe=!0},marker:X=>{De=X,Me=K.feedback.killMarkerTime},tobbleView:null},Te=U?d_({scene:h,effects:N,sfx:A,fight:U,views:le,cam:R,hooks:Ae}):null;function F(){!U||re===U.tobble||(de&&h.remove(de.group),de=U.tobble?lv(U.tobble):null,de&&h.add(de.group),re=U.tobble,Ae.tobbleView=de)}F(),_=U?wv({mover:y,fight:U,arsenal:E,bag:H,cam:R,sfx:A,effects:N,views:le,health:J,playerView:P,grenadeView:oe,boxes:m,hooks:Ae}):null;let $=U?U.targets():Y,ne=[],ae=[],ee={pos:[0,0,0],yaw:0},pe=[],se="-",xe="-",Ne=null,Ge=null,G=0,ve=1,Fe=[],Ve={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},fe=[0,0,0],tt=0,ke=[0,0,0];R.snap(x.pos,x.yaw,"normal",1);let Ue=null,O=!1,C=null,j=!1,Ce=!1,ge=!1,_e={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1,melee:!1},Ie={reload:!1,weapon:null,fire:!1,interact:!1,melee:!1},ue={melee:!1,interact:!1},he={melee:!1,grenade:!1,interact:!1},Pe={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1,grenade:!1,interactHeld:!1},V={weapon:null,reload:!1,fire:!1,firePressed:!1},me=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function ce(){let X=i.resize();d.aspect=X.aspect,d.updateProjectionMatrix()}ce(),window.addEventListener("resize",ce),n.addEventListener("click",()=>r.requestLock());let ze=()=>{I.reset(),L.reset()};window.addEventListener("blur",ze),document.addEventListener("pointerlockchange",()=>{r.isLocked()||ze()});let Be=()=>A.unlock();window.addEventListener("pointerdown",Be),window.addEventListener("keydown",Be),window.addEventListener("keydown",X=>{X.repeat||xf(X.target)||(X.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):X.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function Se(){U&&U.reset(),J.reset(),E.reset(),H.reset(),Ke(x.pos,x.yaw),Ne=null,I.reset(),L.reset(),R.recenter(),N.clear(),Fe.length=0,ne.length=0,De=null,Ge=null,Me=0,G=0,Te&&Te.reset();for(let X of le)X.reset();U&&(_.reset(),oe.reset(),we.reset(),F(),de&&de.reset()),Oe=!1}function Re(){y.state!=="downed"&&y.down(),E.cancelReload(),A.play("downed",K.feedback.hurtVolume),Te&&Te.forceBark("downed")}function Ye(X){ae.push({t:S,type:X.type,id:X.id||null,accurate:!!X.accurate,hit:X.type==="playerHit",key:X.key||null,kind:X.kind||null}),ae.length>F2&&ae.shift()}function ye(X){let T=K.feedback;ee.pos[0]=y.pos[0],ee.pos[1]=y.pos[1],ee.pos[2]=y.pos[2],ee.yaw=R.yaw;let B=U.step(X,{m:y,health:J,aim:{lens:Le.pos,dir:Le.dir,active:!!Ne&&Ne!=="blind"||y.grenadeAim}});Te.handle(B,ee);for(let Q of B)if(k2.has(Q.type)&&Ye(Q),Q.type==="playerHit"){let Ee=Du(R.yaw,y.pos,Q.from);ne.push({t:S,angle:Ee});let Ze=Math.random()*2*Math.PI;R.kick(T.hitKick*Math.cos(Ze),T.hitKick*Math.sin(Ze)),A.play("hurt",T.hurtVolume,Math.sin(Ee)),_.onPlayerHit(),Q.result==="downed"&&Re()}else Q.type==="clear"&&A.play("clear",T.killVolume);for(;ne.length&&S-ne[0].t>T.hitFlashTime;)ne.shift();let ie=J.update(X,{standIn:!U.tobble});if(ie==="revived"&&y.revive(),ie==="bleedOut"||Oe){Se();return}let Z=J.downed?0:Te.collect(y.pos,K.combat.pickupRadius);Z&&(E.addReserve("regret",Z*K.associate.ammoDrop),A.play("pickup",T.pickupVolume))}function Xe(){return U.clear?"Check-in Turnstiles: set complete":U.pads.some(X=>X.state==="open")?rl("sauna",r.device()):U.started?"Get past the front desk":"Walk in"}function Ke(X,T){y.place(X,T),R.snap(X,T,ip(y),mr(y)),tt=y.slams}let Le={pos:[0,0,0],dir:[0,0,1],fov:70},je="normal",ct=1,At=0,Dt=0,It=0,cn=0,Kt=0,Pt=0,mn=0,ht=window.__cr;ht.stats=()=>({fps:At,ms:Dt,calls:Kt,tris:Pt,scale:i.scale(),characters:1+le.length+(de?1:0)}),ht.player=()=>{let X=y.cover;return{pos:y.pos.slice(),state:y.state,speed:y.speed(),facing:y.facing,entries:y.entries,cover:X?{id:X.edge.id,kind:X.edge.kind,t:X.t,length:X.edge.length,pop:X.pop,exposed:X.exposed}:null,slams:y.slams,steps:y.steps,blind:X?X.blind:0,firing:!!y.firing}},ht.gun=()=>{let X=E.current(),T=E.ammo[X],B=E.reload,ie=K.weapons[X];return{id:X,slot:E.slot,mag:T.mag,reserve:T.reserve,boost:T.boost,reload:B?{u:B.t/Math.max(ie.reloadTime,K.combat.minReloadTime),press:B.press}:null,switching:E.switching>0,spread:E.spreadOf(Ne||"hip"),stance:Ne}},ht.dummies=()=>Y.map(X=>({id:X.id,health:X.health,alive:X.alive,pos:X.pos.slice()})),ht.level=()=>f,ht.fight=()=>U?{started:U.started,clear:U.clear,tokens:U.tokens.held(),pickups:Te.count(),pickupPos:Te.pickups(),enemies:U.enemies.filter(X=>X.state!=="unused").map(X=>({id:X.id,slot:U.enemies.indexOf(X),kind:"associate",state:X.state,health:X.health,alive:X.alive,pos:X.pos.slice(),holds:U.tokens.holds(X.id),role:X.role,point:X.point?X.point.index:null,pop:X.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},ht.tobble=()=>{let X=U&&U.tobble;return X?{state:X.state,hp:X.hp,downed:X.downed,pos:X.pos.slice(),point:X.point?X.point.index:null}:null},ht.pads=()=>U?U.pads.map(X=>({id:X.id,state:X.state,spawned:X.spawned,alive:X.alive})):[],ht.grenades=()=>({count:H.count,live:U?U.grenades.live.map(X=>({pos:X.pos.slice(),fuse:X.fuse})):[]}),ht.aimThrow=(X,T)=>_?_.aimThrow(X,T):!1,ht.hurtTobble=X=>U?U.hurtTobble(X):null,ht.downRep=X=>{let T=U&&U.enemies.find(B=>B.id===X);return!!T&&U.downRep(T)},ht.openPad=X=>U?U.openPad(X):!1,ht.spawnRep=()=>{let X=U&&U.spawnRep();return X?X.id:null},ht.health=()=>({hp:J.hp,max:K.health.max,downed:J.downed,downT:J.downT}),ht.hurt=X=>{J.damage(X)==="downed"&&Re()},ht.god=X=>{K.health.godMode=X?1:0},ht.fightLog=()=>ae.map(X=>({...X})),ht.clearFightLog=()=>{ae.length=0},ht.restart=()=>Se(),ht.shots=()=>pe.map(X=>({...X})),ht.clearShots=()=>{pe.length=0},ht.setGun=(X,T)=>E.set(X,T),ht.look=(X,T)=>{R.yaw=X,R.pitch=T},ht.camera=()=>{let X=Le;return{pos:X.pos.slice(),fov:X.fov,inside:xo(m,X.pos,.1),mode:je,side:ct,yaw:R.yaw,pitch:R.pitch}},ht.transitions=()=>b.map(X=>({...X})),ht.clearTransitions=()=>{b.length=0},ht.coverTarget=()=>{let X=C||{moveX:Ue?Ue.moveX:0,moveY:Ue?Ue.moveY:0},T=tl(y.coverEdges,m,y.pos,np(y,{moveX:X.moveX||0,moveY:X.moveY||0,camYaw:R.yaw},[0,0]),R.yaw,K.cover,K.move.radius);return T?{id:T.edge.id,kind:T.edge.kind,dist:T.dist}:null},ht.place=X=>{let T=X==="spawn"?x:p.features[X];T&&Ke(T.pos,T.yaw)},ht.at=(X,T,B=0)=>Ke([X,0,T],B),ht.drive=X=>{if(!X){j?Ce=!0:C=null;return}X.fire&&!(C&&C.fire)&&(Ie.fire=!0),X.melee&&!(C&&C.melee)&&(Ie.melee=!0),C=X,Ce=!1,X.tap&&(j=!0),X.reload&&(Ie.reload=!0),X.interact&&(Ie.interact=!0),X.weapon&&(Ie.weapon=X.weapon)};function ii(X){if(C){Pe.moveX=C.moveX||0,Pe.moveY=C.moveY||0,Pe.sprint=!!C.sprint,Pe.aim=!!C.aim,Pe.tap=j;let T=L.update(!!C.fire,Ie.fire,!0);Ie.fire=!1,Pe.fire=T.fire,V.fire=T.fire,V.firePressed=T.firePressed,V.reload=Ie.reload,V.weapon=Ie.weapon,Ie.reload=!1,Ie.weapon=null,he.melee=!!C.melee,he.grenade=!!C.grenade,he.interact=!!C.interactHeld,j&&(j=!1,Ce&&(C=null,Ce=!1))}else{let T=Ue.held;Pe.moveX=Ue.moveX,Pe.moveY=Ue.moveY,Pe.tap=I.update(T.cover,_e.cover,X,K.move.tapMax),Pe.sprint=T.sprint||I.holding(),Pe.aim=T.aim;let B=L.update(T.fire,_e.fire,!0);Pe.fire=B.fire,V.fire=B.fire,V.firePressed=B.firePressed,V.reload=_e.reload,V.weapon=_e.weapon,he.melee=T.melee,he.grenade=T.grenade,he.interact=T.interact}return ue.interact=_e.interact||Ie.interact,ue.melee=_e.melee||Ie.melee,Pe.grenade=he.grenade,Pe.interactHeld=he.interact,_e.cover=!1,_e.fire=!1,_e.reload=!1,_e.weapon=null,_e.interact=!1,_e.melee=!1,Ie.interact=!1,Ie.melee=!1,Pe.camYaw=R.yaw,M=Pe.tap,Pe}let zi=X=>X.toFixed(1);function Hi(){let X=y.cover;if(X)return`cover: ${X.edge.kind} ${X.edge.id}  t ${X.t.toFixed(2)}/${X.edge.length.toFixed(2)}  pop ${X.pop.toFixed(2)}`;let T=ht.coverTarget();return T?`tap grabs: ${T.kind} ${T.dist.toFixed(1)} m`:"tap grabs: nothing"}function Ws(){let X=ht.gun(),T=X.id;return`gun: ${cu[T].name} ${X.mag}/${K.weapons[T].infiniteReserve>0?"\u221E":X.reserve}  ${X.stance||"-"}  spread ${X.spread.toFixed(1)}`}function mi(){let X=r.padStatus(),T=[U?"GYMS OF WAR \u2014 CHECK-IN TURNSTILES":"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];if(U&&T.push("E / X: hold to renew your membership when downed, another set when clear","F / B: tap bash, hold rev Cheat Day (The Regret)   G / LB: hold to aim a kettlebell, release to throw   E / X: finish a downed Rep, hold to revive Tobble"),T.push("Sound starts after a click or key","",`${y.state}   ${y.speed().toFixed(2)} m/s`,Hi(),Ws()),U){T.push(`fight: ${U.enemies.filter(Z=>Z.alive).length}/${U.enemies.filter(Z=>Z.state!=="unused").length}  tokens ${U.tokens.held().join(",")||"-"}  hp ${J.hp.toFixed(0)}`),T.push(`health: ${J.hp.toFixed(0)}/${K.health.max}  ${J.downed?`downed ${J.downT.toFixed(1)}`:"-"}`);let B=U.tobble,ie=U.pads[0];T.push(`tobble: ${B?`${B.state} hp ${B.hp.toFixed(0)}`:"off"}`,`sauna: ${ie?`${ie.state} ${ie.spawned}/${K.pad.total}`:"-"}   kettlebells ${H.count}`)}else T.push(`dummies: ${Y.filter(B=>B.alive).length}/${Y.length}  last: ${se} ${xe}`);T.push(`${Math.round(At)} fps   ${zi(Dt)} ms   scale ${i.scale()}`,`${Kt} draw calls   ${Pt} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${X}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=T.join(`
`)}let gi=X=>K.feedback[X];function Nu(X){X.type==="shot"?Ou(X):X.type==="reloadStart"?A.play("magOut",gi("reloadVolume")):X.type==="reloadPress"?(A.play(X.result,gi("reloadVolume")),Ge=X.result,G=0):X.type==="reloadDone"?A.play("magIn",gi("reloadVolume")):X.type==="dry"&&A.play("dry",gi("reloadVolume"))}function fl(X,T){Lx(X.dummy,T),X.dummy.alive&&!X.wasAlive&&X.view.respawn(),X.wasAlive=X.dummy.alive}let pl=[0,0,0];function Ou(X){let T=K.weapons[X.id],B=y.cover?y.cover.edge:null;hu(y,Ne,R.yaw,K.combat,fe);let ie=Cx({lens:Le.pos,view:Le.dir,muzzle:fe,spreadDeg:X.spread,range:T.range,boxes:m,targets:$,ignoreBox:B?B.boxIndex:-1,rand:W,aimed:Ne==="aim"}),Z=ie.hit,Q=Z.target,Ee=null;Q&&(Ee=U?U.hurt(Q,ap(T,Z.kind,X.mult),Z.kind==="head"?"head":"body"):Dx(Q,ap(T,Z.kind,X.mult))),se=Z.kind,xe=Q?Q.id:"-",pe.push({t:S,kind:Z.kind,target:Q?Q.id:null,point:Z.point.slice(),stance:Ne}),pe.length>U2&&pe.shift();let Ze=[ie.dir[0],ie.dir[1],ie.dir[2]];if(Fe.push({id:X.id,from:fe.slice(),dir:Ze,hit:Z,target:Q,result:Ee}),Ee==="kill"&&!U){let We=te.find(qe=>qe.dummy===Q);We.wasAlive=!1}}function Uu(X){let T=K.weapons[X.id],B=K.feedback,ie=P.gunTip(pl);R.kick(T.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*T.kickYaw),N.flash(ie,X.dir),N.tracer(ie,X.hit.point),A.play(X.id==="regret"?"rifle":"pistol",B.shotVolume);let Z=[-X.dir[0],-X.dir[1],-X.dir[2]];if(X.hit.kind==="world")N.spark(X.hit.point,Z);else if(X.target){let Q=U?be.get(X.target):te.find(Ee=>Ee.dummy===X.target).view;X.result==="kill"?(U?(Q.death(),Te.addPickup(X.target.pos)):Q.burst(),N.gel(X.hit.point,Z,B.killGelCount),N.receipts(X.target.pos.map((Ee,Ze)=>Ze===1?Ee+1.2:Ee),B.receiptCount),De="kill",Me=B.killMarkerTime,A.play("kill",B.killVolume)):X.result==="down"?(N.gel(X.hit.point,Z,B.gelCount),De="kill",Me=B.killMarkerTime,A.play("hit",B.hitVolume)):(U||Q.hit(X.hit.kind),N.gel(X.hit.point,Z),De=X.hit.kind,Me=B.hitMarkerTime,A.play(X.hit.kind==="head"?"head":"hit",B.hitVolume))}}let Fu=Eh({before(X){if(Ue=r.poll(),O=!!C||j||L2({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=O,!O){I.reset(),L.reset(),_e.cover=!1,_e.fire=!1,_e.reload=!1,_e.weapon=null,_e.interact=!1,_e.melee=!1;return}let B=Math.min(X,f_);ge=Ue.held.aim||C&&C.aim,R.look(Ue.lookDX,Ue.lookDY,Ue.lookX,Ue.lookY,B,ge,ve),Ue.pressed.cover&&(_e.cover=!0),Ue.pressed.fire&&(_e.fire=!0),Ue.pressed.reload&&(_e.reload=!0),Ue.pressed.interact&&(_e.interact=!0),Ue.pressed.melee&&(_e.melee=!0);for(let[ie,Z]of me)Ue.pressed[ie]&&(_e.weapon=Z)},step(X){if(!O)return;let T=p_(K.cover);T!==w&&(w=T,y.coverEdges=v()),S+=X;let B=ii(X);N2(B,V,{downed:!!U&&J.downed,busy:E.reload!==null||E.switching>0}),_&&(_.step(X,{meleeHeld:he.melee,meleePressed:ue.melee,grenadeHeld:he.grenade,interactHeld:he.interact,interactPressed:ue.interact,device:r.device(),camYaw:R.yaw,camPitch:R.pitch}),_.busy()&&(V.fire=!1,V.firePressed=!1,B.fire=!1)),y.update(B,X),Ne=Rx(y);let ie=E.update(V,Ne,X);for(let Z of ie)Nu(Z);U&&(Te.tick(X),ye(X));for(let Z of te)fl(Z,X);Nx(y.pos,p.ammoCrates,K.combat.crateRadius)&&(E.refill(),H.refill()),Oe&&Se()},render(X,T){let B=O?Math.min(T,f_):0;Ve.shot=Fe.length>0,Ve.dir=Le.dir,Ve.stance=Ne,Ve.weapon=E.current(),Ve.kettlebell=!!_&&_.armed(),P.update(X,B,Ve);for(let it of te)it.view.update(B);for(let it of le)it.update(X,B);Te&&(Te.update(B),oe.update(U.grenades.live,X,B),we.update(B),de&&(de.group.visible=!!U.tobble,U.tobble&&de.update(X,B)));let ie=y.pos,Z=y.prevPos;for(let it=0;it<3;it++)ke[it]=Z[it]+(ie[it]-Z[it])*X;y.slams>tt&&(tt=y.slams,R.bump(),A.play("thud",K.cover.thudVolume));let Q=ip(y);if(Q==="aim"&&je!=="aim"){let it=y.cover?y.cover.edge:null;R.hold(pn(Le.pos,Le.dir,K.camera.holdRange,m,$,{ignoreBox:it?it.boxIndex:-1}).point)}je=Q,ct=mr(y);let Ee=R.update(B,{target:ke,mode:je,side:ct},m);Le.pos[0]=Ee.pos[0],Le.pos[1]=Ee.pos[1],Le.pos[2]=Ee.pos[2],Le.fov=Ee.fov,Le.dir[0]=Ee.dir[0],Le.dir[1]=Ee.dir[1],Le.dir[2]=Ee.dir[2],d.fov!==Ee.fov&&(d.fov=Ee.fov,d.updateProjectionMatrix()),P.fadeHeadFor(Ee.pos,K.camera.headHideDist,K.camera.headHideMargin),d.position.set(Ee.pos[0],Ee.pos[1],Ee.pos[2]),d.lookAt(Ee.pos[0]+Ee.dir[0],Ee.pos[1]+Ee.dir[1],Ee.pos[2]+Ee.dir[2]);for(let it of Fe)Uu(it);Fe.length=0,N.update(B),Me-=B,Me<=0&&(De=null),Ge&&(G+=B,G>=K.feedback.reloadResultTime&&(Ge=null));let Ze=y.cover?y.cover.edge:null,We=pn(Le.pos,Le.dir,100,m,$,{ignoreBox:Ze?Ze.boxIndex:-1});ve=r.device()==="pad"&&We.target?K.look.pad.assist:1;let qe=!!y.cover&&y.cover.pop<.5,nt=Ne||(y.cover&&(y.cover.pop>0||qe)?"aim":"hip"),lt=U?c_({hp:J.hp,max:K.health.max,downed:J.downed,downT:J.downT,hits:ne,now:S}):null;k.render(Fx({arsenal:E,stance:Ne,firing:Pe.fire,covered:qe,device:r.device(),spreadDeg:E.spreadOf(nt),fov:d.fov,viewportH:n.clientHeight||window.innerHeight,marker:De,reloadFlash:Ge,face:lt,bark:Te?Te.bark():null,objective:U?Xe():"",banner:U?J.downed?{title:`You've hit a plateau ${lt.downed.seconds}`,hint:rl(U.tobble&&!U.tobble.downed?"giveUpTobble":"giveUp",r.device()),hold:_.giveUpFrac()}:U.clear?{title:"SET COMPLETE",hint:r.device()==="pad"?"Rest 60 seconds! X for another set":"Rest 60 seconds! E for another set"}:null:null,grenades:U?H.count:null,action:_?_.prompt():null})),u.update(performance.now()/1e3),g.update(B),s.render(h,d),Kt=s.info.render.calls,Pt=s.info.render.triangles,It++,cn+=T,cn>=1&&(At=It/cn,Dt=cn/It*1e3,It=0,cn=0),mn+=T,mn>=.1&&(mn=0,mi()),i.frameDone(T*1e3)}});t&&t.has("tune")&&c.toggle(),Ue=r.poll(),R.update(0,{target:x.pos,mode:"normal",side:1},m),mi(),Fu.start()}var B2={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function qp(n,e){window.__cr.error={kind:n,detail:e||""},document.documentElement.dataset.crError=n;let t=document.getElementById("cr-error");t&&(t.textContent="",t.appendChild(document.createTextNode(B2[n])),n==="boot"&&e&&(t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode(e))),t.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||qp("boot",n.message)});function z2(){let n=document.getElementById("cr-canvas"),e=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){qp("webgl");return}let t=new URLSearchParams(location.search);t.has("look")?Gg({canvas:n,gl:e}):m_({canvas:n,gl:e,params:t}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{z2()}catch(n){qp("boot",n&&n.message)}})();
